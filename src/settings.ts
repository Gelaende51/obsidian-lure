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
	accessExternalFiles: false,
};
