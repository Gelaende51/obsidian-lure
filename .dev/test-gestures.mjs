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
	// Sorts before leaf.md, so "the dropdown opens on the file you are on"
	// and "hovering shows a different entry" both have something to prove:
	// in a folder of one, row zero is the answer by accident.
	await app.vault.create("${ROOT}/inner/aside.md", "# aside");
	// For the fitting: two folders that share a long prefix (so neither may
	// be cut short enough to be mistaken for the other) and, below them, a
	// folder with nothing like it (so it may go down to one letter).
	await mk("${ROOT}/aaaa-common-one");
	await mk("${ROOT}/aaaa-common-two");
	await mk("${ROOT}/aaaa-common-one/unmistakable");
	await app.vault.create("${ROOT}/aaaa-common-one/unmistakable/leaf.md", "# deep");
	// A file name long enough to be worth cutting, for the stage that is
	// only reached once every folder is at its floor.
	await app.vault.create("${ROOT}/aaaa-common-one/unmistakable/a very long note name indeed.md", "# long");
	// A folder to type *into* from a clicked segment, with a sibling that
	// shares its first letter so filtering has something to do.
	await mk("${ROOT}/branch");
	await mk("${ROOT}/brioche");
	await mk("${ROOT}/branch/twig");
	await app.vault.create("${ROOT}/branch/twig/nest.md", "# nest");
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
		${PAUSE(900)}
		return {
			// Creating inside the vault no longer asks; the modifier's job is
			// only to decide *where* it opens.
			title: document.querySelector(".modal-title")?.textContent ?? null,
			tabs: app.workspace.getLeavesOfType("markdown").length,
			active: app.workspace.getActiveFile()?.path ?? null,
		};
	`);
	expect("no prompt in the way", out.title, null);
	expect("in a second tab", out.tabs, 2);
	expect("showing the new note", out.active, `${ROOT}/made-by-ctrl-enter.md`);
});

// --------------------------------------------------------------- dropdown

/** Opens the dropdown on the note's own name, the ordinary way in. */
const openDropdown = `
	const c = app.workspace.getMostRecentLeaf().view.containerEl
		.querySelector(".view-header-title-container");
	c.querySelector(".lure-filename-text").dispatchEvent(new MouseEvent("click", { bubbles: true }));
	${PAUSE(500)}
	return true;
`;

const dropdownState = `
	const c = app.workspace.getMostRecentLeaf().view.containerEl
		.querySelector(".view-header-title-container");
	const rows = [...document.querySelectorAll(".suggestion-item")];
	return {
		rows: rows.map((e) => e.textContent),
		selected: rows.findIndex((e) => e.classList.contains("is-selected")),
		field: c.querySelector("input")?.value ?? null,
	};
