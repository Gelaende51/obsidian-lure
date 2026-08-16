import { Menu, Notice, PaneType, WorkspaceLeaf } from "obsidian";
import { MENU_SECTIONS } from "./nativeFileItem";
import { LABELS, obsidianLabel } from "./obsidianLabels";
import { openExternalFile, openInDefaultApp } from "./externalFileView";
import { t } from "./lang";
import { confirmAction, promptForName } from "./prompts";
import {
	copyExternalEntry,
	createExternalFile,
	createExternalFolder,
	externalExists,
	renameExternalEntry,
	trashExternalEntry,
} from "./externalFileOps";
import { externalJoin } from "./externalFs";
import { basename, dirname } from "path";
import type LurePlugin from "./main";
import { shell } from "electron";

/**
 * The context menu for something that has no TAbstractFile: a file or folder
 * outside the vault.
 *
 * The dropdown's rows behaved like File Explorer rows only for vault items,
 * because everything they offered went through a TAbstractFile — so browsing
 * outside the vault produced rows that looked identical and did nothing on
 * right-click. This is the same menu built from a path instead, offering the
 * entries that mean something out there.
 *
 * Entries that need a name from the user — new note, new folder, rename —
 * are deliberately absent for now: Obsidian's own prompts take a TFile, so
 * each needs UI of its own. What is here needs no dialog and no new strings,
 * and covers what the vault menu offers that can cross the boundary.
 *
 * Every label is Obsidian's own, so an entry that exists in both menus is
 * worded identically in whatever language the app is set to.
 */
export function showExternalMenu(
	plugin: LurePlugin,
	evt: MouseEvent,
	absolutePath: string,
	isFolder: boolean,
	leaf: WorkspaceLeaf,
	/**
	 * Whether writing out here has been unlocked with the padlock. Read at
	 * click time rather than at build time: the menu can outlive the state
	 * that opened it, and a stale "yes" would write somewhere the user has
	 * since locked.
	 */
	canWrite: () => boolean = () => false,
	/** Called after a write so the row the menu belongs to can redraw. */
	onChanged: () => void = () => undefined,
): void {
	const menu = new Menu();
	try {
		menu.addSections(MENU_SECTIONS);
	} catch {
		// Internal and only cosmetic: without it the sections still render,
		// just in the order they were added.
	}

	if (!isFolder) {
		const openIn = (pane: PaneType): void => {
			void openExternalFile(plugin, absolutePath, pane, leaf);
		};
		menu.addItem((item) =>
			item
				.setSection("open")
				.setTitle(obsidianLabel(LABELS.openInNewTab, "Open in new tab"))
				.setIcon("lucide-file-plus")
				.onClick(() => openIn("tab")),
		);
		menu.addItem((item) =>
			item
				.setSection("open")
				.setTitle(obsidianLabel(LABELS.openToTheRight, "Open to the right"))
				.setIcon("lucide-separator-vertical")
				.onClick(() => openIn("split")),
		);
		menu.addItem((item) =>
			item
				.setSection("open")
				.setTitle(obsidianLabel(LABELS.openInNewWindow, "Open in new window"))
				.setIcon("lucide-monitor")
				.onClick(() => openIn("window")),
		);
	}

	menu.addItem((item) =>
		item
			.setSection("info.copy")
			.setTitle(obsidianLabel(LABELS.copyPath, "Copy path"))
			.setIcon("lucide-copy")
			.onClick(() => void copyPath(absolutePath)),
	);

	// Only files get this. Obsidian's folder menu has no "open in default
	// app" either, and handing a directory to the shell means something
	// different on every desktop.
	if (!isFolder) {
		menu.addItem((item) =>
			item
				.setSection("system")
				.setTitle(obsidianLabel(LABELS.openInDefaultApp, "Open in default app"))
				.setIcon("lucide-external-link")
				.onClick(() => openInDefaultApp(absolutePath)),
		);
	}

	menu.addItem((item) =>
		item
			.setSection("system")
			.setTitle(obsidianLabel(LABELS.showInSystemExplorer, "Show in system explorer"))
			.setIcon("lucide-folder-open")
			.onClick(() => showInFolder(absolutePath)),
	);

	const write = (run: () => Promise<void>) => (): void => {
		// The padlock is the whole gate, and it is checked here rather than
		// by hiding the entries: an entry that vanishes teaches nothing,
		// while one that says why points at the button that fixes it.
		if (!canWrite()) {
			new Notice(t("noticeExternalWriteLocked"));
			return;
		}
		void run().then(onChanged, (err: Error) => new Notice(t("noticeRenameFailed", { error: err.message })));
	};

	if (isFolder) {
		menu.addItem((item) =>
			item
				.setSection("action-primary")
				.setTitle(obsidianLabel(LABELS.newNote, "New note"))
				.setIcon("lucide-edit")
				.onClick(write(() => createNamed(plugin, absolutePath, "md"))),
		);
		menu.addItem((item) =>
			item
				.setSection("action-primary")
				.setTitle(obsidianLabel(LABELS.newFolder, "New folder"))
				.setIcon("lucide-folder-open")
				.onClick(write(() => createNamed(plugin, absolutePath, null))),
		);
	}

	menu.addItem((item) =>
		item
			.setSection("action")
			.setTitle(obsidianLabel(LABELS.makeCopy, "Make a copy"))
			.setIcon("lucide-copy")
			.onClick(write(() => makeCopy(absolutePath))),
	);
	menu.addItem((item) =>
		item
			.setSection("action")
			.setTitle(obsidianLabel(LABELS.rename, "Rename..."))
			.setIcon("lucide-edit-3")
			.onClick(write(() => renameEntry(plugin, absolutePath))),
	);
	menu.addItem((item) =>
		item
			.setSection("danger")
			.setTitle(obsidianLabel(LABELS.deleteAction, "Delete"))
			.setIcon("lucide-trash-2")
			.setWarning(true)
			.onClick(write(() => trashEntry(plugin, absolutePath, isFolder))),
	);

	menu.showAtMouseEvent(evt);
}

