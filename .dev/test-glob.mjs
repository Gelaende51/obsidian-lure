#!/usr/bin/env node
/**
 * Glob patterns in the path field: the other-paths button counts the
 * matches, green or red; Enter opens them (asking above ten) or, for braces
 * only, makes what they name; a real name with a pattern character stays
 * literal; rename mode never reads a pattern.
 *
 *   node .dev/test-glob.mjs            # all
 *   node .dev/test-glob.mjs braces     # only tests whose name matches
 *
 * Requires --remote-debugging-port=9222 and the test vault open.
 */

import { CLEAR_NOTICES, connect, PAUSE, pressKey, quiesce, reloadPlugin, parkPointer } from "./cdpSession.mjs";
import { createSuite } from "./harness.mjs";

const DIR = "Lure-glob";
const page = await connect();

const fixture = `
	const old = app.vault.getAbstractFileByPath(${JSON.stringify(DIR)});
	if (old) await app.vault.delete(old, true);
	${PAUSE(300)}
	await app.vault.createFolder(${JSON.stringify(DIR)});
	await app.vault.createFolder(${JSON.stringify(`${DIR}/Sub`)});
	for (const name of ["Cake one.md", "Cake two.md", "Pie.md", "Sub/Cake three.md", "Odd [x].md"]) {
		await app.vault.create(${JSON.stringify(DIR)} + "/" + name, "");
	}
	for (let i = 1; i <= 11; i++) await app.vault.create(${JSON.stringify(DIR)} + "/Sub/Many " + i + ".md", "");
	${PAUSE(500)}
	return true;
`;

const { test, expect, run } = createSuite({
	reset: async () => {
		await reloadPlugin(page);
		await quiesce(page);
		await page.evaluate(`${CLEAR_NOTICES} return true;`);
		await parkPointer(page);
		await page.evaluate(fixture);
	},
	teardown: async () => {
		await page.evaluate(`
			const dir = app.vault.getAbstractFileByPath(${JSON.stringify(DIR)});
			if (dir) await app.vault.delete(dir, true);
			return true;
		`);
		page.close();
	},
});

const settle = (ms = 400) => page.evaluate(PAUSE(ms) + "return true;");

/** The field open in the fixture folder, emptied. */
async function inFolder({ rename = false } = {}) {
	await page.evaluate(`
		document.querySelector(".lure-path-input")?.blur();
		document.body.click();
		app.workspace.getLeavesOfType("markdown").slice(1).forEach((l) => l.detach());
		await app.workspace.getLeaf(false).openFile(app.vault.getAbstractFileByPath(${JSON.stringify(`${DIR}/Pie.md`)}));
		${PAUSE(600)}
		return true;
	`);
	if (rename) {
		await pressKey(page, "F2");
		await settle();
		if (!(await page.evaluate(`return !!document.querySelector(".lure-path-input");`))) {
			await pressKey(page, "F2");
			await settle();
		}
	} else {
		await page.evaluate(`app.workspace.getLeaf(false).view.containerEl.querySelector(".lure-filename-text").click(); ${PAUSE(400)} return true;`);
	}
	await pressKey(page, "ctrl+a");
	await pressKey(page, "Backspace");
	await settle(250);
}

async function type(text) {
	await page.send("Input.insertText", { text });
	await settle(500);
}

const indicator = () => page.evaluate(`
	const el = app.workspace.getLeaf(false).view.containerEl.querySelector(".lure-other-paths");
	const input = document.querySelector(".lure-path-input");
	return JSON.stringify({
		shown: !!el,
		count: el?.querySelector(".lure-other-paths-count")?.textContent ?? null,
		tint: el?.dataset.lureTint ?? null,
		field: input ? (input.dataset.lureTint ?? (input.classList.contains("lure-will-create") ? "red" : null)) : null,
	});
`).then(JSON.parse);

const openPaths = () => page.evaluate(`return JSON.stringify(app.workspace.getLeavesOfType("markdown").map((l) => l.view.file?.path).filter(Boolean).sort());`).then(JSON.parse);

test("a pattern is counted on the button, green while it matches", async () => {
	await inFolder();
	await type("Cake*");
	const r = await indicator();
	expect("the button shows", r.shown, true);
	expect("two matches", r.count, "2");
	expect("green", r.tint, "match");
	expect("the field green too", r.field, "glob");
});

test("a pattern that matches nothing is red", async () => {
	await inFolder();
	await type("Nothing*");
	const r = await indicator();
	expect("no matches", r.count, "0");
	expect("red", r.tint, "none");
	expect("the field red", r.field, "red");
});

test("** reaches into folders", async () => {
	await inFolder();
	await type("**/Cake*");
	expect("three matches", (await indicator()).count, "3");
});

test("Enter opens every match", async () => {
	await inFolder();
	await type("Cake*");
	await pressKey(page, "Enter");
	await settle(1200);
	const open = await openPaths();
	expect("both are open", [`${DIR}/Cake one.md`, `${DIR}/Cake two.md`].every((p) => open.includes(p)), true);
});

