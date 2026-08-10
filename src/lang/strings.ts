/**
 * Every user-facing string in the plugin. English is the source of
 * truth: each locale supplies a partial override, and anything missing
 * falls back here, so an incomplete translation degrades to English
 * rather than to a blank label.
 *
 * Placeholders use {name} and are substituted by `t()`.
 */
export const EN = {
	// Settings
	settingAlignmentName: "Alignment",
	settingAlignmentDesc: "Where the breadcrumb sits in the header bar.",
	alignmentLeft: "Left (default)",
	alignmentCenter: "Center (classic Obsidian)",
	alignmentRight: "Right",
	settingDelimiterName: "Delimiter",
	settingDelimiterDesc: "Character(s) shown between path segments.",
	delimiterPresetTooltip: 'Use "{char}"',
	settingVaultNameName: "Show vault name",
	settingVaultNameDesc: "Show the vault name as the first breadcrumb segment.",
	settingSwapActionsName: "Delimiters open folders",
	settingSwapActionsDesc:
		"On, the underlined delimiter after a folder opens it — its folder note if a folder-notes plugin " +
		"is handling it, otherwise revealing it in the File Explorer. Off, the folder name does that instead. " +
		"Never applies in rename/move mode.",
	settingDotFilesName: "Show dot files",
	settingDotFilesDesc:
		"List files and folders whose name starts with a dot in the breadcrumb suggestions. " +
		"Hidden either way, they still block renaming a note onto their name.",
	settingExternalName: "Access external files",
	settingExternalDesc:
		"Let the vault name open a dropdown of your other vaults, your home folder, the filesystem " +
		"root and mounted drives, and browse and open files there. Off, the plugin never looks past " +
		"this vault.",
	settingExternalWarning:
		"This reaches outside your vault. Files out there open read-only, and creating, renaming or " +
		"moving anything needs a second, per-folder unlock — but no other setting in this plugin can " +
		"touch a file Obsidian doesn't manage.",

	// Create-file confirmation
	modalCreateTitle: "Create new file?",
	modalCreateBody: '"{path}" does not exist yet. Create it (and any missing folders)?',
	cancel: "Cancel",
	create: "Create",

	// Header controls
	renameToggleLabel: "Toggle rename/move mode",
	vaultRootLabel: "Vault root",

	// Name validation (mirrors Obsidian's own rename messages)
	msgEmpty: "File name cannot be empty.",
	msgDotfile: "File name must not start with a dot.",
	msgExists: "There's already a file with the same name",
	msgIllegal: "File name cannot contain any of these characters: {chars}",
	msgUnsafe: "Links will not work with file names containing any of these characters: {chars}",

	// Notices
	noticeExplorerDisabled: "File Explorer core plugin is disabled.",
	noticeExplorerOpenFailed: "Could not open File Explorer.",
	noticeExplorerRevealFailed: "Could not reveal in File Explorer.",
	noticeAlreadyExists: '"{path}" already exists.',
	noticeRenameFailed: "Could not rename/move file: {error}",
	noticeCopyFailed: "Could not copy file: {error}",
	noticeIsFolder: '"{path}" is a folder.',
	noticeCreateFailed: "Could not create file: {error}",
	noticeAutocompleteUnavailable: "Autocomplete unavailable: {error}",
	suggestMore: "{count} more — keep typing to filter",

	// Browsing outside the vault
	externalViewTitle: "External file",
	// Status lines are labels, not explanations: the buttons beside them
	// already say what state the file is in. The tooltip carries the why.
	externalBannerTitle: "Outside your vault",
	externalBannerTooltip: "Obsidian can't open a file outside your vault as a note, so Lure shows it here.",
	externalEditingEnabled: "Writing outside your vault",
	externalEditingTooltip: "Edits are saved straight to disk, outside your vault.",
	externalOpenInDefaultApp: "Open externally",
	// The two readings of a file, shown as a pair. Markdown is the default
	// for notes, text for everything else — and outside the vault the text
	// option doubles as the press that lifts read-only.
	externalRenderMarkdown: "View as Markdown",
	externalRenderText: "Edit as text",
	/** Same view, for a file that can be read but never written — truncated or unreadable. */
	externalViewText: "View as text",
	externalEditTooltip: "Also lifts read-only: edits are saved straight to disk, outside your vault.",
	externalOpenInVault: "Open in {vault}",
	warnUnregisteredType: "No editor for this file type",
	warnUnregisteredTooltip: "Obsidian has no view for this type and would hand it to your desktop; Lure shows it here as plain text.",
	externalTruncated: "Truncated — file too large",
	externalTruncatedTooltip: "Only the beginning of the file is shown, and editing stays off so the rest isn't lost.",
	noticeExternalOpenFailed: 'Could not open "{path}" in the default app.',
	noticeExternalReadFailed: "Could not read file: {error}",
	noticeExternalWriteFailed: "Could not save file: {error}",
	noticeExternalNotFound: '"{path}" does not exist.',
	externalUnlockLabel: "Allow writing outside the vault",
	externalLockLabel: "Writing outside the vault is allowed — click to lock again",
	noticeExternalWriteLocked: "Writing outside your vault is locked. Use the lock button in the header to allow it.",
	noticeExternalMoveOut: "A note can't be moved out of your vault — links to it would break. Hold {mod} to copy it there instead.",
	errorNotAFolder: '"{path}" exists and is not a folder.',
} as const;

export type StringKey = keyof typeof EN;
export type Strings = Record<StringKey, string>;
/** A locale need only override the strings it has translated. */
export type PartialStrings = Partial<Strings>;
