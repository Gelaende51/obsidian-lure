**English** · [العربية](i18n/usage.ar.md) · [አማርኛ](i18n/usage.am.md) · [Беларуская](i18n/usage.be.md) · [বাংলা](i18n/usage.bn.md) · [Català](i18n/usage.ca.md) · [Čeština](i18n/usage.cs.md) · [Dansk](i18n/usage.da.md) · [Deutsch](i18n/usage.de.md) · [Ελληνικά](i18n/usage.el.md) · [Español](i18n/usage.es.md) · [فارسی](i18n/usage.fa.md) · [Suomi](i18n/usage.fi.md) · [Français](i18n/usage.fr.md) · [Gaeilge](i18n/usage.ga.md) · [עברית](i18n/usage.he.md) · [Magyar](i18n/usage.hu.md) · [Bahasa Indonesia](i18n/usage.id.md) · [Italiano](i18n/usage.it.md) · [日本語](i18n/usage.ja.md) · [ქართული](i18n/usage.ka.md) · [ភាសាខ្មែរ](i18n/usage.kh.md) · [한국어](i18n/usage.ko.md) · [Latviešu](i18n/usage.lv.md) · [Bahasa Melayu](i18n/usage.ms.md) · [नेपाली](i18n/usage.ne.md) · [Nederlands](i18n/usage.nl.md) · [Norsk](i18n/usage.no.md) · [Polski](i18n/usage.pl.md) · [Português](i18n/usage.pt.md) · [Português (Brasil)](i18n/usage.pt-BR.md) · [Română](i18n/usage.ro.md) · [Русский](i18n/usage.ru.md) · [संस्कृतम्](i18n/usage.sa.md) · [Slovenčina](i18n/usage.sk.md) · [Shqip](i18n/usage.sq.md) · [Српски](i18n/usage.sr.md) · [Svenska](i18n/usage.sv.md) · [ไทย](i18n/usage.th.md) · [Türkçe](i18n/usage.tr.md) · [Українська](i18n/usage.uk.md) · [Oʻzbekcha](i18n/usage.uz.md) · [Tiếng Việt](i18n/usage.vi.md) · [简体中文](i18n/usage.zh.md) · [繁體中文](i18n/usage.zh-TW.md)

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

Clicking the **note's name** works the same way against its own folder, and selects the name **without its extension** — renaming is the common edit, and typing straight over a selection that included `.md` used to change the file type by accident. The extension stays visible one keystroke away: <kbd>End</kbd> or <kbd>→</kbd> reaches it, and the double-click that widens to the whole row takes the lot.

Clicking the folder has already selected one segment, so **one further click** widens the selection to the whole line — that folder *and* everything below it — and typing then replaces the rest of the path in one go. Works the same in navigation and rename/move mode.

That only applies as a continuation of the click that opened the field. Once you've used the field, it behaves like any other text input: click places the caret, double-click takes a word, triple-click takes the line.

Either way the rest of the path stays visible around the input, as chips before it and as unselected text after it, so the full path never disappears from the header. Type to replace the selection, or press <kbd>End</kbd> / <kbd>→</kbd> to keep it and edit from there. The dropdown lists the whole folder regardless of what's prefilled; it only starts filtering once you actually type.

## Descending by delimiter

Clicking a delimiter (with **Folder name opens the dropdown** off) descends into the folder before it: the dropdown lists *that* folder's contents, and the rest of the path opens selected in the input. Picking a folder appends it to the breadcrumb trail and immediately opens the next dropdown, so you can click your way down a tree without leaving the header row.

## The dropdown opens where you are

The list opens on the entry you are standing in — the note this bar belongs to,
or, when a folder click has listed its parent, that folder — rather than on the
first row. In a folder of two hundred notes the first row is nowhere near you.

Moving through the list **puts what you are pointing at into the field**, by
arrow key or by hovering — in place of the segment you were editing, with the
rest of the path left standing — so the row you are on is also the path you
would get.

The rest of the path is shown **only as far as it exists under what you are
pointing at**. Standing in one folder with `2026/note.md` behind the segment you
are editing, pointing at a folder that has a `2026` with a `note.md` in it shows
all of it; one that has the `2026` and no note shows `2026`; one that has neither
shows nothing after the name at all, and neither does a file, since nothing lives
under one. What **you have typed** keeps its whole path while you are
typing it, however little of it is there yet — a half-typed name is not a
decision. Setting a name in is a decision, and what cannot be reached from it
is cut at that point; the folders you are creating are the ones you type
*after* it, which is where <kbd>Enter</kbd> makes them.
The text you had typed is kept: moving **off either end of the list** — up off
the first entry, or down off the last — lets go of it and puts your text back,
with nothing highlighted. The field is a stop on the ring like any entry, so a
lap passes through it rather than jumping from the last row to the first, and
pressing on from there carries round to the other end.

Taking the **pointer off the list** puts your text back too — and hands the
highlight back to whatever had it before the mouse arrived: the entry you had
arrowed to, showing in the field again, or the one the list opened on because it
is where you are. Hovering is a way of looking rather than of choosing, so a
sweep of the pointer across the list costs you nothing.

