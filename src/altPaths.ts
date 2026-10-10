import { App, FileSystemAdapter, TFile, normalizePath } from "obsidian";
import { link, lstat, mkdir, readdir, readlink, symlink, unlink, writeFile } from "fs/promises";
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

/**
 * One list per kind beside `paths`, which is their sum (with the note's own
 * path once it has links). Copies made from a note are its forks, and a copy
 * names the note it was made from as its origin.
 */
export const KIND_KEYS = { alias: "paths-aliases", hard: "paths-hardlinks", symbolic: "paths-symlinks" } as const;
export const FORKS_KEY = "paths-forks";
export const ORIGIN_KEY = "paths-origin";
const ALL_KEYS = [PATHS_KEY, KIND_KEYS.alias, KIND_KEYS.hard, KIND_KEYS.symbolic, FORKS_KEY, ORIGIN_KEY];

function listIn(value: unknown): string[] {
	const list = Array.isArray(value) ? value : typeof value === "string" ? [value] : [];
	return list.filter((entry): entry is string => typeof entry === "string" && entry.trim() !== "").map((entry) => normalizePath(entry));
}

function readKey(app: App, file: TFile, key: string): string[] {
	return listIn(app.metadataCache.getFileCache(file)?.frontmatter?.[key]);
}

/** The `paths` list of a note, as written, normalized. */
export function listedPaths(app: App, file: TFile): string[] {
	return readKey(app, file, PATHS_KEY);
}

/** Whether any of a note's path lists names this path. */
function mentions(app: App, file: TFile, path: string): boolean {
	return ALL_KEYS.some((key) => readKey(app, file, key).includes(path));
}

/** Obsidian's own aliases of a note. */
function nativeAliases(app: App, file: TFile): string[] {
	const value: unknown = app.metadataCache.getFileCache(file)?.frontmatter?.aliases;
	const list = Array.isArray(value) ? value : typeof value === "string" ? [value] : [];
	return list.filter((entry): entry is string => typeof entry === "string" && entry.trim() !== "").map((entry) => entry.trim());
}

type Lists = Record<string, string[]>;

/** Whether path properties are written at all; the plugin sets it from its settings. */
let recording = true;

export function setRecording(on: boolean): void {
	recording = on;
}

export function isRecording(): boolean {
	return recording;
}

/**
 * Rewrites a note's path lists in one write. `change` edits them in place and
 * says whether it changed anything; an emptied list is taken out, and the
 * origin is written as a single path.
 */
async function rewriteLists(app: App, file: TFile, change: (lists: Lists) => boolean): Promise<void> {
	if (!recording) return;
	await app.fileManager.processFrontMatter(file, (frontmatter: Record<string, unknown>) => {
		const lists: Lists = {};
		for (const key of ALL_KEYS) lists[key] = listIn(frontmatter[key]);
		if (!change(lists)) return;
		for (const key of ALL_KEYS) {
			const list = [...new Set(lists[key])];
			if (!list.length) delete frontmatter[key];
			else frontmatter[key] = key === ORIGIN_KEY ? list[0] : list;
		}
	});
}

function put(lists: Lists, key: string, paths: string[]): boolean {
	const list = (lists[key] ??= []);
	const missing = paths.filter((path) => !list.includes(path));
	list.push(...missing);
	return missing.length > 0;
}

function drop(lists: Lists, key: string, path: string): boolean {
	const list = lists[key] ?? [];
	const at = list.indexOf(path);
	if (at < 0) return false;
	list.splice(at, 1);
	return true;
}

/** Records a second path of a note in `paths` and in its kind's list. */
async function recordOtherPath(app: App, file: TFile, target: string, kind: LinkKind): Promise<void> {
	await rewriteLists(app, file, (lists) => {
		const both = kind === "alias" ? [target] : [file.path, target];
		const a = put(lists, PATHS_KEY, both);
		const b = put(lists, KIND_KEYS[kind], kind === "hard" ? both : [target]);
		return a || b;
	});
}

/**
 * Takes a path out of a note's lists — out of `paths`, and out of every kind's
 * list — and the note's own path with it once nothing else is left.
 */
