import { App, Modal } from "obsidian";
import { t } from "./lang";

/**
 * Confirmation modal shown when the user types a path that doesn't
 * exist yet while editing the breadcrumb. Resolves `true` if the
 * user chose to create the file, `false` for any form of cancel
 * (button, Escape, or clicking outside the modal).
 */
export class ConfirmCreateFileModal extends Modal {
	private resolved = false;
	private resolveFn!: (value: boolean) => void;

	private constructor(
		app: App,
		private title: string,
		private body: string,
		private confirm: string,
	) {
		super(app);
	}

	static ask(app: App, path: string): Promise<boolean> {
		return ConfirmCreateFileModal.askWith(app, t("modalCreateTitle"), t("modalCreateBody", { path }), t("create"));
	}

	/** The same yes-or-no, worded by the caller. */
	static askWith(app: App, title: string, body: string, confirm: string): Promise<boolean> {
		return new Promise((resolve) => {
			const modal = new ConfirmCreateFileModal(app, title, body, confirm);
			modal.resolveFn = resolve;
			modal.open();
		});
	}

	onOpen(): void {
		const { contentEl } = this;
		this.titleEl.setText(this.title);
		contentEl.createEl("p", { text: this.body });

		const buttonRow = contentEl.createDiv({ cls: "lure-modal-buttons" });

		buttonRow.createEl("button", { text: t("cancel") }).addEventListener("click", () => {
			this.resolved = true;
			this.resolveFn(false);
			this.close();
		});

		buttonRow
			.createEl("button", { text: this.confirm, cls: "mod-cta" })
			.addEventListener("click", () => {
				this.resolved = true;
				this.resolveFn(true);
				this.close();
			});
	}

	onClose(): void {
		this.contentEl.empty();
		if (!this.resolved) {
			this.resolveFn(false);
		}
	}
}