The list itself doesn't change while you move through it — it keeps filtering by
what you typed, not by what has been previewed into the field — so the entry
under you never shifts out from under the next press. Typing replaces the
preview and filters as usual.

**What it filters by is the segment you are editing**, not everything in the
field. Clicking a folder leaves the rest of the path in there behind the name
you are changing, so filtering by the whole of it would look for a child called
`2026/Kickoff.md` and find nothing — the list would close on your first
keystroke whatever you typed. The **extension is left out of it too**, for as
long as the caret is in front of the dot: clicking a note's name selects the
stem and leaves `.md` behind it, so typing one letter makes the field read
`a.md`, and that is not what you are looking for. Put the caret past the dot
and the extension counts like anything else. A name that genuinely matches
nothing still closes the list, because an empty list is the honest answer.

A preview **swaps that one segment and leaves the rest of the path alone**:
pointing at a folder asks what if this step were that one, not throw the path
away. Stepping off the list restores the text *and* the selection you had, so
the next keystroke replaces what it was going to replace before you looked.

## Dropdown entries are real file-manager rows

Every file and folder in the dropdown behaves like its row in the File Explorer:

- **Right-click** for the same context menu the File Explorer gives, entry for entry — including the ones other plugins add. A folder offers *New note*, *New folder*, *New canvas*, *New base*, *Make a copy*, *Move folder to…*, *Search in folder*, *Copy path*, *Show in system explorer*, *Rename…* and *Delete*; a file offers its own equivalent, *Open in default app* included.
- **Drag** an entry anywhere Obsidian accepts a file: into an editor to insert a link, onto a folder in the File Explorer to move it, onto the tab bar to open it.

Menu wording comes from Obsidian's own translations, so it matches the rest of the app in every language.

## Typing a path

- Clicking the **empty space** before or after the breadcrumbs opens a text input on the whole path, and **counts your presses**: one selects the path without the extension, two select it with, three select the path the machine knows. Clicking the **file's name** counts the same way but starts one rung lower, on the name itself: one selects it without the extension, two with, and three widen to the whole path *from your vault folder* — the form a link or a search wants, rather than the machine's. A fourth press reaches that one.
- **The counting belongs to the run that opened the field.** Once it has lapsed — you paused, typed, or clicked once somewhere in the text — the field is a text field like any other, and a double-click in it picks out the word under the pointer as it would anywhere else. Type over what is selected, or edit in place. (Clicking the filename itself selects just the file name; see above.) Right-clicking the same space **copies** those same three, at two, three and four presses — one button shows them, the other takes them. A **single** right-press opens the path with all of it selected and offers what can be done to it: cut, copy, paste, select all, in Obsidian's own words.
- **Middle-click the empty space** to paste over the path: the field opens on the whole path *from the vault root*, so the clipboard replaces all of it, and what lands is selected. <kbd>Enter</kbd> then goes there.
- **<kbd>Ctrl</kbd>+click the empty space** to open this note again in a tab of its own, flashed in the File Explorer so the second tab is not mistaken for the first. On the **vault name**, <kbd>Ctrl</kbd>+click or middle-click opens a tab holding nothing, standing at the vault root with the list already showing — somewhere to type a path from scratch.
- Typing while a breadcrumb trail is showing converts the trailing segment into a small input with live autocomplete scoped to the current folder.
- **What the names agree on is offered as you type.** Where every child that starts with what you have typed goes on agreeing for a while, that agreement appears after the caret, selected. Type those letters and it is swallowed one at a time; type anything else and it is gone. <kbd>Tab</kbd> or <kbd>→</kbd> takes it, <kbd>Backspace</kbd> takes it back without touching a letter you typed, and nothing is offered again until you type — so there is always a way out of a name you did not want. What the dropdown lists is filtered by what **you** typed, never by what was offered.
- In the field the offered part is simply **selected**. The list is where it is spelled out: each row shows the part of it that **matched what you typed in bold**, wherever in the name it matched — `kick` finds `Weekly kickoff` and says so — and, on the rows the offer is about, the part **taking it would add is underlined**.
- **Typing lets go of the highlighted row.** The list opens on the entry you are standing in, but the moment you type it is about somewhere else, and a highlight nobody put there reads as a choice already made.
- The offer is only ever text in front of you: the letters you typed stay spelled the way you typed them while you type, and taking the offer rewrites the name the way the folder spells it, because a path has to match the disk. `sk` + <kbd>Tab</kbd> reaches `Skyline`, not `skyline`.
- `/` commits the segment you are typing and descends into it, keeping whatever is behind it — the same thing <kbd>Tab</kbd> does when it steps in.
- <kbd>Backspace</kbd> in an empty input steps back out to the parent folder, reopening its name with the cursor at the end.
- **The list follows the caret.** Pick out a different part of the path — drag over it, or arrow along — and the dropdown lists *that* folder's children, not the one the field was opened on. Pointing at a row writes it into the segment the caret is in, and taking the pointer off the list gives you your text and your selection back, exactly as they were.
- **Sweeping a selection out of the field** and letting go somewhere else does not close it. A press that begins in the field belongs to the edit however far it travels; only a press that *begins* outside is a click away.
- <kbd>Enter</kbd> commits — and when the field names nothing at all, as in an empty folder where there was never anything to complete, it says *No file selected* and stays open rather than closing as though something had been chosen. <kbd>Esc</kbd> or a click elsewhere cancels back to the file's real path. One press of <kbd>Esc</kbd> is enough: it closes the dropdown, leaves the field and hands focus back to the note, rather than taking one press per layer.

