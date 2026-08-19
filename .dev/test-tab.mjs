#!/usr/bin/env node
/**
 * Behavioural tests for Tab in the path bar: completing folders while there
 * are folders left, then widening the selection once there are not.
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
	await mk("Schemes");
	await mk("Schemes/2026");
	// A second folder sharing the first letters, so completing "S" is not
	// unambiguous by accident.
	await mk("Schemes/2025");
	if (!app.vault.getAbstractFileByPath(${JSON.stringify(NOTE)})) {
		await app.vault.create(${JSON.stringify(NOTE)}, "# fixture");
	}
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

async function tab() {
	await pressKey(page, "Tab");
	await page.evaluate(PAUSE(500) + "return true;");
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

test("Tab completes a folder and steps into it", async () => {
	await armAtRoot();
	await page.send("Input.insertText", { text: "Sch" });
	await page.evaluate(PAUSE(300) + "return true;");
	await page.evaluate(focusField);
	await tab();
	const s = await look();
	expect("stepped into the completed folder", s.chips, (v) => Array.isArray(v) && v.includes("Schemes"));
	expect("and no deeper than it", s.chips, (v) => Array.isArray(v) && !v.includes("2026"));
	expect("field cleared for the next segment", s.value, "");
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
	await page.send("Input.insertText", { text: "Sch" });
	await page.evaluate(PAUSE(300) + "return true;");
	await page.evaluate(focusField);
	await tab();
	// A fresh session must complete a folder, not resume widening. The empty
	// field is the tell: the ladder always leaves text in it.
	const s = await look();
	expect("Tab completes rather than widening", s.value, "");
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
	return true;
`);
page.close();

const failed = results.filter((r) => !r.ok).length;
console.log(`\n${results.length - failed}/${results.length} assertions passed`);
process.exit(failed ? 1 : 0);
