#!/usr/bin/env node
/**
 * Behavioural tests for dropping *content* onto the row: text out of an
 * editor, a file off the desktop, a note out of this vault.
 *
 * A real pointer drag cannot be driven through CDP at all, so every case
 * builds a `DataTransfer` in the page and dispatches the `DragEvent`s over
 * it — which is what `test-external.mjs` does for the move drags, one level
 * down: those drive Obsidian's drag manager, and these drive the browser's
 * own payload, because text from outside the app never becomes an Obsidian
 * payload at all.
 *
 *   node .dev/test-drop.mjs           # all
 *   node .dev/test-drop.mjs confirm   # only tests whose name matches
 *
 * Requires --remote-debugging-port=9222 and OBSIDIAN_VAULT set.
 */

import { connect, PAUSE, pressKey, quiesce, reloadPlugin, setSettings } from "./cdpSession.mjs";
import { createSuite } from "./harness.mjs";

const ROOT = "LureDrop";
const TEXT = "dropped line one\ndropped line two";

const page = await connect();

const { test, expect, run } = createSuite({ reset, teardown });

const buildFixtures = `
	const mk = async (p) => { if (!app.vault.getAbstractFileByPath(p)) await app.vault.createFolder(p); };
	await mk("${ROOT}");
	await mk("${ROOT}/inner");
	if (!app.vault.getAbstractFileByPath("${ROOT}/inner/leaf.md")) {
		await app.vault.create("${ROOT}/inner/leaf.md", "# leaf\\n");
	}
	if (!app.vault.getAbstractFileByPath("${ROOT}/target.md")) {
		await app.vault.create("${ROOT}/target.md", "# target\\n");
	}
	if (!app.vault.getAbstractFileByPath("${ROOT}/source.md")) {
		await app.vault.create("${ROOT}/source.md", "carried by the drag\\n");
	}
	${PAUSE(400)}
	return true;
`;

const openLeaf = `
	document.querySelector(".lure-path-input")?.blur();
	document.body.click();
	${PAUSE(250)}
	app.workspace.getLeavesOfType("empty").forEach((l) => l.detach());
	app.workspace.getLeavesOfType("markdown").slice(1).forEach((l) => l.detach());
	${PAUSE(250)}
	await app.workspace.getLeaf(false).openFile(app.vault.getAbstractFileByPath("${ROOT}/inner/leaf.md"));
	${PAUSE(800)}
	return app.workspace.getActiveFile()?.path ?? null;
`;

/**
 * Where on the row a drop should land, as a selector.
 *
 * The folder segments are asked for inside `.view-header-title-parent`,
 * which is Obsidian's own breadcrumb. The vault name carries the same
 * `view-header-breadcrumb` class but is this plugin's own element and lives
 * outside that parent — counting from the container instead made index 1
 * the *first* folder rather than the second, and the case that thought it
 * was dropping on `inner` was dropping on its parent.
 */
const PARENT = `app.workspace.getMostRecentLeaf().view.containerEl.querySelector(".view-header-title-parent")`;
const TARGETS = {
	vault: `app.workspace.getMostRecentLeaf().view.containerEl.querySelector(".lure-vault-segment")`,
	folder: `${PARENT}.querySelectorAll(".view-header-breadcrumb")[1]`,
	delimiter: `${PARENT}.querySelectorAll(".view-header-breadcrumb-separator")[1]`,
	name: `app.workspace.getMostRecentLeaf().view.containerEl.querySelector(".lure-filename-text")`,
};

/**
 * Drags `payload` over `where` and lets go.
 *
 * `dragover` first and separately, because that is the pass that decides
 * whether a drop happens at all: a target that does not call
 * `preventDefault` there never receives the drop, so the ring read between
 * the two is also the answer to "would this land".
 */
