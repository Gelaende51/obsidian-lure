/*
 * Lure — an editable vault-path breadcrumb for Obsidian note headers.
 * Copyright (C) 2026 Vault51
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or (at
 * your option) any later version. It is distributed WITHOUT ANY WARRANTY;
 * see the LICENSE file or <https://www.gnu.org/licenses/> for details.
 */

import { Command, Hotkey, Menu, Platform, Plugin, WorkspaceLeaf } from "obsidian";
import { BreadcrumbManager } from "./breadcrumbManager";
import { UnresolvedNotes } from "./unresolvedNotes";
import { AliasRows, DiskLinks, followDelete, followRename, setRecording } from "./altPaths";
import { setCurrentVaultIcon } from "./systemLocations";
import { letThroughGuard } from "./folderChildSuggest";
import { EXTERNAL_VIEW_TYPE, ExternalFileView } from "./externalFileView";
import { BreadcrumbSettingTab } from "./settingsTab";
import { BreadcrumbPathSettings, DEFAULT_SETTINGS } from "./settings";
import { setLanguageOverride, t } from "./lang";
import type { StringKey } from "./lang/strings";

/** Obsidian's built-in "Rename file" command, bound to F2 by default. */
const RENAME_COMMAND_ID = "workspace:edit-file-title";

/**
 * Obsidian's fallback when it cannot focus the inline title — scrolled out
 * of view, or a view that has none. It is a real modal, and modals push
 * their own keymap scope, which is why the rename key stops reaching the
 * command as soon as one is up.
 */
const RENAME_DIALOG_SELECTOR = ".modal.mod-file-rename";

/** How long the dialog is waited for, and how often. Generous: missing it costs the fix. */
const RENAME_DIALOG_TIMEOUT_MS = 500;
const RENAME_DIALOG_POLL_MS = 25;

/** Keys that only ever begin a chord; pressing one is not yet doing anything. */
const MODIFIER_KEYS = new Set(["Control", "Shift", "Alt", "Meta", "AltGraph", "CapsLock"]);

type CheckCallback =NonNullable<Command["checkCallback"]>;

/** Obsidian writes the platform-agnostic modifier as "Mod"; this is what it means here. */
function modKey(): string {
	return Platform.isMacOS ? "Meta" : "Ctrl";
}

/** One binding against one press, with the binding's modifiers already spelled for this platform. */
function matchesBinding(binding: Hotkey, wanted: Set<string>, evt: KeyboardEvent): boolean {
	if (binding.key.toLowerCase() !== evt.key.toLowerCase()) return false;
	return (
		wanted.has("Ctrl") === evt.ctrlKey &&
		wanted.has("Shift") === evt.shiftKey &&
		wanted.has("Alt") === evt.altKey &&
		wanted.has("Meta") === evt.metaKey
	);
}

export default class BreadcrumbPathPlugin extends Plugin {
	settings: BreadcrumbPathSettings = DEFAULT_SETTINGS;
	private manager!: BreadcrumbManager;
	/** Linked-to notes that are not there yet, for the dropdown. */
	unresolvedNotes!: UnresolvedNotes;
	/** Aliases for the dropdown, by folder. */
	aliasRows!: AliasRows;
	/** Hard and symbolic links in the vault, for a note's other paths. */
	diskLinks!: DiskLinks;
	/** Alternates the rename command between the inline title and the header path bar. */
	private useHeaderRename = false;
	private originalRenameCallback: CheckCallback | null = null;