The input is chrome-free — no box, no border — so it reads as the path text itself, and it auto-grows as you type.

## Right-click: one press, two presses, three

Every target on the row answers a right-click, and how many presses you give it decides what you get. Because a second press might still be coming, the first one waits about a third of a second before acting — the cost of putting three gestures on one button.

| Where you press | Once | Twice | Three times |
| --- | --- | --- | --- |
| The **vault name** | What can be done to the vault it names — including *Open this vault*, where that vault is not the one you are in | Copies the vault's name | Copies where the vault is — and a fourth press, where the open file is |
| A **delimiter** | That folder's menu — its folder note's, where a folder-note plugin is running and the folder has one | | |
| A **folder name** | That folder's menu | Copies the folder's name | Copies it and everything to the right of it |
| The **note's name** | Opens the outline sidebar | Copies the name | Copies it with its extension |
| The **empty space** | | Copies the path from your vault folder, without the extension | The same, with it |

A single press on the **vault name** opens what can be done to whatever that
segment is naming. For **the vault you are in**: open it in a new window,
manage vaults, copy where it lives, copy its ID, show it in your file manager.
For **another vault**, reached through the locations dropdown, the same minus
the new window — which would open *this* vault, not that one — plus the one
thing only a vault you are not in can offer: **Open this vault**. It is named
to Obsidian by its ID rather than by its folder name, since two vaults may
share one. For somewhere that is not a vault at all — your home folder, a
mounted drive — there is no ID to copy and nothing to open, and the menu says
so by not offering them.

This is not Obsidian's own three-dot menu, which belongs to the starter window
and cannot be opened from inside a running vault — these are the same entries
rebuilt, in Obsidian's own wording, taken from its commands so they arrive in
your language. Three of that menu's entries are deliberately **not** here:
*rename vault*, *move vault* and *remove from list* all act on the vault's own
folder or on Obsidian's registry of vaults, and doing that to the vault you are
standing in — with its files open and its watchers running — is how a vault gets
broken. Open the vault manager (*Open another vault*) and do them there, where
the vault is closed.

The two copies on the **empty space** are the row as it is written — what a link
or a search wants — and the ones on the **vault name** are the paths the
filesystem knows, which is what anything outside Obsidian wants. Each press
there widens what the copy is good for: two give the vault's name, three where
the vault is, four where the open file is. Obsidian draws the same distinction
in its own two commands, *from vault folder* and *from system root*; here the
outward-facing ones sit on the segment that is itself outside the path.

All of this works outside the vault too, on the same targets.

Every copy says so in a notice, because a copy leaves nothing on screen to show it happened and a miscounted press should not look like a successful one.

## Modifiers: open it somewhere else

The note's name and the folder segments behave like their rows in the File Explorer.

| | On the note's name | On a folder segment |
| --- | --- | --- |
| Plain click | Edit the name | Browse that folder |
| <kbd>Ctrl</kbd> / middle-click | Open the note in a new tab | Send the folder to a new tab |
| <kbd>Ctrl</kbd>+<kbd>Alt</kbd> | A split | A split |
| Drag | The note, anywhere Obsidian takes a file | The folder, likewise |

A folder is not something Obsidian can open, so sending one to a tab does one of two things: opens its folder note, where a folder-note plugin is running and there is one, or opens an empty tab whose path bar already stands in that folder — leaving you only the name to type.

## Tab: complete the name, then the path, then widen the selection

<kbd>Tab</kbd> completes the way a shell does: **a press extends what you typed as far as the names in that folder agree, and stops where they disagree.** Type `Sk` where only `Sketches` starts that way and the word is finished; type `Al` where `Alpha-one`, `Alpha-two` and `Alpine` all do and you get `Alp`, because the next character is a question only you can answer.

Press again without typing and it walks toward one name — the row the dropdown has highlighted, or the first — stopping at that name's next ambiguity: `Alpha-`, then `Alpha-one`. The list opens on where you already are, so in your own folder the first press heads for the note you have open rather than for whatever sorts first.

**A press never chooses between names for you.** <kbd>Tab</kbd> steps into a folder once what you typed leaves one candidate, or once you have typed the folder's whole name and no *other folder* extends it. Where one does — `Schemes` beside `Schemes2026` — <kbd>Tab</kbd> keeps completing toward the longer name; <kbd>Enter</kbd> and the dropdown are the gestures that mean *this one*.

