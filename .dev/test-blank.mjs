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

import { connect, PAUSE, pressKey, quiesce, reloadPlugin, restoreTabTakers, standDownTabTakers } from "./cdpSession.mjs";
import { createSuite, skipCase } from "./harness.mjs";

const ROOT = "LureBlank";
const NOTE = `${ROOT}/target.md`;

const page = await connect();
/**
 * A home-tab plugin answers every new tab with a view of its own, so with one
 * running there is no such thing as an empty tab to ask about — the row would
 * be describing that plugin rather than the case in hand. They are stood down
 * for the run and put back after it; what a row makes of such a view is a
 * question of its own, and the last case asks it.
 */
const takersFound = await standDownTabTakers(page);
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
	// Holding the name of what the pane is showing, marked — so the first
	// thing typed replaces it, and nothing has to be cleared by hand.
	expect("the field opens on the pane's own name", opened.field, ":blank");
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

test("the vault root lists the pages a pane can hold, and picking one opens it", async () => {
	// The only things a pane can hold that no path names, so the root — where
	// everything else in the vault is reached from — is where they belong.
	await page.evaluate(blankTab);
	await page.evaluate(`
		await app.workspace.getMostRecentLeaf().openFile(app.vault.getAbstractFileByPath(${JSON.stringify(NOTE)}));
		${PAUSE(600)}
		const root = app.workspace.getMostRecentLeaf().view.containerEl
			.querySelector(".view-header-title-container");
		// The first folder's own name, which lists the folder above it — the
		// vault root. The delimiter beside it is not the way in any more: with
		// the swap on it belongs to the tree, and to the start page where one
		// is installed.
		const folder = [...root.querySelectorAll(".view-header-breadcrumb")]
			.find((el) => !el.classList.contains("lure-vault-segment"));
		folder.click();
		${PAUSE(600)}
		return true;
	`);
	const listed = await look();
	expect("the graph is offered", listed.rows, (v) => v.includes(":graph"));
	expect("and so is search", listed.rows, (v) => v.includes(":search"));
	// Read rather than written down: a view that exists to show a file is a
	// value of `typeByExtension`, and those are not pages you can open empty.
	expect("but nothing that needs a file", listed.rows, (v) =>
		!v.includes(":markdown") && !v.includes(":pdf") && !v.includes(":image") && !v.includes(":canvas"));
	expect("nor this plugin's own viewer", listed.rows, (v) => !v.includes(":lure-external-file"));
	// The folder's own contents come first: these are not in it.
	expect("the folders of the root are listed before them", listed.rows, (v) => {
		const first = v.findIndex((row) => row.startsWith(":"));
		return first > 0 && v.slice(0, first).every((row) => !row.startsWith(":"));
	});

	await page.evaluate(`
		const row = [...document.querySelectorAll(".suggestion-item")].find((e) => e.textContent.includes(":graph"));
		row.click();
		${PAUSE(900)}
		return true;
	`);
	const after = await look();
	expect("picking it opens that view in this pane", after.type, "graph");
	expect("and the row names it as the segment does", after.parts, (v) => v.includes(":graph"));
});

test("the vault name opens its places on a pane holding no file", async () => {
	// The one gesture that leads out of the vault, on exactly the pane you
	// would use to go somewhere: it wanted a file before it would open, and a
	// blank tab has none.
	expect("the tab is empty", await page.evaluate(blankTab), "empty");
	const opened = JSON.parse(await page.evaluate(`
		const box = app.workspace.getMostRecentLeaf().view.containerEl
			.querySelector(".view-header-title-container");
		box.querySelector(".lure-vault-segment").click();
		${PAUSE(800)}
		const title = app.workspace.getMostRecentLeaf().view.containerEl
			.querySelector(".view-header-title");
		return JSON.stringify({
			field: document.querySelector(".lure-path-input")?.value ?? null,
			places: document.querySelectorAll(".suggestion-item").length,
			// The field stands where the vault name was, so Obsidian's own
			// title must stay out of the way — it reappeared beside the path
			// for as long as the row measured itself by what it had drawn.
			titleWidth: Math.round(title.getBoundingClientRect().width),
		});
	`));
	expect("the field opens on the vault's own path", opened.field, (v) =>
		typeof v === "string" && v.startsWith("/"));
	expect("with the places listed under it", opened.places, (v) => v > 0);
	expect("and Obsidian's title nowhere beside it", opened.titleWidth, 0);
	await pressKey(page, "Escape");
});

