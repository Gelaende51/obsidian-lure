/**
 * One runner for every suite in here.
 *
 * Each suite used to carry its own copy of `results`, `tests`, `test()`,
 * `expect()` and the loop at the bottom — nine copies that had drifted apart
 * in small ways (one filtered case-sensitively, one printed every assertion,
 * one printed only the failures). None of that was a decision; it was where
 * each file happened to land.
 *
 * The copies mattered for a worse reason than duplication. The plugin was
 * reloaded once, before the first case, and the fixtures were built once — so
 * every case inherited whatever the case before it left behind, and how much
 * of that it cleaned up first depended on which one you were looking at. That
 * is why a suite reported different numbers alone than in a combined run, and
 * why the failures moved around between runs: they were reports about the
 * order, not about the code.
 *
 * So the reset belongs to the runner, not to the cases. `createSuite` takes
 * one, calls it before every case, and offers `--shuffle` so that
 * independence is something a run *proves* rather than something the
 * declaration order quietly provides. A shuffled run prints its seed, and the
 * seed replays the order exactly — a failing order is a bug report, not an
 * anecdote.
 */

/**
 * Thrown by a case that cannot ask its question in this environment.
 *
 * Not a failure and not a pass. Some cases here need a *geometric*
 * precondition that no gate in front of the suite can test — the pane must
 * squeeze far enough that the row runs out of air, or narrow enough that
 * the extension has to be given up — and whether it holds depends on the
 * host's font metrics and on how much room the window has. Byte-identical
 * code scored 219/219 and 211/219 an hour apart on the same machine for
 * exactly this reason.
 *
 * Asserting on it made the suite report four detailed, plausible failures
 * about a feature that was working. Skipping says the true thing: the
 * question was not asked. The run's exit code says so too — 2, the same
 * code the gates in front of the writing suites use — so nothing can read
 * a run with unasked questions as a clean one.
 */
export class Skipped extends Error {}

/** Ends the running case as "not askable here", with the reason. */
export function skipCase(why) {
	throw new Skipped(why);
}

/**
 * A small seeded generator, so a shuffled order can be replayed.
 *
 * mulberry32: thirty-two bits of state, no dependencies, and the same
 * sequence everywhere. Nothing here needs statistical quality — it needs to
 * be repeatable from a number a human can copy out of a terminal.
 */