	async onload(): Promise<void> {
		await this.loadSettings();
		this.addSettingTab(new BreadcrumbSettingTab(this.app, this));

		// Obsidian's editor only works on TFiles, which exist for vault
		// contents alone, so a file reached by browsing out of the vault
		// gets this read-only view instead. Registered unconditionally:
		// a leaf restored from a saved workspace has to find its view type.
		this.registerView(EXTERNAL_VIEW_TYPE, (leaf) => new ExternalFileView(leaf, this));

		this.unresolvedNotes = new UnresolvedNotes(this.app);
		this.aliasRows = new AliasRows(this.app);
		// A scan that finds links redraws the rows, so the other-paths button
		// appears on a note that has some.
		this.diskLinks = new DiskLinks(this.app, () => this.manager.refreshAll());
		const forget = (): void => {
			this.unresolvedNotes.invalidate();
			this.aliasRows.invalidate();
		};
		const changed = (): void => {
			forget();
			this.diskLinks.invalidate();
		};
		this.registerEvent(this.app.metadataCache.on("resolved", forget));
		// A note's other paths changed: the aliases are listed afresh, and the
		// rows redrawn so the other-paths button comes and goes with them.
		// Only then — redrawing on every edit of every note would be waste.
		const seenPaths = new Map<string, string>();
		this.registerEvent(
			this.app.metadataCache.on("changed", (file, _data, cache) => {
				const fm = cache.frontmatter;
				const now = JSON.stringify([fm?.paths ?? null, fm?.aliases ?? null]);
				const before = seenPaths.get(file.path) ?? JSON.stringify([null, null]);
				seenPaths.set(file.path, now);
				if (now === before) return;
				this.aliasRows.invalidate();
				this.manager.refreshAll();
			}),
		);
		this.registerEvent(this.app.vault.on("create", changed));
		this.registerEvent(
			this.app.vault.on("rename", (file, oldPath) => {
				changed();
				void followRename(this.app, oldPath, file.path);
			}),
		);
		this.registerEvent(
			this.app.vault.on("delete", (file) => {
				changed();
				void followDelete(this.app, file.path);
			}),
		);

		this.manager = new BreadcrumbManager(this);
		this.manager.registerEvents();

		this.registerFocusCommand();
		// The path field claims modified keys so they cannot edit the note
		// under it; this plugin's own keys act on the field and go through.
		letThroughGuard((evt) => this.isOwnKey(evt));
		// The navigation lock is shelved: it works, but not well enough to
		// support in the wild, and a mode nobody can reach is a mode nobody
		// can be surprised by. Everything behind it — the lock, its strings,
		// its styles and its test suite — stays where it is; this one line is
		// the whole switch, and putting the feature back is uncommenting it.
		// this.registerNavLockMenu();
		this.app.workspace.onLayoutReady(() => this.patchRenameCommand());
		this.registerCycleReset();
	}

	/**
	 * Starts the focus and rename keys' cycles over whenever anything else is
	 * pressed or clicked.
	 *
	 * On the document, in the capture phase, so no handler further in can
	 * keep it from being seen. Obsidian runs hotkeys from its own capture
	 * listener on `window`, which comes first — so by the time a key of the
	 * cycle reaches this one its step has already been taken, and it is
	 * recognised and left alone. Tab walks the same ladder and is left alone
	 * for the same reason, and a modifier on its own is only the start of a
	 * chord.
	 */
	private registerCycleReset(): void {
		const forget = (): void => {
			this.useHeaderRename = false;
			this.manager.forgetCycles();
		};
		this.registerDomEvent(
			document,
			"keydown",
			(evt) => {
				if (MODIFIER_KEYS.has(evt.key) || evt.key === "Tab") return;
				if (this.isCommandHotkey(RENAME_COMMAND_ID, evt)) return;
				if (this.isCommandHotkey(`${this.manifest.id}:focus-path-bar`, evt)) return;
				if (this.cycleKeyBackwards(evt) !== null) return;
				forget();
			},
			{ capture: true },
		);
		this.registerDomEvent(document, "pointerdown", forget, { capture: true });
		this.registerDomEvent(
			document,
			"keydown",
			(evt) => {
				const rename = this.cycleKeyBackwards(evt);
				if (rename === null) return;
				const breadcrumb = this.manager.getActiveBreadcrumb();
				if (!breadcrumb) return;
				evt.preventDefault();
				evt.stopPropagation();
				breadcrumb.retreatCycle(rename, rename ? () => this.renameInInlineTitle() : () => {});
			},
			{ capture: true },
		);
	}

	/**
	 * Shift added to the rename key or the focus key: the same cycle walked
	 * backwards. True for the rename key, false for the focus key, null for
	 * anything else — including a Shift chord something else is bound to,
	 * which is left to that.
	 */
	private cycleKeyBackwards(evt: KeyboardEvent): boolean | null {
		if (!evt.shiftKey) return null;
		const rename = this.isCommandHotkey(RENAME_COMMAND_ID, evt, true);
		if (!rename && !this.isCommandHotkey(`${this.manifest.id}:focus-path-bar`, evt, true)) return null;
		if (this.isBoundElsewhere(evt)) return null;
		return rename;
	}

