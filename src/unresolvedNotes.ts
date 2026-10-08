import { App, normalizePath } from "obsidian";

/**
 * Notes that are linked to and not there yet, by the folder Obsidian would
 * make each one in.
 *
 * Clicking such a link creates the note — in the folder the link names, or
 * failing that wherever *Default location for new notes* puts it for the
 * note the link is in. The dropdown lists them in that same folder, so the
 * note can be made from the path bar as it would be from the link.
 *
 * Built once and kept until the metadata cache or the vault changes: the
 * table is walked on every keystroke otherwise.
 */
export class UnresolvedNotes {
	private byFolder: Map<string, Map<string, string>> | null = null;

	constructor(private readonly app: App) {}

	/** Forgets the table, so the next listing builds it afresh. */
	invalidate(): void {
		this.byFolder = null;
	}

	/** The names in `folder` that are linked to and missing, each with the path it would be made at. */
	in(folder: string): { name: string; path: string }[] {
		this.byFolder ??= this.collect();
		return [...(this.byFolder.get(folder) ?? new Map<string, string>())].map(([name, path]) => ({ name, path }));
	}

	private collect(): Map<string, Map<string, string>> {
		const byFolder = new Map<string, Map<string, string>>();
		const links = this.app.metadataCache.unresolvedLinks ?? {};
		for (const [source, targets] of Object.entries(links)) {
			for (const raw of Object.keys(targets)) {
				const link = raw.split("#")[0]?.split("|")[0]?.trim() ?? "";
				if (!link) continue;
				// Notes only: an unresolved `![[photo.png]]` is an attachment
				// that went missing, not a note waiting to be written.
				const extension = /\.([^./]+)$/.exec(link)?.[1]?.toLowerCase();
				if (extension !== undefined && extension !== "md") continue;
				const file = extension ? link : `${link}.md`;
				let path: string;
				if (file.includes("/")) {
					path = normalizePath(file);
				} else {
					const parent = this.app.fileManager.getNewFileParent(source, file).path;
					path = normalizePath(parent === "/" || parent === "" ? file : `${parent}/${file}`);
				}
				if (this.app.vault.getAbstractFileByPath(path)) continue;
				const cut = path.lastIndexOf("/");
				const folder = cut < 0 ? "" : path.slice(0, cut);
				let names = byFolder.get(folder);
				if (!names) byFolder.set(folder, (names = new Map<string, string>()));
				names.set(path.slice(cut + 1), path);
			}
		}
		return byFolder;
	}
}
