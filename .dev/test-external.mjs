#!/usr/bin/env node
/**
 * Behavioural tests for the "outside the vault" feature, run against a live
 * Obsidian over the DevTools protocol.
 *
 * These are not unit tests: the feature is a conversation between the path
 * bar, Obsidian's own suggest popover, an ItemView and the filesystem, and
 * every bug found in it so far has lived in the gaps between those. So the
 * assertions are made where the user would make them — what the DOM says,
 * and what is on disk afterwards.
 *
 *   node .dev/test-external.mjs          # all
 *   node .dev/test-external.mjs edit     # only tests whose name matches
 *
 * Requires --remote-debugging-port=9222 (see .dev/cdp.mjs) and a vault open.
 */

import { mkdirSync, rmSync, writeFileSync, readFileSync, existsSync, chmodSync } from "fs";
import { join } from "path";
import { homedir, userInfo } from "os";
import { connect, PAUSE } from "./cdpSession.mjs";
import { build } from "esbuild";
import { fileURLToPath } from "node:url";
import { dirname, resolve as resolvePath } from "node:path";

/**
 * The plugin speaks whatever language Obsidian is set to, so a suite that
 * hardcodes English silently breaks the moment someone switches locale —
 * and every failure looks like a product bug instead of a test bug. Load
 * the real string tables and resolve each key for the locale actually in
 * use, exactly as the plugin's own `t()` does.
 */
const projectRoot = resolvePath(dirname(fileURLToPath(import.meta.url)), "..");
const { outputFiles } = await build({
	stdin: {
		contents:
			'export { EN } from "./src/lang/strings";\n' +
			'export { TRANSLATIONS } from "./src/lang/translations";\n',
		resolveDir: projectRoot,
		loader: "ts",
	},
	bundle: true,
	format: "esm",
	write: false,
});
const { EN, TRANSLATIONS } = await import(
	`data:text/javascript;base64,${Buffer.from(outputFiles[0].text).toString("base64")}`
);

let locale = "en";
/** Resolves a string key the way the plugin does: locale override, else English. */
const T = (key) => TRANSLATIONS[locale]?.[key] ?? EN[key];
/**
 * The three labels the mode button can carry, as a page-side literal. The
 * suite used to filter these with English regexes like /as text/, which
 * quietly matched nothing the moment Obsidian was not in English.
 */
const MODE_LABELS = () =>
	JSON.stringify([T("externalRenderText"), T("externalRenderMarkdown"), T("externalViewText")]);

const BED = "/tmp/lure-testbed";
/** Derived, never hardcoded: the suite must not carry the author's username. */
const HOME = homedir();
const ACCOUNT = userInfo().username;
const EXDEV = join(HOME, "lure-exdev-target");
const results = [];
let page;

/** Fixtures live outside every vault on purpose — that is the thing under test. */
function buildFixtures() {
	rmSync(BED, { recursive: true, force: true });
	mkdirSync(join(BED, "sub"), { recursive: true });

	writeFileSync(join(BED, "note.md"), "# Heading\n\nExternal *markdown* body.\n");
	writeFileSync(join(BED, "plain.txt"), "line one\nline two\n");
	writeFileSync(join(BED, "config.json"), '{ "key": "value" }\n');
	writeFileSync(join(BED, ".hidden.txt"), "hidden\n");
	writeFileSync(join(BED, "sub", "nested.md"), "nested\n");
	writeFileSync(join(BED, "rename-me.txt"), "rename me\n");
	writeFileSync(join(BED, "occupied.txt"), "do not clobber\n");
	// 2 MB, well past the cap — the size that used to kill the renderer.
	writeFileSync(join(BED, "big.log"), ("y".repeat(79) + "\n").repeat(27000));
	// Inside the byte cap, but one ruinous line.
	writeFileSync(join(BED, "oneline.txt"), "z".repeat(200 * 1024));
	// Markdown is costlier per byte and has its own, lower cap.
	writeFileSync(join(BED, "big.md"), "# Big\n\nparagraph with **bold**\n\n".repeat(12000));
}

function test(name, fn) {
	tests.push({ name, fn });
}
const tests = [];

const expect = (label, actual, wanted) => {
	const ok = typeof wanted === "function" ? wanted(actual) : JSON.stringify(actual) === JSON.stringify(wanted);
	results.push({ ok, label, actual: ok ? "" : JSON.stringify(actual) });
};

/** Opens a path in the plugin's viewer and waits for the render to settle. */
const open = (path, extra = "") => `
	// Detach first: reopening the same path in the same leaf keeps the view
	// instance, and with it the unlock — correct behaviour, but it would let
	// one test's state decide the next one's starting point.
	app.workspace.detachLeavesOfType("lure-external-file");
	${PAUSE(120)}
	await app.workspace.getLeaf(false).setViewState({
		type: "lure-external-file",
		active: true,
		state: { path: ${JSON.stringify(path)} },
	});
	${PAUSE(350)}
	${extra}
`;

/**
 * Opens a file that lives *inside* the vault in the plugin's viewer. The
 * path is built page-side, since only Obsidian knows where the vault is.
 */
const openVault = (relativePath) => `
	app.workspace.detachLeavesOfType("lure-external-file");
	${PAUSE(150)}
	await app.workspace.getLeaf(true).setViewState({
		type: "lure-external-file",
		active: true,
		state: { path: app.vault.adapter.getBasePath() + "/" + ${JSON.stringify(relativePath)} },
	});
	${PAUSE(600)}
`;

const view = `app.workspace.activeLeaf.view`;

/**
 * Obsidian stacks notices and leaves them up for seconds, so the first
 * `.notice` in the DOM is often the *previous* test's. Clear before acting,
 * and read the last one after.
 */
const CLEAR_NOTICES = `document.querySelectorAll(".notice").forEach((n) => n.remove());`;
const LAST_NOTICE = `[...document.querySelectorAll(".notice")].pop()?.textContent ?? ""`;

// ---------------------------------------------------------------- viewer