/**
 * Creates a note or a folder inside `parent`, asking for the name first.
 *
 * A missing extension becomes .md for a note, matching what committing a
 * typed path does. Nothing is overwritten: an existing name is reported
 * rather than consumed, since out here there is no trash to undo it from.
 */
async function createNamed(
	plugin: LurePlugin,
	parent: string,
	extension: "md" | null,
): Promise<void> {
	const isNote = extension !== null;
	const name = await promptForName(plugin.app, {
		title: obsidianLabel(isNote ? LABELS.newNote : LABELS.newFolder, isNote ? "New note" : "New folder"),
		label: obsidianLabel(LABELS.fileNameLabel, "File name"),
		cta: t("create"),
	});
	if (name === null) return;

	const finalName = isNote && !name.includes(".") ? `${name}.${extension}` : name;
	const target = externalJoin(parent, finalName);
	if (await externalExists(target)) {
		new Notice(t("noticeAlreadyExists", { path: target }));
		return;
	}
	if (isNote) await createExternalFile(target);
	else await createExternalFolder(target);
}

/** A duplicate beside the original, named the way the vault menu names one. */
async function makeCopy(absolutePath: string): Promise<void> {
	const dir = dirname(absolutePath);
	const name = basename(absolutePath);
	const dot = name.lastIndexOf(".");
	const stem = dot > 0 ? name.slice(0, dot) : name;
	const suffix = dot > 0 ? name.slice(dot) : "";

	for (let n = 1; n < 1000; n++) {
		const candidate = externalJoin(dir, `${stem} ${n}${suffix}`);
		if (await externalExists(candidate)) continue;
		await copyExternalEntry(absolutePath, candidate);
		return;
	}
	new Notice(t("noticeAlreadyExists", { path: absolutePath }));
}

async function renameEntry(plugin: LurePlugin, absolutePath: string): Promise<void> {
	const current = basename(absolutePath);
	const name = await promptForName(plugin.app, {
		title: obsidianLabel(LABELS.renamePlain, "Rename"),
		label: obsidianLabel(LABELS.fileNameLabel, "File name"),
		value: current,
		cta: obsidianLabel(LABELS.renamePlain, "Rename"),
	});
	if (name === null || name === current) return;

	const target = externalJoin(dirname(absolutePath), name);
	if (await externalExists(target)) {
		new Notice(t("noticeAlreadyExists", { path: target }));
		return;
	}
	await renameExternalEntry(absolutePath, target);
}

/**
 * Deletes by moving to the desktop's trash, never by unlinking.
 *
 * Out here there is no vault index to notice a loss and no Obsidian trash
 * to recover from, so a delete that cannot be undone is not offered at all:
 * a platform without a trash reports the failure instead of falling back to
 * destroying the file. The wording is Obsidian's own, including the
 * sentence naming where the file goes and the warning about a folder's
 * contents.
 */
async function trashEntry(plugin: LurePlugin, absolutePath: string, isFolder: boolean): Promise<void> {
	const confirmed = await confirmAction(plugin.app, {
		title: obsidianLabel(
			isFolder ? LABELS.deleteFolderTitle : LABELS.deleteFileTitle,
			isFolder ? "Delete folder" : "Delete file",
		),
		body: obsidianLabel(LABELS.confirmDeletion, `Delete "${basename(absolutePath)}"?`, {
			filename: basename(absolutePath),
		}),
		detail: [
			isFolder ? obsidianLabel(LABELS.deleteFolderWarning, "") : "",
			obsidianLabel(LABELS.movedToSystemTrash, "It will be moved to your system trash."),
		]
			.filter(Boolean)
			.join(" "),
		cta: obsidianLabel(LABELS.deleteButton, "Delete"),
		warning: true,
	});
	if (!confirmed) return;
	await trashExternalEntry(absolutePath);
}

async function copyPath(absolutePath: string): Promise<void> {
	try {
		await navigator.clipboard.writeText(absolutePath);
	} catch (err) {
		new Notice(t("noticeExternalOpenFailed", { path: (err as Error).message }));
	}
}

/** Guarded like every other shell call here: a missing API leaves the entry inert, not throwing. */
function showInFolder(absolutePath: string): void {
	try {
		shell.showItemInFolder(absolutePath);
	} catch {
		new Notice(t("noticeExternalOpenFailed", { path: absolutePath }));
	}
}
