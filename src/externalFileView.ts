import {
	Component,
	FileSystemAdapter,
	ItemView,
	MarkdownRenderer,
	Menu,
	Notice,
	PaneType,
	Platform,
	TFile,
	ViewStateResult,
	WorkspaceLeaf,
	debounce,
	setIcon,
	setTooltip,
} from "obsidian";
import { shell } from "electron";
import { readFile, writeFile } from "fs/promises";
import { parse, sep } from "path";
import { SystemLocation, isInside, listVaults } from "./systemLocations";
import { isBinaryExtension, isMarkdownExtension, warnsOnOpen } from "./fileKinds";
import type LurePlugin from "./main";
import { t } from "./lang";
import { LABELS, obsidianLabel } from "./obsidianLabels";
import { buildExternalMenu, showExternalMenu } from "./externalMenu";
import { showContextMenu } from "./nativeFileItem";

export const EXTERNAL_VIEW_TYPE = "lure-external-file";

/**
 * How much of a file the viewer will lay out, above which it is shown
 * truncated.
 *
 * These are measured, not guessed. Against a live renderer a plain
 * textarea handles 768 KB in ~1.3s and *kills the renderer process* at
 * 1 MB, so the text cap sits well under that — being shown less of an
 * enormous file is a far smaller cost than losing the window, and the
 * 2 MiB cap this replaced was above the crash threshold rather than below.
 *
 * Markdown gets a quarter of that. It costs far more per byte (512 KB
 * froze the UI for over seven seconds), and the real driver is block
 * count rather than size: 64 KB of nothing but headings and short
 * paragraphs still costs seconds, where 64 KB of prose is instant. The cap
 * is set for the dense case, since that is the one that hurts.
 */
const MAX_TEXT_BYTES = 256 * 1024;
const MAX_MARKDOWN_BYTES = 64 * 1024;
/**
 * A single enormous line is disproportionately expensive however small the
 * file: 128 KB on one line lays out to a scroll width of over a million
 * pixels. So length is capped per line as well as overall.
 */
const MAX_LINE_CHARS = 5000;
/** Quiet period before an edit is written back, so typing isn't one save per keystroke. */
const SAVE_DELAY_MS = 800;
const IMAGE_EXTENSIONS = new Set(["png", "jpg", "jpeg", "gif", "bmp", "svg", "webp", "avif"]);
const AUDIO_EXTENSIONS = new Set(["mp3", "wav", "m4a", "ogg", "3gp", "flac", "webm"]);
const VIDEO_EXTENSIONS = new Set(["mp4", "webm", "ogv", "mov", "mkv"]);
const PDF_EXTENSION = "pdf";

/** MIME types for the blob URLs the media elements are given. */
const MIME_TYPES: Record<string, string> = {
	png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg", gif: "image/gif",
	bmp: "image/bmp", svg: "image/svg+xml", webp: "image/webp", avif: "image/avif",
	mp3: "audio/mpeg", wav: "audio/wav", m4a: "audio/mp4", ogg: "audio/ogg",
	flac: "audio/flac", "3gp": "audio/3gpp",
	mp4: "video/mp4", webm: "video/webm", ogv: "video/ogg", mov: "video/quicktime",
	mkv: "video/x-matroska",
	pdf: "application/pdf",
};

export function extensionOf(path: string): string {
	return parse(path).ext.replace(/^\./, "").toLowerCase();
}

/**
 * Whether this view can show the file at all, as opposed to punting to
 * the OS.
 *
 * Any text file qualifies — a `.json`, `.css` or `.log` is shown here as
 * plain text rather than handed to whatever the desktop has registered
 * for it. Staying inside Obsidian is the point of opening it from the
 * path bar; being thrown out to another application is not. Only binary
 * formats with no viewer of their own fall through.
 */
export function canRenderExternally(path: string): boolean {
	const ext = extensionOf(path);
	return (
		isMarkdownExtension(ext) ||
		IMAGE_EXTENSIONS.has(ext) ||
		AUDIO_EXTENSIONS.has(ext) ||
		VIDEO_EXTENSIONS.has(ext) ||
		ext === PDF_EXTENSION ||
		!isBinaryExtension(ext)
	);
}

