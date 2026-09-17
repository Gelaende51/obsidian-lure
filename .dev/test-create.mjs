#!/usr/bin/env node
/**
 * Behavioural tests for the red field: the path bar saying, before the key
 * is pressed, that Enter is about to *make* something rather than open it.
 *
 * The point of the colour is that it agrees with what the key then does, so
 * most of these cases assert it twice — once by looking at the field, and
 * once by pressing Enter and looking at the vault. A hint that is merely
 * plausible is worse than none: it teaches the row's own grammar wrong.
 *
 * One connection for the whole run, and text entered with `Input.insertText`
 * rather than key by key, for the reasons `test-urls.mjs` sets out at
 * length: focus does not survive between processes, and "/" has a meaning of
 * its own in this field.
 *
 *   node .dev/test-create.mjs           # all
 *   node .dev/test-create.mjs absolute  # only tests whose name matches
 *
 * Requires --remote-debugging-port=9222 and OBSIDIAN_VAULT set.
 */

import { connect, PAUSE, pressKey, quiesce, reloadPlugin, setSettings } from "./cdpSession.mjs";
import { createSuite } from "./harness.mjs";
import { mkdirSync, rmSync, writeFileSync } from "fs";
import { homedir } from "os";
import { join } from "path";

/** Where the vault fixtures live, so a failed run leaves one folder to remove. */
const ROOT = "LureRed";
/** The folder outside every vault the external cases browse into. */
const BED = join(homedir(), "lure-red-fixtures");

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

const buildFixtures = `
	const mk = async (p) => { if (!app.vault.getAbstractFileByPath(p)) await app.vault.createFolder(p); };
	await mk("${ROOT}");
	await mk("${ROOT}/Kept");
	for (const p of ["${ROOT}/home.md", "${ROOT}/Trumpet.md", "${ROOT}/Kept/inner.md"]) {
		if (!app.vault.getAbstractFileByPath(p)) await app.vault.create(p, "# fixture\\n");
	}
	${PAUSE(400)}
	return true;
`;

/**
 * Opens the fixture note, opens the field on its name, and empties it.
 *
 * The untrusted `input` event is deliberate: `onInput` treats only a real
 * keystroke as retiring the prefill, but everything that follows from a
 * value change — the sizing, and the hint under test — runs either way.
 * Which is the whole reason the hint hangs off the sizing.
 */
const armInput = `
	document.querySelector(".lure-path-input")?.blur();
	document.body.click();
	${PAUSE(250)}
	app.workspace.getLeavesOfType("empty").forEach((l) => l.detach());
	app.workspace.getLeavesOfType("markdown").slice(1).forEach((l) => l.detach());
	app.workspace.detachLeavesOfType("lure-external-file");
	${PAUSE(250)}
	await app.workspace.getLeaf(false).openFile(app.vault.getAbstractFileByPath("${ROOT}/home.md"));
	${PAUSE(700)}
	const root = app.workspace.getMostRecentLeaf().view.containerEl
		.querySelector(".view-header-title-container");
	root.querySelector(".lure-filename-text").click();
	${PAUSE(400)}
	const input = root.querySelector(".lure-path-input");
	input.value = "";
	input.dispatchEvent(new Event("input"));
	input.focus();
	input.setSelectionRange(0, 0);
	return document.activeElement === input;
`;

/**
 * What the field looks like, with the error colour resolved from the theme
 * rather than written down here.
 *
 * The class is the mechanism and the colour is the claim, so both are read:
 * a rule that stopped applying — moved above the one it has to outrank, say,
 * since the two have equal specificity — would leave the class on and the
 * text unchanged, and only the second reading catches that.
 */
const fieldState = `
	const input = document.querySelector(".lure-path-input");
	const probe = document.body.createDiv();
	probe.style.color = "var(--text-error)";
	const errorColor = getComputedStyle(probe).color;
	probe.remove();
	return JSON.stringify({
		value: input ? input.value : null,
		marked: input ? input.classList.contains("lure-will-create") : null,
		red: input ? getComputedStyle(input).color === errorColor : null,
		errorColor,
	});
`;

const vaultState = `
	return JSON.stringify({
		activeFile: app.workspace.getActiveFile()?.path ?? null,
		paths: app.vault.getAllLoadedFiles().map((f) => f.path).sort(),
		roots: app.vault.getRoot().children.map((f) => f.name).sort(),
		external: app.workspace.getLeavesOfType("lure-external-file")[0]?.view?.filePath ?? null,
		notices: [...document.querySelectorAll(".notice")].map((n) => n.textContent),
	});
`;

