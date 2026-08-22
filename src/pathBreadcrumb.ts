import {
	FileSystemAdapter,
	FileView,
	Keymap,
	Menu,
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
import {
	ELLIPSIS,
	FitStage,
	NameCut,
	agreementWith,
	chooseCut,
	cutName,
	readableMinimum,
} from "./pathFit";
import { commonPrefix, planSuggestion, planTab } from "./tabComplete";
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
	listVaults,
	samePath,
} from "./systemLocations";
import {
	copyExternalFile,
	createExternalFile,
	externalExists,
	moveExternalFile,
} from "./externalFileOps";
import { ExternalFileView, extensionOf, openExternalFile } from "./externalFileView";
import { showExternalMenu, showInFolder } from "./externalMenu";
import { UrlTarget, classifyTypedTarget, slashBelongsToScheme, unquotePath } from "./urlTargets";
import { NavMove } from "./navLock";
import {
	FOLDER_NOTE_PLUGIN_IDS,
	GestureTarget,
	RightClickCounter,
	classifyTarget,
} from "./segmentGestures";
import { LABELS, obsidianLabel } from "./obsidianLabels";
import { makeDraggable, makeDropTarget, showContextMenu } from "./nativeFileItem";
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
/**
 * The marking put on a row this plugin has just written to.
 *
 * Lure's own, tinted with Obsidian's accent — purple unless you have changed
 * it. Obsidian's own reveal flash (`is-flashing`) is a different colour and
 * means a different thing: "here is the file you asked to see". This one
 * means "this is the file that just moved".
 */
const FLASH_CLASS = "lure-flash";
/** Obsidian's own reveal marking, taken off a row we are marking ourselves. */
const OBSIDIAN_FLASH_CLASS = "is-flashing";
/**
 * How much air a delimiter has on each side when the row is not under
 * pressure — which is all the air on the row.
 *
 * Four, because that is what a name's own padding used to add to the same
 * gap: with the padding gone the row under no pressure reads exactly as it
 * did, and there is now one number to spend instead of two that had to agree.
 */
const GAP_PX = 4;
/** The custom property that air is set through, so the fitter can spend it by fractions. */
const GAP_VAR = "--lure-gap";

/** Put on the body while our own marking runs, so Obsidian's cannot show underneath it. */
const NO_NATIVE_FLASH_CLASS = "lure-no-native-flash";
/** How long that marking stays up, animation and all. Obsidian's own flash is about this long. */
const FLASH_MS = 1000;
/** When to try again for a row that is not in the tree yet, in milliseconds after the write. */
const FLASH_TRIES = [0, 80, 250, 600];
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
/** The clipping part of a name, cut at its end unless it also carries `NAME_BACK_CLASS`. */
const NAME_LEAD_CLASS = "lure-name-lead";
/** The part after it, where a name is spent in the middle rather than at an end. */
const NAME_TRAIL_CLASS = "lure-name-trail";
/** On a part that is drawn right to left, so the browser clips its start. */
const NAME_BACK_CLASS = "lure-name-back";
/** On a part that never gives way — a pinned extension, or a name already at its floor. */
const NAME_PINNED_CLASS = "lure-name-pinned";
/** On the segment whose name is being shown in full because it is hovered or open. */
const NAME_OPEN_CLASS = "lure-name-open";
/** On a name held at no width by a setting rather than by the row running out of room. */
const NAME_FOLDED_CLASS = "lure-name-folded";
/**
 * What "short enough to still be worth reading" is measured against.
 *
 * A string rather than a number of pixels, so the floor scales with whatever
 * interface font the vault is using — but one *string*, so it is the same
 * width for every name at that point in the row however wide that name's own
 * letters happen to be.
 */
const MIN_FOLDER_REF = "nnnn";
/**
 * Keys the field acts on itself, which therefore do not count as the caret
 * being moved: each of them shifts it as a side effect of something the row
 * has already answered.
 */
const FIELD_DRIVING_KEYS = new Set(["Tab", "Enter", "Escape", "ArrowUp", "ArrowDown"]);

/** How far an open dropdown has been nudged to keep it on the row. */
const POPOVER_SHIFT_VAR = "--lure-popover-shift";
const MIN_NAME_REF = "nnnnnn";

/** The file's extension, in a box of its own so the row can give it up whole. */
const EXTENSION_CLASS = "lure-filename-ext";
/** On whatever the row has given up entirely rather than shortened. */
const GIVEN_UP_CLASS = "lure-given-up";
/** On a name the fitter has spent to nothing, so what it freed cannot come back to it. */
const NAME_SPENT_CLASS = "lure-name-spent";
/**
 * How long after a scroll a name may not open itself.
 *
 * Long enough to cover the gap between two turns of a wheel, so a slow scroll
 * counts as one gesture rather than as a series of pauses to read in.
 */
const SCROLL_QUIET_MS = 400;
/** The custom property each box's floor is written to; the stylesheet reads it. */
const FLOOR_VAR = "--lure-floor";
/** And the one a clipped part's exact drawn width is written to, so no empty strip is left. */
const TIGHT_VAR = "--lure-tight";

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
	cut: () => NameCut;
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

/**
 * The width below which flexbox may not take this box.
 *
 * A custom property rather than `min-width` itself, for two reasons. The
 * number is measured — this name, in this font, at its own floor — so no
 * stylesheet could hold the set of values it takes. And going through a
 * property leaves the rule that reads it in the stylesheet, where a theme
 * can see it, and lets the hover state override the floor in CSS instead of
 * having to save and restore an inline one.
 *
 * Declared `inherits: false` (see styles.css), so a floor on a name is not
 * also a floor on the parts inside it.
 */
function setFloor(el: HTMLElement, width: string): void {
	el.setCssProps({ [FLOOR_VAR]: width });
}

