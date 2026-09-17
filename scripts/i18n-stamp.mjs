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
 * Availability is per document: the README may be translated into every
 * language while the changelog is translated into none. A document with no
 * translations gets an invisible placeholder rather than a selector offering
 * one language, so it looks finished rather than pending — and the placeholder
 * is still where the selector goes once its first translation lands.
 */
import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { selector } from "./i18n-selector.mjs";

// fileURLToPath, not .pathname: a repository can live in a directory whose
// name has a space in it, and .pathname hands back the percent-encoded form.
const root = fileURLToPath(new URL("..", import.meta.url));
const i18n = root + "docs/i18n/";

/** The documents that can be translated, by the name their files carry. */
const DOCS = ["README", "usage", "CHANGELOG"];
const TRANSLATED = new RegExp(String.raw`^(${DOCS.join("|")})\.(.+)\.md$`);

/** For each document, the locales it has been translated into. */
const available = Object.fromEntries(DOCS.map((doc) => [doc, []]));
if (existsSync(i18n)) {
	for (const f of readdirSync(i18n)) {
		const m = TRANSLATED.exec(f);
		if (m) available[m[1]].push(m[2]);
	}
}

/** What stands in for the selector while a document has no translations: invisible when rendered. */
const PLACEHOLDER = "<!-- {{SELECTOR}} -->";

// Either the placeholder or an already-stamped line, so a language added later
// updates every file rather than only the fresh ones.
// An item is a link to another language, or the current language in bold. The
// middle alternative is the old shape, which carried a translated "Read this in
// other languages:" label; keeping it here means a document written before the
// label was dropped is re-stamped rather than silently skipped.
const ITEM = String.raw`(?:\[[^\]]*\]\([^)]*\)|\*\*[^*\n]+\*\*)`;
const PATTERN = new RegExp(
	String.raw`^(?:<!-- \{\{SELECTOR\}\} -->|\{\{SELECTOR\}\}|\*\*[^*\n]+\*\* ${ITEM}(?: · ${ITEM})*|${ITEM}(?: · ${ITEM})+)\n\n`,
	"m",
);

const targets = [
	["README.md", "README", "en"],
	["docs/usage.md", "usage", "en"],
	["CHANGELOG.md", "CHANGELOG", "en"],
	...(existsSync(i18n)
		? readdirSync(i18n)
				.filter((f) => f.endsWith(".md"))
				.map((f) => {
					const m = TRANSLATED.exec(f);
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
	const line = available[doc].length ? `${selector(doc, lang, available[doc])}\n\n` : `${PLACEHOLDER}\n\n`;
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
	available[doc].length ? stamped++ : cleared++;
}

console.log(`stamped ${stamped} documents with a language row`);
if (cleared) console.log(`${cleared} document${cleared === 1 ? "" : "s"} with no translations left on the placeholder`);

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
	// --only README,CHANGELOG limits the claim to documents actually re-read;
	// without it every translated document is considered.
	const onlyAt = process.argv.indexOf("--only");
	const only = onlyAt === -1 ? null : new Set(process.argv[onlyAt + 1].split(","));
	const headOf = (file) =>
		execFileSync("git", ["log", "-1", "--format=%h", "--", file], { cwd: root, encoding: "utf8" }).trim();
	const source = { README: "README.md", usage: "docs/usage.md", CHANGELOG: "CHANGELOG.md" };
	const wanted = Object.fromEntries(Object.entries(source).map(([k, v]) => [k, headOf(v)]));
	let stale = 0;
	for (const [file, doc, lang] of targets) {
		if (lang === "en" || (only && !only.has(doc))) continue;
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
