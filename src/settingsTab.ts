import {
	App,
	PluginSettingTab,
	Setting,
	SettingDefinitionControl,
	SettingDefinitionItem,
	SettingDefinitionRender,
	setIcon,
} from "obsidian";
import type BreadcrumbPathPlugin from "./main";
import { BreadcrumbPathSettings, DEFAULT_SETTINGS, DEFAULT_VAULT_ICON } from "./settings";
import { ConfirmCreateFileModal } from "./createFileModal";
import { applyIcon } from "./systemLocations";
import { setLanguageOverride, t } from "./lang";
import { FOLLOW_OBSIDIAN, LOCALE_NAMES } from "./lang/locales";
import { LABELS, obsidianLabel } from "./obsidianLabels";

const DELIMITER_PRESETS = ["/", ">", "▸", "›", "\\", "•"];
/** Icons offered for the vault's own segment, ahead of typing any Lucide name. */
const VAULT_ICON_PRESETS = ["home", "vault", "library", "archive", "book-open", "box"];

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
				type: "group",
				heading: t("settingGroupPathBar"),
				items: [
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
						name: t("settingVaultSegmentName"),
						desc: t("settingVaultSegmentDesc"),
						control: {
							type: "dropdown",
							key: "vaultSegment",
							options: {
								name: t("vaultSegmentName"),
								icon: t("vaultSegmentIcon"),
								none: t("vaultSegmentNone"),
							},
						},
					},
					{
						name: t("settingVaultIconName"),
						desc: t("settingVaultIconDesc"),
						render: (setting: Setting) => this.renderVaultIcon(setting),
					},
					{
						name: t("settingExtensionName"),
						desc: t("settingExtensionDesc"),
						control: { type: "toggle", key: "showFileExtension" },
					},
				],
			},
			{
				type: "group",
				heading: t("settingGroupDropdown"),
				items: [
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
						desc: t("settingDotFilesDesc"),
						control: { type: "toggle", key: "showDotFiles" },
					},
					{
						name: t("settingLinkedOnlyName"),
						desc: t("settingLinkedOnlyDesc"),
						control: { type: "toggle", key: "listLinkedOnly" },
					},
					{
						name: t("settingAliasesName"),
						desc: t("settingAliasesDesc"),
						control: { type: "toggle", key: "listAliases" },
					},
					// Beside the dot-file rule because it answers the same question —
					// what a dropdown is allowed to list — and immediately after it
					// because it is the one that is *not* this plugin's to toggle. It
					// is named as Obsidian names it, so it can be searched for by the
					// name it has on the page the button leads to.
					{
						name: obsidianLabel(LABELS.showAllFileTypes, "Show all file types"),
						desc: t("settingAllFilesDesc"),
						render: (setting: Setting) => this.drawAllFilesJump(setting),
					},
				],
			},
			{
				type: "group",
				heading: t("settingGroupPatterns"),
				items: [
					{
						name: t("settingGlobsName"),
						desc: t("settingGlobsDesc"),
						control: { type: "toggle", key: "useGlobs" },
					},
					{
						name: t("settingOpenManyName"),
						desc: t("settingOpenManyDesc"),
						control: {
							type: "dropdown",
							key: "openManyAsk",
							options: { "5": "5", "10": "10", "20": "20", "50": "50", "0": t("openManyNever") },
						},
					},
				],
			},
			{
				type: "group",
				heading: t("settingGroupOtherPaths"),
				items: [
					{
						name: t("settingRecordPathsName"),
						desc: t("settingRecordPathsDesc"),
						control: { type: "toggle", key: "recordPaths" },
					},
				],
			},
			{
				type: "group",
				heading: t("settingGroupOutside"),
				items: [
					{
						// The one setting that widens what the plugin can reach, so it
						// says so: the description carries a warning line in the error
						// colour rather than burying the consequence in ordinary grey
						// body text.
						name: t("settingExternalName"),
						desc: this.externalDescription(),
						control: { type: "toggle", key: "accessExternalFiles" },
					},
				],
			},
			{
				type: "group",
				heading: t("settingGroupKeys"),
				items: [
					// The command ships without a key, so the way to give it one sits
					// where someone looking for its settings is already looking.
					{
						name: obsidianLabel(LABELS.hotkeys, "Hotkeys"),
						desc: t("settingHotkeysDesc").replace("{command}", t("commandFocusPathBar")),
						render: (setting: Setting) => this.drawHotkeysJump(setting),
					},
				],
			},
			{
				type: "group",
				heading: t("settingGroupReset"),
				items: [
					{
						name: t("settingRestoreName"),
						desc: t("settingRestoreDesc"),
						render: (setting: Setting) => this.drawRestoreDefaults(setting),
					},
				],
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

		// Groups are walked into, with their heading drawn as one.
		const flat: Definition[] = [];
		for (const definition of this.getSettingDefinitions()) {
			if ("type" in definition && (definition.type === "group" || definition.type === "list")) {
				const group = definition as unknown as { heading?: string; items?: Definition[] };
				if (group.heading) new Setting(containerEl).setName(group.heading).setHeading();
				flat.push(...(group.items ?? []));
			} else {
				flat.push(definition);
			}
		}
		for (const definition of flat) {
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

	/**
	 * The vault's icon: a few that suit a starting point, and any Lucide name
	 * typed beside them, previewed as it is typed. A name that draws nothing
	 * falls back to the house when the row is drawn.
	 */
	private renderVaultIcon(setting: Setting): void {
		const preview = setting.controlEl.createSpan({ cls: "lure-vault-icon-preview" });
		const show = (name: string): void => {
			preview.empty();
			applyIcon(setIcon, preview, name || DEFAULT_VAULT_ICON, DEFAULT_VAULT_ICON);
		};
		for (const preset of VAULT_ICON_PRESETS) {
			setting.addExtraButton((button) =>
				button
					.setIcon(preset)
					.setTooltip(preset)
					.onClick(async () => {
						await this.setControlValue("vaultIcon", preset);
						this.redraw();
					}),
			);
		}
		setting.addText((text) =>
			text
				.setPlaceholder(DEFAULT_VAULT_ICON)
				.setValue(this.plugin.settings.vaultIcon)
				.onChange((value) => {
					show(value.trim());
					void this.setControlValue("vaultIcon", value.trim() || DEFAULT_VAULT_ICON);
				}),
		);
		show(this.plugin.settings.vaultIcon);
		setting.controlEl.appendChild(preview);
	}

	/**
	 * Every setting back to its default, after asking. The language stays:
	 * it is the way out of a language you cannot read, and resetting it
	 * would put the page you are reading into another one.
	 */
	private drawRestoreDefaults(setting: Setting): void {
		setting.addButton((button) => {
			// Marked destructive: `setDestructive` from 1.13, the class the older
			// `setWarning` set before that.
			const marked = button as unknown as { setDestructive?: () => unknown };
			if (marked.setDestructive) marked.setDestructive();
			else button.buttonEl.addClass("mod-warning");
			button
				.setButtonText(t("settingRestoreButton"))
				.onClick(async () => {
					const ok = await ConfirmCreateFileModal.askWith(
						this.app,
						t("modalRestoreTitle"),
						t("modalRestoreBody"),
						t("settingRestoreButton"),
					);
					if (!ok) return;
					const language = this.plugin.settings.language;
					this.plugin.settings = { ...DEFAULT_SETTINGS, language };
					await this.plugin.saveSettings();
					this.redraw();
				});
		});
	}

	/** The external-access description, warning line and all. */
	/**
	 * The way to Obsidian's own *Show all file types*.
	 *
	 * Obsidian's own button rather than a link in the text. An anchor with an
	 * `href` *navigates*, and these settings can be a window of their own —
	 * sending that window to "#" tore it down, which is what "the settings
	 * close when I click it" was. An anchor without one is inert unless
	 * something listens, and a listener put on it by this plugin never fired
	 * in a popped-out window at all. A button built through the API is wired
	 * by Obsidian, exactly as the toggles are, and works wherever they work.
	 *
	 * It switches to the tab that is already there rather than asking for the
	 * settings to be opened: `openTabById` opens on the way, and opening what
	 * is already open is what closes a window of its own.
	 */
	private drawAllFilesJump(setting: Setting): void {
		setting.addExtraButton((button) =>
			button
				.setIcon("settings")
				.setTooltip(obsidianLabel(LABELS.showAllFileTypes, "Show all file types"))
				.onClick(() => {
					try {
						const settings = this.app.setting;
						// What a click on a settings search result does: the
						// tab, then the setting scrolled to the middle and
						// flashed, so it is found rather than looked for.
						const label = obsidianLabel(LABELS.showAllFileTypes, "Show all file types");
						const hit = settings?.searchIndex?.search?.(label)?.find((h) => h.tab?.id === "file");
						const result = hit?.results?.find((r) => r.entry?.definition?.name === label);
						if (hit && result && settings?.navigateToSearchResult) {
							settings.navigateToSearchResult(hit, result);
							return;
						}
						const files = (settings?.settingTabs ?? []).find((tab) => tab?.id === "file");
						if (files && settings?.openTab) settings.openTab(files);
						else settings?.openTabById?.("file");
					} catch {
						/* The setting is still where Obsidian keeps it. */
					}
				}),
		);
	}

	/**
	 * The way to Obsidian's Hotkeys, filtered to this plugin's commands.
	 *
	 * Built as the jump to *Show all file types* is, and for the same reason:
	 * an anchor tears a popped-out settings window down, and `openTabById`
	 * re-opens it. The filter is the page's own search, typed with the name
	 * Obsidian prefixes every one of these commands with.
	 */
	private drawHotkeysJump(setting: Setting): void {
		setting.addExtraButton((button) =>
			button
				.setIcon("keyboard")
				.setTooltip(obsidianLabel(LABELS.hotkeys, "Hotkeys"))
				.onClick(() => {
					try {
						const settings = this.app.setting;
						const hotkeys = (settings?.settingTabs ?? []).find((tab) => tab?.id === "hotkeys");
						if (hotkeys && settings?.openTab) settings.openTab(hotkeys);
						else settings?.openTabById?.("hotkeys");
						hotkeys?.setQuery?.(this.plugin.manifest.name);
					} catch {
						/* The page is still where Obsidian keeps it. */
					}
				}),
		);
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
