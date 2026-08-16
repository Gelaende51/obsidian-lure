import { App, Modal } from "obsidian";
import { t } from "./lang";

/**
 * A name prompt and a confirmation, for the things that can be done to a
 * path outside the vault.
 *
 * Obsidian's own equivalents all take a TFile, which by definition does not
 * exist out there, so these stand in for them. Both resolve rather than
 * calling back, so a menu entry reads as the sequence it is: ask, then act.
 * Both treat every form of dismissal — button, Escape, clicking away — as a
 * cancel, because a write outside the vault should never be the default
 * reading of an ambiguous gesture.
 */

interface PromptOptions {
	title: string;
	label: string;
	/** Prefilled and selected, so a rename can be typed over or edited in place. */
	value?: string;
	cta: string;
}

class NamePromptModal extends Modal {
	private settled = false;
	private resolveFn!: (value: string | null) => void;

	private constructor(app: App, private options: PromptOptions) {
		super(app);
	}

	static ask(app: App, options: PromptOptions): Promise<string | null> {
		return new Promise((resolve) => {
			const modal = new NamePromptModal(app, options);
			modal.resolveFn = resolve;
			modal.open();
		});
	}

	onOpen(): void {
		const { contentEl } = this;
		this.titleEl.setText(this.options.title);
		contentEl.createEl("p", { text: this.options.label });

		const input = contentEl.createEl("input", { type: "text", cls: "lure-prompt-input" });
		input.value = this.options.value ?? "";

		const submit = (): void => {
			const name = input.value.trim();
			if (!name) return;
			this.settle(name);
		};

		input.addEventListener("keydown", (evt) => {
			if (evt.key !== "Enter") return;
			evt.preventDefault();
			submit();
		});

		const buttons = contentEl.createDiv({ cls: "lure-modal-buttons" });
		buttons.createEl("button", { text: t("cancel") }).addEventListener("click", () => this.settle(null));
		buttons
			.createEl("button", { text: this.options.cta, cls: "mod-cta" })
			.addEventListener("click", submit);

		// Selected rather than merely focused: a rename is usually a
		// replacement, and the extension stays visible either way.
		input.focus();
		input.select();
	}

	private settle(value: string | null): void {
		this.settled = true;
		this.resolveFn(value);
		this.close();
	}

	onClose(): void {
		this.contentEl.empty();
		if (!this.settled) this.resolveFn(null);
	}
}

export const promptForName = (app: App, options: PromptOptions): Promise<string | null> =>
	NamePromptModal.ask(app, options);

interface ConfirmOptions {
	title: string;
	body: string;
	/** Second line, for the part that says what the action actually costs. */
	detail?: string;
	cta: string;
	/** Styles the action button as destructive, as Obsidian's own delete prompt does. */
	warning?: boolean;
}

class ConfirmModal extends Modal {
	private settled = false;
	private resolveFn!: (value: boolean) => void;

	private constructor(app: App, private options: ConfirmOptions) {
		super(app);
	}

	static ask(app: App, options: ConfirmOptions): Promise<boolean> {
		return new Promise((resolve) => {
			const modal = new ConfirmModal(app, options);
			modal.resolveFn = resolve;
			modal.open();
		});
	}

	onOpen(): void {
		const { contentEl } = this;
		this.titleEl.setText(this.options.title);
		contentEl.createEl("p", { text: this.options.body });
		if (this.options.detail) contentEl.createEl("p", { text: this.options.detail });

		const buttons = contentEl.createDiv({ cls: "lure-modal-buttons" });
		buttons.createEl("button", { text: t("cancel") }).addEventListener("click", () => this.settle(false));
		buttons
			.createEl("button", {
				text: this.options.cta,
				cls: this.options.warning ? "mod-warning" : "mod-cta",
			})
			.addEventListener("click", () => this.settle(true));
	}

	private settle(value: boolean): void {
		this.settled = true;
		this.resolveFn(value);
		this.close();
	}

	onClose(): void {
		this.contentEl.empty();
		if (!this.settled) this.resolveFn(false);
	}
}

export const confirmAction = (app: App, options: ConfirmOptions): Promise<boolean> =>
	ConfirmModal.ask(app, options);
