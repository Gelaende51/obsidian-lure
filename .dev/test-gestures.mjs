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

import { connect, PAUSE, pressKey, quiesce, reloadPlugin } from "./cdpSession.mjs";
import { createSuite } from "./harness.mjs";
import { mkdirSync, rmSync, writeFileSync } from "fs";
import { join } from "path";

const ROOT = "GestureTest";
/** Outside every vault, for the half of the table that only exists out there. */
const EXT = `${process.env.HOME}/lure-gesture-fixtures`;

const page = await connect();

/**
 * The state every case here starts from: this session's build, nothing left
 * open, the fixtures as they were declared, and the vault note on screen.
 *
 * The fixtures are rebuilt per case, not per run. Several cases here move,
 * rename, copy and delete the very files the others navigate — that is what
 * they are testing — so a fixture built once is a fixture that only the
 * cases declared before the first mutating one ever see intact. It cost a
 * shuffled run one failure to find: "middle presses paste" opened
 * `inner/leaf.md` after "moving a note" had moved it elsewhere, and read the
 * resulting empty pane as the feature misbehaving.
 *
 * The cases that work outside the vault open their own note over the top of
 * this one — cheaper than asking each case to declare which world it wants,
 * and it means the half that forgets to declare anything still starts
 * somewhere known rather than wherever the previous case finished.
 */
const { test, expect, run } = createSuite({
	reset: async () => {
		await reloadPlugin(page);
		await quiesce(page);
		await page.evaluate(buildVaultFixture);
		buildExternalFixture();
		await page.evaluate(openVaultNote);
	},
	teardown: async () => {
		await page.evaluate(`
			const existing = app.vault.getAbstractFileByPath("${ROOT}");
			if (existing) await app.vault.adapter.rmdir("${ROOT}", true);
			return true;
		`);
		rmSync(EXT, { recursive: true, force: true });
		page.close();
	},
});

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

test("vault segment: three presses copy where the vault is", async () => {
	await page.evaluate(openVaultNote);
	const out = await page.evaluate(rightClicks(VAULT_SEGMENT, 3));
	expect("clipboard", out.clipboard, app.vaultPath);
});

