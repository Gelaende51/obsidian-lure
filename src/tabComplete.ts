/**
 * What Tab does to the segment being typed.
 *
 * The rule is the one a shell has taught everybody: **a press extends what
 * you typed as far as the names allow, and no further.** Typing `Sk` where
 * only `Sketches` starts that way finishes the word; typing `Al` where
 * `Alpha-one`, `Alpha-two` and `Alpine` all do gets you `Alp` and stops,
 * because the next character is a question only you can answer.
 *
 * Three consequences worth stating, because they are what make it feel
 * predictable rather than clever:
 *
 * 1. **A name is completed, never chosen.** Tab steps into a folder when
 *    what you typed leaves one candidate — at which point there was no
 *    choice to make — or when you have typed the folder's whole name and no
 *    *other folder* extends it. `Schemes` beside `Schemes2026` therefore
 *    keeps completing toward the longer name; the shorter one is reached
 *    with Enter or from the dropdown, which are the two gestures that mean
 *    "this one". A *file* never blocks a folder this way: `Projects` beside
 *    its own `Projects.md` is a folder note, not a fork in the path, and Tab
 *    walks folders.
 * 2. **A press that cannot extend the common prefix walks toward one
 *    candidate instead**, stopping at its next ambiguity — the way a second
 *    Tab in a shell gets you somewhere rather than beeping twice. Which
 *    candidate is the caller's business (it is the row the dropdown has
 *    highlighted); a candidate with nothing left to add is skipped, since
 *    stepping toward it would be a press that did nothing.
 * 3. **Case is taken from the name, not from you.** `sk` completes to
 *    `Sketches`, because what ends up in the field has to be the path that
 *    exists.
 *
 * And one rule under all of them: **a press always does something.** A
 * press that would leave the field exactly as it found it is not made; the
 * key hands over to the selection ladder instead. Without that, a folder
 * beside its own note produced a press that rewrote the same name forever.
 *
 * Kept free of the DOM and of the vault — names in, one decision out — so
 * the rule can be reasoned about, and tested, as plain string maths.
 */

/** One thing Tab could complete to: a child of the folder being listed. */
export interface TabCandidate {
	/** Its name, as it really is on disk. */
	label: string;
	/** Where it is, for descending into or for the selection ladder to describe. */
	path: string;
	/** Folders can be stepped into; files end the path. */
	folder: boolean;
}

/**
 * What the press should do.
 *
 * "ladder" is the end of the line: nothing here can be completed, so the
 * key goes back to widening the selection over what the row already shows.
 * Its `path` names the file Tab landed on, or null when it landed on
 * nothing and the row's own file is the subject.
 */
export type TabAction =
	| { kind: "write"; text: string }
	| { kind: "descend"; path: string }
	| { kind: "ladder"; path: string | null };

/** Same name, allowing for the case the filesystem would allow for. */
function same(a: string, b: string): boolean {
	return a.toLowerCase() === b.toLowerCase();
}

/**
 * The longest opening every one of these names shares, spelled the way the
 * first one spells it.
 *
 * Compared case-insensitively for the same reason `shortestUnique` is:
 * `Notes` and `notes` cannot both exist on Windows or macOS, so treating a
 * difference of case as a difference would produce a completion that only
 * works on Linux.
 */
export function commonPrefix(names: readonly string[]): string {
	const first = names[0] ?? "";
	let length = first.length;
	for (const name of names) {
		let shared = 0;
		while (
			shared < length &&
			shared < name.length &&
			first[shared]?.toLowerCase() === name[shared]?.toLowerCase()
		) {
			shared += 1;
		}
		length = shared;
	}
	return first.slice(0, length);
}

/**
 * One step along `toward`, stopping where the names disagree again.
 *
 * Taking the whole name would be choosing it; taking one character would
 * make Tab a very slow way of typing. Stopping at the next ambiguity is the
 * middle: everything that is still not a decision gets made for you.
 */
function stepToward(typed: string, names: readonly string[], toward: string): string {
	const next = toward[typed.length];
	if (next === undefined) return typed;
	const branch = names.filter((name) => name[typed.length]?.toLowerCase() === next.toLowerCase());
	return commonPrefix(branch);
}

/**
 * The whole rule, as one decision.
 *
 * `candidates` are the children whose names start with `typed` — the caller
 * has already done the matching, because only it knows which folder is
 * being listed. `target` is the candidate a press with nothing left to
 * complete should walk toward, or null to walk toward the first.
 *
 * `replacing` is the text a write would actually replace, which is not
 * always `typed`: the caller matches on the name without an extension the
 * caret has not reached, so a field reading `Projects.md` is matched as
 * `Projects`. Progress is measured against the field, or a press that
 * rewrote what was already there would count as having done something.
 */
export function planTab(
	typed: string,
	candidates: readonly TabCandidate[],
	target: TabCandidate | null,
	replacing: string = typed,
): TabAction {
	if (!candidates.length) return { kind: "ladder", path: null };

	if (candidates.length === 1) {
		const only = candidates[0];
		// One candidate is not a choice, so the press makes it: into the
		// folder, ready for the next segment.
		if (only.folder) return { kind: "descend", path: only.path };
		// A file ends the path. Finish its name if it is not finished, and
		// once it is, there is nothing left for Tab to complete.
		if (!same(only.label, replacing)) return { kind: "write", text: only.label };
		return { kind: "ladder", path: only.path };
	}

	const labels = candidates.map((candidate) => candidate.label);
	const prefix = commonPrefix(labels);
	// Never shorter than what was typed, however odd the list: a press that
	// took characters away would be the opposite of completing. The second
	// arm is the respelling — same length, different case, because the names
	// are what say how this is spelled.
	if (prefix.length > typed.length && !same(prefix, replacing)) {
		return { kind: "write", text: prefix };
	}
	if (prefix.length === typed.length && prefix !== typed && prefix !== replacing) {
		return { kind: "write", text: prefix };
	}

	// The field already names one of them outright. A file there is the end
	// of the walk — it is a destination, and Enter is what opens it.
	const named = candidates.find((candidate) => same(candidate.label, replacing));
	if (named && !named.folder) return { kind: "ladder", path: named.path };

	// A folder typed out in full is stepped into, unless another *folder*
	// extends its name and the choice is therefore still open. Files never
	// block it: a folder beside its own note is a folder note, not a fork in
	// the path, and this is the press that used to write that note's name
	// over and over instead of going anywhere.
	const exact = candidates.find((candidate) => candidate.folder && same(candidate.label, typed));
	const forked = candidates.some((candidate) => candidate.folder && !same(candidate.label, typed));
	if (exact && !forked) return { kind: "descend", path: exact.path };

	// Nothing further is common to all of them, so the press walks toward
	// one. A candidate that is already spelled out in the field has nothing
	// to walk toward, so it is passed over rather than spent a press on.
	const ordered = target ? [target, ...candidates] : [...candidates];
	for (const candidate of ordered) {
		const grown = stepToward(typed, labels, candidate.label);
		if (grown.length > typed.length && !same(grown, replacing)) {
			return { kind: "write", text: grown };
		}
	}

	// Nothing can be written. Stepping into a folder whose name is already
	// there is the only move left; failing that, the key hands over.
	if (exact) return { kind: "descend", path: exact.path };
	return { kind: "ladder", path: named?.path ?? null };
}
