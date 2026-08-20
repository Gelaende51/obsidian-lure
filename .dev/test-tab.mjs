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

import { connect, PAUSE, pressKey, reloadPlugin } from "./cdpSession.mjs";

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
];
/** Files made beside the folders, and taken out again with them. */
const FILES = [`${PREFIX}noted.md`];
const results = [];
const tests = [];
const test = (name, fn) => tests.push({ name, fn });
const expect = (label, actual, wanted) => {
	const ok = typeof wanted === "function" ? wanted(actual) : JSON.stringify(actual) === JSON.stringify(wanted);
	results.push({ ok, label, actual: ok ? "" : JSON.stringify(actual) });
};

const page = await connect();
await reloadPlugin(page);

/**
 * The note and folders this suite walks, made rather than assumed.
 *
 * They used to be taken for granted, which tied the suite to one particular
 * vault: run against any other and every case failed on a null element,
 * reporting the plugin broken when it was the fixture that was missing.
 */
await page.evaluate(`
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
`);

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
	// Three folders start this way and agree as far as "alp".
	await type(`${PREFIX}a`);
	await tab();
	const s = await look();
	expect("completed to the shared opening", s.value, `${PREFIX}alp`);
	expect("and stepped into nothing", s.chips, (v) => Array.isArray(v) && !v.some((c) => c.startsWith(PREFIX)));
	// The caret sits after the completion, ready to be typed on: this is text
	// you asked for, not a suggestion to type over.
	expect("nothing left selected", s.selected, "");
});

test("a further press walks toward one name, a step at a time", async () => {
	await armAtRoot();
	await type(`${PREFIX}a`);
	await tab();
	expect("at the shared opening", (await look()).value, `${PREFIX}alp`);

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
	await pressKey(page, "ArrowDown");
	await page.evaluate(PAUSE(400) + "return true;");
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
	// instead is what puts this one in the field.
	expect("walked toward where you already are", (await look()).value, "Cake catapult.md");
});

test("ladder: Tab past the end widens the selection a rung at a time", async () => {
	await armed();
	await tab();
	const stem = await look();
	expect("first rung is the name without its extension", stem.selected, "Cake catapult");

	await tab();
	expect("second adds the extension", (await look()).selected, "Cake catapult.md");

	await tab();
	expect("third is the path from the vault", (await look()).selected, NOTE);

	await tab();
	const system = await look();
	expect("fourth is the path from the system root", system.selected, (v) =>
		typeof v === "string" && v.endsWith(`/${NOTE}`) && v.startsWith("/"));

	await tab();
	const wrapped = await look();
	expect("then it wraps back to the first folder", wrapped.chips, (v) =>
		Array.isArray(v) && v.includes("Schemes"));
	expect("ready to type there", wrapped.value, "");
});

test("a fourth click reaches the system path too", async () => {
	await armed();
	await page.evaluate(`
		const input = document.querySelector(".lure-path-input");
		const r = input.getBoundingClientRect();
		for (let n = 1; n <= 4; n++) {
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
	expect("ladder started", (await look()).selected, "Cake catapult");
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
	await tab();
	expect("the folder's name completes", (await look()).value, `${PREFIX}noted`);

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
	await back();
	expect("back to the shared opening", (await look()).selected, "lpha-one");
	await back();
	const all = await look();
	expect("then what was typed is marked too", all.selected, `${PREFIX}alpha-one`);
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
	expect("with its name back for editing", out.value, `${PREFIX}only`);
});

test("Shift+Tab narrows the selection a rung at a time", async () => {
	await armed();
	await tab();
	await tab();
	expect("two rungs up", (await look()).selected, "Cake catapult.md");
	await back();
	expect("and one back down", (await look()).selected, "Cake catapult");
	// Below the first rung the ladder is over and the press carries on
	// walking back, which here means marking the whole name: the press after
	// it is the one that leaves the folder.
	await back();
	const whole = await look();
	expect("below the first rung the name is marked", whole.selected, "Cake catapult.md");
	expect("and it is all still there", whole.value, "Cake catapult.md");
});

const filter = process.argv[2];
for (const { name, fn } of tests) {
	if (filter && !name.toLowerCase().includes(filter.toLowerCase())) continue;
	console.log(`\n${name}`);
	const start = results.length;
	try {
		await fn();
	} catch (err) {
		results.push({ ok: false, label: `${name} — threw`, actual: err.message });
	}
	for (let i = start; i < results.length; i++) {
		const r = results[i];
		console.log(`  ${r.ok ? "PASS" : "FAIL"}  ${r.label}${r.ok ? "" : `  → got ${r.actual}`}`);
	}
}

await page.evaluate(`
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
`);
page.close();

const failed = results.filter((r) => !r.ok).length;
console.log(`\n${results.length - failed}/${results.length} assertions passed`);
process.exit(failed ? 1 : 0);