test("vault segment: four presses copy the absolute path with extension", async () => {
	await page.evaluate(openVaultNote);
	const out = await page.evaluate(rightClicks(VAULT_SEGMENT, 4));
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

test("empty space: four presses copy the path the machine knows", async () => {
	// The three counts say the same three things one, two and three *left*
	// presses select, so the two buttons agree: one shows them, the other
	// takes them.
	await page.evaluate(openVaultNote);
	const out = await page.evaluate(rightClicks(EMPTY_SPACE, 4, AT_RIGHT_EDGE));
	expect("clipboard", out.clipboard, `${app.vaultPath}/${ROOT}/inner/leaf.md`);
});

test("empty space: presses select the path, then its extension, then the machine's own", async () => {
	await page.evaluate(openVaultNote);
	/** Presses the empty space n times, as the browser counts them. */
	const clicks = (n) => `
		const c = app.workspace.getMostRecentLeaf().view.containerEl
			.querySelector(".view-header-title-container");
		const box = c.getBoundingClientRect();
		const x = box.right - 4, y = box.top + box.height / 2;
		let el = document.elementFromPoint(x, y) || c;
		for (let i = 1; i <= ${n}; i++) {
			el.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, detail: i, clientX: x, clientY: y }));
			${PAUSE(120)}
			el = document.querySelector(".lure-path-input") || el;
		}
		${PAUSE(250)}
		const input = document.querySelector(".lure-path-input");
		return {
			value: input ? input.value : null,
			selected: input ? input.value.slice(input.selectionStart, input.selectionEnd) : null,
		};
	`;

	const one = await page.evaluate(clicks(1));
	expect("one press takes the path without the extension", one.selected, `${ROOT}/inner/leaf`);
	expect("with the whole of it in front of you", one.value, `${ROOT}/inner/leaf.md`);

	await page.evaluate(openVaultNote);
	const two = await page.evaluate(clicks(2));
	expect("two take it with the extension", two.selected, `${ROOT}/inner/leaf.md`);

	await page.evaluate(openVaultNote);
	const three = await page.evaluate(clicks(3));
	expect("three take the path the machine knows", three.selected, `${app.vaultPath}/${ROOT}/inner/leaf.md`);
});

test("empty space: a held modifier opens the note again in a tab of its own", async () => {
	await page.evaluate(openVaultNote);
	const out = await page.evaluate(`
		const before = app.workspace.getLeavesOfType("markdown").length;
		const c = app.workspace.getMostRecentLeaf().view.containerEl
			.querySelector(".view-header-title-container");
		const box = c.getBoundingClientRect();
		const x = box.right - 4, y = box.top + box.height / 2;
		(document.elementFromPoint(x, y) || c).dispatchEvent(new MouseEvent("click", {
			bubbles: true, cancelable: true, detail: 1, ctrlKey: true, clientX: x, clientY: y,
		}));
		${PAUSE(900)}
		const after = app.workspace.getLeavesOfType("markdown");
		return {
			before,
			after: after.length,
			allTheSameNote: after.every((l) => l.view?.file?.path === "${ROOT}/inner/leaf.md"),
			noField: !document.querySelector(".lure-path-input"),
		};
	`);
	// Left open, the extra tab is the next suite's problem: several of them
	// count leaves.
	await page.evaluate(`
		app.workspace.getLeavesOfType("markdown").slice(1).forEach((l) => l.detach());
		${PAUSE(300)}
		return true;
	`);
	expect("a second tab is opened", out.after, out.before + 1);
	expect("holding the same note", out.allTheSameNote, true);
	// The modifier means "somewhere else", never "edit this" — so the press
	// must not also have opened the path for editing.
	expect("and the path is not opened for editing", out.noField, true);
});

test("empty space: middle presses paste, and make nothing", async () => {
	// The destructive shape of getting this wrong: the row's own path is
	// vault-relative, and handing it to the commit as it stands had it read
	// as relative to the folder the row was already in — so two presses on
	// `a/b/leaf.md` created `a/b/a/b/leaf.md`, folders and all, and opened
	// that. Real presses, dispatched by the browser: a synthetic MouseEvent
	// takes a different road through the counting and never showed this.
	await page.evaluate(openVaultNote);
	const spot = await page.evaluate(`
		const c = app.workspace.getMostRecentLeaf().view.containerEl
			.querySelector(".view-header-title-container");
		const b = c.getBoundingClientRect();
		return { x: Math.round(b.right - 6), y: Math.round(b.top + b.height / 2) };
	`);
	const press = async () => {
		for (const type of ["mousePressed", "mouseReleased"]) {
			await page.send("Input.dispatchMouseEvent", {
				type,
				x: spot.x,
				y: spot.y,
				button: "middle",
				buttons: type === "mousePressed" ? 4 : 0,
				clickCount: 1,
			});
		}
	};

	// Twice over: each press is a paste of its own now, and neither is a
	// commit — so nothing may be opened and nothing may be written.
	await press();
	await press();
	await page.evaluate(PAUSE(900) + "return true;");

	const out = await page.evaluate(`
		return {
			active: app.workspace.getActiveFile()?.path ?? null,
			doubled: !!app.vault.getAbstractFileByPath("${ROOT}/inner/${ROOT}"),
		};
	`);
	expect("the note you were on is still the note you are on", out.active, `${ROOT}/inner/leaf.md`);
	expect("and nothing was created on the way", out.doubled, false);
});

test("vault name: a held modifier opens a tab standing at the root", async () => {
	await page.evaluate(openVaultNote);
	const out = await page.evaluate(`
		const c = app.workspace.getMostRecentLeaf().view.containerEl
			.querySelector(".view-header-title-container");
		c.querySelector(".lure-vault-segment").dispatchEvent(new MouseEvent("click", {
			bubbles: true, cancelable: true, detail: 1, ctrlKey: true,
		}));
		${PAUSE(900)}
		const leaf = app.workspace.getMostRecentLeaf();
		const bc = app.plugins.plugins.lure.manager.instances.get(leaf);
		return {
			viewType: leaf.view?.getViewType?.() ?? null,
			browse: bc ? bc.browsePath : null,
			fieldOpen: !!leaf.view.containerEl.querySelector(".lure-path-input"),
			rows: document.querySelectorAll(".suggestion-item").length,
		};
	`);
	await page.evaluate(`
		document.querySelector(".lure-path-input")?.blur();
		document.body.click();
		${PAUSE(200)}
		app.workspace.getLeavesOfType("empty").forEach((l) => l.detach());
		${PAUSE(300)}
		return true;
	`);
	expect("the tab holds nothing yet", out.viewType, "empty");
	expect("and stands at the vault root", out.browse, "");
	expect("with the field open", out.fieldOpen, true);
	expect("and the root already listed", out.rows, (v) => v > 0);
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

	// Upwards, because the list opens on the file you are on and in this
	// fixture that is the last row — one press down would step off the
	// bottom into the field, which is its own test.
	await pressKey(page, "ArrowUp");
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

test("dropdown: walking down past the last row lets go of it too", async () => {
	await page.evaluate(buildVaultFixture);
	await page.evaluate(openVaultNote);
	await page.evaluate(openDropdown);
	const start = await page.evaluate(dropdownState);

	// Obsidian's own arithmetic takes an index past either end round to the
	// other, which made the list a ring you could only step out of upwards:
	// down off the bottom jumped to the first row and carried on.
	const walk = [];
	for (let i = 0; i < start.rows.length + 2; i++) {
		await pressKey(page, "ArrowDown");
		await page.evaluate(PAUSE(200) + "return true;");
		walk.push(await page.evaluate(dropdownState));
	}

	const letGo = walk.findIndex((s) => s.selected === -1);
	expect("walking down reaches the field", letGo, (v) => v >= 0);
	const before = letGo === 0 ? start.selected : walk[letGo - 1].selected;
	expect("stepping off the last row, not off anywhere else", before, start.rows.length - 1);
	expect("with the typed text back in the field", walk[letGo].field, start.field);
	expect("and the press after it starts at the first row again", walk[letGo + 1]?.selected, 0);
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
		const opened = list.selectedItem;
		[...document.querySelectorAll(".suggestion-item")]
			.find((e) => e.textContent !== typed)
			.dispatchEvent(new MouseEvent("mousemove", { bubbles: true }));
		${PAUSE(250)}
		const hovered = c.querySelector("input").value;
		list.containerEl.dispatchEvent(new MouseEvent("mouseleave"));
		${PAUSE(250)}
		return { typed, hovered, opened, restored: c.querySelector("input").value, selected: list.selectedItem };
	`);
	expect("hovering fills the field", out.hovered, (v) => v !== out.typed && typeof v === "string");
	expect("leaving the list restores it", out.restored, out.typed);
	// Not to nothing: the list opened on the file you are on, and a sweep of
	// the pointer across it is not a way of losing that.
	expect("and hands the row back to where you are", out.selected, out.opened);
});

test("dropdown: the pointer leaving gives back the row you arrowed to", async () => {
	await page.evaluate(buildVaultFixture);
	await page.evaluate(openVaultNote);
	await page.evaluate(openDropdown);
	// Upwards for the same reason as above: down off the last row lets go of
	// the list, and this test needs a row to have been arrowed to.
	await pressKey(page, "ArrowUp");
	await page.evaluate(PAUSE(250) + "return true;");
	const moved = await page.evaluate(dropdownState);
	expect("arrowing moves off the row the list opened on", moved.selected, (v) => v >= 0);

	const out = await page.evaluate(`
		const bc = app.plugins.plugins.lure.manager.instances.get(app.workspace.getMostRecentLeaf());
		const c = app.workspace.getMostRecentLeaf().view.containerEl
			.querySelector(".view-header-title-container");
		const list = bc.suggest.suggestions;
		const arrowed = list.selectedItem;
		const rows = [...document.querySelectorAll(".suggestion-item")];
		rows[arrowed === 0 ? rows.length - 1 : 0]
			.dispatchEvent(new MouseEvent("mousemove", { bubbles: true }));
		${PAUSE(250)}
		const hovered = list.selectedItem;
		list.containerEl.dispatchEvent(new MouseEvent("mouseleave"));
		${PAUSE(250)}
		return { arrowed, hovered, after: list.selectedItem, field: c.querySelector("input").value };
	`);
	expect("the pointer takes the highlight while it is over the list", out.hovered, (v) => v !== out.arrowed);
	expect("and gives it back on the way out", out.after, out.arrowed);
	// That row had written itself into the field, so it is written again —
	// the field and the highlight have to agree.
	expect("with what it was showing", out.field, moved.field);
});

test("Enter with nothing named says so instead of closing the row", async () => {
	// Standing in an empty folder there is nothing to complete and nothing
	// to open, and Enter used to close the row exactly as though something
	// had been chosen — the one thing that had not happened. It says so now,
	// and leaves the field up so the path can be finished.
	await page.evaluate(buildVaultFixture);
	await page.evaluate(openVaultNote);
	const out = await page.evaluate(`
		await app.vault.createFolder("${ROOT}/hollow");
		${PAUSE(300)}
		const bc = app.plugins.plugins.lure.manager.instances.get(app.workspace.getMostRecentLeaf());
		bc.startBrowsingAt("${ROOT}/hollow");
		${PAUSE(500)}
		document.querySelectorAll(".notice").forEach((n) => n.remove());
		const before = app.workspace.getActiveFile()?.path ?? null;
		const input = document.querySelector(".lure-path-input");
		if (!input) return { armed: false };
		input.focus();
		return {
			armed: true,
			before,
			empty: input.value === "",
			rows: document.querySelectorAll(".suggestion-item").length,
		};
	`);
	expect("the field opens in the empty folder", out.armed, true);
	expect("with nothing in it", out.empty, true);
	expect("and nothing to complete to", out.rows, 0);

	await pressKey(page, "Enter");
	await page.evaluate(PAUSE(700) + "return true;");
	const after = await page.evaluate(`
		const input = document.querySelector(".lure-path-input");
		return {
			notices: [...document.querySelectorAll(".notice")].map((n) => n.textContent),
			stillOpen: input !== null,
			value: input ? input.value : null,
			active: app.workspace.getActiveFile()?.path ?? null,
		};
	`);
	expect("the press says nothing was selected", after.notices.length, 1);
	expect("in words, whatever the language", after.notices[0], (v) => typeof v === "string" && v.trim().length > 0);
	expect("nothing was opened", after.active, out.before);
	expect("and the field is still there to finish", after.stillOpen, true);
	expect("still empty", after.value, "");
});

/** Opens the file explorer, so revealing into it has somewhere to reveal to. */
const openExplorer = `
	if (app.workspace.getLeavesOfType("file-explorer").length === 0) {
		await app.workspace.getLeftLeaf(false).setViewState({ type: "file-explorer" });
		${PAUSE(400)}
	}
	return true;
`;

/** How many rows the explorer is showing for a path — 0 while its folder is shut. */
const rowsFor = (path) =>
	`return document.querySelectorAll('.nav-file-title[data-path=' + JSON.stringify(${JSON.stringify(path)}) + ']').length;`;

test("moving a note shows it where it now lives", async () => {
	// The tree is where you look for a note afterwards, so that is where it
	// is put in front of you — rather than left somewhere you have to go and
	// find, inside a folder that may not even be open.
	await page.evaluate(buildVaultFixture);
	await page.evaluate(openExplorer);
	await page.evaluate(openVaultNote);
	const before = await page.evaluate(rowsFor(`${ROOT}/inner/sub/moved.md`));
	expect("nothing there to begin with", before, 0);

	const out = await page.evaluate(`
		const bc = app.plugins.plugins.lure.manager.instances.get(app.workspace.getMostRecentLeaf());
		document.querySelector(".lure-rename-btn").click();
		${PAUSE(400)}
		await bc.handleTypedSubmit("sub/moved.md");
		${PAUSE(250)}
		// Read here, not in a later round trip: the marking is a flash, and
		// it is gone within the second.
		const row = document.querySelector('.nav-file-title[data-path="${ROOT}/inner/sub/moved.md"]');
		return {
			moved: !!app.vault.getAbstractFileByPath("${ROOT}/inner/sub/moved.md"),
			gone: !app.vault.getAbstractFileByPath("${ROOT}/inner/leaf.md"),
			flashing: row ? row.classList.contains("lure-flash") : false,
		};
	`);
	expect("the note is moved", out.moved, true);
	expect("and no longer where it was", out.gone, true);
	expect("its row is showing in the tree", await page.evaluate(rowsFor(`${ROOT}/inner/sub/moved.md`)), 1);
	// And marked in the accent — the note is still the one you are on, so
	// nothing else about the row would have changed to say a write had
	// happened at all. Obsidian's own reveal marking is taken off when ours
	// goes on: it is an animation, so it would win the cascade otherwise.
	expect("and marked there", out.flashing, true);
});

test("duplicating a note says where the copy went, and shows it in the tree", async () => {
	// A copy is the one write here that leaves the row showing something
	// other than what it just did: the original stays put and the copy opens
	// in its own pane. Without a word it is easy to believe nothing happened.
	await page.evaluate(buildVaultFixture);
	await page.evaluate(openExplorer);
	await page.evaluate(openVaultNote);
	await page.evaluate(`document.querySelectorAll(".notice").forEach((n) => n.remove()); return true;`);
	const before = await page.evaluate(rowsFor(`${ROOT}/inner/sub/copy.md`));
	expect("nothing there to begin with", before, 0);

	const out = await page.evaluate(`
		const bc = app.plugins.plugins.lure.manager.instances.get(app.workspace.getMostRecentLeaf());
		document.querySelector(".lure-rename-btn").click();
		${PAUSE(400)}
		// The held modifier is what turns the move into a copy.
		await bc.handleTypedSubmit("sub/copy.md", "tab");
		${PAUSE(900)}
		return {
			notices: [...document.querySelectorAll(".notice")].map((n) => n.textContent),
			copied: !!app.vault.getAbstractFileByPath("${ROOT}/inner/sub/copy.md"),
			original: !!app.vault.getAbstractFileByPath("${ROOT}/inner/leaf.md"),
		};
	`);
	expect("the copy is made", out.copied, true);
	expect("the original stays where it was", out.original, true);
	// Making the parent folder says so too, so it is the copy's own notice
	// that has to be found rather than the only one.
	expect("and the press says so, naming where it went", out.notices, (v) =>
		Array.isArray(v) && v.some((n) => String(n).includes("copy.md")));
	expect("whose row is showing in the tree", await page.evaluate(rowsFor(`${ROOT}/inner/sub/copy.md`)), 1);
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

test("dropdown: the preview shows the rest of the path only as far as it exists", async () => {
	await page.evaluate(buildVaultFixture);
	// Two more siblings of `branch`, for this test only — the next fixture
	// build takes the whole ROOT out again. One carries the same first step
	// of the path but not the second; one carries neither.
	await page.evaluate(`
		await app.vault.createFolder("${ROOT}/bramble");
		await app.vault.createFolder("${ROOT}/bramble/twig");
		await app.vault.create("${ROOT}/loose.md", "# loose");
		${PAUSE(300)}
		for (const type of ["markdown", "lure-external-file", "empty"]) {
			app.workspace.getLeavesOfType(type).forEach((l) => l.detach());
		}
		${PAUSE(300)}
		await app.workspace.getLeaf(false).openFile(app.vault.getAbstractFileByPath("${ROOT}/branch/twig/nest.md"));
		${PAUSE(600)}
		const c = app.workspace.getMostRecentLeaf().view.containerEl
			.querySelector(".view-header-title-container");
		const seg = [...c.querySelectorAll(".view-header-breadcrumb")].find((e) => e.textContent === "branch");
		if (!seg) return false;
		seg.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		${PAUSE(500)}
		return true;
	`);
	const opened = await page.evaluate(dropdownState);
	expect("the click opens on the whole path below the folder", opened.field, "branch/twig/nest.md");

	/** Points at one row and reports what the field then reads. */
	const hover = async (label) => await page.evaluate(`
		const c = app.workspace.getMostRecentLeaf().view.containerEl
			.querySelector(".view-header-title-container");
		const row = [...document.querySelectorAll(".suggestion-item")]
			.find((e) => e.textContent === ${JSON.stringify(label)});
		if (!row) return "not listed";
		row.dispatchEvent(new MouseEvent("mousemove", { bubbles: true }));
		${PAUSE(250)}
		return c.querySelector("input").value;
	`);

	expect("a folder holding the whole rest of the path shows all of it", await hover("branch"), "branch/twig/nest.md");
	expect("one holding the first step shows that much", await hover("bramble"), "bramble/twig");
	expect("one holding none of it shows nothing after the name", await hover("brioche"), "brioche");
	expect("and nothing at all follows a file", await hover("loose.md"), "loose.md");

	// Nothing is decided until a name is typed or chosen, so letting go of
	// the list hands the whole path back.
	const released = await page.evaluate(`
		const bc = app.plugins.plugins.lure.manager.instances.get(app.workspace.getMostRecentLeaf());
		const c = app.workspace.getMostRecentLeaf().view.containerEl
			.querySelector(".view-header-title-container");
		bc.suggest.suggestions.containerEl.dispatchEvent(new MouseEvent("mouseleave"));
		${PAUSE(300)}
		return c.querySelector("input").value;
	`);
	expect("taking the pointer off gives the whole path back", released, "branch/twig/nest.md");
});

test("dropdown: typing lets go of the highlight, and marks what matched", async () => {
	await page.evaluate(buildVaultFixture);
	await page.evaluate(openVaultNote);
	await page.evaluate(openDropdown);
	const opened = await page.evaluate(dropdownState);
	expect("the list opens on where you are", opened.selected, (v) => v >= 0);

	// Typing is about somewhere else by definition, so the row you were
	// standing on lets go: a highlight nobody put there reads as a choice
	// already made, and Enter would act on it.
	await page.send("Input.insertText", { text: "a" });
	await page.evaluate(PAUSE(400) + "return true;");
	const typed = await page.evaluate(`
		const rows = [...document.querySelectorAll(".suggestion-item")];
		return {
			selected: rows.findIndex((e) => e.classList.contains("is-selected")),
			labels: rows.map((e) => e.textContent),
			marked: rows.map((e) => e.querySelector(".lure-suggest-match")?.textContent ?? null),
		};
	`);
	expect("nothing is highlighted", typed.selected, -1);
	expect("and every row says which part of it matched", typed.marked, (v) =>
		Array.isArray(v) && v.length > 0 && v.every((m) => typeof m === "string" && m.toLowerCase() === "a"));
	// Marked inside the name, wherever it matched: the listing matches by
	// substring, so it is not always at the front.
	expect("in the row's own spelling", typed.marked, (v) =>
		Array.isArray(v) && v.every((m, i) => typed.labels[i].includes(m)));
});

test("dropdown: the rows show the part the offer would add, and the field does not", async () => {
	await page.evaluate(buildVaultFixture);
	await page.evaluate(openVaultNote);
	await page.evaluate(openDropdown);

	// "aaaa-common-one" and "aaaa-common-two" agree as far as "aaaa-common-",
	// so typing "aa" offers the rest of that agreement.
	const out = await page.evaluate(`
		const bc = app.plugins.plugins.lure.manager.instances.get(app.workspace.getMostRecentLeaf());
		bc.startBrowsingAt("${ROOT}");
		${PAUSE(500)}
		const input = document.querySelector(".lure-path-input");
		input.focus();
		return true;
	`);
	expect("the field is open on the folder", out, true);
	await page.send("Input.insertText", { text: "aa" });
	await page.evaluate(PAUSE(450) + "return true;");

	const shown = await page.evaluate(`
		const input = document.querySelector(".lure-path-input");
		const rows = [...document.querySelectorAll(".suggestion-item")];
		return {
			value: input.value,
			selected: input.value.slice(input.selectionStart, input.selectionEnd),
			underlined: rows.map((e) => e.querySelector(".lure-suggest-offer")?.textContent ?? null),
			labels: rows.map((e) => e.textContent),
			fieldUnderlined: input.className.includes("offering"),
		};
	`);
	expect("the field holds the offer", shown.value, "aaaa-common-");
	expect("selected, as the part nobody typed", shown.selected, "aa-common-");
	// The underline lives on the rows, where the choice is — the field marks
	// the same run by having it selected.
	expect("every row the offer is about underlines what it would add", shown.underlined, (v) =>
		Array.isArray(v) && v.filter((u) => u === "aa-common-").length === 2);
	expect("and the field itself carries no marking of its own", shown.fieldUnderlined, false);
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

test("dropdown: the list answers the caret, and leaving it gives the field back", async () => {
	await page.evaluate(buildVaultFixture);
	await page.evaluate(narrowPane("leaf.md", 0));
	const out = await page.evaluate(`
		const c = app.workspace.getLeavesOfType("markdown")[0].view.containerEl
			.querySelector(".view-header-title-container");
		// Opened by clicking the first folder, which is what puts the whole
		// path in the field with only its first segment picked out.
		const seg = c.querySelector(".view-header-title-parent .view-header-breadcrumb")
			?? c.querySelector(".lure-browse-chip");
		if (!seg) return JSON.stringify({ opened: false, why: "no segment to click" });
		seg.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, detail: 1 }));
		${PAUSE(700)}
		const input = c.querySelector(".lure-path-input");
		if (!input) return JSON.stringify({ opened: false, why: "the click opened no field" });
		const rows = () => [...document.querySelectorAll(".suggestion-item")].map((e) => e.textContent.trim());
		const opened = { value: input.value, rows: rows() };

		// A different segment picked out by hand — dragged over, not typed —
		// and left half-written, so more than one child can answer it.
		input.value = "${ROOT}/aaaa-common/unmistakable/leaf.md";
		const at = input.value.indexOf("aaaa-common");
		input.setSelectionRange(at + "aaaa-common".length, at + "aaaa-common".length);
		input.dispatchEvent(new Event("select"));
		${PAUSE(450)}
		const moved = { rows: rows(), value: input.value, caret: input.selectionEnd };

		// A row of that list, which is a name the segment does not already
		// hold. Where it lands is the whole question.
		const row = [...document.querySelectorAll(".suggestion-item")]
			.find((e) => e.textContent.trim() === "aaaa-common-two");
		if (!row) return JSON.stringify({ opened: true, first: opened, moved, hovered: null });
		row.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));
		row.dispatchEvent(new MouseEvent("mousemove", { bubbles: true }));
		${PAUSE(400)}
		const hovered = { value: input.value };

		// And the pointer off the list again. The handler sits on the list
		// inside the popover; a real pointer crosses out of both.
		for (const el of [document.querySelector(".suggestion-container"), document.querySelector(".suggestion")]) {
			el?.dispatchEvent(new MouseEvent("mouseleave", { bubbles: false }));
		}
		${PAUSE(400)}
		const left = { value: input.value, caret: input.selectionEnd };

		document.querySelector(".lure-path-input")?.blur();
		document.body.click();
		${PAUSE(300)}
		return JSON.stringify({ opened: true, first: opened, moved, hovered, left });
	`);
	const state = JSON.parse(out);
	expect("the field opened", state.opened, true);
	if (!state.opened) return;
	// The list opened on the folder the click was about.
	expect("and listed where the click was", state.first.rows, (v) => v.length > 0);
	// The list is re-queried against the segment the caret is now in. What it
	// draws that list *from* is still the folder the field was opened on —
	// see the note in the takeaways: making it follow the caret as well turns
	// out to change what Enter does, and is not landed.
	expect("the list is re-queried for the caret's segment", state.moved.rows, (v) =>
		Array.isArray(v) && JSON.stringify(v) !== JSON.stringify(state.first.rows));
	// Whatever the pointer did to the field, letting go of the list gives
	// back what the user had — caret and all, not the row last under it.
	if (state.hovered) {
		expect("leaving the list restores the field", state.left.value, state.moved.value);
		expect("and the caret with it", state.left.caret, state.moved.caret);
	}
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
	// One step swapped, and the rest of the path left alone as far as it
	// still means anything: pointing at a folder asks "what if this step were
	// that one", not "throw the path away" — but a rest that names nothing
	// over there is not an answer to it either. `branch` is the only row in
	// this fixture with a `twig` under it, so every other one shows its name
	// and nothing after it.
	const kept = moved.row === "branch" ? `${moved.row}/twig/nest.md` : moved.row;
	expect("the step is swapped, and the rest kept only where it exists", moved.field, kept);
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

/**
 * Narrows the pane to leave the breadcrumb row a given width, by moving a
 * real divider.
 *
 * It used to set `width` on the header element, which is not something a user
 * can do and not what a resize actually is: the header changed size while the
 * pane around it did not, so nothing else in Obsidian's layout responded and
 * the row was refitted by being told to rather than by noticing. A divider is
 * the real gesture — the pane genuinely changes width, everything relaid out
 * around it, and the row's own observer is what answers.
 *
 * The target is the *row's* width rather than the pane's, because that is what
 * the fitting is about and what every test here is written against; the
 * difference between the two is the rest of the header, which is measured
 * rather than assumed and corrected for in a second pass.
 */
const squeeze = (px) => `
	const leaf = app.workspace.getLeavesOfType("markdown")[0];
	// A neighbour to share with. Without one there is no divider to move.
	let split = leaf.parent;
	while (split && split.type !== "split") split = split.parent;
	if (!split || split.children.length < 2) {
		await app.workspace.getLeaf("split", "vertical").openFile(leaf.view.file);
		${PAUSE(400)}
		split = app.workspace.getLeavesOfType("markdown")[0].parent;
		while (split && split.type !== "split") split = split.parent;
	}
	const pane = app.workspace.getLeavesOfType("markdown")[0];
	const row = pane.view.containerEl.querySelector(".view-header-title-container");
	const total = split.containerEl.getBoundingClientRect().width;
	// Which side of the divider the pane under test is actually on. A new
	// split does not reliably put it first, and resizing the *other* side
	// left every later assertion reading a pane nothing had squeezed — which
	// looks exactly like the feature not working.
	const mine = Math.max(0, split.children.findIndex((child) =>
		child === pane || child.containerEl?.contains(pane.containerEl)));
	const setTo = (wanted) => {
		const share = Math.max(4, Math.min(96, (wanted / total) * 100));
		const rest = (100 - share) / (split.children.length - 1);
		split.children.forEach((child, i) => { child.dimension = i === mine ? share : rest; });
		split.recomputeChildrenDimensions();
	};
	// First pass to learn what the rest of the header takes, second to land
	// on the width the caller asked the *row* for.
	setTo(${px});
	${PAUSE(160)}
	const overhead = pane.containerEl.getBoundingClientRect().width - row.clientWidth;
	setTo(${px} + overhead);
	${PAUSE(200)}
	return true;
`;

/**
 * Squeezes until the row has actually run out of air, and waits for it to
 * settle rather than for a fixed number of milliseconds.
 *
 * Two assumptions were buried in "squeeze to 360 and pause 200ms", and both
 * of them failed on the same afternoon. The width was a statement about this
 * host's font metrics rather than about the feature — the row spends its
 * column gaps in proportion to how much is hidden, all of them only once the
 * overflow reaches the whole pool, and a slightly narrower header font meant
 * the same path at the same width overflowed by half as much. And the pause
 * was a statement about how fast the machine happened to be: the refit runs
 * from a `ResizeObserver`, so on a loaded machine it lands after the pause
 * and the assertions measure the previous width's answer.
 *
 * So both are measured now. The width comes down step by step until the row
 * reports its gaps spent, and each step waits for two consecutive readings to
 * agree before believing either of them.
 */
const squeezeTight = (from = 360) => `
	const widths = [${from}, 320, 280, 240, 200, 170, 140];
	const leaf = app.workspace.getLeavesOfType("markdown")[0];
	let split = leaf.parent;
	while (split && split.type !== "split") split = split.parent;
	if (!split || split.children.length < 2) {
		await app.workspace.getLeaf("split", "vertical").openFile(leaf.view.file);
		${PAUSE(400)}
		split = app.workspace.getLeavesOfType("markdown")[0].parent;
		while (split && split.type !== "split") split = split.parent;
	}
	const pane = app.workspace.getLeavesOfType("markdown")[0];
	const row = pane.view.containerEl.querySelector(".view-header-title-container");
	const total = split.containerEl.getBoundingClientRect().width;
	const mine = Math.max(0, split.children.findIndex((child) =>
		child === pane || child.containerEl?.contains(pane.containerEl)));
	const setTo = (wanted) => {
		const share = Math.max(4, Math.min(96, (wanted / total) * 100));
		const rest = (100 - share) / (split.children.length - 1);
		split.children.forEach((child, i) => { child.dimension = i === mine ? share : rest; });
		split.recomputeChildrenDimensions();
	};
	const gapNow = () => parseFloat(row.style.getPropertyValue("--lure-gap") || "4");
	// The refit is driven by a ResizeObserver, so what settles it is frames,
	// not milliseconds. Wait for the same answer twice running.
	const settle = async () => {
		let last = null;
		for (let i = 0; i < 40; i++) {
			await new Promise((r) => setTimeout(r, 60));
			const now = gapNow() + ":" + row.clientWidth + ":" + row.scrollWidth;
			if (now === last) return;
			last = now;
		}
	};
	let landed = null;
	for (const want of widths) {
		setTo(want);
		await settle();
		const overhead = pane.containerEl.getBoundingClientRect().width - row.clientWidth;
		setTo(want + overhead);
		await settle();
		if (gapNow() <= 0.6) { landed = want; break; }
	}
	return JSON.stringify({ landed, gap: gapNow(), rowWidth: row.clientWidth });
`;

/** Hands the panes back an even share, so the next test starts clean. */
const unsqueeze = `
	for (const leaf of app.workspace.getLeavesOfType("markdown").slice(1)) leaf.detach();
	${PAUSE(300)}
	app.plugins.plugins.lure.manager.refreshAll();
	${PAUSE(200)}
	return true;
`;

const rowState = `
	const c = app.workspace.getLeavesOfType("markdown")[0].view.containerEl
		.querySelector(".view-header-title-container");
	const look = (el) => el === null ? null : {
		text: el.dataset.lureFull ?? el.textContent ?? "",
		width: Math.round(el.getBoundingClientRect().width),
		natural: [...el.children].reduce((sum, p) => sum + p.scrollWidth, 0),
		floor: parseFloat(el.style.getPropertyValue("--lure-floor")) || 0,
		clipped: [...el.children].some((p) => p.scrollWidth > p.clientWidth + 1),
		fromFront: [...el.children].some((p) => p.classList.contains("lure-name-back")),
		pinned: [...el.children].some((p) => p.classList.contains("lure-name-pinned")),
	};
	return {
		width: Math.round(c.clientWidth),
		content: c.scrollWidth,
		scrolls: c.classList.contains("lure-row-scrolls"),
		scrollLeft: Math.round(c.scrollLeft),
		root: look(c.querySelector(".lure-root-name")),
		names: [...c.querySelectorAll(".view-header-title-parent .view-header-breadcrumb")].map(look),
		file: look(c.querySelector(".lure-filename-text")),
		lines: Math.round(c.querySelector(".lure-filename-text")?.getBoundingClientRect().height ?? 0),
	};
`;

/** Whether a name has more in it than it is showing. */
const isCut = (name) => Boolean(name?.clipped);
/** Whether it has been squeezed away to nothing, leaving only its icon. */
const isGone = (name) => (name?.width ?? 0) < 1;

test("long paths: the vault name gives way before any folder", async () => {
	await page.evaluate(buildVaultFixture);
	// Three splits, not one: names come down far further than they used to
	// before anything has to be cut at all, so a wider pane leaves the row
	// fitting and there is nothing to watch give way.
	await page.evaluate(narrowPane("leaf.md", 1));
	await page.evaluate(squeeze(330));
	const row = await page.evaluate(rowState);
	expect("something had to give", row.width < row.content || isCut(row.root), true);
	// Whatever the window happens to be, the order holds: no folder is
	// touched while the opening segment still has width to spend.
	if (row.names.some(isCut)) {
		expect("the vault name is down to its icon", isGone(row.root), true);
	} else {
		expect("only the vault name has been cut", isCut(row.root), true);
	}
});

test("long paths: a name is cut only to where it stays distinguishable", async () => {
	await page.evaluate(buildVaultFixture);
	await page.evaluate(narrowPane("leaf.md", 2));
	const row = await page.evaluate(rowState);
	// Its sibling is "aaaa-common-two", and everything they share is at the
	// front — so the front is what goes. What has to survive is the end,
	// which is the only part that says which of the two this is. Cutting the
	// other way round needed thirteen characters to stay distinct; this needs
	// three.
	const one = row.names.find((n) => n.text.endsWith("one"));
	expect("it is on the row", one, (v) => v !== undefined);
	expect("and it is read from its end", one?.fromFront, true);
	// Room is taken from every name at once, in proportion to what each has,
	// so they all give up something rather than the longest paying alone
	// until it matches the next longest — which is what the old character-cap
	// fitter did and what flexbox replaced.
	//
	// Nothing finer than that is asserted here on purpose. Which of two names
	// ends up wider is not an invariant: their floors differ, and each box is
	// additionally capped at the run it actually drew, which is worth up to a
	// character on its own. What protects a short name is its floor, and that
	// is asserted directly, just below.
	expect("every folder gave up something", row.names.every((n) => n.width < n.natural), true);
	expect("no folder is ground below its floor", row.names.every((n) => n.width >= n.floor - 1), true);
	expect("the file's own name is untouched", isCut(row.file), false);
	await page.evaluate(unsqueeze);
});

test("long paths: the file's name is the last thing cut, and keeps six letters", async () => {
	await page.evaluate(buildVaultFixture);
	await page.evaluate(narrowPane("a very long note name indeed.md", 1));
	await page.evaluate(squeeze(300));
	const row = await page.evaluate(rowState);
	expect("it was cut", isCut(row.file), true);
	// The floor is written to the box as the width of this name, in this
	// font, at the six characters it keeps — so this is the same assertion
	// as "six letters", asked in the units the row is actually laid out in.
	expect("but not below what six letters take", row.file, (v) => v.floor > 0 && v.width >= v.floor - 1);
	// Only after everything cheaper: the vault name is gone and the folders
	// have all given what they can.
	expect("the vault name went first", isGone(row.root), true);
	expect("and the folders gave way before it", row.names.some(isCut), true);
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

test("long paths: everything the row holds can be scrolled to", async () => {
	// The row is centred by default, and content centred in a box it has
	// outgrown spills off *both* edges — of which only the end-side spill can
	// be scrolled to. The start was simply unreachable: with a deep path in a
	// narrow pane the vault name and the first folders sat two hundred pixels
	// off the left edge, and no amount of scrolling brought them back.
	await page.evaluate(buildVaultFixture);
	await page.evaluate(narrowPane("leaf.md", 2));
	const reach = await page.evaluate(`
		const c = app.workspace.getLeavesOfType("markdown")[0].view.containerEl
			.querySelector(".view-header-title-container");
		if (!c.classList.contains("lure-row-scrolls")) return { scrolls: false };
		const box = () => c.getBoundingClientRect();
		const was = c.scrollLeft;
		c.scrollLeft = 0;
		const startGap = Math.round(c.children[0].getBoundingClientRect().left - box().left);
		c.scrollLeft = c.scrollWidth;
		const endGap = Math.round(c.lastElementChild.getBoundingClientRect().right - box().right);
		c.scrollLeft = was;
		return {
			scrolls: true,
			startGap,
			endGap,
			justify: getComputedStyle(c).justifyContent,
		};
	`);
	if (!reach.scrolls) {
		expect("the row fits, so there is nothing to reach past", true, true);
		return;
	}
	// Not centred while it scrolls, whatever the alignment setting says.
	expect("aligned to its start while scrolling", reach.justify, (v) => v !== "center");
	// Scrolled fully one way and then the other, the ends land inside the box
	// rather than beyond it.
	expect("the beginning can be reached", reach.startGap, (v) => Math.abs(v) <= 2);
	expect("and so can the end", reach.endGap, (v) => Math.abs(v) <= 2);
});

test("long paths: the opening segment always says where the path is", async () => {
	await page.evaluate(buildVaultFixture);
	await page.evaluate(narrowPane("leaf.md", 0));
	// Deliberately roomy: the point is that the tooltip is there when the
	// row had nothing to shorten.
	await page.evaluate(squeeze(900));
	const out = await page.evaluate(`
		const c = app.workspace.getLeavesOfType("markdown")[0].view.containerEl
			.querySelector(".view-header-title-container");
		const seg = c.querySelector(".lure-vault-segment");
		return JSON.stringify({
			clipped: [...c.querySelectorAll(".lure-name-lead, .lure-name-trail")]
				.some((p) => p.scrollWidth > p.clientWidth + 1),
			tip: seg.getAttribute("aria-label") ?? "",
		});
	`);
	const state = JSON.parse(out);
	// Even with room to spare. The name says which vault; only this says
	// where it is, and it is the one fact nothing on the row can show.
	expect("nothing was shortened", state.clipped, false);
	expect("and it still carries the absolute path", state.tip, app.vaultPath);
	await page.evaluate(unsqueeze);
});

test("long paths: a name hidden by the setting opens like one hidden by the room", async () => {
	await page.evaluate(buildVaultFixture);
	await page.evaluate(narrowPane("leaf.md", 0));
	await page.evaluate(squeeze(900));
	const out = await page.evaluate(`
		const p = app.plugins.plugins.lure;
		p.settings.showVaultName = false;
		p.manager.refreshAll();
		${PAUSE(500)}
		const c = app.workspace.getLeavesOfType("markdown")[0].view.containerEl
			.querySelector(".view-header-title-container");
		const name = c.querySelector(".lure-root-name");
		const shut = Math.round(name.getBoundingClientRect().width);
		c.querySelector(".lure-vault-segment").dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));
		${PAUSE(300)}
		const open = Math.round(name.getBoundingClientRect().width);
		c.dispatchEvent(new MouseEvent("mouseleave"));
		p.settings.showVaultName = true;
		p.manager.refreshAll();
		${PAUSE(400)}
		return JSON.stringify({ inDom: !!name, text: name.textContent, shut, open });
	`);
	const state = JSON.parse(out);
	// In the row either way: an element that is not there has nothing to
	// give back.
	expect("the name is in the row", state.inDom, true);
	expect("and it is the vault's", state.text, app.vaultName);
	expect("held at nothing", state.shut, 0);
	expect("and given back on hover", state.open, (v) => v > 0);
	await page.evaluate(unsqueeze);
});

test("long paths: nothing re-opens under an open field or a moving row", async () => {
	await page.evaluate(buildVaultFixture);
	await page.evaluate(narrowPane("leaf.md", 1));
	// Small enough that the row has run out of shortening and scrolls: a row
	// that fits has nothing to scroll and nothing to suppress.
	await page.evaluate(squeeze(150));
	const out = await page.evaluate(`
		const c = app.workspace.getLeavesOfType("markdown")[0].view.containerEl
			.querySelector(".view-header-title-container");
		const crumb = () => c.querySelector(".view-header-title-parent .view-header-breadcrumb");
		const point = (el) => el.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));

		// A row being read across: names sliding under a still pointer must
		// not each widen the row as they arrive.
		c.dispatchEvent(new WheelEvent("wheel", { deltaY: 40, bubbles: true, cancelable: true }));
		${PAUSE(80)}
		point(crumb());
		${PAUSE(150)}
		const whileScrolling = c.querySelectorAll(".lure-name-open").length;
		${PAUSE(600)}
		point(crumb());
		${PAUSE(200)}
		const afterScrolling = c.querySelectorAll(".lure-name-open").length;

		// A row being typed into: widening a name under the field moves the
		// text somebody is editing.
		c.dispatchEvent(new MouseEvent("mouseleave"));
		crumb().dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, detail: 1 }));
		${PAUSE(500)}
		const field = !!c.querySelector(".lure-path-input");
		const at = c.scrollLeft;
		point(c.querySelector(".view-header-breadcrumb"));
		${PAUSE(250)}
		const whileTyping = c.querySelectorAll(".lure-name-open").length;
		const moved = c.scrollLeft !== at;
		document.querySelector(".lure-path-input")?.blur();
		document.body.click();
		${PAUSE(300)}
		return JSON.stringify({ whileScrolling, afterScrolling, field, whileTyping, moved });
	`);
	const state = JSON.parse(out);
	expect("nothing opened mid-scroll", state.whileScrolling, 0);
	expect("but it opens again once the row is still", state.afterScrolling, 1);
	expect("the click opened a field", state.field, true);
	expect("nothing opened under it", state.whileTyping, 0);
	expect("and the row stayed where the field put it", state.moved, false);
	await page.evaluate(unsqueeze);
});

test("long paths: nothing on the row is drawn over anything else", async () => {
	await page.evaluate(buildVaultFixture);
	await page.evaluate(narrowPane("leaf.md", 0));
	const found = [];
	for (const width of [520, 430, 360, 300, 250, 200]) {
		await page.evaluate(squeeze(width));
		const out = await page.evaluate(`
			const c = app.workspace.getLeavesOfType("markdown")[0].view.containerEl
				.querySelector(".view-header-title-container");
			const marks = [...c.querySelectorAll(".lure-name-lead, .lure-name-trail, .lure-name-pinned, .lure-segment-icon, .view-header-breadcrumb-separator")]
				.map((e) => ({ el: e, r: e.getBoundingClientRect(), cls: e.className.split(" ")[0] }))
				.filter((m) => m.r.width > 0.5);
			const clashes = [];
			for (let i = 0; i < marks.length; i++) for (let j = i + 1; j < marks.length; j++) {
				const a = marks[i], b = marks[j];
				if (a.el.contains(b.el) || b.el.contains(a.el)) continue;
				const over = Math.min(a.r.right, b.r.right) - Math.max(a.r.left, b.r.left);
				if (over <= 0.6) continue;
				// The opening segment is pinned and paints an opaque
				// background over the row: what slides under it while the
				// row scrolls is hidden, not overlapping.
				const pinned = (m) => m.el.closest(".lure-vault-wrapper") !== null;
				if (c.classList.contains("lure-row-scrolls") && (pinned(a) || pinned(b))) continue;
				clashes.push("${'${width}'}px " + a.cls + " over " + b.cls);
			}
			return JSON.stringify(clashes);
		`);
		found.push(...JSON.parse(out));
	}
	expect("no two things share a pixel", found, []);
	await page.evaluate(unsqueeze);
});

test("long paths: a shortened name ends where the delimiter begins", async () => {
	await page.evaluate(buildVaultFixture);
	await page.evaluate(narrowPane("leaf.md", 0));
	const tight = JSON.parse(await page.evaluate(squeezeTight()));
	expect("the row can be squeezed until its gaps are spent", tight, (v) => v.landed !== null);
	const out = await page.evaluate(`
		const c = app.workspace.getLeavesOfType("markdown")[0].view.containerEl
			.querySelector(".view-header-title-container");
		const cv = document.createElement("canvas").getContext("2d");
		// How much wider each clipped box is than the run drawn into it.
		// \`text-overflow\` fits whole glyphs and then the ellipsis, so the
		// box is nearly always a little wider than what it shows — and that
		// strip reads as space between the name and the delimiter.
		const slack = [...c.querySelectorAll(".lure-name-lead, .lure-name-trail")]
			.filter((p) => p.scrollWidth > p.clientWidth + 1)
			.map((p) => {
				const cs = getComputedStyle(p);
				cv.font = cs.font || [cs.fontStyle, cs.fontWeight, cs.fontSize, cs.fontFamily].join(" ");
				const text = p.textContent;
				const box = p.getBoundingClientRect().width + 0.5;
				const back = p.classList.contains("lure-name-back");
				let drawn = 0;
				for (let k = 1; k <= text.length; k++) {
					const run = back ? "\u2026" + text.slice(text.length - k) : text.slice(0, k) + "\u2026";
					const w = cv.measureText(run).width;
					if (w <= box) drawn = w; else break;
				}
				return +(box - drawn).toFixed(2);
			});
		// And the air between one box and the next, which is the row's own
		// column gap: spent before any letter is, so under this much
		// pressure there should be none of it left.
		const boxes = [...c.querySelectorAll(".view-header-title-parent .view-header-breadcrumb, .view-header-title-parent .view-header-breadcrumb-separator")]
			.map((e) => e.getBoundingClientRect())
			.sort((a, b) => a.left - b.left);
		const gaps = boxes.slice(1).map((r, i) => +(r.left - boxes[i].right).toFixed(2));
		return JSON.stringify({ slack, gaps });
	`);
	const state = JSON.parse(out);
	expect("something was clipped", state.slack.length, (v) => v > 0);
	// Not zero: the search is allowed half a pixel of grace, because the
	// canvas and the layout engine agree only to a rounding error and
	// capping a hair too tight costs a whole character.
	expect("and no empty strip is left at its edge", state.slack, (v) => v.every((n) => n <= 1.5));
	expect("nor any air between the boxes", state.gaps, (v) => v.every((n) => n <= 0.6));
	await page.evaluate(unsqueeze);
});

test("long paths: the field takes what it holds, not what is left", async () => {
	await page.evaluate(buildVaultFixture);
	await page.evaluate(narrowPane("leaf.md", 0));
	await page.evaluate(squeeze(360));
	const out = await page.evaluate(`
		const c = app.workspace.getLeavesOfType("markdown")[0].view.containerEl
			.querySelector(".view-header-title-container");
		// Chips, not the native trail: opening the field on the file's name
		// puts the row into browsing, and the folders become our own.
		const trail = () => [...c.querySelectorAll(".lure-browse-chip, .view-header-title-parent .view-header-breadcrumb")]
			.reduce((sum, e) => sum + e.getBoundingClientRect().width, 0);
		c.querySelector(".lure-filename-text").dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, detail: 1 }));
		${PAUSE(500)}
		const input = c.querySelector(".lure-path-input");
		input.value = "ab";
		input.dispatchEvent(new Event("input"));
		${PAUSE(300)}
		const short = { field: input.getBoundingClientRect().width, trail: trail(), row: c.clientWidth };
		input.value = "ab" + "cdefghij".repeat(6);
		input.dispatchEvent(new Event("input"));
		${PAUSE(300)}
		const long = { field: input.getBoundingClientRect().width, trail: trail() };
		document.querySelector(".lure-path-input")?.blur();
		document.body.click();
		${PAUSE(300)}
		return JSON.stringify({ short, long });
	`);
	const state = JSON.parse(out);
	// A field that took whatever the row had left would be the same width
	// either way, and two characters would squeeze the trail as hard as
	// forty.
	expect("two characters take a field's width, not the row's", state.short.field, (v) => v < state.short.row / 3);
	expect("and it grows with what is put in it", state.long.field, (v) => v > state.short.field + 20);
	expect("the trail never pays for width the field did not need", JSON.stringify(state), () => state.short.trail >= state.long.trail);
	await page.evaluate(unsqueeze);
});

test("a selection dragged out of the field does not end the edit", async () => {
	await page.evaluate(buildVaultFixture);
	await page.evaluate(narrowPane("leaf.md", 0));
	const out = await page.evaluate(`
		const leaf = app.workspace.getLeavesOfType("markdown")[0];
		const c = leaf.view.containerEl.querySelector(".view-header-title-container");
		c.querySelector(".lure-filename-text").dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, detail: 1 }));
		${PAUSE(500)}
		const input = c.querySelector(".lure-path-input");
		if (!input) return JSON.stringify({ opened: false, why: "the click opened no field" });
		// Pressed inside the field, released over the editor: the click that
		// follows is reported against their common ancestor, which is
		// nowhere near the row.
		input.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
		${PAUSE(60)}
		const away = leaf.view.containerEl.querySelector(".cm-content") ?? document.body;
		away.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }));
		away.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		${PAUSE(300)}
		const stillOpen = !!c.querySelector(".lure-path-input");
		// And an ordinary click away, which should still close it.
		away.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
		away.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		${PAUSE(300)}
		return JSON.stringify({ opened: true, stillOpen, closedAfter: !c.querySelector(".lure-path-input") });
	`);
	const state = JSON.parse(out);
	expect("the field opened", state.opened, true);
	expect("releasing outside it does not close it", state.stillOpen, true);
	expect("but a click away still does", state.closedAfter, true);
});

test("three presses on the file name reach the path, not the machine's", async () => {
	await page.evaluate(buildVaultFixture);
	await page.evaluate(narrowPane("leaf.md", 0));
	const out = await page.evaluate(`
		const c = app.workspace.getLeavesOfType("markdown")[0].view.containerEl
			.querySelector(".view-header-title-container");
		c.querySelector(".lure-filename-text").dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, detail: 1 }));
		${PAUSE(500)}
		const input = c.querySelector(".lure-path-input");
		const opened = input.value;
		for (const detail of [2, 3]) {
			input.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, detail }));
			${PAUSE(250)}
		}
		const third = c.querySelector(".lure-path-input").value;
		document.querySelector(".lure-path-input")?.blur();
		document.body.click();
		${PAUSE(300)}
		return JSON.stringify({ opened, third, base: app.vault.adapter.getBasePath() });
	`);
	const state = JSON.parse(out);
	expect("it opened on the name alone", state.opened, "leaf.md");
	expect("and three presses reach the path from the vault", state.third, (v) => String(v).endsWith("/leaf.md") && String(v).includes("/"));
	expect("not the one the machine knows", state.third, (v) => !String(v).startsWith(state.base));
});

test("the file's extension can be put on the row", async () => {
	await page.evaluate(buildVaultFixture);
	await page.evaluate(narrowPane("leaf.md", 0));
	await page.evaluate(squeeze(900));
	const out = await page.evaluate(`
		const p = app.plugins.plugins.lure;
		// Forced off first: the setting is persisted, so whatever the vault
		// was last left holding is not what this test is about.
		p.settings.showFileExtension = false;
		p.manager.refreshAll();
		${PAUSE(400)}
		// Name and extension are separate boxes — the row gives the extension
		// up whole under pressure — so what is on screen is the two together.
		const read = () => {
			const el = app.workspace.getLeavesOfType("markdown")[0].view.containerEl
				.querySelector(".lure-filename");
			return [...el.querySelectorAll(".lure-filename-text, .lure-filename-ext")]
				.map((e) => e.textContent)
				.join("");
		};
		const off = read();
		p.settings.showFileExtension = true;
		p.manager.refreshAll();
		${PAUSE(400)}
		const on = read();
		p.settings.showFileExtension = false;
		p.manager.refreshAll();
		${PAUSE(400)}
		return JSON.stringify({ off, on, back: read() });
	`);
	const state = JSON.parse(out);
	expect("off, the row names the note as Obsidian titles it", state.off, "leaf");
	expect("on, it names it as the filesystem does", state.on, "leaf.md");
	expect("and the setting turns back off", state.back, "leaf");
	await page.evaluate(unsqueeze);
});

test("the vault segment offers what can be done to the vault", async () => {
	await page.evaluate(buildVaultFixture);
	await page.evaluate(narrowPane("leaf.md", 0));
	const out = await page.evaluate(`
		document.querySelectorAll(".menu").forEach((m) => m.remove());
		const c = app.workspace.getLeavesOfType("markdown")[0].view.containerEl
			.querySelector(".view-header-title-container");
		const seg = c.querySelector(".lure-vault-segment");
		const r = seg.getBoundingClientRect();
		seg.dispatchEvent(new MouseEvent("contextmenu", {
			bubbles: true, cancelable: true, clientX: Math.round(r.x + 4), clientY: Math.round(r.y + 4),
		}));
		// One press, then the wait the counter needs before it can know the
		// run is over.
		${PAUSE(700)}
		const items = [...document.querySelectorAll(".menu .menu-item-title")].map((e) => e.textContent);
		document.querySelectorAll(".menu").forEach((m) => m.remove());
		return JSON.stringify(items);
	`);
	const items = JSON.parse(out);
	expect("a menu opened", items.length, (v) => v >= 3);
	// Obsidian's own wording, taken from the commands and labels themselves,
	// so this asserts the shape rather than any one language.
	expect("it can show the vault on disk", items, (v) => v.some((t) => /explorer|finder|ordner|dossier/i.test(t)));
	expect("and copy where that is", items, (v) => v.some((t) => /path|pfad|chemin|ruta/i.test(t)));
	// The vault's own identifier: not derivable from its name or its path,
	// and the one thing in that menu nothing else on the row can reach.
	expect("and the vault's id", items, (v) => v.some((t) => /\bID\b/i.test(t)));
});

test("long paths: the extension goes second, straight after the vault name", async () => {
	await page.evaluate(buildVaultFixture);
	await page.evaluate(narrowPane("leaf.md", 0));
	await page.evaluate(`
		app.plugins.plugins.lure.settings.showFileExtension = true;
		app.plugins.plugins.lure.manager.refreshAll();
		${PAUSE(400)}
		return true;
	`);
	const seen = [];
	for (const width of [900, 620, 470, 400, 330, 280]) {
		await page.evaluate(squeeze(width));
		seen.push(JSON.parse(await page.evaluate(`
			const c = app.workspace.getLeavesOfType("markdown")[0].view.containerEl
				.querySelector(".view-header-title-container");
			const ext = c.querySelector(".lure-filename-ext");
			const clipped = (el) => [...el.children].some((p) => p.scrollWidth > p.clientWidth + 1);
			return JSON.stringify({
				vaultName: Math.round(c.querySelector(".lure-root-name").getBoundingClientRect().width),
				ext: ext ? !ext.classList.contains("lure-given-up") : null,
				folders: [...c.querySelectorAll(".view-header-title-parent .view-header-breadcrumb")].filter(clipped).length,
			});
		`)));
	}
	await page.evaluate(`
		app.plugins.plugins.lure.settings.showFileExtension = false;
		app.plugins.plugins.lure.manager.refreshAll();
		${PAUSE(400)}
		return true;
	`);
	await page.evaluate(unsqueeze);

	const state = JSON.stringify(seen);
	// The order, read off the row rather than asserted width by width: the
	// vault name is spent before the extension is, and the extension before
	// the folders have given all they can.
	// Stated as rules that hold at every width, rather than as a claim about
	// which sampled width the changeover falls between: the two are spent
	// continuously, and no sample has to land on the moment either runs out.
	const gone = seen.findIndex((s) => !s.ext);
	expect("the extension does go, somewhere", gone, (v) => v > 0);
	expect("nothing gives way while there is room", seen[0], (v) => v.ext && v.folders === 0);
	expect("no folder pays while the extension is still there to pay", state, () =>
		seen.every((s) => !(s.ext && s.folders > 0)));
	expect("the vault name is spent before the extension goes", state, () =>
		seen.every((s) => s.ext || s.vaultName === 0));
	expect("and it only ever gets smaller", state, () =>
		seen.every((s, i) => i === 0 || s.vaultName <= seen[i - 1].vaultName));
});

test("a double press past the end of the name takes the path with its extension", async () => {
	await page.evaluate(buildVaultFixture);
	await page.evaluate(narrowPane("leaf.md", 0));
	const out = await page.evaluate(`
		const c = app.workspace.getLeavesOfType("markdown")[0].view.containerEl
			.querySelector(".view-header-title-container");
		const box = c.querySelector(".lure-filename");
		const r = box.getBoundingClientRect();
		// Past where the text stops: the field is only as wide as what is in
		// it, so this lands on the empty space beside it rather than on the
		// field itself.
		const press = (detail) => box.dispatchEvent(new MouseEvent("click", {
			bubbles: true, cancelable: true, detail,
			clientX: Math.round(r.right - 4), clientY: Math.round(r.y + r.height / 2),
		}));
		press(1);
		${PAUSE(500)}
		const input = c.querySelector(".lure-path-input");
		if (!input) return JSON.stringify({ opened: false, why: "the click opened no field" });
		const marked = () => input.value.slice(input.selectionStart, input.selectionEnd);
		const first = marked();
		press(2);
		${PAUSE(300)}
		const second = marked();
		press(3);
		${PAUSE(300)}
		const third = c.querySelector(".lure-path-input").value;
		document.querySelector(".lure-path-input")?.blur();
		document.body.click();
		${PAUSE(300)}
		return JSON.stringify({ opened: true, first, second, third, base: app.vault.adapter.getBasePath() });
	`);
	const state = JSON.parse(out);
	expect("the field opened", state.opened, true);
	expect("one press marks the path without the extension", state.first, (v) => String(v).endsWith("/leaf") );
	expect("two mark it with", state.second, (v) => v === state.first + ".md");
	expect("and three reach the one the machine knows", state.third, (v) => String(v).startsWith(state.base));
});

test("the vault menu says what the segment is actually naming", async () => {
	await page.evaluate(buildVaultFixture);
	await page.evaluate(narrowPane("leaf.md", 0));
	const other = await page.evaluate(`
		const dir = require("path").join(require("os").homedir(), ".config", "obsidian");
		let vaults = {};
		try { vaults = JSON.parse(require("fs").readFileSync(require("path").join(dir, "obsidian.json"), "utf8")).vaults ?? {}; } catch {}
		const base = app.vault.adapter.getBasePath();
		const found = Object.entries(vaults).find(([, v]) => v.path && v.path !== base);
		return JSON.stringify(found ? { id: found[0], path: found[1].path } : null);
	`);
	const menuAt = async (setup) =>
		JSON.parse(await page.evaluate(`
			document.querySelectorAll(".menu").forEach((m) => m.remove());
			const bc = app.plugins.plugins.lure.manager.instances.get(app.workspace.getMostRecentLeaf());
			app.plugins.plugins.lure.settings.accessExternalFiles = true;
			${setup}
			${PAUSE(500)}
			bc.showVaultMenu({ clientX: 200, clientY: 200 });
			${PAUSE(300)}
			const items = [...document.querySelectorAll(".menu .menu-item-title")].map((e) => e.textContent);
			document.querySelectorAll(".menu").forEach((m) => m.remove());
			return JSON.stringify(items);
		`));

	const home = await menuAt("");
	expect("the open vault can be opened in another window", home, (v) => v.some((s) => /window|fenster|fenêtre|ventana/i.test(s)));
	expect("and its own id copied", home, (v) => v.some((s) => /\bID\b/i.test(s)));
	expect("it is not offered as somewhere to open", home, (v) => v.length >= 4);

	const registry = JSON.parse(other);
	if (registry) {
		const vault = await menuAt(`bc.goToLocation(${JSON.stringify(registry.path)});`);
		// The one action a vault you are *not* in can take, and the one the
		// open vault has no use for.
		expect("another vault can be opened", vault, (v) => v.length > home.length - 1 && v.some((s) => /vault|coffre|tresor|trezor|kasse/i.test(s)));
		expect("and it still offers an id", vault, (v) => v.some((s) => /\bID\b/i.test(s)));
		// And it is that vault's id, not this window's.
		const copied = await page.evaluate(`
			const bc = app.plugins.plugins.lure.manager.instances.get(app.workspace.getMostRecentLeaf());
			return JSON.stringify(bc.registeredVaultAt(${JSON.stringify(registry.path)}));
		`);
		expect("the id is the one Obsidian filed it under", JSON.parse(copied)?.vaultId, registry.id);
		expect("not this window's", JSON.parse(copied)?.vaultId, (v) => v !== app.vaultId);
	}

	// Somewhere that is not a vault at all has neither.
	const plain = await menuAt(`
		bc.cancelNavigation();
		${PAUSE(300)}
		bc.goToLocation(require("os").homedir());
	`);
	expect("a folder that is not a vault has no id to copy", plain, (v) => !v.some((s) => /\bID\b/i.test(s)));
	expect("and nothing to open as a vault", plain, (v) => v.length < home.length);

	await page.evaluate(`
		app.plugins.plugins.lure.manager.instances.get(app.workspace.getMostRecentLeaf()).cancelNavigation();
		${PAUSE(300)}
		await app.workspace.getLeaf(false).openFile(app.vault.getMarkdownFiles()[0]);
		${PAUSE(300)}
		return true;
	`);
});

test("long paths: the extension goes once, not in and out", async () => {
	await page.evaluate(buildVaultFixture);
	await page.evaluate(narrowPane("leaf.md", 0));
	await page.evaluate(`
		app.plugins.plugins.lure.settings.showFileExtension = true;
		app.plugins.plugins.lure.manager.refreshAll();
		${PAUSE(400)}
		return true;
	`);
	// A slow drag, two pixels at a time. What this is watching for is the
	// row answering the same question differently at neighbouring widths —
	// which is what a decision measured from a layout the last decision
	// changed will always do.
	// A path of middling depth. Too deep and the extension is already gone at
	// the widest the pane can be; too shallow and it never has to go, and
	// either way there is no transition to watch.
	await page.evaluate(`
		const files = app.vault.getMarkdownFiles();
		const depth = (f) => f.path.split("/").length;
		const pick = files.find((f) => depth(f) === 3) ?? files.sort((a, b) => depth(a) - depth(b))[0];
		await app.workspace.getLeaf(false).openFile(pick);
		${PAUSE(500)}
		return true;
	`);
	const read = `
		const c = app.workspace.getLeavesOfType("markdown")[0].view.containerEl
			.querySelector(".view-header-title-container");
		const clipped = (el) => [...el.children].some((p) => p.scrollWidth > p.clientWidth + 1);
		return JSON.stringify({
			ext: !c.querySelector(".lure-filename-ext").classList.contains("lure-given-up"),
			folders: [...c.querySelectorAll(".view-header-title-parent .view-header-breadcrumb")].some(clipped),
		});
	`;
	const shown = [];
	for (let w = 470; w >= 170; w -= 6) {
		await page.evaluate(squeeze(w));
		shown.push(JSON.parse(await page.evaluate(read)));
	}
	await page.evaluate(`
		app.plugins.plugins.lure.settings.showFileExtension = false;
		app.plugins.plugins.lure.manager.refreshAll();
		${PAUSE(400)}
		return true;
	`);
	await page.evaluate(unsqueeze);
	// One direction only. A row that puts the extension back as it keeps
	// narrowing has answered the same question two ways, which is the
	// flicker — and it is the direction, not the count, that says so.
	const backOn = shown.some((s, i) => i > 0 && s.ext && !shown[i - 1].ext);
	const flips = shown.filter((s, i) => i > 0 && s.ext !== shown[i - 1].ext).length;
	const state = JSON.stringify(shown);
	expect("it was on the row to begin with", shown[0].ext, true);
	expect("and gone by the end", shown[shown.length - 1].ext, false);
	// The rule, at every width: no folder loses a letter while the extension
	// is still there to lose instead.
	expect("no folder pays for it", state, () => shown.every((s) => !(s.ext && s.folders)));
	// And the flicker: a row that puts it back as it keeps narrowing has
	// answered the same question two ways.
	expect("never coming back as the row narrows", backOn, false);
	expect("having changed its mind exactly once", flips, 1);
});

test("long paths: a name keeps a readable width, not a letter count", async () => {
	// Four narrow letters and four wide ones are not the same amount of name.
	// The floor is a width in the row's own font, so a name written in thin
	// letters is allowed to keep more of them and one in wide letters fewer —
	// and what is left on screen is the same size either way.
	await page.evaluate(`
		const mk = async (p) => { if (!app.vault.getAbstractFileByPath(p)) await app.vault.createFolder(p); };
		await mk("WidthTest");
		await mk("WidthTest/lilliliillil");
		await mk("WidthTest/lilliliillil/WWMMWWMMWWMM");
		if (!app.vault.getAbstractFileByPath("WidthTest/lilliliillil/WWMMWWMMWWMM/n.md")) {
			await app.vault.create("WidthTest/lilliliillil/WWMMWWMMWWMM/n.md", "");
		}
		${PAUSE(400)}
		for (const t of ["markdown", "empty"]) app.workspace.getLeavesOfType(t).forEach((l) => l.detach());
		${PAUSE(200)}
		await app.workspace.getLeaf(false).openFile(app.vault.getAbstractFileByPath("WidthTest/lilliliillil/WWMMWWMMWWMM/n.md"));
		${PAUSE(500)}
		return true;
	`);
	await page.evaluate(squeeze(150));
	const out = await page.evaluate(`
		const c = app.workspace.getLeavesOfType("markdown")[0].view.containerEl
			.querySelector(".view-header-title-container");
		const cv = document.createElement("canvas").getContext("2d");
		const drawn = (el) => {
			const part = el.querySelector(".lure-name-lead, .lure-name-trail, .lure-name-pinned") ?? el;
			const cs = getComputedStyle(part);
			cv.font = cs.font || [cs.fontStyle, cs.fontWeight, cs.fontSize, cs.fontFamily].join(" ");
			const text = part.textContent;
			const box = part.getBoundingClientRect().width + 0.5;
			const back = part.classList.contains("lure-name-back");
			let kept = 0;
			for (let k = 1; k <= text.length; k++) {
				const run = back ? "\u2026" + text.slice(text.length - k) : text.slice(0, k) + "\u2026";
				if (cv.measureText(run).width <= box) kept = k; else break;
			}
			return { kept, width: Math.round(box) };
		};
		const named = {};
		for (const el of c.querySelectorAll(".view-header-title-parent .view-header-breadcrumb")) {
			named[el.dataset.lureFull] = drawn(el);
		}
		return JSON.stringify(named);
	`);
	const seen = JSON.parse(out);
	const thin = seen["lilliliillil"];
	const wide = seen["WWMMWWMMWWMM"];
	expect("both names are on the row", Boolean(thin && wide), true);
	if (thin && wide) {
		// The same visual amount of name, reached with different numbers of
		// letters. A floor counted in characters would have given the thin
		// name a box half the width of the wide one's.
		expect("the thin name keeps more letters", thin.kept, (v) => v > wide.kept);
		expect("and they end up about the same width", Math.abs(thin.width - wide.width), (v) => v <= 12);
	}
	await page.evaluate(unsqueeze);
	await page.evaluate(`
		const folder = app.vault.getAbstractFileByPath("WidthTest");
		if (folder) await app.fileManager.trashFile(folder);
		${PAUSE(400)}
		return true;
	`);
});

test("the selection ladder belongs to the run that opened the field", async () => {
	await page.evaluate(buildVaultFixture);
	await page.evaluate(narrowPane("leaf.md", 0));
	const spot = await page.evaluate(`
		const c = app.workspace.getLeavesOfType("markdown")[0].view.containerEl
			.querySelector(".view-header-title-container");
		const r = c.querySelector(".lure-filename-text").getBoundingClientRect();
		return JSON.stringify({ x: Math.round(r.x + 6), y: Math.round(r.y + r.height / 2) });
	`);
	const at = JSON.parse(spot);
	// Real presses: the point of the second half is that the *browser's* own
	// double-click behaviour comes back, and a synthetic click never has any.
	// One press, told which press of a run it is. Sent one at a time rather
	// than as a burst, because a burst restarts the run from its first press
	// — which is the very thing the second half of this test is about.
	const pressAt = async (x, y, nth) => {
		for (const type of ["mousePressed", "mouseReleased"]) {
			await page.send("Input.dispatchMouseEvent", {
				type, x, y, button: "left", clickCount: nth,
				buttons: type === "mousePressed" ? 1 : 0,
			});
		}
	};

	await pressAt(at.x, at.y, 1);
	await page.evaluate(PAUSE(700) + "return true;");
	const opened = JSON.parse(await page.evaluate(`
		const i = document.querySelector(".lure-path-input");
		if (!i) return JSON.stringify({ open: false });
		const r = i.getBoundingClientRect();
		return JSON.stringify({ open: true, value: i.value,
			marked: i.value.slice(i.selectionStart, i.selectionEnd),
			x: Math.round(r.x + 12), y: Math.round(r.y + r.height / 2) });
	`));
	expect("a press on the name opens the field", opened.open, true);
	if (!opened.open) return;
	expect("with the name marked, extension aside", opened.marked, "leaf");

	// A second press, still part of the same run: the ladder widens.
	await pressAt(at.x, at.y, 2);
	await page.evaluate(PAUSE(400) + "return true;");
	expect("a second press widens over the extension", JSON.parse(await page.evaluate(`
		const i = document.querySelector(".lure-path-input");
		return JSON.stringify(i.value.slice(i.selectionStart, i.selectionEnd));
	`)), "leaf.md");

	// And now a double-click well after the run has lapsed, inside the field.
	// It is a text field like any other by then, and a double-click in one
	// picks out the word under the pointer.
	await page.evaluate(PAUSE(900) + "return true;");
	await pressAt(opened.x, opened.y, 1);
	await pressAt(opened.x, opened.y, 2);
	await page.evaluate(PAUSE(400) + "return true;");
	const later = JSON.parse(await page.evaluate(`
		const i = document.querySelector(".lure-path-input");
		return JSON.stringify({ marked: i.value.slice(i.selectionStart, i.selectionEnd), value: i.value });
	`));
	expect("a later double-click picks a word, not the path", later.marked, (v) =>
		v !== later.value && String(v).length > 0 && !String(v).includes("/"));
	await page.evaluate(`
		document.querySelector(".lure-path-input")?.blur();
		document.body.click();
		${PAUSE(300)}
		return true;
	`);
});

test("the vault name copies its name, then where it is, then where the file is", async () => {
	await page.evaluate(buildVaultFixture);
	await page.evaluate(narrowPane("leaf.md", 0));
	const copied = async (count) =>
		JSON.parse(await page.evaluate(`
			document.querySelectorAll(".notice").forEach((n) => n.remove());
			document.querySelectorAll(".menu").forEach((m) => m.remove());
			const c = app.workspace.getLeavesOfType("markdown")[0].view.containerEl
				.querySelector(".view-header-title-container");
			const seg = c.querySelector(".lure-vault-segment");
			const r = seg.getBoundingClientRect();
			for (let i = 0; i < ${count}; i++) {
				seg.dispatchEvent(new MouseEvent("contextmenu", { bubbles: true, cancelable: true,
					clientX: Math.round(r.x + 4), clientY: Math.round(r.y + 4) }));
				${PAUSE(60)}
			}
			${PAUSE(800)}
			const said = [...document.querySelectorAll(".notice")].map((n) => n.textContent);
			document.querySelectorAll(".notice").forEach((n) => n.remove());
			document.querySelectorAll(".menu").forEach((m) => m.remove());
			return JSON.stringify(said);
		`));
	// Each press widens what the copy is good for: the name means something
	// inside Obsidian, the two paths mean something outside it.
	expect("two presses take the vault's name", await copied(2), (v) =>
		v.some((t) => String(t).startsWith(app.vaultName)));
	expect("three take where the vault is", await copied(3), (v) =>
		v.some((t) => String(t).startsWith(app.vaultPath)));
	expect("four take where the open file is", await copied(4), (v) =>
		v.some((t) => String(t).startsWith(`${app.vaultPath}/${ROOT}`) && String(t).includes("leaf.md")));
});

// --------------------------------------------------------- dropping onto it

/**
 * A drag, stood in for.
 *
 * A real pointer drag driven through CDP starts nothing at all — not on these
 * segments and not on Obsidian's own File Explorer rows either, so the probe
 * is what is broken rather than the target. What can be driven is the
 * protocol: put a payload on the drag manager, as a dragstart would, and
 * dispatch the event the browser would dispatch. `dragover` asks what would
 * happen and `drop` makes it happen, which is exactly the split the handler
 * is written around.
 */
/**
 * Starts a drag the way a drag source does, rather than writing a payload
 * onto the manager by hand.
 *
 * It matters for more than fidelity. `dragManager` builds its floating action
 * label lazily, on the first real `onDragStart`, so a hand-written payload
 * leaves `actionEl` null — and an assertion about the label then reads as the
 * feature failing to set one, which is exactly how it read.
 */
const startDrag = (paths) => `
	const picked = ${JSON.stringify(paths)}.map((p) => app.vault.getAbstractFileByPath(p));
	if (picked.some((f) => !f)) return JSON.stringify({ error: "missing fixture" });
	const start = new DragEvent("dragstart", { bubbles: true, cancelable: true, dataTransfer: new DataTransfer() });
	const dm = app.dragManager;
	const payload = picked.length > 1
		? dm.dragFiles(start, picked)
		: picked[0].children ? dm.dragFolder(start, picked[0]) : dm.dragFile(start, picked[0]);
	dm.onDragStart(start, payload);
	${PAUSE(150)}
