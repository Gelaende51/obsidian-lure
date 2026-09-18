/**
 * A single long-lived CDP connection, so a test run isn't one WebSocket
 * handshake per assertion. Same protocol as .dev/cdp.mjs, kept separate so
 * that stays a one-shot command-line tool.
 */

const PORT = process.env.OBSIDIAN_CDP_PORT ?? 9222;
const ORIGIN = `http://127.0.0.1:${PORT}`;

/**
 * Picks the Obsidian window to drive.
 *
 * With more than one vault open there is more than one page target, and
 * their order is not stable — taking the first one silently ran a whole
 * suite against whichever window happened to be listed first, which is a
 * quiet way to get meaningless results. Match on the vault name instead:
 * Obsidian titles its windows "<file> - <vault> - Obsidian".
 *
 * Set OBSIDIAN_VAULT to choose; with one window open it is optional.
 */
/**
 * Obsidian HTML-escapes the window title, so a vault named
 * "L'Éclaire, c'est moi" arrives as "L&#39;Éclaire, c&#39;est moi" and a
 * literal comparison never matches. Decode before comparing, or a vault with
 * an apostrophe in its name is simply unreachable from these tools.
 */
function decodeTitle(title) {
	return title
		.replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
		.replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)))
		.replace(/&quot;/g, '"')
		.replace(/&lt;/g, "<")
		.replace(/&gt;/g, ">")
		.replace(/&amp;/g, "&");
}

function pickTarget(targets, vault) {
	const pages = targets.filter((t) => t.type === "page" && !t.url.startsWith("devtools://"));
	if (!pages.length) throw new Error("No page target — is a vault open?");
	if (!vault) {
		if (pages.length > 1) {
			const names = pages.map((t) => decodeTitle(t.title)).join("\n  ");
			throw new Error(
				`${pages.length} Obsidian windows are open, so the target is ambiguous.\n` +
					`  ${names}\nSet OBSIDIAN_VAULT=<vault name> to choose one.`,
			);
		}
		return pages[0];
	}
	// A vault can have more than one window, and not all of them hold a
	// vault: Obsidian's Settings opens as a page target of its own, titled
	// "Settings - <vault> - Obsidian", with no `app` in it at all. Picking it
	// fails every evaluate with "app is not defined", which reads like the
	// plugin having broken. The window holding a file is preferred, and the
	// known windowless ones are refused outright.
	const candidates = pages.filter((t) => decodeTitle(t.title).includes(` - ${vault} - `));
	const isSettings = (t) => /^Settings - /.test(decodeTitle(t.title));
	const match = candidates.find((t) => !isSettings(t)) ?? candidates[0];
	if (!match) {
		throw new Error(
			`No window for vault "${vault}". Open windows:\n  ` +
				pages.map((t) => decodeTitle(t.title)).join("\n  "),
		);
	}
	return match;
}

export async function connect() {
	const targets = await (await fetch(`${ORIGIN}/json/list`)).json();
	const page = pickTarget(targets, process.env.OBSIDIAN_VAULT);

	const socket = new WebSocket(page.webSocketDebuggerUrl);
	await new Promise((resolve, reject) => {
		socket.addEventListener("open", resolve, { once: true });
		socket.addEventListener("error", () => reject(new Error("WebSocket failed")), { once: true });
	});

	let nextId = 1;
	const pending = new Map();
	socket.addEventListener("message", (event) => {
		const message = JSON.parse(event.data);
		const settle = pending.get(message.id);
		if (!settle) return;
		pending.delete(message.id);
		if (message.error) settle.reject(new Error(message.error.message));
		else settle.resolve(message.result);
	});

	const send = (method, params = {}) =>
		new Promise((resolve, reject) => {
			const id = nextId++;
			pending.set(id, { resolve, reject });
			socket.send(JSON.stringify({ id, method, params }));
		});

	/**
	 * Evaluates in the page and returns the value. Expressions are wrapped
	 * in an async IIFE so a test step can await Obsidian's own promises —
	 * opening a file, waiting for a debounce — inline.
	 */
	const evaluate = async (expression, timeoutMs = 15000) => {
		// A step that never settles must fail its own test rather than wedge
		// the run — and a render heavy enough to kill the renderer outright
		// looks exactly like a step that never settles.
		const result = await Promise.race([
			send("Runtime.evaluate", {
				expression: `(async () => { ${expression} })()`,
				returnByValue: true,
				awaitPromise: true,
			}),
			new Promise((_, reject) =>
				setTimeout(() => reject(new Error(`page did not answer in ${timeoutMs}ms`)), timeoutMs),
			),
		]);
		if (result.exceptionDetails) {
			throw new Error(result.exceptionDetails.exception?.description ?? "threw in page");
		}
		return result.result.value;
	};

	return { send, evaluate, close: () => socket.close() };
}


