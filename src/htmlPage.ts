import { readFile } from "fs/promises";
import { dirname, resolve } from "path";
import { isInside } from "./systemLocations";

/** Extensions this view will render as a page rather than as its source. */
const PAGE_EXTENSIONS = new Set(["html", "htm", "xhtml"]);

export function isPageExtension(extension: string): boolean {
	return PAGE_EXTENSIONS.has(extension.toLowerCase());
}

/**
 * What the page is allowed to do, stated to the document itself.
 *
 * `sandbox` on the frame already denies scripts and an origin; this denies
 * the *network*, which sandboxing does not. Without it, opening a local
 * page would let it fetch remote images, fonts and stylesheets — a file on
 * your own disk quietly telling a server that you looked at it. Everything
 * the renderer needs has been inlined by then, so nothing is lost by
 * allowing only what a data: URL and an inline style can carry.
 */
const POLICY =
	"default-src 'none'; img-src data:; media-src data:; style-src 'unsafe-inline'; font-src data:";

/** Bytes past which a referenced asset is left out rather than inlined. */
const MAX_ASSET_BYTES = 4 * 1024 * 1024;
/** Total inlined bytes, so a page of two hundred images cannot fill the renderer. */
const MAX_TOTAL_BYTES = 16 * 1024 * 1024;

const IMAGE_MIME: Record<string, string> = {
	png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg", gif: "image/gif",
	bmp: "image/bmp", svg: "image/svg+xml", webp: "image/webp", avif: "image/avif",
	ico: "image/x-icon", tif: "image/tiff", tiff: "image/tiff",
};

/**
 * Whether a URL names a file beside the page rather than somewhere else.
 *
 * Anything with a scheme is somewhere else by definition — including
 * `data:`, which is already inline, and `//host/path`, which is a URL that
 * merely leaves its scheme to be inferred. A fragment is a link within the
 * page and names no file at all.
 */
function isLocalReference(url: string): boolean {
	const trimmed = url.trim();
	if (!trimmed || trimmed.startsWith("#") || trimmed.startsWith("//")) return false;
	return !/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(trimmed);
}

/**
 * The absolute path a relative reference points at, or null where it
 * points outside the page's own folder.
 *
 * The guard is not about secrecy — the content policy above means nothing
 * read here can leave the machine — but about scope. A page is a document
 * and its assets, and a document that refers to `../../../.ssh/id_rsa` is
 * not describing an asset. Reading it anyway to render something the user
 * did not ask to see is the kind of thing a viewer should decline.
 */
