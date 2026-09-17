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

import { connect, PAUSE, pressKey, quiesce, reloadPlugin, setSettings } from "./cdpSession.mjs";
import { createSuite } from "./harness.mjs";
import { mkdirSync, rmSync, writeFileSync } from "fs";
import { homedir } from "os";
import { join } from "path";

const BED = join(homedir(), "lure-url-fixtures");

const page = await connect();

/**
 * The opt-in as this vault has it, captured before any case changes it.
 *
 * The teardown used to put back a constant `false`, on the assumption that off
 * is where every vault starts. In a vault where it is on, running this suite
 * turned it off and left it off — and the vault name then stops opening its
 * dropdown, which reads as the plugin having broken rather than as the suite
 * having tidied up after itself wrongly.
 */
const EXTERNAL_AT_START = await (async () => {
	for (let i = 0; i < 25; i++) {
		const seen = await page.evaluate(
			`const s = app.plugins?.plugins?.lure?.settings;
			 return s ? JSON.stringify(!!s.accessExternalFiles) : null;`,
		);
		if (seen !== null) return JSON.parse(seen);
		await new Promise((r) => setTimeout(r, 200));
	}
	return false;
})();

/**
 * The state every case here starts from. `reset` and `teardown` are
 * declared at the foot of the file, beside the fixtures they act on;
 * function declarations hoist, so the suite can still be built here,
 * above the cases that register into it.
 */
const { test, expect, run } = createSuite({ reset, teardown });

/** The files outside every vault that the `file://` cases are pointed at. */
function buildBed() {
	rmSync(BED, { recursive: true, force: true });
	mkdirSync(BED, { recursive: true });
	writeFileSync(join(BED, "a b.md"), "# spaced name\n");
}

/**
 * The note every case is typed into, made rather than assumed — the suite
 * used to expect one that existed only in the vault it was written against,
 * and failed wholesale anywhere else.
 */
const buildFixture = `
	const mk = async (p) => { if (!app.vault.getAbstractFileByPath(p)) await app.vault.createFolder(p); };
	await mk("Schemes");
	for (const p of ["Trumpet.md", "Schemes/Master plan.md"]) {
		if (!app.vault.getAbstractFileByPath(p)) await app.vault.create(p, "# fixture\\n");
	}
	${PAUSE(400)}
	return true;
`;

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
		// Where the row itself is pointing, which is the answer when a path
		// names a folder: nothing opens, the trail simply goes there.
		rowPath: app.plugins?.plugins?.lure?.manager?.getActiveBreadcrumb?.()?.externalPath ?? null,
		// A tilde read as a name would leave one of these behind.
		tildeNotes: app.vault.getFiles().filter((f) => f.name.startsWith("~")).length,
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

test("a path wrapped in quotes is unwrapped", async () => {
	// What "Copy as path" hands out on Windows, and what a shell gives for
	// any path with a space in it. Taken literally the quotes become part of
	// the name and the row goes looking for a file that starts with one.
	const s = await typeAndEnter('"Schemes/Master plan.md"');
	expect("navigated inside the vault", s.activeFile, "Schemes/Master plan.md");
	expect("nothing handed to the host", s.opened, []);
});

test("a quoted path outside the vault is unwrapped before it is read", async () => {
	// The case the quotes exist for: a path with a space in it, which is
	// exactly when a file manager decides to wrap one. Unwrapping has to
	// happen before the scheme and encoding checks, or the leading quote
	// makes it look like an ordinary name to be created in the vault.
	const s = await typeAndEnter(`"${BED}/a%20b.md"`);
	expect("decoded and opened outside", s.externalPath, `${BED}/a b.md`);
});

test("a path written with a tilde is read from the home folder", async () => {
	// What a shell, a terminal-minded user, or anything copying out of one
	// writes for the home folder. Nothing below the commit expands it, so the
	// bar used to read `~/…` as a note name: Enter offered to create a note
	// called `~` in the current folder instead of going out there.
	const s = await typeAndEnter(`~/${BED.split("/").pop()}/a b.md`);
	expect("opened out there, not created in the vault", s.externalPath, `${BED}/a b.md`);
	expect("and no note was made out of the tilde", s.tildeNotes, 0);
});

test("a lone tilde browses the home folder", async () => {
	const s = await typeAndEnter("~");
	expect("the row went home", s.rowPath, (v) => typeof v === "string" && v.startsWith(homedir()));
	expect("nothing was created for it", s.tildeNotes, 0);
});

async function reset() {
	await reloadPlugin(page);
	await quiesce(page);
	buildBed();
	await page.evaluate(buildFixture);
	// Two cases here open a file outside the vault, which the plugin refuses
	// to do at all unless this is on — and it is off by default. A setting a
	// case depends on is a fixture that happens not to be a file, and belongs
	// here with the rest of them; see `setSettings` for what reading one
	// instead costs.
	await setSettings(page, { accessExternalFiles: true });
}

async function teardown() {
	await page.evaluate(`
		if (window.__realOpen) window.open = window.__realOpen;
		app.workspace.detachLeavesOfType("lure-external-file");
		app.workspace.getLeavesOfType("empty").forEach((l) => l.detach());
		document.querySelectorAll(".notice").forEach((n) => n.remove());
		return true;
	`);
	// Put the opt-in back where it was found. Leaving it on is how the next
	// suite comes to depend on it without saying so — which is exactly what
	// the gestures suite had done.
	await setSettings(page, { accessExternalFiles: EXTERNAL_AT_START });
	rmSync(BED, { recursive: true, force: true });
	page.close();
}

await run();
