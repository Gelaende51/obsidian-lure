#!/usr/bin/env node
/**
 * Behavioural tests for Tab in the path bar: completing a name as far as the
 * folder allows, stepping into it once only one name is left, then widening
 * the selection once there is nothing left to complete.
 *
 * The rule itself is `src/tabComplete.ts` and is tested as string maths in
 * `.dev/test-complete.mjs`. What this suite is for is everything that file
 * cannot see: that the candidates really come from the folder on screen,
 * that the highlighted row is read off the live popover, and that a
 * completion lands in the field without ending the editing session.
 *
 * Tab is the key the CDP helper used to drop on the floor — it was sent as
 * a textless rawKeyDown and never reached the focused element, so this whole
 * feature would have been debugged against a harness bug. If these ever fail
 * wholesale with "nothing happened", check that first.
 *
 * One connection for the run: focusing in one process and pressing in the
 * next loses the key to the editor.
 *
 *   node .dev/test-tab.mjs           # all
 *   node .dev/test-tab.mjs ladder    # only tests whose name matches
 *
 * Requires --remote-debugging-port=9222 and OBSIDIAN_VAULT set.
 */

import { connect, PAUSE, pressKey, quiesce, reloadPlugin } from "./cdpSession.mjs";
import { createSuite } from "./harness.mjs";

const NOTE = "Schemes/2026/Cake catapult.md";
/** Named so nothing in a real vault can collide with them, and deleted at the end. */
const PREFIX = "Lure-tab-";
const FOLDERS = [
	`${PREFIX}alpha-one`,
	`${PREFIX}alpha-two`,
	`${PREFIX}alpine`,
	`${PREFIX}only`,
	`${PREFIX}short`,
	`${PREFIX}short2026`,
	`${PREFIX}noted`,
	`${PREFIX}deep`,
	`${PREFIX}deep/inner`,
	`${PREFIX}deep/inner/deeper`,
	// Carries the first step of `deep`'s path and not the second, so a swap
	// onto it has something to keep and something to cut.
	`${PREFIX}half`,
	`${PREFIX}half/inner`,
	// A second child of `deep`, mirroring the first all the way down, so the
	// walk can be forked onto it halfway and carry on to the same depth.
	`${PREFIX}deep/other`,
	`${PREFIX}deep/other/deeper`,
];
/** Files made beside the folders, and taken out again with them. */
const FILES = [
	`${PREFIX}noted.md`,
	`${PREFIX}deep/inner/deeper/leaf.md`,
	`${PREFIX}deep/other/deeper/leaf.md`,
	// A plain file with no folder of its name beside it, so completing it
	// leaves a whole filename standing and nothing else to walk into.
	`${PREFIX}deep/unique.md`,
];
const page = await connect();

/**
 * The note and folders this suite walks, made rather than assumed.
 *
 * They used to be taken for granted, which tied the suite to one particular
 * vault: run against any other and every case failed on a null element,
 * reporting the plugin broken when it was the fixture that was missing.
 *
 * Rebuilt before every case rather than once per run: several cases here
 * complete a name by *creating* what they complete into, and one that trails
 * a mutating case would otherwise walk a tree that no longer looks the way it
 * was declared.
 */
const buildFixture = `
	const mk = async (p) => { if (!app.vault.getAbstractFileByPath(p)) await app.vault.createFolder(p); };
	const mkf = async (p) => { if (!app.vault.getAbstractFileByPath(p)) await app.vault.create(p, "# fixture"); };
	await mk("Schemes");
	await mk("Schemes/2026");
	// A second folder sharing the first letters, so completing "S" is not
	// unambiguous by accident.
	await mk("Schemes/2025");
	await mkf(${JSON.stringify(NOTE)});
	// Sorts before the note this bar belongs to, so "the list opens on where
	// you are" can be told apart from "the list opens on its first row".
	await mkf("Schemes/2026/Abacus.md");
	// A family of root folders with a shared opening, which is what makes
	// ambiguity testable at all: three that agree as far as "alp", one that
	// nothing else starts like, and a pair where one name is the other's
	// opening.
	for (const name of ${JSON.stringify(FOLDERS)}) await mk(name);
	// A folder note: a note carrying the name of the folder beside it.
	for (const name of ${JSON.stringify(FILES)}) await mkf(name);
	${PAUSE(500)}
	return true;
`;

/**
 * The state every case here starts from: this session's build, nothing left
 * open from the case before, and the fixture tree as declared.
 */
const { test, expect, run } = createSuite({
	reset: async () => {
		await reloadPlugin(page);
		await quiesce(page);
		await page.evaluate(buildFixture);
	},
	teardown: async () => {
		await page.evaluate(teardown);
		page.close();
	},
});

/** Opens the path input on the note's own name, emptied and focused. */
const arm = `
	document.querySelector(".lure-path-input")?.blur();
	document.body.click();
	${PAUSE(300)}
	app.workspace.getLeavesOfType("empty").forEach((l) => l.detach());
	app.workspace.getLeavesOfType("markdown").slice(1).forEach((l) => l.detach());
	app.workspace.detachLeavesOfType("lure-external-file");
	${PAUSE(300)}
	await app.workspace.getLeaf(false).openFile(app.vault.getAbstractFileByPath(${JSON.stringify(NOTE)}));
	${PAUSE(800)}
	const root = app.workspace.getMostRecentLeaf().view.containerEl
		.querySelector(".view-header-title-container");
	root.querySelector(".lure-filename-text").click();
	${PAUSE(400)}
	return true;
`;

/** Focus is re-asserted in its own round trip, after any render has settled. */
const focusField = `
	const input = document.querySelector(".lure-path-input");
	if (!input) return false;
	input.focus();
	return document.activeElement === input;
`;

