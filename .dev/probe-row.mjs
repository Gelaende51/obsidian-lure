#!/usr/bin/env node
/**
 * What the row of a pane is made of, part by part, with its widths.
 *
 * Seen on a desktop: the left of two panes side by side, a note at the vault
 * root, extensions hidden — the row showed the vault icon and "/", no name,
 * and the badge at the far end with room to spare between them. This sets
 * that up, prints each part's width and classes, and keeps a picture.
 *
 *   node .dev/probe-row.mjs              (Obsidian on the debugging port)
 *   LURE_SHOTS=shots .dev/ci-run.sh probe-row
 */
import { connect, PAUSE, setSettings } from "./cdpSession.mjs";

const page = await connect();
await setSettings(page, { showFileExtension: false, vaultSegment: "name", vaultIcon: "vault", swapSegmentActions: true, showDotFiles: true, accessExternalFiles: true, alignment: "left", delimiter: "/" });
await page.evaluate(`
	const root = app.vault.getRoot().children.filter((f) => f.extension === "md");
	const note = root[0];
	const other = root[1] ?? app.vault.getMarkdownFiles().find((f) => f !== note);
	const left = app.workspace.getLeaf(false);
	await left.openFile(other);
	const right = app.workspace.getLeaf("split", "vertical");
	await right.openFile(other);
	await left.openFile(note);
	${PAUSE(1500)}
	return true;
`);
const read = () => page.evaluate(`
	const rows = app.workspace.getLeavesOfType("markdown").map((leaf) => {
		const c = leaf.view.containerEl.querySelector(".view-header-title-container");
		const parts = [...c.querySelectorAll("*")].filter((e) => e.children.length === 0 || e.matches(".lure-filename, .lure-filename-badge, .lure-vault-wrapper, .view-header-title, .view-header-title-parent"))
			.map((e) => {
				const r = e.getBoundingClientRect();
				return Math.round(r.width) + "px " + e.tagName.toLowerCase() + "." + [...e.classList].join(".") + (e.children.length ? "" : " " + JSON.stringify((e.textContent ?? "").slice(0, 30)));
			});
		return { file: leaf.view.file?.path, width: Math.round(c.getBoundingClientRect().width), lureOn: c.dataset.lureOn ?? null, parts };
	});
	return JSON.stringify(rows, null, 1);
`);
console.log("--- after opening\n" + (await read()));
// Hot Reload reloads the plugin on every build — here while the note is a
// background tab, whose row is 0 px wide; then the tab is brought forward.
await page.evaluate(`
	const left = app.workspace.getLeavesOfType("markdown").find((l) => l.view.file?.path === app.vault.getRoot().children.filter((f) => f.extension === "md")[0].path);
	const background = app.workspace.createLeafInParent(left.parent, left.parent.children.indexOf(left) + 1);
	await background.openFile(app.vault.getMarkdownFiles().find((f) => f.path !== left.view.file.path));
	app.workspace.setActiveLeaf(background, { focus: true });
	${PAUSE(800)}
	await app.plugins.disablePlugin("lure");
	await app.plugins.enablePlugin("lure");
	${PAUSE(1500)}
	app.workspace.setActiveLeaf(left, { focus: true });
	${PAUSE(1500)}
	return true;
`);
console.log("--- after a reload with the note in the background, brought forward\n" + (await read()));
if (process.env.LURE_SHOTS) {
	const { mkdirSync, writeFileSync } = await import("node:fs");
	mkdirSync(`${process.env.LURE_SHOTS}/look`, { recursive: true });
	const png = await page.send("Page.captureScreenshot", { format: "png" });
	const data = png?.result?.data ?? png?.data;
	if (data) writeFileSync(`${process.env.LURE_SHOTS}/look/split-row.png`, Buffer.from(data, "base64"));
}
await setSettings(page, { showFileExtension: true });
page.close();
process.exit(0);
