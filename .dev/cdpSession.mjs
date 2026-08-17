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
	const match = pages.find((t) => decodeTitle(t.title).includes(` - ${vault} - `));
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
