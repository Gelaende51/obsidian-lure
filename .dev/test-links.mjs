#!/usr/bin/env node
/**
 * A note's other paths: alias paths (Alt+Enter), hard links (Shift+Enter) and
 * symbolic links (Ctrl+Shift+Enter) made in rename mode and recorded in the
 * `paths` frontmatter; aliases listed in the dropdown and opened from it; the
 * other-paths button; `paths` following a rename.
 *
 *   node .dev/test-links.mjs           # all
 *   node .dev/test-links.mjs hard      # only tests whose name matches
 *
 * Requires --remote-debugging-port=9222 and the test vault open.
 */

import { CLEAR_NOTICES, connect, PAUSE, pressKey, quiesce, reloadPlugin, parkPointer } from "./cdpSession.mjs";
import { createSuite } from "./harness.mjs";

const DIR = "Lure-links";
const NOTE = `${DIR}/Note.md`;
const page = await connect();

const fixture = `
	const fs = require("fs");
	const base = app.vault.adapter.getBasePath();
	// Made fresh each case: links on disk outlive a trash of the folder's notes.
	const dir = app.vault.getAbstractFileByPath(${JSON.stringify(DIR)});
	if (dir) await app.vault.delete(dir, true);
	fs.rmSync(base + "/" + ${JSON.stringify(DIR)}, { recursive: true, force: true });
	await new Promise((r) => setTimeout(r, 400));
	await app.vault.createFolder(${JSON.stringify(DIR)});
	await app.vault.createFolder(${JSON.stringify(`${DIR}/Sub`)});
	await app.vault.create(${JSON.stringify(NOTE)}, "body\\n");
	await app.vault.create(${JSON.stringify(`${DIR}/Sibling.md`)}, "");
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
			require("fs").rmSync(app.vault.adapter.getBasePath() + "/" + ${JSON.stringify(DIR)}, { recursive: true, force: true });
			return true;
		`);
		page.close();
	},
});

const settle = (ms = 500) => page.evaluate(PAUSE(ms) + "return true;");

/** Opens the note and the rename field on its name, stem marked. */
async function renaming() {
	await page.evaluate(`
		document.querySelector(".lure-path-input")?.blur();
		document.body.click();
		app.workspace.getLeavesOfType("markdown").slice(1).forEach((l) => l.detach());
		await app.workspace.getLeaf(false).openFile(app.vault.getAbstractFileByPath(${JSON.stringify(NOTE)}));
		${PAUSE(600)}
		return true;
	`);
	for (let i = 0; i < 2; i++) {
		await pressKey(page, "F2");
		await settle(400);
		if (await page.evaluate(`return !!document.querySelector(".lure-rename-active .lure-path-input, .lure-path-input");`)) break;
	}
	const ok = await page.evaluate(`return document.activeElement?.classList.contains("lure-path-input") ?? false;`);
	expect("the rename field is open", ok, true);
}

async function typeOverName(text) {
	await page.send("Input.insertText", { text });
	await settle(300);
}

const disk = (path) => page.evaluate(`
	const fs = require("fs");
	const at = app.vault.adapter.getBasePath() + "/" + ${JSON.stringify(path)};
	try {
		const l = fs.lstatSync(at);
		return JSON.stringify({ exists: true, symlink: l.isSymbolicLink(), nlink: l.nlink, ino: l.ino, link: l.isSymbolicLink() ? fs.readlinkSync(at) : null });
	} catch { return JSON.stringify({ exists: false }); }
`).then(JSON.parse);

const pathsOf = (path) => page.evaluate(`
	const f = app.vault.getAbstractFileByPath(${JSON.stringify(path)});
	return JSON.stringify(f ? (app.metadataCache.getFileCache(f)?.frontmatter?.paths ?? []) : null);
`).then(JSON.parse);

test("Alt+Enter, renaming, adds an alias path and moves nothing", async () => {
	await renaming();
	await typeOverName("Alias one");
	await pressKey(page, "alt+Enter");
	await settle(900);
	expect("the note stays where it was", (await disk(NOTE)).exists, true);
	expect("nothing is made at the alias", (await disk(`${DIR}/Alias one.md`)).exists, false);
	expect("the alias is in paths", await pathsOf(NOTE), [`${DIR}/Alias one.md`]);
});

test("Shift+Enter, renaming, makes a hard link and records both paths", async () => {
	await renaming();
	await typeOverName("Hard");
	await pressKey(page, "shift+Enter");
	await settle(1500);
	const note = await disk(NOTE);
	const hard = await disk(`${DIR}/Hard.md`);
	expect("the link is there", hard.exists, true);
	expect("the same file", hard.ino, note.ino);
	expect("two names for it", note.nlink, 2);
	expect("both in paths", await pathsOf(NOTE), [NOTE, `${DIR}/Hard.md`]);
});