test("viewer: external .md renders as Markdown, read-only", async () => {
	const r = await page.evaluate(`
		${open(join(BED, "note.md"))}
		return {
			rendered: !!document.querySelector(".lure-external-markdown h1"),
			editor: !!document.querySelector(".lure-external-editor"),
			mode: ${view}.effectiveRenderMode(),
		};
	`);
	expect("renders headings", r.rendered, true);
	expect("no editor pane in Markdown mode", r.editor, false);
	expect("defaults to markdown", r.mode, "markdown");
});

test("viewer: external .txt is plain text and read-only until Edit", async () => {
	const r = await page.evaluate(`
		${open(join(BED, "plain.txt"))}
		const editor = document.querySelector(".lure-external-editor");
		return {
			value: editor?.value,
			readOnly: editor?.readOnly,
			notes: [...document.querySelectorAll(".lure-external-note")].map((n) => n.textContent),
			buttons: [...document.querySelectorAll(".lure-external-bar-button")].map((b) => b.textContent),
		};
	`);
	expect("shows the file's text", r.value, "line one\nline two\n");
	expect("starts read-only", r.readOnly, true);
	expect("states both conditions", r.notes.length, 2);
	expect("offers the edit mode", r.buttons.includes(T("externalRenderText")), true);
});

test("viewer: an oversized file truncates instead of taking the window down", async () => {
	const r = await page.evaluate(`
		const t0 = performance.now();
		${open(join(BED, "big.log"))}
		return {
			ms: Math.round(performance.now() - t0),
			chars: document.querySelector(".lure-external-editor")?.value.length,
			truncated: ${view}.truncated,
			readOnly: document.querySelector(".lure-external-editor")?.readOnly,
			hasEdit: [...document.querySelectorAll(".lure-external-bar-button")].some((b) => b.classList.contains("mod-destructive")),
			// Stated among the other status lines, not tacked on after the buttons.
			noteInLines: [...document.querySelectorAll(".lure-external-bar-notes .lure-external-note")]
				.some((n) => n.textContent === ${JSON.stringify(T("externalTruncated"))}),
			label: [...document.querySelectorAll(".lure-external-bar-button")]
				.map((b) => b.textContent).find((x) => ${MODE_LABELS()}.includes(x)),
		};
	`);
	expect("read was truncated", r.truncated, true);
	expect("stays read-only", r.readOnly, true);
	expect("editing is not offered at all", r.hasEdit, false);
	expect("says so among the status lines", r.noteInLines, true);
	expect("and the button promises only viewing", r.label, T("externalRenderMarkdown"));
	expect("kept to the cap", r.chars, (v) => v > 0 && v <= 256 * 1024);
	expect("and did it quickly", r.ms, (v) => v < 4000);
});

test("viewer: one enormous line is truncated even inside the byte cap", async () => {
	const r = await page.evaluate(`
		${open(join(BED, "oneline.txt"))}
		const ta = document.querySelector(".lure-external-editor");
		return { truncated: ${view}.truncated, longest: Math.max(...ta.value.split("\\n").map((l) => l.length)) };
	`);
	expect("counts as truncated", r.truncated, true);
	expect("no line left ruinous", r.longest, (v) => v <= 5000);
});

test("viewer: large Markdown renders under its own lower cap", async () => {
	const r = await page.evaluate(`
		const t0 = performance.now();
		${open(join(BED, "big.md"))}
		return {
			ms: Math.round(performance.now() - t0),
			truncated: ${view}.truncated,
			rendered: !!document.querySelector(".lure-external-markdown h1"),
			label: [...document.querySelectorAll(".lure-external-bar-button")]
				.map((b) => b.textContent).find((x) => ${MODE_LABELS()}.includes(x)),
			notes: [...document.querySelectorAll(".lure-external-bar-notes .lure-external-note")]
				.map((n) => n.textContent),
		};
	`);
	expect("still renders", r.rendered, true);
	expect("truncated to the markdown cap", r.truncated, true);
	expect("without freezing the UI", r.ms, (v) => v < 3000);
	// A truncated file can be read but never written, so the label must not
	// offer editing on the way to the text view.
	expect("offers viewing, not editing", r.label, T("externalViewText"));
	expect("truncation stated with the rest", r.notes, (v) => (v ?? []).includes(T("externalTruncated")));
});

test("viewer: exactly one mode button, and it says what the press does", async () => {
	const r = await page.evaluate(`
		const snap = () => [...document.querySelectorAll(".lure-external-bar-button")]
			.filter((b) => ${MODE_LABELS()}.includes(b.textContent))
			.map((b) => b.textContent + (b.classList.contains("mod-destructive") ? "!" : "")
				+ (b.classList.contains("mod-view") ? "~" : ""));
		const out = {};
		${open(join(BED, "note.md"))}
		out.externalRendered = snap();
		document.querySelector(".lure-external-bar-button").click();
		${PAUSE(800)}
		out.externalEditing = snap();
		${openVault("Textdatei.txt")}
		out.vaultText = snap();
		return out;
	`);
	expect("one button, rendered view", r.externalRendered, [T("externalRenderText") + "!"]);
	expect("one button, editing", r.externalEditing, [T("externalRenderMarkdown") + "~"]);
	expect("vault file needs no unlock", r.vaultText, [T("externalRenderMarkdown") + "~"]);
});

/**
 * One tab group, one empty leaf. Pane geometry is otherwise whatever the
 * saved workspace happens to be, which makes any measurement of it a
 * coin flip — and leaves the vault's layout full of the test's own splits.
 */
const RESET_LAYOUT = `
	{
	const layout = app.workspace.getLayout();
	layout.main = {
		id: "lure-test-root", type: "split", direction: "vertical",
		children: [{ id: "lure-test-tabs", type: "tabs", children: [
			{ id: "lure-test-leaf", type: "leaf", state: { type: "empty", state: {} } },
		] }],
	};
	await app.workspace.changeLayout(layout);
	}
	${PAUSE(600)}
`;

