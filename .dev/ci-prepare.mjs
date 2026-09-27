/**
 * Brings a freshly launched sandboxed Obsidian into the state the suites were
 * written against, before any suite runs (.dev/ci-run.sh calls it).
 *
 * - obsidian-launcher enables every plugin it installs. The peers belong off:
 *   the demo vault keeps them installed and disabled, and test-compat turns
 *   each on for its own cases. Left on together, Quick Explorer answered the
 *   folder clicks the path bar is being tested on.
 * - Obsidian opens a first window at 1024×800. The layout cases measure how
 *   the row fits, and were written on a desktop-sized window.
 */
import { connect } from "./cdpSession.mjs";

const KEEP = ["lure", "home-launcher"];
const WIDTH = 1600, HEIGHT = 1000;

const page = await connect();
const state = JSON.parse(await page.evaluate(`
	for (const id of [...app.plugins.enabledPlugins]) {
		if (!${JSON.stringify(KEEP)}.includes(id)) await app.plugins.disablePluginAndSave(id);
	}
	let resized = false;
	try {
		if (typeof electronWindow !== "undefined" && electronWindow.setSize) {
			electronWindow.setSize(${WIDTH}, ${HEIGHT});
			resized = true;
		}
	} catch {}
	await new Promise((r) => setTimeout(r, 500));
	return JSON.stringify({ enabled: [...app.plugins.enabledPlugins], resized, inner: [innerWidth, innerHeight] });
`));

// Without Obsidian's own handle on the window, the browser end of the
// DevTools protocol can resize it.
if (state.inner[0] < WIDTH - 50) {
	const origin = `http://127.0.0.1:${process.env.OBSIDIAN_CDP_PORT ?? 9222}`;
	const { webSocketDebuggerUrl } = await (await fetch(`${origin}/json/version`)).json();
	const target = (await (await fetch(`${origin}/json/list`)).json()).find((t) => t.type === "page");
	const ws = new WebSocket(webSocketDebuggerUrl);
	await new Promise((r) => ws.addEventListener("open", r, { once: true }));
	let id = 1;
	const call = (method, params) => new Promise((resolve) => {
		const me = id++;
		const on = (e) => { const m = JSON.parse(e.data); if (m.id === me) { ws.removeEventListener("message", on); resolve(m.result ?? m.error); } };
		ws.addEventListener("message", on);
		ws.send(JSON.stringify({ id: me, method, params }));
	});
	const win = await call("Browser.getWindowForTarget", { targetId: target.id });
	if (win?.windowId) await call("Browser.setWindowBounds", { windowId: win.windowId, bounds: { width: WIDTH, height: HEIGHT, windowState: "normal" } });
	ws.close();
	await new Promise((r) => setTimeout(r, 500));
	state.inner = JSON.parse(await page.evaluate(`return JSON.stringify([innerWidth, innerHeight]);`));
	state.resized = state.inner[0] >= WIDTH - 50 ? "via DevTools" : false;
}

console.log(`prepared: plugins on ${state.enabled.join(", ")}; window ${state.inner.join("×")} (resized: ${state.resized})`);
page.close();
