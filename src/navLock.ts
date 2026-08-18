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
export type NavMove = "back" | "forward" | "up";

export const NAV_MOVES: readonly NavMove[] = ["back", "forward", "up"];

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
}

export class NavLock {
	private locked = false;

	constructor(private readonly participants: () => NavLockParticipant[]) {}

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
		this.refresh();
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
		for (const bar of this.active()) bar.applyMove(move);
		this.refresh();
		return true;
	}

	/**
	 * Repaints every bar's marking, and drops the lock if there is no longer
	 * anything to couple — closing a pane leaves one bar, which is not a
	 * lock, and leaving it on would mark moves blue for no reason.
	 */
	refresh(): void {
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

const EMPTY: ReadonlySet<NavMove> = new Set();
