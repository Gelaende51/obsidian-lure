#!/usr/bin/env node
/**
 * Captures the README screenshots from a live Obsidian over CDP.
 *
 * Screenshots are documentation, so they go stale exactly like prose does —
 * a renamed setting or a restyled segment silently leaves the README showing
 * a version of the plugin that no longer exists. Scripting the capture makes
 * a refresh one command instead of an afternoon of window-wrangling, and
 * keeps every shot framed identically between runs.
 *
 *   node .dev/screenshots.mjs             # the published scene
 *   node .dev/screenshots.mjs <name>      # any other scene in the table
 *
 * Each scene names the vault it needs open; the vault has to exist already
 * and be built for the purpose — see docs/development.md. The test vault is
 * never a candidate: it is named use_this_testvault, runs in German, and
 * still holds the garbled fixtures from an old bug, all of which would ship
 * into the README.
 *
 * Requires --remote-debugging-port=9222, which is a debugging setting:
 * comment it back out when the session is over.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { PAUSE } from "./cdpSession.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = resolve(root, "docs/images");

/**
 * A scene is a vault plus the notes the shots are framed around.
 *
 * The two shots deliberately open *different* notes. They are published as a
 * pair, and repeating one note makes them read as the same photograph taken
 * twice — the second has to look like somewhere else in the vault for the
 * pair to say anything.
 *
 * `segment` is the breadcrumb segment the dropdown shot clicks; it wants a
 * folder with several siblings, or the dropdown demonstrates nothing. Both
 * notes have to sit under it.
 *
 * `hero` is the crop height in CSS pixels, shared by both shots so the pair
 * publishes at one size. It is per-scene because it is really a question
 * about that vault's sidebar: the open note has to stay in frame, or the tree
 * and the path stop agreeing and the shot argues against itself. A vault with
 * more top-level folders needs a taller crop.
 */
const SCENES = {
	princess: {
		vault: "L'Éclaire, c'est moi",
		note: "Schemes/2026/Cake catapult.md",
		dropdownNote: "Schemes/2026/Glitter volcano.md",
		// Collapsed before the reveal shot, so the expansion in the sidebar is
		// something the click visibly caused rather than the state it was
		// already in.
		collapse: ["Schemes/2026", "Schemes"],
		expand: ["Schemes", "Schemes/2026"],
		segment: "2026",
		prefix: "",
		hero: 370,
	},
};

const name = process.argv[2] ?? "princess";
const scene = SCENES[name];
if (!scene) {
	console.error(`unknown scene "${name}" — have: ${Object.keys(SCENES).join(", ")}`);
	process.exit(2);
}

/**
 * A window narrow enough that the breadcrumb still reads once GitHub has
 * scaled the image into a README column, captured at 2x so it stays sharp
 * on a HiDPI display. A full-width window would render the path at a size
 * nobody can read in the finished page.
 */
/**
 * How far the revealed row's colour channels may diverge before the shot is
 * treated as taken mid-fade. Settled it is a neutral grey (spread ~0); the
 * olive of an unfaded highlight runs to roughly 13%.
 */
const NEUTRAL_TOLERANCE = 6;

/** How long the revealed row's highlight takes to fade out of the capture. */
const REVEAL_SETTLE_MS = 3000;

const VIEWPORT = { width: 1100, height: 760, deviceScaleFactor: 2, mobile: false };

/** The scene picks the window, so this has to be set before connecting. */
process.env.OBSIDIAN_VAULT = scene.vault;
const { connect } = await import("./cdpSession.mjs");
const session = await connect();
const { send, evaluate } = session;

/**
 * Screenshot clips are in CSS pixels. scale stays 1: the emulated
 * deviceScaleFactor already renders at 2x, and setting both multiplies them
 * into a 4x image — four times the file for detail no README can show.
 */
async function shot(file, clip) {
	const { data } = await send("Page.captureScreenshot", {
		format: "png",
		captureBeyondViewport: false,
		clip: { ...clip, scale: 1 },
	});
	writeFileSync(resolve(outDir, `${file}.png`), Buffer.from(data, "base64"));
	console.log(`  ${file}.png  ${clip.width}×${clip.height} css`);
}

/** Opens a note and expands the tree down to it. */
const stage = (notePath) => `
	const file = app.vault.getAbstractFileByPath(${JSON.stringify(notePath)});
	if (!file) throw new Error("no such note: " + ${JSON.stringify(notePath)});
	await app.workspace.getLeaf(false).openFile(file);
	app.workspace.rightSplit.collapse();
	app.workspace.leftSplit.expand();
	${PAUSE(400)}

	// Expand the tree down to the open note, so the sidebar agrees with the
	// path in the header rather than contradicting it.
	const explorer = app.workspace.getLeavesOfType("file-explorer")[0]?.view;
	for (const path of ${JSON.stringify(scene.expand)}) {
		const item = explorer?.fileItems?.[path];
		if (item?.collapsible && item.collapsed) await item.setCollapsed(false);
	}
	${PAUSE(400)}
	return true;
`;

