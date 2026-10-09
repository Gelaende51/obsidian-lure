#!/usr/bin/env node
/**
 * Keys pressed in the path bar stay in the path bar.
 *
 * The other suites re-focus the field after every press (`focusField` in
 * test-tab.mjs), which is right for asking what a press *did* to the field —
 * and blind to a press that took the focus somewhere else. Two reports came
 * in that look exactly like that: Tab "caught by the editor", and typing
 * landing in the note while the field still showed. With an outliner on,
 * a Tab that reaches the note indents the list item the cursor is on, so
 * the note's text is the second witness.
 *
 * Every check here reads the focus and the note *before* anything puts the
 * focus back.
 *
 *   node .dev/test-keyleak.mjs           # all
 *   node .dev/test-keyleak.mjs F2        # only tests whose name matches
 *
 * Requires --remote-debugging-port=9222 and the test vault open.
 */

import { CLEAR_NOTICES, connect, PAUSE, pressKey, quiesce, reloadPlugin, parkPointer } from "./cdpSession.mjs";
import { createSuite } from "./harness.mjs";

const NOTE = "Lure-keyleak/List note.md";
const BODY = "- one\n- two\n- three\n\n| a | b |\n| --- | --- |\n| 1 | 2 |\n";
/** The neighbours that answer Tab in the note: list indentation, table cells. */
const PEERS = ["obsidian-outliner", "table-editor-obsidian"];

const page = await connect();

const buildFixture = `
	if (!app.vault.getAbstractFileByPath("Lure-keyleak")) await app.vault.createFolder("Lure-keyleak");
	if (!app.vault.getAbstractFileByPath("Lure-keyleak/Sibling.md")) await app.vault.create("Lure-keyleak/Sibling.md", "");
	const f = app.vault.getAbstractFileByPath(${JSON.stringify(NOTE)});
	if (f) await app.vault.modify(f, ${JSON.stringify(BODY)});
	else await app.vault.create(${JSON.stringify(NOTE)}, ${JSON.stringify(BODY)});
	for (const id of ${JSON.stringify(PEERS)}) {
		if (app.plugins.manifests[id] && !app.plugins.plugins[id]) await app.plugins.enablePlugin(id);
	}
	${PAUSE(600)}
	return JSON.stringify(${JSON.stringify(PEERS)}.filter((id) => app.plugins.plugins[id]));
`;

let peersOn = [];

const { test, expect, run } = createSuite({
	reset: async () => {
		await reloadPlugin(page);
		await quiesce(page);
		await page.evaluate(`${CLEAR_NOTICES} return true;`);
		await parkPointer(page);
		peersOn = JSON.parse(await page.evaluate(buildFixture));
	},
	teardown: async () => {
		await page.evaluate(`
			document.querySelector(".lure-path-input")?.blur();
			for (const id of ${JSON.stringify(PEERS)}) if (app.plugins.plugins[id]) await app.plugins.disablePlugin(id);
			const dir = app.vault.getAbstractFileByPath("Lure-keyleak");
			if (dir) await app.fileManager.trashFile(dir);
			return true;
		`);
		page.close();
	},
});

/** Opens the note with the editor's cursor on a list item, where Tab would indent it. */
const openNote = `
	document.querySelector(".lure-path-input")?.blur();
	document.body.click();
	${PAUSE(200)}
	app.workspace.getLeavesOfType("markdown").slice(1).forEach((l) => l.detach());
	const leaf = app.workspace.getLeaf(false);
	await leaf.openFile(app.vault.getAbstractFileByPath(${JSON.stringify(NOTE)}), { state: { mode: "source" } });
	${PAUSE(700)}
	const editor = leaf.view.editor;
	editor.focus();
	editor.setCursor({ line: 1, ch: 3 });
	${PAUSE(200)}
	return true;
`;

/** Where the focus is and what the note says, read before anything restores either. */
const probe = `
	const el = document.activeElement;
	const leaf = app.workspace.getLeaf(false);
	return JSON.stringify({
		inField: !!el && el.classList.contains("lure-path-input"),
		focus: el ? (el.className || el.tagName) : null,
		inEditor: !!el?.closest?.(".cm-editor"),
		note: leaf.view?.editor?.getValue() ?? null,
		field: document.querySelector(".lure-path-input")?.value ?? null,
	});
`;