/**
 * Measures the bar in a pane split `times` over. Obsidian's split
 * directions read backwards from the shape they produce: "vertical" is the
 * *divider*, so it puts panes side by side; "horizontal" stacks them.
 */
const measurePanes = (direction, times) => `
	${RESET_LAYOUT}
	let leaf = app.workspace.getLeaf(false);
	for (let i = 0; i < ${times}; i++) leaf = app.workspace.getLeaf("split", ${JSON.stringify(direction)});
	${PAUSE(500)}
	// big.log carries all three status lines at once: outside the vault, an
	// unregistered type, and truncated — the worst case for fitting them in.
	await leaf.setViewState({
		type: "lure-external-file",
		active: true,
		state: { path: ${JSON.stringify(join(BED, "big.log"))} },
	});
	${PAUSE(900)}

	const view = leaf.view.containerEl;
	const v = view.querySelector(".lure-external-view");
	const pane = v.getBoundingClientRect();
	const bar = view.querySelector(".lure-external-bar").getBoundingClientRect();
	const body = view.querySelector(".lure-external-body").getBoundingClientRect();
	const editor = view.querySelector(".lure-external-editor");
	const measured = {
		w: Math.round(pane.width),
		h: Math.round(pane.height),
		barH: Math.round(bar.height),
		bodyH: Math.round(body.height),
		notes: view.querySelectorAll(".lure-external-note").length,
		overflowX: v.scrollWidth - v.clientWidth,
		overflowY: v.scrollHeight - v.clientHeight,
		barVisible: bar.bottom <= pane.bottom + 1,
		insidePane: [...view.querySelectorAll(".lure-external-bar-button, .lure-external-note")].every((el) => {
			const r = el.getBoundingClientRect();
			return r.right <= pane.right + 1 && r.left >= pane.left - 1 && r.bottom <= pane.bottom + 1;
		}),
		editorScrolls: editor ? editor.scrollHeight > editor.clientHeight : false,
	};
	${RESET_LAYOUT}
	return measured;
`;

test("layout: side by side, the bar wraps instead of spilling out", async () => {
	// Split right, three times over: full height, but a quarter of the width.
	const r = await page.evaluate(measurePanes("vertical", 3));
	expect("the pane really is narrow", r.w, (v) => v < 420);
	expect("still full height", r.h, (v) => v > 600);
	expect("all three conditions are stated", r.notes, 3);
	expect("the bar wrapped rather than clipped", r.barH, (v) => v > 39 && v < 160);
	expect("nothing spills sideways", r.overflowX, 0);
	expect("nor downwards", r.overflowY, 0);
	expect("buttons and notes stay in the pane", r.insidePane, true);
	expect("the body keeps most of the height", r.bodyH, (v) => v > r.h * 0.6);
});

test("layout: stacked, the bar stays put and the body scrolls under it", async () => {
	// Split down twice: wide, but a third of the height — the shape that
	// used to push the bar off the top, back when the editor was sized in vh.
	const r = await page.evaluate(measurePanes("horizontal", 2));
	expect("the pane really is short", r.h, (v) => v > 100 && v < 400);
	expect("bar fully visible", r.barVisible, true);
	expect("nothing spills out of the pane", r.overflowY, 0);
	expect("buttons and notes stay in the pane", r.insidePane, true);
	expect("the body still has room", r.bodyH, (v) => v > 80);
	expect("and it is the body that scrolls", r.editorScrolls, true);
});

// ---------------------------------------------------------------- editing

test("editing: Edit makes the source writable and saves to disk", async () => {
	const target = join(BED, "plain.txt");
	await page.evaluate(`
		${open(target)}
		[...document.querySelectorAll(".lure-external-bar-button")].find((b) => b.textContent === ${JSON.stringify(T("externalRenderText"))}).click();
		${PAUSE(300)}
		const editor = document.querySelector(".lure-external-editor");
		editor.value = "edited by the test\\n";
		editor.dispatchEvent(new Event("input"));
		${PAUSE(1200)}
		return true;
	`);
	expect("wrote through to disk", readFileSync(target, "utf8"), "edited by the test\n");
});

test("editing: the Markdown view suspends editing but remembers it", async () => {
	const r = await page.evaluate(`
		${open(join(BED, "plain.txt"))}
		[...document.querySelectorAll(".lure-external-bar-button")].find((b) => b.textContent === ${JSON.stringify(T("externalRenderText"))}).click();
		${PAUSE(300)}
		const afterEdit = ${view}.editingActive();

		[...document.querySelectorAll(".lure-external-bar-button")].find((b) => b.textContent === ${JSON.stringify(T("externalRenderMarkdown"))}).click();
		${PAUSE(400)}
		const v = app.workspace.activeLeaf.view;
		const inMarkdown = {
			active: v.editingActive(),
			remembered: v.unlocked,
			label: [...document.querySelectorAll(".lure-external-bar-button")].find((b) => b.textContent === ${JSON.stringify(T("externalRenderText"))})?.textContent ?? null,
			note: document.querySelector(".lure-external-note")?.textContent,
		};

		[...document.querySelectorAll(".lure-external-bar-button")].find((b) => b.textContent === ${JSON.stringify(T("externalRenderText"))}).click();
		${PAUSE(400)}
		const back = app.workspace.activeLeaf.view;
		return {
			afterEdit,
			inMarkdown,
			backActive: back.editingActive(),
			backReadOnly: document.querySelector(".lure-external-editor")?.readOnly,
		};
	`);
	expect("editing on in text mode", r.afterEdit, true);
	expect("suspended in markdown", r.inMarkdown.active, false);
	expect("intent remembered", r.inMarkdown.remembered, true);
	expect("the edit mode is offered, not in force", r.inMarkdown.label, T("externalRenderText"));
	expect("status line drops the pencil", r.inMarkdown.note, (v) => !/Writing/.test(v ?? ""));
	expect("restored on return", r.backActive, true);
	expect("editor writable again", r.backReadOnly, false);
});

