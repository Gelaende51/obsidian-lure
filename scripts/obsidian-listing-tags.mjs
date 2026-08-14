#!/usr/bin/env node
/**
 * The vocabulary the community site accepts for a listing's tags, and the
 * other closed sets its edit form offers.
 *
 * None of this is documented. It is compiled into the site's own JavaScript,
 * which is where the tables below came from — see `--refresh`, which re-reads
 * them from the live site rather than asking you to trust a copy. Run it when
 * a tag you expect is missing; a listing rejects a tag it does not know, and
 * the failure arrives as a form that will not save.
 *
 *   node scripts/obsidian-listing-tags.mjs            list what is committed
 *   node scripts/obsidian-listing-tags.mjs --refresh  re-read from the site
 *
 * Read from https://community.obsidian.md on 14 Aug 2026.
 */

/** How many tags one listing may carry. The form counts down from this. */
export const MAX_TAGS = 3;

/** `pricing` on the edit form. `free` is the default and means what it says. */
export const PRICING_VALUES = ["free", "paid", "optional-payment"];

/**
 * Every tag, by the value the site stores. `group` is the heading it appears
 * under in the picker; it is not itself selectable, though several groups do
 * have a same-named tag inside them (`data`, `formats`, `writing`, …).
 */
export const TAGS = {
	// appearance
	appearance: { label: "Appearance", icon: "palette", group: "appearance" },
	emoji: { label: "Emoji", icon: "smile", group: "appearance" },
	fonts: { label: "Fonts", icon: "book-type", group: "appearance" },
	icons: { label: "Icons", icon: "shapes", group: "appearance" },
	interface: { label: "Interface", icon: "monitor", group: "appearance" },
	navigation: { label: "Navigation", icon: "binoculars", group: "appearance" },
	rtl: { label: "RTL", icon: "signpost", group: "appearance" },
	sidebar: { label: "Sidebar", icon: "panel-left", group: "appearance" },
	snippets: { label: "Snippets", icon: "scissors", group: "appearance" },
	workspaces: { label: "Workspaces", icon: "panels-top-left", group: "appearance" },
	// data
	backup: { label: "Backup", icon: "archive", group: "data" },
	data: { label: "Data", icon: "database", group: "data" },
	export: { label: "Export", icon: "upload", group: "data" },
	git: { label: "Git", icon: "git-branch", group: "data" },
	import: { label: "Import", icon: "download", group: "data" },
	integrations: { label: "Integrations", icon: "blocks", group: "data" },
	syncing: { label: "Syncing", icon: "refresh-cw", group: "data" },
	// developers
	code: { label: "Code", icon: "code", group: "developers" },
	css: { label: "CSS", icon: "file-code", group: "developers" },
	developers: { label: "Developers", icon: "terminal", group: "developers" },
	theming: { label: "Theming", icon: "paintbrush", group: "developers" },
	// formats
	csv: { label: "CSV", icon: "file-spreadsheet", group: "formats" },
	formats: { label: "Formats", icon: "files", group: "formats" },
	html: { label: "HTML", icon: "code-xml", group: "formats" },
	json: { label: "JSON", icon: "braces", group: "formats" },
	latex: { label: "LaTeX", icon: "sigma", group: "formats" },
	markdown: { label: "Markdown", icon: "file-text", group: "formats" },
	pdf: { label: "PDF", icon: "file-pen", group: "formats" },
	// knowledge
	finance: { label: "Finance", icon: "dollar-sign", group: "knowledge" },
	flashcards: { label: "Flashcards", icon: "layers", group: "knowledge" },
	languages: { label: "Languages", icon: "languages", group: "knowledge" },
	math: { label: "Math", icon: "calculator", group: "knowledge" },
	music: { label: "Music", icon: "music", group: "knowledge" },
	research: { label: "Research", icon: "microscope", group: "knowledge" },
	science: { label: "Science", icon: "flask-conical", group: "knowledge" },
	thinking: { label: "Thinking", icon: "brain", group: "knowledge" },
	ttrpg: { label: "TTRPG", icon: "dices", group: "knowledge" },
	// media
	attachments: { label: "Attachments", icon: "paperclip", group: "media" },
	audio: { label: "Audio", icon: "audio-lines", group: "media" },
	charts: { label: "Charts", icon: "chart-column", group: "media" },
	drawing: { label: "Drawing", icon: "line-squiggle", group: "media" },
	images: { label: "Images", icon: "image", group: "media" },
	ocr: { label: "OCR", icon: "scan-text", group: "media" },
	video: { label: "Video", icon: "video", group: "media" },
	visualization: { label: "Visualization", icon: "chart-pie", group: "media" },
	// organization
	bases: { label: "Bases", icon: "layout-list", group: "organization" },
	calendar: { label: "Calendar", icon: "calendar", group: "organization" },
	canvas: { label: "Canvas", icon: "layout-dashboard", group: "organization" },
	dates: { label: "Dates", icon: "calendar-days", group: "organization" },
	files: { label: "Files", icon: "file", group: "organization" },
	folders: { label: "Folders", icon: "folder-open", group: "organization" },
	graph: { label: "Graph", icon: "network", group: "organization" },
	links: { label: "Links", icon: "link", group: "organization" },
	properties: { label: "Properties", icon: "info", group: "organization" },
	tables: { label: "Tables", icon: "table", group: "organization" },
	tags: { label: "Tags", icon: "tag", group: "organization" },
	tasks: { label: "Tasks", icon: "square-check", group: "organization" },
	// sharing
	collaboration: { label: "Collaboration", icon: "users-round", group: "sharing" },
	publishing: { label: "Publishing", icon: "send", group: "sharing" },
	// workflow
	ai: { label: "AI", icon: "bot", group: "workflow" },
	annotation: { label: "Annotation", icon: "highlighter", group: "workflow" },
	autocomplete: { label: "Autocomplete", icon: "text-cursor-input", group: "workflow" },
	automation: { label: "Automation", icon: "workflow", group: "workflow" },
	commands: { label: "Commands", icon: "command", group: "workflow" },
	hotkeys: { label: "Hotkeys", icon: "keyboard", group: "workflow" },
	review: { label: "Review", icon: "clipboard-check", group: "workflow" },
	search: { label: "Search", icon: "search", group: "workflow" },
	templating: { label: "Templating", icon: "files", group: "workflow" },
	utilities: { label: "Utilities", icon: "wrench", group: "workflow" },
	vim: { label: "Vim", icon: "text-cursor", group: "workflow" },
	// writing
	editing: { label: "Editing", icon: "pen-line", group: "writing" },
	footnotes: { label: "Footnotes", icon: "asterisk", group: "writing" },
	formatting: { label: "Formatting", icon: "heading-1", group: "writing" },
	outlining: { label: "Outlining", icon: "list-tree", group: "writing" },
	syntax: { label: "Syntax", icon: "hash", group: "writing" },
	writing: { label: "Writing", icon: "pen-tool", group: "writing" },
};

