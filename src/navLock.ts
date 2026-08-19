/**
 * Navigation lock: several path bars moved as one.
 *
 * Meant for parallel folder structures — `Clients/Acme/2026/` beside
 * `Clients/Beta/2026/` — where the useful thing is to walk both trees in
 * step rather than to navigate each and keep them aligned by hand.
 *
 * The lock is owned here rather than by any bar. An N-way rule cannot live
 * in one participant without arbitrarily making it the master, and "legal
 * everywhere" is not a question any single bar can answer about itself.
 *
 * A move is offered only where it is legal on *every* participant. That is
 * the whole constraint: no bar is ever taken somewhere the others could not
 * follow, so the panes cannot silently drift apart.
 */

/** The moves a locked bar may make. Deliberately small — see `isLegal`. */
export type NavMove = "back" | "forward" | "up" | "sibling";

export const NAV_MOVES: readonly NavMove[] = ["back", "forward", "up", "sibling"];

/**
 * What the lock needs of a path bar. Kept to questions and instructions so
 * the lock never reaches into a bar's state, and a bar never has to know
 * that a lock exists beyond answering these.
 */
export interface NavLockParticipant {
	/** False when this bar has nowhere to go in that direction. */
	canMove(move: NavMove): boolean;
	/** Makes the move. Called on every participant, including the one that asked. */
	applyMove(move: NavMove): void;
	/**
	 * Where this move would land, when that is knowable ahead of making it,
	 * and null when it is not. Used to refuse moves that would bring two
	 * bars to the same place — see `wouldConverge`.
	 */
	previewMove(move: NavMove): string | null;
	/** Paints the moves currently legal for everyone, or clears the marking. */
	markLegalMoves(moves: ReadonlySet<NavMove>): void;
	/** True while this bar is showing something the lock can reason about. */
	participates(): boolean;
	/** The folder this bar stands in, by name alone. Null at the vault root. */
	currentFolderName(): string | null;
	/** Names of the folders beside this one, so the lock can find what they share. */
	siblingFolderNames(): string[];
	/** Steps into a named folder beside the current one. The name is the lock's choice, not this bar's. */
	moveToSibling(name: string): void;
	/** The name of this bar's folder at a given depth, for comparing structure across trees. */
	folderNameAt(depth: number): string | null;
	/** This bar's own ancestor folders, so a shared rename can act on each pane's tree. */
	ancestorFolderPaths(): string[];
}

/**
 * How long after a lock-driven move its own `file-open` events keep
 * arriving.
 *
 * "back", "forward" and a folder note all open files, and Obsidian reports
 * that asynchronously — so without a window in which those are expected,
 * the lock's own moves would look exactly like a pane navigating on its own
 * and every move would release the lock it just made. Generous, because
 * being slow to notice an independent move costs nothing and mistaking a
 * lock move for one costs the feature.
 */
const OWN_MOVE_WINDOW_MS = 500;

export class NavLock {
	private locked = false;
	/**
	 * The bars the lock was engaged over.
	 *
	 * The lock is an arrangement between *these* panes. If one of them goes
	 * away — closed, or navigated to something with no path to speak of —
	 * carrying on with the rest would be a different arrangement than the one
	 * that was asked for, silently.
	 */
	private members: NavLockParticipant[] = [];
	/** Set while the lock is making its own moves; see OWN_MOVE_WINDOW_MS. */
	private applying = false;
	private applyingTimer: number | null = null;

	constructor(
		private readonly participants: () => NavLockParticipant[],
		/** Says why the lock let go, when the user did not ask it to. */
		private readonly announce: (reason: "closed" | "moved") => void = () => undefined,
	) {}

	isLocked(): boolean {
		return this.locked;
	}

	/**
	 * Only meaningful with two or more bars to couple. Locking a single pane
	 * would constrain it against nothing and leave no way to see why moves
	 * had stopped being offered.
	 */
	canLock(): boolean {
		return this.active().length >= 2;
	}

	setLocked(locked: boolean): void {
		this.locked = locked && this.canLock();
		this.members = this.locked ? this.active() : [];
		this.refresh();
	}

	/**
	 * A pane moved without the lock being asked.
	 *
	 * A link click, a quick switcher, a bookmark: the pane is now somewhere
	 * the others were not taken, so the parallel the lock was holding is
	 * over. Warning first would be better, and there is no hook for it —
	 * Obsidian reports a file-open after the fact and offers nothing to
	 * refuse — so the honest answer is to let go and say so, rather than to
	 * leave a lock standing over panes that no longer line up.
	 */
	noticeIndependentMove(bar: NavLockParticipant): void {
		if (!this.locked || this.applying) return;
		if (!this.members.includes(bar)) return;
		this.release("moved");
	}

	/** Lets go, and says why. */
	private release(reason: "closed" | "moved"): void {
		this.locked = false;
		this.members = [];
		this.refresh();
		this.announce(reason);
	}

	toggle(): void {
		this.setLocked(!this.locked);
	}

	/** The moves legal on every participant. Empty while unlocked. */
	legalMoves(): Set<NavMove> {
		const legal = new Set<NavMove>();
		if (!this.locked) return legal;
		const bars = this.active();
		if (bars.length < 2) return legal;
		for (const move of NAV_MOVES) {
			if (!bars.every((bar) => bar.canMove(move))) continue;
			if (wouldConverge(bars, move)) continue;
			legal.add(move);
		}
		return legal;
	}

