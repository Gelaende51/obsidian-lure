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
