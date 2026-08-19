#!/usr/bin/env node
/**
 * Behavioural tests for typing something that is not a path into the path
 * bar: a web URL, an obsidian:// URI, or a percent-encoded filesystem path.
 *
 * One connection for the whole run, deliberately. Focusing the field in one
 * `cdp.mjs` process and pressing a key from the next does not work — the
 * editor takes focus back in the gap, the key lands on the window instead
 * of the input, and the test reports the feature broken when it is not.
 * That cost an hour; don't split these steps across processes.
 *
 * Text is entered with Input.insertText rather than key by key, because "/"
 * has a meaning of its own in this field and typing a URL one key at a time
 * is exactly the case the scheme guard exists for. That guard is asserted
 * separately.
 *
 *   node .dev/test-urls.mjs           # all
 *   node .dev/test-urls.mjs vault     # only tests whose name matches
 *
 * Requires --remote-debugging-port=9222 and OBSIDIAN_VAULT set.
 */

import { connect, PAUSE, pressKey, reloadPlugin } from "./cdpSession.mjs";
import { mkdirSync, rmSync, writeFileSync } from "fs";
import { homedir } from "os";
import { join } from "path";

const BED = join(homedir(), "lure-url-fixtures");
const results = [];
const tests = [];
const test = (name, fn) => tests.push({ name, fn });
const expect = (label, actual, wanted) => {
	const ok = typeof wanted === "function" ? wanted(actual) : JSON.stringify(actual) === JSON.stringify(wanted);
	results.push({ ok, label, actual: ok ? "" : JSON.stringify(actual) });
};

const page = await connect();
await reloadPlugin(page);

rmSync(BED, { recursive: true, force: true });
mkdirSync(BED, { recursive: true });
writeFileSync(join(BED, "a b.md"), "# spaced name\n");

/**
 * The note every case is typed into, made rather than assumed — the suite
 * used to expect one that existed only in the vault it was written against,
 * and failed wholesale anywhere else.
 */
await page.evaluate(`
	const mk = async (p) => { if (!app.vault.getAbstractFileByPath(p)) await app.vault.createFolder(p); };
	await mk("Schemes");
	for (const p of ["Trumpet.md", "Schemes/Master plan.md"]) {
		if (!app.vault.getAbstractFileByPath(p)) await app.vault.create(p, "# fixture\\n");
	}
	${PAUSE(400)}
	return true;
`);

/** Opens a note, opens the path input on its name, and clears the field. */
const armInput = `
	// Cancel whatever the last case left open first: while an input is up
	// the filename element has been emptied, so there is nothing to click.
	document.querySelector(".lure-path-input")?.blur();
	document.body.click();
	${PAUSE(300)}
	app.workspace.getLeavesOfType("empty").forEach((l) => l.detach());
	app.workspace.getLeavesOfType("markdown").slice(1).forEach((l) => l.detach());
	app.workspace.detachLeavesOfType("lure-external-file");
	${PAUSE(300)}
	await app.workspace.getLeaf(false).openFile(app.vault.getAbstractFileByPath("Trumpet.md"));
	${PAUSE(700)}
	window.__opened = [];
	if (!window.__realOpen) window.__realOpen = window.open;
	window.open = (href) => { window.__opened.push(href); return null; };
	const root = app.workspace.getMostRecentLeaf().view.containerEl
		.querySelector(".view-header-title-container");
	root.querySelector(".lure-filename-text").click();
	${PAUSE(400)}
	const input = root.querySelector(".lure-path-input");
	input.value = "";
	input.focus();
	input.setSelectionRange(0, 0);
	return document.activeElement === input;
`;

/** Refocuses immediately before the key: the field can lose focus to a repaint. */
const refocus = `
	const input = document.querySelector(".lure-path-input");
	if (input) { input.focus(); input.setSelectionRange(input.value.length, input.value.length); }
	return !!input && document.activeElement === input;
`;

const state = `
	const input = document.querySelector(".lure-path-input");
	return JSON.stringify({
		opened: window.__opened ?? [],
		inputValue: input ? input.value : null,
		activeFile: app.workspace.getActiveFile()?.path ?? null,
		externalLeaves: app.workspace.getLeavesOfType("lure-external-file").length,
		externalPath: app.workspace.getLeavesOfType("lure-external-file")[0]?.view?.filePath ?? null,
		notices: [...document.querySelectorAll(".notice")].map((n) => n.textContent),
	});
`;

