/**
 * The fitting maths, on its own.
 *
 * `src/pathFit.ts` is deliberately free of the DOM, so its rules can be
 * checked without an Obsidian window: no CDP, no vault, no fixture. Widths
 * come from a monospace model here — every character the same — which is
 * what makes "the longest name shrinks first" a statement about characters
 * that a test can actually assert.
 *
 *     node .dev/test-fit.mjs [name filter]
 */

import { createSuite } from "./harness.mjs";
import { build } from "esbuild";

const bundle = await build({
	entryPoints: ["src/pathFit.ts"],
	bundle: true,
	format: "esm",
	write: false,
	logLevel: "silent",
});
const source = bundle.outputFiles[0].text;
const { agreementWith, chooseCut, cutName, readableMinimum, ELLIPSIS } = await import(
	`data:text/javascript;base64,${Buffer.from(source).toString("base64")}`
);

const { test, expect, run } = createSuite();

const cutFor = (full, siblings, stage = "folder") =>
	chooseCut(full, agreementWith(full, siblings), readableMinimum(stage));

// -------------------------------------------------- where the cut is made

/** What `full` looks like cut to `keep`, given who it sits beside. */
const cut = (full, keep, siblings = [], stage = "folder") =>
	cutName(full, keep, cutFor(full, siblings, stage));

test("names that agree at the front are cut at the front", () => {
	const family = ["aaaa-common-one", "aaaa-common-two"];
	// The old rule kept the opening — which is the half they share — and
	// threw away the three characters that tell them apart.
	expect("the end is what survives", cut("aaaa-common-one", 7, family), `${ELLIPSIS}mon-one`);
	expect("down to just what differs", cut("aaaa-common-one", 3, family), `${ELLIPSIS}one`);
	expect("and its neighbour stays distinguishable", cut("aaaa-common-two", 3, family), `${ELLIPSIS}two`);
});

test("names that agree at the end are cut at the end", () => {
	// Nothing shared at the front, everything from the dash on shared at the
	// back.
	const family = ["alpha-draft", "beta-draft"];
	expect("the opening survives", cut("alpha-draft", 5, family), `alpha${ELLIPSIS}`);
	expect("as does its neighbour's", cut("beta-draft", 4, family), `beta${ELLIPSIS}`);
});

test("names that agree at both ends keep what is between them", () => {
	// `report-draft` and `review-draft` share "re" at the front and "-draft"
	// at the back, so what tells them apart is in the middle — and that is
	// what a cut has to leave standing.
	const family = ["report-draft", "review-draft"];
	const one = cut("report-draft", 6, family);
	const other = cut("review-draft", 6, family);
	expect("the part that differs is shown", one, (v) => String(v).includes("port"));
	expect("and its neighbour's differs too", other, (v) => String(v).includes("view"));
	expect("so the two cannot be confused", one, (v) => v !== other);
});

test("names that agree at both ends keep their middle", () => {
	const family = ["note-2026-07-alpha", "note-2026-09-alpha"];
	const shown = cut("note-2026-07-alpha", 4, family);
	expect("the part that differs is what is shown", shown, (v) => String(v).includes("07"));
	expect("with the agreement elided on both sides", shown, (v) =>
		String(v).startsWith(ELLIPSIS) && String(v).endsWith(ELLIPSIS));
});

test("a name that agrees with nobody is cut in the middle", () => {
	// Nothing shared with a neighbour, so both ends are worth more than what
	// lies between them: a name opens with what it is and closes with which
	// one it is — and for a file, the closing part is its extension.
	const shown = cut("annual summary 2026.md", 10);
	expect("it opens as it did", shown, (v) => String(v).startsWith("annua"));
	expect("and still ends in its extension", shown, (v) => String(v).endsWith(".md"));
	expect("with the middle gone", shown, (v) => String(v).includes(ELLIPSIS));
});

