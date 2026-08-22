# Takeaways

Challenges, oddities and undocumented behaviour found while building Lure.
Kept for reference, and as raw material for bug reports or API requests.

Everything below was verified against the installed Obsidian build by
reading `obsidian.asar`, not inferred from documentation.

> **Most of this is not about Lure.** The parts that are facts about Obsidian, about
> driving it over the DevTools protocol, or about the publishing pipeline have been
> lifted into a shared `obsidian-lore` repository, where they are version-stamped and
> can be checked for staleness. This file is kept intact as the original record.
>
> When adding something new, ask what would make it false. If a future Obsidian
> release could, it belongs in the lore. If only a change to Lure could, it belongs
> here.

## `AbstractInputSuggest`

**The popover only opens in response to the input's own `input` event.**
Focusing the input from code — as a delimiter click does — shows nothing
until the user types. Dispatching a synthetic `new Event("input")` after
focusing is the workaround.

**`setSelectedItem` wraps the index it is given, so the index you asked for is
not the row you got.** An arrow off the end of the list is passed on as the
index *past* the end and wraps to the front inside the call. Anything that wants
to remember which row the list is on has to read `selectedItem` back after the
call rather than record the argument — recording the argument remembers a row
that is not there, and any later use of it silently falls out of range.

**The suggestion list commits an entry on `auxclick` as well as `click`.**

```js
t.on("click",    ".suggestion-item", this.onSuggestionClick.bind(this)),
t.on("auxclick", ".suggestion-item", this.onSuggestionClick.bind(this)),
```

`auxclick` fires for the right mouse button, so adding a `contextmenu`
handler to a suggestion silently gives you *both* a menu and a
selection — the entry commits underneath the menu that just opened.
`onSuggestionClick` starts with `if (!e.defaultPrevented)`, so the fix is
to `preventDefault()` an `auxclick` with `button === 2`. Arguably a bug:
right-click is not an auxiliary *activation*.

**Suggestion items cannot be dragged without a workaround.** The inner
`Suggest` list registers only `click`/`auxclick`/`mousemove`, but
`AbstractInputSuggest` itself adds one more line in its constructor:

```js
n.addEventListener("blur", i.close.bind(i)),
i.suggestEl.on("mousedown", ".suggestion-item", function (e) { e.preventDefault(); })
```

The popover closes on the input's `blur`, so the mousedown is prevented
to stop a click from stealing focus. But Chromium treats a prevented
`mousedown` as "no drag", so `dragstart` never fires on a suggestion —
`draggable = true` has no effect and there is nothing in the API to opt
out of it.

Both halves have to be defeated together, and only in that order:

1. A `mousedown` listener on the **item** runs before the delegated one
   on the container, so `stopPropagation()` keeps the event
   un-prevented and the drag gesture alive.
2. That re-allows the blur Obsidian was avoiding, which would close the
   popover mid-gesture — so the blur is swallowed by a one-shot
   **capture-phase** listener on `window`. Blur doesn't bubble but it
   does capture, so that runs before the listener on the input itself,
   and `stopImmediatePropagation()` keeps `close()` from ever being
   reached. Removed on the next tick.

Worth an API request: `AbstractInputSuggest` has no hook for "this item
is a drag source", and the two behaviours are entangled by design.

**The query is always the input's literal text.** There's no way to open
the popover with a filter different from what's displayed, which
collides with prefilling the input with a value the user is about to
type over. Worked around with a `queryOverride` passed through our own
context callback, retired on the first `isTrusted` input event.

## Context menus

**Triggering `file-menu` does not give you the native menu items.**
The obvious reading — that core listens on its own event and contributes
Rename/Delete/etc. — is wrong. Every call site *builds its own items
first* and only then fires the event for plugins to extend:

```js
t.addItem(… menuOptRename … promptForFileRename(r) …),
t.addItem(… deleteFile … promptForDeletion(r) …),
this.app.workspace.trigger("file-menu", t, r, "file-explorer-context-menu", null)
```

So a plugin that wants a File-Explorer-like menu has to re-add the core
entries by hand and fire the event for everyone else's. There is no
"give me the standard file menu" API.

**Menu section order** comes from `menu.addSections([...])`, which is not
in the public typings. The File Explorer's order is
`title, open, action-primary, action, info, info.copy, view, system, "", danger`.
Without it, sections render in insertion order — cosmetic only.

**`Menu.forEvent()` is `@since 1.6.0`.** Convenient, but unusable with a
`minAppVersion` below that; `new Menu()` + `showAtMouseEvent(evt)` is the
compatible equivalent.

## Obsidian's own i18n is reachable

`i18next` is bundled as a UMD global, so `window.i18next.t(key)` resolves
Obsidian's own strings in whatever language the app is set to. The
resource tree is plain camelCase objects:

```js
menuOptNewNote: "New note", menuOptNewFolder: "New folder",
menuOptRename: "Rename...", menuOptDelete: "Delete", …
```

Keys used here: `plugins.fileExplorer.menuOpt*`, `interface.menu.*`.

This is worth reaching for whenever a plugin recreates a piece of native
UI: the labels then match the app exactly, in every language, with no
translation work — and far better coverage than a plugin's own table can
manage. i18next returns the key itself when it can't resolve one, which
makes the fallback check trivial. Undocumented, so always guarded.

## `app.dragManager`

Undocumented, and the only way to make an element drag like a File
Explorer row (drop in an editor → link, drop on a folder → move). The
file explorer's own pattern:

```js
el.draggable = true;
el.addEventListener("dragstart", (evt) => {
    const data = file instanceof TFolder
        ? dragManager.dragFolder(evt, file)
        : dragManager.dragFile(evt, file);
    if (data) dragManager.onDragStart(evt, data);
});
```

Also available: `dragFiles` (multi-select), `dragLink`, `handleDrag`,
`handleDrop`, `updateSource(els, "is-being-dragged")`, `setAction`,
`showOverlay`.

**Drop *targets* inside a transient popover are not achievable.** The
suggestion popover only exists while the input holds focus, and grabbing
a file to drag from anywhere else dismisses it first — so there is no
moment at which a dropdown entry can receive a drop.

## View header internals

`.view-header-title` is `contenteditable` with its own click-to-rename
handling that can't be selectively disabled — hence hiding it entirely
and rendering a replacement next to it.

Obsidian recreates `.view-header-title-parent` when switching files, so
anything inserted around it has to be re-checked (`isConnected`) on every
refresh rather than inserted once.

**Obsidian's own header breadcrumb already has folder drag and context
menus** (`renderBreadcrumbs` wires `contextmenu` → New note / New folder
→ `trigger("file-menu", …)`, plus `dragManager.handleDrag` →
`dragFolder`). Worth knowing when replacing that row: those capabilities
disappear with it unless they're re-added.

The core header's own view-mode action uses the `pencil` icon, so a
plugin button placed in the same `.view-actions` row should not.

**Pre-empting another plugin's listener on an element you don't own.**
To give the native folder segments a different job, our handler has to
run *instead of* Obsidian's — and instead of any a folder-notes plugin
added to the same element. Both of those sit on the element itself, and
a listener we add there might be registered after theirs, in which case
nothing we do can stop them: `stopImmediatePropagation` only cancels
listeners registered *later* on the same element. A **capture-phase
listener on an ancestor** sidesteps ordering entirely — capture on the
parent always runs before any target-phase listener on the child, so a
plain `stopPropagation()` there suppresses all of them.

**Folder notes marks the path for you.** The plugin adds
`has-folder-note` to the *native breadcrumb span* of any folder that has
a note (`updateFolderNamesInPath`), independently of its own
`underlineFolderInPath` / bold / cursive display toggles — those are
only body classes its stylesheet keys off. So "does this folder have a
note?" is answerable in pure CSS, via
`.view-header-breadcrumb.has-folder-note + .view-header-breadcrumb-separator`,
with no path-convention guessing and no coupling to its settings.

Two quirks in that function, both read from minified source and worth
re-checking before filing anything upstream:

- It bails with `if (!folderNote) return;` — a bare `return` out of the
  whole function, not `continue`. The first folder without a note ends
  the loop, so a note-having folder *below* a note-less one never gets
  the class. Any marking derived from it inherits that blind spot, even
  though delegating the click still opens the note correctly.
- It reads segment names via `breadcrumb.innerText`, so it depends on
  the rendered text of the native segments. Rewriting those labels would
  break its path reconstruction — worth remembering, since this plugin
  already rewrites the *separators* between them (which it skips).

