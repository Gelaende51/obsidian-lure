#!/usr/bin/env node
/**
 * The keys, rungs, colours and settings added together (issues4): a command
 * per rung, Shift walking the keys' cycle backwards, the moved note's own
 * name first, notes that are only linked to, folders not there yet, the red
 * edge, the type badge, and what the vault's segment shows.
 *
 * Colours are asserted as classes here; whether they look right is for the
 * screenshots.
 *
 *   node .dev/test-additions.mjs           # all
 *   node .dev/test-additions.mjs badge     # only tests whose name matches
 *
 * Requires --remote-debugging-port=9222 and the test vault open.
 */

import { CLEAR_NOTICES, connect, PAUSE, pressKey, quiesce, reloadPlugin, parkPointer, setSettings } from "./cdpSession.mjs";
import { createSuite } from "./harness.mjs";

const DIR = "Lure-add";
const NOTE = `${DIR}/Cake.md`;
const page = await connect();

const buildFixture = `
	const mk = async (p) => { if (!app.vault.getAbstractFileByPath(p)) await app.vault.createFolder(p); };
	const mkf = async (p, body = "") => { if (!app.vault.getAbstractFileByPath(p)) await app.vault.create(p, body); };
	await mk(${JSON.stringify(DIR)});
	await mkf(${JSON.stringify(NOTE)});
	await mkf(${JSON.stringify(`${DIR}/Cabbage.md`)});
	// Links to a note that is not there, with its folder named, so where it
	// would be made does not depend on the vault's new-note setting.
	await mkf(${JSON.stringify(`${DIR}/Linker.md`)}, "See [[${DIR}/Ghost note]].");
	${PAUSE(800)}
	return true;
`;

const { test, expect, run } = createSuite({
	reset: async () => {
		await reloadPlugin(page);
		await quiesce(page);
		await page.evaluate(`${CLEAR_NOTICES} return true;`);
		await parkPointer(page);
		await page.evaluate(buildFixture);
	},
	teardown: async () => {
		await setSettings(page, { vaultSegment: "name", showFileExtension: true });
		await page.evaluate(`
			document.querySelector(".lure-path-input")?.blur();
			const dir = app.vault.getAbstractFileByPath(${JSON.stringify(DIR)});
			if (dir) await app.fileManager.trashFile(dir);
			return true;
		`);
		page.close();
	},
});

const openNote = `
	document.querySelector(".lure-path-input")?.blur();
	document.body.click();
	${PAUSE(200)}
	app.workspace.getLeavesOfType("markdown").slice(1).forEach((l) => l.detach());
	await app.workspace.getLeaf(false).openFile(app.vault.getAbstractFileByPath(${JSON.stringify(NOTE)}));
	${PAUSE(700)}
	return true;
`;

const look = async () => JSON.parse(await page.evaluate(`
	const input = document.querySelector(".lure-path-input");
	return JSON.stringify({
		value: input ? input.value : null,
		selected: input ? input.value.slice(input.selectionStart, input.selectionEnd) : null,
		rows: [...document.querySelectorAll(".suggestion-item")].map((e) => ({
			label: e.querySelector(".lure-suggest-label")?.textContent ?? null,
			cls: e.className,
			badge: e.querySelector(".lure-suggest-type")?.textContent ?? null,
		})),
		chips: [...document.querySelectorAll(".lure-browse-chip")].map((c) => ({ text: c.textContent, missing: c.classList.contains("lure-browse-chip-missing") })),
		creates: !!document.querySelector(".lure-suggest-popover.lure-suggest-creates"),
		renaming: !!document.querySelector(".lure-rename-active"),
	});
`));

/**
 * A picture of the window for the colour cases, kept with LURE_SHOTS set: a
 * class says a colour was asked for, only a picture says it shows.
 */
async function shoot(name) {
	const dir = process.env.LURE_SHOTS;
	if (!dir) return;
	const { mkdirSync, writeFileSync } = await import("node:fs");
	mkdirSync(`${dir}/look`, { recursive: true });
	const png = await page.send("Page.captureScreenshot", { format: "png" });
	const data = png?.result?.data ?? png?.data;
	if (data) writeFileSync(`${dir}/look/${name}.png`, Buffer.from(data, "base64"));
}

const command = (id) => page.evaluate(`app.commands.executeCommandById(${JSON.stringify(id)}); ${PAUSE(400)} return true;`);
const settle = (ms = 400) => page.evaluate(PAUSE(ms) + "return true;");
async function type(text) {
	await page.send("Input.insertText", { text });
	await settle();
}

