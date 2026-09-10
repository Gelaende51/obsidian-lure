#!/usr/bin/env node
/**
 * Behavioural tests for making a folder's note from the row: a second press
 * on whichever part of it opens the folder.
 *
 * Needs the **Folder notes** plugin (LostPaul) installed in the vault — not
 * enabled, which each case does for itself, because half of what is under
 * test is the row keeping quiet while no folder-note plugin is running.
 * Missing, the suite exits 2 rather than failing: that is the environment
 * being wrong, not the code.
 *
 * Real presses, with `clickCount: 2` on the second, because the browser's
 * own `dblclick` is what the row listens for and a dispatched MouseEvent
 * never produces one — the same road the middle-button and vault-name cases
 * in `test-gestures.mjs` had to take.
 *
 *   node .dev/test-foldernote.mjs            # all
 *   node .dev/test-foldernote.mjs convention # only tests whose name matches
 *
 * Requires --remote-debugging-port=9222 and OBSIDIAN_VAULT set.
 */

import { connect, PAUSE, quiesce, reloadPlugin, setSettings } from "./cdpSession.mjs";
import { createSuite } from "./harness.mjs";

const ROOT = "LureFolderNote";
const PEER = "folder-notes";

const page = await connect();

const { test, expect, run } = createSuite({ reset, teardown });

const buildFixtures = `
	const mk = async (p) => { if (!app.vault.getAbstractFileByPath(p)) await app.vault.createFolder(p); };
	await mk("${ROOT}");
	await mk("${ROOT}/child");
	if (!app.vault.getAbstractFileByPath("${ROOT}/child/leaf.md")) {
		await app.vault.create("${ROOT}/child/leaf.md", "# fixture\\n");
	}
	${PAUSE(400)}
	return true;
`;

/** Opens the fixture note so the row reads `vault / ROOT / child / leaf.md`. */
const openLeaf = `
	document.querySelector(".lure-path-input")?.blur();
	document.body.click();
	${PAUSE(250)}
	app.workspace.getLeavesOfType("empty").forEach((l) => l.detach());
	app.workspace.getLeavesOfType("markdown").slice(1).forEach((l) => l.detach());
	${PAUSE(250)}
	await app.workspace.getLeaf(false).openFile(app.vault.getAbstractFileByPath("${ROOT}/child/leaf.md"));
	${PAUSE(800)}
	return app.workspace.getActiveFile()?.path ?? null;
`;

/**
 * Where on screen the part of the row that names `child` is.
 *
 * Two separators and two segments sit between the vault name and the file
 * name; index 1 is `child` either way, since separator i sits directly
 * after segment i.
 */
const spotOf = (what) => `
	const parent = app.workspace.getMostRecentLeaf().view.containerEl
		.querySelector(".view-header-title-parent");
	const els = parent.querySelectorAll(${JSON.stringify(
		what === "delimiter" ? ".view-header-breadcrumb-separator" : ".view-header-breadcrumb",
	)});
	const el = els[1];
	if (!el) return null;
	const r = el.getBoundingClientRect();
	if (r.width < 2 || r.height < 2) return null;
	return JSON.stringify({ x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2), text: el.textContent });
`;

async function press(spot, clickCount) {
	for (const type of ["mousePressed", "mouseReleased"]) {
		await page.send("Input.dispatchMouseEvent", {
			type,
			x: spot.x,
			y: spot.y,
			button: "left",
			buttons: type === "mousePressed" ? 1 : 0,
			clickCount,
		});
	}
}

/** One press then a second: what the browser turns into a `dblclick`. */
async function doublePress(what) {
	const raw = await page.evaluate(spotOf(what));
	if (!raw) return null;
	const spot = JSON.parse(raw);
	await press(spot, 1);
	await page.evaluate(PAUSE(120) + "return true;");
	await press(spot, 2);
	await page.evaluate(PAUSE(1200) + "return true;");
	return spot;
}

const state = `
	return JSON.stringify({
		active: app.workspace.getActiveFile()?.path ?? null,
		made: app.vault.getAllLoadedFiles().map((f) => f.path).filter((p) => p.startsWith("${ROOT}")).sort(),
	});
`;

