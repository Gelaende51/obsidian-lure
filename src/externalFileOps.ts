import { constants } from "fs";
import { access, copyFile, mkdir, readdir, rename, unlink, writeFile } from "fs/promises";
import { dirname, join } from "path";
import { shell } from "electron";

/**
 * The write half of browsing outside the vault.
 *
 * Everything here acts on absolute filesystem paths through Node rather
 * than the vault API, which only knows about files Obsidian has indexed.
 * None of it runs unless the user has unlocked external writes first —
 * that gate lives in PathBreadcrumb, where the button is.
 *
 * Every operation refuses to overwrite. Out here there is no trash to
 * recover from and no vault index to notice the loss, so "the target
 * already exists" is always an error to report rather than a thing to
 * resolve by clobbering.
 */

/** True when something already exists at this path. */
export async function externalExists(path: string): Promise<boolean> {
	try {
		await access(path, constants.F_OK);
		return true;
	} catch {
		return false;
	}
}

/** Missing parents are created, matching what committing a typed path does inside the vault. */
async function ensureParent(path: string): Promise<void> {
	await mkdir(dirname(path), { recursive: true });
}

/**
 * Creates an empty file. The "wx" flag fails rather than truncating if
 * something appeared since the caller's existence check — that check and
 * this write are two different moments, and the file on the other side of
 * the race is not ours to destroy.
 */
export async function createExternalFile(path: string): Promise<void> {
	await ensureParent(path);
	await writeFile(path, "", { flag: "wx" });
}

/** COPYFILE_EXCL makes the refusal to overwrite the filesystem's job, not a check we could lose a race to. */
export async function copyExternalFile(from: string, to: string): Promise<void> {
	await ensureParent(to);
	await copyFile(from, to, constants.COPYFILE_EXCL);
}

/**
 * Moves or renames a file.
 *
 * rename() cannot cross filesystems, which is the ordinary case for what
 * this feature is for — pulling something off a USB stick or a network
 * share into your home folder. EXDEV is that failure, and copy-then-delete
 * is the standard answer; the copy still refuses to overwrite, and the
 * original is only unlinked once it has succeeded.
 */
export async function moveExternalFile(from: string, to: string): Promise<void> {
	await ensureParent(to);
	try {
		await rename(from, to);
	} catch (err) {
		if ((err as NodeJS.ErrnoException).code !== "EXDEV") throw err;
		await copyFile(from, to, constants.COPYFILE_EXCL);
		await unlink(from);
	}
}

/** Missing parents included, matching what committing a typed path does inside the vault. */
export async function createExternalFolder(path: string): Promise<void> {
	await mkdir(path, { recursive: true });
}

/**
 * Copies a file or a whole directory tree.
 *
 * Directories are walked rather than handed to fs.cp, whose recursive mode
 * has been experimental across the Node versions Obsidian has shipped.
 * Files still refuse to overwrite, so a copy can never consume something
 * that was already there.
 */
export async function copyExternalEntry(from: string, to: string): Promise<void> {
	const entries = await readdirOrNull(from);
	if (entries === null) {
		await copyExternalFile(from, to);
		return;
	}
	await mkdir(to, { recursive: true });
	for (const entry of entries) {
		await copyExternalEntry(join(from, entry.name), join(to, entry.name));
	}
}

/** Directory listing, or null when the path is not a directory. */
async function readdirOrNull(path: string) {
	try {
		return await readdir(path, { withFileTypes: true });
	} catch (err) {
		const code = (err as NodeJS.ErrnoException).code;
		if (code === "ENOTDIR") return null;
		throw err;
	}
}

/**
 * Renames within the same directory, for files and folders alike.
 *
 * No EXDEV fallback here on purpose: a rename in place cannot cross a
 * filesystem, so the copy-then-delete dance moveExternalFile needs would
 * only be dead code with a directory-shaped hole in it.
 */
export async function renameExternalEntry(from: string, to: string): Promise<void> {
	await rename(from, to);
}

/**
 * Moves a path to the desktop's trash.
 *
 * Electron's own call, so this is the Recycle Bin on Windows, Trash on
 * macOS and the XDG trash on Linux, without this plugin knowing which. It
 * is deliberately not an unlink: out here there is no vault index to notice
 * a loss and no Obsidian trash to recover from, so the only acceptable
 * delete is one the desktop can undo. A platform with no trash rejects, and
 * the caller reports that rather than falling back to destroying the file.
 */
export async function trashExternalEntry(path: string): Promise<void> {
	await shell.trashItem(path);
}
