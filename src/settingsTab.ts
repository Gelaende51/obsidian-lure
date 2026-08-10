import { App, PluginSettingTab, Setting } from "obsidian";
import type BreadcrumbPathPlugin from "./main";
import type { BreadcrumbAlignment } from "./settings";
import { t } from "./lang";

const DELIMITER_PRESETS = ["/", ">", "▸", "›", "\\", "•"];

export class BreadcrumbSettingTab extends PluginSettingTab {
	constructor(app: App, private plugin: BreadcrumbPathPlugin) {
		super(app, plugin);
	}

	display(): void {
		const { containerEl } = this;
		containerEl.empty();

		new Setting(containerEl)
			.setName(t("settingAlignmentName"))
			.setDesc(t("settingAlignmentDesc"))
			.addDropdown((dropdown) =>
				dropdown
					.addOption("left", t("alignmentLeft"))
					.addOption("center", t("alignmentCenter"))
					.addOption("right", t("alignmentRight"))
					.setValue(this.plugin.settings.alignment)
					.onChange(async (value) => {
						this.plugin.settings.alignment = value as BreadcrumbAlignment;
						await this.plugin.saveSettings();
					}),
			);

		const delimiterSetting = new Setting(containerEl)
			.setName(t("settingDelimiterName"))
			.setDesc(t("settingDelimiterDesc"));

		for (const preset of DELIMITER_PRESETS) {
			delimiterSetting.addButton((button) =>
				button
					.setButtonText(preset)
					.setTooltip(t("delimiterPresetTooltip", { char: preset }))
					.onClick(async () => {
						this.plugin.settings.delimiter = preset;
						await this.plugin.saveSettings();
						this.display();
					}),
			);
		}

		delimiterSetting.addText((text) =>
			text.setValue(this.plugin.settings.delimiter).onChange(async (value) => {
				this.plugin.settings.delimiter = value || "/";
				await this.plugin.saveSettings();
			}),
		);

		new Setting(containerEl)
			.setName(t("settingVaultNameName"))
			.setDesc(t("settingVaultNameDesc"))
			.addToggle((toggle) =>
				toggle.setValue(this.plugin.settings.showVaultName).onChange(async (value) => {
					this.plugin.settings.showVaultName = value;
					await this.plugin.saveSettings();
				}),
			);

		new Setting(containerEl)
			.setName(t("settingSwapActionsName"))
			.setDesc(t("settingSwapActionsDesc"))
			.addToggle((toggle) =>
				toggle.setValue(this.plugin.settings.swapSegmentActions).onChange(async (value) => {
					this.plugin.settings.swapSegmentActions = value;
					await this.plugin.saveSettings();
				}),
			);

		new Setting(containerEl)
			.setName(t("settingDotFilesName"))
			.setDesc(t("settingDotFilesDesc"))
			.addToggle((toggle) =>
				toggle.setValue(this.plugin.settings.showDotFiles).onChange(async (value) => {
					this.plugin.settings.showDotFiles = value;
					await this.plugin.saveSettings();
				}),
			);

		// The one setting that widens what the plugin can reach, so it says
		// so: the description carries a warning line in the error colour
		// rather than burying the consequence in ordinary grey body text.
		const externalSetting = new Setting(containerEl)
			.setName(t("settingExternalName"))
			.addToggle((toggle) =>
				toggle.setValue(this.plugin.settings.accessExternalFiles).onChange(async (value) => {
					this.plugin.settings.accessExternalFiles = value;
					// saveSettings repaints every open row, so turning this off
					// takes effect on panes already showing an external path.
					await this.plugin.saveSettings();
				}),
			);

		externalSetting.descEl.createDiv({ text: t("settingExternalDesc") });
		externalSetting.descEl.createDiv({
			cls: "lure-setting-warning",
			text: t("settingExternalWarning"),
		});
	}
}