/**
 * A real key press, dispatched by the browser rather than synthesised in the
 * page.
 *
 * An event made with `new KeyboardEvent(...)` is `isTrusted: false`, and
 * Obsidian decides what reaches a command from a capture-phase window
 * listener with a scope stack on top of it — so a synthetic event tests the
 * listener under it rather than the path a user takes. It is the difference
 * between the two that found the rename-dialog bug: `executeCommandById`
 * reported the plugin stealing focus, while a real key showed the command
 * never running at all.
 */
/**
 * keyCode, DOM code, and the text the key produces.
 *
 * The text matters more than it looks. A key sent as `rawKeyDown` with no
 * text never reaches the focused element for Enter and Tab — the event
 * arrives at the window and stops there, so a field's own keydown handler
 * never runs and the test reports the feature broken. Enter carries a
 * carriage return and Tab a tab; the genuinely textless keys (Escape,
 * arrows, function keys) carry nothing and are dispatched as raw.
 */
const KEY_CODES = {
	Escape: [27, "Escape", ""], Enter: [13, "Enter", "\r"], Tab: [9, "Tab", "\t"],
	Backspace: [8, "Backspace", ""], Delete: [46, "Delete", ""], Space: [32, "Space", " "],
	ArrowUp: [38, "ArrowUp", ""], ArrowDown: [40, "ArrowDown", ""],
	ArrowLeft: [37, "ArrowLeft", ""], ArrowRight: [39, "ArrowRight", ""],
	Home: [36, "Home", ""], End: [35, "End", ""],
	PageUp: [33, "PageUp", ""], PageDown: [34, "PageDown", ""],
};

const MODIFIER_BITS = { alt: 1, ctrl: 2, control: 2, meta: 4, cmd: 4, shift: 8 };

/** "ctrl+shift+f2" -> the CDP payload for one press. */
export function describeKey(spec) {
	const parts = spec.split("+");
	const name = parts.pop();
	let modifiers = 0;
	for (const part of parts) {
		const bit = MODIFIER_BITS[part.toLowerCase()];
		if (!bit) throw new Error(`unknown modifier "${part}" in "${spec}"`);
		modifiers |= bit;
	}

	const fn = /^[fF](\d{1,2})$/.exec(name);
	if (fn) {
		const n = Number(fn[1]);
		if (n < 1 || n > 12) throw new Error(`no such function key "${name}"`);
		return { key: `F${n}`, code: `F${n}`, keyCode: 111 + n, modifiers, text: "" };
	}
	if (KEY_CODES[name]) {
		const [keyCode, code, text] = KEY_CODES[name];
		return { key: name === "Space" ? " " : name, code, keyCode, modifiers, text };
	}
	if (name.length === 1) {
		const upper = name.toUpperCase();
		const code = /[0-9]/.test(name) ? `Digit${name}` : `Key${upper}`;
		// A modified press produces no text: ctrl+l must not also type an "l".
		return { key: name, code, keyCode: upper.charCodeAt(0), modifiers, text: modifiers ? "" : name };
	}
	throw new Error(`don't know how to press "${name}"`);
}

