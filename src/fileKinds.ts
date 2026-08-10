/**
 * Extensions whose contents are not text. Used to decide what deserves
 * the "Obsidian may not handle this properly" warning: a binary file is
 * never going to be opened in an editor by accident, so warning about one
 * says nothing useful. A text file Obsidian has no view for is the real
 * hazard — it opens in an editor built for Markdown, where saving can
 * quietly reformat something that isn't.
 *
 * Extension-based on purpose. Sniffing for NUL bytes is the more accurate
 * test, but it costs a read per entry, and this list is consulted once per
 * row of an open dropdown.
 */
const BINARY_EXTENSIONS = new Set([
	// Images
	"png", "jpg", "jpeg", "gif", "bmp", "webp", "avif", "ico", "tif", "tiff",
	"heic", "heif", "psd", "ai", "xcf",
	// Audio
	"mp3", "wav", "m4a", "aac", "ogg", "oga", "opus", "flac", "wma", "3gp",
	// Video
	"mp4", "m4v", "mov", "mkv", "avi", "webm", "ogv", "wmv", "flv",
	// Documents
	"pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "odt", "ods", "odp",
	"epub", "mobi", "azw3",
	// Archives
	"zip", "rar", "7z", "tar", "gz", "bz2", "xz", "zst", "iso", "dmg",
	// Fonts
	"ttf", "otf", "woff", "woff2", "eot",
	// Executables, libraries, data
	"exe", "dll", "so", "dylib", "bin", "dat", "db", "sqlite", "sqlite3",
	"class", "jar", "wasm", "o", "a", "pyc", "pyd",
	// 3D and design
	"blend", "obj", "fbx", "stl", "glb", "gltf", "sketch",
]);

export function isBinaryExtension(extension: string): boolean {
	return BINARY_EXTENSIONS.has(extension.toLowerCase());
}

/**
 * The extensions Obsidian treats as notes. One list, used both to tint
 * these entries in the dropdown and to decide what the external viewer
 * renders by default, so the colour and the behaviour can't disagree.
 */
const MARKDOWN_EXTENSIONS = new Set(["md", "markdown"]);

export function isMarkdownExtension(extension: string): boolean {
	return MARKDOWN_EXTENSIONS.has(extension.toLowerCase());
}

/**
 * Whether opening this file in Obsidian warrants a caution.
 *
 * True only for text files Obsidian has no registered view for — a `.json`
 * or `.css` that "Detect all file extensions" has made visible. Those open
 * in an editor meant for Markdown. Registered types (Markdown, canvas,
 * images, PDF) are handled properly and get nothing; binary types can't be
 * edited into a mess and get nothing either.
 */
export function warnsOnOpen(extension: string, isRegistered: (ext: string) => boolean): boolean {
	if (!extension) return false;
	if (isBinaryExtension(extension)) return false;
	return !isRegistered(extension);
}