const field = `
	const input = document.querySelector(".lure-path-input");
	return JSON.stringify({
		value: input ? input.value : null,
		selected: input ? input.value.slice(input.selectionStart, input.selectionEnd) : null,
		chips: [...document.querySelectorAll(".lure-browse-chip")].map((c) => c.textContent),
		rows: [...document.querySelectorAll(".suggestion-item .lure-suggest-label")].map((e) => e.textContent),
	});
`;

const look = async () => JSON.parse(await page.evaluate(field));

async function armed() {
	await page.evaluate(arm);
	expect("field is focused", await page.evaluate(focusField), true);
}

/** Types as a person does, so the field treats it as typed rather than prefilled. */
async function type(text) {
	await page.send("Input.insertText", { text });
	await page.evaluate(PAUSE(300) + "return true;");
	await page.evaluate(focusField);
}

async function tab() {
	await pressKey(page, "Tab");
	await page.evaluate(PAUSE(500) + "return true;");
	await page.evaluate(focusField);
}

/** One press of Shift+Tab, which walks the same road backwards. */
async function back() {
	await pressKey(page, "shift+Tab");
	await page.evaluate(PAUSE(550) + "return true;");
	await page.evaluate(focusField);
}

/**
 * Starts from the vault root, which is what the focus command does. Arming
 * on the note's own name scopes the field to *its* folder, where "Sch"
 * matches nothing — and Tab then falls through to the ladder, which looks
 * enough like success to pass a weak assertion.
 */
async function armAtRoot() {
	await page.evaluate(`
		document.querySelector(".lure-path-input")?.blur();
		document.body.click();
		${PAUSE(300)}
		await app.workspace.getLeaf(false).openFile(app.vault.getAbstractFileByPath(${JSON.stringify(NOTE)}));
		${PAUSE(700)}
		app.commands.executeCommandById("lure:focus-path-bar");
		${PAUSE(500)}
		document.querySelector(".lure-path-input")?.focus();
		return true;
	`);
	// Cleared by a real key over the selection the command leaves, not by
	// assigning to `value`. The command now opens on a rung of the selection
	// ladder, and it is *typing* that hands Tab back to completing folders —
	// so a field emptied from script would leave the ladder running and make
	// the first Tab widen instead of complete.
	await pressKey(page, "Backspace");
	await page.evaluate(PAUSE(250) + "return true;");
	expect("field is focused at the root", await page.evaluate(focusField), true);
	expect("and empty", await page.evaluate(`return document.querySelector(".lure-path-input")?.value ?? null;`), "");
}

test("Tab completes a folder and steps into it, once only one is left", async () => {
	await armAtRoot();
	// Nothing else in the vault starts like this, so the press has no choice
	// to make and makes it.
	await type(`${PREFIX}on`);
	await tab();
	const s = await look();
	expect("stepped into the completed folder", s.chips, (v) => Array.isArray(v) && v.includes(`${PREFIX}only`));
	expect("field cleared for the next segment", s.value, "");
});

test("Tab stops where the names stop agreeing", async () => {
	await armAtRoot();
	// Three folders start this way and agree as far as "alp", and that much
	// is offered before any key is pressed for it.
	await type(`${PREFIX}a`);
	const offered = await look();
	expect("the shared opening is offered", offered.value, `${PREFIX}alp`);
	expect("marked, as the part nobody typed", offered.selected, "lp");

	// The press takes it, and stops there. Where the names stop agreeing is
	// a question for the user: walking on toward one of them would be the
	// press answering it, and picking whichever name sorts first.
	await tab();
	const s = await look();
	expect("the press takes it and stops at the fork", s.value, `${PREFIX}alp`);
	expect("and stepped into nothing", s.chips, (v) => Array.isArray(v) && !v.some((c) => c.startsWith(PREFIX)));
	// The caret sits after the completion, ready to be typed on: this is text
	// you asked for, not a suggestion to type over.
	expect("nothing left selected", s.selected, "");
});

test("a further press walks toward one name, a step at a time", async () => {
	await armAtRoot();
	await type(`${PREFIX}a`);
	expect("the shared opening arrives with the typing", (await look()).value, `${PREFIX}alp`);

	await tab();
	expect("the press takes it and stops", (await look()).value, `${PREFIX}alp`);

	await tab();
	expect("one branch further", (await look()).value, `${PREFIX}alpha-`);

	await tab();
	expect("and to the whole name", (await look()).value, `${PREFIX}alpha-one`);

	await tab();
	const s = await look();
	expect("only then is it stepped into", s.chips, (v) => Array.isArray(v) && v.includes(`${PREFIX}alpha-one`));
	expect("ready for the next segment", s.value, "");
});

test("arrowing to a row and pressing Tab takes that row", async () => {
	await armAtRoot();
	await type(`${PREFIX}a`);
	await page.evaluate(`document.querySelector(".lure-path-input")?.focus(); return true;`);
	// Twice: typing leaves nothing highlighted, so the first press lands on
	// the first row and the second is what makes "the row you arrowed to"
	// different from "the row that sorts first".
	for (let i = 0; i < 2; i++) {
		await pressKey(page, "ArrowDown");
		await page.evaluate(PAUSE(400) + "return true;");
	}
	// Arrowing previews the row into the field, which leaves a complete name
	// there — so the press has nothing left to choose and simply takes it.
	expect("the row is in the field", (await look()).value, `${PREFIX}alpha-two`);

	await tab();
	const s = await look();
	expect("stepped into the row that was showing", s.chips, (v) => Array.isArray(v) && v.includes(`${PREFIX}alpha-two`));
	expect("and not into the first one", s.chips, (v) => Array.isArray(v) && !v.includes(`${PREFIX}alpha-one`));
});