/** The field opened on the note's own folder, emptied, as clicking the name and clearing it does. */
async function inOwnFolder() {
	await page.evaluate(openNote);
	await page.evaluate(`app.workspace.getLeaf(false).view.containerEl.querySelector(".lure-filename-text").click(); ${PAUSE(400)} return true;`);
	// The click marks the name without its extension; all of it goes.
	await pressKey(page, "ctrl+a");
	await pressKey(page, "Backspace");
	await settle(300);
}

test("a command opens the field straight on its rung", async () => {
	await page.evaluate(openNote);
	await command("lure:focus-path-bar-extension");
	expect("the name with its extension", (await look()).selected, "Cake.md");
	await command("lure:focus-path-bar-vault-path");
	expect("the path from the vault", (await look()).selected, NOTE);
	await command("lure:focus-path-bar-absolute-path");
	const abs = await look();
	expect("the path from the system root", abs.selected, (v) => typeof v === "string" && v.startsWith("/") && v.endsWith(`/${NOTE}`));
	await command("lure:focus-path-bar-vault");
	const vault = await look();
	expect("the vault: the whole path, its own part marked", vault.value?.endsWith(`/${NOTE}`) && vault.value.startsWith(vault.selected) && vault.selected.length > 0 && !vault.selected.endsWith(NOTE), true);
	expect("navigating, not renaming", vault.renaming, false);
});

test("Shift with the focus key walks its cycle backwards", async () => {
	await page.evaluate(`app.hotkeyManager.setHotkeys("lure:focus-path-bar", [{ modifiers: ["Mod"], key: "J" }]); return true;`);
	try {
		await page.evaluate(openNote);
		await pressKey(page, "ctrl+shift+j");
		await settle();
		const first = await look();
		expect("from a closed row, the last rung: the vault", first.value?.endsWith(`/${NOTE}`) && first.selected?.length > 0 && !first.selected.endsWith(NOTE), true);
		await pressKey(page, "ctrl+shift+j");
		await settle();
		expect("then the path from the system root", (await look()).selected, (v) => typeof v === "string" && v.endsWith(`/${NOTE}`) && v.startsWith("/"));
		await pressKey(page, "ctrl+shift+j");
		await settle();
		expect("then the path from the vault", (await look()).selected, NOTE);
	} finally {
		await page.evaluate(`app.hotkeyManager.removeHotkeys?.("lure:focus-path-bar"); app.hotkeyManager.save?.(); return true;`);
	}
});

test("Shift+F2 opens the rename on the last rung", async () => {
	await page.evaluate(openNote);
	await pressKey(page, "shift+F2");
	await settle();
	const r = await look();
	expect("renaming", r.renaming, true);
	expect("on the vault's rung", r.value?.endsWith(`/${NOTE}`) && r.selected?.length > 0 && !r.selected.endsWith(NOTE), true);
});

test("moving a note, Tab offers its own name first", async () => {
	await page.evaluate(openNote);
	await pressKey(page, "F2");
	await settle();
	let r = await look();
	if (!r.renaming) {
		await pressKey(page, "F2");
		await settle();
		r = await look();
	}
	expect("renaming", r.renaming, true);
	// The stem is marked: typing replaces it, the extension stays.
	await type("Ca");
	await pressKey(page, "Tab");
	await settle();
	expect("the note's own name comes first, ahead of Cabbage", (await look()).value, "Cake.md");
});

test("a note that is only linked to is listed, pink, where it would be made", async () => {
	await inOwnFolder();
	await type("Gho");
	const row = (await look()).rows.find((r) => r.label?.startsWith("Ghost note"));
	expect("listed", !!row, true);
	expect("marked as unresolved", row?.cls.includes("lure-suggest-unresolved"), true);
	await shoot("unresolved-pink");
});

test("a folder typed ahead of itself is a red chip", async () => {
	await inOwnFolder();
	await type("Nowhere");
	await pressKey(page, "/");
	await settle();
	const chip = (await look()).chips.find((c) => c.text === "Nowhere");
	expect("the chip is there", !!chip, true);
	expect("and red", chip?.missing, true);
	await shoot("missing-chip-red");
	const real = (await look()).chips.find((c) => c.text === DIR);
	expect("a folder that is there is not", real?.missing ?? false, false);
});