/** Arms the field, puts `text` in it as a person would, and reads it back. */
async function type(text) {
	expect("field armed and focused", await page.evaluate(armInput), true);
	if (text) await page.send("Input.insertText", { text });
	await page.evaluate(PAUSE(350) + "return true;");
	return JSON.parse(await page.evaluate(fieldState));
}

/** Commits whatever is in the field, and reports what the vault did about it. */
async function commit() {
	await page.evaluate(`
		const input = document.querySelector(".lure-path-input");
		if (input) { input.focus(); input.setSelectionRange(input.value.length, input.value.length); }
		return !!input;
	`);
	await pressKey(page, "Enter");
	await page.evaluate(PAUSE(1200) + "return true;");
	return JSON.parse(await page.evaluate(vaultState));
}

test("a name the folder already answers to leaves the field alone", async () => {
	const s = await type("Trumpet.md");
	expect("not marked", s.marked, false);
	expect("and not red", s.red, false);
});

test("a name nothing answers to turns the whole field red", async () => {
	const s = await type("nowhere.md");
	expect("marked", s.marked, true);
	// The claim, not the mechanism: the theme's own error colour, resolved
	// at read time so a theme with a different red still passes.
	expect("and painted with it", s.red, true);
});

test("the red comes on and off as the name is edited", async () => {
	// Both directions, in one sitting, because that is where this is read:
	// while the name is being changed rather than after it has been.
	//
	// Typed *past* an existing name rather than up to it, because the field
	// completes: typing "Trump" leaves "Trumpet.md" standing in the field
	// with the offered run selected, and that is a name that does answer to
	// something — so it is rightly not red, and proves nothing either way.
	// Backspace is the one edit that is never answered by an offer, which
	// makes it the only way back to a partial name a case can rely on.
	expect("field armed and focused", await page.evaluate(armInput), true);
	await page.send("Input.insertText", { text: "Trumpetx" });
	await page.evaluate(PAUSE(400) + "return true;");
	const past = JSON.parse(await page.evaluate(fieldState));
	expect("a name one letter past a real one is a new one", past.marked, true);
	await pressKey(page, "Backspace");
	await page.evaluate(PAUSE(400) + "return true;");
	const back = JSON.parse(await page.evaluate(fieldState));
	expect("the letter is gone and nothing was offered back", back.value, "Trumpet");
	expect("so the red comes off", back.marked, false);
	await pressKey(page, "Escape");
});

test("a slash does not complete a rung Obsidian could never make", async () => {
	// "?" is one of the characters a vault name cannot hold. Descending on it
	// anyway left the row standing in a folder that could not be created, and
	// every press after that was measured from there.
	await type("bad?name");
	await pressKey(page, "/");
	await page.evaluate(PAUSE(400) + "return true;");
	const after = JSON.parse(await page.evaluate(fieldState));
	expect("the name is still there to be fixed", after.value, "bad?name");
	expect("and still red", after.marked, true);
	const chips = JSON.parse(await page.evaluate(
		`return JSON.stringify([...document.querySelectorAll(".view-header-title-container .lure-browse-chip")].map((c) => c.textContent));`,
	));
	expect("no rung was added", chips, (v) => !v.includes("bad?name"));
	await pressKey(page, "Escape");
});

test("a slash completes a rung that is merely not there yet, and keeps it red", async () => {
	// The other half of the same rule: typing a path ahead of itself is how a
	// path gets made, so the walk goes on — and the red goes with it, because
	// what the row is standing in does not exist until Enter makes it.
	await type("NotThereYet");
	await pressKey(page, "/");
	await page.evaluate(PAUSE(400) + "return true;");
	const after = JSON.parse(await page.evaluate(fieldState));
	expect("the field is ready for the next name", after.value, "");
	expect("the row is standing somewhere that has still to be made", after.marked, true);
	const chips = JSON.parse(await page.evaluate(
		`return JSON.stringify([...document.querySelectorAll(".view-header-title-container .lure-browse-chip")].map((c) => c.textContent));`,
	));
	expect("and the rung is on the row", chips, (v) => v.includes("NotThereYet"));
	await pressKey(page, "Escape");
});