test("a name another name opens with is walked past, not into", async () => {
	await armAtRoot();
	await type(`${PREFIX}short`);
	await tab();
	const s = await look();
	// "Lure-tab-short" is a folder and is fully typed, but "Lure-tab-short2026"
	// starts the same way — so the press still has a choice to make, and
	// completes rather than choosing. Enter and the dropdown are what mean
	// "this one".
	expect("completed on to the longer name", s.value, `${PREFIX}short2026`);
	expect("nothing stepped into", s.chips, (v) => Array.isArray(v) && !v.some((c) => c.startsWith(PREFIX)));
});

test("the field is respelled the way the folder spells it", async () => {
	await armAtRoot();
	await type(`${PREFIX.toLowerCase()}alp`);
	await tab();
	// Same length, different case: what ends up in the field has to be the
	// path that exists, not the one that was typed.
	expect("case taken from the names", (await look()).value, `${PREFIX}alp`);
});

test("the row the list opens on is the one Tab walks toward", async () => {
	await armed();
	// Clears the field with real keys, leaving it empty in the note's own
	// folder — where the list opens on the note itself rather than on its
	// first row. Select-all first: clicking the name selects the stem and
	// leaves the extension behind it, so one Backspace would leave ".md" in
	// there, and a press with ".md" in the field is a different test.
	await pressKey(page, "ctrl+a");
	await pressKey(page, "Backspace");
	await page.evaluate(PAUSE(400) + "return true;");
	await page.evaluate(focusField);
	expect("field emptied", (await look()).value, "");

	await tab();
	// "Abacus.md" is the first row. Walking toward the highlighted row
	// instead is what heads the field this way.
	//
	// Which way, not how far: a press walks toward a name only as far as the
	// names agree, so how much of it lands depends on what else is in the
	// folder — and this folder belongs to whatever vault the suite is run
	// against, not to the suite. Asserting the whole name made the test a
	// statement about somebody's notes.
	const walked = (await look()).value;
	expect("headed toward where you already are", walked, (v) =>
		typeof v === "string" && v.length > 0 && "Cake catapult.md".toLowerCase().startsWith(v.toLowerCase()));
	expect("and not toward the row that merely sorts first", walked, (v) =>
		!"Abacus.md".toLowerCase().startsWith(String(v).toLowerCase()));
});

test("ladder: Tab past the end widens the selection a rung at a time", async () => {
	await armed();
	// Where the walk begins, read rather than assumed: clicking the note's
	// name stands the row in the note's own folder, so the chips are part of
	// that state and the wrap has to bring them back too.
	const begun = await look();
	// Clicking the name already shows it without its extension, which is
	// what the first rung shows — so the key starts on the second rather
	// than spending a press on a state that is already on screen.
	expect("the click is already the first rung", begun.selected, "Cake catapult");

	await tab();
	expect("so the first press adds the extension", (await look()).selected, "Cake catapult.md");

	await tab();
	expect("then the path from the vault", (await look()).selected, NOTE);

	await tab();
	const system = await look();
	expect("then the path from the system root", system.selected, (v) =>
		typeof v === "string" && v.endsWith(`/${NOTE}`) && v.startsWith("/"));

	await tab();
	const wrapped = await look();
	// The rungs are a loop, and it closes where it opened: this session was
	// armed by clicking the note's name, so that is what comes back —
	// selected, exactly as the click left it. A lap that ended by emptying
	// the field would have thrown the name away for a walk of nothing but
	// Tab presses.
	expect("then it wraps back to where the walk began", wrapped.value, "Cake catapult.md");
	expect("selected as the click left it", wrapped.selected, "Cake catapult");
	expect("standing where it began too", wrapped.chips, begun.chips);
});

test("a lap of the rungs from a folder click costs nothing", async () => {
	// The gesture the whole rule is for: click a folder, then never type —
	// only ever press Tab. Nothing on the row may disappear, however many
	// laps it takes.
	await page.evaluate(arm.replace("root.querySelector(\".lure-filename-text\").click();", ""));
	const clicked = await page.evaluate(`
		const root = app.workspace.getMostRecentLeaf().view.containerEl
			.querySelector(".view-header-title-container");
		const seg = [...root.querySelectorAll(".view-header-breadcrumb")]
			.find((e) => e.textContent === "2026");
		if (!seg) return null;
		seg.click();
		${PAUSE(500)}
		const input = document.querySelector(".lure-path-input");
		return JSON.stringify({
			value: input ? input.value : null,
			selected: input ? input.value.slice(input.selectionStart, input.selectionEnd) : null,
			chips: [...root.querySelectorAll(".lure-browse-chip")].map((c) => c.textContent),
		});
	`);
	expect("the click opens the rest of the path", clicked, (v) => typeof v === "string");
	const start = JSON.parse(clicked ?? "null");
	expect("with the folder selected in it", start && start.selected, "2026");
	expect("and the path behind it", start && start.value, "2026/Cake catapult.md");

	// The clicked folder is walked first — it is a folder, and Tab walks
	// folders — and only then does the ladder begin.
	await page.evaluate(focusField);
	await tab();
	const stepped = await look();
	expect("the clicked folder is stepped into", stepped.chips, (v) => Array.isArray(v) && v.includes("2026"));
	expect("carrying the rest of the path with it", stepped.value, "Cake catapult.md");

	// Arriving at the name *is* the first rung: it opens without its
	// extension, marked. Landing plain and marking it on the press after
	// would be a press that showed the name and did nothing to it.
	expect("the file name arrives on the first rung", stepped.selected, "Cake catapult");

	// Then the rungs, however many this path needs.
	let top = null;
	for (let i = 0; i < 6 && !top; i++) {
		await tab();
		const rung = await look();
		if (typeof rung.selected === "string" && rung.selected.startsWith("/")) top = rung;
	}
	expect("a rung shows the path from the system root", top && top.selected, (v) =>
		typeof v === "string" && v.endsWith(`/${NOTE}`));

	await tab();
	const round = await look();
	// All the way round: the front of the walk is the click, not the rung
	// the ladder happened to start on, so the folders that were walked are
	// given back too.
	expect("the lap comes back to the click", round.value, start.value);
	expect("selection and all", round.selected, start.selected);
	expect("standing where the click left it", round.chips, start.chips);
});

