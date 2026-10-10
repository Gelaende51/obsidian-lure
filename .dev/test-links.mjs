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

import { CLEAR_NOTICES, connect, PAUSE, pressKey, quiesce, reloadPlugin, parkPointer, setSettings } from "./cdpSession.mjs";
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
	skip: (name) => name.startsWith("symbolic links made and removed outside"),
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

/** A picture of the window, kept with LURE_SHOTS set: only a picture says a look shows. */
async function shoot(name) {
	const dir = process.env.LURE_SHOTS;
	if (!dir) return;
	const { mkdirSync, writeFileSync } = await import("node:fs");
	mkdirSync(`${dir}/look`, { recursive: true });
	const png = await page.send("Page.captureScreenshot", { format: "png" });
	const data = png?.result?.data ?? png?.data;
	if (data) writeFileSync(`${dir}/look/${name}.png`, Buffer.from(data, "base64"));
}

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
	const button = await page.evaluate(`
		app.workspace.getLeaf(false).view.containerEl.querySelector(".lure-path-input")?.blur();
		await app.workspace.getLeaf(false).openFile(app.vault.getAbstractFileByPath(${JSON.stringify(`${DIR}/Sibling.md`)}));
		${PAUSE(400)}
		await app.workspace.getLeaf(false).openFile(app.vault.getAbstractFileByPath(${JSON.stringify(NOTE)}));
		${PAUSE(900)}
		const el = app.workspace.getLeaf(false).view.containerEl.querySelector(".lure-other-paths, .lure-badge-other-paths");
		el?.click();
		${PAUSE(300)}
		const tints = [...document.querySelectorAll(".lure-other-paths-menu .suggestion-item")].map((e) => e.dataset.lureTint ?? null);
		document.querySelector(".lure-other-paths-menu")?.remove();
		return JSON.stringify({ count: el?.querySelector(".lure-other-paths-count")?.textContent ?? null, tint: el?.closest("[data-lure-tint]")?.dataset.lureTint ?? null, tints });
	`).then(JSON.parse);
	expect("the button counts one other path", button.count, "1");
	expect("purple, for a hard link", button.tint, "hard");
	expect("its menu: own path blue, then the link purple", button.tints, ["current", "hard"]);
});

