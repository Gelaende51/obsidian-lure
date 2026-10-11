import { existsSync } from "fs";
import { t } from "./lang";
import { shortOutside } from "./outsideNames";

/** The reasons said in words, by the code Node gives a failed file operation. */
const REASONS = {
	ENOENT: "errorNotFound",
	EACCES: "errorNoPermission",
	EPERM: "errorNoPermission",
	EROFS: "errorReadOnly",
	ENOSPC: "errorDiskFull",
	EBUSY: "errorInUse",
	ENAMETOOLONG: "errorNameTooLong",
	EEXIST: "errorExists",
} as const;

/** The codes a sandbox gives for a folder it was not let into. */
const SANDBOXED = new Set(["ENOENT", "EACCES", "EPERM", "EROFS"]);

/**
 * The sandbox Obsidian runs in, if any: a Flatpak sees only the folders it
 * was given, and a strict Snap the same. A file there can be missing to
 * Obsidian while it is plainly on disk.
 */
export function sandbox(): "Flatpak" | "Snap" | null {
	const env = (window as unknown as { process?: { env?: Record<string, string | undefined> } }).process?.env ?? {};
	if (env.FLATPAK_ID || existsSync("/.flatpak-info")) return "Flatpak";
	if (env.SNAP) return "Snap";
	return null;
}

/**
 * A failed file operation in words: what went wrong and with which path,
 * instead of Node's `ENOENT: no such file or directory, rename '…' -> '…'`.
 * Where a sandbox may be the cause, it says so. Anything without a known
 * code keeps its own message.
 */
export function errorText(err: unknown): string {
	const error = err as { code?: string; path?: string; dest?: string; message?: string } | null;
	const key = error?.code ? REASONS[error.code as keyof typeof REASONS] : undefined;
	if (!key) return error?.message ?? String(err);
	const where = error?.dest ?? error?.path;
	let text = t(key, { path: where ? shortOutside(where) : "" });
	const box = sandbox();
	if (box && SANDBOXED.has(error?.code ?? "")) text += ` ${t("errorSandbox", { sandbox: box })}`;
	return text;
}
