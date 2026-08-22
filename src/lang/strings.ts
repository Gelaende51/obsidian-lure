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
	settingDelimiterDesc: "Shown between path segments.",
	delimiterPresetTooltip: 'Use "{char}"',
	settingVaultNameName: "Show vault name",
	settingVaultNameDesc: "As the first segment of the path.",
	settingSwapActionsName: "Folder name opens the dropdown",
	settingSwapActionsDesc:
		"On, a folder name opens its dropdown and the delimiter after it reveals the folder in the " +
		"sidebar — or opens its folder note, if Folder notes handles it. Off, the two swap. " +
		"Never in rename/move mode.",
	settingDotFilesName: "Show dot files",
	settingDotFilesDesc:
		"List dot files in the dropdown. Hidden or not, they still block renaming onto their name.",
	menuOpenThisVault: "Open this vault",
	menuVaultId: "Copy vault ID",
	settingExtensionName: "Show file extensions",
	settingExtensionDesc:
		"Name the file on the row the way the filesystem does. Off, the extension is left off, " +
		"as Obsidian leaves it off a note's title.",
	settingExternalName: "Access external files",
	settingExternalDesc:
		"Let the vault name open your other vaults, your home folder, the filesystem root and " +
		"mounted drives. Off, the plugin never looks past this vault.",
	settingExternalWarning:
		"Reaches outside your vault. External files open read-only; creating, renaming or moving " +
		"needs a second, per-folder unlock.",

	// Create-file confirmation
	modalCreateTitle: "Create new file?",
	modalCreateBody: '"{path}" does not exist yet. Create it (and any missing folders)?',
	cancel: "Cancel",
	create: "Create",

	// Header controls
	renameToggleLabel: "Toggle rename/move mode",

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
	noticeCopied: 'Copied to "{path}"',
	noticeIsFolder: '"{path}" is a folder.',
	noticeNoSelection: "No file selected.",
	noticeCreateFailed: "Could not create file: {error}",
	/**
	 * Creating leaves nothing on screen where it happened — the new file
	 * opens, but a new folder is invisible until you go looking for it, and
	 * a creation from the path bar can land anywhere in the tree. One line
	 * for both, since the path already says which it was.
	 */
	noticeCreated: 'Created "{path}"',
	/** Command palette entry; Obsidian shows it prefixed with the plugin name. */
	commandFocusPathBar: "Focus the path bar",
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
	noticeExternalDisabled: "Paths outside your vault are off. Turn on {setting} in the plugin settings.",
	navLockEngage: "Lock navigation across panes",
	navLockRelease: "Unlock navigation across panes",
	navLockNeedsTwo: "Navigation lock needs at least two panes open.",
	navLockBreakTitle: "This rename would end the navigation lock",
	navLockBreakBody: "The panes would no longer stand in folders of the same name, so there would be nothing left to keep them in step.",
	navLockRenameAnyway: "Rename and unlock",
	/**
	 * The lock letting go on its own. Two reasons, two lines: a closed pane
	 * and a pane that navigated by itself are different things to have
	 * happened, and one vague sentence covering both would leave the user
	 * guessing which.
	 */
	navLockDroppedClosed: "Navigation lock released — one of the coupled panes is gone.",
	navLockDroppedMoved: "Navigation lock released — a coupled pane moved on its own.",
	noticeExternalNotFound: '"{path}" does not exist.',
	externalUnlockLabel: "Allow writing outside the vault",
	externalLockLabel: "Writing outside the vault is allowed — click to lock again",
	noticeExternalWriteLocked: "Writing outside your vault is locked. Use the lock button in the header to allow it.",
	/**
	 * Moving a note out of the vault, which Obsidian's own rename cannot
	 * follow. The count is given as a plain number rather than folded into
	 * the sentence, so no locale has to carry a plural rule for it.
	 */
	moveOutTitle: "Move this note out of your vault?",
	moveOutBody: "Obsidian can only update links inside the vault, so every link pointing at this note will break, and the note itself leaves the vault index. Notes linking here: {count}.",
	moveOutConfirm: "Move and break links",
	errorNotAFolder: '"{path}" exists and is not a folder.',
} as const;

export type StringKey = keyof typeof EN;
export type Strings = Record<StringKey, string>;
/** A locale need only override the strings it has translated. */
export type PartialStrings = Partial<Strings>;
