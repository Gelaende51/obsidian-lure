#!/usr/bin/env node
/**
 * Keeps the Release workflow's community-directory session alive: the
 * repository secret OBSIDIAN_COMMUNITY_COOKIE that scripts/directory.mjs
 * signs in with (the directory has no API or token).
 *
 *   node .dev/directory-session.mjs            # renew now
 *   node .dev/directory-session.mjs --install  # renew now, then daily (systemd user timer)
 *   node .dev/directory-session.mjs --remove   # stop the daily run
 *
 * It uses a Chrome profile of its own (~/.local/share/lure-directory/profile),
 * never the everyday one. The directory signs in through the Obsidian
 * account, so while that profile is still signed in to obsidian.md a visit
 * renews the directory's session silently: this happens headless, and the
 * new session is stored as the secret without a word. Only when the Obsidian
 * account session has run out too does it send a desktop notification and
 * open that profile's window on the login page; once signed in there, it
 * stores the session and closes the window. Nothing is typed for you: the
 * password stays with you and your password manager.
 *
 * The cookie value is piped from the browser straight into `gh secret set`;
 * it is never printed or written to disk outside the profile. A hash of the
 * last upload (~/.local/state/lure-directory/uploaded) skips unchanged ones.
 */
import { execFileSync, spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { createRequire } from "node:module";
import { homedir } from "node:os";
import { join, resolve } from "node:path";

const SITE = "https://community.obsidian.md";
const PAGE = `${SITE}/account/plugins/lure`;
const REPO = "Gelaende51/obsidian-lure";
const SECRET = "OBSIDIAN_COMMUNITY_COOKIE";
const DATA = join(homedir(), ".local/share/lure-directory");
const STATE = join(homedir(), ".local/state/lure-directory");
const PROFILE = join(DATA, "profile");
const UNIT = "lure-directory-session";
const LOGIN_MINUTES = 15;

const log = (m) => console.log(`${new Date().toISOString().slice(0, 16).replace("T", " ")} ${m}`);
const notify = (title, body) => spawnSync("notify-send", ["-a", "Lure release", "-u", "critical", title, body]);

if (process.argv.includes("--remove")) {
	spawnSync("systemctl", ["--user", "disable", "--now", `${UNIT}.timer`], { stdio: "inherit" });
	for (const f of [`${UNIT}.service`, `${UNIT}.timer`]) rmSync(join(homedir(), ".config/systemd/user", f), { force: true });
	spawnSync("systemctl", ["--user", "daemon-reload"]);
	log("daily renewal removed");
	process.exit(0);
}

if (process.argv.includes("--install")) {
	const dir = join(homedir(), ".config/systemd/user");
	mkdirSync(dir, { recursive: true });
	writeFileSync(join(dir, `${UNIT}.service`), `[Unit]
Description=Renew the Lure Release workflow's community-directory session

[Service]
Type=oneshot
WorkingDirectory=${resolve(import.meta.dirname, "..")}
ExecStart=${process.execPath} ${resolve(import.meta.filename)}
`);
	writeFileSync(join(dir, `${UNIT}.timer`), `[Unit]
Description=Renew the Lure Release workflow's community-directory session daily

[Timer]
OnCalendar=daily
RandomizedDelaySec=1h
Persistent=true

[Install]
WantedBy=timers.target
`);
	spawnSync("systemctl", ["--user", "daemon-reload"]);
	spawnSync("systemctl", ["--user", "enable", "--now", `${UNIT}.timer`], { stdio: "inherit" });
	log(`daily renewal installed (systemctl --user list-timers ${UNIT}.timer; journalctl --user -u ${UNIT})`);
}

// playwright-core, kept out of the project's dependencies.
const DEPS = join(DATA, "deps");
if (!existsSync(join(DEPS, "node_modules/playwright-core"))) {
	mkdirSync(DEPS, { recursive: true });
	execFileSync("npm", ["install", "--silent", "--no-save", "--no-package-lock", "--prefix", DEPS, "playwright-core@1"], { stdio: "inherit" });
}
const { chromium } = createRequire(join(DEPS, "package.json"))("playwright-core");

/** Opens the admin page with the profile; true when it ends there signed in. */
async function visit(context) {
	const page = context.pages()[0] ?? await context.newPage();
	await page.goto(PAGE, { waitUntil: "domcontentloaded" }).catch(() => {});
	// The directory's /auth/login hands over to obsidian.md and back; give the
	// silent round trip time to finish.
	await page.waitForURL((u) => u.href.startsWith(PAGE), { timeout: 20_000 }).catch(() => {});
	return page;
}
const signedIn = (page) => page.url().startsWith(PAGE);

async function store(context) {
	const cookies = await context.cookies(SITE);
	if (!cookies.length) throw new Error("no cookies for the directory after signing in");
	const header = cookies.map((c) => `${c.name}=${c.value}`).join("; ");
	const hash = createHash("sha256").update(header).digest("hex");
	const seen = join(STATE, "uploaded");
	if (existsSync(seen) && readFileSync(seen, "utf8") === hash) { log("session unchanged; the secret is current"); return; }
	const done = spawnSync("gh", ["secret", "set", SECRET, "--repo", REPO], { input: header, stdio: ["pipe", "ignore", "inherit"] });
	if (done.status !== 0) throw new Error("gh secret set failed (is gh signed in?)");
	mkdirSync(STATE, { recursive: true });
	writeFileSync(seen, hash);
	const until = Math.min(...cookies.filter((c) => c.expires > 0).map((c) => c.expires));
	log(`renewed ${SECRET}${Number.isFinite(until) ? ` (valid until ${new Date(until * 1000).toISOString().slice(0, 10)})` : ""}`);
}

mkdirSync(PROFILE, { recursive: true });
let context = await chromium.launchPersistentContext(PROFILE, { channel: "chrome", headless: true });
try {
	if (signedIn(await visit(context))) {
		await store(context);
		process.exit(0);
	}
} finally {
	await context.close();
}

// Signed out of the Obsidian account too: this needs a person.
log("the Obsidian account session has run out; asking for a sign-in");
notify("Lure: sign in to the Obsidian community site", `A window is open for it. The Release workflow needs the session to scan and publish releases (${LOGIN_MINUTES} minutes).`);
context = await chromium.launchPersistentContext(PROFILE, { channel: "chrome", headless: false, viewport: null });
try {
	const page = await visit(context);
	await page.bringToFront().catch(() => {});
	await page.waitForURL((u) => u.href.startsWith(PAGE), { timeout: LOGIN_MINUTES * 60_000 });
	await store(context);
	notify("Lure: directory session renewed", "Thanks — the Release workflow can sign in again.");
} catch (e) {
	log(`not renewed: ${e.message.split("\n")[0]}`);
	notify("Lure: directory session not renewed", "Run node .dev/directory-session.mjs to try again.");
	process.exitCode = 1;
} finally {
	await context.close().catch(() => {});
}
