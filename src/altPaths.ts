import { App, FileSystemAdapter, TFile, normalizePath } from "obsidian";
import { link, lstat, mkdir, readlink, symlink, unlink } from "fs/promises";
import { dirname, join, relative, resolve } from "path";
import { lstatSync } from "fs";

/**
 * A note's other paths: alias paths written in its frontmatter, hard and
 * symbolic links on disk, and Obsidian's own aliases.
 *
 * The frontmatter list `paths` is the record. It holds every alias path, and
 * every link this plugin makes together with the note's own path — a hard
 * link shares the frontmatter and a symbolic link reads it, so from either
 * end *the other paths* are the list without the path being looked from.
 * What an entry is gets read off the disk rather than stored: a symbolic
 * link, the same file as the note, or nothing there (an alias path).
 */
export const PATHS_KEY = "paths";

export type OtherPathKind =
	/** Nothing on disk: a path the note answers to. */
	| "alias"
	/** The same file under another name. */
	| "hard"
	/** A link file pointing at the note. */
	| "symbolic"
	/** Seen from a symbolic link: the note it points at. */
	| "target"
	/** One of Obsidian's own aliases, standing in the note's folder. */
	| "name";

export interface OtherPath {
	path: string;
	kind: OtherPathKind;
}

/** What a link is made as, from rename mode. */
export type LinkKind = "alias" | "hard" | "symbolic";

function basePath(app: App): string | null {
	const adapter = app.vault.adapter;
	return adapter instanceof FileSystemAdapter ? adapter.getBasePath() : null;
}

function parentOf(path: string): string {
	const cut = path.lastIndexOf("/");
	return cut < 0 ? "" : path.slice(0, cut);
}

function nameOf(path: string): string {
	return path.slice(path.lastIndexOf("/") + 1);
}

/** The `paths` list of a note, as written, normalized. */
export function listedPaths(app: App, file: TFile): string[] {
	const value: unknown = app.metadataCache.getFileCache(file)?.frontmatter?.[PATHS_KEY];
	const list = Array.isArray(value) ? value : typeof value === "string" ? [value] : [];
	return list.filter((entry): entry is string => typeof entry === "string" && entry.trim() !== "").map((entry) => normalizePath(entry));
}

/** Obsidian's own aliases of a note. */
function nativeAliases(app: App, file: TFile): string[] {
	const value: unknown = app.metadataCache.getFileCache(file)?.frontmatter?.aliases;
	const list = Array.isArray(value) ? value : typeof value === "string" ? [value] : [];
	return list.filter((entry): entry is string => typeof entry === "string" && entry.trim() !== "").map((entry) => entry.trim());
}

/** Rewrites the `paths` list of a note; `change` returns the new list, or null to leave it. */
async function rewritePaths(app: App, file: TFile, change: (list: string[]) => string[] | null): Promise<void> {
	await app.fileManager.processFrontMatter(file, (frontmatter: Record<string, unknown>) => {
		const value = frontmatter[PATHS_KEY];
		const list = (Array.isArray(value) ? value : typeof value === "string" ? [value] : []).filter(
			(entry): entry is string => typeof entry === "string",
		);
		const next = change(list.map((entry) => normalizePath(entry)));
		if (next === null) return;
		if (next.length) frontmatter[PATHS_KEY] = next;
		else delete frontmatter[PATHS_KEY];
	});
}

/** Adds paths to a note's list, each once. */
export async function recordPaths(app: App, file: TFile, add: string[]): Promise<void> {
	await rewritePaths(app, file, (list) => {
		const missing = add.filter((path) => !list.includes(path));
		return missing.length ? [...list, ...missing] : null;
	});
}

/**
 * Makes a second path for a note: an alias path in its frontmatter, or a hard
 * or symbolic link on disk — recorded in `paths` either way. The target must
 * be free; the caller has checked that. Symbolic links are written relative,
 * so they survive the vault being moved.
 */
export async function makeOtherPath(app: App, file: TFile, target: string, kind: LinkKind): Promise<void> {
	if (kind === "alias") {
		await recordPaths(app, file, [target]);
		return;
	}
	const base = basePath(app);
	if (base === null) throw new Error("The vault is not a folder on disk.");
	const from = join(base, file.path);
	const to = join(base, target);
	await mkdir(dirname(to), { recursive: true });
	if (kind === "hard") await link(from, to);
	else await symlink(relative(dirname(to), from), to);
	await recordPaths(app, file, [file.path, target]);
	// A hard link Obsidian has already picked up read the file before the
	// list was written into it.
	const made = app.vault.getAbstractFileByPath(target);
	if (kind === "hard" && made instanceof TFile) await refreshNames(app, [made]);
}

