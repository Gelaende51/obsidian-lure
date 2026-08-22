/**
 * Deciding how a long name should be shortened.
 *
 * Not *whether*, and not by how much: the row is fitted by the browser,
 * which clips a name continuously against a `min-width` and paints the `…`
 * itself (see `fitRow` and the fitting block in styles.css). What the
 * browser cannot decide is which end to clip — it only ever clips the end —
 * and the end is the wrong thing to lose when every folder beside this one
 * begins the same way.
 *
 * So this module answers two questions about one name:
 *
 * 1. **Which part of it is worth losing.** Whichever part its neighbours
 *    also have. They all open the same way, so the opening goes; they all
 *    close the same way, so the closing goes; they agree at both ends, so
 *    only the stretch between them is worth keeping. Where they agree
 *    nowhere — the common case — the middle goes, because a name opens with
 *    what it is and closes with which one it is, and for a file the closing
 *    part is its extension.
 *
 * 2. **How short it may get before it stops telling you which one it is.**
 *    Enough to differ from every neighbour, and no more. How short it may get
 *    before it stops being worth *reading* is a separate floor, measured in
 *    pixels rather than characters — four narrow letters and four wide ones
 *    are not the same amount of name — and applied by `fitRow`, which is the
 *    only part of this that knows about fonts.
 *
 * Free of the DOM on purpose — widths never enter into it — so the same
 * answers serve Obsidian's own breadcrumb segments inside the vault and this
 * plugin's chips outside it, and so the rules can be reasoned about, and
 * tested, as plain string maths.
 */

/** What a shortened name ends with. One character, and the one every file manager uses. */
export const ELLIPSIS = "…";

/**
 * The shortest run of agreement with a neighbour worth working around, for
 * a folder and for the file's own name.
 *
 * A count of characters rather than a width, because it is about how much of
 * a name is *redundant* — how many characters the folder beside it also has —
 * and that is a fact about the text, not about how wide it happens to be
 * drawn. How short a name may get is a different question, and that one is
 * measured in pixels; see `fitRow`.
 */
export const MIN_FOLDER_CHARS = 4;
export const MIN_NAME_CHARS = 6;

/**
 * Which part of the row a segment is, which is the order they are spent in.
 *
 * "root" is the opening segment — the vault name, or the label of the place
 * an external path starts at. It alone may go all the way to nothing: its
 * icon stays behind and carries the meaning.
 */
export type FitStage = "root" | "folder" | "name";


/**
 * How much of a name its neighbours also have, measured from each end.
 *
 * Two numbers and nothing else, because the two ends are independent
 * questions: `aaaa-common-one` beside `aaaa-common-two` agrees for twelve
 * characters at the front and none at the back, so the front is the part
 * worth losing. Kept apart deliberately — the earlier version demanded that
 * everything *between* the two agreements survive, which is how a folder
 * called `parallel structures` came to be pinned at seventeen of its
 * nineteen characters because `Schemes` happens to end in the same two
 * letters. Rhyming with a neighbour is not a reason to keep a name whole.
 *
 * Compared case-insensitively on purpose: `Notes` and `notes` cannot both
 * exist on Windows or macOS, so treating a difference in case as a
 * distinction would produce a shortening that only works on Linux.
 */
export interface NameAgreement {
	/** Longest opening any neighbour also has. */
	head: number;
	/** Longest ending any neighbour also has. */
	tail: number;
}

/** What `agreementWith` finds for a name with nothing beside it. */
const ALONE: NameAgreement = { head: 0, tail: 0 };

export function agreementWith(name: string, siblings: readonly string[]): NameAgreement {
	const lower = name.toLowerCase();
	let head = 0;
	let tail = 0;
	for (const sibling of siblings) {
		const other = sibling.toLowerCase();
		if (other === lower) continue;
		let opening = 0;
		while (
			opening < lower.length &&
			opening < other.length &&
			lower[opening] === other[opening]
		) {
			opening += 1;
		}
		if (opening > head) head = opening;
		let ending = 0;
		while (
			ending < lower.length &&
			ending < other.length &&
			lower[lower.length - 1 - ending] === other[other.length - 1 - ending]
		) {
			ending += 1;
		}
		if (ending > tail) tail = ending;
	}
	return { head, tail };
}

/** Where in a name the `…` goes, which is to say which part of it is spent. */
export type CutShape = "middle" | "head" | "tail" | "window";

/** Where the part that tells a name apart from its neighbours sits. */
export interface NameSpan {
	/** Where the part that tells this name apart begins. */
	start: number;
	/** Where it ends. */
	end: number;
}

/** A name's shortening: which part goes, and how short it may get. */
export interface NameCut {
	shape: CutShape;
	/** Fewest characters of the name that may still be shown. */
	floor: number;
	/** For `window`, the stretch that has to survive; ignored otherwise. */
	span: NameSpan;
}

/**
 * Whether a run shared with a neighbour is worth working around.
 *
 * A name keeps `readable` characters whatever happens, so agreement shorter
 * than that costs nothing to carry: `parallel structures` and `Schemes` end
 * in the same two letters, and a folder that keeps three characters is
 * already telling them apart from the front. Only a run at least as long as
 * the minimum can actually crowd out the part that distinguishes, and only
 * then is it worth eliding that end on purpose.
 */
function meaningful(shared: number, readable: number): boolean {
	return shared >= readable && shared > 0;
}

