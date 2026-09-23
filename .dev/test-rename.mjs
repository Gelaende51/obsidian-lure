#!/usr/bin/env node
/**
 * Behavioural tests for the rename key's alternation, run against a live
 * Obsidian over the DevTools protocol.
 *
 * The rename command alternates between Obsidian's inline title and this
 * plugin's header path bar. Obsidian has a third state the alternation did
 * not know about: when it cannot reach the inline title — the note is
 * scrolled past it — it opens a rename *dialog* instead. That dialog pushes
 * its own keymap scope, which swallows the rename key entirely, so the
 * alternation dead-ended there and the dialog could not be dismissed by the
 * key that opened it.
 *
 * Every press here is a real key dispatched by the browser. That is not
 * incidental: `executeCommandById` reports this bug as "the plugin steals
 * focus from behind the modal", and a real key shows the command never
 * running at all. A synthetic KeyboardEvent would have tested a listener
 * rather than the path a user takes.
 *
 *   node .dev/test-rename.mjs            # all
 *   node .dev/test-rename.mjs dialog     # only tests whose name matches
 *
 * Requires --remote-debugging-port=9222 (see .dev/cdp.mjs) and a vault open.
 */

import { canFocusEditable, canRenameFiles, connect, PAUSE, pressKey, quiesce, reloadPlugin, setVaultConfig } from "./cdpSession.mjs";
import { createSuite } from "./harness.mjs";

const FIXTURE = "LureRename";
const NOTE = `${FIXTURE}/Scrolling note.md`;

const page = await connect();

/**
 * The state every case here starts from. `reset` and `teardown` are
 * declared at the foot of the file, beside the fixtures they act on;
 * function declarations hoist, so the suite can still be built here,
 * above the cases that register into it.
 */
/**
 * Answered in advance rather than left to a dialog. Renaming anything another
 * note links to raises Obsidian's "Update links" question unless this is on,
 * and it is off by default; an unanswered question stops every later rename
 * in the window from ever settling. See `setVaultConfig`.
 */
const LINKS_AT_START = await setVaultConfig(page, { alwaysUpdateLinks: true });

const { test, expect, run } = createSuite({ reset, teardown });

/**
 * A note tall enough that scrolling puts the inline title off screen, which
 * is the only condition under which Obsidian reaches for its dialog. Short
 * notes cannot reproduce this at all — the demo vault's largest is 900 bytes.
 */
async function buildFixture() {
	await page.evaluate(`
		if (!app.vault.getAbstractFileByPath(${JSON.stringify(FIXTURE)}))
			await app.vault.createFolder(${JSON.stringify(FIXTURE)});
		const body = "# Scrolling note\\n\\n" + Array.from({ length: 300 },
			(_, i) => "Line " + (i + 1) + " — filler to make this note taller than one screen.").join("\\n\\n");
		const existing = app.vault.getAbstractFileByPath(${JSON.stringify(NOTE)});
		if (existing) await app.vault.modify(existing, body);
		else await app.vault.create(${JSON.stringify(NOTE)}, body);
		return true;
	`);
}

/**
 * Puts the window in a known state: plugin freshly loaded (so the
 * alternation starts from the inline title rather than wherever the last
 * test left it), note open, scrolled where the test wants it.
 */
const arrange = (scrollTop) => `
	document.querySelector(".modal.mod-file-rename .mod-cancel")?.click();
	${PAUSE(150)}
	document.activeElement?.blur?.();
	const file = app.vault.getAbstractFileByPath(${JSON.stringify(NOTE)});
	await app.workspace.getLeaf(false).openFile(file);
	${PAUSE(500)}
	const scroller = app.workspace.getMostRecentLeaf().view.containerEl.querySelector(".cm-scroller");
	scroller.scrollTop = ${scrollTop};
	${PAUSE(250)}
	document.body.click();
	${PAUSE(150)}
	return scroller.scrollTop;
`;

