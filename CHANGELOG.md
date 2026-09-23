**English** · [العربية](docs/i18n/CHANGELOG.ar.md) · [አማርኛ](docs/i18n/CHANGELOG.am.md) · [Беларуская](docs/i18n/CHANGELOG.be.md) · [বাংলা](docs/i18n/CHANGELOG.bn.md) · [Català](docs/i18n/CHANGELOG.ca.md) · [Čeština](docs/i18n/CHANGELOG.cs.md) · [Dansk](docs/i18n/CHANGELOG.da.md) · [Deutsch](docs/i18n/CHANGELOG.de.md) · [Ελληνικά](docs/i18n/CHANGELOG.el.md) · [Español](docs/i18n/CHANGELOG.es.md) · [فارسی](docs/i18n/CHANGELOG.fa.md) · [Suomi](docs/i18n/CHANGELOG.fi.md) · [Français](docs/i18n/CHANGELOG.fr.md) · [Gaeilge](docs/i18n/CHANGELOG.ga.md) · [עברית](docs/i18n/CHANGELOG.he.md) · [Magyar](docs/i18n/CHANGELOG.hu.md) · [Bahasa Indonesia](docs/i18n/CHANGELOG.id.md) · [Italiano](docs/i18n/CHANGELOG.it.md) · [日本語](docs/i18n/CHANGELOG.ja.md) · [ქართული](docs/i18n/CHANGELOG.ka.md) · [ភាសាខ្មែរ](docs/i18n/CHANGELOG.kh.md) · [한국어](docs/i18n/CHANGELOG.ko.md) · [Latviešu](docs/i18n/CHANGELOG.lv.md) · [Bahasa Melayu](docs/i18n/CHANGELOG.ms.md) · [नेपाली](docs/i18n/CHANGELOG.ne.md) · [Nederlands](docs/i18n/CHANGELOG.nl.md) · [Norsk](docs/i18n/CHANGELOG.no.md) · [Polski](docs/i18n/CHANGELOG.pl.md) · [Português](docs/i18n/CHANGELOG.pt.md) · [Português (Brasil)](docs/i18n/CHANGELOG.pt-BR.md) · [Română](docs/i18n/CHANGELOG.ro.md) · [Русский](docs/i18n/CHANGELOG.ru.md) · [संस्कृतम्](docs/i18n/CHANGELOG.sa.md) · [Slovenčina](docs/i18n/CHANGELOG.sk.md) · [Shqip](docs/i18n/CHANGELOG.sq.md) · [Српски](docs/i18n/CHANGELOG.sr.md) · [Svenska](docs/i18n/CHANGELOG.sv.md) · [ไทย](docs/i18n/CHANGELOG.th.md) · [Türkçe](docs/i18n/CHANGELOG.tr.md) · [Українська](docs/i18n/CHANGELOG.uk.md) · [Oʻzbekcha](docs/i18n/CHANGELOG.uz.md) · [Tiếng Việt](docs/i18n/CHANGELOG.vi.md) · [简体中文](docs/i18n/CHANGELOG.zh.md) · [繁體中文](docs/i18n/CHANGELOG.zh-TW.md)

# Changelog

Every release of Lure, newest first. What has landed since the last release is under *Unreleased*. Versions carry no `v` prefix, matching the release tags.

## Unreleased

### Added

