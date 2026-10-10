# Links for files outside the vault

Decided 2026-10-10: recorded in the plugin (issues4: "brainstorm how to
efficiently implement hardlink, alias and symlink handling for files outside
the vault" → "record them in the plugin").

## What it does

- Renaming a file outside the vault (padlock open), the same chords as inside
  make a second path instead of moving it: <kbd>Shift</kbd>+<kbd>Enter</kbd> a
  hard link, <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Enter</kbd> a symbolic link
  (written relative), <kbd>Alt</kbd>+<kbd>Enter</kbd> an alias path.
- The other-paths button (or the badge) shows them for an external file as it
  does for a note, in the same colours, with the same menu.
- Opening an alias path outside the vault opens the file it names.
- Moving or trashing a file through Lure carries its record along / drops it.

## Where it is kept

Outside the vault there is no frontmatter to write into (most files are not
notes) and no index to ask. The record lives in the plugin's own folder, in
`external-links.json`, apart from `data.json`: "Restore defaults" resets the
settings and must not take the links with it.

```json
{ "/home/me/a.txt": { "hard": ["/home/me/b.txt"], "symbolic": ["/tmp/a"], "alias": ["/home/me/old/a.txt"] } }
```

Keyed by the file's absolute path in the machine's spelling. A hard link is
recorded under both names, each listing the other: neither is the original.

## Reading it back

The record says what was made; the disk says what is still there. Each time a
list is shown, entries are checked: a hard link must still be the same file
(device and inode), a symbolic link must still be a link resolving to the
file, an alias is kept as long as nothing else stands at its path. Entries that
fail are left out of the list and dropped at the next write. The file itself
being a symbolic link is read off the disk (its target), as inside the vault.

## Not in this step

- Links between the vault and the outside (a hard link from a note to a file
  out there) are made with the vault's own rules when the target is inside.
- Changes made by other programs are only noticed when a list is next shown.
