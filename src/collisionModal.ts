import { AbstractInputSuggest, App, Modal, TAbstractFile, TFolder, setTooltip } from "obsidian";
import { t } from "./lang";
import { agreementWith, chooseCut, cutName, readableMinimum } from "./pathFit";

/**
 * What to do about a move or rename that lands on a name already taken.
 *
 * The row used to refuse with a notice, which is safe and leaves you to go
 * and clear the way yourself — find the file in the way, rename it, come
 * back, type the path again. The usual reason a name is taken is that the
 * file there is the one being replaced or reorganised, so the dialog lays
 * both files out side by side instead: where the moving file goes, and where
 * the one in the way goes, each an editable path. Each field's list holds
 * the usual answers — for the one in the way, trading places, names or both,
 * or a name beside its own — and picking one only fills the field, so both
 * paths can be read before anything moves. Apply moves both; Cancel moves
 * nothing.
 */
export interface CollisionPaths {
	/** Where the moving file goes. */
	moving: string;
	/** Where the file in the way goes; its own path when it stays. */
	occupant: string;
}

interface CollisionOptions {
	/** The file being moved or renamed. */
	moving: TAbstractFile;
	/** What is already at the destination. */
	occupant: TAbstractFile;
	/** Where the moving file was asked to go — the occupant's path. */
	target: string;
	/** Whether something is at a vault path. */
	exists: (path: string) => boolean;
}

const parentOf = (path: string): string => path.slice(0, Math.max(0, path.lastIndexOf("/")));
const join = (folder: string, name: string): string => (folder ? `${folder}/${name}` : name);
const nameOf = (path: string): string => path.slice(path.lastIndexOf("/") + 1);
const tidy = (path: string): string => path.trim().replace(/^\/+|\/+$/g, "");

/** A name split before its extension; a folder, or a dot-file, has none. */
function splitName(name: string, folder: boolean): { stem: string; ext: string } {
	const dot = name.lastIndexOf(".");
	if (folder || dot <= 0) return { stem: name, ext: "" };
	return { stem: name.slice(0, dot), ext: name.slice(dot) };
}

/** `-1`, `-bak` and `-old` beside a name, in its own folder. */
function besides(path: string, folder: boolean): string[] {
	const { stem, ext } = splitName(nameOf(path), folder);
	return ["-1", "-bak", "-old"].map((suffix) => join(parentOf(path), `${stem}${suffix}${ext}`));
}

interface PathIdea {
	/** What the entry is called in the list, when it has a name of its own. */
	label: string | null;
	path: string;
}

/** The same path once, under the first idea that reaches it. */
function distinct(ideas: PathIdea[]): PathIdea[] {
	const seen = new Set<string>();
	return ideas.filter((idea) => {
		if (seen.has(idea.path)) return false;
		seen.add(idea.path);
		return true;
	});
}

/**
 * Where the file in the way could go, in the order they are usually wanted:
 * the three trades, then names beside its own, then the two names the files
 * had. Within one folder, swapping names and swapping both are one move.
 */
function occupantIdeas(from: string, occupant: TAbstractFile): PathIdea[] {
	const here = parentOf(occupant.path);
	return distinct([
		// Trading with itself is not a trade: across folders between two
		// files of one name, swapping names lands where it already is.
		...[
			{ label: t("collisionSwapPlaces"), path: join(parentOf(from), occupant.name) },
			{ label: t("collisionSwapNames"), path: join(here, nameOf(from)) },
			{ label: t("collisionSwapBoth"), path: from },
		].filter((idea) => idea.path !== occupant.path),
		...besides(occupant.path, occupant instanceof TFolder).map((path) => ({ label: null, path })),
		{ label: null, path: join(here, nameOf(from)) },
		{ label: null, path: occupant.path },
	]);
}

/**
 * Where the moving file could go instead: where it was asked to, nowhere,
 * its own name there, or names beside that. Staying comes before its own
 * name there, which is the same path within one folder and should be
 * listed under what it means.
 */
function movingIdeas(from: string, moving: TAbstractFile, target: string): PathIdea[] {
	return distinct([
		{ label: null, path: target },
		{ label: t("collisionStay"), path: from },
		{ label: null, path: join(parentOf(target), nameOf(from)) },
		...besides(target, moving instanceof TFolder).map((path) => ({ label: null, path })),
	]);
}

/** Names no longer than this are never shortened. */
const SHORT_NAME = 6;

/**
 * A path drawn the way the path bar draws one: a segment at a time, each
 * shortened in its middle when the line runs out of room, and the marked
 * segments — the ones that differ — given way last.
 */
