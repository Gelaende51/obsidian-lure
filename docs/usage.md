**Read this in other languages:** **English** · [العربية](i18n/usage.ar.md) · [አማርኛ](i18n/usage.am.md) · [Беларуская](i18n/usage.be.md) · [বাংলা](i18n/usage.bn.md) · [Català](i18n/usage.ca.md) · [Čeština](i18n/usage.cs.md) · [Dansk](i18n/usage.da.md) · [Deutsch](i18n/usage.de.md) · [Ελληνικά](i18n/usage.el.md) · [Español](i18n/usage.es.md) · [فارسی](i18n/usage.fa.md) · [Suomi](i18n/usage.fi.md) · [Français](i18n/usage.fr.md) · [Gaeilge](i18n/usage.ga.md) · [עברית](i18n/usage.he.md) · [Magyar](i18n/usage.hu.md) · [Bahasa Indonesia](i18n/usage.id.md) · [Italiano](i18n/usage.it.md) · [日本語](i18n/usage.ja.md) · [ქართული](i18n/usage.ka.md) · [ភាសាខ្មែរ](i18n/usage.kh.md) · [한국어](i18n/usage.ko.md) · [Latviešu](i18n/usage.lv.md) · [Bahasa Melayu](i18n/usage.ms.md) · [नेपाली](i18n/usage.ne.md) · [Nederlands](i18n/usage.nl.md) · [Norsk](i18n/usage.no.md) · [Polski](i18n/usage.pl.md) · [Português](i18n/usage.pt.md) · [Português (Brasil)](i18n/usage.pt-BR.md) · [Română](i18n/usage.ro.md) · [Русский](i18n/usage.ru.md) · [संस्कृतम्](i18n/usage.sa.md) · [Slovenčina](i18n/usage.sk.md) · [Shqip](i18n/usage.sq.md) · [Српски](i18n/usage.sr.md) · [Svenska](i18n/usage.sv.md) · [ไทย](i18n/usage.th.md) · [Türkçe](i18n/usage.tr.md) · [Українська](i18n/usage.uk.md) · [Oʻzbekcha](i18n/usage.uz.md) · [Tiếng Việt](i18n/usage.vi.md) · [简体中文](i18n/usage.zh.md) · [繁體中文](i18n/usage.zh-TW.md)

# Usage

[← back to README](../README.md)

## The breadcrumb

The note's full vault path replaces the bare filename in the view header — the bar below the tab row that also holds the back/forward buttons.

Two things on the row are clickable, and **Folder name opens the dropdown** decides which does what:

| | Folder name | Delimiter after it |
| --- | --- | --- |
| **On** (default) | Selects that folder for editing | Opens the folder |
| **Off** | Opens the folder | Descends into that folder |

"Opens the folder" means whatever clicking that segment does in stock Obsidian. Without a plugin listening there, the folder is revealed in the File Explorer sidebar — highlighted, and expanded to show its contents.

