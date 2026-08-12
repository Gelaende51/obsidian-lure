import {
	FileSystemAdapter,
	FileView,
	Keymap,
	Notice,
	PaneType,
	Platform,
	TAbstractFile,
	TFile,
	TFolder,
	UserEvent,
	WorkspaceLeaf,
	displayTooltip,
	normalizePath,
	setIcon,
} from "obsidian";
import type { FileExplorerView } from "obsidian";
import type BreadcrumbPathPlugin from "./main";
import type { BreadcrumbManager } from "./breadcrumbManager";
import { ConfirmCreateFileModal } from "./createFileModal";
import { FolderChildSuggest } from "./folderChildSuggest";
import {
	ExternalChild,
	PATH_SEP,
	externalJoin,
	externalParent,
	externalSegments,
	isExternalFile,
	isExternalFolder,
} from "./externalFs";
import {
	CURRENT_VAULT_ICON,
	LOCATION_ICONS,
	SystemLocation,
	applyIcon,
	iconFor,
	isInside,
	listSystemLocations,
	samePath,
} from "./systemLocations";
import {
	copyExternalFile,
	createExternalFile,
	externalExists,
	moveExternalFile,
} from "./externalFileOps";
import { ExternalFileView, extensionOf, openExternalFile } from "./externalFileView";
import { warnsOnOpen } from "./fileKinds";
import { t } from "./lang";

const PATCHED_CLASS = "lure-patched";
/**
 * Delays, in milliseconds, between retries of a folder reveal's expand.
 *
 * Timers rather than animation frames, which is the whole point: a window
 * that isn't painting — occluded, in the background, driven by automation —
 * runs no rAF callbacks at all, so a retry scheduled that way simply never
 * happened and the folder stayed shut with nothing to show why.
 *
 * The ladder backs off because the two cases have very different costs: a
 * warm tree expands on the first synchronous try, while a window that has
 * just loaded needs Obsidian to finish revealing first. Bounded, so a folder
 * that genuinely cannot expand ends after ~1s rather than retrying forever.
 */
const EXPAND_BACKOFF_MS = [16, 32, 64, 128, 256, 512];

/**
 * How many times, and how far apart, rename mode re-checks where focus went
 * before deciding the user has left the header. Rebuilding the row parks
 * focus on <body> for several ticks, so a single look mistakes our own
 * rebuild for the user clicking away.
 */
const RENAME_FOCUS_CHECKS = 8;
const RENAME_FOCUS_INTERVAL_MS = 25;

const EDITING_CLASS = "lure-editing";
const HIDE_NATIVE_CLASS = "lure-hide-native";
const NATIVE_TITLE_HIDDEN_CLASS = "lure-native-title-hidden";
const NATIVE_BREADCRUMB_SELECTOR = ".view-header-title-parent";
/** What Obsidian renders between its own breadcrumb segments, restored when unpatching. */
const NATIVE_DELIMITER = "/";
const RENAME_MODE_CLASS = "lure-rename-active";
/** Warning ring shown while the row points outside the open vault. */
const EXTERNAL_MODE_CLASS = "lure-external-active";
/** Softer ring for a text file Obsidian has no view for — see warnsOnOpen. */
const WARN_MODE_CLASS = "lure-warn-active";
/** Freezes the row's content at the offset it had when a session started. */
const PIN_CLASS = "lure-pin-start";
const PIN_OFFSET_VAR = "--lure-pin-offset";

// Mirrors Obsidian's own file-explorer rename validation: same
// character sets, same messages, same order of checks, so a rejected
// name reads exactly like it does when renaming in the file tree.
// (Obsidian joins the character lists with U+00A0 for display.)
const ILLEGAL_CHARS = '*"\\/<>:|?';
const UNSAFE_CHARS = "#^[]|";
const escapeForClass = (chars: string) => chars.replace(/[\\\]^-]/g, "\\$&");
const ILLEGAL_CHARS_RE = new RegExp(`[${escapeForClass(ILLEGAL_CHARS)}]`);
const UNSAFE_CHARS_RE = new RegExp(`[${escapeForClass(UNSAFE_CHARS)}]`);
const charList = (chars: string) => chars.split("").join(" ");

/**
 * How long after a breadcrumb click a second click still counts as
 * continuing that gesture rather than starting a fresh one. Comfortably
 * past every platform's double-click interval, and short enough that a
 * deliberate later click is never caught by it.
 */
const SEGMENT_DOUBLE_CLICK_MS = 500;

/** Room past the caret, in px, so the cursor is never flush against the edge. */
const INPUT_SLACK_PX = 6;
/** Floor for the typing input's width, so an empty field is still visible and clickable. */
const INPUT_MIN_PX = 28;

/**
 * Off-screen 2D context used to measure text at the input's own font.
 *
 * The `size` attribute prices a field in "average characters", which is
 * nowhere near the width of the actual glyphs — swapping a rendered path
 * for an input sized that way changed the row's width, and under centre
 * or right alignment that re-justified the whole row on every keystroke.
 * Canvas measurement gives the real advance width, so the input can be
 * exactly as wide as the text in it. Costs no layout and no reflow, and
 * one canvas is enough for every breadcrumb in the workspace.
 */
let measureCtx: CanvasRenderingContext2D | null = null;