function dropOn(where, payload) {
	return `
		const el = ${TARGETS[where]};
		if (!el) return JSON.stringify({ found: false });
		const dt = new DataTransfer();
		${payload}
		const at = el.getBoundingClientRect();
		const make = (type) => new DragEvent(type, {
			dataTransfer: dt, bubbles: true, cancelable: true,
			clientX: Math.round(at.x + at.width / 2), clientY: Math.round(at.y + at.height / 2),
		});
		el.dispatchEvent(make("dragenter"));
		const over = make("dragover");
		el.dispatchEvent(over);
		const ringed = !!document.querySelector(".view-header-title-container.lure-drop-content");
		el.dispatchEvent(make("drop"));
		${PAUSE(900)}
		return JSON.stringify({ found: true, accepted: over.defaultPrevented, ringed });
	`;
}

const TEXT_PAYLOAD = `dt.setData("text/plain", ${JSON.stringify(TEXT)});`;
const FILE_PAYLOAD = `dt.items.add(new File([${JSON.stringify(TEXT)}], "notes.txt", { type: "text/plain" }));`;
const BINARY_PAYLOAD = `dt.items.add(new File([new Uint8Array([137,80,78,71])], "shot.png", { type: "image/png" }));`;
/** Obsidian's own payload, which the folder segments already answer with a move. */
const VAULT_PAYLOAD = `
	app.dragManager.draggable = { type: "file", file: app.vault.getAbstractFileByPath("${ROOT}/source.md") };
	dt.setData("text/plain", "[[source]]");
`;

const rowState = `
	const bc = app.plugins.plugins.lure.manager.instances.get(app.workspace.getMostRecentLeaf());
	const input = document.querySelector(".lure-path-input");
	return JSON.stringify({
		field: input ? input.value : null,
		ring: !!document.querySelector(".view-header-title-container.lure-drop-content"),
		held: bc.pendingDrop ? bc.pendingDrop.text : null,
		browsing: bc.browsePath,
		modal: document.querySelector(".modal-container .modal-title")?.textContent ?? null,
	});
`;

const contentOf = (path) => `
	const file = app.vault.getAbstractFileByPath(${JSON.stringify(path)});
	return file ? await app.vault.read(file) : null;
`;

/** Answers the confirmation, which every drop onto an existing note raises. */
async function answerModal(accept) {
	return await page.evaluate(`
		const modal = document.querySelector(".modal-container .modal");
		if (!modal) return false;
		const button = modal.querySelector(".mod-cta");
		const cancel = modal.querySelectorAll("button")[0];
		${accept ? "button?.click();" : "cancel?.click();"}
		${PAUSE(700)}
		return true;
	`);
}

/** Types a name into the open field and commits it. */
async function commitName(name) {
	await page.evaluate(`
		const input = document.querySelector(".lure-path-input");
		if (input) { input.focus(); input.setSelectionRange(input.value.length, input.value.length); }
		return !!input;
	`);
	await page.send("Input.insertText", { text: name });
	await page.evaluate(PAUSE(400) + "return true;");
	await pressKey(page, "Enter");
	await page.evaluate(PAUSE(1200) + "return true;");
}

test("text dropped on a folder opens the field there and holds what was dropped", async () => {
	const r = JSON.parse(await page.evaluate(dropOn("folder", TEXT_PAYLOAD)));
	expect("the folder is on the row", r.found, true);
	expect("the drag was accepted", r.accepted, true);
	expect("and rings blue while it is over", r.ringed, true);
	const s = JSON.parse(await page.evaluate(rowState));
	expect("the field opened empty, to be named", s.field, "");
	expect("standing in the folder that took it", s.browsing, `${ROOT}/inner`);
	expect("still holding the text", s.held, TEXT);
	expect("and still ringed, because nothing is written yet", s.ring, true);
});

test("naming a new note is what writes it, with no second question", async () => {
	await page.evaluate(dropOn("folder", TEXT_PAYLOAD));
	await commitName("caught.md");
	const s = JSON.parse(await page.evaluate(rowState));
	expect("nothing was asked", s.modal, null);
	expect("the ring is down", s.ring, false);
	expect("and nothing is still held", s.held, null);
	const body = await page.evaluate(contentOf(`${ROOT}/inner/caught.md`));
	expect("the note was made holding it", body, `${TEXT}\n`);
	const active = await page.evaluate(`return app.workspace.getActiveFile()?.path ?? null;`);
	expect("and opened", active, `${ROOT}/inner/caught.md`);
});

