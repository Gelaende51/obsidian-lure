import {
	FileSystemAdapter,
	FileView,
	Keymap,
	Notice,
	PaneType,
	Scope,
	TAbstractFile,
	TFile,
	TFolder,
	UserEvent,
	WorkspaceLeaf,
	displayTooltip,
	normalizePath,
	setIcon,
	setTooltip,
} from "obsidian";
import type { FileExplorerView } from "obsidian";
import type BreadcrumbPathPlugin from "./main";
import type { BreadcrumbManager } from "./breadcrumbManager";
import { ConfirmCreateFileModal } from "./createFileModal";
import { FitStage, planFit, shortestUnique } from "./pathFit";
import { planTab } from "./tabComplete";
import { FolderChildSuggest, PathSuggestion } from "./folderChildSuggest";
import { ExternalChild, PATH_SEP, externalJoin, externalParent, externalSegments, isExternalFile, isExternalFolder, listExternalChildren } from "./externalFs";
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
import { showExternalMenu } from "./externalMenu";
import { UrlTarget, classifyTypedTarget, slashBelongsToScheme } from "./urlTargets";
import { NavMove } from "./navLock";
import {
	FOLDER_NOTE_PLUGIN_IDS,
	GestureTarget,
	RightClickCounter,
	classifyTarget,
} from "./segmentGestures";
import { LABELS, obsidianLabel } from "./obsidianLabels";
import { makeDraggable, showContextMenu } from "./nativeFileItem";
import { warnsOnOpen } from "./fileKinds";
import { t } from "./lang";
import { confirmAction } from "./prompts";

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

/** On the header row while navigation is locked; suppresses typing, tints the marking. */
const NAV_LOCKED_CLASS = "lure-nav-locked";
/** On the row when even the shortest honest names do not fit; turns it into a scroller. */
const SCROLL_CLASS = "lure-row-scrolls";
/**
 * How many times the fitter re-measures. Each pass costs one layout read
 * and converges quickly — three is comfortably enough for the paths that
 * exist, and a bound means a row that cannot be satisfied scrolls instead
 * of looping.
 */
const FIT_PASSES = 4;

/**
 * The field as it stood before one press of Tab, so <kbd>Shift</kbd>+Tab can
 * put it back.
 *
 * A snapshot rather than a description of what the press did: taking a step
 * back then needs no inverse of anything — completing, respelling, stepping
 * into a folder and carrying the rest of a path along are all just "the row
 * looked like this".
 */
interface TabStep {
	/** The folder being browsed inside the vault, null while the row stands in the file's own. */
	folder: string | null;
	/** The folder being browsed outside it, null while inside. */
	external: string | null;
	value: string;
	caret: number;
	/**
	 * What was selected when the press was made, if anything — a run the
	 * walk had given back, or the name a folder click opened selected.
	 *
	 * Both have to come back on the way out, and the difference matters:
	 * only a run the walk itself gave back may be *resumed* from, so
	 * `given` is what tells the two apart. A press that resumes commits
	 * marked text without changing a character of it, which is why the mark
	 * has to be remembered at all: there is no difference in the text for
	 * the way back to find.
	 */
	mark?: { start: number; end: number; given?: boolean };
}

/** A row segment the fitter may shorten, tied to the element showing it. */
interface FittableSegment {
	el: HTMLElement;
	full: string;
	stage: FitStage;
	floor: () => number;
}
/** On whatever would make a legal locked move — a segment, or a history button. */
const NAV_LEGAL_CLASS = "lure-nav-legal";
/** Passed when clearing, so a cleared bar cannot accidentally be told a move is legal. */
const NO_MOVES: ReadonlySet<NavMove> = new Set();

/** Obsidian's own in-app browser, for addresses typed into the bar. */
const WEB_VIEWER_VIEW_TYPE = "webviewer";

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

/**
 * How much of a file name is the name rather than the extension.
 *
 * Clicking the note's name selects this much, so the common edit — renaming
 * a note — needs no further gesture, and the extension stays visible and
 * one keystroke away rather than being typed over by accident. Pressing
 * End or the right arrow still reaches it, and a double-click still widens
 * to the whole row.
 *
 * A leading dot belongs to the name: ".gitignore" is all name and no
 * extension, so `lastIndexOf` at position 0 does not count. A name with no
 * dot at all is likewise all name.
 */
/**
 * The single folder position where two paths differ, or null.
 *
 * Null when the paths are different lengths, when nothing changed, when
 * more than one segment did, or when the change is the file name itself —
 * none of those is "the user renamed a folder", which is the only case the
 * coupled rename applies to.
 */
function onlyChangedFolder(before: string[], after: string[]): number | null {
	if (before.length !== after.length || before.length < 2) return null;
	let found: number | null = null;
	for (let i = 0; i < before.length; i++) {
		if (before[i] === after[i]) continue;
		if (found !== null) return null;
		found = i;
	}
	// The last segment is the file, not a folder.
	return found !== null && found < before.length - 1 ? found : null;
}

function stemLength(name: string): number {
	const dot = name.lastIndexOf(".");
	return dot > 0 ? dot : name.length;
}

/**
 * A whole path with the extension taken off its last segment.
 *
 * Not `stemLength` on the path itself: a folder called `v1.2` holding a
 * file with no extension would have the cut land inside the folder name
 * and hand back half a path.
 */
/**
 * A prefilled path and the part of it that opens selected: its first folder,
 * or the whole thing when there is only a name.
 */
function asLanding(relative: string): { path: string; select: number } | null {
	if (!relative) return null;
	const cut = relative.indexOf("/");
	return { path: relative, select: cut < 0 ? relative.length : cut };
}

/**
 * Where the path segment the caret sits in begins and ends.
 *
 * A field can hold a whole path — a folder click leaves everything to the
 * right of the clicked folder in it, and the focus command fills in the
 * lot — but only one segment of it is being edited, and the list is showing
 * one folder's contents.
 */
function segmentBoundsAtCaret(value: string, caret: number): { start: number; end: number } {
	let start = 0;
	let end = value.length;
	for (let i = 0; i < value.length; i++) {
		if (value[i] !== "/" && value[i] !== "\\") continue;
		if (i < caret) start = i + 1;
		else {
			end = i;
			break;
		}
	}
	return { start, end };
}

/** Whatever is selected in the field, and whether the walk is what marked it. */
function markOf(
	input: HTMLInputElement,
	given: boolean,
): { mark?: { start: number; end: number; given?: boolean } } {
	const start = input.selectionStart ?? 0;
	const end = input.selectionEnd ?? 0;
	if (end <= start) return {};
	return { mark: { start, end, ...(given ? { given: true } : {}) } };
}

/**
 * The folder being stepped out of, with whatever the field was holding left
 * standing behind it.
 *
 * A chip becoming text again must not cost the path to its right: a row
 * showing `Schemes › |2026/note.md` reads as `Schemes/2026/note.md` once the
 * chip is given back — which is exactly the text a click on that folder
 * produces, so stepping out and clicking in land in the same place.
 */
function pathBack(name: string, separator: string, rest: string): string {
	return rest ? `${name}${separator}${rest}` : name;
}

/**
 * Where two strings stop being the same, counting characters.
 *
 * Case-sensitive on purpose, unlike everything that matches names: when a
 * press respelled `lure` as `Lure` the difference is the whole word, and
 * walking that press back has to mark the whole word.
 */
function firstDifference(a: string, b: string): number {
	const limit = Math.min(a.length, b.length);
	let at = 0;
	while (at < limit && a[at] === b[at]) at += 1;
	return at;
}

/**
 * What the dropdown should filter by, given where the caret is.
 *
 * The segment being edited — minus its extension, for as long as the caret
 * is in front of the dot. Clicking a note's name selects the stem and leaves
 * `.md` behind it, so typing one letter made the field read `a.md`, and
 * filtering by that looked for a child whose name contained "a.md": nothing
 * matched, and the list closed on the first keystroke of a perfectly ordinary
 * rename. The extension is not what you are typing until you put the caret
 * past the dot, and then it counts like anything else.
 */
function queryAtCaret(input: HTMLInputElement): string {
	const value = input.value;
	const caret = input.selectionEnd ?? value.length;
	const { start, end } = segmentBoundsAtCaret(value, caret);
	const segment = value.slice(start, end);
	const dot = segment.lastIndexOf(".");
	// `dot > 0` leaves dot-files alone: ".hidden" is a name, not an extension.
	if (dot > 0 && caret - start <= dot) return segment.slice(0, dot);
	return segment;
}

function pathStem(path: string): string {
	const cut = Math.max(path.lastIndexOf("/"), path.lastIndexOf("\\"));
	const name = path.slice(cut + 1);
	return path.slice(0, cut + 1) + name.slice(0, stemLength(name));
}

