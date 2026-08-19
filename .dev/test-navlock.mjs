#!/usr/bin/env node
/**
 * Behavioural tests for the navigation lock: several path bars coupled so
 * they walk parallel folder structures in step.
 *
 * Three panes at most, on purpose. Two give the pairwise rule and three give
 * the N-way one — a name shared by two of them but not the third, which must
 * not be offered. A fourth exercises the same code with a longer list, so the
 * cost of opening it buys nothing.
 *
 * Fixtures are built here rather than assumed, because the shapes matter:
 * a name two panes share, a name only one has, and a third pane that
 * shares less than the other two. Those are the cases the legality rule is
 * for, and a vault that happened to be symmetric would test none of them.
 *
 *   node .dev/test-navlock.mjs          # all
 *   node .dev/test-navlock.mjs rename   # only tests whose name matches
 *
 * Requires OBSIDIAN_VAULT set to a vault with this plugin installed.
 */

import { connect, PAUSE, reloadPlugin } from "./cdpSession.mjs";
import { mkdirSync, rmSync, writeFileSync } from "fs";
import { join } from "path";

const ROOT = "NavTest";
/** Outside every vault on purpose — that is the thing under test. */
const EXT = `${process.env.HOME}/lure-navlock-fixtures`;
const results = [];
const tests = [];
const test = (name, fn) => tests.push({ name, fn });
const expect = (label, actual, wanted) => {
	const ok = typeof wanted === "function" ? wanted(actual) : JSON.stringify(actual) === JSON.stringify(wanted);
	results.push({ ok, label, actual: ok ? "" : JSON.stringify(actual) });
};

const page = await connect();
await reloadPlugin(page);

/** Rebuilt before every test: earlier ones rename these folders. */
const buildFixture = `
	const mk = async (path) => { if (!app.vault.getAbstractFileByPath(path)) await app.vault.createFolder(path); };
	const note = async (path, body) => {
		const at = app.vault.getAbstractFileByPath(path);
		if (at) await app.vault.modify(at, body); else await app.vault.create(path, body);
	};
	const existing = app.vault.getAbstractFileByPath("${ROOT}");
	if (existing) await app.vault.adapter.rmdir("${ROOT}", true);
	${PAUSE(200)}
	await mk("${ROOT}");
	for (const branch of ["alpha", "beta", "gamma"]) await mk("${ROOT}/" + branch);
	for (const branch of ["alpha", "beta", "gamma"]) { await mk("${ROOT}/" + branch + "/shared"); }
	for (const branch of ["alpha", "beta"]) { await mk("${ROOT}/" + branch + "/twin"); }
	await mk("${ROOT}/alpha/onlyalpha");
	for (const branch of ["alpha", "beta", "gamma"]) await note("${ROOT}/" + branch + "/shared/leaf.md", "# " + branch);
	for (const branch of ["alpha", "beta"]) await note("${ROOT}/" + branch + "/twin/leaf.md", "# twin " + branch);
	await note("${ROOT}/alpha/onlyalpha/leaf.md", "# extra");
	${PAUSE(400)}
	return true;
`;

function buildExternalFixtureOnDisk() {
	rmSync(EXT, { recursive: true, force: true });
	for (const branch of ["one", "two"]) {
		for (const folder of ["shared", "twin", ".hidden"]) {
			mkdirSync(join(EXT, branch, folder), { recursive: true });
		}
		writeFileSync(join(EXT, branch, "shared", "leaf.md"), `# ${branch}\n`);
		writeFileSync(join(EXT, branch, "twin", "leaf.md"), `# twin ${branch}\n`);
	}
	return "return true;";
}
const buildExternalFixture = buildExternalFixtureOnDisk();

/** Opens one external pane per branch, all at shared/leaf.md. */
const openExternalPanes = (branches) => `
	for (const type of ["markdown", "lure-external-file", "empty"]) {
		app.workspace.getLeavesOfType(type).forEach((l) => l.detach());
	}
	${PAUSE(400)}
	const branches = ${JSON.stringify(branches)};
	let leaf = app.workspace.getLeaf(false);
	for (const [i, branch] of branches.entries()) {
		if (i > 0) leaf = app.workspace.getLeaf("split", "vertical");
		await leaf.setViewState({
			type: "lure-external-file", active: true,
			state: { path: "${EXT}/" + branch + "/shared/leaf.md" },
		});
		${PAUSE(400)}
	}
	${PAUSE(500)}
	const mgr = app.plugins.plugins.lure.manager;
	app.workspace.getLeavesOfType("lure-external-file").forEach((l) => mgr.patchLeaf(l));
	${PAUSE(400)}
	mgr.navLock.setLocked(true);
	${PAUSE(400)}
	return true;
`;