test("every folder in the path gets its own press", async () => {
	// The complaint this is here for: clicking a folder and pressing Tab
	// jumped to the file name, and the folders in between were never walked
	// at all — the ladder took over while there was still path to cover.
	const deep = `${PREFIX}deep`;
	const leaf = `${deep}/inner/deeper/leaf.md`;
	const opened = await page.evaluate(`
		document.querySelector(".lure-path-input")?.blur();
		document.body.click();
		${PAUSE(300)}
		await app.workspace.getLeaf(false).openFile(app.vault.getAbstractFileByPath(${JSON.stringify(leaf)}));
		${PAUSE(800)}
		const c = app.workspace.getMostRecentLeaf().view.containerEl
			.querySelector(".view-header-title-container");
		const seg = [...c.querySelectorAll(".view-header-breadcrumb")]
			.find((e) => e.textContent === ${JSON.stringify(deep)});
		if (!seg) return false;
		seg.click();
		${PAUSE(500)}
		return true;
	`);
	expect("the top folder of the path is clicked", opened, true);
	const start = await look();
	expect("the field holds the whole path below it", start.value, `${deep}/inner/deeper/leaf.md`);
	expect("with that folder marked", start.selected, deep);

	await tab();
	const one = await look();
	expect("the first press takes one folder", one.chips, (v) => Array.isArray(v) && v.includes(deep));
	expect("and opens on the next one, marked", one.selected, "inner");
	expect("with the rest of the path behind it", one.value, "inner/deeper/leaf.md");

	await tab();
	const two = await look();
	expect("the second takes the next", two.chips, (v) => Array.isArray(v) && v.includes("inner"));
	expect("and marks the one after", two.selected, "deeper");

	await tab();
	const three = await look();
	expect("the third takes that one", three.chips, (v) => Array.isArray(v) && v.includes("deeper"));
	expect("leaving only the file name", three.value, "leaf.md");

	// With no folder left to walk, the same press arrives on the ladder's
	// first rung: the name without its extension, marked. No press is spent
	// showing the name with the caret parked at its end.
	expect("arriving on the first rung", three.selected, "leaf");

	await tab();
	expect("the rung after adds the extension", (await look()).selected, "leaf.md");
});

test("a fourth click reaches the system path too", async () => {
	await armed();
	await page.evaluate(`
		const input = document.querySelector(".lure-path-input");
		const r = input.getBoundingClientRect();
		// From the second: the press that opened the field is the first of
		// this run. Starting again at one would be a fresh press *inside* a
		// text field, which is not this gesture — it is somebody putting the
		// caret somewhere, and what follows it belongs to the browser.
		for (let n = 2; n <= 4; n++) {
			input.dispatchEvent(new MouseEvent("click", {
				bubbles: true, cancelable: true, detail: n,
				clientX: r.left + 4, clientY: r.top + 4,
			}));
		}
		${PAUSE(400)}
		return true;
	`);
	const s = await look();
	expect("selected from the system root", s.selected, (v) =>
		typeof v === "string" && v.endsWith(`/${NOTE}`) && v.startsWith("/"));
});

test("the ladder does not survive into the next session", async () => {
	await armed();
	await tab();
	expect("ladder started", (await look()).selected, "Cake catapult.md");
	await page.evaluate(`document.querySelector(".lure-path-input")?.blur(); document.body.click(); ${PAUSE(400)} return true;`);
	await armAtRoot();
	await type(`${PREFIX}on`);
	await tab();
	// A fresh session must complete a folder, not resume widening. The empty
	// field is the tell: the ladder always leaves text in it.
	const s = await look();
	expect("Tab completes rather than widening", s.value, "");
});

test("a folder is stepped into even with a note of its name beside it", async () => {
	await armAtRoot();
	// The folder and its note share every character of the folder's name, so
	// the press that finishes that name has a file still matching it. A file
	// is a destination rather than a step, so it does not hold the folder up
	// — before, the press wrote the note's name instead, and every press
	// after that rewrote it, so the folder could not be entered at all.
	await type(`${PREFIX}not`);
	expect("the folder's name is offered", (await look()).value, `${PREFIX}noted`);

	// One press: it takes the offer and steps in, because one candidate is
	// not a choice. The note beside the folder is a destination, not a fork.
	await tab();
	const s = await look();
	expect("and the folder is entered", s.chips, (v) => Array.isArray(v) && v.includes(`${PREFIX}noted`));
	expect("ready for the next segment", s.value, "");
});

