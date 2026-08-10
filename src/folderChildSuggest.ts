import { AbstractInputSuggest, App, TAbstractFile, TFile, TFolder, setIcon } from "obsidian";
import { wireNativeFileItem } from "./nativeFileItem";
import { SystemLocation, applyIcon, iconFor } from "./systemLocations";
import { ExternalChild, externalJoin, listExternalChildren } from "./externalFs";
import { isMarkdownExtension } from "./fileKinds";
import { t } from "./lang";

export interface PathSuggestion {
	/** Text shown in the list. */
	label: string;
	kind: "folder" | "file" | "keep-name" | "location" | "more";
	/** Folder path for "folder"; full target file path for "file"/"keep-name"; absolute path for "location". */
	path: string;
	/** Rendered greyed out to mark the name as already taken; still selectable. */
	disabled: boolean;
	/** Lucide icon, on entries that carry one (locations, and children outside the vault). */
	icon?: string;
	/** True for entries that name something outside the vault, which can't be dragged or context-menued. */
	external?: boolean;
	/** Text file Obsidian has no view for — tinted as a caution before you commit to opening it. */
	warn?: boolean;
	/** A note — tinted so the files Obsidian actually opens as notes stand out from the rest. */
	markdown?: boolean;
}

export interface SuggestContext {
	/** Folder whose direct children are being listed. */
	folderPath: string;
	/**
	 * Jump targets to list *instead of* any folder's children — set while
	 * the vault-root dropdown is open. Vaults, home, root and mounts.
	 */
	locations: SystemLocation[] | null;
	/**
	 * Absolute filesystem path to list children of, instead of reading the
	 * vault. Set once browsing has left the open vault.
	 */
	externalFolder: string | null;
	/** Rename/move mode: existing files can't be overwritten, and the current name is offered. */
	renameMode: boolean;
	/** Current file's name, offered as a "move here, keep this name" entry in rename mode. */
	keepName: string | null;
	/**
	 * Whether a child should appear in the list at all. Purely a display
	 * filter — hidden entries still occupy their name, so overwrite
	 * protection is unaffected by it.
	 */
	shouldList: (child: TAbstractFile) => boolean;
	/** Same display filter for entries outside the vault, which have no TAbstractFile. */
	shouldListExternal: (child: ExternalChild) => boolean;
	/** Whether an extension is a text type Obsidian has no view for — tinted as a caution. */
	warnsOnOpen: (extension: string) => boolean;
	/**
	 * Filters the listing in place of the input's own text when set.
	 * A delimiter click prefills the input with the rest of the path and
	 * selects it, which is about to be typed over — filtering by it would
	 * empty the very dropdown the click opened, so "" is passed until the
	 * first real keystroke and the folder stays fully listed.
	 */
	queryOverride: string | null;
}

/**
 * Obsidian's own fallback when a suggester doesn't set `limit`. Used only
 * to size our own overflow row, so it stays right even if that default
 * changes: the real limit is read off the instance.
 */
const DEFAULT_SUGGESTION_LIMIT = 100;

/**
 * Type-ahead suggestions for the direct children of a folder that's
 * resolved fresh on every query, so the same suggester keeps working
 * as the user drills through the breadcrumb trail.
 */
export class FolderChildSuggest extends AbstractInputSuggest<PathSuggestion> {
	/** Kept so dragging an entry can hold the popover open — see wireNativeFileItem. */
	private readonly dragKeepFocusEl: HTMLInputElement;

	constructor(
		app: App,
		inputEl: HTMLInputElement,
		private getContext: () => SuggestContext,
	) {
		super(app, inputEl);
		this.dragKeepFocusEl = inputEl;
	}

	protected getSuggestions(query: string): PathSuggestion[] {
		const context = this.getContext();
		const { folderPath, renameMode, keepName, shouldList, queryOverride } = context;

		const q = (queryOverride ?? query).trim().toLowerCase();
		const matches = (name: string) => !q || name.toLowerCase().includes(q);

		// The vault-root dropdown replaces the listing outright: it offers
		// places to go, not things in a folder.
		if (context.locations) {
			return this.capped(context.locations
				.filter((location) => matches(location.label))
				.map((location) => ({
					label: location.label,
					kind: "location" as const,
					path: location.path,
					disabled: false,
					icon: iconFor(location),
					external: !location.isCurrentVault,
				})));
		}

		if (context.externalFolder !== null) {
			return this.capped(this.externalSuggestions(context.externalFolder, context, matches));
		}

		const resolved = folderPath
			? this.app.vault.getAbstractFileByPath(folderPath)
			: this.app.vault.getRoot();
		// A path typed with "/" can name a folder that doesn't exist yet
		// (it gets created on commit) — that lists nothing rather than
		// falling back to some other folder's contents.
		const folder = resolved instanceof TFolder ? resolved : null;

		const suggestions: PathSuggestion[] = [];

		// Pinned first in rename mode so moving a file without renaming
		// it is always one click away, in whichever folder you've
		// drilled into. Skipped when that name is already taken here —
		// the conflicting file itself shows up greyed out below instead.
		if (renameMode && keepName && matches(keepName)) {
			const targetPath = folderPath ? `${folderPath}/${keepName}` : keepName;
			if (!this.app.vault.getAbstractFileByPath(targetPath)) {
				suggestions.push({
					label: keepName,
					kind: "keep-name",
					path: targetPath,
					disabled: false,
				});
			}
		}

		if (!folder) return this.capped(suggestions);

		const children = [...folder.children]
			.filter((child) => {
				// A broken display filter must not empty the whole list.
				try {
					return shouldList(child);
				} catch (err) {
					return true;
				}
			})
			.sort((a, b) => {
				const aIsFolder = a instanceof TFolder;
				const bIsFolder = b instanceof TFolder;
				if (aIsFolder !== bIsFolder) return aIsFolder ? -1 : 1;
				return a.name.localeCompare(b.name);
			});

		for (const child of children) {
			if (!matches(child.name)) continue;

			if (child instanceof TFolder) {
				suggestions.push({
					label: child.name,
					kind: "folder",
					path: child.path,
					disabled: false,
				});
			} else if (child instanceof TFile) {
				// In rename mode existing files are greyed to mark the
				// name as taken. They're still selectable — picking one
				// just fills the input, where live validation flags the
				// conflict rather than letting it overwrite the note.
				suggestions.push({
					label: child.name,
					kind: "file",
					path: child.path,
					disabled: renameMode,
					warn: context.warnsOnOpen(child.extension),
					markdown: isMarkdownExtension(child.extension),
				});
			}
		}

		return this.capped(suggestions);
	}