/** Presses a key in a connected page. Accepts the same specs as describeKey. */
export async function pressKey(page, spec) {
	const { key, code, keyCode, modifiers, text } = describeKey(spec);
	const base = { key, code, windowsVirtualKeyCode: keyCode, nativeVirtualKeyCode: keyCode, modifiers };
	await page.send("Input.dispatchKeyEvent", {
		...base,
		type: text ? "keyDown" : "rawKeyDown",
		text,
		unmodifiedText: text,
	});
	await page.send("Input.dispatchKeyEvent", { ...base, type: "keyUp" });
}

/** Page-side sleep, for the debounced saves and Obsidian's own async repaints. */
export const PAUSE = (ms) => `await new Promise((r) => setTimeout(r, ${ms}));`;

/**
 * Empties the editor area: every pane but one, and that one holding nothing.
 *
 * Page-side source, not a function, because the suites build their setup as
 * one evaluated string and a round trip per step is what makes them slow.
 *
 * It sweeps the root split by *position* rather than by an enumerated list of
 * view types, which is what every suite here used to do — `["markdown",
 * "lure-external-file", "empty"]`, the three types the plugin knows about. Any
 * other plugin's view survived that list. A home-tab plugin is the case that
 * caught it: it answers a new tab with a view of its own, so a case that asked
 * for a blank tab got that view instead, the sweep left it standing, and every
 * later case was measured in a workspace with one more pane in it than it
 * thought. That is enough to change what the fitter does — panes share the
 * width — which is why the `long paths` family could pass alone and fail,
 * differently each time, in a full run.
 *
 * The sidebars are left alone: they are not the editor area, and a suite that
 * closed them would be testing a workspace nobody uses.
 */
/**
 * Takes down any notice still on screen.
 *
 * Obsidian's notices are toasts in the top-right corner of the window, which
 * is where the right-hand end of the header row is — so a notice one case
 * raised sits *over* the row the next case acts on, and a synthetic click
 * built from `document.elementFromPoint` lands on the toast instead of the
 * row. The case then reports that the field would not open.
 *
 * Whether it happens depends on how long the case before it took: a notice
 * lives about four seconds, so a quick case is still covered and a slow one
 * is not. That is the whole of "identical code failed differently between
 * runs" for the gesture suites — a race with a toast, not with the plugin.
 */
/**
 * Plugins that answer a new tab with a view of their own.
 *
 * A suite that opens a blank tab and then asks what is in it is asking about
 * Lure; with one of these running it is really asking about that plugin, and
 * the answer comes back as somebody's home tab. They are stood down for a run
 * and put back after it — `disablePlugin` unloads without touching the saved
 * list and `enablePlugin` loads without adding to it, so the vault's own
 * configuration is never written.
 *
 * Named rather than detected: what a plugin puts in an empty tab cannot be
 * asked of the workspace in advance. Whether it worked is checked instead.
 */
export const TAB_TAKERS = ["home-launcher", "home-tab", "obsidian-home-tab", "homepage"];

/** Stands them down, and answers with the ones that were running. */
export async function standDownTabTakers(page) {
	const running = JSON.parse(
		await page.evaluate(
			`return JSON.stringify(${JSON.stringify(TAB_TAKERS)}.filter((id) => !!app.plugins.plugins[id]));`,
		),
	);
	if (running.length) {
		await page.evaluate(`
			for (const id of ${JSON.stringify(running)}) await app.plugins.disablePlugin(id);
			${PAUSE(600)}
			return true;
		`);
	}
	return running;
}

/** Puts back whichever of them `standDownTabTakers` found. */
export async function restoreTabTakers(page, running) {
	if (!running?.length) return;
	await page.evaluate(`
		for (const id of ${JSON.stringify(running)}) {
			if (!app.plugins.plugins[id]) await app.plugins.enablePlugin(id);
		}
		${PAUSE(600)}
		return true;
	`);
}

/**
 * Puts the pointer where it cannot be hovering anything a case measures.
 *
 * It is a real pointer and it stays where the last case left it, so whatever
 * it rests on is *hovered*: a name on the row is then held open at its full
 * width — which this plugin does on purpose — and a row of the dropdown is
 * highlighted, which decides what Tab offers. Either one turns a case that
 * passes alone into one that fails in a run.
 *
 * The far right edge, halfway down: the row and its names are along the top,
 * and the popover is left-aligned to the field and nothing like the width of
 * the window. A screen corner is avoided deliberately — on many desktops it is
 * a hot corner, and driving the pointer into one takes the window out of
 * compositing, which is worse than what it fixes.
 */
