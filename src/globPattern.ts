import picomatch from "picomatch/posix";

/**
 * Glob patterns typed into the path field: `Recipes/*\/cake*`, `Inbox/**\/*.pdf`,
 * `Week {1,2,3}`. Kept free of the vault and the DOM — paths in, answers out.
 */

const GLOB_CHARS = /[*?[\]{}]/;

/** Whether a segment could be a pattern at all. */
export function hasGlobChars(segment: string): boolean {
	return GLOB_CHARS.test(segment);
}

/**
 * Whether a pattern names a finite set of new paths — braces only, no
 * wildcard and no character class — so that Enter may create what it names.
 */
export function createsFiles(pattern: string): boolean {
	return /[{]/.test(pattern) && !/[*?[\]]/.test(pattern);
}

/** The first brace group expanded, the rest left as they are: `{a,b}-{1,2}` → `a-{1,2}`, `b-{1,2}`. */
function expandFirstGroup(pattern: string): string[] | null {
	const open = pattern.indexOf("{");
	if (open < 0) return null;
	let depth = 0;
	let close = -1;
	const cuts: number[] = [];
	for (let i = open; i < pattern.length; i++) {
		const c = pattern[i];
		if (c === "{") depth++;
		else if (c === "}" && --depth === 0) {
			close = i;
			break;
		} else if (c === "," && depth === 1) cuts.push(i);
	}
	if (close < 0 || !cuts.length) return null;
	const inner = pattern.slice(open + 1, close);
	const parts: string[] = [];
	let from = 0;
	for (const cut of cuts) {
		parts.push(inner.slice(from, cut - open - 1));
		from = cut - open;
	}
	parts.push(inner.slice(from));
	return parts.map((part) => pattern.slice(0, open) + part + pattern.slice(close + 1));
}

/**
 * A pattern and its braces opened one group at a time, for the dropdown:
 * `{photo,video}-capture-{1,2}` gives itself, then `photo-capture-{1,2}` and
 * `video-capture-{1,2}`, then the four whole names. At most `limit`.
 */
export function braceSteps(pattern: string, limit = 100): string[] {
	const out = [pattern];
	let level = [pattern];
	while (out.length < limit) {
		const next = level.flatMap((step) => expandFirstGroup(step) ?? []);
		if (!next.length) break;
		out.push(...next);
		level = next;
	}
	return [...new Set(out)].slice(0, limit);
}

/** Whether one name matches one step of a pattern, with or without its extension. */
export function matchesName(pattern: string, name: string, dot: boolean): boolean {
	const isMatch = picomatch(pattern, { nocase: true, dot });
	return isMatch(name) || isMatch(name.replace(/\.[^.]+$/, ""));
}

/** `a{1,2}b{x,y}` → `a1bx`, `a1by`, `a2bx`, `a2by`. Nested braces expand inside out. */
export function expandBraces(pattern: string): string[] {
	const open = pattern.indexOf("{");
	if (open < 0) return [pattern];
	let depth = 0;
	let close = -1;
	const cuts: number[] = [];
	for (let i = open; i < pattern.length; i++) {
		const c = pattern[i];
		if (c === "{") depth++;
		else if (c === "}" && --depth === 0) {
			close = i;
			break;
		} else if (c === "," && depth === 1) cuts.push(i);
	}
	if (close < 0) return [pattern];
	const inner = pattern.slice(open + 1, close);
	const parts: string[] = [];
	let from = 0;
	for (const cut of cuts) {
		parts.push(inner.slice(from, cut - open - 1));
		from = cut - open;
	}
	parts.push(inner.slice(from));
	const head = pattern.slice(0, open);
	const tail = pattern.slice(close + 1);
	return parts.flatMap((part) => expandBraces(head + part + tail));
}

/**
 * The paths a pattern matches, in their order. A path matches with or
 * without its extension, so `Recipes/*cake*` finds `Recipes/Cheesecake.md`
 * the way typing `Cheesecake` finds the note.
 */
export function matchPaths(pattern: string, paths: readonly string[], dot: boolean): string[] {
	const isMatch = picomatch(pattern, { nocase: true, dot });
	return paths.filter((path) => isMatch(path) || isMatch(path.replace(/\.[^./]+$/, "")));
}