- **A taken name asks instead of refusing.** Moving or renaming onto a name that is already there opens a dialog with two paths you can edit: where your file goes, and where the file in the way goes, red while that is still taken. Each path is also drawn the way the path bar draws one, with the parts that differ coloured and shortened last. Both fields have a list; the second holds the usual ways out — swap places (it goes to your file's old folder), swap names (it stays and takes your file's old name), swap both (it takes your file's old path), `-1`, `-bak` and `-old` beside its own name, and the two names the files had. A way out whose path is taken is greyed. Picking one only fills the field; Apply moves both, links and all, and Cancel moves nothing. Picking a taken name from the dropdown asks the same, and so does dropping a file onto a folder that already holds its name.
- **`:graph` inside a folder opens that folder's graph** — the graph filtered to `path:"that/folder"` in its own search box, as though typed there. At the vault root it is the whole graph again.
- **A folder that already holds the name is red** in the dropdown while moving, and so is a file of that name, so the collision shows before you choose.

### Changed

- **The offer is always what Tab would write.** Where the names stop agreeing, the field offers the step toward the first of them, and the row Tab would head for decides it; typing over a name leaves its extension standing and is offered in front of it; a folder just stepped into offers its first step. Before, there were states where nothing was offered and Tab wrote something anyway. The dropdown's underline follows the offer as it changes, and Tab on a row you arrowed to takes that row rather than the one beside it.
- **Offers ignore case.** Typing `sch` offers `Schemes`, spelled the way the name is; taking the offer back gives your letters back as you typed them. Where `Test` and `test` both exist, the one spelled the way you typed is offered.
- **After a press of Tab the next step is offered straight away**, as after a typed letter.
- **Names that begin with what you typed come first in the dropdown**, marked with a line down their edge — blue where they share more than you typed — ahead of the names that only contain it. Each of them underlines the step <kbd>Tab</kbd> would take toward it, not only the one that is offered.
- **The dropdown follows the caret**, or the start of a selection: it lists the folder that point is in, filtered by the letters in front of it. At the start of a name that is the whole folder.
- **Pointing at a row shows it as the offer** — what you typed stays yours and the rest of the name is marked — and moving the pointer off the list brings the offer back.
- **→ takes one letter of the offer** rather than all of it; <kbd>End</kbd> still takes it whole.
- **Backspace before an extension left on its own steps up a folder**, as it does in an empty field; the lone extension goes.
- **F2 in an open field turns it into a rename where it stands**, keeping the text, the caret and the selection, and **Focus the path bar** takes the rename back off it the same way.
- **Anything else pressed or clicked between the presses starts the F2 and Focus the path bar cycles over.**
- **Folders are bold in the dropdown**, so a folder's own note no longer needs to be grey to stand apart: it is purple like any other note.
- **The dropdown is no wider than the path bar.** A name that does not fit is shortened the way the path bar shortens one, and shown whole on hover.
- **PageUp and PageDown scroll the dropdown by what it shows**, from the field too, and the selected row keeps its place on screen. <kbd>Home</kbd> and <kbd>End</kbd> bring the first and last row into sight.
- **The dropdown shows up to 1,000 entries** before it counts the rest, instead of 100.
- **Folders give way longest first.** Short of room, the longest folder name shortens to the length of the next longest, then both together, and so on, each stopping at its floor. Before, every folder shortened at once in proportion to its length.
- **Shortened names slide instead of jump.** A name giving way is clipped at the pixel and fades under its `…`, so nothing after it on the row moves in steps while a pane is resized.

### Fixed

- In a right-hand pane the dropdown opened under the left pane until the first letter was typed.
- Moving the pointer off the dropdown brought the offer back but not its colour.
- A space where a shortened name was split — `development guidelines` — was dropped, running the two words together.

## 1.4.0 — 2026-09-19[^1.4.0]

### Added

- **A Hotkeys row in the settings.** Its button opens Obsidian's *Hotkeys* filtered to this plugin, where *Focus the path bar* — which ships without a key — can be given one.
- **A path bar on panes that hold no file.** An empty tab reads `vault / :blank`, the graph `vault / :graph`, and any other view with nothing to name gets its own `:` label — a home-tab plugin's own tab reads `:home-launcher`. The field beside it is an address bar: type a path and <kbd>Enter</kbd> opens it in that pane, or makes it. Before this the row was blank — the plugin hid Obsidian's own title and put nothing in its place.
- **A page can be typed as well as picked** — `:graph` and the rest are an address, not only a list entry. A colon begins no filename, so typing one anywhere summons them, and the field wears their colour instead of offering to create a note nothing could be called.
- **A row for Obsidian's own *Show all file types***, beside the dot-file rule, since both decide what a dropdown may list: it says to look for that setting in Obsidian's own settings and turn it on to see every file, and the button beside it opens that page with the setting scrolled into view and flashed, as a settings search result would. Named in Obsidian's words, explained in 45 languages.
- **The vault root lists the pages a pane can hold** — `:graph`, `:search`, and whatever views your plugins register, a home tab or a calendar among them. Pick one and the pane opens it, as picking a note opens the note. Views that exist to show a file are left out, because there would be nothing for them to show.
- **The vault's own delimiter opens your start page**, where a plugin provides one, and is underlined to say so; the press after it folds the file tree away, and the press after that puts back exactly what was open. With no such plugin the first press folds, as before.
- **Type a path from the filesystem root.** A `/` in front of an empty field opens one instead of being swallowed, every later slash in it belongs to it, and the dropdown lists the machine rather than the vault.

### Changed

- **F2 and Focus the path bar press Tab inside the field.** Whatever Tab would do there — the next rung, completing what you typed, stepping into a folder — they do too; only where Tab laps back to the front of the path do they leave, F2 for the inline title, the command for the note. Before, a field you had typed into made F2 start over on the name and the command close the field.
- **The step after the cycle leaves is the root folder.** The press after F2's return to the inline title, or the command's return to the note, lands where Tab's lap does — the vault root, the whole path in the field, its first folder marked — so no step of the ring is left to Tab alone.
- **Focus the path bar walks like F2.** It opens on the name instead of the whole path, takes the same four rungs, and the press after the last closes the field and puts the cursor back in the note — before, it lapped the rungs forever and the one key that reached the row could not leave it.
- **A taken name is reported when you use it, not while you type it.** Every name typed toward `Notes.md` passes through names that may be files of their own, and the warning used to flash up and away letter by letter. What is wrong with a name's spelling is still said as it is spelled.
- **A delimiter whose folder note is already open reveals the folder** rather than reopening what is on screen — which is what its second press has always meant.
- **Where you are is bold in a dropdown**, not just blue.
- **Everything that is not a note is orange in a dropdown**, not only the text types Obsidian has no view for. The purple picks the notes out of a folder of mixed contents; one colour for the rest says the same thing faster.

### Fixed

- **Backspace over a clicked folder no longer takes the vault's name away.** The slash left at the front read as a path from the machine's root, which empties the opening segment — and closing the field with Escape never put it back, so the tab lost its vault name and icon for good. A leading slash now counts as the machine's only when its first folder is really there, and the opening segment comes back with every way out of the field.
- Outside the vault, files were hidden unless Obsidian's **Detect all file extensions** was on — a setting about what the vault indexes, applied to folders that are not in the vault. A `.txt` beside your notes is listed out there either way.
- The vault name's dropdown did nothing on a pane holding no file, which is exactly the pane you would use to go somewhere else.
- Clicking the vault name left Obsidian's own title standing beside the path in the field, greyed, where it appears at no other time: the row measures itself by what it has drawn, and at that moment it has emptied itself to make room for the field.

- Clicking the empty space opened the field and then lost it: revealing the note in the File Explorer takes the caret with it, so the field stood open and marked while every keystroke went to the tree.
- The rung that shows the path from the system root drew a trail of the same path beside the field, unfitted, so a deep path was painted over itself.

## 1.3.0 — 2026-09-17[^1.3.0]

### Added

- **Bring a file into the vault from outside.** Move or copy a file from anywhere on disk to a path inside your vault; it arrives as a real note, and a move removes the original only after the copy has succeeded.
- **Drop text or a file onto the row to write it down.** Onto a folder: a new note in that folder, named as you type. Onto the note's name, or onto a folder's delimiter where that folder has a folder note: appended to the end of that note, after a confirmation.
- **Make a folder note** with a second press on whatever opens the folder, where a folder-note plugin is running and the folder has none yet. It is placed where [Folder notes](https://github.com/LostPaul/obsidian-folder-notes)' own settings say.
- **Drag a folder from the path bar onto the tab bar** to open it there: its folder note where it has one, otherwise a tab standing in that folder.
- **The wheel walks the dropdown.** Over a name, the first turn opens that name's list and every turn after moves the highlight a row. A row that is scrolling sideways keeps the wheel for scrolling.
- **Arrow off the front of the field** to bring the folder before it in: <kbd>←</kbd> for one folder, <kbd>Shift</kbd>+<kbd>Home</kbd> (or <kbd>Home</kbd> with the dropdown closed) for all of them.
- **The field wears the colour of what it names**, the same as that row in the dropdown, and goes red once nothing answers to it — the moment <kbd>Enter</kbd> would make something rather than open it.
- **Folder notes are grey in the dropdown**, so they read as their folder's rather than as one more note.
- **Middle-click a delimiter** to open that folder in a new tab: its folder note, or a tab standing in it.

### Changed

- **The padlock and the rename toggle are one control.** Outside the vault a red, shut padlock takes the toggle's place; opening it hands the slot to the toggle, and leaving rename mode shuts it again.
- **The rename key asks the padlock too.** Outside the vault one press flashes the padlock; a second press within half a second grants what the padlock grants and opens rename mode.
- **The rename key walks a full cycle** — inline title, name, name with extension, path from the vault, path from the system root — and the next press is the inline title again.
- **<kbd>Ctrl</kbd>-click and middle-click are no longer synonyms.** One opens a tab and goes to it, the other opens it in the background.
- **Right-clicking the note's name opens the file's own menu.**
- **The dropdown is as tall as the window allows**, instead of Obsidian's fixed 300 pixels.
- **Clicking a folder while a field is open keeps the whole path after it**, and clicking into a folder inside the field lists that folder's contents in full.
- **The delimiter opens a folder note at any depth** with Folder notes running, and is underlined wherever there is one. Previously only top-level folders worked. With the other folder-note plugins the delimiter still reveals the folder.

### Fixed

- **An open field outlived its file.** Switching to another note with the path bar open left the row naming the old file for the rest of the session.
- **Delete, Rename and Make a copy were refused outside the vault** with the padlock open, and could never be reached for images, PDFs and pages.
- **<kbd>Ctrl</kbd>+<kbd>Enter</kbd> did nothing while the dropdown was open** — which is how every field opens.
- **<kbd>Enter</kbd> with the dropdown open but nothing highlighted** did nothing; it now commits what you typed.
- **A row that overflowed with every name already at its shortest could not be scrolled**, leaving the end of the path unreachable.
- **Disabling the plugin left a dead button** in the header of every note it had patched.

## 1.2.0 — 2026-08-25[^1.2.0]

### Added

- **Language setting.** Lure follows Obsidian's language by default, and can be set to any of its own. This is also the only way to reach the Greek and Sanskrit translations, which Obsidian itself does not offer. The setting's own label stays in English, so it can always be found again from a language you cannot read.

## 1.1.2 — 2026-08-25[^1.1.2]

### Changed

- **Lighter stylesheet.** The row no longer uses `:has()` selectors or most `!important` rules. It refits with less work, and the plugin review's warnings dropped from 56 to 7.

## 1.1.1 — 2026-08-22[^1.1.1]

### Fixed

- **A short folder name could draw with a gap in it** — `atlas` as `atl as` — because the space reserved for its shortened form was wider than the name itself.

## 1.1.0 — 2026-08-22[^1.1.0]

### Added

- **Right-click vocabulary.** One press opens a menu; two and three presses copy progressively more — the name, the name with its extension, the path. The row's menus now match the File Explorer's entry for entry.
- **Menus outside the vault.** Dropdown rows and the external viewer offer opening, *Copy path* and *Show in system explorer*; with the padlock open, also *New note*, *New folder*, *Make a copy*, *Rename…* and *Delete*. Delete moves to the system trash and is never permanent.
- **Open elsewhere.** <kbd>Ctrl</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> and middle-click on the note's name or a folder open it in a new tab, a split or a window. Both are draggable, like their File Explorer rows.
- **Drag notes onto the row to move them.** Drop a note, several notes or a folder onto a folder segment or the vault name.
- **Command: Focus the path bar**, with the whole path selected — no default hotkey, bind your own.
- **Type a URL** into the path bar: `http(s)://` and `obsidian://` open as links, `file://` and percent-encoded paths open the file.
- **Tab completion**, the way a shell does it: each press completes as far as the folder's names agree and stops where they differ. <kbd>Shift</kbd>+<kbd>Tab</kbd> walks back. With nothing left to complete, <kbd>Tab</kbd> widens the selection instead: name, name with extension, path from the vault, path from the system root.
- **The dropdown opens where you are** and previews what you point at into the field; leaving the list gives your text back.
- **Move a note out of the vault** after a confirmation that counts the links it will break. It is copied out, then trashed, so it can be recovered like any deleted note.
- **Show file extensions** setting, and quoted paths (as Windows' *Copy as path* produces them) are understood.
- **Settings appear in Obsidian's settings search** on Obsidian 1.13 and later.

### Changed

- **Long paths fit the pane.** Names are shortened from the least useful first — the vault name, then the extension, then folders, the note's own name last — never past the point where they can be told apart. Hover a shortened name to read it in full.
- **Clicking the note's name selects it without its extension**, so renaming no longer risks changing the file type.
- **The rename key opens on the name without its extension**, and further presses widen the selection.
- **Clicking a folder keeps the rest of the path visible**, including outside the vault.
- **Browsing back into your vault opens files as notes**, with links and backlinks, rather than in the external viewer.

### Fixed

- **Menu labels were English in every language**; they now come from Obsidian's own translations.
- **The rename key dead-ended on Obsidian's rename dialog** when the note was scrolled past its title.
- **<kbd>Esc</kbd> took two presses** to close the field and its dropdown.
- **<kbd>Ctrl</kbd>+<kbd>Enter</kbd> opened a link in the editor** instead of acting on the path bar.
- **Renaming outside the vault lost the typed name** when the padlock was pressed.
- **Tab could loop without progress** on a folder that sits beside its own folder note.

## 1.0.4 — 2026-08-13[^1.0.4]

### Added

- **The note you are on is marked in blue** in the dropdown, so browsing back to its folder shows where you started.

## 1.0.3 — 2026-08-13[^1.0.3]

### Documentation

- The README links the plugin's page in the community directory, and the translated READMEs are brought up to date.

## 1.0.2 — 2026-08-13[^1.0.2]

### Changed

- **Requires Obsidian 1.8.7 or later** (was 1.4.0). Two features the path bar relies on — copying files and the error tooltip under the field — need it.
- **Release downloads carry signed build provenance**, so you can confirm with `gh attestation verify` that `main.js` was built from this repository.

### Fixed

- **Opening a missing external file in the default app failed silently**; the failure is now reported.

## 1.0.1 — 2026-08-13[^1.0.1]

### Fixed

- **In rename mode a note conflicted with itself** — browsing back to its own folder hid its name from the list, as though it blocked its own rename.
- **The first folder reveal after starting Obsidian expanded nothing.**
- **Choosing a folder from the dropdown could end rename mode** instead of descending into it.
- **External edits could be silently overwritten** by another writer, such as Sync or a second pane. Writes are now atomic.
- **The focus-outline reset leaked into other views**; it now applies only to headers Lure has patched.

### Documentation

- The README and the usage guide are available in all 44 languages the plugin ships.
- The guide named Obsidian's *Detect all file extensions* setting, which is now called *Show all file types*.

## 1.0.0 — 2026-08-10[^1.0.0]

First release. Replaces the filename in a note's header with a clickable, editable breadcrumb of its vault path — an address bar for your notes, modelled on Dolphin's.

### Added

- **Click a folder** for a dropdown of its parent's contents, to swap it for a sibling and leave the rest of the path alone.
- **Click the delimiter** after a folder to reveal and expand it in the File Explorer, or to open its folder note where Folder notes handles it.
- **Click the filename or the empty space** to type a path, with autocomplete: `/` descends, <kbd>Backspace</kbd> steps out, <kbd>Enter</kbd> commits.
- **Move/rename mode** switches the same interactions to moving and renaming, validated the way Obsidian validates.
- **<kbd>Ctrl</kbd> opens in a new tab** — or, in move/rename mode, copies the note there instead.
- **<kbd>F2</kbd> alternates** between the inline title and the path bar.
- **Outside the vault** (off by default): the vault name opens your other vaults, home, the filesystem root and mounted drives. Nothing out there is written until you unlock it, and a note can only be copied out of the vault, never moved.
- **45 languages.**

[^1.4.0]: Changes since 1.3.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.3.0...1.4.0>
[^1.3.0]: Changes since 1.2.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.2.0...1.3.0>
[^1.2.0]: Changes since 1.1.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.2...1.2.0>
[^1.1.2]: Changes since 1.1.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.1...1.1.2>
[^1.1.1]: Changes since 1.1.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.0...1.1.1>
[^1.1.0]: Changes since 1.0.4: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.4...1.1.0>
[^1.0.4]: Changes since 1.0.3: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.3...1.0.4>
[^1.0.3]: Changes since 1.0.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.2...1.0.3>
[^1.0.2]: Changes since 1.0.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.1...1.0.2>
[^1.0.1]: Changes since 1.0.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.0...1.0.1>
[^1.0.0]: The first release: <https://github.com/Gelaende51/obsidian-lure/releases/tag/1.0.0>