export async function parkPointer(page) {
	const size = JSON.parse(
		await page.evaluate(`return JSON.stringify([window.innerWidth, window.innerHeight]);`),
	);
	await page.send("Input.dispatchMouseEvent", {
		type: "mouseMoved",
		x: Math.max(0, size[0] - 8),
		y: Math.round(size[1] / 2),
		buttons: 0,
	});
}

export const CLEAR_NOTICES = `document.querySelectorAll(".notice").forEach((n) => n.remove());`;

export const CLEAR_PANES = `
	{
		const editors = [];
		app.workspace.iterateAllLeaves((leaf) => {
			if (leaf.getRoot() === app.workspace.rootSplit) editors.push(leaf);
		});
		// All but the first: detaching every one of them leaves no tab group
		// to open the next file in, and Obsidian throws "No tab group found".
		for (const leaf of editors.slice(1)) leaf.detach();
		const kept = editors[0];
		// Emptied rather than closed, so what is left is a pane holding
		// nothing — which is what the sweep is for. A home-tab plugin may
		// answer this with a view of its own; that is its business, and the
		// caller opens whatever it needs in this leaf next.
		if (kept) await kept.setViewState({ type: "empty" });
	}
`;

/**
 * Re-reads main.js from disk before a run.
 *
 * Obsidian loads a plugin's bundle once, at enable time, and holds it. Edit
 * the source, rebuild, run the suite against the window that was already
 * open, and every assertion is made against the code Obsidian booted with —
 * so a suite can report a feature working that is not in the build, or a bug
 * fixed that is not fixed. It was found the only way it can be: by breaking a
 * feature deliberately and watching its own regression test still pass.
 *
 * A disable/enable cycle is what makes the run mean what it says. It costs
 * about a second, which is nothing next to a green run that proves nothing.
 */
export async function reloadPlugin(page, id = "lure") {
	await page.evaluate(`
		await app.plugins.disablePlugin(${JSON.stringify(id)});
		await new Promise((r) => setTimeout(r, 200));
		await app.plugins.enablePlugin(${JSON.stringify(id)});
		await new Promise((r) => setTimeout(r, 400));
		return true;
	`);
}

/**
 * Writes the plugin settings a suite's cases depend on, and saves them.
 *
 * A setting a case needs is a fixture that happens not to be a file, and it
 * belongs in `reset` with the rest of them. Read rather than set, it passes
 * against a vault some earlier run left switched on and fails against a clean
 * one — so tidying up breaks the tests, which is backwards, and the failure
 * reads as the feature being broken rather than the fixture being absent.
 *
 * Found twice: `test-urls.mjs` borrowed `accessExternalFiles`, and putting it
 * back in that suite's teardown is what exposed `test-gestures.mjs` borrowing
 * the same one. Hence one helper rather than the block copied per suite —
 * the next suite to need a setting should not have to rediscover why.
 *
 * Call it after `reloadPlugin`, never before: a disable/enable cycle reloads
 * the settings from disk and would throw the patch away.
 */
export async function setSettings(page, patch, id = "lure") {
	await page.evaluate(`
		const plugin = app.plugins.plugins[${JSON.stringify(id)}];
		Object.assign(plugin.settings, ${JSON.stringify(patch)});
		await plugin.saveSettings();
		return true;
	`);
}

/**
 * Puts the window back into a state a case can start from.
 *
 * Everything here is something a previous case was seen to leave behind: an
 * open path input (whose handlers correctly make the next gesture bail), a
 * context menu or a suggestion popover still in the DOM (which swallows the
 * next click), a modal holding a keymap scope (which swallows the next key),
 * and panes accumulated by cases that split or opened files. Each one
 * produced a failure that vanished when the case was run on its own.
 *
 * Called from a suite's reset rather than from its teardown on purpose: a
 * case cannot rely on the one before it having tidied up, only on the runner
 * having done so before it started.
 */