/**
 * Opens a file that lives outside the vault.
 *
 * Obsidian's editor is bound to TFile, which only exists for vault
 * contents, so there is no way to open an external path as a real,
 * editable note. This gets as close as the API allows: a plugin-owned
 * read-only view for the formats we can render, and the desktop shell's
 * default application for everything else.
 */
export async function openExternalFile(
	plugin: LurePlugin,
	absolutePath: string,
	paneType: PaneType | false,
	currentLeaf: WorkspaceLeaf,
): Promise<void> {
	if (!canRenderExternally(absolutePath)) {
		openInDefaultApp(absolutePath);
		return;
	}

	// Reuses the leaf you were in unless a modifier asked otherwise — the
	// same rule as opening a note. It also gives back/forward something to
	// work with: history is recorded per leaf when a view replaces another,
	// so always forcing a new tab left the arrows with nowhere to go.
	const leaf = paneType ? plugin.app.workspace.getLeaf(paneType) : currentLeaf;
	await leaf.setViewState({
		type: EXTERNAL_VIEW_TYPE,
		active: true,
		state: { path: absolutePath },
	});
	void plugin.app.workspace.revealLeaf(leaf);
}

/**
 * Hands a path to the desktop shell.
 *
 * `openPath` reports failure by resolving to a non-empty string rather than
 * by rejecting, so both paths have to be checked: a missing file gives a
 * message, a revoked permission can still throw.
 */
export function openInDefaultApp(absolutePath: string): void {
	try {
		void shell.openPath(absolutePath).then((error) => {
			if (error) new Notice(t("noticeExternalOpenFailed", { path: absolutePath }));
		});
	} catch {
		new Notice(t("noticeExternalOpenFailed", { path: absolutePath }));
	}
}

type RenderMode = "text" | "markdown";

interface ExternalViewState {
	path?: string;
	render?: RenderMode;
}

/**
 * Viewer for a file Obsidian will not open itself — either because it
 * lives outside the vault, or because its extension has no registered
 * view and Obsidian would hand it to the desktop instead.
 *
 * Files inside the vault are editable, and the plain-text mode is a real
 * editor: the pair of modes reads like Obsidian's own editing/reading
 * toggle.
 *
 * Files outside the vault open read-only and stay that way until you press
 * "Edit". Nothing outside the vault is ever written without that press: the
 * path bar can wander into system folders and another vault's contents,
 * where a stray keystroke should cost nothing. Once pressed, the unlock
 * lasts for this file in this view — switching files re-locks, and "Read
 * only" puts it back by hand.
 *
 * The rendered view suspends editing rather than claiming it: nothing can
 * be typed into a static render. The unlock is remembered across the
 * switch, so going back to the source picks up where you left off.
 */
export class ExternalFileView extends ItemView {
	private filePath = "";
	/** Revoked on close — blob URLs are held by the document until then. */
	private blobUrls: string[] = [];
	/** Owns the markdown render's lifecycle, replaced on every reload. */
	private renderComponent: Component | null = null;
	/** Set by readText when the file exceeded the cap for the current mode, or had a line clamped. */
	private truncated = false;
	/** Set when the read itself failed, which leaves nothing to edit. */
	private readFailed = false;
	/**
	 * Explicit choice from the toggle, or null to follow the extension.
	 * Part of the view state, so it survives back/forward and a reopened
	 * workspace rather than resetting under you.
	 */
	private renderMode: RenderMode | null = null;
	/** Flushed on close so a pending edit is never lost to a debounce window. */
	private pendingSave: { run?: () => void } | null = null;
	/**
	 * Whether the user has unlocked writing for a file outside the vault.
	 * Deliberately *not* part of the view state: an unlock is a decision
	 * about the file in front of you, not a place to navigate back to, and
	 * reviving it from a restored workspace would arm writing to a system
	 * file nobody remembers opening.
	 */
	private unlocked = false;