**Delegating instead of reimplementing.** "Open the folder note" has no
API and no single convention (`{folder}/{folder}.md`, `index.md`,
sibling notes — each folder-notes plugin differs, and each is
configurable). Re-dispatching the click onto Obsidian's own breadcrumb
element gets whatever the user's setup already does, for free, and with
no config to keep in sync. It also yields the no-folder-note fallback at
no cost, since the unpatched element reveals the folder in the File
Explorer. The catch: dispatching a synthetic click back into an element
we also intercept needs a re-entrancy flag, or the capture listener
above swallows its own delegation.

## Icons

Current builds bundle the **full Lucide set** (~1,400 icon ids extracted
from the asar's icon table), not the ~230-icon subset older docs
describe. `getIconIds()` at runtime is the authoritative list. Note that
minification leaves single-word icon names as *unquoted* object keys, so
grepping the asar for `"name":` misses `move`, `lock`, `type` and every
other one-word id.

**Making a `setIcon()` icon theme-overridable without style queries.**
`setIcon` injects an `<svg>` the plugin owns, so a snippet author has
nothing to target unless one is provided. `@container style(...)` would
be the obvious switch but needs Chromium 111+, above what
`minAppVersion` guarantees. Two older CSS behaviours do the job on any
version:

- `display: var(--lure-icon-svg, revert)` — `revert` rolls the property
  back to whatever Obsidian's own `.clickable-icon`/`.svg-icon` rules
  set, so the untouched default is never hard-coded by us.
- `content: var(--lure-icon-glyph, none)` — `content: none` suppresses
  the pseudo-element entirely, so the hook costs nothing until someone
  sets the variable.

Together they let a snippet replace an icon in one rule block, setting
two custom properties on the plugin's own class.

## Rename validation

The plugin mirrors Obsidian's own rename rules by reusing its character
sets and message wording (`msgInvalidCharacters`, `msgUnsafeCharacters`,
`msgFileAlreadyExists`, `msgEmptyFileName`, `msgBadDotfileName`). There
is no exported validator, so this is a deliberate duplication that has to
be re-checked when Obsidian changes its rules.

## Build

`esbuild`'s `stdin` + `write: false`, imported back through a
`data:text/javascript;base64,…` URL, runs the plugin's real TypeScript
sources inside a plain Node script with no test framework and no extra
dependencies. That's what `scripts/check-translations.mjs` uses to
validate all 45 locales against the English source on every build.

## Writing outside the vault

`fs.rename` cannot cross filesystems and fails with `EXDEV`, which is the
*ordinary* case for this feature rather than an edge one — moving a file
off a USB stick or a network share is precisely what it exists for. The
fallback is copy-then-`unlink`, with the original removed only after the
copy succeeds.

Overwrite protection is delegated to the filesystem rather than to a
prior existence check: `copyFile(..., constants.COPYFILE_EXCL)` and
`writeFile(..., { flag: "wx" })` both fail with `EEXIST` instead of
clobbering. A check-then-write pair has a window between the two, and out
here there is no vault index to notice a loss and no trash to recover
from.

`fileManager.renameFile` only accepts a vault path, so a note cannot be
moved out of the vault by any API that also updates links to it. Doing it
with `fs` would break every link silently. The plugin refuses the move and
offers the copy instead — copying has none of that problem, since the
original and its links stay put.

## Icons Lucide doesn't have

Obsidian bundles a subset of Lucide, and `setIcon` on a name that isn't in
it silently renders nothing. There is no tilde in the set — the only
"tilde" anywhere in the app bundle is an HTML-entity table — so the home
folder's `~` had to be drawn.

Drawing it as a text character works but is visibly the odd one out: it
doesn't take `--icon-s` sizing, doesn't match the 2px stroke of the icons
beside it, and moves with the theme's font. Emitting an SVG with Lucide's
own attribute set instead (`viewBox="0 0 24 24"`, `fill="none"`,
`stroke="currentColor"`, `stroke-width="2"`, round caps and joins, class
`svg-icon`) makes a hand-drawn icon indistinguishable from a bundled one,
and the existing `> svg { width: var(--icon-s) }` rules then apply to it
unchanged. `M4 12q4-5 8 0t8 0` is a symmetric tilde on that grid.

Obsidian *does* ship `vault` (used for "Copy vault path" and the vault
commands) — worth grepping the asar for the icon the app itself uses
before picking a lookalike from the wider Lucide set.

## Size caps have to be measured, not guessed

The external viewer's original 2 MiB text cap was written to stop a huge
file "locking the renderer". Driving a live Obsidian over the DevTools
protocol showed it did the opposite — the cap sat *above* the failure
point, so the one code path it existed to protect was the one that killed
the app:

    text  512 KB   0.42 s   ok
    text  768 KB   1.35 s   ok
    text    1 MB   renderer process killed
    text    2 MB   renderer process killed   (= the cap)
    md    512 KB   7.24 s   ok, but the UI is frozen throughout

Three findings worth keeping:

- A `<textarea>` with `white-space: pre` lays out every line up front.
  Reading less is not the same as rendering less, and only the second one
  protects the window.
- Markdown costs several times more per byte than plain text, so one cap
  cannot serve both. `MarkdownRenderer.render` is synchronous, and its
  real driver is *block count*, not size: 64 KB of headings and short
  paragraphs costs seconds where 64 KB of prose is instant. Cap for the
  dense case — it is the one that hurts.
- Line *length* matters independently of total size: 128 KB on a single
  line produced a scroll width over a million pixels.

## Obsidian truncates suggestion lists silently

`AbstractInputSuggest.showSuggestions` does `e.length > n && (e = e.slice(0, n))`
against `this.limit` (default 100) with nothing shown to the user, so
browsing /usr/bin looked like a folder of exactly 100 files. To say
otherwise a suggester has to cap the list *itself*, one short of the limit,
and spend the last row on the count — anything appended past the limit is
cut off by that same slice.

## Registering an extension is not the same as being a note

`Plugin.registerExtensions(exts, "markdown")` does give a non-`.md` vault
file Obsidian's real editor — Live Preview and all — which an ItemView
never can. It was built, tried, and taken out again, because what it
changes is *how the file opens*, not *what the vault thinks it is*: the
metadata cache still indexes only `.md`, so the file has no backlinks,
never appears in Quick Switcher, and `[[name]]` does not resolve to it. It
edits like a note without being one, and the registration is vault-wide and
persistent, which is a lot of surprise to buy that.

Worth keeping from the attempt, in case it is ever wanted again:
`viewRegistry.registerExtensions` **throws if any extension in the array is
already registered**, and throws before assigning any of them, so the list
must be filtered against `isExtensionRegistered` first or one contested
entry loses the whole batch. `viewRegistry.unregisterExtensions` exists
(undocumented) and fires `extensions-updated`, so a claim can be released
without restarting.

## One exit from a session is not all of them

Picking a file from the dropdown *outside* the vault left the input and its
popover open over the file it had just opened. Every other path tore the
session down — `navigateToFile` for vault files, `submitExternal` for a
typed path — and `selectExternalEntry` was the one that didn't, so the bug
read as "sometimes the dropdown doesn't disappear".

The lesson is about shape rather than the one missing line: when several
branches all have to end the same way, the teardown belongs at the join,
or each new branch is a chance to forget it.

## `.view-content` is Obsidian's element, not yours

A view's `contentEl` already carries `.view-content`, and Obsidian styles it
through `.workspace-leaf-content .view-content` — specificity (0,2,0). A
plugin rule written as a bare `.lure-external-view` is (0,1,0) and loses
silently: the declarations that clash simply never apply, and the ones that
don't clash do, so the result looks *half* styled and reads as a layout bug
rather than a cascade one. Qualifying as `.view-content.lure-external-view`
ties the specificity, and plugin CSS loads later, so it wins.

Related, and worth checking in any pane-sized view: `vh` units are the
*viewport*, not the pane. A `min-height: 60vh` textarea in a horizontally
split pane is several times taller than the space it has, so the whole view
scrolls — taking the status bar with it, exactly when the pane is too small
to spare it. A flex column with a fixed head and a `min-height: 0` scrolling
body keeps the bar where it belongs. `min-height: 0` is the load-bearing
part: without it a flex child refuses to shrink below its content.

## Measuring a pane means owning the workspace layout

Obsidian persists the workspace, so splits made while probing survive into
the next run — and into the vault. Several "the pane is only 82px" readings
were the leftovers of earlier probes, not the CSS under test. Any layout
test has to `changeLayout` to a known shape first and restore it after,
otherwise it measures its own history.

## Don't revoke permissions from the render path

The external write unlock was cleared inside the function that draws the
padlock, on the reasoning that a row no longer pointing outside the vault
has no business being unlocked. But that function runs on *every* repaint,
and a repaint happens partway through the teardown that finishing a move or
clicking away performs — at a moment when `externalPath` is briefly null.
The result: the padlock re-locked itself after every single move, which
reads as "the unlock doesn't stick" rather than as a lifecycle bug.

Permissions should end at the transitions that mean something — a different
location picked, a return to a vault file — not wherever the state happens
to be sampled. Grant them to a *place*, remember which one, and check
membership; then transient nulls during a repaint can't revoke anything.

## Obsidian's split directions read backwards

`getLeaf("split", "vertical")` puts panes **side by side**, and
`"horizontal"` **stacks** them. The name describes the divider, not the
arrangement — which is the opposite of how "vertical split" is usually said
out loud, and the opposite of what the menu calls it ("Split right" /
"Split down"). Worth measuring rather than assuming: a layout test written
against the wrong one silently exercises the wrong constraint.

## A readiness probe must not dereference the thing it is waiting for

The suite waited for the plugin with
`!!app.plugins.plugins.lure?.manager`. The optional chaining looks careful,
but it starts one level too late: on a cold start the DevTools page target
answers while `app` itself is still undefined, so the probe threw
`Cannot read properties of undefined` — out of `evaluate()`, past the
retry loop, killing the whole run. A loop whose entire job is to report
"not yet" instead reported a fatal error, and only on the one code path it
was written for.

Two rules fell out of it. Guard from the root, not from the middle:
`typeof app !== "undefined" && app.plugins?.…`. And treat a throwing probe
as *not ready* rather than as a failure — during startup a renderer can
refuse an evaluate for reasons that resolve themselves a half-second later.

Worth noting how it hid: `restart-obsidian.sh` prints `ready` once a page
target exists, which is true and useless — the window is there, the app is
not. Warm runs never touched the path, so the suite looked stable for as
long as nobody restarted Obsidian first.

## The file explorer has two `revealInFolder`s, and only one has the rows

`app.internalPlugins.getPluginById("file-explorer").instance.revealInFolder`
is a thin async wrapper: it opens the explorer leaf if none exists, reveals
the leaf, then delegates to `leaf.view.revealInFolder`. The *view* is where
`fileItems` — every rendered row, keyed by vault path — actually lives.

Reading `instance.fileItems` therefore yields `undefined`, and because the
lookup was written as `instance.fileItems?.[path]`, the optional chain
swallowed it: the expand silently never ran, with no error and no visible
difference from a folder that happened to be open already. Only a live
check caught it.

Worth knowing what reveal does and doesn't do, too. It walks *up* from the
target expanding each ancestor so the row becomes visible, then focuses and
scrolls to it — but never touches the target's own collapsed state. So
"reveal this folder" leaves the folder shut, which is rarely what the user
meant by clicking it.

## A test suite that hardcodes English is a suite that tests one locale

Switching Obsidian to German turned 18 assertions red at once, and every
one of them *looked* like a product regression: buttons "missing", clicks
crashing on `undefined.click()`, notices not matching. Nothing was broken.
The suite compared against English literals — `/as text/` never matches
"Als Text bearbeiten", `/create/i` never matches "Erstellen".

The fix is not to pin the locale. It is to resolve the expected strings the
same way the plugin does: load `strings.ts` and `translations.ts` through
esbuild (the translation checker already had the loader), read the live
locale from `localStorage.language`, and look each key up. Assertions then
say *which string* they expect rather than what it happens to say in
English, and the suite tests all 45 locales instead of one.

Two things this shook out that had nothing to do with language:

**One stuck modal poisons everything after it.** A failed test that leaves
a modal open leaves it on Obsidian's modal *stack*, and every later
`.modal button` query finds the stale modal's buttons first. Four dead
modals had accumulated, so a single real failure was presenting as three.
Tests now dismiss any open modal before they start.

**Post-click DOM probes read the wrong world.** `has-folder-note` was
sampled after the click that changes which note the header describes, and
the reveal outcome was sampled on a fixed 800 ms timer. Sample state that a
click will destroy *before* the click, and poll for outcomes that land on a
later frame rather than betting on one sleep.

## Reveal has two entry points, and only one was expanding

Expanding a revealed folder was implemented in `revealFolderInExplorer` —
which the browse-trail chips use. The *delimiter* click, which is how
people actually open a folder, goes through `openNativeSegment`: it
re-dispatches onto Obsidian's own breadcrumb element so a folder-notes
plugin can answer it. That path never touched the expand code, so the
feature was invisible exactly where it mattered.

The delegation now expands too, but only when the explorer actually landed
on that folder (`tree.focusedItem`). A folder-notes plugin may answer the
click by opening a note and revealing nothing, and expanding a folder
nobody navigated to would be a stray side effect.

## Two vaults open means two page targets, and no stable order

`/json/list` returns one page target per Obsidian window, and the harness
took the first. That is fine until a second vault is open — then the suite
silently drives whichever window the list happened to put first. It ran a
full compatibility suite against the wrong vault and reported a clean
answer about a plugin that was not even installed there.

Nothing about that failure looks like a failure, which is what makes it
worth guarding: the tools now match on the vault name (`OBSIDIAN_VAULT`,
matched against the window title `"<file> - <vault> - Obsidian"`) and
refuse outright when more than one window is open and no vault is named.
Refusing is the point — a wrong answer delivered confidently is worse than
an error.

Related: `app.setting.open()` does nothing useful in a background window,
so a settings-tab assertion can't be made by driving the modal. Render the
tab into a detached element instead — assign `tab.containerEl`, call
`display()`, read the result, put the original back.

## A reveal that only expanded on a warm tree

`expandInExplorer` guarded its retry with `if (onlyIfRevealed && focused !== path) return;`
— and returned *without scheduling the next attempt*. Obsidian sets the focused
tree item as part of revealing, and on a freshly loaded window that lands after
the click returns, so the first look failed and nothing ever tried again. The
folder stayed shut on the first reveal after every Obsidian start, then worked
for the rest of the session, which is the worst shape a bug can have: the
demo is fine and the first impression is broken.

The guard now waits rather than gives up — it re-checks on each attempt, so
"the user navigated away" still cancels, but "the reveal has not landed yet"
merely retries.

## requestAnimationFrame does not fire in a window nobody is looking at

The same retry had been scheduled with `requestAnimationFrame`. An Obsidian
window driven over CDP paints no frames — measured: **zero** rAF callbacks in
500 ms — so every rAF-scheduled retry in the codebase was dead code under
automation, and would be equally dead for an occluded window. Timers do not
have that dependency, so the backoff is `setTimeout` now.

The same fact explains a screenshot that came out with the note text showing
through the dropdown: Obsidian fades the popover in with a CSS transition, and
a transition cannot advance without frames either. Setting `opacity` alone did
not help — that only starts a second transition that also never advances. The
capture disables the transition first, then sets the end state.

## A file conflicting with itself

In rename mode the "keep this name" entry was skipped whenever
`getAbstractFileByPath(target)` found anything — including the very file being
renamed. Browsing back to the note's own folder therefore made its name vanish
from the list, and the note itself appeared greyed out as though it blocked its
own rename. Both checks now ignore one path: the file's own.

## Obsidian HTML-escapes its window title

A vault named `L'Éclaire, c'est moi` appears in the CDP target list as
`L&#39;Éclaire, c&#39;est moi`. Every tool here picks its window by matching
` - <vault> - ` against that title, so an apostrophe in a vault name made the
vault unreachable — with an error saying the window did not exist while it sat
right there in the list. The titles are decoded before matching.

## A highlight that exists only in the pixels

Revealing a folder tints its row and fades the tint out. Screenshots taken
during that window published a bright olive sidebar — and the tint is
invisible to the DOM: computed background reads `rgba(0,0,0,0)` throughout,
`getAnimations()` returns nothing, and the pseudo-elements are transparent.
Every way of *asking* the page whether it had settled said yes while the
capture said otherwise.

So the capture waits on the clock and then checks the result rather than the
page: it samples the revealed row out of the finished PNG and fails if the
colour channels diverge, which is the difference between a neutral grey row
(spread ~0%) and an unfaded one (~33%). Verified by setting the wait to zero
and watching it fail.

The general lesson, twice over now in this file: when the thing you care about
is what the picture looks like, assert on the picture. The DOM is a model of
the render, not the render.

## Rebuilding your own UI looks exactly like the user leaving it

Rename mode ends when focus leaves the header, checked one tick after
`focusout` because activeElement is briefly `<body>` mid-change. Choosing a
folder from the dropdown tears the row's input down and builds a new one, and
whatever holds focus during that — `<body>`, or Obsidian pulling it back to
the editor — read as the user clicking away. The mode ended on a click meant
to continue it.

The first fix widened the window: look several times over ~200 ms instead of
once. It passed every automated check and the bug survived in real use,
because where focus lands during a rebuild is not ours to predict and waiting
longer only changes the odds. Timing fixes for races are how you get a bug
that reproduces on someone else's machine and not on yours.

What works is not consulting focus at all while a session of ours is open:
during browsing or typing, `focusout` cannot end the mode. Leaving for real is
a click, which the click-away handler already catches; the focus path only
needs to serve Tab, which only matters when rename mode sits idle.

The test for it had to be made faithful twice. `document.body.focus()` moves
nothing — body is not focusable — so the first version passed against
deliberately broken code. Stealing focus into the editor, the way the app
itself does, is what makes it fail without the guard and pass with it. A
regression test that has never failed is a guess.

## A suite that reads a setting instead of setting it passes by luck

Three assertions in the external suite were written against whatever the vault
happened to have: the tinting test needed Obsidian's *Show all file types* on
to see a `.txt` at all, the `/usr/bin` truncation test needed it on so the
listing overflowed, and the dot-file assertion needed the plugin's own
`showDotFiles` off. All three passed for months in a vault where those toggles
sat the right way, and all three broke the day the suite moved to a different
vault — as failures that pointed at tinting, truncation and dot-files rather
than at the settings underneath them.

Worse than the noise: the dot-file assertion had been *passing for the wrong
reason*. `.hidden.txt` is hidden twice over — once as a dot-file, once as an
unregistered extension — and with the extension filter on, the dot-file rule
was never the thing being tested. Turning the filter off is what first made
that assertion mean anything, and it failed immediately.

Every test now pins the settings it depends on and restores them. The restore
also happens unconditionally at the end of the run, next to the fixture
cleanup, because a test that throws never reaches its own restore — one such
run left *Show all file types* on, and the next run faithfully snapshotted the
leak as the state to preserve.

## Screenshot rejects overwrite the good image

The capture script writes the PNG, then reads the pixels back to check the
reveal highlight had finished fading. That order is deliberate — a rejected
shot is left on disk to look at — but the file it writes is the one the README
links, so a failed run replaces a good committed screenshot with the olive
mid-fade version it just refused. Nothing downstream says so: the script exits
non-zero, the image is already changed, and `git add -A` ships it. Twice now
the project has published a flawed screenshot nobody noticed; this is a
mechanism for exactly that. `git checkout -- docs/images/` after any failed
capture, or the reject wins by default.

## The language a screenshot is taken in is not the one localStorage claims

Obsidian's UI language lives in localStorage but is read once at startup, so
writing `"en"` there changes nothing until the renderer reloads. The capture
script does both, and a guard that reads localStorage back therefore asserts
only that the script's own write landed — it cannot fail. What does carry the
answer is `i18next.services.resourceStore.data`: Obsidian loads English plus
the active language and nothing else, so any second key in there is a chrome
still drawn in the old language. That is also the only way to enumerate
Obsidian's own translated strings from outside — `i18next.loadLanguages()`
silently no-ops for a language the app has not loaded, and returns English.

## Most of a failed submission report was the reviewer's missing type

The community-plugin bot returned about 150 findings across five rules —
`no-unsafe-call`, `-member-access`, `-return`, `-assignment`, `-argument` —
concentrated in `externalFs.ts`, `systemLocations.ts` and `externalFileOps.ts`.
Those are exactly the files that import `fs`, `path` and `os`, and every one of
them is fully typed. Running the same `eslint-plugin-obsidianmd` config locally
reported **none** of them.

The difference is `@types/node`. Type-aware rules need a real programme; where
the Node types are not resolvable, every value coming out of `readdirSync` or
`join` degrades to `any`, and each use of it then trips a separate rule. One
missing `@types` package inflated a 22-error report into a 170-line one, and
the inflation is indistinguishable from real findings unless you reproduce it.

Reproducing the review locally is therefore the first step, not the last:
`npm run lint` now runs the bot's own rule set, and `npm run build` depends on
it, so the report cannot come back with anything that was not visible here
first.

## minAppVersion is checked against the @since tags in obsidian.d.ts

`obsidianmd/no-unsupported-api` reads the `@since` on each declaration in the
bundled `obsidian.d.ts` and compares it with `manifest.json`. The floor is
therefore the *maximum* `@since` across everything the plugin touches, and it
moves silently: adopting one convenience call raises the minimum Obsidian
version for every user. Here `Vault.copy` and `displayTooltip` — neither of
them load-bearing choices at the time — set the floor at 1.8.7 on their own,
while everything else needed only 1.4.10.

Worth knowing which calls are expensive before reaching for them. `@since` is
in the shipped `.d.ts`; `grep -B12 <symbol> node_modules/obsidian/obsidian.d.ts`
answers it in one line.

## A single tilde is a strikethrough delimiter

The AI-disclosure line uses `~` before each number, because none of them is
exact. Five of them on one line, and GitHub-flavoured Markdown — GitHub's
renderer and the community site's alike — pairs the first with the last and
strikes out everything between:

```
~4,928 responses: ~7.2 M generated, ~23.7 M sent, ~1169.6 M cached (~1200.5 M total).
```

renders as *4,928 responses … cached (* struck through, followed by an intact
"1200.5 M total". The disclosure appeared on the plugin's public page as a
correction of itself. GFM's strikethrough takes "one or two tildes", which is
the part that is easy to miss: `~~` is the documented form, but a lone `~` is
just as much a delimiter, and an odd number of them produces a partial strike
that looks deliberate.

Escaping each one as `\~` renders identically to a bare `~` everywhere and
cannot pair. The generator in `.dev/usage-stats.mjs` emits the escaped form, so
the next refresh does not undo it. Worth remembering for any prose that uses
`~` as "approximately" — the same trap is waiting in every README that does.

## Declaring a dependency's types can be better than installing them

The community review lints with type information but cannot resolve
`@types/node`, so every value returned by a Node builtin degrades to `any`, and
each use of it trips a separate type-aware rule. That was 141 of 164 findings
on the public scorecard, none of them reproducible locally.

Declaring the surface instead — `declare module "fs"` and friends, in the
repository — fixes it, and turns out to be worth doing on its own merits. The
declarations are *narrower* than upstream, which is a feature: `readFileSync`
declared only for `"utf8"` makes an un-encoded call a compile error, and
writing the file immediately caught a `statSync(...).isFile()` that a grep of
the call sites had missed. For a plugin whose reviewers care about filesystem
access, "here is every syscall it can make, in forty lines" is a better answer
than a paragraph of reassurance.

The check that matters afterwards is that the build passes with the package
*absent*, since that is the environment being modelled. And the bundle should
come out byte-identical, because types erase — if it does not, the swap changed
behaviour and something is wrong.

## The suites were testing whatever Obsidian booted with

A plugin's bundle is read once, when it is enabled, and held. Rebuild
`main.js` and run a suite against a window that was already open, and every
assertion is made against the *previous* build. Nothing says so: the run is
green, the numbers go up, and the code being described is not the code on
disk.

This was found the only way it can be found. A new feature had a new
regression test, the test passed, and — following the rule in this file about
making a passing test fail once — the feature was deliberately broken and the
build rerun. The test still passed. Six assertions, all green, against a build
where the feature was `current: false`.

Every green run in this project's history is suspect to the degree that
Obsidian was not restarted between the build and the run. In practice most
were fine, because the habit was to launch Obsidian after building — but that
is luck standing in for a guarantee, and it is exactly the kind of luck that
holds until the run that matters.

`reloadPlugin()` in `.dev/cdpSession.mjs` now disables and re-enables the
plugin as the last step of both suites' startup, after the readiness loop and
before the first test. It costs about a second. The check that it works is the
same one that exposed the problem: break something on purpose, rebuild, and
watch the suite fail *without* touching the running window.

The general shape is worth keeping in mind for any host application that
loads plugins: "the tests pass" means nothing until you know what the tests
loaded.

## `Plugin.settings` became an Obsidian field in 1.13.0

A plugin that stores its own options as `this.settings` — which the sample
plugin does, and which this one copied — now shadows `Plugin.settings?: unknown`,
added for the declarative settings API. It typechecks, because narrowing an
optional `unknown` to a concrete type is legal, and it behaves correctly on
1.13.7.

Worth knowing anyway: the field is no longer only ours, and a future Obsidian
that reads it for its own purposes would find a shape it did not choose. It is
also the one thing `scripts/check-min-app-version.mjs` reports as newer than
the floor, and the report is right that the name is new and wrong that we use
it — which is exactly why that script says a hit is a question, not a finding.

## A TypeScript module can be tested without a build step

Every suite here drives a real Obsidian through CDP, which is right for
anything about gestures, focus or layout and absurd for `src/pathFit.ts`: it
is string maths with the widths handed in through a callback. Testing it
through the app meant a fixture vault, a split pane, and assertions phrased as
"whatever the window happens to be" — which is how the old long-path test came
to assert the *opposite* rule to the one it was named after and still pass.

esbuild is already a dependency, and it can compile to memory:

```js
const bundle = await build({ entryPoints: ["src/pathFit.ts"], bundle: true,
	format: "esm", write: false });
const mod = await import(
	`data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString("base64")}`);
```

`.dev/test-fit.mjs` runs in under a second, needs no vault, no debug port and
no running application, and every assertion is exact — `Docu…`, not "shorter
than it was". The rule of thumb it suggests: if a module was deliberately kept
free of the DOM, testing it through the DOM throws away the reason it was
written that way.

## The highlighted row is readable, but only off an undocumented field

`AbstractInputSuggest` exposes the values it is given and the selection it
makes (`onSelectedChange`), but not *which row is highlighted right now* —
and Tab needs that to know which name to walk toward. The list object behind
the popover has it, under `this.suggestions`, as an index into a parallel
array:

```ts
const list = (this as unknown as { suggestions?: SuggestionList }).suggestions;
const row = list?.values?.[list.selectedItem];
```

Neither `values` nor `selectedItem` is in the public typings. Both have been
stable across the versions this plugin has been built against, but the read is
written to fail into `null` rather than to throw — an unhighlighted list and a
renamed internal then look the same to the caller, and the feature degrades to
"walk toward the first row" instead of breaking.

Worth knowing alongside it: **arrowing through the list already writes the
name into the field** (the address-bar preview). So the highlight only tells
Tab anything in the case where the list highlighted a row *by itself* — the
preselect that opens it on the file you already have open. That is the case
worth testing, and the one a test written around arrow keys would miss.

## A press that suppresses the query is not the same as a field typed empty

The path bar suppresses the input's text as an autocomplete query while a
prefill is still selected, by setting the query override to `""`. Tab then
wanted the same fact — "this text is about to be typed over, not extended" —
and reading the override for it looked free.

It is not: `queryAtCaret` also returns `""` for a field the user has genuinely
emptied, so clearing a name and pressing Tab took the "prefill" branch and
widened the selection instead of completing. Two different facts had been
folded into one sentinel because the sentinel happened to be reachable. A
separate `prefillSelected` flag, set where the prefill is set and cleared on
the first real keystroke, is three lines and says what it means.

## A test can pass because two mechanisms produce the same string

The case for "Tab walks toward the highlighted row" cleared the field with one
Backspace, pressed Tab, and asserted the note's name was in it. It passed —
and it was testing nothing. Clicking a file name selects the *stem* and leaves
`.md` behind it, so one Backspace left `.md` in the field; no name starts with
`.md`, so the press fell through to the selection ladder, whose first rung
writes exactly that same name into the field.

The assertion could not tell the two apart. What caught it was asserting the
*precondition* as well — that the field really was empty — which failed while
the interesting assertion passed. When a test's subject and its fallback can
produce the same output, assert the state the test needs to be in, not only
the result it expects.

## Two reasonable rules can meet in a press that does nothing

Tab skipped a candidate with nothing left to add, so that a folder whose name
is another's opening (`Schemes` beside `Schemes2026`) is completed past rather
than entered. Separately, the match query drops an extension the caret has not
reached, so typing `Cak` over `Cak.md` still finds `Cake catapult.md`. Each is
defensible on its own.

Together they made a folder beside its own note — the thing every folder-note
plugin creates — impossible to enter:

```
Projects/ + Projects.md      typed "Projects"
  → "Projects" has nothing to add, so it is skipped
  → "Projects.md" is written into the field
  → the field is matched as "Projects" again … forever
```

Every press after the first did *nothing at all*, and no press could ever
enter the folder. Two things came out of it. First, **progress has to be
measured against what the user can see**, not against the internal string the
candidates were matched with — the write was longer than the query and looked
like progress while the field never changed. Second, **a rule about "what
extends this name" needs to know what kind of thing is doing the extending**:
a folder is a fork in the path and a file is a destination, so only a folder
should be able to hold a folder up.

Worth generalising: when two rules are each stated over a different notion of
the same value (here, "the name" as matched and "the name" as displayed),
their interaction is where the bug will be.

## The caret is the argument, so where it is left is an API decision

Tab completes "the segment the caret is in". Stepping into a folder carries
whatever stood to the right of it into the new folder — and left the caret at
the far end of that text, because that is where a caret naturally goes.

Which meant the next press asked about the *last* segment of the path, found
`leaf.md` with nothing to complete against, and handed the key to the
selection ladder — whose first rung stands in the file's own folder. Clicking
a folder and pressing Tab twice therefore swallowed every folder in between in
one press, with no code anywhere deciding to skip them: three separate,
individually sensible behaviours composing into a jump.

The fix is one line — land on the *next* name, marked, exactly as a click on
that folder would — but the lesson is about the shape of the bug. When a
function's real argument is a piece of UI state (a caret, a scroll offset, a
focus ring), every place that leaves that state somewhere is silently choosing
that argument for the next call. Those are the calls worth tracing when
something "jumps".