`;

/**
 * Ends the drag this case started.
 *
 * Nothing dispatches `dragend` for a drag that was never really begun by a
 * pointer, so without this the payload, the floating label and the "a drop
 * would land here" highlight all survive into the next case — where a
 * shuffled order put a measurement of the row's own geometry, and the
 * leftover highlight measured as an empty strip at a segment's edge.
 */
const endDrag = `
	app.dragManager.onDragEnd(new DragEvent("dragend"));
	app.dragManager.draggable = null;
	document.querySelectorAll(".is-being-dragged-over")
		.forEach((n) => n.classList.remove("is-being-dragged-over"));
	${PAUSE(120)}
`;

/** The segment named, or the vault's own, which has no text to match on. */
const findSegment = (segment) => `
	const c = app.workspace.getMostRecentLeaf().view.containerEl
		.querySelector(".view-header-title-container");
	const el = ${JSON.stringify(segment)} === "@vault"
		? c.querySelector(".lure-vault-segment")
		: [...c.querySelectorAll(".view-header-breadcrumb")]
			.find((s) => s.textContent === ${JSON.stringify(segment)});
	if (!el) return JSON.stringify({ error: "no segment " + ${JSON.stringify(segment)} });
`;

const dragOver = (segment, ...paths) => `
	${findSegment(segment)}
	${startDrag(paths)}
	el.dispatchEvent(new DragEvent("dragover", { bubbles: true, cancelable: true, dataTransfer: new DataTransfer() }));
	${PAUSE(150)}
	const seen = {
		offered: el.classList.contains("is-being-dragged-over"),
		label: app.dragManager.actionEl ? app.dragManager.actionEl.textContent : null,
	};
	${endDrag}
	return JSON.stringify(seen);