test("editing: leaving the text view suspends editing", async () => {
	const r = await page.evaluate(`
		${open(join(BED, "config.json"))}
		[...document.querySelectorAll(".lure-external-bar-button")].find((b) => b.textContent === ${JSON.stringify(T("externalRenderText"))}).click();
		${PAUSE(300)}
		[...document.querySelectorAll(".lure-external-bar-button")].find((b) => b.textContent === ${JSON.stringify(T("externalRenderMarkdown"))}).click();
		${PAUSE(300)}
		const v = app.workspace.activeLeaf.view;
		return { active: v.editingActive(), rendered: !!document.querySelector(".lure-external-markdown") };
	`);
	expect("no longer editing", r.active, false);
	expect("rendered instead", r.rendered, true);
});

test("editing: switching file re-locks", async () => {
	const r = await page.evaluate(`
		${open(join(BED, "plain.txt"))}
		[...document.querySelectorAll(".lure-external-bar-button")].find((b) => b.textContent === ${JSON.stringify(T("externalRenderText"))}).click();
		${PAUSE(300)}
		${open(join(BED, "config.json"))}
		return { unlocked: app.workspace.activeLeaf.view.unlocked };
	`);
	expect("new file starts locked", r.unlocked, false);
});

// ------------------------------------------------------------- path bar

const breadcrumb = `
	const bc = app.plugins.plugins.lure.manager.instances.get(app.workspace.activeLeaf);
`;

test("path bar: adopts the external file and rings red", async () => {
	const r = await page.evaluate(`
		${open(join(BED, "note.md"))}
		${breadcrumb}
		return {
			found: !!bc,
			externalPath: bc?.externalPath,
			fileName: bc?.externalFileName,
			outside: !!document.querySelector(".lure-external-active"),
			warn: !!document.querySelector(".lure-warn-active"),
			padlock: !!document.querySelector(".lure-unlock-btn"),
		};
	`);
	expect("breadcrumb instance exists", r.found, true);
	expect("points at the file's folder", r.externalPath, BED);
	expect("shows the file name", r.fileName, "note.md");
	expect("red ring up", r.outside, true);
	expect("orange ring not also up", r.warn, false);
	expect("padlock shown", r.padlock, true);
});

test("path bar: locked padlock refuses to create", async () => {
	const target = join(BED, "created-while-locked.md");
	const r = await page.evaluate(`
		${open(join(BED, "note.md"))}
		${breadcrumb}
		bc.externalWritesUnlocked = false;
		${CLEAR_NOTICES}
		await bc.submitExternal("created-while-locked.md", false);
		${PAUSE(300)}
		return { notice: ${LAST_NOTICE} };
	`);
	expect("nothing created", existsSync(target), false);
	expect("said why", r.notice, T("noticeExternalWriteLocked"));
});

test("path bar: unlocked padlock creates through the prompt", async () => {
	const target = join(BED, "created.md");
	await page.evaluate(`
		${open(join(BED, "note.md"))}
		${breadcrumb}
		bc.externalWritesUnlocked = true;
		const submit = bc.submitExternal("created.md", false);
		${PAUSE(300)}
		// Confirm the create-file modal the same way a click would.
		[...document.querySelectorAll(".modal button")].find((b) => b.textContent === ${JSON.stringify(T("create"))})?.click();
		await submit;
		${PAUSE(400)}
		return true;
	`);
	expect("file exists on disk", existsSync(target), true);
});

test("path bar: rename moves the file and follows it", async () => {
	const from = join(BED, "rename-me.txt");
	const to = join(BED, "renamed.txt");
	const r = await page.evaluate(`
		${open(from)}
		${breadcrumb}
		bc.externalWritesUnlocked = true;
		bc.renameMode = true;
		await bc.submitExternal("renamed.txt", false);
		${PAUSE(500)}
		return { viewPath: app.workspace.activeLeaf.view.filePath };
	`);
	expect("old name gone", existsSync(from), false);
	expect("new name present", existsSync(to) && readFileSync(to, "utf8"), "rename me\n");
	expect("view followed the move", r.viewPath, to);
});

test("path bar: refuses to overwrite an existing target", async () => {
	const r = await page.evaluate(`
		${open(join(BED, "renamed.txt"))}
		${breadcrumb}
		bc.externalWritesUnlocked = true;
		bc.renameMode = true;
		${CLEAR_NOTICES}
		await bc.submitExternal("occupied.txt", false);
		${PAUSE(300)}
		return { notice: ${LAST_NOTICE} };
	`);
	expect("target untouched", readFileSync(join(BED, "occupied.txt"), "utf8"), "do not clobber\n");
	expect("source still there", existsSync(join(BED, "renamed.txt")), true);
	expect("said already exists", r.notice,
		(v) => (v ?? "").includes(T("noticeAlreadyExists").split("{path}")[1]));
});

test("path bar: a note cannot be moved out of the vault", async () => {
	const r = await page.evaluate(`
		const md = app.vault.getMarkdownFiles()[0];
		await app.workspace.getLeaf(false).openFile(md);
		${PAUSE(300)}
		${breadcrumb}
		bc.externalPath = ${JSON.stringify(BED)};
		bc.externalWritesUnlocked = true;
		bc.renameMode = true;
		${CLEAR_NOTICES}
		await bc.submitExternal("exported.md", false);
		${PAUSE(300)}
		return { notice: ${LAST_NOTICE}, still: !!app.vault.getAbstractFileByPath(md.path) };
	`);
	expect("nothing written outside", existsSync(join(BED, "exported.md")), false);
	expect("note still in the vault", r.still, true);
	expect("explained, and offered the copy", r.notice,
		(v) => (v ?? "").startsWith(T("noticeExternalMoveOut").split("{mod}")[0]));
});

// -------------------------------------------------------------- dropdown

