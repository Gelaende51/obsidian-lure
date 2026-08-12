#!/usr/bin/env node
/**
 * Talks to a running Obsidian over the Chrome DevTools Protocol.
 *
 * Obsidian is Electron, so its renderer is a Chromium page: with
 * `--remote-debugging-port=9222` in ~/.config/obsidian/user-flags.conf it
 * exposes the same protocol DevTools itself uses. That makes the live DOM,
 * computed styles and console readable from a script — no screenshots, no
 * asking someone to paste an element in.
 *
 * No dependencies: the target list is plain HTTP, and Node 22 ships a
 * global WebSocket.
 *
 *   node .dev/cdp.mjs eval  "document.querySelectorAll('.lure-vault-segment').length"
 *   node .dev/cdp.mjs html  ".view-header-title-container"
 *   node .dev/cdp.mjs style ".lure-glyph-icon" stroke-width font-size
 *   node .dev/cdp.mjs shot  /tmp/obsidian.png
 *
 * `eval` runs in the renderer's main world, so `app` — Obsidian's own API
 * object — is in scope: `app.workspace.getActiveFile().path` works.
 *
 * Debug tool, not part of the plugin: nothing here is bundled into main.js,
 * and the port should be commented back out when a session is over.
 */

const PORT = process.env.OBSIDIAN_CDP_PORT ?? 9222;
const ORIGIN = `http://127.0.0.1:${PORT}`;

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

/** The main window, as opposed to devtools pages or service workers. */
async function findTarget() {
	let targets;
	try {
		targets = await (await fetch(`${ORIGIN}/json/list`)).json();
	} catch (err) {
		throw new Error(
			`No CDP endpoint on ${ORIGIN}. Is Obsidian running, and was it started ` +
				`after --remote-debugging-port was added to user-flags.conf?`,
		);
	}
	// One page target per open vault, in no stable order. Guessing means
	// inspecting the wrong window and believing the answer, so with more
	// than one open the vault has to be named. Titles read
	// "<file> - <vault> - Obsidian".
	const pages = targets.filter((t) => t.type === "page" && !t.url.startsWith("devtools://"));
	if (!pages.length) throw new Error("No page target — is a vault open?");
	const vault = process.env.OBSIDIAN_VAULT;
	if (!vault) {
		if (pages.length === 1) return pages[0];
		throw new Error(
			`${pages.length} Obsidian windows are open, so the target is ambiguous.\n  ` +
				pages.map((t) => decodeTitle(t.title)).join("\n  ") +
				"\nSet OBSIDIAN_VAULT=<vault name> to choose one.",
		);
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

async function send(method, params = {}) {
	const target = await findTarget();
	const socket = new WebSocket(target.webSocketDebuggerUrl);
	return new Promise((resolve, reject) => {
		socket.addEventListener("error", () => reject(new Error("WebSocket failed")));
		socket.addEventListener("open", () => socket.send(JSON.stringify({ id: 1, method, params })));
		socket.addEventListener("message", (event) => {
			const message = JSON.parse(event.data);
			if (message.id !== 1) return;
			socket.close();
			if (message.error) reject(new Error(message.error.message));
			else resolve(message.result);
		});
	});
}

/**
 * Evaluates in the page. awaitPromise lets an expression return a promise,
 * and returnByValue serialises the result instead of handing back a remote
 * object reference that would need a second round trip.
 */
async function evaluate(expression) {
	const result = await send("Runtime.evaluate", {
		expression,
		returnByValue: true,
		awaitPromise: true,
	});
	if (result.exceptionDetails) {
		throw new Error(result.exceptionDetails.exception?.description ?? "threw");
	}
	return result.result.value;
}

const [command, ...args] = process.argv.slice(2);

const commands = {
	eval: () => evaluate(args.join(" ")),

	html: () =>
		evaluate(`(() => {
			const el = document.querySelector(${JSON.stringify(args[0])});
			return el ? el.outerHTML : null;
		})()`),

	// Computed styles, which is what most layout questions actually turn on
	// — the cascade's answer, rather than the rule you assume won it.
	style: () =>
		evaluate(`(() => {
			const el = document.querySelector(${JSON.stringify(args[0])});
			if (!el) return null;
			const style = getComputedStyle(el);
			const props = ${JSON.stringify(args.slice(1))};
			const keys = props.length ? props : Array.from(style);
			return Object.fromEntries(keys.map((k) => [k, style.getPropertyValue(k)]));
		})()`),

	shot: async () => {
		const { data } = await send("Page.captureScreenshot", { format: "png" });
		const { writeFileSync } = await import("fs");
		const path = args[0] ?? "/tmp/obsidian.png";
		writeFileSync(path, Buffer.from(data, "base64"));
		return `wrote ${path}`;
	},

	targets: async () =>
		(await (await fetch(`${ORIGIN}/json/list`)).json()).map((t) => `${t.type}  ${t.title}`),
};

if (!commands[command]) {
	console.error(`usage: node .dev/cdp.mjs <${Object.keys(commands).join("|")}> [args]`);
	process.exit(2);
}

try {
	const value = await commands[command]();
	console.log(typeof value === "string" ? value : JSON.stringify(value, null, 2));
} catch (err) {
	console.error(err.message);
	process.exit(1);
}