test("the row Enter would act on carries the red edge, and the open note's row the blue", async () => {
	await inOwnFolder();
	await type("Cabbage");
	const rows = () => page.evaluate(`return JSON.stringify([...document.querySelectorAll(".suggestion-item")].map((e) => ({ label: e.querySelector(".lure-suggest-label")?.textContent, enter: e.classList.contains("lure-suggest-enter"), here: e.classList.contains("lure-suggest-here") })));`).then(JSON.parse);
	await settle(300);
	let r = await rows();
	expect("the typed name's row is the one Enter opens", r.filter((row) => row.enter).map((row) => row.label), ["Cabbage.md"]);
	await shoot("enter-row-red");
	await pressKey(page, "ctrl+a");
	await type("Ca");
	r = await rows();
	// Blue is for the open note's other paths, not for the note itself.
	expect("the open note's own row is not blue", r.find((row) => row.label === "Cake.md")?.here, false);
	await pressKey(page, "ArrowDown");
	await settle(300);
	r = await rows();
	expect("one row marked, the highlighted one", r.filter((row) => row.enter).length, 1);
});

test("with extensions hidden, the type is a badge at the row's end", async () => {
	await setSettings(page, { showFileExtension: false });
	try {
		await inOwnFolder();
		await type("Cab");
		const row = (await look()).rows.find((r) => r.label?.startsWith("Cabbage"));
		expect("the name without its extension", row?.label, "Cabbage");
		expect("the badge carries it", row?.badge, ".md");
		await shoot("type-badge");
	} finally {
		await setSettings(page, { showFileExtension: true });
	}
});

test("the vault's segment: name, icon only, or none", async () => {
	const segment = () => page.evaluate(`
		const el = app.workspace.getLeaf(false).view.containerEl.querySelector(".lure-vault-segment");
		return JSON.stringify(el ? { folded: el.querySelector(".lure-root-name")?.classList.contains("lure-name-folded") ?? null, icon: !!el.querySelector("svg") } : null);
	`).then(JSON.parse);
	try {
		await setSettings(page, { vaultSegment: "icon" });
		await page.evaluate(openNote);
		const icon = await segment();
		expect("icon only: there, with an icon", icon?.icon, true);
		await setSettings(page, { vaultSegment: "none" });
		await settle();
		expect("none: no segment", await segment(), null);
		await setSettings(page, { vaultSegment: "name", vaultIcon: "library" });
		await settle();
		const named = await segment();
		expect("icon and name: there again", named?.icon, true);
	} finally {
		await setSettings(page, { vaultSegment: "name", vaultIcon: "home" });
	}
});

test("with extensions hidden, the field leaves .md off too, except on the rung that shows it", async () => {
	await setSettings(page, { showFileExtension: false });
	try {
		await page.evaluate(openNote);
		await page.evaluate(`app.workspace.getLeaf(false).view.containerEl.querySelector(".lure-filename-text").click(); ${PAUSE(400)} return true;`);
		expect("the name without .md", (await look()).value, "Cake");
		await command("lure:focus-path-bar-vault-path");
		expect("the path from the vault without it", (await look()).value, `${DIR}/Cake`);
		await command("lure:focus-path-bar-extension");
		expect("the name with its extension, as that rung says", (await look()).value, "Cake.md");
	} finally {
		await setSettings(page, { showFileExtension: true });
	}
});

test("with extensions hidden, Tab writes names without .md and passes over the extension rung", async () => {
	await setSettings(page, { showFileExtension: false });
	try {
		await inOwnFolder();
		await type("Cabb");
		await pressKey(page, "Tab");
		await settle();
		expect("completed without .md", (await look()).value, "Cabbage");
		await page.evaluate(openNote);
		await page.evaluate(`app.workspace.getLeaf(false).view.containerEl.querySelector(".lure-filename-text").click(); ${PAUSE(400)} return true;`);
		await pressKey(page, "Tab");
		await settle();
		expect("the next rung is the path from the vault", (await look()).value, `${DIR}/Cake`);
	} finally {
		await setSettings(page, { showFileExtension: true });
	}
});

test("the glob count goes when the field is left by a click elsewhere", async () => {
	await inOwnFolder();
	await type("Ca*");
	expect("counted while typing", await page.evaluate(`return !!app.workspace.getLeaf(false).view.containerEl.querySelector(".lure-other-paths");`), true);
	await page.evaluate(`document.querySelector(".workspace-leaf-content .cm-content, .workspace-leaf-content .markdown-preview-view")?.dispatchEvent(new MouseEvent("mousedown", { bubbles: true })); document.body.click(); ${PAUSE(600)} return true;`);
	expect("gone after the click", await page.evaluate(`return !!app.workspace.getLeaf(false).view.containerEl.querySelector(".lure-other-paths");`), false);
});

