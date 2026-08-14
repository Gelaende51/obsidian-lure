#!/usr/bin/env node
/**
 * Fills the {{SELECTOR}} placeholder in every document with the language
 * selector for that document and language.
 *
 * The selector names every locale that exists, so writing it by hand into each
 * file is both tedious and a guarantee that some of them drift. Documents are
 * written with the placeholder; this stamps them, and re-stamps every file
 * whenever a language is added or removed.
 *
 * With no translations present the line is removed entirely rather than left
 * as a selector offering one language — which is the state a fresh template is
 * in, and it should look finished rather than pending.
 */
import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { selector } from "./i18n-selector.mjs";

// fileURLToPath, not .pathname: a repository can live in a directory whose
// name has a space in it, and .pathname hands back the percent-encoded form.
const root = fileURLToPath(new URL("..", import.meta.url));
const i18n = root + "docs/i18n/";

/** Locales with at least one translated document. */
const available = existsSync(i18n)
	? [...new Set(
			readdirSync(i18n)
				.map((f) => /^(?:README|usage)\.(.+)\.md$/.exec(f)?.[1])
				.filter(Boolean),
		)]
	: [];

// Either the placeholder or an already-stamped line, so a language added later
// updates every file rather than only the fresh ones.
// An item is a link to another language, or the current language in bold. The
// middle alternative is the old shape, which carried a translated "Read this in
// other languages:" label; keeping it here means a document written before the
// label was dropped is re-stamped rather than silently skipped.
const ITEM = String.raw`(?:\[[^\]]*\]\([^)]*\)|\*\*[^*\n]+\*\*)`;
const PATTERN = new RegExp(
	String.raw`^(?:\{\{SELECTOR\}\}|\*\*[^*\n]+\*\* ${ITEM}(?: · ${ITEM})*|${ITEM}(?: · ${ITEM})+)\n\n`,
	"m",
);

const targets = [
	["README.md", "README", "en"],
	["docs/usage.md", "usage", "en"],
	...(existsSync(i18n)
		? readdirSync(i18n)
				.filter((f) => f.endsWith(".md"))
				.map((f) => {
					const m = /^(README|usage)\.(.+)\.md$/.exec(f);
					return m ? [`docs/i18n/${f}`, m[1], m[2]] : null;
				})
				.filter(Boolean)
		: []),
];

let stamped = 0;
let cleared = 0;
for (const [file, doc, lang] of targets) {
	const path = root + file;
	if (!existsSync(path)) continue;
	const text = readFileSync(path, "utf8");
	const line = available.length ? `${selector(doc, lang, available)}\n\n` : "{{SELECTOR}}\n\n";
	let next;
	if (PATTERN.test(text)) {
		next = text.replace(PATTERN, () => line);
	} else {
		// Never insert into a document that has not opted in. `newlocale` adds
		// the placeholder to the English sources when localisation begins;
		// doing it here would put a language line on any markdown file that
		// happened to be in the target list — including a template's own
		// README, which is not a translated document.
		console.log(`  (no selector line in ${file} — skipped)`);
		continue;
	}
	if (next !== text) writeFileSync(path, next);
	available.length ? stamped++ : cleared++;
}

if (available.length) console.log(`stamped ${stamped} documents across ${available.length + 1} languages`);
else console.log(`no translations present — ${cleared} documents reset to {{SELECTOR}}`);

// --- freshness -------------------------------------------------------------
//
// Each translated document opens with a comment naming the commit of the
// English source it was made from, so `git log <hash>..HEAD -- <source>` shows
// exactly what it is missing. The wording is in the document's own language;
// the hash is not, which is the only part this needs to find.
//
// Bumping a hash is a claim that the translation reflects that commit, so it is
// never done as a side effect of stamping the selector — it needs --freshness,
// and --freshness --check only reports.

const FRESHNESS = /^<!--[\s\S]*?-->/;
const HASH = /\b[0-9a-f]{7}\b/;

if (process.argv.includes("--freshness")) {
	const dryRun = process.argv.includes("--check");
	const headOf = (file) =>
		execFileSync("git", ["log", "-1", "--format=%h", "--", file], { cwd: root, encoding: "utf8" }).trim();
	const source = { README: "README.md", usage: "docs/usage.md" };
	const wanted = Object.fromEntries(Object.entries(source).map(([k, v]) => [k, headOf(v)]));
	let stale = 0;
	for (const [file, doc, lang] of targets) {
		if (lang === "en") continue;
		const path = root + file;
		if (!existsSync(path)) continue;
		const text = readFileSync(path, "utf8");
		const header = FRESHNESS.exec(text)?.[0];
		if (!header || !HASH.test(header)) {
			console.log(`  no freshness header in ${file}`);
			continue;
		}
		const has = HASH.exec(header)[0];
		if (has === wanted[doc]) continue;
		stale++;
		const behind = execFileSync(
			"git",
			["log", "--oneline", `${has}..HEAD`, "--", source[doc]],
			{ cwd: root, encoding: "utf8" },
		).trim().split("\n").filter(Boolean).length;
		console.log(`  ${file}: ${has} -> ${wanted[doc]} (${behind} commit${behind === 1 ? "" : "s"} behind)`);
		if (!dryRun) writeFileSync(path, text.replace(header, header.replace(HASH, wanted[doc])));
	}
	if (!stale) console.log("every translation names the current English commit");
	else if (dryRun) {
		console.log(`\n${stale} stale. Re-read the changes above, then: npm run stamp -- --freshness`);
		process.exit(1);
	} else console.log(`\nre-stamped ${stale}`);
}