With [Folder notes](obsidian://show-plugin?id=folder-notes) installed the same click opens that folder's note instead. It is the one folder-note plugin found to claim the header path; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) and [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) manage folder notes but don't listen for a click on the breadcrumb, so with those the delimiter reveals the folder as usual. See [compatibility](compatibility.md#verified-against).

A delimiter is **underlined only when the folder before it actually has a folder note**, so the underline is a promise that something is there to open. Every delimiter stays clickable either way — one without an underline reveals and expands its folder in the sidebar, which the pointer cursor still signals. The underline moves off the folder name at the same time: with the swap on, the name opens the dropdown, so marking it as the link to the note would be a lie.

**Rename/move mode overrides both**, whatever the setting says: nothing on the row opens a folder while a move is pending, because opening one would abandon the move. Folder names select for editing and delimiters descend — both are ways of picking the destination — and the underline disappears to show that opening is suspended.

The **vault root** is the one segment that isn't a path segment. It has no parent to list siblings from, so instead it opens the [locations dropdown](#browsing-outside-the-vault) — your other vaults, home, the filesystem root, and mounted drives.

## Clicking a segment: swap it for a sibling

Clicking a folder name selects **that folder's name** in a text input and opens a dropdown of the folder **one layer up** — its parent. Typing or picking an entry swaps this folder for a sibling and leaves everything below it untouched, so `Projects/2026/Kickoff.md` → click `2026` → pick `2025` gets you `Projects/2025/Kickoff.md`.

Clicking the **note's name** works the same way against its own folder, and selects the file name **including the extension** — renaming or retargeting a note usually means changing that too.

Clicking the folder has already selected one segment, so **one further click** widens the selection to the whole line — that folder *and* everything below it — and typing then replaces the rest of the path in one go. Works the same in navigation and rename/move mode.

That only applies as a continuation of the click that opened the field. Once you've used the field, it behaves like any other text input: click places the caret, double-click takes a word, triple-click takes the line.

Either way the rest of the path stays visible around the input, as chips before it and as unselected text after it, so the full path never disappears from the header. Type to replace the selection, or press <kbd>End</kbd> / <kbd>→</kbd> to keep it and edit from there. The dropdown lists the whole folder regardless of what's prefilled; it only starts filtering once you actually type.

## Descending by delimiter

Clicking a delimiter (with **Folder name opens the dropdown** off) descends into the folder before it: the dropdown lists *that* folder's contents, and the rest of the path opens selected in the input. Picking a folder appends it to the breadcrumb trail and immediately opens the next dropdown, so you can click your way down a tree without leaving the header row.

## Dropdown entries are real file-manager rows

Every file and folder in the dropdown behaves like its row in the File Explorer:

- **Right-click** for the same context menu — *New note* / *New folder* on a folder, *Open in new tab* / *Rename…* / *Delete* on a file — including entries other plugins add to file menus.
- **Drag** an entry anywhere Obsidian accepts a file: into an editor to insert a link, onto a folder in the File Explorer to move it, onto the tab bar to open it.

Menu wording comes from Obsidian's own translations, so it matches the rest of the app in every language.

## Typing a path

- Clicking the **empty space** before or after the breadcrumbs opens a text input prefilled with the whole path and fully selected — type over it, or edit in place. (Clicking the filename itself selects just the file name; see above.)
- Typing while a breadcrumb trail is showing converts the trailing segment into a small input with live autocomplete scoped to the current folder.
- `/` commits the current segment and descends into it.
- <kbd>Backspace</kbd> in an empty input steps back out to the parent folder, reopening its name with the cursor at the end.
- <kbd>Enter</kbd> commits; <kbd>Esc</kbd> or a click elsewhere cancels back to the file's real path.

The input is chrome-free — no box, no border — so it reads as the path text itself, and it auto-grows as you type.

## Navigation never touches the open file

In the default (navigation) mode the currently open note is **never** renamed or moved.

- A path that resolves to an existing file opens it.
- A path that doesn't exist yet prompts *"Create file here?"*. Confirming creates any missing parent folders and the file; cancelling does nothing at all.

## <kbd>Ctrl</kbd> — new tab, and copy instead of move

Holding <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> on macOS) while picking a file from the dropdown, or while pressing <kbd>Enter</kbd> on a path, sends the result to a **new tab** instead of this one:

| | Plain | With <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Pick or type an existing file | Opens here | Opens in a new tab |
| Type a path that doesn't exist | Prompts, then opens here | Prompts, then opens in a new tab |
| Commit a path in rename/move mode | **Moves** the note there | **Copies** it there and opens the copy in a new tab |

The modifier is read with Obsidian's own rule, so it behaves exactly as it does on a link or a File Explorer row — middle-click also means "new tab", <kbd>Ctrl</kbd>+<kbd>Alt</kbd> means a split, and <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> a new window.

Copying refuses to overwrite, exactly as moving does — including onto the note's own path, where there is nothing sensible to copy.

## Browsing outside the vault

