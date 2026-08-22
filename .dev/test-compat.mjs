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

import { connect, PAUSE, reloadPlugin } from "./cdpSession.mjs";
import { createSuite } from "./harness.mjs";

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

let page;

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

const enable = (id) => `await app.plugins.enablePlugin(${JSON.stringify(id)}); ${PAUSE(1200)}`;
const disable = (id) => `await app.plugins.disablePlugin(${JSON.stringify(id)}); ${PAUSE(500)}`;

const setLure = (key, value) => `
	app.plugins.plugins.lure.settings.${key} = ${JSON.stringify(value)};
	await app.plugins.plugins.lure.saveSettings();
	${PAUSE(300)}
`;

/**
 * Opens the fixture note inside the fixture folder. Braced because a test
 * that toggles a plugin has to reopen the note afterwards, and two `const`
 * declarations of the same name in one evaluate is a SyntaxError.
 */
const OPEN_NESTED = `
	{
		const child = app.vault.getAbstractFileByPath(FIXTURE_CHILD);
		if (!child) throw new Error("fixture note missing: " + FIXTURE_CHILD);
		await app.workspace.getLeaf(false).openFile(child);
		${PAUSE(500)}
	}
`;

/**
 * A folder with a folder note in it, following the convention every
 * folder-note plugin here understands: <Folder>/<Folder>.md. Without this
 * the delimiter click has nothing to open and the test proves nothing.
 */