`;

test("dropdown: opens on the file you are on, not the first row", async () => {
	await page.evaluate(buildVaultFixture);
	await page.evaluate(openVaultNote);
	await page.evaluate(openDropdown);
	const s = await page.evaluate(dropdownState);
	// The listing is the folder's contents, and "leaf.md" is not first in it
	// — Obsidian opens every suggester on row zero, which in a folder of two
	// hundred notes is nowhere near where you are.
	expect("the current file is selected", s.rows[s.selected], "leaf.md");
});

test("dropdown: arrowing previews into the field, and up past the top gives it back", async () => {
	await page.evaluate(buildVaultFixture);
	await page.evaluate(openVaultNote);
	await page.evaluate(openDropdown);
	const start = await page.evaluate(dropdownState);

	await pressKey(page, "ArrowDown");
	await page.evaluate(PAUSE(250) + "return true;");
	const moved = await page.evaluate(dropdownState);
	expect("the field shows where you are pointing", moved.field, moved.rows[moved.selected]);
	// The listing must not re-filter to what it just wrote into the field,
	// or the next press moves through a different list than the one on screen.
	expect("the list is unchanged", moved.rows, start.rows);

	// Up off the top row lets go of the list and puts back what was typed.
	for (let i = 0; i <= moved.selected; i++) {
		await pressKey(page, "ArrowUp");
		await page.evaluate(PAUSE(150) + "return true;");
	}
	const released = await page.evaluate(dropdownState);
	expect("nothing is selected", released.selected, -1);
	expect("and the typed text is back", released.field, start.field);

	// One more wraps to the bottom, as it always did.
	await pressKey(page, "ArrowUp");
	await page.evaluate(PAUSE(200) + "return true;");
	const wrapped = await page.evaluate(dropdownState);
	expect("the next press wraps to the end", wrapped.selected, wrapped.rows.length - 1);
});

test("dropdown: hovering previews, and taking the pointer off restores", async () => {
	await page.evaluate(buildVaultFixture);
	await page.evaluate(openVaultNote);
	await page.evaluate(openDropdown);
	const out = await page.evaluate(`
		const bc = app.plugins.plugins.lure.manager.instances.get(app.workspace.getMostRecentLeaf());
		const c = app.workspace.getMostRecentLeaf().view.containerEl
			.querySelector(".view-header-title-container");
		const list = bc.suggest.suggestions;
		const typed = c.querySelector("input").value;
		[...document.querySelectorAll(".suggestion-item")]
			.find((e) => e.textContent !== typed)
			.dispatchEvent(new MouseEvent("mousemove", { bubbles: true }));
		${PAUSE(250)}
		const hovered = c.querySelector("input").value;
		list.containerEl.dispatchEvent(new MouseEvent("mouseleave"));
		${PAUSE(250)}
		return { typed, hovered, restored: c.querySelector("input").value, selected: list.selectedItem };
	`);
	expect("hovering fills the field", out.hovered, (v) => v !== out.typed && typeof v === "string");
	expect("leaving the list restores it", out.restored, out.typed);
	expect("and lets go of the row", out.selected, -1);
});

test("creating a note inside the vault does not ask", async () => {
	await page.evaluate(buildVaultFixture);
	await page.evaluate(openVaultNote);
	const out = await page.evaluate(`
		const bc = app.plugins.plugins.lure.manager.instances.get(app.workspace.getMostRecentLeaf());
		// Relative, because the field is: it resolves against the folder the
		// row is standing in, which here is ${ROOT}/inner.
		const at = app.vault.getAbstractFileByPath("${ROOT}/inner/silent/made.md");
		if (at) await app.fileManager.trashFile(at);
		${PAUSE(200)}
		document.querySelectorAll(".notice").forEach((n) => n.remove());
		await bc.handleTypedSubmit("silent/made.md", false);
		${PAUSE(900)}
		return {
			modal: document.querySelector(".modal-title")?.textContent ?? null,
			created: !!app.vault.getAbstractFileByPath("${ROOT}/inner/silent/made.md"),
			active: app.workspace.getActiveFile()?.path ?? null,
			// The notice is what replaced the prompt: it says where the file
			// went, which the prompt was the only other thing telling you.
			notices: [...document.querySelectorAll(".notice")].map((n) => n.textContent),
		};
	`);
	expect("no prompt", out.modal, null);
	expect("the note is there", out.created, true);
	expect("and open", out.active, `${ROOT}/inner/silent/made.md`);
	expect("with a notice for the note and its folder", out.notices.length, 2);
});

test("dropdown: typing after a folder click filters instead of closing", async () => {
	await page.evaluate(buildVaultFixture);
	await page.evaluate(`
		for (const type of ["markdown", "lure-external-file", "empty"]) {
			app.workspace.getLeavesOfType(type).forEach((l) => l.detach());
		}
		${PAUSE(300)}
		await app.workspace.getLeaf(false)
			.openFile(app.vault.getAbstractFileByPath("${ROOT}/branch/twig/nest.md"));
		${PAUSE(600)}
		const c = app.workspace.getMostRecentLeaf().view.containerEl
			.querySelector(".view-header-title-container");
		[...c.querySelectorAll(".view-header-title-parent .view-header-breadcrumb")]
			.find((e) => e.textContent === "branch")
			.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		${PAUSE(500)}
		return true;
	`);
	const armed = await page.evaluate(dropdownState);
	// The click leaves the whole tail in the field with the folder selected.
	expect("the tail is in the field", armed.field, "branch/twig/nest.md");

	// Typed over that selection: the field becomes "br" + the tail, and the
	// query is only the segment being edited. Filtering by the whole value
	// looked for a child called "br/twig/nest.md", matched nothing, and shut
	// the dropdown on the first keystroke — the reported bug.
	await page.send("Input.insertText", { text: "br" });
	await page.evaluate(PAUSE(400) + "return true;");
	const typed = await page.evaluate(dropdownState);
	expect("the segment was replaced", typed.field, "br/twig/nest.md");
	expect("the dropdown is still up", typed.rows.length > 0, true);
	expect("filtered by that segment alone", typed.rows, (v) =>
		Array.isArray(v) && v.includes("branch") && v.includes("brioche") && !v.includes("inner"));

	// And a name that matches nothing still closes it, as an empty list must.
	await page.send("Input.insertText", { text: "zzz" });
	await page.evaluate(PAUSE(400) + "return true;");
	const missed = await page.evaluate(dropdownState);
	expect("no matches, no list", missed.rows, []);
});

test("dropdown: renaming a note keeps the list, extension and all", async () => {
	await page.evaluate(buildVaultFixture);
	await page.evaluate(openVaultNote);
	await page.evaluate(openDropdown);
	const armed = await page.evaluate(dropdownState);
	expect("the name is in the field", armed.field, "leaf.md");

	// Clicking a note's name selects the stem and leaves ".md" behind it, so
	// one keystroke makes the field read "a.md". Filtering by that looked for
	// a child whose name contained "a.md" — nothing does, and the list closed
	// on the first keystroke of an ordinary rename.
	await page.send("Input.insertText", { text: "a" });
	await page.evaluate(PAUSE(400) + "return true;");
	const typed = await page.evaluate(dropdownState);
	expect("the extension survived", typed.field, "a.md");
	expect("the list is still up", typed.rows.length > 0, true);
	expect("filtered by the stem alone", typed.rows, (v) => Array.isArray(v) && v.includes("aside.md"));

	// Put the caret past the dot and the extension counts like any other
	// text: nothing here is called "a.mdx".
	const after = await page.evaluate(`
		const input = document.querySelector(".view-header-title-container input");
		input.setSelectionRange(input.value.length, input.value.length);
		return true;
	`);
	void after;
	await page.send("Input.insertText", { text: "x" });
	await page.evaluate(PAUSE(400) + "return true;");
	const past = await page.evaluate(dropdownState);
	expect("the extension is now part of the query", past.rows, []);
});

test("dropdown: a preview swaps one step and leaves the rest of the path", async () => {
	await page.evaluate(buildVaultFixture);
	await page.evaluate(`
		for (const type of ["markdown", "lure-external-file", "empty"]) {
			app.workspace.getLeavesOfType(type).forEach((l) => l.detach());
		}
		${PAUSE(300)}
		await app.workspace.getLeaf(false)
			.openFile(app.vault.getAbstractFileByPath("${ROOT}/branch/twig/nest.md"));
		${PAUSE(600)}
		const c = app.workspace.getMostRecentLeaf().view.containerEl
			.querySelector(".view-header-title-container");
		[...c.querySelectorAll(".view-header-title-parent .view-header-breadcrumb")]
			.find((e) => e.textContent === "branch")
			.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		${PAUSE(500)}
		const input = c.querySelector("input");
		return { field: input.value, selected: input.value.slice(input.selectionStart, input.selectionEnd) };
	`);

	await pressKey(page, "ArrowDown");
	await page.evaluate(PAUSE(300) + "return true;");
	const moved = await page.evaluate(`
		const input = document.querySelector(".view-header-title-container input");
		const rows = [...document.querySelectorAll(".suggestion-item")];
		return {
			field: input.value,
			selected: input.value.slice(input.selectionStart, input.selectionEnd),
			row: rows[rows.findIndex((e) => e.classList.contains("is-selected"))]?.textContent ?? null,
		};
	`);
	// One step swapped, the rest of the path left alone: pointing at a folder
	// asks "what if this step were that one", not "throw the path away".
	expect("only the step changed", moved.field, `${moved.row}/twig/nest.md`);
	expect("and it is the part selected", moved.selected, moved.row);

	// Stepping off the list gives back the text *and* the selection: without
	// the selection the next keystroke appends instead of replacing. The
	// list opened partway down it, so walk up until it lets go rather than
	// assuming how far that is.
	for (let i = 0; i < 12; i++) {
		const at = await page.evaluate(`
			return [...document.querySelectorAll(".suggestion-item")]
				.findIndex((e) => e.classList.contains("is-selected"));
		`);
		if (at < 0) break;
		await pressKey(page, "ArrowUp");
		await page.evaluate(PAUSE(150) + "return true;");
	}
	const released = await page.evaluate(`
		const input = document.querySelector(".view-header-title-container input");
		return {
			field: input.value,
			selected: input.value.slice(input.selectionStart, input.selectionEnd),
		};
	`);
	expect("the path is back", released.field, "branch/twig/nest.md");
	expect("with the segment still picked out", released.selected, "branch");
});

// ------------------------------------------------------------- long paths

test("the vault name opens the path in full, with the place selected", async () => {
	await page.evaluate(buildVaultFixture);
	const out = await page.evaluate(`
		for (const type of ["markdown", "lure-external-file", "empty"]) {
			app.workspace.getLeavesOfType(type).forEach((l) => l.detach());
		}
		${PAUSE(300)}
		await app.workspace.getLeaf(false)
			.openFile(app.vault.getAbstractFileByPath("${ROOT}/inner/leaf.md"));
		${PAUSE(400)}
		const c = app.workspace.getLeavesOfType("markdown")[0].view.containerEl
			.querySelector(".view-header-title-container");
		c.querySelector(".lure-vault-segment")
			.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		${PAUSE(400)}
		const input = c.querySelector("input");
		return {
			value: input?.value ?? null,
			selected: input ? input.value.slice(input.selectionStart, input.selectionEnd) : null,
			rows: document.querySelectorAll(".suggestion-item").length,
		};
	`);
	// The row is cleared to make room for the field, so what it was showing
	// has to survive inside it — otherwise a glance at another place costs
	// you the path you were on.
	expect("the whole path, written out", out.value, `${app.vaultPath}/${ROOT}/inner/leaf.md`);
	expect("with the place selected", out.selected, app.vaultPath);
	// The prefill must not double as the query, or the list the click just
	// opened would filter itself down to nothing.
	expect("and the places still listed", out.rows, (v) => v > 0);
	await pressKey(page, "Escape");
});

/**
 * Opens a file and splits the pane down, which is where fitting starts to
 * bite: two splits leaves roughly a third of the window, three a quarter.
 */
const narrowPane = (name, splits) => `
	for (const type of ["markdown", "lure-external-file", "empty"]) {
		app.workspace.getLeavesOfType(type).forEach((l) => l.detach());
	}
	${PAUSE(300)}
	const target = app.vault.getAbstractFileByPath("${ROOT}/aaaa-common-one/unmistakable/${name}");
	await app.workspace.getLeaf(false).openFile(target);
	${PAUSE(400)}
	for (let i = 0; i < ${splits}; i++) {
		await app.workspace.getLeaf("split", "vertical").openFile(target);
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
		root: c.querySelector(".lure-root-name")?.textContent ?? null,
		names: [...c.querySelectorAll(".view-header-title-parent .view-header-breadcrumb")].map((e) => e.textContent),
		file: c.querySelector(".lure-filename-text")?.textContent ?? null,
		lines: Math.round(c.querySelector(".lure-filename-text")?.getBoundingClientRect().height ?? 0),
	};
