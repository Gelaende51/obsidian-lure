/**
 * Minimal ambient typing for the one Electron API this plugin uses.
 *
 * Electron is provided by the host at runtime and marked external in the
 * bundle, so there is nothing to install and no `@types/electron` to keep in
 * step with Obsidian's Electron version — only the shape of the single call
 * matters. The manifest declares `isDesktopOnly`, so the module is always
 * there when this code runs.
 */
declare module "electron" {
	export const shell: {
		/** Resolves to "" on success, or a human-readable error string. */
		openPath(path: string): Promise<string>;
		/** Opens the containing folder in the desktop's file manager and selects the item. */
		showItemInFolder(path: string): void;
		/**
		 * Moves a path to the desktop's trash — Recycle Bin on Windows, Trash
		 * on macOS, the XDG trash on Linux. Rejects if the platform has no
		 * trash or the move fails, which is the difference between this and an
		 * unlink: nothing here destroys a file outright.
		 */
		trashItem(path: string): Promise<void>;
	};
}
