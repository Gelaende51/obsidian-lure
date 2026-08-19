import "obsidian";

// Minimal ambient typing for undocumented internal-plugin API surface
// used to reveal a file/folder in the File Explorer sidebar.
declare module "obsidian" {
	/**
	 * One row of the File Explorer tree. `setCollapsed` is a no-op when the
	 * state already matches, so expanding an open folder costs nothing.
	 */
	interface FileTreeItem {
		collapsed: boolean;
		collapsible: boolean;
		/** Obsidian's own ancestor-expansion in revealInFolder calls this. */
		toggleCollapsed(animate: boolean): unknown;
	}

	interface FileExplorerLeafInstance {
		/**
		 * Opens the explorer leaf if needed, then delegates to the view's
		 * method of the same name. Expands the target's *ancestors* and
		 * focuses its row — but leaves the target itself collapsed.
		 */
		revealInFolder(file: TAbstractFile): void;
	}

	/** The explorer's view, which is where the rendered rows actually live. */
	interface FileExplorerView extends View {
		/** Every rendered row, keyed by vault path. */
		fileItems: Record<string, FileTreeItem | undefined>;
		/** `focusedItem` is what reveal sets — Obsidian's own "I landed here". */
		tree?: { focusedItem?: { file?: TAbstractFile } };
	}

	interface InternalPlugin<T> {
		instance: T;
		/** Core plugins can be switched off; `getPluginById` returns them either way. */
		enabled: boolean;
	}

	interface InternalPlugins {
		getPluginById(id: "file-explorer"): InternalPlugin<FileExplorerLeafInstance> | null;
		/** Obsidian's own in-app browser. Nothing of its instance is used — only whether it is on. */
		getPluginById(id: "webviewer"): InternalPlugin<unknown> | null;
	}

	/** Mirrors what the core file explorer uses for its own `isSupported()` check. */
	interface ViewRegistry {
		isExtensionRegistered(extension: string): boolean;
	}

	interface Vault {
		/** Reads an Obsidian setting, e.g. the "Detect all file extensions" toggle. */
		getConfig(key: string): unknown;
		/**
		 * Obsidian's own "find me a free name": "note.md" beside an existing
		 * one becomes "note 1.md". An empty extension asks for a folder name.
		 * Used so a copy made here is named exactly as the File Explorer
		 * would have named it.
		 */
		getAvailablePath(basePath: string, extension: string): string;
	}

	/** Registry of every registered command, keyed by id. */
	interface CommandRegistry {
		commands: Record<string, Command | undefined>;
		/**
		 * Runs a command by id, returning false when it declined. Used to
		 * delegate to Obsidian's own features — the outline sidebar, a new
		 * empty tab — rather than reimplementing them, so a user's rebound
		 * hotkey and any plugin that has patched the command both still
		 * apply.
		 */
		executeCommandById(id: string): boolean;
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
		/**
		 * Opens Obsidian's own rename dialog, exactly as the File Explorer's
		 * "Rename..." does. Named for files, but the File Explorer hands it
		 * folders too and it renders the same `.modal.mod-file-rename`.
		 */
		promptForFileRename(file: TAbstractFile): Promise<void>;
		createNewMarkdownFile(parent: TFolder, filename?: string): Promise<TFile>;
		createNewFolder(parent: TFolder): Promise<TFolder>;
	}

	interface Menu {
		/** Declares section order; without it sections fall back to insertion order. */
		addSections(sections: string[]): this;
	}

	/**
	 * One key binding. `modifiers` uses Obsidian's own names ("Mod", "Shift",
	 * "Alt", "Meta"), where Mod is Ctrl on Linux/Windows and Cmd on macOS.
	 */
	interface Hotkey {
		modifiers: string[];
		key: string;
	}

	/**
	 * Obsidian's hotkey table. `customKeys` holds only what the user has
	 * rebound, so a lookup has to fall back to `defaultKeys` — the public
	 * `getHotkeys` returns the custom entry alone and is null for anything
	 * still on its default.
	 */
	interface HotkeyManager {
		customKeys: Record<string, Hotkey[] | undefined>;
		defaultKeys: Record<string, Hotkey[] | undefined>;
	}

	/**
	 * The community-plugin registry. Only `enabledPlugins` is used, and only
	 * to ask whether a named peer is running — never to reach into one.
	 */
	/**
	 * A leaf's own back/forward stack. Undocumented, and the only way to ask
	 * whether a pane has anywhere to go — which is what makes a locked move
	 * legal or not.
	 */
	interface LeafHistory {
		backHistory: unknown[];
		forwardHistory: unknown[];
		back(): Promise<void>;
		forward(): Promise<void>;
	}

	interface WorkspaceLeaf {
		history?: LeafHistory;
	}

	interface PluginRegistry {
		enabledPlugins: Set<string>;
	}

	interface App {
		internalPlugins: InternalPlugins;
		viewRegistry: ViewRegistry;
		commands: CommandRegistry;
		dragManager: DragManager;
		hotkeyManager: HotkeyManager;
		plugins: PluginRegistry;
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
			t(key: string, params?: Record<string, string>): string;
		};
	}
}