	/** Whether a press is one of this plugin's commands' keys, the rename key, or Shift with either cycle key. */
	private isOwnKey(evt: KeyboardEvent): boolean {
		if (this.cycleKeyBackwards(evt) !== null) return true;
		if (this.isCommandHotkey(RENAME_COMMAND_ID, evt)) return true;
		const prefix = `${this.manifest.id}:`;
		const manager = this.app.hotkeyManager;
		const ids = new Set([...Object.keys(manager?.defaultKeys ?? {}), ...Object.keys(manager?.customKeys ?? {})]);
		for (const id of ids) {
			if (id.startsWith(prefix) && this.isCommandHotkey(id, evt)) return true;
		}
		return false;
	}

	/** Hands the rename back to Obsidian's inline title, as the forward cycle does past its last rung. */
	private renameInInlineTitle(): void {
		const command = this.app.commands?.commands?.[RENAME_COMMAND_ID];
		if (!command || !this.originalRenameCallback || !this.hasInlineTitle()) return;
		this.originalRenameCallback.call(command, false);
	}

	onunload(): void {
		this.manager.unpatchAll();
		this.restoreRenameCommand();
	}

	async loadSettings(): Promise<void> {
		const stored: unknown = (await this.loadData()) ?? {};
		// Only keys the plugin still has. A plain merge would carry a setting
		// from a removed feature forward for ever, since saveData writes back
		// whatever it was handed.
		const known = Object.entries(stored as Record<string, unknown>).filter(
			([key, value]) => key in DEFAULT_SETTINGS && value !== undefined,
		);
		this.settings = Object.assign({}, DEFAULT_SETTINGS, Object.fromEntries(known));
		// The vault-name toggle became a choice of three; a stored toggle says
		// which of the first two it was.
		const legacy = (stored as { showVaultName?: unknown }).showVaultName;
		if (typeof legacy === "boolean" && !("vaultSegment" in (stored as object))) {
			this.settings.vaultSegment = legacy ? "name" : "icon";
		}
		setCurrentVaultIcon(this.settings.vaultIcon);
		setRecording(this.settings.recordPaths);
		// Before anything reads a string. `onload` builds the settings tab and
		// the manager straight after this, and both call `t()`.
		setLanguageOverride(this.settings.language);
	}

	/**
	 * The path bar as a command, so it is reachable from the keyboard and
	 * from the palette.
	 *
	 * No default hotkey. Obsidian's submission requirements discourage them,
	 * and the obvious candidate — the browser's Ctrl+L — is already Obsidian's
	 * own "toggle left sidebar" on some setups. The user binds it; the
	 * command exists so there is something to bind.
	 */
	private registerFocusCommand(): void {
		this.addCommand({
			id: "focus-path-bar",
			name: t("commandFocusPathBar"),
			checkCallback: (checking: boolean) => {
				const breadcrumb = this.manager.getActiveBreadcrumb();
				if (!breadcrumb) return false;
				if (!checking) breadcrumb.focusPathBar();
				return true;
			},
		});
		// One command per rung, for a key straight to the one wanted.
		const rungs: [string, number, StringKey][] = [
			["focus-path-bar-name", 0, "commandFocusName"],
			["focus-path-bar-extension", 1, "commandFocusExtension"],
			["focus-path-bar-vault-path", 2, "commandFocusVaultPath"],
			["focus-path-bar-absolute-path", 3, "commandFocusAbsolutePath"],
			["focus-path-bar-vault", 4, "commandFocusVault"],
		];
		for (const [id, rung, name] of rungs) {
			this.addCommand({
				id,
				name: t(name),
				checkCallback: (checking: boolean) => {
					const breadcrumb = this.manager.getActiveBreadcrumb();
					if (!breadcrumb) return false;
					if (rung === 4 && !this.settings.accessExternalFiles) return false;
					if (!checking) breadcrumb.focusRung(rung);
					return true;
				},
			});
		}
	}

	/**
	 * The nav-lock toggle, in Obsidian's own three-dot menu.
	 *
	 * That menu is where a per-pane mode belongs, and the event carries the
	 * source so the entry appears there rather than in every file menu in
	 * the app — the File Explorer's rows have nothing to do with how panes
	 * navigate.
	 */
	private registerNavLockMenu(): void {
		this.registerEvent(
			this.app.workspace.on("file-menu", (menu, _file, source) => {
				if (source !== "pane-more-options" && source !== "more-options") return;
				this.addNavLockItem(menu);
			}),
		);
	}

