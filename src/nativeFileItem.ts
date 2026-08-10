import { App, Menu, Notice, TAbstractFile, TFile, TFolder } from "obsidian";
import { t } from "./lang";

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
const MENU_SECTIONS = [
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
 * Obsidian's own label for one of its menu entries, so these read
 * identically to the File Explorer's in whatever language the app is
 * set to. Falls back to the English wording if the i18n global or the
 * key ever moves — i18next returns the key itself when it can't resolve
 * one, which is the signal used here.
 */
function obsidianLabel(key: string, fallback: string): string {
	try {
		const translated = window.i18next?.t(key);
		return translated && translated !== key ? translated : fallback;
	} catch (err) {
		return fallback;
	}
}

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
function makeDraggable(
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
		} catch (err) {
			// Internal API moved: no drag payload, so the drag is simply inert.
		}
	});
}

async function createNoteIn(app: App, folder: TFolder): Promise<void> {
	try {
		const file = await app.fileManager.createNewMarkdownFile(folder);
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
		// Core hands the new folder to the File Explorer so it opens
		// already in inline-rename. That path needs the explorer's own
		// view class, so reveal it instead: the folder is at least
		// visible and selected, ready for the explorer's rename hotkey.
		app.internalPlugins.getPluginById("file-explorer")?.instance.revealInFolder(created);
	} catch (err) {
		new Notice(t("noticeCreateFailed", { error: (err as Error).message }));
	}
}

function buildFolderMenu(app: App, menu: Menu, folder: TFolder): void {
	menu.addItem((item) =>
		item
			.setSection("action-primary")
			.setTitle(obsidianLabel("plugins.fileExplorer.menuOptNewNote", "New note"))
			.setIcon("lucide-edit")
			.onClick(() => void createNoteIn(app, folder)),
	);
	menu.addItem((item) =>
		item
			.setSection("action-primary")
			.setTitle(obsidianLabel("plugins.fileExplorer.menuOptNewFolder", "New folder"))
			.setIcon("lucide-folder-open")
			.onClick(() => void createFolderIn(app, folder)),
	);
}

function buildFileMenu(app: App, menu: Menu, file: TFile): void {
	menu.addItem((item) =>
		item
			.setSection("open")
			.setTitle(obsidianLabel("interface.menu.openInNewTab", "Open in new tab"))
			.setIcon("lucide-file-plus")
			.onClick(() => void app.workspace.getLeaf("tab").openFile(file)),
	);
	menu.addItem((item) =>
		item
			.setSection("action")
			.setTitle(obsidianLabel("plugins.fileExplorer.menuOptRename", "Rename..."))
			.setIcon("lucide-edit-3")
			.onClick(() => void app.fileManager.promptForFileRename(file)),
	);
	menu.addItem((item) =>
		item
			.setSection("danger")
			.setTitle(obsidianLabel("interface.menu.deleteFile", "Delete file"))
			.setIcon("lucide-trash-2")
			.setWarning(true)
			.onClick(() => void app.fileManager.promptForDeletion(file)),
	);
}

/** Opens the same menu the File Explorer opens for this file or folder. */
function showContextMenu(app: App, evt: MouseEvent, target: TAbstractFile): void {
	const menu = new Menu();
	// Internal, and only cosmetic: without it every section still renders,
	// just in the order items happen to be added.
	try {
		menu.addSections?.(MENU_SECTIONS);
	} catch (err) {
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
