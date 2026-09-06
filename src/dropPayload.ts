import { App, TFile } from "obsidian";
import { isBinaryExtension } from "./fileKinds";

/**
 * What a drag is carrying that could be written into a note, and where it
 * came from.
 *
 * Three sources, in the order the row asks about them, because a single
 * drag routinely offers more than one and only the first is what the user
 * meant:
 *
 * 1. **A file out of this vault.** Obsidian's own drag manager holds the
 *    `TFile`, and also writes a `text/plain` of the *link* to it — so
 *    reading the text first would paste `[[Note]]` where the note itself
 *    was dragged.
 * 2. **A file off the desktop.** `dataTransfer.files`, read as text. The
 *    same drag carries a `text/plain` of the file's name on some
 *    platforms, which is again not what was dragged.
 * 3. **Selected text**, from the editor or from anywhere else.
 *
 * `from` names the source for the confirmation to quote. Empty for loose
 * text, which has no name to give.
 */
export interface DroppedContent {
	text: string;
	from: string;
}

/** Bytes past which a dropped file is not read into a note at all. */
const MAX_DROP_BYTES = 1024 * 1024;

/**
 * Whether a drag has anything a note could take.
 *
 * Answerable during `dragover`, which is the constraint that shapes it:
 * the contents of a drag are readable only on the drop itself, so this
 * asks `dataTransfer.types` instead — the one part the browser exposes
 * early, precisely so a target can decide whether to accept.
 */
export function carriesContent(evt: DragEvent): boolean {
	const types = evt.dataTransfer?.types;
	if (!types) return false;
	return Array.from(types).some((type) => type === "text/plain" || type === "Files");
}

/**
 * Whether the drag is Obsidian's own — a file or folder out of this vault,
 * rather than text or a file from outside it.
 *
 * The row's folder segments already answer that drag: it moves the file
 * there. So the targets that would otherwise take a drop as *content* have
 * to stand back from it, or one gesture would mean two things at the same
 * spot.
 */
export function isVaultDrag(app: App): boolean {
	return !!app.dragManager?.draggable;
}

/** The single vault file being dragged, where the drag is one file and not a folder. */
export function draggedVaultFile(app: App): TFile | null {
	const dragged = app.dragManager?.draggable;
	const file = dragged?.type === "file" ? dragged.file : null;
	return file instanceof TFile ? file : null;
}

/**
 * Reads what the drop is carrying, or null where it is carrying nothing a
 * note can hold.
 *
 * Binary is refused rather than read: a PNG decoded as text is a page of
 * mojibake, and pasting it into a note is not a thing anybody meant. So is
 * anything past a megabyte — a note is not where a large file goes, and
 * the confirmation would be asking about something nobody can review.
 */
export async function readDroppedContent(
	app: App,
	evt: DragEvent,
): Promise<DroppedContent | null> {
	const vaultFile = draggedVaultFile(app);
	if (vaultFile) {
		if (isBinaryExtension(vaultFile.extension)) return null;
		if (vaultFile.stat.size > MAX_DROP_BYTES) return null;
		return { text: await app.vault.read(vaultFile), from: vaultFile.name };
	}

	const files = evt.dataTransfer?.files;
	const file = files && files.length > 0 ? files[0] : null;
	if (file) {
		const extension = file.name.includes(".") ? file.name.split(".").pop() ?? "" : "";
		if (isBinaryExtension(extension.toLowerCase())) return null;
		if (file.size > MAX_DROP_BYTES) return null;
		return { text: await file.text(), from: file.name };
	}

	const text = evt.dataTransfer?.getData("text/plain") ?? "";
	return text ? { text, from: "" } : null;
}

/**
 * Puts `text` at the end of a note, with a blank line between it and
 * whatever was there.
 *
 * `append` rather than read-then-write: it is the vault API's own
 * atomic add, so two drops in quick succession cannot lose one of them.
 * A note that is empty, or that already ends in a blank line, gets no
 * separator of its own — the point is one blank line, not two.
 */
export async function appendToNote(app: App, file: TFile, text: string): Promise<void> {
	const body = text.replace(/\s+$/, "");
	if (!body) return;
	const existing = await app.vault.read(file);
	const lead = existing.length === 0 ? "" : existing.endsWith("\n\n") ? "" : existing.endsWith("\n") ? "\n" : "\n\n";
	await app.vault.append(file, `${lead}${body}\n`);
}
