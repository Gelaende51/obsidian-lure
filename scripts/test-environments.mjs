#!/usr/bin/env node
/**
 * What each test environment is made of today, so a change to one — a new
 * container image, a distribution's new Obsidian or Electron, a new Wine, a
 * new runner image — runs the tests on that environment, as a new Obsidian
 * runs them everywhere (scripts/upstream-versions.mjs).
 *
 *   node scripts/test-environments.mjs          # print what is there now
 *   node scripts/test-environments.mjs --diff   # compare with .github/environment-versions.json
 *
 * --diff prints { changed, changes, targets, mainTests, now }: `targets` are
 * the test-systems.yml targets to run, `mainTests` whether a runner image the
 * main suites run on moved. Nothing here installs anything: each fact comes
 * from the place that publishes it (Docker Hub, Repology, Flathub, Snapcraft,
 * WineHQ, GitHub's runner-images releases). A source that cannot be read is
 * recorded as such and counts as no change, so a flaky API does not start a
 * run of its own.
 */
import { readFileSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const UA = "lure-environment-watch (github.com/Gelaende51/obsidian-lure)";
const gh = { accept: "application/vnd.github+json", "user-agent": UA };
if (process.env.GITHUB_TOKEN) gh.authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

async function get(url, headers = {}, as = "json") {
	const res = await fetch(url, { headers: { "user-agent": UA, ...headers } });
	if (!res.ok) throw new Error(`${res.status}`);
	return as === "json" ? res.json() : res.text();
}
const sleep = (ms) => new Promise((done) => setTimeout(done, ms));
const newest = (versions) => versions.sort((a, b) => a.localeCompare(b, "en", { numeric: true })).at(-1) ?? null;

/** Each environment: how to read it, and which targets it is under. */
const SOURCES = {
	"image debian:12": [() => digest("library/debian", "12"), ["distros", "limits"]],
	"image ubuntu:20.04": [() => digest("library/ubuntu", "20.04"), ["distros"]],
	"image fedora:42": [() => digest("library/fedora", "42"), ["distros"]],
	"image archlinux:latest": [() => digest("library/archlinux", "latest"), ["distros", "system-electron"]],
	"image opensuse/leap:16.0": [() => digest("opensuse/leap", "16.0"), ["distros"]],
	"image alpine:edge": [() => digest("library/alpine", "edge"), ["alpine"]],
	"image dockurr/windows": [() => digest("dockurr/windows", "latest"), ["server-2019"]],
	"Arch's obsidian": [() => repology("obsidian", "arch"), ["system-electron"]],
	"Nix's obsidian": [() => repology("obsidian", "nix_unstable"), ["nix"]],
	"FreeBSD's newest electron": [() => repology("electron", "freebsd"), ["freebsd"]],
	"Alpine edge's electron": [() => repology("electron", "alpine_edge"), ["alpine"]],
	"Flathub's Obsidian": [async () => (await get("https://flathub.org/api/v2/appstream/md.obsidian.Obsidian")).releases?.[0]?.version, ["flatpak"]],
	"Snap's Obsidian": [snap, ["snap"]],
	"WineHQ staging": [wine, ["wine"]],
	"electron@beta": [async () => (await get("https://registry.npmjs.org/electron"))["dist-tags"]?.beta, ["electron-next"]],
	"runner ubuntu24": [() => runner("ubuntu24"), ["main"]],
	"runner win25": [() => runner("win25"), ["main"]],
	"runner ubuntu24-arm64": [() => runner("ubuntu24-arm64"), ["linux-arm"]],
	"runner win11-arm64": [() => runner("win11-arm64"), ["emulated"]],
};

async function digest(repo, tag) {
	const [ns, name] = repo.split("/");
	return (await get(`https://hub.docker.com/v2/namespaces/${ns}/repositories/${name}/tags/${tag}`)).digest;
}

let repologyAt = 0;
async function repology(project, repo) {
	// Repology asks for one request a second.
	const wait = repologyAt + 1100 - Date.now();
	if (wait > 0) await sleep(wait);
	repologyAt = Date.now();
	const rows = await get(`https://repology.org/api/v1/project/${project}`);
	return newest(rows.filter((r) => r.repo === repo).map((r) => r.version));
}

async function snap() {
	const info = await get("https://api.snapcraft.io/v2/snaps/info/obsidian", { "Snap-Device-Series": "16" });
	return info["channel-map"].find((c) => c.channel.name === "stable" && c.channel.architecture === "amd64")?.version;
}

async function wine() {
	const index = await get("https://dl.winehq.org/wine-builds/ubuntu/dists/noble/main/binary-amd64/Packages", {}, "text");
	return index.match(/^Package: winehq-staging\n(?:.+\n)*?Version: (.+)$/m)?.[1];
}

let releases = null;
async function runner(image) {
	releases ??= await get("https://api.github.com/repos/actions/runner-images/releases?per_page=60", gh);
	return newest(releases.map((r) => r.tag_name).filter((t) => t.startsWith(`${image}/`)));
}

const now = {};
for (const [name, [read]] of Object.entries(SOURCES)) {
	try {
		now[name] = (await read()) ?? "unreadable (empty)";
	} catch (err) {
		now[name] = `unreadable (${err.message})`;
	}
}

if (!process.argv.includes("--diff")) {
	console.log(JSON.stringify(now, null, "\t"));
	process.exit(0);
}

let before = {};
try {
	before = JSON.parse(readFileSync(join(root, ".github/environment-versions.json"), "utf8"));
} catch {
	// First run: everything is recorded, nothing is run for it.
}
const changes = [], targets = new Set();
let mainTests = false;
for (const [name, value] of Object.entries(now)) {
	const was = before[name];
	// Keep what was known when a source could not be read this time.
	if (String(value).startsWith("unreadable")) { if (was !== undefined) now[name] = was; continue; }
	if (was === undefined || was === value || String(was).startsWith("unreadable")) continue;
	changes.push(`${name}: ${was} → ${value}`);
	for (const t of SOURCES[name][1]) t === "main" ? (mainTests = true) : targets.add(t);
}
console.log(JSON.stringify({ changed: changes.length > 0, changes, targets: [...targets], mainTests, now }));
