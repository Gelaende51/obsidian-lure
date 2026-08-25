/**
 * Every language this plugin can show, by the code Obsidian uses for it.
 *
 * The names are endonyms, copied from Obsidian's own language menu rather
 * than written fresh, so the plugin's dropdown reads identically to the one
 * in Appearance settings — a reader looking for their language finds the same
 * word in the same place.
 *
 * The codes are Obsidian's too, including the two it spells its own way:
 * `kh` for Khmer, where BCP 47 says `km`, and `no` for Norwegian. Matching
 * the host exactly is what lets `activeStrings()` be a plain index instead of
 * a mapping table nobody maintains.
 *
 * `en` has no entry in TRANSLATIONS — it is `EN` in strings.ts — but it
 * belongs here, because "English" has to be selectable for someone who has
 * set Obsidian to a language they cannot read. It resolves through the same
 * lookup: no table entry, so every key falls back to EN, which is the whole
 * of English.
 *
 * `el` and `sa` are ahead of the host: Obsidian has no code for Greek or
 * Sanskrit yet, so nothing but this dropdown can select them today. They cost
 * a few hundred bytes and start working on their own if it ever gains them.
 * `npm run check:lang` is what notices when that happens — see
 * `scripts/obsidian-languages.json`.
 */
export const LOCALE_NAMES: Record<string, string> = {
	am: "አማርኛ",
	ar: "اَلْعَرَبِيَّةُ",
	be: "беларуская мова",
	bn: "বাংলা",
	ca: "català",
	cs: "čeština",
	da: "Dansk",
	de: "Deutsch",
	el: "Ελληνικά",
	en: "English",
	"en-GB": "English (GB)",
	es: "Español",
	fa: "فارسی",
	fi: "suomi",
	fr: "Français",
	ga: "Gaeilge",
	he: "עברית",
	hu: "Magyar",
	id: "Bahasa Indonesia",
	it: "Italiano",
	ja: "日本語",
	ka: "ქართული",
	kh: "ខ្មែរ",
	ko: "한국어",
	lv: "Latviešu",
	ms: "Bahasa Melayu",
	ne: "नेपाली",
	nl: "Nederlands",
	no: "Norsk",
	pl: "Polski",
	pt: "Português",
	"pt-BR": "Português do Brasil",
	ro: "Română",
	ru: "Pусский",
	sa: "संस्कृतम्",
	sk: "Slovenčina",
	sq: "Shqip",
	sr: "српски језик",
	sv: "Svenska",
	th: "ไทย",
	tr: "Türkçe",
	uk: "Українська",
	uz: "oʻzbekcha",
	vi: "Tiếng Việt",
	zh: "简体中文",
	"zh-TW": "繁體中文",
};

/** What the language setting holds while it is following Obsidian. */
export const FOLLOW_OBSIDIAN = "";
