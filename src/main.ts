/*
 * Lure — an editable vault-path breadcrumb for Obsidian note headers.
 * Copyright (C) 2026 Vault51
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or (at
 * your option) any later version. It is distributed WITHOUT ANY WARRANTY;
 * see the LICENSE file or <https://www.gnu.org/licenses/> for details.
 */

import { Command, Plugin } from "obsidian";
import { BreadcrumbManager } from "./breadcrumbManager";
import { EXTERNAL_VIEW_TYPE, ExternalFileView } from "./externalFileView";
import { BreadcrumbSettingTab } from "./settingsTab";
import { BreadcrumbPathSettings, DEFAULT_SETTINGS } from "./settings";

/** Obsidian's built-in "Rename file" command, bound to F2 by default. */
const RENAME_COMMAND_ID = "workspace:edit-file-title";

type CheckCallback = NonNullable<Command["checkCallback"]>;

export default class BreadcrumbPathPlugin extends Plugin {
	settings: BreadcrumbPathSettings = DEFAULT_SETTINGS;
	private manager!: BreadcrumbManager;
	/** Alternates the rename command between the inline title and the header path bar. */
	private useHeaderRename = false;
	private originalRenameCallback: CheckCallback | null = null;

	async onload(): Promise<void> {
		await this.loadSettings();
		this.addSettingTab(new BreadcrumbSettingTab(this.app, this));

		// Obsidian's editor only works on TFiles, which exist for vault
		// contents alone, so a file reached by browsing out of the vault
		// gets this read-only view instead. Registered unconditionally:
		// a leaf restored from a saved workspace has to find its view type.
		this.registerView(EXTERNAL_VIEW_TYPE, (leaf) => new ExternalFileView(leaf, this));

		this.manager = new BreadcrumbManager(this);
		this.manager.registerEvents();

		this.app.workspace.onLayoutReady(() => this.patchRenameCommand());
	}

	onunload(): void {
		this.manager.unpatchAll();
		this.restoreRenameCommand();
	}

	async loadSettings(): Promise<void> {
		const stored = (await this.loadData()) ?? {};
		// Only keys the plugin still has. A plain merge would carry a setting
		// from a removed feature forward for ever, since saveData writes back
		// whatever it was handed.
		const known = Object.entries(stored as Record<string, unknown>).filter(
			([key, value]) => key in DEFAULT_SETTINGS && value !== undefined,
		);
		this.settings = Object.assign({}, DEFAULT_SETTINGS, Object.fromEntries(known));
	}

	async saveSettings(): Promise<void> {
		await this.saveData(this.settings);
		this.manager.refreshAll();
	}


	/**
	 * Makes the rename command alternate between Obsidian's inline-title
	 * rename and this plugin's header path bar, so one key reaches both.
	 *
	 * This wraps the command rather than intercepting its key: Obsidian
	 * handles hotkeys from a capture-phase listener on `window`, which
	 * stops the event before any later listener sees it, so a plugin
	 * can't reliably grab the key itself. Wrapping the command also
	 * means any rebound key — and the command palette — comes along for
	 * free, with no hotkey parsing of our own.
	 */
	private patchRenameCommand(): void {
		const command = this.app.commands?.commands?.[RENAME_COMMAND_ID];
		const original = command?.checkCallback;
		if (!command || !original) return;

		this.originalRenameCallback = original;
		command.checkCallback = (checking: boolean) => {
			// Availability is entirely Obsidian's call — we only change
			// what happens when the command actually runs.
			if (checking) return original.call(command, true);

			// With Obsidian's inline title turned off there's nothing for
			// the native rename to focus (it would fall back to the header
			// title, which this plugin hides), so the path bar becomes the
			// only target instead of every other press doing nothing.
			if (this.useHeaderRename || !this.hasInlineTitle()) {
				const breadcrumb = this.manager.getActiveBreadcrumb();
				if (breadcrumb) {
					breadcrumb.startHeaderRename();
					this.useHeaderRename = false;
					return true;
				}
			}

			this.useHeaderRename = true;
			return original.call(command, false);
		};
	}

	private restoreRenameCommand(): void {
		const command = this.app.commands?.commands?.[RENAME_COMMAND_ID];
		if (command && this.originalRenameCallback) {
			command.checkCallback = this.originalRenameCallback;
		}
		this.originalRenameCallback = null;
	}

	private hasInlineTitle(): boolean {
		const leaf = this.app.workspace.getMostRecentLeaf();
		return leaf?.view.containerEl.querySelector(".inline-title") != null;
	}
}
