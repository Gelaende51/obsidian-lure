#!/usr/bin/env node
/**
 * Behavioural tests for what a press on the path bar does: the right-click
 * gesture table, Escape, and the two keyboard entry points that walk the
 * selection ladder.
 *
 * These are the paths with no visible affordance — nothing on the row says
 * that three presses copy a system path — so they are exactly the ones that
 * can rot without anyone noticing until a user reports it. The reports that
 * prompted this suite were: a right-click on a folder outside the vault
 * opening a new tab instead of a menu, and Escape needing two presses.
 *
 *   node .dev/test-gestures.mjs          # all
 *   node .dev/test-gestures.mjs escape   # only tests whose name matches
 *
 * Requires --remote-debugging-port=9222 and OBSIDIAN_VAULT set.
 */

import { connect, PAUSE, pressKey, reloadPlugin } from "./cdpSession.mjs";
import { mkdirSync, rmSync, writeFileSync } from "fs";
import { join } from "path";

const ROOT = "GestureTest";
/** Outside every vault, for the half of the table that only exists out there. */
const EXT = `${process.env.HOME}/lure-gesture-fixtures`;

const results = [];
const tests = [];
const test = (name, fn) => tests.push({ name, fn });
const expect = (label, actual, wanted) => {
	const ok = typeof wanted === "function" ? wanted(actual) : JSON.stringify(actual) === JSON.stringify(wanted);
	results.push({ ok, label, actual: ok ? "" : JSON.stringify(actual) });
};

const page = await connect();
await reloadPlugin(page);

const buildVaultFixture = `
	const mk = async (p) => { if (!app.vault.getAbstractFileByPath(p)) await app.vault.createFolder(p); };
	const existing = app.vault.getAbstractFileByPath("${ROOT}");
	if (existing) await app.vault.adapter.rmdir("${ROOT}", true);
	${PAUSE(200)}
	await mk("${ROOT}");
	await mk("${ROOT}/inner");
	await app.vault.create("${ROOT}/inner/leaf.md", "# leaf");
	// For the fitting: two folders that share a long prefix (so neither may
	// be cut short enough to be mistaken for the other) and, below them, a
	// folder with nothing like it (so it may go down to one letter).
	await mk("${ROOT}/aaaa-common-one");
	await mk("${ROOT}/aaaa-common-two");
	await mk("${ROOT}/aaaa-common-one/unmistakable");
	await app.vault.create("${ROOT}/aaaa-common-one/unmistakable/leaf.md", "# deep");
	${PAUSE(300)}
	return true;
`;

function buildExternalFixture() {
	rmSync(EXT, { recursive: true, force: true });
	mkdirSync(join(EXT, "outer", "inner"), { recursive: true });
	writeFileSync(join(EXT, "outer", "inner", "leaf.md"), "# external leaf\n");
	return "return true;";
}

/** The one pane everything here acts on, showing a vault note three levels down. */
const openVaultNote = `
	for (const type of ["markdown", "lure-external-file", "empty"]) {
		app.workspace.getLeavesOfType(type).forEach((l) => l.detach());
	}
	${PAUSE(300)}
	const leaf = app.workspace.getLeaf(false);
	await leaf.openFile(app.vault.getAbstractFileByPath("${ROOT}/inner/leaf.md"));
	${PAUSE(400)}
	return true;
`;

const openExternalNote = `
	for (const type of ["markdown", "lure-external-file", "empty"]) {
		app.workspace.getLeavesOfType(type).forEach((l) => l.detach());
	}
	${PAUSE(300)}
	const leaf = app.workspace.getLeaf(false);
	await leaf.setViewState({
		type: "lure-external-file", active: true,
		state: { path: "${EXT}/outer/inner/leaf.md" },
	});
	${PAUSE(500)}
	return true;
`;