async function check(label) {
	await page.evaluate(PAUSE(120) + "return true;");
	const soon = JSON.parse(await page.evaluate(probe));
	await page.evaluate(PAUSE(600) + "return true;");
	const later = JSON.parse(await page.evaluate(probe));
	expect(`${label}: focus stays in the field`, soon.inField && later.inField, true);
	if (!(soon.inField && later.inField)) console.log(`    focus went to ${later.focus} (editor: ${later.inEditor})`);
	expect(`${label}: the note is untouched`, later.note, BODY);
	return later;
}

async function press(spec, label) {
	await pressKey(page, spec);
	return await check(label ?? spec);
}

test("the outliner and the table editor are running", async () => {
	expect("both peers loaded", peersOn, PEERS);
});

test("Tab round the whole ladder from a click on the name", async () => {
	await page.evaluate(openNote);
	await page.evaluate(`
		app.workspace.getLeaf(false).view.containerEl.querySelector(".lure-filename-text").click();
		${PAUSE(400)}
		return true;
	`);
	await check("opened");
	for (let i = 1; i <= 7; i++) await press("Tab", `Tab ${i}`);
	for (let i = 1; i <= 3; i++) await press("shift+Tab", `Shift+Tab ${i}`);
});

test("Tab while completing a typed name, with the dropdown up", async () => {
	await page.evaluate(openNote);
	await page.evaluate(`
		app.workspace.getLeaf(false).view.containerEl.querySelector(".lure-filename-text").click();
		${PAUSE(400)}
		return true;
	`);
	await check("opened");
	await pressKey(page, "Backspace");
	await page.send("Input.insertText", { text: "Si" });
	await check("typed");
	await press("Tab", "Tab completes");
	await press("ArrowDown", "arrow in the list");
	await press("Tab", "Tab on an arrowed row");
	// What the reports describe: the next letters must land in the field.
	await page.send("Input.insertText", { text: "q" });
	const after = await check("typing after Tab");
	expect("the letter is in the field", after.field?.includes("q"), true);
});

test("F2 and then Tab", async () => {
	await page.evaluate(openNote);
	await pressKey(page, "F2");
	await page.evaluate(PAUSE(400) + "return true;");
	// F2 alternates with the inline title; the second press is the path bar.
	const first = JSON.parse(await page.evaluate(probe));
	if (!first.inField) {
		await pressKey(page, "F2");
		await page.evaluate(PAUSE(400) + "return true;");
	}
	await check("F2");
	for (let i = 1; i <= 6; i++) await press("Tab", `Tab ${i} after F2`);
});

test("the focus command and then Tab", async () => {
	await page.evaluate(openNote);
	await page.evaluate(`app.commands.executeCommandById("lure:focus-path-bar"); ${PAUSE(400)} return true;`);
	await check("focus command");
	for (let i = 1; i <= 6; i++) await press("Tab", `Tab ${i} after the command`);
});

test("Tab at the vault root, stepping into folders", async () => {
	await page.evaluate(openNote);
	await page.evaluate(`
		for (let i = 0; i < 3; i++) { app.commands.executeCommandById("lure:focus-path-bar"); ${PAUSE(300)} }
		document.querySelector(".lure-path-input")?.focus();
		return true;
	`);
	await pressKey(page, "Backspace");
	await page.send("Input.insertText", { text: "Lure-k" });
	await check("typed at the root");
	for (let i = 1; i <= 4; i++) await press("Tab", `Tab ${i} at the root`);
	for (let i = 1; i <= 4; i++) await press("shift+Tab", `Shift+Tab ${i} at the root`);
});

