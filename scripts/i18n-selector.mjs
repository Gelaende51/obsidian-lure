#!/usr/bin/env node
/**
 * Prints the "read this in other languages" line for one document in one
 * language.
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

/** The label the line itself carries, in each language. */
export const LEAD = {
	en: "Read this in other languages:",
	am: "ይህን በሌሎች ቋንቋዎች ያንብቡ፦",
	ar: "اقرأ هذا بلغات أخرى:",
	be: "Чытаць на іншых мовах:",
	bn: "অন্যান্য ভাষায় পড়ুন:",
	ca: "Llegiu-ho en altres llengües:",
	cs: "Přečtěte si to v jiných jazycích:",
	da: "Læs dette på andre sprog:",
	de: "Diese Datei in anderen Sprachen lesen:",
	el: "Διαβάστε το σε άλλες γλώσσες:",
	es: "Lee esto en otros idiomas:",
	fa: "این را به زبان‌های دیگر بخوانید:",
	fi: "Lue tämä muilla kielillä:",
	fr: "Lire ce fichier dans d'autres langues :",
	ga: "Léigh é seo i dteangacha eile:",
	he: "קראו זאת בשפות אחרות:",
	hu: "Olvasd el más nyelveken:",
	id: "Baca ini dalam bahasa lain:",
	it: "Leggi questo in altre lingue:",
	ja: "他の言語で読む:",
	ka: "წაიკითხეთ სხვა ენებზე:",
	kh: "អានជាភាសាផ្សេង៖",
	ko: "다른 언어로 읽기:",
	lv: "Lasīt citās valodās:",
	ms: "Baca ini dalam bahasa lain:",
	ne: "अन्य भाषाहरूमा पढ्नुहोस्:",
	nl: "Lees dit in andere talen:",
	no: "Les dette på andre språk:",
	pl: "Przeczytaj to w innych językach:",
	pt: "Leia isto noutras línguas:",
	"pt-BR": "Leia isto em outros idiomas:",
	ro: "Citește acest fișier în alte limbi:",
	ru: "Читать на других языках:",
	sa: "अन्यभाषासु पठतु:",
	sk: "Prečítajte si to v iných jazykoch:",
	sq: "Lexoje këtë në gjuhë të tjera:",
	sr: "Прочитајте ово на другим језицима:",
	sv: "Läs detta på andra språk:",
	th: "อ่านในภาษาอื่น:",
	tr: "Bunu başka dillerde okuyun:",
	uk: "Читати іншими мовами:",
	uz: "Buni boshqa tillarda o'qing:",
	vi: "Đọc bản dịch ngôn ngữ khác:",
	zh: "阅读其他语言版本：",
	"zh-TW": "閱讀其他語言版本：",
};

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
	return `**${LEAD[lang] ?? LEAD.en}** ${parts.join(" · ")}`;
}

import { pathToFileURL } from "node:url";
if (import.meta.url === pathToFileURL(process.argv[1]).href) {
	const [doc = "README", lang = "en"] = process.argv.slice(2);
	console.log(selector(doc, lang));
}