function forget(lists: Lists, own: string, path: string): boolean {
	let changed = false;
	for (const key of [PATHS_KEY, KIND_KEYS.alias, KIND_KEYS.hard, KIND_KEYS.symbolic]) changed = drop(lists, key, path) || changed;
	const hard = lists[KIND_KEYS.hard] ?? [];
	if (hard.length === 1 && hard[0] === own) changed = drop(lists, KIND_KEYS.hard, own) || changed;
	const paths = lists[PATHS_KEY] ?? [];
	if (paths.length === 1 && paths[0] === own) changed = drop(lists, PATHS_KEY, own) || changed;
	return changed;
}

/** Takes one of a note's other paths off its lists. */
export async function forgetOtherPath(app: App, file: TFile, path: string): Promise<void> {
	await rewriteLists(app, file, (lists) => forget(lists, file.path, path));
}

/**
 * A copy made from a note: the copy keeps none of the note's path lists and
 * names the note as its origin, and the note lists the copy as a fork.
 */
export async function recordCopy(app: App, source: TFile, copy: TFile): Promise<void> {
	await rewriteLists(app, copy, (lists) => {
		for (const key of ALL_KEYS) lists[key] = [];
		lists[ORIGIN_KEY] = [source.path];
		return true;
	});
	await rewriteLists(app, source, (lists) => put(lists, FORKS_KEY, [copy.path]));
}

/** The note's own alias paths, from its lists. */
export function aliasPathsOf(app: App, file: TFile): string[] {
	const listed = new Set([...readKey(app, file, KIND_KEYS.alias), ...listedPaths(app, file)]);
	return [...listed].filter((path) => path !== file.path && onDisk(app, path) === null && !app.vault.getAbstractFileByPath(path));
}

/**
 * Makes a second path for a note: an alias path in its frontmatter, or a hard
 * or symbolic link on disk — recorded in `paths` and in its kind's list. The
 * target must be free; the caller has checked that. Symbolic links are
 * written relative, so they survive the vault being moved.
 */
export async function makeOtherPath(app: App, file: TFile, target: string, kind: LinkKind): Promise<void> {
	if (kind === "alias") {
		await recordOtherPath(app, file, target, kind);
		return;
	}
	const base = basePath(app);
	if (base === null) throw new Error("The vault is not a folder on disk.");
	const from = join(base, file.path);
	const to = join(base, target);
	await mkdir(dirname(to), { recursive: true });
	if (kind === "hard") await link(from, to);
	else await symlink(relative(dirname(to), from), to);
	await recordOtherPath(app, file, target, kind);
	// A hard link Obsidian has already picked up read the file before the
	// list was written into it.
	const made = app.vault.getAbstractFileByPath(target);
	if (kind === "hard" && made instanceof TFile) await refreshNames(app, [made]);
}

/** What converting a link answered. */
export type ConvertResult = { result: "done" | "not-a-link" | "same"; keeper: string | null };

/**
 * Turns the link a note is opened at into another kind — a hard link, a
 * symbolic link, an alias path, or a copy of its own — keeping the path.
 * `sameFile` names the file's other names on disk, for a hard link.
 */