test("Shift+Tab walks back out the way Tab walked in", async () => {
	await armAtRoot();
	await type(`${PREFIX}a`);
	for (let i = 0; i < 4; i++) await tab();
	const walked = await look();
	expect("walked all the way in", walked.chips, (v) => Array.isArray(v) && v.includes(`${PREFIX}alpha-one`));

	// Every press mirrors one press of Tab, in reverse order — and none of
	// them takes a character away. What a press gave back is *marked*, the
	// way going forward marks what it has widened over, so the name stays in
	// front of you and typing replaces the marked part.
	await back();
	const out = await look();
	expect("out of the folder again", out.chips, (v) => Array.isArray(v) && !v.includes(`${PREFIX}alpha-one`));
	expect("holding the name it had completed", out.value, `${PREFIX}alpha-one`);

	await back();
	const one = await look();
	expect("the name is still there", one.value, `${PREFIX}alpha-one`);
	expect("with the last step marked", one.selected, "one");

	await back();
	expect("a branch further back", (await look()).selected, "ha-one");

	// The press that took the offer is a step like any other, and comes back
	// marked exactly as the offer was.
	await back();
	expect("back to what was offered", (await look()).selected, "lp");

	// And there the presses run out: what is left was typed, and is marked
	// whole, ready to be typed over.
	await back();
	const all = await look();
	expect("then the whole name is marked", all.selected, `${PREFIX}alpha-one`);
	expect("and still nothing has been deleted", all.value, `${PREFIX}alpha-one`);
});

test("a press forward from a mark puts back exactly what it gave back", async () => {
	await armAtRoot();
	await type(`${PREFIX}a`);
	for (let i = 0; i < 3; i++) await tab();
	expect("walked to a whole name", (await look()).value, `${PREFIX}alpha-one`);

	await back();
	expect("one step marked", (await look()).selected, "one");
	await tab();
	const again = await look();
	// The mark means "this was given back", so the press resumes the walk
	// from where the retreat stopped — and the same rule on the same folder
	// makes the same step, rather than moving on to the name beside it.
	expect("the same step is made again", again.value, `${PREFIX}alpha-one`);
	expect("and nothing is left marked", again.selected, "");

	// And the way back from there re-marks it, rather than spending a press
	// on a field that does not change.
	await back();
	expect("marked once more", (await look()).selected, "one");
});

test("Shift+Tab keeps going up the path once the walk is undone", async () => {
	await armAtRoot();
	await type(`${PREFIX}on`);
	await tab();
	expect("inside the folder", (await look()).chips, (v) => Array.isArray(v) && v.includes(`${PREFIX}only`));
	// Typing empties the trail, so there is no press of Tab left to mirror:
	// from here Shift+Tab is a direction, not an undo, and carries on up.
	await type("scratch");
	await back();
	const marked = await look();
	expect("what was typed is marked, not deleted", marked.value, "scratch");
	expect("all of it", marked.selected, "scratch");
	await back();
	const out = await look();
	expect("then the folder is left", out.chips, (v) => Array.isArray(v) && !v.includes(`${PREFIX}only`));
	// The chip becomes text again *in front of* what the field was holding,
	// so leaving a folder costs nothing either: this is the same text a
	// click on that folder would have produced.
	expect("its name back in front of the rest", out.value, `${PREFIX}only/scratch`);
	expect("marked, because this press gave it back", out.selected, `${PREFIX}only`);
});

test("Shift+Tab narrows the selection a rung at a time", async () => {
	await armed();
	await tab();
	await tab();
	// The click was the first rung, so two presses reach the third.
	expect("two presses up", (await look()).selected, NOTE);
	await back();
	expect("and one back down", (await look()).selected, "Cake catapult.md");
	await back();
	expect("and down to the first rung", (await look()).selected, "Cake catapult");
	// Below it the ladder is over and the same press leaves the folder.
	// Marking the whole name here instead would have shown the rung above —
	// the name with its extension — a second time, so the way back spent a
	// press on nothing new: full path, name, name without its extension,
	// name again, and only then the folder.
	await back();
	const whole = await look();
	expect("below the first rung the folder is left", whole.value, "2026/Cake catapult.md");
	expect("its name marked, because this press gave it back", whole.selected, "2026");
});

test("a folder swapped for a sibling keeps the path only as far as it exists there", async () => {
	// Two complaints in one. Completing a folder carries the rest of the
	// path into it — but a rest that names nothing over there is not a path,
	// and leaving it standing put the field at odds with the dropdown beside
	// it. Worse, the next press then had nothing to complete and described
	// the *note's own* path instead, dragging the row back to the note's
	// parent: a press that looked like completion and was really a teleport.
	const deep = `${PREFIX}deep`;
	const leaf = `${deep}/inner/deeper/leaf.md`;
	const openOnFolder = `
		document.querySelector(".lure-path-input")?.blur();
		document.body.click();
		${PAUSE(300)}
		await app.workspace.getLeaf(false).openFile(app.vault.getAbstractFileByPath(${JSON.stringify(leaf)}));
		${PAUSE(800)}
		const c = app.workspace.getMostRecentLeaf().view.containerEl
			.querySelector(".view-header-title-container");
		const seg = [...c.querySelectorAll(".view-header-breadcrumb")]
			.find((e) => e.textContent === ${JSON.stringify(deep)});
		if (!seg) return false;
		seg.click();
		${PAUSE(500)}
		return true;
	`;

	// A sibling with nothing under it at all: none of the carried path
	// survives the move.
	expect("the folder click opens the path", await page.evaluate(openOnFolder), true);
	await page.evaluate(focusField);
	await type(`${PREFIX}on`);
	await tab();
	const bare = await look();
	expect("the sibling is stepped into", bare.chips, (v) =>
		Array.isArray(v) && v.includes(`${PREFIX}only`) && !v.some((c) => c.startsWith(deep)));
	expect("and nothing of the old path comes with it", bare.value, "");

	// A sibling carrying the first step of it and not the second.
	expect("the folder click opens the path again", await page.evaluate(openOnFolder), true);
	await page.evaluate(focusField);
	await type(`${PREFIX}ha`);
	await tab();
	const half = await look();
	expect("this sibling is stepped into too", half.chips, (v) =>
		Array.isArray(v) && v.includes(`${PREFIX}half`) && !v.some((c) => c.startsWith(deep)));
	expect("keeping the step that is there", half.value, "inner");
	expect("marked, because it is still a folder to walk", half.selected, "inner");

	// And it really is still a folder to walk: the press after steps into
	// it rather than starting to widen a selection over its name.
	await tab();
	const walked = await look();
	expect("the press after walks into it", walked.chips, (v) =>
		Array.isArray(v) && v.includes(`${PREFIX}half`) && v.includes("inner"));
	expect("with nothing left of the old path", walked.value, "");
});