const state = `
	return JSON.stringify({
		activeEl: document.activeElement?.className ?? null,
		modals: document.querySelectorAll(".modal-container").length,
		pathValue: document.querySelector(".lure-path-input")?.value ?? null,
		file: app.workspace.getActiveFile()?.path ?? null,
	});
`;
const look = async () => JSON.parse(await page.evaluate(state));

test("scrolled: Obsidian answers the first press with its dialog, not the inline title", async () => {
	await page.evaluate(arrange(4000));
	await pressKey(page, "F2");
	await page.evaluate(PAUSE(600) + "return true;");
	const s = await look();
	expect("a dialog is up", s.modals, 1);
	expect("its field has focus", s.activeEl, "rename-textarea");
});

test("scrolled: the rename key closes the dialog and hands over to the path bar", async () => {
	await page.evaluate(arrange(4000));
	await pressKey(page, "F2");
	await page.evaluate(PAUSE(600) + "return true;");
	await pressKey(page, "F2");
	await page.evaluate(PAUSE(600) + "return true;");
	const s = await look();
	expect("the dialog is gone", s.modals, 0);
	expect("the path bar has focus", s.activeEl, (v) => typeof v === "string" && v.includes("lure-path-input"));
	// The name, not the whole path: the rename key opens what a rename
	// usually changes, and further presses walk out to the paths (see
	// test-gestures). Renaming used to start with the whole path selected,
	// which put the extension and every folder in the firing line of the
	// first keystroke.
	expect("prefilled with the file's name", s.pathValue, NOTE.split("/").pop());
	// Cancel, not save: the press meant "the other target", and committing a
	// rename nobody typed would be a destructive reading of a navigation key.
	expect("the file was not renamed", s.file, NOTE);
});

test("scrolled: only the rename key closes the dialog", async () => {
	await page.evaluate(arrange(4000));
	await pressKey(page, "F2");
	await page.evaluate(PAUSE(600) + "return true;");
	// Deliberately keys Obsidian does nothing with. F1 was here first and
	// opened the Help window — a second Obsidian window, which then made
	// every later run ambiguous about which target to attach to. A test that
	// leaves a window open is residue like any other.
	for (const key of ["F3", "F7", "q"]) await pressKey(page, key);
	await page.evaluate(PAUSE(400) + "return true;");
	const s = await look();
	expect("other keys leave it up", s.modals, 1);
	expect("and still type into it", await page.evaluate(`return document.querySelector(".rename-textarea")?.value ?? null;`), "q");
});

test("the rename key walks the heading, the name, the extension and both paths, then round", async () => {
	await page.evaluate(arrange(0));
	const rung = async () => JSON.parse(await page.evaluate(`
		const input = document.querySelector(".lure-path-input");
		return JSON.stringify({
			active: document.activeElement?.className ?? null,
			value: input?.value ?? null,
			selected: input ? input.value.slice(input.selectionStart, input.selectionEnd) : null,
		});
	`));
	const seen = [];
	for (let i = 0; i < 6; i++) {
		await pressKey(page, "F2");
		await page.evaluate(PAUSE(650) + "return true;");
		seen.push(await rung());
	}
	const name = NOTE.split("/").pop();
	const stem = name.replace(/\.md$/, "");
	expect("the heading takes the first press", seen[0].active, "inline-title");
	expect("then the name without its extension", [seen[1].value, seen[1].selected], [name, stem]);
	expect("then the name with it", seen[2].selected, name);
	expect("then the path from the vault", seen[3].selected, NOTE);
	expect("then the path from the system root", seen[4].selected, (v) => typeof v === "string" && v.endsWith(NOTE) && v.startsWith("/"));
	// The last rung hands the key back rather than lapping the ladder: the
	// cycle is a way of choosing where to rename, and a loop with no way out
	// but Escape is not one.
	expect("and the press after that is the heading again", seen[5].active, "inline-title");
});

