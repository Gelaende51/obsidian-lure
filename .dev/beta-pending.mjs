#!/usr/bin/env node
/**
 * Whether there is an Obsidian beta this machine has not tested yet.
 *
 * The daily watch on GitHub records the newest beta newer than the release
 * in .github/upstream-versions.json (a version number only: the repository's
 * logs are public, early access is not). This reads that record from
 * origin/main and compares it with .personal/beta-logs/tested.json, which
 * .dev/beta-local.sh writes after a run.
 *
 *   node .dev/beta-pending.mjs   # prints the pending version and exits 0, or exits 1 with none
 *
 * A Claude session that finds one runs .dev/beta-local.sh (see
 * .claude/CLAUDE.md) and reports to the maintainer only.
 */
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

try {
	execFileSync("git", ["fetch", "-q", "origin", "main"], { stdio: "ignore" });
} catch {
	// Offline: the last fetched record will do.
}
const recorded = JSON.parse(execFileSync("git", ["show", "origin/main:.github/upstream-versions.json"], { encoding: "utf8" })).obsidianBeta ?? null;
let tested = null;
try {
	tested = JSON.parse(readFileSync(".personal/beta-logs/tested.json", "utf8")).version ?? null;
} catch {
	// Never run here.
}
if (recorded && recorded !== tested) {
	console.log(recorded);
	process.exit(0);
}
console.error(recorded ? `Obsidian beta ${recorded} already tested here` : "no Obsidian beta newer than the release");
process.exit(1);
