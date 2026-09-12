#!/usr/bin/env node
/**
 * Behavioural tests for showing an HTML file as the page it is.
 *
 * Two halves, and both matter. The first is that it renders at all: the
 * frame is handed the markup rather than a URL, because a document with an
 * opaque origin cannot fetch a `blob:` belonging to another one. The second
 * is what is *not* in what it is handed — no scripts, nothing fetched over
 * the network, and nothing read from outside the page's own folder.
 *
 *   node .dev/test-html.mjs           # all
 *   node .dev/test-html.mjs sandbox   # only tests whose name matches
 *
 * Requires --remote-debugging-port=9222 and OBSIDIAN_VAULT set.
 */

import { connect, PAUSE, quiesce, reloadPlugin, setSettings } from "./cdpSession.mjs";
import { createSuite } from "./harness.mjs";
import { mkdirSync, rmSync, writeFileSync } from "fs";
import { homedir } from "os";
import { join } from "path";

/** Outside every vault, so these are the plain external-file path into the viewer. */
const BED = join(homedir(), "lure-html-fixtures");
/** A folder beside it, for the reference that tries to climb out of the page's own. */
const OUTSIDE = join(homedir(), "lure-html-outside");

const page = await connect();

/**
 * The opt-in as this vault has it, captured before any case changes it.
 *
 * The teardown used to put back a constant `false`, on the assumption that off
 * is where every vault starts. In a vault where it is on, running this suite
 * turned it off and left it off — and the vault name then stops opening its
 * dropdown, which reads as the plugin having broken rather than as the suite
 * having tidied up after itself wrongly.
 */
const EXTERNAL_AT_START = await (async () => {
	for (let i = 0; i < 25; i++) {
		const seen = await page.evaluate(
			`const s = app.plugins?.plugins?.lure?.settings;
			 return s ? JSON.stringify(!!s.accessExternalFiles) : null;`,
		);
		if (seen !== null) return JSON.parse(seen);
		await new Promise((r) => setTimeout(r, 200));
	}
	return false;
})();

const { test, expect, run } = createSuite({ reset, teardown });

/** One transparent GIF pixel, so an inlined image has a real byte count. */
const PIXEL = Buffer.from("R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", "base64");

const PAGE = `<!doctype html>
<html>
<head>
	<title>Fixture page</title>
	<link rel="stylesheet" href="style.css">
	<link rel="stylesheet" href="https://example.invalid/remote.css">
	<script>window.parent.document.title = "escaped";</script>
</head>
<body>
	<h1>A heading in the page</h1>
	<p id="para">Paragraph text that only the render shows.</p>
	<img id="local" src="pixel.gif" alt="local">
	<img id="climbing" src="../lure-html-outside/pixel.gif" alt="outside">
	<img id="remote" src="https://example.invalid/tracker.gif" alt="remote">
	<a href="other.html">A link to somewhere else</a>
</body>
</html>
`;

function buildBed() {
	rmSync(BED, { recursive: true, force: true });
	rmSync(OUTSIDE, { recursive: true, force: true });
	mkdirSync(BED, { recursive: true });
	mkdirSync(OUTSIDE, { recursive: true });
	writeFileSync(join(BED, "page.html"), PAGE);
	writeFileSync(join(BED, "style.css"), "h1 { color: rebeccapurple; }\n");
	writeFileSync(join(BED, "pixel.gif"), PIXEL);
	writeFileSync(join(BED, "notes.json"), '{ "a": 1 }\n');
	writeFileSync(join(OUTSIDE, "pixel.gif"), PIXEL);
}

const open = (path) => `
	app.workspace.detachLeavesOfType("lure-external-file");
	${PAUSE(150)}
	await app.workspace.getLeaf(false).setViewState({
		type: "lure-external-file",
		active: true,
		state: { path: ${JSON.stringify(path)} },
	});
	${PAUSE(700)}
	return true;
`;

/**
 * What the viewer put on screen.
 *
 * `srcdoc` is read rather than the frame's document: a sandboxed frame with
 * an opaque origin is cross-origin to this one, so `contentDocument` is
 * null by construction — which is itself the thing under test.
 */
const viewState = `
	const view = app.workspace.getLeavesOfType("lure-external-file")[0]?.view;
	const frame = view?.contentEl?.querySelector("iframe");
	const editor = view?.contentEl?.querySelector(".lure-external-editor");
	const button = view?.contentEl?.querySelector(".lure-external-bar-button");
	return JSON.stringify({
		framed: !!frame,
		sandbox: frame ? frame.getAttribute("sandbox") : null,
		reachable: frame ? !!frame.contentDocument : null,
		srcdoc: frame ? frame.srcdoc : null,
		editorValue: editor ? editor.value : null,
		button: button ? button.textContent : null,
	});
`;

