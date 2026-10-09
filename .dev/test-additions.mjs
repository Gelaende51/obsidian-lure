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

test("the list's edge is red while Enter would make the typed name", async () => {
	await inOwnFolder();
	// Found inside a name, not at its start: the list has a row, nothing is
	// offered or highlighted, and Enter would make "bbag".
	await type("bbag");
	const r = await look();
	expect("a row is listed", r.rows.some((row) => row.label?.startsWith("Cabbage")), true);
	expect("and the edge is red", r.creates, true);
	await shoot("creates-edge-red");
	await pressKey(page, "ArrowDown");
	await settle();
	expect("a row highlighted: no red edge", (await look()).creates, false);
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

await run();