/**
 * Fires a run of right-clicks at one target and returns what settled.
 *
 * What is asserted is the string the gesture *chose*, recorded by standing
 * in for `navigator.clipboard.writeText`, not what the desktop clipboard
 * ends up holding. Under CDP on Wayland the window does not reliably own
 * the selection, so a real read comes back empty however well the gesture
 * worked — which would make this suite fail for a reason that has nothing
 * to do with the plugin. The clipboard call itself is one line of Obsidian
 * API; which string reaches it is the part that can be wrong.
 *
 * Every press goes to the element the user would hit: `selector` is
 * resolved inside the pane, not in the document, so a second pane cannot
 * answer for the first.
 */
const rightClicks = (selector, count, atRightEdge = false) => `
	const c = app.workspace.getMostRecentLeaf().view.containerEl
		.querySelector(".view-header-title-container");
	const el = ${selector};
	if (!el) return { error: "no target for ${selector.replace(/"/g, "'")}" };
	const r = el.getBoundingClientRect();
	const x = ${atRightEdge ? "r.right - 4" : "r.left + r.width / 2"};
	const copied = [];
	const realWrite = navigator.clipboard.writeText.bind(navigator.clipboard);
	navigator.clipboard.writeText = async (text) => { copied.push(text); };
	for (let i = 0; i < ${count}; i++) {
		el.dispatchEvent(new MouseEvent("contextmenu", {
			bubbles: true, clientX: x, clientY: r.top + r.height / 2,
		}));
		${PAUSE(40)}
	}
	${PAUSE(500)}
	navigator.clipboard.writeText = realWrite;
	const menu = document.querySelector(".menu");
	const out = {
		clipboard: copied.length === 1 ? copied[0] : copied,
		menu: menu ? Array.from(menu.querySelectorAll(".menu-item-title")).map((e) => e.textContent) : null,
		tabs: app.workspace.getLeavesOfType("empty").length,
	};
	// Dismissed, not deleted. A Menu pushes its own keymap scope while it is
	// open, and pulling its element out of the DOM leaves that scope on the
	// stack — after which every real key press in the rest of the run goes
	// to a menu that is no longer on screen. That cost three later tests
	// before it was noticed.
	document.body.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
	${PAUSE(120)}
	document.querySelector(".menu")?.remove();
	return out;
`;

/** The row's own parts, by the classes the gesture classifier keys off. */
const VAULT_SEGMENT = `c.querySelector(".lure-vault-segment")`;
const FILENAME = `c.querySelector(".lure-filename-text")`;
/**
 * The gap right of the name. Under the default left alignment the name's
 * container is stretched across the rest of the row, so its own right-hand
 * edge is the empty space a user would press — pressing the container but
 * away from the text is exactly that.
 */
const EMPTY_SPACE = `c.querySelector(".lure-filename")`;
/** Presses land at the element's centre, so the empty box needs its far edge instead. */
const AT_RIGHT_EDGE = true;
const LAST_CHIP = `Array.from(c.querySelectorAll(".lure-browse-chip")).pop()`;
const NATIVE_SEGMENT = `c.querySelector(".view-header-title-parent .view-header-breadcrumb")`;

// ---------------------------------------------------------------- vault side

test("vault segment: two presses copy the vault name", async () => {
	await page.evaluate(openVaultNote);
	const out = await page.evaluate(rightClicks(VAULT_SEGMENT, 2));
	expect("clipboard", out.clipboard, app.vaultName);
});

test("vault segment: three presses copy the absolute path with extension", async () => {
	await page.evaluate(openVaultNote);
	const out = await page.evaluate(rightClicks(VAULT_SEGMENT, 3));
	expect("clipboard", out.clipboard, `${app.vaultPath}/${ROOT}/inner/leaf.md`);
});

test("empty space: two presses copy the vault path without the extension", async () => {
	await page.evaluate(openVaultNote);
	const out = await page.evaluate(rightClicks(EMPTY_SPACE, 2, AT_RIGHT_EDGE));
	expect("clipboard", out.clipboard, `${ROOT}/inner/leaf`);
});