/** Turns the peer on and writes the settings a case depends on. */
async function withPeer(patch = {}) {
	return JSON.parse(await page.evaluate(`
		if (!app.plugins.plugins[${JSON.stringify(PEER)}]) {
			await app.plugins.enablePlugin(${JSON.stringify(PEER)});
		}
		${PAUSE(900)}
		const peer = app.plugins.plugins[${JSON.stringify(PEER)}];
		if (!peer) return JSON.stringify({ on: false });
		Object.assign(peer.settings, ${JSON.stringify(patch)});
		${PAUSE(200)}
		return JSON.stringify({ on: true, name: peer.settings.folderNoteName, where: peer.settings.storageLocation });
	`));
}

test("the delimiter's second press makes the folder's note and goes to it", async () => {
	const peer = await withPeer();
	expect("the peer is running", peer.on, true);
	const spot = await doublePress("delimiter");
	expect("the delimiter is on the row", spot, (v) => v !== null);
	const s = JSON.parse(await page.evaluate(state));
	expect("made where the convention says", s.made, (v) => v.includes(`${ROOT}/child/child.md`));
	expect("and opened", s.active, `${ROOT}/child/child.md`);
});

test("a second press where a note already exists opens it rather than making another", async () => {
	await withPeer();
	await page.evaluate(`
		if (!app.vault.getAbstractFileByPath("${ROOT}/child/child.md")) {
			await app.vault.create("${ROOT}/child/child.md", "# already here\\n");
		}
		${PAUSE(400)}
		return true;
	`);
	const before = JSON.parse(await page.evaluate(state));
	await doublePress("delimiter");
	const after = JSON.parse(await page.evaluate(state));
	expect("nothing new", after.made, before.made);
	expect("the one that was there is what opened", after.active, `${ROOT}/child/child.md`);
	const kept = await page.evaluate(`
		return await app.vault.read(app.vault.getAbstractFileByPath("${ROOT}/child/child.md"));
	`);
	expect("and it was not written over", kept, "# already here\n");
});

test("the convention is the peer's, not ours: a renamed note lands under its own name", async () => {
	const peer = await withPeer({ folderNoteName: "_index" });
	expect("the peer took the setting", peer.name, "_index");
	await doublePress("delimiter");
	const s = JSON.parse(await page.evaluate(state));
	expect("named the way that vault names them", s.made, (v) => v.includes(`${ROOT}/child/_index.md`));
	expect("and not the way we would have", s.made, (v) => !v.includes(`${ROOT}/child/child.md`));
	expect("opened", s.active, `${ROOT}/child/_index.md`);
});

test("the convention is the peer's about where, too: beside the folder rather than in it", async () => {
	const peer = await withPeer({ storageLocation: "parentFolder" });
	expect("the peer took the setting", peer.where, "parentFolder");
	await doublePress("delimiter");
	const s = JSON.parse(await page.evaluate(state));
	expect("made beside the folder", s.made, (v) => v.includes(`${ROOT}/child.md`));
	expect("and not inside it", s.made, (v) => !v.includes(`${ROOT}/child/child.md`));
});

test("with the swap off the name carries it, because the name is what opens the folder", async () => {
	// The whole of "like everything else": folder-note duty sits on whichever
	// target opens the folder, and that moves with the setting — so the
	// delimiter, which now only descends, must stop answering for it.
	await withPeer();
	await setSettings(page, { swapSegmentActions: false });
	await page.evaluate(openLeaf);
	await doublePress("folder");
	const s = JSON.parse(await page.evaluate(state));
	expect("the name made it", s.made, (v) => v.includes(`${ROOT}/child/child.md`));
	expect("and opened it", s.active, `${ROOT}/child/child.md`);
});

test("with the swap off the delimiter no longer answers for it", async () => {
	await withPeer();
	await setSettings(page, { swapSegmentActions: false });
	await page.evaluate(openLeaf);
	const before = JSON.parse(await page.evaluate(state));
	await doublePress("delimiter");
	const after = JSON.parse(await page.evaluate(state));
	expect("nothing was made", after.made, before.made);
});

