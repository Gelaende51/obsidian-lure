import { Notice, TFolder, WorkspaceLeaf, WorkspaceSplit } from "obsidian";
import type BreadcrumbPathPlugin from "./main";
import { PathBreadcrumb } from "./pathBreadcrumb";
import { NavLock } from "./navLock";
import { t } from "./lang";
import { LABELS, obsidianLabel } from "./obsidianLabels";

const PATCHED_CLASS = "lure-patched";

/** The two members of a tab group a drop on its bar needs. Neither is public API. */
interface TabGroupInternals {
	tabHeaderContainerEl?: HTMLElement;
	getTabInsertLocation?(clientX: number): { rect: DOMRect; index: number } | null;
}

/**
 * Tracks one PathBreadcrumb per open leaf, keeps them in sync with
 * workspace/vault events, and repatches leaves whose header DOM
 * Obsidian has rebuilt out from under us.
 */
export class BreadcrumbManager {
	private instances = new Map<WorkspaceLeaf, PathBreadcrumb>();
	/** Tab bars already taking folders, so a sweep never wires one twice. */
	private readonly wiredBars = new WeakSet<HTMLElement>();
	/**
	 * Set once the plugin unloads. A drop handler cannot be taken back off a
	 * tab bar, so the one a previous load registered stays on it — and after a
	 * reload it would open the folder a second time, through a manager nothing
	 * else is using. It stands down instead.
	 */
	private retired = false;
	/**
	 * Owned here because "legal on every bar" is not a question any single
	 * bar can answer about itself, and picking one to arbitrate would make it
	 * a master the others have no reason to trust.
	 */
	readonly navLock = new NavLock(
		() => [...this.instances.values()],
		// The lock is a mode with no dialog of its own, so it letting go has
		// to be said out loud: the marking simply disappearing looks like
		// the feature failing rather than like a decision.
		(reason) =>
			new Notice(t(reason === "closed" ? "navLockDroppedClosed" : "navLockDroppedMoved")),
	);

	constructor(private plugin: BreadcrumbPathPlugin) {}

	registerEvents(): void {
		const { workspace, vault } = this.plugin.app;

		this.plugin.registerEvent(
			workspace.on("file-open", () => this.patchActiveLeaf()),
		);
		this.plugin.registerEvent(
			workspace.on("active-leaf-change", (leaf) => {
				if (leaf) this.patchLeaf(leaf);
			}),
		);
		this.plugin.registerEvent(workspace.on("layout-change", () => this.fullSweep()));
		// Closing or opening a pane changes what the lock is coupling, and can
		// leave it with nothing to couple at all.
		this.plugin.registerEvent(workspace.on("layout-change", () => this.navLock.refresh()));
		this.plugin.registerEvent(workspace.on("file-open", () => this.navLock.refresh()));
		this.plugin.registerEvent(vault.on("rename", () => this.refreshAll()));

		workspace.onLayoutReady(() => this.fullSweep());
	}

	/** Ensures the given leaf has a live, correctly-patched breadcrumb, then refreshes it. */
	patchLeaf(leaf: WorkspaceLeaf): void {
		const titleEl = leaf.view?.containerEl?.querySelector<HTMLElement>(".view-header-title");
		if (!titleEl) return;

		let instance = this.instances.get(leaf);
		const stillPatched = titleEl.classList.contains(PATCHED_CLASS);

		if (instance && !stillPatched) {
			// Obsidian rebuilt this leaf's header DOM on its own; our old
			// instance is stale and pointing at a detached element.
			this.instances.delete(leaf);
			instance = undefined;
		}

		if (!instance) {
			instance = new PathBreadcrumb(this.plugin, this, leaf, titleEl);
			this.instances.set(leaf, instance);
		}

		instance.refresh();
	}

	private patchActiveLeaf(): void {
		const leaf = this.plugin.app.workspace.getMostRecentLeaf();
		if (leaf) this.patchLeaf(leaf);
	}