A **file** never holds a folder up that way. A folder beside a note of its own name is a folder note, not a fork in the path, and <kbd>Tab</kbd> walks folders — so `Projects` with a `Projects.md` next to it is stepped into like any other.

Two smaller things that follow: what lands in the field is spelled the way the folder spells it, so `sk` becomes `Sketches`; and only the name being typed is replaced, so a path with more to the right of it keeps that.

With a name offered as you type, <kbd>Tab</kbd> **takes the offer and stops at the fork.** Where the names stop agreeing is a question only you can answer, and a press that walked on would be answering it by picking whichever name sorts first — so arrow to the one you want, or type past the fork. Only where the offer leaves *one* name is there no fork, and then the same press steps into it. The press after the fork still walks toward a name a branch at a time, as it always did: that one is a deliberate second ask.

Arriving at the file's name **is** the first rung — no press is spent parking the caret at the end of a name it is about to mark. From there the presses stop moving along the path and start widening what is selected:

1. the name
2. the name with its extension
3. the path from your vault folder
4. the path from the system root
5. back to the front of the path **as it now stands** — standing where the walk began, first segment marked, ready to be walked again

A fourth click reaches that same fourth rung directly.

Widening only ever **widens**. A name that is already whole in the field — completed by the same key, or chosen from the dropdown — is marked entire rather than having its extension taken back off it first: the first rung is for a name the walk has just *arrived* at, where the extension is not yet the subject.

The ladder is where the walk **arrives**, not where it starts. Click a folder in the middle of a path and the field opens on everything below it with that folder's name marked; each <kbd>Tab</kbd> then takes **one** folder — marking the next one, keeping the rest of the path behind it — and only once nothing but the file name is left does the widening begin:

| press | chips | field | marked |
| --- | --- | --- | --- |
| clicked `a` | | `a/b/c/leaf.md` | `a` |
| <kbd>Tab</kbd> | `a` | `b/c/leaf.md` | `b` |
| <kbd>Tab</kbd> | `a › b` | `c/leaf.md` | `c` |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf` — the first rung |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf.md` |

**A name that is set in is set in, however you set it.** Completing it with
<kbd>Tab</kbd>, committing it with `/`, and picking it out of the dropdown all
leave the row in the same place holding the same path, so the press after the
gesture means the same thing whichever way you came. Picking a folder from the
list used to empty the field instead, throwing away a path that reaching the
same folder with <kbd>Tab</kbd> would have kept.

**A path you are still writing comes along whole.** Stepping into the very folder the rest of the path hangs from is not a claim that the rest exists — it is how a path gets typed ahead of itself, and the folders it names are the ones <kbd>Enter</kbd> is about to make. So walking down `Dokumente/plans/untitled.md` into `Dokumente` keeps `plans/untitled.md` in front of you, whether or not `plans` is there yet. The same goes for a path you typed from nothing: none of it was inherited from anywhere, so none of it is taken away.

**Swapping a step for another one is the other story, and then the path comes along only as far as it is really there.** Swap a folder in the middle of a path for a sibling — click `a`, type another name, press <kbd>Tab</kbd> — and everything below it comes with you, because the path you were on is usually most of the path you want. Only what exists over there survives the move, though, so the field and the dropdown beside it never disagree: what is left in front of you is a path you could really walk. Starting from `a/b/c/leaf.md`, with `a` clicked and its name marked:

| what you set in | chips | field | marked |
| --- | --- | --- | --- |
| `x`, which has no `b` at all | `x` | | nothing came with it |
| `y`, which has a `b` but no `c` in it | `y` | `b` | `b` |
| `z`, a twin of `a` all the way down | `z` | `b/c/leaf.md` | `b` |

A folder left standing alone that way is still a folder to walk into: the press after it steps in, rather than starting to widen a selection over its name.

A name **nothing** in the folder matches is answered differently, because nothing has been set in by it: the press marks what you typed, ready for you to type over it, rather than answering with somewhere else.

The whole thing is a **loop, and it costs nothing to go round it**: the press after the last rung hands the row back to the front of the path, folders and all, ready to go round again. The only thing that ever leaves the row is the absolute prefix, on the press that stops showing it.

What comes back is **the path you built**, not the one you set out from. Fork the walk halfway — pick a different sibling out of the dropdown, complete toward another name — and the lap closes on where you actually are; the four rungs before it describe that same path, and this one used to be the odd rung out that described the past.

<kbd>Shift</kbd>+<kbd>Tab</kbd> closes the same ring the other way round: at the front of the path, with nothing left to give back and nowhere further up, the next press loops to the **far** rung — the path from the system root — and carries on narrowing from there. Neither direction dead-ends.

It spends no press on a rung it has already shown, either. Below the last rung — the name without its extension — the ladder is over, and *the same press* leaves the folder: the path from the system root, the path from your vault, the name, the name without its extension, then the folder, one step each.

No press is spent on a rung that changes nothing, either: clicking a note's name already shows it without its extension, which is what the first rung shows, so from there <kbd>Tab</kbd> starts on the second.