test("a folder's note is grey in the list, and so is the field naming it", async () => {
	await withPeer();
	await page.evaluate(`await app.vault.create("${ROOT}/child/child.md", ""); ${PAUSE(300)} return true;`);
	await page.evaluate(openLeaf);
	const listed = JSON.parse(await page.evaluate(`
		const root = app.workspace.getMostRecentLeaf().view.containerEl.querySelector(".view-header-title-container");
		root.querySelector(".lure-filename-text").click();
		${PAUSE(500)}
		const rows = [...document.querySelectorAll(".suggestion-item")];
		const row = (name) => rows.find((r) => r.querySelector(".lure-suggest-label")?.textContent === name)?.className ?? null;
		return JSON.stringify({ note: row("child.md"), other: row("leaf.md") });
	`));
	expect("the folder's note is marked as one", listed.note, (v) => typeof v === "string" && v.includes("lure-suggest-folder-note"));
	expect("the note beside it is not", listed.other, (v) => typeof v === "string" && !v.includes("lure-suggest-folder-note"));

	await page.evaluate(`document.querySelector(".lure-path-input")?.select(); return true;`);
	await page.send("Input.insertText", { text: "child" });
	await page.evaluate(PAUSE(400) + "return true;");
	expect("and the field heading for it wears the same grey",
		await page.evaluate(`return document.querySelector(".lure-path-input")?.dataset.lureTint ?? null;`), "folder-note");
});

test("with no folder-note plugin running, nothing is made", async () => {
	// Folder notes are a convention, not a fact about the filesystem. A vault
	// with no plugin managing them has no such thing, and inventing one here
	// would make two identical-looking vaults behave differently.
	const off = await page.evaluate(`
		// Keyed off the loaded instance, not the saved list. Guarding this
		// with \`enabledPlugins\` disabled nothing at all, since a plugin
		// switched on with \`enablePlugin\` was never added to that set —
		// and the case then passed or failed on which suite had run before.
		for (const id of ${JSON.stringify(["folder-notes", "folder-note-plugin", "create-folder-notes-with-dropdown"])}) {
			if (app.plugins.plugins[id]) await app.plugins.disablePlugin(id);
		}
		${PAUSE(900)}
		// The loaded instance, not the saved list: disabling unloads the
		// plugin, and the saved list never had it in the first place here.
		return !!app.plugins.plugins[${JSON.stringify(PEER)}];
	`);
	expect("the peer is off", off, false);
	const before = JSON.parse(await page.evaluate(state));
	await doublePress("delimiter");
	const after = JSON.parse(await page.evaluate(state));
	expect("nothing was made", after.made, before.made);
	expect("and nothing was opened", after.active, `${ROOT}/child/leaf.md`);
});

test("text dropped on a delimiter lands in that folder's note", async () => {
	// The delimiter names a note here exactly as the file name does, so a
	// drop on it means the same thing: on the end of that note, once asked.
	// Which is also why it means nothing where the folder has no note — a
	// target that names nothing has nothing to add to.
	await withPeer();
	await page.evaluate(`
		if (!app.vault.getAbstractFileByPath("${ROOT}/child/child.md")) {
			await app.vault.create("${ROOT}/child/child.md", "# folder note\\n");
		}
		${PAUSE(500)}
		return true;
	`);
	const r = JSON.parse(await page.evaluate(`
		const el = app.workspace.getMostRecentLeaf().view.containerEl
			.querySelector(".view-header-title-parent")
			.querySelectorAll(".view-header-breadcrumb-separator")[1];
		if (!el) return JSON.stringify({ found: false });
		const dt = new DataTransfer();
		dt.setData("text/plain", "dropped onto the delimiter");
		const make = (type) => new DragEvent(type, { dataTransfer: dt, bubbles: true, cancelable: true });
		el.dispatchEvent(make("dragenter"));
		const over = make("dragover");
		el.dispatchEvent(over);
		const ringed = !!document.querySelector(".lure-drop-content");
		el.dispatchEvent(make("drop"));
		${PAUSE(900)}
		return JSON.stringify({ found: true, accepted: over.defaultPrevented, ringed });
	`));
	expect("the delimiter took it", r.accepted, true);
	expect("and rang blue", r.ringed, true);
	const asked = await page.evaluate(`
		const modal = document.querySelector(".modal-container .modal");
		const title = modal?.querySelector(".modal-title")?.textContent ?? null;
		modal?.querySelector(".mod-cta")?.click();
		${PAUSE(800)}
		return title;
	`);
	expect("asked first, as a drop onto any existing note does", asked, (v) => typeof v === "string" && v.length > 0);
	const body = await page.evaluate(`
		const file = app.vault.getAbstractFileByPath("${ROOT}/child/child.md");
		return file ? await app.vault.read(file) : null;
	`);
	expect("what was there is still first", body, (v) => v.startsWith("# folder note"));
	expect("and the drop is on the end", body, (v) => v.trimEnd().endsWith("dropped onto the delimiter"));
});