/** Opens `branches.length` editor panes, one per branch, all at shared/leaf.md. */
const openPanes = (branches) => `
	document.querySelector(".lure-path-input")?.blur();
	document.body.click();
	// Every kind, not just markdown. Detaching a view leaves an *empty* leaf
	// behind in its split, so a suite that only detached markdown accumulated
	// one dead split per test — twenty of them by the end of a run, each with
	// a live breadcrumb instance attached.
	for (const type of ["markdown", "lure-external-file", "empty"]) {
		app.workspace.getLeavesOfType(type).forEach((l) => l.detach());
	}
	${PAUSE(400)}
	const branches = ${JSON.stringify(branches)};
	let leaf = app.workspace.getLeaf(false);
	for (const [i, branch] of branches.entries()) {
		if (i > 0) leaf = app.workspace.getLeaf("split", "vertical");
		await leaf.openFile(app.vault.getAbstractFileByPath("${ROOT}/" + branch + "/shared/leaf.md"));
		${PAUSE(350)}
	}
	${PAUSE(500)}
	const mgr = app.plugins.plugins.lure.manager;
	app.workspace.getLeavesOfType("markdown").forEach((l) => mgr.patchLeaf(l));
	${PAUSE(400)}
	return app.workspace.getLeavesOfType("markdown").length;
`;

const lockState = `
	const mgr = app.plugins.plugins.lure.manager;
	const bars = [...mgr.instances.values()].filter((b) => b.participates());
	return JSON.stringify({
		canLock: mgr.navLock.canLock(),
		locked: mgr.navLock.isLocked(),
		legal: [...mgr.navLock.legalMoves()].sort(),
		nextSibling: mgr.navLock.nextSharedSibling(),
		// Where each bar stands, in whichever world it is in: currentFolderPath
		// is vault-relative and reads empty for a bar outside the vault.
		folders: bars.map((b) => b.externalPath ?? b.currentFolderPath()),
		files: app.workspace.getLeavesOfType("markdown").map((l) => l.view.file?.path ?? null),
	});
`;
const look = async () => JSON.parse(await page.evaluate(lockState));
const lock = async (on) =>
	page.evaluate(`app.plugins.plugins.lure.manager.navLock.setLocked(${on}); ${PAUSE(500)} return true;`);

test("two panes: the sibling step walks only what they share", async () => {
	await page.evaluate(buildFixture);
	expect("two panes open", await page.evaluate(openPanes(["alpha", "beta"])), 2);
	await lock(true);
	const s = await look();
	expect("locked", s.locked, true);
	expect("sibling offered", s.legal, (v) => v.includes("sibling"));
	expect("and it is the shared name", s.nextSibling, "twin");

	await page.evaluate(`app.plugins.plugins.lure.manager.navLock.move("sibling"); ${PAUSE(900)} return true;`);
	const after = await look();
	expect("both panes stepped, each in its own tree", after.folders.sort(), [
		`${ROOT}/alpha/twin`,
		`${ROOT}/beta/twin`,
	]);
	expect("onlyalpha is never offered", after.nextSibling, "shared");
});

test("three panes: a name only two of them share is not offered", async () => {
	await page.evaluate(buildFixture);
	expect("three panes open", await page.evaluate(openPanes(["alpha", "beta", "gamma"])), 3);
	await lock(true);
	const s = await look();
	expect("locked", s.locked, true);
	// alpha and beta have "twin"; gamma does not, so nothing is shared but
	// the folder they are already in — and there is nowhere to step.
	expect("no sibling step", s.nextSibling, null);
	expect("sibling not offered", s.legal, (v) => !v.includes("sibling"));
});

test("rename: a shared folder is renamed in every coupled pane", async () => {
	await page.evaluate(buildFixture);
	await page.evaluate(openPanes(["alpha", "beta"]));
	await lock(true);
	const r = await page.evaluate(`
		const mgr = app.plugins.plugins.lure.manager;
		const bar = [...mgr.instances.values()].find((b) => b.participates() && b.file.path.includes("/alpha/"));
		bar.renameMode = true;
		await bar.moveFileTo("${ROOT}/alpha/renamed/leaf.md");
		${PAUSE(1200)}
		return JSON.stringify({
			alpha: !!app.vault.getAbstractFileByPath("${ROOT}/alpha/renamed"),
			beta: !!app.vault.getAbstractFileByPath("${ROOT}/beta/renamed"),
			oldAlpha: !!app.vault.getAbstractFileByPath("${ROOT}/alpha/shared"),
			oldBeta: !!app.vault.getAbstractFileByPath("${ROOT}/beta/shared"),
			modals: document.querySelectorAll(".modal-container").length,
		});
	`);
	const s = JSON.parse(r);
	expect("renamed in the pane that asked", s.alpha, true);
	expect("and in the other one too", s.beta, true);
	expect("the old name is gone from both", [s.oldAlpha, s.oldBeta], [false, false]);
	expect("no question needed — the name was shared", s.modals, 0);
});

