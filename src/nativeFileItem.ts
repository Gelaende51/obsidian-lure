import { App, Menu, Notice, TAbstractFile, TFile, TFolder } from "obsidian";
import { t } from "./lang";
import { LABELS, obsidianLabel } from "./obsidianLabels";

/**
 * Makes an arbitrary element behave like a File Explorer row: draggable
 * with Obsidian's own drag payload, and right-clickable for the same
 * context menu.
 *
 * Both capabilities sit on undocumented API (`app.dragManager`, and the
 * i18n global read for labels), so every entry point here is guarded:
 * if Obsidian moves them, the element quietly goes back to being an
 * ordinary one rather than throwing inside an event handler and taking
 * the surrounding UI down with it.
 */

/**
 * The section order Obsidian's own file/folder menus declare, copied so
 * items contributed by other plugins land in the same place they do in
 * the File Explorer.
 */
export const MENU_SECTIONS = [
	"title",
	"open",
	"action-primary",
	"action",
	"info",
	"info.copy",
	"view",
	"system",
	"",
	"danger",
];

/** Source string the File Explorer passes with its `file-menu` event; other plugins branch on it. */
const MENU_SOURCE = "file-explorer-context-menu";


/**
 * Swallows exactly one `blur` on `inputEl`, so the suggestion popover
 * survives the click that starts a drag.
 *
 * `AbstractInputSuggest` closes on the input's blur. Blur doesn't bubble
 * but it does capture, so a capture-phase listener on the window runs
 * before the one the suggester put on the input itself, and
 * stopImmediatePropagation keeps it from ever getting there. Removed on
 * the next tick — the blur it exists for fires synchronously while the
 * mousedown is still being processed.
 */
function suppressNextBlurClose(inputEl: HTMLElement): void {
	const swallow = (evt: FocusEvent) => {
		if (evt.target === inputEl) evt.stopImmediatePropagation();
	};
	window.addEventListener("blur", swallow, true);
	window.setTimeout(() => window.removeEventListener("blur", swallow, true), 0);
}

/**
 * Turns the element into a drag source carrying Obsidian's own
 * file/folder payload.
 *
 * `keepFocusEl`, when given, is the text input a suggestion popover is
 * attached to, and switches on the workaround that makes dragging out of
 * that popover possible at all — see the comment on the mousedown
 * handler below.
 */
/**
 * Obsidian's own drag payload on an arbitrary element, without the context
 * menu that usually comes with it. The path bar's file name wants the drag
 * but builds its own menu, because a right-click there is counted rather
 * than acted on.
 */
export function makeDraggable(
	app: App,
	el: HTMLElement,
	target: TAbstractFile,
	keepFocusEl?: HTMLElement,
): void {
	el.draggable = true;

	if (keepFocusEl) {
		el.addEventListener("mousedown", (evt) => {
			if (evt.button !== 0) return;
			// AbstractInputSuggest registers a delegated mousedown handler
			// on the popover that calls preventDefault(), to stop the click
			// from blurring the input and closing the popover underneath
			// it. Chromium treats a prevented mousedown as "no drag", so
			// that one line makes every suggestion undraggable.
			//
			// This listener sits on the item, so it runs before the
			// delegated one on the container: stopping propagation keeps
			// the mousedown un-prevented and the drag gesture alive. The
			// blur that Obsidian was avoiding then does happen, so it gets
			// swallowed instead — same end result, drag intact.
			evt.stopPropagation();
			suppressNextBlurClose(keepFocusEl);
		});
	}

	el.addEventListener("dragstart", (evt) => {
		try {
			const dragManager = app.dragManager;
			if (!dragManager) return;
			const data =
				target instanceof TFolder
					? dragManager.dragFolder(evt, target)
					: target instanceof TFile
						? dragManager.dragFile(evt, target)
						: null;
			if (data) dragManager.onDragStart(evt, data);
		} catch {
			// Internal API moved: no drag payload, so the drag is simply inert.
		}
	});
}

/** What a drop target needs from its owner. */
export interface DropTargetOptions {
	/**
	 * The floating label Obsidian shows while the pointer is over the target,
	 * worded by the caller so it comes out in the app's own phrasing rather
	 * than this plugin's.
	 */
	label: (folderName: string) => string;
	/** Called with the file once it has landed, to show it where it now lives. */
	onMoved?: (file: TAbstractFile) => void;
}