## A cycle that does not close is a leak

The selection ladder wrapped past its last rung by standing at the top folder
of the path with an empty field — "ready to type from again", and reasonable
on its own terms. It was written when the only way into the ladder was to run
out of things to complete, where the field was empty or held a name you had
typed.

Then the ladder became reachable from a *folder click*, which opens the field
on the whole rest of the path. Now one lap of a key that had never destroyed
anything ended with the path gone: five presses, no typing, nothing on screen.
Neither change was wrong; the wrap simply had an assumption in it about where
laps begin, and the new entry point broke it.

The fix is the general one for any cycle: **remember where the lap started and
return there**, rather than computing a plausible-looking starting point. A
snapshot of the field (the same one Shift+Tab already used) closes the loop
exactly, selection included — and "selection included" matters, because being
*a prefill* is part of that state and is what makes the next press start the
lap again instead of completing against it.

Worth checking wherever a feature grows a second entry point: the code that
ends the interaction usually encodes what the *first* entry point looked like.

## An undo that deletes is a different gesture from one that marks

Walking a completion back by restoring the earlier text is correct and feels
wrong: the name you were looking at disappears a piece at a time, and a press
that overshoots has cost you something. Marking the characters instead — the
text stays, the run the press added is selected — is the same information
presented as a *proposal*, and it composes with the editor's own rules: typing
replaces a selection, so "walk back two steps and type something else" needs no
extra handling at all.

