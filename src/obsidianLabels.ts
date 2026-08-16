/**
 * Obsidian's own wording for entries this plugin mirrors.
 *
 * Kept in one place because three callers need it — the dropdown's vault
 * menus, the same menus for paths outside the vault, and the external
 * viewer's action bar — and a second copy of a key table is a second thing
 * to forget when the host renames one.
 */

/**
 * Obsidian's i18n keys for the entries these menus mirror, newest spelling
 * first. Verified against a live 1.13.7 by resolving each one; the
 * camelCase forms are kept for older hosts inside the declared
 * minAppVersion range.
 */
export const LABELS = {
	newNote: ["plugins.file-explorer.menu-opt-new-note", "plugins.fileExplorer.menuOptNewNote"],
	newFolder: ["plugins.file-explorer.menu-opt-new-folder", "plugins.fileExplorer.menuOptNewFolder"],
	newCanvas: ["plugins.canvas.action-new-canvas", "plugins.canvas.actionNewCanvas"],
	newBase: ["plugins.bases.action-new-base", "plugins.bases.actionNewBase"],
	makeCopy: ["plugins.file-explorer.menu-opt-make-copy", "plugins.fileExplorer.menuOptMakeCopy"],
	rename: ["plugins.file-explorer.menu-opt-rename", "plugins.fileExplorer.menuOptRename"],
	deleteFile: ["interface.menu.delete-file", "interface.menu.deleteFile"],
	deleteFolder: ["plugins.file-explorer.menu-opt-delete", "interface.menu.delete"],
	openInNewTab: ["interface.menu.open-in-new-tab", "interface.menu.openInNewTab"],
	openToTheRight: ["interface.menu.open-to-the-right", "interface.menu.openToTheRight"],
	openInNewWindow: ["interface.menu.open-in-new-window", "interface.menu.openInNewWindow"],
	copyPath: ["interface.menu.copy-path", "interface.menu.copyPath"],
	openInDefaultApp: [
		"plugins.open-with-default-app.action-open-file",
		"plugins.openWithDefaultApp.actionOpenFile",
	],
	cut: ["interface.menu.cut"],
	copy: ["interface.menu.copy"],
	paste: ["interface.menu.paste"],
	selectAll: ["interface.menu.select-all"],
	showInSystemExplorer: [
		"plugins.open-with-default-app.action-show-in-folder",
		"plugins.openWithDefaultApp.actionShowInFolder",
	],
} as const;

/**
 * Obsidian's own label for one of its menu entries, so these read
 * identically to the File Explorer's in whatever language the app is set
 * to. i18next returns the key itself when it cannot resolve one, which is
 * the signal used here; the English wording is the last resort.
 *
 * Several keys are accepted because Obsidian renamed its whole i18n table
 * from camelCase to kebab-case. Every key here was originally the camelCase
 * form alone, and on 1.13 that resolves to nothing — so every one of these
 * menus silently served hardcoded English in all 44 non-English locales,
 * while the documentation promised the app's own wording. The guard was
 * good enough to hide its own failure, which is why it took a live lookup
 * to see. Both spellings are tried so the declared minAppVersion range is
 * actually covered rather than assumed.
 */
export function obsidianLabel(keys: readonly string[], fallback: string): string {
	for (const key of keys) {
		try {
			const translated = window.i18next?.t(key);
			if (translated && translated !== key) return translated;
		} catch {
			return fallback;
		}
	}
	return fallback;
}