**This is off by default.** Turn on **Access external files** in the settings first — reading and writing outside the vault is the one thing this plugin does that Obsidian itself won't, so it is opted into rather than out of. With it off the vault name simply reveals your vault in the File Explorer, and nothing here ever looks past it.

Clicking the **vault name** (or the 🏠 icon, when *Show vault name* is off) opens a dropdown of places rather than contents:

- **Your other vaults**, read from Obsidian's own registry, most recently opened first, each under Obsidian's own vault icon — the one the app itself uses for vault commands. The vault you already have open takes a house instead: it's where the row starts from by default, not somewhere to go.
- **Home**, under its own account name, marked by a `~`. Lucide has no tilde, so this one is drawn by the plugin on Lucide's own 24×24 grid with the same stroke — an icon the set is missing rather than a text character sitting among icons.
- The **filesystem root**, labelled `root` — untranslated, since that's its name on every system — rather than `/`, which would read as an empty step next to the separator that follows it.
- **Mounted drives**, with an icon per type where that's cheap to determine: network shares, optical discs, floppies and removable media get their own; anything else gets a generic drive. On Windows drives show as `C:` with a generic icon — volume names and precise types need WMI, which is deliberately not done.

Picking another vault **does not switch Obsidian to it.** Everything you have open stays open; the breadcrumb simply starts browsing there. That's the whole point of having it on the path bar rather than deferring to the sidebar's vault switcher.

### While you're outside

The path **starts at the location you picked**, not at the machine's directory layout — choose `Archive` and the row reads `Archive / notes / …`, not `/home/you/Vaults/Archive/notes/…`. The leading segment carries an icon for what it is (vault, home, drive), and <kbd>Backspace</kbd> stops there rather than walking on up into the rest of the filesystem. With *Show vault name* off, that segment is the icon alone — the setting is about the row's opening segment whichever vault it names, not only your own.

The path bar is **framed in the error colour** — the same ring rename mode draws — for as long as it points outside your vault. It marks a standing condition, not a moment: while it's up, none of Obsidian's own handling applies to what the row is showing, and writing is locked until you say otherwise.

Browsing otherwise works as it does inside: chips, delimiters, typing, autocomplete, <kbd>Backspace</kbd> to step out. The same visibility rules apply too, so unsupported extensions still need Obsidian's *Show all file types* and dot-files still need this plugin's setting.

**Right-click and drag** on dropdown entries don't work out there — those are the File Explorer's own handlers, and they need a file the vault knows about.

### Writing outside the vault

Everything that writes is **locked by default**. A **padlock** appears next to the rename toggle in the header for as long as the row points outside your vault; pressing it opens the lock and turns red, matching the ring around the row.

The permission is granted **to a location, not to a moment**: it survives everything you'd do while working in one place — finishing a move, clicking away from the input, opening a file — and ends when you pick a different vault, drive or root from the dropdown, when the row returns to a vault file, or when you press the padlock again. So a run of moves inside one folder takes one press, not one per file.

With the padlock open, the path bar behaves out there the way it does inside:

| Gesture | Result |
| --- | --- |
| Type a name that doesn't exist, <kbd>Enter</kbd> | Same "create it?" prompt as inside; missing parent folders are created too. A name with no extension becomes a `.md`, exactly as inside |
| Rename/move mode, type a new name | Renames the file the row is showing. A name with no extension keeps the file's own — out here a folder holds every kind of file, and a rename shouldn't quietly turn a `.png` into a `.md` |
| Rename/move mode, browse elsewhere, pick **keep this name** | Moves it there under the name it already has |
| Hold <kbd>Ctrl</kbd> on either | Copies instead of moving, and opens the copy in a new tab |

Locked, all of those report what's blocking them instead of happening. Nothing is ever overwritten in either state: a target that already exists is refused, and the refusal is the filesystem's own (`COPYFILE_EXCL`, an exclusive create) rather than a check that could lose a race. A move across filesystems — off a USB stick, off a network share — falls back to copy-then-delete, and the original is only removed once the copy has landed.

