#!/usr/bin/env node
/**
 * The mechanical half of a release: what used to be done by hand before the
 * tag, now run by the Release workflow (and runnable here to look first).
 *
 *   node scripts/release.mjs 1.5.2 --check   # is everything ready? writes nothing
 *   node scripts/release.mjs 1.5.2           # write it
 *
 * - The English changelog's `## Unreleased` becomes `## 1.5.2 — <date>[^1.5.2]`,
 *   with a compare-link footnote above the previous release's.
 * - Every translated changelog's pending section — its first `## ` heading
 *   that is not a version, the translated "Unreleased" — becomes the same
 *   heading, and gets its own footnote, both derived from that file's previous
 *   release so its wording and digits are its own. A translation without a
 *   pending section has not been translated yet: the release stops.
 * - manifest.json and package.json take the version; versions.json gains it,
 *   at the manifest's minAppVersion.
 *
 * Not here, because they cannot run on a runner: translating the entries and
 * refreshing the AI-usage figures (both need this machine — see .dev/release.sh).
 */
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const [version] = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const check = process.argv.includes("--check");
const dateAt = process.argv.indexOf("--date");
const date = dateAt === -1 ? new Date().toISOString().slice(0, 10) : process.argv[dateAt + 1];
const REPO = "https://github.com/Gelaende51/obsidian-lure";

const fail = (msg) => { console.error(msg); process.exit(1); };
if (!/^\d+\.\d+\.\d+$/.test(version ?? "")) fail("usage: release.mjs <x.y.z> [--check] [--date YYYY-MM-DD]");

const read = (p) => readFileSync(join(root, p), "utf8");
const manifest = JSON.parse(read("manifest.json"));
const newer = (a, b) => { const x = a.split(".").map(Number), y = b.split(".").map(Number); for (let i = 0; i < 3; i++) if (x[i] !== y[i]) return x[i] > y[i]; return false; };
if (!newer(version, manifest.version)) fail(`${version} is not newer than manifest.json's ${manifest.version}`);
const prev = manifest.version;

const VERSION_HEADING = /^## \d+\.\d+\.\d+ — /;
const problems = [];
const writes = [];

/** Turns a changelog's pending section into `version`'s. */
function release(path, isEnglish) {
	const lines = read(path).split("\n");
	const heads = lines.map((l, i) => [l, i]).filter(([l]) => l.startsWith("## "));
	const pending = heads[0];
	if (!pending || VERSION_HEADING.test(pending[0])) {
		problems.push(`${path}: no pending section — ${isEnglish ? "nothing under ## Unreleased" : "the Unreleased entries are not translated yet"}`);
		return;
	}
	if (isEnglish && pending[0] !== "## Unreleased") problems.push(`${path}: the first heading is "${pending[0]}", not "## Unreleased"`);
	const before = heads.find(([l]) => l.includes(`[^${prev}]`));
	const footAt = lines.findIndex((l) => l.startsWith(`[^${prev}]:`));
	if (!before || footAt === -1) { problems.push(`${path}: no heading or footnote for ${prev} to derive from`); return; }
	const body = lines.slice(pending[1] + 1, before[1]).join("\n");
	if (!/^- /m.test(body)) problems.push(`${path}: the pending section has no entries`);

	// The previous release's own lines, with its versions and date moved on.
	const heading = before[0].split(prev).join(version).replace(/\d{4}-\d{2}-\d{2}/, date);
	const older = lines[footAt].match(/compare\/([\d.]+)\.\.\./)?.[1];
	let foot = lines[footAt].split(prev).join("\u0000");
	if (older) foot = foot.split(older).join(prev);
	foot = foot.split("\u0000").join(version).replace(/<[^>]+>/, `<${REPO}/compare/${prev}...${version}>`);
	lines[pending[1]] = heading;
	lines.splice(footAt, 0, foot);
	writes.push([path, lines.join("\n")]);
}

release("CHANGELOG.md", true);
for (const f of readdirSync(join(root, "docs/i18n")).filter((f) => /^CHANGELOG\..+\.md$/.test(f)).sort()) release(`docs/i18n/${f}`, false);

if (problems.length) fail(`Not ready for ${version}:\n  ${problems.join("\n  ")}`);

const pkg = JSON.parse(read("package.json"));
const versions = JSON.parse(read("versions.json"));
manifest.version = version;
pkg.version = version;
versions[version] = manifest.minAppVersion;
writes.push(["manifest.json", JSON.stringify(manifest, null, "\t") + "\n"]);
writes.push(["package.json", JSON.stringify(pkg, null, "\t") + "\n"]);
writes.push(["versions.json", JSON.stringify(versions, null, "\t") + "\n"]);

if (check) {
	console.log(`Ready for ${version} (${date}): ${writes.length - 3} changelogs, from ${prev}.`);
	process.exit(0);
}
for (const [p, text] of writes) writeFileSync(join(root, p), text);
console.log(`${version}: ${writes.length - 3} changelogs and the three version files written.`);