test("a page can be typed as well as picked, and is not something to make", async () => {
	// The labels are the same in both directions, which is what an address
	// bar means: what the list offers can be typed, and what is typed is
	// coloured as what it names — orange for a page, as for anything that is
	// not a note, rather than red for a note about to be created.
	await page.evaluate(blankTab);
	await page.evaluate(`
		await app.workspace.getMostRecentLeaf().openFile(app.vault.getAbstractFileByPath(${JSON.stringify(NOTE)}));
		${PAUSE(600)}
		const box = app.workspace.getMostRecentLeaf().view.containerEl
			.querySelector(".view-header-title-container");
		box.querySelector(".lure-filename-text").click();
		${PAUSE(500)}
		const input = document.querySelector(".lure-path-input");
		input.value = ""; input.dispatchEvent(new Event("input", { bubbles: true }));
		${PAUSE(200)}
		return true;
	`);
	await page.send("Input.insertText", { text: ":graph" });
	await page.evaluate(PAUSE(700) + "return true;");
	const typed = JSON.parse(await page.evaluate(`
		const input = document.querySelector(".lure-path-input");
		const probe = document.body.createDiv();
		probe.style.color = "var(--text-warning)";
		const warn = getComputedStyle(probe).color;
		probe.remove();
		return JSON.stringify({
			value: input.value,
			willCreate: input.classList.contains("lure-will-create"),
			orange: getComputedStyle(input).color === warn,
			rows: [...document.querySelectorAll(".suggestion-item")].map((e) => ({
				label: e.textContent,
				orange: getComputedStyle(e.querySelector(".lure-suggest-label") ?? e).color === warn,
			})),
		});
	`));
	expect("the name stands as typed", typed.value, ":graph");
	expect("the field does not offer to make it", typed.willCreate, false);
	expect("it wears the colour of what it names", typed.orange, true);
	expect("and the row offering it wears the same", typed.rows, (v) =>
		v.some((row) => row.label.includes(":graph") && row.orange));

	await pressKey(page, "Enter");
	await page.evaluate(PAUSE(1100) + "return true;");
	const after = await look();
	expect("Enter opens the page", after.type, "graph");
	expect("and made nothing", await page.evaluate(
		`return app.vault.getRoot().children.filter((f) => f.name.startsWith(":")).length;`), 0);
});

test("the field opens on the page's own name, and Tab finishes it", async () => {
	// A page names what the pane is holding, so clicking it opens the field
	// on that name exactly as clicking a file's name does — it opened empty
	// at first, which threw away the one thing the row had to say. And Tab
	// completes it: the labels are the same in both directions, so `:gr`
	// reaches `:graph` as `Sch` reaches `Schemes`.
	await page.evaluate(blankTab);
	await page.evaluate(`
		const leaf = app.workspace.getMostRecentLeaf();
		await leaf.setViewState({ type: "graph", active: true });
		app.workspace.setActiveLeaf(leaf, { focus: true });
		${PAUSE(900)}
		const box = app.workspace.getMostRecentLeaf().view.containerEl
			.querySelector(".view-header-title-container");
		box.querySelector(".lure-filename-text").click();
		${PAUSE(600)}
		return true;
	`);
	const opened = JSON.parse(await page.evaluate(`
		const input = document.querySelector(".lure-path-input");
		return JSON.stringify({ value: input?.value ?? null,
			selected: input ? input.value.slice(input.selectionStart, input.selectionEnd) : null });
	`));
	expect("the field holds the page's name", opened.value, ":graph");
	expect("marked, ready to be typed over", opened.selected, ":graph");

	await page.evaluate(`
		const input = document.querySelector(".lure-path-input");
		input.value = ""; input.dispatchEvent(new Event("input", { bubbles: true })); input.focus();
		${PAUSE(200)}
		return true;
	`);
	await page.send("Input.insertText", { text: ":gr" });
	await page.evaluate(PAUSE(500) + "return true;");
	await pressKey(page, "Tab");
	await page.evaluate(PAUSE(600) + "return true;");
	const completed = JSON.parse(await page.evaluate(`
		const input = document.querySelector(".lure-path-input");
		return JSON.stringify({ value: input?.value ?? null,
			selected: input ? input.value.slice(input.selectionStart, input.selectionEnd) : null });
	`));
	// Whole, colon and all: the ladder that widens a path used to take this
	// press, and a page has no path for it to widen — it wrote the view type
	// into the field and `:graph` became `graph`.
	expect("Tab finishes the name", completed.value, ":graph");
	expect("and stops there, since a page is whole", completed.selected, "");
	await pressKey(page, "Escape");
});