**One thing the padlock does not unlock: moving a note *out* of your vault.** `fileManager` can't follow a file across that boundary, so every link pointing at the note would break silently and Obsidian would simply see it vanish. Holding <kbd>Ctrl</kbd> copies it out instead, which has none of that problem, and the notice says so. Going the other way — bringing an outside file *into* the vault — isn't wired up yet either.

### Opening an external file

Obsidian's editor only works on files inside the vault, so an external file **cannot** be opened as a real note with links, backlinks and the rest — that's a limit of the app, not of this plugin. Picking one opens a **preview** instead, read-only until you say otherwise:

| Type | Shown as |
| --- | --- |
| `.md`, `.markdown` | Rendered Markdown |
| Images, audio, video, PDF | Native player/viewer |
| Any other **text** file (`.json`, `.css`, `.log`, `.txt`, …) | Verbatim plain text |
| Binary formats with no viewer (`.zip`, `.exe`, …) | Handed to *Open externally* |

The viewer has two readings of a file, and since they exclude each other only the one you'd switch **to** is shown:

| | What it does | Default for |
| --- | --- | --- |
| **View as Markdown** | Renders the file as a note, read-only | `.md`, `.markdown` |
| **Edit as text** | The source, editable | everything else |

Outside the vault, **Edit as text** is also the press that lifts read-only — the mode and the permission are one gesture rather than two buttons to reason about. It's tinted red **whenever pressing it would lift read-only**, whether you're arming editing in place or coming straight from the rendered view; inside the vault there's nothing to unlock, so it stays plain. **View as Markdown** takes a light accent wash — the same tint Obsidian gives selected text — marking it as the way back rather than a call to action.

Because the button tracks *editing* rather than the raw mode, a file sitting read-only in the text view still offers **Edit as text**: that's the press that arms it. A file that can never be typed into — truncated, or unreadable — says **View as text** instead, since that is all the press can deliver.

The defaults are the useful way round rather than the literal one: a `#` in a shell script is a comment, not a heading, so rendering a `.log` as Markdown would quietly swallow it. Either default can be overridden per file, and the choice goes into the leaf's history, so back/forward and a reopened workspace keep it — plenty of notes live in `.txt` files, and plenty of `.md` files are easier to read as source.

**Files in your vault are editable straight away**, with no unlock: *Edit as text* is a real editor and writes back as you type.

**Editing is remembered across the switch.** Going to *View as Markdown* suspends it — a static render has nothing to type into, and Live Preview needs Obsidian's own editor, which only exists for files inside the vault — so nothing claims you're editing while you're there. Going back to *Edit as text* picks up where you left off.

**Files outside the vault open read-only, and *Edit as text* lifts that.** The press is the whole gate: until it happens, nothing out there is written. Afterwards the file saves as you type, exactly like one in the vault; and the status line changes from a lock to a pencil. The unlock covers that one file in that one tab — navigating to another file re-locks, and it is deliberately not stored in the tab's history, so a reopened workspace never comes back with writing already armed on a system file you don't remember opening.

**Truncated files stay read-only regardless** — saving what's on screen would discard everything past the cap, so the button isn't offered at all rather than offered and refused. The same goes for a file that couldn't be read: there's nothing to write back but an empty pane.

If the write fails — a read-only mount, a file you don't own — the system's own reason is shown in a notice.

Very large files are shown truncated, and the status line says so rather than leaving you to find out — alongside the other conditions rather than trailing the buttons, since it is a fact about the file like the rest of them. The caps are measured against a live renderer rather than guessed — laying out a megabyte of text in one pane kills Obsidian's renderer process outright, and Markdown costs several times more per byte than plain text, so the two have separate limits and a single enormous line is shortened even when the file as a whole is small.

**The status lines are labels, and the explanation is a tooltip.** Each line states what is true in as few words as it takes — *Outside your vault*, *No editor for this file type*, *Truncated — file too large* — because the buttons beside them already say what state the file is in. Hovering one gives the sentence: why Obsidian can't open it as a note, what would otherwise happen to this file type, what truncation costs you.