/**
 * The bar has to show the breadcrumb, not the editable path. Both states live
 * in the same element and differ only in how they read — tight slashes and a
 * visible .md extension mean text mode — so check before spending a capture
 * rather than after publishing one.
 */
async function requireBreadcrumbMode() {
	const bar = await evaluate(`
		return {
			editing: !!document.querySelector(".lure-editing"),
			suggesting: !!document.querySelector(".suggestion-container"),
			input: !!document.querySelector(".view-header input"),
			text: document.querySelector(".view-header-title-container")
				?.innerText.replace(/\\s+/g, " ").trim(),
		};
	`);
	if (bar.editing || bar.suggesting || bar.input || bar.text?.includes(".md")) {
		throw new Error(`path bar is not in breadcrumb mode: ${JSON.stringify(bar)}`);
	}
	console.log(`  state: ${bar.text}`);
}

/**
 * Real mouse input, not element.click().
 *
 * The reveal shot has to show the delimiter under the pointer in its hover
 * state, and CSS :hover does not respond to synthetic DOM events — only to
 * input the browser itself routed. Driving Input.dispatchMouseEvent also
 * exercises the same path a user's click takes, so the shot documents
 * behaviour that actually works rather than a handler called directly.
 */
async function mouseTo(x, y) {
	await send("Input.dispatchMouseEvent", { type: "mouseMoved", x, y, buttons: 0 });
}

async function mouseClick(x, y) {
	await mouseTo(x, y);
	for (const type of ["mousePressed", "mouseReleased"]) {
		await send("Input.dispatchMouseEvent", {
			type, x, y, button: "left", buttons: type === "mousePressed" ? 1 : 0, clickCount: 1,
		});
	}
}

/**
 * Average colour of a region of a finished capture, as [r, g, b] percentages.
 * Shells out to ImageMagick rather than decoding PNG here — the capture
 * already depends on it to draw the pointer.
 */
function sampleRegion(file, rect) {
	const scale = VIEWPORT.deviceScaleFactor;
	const geom = `${Math.round(rect.width * scale)}x${Math.round(rect.height * scale)}` +
		`+${Math.round(rect.x * scale)}+${Math.round(rect.y * scale)}`;
	const out = execFileSync("magick", [
		resolve(outDir, `${file}.png`), "-crop", geom, "+repage",
		"-resize", "1x1!", "-format", "%[fx:r*100],%[fx:g*100],%[fx:b*100]", "info:",
	]).toString();
	return out.split(",").map(Number);
}

/** Rect of the delimiter that follows a named breadcrumb segment. */
const separatorAfter = (label) => `
	const segments = Array.from(document.querySelectorAll(".view-header-breadcrumb"));
	const segment = segments.find((el) => el.textContent.trim() === ${JSON.stringify(label)});
	if (!segment) return { ok: false, saw: segments.map((el) => el.textContent.trim()) };
	const sep = segment.nextElementSibling;
	if (!sep?.classList.contains("view-header-breadcrumb-separator")) return { ok: false, saw: null };
	const r = sep.getBoundingClientRect();
	return { ok: true, x: r.x + r.width / 2, y: r.y + r.height / 2 };
`;

/**
 * Draws the pointer into a finished capture.
 *
 * A screenshot of a click is unreadable without one: the delimiter and the
 * folder name sit a few pixels apart, and which of the two was pressed is the
 * whole point of the picture. The SVG's tip is at (2,1) viewBox units, so the
 * composite offset backs that out to land the tip on the click coordinates.
 */
function drawCursor(file, cssX, cssY, frame) {
	const scale = VIEWPORT.deviceScaleFactor;
	const x = Math.round((cssX - frame.x) * scale) - 2 * scale;
	const y = Math.round((cssY - frame.y) * scale) - 1 * scale;
	const path = resolve(outDir, `${file}.png`);
	execFileSync("magick", [
		path,
		"(", "-background", "none", resolve(root, ".dev/cursor.svg"), ")",
		"-geometry", `+${x}+${y}`, "-composite", path,
	]);
	console.log(`  cursor at +${x}+${y}`);
}

