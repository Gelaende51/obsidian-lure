#!/usr/bin/env node
/**
 * The plugin list ci-run.sh installs, with each neighbouring plugin swapped
 * for its newest pre-release where it has one newer than its last release —
 * what BRAT users of that plugin run, and what its next release will be.
 *
 *   node .dev/peer-betas.mjs -p id:folder-notes -p id:breadcrumbs …
 *
 * Prints the arguments back, one per line, `id:x` turned into
 * `repo:owner/name@tag` where a newer pre-release exists. A plugin whose
 * releases cannot be read is left as it was.
 */
const args = process.argv.slice(2);
const headers = { accept: "application/vnd.github+json", "user-agent": "lure-peer-betas" };
if (process.env.GITHUB_TOKEN) headers.authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
const get = async (url) => {
	const res = await fetch(url, { headers });
	if (!res.ok) throw new Error(String(res.status));
	return res.json();
};
const newer = (a, b) => a.replace(/^v/, "").localeCompare(b.replace(/^v/, ""), "en", { numeric: true }) > 0;

const directory = await get("https://raw.githubusercontent.com/obsidianmd/obsidian-releases/HEAD/community-plugins.json");
const repoOf = Object.fromEntries(directory.map((p) => [p.id, p.repo]));
const out = [];
for (let i = 0; i < args.length; i++) {
	const spec = args[i];
	if (spec !== "-p" || !args[i + 1]?.startsWith("id:")) { out.push(spec); continue; }
	const id = args[++i].slice(3), repo = repoOf[id];
	let chosen = `id:${id}`;
	try {
		const releases = await get(`https://api.github.com/repos/${repo}/releases?per_page=20`);
		const stable = releases.find((r) => !r.prerelease && !r.draft);
		const beta = releases.find((r) => r.prerelease && !r.draft);
		if (repo && beta && (!stable || newer(beta.tag_name, stable.tag_name))) {
			chosen = `repo:${repo}@${beta.tag_name}`;
			console.error(`${id}: pre-release ${beta.tag_name} (last release ${stable?.tag_name ?? "none"})`);
		}
	} catch {
		// Unreadable: the released version it is.
	}
	out.push("-p", chosen);
}
console.log(out.join("\n"));