	/**
	 * The toggle itself, so every pane menu that has to carry it carries the
	 * same one.
	 *
	 * The external viewer builds its own pane menu from a path rather than
	 * from a TFile, so it never fired `file-menu` and the entry was simply
	 * absent out there — the lock could be engaged from a vault pane and
	 * then not released from the pane you were looking at.
	 */
	addNavLockItem(menu: Menu): void {
		const lock = this.manager.navLock;
		if (!lock.isLocked() && !lock.canLock()) return;
		menu.addItem((item) =>
			item
				// The section the splits are in. A pane-wide navigation mode
				// belongs beside "Split right" and "Split down" — the other
				// entries about how panes relate — rather than down among
				// the file's own actions, where it sat before.
				.setSection("open")
				.setTitle(lock.isLocked() ? t("navLockRelease") : t("navLockEngage"))
				.setIcon(lock.isLocked() ? "unlink" : "link")
				.onClick(() => lock.toggle()),
		);
	}

	/**
	 * Whether the padlock on this leaf's path bar stands open.
	 *
	 * The permission to write outside the vault belongs to the row, and the
	 * row is the only place it can be granted or taken back. Anything else
	 * that is about to write out there asks here rather than keeping a
	 * second flag of its own — the external viewer did, and its menu then
	 * refused a delete the padlock beside it had already allowed.
	 */
	externalWritesUnlocked(leaf: WorkspaceLeaf): boolean {
		return this.manager.breadcrumbFor(leaf)?.allowsExternalWrites() ?? false;
	}

	async saveSettings(): Promise<void> {
		await this.saveData(this.settings);
		setCurrentVaultIcon(this.settings.vaultIcon);
		setRecording(this.settings.recordPaths);
		this.manager.refreshAll();
	}


	/**
	 * Makes the rename command alternate between Obsidian's inline-title
	 * rename and this plugin's header path bar, so one key reaches both.
	 *
	 * This wraps the command rather than intercepting its key: Obsidian
	 * handles hotkeys from a capture-phase listener on `window`, which
	 * stops the event before any later listener sees it, so a plugin
	 * can't reliably grab the key itself. Wrapping the command also
	 * means any rebound key — and the command palette — comes along for
	 * free, with no hotkey parsing of our own.
	 */
	private patchRenameCommand(): void {
		const command = this.app.commands?.commands?.[RENAME_COMMAND_ID];
		const original = command?.checkCallback;
		if (!command || !original) return;

		this.originalRenameCallback = original;
		command.checkCallback = (checking: boolean) => {
			// Availability is entirely Obsidian's call — we only change
			// what happens when the command actually runs.
			if (checking) return original.call(command, true);

			// Already renaming in the header: the press walks the selection
			// along the path rather than alternating back to the inline
			// title, so the same key that reached the name also reaches the
			// name with its extension and the two full paths.
			if (this.manager.getActiveBreadcrumb()?.advanceRenameSelection()) {
				this.useHeaderRename = false;
				return true;
			}

			// With Obsidian's inline title turned off there's nothing for
			// the native rename to focus (it would fall back to the header
			// title, which this plugin hides), so the path bar becomes the
			// only target instead of every other press doing nothing.
			if (this.useHeaderRename || !this.hasInlineTitle()) {
				const breadcrumb = this.manager.getActiveBreadcrumb();
				if (breadcrumb) {
					breadcrumb.startHeaderRename();
					this.useHeaderRename = false;
					return true;
				}
			}

			this.useHeaderRename = true;
			const handled = original.call(command, false);
			// Obsidian may answer with its rename dialog instead of the
			// inline title. That dialog swallows the rename key, so the
			// alternation would dead-end here: press again and nothing at
			// all happens. Arm a listener on the dialog itself so the same
			// key still reaches the next target.
			this.awaitRenameDialog();
			return handled;
		};
	}

	/**
	 * Watches for the rename dialog for as long as it could plausibly appear.
	 *
	 * `promptForFileRename` is async, so the modal is not in the DOM when the
	 * command returns — arming on the next tick finds nothing and the fix
	 * silently does not apply. Polling rather than an animation frame is
	 * deliberate: a CDP-driven window paints no frames, so a
	 * requestAnimationFrame loop would never run and this could not be
	 * tested at all (see .dev/takeaways.md).
	 */
	private awaitRenameDialog(): void {
		const deadline = Date.now() + RENAME_DIALOG_TIMEOUT_MS;
		const poll = (): void => {
			if (document.querySelector(RENAME_DIALOG_SELECTOR)) {
				this.armRenameDialog();
				return;
			}
			// Nothing appeared, so the inline title took it — the ordinary case.
			if (Date.now() < deadline) window.setTimeout(poll, RENAME_DIALOG_POLL_MS);
		};
		poll();
	}

