/**
 * Verifies the locale table in src/lang/translations.ts against the
 * English source in src/lang/strings.ts, and both against the languages
 * Obsidian itself offers.
 *
 * Errors (exit 1):
 *   - a key that doesn't exist in EN (typo, or a renamed string left behind)
 *   - {placeholders} that don't match EN's for that key
 *   - an empty or whitespace-only value
 *   - a locale code Obsidian doesn't ship and that isn't declared ahead of it
 *   - LOCALE_NAMES and TRANSLATIONS disagreeing about what ships
 * Warnings (exit 0):
 *   - keys a locale doesn't translate; those fall back to English by design
 *   - a language Obsidian has gained that this plugin has no strings for
 *   - a code declared "ahead of the host" that the host has since caught up on
 *   - docs/i18n missing a translated guide for a shipped locale
 *
 * The drift check is the point of the second half. Obsidian's language list
 * grows, and nothing about this plugin notices on its own: a new language
 * appears in the app, users who pick it get English from this plugin, and no
 * build ever fails. Comparing against a recorded snapshot turns that into a
 * warning on the next run — see scripts/obsidian-languages.json for how to
 * refresh it.
 *
 * Run with `npm run check:lang`; also runs as part of `npm run build`.
 */
import { build } from "esbuild";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { readdirSync } from "node:fs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const snapshot = JSON.parse(
	readFileSync(resolve(root, "scripts/obsidian-languages.json"), "utf8"),
);
/**
 * What Obsidian's own language menu offers, as of the recorded version.
 *
 * Read from the app rather than from obsidianmd/obsidian-translations: that
 * repository carries languages the app does not ship, and trusting it is how
 * `el` and `sa` were once recorded here as languages Obsidian supports.
 */
const OBSIDIAN_LOCALES = new Set(Object.keys(snapshot.languages));
/** Codes this plugin ships that Obsidian has no way to select. Deliberate; see the snapshot. */
const AHEAD_OF_HOST = new Set(snapshot.aheadOfHost);

/** Locales that are partial on purpose, so incompleteness isn't worth a warning. */
const INTENTIONALLY_PARTIAL = new Set(["en-GB"]);

const placeholders = (text) => new Set(text.match(/\{\w+\}/g) ?? []);

/** Loads the two modules through esbuild so the checker reads the real source. */
async function loadStrings() {
	const { outputFiles } = await build({
		stdin: {
			contents:
				'export { EN } from "./src/lang/strings";\n' +
				'export { TRANSLATIONS } from "./src/lang/translations";\n' +
				'export { LOCALE_NAMES } from "./src/lang/locales";\n',
			resolveDir: root,
			loader: "ts",
		},
		bundle: true,
		format: "esm",
		write: false,
	});

	const source = Buffer.from(outputFiles[0].text).toString("base64");
	return import(`data:text/javascript;base64,${source}`);
}

const { EN, TRANSLATIONS, LOCALE_NAMES } = await loadStrings();
const enKeys = Object.keys(EN);
const errors = [];
const warnings = [];
const notes = [];

/**
 * The languages Obsidian has gained since the snapshot was taken.
 *
 * A warning rather than an error: the plugin still works, it just answers a
 * new language in English. What it needs is a translation added and the
 * snapshot refreshed — and nobody would think to look without this line.
 */
for (const code of OBSIDIAN_LOCALES) {
	if (code !== "en" && !TRANSLATIONS[code]) {
		warnings.push(
			`${code} (${snapshot.languages[code]}): Obsidian offers this language and ` +
				`this plugin has no strings for it — users who pick it get English`,
		);
	}
}

/** And the ones it has caught up on, which stop being exceptions. */
for (const code of AHEAD_OF_HOST) {
	if (OBSIDIAN_LOCALES.has(code)) {
		warnings.push(
			`${code}: Obsidian now ships this language, so it is no longer ahead of the ` +
				`host — drop it from aheadOfHost in scripts/obsidian-languages.json`,
		);
	} else {
		notes.push(`${code} (${LOCALE_NAMES[code] ?? "?"}): ahead of the host, plugin dropdown only`);
	}
}

