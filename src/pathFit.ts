/**
 * Making a long path fit the row.
 *
 * Two rules, and they are the whole module:
 *
 * 1. A name is shortened from its *end*, but never past the point where it
 *    stops being telling apart from the folders beside it. `Projects2025`
 *    and `Projects2026` in the same parent keep eleven characters each,
 *    because ten would make them the same word; `Archive`, alone in its
 *    parent, can go down to `A…`. The characters an ellipsis eats are the
 *    ones that were carrying no information.
 *
 * 2. Shortening starts at the left and stops as soon as the row fits, so
 *    the folders nearest the file — the ones you are actually working in —
 *    keep their names longest, and the file's own name is touched last.
 *
 * Anything still too wide when every name is at its floor is left to
 * scroll: at that point there are no redundant characters left to drop, and
 * cutting further would be hiding information rather than compressing it.
 *
 * Kept free of the DOM (widths come in through a measuring function) so the
 * same code serves Obsidian's own breadcrumb segments inside the vault and
 * this plugin's chips outside it, and so it can be reasoned about — and
 * tested — as plain string maths.
 */

/** What a shortened name ends with. One character, and the one every file manager uses. */
export const ELLIPSIS = "…";

/**
 * The fewest leading characters that still tell this name apart from the
 * others in its folder.
 *
 * One more than the longest prefix it shares with any sibling: if `alpha`
 * sits beside `alpine`, three characters (`alp`) are common, so four are
 * needed. A name with nothing beside it needs one. Never more than the name
 * itself, so the floor is always reachable.
 *
 * Compared case-insensitively on purpose: `Notes` and `notes` cannot both
 * exist on Windows or macOS, and treating a case difference as a
 * distinction would produce a shortening that only works on Linux.
 */
export function shortestUnique(name: string, siblings: readonly string[]): number {
	let common = 0;
	const lower = name.toLowerCase();
	for (const sibling of siblings) {
		const other = sibling.toLowerCase();
		if (other === lower) continue;
		let shared = 0;
		while (shared < lower.length && shared < other.length && lower[shared] === other[shared]) {
			shared += 1;
		}
		if (shared > common) common = shared;
	}
	return Math.min(name.length, common + 1);
}

/** One segment of the row, as the fitter sees it. */
export interface FitSegment {
	/** The name as it really is. */
	full: string;
	/**
	 * Fewest characters that keep it distinguishable — see `shortestUnique`.
	 *
	 * A function, and asked for only when this segment is about to be cut.
	 * Answering it means listing the folder the segment sits in, which
	 * outside the vault is a readdir: a row that fits should not pay for
	 * knowledge it never uses, and most rows fit.
	 */
	floor: () => number;
}

export interface FitPlan {
	/** What each segment should display, in the order given. */
	texts: string[];
	/** True when the row still does not fit with every name at its floor. */
	overflows: boolean;
}

/**
 * Chooses what each segment shows.
 *
 * `overflow` is how many pixels too wide the row currently is with every
 * name in full; `measure` gives the width of a candidate string for the
 * segment at that index. Both come from the caller because only it knows
 * about fonts and layout.
 */
export function planFit(
	segments: readonly FitSegment[],
	overflow: number,
	measure: (text: string, index: number) => number,
): FitPlan {
	const texts = segments.map((segment) => segment.full);
	if (overflow <= 0) return { texts, overflows: false };

	let saved = 0;
	for (const [index, segment] of segments.entries()) {
		if (saved >= overflow) break;
		const fullWidth = measure(segment.full, index);
		const floor = Math.max(1, Math.min(segment.floor(), segment.full.length));
		// Longest first, so the chosen cut is the smallest one that buys
		// enough room rather than the harshest one available.
		for (let length = segment.full.length - 1; length >= floor; length--) {
			const candidate = segment.full.slice(0, length) + ELLIPSIS;
			const width = measure(candidate, index);
			const gain = fullWidth - width;
			const atFloor = length === floor;
			if (gain >= overflow - saved || atFloor) {
				// An "…" can be wider than the two characters it replaces on
				// a proportional font, so a cut that gains nothing is not
				// worth making: it would cost information for no room.
				if (gain > 0) {
					texts[index] = candidate;
					saved += gain;
				}
				break;
			}
		}
	}

	return { texts, overflows: saved < overflow };
}