Two things had to follow from it, and both were only visible once it was
running:

- **A press forward has to know a mark is not typing.** Marked text ends where
  the segment ends, exactly as a dropdown preview's selection does, so the
  range is remembered when it is made and honoured only while it is still
  the selection showing. Everything else that writes to the field clears it.
- **"Did this press change anything?" has to be asked about the right text.**
  The guard against a press that rewrites what is already there (see the
  folder-note takeaway) fired on the press that *restores* a marked name,
  which changes no characters — so it was skipped, and walking one step back
  and one step forward landed on the name beside the one you started on.
  While resuming, what a write must differ from is the text before the mark.

## A paste and an IME arrive with no key pressed

Inline completion has to answer one question on every edit: did that edit *add*
text or take it away? Text appearing in answer to a deletion is a trap with no
way out — you press Backspace, the folder offers the name straight back, and
the field will not let go of it.

Reading that off `keydown` looks right and is wrong. `Input.insertText` — which
is how the CDP suites type, and how a paste and every IME commit arrive —
dispatches an `input` event with **no `keydown` before it**. A flag set on
Backspace's keydown therefore stays set through the next paste, and forever
through a suite that types without keys, which is exactly how this surfaced:
every inline completion silently stopped being offered after the first
Backspace.

`InputEvent.inputType` is the answer that is actually about the edit:
`"insertText"`, `"deleteContentBackward"`, `"insertFromPaste"`,
`"insertCompositionText"`. Ask the event what it did, not the keyboard what it
pressed.