Each rung changes what is *in* the field, not only what is highlighted — a selection has to be over the text it names, or <kbd>Enter</kbd> would commit something other than what you can see is selected. The ladder belongs to one editing session: click away, or type anything at all, and the next <kbd>Tab</kbd> completes a name again.

### <kbd>Shift</kbd>+<kbd>Tab</kbd>: the same road backwards

<kbd>Shift</kbd>+<kbd>Tab</kbd> takes back one step per press, in the order the presses were made: the selection narrows a rung at a time, each completion is given back, and each folder is stepped out of — its name returning to the field so you can edit it rather than retype it.

**Nothing is deleted on the way back.** A completion is given back by *marking* the characters it added, exactly as going forward marks what it has widened over — the name stays in front of you, and each further press marks one step more of it:

| | field | marked |
| --- | --- | --- |
| walked in | `Alpha-one` | |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `ha-one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `Alpha-one` |

Typing replaces the marked part, as it does anywhere else. <kbd>Tab</kbd> puts back exactly what the mark gave back, so walking two steps out and two steps in again returns you where you were.

Once the whole name is marked there is nothing left that a press put there, and the next press goes *up the path*: it leaves the folder you are standing in, exactly as <kbd>Backspace</kbd> on an empty field does. That costs nothing either — the folder's name comes back into the field **in front of** whatever was in it, marked, which is the same text clicking that folder would have given you. Back is a direction rather than an undo history — but marking the name first means one press never both takes back what you wrote and takes you out of the folder you wrote it in.

Text that opens **already selected** — what a folder click leaves behind it — is the name <kbd>Tab</kbd> works on next: it is completed and stepped into like anything else, and typing replaces it. Only the focus command opens on a rung of the ladder itself, because it is showing you the whole path rather than a folder to walk.

## Typing something that is not a path

| What you type | What happens |
| --- | --- |
| `https://…` | Opens in a new tab in Obsidian's **Web viewer**, if you have that core plugin on; your desktop browser otherwise |
| `obsidian://…` | Handed to Obsidian's own URI handler |
| `file:///…` | Decoded and opened: as a real note if it is inside your vault, in the viewer if not |
| `/home/you/a%20b.md` | The same, for a path pasted out of a browser or file manager |

Only explicit schemes count — a note called `100%20` is still a note. A `/` that belongs to a scheme stays literal rather than descending into a folder, so a URL can be typed by hand and not only pasted.

## A command for the keyboard

**Focus the path bar** selects the whole path, ready to be typed over — the address-bar gesture. It has no key of its own out of the box, because Obsidian's guidelines discourage plugins claiming one; bind it under *Settings → Hotkeys* to whatever suits you.

## Navigation never touches the open file

In the default (navigation) mode the currently open note is **never** renamed or moved.

- A path that resolves to an existing file opens it.
- A path that doesn't exist yet is simply created, along with any missing parent folders, and opened. Every file and folder made this way says so in a notice — a new folder is otherwise invisible until you go looking for it — and Obsidian's own trash makes an unwanted one a keystroke to undo.
- **Outside your vault it still asks first.** Out there the same typo writes into a system folder, where neither the notice nor Obsidian's trash is much comfort.

## <kbd>Ctrl</kbd> — new tab, and copy instead of move

A note **created, moved or copied inside the vault is shown where it landed** in the File Explorer, marked for a moment in Obsidian's accent colour — the tree is where you look for it afterwards, so it is put in front of you rather than left in a folder that may not even be open. Duplicating says so as well: a copy leaves the original where it was and opens the copy in its own pane, which without a word is easy to read as nothing having happened.

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

Clicking the **vault name** (or the 🏠 icon, when *Show vault name* is off) opens a dropdown of places rather than contents. The field it opens holds **the whole path you were on, written out in full**, with the place it starts at selected — so picking somewhere else, or typing over the selection, swaps just that leading part and leaves the rest of the path in front of you. Change your mind and <kbd>Esc</kbd> puts the row back as it was.

Typing here is offered the rest of a place's name like anywhere else, and <kbd>Tab</kbd> **sets that place in** — the one you are pointing at, or the one the name can only mean. Where several places still share what you have typed, the press stops at the fork, as it does everywhere. Pointing at a place shows **that place's own path**, all of it selected, followed by your note's path only as far as it really goes over there — which is exactly what picking it would land you on. A place is not a step inside the path on screen but somewhere to count the whole path from, so nothing of where you were stays in front of it.

The places on offer:

- **Your other vaults**, read from Obsidian's own registry, most recently opened first, each under Obsidian's own vault icon — the one the app itself uses for vault commands. The vault you already have open takes a house instead: it's where the row starts from by default, not somewhere to go.
- **Home**, under its own account name, marked by a `~`. Lucide has no tilde, so this one is drawn by the plugin on Lucide's own 24×24 grid with the same stroke — an icon the set is missing rather than a text character sitting among icons.
- The **filesystem root**, labelled `root` — untranslated, since that's its name on every system — rather than `/`, which would read as an empty step next to the separator that follows it.
- **Mounted drives**, with an icon per type where that's cheap to determine: network shares, optical discs, floppies and removable media get their own; anything else gets a generic drive. On Windows drives show as `C:` with a generic icon — volume names and precise types need WMI, which is deliberately not done.

