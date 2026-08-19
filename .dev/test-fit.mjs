/**
 * The fitting maths, on its own.
 *
 * `src/pathFit.ts` is deliberately free of the DOM, so its rules can be
 * checked without an Obsidian window: no CDP, no vault, no fixture. Widths
 * come from a monospace model here — every character the same — which is
 * what makes "the longest name shrinks first" a statement about characters
 * that a test can actually assert.
 *
 *     node .dev/test-fit.mjs [name filter]
 */

import { build } from "esbuild";

const bundle = await build({
	entryPoints: ["src/pathFit.ts"],
	bundle: true,
	format: "esm",
	write: false,
	logLevel: "silent",
});
const source = bundle.outputFiles[0].text;
const { planFit, shortestUnique, ELLIPSIS } = await import(
	`data:text/javascript;base64,${Buffer.from(source).toString("base64")}`
);

const results = [];
const tests = [];
const test = (name, fn) => tests.push({ name, fn });
const expect = (label, actual, wanted) => {
	const ok =
		typeof wanted === "function" ? wanted(actual) : JSON.stringify(actual) === JSON.stringify(wanted);
	results.push({ ok, label, actual: ok ? "" : JSON.stringify(actual) });
};

/** Every glyph one unit wide, ellipsis included: widths are then just lengths. */
const CHAR = 10;
const even = (text) => text.length * CHAR;

const seg = (full, stage, siblings = []) => ({
	full,
	stage,
	floor: () => shortestUnique(full, siblings),
});

/** What each segment shows, given how much room the row is short by. */
const fit = (segments, overflow, measure = even) => planFit(segments, overflow, measure).texts;

// ----------------------------------------------------------- the easy case

test("a row that fits is left alone", () => {
	const segments = [seg("MyVault", "root"), seg("Documents", "folder"), seg("Report", "name")];
	const plan = planFit(segments, 0, even);
	expect("nothing cut", plan.texts, ["MyVault", "Documents", "Report"]);
	expect("and it says so", plan.overflows, false);
});

// --------------------------------------------------------- stage by stage

test("the opening segment gives way before any folder", () => {
	const segments = [seg("MyVault", "root"), seg("Documents", "folder"), seg("Report", "name")];
	const texts = fit(segments, 3 * CHAR);
	expect("the root is cut", texts[0], `MyV${ELLIPSIS}`);
	expect("the folder is not", texts[1], "Documents");
	expect("the file name is not", texts[2], "Report");
});

test("the opening segment goes all the way to nothing before the folders start", () => {
	const segments = [seg("MyVault", "root"), seg("Documents", "folder"), seg("Report", "name")];
	// More than the root can save by shortening, less than it saves by going.
	const texts = fit(segments, 7 * CHAR);
	expect("the name is gone entirely", texts[0], "");
	expect("the folder still reads in full", texts[1], "Documents");
	expect("and the file name too", texts[2], "Report");
});

test("the file's own name is the last thing cut", () => {
	const segments = [
		seg("MyVault", "root"),
		seg("Documents", "folder"),
		seg("Deliverables", "folder"),
		seg("Quarterly report", "name"),
	];
	// Enough to take the root away and grind both folders to their floor,
	// and then some.
	const texts = fit(segments, 40 * CHAR);
	expect("root gone", texts[0], "");
	expect("folders at their floor", [texts[1], texts[2]], [`Docu${ELLIPSIS}`, `Deli${ELLIPSIS}`]);
	expect("and only then the name", texts[3], `Quarterl${ELLIPSIS}`);
});

// ------------------------------------------------------ longest name first

test("the longest folder shrinks alone until it matches the next longest", () => {
	const segments = [
		seg("Correspondence", "folder"), // 14
		seg("Invoices", "folder"), //  8
		seg("Tax", "folder"), //  3
	];
	const texts = fit(segments, 3 * CHAR);
	expect("the long one pays", texts[0], `Correspond${ELLIPSIS}`);
	expect("the middle one is untouched", texts[1], "Invoices");
	expect("and the short one certainly is", texts[2], "Tax");
});