test("a taken name is reported by the key that uses it, not while it is typed", async () => {
	// Every name typed toward one that exists passes through names that may
	// exist too, so the warning used to flash up and away letter by letter,
	// about a name nobody had asked for yet. What is wrong with a name's
	// spelling is still said as it is spelled; that it is taken waits for
	// Enter, which refuses the rename and says so itself.
	await page.evaluate(`
		const neighbour = ${JSON.stringify(FIXTURE)} + "/Taken.md";
		if (!app.vault.getAbstractFileByPath(neighbour)) await app.vault.create(neighbour, "# taken\\n");
		return true;
	`);
	await page.evaluate(arrange(0));
	await pressKey(page, "F2");
	await page.evaluate(PAUSE(500) + "return true;");
	await pressKey(page, "F2");
	await page.evaluate(PAUSE(600) + "return true;");
	expect("the path bar has the rename", await page.evaluate(
		`return document.activeElement?.className?.includes("lure-path-input") ?? false;`), true);
	await page.evaluate(`
		const input = document.querySelector(".lure-path-input");
		input.select();
		return true;
	`);
	await page.send("Input.insertText", { text: "Taken" });
	await page.evaluate(PAUSE(600) + "return true;");
	const typed = JSON.parse(await page.evaluate(`
		return JSON.stringify({
			value: document.querySelector(".lure-path-input")?.value ?? null,
			tooltips: [...document.querySelectorAll(".tooltip.mod-error")].map((e) => e.textContent),
		});
	`));
	// The list offers the neighbour and the field takes the offer, so what
	// stands there is `Taken.md` — the very name that is taken, which is
	// what this case wants in front of Enter.
	expect("the name is in the field", typed.value, (v) => typeof v === "string" && v.startsWith("Taken"));
	expect("and nothing was said about it being taken", typed.tooltips, (v) => v.length === 0);

	await pressKey(page, "Enter");
	await page.evaluate(PAUSE(900) + "return true;");
	const asked = JSON.parse(await page.evaluate(`
		const modal = document.querySelector(".lure-collision-modal");
		return JSON.stringify({ text: modal?.textContent ?? "" });
	`));
	// Asked, not refused: the dialog names the file in the way.
	expect("the key that uses the name asks what to do about it", asked.text, (v) => v.includes("Taken.md"));
	await page.evaluate(`
		[...document.querySelectorAll(".lure-collision-modal button")].find((b) => !b.classList.contains("mod-cta") && b.textContent === "Cancel")?.click();
		${PAUSE(500)}
		return true;`);
	expect("and cancelling leaves the note where it was", await page.evaluate(
		`return !!app.vault.getAbstractFileByPath(${JSON.stringify(NOTE)});`), true);
	// A name that could never be a name is still answered as it is written.
	await page.evaluate(arrange(0));
	await pressKey(page, "F2");
	await page.evaluate(PAUSE(500) + "return true;");
	await pressKey(page, "F2");
	await page.evaluate(PAUSE(600) + "return true;");
	await page.evaluate(`document.querySelector(".lure-path-input")?.select(); return true;`);
	await page.send("Input.insertText", { text: "bad?name" });
	await page.evaluate(PAUSE(600) + "return true;");
	expect("an impossible name is still flagged as it is typed", await page.evaluate(
		`return document.querySelectorAll(".tooltip.mod-error").length;`), (v) => v > 0);
	await pressKey(page, "Escape");
});

test("the rename key leaves other dialogs alone", async () => {
	await page.evaluate(arrange(4000));
	// Obsidian's delete confirmation, opened without the rename command being
	// involved. "Only that one dialog" is the requirement: the key that
	// dismisses the rename prompt must not become a general modal-closer.
	// A destructive dialog is the strongest form of the test — if the key
	// reached it at all, a file would be gone.
	await page.evaluate(`
		if (!app.vault.getAbstractFileByPath("LureRename/victim.md"))
			await app.vault.create("LureRename/victim.md", "do not delete me");
		app.fileManager.promptForDeletion(app.vault.getAbstractFileByPath("LureRename/victim.md"));
		${PAUSE(800)}
		return true;
	`);
	expect("an unrelated dialog is up", (await look()).modals, 1);

	await pressKey(page, "F2");
	await page.evaluate(PAUSE(700) + "return true;");
	expect("it is still up after the rename key", (await look()).modals, 1);
	expect(
		"no rename dialog appeared beside it",
		await page.evaluate(`return document.querySelectorAll(".modal.mod-file-rename").length;`),
		0,
	);
	expect(
		"and the file it was asking about still exists",
		await page.evaluate(`return !!app.vault.getAbstractFileByPath("LureRename/victim.md");`),
		true,
	);

	await page.evaluate(`
		document.querySelector(".modal .mod-cancel")?.click();
		${PAUSE(300)}
		return true;
	`);
});