test("naming a note that already exists asks first, and adds to the end", async () => {
	await page.evaluate(dropOn("folder", TEXT_PAYLOAD));
	await commitName("leaf.md");
	const asking = JSON.parse(await page.evaluate(rowState));
	expect("this one is asked about", asking.modal, (v) => typeof v === "string" && v.length > 0);
	await answerModal(true);
	const body = await page.evaluate(contentOf(`${ROOT}/inner/leaf.md`));
	expect("what was there is still there, first", body, (v) => v.startsWith("# leaf\n"));
	expect("and the drop is on the end", body, (v) => v.trimEnd().endsWith(TEXT));
});

test("saying no to that leaves the note alone", async () => {
	await page.evaluate(dropOn("folder", TEXT_PAYLOAD));
	await commitName("leaf.md");
	await answerModal(false);
	const body = await page.evaluate(contentOf(`${ROOT}/inner/leaf.md`));
	expect("untouched", body, "# leaf\n");
});

test("text dropped on the vault name is named from the vault root", async () => {
	await setSettings(page, { accessExternalFiles: false });
	const r = JSON.parse(await page.evaluate(dropOn("vault", TEXT_PAYLOAD)));
	expect("accepted", r.accepted, true);
	const s = JSON.parse(await page.evaluate(rowState));
	expect("standing at the root", s.browsing, "");
	expect("holding the text", s.held, TEXT);
	await commitName("at-the-root.md");
	const body = await page.evaluate(contentOf("at-the-root.md"));
	expect("made at the vault root", body, `${TEXT}\n`);
	await page.evaluate(`
		const stray = app.vault.getAbstractFileByPath("at-the-root.md");
		if (stray) await app.vault.delete(stray, true);
		${PAUSE(300)}
		return true;
	`);
});

test("text dropped on the note's name goes straight onto the end of it, once confirmed", async () => {
	const r = JSON.parse(await page.evaluate(dropOn("name", TEXT_PAYLOAD)));
	expect("accepted", r.accepted, true);
	const asking = JSON.parse(await page.evaluate(rowState));
	expect("asked before anything is written", asking.modal, (v) => typeof v === "string" && v.length > 0);
	expect("no field: this drop already names its note", asking.field, null);
	await answerModal(true);
	const body = await page.evaluate(contentOf(`${ROOT}/inner/leaf.md`));
	expect("added to the note the row is showing", body, (v) => v.trimEnd().endsWith(TEXT));
});

test("a file off the desktop is read and added the same way", async () => {
	await page.evaluate(dropOn("name", FILE_PAYLOAD));
	const asking = JSON.parse(await page.evaluate(rowState));
	expect("asked", asking.modal, (v) => typeof v === "string" && v.length > 0);
	await answerModal(true);
	const body = await page.evaluate(contentOf(`${ROOT}/inner/leaf.md`));
	expect("its text is on the end", body, (v) => v.trimEnd().endsWith(TEXT));
});

test("a binary file is refused rather than pasted as mojibake", async () => {
	await page.evaluate(dropOn("name", BINARY_PAYLOAD));
	const s = JSON.parse(await page.evaluate(rowState));
	expect("nothing to answer", s.modal, null);
	expect("and the ring is down", s.ring, false);
	const body = await page.evaluate(contentOf(`${ROOT}/inner/leaf.md`));
	expect("the note is untouched", body, "# leaf\n");
});

test("a note dragged onto the note's name adds what it says", async () => {
	await page.evaluate(dropOn("name", VAULT_PAYLOAD));
	const asking = JSON.parse(await page.evaluate(rowState));
	expect("asked", asking.modal, (v) => typeof v === "string" && v.length > 0);
	await answerModal(true);
	const body = await page.evaluate(contentOf(`${ROOT}/inner/leaf.md`));
	expect("what the dragged note says, not a link to it", body, (v) => v.includes("carried by the drag"));
	expect("and not the link the same drag also carried", body, (v) => !v.includes("[[source]]"));
});