test("a delimiter whose folder has no note takes no drop", async () => {
	await withPeer();
	const r = JSON.parse(await page.evaluate(`
		const el = app.workspace.getMostRecentLeaf().view.containerEl
			.querySelector(".view-header-title-parent")
			.querySelectorAll(".view-header-breadcrumb-separator")[1];
		const dt = new DataTransfer();
		dt.setData("text/plain", "nowhere to put this");
		const over = new DragEvent("dragover", { dataTransfer: dt, bubbles: true, cancelable: true });
		el.dispatchEvent(over);
		${PAUSE(300)}
		return JSON.stringify({ accepted: over.defaultPrevented, ringed: !!document.querySelector(".lure-drop-content") });
	`));
	expect("declined", r.accepted, false);
	expect("and no ring", r.ringed, false);
});

test("rename mode keeps its second press out of it", async () => {
	// Nothing on the row opens a folder while a move is pending, and making
	// a file is not picking a destination.
	await withPeer();
	await page.evaluate(`
		app.workspace.getMostRecentLeaf().view.containerEl.querySelector(".lure-rename-btn").click();
		${PAUSE(400)}
		return true;
	`);
	const before = JSON.parse(await page.evaluate(state));
	await doublePress("delimiter");
	const after = JSON.parse(await page.evaluate(state));
	expect("nothing was made", after.made, before.made);
	await page.evaluate(`
		document.querySelector(".lure-path-input")?.blur();
		document.body.click();
		${PAUSE(300)}
		return true;
	`);
});

async function reset() {
	await reloadPlugin(page);
	await quiesce(page);
	// Back to the shipped default before each case: one of them turns the
	// swap off, and a setting a case changes is one the next case would
	// otherwise inherit without saying so.
	await setSettings(page, { swapSegmentActions: true });
	await page.evaluate(`
		const root = app.vault.getAbstractFileByPath("${ROOT}");
		if (root) await app.vault.adapter.rmdir("${ROOT}", true);
		${PAUSE(300)}
		return true;
	`);
	await page.evaluate(buildFixtures);
	// The peer's own settings, put back the way it was installed: two cases
	// change them, and a folder note named `_index` in the case after would
	// be a mystery.
	await page.evaluate(`
		const peer = app.plugins.plugins[${JSON.stringify(PEER)}];
		if (peer) Object.assign(peer.settings, { folderNoteName: "{{folder_name}}", folderNoteType: ".md", storageLocation: "insideFolder" });
		${PAUSE(150)}
		return true;
	`);
	await page.evaluate(openLeaf);
}

async function teardown() {
	await page.evaluate(`
		const peer = app.plugins.plugins[${JSON.stringify(PEER)}];
		if (peer) {
			Object.assign(peer.settings, { folderNoteName: "{{folder_name}}", folderNoteType: ".md", storageLocation: "insideFolder" });
			await peer.saveSettings?.();
		}
		${PAUSE(200)}
		if (app.plugins.plugins[${JSON.stringify(PEER)}]) {
			await app.plugins.disablePlugin(${JSON.stringify(PEER)});
		}
		${PAUSE(500)}
		document.querySelector(".lure-path-input")?.blur();
		app.workspace.getLeavesOfType("empty").forEach((l) => l.detach());
		document.querySelectorAll(".notice").forEach((n) => n.remove());
		const root = app.vault.getAbstractFileByPath("${ROOT}");
		if (root) await app.vault.adapter.rmdir("${ROOT}", true);
		${PAUSE(300)}
		return true;
	`);
	await setSettings(page, { swapSegmentActions: true });
	page.close();
}

// The peer has to be *installed* for any of this to mean anything. Checked in
// front of the run rather than reported as failures the suite cannot stand
// behind, the way the writing suites check that renames still settle.
const installed = await page.evaluate(
	`return !!(app.plugins.manifests || {})[${JSON.stringify(PEER)}];`,
);
if (!installed) {
	console.log(`skipped: ${PEER} is not installed in this vault`);
	page.close();
	process.exit(2);
}

await run();