test("a folder that is not the root offers no pages", async () => {
	// They are the vault's, not every folder's: a listing of `LureBlank`
	// offering `:graph` would read as something inside it.
	await page.evaluate(blankTab);
	await page.evaluate(`
		await app.workspace.getMostRecentLeaf().openFile(app.vault.getAbstractFileByPath(${JSON.stringify(NOTE)}));
		${PAUSE(600)}
		const root = app.workspace.getMostRecentLeaf().view.containerEl
			.querySelector(".view-header-title-container");
		root.querySelector(".lure-filename-text").click();
		${PAUSE(600)}
		return true;
	`);
	const listed = await look();
	expect("the folder's own contents are listed", listed.rows, (v) => v.length > 0);
	expect("and no page among them", listed.rows, (v) => !v.some((row) => row.startsWith(":")));
	await pressKey(page, "Escape");
});

test("a view this plugin has never heard of is named after itself", async () => {
	// The open-ended rung of the label, asked of a real stranger: a home-tab
	// plugin, which answers every new tab with a view of its own and is the
	// commonest way an unknown view ends up in front of this row. Its type is
	// `home-launcher-view`, and the label drops the trailing `-view` — the
	// segment is already a view's name, and saying so twice makes it longer
	// and no clearer.
	//
	// The suite stands these plugins down for the run (see the top of the
	// file); this one case puts one back, asks, and stands it down again.
	if (!takersFound.length) {
		skipCase("no home-tab plugin is installed in this vault, so no stranger's view to name");
	}
	const id = takersFound[0];
	await restoreTabTakers(page, [id]);
	try {
		const type = await page.evaluate(`
			document.querySelector(".lure-path-input")?.blur();
			app.workspace.getLeavesOfType("empty").forEach((l) => l.detach());
			${PAUSE(200)}
			await app.workspace.getLeaf(false).openFile(app.vault.getAbstractFileByPath(${JSON.stringify(NOTE)}));
			${PAUSE(400)}
			const fresh = app.workspace.getLeaf("tab");
			app.workspace.setActiveLeaf(fresh, { focus: true });
			${PAUSE(900)}
			return app.workspace.getMostRecentLeaf().view.getViewType();
		`);
		expect("the plugin answered the new tab", type, (v) => v !== "empty");
		const s = await look();
		expect("the row names the view it found", s.parts, (v) => v.some((p) => p.startsWith(":")));
		expect("without the word view twice", s.parts, (v) => !v.some((p) => p.endsWith("-view")));
		expect("and it is that view's own name", s.parts.join(""), (v) => v.includes(`:${type.replace(/-view$/, "")}`));
	} finally {
		await standDownTabTakers(page);
	}
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
	// Back on, for the same reason the gestures suite puts them back: this
	// suite borrows the window, it does not own it.
	await restoreTabTakers(page, takersFound);
	page.close();
}

await run();