test("at the top: the alternation is untouched — inline title, then path bar", async () => {
	await page.evaluate(arrange(0));
	await pressKey(page, "F2");
	await page.evaluate(PAUSE(600) + "return true;");
	const first = await look();
	expect("no dialog at the top", first.modals, 0);
	expect("the inline title takes the first press", first.activeEl, "inline-title");

	await pressKey(page, "F2");
	await page.evaluate(PAUSE(600) + "return true;");
	const second = await look();
	expect("the path bar takes the second", second.activeEl, (v) => typeof v === "string" && v.includes("lure-path-input"));
});

/** The open field and whether the row is renaming, as one reading. */
const field = async () => JSON.parse(await page.evaluate(`
	const input = document.querySelector(".lure-path-input");
	return JSON.stringify({
		focused: document.activeElement === input && input !== null,
		value: input?.value ?? null,
		selection: input ? [input.selectionStart, input.selectionEnd] : null,
		renaming: document.querySelector(".workspace-leaf.mod-active .lure-rename-btn")?.classList.contains("is-active") ?? null,
	});
`));

/** Opens the field the way the focus command does, not for renaming. */
const focusCommand = async () => {
	await page.evaluate(`app.commands.executeCommandById("lure:focus-path-bar"); ${PAUSE(500)} return true;`);
};

test("F2 in an open field turns it into a rename where it stands", async () => {
	await page.evaluate(arrange(0));
	await focusCommand();
	await focusCommand();
	// Somewhere the ladder would never put it: a caret in the middle, and a
	// value nobody would get back by starting over.
	await page.evaluate(`
		const input = document.querySelector(".lure-path-input");
		input.focus();
		input.setSelectionRange(3, 7);
		return true;
	`);
	const before = await field();
	expect("the field is open for editing", [before.focused, before.renaming], [true, false]);
	await pressKey(page, "F2");
	await page.evaluate(PAUSE(500) + "return true;");
	const after = await field();
	expect("the row is renaming now", after.renaming, true);
	expect("with the same text", after.value, before.value);
	expect("and the same marked stretch", after.selection, [3, 7]);
	expect("still in the field", after.focused, true);
});

test("the focus key takes the rename off an open field and keeps the field", async () => {
	await page.evaluate(arrange(0));
	await pressKey(page, "F2");
	await page.evaluate(PAUSE(600) + "return true;");
	await pressKey(page, "F2");
	await page.evaluate(PAUSE(600) + "return true;");
	const before = await field();
	expect("renaming in the path bar", [before.focused, before.renaming], [true, true]);
	await focusCommand();
	const after = await field();
	expect("no longer renaming", after.renaming, false);
	expect("the text stays", after.value, before.value);
	expect("and so does the selection", after.selection, before.selection);
});

test("anything else pressed between the keys starts their cycle over", async () => {
	await page.evaluate(arrange(0));
	await pressKey(page, "F2");
	await page.evaluate(PAUSE(600) + "return true;");
	expect("the heading takes the first press", (await look()).activeEl, "inline-title");
	// A key that does nothing to the title's text: the cycle is over all the
	// same, because the user did something else in between.
	await pressKey(page, "ArrowRight");
	await page.evaluate(PAUSE(200) + "return true;");
	await pressKey(page, "F2");
	await page.evaluate(PAUSE(600) + "return true;");
	expect("so the next press is the heading's again, not the path bar's", (await look()).activeEl, "inline-title");
});