test("empty space: three presses copy it with the extension", async () => {
	await page.evaluate(openVaultNote);
	const out = await page.evaluate(rightClicks(EMPTY_SPACE, 3, AT_RIGHT_EDGE));
	expect("clipboard", out.clipboard, `${ROOT}/inner/leaf.md`);
});

test("file name: two presses copy the name, three the name with extension", async () => {
	await page.evaluate(openVaultNote);
	const two = await page.evaluate(rightClicks(FILENAME, 2));
	expect("stem", two.clipboard, "leaf");
	const three = await page.evaluate(rightClicks(FILENAME, 3));
	expect("with extension", three.clipboard, "leaf.md");
});

test("folder segment: one press opens that folder's menu, not a new tab", async () => {
	await page.evaluate(openVaultNote);
	const before = await page.evaluate(`return app.workspace.getLeavesOfType("empty").length;`);
	const out = await page.evaluate(rightClicks(NATIVE_SEGMENT, 1));
	expect("a menu appeared", Array.isArray(out.menu) && out.menu.length > 0, true);
	expect("no tab was opened", out.tabs, before);
});

// ------------------------------------------------------------- external side

test("external chip: one press opens a menu rather than a new tab", async () => {
	await page.evaluate(openExternalNote);
	const before = await page.evaluate(`return app.workspace.getLeavesOfType("empty").length;`);
	const out = await page.evaluate(rightClicks(LAST_CHIP, 1));
	expect("a menu appeared", Array.isArray(out.menu) && out.menu.length > 0, true);
	// The bug this suite exists for: every chip classified as the vault
	// segment, whose single press runs "new tab".
	expect("no tab was opened", out.tabs, before);
});

test("external chip: two presses copy the folder name", async () => {
	await page.evaluate(openExternalNote);
	const out = await page.evaluate(rightClicks(LAST_CHIP, 2));
	expect("clipboard", out.clipboard, "inner");
});

test("external chip: three presses copy it with the rest of the row", async () => {
	await page.evaluate(openExternalNote);
	const out = await page.evaluate(rightClicks(LAST_CHIP, 3));
	expect("clipboard", out.clipboard, "inner/leaf.md");
});

test("external chip: clicking one keeps the path to its right", async () => {
	await page.evaluate(openExternalNote);
	const out = await page.evaluate(`
		const c = app.workspace.getMostRecentLeaf().view.containerEl
			.querySelector(".view-header-title-container");
		const chip = Array.from(c.querySelectorAll(".lure-browse-chip")).find((e) => e.textContent === "outer");
		chip.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		${PAUSE(300)}
		const input = c.querySelector("input");
		return {
			value: input?.value,
			selected: input?.value.slice(input.selectionStart, input.selectionEnd),
		};
	`);
	expect("whole tail in the field", out.value, "outer/inner/leaf.md");
	expect("only the folder selected", out.selected, "outer");
});

// ------------------------------------------------------------------- keyboard

test("escape closes the field and the dropdown in one press", async () => {
	await page.evaluate(openVaultNote);
	await page.evaluate(`
		const c = app.workspace.getMostRecentLeaf().view.containerEl
			.querySelector(".view-header-title-container");
		const r = c.getBoundingClientRect();
		c.dispatchEvent(new MouseEvent("click", { bubbles: true, clientX: r.right - 5, clientY: r.top + r.height / 2 }));
		${PAUSE(300)}
		return true;
	`);
	const open = await page.evaluate(`return {
		input: !!document.querySelector(".view-header-title-container input"),
		popover: !!document.querySelector(".suggestion-container"),
	};`);
	expect("field and dropdown are up", open, { input: true, popover: true });

	await pressKey(page, "Escape");
	await page.evaluate(PAUSE(200) + "return true;");
	const after = await page.evaluate(`return {
		input: !!document.querySelector(".view-header-title-container input"),
		popover: !!document.querySelector(".suggestion-container"),
	};`);
	expect("one press cleared both", after, { input: false, popover: false });
});