test("agreement is measured from each end, and the ends are independent", () => {
	expect("a shared opening", agreementWith("aaaa-common-one", ["aaaa-common-two"]), { head: 12, tail: 0 });
	// Seven, not six: "beta-draft" and "alpha-draft" share the "a" in
	// front of the dash as well, one coming from "beta" and the other
	// from "alpha".
	expect("a shared ending", agreementWith("alpha-draft", ["beta-draft"]), { head: 0, tail: 7 });
	expect("both at once", agreementWith("report-draft", ["review-draft"]), { head: 2, tail: 6 });
	expect("a name with no neighbours agrees with nobody", agreementWith("Report", []), { head: 0, tail: 0 });
	expect("and one identical to its neighbour is not its own neighbour", agreementWith("Same", ["Same"]), { head: 0, tail: 0 });
});

test("a name that only rhymes with a neighbour is not held whole by it", () => {
	// The bug this replaced: "Schemes" and "parallel structures" happen to
	// end in the same two letters, and the old rule read that as "everything
	// from the first character to the seventeenth has to survive" — so a
	// nineteen-character folder could give up two letters and no more.
	const family = ["demo", "parallel structures", "Schemes", "testfolder", "testfolder2"];
	const chosen = cutFor("parallel structures", family);
	expect("two shared letters are not worth working around", chosen.shape, "middle");
	// Nothing here holds it: what the neighbours force is nothing, so the
	// floor is the shortest a middle cut can be. How short it may get for a
	// *reader* is a width, and the row settles that — see the driven suite.
	expect("so its neighbours hold back none of it", chosen.floor, (v) => v <= 2);
	expect("and it does come down", cut("parallel structures", 4, family), (v) => String(v).length <= 6);
	expect("and so does the name it rhymed with", cutFor("Schemes", family).floor, (v) => v <= 2);
});

test("the shape follows where the neighbours agree", () => {
	expect("agreeing at the front spends the front", cutFor("aaaa-common-one", ["aaaa-common-two"]).shape, "head");
	expect("agreeing at the back spends the back", cutFor("alpha-draft", ["beta-draft"]).shape, "tail");
	expect("agreeing nowhere spends the middle", cutFor("Quarterly report", []).shape, "middle");
	// "re" is shorter than the three characters a folder keeps regardless,
	// so only the "-draft" ending counts, and the front is what survives.
	expect("a short agreement does not count", cutFor("report-draft", ["review-draft"]).shape, "tail");
	// "re" is what they share at the front, so three characters is the least
	// that can tell them apart when the front is what is kept.
	expect("and it keeps enough to differ", cutFor("report-draft", ["review-draft"]).floor, 3);
});

test("agreement at both ends leaves the middle standing", () => {
	const family = ["2026-07-alpha-report-final", "2026-07-beta-report-final"];
	const chosen = cutFor("2026-07-alpha-report-final", family);
	expect("a window, not an end", chosen.shape, "window");
	const shown = cut("2026-07-alpha-report-final", chosen.floor, family);
	const other = cut("2026-07-beta-report-final", chosen.floor, family);
	// "a-report-final" is shared, so the stretch that actually differs is
	// "alph" against "bet" — the trailing "a" belongs to the ending.
	expect("what differs is what shows", shown, (v) => String(v).includes("alph"));
	expect("and the two stay apart", shown !== other, true);
	expect("cut at both ends", shown, (v) => String(v).startsWith(ELLIPSIS) && String(v).endsWith(ELLIPSIS));
});

// ------------------------------------------------------------- the floors

test("a name is not cut into its sibling", () => {
	// Fifteen characters in common at the *front*, and four that differ at
	// the end. Keeping the front would need sixteen characters to tell them
	// apart; keeping the back needs one, and says more with three.
	const siblings = ["Correspondence-2025", "Correspondence-alpha"];
	const chosen = cutFor("Correspondence-2025", siblings);
	expect("read from the end", chosen.shape, "head");
	// They share nothing at all at the back, so one character is enough to
	// tell them apart from there. It is not enough to *read*, which is a
	// separate floor and a width.
	expect("and down to what the neighbours force", chosen.floor, 1);
	const shown = cut("Correspondence-2025", 4, siblings);
	expect("what tells it apart survives", shown, (v) => String(v).endsWith("2025"));
	// The property underneath: whatever each is cut to, they cannot be
	// confused for one another.
	const other = cut("Correspondence-alpha", chosen.floor, siblings);
	expect("its lookalike still reads differently", other, (v) => v !== shown);
});

