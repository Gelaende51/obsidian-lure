#!/usr/bin/env node
/**
 * How long the suites take on GitHub's runners against this machine, appended
 * to .dev/test-speed.md so the comparison has a history.
 *
 *   node .dev/ci-speed.mjs            # the latest Test run
 *   node .dev/ci-speed.mjs <run id>
 *
 * Local times come from this machine's Claude Code transcripts: every full
 * run of a suite (`node .dev/test-x.mjs` without a name filter) is a tool call
 * with a start and an end, so the median of the latest three is what a suite
 * takes here — including a few seconds of tool overhead, and with Obsidian
 * already running. CI times come from the run's job steps: the suite step
 * alone, and the whole job, which adds checkout, npm ci, the build and
 * downloading and starting Obsidian. The runs are parallel, so the run's wall
 * clock is what the wait for all of them is.
 */
import { appendFileSync, existsSync, readdirSync, readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { homedir } from "node:os";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const REPO = "Gelaende51/obsidian-lure";
const gh = (...a) => JSON.parse(execFileSync("gh", a, { encoding: "utf8", maxBuffer: 64e6 }));
const secs = (a, b) => (new Date(b) - new Date(a)) / 1000;
const fmt = (s) => (s == null ? "—" : s >= 60 ? `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, "0")}` : `${Math.round(s)} s`);
const median = (xs) => { const v = [...xs].sort((a, b) => a - b); return v.length ? v[v.length >> 1] : null; };

// ------------------------------------------------------------------ CI
const runId = process.argv[2] ?? gh("run", "list", "--repo", REPO, "--workflow", "test.yml", "--status", "completed", "--limit", "1", "--json", "databaseId")[0]?.databaseId;
if (!runId) { console.error("no completed Test run"); process.exit(2); }
const run = gh("api", `repos/${REPO}/actions/runs/${runId}`);
const jobs = gh("api", `repos/${REPO}/actions/runs/${runId}/jobs?per_page=100`).jobs;
const ci = {}; // suite -> { earliest, latest, unit } each { step, job, ok }
for (const j of jobs) {
	const m = j.name.match(/^(test-[\w-]+) \(Obsidian (\w+)\)$/) ?? j.name.match(/^unit \((test-[\w-]+)\)$/);
	if (!m) continue;
	const suite = m[1], version = m[2] ?? "node";
	const step = j.steps?.find((s) => s.name === `Run ${suite}` || s.name.includes(`.dev/${suite}.mjs`) || s.name.startsWith("Run node"));
	(ci[suite] ??= {})[version] = {
		step: step?.started_at && step?.completed_at ? secs(step.started_at, step.completed_at) : null,
		job: j.started_at && j.completed_at ? secs(j.started_at, j.completed_at) : null,
		ok: j.conclusion === "success",
	};
}

// --------------------------------------------------------------- local
const norm = (s) => s.replace(/[^A-Za-z0-9]+/g, "-").toLowerCase();
const projects = join(homedir(), ".claude", "projects");
const dir = existsSync(projects) ? readdirSync(projects).find((n) => norm(n) === norm(root)) : null;
const local = {}; // suite -> [{ at, secs, assertions }]
if (dir) {
	for (const f of readdirSync(join(projects, dir)).filter((n) => n.endsWith(".jsonl"))) {
		const open = new Map();
		for (const line of readFileSync(join(projects, dir, f), "utf8").split("\n")) {
			let r;
			try { r = JSON.parse(line); } catch { continue; }
			const content = r?.message?.content;
			if (!Array.isArray(content)) continue;
			for (const b of content) {
				if (b.type === "tool_use" && b.name === "Bash") {
					const cmd = b.input?.command ?? "";
					if ((cmd.match(/node \.dev\/test-/g) ?? []).length !== 1 || /ci-run|test-remote/.test(cmd)) continue;
					const m = cmd.match(/node \.dev\/(test-[a-z]+)\.mjs([^|;&\n]*)/);
					if (!m) continue;
					const rest = m[2].replace(/\d?>&?\d?\S*/g, "").trim();
					if (rest && !rest.startsWith("--shuffle")) continue; // a name filter: part of a suite
					open.set(b.id, { suite: m[1], at: r.timestamp });
				}
				if (b.type === "tool_result" && open.has(b.tool_use_id)) {
					const { suite, at } = open.get(b.tool_use_id);
					open.delete(b.tool_use_id);
					const text = Array.isArray(b.content) ? b.content.map((x) => x.text ?? "").join(" ") : String(b.content ?? "");
					const m = text.match(/(\d+)\/(\d+) assertions passed/);
					if (m) (local[suite] ??= []).push({ at, secs: secs(at, r.timestamp), assertions: +m[2] });
				}
			}
		}
	}
}

// -------------------------------------------------------------- report
const suites = [...new Set([...Object.keys(ci), ...Object.keys(local)])].sort();
const rows = [];
let localSum = 0, ciLongest = 0;
for (const s of suites) {
	const l = (local[s] ?? []).sort((a, b) => a.at.localeCompare(b.at)).slice(-3);
	const lm = median(l.map((x) => x.secs));
	if (lm) localSum += lm;
	const c = ci[s] ?? {};
	const e = c.earliest ?? c.node, t = c.latest;
	for (const x of [e, t]) if (x?.job) ciLongest = Math.max(ciLongest, x.job);
	const ratio = lm && (t?.step ?? e?.step) ? `${((t?.step ?? e?.step) / lm).toFixed(1)}×` : "—";
	const mark = (x) => (x ? `${fmt(x.step)} / ${fmt(x.job)}${x.ok ? "" : " ✗"}` : "—");
	rows.push(`| ${s} | ${l.at(-1)?.assertions ?? "—"} | ${fmt(lm)} | ${mark(e)} | ${mark(t)} | ${ratio} |`);
}
const wall = secs(run.run_started_at ?? run.created_at, run.updated_at);
const out = [
	"",
	`## Run ${runId} — ${run.head_sha.slice(0, 7)}, ${new Date(run.run_started_at ?? run.created_at).toISOString().slice(0, 16).replace("T", " ")} UTC`,
	"",
	"| suite | assertions | here (median of last 3) | CI 1.8.7: suite / job | CI latest: suite / job | CI suite ÷ here |",
	"| --- | --- | --- | --- | --- | --- |",
	...rows,
	"",
	`All suites one after another here: **${fmt(localSum)}**, with the machine taken while they run. On CI they run side by side: the whole run took **${fmt(wall)}** from start to finish (longest job ${fmt(ciLongest)}), and nothing here was used. ✗ marks a job that failed; its time still counts.`,
];
if (!existsSync(join(root, ".dev/test-speed.md"))) {
	appendFileSync(join(root, ".dev/test-speed.md"), "# Test speed: GitHub's runners against this machine\n\nAppended by `node .dev/ci-speed.mjs [run id]`. \"Job\" adds checkout, npm ci, the build and downloading and starting Obsidian to the suite itself.\n");
}
appendFileSync(join(root, ".dev/test-speed.md"), out.join("\n") + "\n");
console.log(out.join("\n"));