async function typeAndEnter(text) {
	expect("field armed and focused", await page.evaluate(armInput), true);
	await page.send("Input.insertText", { text });
	await page.evaluate(PAUSE(250) + "return true;");
	expect("still focused before Enter", await page.evaluate(refocus), true);
	await pressKey(page, "Enter");
	await page.evaluate(PAUSE(900) + "return true;");
	return JSON.parse(await page.evaluate(state));
}

test("a web URL opens in the Web viewer when it is on", async () => {
	await page.evaluate(`
		const wv = app.internalPlugins.getPluginById("webviewer");
		if (!wv.enabled) await wv.enable();
		app.workspace.detachLeavesOfType("webviewer");
		${PAUSE(400)}
		return true;
	`);
	const s = await typeAndEnter("https://obsidian.md");
	const tabs = JSON.parse(await page.evaluate(`
		${PAUSE(600)}
		return JSON.stringify(app.workspace.getLeavesOfType("webviewer").map((l) => l.getViewState().state?.url ?? null));
	`));
	// A tab of this application, which is what typing an address into an
	// address bar means. `window.open` — the old answer — left Obsidian
	// altogether unless the user had also turned on the viewer's own
	// "open external links here" setting.
	expect("opened in a Web viewer tab", tabs, (v) => Array.isArray(v) && v.some((url) => (url ?? "").includes("obsidian.md")));
	expect("nothing handed to the desktop", s.opened, []);
	expect("no note was created for it", s.activeFile, null);
});

test("a web URL falls back to the browser when the Web viewer is off", async () => {
	await page.evaluate(`
		const wv = app.internalPlugins.getPluginById("webviewer");
		if (wv.enabled) await wv.disable();
		app.workspace.detachLeavesOfType("webviewer");
		${PAUSE(400)}
		return true;
	`);
	const s = await typeAndEnter("https://obsidian.md");
	expect("handed to the host instead", s.opened, ["https://obsidian.md"]);
	expect("and no note was created for it", s.activeFile, "Trumpet.md");
});

test("an obsidian:// URI goes to Obsidian's own handler", async () => {
	const s = await typeAndEnter("obsidian://open?vault=Test&file=Note");
	expect("handed over whole", s.opened, ["obsidian://open?vault=Test&file=Note"]);
});

test("a file:// URL for a vault note opens it as a note", async () => {
	const base = await page.evaluate("return app.vault.adapter.getBasePath();");
	const s = await typeAndEnter(`file://${encodeURI(`${base}/Schemes/Master plan.md`)}`);
	expect("opened inside the vault", s.activeFile, "Schemes/Master plan.md");
	expect("not through the external viewer", s.externalLeaves, 0);
	expect("nothing handed to the host", s.opened, []);
});

test("a percent-encoded path outside the vault opens in the viewer", async () => {
	const s = await typeAndEnter(`${BED}/a%20b.md`);
	expect("decoded and opened", s.externalPath, `${BED}/a b.md`);
});

test("a slash belonging to a scheme is not a folder separator", async () => {
	expect("field armed and focused", await page.evaluate(armInput), true);
	// Key by key, which is the case the guard exists for: "/" normally
	// commits the segment and descends.
	for (const ch of "https://x") {
		await page.send("Input.insertText", { text: ch });
	}
	await page.evaluate(PAUSE(300) + "return true;");
	const s = JSON.parse(await page.evaluate(state));
	expect("typed intact, not split into segments", s.inputValue, "https://x");
	await page.evaluate(`document.querySelector(".lure-path-input")?.blur(); ${PAUSE(200)} return true;`);
});

test("an ordinary path is still an ordinary path", async () => {
	const s = await typeAndEnter("Schemes/Master plan.md");
	expect("navigated inside the vault", s.activeFile, "Schemes/Master plan.md");
	expect("nothing handed to the host", s.opened, []);
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
	if (window.__realOpen) window.open = window.__realOpen;
	app.workspace.detachLeavesOfType("lure-external-file");
	app.workspace.getLeavesOfType("empty").forEach((l) => l.detach());
	document.querySelectorAll(".notice").forEach((n) => n.remove());
	return true;
`);
rmSync(BED, { recursive: true, force: true });
page.close();

const failed = results.filter((r) => !r.ok).length;
console.log(`\n${results.length - failed}/${results.length} assertions passed`);
process.exit(failed ? 1 : 0);
