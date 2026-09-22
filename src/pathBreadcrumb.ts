import {
	FileSystemAdapter,
	FileView,
	Keymap,
	Menu,
	Notice,
	PaneType,
	Platform,
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
import { commonPrefix, planOffer, planTab } from "./tabComplete";
import { FolderChildSuggest, MODIFIED_ENTER, guardFieldKeys, pageLabel, PathSuggestion } from "./folderChildSuggest";
import { ExternalChild, PATH_SEP, externalJoin, externalParent, externalSegments, isExternalFile, isExternalFolder, listExternalChildren } from "./externalFs";
import {
	CURRENT_VAULT_ICON,
	LOCATION_ICONS,
	SystemLocation,
	applyIcon,
	expandHome,
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
	readExternalFile,
	trashExternalEntry,
} from "./externalFileOps";
import { ExternalFileView, extensionOf, openExternalFile, EXTERNAL_VIEW_TYPE } from "./externalFileView";
import { showExternalMenu, showInFolder } from "./externalMenu";
import { UrlTarget, classifyTypedTarget, isAbsolutePath, slashBelongsToScheme, unquotePath } from "./urlTargets";
import {
	DroppedContent,
	appendToNote,
	carriesContent,
	isVaultDrag,
	readDroppedContent,
} from "./dropPayload";
import { NavMove } from "./navLock";
import {
	FOLDER_NAME_TOKEN,
	FOLDER_NOTES_PLUGIN_ID,
	FOLDER_NOTE_PLUGIN_IDS,
	START_PAGE_PLUGIN_IDS,
	GestureTarget,
	RightClickCounter,
	classifyTarget,
} from "./segmentGestures";
import { LABELS, obsidianLabel } from "./obsidianLabels";
import { makeDraggable, makeDropTarget, showContextMenu } from "./nativeFileItem";
import { warnsOnOpen } from "./fileKinds";
import { t } from "./lang";
import { confirmAction } from "./prompts";
import { askAboutCollision } from "./collisionModal";

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
/**
 * The row-level mirrors of three states the stylesheet used to ask about with
 * `:has()`.
 *
 * `:has()` on the header container is re-evaluated whenever anything inside it
 * changes, and the fitting pass rewrites the names in it constantly — so the
 * one selector that read "this row is ours" was the most expensive thing in
 * the stylesheet, and the least necessary: this class knows the answer already.
 *
 * The order matters and is the whole risk of the trade. `:has()` applies itself
 * the instant the child exists; a marker has to be put on first and taken off
 * last, or there is a frame where the row is ours and does not look it.
 */
const ROW_ON_ATTR = "lureOn";
/** Row-level mirror of EDITING_CLASS on the filename box. */
const EDITING_ROW_CLASS = "lure-editing-row";
/** On whichever box holds the name currently shown in full — see NAME_OPEN_CLASS. */
const NAME_HOST_CLASS = "lure-name-host";
/** The two boxes that can hold an opened name; only one ever does at a time. */
const NAME_HOST_SELECTOR = ".lure-filename, .lure-vault-wrapper";
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
 * Reddens the open field while what is in it names nothing yet — the state
 * in which Enter stops meaning "open that" and starts meaning "make that".
 *
 * The whole field rather than only the parts that are missing: an `<input>`
 * has no way to colour part of its own text, and the alternative — a
 * mirrored copy of the path underneath transparent text — buys per-segment
 * precision at the price of keeping two elements in agreement about
 * scrolling, fonts and bidi on the row's hottest path.
 */
const WILL_CREATE_CLASS = "lure-will-create";
/**
 * Blue ring on the row while a drag is over something that would take it as
 * *content*, and again while the field is holding what such a drop carried.
 *
 * One class for both because it is one statement: what happens next is
 * about the text you are carrying. Blue rather than the accent, which is
 * what Obsidian's own drop highlight uses — a drag onto a folder segment
 * still means *move it there*, and the two answers to the same gesture have
 * to be told apart at a glance.
 */
const DROP_CONTENT_CLASS = "lure-drop-content";
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
/**
 * When a name is being judged: as it is written, or as it is used.
 *
 * The two questions differ by one rule — whether something already answers
 * to the name — because a half-typed name may collide with a real file and
 * still be on its way somewhere else entirely.
 */
type ValidationStage = "typing" | "commit";
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
/**
 * The `…` of a clipped part, as an element of its own beside it: no width,
 * so showing it moves nothing, and drawn over the edge where the part's text
 * fades out. See `markClipped`.
 */
const NAME_ELLIPSIS_CLASS = "lure-name-ell";
/** On a part whose text runs past its box, and on the `…` that goes with it. */
const CLIPPED_CLASS = "is-clipped";
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

/**
 * How much wheel travel a row of the dropdown costs, and how long a run of
 * turns stays one gesture. A trackpad sends many small deltas where a mouse
 * sends one notch, so the travel is banked rather than counted in events;
 * the run is forgotten once the wheel has been still, or a stray flick later
 * would land on a row it had already walked past.
 */
const WHEEL_STEP_PX = 40;
const WHEEL_RUN_MS = 600;
/** A line-mode wheel reports rows, not pixels; this is what a row is worth. */
const WHEEL_LINE_PX = 16;

/**
 * The rung the rename key's cycle ends on. Past it the key goes back to the
 * heading rather than round the ladder again: Tab's lap is a way of looking
 * at the path, while this key alternates between two places to rename in.
 */
const LAST_RENAME_RUNG = 3;
/** The padlock opens and shuts again well inside half a second. */
const PADLOCK_FLASH_MS = 250;
/** How soon a second rename press counts as having pressed the padlock. */
const PADLOCK_DOUBLE_MS = 500;
const PADLOCK_FLASH_CLASS = "lure-padlock-flash";
/** Put on a segment whose folder has a note, so the delimiter after it can say so. */
const FOLDER_NOTE_CLASS = "lure-has-folder-note";
/** On the vault's own delimiter while a start-page plugin has a page for it to open. */
const START_PAGE_CLASS = "lure-has-start-page";
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

/**
 * Where in the field the list is about: the caret, or the start of a
 * selection. Everything in front of it counts as settled — the folders, and
 * the letters of the name typed so far — and everything from it on is what
 * the list is offering to fill in. Selecting the whole field is the same
 * rule, and lists from the root.
 */
function listedFrom(input: HTMLInputElement): number {
	return input.selectionStart ?? input.value.length;
}

/** What the list filters by: the part of the segment in front of `listedFrom`. */
function queryBeforeCaret(input: HTMLInputElement): string {
	const at = listedFrom(input);
	const { start } = segmentBoundsAtCaret(input.value, at);
	return input.value.slice(start, at);
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
	/** The box holding that name, marked so it can widen with it. */
	private nameHostEl: HTMLElement | null = null;
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
	/**
	 * What a drop onto the vault name or a folder was carrying, held until
	 * the field it opened is committed to a note.
	 *
	 * The field is the naming half of that gesture — drop the text, then say
	 * where it goes — so this outlives the drop and dies with the field:
	 * cancelling the row cancels the paste, which is the only way out that
	 * does not need a second gesture of its own.
	 */
	private pendingDrop: DroppedContent | null = null;
	/** Depth of dragenter/dragleave pairs over the row, so leaving a child is not leaving the row. */
	private dropDepth = 0;
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
	private suggested: { start: number; end: number; prefix: string; agreed: boolean } | null = null;
	/** Whether an offer stood in the field when a row began previewing, so leaving the list puts it back. */
	private offerBeforePreview = false;
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
	/** Wheel travel not yet spent on a row, and when it last turned. */
	private wheelDelta = 0;
	private wheelAt = 0;
	/** When the rename key last asked the padlock, so a second press can answer it. */
	private padlockAskedAt = 0;
	/** Set the moment teardown begins, so the render path stops rebuilding what it is dismantling. */
	private destroyed = false;
	/**
	 * The location the unlock was granted for. Held so the permission can
	 * outlive the repaints that punctuate working in one place — a move
	 * completes, a click lands outside the input — and end only when the row
	 * is genuinely somewhere else.
	 */
	private unlockedBase: string | null = null;
	/** True while the vault-root dropdown is listing places to jump to rather than a folder's contents. */
	private showingLocations = false;
	/**
	 * The folder of an absolute path standing in the field while the row is
	 * otherwise inside the vault, or null. It is what the opening segment is
	 * drawn from, so the row never claims a vault a typed path has left.
	 */
	private typedAbsolute: string | null = null;
	/**
	 * The note F2 or the focus command last left the field for, at the end
	 * of their cycle. Their next press on it goes where Tab's lap goes — the
	 * root folder — so every step Tab reaches, they reach too. Any other way
	 * into the field, or another note, lets it go.
	 */
	private lapArmedFor: string | null = null;
	/** Name of the external file this leaf is showing, when it holds one instead of a note. */
	private externalFileName: string | null = null;

	constructor(
		private plugin: BreadcrumbPathPlugin,
		private manager: BreadcrumbManager,
		private leaf: WorkspaceLeaf,
		private titleEl: HTMLElement,
	) {
		this.titleEl.addClass(PATCHED_CLASS);
		// Not hidden here: whether Obsidian's title goes is decided by what
		// this row manages to draw, and that is not known until it has drawn
		// it (see `render`). Hiding it on the way in left every patched leaf
		// with no row of its own — a sidebar pane holding no file — showing
		// nothing at all until some later refresh happened along.
		this.titleEl.setAttribute("contenteditable", "false");

		this.vaultSegmentEl = createSpan();
		this.vaultSegmentEl.addClass("lure-vault-wrapper");

		this.filenameEl = createDiv();
		this.filenameEl.addClass("lure-filename");
		// Before the insert, not after: every rule that dresses this row keys
		// off the attribute, so a row that gained its filename first would
		// paint one frame with Obsidian's own layout and then jump.
		if (this.titleEl.parentElement) this.titleEl.parentElement.dataset[ROW_ON_ATTR] = "";
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
			// Outside the vault this button is the far half of the padlock,
			// so the press that leaves rename mode is the press that shuts
			// the padlock again: the permission never outlives the thing it
			// was opened for, and there is one control to learn instead of
			// two with an order between them.
			this.setRenameMode(!this.renameMode);
		});

		// The same slot as the rename toggle, because it gates exactly what
		// that toggle does once the row has left the vault: outside, a shut
		// padlock is what shows, and opening it is what puts the toggle
		// there. Two icons side by side, one gating the other, made the
		// reader learn an order; one slot states it. Hidden entirely inside
		// the vault — there is nothing to unlock in your own vault, and a
		// permanently inert padlock in the header would only raise the
		// question of what it is for.
		this.unlockButtonEl = createSpan();
		this.unlockButtonEl.addClass("clickable-icon", "view-action", "lure-unlock-btn");
		// One state, so drawn once here rather than on every render: the open
		// padlock does not exist any more — opening it is what replaces it.
		setIcon(this.unlockButtonEl, "lock");
		this.unlockButtonEl.setAttribute("aria-label", t("externalUnlockLabel"));
		this.unlockButtonEl.addEventListener("click", (evt) => {
			evt.stopPropagation();
			// Only ever opens: once open it hands the slot to the rename
			// toggle, and shutting it again is that button's third press.
			this.externalWritesUnlocked = true;
			// Granted for this location, not for this moment.
			this.unlockedBase = this.externalBase?.path ?? this.externalPath;
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
				if (paneType && this.file) {
					this.navigateToFile(this.file, paneType, this.focusesNewTab(evt));
				} else {
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
			// The space keeps opening the field, and says where you are while
			// it does: the note you are editing gets its row in the File
			// Explorer, so the tree follows the pane without a second gesture.
			// The field first, the tree after it: revealing focuses the row it
			// scrolls to, so a reveal in front of the field opened a field
			// nothing could be typed into. Opened first, it is the field that
			// the reveal takes the caret from — and gives it straight back.
			this.startFullPathEdit("stem");
			this.revealCurrentFile();
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
			if (!container.hasClass(SCROLL_CLASS)) {
				// Nothing to scroll sideways, so the wheel is free to mean the
				// other thing a wheel means over a list of names: walk it.
				if (evt.shiftKey || evt.deltaX !== 0 || evt.deltaY === 0) return;
				if (this.wheelThroughEntries(evt)) evt.preventDefault();
				return;
			}
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
			this.openFolderInPane(folderPath, paneType, this.focusesNewTab(evt));
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
				this.navigateToFile(this.file, this.paneTypeFor(evt) || "tab", this.focusesNewTab(evt));
				return;
			}
			// A delimiter names the folder before it, and a middle press on
			// one means what the vault name's already means: that folder,
			// somewhere else. Where a folder note exists it is the thing the
			// folder *is*, so that is what opens; where none does there is
			// nothing to open, and the tab stands at the folder with the list
			// showing instead — which is the same answer one step down from
			// the vault name's own middle press, and never nothing.
			if (el.closest(".view-header-breadcrumb-separator")) {
				const folderPath = this.folderPathForEvent(evt, "delimiter");
				if (folderPath === null) return;
				evt.preventDefault();
				const folder = this.plugin.app.vault.getAbstractFileByPath(folderPath);
				const note = folder instanceof TFolder ? this.folderNoteFor(folder) : null;
				if (note) this.navigateToFile(note, this.paneTypeFor(evt) || "tab", this.focusesNewTab(evt));
				else this.browseInNewTab(folderPath, this.focusesNewTab(evt));
				return;
			}
			const segment = el.closest<HTMLElement>(".view-header-breadcrumb");
			if (!segment || segment.closest(".lure-vault-wrapper")) return;
			const folderPath = this.nativeSegmentPath(segment);
			if (folderPath === null) return;
			evt.preventDefault();
			this.openFolderInPane(folderPath, this.paneTypeFor(evt) || "tab", this.focusesNewTab(evt));
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

		// A second press on whichever part of the row *opens* the folder
		// makes the note that folder does not have yet, and goes to it. One
		// press has always meant "the thing this folder is"; where there is
		// no such thing yet, two presses say so.
		//
		// Which part that is moves with the swap setting, exactly as the
		// underline does — the delimiter carries folder-note duty while
		// names open the dropdown, the name carries it when they are
		// swapped — so the gesture is always on the target that was already
		// about folder notes, and never on one whose second press is spoken
		// for. Rename mode is out: nothing on the row opens a folder while a
		// move is pending, and making a file is not picking a destination.
		//
		// The single press still happens first, and is left to. Suppressing
		// it would mean holding *every* press behind a double-click timer,
		// which is the cost the right-click run pays and is not worth paying
		// on the row's most-used click.
		// Dropping *content* onto the row, which is a different gesture from
		// dropping a file onto it. A file dragged out of this vault still
		// means "move it into that folder", and Obsidian's own drag manager
		// answers it on the folder segments; these listeners take what that
		// one does not — text from anywhere, a file from the desktop, and a
		// vault file dropped somewhere a move was never on offer.
		//
		// Plain DOM listeners rather than `dragManager.handleDrop`: that API
		// only ever sees Obsidian's own payload, and text dragged out of an
		// editor or in off the desktop is not one.
		container?.addEventListener("dragover", (evt) => {
			if (!this.contentDropTarget(evt)) return;
			// Without this the browser refuses the drop, and `drop` never
			// fires at all — this is what "accepting" a drag means.
			evt.preventDefault();
			if (evt.dataTransfer) evt.dataTransfer.dropEffect = "copy";
			this.showDropRing(true);
		}, { signal: this.domListeners.signal });

		// Counted rather than toggled: `dragleave` fires every time the
		// pointer crosses from one child of the row to the next, and clearing
		// on each of those would blink the ring off as the drag moves along
		// the path.
		container?.addEventListener("dragenter", (evt) => {
			if (this.contentDropTarget(evt)) this.dropDepth++;
		}, { signal: this.domListeners.signal });
		container?.addEventListener("dragleave", () => {
			this.dropDepth = Math.max(0, this.dropDepth - 1);
			if (this.dropDepth === 0) this.showDropRing(false);
		}, { signal: this.domListeners.signal });

		container?.addEventListener("drop", (evt) => {
			const target = this.contentDropTarget(evt);
			this.dropDepth = 0;
			if (!target) {
				this.showDropRing(false);
				return;
			}
			evt.preventDefault();
			evt.stopPropagation();
			void this.handleContentDrop(target, evt);
		}, { signal: this.domListeners.signal });

		// A drag that ends anywhere — dropped elsewhere, or cancelled with
		// Escape — leaves no event on this row at all, so the ring would
		// stay up until the next drag came past.
		window.addEventListener("dragend", () => {
			this.dropDepth = 0;
			this.showDropRing(false);
		}, { signal: this.domListeners.signal });

		container?.addEventListener("dblclick", (evt) => {
			if (this.inputEl || this.renameMode) return;
			const opener: GestureTarget = this.swapActions ? "delimiter" : "folder";
			if (classifyTarget(evt.target as HTMLElement) !== opener) return;
			const folderPath = this.folderPathForEvent(evt, opener);
			if (folderPath === null) return;
			evt.preventDefault();
			evt.stopPropagation();
			void this.createFolderNoteFor(folderPath);
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
				this.runFileGesture(count, at);
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

	private runFileGesture(count: number, at: { clientX: number; clientY: number }): void {
		const name = this.externalFileName ?? this.file?.name ?? null;
		// The plain press answers with the file's own menu, the same one the
		// File Explorer's row gives — which is what every other part of this
		// row already does with one press, and what a right-click on a file
		// means everywhere else in the app. It used to open the outline,
		// which is a *view* of the file rather than something you can do to
		// it, and which Obsidian's own command still opens.
		if (count === 1) {
			this.showFileMenu(at);
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
	private openFolderInPane(folderPath: string, paneType: PaneType, focus = true): void {
		const folder = this.plugin.app.vault.getAbstractFileByPath(folderPath);
		if (!(folder instanceof TFolder)) return;
		this.showFolderIn(this.newPane(paneType, focus), folder, focus);
	}

	/**
	 * Shows a folder in a leaf that has just been made for it — by a modifier
	 * on a segment, or by a segment dropped on a tab bar (see
	 * `BreadcrumbManager.wireTabBars`). One answer for both, so the two
	 * gestures that mean "this folder, over there" cannot come to disagree.
	 */
	showFolderIn(leaf: WorkspaceLeaf, folder: TFolder, focus = true): void {
		const note = this.folderNoteFor(folder);
		if (note) {
			void leaf.openFile(note, { active: focus });
			return;
		}
		// The new leaf is empty and has had no active-leaf-change yet, so its
		// bar has to be asked for rather than assumed to exist.
		if (!focus) {
			this.browseWhenRevealed(leaf, folder.path);
			return;
		}
		void this.plugin.app.workspace.revealLeaf(leaf);
		window.setTimeout(() => this.manager.breadcrumbFor(leaf)?.startBrowsingAt(folder.path), 0);
	}

	/**
	 * A new pane, with the focus handed back when it should not follow.
	 *
	 * `getLeaf` activates whatever it creates. That is right for the gesture
	 * meaning "take me there" and wrong for the one meaning "have it ready",
	 * and `openFile` can be told `active: false` — but a leaf opened empty,
	 * to browse in, has no open to pass that to. So the focus is put back by
	 * hand, which is the only way an empty background tab exists at all.
	 */
	private newPane(paneType: PaneType, focus: boolean): WorkspaceLeaf {
		const workspace = this.plugin.app.workspace;
		const previous = workspace.getMostRecentLeaf();
		const leaf = workspace.getLeaf(paneType);
		if (!focus && previous && previous !== leaf) {
			workspace.setActiveLeaf(previous, { focus: true });
		}
		return leaf;
	}

	/**
	 * Starts a browsing session in a tab the moment it is actually looked at.
	 *
	 * A tab opened behind the one you are in has no laid-out header: its
	 * content is in the document but not displayed, so every width the fitter
	 * asks for comes back zero and the row it builds from those is wrong in a
	 * way that outlives the measurement. Waiting costs nothing — nobody is
	 * reading a background tab — and it is the difference between a row fitted
	 * against a real pane and one fitted against nothing.
	 *
	 * Registered on the plugin so it cannot outlive an unload, and taken off
	 * the moment it fires: this is one session in one tab, not a standing
	 * subscription.
	 */
	private browseWhenRevealed(leaf: WorkspaceLeaf, folderPath: string): void {
		const workspace = this.plugin.app.workspace;
		const ref = workspace.on("active-leaf-change", (active) => {
			if (active !== leaf) return;
			workspace.offref(ref);
			window.setTimeout(() => {
				this.manager.patchLeaf(leaf);
				this.manager.breadcrumbFor(leaf)?.startBrowsingAt(folderPath);
			}, 0);
		});
		this.plugin.registerEvent(ref);
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
	 * The open file's own menu — the one the File Explorer gives its row.
	 *
	 * The same argument the folder segments already make: a file should
	 * offer one menu, not a different one depending on which representation
	 * of it was clicked. This is built by the same function the dropdown
	 * rows and the external view use, so the entries agree by construction
	 * and a plugin contributing to `file-menu` reaches all of them at once.
	 *
	 * Outside the vault there is no TFile for those handlers to act on, so
	 * it is the path-built menu instead, exactly as `showFolderMenu` falls
	 * back — with `isFolder` false, which is the only difference.
	 */
	private showFileMenu(at: { clientX: number; clientY: number }): void {
		const evt = new MouseEvent("contextmenu", { clientX: at.clientX, clientY: at.clientY });
		if (this.externalFileName !== null && this.externalPath !== null) {
			showExternalMenu(
				this.plugin,
				evt,
				externalJoin(this.externalPath, this.externalFileName),
				false,
				this.leaf,
				() => this.externalWritesUnlocked,
				() => this.refresh(),
			);
			return;
		}
		if (this.file) showContextMenu(this.plugin.app, evt, this.file);
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
	/**
	 * Whether the plugin whose convention this row reads is the one running.
	 *
	 * `folderNoteConvention` answers for any of the three folder-note plugins,
	 * falling back to the default layout for the two that keep no settings of
	 * their own — right for listing and for making a note, and wrong for
	 * *opening* one from the row: those two deliberately never claim the
	 * header path, so a press there is Obsidian's to answer and must stay a
	 * reveal. Only Folder notes' own convention is specific enough to act on.
	 */
	private folderNotesRunning(): boolean {
		return !!this.plugin.app.plugins?.plugins?.[FOLDER_NOTES_PLUGIN_ID];
	}

	/**
	 * The view a start-page plugin puts in front of you, or null where none is
	 * running.
	 *
	 * Found from the plugin's id rather than written down beside it: a plugin
	 * names its view after itself, so `home-launcher` is asked for whichever
	 * registered type begins with `home-launcher`. A plugin whose start page
	 * is an ordinary note registers no view and answers null here — its page
	 * is reachable as a path like any other note, which is what the row is
	 * already for.
	 */
	private startPageViewType(): string | null {
		const plugins = this.plugin.app.plugins?.plugins;
		if (!plugins) return null;
		const registry = this.plugin.app.viewRegistry?.viewByType;
		if (!registry) return null;
		for (const id of START_PAGE_PLUGIN_IDS) {
			if (!plugins[id]) continue;
			const own = Object.keys(registry).find((type) => type.startsWith(id));
			if (own) return own;
		}
		return null;
	}

	/**
	 * The views a pane can hold that no path names: the graph, search, and
	 * whatever the running plugins register — a home tab, a calendar.
	 *
	 * Only at the vault root, and never while a move is pending: the root is
	 * where everything in the vault is reached from, so it is where the things
	 * that are *not* in it belong, and a rename is asking where a file goes,
	 * which a view cannot answer.
	 *
	 * What counts as file-bound is read rather than listed: every value of
	 * `typeByExtension` is a view that exists to show a file — markdown, pdf,
	 * image, canvas, bases — so the vault's own extensions decide it, and a
	 * new file type in a later Obsidian needs no change here. This plugin's
	 * own viewer goes with them, for the same reason.
	 */
	private mainPaneViewTypes(): string[] {
		if (this.renameMode) return [];
		if (this.externalPath !== null || this.showingLocations) return [];
		// At the vault root they are simply listed, under what is in it. In
		// any other folder they appear once a colon has been typed — the one
		// character that can begin no name — so the pages are discoverable
		// where a reader would look for them without turning up uninvited in
		// every folder's listing, and the field can take its colour from the
		// row that names what is in it.
		const typed = this.inputEl?.value.trim() ?? "";
		if (this.currentFolderPath() !== "" && !typed.startsWith(":")) return [];
		return this.pageTypes();
	}

	/**
	 * The same views, without the rules about where they are *listed*.
	 *
	 * A page is in no folder at all, so where the row happens to be standing
	 * has nothing to say about whether `:graph` names one. The listing is
	 * root-only because that is where a reader would look for it; typing is
	 * not, or the label would mean something in one folder and nothing in the
	 * next.
	 */
	private pageTypes(): string[] {
		const registry = this.plugin.app.viewRegistry;
		const all = registry?.viewByType;
		if (!all) return [];
		const fileBound = new Set<string>(Object.values(registry.typeByExtension ?? {}));
		fileBound.add(EXTERNAL_VIEW_TYPE);
		return Object.keys(all)
			.filter((type) => !fileBound.has(type))
			.sort();
	}

	/**
	 * Opens the start page in this pane.
	 *
	 * In this pane rather than a new tab: the delimiter is part of the path
	 * bar, and everything else on the row acts on the pane it belongs to.
	 */
	private openStartPage(type: string): void {
		void this.leaf.setViewState({ type, active: true });
	}

	private folderNoteFor(folder: TFolder): TFile | null {
		const where = this.folderNoteConvention(folder);
		if (!where) return null;
		// The configured type first and Markdown after it, which is the order
		// Folder notes itself looks in: its own `findFolderNoteFile` tries the
		// primary type and then every other type it supports, so a `.md` note
		// is still that folder's note in a vault set to `.canvas`.
		for (const extension of [where.extension, ".md"]) {
			const candidate = this.plugin.app.vault.getAbstractFileByPath(`${where.base}${extension}`);
			if (candidate instanceof TFile) return candidate;
		}
		return null;
	}

	/**
	 * Whether a vault file is some folder's note.
	 *
	 * Asked through `folderNoteFor` rather than beside it, so the two can never
	 * disagree about which file a folder *is*. The folders a note can belong to
	 * are the one it sits in and the folders beside it — the two places Folder
	 * notes can be told to keep one — and the vault root is never one of them.
	 */
	private isFolderNote(path: string): boolean {
		const file = this.plugin.app.vault.getAbstractFileByPath(path);
		const parent = file instanceof TFile ? file.parent : null;
		if (!parent) return false;
		const candidates = parent.isRoot() ? [] : [parent];
		for (const sibling of parent.children) {
			if (sibling instanceof TFolder) candidates.push(sibling);
		}
		return candidates.some((folder) => this.folderNoteFor(folder) === file);
	}

	/**
	 * Where a folder's note goes, asked of the plugin that decides it.
	 *
	 * `Folder/Folder.md` is only the default. Folder notes lets a vault
	 * rename the note (`folderNoteName`, a template whose one placeholder is
	 * the folder's name), change its type (`folderNoteType`) and keep it
	 * beside the folder rather than inside it (`storageLocation`) — so
	 * hard-coding the default made the delimiter underline claim a note that
	 * was not there, in exactly the vaults that had configured the feature
	 * most deliberately.
	 *
	 * Read from the running plugin, defensively, and mirroring its own
	 * `getFolderNote`: the one placeholder is replaced once rather than
	 * globally, and `parentFolder` is the only storage that moves the note,
	 * because those are the two things that plugin actually does. Null where
	 * no folder-note plugin is running at all — the convention is checkable
	 * on its own, but acting on it regardless would make the row behave
	 * differently in two vaults that look identical to the user.
	 */
	private folderNoteConvention(folder: TFolder): { base: string; extension: string } | null {
		// The *loaded* plugins, not `enabledPlugins`. That set is the saved
		// list — what Obsidian will turn on at the next start — and
		// `enablePlugin` does not add to it, only `enablePluginAndSave`
		// does. The two agree for a plugin switched on from the settings
		// pane and disagree for one loaded any other way, and the question
		// here is which plugins are *running now*, which is exactly what
		// having an instance means.
		const running = this.plugin.app.plugins?.plugins;
		if (!running || !FOLDER_NOTE_PLUGIN_IDS.some((id) => running[id])) return null;

		const settings = running[FOLDER_NOTES_PLUGIN_ID]?.settings;
		const read = (key: string, fallback: string): string => {
			const value = (settings as Record<string, unknown> | undefined)?.[key];
			return typeof value === "string" && value ? value : fallback;
		};

		const name = read("folderNoteName", "{{folder_name}}").replace(FOLDER_NAME_TOKEN, folder.name);
		const raw = read("folderNoteType", ".md");
		const extension = raw.startsWith(".") ? raw : `.${raw}`;
		const parent = folder.parent?.path ?? "";
		const at =
			read("storageLocation", "insideFolder") === "parentFolder"
				? parent === "/"
					? ""
					: parent
				: folder.path;
		return { base: at ? `${at}/${name}` : name, extension };
	}

	/**
	 * Makes the note a folder does not have yet, and opens it.
	 *
	 * Deliberately not a second implementation of "open the folder note":
	 * where one already exists this hands straight to the same path a single
	 * press takes, so the two presses never disagree about which file that
	 * folder *is*. What is new here is only the making, which no click can
	 * be re-dispatched to — the plugin that owns the convention offers
	 * creating a folder note from the File Explorer's menu and from its own
	 * commands, both of which want a folder this row has no way to hand
	 * them. So the convention is borrowed (see `folderNoteConvention`) and
	 * the file is made here.
	 *
	 * Always Markdown, whatever type the vault is set to. It is the type
	 * that plugin's own default create command makes, it is the only one an
	 * empty file is valid for — an empty `.canvas` is a broken canvas — and
	 * it is found as the folder's note either way.
	 */
	private async createFolderNoteFor(folderPath: string): Promise<void> {
		const folder = this.plugin.app.vault.getAbstractFileByPath(folderPath);
		if (!(folder instanceof TFolder)) return;

		const existing = this.folderNoteFor(folder);
		if (existing) {
			this.navigateToFile(existing);
			return;
		}
		const where = this.folderNoteConvention(folder);
		if (!where) return;

		const target = `${where.base}.md`;
		try {
			const cut = target.lastIndexOf("/");
			if (cut > 0) await this.ensureFolderExists(target.slice(0, cut));
			const note = await this.plugin.app.vault.create(target, "");
			new Notice(t("noticeCreated", { path: note.path }));
			this.revealInExplorer(note);
			this.navigateToFile(note);
		} catch (err) {
			new Notice(t("noticeCreateFailed", { error: (err as Error).message }));
		}
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
	 * Where a drag carrying content would land, or null where it would land
	 * nowhere.
	 *
	 * Two answers, and which one you get is which part of the row is under
	 * the pointer:
	 *
	 * - **`name`** — the note's own name, or a delimiter whose folder has a
	 *   folder note. Both name a note that already exists, so the content
	 *   goes on the end of it.
	 * - **`place`** — the vault name or a folder. Neither names a note, so
	 *   what the drop opens is the field, to say which note it should be.
	 *
	 * A drag out of this vault is refused on the `place` targets, and only
	 * there: Obsidian's own drag manager already answers it on a folder
	 * segment, and it means *move the file there*. One gesture at one spot
	 * cannot mean two things, and the move is the one that was there first.
	 * On a note's name it was never on offer, so there is nothing to clash
	 * with and dropping a note there appends what it says.
	 */
	private contentDropTarget(
		evt: DragEvent,
	): { kind: "name"; file: TFile } | { kind: "place"; folderPath: string } | null {
		// Nothing lands on a row in the middle of being edited: the field
		// owns the keyboard and the text in it, and dropping into it is the
		// browser's own business.
		if (this.inputEl || this.renameMode || !carriesContent(evt)) return null;

		const el = evt.target as HTMLElement;
		if (el.closest(".lure-filename-text")) {
			return this.file ? { kind: "name", file: this.file } : null;
		}
		if (el.closest(".view-header-breadcrumb-separator")) {
			const folderPath = this.folderPathForEvent(evt, "delimiter");
			const folder = folderPath === null ? null : this.plugin.app.vault.getAbstractFileByPath(folderPath);
			const note = folder instanceof TFolder ? this.folderNoteFor(folder) : null;
			return note ? { kind: "name", file: note } : null;
		}
		if (isVaultDrag(this.plugin.app)) return null;
		if (el.closest(".lure-vault-segment")) {
			// The vault's own root, which is the one folder the path does not
			// spell out.
			return this.externalPath === null ? { kind: "place", folderPath: "" } : null;
		}
		if (el.closest(".view-header-breadcrumb")) {
			const folderPath = this.folderPathForEvent(evt, "folder");
			return folderPath === null ? null : { kind: "place", folderPath };
		}
		return null;
	}

	/** The blue ring, up while a drop would land as content and while one is waiting to be named. */
	private showDropRing(on: boolean): void {
		this.titleEl.parentElement?.toggleClass(DROP_CONTENT_CLASS, on || this.pendingDrop !== null);
	}

	/**
	 * A drop that carried content, answered where it landed.
	 *
	 * Onto a note, the content goes on the end of it — after a confirmation,
	 * because this writes into a file that is already there and the gesture
	 * that asked for it is one an unsteady hand can make by accident.
	 *
	 * Onto a place, nothing is written yet: the field opens on that folder
	 * with the content held, and naming a note is what commits it. Creating
	 * a note *is* the confirmation there, so none is asked for — except when
	 * the name turns out to be one that already exists, which is the same
	 * write as the first case and is confirmed the same way (see
	 * `commitPendingDrop`).
	 */
	private async handleContentDrop(
		target: { kind: "name"; file: TFile } | { kind: "place"; folderPath: string },
		evt: DragEvent,
	): Promise<void> {
		// Read before anything else can await: `dataTransfer` is emptied the
		// moment the drop handler returns, so a payload fetched after an
		// await is a payload that is no longer there.
		const content = await readDroppedContent(this.plugin.app, evt);
		if (!content) {
			this.showDropRing(false);
			return;
		}

		if (target.kind === "name") {
			this.showDropRing(false);
			await this.appendDroppedContent(target.file, content);
			return;
		}

		this.pendingDrop = content;
		this.showDropRing(true);
		this.extendBrowsePath(target.folderPath);
		this.enterTypingMode("");
	}

	/** Asks, then writes, then says where it went. */
	private async appendDroppedContent(file: TFile, content: DroppedContent): Promise<void> {
		const confirmed = await confirmAction(this.plugin.app, {
			title: t("dropAppendTitle"),
			body: t("dropAppendBody", { name: file.name }),
			// The source named on its own line where the drop had one — a
			// file has a name worth quoting back, loose text does not.
			detail: content.from || undefined,
			cta: obsidianLabel(LABELS.paste, "Paste"),
		});
		if (!confirmed) return;
		try {
			await appendToNote(this.plugin.app, file, content.text);
			new Notice(t("dropAppended", { name: file.name }));
		} catch (err) {
			new Notice(t("noticeCreateFailed", { error: (err as Error).message }));
		}
	}

	/**
	 * Puts a held drop into the note the field settled on, once there is one.
	 *
	 * `created` is what tells the two cases apart. A note this gesture has
	 * just made cannot be damaged by what is written into it — it is empty,
	 * and making it was the decision — so the content simply goes in. An
	 * existing note is the same write as a drop onto the name and asks the
	 * same question first.
	 */
	private async commitPendingDrop(file: TFile, created: boolean): Promise<void> {
		const content = this.pendingDrop;
		this.pendingDrop = null;
		this.showDropRing(false);
		if (!content) return;
		if (created) {
			await appendToNote(this.plugin.app, file, content.text);
			return;
		}
		await this.appendDroppedContent(file, content);
	}

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

		// An open field belongs to the file it was opened on. The guard below
		// exists so a routine refresh cannot overwrite what someone is
		// typing — but a leaf that has gone to a *different* file underneath
		// it is not a routine refresh: the path in the field describes
		// somewhere this pane no longer is.
		//
		// Left to the guard, that field survived every later refresh, so the
		// row went on naming the old file for the rest of the session. The
		// quick switcher is the easy way to see it — open the bar, change
		// your mind, press Ctrl+O — but a link, the back button and a click
		// in the File Explorer all do the same thing.
		//
		// A rename keeps the same TFile, so moving the open note from this
		// very field is not a file change and the session survives it, which
		// is what rename/move mode needs.
		if (this.mode === "typing" && this.getFileForLeaf() !== this.file) {
			this.cancelNavigation();
			return;
		}

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
		// Outside the vault the padlock is asked first, and says so in its own
		// icon rather than by letting a mode open that every commit would
		// refuse.
		if (this.askForPadlockFirst()) return;
		this.renameMode = true;
		this.updateRenameModeStyling();
		if (this.startAtLap()) return;
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
		// The field is open for editing, not for renaming: the key turns it
		// into a rename where it stands — the same thing the button does —
		// rather than starting over on the name and throwing away what has
		// been typed, where the caret is and what is marked.
		if (this.inputEl && !this.renameMode) {
			if (!this.file && this.externalPath === null) return false;
			if (!this.askForPadlockFirst()) this.setRenameMode(true);
			return true;
		}
		// The last rung hands the key back to the inline title instead of
		// wrapping, so the cycle is heading, name, name with extension, the
		// path from the vault, the path from the system root, and round to the
		// heading again.
		return this.pressLikeTab(() => this.dismissEditing());
	}

	/**
	 * F2 and the focus command, pressed while the field is open: whatever Tab
	 * would do there — complete, step in, widen the selection — except where
	 * Tab would lap back to the front of the path. There `leave` runs instead
	 * and the press reports false, so each key can end the cycle its own way:
	 * F2 on the inline title, the command in the note.
	 *
	 * Only the rungs used to be shared. A field opened by a click or by
	 * typing is not on them, and the keys answered it differently — F2 by
	 * starting over on the name, the command by closing the field — where
	 * Tab would have carried on with the path in front of it.
	 */
	private pressLikeTab(leave: () => void): boolean {
		const input = this.inputEl;
		if (!input) return false;
		if (this.tabStage !== null && this.tabStage >= LAST_RENAME_RUNG) {
			const target = this.tabTargetPath;
			leave();
			this.lapArmedFor = target;
			return false;
		}
		this.handleTabCompletion(input);
		return true;
	}

	/**
	 * The press after the cycle left the field: Tab's lap, which lands on the
	 * root folder with the whole path after it. Returns whether it was spent
	 * there.
	 */
	private startAtLap(): boolean {
		const armed = this.lapArmedFor;
		this.lapArmedFor = null;
		if (armed === null || armed !== this.ladderTargetPath()) return false;
		this.tabTrail = [];
		this.tabLadderStart = null;
		this.tabTargetPath = armed;
		this.tabStage = LAST_RENAME_RUNG + 1;
		this.applyLadderStage();
		return true;
	}

	/**
	 * The rename key's answer to a shut padlock, outside the vault.
	 *
	 * Rename mode used to open regardless, with the commit left to refuse it —
	 * true, but silent until the work was done. The padlock flashes open and
	 * shuts again instead, which says what is in the way in the one place the
	 * answer lives; pressing it opens it, and so does asking again inside half
	 * a second, which is the same permission granted without reaching for the
	 * pointer. Returns whether the press was spent on the asking.
	 */
	private askForPadlockFirst(): boolean {
		if (!this.pointsOutsideVault() || this.externalWritesUnlocked) return false;
		if (Date.now() - this.padlockAskedAt < PADLOCK_DOUBLE_MS) {
			this.padlockAskedAt = 0;
			// Exactly what the button's own press does, granted for the
			// location rather than for the moment.
			this.externalWritesUnlocked = true;
			this.unlockedBase = this.externalBase?.path ?? this.externalPath;
			this.updateUnlockButton();
			return false;
		}
		this.padlockAskedAt = Date.now();
		this.flashPadlock();
		return true;
	}

	/** Opens the padlock for a moment and shuts it again. */
	private flashPadlock(): void {
		const el = this.unlockButtonEl;
		if (!el.isConnected) return;
		el.addClass(PADLOCK_FLASH_CLASS);
		setIcon(el, "lock-open");
		this.timers.add(
			window.setTimeout(() => {
				setIcon(el, "lock");
				el.removeClass(PADLOCK_FLASH_CLASS);
			}, PADLOCK_FLASH_MS),
		);
	}

	/** Restores the leaf's native title DOM. Called on leaf close / plugin unload. */
	destroy(): void {
		this.destroyed = true;
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
		// Same reason: the ring is a class on Obsidian's own header, which
		// outlives this instance, so a drag that was over the row when the
		// plugin was disabled would leave a blue box behind for good.
		this.pendingDrop = null;
		this.showDropRing(false);
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
		// Last, and after `filenameEl.remove()` above: taking the marker off
		// first would hand the row back to Obsidian's layout while our
		// elements were still in it.
		delete this.titleEl.parentElement?.dataset[ROW_ON_ATTR];
		this.titleEl.parentElement?.removeClass(EDITING_ROW_CLASS);
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
	private openNativeSegment(index: number, folderPath: string, presses = 1): void {
		// A second press means the folder itself. With a folder note there,
		// the first press opens the note and the folder is otherwise
		// unreachable from this delimiter — so double-clicking asks past the
		// note, the way a second press elsewhere on the row asks for more
		// than the first did. Without a note both presses do the same thing,
		// which is the reveal that was already happening.
		const wantsFolder = presses > 1;
		// The folder note first, where this row can find one. Delegating to
		// the native segment asks whichever folder-note plugin is running to
		// answer the click, and Folder notes answers only for segments it has
		// marked — which, on a path more than one folder deep, is none of
		// them: the same press that opens `testfolder2`'s note does nothing at
		// all on `…/childa/unnname`, whose note is right there. The convention
		// is already read from that plugin's own settings (see
		// folderNoteConvention), so the row can open the note itself and the
		// press means the same thing at every depth.
		const folder = this.folderNotesRunning()
			? this.plugin.app.vault.getAbstractFileByPath(folderPath)
			: null;
		const note = folder instanceof TFolder ? this.folderNoteFor(folder) : null;
		// Unless the note is the one this pane is already showing. Opening it
		// again is the one thing the press cannot achieve — it is on screen —
		// so the press means the other half of what this delimiter does, and
		// says where that folder is in the tree. Which is what the second
		// press means too, and rightly: both are "I can see the note, show me
		// the folder".
		const showing = note !== null && this.file?.path === note.path;
		if (note && !wantsFolder && !showing) {
			void this.plugin.app.workspace.getLeaf(false).openFile(note);
			return;
		}
		if (note) {
			// Straight to the explorer, not through the native segment: with a
			// folder-note plugin running, that click is exactly the one that
			// opens the note, so delegating it would undo the press.
			this.revealFolderInExplorer(folderPath);
			return;
		}

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
		this.labelSlotButton();
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
	 * Three things actually depend on the mode. The suggest reads
	 * `renameMode` through a callback, so re-running its query is enough to
	 * pick up the pinned current filename and the greying of taken names —
	 * and the same dispatched event carries the create hint, which is off in
	 * rename mode, along with it. The validation tooltip is rename-only, so
	 * leaving the mode has to take it down by hand — `onInput` skips
	 * validation entirely once `renameMode` is false, and would otherwise
	 * leave a stale red warning hanging under a field that is no longer
	 * being validated.
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

	/**
	 * Turns rename/move on or off without touching the field: the toggle
	 * changes what committing *does*, not what has been typed, so deciding
	 * mid-path to move rather than navigate (or the other way round)
	 * shouldn't cost the path already entered.
	 */
	private setRenameMode(on: boolean): void {
		if (on === this.renameMode) return;
		// Outside the vault the press that leaves rename mode is the press
		// that shuts the padlock again: the permission never outlives the
		// thing it was opened for, and there is one control to learn instead
		// of two with an order between them.
		const shutPadlock = !on && this.pointsOutsideVault();
		this.renameMode = on;
		if (shutPadlock) this.lockExternalWrites();
		this.updateRenameModeStyling();
		this.syncOpenInputToRenameMode();
		if (shutPadlock) this.insertRenameButton();
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
		const nativeParent = this.titleEl.parentElement?.querySelector<HTMLElement>(
			NATIVE_BREADCRUMB_SELECTOR,
		);
		nativeParent
			?.querySelectorAll<HTMLElement>(".view-header-breadcrumb-separator")
			.forEach((el) => {
				el.onclick = null;
				el.textContent = NATIVE_DELIMITER;
			});
		// The marking lives on Obsidian's own segments, which outlive this
		// instance: left behind, it would underline delimiters for a plugin
		// that is no longer running.
		nativeParent
			?.querySelectorAll<HTMLElement>(".view-header-breadcrumb")
			.forEach((el) => el.removeClass(FOLDER_NOTE_CLASS));
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
			// The underline is a promise that there is something to open, and
			// it used to be made only where Folder notes had marked the
			// segment — which is nowhere on a path more than one folder deep,
			// exactly where the press was inert too. The note is resolved here
			// now, so the marking is made here as well; that plugin's own
			// class is still honoured, so a peer that marks differently is
			// none the worse for it.
			el.toggleClass(FOLDER_NOTE_CLASS, this.folderNotesRunning() && !!this.folderNoteFor(folder));
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
					this.openNativeSegment(index, folderPath, evt.detail);
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
	 * Fills the one slot among Obsidian's own view-action icons (bookmark /
	 * reading-mode / more-options) at the far right of the header, not
	 * inside our breadcrumb — inserted first so it sits right next to the
	 * reading/editing mode toggle. Re-checked on every refresh in case
	 * Obsidian recreates .view-actions.
	 *
	 * Which control that is depends on where the row points. Inside the
	 * vault there is nothing to unlock, so it is the rename toggle. Outside,
	 * a shut padlock holds the slot until it is opened, and then the toggle
	 * takes it — one control in one place, rather than two whose order the
	 * reader has to learn.
	 */
	private insertRenameButton(): void {
		// Nothing is placed once teardown has started. Placing the slot runs
		// on the render path now, and `destroy` renders once on its way out —
		// `showNativeBreadcrumb` does — several lines *after* it has taken
		// these buttons off the header. Without this the last act of every
		// unload was to put one back, and disabling the plugin left a dead
		// toggle in the header of every leaf it had ever patched.
		if (this.destroyed) return;
		const viewActions = this.titleEl.parentElement?.parentElement?.querySelector<HTMLElement>(
			".view-actions",
		);
		// A pane with nothing to rename gets no toggle: an empty tab, the
		// graph, a sidebar pane holding no file. The mode itself already
		// refuses there (`startHeaderRename`), so the button was one that
		// could only ever be pressed in vain.
		if (!this.file && this.externalPath === null) {
			this.renameButtonEl.remove();
			this.unlockButtonEl.remove();
			this.updateNavLockButton();
			return;
		}
		// Rename mode keeps the toggle on screen whatever the padlock says.
		// The merge governs the button, not the mode: the rename command has
		// a hotkey of its own, and a mode entered that way must stay visible
		// and leavable rather than being cancelled by the next repaint. What
		// it may not do is write — that gate is at the commit, where it was.
		const locked = this.pointsOutsideVault() && !this.externalWritesUnlocked && !this.renameMode;
		const slot = locked ? this.unlockButtonEl : this.renameButtonEl;
		(locked ? this.renameButtonEl : this.unlockButtonEl).remove();
		if (!slot.isConnected) viewActions?.insertAdjacentElement("afterbegin", slot);
		if (!locked) this.labelSlotButton();
		this.updateNavLockButton();
	}

	/**
	 * What the next press on the rename toggle will do.
	 *
	 * Three states share one slot and each has to say which it is: shut,
	 * open, and open with the mode already on — where the next press is the
	 * one that shuts it again. Set both where the button is placed and where
	 * the mode is toggled, since either can be what changed.
	 */
	private labelSlotButton(): void {
		this.renameButtonEl.setAttribute(
			"aria-label",
			this.renameMode && this.pointsOutsideVault()
				? t("externalLockLabel")
				: t("renameToggleLabel"),
		);
	}

	/** Whichever of the pair currently holds the header slot, for the chain to sit beside. */
	private slotButtonEl(): HTMLElement | null {
		if (this.renameButtonEl.isConnected) return this.renameButtonEl;
		if (this.unlockButtonEl.isConnected) return this.unlockButtonEl;
		return null;
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
		// Beside whichever of the pair is in the slot: outside the vault and
		// still locked that is the padlock, and keying off the rename toggle
		// alone would drop the chain — the one way out of the lock — exactly
		// where the toggle is not the button on screen.
		this.slotButtonEl()?.insertAdjacentElement("beforebegin", this.navLockButtonEl);
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

		// Deliberately after that check and not before: the relock decides
		// which of the pair the slot holds, so placing them first would show
		// the rename toggle for one frame in a location that has just been
		// locked again.
		this.insertRenameButton();
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

	/**
	 * What this row says when the pane holds no file at all: an empty tab,
	 * the graph, or anything else with nothing to name. Null when the row
	 * has a path to draw, and null in the sidebars.
	 *
	 * Every leaf with a `.view-header-title` is patched, which is right for
	 * a canvas or a PDF — they arrive as `FileView`s and have a path like
	 * any note — and was wrong for these: the native title was hidden and
	 * nothing drawn in its place, so the plugin left a header emptier than
	 * Obsidian's own.
	 *
	 * The colon marks it as not a path. No file or folder can be called
	 * `:graph`, so the row cannot be mistaken for something that could be
	 * opened, and anyone who has seen `host:port` reads it as a namespace
	 * rather than a name. It is built from the view type rather than from
	 * Obsidian's display text, so it does not change with the interface
	 * language and stays short enough not to fight the fitter.
	 *
	 * Sidebar leaves are excluded: the row is for editor panes, and a
	 * backlinks pane keeps the title Obsidian gives it.
	 */
	private pseudoSegment(): string | null {
		if (this.file || this.externalPath !== null || this.browsePath !== null) return null;
		if (this.leaf.getRoot() !== this.plugin.app.workspace.rootSplit) return null;
		const type = this.leaf.view?.getViewType?.() ?? "";
		if (!type) return null;
		if (type === "empty") return ":blank";
		if (type === "graph" || type === "localgraph") return ":graph";
		// Open-ended on purpose: a view this plugin has never heard of still
		// gets an honest label rather than an empty header. A trailing
		// `-view` goes, because the label is already a view's name and saying
		// so twice only makes it longer — a home-tab plugin, which is exactly
		// what puts an unknown view in front of this row, registers its own
		// as `home-launcher-view`.
		return `:${type.replace(/-view$/, "")}`;
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
		// Obsidian's own title is hidden only where this row has something to
		// put in its place. It used to go the moment a leaf was patched, and
		// a leaf with nothing to draw — a sidebar pane holding no file — was
		// left with a header emptier than the one the plugin replaced.
		//
		// A field counts as something drawn even though it is not here yet:
		// the locations menu empties the row *in order to* put its input
		// where the vault name was, and `enterTypingMode` adds that input
		// after this runs. Measuring the boxes alone therefore called the row
		// empty at exactly that moment and handed Obsidian's title back — so
		// clicking the vault name showed the note's name, greyed, sitting
		// after the path in the field, which it does at no other time.
		const editing = this.showingLocations || this.mode === "typing";
		this.titleEl.toggleClass(
			NATIVE_TITLE_HIDDEN_CLASS,
			editing ||
				this.vaultSegmentEl.childElementCount > 0 ||
				this.filenameEl.childElementCount > 0,
		);
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
		// either gone or about to be laid out again from its full name. The
		// box that was holding it survives the rebuild, so its mark has to be
		// taken off by hand — nothing is open any more.
		this.openedName = null;
		this.clearNameHost();
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
		// Not "was anything shortened" but "does it still not fit". A row can
		// run out of things it is *allowed* to shorten while still holding
		// more than the pane — every name has a floor, and below the width
		// where they all stand on theirs nothing is clipped and everything
		// overflows. Asking about clipping left exactly that row unable to
		// scroll: its end unreachable, and the wheel inert over it, at the
		// only widths where either would have mattered.
		this.letRowScroll(container.scrollWidth > container.clientWidth);
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
		this.markClipped(segments);
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
			// Never wider than what the part actually holds. The floor is the
			// width of this part's *cut* form, and for a short name the cut
			// can be the wider of the two: `atlas` keeps `atl` in its lead and
			// would clip to `at…`, and an ellipsis is wider than the `l` it
			// stands in for. A floor bigger than the box's own content is not
			// a floor, it is padding — it held the lead open past its text and
			// the name came out as `atl as`, split by the surplus.
			//
			// Clamping also says the right thing about clipping: where the cut
			// form is no narrower than the whole, clipping this part buys
			// nothing, so it should sit at its natural width and give up
			// nothing at all.
			const width =
				floorText === ""
					? 0
					: Math.min(textWidth(floorText ?? text, el), textWidth(text, el));
			setFloor(part, floorText === undefined ? "" : `${width.toFixed(2)}px`);
			floorPx += width;
		};
		const settle = (): void => {
			if (floorPx > 0) setFloor(el, `${floorPx.toFixed(2)}px`);
		};
		// Where a part gives way, its `…` stands: after one clipped at its
		// end, before one clipped at its start.
		const ellipsis = (before = false): void => {
			el.createSpan({
				cls: before ? `${NAME_ELLIPSIS_CLASS} ${NAME_ELLIPSIS_CLASS}-before` : NAME_ELLIPSIS_CLASS,
				attr: { "aria-hidden": "true" },
			});
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
			ellipsis();
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
			ellipsis();
			settle();
			return;
		}
		if (cut.shape === "head") {
			ellipsis(true);
			put(full, `${NAME_TRAIL_CLASS} ${NAME_BACK_CLASS}`, cutName(full, keep, cut));
			settle();
			return;
		}
		if (cut.shape === "window") {
			// Both ends are shared, so both go. The opening is clipped from its
			// start and the shared ending from its end, which leaves the part
			// that differs standing between two ellipses.
			ellipsis(true);
			put(
				full.slice(0, cut.span.end),
				`${NAME_LEAD_CLASS} ${NAME_BACK_CLASS}`,
				ELLIPSIS + full.slice(cut.span.start, cut.span.end),
			);
			put(full.slice(cut.span.end), NAME_TRAIL_CLASS, ELLIPSIS);
			ellipsis();
			settle();
			return;
		}

		// The middle, and the common case: the name keeps how it opens and how
		// it closes — for a file, its extension — and spends what lies between.
		const front = Math.ceil(keep / 2);
		const back = keep - front;
		if (back <= 0) {
			put(full, NAME_LEAD_CLASS, cutName(full, keep, cut));
			ellipsis();
			settle();
			return;
		}
		put(full.slice(0, full.length - back), NAME_LEAD_CLASS, full.slice(0, front) + ELLIPSIS);
		ellipsis();
		put(full.slice(full.length - back), `${NAME_TRAIL_CLASS} ${NAME_PINNED_CLASS}`);
		settle();
	}

	/**
	 * Takes the mark off the box that was holding an opened name.
	 *
	 * Tracked in a field rather than searched for: the name it belonged to may
	 * already have been emptied or replaced by a fitting pass, and a mark left
	 * on a box that no longer holds anything open is a box that never gives
	 * its width back.
	 */
	private clearNameHost(): void {
		this.nameHostEl?.removeClass(NAME_HOST_CLASS);
		this.nameHostEl = null;
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
		this.clearNameHost();
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
		// That outer box used to find itself with `:has(.lure-name-open)`.
		// Marked directly instead — `closest` answers the same question once,
		// here, rather than on every mutation of the row.
		this.nameHostEl = name.closest<HTMLElement>(NAME_HOST_SELECTOR);
		this.nameHostEl?.addClass(NAME_HOST_CLASS);

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
	 * Marks every part whose text runs past its box, and shows its `…`.
	 *
	 * The browser's own `text-overflow` drew whole letters and then the `…`,
	 * so a name gave way a letter at a time: the box shrank smoothly and what
	 * was drawn in it jumped, and capping the box at what was drawn (to take
	 * away the strip that left) made the box jump too — and everything after
	 * it on the row with it. Now the text is clipped at the pixel and slides
	 * under a `…` that fades it out, so nothing on the row moves in steps.
	 *
	 * The `…` is a sibling of no width, not part of the text, so showing it
	 * changes no layout either; it only needs to know whether there is
	 * anything under it, which is what this reads. A fraction of a pixel of
	 * overflow is not worth a `…`.
	 */
	private markClipped(segments: readonly FittableSegment[]): void {
		for (const segment of segments) {
			for (const part of Array.from(segment.el.children)) {
				if (!part.instanceOf(HTMLElement)) continue;
				if (!part.hasClass(NAME_LEAD_CLASS) && !part.hasClass(NAME_TRAIL_CLASS)) continue;
				// The `…` is as wide as it is drawn in this part's font, and the
				// fade makes exactly that much room for it. A part narrower
				// than one `…` is gone rather than clipped — the vault's name
				// squeezed to nothing beside its icon — and shows none.
				const ell = textWidth(ELLIPSIS, part);
				const clipped = part.scrollWidth > part.clientWidth;
				part.toggleClass(CLIPPED_CLASS, clipped);
				part.setCssProps({ "--lure-ell-w": `${ell.toFixed(2)}px` });
				const mark = part.hasClass(NAME_BACK_CLASS) ? part.previousElementSibling : part.nextElementSibling;
				if (mark?.hasClass(NAME_ELLIPSIS_CLASS)) {
					mark.toggleClass(CLIPPED_CLASS, clipped && part.clientWidth >= ell);
				}
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
		this.clearNameHost();
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
	/**
	 * A wheel over a name opens that name's dropdown and walks it.
	 *
	 * The row answers a wheel with a sideways scroll once it holds more path
	 * than pane, and that reading wins while it applies — see the handler this
	 * is called from. Below that width the row has nothing to scroll, and the
	 * wheel does what it does over any list of names: the first turn opens the
	 * one under the pointer, and every turn after moves the highlight a row,
	 * previewing into the field exactly as arrowing does.
	 *
	 * The dropdown is opened by clicking the name rather than by calling the
	 * gesture, so the wheel cannot drift from what a press does — the swap
	 * setting decides which press opens a list, and this way it decides for
	 * the wheel too. Delimiters are left out: with the swap on a press there
	 * opens a folder note, and a wheel is not a press.
	 */
	private wheelThroughEntries(evt: WheelEvent): boolean {
		// A line-mode wheel reports its delta in rows, not pixels.
		const delta = evt.deltaMode === 1 ? evt.deltaY * WHEEL_LINE_PX : evt.deltaY;
		if (Date.now() - this.wheelAt > WHEEL_RUN_MS) this.wheelDelta = 0;
		this.wheelAt = Date.now();

		if (!this.inputEl) {
			const name = (evt.target as HTMLElement | null)?.closest<HTMLElement>(
				".view-header-breadcrumb, .lure-filename-text",
			);
			if (!name) return false;
			this.wheelDelta = 0;
			name.click();
			return true;
		}

		this.wheelDelta += delta;
		let steps = 0;
		while (this.wheelDelta >= WHEEL_STEP_PX) {
			steps += 1;
			this.wheelDelta -= WHEEL_STEP_PX;
		}
		while (this.wheelDelta <= -WHEEL_STEP_PX) {
			steps -= 1;
			this.wheelDelta += WHEEL_STEP_PX;
		}
		if (!steps) return true;
		return this.suggest?.stepHighlight(steps, evt) ?? false;
	}

	private lockExternalWrites(): void {
		this.externalWritesUnlocked = false;
		this.unlockedBase = null;
	}

	/**
	 * Whether the padlock stands open, for code outside this class.
	 *
	 * The permission lives here because the button does. The external
	 * viewer used to answer this question from its own read-only lift,
	 * which is a different one — that flag is about the buffer being
	 * editable, and is false for a note being rendered, a page and every
	 * image — so its menu refused a delete the padlock beside it allowed.
	 */
	allowsExternalWrites(): boolean {
		return this.externalWritesUnlocked;
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
		// A typed absolute path lasts as long as the field holding it. Every
		// way out of the field that forgot to say so — Escape was one — left
		// the vault's name and icon out of the row for the life of the tab,
		// on every note it went on to show.
		if (this.typedAbsolute !== null && this.mode !== "typing") this.typedAbsolute = null;
		this.vaultSegmentEl.empty();
		// A pane with no file still has a vault, and the row says which one:
		// the pseudo-segment after it is what stands in for the path.
		if (
			!this.file &&
			this.externalPath === null &&
			this.browsePath === null &&
			this.pseudoSegment() === null
		) {
			return;
		}

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

		// A typed absolute path is not in this vault, so the vault's name and
		// its home icon have nothing to do with it and the opening segment
		// stands empty: the field begins at the filesystem root, and the row
		// reads as that one path rather than as a vault trail with somewhere
		// else typed on the end of it.
		//
		// The folders above it were drawn here for a while, from the root.
		// They said nothing the field was not already saying — a field
		// holding `/home/me/notes` beside a trail reading `/ home / me` is
		// the same path twice — and on a path long enough to matter the two
		// copies fought over the row and were painted over each other.
		if (this.typedAbsolute !== null) return;

		this.renderRootSegment();

		const separator = this.vaultSegmentEl.createSpan({
			cls: "view-header-breadcrumb-separator",
			text: this.plugin.settings.delimiter,
		});
		// The one thing the vault's own delimiter can open, where something is
		// running that provides it: the page that meets you when Obsidian
		// starts. Marked with the same underline a folder note gets, because
		// it is the same promise — there is something here to open.
		const startPage = this.startPageViewType();
		// Its own class rather than the folder note's: the underline says the
		// same thing — there is something here to open — but it is drawn on
		// this separator itself, while a folder note's is drawn on the
		// separator *after* the folder that has one.
		if (startPage) separator.addClass(START_PAGE_CLASS);
		separator.addEventListener("click", (evt) => {
			evt.stopPropagation();
			if (this.swapActions) {
				// The start page first, unless it is what this pane is
				// already showing — then the press means the other thing this
				// delimiter does. Asked of the pane rather than counted from
				// the press, because a run of presses is a double-click and
				// this is not one: two unhurried clicks are how anyone
				// actually opens a page and then folds the tree.
				const showing = this.leaf.view?.getViewType?.() ?? "";
				if (startPage && showing !== startPage) {
					this.openStartPage(startPage);
					return;
				}
				this.toggleExplorerTree();
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
		this.browseInNewTab("", this.focusesNewTab(evt));
		return true;
	}

	/**
	 * A fresh tab holding nothing, standing at `folderPath` with the list
	 * already showing.
	 *
	 * The vault name's middle press has meant this at the vault root since
	 * it existed; a delimiter's means the same thing one folder down, so
	 * both spend the same code rather than two that could drift.
	 */
	private browseInNewTab(folderPath: string, focus = true): void {
		const leaf = this.newPane("tab", focus);
		// Behind the current tab, the session waits until the tab is looked at
		// — see browseWhenRevealed for why a hidden header must not be fitted.
		if (!focus) {
			this.browseWhenRevealed(leaf, folderPath);
			return;
		}
		// The new leaf holds no file, and its row is built on the frame after
		// this one — so the browsing is started once it exists, the same way
		// sending a folder to another pane waits for that pane.
		window.setTimeout(() => {
			this.manager.patchLeaf(leaf);
			this.manager.breadcrumbFor(leaf)?.startBrowsingAt(folderPath);
		}, 0);
	}

	/**
	 * Chip trail for an absolute path outside the vault. Structurally the
	 * same row as inside — a root segment, then one chip per folder — but
	 * every chip carries an absolute path, and none of the vault-only
	 * actions (reveal in explorer, folder notes) apply, so a chip click
	 * simply browses there.
	 */
	/**
	 * Keeps the opening segment agreeing with what is in the field: a path
	 * typed or pasted from the filesystem root takes the row out of the vault
	 * for as long as it stands there, and deleting it back to a relative name
	 * brings the vault name back.
	 *
	 * Only inside the vault. Out there the row already draws from a place, and
	 * that place is what the chips are counted from.
	 */
	private syncAbsoluteTrail(value: string): void {
		// The locations field lives *in* the opening segment, and it opens
		// holding an absolute path — redrawing the segment under it would take
		// the field away mid-keystroke, which is what it did until this guard.
		if (this.showingLocations) return;
		const trimmed = expandHome(value.trim());
		const absolute =
			this.externalPath === null && isAbsolutePath(trimmed) && this.reachesMachineRoot(trimmed)
				? externalParent(trimmed)
				: null;
		if (absolute === this.typedAbsolute) return;
		this.typedAbsolute = absolute;
		// Only the opening segment is redrawn. The field is hosted in the
		// filename slot, so it keeps its value, its caret and its focus.
		this.renderVaultSegment();
		this.layOutTrailNames();
	}

	/**
	 * Whether a path with a leading slash is really one from the machine's
	 * root, rather than a vault path whose first folder was just deleted.
	 *
	 * Clicking a folder marks its name in the field, and Backspace over it
	 * leaves `/2027/note.md` — a slash that was the separator after the
	 * folder, not a root anyone typed. Read as a machine path, it took the
	 * vault's name and icon out of the row. A first folder that is not on the
	 * disk, with more path after it, settles it: nobody is typing a path down
	 * from a directory that does not exist. While the first name is still
	 * being written (`/ho`), nothing follows it and it counts.
	 */
	private reachesMachineRoot(path: string): boolean {
		const { root, segments } = externalSegments(path);
		if (segments.length < 2) return true;
		return isExternalFolder(externalJoin(root, segments[0]));
	}

	/**
	 * Gives the trail's names their parts and their floors, without fitting.
	 *
	 * The fitter stands down while a field is open (see `fitRow`), so a trail
	 * redrawn mid-keystroke arrived as bare names — and a flex item that has
	 * been told nothing about its floor is taken all the way down to nothing,
	 * where it paints the name it is holding straight over the one beside it.
	 * A deep absolute path came out as overlapping word salad for exactly
	 * that reason.
	 *
	 * Laying the names out is what puts a floor under each of them. What to
	 * clip, and how much of the row's air to spend, is still the fit's
	 * business and still waits for the field to close.
	 */
	private layOutTrailNames(): void {
		for (const segment of this.fittableSegments()) this.layOutName(segment);
	}

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
		this.titleEl.parentElement?.removeClass(EDITING_ROW_CLASS);
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

		const pseudo = this.pseudoSegment();
		if (pseudo !== null) {
			// In the name's own box, so the gestures that belong to the end
			// of the row — the click that opens the field, the empty space
			// beside it — find what they look for. It is a label and not a
			// target: no dropdown, no drag, no rename.
			this.filenameEl.createSpan({ cls: "lure-filename-text lure-pseudo-segment", text: pseudo });
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
	/**
	 * The first delimiter stands for the vault itself, and what a whole vault
	 * can be asked for is the shape of its tree: one press folds every open
	 * folder away, the next puts back exactly the ones that were open.
	 *
	 * Revealing was the old meaning and was nearly nothing — the root has no
	 * row of its own, so it only surfaced the explorer leaf, which clicking
	 * the sidebar already does. Collapse-all is the thing that segment is
	 * about, and the way back is what makes it safe to press: the explorer's
	 * own button forgets what was open.
	 *
	 * Folders opened or closed by hand in between are left alone on the way
	 * back: only what this collapsed is restored, and anything since is the
	 * user's arrangement, not ours to undo.
	 */
	private toggleExplorerTree(): void {
		const fileExplorer = this.plugin.app.internalPlugins.getPluginById("file-explorer");
		if (!fileExplorer) {
			new Notice(t("noticeExplorerDisabled"));
			return;
		}
		const leaf = this.plugin.app.workspace.getLeavesOfType("file-explorer")[0];
		// Nothing to fold in a tree nobody can see: surface it and let the
		// press after this one do the folding.
		if (!leaf) {
			this.revealRoot();
			return;
		}
		void this.plugin.app.workspace.revealLeaf(leaf);
		const view = leaf.view as FileExplorerView | undefined;
		const items = view?.fileItems;
		if (!items) return;

		const remembered = this.manager.explorerFolds;
		if (remembered) {
			for (const path of remembered) {
				const item = items[path];
				if (item?.collapsible && item.collapsed) item.toggleCollapsed(false);
			}
			this.manager.explorerFolds = null;
			return;
		}

		const open: string[] = [];
		for (const [path, item] of Object.entries(items)) {
			if (!item?.collapsible || item.collapsed) continue;
			open.push(path);
			item.toggleCollapsed(false);
		}
		// Nothing was open, so this press was the "put it back" half of a
		// gesture whose first half happened in the explorer itself. Leave the
		// memory empty rather than claiming the tree is folded by us.
		this.manager.explorerFolds = open.length ? open : null;
	}

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
		if (!this.file) {
			// The pseudo-segment names what the pane is holding, so the field
			// opens on that name exactly as it opens on a file's — selected,
			// ready to be typed over. It opened empty at first, which threw
			// away the one thing the row had to say and made every one of
			// these panes look alike.
			const pseudo = this.pseudoSegment();
			if (pseudo === null) return;
			this.extendBrowsePath("");
			this.enterTypingMode(pseudo, "all");
			return;
		}
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
		const folder = this.browsePath ?? this.file?.parent?.path ?? "";
		const base = folder === "/" ? "" : folder;
		// With a field open the tail of the row is whatever is in it, not the
		// open file's name. Clicking a chip further up has to keep everything
		// the field is holding — reading the file's name instead handed back
		// the path the row had before the session started, which is the whole
		// of what the click was meant to widen over.
		// The locations field opens on the machine's own path, which is not a
		// tail of this row at all: joining it to the chips made a path naming
		// nothing (`Schemes/2026//home/you/vault/...`).
		const typed = this.inputEl?.value ?? null;
		const tail =
			typed !== null && !this.showingLocations && !isAbsolutePath(typed)
				? typed
				: (this.file?.name ?? "");
		if (!tail) return base;
		return base ? `${base}/${tail}` : tail;
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

	/**
	 * Whether a tab this gesture opens should be the one you end up looking at.
	 *
	 * Middle-click goes there, Ctrl+click stays put. That is the split every
	 * browser makes, and it is the only thing that made the two gestures worth
	 * having separately — until now they were synonyms, so half of what a user
	 * already knows about them was simply unavailable here.
	 *
	 * Read off the button rather than the modifier, because that is the actual
	 * difference: a middle press arrives as `auxclick` with button 1, and a
	 * Ctrl+click as `click` with button 0. Ctrl held during a middle press
	 * changes nothing — the button wins, which matches the browsers.
	 */
	private focusesNewTab(evt: UserEvent | null | undefined): boolean {
		return !!evt && "button" in evt && evt.button === 1;
	}

	private navigateToFile(file: TFile, paneType: PaneType | false = false, focus = true): void {
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
				.openFile(file, { active: focus })
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
			onTaken: (file, occupant, to) => this.moveThroughCollision(file, occupant, to),
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

	/**
	 * Shows the open note's own row in the File Explorer, without a word if it
	 * cannot.
	 *
	 * This rides along with gestures that are about something else — the empty
	 * space opens the field to type in, and also points at where you are — so
	 * it must never interrupt: a notice about the explorer being off would
	 * arrive on a click that was not asking about the explorer at all. The
	 * delimiter's reveal, which *is* the whole gesture, still says so.
	 */
	private revealCurrentFile(): void {
		const file = this.file;
		if (!file) return;
		const fileExplorer = this.plugin.app.internalPlugins.getPluginById("file-explorer");
		if (!fileExplorer) return;
		try {
			fileExplorer.instance.revealInFolder(file);
			// Revealing puts the caret in the tree — Obsidian focuses the row
			// it just scrolled to, a frame or two later. On a gesture that is
			// really about the field that left the field open and dead:
			// everything looked right, the path was marked, and nothing typed
			// into it arrived. The field is asked for back once the reveal has
			// finished taking it.
			this.restoreFieldFocus();
		} catch {
			/* The row stays where it is; the click's real work is done. */
		}
	}

	/**
	 * Puts the caret back in the path field after something else has taken it.
	 *
	 * Twice over, because what takes it is asynchronous: the tree focuses its
	 * row on the frame after the reveal, and on a cold explorer a frame after
	 * that. Re-selecting rather than only focusing, since a field that is
	 * focused with its marking gone is a field the next keystroke appends to
	 * instead of replacing.
	 */
	private restoreFieldFocus(): void {
		const input = this.inputEl;
		if (!input) return;
		const start = input.selectionStart ?? 0;
		const end = input.selectionEnd ?? 0;
		const claim = (): void => {
			if (!input.isConnected || this.inputEl !== input) return;
			if (document.activeElement === input) return;
			input.focus({ preventScroll: true });
			input.setSelectionRange(start, end);
		};
		window.requestAnimationFrame(() => {
			claim();
			window.requestAnimationFrame(claim);
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
			// Something is in the way. Asked rather than refused: the way
			// through it is usually one of three things, all of them a step
			// away from here and a detour from anywhere else.
			if (!(await this.moveThroughCollision(this.file, existing, newPath))) return;
		} else {
			try {
				const parentPath = newPath.substring(0, newPath.lastIndexOf("/"));
				await this.ensureFolderExists(parentPath);
				await this.plugin.app.fileManager.renameFile(this.file, newPath);
			} catch (err) {
				new Notice(t("noticeRenameFailed", { error: (err as Error).message }));
				return;
			}
		}

		// The note is where you sent it, and the tree is where you look for
		// it afterwards — so it is shown there, rather than left for you to
		// go and find.
		this.revealInExplorer(this.file);
		this.finishRename();
	}

	/**
	 * Finishes a move or rename whose destination is taken, the way the
	 * dialog is told to: rename what is in the way and carry on, or trade
	 * places, or trade names with it. Returns whether the file was moved;
	 * cancelling the dialog moves nothing.
	 *
	 * Every step goes through `fileManager.renameFile`, so links follow each
	 * file at every step. A swap needs a third name to pass through — two
	 * files cannot hold one name even for an instant — and that name is
	 * given back before this returns.
	 */
	private async moveThroughCollision(file: TAbstractFile, occupant: TAbstractFile, newPath: string): Promise<boolean> {
		const app = this.plugin.app;
		const parentOf = (path: string): string => path.slice(0, Math.max(0, path.lastIndexOf("/")));
		const join = (folder: string, name: string): string => (folder ? `${folder}/${name}` : name);
		const from = file.path;
		const sameFolder = parentOf(from) === parentOf(newPath);
		const choice = await askAboutCollision(app, {
			moving: file,
			occupant,
			sameFolder,
			isFree: (name) => app.vault.getAbstractFileByPath(join(parentOf(occupant.path), name)) === null,
		});
		if (!choice) return false;

		const rename = (item: TAbstractFile, to: string) => app.fileManager.renameFile(item, to);
		const passing = (item: TAbstractFile): string => {
			const folder = parentOf(item.path);
			for (let n = 1; ; n++) {
				const candidate = join(folder, `${item.name}.lure-swap-${n}`);
				if (!app.vault.getAbstractFileByPath(candidate)) return candidate;
			}
		};
		try {
			if (choice.kind === "rename-occupant") {
				await rename(occupant, join(parentOf(occupant.path), choice.name));
				await this.ensureFolderExists(parentOf(newPath));
				await rename(file, newPath);
			} else if (choice.kind === "swap-names") {
				// Within one folder: this file takes the other's name, and the
				// other takes the one this file had.
				await rename(occupant, passing(occupant));
				await rename(file, newPath);
				await rename(occupant, from);
			} else {
				// Across folders: each keeps its own name and takes the other's
				// folder. The occupant's new home has to be free for it.
				const home = join(parentOf(from), occupant.name);
				const blocker = app.vault.getAbstractFileByPath(home);
				if (blocker && blocker !== file) {
					new Notice(t("noticeAlreadyExists", { path: home }));
					return false;
				}
				await rename(occupant, passing(occupant));
				await rename(file, newPath);
				await rename(occupant, home);
			}
		} catch (err) {
			new Notice(t("noticeRenameFailed", { error: (err as Error).message }));
			return false;
		}
		return true;
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
	private validateTarget(rawText: string, baseFolder: string, stage: ValidationStage = "commit"): string {
		const trimmed = rawText.trim();
		if (!trimmed) return t("msgEmpty");
		// A name that is taken is only a fault once you try to use it. Every
		// name typed toward `Notes.md` passes through `N`, `No`, `Not` — and
		// any of those may be a file of its own, so the warning flashed up
		// and away as the name was being written, about a name nobody had
		// asked for yet. What is wrong with the *spelling* of a name is worth
		// saying while it is spelled; what is wrong with using it waits for
		// the key that uses it, which reports it itself.
		const taken = stage === "commit";

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
			if (!taken) return "";
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

		if (!taken) return "";
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
		const message = rawText.trim() ? this.validateTarget(rawText, baseFolder, "typing") : "";
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
	 * Whether Enter on what is in the field would make something that is not
	 * there yet, rather than open something that is.
	 *
	 * Deliberately a re-reading of `handleTypedSubmit` and `submitExternal`
	 * rather than a second opinion about them — same unquoting, same folder
	 * to be relative to, same `.md` on a bare name, same order of questions.
	 * If the two ever drift apart the row is lying about what the next
	 * keystroke does, which is worse than the row saying nothing at all;
	 * `test-create.mjs` pins them together by colouring the field and then
	 * actually pressing the key.
	 *
	 * False for everything that is not a question about this machine: an
	 * empty field names nothing yet, and a web address is not a place here
	 * to go looking for.
	 */
	/**
	 * The page a typed `:something` names, or null.
	 *
	 * The label is the one the dropdown offers and the row shows, so what can
	 * be picked from the list can equally be typed — which is what an address
	 * bar means. Nothing else can collide with it: a colon is not a character
	 * Obsidian allows in a name, so a path can never be mistaken for a page.
	 */
	private typedPageType(rawText: string): string | null {
		return this.typedPage(rawText)?.type ?? null;
	}

	/**
	 * The page a typed `:something` names, and the folder it was typed in.
	 *
	 * A page is in no folder, but where you ask for one can still say what it
	 * should be about: `:graph` typed while standing in `atlas/code` — after
	 * the chips, or after `atlas/code/` in the field — opens the graph of
	 * that folder, and at the vault root the graph of everything.
	 */
	private typedPage(rawText: string): { type: string; folder: string } | null {
		// Never while a move is pending: there the field is naming where a
		// file goes, and a view is not a place to put one.
		if (this.renameMode || this.externalPath !== null) return null;
		const trimmed = rawText.trim();
		const slash = trimmed.lastIndexOf("/");
		const typed = trimmed.slice(slash + 1).toLowerCase();
		if (!typed.startsWith(":")) return null;
		const type = this.pageTypes().find((candidate) => pageLabel(candidate).toLowerCase() === typed);
		if (!type) return null;
		const base = this.currentFolderPath();
		const typedFolder = slash > 0 ? trimmed.slice(0, slash).replace(/^\/+|\/+$/g, "") : "";
		const folder = [base, typedFolder].filter(Boolean).join("/");
		return { type, folder };
	}

	/**
	 * Opens a page in a leaf, about the folder it was asked for in.
	 *
	 * Only the graph has anything to say about a folder: it is filtered to it
	 * through its own search box, exactly as typing `path:"atlas/code"` there
	 * would. The graph has no view state for this — its filter is one of its
	 * options, which Obsidian keeps between graphs — so the filter stays in
	 * that box, visible and clearable, as a typed one would. At the vault
	 * root the graph is the whole graph again: a filter of exactly the shape
	 * this sets is taken off, and any other filter is left as it was typed.
	 */
	private async openPage(leaf: WorkspaceLeaf, type: string, folder: string): Promise<void> {
		await leaf.setViewState({ type, active: true });
		if (type !== "graph") return;
		const engine = (
			leaf.view as unknown as {
				dataEngine?: {
					getOptions?: () => { search?: string };
					setOptions?: (options: { search: string }) => void;
				};
			}
		).dataEngine;
		if (folder) {
			engine?.setOptions?.({ search: `path:"${folder.replace(/"/g, '\\"')}"` });
			return;
		}
		if (/^path:"[^"]*"$/.test(engine?.getOptions?.().search ?? "")) engine?.setOptions?.({ search: "" });
	}

	private typedCreatesNew(rawText: string): boolean {
		// Same expansion the commit does, so the field's colour and Enter can
		// never disagree about what a tilde means.
		const trimmed = expandHome(unquotePath(rawText));
		if (!trimmed) return false;
		// Rename mode is the one place where a name nothing answers to is
		// the *expected* case — that is what renaming is — and it has its
		// own red for the two things that are actually wrong there, an
		// illegal name and a taken one. Two reds on one field, meaning
		// opposite things, would leave neither readable.
		if (this.renameMode) return false;
		// A page is somewhere to go, not something to make — and the red here
		// would be a promise that Enter is about to create a note called
		// `:graph`, which is a name the vault would refuse anyway.
		if (this.typedPageType(trimmed)) return false;

		const target = classifyTypedTarget(trimmed);
		// An absolute path resolves against the real filesystem — inside the
		// vault first, exactly as openTypedTarget does — and never creates:
		// not found there is a notice, not a new file.
		if (target) return false;
		if (this.externalPath === null && isAbsolutePath(trimmed)) return false;

		if (this.externalPath !== null) {
			const typedPath = isAbsolutePath(trimmed) ? trimmed : externalJoin(this.externalPath, trimmed);
			if (isExternalFolder(typedPath)) return false;
			return !isExternalFile(this.withNoteExtension(typedPath));
		}

		const folderPath = this.currentFolderPath();
		const candidate = normalizePath(folderPath ? `${folderPath}/${trimmed}` : trimmed);
		if (this.entryExists(candidate, false)) return false;
		return !this.entryExists(normalizePath(this.withNoteExtension(candidate)), false);
	}

	/**
	 * Paints the field for what Enter would do with it.
	 *
	 * Hung off `autoSize` rather than off the `input` event, because
	 * `autoSize` is already this file's "the value changed" hook: the
	 * suggestion preview, the tab walk and the selection ladder all write
	 * into the field without dispatching a trusted keystroke, and all of
	 * them resize it afterwards. One hook, and none of them can forget.
	 */
	private paintCreateHint(inputEl: HTMLInputElement): void {
		// The field wears the colour of the row it stands for, so a note, a
		// folder's note and a file Obsidian has no view for read the same typed
		// as listed. Red is kept for what the list cannot answer at all: a name
		// no row in the folder even leads to, which Enter would make.
		const { listed, tint } = this.suggest?.fieldTint(queryAtCaret(inputEl)) ?? {
			listed: false,
			tint: null,
		};
		// A folder the row has walked into that is not there yet keeps the
		// field red even while it is empty: the path being built does not
		// exist, and pressing Enter is what would make it. Without this the
		// red vanished at the very press that took the path somewhere it
		// could only be created.
		const standingSomewhereNew =
			this.externalPath === null &&
			this.browsePath !== null &&
			this.browsePath !== "" &&
			!this.entryExists(this.browsePath, false);
		const creates = (!listed && this.typedCreatesNew(inputEl.value)) || standingSomewhereNew;
		inputEl.toggleClass(WILL_CREATE_CLASS, creates);
		if (tint && !creates) inputEl.dataset.lureTint = tint;
		else delete inputEl.dataset.lureTint;
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
		// Out here Obsidian's *Detect all file extensions* does not apply. It
		// governs what the vault indexes as a file, and nothing out here is
		// in the vault: a `.txt` beside your notes is a file this row can
		// show — the plugin has a viewer for exactly these — so hiding it
		// because of a setting about vault contents said the folder was
		// empty when it was not.
		return true;
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
	 * Arrowing off the front of the field brings the folder before it in.
	 *
	 * The field holds the part of the path being edited and the chips hold the
	 * rest, so the caret stopped dead at the first character with the folder it
	 * was heading for right there beside it. Each key that moves toward the
	 * front now carries on into that folder, as it would if the whole path were
	 * one line of text: Left lands at the end of its name, a word jump at the
	 * start of it, and Home takes in every folder up to where the row begins.
	 * Shift keeps what was selected and stretches it over what came in.
	 *
	 * Only from the very front — anywhere else these are ordinary presses in a
	 * text field, Home included once there is nothing left to bring in — and
	 * never past where the row stops: the vault root, or the place that was
	 * picked outside it.
	 *
	 * Home only reaches this with no dropdown showing. While a list is up its
	 * navigation keys are the list's — Home and End for its first and last
	 * row, as Obsidian binds them — and Shift+Home, which the list leaves
	 * alone, is the way to take every folder in with it open.
	 */
	private revealFolderOnKey(evt: KeyboardEvent, inputEl: HTMLInputElement): boolean {
		if (this.showingLocations || evt.isComposing) return false;
		const mac = Platform.isMacOS;
		const home = evt.key === "Home" || (mac && evt.metaKey && evt.key === "ArrowLeft");
		if (!home && evt.key !== "ArrowLeft") return false;
		// Alt+Left is Obsidian's "go back" off macOS, not a caret key.
		if (!mac && evt.altKey) return false;
		const byWord = !home && (mac ? evt.altKey : evt.ctrlKey);
		const start = inputEl.selectionStart ?? 0;
		const end = inputEl.selectionEnd ?? 0;
		const backward = inputEl.selectionDirection === "backward";
		if (!home && start !== 0) return false;
		// Without Shift a selection collapses to its front first, as it would in
		// any field; with it, only a selection whose moving end is at the front
		// is stretched further that way.
		if (!home && start !== end && !(evt.shiftKey && backward)) return false;

		const revealed = this.foldersBeforeField(home ? Infinity : 1);
		if (!revealed) return false;
		const separator = this.externalPath !== null ? PATH_SEP : "/";
		const prefix = revealed.names.map((name) => name + separator).join("");
		const nearest = revealed.names[revealed.names.length - 1] ?? "";
		const caret = home ? 0 : prefix.length - separator.length - (byWord ? nearest.length : 0);
		// The end of the selection that stays where it was.
		const anchor = (backward ? end : start) + prefix.length;

		if (this.externalPath !== null) this.extendExternalPath(revealed.folder);
		else this.extendBrowsePath(revealed.folder);
		this.enterTypingMode(prefix + inputEl.value, "none");
		const input = this.inputEl;
		if (!input) return true;
		if (evt.shiftKey && caret !== anchor) {
			input.setSelectionRange(Math.min(caret, anchor), Math.max(caret, anchor), caret < anchor ? "backward" : "forward");
		} else {
			input.setSelectionRange(caret, caret);
		}
		// The list follows the caret, and the caret is now in a folder the list
		// was not about. Unfiltered, for the reason the caret move gives: what
		// the folder that has just come in is *for* is its siblings, and
		// filtering by the name standing there leaves that one row.
		this.suggestQueryOverride = "";
		input.dispatchEvent(new Event("input"));
		return true;
	}

	/**
	 * Up to `levels` folders before the field, outermost first, and the folder
	 * the chips stop at once they are taken in. Null when there is none to take.
	 */
	private foldersBeforeField(levels: number): { folder: string; names: string[] } | null {
		const names: string[] = [];
		if (this.externalPath !== null) {
			let folder = this.externalPath;
			while (names.length < levels) {
				if (this.externalBase && samePath(folder, this.externalBase.path)) break;
				const parent = externalParent(folder);
				if (!parent) break;
				names.unshift(folder.slice(parent.length).replace(/^[\\/]+/, ""));
				folder = parent;
			}
			return names.length ? { folder, names } : null;
		}
		let folder = this.currentFolderPath();
		while (names.length < levels && folder) {
			const cut = folder.lastIndexOf("/");
			names.unshift(cut === -1 ? folder : folder.slice(cut + 1));
			folder = cut === -1 ? "" : folder.slice(0, cut);
		}
		return names.length ? { folder, names } : null;
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
		// An offer is what this press would write. Where every name agreed
		// that far, the press carries on from it as it always has — into the
		// one folder left, or onto the ladder of a finished name. Where it was
		// a step toward the first of several, it was a choice, and taking it
		// is the whole press.
		const tookWalksOn = this.suggested?.agreed ?? false;
		const tookStep = took ? this.trailStep(false) : null;
		if (took) this.settleSuggestion(true);
		if (took && !tookWalksOn) {
			if (tookStep) this.tabTrail.push(tookStep);
			return;
		}

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
			// Unless what the field names is a page. The ladder widens a
			// *path* — name, name with extension, from the vault, from the
			// machine — and a page has none of those: its `path` is the view
			// type, which the rungs would have written into the field as
			// though it were a folder, turning `:graph` into `graph`. A page
			// is whole the moment it is spelled, so the press stops there —
			// and takes with it whatever the field still holds around it.
			if (rows.some((row) => row.kind === "page" && row.path === action.path)) {
				this.writeWholePage(input, input.value.slice(bounds.start, bounds.end));
				return;
			}
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
		// A completed page is the whole of what the field says, so it replaces
		// the whole of it: a page is in no folder, and nothing lives under
		// one, so `atlas/:gr` finishing as `atlas/:graph/note.md` would name
		// something that cannot exist. Anything the press did not complete
		// goes with it.
		if (this.typedPageType(action.text)) {
			this.writeWholePage(input, action.text);
			return;
		}
		this.writeSegment(input, bounds, action.text);
	}

	/**
	 * Puts a page's name in the field and nothing else.
	 *
	 * Not `writeSegment`, which replaces the segment the caret is in and
	 * leaves the path around it standing. Around a page there is no path to
	 * leave: it is not in a folder and has nothing under it.
	 */
	private writeWholePage(input: HTMLInputElement, label: string): void {
		if (input.value === label) return;
		this.writeSegment(input, { start: 0, end: input.value.length }, label);
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
	/**
	 * Walking into a folder while renaming is a move, and a move keeps the
	 * name it is moving.
	 *
	 * Carrying the typed tail instead — which is what every other walk does —
	 * emptied the field, because the tail is measured against the folder the
	 * row is standing in and means nothing in the one just picked. The note
	 * then had to be typed out again to move it, in rename mode, where its
	 * name is the one thing already known.
	 *
	 * It opens on the stem, the rung `startHeaderRename` opens on: Enter as it
	 * stands moves the note, and typing renames it on the way.
	 */
	private descendForMove(folderPath: string): void {
		const name = this.file?.name ?? "";
		if (!name) return;
		const step = this.trailStep(false);
		if (step) this.tabTrail.push(step);
		if (this.externalPath !== null) this.extendExternalPath(folderPath);
		else this.extendBrowsePath(folderPath);
		this.enterTypingMode(name, pathStem(name).length);
	}

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
		// Exactly what Tab would write here, so the offer and the key never
		// disagree about what comes next.
		const whole = planOffer(query, candidates);
		if (!whole) return;
		const add = whole.slice(query.length);

		input.value = input.value.slice(0, caret) + add + input.value.slice(caret);
		input.setSelectionRange(caret, caret + add.length);
		this.suggested = {
			start: caret,
			end: caret + add.length,
			prefix: whole,
			// Whether the names all agree this far, or the offer is a step
			// toward the first of several. Only agreement lets the press that
			// takes it carry on past it; a step is a choice, and taking it is
			// the whole of the press.
			agreed: whole.length <= commonPrefix(candidates.map((candidate) => candidate.label)).length,
		};
	}

	/**
	 * Moves the start of the offered run on by one letter, so that letter
	 * counts as typed and the rest is still offered. The last letter takes
	 * the whole offer, which is what respells the segment the way the names
	 * spell it.
	 */
	private takeOfferedLetter(): void {
		const run = this.suggested;
		const input = this.inputEl;
		if (!run || !input) return;
		if (run.end - run.start <= 1) {
			this.settleSuggestion(true);
			return;
		}
		run.start += 1;
		input.setSelectionRange(run.start, run.end);
		// The underline in the list follows the offer.
		input.dispatchEvent(new Event("input"));
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

	/**
	 * Whether "/" pressed here is a character of a path on this machine.
	 *
	 * The row's own "/" means "take this rung and descend", and descending
	 * counts what was typed from the folder the row is standing in — which a
	 * path from the filesystem root has nothing to do with. In front of an
	 * empty field the press *opens* such a path, and that is the only way to
	 * type one by hand: it was a no-op there, so `/home/me` arrived as `home`
	 * and was built again as folders inside the vault, under the vault's own
	 * name and icon. Once the text is absolute — or a `~` that expands to one
	 * — every later slash in it belongs to it too.
	 */
	private slashTypesSystemPath(inputEl: HTMLInputElement): boolean {
		// From the start of the selection, not its end: text that opens
		// marked is about to be typed over, and a slash replacing the whole
		// path is the first character of a new one rather than a rung of the
		// old.
		const caret = inputEl.selectionStart ?? inputEl.value.length;
		if (!inputEl.value.slice(0, caret).trim()) return true;
		return isAbsolutePath(expandHome(inputEl.value.trim()));
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

		// A name Obsidian cannot give a folder is not a rung to stand on. The
		// press used to descend anyway, so the row committed to a folder that
		// could never be created and every later press was measured against
		// it; the field is left exactly as typed instead, red as it already
		// was, and the caret where the user is still fixing it.
		//
		// A name that is merely not there yet is a different thing and still
		// descends: typing a path ahead of itself is how a path gets made.
		// Outside the vault the rules are the filesystem's, not Obsidian's.
		if (this.externalPath === null) {
			const name = typed.split("/").pop() ?? typed;
			if (ILLEGAL_CHARS_RE.test(name)) return;
		}

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

	/**
	 * The folder the dropdown is about: where the chips stand, plus whatever
	 * of the field lies in front of the segment the caret is in.
	 *
	 * The chips alone were the answer before, which is right only while the
	 * caret is in the first segment of the field. Click into `Notes.md` in a
	 * field holding `2026/Notes.md` and the list went on offering the chips'
	 * own children — the right names for a folder the caret had left.
	 *
	 * Listing only: what a commit resolves against is still the chips plus
	 * the whole of the field, which is the path that was typed.
	 */
	private folderAtCaret(): string {
		const input = this.inputEl;
		const base = this.currentFolderPath();
		if (!input) return base;
		const bounds = segmentBoundsAtCaret(input.value, listedFrom(input));
		const before = input.value.slice(0, bounds.start).replace(/[\\/]+$/, "");
		if (!before) return base;
		return base ? `${base}/${before}` : before;
	}

	/** The same question outside the vault, where the trail is absolute. */
	private externalFolderAtCaret(): string | null {
		if (this.externalPath === null) return this.typedSystemFolderAtCaret();
		const input = this.inputEl;
		if (!input) return this.externalPath;
		const bounds = segmentBoundsAtCaret(input.value, listedFrom(input));
		const before = input.value.slice(0, bounds.start).replace(/[\\/]+$/, "");
		return before ? externalJoin(this.externalPath, before) : this.externalPath;
	}

	/**
	 * The folder on the machine an absolute path typed into a vault row is
	 * standing in, or null while the field holds a path of this vault's.
	 *
	 * The names in front of the caret are then folders on the machine, so
	 * what the list is about is the machine — the vault's own names had no
	 * business being offered there, and taking one wrote it into the path:
	 * in a vault holding `home.md`, typing `/home` completed itself to
	 * `/home.md`.
	 */
	private typedSystemFolderAtCaret(): string | null {
		const input = this.inputEl;
		if (!input) return null;
		const bounds = segmentBoundsAtCaret(input.value, input.selectionEnd ?? input.value.length);
		const before = expandHome(input.value.slice(0, bounds.start).trim());
		if (!isAbsolutePath(before)) return null;
		// The root keeps its separator: it *is* one, and stripped of it there
		// is no path left to list.
		return before.replace(/(?<=.)[\\/]+$/, "");
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
		// A pane holding no file still has a vault, and the places are about
		// the vault rather than about a note: refusing here left the one
		// gesture that leads out of the vault dead on an empty tab and on the
		// graph, which are exactly the panes you would use to go somewhere.
		if (!this.file && this.externalPath === null && this.pseudoSegment() === null) return;
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
		// A pane with no file has the vault root to type from, which is what
		// makes an empty tab's row an address bar rather than a label.
		if (
			!this.file &&
			this.externalPath === null &&
			this.browsePath === null &&
			this.pseudoSegment() === null
		) {
			return;
		}
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
			this.titleEl.parentElement?.addClass(EDITING_ROW_CLASS);
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
		this.lapArmedFor = null;

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
			// Same hook, because it answers the same question: the value
			// changed, so what the row is saying about it has to change too.
			this.paintCreateHint(inputEl);
			this.syncAbsoluteTrail(inputEl.value);
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
				if (key === "End") {
					evt.preventDefault();
					this.settleSuggestion(true);
					return;
				}
				if (key === "ArrowRight" && !evt.shiftKey && !evt.ctrlKey && !evt.metaKey && !evt.altKey) {
					// One letter of it, the way the arrow moves one letter
					// anywhere else. The rest stays offered.
					evt.preventDefault();
					this.takeOfferedLetter();
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

			if (this.revealFolderOnKey(evt, inputEl)) {
				evt.preventDefault();
				return;
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
				// Or where it belongs to a path on the machine rather than to
				// a rung of this row.
				if (this.slashTypesSystemPath(inputEl)) return;
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
		// Which segment of the path the caret is in, counted in separators
		// rather than in characters. A segment's bounds shift whenever the text
		// around it changes length, so keying on them made *typing* look like
		// the caret walking into another folder — and the fresh folder listing
		// that answers that threw away the filter the typing had just set,
		// reopening the whole folder on every keystroke that shortened a name.
		const segmentIndex = (): number => {
			const caret = listedFrom(inputEl);
			let index = 0;
			for (let i = 0; i < caret && i < inputEl.value.length; i++) {
				const ch = inputEl.value[i];
				if (ch === "/" || ch === "\\") index += 1;
			}
			return index;
		};
		let standingIn = segmentIndex();
		let settled = queryBeforeCaret(inputEl);

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
			// The list is about the caret, or the start of a selection: the
			// folder it stands in, filtered by the letters in front of it. So
			// the start of a name lists all of its siblings, and a caret part
			// of the way in lists the ones that begin the same way — the
			// letters behind it are settled, and the rest is what is being
			// looked for.
			const index = segmentIndex();
			const query = queryBeforeCaret(inputEl);
			if (index === standingIn && query === settled) return;
			standingIn = index;
			settled = query;
			this.suggestQueryOverride = query;
			inputEl.dispatchEvent(new Event("input"));
		};
		// Three events rather than `selectionchange` on the document, so they
		// go when the field does: dragging over the text fires `select`, the
		// sideways arrows `keyup`, and a click placing the caret `mouseup`.
		for (const moved of ["select", "keyup"]) {
			inputEl.addEventListener(moved, onCaretMoved);
		}
		// The pointer is read a tick late, because a press moves the caret
		// *after* the event that announces it: asked during `mouseup`, the
		// field still reports where the caret was, the segment looks unchanged
		// and the list is left describing the folder the caret has just left.
		// Clicking into another part of the path did nothing at all for that
		// one reason, while arrowing into it — `keyup`, which comes after the
		// caret has moved — worked.
		inputEl.addEventListener("mouseup", (evt) => {
			window.setTimeout(() => {
				if (inputEl.isConnected) onCaretMoved(evt);
			}, 0);
		});

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
				this.suggestQueryOverride = queryBeforeCaret(inputEl);
				settled = this.suggestQueryOverride;
				standingIn = segmentIndex();
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
		for (const modifiers of MODIFIED_ENTER) {
			scope.register(modifiers, "Enter", (evt) => {
				evt.preventDefault();
				void this.handleTypedSubmit(inputEl.value, this.paneTypeFor(evt));
				return false;
			});
		}
		// And the same keymap is how the note underneath went on being edited
		// while a path was being typed. Obsidian dispatches command hotkeys
		// from a window listener, above the DOM and regardless of what has
		// focus, so Ctrl+B pressed at this field bolded whatever the editor's
		// cursor was sitting on — text changed in a note nobody was looking
		// at, by a keystroke aimed at a path. Every modified key is claimed
		// here instead, and the ones the *field* lives on are handed back.
		guardFieldKeys(scope);
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
				folderPath: this.folderAtCaret(),
				locations: this.showingLocations ? this.locationEntries() : null,
				externalFolder: this.externalFolderAtCaret(),
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
				mayListExternal: this.plugin.settings.accessExternalFiles,
				warnsOnOpen: (extension) => this.warnsOnOpen(extension),
				isFolderNote: (path) => this.isFolderNote(path),
				pages: this.mainPaneViewTypes(),
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
			// The same thing the field's own Enter does, because it is the
			// same press: the popover took it before the field could, and
			// standing on no row it had nothing of its own to do with it.
			(evt) => void this.handleTypedSubmit(inputEl.value, this.paneTypeFor(evt)),
			// The field's colour is read off the list, which has just changed.
			() => {
				if (this.inputEl === inputEl) this.paintCreateHint(inputEl);
			},
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
				// A page, not a path: it opens where a note picked from the
				// same list would open — this pane, or a new tab under a held
				// modifier — and the row then names it as the pseudo-segment
				// does, because that is what the leaf is holding.
				if (value.kind === "page") {
					this.cancelNavigation();
					const leaf = paneType
						? this.plugin.app.workspace.getLeaf(paneType)
						: this.leaf;
					void leaf.setViewState({ type: value.path, active: true });
					return;
				}
				// Checked before `external`, which is about where the entry
				// lives: a keep-name entry is a destination to commit to
				// either way, never something to open.
				if (value.kind === "keep-name") {
					// Held modifier turns the move into a copy under the same
					// name, so "put a duplicate over there" is the same gesture
					// as "move it over there".
					void this.commitRenameTo(value.path, !!value.external, paneType);
					return;
				}
				if (value.external) {
					this.selectExternalEntry(value.path, paneType);
					return;
				}
				if (value.kind === "folder") {
					if (this.renameMode) {
						this.descendForMove(value.path);
						return;
					}
					this.descendCarrying(value.path, this.restAfterEditedSegment());
					return;
				}
				if (this.renameMode) {
					// A file's name is taken by that file, and picking it is
					// asking for it anyway: the move commits there, and the
					// collision dialog asks what to do about the one in the
					// way. Filling the field instead left a choice made in
					// the list with nothing to do but be typed over.
					void this.commitRenameTo(value.path, false, paneType);
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
			// Nothing was being previewed, so there is nothing to put back —
			// and an offer standing in the field is the one the last restore
			// made, not something a row wrote.
			if (!held) return;
			input.value = held.text;
			// The selection comes back too. Restoring the text alone left the
			// caret at the end of it, so stepping off the list gave you your
			// path back with the segment you had been editing no longer
			// picked out — and the next keystroke appended instead of
			// replacing.
			input.setSelectionRange(held.selectionStart, held.selectionEnd);
			this.preview = null;
			// And so does the offer it had to take back to make room, if there
			// was one: looking at the list and looking away again leaves the
			// field as it was.
			if (this.offerBeforePreview) this.offerSuggestion(input);
			this.offerBeforePreview = false;
			this.autoSizeInput?.();
			return;
		}

		// A row of the list is about to write into the field, and what it
		// writes replaces the segment — offered run and all. Taking the offer
		// back first is what keeps the text it holds on to, and gives back,
		// the text the user actually typed.
		if (!held) this.offerBeforePreview = this.settleSuggestion(false);

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
		// Shown the way the offer is: what you typed stays yours, and the rest
		// of the row's name is marked as a suggestion — so pointing at a row
		// looks exactly like the offer that row would make, and typing runs on
		// from what you had. A row that does not begin with what was typed
		// (the list matches anywhere in a name) is marked whole, since none
		// of it is yours.
		const typed = base.text.slice(start, Math.min(base.selectionStart, end));
		const kept = typed && value.label.toLowerCase().startsWith(typed.toLowerCase()) ? typed.length : 0;
		input.setSelectionRange(start + kept, start + value.label.length);
		this.autoSizeInput?.();
	}

	/** Removes the typing input (if any) and returns filenameEl to plain text, without touching browsePath. */
	private exitTypingInput(): void {
		if (this.mode !== "typing") return;
		this.editCleanup?.();
		this.editCleanup = null;
		this.inputEl = null;
		this.mode = this.browsePath !== null ? "browsing" : "breadcrumb";
		// The absolute path went with the field, so the row belongs to the
		// vault again. Redrawn rather than left standing: an opening segment
		// showing `/` with no field under it names nowhere.
		if (this.typedAbsolute !== null) {
			this.typedAbsolute = null;
			this.renderVaultSegment();
		}
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
		// A held drop belongs to the field it opened. Cancelling the row is
		// the way out of that gesture — there is no second one to undo it
		// with — and content that outlived its own field would be written
		// into whatever the *next* commit happened to name.
		this.pendingDrop = null;
		this.dropDepth = 0;
		this.showDropRing(false);
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
		//
		// The tilde goes the same way and for the same reason: it is written
		// by the thing the path was copied from, means the home folder, and is
		// not something any branch below could make sense of.
		const trimmed = expandHome(unquotePath(rawText));
		if (!trimmed) {
			// Nothing in the field names anything to open — standing in an
			// empty folder, say, where there was never anything to complete.
			// Closing the row here looked exactly like opening something,
			// which is the one thing that did not happen; the field stays up
			// so the path can be finished, and Escape is still the way out.
			new Notice(t("noticeNoSelection"));
			return;
		}

		// A page the row can name — `:graph`, `:search`, a plugin's own tab.
		// Before everything else because it is not a path at all, and because
		// the colon that marks it is a character no name may contain.
		const page = this.typedPage(trimmed);
		if (page) {
			this.cancelNavigation();
			const target = paneType ? this.plugin.app.workspace.getLeaf(paneType) : this.leaf;
			void this.openPage(target, page.type, page.folder);
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

		// And a plain absolute path is the same kind of thing as an encoded
		// one, which `classifyTypedTarget` already sends there — it just
		// arrives without the percent signs that gave the game away. Outside
		// the vault the trail is already absolute and `submitExternal` does
		// this itself; inside, the leading separator was folded into the
		// current folder, so committing the locations field as it opens
		// rebuilt the machine's whole path as folders in the vault.
		if (this.externalPath === null && isAbsolutePath(trimmed)) {
			await this.openTypedTarget({ kind: "path", path: trimmed }, paneType);
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
			// Inside the vault by construction: an external row was routed to
			// submitExternal above.
			await this.commitRenameTo(normalized, false, paneType);
			return;
		}

		const existing = this.plugin.app.vault.getAbstractFileByPath(normalized);

		if (existing instanceof TFile) {
			// Held content goes in before the note is opened, so what appears
			// is the note as the drop left it rather than the note as it was,
			// redrawn a moment later.
			if (this.pendingDrop) await this.commitPendingDrop(existing, false);
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
			// A note made to hold a drop is made holding it, rather than made
			// empty and written to afterwards — there is no moment where the
			// gesture half-happened.
			if (this.pendingDrop) await this.commitPendingDrop(newFile, true);
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
		const typedPath = isAbsolutePath(typed) ? typed : externalJoin(base, typed);

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
	/**
	 * Commits the pending move or copy to `target`, whichever side of the
	 * vault boundary the file is coming from and going to.
	 *
	 * There are four directions across that boundary and they were spelled
	 * out in two places — once for a path typed into the field, once for a
	 * keep-name row picked out of the list. Which is exactly how the same
	 * corner came to be missing from both: bringing a file *in* fell through
	 * to `moveFileTo`, whose first line returns when there is no TFile, so
	 * the gesture did nothing and said nothing. One decision, one place.
	 *
	 * `external` is where the *target* is, which is the caller's to know:
	 * the typed path has already been resolved against the vault by the time
	 * it gets here, and a picked row carries it.
	 */
	private async commitRenameTo(
		target: string,
		external: boolean,
		paneType: PaneType | false,
	): Promise<void> {
		if (external) {
			await this.commitExternalRename(target, paneType);
			return;
		}
		if (this.externalRenameSource()?.fromVault === false) {
			await this.importIntoVault(target, paneType);
			return;
		}
		// Both refuse to clobber an existing file, so a taken name reports
		// the conflict rather than overwriting.
		if (paneType) await this.copyFileTo(target, paneType);
		else await this.moveFileTo(target);
	}

	/**
	 * Brings a file in from outside, to a path inside the vault.
	 *
	 * The fourth direction across the boundary, and the last one to be
	 * built: vault-to-vault is `moveFileTo`, and vault-to-outside and
	 * outside-to-outside are both `commitExternalRename`. This is its
	 * mirror, and it follows the same order of operations for the same
	 * reason — write the copy first, remove the original only once that has
	 * succeeded, so a failure at either step leaves the file where it was
	 * rather than nowhere.
	 *
	 * **Not a native move**, though `moveExternalFile` is right there and
	 * would even handle the cross-filesystem case. Going the other way this
	 * code already refuses a bare rename across the boundary, because it
	 * takes the file out from under the index; coming this way the same
	 * rename would put a file *into* the vault directory that the index does
	 * not know about, and this method has to hand that file to
	 * `navigateToFile` on the next line. Creating through the vault means
	 * the TFile exists the moment the write returns.
	 *
	 * The padlock is asked for only when moving. Copying in writes nothing
	 * outside the vault, so there is nothing out there for the gate to
	 * protect; a move also deletes the original, which is an outside write
	 * like any other and goes to the desktop's trash.
	 */
	private async importIntoVault(target: string, paneType: PaneType | false): Promise<void> {
		const source = this.externalRenameSource();
		if (!source || source.fromVault) return;

		const copying = paneType !== false;
		if (this.plugin.app.vault.getAbstractFileByPath(target)) {
			new Notice(t("noticeAlreadyExists", { path: target }));
			this.inputEl?.focus();
			return;
		}
		// Only the move needs it: it is the half of this that reaches back out
		// and removes something.
		//
		// Asked directly rather than through `requireExternalUnlock`, which
		// gates on where the *row* is pointing — and by this point the row has
		// been pointed inside the vault to choose the destination, so that
		// gate would let every move through. What needs the padlock here is
		// the source, which is still outside.
		if (!copying && !this.externalWritesUnlocked) {
			new Notice(t("noticeExternalWriteLocked"));
			this.inputEl?.focus();
			return;
		}

		let created: TFile;
		try {
			const bytes = await readExternalFile(source.path);
			const parentPath = target.substring(0, target.lastIndexOf("/"));
			await this.ensureFolderExists(parentPath);
			created = await this.plugin.app.vault.createBinary(target, bytes);
		} catch (err) {
			new Notice(
				t(copying ? "noticeCopyFailed" : "noticeRenameFailed", {
					error: (err as Error).message,
				}),
			);
			this.inputEl?.focus();
			return;
		}

		// The file is in, and that half is not undone by what follows. Removing
		// the original can fail on its own — a filesystem with no trash to move
		// it to is the ordinary case, and /tmp is one — and a move that half
		// happened is worth saying out loud, because the file is now in two
		// places and only one of them was asked for.
		if (!copying) {
			try {
				await trashExternalEntry(source.path);
			} catch (err) {
				new Notice(t("noticeExternalWriteFailed", { error: (err as Error).message }));
			}
		}

		this.finishRename();
		// No notice, for the reason the vault's own move gives none: the file
		// is where you sent it and the tree is where you look for it, so it is
		// shown there instead of announced.
		this.revealInExplorer(created);
		// The leaf is showing the outside file, which for a move no longer
		// exists — so it follows the copy in, exactly as moving out makes the
		// leaf follow the file out.
		this.navigateToFile(created, paneType);
	}

	private async commitExternalRename(
		target: string,
		paneType: PaneType | false,
	): Promise<void> {
		const source = this.externalRenameSource();
		if (!source) return;

		const copying = paneType !== false;
		// Committing the path unchanged is a no-op, exactly as inside. A copy
		// onto the file itself is not: it is refused, and said so, as inside —
		// ending the rename without a word read as the press doing nothing.
		if (samePath(source.path, target)) {
			if (copying) {
				new Notice(t("noticeAlreadyExists", { path: target }));
				this.inputEl?.focus();
				return;
			}
			this.finishRename();
			return;
		}
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
	 * Focuses the row on the name, and walks it the way the rename key does.
	 *
	 * Exposed as a command so the row can be reached without the pointer,
	 * and so the key that reaches it is the user's to choose.
	 */
	focusPathBar(): void {
		// The same rungs F2 walks — name, name with extension, the path from
		// the vault, the path from the system root — and, once the field is
		// open, whatever Tab would do; the press after the last rung hands
		// the key back to the note rather than lapping. It used to open on the
		// whole path and lap forever, so the one key that reached the row
		// could never leave it again.
		// Renaming: the key that opens the field for editing takes the rename
		// back off it, keeping everything in the field — F2's counterpart.
		if (this.inputEl && this.renameMode) {
			this.setRenameMode(false);
			return;
		}
		if (this.inputEl) {
			this.pressLikeTab(() => this.dismissEditing());
			return;
		}
		if (this.startAtLap()) return;
		this.startLadderAt(0);
	}

	/**
	 * Forgets where the focus and rename keys are in their cycle, so the next
	 * press starts it over. Anything else pressed or clicked in between means
	 * the keys are no longer being walked, and picking the walk up again
	 * several edits later landed somewhere nobody remembered asking for.
	 */
	forgetCycle(): void {
		this.lapArmedFor = null;
		if (this.tabStage === null) return;
		this.tabStage = null;
		this.tabTargetPath = null;
		this.tabTrail = [];
		this.tabGivenBack = null;
		this.tabLadderStart = null;
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
			// Ctrl is the only way here — the middle button over the empty
			// space is a paste, not a duplicate — so this tab always opens
			// behind the one you are in, which is what Ctrl means everywhere
			// else on the row.
			.openFile(file, { active: this.focusesNewTab(evt) })
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
		if (!this.file) {
			// The pane names no file, so what the field opens on is what the
			// row says it is holding — `:graph`, `:blank` — marked, because
			// this gesture is "take the whole path" and out here that label
			// is the whole of it.
			const pseudo = this.pseudoSegment();
			if (pseudo === null) return;
			this.extendBrowsePath("");
			this.enterTypingMode(pseudo, "all");
			return;
		}
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