try {
	mkdirSync(outDir, { recursive: true });
	await send("Emulation.setDeviceMetricsOverride", VIEWPORT);
	console.log(`scene "${name}" — vault ${scene.vault}`);

	// A demo vault is built fresh, so the plugin is not enabled in it yet and
	// the language follows whatever the app was last set to. Both are fixed
	// here rather than in the vault's files: enabling a plugin is Obsidian's
	// call to make, and the language lives in localStorage, not on disk.
	await evaluate(`
		window.localStorage.setItem("language", "en");
		if (!app.plugins.plugins.lure) {
			app.plugins.setEnable(true);
			await app.plugins.enablePluginAndSave("lure");
		}
		return true;
	`);

	// Reload. The path bar is stateful — a dropdown left open by an earlier
	// run or a manual poke stays open, and the header then renders the
	// editable string ("2026/Cake catapult.md") instead of the spaced
	// breadcrumb. That is what a stale hero shot looks like, and nothing
	// downstream notices, so start from a renderer that has no history.
	await evaluate(`location.reload(); return true;`);
	await new Promise((r) => setTimeout(r, 8000));

	// --- 1. a folder revealed from the delimiter -------------------------
	// Framed from the left edge so the File Explorer is in shot: this shot is
	// about the sidebar answering the header, so both have to be in it.
	await evaluate(stage(scene.note));
	const layout = await evaluate(`
		const root = document.querySelector(".workspace-split.mod-root").getBoundingClientRect();
		const header = document.querySelector(".view-header").getBoundingClientRect();
		const sidebar = document.querySelector(".workspace-split.mod-left-split").getBoundingClientRect();
		return { rootRight: root.right, headerTop: header.top, sidebarLeft: sidebar.left };
	`);
	const frame = {
		x: layout.sidebarLeft,
		y: layout.headerTop - 40,
		width: layout.rootRight - layout.sidebarLeft,
		height: scene.hero,
	};

	await evaluate(`
		const explorer = app.workspace.getLeavesOfType("file-explorer")[0]?.view;
		for (const path of ${JSON.stringify(scene.collapse)}) {
			const item = explorer?.fileItems?.[path];
			if (item?.collapsible && !item.collapsed) await item.setCollapsed(true);
		}
		${PAUSE(400)}
		return true;
	`);
	await requireBreadcrumbMode();

	const sep = await evaluate(separatorAfter(scene.segment));
	if (!sep.ok) throw new Error(`no delimiter after "${scene.segment}"; saw ${JSON.stringify(sep.saw)}`);
	await mouseClick(sep.x, sep.y);

	// The reveal is the subject of the shot, so it is checked rather than
	// assumed: a delimiter click that quietly did nothing would produce a
	// screenshot of an ordinary sidebar with a cursor drawn on it.
	//
	// Polled rather than slept on. Obsidian expands the ancestors, and the
	// plugin expands the target once its row exists; how long that takes
	// depends on how much of the tree had to be built, so any single wait is
	// either too short on a cold tree or wasted on a warm one.
	const target = scene.expand[scene.expand.length - 1];
	let revealed = null;
	for (let attempt = 0; attempt < 30; attempt++) {
		revealed = await evaluate(`
			const explorer = app.workspace.getLeavesOfType("file-explorer")[0]?.view;
			return {
				focused: explorer?.tree?.focusedItem?.file?.path,
				collapsed: explorer?.fileItems?.[${JSON.stringify("")} + ${JSON.stringify(target)}]?.collapsed,
			};
		`);
		if (revealed.focused === target && !revealed.collapsed) break;
		await new Promise((r) => setTimeout(r, 100));
	}
	if (revealed.focused !== target || revealed.collapsed) {
		throw new Error(`delimiter click did not reveal and expand: ${JSON.stringify(revealed)}`);
	}
	console.log(`  revealed: ${revealed.focused}`);

	// Obsidian tints the revealed row and fades the tint out over a couple of
	// seconds. Screenshot it too early and the sidebar publishes in a bright
	// olive nobody looks at for long — and the tint is invisible to the DOM
	// (computed background reads transparent throughout), so this cannot be
	// waited on by polling a style. It is waited on by the clock, then
	// checked in the pixels below.
	await new Promise((r) => setTimeout(r, REVEAL_SETTLE_MS));

	const rowRect = await evaluate(`
		const row = document.querySelector(".workspace-leaf-content[data-type='file-explorer'] .has-focus");
		if (!row) return null;
		const r = row.getBoundingClientRect();
		return { x: r.x, y: r.y, width: r.width, height: r.height };
	`);

	// Put the pointer back on the delimiter: the click moved focus, and the
	// hover styling has to be what the capture sees.
	await mouseTo(sep.x, sep.y);
	await new Promise((r) => setTimeout(r, 250));
	await shot(`${scene.prefix}breadcrumb`, frame);

	// Read the revealed row back out of the PNG. The fading tint never shows
	// up in computed style, so the only place to catch a shot taken too early
	// is the pixels: settled, the row is a neutral grey, and mid-fade it is a
	// conspicuous olive. Checked before the pointer is drawn, so a failure
	// leaves an unmarked capture to look at.
	if (rowRect) {
		const [r, g, b] = sampleRegion(`${scene.prefix}breadcrumb`, {
			x: rowRect.x - frame.x,
			y: rowRect.y - frame.y,
			width: rowRect.width,
			height: rowRect.height,
		});
		const spread = Math.max(r, g, b) - Math.min(r, g, b);
		if (spread > NEUTRAL_TOLERANCE) {
			throw new Error(
				`revealed row is still tinted (rgb ${r.toFixed(1)},${g.toFixed(1)},${b.toFixed(1)}; ` +
					`spread ${spread.toFixed(1)}%) — the highlight had not faded; raise REVEAL_SETTLE_MS`,
			);
		}
		console.log(`  row settled: spread ${spread.toFixed(1)}%`);
	}

	drawCursor(`${scene.prefix}breadcrumb`, sep.x, sep.y, frame);

	// --- 2. the same dropdown, in rename mode ----------------------------
	// Rename mode is where the list earns its colours: the current name pinned
	// at the top as the "move it, keep this name" entry, folders as
	// destinations, and notes greyed out because their names are taken.
	await evaluate(stage(scene.dropdownNote));
	await requireBreadcrumbMode();

	await evaluate(`
		document.querySelector(".lure-rename-btn").click();
		${PAUSE(400)}
		if (!document.querySelector(".lure-rename-btn").classList.contains("is-active")) {
			throw new Error("rename mode did not engage");
		}
		return true;
	`);

	const opened = await evaluate(`
		const segments = Array.from(document.querySelectorAll(".view-header-breadcrumb"));
		const target = segments.find((el) => el.textContent.trim() === ${JSON.stringify(scene.segment)});
		if (!target) return { ok: false, saw: segments.map((el) => el.textContent.trim()) };
		target.click();
		${PAUSE(600)}
		const menu = document.querySelector(".suggestion-container");
		if (!menu) return { ok: false, saw: null };
		const kinds = Array.from(menu.querySelectorAll(".suggestion-item"))
			.map((el) => el.className);
		const r = menu.getBoundingClientRect();
		return {
			ok: true,
			bottom: r.y + r.height,
			keepName: kinds.some((c) => c.includes("lure-suggest-keep-name")),
			folder: kinds.some((c) => c.includes("lure-suggest-folder")),
			file: kinds.some((c) => c.includes("lure-suggest-file")),
		};
	`);
	if (!opened.ok) throw new Error(`no dropdown; segments were ${JSON.stringify(opened.saw)}`);

	// All three kinds have to be on screen or the shot fails to show the one
	// thing it is for. A folder with no notes in it looks fine and says
	// nothing, so this is a property of the scene's vault, not of the code.
	if (!opened.keepName || !opened.folder || !opened.file) {
		throw new Error(
			`dropdown is missing a kind — keep-name:${opened.keepName} ` +
				`folder:${opened.folder} file:${opened.file}; the scene's folder ` +
				`needs at least one note beside its subfolders`,
		);
	}

	// Obsidian fades the popover in with a CSS transition, and this window
	// never advances one: it runs zero animation frames — occluded, driven by
	// automation, nothing on screen to paint for — so the capture would
	// photograph the menu at whatever opacity it was born with, letting the
	// note text show straight through it. Settling it to the end state shows
	// what a user sees a moment after the click, rather than a frame no one
	// ever looks at.
	const settled = await evaluate(`
		const menu = document.querySelector(".suggestion-container");
		// Transition off first: setting opacity alone only starts a *second*
		// transition, which cannot advance either, so the computed value
		// stays where it was.
		menu.style.transition = "none";
		menu.style.animation = "none";
		menu.style.opacity = "1";
		return getComputedStyle(menu).opacity;
	`);
	if (settled !== "1") throw new Error(`dropdown is still mid-fade at opacity ${settled}`);

	// Both shots publish at one height, so the dropdown has to fit inside it
	// rather than resize the pair. A dropdown cropped in half would read as a
	// bug in the plugin, so name the number to raise instead of shipping one.
	const room = Math.floor(frame.y + frame.height - opened.bottom);
	if (room < 8) {
		throw new Error(
			`dropdown overruns the ${scene.hero}px crop by ${8 - room}px: ` +
				`raise scene "${name}"'s hero height`,
		);
	}
	await shot(`${scene.prefix}dropdown`, frame);

	await evaluate(`document.body.click(); ${PAUSE(200)} return true;`);
	console.log(`\nwrote ${outDir}`);
} finally {
	await send("Emulation.clearDeviceMetricsOverride").catch(() => {});
	session.close();
}
