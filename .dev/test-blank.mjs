#!/usr/bin/env node
/**
 * Behavioural tests for the row in a pane that holds no file: an empty tab,
 * the graph, and anything else with nothing to name.
 *
 * Every leaf with a `.view-header-title` is patched, which is right for a
 * canvas or a PDF — they arrive as `FileView`s and have a path like any note
 * — and was wrong for these. The native title was hidden and nothing was
 * drawn in its place, so the plugin left a header emptier than the one it
 * replaced. The row says which vault it is in and then one pseudo-segment
 * naming the view, and the field beside it is an address bar.
 *
 *   node .dev/test-blank.mjs            # all
 *   node .dev/test-blank.mjs graph      # only tests whose name matches
 *
 * Requires --remote-debugging-port=9222 and OBSIDIAN_VAULT set.
 */

import { connect, PAUSE, pressKey, quiesce, reloadPlugin } from "./cdpSession.mjs";
import { createSuite } from "./harness.mjs";

const ROOT = "LureBlank";
const NOTE = `${ROOT}/target.md`;

const page = await connect();
const { test, expect, run } = createSuite({ reset, teardown });

/** What the row is showing, beside what Obsidian's own title is doing. */
const state = `
	const leaf = app.workspace.getMostRecentLeaf();
	const root = leaf.view.containerEl.querySelector(".view-header-title-container");
	const title = leaf.view.containerEl.querySelector(".view-header-title");
	const input = root?.querySelector(".lure-path-input") ?? null;
	return JSON.stringify({
		type: leaf.view.getViewType(),
		file: leaf.view.file?.path ?? null,
		parts: root
			? [...root.querySelectorAll("span")]
					.filter((el) => el.offsetParent !== null && !el.querySelector("span"))
					.map((el) => el.textContent || "[icon]")
			: null,
		titleHidden: title ? title.classList.contains("lure-native-title-hidden") : null,
		titleText: title?.textContent ?? null,
		field: input ? input.value : null,
		rows: [...document.querySelectorAll(".suggestion-item .lure-suggest-label")].map((e) => e.textContent),
		pencil: !!leaf.view.containerEl.querySelector(".lure-rename-btn"),
	});
`;
const look = async () => JSON.parse(await page.evaluate(state));

/** A tab of its own holding nothing, which is what a new tab is. */
const blankTab = `
	document.querySelector(".lure-path-input")?.blur();
	document.body.click();
	${PAUSE(250)}
	app.workspace.getLeavesOfType("markdown").slice(1).forEach((l) => l.detach());
	app.workspace.getLeavesOfType("empty").forEach((l) => l.detach());
	${PAUSE(200)}
	// A group has to exist before a tab can be added to one: detaching every
	// empty leaf in an empty workspace leaves nothing to add to.
	await app.workspace.getLeaf(false).openFile(app.vault.getAbstractFileByPath(${JSON.stringify(NOTE)}));
	${PAUSE(400)}
	const fresh = app.workspace.getLeaf("tab");
	await fresh.setViewState({ type: "empty", active: true });
	app.workspace.setActiveLeaf(fresh, { focus: true });
	${PAUSE(700)}
	return app.workspace.getMostRecentLeaf().view.getViewType();
`;

test("an empty tab says which vault it is in, and that it holds nothing", async () => {
	expect("the tab is empty", await page.evaluate(blankTab), "empty");
	const s = await look();
	expect("the vault is named", s.parts, (v) => v.includes("L'Éclaire, c'est moi") || v.length >= 3);
	// The colon is the point: no file or folder can be called `:blank`, so
	// the row cannot be read as a path that could be opened.
	expect("and the view is named after it", s.parts, (v) => v.includes(":blank"));
	expect("Obsidian's own title gives way to it", s.titleHidden, true);
	expect("and there is no rename toggle, since there is nothing to rename", s.pencil, false);
});

test("the graph says so in the same words", async () => {
	await page.evaluate(blankTab);
	await page.evaluate(`
		await app.workspace.getMostRecentLeaf().setViewState({ type: "graph", active: true });
		${PAUSE(900)}
		return true;
	`);
	const s = await look();
	expect("the graph is what the leaf holds", s.type, "graph");
	expect("and the row says so", s.parts, (v) => v.includes(":graph"));
});

test("a leaf that goes from nothing to a note shows the note's path", async () => {
	await page.evaluate(blankTab);
	await page.evaluate(`
		await app.workspace.getMostRecentLeaf().openFile(app.vault.getAbstractFileByPath(${JSON.stringify(NOTE)}));
		${PAUSE(800)}
		return true;
	`);
	const s = await look();
	expect("the note is open", s.file, NOTE);
	expect("the pseudo-segment is gone", s.parts, (v) => !v.some((p) => p.startsWith(":")));
	expect("and the path is drawn instead", s.parts, (v) => v.some((p) => ROOT.startsWith(p) || p === ROOT));
	expect("with the toggle back", s.pencil, true);
});

