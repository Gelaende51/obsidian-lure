# Hard links, symbolic links and alias paths — design

Status: agreed (answers from `.personal/issues4.md`, "link specs additions", 2026-10-09).

## What it is for

One note reachable at more than one path: from the path bar, make a second
path for the note being renamed, and see and visit the note's other paths.

## Three kinds of second path, made in rename mode

| Kind | On disk | Made with |
| --- | --- | --- |
| **Alias path** | nothing — an entry in the note's `paths` frontmatter list | <kbd>Alt</kbd>+<kbd>Enter</kbd> |
| **Hard link** | a second directory entry for the same file (`fs.link`) | <kbd>Shift</kbd>+<kbd>Enter</kbd> |
| **Symbolic link** | a link file pointing at the note (`fs.symlink`, relative) | <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Enter</kbd> |

<kbd>Ctrl</kbd>+<kbd>Enter</kbd> keeps meaning *copy*. A typed path or a picked
row are both targets. A target that is already taken is refused with a
notice. Inside the vault only in this version. Desktop only, as the plugin is.

## The `paths` property

- Frontmatter key **`paths`**: a list of vault paths.
- It holds every alias path, and every hard and symbolic link the plugin makes.
  For a link it also holds the note's own path, because a hard link shares the
  frontmatter and a symbolic link reads it: from either end, *the other paths*
  are the list minus the path being looked from.
- Kept up to date: when a path in some note's list is renamed, the entry is
  rewritten; when it is deleted, the entry goes. One write per file on disk
  (by inode), so a hard-linked pair is not written twice.
- What an entry *is* is read from the disk, not stored: a symbolic link, the
  same inode as the note (hard link), or nothing there (alias path).

## Aliases in the dropdown

- **Path aliases** are listed in the folder they name, under their own name.
- **Native aliases** (Obsidian's `aliases`) are listed in the folder of the
  note that carries them.
- Both are **orange**, and picking one opens the note it stands for. Typing an
  alias path and pressing Enter opens the note rather than creating one.
- Not listed in rename mode (there the dropdown is about destinations).

## The other paths of a note

A button in front of the vault icon, shown only when the note has other paths:
its `paths` entries, files with the same inode found in the vault, symbolic
links in the vault pointing at it, and its native aliases. A menu lists them
with an icon per kind; a link opens that file, an alias shows its path on the
row. Hard and symbolic links not in `paths` are found by one background scan
of the vault (`lstat` per file), kept for the session and refreshed on vault
changes; the scan for hard links runs only when the note's link count is > 1.

### Its look (additions, 2026-10-09)

- The button carries a small count of the other paths.
- Its icon takes the colour of the strongest kind it holds: hard link
  (Obsidian purple) over symbolic link (pink) over alias (orange).
- The menu starts with the note's own path in blue, then the others in their
  colours: alias paths and Obsidian's aliases orange, symbolic links pink,
  hard links purple (and, seen from a symbolic link, the note it points at).

## Components

- `src/altPaths.ts` — the `paths` list (read, add, rename, remove via
  `processFrontMatter`), link creation, the disk index (inodes, symbolic
  links), and the alias index for the dropdown.
- `pathBreadcrumb.ts` — the three Enter chords in rename mode, alias rows on
  select and Enter, the other-paths button.
- `folderChildSuggest.ts` — alias rows, orange.
- `main.ts` — keeping `paths` up to date on vault rename and delete.
- Strings in every language; usage guide and changelog, including that sync
  tools (Obsidian Sync, Syncthing, git) do not keep hard links.

## Testing

`.dev/test-links.mjs` against the test vault on CI: each chord makes what it
says and records it in `paths`; a taken target is refused; both kinds of alias
are listed orange and open their note; Enter on a typed alias path opens the
note; the button appears exactly when there are other paths and its entries
open the right thing; renaming a link rewrites its `paths` entry.