test("Ctrl+Shift+Enter, renaming, makes a relative symbolic link", async () => {
	await renaming();
	await typeOverName("Sub/Soft");
	await pressKey(page, "ctrl+shift+Enter");
	await settle(1500);
	const soft = await disk(`${DIR}/Sub/Soft.md`);
	expect("a symbolic link", soft.symlink, true);
	expect("written relative", soft.link, "../Note.md");
	expect("the note did not move", (await disk(NOTE)).exists, true);
	expect("both in paths", await pathsOf(NOTE), [NOTE, `${DIR}/Sub/Soft.md`]);
});

test("a link onto a taken name is refused", async () => {
	await renaming();
	await typeOverName("Sibling");
	await pressKey(page, "shift+Enter");
	await settle(1000);
	expect("the note still has one name", (await disk(NOTE)).nlink, 1);
	expect("the sibling is untouched", (await disk(`${DIR}/Sibling.md`)).nlink, 1);
	expect("nothing recorded", await pathsOf(NOTE), []);
});

/** The field opened in the note's folder, emptied. */
async function browsing() {
	await page.evaluate(`
		document.querySelector(".lure-path-input")?.blur();
		document.body.click();
		await app.workspace.getLeaf(false).openFile(app.vault.getAbstractFileByPath(${JSON.stringify(`${DIR}/Sibling.md`)}));
		${PAUSE(600)}
		app.workspace.getLeaf(false).view.containerEl.querySelector(".lure-filename-text").click();
		${PAUSE(400)}
		return true;
	`);
	await pressKey(page, "ctrl+a");
	await pressKey(page, "Backspace");
	await settle(300);
}

const rows = () => page.evaluate(`return JSON.stringify([...document.querySelectorAll(".suggestion-item")].map((e) => ({ label: e.querySelector(".lure-suggest-label")?.textContent, cls: e.className })));`).then(JSON.parse);

test("aliases are listed orange where they stand, and open their note", async () => {
	await page.evaluate(`
		const f = app.vault.getAbstractFileByPath(${JSON.stringify(NOTE)});
		await app.fileManager.processFrontMatter(f, (fm) => { fm.paths = [${JSON.stringify(`${DIR}/Elsewhere.md`)}]; fm.aliases = ["Nickname"]; });
		${PAUSE(800)}
		return true;
	`);
	await browsing();
	await typeOverName("Els");
	const path = (await rows()).find((r) => r.label === "Elsewhere.md");
	expect("the path alias is listed", !!path, true);
	expect("as an alias, orange", path?.cls.includes("lure-suggest-alias") && path.cls.includes("lure-suggest-warn"), true);
	await pressKey(page, "ctrl+a");
	await typeOverName("Nick");
	const name = (await rows()).find((r) => r.label === "Nickname");
	expect("Obsidian's alias is listed beside its note", name?.cls.includes("lure-suggest-alias"), true);
	await pressKey(page, "ctrl+a");
	await typeOverName("Elsewhere");
	await pressKey(page, "Enter");
	await settle(800);
	expect("Enter on the typed alias opens the note", await page.evaluate(`return app.workspace.getActiveFile()?.path ?? null;`), NOTE);
	expect("and makes nothing", (await disk(`${DIR}/Elsewhere.md`)).exists, false);
});

test("the other-paths button shows exactly when there are other paths", async () => {
	const button = () => page.evaluate(`
		await app.workspace.getLeaf(false).openFile(app.vault.getAbstractFileByPath(${JSON.stringify(NOTE)}));
		${PAUSE(700)}
		return !!app.workspace.getLeaf(false).view.containerEl.querySelector(".lure-other-paths");
	`);
	expect("none without other paths", await button(), false);
	await page.evaluate(`
		const f = app.vault.getAbstractFileByPath(${JSON.stringify(NOTE)});
		await app.fileManager.processFrontMatter(f, (fm) => { fm.paths = [${JSON.stringify(`${DIR}/Other.md`)}]; });
		${PAUSE(800)}
		return true;
	`);
	expect("there with one", await button(), true);
	const items = await page.evaluate(`
		app.workspace.getLeaf(false).view.containerEl.querySelector(".lure-other-paths").click();
		${PAUSE(300)}
		const titles = [...document.querySelectorAll(".menu .menu-item-title")].map((e) => e.textContent);
		document.body.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
		document.querySelector(".menu")?.remove();
		return JSON.stringify(titles);
	`).then(JSON.parse);
	expect("its menu lists the path", items, [`${DIR}/Other.md`]);
});

test("renaming a hard link rewrites its entry in paths", async () => {
	await renaming();
	await typeOverName("Hard");
	await pressKey(page, "shift+Enter");
	await settle(2000);
	await page.evaluate(`
		const f = app.vault.getAbstractFileByPath(${JSON.stringify(`${DIR}/Hard.md`)});
		if (f) await app.fileManager.renameFile(f, ${JSON.stringify(`${DIR}/Harder.md`)});
		${PAUSE(1500)}
		return true;
	`);
	expect("the entry follows the rename", await pathsOf(NOTE), [NOTE, `${DIR}/Harder.md`]);
});

await run();
