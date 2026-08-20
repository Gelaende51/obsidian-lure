# Development

[← back to README](../README.md)

## Setup

```bash
npm install
npm run dev            # esbuild watch
npm run build          # tsc --noEmit + lint + check:lang + production bundle
npm run lint           # the community-plugin review's own rule set
npm run check:lang     # verify all 45 locales cover all string keys
```

To test in a real vault, symlink or copy `main.js`, `manifest.json` and `styles.css` into `<vault>/.obsidian/plugins/lure/`. Symlinks plus `npm run dev` give a live-reload loop (Obsidian still needs the plugin toggled off and on to pick up changes).

## Dependencies

None at runtime. `dependencies` is empty, and the bundle's only `require()` calls are for modules the host already has: `obsidian`, `electron`, and Node builtins. Everything else the plugin uses (Lucide icons, i18next, CSS classes and variables) is already inside Obsidian. `devDependencies` are build and review tooling only: esbuild, TypeScript, `tslib`, the `obsidian` typings, and the eslint stack.

Not even `@types/node`. The Node and Electron surfaces are declared in `src/types/`, which is explained under [passing the plugin review](#passing-the-plugin-review) — the short version is that it makes the review see the same types you do, and it puts every filesystem call this plugin can make in one readable file.

Keep it that way unless there's a strong reason not to: a plugin with no dependencies has nothing to audit, nothing to keep patched, and no supply chain.

## Architecture

The plugin owns one piece of Obsidian's UI — the `.view-header-title` element in each open tab — and everything else follows from keeping that ownership honest.

```
main.ts                 plugin lifecycle, wraps the rename command
  └── breadcrumbManager.ts     one PathBreadcrumb per leaf, kept in sync
        └── pathBreadcrumb.ts  the header row itself: render + all interaction
              ├── folderChildSuggest.ts   autocomplete for the input
              ├── tabComplete.ts          what a Tab press completes to
              ├── nativeFileItem.ts       drag + context menu on entries
              ├── createFileModal.ts      "create it?" confirmation
              └── (outside the vault)
                    ├── systemLocations.ts   vaults, home, root, drives
                    ├── externalFs.ts        listing and path maths
                    ├── externalFileOps.ts   the four write operations
                    └── externalFileView.ts  read-only viewer for the result
```

**Ownership and repair.** `BreadcrumbManager` keeps a `Map<WorkspaceLeaf, PathBreadcrumb>`. Obsidian rebuilds header DOM whenever it feels like it, so a tracked instance can end up pointing at a detached element. The marker class `lure-patched` on the title element is the test: if the instance exists but the class is gone, Obsidian rebuilt the header, and the instance is dropped and recreated rather than repaired. Everything else is event plumbing — `file-open` and `active-leaf-change` patch one leaf, `layout-change` sweeps all of them and prunes closed ones, `vault.on("rename")` re-renders.

**The teardown contract.** Every `PathBreadcrumb` must be able to put the header back exactly as it found it: `destroy()` restores the native title and breadcrumb, removes the marker classes and the `data-lure-*` attributes, unhooks the document-level listeners, and clears pending timers. `unpatchAll()` calls it for every leaf from `onunload`. If you add state to the header, add its removal there in the same commit — a plugin that leaves debris behind after being disabled is the one bug users cannot work around.

**Three modes, two overlays.** `PathBreadcrumb.mode` is `breadcrumb` (the default row), `browsing` (a dropdown is open) or `typing` (an input is live). Two further states cut across all three: *rename/move mode*, toggled by the pencil-folder button, which changes what every click means; and *external*, where the path points outside the vault and `browsePath`/`externalPath` take over from `file`. Most of the file's complexity is these combinations, which is why the state lives in named fields rather than in the DOM.

**How a click becomes an action.** A folder segment and the delimiter after it are two separate targets with two different jobs — open the dropdown, or reveal the folder in the File Explorer — and the `swapSegmentActions` setting decides which is which. Rename/move mode overrides both. Revealing goes through the File Explorer's own `revealInFolder`, then `expandInExplorer` retries on a timer backoff, because the tree is populated lazily and the folder may not exist as an item yet.

**How typing becomes a file.** `enterTypingMode` swaps the row for an input and attaches a `FolderChildSuggest`. Every keystroke runs `validateTarget` (the same rules Obsidian's own rename uses), and <kbd>Enter</kbd> reaches `handleTypedSubmit`, which either navigates to an existing file, offers `ConfirmCreateFileModal`, or — in rename/move mode — calls `moveFileTo` / `copyFileTo`. The currently open file is never renamed by the navigation path; that separation is deliberate and worth preserving.

## The modules

### Core loop

| File | What it does | How you interact with it |
| --- | --- | --- |
| `src/main.ts` | Plugin entry. Loads settings, registers the settings tab and the external view type, starts the manager, and wraps Obsidian's `workspace:edit-file-title` command so one key alternates between the inline title and the path bar. | Add plugin-wide wiring here. `saveSettings()` is the hook that repaints every open row. The command wrapper stores the original callback and restores it on unload — keep that symmetry. |
| `src/breadcrumbManager.ts` | Owns the per-leaf instances and the workspace event subscriptions; sweeps, prunes and repatches. | `patchLeaf(leaf)`, `refreshAll()`, `getActiveBreadcrumb()`, `unpatchAll()`. New workspace events go in `registerEvents()`, always via `plugin.registerEvent`. |
| `src/pathBreadcrumb.ts` | The header row: renders the breadcrumb, and implements browsing, typing, rename/move and the external path. The largest file by far, and the one holding the interaction state. | Public surface is only `refresh()`, `startHeaderRename()` and `destroy()` — everything else is private on purpose. Adding a mode means adding to the `mode` union and to `destroy()`. |

### The path bar's helpers

| File | What it does | How you interact with it |
| --- | --- | --- |
| `src/folderChildSuggest.ts` | Autocomplete over a folder's children, and over external folders. Extends Obsidian's `AbstractInputSuggest`. | One listing, two filters: `buildSuggestions(context, matches)` reads the folder, `getSuggestions` filters it by substring for the dropdown, `completions(prefix)` filters it by prefix and uncapped for <kbd>Tab</kbd>. Driven entirely by the `SuggestContext` the path bar hands it: which folder, whether rename mode is on, which name to pin (`keepName`) and which path is the file itself (`keepPath`, so a file never counts as a conflict with itself). Extend the context rather than reaching back into the breadcrumb. |
| `src/nativeFileItem.ts` | Makes an arbitrary element behave like a File Explorer row: Obsidian's own drag payload, and the same right-click menu including other plugins' contributions. | `wireNativeFileItem(app, el, target, keepFocusEl)`. Sits on undocumented API (`app.dragManager`), so every entry point is guarded — a failure must degrade to an ordinary element, never throw inside an event handler. |
| `src/createFileModal.ts` | The "create it?" confirmation for a typed path that doesn't exist. | `ConfirmCreateFileModal.ask(app, path)` resolves `true`/`false`; every form of cancel resolves `false`. |
| `src/navLock.ts` | Couples several path bars so they walk parallel folder structures in step. Owns the lock, the legality rule and the shared-sibling choice. | `NavLockParticipant` is the whole contract — questions and instructions, so the lock never reaches into a bar's state. A move is offered only where every coupled bar can make it, and refused outright otherwise: half a ghost move is the drift the lock exists to prevent. |
| `src/segmentGestures.ts` | Counts consecutive right-clicks so one target can carry three meanings, and classifies what a click landed on. | `RightClickCounter` fires once the run settles; `classifyTarget(el)` returns which column of the gesture table applies. The window runs from the *last* press, so a slow triple stays a triple. Because a second press may follow, the first cannot act immediately — every plain right-click on the row waits `MULTI_CLICK_WINDOW_MS`. |
| `src/obsidianLabels.ts` | Obsidian's own wording for entries this plugin mirrors, and the lookup that resolves it. | `obsidianLabel(keys, fallback, params?)`. Keys are arrays because Obsidian renamed its i18n table from camelCase to kebab-case — see [Borrowing Obsidian's strings](#borrowing-obsidians-strings). Add a key here rather than adding a string to `lang/`. |
| `src/prompts.ts` | A name prompt and a confirmation, for paths that have no `TFile` for Obsidian's own dialogs to take. | `promptForName(app, {...})` resolves the name or `null`; `confirmAction(app, {...})` resolves a boolean. Every form of dismissal is a cancel. |
| `src/fileKinds.ts` | Classifies an extension: binary, Markdown, or "Obsidian has no editor for this". | `isBinaryExtension`, `isMarkdownExtension`, `warnsOnOpen` — the last one decides the orange warning tier. |
| `src/tabComplete.ts` | Decides what a <kbd>Tab</kbd> press puts in the field: how far the typed name can be extended, and whether there is still a choice to make. | `planTab(typed, candidates, target, replacing)` returns one of three things — `write` a completion, `descend` into a folder, or hand the key over to the selection `ladder`. It extends to the candidates' longest common prefix; where that is already reached it walks toward `target` (the row the popover has highlighted, else the first), stopping at that name's next ambiguity, and skipping a candidate with nothing left to add — which is why `Schemes` beside `Schemes2026` completes on rather than being stepped into. Descending happens when one candidate is left, or when a folder's whole name is typed and no other *folder* extends it — files never block a folder, which is what makes a folder note steppable-past rather than a dead end. `replacing` is the field text a write would replace, which is not `typed` when the caller matched on a name without its extension; progress is measured against it, so a press can never rewrite what is already there (that loop is how the folder-note bug showed up). Pure string maths, like `pathFit.ts`: no DOM, no vault. The DOM half is `PathBreadcrumb.handleTabCompletion`, which collects the candidates from `FolderChildSuggest.completions` (a **prefix** match, where the dropdown itself lists by substring) and writes the result back over the caret's segment. **The caret is what picks the segment**, so descending lands the rest of the path on its *next* name, marked (`asLanding`) — or, when that name is the last one, hands straight to the ladder's first rung, since arriving at a file name and marking it are the same event. `startLadder` also skips a first rung that would change nothing, which is what a click on a note's name has already put on screen — with the caret left at the far end instead, the press after a folder click read the file name at the end of the path, found nothing to complete, and let the ladder jump over every folder in between. <kbd>Shift</kbd>+<kbd>Tab</kbd> is `handleTabBack`, which needs no inverse of any of this: each forward press pushes a snapshot of the field onto `tabTrail`, and walking back is restoring one. It deletes nothing — a completion is given back by *marking* the run it added (`tabGivenBack`), and a forward press whose selection still matches that mark resumes the walk from the head of it, so back-then-forward is a round trip. The ladder wraps to the front of the walk — `tabTrail[0]`, the field before the first press of all, falling back to `tabLadderStart` when no folder was walked — rather than to an empty field at the top of the path, so a lap of Tab from a folder click is a closed loop that costs nothing; and `stepOutOfFolder` puts the folder's name back *in front of* whatever the field held, so a chip becoming text again does not take the path to its right with it. That mark is also why `replacing` is the head rather than the segment while resuming: measuring progress against text the walk has already given back would make the press that restores it look like a press that did nothing. |
| `src/pathFit.ts` | Decides what a row shows when the path is wider than the pane: which names to shorten, and by how much. | `shortestUnique(name, siblings)` is the floor a name may not go below — one character past the longest prefix it shares with a neighbour — and `planFit` spends the overflow in stages (`root`, then `folder`, then `name`), capping each stage's names at a length that comes down until the row fits, so the longest name in a stage pays first and short ones are left whole. A folder keeps `MIN_FOLDER_CHARS`, the file name `MIN_NAME_CHARS`, whatever their siblings allow; only the root may go to nothing, because its icon stays. Pure string maths: widths arrive through a `measure` callback, so the same code serves Obsidian's own segments and this plugin's chips. The DOM half is `PathBreadcrumb.fitRow`, which re-measures after applying a plan because a canvas measurement and real layout do not agree. |

### Outside the vault

Off by default behind `accessExternalFiles`; the vault-root segment is the only entrance.

| File | What it does | How you interact with it |
| --- | --- | --- |
| `src/systemLocations.ts` | The locations dropdown: other vaults (read from Obsidian's own `obsidian.json`), home, filesystem root, mounted drives, each with a device-type icon. | `listSystemLocations()`, `listVaults()`, plus `samePath`/`isInside`, which are the containment checks the write guards rely on. |
| `src/externalFs.ts` | Directory listing and path maths outside the vault, synchronous because the dropdown needs it during a click. | `listExternalChildren`, `externalParent`, `externalSegments`, `externalJoin`. Use these instead of `path` directly so separators stay consistent. |
| `src/externalFileOps.ts` | The four write operations, and the only place the plugin writes outside the vault. | `externalExists`, `createExternalFile`, `createExternalFolder`, `copyExternalFile`, `copyExternalEntry`, `moveExternalFile`, `renameExternalEntry`, `trashExternalEntry`. Creation uses the filesystem's own exclusive-create, not a check-then-write — a check could lose a race and overwrite. Anything new that writes externally belongs here, behind the same unlock. Deleting is `shell.trashItem`, never `unlink`: out here there is no vault index to notice a loss and no Obsidian trash to recover from, so a platform with no trash must fail rather than fall back to destroying the file. |
| `src/externalMenu.ts` | The context menu for a file or folder with no `TFile` — everything outside the vault. | `showExternalMenu(plugin, evt, path, isFolder, leaf, canWrite, onChanged)`. `canWrite` is read at *click* time, not when the menu was built: a menu can outlive the padlock state that opened it. Every write goes through it. |
| `src/externalFileView.ts` | A read-only `ItemView` for a file Obsidian can't open as a note: Markdown, images, audio, video, PDF, and plain text for the rest. Handles the edit unlock, the size cap and the banner. | `openExternalFile(...)` is the entry point; `EXTERNAL_VIEW_TYPE` is registered in `main.ts` unconditionally so a leaf restored from a saved workspace finds its view. Writes go through `writableTarget()` — the single decision about whether an edit is allowed at all. |

### Settings, strings and types

| File | What it does | How you interact with it |
| --- | --- | --- |
| `src/settings.ts` | The settings interface and defaults. | Add a key with its default, and `loadSettings` will drop stale keys from `data.json` automatically. |
| `src/settingsTab.ts` | The settings UI. | One `new Setting(containerEl)` per option, no headings (single section). `withPluginLinks()` turns a plugin name inside a description into a link to its page. |
| `src/lang/` | `strings.ts` (English source of truth), `translations.ts` (45 locales), `index.ts` (`t()`). | See [Localization](#localization). |
| `src/types/obsidian-internal.d.ts` | Typings for the undocumented Obsidian internals used: `internalPlugins` and the File Explorer view, `dragManager`, `commands`, `viewRegistry`, and the extra `FileManager`/`Menu` members. | Anything undocumented gets a typing here *and* a guard at the call site. The typing is a description of observed behaviour, not a promise Obsidian made. |
| `scripts/check-translations.mjs` | Fails the build on missing, unknown or malformed locale keys, including `{placeholder}` mismatches. | `npm run check:lang`. |

## Localization

English in `src/lang/strings.ts` is the source of truth. The active language comes from Obsidian's own setting; a regional variant falls back to its base language (`pt-BR` → `pt`) before falling back to English, so nothing is ever blank.

All 45 locales are machine-translated (see the README's AI disclosure) and have **not** been reviewed by native speakers. Corrections are the most welcome kind of PR — a one-line change to `src/lang/translations.ts` is genuinely valuable.

### Borrowing Obsidian's strings

Menu entries and dialogue that mirror something Obsidian already does take
**Obsidian's own wording**, through `obsidianLabel()`, rather than a string in
`lang/`. Two reasons: a plugin entry worded differently from the identical
native one is a difference the user has to test to discover, and with 45
locales every string of our own costs 45 translations. The whole
create/rename/delete-to-trash menu was built without adding a single string —
including the sentence explaining where a deleted file goes.

**Check the host's table before writing a string.** `window.i18next.store.data`
holds every key for the active locale; searching it by *value* is the fastest
way to find the key you want.

Keys are arrays, newest spelling first, because Obsidian renamed its whole
i18n table from camelCase to kebab-case (`plugins.fileExplorer.menuOptNewNote`
→ `plugins.file-explorer.menu-opt-new-note`). Every key here was originally
the camelCase form, and on 1.13 that resolves to nothing — so these menus
silently served hardcoded English in all 44 non-English locales while the
documentation promised otherwise. i18next returns the key itself when it
cannot resolve one, which is the failure signal, and a fallback that quietly
works is exactly what hides it.

**Verify a label by switching the host's language**, not by reading the table:
set `localStorage.language`, restart, and look at the rendered menu. In English
a broken lookup and a working one are indistinguishable.

## Ground rules

- Add a new key to `src/lang/strings.ts` first, then to every locale — `check:lang` will tell you which are missing.
- No user-facing string may be hardcoded; everything goes through `t()`.
- Prefer Obsidian's documented API. The few undocumented internals are typed in `src/types/obsidian-internal.d.ts` and guarded at the call site.
- Whatever a component adds to the DOM, it removes in `destroy()`.
- `README.md` and `docs/usage.md` are the sources; `docs/i18n/<doc>.<lang>.md` are translations of them: edit the English first, then re-translate the sections that changed. Each locale file records the English commit it was made from, so `git log <recorded>..HEAD -- <source>` shows exactly what a translation is missing. Plugin names, code, commands and paths stay untranslated, and UI labels quoted in prose must match `src/lang/translations.ts` for that locale — a page that names a button the app doesn't is worse than an English one. Obsidian's *own* setting names cannot be checked from this repo (its translations load at runtime, and only English ships in the archive), so those keep the English in parentheses rather than an invented translation.
- **Never translate a plugin's name.** A name is a proper noun: *Folder notes* stays *Folder notes* in all 45 locales, with only the grammar around it localised. Match the spelling and casing in Obsidian's `community-plugins.json`.
- The project follows Obsidian's [Developer policies](https://docs.obsidian.md/Developer+policies) and [plugin submission requirements](https://docs.obsidian.md/Plugins/Releasing/Submission+requirements+for+plugins).
- Every Obsidian API call costs a `minAppVersion`. Check its `@since` before reaching for it, and see [Passing the plugin review](#passing-the-plugin-review) for what the current floor is holding up.

## Passing the plugin review

Submitting to the community list runs an automated review, and the same rules run here:

```bash
npm run lint     # eslint-plugin-obsidianmd, the review's own rule set
```

`npm run build` depends on it, so a release cannot be cut with a finding the review would raise. That order matters more than it sounds. The first submission came back with roughly 170 lines of findings, and about 150 of them did not exist: the review's environment could not resolve `@types/node`, so every value out of `readdirSync` or `join` degraded to `any` and each use of it tripped a separate type-aware rule. Reproducing the review locally is what separated the twenty real errors from the noise, and it is not obvious from the report which is which.

Four decisions came out of that review and are worth recording, because each one is a trade the next person might otherwise re-open by accident.

**`minAppVersion` is 1.8.7, and raising it is not free.** The `no-unsupported-api` rule reads the `@since` tags in the bundled `obsidian.d.ts` and compares them with the manifest, so the floor is the *maximum* across every API the plugin touches. Two calls set it on their own — `Vault.copy` and `displayTooltip` — while everything else needed only 1.4.10. Neither was a considered choice at the time, which is the point: reaching for a convenience method silently costs every user on an older Obsidian. Before adopting a new call, check what it costs:

```bash
grep -B12 'displayTooltip' node_modules/obsidian/obsidian.d.ts | grep @since
```

The alternative was rewriting all three of the newest calls to keep the floor at 1.4.10. `Vault.copy` has an exact equivalent and `revealLeaf` a near one, but `displayTooltip` does not: it shows an error bubble anchored to the path bar, immediately and without hover, and the substitutes are either a hover-only tooltip nobody would see or a corner `Notice` detached from the thing it is about. Losing the message where the mistake happened was the worse outcome.

**Electron is imported, not required.** The bundle still emits `require("electron")` — esbuild marks it external, and the manifest is `isDesktopOnly` — but at source level it is a typed import against a fifteen-line ambient declaration in `src/types/electron.d.ts`. Declaring the one method used beats installing `@types/electron` and keeping it in step with whichever Electron Obsidian ships. This is also a case where the lint earned its keep directly: with the call untyped, nobody had noticed that `shell.openPath` reports failure by **resolving with an error string** rather than rejecting, so the `try`/`catch` around it could not have caught a missing file.

**The settings tab keeps `display()`.** The declarative `getSettingDefinitions()` API would make the settings appear in Obsidian's settings search, but it needs 1.13.0 — five minor versions above what the code actually requires. Adopting it means either raising the floor that far for one search integration, or carrying both code paths and keeping two descriptions of the same seven settings in step. It stays imperative until `minAppVersion` reaches 1.13.0 for reasons of its own; the two warnings are the accepted cost.

**`:has` and `!important` stay in `styles.css`.** Both are flagged as advisory, and both are load-bearing. The `:has` selectors react to state deep inside header DOM the plugin does not own; replacing them means a mutation observer and a class the plugin has to keep in sync by hand, which is a correctness risk taken on to avoid a performance one nobody has measured here. The `!important` rules override community themes — most importantly `display: none !important` on the native title, which is what guarantees Obsidian's own contenteditable rename can never fire. A theme can always out-specify a fixed selector, so trading that for specificity would trade a warning for the loss of a safety property.

**The Node and Electron surfaces are declared, not installed.** `src/types/node.d.ts` and `src/types/electron.d.ts` between them cover everything outside `obsidian` that this plugin imports: eighteen functions from `fs`, `fs/promises`, `path` and `os`, plus one Electron call. `@types/node` is not a dependency at all.

The immediate reason is the review environment: with Node's types unresolvable there, everything from `readdirSync` or `join` became `any`, and the scorecard carried 141 findings that did not exist on any developer's machine. Declaring the surface in the repository is what makes the review see what a contributor sees.

The better reason is that this is the plugin reviewers are right to be sceptical of — it reads and writes outside the vault. One short file listing every call it is *able* to make is cheaper to audit than any promise in a README, and the build fails if the surface grows without someone adding to it.

The declarations are deliberately narrower than the real ones: `readFileSync` exists only in its `"utf8"` form, so an un-encoded call is a compile error rather than a silent `Buffer`, and `readdirSync` only in its `withFileTypes` form. Being narrower than upstream is the point, and it is not theoretical — writing them immediately surfaced a `statSync(...).isFile()` call that a grep of the source had missed. If you need a Node function that is not in there, add it with the narrowest signature that compiles.

Two things to check when touching this. `npm run build` must pass with `@types/node` absent from `node_modules` — that is the review's environment, so it is the one that matters. And the bundle should not change: these are types, they erase, and `main.js` was byte-identical across the swap.

**Releases carry build provenance.** `.github/workflows/release.yml` builds the assets on GitHub's runners, checks the tag against `manifest.json`, and attaches a signed attestation to each one, so a downloaded bundle can be traced to a commit:

```bash
gh attestation verify main.js --repo Gelaende51/obsidian-lure
```

## Testing

There are no unit tests. The features here are conversations between the path bar, Obsidian's suggest popover, an `ItemView` and the filesystem, and every bug found so far has lived in the gaps between those — so the suites drive a *live* Obsidian over the DevTools protocol and assert what the user would see: what the DOM says, and what is on disk afterwards.

```bash
node .dev/test-external.mjs          # outside-the-vault behaviour
node .dev/test-external.mjs edit     # only tests whose name matches
node .dev/test-rename.mjs            # the rename key's alternation
node .dev/test-urls.mjs              # URLs and encoded paths typed into the bar
node .dev/test-tab.mjs               # Tab completion and the selection ladder
node .dev/test-navlock.mjs           # panes coupled by the navigation lock
node .dev/test-fit.mjs               # the fitting maths alone — no Obsidian, no vault, no port
node .dev/test-complete.mjs          # what a Tab press completes to, likewise
node .dev/test-gestures.mjs          # right-click runs, Escape, the keyboard entry points, long paths
node .dev/test-compat.mjs            # against installed peer plugins
node .dev/test-compat.mjs Quick      # one peer
```

**Anything about a hotkey must use a real key press.** `.dev/cdp.mjs key F2`,
and `pressKey(page, spec)` in the suites, dispatch through the browser;
an event built with `new KeyboardEvent()` is `isTrusted: false`, and Obsidian
decides what reaches a command from a capture-phase window listener with a
scope stack on top of it. The difference is not academic — on the rename
dialog, `executeCommandById` reports the plugin stealing focus from behind a
modal, while a real key shows the command never running at all. Two different
bugs depending on how you press it.

**A key that produces text must be sent with that text.** `Input.dispatchKeyEvent`
delivers Enter and Tab to the focused *element* only when `text` is `\r` / `\t`;
without it the event reaches the window and stops there, so a field's own keydown
handler never runs and the feature looks broken. Genuinely textless keys — Escape,
arrows, function keys — are dispatched raw and are fine. `describeKey` carries the
text per key; add new ones there rather than at the call site.

**Focus in one process, press in the next, and the key misses.** The editor takes
focus back in the gap between two `cdp.mjs` invocations, so anything that focuses a
field and then presses a key has to happen on one connection — which is what the
suites are for. Re-focus immediately before the press even then.

**Attach probes in a separate `evaluate` from the click that creates the element.**
A listener added in the same round trip can land on an element a later render
replaces, and then sees nothing.

**When a command starts doing nothing, restart Obsidian before debugging it.** After a
long automated session `workspace:edit-file-title` began no-opping with the plugin
*disabled* — the app's own state, not the plugin's. `.dev/restart-obsidian.sh` restored
it and the suite went from 7/15 back to 15/15.

The same state has a second, more confusing face: `Runtime.evaluate` keeps working
perfectly while `Input.dispatchKeyEvent` stops reaching the page altogether, and later
`editor.focus()` stops moving `document.activeElement` at all. Every keyboard assertion
then fails at once and the code looks broken. The tell is that *unrelated* suites fail
together, and that a bare probe — arm a window `keydown` listener, press one key, read
the array — comes back empty. Restart; do not debug the plugin.

**A menu must be dismissed, not deleted.** `Menu` pushes its own keymap scope while it is
open, and pulling its element out of the DOM leaves that scope on the stack — after which
every real key press in the rest of the run goes to a menu nobody can see. Dispatch a
`mousedown` on `document.body` first, then remove whatever is left.

**`iterateAllLeaves` is not a census.** It omitted an attached, visible Web viewer tab
(and every deferred sidebar leaf) in one call and listed all ten a moment later. For "is
there a leaf of this type", ask `getLeavesOfType`; `iterateAllLeaves` is for sweeping
what it happens to yield.

**A suite must build the notes it acts on.** Two of these suites assumed notes that
existed only in the vault they were written against, so against any other vault every
case failed on a null element and reported the plugin broken. Worse, one test that had
only ever been *refused* a destructive action — moving a note out of the vault — started
being allowed it, and promptly moved a real note out of the vault it was running in
because it had picked `getMarkdownFiles()[0]` as its subject. Create fixtures, name them
after the suite, and delete them at the end.

**Check the build's exit code, not its output.** `npm run build` runs tsc *and* eslint;
grepping for `error TS` silently misses a lint error, and then every later test runs
against a stale `main.js` that never rebuilt. That is how a feature can appear entirely
absent from a passing-looking session.

**Scope DOM queries to the leaf you mean.** A `document.querySelector` for
`.lure-filename-text` finds the first bar in the workspace, not the active
one, and a stray split from an earlier test then makes assertions read one
leaf while acting on another. Start from
`app.workspace.getMostRecentLeaf().view.containerEl`. For the same reason a
test must not leave a window open: pressing F1 to prove an unrelated key is
ignored opened Obsidian Help, and every later run failed with "2 Obsidian
windows are open".

Both need Obsidian running with `--remote-debugging-port=9222` (add it to `~/.config/obsidian/user-flags.conf`) and the demo vault open. That vault now lives under `../obsidian-plugin-template/.personal/` — outside this repository and outside git, so nothing about it reaches a commit. Its name is unchanged and is what the `SCENES` table and `OBSIDIAN_VAULT` match on. It needs this plugin symlinked into its `.obsidian/plugins/lure/`, and, for the compatibility suite, the peer plugins installed; the suite skips any that aren't. **Always set `OBSIDIAN_VAULT=<name>`, not only when several vaults are open.** Obsidian reopens whatever `~/.config/obsidian/obsidian.json` has marked open, which is not necessarily the vault you were last working in — so a restart can hand the tools a different one, and with a single window they attach to it without complaint. That is how a session ended up driving a 739-note personal vault believing it was the 15-note demo one. Pinned, the tools refuse rather than guess. **Comment the port back out when you're done** — a shipped build must never be developed against an open debugging port.

One vault serving both roles means each use has to leave it fit for the other. The suites create a fixture folder inside the vault — `LureFocus/` for the external suite, `LureCompat/` for the compatibility one — and toggle peer plugins on and off. Both fixtures are dropped at the end of every run whether it passed or failed, and peer states are restored. The capture script refuses to shoot if either fixture or any peer is still in evidence: they are invisible in a passing test run and perfectly visible in a photograph, which is not a difference documentation can be trusted to bridge. `LureCompat/` is the proof — it went uncleaned and unguarded for as long as the guard named only the other one.

| Tool | What it's for |
| --- | --- |
| `.dev/cdp.mjs` | One-shot probes into the running app: `eval`, `html`, `style`, `shot`. `eval` runs in the renderer's main world, so Obsidian's own `app` object is in scope. |
| `.dev/cdpSession.mjs` | One long-lived connection for the suites. Picks the window by vault name (`OBSIDIAN_VAULT`), since target order isn't stable with several vaults open — and which vault is open at all is not stable across a restart. |
| `.dev/restart-obsidian.sh` | Restarts Obsidian and waits for the port to answer — a bad render can kill the renderer outright. |
| `.dev/takeaways.md` | Everything learned the hard way about Obsidian's internals. Read it before debugging something that "should" work. |

Two things about this environment that will otherwise cost you an afternoon. A CDP-driven window **paints no frames**: `requestAnimationFrame` never fires and CSS transitions never advance, so anything in the plugin that retries on an animation frame does nothing here — which is how the reveal-expand bug was found. And the suites read the real locale tables rather than hardcoding English, because the plugin speaks whatever language Obsidian is set to and a hardcoded suite turns every locale switch into a wall of fake product bugs.

When a test passes, make it fail on purpose once. A guard that has never been seen to fail is a guess: two regression tests in this repo passed against deliberately broken code before that check was applied to them.

## Screenshots

`docs/images/*.png` are captured from a running Obsidian, not edited by hand:

```bash
node .dev/screenshots.mjs           # the published scene
node .dev/screenshots.mjs <name>    # any other scene in the table
```

A **scene** is a demo vault plus the notes the shots are framed around, declared in the script's `SCENES` table. The vault must exist and be open before the run; the script enables the plugin, switches the language to English, and checks the vault is free of test residue (see [Testing](#testing)) before it captures anything.

The path bar is stateful, so the script reloads the renderer and then *asserts* it is in breadcrumb mode: a dropdown left open by an earlier run renders the editable string instead of the spaced breadcrumb, which is a wrong screenshot nothing downstream would catch. For the same reason it asserts the dropdown contains all three kinds of entry, and samples pixels to prove the reveal highlight actually rendered — some visual state is invisible to the DOM entirely.

A screenshot is documentation and goes stale like prose. Re-run the capture whenever the header's appearance changes.

## Before a release

The AI disclosure in the README states real token totals, so they have to be recomputed rather than remembered:

```bash
node .dev/usage-stats.mjs          # rewrite the line from the transcripts
node .dev/usage-stats.mjs --check  # exit 1 if it is out of date
npm run build
```

It reads this machine's Claude Code transcripts under `~/.claude/projects/`, which are deliberately outside the repo — nobody without that history can honestly restate the numbers, and a fork should replace the disclosure with its own rather than inherit these.

`usage-stats.mjs` rewrites the English line only. The translated READMEs carry the same figures (`- **Verbrauch** —`, `- **Consommation** —`), so update those by hand in the same pass — they are the one part of a translation that goes stale on a schedule rather than when the prose changes.

Two things this cannot be. It cannot be exact: writing the line is itself part of a session, so the committed figure always trails by the turns that committed it, which is why every number carries a `~`. And it does not belong in `npm run build`, where it would fail for every contributor who has no transcripts. Run it as the last step before tagging and take the snapshot.

## Cutting a release

BRAT and Obsidian's own installer both read `manifest.json` on the default branch, then look for a release whose tag is **exactly** that version — no `v` prefix, no suffix. The three files must be attached as individual assets; the auto-generated source zip is not enough, because neither installer unpacks it.

Pushing the tag is the whole release: `.github/workflows/release.yml` builds, verifies that the tag and `manifest.json` agree, attaches the signed provenance attestation, and publishes.

```bash
node .dev/usage-stats.mjs                      # refresh the disclosure first
npm run build                                  # must pass before the tag exists
git push
git tag -a 1.0.2 -m "Lure 1.0.2" && git push origin 1.0.2
```

Bump `manifest.json` and add the matching `versions.json` entry (`"<plugin version>": "<minimum Obsidian version>"`) before tagging — Obsidian uses that map to decide which release an older app may install. Keep every past entry: the map is how an app too old for the current release finds the newest one it can still run, so deleting a line strands those users rather than tidying anything.

The workflow rebuilds from the tag rather than uploading the local `main.js`, which is what lets the review verify the bundle byte-for-byte against the source. It follows that the tag must point at a commit whose `npm run build` succeeds — cutting one from a tree that only builds locally fails in the open.

The last step is in the plugin's admin area at `community.obsidian.md/account/plugins/lure`: the **⋯ → Check for new releases** menu item, which answers *"your manifest points at version X, a scan has been queued"* and runs the official review that the public scorecard reflects.

Do not assume it happens by itself. It sometimes does — 1.0.3 was rescored without anyone signing in — but 1.0.4 sat for over an hour with the site counting the release and still reporting 1.0.3 as current, until the menu item was used. Treat the automatic pickup as an optimisation, not the mechanism.

Two neighbouring controls are worth telling apart. **Review branch** runs a *preview* scan against any branch, tag or commit without requiring a release; it is the way to see what a change will score before tagging, and it does not touch the public listing. **Check for new releases** is the one that promotes a published release and updates the scorecard. *Archive* is in the same menu — it is not part of this flow.

The scorecard on the public page is the review's own verdict and is worth reading after each release, because it is not identical to what `npm run lint` says here. It is scored in an environment without this repository's devDependencies, which is what makes [the declared type surface](#passing-the-plugin-review) load-bearing rather than a stylistic choice: 164 warnings became 23 on the release that added it, and the review rating went from *Caution* to *Satisfactory* without a line of behaviour changing.

## Translation freshness

Every translated document opens with a comment naming the commit of the English source it was made from, so `git log <hash>..HEAD -- README.md` shows exactly what it is missing. Without it a translation set rots silently: the prose still reads fine, and nothing says it describes a version that no longer exists.

```bash
npm run stamp                          # rewrite the language row in every document
npm run stamp -- --freshness --check   # which translations name an old commit, and how far behind
npm run stamp -- --freshness           # claim they are current
```

Bumping a hash is a claim that the translation reflects that commit, so it is never a side effect of stamping the language row — read what `--check` lists first. The hash can only be bumped after the English change is committed, which is why this is a second commit rather than part of the first.

## The listing

The public page carries a few things `manifest.json` has no field for — tags, an optional long description, a pricing model, a listing icon, screenshots. They are edited in a form at `community.obsidian.md/account/plugins/lure/edit`, and until now they existed nowhere in this repository. `listing.json` is where they live.

They cannot go in `manifest.json`, for three separate reasons. Obsidian's [manifest reference](https://docs.obsidian.md/Reference/Manifest) is a closed list of nine properties and the submission review validates against it. The manifest is parsed with strict `JSON.parse` at plugin load, so there is nowhere to leave a note next to a value — a comment there breaks the app rather than a linter. And the lifecycles differ: manifest fields change with a version and are downloaded by every user, while a tag changes when you change your mind about it and belongs to nobody's download. Because `listing.json` is read by nothing but `scripts/check-listing.mjs`, keys beginning with `_` can carry that missing annotation.

```bash
npm run check:listing              # validate the file
npm run check:listing -- --remote  # and diff it against the live listing
npm run tags                       # the 76 tags the site accepts
npm run tags -- --refresh          # re-read that vocabulary from the site
```

Nothing here writes to the site. The form saves with a `PATCH /api/entries/lure` that authenticates by session cookie, and the site has no token path, so no script can hold a credential that would let it — the same constraint that keeps the release scan a browser step. What the scripts do instead is refuse values the form would reject before you type them, and read the public listing back afterwards to say whether it agrees. `npm run publish` prints the values to enter and then runs the remote check.

Only what was actually chosen is kept. `pricing` is `free`, which is the default; the icon and long description are unset; the short description is taken from `manifest.json`'s `description` by the site itself, so a second copy here would just be a second thing to keep right — the checker rejects it. The rule is that if the site can work a value out, the repository does not keep it.

The tag vocabulary is not documented anywhere. It is compiled into the community site's own JavaScript, and `scripts/obsidian-listing-tags.mjs` holds a copy read from there together with a `--refresh` that reads it again and reports what moved. Lure's three are `navigation`, `files`, `folders`, in that order — the form lets them be dragged, so the order is a choice and not an accident.

## Reporting bugs

Include your Obsidian version, OS, theme, and the list of other enabled plugins — most issues so far have come from interactions with the header bar rather than the plugin alone.
