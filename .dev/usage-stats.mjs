#!/usr/bin/env node
/**
 * Recomputes the AI-disclosure usage line in README.md from what this machine
 * recorded of the work on this project.
 *
 *   node .dev/usage-stats.mjs          # rewrite the line
 *   node .dev/usage-stats.mjs --check  # exit 1 if it is out of date
 *
 * The figures are a factual claim on a public page, so they are counted, not
 * written by hand. What is counted, all through ~/building_stuff/scripts/
 * token-cost.mjs:
 *
 * - **Sessions** — Claude Code transcripts under ~/.claude/projects/<slug>/,
 *   and the subagents' under <session>/subagents/. A response is counted once:
 *   Claude Code writes a row per content block and repeats the whole usage on
 *   every one, so counting rows — which this script did until 1.5.1 — counted
 *   a response with thinking, text and three tool calls five times.
 * - **Headless runs** — `claude -p` jobs (the translations) keep no transcript.
 *   Their runners log each run's usage with headless-log.mjs; they are shown
 *   as their own clause, since they are a different kind of work.
 *
 * What cannot be counted any more. Claude Code deleted transcripts older than
 * 30 days until 2026-09-23, so everything up to the 1.4.0 line is known only
 * from that published line — and it counted rows. ANCHOR holds it; it is scaled
 * down by the ratio of responses to rows (per figure) measured on the
 * transcripts of the same period that survive, and everything after it is
 * counted exactly. The headless runs of 1.4.0 and 1.5.0 were never logged and
 * are not in the figure: it is a floor for them.
 *
 * The figure can never be exact: writing it is itself part of a session, so
 * the committed line always trails reality by the turns that committed it —
 * and `--check` reports stale for as long as a session is open against this
 * project. Both are why every number carries a "~". Run it as the last step
 * before a release; don't wire it into `npm run build`, where it would fail
 * for anyone who doesn't have this machine's history.
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, resolve, dirname } from "path";
import { homedir } from "os";
import { fileURLToPath, pathToFileURL } from "url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const MODULE = join(homedir(), "building_stuff", "scripts", "token-cost.mjs");
if (!existsSync(MODULE)) {
	console.error(`${MODULE} is missing: it reads and prices the transcripts.`);
	process.exit(2);
}
const { responses } = await import(pathToFileURL(MODULE).href);

/**
 * The line as published with 1.4.0, when every transcript since 3 Aug still
 * existed — counted in rows, not responses.
 */
const ANCHOR = {
	at: new Date("2026-09-19T00:45:16+02:00"),
	first: new Date("2026-08-03T12:00:00+02:00"),
	sessions: 20,
	responses: 16460,
	output: 19.9e6,
	sent: 87.0e6,
	read: 5451.0e6,
};

/** Claude Code's folder for this project: every non-alphanumeric character becomes "-". */
const normalise = (s) => s.replace(/[^A-Za-z0-9]+/g, "-").toLowerCase();
const mine = (folder) => normalise(folder) === normalise(root);

const zero = () => ({ responses: 0, output: 0, sent: 0, read: 0 });
const add = (acc, r, times = 1) => {
	acc.responses += times;
	acc.output += r.tokens.output * times;
	acc.sent += (r.tokens.input + r.tokens.write1h + r.tokens.write5m) * times;
	acc.read += r.tokens.read * times;
};
const before = { rows: zero(), once: zero() }; // top-level transcripts up to the anchor
const after = zero(); // everything recorded in sessions after the anchor, and subagents at any time
const headless = zero();
const headlessRuns = new Set();
const sessionsAfter = new Set();
const sessionStart = new Map();
let last = ANCHOR.at;

for await (const r of responses({ projects: mine })) {
	if (r.source === "headless") {
		add(headless, r);
		headlessRuns.add(r.session);
		if (r.at > last) last = r.at;
		continue;
	}
	const sub = r.file.includes("/subagents/");
	if (!sub) {
		const s = sessionStart.get(r.session);
		if (!s || r.at < s) sessionStart.set(r.session, r.at);
	}
	if (r.at > last) last = r.at;
	if (!sub && r.at <= ANCHOR.at) {
		add(before.rows, r, r.rows);
		add(before.once, r);
	} else add(after, r);
}
for (const [session, at] of sessionStart) if (at > ANCHOR.at) sessionsAfter.add(session);

// The anchor, scaled from rows to responses by what the surviving transcripts
// of the same period say about each figure.
const ratio = (k) => (before.rows[k] ? before.once[k] / before.rows[k] : 1);
const total = {
	responses: ANCHOR.responses * ratio("responses") + after.responses,
	output: ANCHOR.output * ratio("output") + after.output,
	sent: ANCHOR.sent * ratio("sent") + after.sent,
	read: ANCHOR.read * ratio("read") + after.read,
};
const sessions = ANCHOR.sessions + sessionsAfter.size;

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function range(a, b) {
	const sameMonth = a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear();
	const tail = `${MONTHS[b.getMonth()]} ${b.getFullYear()}`;
	if (a.getDate() === b.getDate() && sameMonth) return `${a.getDate()} ${tail}`;
	if (sameMonth) return `${a.getDate()}–${b.getDate()} ${tail}`;
	return `${a.getDate()} ${MONTHS[a.getMonth()]} – ${b.getDate()} ${tail}`;
}
const M = (n) => `${(n / 1e6).toFixed(1)} M`;
const round = (n) => Math.round(n / 10) * 10;

// Escaped tildes, not bare ones. Markdown — GitHub's and the community
// site's alike — reads a *single* tilde as a strikethrough delimiter, so five
// approximation signs on one line pair up and strike the text between the
// first and the last. `\~` renders as `~`.
let line =
	`- **Usage** — ${range(ANCHOR.first, last)}, ${sessions} sessions, ` +
	`\\~${round(total.responses).toLocaleString("en-US")} responses: \\~${M(total.output)} tokens generated, ` +
	`\\~${M(total.sent)} sent, \\~${M(total.read)} cached re-reads (\\~${M(total.output + total.sent + total.read)} total)`;
if (headlessRuns.size) {
	line += `; plus ${headlessRuns.size} headless translation runs: \\~${M(headless.output)} generated, \\~${M(headless.sent + headless.read)} sent.`;
} else line += ".";

const readme = join(root, "README.md");
const text = readFileSync(readme, "utf8");
const pattern = /^- \*\*Usage\*\* — .*$/m;
if (!pattern.test(text)) {
	console.error("No '- **Usage** — ' line in README.md; not guessing where it belongs.");
	process.exit(2);
}
const current = text.match(pattern)[0];

if (process.argv.includes("--check")) {
	if (current === line) { console.log("usage line is current"); process.exit(0); }
	console.error(`usage line is stale\n  is:     ${current}\n  should: ${line}`);
	process.exit(1);
}

writeFileSync(readme, text.replace(pattern, line));
console.log(line);
const pctOf = (k) => `${Math.round(ratio(k) * 100)} %`;
console.log(
	`\nThe 1.4.0 line counted rows: kept ${pctOf("responses")} of its responses, ${pctOf("output")} of its output, ` +
		`${pctOf("sent")} of what was sent and ${pctOf("read")} of the cache reads, as measured on ` +
		`${before.once.responses.toLocaleString("en-US")} surviving responses of that period.` +
		`\nSince then: ${after.responses.toLocaleString("en-US")} responses in ${sessionsAfter.size} sessions and their subagents; ` +
		`${headlessRuns.size} headless runs logged.`,
);
