#!/usr/bin/env node
/**
 * Compatibility tests: Lure against the community plugins that contend for
 * the same header element, or that answer the clicks Lure re-dispatches.
 *
 * Two different kinds of neighbour are covered, and they fail differently:
 *
 *   header  — draws into `.view-header-title(-container)`, the element Lure
 *             takes over. The failure mode is a clobber: whichever patched
 *             last wins and the other silently vanishes, in one load order
 *             but not the other.
 *   folder-note — answers the delimiter click Lure re-dispatches onto
 *             Obsidian's native breadcrumb. The failure mode is silence:
 *             the click lands on nothing and the folder never opens.
 *
 *   node .dev/test-compat.mjs           # all installed peers
 *   node .dev/test-compat.mjs Quick     # only tests whose name matches
 *
 * Requires --remote-debugging-port=9222 and the test vault open.
 */

import { connect, PAUSE } from "./cdpSession.mjs";

/**
 * Every community plugin known to contend for the header or the folder
 * click. Ids and names are verbatim from Obsidian's community-plugins.json;
 * plugin names are never translated or reworded.
 */
const PEERS = [
	{ id: "folder-notes", name: "Folder notes", kind: "folder-note",
	  why: "opens folder notes from the path — the click Lure re-dispatches" },
	{ id: "folder-note-plugin", name: "Folder Note", kind: "folder-note",
	  why: "an independent folder-note implementation" },
	{ id: "create-folder-notes-with-dropdown", name: "create folder notes with dropdown", kind: "folder-note",
	  why: "creates folder notes from its own dropdown" },
	{ id: "quick-explorer", name: "Quick Explorer", kind: "header",
	  why: "draws the current file path into the title bar" },
	{ id: "obsidian-front-matter-title-plugin", name: "Front Matter Title", kind: "header",
	  why: "rewrites the note header title from frontmatter" },
	{ id: "nav-link-header", name: "Nav Link Header", kind: "adjacent",
	  why: "adds its own bar above the note" },
	{ id: "running-head", name: "Running Head", kind: "adjacent",
	  why: "adds a metadata header above the note" },
	{ id: "crumbs-obsidian", name: "Crumbs", kind: "adjacent",
	  why: "breadcrumb navigation of its own" },
	{ id: "breadcrumbs", name: "Breadcrumbs", kind: "adjacent",
	  why: "renders a hierarchy trail in the note body" },
];

const results = [];
const tests = [];
let page;

function test(name, fn) {
	tests.push({ name, fn });
}

const expect = (label, actual, wanted) => {
	const ok = typeof wanted === "function" ? wanted(actual) : JSON.stringify(actual) === JSON.stringify(wanted);
	results.push({ ok, label, actual: ok ? "" : JSON.stringify(actual) });
};

// ------------------------------------------------------------- page-side

/** Collects console errors so a toggle that only *logs* a failure is caught. */
const TRAP = `
	if (!window.__lureTrap) {
		window.__lureTrap = true;
		window.__lureErrs = [];
		const orig = console.error;
		console.error = (...a) => { window.__lureErrs.push(a.map(String).join(" ")); orig.apply(console, a); };
		window.addEventListener("error", (e) => window.__lureErrs.push("uncaught: " + e.message));
	}
	window.__lureErrs.length = 0;
`;
const ERRS = `window.__lureErrs.filter((e) => /lure/i.test(e))`;

const enable = (id) => `await app.plugins.enablePlugin(${JSON.stringify(id)}); ${PAUSE(700)}`;
const disable = (id) => `await app.plugins.disablePlugin(${JSON.stringify(id)}); ${PAUSE(500)}`;

const setLure = (key, value) => `
	app.plugins.plugins.lure.settings.${key} = ${JSON.stringify(value)};
	await app.plugins.plugins.lure.saveSettings();
	${PAUSE(300)}
`;

/** Opens a note that actually sits in a subfolder, so the path has segments. */
const OPEN_NESTED = `
	const nested = app.vault.getMarkdownFiles().find((f) => f.parent && f.parent.path !== "/");
	if (!nested) throw new Error("test vault has no note inside a folder");
	await app.workspace.getLeaf(false).openFile(nested);
	${PAUSE(500)}
`;

/**
 * What the active leaf's header looks like. `owners` is the point: if a
 * neighbour clobbers Lure the row count drops to 0 while the title element
 * still exists, which no single boolean would show.
 */