test("dropdown: gated by the Access external files setting", async () => {
	const r = await page.evaluate(`
		const md = app.vault.getMarkdownFiles()[0];
		await app.workspace.getLeaf(false).openFile(md);
		${PAUSE(300)}
		${breadcrumb}
		const plugin = app.plugins.plugins.lure;
		const was = plugin.settings.accessExternalFiles;

		plugin.settings.accessExternalFiles = false;
		bc.openLocationMenu();
		${PAUSE(250)}
		const off = { showing: bc.showingLocations, popover: !!document.querySelector(".suggestion-container") };

		plugin.settings.accessExternalFiles = true;
		bc.openLocationMenu();
		${PAUSE(250)}
		const on = {
			showing: bc.showingLocations,
			labels: [...document.querySelectorAll(".suggestion-item .lure-suggest-label")].map((e) => e.textContent),
			icons: [...document.querySelectorAll(".suggestion-item .lure-suggest-icon")].map(
				(e) => e.querySelector("svg")?.getAttribute("class") ?? "none",
			),
		};
		bc.cancelNavigation();
		plugin.settings.accessExternalFiles = was;
		return { off, on };
	`);
	expect("off: no locations mode", r.off.showing, false);
	expect("on: locations mode", r.on.showing, true);
	expect("lists root", r.on.labels?.includes("root"), true);
	expect("home under the account name", r.on.labels?.some((l) => l === ACCOUNT), true);
	expect("drew the hand-made tilde", r.on.icons?.some((c) => c.includes("lure-glyph-icon")), true);
});

test("dropdown: markdown entries are tinted, dot-files hidden", async () => {
	const r = await page.evaluate(`
		${open(join(BED, "note.md"))}
		${breadcrumb}
		// The orange tier only ever applies to a file Obsidian was told to
		// show, so pin the setting rather than inherit whatever this vault
		// happens to have: with it off "plain.txt" is filtered out and the
		// assertion below fails for a reason that has nothing to do with tinting.
		const was = app.vault.getConfig("showUnsupportedFiles");
		app.vault.setConfig("showUnsupportedFiles", true);
		// ".hidden.txt" is hidden for two independent reasons; with the
		// extension filter now off, the dot-file setting is the only one
		// left holding it back, so pin that too or a vault where someone
		// switched it on reports a failure the plugin did not cause.
		const lure = app.plugins.plugins.lure;
		const dots = lure.settings.showDotFiles;
		lure.settings.showDotFiles = false;
		bc.enterTypingMode("");
		${PAUSE(350)}
		const items = [...document.querySelectorAll(".suggestion-item")].map((e) => ({
			label: e.querySelector(".lure-suggest-label")?.textContent,
			cls: e.className,
		}));
		bc.cancelNavigation();
		lure.settings.showDotFiles = dots;
		app.vault.setConfig("showUnsupportedFiles", was);
		return { items };
	`);
	const md = r.items?.find((i) => i.label === "note.md");
	const txt = r.items?.find((i) => i.label === "plain.txt");
	expect("markdown tinted purple", md?.cls, (v) => (v ?? "").includes("lure-suggest-md"));
	expect("unregistered text tinted orange", txt?.cls, (v) => (v ?? "").includes("lure-suggest-warn"));
	expect("dot-file hidden by default", r.items?.some((i) => i.label === ".hidden.txt"), false);
});



test("create: a typed name with no extension becomes a note", async () => {
	const r = await page.evaluate(`
		${open(join(BED, "note.md"))}
		${breadcrumb}
		bc.externalWritesUnlocked = true;
		const submit = bc.submitExternal("plain-idea", false);
		${PAUSE(300)}
		const prompted = document.querySelector(".modal")?.textContent ?? "";
		[...document.querySelectorAll(".modal button")].find((b) => b.textContent === ${JSON.stringify(T("create"))})?.click();
		await submit;
		${PAUSE(350)}
		return { prompted };
	`);
	expect("prompted for the .md path", r.prompted, (v) => v.includes("plain-idea.md"));
	expect("created as a note", existsSync(join(BED, "plain-idea.md")), true);
	expect("not as an extensionless file", existsSync(join(BED, "plain-idea")), false);
});

test("create: an extensionless name opens the note already there", async () => {
	const r = await page.evaluate(`
		${open(join(BED, "plain.txt"))}
		${breadcrumb}
		${CLEAR_NOTICES}
		await bc.submitExternal("note", false);
		${PAUSE(400)}
		return { path: app.workspace.activeLeaf.view.filePath, modal: !!document.querySelector(".modal") };
	`);
	expect("opened the existing note.md", r.path, join(BED, "note.md"));
	expect("no create prompt", r.modal, false);
});

test("rename: an extensionless name keeps the file's own extension", async () => {
	writeFileSync(join(BED, "picture.png"), "not really a png");
	const r = await page.evaluate(`
		${open(join(BED, "picture.png"))}
		${breadcrumb}
		bc.externalWritesUnlocked = true;
		bc.renameMode = true;
		${CLEAR_NOTICES}
		await bc.submitExternal("holiday", false);
		${PAUSE(500)}
		return { notice: ${LAST_NOTICE} };
	`);
	expect("no error", r.notice, "");
	expect("kept .png", existsSync(join(BED, "holiday.png")), true);
	expect("did not become a note", existsSync(join(BED, "holiday.md")), false);
});