	constructor(leaf: WorkspaceLeaf, private plugin: LurePlugin) {
		super(leaf);
		// Makes the leaf record this view in its back/forward history, and
		// lets the header bar treat it as a navigable location.
		this.navigation = true;
	}

	/** Absolute path of the file on show, for the header breadcrumb to draw. */
	get path(): string {
		return this.filePath;
	}

	getViewType(): string {
		return EXTERNAL_VIEW_TYPE;
	}

	getDisplayText(): string {
		return this.filePath ? parse(this.filePath).base : t("externalViewTitle");
	}

	getIcon(): string {
		return "file-warning";
	}

	getState(): Record<string, unknown> {
		return { ...super.getState(), path: this.filePath, render: this.renderMode ?? undefined };
	}

	async setState(state: unknown, result: ViewStateResult): Promise<void> {
		const incoming = state as ExternalViewState;
		const next = incoming?.path;
		if (typeof next === "string") {
			// A different file is a different decision: the unlock never
			// carries over. Same path means this is the render-mode toggle
			// coming back round, which must not silently re-lock what the
			// user just unlocked.
			if (next !== this.filePath) this.unlocked = false;
			this.filePath = next;
		}
		this.renderMode =
			incoming?.render === "text" || incoming?.render === "markdown" ? incoming.render : null;
		await super.setState(state, result);
		await this.reload();
	}

	/**
	 * Obsidian's own three-dot menu in the view header.
	 *
	 * For a view it has no file for, it offers nothing but "split", so
	 * everything you would expect to do to the open file is missing out here.
	 * The same entries the row's own menu carries are added, built by the
	 * same code so the two cannot drift.
	 */
	onPaneMenu(menu: Menu, source: string): void {
		super.onPaneMenu(menu, source);
		if (!this.filePath) return;

		const vaultFile = this.vaultFile();
		if (vaultFile) {
			// A vault file shown here is still a vault file: Obsidian's own
			// menu is the right one, contributions from other plugins and all.
			this.plugin.app.workspace.trigger("file-menu", menu, vaultFile, source, this.leaf);
			return;
		}
		buildExternalMenu(
			menu,
			this.plugin,
			this.filePath,
			false,
			this.leaf,
			() => this.editingActive(),
			() => void this.reload(),
		);
	}

	async onOpen(): Promise<void> {
		// Once, here, rather than in reload(): `contentEl` is emptied on every
		// reload but never replaced, so wiring it there stacked a listener per
		// reload — one right-click then ran the gesture as many times as the
		// view had been redrawn.
		this.wireContextMenu(this.contentEl);
		await this.reload();
	}

	async onClose(): Promise<void> {
		this.releaseResources();
	}

	private releaseResources(): void {
		this.pendingSave?.run?.();
		this.pendingSave = null;
		this.renderComponent?.unload();
		this.renderComponent = null;
		for (const url of this.blobUrls) URL.revokeObjectURL(url);
		this.blobUrls = [];
	}

	private async reload(): Promise<void> {
		this.releaseResources();
		this.truncated = false;
		this.readFailed = false;
		const container = this.contentEl;
		container.empty();
		container.addClass("lure-external-view");
		if (!this.filePath) return;

		// Read before anything is drawn. Whether the read was truncated
		// decides what the bar may offer — editing a partial read would
		// discard everything past the cap — and the bar is drawn first.
		let source: string | null = null;
		let readError: string | null = null;
		if (this.isTextual()) {
			try {
				source = await this.readText();
			} catch (err) {
				readError = (err as Error).message;
				this.readFailed = true;
			}
		}

		this.renderBanner(container);

		const body = container.createDiv({ cls: "lure-external-body" });
		if (readError !== null) {
			// The bar still stands: "Open in default app" is exactly what you
			// want when this view couldn't read the file itself.
			body.createDiv({
				cls: "lure-external-error",
				text: t("noticeExternalReadFailed", { error: readError }),
			});
			return;
		}

		try {
			await this.renderBody(body, source);
		} catch (err) {
			body.empty();
			body.createDiv({
				cls: "lure-external-error",
				text: t("noticeExternalReadFailed", { error: (err as Error).message }),
			});
		}
	}