/** The groups, in the order the picker shows them. */
export const GROUPS = [...new Set(Object.values(TAGS).map((t) => t.group))].sort();

// --- refreshing -----------------------------------------------------------
//
// The site is a Next.js app whose chunk filenames are content-hashed, so there
// is no stable URL to fetch. The route below is stable, though, and its HTML
// names its chunks — one of which carries the tag table as an object literal.
// Scraping is not nice, but the alternative is a list that quietly rots, and a
// stale list fails at the one moment you cannot fix it.

const SITE = "https://community.obsidian.md";
// Chunks are served only to something that looks like a browser; without this
// every request comes back 403.
const UA =
	"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36";
const ENTRY = /(\w+):\{label:"([^"]+)",icon:"([^"]+)",parent:"(\w+)"\}/g;

// The search route, specifically: it is the one page that renders the tag
// filter, so it is the only one whose chunk list reaches the table. /plugins
// and an individual listing both come back empty.
export async function fetchTags(page = "/search?type=plugin") {
	const html = await (await fetch(SITE + page, { headers: { "User-Agent": UA } })).text();
	const chunks = [...new Set(html.match(/\/_next\/static\/chunks\/[A-Za-z0-9_-]+\.js/g) ?? [])];
	for (const chunk of chunks) {
		const js = await (await fetch(SITE + chunk, { headers: { "User-Agent": UA } })).text();
		const found = [...js.matchAll(ENTRY)];
		// The icon library in another chunk also defines things called
		// "folders"; requiring a plausible table size keeps that out.
		if (found.length < 20) continue;
		const pricing = /PRICING_VALUES",0,\[([^\]]+)\]/.exec(js);
		return {
			chunk,
			tags: Object.fromEntries(
				found.map(([, key, label, icon, group]) => [key, { label, icon, group }]),
			),
			pricing: pricing ? JSON.parse(`[${pricing[1]}]`) : null,
		};
	}
	return null;
}

import { pathToFileURL } from "node:url";
// argv[1] is absent under `node -e`, where this file is only ever imported.
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
	if (process.argv.includes("--refresh")) {
		const live = await fetchTags();
		if (!live) {
			console.error("Could not find the tag table. The site's build shape may have changed.");
			process.exit(1);
		}
		const added = Object.keys(live.tags).filter((k) => !(k in TAGS));
		const removed = Object.keys(TAGS).filter((k) => !(k in live.tags));
		const changed = Object.keys(live.tags).filter(
			(k) => TAGS[k] && (TAGS[k].label !== live.tags[k].label || TAGS[k].group !== live.tags[k].group),
		);
		console.log(`read ${Object.keys(live.tags).length} tags from ${live.chunk}`);
		if (live.pricing && live.pricing.join() !== PRICING_VALUES.join())
			console.log(`  pricing changed: ${live.pricing.join(", ")}`);
		for (const k of added) console.log(`  + ${k} (${live.tags[k].group})`);
		for (const k of removed) console.log(`  - ${k}`);
		for (const k of changed) console.log(`  ~ ${k}: ${JSON.stringify(live.tags[k])}`);
		if (!added.length && !removed.length && !changed.length) console.log("  unchanged");
		else console.log("\nUpdate TAGS in this file to match.");
	} else {
		for (const group of GROUPS) {
			const inGroup = Object.entries(TAGS).filter(([, t]) => t.group === group);
			console.log(`${group}: ${inGroup.map(([k]) => k).join(", ")}`);
		}
		console.log(`\n${Object.keys(TAGS).length} tags, at most ${MAX_TAGS} per listing`);
	}
}