## The field was one flat string, and three different things lived in it

The row keeps *where it stands* in `browsePath`/`externalPath` and *what a
preview is covering up* in `preview`, but everything else — the name being
typed, and the rest of the path carried in behind it — was a single
`input.value` with no structure. The segment being edited was re-derived from
the caret on every keystroke, and the tail behind it had no owner at all.

Three complaints turned out to be that one gap:

- A commit could not decide whether to keep the tail, so a path from the
  folder you had just left stayed in the field while the dropdown beside it
  listed the folder you had just entered. The field and the list are drawn
  from different sources and nothing made them agree.
- A rewind could not tell what to give back, and only `Tab` recorded a step at
  all — so a folder set in by clicking was invisible to the way back, and one
  press of `Shift+Tab` swallowed it *and* the press before it.
- A press that had nothing to complete fell through to describing the row's
  own file, because "the walk arrived" and "there is nothing here" were the
  same answer.

A fourth turned up in the same place, and it is the sharpest statement of the
rule: **a snapshot answers "what was", a target answers "what is", and a
feature that mixes them is wrong in exactly the cases nobody tests.** Four of
the ladder's five rungs rendered `tabTargetPath` — the live path — while the
fifth, the wrap, replayed a saved copy of the field from before the walk's
first press. Fork the walk halfway and a lap handed back the path you set out
from. It survived three rounds of testing because the two answers agree
whenever the walk does not change the path, and because typing clears the
trail, so a *typed* change is always newer than the snapshot. Only the gestures
that change the path without typing — picking a row, completing toward an
arrowed one — could tell the two apart.