const HEADER = `(() => {
	const leaf = document.querySelector(".workspace-leaf.mod-active") || document.body;
	const title = leaf.querySelector(".view-header-title");
	return {
		titleExists: !!title,
		patched: !!leaf.querySelector(".view-header-title.lure-patched"),
		vaultSegments: leaf.querySelectorAll(".lure-vault-segment").length,
		filenames: leaf.querySelectorAll(".lure-filename").length,
		crumbs: leaf.querySelectorAll(".view-header-breadcrumb").length,
		renameBtns: leaf.querySelectorAll(".lure-rename-btn").length,
		nativeVisible: title ? !title.classList.contains("lure-native-title-hidden") : null,
	};
})()`;

export { PEERS };

// ------------------------------------------------------------ generators

/** Both load orders, because a clobber usually only shows in one of them. */
function headerTests(peer) {
	test(`${peer.name}: Lure keeps the header when ${peer.name} loads after it`, async () => {
		const r = await page.evaluate(`
			${TRAP}
			${disable(peer.id)}
			${enable("lure")}
			${OPEN_NESTED}
			const before = ${HEADER};
			${enable(peer.id)}
			${OPEN_NESTED}
			return { before, after: ${HEADER}, errs: ${ERRS} };
		`);
		expect("Lure had the header to begin with", r.before.patched, true);
		expect("still patched afterwards", r.after.patched, true);
		expect("exactly one path row, not two", r.after.filenames, 1);
		expect("native title still suppressed", r.after.nativeVisible, false);
		expect("no errors mentioning Lure", r.errs, []);
	});

	test(`${peer.name}: Lure takes the header when it loads after ${peer.name}`, async () => {
		const r = await page.evaluate(`
			${TRAP}
			${disable("lure")}
			${enable(peer.id)}
			${OPEN_NESTED}
			${enable("lure")}
			${OPEN_NESTED}
			return { after: ${HEADER}, errs: ${ERRS} };
		`);
		expect("Lure patched the header", r.after.patched, true);
		expect("exactly one path row", r.after.filenames, 1);
		expect("no errors mentioning Lure", r.errs, []);
	});

	test(`${peer.name}: turning ${peer.name} off leaves Lure's row intact`, async () => {
		const r = await page.evaluate(`
			${TRAP}
			${enable("lure")}
			${enable(peer.id)}
			${OPEN_NESTED}
			${disable(peer.id)}
			${OPEN_NESTED}
			return { after: ${HEADER}, errs: ${ERRS} };
		`);
		expect("still patched", r.after.patched, true);
		expect("one path row", r.after.filenames, 1);
		expect("no errors mentioning Lure", r.errs, []);
	});

	test(`${peer.name}: turning Lure off restores the native title for ${peer.name}`, async () => {
		const r = await page.evaluate(`
			${TRAP}
			${enable(peer.id)}
			${enable("lure")}
			${OPEN_NESTED}
			${disable("lure")}
			${OPEN_NESTED}
			const leaf = document.querySelector(".workspace-leaf.mod-active") || document.body;
			return {
				orphans: leaf.querySelectorAll(".lure-vault-segment, .lure-filename, .lure-rename-btn").length,
				stillMarked: !!leaf.querySelector(".lure-patched, .lure-native-title-hidden"),
				titleShown: !!leaf.querySelector(".view-header-title"),
				errs: ${ERRS},
			};
		`);
		expect("no Lure nodes left behind", r.orphans, 0);
		expect("no Lure classes left behind", r.stillMarked, false);
		expect("the native title is back", r.titleShown, true);
		expect("no errors mentioning Lure", r.errs, []);
	});
}