Picking another vault **does not switch Obsidian to it.** Everything you have open stays open; the breadcrumb simply starts browsing there. That's the whole point of having it on the path bar rather than deferring to the sidebar's vault switcher.

It also lands **as close to the note you're on as that place actually goes**.

- If the place you picked *contains* the note — home, or wherever your vaults live — you get its path from there: pick `~` with `takeaways.md` open and the field reads `Vaults/your-vault/takeaways.md`.
- If it's a place beside this one — another vault, another drive — the same relative path is tried, as deep as it actually exists. Vaults are often near-copies of each other, and the reason for jumping to one is usually the same note over there.

Either way the row stays at the place you picked and the **first folder of that path opens selected**, the same shape clicking a folder gives: the step you are most likely to change when you jump somewhere else is the one nearest the top, and the rest of the path stays visible while you change it. Nothing is ever prefilled that isn't really on disk.

### While you're outside

The path **starts at the location you picked**, not at the machine's directory layout — and so does the field you get by clicking the empty space or pressing the focus key: it holds the path from that place, not the machine's absolute one, with the trail collapsed to the place itself exactly as it collapses to the vault root inside — choose `Archive` and the row reads `Archive / notes / …`, not `/home/you/Vaults/Archive/notes/…`. The leading segment carries an icon for what it is (vault, home, drive), and <kbd>Backspace</kbd> stops there rather than walking on up into the rest of the filesystem. With *Show vault name* off, that segment is the icon alone — the setting is about the row's opening segment whichever vault it names, not only your own.

The path bar is **framed in the error colour** — the same ring rename mode draws — for as long as it points outside your vault. It marks a standing condition, not a moment: while it's up, none of Obsidian's own handling applies to what the row is showing, and writing is locked until you say otherwise.

Browsing otherwise works as it does inside: chips, delimiters, typing, autocomplete, <kbd>Backspace</kbd> to step out. The same visibility rules apply too, so unsupported extensions still need Obsidian's *Show all file types* and dot-files still need this plugin's setting.

**Right-click works out there too**, though it is a different menu: the File Explorer's own handlers need a file the vault knows about, so entries outside are built from the path instead. They offer opening (here, to the right, in a new window, or in your desktop's default application), *Copy path*, *Show in system explorer*, and — once the padlock is open — *New note*, *New folder*, *Make a copy*, *Rename…* and *Delete*. **Dragging** still needs a vault file and stays unavailable.

Deleting outside the vault moves the file to your **system trash** — the Recycle Bin on Windows, Trash on macOS — never an unlink. Out here there is no Obsidian trash to recover from, so a delete that could not be undone is not offered at all: where a platform has no trash, the attempt reports the failure instead.

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

**Moving a note *out* of your vault asks first.** `fileManager` can't follow a file across that boundary: every link pointing at the note stops resolving, nothing updates them, and the note leaves the vault's index. So the move is offered as a decision rather than refused or done quietly — a dialog states what it costs and how many notes link to the one you're moving. Confirm and it really moves: copied out, then removed from the vault through Obsidian's own delete, so it is recoverable exactly as a deleted note is, and a failure at either step leaves the note where it was. Holding <kbd>Ctrl</kbd> still copies it out instead, which has none of that problem. Going the other way — bringing an outside file *into* the vault — isn't wired up yet.

### Opening an external file

Browsing the filesystem can walk back **into the vault you have open** — from the root, from home, from wherever your vaults live. A file reached that way is an ordinary note, so it opens as one: the real editor, links and backlinks, and the row snaps back to the vault-rooted breadcrumb. Only files Obsidian has no view for stay in the preview, since out there the preview is the better answer. Where a preview is showing such a note anyway — a reopened workspace, say — its top line offers **Open in *(vault)***, which is the same offer made by hand.

Obsidian's editor only works on files inside the vault, so an external file **cannot** be opened as a real note with links, backlinks and the rest — that's a limit of the app, not of this plugin. Picking one opens a **preview** instead, read-only until you say otherwise:

| Type | Shown as |
| --- | --- |
| `.md`, `.markdown` | Rendered Markdown |
| Images, audio, video, PDF | Native player/viewer |
| Any other **text** file (`.json`, `.css`, `.log`, `.txt`, …) | Verbatim plain text |
| Binary formats with no viewer (`.zip`, `.exe`, …) | Handed to *Open in default app* |

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
- **Open in default app** — hands the file to your desktop's default application, including the binary formats this viewer can't show. Worded exactly as Obsidian's own entry for the same action, because it is the same action.

The viewer also answers a **right-click**: inside the text editor with *Cut* / *Copy* / *Paste* / *Select all*, and anywhere else with the file's own menu. Obsidian's three-dot menu in the header carries that menu too — outside the vault it would otherwise offer nothing but *Split right* and *Split down*.