test("dropdown: a truncated listing says how much is missing", async () => {
	const r = await page.evaluate(`
		${open(join(BED, "note.md"))}
		${breadcrumb}
		// Same reason as the tinting test: /usr/bin is mostly extension-less
		// binaries, which Obsidian's setting filters out. With it off the
		// listing is a dozen directories and never overflows.
		const was = app.vault.getConfig("showUnsupportedFiles");
		app.vault.setConfig("showUnsupportedFiles", true);
		bc.externalPath = "/usr/bin";
		bc.enterTypingMode("");
		${PAUSE(600)}
		const items = [...document.querySelectorAll(".suggestion-item")];
		const last = items[items.length - 1];
		const out = {
			count: items.length,
			limit: bc.suggest.limit,
			lastText: last?.textContent,
			lastIsMore: last?.className.includes("lure-suggest-more"),
			pointerEvents: last ? getComputedStyle(last).pointerEvents : null,
		};
		bc.cancelNavigation();
		app.vault.setConfig("showUnsupportedFiles", was);
		return out;
	`);
	expect("fills the popover exactly", r.count, r.limit);
	expect("last row is the overflow row", r.lastIsMore, true);
	expect("states a count", r.lastText, (v) => /\d/.test(v ?? ""));
	expect("says how to narrow it", r.lastText,
		(v) => (v ?? "").endsWith(T("suggestMore").split("}")[1]));
	expect("not clickable", r.pointerEvents, "none");
});

test("dropdown: a short listing has no overflow row", async () => {
	const r = await page.evaluate(`
		${open(join(BED, "note.md"))}
		${breadcrumb}
		bc.externalPath = ${JSON.stringify(BED)};
		bc.enterTypingMode("");
		${PAUSE(400)}
		const out = { more: document.querySelectorAll(".lure-suggest-more").length };
		bc.cancelNavigation();
		return out;
	`);
	expect("no row when nothing was cut", r.more, 0);
});


test("padlock: the unlock survives the work, and ends on leaving the place", async () => {
	writeFileSync(join(BED, "m1.txt"), "a\n");
	const r = await page.evaluate(`
		${open(join(BED, "m1.txt"))}
		${breadcrumb}
		document.querySelector(".lure-unlock-btn").click();
		${PAUSE(300)}
		const bcOf = () => app.plugins.plugins.lure.manager.instances.get(app.workspace.activeLeaf);
		const out = { granted: bc.externalWritesUnlocked };

		// A click elsewhere ends the typing session, not the permission.
		bc.cancelNavigation();
		${PAUSE(400)}
		out.afterClickAway = bcOf().externalWritesUnlocked;

		// Nor does finishing a move — the thing you'd do over and over.
		const after = bcOf();
		after.renameMode = true;
		await after.submitExternal("m1-moved.txt", false);
		${PAUSE(800)}
		out.afterMove = bcOf().externalWritesUnlocked;
		out.padlockStillThere = !!document.querySelector(".lure-unlock-btn");

		// Picking somewhere else does end it.
		bcOf().goToLocation(${JSON.stringify(HOME)});
		${PAUSE(500)}
		out.afterNewLocation = bcOf().externalWritesUnlocked;
		bcOf().cancelNavigation();
		return out;
	`);
	expect("granted on click", r.granted, true);
	expect("survives a click-away", r.afterClickAway, true);
	expect("survives a completed move", r.afterMove, true);
	expect("padlock still shown", r.padlockStillThere, true);
	expect("ends on a new location", r.afterNewLocation, false);
	expect("the move happened", existsSync(join(BED, "m1-moved.txt")), true);
});

test("dropdown: the keep-this-name entry stands out in blue", async () => {
	const r = await page.evaluate(`
		${open(join(BED, "note.md"))}
		${breadcrumb}
		bc.renameMode = true;
		bc.externalPath = ${JSON.stringify(join(BED, "sub"))};
		bc.enterTypingMode("");
		${PAUSE(450)}
		const item = document.querySelector(".suggestion-item.lure-suggest-keep-name");
		const label = item?.querySelector(".lure-suggest-label");
		const out = {
			present: !!item,
			text: label?.textContent,
			colour: label ? getComputedStyle(label).color : null,
			// An external keep-name is also "external", whose muted tint it must beat.
			alsoExternal: item ? item.classList.contains("lure-suggest-external") : null,
			mutedColour: getComputedStyle(document.body).getPropertyValue("--text-muted").trim(),
			blue: getComputedStyle(document.body).getPropertyValue("--color-blue").trim(),
		};
		bc.cancelNavigation();
		return out;
	`);
	expect("offered", r.present, true);
	expect("names the file", r.text, "note.md");
	expect("and it is blue", r.colour, (v) => v === "rgb(8, 109, 221)" || /rgb/.test(v ?? ""));
	expect("not the muted external tint", r.colour, (v) => v !== r.mutedColour);
});

// --------------------------------------------- rename mode stays put

/**
 * Builds a small in-vault tree with sibling folders, so the rename-mode
 * dropdown has somewhere to descend into. Removed again by each test.
 */
const RENAME_FIXTURE = `
	for (const path of ["LureFocus/a", "LureFocus/b"]) {
		if (!app.vault.getAbstractFileByPath(path)) await app.vault.createFolder(path);
	}
	if (!app.vault.getAbstractFileByPath("LureFocus/a/note.md")) {
		await app.vault.create("LureFocus/a/note.md", "fixture\\n");
	}
	${PAUSE(200)}
	await app.workspace.getLeaf(false).openFile(app.vault.getAbstractFileByPath("LureFocus/a/note.md"));
	${PAUSE(400)}
`;

const DROP_RENAME_FIXTURE = `
	const folder = app.vault.getAbstractFileByPath("LureFocus");
	if (folder) await app.vault.adapter.rmdir(folder.path, true);
`;

test("rename mode: choosing a folder descends instead of ending the mode", async () => {
	const r = await page.evaluate(`
		${RENAME_FIXTURE}
		${breadcrumb}
		document.querySelector(".lure-rename-btn").click();
		${PAUSE(300)}
		// Open the dropdown on the parent segment, which lists its siblings.
		const seg = [...document.querySelectorAll(".view-header-breadcrumb")]
			.find((el) => el.textContent.trim() === "a");
		seg.click();
		${PAUSE(500)}
		const before = { rename: bc.renameMode, mode: bc.mode };

		const item = [...document.querySelectorAll(".suggestion-item")]
			.find((el) => el.textContent.trim() === "b");
		item.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
		item.click();
		${PAUSE(600)}

		const after = { rename: bc.renameMode, mode: bc.mode, browsePath: bc.browsePath };
		bc.cancelNavigation();
		bc.renameMode = false;
		bc.updateRenameModeStyling();
		${DROP_RENAME_FIXTURE}
		return { before, after };
	`);
	expect("dropdown opened in rename mode", r.before.rename, true);
	expect("still in rename mode after picking a folder", r.after.rename, true);
	expect("and it descended", r.after.browsePath, "LureFocus/b");
});