/**
 * The dropdown and the string table have to agree.
 *
 * They are two lists of the same fact, and either direction of drift is a
 * user-visible bug: a name with no strings is a language the dropdown offers
 * and cannot deliver, and strings with no name are a translation nobody can
 * reach. `en` is in the dropdown by design and has no table entry — it *is*
 * EN — so it is the one allowed difference.
 */
const named = new Set(Object.keys(LOCALE_NAMES));
for (const code of Object.keys(TRANSLATIONS)) {
	if (!named.has(code)) {
		errors.push(`${code}: has translations but no entry in LOCALE_NAMES, so nothing can select it`);
	}
}
for (const code of named) {
	if (code !== "en" && !TRANSLATIONS[code]) {
		errors.push(`${code}: offered by the Language dropdown but has no translations`);
	}
}

/**
 * The translated guides, which are shipped per locale like the strings are.
 *
 * `en-GB` is exempt: the English README is already its guide, and a second
 * near-identical copy of it would go stale rather than help.
 */
const DOCS_EXEMPT = new Set(["en", "en-GB"]);
let documented = new Set();
try {
	documented = new Set(
		readdirSync(resolve(root, "docs/i18n"))
			.map((name) => /^README\.(.+)\.md$/.exec(name)?.[1])
			.filter(Boolean),
	);
} catch {
	warnings.push("docs/i18n: not readable, skipping the guide check");
}
if (documented.size) {
	for (const code of Object.keys(TRANSLATIONS)) {
		if (!DOCS_EXEMPT.has(code) && !documented.has(code)) {
			warnings.push(`${code}: translated strings but no docs/i18n/README.${code}.md`);
		}
	}
}

for (const [code, strings] of Object.entries(TRANSLATIONS)) {
	if (!OBSIDIAN_LOCALES.has(code) && !AHEAD_OF_HOST.has(code)) {
		errors.push(
			`${code}: not a language Obsidian ships — add it to aheadOfHost in ` +
				`scripts/obsidian-languages.json if that is deliberate`,
		);
	}

	for (const [key, value] of Object.entries(strings)) {
		if (!(key in EN)) {
			errors.push(`${code}.${key}: no such key in EN`);
			continue;
		}
		if (typeof value !== "string" || !value.trim()) {
			errors.push(`${code}.${key}: empty value`);
			continue;
		}

		const expected = placeholders(EN[key]);
		const actual = placeholders(value);
		const missing = [...expected].filter((p) => !actual.has(p));
		const extra = [...actual].filter((p) => !expected.has(p));
		if (missing.length || extra.length) {
			const detail = [
				missing.length ? `missing ${missing.join(", ")}` : "",
				extra.length ? `unexpected ${extra.join(", ")}` : "",
			]
				.filter(Boolean)
				.join("; ");
			errors.push(`${code}.${key}: placeholder mismatch (${detail})`);
		}
	}

	const untranslated = enKeys.filter((key) => !(key in strings));
	if (untranslated.length && !INTENTIONALLY_PARTIAL.has(code)) {
		warnings.push(
			`${code}: ${untranslated.length}/${enKeys.length} keys fall back to English ` +
				`(${untranslated.join(", ")})`,
		);
	}
}

const locales = Object.keys(TRANSLATIONS).length;
for (const note of notes) console.log(`note     ${note}`);
for (const warning of warnings) console.warn(`warning  ${warning}`);
for (const error of errors) console.error(`error    ${error}`);

if (errors.length) {
	console.error(`\n${errors.length} error(s) across ${locales} locales.`);
	process.exit(1);
}

console.log(
	`\n${locales} locales × ${enKeys.length} keys checked against Obsidian ` +
		`${snapshot.obsidianVersion} (${OBSIDIAN_LOCALES.size} languages), no errors.`,
);