	private fullSweep(): void {
		const live = new Set<WorkspaceLeaf>();
		this.plugin.app.workspace.iterateAllLeaves((leaf) => {
			live.add(leaf);
			this.patchLeaf(leaf);
		});

		for (const [leaf, instance] of this.instances) {
			if (!live.has(leaf)) {
				instance.destroy();
				this.instances.delete(leaf);
			}
		}
		this.wireTabBars();
	}

	/**
	 * Lets a folder dragged off a row be dropped on a tab bar.
	 *
	 * Obsidian's tab bar takes files, links and bookmarks and turns a folder
	 * away, so a segment — which carries the File Explorer's own folder
	 * payload — was accepted everywhere a folder is except the one place the
	 * guide promised. Each bar is wired once, and answers only for a folder
	 * this plugin's rows put in flight: a folder dragged out of the File
	 * Explorer is Obsidian's gesture, and still does what Obsidian does.
	 *
	 * The sidebars' tab groups are left alone. A folder there would open its
	 * note, or an empty bar standing in it, in a pane a few hundred pixels wide
	 * that nobody reads notes in.
	 */
	private wireTabBars(): void {
		const { workspace, dragManager } = this.plugin.app;
		if (!dragManager?.handleDrop) return;
		workspace.iterateAllLeaves((leaf) => {
			const root = leaf.getRoot();
			if (root === workspace.leftSplit || root === workspace.rightSplit) return;
			const group = leaf.parent as unknown as TabGroupInternals | null;
			const bar = group?.tabHeaderContainerEl;
			if (!group || !bar || this.wiredBars.has(bar)) return;
			this.wiredBars.add(bar);
			try {
				dragManager.handleDrop(bar, (evt, draggable, isOver) => {
					if (this.retired) return null;
					const folder = draggable?.lure ? draggable.file : null;
					if (!(folder instanceof TFolder)) return null;
					const at = group.getTabInsertLocation?.(evt.clientX);
					if (!at) return null;
					if (isOver) {
						try {
							dragManager.showOverlay?.(evt.doc, at.rect);
						} catch {
							// Only the marker of where it lands; the drop still works.
						}
					} else {
						const opened = workspace.createLeafInParent(group as unknown as WorkspaceSplit, at.index);
						workspace.setActiveLeaf(opened, { focus: true });
						const row = this.breadcrumbFor(opened) ?? this.instances.values().next().value ?? null;
						row?.showFolderIn(opened, folder);
					}
					return { action: obsidianLabel(LABELS.openAsTab, "Open as tab"), dropEffect: "copy" };
				});
			} catch {
				// Internal API moved: the bar goes on refusing folders, as Obsidian's does.
			}
		});
	}

	/** The breadcrumb for the leaf the user is currently in, patching it first if needed. */
	/**
	 * The bar belonging to one leaf, patching it first if it has none yet.
	 * A tab opened a moment ago has not had `active-leaf-change` fire for it,
	 * so asking for its bar has to be able to create it.
	 */
	breadcrumbFor(leaf: WorkspaceLeaf): PathBreadcrumb | null {
		if (!this.instances.has(leaf)) this.patchLeaf(leaf);
		return this.instances.get(leaf) ?? null;
	}

	getActiveBreadcrumb(): PathBreadcrumb | null {
		const leaf = this.plugin.app.workspace.getMostRecentLeaf();
		if (!leaf) return null;
		this.patchLeaf(leaf);
		return this.instances.get(leaf) ?? null;
	}

	/** Re-renders every tracked breadcrumb, e.g. after a settings change. */
	refreshAll(): void {
		for (const instance of this.instances.values()) {
			instance.refresh();
		}
	}

	/** Restores every tracked leaf's native title DOM. Call from onunload. */
	unpatchAll(): void {
		this.retired = true;
		for (const instance of this.instances.values()) {
			instance.destroy();
		}
		this.instances.clear();
	}
}
