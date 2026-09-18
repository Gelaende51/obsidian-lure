import {
	App,
	PluginSettingTab,
	Setting,
	SettingDefinitionControl,
	SettingDefinitionItem,
	SettingDefinitionRender,
} from "obsidian";
import type BreadcrumbPathPlugin from "./main";
import type { BreadcrumbPathSettings } from "./settings";
import { setLanguageOverride, t } from "./lang";
import { FOLLOW_OBSIDIAN, LOCALE_NAMES } from "./lang/locales";
import { LABELS, obsidianLabel } from "./obsidianLabels";

const DELIMITER_PRESETS = ["/", ">", "▸", "›", "\\", "•"];

/**
 * Turns each named plugin inside a description into a link to its page in
 * Obsidian — the same `obsidian://show-plugin?id=` link the app's own
 * "Copy link" button produces.
 *
 * Splitting the sentence on the name works in every language because a
 * plugin's name is a proper noun and is never translated, so it appears
 * verbatim in all 45 locales while the grammar around it changes.
 */
function withPluginLinks(text: string, plugins: { name: string; id: string }[]): DocumentFragment {
	const fragment = createFragment();
	let rest = text;
	for (const { name, id } of plugins) {
		const at = rest.indexOf(name);
		if (at === -1) continue;
		fragment.appendText(rest.slice(0, at));
		fragment.createEl("a", { text: name, href: `obsidian://show-plugin?id=${id}` });
		rest = rest.slice(at + name.length);
	}
	fragment.appendText(rest);
	return fragment;
}

/** One entry per setting, and every key one this plugin actually stores. */
type Definition = SettingDefinitionItem<keyof BreadcrumbPathSettings>;

export class BreadcrumbSettingTab extends PluginSettingTab {
	constructor(app: App, private plugin: BreadcrumbPathPlugin) {
		super(app, plugin);
	}

	/**
	 * Every setting, declared once.
	 *
	 * Obsidian renders these itself from 1.13.0 — which is also what puts
	 * them in the settings *search*, so a user looking for "delimiter"
	 * finds it without knowing which plugin owns it. Older hosts have no
	 * such renderer, so `display()` below walks the same list; the
	 * declaration is shared rather than written twice, which is the only
	 * way the two cannot drift apart.
	 */
	getSettingDefinitions(): Definition[] {
		return [
			{
				// Deliberately the one setting here that is never translated.
				// It is the way out of a language you cannot read, so it has
				// to stay legible *in* that language — a "Sprache" row is no
				// help to someone who opened this because the plugin is
				// speaking German at them. Obsidian's own language setting is
				// English for the same reason.
				//
				// First in the list for the same argument: someone looking for
				// it is looking for it, and should not have to read six
				// unfamiliar rows to find it.
				name: "Language",
				desc:
					"Language for this plugin's own text. " +
					"Obsidian default follows the language set in Appearance settings.",
				control: {
					type: "dropdown",
					key: "language",
					options: {
						[FOLLOW_OBSIDIAN]: "Obsidian default",
						...LOCALE_NAMES,
					},
				},
			},
			{
				name: t("settingAlignmentName"),
				desc: t("settingAlignmentDesc"),
				control: {
					type: "dropdown",
					key: "alignment",
					options: {
						left: t("alignmentLeft"),
						center: t("alignmentCenter"),
						right: t("alignmentRight"),
					},
				},
			},
			{
				name: t("settingDelimiterName"),
				desc: t("settingDelimiterDesc"),
				// Six presets and a free text field in one row: more than a
				// control declaration can say, and the one place here that
				// has to be drawn rather than described.
				render: (setting) => this.renderDelimiter(setting),
			},
			{
				name: t("settingVaultNameName"),
				desc: t("settingVaultNameDesc"),
				control: { type: "toggle", key: "showVaultName" },
			},
			{
				name: t("settingSwapActionsName"),
				desc: withPluginLinks(t("settingSwapActionsDesc"), [
					// The only folder-note plugin that claims the header path;
					// the others create folder notes but never answer a click
					// on the breadcrumb. See docs/compatibility.md.
					{ name: "Folder notes", id: "folder-notes" },
				]),
				control: { type: "toggle", key: "swapSegmentActions" },
			},
			{
				name: t("settingDotFilesName"),
				desc: this.dotFilesDescription(),
				control: { type: "toggle", key: "showDotFiles" },
			},
			{
				name: t("settingExtensionName"),
				desc: t("settingExtensionDesc"),
				control: { type: "toggle", key: "showFileExtension" },
			},
			{
				// The one setting that widens what the plugin can reach, so it
				// says so: the description carries a warning line in the error
				// colour rather than burying the consequence in ordinary grey
				// body text.
				name: t("settingExternalName"),
				desc: this.externalDescription(),
				control: { type: "toggle", key: "accessExternalFiles" },
			},
		];
	}

	/**
	 * Reads a value for the declarative renderer.
	 *
	 * Named by Obsidian, and overridden rather than inherited because the
	 * inherited one reads `plugin.settings` directly — which is right, but
	 * only by coincidence of this plugin storing them there under the same
	 * names. Saying so here means a later change of storage has one place to
	 * change.
	 */
	getControlValue(key: string): unknown {
		return (this.plugin.settings as unknown as Record<string, unknown>)[key];
	}

