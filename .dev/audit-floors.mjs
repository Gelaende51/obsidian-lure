#!/usr/bin/env node
/**
 * Checks every name on every path bar for a box wider than the text in it.
 *
 * This is the "atlas" bug's fingerprint. A name is laid out as two parts and
 * each carries a `--lure-floor` — a `min-width` measured from the run it would
 * clip to. When that floor comes out wider than the text the part actually
 * draws, `min-width` holds the box open past its own content and the surplus
 * sits between the two halves, reading as a space: `atlas` drawn as `atl as`.
 *
 * 18fccaf clamped the floor to the content width and fixed the reproducible
 * case. What is left is intermittent — reported as "randomly after some time"
 * — and has resisted reproduction: nineteen pane widths, hover cycles at six
 * more, and a screenshot all came back clean.
 *
 * So this measures rather than guesses, and it is here rather than in the
 * plugin for two reasons. The measurement costs a reflow per part, which is a
 * real price on a path that runs on every resize; and a change to the fitting
 * model justified by a bug nobody has reproduced is exactly the mistake
 * takeaways.md records about `spendAir`.
 *
 *   node .dev/audit-floors.mjs          # every open pane, once
 *   node .dev/audit-floors.mjs --watch  # every second, until Ctrl-C
 *
 * Run it *while the bug is on screen*. A clean report at that moment is itself
 * a finding: it means the gap is not coming from a floor, and the next suspect
 * is the row's own `column-gap`.
 *
 * Requires --remote-debugging-port=9222 and OBSIDIAN_VAULT, like the suites.
 */
import { connect } from "./cdpSession.mjs";

/*
 * A Range, not the canvas the fitter itself uses.
 *
 * `textWidth` predicts a width by asking a 2D context to measure a string in
 * a font it was told about. That prediction is the leading suspect: the
 * context is memoised for the session, and a stale one — a lost GPU context,
 * or a font that finished loading after the first measurement — would answer
 * confidently and wrongly, which is the shape of a bug that appears "after
 * some time". A Range asks the layout engine what it actually painted, so it
 * cannot disagree with the screen.
 */
const AUDIT = `
	const out = [];
	for (const container of document.querySelectorAll(".view-header-title-container[data-lure-on]")) {
		for (const part of container.querySelectorAll(".lure-name-lead, .lure-name-trail")) {
			const box = part.getBoundingClientRect().width;
			const text = part.textContent ?? "";
			if (!text || box <= 0) continue;
			const range = part.ownerDocument.createRange();
			range.selectNodeContents(part);
			const drawn = range.getBoundingClientRect().width;
			range.detach();
			// A part the browser is clipping is *supposed* to be narrower than
			// its text; only the other direction is the fault being looked for.
			const clipped = part.scrollWidth > part.clientWidth + 1;
			// Half a pixel of grace: sub-pixel layout rounds, and a fraction is
			// not a gap anybody can see.
			if (clipped || box <= drawn + 0.5) continue;
			const style = getComputedStyle(part);
			out.push({
				text,
				box: +box.toFixed(2),
				drawn: +drawn.toFixed(2),
				padding: +(box - drawn).toFixed(2),
				floor: style.getPropertyValue("--lure-floor").trim(),
				minWidth: style.minWidth,
				part: part.className,
				row: container.innerText.replace(/\\s+/g, " ").trim(),
			});
		}
	}
	return JSON.stringify(out);
`;

const page = await connect();

async function sweep() {
	const found = JSON.parse(await page.evaluate(AUDIT));
	const when = new Date().toLocaleTimeString();
	if (!found.length) {
		console.log(`${when}  every name fits its box`);
		return false;
	}
	console.log(`\n${when}  ${found.length} name(s) held open past their own text:\n`);
	for (const hit of found) {
		console.log(`  "${hit.text}" in ${hit.part}`);
		console.log(`    box ${hit.box}px, text ${hit.drawn}px, surplus ${hit.padding}px`);
		console.log(`    --lure-floor: ${hit.floor || "(unset)"}, min-width: ${hit.minWidth}`);
		console.log(`    row: ${hit.row}`);
	}
	console.log(
		"\nThe surplus is the gap. A floor at or above the box width is the floor\n" +
			"being the cause; a floor well below it means something else is widening\n" +
			"the box and the fitter is not to blame.\n",
	);
	return true;
}

if (process.argv.includes("--watch")) {
	console.log("watching — run the vault until the gap appears, Ctrl-C to stop\n");
	// eslint-disable-next-line no-constant-condition
	for (;;) {
		await sweep();
		await new Promise((r) => setTimeout(r, 1000));
	}
} else {
	const found = await sweep();
	page.close();
	process.exit(found ? 1 : 0);
}