Nothing outside your vault is written unless you press *Edit as text* first. See the README's [Outside the vault](../README.md#outside-the-vault) section for the full disclosure.

## Dropping a file onto a folder in the path

Every folder in the row is a drop target, so **a note dragged onto one moves
there** — the shortest route there is between a note and any folder above it,
since the destination is already on screen. Drag from the File Explorer, from
the dropdown, from the note's own name in the header, or from anywhere else in
Obsidian that produces a file: it is the app's own drag, so the hover label,
the cursor and the highlight are the ones the File Explorer draws.

**The vault's name takes a drop too**, since it is the folder at the top of the
row — the one gesture that puts a note in the vault root from here.

**A whole selection can be dragged at once**, and it moves as one: if any of
them could not be taken, the drop is refused rather than moving some and
quietly skipping the rest.

Links follow the note, exactly as they do when it is moved from the File
Explorer or by typing a path.

A folder that **could not take the drop shows nothing at all** — no label, no
highlight — rather than offering something that would then fail. Three cases:

- the folder the file is **already in**, since it is already there;
- a **name already taken** in that folder, because nothing here overwrites;
- a folder dropped **into itself or into its own descendant**, which would
  leave it nowhere to have come from.

Only folders **inside your vault** take drops. While the row is pointing
outside the vault its segments decline, because taking a note out of the vault
breaks every link to it — a decision worth a question rather than a gesture.
The way to do it deliberately is still to type the path, which asks first and
tells you how many notes would be affected.

## When the path is longer than the pane

Names are **shortened rather than squeezed**, in the order of what you are
least likely to need:

1. **The vault name first**, down to its icon. You know which vault you are in;
   the icon keeps saying where the path starts.
2. **Then the file's extension**, if you have it turned on — the same three
   characters on nearly every file in a vault. It goes whole rather than being
   shortened: half an extension says nothing that no extension doesn't.
3. **Then the folders**, the longest paying most. Room is taken in proportion
   to how much a name has, so one very long folder gives up far more than the
   short names beside it.
4. **The file's own name last**, and it keeps about six characters. It is what
   the header is for.

Room is given up **continuously**, in fractions of a pixel rather than a letter
at a time, so a pane dragged slowly narrows the row smoothly instead of making
it step and jump. Before any letter goes, the air around the delimiters is
spent — it is the row's only spacing and it costs no information at all — and a
shortened name ends where the delimiter begins, with no strip of empty box
between the two.

**The field takes what it holds.** Opening one to type a path does not squeeze
the folders beside it out of the way: it is as wide as the text in it and grows
as you type, so the trail keeps everything the field does not need. Only when
there is not enough for both does the row scroll, and then the field is the one
thing that never gives way — it is text being edited, not a name being fitted.

Nothing is cut past what tells it apart from its neighbours: `Projects2025` and
`Projects2026` in the same folder come down to `…025` and `…026` rather than to
a prefix that would make them the same word, while `Reports` beside `Receipts`
can come down to `Rep…`. On top of that a folder keeps about three characters
can come down to `Rep…`. On top of that every name keeps a **readable width** —
about four letters' worth for a folder and six for a file name, measured in the
font the row is actually drawn in rather than counted. Four narrow letters and
four wide ones are not the same amount of name, so `lilliliillil` is allowed to
keep more of itself than `WWMMWWMMWWMM` is, and what is left on screen is the
same size either way. Short names are left alone entirely — a name ground down
to `A…` is unique and still unreadable. **Spaces don't count towards it.** Six
characters to say which file this is are six characters worth reading, so the
blanks between them ride along free and one is never left sitting against the
`…`, where it would be invisible anyway.

**A name is cut wherever its neighbours agree with it, and in the middle when
they agree nowhere.** Two folders called `aaaa-common-one` and `aaaa-common-two`
share everything but their last three characters, so cutting the tail keeps the
half that says nothing: they come down to `…one` and `…two` instead, which is
shorter *and* tells them apart. Where the agreement is at the end — `alpha-draft`
beside `beta-draft` — the end is what goes; where it is at both ends, what
stands is the middle. A name with no near neighbours loses its middle, since a
name opens with what it is and closes with which one it is — for a file, its
extension: `annual…2026.md`.

A short run in common doesn't count. `parallel structures` happens to end in the
same two letters as `Schemes` beside it, and that is no reason to keep either of
them whole — three characters from the front already tell them apart.

Nothing wraps onto a second line. When even the shortest honest names don't fit,
the row **scrolls sideways**, parked at the end where the file is — at that
point there is nothing left to compress, and cutting further would hide rather
than shorten. The wheel scrolls it wherever the pointer is over the row, and
both ends can be reached: while it scrolls the row aligns to its start,
whatever the alignment setting says, because content centred in a box it has
outgrown spills off the left as well as the right — and that half cannot be
scrolled to at all.

**Point at a shortened name and it comes back in full**, for as long as you are
pointing at it, scrolled to the left edge so all of what came back is on screen.
**Click one and it stays**: the field opens showing the folder you clicked, what
is offered after it and whatever you type, and it goes on showing them once the
pointer has moved away. Names stay put while you are scrolling the row or typing
into it — one springing open under a gesture meant to read the row would move
everything after it out from under you.

