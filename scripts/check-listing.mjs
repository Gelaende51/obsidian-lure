#!/usr/bin/env node
/**
 * Validates listing.json, and — with --remote — tells you whether the live
 * listing still agrees with it.
 *
 * The community site keeps a handful of fields that manifest.json has nowhere
 * to put: tags, a long description, a pricing model, a listing icon. They are
 * edited in a form at community.obsidian.md/account/plugins/<id>/edit and
 * saved with a PATCH that authenticates by session cookie. There is no token,
 * so nothing here can write them for you. What it can do is keep the intended
 * values in the source tree, refuse the ones the site would reject, and say
 * plainly when the site has drifted from them.
 *
 *   node scripts/check-listing.mjs           validate the file
 *   node scripts/check-listing.mjs --remote  and diff it against the listing
 *
 * Exit: 0 agreed, 1 the file is wrong, 2 the file is fine but the site is out
 * of date. `publish` relies on that 2.
 */
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { MAX_TAGS, PRICING_VALUES, TAGS } from "./obsidian-listing-tags.mjs";

const root = fileURLToPath(new URL("..", import.meta.url));
const manifest = JSON.parse(readFileSync(root + "manifest.json", "utf8"));

/**
 * Every field the edit form sends, with the limit the form enforces and the
 * value it holds when nothing has been chosen. `derived` fields are filled in
 * from the manifest by the site itself and must not be repeated here.
 */
export const FIELDS = {
	tags: { default: [], max: MAX_TAGS },
	pricing: { default: "free", oneOf: PRICING_VALUES },
	payment_description: { default: "", maxLength: 1000 },
	long_desc: { default: "", maxLength: 1000 },
	short_desc: { derived: "description", maxLength: 200 },
	lucide_icon_name: { default: null },
	icon_color: { default: null, pattern: /^#[0-9a-fA-F]{6}$/ },
};

const errors = [];
const notes = [];

const path = root + "listing.json";
if (!existsSync(path)) {
	console.log("no listing.json — nothing to check");
	process.exit(0);
}
const listing = JSON.parse(readFileSync(path, "utf8"));

// Keys beginning with _ are notes to whoever opens the file. JSON has no
// comments and this file is read by nothing but these scripts, so they are the
// cheapest way to keep the explanation next to the value it explains.
const set = Object.fromEntries(Object.entries(listing).filter(([k]) => !k.startsWith("_")));

for (const [key, value] of Object.entries(set)) {
	const field = FIELDS[key];
	if (!field) {
		errors.push(`unknown field "${key}" — the form has no such control`);
		continue;
	}
	if (field.derived) {
		if (value !== manifest[field.derived])
			errors.push(
				`"${key}" disagrees with manifest.${field.derived}. The site fills this in from the manifest; keeping a second copy here means one of them is wrong.`,
			);
		else notes.push(`"${key}" repeats manifest.${field.derived} — remove it`);
		continue;
	}
	if (key === "tags") {
		if (!Array.isArray(value)) errors.push(`"tags" must be an array`);
		else {
			if (value.length > field.max) errors.push(`${value.length} tags; the form allows ${field.max}`);
			for (const tag of value)
				if (!(tag in TAGS))
					errors.push(
						`"${tag}" is not a tag the site knows. node scripts/obsidian-listing-tags.mjs lists them.`,
					);
			if (new Set(value).size !== value.length) errors.push(`"tags" repeats a value`);
		}
		continue;
	}
	if (field.oneOf && !field.oneOf.includes(value))
		errors.push(`"${key}" must be one of ${field.oneOf.join(", ")}`);
	if (field.maxLength && typeof value === "string" && value.length > field.maxLength)
		errors.push(`"${key}" is ${value.length} characters; the form allows ${field.maxLength}`);
	if (field.pattern && value != null && !field.pattern.test(value))
		errors.push(`"${key}" does not look like ${field.pattern}`);
	if (JSON.stringify(value) === JSON.stringify(field.default))
		notes.push(`"${key}" is the default (${JSON.stringify(field.default)}) — remove it`);
}

// payment_description only means anything when something is paid for.
const pricing = set.pricing ?? FIELDS.pricing.default;
if (pricing !== "free" && !set.payment_description)
	errors.push(`pricing is "${pricing}" but payment_description is empty`);
if (pricing === "free" && set.payment_description)
	errors.push(`payment_description is set but pricing is "free", so the form will not show it`);
if ((set.lucide_icon_name == null) !== (set.icon_color == null))
	notes.push(`lucide_icon_name and icon_color are set as a pair; one without the other is half an icon`);

for (const e of errors) console.log(`  error: ${e}`);
for (const n of notes) console.log(`  note:  ${n}`);
if (errors.length) {
	console.log(`\nlisting.json: ${errors.length} problem${errors.length === 1 ? "" : "s"}`);
	process.exit(1);
}
console.log(`listing.json is valid${notes.length ? ` (${notes.length} note${notes.length === 1 ? "" : "s"})` : ""}`);

if (!process.argv.includes("--remote")) process.exit(0);

// --- what the site actually shows ----------------------------------------
//
// Read from the public listing, not the admin page: the public page needs no
// session, and it is what a user sees, which is the thing worth checking.

const url = `https://community.obsidian.md/plugins/${manifest.id}`;
const res = await fetch(url);
if (!res.ok) {
	console.log(`\ncould not read ${url} (${res.status}) — not published yet?`);
	process.exit(0);
}
const html = await res.text();

// An id with no listing does not 404: the site answers 200 with its generic
// plugin-directory page, whose description is "Discover plugins, themes, and
// more for Obsidian". Comparing against that would report drift that is really
// absence. The "Add to Obsidian" link is the marker that a real entry rendered.
if (!html.includes(`obsidian://show-plugin?id=${manifest.id}`)) {
	console.log(`\n${url} has no listing yet — nothing to compare against`);
	process.exit(0);
}

const unescape = (s) =>
	s.replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");

const liveDesc = unescape(/<meta property="og:description" content="([^"]*)"/.exec(html)?.[1] ?? "");

// The tag chips are one contiguous run of category links. The page mentions
// categories again further down (and repeats itself entirely for hydration),
// so take the first cluster rather than every match.
const hits = [...html.matchAll(/categories=([a-z0-9-]+)/g)].map((m) => [m.index, m[1]]);
const cluster = [];
for (const [at, tag] of hits) {
	if (cluster.length && at - cluster.at(-1)[0] > 2000) break;
	cluster.push([at, tag]);
}
const liveTags = [...new Set(cluster.map(([, t]) => t))].slice(0, MAX_TAGS);

const drift = [];
const wantTags = set.tags ?? [];
if (wantTags.join() !== liveTags.join())
	drift.push(`tags: listing.json says [${wantTags.join(", ")}], the site shows [${liveTags.join(", ")}]`);
if (liveDesc && liveDesc !== manifest.description)
	drift.push(
		`short description: manifest.json says "${manifest.description}", the site shows "${liveDesc}"`,
	);

console.log(`\n${url}`);
if (!drift.length) {
	console.log("  the live listing agrees with the source tree");
	process.exit(0);
}
for (const d of drift) console.log(`  ${d}`);
console.log(`\nUpdate it at https://community.obsidian.md/account/plugins/${manifest.id}/edit`);
process.exit(2);
