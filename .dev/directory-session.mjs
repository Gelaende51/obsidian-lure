#!/usr/bin/env node
/**
 * Lure's community-directory session (the secret OBSIDIAN_COMMUNITY_COOKIE the
 * Release workflow signs in with): obsidian-toolkit's directory-session, with
 * the Obsidian account from .personal/personal.md (section "## Obsidian
 * Community", lines "- usr …" and "- pw …") and the profile, state and timer
 * names Lure has always used, so the installed daily timer and the signed-in
 * profile carry on.
 *
 *   node .dev/directory-session.mjs            # renew now
 *   node .dev/directory-session.mjs --install  # renew now, then daily (systemd user timer)
 *   node .dev/directory-session.mjs --remove   # stop the daily run
 *
 * The account is read only when the toolkit asks for it, kept in memory, and
 * never printed, logged or put into the environment.
 */
import { existsSync, readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
process.chdir(root);
const PERSONAL = join(root, ".personal/personal.md");

globalThis.obsidianDirectoryCredentials = () => {
	if (!existsSync(PERSONAL)) return null;
	const found = {};
	let inside = false;
	for (const line of readFileSync(PERSONAL, "utf8").split("\n")) {
		if (/^#+ /.test(line)) { inside = /^## Obsidian Community/.test(line); continue; }
		const m = inside && line.match(/^\s*- (usr|pw) (.+?)\s*$/);
		if (m) found[m[1]] = m[2].replace(/^`(.*)`$/, "$1");
	}
	return found.usr && found.pw ? found : null;
};
process.env.DIRECTORY_DATA ??= join(homedir(), ".local/share/lure-directory");
process.env.DIRECTORY_STATE ??= join(homedir(), ".local/state/lure-directory");
process.env.DIRECTORY_UNIT ??= "lure-directory-session";

await import(join(root, "node_modules/obsidian-toolkit/bin/directory-session.mjs"));