test("a slash in front of an empty field opens a path on the machine", async () => {
	// The row's own slash means "take this rung and descend", which counts
	// what was typed from the folder the row stands in. A path from the
	// filesystem root is counted from nothing of the kind, and the press used
	// to be a no-op in front of an empty field — so "/home/me" arrived as
	// "home" and was rebuilt as folders inside the vault, under the vault's
	// own name and icon.
	await type("");
	await pressKey(page, "/");
	await page.evaluate(PAUSE(350) + "return true;");
	const opened = JSON.parse(await page.evaluate(fieldState));
	expect("the slash is in the field", opened.value, "/");
	await page.send("Input.insertText", { text: "home" });
	await pressKey(page, "/");
	await page.evaluate(PAUSE(350) + "return true;");
	const walked = JSON.parse(await page.evaluate(fieldState));
	expect("and so is every slash after it", walked.value, "/home/");
	const row = JSON.parse(await page.evaluate(`
		const root = app.workspace.getMostRecentLeaf().view.containerEl
			.querySelector(".view-header-title-container");
		return JSON.stringify({
			chips: [...root.querySelectorAll(".lure-browse-chip")].map((c) => c.textContent),
			vaultName: !!root.querySelector(".lure-root-name"),
			vaultIcon: !!root.querySelector(".lure-vault-icon"),
		});
	`));
	expect("no rung was built inside the vault", row.chips, (v) => v.length === 0);
	// The other half of the same claim: a path that is not in this vault is
	// not shown standing in it. The opening segment says nothing at all,
	// because the field begins at the root and says it already.
	expect("the vault's name is gone", row.vaultName, false);
	expect("and its icon with it", row.vaultIcon, false);
	await pressKey(page, "Escape");
});

test("a bare name is read as the note it would open, not as a new one", async () => {
	// Enter appends `.md` before it looks, so "Trumpet" opens "Trumpet.md".
	// Reading the typed text literally instead would have called an existing
	// note a new one for every character of its name but the last four.
	const s = await type("Trumpet");
	expect("no red for a note reachable without its extension", s.marked, false);
});

test("a folder is somewhere to go, not something to make", async () => {
	const s = await type("Kept");
	expect("a folder that is there is not a file to create", s.marked, false);
});

test("a web address is not a place on this machine to look for", async () => {
	const s = await type("https://obsidian.md");
	expect("nothing to say about it", s.marked, false);
});

test("an empty field says nothing", async () => {
	const s = await type("");
	expect("no value", s.value, "");
	expect("no red", s.marked, false);
});

test("rename mode keeps its own red and does not borrow this one", async () => {
	// In rename mode a name nothing answers to is the *expected* case — that
	// is what renaming is — while the red there means the opposite thing, a
	// name that is illegal or already taken. Two reds on one field meaning
	// opposite things would leave neither readable.
	expect("field armed and focused", await page.evaluate(armInput), true);
	await page.send("Input.insertText", { text: "nowhere.md" });
	await page.evaluate(PAUSE(300) + "return true;");
	const before = JSON.parse(await page.evaluate(fieldState));
	expect("red while this is navigation", before.marked, true);
	const after = JSON.parse(await page.evaluate(`
		app.workspace.getMostRecentLeaf().view.containerEl
			.querySelector(".lure-rename-btn").click();
		${PAUSE(500)}
		const input = document.querySelector(".lure-path-input");
		return JSON.stringify({
			renaming: !!document.querySelector(".lure-rename-btn.is-active"),
			marked: input ? input.classList.contains("lure-will-create") : null,
			value: input ? input.value : null,
		});
	`));
	expect("the toggle took", after.renaming, true);
	expect("what was typed is kept", after.value, "nowhere.md");
	expect("and the red is handed back", after.marked, false);
	await pressKey(page, "Escape");
});

test("red means Enter makes it, and it lands where the row said it would", async () => {
	const s = await type("brand new.md");
	expect("red beforehand", s.marked, true);
	const after = await commit();
	expect("made in the folder the row was standing in", after.paths, (v) => v.includes(`${ROOT}/brand new.md`));
	expect("and opened", after.activeFile, `${ROOT}/brand new.md`);
});

test("no red means Enter opens it, and nothing is made", async () => {
	const before = JSON.parse(await page.evaluate(vaultState));
	const s = await type("Trumpet.md");
	expect("no red beforehand", s.marked, false);
	const after = await commit();
	expect("the note it named is what opened", after.activeFile, `${ROOT}/Trumpet.md`);
	expect("and the vault is as it was", after.paths, before.paths);
});

test("an absolute path inside the vault opens the note, not a copy of the machine's tree", async () => {
	// The field that *opens* holding an absolute path is the locations
	// dropdown, so this is not a hypothetical shape. A leading separator
	// used to be folded into whatever folder the row was standing in, which
	// turned committing that field into eight nested folders named after
	// this machine's home directory — silently, and inside the vault.
	const before = JSON.parse(await page.evaluate(vaultState));
	const absolute = await page.evaluate(`return app.vault.adapter.getFullPath("${ROOT}/Trumpet.md");`);
	const s = await type(absolute);
	expect("nothing is going to be made", s.marked, false);
	const after = await commit();
	expect("the note it points at is what opened", after.activeFile, `${ROOT}/Trumpet.md`);
	expect("no folder named after the filesystem", after.roots, before.roots);
	expect("and nothing at all was made", after.paths, before.paths);
});