test("the rename key opens the name without its extension, then walks the path", async () => {
	await page.evaluate(openVaultNote);
	// First press goes to the inline title, second to the header bar.
	await pressKey(page, "F2");
	await page.evaluate(PAUSE(250) + "return true;");
	await pressKey(page, "F2");
	await page.evaluate(PAUSE(300) + "return true;");
	const first = await page.evaluate(`
		const input = document.querySelector(".view-header-title-container input");
		return { value: input?.value, selected: input?.value.slice(input.selectionStart, input.selectionEnd) };
	`);
	expect("the name is in the field", first.value, "leaf.md");
	expect("selected without the extension", first.selected, "leaf");

	await pressKey(page, "F2");
	await page.evaluate(PAUSE(300) + "return true;");
	const second = await page.evaluate(`
		const input = document.querySelector(".view-header-title-container input");
		return { value: input?.value, selected: input?.value.slice(input.selectionStart, input.selectionEnd) };
	`);
	expect("a further press takes the extension too", second.selected, "leaf.md");
});

test("the focus command selects the whole path, then walks on", async () => {
	await page.evaluate(openVaultNote);
	await page.evaluate(`app.commands.executeCommandById("lure:focus-path-bar");` + PAUSE(300) + "return true;");
	const first = await page.evaluate(`
		const input = document.querySelector(".view-header-title-container input");
		return { value: input?.value, selected: input?.value.slice(input.selectionStart, input.selectionEnd) };
	`);
	expect("whole vault path selected", first.selected, `${ROOT}/inner/leaf.md`);

	await page.evaluate(`app.commands.executeCommandById("lure:focus-path-bar");` + PAUSE(300) + "return true;");
	const second = await page.evaluate(`
		const input = document.querySelector(".view-header-title-container input");
		return { value: input?.value, selected: input?.value.slice(input.selectionStart, input.selectionEnd) };
	`);
	expect("the next rung is the system path", second.selected, `${app.vaultPath}/${ROOT}/inner/leaf.md`);
});

test("ctrl+enter creates the note in a new tab", async () => {
	await page.evaluate(openVaultNote);
	await page.evaluate(`
		app.commands.executeCommandById("lure:focus-path-bar");
		${PAUSE(400)}
		return true;
	`);
	// Typed for real, not assigned. Assigning leaves the dropdown showing the
	// prefill, and with it open the suggester's own scope answers Mod+Enter
	// by choosing the highlighted row — so the test would exercise the
	// dropdown rather than the field.
	await page.send("Input.insertText", { text: `${ROOT}/made-by-ctrl-enter.md` });
	await page.evaluate(PAUSE(300) + "return true;");
	// A real press: Obsidian binds Mod+Enter to "open link in new leaf" and
	// its keymap takes the key before the field can see it, so a synthetic
	// event would test a path no user can reach. The scope the field pushes
	// is what claims the key back — and what stops the editor underneath
	// opening whatever link its cursor was on.
	await pressKey(page, "ctrl+Enter");
	const out = await page.evaluate(`
		${PAUSE(600)}
		const title = document.querySelector(".modal-title")?.textContent ?? null;
		const buttons = [...document.querySelectorAll(".modal .lure-modal-buttons button")];
		buttons[buttons.length - 1]?.click();
		${PAUSE(900)}
		return {
			title,
			tabs: app.workspace.getLeavesOfType("markdown").length,
			active: app.workspace.getActiveFile()?.path ?? null,
		};
	`);
	expect("it offered to create", out.title, (v) => typeof v === "string" && v.length > 0);
	expect("in a second tab", out.tabs, 2);
	expect("showing the new note", out.active, `${ROOT}/made-by-ctrl-enter.md`);
});

// ------------------------------------------------------------- long paths

