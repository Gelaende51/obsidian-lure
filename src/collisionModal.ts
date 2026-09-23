import { AbstractInputSuggest, App, Modal, TAbstractFile, TFolder, setTooltip } from "obsidian";
import { t } from "./lang";

/**
 * What to do about a move or rename that lands on a name already taken.
 *
 * The row used to refuse with a notice, which is safe and leaves you to go
 * and clear the way yourself — find the file in the way, rename it, come
 * back, type the path again. The usual reason a name is taken is that the
 * file there is the one being replaced or reorganised, so the dialog lays
 * both files out side by side instead: where the moving file goes, and where
 * the one in the way goes, each an editable path. The second field's list
 * holds the usual answers — trading places, names or both, or a name beside
 * its own — and picking one only fills the field, so both paths can be read
 * before anything moves. Apply moves both; Cancel moves nothing.
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

/** A name split before its extension; a folder, or a dot-file, has none. */
function stemOf(item: TAbstractFile): { stem: string; ext: string } {
	const dot = item.name.lastIndexOf(".");
	if (item instanceof TFolder || dot <= 0) return { stem: item.name, ext: "" };
	return { stem: item.name.slice(0, dot), ext: item.name.slice(dot) };
}

interface PathIdea {
	/** What the entry is called in the list, when it has a name of its own. */
	label: string | null;
	path: string;
}

/**
 * Where the file in the way could go, in the order they are usually wanted:
 * the three trades, then names beside its own, then the two names the files
 * had. The same path is listed once, under the first idea that reaches it —
 * within one folder, swapping names and swapping both are one move.
 */
function occupantIdeas(from: string, occupant: TAbstractFile): PathIdea[] {
	const here = parentOf(occupant.path);
	const { stem, ext } = stemOf(occupant);
	const ideas: PathIdea[] = [
		{ label: t("collisionSwapPlaces"), path: join(parentOf(from), occupant.name) },
		{ label: t("collisionSwapNames"), path: join(here, nameOf(from)) },
		{ label: t("collisionSwapBoth"), path: from },
		...["-1", "-bak", "-old"].map((suffix) => ({ label: null, path: join(here, `${stem}${suffix}${ext}`) })),
		{ label: null, path: join(here, nameOf(from)) },
		{ label: null, path: occupant.path },
	];
	const seen = new Set<string>();
	return ideas.filter((idea) => {
		// Trading with itself is not a trade: across folders between two
		// files of one name, swapping names lands where it already is.
		if (idea.label && idea.path === occupant.path) return false;
		if (seen.has(idea.path)) return false;
		seen.add(idea.path);
		return true;
	});
}

/** The ideas as a list under the occupant's field. Picking one fills the field; nothing moves. */
class IdeaSuggest extends AbstractInputSuggest<PathIdea> {
	constructor(
		app: App,
		private input: HTMLInputElement,
		private ideas: PathIdea[],
		private picked: () => void,
	) {
		super(app, input);
	}

	protected getSuggestions(): PathIdea[] {
		return this.ideas;
	}

	renderSuggestion(idea: PathIdea, el: HTMLElement): void {
		el.addClass("lure-collision-idea");
		if (idea.label) el.createSpan({ cls: "lure-collision-idea-label", text: idea.label });
		el.createEl("code", { text: idea.path });
	}

	selectSuggestion(idea: PathIdea): void {
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
		const { moving, occupant, target } = this.options;
		const from = moving.path;
		this.modalEl.addClass("lure-collision-modal");
		this.titleEl.setText(t("collisionTitle"));
		contentEl.createEl("p", { text: t("collisionBody", { name: occupant.name }) });

		// Both files by their whole path, each over the field that says where
		// it goes: a dialog that moves two similarly named files must never
		// leave room to wonder which field is which.
		const files = contentEl.createDiv({ cls: "lure-collision-files" });
		const row = (label: string, path: string, cls: string, value: string): HTMLInputElement => {
			const block = files.createDiv({ cls: `lure-collision-file ${cls}` });
			const head = block.createDiv({ cls: "lure-collision-head" });
			head.createSpan({ cls: "lure-collision-role", text: label });
			head.createEl("code", { text: path });
			const input = block.createEl("input", { type: "text", cls: "lure-prompt-input" });
			input.value = value;
			return input;
		};
		const movingInput = row(t("collisionMoving"), from, "is-moving", target);
		const occupantInput = row(t("collisionOccupant"), occupant.path, "is-occupant", occupant.path);
		contentEl.createEl("p", { cls: "lure-collision-hint", text: t("collisionHint") });
		const error = contentEl.createDiv({ cls: "lure-collision-error" });

		// What is wrong with the two paths as they stand, and in which field.
		// A path is free if nothing is there, or if what is there is one of
		// the two files and is itself moving away.
		const judge = (): { field: HTMLInputElement | null; message: string } => {
			const to = movingInput.value.trim().replace(/^\/+|\/+$/g, "");
			const away = occupantInput.value.trim().replace(/^\/+|\/+$/g, "");
			const vacated = (path: string, self: string, other: string, otherTo: string) =>
				path === self || (path === other && otherTo !== other);
			if (!to) return { field: movingInput, message: t("msgEmpty") };
			if (!away) return { field: occupantInput, message: t("msgEmpty") };
			if (to === away) return { field: occupantInput, message: t("collisionSamePath") };
			if (this.options.exists(to) && !vacated(to, from, occupant.path, away)) {
				return { field: movingInput, message: t("collisionPathTaken", { path: to }) };
			}
			if (this.options.exists(away) && !vacated(away, occupant.path, from, to)) {
				return { field: occupantInput, message: t("collisionPathTaken", { path: away }) };
			}
			return { field: null, message: "" };
		};
		// Red while a path is taken, the way the path bar marks a taken name —
		// the occupant's own path included, as long as the moving file is
		// headed there.
		const paint = (): void => {
			const { field } = judge();
			movingInput.toggleClass("is-taken", field === movingInput);
			occupantInput.toggleClass("is-taken", field === occupantInput);
			error.setText("");
		};
		const apply = (): void => {
			const { message } = judge();
			if (message) {
				error.setText(message);
				return;
			}
			this.settle({
				moving: movingInput.value.trim().replace(/^\/+|\/+$/g, ""),
				occupant: occupantInput.value.trim().replace(/^\/+|\/+$/g, ""),
			});
		};

		new IdeaSuggest(this.app, occupantInput, occupantIdeas(from, occupant), paint);
		for (const input of [movingInput, occupantInput]) {
			input.addEventListener("input", paint);
			input.addEventListener("keydown", (evt) => {
				if (evt.key !== "Enter" || evt.isComposing) return;
				evt.preventDefault();
				apply();
			});
		}
		paint();

		const buttons = contentEl.createDiv({ cls: "lure-modal-buttons" });
		const button = (text: string, tip: string, cls?: string): HTMLButtonElement => {
			const el = buttons.createEl("button", { text, cls });
			setTooltip(el, tip, { placement: "top" });
			return el;
		};
		button(t("cancel"), t("collisionCancelTip")).addEventListener("click", () => this.settle(null));
		button(t("collisionApply"), t("collisionApplyTip"), "mod-cta").addEventListener("click", apply);

		// The occupant's name without its extension, which is what a way out
		// almost always changes — and the field whose list holds the ideas,
		// opened straight away. A tick later: the modal takes focus for
		// itself as it opens, and the list only opens for a focused field.
		const { stem } = stemOf(occupant);
		const start = occupant.path.length - occupant.name.length;
		window.setTimeout(() => {
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
