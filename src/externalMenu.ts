import { Menu, Notice, PaneType, WorkspaceLeaf } from "obsidian";
import { MENU_SECTIONS } from "./nativeFileItem";
import { LABELS, obsidianLabel } from "./obsidianLabels";
import { openExternalFile, openInDefaultApp } from "./externalFileView";
import { t } from "./lang";
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

	menu.showAtMouseEvent(evt);
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