`;

const dropOn = (segment, ...paths) => `
	${findSegment(segment)}
	${startDrag(paths)}
	el.dispatchEvent(new DragEvent("drop", { bubbles: true, cancelable: true, dataTransfer: new DataTransfer() }));
	${PAUSE(800)}
	${endDrag}
	return JSON.stringify({
		tree: app.vault.getAllLoadedFiles()
			.filter((f) => f.path.startsWith("${ROOT}")).map((f) => f.path).sort(),
		root: app.vault.getRoot().children.map((f) => f.name).sort(),
	});
`;

test("a note dropped on a folder segment moves there", async () => {
	const before = JSON.parse(await page.evaluate(dragOver(`${ROOT}`, `${ROOT}/inner/leaf.md`)));
	expect("the folder offers to take it", before.offered, true);
	// Obsidian's own wording, resolved from its own table, so this reads as
	// the File Explorer reads in whatever language the app is set to.
	expect("and says so as Obsidian says it", before.label, (v) =>
		typeof v === "string" && v.includes(ROOT));

	const after = JSON.parse(await page.evaluate(dropOn(`${ROOT}`, `${ROOT}/inner/leaf.md`)));
	expect("the note is where it was dropped", after.tree, (v) => v.includes(`${ROOT}/leaf.md`));
	expect("and not where it came from", after.tree, (v) => !v.includes(`${ROOT}/inner/leaf.md`));
});

test("a folder segment declines what it cannot take", async () => {
	// Its own parent: it is already there, so there is nothing to offer.
	const parent = JSON.parse(await page.evaluate(dragOver("inner", `${ROOT}/inner/leaf.md`)));
	expect("the folder it is already in offers nothing", parent.offered, false);

	// A name that is taken. Nothing here overwrites, so there is nothing to
	// offer either — and the refusal is silent, while the pointer is moving.
	await page.evaluate(`await app.vault.create("${ROOT}/leaf.md", "# in the way"); ${PAUSE(300)} return true;`);
	const taken = JSON.parse(await page.evaluate(dragOver(`${ROOT}`, `${ROOT}/inner/leaf.md`)));
	expect("a taken name offers nothing", taken.offered, false);
	const still = JSON.parse(await page.evaluate(dropOn(`${ROOT}`, `${ROOT}/inner/leaf.md`)));
	expect("and a drop on it changes nothing", still.tree, (v) =>
		v.includes(`${ROOT}/inner/leaf.md`) && v.includes(`${ROOT}/leaf.md`));
});

test("a folder cannot be dropped inside itself", async () => {
	// `inner` is above the segment being dropped on, so taking it would leave
	// it nowhere to have come from.
	const out = JSON.parse(await page.evaluate(dragOver("inner", `${ROOT}/inner`)));
	expect("its own descendant offers nothing", out.offered, false);
	const after = JSON.parse(await page.evaluate(dropOn("inner", `${ROOT}/inner`)));
	expect("and the tree is untouched", after.tree, (v) => v.includes(`${ROOT}/inner/leaf.md`));
});

test("a multiple selection drops as one, or not at all", async () => {
	// Obsidian carries a multi-select under `files` rather than `file`, and
	// leaving that shape out made the same gesture a silent dead end for more
	// than one note at a time.
	const both = JSON.parse(
		await page.evaluate(dragOver(`${ROOT}`, `${ROOT}/inner/leaf.md`, `${ROOT}/inner/aside.md`)),
	);
	expect("two that can both move are offered", both.offered, true);

	const landed = JSON.parse(
		await page.evaluate(dropOn(`${ROOT}`, `${ROOT}/inner/leaf.md`, `${ROOT}/inner/aside.md`)),
	);
	expect("and both land", landed.tree, (v) =>
		v.includes(`${ROOT}/leaf.md`) && v.includes(`${ROOT}/aside.md`));

	// Now one of the pair is already there, so the pair is refused whole: a
	// partial move that quietly skips one is worse than a visible no.
	await page.evaluate(`await app.vault.create("${ROOT}/inner/leaf.md", "# back again"); ${PAUSE(300)} return true;`);
	const mixed = JSON.parse(
		await page.evaluate(dragOver(`${ROOT}`, `${ROOT}/inner/leaf.md`, `${ROOT}/aside.md`)),
	);
	expect("a pair with one blocked is not offered", mixed.offered, false);
	const after = JSON.parse(
		await page.evaluate(dropOn(`${ROOT}`, `${ROOT}/inner/leaf.md`, `${ROOT}/aside.md`)),
	);
	expect("and neither moves", after.tree, (v) => v.includes(`${ROOT}/inner/leaf.md`));
});

test("a selection holding a folder and its own child is refused", async () => {
	// Moving the folder takes the child with it, so the second move would be
	// looking for a path that no longer exists. Refused at the hover, so it is
	// never offered rather than half-applied.
	const over = JSON.parse(
		await page.evaluate(dragOver(`${ROOT}`, `${ROOT}/branch`, `${ROOT}/branch/twig`)),
	);
	expect("it is not offered", over.offered, false);
	const after = JSON.parse(
		await page.evaluate(dropOn(`${ROOT}`, `${ROOT}/branch`, `${ROOT}/branch/twig`)),
	);
	expect("the tree is intact", after.tree, (v) => v.includes(`${ROOT}/branch/twig/nest.md`));
	expect("and the child did not move on its own", after.tree, (v) => !v.includes(`${ROOT}/twig`));
});

test("the vault name takes a drop, to the top of the tree", async () => {
	// The vault's own name is the folder at the top of the row, so it accepts
	// what every other folder on the row accepts. Nothing else here moves a
	// note to the vault root in one gesture.
	const over = JSON.parse(await page.evaluate(dragOver("@vault", `${ROOT}/inner/aside.md`)));
	expect("the vault name offers to take it", over.offered, true);
	// The root folder has no name of its own, so an unguarded label would read
	// `Move into “”`. It says the vault's name, which is what the segment shows.
	expect("and names the vault rather than nothing", over.label, (v) =>
		typeof v === "string" && v.includes(app.vaultName));

	const after = JSON.parse(await page.evaluate(dropOn("@vault", `${ROOT}/inner/aside.md`)));
	expect("the note lands in the vault root", after.root, (v) => v.includes("aside.md"));
	// Straight back out again: this vault is the one the README screenshots
	// come from, and a stray note in its root shows up in every one of them.
	await page.evaluate(`
		const at = app.vault.getAbstractFileByPath("aside.md");
		if (at) await app.fileManager.trashFile(at);
		${PAUSE(300)}
		return true;
	`);
});

test("a segment reused for another path takes the drop to where it now points", async () => {
	// Obsidian owns these elements and re-wires rather than rebuilds them, so
	// the same node stands for `inner` on one file and `branch` on the next.
	// A handler that captured its folder when it was first wired would keep
	// sending drops to `inner` — into a folder from a path you had navigated
	// away from, which is the sort of move nobody would think to check.
	await page.evaluate(`
		await app.workspace.getLeaf(false).openFile(app.vault.getAbstractFileByPath("${ROOT}/branch/twig/nest.md"));
		${PAUSE(700)}
		return true;
	`);
	const out = JSON.parse(await page.evaluate(dropOn("branch", `${ROOT}/inner/aside.md`)));
	expect("it went where the row points now", out.tree, (v) => v.includes(`${ROOT}/branch/aside.md`));
	expect("and not where it pointed before", out.tree, (v) => !v.includes(`${ROOT}/inner/aside.md`));
});

// ---------------------------------------------------------------------- run

const app = {
	vaultName: await page.evaluate("return app.vault.getName();"),
	vaultPath: await page.evaluate("return app.vault.adapter.getBasePath();"),
};

await run();