test("a click between the keys starts their cycle over too", async () => {
	await page.evaluate(arrange(0));
	await pressKey(page, "F2");
	await page.evaluate(PAUSE(600) + "return true;");
	await page.evaluate(`
		const r = document.querySelector(".workspace-leaf.mod-active .inline-title").getBoundingClientRect();
		return JSON.stringify([r.x + 4, r.y + r.height / 2]);
	`).then(async (xy) => {
		const [x, y] = JSON.parse(xy);
		for (const type of ["mousePressed", "mouseReleased"])
			await page.send("Input.dispatchMouseEvent", { type, x, y, button: "left", clickCount: 1 });
	});
	await page.evaluate(PAUSE(300) + "return true;");
	await pressKey(page, "F2");
	await page.evaluate(PAUSE(600) + "return true;");
	expect("the next press is the heading's again", (await look()).activeEl, "inline-title");
});

test("moving: a folder that already holds the name is red in the list", async () => {
	await page.evaluate(`
		const inner = ${JSON.stringify(FIXTURE)} + "/Other";
		if (!app.vault.getAbstractFileByPath(inner)) await app.vault.createFolder(inner);
		const clash = inner + "/" + ${JSON.stringify(NOTE.split("/").pop())};
		if (!app.vault.getAbstractFileByPath(clash)) await app.vault.create(clash, "");
		const free = ${JSON.stringify(FIXTURE)} + "/Free";
		if (!app.vault.getAbstractFileByPath(free)) await app.vault.createFolder(free);
		return true;
	`);
	await page.evaluate(arrange(0));
	await pressKey(page, "F2");
	await page.evaluate(PAUSE(600) + "return true;");
	await pressKey(page, "F2");
	await page.evaluate(PAUSE(600) + "return true;");
	await page.evaluate(`document.querySelector(".lure-path-input").select(); return true;`);
	await page.send("Input.insertText", { text: "r" });
	await page.evaluate(PAUSE(600) + "return true;");
	const rows = JSON.parse(await page.evaluate(`return JSON.stringify(Object.fromEntries(
		[...document.querySelectorAll(".suggestion-item")].map((e) => [
			e.querySelector(".lure-suggest-label")?.textContent, e.classList.contains("lure-suggest-taken")])));`));
	expect("the folder holding the name is marked taken", rows.Other, true);
	expect("a folder without it is not", rows.Free, false);
});

/**
 * Renames the fixture note onto a taken name through the path bar, and
 * answers the dialog: picks the entry of the second field's list with the
 * given label, or writes the given paths into the fields, then applies.
 * Returns the labelled entries the list offered.
 */
async function collide(typedPath, { idea = null, moving = null, occupant = null, whileOpen = null, apply = true } = {}) {
	await page.evaluate(arrange(0));
	await pressKey(page, "F2");
	await page.evaluate(PAUSE(500) + "return true;");
	await pressKey(page, "F2");
	await page.evaluate(PAUSE(600) + "return true;");
	// The path from the vault, so a folder can be named too.
	await pressKey(page, "F2");
	await page.evaluate(PAUSE(400) + "return true;");
	await pressKey(page, "F2");
	await page.evaluate(PAUSE(400) + "return true;");
	await page.evaluate(`document.querySelector(".lure-path-input").select(); return true;`);
	await page.send("Input.insertText", { text: typedPath });
	await page.evaluate(PAUSE(400) + "return true;");
	// The offer, if any, is taken back: the path is exactly what was typed.
	await pressKey(page, "Delete");
	await pressKey(page, "Enter");
	await page.evaluate(PAUSE(800) + "return true;");
	const ideas = JSON.parse(await page.evaluate(`return JSON.stringify(
		[...document.querySelectorAll(".lure-collision-idea .lure-collision-idea-label")].map((e) => e.textContent));`));
	if (whileOpen) await whileOpen();
	if (idea !== null) {
		await page.evaluate(`
			const row = [...document.querySelectorAll(".lure-collision-idea")]
				.find((e) => e.querySelector(".lure-collision-idea-label")?.textContent === ${JSON.stringify(idea)});
			row?.click();
			${PAUSE(300)}
			return true;`);
	}
	for (const [index, value] of [[0, moving], [1, occupant]]) {
		if (value === null) continue;
		await page.evaluate(`
			const input = document.querySelectorAll(".lure-collision-modal input")[${index}];
			input.value = ${JSON.stringify(value)};
			input.dispatchEvent(new Event("input"));
			return true;`);
	}
	if (apply) {
		await page.evaluate(`
			document.querySelector(".lure-collision-modal button.mod-cta")?.click();
			${PAUSE(1200)}
			return true;`);
	}
	return ideas;
}