function mulberry32(seed) {
	let a = seed >>> 0;
	return () => {
		a = (a + 0x6d2b79f5) >>> 0;
		let t = Math.imul(a ^ (a >>> 15), 1 | a);
		t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
}

/** Fisher-Yates, in place, from a supplied source of randomness. */
function shuffle(items, random) {
	for (let i = items.length - 1; i > 0; i--) {
		const j = Math.floor(random() * (i + 1));
		[items[i], items[j]] = [items[j], items[i]];
	}
	return items;
}

/**
 * Reads the flags every suite understands.
 *
 * A bare argument is a case filter, matched case-insensitively as a
 * substring — the two spellings that existed before, resolved in favour of
 * the forgiving one.
 */
function readArgs(argv) {
	let filter = null;
	let seed = null;
	let shuffled = false;
	let verbose = false;
	let first = null;
	for (const arg of argv) {
		if (arg === "--verbose" || arg === "-v") verbose = true;
		else if (arg === "--shuffle") shuffled = true;
		else if (arg.startsWith("--shuffle=")) {
			shuffled = true;
			seed = Number(arg.slice("--shuffle=".length));
		} else if (arg.startsWith("--first=")) {
			first = Number(arg.slice("--first=".length));
		} else if (arg.startsWith("--")) continue;
		else if (filter === null) filter = arg;
	}
	if (shuffled && (seed === null || Number.isNaN(seed))) {
		seed = Math.floor(Math.random() * 0xffffffff);
	}
	if (first !== null && (!Number.isFinite(first) || first < 0)) first = null;
	return { filter, seed, shuffled, verbose, first };
}

/**
 * Builds a suite's `test`, `expect` and `run`.
 *
 * `reset` is called before every case with that case's name, and is where a
 * suite puts whatever "a known starting state" means for it — reloading the
 * plugin, closing what a previous case left open, reopening its fixture.
 * A reset that throws fails the case it was preparing rather than the run:
 * one case that cannot be set up should not take the other sixty with it.
 *
 * `teardown` runs once, after every case, and is where the fixtures go.
 *
 * `skip` names cases a plain run leaves out — asked for by name, they run.
 */
export function createSuite({ reset, teardown, skip, argv = process.argv.slice(2) } = {}) {
	const results = [];
	const tests = [];
	const { filter, seed, shuffled, verbose, first } = readArgs(argv);

	const test = (name, fn) => tests.push({ name, fn });

	const expect = (label, actual, wanted) => {
		const ok =
			typeof wanted === "function"
				? wanted(actual)
				: JSON.stringify(actual) === JSON.stringify(wanted);
		results.push({ ok, label, actual: ok ? "" : JSON.stringify(actual) });
		return ok;
	};

	async function run() {
		// `skip` applies only when no filter was given: naming a case
		// explicitly is asking for it, including the ones a plain run leaves
		// out (the external suite parks the two that kill the renderer there).
		const matches = (t) => !!filter && t.name.toLowerCase().includes(filter.toLowerCase());
		// `--first=N` runs the first N cases in declaration order *and*, where
		// a filter was also given, every case it names however far down they
		// are. That pairing is the whole point: a family that passes alone and
		// fails in a full run is failing on something an earlier case leaves
		// behind, and the only way to find which is to keep the family in
		// every run while the prefix in front of it is halved. Without it the
		// question can only be asked by commenting cases out, which is a diff
		// nobody dares keep and an answer nobody can replay.
		const prefix = first === null ? null : tests.filter((t) => !skip?.(t.name)).slice(0, first);
		const chosen =
			prefix === null
				? tests.filter((t) => (filter ? matches(t) : !skip?.(t.name)))
				: tests.filter((t) => prefix.includes(t) || matches(t));
		if (prefix !== null) {
			console.log(
				`order: the first ${prefix.length} case${prefix.length === 1 ? "" : "s"}` +
					(filter ? `, and every case matching "${filter}"` : "") +
					` — ${chosen.length} in all\n`,
			);
		}
		if (shuffled) {
			shuffle(chosen, mulberry32(seed));
			console.log(`order: shuffled — replay with --shuffle=${seed}\n`);
		}

		const skipped = [];
		for (const { name, fn } of chosen) {
			const at = results.length;
			try {
				if (reset) await reset(name);
			} catch (err) {
				results.push({ ok: false, label: `${name} — reset threw`, actual: err.message });
			}
			let why = null;
			if (results.length === at) {
				try {
					await fn();
				} catch (err) {
					// A case that could not be asked here is dropped whole,
					// including whatever it had already asserted on the way to
					// finding out — half a case is not a result either.
					if (err instanceof Skipped) {
						why = err.message;
						results.length = at;
					} else {
						results.push({ ok: false, label: `${name} — threw`, actual: err.message });
					}
				}
			}
			if (why !== null) {
				skipped.push({ name, why });
				console.log(`– ${name}\n    SKIP  ${why}`);
				continue;
			}
			const mine = results.slice(at);
			const failed = mine.filter((r) => !r.ok);
			console.log(`${failed.length ? "✗" : "✓"} ${name}`);
			for (const r of verbose ? mine : failed) {
				console.log(`    ${r.ok ? "PASS" : "FAIL"}  ${r.label}${r.ok ? "" : ` — got ${r.actual}`}`);
			}
		}

		if (teardown) {
			try {
				await teardown();
			} catch (err) {
				console.log(`teardown threw: ${err.message}`);
			}
		}

		const failed = results.filter((r) => !r.ok).length;
		console.log(`\n${results.length - failed}/${results.length} assertions passed`);
		if (skipped.length) {
			console.log(`${skipped.length} case${skipped.length === 1 ? "" : "s"} not askable here:`);
			for (const { name, why } of skipped) console.log(`  – ${name} — ${why}`);
		}
		// Repeated at the end on purpose: by the time a long suite has
		// finished, the line at the top has scrolled away, and the seed is
		// the only thing that makes a shuffled failure reproducible.
		if (shuffled) console.log(`order seed: ${seed}`);
		// 1 for a real failure, 2 for a run that could not ask everything —
		// the same code the environment gates in front of the writing suites
		// exit with, and for the same reason: neither is a green run.
		process.exit(failed ? 1 : skipped.length ? 2 : 0);
	}

	return { test, expect, run, results };
}