export async function quiesce(page, { leaveTypes = ["markdown", "lure-external-file", "empty"] } = {}) {
	await page.evaluate(`
		const input = document.querySelector(".lure-path-input");
		if (input) { input.blur(); }
		// A drag that was started and never finished. The suites drive the
		// drag manager directly — a real pointer drag cannot be driven through
		// CDP at all — so nothing dispatches the dragend that would normally
		// tidy up, and the payload, the ghost and the "a drop would land here"
		// highlight all survive into the next case.
		if (app.dragManager) {
			try { app.dragManager.onDragEnd(new DragEvent("dragend")); } catch (e) { /* shape moved */ }
			app.dragManager.draggable = null;
		}
		document.querySelectorAll(".is-being-dragged-over, .drag-ghost").forEach((el) => {
			el.classList.remove("is-being-dragged-over");
			if (el.classList.contains("drag-ghost")) el.remove();
		});
		document.querySelectorAll(".menu, .suggestion-container, .tooltip").forEach((el) => el.remove());
		// A modal is closed rather than removed: it owns a keymap scope that
		// stays pushed if its element is merely taken out of the document.
		app.workspace.containerEl.doc.querySelectorAll(".modal-container").forEach((el) => {
			const close = el.querySelector(".modal-close-button");
			if (close) close.click(); else el.remove();
		});
		for (const type of ${JSON.stringify(leaveTypes)}) {
			app.workspace.getLeavesOfType(type).forEach((l) => l.detach());
		}
		await new Promise((r) => setTimeout(r, 150));
		return true;
	`);
}

/**
 * Whether this window can actually put the caret in an editable element.
 *
 * The question every focus-dependent suite really wants answered, asked by
 * trying it rather than by reading a flag. `workspace:edit-file-title` is the
 * cheapest trial available: it reports success either way, so what is checked
 * is whether the inline title ends up holding the caret.
 *
 * It replaced a check on Obsidian's own `is-focused` body class, which was a
 * correlate rather than the cause and wrong in both directions. A window
 * behind a fullscreen application fails this while reporting
 * `document.hasFocus()` true, `visibilityState` "visible" and 61 frames a
 * second — and a window that is merely *not frontmost*, which is the normal
 * state while a suite is driven from a terminal, passes it with `is-focused`
 * false. Refusing on the flag would have refused to run in exactly the
 * conditions the suite is meant for.
 *
 * `notePath` must be a note this vault holds; it is opened, tried on, and
 * left open.
 */
/**
 * Writes Obsidian's own vault config, and hands back what was there before.
 *
 * The sibling of `setSettings`, one level down: these are the app's settings
 * rather than the plugin's, and a case can depend on them just as silently.
 *
 * `alwaysUpdateLinks` is the one that matters here. With it off — which is
 * the default — renaming anything another note links to raises Obsidian's
 * "Update links" dialog, and `fileManager.renameFile` does not settle until
 * somebody answers it. A suite that renames a linked file and does not await
 * the result leaves that dialog standing; every later rename in the window
 * queues behind it and none of them ever finish. That is the whole mechanism
 * behind runs that decay the longer a window has been up, and it survives a
 * plugin reload, so it looked like the plugin rotting rather than a question
 * nobody answered.
 *
 * Restore what you were given, in teardown, the way `setSettings` is put back.
 */
export async function setVaultConfig(page, patch) {
	return JSON.parse(
		await page.evaluate(`
			const patch = ${JSON.stringify(patch)};
			const before = {};
			for (const [key, value] of Object.entries(patch)) {
				before[key] = app.vault.getConfig(key);
				app.vault.setConfig(key, value);
			}
			return JSON.stringify(before);
		`),
	);
}

