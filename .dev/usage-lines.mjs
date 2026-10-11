/**
 * The AI-disclosure usage line in every translated README, written from the
 * same figures as the English one — so a release needs no translation pass
 * for it.
 *
 * Each language keeps its own sentence; `.dev/usage-lines.json` holds it as a
 * template with the figures taken out, and how that language writes numbers:
 * its digits, decimal mark and grouping, and for Japanese, Korean and Chinese
 * the 万/億 (亿) units those READMEs count in rather than millions. Month names
 * come from the system's own tables (Intl), in the form the sentence uses.
 *
 *   node .dev/usage-lines.mjs --fit   # (re)build the templates from the READMEs as they are
 *
 * --fit reads the figures off the English line, finds each of them in every
 * translated line under every number style it knows, and keeps a template
 * only when rendering it back gives the line exactly. A line it cannot fit
 * is reported and left alone; usage-stats.mjs then skips that language.
 */
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const TEMPLATES = join(root, ".dev", "usage-lines.json");
const I18N = join(root, "docs", "i18n");

/** Digit sets the translations use, by Intl numbering system name. */
const DIGITS = { latn: "0123456789", arab: "٠١٢٣٤٥٦٧٨٩", arabext: "۰۱۲۳۴۵۶۷۸۹", beng: "০১২৩৪৫৬৭৮৯", deva: "०१२३४५६७८९", khmr: "០១២៣៤៥៦៧៨៩", mymr: "၀၁၂၃၄၅၆၇၈၉", thai: "๐๑๒๓๔๕๖๗๘๙", tibt: "༠༡༢༣༤༥༦༧༨༩" };
const DECIMALS = [".", ",", "٫"];
const GROUPS = ["", ",", ".", " ", " ", " ", "٬", "'", "’"];

/** The figures a usage line states, all of them numbers but the months. */
export function figuresOf({ first, last, sessions, responses, output, sent, read, runs, hOutput, hSent }) {
	return {
		fromDay: first.getDate(), fromMonth: first.getMonth(), toDay: last.getDate(), toMonth: last.getMonth(), year: last.getFullYear(),
		sessions, responses, runs,
		// Millions with one decimal, as the English line rounds them, so every
		// language states the same figure.
		output: round1(output / 1e6), sent: round1(sent / 1e6), read: round1(read / 1e6),
		total: round1((output + sent + read) / 1e6), hOutput: round1(hOutput / 1e6), hSent: round1(hSent / 1e6),
	};
}
// As the English line rounds (toFixed), so the two never disagree on a tenth.
const round1 = (m) => Number(m.toFixed(1));
const MILLIONS = ["output", "sent", "read", "total", "hOutput", "hSent"];

function digits(text, set) {
	const d = DIGITS[set];
	return text.replace(/[0-9]/g, (c) => d[+c]);
}
function group(int, sep) {
	return sep ? String(int).replace(/\B(?=(\d{3})+(?!\d))/g, sep) : String(int);
}

/** One number as a language writes it. `kind` is "int", "year" or "M" (millions, one decimal). */
export function formatNumber(value, kind, style) {
	if (kind === "year") return digits(String(value), style.digits);
	if (kind === "int") return digits(group(value, value >= 1e4 || style.groupThousands ? style.group : ""), style.digits);
	if (style.units === "man" || style.units === "man-tight") {
		// 万 is ten thousand and 億 a hundred million: 4057.7 M is 40億5,770万.
		const tight = style.units === "man-tight";
		const man = Math.round(value * 100);
		const oku = Math.floor(man / 1e4), rest = man % 1e4;
		const unit = (n, u) => `${group(n, style.group)}${tight ? "" : " "}${u}`;
		const [OKU, MAN] = style.unitChars;
		const text = oku ? `${unit(oku, OKU)}${rest ? ` ${unit(rest, MAN)}` : ""}` : unit(rest, MAN);
		return digits(text, style.digits);
	}
	if (style.units === "yi") {
		// Chinese: 万 below a hundred million, then 亿 with three decimals.
		const man = Math.round(value * 100);
		const text = man >= 1e4 ? `${(value / 100).toFixed(3)} ${style.unitChars[0]}` : `${group(man, style.group)} ${style.unitChars[1]}`;
		return digits(text, style.digits);
	}
	const [int, frac] = value.toFixed(1).split(".");
	return digits(`${group(+int, style.groupMillions ? style.group : "")}${style.decimal}${frac}`, style.digits);
}

/** A month's name in the form the template asked for. */
function monthName(month, spec) {
	if (spec.names) return spec.names[month];
	if (spec.width === "numeric") return digits(String(month + 1), spec.digits ?? "latn");
	const at = new Date(Date.UTC(2026, month, 15));
	if (spec.width === "short-nodot") return new Intl.DateTimeFormat(spec.locale, { month: "short", timeZone: "UTC" }).format(at).replace(/\.$/, "");
	const f = new Intl.DateTimeFormat(spec.locale, { month: spec.width, ...(spec.withDay ? { day: "numeric" } : {}), timeZone: "UTC" });
	return spec.withDay ? f.formatToParts(at).find((p) => p.type === "month").value : f.format(at);
}

