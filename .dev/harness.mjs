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
	for (const arg of argv) {
		if (arg === "--verbose" || arg === "-v") verbose = true;
		else if (arg === "--shuffle") shuffled = true;
		else if (arg.startsWith("--shuffle=")) {
			shuffled = true;
			seed = Number(arg.slice("--shuffle=".length));
		} else if (arg.startsWith("--")) continue;
		else if (filter === null) filter = arg;
	}
	if (shuffled && (seed === null || Number.isNaN(seed))) {
		seed = Math.floor(Math.random() * 0xffffffff);
	}
	return { filter, seed, shuffled, verbose };
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
	const { filter, seed, shuffled, verbose } = readArgs(argv);

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
		const chosen = tests.filter((t) =>
			filter ? t.name.toLowerCase().includes(filter.toLowerCase()) : !skip?.(t.name),
		);
		if (shuffled) {
			shuffle(chosen, mulberry32(seed));
			console.log(`order: shuffled — replay with --shuffle=${seed}\n`);
		}

		for (const { name, fn } of chosen) {
			const at = results.length;
			try {
				if (reset) await reset(name);
			} catch (err) {
				results.push({ ok: false, label: `${name} — reset threw`, actual: err.message });
			}
			if (results.length === at) {
				try {
					await fn();
				} catch (err) {
					results.push({ ok: false, label: `${name} — threw`, actual: err.message });
				}
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
		// Repeated at the end on purpose: by the time a long suite has
		// finished, the line at the top has scrolled away, and the seed is
		// the only thing that makes a shuffled failure reproducible.
		if (shuffled) console.log(`order seed: ${seed}`);
		process.exit(failed ? 1 : 0);
	}

	return { test, expect, run, results };
}