/**
 * Whether `fileManager.renameFile` still settles in this window.
 *
 * It can stop settling altogether. The promise neither resolves nor rejects,
 * nothing reaches the disk, and every other API keeps working — the metadata
 * cache reports itself initialised, the vault lists its files, the row draws.
 * Seen after an instance had been signalled shut and restarted twice in a
 * session; a clean restart cured it, and nothing in the plugin was involved.
 *
 * What it costs to leave undetected: every suite that writes then fails on a
 * timeout, and the failures read as a broken feature. One case hung for
 * fifteen seconds and the next reported the rename simply not happening,
 * which is a very convincing bug report about code that is fine.
 *
 * Unlike the geometric precondition the `long paths` cases need, this one is
 * cheap and decisive — one rename, in a folder of its own, put straight back
 * — so it belongs in front of the suites rather than in a note about them.
 */
export async function canRenameFiles(page, at = "LureRenameProbe") {
	return await page.evaluate(`
		const root = ${JSON.stringify(at)};
		const existing = app.vault.getAbstractFileByPath(root);
		if (existing) await app.vault.adapter.rmdir(root, true);
		await new Promise((r) => setTimeout(r, 200));
		await app.vault.createFolder(root);
		await app.vault.create(root + "/before.md", "# probe");
		await new Promise((r) => setTimeout(r, 300));
		const file = app.vault.getAbstractFileByPath(root + "/before.md");
		// Raced against a deadline rather than awaited: the failure being
		// looked for is a promise that never settles, so awaiting it here
		// would hang the very check meant to report it.
		const settled = await Promise.race([
			app.fileManager.renameFile(file, root + "/after.md").then(() => true, () => false),
			new Promise((r) => setTimeout(() => r(false), 4000)),
		]);
		const moved = !!app.vault.getAbstractFileByPath(root + "/after.md");
		const back = app.vault.getAbstractFileByPath(root);
		if (back) await app.vault.adapter.rmdir(root, true);
		return settled && moved;
	`);
}

/**
 * Whether this window is actually compositing frames.
 *
 * Every geometry assertion in the suites rests on the row having refitted,
 * and the refit runs from a `ResizeObserver` — which, like
 * `requestAnimationFrame`, is delivered in the rendering steps. A window that
 * Chromium has stopped painting delivers neither, so the divider moves, the
 * box really does get narrower, and the row keeps the previous width's
 * layout. Every measurement then describes a row that was never fitted, and
 * the failures it produces are detailed, plausible and entirely fictional.
 *
 * The existing gates cannot see this. `document.visibilityState` reads
 * "visible", `document.hidden` is false and `document.hasFocus()` is true in
 * exactly this state — measured. Counting frames is the only question that
 * answers it: no frames in half a second means nothing measured here is worth
 * reporting.
 */
export async function isPainting(page) {
	const frames = await page.evaluate(`
		let frames = 0;
		const tick = () => { frames++; requestAnimationFrame(tick); };
		requestAnimationFrame(tick);
		await new Promise((r) => setTimeout(r, 500));
		return frames;
	`);
	return Number(frames) > 0;
}

export async function canFocusEditable(page, notePath) {
	return await page.evaluate(`
		const file = app.vault.getAbstractFileByPath(${JSON.stringify(notePath)});
		if (!file) return false;
		await app.workspace.getLeaf(false).openFile(file);
		await new Promise((r) => setTimeout(r, 700));
		document.body.click();
		await new Promise((r) => setTimeout(r, 200));
		app.commands.executeCommandById("workspace:edit-file-title");
		await new Promise((r) => setTimeout(r, 700));
		// Either target counts. The question is whether this window can give
		// the caret to an editable element at all — and with the plugin
		// loaded the same command legitimately answers with its own path bar
		// instead of the inline title, depending on where the alternation
		// stands. Asking for the title specifically made the trial fail in a
		// window where everything worked.
		const el = document.activeElement;
		const took = !!el && (
			el.classList?.contains("inline-title") ||
			el.classList?.contains("lure-path-input") ||
			el.isContentEditable ||
			el.tagName === "INPUT"
		);
		// Put it back: the trial leaves the title in rename mode otherwise,
		// and the first case would start from a state it did not create.
		document.activeElement?.blur?.();
		document.body.click();
		await new Promise((r) => setTimeout(r, 200));
		return took;
	`);
}