	/**
	 * One quiet line rather than a warning block: the header bar already
	 * carries the path and flashed its ring on the way in, so repeating
	 * that here as a red banner was both redundant and in the wrong place.
	 * What this does need to offer is the way to actually edit the file.
	 */
	private renderBanner(container: HTMLElement): HTMLElement {
		const bar = container.createDiv({ cls: "lure-external-bar" });

		// Two independent conditions, and both can hold at once — an
		// external .json is outside the vault *and* a type Obsidian has no
		// editor for. Each states only its own fact, so neither has to
		// hedge about the other.
		const notes = bar.createDiv({ cls: "lure-external-bar-notes" });

		if (!this.vaultFile()) {
			const editing = this.editingActive();
			this.addNote(
				notes,
				"mod-error",
				editing ? "pencil" : "lock",
				editing ? t("externalEditingEnabled") : t("externalBannerTitle"),
				editing ? t("externalEditingTooltip") : t("externalBannerTooltip"),
			);
		}

		if (warnsOnOpen(extensionOf(this.filePath), (ext) => this.isRegistered(ext))) {
			this.addNote(
				notes,
				"mod-warning",
				"alert-triangle",
				t("warnUnregisteredType"),
				t("warnUnregisteredTooltip"),
			);
		}

		// A third fact about the file, so it belongs with the other two
		// rather than trailing the buttons at the far end of the bar, which
		// read as a caption on whichever button it happened to land beside.
		if (this.truncated) {
			this.addNote(notes, "", "scissors", t("externalTruncated"), t("externalTruncatedTooltip"));
		}

		// A file that belongs to another vault has a proper home where it
		// is a real, editable note. Offering that is strictly better than
		// this preview, so it goes first and takes the primary styling.
		const owner = this.owningVault();
		if (owner) {
			bar
				.createEl("button", {
					cls: "lure-external-bar-button mod-cta",
					text: t("externalOpenInVault", { vault: owner.label }),
				})
				.addEventListener("click", () => this.openInOwningVault(owner.path, owner.label));
		}

		if (this.isTextual()) this.addModeButton(bar);

		if (Platform.isDesktopApp) {
			bar
				.createEl("button", {
					cls: "lure-external-bar-button",
					// Obsidian's own wording, not ours: this button does exactly
					// what the File Explorer's entry does, and two names for one
					// action is the kind of difference a user has to test to
					// discover. Comes translated in every language the host has.
					text: obsidianLabel(LABELS.openInDefaultApp, "Open in default app"),
				})
				.addEventListener("click", () => openInDefaultApp(this.filePath));
		}

		return bar;
	}

	/**
	 * One status line: icon, short label, and the explanation as a tooltip.
	 *
	 * The line states *what* is true in as few words as it takes — the
	 * buttons beside it already say what state the file is in — and the
	 * tooltip carries the why, where there is room for a sentence.
	 */
	private addNote(
		host: HTMLElement,
		modifier: string,
		icon: string,
		label: string,
		tooltip: string,
	): void {
		const line = host.createDiv({ cls: `lure-external-note ${modifier}`.trim() });
		setIcon(line.createSpan({ cls: "lure-external-note-icon" }), icon);
		line.createSpan({ text: label });
		setTooltip(line, tooltip, { placement: "bottom" });
	}

