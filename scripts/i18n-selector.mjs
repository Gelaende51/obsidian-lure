#!/usr/bin/env node
/**
 * Prints the language line for one document in one language.
 *
 * There is no label in front of it: a row of language names in their own
 * scripts is already unambiguous, and a label has to be translated 45 times to
 * say what the row says by itself.
 *
 *   node scripts/i18n-selector.mjs README de
 *   node scripts/i18n-selector.mjs usage en
 *
 * Every locale the plugin ships gets an entry, named in its own language, so
 * a reader who cannot read the page they landed on can still find their own.
 * The current language is plain text rather than a link to itself.
 *
 * en-GB is deliberately absent: it exists in the plugin only to spell
 * "Centre", and a whole translated README for that would be noise.
 */
export const LANGUAGES = [
	["en", "English"],
	["ar", "العربية"],
	["am", "አማርኛ"],
	["be", "Беларуская"],
	["bn", "বাংলা"],
	["ca", "Català"],
	["cs", "Čeština"],
	["da", "Dansk"],
	["de", "Deutsch"],
	["el", "Ελληνικά"],
	["es", "Español"],
	["fa", "فارسی"],
	["fi", "Suomi"],
	["fr", "Français"],
	["ga", "Gaeilge"],
	["he", "עברית"],
	["hu", "Magyar"],
	["id", "Bahasa Indonesia"],
	["it", "Italiano"],
	["ja", "日本語"],
	["ka", "ქართული"],
	["kh", "ភាសាខ្មែរ"],
	["ko", "한국어"],
	["lv", "Latviešu"],
	["ms", "Bahasa Melayu"],
	["ne", "नेपाली"],
	["nl", "Nederlands"],
	["no", "Norsk"],
	["pl", "Polski"],
	["pt", "Português"],
	["pt-BR", "Português (Brasil)"],
	["ro", "Română"],
	["ru", "Русский"],
	["sa", "संस्कृतम्"],
	["sk", "Slovenčina"],
	["sq", "Shqip"],
	["sr", "Српски"],
	["sv", "Svenska"],
	["th", "ไทย"],
	["tr", "Türkçe"],
	["uk", "Українська"],
	["uz", "Oʻzbekcha"],
	["vi", "Tiếng Việt"],
	["zh", "简体中文"],
	["zh-TW", "繁體中文"],
];


/**
 * `doc` is "README" or "usage"; `lang` the language the page itself is in.
 *
 * The English pages sit at the repository root and in docs/, the translated
 * ones together in docs/i18n/, so the relative paths differ per document and
 * per side of that boundary.
 */
export function selector(doc, lang) {
	const href = (code) => {
		if (code === lang) return null;
		// The English README sits at the repository root, the English usage
		// guide one level down in docs/ — so they reach docs/i18n/ by
		// different paths.
		if (lang === "en") return `${doc === "README" ? "docs/i18n" : "i18n"}/${doc}.${code}.md`;
		if (code === "en") return doc === "README" ? "../../README.md" : "../usage.md";
		return `${doc}.${code}.md`;
	};
	const parts = LANGUAGES.map(([code, name]) => {
		const target = href(code);
		return target ? `[${name}](${target})` : `**${name}**`;
	});
	return parts.join(" · ");
}

import { pathToFileURL } from "node:url";
if (import.meta.url === pathToFileURL(process.argv[1]).href) {
	const [doc = "README", lang = "en"] = process.argv.slice(2);
	console.log(selector(doc, lang));
}