/**
 * Keeps the `paths` lists true as files move and go.
 *
 * Every note listing the old path has it rewritten — once per file on disk,
 * so a hard-linked pair, which shares one frontmatter, is written once. A
 * symbolic link that moved is pointed at its note again, since it is written
 * relative to where it stands.
 */
export async function followRename(app: App, oldPath: string, newPath: string): Promise<void> {
	const base = basePath(app);
	if (base !== null) await repointSymlink(base, oldPath, newPath);
	await rewriteListing(app, oldPath, (list) => list.map((entry) => (entry === oldPath ? newPath : entry)));
}

export async function followDelete(app: App, path: string): Promise<void> {
	await rewriteListing(app, path, (list) => list.filter((entry) => entry !== path));
}

async function rewriteListing(app: App, path: string, change: (list: string[]) => string[]): Promise<void> {
	const base = basePath(app);
	// Grouped by the file on disk: a hard-linked pair shares one frontmatter,
	// so it is written once — and the other names are told, since Obsidian
	// only re-reads the name a write went through.
	const groups = new Map<string, TFile[]>();
	for (const file of app.vault.getMarkdownFiles()) {
		if (!listedPaths(app, file).includes(path)) continue;
		let key = file.path;
		if (base !== null) {
			try {
				const stats = await lstat(join(base, file.path));
				if (!stats.isSymbolicLink()) key = `${stats.dev}:${stats.ino}`;
			} catch {
				continue;
			}
		}
		groups.set(key, [...(groups.get(key) ?? []), file]);
	}
	for (const [first, ...others] of groups.values()) {
		if (!first) continue;
		await rewritePaths(app, first, (list) => (list.includes(path) ? change(list) : null));
		await refreshNames(app, others);
	}
}

/**
 * Has Obsidian read these names again after their file changed through
 * another one. The same text written back through each name is what makes
 * its watcher and its cache notice; nothing on disk changes.
 */
export async function refreshNames(app: App, files: TFile[]): Promise<void> {
	for (const file of files) {
		try {
			await app.vault.modify(file, await app.vault.adapter.read(file.path));
		} catch {
			// A name that went away meanwhile has nothing to refresh.
		}
	}
}

async function repointSymlink(base: string, oldPath: string, newPath: string): Promise<void> {
	const at = join(base, newPath);
	try {
		if (!(await lstat(at)).isSymbolicLink()) return;
		const written = await readlink(at);
		// Written relative to the folder the link stood in before the move.
		const target = resolve(dirname(join(base, oldPath)), written);
		const fresh = relative(dirname(at), target);
		if (fresh === written) return;
		await unlink(at);
		await symlink(fresh, at);
	} catch {
		// A link that cannot be re-pointed stays as it was; the move itself happened.
	}
}

/**
 * Hard and symbolic links in the vault, found by one `lstat` per file.
 *
 * Built in the background on first need and dropped whenever the vault
 * changes, so a lookup never waits on the disk: until a scan has finished it
 * answers with what it knows, and `onReady` redraws when it knows more.
 */
export class DiskLinks {
	/** Paths by the file they are on disk, for files with more than one name. */
	private byInode = new Map<string, string[]>();
	private inodeOf = new Map<string, string>();
	/** Symbolic links by the vault path they point at. */
	private linksTo = new Map<string, string[]>();
	/** Where each symbolic link points. */
	private targetOf = new Map<string, string>();
	private state: "none" | "scanning" | "ready" = "none";
	private generation = 0;

	constructor(
		private readonly app: App,
		private readonly onReady: () => void,
	) {}

	invalidate(): void {
		this.generation += 1;
		this.state = "none";
	}

	private ensure(): void {
		if (this.state !== "none") return;
		this.state = "scanning";
		void this.scan(this.generation);
	}

	private async scan(generation: number): Promise<void> {
		const base = basePath(this.app);
		const byInode = new Map<string, string[]>();
		const inodeOf = new Map<string, string>();
		const linksTo = new Map<string, string[]>();
		const targetOf = new Map<string, string>();
		if (base !== null) {
			const files = this.app.vault.getFiles();
			for (let i = 0; i < files.length; i += 200) {
				await Promise.all(
					files.slice(i, i + 200).map(async (file) => {
						try {
							const at = join(base, file.path);
							const stats = await lstat(at);
							if (stats.isSymbolicLink()) {
								const target = resolve(dirname(at), await readlink(at));
								const within = relative(base, target);
								if (!within || within.startsWith("..") || resolve(base, within) !== target) return;
								const inside = normalizePath(within.split("\\").join("/"));
								targetOf.set(file.path, inside);
								linksTo.set(inside, [...(linksTo.get(inside) ?? []), file.path]);
								return;
							}
							if (stats.nlink < 2) return;
							const key = `${stats.dev}:${stats.ino}`;
							inodeOf.set(file.path, key);
							byInode.set(key, [...(byInode.get(key) ?? []), file.path]);
						} catch {
							// Gone between the listing and the look: nothing to say about it.
						}
					}),
				);
				if (generation !== this.generation) return;
			}
		}
		if (generation !== this.generation) return;
		this.byInode = byInode;
		this.inodeOf = inodeOf;
		this.linksTo = linksTo;
		this.targetOf = targetOf;
		this.state = "ready";
		this.onReady();
	}