	/**
	 * Moves every locked bar together.
	 *
	 * Refused outright when the move is not legal everywhere, rather than
	 * moving the bars that can and leaving the rest — half a ghost move is
	 * the drift the lock exists to prevent.
	 */
	move(move: NavMove): boolean {
		if (!this.legalMoves().has(move)) return false;
		this.startOwnMove();
		if (move === "sibling") {
			const name = this.nextSharedSibling();
			if (name === null) return false;
			for (const bar of this.active()) bar.moveToSibling(name);
			this.refresh();
			return true;
		}
		for (const bar of this.active()) bar.applyMove(move);
		this.refresh();
		return true;
	}

	/**
	 * Marks the moves the lock is about to make as its own, for as long as
	 * their `file-open` events can take to arrive.
	 *
	 * Public because a rename across coupled panes is the lock's doing too:
	 * it fires the same events, and without this it would read as every pane
	 * moving on its own at once.
	 */
	startOwnMove(): void {
		this.applying = true;
		if (this.applyingTimer !== null) window.clearTimeout(this.applyingTimer);
		this.applyingTimer = window.setTimeout(() => {
			this.applying = false;
			this.applyingTimer = null;
		}, OWN_MOVE_WINDOW_MS);
	}

	/**
	 * The next folder name every coupled bar has beside its own.
	 *
	 * One name for all of them, chosen here: letting each bar pick its own
	 * "next" would step them into differently-named folders and quietly end
	 * the parallel. Ordered and cycled so repeated presses walk the shared
	 * siblings and come back round.
	 */
	nextSharedSibling(): string | null {
		const bars = this.active();
		if (bars.length < 2) return null;

		let shared: string[] | null = null;
		for (const bar of bars) {
			const names = new Set(bar.siblingFolderNames());
			shared = shared === null ? [...names] : shared.filter((name) => names.has(name));
		}
		if (!shared?.length) return null;
		shared.sort((a, b) => a.localeCompare(b));

		// Only meaningful while every bar stands in the same-named folder;
		// otherwise there is no "current" to advance from and the panes are
		// already somewhere the lock did not put them.
		const current = bars[0]?.currentFolderName() ?? null;
		if (current === null || !bars.every((bar) => bar.currentFolderName() === current)) {
			return shared[0] ?? null;
		}
		const at = shared.indexOf(current);
		if (at < 0) return shared[0] ?? null;
		if (shared.length < 2) return null;
		return shared[(at + 1) % shared.length] ?? null;
	}

	/**
	 * Repaints every bar's marking, and drops the lock if there is no longer
	 * anything to couple — closing a pane leaves one bar, which is not a
	 * lock, and leaving it on would mark moves blue for no reason.
	 */
	refresh(): void {
		// A pane the lock was engaged over is gone — closed, or no longer
		// showing anything the lock can reason about. The remaining panes
		// were never what was asked for on their own.
		if (this.locked && this.members.some((bar) => !this.active().includes(bar))) {
			this.release("closed");
			return;
		}
		if (this.locked && !this.canLock()) this.locked = false;
		const legal = this.legalMoves();
		for (const bar of this.participants()) {
			// Every bar is asked, so one that has stopped taking part gets its
			// marking cleared rather than keeping the last set it was given.
			// Only bars actually being coupled are told what is legal — a
			// sidebar pane marking a folder blue would promise a move nothing
			// will make.
			bar.markLegalMoves(this.locked && bar.participates() ? legal : EMPTY);
		}
	}

	/** The bars currently being coupled, for callers that need to act on all of them. */
	coupledBars(): NavLockParticipant[] {
		return this.locked ? this.active() : [];
	}

	/**
	 * Whether every coupled bar has this folder name at this depth.
	 *
	 * That shared name is the structure the lock is holding on to — the
	 * panes are in different trees and it is the only thing they have in
	 * common at that level — so renaming it is a change to all of them.
	 */
	sharesFolderAt(depth: number, name: string): boolean {
		const bars = this.active();
		if (bars.length < 2) return false;
		return bars.every((bar) => bar.folderNameAt(depth) === name);
	}

	/**
	 * Whether a rename would leave the coupled panes standing in
	 * differently-named folders.
	 *
	 * The mover's own path is the proposed one; everyone else keeps theirs.
	 * If the names no longer agree the parallel is over, which is a thing to
	 * ask about rather than to discover later when moves stop being offered.
	 */
	wouldBreakAlignment(mover: NavLockParticipant, proposedPath: string): boolean {
		const bars = this.active();
		if (bars.length < 2) return false;
		const names = bars.map((bar) =>
			bar === mover ? folderNameOf(proposedPath) : bar.currentFolderName(),
		);
		return new Set(names).size > 1;
	}

	private active(): NavLockParticipant[] {
		return this.participants().filter((bar) => bar.participates());
	}
}

/**
 * Whether a move would bring two coupled bars to the same place.
 *
 * Rising far enough always ends at a common ancestor: `parent1/childa` and
 * `parent2/childa` go up once to two distinct folders and twice to the one
 * they share. From there the panes are no longer parallel — they are the
 * same view twice, every later move is the same move twice, and there is no
 * move back apart that the lock would allow. So convergence is refused
 * while the panes are still distinct, which is the only moment refusing it
 * is any use.
 *
 * Moves whose destination cannot be known in advance are not second-guessed:
 * a null preview means "no opinion", not "safe".
 */
function wouldConverge(bars: NavLockParticipant[], move: NavMove): boolean {
	const seen = new Set<string>();
	for (const bar of bars) {
		const destination = bar.previewMove(move);
		if (destination === null) continue;
		if (seen.has(destination)) return true;
		seen.add(destination);
	}
	return false;
}

/** The folder a path sits in, by name alone. */
function folderNameOf(path: string): string | null {
	const parts = path.split("/");
	parts.pop();
	return parts.pop() ?? null;
}

const EMPTY: ReadonlySet<NavMove> = new Set();
