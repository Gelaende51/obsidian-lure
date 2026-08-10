import "obsidian";

// Minimal ambient typing for undocumented internal-plugin API surface
// used to reveal a file/folder in the File Explorer sidebar.
declare module "obsidian" {
	interface FileExplorerLeafInstance {
		revealInFolder(file: TAbstractFile): void;
	}

	interface InternalPlugin<T> {
		instance: T;
	}

	interface InternalPlugins {
		getPluginById(id: "file-explorer"): InternalPlugin<FileExplorerLeafInstance> | null;
	}

	/** Mirrors what the core file explorer uses for its own `isSupported()` check. */
	interface ViewRegistry {
		isExtensionRegistered(extension: string): boolean;
	}

	interface Vault {
		/** Reads an Obsidian setting, e.g. the "Detect all file extensions" toggle. */
		getConfig(key: string): unknown;
	}

	/** Registry of every registered command, keyed by id. */
	interface CommandRegistry {
		commands: Record<string, Command | undefined>;
	}

	/**
	 * Opaque payload produced by the drag* helpers below and handed
	 * straight back to onDragStart — its shape is Obsidian's business.
	 */
	interface DragData {
		readonly __brand: unique symbol;
	}

	/**
	 * Obsidian's drag coordinator. This is what makes a dragged item
	 * behave like one dragged out of the File Explorer — dropping it in
	 * an editor writes a link, dropping it on a folder moves it — and
	 * there is no public equivalent. Mirrors the file explorer's own use:
	 * build the payload, then hand it to onDragStart.
	 */
	interface DragManager {
		dragFile(evt: DragEvent, file: TFile): DragData | null;
		dragFolder(evt: DragEvent, folder: TFolder): DragData | null;
		onDragStart(evt: DragEvent, data: DragData): void;
	}

	interface FileManager {
		/** Opens Obsidian's own rename dialog, exactly as the File Explorer's "Rename..." does. */
		promptForFileRename(file: TFile): Promise<void>;
		createNewMarkdownFile(parent: TFolder, filename?: string): Promise<TFile>;
		createNewFolder(parent: TFolder): Promise<TFolder>;
	}

	interface Menu {
		/** Declares section order; without it sections fall back to insertion order. */
		addSections(sections: string[]): this;
	}

	interface App {
		internalPlugins: InternalPlugins;
		viewRegistry: ViewRegistry;
		commands: CommandRegistry;
		dragManager: DragManager;
	}
}

declare global {
	interface Window {
		/**
		 * Obsidian's own i18n instance, exposed as a UMD global. Read only
		 * for menu labels, so entries are worded and translated exactly as
		 * the app words them — including in languages this plugin's own
		 * table doesn't cover. Always guarded: see `obsidianLabel()`.
		 */
		i18next?: {
			t(key: string): string;
		};
	}
}