/** The width a box actually drew into, so nothing is left over at its edge. */
function setTight(el: HTMLElement, width: string): void {
	el.setCssProps({ [TIGHT_VAR]: width });
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
	/** Watches where a press begins, so a selection dragged out of the field is not a click away. */
	private documentPressDown: ((evt: MouseEvent) => void) | null = null;
	/** Whether the press that is about to produce a click started on the row. */
	private pressedInRow = false;
	private renameClickAway: ((evt: MouseEvent) => void) | null = null;
	private renameFocusOut: (() => void) | null = null;
	/** Detaches the listeners bound to Obsidian's own header element on destroy. */
	private domListeners = new AbortController();
	/** Refits the row when the pane is resized — the whole point of fitting it. */
	private resizeObserver: ResizeObserver | null = null;
	/** The name currently being shown in full because the pointer is on it. */
	private openedName: HTMLElement | null = null;
	/** When the row was last scrolled by hand, so names stay put while it is. */
	private scrolledAt = 0;
	/**
	 * Whether the open field was reached by clicking the file's own name
	 * rather than the empty space beside it.
	 *
	 * The two gestures open on different rungs — the name, or the whole path
	 * — so a run of presses that keeps climbing has to know which ladder it
	 * is on, or the third press on a name jumps straight past the path to
	 * the one the machine knows.
	 */
	private editFromName = false;
	/**
	 * Whether the open field was reached by a click on the row, and the run
	 * of presses that opened it is still going.
	 *
	 * The ladder — name, name with extension, path, path from the machine's
	 * root — belongs to that run and to nothing else. Once it has lapsed the
	 * field is a text field like any other, where a double-click picks out a
	 * word.
	 */
	private climbFromClick = false;
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
	/**
	 * The name the rest of the path hangs from — the segment a prefill opened
	 * marked, with the tail behind it.
	 *
	 * What tells "walking into the folder this path names" apart from
	 * "swapping that folder for another one". The first keeps the tail
	 * whole, however little of it exists yet: a path being *made* is typed
	 * ahead of itself, and cutting it at the first folder that is not there
	 * yet threw away everything past the one you had just stepped into. The
	 * second cuts it, because a rest that hung from some other folder says
	 * nothing about this one — and leaving it standing put the field at odds
	 * with the dropdown beside it.
	 *
	 * Null when the field holds no prefilled first segment to hang from.
	 */
	private tailAnchor: string | null = null;
	/**
	 * The run offered after the caret: text the folder's own names agree on,
	 * put in front of you before you have typed it.
	 *
	 * It is never anybody's but this field's. Every way out of the field
	 * settles it first — taken, or taken back — so that nothing downstream
	 * ever reads a value with something in it the user did not type. `start`
	 * is the caret it was offered at, `end` where it stops, and `prefix` is
	 * the whole segment as the *names* spell it, which is what taking it
	 * writes: the letters you typed are yours while you type, but a path has
	 * to be spelled the way the disk spells it.
	 */
	private suggested: { start: number; end: number; prefix: string } | null = null;
	/** Set while an IME is composing, when writing into the field would break the composition. */
	private composing = false;

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
			if (this.inputEl) {
				if (evt.target === this.inputEl) return;
				// The field is only as wide as what is in it, so the row
				// beside it is empty space that still belongs to the edit.
				// A run of presses out there means what it means on the field
				// itself — the path, then the path with its extension, then
				// the one the machine knows — and a single press puts the
				// caret at the end rather than doing nothing, which is what a
				// field that ran the whole width would have done.
				// Pressed on the row rather than in the field: the empty
				// space beside a path is part of the path bar, and a run of
				// presses there means what it has always meant.
				if (this.climbSelection(evt.detail, true)) {
					evt.preventDefault();
					this.inputEl.focus();
					return;
				}
				// A press the ladder declined is not one to answer with
				// anything else. The caret goes to the end of the path on a
				// *first* press, which is what a click past the end of a text
				// field means; a later press of a run is either the browser's
				// to interpret or one the ladder has already acted on — and
				// the same click reaching here a second time, after the
				// ladder replaced the field under it, was collapsing the very
				// selection the ladder had just made.
				if (evt.detail > 1) return;
				const end = this.inputEl.value.length;
				this.inputEl.focus();
				this.inputEl.setSelectionRange(end, end);
				return;
			}
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
				else {
					this.handleFilenameClick();
					this.climbFromClick = true;
				}
				return;
			}
			// The empty space takes the same modifier, and means by it the
			// one thing the space can mean: this note again, in a tab of its
			// own. Opening the file that is already open *is* duplicating
			// the tab, and the copy is flashed in the tree so the second one
			// is not mistaken for the first. The middle button is *not* this
			// gesture — it has its own, on its own event.
			if (this.duplicateTab(evt)) return;
			this.startFullPathEdit("stem");
			this.climbFromClick = true;
		}, { signal: this.domListeners.signal });

		// On X11 a middle press over a text field is *itself* a paste — the
		// primary selection, whatever was last highlighted anywhere on the
		// screen, inserted by the browser before any of this runs. Over the
		// path field that meant the second press of the pair committed
		// whatever had been swept over in some other window rather than the
		// path just pasted. Refusing the press at mousedown is what stops it;
		// `auxclick` is far too late, and preventing that does nothing about
		// it.
		container?.addEventListener("mousedown", (evt) => {
			if (evt.button !== 1) return;
			// Refused so that X11's own middle-click paste — the primary
			// selection, inserted by the browser before any of this runs —
			// cannot drop whatever was last highlighted elsewhere into the
			// path field.
			evt.preventDefault();
		}, { signal: this.domListeners.signal });

		// A wheel over the row scrolls it sideways once it has more path than
		// pane. Left to the browser this works only where the pointer happens
		// to be over the scrolling box itself and only for a wheel it decides
		// to redirect — which is why it comes and goes depending on where you
		// are pointing. Taking the event means the whole row answers it.
		container?.addEventListener("wheel", (evt) => {
			if (!container.hasClass(SCROLL_CLASS)) return;
			// A sideways wheel, or a shifted one, is already asking for this
			// and the browser does it correctly.
			if (evt.shiftKey || evt.deltaX !== 0 || evt.deltaY === 0) return;
			// Whatever was open closes for the duration: the row is being
			// read across, and a name widening mid-scroll moves everything
			// after it out from under the pointer.
			this.scrolledAt = Date.now();
			this.openName(null);
			const before = container.scrollLeft;
			container.scrollLeft += evt.deltaY;
			// Only claimed when it actually moved, so a row scrolled to its
			// end hands the wheel back to whatever is under it.
			if (container.scrollLeft !== before) evt.preventDefault();
		}, { passive: false, signal: this.domListeners.signal });

		// Obsidian keeps the dropdown under the field it belongs to, and
		// follows the row when it scrolls — which walks the popover clean off
		// the row, since the field it is following goes with it. Re-clamped
		// on the frame after, because Obsidian's own placement runs first.
		container?.addEventListener("scroll", () => {
			window.requestAnimationFrame(() => this.clampPopover());
		}, { signal: this.domListeners.signal });

		// Pointing at a shortened name gives it back in full for as long as
		// you are pointing at it. Delegated rather than bound per segment,
		// because the trail is rebuilt whenever the row changes and per
		// segment listeners would have to be rebuilt with it.
		container?.addEventListener("mouseover", (evt) => {
			// Not while a field is open: the row is being edited, not read,
			// and widening a name under the field moves the text somebody is
			// typing into. Not while the row is being scrolled either —
			// names slide under a still pointer as it moves, and each one
			// arriving would open, widen the row and shift the rest along
			// under the very gesture trying to read them.
			if (this.inputEl || Date.now() - this.scrolledAt < SCROLL_QUIET_MS) return;
			const name = (evt.target as HTMLElement).closest<HTMLElement>(
				".view-header-breadcrumb, .lure-filename-text",
			);
			this.openName(name);
		}, { signal: this.domListeners.signal });

		// Leaving the row entirely, rather than moving between two names on
		// it: `mouseover` already handles the second, and using `mouseout`
		// for both would close a name on the way to its own child span.
		container?.addEventListener("mouseleave", () => this.openName(null), {
			signal: this.domListeners.signal,
		});

		// A middle press is not a "click" in the browser's sense and never
		// reaches the handler above, so its gestures are wired on their own
		// event — and counted, like the right button's, because it carries
		// more than one meaning. The wait before the first acts is the same
		// price paid there, for the same reason.
		container?.addEventListener("auxclick", (evt) => {
			if (evt.button !== 1) return;
			const target = evt.target as HTMLElement;
			if (target.closest(".view-header-breadcrumb, .view-header-breadcrumb-separator, .lure-vault-wrapper")) {
				return;
			}
			evt.preventDefault();
			// The one thing the middle button does here: paste over the path,
			// from the vault root, with what lands marked.
			this.startFullPathEdit("all");
			void this.pasteIntoField(true);
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
			this.climbFromClick = true;
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
				// The one segment that is not a path segment gets the menu
				// that is not about this file: what can be done to the vault
				// itself, which is what the vault manager offers behind its
				// own three dots.
				if (count === 1) this.showVaultMenu(at);
				// Then out from the segment itself: what it is called, where
				// it is, and where the open file is. Each press widens what
				// the copy is good for — the name means something inside
				// Obsidian, the two paths mean something outside it.
				else if (count === 2) void this.copyToClipboard(this.rootSegmentName());
				else if (count === 3) void this.copyToClipboard(this.openingTooltip());
				else if (count === 4) void this.copyToClipboard(this.systemPath());
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
				// Four presses take the path the filesystem knows, which is
				// the one thing on this row that means something outside
				// Obsidian. The three counts line up with what one, two and
				// three *left* presses select, so the two buttons say the
				// same three things — one shows them, the other takes them.
				const row = this.rowDisplayPath();
				// One press opens the path for editing with the whole of it
				// marked — the same thing two left presses select — and then
				// says what can be done to marked text. The OS menu is out of
				// reach from here (the press that could have raised it is
				// spent by the time the count is known), so the entries are
				// Obsidian's own words for the same four things.
				if (count === 1) {
					this.startFullPathEdit("all");
					this.showTextMenu(at);
					return;
				}
				if (count === 2) void this.copyToClipboard(pathStem(row));
				else if (count === 3) void this.copyToClipboard(row);
				else if (count === 4) void this.copyToClipboard(this.systemPath());
				return;
			}
		}
	}

	/**
	 * What can be done to the vault itself.
	 *
	 * The vault manager keeps these behind the three dots beside each vault
	 * in its list, and that menu belongs to the starter window — there is no
	 * API that opens it, and nothing in the vault list is reachable from a
	 * running vault. So the entries are rebuilt here from the things
	 * Obsidian can actually be asked to do, with its own wording: the titles
	 * come from the commands themselves, so they arrive already translated
	 * and stay in step if Obsidian renames one.
	 *
	 * Outside the vault the same press asks about the place the row was
	 * drawn from instead, which is the thing that segment is naming there.
	 */
	private showVaultMenu(at: { clientX: number; clientY: number }): void {
		const menu = new Menu();
		const path = this.openingTooltip();
		const command = (id: string, fallback: string): string =>
			this.plugin.app.commands.commands[id]?.name ?? fallback;

		// Which vault this segment is naming — the open one, or whichever
		// registered vault the row was drawn from. The two differ only in
		// where the id comes from, so everything below is written once.
		const here = this.externalPath === null;
		const registered = here ? null : this.registeredVaultAt(path);
		const vaultId = here ? (this.plugin.app.appId ?? null) : (registered?.vaultId ?? null);

		// A vault this window is not standing in, but which Obsidian knows
		// about: the one action the segment can take that the open vault has
		// no use for. Named by id rather than by path, because two vaults may
		// share a folder name and only the id tells Obsidian which is meant.
		if (registered?.vaultId) {
			menu.addItem((item) =>
				item
					.setSection("open")
					.setTitle(t("menuOpenThisVault"))
					.setIcon("lucide-vault")
					.onClick(() => {
						void this.openTypedTarget(
							{ kind: "obsidian", href: `obsidian://open?vault=${encodeURIComponent(registered.vaultId ?? "")}` },
							false,
						);
					}),
			);
		}

		// Only the open vault has a window to open another of. For anywhere
		// else the entry would open a second window of *this* vault, which is
		// not what a menu hanging off another vault's name is offering.
		if (here) {
			menu.addItem((item) =>
				item
					.setSection("open")
					.setTitle(command("workspace:new-window", "Open in new window"))
					.setIcon("lucide-picture-in-picture-2")
					.onClick(() => {
						void this.plugin.app.commands.executeCommandById("workspace:new-window");
					}),
			);
		}

		// Everywhere: the vault manager is where a vault is renamed, moved or
		// taken off the list, and none of those can be done to a vault that is
		// open — so the way to reach them is the same wherever you ask.
		menu.addItem((item) =>
			item
				.setSection("open")
				.setTitle(command("app:open-vault", "Open another vault"))
				.setIcon("lucide-library")
				.onClick(() => {
					void this.plugin.app.commands.executeCommandById("app:open-vault");
				}),
		);

		menu.addItem((item) =>
			item
				.setSection("system")
				.setTitle(obsidianLabel(LABELS.copyPath, "Copy path"))
				.setIcon("lucide-copy")
				.onClick(() => void this.copyToClipboard(path)),
		);
		// The identifier Obsidian keys its registry, its per-vault settings
		// and its `obsidian://` links by. Nothing on the row can show it and
		// nothing else here can reach it — it is not derivable from the name
		// or the path. Offered only where there is one: a home folder or a
		// drive is not a vault and has no id.
		if (vaultId) {
			menu.addItem((item) =>
				item
					.setSection("system")
					.setTitle(t("menuVaultId"))
					.setIcon("lucide-fingerprint")
					.onClick(() => void this.copyToClipboard(vaultId)),
			);
		}
		menu.addItem((item) =>
			item
				.setSection("system")
				.setTitle(obsidianLabel(LABELS.showInSystemExplorer, "Show in system explorer"))
				.setIcon("lucide-folder-open")
				.onClick(() => showInFolder(path)),
		);
		menu.showAtPosition({ x: at.clientX, y: at.clientY });
	}

	/**
	 * The registered vault at this path, if Obsidian knows one there.
	 *
	 * The locations dropdown can be pointed at anything — a vault, a home
	 * folder, a mounted drive — and only a vault has an id or anything to
	 * open. Matched by path rather than by name, since two vaults may share
	 * a folder name.
	 */
	private registeredVaultAt(path: string): SystemLocation | null {
		if (!path) return null;
		return listVaults(this.vaultBasePath() ?? "").find((one) => samePath(one.path, path)) ?? null;
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
	/**
	 * What can be done to the text now marked in the field.
	 *
	 * Four entries, in Obsidian's own wording — it translates all of them
	 * already, so this menu reads correctly in every language the app ships
	 * without a string of Lure's own. Focus goes back to the field after
	 * each, because every one of them is a thing you do *to* the field and
	 * leaving the caret elsewhere would strand it.
	 */
	private showTextMenu(at: { clientX: number; clientY: number }): void {
		const input = this.inputEl;
		if (!input) return;

		const marked = () => input.value.slice(input.selectionStart ?? 0, input.selectionEnd ?? 0);
		const replaceMarked = (text: string) => {
			const start = input.selectionStart ?? 0;
			const end = input.selectionEnd ?? 0;
			input.value = input.value.slice(0, start) + text + input.value.slice(end);
			const caret = start + text.length;
			input.setSelectionRange(caret, caret);
			// Untrusted by construction, so the listing re-queries without
			// this being mistaken for typing.
			input.dispatchEvent(new Event("input"));
			input.focus();
		};

		const menu = new Menu();
		menu.addItem((item) =>
			item
				.setTitle(obsidianLabel(LABELS.cut, "Cut"))
				.setIcon("scissors")
				.onClick(() => {
					const text = marked();
					if (!text) return;
					void this.copyToClipboard(text);
					replaceMarked("");
				}),
		);
		menu.addItem((item) =>
			item
				.setTitle(obsidianLabel(LABELS.copy, "Copy"))
				.setIcon("copy")
				.onClick(() => {
					const text = marked();
					if (text) void this.copyToClipboard(text);
					input.focus();
				}),
		);
		menu.addItem((item) =>
			item
				.setTitle(obsidianLabel(LABELS.paste, "Paste"))
				.setIcon("clipboard-paste")
				.onClick(() => void this.pasteIntoField()),
		);
		menu.addItem((item) =>
			item
				.setTitle(obsidianLabel(LABELS.selectAll, "Select all"))
				.setIcon("text-cursor-input")
				.onClick(() => {
					input.select();
					input.focus();
				}),
		);
		menu.showAtPosition({ x: at.clientX, y: at.clientY });
	}

	/**
	 * Puts the clipboard in the field, over whatever is marked.
	 *
	 * With the whole path marked — which is how the field opens to a press
	 * of the middle button — that is a replacement of the path outright,
	 * which is the point of the gesture.
	 */
	private async pasteIntoField(mark = false): Promise<void> {
		const input = this.inputEl;
		if (!input) return;
		let text = "";
		try {
			text = await navigator.clipboard.readText();
		} catch {
			new Notice(obsidianLabel(LABELS.copyFailed, "Unable to copy to your clipboard"));
			return;
		}
		if (!text) return;
		// Unwrapped here as well as on submit, so the completion has
		// something it can match and the row is not showing a name nobody
		// meant to type. Only when the paste is the whole field: dropping a
		// quoted path into the middle of one is not the same gesture.
		const start = input.selectionStart ?? 0;
		const end = input.selectionEnd ?? 0;
		if (start === 0 && end === input.value.length) text = unquotePath(text);
		input.value = input.value.slice(0, start) + text + input.value.slice(end);
		// Marked, where the paste was the whole gesture: it says what landed,
		// and the press after it can replace the lot without a keystroke in
		// between. From the menu the caret is what you want instead — you are
		// in the middle of editing there.
		if (mark) input.setSelectionRange(start, start + text.length);
		else {
			const caret = start + text.length;
			input.setSelectionRange(caret, caret);
		}
		input.dispatchEvent(new Event("input"));
		input.focus();
	}


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

		// Each segment stands for a real folder, so it behaves like that
		// folder's row in the File Explorer at both ends of a drag: it can be
		// dragged onto the tab bar, into the editor or onto another folder,
		// and a file dragged *onto* it moves there. Right-click is the one
		// thing the row keeps for itself — a press there is counted, and the
		// menu it opens is built elsewhere.
		this.nativeSegments().forEach((el, index) => {
			const folderPath = cumulativePaths[index];
			if (folderPath === undefined) return;
			const folder = this.plugin.app.vault.getAbstractFileByPath(folderPath);
			if (!(folder instanceof TFolder)) return;
			makeDraggable(this.plugin.app, el, folder);
			this.acceptDropsInto(el, folderPath);
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

		container.style.removeProperty(GAP_VAR);
		container.removeClass(SCROLL_CLASS);

		const segments = this.fittableSegments();
		if (!segments.length) return;

		// The trail is rebuilt from scratch here, so whatever was open is
		// either gone or about to be laid out again from its full name.
		this.openedName = null;
		for (const segment of segments) this.layOutName(segment);
		// Air first, then the floors — in that order, because a floor is the
		// sum of what is inside a box *including the air around it*, and
		// adding up air that is about to be spent leaves the box floored
		// several pixels above its own contents. The surplus goes to the
		// first name that can take it, which is the vault name, which is
		// exactly the one that is supposed to disappear.
		const extension = this.filenameEl.querySelector<HTMLElement>(`.${EXTENSION_CLASS}`);
		extension?.removeClass(GIVEN_UP_CLASS);
		this.vaultSegmentEl
			.querySelector<HTMLElement>(".lure-root-name")
			?.removeClass(NAME_SPENT_CLASS);
		this.settleGeometry(container, segments);

		// What the browser did, rather than what a plan hoped it would do: a
		// part is clipped exactly when it holds more than it can show. Nothing
		// in the text says so any more — the `…` is painted, not written — and
		// this is the truthful question to ask instead.
		let clipped = segments.map((segment) =>
			Array.from(segment.el.children).some((part) => part.scrollWidth > part.clientWidth + 1),
		);

		// The extension goes second, straight after the vault name: it is the
		// same three characters on nearly every file in a vault, so once the
		// opening segment has nothing left to give it is the next thing on
		// the row worth less than a folder's letters. Whole, not clipped —
		// half an extension says nothing that no extension does not.
		//
		// "Straight after" is why the opening segment is held at nothing for
		// as long as the extension is gone. Flexbox hands the freed width
		// back to whichever name gave up the most, which is the vault name —
		// so without this the row swapped the two rather than spending them
		// in turn: the extension went and the vault name came back.
		//
		// The question asked is only ever "with the extension shown, is
		// anything past the opening segment having to be clipped?", and it is
		// always asked of the row in that state — extension shown, nothing
		// latched. Asking it of a row that still carried the last fit's
		// answer is what made the extension flicker in and out across a slow
		// drag: the latch left the opening segment at nothing, clearing it
		// gave the segment a pixel or two back, and a condition that tested
		// for *exactly* nothing then flipped on alternate widths.
		//
		// No test for the opening segment being spent is needed either. It
		// shrinks ten thousand times faster than a folder does, so a folder
		// that has had to give up a letter is already standing on a vault
		// name that has given up everything.
		const opening = segments[0];
		let spent = false;

		// The last sliver of the vault name. Flexbox leaves it a pixel or two
		// on its way to nothing, and a pixel or two of a letter is half a
		// glyph appearing and disappearing as the pane moves — it says
		// nothing, and it reads as the row misdrawing itself. Below a single
		// character's width there is nothing worth showing, so it shows
		// nothing.
		if (opening && this.slivered(opening.el)) {
			opening.el.addClass(NAME_SPENT_CLASS);
			spent = true;
		}

		if (extension && clipped.slice(1).some(Boolean)) {
			extension.addClass(GIVEN_UP_CLASS);
			opening?.el.addClass(NAME_SPENT_CLASS);
			spent = true;
		}

		if (spent) {
			this.settleGeometry(container, segments);
			clipped = segments.map((segment) =>
				Array.from(segment.el.children).some((part) => part.scrollWidth > part.clientWidth + 1),
			);
		}
		// Whether anything from here rightwards was shortened. A folder whose
		// own name still fits can still be hiding what is under it, and the
		// path below a segment is most of what you would hover it to learn.
		const cutAtOrAfter = segments.map(() => false);
		for (let index = segments.length - 1; index >= 0; index--) {
			const below = index + 1 < segments.length ? cutAtOrAfter[index + 1] : false;
			cutAtOrAfter[index] = below || (clipped[index] ?? false);
		}

		// The opening segment always carries one, cut or not, and what it
		// carries is the absolute path of the place the row starts at. That
		// is the one fact about the row nothing on screen can show — the
		// name says which vault, never where it is — and it is what you would
		// ask an icon standing alone for. It goes on the segment rather than
		// the name inside it, so it answers over the icon too.
		if (opening) setTooltip(opening.el.parentElement ?? opening.el, this.openingTooltip());

		for (const [index, segment] of segments.entries()) {
			if (index === 0) continue;
			// Only where something was actually cut: a tooltip repeating what
			// is already on screen in full is noise.
			if (!cutAtOrAfter[index]) {
				setTooltip(segment.el, "");
				continue;
			}
			// Every segment but the opening one says itself and everything
			// the row shows under it, which is what was cut away.
			const tip = `…/${segments.slice(index).map((one) => one.full).join("/")}`;
			setTooltip(segment.el, tip);
		}

		// Only where shortening has already run out of road: while there is
		// still a name that could give way, giving way is the better answer.
		// It is also what makes a restored name reachable, so the row is left
		// scrollable whenever any name on it is being clipped at all.
		this.letRowScroll(clipped.some(Boolean));
	}

	/**
	 * Keeps an open dropdown's top-left corner within the row it belongs to.
	 *
	 * The popover is placed under the field, and a scrolled row can carry
	 * that field right off its own start or end — leaving a list hanging
	 * under a part of the header that has nothing to do with it, or off the
	 * pane entirely.
	 *
	 * Nudged with a transform rather than by moving it, so Obsidian goes on
	 * placing the popover exactly as it would and this only ever adjusts the
	 * result. A transform also costs no layout, which matters for something
	 * run on every scroll frame.
	 */
	private clampPopover(): void {
		const container = this.titleEl.parentElement;
		const popover = activeDocument.querySelector<HTMLElement>(".suggestion-container");
		if (!container || !popover) return;
		popover.setCssProps({ [POPOVER_SHIFT_VAR]: "0px" });
		const row = container.getBoundingClientRect();
		const here = popover.getBoundingClientRect().left;
		const shift = Math.min(Math.max(row.left - here, 0), Math.max(row.right - here, 0));
		if (shift !== 0) popover.setCssProps({ [POPOVER_SHIFT_VAR]: `${shift.toFixed(2)}px` });
	}

	/**
	 * Whether a name has been left with too little width to draw a letter in.
	 *
	 * Measured against one character in the name's own font: below that there
	 * is no whole glyph to show, only the left edge of one, which is worse
	 * than nothing because it changes with every pixel the pane moves.
	 */
	private slivered(el: HTMLElement): boolean {
		const width = el.getBoundingClientRect().width;
		return width > 0 && width < textWidth("n", el);
	}

	/**
	 * Settles the row's geometry: air first, then the floors it leaves, then
	 * the strip `text-overflow` leaves at the end of every clipped box.
	 *
	 * Run again whenever something is taken off the row, because all three
	 * are measured from a layout that has just changed.
	 */
	private settleGeometry(container: HTMLElement, segments: readonly FittableSegment[]): void {
		this.spendAir(container);
		this.floorBoxes();
		this.tightenClipped(segments);
	}

	/**
	 * Lays one name out as the parts the browser can clip between.
	 *
	 * The `min-width` each part carries is the name at its floor, measured in
	 * the font it is actually drawn in — so flexbox takes room away
	 * continuously and stops exactly where a reader would want it to, without
	 * anyone counting characters.
	 */
	private layOutName(segment: FittableSegment): void {
		const { el, full, stage } = segment;
		el.empty();
		setFloor(el, "");
		// And the cap the last fit put on it. The parts inside are built
		// fresh every time and carry nothing over, but the box around them is
		// Obsidian's own element and outlives the fit — left capped at the
		// width it drew into when the pane was narrower, a name could shrink
		// and never grow back.
		setTight(el, "");

		// Each part's floor is also the box's: a name is a flex item of the
		// row, and a flex item told it may go to nothing will, however much
		// its contents insist. Adding them up as they are made is the only
		// place the two numbers are both known.
		let floorPx = 0;
		const put = (text: string, cls: string, floorText?: string): void => {
			const part = el.createSpan({ cls });
			if (cls.includes(NAME_BACK_CLASS)) {
				// Isolated, so `direction: rtl` only moves where the clipping
				// happens. Without it the bidi algorithm reorders a name that
				// opens or closes with a dash or a bracket.
				part.createEl("bdi", { text });
			} else {
				part.setText(text);
			}
			const width = floorText === "" ? 0 : textWidth(floorText ?? text, el);
			setFloor(part, floorText === undefined ? "" : `${width.toFixed(2)}px`);
			floorPx += width;
		};
		const settle = (): void => {
			if (floorPx > 0) setFloor(el, `${floorPx.toFixed(2)}px`);
		};

		// The opening segment is the one allowed to disappear altogether: its
		// icon stays behind and goes on saying where the row begins. So it is
		// the one part with no floor at all.
		// The opening segment is the one part of the row with no floor at all:
		// it may go to nothing, and its icon stays behind to say where the
		// path begins. Written as an explicit zero rather than left unset,
		// because the boxes above it add up what is inside them and an unset
		// floor means "ask the contents", which would answer with a width.
		if (stage === "root") {
			put(full, NAME_LEAD_CLASS, "");
			setFloor(el, "0px");
			return;
		}

		const cut = segment.cut();
		// How short this name may get, as a *width*. Four narrow letters and
		// four wide ones are not the same amount of name, and a floor counted
		// in characters made `illli` and `WWWWW` two very different things to
		// be left with. The reference is a run of one letter in the row's own
		// font, so the floor is the same visual amount for every name and
		// still follows the interface font size.
		//
		// Never less than what the neighbours force: `cut.floor` is how much
		// of this name they leave distinctive, and no width may undercut it.
		const readable = textWidth(stage === "name" ? MIN_NAME_REF : MIN_FOLDER_REF, el);
		let keep = cut.floor;
		while (keep < full.length && textWidth(cutName(full, keep, cut), el) < readable) {
			keep += 1;
		}
		// Already at or under what it has to keep. A name with nothing to give
		// should not be able to give it, so it is pinned rather than clipped.
		if (keep >= full.length) {
			put(full, NAME_PINNED_CLASS);
			settle();
			return;
		}
		if (cut.shape === "tail") {
			put(full, NAME_LEAD_CLASS, cutName(full, keep, cut));
			settle();
			return;
		}
		if (cut.shape === "head") {
			put(full, `${NAME_TRAIL_CLASS} ${NAME_BACK_CLASS}`, cutName(full, keep, cut));
			settle();
			return;
		}
		if (cut.shape === "window") {
			// Both ends are shared, so both go. The opening is clipped from its
			// start and the shared ending from its end, which leaves the part
			// that differs standing between two ellipses.
			put(
				full.slice(0, cut.span.end),
				`${NAME_LEAD_CLASS} ${NAME_BACK_CLASS}`,
				ELLIPSIS + full.slice(cut.span.start, cut.span.end),
			);
			put(full.slice(cut.span.end), NAME_TRAIL_CLASS, ELLIPSIS);
			settle();
			return;
		}

		// The middle, and the common case: the name keeps how it opens and how
		// it closes — for a file, its extension — and spends what lies between.
		const front = Math.ceil(keep / 2);
		const back = keep - front;
		if (back <= 0) {
			put(full, NAME_LEAD_CLASS, cutName(full, keep, cut));
			settle();
			return;
		}
		put(full.slice(0, full.length - back), NAME_LEAD_CLASS, full.slice(0, front) + ELLIPSIS);
		put(full.slice(full.length - back), `${NAME_TRAIL_CLASS} ${NAME_PINNED_CLASS}`);
		settle();
	}

	/**
	 * Shows one shortened name in full, and puts the last one back.
	 *
	 * The row is left scrollable whenever anything on it is clipped, so a
	 * name restored past the right edge is reachable — but reaching it should
	 * not be the reader's job. It is scrolled to the left edge instead, which
	 * is the one position where all of what just came back is on screen.
	 *
	 * `null` closes whatever was open, which is also what leaving the row
	 * does.
	 */
	private openName(name: HTMLElement | null): void {
		if (this.openedName === name) return;
		this.openedName?.removeClass(NAME_OPEN_CLASS);
		this.openedName = name;
		const container = this.titleEl.parentElement;
		if (!name) {
			// Back to whatever the row itself needs: with every name clipped
			// again it fits, and a row that fits does not scroll.
			if (container) this.letRowScroll(container.scrollWidth > container.clientWidth);
			return;
		}

		// The class is the whole of it: the stylesheet lifts the floor on the
		// name, on its parts, and on the box holding it where that is not the
		// row itself — the file name sits inside the stretching box that
		// makes the empty space clickable, and the opening segment inside the
		// wrapper that keeps it pinned while the row scrolls.
		name.addClass(NAME_OPEN_CLASS);

		if (!container) return;
		// A row whose names all clip fits by construction, so it is not
		// scrollable — and the name that just came back in full would be
		// clipped by the row instead, with no way to reach it. It is made
		// scrollable for as long as the name is open.
		this.letRowScroll(true);
		this.scrollIntoRow(name);
	}

	/**
	 * What the row's opening segment says when you point at it.
	 *
	 * Where the path begins, absolutely: the vault's own folder on disk, or
	 * the place an external trail starts at. The name beside it says *which*
	 * one; only this says where it is, and with the name turned off the icon
	 * says neither.
	 *
	 * Falls back to the name where there is no path to give — a vault on an
	 * in-memory adapter has no folder on disk — because a tooltip repeating
	 * the name is still better than an icon that answers nothing.
	 */
	private openingTooltip(): string {
		if (this.externalPath !== null) {
			const base = this.externalBase?.path;
			if (base) return base;
		}
		return this.vaultBasePath() ?? this.plugin.app.vault.getName();
	}

	/**
	 * Brings something on the row to its left edge.
	 *
	 * Measured as the gap between two boxes on screen rather than from
	 * `offsetLeft`, which is counted from whichever ancestor happens to be
	 * positioned and had the row landing a dozen pixels off. The pinned
	 * opening segment is subtracted because it is drawn over the row's left
	 * edge, and anything scrolled flush to that edge arrives underneath it.
	 */
	private scrollIntoRow(el: HTMLElement): void {
		const container = this.titleEl.parentElement;
		if (!container?.hasClass(SCROLL_CLASS)) return;
		const row = container.getBoundingClientRect();
		const here = el.getBoundingClientRect();
		const pinned = this.vaultSegmentEl.getBoundingClientRect().width;
		container.scrollLeft = Math.max(0, container.scrollLeft + here.left - row.left - pinned);
	}

	/**
	 * Floors the two boxes on the row that hold names without being one.
	 *
	 * Both are flex items of the row, and a flex item told it may go to
	 * nothing will — however much its contents insist. The opening segment's
	 * box would shrink out from under its own icon, which then paints over
	 * the folder beside it; the file name's box would take its name with it.
	 * Neither has a floor a stylesheet could carry, because both hold
	 * measured names: in the browse trail the opening box holds the whole
	 * path.
	 */
	private floorBoxes(): void {
		setFloor(this.vaultSegmentEl, `${(this.boxFloor(this.vaultSegmentEl) ?? 0).toFixed(2)}px`);
		setFloor(this.filenameEl, `${(this.boxFloor(this.filenameEl) ?? 0).toFixed(2)}px`);
	}

	/**
	 * The least a box may be squeezed to, added up from what is inside it —
	 * or `null` where nothing inside it gives way at all.
	 *
	 * A child carrying a floor of its own answers for itself and is not
	 * looked into: that is what a floor means. Anything else is looked into,
	 * and if nothing in there declared a floor either then the whole of it is
	 * something that does not shrink — an icon, a delimiter — and it answers
	 * with its full width. Which is why "no children" is the wrong test for a
	 * leaf: the vault icon's only child is an `<svg>`, so counting HTML
	 * children made it measure as nothing and the row squeezed the icon out
	 * from under itself.
	 */
	private boxFloor(box: HTMLElement): number | null {
		let total = 0;
		let declared = false;
		for (const child of Array.from(box.children)) {
			if (!child.instanceOf(HTMLElement)) continue;
			const style = window.getComputedStyle(child);
			const outside =
				parseFloat(style.marginLeft || "0") + parseFloat(style.marginRight || "0");
			const frame =
				child.offsetWidth -
				child.clientWidth +
				parseFloat(style.paddingLeft || "0") +
				parseFloat(style.paddingRight || "0");
			const own = parseFloat(child.style.getPropertyValue(FLOOR_VAR));
			if (Number.isFinite(own)) {
				declared = true;
				total += own + frame + outside;
				continue;
			}
			const inner = this.boxFloor(child);
			if (inner === null) {
				total += child.offsetWidth + outside;
				continue;
			}
			declared = true;
			total += inner + frame + outside;
		}
		return declared ? total : null;
	}

	/**
	 * Takes the empty strip off the end of every clipped name.
	 *
	 * `text-overflow` fills a box with whole glyphs and then the `…`, and
	 * stops at the last one that fits — so the box is nearly always a little
	 * wider than what was drawn into it, by anything up to the width of the
	 * character it could not fit. On screen that is a gap between the `…` and
	 * the delimiter after it, which reads as padding nobody asked for and
	 * which got wider the tighter the row was squeezed.
	 *
	 * There is no way to ask CSS for "as wide as what you drew", so the run
	 * is worked out here — a binary search over the prefix (or, for a name
	 * clipped at its start, the suffix), measured in the part's own font —
	 * and the box capped at exactly that. The box is read as a fraction
	 * rather than as `clientWidth`, which rounds down: a part floored at
	 * 30.45px reports a box of 30, so the very run its floor was measured
	 * from no longer fit the box the floor had made for it.
	 *
	 * Only ever narrower, and only on parts that are already clipped, so
	 * nothing that fits can be made to stop fitting. The room it gives back
	 * goes to the file name's box, which is the only thing on the row that
	 * grows.
	 */
	private tightenClipped(segments: readonly FittableSegment[]): void {
		// Twice. Capping one part hands its leftover width back to the row,
		// which moves every other part a little — so a cap worked out against
		// the first layout can be a pixel or two out by the time the row has
		// settled. The second pass measures what actually happened. It cannot
		// run away: a cap only ever narrows a box, and only ever to something
		// the box was already drawing.
		this.tightenOnce(segments);
		this.tightenOnce(segments);
	}

	private tightenOnce(segments: readonly FittableSegment[]): void {
		for (const segment of segments) {
			// What the name will occupy once its parts are capped. The box
			// around them has to come down by the same amount or the strip
			// simply moves: a part capped inside a crumb that keeps its width
			// leaves the empty pixels between the crumb's edge and the
			// delimiter instead of between the `…` and the crumb's edge,
			// which looks exactly the same.
			let occupied = 0;
			for (const part of Array.from(segment.el.children)) {
				if (!part.instanceOf(HTMLElement)) continue;
				if (part.scrollWidth <= part.clientWidth + 1) {
					occupied += part.getBoundingClientRect().width;
					continue;
				}
				const text = part.textContent ?? "";
				const fromStart = part.hasClass(NAME_BACK_CLASS);
				// Fractional, and with half a pixel of grace. `clientWidth`
				// is rounded down to whole pixels, and a box floored at
				// 30.45px reports 30 — so the very run the floor was measured
				// from stopped fitting the box the floor had made for it, and
				// the part sat at its floor drawing one character less.
				const box = part.getBoundingClientRect().width + 0.5;
				const runOf = (keep: number): string =>
					fromStart
						? ELLIPSIS + text.slice(text.length - keep)
						: text.slice(0, keep) + ELLIPSIS;
				let drawn = 0;
				let low = 0;
				let high = text.length;
				while (low < high) {
					const mid = Math.ceil((low + high) / 2);
					const width = textWidth(runOf(mid), part);
					if (width <= box) {
						drawn = width;
						low = mid;
					} else {
						high = mid - 1;
					}
				}
				// Never wider than the box it is capping: a cap above the
				// current width does nothing except go stale the moment the
				// row moves under it.
				if (drawn > 0 && drawn < box) {
					setTight(part, `${drawn.toFixed(2)}px`);
					occupied += drawn;
				} else {
					occupied += part.getBoundingClientRect().width;
				}
			}
			if (occupied > 0 && occupied < segment.el.getBoundingClientRect().width) {
				setTight(segment.el, `${occupied.toFixed(2)}px`);
			}
		}
	}

	/**
	 * Gives up the row's air before it gives up any of its letters.
	 *
	 * The space around the delimiters is the one thing on the row that can be
	 * lost without losing information, so it goes first — and
	 * it goes smoothly, by fractions of a pixel, which is what stops a pane
	 * dragged slowly from stepping.
	 *
	 * One pass is exact: every pixel of air handed back is a pixel of name
	 * that stops being hidden, so there is nothing to converge on.
	 */
	private spendAir(container: HTMLElement): void {
		const delimiters = container.querySelectorAll(".view-header-breadcrumb-separator").length;
		const pool = delimiters * 2 * GAP_PX;
		if (pool <= 0) return;

		let hidden = Math.max(0, container.scrollWidth - container.clientWidth);
		for (const part of Array.from(
			container.querySelectorAll<HTMLElement>(`.${NAME_LEAD_CLASS}, .${NAME_TRAIL_CLASS}`),
		)) {
			hidden += Math.max(0, part.scrollWidth - part.clientWidth);
		}
		if (hidden <= 0) return;

		const left = Math.max(0, 1 - hidden / pool);
		container.style.setProperty(GAP_VAR, `${(GAP_PX * left).toFixed(2)}px`);
	}

	/**
	 * Lets the row be scrolled, or stops it, according to whether it has more
	 * on it than fits.
	 *
	 * `wanted` is the caller's own answer to "should this row scroll at all" —
	 * the fitter says so only once shortening has run out, while a field
	 * being typed into says so as soon as it overflows, having nothing it
	 * could shorten. Either way the row has to actually overflow, or the box
	 * would answer the wheel with nowhere to go.
	 */
	private letRowScroll(wanted: boolean): void {
		const container = this.titleEl.parentElement;
		if (!container) return;
		if (wanted && container.scrollWidth > container.clientWidth) {
			// Only where the row was not already scrolling. Parking it is
			// what a row newly too long for its pane should do — the end is
			// where the caret is and where the file's own name is — but a row
			// that is *already* scrolled has somewhere it was put on purpose,
			// and re-parking it here dragged the view back to the end every
			// time the pointer left the row.
			const already = container.hasClass(SCROLL_CLASS);
			container.addClass(SCROLL_CLASS);
			if (!already) container.scrollLeft = container.scrollWidth;
			return;
		}
		container.removeClass(SCROLL_CLASS);
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
			out.push({
				el,
				full,
				stage,
				cut: () => chooseCut(full, agreementWith(full, siblings()), readableMinimum(stage)),
			});
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
	 * Puts every clipped name back.
	 *
	 * The native segments are Obsidian's own elements and outlive this
	 * instance, so a row left holding our own spans — and the widths and
	 * directions set on them — after the plugin is disabled would be debris
	 * of exactly the kind the teardown contract exists to prevent.
	 */
	private restoreFittedText(): void {
		for (const el of this.nativeSegments()) {
			const full = el.dataset.lureFull;
			if (full === undefined) continue;
			el.textContent = full;
			delete el.dataset.lureFull;
			setFloor(el, "");
			el.removeClass(NAME_OPEN_CLASS);
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
		// The name is always in the row, whatever the setting: with the
		// setting off it is held at no width rather than left out, so that
		// pointing at the icon gives it back the same way pointing at a name
		// the row had to shorten gives that back. An element that is not
		// there has nothing to give.
		const nameEl = rootEl.createSpan({
			cls: "lure-root-name",
			text: this.plugin.app.vault.getName(),
		});
		if (!this.plugin.settings.showVaultName) nameEl.addClass(NAME_FOLDED_CLASS);
		// The vault's name is a folder like any other on the row — the one at
		// the top — so it takes a drop like any other. Only while the row is
		// showing this vault: out on a browsed path the same element names a
		// place on the filesystem, and moving a note out there is a decision
		// worth the question the typed path asks rather than a gesture.
		if (this.browsePath === null) this.acceptDropsInto(rootEl, "/");
		rootEl.addEventListener("click", (evt) => {
			evt.stopPropagation();
			if (this.openRootInNewTab(evt)) return;
			this.openLocationMenu();
		});
		// A middle press is not a "click", so it is heard on its own event —
		// the same rule the row's empty space follows.
		rootEl.addEventListener("auxclick", (evt) => {
			if (evt.button !== 1) return;
			evt.stopPropagation();
			if (this.openRootInNewTab(evt)) evt.preventDefault();
		});
	}

	/**
	 * A fresh tab, standing at the vault root with the field open.
	 *
	 * The modifier means on this segment what it means everywhere else on
	 * the row — "somewhere else, not here" — and what this segment names is
	 * the top of the vault. So it opens a tab that holds nothing yet and
	 * puts you at the root of the tree with the list already showing, ready
	 * to type your way to whatever the tab is going to hold.
	 *
	 * Returns whether it acted, so a plain press falls through to the
	 * dropdown of places.
	 */
	private openRootInNewTab(evt: MouseEvent): boolean {
		if (!this.paneTypeFor(evt)) return false;
		const leaf = this.plugin.app.workspace.getLeaf("tab");
		// The new leaf holds no file, and its row is built on the frame after
		// this one — so the browsing is started once it exists, the same way
		// sending a folder to another pane waits for that pane.
		window.setTimeout(() => {
			this.manager.patchLeaf(leaf);
			this.manager.breadcrumbFor(leaf)?.startBrowsingAt("");
		}, 0);
		return true;
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
		const nameEl = rootEl.createSpan({ cls: "lure-root-name", text: baseLabel });
		if (!(named || !base || remainder === null)) nameEl.addClass(NAME_FOLDED_CLASS);
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
			// The extension is the same for almost every file in a vault, so
			// by default the row leaves it off exactly as Obsidian leaves it
			// off a note's title. The setting is for vaults that hold more
			// than notes, where it is the one part of the name that says
			// what the file *is*. It rides in a box of its own (below), so
			// the row can give it up early without touching the name.
			text: this.file.basename,
		});
		// The name stands for the open note, so it behaves like that note's
		// row in the File Explorer: drag it into an editor to write a link,
		// onto a folder to move it, onto the tab bar to open it. Only the
		// drag is borrowed — the right-click here is counted rather than
		// acted on, and builds its own menu.
		// After the name and outside it: the fitter gives this up whole, as
		// the second thing on the row to go, and a name being clipped by the
		// browser has no room for a part that must be shown or not shown at
		// all.
		if (this.plugin.settings.showFileExtension && this.file.extension) {
			this.filenameEl.createSpan({
				cls: EXTENSION_CLASS,
				text: this.file.name.slice(this.file.basename.length),
			});
		}
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
	/**
	 * One more press of the left button while the field is open, widening
	 * what is selected: the name, the name with its extension, the path from
	 * the vault, the path the machine knows.
	 *
	 * `detail` is the browser's own click counter, so the run needs no timer
	 * of its own and cannot disagree with what the platform considers a
	 * multi-click. Shared by the field and by the empty space beside it,
	 * because the field is only as wide as its text: pressing just past the
	 * end of a path is the same gesture as pressing on it, and answering it
	 * only on the input made the second press depend on where the text
	 * happened to stop.
	 *
	 * Returns whether the press was one of these, so the caller can keep the
	 * browser's own word-select from also firing.
	 */
	private climbSelection(detail: number, fromRow = false): boolean {
		const input = this.inputEl;
		if (!input) return false;
		// A first press decides whose run this is. On the row — a name, or
		// the empty space beside it — it starts one; inside the field it ends
		// whichever was running, because from there on somebody is working
		// in a text field rather than carrying on the gesture that opened it.
		if (detail <= 1) {
			this.climbFromClick = fromRow;
			return false;
		}
		// A run that did not begin on the row is not this gesture at all.
		// Double-clicking inside an open field means what it means in every
		// other text field — the word under the pointer — and answering it
		// with "the whole path" took away the one selection the field cannot
		// make any other way.
		if (!this.climbFromClick) return false;
		if (detail === 2) {
			// The same text, the extension now marked with the rest of it.
			// Nothing is rewritten, so the caret can stay put.
			input.select();
			return true;
		}
		this.tabTargetPath = this.ladderTargetPath();
		// Where the third press lands depends on what the first one was
		// aimed at. Starting on the file's name, the run has climbed the
		// name and the rung above it is the path from the vault — which is
		// what a link or a search wants, and as far as a gesture about the
		// *name* has any business going. Starting on the empty space, the run
		// began on that path already, so the rung above it is the one the
		// machine knows. Either way a further press carries on up the same
		// ladder.
		this.tabStage = (this.editFromName ? 2 : 3) + (detail - 3);
		this.applyLadderStage();
		// A rung rebuilds the field, and opening a field clears the run — but
		// this run is the reason the field was rebuilt. Put it back, or the
		// press after a rung would be treated as the first press into a text
		// field and the ladder would stop after one step.
		this.climbFromClick = true;
		return true;
	}

	private handleFilenameClick(): void {
		this.editFromName = true;
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

	/**
	 * Lets a segment take a dropped file, moving it into the folder the
	 * segment names.
	 *
	 * The breadcrumb is the shortest route there is between a note and any
	 * folder above it: the destination is already on screen, so a move is one
	 * drag rather than a trip through the File Explorer's tree. What it
	 * cannot offer is a folder that is not on the path — that is what the
	 * dropdown and the text field are for.
	 *
	 * The label is worded through Obsidian's own table so it reads as the
	 * File Explorer reads, in whatever language the app is in, with this
	 * plugin's own string only as the fallback.
	 */
	private acceptDropsInto(el: HTMLElement, folderPath: string): void {
		makeDropTarget(this.plugin.app, el, folderPath, {
			// Obsidian's own wording where it has one, and plain English
			// where it does not — the same bargain every mirrored label in
			// here strikes, rather than a 45-locale string of this plugin's
			// own for a phrase the host already writes.
			label: (name) => {
				// The vault's own root folder has no name of its own, so the
				// label would read `Move into “”`. The vault's name is what
				// that segment shows and what a user would call it.
				const folder = name || this.rootSegmentName();
				return obsidianLabel(LABELS.moveInto, `Move into \u201C${folder}\u201D`, { folder });
			},
			onMoved: (file) => this.revealInExplorer(file),
		});
	}

	/**
	 * Shows a file where it now lives, in the File Explorer.
	 *
	 * A courtesy after a write rather than the write itself, so it keeps
	 * quiet when it cannot be done: the move succeeded either way, and a
	 * notice about the sidebar would be about the wrong thing. Only for
	 * files the vault tracks — there is no row in that tree for anything
	 * outside it.
	 */
	private revealInExplorer(file: TAbstractFile): void {
		if (this.plugin.app.vault.getAbstractFileByPath(file.path) !== file) return;
		const fileExplorer = this.plugin.app.internalPlugins.getPluginById("file-explorer");
		if (!fileExplorer) return;
		// Obsidian's own mark is shut off before the reveal, because the reveal
		// is what puts it on — and for a file that has just been made, the row
		// does not exist to take it off until its yellow has already shown.
		document.body.addClass(NO_NATIVE_FLASH_CLASS);
		this.timers.add(
			window.setTimeout(() => document.body.removeClass(NO_NATIVE_FLASH_CLASS), FLASH_MS),
		);
		try {
			fileExplorer.instance.revealInFolder(file);
		} catch {
			// The sidebar is not where the work happened; leave it be.
			return;
		}
		this.flashInExplorer(file.path);
	}

	/**
	 * Marks the row in Obsidian's accent colour, for a moment.
	 *
	 * Revealing flashes a file only when it is not already the one you are
	 * on — and after creating or moving a note it *is*, so the row simply
	 * went quietly active and the write had nothing to show for itself.
	 *
	 * Tried a few times over a short window rather than once: the row may
	 * not exist yet. Revealing can have to open the explorer leaf first, and
	 * a file that was *just created* has no row until the explorer hears the
	 * vault's own event — which is a tick or two after the write returns.
	 * The attempts stop as soon as one lands.
	 */
	private flashInExplorer(path: string): void {
		const flash = (): boolean => {
			const row = Array.from(
				document.querySelectorAll<HTMLElement>(".nav-file-title"),
			).find((el) => el.dataset.path === path);
			if (!row) return false;
			// Taken off on every attempt, not only the one that marks: the
			// reveal can put it back after we have been here, and two
			// colours running at once is what that looks like.
			row.removeClass(OBSIDIAN_FLASH_CLASS);
			if (row.hasClass(FLASH_CLASS)) return false;
			// Revealing marks the row Obsidian's own way as well, and that
			// marking carries `!important` — so it comes off rather than
			// being out-argued: two colours on one row is one colour too
			// many, and the one that answers "this is the file that just
			// moved" is ours.
			row.addClass(FLASH_CLASS);
			// The fading is the animation's business; this only clears up
			// after it, so a row is not left wearing a mark that has already
			// played out.
			this.timers.add(window.setTimeout(() => row.removeClass(FLASH_CLASS), FLASH_MS));
			return true;
		};
		flash();
		// Every tick runs, marking or not: the later ones are what keep the
		// other colour off while the reveal settles.
		for (const delay of FLASH_TRIES) {
			this.timers.add(window.setTimeout(flash, delay));
		}
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

		// The note is where you sent it, and the tree is where you look for
		// it afterwards — so it is shown there, rather than left for you to
		// go and find.
		this.revealInExplorer(this.file);
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

		// A copy is the one write here that leaves the row showing something
		// other than what it just did — the original stays put and the copy
		// opens in its own pane — so without a word it is easy to believe
		// nothing happened at all.
		new Notice(t("noticeCopied", { path: copy.path }));
		this.revealInExplorer(copy);

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
			this.descendCarrying(absolutePath, this.restAfterEditedSegment());
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
	private stepOutOfFolder(mark = false): boolean {
		// Read before anything moves: stepping out tears the field down, and
		// what it was holding is what has to survive the move.
		const rest = this.inputEl?.value ?? "";
		if (this.externalPath !== null) {
			// Stops at the location that was picked rather than walking on
			// up into the machine's directory layout, which is exactly what
			// drawing the row relative to that location was for.
			if (this.externalBase && samePath(this.externalPath, this.externalBase.path)) return false;
			const parent = externalParent(this.externalPath);
			// At the filesystem root there is nowhere further up; the
			// vault-root segment is still there to jump somewhere else.
			if (!parent) return false;
			const name = this.externalPath.slice(parent.length).replace(/^[\\/]+/, "");
			this.extendExternalPath(parent);
			this.enterTypingMode(pathBack(name, PATH_SEP, rest), mark ? name.length : "none");
			return true;
		}

		const current = this.browsePath ?? "";
		if (!current) return false; // already at the vault root, nothing to step out of

		const cut = current.lastIndexOf("/");
		const parent = cut === -1 ? "" : current.slice(0, cut);
		const name = cut === -1 ? current : current.slice(cut + 1);

		this.extendBrowsePath(parent);
		this.enterTypingMode(pathBack(name, "/", rest), mark ? name.length : "none");
		return true;
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
		// The locations dropdown lists places rather than children, and a
		// place is not a name to complete against — it is somewhere the whole
		// path is counted from. Tab sets in the one being pointed at, which
		// is what picking it does, so the key and the pointer agree here as
		// they do everywhere else.
		if (this.showingLocations) {
			// Whatever the names agree on is taken first, exactly as it is
			// anywhere else, so the press acts on the whole name rather than
			// on the half of it that was typed.
			const took = this.settleSuggestion(true);
			const at = input.selectionStart ?? 0;
			const segment = segmentBoundsAtCaret(input.value, at);
			const typedName = input.value.slice(segment.start, segment.end);
			const places = (this.suggest?.completions(typedName) ?? []).filter(
				(row) => row.kind === "location",
			);
			// The row being pointed at, when one is; failing that, the one
			// place the name can mean. Typing lets go of the highlight, so
			// after a keystroke it is the name that has to decide.
			const pointed = this.suggest?.highlighted() ?? null;
			const place =
				pointed?.kind === "location" ? pointed : places.length === 1 ? places[0] : null;
			if (place) {
				this.goToLocation(place.path);
				return;
			}
			// Several places still share the name: the offer went as far as
			// they agree and the press stops there, as it does at any fork.
			if (took) return;
		}

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
		// An offer standing in the field is what this press is for. It is
		// taken first, and taken as a step of the walk in its own right, so
		// the way back gives it back one press at a time like any other.
		const took = this.suggested !== null;
		const tookStep = took ? this.trailStep(false) : null;
		if (took) this.settleSuggestion(true);

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
		// One press, one step: whichever way this press goes from here, the
		// taking of the offer is the step it records.
		if (tookStep) this.tabTrail.push(tookStep);

		if (action.kind === "ladder") {
			// From the second rung: the name is already whole in the field —
			// completed by this very key, or chosen off the list — and the
			// first rung would take its extension back off, which is a press
			// spent going backwards. Widening starts from what you have. A
			// walk that *arrives* at a name is the other story and still
			// begins on the first rung, because there the name has only just
			// appeared and its extension is not yet the subject.
			this.startLadder(action.path, 1);
			return;
		}
		if (action.kind === "descend") {
			// The step is recorded by the way in itself, so that a folder set
			// in by a click is recorded exactly as one reached by a press —
			// unless taking the offer has already recorded this press.
			this.descendCarrying(action.path, this.restAfterEditedSegment(), resuming, !took);
			return;
		}
		if (took) {
			// The offer went as far as the names agree, and this press has
			// just taken all of it. Where they stop agreeing is a question
			// for you: walking on toward one of them would be the press
			// answering it, and picking the name that happens to sort first.
			// Arrow to one, or type past the fork.
			return;
		}
		// A press that only writes into the field moves the row nowhere, so
		// it records its own step. The ladder walks itself back by its own
		// arithmetic and records nothing.
		const step = this.trailStep(resuming);
		if (step) this.tabTrail.push(step);
		this.writeSegment(input, bounds, action.text);
	}

	/**
	 * Steps into a folder and carries the rest of the path in with it.
	 *
	 * The one way in, whichever gesture asked for it: Tab completing a name,
	 * `/` committing one, or an entry picked from the dropdown. A name that
	 * has been set in is set in, and what follows has to be the same however
	 * you set it — otherwise the press after the gesture means one thing
	 * after a click and another after a keypress. Picking a folder used to
	 * empty the field instead, throwing away a path the same folder reached
	 * with Tab would have kept.
	 *
	 * With the caret at the far end instead of on the next name, the press
	 * after this one read the file name at the end of the path, found nothing
	 * to complete, and jumped the ladder straight to the file's own folder:
	 * every folder in between swallowed by one press.
	 */
	private descendCarrying(folderPath: string, rest: string, given = false, record = true): void {
		// Every gesture that moves the row records where it moved from, so
		// the way back is the way in run backwards whichever way you came.
		// Only Tab used to record it, which made one Shift+Tab press swallow
		// a folder set in by a click *and* the one walked into before it.
		const step = record ? this.trailStep(given) : null;
		if (step) this.tabTrail.push(step);

		// What is carried is only ever what is really over there — unless
		// this is the very folder the rest of the path hangs from, in which
		// case it comes whole. Walking into `Dokumente` on the way to
		// `Dokumente/plans/untitled.md` is not a claim that `plans` exists;
		// it is how a path gets typed ahead of itself, and cutting there
		// lost everything past the first press. Swapping that folder for
		// another one is the other story, and the rest goes.
		const carried = this.tailBelongsHere(folderPath)
			? rest
			: this.reachableTail(folderPath, rest, this.externalPath !== null);

		if (this.externalPath !== null) this.extendExternalPath(folderPath);
		else this.extendBrowsePath(folderPath);

		const landing = asLanding(carried);
		if (landing === null) {
			this.enterTypingMode("");
			return;
		}
		// Another folder to walk: it opens marked, ready for the press after
		// this one.
		if (landing.select < landing.path.length) {
			this.enterTypingMode(landing.path, landing.select);
			return;
		}
		// One name left, and what it *is* decides what happens to it. A
		// folder is still somewhere to walk into, so it opens marked like
		// every other step of the walk — cutting the tail where it stops
		// existing can leave a folder standing there alone, and reading it
		// as the end of the path would strand the walk one press short of
		// the folder it was heading into.
		const external = this.externalPath !== null;
		const separator = external ? PATH_SEP : "/";
		const full = external
			? externalJoin(folderPath, landing.path)
			: `${folderPath}${separator}${landing.path}`;
		if (this.isFolderPath(full, external)) {
			this.enterTypingMode(landing.path, landing.path.length);
			return;
		}
		// A file ends the path, so the walk has arrived — and the ladder's
		// first rung is what it has arrived at. Landing with the caret parked
		// at the end instead cost a press that showed the name and marked
		// nothing, immediately before the rung that marks it.
		this.enterTypingMode(landing.path);
		this.startLadder(full);
	}

	/**
	 * Where the row stands and what the field holds, as one step of the walk
	 * to be given back later.
	 *
	 * Read past any preview: what a row is showing you is not what you had,
	 * and a rewind that put a preview back would hand you a name you never
	 * chose. Null when there is no field to record.
	 */
	private trailStep(given: boolean): TabStep | null {
		const input = this.inputEl;
		if (!input) return null;
		const where = { folder: this.browsePath, external: this.externalPath };
		const held = this.preview;
		if (!held) {
			return {
				...where,
				value: input.value,
				caret: input.selectionEnd ?? input.value.length,
				...markOf(input, given),
			};
		}
		const marked = held.selectionEnd > held.selectionStart;
		return {
			...where,
			value: held.text,
			caret: held.selectionEnd,
			...(marked
				? {
						mark: {
							start: held.selectionStart,
							end: held.selectionEnd,
							...(given ? { given: true } : {}),
						},
					}
				: {}),
		};
	}

	/**
	 * What the field holds after the segment being edited, as it was
	 * **typed** rather than as a preview is showing it.
	 *
	 * Pointing at an entry shows the path only as far as it exists over
	 * there, because pointing decides nothing. Choosing decides — and what
	 * you had is then what you keep, folders that are not there yet
	 * included, since committing a path is what creates them.
	 */
	private restAfterEditedSegment(): string {
		const input = this.inputEl;
		if (!input) return "";
		const held = this.preview;
		const text = held?.text ?? input.value;
		const end = held
			? held.segment.end
			: segmentBoundsAtCaret(input.value, input.selectionEnd ?? input.value.length).end;
		return text.slice(end).replace(/^[\\/]+/, "");
	}

	/**
	 * Offers what the folder's names agree on, after the caret and selected.
	 *
	 * Only ever from a keystroke of the user's own: everything this file
	 * writes into the field dispatches an untrusted `input` event, and an
	 * offer made from one of those would be the field completing its own
	 * completions.
	 */
	private offerSuggestion(input: HTMLInputElement): void {
		if (this.composing) return;
		// Nothing is offered into a selection, or from the middle of a name:
		// what is offered goes *after* what you are typing, and there has to
		// be a caret at the end of it for it to go after.
		const caret = input.selectionStart ?? 0;
		if (caret !== (input.selectionEnd ?? 0)) return;
		const bounds = segmentBoundsAtCaret(input.value, caret);
		if (caret !== bounds.end) return;

		const query = input.value.slice(bounds.start, bounds.end);
		if (!query) return;
		const rows = this.suggest?.completions(query) ?? [];
		const candidates = rows.map((row) => ({
			label: row.label,
			path: row.path,
			folder: row.kind === "folder",
		}));
		const add = planSuggestion(query, candidates);
		if (!add) return;

		input.value = input.value.slice(0, caret) + add + input.value.slice(caret);
		input.setSelectionRange(caret, caret + add.length);
		this.suggested = {
			start: caret,
			end: caret + add.length,
			prefix: commonPrefix(candidates.map((candidate) => candidate.label)),
		};
	}

	/**
	 * Takes the offered run, or takes it back, and leaves the field as though
	 * it had never been offered.
	 *
	 * Every way out of the field goes through here first — every key that is
	 * not a character, every commit, every step off into the list — so the
	 * rest of the row goes on reading a field that holds only what was
	 * typed. Returns whether there was anything to settle, which is what
	 * lets a press that only takes the offer back stop there.
	 */
	private settleSuggestion(accept: boolean): boolean {
		const run = this.suggested;
		const input = this.inputEl;
		this.suggested = null;
		if (!run || !input) return false;

		const value = input.value;
		if (accept) {
			// The whole segment is rewritten, not merely unselected: what you
			// typed may be spelled differently from what is on disk, and a
			// path that is only nearly right resolves to nothing at all.
			const start = segmentBoundsAtCaret(value, run.start).start;
			input.value = value.slice(0, start) + run.prefix + value.slice(run.end);
			const caret = start + run.prefix.length;
			input.setSelectionRange(caret, caret);
		} else {
			input.value = value.slice(0, run.start) + value.slice(run.end);
			input.setSelectionRange(run.start, run.start);
		}
		this.suggestQueryOverride = queryAtCaret(input);
		this.autoSizeInput?.();
		return true;
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
		// Whether this press is the one that leaves the ladder, which decides
		// what it may spend itself on below.
		let leftLadder = false;
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
			leftLadder = true;
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
		// Marking the whole segment is a rung the ladder has already shown —
		// the name with its extension — so a press coming down off the rung
		// below it would be spent showing that a second time. The way back
		// keeps the same rule the way forward does: never a press on
		// something that shows nothing new. From the ladder, the press that
		// leaves the last rung leaves the folder with it.
		if (!leftLadder && !marked && bounds.end > bounds.start) {
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
		if (this.stepOutOfFolder(true)) return;

		// Nowhere further up: the way back has reached the front of the path
		// and closes its loop exactly as the way forward does, on the rung
		// furthest from it — the path from the system root. Pressing on from
		// there narrows back down the rungs and out along the walk again, so
		// the two directions describe one ring rather than two dead ends.
		this.startLadderAt(3, this.standingTargetPath());
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
	private restartFrom(step: TabStep, text: string, selection: "all" | "none" | number): void {
		this.standWhere(step);
		this.enterTypingMode(text, selection);
	}

	/**
	 * A path as counted from the folder a step of the walk was standing in,
	 * or null when it does not hang from there at all.
	 *
	 * What the lap needs in order to come back: the step says *where* the
	 * walk began, and the target says *what* it built. Reading the path out
	 * of the step instead is what made a lap undo the walk.
	 */
	private pathFrom(step: TabStep, target: string): string | null {
		if (step.external !== null) {
			if (samePath(step.external, target)) return "";
			if (!isInside(target, step.external)) return null;
			return target.slice(step.external.length).replace(/^[\\/]+/, "");
		}
		const folder = step.folder ?? "";
		if (!folder) return target;
		if (target === folder) return "";
		return target.startsWith(`${folder}/`) ? target.slice(folder.length + 1) : null;
	}

	/** Hands the key over to widening the selection, over `target` or over whatever the row shows. */
	private startLadder(target: string | null, from = 0): void {
		this.rememberLadderStart();
		this.tabTargetPath = target ?? this.standingTargetPath() ?? this.ladderTargetPath();
		this.tabStage = from;
		const before = this.fieldState();
		this.applyLadderStage();
		// A rung that changes nothing is not worth a press. Clicking a note's
		// name already shows it without its extension, which is exactly what
		// the first rung shows — so from there the key starts on the second.
		if (this.tabStage === from && before !== null && before === this.fieldState()) {
			this.advanceLadder();
		}
	}

	/** The field as one string, for telling whether a press changed anything. */
	private fieldState(): string | null {
		const input = this.inputEl;
		if (!input) return null;
		return `${input.selectionStart ?? 0}:${input.selectionEnd ?? 0}:${input.value}`;
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

	/** The path the ladder describes when there is no field open: whatever the row is showing. */
	private ladderTargetPath(): string | null {
		if (this.externalPath !== null) {
			return this.externalFileName ? externalJoin(this.externalPath, this.externalFileName) : null;
		}
		return this.file?.path ?? null;
	}

	/**
	 * The path the *field* is naming, counted from the folder the row is
	 * standing in.
	 *
	 * What the ladder describes when a press found nothing to complete. The
	 * row's own file is the wrong answer there and was the old one: the walk
	 * may have carried you into a different folder entirely — swap a folder
	 * for a sibling and the rest of the path comes with you — and describing
	 * the note instead dragged the row back to the note's own parent, which
	 * looked like a completion and was really a teleport. What is in front of
	 * you is what the rungs are for, whether or not all of it exists yet.
	 */
	private standingTargetPath(): string | null {
		const input = this.inputEl;
		if (!input) return null;
		// Leading separators go: what the field holds is counted from where
		// the row stands, and a path is joined to that folder, not rooted.
		const typed = input.value.trim().replace(/^[\\/]+/, "");
		if (this.externalPath !== null) {
			return typed ? externalJoin(this.externalPath, typed) : this.externalPath;
		}
		const here = this.currentFolderPath();
		const target = typed ? (here ? `${here}/${typed}` : typed) : here;
		// An empty field at the vault root names nothing at all, and there is
		// no describing that; the row's own file is the only path left.
		return target || null;
	}

	/**
	 * A path split where it stops being real: the deepest folder along it
	 * that exists, and everything after that.
	 *
	 * Tab walks a path as far as it can be stepped into and leaves the rest
	 * standing in the field as text, so the rungs are drawn the same way —
	 * the chips only ever name folders you could really be in, and what
	 * could not be reached stays in front of you to be typed over.
	 *
	 * For a path that is entirely there this is the file's folder and the
	 * file's name, which is what the rungs have always shown.
	 */
	private asFarAsItExists(target: string): { base: string; rest: string } {
		const external = this.externalPath !== null;
		let base = target;
		if (external) {
			while (base && !isExternalFolder(base)) base = externalParent(base) ?? "";
		} else {
			// The vault root is "" and is always a folder, so this ends.
			while (base && !(this.plugin.app.vault.getAbstractFileByPath(base) instanceof TFolder)) {
				const cut = base.lastIndexOf("/");
				base = cut < 0 ? "" : base.slice(0, cut);
			}
		}

		const rest = target.slice(base.length).replace(/^[\\/]+/, "");
		if (rest) return { base, rest };

		// The path names a folder outright, so there is nothing left over to
		// widen a selection across. The rungs describe that folder from its
		// parent instead, which is what they do for a file.
		const separator = external ? PATH_SEP : "/";
		const cut = target.lastIndexOf(separator);
		return cut < 0
			? { base: "", rest: target }
			: { base: target.slice(0, cut), rest: target.slice(cut + 1) };
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
		// The first two rungs stand as deep down the path as it can really be
		// walked, and hold everything past that as text — which for a path
		// that is all there is the file's folder and the file's name.
		const { base: reached, rest } = this.asFarAsItExists(target);

		switch (this.tabStage) {
			case 0:
				// The stem of the last segment, however many segments there
				// are in front of it: `pathStem` looks for the dot in the
				// name rather than in the path, so a folder called `v1.2`
				// cannot pull the cut into itself.
				this.setLadderField(reached, rest, pathStem(rest).length);
				return;
			case 1:
				this.setLadderField(reached, rest, "all");
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
				// Somewhere this row was not drawn from, so there is no
				// folder here it could sensibly stand in: the rung shows the
				// name and leaves the row where it is.
				this.setLadderField("", name, "all");
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
				// Wrap: back to the front of the path, which closes the loop
				// without costing anything. A lap of the rungs is a way of
				// looking at the path, not a way of clearing it.
				//
				// The front of the *walk*, not of the ladder: the folders
				// were walked before the rungs began, and a lap that came
				// back only as far as the file name would leave you halfway
				// down a path you had asked to go round.
				//
				// Where the walk began is remembered; what it built is not
				// taken from that memory but from the target, which is the
				// path as it now stands. Replaying the remembered *text* undid
				// every step the walk had taken: pick a different sibling out
				// of the list halfway round, and the lap handed back the path
				// you set out from — which is to say the open note's, however
				// far you had walked from it. The four rungs before this one
				// all describe the target; this one used to describe the past.
				const began = this.tabTrail[0] ?? this.tabLadderStart;
				this.tabStage = null;
				this.tabTargetPath = null;
				this.tabLadderStart = null;
				this.tabTrail = [];

				const relative = began ? this.pathFrom(began, target) : null;
				if (began && relative !== null) {
					const landing = asLanding(relative);
					if (!landing) {
						this.restartFrom(began, "", "none");
						return;
					}
					// The front of the path opens marked, exactly as a click
					// on that folder would leave it, so the lap can be walked
					// again from where it started.
					//
					// Unless there is no folder in front of it to mark: a
					// bare name has nothing to walk, and what the lap comes
					// back to is then whatever the gesture that opened the
					// field had marked — a click on a note's name shows it
					// without its extension, and a lap that handed it back
					// *with* one would have cost something after all.
					const front = landing.select < landing.path.length;
					const opened = began.mark && began.mark.start === 0 ? began.mark.end : "all";
					this.restartFrom(began, landing.path, front ? landing.select : opened);
					return;
				}
				// Either there was no field to come back to, or the path no
				// longer hangs from where the walk began — it was walked out
				// of and away. The whole of it, from the vault root, is the
				// front that is true either way.
				if (!external) {
					const landing = asLanding(target);
					this.extendBrowsePath("");
					this.enterTypingMode(landing?.path ?? "", landing?.select ?? "none");
					return;
				}
				// Outside the vault there is no root to count from that the
				// row could stand in, so the first folder of the path is
				// where the walk would have begun.
				const first = target.split(separator)[0] ?? "";
				this.extendBrowsePath(first);
				this.enterTypingMode("");
			}
		}
	}

	/**
	 * Puts the ladder's text in the field with the browse path that makes it
	 * resolvable, on whichever side of the vault boundary the row is.
	 *
	 * Outside the vault the row moves only when the rung is counting from
	 * some other folder — passing nothing, or the folder already shown,
	 * leaves it standing where it is.
	 */
	private setLadderField(browseFrom: string, text: string, selection: "all" | number): void {
		if (this.externalPath === null) this.extendBrowsePath(browseFrom);
		else if (browseFrom && !samePath(this.externalPath, browseFrom)) {
			this.extendExternalPath(browseFrom);
		}
		this.enterTypingMode(text, selection);
	}

	private descendIntoTypedSegment(rawText: string): void {
		// Up to the end of the segment the caret is in — not the end of the
		// field. A field holding a path has more to the right of what is
		// being typed, and that part is carried in rather than committed as
		// though it had been typed as folders.
		const caret = this.inputEl?.selectionEnd ?? rawText.length;
		const bounds = segmentBoundsAtCaret(rawText, caret);
		const typed = rawText.slice(0, bounds.end).trim();
		if (!typed) return; // a stray "/" with nothing typed is a no-op
		const rest = rawText.slice(bounds.end).replace(/^[\\/]+/, "");

		// Outside the vault the folder is counted from the place the row is
		// standing in, as every other way in counts it. Resolving it against
		// the vault out there named a folder that has nothing to do with
		// where you are.
		if (this.externalPath !== null) {
			this.descendCarrying(externalJoin(this.externalPath, typed), rest);
			return;
		}
		const base = this.currentFolderPath();
		this.descendCarrying(normalizePath(base ? `${base}/${typed}` : typed), rest);
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
		// Nothing once you have typed: the row you were standing in is not
		// what the list is about any more, and a highlight left on it reads
		// as a choice already made — one that Enter would act on. An
		// untouched prefill is not typing, and keeps its place.
		if (this.suggestQueryOverride) return null;

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

	/**
	 * The folder the row is *on* — the one the field's first segment names,
	 * when it names a folder at all.
	 *
	 * Not the folder being listed: a folder click lists that folder's
	 * parent, so the one you came from is a row among its siblings and
	 * nothing else in the list says which. Standing inside a folder instead
	 * leaves the field empty and there is no such row, which is the honest
	 * answer — you are not on any of the things you are looking at.
	 *
	 * Read past a standing offer, which is text nobody has committed to: it
	 * would otherwise move the marking to a folder merely being suggested.
	 */
	private activeFolderPath(): string | null {
		const first = this.typedFieldValue().split(/[\\/]/)[0] ?? "";
		if (!first) return null;

		if (this.externalPath !== null) {
			const candidate = externalJoin(this.externalPath, first);
			return isExternalFolder(candidate) ? candidate : null;
		}
		const folder = this.currentFolderPath();
		const candidate = folder ? `${folder}/${first}` : first;
		return this.plugin.app.vault.getAbstractFileByPath(candidate) instanceof TFolder
			? candidate
			: null;
	}

	/** What the field holds with any offered run taken out of it — the text that is actually the user's. */
	private typedFieldValue(): string {
		const input = this.inputEl;
		if (!input) return "";
		const run = this.suggested;
		return run ? input.value.slice(0, run.start) + input.value.slice(run.end) : input.value;
	}

	/** Where autocomplete/typed-path resolution should be scoped to right now. */
	/**
	 * How much of the path after a previewed entry still names something
	 * under it.
	 *
	 * Standing in `Alpha` with `Alpha/2026/note.md` in the field and
	 * pointing at `Beta`, the `2026/note.md` is only worth showing if `Beta`
	 * has a `2026` with a `note.md` in it. Where it stops being real the
	 * text stops too — an entry with nothing of the sort under it shows
	 * nothing after the name at all, which is the honest answer to "what
	 * would landing here give me".
	 *
	 * Only what the pointer is on is judged this way. What you have *typed*
	 * keeps its whole path, however little of it exists yet: half a name is
	 * not a decision, and the folders it would be created in are the point
	 * of being able to type them.
	 */
	private tailUnder(value: PathSuggestion, tail: string): string {
		if (!tail) return "";
		// A location is a place to jump to rather than a step in this path,
		// and what a preview writes for one is its display name — there is
		// nothing here for the rest of the path to be counted from.
		if (value.kind === "location") return tail;
		// Nothing lives under a file, so nothing follows one.
		if (value.kind !== "folder") return "";
		// The folder the rest of the path hangs from shows all of it, for the
		// same reason committing it keeps all of it: pointing at where you
		// were already going is not a change of path.
		if (this.tailBelongsHere(value.path)) return tail;
		return this.reachableTail(value.path, tail, value.external === true);
	}

	/**
	 * Whether the rest of the path still belongs where it is about to be
	 * carried — which is to say, whether this folder is the one it hangs
	 * from rather than a swap for it.
	 *
	 * With nothing to hang from, it belongs: a path with no prefilled first
	 * segment behind it is one you typed, and none of it was inherited from
	 * a folder you have left. Cutting *that* at the first name it cannot
	 * find would take away the path you were in the middle of writing.
	 */
	private tailBelongsHere(folderPath: string): boolean {
		if (this.tailAnchor === null) return true;
		const separator = this.externalPath !== null ? PATH_SEP : "/";
		const cut = folderPath.lastIndexOf(separator);
		const name = cut < 0 ? folderPath : folderPath.slice(cut + 1);
		return name.toLowerCase() === this.tailAnchor.toLowerCase();
	}

	/**
	 * The opening of `tail` that still names something under `folder`.
	 *
	 * The one rule for how much of a path is worth showing, asked by
	 * everything that changes which folder the rest of the path hangs from:
	 * the preview as you point at an entry, and the commit as you set one
	 * in. What comes back is a slice of the text you gave, so separators and
	 * spelling survive untouched; the cut lands in front of the first name
	 * that is not there, which for a first name that is not there is the
	 * whole of it.
	 */
	private reachableTail(folder: string, tail: string, external: boolean): string {
		if (!tail) return "";
		let at = folder;
		// Leading separators optional: a carried tail has had them stripped
		// already, while the text behind a previewed segment still has one.
		for (const part of tail.matchAll(/[\\/]*([^\\/]+)/g)) {
			const name = part[1];
			const next = external ? externalJoin(at, name) : at ? `${at}/${name}` : name;
			if (!this.entryExists(next, external)) return tail.slice(0, part.index ?? 0);
			at = next;
		}
		return tail;
	}

	/** Whether anything at all is at a path — a folder or a file, on either side of the vault boundary. */
	private entryExists(path: string, external: boolean): boolean {
		if (external) return isExternalFolder(path) || isExternalFile(path);
		return this.plugin.app.vault.getAbstractFileByPath(path) !== null;
	}

	/** Whether a path names a folder, which is to say somewhere the walk could go on into. */
	private isFolderPath(path: string, external: boolean): boolean {
		if (external) return isExternalFolder(path);
		return this.plugin.app.vault.getAbstractFileByPath(path) instanceof TFolder;
	}

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
		// Whatever the pointer had opened closes: the row is about to be
		// edited, and a name still held wide under the field is width the
		// field is not getting.
		this.openName(null);
		// No run in progress until a click on the row says so. Reached from
		// the focus command or a key, the field is a text field from the
		// start and a double-click in it picks out a word.
		this.climbFromClick = false;
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

		// A whole first segment opening marked is what the rest of the path
		// hangs from. Only a whole one: the ladder marks a *stem* — a name
		// without its extension — and nothing hangs from half a name.
		const after = initialText[selectionEnd];
		this.tailAnchor =
			selectionEnd > 0 && (after === undefined || after === "/" || after === "\\")
				? initialText.slice(0, selectionEnd)
				: null;

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
			// Measured against its own glyphs, wherever it is hosted. It used
			// to take the whole width the row could give it instead, which
			// meant a field holding three characters squeezed every folder
			// beside it down to its floor for no reason. Sized to what is in
			// it, the field asks for what it needs and the trail keeps the
			// rest — and it still comes first when there is not enough for
			// both, because a field cannot give anything up (see the
			// `lure-editing` rule in styles.css).
			const content = textWidth(inputEl.value, inputEl) + INPUT_SLACK_PX;
			inputEl.style.width = `${Math.max(INPUT_MIN_PX, Math.ceil(content))}px`;
			// A field grows with what is typed into it, and a path is longer
			// than a pane long before it is finished. Nothing here can be
			// shortened — it is text being edited, not names being fitted —
			// so the row is simply made scrollable, which is what the fitter
			// does when it runs out of room for the same reason.
			this.letRowScroll(true);
		};
		autoSize();

		inputEl.focus();
		if (selectionEnd > 0) {
			inputEl.setSelectionRange(0, selectionEnd);
			// Focusing a field scrolls it to its caret, and settling the
			// selection afterwards can leave it showing the far end of a path
			// that does not fit. What the click was about is at the front —
			// the folder being replaced, and after it whatever is offered or
			// typed — so the front is what the field is left showing, inside
			// the field and on the row alike.
			inputEl.scrollLeft = 0;
			// The row is made scrollable first, or there is nowhere to scroll
			// to; and again on the next frame, because focusing a field also
			// makes the browser scroll every box around it to reveal the
			// caret, and that runs after this does.
			const show = (): void => {
				if (!inputEl.isConnected) return;
				this.letRowScroll(true);
				this.scrollIntoRow(host === this.filenameEl ? this.filenameEl : inputEl);
			};
			show();
			window.requestAnimationFrame(show);
		} else {
			inputEl.setSelectionRange(inputEl.value.length, inputEl.value.length);
		}

		const onKeydown = (evt: KeyboardEvent) => {
			// The offered run is settled before anything below looks at the
			// field, so every handler reads a value holding only what was
			// typed — and, where the press takes the offer, exactly what was
			// taken.
			if (this.suggested) {
				const key = evt.key;
				if (key === "Backspace" || key === "Delete") {
					// Taking it back is the whole of this press. Nothing you
					// typed is deleted with it.
					evt.preventDefault();
					this.settleSuggestion(false);
					return;
				}
				if (key === "ArrowRight" || key === "End") {
					evt.preventDefault();
					this.settleSuggestion(true);
					return;
				}
				if (key === "Enter" || key === "/") {
					// Taken, and then the press goes on meaning what it has
					// always meant.
					this.settleSuggestion(true);
				} else if (key === "Tab" && !evt.shiftKey) {
					// Left standing: the completion below takes it, so that
					// it can record where the field stood beforehand and
					// Shift+Tab has something to give back.
				} else if (key.length !== 1 || evt.ctrlKey || evt.metaKey) {
					this.settleSuggestion(false);
				}
				// An ordinary character is left alone: the run is selected,
				// so the browser types over it, and what is offered next is
				// worked out from the field afterwards. That is the swallowing
				// happening by itself, one letter at a time.
			}

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

		// The empty space counts its presses: one takes the path without the
		// extension, two take it with, three take the path the machine
		// knows. `detail` is the browser's own click counter, so this needs
		// no timer of its own and cannot disagree with what the platform
		// considers a multi-click. The first press is the one that opened
		// this field, and is handled where the row is clicked.
		const onClick = (evt: MouseEvent) => {
			if (this.climbSelection(evt.detail)) evt.preventDefault();
		};
		inputEl.addEventListener("click", onClick);

		// The list follows the caret. Nothing but typing used to move it, so
		// picking out a different part of the path by hand — dragging over
		// it, or arrowing along — left the dropdown still listing the folder
		// the field had opened on. Hovering a row of that list then wrote its
		// name into bounds the caret had long since left: the right name, in
		// the wrong place, taken from a list of the wrong folder's children.
		//
		// Skipped while a preview is standing, because then it is the list
		// moving the caret rather than the user, and re-querying from a
		// previewed value would rebuild the list under the row being pointed
		// at.
		// Which segment the caret was in when the field opened. Focusing a
		// field can report a selection without one having been made, and
		// re-querying from that is a rebuild of the list nobody asked for —
		// which is enough to lose the row the walk was standing on.
		const segmentKey = (): string => {
			const bounds = segmentBoundsAtCaret(inputEl.value, inputEl.selectionEnd ?? 0);
			return `${bounds.start}:${bounds.end}`;
		};
		let standingIn = segmentKey();

		const onCaretMoved = (evt: Event) => {
			// Not for the keys the field answers itself. Tab walks the path,
			// Enter commits, the up and down arrows move through the list —
			// all of them move the caret as part of doing something else, and
			// all of them arrive here as a `keyup` after the handler that
			// meant something has already run. Re-reading the caret then is
			// reading the *result* of a gesture as though it were one.
			if (evt instanceof KeyboardEvent && FIELD_DRIVING_KEYS.has(evt.key)) return;
			// Nor while a preview or an offer is standing. Both put text in
			// the field and move the caret to the end of it, so the segment
			// looks as though it has changed when nothing the user did has —
			// and re-querying would rebuild the list under the row being
			// pointed at, or throw away the run being offered.
			if (this.preview || this.suggested) return;
			// A different segment, not merely a different caret. Moving
			// within one changes nothing about which folder is being listed
			// or what it is being filtered by.
			const key = segmentKey();
			if (key === standingIn) return;
			standingIn = key;
			const query = queryAtCaret(inputEl);
			if (query === this.suggestQueryOverride) return;
			this.suggestQueryOverride = query;
			inputEl.dispatchEvent(new Event("input"));
		};
		// Three events rather than `selectionchange` on the document, so they
		// go when the field does: dragging over the text fires `select`, the
		// sideways arrows `keyup`, and a click placing the caret `mouseup`.
		for (const moved of ["select", "keyup", "mouseup"]) {
			inputEl.addEventListener(moved, onCaretMoved);
		}

		const onInput = (evt: Event) => {
			// Only a genuine keystroke or paste retires the prefill. The
			// `input` events dispatched from code below — to open the
			// popover, and to fill the field from a suggestion — are
			// untrusted, and must not be mistaken for the user typing.
			if (evt.isTrusted) {
				// Typing ends the run that opened the field: from here the
				// field is being written in, and a double-click in it means
				// what it means anywhere else.
				this.climbFromClick = false;
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
				// Whatever was offered before this keystroke is gone: either
				// it was typed over, or the caret has moved off the end of it.
				this.suggested = null;
				// An edit that took text away is never answered by text
				// appearing, or there would be no way to back out of a name
				// the folder kept offering. The event says which it was —
				// asking the *keyboard* would miss a paste and an IME, which
				// arrive with no key pressed at all.
				const edit = (evt as InputEvent).inputType ?? "";
				if (!edit.startsWith("delete")) this.offerSuggestion(inputEl);
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
		const onCompositionStart = () => {
			this.composing = true;
			this.settleSuggestion(false);
		};
		const onCompositionEnd = () => {
			this.composing = false;
			this.offerSuggestion(inputEl);
			autoSize();
		};

		inputEl.addEventListener("keydown", onKeydown);
		inputEl.addEventListener("input", onInput);
		// Writing into the field mid-composition tears the composition up,
		// which is every keystroke of Japanese, Korean or Chinese input.
		inputEl.addEventListener("compositionstart", onCompositionStart);
		inputEl.addEventListener("compositionend", onCompositionEnd);
		inputEl.addEventListener("dblclick", onDblClick);
		window.addEventListener("keydown", onEscapeCapture, true);
		this.editCleanup = () => {
			inputEl.removeEventListener("keydown", onKeydown);
			inputEl.removeEventListener("input", onInput);
			inputEl.removeEventListener("compositionstart", onCompositionStart);
			inputEl.removeEventListener("compositionend", onCompositionEnd);
			inputEl.removeEventListener("dblclick", onDblClick);
			window.removeEventListener("keydown", onEscapeCapture, true);
			this.plugin.app.keymap.popScope(scope);
			this.suggestQueryOverride = null;
			this.tabGivenBack = null;
			this.suggested = null;
			this.composing = false;
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
				currentFolder: this.activeFolderPath(),
				shouldList: (child) => this.shouldListChild(child),
				shouldListExternal: (child) => this.shouldListExternalChild(child),
				warnsOnOpen: (extension) => this.warnsOnOpen(extension),
				queryOverride: this.suggestQueryOverride,
				offered: this.suggested
					? {
							typedLength: this.suggested.prefix.length - (this.suggested.end - this.suggested.start),
							prefix: this.suggested.prefix,
						}
					: null,
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
					this.descendCarrying(value.path, this.restAfterEditedSegment());
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
		// A row of the list is about to write into the field, and what it
		// writes replaces the segment — offered run and all. Taking the offer
		// back first is what keeps the text it holds on to, and gives back,
		// the text the user actually typed.
		this.settleSuggestion(false);
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

		// A location is not a step inside this path but a place to count the
		// whole of it from, so pointing at one replaces the field outright.
		// Swapping it in as though it were a segment kept the *old* place's
		// path in front of it — which only looked right because vaults tend
		// to sit side by side in one folder, and spliced "root" or your home
		// folder into the middle of the open vault's path when they did not.
		//
		// What follows it is the open note's own path, as deep as it really
		// goes over there — the same path picking the place would land you
		// on, which is the point of showing it before you commit.
		if (value.kind === "location") {
			const twin = this.twinOfCurrentFile(value.path);
			this.tabGivenBack = null;
			input.value = twin ? externalJoin(value.path, twin.path) : value.path;
			// The place itself is what a press would replace, so the place
			// itself is what is marked — all of it, not the last word of it.
			input.setSelectionRange(0, value.path.length);
			this.autoSizeInput?.();
			return;
		}

		// Only the segment being edited is swapped; everything to the right of
		// it stays, as far as it still means anything under the entry being
		// pointed at. Pointing at a folder asks "what if this step were that
		// one", not "throw the rest of the path away" — but a rest that names
		// nothing over there is not a path either, so it is shown only as far
		// down as it is real. Every preview is built from the text as it was,
		// so moving through the list does not compound, and letting go of the
		// list brings the whole of it back: nothing is decided until a name
		// is typed or chosen.
		const { start, end } = base.segment;
		// The mark Shift+Tab left is gone the moment the list writes its own
		// selection over it; what is showing now is a row, not a retreat.
		this.tabGivenBack = null;
		input.value =
			base.text.slice(0, start) + value.label + this.tailUnder(value, base.text.slice(end));
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
		// Unquoted before anything looks at it: a path handed over by a file
		// manager arrives wrapped, and every branch below — the URL check,
		// the folder lookup, the name being created — would otherwise be
		// asked about a name that begins with a quotation mark.
		const trimmed = unquotePath(rawText);
		if (!trimmed) {
			// Nothing in the field names anything to open — standing in an
			// empty folder, say, where there was never anything to complete.
			// Closing the row here looked exactly like opening something,
			// which is the one thing that did not happen; the field stays up
			// so the path can be finished, and Escape is still the way out.
			new Notice(t("noticeNoSelection"));
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
			this.revealInExplorer(newFile);
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
	private startLadderAt(stage: number, over: string | null = null): void {
		// `over` is what the field is naming, for the callers that have one
		// open; the rest are opening the row from nothing and the path it is
		// showing is the only one there is.
		const target = over ?? this.ladderTargetPath();
		if (target === null) {
			this.startFullPathEdit();
			return;
		}
		this.rememberLadderStart();
		this.tabTargetPath = target;
		this.tabStage = stage;
		this.applyLadderStage();
	}

	/**
	 * This note again, in a tab of its own — the empty space's answer to a
	 * held modifier or a middle press.
	 *
	 * Opening the file that is already open is what duplicating a tab
	 * means; there is nothing else the gesture could sensibly do out here,
	 * where the row names one file and no folder. The new tab's copy is
	 * flashed in the tree, because two tabs of one note look alike and the
	 * tree is where you can see which note they are.
	 *
	 * Returns whether it acted, so the caller can fall through to editing
	 * the path when no modifier was held.
	 */
	private duplicateTab(evt: MouseEvent): boolean {
		const paneType = this.paneTypeFor(evt);
		if (!paneType || !this.file) return false;
		const file = this.file;
		void this.plugin.app.workspace
			.getLeaf(paneType)
			.openFile(file)
			.then(() => this.revealInExplorer(file));
		return true;
	}

	private startFullPathEdit(selection: "all" | "stem" = "all"): void {
		this.editFromName = false;
		// How much of the path opens marked. The empty space is the gesture
		// for taking the whole path, and a first press takes the part of it
		// you would retype — the extension is rarely the thing being
		// changed. A second press widens over that too; see `onClick`.
		const marked = (text: string): "all" | number =>
			selection === "all" ? "all" : pathStem(text).length;

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
				this.enterTypingMode(relative, marked(relative));
				return;
			}
			// Above the place it was drawn from — reachable by typing an
			// absolute path — where the absolute form is the only honest one.
			this.enterTypingMode(here, marked(here));
			return;
		}
		if (!this.file) return;
		// Identical to clicking the delimiter right after the vault name
		// — browsing from the vault root, with the same autocomplete —
		// except the whole current path starts out filled in and
		// selected, so typing replaces it outright.
		this.extendBrowsePath("");
		this.enterTypingMode(this.file.path, marked(this.file.path));
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
		// Where the press that produced this click went *down*. A click is
		// reported against the nearest ancestor of the press and the
		// release, so sweeping a selection out of the field and letting go
		// over the editor reports a click on the editor — the row never sees
		// it, and the session it was in the middle of ended under the
		// user's hand. What matters is where the gesture began.
		const onDown = (evt: MouseEvent) => {
			const container = this.titleEl.parentElement;
			this.pressedInRow = Boolean(container?.contains(evt.target as HTMLElement));
		};
		document.addEventListener("mousedown", onDown, true);
		this.documentPressDown = onDown;

		const handler = (evt: MouseEvent) => {
			const container = this.titleEl.parentElement;
			const target = evt.target as HTMLElement;
			if (container?.contains(target)) return;
			// A selection dragged out of the field and released outside it.
			// The release is not a click away from the edit; it is the end
			// of one.
			if (this.pressedInRow) {
				this.pressedInRow = false;
				return;
			}
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
		if (this.documentPressDown) {
			document.removeEventListener("mousedown", this.documentPressDown, true);
			this.documentPressDown = null;
		}
		this.pressedInRow = false;
		if (!this.documentClickAway) return;
		document.removeEventListener("click", this.documentClickAway, true);
		this.documentClickAway = null;
	}
}