test("rename mode: focus moving away mid-session does not end it", async () => {
	// The failure this encodes: descending rebuilds the row's input, and
	// whatever takes focus while that happens — <body>, or Obsidian pulling
	// it back to the editor — used to read as the user leaving, ending the
	// mode on a click meant to continue it.
	const r = await page.evaluate(`
		${RENAME_FIXTURE}
		${breadcrumb}
		document.querySelector(".lure-rename-btn").click();
		${PAUSE(300)}
		const seg = [...document.querySelectorAll(".view-header-breadcrumb")]
			.find((el) => el.textContent.trim() === "a");
		seg.click();
		${PAUSE(500)}
		const opened = { rename: bc.renameMode, mode: bc.mode };

		// Take focus out of the header the way the app itself does — into the
		// editor. <body> would not do: it is not focusable, so focusing it
		// moves nothing and the check never sees anything leave.
		const editor = document.querySelector(".cm-content, .markdown-source-view [contenteditable]");
		if (!editor) throw new Error("no editor to steal focus into");
		editor.focus();
		document.querySelector(".view-header").dispatchEvent(
			new FocusEvent("focusout", { bubbles: true }),
		);
		${PAUSE(400)}
		const survived = bc.renameMode;
		const focusLanded = document.activeElement?.className?.slice?.(0, 30);

		// A real click outside must still end it.
		bc.cancelNavigation();
		${PAUSE(200)}
		document.querySelector(".workspace-leaf-content").click();
		${PAUSE(300)}
		const afterClickAway = bc.renameMode;

		bc.renameMode = false;
		bc.updateRenameModeStyling();
		${DROP_RENAME_FIXTURE}
		return { opened, survived, afterClickAway, focusLanded };
	`);
	expect("session open in rename mode", r.opened.rename, true);
	expect("focus really left the header", r.focusLanded, (v) => !!v && !/view-header/.test(v));
	expect("focus leaving mid-session is ignored", r.survived, true);
	expect("but clicking away still ends it", r.afterClickAway, false);
});

// ------------------------------------------------------- invariants

test("invariant: overwrite protection ignores whether a name is listed", async () => {
	const r = await page.evaluate(`
		${open(join(BED, "plain.txt"))}
		${breadcrumb}
		const plugin = app.plugins.plugins.lure;
		const was = plugin.settings.showDotFiles;
		plugin.settings.showDotFiles = false;
		bc.externalWritesUnlocked = true;
		bc.renameMode = true;
		${CLEAR_NOTICES}
		await bc.submitExternal(".hidden.txt", false);
		${PAUSE(300)}
		plugin.settings.showDotFiles = was;
		return { notice: ${LAST_NOTICE} };
	`);
	expect("hidden file still blocks", r.notice, (v) => /exist/i.test(v));
	expect("hidden file untouched", readFileSync(join(BED, ".hidden.txt"), "utf8"), "hidden\n");
	expect("source untouched", existsSync(join(BED, "plain.txt")), true);
});

test("invariant: an unreadable file fails visibly and is never writable", async () => {
	const target = join(BED, "noread.txt");
	writeFileSync(target, "secret\n");
	chmodSync(target, 0o000);
	const r = await page.evaluate(`
		${open(target)}
		return {
			readFailed: ${view}.readFailed,
			error: !!document.querySelector(".lure-external-error"),
			hasEdit: [...document.querySelectorAll(".lure-external-bar-button")].some((b) => b.classList.contains("mod-destructive")),
		};
	`);
	chmodSync(target, 0o644);
	expect("read failed", r.readFailed, true);
	expect("said so in the body", r.error, true);
	expect("editing not offered", r.hasEdit, false);
});

test("invariant: unsupported extensions follow Obsidian's own setting", async () => {
	const r = await page.evaluate(`
		${open(join(BED, "note.md"))}
		${breadcrumb}
		const was = app.vault.getConfig("showUnsupportedFiles");
		const seen = {};
		for (const setting of [true, false]) {
			app.vault.setConfig("showUnsupportedFiles", setting);
			bc.externalPath = ${JSON.stringify(BED)};
			bc.enterTypingMode("");
			${PAUSE(350)}
			seen[setting] = [...document.querySelectorAll(".suggestion-item .lure-suggest-label")].map((e) => e.textContent);
			bc.cancelNavigation();
			${PAUSE(150)}
		}
		app.vault.setConfig("showUnsupportedFiles", was);
		return seen;
	`);
	expect("on: lists .txt", r.true?.includes("plain.txt"), true);
	expect("off: hides .txt", r.false?.includes("plain.txt"), false);
	expect("off: still lists .md", r.false?.includes("note.md"), true);
});

test("invariant: browsing another vault never switches this window", async () => {
	const r = await page.evaluate(`
		${open(join(BED, "note.md"))}
		${breadcrumb}
		const before = app.vault.getName();
		const other = bc.locationEntries().find((l) => l.kind === "vault" && !l.isCurrentVault);
		if (other) { bc.goToLocation(other.path); ${PAUSE(400)} }
		const after = app.vault.getName();
		const base = bc.externalBase;
		bc.cancelNavigation();
		return { before, after, base, hadOther: !!other };
	`);
	expect("a second vault was available to try", r.hadOther, true);
	expect("vault unchanged", r.after, r.before);
	expect("trail starts at that vault", r.base?.label, (v) => !!v && v !== r.before);
	expect("under Obsidian's vault icon", r.base?.icon, "vault");
});