export async function convertLink(app: App, file: TFile, to: LinkKind | "copy", sameFile: string[]): Promise<ConvertResult> {
	const base = basePath(app);
	if (base === null) return { result: "not-a-link", keeper: null };
	const at = join(base, file.path);
	const stats = await lstat(at);
	let from: "hard" | "symbolic";
	let other: string | null = null;
	if (stats.isSymbolicLink()) {
		from = "symbolic";
		const target = resolve(dirname(at), await readlink(at));
		const within = relative(base, target);
		if (!within || within.startsWith("..")) return { result: "not-a-link", keeper: null };
		other = normalizePath(within.split("\\").join("/"));
	} else if (stats.nlink > 1) {
		from = "hard";
		// The other name: from the scan when it has run, else from the
		// note's own lists, checked against the disk.
		const names = [...sameFile, ...readKey(app, file, KIND_KEYS.hard), ...listedPaths(app, file)];
		for (const name of names) {
			if (name === file.path) continue;
			try {
				const there = await lstat(join(base, name));
				if (there.ino === stats.ino && there.dev === stats.dev) {
					other = name;
					break;
				}
			} catch {
				// Not there; the next one.
			}
		}
	} else {
		return { result: "not-a-link", keeper: null };
	}
	if (to === from) return { result: "same", keeper: other };
	const keeper = other ? app.vault.getAbstractFileByPath(other) : null;
	if (!(keeper instanceof TFile)) return { result: "not-a-link", keeper: null };

	holdFollow(file.path);
	const text = to === "copy" ? await app.vault.adapter.read(keeper.path) : "";
	await unlink(at);
	const source = join(base, keeper.path);
	if (to === "symbolic") await symlink(relative(dirname(at), source), at);
	else if (to === "hard") await link(source, at);
	else if (to === "copy") await writeFile(at, text, "utf8");

	await rewriteLists(app, keeper, (lists) => {
		let changed = forget(lists, keeper.path, file.path);
		if (to === "copy") changed = put(lists, FORKS_KEY, [file.path]) || changed;
		else {
			const both = to === "alias" ? [file.path] : [keeper.path, file.path];
			changed = put(lists, PATHS_KEY, both) || changed;
			changed = put(lists, KIND_KEYS[to], to === "hard" ? both : [file.path]) || changed;
		}
		return changed;
	});
	if (to === "copy") {
		const copy = await waitForFile(app, file.path);
		if (copy) {
			await rewriteLists(app, copy, (lists) => {
				for (const key of ALL_KEYS) lists[key] = [];
				lists[ORIGIN_KEY] = [keeper.path];
				return true;
			});
		}
	} else if (to === "hard") {
		const name = app.vault.getAbstractFileByPath(file.path);
		if (name instanceof TFile) await refreshNames(app, [name]);
	}
	return { result: "done", keeper: keeper.path };
}

/** The vault's file at a path, once Obsidian has seen it appear — or null after a few seconds. */
async function waitForFile(app: App, path: string): Promise<TFile | null> {
	for (let i = 0; i < 30; i++) {
		const file = app.vault.getAbstractFileByPath(path);
		if (file instanceof TFile) return file;
		await new Promise((resolve) => window.setTimeout(resolve, 100));
	}
	return null;
}

/**
 * Paths this plugin is replacing on disk right now: their delete and create
 * are its own doing, and must not be followed into the lists.
 */
const held = new Set<string>();

function holdFollow(path: string): void {
	held.add(path);
	window.setTimeout(() => held.delete(path), 4000);
}

/**
 * Keeps the path lists true as files move and go.
 *
 * Every note listing the old path has it rewritten — once per file on disk,
 * so a hard-linked pair, which shares one frontmatter, is written once. A
 * symbolic link that moved is pointed at its note again, since it is written
 * relative to where it stands.
 */
export async function followRename(app: App, oldPath: string, newPath: string): Promise<void> {
	if (held.has(oldPath)) return;
	const base = basePath(app);
	if (base !== null) await repointSymlink(base, oldPath, newPath);
	await rewriteListing(app, oldPath, (list) => list.map((entry) => (entry === oldPath ? newPath : entry)));
}

export async function followDelete(app: App, path: string): Promise<void> {
	if (held.has(path)) return;
	await rewriteListing(app, path, (list) => list.filter((entry) => entry !== path));
}

