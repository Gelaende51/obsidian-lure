#!/usr/bin/env node
/**
 * The versions Lure is tested against that can change without a commit here:
 * Obsidian's latest release and the latest release of every plugin the suites
 * install (the `-p id:` list in .dev/ci-run.sh, so there is one list).
 *
 *   node scripts/upstream-versions.mjs          # print them as JSON
 *   node scripts/upstream-versions.mjs --diff   # against .github/upstream-versions.json
 *
 * The Watch workflow runs it daily and runs the suites when anything moved.
 * GITHUB_TOKEN, when set, lifts the API's rate limit.
 */
import { readFileSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const RAW = "https://raw.githubusercontent.com/obsidianmd/obsidian-releases/HEAD";
const headers = { accept: "application/vnd.github+json", "user-agent": "lure-upstream-watch" };
if (process.env.GITHUB_TOKEN) headers.authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
const json = async (url) => {
	const res = await fetch(url, { headers });
	if (!res.ok) throw new Error(`${res.status} ${url}`);
	return res.json();
};

const ids = [...readFileSync(join(root, ".dev/ci-run.sh"), "utf8").matchAll(/-p id:([\w-]+)/g)].map((m) => m[1]);
const [desktop, plugins] = await Promise.all([json(`${RAW}/desktop-releases.json`), json(`${RAW}/community-plugins.json`)]);
const repoOf = Object.fromEntries(plugins.map((p) => [p.id, p.repo]));

const now = { obsidian: desktop.latestVersion, plugins: {} };
for (const id of ids.sort()) {
	const repo = repoOf[id];
	if (!repo) { now.plugins[id] = "not in the directory"; continue; }
	// The version installers read: the manifest on the repo's default branch,
	// which is also what obsidian-launcher resolves "latest" to.
	try {
		now.plugins[id] = (await json(`https://raw.githubusercontent.com/${repo}/HEAD/manifest.json`)).version;
	} catch (err) {
		now.plugins[id] = `unreadable (${err.message.split(" ")[0]})`;
	}
}

if (!process.argv.includes("--diff")) {
	console.log(JSON.stringify(now, null, "\t"));
	process.exit(0);
}
let before = { obsidian: null, plugins: {} };
try { before = JSON.parse(readFileSync(join(root, ".github/upstream-versions.json"), "utf8")); } catch {}
const changes = [];
if (before.obsidian !== now.obsidian) changes.push(`Obsidian ${before.obsidian ?? "—"} → ${now.obsidian}`);
for (const [id, v] of Object.entries(now.plugins)) if (before.plugins?.[id] !== v) changes.push(`${id} ${before.plugins?.[id] ?? "—"} → ${v}`);
// For the workflow: whether to test, what changed, and the new state.
console.log(JSON.stringify({ changed: changes.length > 0, changes, now }));
