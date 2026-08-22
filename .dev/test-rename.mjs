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

import { appIsFocused, connect, PAUSE, pressKey, quiesce, reloadPlugin } from "./cdpSession.mjs";
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

async function reset() {
	await reloadPlugin(page);
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
	page.close();
}

/**
 * This suite is about where the *focus* goes, so it cannot run against a
 * window that does not have any.
 *
 * Obsidian's own `workspace:edit-file-title` reports success and does nothing
 * while its window is not frontmost — verified with this plugin disabled, so
 * it is the app's behaviour rather than anything here — and a contenteditable
 * cannot be focused in that state either. Every assertion below then reports
 * `document.body` where it wanted an editable element, which reads exactly
 * like a broken feature and has been mistaken for one more than once.
 *
 * Refused outright rather than reported as failures: a suite that cannot
 * observe what it is about has nothing to say, and saying nothing loudly is
 * more use than saying the wrong thing six times.
 */
if (!(await appIsFocused(page))) {
	console.log(
		"\nObsidian's window is not focused, so nothing here can be measured.\n" +
			"Click the Obsidian window and run this again. (Under Wayland it cannot be\n" +
			"focused from a script: wmctrl and xdotool only see XWayland windows.)",
	);
	await teardown();
	process.exit(2);
}

await run();