	/** Other names of the same file. */
	sameFile(path: string): string[] {
		this.ensure();
		const key = this.inodeOf.get(path);
		return key ? (this.byInode.get(key) ?? []).filter((other) => other !== path) : [];
	}

	/** Symbolic links pointing at a path. */
	linksPointingAt(path: string): string[] {
		this.ensure();
		return this.linksTo.get(path) ?? [];
	}

	/** Where a symbolic link points, or null when the path is not one. */
	targetOfLink(path: string): string | null {
		this.ensure();
		return this.targetOf.get(path) ?? null;
	}
}

/** Every other path of a note, each once, with what it is. */
export function otherPaths(app: App, disk: DiskLinks, file: TFile): OtherPath[] {
	const found = new Map<string, OtherPathKind>();
	const add = (path: string, kind: OtherPathKind): void => {
		if (path !== file.path && !found.has(path)) found.set(path, kind);
	};
	const target = disk.targetOfLink(file.path);
	if (target) add(target, "target");
	for (const path of disk.sameFile(file.path)) add(path, "hard");
	for (const path of disk.linksPointingAt(target ?? file.path)) add(path, "symbolic");
	// A note's own list is short, so what each entry is gets asked of the
	// disk directly rather than waiting on the background scan.
	const base = basePath(app);
	for (const path of listedPaths(app, file)) {
		if (!app.vault.getAbstractFileByPath(path)) {
			add(path, "alias");
			continue;
		}
		let symbolic = disk.targetOfLink(path) !== null;
		if (!symbolic && base !== null) {
			try {
				symbolic = lstatSync(join(base, path)).isSymbolicLink();
			} catch {
				// Gone meanwhile; called what the vault still thinks it is.
			}
		}
		add(path, symbolic ? "symbolic" : "hard");
	}
	const folder = parentOf(file.path);
	for (const alias of nativeAliases(app, file)) add(folder ? `${folder}/${alias}` : alias, "name");
	return [...found].map(([path, kind]) => ({ path, kind }));
}

/** One alias row for the dropdown. */
export interface AliasRow {
	/** The name the row shows. */
	name: string;
	/** The note it stands for. */
	target: string;
	kind: "alias" | "name";
}

/**
 * The aliases the dropdown lists, by folder: path aliases where they point,
 * Obsidian's own aliases beside their note. Built from the metadata cache on
 * first need and dropped when it changes.
 */
export class AliasRows {
	private byFolder: Map<string, AliasRow[]> | null = null;

	constructor(private readonly app: App) {}

	invalidate(): void {
		this.byFolder = null;
	}

	in(folder: string): AliasRow[] {
		this.byFolder ??= this.collect();
		return this.byFolder.get(folder) ?? [];
	}

	/** The note a typed path stands for when it is an alias, or null. */
	resolve(path: string): TFile | null {
		const folder = parentOf(path);
		const name = nameOf(path);
		const bare = name.replace(/\.md$/i, "");
		const row = this.in(folder).find((entry) =>
			entry.kind === "alias" ? entry.name === name : entry.name === bare || entry.name === name,
		);
		const file = row ? this.app.vault.getAbstractFileByPath(row.target) : null;
		return file instanceof TFile ? file : null;
	}

	private collect(): Map<string, AliasRow[]> {
		const byFolder = new Map<string, AliasRow[]>();
		const put = (folder: string, row: AliasRow): void => {
			byFolder.set(folder, [...(byFolder.get(folder) ?? []), row]);
		};
		for (const file of this.app.vault.getMarkdownFiles()) {
			for (const path of listedPaths(this.app, file)) {
				// Links are real files and listed as such; only an alias path
				// has nothing of its own to show.
				if (this.app.vault.getAbstractFileByPath(path)) continue;
				put(parentOf(path), { name: nameOf(path), target: file.path, kind: "alias" });
			}
			const folder = parentOf(file.path);
			for (const alias of nativeAliases(this.app, file)) {
				put(folder, { name: alias, target: file.path, kind: "name" });
			}
		}
		return byFolder;
	}
}
