#!/usr/bin/env node
/**
 * Starts an Obsidian that obsidian-launcher did not download — a Flatpak, a
 * Snap, a distribution's package on its own Electron, the Windows build under
 * Wine, FreeBSD's Electron — the way the launcher starts its own: a copy of the
 * vault with the plugins installed, a sandboxed configuration directory holding
 * the app version asked for, and Obsidian pointed at it with --user-data-dir.
 *
 *   OBSIDIAN_COMMAND="flatpak run md.obsidian.Obsidian" \
 *     node .dev/ci-launch-alt.mjs latest .dev/test-vault -p . -p id:x -- --remote-debugging-port=9222
 *
 * OBSIDIAN_COMMAND is split on spaces; OBSIDIAN_PATHS=wine hands the Windows
 * build its paths as Wine spells them (Z:\home\…). Run by ci-run.sh, which
 * waits for the debugging port as it does for the launcher's own Obsidian.
 */
import { spawn, execFileSync } from "node:child_process";
import { readFileSync, writeFileSync, openSync } from "node:fs";
import { join, resolve } from "node:path";

// The library picks an installer for the platform it runs on and has none for
// FreeBSD; the Electron used here is the system's own, so it is asked as if
// on Linux (OBSIDIAN_PLATFORM_AS=linux). Read when the module loads: set first.
if (process.env.OBSIDIAN_PLATFORM_AS) Object.defineProperty(process, "platform", { value: process.env.OBSIDIAN_PLATFORM_AS });
const { default: ObsidianLauncher } = await import("obsidian-launcher");

const [version = "latest", vault = ".dev/test-vault", ...rest] = process.argv.slice(2);
const cut = rest.indexOf("--");
const own = cut < 0 ? rest : rest.slice(0, cut);
const passed = cut < 0 ? [] : rest.slice(cut + 1);
const plugins = [];
for (let i = 0; i < own.length; i++) {
	if (own[i] !== "-p") continue;
	const spec = own[++i] ?? "";
	plugins.push(spec.startsWith("id:") ? { id: spec.slice(3) } : spec.startsWith("repo:") ? { repo: spec.slice(5) } : { path: resolve(spec) });
}
const command = (process.env.OBSIDIAN_COMMAND ?? "").split(" ").filter(Boolean);
if (!command.length) throw new Error("OBSIDIAN_COMMAND is empty");

const launcher = new ObsidianLauncher();
const [appVersion, installerVersion] = await launcher.resolveVersion(version, "latest");
const copied = await launcher.setupVault({ vault, copy: true, plugins });
const configDir = await launcher.setupConfigDir({ appVersion, installerVersion, vault: copied });

// The Windows build reads Windows paths: the vault in obsidian.json and the
// configuration directory both go through winepath.
const wine = process.env.OBSIDIAN_PATHS === "wine";
const winPath = (path) => execFileSync("winepath", ["-w", path], { encoding: "utf8" }).trim();
if (wine) {
	const file = join(configDir, "obsidian.json");
	const json = JSON.parse(readFileSync(file, "utf8"));
	for (const entry of Object.values(json.vaults ?? {})) entry.path = winPath(entry.path);
	writeFileSync(file, JSON.stringify(json));
}

const log = openSync(process.env.OBSIDIAN_ALT_LOG ?? "obsidian-alt.log", "a");
const child = spawn(
	command[0],
	[...command.slice(1), `--user-data-dir=${wine ? winPath(configDir) : configDir}`, ...passed, "--tag=lure-ci-alt"],
	{ detached: true, stdio: ["ignore", log, log] },
);
child.unref();
console.log(JSON.stringify({ appVersion, installerVersion, vault: copied, configDir, command: command.join(" ") }));
