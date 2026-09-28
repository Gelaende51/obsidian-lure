#!/usr/bin/env node
/**
 * The community directory's side of a release, for the Release workflow.
 *
 *   node scripts/directory.mjs review <sha>    # preview scan, compare with the last release (needs COOKIE)
 *   node scripts/directory.mjs request 1.5.2   # queue the release scan (needs COOKIE)
 *   node scripts/directory.mjs confirm 1.5.2   # wait until the public page lists it
 *
 * `review` is the admin page's "Review branch": it scans a commit without
 * touching the listing. It waits for the scan, reads its findings and those
 * of the last completed release, and fails when the commit brings a Warning
 * (or worse) the release did not have — before anything is published. New
 * recommendations and moved lines are reported, not fatal. A preview covers
 * source code, CSS and dependencies; behaviour, network and build checks
 * need the release's assets and come with the release scan.
 *
 * `request` opens the plugin's check-release page as its owner — what the
 * admin menu's "Check for new releases" does — and waits for the page's own
 * answer ("Your manifest points at version X. A scan has been queued.").
 *
 * The directory has no API for either and authenticates by session cookie,
 * so COOKIE is the Cookie header of a signed-in request to
 * community.obsidian.md, kept as the repository secret
 * OBSIDIAN_COMMUNITY_COOKIE (renewed by .dev/directory-session.mjs). The
 * pages are run by scripts, so this drives a real (headless) Chrome rather
 * than fetching the HTML. A session that has expired lands on the login page,
 * and says so (exit 3).
 *
 * `confirm` needs nothing: the public page renders its current version and
 * ratings without scripts. It polls until the version is the new one, then
 * reports Health and Review.
 */
import { appendFileSync } from "node:fs";

const [mode, arg] = process.argv.slice(2);
const SITE = "https://community.obsidian.md";
const ID = "lure";
const ADMIN = `${SITE}/account/plugins/${ID}`;
const ok = { review: /^[0-9a-f]{7,40}$|^[\w./-]+$/, request: /^\d+\.\d+\.\d+$/, confirm: /^\d+\.\d+\.\d+$/ };
if (!ok[mode] || !ok[mode].test(arg ?? "")) {
	console.error("usage: directory.mjs review <ref> | request <x.y.z> | confirm <x.y.z>");
	process.exit(2);
}
const summary = (md) => process.env.GITHUB_STEP_SUMMARY && appendFileSync(process.env.GITHUB_STEP_SUMMARY, md + "\n");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** A headless Chrome signed in with COOKIE; `fn(page)` runs in it. */
async function signedIn(fn) {
	const header = process.env.COOKIE;
	if (!header) { console.error("COOKIE is not set: nothing to sign in with"); process.exit(2); }
	const { chromium } = await import("playwright-core");
	const browser = await chromium.launch({ channel: "chrome", headless: true });
	try {
		const context = await browser.newContext();
		await context.addCookies(header.split(/;\s*/).filter(Boolean).map((pair) => {
			const at = pair.indexOf("=");
			return { name: pair.slice(0, at), value: pair.slice(at + 1), domain: "community.obsidian.md", path: "/", secure: true };
		}));
		const page = await context.newPage();
		page.open = async (url) => {
			await page.goto(url, { waitUntil: "domcontentloaded" });
			if (new URL(page.url()).pathname.startsWith("/auth/")) {
				console.error("The session in OBSIDIAN_COMMUNITY_COOKIE has expired: sign in again and renew the secret (.dev/directory-session.mjs).");
				process.exit(3);
			}
		};
		return await fn(page);
	} finally {
		await browser.close();
	}
}

/**
 * Every review on the admin page, newest first: its summary line, and its
 * findings as { section, level, text, where } — text without the file:line
 * list, so a finding that only moved still matches.
 */
const readReviews = (page) => page.evaluate(() => [...document.querySelectorAll("details")].map((d) => ({
	head: d.querySelector("summary").innerText.replace(/\s+/g, " ").trim(),
	findings: [...d.querySelectorAll("h4")].flatMap((h) => {
		const ul = h.parentElement.parentElement.querySelector("ul");
		return ul ? [...ul.children].map((li) => {
			const cells = [...li.children].map((c) => c.innerText.trim());
			const body = li.querySelector(".block")?.innerText.trim() ?? cells[1] ?? "";
			const where = [...li.querySelectorAll('a[href*="/blob/"]')].map((a) => a.innerText.trim());
			return { section: h.textContent.trim(), level: cells[0], text: body.replace(/\s+/g, " "), where };
		}) : [];
	}),
})));

const SEVERE = /^(Warning|Error|Fail|Critical|Danger)/i;
const key = (f) => `${f.section} | ${f.level} | ${f.text}`;

