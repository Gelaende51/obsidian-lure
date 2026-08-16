/**
 * Counts consecutive right-clicks so one target can carry more than one
 * meaning.
 *
 * The cost is real and worth stating: because a second press may still be
 * coming, the *first* one cannot act immediately, so every plain
 * right-click on the path bar waits out the window below before anything
 * happens. That is the price of putting three gestures on one button, and
 * it is paid by the common press to serve the rare one.
 *
 * The window is measured from the last press rather than the first, so a
 * slow triple-click still counts as three rather than decaying into a
 * double followed by a single.
 */

/**
 * How long to wait for another press. Chosen to sit just above a
 * comfortable double-click and below the point where the delay reads as
 * the interface being broken; platform double-click thresholds cluster
 * around 400-500ms, and this is the pause a user notices but does not
 * mind.
 */
export const MULTI_CLICK_WINDOW_MS = 300;

export class RightClickCounter {
	private count = 0;
	private timer: number | null = null;
	/** Where the run started, so the menu opens where the user pressed. */
	private anchor: { clientX: number; clientY: number } | null = null;

	constructor(private readonly fire: (count: number, at: { clientX: number; clientY: number }) => void) {}

	press(evt: MouseEvent): void {
		this.count += 1;
		this.anchor ??= { clientX: evt.clientX, clientY: evt.clientY };
		if (this.timer !== null) window.clearTimeout(this.timer);
		this.timer = window.setTimeout(() => this.settle(), MULTI_CLICK_WINDOW_MS);
	}

	private settle(): void {
		const count = this.count;
		const at = this.anchor ?? { clientX: 0, clientY: 0 };
		this.reset();
		this.fire(count, at);
	}

	/**
	 * Abandons a run in progress. Called when the row is torn down, so a
	 * pending press cannot fire against a breadcrumb that no longer
	 * describes the open file.
	 */
	reset(): void {
		if (this.timer !== null) window.clearTimeout(this.timer);
		this.timer = null;
		this.count = 0;
		this.anchor = null;
	}
}

/** What a right-click landed on. Decides which column of the gesture table applies. */
export type GestureTarget = "vault" | "folder" | "delimiter" | "file" | "empty";

/**
 * Classifies a right-click by the nearest meaningful ancestor.
 *
 * Order matters: the vault segment and the browse chips both carry
 * `.view-header-breadcrumb`, so the more specific test has to come first
 * or every vault click would read as a folder.
 */
export function classifyTarget(target: HTMLElement): GestureTarget {
	if (target.closest(".lure-vault-wrapper, .lure-vault-segment")) return "vault";
	if (target.closest(".view-header-breadcrumb-separator")) return "delimiter";
	if (target.closest(".lure-filename")) return "file";
	if (target.closest(".view-header-breadcrumb")) return "folder";
	return "empty";
}