The fix in each case was to give the missing thing a name — `reachableTail`
for how much of a path is real, `trailStep` for what a gesture is giving up,
`standingTargetPath` for what the field is naming, `pathFrom` for where a lap
comes back to — rather than to special-case the symptom. Worth remembering the
next time something in the field looks almost right: ask which of the states it
belongs to, and whether the code is asking about now or about then.

## Walking a walk backwards needs no inverses

`Shift+Tab` mirrors `Tab`: it narrows the selection, gives back completions,
and steps out of folders. Writing an inverse for each of those — un-complete,
un-descend, un-respell — would have been a small pile of nearly-right string
surgery.

Pushing a **snapshot of the field** before each forward press instead made the
whole thing one line of restore: `{ browsePath, externalPath, value, caret }`
in, the same back out. The trail is emptied by typing, exactly as the
selection ladder is, so it can never restore a row nobody is standing on any
more — and when it is empty the key falls through to stepping out of the
folder, which is the same move one step coarser. The forward code needed one
push added to it and nothing else.

## The browser had been doing the hard part all along

The row was fitted by walking a character cap downwards, measuring every name
against every step, and feeding the residual back for another pass. It worked,
and everything about how it felt was wrong: a letter is worth several pixels,
so every cut overshot and the trail jumped; four passes were not always enough
to reach the folders on a deep path, so names sat well above their floors; and
the whole thing had to re-run on every resize.

`text-overflow: ellipsis` does this natively, continuously, and in fractions of
a pixel. What it cannot do is choose *which* end to clip — it only ever clips
the end — and the end is the wrong thing to lose when every folder beside this
one begins the same way. So the split is: the code decides the shape and the
floor, the browser does the fitting.

Three findings made it work:

- **Middle elision is available.** Two spans, a clipping one and a pinned one,
  and the ellipsis lands between them: `annual…2026.md`. A name clipped at its
  *start* is `direction: rtl` with the text in a `<bdi>`, which moves the
  ellipsis to the other edge without reordering anything.
- **`white-space: nowrap` poisons `min-width: auto`.** A nowrap name's
  min-content width is the whole name, so any flex box containing one refuses
  to shrink a single pixel however small its names are willing to go. The trail
  had to stop being a box at all — `display: contents` on
  `.view-header-title-parent` dissolves it and makes every name a flex item of
  the row, which is the only level where the sharing out can see them all. The
  two boxes that must stay (the sticky vault wrapper, the stretching filename
  box) are floored from script instead.
- **The floor wants to be a custom property, not `min-width`.** It is measured,
  so it cannot live in a stylesheet; written as `--lure-floor` and read by one
  rule, it stays visible to themes, satisfies Obsidian's lint, and lets the
  hover state lift it in CSS rather than saving and restoring an inline value.
  It has to be declared `@property { inherits: false }` — inherited, a name's
  floor becomes the floor of each part inside it, and every part then holds out
  for the whole name's width.

Staging — the vault name first, then the folders, then the file's own name —
falls out of `flex-shrink` factors a hundred apart. It is not quite the old
rule: flexbox shares shrinkage in proportion to factor × width, so the longest
name pays most rather than paying alone. In exchange there is no stepping at
all.

One cost, and it is unavoidable: where a name is spent in the middle, the
clipping part's box is a little wider than the text the browser drew into it,
so a few pixels of slack can show between the `…` and the pinned ending.
`text-align: right` does not close it — the truncation happens after alignment.
Single-sided shapes have no such seam, because their slack falls at the outer
edge where the delimiter's own air already is.

## A shared ending is not a reason to keep a name whole

The rule for how short a name may get took the longest opening any neighbour
shared and the longest ending any neighbour shared, and demanded that
everything *between* them survive. In a vault whose root holds `Schemes` and
`parallel structures`, the two happen to end in the same two letters — so a
nineteen-character folder was pinned at seventeen, could save about two pixels
by cutting, and the fitter correctly decided that was not worth an ellipsis.
The row simply never shortened.

The mistake is treating the two ends as one requirement. They are alternatives:
to tell this name from that one you need to keep more than the shared *opening*
(if you are keeping the front) **or** more than the shared *ending* (if you are
keeping the back) — never both. And agreement shorter than the minimum a name
keeps anyway costs nothing to carry, so it should not steer the shape either.

Both fall out of asking the question per shape instead of per name:
`keepFront = head + 1`, `keepBack = tail + 1`, cheaper wins, and a run shorter
than the readable minimum is not counted at all.

## `grep` on this repo needs `-a`

Several hours across this project went into "I made the edit and the marker
isn't there", "the patch script wrote nothing", "this function is dead code".
None of it was true. Plain `grep` decides these TypeScript sources are binary
and prints **nothing at all** — no matches, no `Binary file matches` line, no
non-zero exit worth noticing — while `grep -a` on the same file and pattern
finds everything. The files are valid UTF-8 with no NUL bytes, so whatever
triggers the heuristic is not obvious from the content.

It is a silent wrong answer to a question asked constantly, which makes it the
most expensive thing in this file. Use `grep -a` here, always, and distrust any
conclusion of the form "it isn't there" that rests on a bare `grep`.

## A field is not a name

Letting the row's flexbox shrink the file name's box — which is what made the
file name the last thing to give way — quietly took the *edit field* with it,
since the field lives in that box. Clicking a folder deep in a narrow pane then
opened a sixty-pixel field already scrolled past the very folder the click was
about.

Nothing in a field can be given up: it is text being edited, not a name being
fitted. So while one is open its box keeps the width it was measured at and the
row scrolls instead. Two smaller things fell out of the same fix:

- `focus()` scrolls every box around the field to reveal the caret, and that
  runs *after* the code that opened it. Putting the field's front on screen has
  to happen again on the next frame or the browser's own scroll wins.
- `letRowScroll` parked the row at its right-hand end on every call, not only
  when the row first became too long. Anything that touched it — the pointer
  leaving the row, most of all — dragged the view back to the end and hid what
  had just been put on screen. Parking now happens only on the transition.

## Hiding a name and removing it are not the same thing

With *Show vault name* off the opening segment used to be built without a name
element at all — icon only, with the name as a tooltip. That is fine right up
until the row can give a shortened name back on hover, at which point the one
segment that most needs the gesture has nothing to give: there is no element to
widen.

The name is always in the row now, held at `max-width: 0` by a class when the
setting is off and widened by the same `.lure-name-open` rule that gives back a
name the row had to shorten. A setting that means "do not show this" is better
expressed as no width than as no element — the element is what the rest of the
row's behaviour is written against, and it keeps the name in the accessibility
tree, which the tooltip-only version had taken it out of.

## A tooltip that is only there when something is wrong is a tooltip nobody finds

The opening segment's tooltip used to appear only when the row had shortened
something, and to repeat the vault's name — which is the word already printed
next to it. Both halves were wrong. It now carries the vault's **absolute path**
and carries it always: that is the one fact about the row nothing on screen can
show, since the name says which vault and never where it is. It sits on the
segment rather than the name inside it, so it answers over the icon too — which
is the whole of the segment when the name is turned off.

## Gestures that read and gestures that change should not share a trigger

Restoring a name on `mouseover` is a reading gesture. Scrolling the row and
typing into it are not, and both move things under a pointer that is not
moving — so names arriving beneath a still cursor opened themselves, widened
the row, and shifted everything after them out from under the very gesture
trying to read them. Two guards, both on the reading side: nothing opens while
a field is up, and nothing opens for 400 ms after a wheel. The quiet window is
what makes a slow scroll one gesture rather than a series of pauses to read in.

## The gap was the container's, not the boxes'

"There is still some padding between the `…` and the `/`" survived two rounds of
looking, because every box involved reported `padding: 0px` and `margin: 0px`
and the measurement kept coming back the same 4 px. It was the flex container's
own `column-gap` — Obsidian sets one on the header — which no amount of
inspecting the *items* will ever show. Dumping every box's left and right edges
in order is what found it: consistent 4 px between one box's right and the
next's left, with nothing on either box to explain it.