if (mode === "review") {
	const ref = arg, short = ref.slice(0, 7);
	await signedIn(async (page) => {
		await page.open(`${ADMIN}/review-branch`);
		await page.getByRole("textbox").first().fill(ref);
		await page.getByRole("button", { name: /Run preview scan/i }).click();
		await page.waitForURL((u) => !u.pathname.endsWith("/review-branch"), { timeout: 60_000 });
		// The preview shows Pending first (~5 min); poll the page up to 30 minutes.
		let preview, release;
		for (let i = 0; i < 60; i++) {
			await page.open(ADMIN);
			const reviews = await readReviews(page);
			preview = reviews.find((r) => /^Preview/.test(r.head) && (r.head.includes(`Commit: ${short}`) || r.head.includes(`Ref: ${ref}`)));
			release = reviews.find((r) => /Version: \d/.test(r.head) && /Completed/.test(r.head));
			if (preview && !/Pending|Running|Queued/i.test(preview.head)) break;
			console.log(`${new Date().toISOString().slice(11, 16)} preview of ${short}: ${preview?.head.match(/(Pending|Running|Queued)/i)?.[1] ?? "not listed yet"}`);
			await sleep(30_000);
		}
		if (!preview || /Pending|Running|Queued/i.test(preview.head)) {
			console.error(`The preview scan of ${short} did not finish within 30 minutes.`);
			process.exit(1);
		}
		if (!/Completed/.test(preview.head)) {
			console.error(`The preview scan of ${short} ended as: ${preview.head}`);
			process.exit(1);
		}
		const old = new Map((release?.findings ?? []).map((f) => [key(f), f]));
		const now = preview.findings.filter((f) => !/^Pass$/i.test(f.level));
		const added = now.filter((f) => !old.has(key(f)));
		const moved = now.filter((f) => old.has(key(f)) && old.get(key(f)).where.join() !== f.where.join());
		// A preview scans the source (code, CSS, dependencies), not the release
		// assets: only sections it covered can have lost a finding.
		const scanned = new Set(preview.findings.map((f) => f.section));
		const gone = [...old.values()].filter((f) => scanned.has(f.section) && !/^Pass$/i.test(f.level) && !preview.findings.some((g) => key(g) === key(f)));
		const severe = added.filter((f) => SEVERE.test(f.level));
		const line = (f) => `- **${f.level}** (${f.section}): ${f.text}${f.where.length ? ` — ${f.where.join(", ")}` : ""}`;
		const against = release?.head.match(/Version: (\d+\.\d+\.\d+)/)?.[1] ?? "none";
		const report = [
			`**Directory preview scan** of ${short} against release ${against} (${[...scanned].join(", ")}): ${now.length} findings besides passes, ${added.length} new (${severe.length} warnings or worse), ${gone.length} gone, ${moved.length} moved.`,
			...(added.length ? ["", "New:", ...added.map(line)] : []),
			...(gone.length ? ["", "Gone:", ...gone.map(line)] : []),
			...(moved.length ? ["", "Moved:", ...moved.map(line)] : []),
		].join("\n");
		console.log(report);
		summary(report);
		if (severe.length) {
			console.error(`The commit brings ${severe.length} new warning(s): fix them, or dispute them on the admin page, before releasing.`);
			process.exit(1);
		}
	});
} else if (mode === "request") {
	const version = arg;
	await signedIn(async (page) => {
		await page.open(`${ADMIN}/check-release`);
		const answer = await page.waitForFunction(
			() => /manifest points at version|scan has been queued|no new release/i.test(document.body.innerText)
				&& document.body.innerText,
			null, { timeout: 120_000 },
		).then((h) => h.jsonValue()).catch(() => null);
		const said = (answer ?? "").match(/Your manifest points at version[^.]*\.[^.]*\./)?.[0] ?? (answer ?? "").trim().split("\n").pop();
		console.log(`The directory answered: ${said || "(nothing within two minutes)"}`);
		if (!answer) process.exit(1);
		if (!answer.includes(version)) { console.error(`It names another version than ${version}.`); process.exit(1); }
	});
} else {
	const version = arg;
	// Up to 40 minutes: the scan takes ~5, the listing follows it.
	const text = async () => {
		const html = await (await fetch(`${SITE}/plugins/${ID}`)).text();
		return html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
	};
	for (let i = 0; i < 40; i++) {
		const t = await text().catch(() => "");
		const current = t.match(/Current version (\d+\.\d+\.\d+)/)?.[1];
		if (current === version) {
			const health = t.match(/Health (\w+)/)?.[1] ?? "?";
			const review = t.match(/Review (\w+)/)?.[1] ?? "?";
			console.log(`The directory lists ${version}. Health: ${health}. Review: ${review}.`);
			summary(`**Community directory:** ${version} is current — Health ${health}, Review ${review}.`);
			process.exit(0);
		}
		console.log(`${new Date().toISOString().slice(11, 16)} still lists ${current ?? "?"}`);
		await sleep(60_000);
	}
	console.error(`${version} was not listed within 40 minutes: queue the scan from the admin page's "Check for new releases".`);
	process.exit(1);
}