test("an absolute path that is nowhere is reported, not created", async () => {
	const before = JSON.parse(await page.evaluate(vaultState));
	const s = await type("/no/such/place/at/all.md");
	expect("no red: this row does not make files out there", s.marked, false);
	const after = await commit();
	expect("nothing was made for it", after.paths, before.paths);
});

test("outside the vault the same field asks the filesystem", async () => {
	// The row is walked out to the bed first, so the field is relative to a
	// real folder on disk rather than to a folder in the vault.
	expect("field armed and focused", await page.evaluate(armInput), true);
	const there = JSON.parse(await page.evaluate(`
		const bc = app.plugins.plugins.lure.manager.instances.get(app.workspace.activeLeaf);
		bc.goToLocation(${JSON.stringify(BED)});
		${PAUSE(800)}
		const input = document.querySelector(".lure-path-input");
		if (input) { input.value = ""; input.dispatchEvent(new Event("input")); input.focus(); }
		${PAUSE(200)}
		return JSON.stringify({ folder: bc.externalPath, has: !!input });
	`));
	expect("the row is out there", there.folder, BED);
	expect("with a field open", there.has, true);
	await page.send("Input.insertText", { text: "kept.md" });
	await page.evaluate(PAUSE(350) + "return true;");
	const known = JSON.parse(await page.evaluate(fieldState));
	expect("a file that is on disk is not one to make", known.marked, false);
	await page.send("Input.insertText", { text: "x" });
	await page.evaluate(PAUSE(350) + "return true;");
	const unknown = JSON.parse(await page.evaluate(fieldState));
	expect("one that is not, is", unknown.marked, true);
	await pressKey(page, "Escape");
});

test("a completion written into the field repaints it, with no keystroke to hang off", async () => {
	// The offered run is written into the field by the plugin, not typed, so
	// nothing dispatches a trusted `input` event for a listener to answer.
	// This is the case the hint is hung off the sizing for — every write into
	// the field resizes it, which is what makes that the one hook none of
	// them can forget.
	expect("field armed and focused", await page.evaluate(armInput), true);
	await page.send("Input.insertText", { text: "Trum" });
	await page.evaluate(PAUSE(500) + "return true;");
	const offered = JSON.parse(await page.evaluate(fieldState));
	expect("the rest of the name is standing in the field", offered.value, "Trumpet.md");
	expect("and what is standing there is a note that exists", offered.marked, false);
	// Backspace takes the offer back without taking a letter with it. What is
	// left names nothing — but the list still leads to the note, and the field
	// goes red only once no row does. An offer only ever stands where a row
	// starts with what was typed, so taking one back can never leave the field
	// red: it goes back to wearing the colour of the note it is heading for.
	await pressKey(page, "Backspace");
	await page.evaluate(PAUSE(400) + "return true;");
	const taken = JSON.parse(await page.evaluate(fieldState));
	expect("back to what was typed", taken.value, "Trum");
	expect("not red, with the note still in the list", taken.marked, false);
	expect("but wearing that note's colour", await page.evaluate(`return document.querySelector(".lure-path-input")?.dataset.lureTint ?? null;`), "md");
	await pressKey(page, "Escape");
});

function buildBed() {
	rmSync(BED, { recursive: true, force: true });
	mkdirSync(BED, { recursive: true });
	writeFileSync(join(BED, "kept.md"), "# outside\n");
}

async function reset() {
	await reloadPlugin(page);
	await quiesce(page);
	buildBed();
	await page.evaluate(buildFixtures);
	// One case walks the row outside the vault, which the plugin refuses to
	// do at all with this off — and off is the default. A setting a case
	// depends on is a fixture that happens not to be a file.
	await setSettings(page, { accessExternalFiles: true });
	// Whatever an earlier case created, taken back out: the cases that
	// assert "the vault is as it was" compare whole listings.
	await page.evaluate(`
		const stray = app.vault.getAbstractFileByPath("${ROOT}/brand new.md");
		if (stray) await app.vault.delete(stray, true);
		${PAUSE(200)}
		return true;
	`);
}

async function teardown() {
	await page.evaluate(`
		document.querySelector(".lure-path-input")?.blur();
		app.workspace.detachLeavesOfType("lure-external-file");
		app.workspace.getLeavesOfType("empty").forEach((l) => l.detach());
		document.querySelectorAll(".notice").forEach((n) => n.remove());
		${PAUSE(300)}
		const root = app.vault.getAbstractFileByPath("${ROOT}");
		if (root) await app.vault.adapter.rmdir("${ROOT}", true);
		${PAUSE(300)}
		return true;
	`);
	await setSettings(page, { accessExternalFiles: EXTERNAL_AT_START });
	rmSync(BED, { recursive: true, force: true });
	page.close();
}

await run();
