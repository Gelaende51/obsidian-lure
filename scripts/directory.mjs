#!/usr/bin/env node
/**
 * The community directory's side of a release, for the Release workflow.
 *
 *   node scripts/directory.mjs request 1.5.2   # queue the scan (needs COOKIE)
 *   node scripts/directory.mjs confirm 1.5.2   # wait until the public page lists it
 *
 * `request` opens the plugin's check-release page as its owner — what the
 * admin menu's "Check for new releases" does — and waits for the page's own
 * answer ("Your manifest points at version X. A scan has been queued.").
 * The directory has no API for this and authenticates by session cookie, so
 * COOKIE is the Cookie header of a signed-in request to community.obsidian.md,
 * kept as the repository secret OBSIDIAN_COMMUNITY_COOKIE. A page run by
 * scripts is what queued the scan when it was done by hand, so this drives a
 * real (headless) Chrome rather than fetching the HTML. A session that has
 * expired lands on the login page, and says so.
 *
 * `confirm` needs nothing: the public page renders its current version and
 * ratings without scripts. It polls until the version is the new one, then
 * reports Health and Review.
 */
const [mode, version] = process.argv.slice(2);
const SITE = "https://community.obsidian.md";
const ID = "lure";
if (!["request", "confirm"].includes(mode) || !/^\d+\.\d+\.\d+$/.test(version ?? "")) {
	console.error("usage: directory.mjs request|confirm <x.y.z>");
	process.exit(2);
}

if (mode === "request") {
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
		await page.goto(`${SITE}/account/plugins/${ID}/check-release`, { waitUntil: "domcontentloaded" });
		if (new URL(page.url()).pathname.startsWith("/auth/")) {
			console.error("The session in OBSIDIAN_COMMUNITY_COOKIE has expired: sign in again and renew the secret.");
			process.exit(3);
		}
		const answer = await page.waitForFunction(
			() => /manifest points at version|scan has been queued|no new release/i.test(document.body.innerText)
				&& document.body.innerText,
			null, { timeout: 120_000 },
		).then((h) => h.jsonValue()).catch(() => null);
		const said = (answer ?? "").match(/Your manifest points at version[^.]*\.[^.]*\./)?.[0] ?? (answer ?? "").trim().split("\n").pop();
		console.log(`The directory answered: ${said || "(nothing within two minutes)"}`);
		if (!answer) process.exit(1);
		if (!answer.includes(version)) { console.error(`It names another version than ${version}.`); process.exit(1); }
	} finally {
		await browser.close();
	}
} else {
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
			if (process.env.GITHUB_STEP_SUMMARY) {
				const { appendFileSync } = await import("node:fs");
				appendFileSync(process.env.GITHUB_STEP_SUMMARY, `**Community directory:** ${version} is current — Health ${health}, Review ${review}.\n`);
			}
			process.exit(0);
		}
		console.log(`${new Date().toISOString().slice(11, 16)} still lists ${current ?? "?"}`);
		await new Promise((r) => setTimeout(r, 60_000));
	}
	console.error(`${version} was not listed within 40 minutes: queue the scan from the admin page's "Check for new releases".`);
	process.exit(1);
}
