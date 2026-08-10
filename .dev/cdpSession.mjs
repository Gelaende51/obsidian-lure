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
function pickTarget(targets, vault) {
	const pages = targets.filter((t) => t.type === "page" && !t.url.startsWith("devtools://"));
	if (!pages.length) throw new Error("No page target — is a vault open?");
	if (!vault) {
		if (pages.length > 1) {
			const names = pages.map((t) => t.title).join("\n  ");
			throw new Error(
				`${pages.length} Obsidian windows are open, so the target is ambiguous.\n` +
					`  ${names}\nSet OBSIDIAN_VAULT=<vault name> to choose one.`,
			);
		}
		return pages[0];
	}
	const match = pages.find((t) => t.title.includes(` - ${vault} - `));
	if (!match) {
		throw new Error(
			`No window for vault "${vault}". Open windows:\n  ` +
				pages.map((t) => t.title).join("\n  "),
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

/** Page-side sleep, for the debounced saves and Obsidian's own async repaints. */
export const PAUSE = (ms) => `await new Promise((r) => setTimeout(r, ${ms}));`;
