/**
 * The completion rule, on its own.
 *
 * `src/tabComplete.ts` is deliberately free of the DOM and of the vault, so
 * what a press does can be checked without an Obsidian window: no CDP, no
 * fixture, no timing. Names in, one decision out — which is what makes
 * "stops at the next ambiguity" a statement a test can actually assert.
 *
 * The behaviour in a real window is `.dev/test-tab.mjs`; this is the maths
 * underneath it.
 *
 *     node .dev/test-complete.mjs [name filter]
 */

import { createSuite } from "./harness.mjs";
import { build } from "esbuild";

const bundle = await build({
	entryPoints: ["src/tabComplete.ts"],
	bundle: true,
	format: "esm",
	write: false,
	logLevel: "silent",
});
const source = bundle.outputFiles[0].text;
const { planTab, commonPrefix, planSuggestion } = await import(
	`data:text/javascript;base64,${Buffer.from(source).toString("base64")}`
);

const { test, expect, run } = createSuite();

/** A folder called `name`, in the folder being listed. */
const dir = (name) => ({ label: name, path: `Here/${name}`, folder: true });
/** A file called `name`, likewise. */
const file = (name) => ({ label: name, path: `Here/${name}`, folder: false });

/**
 * The candidates the path bar would hand in: the children whose names start
 * with what has been typed. Done here too, rather than passing whole folders
 * in, so these cases exercise the same contract `completions` provides.
 */
const starting = (typed, children) =>
	children.filter((child) => child.label.toLowerCase().startsWith(typed.toLowerCase()));

/** One press on a folder holding `children`: what it does. */
const press = (typed, children, target = null) => planTab(typed, starting(typed, children), target);
/** The text a press writes, for the many cases where that is the whole answer. */
const written = (typed, children, target = null) => {
	const action = press(typed, children, target);
	return action.kind === "write" ? action.text : `(${action.kind})`;
};

// ------------------------------------------------------------ the prefix

test("the common prefix is the one every name shares", () => {
	expect("three names", commonPrefix(["Alpha-one", "Alpha-two", "Alpine"]), "Alp");
	expect("one name is all of itself", commonPrefix(["Sketches"]), "Sketches");
	expect("nothing in common", commonPrefix(["Alpha", "Beta"]), "");
	expect("no names at all", commonPrefix([]), "");
});

test("case is compared loosely and spelled from the name", () => {
	// A folder cannot hold both spellings on Windows or macOS, so treating a
	// difference of case as a difference would complete only on Linux.
	expect("shared despite the case", commonPrefix(["Alpha-one", "alpha-two"]), "Alpha-");
});

// ----------------------------------------------------- extending, or not

test("a press extends to the first disagreement and stops", () => {
	const folders = [dir("Alpha-one"), dir("Alpha-two"), dir("Alpine")];
	expect("Al becomes Alp", written("Al", folders), "Alp");
	expect("and no further", written("Alp", folders), (v) => v !== "Alpha-one" && v !== "Alpine");
});

test("what you typed is respelled the way the folder spells it", () => {
	expect("sk completes as Sketches", written("sk", [dir("Sketches"), file("Sketchbook.md")]), "Sketch");
	// A single candidate is not a choice, so the press makes it rather than
	// stopping to fix the spelling.
	expect("and alone, it is stepped into", press("sk", [dir("Sketches")]), {
		kind: "descend",
		path: "Here/Sketches",
	});
});

// -------------------------------------------------------- one candidate

test("one folder left is stepped into", () => {
	expect("descends", press("Sk", [dir("Sketches")]), { kind: "descend", path: "Here/Sketches" });
});

test("one file left is finished, and then it is the end of the line", () => {
	const only = [file("Kickoff.md")];
	expect("the name is written out", written("Kick", only), "Kickoff.md");
	// Nothing left to complete: the key becomes the selection ladder, over
	// the file it landed on.
	expect("and a second press widens instead", press("Kickoff.md", only), {
		kind: "ladder",
		path: "Here/Kickoff.md",
	});
});

test("nothing matching means nothing to complete", () => {
	expect("straight to the ladder", press("zz", []), { kind: "ladder", path: null });
});

// ------------------------------------------------ walking toward one name

test("a press that cannot extend walks toward a candidate", () => {
	const folders = [dir("Alpha-one"), dir("Alpha-two"), dir("Alpine")];
	// "Alp" is already the common prefix, so this press has to pick a
	// branch — the first, with no row highlighted.
	expect("into the first branch", written("Alp", folders), "Alpha-");
	expect("then to the whole name", written("Alpha-", folders), "Alpha-one");
	expect("and then it is the only one left", press("Alpha-one", [dir("Alpha-one")]), {
		kind: "descend",
		path: "Here/Alpha-one",
	});
});