test("once they are the same length they shrink together", () => {
	const segments = [
		seg("Correspondence", "folder"), // 14
		seg("Invoices", "folder"), //  8
		seg("Tax", "folder"), //  3
	];
	// Six characters of the long one takes it to eight; after that both it
	// and "Invoices" come down a step at a time.
	const texts = fit(segments, 9 * CHAR);
	const kept = texts.map((text) => text.replace(ELLIPSIS, "").length);
	expect("both at the same cap", kept[0], kept[1]);
	expect("and both actually cut", [texts[0], texts[1]].every((t) => t.endsWith(ELLIPSIS)), true);
	expect("the short one never moves", texts[2], "Tax");
});

// ------------------------------------------------------------- the floors

test("a name is not cut into its sibling", () => {
	// Fifteen characters in common, so sixteen are needed to tell them apart
	// — far past the four a folder is otherwise allowed to keep.
	const siblings = ["Correspondence-2025", "Correspondence-alpha"];
	const segments = [
		seg("Correspondence-2025", "folder", siblings),
		seg("Documents", "folder"),
	];
	const texts = fit(segments, 30 * CHAR);
	expect("the distinguishing character survives", texts[0], `Correspondence-2${ELLIPSIS}`);
	expect("the one with no lookalike goes to four", texts[1], `Docu${ELLIPSIS}`);
});

test("names that differ only in their last character are not cut at all", () => {
	const siblings = ["Projects2025", "Projects2026"];
	const segments = [seg("Projects2025", "folder", siblings), seg("Documents", "folder")];
	const texts = fit(segments, 100 * CHAR);
	expect("left whole", texts[0], "Projects2025");
	expect("while its neighbour pays", texts[1], `Docu${ELLIPSIS}`);
});

test("a folder keeps four characters, and a short one keeps all of them", () => {
	const segments = [seg("Documents", "folder"), seg("Tax", "folder"), seg("Home", "folder")];
	const texts = fit(segments, 100 * CHAR);
	expect("cut to four", texts[0], `Docu${ELLIPSIS}`);
	expect("three-letter name untouched", texts[1], "Tax");
	expect("four-letter name untouched", texts[2], "Home");
});

test("the file name keeps eight", () => {
	const segments = [seg("Quarterly report", "name")];
	const texts = fit(segments, 100 * CHAR);
	expect("eight characters and an ellipsis", texts[0], `Quarterl${ELLIPSIS}`);
});

test("a file name at the minimum is left whole", () => {
	const segments = [seg("Invoice", "name"), seg("Untitled", "name")];
	const texts = fit(segments, 100 * CHAR);
	expect("seven characters stay", texts[0], "Invoice");
	expect("eight characters stay", texts[1], "Untitled");
});

// ------------------------------------------------------------- the limits

test("a cut that buys nothing is not made", () => {
	// An ellipsis wider than the run of characters it replaces: shortening
	// here would cost information and gain no room.
	const wide = (text) => (text.length - 1) * CHAR + (text.endsWith(ELLIPSIS) ? 10 * CHAR : 0);
	const segments = [seg("Documents", "folder")];
	expect("left in full", fit(segments, 3 * CHAR, wide), ["Documents"]);
});

test("a row that cannot be made to fit says so", () => {
	const segments = [seg("MyVault", "root"), seg("Tax", "folder"), seg("Invoice", "name")];
	const plan = planFit(segments, 100 * CHAR, even);
	expect("the root did what it could", plan.texts[0], "");
	expect("the rest is already at its floor", [plan.texts[1], plan.texts[2]], ["Tax", "Invoice"]);
	expect("and the row overflows", plan.overflows, true);
});

// ---------------------------------------------------------------------- run

const filter = process.argv[2];
for (const { name, fn } of tests) {
	if (filter && !name.includes(filter)) continue;
	const at = results.length;
	try {
		fn();
	} catch (err) {
		results.push({ ok: false, label: `${name} — threw`, actual: err.message });
	}
	const failed = results.slice(at).filter((r) => !r.ok).length;
	console.log(`${failed ? "✗" : "✓"} ${name}`);
	for (const r of results.slice(at).filter((r) => !r.ok)) {
		console.log(`    ${r.label}: got ${r.actual}`);
	}
}

const failed = results.filter((r) => !r.ok).length;
console.log(`\n${results.length - failed}/${results.length} assertions passed`);
process.exit(failed ? 1 : 0);
