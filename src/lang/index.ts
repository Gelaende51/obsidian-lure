import { EN, PartialStrings, StringKey } from "./strings";
import { TRANSLATIONS } from "./translations";

/**
 * Obsidian stores the chosen UI language here; absent means English.
 *
 * This read is what the community scorecard reports as "Local Storage:
 * persists data in localStorage instead of the Obsidian plugin data APIs".
 * The finding is a pattern match rather than a fact: nothing is persisted
 * here, and none of it is this plugin's data — it is one read of the host's
 * own key. Both alternatives were measured against a live 1.13.7 and are
 * worse:
 *
 * - `moment.locale()` (a documented export) does not round-trip. Obsidian
 *   calls `moment.locale(code)` with its own private fix-ups —
 *   `{zh: "zh-cn", cz: "cs", no: "nb"}` — and moment *keeps the previously
 *   loaded locale* when a code is unknown to it rather than reporting the
 *   miss. Khmer and Amharic have no moment locale at all, so `kh` and `am`
 *   come back as whatever was loaded last. Reading it would silently serve
 *   the wrong language, which is worse than serving English.
 * - `window.i18next.language` is exact, but it is an undocumented internal
 *   and, as of 1.13.7, not defined as a global at all.
 *
 * So this stays until Obsidian exposes the language on its public API.
 */
const LANGUAGE_STORAGE_KEY = "language";

let resolved: PartialStrings | null = null;

/**
 * The language the plugin's own setting asks for, or "" to follow Obsidian.
 *
 * Held here rather than read from the settings object because `t()` is called
 * from module scope in places and has no plugin to ask. `main` pushes the
 * value in on load and the settings tab pushes it again on every change.
 */
let override = "";

/**
 * Points the strings at a language, or back at Obsidian's own.
 *
 * Clears the cache as well as setting the code: the resolution below is
 * memoised for the session, so a setting that changed the code without
 * dropping the memo would take effect on the next reload and not on the row
 * in front of you.
 */
export function setLanguageOverride(code: string): void {
	override = code;
	resolved = null;
}

/**
 * Resolves the active locale, memoised until the setting changes it.
 *
 * The plugin's own setting wins where it is set; otherwise this follows
 * Obsidian, which requires a restart to change language, so there is nothing
 * else to invalidate.
 *
 * Falls back from a regional locale to its base language ("pt-BR" →
 * "pt") before giving up on English, so a regional variant we don't
 * ship still gets a translated UI.
 *
 * The keys in TRANSLATIONS are Obsidian's own language codes, spelling and
 * all — including the two it spells its own way, `kh` for Khmer (BCP 47 says
 * `km`) and `no` for Norwegian. Checked against the language list in 1.13.7:
 * every language Obsidian can be set to has an entry here, `en` being this
 * file's own EN. Two entries, `el` and `sa`, are ahead of the host — it has
 * no code for them yet, so they cost a little bundle and light up on their
 * own if it ever gains one.
 */
function activeStrings(): PartialStrings {
	if (resolved) return resolved;

	let language = override;
	if (!language) {
		try {
			language = window.localStorage.getItem(LANGUAGE_STORAGE_KEY) ?? "";
		} catch {
			// Storage can be unavailable in restricted contexts; English is fine.
			language = "";
		}
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