test("the file Enter would make is the red first row, and empty files carry a 0", async () => {
	await inOwnFolder();
	await type("Brand new");
	const rows = await page.evaluate(`return JSON.stringify([...document.querySelectorAll(".suggestion-item")].map((e) => ({ label: e.querySelector(".lure-suggest-label")?.textContent, creates: e.classList.contains("lure-suggest-creates"), enter: e.classList.contains("lure-suggest-enter") })));`).then(JSON.parse);
	expect("first row: the new file", rows[0]?.label, "Brand new.md");
	expect("red, and the one Enter acts on", rows[0]?.creates && rows[0]?.enter, true);
	await shoot("create-row");
	await pressKey(page, "ctrl+a");
	await type("Cab");
	const empty = await page.evaluate(`
		const el = [...document.querySelectorAll(".suggestion-item")].find((e) => e.querySelector(".lure-suggest-label")?.textContent?.startsWith("Cabbage"));
		return !!el?.querySelector(".lure-suggest-empty");
	`);
	expect("the empty note is marked 0", empty, true);
});

test("typing a note's name in another case opens it rather than making a second", async () => {
	await inOwnFolder();
	await type("cabbage");
	await pressKey(page, "Enter");
	await settle(900);
	expect("the note that is there opens", await page.evaluate(`return app.workspace.getActiveFile()?.path ?? null;`), `${DIR}/Cabbage.md`);
	expect("and no lower-case twin is made", await page.evaluate(`return !!app.vault.getAbstractFileByPath(${JSON.stringify(`${DIR}/cabbage.md`)});`), false);
});

test("folders show what they hold, and several bars can stand on one row", async () => {
	await page.evaluate(`if (!app.vault.getAbstractFileByPath(${JSON.stringify(`${DIR}/Cave`)})) await app.vault.createFolder(${JSON.stringify(`${DIR}/Cave`)}); await app.vault.create(${JSON.stringify(`${DIR}/Cave/inside.md`)}, ""); ${PAUSE(400)} return true;`);
	await inOwnFolder();
	await type("Cav");
	const row = await page.evaluate(`
		const el = [...document.querySelectorAll(".suggestion-item")].find((e) => e.querySelector(".lure-suggest-label")?.textContent === "Cave");
		const c = el?.querySelector(".lure-suggest-count");
		return JSON.stringify(el ? { count: c ? "+" + c.dataset.count : null } : null);
	`).then(JSON.parse);
	expect("the folder's count", row?.count, "+1");
	await pressKey(page, "ctrl+a");
	await type("Cake");
	const bars = await page.evaluate(`
		const el = [...document.querySelectorAll(".suggestion-item")].find((e) => e.querySelector(".lure-suggest-label")?.textContent === "Cake.md");
		return JSON.stringify(el ? [...el.querySelectorAll(".lure-bar")].filter((b) => getComputedStyle(b).display !== "none").map((b) => [...b.classList].find((c) => c.startsWith("lure-bar-"))) : null);
	`).then(JSON.parse);
	// The leading names carry no bar now (blue is for where you are only).
	expect("the open note's row: where you are and Enter's row, side by side", bars, (v) => Array.isArray(v) && ["lure-bar-current", "lure-bar-enter"].every((b) => v.includes(b)));
	await shoot("bars");
});

test("arrowing through the list never shows a name twice", async () => {
	for (const hidden of [false, true]) {
		await setSettings(page, { showFileExtension: !hidden });
		await page.evaluate(openNote);
		await page.evaluate(`app.workspace.getLeaf(false).view.containerEl.querySelector(".lure-filename-text").click(); ${PAUSE(500)} return true;`);
		const seen = [];
		for (let i = 0; i < 6; i++) {
			await pressKey(page, "ArrowDown");
			await settle(250);
			seen.push(JSON.parse(await page.evaluate(`return JSON.stringify([...document.querySelectorAll(".suggestion-item")].map((e) => (e.querySelector(".lure-suggest-label")?.textContent ?? "") + "|" + e.className.replace(/suggestion-item|mod-complex|lure-suggest-/g, "").trim()));`)));
		}
		const twice = seen.map((rows) => {
			const stems = rows.map((r) => r.split("|")[0].replace(/\.md$/, "").toLowerCase());
			return stems.filter((stem, i) => stems.indexOf(stem) !== i);
		});
		expect(`no name listed twice (extensions ${hidden ? "hidden" : "shown"})`, twice.flat(), []);
		if (twice.flat().length) console.log("    rows: " + JSON.stringify(seen.find((_, i) => twice[i].length)));
	}
	await setSettings(page, { showFileExtension: true });
});