/**
 * Makes the element accept a dragged file or folder, moving it into
 * `folder` — the File Explorer's own gesture, on the breadcrumb.
 *
 * The drag *source* has been right for a while: every segment, the file's
 * name and the dropdown rows all produce Obsidian's payload. Nothing had
 * ever accepted one, which is the half of "drag and drop" that was missing.
 *
 * `dragManager.handleDrop` is Obsidian's own, so the hover feedback is the
 * app's rather than an imitation of it: the floating "Move into…" label, the
 * cursor's move effect, and the same highlight class the File Explorer puts
 * on a folder row. Returning null is how a drop is declined, and a declined
 * drop shows nothing at all — no label, no highlight — so an illegal target
 * is silent rather than misleading.
 *
 * The move itself goes through `fileManager.renameFile`, not `vault.rename`:
 * the former updates every link that pointed at the file, which is the whole
 * difference between moving a note and breaking it.
 */
export function makeDropTarget(
	app: App,
	el: HTMLElement,
	folderPath: string,
	{ label, onMoved }: DropTargetOptions,
): void {
	const dragManager = app.dragManager;
	if (!dragManager?.handleDrop) return;

	// Which folder this element stands for, kept *on* the element rather than
	// captured in the handler. Obsidian owns these segments and reuses the
	// same nodes as the row is re-wired, so a captured path is the path the
	// row happened to be showing when the listener was added — and a drop
	// would then move the file into a folder from a path you had navigated
	// away from. Written every time; read at the moment of the drop.
	el.dataset.lureDropPath = folderPath;

	// `handleDrop` adds listeners and has no way to take them off, so
	// registering per re-wire would stack one handler per refresh — and every
	// one of the stale ones would still fire.
	if (el.dataset.lureDropWired === "1") return;
	el.dataset.lureDropWired = "1";

	try {
		dragManager.handleDrop(el, (_evt, draggable, isOver) => {
			const moving = draggedFile(app, draggable);
			const at = el.dataset.lureDropPath;
			const folder = at === undefined ? null : app.vault.getAbstractFileByPath(at);
			if (!moving || !(folder instanceof TFolder)) return null;
			if (!canMoveInto(moving, folder)) return null;

			// The hover pass is a dry run: it says what the drop would do and
			// changes nothing. Only the drop itself acts.
			if (!isOver) void moveInto(app, moving, folder, onMoved);

			return {
				action: label(folder.name),
				dropEffect: "move",
				hoverEl: el,
				// Obsidian's own class for "a drop would land here", so a
				// theme that restyles the File Explorer restyles this too.
				hoverClass: "is-being-dragged-over",
			};
		});
	} catch {
		// Internal API moved: the element simply does not accept drops.
	}
}

/** The file or folder a drag is carrying, if it is carrying one this vault knows. */
function draggedFile(app: App, draggable: unknown): TAbstractFile | null {
	const data = draggable as { type?: string; file?: TAbstractFile } | null | undefined;
	if (!data || (data.type !== "file" && data.type !== "folder")) return null;
	const file = data.file;
	if (!(file instanceof TFile) && !(file instanceof TFolder)) return null;
	// Dragged out of a *different* vault's window, the payload's file belongs
	// to that vault's tree and moving it here would write to the wrong place.
	return app.vault.getAbstractFileByPath(file.path) === file ? file : null;
}

/**
 * Whether the move is one worth offering.
 *
 * Three refusals, and each is silent rather than a notice, because they are
 * all answers to "would this do anything", asked while the pointer is still
 * moving:
 *
 * - **Into its own parent.** It is already there.
 * - **A folder into itself, or into its own descendant.** There would be
 *   nowhere left for it to come from; the filesystem refuses this too, but
 *   later and less kindly.
 * - **Onto a name already taken.** Nothing here overwrites, ever.
 */
function canMoveInto(moving: TAbstractFile, folder: TFolder): boolean {
	if (moving === folder) return false;
	if (moving.parent?.path === folder.path) return false;
	if (moving instanceof TFolder && isInside(folder, moving)) return false;
	return !folder.children.some((child) => child.name === moving.name);
}

/** Whether `folder` sits anywhere below `ancestor`. */
function isInside(folder: TFolder, ancestor: TFolder): boolean {
	for (let at: TFolder | null = folder; at; at = at.parent) {
		if (at === ancestor) return true;
	}
	return false;
}

