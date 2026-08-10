# Lure

An [Obsidian](https://obsidian.md) plugin that turns the filename in a note's header bar into a clickable, editable breadcrumb of its full vault path — like the address bar in the [Dolphin](https://apps.kde.org/dolphin/) file manager.

```
my-vault / Projects / 2026 / Kickoff notes
```

Obsidian 1.4.0+ · desktop only · AGPL-3.0

## AI disclosure

- **Agent** — **Claude Opus 5** and **Claude Sonnet 5** (Anthropic, via Claude Code): wrote the TypeScript, the CSS, all 45 translation sets and the documentation. Translations are machine-generated and unreviewed by native speakers.
- **Author** — Vault51: specified every feature, tested each iteration in a live vault, directed the fixes, reviewed all output.
- **Usage** — 3–5 Aug 2026, four sessions, ~1,240 responses: ~1.7 M tokens generated, ~5.4 M sent, ~315 M cached re-reads (~322 M total).

## Features

- **Click a folder** for a dropdown of its *parent's* contents — swap one folder for a sibling, leave the rest of the path alone. The note's name works the same way, extension included.
- **Click the delimiter** after a folder to reveal and expand it in the File Explorer. One setting swaps the two roles.
- **Right-click or drag any entry** — the File Explorer's own context menu and drag behaviour.
- **Click the filename or empty space** to type a path, with autocomplete. `/` descends, <kbd>Backspace</kbd> steps out, <kbd>Enter</kbd> commits.
- **Pencil Folder button** switches the same interactions to move/rename, validated as Obsidian validates.
- **Hold <kbd>Ctrl</kbd>** to open in a new tab — or, in move/rename mode, to copy the note there instead.
- **<kbd>F2</kbd>** alternates between the inline title and the path bar.
- **Click the vault name** to browse your other vaults, home, the filesystem root and mounted drives without switching vaults. Read-only until you open a padlock, and framed in the error colour throughout. Off by default — see [outside the vault](#outside-the-vault).
- **Two warning tiers** — red outside the vault, orange for text files Obsidian has no editor for. See [the warning colours](docs/usage.md#the-two-warning-colours).
- **Themeable icons**, swapped from a CSS snippet — and **45 locales**, every language Obsidian ships.
- **Settings:** alignment, delimiter presets, which click opens the dropdown, vault name, dot files.

→ [Full usage guide](docs/usage.md)

## Outside the vault

Obsidian's developer policies require plugins to explain any access to files outside the vault, so, plainly:

**Whether it does any of this at all.** Only if you turn on **Access external files**, which is **off by default**. With it off there is no way to reach an external path from the plugin, and none of the code below ever runs.

**What it reads.** Only when you ask it to. Clicking the vault name lists your other vaults — read from Obsidian's own `obsidian.json` — plus your home folder, the filesystem root, and mounted drives (`/proc/mounts` on Linux, `/Volumes` on macOS, drive letters on Windows). Browsing from there lists directory contents, and opening a file reads that one file.

**What it writes.** Nothing, until you press a button that says so. There are two such buttons, each covering only its own surface:

- The viewer's **Edit as text** button unlocks the file in front of you, for that one file in that one tab. Your edits are then saved back to it as you type.
- The header's **padlock**, shown only while the path bar points outside your vault, unlocks creating, renaming and moving at external paths. It re-locks when you come back inside, so permission never outlives the folder you granted it for.

Neither unlock is stored in the workspace or in settings, so writing is never armed on a file you don't remember opening. Nothing is ever overwritten in either state — an existing target is refused, using the filesystem's own exclusive-create rather than a check that could lose a race — and a note can never be *moved* out of your vault, because links to it would break silently; holding <kbd>Ctrl</kbd> copies it out instead.

**Why.** Notes you want are often in another vault, a sync folder, or a USB stick, and Obsidian's own answer — switch vaults — closes everything you had open. This lets you go and look without leaving, and fix a typo while you're there.

**The limitation.** Obsidian's editor is bound to files inside the vault, so an external file **cannot** be opened as a real note with links, backlinks and the rest; no plugin can do that. Lure shows it in its own viewer instead (Markdown, images, audio, video, PDF), with *Open externally* for everything else. The path bar stays framed in the error colour whenever it points outside your vault, and the trail starts at the location you picked — a vault name, your home folder, a drive — rather than at the machine's directory layout.

## Installation

Not yet in the Community Plugins directory.

**Manual:** download `main.js`, `manifest.json` and `styles.css` from the [latest release](https://github.com/Gelaende51/obsidian-lure/releases) into `<vault>/.obsidian/plugins/lure/`, then enable it under **Settings → Community plugins**.

**BRAT:** add `Gelaende51/obsidian-lure` as a beta plugin.

**From source:** `npm install && npm run build` — see [development](docs/development.md).

## Compatibility

No plugin is required. The core **File Explorer**, if enabled, is what reveals folders in the sidebar; without it those clicks are no-ops.

Desktop only — the interaction model needs hover, precise clicks and a keyboard. Known overlaps, possible conflicts, and how this compares to Quick Explorer and Breadcrumbs are in [compatibility](docs/compatibility.md).

> **Side note — folder notes.** Because Lure re-dispatches the delimiter click onto Obsidian's own breadcrumb element, any folder-notes plugin answers it: the delimiter opens the folder's note instead of revealing the folder, under whatever note-location convention that plugin is set to. Nothing here is written for it, but it is a good pairing — every segment of the path becomes a place you can actually go.

## Contributing

- Issues and pull requests welcome — especially **translation corrections**, since all 45 locales are machine-translated and unreviewed by native speakers. See [development](docs/development.md) for setup and ground rules.
- **Issue tracker:** https://github.com/Gelaende51/obsidian-lure/issues
- **Donations:** [Ko-fi](https://ko-fi.com/vault51). The plugin is free and AGPL-licensed either way; tips are appreciated, never required. Intended use is carbon offsetting — an intention, not a commitment: nothing is offset until the total is large enough to be worth the effort, and this line will say so once anything actually has been.

## Credits

- **Vault51** — author: design, requirements, and manual testing throughout.
- **Claude Opus 5** and **Claude Sonnet 5** (Anthropic, via Claude Code) — implementation, translations and docs, under the author's direction. See [AI disclosure](#ai-disclosure).
- **[Obsidian](https://obsidian.md)** — the application this extends, and the source of every component the plugin uses: its plugin API, the Lucide icon set behind `setIcon`, the bundled i18next instance the context-menu labels are read from, and its own CSS classes and variables. Nothing third-party is bundled; the plugin has **no runtime dependencies**.

> **The Obsidian team did not participate in this project in any way** — they did not write, review, endorse or support it. Obsidian is a trademark of Dynalist Inc.; this is an independent, unaffiliated plugin.

Contributors will be listed here as contributions land.

## Links


- **Documentation:** [docs/](docs/)
- **Web presence / source:** https://github.com/Gelaende51/obsidian-lure
- **Donations:** [Ko-fi](https://ko-fi.com/vault51) — see [contributing](#contributing).
- **License:** [LICENSE](LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. Forks and redistributed builds must ship their source under the same licence.