test("a list opened by a click shows no red bar until something is typed or pressed", async () => {
	await page.evaluate(openNote);
	await page.evaluate(`app.workspace.getLeaf(false).view.containerEl.querySelector(".lure-filename-text").click(); ${PAUSE(500)} return true;`);
	expect("no row carries it", await page.evaluate(`return document.querySelectorAll(".suggestion-item.lure-suggest-enter").length;`), 0);
	await pressKey(page, "ArrowDown");
	await settle(300);
	expect("a key's highlight does", await page.evaluate(`return document.querySelectorAll(".suggestion-item.lure-suggest-enter").length;`), (v) => v <= 1);
});

test("an empty file's 0 sits at the bottom left of its icon", async () => {
	await inOwnFolder();
	await type("Cab");
	const where = await page.evaluate(`
		const el = [...document.querySelectorAll(".suggestion-item")].find((e) => e.querySelector(".lure-suggest-label")?.textContent?.startsWith("Cabbage"));
		const icon = el?.querySelector(".lure-suggest-has-kind");
		const zero = el?.querySelector(".lure-suggest-empty");
		if (!icon || !zero) return null;
		const a = icon.getBoundingClientRect(), b = zero.getBoundingClientRect();
		return JSON.stringify({ left: b.left < a.left + a.width / 2, bottom: b.bottom > a.top + a.height / 2 });
	`);
	expect("left and bottom of the icon", where && JSON.parse(where), { left: true, bottom: true });
	await shoot("empty-zero");
});

test("with extensions hidden the path bar ends in the file's badge", async () => {
	await setSettings(page, { showFileExtension: false });
	try {
		await page.evaluate(openNote);
		const r = await page.evaluate(`
			const root = app.workspace.getLeaf(false).view.containerEl.querySelector(".view-header-title-container");
			const badge = root?.querySelector(".lure-filename-badge");
			if (!badge) return null;
			const a = badge.getBoundingClientRect(), b = root.getBoundingClientRect(), name = root.querySelector(".lure-filename-text").getBoundingClientRect();
			return JSON.stringify({ text: badge.textContent, nearRight: b.right - a.right < 40, gap: a.left - name.right });
		`).then((v) => v && JSON.parse(v));
		expect("the badge is there", r?.text, ".md");
		expect("at the row's right-hand end", r?.nearRight, true);
		await shoot("path-bar-badge");
	} finally {
		await setSettings(page, { showFileExtension: true });
	}
});

test("with an offer standing, the list does not offer to make the typed letters", async () => {
	await inOwnFolder();
	await type("Cabb");
	const rows = await page.evaluate(`return JSON.stringify([...document.querySelectorAll(".suggestion-item")].map((e) => ({ label: e.querySelector(".lure-suggest-label")?.textContent, creates: e.classList.contains("lure-suggest-creates"), enter: e.classList.contains("lure-suggest-enter") })));`).then(JSON.parse);
	expect("no would-create row", rows.some((r) => r.creates), false);
	expect("Enter's row is the one the offer completes", rows.filter((r) => r.enter).map((r) => r.label), ["Cabbage.md"]);
});

test("the settings come in groups, with a way back to the defaults", async () => {
	const r = await page.evaluate(`
		const tab = (app.setting.pluginTabs ?? []).find((t) => t.id === "lure");
		const defs = tab.getSettingDefinitions();
		return JSON.stringify({ groups: defs.filter((d) => d.type === "group").length, restore: JSON.stringify(defs).length > 0 && defs.some((d) => d.type === "group" && (d.items ?? []).some((i) => typeof i.render === "function" && i.name && /default/i.test(i.name))) });
	`).then(JSON.parse);
	expect("several groups", r.groups >= 5, true);
	expect("a restore row among them", r.restore, true);
});

test("a folder typed in another case is stepped into, not made again", async () => {
	await page.evaluate(`if (!app.vault.getAbstractFileByPath(${JSON.stringify(`${DIR}/Cave`)})) await app.vault.createFolder(${JSON.stringify(`${DIR}/Cave`)}); ${PAUSE(300)} return true;`);
	await inOwnFolder();
	await type("cave");
	await pressKey(page, "/");
	await settle(400);
	const chip = (await look()).chips.at(-1);
	expect("the chip is the folder as it is spelled", chip?.text, "Cave");
	expect("and not red", chip?.missing, false);
});

await run();