/**
 * Moves it, and hands the result to whoever asked for the drop target.
 *
 * No success notice on purpose: a move committed from the path bar does not
 * announce itself either — it shows the file where it now lives, which says
 * the same thing in the place you would go looking. `onMoved` is that,
 * supplied by the caller rather than rebuilt here, because the path bar
 * already owns a reveal that suppresses Obsidian's own flash first.
 */
async function moveInto(
	app: App,
	moving: TAbstractFile,
	folder: TFolder,
	onMoved?: (file: TAbstractFile) => void,
): Promise<void> {
	const to = folder.path === "/" ? moving.name : `${folder.path}/${moving.name}`;
	try {
		await app.fileManager.renameFile(moving, to);
	} catch (err) {
		new Notice(t("noticeRenameFailed", { error: (err as Error).message }));
		return;
	}
	const moved = app.vault.getAbstractFileByPath(to);
	if (moved) onMoved?.(moved);
}

async function createNoteIn(app: App, folder: TFolder): Promise<void> {
	try {
		const file = await app.fileManager.createNewMarkdownFile(folder);
		new Notice(t("noticeCreated", { path: file.path }));
		// eState.rename matches core: the new note opens with its title
		// selected, so it can be named without a second interaction.
		await app.workspace.getLeaf(false).openFile(file, {
			active: true,
			state: { mode: "source" },
			eState: { rename: "all" },
		});
	} catch (err) {
		new Notice(t("noticeCreateFailed", { error: (err as Error).message }));
	}
}

async function createFolderIn(app: App, folder: TFolder): Promise<void> {
	try {
		const created = await app.fileManager.createNewFolder(folder);
		new Notice(t("noticeCreated", { path: created.path }));
		// Core hands the new folder to the File Explorer so it opens
		// already in inline-rename. That path needs the explorer's own
		// view class, so reveal it instead: the folder is at least
		// visible and selected, ready for the explorer's rename hotkey.
		app.internalPlugins.getPluginById("file-explorer")?.instance.revealInFolder(created);
	} catch (err) {
		new Notice(t("noticeCreateFailed", { error: (err as Error).message }));
	}
}

/**
 * A duplicate beside the original, named the way Obsidian names one.
 *
 * `getAvailablePath` is Obsidian's own "find me a free name" — it produces
 * "note 1.md" next to "note.md" — so a copy made here is indistinguishable
 * from one made in the File Explorer.
 */
async function makeCopyOfFile(app: App, file: TFile): Promise<void> {
	try {
		const parent = file.parent?.path ?? "";
		const base = parent && parent !== "/" ? `${parent}/${file.basename}` : file.basename;
		await app.vault.copy(file, app.vault.getAvailablePath(base, file.extension));
	} catch (err) {
		new Notice(t("noticeCopyFailed", { error: (err as Error).message }));
	}
}

/**
 * Folders have no copy API — `vault.copy` takes a TFile — so the tree is
 * walked and rebuilt. Folders are created before their contents so a child
 * never lands before its parent exists.
 */
async function copyFolderInto(app: App, folder: TFolder, targetPath: string): Promise<void> {
	await app.vault.createFolder(targetPath);
	for (const child of folder.children) {
		if (child instanceof TFolder) await copyFolderInto(app, child, `${targetPath}/${child.name}`);
		else if (child instanceof TFile) await app.vault.copy(child, `${targetPath}/${child.name}`);
	}
}

async function makeCopyOfFolder(app: App, folder: TFolder): Promise<void> {
	try {
		const parent = folder.parent?.path ?? "";
		const base = parent && parent !== "/" ? `${parent}/${folder.name}` : folder.name;
		// An empty extension asks for a free *folder* name rather than a file one.
		await copyFolderInto(app, folder, app.vault.getAvailablePath(base, ""));
	} catch (err) {
		new Notice(t("noticeCopyFailed", { error: (err as Error).message }));
	}
}