	/**
	 * The one thing you'd do next, as a single button — the modes exclude
	 * each other, so showing both would spend a slot restating where you
	 * already are.
	 *
	 * "Editing" means the source *and* being able to type into it, which is
	 * why an external file sitting read-only in the text view still offers
	 * "Edit as text": that press is what arms writing out there, so the mode
	 * and the permission stay one gesture. Once editing really is in force,
	 * the only way left to go is back to the rendered view.
	 */
	private addModeButton(bar: HTMLElement): void {
		const inText = this.effectiveRenderMode() === "text";
		const editing = inText && this.writableTarget() !== null;
		// Truncated and unreadable files can never be typed into, so for
		// those the text view is a destination like any other rather than a
		// promise of editing — canUnlock already rules them out.
		const offersEditing = !inText || (!editing && this.canUnlock());
		// Keyed on what the press *does*, not on where it starts from: going
		// straight from the rendered view to editing lifts read-only just as
		// much as arming in place does, and has to say so.
		const liftsReadOnly = offersEditing && this.canUnlock() && !editing;

		// Truncated and unreadable files can be looked at but never typed
		// into, so the label promises only what it can deliver.
		const editable = !this.truncated && !this.readFailed;
		const label = !offersEditing
			? t("externalRenderMarkdown")
			: editable
				? t("externalRenderText")
				: t("externalViewText");

		const button = bar.createEl("button", {
			cls: [
				"lure-external-bar-button",
				liftsReadOnly ? "mod-destructive" : "",
				offersEditing ? "" : "mod-view",
			]
				.filter(Boolean)
				.join(" "),
			text: label,
		});
		if (liftsReadOnly) setTooltip(button, t("externalEditTooltip"));

		button.addEventListener("click", () => {
			if (offersEditing) this.unlocked = true;
			// Arming while already in the text view changes no mode, so
			// repaint in place rather than push an identical state onto the
			// leaf's history.
			if (offersEditing && inText) void this.reload();
			else this.setRenderMode(offersEditing ? "text" : "markdown");
		});
	}

	/** Whether Obsidian has a view registered for an extension. */
	private isRegistered(extension: string): boolean {
		try {
			return this.app.viewRegistry.isExtensionRegistered(extension);
		} catch {
			return true;
		}
	}

	/**
	 * This file as a vault file, when it lives in the vault this window has
	 * open. That is exactly the condition for being allowed to write: the
	 * plugin never modifies anything outside the vault.
	 */
	private vaultFile(): TFile | null {
		const adapter = this.app.vault.adapter;
		if (!(adapter instanceof FileSystemAdapter)) return null;
		const base = adapter.getBasePath();
		if (!isInside(this.filePath, base)) return null;

		const relative = this.filePath.slice(base.length).replace(/^[\\/]+/, "").split(sep).join("/");
		const found = this.app.vault.getAbstractFileByPath(relative);
		return found instanceof TFile ? found : null;
	}

	/**
	 * Whether "Enable editing" applies at all.
	 *
	 * Only for text outside the vault: vault files are already editable, and
	 * media has no editor here. A truncated or failed read is excluded
	 * outright rather than unlocked-then-refused — saving what's on screen
	 * would drop everything past the cap, or overwrite a file we never
	 * managed to read, and no button should be able to do that.
	 */
	private canUnlock(): boolean {
		return this.isTextual() && !this.truncated && !this.readFailed && !this.vaultFile();
	}

	/**
	 * Writes a file outside the vault, which is why it goes through fs
	 * rather than the vault API. Failures are almost always permissions or a
	 * read-only mount, so the message carries the system's own reason.
	 */
	private async writeExternal(text: string): Promise<void> {
		try {
			await writeFile(this.filePath, text, "utf8");
		} catch (err) {
			new Notice(t("noticeExternalWriteFailed", { error: (err as Error).message }));
		}
	}

	/** The known vault this file lives in, when it isn't the one already open. */
	private owningVault(): SystemLocation | null {
		const adapter = this.app.vault.adapter;
		const currentBase = adapter instanceof FileSystemAdapter ? adapter.getBasePath() : "";

		let best: SystemLocation | null = null;
		for (const vault of listVaults(currentBase)) {
			if (vault.isCurrentVault) continue;
			if (!isInside(this.filePath, vault.path)) continue;
			// Vaults can nest; the innermost one is the file's actual home.
			if (!best || vault.path.length > best.path.length) best = vault;
		}
		return best;
	}

