# Hard links, symbolic links and alias paths — design

Status: draft for review. From `.personal/issues4.md`, group F.

## What it is for

One note reachable at more than one path: from the path bar, make a second
path for the note being renamed, and see and visit the note's other paths.

## Three kinds of second path

| Kind | What it is on disk | How Obsidian sees it | Made with (rename mode) |
| --- | --- | --- | --- |
| **Alias path** | nothing — a list in the note's frontmatter | one note; the extra path is the plugin's to show | <kbd>Alt</kbd>+<kbd>Enter</kbd> |
| **Hard link** | a second directory entry for the same file (`fs.link`) | **two notes** with the same content | <kbd>Shift</kbd>+<kbd>Enter</kbd> |
| **Symbolic link** | a link file pointing at the note (`fs.symlink`) | not indexed by Obsidian inside the vault | see open questions |

<kbd>Ctrl</kbd>+<kbd>Enter</kbd> keeps meaning *copy*.

## Behaviour

1. **Alias path.** <kbd>Alt</kbd>+<kbd>Enter</kbd> in rename mode adds the typed
   path to a frontmatter list on the note (recommended key: `paths`, as
   Obsidian's own `aliases` holds names, not paths) and leaves the note where it
   is. Typing an alias path into the field (navigation mode) opens the note, as
   though it were there.
2. **Hard link.** <kbd>Shift</kbd>+<kbd>Enter</kbd> in rename mode creates a hard
   link at the typed path, desktop only, same filesystem only (a link across
   devices fails and says so). The vault then indexes both paths as separate
   notes that change together; this is stated in the confirmation the first
   time, because sync tools (Obsidian Sync, Syncthing, git) do not keep hard
   links and will turn them into copies.
3. **The other paths of a note.** When a note has any — alias paths from its
   frontmatter, other hard links to the same inode inside the vault, symbolic
   links inside the vault pointing at it — a dropdown button appears in front
   of the vault icon. It lists them by kind with an icon each; picking one
   opens the note at that path (for an alias: shows it on the row).
4. **Finding hard links** needs the inode of every file: built once from
   `fs.stat` over the vault in the background, kept up to date from vault
   events, and only while the feature is on (a setting, off by default,
   because it costs a stat per file on large vaults).

## Components

- `src/altPaths.ts` — reading/writing the frontmatter list
  (`app.fileManager.processFrontMatter`), the inode index, `fs.link` /
  `fs.symlink` wrappers with the vault-boundary and padlock checks the
  external writes already use.
- `pathBreadcrumb.ts` — the two modified Enters in rename mode; the
  other-paths button and its dropdown.
- Settings: *Find other paths of a note* (off), the frontmatter key.
- Strings in every language; docs including the sync caveat.

## Testing

A suite against the test vault: each modified Enter creates what it says,
the button appears exactly when a note has another path, and each row opens
the right thing; a cross-device hard link is refused with a message.

## Open questions (recommended answer first)

1. **Symbolic links:** which key makes one — <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Enter</kbd>
   (recommended), or a menu entry only, or not made at all (only shown)?
2. **Frontmatter key** for alias paths: `paths` (recommended) or a setting.
3. **Alias paths in navigation:** open the note (recommended), or only list it.
4. **Mobile:** alias paths work everywhere; hard and symbolic links are
   desktop only and the keys do nothing there (recommended), or say so.