/** A real press of the left button at the middle of the first element matching `selector`. */
async function clickOn(selector, index = 0) {
	const raw = await page.evaluate(`
		const el = document.querySelectorAll(${JSON.stringify(selector)})[${index}];
		if (!el) return null;
		const r = el.getBoundingClientRect();
		return JSON.stringify({ x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2) });
	`);
	if (!raw) return false;
	const { x, y } = JSON.parse(raw);
	await page.send("Input.dispatchMouseEvent", { type: "mouseMoved", x, y, buttons: 0 });
	for (const type of ["mousePressed", "mouseReleased"]) {
		await page.send("Input.dispatchMouseEvent", { type, x, y, button: "left", buttons: type === "mousePressed" ? 1 : 0, clickCount: 1 });
	}
	await page.evaluate(PAUSE(400) + "return true;");
	return true;
}

/** The field opened by a real click on a folder of the path, as a hand opens it. */
async function openOnFolder() {
	await page.evaluate(openNote);
	expect("a folder of the path to click", await clickOn(".view-header-breadcrumb:not(.lure-vault-segment)"), true);
	await check("opened by a click on the folder");
}

test("Tab and typing after picking a row with the mouse", async () => {
	await openOnFolder();
	expect("a row to pick", await clickOn(".suggestion-item"), true);
	const field = JSON.parse(await page.evaluate(probe));
	if (field.field === null) return; // the pick ended the field (opened a note): nothing left to leak from
	await check("after the pick");
	await press("Tab", "Tab after the pick");
	await page.send("Input.insertText", { text: "q" });
	await check("typing after the pick");
});

test("Tab and typing after a click on a folder chip", async () => {
	// A click on the note's folder opens the field on it, marked; a tap of
	// Alt steps into it, which leaves it on the row as a chip.
	await openOnFolder();
	await pressKey(page, "Alt");
	await page.evaluate(PAUSE(400) + "return true;");
	expect("a chip to click", await clickOn(".lure-browse-chip"), true);
	await check("after the chip");
	await press("Tab", "Tab after the chip");
	await page.send("Input.insertText", { text: "q" });
	await check("typing after the chip");
});

test("Tab and typing after the wheel opened the list", async () => {
	await page.evaluate(openNote);
	const raw = await page.evaluate(`
		const el = app.workspace.getLeaf(false).view.containerEl.querySelector(".lure-filename-text");
		const r = el.getBoundingClientRect();
		return JSON.stringify({ x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2) });
	`);
	const { x, y } = JSON.parse(raw);
	await page.send("Input.dispatchMouseEvent", { type: "mouseMoved", x, y, buttons: 0 });
	for (let i = 0; i < 3; i++) {
		await page.send("Input.dispatchMouseEvent", { type: "mouseWheel", x, y, deltaX: 0, deltaY: 120 });
		await page.evaluate(PAUSE(250) + "return true;");
	}
	await check("after the wheel");
	await press("Tab", "Tab after the wheel");
	await page.send("Input.insertText", { text: "q" });
	await check("typing after the wheel");
});

test("the focus command run from the command palette", async () => {
	// The palette hands the focus back to where it was when it closes — the
	// note — and the command has run by then. Running the command directly,
	// as the other cases do, never passes through that.
	await page.evaluate(openNote);
	await page.evaluate(`app.commands.executeCommandById("command-palette:open"); ${PAUSE(500)} return true;`);
	await page.send("Input.insertText", { text: "Focus the path bar" });
	await page.evaluate(PAUSE(500) + "return true;");
	await pressKey(page, "Enter");
	await page.evaluate(PAUSE(600) + "return true;");
	await check("after the palette");
	await press("Tab", "Tab after the palette");
	await page.send("Input.insertText", { text: "q" });
	await check("typing after the palette");
});

test("the palette opened and dismissed while the field is open", async () => {
	await page.evaluate(openNote);
	await page.evaluate(`
		app.workspace.getLeaf(false).view.containerEl.querySelector(".lure-filename-text").click();
		${PAUSE(400)}
		return true;
	`);
	await check("opened");
	await page.evaluate(`app.commands.executeCommandById("command-palette:open"); ${PAUSE(500)} return true;`);
	await pressKey(page, "Escape");
	await page.evaluate(PAUSE(600) + "return true;");
	const field = JSON.parse(await page.evaluate(probe));
	if (field.field === null) return; // closing the palette ended the field: nothing to leak from
	await check("after the palette closed");
	await press("Tab", "Tab after the palette closed");
});

await run();