	/**
	 * Hands the file to Obsidian's own URI handler, which opens (or
	 * focuses) that vault's window and the note in it. Deliberately not a
	 * vault switch in this window: everything you have open here stays
	 * open, same as picking a vault in the breadcrumb never switched.
	 */
	private openInOwningVault(vaultPath: string, vaultName: string): void {
		const relative = this.filePath.slice(vaultPath.length).replace(/^[\\/]+/, "").split(sep).join("/");
		const uri = `obsidian://open?vault=${encodeURIComponent(vaultName)}&file=${encodeURIComponent(relative)}`;
		try {
			window.open(uri);
		} catch {
			new Notice(t("noticeExternalOpenFailed", { path: this.filePath }));
		}
	}

	/**
	 * What the body is drawn as. Markdown files render by default and
	 * everything else is shown verbatim, but either can be overridden —
	 * plenty of notes live in .txt files, and plenty of .md files are
	 * easier to read as source.
	 */
	private effectiveRenderMode(): RenderMode {
		if (this.renderMode) return this.renderMode;
		return isMarkdownExtension(extensionOf(this.filePath)) ? "markdown" : "text";
	}

	/** Whether the render toggle applies at all — media and PDFs have nothing to switch between. */
	private isTextual(): boolean {
		const ext = extensionOf(this.filePath);
		return (
			!IMAGE_EXTENSIONS.has(ext) &&
			!AUDIO_EXTENSIONS.has(ext) &&
			!VIDEO_EXTENSIONS.has(ext) &&
			ext !== PDF_EXTENSION
		);
	}

	private setRenderMode(mode: RenderMode): void {
		this.renderMode = mode;
		// Through setViewState so the choice lands in the leaf's history
		// alongside the file, rather than being a detail this view alone
		// remembers until it is next recreated.
		void this.leaf.setViewState({
			type: EXTERNAL_VIEW_TYPE,
			active: true,
			state: { path: this.filePath, render: mode },
		});
	}

	/** `source` is the file's text, already read by reload for anything textual. */
	private async renderBody(body: HTMLElement, source: string | null): Promise<void> {
		const ext = extensionOf(this.filePath);

		if (this.isTextual()) {
			await this.renderTextual(body, source ?? "");
			return;
		}

		const url = await this.blobUrlFor(ext);

		if (IMAGE_EXTENSIONS.has(ext)) {
			body.createEl("img", { cls: "lure-external-media", attr: { src: url } });
		} else if (AUDIO_EXTENSIONS.has(ext)) {
			body.createEl("audio", { cls: "lure-external-media", attr: { src: url, controls: "true" } });
		} else if (VIDEO_EXTENSIONS.has(ext)) {
			body.createEl("video", { cls: "lure-external-media", attr: { src: url, controls: "true" } });
		} else if (ext === PDF_EXTENSION) {
			body.createEl("iframe", { cls: "lure-external-frame", attr: { src: url } });
		}
	}

	/**
	 * The text file itself, in whichever of the two readings is on.
	 *
	 * The pair works the way Obsidian's own reading and editing views do:
	 * Markdown fills the pane as a rendered note, plain text is the source.
	 * Neither is half of a split — the rendered HTML isn't something you can
	 * type into, so editing happens in the source view, which is where the
	 * Edit button takes you.
	 *
	 * Non-Markdown text stays verbatim by default: rendering it *as*
	 * Markdown would silently swallow syntax that means something else in
	 * that format — a `#` in a shell script is a comment, not a heading.
	 */
	/**
	 * Right-click in the viewer.
	 *
	 * The pane had no menu at all: not the file's, and not the ordinary
	 * editing one, because Obsidian suppresses the platform menu app-wide
	 * and a plain textarea gets nothing in its place. Which of the two is
	 * wanted is decided by where the click landed — inside the editor it is
	 * an editing question, anywhere else it is a question about the file.
	 */
	private wireContextMenu(container: HTMLElement): void {
		container.addEventListener("contextmenu", (evt) => {
			const editor = (evt.target as HTMLElement)?.closest?.(".lure-external-editor");
			evt.preventDefault();
			if (editor instanceof HTMLTextAreaElement) this.showEditMenu(editor, evt);
			else this.showFileMenu(evt);
		});
	}

