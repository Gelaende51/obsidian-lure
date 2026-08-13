#!/usr/bin/env node
/**
 * Recomputes the AI-disclosure usage line in README.md from the actual
 * Claude Code session transcripts for this project.
 *
 * The figures are a factual claim on a public page, and hand-written ones
 * go stale the moment another session runs — this session found the README
 * still quoting totals from five days and several sessions earlier. Run it
 * before a release, or whenever the disclosure is worth trusting:
 *
 *   node .dev/usage-stats.mjs          # rewrite the line
 *   node .dev/usage-stats.mjs --check  # exit 1 if it is out of date
 *
 * Transcripts live outside the repo, under ~/.claude/projects/<slug>/, so
 * only someone with this machine's history can refresh the numbers. That is
 * the point: nobody else can honestly restate them.
 *
 * The figure can never be exact. Writing it is itself part of a session, so
 * the committed line always trails reality by the turns that committed it —
 * and `--check` reports stale for as long as a session is open against this
 * project. Both are why every number carries a "~". Run it as the last step
 * before a release and take the snapshot; don't chase the last few thousand
 * tokens, and don't wire it into `npm run build`, where it would fail for
 * anyone who doesn't have this machine's history.
 */

import { createReadStream, readFileSync, writeFileSync, readdirSync, existsSync } from "fs";
import { createInterface } from "readline";
import { join, resolve, dirname } from "path";
import { homedir } from "os";
import { fileURLToPath } from "url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

/**
 * Claude Code names each project's transcript folder after its path with
 * every non-alphanumeric character replaced by "-" — separators, spaces and
 * underscores alike. Rather than encode that guess, normalise both sides and
 * match, so a change to the scheme shows up as "not found" instead of
 * silently reporting zero.
 */
const normalise = (s) => s.replace(/[^A-Za-z0-9]+/g, "-").toLowerCase();
const projects = join(homedir(), ".claude", "projects");
const wanted = normalise(root);
const match = existsSync(projects)
	? readdirSync(projects).find((name) => normalise(name) === wanted)
	: undefined;
const dir = match ? join(projects, match) : undefined;

if (!dir || !existsSync(dir)) {
	console.error(`No transcript folder for ${root} under ${projects}.`);
	process.exit(2);
}

const totals = { output: 0, input: 0, cacheWrite: 0, cacheRead: 0 };
const models = new Map();
let responses = 0;
let first = null;
let last = null;

const files = readdirSync(dir).filter((f) => f.endsWith(".jsonl"));
for (const file of files) {
	const stream = createInterface({ input: createReadStream(join(dir, file)), crlfDelay: Infinity });
	for await (const line of stream) {
		if (!line.trim()) continue;
		let row;
		try {
			row = JSON.parse(line);
		} catch {
			continue; // a truncated final line in a live session is normal
		}
		const usage = row?.message?.usage;
		const model = row?.message?.model;
		if (row?.timestamp) {
			const at = new Date(row.timestamp);
			if (!first || at < first) first = at;
			if (!last || at > last) last = at;
		}
		if (!usage || !model || model === "<synthetic>") continue;
		responses++;
		models.set(model, (models.get(model) ?? 0) + 1);
		totals.output += usage.output_tokens ?? 0;
		totals.input += usage.input_tokens ?? 0;
		totals.cacheWrite += usage.cache_creation_input_tokens ?? 0;
		totals.cacheRead += usage.cache_read_input_tokens ?? 0;
	}
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
	"ten", "eleven", "twelve"];

/** "3–10 Aug 2026", collapsing to one date when a project ran in a single day. */
function range(a, b) {
	const sameMonth = a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear();
	const tail = `${MONTHS[b.getMonth()]} ${b.getFullYear()}`;
	if (a.getDate() === b.getDate() && sameMonth) return `${a.getDate()} ${tail}`;
	if (sameMonth) return `${a.getDate()}–${b.getDate()} ${tail}`;
	return `${a.getDate()} ${MONTHS[a.getMonth()]} – ${b.getDate()} ${tail}`;
}

const millions = (n) => `${(n / 1e6).toFixed(1)} M`;
const sent = totals.input + totals.cacheWrite;
const all = totals.output + sent + totals.cacheRead;
const sessions = files.length;
const sessionWord = sessions < WORDS.length ? WORDS[sessions] : String(sessions);

// Escaped tildes, not bare ones. Markdown — GitHub's and the community
// site's alike — reads a *single* tilde as a strikethrough delimiter, so five
// approximation signs on one line pair up and strike the text between the
// first and the last. The disclosure rendered as a correction of itself on
// the plugin's public page until this was escaped. `\~` renders as `~`.
const line =
	`- **Usage** — ${range(first, last)}, ${sessionWord} sessions, ` +
	`\\~${responses.toLocaleString("en-US")} responses: \\~${millions(totals.output)} tokens generated, ` +
	`\\~${millions(sent)} sent, \\~${millions(totals.cacheRead)} cached re-reads (\\~${millions(all)} total).`;

const readme = join(root, "README.md");
const text = readFileSync(readme, "utf8");
const pattern = /^- \*\*Usage\*\* — .*$/m;
if (!pattern.test(text)) {
	console.error("No '- **Usage** — ' line in README.md; not guessing where it belongs.");
	process.exit(2);
}

const current = text.match(pattern)[0];
if (process.argv.includes("--check")) {
	if (current === line) {
		console.log("usage line is current");
		process.exit(0);
	}
	console.error(`usage line is stale\n  is:     ${current}\n  should: ${line}`);
	process.exit(1);
}

writeFileSync(readme, text.replace(pattern, line));
console.log(line);
console.log(
	`\n(${responses.toLocaleString("en-US")} responses across ${sessions} sessions: ` +
		[...models.entries()].map(([m, n]) => `${m} ${n.toLocaleString("en-US")}`).join(", ") + ")",
);