test("a name nothing matches is marked, not answered with somewhere else", async () => {
	// The same teleport, reached without completing anything: one press on a
	// name no child starts with used to empty the field, show the note's own
	// name and stand the row in the note's folder.
	await armAtRoot();
	await type(`${PREFIX}zzz-nothing`);
	const typed = await look();
	expect("nothing in the root matches it", typed.value, `${PREFIX}zzz-nothing`);

	await tab();
	const pressed = await look();
	expect("the text stays in front of you", pressed.value, `${PREFIX}zzz-nothing`);
	expect("marked, ready to be typed over", pressed.selected, `${PREFIX}zzz-nothing`);
	expect("and the row has not moved", pressed.chips, (v) => Array.isArray(v) && v.length === 0);
});

test("a folder picked from the list leaves the row where Tab leaves it", async () => {
	// Setting a name in is setting it in, however you did it: the press after
	// the gesture has to mean the same thing after a click as after a key.
	// Picking a folder used to empty the field instead, throwing away a path
	// that the very same folder reached with Tab would have kept.
	const deep = `${PREFIX}deep`;
	const leaf = `${deep}/inner/deeper/leaf.md`;
	const openOnFolder = `
		document.querySelector(".lure-path-input")?.blur();
		document.body.click();
		${PAUSE(300)}
		await app.workspace.getLeaf(false).openFile(app.vault.getAbstractFileByPath(${JSON.stringify(leaf)}));
		${PAUSE(800)}
		const c = app.workspace.getMostRecentLeaf().view.containerEl
			.querySelector(".view-header-title-container");
		const seg = [...c.querySelectorAll(".view-header-breadcrumb")]
			.find((e) => e.textContent === ${JSON.stringify(deep)});
		if (!seg) return false;
		seg.click();
		${PAUSE(500)}
		return true;
	`;

	// The keyed way in.
	expect("the folder click opens the path", await page.evaluate(openOnFolder), true);
	await page.evaluate(focusField);
	await tab();
	const walked = await look();
	expect("Tab steps in", walked.chips, (v) => Array.isArray(v) && v.includes(deep));
	expect("carrying the rest of the path", walked.value, "inner/deeper/leaf.md");

	// The pointed way in: the same folder, picked out of the list the same
	// click opened.
	expect("the folder click opens the path again", await page.evaluate(openOnFolder), true);
	const picked = await page.evaluate(`
		const row = [...document.querySelectorAll(".suggestion-item")]
			.find((e) => e.textContent === ${JSON.stringify(deep)});
		if (!row) return "not listed";
		row.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
		row.click();
		${PAUSE(600)}
		return true;
	`);
	expect("the folder is listed to pick", picked, true);
	const clicked = await look();
	expect("picking steps into the same folder", clicked.chips, walked.chips);
	expect("carrying the same path", clicked.value, walked.value);
	expect("marked the same way", clicked.selected, walked.selected);
});

test("a folder set in by clicking is given back by one press, not swallowed", async () => {
	// The walk used to be recorded by Tab alone, so a folder set in by
	// picking it out of the list left no trace on the way back: one press of
	// Shift+Tab jumped over the click *and* the press before it, two folders
	// gone at once, and every press after that did nothing at all.
	const deep = `${PREFIX}deep`;
	const leaf = `${deep}/inner/deeper/leaf.md`;
	await page.evaluate(`
		document.querySelector(".lure-path-input")?.blur();
		document.body.click();
		${PAUSE(300)}
		await app.workspace.getLeaf(false).openFile(app.vault.getAbstractFileByPath(${JSON.stringify(leaf)}));
		${PAUSE(800)}
		const c = app.workspace.getMostRecentLeaf().view.containerEl
			.querySelector(".view-header-title-container");
		const seg = [...c.querySelectorAll(".view-header-breadcrumb")]
			.find((e) => e.textContent === ${JSON.stringify(deep)});
		if (!seg) return false;
		seg.click();
		${PAUSE(500)}
		return true;
	`);
	await page.evaluate(focusField);

	await tab();
	const walked = await look();
	expect("Tab sets the first folder in", walked.chips, (v) => Array.isArray(v) && v.includes(deep));

	// The second folder is set in by pointing at it instead.
	await page.evaluate(`
		const row = [...document.querySelectorAll(".suggestion-item")]
			.find((e) => e.textContent === "inner");
		if (!row) return "not listed";
		row.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
		row.click();
		${PAUSE(600)}
		return true;
	`);
	await page.evaluate(focusField);
	const picked = await look();
	expect("picking sets the second in", picked.chips, (v) =>
		Array.isArray(v) && v.includes(deep) && v.includes("inner"));

	// One press, one folder — the click is a step of the walk like any other.
	await back();
	const once = await look();
	expect("the click is given back on its own", once.chips, walked.chips);
	expect("with the path it was standing on", once.value, walked.value);
	expect("marked as the press before left it", once.selected, walked.selected);

	// And the press after that gives back the keyed step.
	await back();
	expect("then the press before it", (await look()).chips, (v) => Array.isArray(v) && v.length === 0);
});