function drawPath(el: HTMLElement, path: string, marked: (index: number, part: string) => boolean): void {
	el.empty();
	el.addClass("lure-collision-path");
	path.split("/").forEach((part, index) => {
		if (index > 0) el.createSpan({ cls: "lure-collision-sep", text: "/" });
		const segment = el.createSpan({ cls: "lure-collision-seg", text: part });
		segment.dataset.full = part;
		if (marked(index, part)) segment.addClass("is-marked");
		// A name this short loses more than it saves: cut, `zz394` is `z…4`.
		if (part.length <= SHORT_NAME) segment.addClass("is-short");
	});
	el.setAttr("aria-label", path);
}

/** Shortens every segment that does not fit, by the path bar's rule, to the longest cut that still fits. */
function fitPath(el: HTMLElement): void {
	const segments = Array.from(el.querySelectorAll<HTMLElement>(".lure-collision-seg"));
	for (const segment of segments) segment.setText(segment.dataset.full ?? "");
	const names = segments.map((segment) => segment.dataset.full ?? "");
	segments.forEach((segment, index) => {
		if (segment.scrollWidth <= segment.clientWidth + 1) return;
		const full = names[index] ?? "";
		const stage = index === segments.length - 1 ? "name" : "folder";
		const cut = chooseCut(full, agreementWith(full, names.filter((_, other) => other !== index)), readableMinimum(stage));
		let low = Math.min(cut.floor, full.length);
		let high = full.length - 1;
		while (low < high) {
			const keep = Math.ceil((low + high) / 2);
			segment.setText(cutName(full, keep, cut));
			if (segment.scrollWidth <= segment.clientWidth + 1) low = keep;
			else high = keep - 1;
		}
		segment.setText(cutName(full, low, cut));
	});
}

/** Segment by segment, which parts of a path are not the same as in another. */
const differsFrom =
	(other: string) =>
	(index: number, part: string): boolean =>
		other.split("/")[index] !== part;

/**
 * The ideas as a list under a field. Picking one fills the field; nothing
 * moves. An idea whose path is taken, as the other field stands, is greyed
 * and cannot be picked.
 */
class IdeaSuggest extends AbstractInputSuggest<PathIdea> {
	constructor(
		app: App,
		private input: HTMLInputElement,
		private ideas: PathIdea[],
		private free: (path: string) => boolean,
		private picked: () => void,
	) {
		super(app, input);
	}

	protected getSuggestions(): PathIdea[] {
		return this.ideas;
	}

	renderSuggestion(idea: PathIdea, el: HTMLElement): void {
		el.addClass("lure-collision-idea");
		if (!this.free(idea.path)) el.addClass("is-unavailable");
		if (idea.label) el.createSpan({ cls: "lure-collision-idea-label", text: idea.label });
		drawPath(el.createSpan(), idea.path, differsFrom(tidy(this.input.value)));
	}

	/** No wider than its field, and every path in it fitted to that. */
	open(): void {
		const popover = (this as unknown as { suggestEl?: HTMLElement }).suggestEl;
		popover?.setCssProps({ "--lure-idea-max": `${Math.round(this.input.getBoundingClientRect().width)}px` });
		popover?.addClass("lure-collision-ideas");
		super.open();
		popover?.querySelectorAll<HTMLElement>(".lure-collision-path").forEach(fitPath);
		const self = this as unknown as { lastRect?: DOMRect; reposition?: (rect: DOMRect) => void };
		if (self.lastRect) self.reposition?.(self.lastRect);
	}

	selectSuggestion(idea: PathIdea): void {
		if (!this.free(idea.path)) return;
		this.input.value = idea.path;
		this.close();
		this.picked();
	}
}

class CollisionModal extends Modal {
	private settled = false;
	private resolveFn!: (value: CollisionPaths | null) => void;

	private constructor(app: App, private options: CollisionOptions) {
		super(app);
	}

	static ask(app: App, options: CollisionOptions): Promise<CollisionPaths | null> {
		return new Promise((resolve) => {
			const modal = new CollisionModal(app, options);
			modal.resolveFn = resolve;
			modal.open();
		});
	}