async function rewriteListing(app: App, path: string, change: (list: string[]) => string[]): Promise<void> {
	const base = basePath(app);
	// Grouped by the file on disk: a hard-linked pair shares one frontmatter,
	// so it is written once — and the other names are told, since Obsidian
	// only re-reads the name a write went through.
	const groups = new Map<string, TFile[]>();
	for (const file of app.vault.getMarkdownFiles()) {
		if (!mentions(app, file, path)) continue;
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
		await rewriteLists(app, first, (lists) => {
			let changed = false;
			for (const key of ALL_KEYS) {
				if (!lists[key]?.includes(path)) continue;
				lists[key] = change(lists[key]);
				changed = true;
			}
			return changed;
		});
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

	private waiting: (() => void)[] = [];

	invalidate(): void {
		this.generation += 1;
		this.state = "none";
	}

	/** Settles once a scan of the vault as it is now has finished. */
	whenReady(): Promise<void> {
		this.ensure();
		if (this.state === "ready") return Promise.resolve();
		return new Promise((settle) => this.waiting.push(settle));
	}

	/** The names of every file in the vault that has more than one. */
	hardGroups(): string[][] {
		return [...this.byInode.values()];
	}

	/** Every symbolic link in the vault that points into it, with its target. */
	symbolicLinks(): [string, string][] {
		return [...this.targetOf];
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
			// The vault's files, and the symbolic links in its folders that
			// it does not list: one made while Obsidian runs is not seen.
			const files: { path: string }[] = this.app.vault.getFiles();
			const known = new Set(files.map((file) => file.path));
			for (const folder of this.app.vault.getAllFolders(true)) {
				try {
					for (const entry of await readdir(join(base, folder.path), { withFileTypes: true })) {
						const path = folder.isRoot() ? entry.name : `${folder.path}/${entry.name}`;
						if (entry.isSymbolicLink() && !known.has(path)) files.push({ path });
					}
				} catch {
					// A folder gone meanwhile has nothing to add.
				}
				if (generation !== this.generation) return this.again();
			}
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
				if (generation !== this.generation) return this.again();
			}
		}
		if (generation !== this.generation) return this.again();
		this.byInode = byInode;
		this.inodeOf = inodeOf;
		this.linksTo = linksTo;
		this.targetOf = targetOf;
		this.state = "ready";
		this.onReady();
		for (const settle of this.waiting.splice(0)) settle();
	}

	/** A scan overtaken by a change: someone still waiting gets a fresh one. */
	private again(): void {
		if (this.waiting.length) this.ensure();
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
	// disk directly rather than of the vault — which does not list a symbolic
	// link it did not see being made — or of the background scan.
	for (const path of listedPaths(app, file)) {
		const there = onDisk(app, path);
		add(path, there === "symbolic" ? "symbolic" : there === "file" || app.vault.getAbstractFileByPath(path) ? "hard" : "alias");
	}
	const folder = parentOf(file.path);
	for (const alias of nativeAliases(app, file)) add(folder ? `${folder}/${alias}` : alias, "name");
	return [...found].map(([path, kind]) => ({ path, kind }));
}

/**
 * Brings the path lists in line with the disk, for what changed where Lure
 * could not see it: in a file manager, a terminal, a sync, or while Obsidian
 * was closed. A hard or symbolic link to a note that its lists leave out is
 * added; a listed one that is gone from the disk, or that an editor's save
 * has turned into a file of its own, is taken out. Alias paths are names
 * only and nothing on disk speaks for or against them, so they are left.
 */
export async function reconcileLists(app: App, disk: DiskLinks): Promise<void> {
	if (!recording) return;
	const base = basePath(app);
	if (base === null) return;
	await disk.whenReady();
	// What the disk says: every name of a file, and the links at each note.
	const namesOf = new Map<string, string[]>();
	for (const group of disk.hardGroups()) for (const path of group) namesOf.set(path, group);
	const linksAt = new Map<string, string[]>();
	for (const [linkPath, target] of disk.symbolicLinks()) linksAt.set(target, [...(linksAt.get(target) ?? []), linkPath]);

	const written = new Set<string>();
	for (const file of app.vault.getMarkdownFiles()) {
		// A symbolic link's frontmatter is its note's, and is seen there.
		if (held.has(file.path) || disk.targetOfLink(file.path)) continue;
		const names = namesOf.get(file.path) ?? [file.path];
		// A hard-linked file has one frontmatter for all its names: written once.
		const key = [...names].sort().join("\0");
		if (written.has(key)) continue;
		written.add(key);
		const hard = names.length > 1 ? names : [];
		const links = names.flatMap((name) => linksAt.get(name) ?? []);
		const listedHard = readKey(app, file, KIND_KEYS.hard).filter((path) => !names.includes(path));
		const listedLinks = readKey(app, file, KIND_KEYS.symbolic).filter((path) => !links.includes(path));
		// Listed and not what the disk says: gone, or a file of its own now.
		const stale: string[] = [];
		for (const path of [...listedHard, ...listedLinks]) {
			if (held.has(path)) continue;
			try {
				const stats = await lstat(join(base, path));
				if (listedHard.includes(path) && !stats.isSymbolicLink()) stale.push(path);
			} catch {
				stale.push(path);
			}
		}
		const missingHard = hard.filter((path) => !held.has(path) && !readKey(app, file, KIND_KEYS.hard).includes(path));
		const missingLinks = links.filter((path) => !held.has(path) && !readKey(app, file, KIND_KEYS.symbolic).includes(path));
		if (!stale.length && !missingHard.length && !missingLinks.length) continue;
		await rewriteLists(app, file, (lists) => {
			let changed = false;
			for (const path of stale) changed = forget(lists, file.path, path) || changed;
			if (missingHard.length) {
				changed = put(lists, PATHS_KEY, hard) || changed;
				changed = put(lists, KIND_KEYS.hard, hard) || changed;
			}
			for (const path of missingLinks) {
				changed = put(lists, PATHS_KEY, [file.path, path]) || changed;
				changed = put(lists, KIND_KEYS.symbolic, [path]) || changed;
			}
			return changed;
		});
		await refreshNames(app, hard.filter((path) => path !== file.path && path.endsWith(".md")).map((path) => app.vault.getAbstractFileByPath(path)).filter((there): there is TFile => there instanceof TFile));
	}
}