	/**
	 * The file's own menu, so the viewer offers what the File Explorer
	 * offers for the same file. A vault file gets the vault menu — including
	 * whatever other plugins contribute to it — and anything outside gets
	 * the path-built one.
	 */
	private showFileMenu(evt: MouseEvent): void {
		if (!this.filePath) return;
		const vaultFile = this.vaultFile();
		if (vaultFile) showContextMenu(this.plugin.app, evt, vaultFile);
		else {
			showExternalMenu(
				this.plugin,
				evt,
				this.filePath,
				false,
				this.leaf,
				// The viewer's own unlock, which is the press that armed
				// editing for this file — the same gate, read from where it
				// actually lives rather than assumed from the path bar's.
				() => this.editingActive(),
				() => void this.reload(),
			);
		}
	}

	/**
	 * Cut/copy/paste/select all for the plain-text editor.
	 *
	 * Built rather than borrowed: Obsidian's own editor menu belongs to
	 * CodeMirror, which only exists for files in the vault. Cut and paste
	 * are omitted outright when the field is read-only, rather than offered
	 * and refused — the file may be outside the vault with the padlock
	 * still closed, and a menu entry that cannot work is worse than no
	 * entry. Every mutation dispatches `input` so the debounced save behaves
	 * exactly as it does for typing.
	 */
	private showEditMenu(editor: HTMLTextAreaElement, evt: MouseEvent): void {
		const menu = new Menu();
		const selected = editor.value.slice(editor.selectionStart, editor.selectionEnd);
		const editable = !editor.readOnly;

		if (editable) {
			menu.addItem((item) =>
				item
					.setTitle(obsidianLabel(LABELS.cut, "Cut"))
					.setIcon("lucide-scissors")
					.setDisabled(!selected)
					.onClick(() => {
						void navigator.clipboard.writeText(selected);
						this.replaceSelection(editor, "");
					}),
			);
		}
		menu.addItem((item) =>
			item
				.setTitle(obsidianLabel(LABELS.copy, "Copy"))
				.setIcon("lucide-copy")
				.setDisabled(!selected)
				.onClick(() => void navigator.clipboard.writeText(selected)),
		);
		if (editable) {
			menu.addItem((item) =>
				item
					.setTitle(obsidianLabel(LABELS.paste, "Paste"))
					.setIcon("lucide-clipboard")
					.onClick(() => {
						void navigator.clipboard.readText().then((text) => this.replaceSelection(editor, text));
					}),
			);
		}
		menu.addItem((item) =>
			item
				.setTitle(obsidianLabel(LABELS.selectAll, "Select all"))
				.setIcon("lucide-text-select")
				.onClick(() => {
					editor.focus();
					editor.select();
				}),
		);
		menu.showAtMouseEvent(evt);
	}

	/** Replaces the selection and leaves the caret after it, as typing would. */
	private replaceSelection(editor: HTMLTextAreaElement, text: string): void {
		const start = editor.selectionStart;
		const end = editor.selectionEnd;
		editor.value = editor.value.slice(0, start) + text + editor.value.slice(end);
		editor.selectionStart = editor.selectionEnd = start + text.length;
		editor.focus();
		editor.dispatchEvent(new Event("input"));
	}

	private async renderTextual(body: HTMLElement, source: string): Promise<void> {
		if (this.effectiveRenderMode() === "markdown") {
			await this.renderMarkdown(body, source);
			return;
		}

		const editor = body.createEl("textarea", { cls: "lure-external-editor" });
		editor.value = source;

		const target = this.writableTarget();
		if (!target) {
			editor.readOnly = true;
			return;
		}

		const save = debounce(() => void this.writeTo(target, editor.value), SAVE_DELAY_MS, true);
		editor.addEventListener("input", save);
		this.pendingSave = save;
	}