test("Ctrl+Shift+Enter, renaming, makes a relative symbolic link", async () => {
	await renaming();
	await typeOverName("Sub/Soft");
	await pressKey(page, "ctrl+shift+Enter");
	await settle(1500);
	const soft = await disk(`${DIR}/Sub/Soft.md`);
	expect("a symbolic link", soft.symlink, true);
	// In the machine's own separator: `..\\Note.md` on Windows.
	expect("written relative", soft.link?.replace(/\\/g, "/"), "../Note.md");
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
		return !!app.workspace.getLeaf(false).view.containerEl.querySelector(".lure-other-paths, .lure-badge-other-paths");
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
		app.workspace.getLeaf(false).view.containerEl.querySelector(".lure-other-paths, .lure-badge-other-paths").click();
		${PAUSE(300)}
		const titles = [...document.querySelectorAll(".lure-other-paths-menu .suggestion-item")].map((e) => e.dataset.path);
		document.body.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
		document.querySelector(".lure-other-paths-menu")?.remove();
		return JSON.stringify(titles);
	`).then(JSON.parse);
	expect("its menu lists the note, then the path", items, [NOTE, `${DIR}/Other.md`]);
	const draggable = await page.evaluate(`
		app.workspace.getLeaf(false).view.containerEl.querySelector(".lure-other-paths, .lure-badge-other-paths").click();
		${PAUSE(300)}
		const rows = [...document.querySelectorAll(".lure-other-paths-menu .suggestion-item")];
		const out = rows.map((r) => r.getAttribute("draggable"));
		document.querySelector(".lure-other-paths-menu")?.remove();
		return JSON.stringify(out);
	`).then(JSON.parse);
	expect("the note's own row can be dragged like a File Explorer row", draggable[0], "true");
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

test("the button stays while editing, its menu opens under the bar, and link rows end in their own icon", async () => {
	await renaming();
	await typeOverName("Sub/Soft");
	await pressKey(page, "ctrl+shift+Enter");
	await settle(2000);
	const r = await page.evaluate(`
		const leaf = app.workspace.getLeaf(false);
		await leaf.openFile(app.vault.getAbstractFileByPath(${JSON.stringify(`${DIR}/Sibling.md`)}));
		${PAUSE(300)}
		await leaf.openFile(app.vault.getAbstractFileByPath(${JSON.stringify(NOTE)}));
		${PAUSE(900)}
		const root = leaf.view.containerEl;
		root.querySelector(".lure-filename-text").click();
		${PAUSE(500)}
		const whileEditing = !!root.querySelector(".lure-other-paths");
		const button = root.querySelector(".lure-other-paths");
		button?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		${PAUSE(300)}
		const menu = document.querySelector(".lure-other-paths-menu");
		const bar = root.querySelector(".view-header");
		const gap = menu && bar ? Math.round(menu.getBoundingClientRect().top - bar.getBoundingClientRect().bottom) : null;
		const left = menu && button ? Math.round(menu.getBoundingClientRect().left - button.getBoundingClientRect().left) : null;
		const icons = [...document.querySelectorAll(".lure-other-paths-menu .lure-suggest-kind svg")].map((s) => [...s.classList].find((c) => c.startsWith("lucide-")) ?? null);
		menu?.remove();
		return JSON.stringify({ whileEditing, gap, left, icons });
	`).then(JSON.parse);
	expect("the button stays while the name is being edited", r.whileEditing, true);
	expect("the menu opens flush under the bar", r.gap !== null && Math.abs(r.gap) <= 2, true);
	expect("and at the button's left edge", r.left !== null && Math.abs(r.left) <= 2, true);
	expect("a symbolic link has its own icon", r.icons, (v) => Array.isArray(v) && v.includes("lucide-arrow-up-right"));
	// Into the folder holding the link: its row ends in the symbolic-link icon.
	await page.evaluate(`document.querySelector(".lure-path-input")?.blur(); document.body.click(); ${PAUSE(300)} return true;`);
	await page.evaluate(`
		const leaf = app.workspace.getLeaf(false);
		await leaf.openFile(app.vault.getAbstractFileByPath(${JSON.stringify(`${DIR}/Sibling.md`)}));
		${PAUSE(600)}
		leaf.view.containerEl.querySelector(".lure-filename-text").click();
		${PAUSE(400)}
		return true;
	`);
	await pressKey(page, "ctrl+a");
	await typeOverName("Sub/");
	await settle(400);
	const row = await page.evaluate(`
		const el = [...document.querySelectorAll(".suggestion-item")].find((e) => e.querySelector(".lure-suggest-label")?.textContent?.startsWith("Soft"));
		return JSON.stringify(el ? { kind: !!el.querySelector(".lure-suggest-end .lure-suggest-kind svg") } : null);
	`).then(JSON.parse);
	expect("the link's row ends in its icon", row?.kind, true);
});

test("Tab going round the names highlights an alias row too", async () => {
	await page.evaluate(`
		await app.vault.create(${JSON.stringify(`${DIR}/Elsewise.md`)}, "");
		const f = app.vault.getAbstractFileByPath(${JSON.stringify(NOTE)});
		await app.fileManager.processFrontMatter(f, (fm) => { fm.paths = [${JSON.stringify(`${DIR}/Elsewhere.md`)}]; });
		${PAUSE(800)}
		return true;
	`);
	await browsing();
	await typeOverName("Elsew");
	const seen = [];
	for (let i = 0; i < 2; i++) {
		await pressKey(page, "Tab");
		await settle(500);
		seen.push(JSON.parse(await page.evaluate(`return JSON.stringify({ value: document.querySelector(".lure-path-input")?.value, lit: document.querySelector(".suggestion-item.is-selected .lure-suggest-label")?.textContent ?? null });`)));
	}
	expect("each name on show is the highlighted row", seen.every((s) => s.value === s.lit), true);
	expect("the alias among them", seen.some((s) => s.value === "Elsewhere.md"), true);
});

const listsOf = (path) => page.evaluate(`
	const f = app.vault.getAbstractFileByPath(${JSON.stringify(path)});
	const fm = f ? app.metadataCache.getFileCache(f)?.frontmatter ?? {} : null;
	return JSON.stringify(fm && Object.fromEntries(Object.entries(fm).filter(([k]) => k.startsWith("paths"))));
`).then(JSON.parse);

test("each kind has its own list beside paths", async () => {
	await renaming();
	await typeOverName("Hard");
	await pressKey(page, "shift+Enter");
	await settle(1500);
	await renaming();
	await typeOverName("Sub/Soft");
	await pressKey(page, "ctrl+shift+Enter");
	await settle(1500);
	await renaming();
	await typeOverName("Alias one");
	await pressKey(page, "alt+Enter");
	await settle(1500);
	const lists = await listsOf(NOTE);
	expect("hard links, both names", lists["paths-hardlinks"], [NOTE, `${DIR}/Hard.md`]);
	expect("symbolic links", lists["paths-symlinks"], [`${DIR}/Sub/Soft.md`]);
	expect("alias paths", lists["paths-aliases"], [`${DIR}/Alias one.md`]);
	expect("paths is all of them", [...lists.paths].sort(), [NOTE, `${DIR}/Hard.md`, `${DIR}/Sub/Soft.md`, `${DIR}/Alias one.md`].sort());
});

test("a copy names its origin and drops the lists, and the source lists it as a fork", async () => {
	await renaming();
	await typeOverName("Alias one");
	await pressKey(page, "alt+Enter");
	await settle(1200);
	await renaming();
	await typeOverName("Copied");
	await pressKey(page, "ctrl+Enter");
	await settle(1500);
	expect("the copy's lists", await listsOf(`${DIR}/Copied.md`), { "paths-origin": NOTE });
	expect("the source's forks", (await listsOf(NOTE))["paths-forks"], [`${DIR}/Copied.md`]);
});

test("the unchanged path with another chord converts a hard link to a symbolic link", async () => {
	await renaming();
	await typeOverName("Hard");
	await pressKey(page, "shift+Enter");
	await settle(2000);
	const opened = await page.evaluate(`
		let f = null;
		for (let i = 0; i < 30 && !f; i++) { f = app.vault.getAbstractFileByPath(${JSON.stringify(`${DIR}/Hard.md`)}); if (!f) await new Promise((r) => setTimeout(r, 100)); }
		if (!f) return "not indexed";
		await app.workspace.getLeaf(false).openFile(f);
		${PAUSE(800)}
		return app.workspace.getActiveFile()?.path ?? null;
	`);
	expect("the hard link is open", opened, `${DIR}/Hard.md`);
	for (let i = 0; i < 2; i++) {
		await pressKey(page, "F2");
		await settle(400);
		if (await page.evaluate(`return !!document.querySelector(".lure-path-input");`)) break;
	}
	await pressKey(page, "ctrl+shift+Enter");
	await settle(2000);
	const hard = await disk(`${DIR}/Hard.md`);
	expect("now a symbolic link", hard.symlink, true);
	expect("pointing at the note", hard.link, "Note.md");
	const lists = await listsOf(NOTE);
	expect("listed as one", lists["paths-symlinks"], [`${DIR}/Hard.md`]);
	expect("and no longer as a hard link", lists["paths-hardlinks"] ?? [], []);
});

test("with extensions hidden the badge is the other-paths button, in their colour", async () => {
	await setSettings(page, { showFileExtension: false });
	await page.evaluate(`
		const f = app.vault.getAbstractFileByPath(${JSON.stringify(NOTE)});
		await app.fileManager.processFrontMatter(f, (fm) => { fm.paths = [${JSON.stringify(`${DIR}/Other.md`)}]; });
		${PAUSE(500)}
		await app.workspace.getLeaf(false).openFile(f);
		${PAUSE(800)}
		return true;
	`);
	const r = await page.evaluate(`
		const root = app.workspace.getLeaf(false).view.containerEl;
		const badge = root.querySelector(".lure-filename-badge");
		const opener = badge?.querySelector(".lure-badge-other-paths");
		const front = !!root.querySelector(".lure-other-paths");
		opener?.click();
		${PAUSE(300)}
		const menu = [...document.querySelectorAll(".lure-other-paths-menu .suggestion-item")].map((e) => e.dataset.path);
		document.querySelector(".lure-other-paths-menu")?.remove();
		${PAUSE(100)}
		const input0 = !!root.querySelector(".lure-path-input");
		// Read again: the row redraws when the scan of links comes back.
		root.querySelector(".lure-filename-badge > span:last-child")?.click();
		${PAUSE(400)}
		const input = root.querySelector(".lure-path-input");
		return JSON.stringify({
			opener: !!opener, front, tint: badge?.dataset.lureTint ?? null,
			count: opener?.querySelector(".lure-other-paths-count")?.textContent ?? null,
			menu, input0, value: input?.value ?? null,
			selected: input ? input.value.slice(input.selectionStart, input.selectionEnd) : null,
		});
	`).then(JSON.parse);
	expect("the badge's icon is the button", r.opener, true);
	expect("and no second one at the front", r.front, false);
	expect("the badge takes the colour", r.tint, "alias");
	expect("with the count", r.count, "1");
	expect("the icon opens the list", r.menu, [NOTE, `${DIR}/Other.md`]);
	expect("without opening the field", r.input0, false);
	expect("the rest of the badge writes the extension out", [r.value, r.selected], [NOTE.split("/").pop(), ".md"]);
});

test("the badge: a hand, a grey extension, its list ending where it does, built like the dropdown", async () => {
	await setSettings(page, { showFileExtension: false });
	try {
		await page.evaluate(`
			const f = app.vault.getAbstractFileByPath(${JSON.stringify(NOTE)});
			await app.fileManager.processFrontMatter(f, (fm) => { fm.paths = [${JSON.stringify(`${DIR}/Other.md`)}, ${JSON.stringify(`${DIR}/Third.md`)}]; });
			${PAUSE(500)}
			await app.workspace.getLeaf(false).openFile(f);
			${PAUSE(800)}
			return true;
		`);
		await shoot("badge-other-paths");
		const r = await page.evaluate(`
			const root = app.workspace.getLeaf(false).view.containerEl;
			const badge = root.querySelector(".lure-filename-badge");
			const ext = badge.querySelector(".lure-badge-extension");
			const chevron = badge.querySelector(".lure-other-paths-chevron");
			const out = {
				cursor: getComputedStyle(badge).cursor,
				extGrey: getComputedStyle(ext).color !== getComputedStyle(badge).color,
				chevronBox: Math.round(chevron.getBoundingClientRect().width),
				icon: badge.querySelector(".lure-badge-other-paths > svg path")?.getAttribute("d") ?? null,
				covered: (() => { const a = badge.querySelector(".lure-badge-other-paths > svg").getBoundingClientRect(), c = badge.querySelector(".lure-other-paths-count").getBoundingClientRect(); return Math.round(Math.max(0, Math.min(a.right, c.right) - Math.max(a.left, c.left)) * Math.max(0, Math.min(a.bottom, c.bottom) - Math.max(a.top, c.top)) / (a.width * a.height) * 100); })(),
			};
			badge.querySelector(".lure-badge-other-paths").click();
			${PAUSE(300)}
			const menu = document.querySelector(".lure-other-paths-menu");
			out.rightGap = menu ? Math.round(menu.getBoundingClientRect().right - badge.getBoundingClientRect().right) : null;
			const rows = [...(menu?.querySelectorAll(".suggestion-item") ?? [])];
			out.labels = rows.map((e) => e.querySelector(".lure-suggest-label")?.textContent);
			out.badges = rows.map((e) => e.querySelector(".lure-suggest-type")?.textContent ?? null);
			out.selected = rows.findIndex((e) => e.classList.contains("is-selected"));
			return JSON.stringify(out);
		`).then(JSON.parse);
		await shoot("other-paths-list");
		await pressKey(page, "ArrowDown");
		const after = await page.evaluate(`
			const rows = [...document.querySelectorAll(".lure-other-paths-menu .suggestion-item")];
			const i = rows.findIndex((e) => e.classList.contains("is-selected"));
			document.querySelector(".lure-other-paths-menu")?.remove();
			return i;
		`);
		expect("a hand over the badge", r.cursor, "pointer");
		expect("its extension stays grey in the tint", r.extGrey, true);
		expect("the chevron has a box like the count", r.chevronBox, 12);
		expect("the button is Lucide's split", r.icon, (v) => typeof v === "string" && v.startsWith("M16 3h5v5"));
		expect("and the count covers little of it", r.covered, (v) => v <= 25);
		expect("the list ends where the extension does", r.rightGap !== null && Math.abs(r.rightGap) <= 2, true);
		expect("names without the extension, as in the dropdown", r.labels, [`${DIR}/Note`, `${DIR}/Other`, `${DIR}/Third`]);
		expect("which is in a badge", r.badges, [".md", ".md", ".md"]);
		expect("the first path to go to is highlighted", r.selected, 1);
		expect("the arrow keys move the highlight", after, 2);

		// The field open on the name: the badge stays, and writes the extension in.
		const editing = await page.evaluate(`
			const root = app.workspace.getLeaf(false).view.containerEl;
			root.querySelector(".lure-filename-text").click();
			${PAUSE(500)}
			const input = root.querySelector(".lure-path-input");
			return JSON.stringify({ badge: !!root.querySelector(".lure-filename .lure-filename-badge"), value: input?.value ?? null, front: !!root.querySelector(".lure-other-paths") });
		`).then(JSON.parse);
		await shoot("badge-while-editing");
		const revealed = await page.evaluate(`
			const root = app.workspace.getLeaf(false).view.containerEl;
			root.querySelector(".lure-filename-badge .lure-badge-extension")?.click();
			${PAUSE(300)}
			const input = root.querySelector(".lure-path-input");
			return JSON.stringify({ value: input?.value ?? null, selected: input ? input.value.slice(input.selectionStart, input.selectionEnd) : null, badge: !!root.querySelector(".lure-filename-badge") });
		`).then(JSON.parse);
		expect("the badge stays while the field is open", editing.badge, true);
		expect("the field holds the name without it", editing.value, "Note");
		expect("and the button is not doubled at the front", editing.front, false);
		expect("pressed there, it writes the extension in, marked", [revealed.value, revealed.selected], ["Note.md", ".md"]);
		expect("and goes", revealed.badge, false);
	} finally {
		await page.evaluate(`document.querySelector(".lure-path-input")?.blur(); document.querySelector(".lure-other-paths-menu")?.remove(); return true;`);
		await setSettings(page, { showFileExtension: true });
	}
});

/** Does something to the vault from outside Obsidian, then shows the note again. */
const outside = (code) => page.evaluate(`
	const fs = require("fs"), path = require("path");
	const base = app.vault.adapter.getBasePath();
	const at = (p) => path.join(base, p);
	${code}
	${PAUSE(1500)}
	// Opened again: a symbolic link made or removed outside raises no event.
	const leaf = app.workspace.getLeaf(false);
	await leaf.openFile(app.vault.getAbstractFileByPath(${JSON.stringify(`${DIR}/Sibling.md`)}));
	await leaf.openFile(app.vault.getAbstractFileByPath(${JSON.stringify(NOTE)}));
	${PAUSE(4000)}
	return true;
`);

test("hard links made and split off outside Obsidian are put right in the lists", async () => {
	await outside(`fs.linkSync(at(${JSON.stringify(NOTE)}), at(${JSON.stringify(`${DIR}/Twin.md`)}));`);
	let lists = await listsOf(NOTE);
	expect("a hard link made in a terminal is listed", lists?.["paths-hardlinks"], (v) => Array.isArray(v) && v.includes(`${DIR}/Twin.md`) && v.includes(NOTE));
	expect("in paths too", lists?.paths, (v) => Array.isArray(v) && v.includes(`${DIR}/Twin.md`));
	// An editor saving through a temporary file and a rename leaves a file of its own.
	await outside(`
		const twin = at(${JSON.stringify(`${DIR}/Twin.md`)});
		fs.writeFileSync(twin + ".tmp", fs.readFileSync(twin));
		fs.renameSync(twin + ".tmp", twin);
	`);
	lists = await listsOf(NOTE);
	expect("a hard link an editor's save split off is taken out", lists?.["paths-hardlinks"] ?? [], (v) => !v.includes(`${DIR}/Twin.md`));
	expect("and out of paths", lists?.paths ?? [], (v) => !v.includes(`${DIR}/Twin.md`));
});

// A symbolic link made or removed outside raises no vault event: the check
// runs when the path bar shows the note.
test("symbolic links made and removed outside Obsidian are put right in the lists", async () => {
	// The check runs once the vault is quiet and then reads the whole of it:
	// waited for, up to a limit, rather than for a fixed time.
	const symlinks = async (until) => {
		let lists = null;
		for (let i = 0; i < 12; i++) {
			lists = await listsOf(NOTE);
			if (until(lists?.["paths-symlinks"] ?? [])) break;
			await settle(1000);
		}
		return lists?.["paths-symlinks"] ?? [];
	};
	const POINTER = `${DIR}/Sub/Pointer.md`;
	await outside(`fs.symlinkSync("../Note.md", at(${JSON.stringify(POINTER)}));`);
	expect("a symbolic link made in a terminal is listed", await symlinks((v) => v.includes(POINTER)), (v) => v.includes(POINTER));
	await outside(`fs.unlinkSync(at(${JSON.stringify(POINTER)}));`);
	expect("a symbolic link removed in a terminal is taken out", await symlinks((v) => !v.includes(POINTER)), []);
});

await run();