/**
 * Grammar a template cannot hold, because it depends on the figures. Catalan
 * elides "de" and "el" before a vowel sound — d'octubre but de novembre, l'11
 * and l'1 (onze, u) but el 30 — and French writes the first of a month 1er.
 */
const FIXUPS = {
	ca: (line) => line
		.replace(/\b(a|de) (?:l'|el )(\d+)\b/g, (_, p, d) => (d === "1" || d === "11" ? `${p} l'${d}` : `${p === "a" ? "al" : "del"} ${d}`))
		.replace(/\b(al|del) (1|11)\b/g, (_, p, d) => `${p === "al" ? "a" : "de"} l'${d}`)
		.replace(/\bd'(?=[^aeiouàèéíòóúh\s])/gi, "de ")
		.replace(/\bde (?=[aeiouàèéíòóúh])/gi, "d'"),
	fr: (line) => line.replace(/\b(du|au) 1 /g, "$1 1er "),
};

export function render(entry, figures, code) {
	const fix = FIXUPS[code] ?? ((line) => line);
	return fix(renderPlain(entry, figures));
}

function renderPlain(entry, figures) {
	const s = entry.style;
	return entry.template.replace(/\{(\w+)\}/g, (_, key) => {
		if (key === "fromMonth" || key === "toMonth") return monthName(figures[key], entry.month);
		if (MILLIONS.includes(key)) return formatNumber(figures[key], "M", s);
		return formatNumber(figures[key], key === "year" || key.endsWith("Day") ? "year" : "int", s);
	});
}

/** Every translated README's usage line: [code, path, lineIndex, line]. */
export function translatedLines(templates) {
	const out = [];
	for (const name of readdirSync(I18N)) {
		const m = name.match(/^README\.(.+)\.md$/);
		if (!m || !templates[m[1]]) continue;
		const path = join(I18N, name);
		const lines = readFileSync(path, "utf8").split("\n");
		const at = lines.findIndex((l) => l.startsWith(templates[m[1]].lead));
		if (at >= 0) out.push([m[1], path, at, lines[at]]);
	}
	return out;
}

export function loadTemplates() {
	try {
		return JSON.parse(readFileSync(TEMPLATES, "utf8"));
	} catch {
		return {};
	}
}

/** Rewrites every translated line; returns the codes whose line changed (or, with `check`, would). */
export function writeTranslated(figures, { check = false } = {}) {
	const templates = loadTemplates();
	const changed = [];
	for (const [code, path, at, line] of translatedLines(templates)) {
		const next = render(templates[code], figures, code);
		if (next === line) continue;
		changed.push(code);
		if (check) continue;
		const lines = readFileSync(path, "utf8").split("\n");
		lines[at] = next;
		writeFileSync(path, lines.join("\n"));
	}
	return changed;
}

// ------------------------------------------------------------------ fitting

function* styles() {
	for (const d of Object.keys(DIGITS))
		for (const decimal of DECIMALS)
			for (const g of GROUPS)
				for (const groupMillions of [false, true])
					for (const groupThousands of [false, true]) yield { digits: d, decimal, group: g, groupMillions, groupThousands };
	for (const d of ["latn"])
		for (const g of ["", ","]) {
			for (const units of ["man", "man-tight"]) for (const unitChars of [["億", "万"], ["억", "만"]]) yield { digits: d, decimal: ".", group: g, units, unitChars };
			yield { digits: d, decimal: ".", group: g, units: "yi", unitChars: ["亿", "万"] };
			yield { digits: d, decimal: ".", group: g, units: "yi", unitChars: ["億", "萬"] };
		}
}

function monthSpecs(code) {
	const base = INTL_CODE[code] ?? code;
	const locales = [base, `${base}-u-ca-gregory`, `${base}-u-nu-latn`, `${base}-SY`];
	// A table of the README's own comes first: Intl's name can be part of it.
	const specs = MONTH_NAMES[code] ? [{ names: MONTH_NAMES[code] }] : [];
	for (const locale of locales)
		for (const width of ["long", "short", "short-nodot"])
			for (const withDay of [true, false]) {
				try {
					new Intl.DateTimeFormat(locale);
					specs.push({ locale, width, withDay });
				} catch {
					// Not a locale this runtime knows.
				}
			}
	for (const d of Object.keys(DIGITS)) specs.push({ width: "numeric", digits: d });
	return specs;
}

/** README codes that are not the code Intl knows the language by. */
const INTL_CODE = { kh: "km" };

/**
 * Month names Intl has no table for in the form a README uses. Sanskrit's
 * Intl names are Hindi's with मासः added; the README writes the English
 * names with a closing virama, as Sanskrit Wikipedia does.
 */
const MONTH_NAMES = {
	// Both names, Levantine and Egyptian, as the Arabic README writes them.
	ar: ["كانون الثاني/يناير", "شباط/فبراير", "آذار/مارس", "نيسان/أبريل", "أيار/مايو", "حزيران/يونيو", "تموز/يوليو", "آب/أغسطس", "أيلول/سبتمبر", "تشرين الأول/أكتوبر", "تشرين الثاني/نوفمبر", "كانون الأول/ديسمبر"],
	sa: ["जनवरी", "फेब्रुवरी", "मार्च्", "एप्रिल्", "मे", "जून्", "जुलै", "अगस्त्", "सेप्टेम्बर्", "अक्टोबर्", "नवेम्बर्", "डिसेम्बर्"],
};

/** Replaces `value` in `text` at a place not inside a number, once. */
function cut(text, value, key) {
	const isNum = (c) => c && /[\p{Nd}.,٫٬'’  ]/u.test(c) && c !== " ";
	let from = 0;
	for (;;) {
		const at = text.indexOf(value, from);
		if (at < 0) return null;
		const before = text[at - 1], after = text[at + value.length];
		const digitish = (c) => c && /\p{Nd}/u.test(c);
		if (!digitish(before) && !digitish(after) && !(isNum(after) && digitish(text[at + value.length + 1]))) {
			return text.slice(0, at) + `{${key}}` + text.slice(at + value.length);
		}
		from = at + 1;
	}
}

function fit(code, line, figures) {
	for (const style of styles()) {
		let template = line;
		// Longest first, so 4124.3 is not found inside a longer figure.
		const rendered = Object.keys(figures)
			.filter((k) => !k.endsWith("Month"))
			.map((k) => [k, MILLIONS.includes(k) ? formatNumber(figures[k], "M", style) : formatNumber(figures[k], k === "year" || k.endsWith("Day") ? "year" : "int", style)])
			.sort((a, b) => b[1].length - a[1].length);
		let ok = true;
		for (const [k, text] of rendered) {
			const next = cut(template, text, k);
			if (next === null) { ok = false; break; }
			template = next;
		}
		if (!ok) continue;
		for (const month of monthSpecs(code)) {
			let t = template;
			const a = monthName(figures.toMonth, month), b = monthName(figures.fromMonth, month);
			if (!t.includes(a) || !t.includes(b)) continue;
			t = t.replace(a, "{toMonth}");
			t = t.replace(b, "{fromMonth}");
			const entry = { lead: line.slice(0, line.indexOf("—") + 1), template: t, style, month };
			if (render(entry, figures, code) === line) return entry;
		}
	}
	return null;
}

if (process.argv.includes("--fit")) {
	const figures = figuresInEnglish();
	const templates = {};
	const failed = [];
	for (const name of readdirSync(I18N)) {
		const m = name.match(/^README\.(.+)\.md$/);
		if (!m) continue;
		const lines = readFileSync(join(I18N, name), "utf8").split("\n");
		const line = lines.find((l) => /^- \*\*[^*]+\*\* — /.test(l) && /\{|[\p{Nd}]/u.test(l) && l.includes(formatNumber(figures.runs, "int", { digits: guessDigits(l), group: "" })));
		const entry = line && fit(m[1], line, figures);
		if (entry) templates[m[1]] = entry;
		else failed.push(m[1]);
	}
	writeFileSync(TEMPLATES, JSON.stringify(templates, null, "\t") + "\n");
	console.log(`fitted ${Object.keys(templates).length}; not fitted: ${failed.join(" ") || "none"}`);
}

function guessDigits(line) {
	for (const [set, d] of Object.entries(DIGITS)) if (set !== "latn" && [...d].some((c) => line.includes(c))) return set;
	return "latn";
}

/** The figures the English README states, which the translations were made from. */
function figuresInEnglish() {
	const line = readFileSync(join(root, "README.md"), "utf8").match(/^- \*\*Usage\*\* — .*$/m)[0];
	const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	const d = line.match(/— (\d+) (\w{3}) – (\d+) (\w{3}) (\d{4}), (\d+) sessions, \\~([\d,]+) responses: \\~([\d.]+) M tokens generated, \\~([\d.]+) M sent, \\~([\d.]+) M cached re-reads \(\\~([\d.]+) M total\); plus (\d+) headless translation runs: \\~([\d.]+) M generated, \\~([\d.]+) M sent\./);
	if (!d) throw new Error("the English usage line is not in the shape --fit reads");
	return {
		fromDay: +d[1], fromMonth: MONTHS.indexOf(d[2]), toDay: +d[3], toMonth: MONTHS.indexOf(d[4]), year: +d[5],
		sessions: +d[6], responses: +d[7].replace(/,/g, ""), output: +d[8], sent: +d[9], read: +d[10], total: +d[11],
		runs: +d[12], hOutput: +d[13], hSent: +d[14],
	};
}