test("more than ten matches asks first", async () => {
	await inFolder();
	await type("Sub/Many*");
	await pressKey(page, "Enter");
	await settle(700);
	const asked = await page.evaluate(`return !!document.querySelector(".modal-container");`);
	expect("a dialog asks", asked, true);
	await page.evaluate(`document.querySelector(".modal-container .modal-button-container button:not(.mod-cta), .modal-container .lure-modal-buttons button:not(.mod-cta)")?.click(); ${PAUSE(300)} return true;`);
	expect("and cancelling opens nothing", (await openPaths()).some((p) => p.includes("Many")), false);
});

test("braces only: Enter makes what they name", async () => {
	await inFolder();
	await type("Week {1,2}");
	await pressKey(page, "Enter");
	await settle(1200);
	const made = await page.evaluate(`return JSON.stringify(["Week 1.md", "Week 2.md"].map((n) => !!app.vault.getAbstractFileByPath(${JSON.stringify(DIR)} + "/" + n)));`).then(JSON.parse);
	expect("both notes made", made, [true, true]);
});

test("a real name with a pattern character stays literal", async () => {
	await inFolder();
	await type("Odd [x]");
	expect("no pattern count", (await indicator()).count, null);
	await pressKey(page, "Enter");
	await settle(800);
	expect("Enter opens that note", await page.evaluate(`return app.workspace.getActiveFile()?.path ?? null;`), `${DIR}/Odd [x].md`);
});

test("renaming never reads a pattern", async () => {
	await inFolder({ rename: true });
	await type("Cake*");
	expect("no pattern count", (await indicator()).count, null);
});

const listed = () => page.evaluate(`return JSON.stringify([...document.querySelectorAll(".suggestion-item")].map((e) => ({ label: e.querySelector(".lure-suggest-label")?.textContent, glob: e.classList.contains("lure-suggest-glob"), pattern: e.classList.contains("lure-suggest-pattern") })));`).then(JSON.parse);

test("the dropdown lists the pattern, its braces opened, and only what it matches, edged green", async () => {
	await inFolder();
	await type("{Cake,Pie}*");
	const rows = await listed();
	expect("the pattern rows first", rows.filter((r) => r.pattern).map((r) => r.label), ["{Cake,Pie}*", "Cake*", "Pie*"]);
	const found = rows.filter((r) => !r.pattern);
	expect("the matches, all green", found.length > 0 && found.every((r) => r.glob), true);
	expect("and nothing else", found.map((r) => r.label).sort(), ["Cake one.md", "Cake two.md", "Pie.md"]);
});

test("picking a match collapses the step to it", async () => {
	await inFolder();
	await type("{Cake,Pie}*");
	await page.evaluate(`[...document.querySelectorAll(".suggestion-item")].find((e) => e.querySelector(".lure-suggest-label")?.textContent === "Pie.md")?.click(); ${PAUSE(400)} return true;`);
	expect("the field holds the choice", await page.evaluate(`return document.querySelector(".lure-path-input")?.value ?? null;`), "Pie.md");
});

test("a real * key press keeps the dropdown up with the matches", async () => {
	await inFolder();
	await type("Cake");
	await pressKey(page, "*");
	await settle(500);
	const rows = await listed();
	expect("the dropdown is up", rows.length > 0, true);
	expect("with the matches in it", rows.filter((r) => r.glob).map((r) => r.label).sort(), ["Cake one.md", "Cake two.md"]);
});

test("after Enter the count and its colour go", async () => {
	await inFolder();
	await type("Cake*");
	await pressKey(page, "Enter");
	await settle(1200);
	await page.evaluate(`const bc = app.plugins.plugins.lure.manager.breadcrumbFor(app.workspace.getLeaf(false)); window.__lureEarly = JSON.stringify({ matches: bc?.globMatches ?? "none", mode: bc?.mode, file: app.workspace.getActiveFile()?.path }); return true;`);
	const r = await page.evaluate(`
		await app.workspace.getLeaf(false).openFile(app.vault.getAbstractFileByPath(${JSON.stringify(`${DIR}/Pie.md`)}));
		${PAUSE(600)}
		const leaf = app.workspace.getLeaf(false);
		const el = leaf.view.containerEl.querySelector(".lure-other-paths");
		const bc = app.plugins.plugins.lure.manager.breadcrumbFor(leaf);
		return JSON.stringify(el ? { file: app.workspace.getActiveFile()?.path, tint: el.dataset.lureTint, count: el.textContent, field: document.querySelector(".lure-path-input")?.value ?? null, matches: bc?.globMatches ?? "none", mode: bc?.mode, same: bc?.indicatorEl === el, all: document.querySelectorAll(".lure-other-paths").length, early: window.__lureEarly } : null);
	`).then(JSON.parse);
	expect("no button left over", r, null);
});

test("Tab going round file names highlights each one in the list", async () => {
	await inFolder();
	await type("Cake");
	const seen = [];
	for (let i = 0; i < 4; i++) {
		await pressKey(page, "Tab");
		await settle(500);
		seen.push(JSON.parse(await page.evaluate(`return JSON.stringify({ value: document.querySelector(".lure-path-input")?.value ?? null, lit: document.querySelector(".suggestion-item.is-selected .lure-suggest-label")?.textContent ?? null });`)));
	}
	// Press 3 gives back what was typed, where nothing is highlighted.
	const named = seen.filter((s) => s.value !== "Cake");
	expect("each name on show is the highlighted row", named.every((s) => s.value === s.lit) && named.length === 3, true);
	if (!named.every((s) => s.value === s.lit)) console.log("    " + JSON.stringify(seen));
});

await run();