It is now routed through the same variable the fitter spends, so the row's air
is one number that goes to nothing under pressure. Worth remembering as a
measuring habit: when boxes are further apart than their own properties can
account for, the space belongs to whatever is laying them out.

## `text-overflow` leaves a strip, and capping the part just moves it

The browser fills a box with whole glyphs and then the ellipsis, stopping at the
last one that fits — so a clipped box is nearly always a little wider than what
it drew, by up to the width of the character it could not fit. Eight pixels, in
the row's font. There is no way to ask CSS for "as wide as what you drew", so
the run is worked out here — a binary search over the prefix, or over the suffix
for a name clipped at its start, measured in the part's own font — and the box
capped at exactly that.

Three things it took to actually land:

- **The box has to be read as a fraction.** `clientWidth` rounds down, so a part
  floored at 30.45 px reports 30, and the very run its floor was measured from
  no longer fits the box the floor had made for it — the part sat at its floor
  drawing one character less than it had room for.
- **The cap has to go on the name's box as well as its parts.** Capping only the
  part leaves the pixels between the crumb's edge and the delimiter instead of
  between the `…` and the crumb's edge. Identical on screen.
- **It has to run twice.** Capping one part hands its width back to the row,
  which moves every other part a little, so a cap worked out against the first
  layout is a pixel or two stale by the time the row settles. Two passes, and a
  cap that can only ever narrow, so it cannot run away.

What is left after all that is the ellipsis glyph's own right side bearing,
which is part of the character and not of the layout.

## A press belongs to where it began

Sweeping a selection out of the path field and letting go over the editor closed
the field. The click-away listener was reading `evt.target`, and a click is
reported against the nearest common ancestor of the press and the release — so
a gesture that started *inside* the field arrived looking like a click on the
editor. Watching `mousedown` instead and remembering whether the press began on
the row is the whole fix. Any "click outside closes this" handler has the same
bug until it asks where the press started.

## Giving something up frees width for whatever gave up the most

The file's extension goes second on the row, straight after the vault name. The
first attempt dropped it as soon as anything past the opening segment was
clipped — and the row promptly put the vault name *back*, because flexbox hands
freed width to the items that shrank hardest and the vault name is by far the
hardest-shrinking thing there. So the two swapped rather than being spent in
turn: the extension went and the vault name reappeared.

Two things fixed it. The drop waits until the opening segment is actually spent
to nothing, not merely until something else is clipped; and while the extension
is gone the opening segment is *held* at nothing, so what the drop freed can
only go to the folders. Anything given up in stages needs both halves — a
condition for when the previous stage is finished, and a latch keeping it
finished.

## A field that fits its text changes where a gesture lands

Sizing the path field to its content is right, and it quietly broke the press
counting: the run of presses that widens the selection was wired to the field
alone, so once the field stopped running the whole row, a second press in the
space *past* the text landed on the box instead and only moved the caret. The
gesture had been depending on the field being as wide as the row without anyone
saying so.

The counting lives in one method now and both the field and the space beside it
call it. Worth watching for whenever an element stops covering ground it used
to: every listener on it silently loses the part of the surface it gave up.

## A decision must not be measured from a layout it changed

The file extension flickered in and out across a slow drag — shown at 464,
gone at 462, shown at 460 — and only settled once the row was squeezed far
enough that the question stopped being close.

The condition was "the opening segment is spent to nothing, and something past
it is clipped". Both halves were measured after the previous fit had run, and
the previous fit's own answer was one of the things being measured: giving up
the extension latches the opening segment at nothing, clearing the latch hands
it a pixel or two back, and a test for *exactly* nothing then flips on
alternate widths. The row was reading its own last answer as evidence.

The fix was to ask one question, always of the row in one state — extension
shown, nothing latched — and to drop the second half entirely: the opening
segment shrinks ten thousand times faster than a folder, so a folder that has
had to give up a letter is already standing on a vault name that has given up
everything. A staged decision needs a predicate that does not depend on which
stage the row is currently in.

## Counting characters that are worth reading

A name kept to six characters has six characters to say which file it is, and
spending one on a blank says nothing: `My N…` beats `My …` at the same width.
So spaces are not counted towards a minimum, and one is never left sitting
against the `…`, where it is invisible anyway. The spaces *between* the kept
characters ride along free — removing them would change how the name reads,
which is a different thing from not paying for them.

## A cap on an element that outlives the fit has to be cleared by the fit

Names shrank as the pane narrowed and never grew back. The per-box cap that
takes the empty strip off a clipped name is written to the name's own box —
and that box is Obsidian's element, not one this plugin builds. The parts
inside are made fresh on every fit and carry nothing over, so clearing them was
never needed and the box was forgotten. Left capped at the width it drew into
when the pane was narrower, a name could only ever get smaller.

The general shape: anything written to an element the fit does not create must
be cleared by the fit that runs next, and "the children are rebuilt" is not the
same as "the element is clean".

## A minimum that means something visual has to be measured, not counted

Four characters of `WWWW` and four of `illi` are not the same amount of name,
and a floor counted in characters made them two very different things to be
left with. The floor is a width now — measured against a run of one letter in
the row's own font, so it is the same visual amount for every name and still
follows the interface font size. `pathFit` answers only what the *siblings*
force, which is genuinely a count of characters; the fitter, which is the only
part that knows about fonts, turns that into a width.

## Sharing means the stage that is not paying still pays a little

Flexbox shares shrinkage across every item at once, weighted by factor × width.
At a hundred to one between stages, a folder had already lost a visible pixel
by the time the vault name had lost its whole hundred — so "the vault name goes
first" was true of the ratio and false of the pixels, and a test asserting the
order strictly failed. Raising the ratio to a thousand to one drops the folder's
share to a tenth of a pixel, below anything that can be drawn: the order reads
as strict without a second mechanism enforcing it.

## Test the resize a user can actually perform

The space-constraint suite set `width` on the header element, which is not a
gesture and not what a resize is: the header changed size while the pane around
it did not, nothing else in Obsidian's layout responded, and the row was
refitted by being told to rather than by noticing. It now moves a real divider —
`split.children[i].dimension` plus `recomputeChildrenDimensions()` — so the pane
genuinely changes width and the row's own observer is what answers. Targeting
the *row's* width still works: measure what the rest of the header takes and
correct for it in a second pass.

## A dropdown anchored to where the field opened, not to where the caret is

Clicking a folder opens the field on the whole path with that folder's name
picked out, and the list showing its parent's children. Move the caret by hand —
drag over a different segment, arrow along — and two things stayed behind: the
query, which was only ever recomputed on `input`, and the folder being listed,
which was fixed to where the row was standing. So the list went on offering the
first folder's siblings while the caret sat three segments deeper, and pointing
at one of them wrote the right name into the wrong place.

Both had the same shape of fix — ask the question of the caret rather than of
the session:

- The query is recomputed on `select`, `keyup` and `mouseup` as well as on
  `input`, and the list re-queried. Element events rather than `selectionchange`
  on the document, so they go when the field does. Skipped while a preview is
  standing, because then it is the list moving the caret rather than the user,
  and re-querying would rebuild the list under the row being pointed at.
- The folder listed is the one the text *before* the caret's segment names,
  falling back to where the row is standing whenever that text is not a real
  folder — which is most of the time while a path is being typed.

And the third piece: taking the pointer off the list restored the *highlight*
but not the field, so a stray sweep left the last hovered name standing where
the user's own selection had been. It restores both now — the text and the
selection it was made with — whenever the row it goes back to is not one the
user chose.

## A dropdown that follows the caret changes what Enter means

Clicking a folder opens the field on the whole path with the list showing that
folder's parent. Move the caret by hand and two things stay behind: the query,
recomputed only on `input`, and the folder being listed, fixed to where the row
is standing. The first is fixed — the query is recomputed on `select`, `keyup`
and `mouseup` too, guarded so it fires only when the caret has moved to a
*different segment*, and never while a preview or an offer is standing (both
move the caret themselves, and re-querying then rebuilds the list under the row
being pointed at or throws away the run being offered).

The second is **not landed**, and the reason is worth writing down. Listing the
caret's folder is a two-line change and it works. What it breaks is Enter: an
open popover answers Enter through Obsidian's keymap scope, which runs ahead of
any listener the field can add, and *with no row highlighted it answers by doing
nothing at all* — swallowing the press. That was unreachable only for as long as
the list was of the wrong folder: a fully typed path never matched anything in
it, so there were never any rows to swallow on behalf of. Give the list the
caret's folder and a typed path matches its own file, and Enter silently stops
committing.