test("a lap of the rungs comes back to the path the walk built, not the one it set out from", async () => {
	// The lap used to close on a snapshot of the field taken before the
	// walk's first press, so anything the walk had changed about *which*
	// path you were on was undone by going round: fork onto a sibling
	// halfway and the lap handed back the open note's own path. The four
	// rungs before the wrap all describe the path as it stands; this one
	// described the past.
	const deep = `${PREFIX}deep`;
	const leaf = `${deep}/inner/deeper/leaf.md`;
	const built = `${deep}/other/deeper/leaf.md`;
	await page.evaluate(`
		document.querySelector(".lure-path-input")?.blur();
		document.body.click();
		${PAUSE(300)}
		await app.workspace.getLeaf(false).openFile(app.vault.getAbstractFileByPath(${JSON.stringify(leaf)}));
		${PAUSE(800)}
		const c = app.workspace.getMostRecentLeaf().view.containerEl
			.querySelector(".view-header-title-container");
		const seg = [...c.querySelectorAll(".view-header-breadcrumb")]
			.find((e) => e.textContent === ${JSON.stringify(deep)});
		if (!seg) return false;
		seg.click();
		${PAUSE(500)}
		return true;
	`);
	await page.evaluate(focusField);
	await tab();

	// Fork the walk onto the sibling by pointing at it, which is the gesture
	// that leaves the snapshot stale: typing clears the trail, picking does
	// not.
	await page.evaluate(`
		const row = [...document.querySelectorAll(".suggestion-item")]
			.find((e) => e.textContent === "other");
		if (!row) return "not listed";
		row.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
		row.click();
		${PAUSE(600)}
		return true;
	`);
	await page.evaluate(focusField);
	expect("the walk is forked onto the sibling", (await look()).chips, (v) =>
		Array.isArray(v) && v.includes("other"));

	// Round the rungs until the lap closes. Not merely "no chips": the rung
	// showing the path from the vault root stands at the root too, and holds
	// the same text. What tells them apart is the marking — a rung selects
	// the whole of what it shows, while the lap comes back to the *front* of
	// the path, one segment marked, as the click that opened it left it.
	let wrapped = null;
	for (let i = 0; i < 8 && !wrapped; i++) {
		await tab();
		const at = await look();
		if (Array.isArray(at.chips) && at.chips.length === 0 && at.selected === deep) wrapped = at;
	}
	expect("the lap closes", wrapped, (v) => v !== null);
	expect("on the path the walk built", wrapped && wrapped.value, built);
	expect("with its front marked, ready to be walked again", wrapped && wrapped.selected, deep);
	expect("and no trace of the path it set out from", wrapped && wrapped.value, (v) => !String(v).includes("/inner/"));
});

test("walking back past the front of the path loops round to the system path", async () => {
	// The two directions are one ring: forward, the last rung wraps to the
	// front of the path; backward, the front wraps to the last rung. It used
	// to dead-end there instead, every further press doing nothing at all.
	const deep = `${PREFIX}deep`;
	const leaf = `${deep}/inner/deeper/leaf.md`;
	await page.evaluate(`
		document.querySelector(".lure-path-input")?.blur();
		document.body.click();
		${PAUSE(300)}
		await app.workspace.getLeaf(false).openFile(app.vault.getAbstractFileByPath(${JSON.stringify(leaf)}));
		${PAUSE(800)}
		const c = app.workspace.getMostRecentLeaf().view.containerEl
			.querySelector(".view-header-title-container");
		const seg = [...c.querySelectorAll(".view-header-breadcrumb")]
			.find((e) => e.textContent === ${JSON.stringify(deep)});
		if (!seg) return false;
		seg.click();
		${PAUSE(500)}
		return true;
	`);
	await page.evaluate(focusField);
	// Nothing has been walked, so there is nothing to give back and nowhere
	// further up: this press is the one that used to do nothing.
	await back();
	const looped = await look();
	expect("the press loops round to the path from the system root", looped.value, (v) =>
		typeof v === "string" && v.startsWith("/") && v.endsWith(`/${leaf}`));
	expect("selected whole, as that rung shows it", looped.selected, looped.value);

	// And from there it goes on narrowing down the rungs, rather than
	// starting a second lap.
	await back();
	expect("the press after narrows to the path from the vault", (await look()).value, leaf);
});

test("the way back spends no press on a rung it has already shown", async () => {
	// The complaint: walking back went full path, name with extension, name
	// without it, *name with extension again*, and only then the folder. The
	// duplicate came from the press that leaves the ladder falling through to
	// "mark the whole segment before leaving" — which is the rung it had just
	// come down from.
	await armed();
	await tab();
	await tab();

	const seen = [];
	for (let i = 0; i < 5; i++) {
		await back();
		const at = await look();
		seen.push(`${JSON.stringify(at.value)} [${at.selected}]`);
		if (Array.isArray(at.chips) && !at.chips.includes("2026")) break;
	}

	// Each press shows something the one before it did not.
	const repeats = seen.filter((state, i) => i > 0 && state === seen[i - 1]);
	expect("no two presses in a row show the same thing", repeats, []);
	expect("and the walk back reaches the folder", seen[seen.length - 1], (v) =>
		String(v).startsWith('"2026/Cake catapult.md"'));
	// Specifically: the name never appears twice on the way down.
	const withExtension = seen.filter((state) => state === '"Cake catapult.md" [Cake catapult.md]');
	expect("the name with its extension is shown once", withExtension.length, 1);
});