test("the field opens on the vault root and opens what it is given", async () => {
	await page.evaluate(blankTab);
	await page.evaluate(`
		const root = app.workspace.getMostRecentLeaf().view.containerEl
			.querySelector(".view-header-title-container");
		root.querySelector(".lure-filename-text").click();
		${PAUSE(500)}
		return true;
	`);
	const opened = await look();
	expect("the field is open and empty", opened.field, "");
	// Rooted at the vault, so the first thing typed names something at the
	// top of it — which is what an address bar with no path yet can mean.
	expect("listing the vault root", opened.rows, (v) => v.includes(ROOT));

	await page.send("Input.insertText", { text: NOTE });
	await page.evaluate(PAUSE(400) + "return true;");
	await pressKey(page, "Enter");
	await page.evaluate(PAUSE(1200) + "return true;");
	const after = await look();
	expect("the note opened in this very pane", after.file, NOTE);
	expect("so nothing is left holding nothing", after.type, "markdown");
});

test("a path that is not there yet is made, exactly as from any other row", async () => {
	await page.evaluate(blankTab);
	await page.evaluate(`
		const root = app.workspace.getMostRecentLeaf().view.containerEl
			.querySelector(".view-header-title-container");
		root.querySelector(".lure-filename-text").click();
		${PAUSE(500)}
		return true;
	`);
	await page.send("Input.insertText", { text: `${ROOT}/made here.md` });
	await page.evaluate(PAUSE(400) + "return true;");
	const marked = await page.evaluate(
		`return document.querySelector(".lure-path-input")?.classList.contains("lure-will-create") ?? null;`,
	);
	expect("the field says it is about to make it", marked, true);
	await pressKey(page, "Enter");
	await page.evaluate(PAUSE(1400) + "return true;");
	const after = await look();
	expect("and it was made, here", after.file, `${ROOT}/made here.md`);
});

test("the pseudo-segment is a label, not a target", async () => {
	expect("the tab is empty", await page.evaluate(blankTab), "empty");
	// The rename key, which everywhere else opens the name for editing.
	await pressKey(page, "F2");
	await page.evaluate(PAUSE(600) + "return true;");
	const s = await look();
	expect("no rename opened on it", s.field, null);
	expect("and the row still says what it said", s.parts, (v) => v.includes(":blank"));
	await pressKey(page, "Escape");
});

test("a sidebar pane keeps the title Obsidian gave it", async () => {
	// The row is for editor panes. A backlinks pane has no path to show, and
	// hiding its title left it with nothing at all — which is the defect
	// this whole feature is about, in the one place it must not be fixed by
	// drawing a pseudo-segment.
	await page.evaluate(blankTab);
	const side = JSON.parse(await page.evaluate(`
		const leaf = app.workspace.getRightLeaf(false);
		await leaf.setViewState({ type: "backlink", active: true });
		app.workspace.revealLeaf(leaf);
		${PAUSE(900)}
		const title = leaf.view.containerEl.querySelector(".view-header-title");
		const row = leaf.view.containerEl.querySelector(".view-header-title-container");
		return JSON.stringify({
			hasTitle: !!title,
			hidden: title ? title.classList.contains("lure-native-title-hidden") : null,
			text: title?.textContent ?? null,
			pseudo: row ? [...row.querySelectorAll("span")].map((el) => el.textContent).filter((t) => t.startsWith(":")) : [],
		});
	`));
	expect("the pane has its header", side.hasTitle, true);
	expect("Obsidian's own title is left alone", side.hidden, false);
	expect("and it still reads as itself", side.text, (v) => typeof v === "string" && v.length > 0);
	expect("nothing was drawn in its place", side.pseudo, (v) => v.length === 0);
});

async function reset() {
	await reloadPlugin(page);
	await quiesce(page);
	await page.evaluate(`
		document.querySelector(".lure-path-input")?.blur();
		document.body.click();
		${PAUSE(200)}
		if (!app.vault.getAbstractFileByPath(${JSON.stringify(ROOT)}))
			await app.vault.createFolder(${JSON.stringify(ROOT)});
		if (!app.vault.getAbstractFileByPath(${JSON.stringify(NOTE)}))
			await app.vault.create(${JSON.stringify(NOTE)}, "# target\\n");
		const made = app.vault.getAbstractFileByPath(${JSON.stringify(`${ROOT}/made here.md`)});
		if (made) await app.vault.delete(made);
		${PAUSE(300)}
		return true;
	`);
}

async function teardown() {
	await page.evaluate(`
		document.querySelector(".lure-path-input")?.blur();
		document.body.click();
		${PAUSE(200)}
		app.workspace.getLeavesOfType("empty").forEach((l) => l.detach());
		app.workspace.getLeavesOfType("graph").forEach((l) => l.detach());
		app.workspace.rightSplit?.collapse?.();
		const folder = app.vault.getAbstractFileByPath(${JSON.stringify(ROOT)});
		if (folder) await app.vault.adapter.rmdir(folder.path, true);
		${PAUSE(300)}
		return true;
	`);
	page.close();
}

await run();