test("an html file opens as a page, in a frame that can do nothing else", async () => {
	await page.evaluate(open(join(BED, "page.html")));
	const s = JSON.parse(await page.evaluate(viewState));
	expect("rendered rather than shown as source", s.framed, true);
	// Empty rather than absent: the attribute with no tokens is what denies
	// scripts, forms and an origin. Absent would allow all of it.
	expect("sandboxed with nothing allowed", s.sandbox, "");
	expect("and so out of this document's reach", s.reachable, false);
	expect("the page's own text is in it", s.srcdoc, (v) => v.includes("A heading in the page"));
});

test("the script in the page is taken out rather than merely refused", async () => {
	await page.evaluate(open(join(BED, "page.html")));
	const s = JSON.parse(await page.evaluate(viewState));
	expect("no script survives into the frame", s.srcdoc, (v) => !v.includes("window.parent"));
	expect("nor the tag it was in", s.srcdoc, (v) => !/<script/i.test(v));
	const title = await page.evaluate(`return document.title;`);
	expect("and this window's own title is untouched", title, (v) => v !== "escaped");
});

test("a stylesheet beside the page is read in, so the page looks like itself", async () => {
	await page.evaluate(open(join(BED, "page.html")));
	const s = JSON.parse(await page.evaluate(viewState));
	expect("its rules are in the document", s.srcdoc, (v) => v.includes("rebeccapurple"));
	expect("and the link that would have fetched them is gone", s.srcdoc, (v) => !v.includes('href="style.css"'));
});

test("an image beside the page is inlined; a remote one is left where it is", async () => {
	await page.evaluate(open(join(BED, "page.html")));
	const s = JSON.parse(await page.evaluate(viewState));
	expect("the local one became data", s.srcdoc, (v) => v.includes("data:image/gif;base64,"));
	expect("the remote one was not fetched to inline it", s.srcdoc, (v) => v.includes("https://example.invalid/tracker.gif"));
	// Left as written *and* blocked at render time, which is the policy's
	// job: rewriting a remote URL would be lying about what the page says.
	expect("and the policy is stated in the document", s.srcdoc, (v) => v.includes("Content-Security-Policy"));
	expect("with nothing allowed off the machine", s.srcdoc, (v) => v.includes("default-src 'none'"));
});

test("a reference climbing out of the page's own folder is not read", async () => {
	// Not about secrecy — the policy above means nothing read can leave —
	// but about scope. A page is a document and the assets beside it.
	await page.evaluate(open(join(BED, "page.html")));
	const s = JSON.parse(await page.evaluate(viewState));
	expect("left exactly as written", s.srcdoc, (v) => v.includes("../lure-html-outside/pixel.gif"));
	// One inlined image, not two: the climbing one would produce a second.
	const inlined = JSON.parse(await page.evaluate(viewState)).srcdoc.split("data:image/gif;base64,").length - 1;
	expect("and nothing was inlined for it", inlined, 1);
});

test("the source is one press away, and it is the file as written", async () => {
	await page.evaluate(open(join(BED, "page.html")));
	const before = JSON.parse(await page.evaluate(viewState));
	expect("the button offers the source", before.button, (v) => typeof v === "string" && v.length > 0);
	await page.evaluate(`
		app.workspace.getLeavesOfType("lure-external-file")[0].view.contentEl
			.querySelector(".lure-external-bar-button").click();
		${PAUSE(800)}
		return true;
	`);
	const after = JSON.parse(await page.evaluate(viewState));
	expect("now the source", after.framed, false);
	expect("with the script still in it, because this is the file", after.editorValue, (v) => v.includes("window.parent"));
	expect("and the way back says so", after.button, (v) => typeof v === "string" && v.length > 0);
	await page.evaluate(`
		app.workspace.getLeavesOfType("lure-external-file")[0].view.contentEl
			.querySelector(".lure-external-bar-button").click();
		${PAUSE(800)}
		return true;
	`);
	const back = JSON.parse(await page.evaluate(viewState));
	expect("and back is the page again", back.framed, true);
});

test("a file with no page reading of its own is unaffected", async () => {
	// The toggle was generalised to ask which rendered reading a file has;
	// a `.json` has none, and still gets the Markdown offer it always got
	// rather than an offer to render it as a page.
	await page.evaluate(open(join(BED, "notes.json")));
	const s = JSON.parse(await page.evaluate(viewState));
	expect("shown as its source", s.framed, false);
	expect("with the text in the editor", s.editorValue, (v) => v.includes('"a": 1'));
});

async function reset() {
	await reloadPlugin(page);
	await quiesce(page);
	buildBed();
	// The viewer is only reachable at all with the opt-in on, and off is the
	// default: a setting a case depends on is a fixture that is not a file.
	await setSettings(page, { accessExternalFiles: true });
}

async function teardown() {
	await page.evaluate(`
		app.workspace.detachLeavesOfType("lure-external-file");
		app.workspace.getLeavesOfType("empty").forEach((l) => l.detach());
		document.querySelectorAll(".notice").forEach((n) => n.remove());
		${PAUSE(300)}
		return true;
	`);
	await setSettings(page, { accessExternalFiles: EXTERNAL_AT_START });
	rmSync(BED, { recursive: true, force: true });
	rmSync(OUTSIDE, { recursive: true, force: true });
	page.close();
}

await run();