test("a note dragged onto a folder is still a move, and is not taken as content", async () => {
	// The one place the two gestures would land on the same spot. Obsidian's
	// drag manager answers it there and has done since before this existed,
	// so content stands back — otherwise dropping a note on a folder would
	// mean two things at once.
	// Not asserted through `defaultPrevented`: Obsidian's own drop handler
	// accepts the drag on that segment, which is the whole point, so the
	// event is prevented either way. What has to be true is that *this* is
	// not what answered it.
	const r = JSON.parse(await page.evaluate(dropOn("folder", VAULT_PAYLOAD)));
	expect("no blue ring", r.ringed, false);
	const s = JSON.parse(await page.evaluate(rowState));
	expect("no field opened", s.field, null);
	expect("and nothing is held", s.held, null);
});

test("Escape lets go of a drop the field was still holding", async () => {
	await page.evaluate(dropOn("folder", TEXT_PAYLOAD));
	const held = JSON.parse(await page.evaluate(rowState));
	expect("held to begin with", held.held, TEXT);
	await pressKey(page, "Escape");
	await page.evaluate(PAUSE(600) + "return true;");
	const after = JSON.parse(await page.evaluate(rowState));
	expect("let go", after.held, null);
	expect("the ring is down", after.ring, false);
	expect("and the field is gone", after.field, null);
});

test("dragging away again takes the ring back down", async () => {
	const s = JSON.parse(await page.evaluate(`
		const el = ${TARGETS.folder};
		const dt = new DataTransfer();
		${TEXT_PAYLOAD}
		const make = (type) => new DragEvent(type, { dataTransfer: dt, bubbles: true, cancelable: true });
		el.dispatchEvent(make("dragenter"));
		el.dispatchEvent(make("dragover"));
		const on = !!document.querySelector(".lure-drop-content");
		el.dispatchEvent(make("dragleave"));
		${PAUSE(300)}
		const off = !!document.querySelector(".lure-drop-content");
		return JSON.stringify({ on, off });
	`));
	expect("up while it is over", s.on, true);
	expect("down once it leaves", s.off, false);
});

test("nothing lands while the row is being typed into", async () => {
	await page.evaluate(`
		app.workspace.getMostRecentLeaf().view.containerEl
			.querySelector(".lure-filename-text").click();
		${PAUSE(400)}
		return true;
	`);
	const r = JSON.parse(await page.evaluate(dropOn("folder", TEXT_PAYLOAD)));
	expect("declined", r.accepted, false);
	const s = JSON.parse(await page.evaluate(rowState));
	expect("nothing held", s.held, null);
	await pressKey(page, "Escape");
});

async function reset() {
	await reloadPlugin(page);
	await quiesce(page);
	await page.evaluate(`
		// A payload left standing by a case would make the next one's plain
		// text drag look like a vault drag.
		if (app.dragManager) app.dragManager.draggable = null;
		document.querySelectorAll(".modal-container").forEach((el) => el.remove());
		const root = app.vault.getAbstractFileByPath("${ROOT}");
		if (root) await app.vault.adapter.rmdir("${ROOT}", true);
		${PAUSE(300)}
		return true;
	`);
	await page.evaluate(buildFixtures);
	await page.evaluate(openLeaf);
}

async function teardown() {
	await page.evaluate(`
		if (app.dragManager) app.dragManager.draggable = null;
		document.querySelector(".lure-path-input")?.blur();
		document.querySelectorAll(".modal-container").forEach((el) => el.remove());
		app.workspace.getLeavesOfType("empty").forEach((l) => l.detach());
		document.querySelectorAll(".notice").forEach((n) => n.remove());
		${PAUSE(300)}
		const root = app.vault.getAbstractFileByPath("${ROOT}");
		if (root) await app.vault.adapter.rmdir("${ROOT}", true);
		const stray = app.vault.getAbstractFileByPath("at-the-root.md");
		if (stray) await app.vault.delete(stray, true);
		${PAUSE(300)}
		return true;
	`);
	await setSettings(page, { accessExternalFiles: false });
	page.close();
}

await run();