`;

/** Characters still on screen, ellipsis aside. */
const kept = (text) => text.replace("…", "").length;
const isCut = (text) => text.endsWith("…");

test("long paths: the vault name gives way before any folder", async () => {
	await page.evaluate(buildVaultFixture);
	await page.evaluate(narrowPane("leaf.md", 1));
	const row = await page.evaluate(rowState);
	expect("something had to give", row.width < row.content || row.root !== app.vaultName, true);
	// Whatever the window happens to be, the order holds: no folder is
	// touched while the opening segment still has characters to spend.
	if (row.names.some(isCut)) {
		expect("the vault name is down to its icon", row.root, "");
	} else {
		expect("only the vault name has been cut", isCut(row.root ?? ""), true);
	}
});

test("long paths: a name is cut only to where it stays distinguishable", async () => {
	await page.evaluate(buildVaultFixture);
	await page.evaluate(narrowPane("leaf.md", 2));
	const row = await page.evaluate(rowState);
	// Its sibling is "aaaa-common-two", so twelve characters would make the
	// two the same word; the cut has to stop at thirteen.
	const shared = row.names.find((n) => n.startsWith("aaaa"));
	expect("the shared prefix survives", shared, (v) => typeof v === "string" && v.startsWith("aaaa-common-o"));
	// "unmistakable" is one character longer than "GestureTest" and has
	// nothing resembling it either, so the cap reaches it first and it can
	// never be the one left longer.
	const outer = row.names[0] ?? "";
	const inner = row.names[2] ?? "";
	expect("the longer name pays at least as much", "GestureTest".length - kept(outer) <= "unmistakable".length - kept(inner), true);
	expect("no folder is ground below four letters", row.names.every((n) => kept(n) >= 4), true);
	expect("the file's own name is untouched", row.file, "leaf");
});

test("long paths: the file's name is the last thing cut, and keeps eight letters", async () => {
	await page.evaluate(buildVaultFixture);
	await page.evaluate(narrowPane("a very long note name indeed.md", 2));
	const row = await page.evaluate(rowState);
	expect("it was cut", isCut(row.file ?? ""), true);
	expect("but not below eight letters", kept(row.file ?? ""), (v) => v >= 8);
	// Only after everything cheaper: the vault name is gone and every
	// folder is at the floor its siblings and the four-letter minimum leave.
	expect("the vault name went first", row.root, "");
	expect("and the folders are at their floor", row.names.every(isCut), true);
});

test("long paths: the row scrolls rather than cutting past the floor", async () => {
	await page.evaluate(buildVaultFixture);
	await page.evaluate(narrowPane("leaf.md", 2));
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