	/**
	 * Trims the list to what the popover will actually show, and spends the
	 * last row saying how much was left out.
	 *
	 * Obsidian slices to `limit` itself, silently — browsing /usr/bin gives
	 * a hundred names out of nine thousand with nothing to say so, which
	 * reads as "this folder has a hundred files". Ending on a count instead
	 * makes the list honest and points at the way through it, which is to
	 * keep typing.
	 */
	private capped(suggestions: PathSuggestion[]): PathSuggestion[] {
		const limit = this.limit > 0 ? this.limit : DEFAULT_SUGGESTION_LIMIT;
		if (suggestions.length <= limit) return suggestions;

		// One slot short, so the row we add lands inside the limit rather
		// than being the thing Obsidian's own slice cuts off.
		const shown = suggestions.slice(0, limit - 1);
		shown.push({
			label: t("suggestMore", { count: String(suggestions.length - shown.length) }),
			kind: "more",
			path: "",
			disabled: true,
		});
		return shown;
	}

	/**
	 * Children of a folder outside the vault.
	 *
	 * No greying of taken names: out here the vault's rename rules don't
	 * apply, and the commit path checks the filesystem itself before it
	 * writes. The keep-name entry is offered though — "move it here under
	 * the name it already has" is the same gesture, and the same one click,
	 * whichever side of the vault boundary the destination is on.
	 */
	private externalSuggestions(
		folderPath: string,
		context: SuggestContext,
		matches: (name: string) => boolean,
	): PathSuggestion[] {
		const children = listExternalChildren(folderPath);

		const suggestions: PathSuggestion[] = [];
		if (context.renameMode && context.keepName && matches(context.keepName)) {
			const keepName = context.keepName;
			// Skipped when the name is taken here — including by the file
			// itself, which is the "already in this folder" case where a move
			// would be a no-op. The entry that shadows it is listed below.
			if (!children.some((child) => child.name === keepName)) {
				suggestions.push({
					label: keepName,
					kind: "keep-name",
					path: externalJoin(folderPath, keepName),
					disabled: false,
					external: true,
				});
			}
		}

		return suggestions.concat(children
			.filter((child) => {
				if (!matches(child.name)) return false;
				// A broken display filter must not empty the whole list.
				try {
					return context.shouldListExternal(child);
				} catch (err) {
					return true;
				}
			})
			.map((child) => ({
				label: child.name,
				kind: child.isFolder ? ("folder" as const) : ("file" as const),
				path: child.path,
				disabled: false,
				external: true,
				warn: !child.isFolder && context.warnsOnOpen(child.extension),
				markdown: !child.isFolder && isMarkdownExtension(child.extension),
			})));
	}

	renderSuggestion(value: PathSuggestion, el: HTMLElement): void {
		el.addClass(`lure-suggest-${value.kind}`);

		// A count, not an entry: nothing to icon, drag, or right-click.
		if (value.kind === "more") {
			el.createSpan({ cls: "lure-suggest-label", text: value.label });
			return;
		}

		if (value.disabled) el.addClass("lure-suggest-disabled");
		if (value.external) el.addClass("lure-suggest-external");
		if (value.markdown) el.addClass("lure-suggest-md");
		if (value.warn) el.addClass("lure-suggest-warn");

		if (value.icon) {
			const iconEl = el.createSpan({ cls: "lure-suggest-icon" });
			applyIcon(setIcon, iconEl, value.icon, "hard-drive");
		}
		el.createSpan({ cls: "lure-suggest-label", text: value.label });

		// Entries stand for real vault items, so they behave like the File
		// Explorer's rows: draggable, and right-clickable for the same
		// menu. Two exceptions: "keep-name" is a proposed destination that
		// nothing exists at yet, and anything outside the vault has no
		// TAbstractFile for those handlers to act on.
		if (value.kind === "keep-name" || value.external) return;
		const target = this.app.vault.getAbstractFileByPath(value.path);
		if (target) wireNativeFileItem(this.app, el, target, this.dragKeepFocusEl);
	}
}

