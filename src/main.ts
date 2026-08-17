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

import { Command, Hotkey, Platform, Plugin } from "obsidian";
import { BreadcrumbManager } from "./breadcrumbManager";
import { EXTERNAL_VIEW_TYPE, ExternalFileView } from "./externalFileView";
import { BreadcrumbSettingTab } from "./settingsTab";
import { BreadcrumbPathSettings, DEFAULT_SETTINGS } from "./settings";
import { t } from "./lang";

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

type CheckCallback = NonNullable<Command["checkCallback"]>;

/** Obsidian writes the platform-agnostic modifier as "Mod"; this is what it means here. */
function modKey(): string {
	return Platform.isMacOS ? "Meta" : "Ctrl";
}

export default class BreadcrumbPathPlugin extends Plugin {
	settings: BreadcrumbPathSettings = DEFAULT_SETTINGS;
	private manager!: BreadcrumbManager;
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

		this.manager = new BreadcrumbManager(this);
		this.manager.registerEvents();

		this.registerFocusCommand();
		this.app.workspace.onLayoutReady(() => this.patchRenameCommand());
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
	}

	async saveSettings(): Promise<void> {
		await this.saveData(this.settings);
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
		const manager = this.app.hotkeyManager;
		const bindings: Hotkey[] =
			manager?.customKeys?.[RENAME_COMMAND_ID] ?? manager?.defaultKeys?.[RENAME_COMMAND_ID] ?? [];
		return bindings.some((binding) => {
			if (binding.key.toLowerCase() !== evt.key.toLowerCase()) return false;
			const wanted = new Set(binding.modifiers.map((m) => (m === "Mod" ? modKey() : m)));
			return (
				wanted.has("Ctrl") === evt.ctrlKey &&
				wanted.has("Shift") === evt.shiftKey &&
				wanted.has("Alt") === evt.altKey &&
				wanted.has("Meta") === evt.metaKey
			);
		});
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