test("rename: links to every renamed pane's notes still resolve", async () => {
	await page.evaluate(buildFixture);
	await page.evaluate(openPanes(["alpha", "beta"]));
	// A note linking into both trees, written as full paths — the form a
	// folder rename actually has to rewrite. Shortest-form links would keep
	// resolving whatever happened to the folders, and prove nothing.
	await page.evaluate(`
		const at = app.vault.getAbstractFileByPath("${ROOT}/pointer.md");
		if (at) await app.fileManager.trashFile(at);
		${PAUSE(200)}
		await app.vault.create("${ROOT}/pointer.md",
			"a [[${ROOT}/alpha/shared/leaf|A]] b [[${ROOT}/beta/shared/leaf|B]] md [x](${ROOT}/alpha/shared/leaf.md)");
		${PAUSE(900)}
		return true;
	`);
	await lock(true);

	const after = JSON.parse(await page.evaluate(`
		const mgr = app.plugins.plugins.lure.manager;
		const bar = [...mgr.instances.values()]
			.find((b) => b.participates() && b.file?.path.startsWith("${ROOT}/alpha"));
		bar.renameMode = true;
		bar.moveFileTo("${ROOT}/alpha/renamed/leaf.md");
		${PAUSE(1800)}
		const src = app.vault.getAbstractFileByPath("${ROOT}/pointer.md");
		const cache = app.metadataCache;
		return JSON.stringify({
			renamed: [
				!!app.vault.getAbstractFileByPath("${ROOT}/alpha/renamed/leaf.md"),
				!!app.vault.getAbstractFileByPath("${ROOT}/beta/renamed/leaf.md"),
			],
			// Asked of Obsidian's own resolver rather than of the text: a link
			// can read plausibly and still point at nothing.
			resolve: (cache.getFileCache(src)?.links ?? [])
				.map((l) => !!cache.getFirstLinkpathDest(l.link, src.path)),
		});
	`));
	expect("renamed in both trees", after.renamed, [true, true]);
	// Three: one wikilink into each tree, and a markdown link — the two
	// syntaxes are rewritten by different code inside Obsidian.
	expect("and every link still resolves", after.resolve, (v) => Array.isArray(v) && v.length === 3 && v.every(Boolean));
});

test("rename: one that would break the parallel asks first", async () => {
	await page.evaluate(buildFixture);
	await page.evaluate(openPanes(["alpha", "beta"]));
	await lock(true);
	const r = await page.evaluate(`
		const mgr = app.plugins.plugins.lure.manager;
		const bar = [...mgr.instances.values()].find((b) => b.participates() && b.file.path.includes("/alpha/"));
		bar.renameMode = true;
		// Moving into a folder only this pane has: the two would no longer
		// stand in folders of the same name.
		bar.moveFileTo("${ROOT}/alpha/onlyalpha/leaf.md");
		${PAUSE(900)}
		const title = document.querySelector(".modal-title")?.textContent ?? null;
		const buttons = [...document.querySelectorAll(".modal button")].map((b) => b.textContent);
		// Choosing the lock: the rename must not happen.
		document.querySelector(".modal .lure-modal-buttons button")?.click();
		${PAUSE(800)}
		return JSON.stringify({
			title, buttons,
			stillInShared: !!app.vault.getAbstractFileByPath("${ROOT}/alpha/shared/leaf.md"),
			stillLocked: mgr.navLock.isLocked(),
			modals: document.querySelectorAll(".modal-container").length,
		});
	`);
	const s = JSON.parse(r);
	expect("it asked", s.title, (v) => typeof v === "string" && v.length > 0);
	expect("offering both ways out", s.buttons, (v) => (v ?? []).length >= 2);
	expect("cancelling left the file alone", s.stillInShared, true);
	expect("and kept the lock", s.stillLocked, true);
	expect("dialog closed", s.modals, 0);
});

