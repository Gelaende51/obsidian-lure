import { execFile } from "child_process";
import { lstat } from "fs/promises";
import { homedir, platform } from "os";
import { basename, sep } from "path";

/**
 * Where the other names of a hard-linked file are, when they are outside the
 * vault.
 *
 * The disk says how many names a file has, never where they are: nothing maps
 * a file back to its paths on Linux, macOS or FreeBSD without walking folders.
 * So this asks what each system already keeps — Windows lists a file's names
 * itself (`fsutil hardlink list`); elsewhere the system's index of file names
 * (`plocate`/`locate`, Spotlight on macOS) is asked for files of the same name,
 * and each is kept only if it is the same file on disk. A name given a
 * different name, or one newer than the index, is not found; the row then
 * says only that there is one, outside.
 *
 * Searched once per file and link count, in the background; what is found
 * redraws the rows.
 */
export class OutsideNames {
	/** Found names by `dev:ino:nlink`; null while the search runs. */
	private byKey = new Map<string, string[] | null>();

	constructor(private readonly onFound: () => void) {}

	/** The names found so far for the file at `absolute`; the first ask starts the search. */
	of(absolute: string, key: string, vaultBase: string): string[] {
		const known = this.byKey.get(key);
		if (known !== undefined) return known ?? [];
		this.byKey.set(key, null);
		void findOutside(absolute, vaultBase).then((names) => {
			this.byKey.set(key, names);
			if (names.length) this.onFound();
		});
		return [];
	}
}

/** A path outside the vault as the rows show it: from the home folder as `~/…`, else whole. */
export function shortOutside(path: string): string {
	const home = homedir();
	if (home && (path === home || path.startsWith(home + sep))) return `~${path.slice(home.length).split(sep).join("/")}`;
	return path;
}

/** Lines a program printed, or none when it is missing, fails or takes too long. */
function run(program: string, args: string[]): Promise<string[]> {
	return new Promise((settle) => {
		try {
			execFile(program, args, { timeout: 5000, maxBuffer: 8 * 1024 * 1024, windowsHide: true }, (error, stdout) => {
				settle(error ? [] : stdout.split(/\r?\n/).map((line) => line.trim()).filter(Boolean));
			});
		} catch {
			settle([]);
		}
	});
}

function isInside(path: string, folder: string): boolean {
	return path === folder || path.startsWith(folder.endsWith(sep) ? folder : folder + sep);
}

async function findOutside(absolute: string, vaultBase: string): Promise<string[]> {
	const system = platform();
	// Windows answers exactly, with the drive left off.
	if (system === "win32") {
		const drive = absolute.slice(0, 2);
		return (await run("fsutil", ["hardlink", "list", absolute]))
			.map((line) => (line.startsWith("\\") ? drive + line : line))
			.filter((path) => !isInside(path, vaultBase));
	}
	const name = basename(absolute);
	const candidates =
		system === "darwin"
			? [...(await run("mdfind", ["-name", name])), ...(await run("locate", [name]))]
			: (await run("plocate", ["-b", "-e", `\\${name}`])).length
				? await run("plocate", ["-b", "-e", `\\${name}`])
				: await run("locate", [name]);
	let own: { dev: number; ino: number };
	try {
		own = await lstat(absolute);
	} catch {
		return [];
	}
	const found = new Set<string>();
	for (const path of candidates) {
		if (basename(path) !== name || path === absolute || isInside(path, vaultBase)) continue;
		try {
			const there = await lstat(path);
			if (there.dev === own.dev && there.ino === own.ino) found.add(path);
		} catch {
			// Gone since the index was made.
		}
	}
	return [...found];
}
