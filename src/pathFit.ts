/**
 * Making a long path fit the row.
 *
 * Three rules, and they are the whole module:
 *
 * 1. **Least useful first.** The row gives up its opening segment before
 *    anything else — the vault or the place the path starts in, which you
 *    already know, and which keeps its icon so the row still says where it
 *    begins. Then the folders. The file's own name is last, because it is
 *    what the header is *for*.
 *
 * 2. **Within a stage, the longest name pays.** Names are capped at a
 *    common length that comes down until the row fits, so the longest
 *    shrinks alone until it is as short as the next longest, then the two
 *    shrink together, and so on. A short name is never cut while a long one
 *    beside it still has characters to spare — which is the difference
 *    between a row that reads and one where every name is a stump.
 *
 * 3. **Nothing shrinks past what it is telling you.** A name stops where it
 *    would stop being distinguishable from the folders beside it
 *    (`shortestUnique`): `Reports` beside `Receipts` may come down to
 *    `Rep…` and no further, because `Re…` would fit either of them — and
 *    two names differing only in their last character are never cut at
 *    all. On top of that a folder keeps about four characters and a
 *    file name about eight, whatever their siblings allow — a name cut to
 *    `A…` is distinguishable and still unreadable. Names already at or
 *    below their minimum are left alone entirely.
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

/** Characters a folder keeps whatever the room, ellipsis aside. */
export const MIN_FOLDER_CHARS = 4;

/** Characters the file's own name keeps. Higher: it is the one name on the row you are reading. */
export const MIN_NAME_CHARS = 8;

/**
 * Which part of the row a segment is, which is the order they are spent in.
 *
 * "root" is the opening segment — the vault name, or the label of the place
 * an external path starts at. It alone may go all the way to nothing: its
 * icon stays behind and carries the meaning.
 */
export type FitStage = "root" | "folder" | "name";

const STAGE_ORDER: readonly FitStage[] = ["root", "folder", "name"];

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
	/** Where in the row it sits, which decides when it is asked to give way. */
	stage: FitStage;
}

export interface FitPlan {
	/** What each segment should display, in the order given. */
	texts: string[];
	/** True when the row still does not fit with every name at its floor. */
	overflows: boolean;
}

/**
 * The shortest this segment may get: what its siblings need, and what a
 * reader needs, whichever is longer — but never more than the name has.
 */
function floorOf(segment: FitSegment): number {
	const full = segment.full.length;
	if (segment.stage === "root") return Math.min(1, full);
	const unique = Math.max(1, Math.min(segment.floor(), full));
	const readable = segment.stage === "folder" ? MIN_FOLDER_CHARS : MIN_NAME_CHARS;
	return Math.min(full, Math.max(unique, readable));
}

/** This name capped at `level` characters, or emptied when the root is asked for everything. */
function cutTo(segment: FitSegment, level: number, floor: number): string {
	if (level <= 0 && segment.stage === "root") return "";
	const keep = Math.max(level, floor);
	if (keep >= segment.full.length) return segment.full;
	return segment.full.slice(0, keep) + ELLIPSIS;
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
	for (const stage of STAGE_ORDER) {
		if (saved >= overflow) break;
		const group: [number, FitSegment][] = [];
		for (const [index, segment] of segments.entries()) {
			if (segment.stage === stage) group.push([index, segment]);
		}
		if (!group.length) continue;
		saved += shrinkStage(group, overflow - saved, texts, measure);
	}

	return { texts, overflows: saved < overflow };
}

/**
 * Brings one stage's names down together until they have found `need`
 * pixels, or have nothing left to give.
 *
 * The cap descends one character at a time and every name in the stage is
 * measured against it, which is what makes the longest name pay first: it
 * is the only one the cap touches until the others are just as long. Each
 * level is planned from the full names rather than from the level before,
 * so a name that reached its floor early simply stops moving instead of
 * being cut again by the next round.
 */
function shrinkStage(
	group: readonly [number, FitSegment][],
	need: number,
	texts: string[],
	measure: (text: string, index: number) => number,
): number {
	const floors = group.map(([, segment]) => floorOf(segment));
	const fullWidths = group.map(([index, segment]) => measure(segment.full, index));
	const longest = Math.max(...group.map(([, segment]) => segment.full.length));
	// The root is the one segment allowed to disappear, so its stage is the
	// one whose cap may reach zero.
	const lowest = Math.min(
		...group.map(([, segment], at) => (segment.stage === "root" ? 0 : floors[at] ?? 1)),
	);

	let bestTexts: string[] | null = null;
	let bestSaving = 0;
	for (let level = longest - 1; level >= lowest; level--) {
		let saving = 0;
		const applied = group.map(([index, segment], at) => {
			const candidate = cutTo(segment, level, floors[at] ?? segment.full.length);
			if (candidate === segment.full) return segment.full;
			const gain = (fullWidths[at] ?? 0) - measure(candidate, index);
			// An "…" can be wider than the two characters it replaces on a
			// proportional font, so a cut that gains nothing is not worth
			// making: it would cost information for no room.
			if (gain <= 0) return segment.full;
			saving += gain;
			return candidate;
		});
		bestTexts = applied;
		bestSaving = saving;
		if (saving >= need) break;
	}

	if (!bestTexts) return 0;
	for (const [at, [index]] of group.entries()) {
		texts[index] = bestTexts[at] ?? texts[index] ?? "";
	}
	return bestSaving;
}
