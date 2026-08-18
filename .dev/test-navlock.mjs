#!/usr/bin/env node
/**
 * Behavioural tests for the navigation lock: several path bars coupled so
 * they walk parallel folder structures in step.
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

const ROOT = "NavTest";
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

/** Opens `branches.length` editor panes, one per branch, all at shared/leaf.md. */
const openPanes = (branches) => `
	document.querySelector(".lure-path-input")?.blur();
	document.body.click();
	app.workspace.detachLeavesOfType("markdown");
	app.workspace.detachLeavesOfType("lure-external-file");
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
		folders: bars.map((b) => b.currentFolderPath()),
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

test("outside the vault: a pane out there is not coupled", async () => {
	await page.evaluate(buildFixture);
	await page.evaluate(openPanes(["alpha", "beta"]));
	const before = await look();
	expect("both panes coupled to begin with", before.canLock, true);

	// Send one pane outside the vault; only one bar is left to couple.
	const r = await page.evaluate(`
		const leaf = app.workspace.getLeavesOfType("markdown")[1];
		await leaf.setViewState({ type: "lure-external-file", active: true, state: { path: "/home/niemand/big.md" } });
		${PAUSE(1000)}
		const mgr = app.plugins.plugins.lure.manager;
		app.workspace.iterateAllLeaves((l) => mgr.patchLeaf(l));
		${PAUSE(400)}
		mgr.navLock.setLocked(true);
		${PAUSE(500)}
		return JSON.stringify({
			participants: [...mgr.instances.values()].filter((b) => b.participates()).length,
			canLock: mgr.navLock.canLock(),
			locked: mgr.navLock.isLocked(),
			chains: document.querySelectorAll(".lure-navlock-btn").length,
		});
	`);
	const s = JSON.parse(r);
	expect("the external pane does not take part", s.participants, 1);
	expect("so there is nothing to couple", s.canLock, false);
	expect("and locking is refused", s.locked, false);
	expect("no chain is shown", s.chains, 0);
});

test("outside the vault: a lock already on drops when a pane leaves", async () => {
	await page.evaluate(buildFixture);
	await page.evaluate(openPanes(["alpha", "beta"]));
	await lock(true);
	expect("locked to begin with", (await look()).locked, true);
	const r = await page.evaluate(`
		const leaf = app.workspace.getLeavesOfType("markdown")[1];
		await leaf.setViewState({ type: "lure-external-file", active: true, state: { path: "/home/niemand/big.md" } });
		${PAUSE(1000)}
		const mgr = app.plugins.plugins.lure.manager;
		app.workspace.iterateAllLeaves((l) => mgr.patchLeaf(l));
		mgr.navLock.refresh();
		${PAUSE(400)}
		return JSON.stringify({
			locked: mgr.navLock.isLocked(),
			marked: document.querySelectorAll(".lure-nav-legal").length,
			chains: document.querySelectorAll(".lure-navlock-btn").length,
		});
	`);
	const s = JSON.parse(r);
	expect("the lock lets go", s.locked, false);
	expect("its marking is cleared", s.marked, 0);
	expect("and its button is gone", s.chains, 0);
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
	app.workspace.detachLeavesOfType("lure-external-file");
	const folder = app.vault.getAbstractFileByPath("${ROOT}");
	if (folder) await app.vault.adapter.rmdir("${ROOT}", true);
	return true;
`);
page.close();

const failed = results.filter((r) => !r.ok).length;
console.log(`\n${results.length - failed}/${results.length} assertions passed`);
process.exit(failed ? 1 : 0);