	onOpen(): void {
		const { contentEl } = this;
		const { moving, occupant, target, exists } = this.options;
		const from = moving.path;
		this.modalEl.addClass("lure-collision-modal");
		this.titleEl.setText(t("collisionTitle"));
		contentEl.createEl("p", { text: t("collisionBody", { name: occupant.name }) });

		// Both files by their whole path, the segments where the two differ
		// marked; under each, where it is going, marked where that differs
		// from where it was; and under that the field that says so. A dialog
		// that moves two similarly named files must never leave room to
		// wonder which is which.
		const files = contentEl.createDiv({ cls: "lure-collision-files" });
		const block = (label: string, path: string, other: string, cls: string, value: string) => {
			const box = files.createDiv({ cls: `lure-collision-file ${cls}` });
			const head = box.createDiv({ cls: "lure-collision-head" });
			head.createSpan({ cls: "lure-collision-role", text: label });
			const original = head.createDiv();
			drawPath(original, path, differsFrom(other));
			const to = box.createDiv({ cls: "lure-collision-head is-destination" });
			to.createSpan({ cls: "lure-collision-role", text: "→" });
			const destination = to.createDiv();
			const input = box.createEl("input", { type: "text", cls: "lure-prompt-input" });
			input.value = value;
			return { input, original, destination, path };
		};
		const movingBox = block(t("collisionMoving"), from, occupant.path, "is-moving", target);
		const occupantBox = block(t("collisionOccupant"), occupant.path, from, "is-occupant", occupant.path);
		const movingInput = movingBox.input;
		const occupantInput = occupantBox.input;
		contentEl.createEl("p", { cls: "lure-collision-hint", text: t("collisionHint") });
		const error = contentEl.createDiv({ cls: "lure-collision-error" });

		// Whether a path is free for one of the two files, as the other's
		// field stands: nothing is there, or what is there is this file
		// itself, or the other file, which is moving away — and the other is
		// not headed there too.
		const freeFor =
			(self: string, other: string, otherTo: () => string) =>
			(path: string): boolean => {
				const elsewhere = tidy(otherTo());
				if (path === elsewhere) return false;
				return !exists(path) || path === self || (path === other && elsewhere !== other);
			};
		const movingFree = freeFor(from, occupant.path, () => occupantInput.value);
		const occupantFree = freeFor(occupant.path, from, () => movingInput.value);

		// What is wrong with the two paths as they stand, and in which field.
		const judge = (): { field: HTMLInputElement | null; message: string } => {
			const to = tidy(movingInput.value);
			const away = tidy(occupantInput.value);
			if (!to) return { field: movingInput, message: t("msgEmpty") };
			if (!away) return { field: occupantInput, message: t("msgEmpty") };
			if (to === away) return { field: occupantInput, message: t("collisionSamePath") };
			if (!movingFree(to)) return { field: movingInput, message: t("collisionPathTaken", { path: to }) };
			if (!occupantFree(away)) return { field: occupantInput, message: t("collisionPathTaken", { path: away }) };
			return { field: null, message: "" };
		};
		// Red while a path is taken, the way the path bar marks a taken name —
		// the occupant's own path included, as long as the moving file is
		// headed there. The destination lines follow the fields.
		const paint = (): void => {
			const { field } = judge();
			for (const box of [movingBox, occupantBox]) {
				box.input.toggleClass("is-taken", field === box.input);
				box.destination.toggleClass("is-taken", field === box.input);
				drawPath(box.destination, tidy(box.input.value), differsFrom(box.path));
				fitPath(box.destination);
			}
			error.setText("");
		};
		const apply = (): void => {
			const { message } = judge();
			if (message) {
				error.setText(message);
				return;
			}
			this.settle({ moving: tidy(movingInput.value), occupant: tidy(occupantInput.value) });
		};

		new IdeaSuggest(this.app, movingInput, movingIdeas(from, moving, target), movingFree, paint);
		new IdeaSuggest(this.app, occupantInput, occupantIdeas(from, occupant), occupantFree, paint);
		for (const input of [movingInput, occupantInput]) {
			input.addEventListener("input", paint);
			input.addEventListener("keydown", (evt) => {
				if (evt.key !== "Enter" || evt.isComposing) return;
				evt.preventDefault();
				apply();
			});
		}

		const buttons = contentEl.createDiv({ cls: "lure-modal-buttons" });
		const button = (text: string, tip: string, cls?: string): HTMLButtonElement => {
			const el = buttons.createEl("button", { text, cls });
			setTooltip(el, tip, { placement: "top" });
			return el;
		};
		button(t("cancel"), t("collisionCancelTip")).addEventListener("click", () => this.settle(null));
		button(t("collisionApply"), t("collisionApplyTip"), "mod-cta").addEventListener("click", apply);

		// The occupant's name without its extension, which is what a way out
		// almost always changes — and the field whose list holds the trades,
		// opened straight away. A tick later: the modal takes focus for
		// itself as it opens, the lines can only be fitted once laid out, and
		// a list only opens for a focused field.
		const { stem } = splitName(occupant.name, occupant instanceof TFolder);
		const start = occupant.path.length - occupant.name.length;
		window.setTimeout(() => {
			fitPath(movingBox.original);
			fitPath(occupantBox.original);
			paint();
			occupantInput.focus();
			occupantInput.setSelectionRange(start, start + stem.length);
			occupantInput.dispatchEvent(new Event("input"));
		}, 0);
	}

	private settle(value: CollisionPaths | null): void {
		this.settled = true;
		this.resolveFn(value);
		this.close();
	}

	onClose(): void {
		this.contentEl.empty();
		if (!this.settled) this.resolveFn(null);
	}
}

export const askAboutCollision = (app: App, options: CollisionOptions): Promise<CollisionPaths | null> =>
	CollisionModal.ask(app, options);
