#!/usr/bin/env node
/**
 * Reports which documented Obsidian APIs this plugin uses that are newer
 * than the manifest's `minAppVersion`.
 *
 * The submission review enforces the floor against the `@since` tags in
 * `obsidian.d.ts`, and the floor is the *maximum* across every API touched —
 * so a single convenience call can raise it for the whole plugin without
 * anyone deciding to. Raising it is a user-visible cost, so it should be a
 * decision rather than an accident, and lowering it is only safe once
 * nothing needs the newer call.
 *
 * This is a *report*, not a verdict. It matches by member name, which has no
 * type information behind it: `.name` or `.path` will match things that have
 * nothing to do with the API that carries the tag. Read the hits, do not
 * count them. Undocumented internals (src/types/obsidian-internal.d.ts) carry
 * no `@since` at all and are invisible here — they are a separate risk, and
 * the reason every one of them is guarded at its call site.
 *
 *   npm run check:minver
 */

import { readFileSync, readdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

// fileURLToPath, not `.pathname`: this repository's own directory has a
// space in it, and an undecoded %20 makes every path here miss.
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(readFileSync(join(root, "manifest.json"), "utf8"));
const dts = readFileSync(join(root, "node_modules/obsidian/obsidian.d.ts"), "utf8");

/** Every .ts file under src/, concatenated — what the plugin actually says. */
function sources() {
	const out = [];
	const walk = (dir) => {
		for (const entry of readdirSync(dir, { withFileTypes: true })) {
			const path = join(dir, entry.name);
			if (entry.isDirectory()) walk(path);
			else if (entry.name.endsWith(".ts")) out.push(readFileSync(path, "utf8"));
		}
	};
	walk(join(root, "src"));
	return out.join("\n");
}

const src = sources();

const cmp = (a, b) => {
	const pa = a.split(".").map(Number);
	const pb = b.split(".").map(Number);
	for (let i = 0; i < 3; i++) if ((pa[i] ?? 0) !== (pb[i] ?? 0)) return (pa[i] ?? 0) - (pb[i] ?? 0);
	return 0;
};

/**
 * Parses obsidian.d.ts into tagged declarations, keeping track of which type
 * each one belongs to.
 *
 * The owner is what makes this usable. Matching `@since` tags by bare member
 * name reports `name`, `length` and `get` — every one a false hit — because a
 * name on its own carries no type. Tying a member to the class or interface
 * that declares it lets the report ask a much narrower question: does this
 * plugin touch that type at all?
 */
function parseTags() {
	const top = new Map();
	const members = [];
	const lines = dts.split("\n");
	let depth = 0;
	let owner = null;
	let pending = null;

	for (const raw of lines) {
		const line = raw.trim();
		const since = /@since\s+([0-9]+\.[0-9]+\.[0-9]+)/.exec(line);
		if (since) pending = since[1];
		else if (line && !line.startsWith("*") && !line.startsWith("/*") && !line.startsWith("//")) {
			const decl = /^(?:export\s+)?(?:declare\s+)?(?:abstract\s+)?(?:class|interface)\s+([A-Za-z_$][\w$]*)/.exec(line);
			if (depth === 0 && decl) owner = decl[1];

			if (pending) {
				const member = /^(?:readonly\s+|static\s+|abstract\s+|get\s+|set\s+)*([A-Za-z_$][\w$]*)\s*[<(?:;]/.exec(line);
				const exported = /^export\s+(?:declare\s+)?(?:abstract\s+)?(?:class|interface|function|const|type|enum)\s+([A-Za-z_$][\w$]*)/.exec(line);
				if (depth === 0 && exported) top.set(exported[1], pending);
				else if (depth > 0 && owner && member) members.push({ owner, member: member[1], version: pending });
				pending = null;
			}
		}
		depth += (raw.match(/{/g) ?? []).length - (raw.match(/}/g) ?? []).length;
		if (depth <= 0) { depth = 0; owner = null; }
	}
	return { top, members };
}

/** Symbols this plugin imports from "obsidian", exactly as written. */
function importedSymbols() {
	const names = new Set();
	for (const m of src.matchAll(/import\s+(?:type\s+)?{([^}]+)}\s+from\s+"obsidian"/g)) {
		for (const part of m[1].split(",")) {
			const name = part.trim().replace(/^type\s+/, "").split(/\s+as\s+/)[0].trim();
			if (name) names.add(name);
		}
	}
	return names;
}

/**
 * Root objects reached through `app` rather than by importing them. Their
 * members are as much a part of the surface as an imported class's.
 */
const ROOTS = new Set([
	"App", "Vault", "Workspace", "WorkspaceLeaf", "MetadataCache", "FileManager",
	"Menu", "MenuItem", "Scope", "Keymap", "ViewRegistry", "DataAdapter",
	"FileSystemAdapter", "Plugin", "Component", "Setting", "PluginSettingTab",
]);

const { top, members } = parseTags();
const imported = importedSymbols();
const floor = manifest.minAppVersion;
const hits = [];

for (const [name, version] of top) {
	if (cmp(version, floor) > 0 && imported.has(name)) hits.push({ what: name, version });
}
for (const { owner, member, version } of members) {
	if (cmp(version, floor) <= 0) continue;
	if (!imported.has(owner) && !ROOTS.has(owner)) continue;
	if (!new RegExp(`\\.${member}\\b`).test(src)) continue;
	const what = `${owner}.${member}`;
	if (!hits.some((h) => h.what === what)) hits.push({ what, version });
}
hits.sort((a, b) => cmp(b.version, a.version) || a.what.localeCompare(b.what));

console.log(`manifest minAppVersion: ${floor}`);
console.log(`obsidian.d.ts version:  ${JSON.parse(readFileSync(join(root, "node_modules/obsidian/package.json"), "utf8")).version}`);
if (!hits.length) {
	console.log(`\nNo documented API newer than ${floor} appears in src/.`);
	process.exit(0);
}
console.log(`\n${hits.length} newer than the floor, on a type this plugin touches:\n`);
for (const { what, version } of hits) console.log(`  ${version.padEnd(8)} ${what}`);
console.log(`\nMatched by owner and member name, without type information — a hit is a\nquestion, not a finding. Undocumented internals carry no @since and are\ninvisible here; that is what their call-site guards are for.`);
