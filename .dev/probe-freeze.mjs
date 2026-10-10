#!/usr/bin/env node
/**
 * Where a page that stopped answering is spending its time.
 *
 * test-compat-ui found Obsidian's page going silent once Iconic loaded after
 * Lure: every later step timed out. A page in a loop cannot evaluate
 * anything, but the debugger can still stop it — so this turns the peer on
 * the way that case does, and if the page goes quiet, pauses it a few times
 * and prints the stack each pause lands in.
 *
 *   PEER=iconic node .dev/probe-freeze.mjs     (Obsidian on the debugging port)
 *
 * Run on CI as a "suite": EXTRA_PLUGINS=iconic .dev/ci-run.sh probe-freeze
 */
const PORT = process.env.OBSIDIAN_CDP_PORT ?? "9222";
const PEER = process.env.PEER ?? process.env.EXTRA_PLUGINS?.split(/\s+/)[0] ?? "iconic";

const targets = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
const target = targets.find((t) => t.type === "page" && t.url.startsWith("app://")) ?? targets.find((t) => t.type === "page");
const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve) => socket.addEventListener("open", resolve, { once: true }));

let nextId = 1;
const pending = new Map();
const listeners = [];
socket.addEventListener("message", (event) => {
	const message = JSON.parse(event.data);
	if (message.id && pending.has(message.id)) {
		pending.get(message.id)(message);
		pending.delete(message.id);
	} else if (message.method) {
		for (const listen of listeners) listen(message);
	}
});
const send = (method, params = {}, timeout = 15000) =>
	new Promise((resolve) => {
		const id = nextId++;
		pending.set(id, resolve);
		socket.send(JSON.stringify({ id, method, params }));
		setTimeout(() => {
			if (pending.delete(id)) resolve({ timedOut: true });
		}, timeout);
	});
const evaluate = (expression, timeout) =>
	send("Runtime.evaluate", { expression: `(async () => { ${expression} })()`, awaitPromise: true, returnByValue: true }, timeout);

console.log(`peer: ${PEER}`);
const ready = await evaluate(`
	const md = app.vault.getMarkdownFiles()[0];
	await app.workspace.getLeaf(false).openFile(md);
	await new Promise((r) => setTimeout(r, 800));
	return JSON.stringify({ lure: !!app.plugins.plugins.lure, peer: !!app.manifests?.[${JSON.stringify(PEER)}] || !!app.plugins.manifests[${JSON.stringify(PEER)}], file: md.path });
`);
console.log("before:", ready.result?.result?.value ?? ready);

// Not awaited past its own deadline: this is the step that froze the suite.
const turnOn = await evaluate(`
	await app.plugins.enablePlugin(${JSON.stringify(PEER)});
	await new Promise((r) => setTimeout(r, 1500));
	return "answered";
`, 12000);
const alive = await evaluate(`return document.querySelectorAll(".lure-filename").length;`, 5000);
console.log("turning it on:", turnOn.timedOut ? "no answer in 12 s" : turnOn.result?.result?.value);
console.log("afterwards:", alive.timedOut ? "no answer in 5 s — the page is stuck" : `answers (${alive.result?.result?.value} Lure rows)`);

if (turnOn.timedOut || alive.timedOut) {
	await send("Debugger.enable", {}, 10000);
	const short = (url) => (url || "?").split("/").pop();
	for (let sample = 1; sample <= 6; sample++) {
		const paused = new Promise((resolve) => {
			const listen = (message) => {
				if (message.method !== "Debugger.paused") return;
				listeners.splice(listeners.indexOf(listen), 1);
				resolve(message.params);
			};
			listeners.push(listen);
		});
		await send("Debugger.pause", {}, 5000);
		const params = await Promise.race([paused, new Promise((r) => setTimeout(() => r(null), 5000))]);
		console.log(`\n--- sample ${sample}`);
		if (!params) {
			console.log("did not pause");
			continue;
		}
		for (const frame of params.callFrames.slice(0, 14)) {
			console.log(`  ${frame.functionName || "(anonymous)"}  ${short(frame.url)}:${frame.location.lineNumber + 1}:${frame.location.columnNumber + 1}`);
		}
		await send("Debugger.resume", {}, 5000);
		await new Promise((r) => setTimeout(r, 700));
	}
}
socket.close();
process.exit(0);
