import { existsSync, lstatSync, readlinkSync, statSync } from "fs";
import { link, mkdir, symlink } from "fs/promises";
import { dirname, relative, resolve } from "path";
import type { LinkKind, OtherPath } from "./altPaths";
import { samePath } from "./systemLocations";

/**
 * Second paths for files outside the vault: hard links, symbolic links and
 * alias paths made through the path bar, remembered by the plugin.
 *
 * Out here there is no frontmatter to keep them in — most files are not
 * notes — and no index to ask, so the record is the plugin's own, a JSON
 * file beside its settings (see docs/superpowers/specs/2026-10-10-external-
 * links-design.md). The record says what was made; the disk says what is
 * still there, and is asked each time a list is read.
 */
export type ExternalRecord = Partial<Record<LinkKind, string[]>>;
export type ExternalLinkStore = Record<string, ExternalRecord>;

/** Reads and writes the record; the plugin passes its own storage in. */
export interface ExternalLinkIo {
	read(): Promise<string | null>;
	write(text: string): Promise<void>;
}

const KINDS: readonly LinkKind[] = ["hard", "symbolic", "alias"];

function sameFile(a: string, b: string): boolean {
	try {
		const x = statSync(a);
		const y = statSync(b);
		return x.dev === y.dev && x.ino === y.ino;
	} catch {
		return false;
	}
}

function linkResolvesTo(link: string, file: string): boolean {
	try {
		if (!lstatSync(link).isSymbolicLink()) return false;
		return samePath(resolve(dirname(link), readlinkSync(link)), file);
	} catch {
		return false;
	}
}

export class ExternalLinks {
	private store: ExternalLinkStore = {};
	private loaded = false;

	constructor(private readonly io: ExternalLinkIo) {}

	async load(): Promise<void> {
		try {
			const text = await this.io.read();
			const parsed: unknown = text ? JSON.parse(text) : {};
			this.store = parsed && typeof parsed === "object" ? (parsed as ExternalLinkStore) : {};
		} catch {
			this.store = {};
		}
		this.loaded = true;
	}

	private async save(): Promise<void> {
		// Entries the disk no longer has go at each write, and empty records.
		for (const [key, record] of Object.entries(this.store)) {
			for (const kind of KINDS) {
				const kept = (record[kind] ?? []).filter((path) => this.stillThere(key, path, kind));
				if (kept.length) record[kind] = kept;
				else delete record[kind];
			}
			if (!KINDS.some((kind) => record[kind]?.length)) delete this.store[key];
		}
		await this.io.write(JSON.stringify(this.store, null, "\t"));
	}

	private keyFor(path: string): string | null {
		return Object.keys(this.store).find((key) => samePath(key, path)) ?? null;
	}

	private stillThere(file: string, path: string, kind: LinkKind): boolean {
		if (kind === "hard") return sameFile(file, path);
		if (kind === "symbolic") return linkResolvesTo(path, file);
		// An alias is a name only: it stands while nothing else does.
		return existsSync(file) && !existsSync(path);
	}

	/** The other paths of `file`, as the button and its menu list them: checked against the disk. */
	othersOf(file: string): OtherPath[] {
		if (!this.loaded) return [];
		const out: OtherPath[] = [];
		const key = this.keyFor(file);
		const record = key ? this.store[key] : undefined;
		for (const kind of KINDS) {
			for (const path of record?.[kind] ?? []) {
				if (this.stillThere(file, path, kind)) out.push({ path, kind });
			}
		}
		// The file itself a symbolic link: the file it stands for.
		try {
			if (lstatSync(file).isSymbolicLink()) {
				const target = resolve(dirname(file), readlinkSync(file));
				if (!out.some((other) => samePath(other.path, target))) out.push({ path: target, kind: "target" });
			}
		} catch {
			// Gone, or not readable: nothing to add.
		}
		return out;
	}

	/** The file an alias path outside the vault names, or null. */
	resolveAlias(path: string): string | null {
		for (const [key, record] of Object.entries(this.store)) {
			if ((record.alias ?? []).some((alias) => samePath(alias, path)) && existsSync(key) && !existsSync(path)) return key;
		}
		return null;
	}

	/**
	 * Gives `file` a second path at `target`, which must be free. Symbolic
	 * links are written relative, so a folder moved as a whole keeps them.
	 */
	async make(file: string, target: string, kind: LinkKind): Promise<void> {
		if (kind !== "alias") {
			await mkdir(dirname(target), { recursive: true });
			if (kind === "hard") await link(file, target);
			else await symlink(relative(dirname(target), file), target);
		}
		this.add(file, target, kind);
		// Neither name of a hard link is the original: each lists the other.
		if (kind === "hard") this.add(target, file, "hard");
		await this.save();
	}

	private add(file: string, path: string, kind: LinkKind): void {
		const key = this.keyFor(file) ?? file;
		const record = (this.store[key] ??= {});
		const list = (record[kind] ??= []);
		if (!list.some((entry) => samePath(entry, path))) list.push(path);
	}

	/** A file moved through the path bar: its record, and every mention of it, follow. */
	async moved(from: string, to: string): Promise<void> {
		const key = this.keyFor(from);
		let changed = false;
		if (key) {
			this.store[to] = this.store[key];
			delete this.store[key];
			changed = true;
		}
		for (const record of Object.values(this.store)) {
			for (const kind of KINDS) {
				const list = record[kind];
				if (!list) continue;
				const at = list.findIndex((path) => samePath(path, from));
				if (at >= 0) {
					list[at] = to;
					changed = true;
				}
			}
		}
		if (changed) await this.save();
	}

	/** A file trashed through the path bar: its record goes; the names that were it are checked at the write. */
	async removed(path: string): Promise<void> {
		const key = this.keyFor(path);
		if (!key) return;
		delete this.store[key];
		await this.save();
	}
}