function buildFolderMenu(app: App, menu: Menu, folder: TFolder): void {
	menu.addItem((item) =>
		item
			.setSection("action-primary")
			.setTitle(obsidianLabel(LABELS.newNote, "New note"))
			.setIcon("lucide-edit")
			.onClick(() => void createNoteIn(app, folder)),
	);
	menu.addItem((item) =>
		item
			.setSection("action-primary")
			.setTitle(obsidianLabel(LABELS.newFolder, "New folder"))
			.setIcon("lucide-folder-open")
			.onClick(() => void createFolderIn(app, folder)),
	);
	// Obsidian's core plugins fill in the rest of this menu through the
	// file-menu event — canvas, bases, copy path, show in folder. What the
	// File Explorer adds inline, and nobody contributes, is these three.
	menu.addItem((item) =>
		item
			.setSection("action")
			.setTitle(obsidianLabel(LABELS.makeCopy, "Make a copy"))
			.setIcon("lucide-copy")
			.onClick(() => void makeCopyOfFolder(app, folder)),
	);
	menu.addItem((item) =>
		item
			.setSection("action")
			.setTitle(obsidianLabel(LABELS.rename, "Rename…"))
			.setIcon("lucide-edit-3")
			.onClick(() => void app.fileManager.promptForFileRename(folder)),
	);
	menu.addItem((item) =>
		item
			.setSection("danger")
			.setTitle(obsidianLabel(LABELS.deleteFolder, "Delete folder"))
			.setIcon("lucide-trash-2")
			.setWarning(true)
			.onClick(() => void app.fileManager.promptForDeletion(folder)),
	);
}

function buildFileMenu(app: App, menu: Menu, file: TFile): void {
	menu.addItem((item) =>
		item
			.setSection("open")
			.setTitle(obsidianLabel(LABELS.openInNewTab, "Open in new tab"))
			.setIcon("lucide-file-plus")
			.onClick(() => void app.workspace.getLeaf("tab").openFile(file)),
	);
	menu.addItem((item) =>
		item
			.setSection("open")
			.setTitle(obsidianLabel(LABELS.openToTheRight, "Open to the right"))
			.setIcon("lucide-separator-vertical")
			.onClick(() => void app.workspace.getLeaf("split", "vertical").openFile(file)),
	);
	menu.addItem((item) =>
		item
			.setSection("action")
			.setTitle(obsidianLabel(LABELS.makeCopy, "Make a copy"))
			.setIcon("lucide-copy")
			.onClick(() => void makeCopyOfFile(app, file)),
	);
	menu.addItem((item) =>
		item
			.setSection("action")
			.setTitle(obsidianLabel(LABELS.rename, "Rename…"))
			.setIcon("lucide-edit-3")
			.onClick(() => void app.fileManager.promptForFileRename(file)),
	);
	menu.addItem((item) =>
		item
			.setSection("danger")
			.setTitle(obsidianLabel(LABELS.deleteFile, "Delete file"))
			.setIcon("lucide-trash-2")
			.setWarning(true)
			.onClick(() => void app.fileManager.promptForDeletion(file)),
	);
}

/** Opens the same menu the File Explorer opens for this file or folder. */
export function showContextMenu(app: App, evt: MouseEvent, target: TAbstractFile): void {
	const menu = new Menu();
	// Internal, and only cosmetic: without it every section still renders,
	// just in the order items happen to be added.
	try {
		menu.addSections?.(MENU_SECTIONS);
	} catch {
		// Section ordering unavailable; the menu is still perfectly usable.
	}

	if (target instanceof TFolder) {
		buildFolderMenu(app, menu, target);
	} else if (target instanceof TFile) {
		buildFileMenu(app, menu, target);
	}

	// The event every plugin listens on to contribute its own file/folder
	// entries, fired with the File Explorer's source string so they
	// contribute exactly what they contribute there.
	app.workspace.trigger("file-menu", menu, target, MENU_SOURCE);
	menu.showAtMouseEvent(evt);
}

function wireContextMenu(app: App, el: HTMLElement, target: TAbstractFile): void {
	el.addEventListener("contextmenu", (evt) => {
		evt.preventDefault();
		evt.stopPropagation();
		showContextMenu(app, evt, target);
	});

	// Obsidian's suggestion list commits an entry on `auxclick` as well as
	// `click`, and a right-click fires both `contextmenu` and `auxclick` —
	// so without this, opening the menu would *also* select the entry and
	// navigate away underneath it. Its handler bails out on a
	// default-prevented event, which is what this provides.
	el.addEventListener("auxclick", (evt) => {
		if (evt.button === 2) evt.preventDefault();
	});
}

/**
 * Gives `el` the File Explorer's drag and context-menu behaviour for
 * `target`. Safe to call on any element; does nothing useful for a
 * target that isn't a real file or folder in the vault.
 */
export function wireNativeFileItem(
	app: App,
	el: HTMLElement,
	target: TAbstractFile,
	keepFocusEl?: HTMLElement,
): void {
	makeDraggable(app, el, target, keepFocusEl);
	wireContextMenu(app, el, target);
}