test("names that differ only in their last character are read from the other end", () => {
	// These used to be uncuttable: everything but the final character was
	// shared, so keeping the front meant keeping all of it.
	const siblings = ["Projects2025", "Projects2026"];
	expect("cut from the front", cutFor("Projects2025", siblings).shape, "head");
	expect("keeping the year that differs", cut("Projects2025", 5, siblings), (v) =>
		String(v).startsWith(ELLIPSIS) && String(v).endsWith("5"));
	expect("and its neighbour ends differently", cut("Projects2026", 5, siblings), (v) =>
		String(v).endsWith("6"));
});

test("a name with no neighbours is held back by none of them", () => {
	// The floor this module answers for is only what the *siblings* force.
	// What a reader needs is a width — four narrow letters and four wide ones
	// are not the same amount of name — and the row measures that in its own
	// font; see "a name keeps a readable width" in the driven suite.
	expect("nothing is forced", cutFor("Documents", []).floor, (v) => v <= 2);
	expect("kept at both ends", cut("Documents", 4, []), (v) => v.startsWith("D") && v.endsWith("s"));
	expect("and a name shorter than that keeps all of itself", cutFor("Ho", []).floor, 2);
});

test("the file name keeps six", () => {
	const chosen = cutFor("Quarterly report", [], "name");
	expect("its neighbours force nothing", chosen.floor, (v) => v <= 2);
	// Split between its two ends, which for a real file keeps the extension.
	expect("taken from the middle", cut("Quarterly report", 6, [], "name"), (v) =>
		v.startsWith("Qua") && v.endsWith("ort"));
	expect("and a real one keeps its extension", cut("annual summary 2026.md", 6, [], "name"), (v) =>
		String(v).endsWith(".md"));
});

test("a blank is never one of the characters a name keeps", () => {
	// Six characters to say which file this is, and one of them a space says
	// nothing at all. The spaces between the kept characters ride along free;
	// only a space that would sit against the `…` is refused.
	const shown = cut("My Notes 2026.md", 6, [], "name");
	expect("the opening keeps letters, not blanks", shown, (v) => !String(v).split(ELLIPSIS)[0].endsWith(" "));
	expect("and so does the closing", shown, (v) => !String(v).split(ELLIPSIS)[1].startsWith(" "));
	expect("six of them are worth reading", shown, (v) => String(v).replace(ELLIPSIS, "").replace(/ /g, "").length >= 6);
	// Kept from the front only, so the whole allowance goes there: four
	// characters worth reading, and the three blanks between them free.
	const family = ["a b c d e f", "z b c d e f"];
	expect("read from the front", cutFor("a b c d e f", family).shape, "tail");
	expect("counted past the spaces, not through them", cut("a b c d e f", 4, family), `a b c d${ELLIPSIS}`);
});

test("a name is never cut to more than it has", () => {
	// Asking for the whole of a name gives the whole of it back, ellipsis and
	// all left off — which is what the row relies on to know a name has
	// nothing left to give.
	expect("four characters", cut("Note", 4, [], "name"), "Note");
	expect("five characters", cut("Diary", 5, [], "name"), "Diary");
	expect("and more than it has", cut("Note", 9, [], "name"), "Note");
});

test("a floor never asks for more of a name than it has", () => {
	for (const [name, siblings, stage] of [
		["Ho", [], "folder"],
		["ab", ["ac"], "folder"],
		["Same", ["Same"], "folder"],
		["x", ["y"], "name"],
		["report-draft", ["review-draft"], "folder"],
		["aaaa-common-one", ["aaaa-common-two"], "folder"],
	]) {
		const chosen = cutFor(name, siblings, stage);
		expect(`${name} floors within itself`, chosen.floor <= name.length, true);
		expect(`${name} floors above nothing`, chosen.floor >= 1, true);
	}
});


await run();