test("the lock ends when a coupled pane is closed", async () => {
	await page.evaluate(buildFixture);
	await page.evaluate(openPanes(["alpha", "beta", "gamma"]));
	await lock(true);
	const before = await look();
	expect("locked over three", [before.locked, before.folders.length], [true, 3]);

	// Two panes would still be enough to couple, so this is the case that
	// distinguishes "the lock needs two" from "the lock is an arrangement
	// between these panes". Closing one ends it either way.
	const after = JSON.parse(await page.evaluate(`
		app.workspace.getLeavesOfType("markdown")[2].detach();
		${PAUSE(700)}
		${lockState.trim()}
	`));
	expect("the lock let go", after.locked, false);
	expect("and nothing is still marked", after.legal, []);
});

test("the lock ends when a coupled pane navigates on its own", async () => {
	await page.evaluate(buildFixture);
	await page.evaluate(openPanes(["alpha", "beta"]));
	await lock(true);
	expect("locked", (await look()).locked, true);

	// What a link click, the quick switcher or a bookmark does: one pane
	// goes somewhere the lock did not send it, so the panes no longer line
	// up and the coupling is over.
	const after = JSON.parse(await page.evaluate(`
		await app.workspace.getLeavesOfType("markdown")[1]
			.openFile(app.vault.getAbstractFileByPath("${ROOT}/alpha/onlyalpha/leaf.md"));
		${PAUSE(800)}
		${lockState.trim()}
	`));
	expect("the lock let go", after.locked, false);
});

test("the lock survives its own moves", async () => {
	await page.evaluate(buildFixture);
	await page.evaluate(openPanes(["alpha", "beta"]));
	await lock(true);
	// Back and forward open files exactly as a link does; if the lock could
	// not tell its own moves from a pane wandering off, every move it made
	// would release it.
	const after = JSON.parse(await page.evaluate(`
		app.plugins.plugins.lure.manager.navLock.move("sibling");
		${PAUSE(700)}
		app.plugins.plugins.lure.manager.navLock.move("sibling");
		${PAUSE(700)}
		${lockState.trim()}
	`));
	expect("still locked", after.locked, true);
});

test("outside the vault: two panes out there couple like any others", async () => {
	buildExternalFixtureOnDisk();
	await page.evaluate(openExternalPanes(["one", "two"]));
	const s = await look();
	expect("both take part", s.folders.length, 2);
	expect("locked", s.locked, true);
	expect("sibling offered", s.legal, (v) => v.includes("sibling"));
	expect("and it is the shared name", s.nextSibling, "twin");

	await page.evaluate(`app.plugins.plugins.lure.manager.navLock.move("sibling"); ${PAUSE(900)} return true;`);
	expect("both stepped, each in its own tree", (await look()).folders.sort(), [
		`${EXT}/one/twin`,
		`${EXT}/two/twin`,
	]);
});

test("outside the vault: hidden folders are not offered unless they are shown", async () => {
	buildExternalFixtureOnDisk();
	await page.evaluate(openExternalPanes(["one", "two"]));
	const r = await page.evaluate(`
		const mgr = app.plugins.plugins.lure.manager;
		const bar = [...mgr.instances.values()].find((b) => b.participates());
		const settings = app.plugins.plugins.lure.settings;
		const was = settings.showDotFiles;
		settings.showDotFiles = false;
		const hidden = bar.siblingFolderNames();
		settings.showDotFiles = true;
		const shown = bar.siblingFolderNames();
		settings.showDotFiles = was;
		return JSON.stringify({ hidden, shown });
	`);
	const s = JSON.parse(r);
	// Inside the vault this cannot arise — Obsidian never indexes dot folders
	// — so only the external listing has to be filtered, and it is the same
	// rule the dropdown uses.
	expect("hidden while the setting is off", s.hidden, (v) => !v.includes(".hidden"));
	expect("offered when it is on", s.shown, (v) => v.includes(".hidden"));
});

test("mixed: a vault pane and an external one walk together", async () => {
	await page.evaluate(buildFixture);
	buildExternalFixtureOnDisk();
	await page.evaluate(`
		for (const type of ["markdown", "lure-external-file", "empty"]) {
			app.workspace.getLeavesOfType(type).forEach((l) => l.detach());
		}
		${PAUSE(400)}
		await app.workspace.getLeaf(false).openFile(app.vault.getAbstractFileByPath("${ROOT}/alpha/shared/leaf.md"));
		${PAUSE(400)}
		await app.workspace.getLeaf("split", "vertical").setViewState({
			type: "lure-external-file", active: true,
			state: { path: "${EXT}/one/shared/leaf.md" },
		});
		${PAUSE(900)}
		const mgr = app.plugins.plugins.lure.manager;
		app.workspace.getLeavesOfType("markdown").forEach((l) => mgr.patchLeaf(l));
		app.workspace.getLeavesOfType("lure-external-file").forEach((l) => mgr.patchLeaf(l));
		${PAUSE(400)}
		mgr.navLock.setLocked(true);
		${PAUSE(400)}
		return true;
	`);
	const s = await look();
	expect("both take part", s.folders.length, 2);
	expect("standing in same-named folders", s.folders.map((f) => f.split(/[/\\]/).pop()), ["shared", "shared"]);
	expect("sibling offered across the boundary", s.nextSibling, "twin");

	await page.evaluate(`app.plugins.plugins.lure.manager.navLock.move("sibling"); ${PAUSE(900)} return true;`);
	const after = await look();
	expect("each stepped in its own world", after.folders.sort(), [
		`${EXT}/one/twin`,
		`${ROOT}/alpha/twin`,
	]);
});