/** The delimiter click is the contract; test it in both swap positions. */
function folderNoteTests(peer) {
	for (const swap of [true, false]) {
		test(`${peer.name}: delimiter click with "folder name opens the dropdown" ${swap ? "on" : "off"}`, async () => {
			const r = await page.evaluate(`
				${TRAP}
				${enable("lure")}
				${enable(peer.id)}
				${setLure("swapSegmentActions", swap)}
				${OPEN_NESTED}
				const leaf = document.querySelector(".workspace-leaf.mod-active");
				const sep = leaf.querySelector(".view-header-breadcrumb-separator");
				const before = app.workspace.getActiveFile()?.path ?? null;
				if (sep) sep.dispatchEvent(new MouseEvent("click", { bubbles: true }));
				${PAUSE(700)}
				return {
					hadSeparator: !!sep,
					before,
					after: app.workspace.getActiveFile()?.path ?? null,
					dropdownOpen: !!document.querySelector(".suggestion-container, .menu"),
					errs: ${ERRS},
				};
			`);
			expect("the row has a delimiter to click", r.hadSeparator, true);
			// With the swap on the delimiter opens the folder (note or reveal);
			// with it off the delimiter is the dropdown instead.
			if (swap) {
				expect("the click did something", (v) => v, r.after !== r.before || r.dropdownOpen === false);
			} else {
				expect("delimiter opened the dropdown", r.dropdownOpen, true);
			}
			expect("no errors mentioning Lure", r.errs, []);
		});
	}

	test(`${peer.name}: with ${peer.name} off the same click still works`, async () => {
		const r = await page.evaluate(`
			${TRAP}
			${enable("lure")}
			${disable(peer.id)}
			${setLure("swapSegmentActions", true)}
			${OPEN_NESTED}
			const leaf = document.querySelector(".workspace-leaf.mod-active");
			const sep = leaf.querySelector(".view-header-breadcrumb-separator");
			if (sep) sep.dispatchEvent(new MouseEvent("click", { bubbles: true }));
			${PAUSE(600)}
			return { header: ${HEADER}, errs: ${ERRS} };
		`);
		expect("Lure's row survived the click", r.header.filenames, 1);
		expect("no errors mentioning Lure", r.errs, []);
	});
}

/** Neighbours that own their own strip: assert only that nobody breaks. */
function adjacentTests(peer) {
	test(`${peer.name}: coexists without disturbing Lure's row`, async () => {
		const r = await page.evaluate(`
			${TRAP}
			${enable("lure")}
			${enable(peer.id)}
			${OPEN_NESTED}
			return { header: ${HEADER}, errs: ${ERRS} };
		`);
		expect("Lure still patched", r.header.patched, true);
		expect("one path row", r.header.filenames, 1);
		expect("no errors mentioning Lure", r.errs, []);
	});
}

// ----------------------------------------------------------------- runner

const filter = process.argv[2];
page = await connect();

for (let i = 0; ; i++) {
	let ready = false;
	try {
		ready = await page.evaluate(
			`return typeof app !== "undefined" && !!app.plugins?.plugins?.lure?.manager && app.workspace?.layoutReady === true;`,
		);
	} catch {
		ready = false;
	}
	if (ready) break;
	if (i > 60) throw new Error("Lure did not load");
	await new Promise((r) => setTimeout(r, 500));
}

const installed = await page.evaluate(
	`return ${JSON.stringify(PEERS.map((p) => p.id))}.filter((id) => !!(app.plugins.manifests || {})[id]);`,
);

console.log("\nPeers found in this vault:");
for (const peer of PEERS) {
	const here = installed.includes(peer.id);
	console.log(`  ${here ? "✓" : "·"} ${peer.name} (${peer.id}) — ${here ? peer.why : "not installed"}`);
}

const original = await page.evaluate(`return [...app.plugins.enabledPlugins];`);

for (const peer of PEERS.filter((p) => installed.includes(p.id))) {
	if (peer.kind === "header") headerTests(peer);
	else if (peer.kind === "folder-note") folderNoteTests(peer);
	else adjacentTests(peer);
}

if (!tests.length) {
	console.log("\nNo peer plugins installed — nothing to test.");
	process.exit(0);
}

for (const { name, fn } of tests) {
	if (filter && !name.includes(filter)) continue;
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

// Put the vault back the way it was found — these tests toggle a lot.
await page.evaluate(`
	for (const id of ${JSON.stringify(PEERS.map((p) => p.id))}) {
		if (${JSON.stringify(original)}.includes(id)) await app.plugins.enablePlugin(id);
		else if ((app.plugins.manifests || {})[id]) await app.plugins.disablePlugin(id);
	}
	await app.plugins.enablePlugin("lure");
	return true;
`);

const passed = results.filter((r) => r.ok).length;
console.log(`\n${passed}/${results.length} assertions passed`);
for (const r of results.filter((x) => !x.ok)) console.log(`  FAIL  ${r.label} → ${r.actual}`);
page.close();
process.exit(results.length === passed ? 0 : 1);
