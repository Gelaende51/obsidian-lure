/**
 * Verifies the locale table in src/lang/translations.ts against the
 * English source in src/lang/strings.ts.
 *
 * Errors (exit 1):
 *   - a key that doesn't exist in EN (typo, or a renamed string left behind)
 *   - {placeholders} that don't match EN's for that key
 *   - an empty or whitespace-only value
 *   - a locale code Obsidian doesn't ship
 * Warnings (exit 0):
 *   - keys a locale doesn't translate; those fall back to English by design
 *
 * Run with `npm run check:lang`; also runs as part of `npm run build`.
 */
import { build } from "esbuild";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

/**
 * Language codes Obsidian ships in the app — the entries marked complete
 * in obsidianmd/obsidian-translations. Codes still listed there as work in
 * progress are omitted: they can't be selected in Obsidian, so a
 * translation for them would never be read.
 */
const OBSIDIAN_LOCALES = new Set([
	"am", "ar", "be", "bn", "ca", "cs", "da", "de", "el", "en-GB", "es", "fa",
	"fi", "fr", "ga", "he", "hu", "id", "it", "ja", "ka", "kh", "ko", "lv",
	"ms", "ne", "nl", "no", "pl", "pt", "pt-BR", "ro", "ru", "sa", "sk", "sq",
	"sr", "sv", "th", "tr", "uk", "uz", "vi", "zh", "zh-TW",
]);

/** Locales that are partial on purpose, so incompleteness isn't worth a warning. */
const INTENTIONALLY_PARTIAL = new Set(["en-GB"]);

const placeholders = (text) => new Set(text.match(/\{\w+\}/g) ?? []);

/** Loads the two modules through esbuild so the checker reads the real source. */
async function loadStrings() {
	const { outputFiles } = await build({
		stdin: {
			contents:
				'export { EN } from "./src/lang/strings";\n' +
				'export { TRANSLATIONS } from "./src/lang/translations";\n',
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

const { EN, TRANSLATIONS } = await loadStrings();
const enKeys = Object.keys(EN);
const errors = [];
const warnings = [];

for (const code of OBSIDIAN_LOCALES) {
	if (code !== "en" && !TRANSLATIONS[code]) warnings.push(`${code}: no translation at all`);
}

for (const [code, strings] of Object.entries(TRANSLATIONS)) {
	if (!OBSIDIAN_LOCALES.has(code)) {
		errors.push(`${code}: not a language Obsidian ships`);
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
for (const warning of warnings) console.warn(`warning  ${warning}`);
for (const error of errors) console.error(`error    ${error}`);

if (errors.length) {
	console.error(`\n${errors.length} error(s) across ${locales} locales.`);
	process.exit(1);
}

console.log(`\n${locales} locales × ${enKeys.length} keys checked, no errors.`);
