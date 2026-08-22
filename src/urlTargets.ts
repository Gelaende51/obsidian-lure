/**
 * Recognises the things a user might paste into the path bar that are not
 * a path.
 *
 * Only explicit schemes count. A bare "www.example.com" or "docs/notes" is
 * left alone: folders can be named anything, and guessing that one is a URL
 * would make an ordinary name unreachable. The cost of being wrong here is
 * asymmetric — a missed URL is one more keystroke, a misread folder name is
 * a path you cannot type.
 */

export type UrlTarget =
	/** Opened in Obsidian's own Web viewer where that is on, and in the desktop browser otherwise. */
	| { kind: "web"; href: string }
	/** Handed to Obsidian's own URI handler, which knows about vaults. */
	| { kind: "obsidian"; href: string }
	/** A real filesystem path, already percent-decoded. */
	| { kind: "path"; path: string };

/**
 * A path with the quotes a file manager wrapped it in taken back off.
 *
 * "Copy as path" in Windows Explorer hands out `"C:\\Users\\you\\note.md"`,
 * quotes included, and a shell will do the same for any path with a space in
 * it. Pasted as-is those quotes become part of the name, so the row goes
 * looking for a file that begins with one and finds nothing.
 *
 * Only the double quote, and only as a matching pair around the whole
 * string. It cannot appear in a real name — it is one of the characters
 * Obsidian and Windows both refuse — so removing it can never take away a
 * character that meant something. The single quote is left alone for the
 * opposite reason: it is perfectly legal in a name, and a vault called
 * `L'Éclaire, c'est moi` is not hypothetical.
 */
export function unquotePath(text: string): string {
	const trimmed = text.trim();
	if (trimmed.length < 2) return trimmed;
	if (!trimmed.startsWith('"') || !trimmed.endsWith('"')) return trimmed;
	return trimmed.slice(1, -1).trim();
}

/** Percent-encoding a path bar would otherwise take literally: "%20" is a space, not a folder. */
const ENCODED = /%[0-9a-fA-F]{2}/;

export function classifyTypedTarget(text: string): UrlTarget | null {
	const trimmed = unquotePath(text);
	if (!trimmed) return null;

	if (/^https?:\/\//i.test(trimmed)) return { kind: "web", href: trimmed };
	if (/^obsidian:\/\//i.test(trimmed)) return { kind: "obsidian", href: trimmed };

	if (/^file:\/\//i.test(trimmed)) {
		const path = decodeFileUrl(trimmed);
		return path === null ? null : { kind: "path", path };
	}

	// A path pasted out of a browser or a file manager arrives encoded but
	// without a scheme. Only treated as such when it is already absolute,
	// so a note called "100%20" stays a note.
	if (/^[/\\]/.test(trimmed) && ENCODED.test(trimmed)) {
		return { kind: "path", path: safeDecode(trimmed) };
	}

	return null;
}

/**
 * `file:///home/you/a%20b.md` → `/home/you/a b.md`.
 *
 * Windows drive letters come back as `/C:/…` from the URL parser and the
 * leading slash has to go, or the path is one Node cannot open.
 */
function decodeFileUrl(href: string): string | null {
	try {
		const url = new URL(href);
		const path = safeDecode(url.pathname);
		return /^\/[A-Za-z]:/.test(path) ? path.slice(1) : path;
	} catch {
		return null;
	}
}

/** A stray "%" is not an error worth refusing over — keep the text as typed. */
function safeDecode(text: string): string {
	try {
		return decodeURIComponent(text);
	} catch {
		return text;
	}
}

/**
 * Whether "/" typed here belongs to a scheme rather than to a path.
 *
 * The path bar treats "/" as "commit this segment and descend", which is
 * right for a path and wrong for the only other thing that can be typed
 * into it: `https://…` would descend into a folder called `https:` and the
 * URL could never be typed by hand, only pasted. Anything already carrying
 * a scheme is left alone from that point on.
 */
export function slashBelongsToScheme(valueSoFar: string): boolean {
	return /^[a-z][a-z0-9+.-]*:\/?$/i.test(valueSoFar) || /^[a-z][a-z0-9+.-]*:\/\//i.test(valueSoFar);
}