const exists = (path) => page.evaluate(`return !!app.vault.getAbstractFileByPath(${JSON.stringify(path)});`);
/** Which of the two files stands at a path: the note, the other one, or nothing. */
const body = (path) => page.evaluate(`
	const file = app.vault.getAbstractFileByPath(${JSON.stringify(path)});
	if (!file) return "missing";
	const text = await app.vault.read(file);
	return text.startsWith("# Scrolling note") ? "note" : text.slice(0, 40);`);
const fixtureFiles = () => page.evaluate(
	`return app.vault.getFiles().filter((f) => f.path.startsWith(${JSON.stringify(FIXTURE)} + "/")).map((f) => f.path).sort().join(",");`);
const makeTaken = (taken) => page.evaluate(`
	const folder = ${JSON.stringify(taken)}.split("/").slice(0, -1).join("/");
	if (!app.vault.getAbstractFileByPath(folder)) await app.vault.createFolder(folder);
	if (!app.vault.getAbstractFileByPath(${JSON.stringify(taken)})) await app.vault.create(${JSON.stringify(taken)}, "occupant");
	return true;`);

test("a taken name: the one in the way can be sent anywhere by its path, red while that is taken", async () => {
	const taken = `${FIXTURE}/Taken.md`;
	await makeTaken(taken);
	await collide(taken, {
		occupant: `${FIXTURE}/Taken before.md`,
		whileOpen: async () => {
			const red = () => page.evaluate(`return document.querySelectorAll(".lure-collision-modal input")[1]?.classList.contains("is-taken") ?? null;`);
			expect("its field opens on its own path, in red", await red(), true);
			await page.evaluate(`const i = document.querySelectorAll(".lure-collision-modal input")[1]; i.value = ${JSON.stringify(`${FIXTURE}/Taken before.md`)}; i.dispatchEvent(new Event("input")); return true;`);
			expect("and a free path is not red", await red(), false);
		},
	});
	expect("the one in the way has its new name", await body(`${FIXTURE}/Taken before.md`), "occupant");
	expect("the note has the name it asked for", await body(taken), "note");
});

test("a taken name picked from the list asks what to do about it", async () => {
	const taken = `${FIXTURE}/Taken.md`;
	await makeTaken(taken);
	await page.evaluate(arrange(0));
	await pressKey(page, "F2");
	await page.evaluate(PAUSE(500) + "return true;");
	await pressKey(page, "F2");
	await page.evaluate(PAUSE(600) + "return true;");
	await page.evaluate(`document.querySelector(".lure-path-input").select(); return true;`);
	await page.send("Input.insertText", { text: "Tak" });
	await page.evaluate(PAUSE(500) + "return true;");
	const picked = await page.evaluate(`
		const row = [...document.querySelectorAll(".suggestion-item")]
			.find((e) => e.querySelector(".lure-suggest-label")?.textContent === "Taken.md");
		if (!row) return "no row";
		row.click();
		${PAUSE(800)}
		return document.querySelector(".lure-collision-modal")?.textContent ?? "no dialog";`);
	expect("the dialog asks about the file in the way", picked, (v) => v.includes("Taken.md") && v !== "no row");
	await page.evaluate(`
		[...document.querySelectorAll(".lure-collision-idea")].find((e) => e.textContent.startsWith("Swap names"))?.click();
		${PAUSE(300)}
		document.querySelector(".lure-collision-modal button.mod-cta")?.click();
		${PAUSE(1200)}
		return true;`);
	expect("and does what was chosen", await body(taken), "note");
});