/** What is at a vault path on disk: a symbolic link, anything else, or nothing. */
export function onDisk(app: App, path: string): "symbolic" | "file" | null {
	const base = basePath(app);
	if (base === null) return null;
	try {
		return lstatSync(join(base, path)).isSymbolicLink() ? "symbolic" : "file";
	} catch {
		return null;
	}
}

/** One alias row for the dropdown. */
export interface AliasRow {
	/** The name the row shows. */
	name: string;
	/** The note it stands for. */
	target: string;
	kind: "alias" | "name" | "symbolic";
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
		// Case-blind, as typing a path is everywhere else.
		const lowerFolder = parentOf(path).toLowerCase();
		const name = nameOf(path).toLowerCase();
		const bare = name.replace(/\.md$/i, "");
		this.byFolder ??= this.collect();
		const rows = [...this.byFolder].filter(([folder]) => folder.toLowerCase() === lowerFolder).flatMap(([, entries]) => entries);
		const row = rows.find((entry) => {
			const own = entry.name.toLowerCase();
			return entry.kind === "alias" ? own === name : own === bare || own === name;
		});
		const file = row ? this.app.vault.getAbstractFileByPath(row.target) : null;
		return file instanceof TFile ? file : null;
	}

	private collect(): Map<string, AliasRow[]> {
		const byFolder = new Map<string, AliasRow[]>();
		const put = (folder: string, row: AliasRow): void => {
			const rows = byFolder.get(folder) ?? [];
			// Once per name in a folder, however many notes or names list it.
			if (rows.some((other) => other.name === row.name)) return;
			byFolder.set(folder, [...rows, row]);
		};
		const base = basePath(this.app);
		const seen = new Set<string>();
		for (const file of this.app.vault.getMarkdownFiles()) {
			const fm = this.app.metadataCache.getFileCache(file)?.frontmatter;
			if (!fm || (fm[PATHS_KEY] === undefined && fm.aliases === undefined && fm[KIND_KEYS.alias] === undefined)) continue;
			// A hard-linked pair, or a note and a symbolic link to it that the
			// vault lists, share one frontmatter: read it once, through the note.
			if (base !== null) {
				try {
					const stats = lstatSync(join(base, file.path));
					if (stats.isSymbolicLink()) continue;
					const key = `${stats.dev}:${stats.ino}`;
					if (seen.has(key)) continue;
					seen.add(key);
				} catch {
					continue;
				}
			}
			for (const path of new Set([...listedPaths(this.app, file), ...readKey(this.app, file, KIND_KEYS.alias)])) {
				// Files the vault lists are listed as such. An alias path has
				// nothing of its own to show, and a symbolic link the vault
				// never picked up is shown here, opening the note it points at.
				if (this.app.vault.getAbstractFileByPath(path)) continue;
				const there = onDisk(this.app, path);
				if (there === "file") continue;
				put(parentOf(path), { name: nameOf(path), target: file.path, kind: there === "symbolic" ? "symbolic" : "alias" });
			}
			const folder = parentOf(file.path);
			for (const alias of nativeAliases(this.app, file)) {
				put(folder, { name: alias, target: file.path, kind: "name" });
			}
		}
		return byFolder;
	}
}