/**
 * Decides which part of a name to spend, and how short it may get.
 *
 * Four outcomes, one per place the agreement sits:
 *
 * - Neighbours agree at the **front** — the front goes: `…mon-one`.
 * - They agree at the **back** — the back goes: `report-2…`.
 * - They agree at **both** ends — both go and the differing stretch stands
 *   in a window: `…-07-…`.
 * - They agree at **neither**, which is the common case and therefore the
 *   default: the middle goes, because a name opens with what it is and
 *   closes with which one it is — and for a file the closing part is its
 *   extension. `annual…2026.md`.
 */
export function chooseCut(
	full: string,
	agree: NameAgreement,
	readable: number,
): NameCut {
	// Only what the neighbours force. How short a name may get for a *reader*
	// is not settled here: it is a width, and this module never sees one.
	const floorAtLeast = (want: number): number => Math.min(full.length, Math.max(1, want));
	const headShared = meaningful(agree.head, readable);
	const tailShared = meaningful(agree.tail, readable);
	const span: NameSpan = {
		start: Math.min(agree.head, Math.max(0, full.length - 1)),
		end: Math.max(Math.min(agree.head, full.length - 1) + 1, full.length - agree.tail),
	};

	if (headShared && tailShared) {
		// Both ends are redundant, so neither is worth keeping and the part
		// between them is the whole message. Cheaper than either single-sided
		// cut whenever the agreement is long, which is exactly when both ends
		// are shared.
		const window = Math.max(1, span.end - span.start);
		const oneSided = Math.min(agree.head, agree.tail) + 1;
		if (window <= oneSided) return { shape: "window", floor: floorAtLeast(window), span };
	}
	if (headShared || tailShared) {
		// One end is redundant, so the other is the one to keep — and keeping
		// it means showing more of it than the neighbours already have. The
		// cheaper side wins, which resolves the one-sided cases by itself:
		// when only the front is shared, keeping the back is what is cheap.
		const keepFront = agree.head + 1;
		const keepBack = agree.tail + 1;
		return keepFront <= keepBack
			? { shape: "tail", floor: floorAtLeast(keepFront), span }
			: { shape: "head", floor: floorAtLeast(keepBack), span };
	}

	// Nothing meaningful at either end: the middle is what goes. It still has
	// to come out distinct — two names agreeing on two characters at each end
	// would otherwise be cut to the same three — so the floor rises until the
	// halves it keeps say something the neighbours' do not. Two to begin
	// with, which is the shortest a middle cut can be and still have a middle.
	let keep = Math.min(full.length, 2);
	while (keep < full.length) {
		const front = Math.ceil(keep / 2);
		const back = keep - front;
		if (front > agree.head || back > agree.tail) break;
		keep += 1;
	}
	return { shape: "middle", floor: keep, span };
}

/**
 * The shortest opening of `text` holding `count` characters worth reading.
 *
 * Spaces do not count and are never left at the cut. A name kept to six
 * characters has six characters to say which file it is with, and spending
 * one of them on a blank says nothing — `My N…` tells you more than `My …`
 * does, at the same six. The spaces between the kept characters ride along
 * for free, because removing them would change how the name reads.
 */
function keepFront(text: string, count: number): string {
	let kept = 0;
	let at = 0;
	while (at < text.length && kept < count) {
		if (text[at] !== " ") kept += 1;
		at += 1;
	}
	// Never a blank against the `…`: it is invisible there, and it is a
	// character the next name along could have had.
	while (at > 0 && text[at - 1] === " ") at -= 1;
	return text.slice(0, at);
}

/** The same from the other end, for a name read backwards. */
function keepBack(text: string, count: number): string {
	let kept = 0;
	let at = text.length;
	while (at > 0 && kept < count) {
		at -= 1;
		if (text[at] !== " ") kept += 1;
	}
	while (at < text.length && text[at] === " ") at += 1;
	return text.slice(at);
}

/**
 * A name cut to `keep` characters in the shape its neighbours call for.
 *
 * The `…` counts as none of the `keep`: it stands for what was removed, not
 * for what is shown, and pricing it as a kept character would make a cut
 * name shorter than its own floor. Spaces do not count either — see
 * `keepFront`.
 */
export function cutName(full: string, keep: number, cut: NameCut): string {
	if (keep >= full.length) return full;
	const room = Math.max(1, keep);

	if (cut.shape === "window") {
		// Centred on the part that differs, so widening the cap reveals more
		// of its surroundings rather than sliding it along.
		const spare = Math.max(0, room - (cut.span.end - cut.span.start));
		const from = Math.max(
			0,
			Math.min(cut.span.start - Math.floor(spare / 2), full.length - room),
		);
		const to = Math.min(full.length, from + room);
		return `${from > 0 ? ELLIPSIS : ""}${full.slice(from, to)}${to < full.length ? ELLIPSIS : ""}`;
	}
	if (cut.shape === "head") return ELLIPSIS + keepBack(full, room);
	if (cut.shape === "tail") return keepFront(full, room) + ELLIPSIS;

	const front = Math.ceil(room / 2);
	const back = room - front;
	if (back <= 0) return keepFront(full, front) + ELLIPSIS;
	return keepFront(full, front) + ELLIPSIS + keepBack(full, back);
}

/** The shortest agreement worth working around at this point in the row. */
export function readableMinimum(stage: FitStage): number {
	return stage === "name" ? MIN_NAME_CHARS : MIN_FOLDER_CHARS;
}

/** The cut for a name with nothing beside it — the plain default. */
export function cutAlone(full: string, stage: FitStage): NameCut {
	return chooseCut(full, ALONE, readableMinimum(stage));
}