This also applies to files **inside** your vault. Obsidian hands any extension it has no view for straight to the desktop's default application — so a `.txt` or `.json` in your vault would leave Obsidian entirely. Those now open in the same viewer, with the orange ring, since "open it in Obsidian" is what you asked for — and being vault files, they're editable there without any unlock. Binary files with no viewer keep Obsidian's behaviour; there is nothing to show.

The preview opens **in the tab you were in**, so back/forward return you to the note you came from; hold <kbd>Ctrl</kbd> for a new tab as everywhere else. The header bar keeps showing the external file's path while it's open, so you can carry on browsing from there.

A quiet line above the content offers the ways out:

- **Open in *(vault)*** — shown when the file belongs to one of your other vaults. Hands it to Obsidian's own URI handler, which opens that vault's window with the note in it, as a real editable note. This window is left exactly as it was; nothing switches under you.
- **View as Markdown** / **Edit as text** — the two readings; the second also lifts read-only outside the vault.
- **Open externally** — hands the file to your desktop's default application, including the binary formats this viewer can't show.

Nothing outside your vault is written unless you press *Edit as text* first. See the README's [Outside the vault](../README.md#outside-the-vault) section for the full disclosure.

## The two warning colours

| | When | What it means |
| --- | --- | --- |
| **Red** ring on the path bar | The row points outside your vault | Obsidian cannot open what's there as a note, and nothing out there is written until you open the padlock. |
| **Orange** ring on the path bar, orange entries in the dropdown | The file is a text type Obsidian has no view for | A caution. Obsidian would hand it to your desktop's default application; the plugin shows it instead. |

The **two are independent, and both can hold at once** — an external `.json` is outside your vault *and* a type Obsidian has no editor for. In the viewer they appear as separate lines, each stating only its own fact. On the path bar, red wins where both apply, since two rings would only be noise.

The orange tier is deliberately narrow. Registered types (Markdown, canvas, images, PDF, audio, video) are handled properly and get nothing. Binary files get nothing either — you are not going to edit a `.zip` into a mess by accident. What is left is exactly the hazard: a `.json`, `.css` or `.log` that **Show all file types** has made visible.

Red wins where both would apply; two rings at once would only be noise.

## Move/rename mode

The pencil button at the far right of the header — next to the view-mode button, same size as the native buttons — toggles move/rename mode. The header row is then framed in the accent colour, exactly like renaming in the File Explorer. The same clicks and keystrokes now commit a move or rename via Obsidian's `fileManager.renameFile`, so all links to the note follow along.

While renaming:

- The current filename is pinned into every folder's dropdown, so moving a note without renaming it is a single click.
- Names already taken in the target folder are greyed out but still selectable.
- Input is validated live against Obsidian's own rename rules — same character sets, same messages, same red tooltip you get when renaming in the file tree — so an illegal or conflicting name is flagged as you type and can't be committed.
- Clicking outside the header bar, or the header losing focus, ends rename mode.

## One key for both renames