function textWidth(text: string, el: HTMLElement): number {
	if (!measureCtx) measureCtx = createEl("canvas").getContext("2d");
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
	private navLockButtonEl: HTMLElement;
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
	/** Refits the row when the pane is resized — the whole point of fitting it. */
	private resizeObserver: ResizeObserver | null = null;
	/**
	 * Counts right-clicks on the row so one press can mean three things.
	 * One per bar: a run that starts on a folder and continues on the file
	 * name is one indecisive gesture, not two, and resolving it as the
	 * target it ended on is the least surprising reading.
	 */
	private rightClicks = new RightClickCounter((count, at) => this.runGesture(count, at));
	/** What the run in progress is aimed at, captured on the first press. */
	private gestureTarget: GestureTarget = "empty";
	/** The folder segment or delimiter the run started on, when it began on one. */
	private gestureFolderPath: string | null = null;
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
	/**
	 * The field as it was before arrowing into the dropdown — text, selection
	 * and the bounds of the segment being edited — held so that stepping back
	 * off the list restores it exactly, and so that each preview is built
	 * from it rather than from the last preview. Null when none is showing.
	 */
	private preview: {
		text: string;
		selectionStart: number;
		selectionEnd: number;
		segment: { start: number; end: number };
	} | null = null;
	/**
	 * Re-measures the open input's width. Held so a preview can resize the
	 * field without dispatching an `input` event: that event re-queries and
	 * re-renders the list, which resets the selection — so previewing an
	 * entry destroyed the very selection that was about to be used, and
	 * Enter or a click landed on whatever row the fresh list happened to
	 * open on.
	 */
	private autoSizeInput: (() => void) | null = null;
	/**
	 * How far along the end-of-path selection ladder Tab has walked, or null
	 * while it is still completing folders. Reset whenever the session ends,
	 * so a new one always starts by walking the path rather than resuming a
	 * ladder the user has forgotten about.
	 */
	private tabStage: number | null = null;
	/** The file the ladder is describing — the one Tab landed on, or the open note. */
	private tabTargetPath: string | null = null;
	/**
	 * Where each press of Tab found the field, newest last, so Shift+Tab can
	 * walk back out the way it walked in.
	 *
	 * Emptied by typing, exactly as the ladder is: once the field holds
	 * something the walk did not put there, its earlier states describe a
	 * path nobody is on any more, and restoring one would throw away what
	 * was typed. Walking back from there steps out of the folder instead,
	 * which is the same move one step coarser.
	 */
	private tabTrail: TabStep[] = [];
	/**
	 * The selection Shift+Tab last made, if it is still the one showing.
	 *
	 * That selection means something particular — "these characters were
	 * completed for you and are being given back" — which the next press
	 * forward needs to know, so that it resumes the walk from where the
	 * retreat stopped instead of reading the marked text as typed. Any other
	 * selection in the field (a preview, a drag of the mouse) will not match
	 * it, and is treated as text like any other.
	 */
	private tabGivenBack: { start: number; end: number } | null = null;
	/**
	 * The field as the ladder found it — where a lap comes back to when no
	 * folder was walked before the rungs began.
	 *
	 * When one was, the front of the walk is the first thing on `tabTrail`
	 * and that is used instead. Either way the lap has to close somewhere
	 * real: a folder click opens the field on the rest of the path, and a
	 * lap of Tab that ended by emptying it threw that path away — the one
	 * place a walk of nothing but Tab could cost you what was on screen.
	 */
	private tabLadderStart: TabStep | null = null;
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

		this.vaultSegmentEl = createSpan();
		this.vaultSegmentEl.addClass("lure-vault-wrapper");

		this.filenameEl = createDiv();
		this.filenameEl.addClass("lure-filename");
		this.titleEl.insertAdjacentElement("afterend", this.filenameEl);

		// Uses Obsidian's own .view-action/.clickable-icon classes (the
		// same ones the native bookmark/reading-mode/more-options buttons
		// use) so it inherits identical sizing for free, and lives in
		// .view-actions itself rather than next to our breadcrumb.
		// A chain, not a padlock. The padlock beside it is a *permission* —
		// writing outside the vault — while this is a *coupling*: these bars
		// move together. Two padlocks a few pixels apart would make the user
		// learn which is which, which is the cost an icon is supposed to
		// save. Blue here and red there, matching what each already means
		// elsewhere on the row.
		this.navLockButtonEl = createSpan();
		this.navLockButtonEl.addClass("clickable-icon", "view-action", "lure-navlock-btn");
		setIcon(this.navLockButtonEl, "link");
		this.navLockButtonEl.addEventListener("click", (evt) => {
			evt.stopPropagation();
			this.manager.navLock.setLocked(false);
		});

		this.renameButtonEl = createSpan();
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
		this.unlockButtonEl = createSpan();
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
		this.observeWidth();

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
			if (target.closest(".lure-filename-text")) {
				// A modifier means "open it", not "edit it" — the same rule
				// a link or a File Explorer row follows, so Ctrl, Ctrl+Alt
				// and middle-click land where the user already expects.
				const paneType = this.paneTypeFor(evt);
				if (paneType && this.file) this.navigateToFile(this.file, paneType);
				else this.handleFilenameClick();
			} else this.startFullPathEdit();
		}, { signal: this.domListeners.signal });

		// While coupled, a click on the row is a request to move every pane,
		// not this one. Capture phase and first, so neither the plugin's own
		// segment handling nor Obsidian's runs and takes one pane somewhere
		// the others are not following.
		container?.addEventListener("click", (evt) => {
			const lock = this.manager.navLock;
			// Rename mode is exempt: renaming is not navigating, and the whole
			// point of leaving the pencil button alone was that it keeps
			// working while coupled.
			if (!lock.isLocked() || !this.participates() || this.renameMode) return;
			const target = (evt.target as HTMLElement).closest<HTMLElement>(".view-header-breadcrumb");
			if (!target || target.closest(".lure-vault-wrapper")) return;
			evt.preventDefault();
			// stopImmediatePropagation, not stopPropagation: the row's other
			// handlers sit on this same element, and stopPropagation does not
			// stop siblings. With only that, a locked click ran this handler
			// *and* the ordinary segment one — which moved one pane on its own
			// and left the panes pointing at different folders, the precise
			// failure the lock exists to prevent.
			evt.stopImmediatePropagation();
			// Only the marked ones do anything: a segment with no marking is
			// a move the other panes cannot make, and silence is the honest
			// answer rather than moving this one alone.
			if (!target.hasClass(NAV_LEGAL_CLASS)) return;
			const path = this.nativeSegmentPath(target);
			lock.move(path === this.currentFolderPath() ? "sibling" : "up");
		}, { capture: true, signal: this.domListeners.signal });

		// Obsidian's own back and forward move one pane. While coupled they
		// have to move all of them, so the press is taken here and handed to
		// the lock — which refuses it outright if any pane cannot follow.
		this.leaf.view.containerEl
			.querySelector<HTMLElement>(".view-header-left")
			?.addEventListener("click", (evt) => {
				const lock = this.manager.navLock;
				if (!lock.isLocked() || !this.participates()) return;
				// Array.from rather than spread: the DOM lib this project builds
				// against types NodeListOf without an iterator.
				const icons = Array.from(
					this.leaf.view.containerEl.querySelectorAll<HTMLElement>(".view-header-left .clickable-icon"),
				);
				const pressed = (evt.target as HTMLElement).closest<HTMLElement>(".clickable-icon");
				if (!pressed) return;
				const index = icons.indexOf(pressed);
				if (index !== 0 && index !== 1) return;
				evt.preventDefault();
				evt.stopImmediatePropagation();
				lock.move(index === 0 ? "back" : "forward");
			}, { capture: true, signal: this.domListeners.signal });

		// A modifier on a folder segment opens rather than edits, the same
		// rule the file name follows. Capture phase and ahead of the segment
		// handler below, so it applies in swapped mode too — what a plain
		// click does there is a setting, but "open it elsewhere" is not.
		container?.addEventListener("click", (evt) => {
			if (this.inputEl) return;
			const paneType = this.paneTypeFor(evt);
			if (!paneType) return;
			const segment = (evt.target as HTMLElement).closest<HTMLElement>(".view-header-breadcrumb");
			if (!segment || segment.closest(".lure-vault-wrapper")) return;
			const folderPath = this.nativeSegmentPath(segment);
			if (folderPath === null) return;
			evt.preventDefault();
			evt.stopPropagation();
			this.openFolderInPane(folderPath, paneType);
		}, { capture: true, signal: this.domListeners.signal });

		// Middle-click never fires `click`, so the modifier rule above would
		// miss the one gesture users reach for most on a tab-like row.
		// `auxclick` also fires for the right button, which is counted
		// elsewhere and must not be opened as a file.
		container?.addEventListener("auxclick", (evt) => {
			if (evt.button !== 1 || this.inputEl) return;
			const el = evt.target as HTMLElement;
			if (el.closest(".lure-filename-text")) {
				if (!this.file) return;
				evt.preventDefault();
				this.navigateToFile(this.file, this.paneTypeFor(evt) || "tab");
				return;
			}
			const segment = el.closest<HTMLElement>(".view-header-breadcrumb");
			if (!segment || segment.closest(".lure-vault-wrapper")) return;
			const folderPath = this.nativeSegmentPath(segment);
			if (folderPath === null) return;
			evt.preventDefault();
			this.openFolderInPane(folderPath, this.paneTypeFor(evt) || "tab");
		}, { capture: true, signal: this.domListeners.signal });

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

		// Right-click on the row. Every press is counted rather than acted
		// on, because two and three presses mean different things — see
		// segmentGestures for what that costs. Obsidian has no handler of
		// its own here, so nothing is being overridden; the default menu is
		// suppressed so the platform's does not appear behind ours.
		container?.addEventListener("contextmenu", (evt) => {
			if (this.inputEl) return;
			evt.preventDefault();
			// Capture phase, and the event stops here. Obsidian answers a
			// right-click on its own breadcrumb with a folder menu that is
			// missing the three entries the File Explorer adds inline —
			// make a copy, rename, delete — so letting it through would
			// mean the same folder offering two different menus depending
			// on where it was clicked. Ours is built from the same code the
			// dropdown rows use, so the two agree by construction.
			evt.stopPropagation();
			const target = classifyTarget(evt.target as HTMLElement);
			// The run is aimed at whatever the latest press landed on, so
			// an indecisive gesture resolves as the thing it ended on.
			this.gestureTarget = target;
			this.gestureFolderPath = this.folderPathForEvent(evt, target);
			this.rightClicks.press(evt);
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

	/**
	 * Which folder a right-click refers to, for the targets that name one.
	 *
	 * A delimiter refers to the folder *before* it, which is the same index
	 * as the segment it follows — the identity the click handlers already
	 * rely on.
	 */
	private folderPathForEvent(evt: MouseEvent, target: GestureTarget): string | null {
		const el = evt.target as HTMLElement;
		// Our own chips carry their path; Obsidian's segments are found by
		// their index instead. Checked first because a chip is never in the
		// native breadcrumb and would otherwise resolve to nothing.
		const chip = el.closest<HTMLElement>("[data-lure-path]");
		if (chip && (target === "folder" || target === "delimiter")) {
			return chip.dataset.lurePath ?? null;
		}
		if (target === "folder") {
			const segment = el.closest<HTMLElement>(".view-header-breadcrumb");
			return segment ? this.nativeSegmentPath(segment) : null;
		}
		if (target === "delimiter") {
			const separator = el.closest<HTMLElement>(".view-header-breadcrumb-separator");
			const all = this.titleEl.parentElement
				?.querySelector<HTMLElement>(NATIVE_BREADCRUMB_SELECTOR)
				?.querySelectorAll<HTMLElement>(".view-header-breadcrumb-separator");
			if (!separator || !all) return null;
			const index = Array.from(all).indexOf(separator);
			return index < 0 ? null : (this.ancestorFolderPaths()[index] ?? null);
		}
		return null;
	}

	/**
	 * What a completed run of right-clicks does.
	 *
	 * One press is a command, two and three are copies of progressively
	 * more of the path. Copying is the whole reason the counting exists:
	 * there is no other gesture that distinguishes "this name", "this name
	 * with its extension" and "everything from here rightwards" without
	 * asking the user to aim at different pixels.
	 */
	private runGesture(count: number, at: { clientX: number; clientY: number }): void {
		switch (this.gestureTarget) {
			case "vault":
				// The one segment that is not a path segment gets the one
				// action that is not about this file.
				if (count === 1) void this.plugin.app.commands.executeCommandById("workspace:new-tab");
				// Two presses take what this segment names — the vault, or
				// the location standing in for it out there. Three take the
				// path the filesystem knows, extension included: the copy
				// that has to mean something outside Obsidian belongs on
				// the segment that is itself outside the path.
				else if (count === 2) void this.copyToClipboard(this.rootSegmentName());
				else if (count === 3) void this.copyToClipboard(this.systemPath());
				return;
			case "delimiter":
				if (count === 1) this.showDelimiterMenu(this.gestureFolderPath, at);
				return;
			case "file":
				this.runFileGesture(count);
				return;
			case "folder":
				this.runFolderGesture(count, at);
				return;
			case "empty": {
				// The row as shown — vault-relative inside, which is what a
				// link or a search needs. Two presses give it the way the
				// row spells it, without the extension; three give it the
				// way the filesystem does, with. The pair matches what the
				// file name's own two presses copy, one path longer.
				const row = this.rowDisplayPath();
				if (count === 2) void this.copyToClipboard(pathStem(row));
				else if (count === 3) void this.copyToClipboard(row);
				return;
			}
		}
	}

	private runFileGesture(count: number): void {
		const name = this.externalFileName ?? this.file?.name ?? null;
		if (count === 1) {
			void this.plugin.app.commands.executeCommandById("outline:open");
			return;
		}
		if (name === null) return;
		// Two presses take the name as the row shows it selected; three take
		// it as the filesystem has it. The pair mirrors what clicking the
		// name selects, so the gesture and the selection agree.
		if (count === 2) void this.copyToClipboard(name.slice(0, stemLength(name)));
		else if (count === 3) void this.copyToClipboard(name);
	}

	private runFolderGesture(count: number, at: { clientX: number; clientY: number }): void {
		const folderPath = this.gestureFolderPath;
		if (folderPath === null) return;
		const external = this.externalPath !== null;
		const name = folderPath.split(external ? /[\\/]/ : "/").pop() ?? folderPath;
		// The plain press answers with the folder's menu, the same one the
		// delimiter beside it gives and the same one its dropdown row gives.
		if (count === 1) {
			this.showFolderMenu(folderPath, at);
			return;
		}
		if (count === 2) void this.copyToClipboard(name);
		// Everything from this folder rightwards: the folder and the rest of
		// the path below it, which is the part of the row to the right of
		// where the user pressed.
		else if (count === 3) {
			const suffix = this.pathSuffixAfter(folderPath);
			void this.copyToClipboard(suffix ? `${name}/${suffix}` : name);
		}
	}

	/**
	 * The path from the system root, for the copy that has to mean something
	 * outside Obsidian. Outside the vault the row is already absolute, so
	 * the two copies coincide there.
	 */
	private systemPath(): string {
		if (this.externalPath !== null) return this.rowPath();
		const row = this.rowDisplayPath();
		if (!row) return "";
		const base = this.vaultBasePath();
		return base === null ? row : `${base}/${row}`;
	}

	/** What the row's opening segment names: this vault, or the location standing in for it outside. */
	private rootSegmentName(): string {
		if (this.externalPath !== null) return this.externalBase?.label ?? this.externalPath;
		return this.plugin.app.vault.getName();
	}

	/**
	 * Sends a folder to another pane.
	 *
	 * A folder is not something Obsidian can open, so there are only two
	 * honest answers. Where a folder-note plugin is running and the folder
	 * has a note, that note *is* the folder as far as the user is concerned,
	 * and it opens like any other file. Otherwise the pane opens empty with
	 * its path bar already standing in that folder, so the only thing left
	 * to supply is the name.
	 */
	private openFolderInPane(folderPath: string, paneType: PaneType): void {
		const app = this.plugin.app;
		const folder = app.vault.getAbstractFileByPath(folderPath);
		if (!(folder instanceof TFolder)) return;

		const note = this.folderNoteFor(folder);
		const leaf = app.workspace.getLeaf(paneType);
		if (note) {
			void leaf.openFile(note);
			return;
		}
		// The new leaf is empty and has had no active-leaf-change yet, so its
		// bar has to be asked for rather than assumed to exist.
		void app.workspace.revealLeaf(leaf);
		window.setTimeout(() => this.manager.breadcrumbFor(leaf)?.startBrowsingAt(folderPath), 0);
	}

	/** The whole path as the row is showing it: vault-relative inside, absolute outside. */
	private rowPath(): string {
		if (this.externalPath !== null) {
			return this.externalFileName !== null
				? externalJoin(this.externalPath, this.externalFileName)
				: this.externalPath;
		}
		return this.file?.path ?? "";
	}

	/**
	 * A delimiter stands for the folder before it, so right-clicking one
	 * asks about that folder. Where the folder has a note, the note is the
	 * more specific answer and wins; otherwise the folder answers for
	 * itself, because a right-click that does nothing teaches nothing.
	 */
	private showDelimiterMenu(folderPath: string | null, at: { clientX: number; clientY: number }): void {
		if (folderPath === null) return;
		const app = this.plugin.app;
		const folder = app.vault.getAbstractFileByPath(folderPath);
		if (!(folder instanceof TFolder)) {
			// Outside the vault there is no TFolder and no folder note, so
			// the path-built menu is the whole answer.
			this.showFolderMenu(folderPath, at);
			return;
		}

		const note = this.folderNoteFor(folder);
		const evt = new MouseEvent("contextmenu", { clientX: at.clientX, clientY: at.clientY });
		showContextMenu(app, evt, note ?? folder);
	}

	/**
	 * A folder segment's own menu, whichever side of the vault boundary it
	 * is on.
	 *
	 * Inside, that is the File Explorer's menu for the folder. Outside,
	 * there is no TFolder for those handlers to act on, so it is the same
	 * path-built menu the dropdown rows out there already use — the two are
	 * built from one function so a folder cannot offer different entries
	 * depending on which of its two representations was clicked.
	 */
	private showFolderMenu(folderPath: string, at: { clientX: number; clientY: number }): void {
		const evt = new MouseEvent("contextmenu", { clientX: at.clientX, clientY: at.clientY });
		const folder = this.plugin.app.vault.getAbstractFileByPath(folderPath);
		if (folder instanceof TFolder) {
			showContextMenu(this.plugin.app, evt, folder);
			return;
		}
		if (this.externalPath === null) return;
		showExternalMenu(
			this.plugin,
			evt,
			folderPath,
			true,
			this.leaf,
			() => this.externalWritesUnlocked,
			() => this.refresh(),
		);
	}

	/**
	 * The note that stands for a folder, when a plugin is actually managing
	 * folder notes.
	 *
	 * The convention — a note inside the folder sharing its name — is
	 * checkable on its own, but acting on it regardless would make the
	 * delimiter behave differently in two vaults that look identical to the
	 * user. Gated on a running plugin instead, so the behaviour a vault has
	 * is the behaviour its plugins say it has.
	 */
	private folderNoteFor(folder: TFolder): TFile | null {
		const enabled = this.plugin.app.plugins?.enabledPlugins;
		if (!enabled || !FOLDER_NOTE_PLUGIN_IDS.some((id) => enabled.has(id))) return null;
		const candidate = this.plugin.app.vault.getAbstractFileByPath(
			`${folder.path}/${folder.name}.md`,
		);
		return candidate instanceof TFile ? candidate : null;
	}

	/**
	 * Copies, and says so.
	 *
	 * A copy leaves nothing on screen to show it happened, and these are
	 * reached by a gesture with no visible affordance — a run of
	 * right-clicks — so without a notice there is no way to tell a
	 * successful copy from a miscounted one. Obsidian words both the
	 * success and the failure already, so the wording matches everything
	 * else that touches the clipboard.
	 */
	private async copyToClipboard(text: string): Promise<void> {
		if (!text) return;
		try {
			await navigator.clipboard.writeText(text);
			new Notice(obsidianLabel(LABELS.copied, `${text} copied to your clipboard`, { item: text }));
		} catch {
			new Notice(obsidianLabel(LABELS.copyFailed, "Unable to copy to your clipboard"));
		}
	}

	/**
	 * Opens this bar in typing mode at a folder, with nothing after it.
	 *
	 * A folder cannot be a tab: Obsidian has no view for one. So dropping a
	 * folder segment on the tab bar, or Ctrl-clicking it, opens an empty tab
	 * whose path bar already stands in that folder — the remaining work is
	 * the name, which is the only part the user actually knows.
	 */
	startBrowsingAt(folderPath: string): void {
		this.extendBrowsePath(folderPath);
		this.enterTypingMode("");
	}

	// ---- NavLockParticipant -------------------------------------------------

	/**
	 * A bar takes part once it is showing a vault file. Outside the vault
	 * there is no leaf history to walk and no vault folder to rise through,
	 * so an external row is left out rather than made to answer questions
	 * that do not apply to it.
	 */
	participates(): boolean {
		// Outside the vault counts. A folder tree out there can be parallel to
		// one in here, or to another out there, and the moves all still mean
		// something: the leaf keeps its own history, and the filesystem has
		// parents and siblings like any vault does. Excluding it was
		// convenience on my part, not a property of the feature.
		if (this.externalPath !== null) return true;
		if (this.file === null) return false;
		// Editor panes only. Sidebar views get patched too — backlinks has a
		// header title and a file like any other — but they carry no
		// navigation history, so including one made every locked group report
		// "back" as illegal because of a pane nobody was navigating.
		//
		// `iterateRootLeaves` looked like the obvious test and is not: with two
		// editor panes open side by side it yielded one of them. Asking the
		// leaf for its own root is exact.
		return this.leaf.getRoot() === this.plugin.app.workspace.rootSplit;
	}

	canMove(move: NavMove): boolean {
		if (!this.participates()) return false;
		if (move === "up") return this.parentOfCurrentFolder() !== null;
		if (move === "sibling") return this.manager.navLock.nextSharedSibling() !== null;
		const history = this.leaf.history;
		if (!history) return false;
		const stack = move === "back" ? history.backHistory : history.forwardHistory;
		return (stack?.length ?? 0) > 0;
	}

	/**
	 * Only "up" has a destination this bar can name without making the move.
	 * Back and forward are the leaf's own history, whose entries are
	 * Obsidian's business, so they answer null and the lock forms no opinion
	 * about them.
	 */
	previewMove(move: NavMove): string | null {
		if (move === "up") return this.parentOfCurrentFolder();
		// A sibling step keeps each pane in its own tree, so two panes only
		// converge on one if they were already sharing a parent — which the
		// preview reports honestly rather than assuming cannot happen.
		if (move === "sibling") {
			const name = this.manager.navLock.nextSharedSibling();
			if (name === null) return null;
			const parent = this.parentOfCurrentFolder();
			if (parent === null) return null;
			if (this.externalPath !== null) return externalJoin(parent, name);
			return parent ? `${parent}/${name}` : name;
		}
		return null;
	}

	folderNameAt(depth: number): string | null {
		if (this.externalPath !== null) return this.externalPath.split(PATH_SEP)[depth] ?? null;
		return this.file?.path.split("/")[depth] ?? null;
	}

	currentFolderName(): string | null {
		const current = this.lockFolderPath();
		if (!current) return null;
		const cut = current.lastIndexOf(this.lockSeparator());
		return cut < 0 ? current : current.slice(cut + 1);
	}

	siblingFolderNames(): string[] {
		const parentPath = this.parentOfCurrentFolder();
		if (parentPath === null) return [];
		if (this.externalPath !== null) {
			// The same visibility rule the dropdown uses. Without it the lock
			// would step both panes into a folder neither dropdown will show
			// — outside the vault `listExternalChildren` returns dot entries,
			// where Obsidian simply never indexes them and the question
			// cannot arise inside.
			return listExternalChildren(parentPath)
				.filter((child) => child.isFolder && this.shouldListExternalChild(child))
				.map((child) => child.name);
		}
		const parent = this.plugin.app.vault.getAbstractFileByPath(parentPath || "/");
		if (!(parent instanceof TFolder)) return [];
		return parent.children.filter((child) => child instanceof TFolder).map((child) => child.name);
	}

	moveToSibling(name: string): void {
		const parentPath = this.parentOfCurrentFolder();
		if (parentPath === null) return;
		if (this.externalPath !== null) {
			this.goToLocation(externalJoin(parentPath, name));
			return;
		}
		this.goUpTo(parentPath ? `${parentPath}/${name}` : name);
	}

	applyMove(move: NavMove): void {
		if (move === "up" && this.externalPath !== null) {
			const parent = this.parentOfCurrentFolder();
			if (parent !== null) this.goToLocation(parent);
			return;
		}
		if (move === "back") {
			void this.leaf.history?.back();
			return;
		}
		if (move === "forward") {
			void this.leaf.history?.forward();
			return;
		}
		const parent = this.parentOfCurrentFolder();
		if (parent !== null) this.goUpTo(parent);
	}

	/**
	 * Paints the moves the lock will accept.
	 *
	 * Blue on the segment that would be risen to, and on Obsidian's own
	 * back/forward buttons — the two places a user already looks for those
	 * moves. Clearing is unconditional so an unlocked bar never keeps a
	 * marking from a lock that has since ended.
	 */
	markLegalMoves(moves: ReadonlySet<NavMove>): void {
		const container = this.titleEl.parentElement;
		container?.toggleClass(NAV_LOCKED_CLASS, this.manager.navLock.isLocked() && this.participates());

		const parent = this.parentOfCurrentFolder();
		const here = this.currentFolderPath();
		for (const [index, segment] of this.nativeSegments().entries()) {
			const path = this.ancestorFolderPaths()[index] ?? null;
			const isUp = moves.has("up") && path !== null && path === parent;
			// The folder you are in is what a sibling step leaves, so it is
			// what carries that move's marking.
			const isSibling = moves.has("sibling") && path !== null && path === here;
			segment.toggleClass(NAV_LEGAL_CLASS, isUp || isSibling);
		}
		this.markHistoryButtons(moves);
		this.updateNavLockButton();
	}

	/**
	 * Obsidian's own back and forward actions.
	 *
	 * They carry no distinguishing class — only an `aria-label`, which is
	 * translated, so matching "Navigate back" would mark nothing in any of
	 * the other 44 languages this plugin speaks. They are the first two
	 * clickable icons in the header's left group, in that order, which is a
	 * fact about the layout rather than about the text.
	 */
	private markHistoryButtons(moves: ReadonlySet<NavMove>): void {
		const icons = this.leaf.view.containerEl.querySelectorAll<HTMLElement>(
			".view-header-left .clickable-icon",
		);
		icons[0]?.toggleClass(NAV_LEGAL_CLASS, moves.has("back"));
		icons[1]?.toggleClass(NAV_LEGAL_CLASS, moves.has("forward"));
	}

	/**
	 * The folder one level above where this bar currently stands, or null
	 * when there is nowhere above it.
	 *
	 * Outside the vault that boundary is the location the row started from —
	 * the vault, home, a drive — rather than the filesystem root, matching
	 * what Backspace already refuses to walk past.
	 */
	private parentOfCurrentFolder(): string | null {
		if (this.externalPath !== null) {
			const base = this.externalBase?.path ?? null;
			if (base !== null && samePath(this.externalPath, base)) return null;
			return externalParent(this.externalPath);
		}
		const current = this.currentFolderPath();
		if (!current) return null;
		const cut = current.lastIndexOf("/");
		return cut < 0 ? "" : current.slice(0, cut);
	}

	/** Where this bar stands, in whichever world it is in. */
	private lockFolderPath(): string {
		return this.externalPath ?? this.currentFolderPath();
	}

	/** The separator the current world uses, so names are split the same way they were joined. */
	private lockSeparator(): string {
		return this.externalPath !== null ? PATH_SEP : "/";
	}

	/**
	 * Rising a level: the folder's own note where a folder-note plugin gives
	 * it one, since that is what the folder *is* to the user, and otherwise
	 * the folder revealed in the explorer with the bar standing there.
	 */
	private goUpTo(folderPath: string): void {
		const folder = this.plugin.app.vault.getAbstractFileByPath(folderPath || "/");
		if (folder instanceof TFolder) {
			const note = this.folderNoteFor(folder);
			if (note) {
				void this.leaf.openFile(note);
				return;
			}
		}
		this.extendBrowsePath(folderPath);
		this.render();
	}

	// -------------------------------------------------------------------------

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
				// This pane went somewhere the lock did not send it — a link,
				// the quick switcher, a bookmark. The panes no longer stand
				// where the coupling put them, so the lock lets go rather
				// than staying on over a parallel that has already ended.
				// Ignored while the lock is making its own moves, which open
				// files too.
				if (previousFile !== null) this.manager.navLock.noticeIndependentMove(this);

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
		// A file outside the vault has no TFile, and requiring one here made
		// the rename key do nothing at all out there while the pencil button
		// beside it worked — the same mode, reachable by one route and not
		// the other. The padlock still gates the commit, which is where the
		// permission belongs.
		if (!this.file && this.externalPath === null) return;
		this.renameMode = true;
		this.updateRenameModeStyling();
		// The name without its extension, which is what a rename almost
		// always means — and the same thing clicking the name selects, so
		// the key and the click agree. The rest of the path is one further
		// press away, on the same ladder Tab walks.
		this.startLadderAt(0);
	}

	/**
	 * A second press of the rename key while the header field is open.
	 *
	 * Walks the selection along instead of alternating back to the inline
	 * title: name, name with extension, the path from the vault, the path
	 * from the system root. Returns false when there is nothing to walk, so
	 * the caller can fall back to its usual behaviour.
	 */
	advanceRenameSelection(): boolean {
		if (!this.inputEl || !this.renameMode) return false;
		this.advanceLadder();
		return true;
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
		this.rightClicks.reset();
		// The marking lives on Obsidian's own breadcrumb elements, which
		// outlive this instance — disabling the plugin, or reloading it,
		// would otherwise leave blue segments behind with nothing to explain
		// them.
		this.markLegalMoves(NO_MOVES);
		this.resizeObserver?.disconnect();
		this.resizeObserver = null;
		this.restoreFittedText();
		this.titleEl.parentElement?.removeClass(SCROLL_CLASS);
		this.domListeners.abort();
		this.vaultSegmentEl.remove();
		this.filenameEl.remove();
		this.renameButtonEl.remove();
		this.navLockButtonEl.remove();
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
	/** Vault-relative ancestors. Empty outside, where the shared rename does not apply. */
	ancestorFolderPaths(): string[] {
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
			// One tick is not enough, though. Choosing a folder from the
			// dropdown tears this row's input down and builds a new one, and
			// during that the focus is anywhere but here — which made a click
			// *into* the interaction look exactly like a click out of it,
			// ending rename mode as though nothing had been clicked at all.
			//
			// Waiting longer for focus to come back is not the answer either:
			// where it lands during a rebuild is not ours to predict, and
			// Obsidian may take it for the editor before we get it back. So
			// while a browsing or typing session of ours is open, focus
			// changes do not end the mode at all. Leaving for real is a
			// click, and the click-away handler above catches that; this
			// path exists for Tab, which only matters when rename mode is
			// sitting idle on the breadcrumb.
			this.timers.add(
				window.setTimeout(() => {
					if (!this.renameMode) return;
					if (this.mode !== "breadcrumb") return;
					if (this.isInsideRenameUi(document.activeElement as HTMLElement | null)) return;
					this.exitRenameMode();
				}, 0),
			);
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

		// Each segment stands for a real folder, so it drags like that
		// folder's row in the File Explorer — onto the tab bar, into the
		// editor, onto another folder to move it. Drag only: the right-click
		// on these is counted, and the menu it opens is built elsewhere.
		this.nativeSegments().forEach((el, index) => {
			const folderPath = cumulativePaths[index];
			if (folderPath === undefined) return;
			const folder = this.plugin.app.vault.getAbstractFileByPath(folderPath);
			if (folder instanceof TFolder) makeDraggable(this.plugin.app, el, folder);
		});

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
		const viewActions = this.titleEl.parentElement?.parentElement?.querySelector<HTMLElement>(
			".view-actions",
		);
		if (!this.renameButtonEl.isConnected) {
			viewActions?.insertAdjacentElement("afterbegin", this.renameButtonEl);
		}
		this.updateNavLockButton();
	}

	/**
	 * The chain shows only while the lock is on, the way the padlock shows
	 * only outside the vault: a control for a mode you are not in is one
	 * more thing to read past. It is the indicator and the way out at once,
	 * so nothing else has to be given up to make room — the rename button in
	 * particular stays exactly where it was, because renaming is still
	 * something you may want to do while coupled.
	 */
	private updateNavLockButton(): void {
		const locked = this.manager.navLock.isLocked() && this.participates();
		if (!locked) {
			this.navLockButtonEl.remove();
			return;
		}
		this.navLockButtonEl.setAttribute("aria-label", t("navLockRelease"));
		if (this.navLockButtonEl.isConnected) return;
		if (this.renameButtonEl.isConnected) {
			this.renameButtonEl.insertAdjacentElement("beforebegin", this.navLockButtonEl);
		}
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
		this.fitRow();
	}

	/**
	 * Makes the row fit its pane, and says so when it cannot.
	 *
	 * Left to itself the row is squeezed by flexbox: every segment shrinks
	 * until the names are two or three pixels of a letter each, with no
	 * ellipsis to say anything was cut, and a name containing a space wraps
	 * onto a second line. So the segments are pinned to their natural width
	 * (see `lure-fit` in the stylesheet) and shortened here instead, by the
	 * rules in pathFit: the opening segment gives way first and may go down
	 * to its icon, then the folders longest-first, then the file's own name
	 * — and none of them past what tells it apart or leaves it readable.
	 *
	 * When even that is not enough the row scrolls sideways rather than
	 * cutting into names that have nothing left to give, and is parked at
	 * its right-hand end — where the file you are looking at is.
	 */
	private fitRow(): void {
		const container = this.titleEl.parentElement;
		if (!container) return;
		// An open input is measured and sized in px by enterTypingMode, and
		// re-cutting the chips under it would move the text the user is
		// typing into. The row is refitted when the session ends.
		if (this.inputEl) return;

		const segments = this.fittableSegments();
		for (const segment of segments) segment.el.textContent = segment.full;
		container.removeClass(SCROLL_CLASS);
		if (!segments.length) return;

		// Planned against measured text and then checked against real layout,
		// because the two do not agree: a canvas measurement knows nothing of
		// the padding, letter-spacing and rounding each segment sits in, and
		// it consistently over-credited the saving — one pass left the row
		// still spilling with names it believed it had made short enough.
		// So the residual is fed back and the plan redrawn, from the full
		// names each time, until the row fits or there is nothing left to cut.
		const plan = { texts: segments.map((segment) => segment.full), overflows: true };
		// The planner walks a cap down one character at a time and measures
		// every name against each step, so the same string is asked about
		// repeatedly; each measurement reads computed style, which is a
		// layout flush. Remembered for the duration of this fit — the fonts
		// cannot change inside it.
		const widths = new Map<string, number>();
		const measure = (text: string, index: number): number => {
			const key = `${index} ${text}`;
			let width = widths.get(key);
			if (width === undefined) {
				width = textWidth(text, segments[index]?.el ?? container);
				widths.set(key, width);
			}
			return width;
		};
		let demand = 0;
		for (let pass = 0; pass < FIT_PASSES; pass++) {
			const residual = container.scrollWidth - container.clientWidth;
			if (residual <= 0) {
				plan.overflows = false;
				break;
			}
			demand += residual;
			const next = planFit(
				segments.map((segment) => ({
					full: segment.full,
					floor: segment.floor,
					stage: segment.stage,
				})),
				demand,
				measure,
			);
			// Nothing moved: every name is already as short as it may go, and
			// another pass would only measure the same row again.
			if (next.texts.every((text, index) => text === plan.texts[index])) break;
			plan.texts = next.texts;
			for (const [index, segment] of segments.entries()) {
				segment.el.textContent = plan.texts[index] ?? segment.full;
			}
		}

		for (const [index, segment] of segments.entries()) {
			const text = plan.texts[index] ?? segment.full;
			// The full name is a hover away, so shortening costs nothing but
			// a moment. Only where something was actually cut: a tooltip
			// repeating what is already on screen is noise.
			if (text === segment.full) continue;
			// A name cut away entirely has no box left to hover, so the
			// tooltip goes on what is still there: the icon standing in for
			// it.
			setTooltip(text === "" ? (segment.el.parentElement ?? segment.el) : segment.el, segment.full);
		}

		if (plan.overflows && container.scrollWidth > container.clientWidth) {
			container.addClass(SCROLL_CLASS);
			container.scrollLeft = container.scrollWidth;
		}
	}

	/**
	 * The row's shortenable names, left to right, each with the floor its
	 * siblings impose and the stage that decides when it is asked to give
	 * way (see pathFit: the opening segment, then the folders, then the
	 * file's own name).
	 */
	private fittableSegments(): FittableSegment[] {
		const out: FittableSegment[] = [];

		const add = (
			el: HTMLElement | null | undefined,
			stage: FitStage,
			siblings: () => string[],
		): void => {
			if (!el) return;
			// Read once and remembered: after the first cut the element's own
			// text is the shortened one, and re-deriving the floor from that
			// would let each pass eat a little more.
			const full = el.dataset.lureFull ?? el.textContent ?? "";
			if (!full) return;
			el.dataset.lureFull = full;
			out.push({ el, full, stage, floor: () => shortestUnique(full, siblings()) });
		};

		// The opening segment goes first and furthest: it names where the
		// path starts, which is the least useful thing on the row once you
		// are several folders deep, and its icon stays behind to say the row
		// still begins at a vault or a place rather than a folder.
		add(this.vaultSegmentEl.querySelector<HTMLElement>(".lure-root-name"), "root", () => []);

		if (this.externalPath !== null) {
			for (const chip of this.chipElements()) {
				const path = chip.dataset.lurePath;
				add(chip, "folder", () => (path ? this.externalSiblingNames(path) : []));
			}
		} else {
			// Inside the vault the trail is either Obsidian's own breadcrumb
			// or, while browsing, our chips standing in for it. Both are
			// fitted the same way; only where the names come from differs.
			const chips = this.chipElements();
			const elements = chips.length ? chips : this.nativeSegments();
			for (const [index, el] of elements.entries()) {
				const path = chips.length ? el.dataset.lurePath : this.ancestorFolderPaths()[index];
				add(el, "folder", () => this.vaultSiblingNames(path ?? null));
			}
		}

		// Last, and it keeps more than any folder does. It is what the header
		// is *for*: shortening it to save a few pixels of folder trail is the
		// wrong trade until the trail has nothing left to give.
		add(this.filenameEl.querySelector<HTMLElement>(".lure-filename-text"), "name", () =>
			this.filenameSiblingNames(),
		);
		return out;
	}

	/** The names beside the file this row is showing, so its own may not be cut into one of them. */
	private filenameSiblingNames(): string[] {
		if (this.externalPath !== null) return this.externalSiblingNames(this.rowPath());
		return this.vaultSiblingNames(this.file?.path ?? null);
	}

	/**
	 * Refits when the pane changes width.
	 *
	 * A split dragged narrower is exactly the case the fitting exists for,
	 * and it fires no Obsidian event of its own — the row would keep names
	 * that no longer fit until something else happened to redraw it.
	 */
	private observeWidth(): void {
		const container = this.titleEl.parentElement;
		if (!container || this.resizeObserver) return;
		this.resizeObserver = new ResizeObserver(() => this.fitRow());
		this.resizeObserver.observe(container);
	}

	/**
	 * Puts every shortened name back.
	 *
	 * The native segments are Obsidian's own elements and outlive this
	 * instance, so a row left with `Proj…` on it after the plugin is
	 * disabled would be debris of exactly the kind the teardown contract
	 * exists to prevent.
	 */
	private restoreFittedText(): void {
		for (const el of this.nativeSegments()) {
			const full = el.dataset.lureFull;
			if (full === undefined) continue;
			el.textContent = full;
			delete el.dataset.lureFull;
			setTooltip(el, "");
		}
	}

	private chipElements(): HTMLElement[] {
		return Array.from(this.vaultSegmentEl.querySelectorAll<HTMLElement>(".lure-browse-chip"));
	}

	/** The names beside a vault path, for the floor its own name may not go below. */
	private vaultSiblingNames(path: string | null): string[] {
		if (!path) return [];
		const entry = this.plugin.app.vault.getAbstractFileByPath(path);
		const parent = entry?.parent ?? null;
		if (!parent) return [];
		// Folders are told apart from folders and files from files: the two
		// never occupy the same slot on the row, so a file cannot make a
		// folder's name ambiguous.
		const wantFolder = entry instanceof TFolder;
		return parent.children
			.filter((child) => child instanceof TFolder === wantFolder)
			.map((child) => (child instanceof TFile && !wantFolder ? child.basename : child.name));
	}

	/** The same, outside the vault, where the listing is a readdir rather than an index. */
	private externalSiblingNames(path: string): string[] {
		const parent = externalParent(path);
		if (!parent) return [];
		return listExternalChildren(parent).map((child) => child.name);
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
			// The chips are ours, so the right-click gestures cannot find
			// their folder the way they find a native segment's (by index
			// into Obsidian's own breadcrumb). Carrying the path on the
			// element is what lets one gesture table serve both.
			chip.dataset.lurePath = chipPath;
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
			// A delimiter stands for the folder before it, which is this one.
			chipSeparator.dataset.lurePath = chipPath;
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
			rootEl.createSpan({ cls: "lure-root-name", text: this.plugin.app.vault.getName() });
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
			rootEl.createSpan({ cls: "lure-root-name", text: baseLabel });
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
			chip.dataset.lurePath = chipPath;
			chip.addEventListener("click", (evt) => {
				evt.stopPropagation();
				this.handleExternalSegmentClick(chipPath);
			});

			const chipSeparator = this.vaultSegmentEl.createSpan({
				cls: "view-header-breadcrumb-separator",
				text: this.plugin.settings.delimiter,
			});
			chipSeparator.dataset.lurePath = chipPath;
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

		const nameEl = this.filenameEl.createSpan({
			cls: "lure-filename-text",
			text: this.file.basename,
		});
		// The name stands for the open note, so it behaves like that note's
		// row in the File Explorer: drag it into an editor to write a link,
		// onto a folder to move it, onto the tab bar to open it. Only the
		// drag is borrowed — the right-click here is counted rather than
		// acted on, and builds its own menu.
		makeDraggable(this.plugin.app, nameEl, this.file);
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
			void this.plugin.app.workspace.revealLeaf(existing);
		} else {
			try {
				fileExplorer.instance.revealInFolder(this.plugin.app.vault.getRoot());
			} catch {
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
	 * The same gesture as `handleSegmentClick`, for a chip outside the
	 * vault.
	 *
	 * It used to descend into the clicked folder and open an empty field,
	 * which threw away everything the row was showing to the right of it —
	 * the one place the tail did not survive a folder click. Kept as a
	 * separate method only because the trail out there is absolute and has
	 * no TFolder behind it; the behaviour is deliberately identical.
	 */
	private handleExternalSegmentClick(folderPath: string): void {
		const parent = externalParent(folderPath);
		if (parent === null) {
			this.extendExternalPath(folderPath);
			this.enterTypingMode("");
			return;
		}
		const name = folderPath.slice(parent.length).replace(/^[\\/]+/, "");
		const suffix = this.pathSuffixAfter(parent);
		const startsHere = suffix === name || suffix.startsWith(`${name}${PATH_SEP}`);
		this.extendExternalPath(parent);
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
			this.enterTypingMode(this.externalFileName, stemLength(this.externalFileName));
			return;
		}
		if (!this.file) return;
		const parent = this.file.parent?.path ?? "";
		const folderPath = parent === "/" ? "" : parent;
		this.extendBrowsePath(folderPath);
		this.enterTypingMode(this.file.name, stemLength(this.file.name));
	}

	/**
	 * The whole path the row is currently showing, as the user reads it.
	 *
	 * Not the same as the open file's path: browsing can take the chips
	 * somewhere the file isn't, and outside the vault there is no file at
	 * all. The row is what a click on it refers to, so this is what the
	 * gestures and the prefills are measured against.
	 */
	private rowDisplayPath(): string {
		if (this.externalPath !== null) return this.rowPath();
		if (!this.file) return this.browsePath ?? "";
		const folder = this.browsePath ?? this.file.parent?.path ?? "";
		const base = folder === "/" ? "" : folder;
		return base ? `${base}/${this.file.name}` : this.file.name;
	}

	/**
	 * The part of the row that follows a given folder — what clicking that
	 * folder or the delimiter after it puts in the input.
	 *
	 * Measured against the row rather than against the open file's path so
	 * that the tail survives everywhere the row can be: browsed into a
	 * branch the open file isn't under, and outside the vault, where the
	 * old reading found no TFile and dropped everything to the right of the
	 * clicked folder.
	 */
	private pathSuffixAfter(folderPath: string): string {
		const path = this.rowDisplayPath();
		if (!path) return "";
		if (!folderPath) return path;
		// Both separators are accepted, because outside the vault a path can
		// be spelt with either on Windows; the remainder keeps whichever the
		// row itself used.
		const prefix = folderPath.replace(/[\\/]+$/, "");
		const rest = path.slice(prefix.length);
		if (!path.startsWith(prefix) || !/^[\\/]/.test(rest)) return "";
		return rest.replace(/^[\\/]+/, "");
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
		} catch {
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

		// While coupled, a rename means something wider than this one note.
		if (this.manager.navLock.isLocked() && this.participates()) {
			if (await this.commitLockedRename(newPath)) return;
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
	 * A rename committed while the panes are coupled.
	 *
	 * Two cases the ordinary move does not cover. Renaming a folder the
	 * coupled panes *share* — same name, same depth, different trees — is a
	 * rename of that folder in every one of them, because the shared name is
	 * the structure the lock is holding on to and changing it in one place
	 * only would end the parallel silently. And a rename that leaves the
	 * panes standing in differently-named folders breaks that structure
	 * whether it means to or not, so it asks rather than picking for you.
	 *
	 * Returns true when it has dealt with the commit.
	 */
	private async commitLockedRename(newPath: string): Promise<boolean> {
		const before = this.file?.path.split("/") ?? [];
		const after = newPath.split("/");
		const depth = onlyChangedFolder(before, after);

		if (depth !== null) {
			const oldName = before[depth] ?? "";
			const newName = after[depth] ?? "";
			// Renaming a folder and moving the note into a different folder
			// both change exactly one segment; what separates them is whether
			// the new one is already there. A name nobody is using is a
			// rename; an existing folder is a destination, and renaming onto
			// it would fail anyway.
			const target = [...before.slice(0, depth), newName].join("/");
			const taken = this.plugin.app.vault.getAbstractFileByPath(target) !== null;
			if (!taken && this.manager.navLock.sharesFolderAt(depth, oldName)) {
				// A rename across the coupled panes is the lock acting, not
				// the panes wandering off — every one of them will report a
				// file-open for the note at its new path.
				this.manager.navLock.startOwnMove();
				await this.renameSharedFolder(depth, newName);
				this.finishRename();
				return true;
			}
		}

		if (!this.manager.navLock.wouldBreakAlignment(this, newPath)) return false;

		const keepRenaming = await confirmAction(this.plugin.app, {
			title: t("navLockBreakTitle"),
			body: t("navLockBreakBody"),
			cta: t("navLockRenameAnyway"),
			warning: true,
		});
		if (!keepRenaming) {
			// The lock is what was chosen, so the rename simply does not
			// happen — and the field is left as it was rather than closed,
			// since the user may want to type something else.
			return true;
		}
		// The rename was chosen, so the coupling it breaks ends with it.
		this.manager.navLock.setLocked(false);
		return false;
	}

	/**
	 * Renames the folder at `depth` to `newName` in every coupled pane.
	 *
	 * Each pane renames its *own* folder at that depth: the panes are in
	 * different trees, and the shared thing is the name, not the path.
	 */
	private async renameSharedFolder(depth: number, newName: string): Promise<void> {
		for (const bar of this.manager.navLock.coupledBars()) {
			const path = bar.ancestorFolderPaths()[depth];
			if (path === undefined) continue;
			const folder = this.plugin.app.vault.getAbstractFileByPath(path);
			if (!(folder instanceof TFolder)) continue;
			const parent = path.slice(0, Math.max(0, path.lastIndexOf("/")));
			const target = parent ? `${parent}/${newName}` : newName;
			if (target === path) continue;
			try {
				await this.plugin.app.fileManager.renameFile(folder, target);
			} catch (err) {
				new Notice(t("noticeRenameFailed", { error: (err as Error).message }));
				return;
			}
		}
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
		} catch {
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
		} catch {
			return true;
		}
	}

	private readsUnsupportedFilesSetting(): boolean {
		try {
			return this.plugin.app.vault.getConfig("showUnsupportedFiles") === true;
		} catch {
			return true;
		}
	}

	/**
	 * Backspace on an empty input steps back out of the last folder:
	 * that chip is dropped and its name reopened for editing, cursor at
	 * the end, so a mistyped folder can be corrected in place.
	 */
	private stepOutOfFolder(mark = false): void {
		// Read before anything moves: stepping out tears the field down, and
		// what it was holding is what has to survive the move.
		const rest = this.inputEl?.value ?? "";
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
			this.enterTypingMode(pathBack(name, PATH_SEP, rest), mark ? name.length : "none");
			return;
		}

		const current = this.browsePath ?? "";
		if (!current) return; // already at the vault root, nothing to step out of

		const cut = current.lastIndexOf("/");
		const parent = cut === -1 ? "" : current.slice(0, cut);
		const name = cut === -1 ? current : current.slice(cut + 1);

		this.extendBrowsePath(parent);
		this.enterTypingMode(pathBack(name, "/", rest), mark ? name.length : "none");
	}

	/**
	 * "/" commits what's typed as a folder segment and opens a fresh
	 * input for the next one, the way a path is normally typed. The
	 * folder needn't exist yet — missing parents are created when the
	 * final target is committed.
	 */
	/**
	 * Tab completes the name being typed, then walks the path, then walks
	 * how much of it is selected.
	 *
	 * The completing is a shell's: a press extends what you typed as far as
	 * the names in the folder agree, and stops where they disagree — see
	 * `planTab`, which holds the rule itself. What the caret is in is what
	 * gets completed, so a folder click — which opens the field on the rest
	 * of the path with that folder's name selected — walks *that* folder
	 * first and the ones under it after, rather than skipping to the end of
	 * the path. The ladder is where the walk arrives, not where it starts:
	 * a file name that is already whole has nothing left to complete, and
	 * that is what hands the key over. Tab steps into a folder only
	 * once what you typed leaves exactly one candidate, so a press never
	 * chooses between names on your behalf. Once there is nothing left to
	 * complete, the presses stop moving along the path and start widening
	 * what is selected — name, name with extension, the path from the vault,
	 * the path from the system root — and then wrap back to the first
	 * folder, which is where the walk began.
	 *
	 * Widening changes what is *in* the field, not just what is highlighted:
	 * the selection has to be over the text it names, or Enter would commit
	 * something other than what the user can see is selected.
	 */
	private handleTabCompletion(input: HTMLInputElement): void {
		if (this.tabStage !== null) {
			this.advanceLadder();
			return;
		}

		// Matched by what the dropdown is filtering by — the segment the caret
		// is in, minus an extension the caret has not reached — so Tab can
		// never fail to complete something the list is offering. Typing "Cak"
		// over a name leaves the field reading "Cak.md", and matching that
		// literally found nothing while the list showed the very file it
		// names.
		const bounds = segmentBoundsAtCaret(input.value, input.selectionEnd ?? input.value.length);
		// A run marked by Shift+Tab is text the walk gave back, not text
		// anybody typed. The press resumes from where the retreat stopped —
		// which recomputes the very step it had given back, since the same
		// rule made it — and writes over the mark. Any other selection in
		// the field is text like any other.
		const given = this.tabGivenBack;
		const resuming =
			given !== null && given.start === input.selectionStart && given.end === input.selectionEnd;
		this.tabGivenBack = null;
		const typed =
			resuming && given ? input.value.slice(bounds.start, given.start) : queryAtCaret(input);
		const rows = this.suggest?.completions(typed) ?? [];
		const candidates = rows.map((row) => ({
			label: row.label,
			path: row.path,
			folder: row.kind === "folder",
		}));

		// Which name a press with nothing left to complete walks toward: the
		// row the dropdown is showing as highlighted, when that row is one of
		// the candidates. Arrowing to a name and pressing Tab then heads for
		// that name rather than for whatever sorts first.
		const marked = this.suggest?.highlighted() ?? null;
		const target = candidates.find((candidate) => candidate.path === marked?.path) ?? null;

		// What a write would replace: the segment as it stands, extension and
		// all. `typed` is only what it was matched by.
		//
		// Except while resuming, where the marked run is text the walk has
		// already given back — provisional, not "already there". Measuring
		// progress against it would make the press that puts the given-back
		// name *back* look like a press that did nothing, and it would be
		// skipped in favour of the next name along: walking back one step
		// and forward one step would land somewhere else entirely.
		const replacing = resuming ? typed : input.value.slice(bounds.start, bounds.end);
		const action = planTab(typed, candidates, target, replacing);
		if (action.kind === "ladder") {
			this.startLadder(action.path);
			return;
		}
		// Every press that moves the row records where it moved from. Only
		// these two do: the ladder walks itself back by its own arithmetic.
		this.tabTrail.push({
			folder: this.browsePath,
			external: this.externalPath,
			value: input.value,
			caret: input.selectionEnd ?? input.value.length,
			...(markOf(input, resuming)),
		});
		if (action.kind === "descend") {
			// Whatever stood after the segment is carried into the folder
			// rather than dropped, and the field opens on its *next* name,
			// marked — the same state a click on that folder would give.
			// With the caret at the far end instead, the press after this one
			// read the file name at the end of the path, found nothing to
			// complete, and jumped the ladder straight to the file's own
			// folder: every folder in between swallowed by one press.
			const rest = input.value.slice(bounds.end).replace(/^[\\/]+/, "");
			if (this.externalPath !== null) this.extendExternalPath(action.path);
			else this.extendBrowsePath(action.path);
			// Marked only while there is another folder to walk. The last
			// segment is the file's name, and the ladder's first rung is
			// about to mark it: marking it here too would spend a press
			// showing the name with its extension, immediately before the
			// rung that shows it without.
			const landing = asLanding(rest);
			const more = landing !== null && landing.select < landing.path.length;
			if (landing) this.enterTypingMode(landing.path, more ? landing.select : "none");
			else this.enterTypingMode("");
			return;
		}
		this.writeSegment(input, bounds, action.text);
	}

	/**
	 * Puts a completion in the field, in place of the segment it completes.
	 *
	 * Only that segment: the rest of the path stays, exactly as it does when
	 * arrowing through the dropdown. The whole segment goes, extension and
	 * all, because a completion is a whole name — replacing only the part
	 * that was matched would leave the old extension behind it. The caret
	 * lands at the end of what was written: this is text you asked for, not
	 * a suggestion to type over, so the next keystroke carries on from it.
	 */
	private writeSegment(
		input: HTMLInputElement,
		bounds: { start: number; end: number },
		text: string,
	): void {
		input.value = input.value.slice(0, bounds.start) + text + input.value.slice(bounds.end);
		const caret = bounds.start + text.length;
		input.setSelectionRange(caret, caret);
		// A completion is a deliberate choice of what the field holds, so it
		// supersedes any prefill and any preview, and it becomes what the
		// list filters by — otherwise the dropdown would go on showing the
		// names that matched before the press.
		this.preview = null;
		this.tabGivenBack = null;
		this.suggestQueryOverride = queryAtCaret(input);
		// Untrusted by construction, so `onInput` re-measures and re-lists
		// without mistaking this for the user typing — which would end the
		// selection ladder we may be about to start.
		input.dispatchEvent(new Event("input"));
	}

	/**
	 * <kbd>Shift</kbd>+Tab: one step back the way Tab came.
	 *
	 * The mirror of `handleTabCompletion`, rung for rung and step for step —
	 * the selection narrows again, then each completion is given back, then
	 * each folder is stepped out of. Past the beginning of the walk it keeps
	 * going up the path rather than stopping, because "back" reads as a
	 * direction rather than as an undo history.
	 *
	 * **Nothing is deleted on the way.** A completion is given back by
	 * *selecting* the characters it added, exactly as going forward marks
	 * what it has widened over: the name stays in front of you, typing
	 * replaces the marked part, and a press forward carries on from where
	 * the retreat stopped. Only when the whole name is marked — nothing left
	 * that a press put there — does the next press leave the folder.
	 */
	private handleTabBack(input: HTMLInputElement): void {
		if (this.tabStage !== null) {
			if (this.tabStage > 0) {
				this.tabStage -= 1;
				this.applyLadderStage();
				return;
			}
			// Below the first rung the ladder is over, and the press goes on
			// to give back a step of the walk in the same breath.
			this.tabStage = null;
			this.tabTargetPath = null;
		}

		const step = this.tabTrail.pop();
		if (step) {
			// A step that changed folders is given back by coming out of the
			// folder, which puts its name back in the field as text.
			if (step.folder !== this.browsePath || step.external !== this.externalPath) {
				this.rewindTo(step);
				return;
			}
			this.giveBack(input, step);
			return;
		}

		// Nothing this walk put there is left. What remains was typed, and
		// marking it is the last press before leaving: one press should not
		// both take back what you wrote and take you out of the folder you
		// wrote it in.
		const bounds = segmentBoundsAtCaret(input.value, input.selectionEnd ?? input.value.length);
		const marked = input.selectionStart === bounds.start && input.selectionEnd === bounds.end;
		if (!marked && bounds.end > bounds.start) {
			// Not a step of the walk, so a press forward from here does not
			// resume anything: it completes the name that is showing, which
			// is what the field says. Marked all the same, so that typing
			// replaces it and the press after this one leaves the folder.
			this.markGivenBack(input, bounds.start, bounds.end, false);
			return;
		}

		// Carry on up the path itself — the move Backspace makes on an empty
		// field, with the folder's name marked here because this press is
		// giving it back rather than deleting it.
		this.stepOutOfFolder(true);
	}

	/**
	 * Gives one completion back without taking its characters away: the name
	 * stays as it is and the part that press added is marked instead.
	 *
	 * When the step being given back holds *more* text than the field does —
	 * which happens after walking back and then forward again — that text
	 * comes back rather than the difference being dropped. Backwards never
	 * costs you a name.
	 */
	private giveBack(input: HTMLInputElement, step: TabStep): void {
		const caret = input.selectionEnd ?? input.value.length;
		const bounds = segmentBoundsAtCaret(input.value, caret);
		// Everything after the name being edited is untouched by completion,
		// so it is the same in both, and it is what fixes where the name ends.
		const tail = input.value.slice(bounds.end);
		const text = step.value.length > input.value.length ? step.value : input.value;
		input.value = text;
		if (step.mark) {
			this.markGivenBack(input, step.mark.start, step.mark.end, step.mark.given === true);
			return;
		}
		const end = Math.max(text.length - tail.length, 0);
		const start = Math.min(firstDifference(text, step.value), end);
		this.markGivenBack(input, start, end);
	}

	/**
	 * Marks a run of the name as given back, and re-opens the list on what
	 * is left standing.
	 *
	 * The query is the part *before* the mark — what the walk still holds —
	 * so the dropdown widens back out as the retreat goes on, showing again
	 * the names the completion had narrowed away.
	 */
	private markGivenBack(
		input: HTMLInputElement,
		start: number,
		end: number,
		resumable = true,
	): void {
		input.setSelectionRange(start, end);
		this.tabGivenBack = resumable ? { start, end } : null;
		this.preview = null;
		const bounds = segmentBoundsAtCaret(input.value, start);
		this.suggestQueryOverride = input.value.slice(bounds.start, start);
		// Untrusted, so this re-lists and re-measures without being taken
		// for the user typing — which would empty the trail being walked.
		input.dispatchEvent(new Event("input"));
	}

	/** Puts the row back in the folder a snapshot was taken in, leaving the field to the caller. */
	private standWhere(step: TabStep): void {
		const moved = step.folder !== this.browsePath || step.external !== this.externalPath;
		// `exitTypingInput` is what runs the field's cleanup, and it reads
		// the browse path to decide what the row falls back to — so it has
		// to happen before that path is put back.
		this.exitTypingInput();
		if (!moved) return;
		this.pinRowStart();
		this.browsePath = step.folder;
		this.externalPath = step.external;
		this.mode = step.folder !== null || step.external !== null ? "browsing" : "breadcrumb";
		this.hideNativeBreadcrumb();
		this.render();
		this.attachDocumentClickAway();
	}

	/** Puts the row back exactly as one press of Tab found it. */
	private rewindTo(step: TabStep): void {
		this.standWhere(step);
		this.enterTypingMode(step.value, "none");
		const input = this.inputEl;
		if (!input) return;
		// The selection comes back too — the folder name a click opened
		// marked, say — and failing that the caret, which for a path with
		// more to the right of the name being edited is not the end.
		if (step.mark) input.setSelectionRange(step.mark.start, step.mark.end);
		else input.setSelectionRange(step.caret, step.caret);
		if (step.mark?.given) this.tabGivenBack = { start: step.mark.start, end: step.mark.end };
	}

	/**
	 * Puts the row back as the gesture that opened the field left it — the
	 * end of a lap of the ladder.
	 *
	 * The selection comes back as a *prefill* rather than as a completion
	 * given back: it is text about to be typed over, which is what it was
	 * when the walk started, and what makes the next press start the ladder
	 * again instead of completing against it.
	 */
	private restartFrom(step: TabStep): void {
		this.standWhere(step);
		this.enterTypingMode(step.value, step.mark ? step.mark.end : "none");
		const input = this.inputEl;
		if (!input) return;
		if (step.mark) input.setSelectionRange(step.mark.start, step.mark.end);
		else input.setSelectionRange(step.caret, step.caret);
	}

	/** Hands the key over to widening the selection, over `target` or over whatever the row shows. */
	private startLadder(target: string | null): void {
		this.rememberLadderStart();
		this.tabTargetPath = target ?? this.ladderTargetPath();
		this.tabStage = 0;
		this.applyLadderStage();
	}

	/**
	 * Notes where the field stood before the first rung, selection and all,
	 * so the wrap can put it back exactly — including the state of being a
	 * prefill, so that the press after the wrap starts the ladder again and
	 * the loop really is a loop.
	 */
	private rememberLadderStart(): void {
		const input = this.inputEl;
		if (!input) {
			this.tabLadderStart = null;
			return;
		}
		const start = input.selectionStart ?? 0;
		const end = input.selectionEnd ?? 0;
		this.tabLadderStart = {
			folder: this.browsePath,
			external: this.externalPath,
			value: input.value,
			caret: end,
			...(end > start ? { mark: { start, end } } : {}),
		};
	}

	/** The path the ladder describes when Tab did not land on anything: whatever the row is showing. */
	private ladderTargetPath(): string | null {
		if (this.externalPath !== null) {
			return this.externalFileName ? externalJoin(this.externalPath, this.externalFileName) : null;
		}
		return this.file?.path ?? null;
	}

	private advanceLadder(): void {
		this.tabStage = (this.tabStage ?? 0) + 1;
		this.applyLadderStage();
	}

	/**
	 * Four rungs and a wrap. The last press returns to the first folder
	 * rather than to the file name, because the point of wrapping is to get
	 * back to somewhere you can keep typing from.
	 */
	private applyLadderStage(): void {
		const target = this.tabTargetPath;
		if (target === null) {
			this.tabStage = null;
			return;
		}

		const external = this.externalPath !== null;
		const separator = external ? PATH_SEP : "/";
		const cut = target.lastIndexOf(separator);
		const name = cut < 0 ? target : target.slice(cut + 1);
		const parent = cut < 0 ? "" : target.slice(0, cut);

		switch (this.tabStage) {
			case 0:
				this.setLadderField(parent, name, stemLength(name));
				return;
			case 1:
				this.setLadderField(parent, name, "all");
				return;
			case 2: {
				// From the vault folder — what a link or a search wants.
				// Outside, the equivalent is the place the row was drawn
				// from, which is what its chips are counting from.
				if (!external) {
					this.setLadderField("", target, "all");
					return;
				}
				const base = this.externalBase?.path ?? null;
				if (base !== null && isInside(target, base)) {
					const relative = target.slice(base.length).replace(/^[\\/]+/, "");
					this.extendExternalPath(base);
					this.enterTypingMode(relative, "all");
					return;
				}
				this.setLadderField(parent, name, "all");
				return;
			}
			case 3: {
				// From the system root — what anything outside Obsidian wants.
				const base = this.vaultBasePath();
				const system = external || base === null ? target : `${base}/${target}`;
				this.setLadderField("", system, "all");
				return;
			}
			default: {
				// Wrap: back to where the walk began, which closes the loop
				// without costing anything. A lap of the rungs is a way of
				// looking at the path, not a way of clearing it.
				// The front of the *walk*, not of the ladder: the folders were
				// walked before the rungs began, and a lap that came back
				// only as far as the file name would leave you halfway down a
				// path you had asked to go round.
				const began = this.tabTrail[0] ?? this.tabLadderStart;
				this.tabStage = null;
				this.tabTargetPath = null;
				this.tabLadderStart = null;
				this.tabTrail = [];
				if (began) {
					this.restartFrom(began);
					return;
				}
				// No field to go back to — the ladder was started without
				// one. The first folder of the path is where the walk would
				// have begun.
				const first = target.split(separator)[0] ?? "";
				this.extendBrowsePath(external ? "" : first);
				this.enterTypingMode("");
			}
		}
	}

	/** Puts the ladder's text in the field with the browse path that makes it resolvable. */
	private setLadderField(browseFrom: string, text: string, selection: "all" | number): void {
		if (this.externalPath === null) this.extendBrowsePath(browseFrom);
		this.enterTypingMode(text, selection);
	}

	private descendIntoTypedSegment(rawText: string): void {
		const trimmed = rawText.trim();
		if (!trimmed) return; // a stray "/" with nothing typed is a no-op

		const base = this.currentFolderPath();
		this.extendBrowsePath(normalizePath(base ? `${base}/${trimmed}` : trimmed));
		this.enterTypingMode("");
	}

	/**
	 * The entry the dropdown should open on: where you already are.
	 *
	 * Which of the two that is depends on what the list is showing. A
	 * folder's own contents open on the file this bar holds; the parent
	 * listing a folder click produces opens on that folder, since it is the
	 * one being swapped. Obsidian would otherwise open on the first row,
	 * which in a folder of two hundred notes is nowhere near either.
	 */
	private preselectPath(): string | null {
		const folder = this.currentFolderPath();
		// What the field is pointing at, when it holds a path: the first
		// segment names a child of the folder being listed, and that child is
		// where you are. It covers every way in — a folder click, a landing
		// under a newly picked place, the whole path from the focus command —
		// because all of them put that segment first.
		const first = (this.inputEl?.value ?? "").split(/[\\/]/)[0] ?? "";

		if (this.externalPath !== null) {
			if (first) return externalJoin(this.externalPath, first);
			const name = this.externalFileName;
			return name ? externalJoin(this.externalPath, name) : null;
		}

		if (first) {
			const candidate = folder ? `${folder}/${first}` : first;
			if (this.plugin.app.vault.getAbstractFileByPath(candidate)) return candidate;
		}

		// Nothing typed yet: the file this bar holds, when its own folder is
		// the one being listed.
		const parent = this.file?.parent?.path ?? "";
		const own = parent === "/" ? "" : parent;
		return this.file && folder === own ? this.file.path : null;
	}

	/** Where autocomplete/typed-path resolution should be scoped to right now. */
	private currentFolderPath(): string {
		if (this.browsePath !== null) return this.browsePath;
		return this.file?.parent?.path ?? "";
	}

	/** Where the row's own file is on disk, whichever side of the vault boundary it is. */
	private currentAbsolutePath(): string | null {
		if (this.externalPath !== null) {
			return this.externalFileName ? externalJoin(this.externalPath, this.externalFileName) : this.externalPath;
		}
		return this.file ? this.absolutePathFor(this.file) : null;
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
		const prefill = this.locationPrefill();
		this.enterTypingMode(prefill.text, prefill.select, this.vaultSegmentEl);
	}

	/**
	 * What the locations field opens on: the path the row was showing,
	 * written out in full, with the place it starts at selected.
	 *
	 * The row is cleared to make room for the field (see
	 * `renderVaultSegment`), so opening it empty threw away everything that
	 * was on screen — glance at another vault, change your mind, and the
	 * path you had was gone. Absolute rather than vault-relative because
	 * that is what this dropdown deals in, and because it makes the gesture
	 * the same as every other segment's: the part being swapped opens
	 * selected, the tail below it stays put. Picking a place, or typing one
	 * over the selection, replaces exactly the leading part.
	 */
	private locationPrefill(): { text: string; select: "all" | "none" | number } {
		const display = this.rowDisplayPath();
		const base =
			this.externalPath !== null ? (this.externalBase?.path ?? null) : this.vaultBasePath();
		if (base === null) return { text: display, select: display ? "all" : "none" };

		const text =
			this.externalPath !== null ? display : display ? `${base}/${display}` : base;
		// Only when the row really is under that place: browsing above an
		// external base leaves the row showing a path the label no longer
		// covers, and selecting its first N characters would highlight an
		// arbitrary slice of some other folder's name.
		const select = isInside(text, base) || samePath(text, base) ? base.length : 0;
		return { text, select: select > 0 ? select : "none" };
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
		const twin = this.twinOfCurrentFile(absolutePath);
		this.externalPath = absolutePath;
		this.browsePath = null;
		this.mode = "browsing";
		this.hideNativeBreadcrumb();
		this.render();
		this.attachDocumentClickAway();
		// The whole path from the place you picked, with its *first folder*
		// selected — the same shape a folder click gives, and for the same
		// reason: the step you are most likely to change when you jump
		// somewhere else is the one nearest the top, and everything below it
		// stays visible while you do. Landing deep with only the file name in
		// the field hid the path it had chosen for you.
		this.enterTypingMode(twin?.path ?? "", twin ? twin.select : "none");
	}

	/**
	 * The open note's own path, followed as far as it exists under a newly
	 * picked location.
	 *
	 * Vaults are very often near-copies of each other — an archive, a
	 * synced twin, last year's — and the reason for jumping to one is
	 * usually the same note over there. So the row lands as deep into the
	 * matching path as that location actually goes, and offers the file
	 * name selected when the whole path is there.
	 *
	 * Only what exists is used: a prefill naming something that isn't there
	 * would read as a file you could open, and Enter would offer to create
	 * it in a vault you have only just glanced at.
	 */
	private twinOfCurrentFile(base: string): { path: string; select: number } | null {
		const here = this.currentAbsolutePath();
		if (here === null) return null;

		// The picked place *contains* the file you are on — home, or the
		// folder your vaults live in. Then there is no guessing to do: the
		// file's own path from that place is the answer, and it is always
		// valid. This is the common case for "~", where the old reading
		// looked for the vault-relative path directly under home, found
		// nothing, and landed you at the top of your home folder.
		if (isInside(here, base) && !samePath(here, base)) {
			return asLanding(here.slice(base.length).replace(/^[\\/]+/, ""));
		}

		// A place beside this one — another vault, another drive. Vaults are
		// often near-copies, so the same relative path is worth trying, as
		// deep as it actually goes.
		const path = this.file?.path;
		if (!path) return null;

		const parts = path.split("/");
		const name = parts.pop() ?? "";
		let folder = base;
		let depth = 0;
		for (const part of parts) {
			const next = externalJoin(folder, part);
			// Only as far as this place actually goes; what is left is not
			// offered, because a prefill naming something that isn't there
			// reads as a file you could open.
			if (!isExternalFolder(next)) break;
			folder = next;
			depth += 1;
		}
		if (depth === 0 && !isExternalFile(externalJoin(base, name))) return null;
		const reached = [...parts.slice(0, depth), isExternalFile(externalJoin(folder, name)) ? name : ""]
			.filter((part) => part !== "")
			.join("/");
		return reached ? asLanding(reached) : null;
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
		// Locked bars do not type. A typed path is an arbitrary destination,
		// and arbitrary is exactly what the lock exists to rule out — the
		// other panes could not be asked to follow it. Renaming is not
		// navigation and is deliberately still allowed.
		if (this.manager.navLock.isLocked() && !this.renameMode) return;

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
			} else if (evt.key === "Tab") {
				evt.preventDefault();
				if (evt.shiftKey) this.handleTabBack(inputEl);
				else this.handleTabCompletion(inputEl);
			} else if (evt.key === "/") {
				// Except where the slash is part of a scheme: "https:/" +
				// "/" is a URL being typed, not a folder called "https:".
				if (slashBelongsToScheme(inputEl.value)) return;
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

		// A fourth click reaches the same place Tab's last rung does. `detail`
		// is the browser's own click counter, so this needs no timer of its
		// own and cannot disagree with what the platform considers a
		// multi-click.
		const onClick = (evt: MouseEvent) => {
			if (evt.detail < 4) return;
			evt.preventDefault();
			this.tabTargetPath = this.ladderTargetPath();
			this.tabStage = 3;
			this.applyLadderStage();
		};
		inputEl.addEventListener("click", onClick);

		const onInput = (evt: Event) => {
			// Only a genuine keystroke or paste retires the prefill. The
			// `input` events dispatched from code below — to open the
			// popover, and to fill the field from a suggestion — are
			// untrusted, and must not be mistaken for the user typing.
			if (evt.isTrusted) {
				// Filter by the segment the caret is in, not by everything in
				// the field. A folder click leaves the rest of the path in
				// there after the name being edited, so filtering by the whole
				// value looked for a child called "2026/Kickoff.md", matched
				// nothing, and the dropdown closed on the first keystroke —
				// whatever was typed, valid or not.
				this.suggestQueryOverride = queryAtCaret(inputEl);
				// What is in the field is now what was typed, so there is no
				// earlier text to go back to.
				this.preview = null;
				// Typing also ends the selection ladder, so Tab goes back to
				// completing folders. Without this, reaching the field
				// through the focus command (which opens on a rung) left
				// Tab widening a selection for the rest of the session, however
				// much had since been typed over it. The ladder's own writes
				// are untrusted and so leave it alone.
				this.tabStage = null;
				this.tabTargetPath = null;
				this.tabTrail = [];
				this.tabGivenBack = null;
				this.tabLadderStart = null;
			}
			autoSize();
			if (this.renameMode) this.updateValidation(inputEl.value, this.currentFolderPath());
		};

		// Wired up (and editCleanup assigned) *before* the suggest is
		// constructed: AbstractInputSuggest is the one piece here that
		// could throw, and if it did after this point the input would be
		// left with no key handling and no cleanup — stranding `mode` at
		// "typing" forever, which silently kills every other click path.
		// Escape has to be taken here rather than on the input.
		//
		// The autocomplete popover closes on Escape through Obsidian's
		// keymap, which runs from a window capture listener registered long
		// before any of ours and stops the event there — so the input's own
		// handler never saw the first press, and cancelling took two: one to
		// close the dropdown, one to leave the field. A window capture
		// listener still *runs* (the keymap does not preventDefault), so this
		// sees every press and ends the session on the first one.
		const onEscapeCapture = (evt: KeyboardEvent): void => {
			if (evt.key !== "Escape" || !this.inputEl) return;
			// A dialog over the row owns the key: its own Escape is a cancel
			// of the dialog, not of the row underneath it.
			if (document.querySelector(".modal-container")) return;
			evt.preventDefault();
			this.dismissEditing();
		};

		// Ctrl/Cmd+Enter never reaches the field on its own: Obsidian binds
		// Mod+Enter to "open link in new leaf", and its keymap takes the key
		// before any listener on the input sees it — so the modifier that
		// means "somewhere else" everywhere else on this row did nothing
		// here, while the editor underneath quietly opened whatever link its
		// cursor happened to be on. A scope is how Obsidian itself claims a
		// key for a piece of UI, and it is consulted before the global
		// hotkeys. Parented to the app's scope, so every other key behaves
		// exactly as it did.
		//
		// Only needed while the dropdown is closed: with it open, the
		// suggester's own scope is on top and its selection handler already
		// reads the modifier.
		const scope = new Scope(this.plugin.app.scope);
		scope.register(["Mod"], "Enter", (evt) => {
			evt.preventDefault();
			void this.handleTypedSubmit(inputEl.value, this.paneTypeFor(evt));
			return false;
		});
		this.plugin.app.keymap.pushScope(scope);

		this.autoSizeInput = autoSize;
		inputEl.addEventListener("keydown", onKeydown);
		inputEl.addEventListener("input", onInput);
		inputEl.addEventListener("dblclick", onDblClick);
		window.addEventListener("keydown", onEscapeCapture, true);
		this.editCleanup = () => {
			inputEl.removeEventListener("keydown", onKeydown);
			inputEl.removeEventListener("input", onInput);
			inputEl.removeEventListener("dblclick", onDblClick);
			window.removeEventListener("keydown", onEscapeCapture, true);
			this.plugin.app.keymap.popScope(scope);
			this.suggestQueryOverride = null;
			this.tabGivenBack = null;
			this.preview = null;
			this.autoSizeInput = null;
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
				// The open note, not the rename target: outside the vault
				// `keepPath` follows the external file, while "you are here"
				// stays with the note whose header this bar is.
				currentPath: this.file?.path ?? null,
				shouldList: (child) => this.shouldListChild(child),
				shouldListExternal: (child) => this.shouldListExternalChild(child),
				warnsOnOpen: (extension) => this.warnsOnOpen(extension),
				queryOverride: this.suggestQueryOverride,
				preselectPath: this.preselectPath(),
			}),
			(evt, path, isFolder) =>
				showExternalMenu(
					this.plugin,
					evt,
					path,
					isFolder,
					this.leaf,
					() => this.externalWritesUnlocked,
					// The listing is now stale — something was created, renamed
					// or trashed in the folder it is showing. An input event is
					// how the suggester re-queries; it is what every other
					// refresh in this file uses.
					() => this.inputEl?.dispatchEvent(new Event("input")),
				),
			(value) => this.previewSuggestion(value),
			);
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

	/**
	 * Shows what landing on the highlighted entry would give you, in the
	 * field itself — what an address bar does as you arrow through its list.
	 *
	 * Two things make it safe. The text typed before arrowing is kept and
	 * put back the moment the selection lets go (moving up off the top row,
	 * or the pointer leaving the list), so nothing is lost by looking. And
	 * the *query* is pinned to that typed text while a preview is showing:
	 * without that, writing a folder's name into the field would re-filter
	 * the list to it, and the next press would move through a different list
	 * than the one on screen.
	 */
	private previewSuggestion(value: PathSuggestion | null): void {
		const input = this.inputEl;
		if (!input) return;
		const held = this.preview;

		if (value === null) {
			if (!held) return;
			input.value = held.text;
			// The selection comes back too. Restoring the text alone left the
			// caret at the end of it, so stepping off the list gave you your
			// path back with the segment you had been editing no longer
			// picked out — and the next keystroke appended instead of
			// replacing.
			input.setSelectionRange(held.selectionStart, held.selectionEnd);
			this.preview = null;
			this.autoSizeInput?.();
			return;
		}

		// The query is not touched here. It already holds the segment that was
		// being edited, and leaving it alone is what keeps the list still
		// while you move through it.
		const base = held ?? {
			text: input.value,
			selectionStart: input.selectionStart ?? input.value.length,
			selectionEnd: input.selectionEnd ?? input.value.length,
			segment: segmentBoundsAtCaret(input.value, input.selectionEnd ?? input.value.length),
		};
		this.preview = base;

		// Only the segment being edited is swapped; everything to the right of
		// it stays. Pointing at a folder asks "what if this step were that
		// one", not "throw the rest of the path away" — and every preview is
		// built from the text as it was, so moving through the list does not
		// compound.
		const { start, end } = base.segment;
		// The mark Shift+Tab left is gone the moment the list writes its own
		// selection over it; what is showing now is a row, not a retreat.
		this.tabGivenBack = null;
		input.value = base.text.slice(0, start) + value.label + base.text.slice(end);
		// Shown selected, the way a completion is: it marks the text as a
		// suggestion rather than something you typed, and typing replaces it
		// instead of running on from its end.
		input.setSelectionRange(start, start + value.label.length);
		this.autoSizeInput?.();
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
	/**
	 * Escape: end the session and hand focus back to the note.
	 *
	 * Cancelling alone leaves the row's container focused, so the bar still
	 * answers keystrokes and still looks like where you are. One press
	 * should put you back where you were, which means leaving the row as
	 * well as leaving the field.
	 */
	private dismissEditing(): void {
		this.cancelNavigation();
		if (this.renameMode) {
			this.renameMode = false;
			this.updateRenameModeStyling();
		}
		this.titleEl.parentElement?.blur();
		// Focus follows the leaf rather than being dropped on the body, so
		// the next keystroke goes to the note the way it would after any
		// other dismissed overlay.
		this.plugin.app.workspace.setActiveLeaf(this.leaf, { focus: true });
	}

	private cancelNavigation(): void {
		// A ladder belongs to one editing session. Carrying it into the next
		// would make the first Tab there widen a selection instead of
		// completing a folder, for reasons the user could not see. The trail
		// Shift+Tab walks back is the same: it describes a row that is about
		// to stop existing.
		this.tabStage = null;
		this.tabTargetPath = null;
		this.tabTrail = [];
		this.tabGivenBack = null;
		this.tabLadderStart = null;
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

		// Checked before anything else, and in both modes: a URL is not a
		// destination inside the vault, so building a candidate path out of
		// it would only produce a note named after a web address.
		const target = classifyTypedTarget(trimmed);
		if (target) {
			await this.openTypedTarget(target, paneType);
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

		// No confirmation inside the vault. Typing a path that isn't there is
		// how a note gets made here, the notice afterwards says where it
		// landed, and Obsidian's own trash makes it a keystroke to undo —
		// so the prompt was a click between the user and the thing they had
		// just asked for. It stays outside the vault, where the same typo
		// writes into a system folder and neither the notice nor the trash
		// is much comfort.
		try {
			const parentPath = normalized.substring(0, normalized.lastIndexOf("/"));
			await this.ensureFolderExists(parentPath);
			const newFile = await this.plugin.app.vault.create(normalized, "");
			new Notice(t("noticeCreated", { path: newFile.path }));
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
	/**
	 * Opens something typed into the row that was not a path.
	 *
	 * Web and Obsidian URIs both go through `window.open`: Obsidian routes
	 * its own scheme internally, and an http one honours whatever the user
	 * has set for external links — the Web Viewer if it is on, the system
	 * browser otherwise. Neither is this plugin's business to decide.
	 *
	 * A filesystem path is resolved against the vault first. Inside, it is
	 * an ordinary note and opens as one, with links and backlinks; only
	 * outside does it need the read-only viewer and the opt-in.
	 */
	private async openTypedTarget(target: UrlTarget, paneType: PaneType | false): Promise<void> {
		if (target.kind === "web") {
			this.openWebAddress(target.href, paneType);
			this.cancelNavigation();
			return;
		}
		if (target.kind !== "path") {
			window.open(target.href);
			this.cancelNavigation();
			return;
		}

		const normalized = target.path.split(PATH_SEP).join("/").replace(/\/+$/, "");
		const base = this.vaultBasePath();
		if (base !== null && isInside(normalized, base)) {
			const relative = normalized.slice(base.length).replace(/^\/+/, "");
			const inVault = this.plugin.app.vault.getAbstractFileByPath(normalizePath(relative));
			if (inVault instanceof TFile) {
				this.cancelNavigation();
				this.navigateToFile(inVault, paneType);
				return;
			}
			if (inVault instanceof TFolder) {
				this.extendBrowsePath(inVault.path);
				this.enterTypingMode("");
				return;
			}
		}

		if (!this.plugin.settings.accessExternalFiles) {
			new Notice(t("noticeExternalDisabled", { setting: t("settingExternalName") }));
			this.cancelNavigation();
			return;
		}
		if (!(await externalExists(normalized))) {
			new Notice(t("noticeExternalNotFound", { path: normalized }));
			return;
		}
		if (isExternalFolder(normalized)) {
			this.goToLocation(normalized);
			return;
		}
		this.cancelNavigation();
		void openExternalFile(this.plugin, normalized, paneType, this.leaf);
	}

	/**
	 * A web address typed into the bar, opened the way the address bar it
	 * imitates would: in a tab of this application.
	 *
	 * `window.open` was the old answer, and it left Obsidian entirely
	 * unless the user had also turned on the Web viewer's own "open
	 * external links here" setting — so typing a URL into a path bar
	 * inside Obsidian threw you out to the desktop browser. Asking the
	 * Web viewer directly means having it on is enough.
	 *
	 * Always a new tab: replacing the note you were reading with a web
	 * page is not what typing an address means, and the modifier that
	 * usually chooses the pane can still ask for a split or a window.
	 */
	private openWebAddress(href: string, paneType: PaneType | false): void {
		const viewer = this.plugin.app.internalPlugins.getPluginById("webviewer");
		if (!viewer?.enabled) {
			// Off: the desktop browser is the only place left to open it.
			window.open(href);
			return;
		}
		try {
			const leaf = this.plugin.app.workspace.getLeaf(paneType || "tab");
			// `navigate` is what makes the view actually load the address;
			// without it the tab opens blank on the URL it was handed.
			void leaf.setViewState({
				type: WEB_VIEWER_VIEW_TYPE,
				active: true,
				state: { url: href, navigate: true },
			});
			void this.plugin.app.workspace.revealLeaf(leaf);
		} catch {
			// Internal view type moved or refused the state: the browser is
			// still a working answer, and losing the address is not.
			window.open(href);
		}
	}

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
			new Notice(t("noticeCreated", { path: target }));
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
		// Taking a note out of the vault. `fileManager` cannot follow it
		// across that boundary, so this is the one move that costs something
		// the plugin cannot give back: every link pointing at the note stops
		// resolving, silently. It used to be refused outright for that
		// reason; it is now a decision to put to the user, with the number
		// of notes that would be affected, because "I know, take it out" is
		// a legitimate thing to want and the refusal left no way to say it.
		const movingOut = !copying && source.fromVault;
		if (movingOut && !this.file) {
			// Nothing to remove afterwards, so this would be a copy wearing
			// a move's name.
			new Notice(t("noticeRenameFailed", { error: t("errorNotAFolder", { path: source.path }) }));
			return;
		}

		if (!this.requireExternalUnlock()) return;

		if (movingOut) {
			const agreed = await confirmAction(this.plugin.app, {
				title: t("moveOutTitle"),
				body: t("moveOutBody", { count: String(this.incomingLinkCount()) }),
				cta: t("moveOutConfirm"),
				warning: true,
			});
			if (!agreed) {
				this.inputEl?.focus();
				return;
			}
		}

		if (await externalExists(target)) {
			new Notice(t("noticeAlreadyExists", { path: target }));
			this.inputEl?.focus();
			return;
		}

		try {
			if (copying) await copyExternalFile(source.path, target);
			else if (movingOut) {
				// Copy out, then remove from the vault through Obsidian's own
				// delete — never a bare rename across the boundary. A rename
				// would take the file out from under the index, which would
				// go on believing in a note that is no longer there until
				// something forced a rescan; and the copy landing first means
				// a failure at either step leaves the note where it was
				// rather than nowhere. It goes to the trash the user has
				// configured, so this is recoverable in the way deleting a
				// note is.
				await copyExternalFile(source.path, target);
				if (this.file) await this.plugin.app.fileManager.trashFile(this.file);
			} else await moveExternalFile(source.path, target);
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
	/**
	 * How many notes link to the open one.
	 *
	 * Counted from `resolvedLinks`, which is the same table Obsidian's own
	 * link handling reads, so the number matches what would actually stop
	 * resolving. Sources are counted rather than links: "eleven notes point
	 * here" is what the decision turns on, not that one of them does it
	 * three times.
	 */
	private incomingLinkCount(): number {
		const path = this.file?.path;
		if (!path) return 0;
		let count = 0;
		for (const targets of Object.values(this.plugin.app.metadataCache.resolvedLinks)) {
			if (targets[path]) count += 1;
		}
		return count;
	}

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
	/**
	 * Focuses the row and selects the whole path, the way Ctrl+L does in a
	 * browser's address bar.
	 *
	 * The same thing clicking the empty space beside the breadcrumbs does —
	 * exposed as a command so it can be reached without the pointer, and so
	 * the key that reaches it is the user's to choose.
	 */
	focusPathBar(): void {
		// The whole path first — the address-bar gesture the command is for.
		// Pressing again walks the same rungs Tab does rather than
		// re-selecting what is already selected, so one key reaches the
		// system path too.
		if (this.inputEl) {
			this.advanceLadder();
			return;
		}
		this.startLadderAt(2);
	}

	/**
	 * Opens the field at one rung of the Tab ladder.
	 *
	 * Falls back to the plain full-path edit where there is no path to
	 * describe — an empty tab browsing a folder, where the ladder has no
	 * file name to start from.
	 */
	private startLadderAt(stage: number): void {
		const target = this.ladderTargetPath();
		if (target === null) {
			this.startFullPathEdit();
			return;
		}
		this.rememberLadderStart();
		this.tabTargetPath = target;
		this.tabStage = stage;
		this.applyLadderStage();
	}

	private startFullPathEdit(): void {
		// Outside the vault the row reads from the place you picked — a
		// vault, a drive, your home folder — so the field reads from there
		// too, and the trail collapses to that place exactly as the vault
		// case below collapses to the vault root. It used to open on the
		// machine's absolute path instead, which contradicted the row above
		// it and made the field far longer than the pane.
		if (this.externalPath !== null) {
			const base = this.externalBase?.path ?? null;
			const here = this.currentAbsolutePath() ?? this.externalPath;
			if (base !== null && isInside(here, base)) {
				const relative = here.slice(base.length).replace(/^[\\/]+/, "");
				this.extendExternalPath(base);
				this.enterTypingMode(relative, "all");
				return;
			}
			// Above the place it was drawn from — reachable by typing an
			// absolute path — where the absolute form is the only honest one.
			this.enterTypingMode(here, "all");
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
				new Notice(t("noticeCreated", { path: current }));
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
			// The padlock, for the same reason and more sharply: refusing a
			// write out here *tells* you to press it, and pressing it threw
			// away the name you had just typed — so a rename outside the
			// vault could not be completed in the order the interface asks
			// for. Both buttons are part of the edit, not a click away
			// from it.
			if (this.unlockButtonEl.contains(target)) return;
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