Two ways out were tried and neither works: a capture-phase listener on the input
(the keymap gets there first, from the document) and registering a second
`Enter` in the popover's own scope (not reached). What is left is either
preselecting the row that exactly matches the typed segment — so Enter picks it,
which for a file is the same thing but for a folder is not — or a change in how
the field and the popover divide the key up. Neither is a small change, and
neither should be made at the end of a long session.

## Interleaving manual probes with a stateful suite hides the signal

Several conclusions in this batch had to be thrown away because a suite run and
a hand-driven probe had left the workspace in states neither expected: a test
"failing in isolation" that passed in the suite, and vice versa. Reset the
workspace to a known file with everything else detached before drawing a
conclusion from a single test, and prefer running the whole suite when comparing
two versions of a change.

## A gesture that opens something should not go on owning what it opened

Clicking the file's name opens a field and starts a run of presses that widens
what is selected — name, name with extension, path, the machine's path. The
counting was wired to the field rather than to the run, so it never stopped: a
double-click in that field an hour later still answered "the whole path",
taking away the one selection a text field cannot make any other way. The word
under the pointer is what a double-click means everywhere else, and there was
no way to get it.

The run is now a state of its own — set by the click on the row that opened the
field, and ended by anything that says the user has moved on: a fresh press, a
keystroke, or opening the field any way other than by clicking. Worth watching
for wherever a gesture opens a mode: the mode outlives the gesture, and the
gesture's own rules should not.

Testing it needed real presses rather than synthetic clicks, and one at a time:
a burst sent as press-1-then-press-2 restarts the run at its first press, which
is exactly the case the second half of the test is about. `clickCount` on a
single `Input.dispatchMouseEvent` is what says "this is the second press of a
run" without being the first as well.

## A test suite that shares a live app is testing the order as much as the code

Nine suites here drive one running Obsidian, and the numbers had never quite
settled: the Tab suite reported 179/190 inside a combined battery and 190/190
run on its own, with a different failure each time. That was read for a long
while as flakiness in the app — long automated sessions do genuinely degrade
Obsidian's own command handling, which is recorded a few sections up, and it
made a convenient explanation.

It was not flakiness. Each suite reloaded the plugin *once* and built its
fixtures *once*, before the first case; every case after that inherited
whatever the case before it had left behind — an input still open (whose
handlers correctly make the next gesture bail), a menu still in the DOM
(swallowing the next click), a modal still on the keymap stack (swallowing the
next key), and, worst of the four, a fixture tree that a mutating case had
moved or renamed. The cases had drifted into an order that worked. Reordering
them was enough to break the code's own regression tests, which is another way
of saying they were not testing the code.

The fix has two halves and only the second one is interesting. The first is a
`reset` the runner calls before every case, in `.dev/harness.mjs` — including
rebuilding the fixtures, because "the fixtures are built once" is precisely
what lets one case's rename become the next case's missing file.

The second is `--shuffle`. A reset makes the cases independent; a shuffle is
the only thing that *demonstrates* it, and it earned its keep on the first run
by naming a real order-dependence that the reset had not yet covered. The seed
is printed at the top and again at the end, because an order that fails is
worth nothing if it cannot be replayed. A suite that only ever runs in
declaration order is asserting something about that order, and nobody wrote
that assertion down.

Worth generalising: shared mutable state plus a fixed order is not a test
suite, it is a single very long test with a lot of assertions in it.

## The half of a drag nobody had built was the half that receives

"Drag and drop not working" sat open for a long time and could never be
reproduced. Every check said the drag *source* was right: the file name, the
folder segments and the dropdown rows all produced Obsidian's own payload,
with the correct type, path and title. A real pointer drag driven through CDP
started nothing at all — but neither did one on Obsidian's own File Explorer
row, so the probe was what was broken, and that is where the investigation
stopped each time.

The thing never checked was whether anything *accepted* a drop. Nothing did.
Both halves of the gesture look like "drag and drop" from the outside, and a
report that names the gesture rather than the direction reads as a bug in the
half you happen to have implemented.

The receiving half turned out to be Obsidian's own, and worth using rather
than imitating. `app.dragManager.handleDrop(el, handler)` registers `dragover`
and `drop` on one element and calls the handler for both, distinguished by an
`isOver` flag: true is a dry run asking what *would* happen, false is the drop
itself. Returning a descriptor — action text, drop effect, element and class
to highlight — accepts it and draws the app's own feedback; returning null
declines it silently. So an illegal target shows nothing at all, which is
better than the alternative of offering a drop and then failing.

Two things fell out of using the host's mechanism. The floating label resolves
from Obsidian's own i18n table — `interface.drag-and-drop.move-into-folder`,
which is `Move into “{{folder}}”`, curly quotes included — so it reads as the
File Explorer reads in all 45 locales without a string of this plugin's own.
And the highlight is `is-being-dragged-over`, Obsidian's own class, so a theme
that restyles the File Explorer restyles the breadcrumb with it.

The move goes through `fileManager.renameFile`, never `vault.rename`: the
former updates every link that pointed at the file, which is the whole
difference between moving a note and breaking it.

Two things the first version got wrong, both found by asking what the host
actually does rather than what it plausibly does. It captured the folder in the
handler's closure — but Obsidian *re-wires* these segments rather than
rebuilding them, so the same node stands for `inner` on one file and `branch`
on the next, and a captured path would have sent drops to a folder you had
navigated away from. The path lives on the element now and is read at the
moment of the drop. And `dragManager` builds three payload shapes, not one:
`file` and `folder` carry a single item, while a multiple selection carries
them under `files` — so supporting only the first two made a multi-select drag
a silent dead end at a target that takes the same gesture one file at a time.

A multiple selection moves whole or not at all. A partial move that quietly
skips the two it could not take is worse than a refusal you can see, and the
hover has to promise what the drop delivers or it is simply a lie.

Testing it taught the same lesson a third time. The tests began by writing a
payload onto `dragManager.draggable` directly, which is enough to drive the
handler and not enough to be true: the manager builds its floating action
label lazily, on the first real `onDragStart`, so `actionEl` stayed null and
the assertion about the label read as the feature failing to set one. Going
through `dragFile` / `dragFolder` / `dragFiles` and `onDragStart` — the calls a
drag source actually makes — fixed the test and made it exercise all three
payload shapes rather than the one shape the test author had in mind.

## "It stopped working after a long session" was the wrong variable

`workspace:edit-file-title` had been observed to start reporting success and
doing nothing, with the plugin disabled, after Obsidian had been driven by
automation for hours. The note written at the time said a restart restored it
and prescribed restarting before debugging a command that had begun no-opping.
That advice worked often enough to look right for months.

It was the wrong cause. On 22 Aug a restart did not restore it, which is what
finally separated the two candidate explanations. What actually governs it is
whether Obsidian's **window is focused**: the app tracks that itself and puts
`is-focused` on the body, and while it is absent the command runs, returns
true, and focuses nothing. A restart usually fixes it only because a new window
comes up frontmost. That day something else — a game — held the focus, and the
restarted window came up behind it.

Three measurements pinned it, all with the plugin off so none of them could be
about this code: the command reported `ran: true` and moved
`document.activeElement` nowhere; `document.body` lacked `is-focused` while
`document.hasFocus()` still answered true, which is why the obvious check had
never caught it; and a direct `.focus()` on the inline title — already
`contenteditable="true"` — did nothing, while an `<input>` in the same window
focused perfectly well. That last pair is why the Tab suite passes at 190/190
in exactly the conditions the rename suite cannot run in at all.

Under Wayland the window cannot be focused from a script to work around it:
`wmctrl -l` and `xdotool` see only XWayland clients, and Obsidian is a native
Wayland one. So the suite refuses to run and says which window to click, rather
than producing six assertions that all report `document.body` where they wanted
an editable element — a failure that reads exactly like a broken feature, and
has been mistaken for one more than once.

Worth generalising twice over. A remedy that works most of the time will
protect a wrong diagnosis indefinitely, because every success confirms it and
the failures look like noise. And a test that depends on an ambient condition
it never checks does not fail — it lies.

## Do not edit what a running suite is measuring

Twice in one afternoon a suite reported a failure that was nothing but the
files changing underneath it: once when `main.js` was rebuilt mid-run, and once
when a rule was added to `styles.css` while a geometry case was measuring the
row. The runner reloads the plugin before every case, which is exactly what
makes this possible — the first half of the run tests one build and the second
half another, and the report describes neither.

The rule this leaves behind is narrow and worth keeping: while a suite is
running, nothing it loads may be touched. Documentation, notes and scratch
files are fine. `main.js`, `styles.css` and the suite's own source are not.
A failure produced that way costs more than the wait, because it looks like a
regression and gets investigated as one.
