import { EN, PartialStrings, StringKey } from "./strings";
import { TRANSLATIONS } from "./translations";

/** Obsidian stores the chosen UI language here; absent means English. */
const LANGUAGE_STORAGE_KEY = "language";

let resolved: PartialStrings | null = null;

/**
 * Resolves the active locale once per session. Obsidian requires a
 * restart to change language, so there's nothing to invalidate.
 *
 * Falls back from a regional locale to its base language ("pt-BR" →
 * "pt") before giving up on English, so a regional variant we don't
 * ship still gets a translated UI.
 */
function activeStrings(): PartialStrings {
	if (resolved) return resolved;

	let language = "";
	try {
		language = window.localStorage.getItem(LANGUAGE_STORAGE_KEY) ?? "";
	} catch {
		// Storage can be unavailable in restricted contexts; English is fine.
		language = "";
	}

	const base = language.split("-")[0];
	resolved = TRANSLATIONS[language] ?? TRANSLATIONS[base] ?? {};
	return resolved;
}

/**
 * Looks up a string in the active locale, falling back to English, and
 * substitutes any {placeholder} params.
 */
export function t(key: StringKey, params?: Record<string, string>): string {
	const template = activeStrings()[key] ?? EN[key];
	if (!params) return template;

	return template.replace(/\{(\w+)\}/g, (match, name: string) =>
		Object.prototype.hasOwnProperty.call(params, name) ? params[name] : match,
	);
}