function textWidth(text: string, el: HTMLElement): number {
	if (!measureCtx) measureCtx = document.createElement("canvas").getContext("2d");
	if (!measureCtx) return 0;

	const style = window.getComputedStyle(el);
	// The `font` shorthand is empty in some engines when the longhands were
	// set individually, so fall back to assembling it.
	measureCtx.font =
		style.font ||
		`${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
	return measureCtx.measureText(text).width;
}

const MSG_ILLEGAL = () => t("msgIllegal", { chars: charList(ILLEGAL_CHARS) });
const MSG_UNSAFE = () => t("msgUnsafe", { chars: charList(UNSAFE_CHARS) });

/**
 * Owns the breadcrumb/edit/typing/rename DOM for a single leaf's header.
 *
 * Three independent interaction models live here:
 *
 * - Quick full-path edit: clicking the filename text or empty space
 *   opens a single `<input>` prefilled with the whole current path;
 *   submitting navigates to an existing file or offers to create one.
 * - Breadcrumb navigation (only reachable via a delimiter click): the
 *   rest of the path after that delimiter opens as selected text, and
 *   the dropdown lists that folder's contents — picking one
 *   extends a `browsePath` of clicked-through folders, rendered as
 *   plain breadcrumb chips (no text input). Typing anywhere on the row
 *   while chips are showing converts the trailing segment into a small
 *   `<input>` with live autocomplete (`FolderChildSuggest`) scoped to
 *   the current browse folder, so keyboard and mouse navigation both
 *   build the same chip trail. Escape or clicking away cancels the
 *   whole session back to the real file's actual path.
 * - Rename/move (toggled via the pencil button): the same two entry
 *   points behave identically, but commit a move instead of a
 *   navigation — via `fileManager.renameFile`, so links follow. The
 *   autocomplete additionally offers the current filename in every
 *   folder (move without renaming) and greys out already-taken names.
 *   Typing is validated live against Obsidian's own rename rules, with
 *   the same red tooltip, so a conflicting or illegal name is flagged
 *   as you type and can't be committed.
 *
 * Obsidian's native `.view-header-title` element is contenteditable
 * with its own click/rename handling that can't be selectively
 * disabled, so it's hidden entirely and replaced by `filenameEl`.
 * `.view-header-title-parent` (the native ancestor-folder breadcrumb)
 * is reused as-is when not browsing/editing/renaming, since it already
 * reveals folders in the File Explorer reliably — reimplementing that
 * ourselves hit an unresolved intermittent bug — but is hidden
 * whenever a custom chip trail or a full-path input is showing instead.
 *
 * One instance is created per leaf by the BreadcrumbManager and torn
 * down when the leaf closes or the plugin unloads.
 */
export class PathBreadcrumb {
	private mode: "breadcrumb" | "browsing" | "typing" = "breadcrumb";
	private file: TFile | null = null;
	private vaultSegmentEl: HTMLElement;
	private filenameEl: HTMLElement;
	private renameButtonEl: HTMLElement;
	/** The padlock, shown only while the row points outside the vault. */
	private unlockButtonEl: HTMLElement;
	private inputEl: HTMLInputElement | null = null;
	private suggest: FolderChildSuggest | null = null;
	private editCleanup: (() => void) | null = null;
	private documentClickAway: ((evt: MouseEvent) => void) | null = null;
	private renameClickAway: ((evt: MouseEvent) => void) | null = null;
	private renameFocusOut: (() => void) | null = null;
	/** Detaches the listeners bound to Obsidian's own header element on destroy. */
	private domListeners = new AbortController();
	/** When on, breadcrumb/dropdown/text-input interactions move or rename the current file instead of navigating. */
	private renameMode = false;
	/** Pending deferred work, cancelled on teardown so a dead instance stops acting. */
	private timers = new Set<number>();
	/** Folders clicked/typed through so far while navigating; null when not browsing. */
	private browsePath: string | null = null;
	/** Message currently shown in the red validation tooltip, "" when the name is fine. */
	private validationError = "";
	/** Suppresses the input's text as an autocomplete query while a prefilled selection is still untouched (see enterTypingMode). */
	private suggestQueryOverride: string | null = null;
	/** Set while re-dispatching a click onto a native segment, so our own capture listener lets it through (see openNativeSegment). */
	private delegatingToNative = false;
	/**
	 * Absolute path of the folder being browsed outside the open vault,
	 * or null while inside it. When set, the whole row switches to
	 * filesystem mode: chips come from this path, the dropdown reads with
	 * `fs`, and the warning frame is up.
	 */
	private externalPath: string | null = null;
	/**
	 * The location the current external browse started from, kept so the
	 * row can be drawn relative to it. Without this every chip trail
	 * outside the vault would begin with the machine's own directory
	 * layout — "home / alice / Vaults / Notes / …" — when what the
	 * user picked was simply "Notes".
	 */
	private externalBase: { path: string; label: string; icon: string } | null = null;
	/**
	 * Whether creating, moving and renaming at paths outside the vault has
	 * been unlocked with the padlock button.
	 *
	 * Off by default and dropped the moment the row comes back inside the
	 * vault, so a later trip out starts locked again. Browsing out there is a navigation
	 * gesture — a few clicks can land you in a system folder — and nothing
	 * that far from a note should be writable just because you looked at it.
	 */
	private externalWritesUnlocked = false;
	/**
	 * The location the unlock was granted for. Held so the permission can
	 * outlive the repaints that punctuate working in one place — a move
	 * completes, a click lands outside the input — and end only when the row
	 * is genuinely somewhere else.
	 */
	private unlockedBase: string | null = null;
	/** True while the vault-root dropdown is listing places to jump to rather than a folder's contents. */
	private showingLocations = false;
	/** Name of the external file this leaf is showing, when it holds one instead of a note. */
	private externalFileName: string | null = null;

	constructor(
		private plugin: BreadcrumbPathPlugin,
		private manager: BreadcrumbManager,
		private leaf: WorkspaceLeaf,
		private titleEl: HTMLElement,
	) {
		this.titleEl.addClass(PATCHED_CLASS);
		this.titleEl.addClass(NATIVE_TITLE_HIDDEN_CLASS);
		this.titleEl.setAttribute("contenteditable", "false");

		this.vaultSegmentEl = document.createElement("span");
		this.vaultSegmentEl.addClass("lure-vault-wrapper");

		this.filenameEl = document.createElement("div");
		this.filenameEl.addClass("lure-filename");
		this.titleEl.insertAdjacentElement("afterend", this.filenameEl);

		// Uses Obsidian's own .view-action/.clickable-icon classes (the
		// same ones the native bookmark/reading-mode/more-options buttons
		// use) so it inherits identical sizing for free, and lives in
		// .view-actions itself rather than next to our breadcrumb.
		this.renameButtonEl = document.createElement("span");
		this.renameButtonEl.addClass("clickable-icon", "view-action", "lure-rename-btn");
		this.renameButtonEl.setAttribute("aria-label", t("renameToggleLabel"));
		// Not "pencil": that is what Obsidian's own view-mode action in the
		// same button row uses. "folder-pen" says move *and* rename, and
		// stays distinguishable from its neighbour at 16px.
		setIcon(this.renameButtonEl, "folder-pen");
		this.renameButtonEl.addEventListener("click", (evt) => {
			evt.stopPropagation();
			this.renameMode = !this.renameMode;
			this.updateRenameModeStyling();
			// Deliberately keeps any open input/chip trail alive: the toggle
			// changes what committing *does*, not what has been typed, so
			// deciding mid-path to move rather than navigate (or the other
			// way round) shouldn't cost the path already entered.
			this.syncOpenInputToRenameMode();
		});

		// Sits beside the rename toggle because it gates exactly what that
		// toggle does once the row has left the vault. Hidden entirely while
		// inside it — there is nothing to unlock in your own vault, and a
		// permanently inert padlock in the header would only raise the
		// question of what it is for.
		this.unlockButtonEl = document.createElement("span");
		this.unlockButtonEl.addClass("clickable-icon", "view-action", "lure-unlock-btn");
		this.unlockButtonEl.addEventListener("click", (evt) => {
			evt.stopPropagation();
			if (this.externalWritesUnlocked) this.lockExternalWrites();
			else {
				this.externalWritesUnlocked = true;
				// Granted for this location, not for this moment.
				this.unlockedBase = this.externalBase?.path ?? this.externalPath;
			}
			this.updateUnlockButton();
		});

		const container = this.titleEl.parentElement;
		// Focusable via script (not Tab) so the row can receive keydowns
		// after a click, without joining the page's tab order.
		container?.setAttribute("tabindex", "-1");

		this.insertVaultSegment();
		this.insertRenameButton();
		this.updateUnlockButton();

		// Listen on the whole row, not just the filename element, so
		// clicking empty space anywhere (before the vault name, after
		// the filename — wherever alignment happens to leave a gap)
		// also opens the full-path edit input, same as clicking the
		// filename text itself. Clicks on an actual breadcrumb segment
		// or delimiter are excluded so their own click behavior (which
		// is the *only* way into the chip/typing flow) keeps working.
		container?.addEventListener("click", (evt) => {
			// Gate on whether an input is actually open rather than on
			// `mode` alone: if some earlier step failed and left a stale
			// mode behind, a mode-only check would deaden the whole row
			// permanently with no way back.
			if (this.inputEl) return;
			const target = evt.target as HTMLElement;
			if (target.closest(".view-header-breadcrumb, .view-header-breadcrumb-separator, .lure-vault-wrapper")) {
				return;
			}
			// Same input in both modes — what committing it does is what
			// differs (navigate vs. move), and that's decided at submit.
			// The name itself selects just the file name; the empty space
			// around it stays the way to grab the whole path at once.
			if (target.closest(".lure-filename-text")) this.handleFilenameClick();
			else this.startFullPathEdit();
		}, { signal: this.domListeners.signal });

		// Swapped mode has to pre-empt Obsidian's own click handler on the
		// native folder segments — and any handler a folder-notes plugin
		// added to the same elements. Those live on the element itself, so
		// a listener of ours there might be registered after theirs and
		// couldn't stop them; a capture-phase listener on this ancestor
		// always runs first, whatever the registration order was.
		container?.addEventListener("click", (evt) => {
			if (this.delegatingToNative || !this.segmentEdits) return;
			const target = evt.target as HTMLElement;
			const segment = target.closest<HTMLElement>(".view-header-breadcrumb");
			// Our own vault segment and browse chips carry the same class
			// but do their own wiring in renderVaultSegment.
			if (!segment || segment.closest(".lure-vault-wrapper")) return;
			if (!segment.closest(NATIVE_BREADCRUMB_SELECTOR)) return;
			const folderPath = this.nativeSegmentPath(segment);
			if (folderPath === null) return;
			evt.stopPropagation();
			this.handleSegmentClick(folderPath);
		}, { capture: true, signal: this.domListeners.signal });

		// Typing only starts the chip-trail's inline autocomplete input
		// while browsing (i.e. after a delimiter click has already put
		// at least one chip on the row) — reachable only that way, per
		// the two-entry-point design above.
		container?.addEventListener("keydown", (evt) => {
			if (this.mode !== "browsing") return;
			if (evt.key === "Escape") {
				this.cancelNavigation();
				return;
			}
			// A single printable character with no modifier starts typing;
			// anything else (Tab, arrows, function keys, Ctrl/Cmd+letter
			// shortcuts, …) is left alone.
			if (evt.key.length === 1 && !evt.ctrlKey && !evt.metaKey && !evt.altKey) {
				evt.preventDefault();
				this.enterTypingMode(evt.key);
			}
		}, { signal: this.domListeners.signal });
	}

	/** Re-derives the file from the leaf and re-renders, unless mid-edit. */
	refresh(): void {
		this.insertVaultSegment();
		this.insertRenameButton();
		this.applyAlignment();
		this.applySwapState();

		if (this.mode !== "typing") {
			const previousFile = this.file;
			this.file = this.getFileForLeaf();

			// A leaf showing an external file has no TFile to hang the row
			// off, so the path comes from the view itself. Checked before
			// the reset below, which would otherwise wipe the trail this
			// sets up on the very refresh that opened the file.
			const externalView = this.getExternalPathForLeaf();
			if (externalView) {
				this.adoptExternalView(externalView);
				this.wireNativeBreadcrumb();
				this.render();
				return;
			}
			if (this.externalFileName !== null) {
				// Navigated away from an external file (back button, say) —
				// drop the external trail so the row describes this leaf.
				this.externalFileName = null;
				this.externalPath = null;
				this.externalBase = null;
				// Genuinely back inside the vault, which is where the
				// permission ends.
				this.lockExternalWrites();
				this.applyExternalState();
				this.showNativeBreadcrumb();
			}

			if (this.file !== previousFile) {
				// Don't carry a browsing session or rename mode over to a
				// different file just because the user navigated away
				// without explicitly finishing/cancelling — that's an easy
				// way to end up acting on the wrong note.
				if (this.browsePath !== null || this.renameMode) {
					this.browsePath = null;
					this.renameMode = false;
					this.mode = "breadcrumb";
					this.showNativeBreadcrumb();
					this.updateRenameModeStyling();
				}
			}
		}

		// Must come *after* this.file is resolved: it needs the path to
		// map each separator to its folder, and bails out without wiring
		// any click handlers while the file is still unknown. Wiring it
		// first left a brand-new instance's separators inert until some
		// later refresh happened to come along.
		this.wireNativeBreadcrumb();

		if (this.mode === "typing") return;
		this.render();
	}

	/**
	 * Entry point for the rename hotkey: arms rename/move mode and opens
	 * the full path ready to edit, selected.
	 */
	startHeaderRename(): void {
		if (!this.file) return;
		this.renameMode = true;
		this.updateRenameModeStyling();
		this.startFullPathEdit();
	}

	/** Restores the leaf's native title DOM. Called on leaf close / plugin unload. */
	destroy(): void {
		for (const timer of this.timers) window.clearTimeout(timer);
		this.timers.clear();
		this.editCleanup?.();
		this.editCleanup = null;
		this.removeDocumentClickAway();
		this.removeRenameClickAway();
		this.unwireNativeBreadcrumb();
		// Listeners on the header element itself: it belongs to Obsidian
		// and outlives us, so leaving these attached would keep this dead
		// instance reachable and reacting to clicks after unload.
		this.domListeners.abort();
		this.vaultSegmentEl.remove();
		this.filenameEl.remove();
		this.renameButtonEl.remove();
		this.unlockButtonEl.remove();
		this.titleEl.parentElement?.removeClass(RENAME_MODE_CLASS);
		this.titleEl.parentElement?.removeAttribute("tabindex");
		this.titleEl.removeClass(PATCHED_CLASS);
		this.titleEl.removeClass(NATIVE_TITLE_HIDDEN_CLASS);
		this.titleEl.setAttribute("contenteditable", "true");
		this.titleEl.empty();
		this.titleEl.setText(this.file?.basename ?? "");
		this.showNativeBreadcrumb();
		delete this.titleEl.parentElement?.dataset.lureAlign;
		delete this.titleEl.parentElement?.dataset.lureSwap;
	}

	private applyAlignment(): void {
		const container = this.titleEl.parentElement;
		if (container) container.dataset.lureAlign = this.plugin.settings.alignment;
	}

	/**
	 * Whether the *delimiter* opens the folder. Rename/move mode always
	 * says no: opening a folder — its note, or revealing it in the sidebar
	 * — abandons the move already under way, so its delimiters keep
	 * descending into the destination instead.
	 */
	private get swapActions(): boolean {
		return this.plugin.settings.swapSegmentActions && !this.renameMode;
	}

	/**
	 * Whether clicking a folder *name* edits that segment rather than
	 * opening the folder. Normally that's the swap setting, but rename/move
	 * mode forces it on: with nothing there worth opening, picking a
	 * destination is the only thing a click on the path can usefully mean.
	 *
	 * So the two are not simply inverses of each other — in rename mode
	 * both the name and the delimiter after it are editing gestures.
	 */
	private get segmentEdits(): boolean {
		return this.swapActions || this.renameMode;
	}

	/** Drives the delimiter underline — they're the row's links while swapped. */
	private applySwapState(): void {
		const container = this.titleEl.parentElement;
		if (container) container.dataset.lureSwap = String(this.swapActions);
	}

	/** Cumulative folder path for each of the open file's ancestor folders. */
	private ancestorFolderPaths(): string[] {
		if (!this.file) return [];
		const parts = this.file.path.split("/");
		parts.pop();
		const paths: string[] = [];
		let acc = "";
		for (const part of parts) {
			acc = acc ? `${acc}/${part}` : part;
			paths.push(acc);
		}
		return paths;
	}

	private nativeSegments(): HTMLElement[] {
		const nativeParent = this.titleEl.parentElement?.querySelector<HTMLElement>(
			NATIVE_BREADCRUMB_SELECTOR,
		);
		const found = nativeParent?.querySelectorAll<HTMLElement>(".view-header-breadcrumb");
		return found ? Array.from(found) : [];
	}

	private nativeSegmentPath(segment: HTMLElement): string | null {
		const index = this.nativeSegments().indexOf(segment);
		if (index < 0) return null;
		return this.ancestorFolderPaths()[index] ?? null;
	}

	/**
	 * "Open this folder" is defined as whatever clicking Obsidian's own
	 * breadcrumb segment does. A folder-notes plugin patches those
	 * elements to open the folder's note; with none installed, Obsidian's
	 * own handler reveals the folder in the File Explorer — which is
	 * exactly the fallback wanted when a folder has no note. Re-dispatching
	 * the click keeps both behaviours without reimplementing either, and
	 * without needing to know which folder-note convention is in use.
	 */
	private openNativeSegment(index: number, folderPath: string): void {
		const segment = this.nativeSegments()[index];
		if (!segment) return;
		// Otherwise our capture listener swallows this synthetic click and
		// reopens the dropdown the delimiter was meant to bypass.
		this.delegatingToNative = true;
		try {
			segment.click();
		} finally {
			this.delegatingToNative = false;
		}
		// Whoever answered that click, Obsidian's own reveal expands only
		// ancestors — so the folder you asked for opens *shut*. Expand it,
		// but only if the explorer actually landed there: a folder-notes
		// plugin may have opened a note and revealed nothing at all, and
		// expanding a folder nobody navigated to would be a stray side effect.
		this.expandInExplorer(folderPath, true);
	}

	/**
	 * Frames the whole breadcrumb row in the same rounded, accent-colored
	 * box Obsidian shows around a file's name in the File Explorer while
	 * renaming it, and toggles the button's own active/pressed look.
	 */
	private updateRenameModeStyling(): void {
		this.titleEl.parentElement?.toggleClass(RENAME_MODE_CLASS, this.renameMode);
		this.renameButtonEl.toggleClass("is-active", this.renameMode);
		// Rename mode suspends the swap, so the underline has to go with it.
		this.applySwapState();

		if (this.renameMode) {
			this.attachRenameClickAway();
		} else {
			this.removeRenameClickAway();
		}
	}

	/**
	 * Brings an already-open input up to date after rename mode is toggled
	 * from the button, without disturbing what's in it.
	 *
	 * Only two things actually depend on the mode. The suggest reads
	 * `renameMode` through a callback, so re-running its query is enough to
	 * pick up the pinned current filename and the greying of taken names.
	 * The validation tooltip is rename-only, so leaving the mode has to
	 * take it down by hand — `onInput` skips validation entirely once
	 * `renameMode` is false, and would otherwise leave a stale red warning
	 * hanging under a field that is no longer being validated.
	 */
	private syncOpenInputToRenameMode(): void {
		const inputEl = this.inputEl;
		if (this.mode !== "typing" || !inputEl) return;

		if (!this.renameMode) {
			this.validationError = "";
			this.clearErrorTooltip();
		}

		// Clicking a non-focusable icon drops focus to <body>; restore it
		// (with the caret/selection exactly as it was) so the field the user
		// is still editing keeps the keyboard.
		const { selectionStart, selectionEnd } = inputEl;

		// Untrusted on purpose: `onInput` treats only real keystrokes as
		// retiring the prefill, so this re-queries the suggest — and
		// re-validates, when entering rename mode — while leaving a
		// selected-but-untouched prefill intact.
		inputEl.dispatchEvent(new Event("input"));

		inputEl.focus();
		if (selectionStart !== null && selectionEnd !== null) {
			inputEl.setSelectionRange(selectionStart, selectionEnd);
		}
	}

	/** Leaves rename/move mode, discarding any browsing session that was under way. */
	private exitRenameMode(): void {
		if (!this.renameMode) return;
		this.renameMode = false;
		this.updateRenameModeStyling();
		if (this.mode !== "breadcrumb") this.cancelNavigation();
	}

	/**
	 * Rename/move is a mode that persists between clicks, so it needs an
	 * explicit way out: clicking anywhere outside this leaf's header
	 * ends it. Clicks inside the header (the breadcrumb, the toggle
	 * button) and in the popups it puts up (suggestions, menus, the
	 * create-file modal) are all still part of the interaction.
	 */
	private attachRenameClickAway(): void {
		if (this.renameClickAway) return;

		const handler = (evt: MouseEvent) => {
			if (this.isInsideRenameUi(evt.target as HTMLElement | null)) return;
			this.exitRenameMode();
		};

		this.renameClickAway = handler;
		document.addEventListener("click", handler, true);

		// Focus leaving the header ends the mode too, so it also exits on
		// Tab or any other focus change, not just on a click.
		const focusHandler = () => {
			// Deferred: during a focus change activeElement is briefly
			// <body>, and relatedTarget is null whenever focus lands on
			// something unfocusable, so the next tick is the first
			// reliable read of where focus actually ended up.
			//
			// One tick is not always enough, though. Choosing a folder from
			// the dropdown tears this row's input down and builds a new one,
			// which parks focus on <body> for several ticks — and reading it
			// too early made a click *into* the interaction look exactly like
			// a click out of it, ending rename mode as though nothing had
			// been clicked at all. Whether it did was a race, so it happened
			// on some folders, some machines, some runs.
			//
			// Looking more than once costs a fifth of a second in the case
			// where the user really did leave, and nothing at all otherwise.
			let checks = 0;
			const settle = (): void => {
				if (!this.renameMode) return;
				if (this.isInsideRenameUi(document.activeElement as HTMLElement | null)) return;
				if (++checks < RENAME_FOCUS_CHECKS) {
					this.timers.add(window.setTimeout(settle, RENAME_FOCUS_INTERVAL_MS));
					return;
				}
				this.exitRenameMode();
			};
			this.timers.add(window.setTimeout(settle, 0));
		};

		this.renameFocusOut = focusHandler;
		this.titleEl.closest(".view-header")?.addEventListener("focusout", focusHandler);
	}

	/** The header itself, plus the transient popups it puts up, all count as still being in rename mode. */
	private isInsideRenameUi(el: HTMLElement | null): boolean {
		if (!el) return false;
		if (this.titleEl.closest(".view-header")?.contains(el)) return true;
		return el.closest(".suggestion-container, .menu, .modal-container") != null;
	}

	private removeRenameClickAway(): void {
		if (this.renameClickAway) {
			document.removeEventListener("click", this.renameClickAway, true);
			this.renameClickAway = null;
		}
		if (this.renameFocusOut) {
			this.titleEl.closest(".view-header")?.removeEventListener("focusout", this.renameFocusOut);
			this.renameFocusOut = null;
		}
	}

	/**
	 * Default (not browsing/renaming): reuse Obsidian's own native
	 * ancestor-folder breadcrumb as-is, wiring its delimiters to open
	 * our dropdown and overriding the separator text to match the
	 * configured delimiter. Re-applied every refresh since Obsidian may
	 * recreate these elements on file switch.
	 */
	/**
	 * Undoes wireNativeBreadcrumb. These are Obsidian's own elements, so
	 * they outlive this instance — leaving our handler on them would let
	 * a destroyed breadcrumb keep reacting to clicks (hiding the live
	 * path and rendering into its detached elements) after the plugin
	 * had been disabled and re-enabled.
	 */
	private unwireNativeBreadcrumb(): void {
		this.titleEl.parentElement
			?.querySelector<HTMLElement>(NATIVE_BREADCRUMB_SELECTOR)
			?.querySelectorAll<HTMLElement>(".view-header-breadcrumb-separator")
			.forEach((el) => {
				el.onclick = null;
				el.textContent = NATIVE_DELIMITER;
			});
	}

	private wireNativeBreadcrumb(): void {
		const nativeParent = this.titleEl.parentElement?.querySelector<HTMLElement>(
			NATIVE_BREADCRUMB_SELECTOR,
		);
		if (!nativeParent) return;

		const separators = nativeParent.querySelectorAll<HTMLElement>(
			".view-header-breadcrumb-separator",
		);
		separators.forEach((el) => {
			el.textContent = this.plugin.settings.delimiter;
		});

		if (!this.file) return;

		const cumulativePaths = this.ancestorFolderPaths();

		// Separator i sits directly after segment i, so both refer to the
		// same folder — which is what lets the swapped delimiter delegate
		// to its own segment by index.
		separators.forEach((el, index) => {
			const folderPath = cumulativePaths[index];
			if (folderPath === undefined) return;
			el.onclick = (evt) => {
				evt.stopPropagation();
				if (this.swapActions) {
					this.openNativeSegment(index, folderPath);
				} else {
					this.handleDelimiterClick(folderPath);
				}
			};
		});
	}

	/**
	 * Obsidian may recreate .view-header-title-parent when switching
	 * files, which would detach our vault segment (inserted right
	 * before it) from the DOM — re-insert if that's happened.
	 */
	private insertVaultSegment(): void {
		if (this.vaultSegmentEl.isConnected) return;
		const nativeParent = this.titleEl.parentElement?.querySelector<HTMLElement>(
			NATIVE_BREADCRUMB_SELECTOR,
		);
		if (nativeParent) {
			nativeParent.insertAdjacentElement("beforebegin", this.vaultSegmentEl);
		} else {
			this.titleEl.insertAdjacentElement("beforebegin", this.vaultSegmentEl);
		}
	}

	/**
	 * The rename toggle lives among Obsidian's own view-action icons
	 * (bookmark / reading-mode / more-options) at the far right of the
	 * header, not inside our breadcrumb — inserted first so it sits
	 * right next to the reading/editing mode toggle. Re-checked on
	 * every refresh in case Obsidian recreates .view-actions.
	 */
	private insertRenameButton(): void {
		if (this.renameButtonEl.isConnected) return;
		const viewActions = this.titleEl.parentElement?.parentElement?.querySelector<HTMLElement>(
			".view-actions",
		);
		viewActions?.insertAdjacentElement("afterbegin", this.renameButtonEl);
	}

	/**
	 * Shows or hides the padlock and draws its current state. Called from
	 * every path that can change which side of the vault boundary the row
	 * is on, so the button can't outlive the condition it belongs to.
	 */
	private updateUnlockButton(): void {
		// Deliberately does *not* revoke the unlock: this runs on every
		// repaint, and a repaint happens in the middle of the teardown that
		// finishing a move or clicking away performs, when externalPath is
		// briefly null. Revoking here relocked the padlock after every single
		// move. The permission ends at the transitions instead — see
		// lockExternalWrites.
		if (!this.pointsOutsideVault()) {
			this.unlockButtonEl.remove();
			return;
		}

		// Typing an absolute path can leave the location the unlock was for
		// without ever passing through one of those transitions.
		if (
			this.externalWritesUnlocked &&
			this.unlockedBase !== null &&
			this.externalPath !== null &&
			!isInside(this.externalPath, this.unlockedBase)
		) {
			this.lockExternalWrites();
		}

		if (!this.unlockButtonEl.isConnected) {
			// Normally right after the rename toggle. If that one never found
			// a home — Obsidian recreating .view-actions, a view without one —
			// the padlock isn't dropped along with it, or the feature would be
			// unreachable precisely when the row says it's needed.
			if (this.renameButtonEl.isConnected) {
				this.renameButtonEl.insertAdjacentElement("afterend", this.unlockButtonEl);
			} else {
				this.titleEl.parentElement?.parentElement
					?.querySelector<HTMLElement>(".view-actions")
					?.insertAdjacentElement("afterbegin", this.unlockButtonEl);
			}
		}

		const unlocked = this.externalWritesUnlocked;
		setIcon(this.unlockButtonEl, unlocked ? "lock-open" : "lock");
		this.unlockButtonEl.toggleClass("is-active", unlocked);
		this.unlockButtonEl.setAttribute(
			"aria-label",
			unlocked ? t("externalLockLabel") : t("externalUnlockLabel"),
		);
	}

	private hideNativeBreadcrumb(): void {
		const nativeEl = this.titleEl.parentElement?.querySelector<HTMLElement>(
			NATIVE_BREADCRUMB_SELECTOR,
		);
		nativeEl?.addClass(HIDE_NATIVE_CLASS);
	}

	/**
	 * Handing the row back to Obsidian's own breadcrumb is exactly the
	 * moment a session ends — every commit, cancel, file switch and
	 * teardown path goes through here — so the alignment pin is released
	 * alongside it rather than being repeated at each of those call sites.
	 */
	private showNativeBreadcrumb(): void {
		const nativeEl = this.titleEl.parentElement?.querySelector<HTMLElement>(
			NATIVE_BREADCRUMB_SELECTOR,
		);
		nativeEl?.removeClass(HIDE_NATIVE_CLASS);
		this.unpinRowStart();
		// Ending a session always lands back inside the vault: the external
		// location only ever lives for the duration of one browse.
		this.externalPath = null;
		this.externalBase = null;
		this.showingLocations = false;
		this.applyExternalState();
	}

	private getFileForLeaf(): TFile | null {
		return this.leaf.view instanceof FileView ? this.leaf.view.file : null;
	}

	/** Absolute path of the external file this leaf shows, if that's what it holds. */
	private getExternalPathForLeaf(): string | null {
		const view = this.leaf.view;
		return view instanceof ExternalFileView && view.path ? view.path : null;
	}

	/**
	 * Points the row at the file an external view is showing, so opening
	 * something outside the vault leaves a usable path bar behind instead
	 * of an empty one — that view has no TFile, which is what the rest of
	 * the row normally hangs off.
	 */
	private adoptExternalView(filePath: string): void {
		const folder = externalParent(filePath) ?? filePath;
		const name = filePath.slice(folder.length).replace(/^[\\/]+/, "") || filePath;
		if (this.externalPath === folder && this.externalFileName === name) return;

		this.externalPath = folder;
		this.externalFileName = name;
		this.externalBase = this.bestBaseFor(folder);
		this.browsePath = null;
		this.mode = "breadcrumb";
		this.hideNativeBreadcrumb();
		this.applyExternalState();
	}

	/**
	 * The most specific known location containing a path, so a file deep
	 * inside another vault reads as "Archive / notes / x.md" rather than
	 * spelling out where that vault sits on this machine. Falls back to the
	 * filesystem root, which is always true if not always short.
	 */
	private bestBaseFor(absolutePath: string): { path: string; label: string; icon: string } | null {
		let best: SystemLocation | null = null;
		for (const entry of this.locationEntries()) {
			if (!isInside(absolutePath, entry.path)) continue;
			if (!best || entry.path.length > best.path.length) best = entry;
		}
		if (!best) return null;
		return {
			path: best.path,
			label: best.label,
			icon: iconFor(best),
		};
	}

	private render(): void {
		this.applyExternalState();
		this.renderVaultSegment();
		this.renderFilename();
	}

	/**
	 * Frames the row in the same ring rename mode draws, in the colour
	 * Obsidian uses for a rejected name, for as long as the row points
	 * outside the open vault.
	 *
	 * Persistent rather than a flash: what it marks is a standing condition,
	 * not an event. While it is up, nothing the vault does — open as a note,
	 * rename, create — applies to what the row is showing, and that stays
	 * true however long you spend out there.
	 */
	private applyExternalState(): void {
		const container = this.titleEl.parentElement;
		if (!container) return;

		const outside = this.pointsOutsideVault();
		container.toggleClass(EXTERNAL_MODE_CLASS, outside);
		this.updateUnlockButton();

		// One tier down from the red ring, and never shown alongside it:
		// "outside the vault" is the stronger statement, and two rings at
		// once would just be noise.
		const warn = !outside && this.warnsOnOpen(this.openExtension());
		container.toggleClass(WARN_MODE_CLASS, warn);
		// The sentence, not the short label: out here there is no status line
		// beside the ring to carry the explanation.
		if (warn) container.setAttribute("aria-label", t("warnUnregisteredTooltip"));
		else container.removeAttribute("aria-label");
	}

	/**
	 * Ends the permission to write outside the vault.
	 *
	 * Called where the row genuinely changes location — a different vault,
	 * drive or root picked from the dropdown, or a return to a vault file —
	 * rather than from the render path, so that working inside one location
	 * doesn't keep re-locking under you.
	 */
	private lockExternalWrites(): void {
		this.externalWritesUnlocked = false;
		this.unlockedBase = null;
	}

	/**
	 * Whether the row currently points somewhere the vault doesn't cover.
	 *
	 * Being drawn from an absolute path isn't the same thing: a vault file
	 * with no registered view is shown in the same viewer, from the same
	 * absolute path, and that earns the orange caution rather than the red
	 * ring — and needs no unlock, being inside the vault after all.
	 */
	private pointsOutsideVault(): boolean {
		if (this.externalPath === null) return false;
		const base = this.vaultBasePath();
		return !(base !== null && isInside(this.externalPath, base));
	}

	/** Extension of whatever this leaf is currently showing, vault file or external. */
	private openExtension(): string {
		if (this.externalFileName) return extensionOf(this.externalFileName);
		return this.file?.extension?.toLowerCase() ?? "";
	}

	/**
	 * Whether opening this extension in Obsidian warrants a caution: a text
	 * file it has no view for, which lands in an editor built for Markdown.
	 * Registered types are handled properly; binary ones can't be edited
	 * into a mess by accident.
	 */
	private warnsOnOpen(extension: string): boolean {
		return warnsOnOpen(extension, (ext) => this.isSupportedExtension(ext));
	}

	/** Vault name, plus — while browsing — the clicked/typed-through folder chips after it. */
	private renderVaultSegment(): void {
		this.vaultSegmentEl.empty();
		if (!this.file && this.externalPath === null && this.browsePath === null) return;

		// The locations menu replaces the opening segment with its input
		// rather than sitting after it. Obsidian left-aligns the popover to
		// the input's own bounding rect, so this is what actually puts the
		// dropdown under the vault name — leaving the name in place pushed
		// the input, and the popover with it, to the name's right edge.
		// It also reads the way the rest of the row does: click a segment,
		// it becomes a field with its own dropdown.
		if (this.showingLocations) return;

		if (this.externalPath !== null) {
			this.renderExternalSegments(this.externalPath);
			return;
		}

		this.renderRootSegment();

		const separator = this.vaultSegmentEl.createSpan({
			cls: "view-header-breadcrumb-separator",
			text: this.plugin.settings.delimiter,
		});
		separator.addEventListener("click", (evt) => {
			evt.stopPropagation();
			if (this.swapActions) {
				this.revealRoot();
				this.titleEl.parentElement?.focus({ preventScroll: true });
			} else {
				this.handleDelimiterClick("");
			}
		});

		if (this.browsePath === null) return;

		const parts = this.browsePath ? this.browsePath.split("/") : [];
		let acc = "";
		for (const part of parts) {
			acc = acc ? `${acc}/${part}` : part;
			const chipPath = acc;

			const chip = this.vaultSegmentEl.createSpan({
				cls: "view-header-breadcrumb lure-browse-chip",
				text: part,
			});
			// Chips are this plugin's own elements, which no folder-notes
			// plugin knows about, so the swapped chip separator can only
			// offer the reveal fallback rather than the folder's note.
			chip.addEventListener("click", (evt) => {
				evt.stopPropagation();
				if (this.segmentEdits) {
					this.handleSegmentClick(chipPath);
				} else {
					this.revealFolderInExplorer(chipPath);
					this.titleEl.parentElement?.focus({ preventScroll: true });
				}
			});

			const chipSeparator = this.vaultSegmentEl.createSpan({
				cls: "view-header-breadcrumb-separator",
				text: this.plugin.settings.delimiter,
			});
			chipSeparator.addEventListener("click", (evt) => {
				evt.stopPropagation();
				if (this.swapActions) {
					this.revealFolderInExplorer(chipPath);
					this.titleEl.parentElement?.focus({ preventScroll: true });
				} else {
					this.handleDelimiterClick(chipPath);
				}
			});
		}
	}

	/**
	 * The row's opening segment. Always rendered, as name or as icon:
	 * hiding it entirely would leave the row starting on a bare delimiter,
	 * with nothing to tell the reader where the path begins.
	 *
	 * It has no parent to list siblings from, so instead of the
	 * segment-edit gesture it opens the one dropdown that is about places
	 * rather than contents: the other vaults, home, the filesystem root,
	 * and whatever is mounted.
	 */
	private renderRootSegment(): void {
		const rootEl = this.vaultSegmentEl.createSpan({
			cls: "view-header-breadcrumb lure-vault-segment",
		});
		// The icon is always drawn, name or no name: it marks this segment
		// as the jump target rather than a folder, and it's what the
		// dropdown shows for this vault too, so the two match.
		const iconEl = rootEl.createSpan({ cls: "lure-segment-icon lure-vault-icon" });
		setIcon(iconEl, CURRENT_VAULT_ICON);
		if (this.plugin.settings.showVaultName) {
			rootEl.createSpan({ text: this.plugin.app.vault.getName() });
		} else {
			rootEl.setAttribute("aria-label", t("vaultRootLabel"));
		}
		rootEl.addEventListener("click", (evt) => {
			evt.stopPropagation();
			this.openLocationMenu();
		});
	}

	/**
	 * Chip trail for an absolute path outside the vault. Structurally the
	 * same row as inside — a root segment, then one chip per folder — but
	 * every chip carries an absolute path, and none of the vault-only
	 * actions (reveal in explorer, folder notes) apply, so a chip click
	 * simply browses there.
	 */
	private renderExternalSegments(absolutePath: string): void {
		// Draw from the location that was picked, not from the filesystem
		// root: someone who chose "Archive" wants the row to start there,
		// not to be shown where that vault happens to live on this machine.
		const base = this.externalBase;
		const { root, segments: fromRoot } = externalSegments(absolutePath);
		const baseLabel = base?.label ?? root;
		const basePath = base?.path ?? root;
		const remainder = isInside(absolutePath, basePath)
			? absolutePath.slice(basePath.length).replace(/^[\\/]+/, "")
			: null;
		// Stepping above the base (possible by typing an absolute path)
		// falls back to the real path, which is the only honest thing to
		// show once the label no longer describes where we are.
		const segments = remainder === null ? fromRoot : remainder ? remainder.split(/[\\/]+/) : [];
		const trailStart = remainder === null ? root : basePath;

		const rootEl = this.vaultSegmentEl.createSpan({
			cls: "view-header-breadcrumb lure-vault-segment lure-external-segment",
		});
		const named = this.plugin.settings.showVaultName;
		if (base && remainder !== null) {
			const iconEl = rootEl.createSpan({ cls: "lure-segment-icon lure-vault-icon" });
			applyIcon(setIcon, iconEl, base.icon, "folder");
		}
		// "Show vault name" is about the row's opening segment, whichever
		// vault that is — showing another vault's name here while the open
		// one is reduced to an icon would contradict the setting.
		if (named || !base || remainder === null) {
			rootEl.createSpan({ text: baseLabel });
		} else {
			rootEl.setAttribute("aria-label", baseLabel);
		}
		rootEl.addEventListener("click", (evt) => {
			evt.stopPropagation();
			this.openLocationMenu();
		});

		this.vaultSegmentEl.createSpan({
			cls: "view-header-breadcrumb-separator",
			text: this.plugin.settings.delimiter,
		});

		let acc = trailStart;
		for (const segment of segments) {
			acc = acc.endsWith(PATH_SEP) ? acc + segment : acc + PATH_SEP + segment;
			const chipPath = acc;

			const chip = this.vaultSegmentEl.createSpan({
				cls: "view-header-breadcrumb lure-browse-chip lure-external-segment",
				text: segment,
			});
			chip.addEventListener("click", (evt) => {
				evt.stopPropagation();
				this.extendExternalPath(chipPath);
				this.enterTypingMode("");
			});

			const chipSeparator = this.vaultSegmentEl.createSpan({
				cls: "view-header-breadcrumb-separator",
				text: this.plugin.settings.delimiter,
			});
			chipSeparator.addEventListener("click", (evt) => {
				evt.stopPropagation();
				this.extendExternalPath(chipPath);
				this.enterTypingMode("");
			});
		}
	}

	private renderFilename(): void {
		this.filenameEl.removeClass(EDITING_CLASS);
		this.filenameEl.empty();

		// The locations menu shows only the segment it hangs off, so there
		// is no filename beside it either.
		if (this.showingLocations) return;

		// Outside the vault, the name shown is the external file this leaf
		// is actually displaying — never the open note's, which has nothing
		// to do with where the row is pointing and would read as if it
		// lived at the external path.
		if (this.externalPath !== null) {
			if (this.externalFileName) {
				this.filenameEl.createSpan({
					cls: "lure-filename-text",
					text: this.externalFileName,
				});
			}
			return;
		}

		if (!this.file) return;

		this.filenameEl.createSpan({
			cls: "lure-filename-text",
			text: this.file.basename,
		});
	}

	/**
	 * The vault root has no dedicated row in the File Explorer tree, so
	 * asking revealInFolder to highlight it just picks an unrelated
	 * top-level folder instead. Just surface the explorer itself.
	 */
	private revealRoot(): void {
		const fileExplorer = this.plugin.app.internalPlugins.getPluginById("file-explorer");
		if (!fileExplorer) {
			new Notice(t("noticeExplorerDisabled"));
			return;
		}

		const existing = this.plugin.app.workspace.getLeavesOfType("file-explorer")[0];
		if (existing) {
			this.plugin.app.workspace.revealLeaf(existing);
		} else {
			try {
				fileExplorer.instance.revealInFolder(this.plugin.app.vault.getRoot());
			} catch (err) {
				new Notice(t("noticeExplorerOpenFailed"));
			}
		}
	}

	/**
	 * Every delimiter click — in both navigation and rename/move mode —
	 * extends the chip trail to that folder and opens the same
	 * autocomplete input typing uses. The input is seeded with the rest
	 * of the current path *after* the clicked delimiter, fully selected,
	 * so the whole remainder is visible and one keystroke replaces it
	 * while the arrow keys or End can still edit it instead. The dropdown
	 * ignores that prefill and lists the folder's entire contents (see
	 * `suggestQueryOverride`). What picking an entry *does* differs per
	 * mode (navigate vs. move), but the UI doesn't.
	 */
	private handleDelimiterClick(folderPath: string): void {
		const suffix = this.pathSuffixAfter(folderPath);
		this.extendBrowsePath(folderPath);
		this.enterTypingMode(suffix, suffix ? "all" : "none");
	}

	/**
	 * Clicking a folder name edits *that* folder rather than descending
	 * into it: the trail stops at its parent, the input opens on the rest
	 * of the path with the folder's own name selected, and the dropdown
	 * lists the parent's contents — so typing or picking swaps this folder
	 * for a sibling and leaves everything below it intact.
	 *
	 * The vault root is deliberately not routed here: it has no parent to
	 * list and no sibling to swap to, so there is nothing for the gesture
	 * to mean (see renderVaultSegment).
	 */
	private handleSegmentClick(folderPath: string): void {
		const cut = folderPath.lastIndexOf("/");
		const parent = cut === -1 ? "" : folderPath.slice(0, cut);
		const name = cut === -1 ? folderPath : folderPath.slice(cut + 1);

		// Everything from this folder down, so the tail of the path stays
		// on screen while its head is being replaced. Only usable when the
		// remainder actually starts with this folder: browsing can wander
		// into a branch the open file isn't under, and selecting the first
		// name.length characters of an unrelated remainder would highlight
		// the wrong text.
		const suffix = this.pathSuffixAfter(parent);
		const startsHere = suffix === name || suffix.startsWith(`${name}/`);
		this.extendBrowsePath(parent);
		this.enterTypingMode(startsHere ? suffix : name, name.length);
	}

	/**
	 * Clicking the note's name selects the file name alone — extension
	 * included, since renaming or retargeting one usually means changing
	 * it — over a chip trail of the folders above, whose contents the
	 * dropdown lists.
	 */
	private handleFilenameClick(): void {
		// An external file has no TFile to read a parent off; the row already
		// holds its folder, so the name alone is what goes in the input.
		if (this.externalFileName !== null && this.externalPath !== null) {
			this.enterTypingMode(this.externalFileName, "all");
			return;
		}
		if (!this.file) return;
		const parent = this.file.parent?.path ?? "";
		const folderPath = parent === "/" ? "" : parent;
		this.extendBrowsePath(folderPath);
		this.enterTypingMode(this.file.name, "all");
	}

	/**
	 * The part of the open file's path that follows a given ancestor
	 * folder — what a delimiter click puts in the input. Returns "" when
	 * the folder isn't an ancestor, which happens once browsing has
	 * clicked away into an unrelated branch: there's no remainder to show
	 * there, so the input opens empty as it always did.
	 */
	private pathSuffixAfter(folderPath: string): string {
		const path = this.file?.path;
		if (!path) return "";
		if (!folderPath) return path;
		return path.startsWith(`${folderPath}/`) ? path.slice(folderPath.length + 1) : "";
	}

	/**
	 * Freezes the row's content where it currently starts, for as long as a
	 * browsing/typing session lasts.
	 *
	 * Left alignment gets this for free, but centre and right justify from
	 * the content's *width* — and an input is never exactly as wide as the
	 * segments it replaced, nor the same width from one keystroke to the
	 * next. Without this the whole path slides sideways on entering edit
	 * mode and again on every character typed. Measured before any DOM
	 * change, so the offset recorded is the one the user was looking at.
	 *
	 * Guarded against re-entry: drilling into a folder mid-session calls
	 * through here again, and re-measuring then would pin to the position
	 * the row had already been nudged to.
	 */
	private pinRowStart(): void {
		const container = this.titleEl.parentElement;
		if (!container || container.hasClass(PIN_CLASS)) return;

		const containerRect = container.getBoundingClientRect();
		const rtl = window.getComputedStyle(container).direction === "rtl";

		let offset = Infinity;
		for (const child of Array.from(container.children)) {
			const rect = child.getBoundingClientRect();
			// Skips display:none children — the hidden native title and,
			// while chips are showing, the native breadcrumb.
			if (rect.width === 0 && rect.height === 0) continue;
			const edge = rtl ? containerRect.right - rect.right : rect.left - containerRect.left;
			offset = Math.min(offset, edge);
		}
		if (!Number.isFinite(offset)) return;

		container.style.setProperty(PIN_OFFSET_VAR, `${Math.max(0, offset)}px`);
		container.addClass(PIN_CLASS);
	}

	/** Hands the row back to its configured alignment once the session ends. */
	private unpinRowStart(): void {
		const container = this.titleEl.parentElement;
		if (!container) return;
		container.removeClass(PIN_CLASS);
		container.style.removeProperty(PIN_OFFSET_VAR);
	}

	/** Extends the clicked/typed-through folder trail and switches to plain breadcrumb-chip display (no text input). */
	private extendBrowsePath(folderPath: string): void {
		this.pinRowStart();
		this.exitTypingInput();
		this.browsePath = folderPath;
		this.mode = "browsing";
		this.hideNativeBreadcrumb();
		this.render();
		this.attachDocumentClickAway();
		this.titleEl.parentElement?.focus({ preventScroll: true });
	}

	/**
	 * Translates the modifier keys on a click or keypress into the pane to
	 * open in, using Obsidian's own rule so Ctrl/Cmd (and middle-click,
	 * and Ctrl+Alt for a split) mean here exactly what they mean in the
	 * File Explorer and in links.
	 */
	private paneTypeFor(evt: UserEvent | null | undefined): PaneType | false {
		const pane = Keymap.isModEvent(evt);
		return pane === true ? "tab" : pane;
	}

	private navigateToFile(file: TFile, paneType: PaneType | false = false): void {
		// Obsidian's own openFile hands a file with no registered view
		// straight to the desktop's default application. For a text file
		// that's the wrong answer to "open this in Obsidian", so those go
		// to the plugin's read-only viewer instead — which is also what
		// makes the orange warning mean anything. Binary files with no
		// viewer keep Obsidian's behaviour; there's nothing to show.
		const fullPath = this.warnsOnOpen(file.extension) ? this.absolutePathFor(file) : null;
		if (fullPath) {
			void openExternalFile(this.plugin, fullPath, paneType, this.leaf);
			return;
		}

		if (paneType) {
			// This leaf stays on its own note, so its header has to drop the
			// half-typed path and go back to showing that file — patching it
			// to the newly opened one would describe the wrong tab.
			void this.plugin.app.workspace
				.getLeaf(paneType)
				.openFile(file)
				.then(() => this.cancelNavigation());
			return;
		}

		void this.leaf.openFile(file).then(() => {
			this.exitTypingInput();
			this.removeDocumentClickAway();
			this.browsePath = null;
			this.mode = "breadcrumb";
			this.showNativeBreadcrumb();
			// Don't rely solely on Obsidian's own file-open event to
			// repaint the header — patch immediately and deterministically.
			this.manager.patchLeaf(this.leaf);
		});
	}

	private revealFolderInExplorer(path: string): void {
		const target = path
			? this.plugin.app.vault.getAbstractFileByPath(path)
			: this.plugin.app.vault.getRoot();
		if (!(target instanceof TFolder)) return;

		const fileExplorer = this.plugin.app.internalPlugins.getPluginById("file-explorer");
		if (!fileExplorer) {
			new Notice(t("noticeExplorerDisabled"));
			return;
		}
		try {
			fileExplorer.instance.revealInFolder(target);
			this.expandInExplorer(target.path);
		} catch (err) {
			new Notice(t("noticeExplorerRevealFailed"));
		}
	}

	/**
	 * revealInFolder walks *up* from the target expanding its ancestors, so
	 * the row becomes visible while its own contents stay shut — which is
	 * never what "show me this folder" means. Finish the job on the target.
	 *
	 * Twice, because the instance method opens the explorer leaf first when
	 * one isn't already there: on that path the rows don't exist yet when we
	 * return, so the immediate attempt finds nothing and the next frame does.
	 * Both calls are safe — Obsidian's setCollapsed is a no-op unless the
	 * state actually changes, so the second one costs nothing.
	 */
	private expandInExplorer(path: string, onlyIfRevealed = false): void {
		// Obsidian's reveal isn't synchronous, and on a window that has just
		// loaded it is markedly slower: the folder's tree item exists and
		// reports itself collapsible, but expanding it in the same frame as
		// the click doesn't take. Asking again a moment later does.
		//
		// The old immediate + single-frame pair therefore worked on a warm
		// tree and silently did nothing on a cold one — so the first reveal
		// after every Obsidian start left the folder shut, which is exactly
		// the case a user meets first. Keep asking across a few frames and
		// stop as soon as it holds.
		let attempt = 0;
		const expand = (): void => {
			const view = this.plugin.app.workspace.getLeavesOfType("file-explorer")[0]?.view as
				| FileExplorerView
				| undefined;
			// Re-checked every attempt rather than once: while this is
			// retrying the user may have clicked elsewhere, and expanding a
			// folder they have navigated away from would be its own bug.
			//
			// Crucially this waits rather than gives up. Obsidian sets the
			// focused item as part of revealing, which on a freshly loaded
			// window lands after the click returns — bailing out on the
			// first look meant the common case, the first reveal after a
			// restart, scheduled no retry at all and quietly never expanded.
			const revealed = !onlyIfRevealed || view?.tree?.focusedItem?.file?.path === path;
			const item = view?.fileItems?.[path];
			if (revealed && item?.collapsible && item.collapsed) item.toggleCollapsed(false);

			const done = revealed && item !== undefined && !item.collapsed;
			if (!done && attempt < EXPAND_BACKOFF_MS.length) {
				this.timers.add(window.setTimeout(expand, EXPAND_BACKOFF_MS[attempt++]));
			}
		};
		expand();
	}

	/**
	 * Rename/move mode's single commit point: moves/renames the current
	 * file to an absolute vault path, creating missing parent folders.
	 * Refuses to clobber anything that already exists there.
	 */
	private async moveFileTo(newPath: string): Promise<void> {
		if (!this.file) return;

		// Committing the path unchanged is a plain no-op, not a rename —
		// easy to do now that a delimiter click prefills the real path, and
		// asking Obsidian to rename a file onto itself only risks an error
		// notice for something the user experienced as "nothing to change".
		if (newPath === this.file.path) {
			this.finishRename();
			return;
		}

		const existing = this.plugin.app.vault.getAbstractFileByPath(newPath);
		if (existing && existing !== this.file) {
			new Notice(t("noticeAlreadyExists", { path: newPath }));
			return;
		}

		try {
			const parentPath = newPath.substring(0, newPath.lastIndexOf("/"));
			await this.ensureFolderExists(parentPath);
			await this.plugin.app.fileManager.renameFile(this.file, newPath);
		} catch (err) {
			new Notice(t("noticeRenameFailed", { error: (err as Error).message }));
			return;
		}

		this.finishRename();
	}

	/**
	 * The Ctrl/Cmd variant of moveFileTo: leaves the original where it is
	 * and puts a copy at the target path, opened in a new pane so both are
	 * in front of you at once. Same refusal to clobber an existing file —
	 * which also covers copying onto the original's own path, where there
	 * is nothing sensible to do.
	 */
	private async copyFileTo(newPath: string, paneType: PaneType): Promise<void> {
		if (!this.file) return;

		if (this.plugin.app.vault.getAbstractFileByPath(newPath)) {
			new Notice(t("noticeAlreadyExists", { path: newPath }));
			return;
		}

		let copy: TFile;
		try {
			const parentPath = newPath.substring(0, newPath.lastIndexOf("/"));
			await this.ensureFolderExists(parentPath);
			copy = await this.plugin.app.vault.copy(this.file, newPath);
		} catch (err) {
			new Notice(t("noticeCopyFailed", { error: (err as Error).message }));
			return;
		}

		// The original is still what this leaf shows, so finishRename's
		// repaint lands on the right file; the copy gets its own pane.
		this.finishRename();
		void this.plugin.app.workspace.getLeaf(paneType).openFile(copy);
	}

	/** Tears down any browsing/typing session and leaves rename mode after a successful move. */
	private finishRename(): void {
		this.editCleanup?.();
		this.editCleanup = null;
		this.inputEl = null;
		this.removeDocumentClickAway();
		this.browsePath = null;
		this.renameMode = false;
		this.updateRenameModeStyling();
		this.mode = "breadcrumb";
		this.showNativeBreadcrumb();
		this.manager.patchLeaf(this.leaf);
	}

	/**
	 * Resolves what the user typed into an absolute vault path, applying
	 * the same normalization the commit paths use so validation and
	 * submission can never disagree about the target. `baseFolder` is
	 * the folder the text is relative to ("" for the vault root).
	 */
	private buildTargetPath(rawText: string, baseFolder: string): string {
		const trimmed = rawText.trim();
		const combined = baseFolder ? `${baseFolder}/${trimmed}` : trimmed;
		let target = normalizePath(combined);
		if (!/\.[^./\\]+$/.test(target)) target += ".md";
		return target;
	}

	/**
	 * Returns Obsidian's own rename-validation message for what's
	 * currently typed, or "" when the name is usable. Only meaningful in
	 * rename/move mode — while navigating, an existing name is exactly
	 * what you're looking for rather than a conflict.
	 */
	private validateTarget(rawText: string, baseFolder: string): string {
		const trimmed = rawText.trim();
		if (!trimmed) return t("msgEmpty");

		if (this.externalPath !== null) {
			// Obsidian's naming rules stop at the vault boundary. A leading
			// dot is an ordinary hidden file out here, and the link-safety
			// warning is about a link syntax that has no way to reach these
			// files at all. What still holds is that nothing may be
			// overwritten — and that committing the name unchanged is a
			// no-op rather than a collision with itself.
			const target = externalJoin(this.externalPath, trimmed);
			const source = this.externalRenameSource();
			if (source && samePath(source.path, target)) return "";
			return isExternalFile(target) || isExternalFolder(target) ? t("msgExists") : "";
		}

		// Checked per segment: slashes are separators, so they're only
		// illegal *within* a name. (Typing "/" is intercepted into a new
		// segment anyway; multi-segment text arrives via the prefilled
		// full path or a paste.)
		const segments = trimmed.split("/").filter(Boolean);
		if (segments.length === 0) return t("msgEmpty");

		for (const segment of segments) {
			if (ILLEGAL_CHARS_RE.test(segment)) return MSG_ILLEGAL();
			if (segment.startsWith(".")) return t("msgDotfile");
			if (UNSAFE_CHARS_RE.test(segment)) return MSG_UNSAFE();
		}

		const target = this.buildTargetPath(rawText, baseFolder);
		const existing = this.plugin.app.vault.getAbstractFileByPath(target);
		if (existing && existing !== this.file) return t("msgExists");

		return "";
	}

	/**
	 * Live validation feedback for the open input, shown as the same red
	 * tooltip Obsidian uses for a rejected rename. Empty input reports
	 * nothing — you've simply not typed yet — so the warning only
	 * appears once there's something actually wrong.
	 */
	private updateValidation(rawText: string, baseFolder: string): void {
		const message = rawText.trim() ? this.validateTarget(rawText, baseFolder) : "";
		if (message === this.validationError) return;
		this.validationError = message;

		this.clearErrorTooltip();
		if (message && this.inputEl) {
			displayTooltip(this.inputEl, message, { placement: "bottom", classes: ["mod-error"] });
		}
	}

	/** There's no public hideTooltip, so dismiss by removing the error tooltip we put up. */
	private clearErrorTooltip(): void {
		document.body.querySelectorAll(".tooltip.mod-error").forEach((el) => el.remove());
	}

	/**
	 * Display filter for autocomplete entries. Deliberately affects
	 * listing only: anything hidden here still occupies its name in the
	 * vault, so it still blocks a rename onto it via the duplicate check
	 * in validateTarget — hiding a file never makes it overwritable.
	 */
	private shouldListChild(child: TAbstractFile): boolean {
		if (child.name.startsWith(".") && !this.plugin.settings.showDotFiles) return false;

		if (child instanceof TFile && !this.isSupportedFile(child)) {
			// Matches the core file explorer, which gates unsupported
			// files behind Obsidian's own "Detect all file extensions".
			return this.readsUnsupportedFilesSetting();
		}

		return true;
	}

	/**
	 * Both of these are undocumented APIs, so they're guarded: a failure
	 * here must never take the suggestion list down with it — falling
	 * back to showing the entry is the harmless direction to fail in.
	 */
	/**
	 * The same display rules as inside the vault, applied to a plain
	 * directory entry: dot-entries behind this plugin's setting,
	 * unsupported extensions behind Obsidian's "Detect all file
	 * extensions". Keeping them identical means browsing out of the vault
	 * doesn't suddenly show a different class of file.
	 */
	private shouldListExternalChild(child: ExternalChild): boolean {
		if (child.isDotEntry && !this.plugin.settings.showDotFiles) return false;
		if (child.isFolder) return true;
		if (this.isSupportedExtension(child.extension)) return true;
		return this.readsUnsupportedFilesSetting();
	}

	private isSupportedExtension(extension: string): boolean {
		try {
			return this.plugin.app.viewRegistry.isExtensionRegistered(extension);
		} catch (err) {
			return true;
		}
	}

	/**
	 * A pick from the dropdown while outside the vault: descend into a
	 * folder, or hand a file to the read-only external view. Nothing here
	 * can go through `leaf.openFile` — that needs a TFile, which by
	 * definition doesn't exist for these.
	 */
	private selectExternalEntry(absolutePath: string, paneType: PaneType | false): void {
		if (isExternalFolder(absolutePath)) {
			this.extendExternalPath(absolutePath);
			this.enterTypingMode("");
			return;
		}
		// Opening ends the session, exactly as picking a file inside the vault
		// does. Without this the input and its dropdown stay up over the file
		// they just opened, since nothing else on this path tears them down —
		// submitExternal has always done it, and this branch was the one that
		// didn't.
		void openExternalFile(this.plugin, absolutePath, paneType, this.leaf);
		this.cancelNavigation();
	}

	private isSupportedFile(file: TFile): boolean {
		try {
			return this.plugin.app.viewRegistry.isExtensionRegistered(file.extension);
		} catch (err) {
			return true;
		}
	}

	private readsUnsupportedFilesSetting(): boolean {
		try {
			return this.plugin.app.vault.getConfig("showUnsupportedFiles") === true;
		} catch (err) {
			return true;
		}
	}

	/**
	 * Backspace on an empty input steps back out of the last folder:
	 * that chip is dropped and its name reopened for editing, cursor at
	 * the end, so a mistyped folder can be corrected in place.
	 */
	private stepOutOfFolder(): void {
		if (this.externalPath !== null) {
			// Stops at the location that was picked rather than walking on
			// up into the machine's directory layout, which is exactly what
			// drawing the row relative to that location was for.
			if (this.externalBase && samePath(this.externalPath, this.externalBase.path)) return;
			const parent = externalParent(this.externalPath);
			// At the filesystem root there is nowhere further up; the
			// vault-root segment is still there to jump somewhere else.
			if (!parent) return;
			const name = this.externalPath.slice(parent.length).replace(/^[\\/]+/, "");
			this.extendExternalPath(parent);
			this.enterTypingMode(name);
			return;
		}

		const current = this.browsePath ?? "";
		if (!current) return; // already at the vault root, nothing to step out of

		const cut = current.lastIndexOf("/");
		const parent = cut === -1 ? "" : current.slice(0, cut);
		const name = cut === -1 ? current : current.slice(cut + 1);

		this.extendBrowsePath(parent);
		this.enterTypingMode(name);
	}

	/**
	 * "/" commits what's typed as a folder segment and opens a fresh
	 * input for the next one, the way a path is normally typed. The
	 * folder needn't exist yet — missing parents are created when the
	 * final target is committed.
	 */
	private descendIntoTypedSegment(rawText: string): void {
		const trimmed = rawText.trim();
		if (!trimmed) return; // a stray "/" with nothing typed is a no-op

		const base = this.currentFolderPath();
		this.extendBrowsePath(normalizePath(base ? `${base}/${trimmed}` : trimmed));
		this.enterTypingMode("");
	}

	/** Where autocomplete/typed-path resolution should be scoped to right now. */
	private currentFolderPath(): string {
		if (this.browsePath !== null) return this.browsePath;
		return this.file?.parent?.path ?? "";
	}

	/** Absolute path of the open vault on disk, or null if it isn't a real folder (in-memory adapters). */
	private vaultBasePath(): string | null {
		const adapter = this.plugin.app.vault.adapter;
		return adapter instanceof FileSystemAdapter ? adapter.getBasePath() : null;
	}

	/** Absolute path of a vault file on disk, for handing to the read-only viewer. */
	private absolutePathFor(file: TFile): string | null {
		const adapter = this.plugin.app.vault.adapter;
		return adapter instanceof FileSystemAdapter ? adapter.getFullPath(file.path) : null;
	}

	/**
	 * Opens the vault-root dropdown: known vaults, home, the filesystem
	 * root and mounted devices. Selecting one browses there — it never
	 * switches Obsidian to another vault, which is the whole point of
	 * having it here rather than deferring to the sidebar's switcher.
	 */
	private openLocationMenu(): void {
		// The single entrance to everything outside the vault, so the single
		// place the setting has to be honoured: with it off there is no way
		// to reach an external path, and the root segment falls back to what
		// it did before the feature existed.
		if (!this.plugin.settings.accessExternalFiles) {
			this.revealRoot();
			return;
		}
		if (!this.file && this.externalPath === null) return;
		this.showingLocations = true;
		this.pinRowStart();
		this.hideNativeBreadcrumb();
		// render() clears the row down to nothing (see renderVaultSegment),
		// so the input created next occupies exactly where the vault name
		// was — which is where Obsidian will left-align the popover.
		this.render();
		this.enterTypingMode("", "none", this.vaultSegmentEl);
	}

	/** The jump targets for the dropdown, resolved fresh each time so a newly mounted device shows up. */
	private locationEntries(): SystemLocation[] {
		return listSystemLocations(this.vaultBasePath() ?? "");
	}

	/**
	 * Moves browsing to an absolute path outside the vault, or back inside
	 * it when the picked location *is* the open vault. Everything
	 * downstream keys off `externalPath`, so this is the only place that
	 * has to know which side of the boundary we're on.
	 */
	private goToLocation(absolutePath: string): void {
		this.showingLocations = false;
		// A different place than the one the unlock was granted for.
		if (this.unlockedBase !== null && !samePath(this.unlockedBase, absolutePath)) {
			this.lockExternalWrites();
		}
		const base = this.vaultBasePath();
		const location = this.locationEntries().find((entry) => samePath(entry.path, absolutePath));

		if (base && isInside(absolutePath, base)) {
			// Back inside the vault: express it the way the rest of the
			// code already understands, as a vault-relative browse path.
			const relative = samePath(absolutePath, base)
				? ""
				: absolutePath.slice(base.length).replace(/^[\\/]+/, "").split(PATH_SEP).join("/");
			this.externalPath = null;
			this.externalBase = null;
			this.extendBrowsePath(relative);
			this.enterTypingMode("");
			return;
		}

		this.externalBase = {
			path: absolutePath,
			label: location?.label ?? absolutePath,
			icon: location ? iconFor(location) : LOCATION_ICONS.root,
		};
		this.externalPath = absolutePath;
		this.browsePath = null;
		this.mode = "browsing";
		this.hideNativeBreadcrumb();
		this.render();
		this.attachDocumentClickAway();
		this.enterTypingMode("");
	}

	/** Descends to another absolute folder while already outside the vault. */
	private extendExternalPath(absolutePath: string): void {
		this.exitTypingInput();
		this.externalPath = absolutePath;
		this.mode = "browsing";
		this.render();
		this.attachDocumentClickAway();
	}

	/**
	 * Any keypress on the row (outside rename mode) converts the
	 * trailing filename slot into a live-filtering `<input>`, seeded
	 * with the character that triggered it. Breadcrumb chips built up
	 * so far stay exactly as they are — only this trailing part is
	 * editable text.
	 */
	/**
	 * `selection` is what opens highlighted: "all" for the whole prefill,
	 * a number for that many leading characters (one segment of it), or
	 * "none" to just park the caret at the end.
	 */
	private enterTypingMode(
		initialText: string,
		selection: "all" | "none" | number = "none",
		host: HTMLElement = this.filenameEl,
	): void {
		if (!this.file && this.externalPath === null && this.browsePath === null) return;

		this.mode = "typing";
		// The filename slot is where the input normally goes, and emptying
		// it is what makes room. A different host (the vault segment, for
		// the locations menu) owns its own contents and must keep them.
		if (host === this.filenameEl) {
			this.filenameEl.addClass(EDITING_CLASS);
			this.filenameEl.empty();
		}

		const selectionEnd =
			selection === "all"
				? initialText.length
				: selection === "none"
					? 0
					: Math.min(selection, initialText.length);

		// Text that opens selected is about to be typed over, so it must
		// not double as the autocomplete query — filtering by a path
		// remainder like "2026/Notes.md" would match nothing and close the
		// dropdown the click just opened. Suppressed until the first real
		// keystroke supersedes it (see onInput).
		this.suggestQueryOverride = selectionEnd > 0 ? "" : null;

		const inputEl = host.createEl("input", {
			type: "text",
			cls: "lure-path-input lure-typing-input",
			value: initialText,
		});
		this.inputEl = inputEl;

		// Measured against its own font rather than flex-sized, so it fits
		// whatever it's seeded with (a full path, say) as tightly as the
		// text it replaced, and grows by real glyph widths as you type
		// instead of scrolling inside a fixed box.
		const autoSize = () => {
			const content = textWidth(inputEl.value, inputEl) + INPUT_SLACK_PX;
			inputEl.style.width = `${Math.max(INPUT_MIN_PX, Math.ceil(content))}px`;
		};
		autoSize();

		inputEl.focus();
		if (selectionEnd > 0) {
			inputEl.setSelectionRange(0, selectionEnd);
		} else {
			inputEl.setSelectionRange(inputEl.value.length, inputEl.value.length);
		}

		const onKeydown = (evt: KeyboardEvent) => {
			if (evt.key === "Enter") {
				evt.preventDefault();
				void this.handleTypedSubmit(inputEl.value, this.paneTypeFor(evt));
			} else if (evt.key === "Escape") {
				evt.preventDefault();
				this.cancelNavigation();
			} else if (evt.key === "Backspace" && inputEl.value === "") {
				evt.preventDefault();
				this.stepOutOfFolder();
			} else if (evt.key === "/") {
				evt.preventDefault();
				this.descendIntoTypedSegment(inputEl.value);
			}
		};

		// Clicking a breadcrumb has already selected that segment, so one
		// further click is all that should be needed to widen the selection
		// to the whole line — this folder and everything below it. The
		// first click has replaced the segment with this input by the time
		// the second arrives, so that second click lands here rather than
		// on the breadcrumb, and navigation and rename mode share it.
		//
		// Strictly a continuation of that opening gesture, though. Once the
		// field has actually been used the usual editor rules take over —
		// click places the caret, double-click takes a word, triple-click
		// takes the line (all of which the input does natively). "Used" is
		// either having typed (the query override is retired) or simply
		// having let the opening gesture lapse.
		const openedAt = performance.now();
		const onDblClick = () => {
			if (this.suggestQueryOverride === null) return;
			if (performance.now() - openedAt > SEGMENT_DOUBLE_CLICK_MS) return;
			inputEl.select();
		};

		const onInput = (evt: Event) => {
			// Only a genuine keystroke or paste retires the prefill. The
			// `input` events dispatched from code below — to open the
			// popover, and to fill the field from a suggestion — are
			// untrusted, and must not be mistaken for the user typing.
			if (evt.isTrusted) this.suggestQueryOverride = null;
			autoSize();
			if (this.renameMode) this.updateValidation(inputEl.value, this.currentFolderPath());
		};

		// Wired up (and editCleanup assigned) *before* the suggest is
		// constructed: AbstractInputSuggest is the one piece here that
		// could throw, and if it did after this point the input would be
		// left with no key handling and no cleanup — stranding `mode` at
		// "typing" forever, which silently kills every other click path.
		inputEl.addEventListener("keydown", onKeydown);
		inputEl.addEventListener("input", onInput);
		inputEl.addEventListener("dblclick", onDblClick);
		this.editCleanup = () => {
			inputEl.removeEventListener("keydown", onKeydown);
			inputEl.removeEventListener("input", onInput);
			inputEl.removeEventListener("dblclick", onDblClick);
			this.suggestQueryOverride = null;
			this.validationError = "";
			this.clearErrorTooltip();
			this.suggest?.close();
			this.suggest = null;
		};

		try {
			this.suggest = new FolderChildSuggest(this.plugin.app, inputEl, () => ({
				folderPath: this.currentFolderPath(),
				locations: this.showingLocations ? this.locationEntries() : null,
				externalFolder: this.externalPath,
				renameMode: this.renameMode,
				// Outside the vault the name to keep is the external file's,
				// not the open note's — that note isn't what a move out there
				// would be acting on.
				keepName: this.externalFileName ?? this.file?.name ?? null,
				keepPath:
					this.externalFileName !== null && this.externalPath !== null
						? externalJoin(this.externalPath, this.externalFileName)
						: (this.file?.path ?? null),
				shouldList: (child) => this.shouldListChild(child),
				shouldListExternal: (child) => this.shouldListExternalChild(child),
				warnsOnOpen: (extension) => this.warnsOnOpen(extension),
				queryOverride: this.suggestQueryOverride,
			}));
			this.suggest.onSelect((value, evt) => {
				evt.preventDefault();
				// The overflow row is a count, not a destination. Keyboard
				// selection can still land on it, so it has to no-op rather
				// than be merely unclickable.
				if (value.kind === "more") {
					this.inputEl?.focus();
					return;
				}
				const paneType = this.paneTypeFor(evt);
				if (value.kind === "location") {
					this.goToLocation(value.path);
					return;
				}
				// Checked before `external`, which is about where the entry
				// lives: a keep-name entry is a destination to commit to
				// either way, never something to open.
				if (value.kind === "keep-name") {
					// Held modifier turns the move into a copy under the same
					// name, so "put a duplicate over there" is the same gesture
					// as "move it over there".
					if (value.external) void this.commitExternalRename(value.path, paneType);
					else if (paneType) void this.copyFileTo(value.path, paneType);
					else void this.moveFileTo(value.path);
					return;
				}
				if (value.external) {
					this.selectExternalEntry(value.path, paneType);
					return;
				}
				if (value.kind === "folder") {
					this.extendBrowsePath(value.path);
					this.enterTypingMode("");
					return;
				}
				if (this.renameMode) {
					// Existing files stay pickable so a name can be copied
					// or edited from, but selecting one only fills the
					// input — the red validation tooltip then flags the
					// conflict, and committing stays blocked until it's
					// resolved, so a note is never silently overwritten.
					inputEl.value = value.label;
					// Picking a name is a deliberate choice of what the field
					// holds, so it supersedes the prefill just as typing does.
					this.suggestQueryOverride = null;
					inputEl.dispatchEvent(new Event("input"));
					inputEl.focus();
					return;
				}
				const file = this.plugin.app.vault.getAbstractFileByPath(value.path);
				if (file instanceof TFile) this.navigateToFile(file, paneType);
			});
		} catch (err) {
			this.suggest = null;
			new Notice(t("noticeAutocompleteUnavailable", { error: (err as Error).message }));
		}

		// AbstractInputSuggest only builds and opens its popover in
		// response to the input's own `input` event, so focusing it
		// programmatically — especially with an empty value, as a
		// delimiter click does — otherwise shows nothing until the user
		// types. Dispatching one synthetically lists the folder's
		// contents immediately.
		inputEl.dispatchEvent(new Event("input"));

		this.attachDocumentClickAway();
	}

	/** Removes the typing input (if any) and returns filenameEl to plain text, without touching browsePath. */
	private exitTypingInput(): void {
		if (this.mode !== "typing") return;
		this.editCleanup?.();
		this.editCleanup = null;
		this.inputEl = null;
		this.mode = this.browsePath !== null ? "browsing" : "breadcrumb";
		this.renderFilename();
	}

	/** Escape / click-away: fully discards the browsing/typing session and shows the real file's actual path again. */
	private cancelNavigation(): void {
		this.editCleanup?.();
		this.editCleanup = null;
		this.inputEl = null;
		this.removeDocumentClickAway();
		this.browsePath = null;
		this.mode = "breadcrumb";
		this.showNativeBreadcrumb();
		this.file = this.getFileForLeaf();

		// A leaf showing an external file has no TFile, so falling back to
		// the vault path here would leave the row blank — cancelling has to
		// return to what this leaf is actually displaying, which for those
		// leaves is the external file, not a note.
		const externalView = this.getExternalPathForLeaf();
		if (!this.file && externalView) {
			this.adoptExternalView(externalView);
			this.hideNativeBreadcrumb();
		}

		this.render();
	}

	/**
	 * Enter on the typed path. `paneType` is set when Ctrl/Cmd was held,
	 * which shifts every outcome to a new pane: navigation opens the file
	 * there instead of here, and rename/move copies to the target rather
	 * than moving, so the original stays put and the copy comes up beside
	 * it.
	 */
	private async handleTypedSubmit(
		rawText: string,
		paneType: PaneType | false = false,
	): Promise<void> {
		const trimmed = rawText.trim();
		if (!trimmed) {
			this.cancelNavigation();
			return;
		}

		if (this.externalPath !== null) {
			await this.submitExternal(trimmed, paneType);
			return;
		}

		const folderPath = this.currentFolderPath();
		const candidatePath = folderPath ? `${folderPath}/${trimmed}` : trimmed;
		const asFolder = this.plugin.app.vault.getAbstractFileByPath(normalizePath(candidatePath));
		if (asFolder instanceof TFolder) {
			this.extendBrowsePath(asFolder.path);
			this.enterTypingMode("");
			return;
		}

		let normalized = normalizePath(candidatePath);
		if (!/\.[^./\\]+$/.test(normalized)) {
			normalized += ".md";
		}

		if (this.renameMode) {
			// Both refuse to clobber an existing file, so typing a taken
			// name reports the conflict rather than overwriting.
			if (paneType) await this.copyFileTo(normalized, paneType);
			else await this.moveFileTo(normalized);
			return;
		}

		const existing = this.plugin.app.vault.getAbstractFileByPath(normalized);

		if (existing instanceof TFile) {
			this.navigateToFile(existing, paneType);
			return;
		}
		if (existing instanceof TFolder) {
			new Notice(t("noticeIsFolder", { path: normalized }));
			return;
		}

		const confirmed = await ConfirmCreateFileModal.ask(this.plugin.app, normalized);
		if (!confirmed) {
			this.inputEl?.focus();
			return;
		}
		try {
			const parentPath = normalized.substring(0, normalized.lastIndexOf("/"));
			await this.ensureFolderExists(parentPath);
			const newFile = await this.plugin.app.vault.create(normalized, "");
			this.navigateToFile(newFile, paneType);
		} catch (err) {
			new Notice(t("noticeCreateFailed", { error: (err as Error).message }));
			this.inputEl?.focus();
		}
	}

	/**
	 * Enter on a path typed while outside the vault — the counterpart of
	 * handleTypedSubmit's vault branch, with the same four outcomes:
	 * descend into a folder, move/copy the current file there, open an
	 * existing file, or create a new one.
	 *
	 * The last two of those write, and out here that needs the padlock
	 * open. Locked, this stays what it always was: a way to look around.
	 */
	private async submitExternal(typed: string, paneType: PaneType | false): Promise<void> {
		const base = this.externalPath ?? "";
		// An absolute path typed outright replaces the trail; anything else
		// is relative to where the chips currently point.
		const typedPath = /^([a-zA-Z]:[\\/]|[\\/])/.test(typed) ? typed : externalJoin(base, typed);

		if (isExternalFolder(typedPath)) {
			this.extendExternalPath(typedPath);
			this.enterTypingMode("");
			return;
		}

		if (this.renameMode) {
			await this.commitExternalRename(this.withRenameExtension(typedPath), paneType);
			return;
		}

		// Resolved before the existence check, not after, so that typing
		// "ideas" opens the "ideas.md" already sitting there rather than
		// offering to create a second file beside it.
		const target = this.withNoteExtension(typedPath);

		if (isExternalFile(target)) {
			void openExternalFile(this.plugin, target, paneType, this.leaf);
			this.cancelNavigation();
			return;
		}

		if (!this.requireExternalUnlock()) return;

		// Same confirmation as inside the vault: a path that doesn't exist is
		// far more often a typo than a request to create something.
		const confirmed = await ConfirmCreateFileModal.ask(this.plugin.app, target);
		if (!confirmed) {
			this.inputEl?.focus();
			return;
		}
		try {
			await createExternalFile(target);
		} catch (err) {
			new Notice(t("noticeCreateFailed", { error: (err as Error).message }));
			this.inputEl?.focus();
			return;
		}
		void openExternalFile(this.plugin, target, paneType, this.leaf);
		this.cancelNavigation();
	}

	/**
	 * Rename/move mode committed at a path outside the vault.
	 *
	 * The source is whatever the row describes — the external file this leaf
	 * is showing, or the open note when you've walked out of the vault with
	 * one in front of you. A note is the one thing that can't be *moved*
	 * out: fileManager can't follow it across the boundary, so every link
	 * pointing at it would break silently. Copying it out has none of that
	 * problem, so that is what's offered instead.
	 */
	private async commitExternalRename(
		target: string,
		paneType: PaneType | false,
	): Promise<void> {
		const source = this.externalRenameSource();
		if (!source) return;

		// Committing the path unchanged is a no-op, exactly as inside.
		if (samePath(source.path, target)) {
			this.finishRename();
			return;
		}

		const copying = paneType !== false;
		if (!copying && source.fromVault) {
			new Notice(t("noticeExternalMoveOut", { mod: Platform.isMacOS ? "Cmd" : "Ctrl" }));
			this.inputEl?.focus();
			return;
		}

		if (!this.requireExternalUnlock()) return;

		if (await externalExists(target)) {
			new Notice(t("noticeAlreadyExists", { path: target }));
			this.inputEl?.focus();
			return;
		}

		try {
			if (copying) await copyExternalFile(source.path, target);
			else await moveExternalFile(source.path, target);
		} catch (err) {
			new Notice(
				t(copying ? "noticeCopyFailed" : "noticeRenameFailed", {
					error: (err as Error).message,
				}),
			);
			this.inputEl?.focus();
			return;
		}

		this.finishRename();
		// A move takes this leaf's own file with it, so the leaf follows it
		// to the new path. A copy leaves the original in front of you and
		// opens the duplicate beside it, same as inside the vault.
		void openExternalFile(this.plugin, target, copying ? paneType : false, this.leaf);
	}

	/**
	 * A typed name with no extension means a note, exactly as it does inside
	 * the vault — where committing "ideas" has always produced "ideas.md".
	 */
	private withNoteExtension(path: string): string {
		return /\.[^./\\]+$/.test(path) ? path : `${path}.md`;
	}

	/**
	 * Renaming keeps whatever extension the file already has when none is
	 * typed. This is the one place the outside deliberately parts company
	 * with the vault: in there everything is a note and defaulting to .md
	 * costs nothing, but out here a folder holds every kind of file, and
	 * quietly turning a .png into a .md on rename would be a format change
	 * nobody asked for.
	 */
	private withRenameExtension(path: string): string {
		if (/\.[^./\\]+$/.test(path)) return path;
		const source = this.externalRenameSource();
		const extension = source ? extensionOf(source.path) : "";
		return extension ? `${path}.${extension}` : path;
	}

	/**
	 * What rename/move outside the vault acts on, as an absolute path.
	 *
	 * `fromVault` is decided by where the file actually lives, not by which
	 * view is showing it: a `.json` in your vault opened in the plugin's own
	 * viewer is still a vault file, and moving it out with `fs` behind
	 * Obsidian's back is exactly what that flag exists to prevent.
	 */
	private externalRenameSource(): { path: string; fromVault: boolean } | null {
		const path = this.getExternalPathForLeaf() ?? (this.file ? this.absolutePathFor(this.file) : null);
		if (!path) return null;

		const base = this.vaultBasePath();
		return { path, fromVault: base !== null && isInside(path, base) };
	}

	/** The single gate every external write goes through, and the notice when it's shut. */
	private requireExternalUnlock(): boolean {
		if (!this.pointsOutsideVault() || this.externalWritesUnlocked) return true;
		new Notice(t("noticeExternalWriteLocked"));
		this.inputEl?.focus();
		return false;
	}

	/**
	 * Clicking the filename text or empty space (outside rename mode)
	 * opens this quick full-path edit — one input holding the whole
	 * path. It's the fast path for "I already know exactly where I want
	 * to go"; the chip trail is reached via a delimiter click instead.
	 */
	private startFullPathEdit(): void {
		// Outside the vault the whole path is absolute, and an absolute path
		// typed outright is exactly what submitExternal already accepts — so
		// this needs no browse reset, unlike the vault case below.
		if (this.externalPath !== null) {
			this.enterTypingMode(
				this.externalFileName ? externalJoin(this.externalPath, this.externalFileName) : this.externalPath,
				"all",
			);
			return;
		}
		if (!this.file) return;
		// Identical to clicking the delimiter right after the vault name
		// — browsing from the vault root, with the same autocomplete —
		// except the whole current path starts out filled in and
		// selected, so typing replaces it outright.
		this.extendBrowsePath("");
		this.enterTypingMode(this.file.path, "all");
	}

	private async ensureFolderExists(folderPath: string): Promise<void> {
		if (!folderPath) return;

		const parts = folderPath.split("/");
		let current = "";
		for (const part of parts) {
			current = current ? `${current}/${part}` : part;
			const existing = this.plugin.app.vault.getAbstractFileByPath(current);
			if (!existing) {
				await this.plugin.app.vault.createFolder(current);
			} else if (!(existing instanceof TFolder)) {
				throw new Error(t("errorNotAFolder", { path: current }));
			}
		}
	}

	/** Escape/click-away cancellation while browsing or typing (see cancelNavigation). */
	private attachDocumentClickAway(): void {
		if (this.documentClickAway) return;
		const handler = (evt: MouseEvent) => {
			const container = this.titleEl.parentElement;
			const target = evt.target as HTMLElement;
			if (container?.contains(target)) return;
			// The rename toggle sits outside the breadcrumb container — it
			// lives among Obsidian's own .view-actions icons — but pressing
			// it is part of the same edit, not a click away from it. This
			// listener is capture-phase on document, so without the
			// exemption it would cancel the session before the button's own
			// handler ever ran.
			if (this.renameButtonEl.contains(target)) return;
			if (target.closest(".suggestion-container, .menu")) return;
			this.cancelNavigation();
		};
		this.documentClickAway = handler;
		document.addEventListener("click", handler, true);
	}

	private removeDocumentClickAway(): void {
		if (!this.documentClickAway) return;
		document.removeEventListener("click", this.documentClickAway, true);
		this.documentClickAway = null;
	}
}
