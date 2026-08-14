#!/usr/bin/env node
/**
 * Fills the {{SELECTOR}} placeholder in every translated document with the
 * language selector for that document and language.
 *
 * The selector names all 45 locales, so writing it by hand into 88 files is
 * both tedious and a guarantee that some of them will drift. Translations are
 * written with the placeholder; this stamps them, and re-stamps every file
 * whenever a language is added.
 */
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { selector } from "./i18n-selector.mjs";

// fileURLToPath, not .pathname: this repository lives in a directory whose
// name has a space in it, and .pathname hands back the percent-encoded form.
const DIR = fileURLToPath(new URL("../docs/i18n/", import.meta.url));
let stamped = 0;
for (const file of readdirSync(DIR).filter((f) => f.endsWith(".md"))) {
	const match = file.match(/^(README|usage)\.(.+)\.md$/);
	if (!match) {
		console.warn(`skipped (unrecognised name): ${file}`);
		continue;
	}
	const [, doc, lang] = match;
	const line = selector(doc, lang);
	const text = readFileSync(DIR + file, "utf8");
	// Either the placeholder or an already-stamped line, so a language added
	// later updates every file rather than only the fresh ones.
	// An item is a link to another language, or the current language in bold.
	// The first alternative is the old shape, which carried a translated
	// "Read this in other languages:" label; keeping it here means a document
	// written before the label was dropped still gets re-stamped rather than
	// silently skipped.
	const item = String.raw`(?:\[[^\]]*\]\([^)]*\)|\*\*[^*\n]+\*\*)`;
	const pattern = new RegExp(
		String.raw`^(?:\{\{SELECTOR\}\}|\*\*[^*\n]+\*\* ${item}(?: · ${item})*|${item}(?: · ${item})+)$`,
		"m",
	);
	if (!pattern.test(text)) {
		console.warn(`no selector line found: ${file}`);
		continue;
	}
	const next = text.replace(pattern, () => line);
	if (next !== text) writeFileSync(DIR + file, next);
	stamped++;
}
console.log(`stamped ${stamped} translated documents`);
