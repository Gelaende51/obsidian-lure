import { Dirent, readdirSync, statSync } from "fs";
import { join, parse, sep } from "path";

/**
 * A directory entry outside the vault. Deliberately the minimum the
 * dropdown needs: there is no TAbstractFile for these, and nothing here
 * is cached — each listing is a fresh readdir, since nothing tells us
 * when a folder we don't own changes.
 */
export interface ExternalChild {
	name: string;
	/** Absolute path. */
	path: string;
	isFolder: boolean;
	/** Name starts with a dot — filtered by the same setting as inside the vault. */
	isDotEntry: boolean;
	/** Lowercase, no leading dot; "" when the name has none. */
	extension: string;
}

/**
 * Direct children of an absolute path, folders first then files, each
 * alphabetical — matching how the vault listing is ordered.
 *
 * Returns [] for anything unreadable rather than throwing: browsing the
 * filesystem walks into permission-denied and disconnected-mount folders
 * as a matter of course, and an empty dropdown is the honest result.
 * Symlinks are resolved with statSync so a linked directory still reads
 * as a folder; a broken one falls back to being listed as a file.
 */
export function listExternalChildren(folderPath: string): ExternalChild[] {
	// Explicit encoding so the Dirent names come back as strings rather
	// than buffers, which is what @types/node infers by default here.
	let entries: Dirent[];
	try {
		entries = readdirSync(folderPath, { withFileTypes: true, encoding: "utf8" });
	} catch (err) {
		return [];
	}

	const children: ExternalChild[] = [];
	for (const entry of entries) {
		const path = join(folderPath, entry.name);
		let isFolder = entry.isDirectory();
		if (entry.isSymbolicLink()) {
			try {
				isFolder = statSync(path).isDirectory();
			} catch (err) {
				isFolder = false;
			}
		}

		children.push({
			name: entry.name,
			path,
			isFolder,
			isDotEntry: entry.name.startsWith("."),
			extension: isFolder ? "" : parse(entry.name).ext.replace(/^\./, "").toLowerCase(),
		});
	}

	return children.sort((a, b) => {
		if (a.isFolder !== b.isFolder) return a.isFolder ? -1 : 1;
		return a.name.localeCompare(b.name);
	});
}

/** Whether an absolute path names a readable directory. */
export function isExternalFolder(path: string): boolean {
	try {
		return statSync(path).isDirectory();
	} catch (err) {
		return false;
	}
}

/** Whether an absolute path names an existing file. */
export function isExternalFile(path: string): boolean {
	try {
		return statSync(path).isFile();
	} catch (err) {
		return false;
	}
}

/** Parent directory of an absolute path, or null once at the filesystem root. */
export function externalParent(path: string): string | null {
	const trimmed = path.length > 1 ? path.replace(/[\\/]+$/, "") : path;
	const { dir, root } = parse(trimmed);
	if (!dir || dir === trimmed) return null;
	// parse("/a").dir is "/", which is a real place to go; parse("/").dir
	// is "" and means we're already as far up as it goes.
	return dir || root || null;
}

/** Splits an absolute path into [root, ...segments] for breadcrumb rendering. */
export function externalSegments(path: string): { root: string; segments: string[] } {
	const { root } = parse(path);
	const rest = path.slice(root.length).replace(/[\\/]+$/, "");
	return { root, segments: rest ? rest.split(/[\\/]+/) : [] };
}

/** Joins an absolute base with a relative remainder, using the platform separator. */
export function externalJoin(base: string, ...parts: string[]): string {
	return join(base, ...parts);
}

export const PATH_SEP = sep;