test("mixed: a shared rename asks rather than half-renaming", async () => {
	await page.evaluate(buildFixture);
	buildExternalFixtureOnDisk();
	await page.evaluate(`
		for (const type of ["markdown", "lure-external-file", "empty"]) {
			app.workspace.getLeavesOfType(type).forEach((l) => l.detach());
		}
		${PAUSE(400)}
		await app.workspace.getLeaf(false).openFile(app.vault.getAbstractFileByPath("${ROOT}/alpha/shared/leaf.md"));
		${PAUSE(400)}
		await app.workspace.getLeaf("split", "vertical").setViewState({
			type: "lure-external-file", active: true,
			state: { path: "${EXT}/one/shared/leaf.md" },
		});
		${PAUSE(900)}
		const mgr = app.plugins.plugins.lure.manager;
		app.workspace.getLeavesOfType("markdown").forEach((l) => mgr.patchLeaf(l));
		app.workspace.getLeavesOfType("lure-external-file").forEach((l) => mgr.patchLeaf(l));
		${PAUSE(400)}
		mgr.navLock.setLocked(true);
		${PAUSE(400)}
		return true;
	`);
	// Not awaited: the commit stops on a dialog, and awaiting it here would
	// wait for a click that this step is the one meant to make.
	const r = await page.evaluate(`
		const mgr = app.plugins.plugins.lure.manager;
		const bar = [...mgr.instances.values()].find((b) => b.participates() && b.externalPath === null);
		bar.renameMode = true;
		bar.moveFileTo("${ROOT}/alpha/renamed/leaf.md");
		${PAUSE(900)}
		const title = document.querySelector(".modal-title")?.textContent ?? null;
		document.querySelector(".modal .lure-modal-buttons button")?.click();
		${PAUSE(700)}
		return JSON.stringify({
			title,
			vaultUntouched: !!app.vault.getAbstractFileByPath("${ROOT}/alpha/shared"),
			renamedAbsent: !app.vault.getAbstractFileByPath("${ROOT}/alpha/renamed"),
			stillLocked: mgr.navLock.isLocked(),
		});
	`);
	const s = JSON.parse(r);
	// Depths cannot line up between a vault path and an absolute one, so the
	// shared-folder rename never applies across the boundary. Asking is the
	// safe answer, and it must not have renamed one side already.
	expect("it asked", s.title, (v) => typeof v === "string" && v.length > 0);
	expect("nothing was renamed", [s.vaultUntouched, s.renamedAbsent], [true, true]);
	expect("and the lock is still on", s.stillLocked, true);
});

const filter = process.argv[2];
for (const { name, fn } of tests) {
	if (filter && !name.toLowerCase().includes(filter.toLowerCase())) continue;
	console.log(`\n${name}`);
	const start = results.length;
	try {
		await fn();
	} catch (err) {
		results.push({ ok: false, label: `${name} — threw`, actual: err.message });
	}
	for (let i = start; i < results.length; i++) {
		const r = results[i];
		console.log(`  ${r.ok ? "PASS" : "FAIL"}  ${r.label}${r.ok ? "" : `  → got ${r.actual}`}`);
	}
}

// The fixture is created inside a real vault, so it goes whether the run
// passed or not.
await page.evaluate(`
	app.plugins.plugins.lure.manager.navLock.setLocked(false);
	document.querySelectorAll(".modal-container").forEach((m) => m.remove());
	for (const type of ["lure-external-file", "empty"]) {
		app.workspace.getLeavesOfType(type).forEach((l) => l.detach());
	}
	const folder = app.vault.getAbstractFileByPath("${ROOT}");
	if (folder) await app.vault.adapter.rmdir("${ROOT}", true);
	return true;
`);
rmSync(EXT, { recursive: true, force: true });
page.close();

const failed = results.filter((r) => !r.ok).length;
console.log(`\n${results.length - failed}/${results.length} assertions passed`);
process.exit(failed ? 1 : 0);