const FIXTURE = "LureCompat";
const BUILD_FIXTURE = `
	window.FIXTURE_CHILD = ${JSON.stringify(FIXTURE + "/child.md")};
	if (!app.vault.getAbstractFileByPath(${JSON.stringify(FIXTURE)})) {
		await app.vault.createFolder(${JSON.stringify(FIXTURE)});
	}
	for (const [path, body] of [
		[${JSON.stringify(FIXTURE + "/" + FIXTURE + ".md")}, "# folder note\\n"],
		[${JSON.stringify(FIXTURE + "/child.md")}, "# child\\n"],
	]) {
		if (!app.vault.getAbstractFileByPath(path)) await app.vault.create(path, body);
	}
	${PAUSE(300)}
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

/**
 * The delimiter click is the contract. With the swap on it opens the folder
 * — which, with a folder-note plugin active, means opening that folder's
 * note. With it off the delimiter is the dropdown instead. Both positions
 * are asserted because the setting exists precisely to move this behaviour.
 */
function folderNoteTests(peer) {
	/** Other folder-note plugins would answer the click and muddy the result. */
	const soloise = PEERS.filter((p) => p.kind === "folder-note" && p.id !== peer.id)
		.map((p) => disable(p.id))
		.join("\n");

	test(`${peer.name}: swap on — the delimiter opens the folder note`, async () => {
		const r = await page.evaluate(`
			${TRAP}
			${enable("lure")}
			${soloise}
			${enable(peer.id)}
			${BUILD_FIXTURE}
			${setLure("swapSegmentActions", true)}
			${OPEN_NESTED}
			// The row is [vault][/][folder][/][filename]: the *last* separator is
			// the one after the deepest folder. The first one belongs to the
			// vault segment, and clicking that reveals the vault root instead.
			const sep = [...document.querySelectorAll(".workspace-leaf.mod-active .view-header-breadcrumb-separator")].pop();
			const before = app.workspace.getActiveFile()?.path ?? null;
			// Sample the claim now: after the click the header has re-rendered
			// for whatever note opened, and the class moves with it.
			const claimed = !!document.querySelector(
				".workspace-leaf.mod-active .view-header-title-parent .view-header-breadcrumb.has-folder-note",
			);
			if (sep) sep.dispatchEvent(new MouseEvent("click", { bubbles: true }));
			// Reveal finishes on a later frame, and creating the explorer leaf
			// first makes it later still. Poll for the outcome instead of
			// betting on one sleep being long enough.
			let revealed = false;
			for (let i = 0; i < 20 && !revealed; i++) {
				await new Promise((r) => setTimeout(r, 100));
				const v = app.workspace.getLeavesOfType("file-explorer")[0]?.view;
				revealed = v?.tree?.focusedItem?.file?.path === ${JSON.stringify(FIXTURE)};
			}
			const ev = app.workspace.getLeavesOfType("file-explorer")[0]?.view;
			return {
				hadSeparator: !!sep,
				before,
				after: app.workspace.getActiveFile()?.path ?? null,
				dropdownOpen: !!document.querySelector(".suggestion-container"),
				// Lure keys its underline off this class, and it is also the
				// only honest signal that a folder-notes plugin has claimed
				// the segment. Not all of them hook the header path at all.
				claimed,
				revealed,
				errs: ${ERRS},
			};
		`);
		expect("the row has a delimiter to click", r.hadSeparator, true);
		expect("started on the child note", r.before, `${FIXTURE}/child.md`);
		expect("the dropdown is not the response", r.dropdownOpen, false);
		// Only some folder-note plugins hook the header path. When one has
		// claimed the segment the click must open its note; when none has,
		// the correct behaviour is Obsidian's own — reveal the folder.
		if (r.claimed) {
			expect("the claimed segment opened its folder note", r.after, `${FIXTURE}/${FIXTURE}.md`);
		} else {
			expect("unclaimed, so the folder was revealed instead", r.revealed, true);
			expect("and no note was opened", r.after, r.before);
		}
		expect("no errors mentioning Lure", r.errs, []);
	});

	test(`${peer.name}: swap off — the delimiter opens the dropdown instead`, async () => {
		const r = await page.evaluate(`
			${TRAP}
			${enable("lure")}
			${soloise}
			${enable(peer.id)}
			${BUILD_FIXTURE}
			${setLure("swapSegmentActions", false)}
			${OPEN_NESTED}
			// The row is [vault][/][folder][/][filename]: the *last* separator is
			// the one after the deepest folder. The first one belongs to the
			// vault segment, and clicking that reveals the vault root instead.
			const sep = [...document.querySelectorAll(".workspace-leaf.mod-active .view-header-breadcrumb-separator")].pop();
			const before = app.workspace.getActiveFile()?.path ?? null;
			if (sep) sep.dispatchEvent(new MouseEvent("click", { bubbles: true }));
			${PAUSE(800)}
			const out = {
				before,
				after: app.workspace.getActiveFile()?.path ?? null,
				dropdownOpen: !!document.querySelector(".suggestion-container"),
				errs: ${ERRS},
			};
			document.body.click();
			${PAUSE(200)}
			return out;
		`);
		expect("the dropdown opened", r.dropdownOpen, true);
		expect("and no note was opened behind it", r.after, r.before);
		expect("no errors mentioning Lure", r.errs, []);
	});

	test(`${peer.name}: with ${peer.name} off the delimiter still reveals`, async () => {
		const r = await page.evaluate(`
			${TRAP}
			${enable("lure")}
			${soloise}
			${disable(peer.id)}
			${BUILD_FIXTURE}
			${setLure("swapSegmentActions", true)}
			${OPEN_NESTED}
			{
				// Start shut, or "it is open afterwards" proves nothing.
				const ev = app.workspace.getLeavesOfType("file-explorer")[0]?.view;
				const row = ev?.fileItems?.[${JSON.stringify(FIXTURE)}];
				if (row) await row.setCollapsed(true, false);
				${PAUSE(300)}
			}
			// The row is [vault][/][folder][/][filename]: the *last* separator is
			// the one after the deepest folder. The first one belongs to the
			// vault segment, and clicking that reveals the vault root instead.
			const sep = [...document.querySelectorAll(".workspace-leaf.mod-active .view-header-breadcrumb-separator")].pop();
			if (sep) sep.dispatchEvent(new MouseEvent("click", { bubbles: true }));
			${PAUSE(700)}
			const view = app.workspace.getLeavesOfType("file-explorer")[0]?.view;
			return {
				// Revealing focuses the explorer, so .mod-active is no longer
				// the note's leaf — count the rows wherever they are.
				rowsAnywhere: document.querySelectorAll(".lure-filename").length,
				expanded: view?.fileItems?.[${JSON.stringify(FIXTURE)}]?.collapsed === false,
				errs: ${ERRS},
			};
		`);
		expect("Lure's row survived the click", r.rowsAnywhere > 0, true);
		expect("the folder was revealed and expanded", r.expanded, true);
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
	// The compatibility suite toggles plugins constantly, so a suite run
	// straight after one can arrive while Lure is still off. Waiting for
	// someone else to turn it back on is not a plan — turn it on.
	if (i === 2 || i === 20) {
		try {
			await page.evaluate(`await app.plugins.enablePlugin("lure"); return true;`);
		} catch {
			/* renderer still coming up; the loop will try again */
		}
	}
	if (i > 60) throw new Error("Lure did not load");
	await new Promise((r) => setTimeout(r, 500));
}

// Only now, with the plugin definitely up: swap in whatever is on disk.
await reloadPlugin(page);

const installed = await page.evaluate(
	`return ${JSON.stringify(PEERS.map((p) => p.id))}.filter((id) => !!(app.plugins.manifests || {})[id]);`,
);

console.log("\nPeers found in this vault:");
for (const peer of PEERS) {
	const here = installed.includes(peer.id);
	console.log(`  ${here ? "✓" : "·"} ${peer.name} (${peer.id}) — ${here ? peer.why : "not installed"}`);
}

const original = await page.evaluate(`return [...app.plugins.enabledPlugins];`);

/**
 * A known starting state for every case: this session's build and the fixture
 * tree as declared.
 *
 * Deliberately without `quiesce` — this suite turns *other* plugins on and
 * off, and several of the peers under test own views of their own. Detaching
 * every leaf between cases would be tidying up after the plugin being tested
 * rather than after the one doing the testing.
 */
const { test, expect, run } = createSuite({
	reset: async () => {
		await reloadPlugin(page);
		await page.evaluate(`${BUILD_FIXTURE} return true;`);
	},
	teardown: async () => {
		await restoreEnabled();
		page.close();
	},
});

for (const peer of PEERS.filter((p) => installed.includes(p.id))) {
	if (peer.kind === "header") headerTests(peer);
	else if (peer.kind === "folder-note") folderNoteTests(peer);
	else adjacentTests(peer);
}

if (!installed.length) {
	console.log("\nNo peer plugins installed — nothing to test.");
	process.exit(0);
}

/**
 * Put the vault back the way it was found.
 */
async function restoreEnabled() {
	// Put the vault back the way it was found — these tests toggle a lot, and the
	// fixture is a folder that shows up in the File Explorer of every screenshot
	// taken afterwards. Unconditional, and after the loop rather than inside it: a
	// test that throws never reaches its own cleanup.
	await page.evaluate(`
		for (const id of ${JSON.stringify(PEERS.map((p) => p.id))}) {
			if (${JSON.stringify(original)}.includes(id)) await app.plugins.enablePlugin(id);
			else if ((app.plugins.manifests || {})[id]) await app.plugins.disablePlugin(id);
		}
		await app.plugins.enablePlugin("lure");
		const fixture = app.vault.getAbstractFileByPath(${JSON.stringify(FIXTURE)});
		// Straight to delete, not trash: the trash is inside the vault too, and a
		// .trash folder in the sidebar is the same problem one level down.
		if (fixture) await app.vault.delete(fixture, true);
		return true;
	`);
}

await run();