test("a taken name in the same folder: one trade, swapping names, and names beside its own", async () => {
	const taken = `${FIXTURE}/Taken.md`;
	await makeTaken(taken);
	const ideas = await collide(taken, { idea: "Swap names" });
	expect("the trades that mean something here", ideas, ["Swap names"]);
	expect("the note has the taken name", await body(taken), "note");
	expect("and the other has the note's", await body(NOTE), "occupant");
});

test("a taken name of the same name in another folder: one trade, swapping places", async () => {
	const taken = `${FIXTURE}/Elsewhere/Scrolling note.md`;
	await makeTaken(taken);
	const ideas = await collide(taken, { idea: "Swap places" });
	expect("the trades that mean something here", ideas, ["Swap places"]);
	expect("the note is over there", await body(taken), "note");
	expect("and the other one is here", await body(NOTE), "occupant");
});

for (const [idea, occupantAt] of [
	["Swap places", `${FIXTURE}/Other.md`],
	["Swap names", `${FIXTURE}/Elsewhere/Scrolling note.md`],
	["Swap both", NOTE],
]) {
	test(`a different taken name in another folder: all three trades, and "${idea}" does what it says`, async () => {
		const taken = `${FIXTURE}/Elsewhere/Other.md`;
		await makeTaken(taken);
		const ideas = await collide(taken, { idea });
		expect("all three trades are offered", ideas, ["Swap places", "Swap names", "Swap both"]);
		expect("the note has the name it asked for", await body(taken), "note");
		expect("the other one is where the trade puts it", await body(occupantAt), "occupant");
		expect("and nothing is left behind", await fixtureFiles(), [taken, occupantAt].sort().join(","));
	});
}

test("the moving file's own path can be changed instead, leaving the one in the way alone", async () => {
	const taken = `${FIXTURE}/Taken.md`;
	await makeTaken(taken);
	await collide(taken, { moving: `${FIXTURE}/Fresh.md` });
	expect("the note went where the field says", await body(`${FIXTURE}/Fresh.md`), "note");
	expect("and the other stayed", await body(taken), "occupant");
});

test("two paths that would collide are refused, and say why", async () => {
	const taken = `${FIXTURE}/Taken.md`;
	await makeTaken(taken);
	await collide(taken, { apply: false });
	const refused = await page.evaluate(`
		document.querySelector(".lure-collision-modal button.mod-cta")?.click();
		${PAUSE(400)}
		return JSON.stringify({ open: !!document.querySelector(".lure-collision-modal"), said: document.querySelector(".lure-collision-error")?.textContent ?? "" });`);
	expect("both left on one path: the dialog stays, with a reason", JSON.parse(refused), (v) => v.open && v.said.length > 0);
	await page.evaluate(`[...document.querySelectorAll(".lure-collision-modal button")].find((b) => b.textContent === "Cancel")?.click(); ${PAUSE(400)} return true;`);
	expect("and cancelling moves nothing", [await body(NOTE), await body(taken)], ["note", "occupant"]);
});

