import { App, Modal, TAbstractFile, setTooltip } from "obsidian";
import { t } from "./lang";

/**
 * What to do about a move or rename that lands on a name already taken.
 *
 * The row used to refuse with a notice, which is safe and leaves you to go
 * and clear the way yourself — find the file in the way, rename it, come
 * back, type the path again. The usual reason a name is taken is that the
 * file there is the one being replaced or reorganised, so the dialog offers
 * the ways through it in place: rename the file in the way first, or trade
 * places with it, or trade names with it. Cancel drops the whole move.
 *
 * Which trade is offered depends on the move. Across folders the two files
 * can swap places — each keeps its name and takes the other's folder. Within
 * one folder that would be the same as not moving at all, and swapping
 * *names* is what is meant; across folders swapping names would leave both
 * files where they were, which a move did not ask for. So exactly one of
 * the two is offered, never both.
 */
export type CollisionChoice =
	| { kind: "rename-occupant"; name: string }
	| { kind: "swap-places" }
	| { kind: "swap-names" };

interface CollisionOptions {
	/** The file being moved or renamed. */
	moving: TAbstractFile;
	/** What is already at the destination. */
	occupant: TAbstractFile;
	/** Whether the destination is in the moving file's own folder — a rename rather than a move. */
	sameFolder: boolean;
	/** Whether a name is free in the occupant's folder, for the rename field. */
	isFree: (name: string) => boolean;
}

class CollisionModal extends Modal {
	private settled = false;
	private resolveFn!: (value: CollisionChoice | null) => void;

	private constructor(app: App, private options: CollisionOptions) {
		super(app);
	}

	static ask(app: App, options: CollisionOptions): Promise<CollisionChoice | null> {
		return new Promise((resolve) => {
			const modal = new CollisionModal(app, options);
			modal.resolveFn = resolve;
			modal.open();
		});
	}

	onOpen(): void {
		const { contentEl } = this;
		const { moving, occupant, sameFolder } = this.options;
		this.modalEl.addClass("lure-collision-modal");
		this.titleEl.setText(t("collisionTitle"));
		contentEl.createEl("p", { text: t("collisionBody", { name: occupant.name }) });

		// Both files by their whole path, the one that would be renamed marked
		// as such: a dialog that renames a file must never leave room to wonder
		// which of two similarly named files it means.
		const files = contentEl.createDiv({ cls: "lure-collision-files" });
		const row = (label: string, path: string, cls: string) => {
			const line = files.createDiv({ cls: `lure-collision-file ${cls}` });
			line.createSpan({ cls: "lure-collision-role", text: label });
			line.createEl("code", { text: path });
		};
		row(t("collisionMoving"), moving.path, "is-moving");
		row(t("collisionOccupant"), occupant.path, "is-occupant");

		contentEl.createEl("p", { text: t("collisionRenameLabel", { name: occupant.name }) });
		const input = contentEl.createEl("input", { type: "text", cls: "lure-prompt-input" });
		input.value = occupant.name;
		const error = contentEl.createDiv({ cls: "lure-collision-error" });

		const rename = (): void => {
			const name = input.value.trim();
			if (!name || name === occupant.name) return;
			if (/[\\/]/.test(name) || !this.options.isFree(name)) {
				error.setText(t("collisionNameTaken", { name }));
				return;
			}
			this.settle({ kind: "rename-occupant", name });
		};
		// Red while the name in the field is taken, the way the path bar
		// marks a taken name — the one it opens with included, since that is
		// the name of the file in the way.
		const paint = (): void => {
			const name = input.value.trim();
			input.toggleClass("is-taken", name !== "" && !this.options.isFree(name));
		};
		paint();
		input.addEventListener("input", () => {
			error.setText("");
			paint();
		});
		input.addEventListener("keydown", (evt) => {
			if (evt.key !== "Enter" || evt.isComposing) return;
			evt.preventDefault();
			rename();
		});

		const buttons = contentEl.createDiv({ cls: "lure-modal-buttons" });
		const button = (text: string, tip: string, cls?: string): HTMLButtonElement => {
			const el = buttons.createEl("button", { text, cls });
			setTooltip(el, tip, { placement: "top" });
			return el;
		};
		button(t("cancel"), t("collisionCancelTip")).addEventListener("click", () => this.settle(null));
		if (sameFolder) {
			button(t("collisionSwapNames"), t("collisionSwapNamesTip", { a: moving.name, b: occupant.name }))
				.addEventListener("click", () => this.settle({ kind: "swap-names" }));
		} else {
			const home = moving.parent?.path ?? "/";
			button(
				t("collisionSwapPlaces"),
				t("collisionSwapPlacesTip", { name: occupant.name, folder: home === "/" ? "/" : home }),
			).addEventListener("click", () => this.settle({ kind: "swap-places" }));
		}
		button(t("collisionRenameCta"), t("collisionRenameTip", { name: occupant.name }), "mod-cta")
			.addEventListener("click", rename);

		// The name without its extension, which is what a rename almost always
		// changes — the same stretch the path bar marks for one.
		input.focus();
		const dot = occupant.name.lastIndexOf(".");
		input.setSelectionRange(0, dot > 0 ? dot : occupant.name.length);
	}

	private settle(value: CollisionChoice | null): void {
		this.settled = true;
		this.resolveFn(value);
		this.close();
	}

	onClose(): void {
		this.contentEl.empty();
		if (!this.settled) this.resolveFn(null);
	}
}

export const askAboutCollision = (app: App, options: CollisionOptions): Promise<CollisionChoice | null> =>
	CollisionModal.ask(app, options);