	/**
	 * Writes one, and repaints.
	 *
	 * The inherited version persists and stops. Every row on screen is drawn
	 * from these settings, so a change that is saved but not repainted shows
	 * up on the next file you open and not on the one in front of you —
	 * which is what `saveSettings` exists to prevent.
	 */
	async setControlValue(key: string, value: unknown): Promise<void> {
		(this.plugin.settings as unknown as Record<string, unknown>)[key] = value;
		// The language is the one setting that changes what every *other* row
		// on this page says, so it repaints the page as well as the rows the
		// plugin draws. Pushed into the string table first: `saveSettings`
		// refreshes the headers, and they would otherwise redraw themselves in
		// the language that was just replaced.
		if (key === "language") {
			setLanguageOverride(typeof value === "string" ? value : FOLLOW_OBSIDIAN);
			this.redraw();
		}
		await this.plugin.saveSettings();
	}

	/**
	 * The same settings on a host that has no declarative renderer.
	 *
	 * Kept for the whole of the declared `minAppVersion` range: the
	 * declarative API arrived in 1.13.0 and this plugin supports 1.8.7, so
	 * dropping this would cut off every user on an older Obsidian to silence
	 * one deprecation warning. It walks `getSettingDefinitions()` rather than
	 * declaring the settings a second time.
	 *
	 * The linter flags this as deprecated and the rule cannot be disabled —
	 * the shared Obsidian config forbids it — so the warning stands as a
	 * standing reminder rather than a finding. It goes when `minAppVersion`
	 * reaches 1.13.0, and not before.
	 */
	display(): void {
		const { containerEl } = this;
		containerEl.empty();

		for (const definition of this.getSettingDefinitions()) {
			const setting = new Setting(containerEl);
			if ("name" in definition && definition.name) setting.setName(definition.name);
			if ("desc" in definition && definition.desc) setting.setDesc(definition.desc);

			const render = (definition as SettingDefinitionRender).render;
			if (render) {
				// Obsidian hands its renderer a `SettingGroup` as well, which
				// only exists from 1.13.0 and which none of the definitions
				// here take. Called as the one-argument function it actually
				// is, rather than conjuring a second argument to satisfy the
				// signature of a renderer that is not the one running.
				(render as (setting: Setting) => void)(setting);
				continue;
			}
			this.drawControl(setting, definition as SettingDefinitionControl);
		}
	}

	/** One declared control, drawn with the imperative API. */
	private drawControl(setting: Setting, definition: SettingDefinitionControl): void {
		const control = definition.control;
		if (control.type === "toggle") {
			setting.addToggle((toggle) =>
				toggle
					.setValue(!!this.getControlValue(control.key))
					.onChange((value) => void this.setControlValue(control.key, value)),
			);
			return;
		}
		if (control.type === "dropdown") {
			setting.addDropdown((dropdown) => {
				for (const [value, label] of Object.entries(control.options)) {
					dropdown.addOption(value, label);
				}
				const current = this.getControlValue(control.key);
				dropdown
					.setValue(typeof current === "string" ? current : "")
					.onChange((value) => void this.setControlValue(control.key, value));
			});
		}
	}

	/** The delimiter row: six presets, then a field for anything else. */
	private renderDelimiter(setting: Setting): void {
		for (const preset of DELIMITER_PRESETS) {
			setting.addButton((button) =>
				button
					.setButtonText(preset)
					.setTooltip(t("delimiterPresetTooltip", { char: preset }))
					.onClick(async () => {
						await this.setControlValue("delimiter", preset);
						// The text field beside the buttons shows the current
						// delimiter, so it has to be redrawn to agree with the
						// button that was just pressed.
						this.redraw();
					}),
			);
		}

		setting.addText((text) =>
			text
				.setValue(this.plugin.settings.delimiter)
				.onChange((value) => void this.setControlValue("delimiter", value || "/")),
		);
	}

	/** The external-access description, warning line and all. */
	/**
	 * The dot-file rule, and beside it the *other* rule that decides what a
	 * dropdown can list — Obsidian's own, which is not this plugin's to
	 * toggle but is the first thing to look at when a folder reads as emptier
	 * than it is.
	 *
	 * The link is worded by Obsidian, in whatever language it is running in,
	 * and it opens the page it names. Nothing new to translate, and nothing
	 * to go stale when that page is reworded.
	 */
	private dotFilesDescription(): DocumentFragment {
		const fragment = createFragment();
		fragment.createDiv({ text: t("settingDotFilesDesc") });
		const line = fragment.createDiv({ cls: "lure-setting-link" });
		const label = obsidianLabel(LABELS.showAllFileTypes, "Show all file types");
		const link = line.createEl("a", { text: `${label} →`, href: "#" });
		link.addEventListener("click", (evt) => {
			evt.preventDefault();
			// Internal, and guarded as every internal call here is: failing to
			// open the page is a link that does nothing, not a settings tab
			// that throws while you are looking at it.
			try {
				const setting = this.app.setting;
				setting?.open?.();
				setting?.openTabById?.("file");
			} catch {
				/* The setting is still where Obsidian keeps it. */
			}
		});
		return fragment;
	}

	private externalDescription(): DocumentFragment {
		const fragment = createFragment();
		fragment.createDiv({ text: t("settingExternalDesc") });
		fragment.createDiv({ cls: "lure-setting-warning", text: t("settingExternalWarning") });
		return fragment;
	}

	/**
	 * Redraws the tab, whichever renderer drew it.
	 *
	 * `update()` is the declarative renderer's own; on an older host there is
	 * no such method and `display()` is the way back.
	 */
	private redraw(): void {
		const tab = this as unknown as { update?: () => void };
		if (typeof tab.update === "function") tab.update();
		else this.display();
	}
}