test("both fields have a list, and a way out that is taken is greyed and cannot be picked", async () => {
	const taken = `${FIXTURE}/Taken.md`;
	await makeTaken(taken);
	await makeTaken(`${FIXTURE}/Taken-1.md`);
	await collide(taken, {
		apply: false,
		whileOpen: async () => {
			const state = JSON.parse(await page.evaluate(`
				const rows = [...document.querySelectorAll(".lure-collision-idea")];
				const one = rows.find((e) => e.getAttribute("aria-label") === null && e.textContent.endsWith("Taken-1.md"));
				one?.click();
				${PAUSE(300)}
				const field = document.querySelectorAll(".lure-collision-modal input")[1].value;
				document.querySelectorAll(".lure-collision-modal input")[0].focus();
				document.querySelectorAll(".lure-collision-modal input")[0].dispatchEvent(new Event("input"));
				${PAUSE(400)}
				return JSON.stringify({
					greyed: one?.classList.contains("is-unavailable") ?? null,
					field,
					moving: [...document.querySelectorAll(".lure-collision-idea")].map((e) => e.textContent),
				});`));
			expect("the taken way out is greyed", state.greyed, true);
			expect("and picking it changes nothing", state.field, taken);
			expect("the moving file's field has its own list, staying put included", state.moving, (v) => v.some((x) => x.startsWith("Stay where it is")));
		},
	});
	await page.evaluate(`[...document.querySelectorAll(".lure-collision-modal button")].find((b) => b.textContent === "Cancel")?.click(); ${PAUSE(400)} return true;`);
});

async function reset() {
	await reloadPlugin(page);
	// From nothing: the collision cases leave files behind them that the next
	// case would otherwise find already in its way.
	await page.evaluate(`
		// Cancelled rather than closed by its corner button, which this
		// Obsidian does not draw on every modal: left open, the dialog
		// would sit over every case after the one that failed.
		for (const modal of document.querySelectorAll(".lure-collision-modal")) {
			[...modal.querySelectorAll("button")].find((b) => b.textContent === "Cancel")?.click();
		}
		const folder = app.vault.getAbstractFileByPath(${JSON.stringify(FIXTURE)});
		if (folder) await app.vault.delete(folder, true);
		return true;
	`);
	await buildFixture();
}

async function teardown() {
	// This vault is also the one the README screenshots come from, and a test
	// that throws never reaches its own cleanup — so the fixture is dropped here,
	// where every run arrives regardless of outcome.
	await page.evaluate(`
		document.querySelector(".modal.mod-file-rename .mod-cancel")?.click();
		${PAUSE(150)}
		document.activeElement?.blur?.();
		const folder = app.vault.getAbstractFileByPath(${JSON.stringify(FIXTURE)});
		if (folder) await app.vault.adapter.rmdir(folder.path, true);
		return true;
	`);
	await setVaultConfig(page, LINKS_AT_START);
	page.close();
}

/**
 * This suite is about where the *focus* goes, so it cannot run in a window
 * that cannot give focus to anything.
 *
 * Obsidian's own `workspace:edit-file-title` reports success and focuses
 * nothing when its window is obscured by a fullscreen application — verified
 * with this plugin disabled, so it is the app's behaviour rather than
 * anything here. Every assertion below then reports `document.body` where it
 * wanted an editable element, which reads exactly like a broken feature and
 * has been mistaken for one more than once.
 *
 * The condition is *tried* rather than inferred. An earlier version of this
 * guard read Obsidian's `is-focused` body class and was wrong both ways: an
 * obscured window can report `document.hasFocus()` true, `visibilityState`
 * "visible" and 61 frames a second, while a perfectly workable window driven
 * from a terminal is simply not frontmost and has `is-focused` false. The
 * flag refused runs that would have passed.
 */
// The trial needs something to try on, and `reset` does not run until the
// first case starts.
await buildFixture();
if (!(await canFocusEditable(page, NOTE))) {
	console.log(
		"\nThis window cannot put the caret in an editable element, so nothing\n" +
			"here can be measured. Obsidian behaves this way while it is obscured by\n" +
			"a fullscreen application — bring its window to the front and run again.",
	);
	await teardown();
	process.exit(2);
}
// The other way this window can be wrong: the caret goes in, the row is
// measurable, and every rename the suite commits then hangs. See
// `canRenameFiles`.
if (!(await canRenameFiles(page))) {
	console.log(
		"\nThis window's file renames never settle — fileManager.renameFile\n" +
			"neither resolves nor rejects and nothing reaches the disk, while every\n" +
			"other API keeps answering. Restart Obsidian and run again.",
	);
	await teardown();
	process.exit(2);
}

await run();