	/**
	 * Where an edit would go, or null when this file can't be written.
	 *
	 * Vault files are writable outright. Outside, only once the unlock has
	 * been pressed. A truncated or failed read is never writable in either
	 * place — saving what's on screen would discard everything past the cap,
	 * or overwrite a file we never managed to read.
	 */
	private writableTarget(): TFile | "external" | null {
		if (this.truncated || this.readFailed) return null;
		const vaultFile = this.vaultFile();
		if (vaultFile) return vaultFile;
		return this.editingActive() ? "external" : null;
	}

	/**
	 * Whether editing is actually in effect, as opposed to merely having
	 * been asked for.
	 *
	 * The rendered view is never editable — Obsidian's live editor is bound
	 * to a vault file, and a static render has nothing to type into — so
	 * switching to it suspends editing rather than pretending. The *intent*
	 * survives in `unlocked`, so coming back to the source restores editing
	 * without a second press.
	 */
	private editingActive(): boolean {
		return this.unlocked && this.canUnlock() && this.effectiveRenderMode() === "text";
	}

	private async writeTo(target: TFile | "external", text: string): Promise<void> {
		if (target === "external") await this.writeExternal(text);
		// process, not modify: this fires from a debounce, so it races
		// anything else writing the same note (sync, another pane). The
		// atomic read-modify-write keeps the loser from being silently
		// overwritten by a buffer captured before the other change landed.
		else await this.app.vault.process(target, () => text);
	}

	/**
	 * Renders Markdown into a container, replacing whatever was there.
	 *
	 * Each render owns a Component, unloaded before the next one so the
	 * post-processors a re-render creates don't accumulate over a typing
	 * session.
	 */
	private async renderMarkdown(host: HTMLElement, source: string): Promise<void> {
		this.renderComponent?.unload();
		const component = new Component();
		this.renderComponent = component;
		component.load();
		host.empty();
		const markdownEl = host.createDiv({ cls: "markdown-preview-view lure-external-markdown" });
		// sourcePath is "" on purpose: link resolution is vault-relative,
		// and pretending an external file sits somewhere in the vault would
		// resolve its links against the wrong folder.
		await MarkdownRenderer.render(this.app, source, markdownEl, "", component);
	}

	/**
	 * Reads the file as text, capped so that opening a huge log by accident
	 * doesn't take the window down with it. Truncation is stated in the
	 * status line rather than left to be discovered, and it also makes the
	 * file read-only — a partial read must never be written back.
	 *
	 * The cap follows the mode, because the two cost very different amounts
	 * to display.
	 */
	private async readText(): Promise<string> {
		const data = await readFile(this.filePath);
		const cap = this.effectiveRenderMode() === "markdown" ? MAX_MARKDOWN_BYTES : MAX_TEXT_BYTES;
		this.truncated = data.byteLength > cap;
		return this.clampLines(data.subarray(0, cap).toString("utf8"));
	}

	/**
	 * Shortens any single line past MAX_LINE_CHARS, and reports that as
	 * truncation like any other — a minified bundle or a one-line log is
	 * within the byte cap yet still ruinous to lay out.
	 */
	private clampLines(text: string): string {
		let clamped = false;
		const lines = text.split("\n").map((line) => {
			if (line.length <= MAX_LINE_CHARS) return line;
			clamped = true;
			return line.slice(0, MAX_LINE_CHARS);
		});
		if (clamped) this.truncated = true;
		return lines.join("\n");
	}

	/**
	 * Blob URL rather than a file:// src: Obsidian serves vault media over
	 * its own app:// protocol and file:// is not reliably loadable from the
	 * renderer, so the bytes are read and handed over directly.
	 */
	private async blobUrlFor(ext: string): Promise<string> {
		const data = await readFile(this.filePath);
		const blob = new Blob([new Uint8Array(data)], {
			type: MIME_TYPES[ext] ?? "application/octet-stream",
		});
		const url = URL.createObjectURL(blob);
		this.blobUrls.push(url);
		return url;
	}
}