test("a name that is already whole is widened over, not shortened", async () => {
	// A press that has nothing left to complete used to start the ladder on
	// its first rung — the name without its extension — which, from a name
	// the same key had just completed, is a press spent going backwards.
	await armAtRoot();
	await type(`${PREFIX}de`);
	await tab();
	expect("the first press steps into the folder", (await look()).chips, (v) =>
		Array.isArray(v) && v.includes(`${PREFIX}deep`));

	await type("uniq");
	const offered = await look();
	expect("the rest of the only name is offered", offered.value, "unique.md");
	expect("marked, as the part nobody typed", offered.selected, "ue.md");

	await tab();
	const taken = await look();
	expect("the press takes the offer", taken.value, "unique.md");
	// A file cannot be stepped into, so the same press arrives at the
	// ladder — on the whole name, not on its stem, which is the shortening
	// this test is here to rule out.
	expect("and marks the whole of it, never its stem", taken.selected, "unique.md");

	// And only then does it widen past the name.
	await tab();
	expect("then the path from the vault", (await look()).selected, `${PREFIX}deep/unique.md`);
});

/** One character, as a person types it — so the swallowing can be watched. */
async function press(ch) {
	await pressKey(page, ch);
	await page.evaluate(PAUSE(260) + "return true;");
	await page.evaluate(focusField);
}

test("what the names agree on is offered after the caret as you type", async () => {
	await armAtRoot();
	// Three folders agree as far as "Lure-tab-alp", so the moment the typing
	// is unambiguous that far, the rest of the agreement is put in front of
	// you rather than waiting to be asked for.
	await type(`${PREFIX}a`);
	const offered = await look();
	expect("the agreement is shown", offered.value, `${PREFIX}alp`);
	expect("with the offered part marked", offered.selected, "lp");
	// The critical one: the list must go on filtering by what was *typed*.
	// Filtering by the offer would narrow the list to the offer, and the
	// offer would then be confirming itself.
	expect("and the list still filters by what was typed", offered.rows, (v) =>
		Array.isArray(v) && v.filter((r) => r.startsWith(`${PREFIX}alp`)).length === 3);

	// Typing the offered letters swallows them one at a time.
	await press("l");
	const swallowed = await look();
	expect("typing the offered letter keeps the word", swallowed.value, `${PREFIX}alp`);
	expect("with one letter less offered", swallowed.selected, "p");

	await press("p");
	const whole = await look();
	expect("and then nothing is left to offer", whole.value, `${PREFIX}alp`);
	expect("nothing marked", whole.selected, "");
});

test("an offer disappears the moment the typing leaves it", async () => {
	await armAtRoot();
	await type(`${PREFIX}a`);
	expect("something is offered", (await look()).selected, "lp");

	// "Lure-tab-az" matches nothing at all.
	await press("z");
	const gone = await look();
	expect("the offer is gone", gone.selected, "");
	expect("leaving exactly what was typed", gone.value, `${PREFIX}az`);
	expect("and nothing to list", gone.rows, []);
});

test("Backspace takes the offer back without taking a letter with it", async () => {
	await armAtRoot();
	await type(`${PREFIX}a`);
	expect("something is offered", (await look()).selected, "lp");

	await press("Backspace");
	const dropped = await look();
	expect("the offer is taken back", dropped.selected, "");
	expect("and every letter typed is still there", dropped.value, `${PREFIX}a`);
	// Nothing is offered again until something is typed, or there would be
	// no way out of an offer you did not want.
	expect("with nothing offered in its place", dropped.value, (v) => v === `${PREFIX}a`);

	// The press after it deletes a letter of your own, as it always did.
	await press("Backspace");
	expect("the press after deletes a letter", (await look()).value, PREFIX);
});

test("taking an offer stops at the fork, and never chooses past it", async () => {
	// The complaint: the press took the offer and then walked straight on
	// into whichever name sorted first, so a fork between three folders was
	// answered by the key rather than by the user.
	await armAtRoot();
	await type(`${PREFIX}a`);
	const offered = await look();
	expect("the offer reaches the fork", offered.value, `${PREFIX}alp`);
	expect("and stops there", offered.selected, "lp");
	expect("with every name past it still listed", offered.rows, (v) =>
		Array.isArray(v) && v.filter((r) => r.startsWith(`${PREFIX}alp`)).length === 3);

	await tab();
	const taken = await look();
	expect("the press takes it", taken.value, `${PREFIX}alp`);
	expect("leaving nothing marked", taken.selected, "");
	expect("no name chosen for you", taken.chips, (v) => Array.isArray(v) && v.length === 0);
	expect("and all of them still on offer", taken.rows, (v) =>
		Array.isArray(v) && v.filter((r) => r.startsWith(`${PREFIX}alp`)).length === 3);

	// Typing past the fork is one way on; the press after is the other, and
	// that one is a deliberate second ask.
	await tab();
	expect("a further press walks toward one of them", (await look()).value, `${PREFIX}alpha-`);
});

const teardown = `
	document.querySelector(".lure-path-input")?.blur();
	document.body.click();
	app.workspace.getLeavesOfType("empty").forEach((l) => l.detach());
	// The completion fixtures are named to be unmistakable, and are taken out
	// again: left behind, they would sit in the vault root of whatever vault
	// this was pointed at.
	for (const name of [...${JSON.stringify(FOLDERS)}, ...${JSON.stringify(FILES)}]) {
		const entry = app.vault.getAbstractFileByPath(name);
		if (entry) await app.fileManager.trashFile(entry);
	}
	const abacus = app.vault.getAbstractFileByPath("Schemes/2026/Abacus.md");
	if (abacus) await app.fileManager.trashFile(abacus);
	return true;
`;

await run();