/** Splits the pane down to roughly a third, which is where fitting starts to bite. */
const narrowPane = `
	for (const type of ["markdown", "lure-external-file", "empty"]) {
		app.workspace.getLeavesOfType(type).forEach((l) => l.detach());
	}
	${PAUSE(300)}
	await app.workspace.getLeaf(false)
		.openFile(app.vault.getAbstractFileByPath("${ROOT}/aaaa-common-one/unmistakable/leaf.md"));
	${PAUSE(400)}
	for (let i = 0; i < 2; i++) {
		await app.workspace.getLeaf("split", "vertical")
			.openFile(app.vault.getAbstractFileByPath("${ROOT}/inner/leaf.md"));
		${PAUSE(400)}
	}
	app.plugins.plugins.lure.manager.refreshAll();
	${PAUSE(500)}
	return true;
`;

const rowState = `
	const c = app.workspace.getLeavesOfType("markdown")[0].view.containerEl
		.querySelector(".view-header-title-container");
	return {
		width: Math.round(c.clientWidth),
		content: c.scrollWidth,
		scrolls: c.classList.contains("lure-row-scrolls"),
		scrollLeft: Math.round(c.scrollLeft),
		names: [...c.querySelectorAll(".view-header-title-parent .view-header-breadcrumb")].map((e) => e.textContent),
		file: c.querySelector(".lure-filename-text")?.textContent ?? null,
		lines: Math.round(c.querySelector(".lure-filename-text")?.getBoundingClientRect().height ?? 0),
	};
`;

test("long paths: a name is cut only to where it stays distinguishable", async () => {
	await page.evaluate(buildVaultFixture);
	await page.evaluate(narrowPane);
	const row = await page.evaluate(rowState);
	// Its sibling is "aaaa-common-two", so twelve characters would make the
	// two the same word; the cut has to stop at thirteen.
	const shared = row.names.find((n) => n.startsWith("aaaa"));
	expect("the shared prefix survives", shared, (v) => typeof v === "string" && v.startsWith("aaaa-common-o"));
	// The outermost folder has nothing resembling it, so it has no
	// information to protect and gives way first and furthest — which is
	// also why the sibling pair below it still reads: cutting starts at the
	// end of the path you are least interested in.
	expect("a name with no lookalike gives way first", row.names[0],
		(v) => typeof v === "string" && v.length < "GestureTest".length);
	expect("the file's own name is untouched", row.file, "leaf");
});

test("long paths: the row scrolls rather than cutting past the floor", async () => {
	await page.evaluate(buildVaultFixture);
	await page.evaluate(narrowPane);
	const row = await page.evaluate(rowState);
	if (row.content > row.width) {
		expect("it scrolls", row.scrolls, true);
		// Parked at the end you are working at: the file, not the vault.
		expect("parked at the file end", row.scrollLeft, (v) => v >= row.content - row.width - 2);
	} else {
		expect("it fits, so no scrolling", row.scrolls, false);
	}
	// One line, whatever the width: a wrapped folder name reads as two names.
	expect("nothing wrapped", row.lines, (v) => v > 0 && v < 30);
});

// ---------------------------------------------------------------------- run

const app = {
	vaultName: await page.evaluate("return app.vault.getName();"),
	vaultPath: await page.evaluate("return app.vault.adapter.getBasePath();"),
};

await page.evaluate(buildVaultFixture);
buildExternalFixture();

const filter = process.argv[2];
for (const { name, fn } of tests) {
	if (filter && !name.includes(filter)) continue;
	const at = results.length;
	try {
		await fn();
	} catch (err) {
		results.push({ ok: false, label: `${name} — threw`, actual: err.message });
	}
	const failed = results.slice(at).filter((r) => !r.ok).length;
	console.log(`${failed ? "✗" : "✓"} ${name}`);
	for (const r of results.slice(at).filter((r) => !r.ok)) {
		console.log(`    ${r.label}: got ${r.actual}`);
	}
}

await page.evaluate(`
	const existing = app.vault.getAbstractFileByPath("${ROOT}");
	if (existing) await app.vault.adapter.rmdir("${ROOT}", true);
	return true;
`);
rmSync(EXT, { recursive: true, force: true });

const failed = results.filter((r) => !r.ok).length;
console.log(`\n${results.length - failed}/${results.length} assertions passed`);
page.close();
process.exit(failed ? 1 : 0);
