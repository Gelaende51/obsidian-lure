export type BreadcrumbAlignment = "left" | "center" | "right";

export interface BreadcrumbPathSettings {
	alignment: BreadcrumbAlignment;
	delimiter: string;
	showVaultName: boolean;
	/**
	 * Folder names open the dropdown and delimiters open the folder itself,
	 * rather than the other way round. Never applies in rename/move mode.
	 */
	swapSegmentActions: boolean;
	/** List dot-files/folders in the breadcrumb autocomplete. Overwrite protection applies either way. */
	showDotFiles: boolean;
	/**
	 * Show the file's extension on the row.
	 *
	 * Off by default, which is what Obsidian does with a note's title: the
	 * extension is the same for almost every file in a vault and says
	 * nothing about which one this is. On, the row names the file the way
	 * the filesystem does — which is what you want when the vault holds more
	 * than notes, or when the name is about to be copied somewhere that
	 * cares.
	 */
	showFileExtension: boolean;
	/**
	 * Whether the vault-root segment opens the locations dropdown, which is
	 * the only way into everything outside the vault: other vaults, home,
	 * mounted drives, the external viewer and its writes.
	 *
	 * Off by default. Reading and writing outside the vault is the one thing
	 * this plugin does that Obsidian itself will not, so it is opted into
	 * rather than out of — with it off, nothing here ever looks past the
	 * vault, and the vault root reveals the vault in the File Explorer the
	 * way any other segment does.
	 */
	accessExternalFiles: boolean;
}

export const DEFAULT_SETTINGS: BreadcrumbPathSettings = {
	alignment: "left",
	delimiter: "/",
	showVaultName: true,
	swapSegmentActions: true,
	showDotFiles: false,
	showFileExtension: false,
	accessExternalFiles: false,
};