The **opening segment always carries a tooltip, and it is the absolute path** —
`/home/you/Vaults/Notes`, or wherever the row begins. That is the one thing
about the row nothing on screen can say: the name tells you *which* vault, never
where it is. It is there whether or not anything had to be shortened.

With **Show vault name** off the name is not removed, only held at nothing —
so pointing at the icon gives it back exactly the way pointing at a name the row
had to shorten does.

**Show file extensions** puts the extension back on the row's file name. Off — the
default — the row names a note the way Obsidian titles it, without the `.md`
that almost every file in a vault shares; on, it names it the way the filesystem
does, which is what you want when the vault holds more than notes. It is also
the second thing the row gives up when space runs short, straight after the
vault name.
A tooltip gives you the rest: not just the name but everything the row shows
under it, as `…/name/folder/note.md`, so one hover answers both "what is this"
and "what is under it". The vault icon names its vault the same way, when the
name is turned off or has been squeezed away.

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

The rename command (<kbd>F2</kbd> by default, or whatever you've rebound it to) **alternates** between Obsidian's inline-title rename and this plugin's header path bar. If you've turned Obsidian's inline title off, the header path bar becomes the only target, so the key never does nothing.

In the path bar it opens on the **name without its extension** — the edit a rename
almost always is, and the same thing clicking the name selects. Press it again and
it walks the same rungs <kbd>Tab</kbd> does: the name with its extension, the path
from your vault folder, the path from the system root. Typing hands the key back to
renaming, so the ladder never gets in the way of the edit you came for.

The **Focus the path bar** command walks the same rungs, starting where an address
bar starts: the whole path selected.

Outside the vault the key works too — there is no inline title out there, so the
first press goes straight to the path bar.

This works by wrapping the `workspace:edit-file-title` command rather than grabbing the key, so rebinding the hotkey and running the command from the palette both work unchanged.

## How dropdown entries are tinted

| Colour | Means |
| --- | --- |
| **Purple** | A note (`.md`, `.markdown`) — what Obsidian will open as a note, picked out of a folder of mixed contents |
| **Orange** | A text type Obsidian has no view for; see [the warning colours](#the-two-warning-colours) |
| **Muted** | Outside your vault, so the vault's own handling doesn't apply |
| **Blue** | The note you're on. Browsing, that's its own entry; in rename/move mode the *keep this name* entry stands in its place — the same note either way |
| **Blue** | Where you already are: this bar's own note, and the folder the path bar is standing on |
| **Greyed** | Rename/move mode only: the name is taken. Still selectable — picking one fills the input, where validation flags the conflict |

## Visibility rules

- Files with unsupported extensions appear in the dropdowns only if Obsidian's **Show all file types** setting is on.
- The dropdown shows at most 100 entries — Obsidian's own limit. When a folder has more, the last row says how many were left out; keep typing to narrow the list.
- Dot-files and dot-folders appear only if this plugin's **Show dot files** setting is on.
- **Overwrite protection works identically regardless of visibility** — a hidden file still blocks you from overwriting it.

## Cheat sheet

A path **wrapped in quotes** is unwrapped for you. Windows' *Copy as path* hands
out `"C:\Users\you\note.md"`, quotes included, and a shell does the same for any
path with a space in it; pasting one in or typing it works either way. Only the
double quote, and only as a matching pair around the whole thing — it cannot
appear in a real name, where an apostrophe very much can.

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
| Complete the name being typed | <kbd>Tab</kbd> |
| Step into it, once one name is left | <kbd>Tab</kbd> again |
| Take back a step, or leave the folder | <kbd>Shift</kbd>+<kbd>Tab</kbd> |
| Grab the whole path, or the system path | <kbd>Tab</kbd> past the end, or click four times |
| Copy a name, a path, or a system path | Right-click it twice; the empty space three times for the system path |
| Reach what the vault manager offers for this vault | Right-click the icon at the start of the row |
| Copy the vault's ID | Right-click the icon at the start of the row |
| Open another vault you were browsing | Right-click its name at the start of the row |
| See the file's extension on the row | Turn on **Show file extensions** in the settings |
| Open a folder segment in a new tab | <kbd>Ctrl</kbd> or middle-click it |
| Reach the path bar from the keyboard | Bind *Focus the path bar* in Hotkeys |
| Open a web address or an `obsidian://` link | Type it into the bar and press <kbd>Enter</kbd> |
| Cancel anything | <kbd>Esc</kbd>, or click outside the header bar |
| Try entries on for size before committing | Arrow or hover through the dropdown; <kbd>↑</kbd> past the top gives your text back |
| Move a note into a folder above it | Drag it onto that folder in the row |
| See a shortened folder name in full | Hover it, or widen the pane |
| Find out where the vault itself lives | Hover the icon at the start of the row |
| Take a note out of the vault | Pencil → browse outside → confirm the dialog (links will break) |

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