	/**
	 * Lets the rename key close Obsidian's rename dialog and carry on to the
	 * path bar.
	 *
	 * The listener goes on the dialog rather than on the window: Obsidian
	 * handles hotkeys from a capture-phase window listener whose scope stack
	 * the modal has already taken over, so nothing registered globally sees
	 * the key while one is open. It dies with the element, so a dialog closed
	 * any other way needs no cleanup.
	 *
	 * Only the rename key is claimed. Every other key — including the ones
	 * that type into the field — is left to the dialog.
	 */
	private armRenameDialog(): void {
		const dialog = document.querySelector<HTMLElement>(RENAME_DIALOG_SELECTOR);
		if (!dialog || dialog.dataset.lureArmed) return;
		dialog.dataset.lureArmed = "1";

		const onKeyDown = (evt: KeyboardEvent): void => {
			if (!this.isRenameHotkey(evt)) return;
			evt.preventDefault();
			evt.stopPropagation();
			dialog.removeEventListener("keydown", onKeyDown, true);
			// Cancel, never save: the press means "not this target, the
			// other one". Committing a rename nobody typed would be a
			// destructive reading of a key that only meant to move on.
			dialog.querySelector<HTMLElement>(".mod-cancel")?.click();
			const breadcrumb = this.manager.getActiveBreadcrumb();
			breadcrumb?.startHeaderRename();
			this.useHeaderRename = false;
			// Obsidian 1.8 hands the focus back to where it was before the
			// dialog once the dialog has gone — after this press put it in
			// the path bar, so the caret ended up in the note. Hold it for as
			// long as the dialog takes to go.
			const field = document.activeElement;
			if (field instanceof HTMLInputElement) {
				const until = performance.now() + 500;
				const hold = (): void => {
					if (!field.isConnected || performance.now() > until) return;
					if (document.activeElement !== field) field.focus();
					window.requestAnimationFrame(hold);
				};
				window.requestAnimationFrame(hold);
			}
		};

		dialog.addEventListener("keydown", onKeyDown, true);
	}

	/**
	 * Whether this event is the rename command's own key.
	 *
	 * Read from Obsidian's tables rather than hardcoded, so a rebound key
	 * comes along: `customKeys` holds only what the user has changed, so a
	 * command still on its default is found in `defaultKeys`.
	 */
	private isRenameHotkey(evt: KeyboardEvent): boolean {
		return this.isCommandHotkey(RENAME_COMMAND_ID, evt);
	}

	/**
	 * Whether this event is one of the keys bound to a command, by the same
	 * tables. `shifted` asks instead whether it is one of them with Shift
	 * added — a binding that has no Shift of its own.
	 */
	private isCommandHotkey(id: string, evt: KeyboardEvent, shifted = false): boolean {
		const manager = this.app.hotkeyManager;
		const bindings: Hotkey[] = manager?.customKeys?.[id] ?? manager?.defaultKeys?.[id] ?? [];
		return bindings.some((binding) => {
			const wanted = new Set(binding.modifiers.map((m) => (m === "Mod" ? modKey() : m)));
			if (shifted && wanted.has("Shift")) return false;
			if (shifted) wanted.add("Shift");
			return matchesBinding(binding, wanted, evt);
		});
	}

	/** Whether any command at all is bound to exactly this press. */
	private isBoundElsewhere(evt: KeyboardEvent): boolean {
		const manager = this.app.hotkeyManager;
		const ids = new Set([...Object.keys(manager?.defaultKeys ?? {}), ...Object.keys(manager?.customKeys ?? {})]);
		for (const id of ids) {
			if (this.isCommandHotkey(id, evt)) return true;
		}
		return false;
	}

	private restoreRenameCommand(): void {
		const command = this.app.commands?.commands?.[RENAME_COMMAND_ID];
		if (command && this.originalRenameCallback) {
			command.checkCallback = this.originalRenameCallback;
		}
		this.originalRenameCallback = null;
	}

	private hasInlineTitle(): boolean {
		const leaf = this.app.workspace.getMostRecentLeaf();
		return leaf?.view.containerEl.querySelector(".inline-title") != null;
	}
}
