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

	private constructor(app: App, private path: string) {
		super(app);
	}

	static ask(app: App, path: string): Promise<boolean> {
		return new Promise((resolve) => {
			const modal = new ConfirmCreateFileModal(app, path);
			modal.resolveFn = resolve;
			modal.open();
		});
	}

	onOpen(): void {
		const { contentEl } = this;
		contentEl.createEl("h3", { text: t("modalCreateTitle") });
		contentEl.createEl("p", {
			text: t("modalCreateBody", { path: this.path }),
		});

		const buttonRow = contentEl.createDiv({ cls: "lure-modal-buttons" });

		buttonRow.createEl("button", { text: t("cancel") }).addEventListener("click", () => {
			this.resolved = true;
			this.resolveFn(false);
			this.close();
		});

		buttonRow
			.createEl("button", { text: t("create"), cls: "mod-cta" })
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
