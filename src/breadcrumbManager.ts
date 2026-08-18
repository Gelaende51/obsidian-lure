import { WorkspaceLeaf } from "obsidian";
import type BreadcrumbPathPlugin from "./main";
import { PathBreadcrumb } from "./pathBreadcrumb";
import { NavLock } from "./navLock";

const PATCHED_CLASS = "lure-patched";

/**
 * Tracks one PathBreadcrumb per open leaf, keeps them in sync with
 * workspace/vault events, and repatches leaves whose header DOM
 * Obsidian has rebuilt out from under us.
 */
export class BreadcrumbManager {
	private instances = new Map<WorkspaceLeaf, PathBreadcrumb>();
	/**
	 * Owned here because "legal on every bar" is not a question any single
	 * bar can answer about itself, and picking one to arbitrate would make it
	 * a master the others have no reason to trust.
	 */
	readonly navLock = new NavLock(() => [...this.instances.values()]);

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
		for (const instance of this.instances.values()) {
			instance.destroy();
		}
		this.instances.clear();
	}
}