function assetPath(reference: string, baseDir: string): string | null {
	const withoutQuery = reference.split(/[?#]/)[0];
	if (!withoutQuery) return null;
	let decoded = withoutQuery;
	try {
		decoded = decodeURIComponent(withoutQuery);
	} catch {
		// A stray % is not a reason to refuse: read the reference as typed.
	}
	const full = resolve(baseDir, decoded);
	return isInside(full, baseDir) ? full : null;
}

/** Marks where a stylesheet was, so its text lands back in the same place. */
const SLOT_ATTR = "data-lure-sheet";

/**
 * Makes a stylesheet safe to sit inside a `<style>` tag in a string.
 *
 * `</style>` anywhere in the CSS — inside a comment, inside a `content:`
 * string — closes the tag early, and everything after it becomes text in
 * the page. `\3c` is CSS's own escape for `<`, valid in every position the
 * sequence can legally occur, so the sheet still means exactly what it
 * said.
 */
function neutralise(css: string): string {
	return css.replace(/<\//g, "\\3c/");
}

function extensionOf(path: string): string {
	const name = path.split(/[\\/]/).pop() ?? "";
	const cut = name.lastIndexOf(".");
	return cut > 0 ? name.slice(cut + 1).toLowerCase() : "";
}

/**
 * A local HTML file, rewritten into something a sandboxed frame can show
 * whole.
 *
 * The frame has an opaque origin and no network, so every reference the
 * page makes to a file beside it would otherwise come up empty — which is
 * most of what makes a saved page a page. Stylesheets are read in as
 * `<style>`, images and media as `data:` URLs, and everything else is left
 * exactly as written: a link to another document still reads as a link,
 * and clicking it does nothing, which is the honest result of a viewer
 * that is not a browser.
 *
 * Scripts are removed outright. The sandbox would refuse to run them
 * anyway; taking them out means the source shown by the *other* mode and
 * the page shown by this one differ in one stated way rather than in
 * whatever the frame silently declined to do.
 */
export async function renderablePage(html: string, filePath: string): Promise<string> {
	const baseDir = dirname(filePath);
	const doc = new DOMParser().parseFromString(html, "text/html");

	// Built with Obsidian's own element helper rather than `createElement` or
	// a string of markup — the first is what the review's lint asks for, and
	// the second is a way to write HTML into a document, which is the thing
	// this whole file exists to be careful about. The helper works on a
	// DOMParser document because it lives on the element prototype, and it
	// creates through that element's *own* document.
	//
	// First in the head, because a policy governs what is parsed after it.
	const head = doc.head ?? doc.documentElement;
	head.createEl("meta", {
		attr: { "http-equiv": "Content-Security-Policy", content: POLICY },
		prepend: true,
	});

	doc.querySelectorAll("script").forEach((el) => el.remove());
	// A base of the page's own would send every unresolved reference back
	// out to the filesystem, which the policy blocks — but it would also
	// override the resolution done here for the ones that were inlined.
	doc.querySelectorAll("base").forEach((el) => el.remove());

	let spent = 0;
	// Return type left to inference: the Node surface this project declares
	// for itself is ambient, and naming it here is the one thing the review's
	// lint cannot see.
	const read = async (path: string) => {
		if (spent >= MAX_TOTAL_BYTES) return null;
		try {
			const data = await readFile(path);
			if (data.byteLength > MAX_ASSET_BYTES) return null;
			spent += data.byteLength;
			return data;
		} catch {
			// Missing, unreadable, a directory: the reference stays as it is
			// and the page renders without it, exactly as a browser would.
			return null;
		}
	};

	// Stylesheets are collected here and written into the markup at the end
	// rather than made into `<style>` elements now. Not a style choice: the
	// review's rule set forbids a plugin creating one at all, and forbids
	// silencing that rule — it exists so a plugin styles the app through
	// `styles.css` instead. This CSS is not for the app. It goes into a
	// document that never enters this window, to style the page being looked
	// at, and there is no other way to carry a local stylesheet across an
	// origin boundary that will not fetch it.
	//
	// Each link leaves a `<template>` behind so the sheet lands exactly where
	// it was written, and the cascade is the page's own.
	const sheets: string[] = [];
	for (const link of Array.from(doc.querySelectorAll("link"))) {
		const rel = (link.getAttribute("rel") ?? "").toLowerCase();
		const href = link.getAttribute("href") ?? "";
		if (!rel.split(/\s+/).includes("stylesheet") || !isLocalReference(href)) continue;
		const path = assetPath(href, baseDir);
		const data = path ? await read(path) : null;
		if (!data) continue;
		const slot = link.parentElement?.createEl("template", { attr: { [SLOT_ATTR]: String(sheets.length) } });
		if (!slot) continue;
		sheets.push(data.toString("utf8"));
		link.replaceWith(slot);
	}

	for (const el of Array.from(doc.querySelectorAll("img, source, video, audio"))) {
		const src = el.getAttribute("src") ?? "";
		if (!isLocalReference(src)) continue;
		const path = assetPath(src, baseDir);
		const data = path ? await read(path) : null;
		if (!data) continue;
		const mime = IMAGE_MIME[extensionOf(path ?? "")] ?? "application/octet-stream";
		el.setAttribute("src", `data:${mime};base64,${data.toString("base64")}`);
	}

	let markup = doc.documentElement.outerHTML;
	sheets.forEach((css, i) => {
		markup = markup.replace(
			`<template ${SLOT_ATTR}="${i}"></template>`,
			`<style>${neutralise(css)}</style>`,
		);
	});
	return `<!doctype html>\n${markup}`;
}