The rename command (<kbd>F2</kbd> by default, or whatever you've rebound it to) **alternates** between Obsidian's inline-title rename and this plugin's header path bar with the full path selected. If you've turned Obsidian's inline title off, the header path bar becomes the only target, so the key never does nothing.

This works by wrapping the `workspace:edit-file-title` command rather than grabbing the key, so rebinding the hotkey and running the command from the palette both work unchanged.

## How dropdown entries are tinted

| Colour | Means |
| --- | --- |
| **Purple** | A note (`.md`, `.markdown`) — what Obsidian will open as a note, picked out of a folder of mixed contents |
| **Orange** | A text type Obsidian has no view for; see [the warning colours](#the-two-warning-colours) |
| **Muted** | Outside your vault, so the vault's own handling doesn't apply |
| **Blue** | The note you're on. Browsing, that's its own entry; in rename/move mode the *keep this name* entry stands in its place — the same note either way |
| **Greyed** | Rename/move mode only: the name is taken. Still selectable — picking one fills the input, where validation flags the conflict |

## Visibility rules

- Files with unsupported extensions appear in the dropdowns only if Obsidian's **Show all file types** setting is on.
- The dropdown shows at most 100 entries — Obsidian's own limit. When a folder has more, the last row says how many were left out; keep typing to narrow the list.
- Dot-files and dot-folders appear only if this plugin's **Show dot files** setting is on.
- **Overwrite protection works identically regardless of visibility** — a hidden file still blocks you from overwriting it.

## Cheat sheet

| You want to… | Do this |
| --- | --- |
| Open a folder (its note, or reveal it) | Click the delimiter **after** that folder |
| Swap a folder for a sibling | Click that folder's name, then type or pick |
| Rename or retarget the note | Click the note's name — extension included |
| Browse a folder's contents | Click that folder's name; the dropdown lists its parent, so click the folder **below** the one you want |
| Retype a folder and everything below it | **Double-click** that folder's name, then type |
| Edit the path from a folder down | Click that folder's name, then <kbd>End</kbd> or <kbd>→</kbd> to deselect |
| Jump to a file by typing its path | Click the filename or the empty space, type, <kbd>Enter</kbd> |
| Open a file in a new tab instead | <kbd>Ctrl</kbd> while picking it, or <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| Copy the note somewhere instead of moving it | Pencil, then <kbd>Ctrl</kbd> while picking or committing the target |
| Create a note at a path that doesn't exist | Type the path, <kbd>Enter</kbd>, confirm the prompt |
| Descend one level while typing | Type `/` |
| Go back up one level while typing | <kbd>Backspace</kbd> in the empty input |
| Move or rename the open note | Click the pencil, then browse or type as above |
| Move without renaming | Pencil → click into the target folder → pick the pinned current filename |
| Rename in place | <kbd>F2</kbd> twice (first press goes to the inline title, second to the header) |
| Jump to another vault, home or a drive | Click the vault name |
| Open a file from outside the vault | Vault name → pick a location → browse → pick the file (read-only until *Edit as text*) |
| Cancel anything | <kbd>Esc</kbd>, or click outside the header bar |

## Settings

| Setting | Options | Default | What it does |
| --- | --- | --- | --- |
| **Alignment** | Left / Center / Right | Left | Where the breadcrumb sits in the header row. *Center* matches Obsidian's classic look. |
| **Delimiter** | Any character | `/` | The separator drawn between segments. Six one-click presets (`/ > ▸ › \ •`) sit in front of the text field. |
| **Show vault name** | On / Off | On | Whether the vault itself is the first breadcrumb segment. Turned off, that segment becomes a 🏠 icon rather than disappearing, so the path still starts somewhere clickable. |
| **Folder name opens the dropdown** | On / Off | On | Swaps what a folder name and the delimiter after it do — see [the table above](#the-breadcrumb). With [Folder notes](obsidian://show-plugin?id=folder-notes) the delimiter opens folder notes. Never applies in rename/move mode. |
| **Show dot files** | On / Off | Off | Whether dot-files and dot-folders are listed in the dropdowns. Overwrite protection applies either way. |
| **Access external files** | On / Off | **Off** | Whether the vault name opens the locations dropdown. Off, nothing in the plugin ever looks past this vault. |

## Replacing the icons

Lure renders three icons: the vault-root icon (when **Show vault name** is off), the rename/move toggle, and the padlock that gates writing outside the vault. All can be swapped from a theme or a CSS snippet — set the replacement glyph and hide the bundled one in a single rule:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* The padlock has two states; `.is-active` is the open one. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}

.lure-unlock-btn.is-active {
	--lure-icon-glyph: "🔓";
}
```

`--lure-icon-glyph` takes anything valid in CSS `content`, so `url(...)` works for an image as well as a text or emoji glyph. Leave `--lure-icon-svg` alone to keep the Lucide icon and draw your glyph next to it.