test("the highlighted row is the one walked toward", () => {
	const folders = [dir("Alpha-one"), dir("Alpha-two"), dir("Alpine")];
	expect("toward Alpine, not the first row", written("Alp", folders, dir("Alpine")), "Alpine");
	expect("toward Alpha-two goes only as far as they agree", written("Alp", folders, dir("Alpha-two")), "Alpha-");
});

test("a name already spelled out in full is walked past, not into", () => {
	// The press must do something. Stepping toward "Schemes" would add no
	// character, so the longer sibling is where it goes — which is why Tab
	// can never reach a folder whose name is another's opening, and Enter
	// and the dropdown are what mean "this one".
	const folders = [dir("Schemes"), dir("Schemes2026")];
	expect("on to the longer name", written("Schemes", folders), "Schemes2026");
	expect("even when it is the highlighted row", written("Schemes", folders, dir("Schemes")), "Schemes2026");
});

test("a folder and a file can both be candidates", () => {
	const mixed = [dir("Report"), file("Reports.md")];
	expect("the shared opening is written", written("Rep", mixed), "Report");
	// The folder's whole name is now in the field and only a file extends
	// it, so the choice is not open: files are destinations, not steps.
	expect("and the folder is stepped into", press("Report", mixed), {
		kind: "descend",
		path: "Here/Report",
	});
});

test("a folder note does not stand in the way of its folder", () => {
	// What a folder-note plugin makes: a folder and a note of the same name,
	// side by side. This used to write the note's name into the field and
	// then rewrite it on every further press, so the folder could not be
	// entered with Tab at all.
	const pair = [dir("Projects"), file("Projects.md")];
	expect("the name completes", written("Pro", pair), "Projects");
	expect("and the folder is entered", press("Projects", pair), {
		kind: "descend",
		path: "Here/Projects",
	});
	// Typed out in full, the note is a destination like any other file: the
	// walk is over and the key hands over to the selection ladder.
	expect("while the note itself ends the walk", planTab("Projects", starting("Projects", pair), null, "Projects.md"), {
		kind: "ladder",
		path: "Here/Projects.md",
	});
});

test("a press that would rewrite what is already there is not made", () => {
	// The caller matches on the name without the extension, so "Projects.md"
	// in the field is matched as "Projects" — and the completion it produces
	// is the text already showing. Measuring progress against the field is
	// what stops that press repeating forever.
	const pair = [dir("Projects"), file("Projects.md")];
	const action = planTab("Projects", starting("Projects", pair), file("Projects.md"), "Projects.md");
	expect("no write", action.kind, (v) => v !== "write");
});

// --------------------------------------------------------------- limits

test("a press never takes characters away", () => {
	// planTab trusts its caller for the matching, so a list gone stale — the
	// folder changed under a held popover — can contain names that no longer
	// start with what is typed. Their common prefix is shorter than the
	// field, and writing it would delete what the user had put there.
	const stale = [dir("Alpha-one"), dir("Alpha-two"), dir("Alpine")];
	const action = planTab("Alpha-", stale, null);
	expect("it completes instead", action, { kind: "write", text: "Alpha-one" });
});

test("candidates that are all exactly what was typed give up", () => {
	// A folder cannot hold two entries of one name; a caller with a stale
	// list can hand them over. Nothing can be written, so the press either
	// steps into the folder among them or hands over — never nothing.
	const twins = [dir("Same"), file("Same")];
	expect("the folder is the only move left", press("Same", twins), {
		kind: "descend",
		path: "Here/Same",
	});
	expect("and with no folder at all, it hands over", press("Same", [file("Same"), file("Same")]), {
		kind: "ladder",
		path: "Here/Same",
	});
});

// ---------------------------------------------------------------------- run

// ------------------------------------------------- what is offered inline

/** What would be shown after the caret, having typed `typed` in this folder. */
const offered = (typed, children) => planSuggestion(typed, starting(typed, children));

test("the agreement between the names is offered as already made", () => {
	const family = [dir("Alpha-one"), dir("Alpha-two"), dir("Alpine")];
	// All three agree as far as "Alp", so "Al" is offered the "p".
	expect("as far as they agree, and no further", offered("Al", family), "p");
	expect("nothing once the agreement is used up", offered("Alp", family), "");
	// One candidate agrees with itself all the way to its end.
	expect("a single name is offered whole", offered("Alpi", family), "ne");
});

test("what is offered is the continuation, never a rewrite of what was typed", () => {
	const family = [dir("Sketches")];
	// Typed in the wrong case: the letters already in the field are the
	// user's, and only what follows them is offered.
	expect("the tail only, in the folder's spelling", offered("sk", family), "etches");
	expect("nothing is offered for a name typed out in full", offered("Sketches", family), "");
});

test("nothing is offered where there is nothing to agree on", () => {
	const family = [dir("Alpha"), dir("Beta")];
	expect("no shared opening, nothing offered", offered("", family), "");
	expect("a name nothing starts with offers nothing", offered("zz", family), "");
	expect("an empty folder offers nothing", offered("a", []), "");
});

await run();

