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
	};
}