test("invariant: the padlock lapses on returning to the vault", async () => {
	const r = await page.evaluate(`
		${open(join(BED, "plain.txt"))}
		${breadcrumb}
		bc.externalWritesUnlocked = true;
		const md = app.vault.getMarkdownFiles()[0];
		await app.workspace.getLeaf(false).openFile(md);
		${PAUSE(500)}
		const back = app.plugins.plugins.lure.manager.instances.get(app.workspace.activeLeaf);
		return { unlocked: back.externalWritesUnlocked, button: !!document.querySelector(".lure-unlock-btn"), external: back.externalPath };
	`);
	expect("unlock dropped", r.unlocked, false);
	expect("padlock removed", r.button, false);
	expect("row back inside", r.external, null);
});

test("writes: a cross-filesystem move falls back to copy-then-delete", async () => {
	const from = join(BED, "sub", "nested.md");
	const to = join(EXDEV, "exdev-moved.md");
	rmSync(EXDEV, { recursive: true, force: true });
	const r = await page.evaluate(`
		${open(from)}
		${breadcrumb}
		bc.externalWritesUnlocked = true;
		bc.renameMode = true;
		${CLEAR_NOTICES}
		await bc.submitExternal(${JSON.stringify(to)}, false);
		${PAUSE(600)}
		return { notice: ${LAST_NOTICE}, viewPath: app.workspace.activeLeaf.view.filePath };
	`);
	expect("no error", r.notice, "");
	expect("arrived on the other filesystem", existsSync(to), true);
	expect("original removed", existsSync(from), false);
	expect("view followed", r.viewPath, to);
	rmSync(EXDEV, { recursive: true, force: true });
});

test("writes: Ctrl copies a note out instead of moving it", async () => {
	const r = await page.evaluate(`
		const md = app.vault.getMarkdownFiles()[0];
		await app.workspace.getLeaf(false).openFile(md);
		${PAUSE(350)}
		${breadcrumb}
		bc.externalPath = ${JSON.stringify(BED)};
		bc.externalWritesUnlocked = true;
		bc.renameMode = true;
		${CLEAR_NOTICES}
		await bc.submitExternal("copied-out.md", "tab");
		${PAUSE(500)}
		return { notice: ${LAST_NOTICE}, still: !!app.vault.getAbstractFileByPath(md.path) };
	`);
	expect("no error", r.notice, "");
	expect("copy landed outside", existsSync(join(BED, "copied-out.md")), true);
	expect("original still in the vault", r.still, true);
});

// ------------------------------------------------------------------ run

const filter = process.argv[2];
buildFixtures();
page = await connect();
// Read the locale the app is actually in, so T() resolves the same strings
// the user is looking at rather than the ones the author happened to write.
locale = await page.evaluate(`return window.localStorage.getItem("language") || "en";`);
if (locale !== "en") console.log(`(Obsidian locale: ${locale} — assertions resolved from the plugin's own table)`);

// The page target answers before Obsidian has loaded its plugins, so a
// suite started on that signal alone races the thing it is testing.
for (let i = 0; ; i++) {
	// Everything here is optional on purpose. On a cold start the target
	// exists while `app` is still undefined, and a probe that dereferences
	// it throws out of evaluate() and kills the suite instead of simply
	// reporting "not yet" — which is the one thing this loop exists to say.
	// layoutReady matters as much as the plugin: a workspace still being
	// restored will take the leaf back off the first test.
	let ready = false;
	try {
		ready = await page.evaluate(
			`return typeof app !== "undefined" && !!app.plugins?.plugins?.lure?.manager && app.workspace?.layoutReady === true;`,
		);
	} catch {
		ready = false; // renderer still coming up; treat as not ready
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

/**
 * Settings this suite flips, captured before the first test.
 *
 * Each test that flips one restores it, but a test that throws never reaches
 * its own restore — and this vault is the one the README screenshots come
 * from, where a stray "show all file types" changes what a dropdown contains.
 * Snapshot here, put it back in the unconditional teardown at the bottom.
 */
const SETTINGS_AT_START = JSON.parse(
	await page.evaluate(`
		return JSON.stringify({
			showUnsupportedFiles: !!app.vault.getConfig("showUnsupportedFiles"),
			lure: { ...app.plugins.plugins.lure.settings },
		});
	`),
);

for (const { name, fn } of tests) {
	if (filter ? !name.includes(filter) : name.includes("[crashes")) continue;
	console.log(`\n${name}`);
	// A test that fails with a modal open leaves it on Obsidian's modal
	// stack, and every later `.modal button` query then finds the *stale*
	// modal's buttons first — one failure silently becomes a dozen.
	await page.evaluate(`
		for (let i = 0; i < 4 && document.querySelector(".modal"); i++) {
			document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
			${PAUSE(120)}
		}
		document.querySelectorAll(".modal-container").forEach((m) => m.remove());
		return true;
	`);
	const start = results.length;
	try {
		await fn();
	} catch (err) {
		results.push({ ok: false, label: `${name} — threw`, actual: err.message });
	}
	for (let i = start; i < results.length; i++) {
		results[i].test = name;
		const r = results[i];
		console.log(`  ${r.ok ? "PASS" : "FAIL"}  ${r.label}${r.ok ? "" : `  → got ${r.actual}`}`);
	}
}

// The fixture folder is created inside the vault, and this vault is also the
// one the README screenshots are taken from. Individual tests drop it, but a
// test that throws does not reach its own cleanup — so drop it here too,
// where every run passes regardless of outcome.
await page.evaluate(`
	const folder = app.vault.getAbstractFileByPath("LureFocus");
	if (folder) await app.vault.adapter.rmdir(folder.path, true);
	const at = ${JSON.stringify(SETTINGS_AT_START)};
	app.vault.setConfig("showUnsupportedFiles", at.showUnsupportedFiles);
	Object.assign(app.plugins.plugins.lure.settings, at.lure);
	return true;
`);

page.close();

const failed = results.filter((r) => !r.ok).length;
console.log(`\n${results.length - failed}/${results.length} assertions passed`);
process.exit(failed ? 1 : 0);
