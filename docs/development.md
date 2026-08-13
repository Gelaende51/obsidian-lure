# Development

[← back to README](../README.md)

## Setup

```bash
npm install
npm run dev            # esbuild watch
npm run build          # tsc --noEmit + check:lang + production bundle
npm run check:lang     # verify all 45 locales cover all string keys
```

To test in a real vault, symlink or copy `main.js`, `manifest.json` and `styles.css` into `<vault>/.obsidian/plugins/lure/`. Symlinks plus `npm run dev` give a live-reload loop (Obsidian still needs the plugin toggled off and on to pick up changes).

## Dependencies

None at runtime. `dependencies` is empty and the bundle's only `require()` is `require("obsidian")`, which the app supplies — everything else the plugin uses (Lucide icons, i18next, CSS classes and variables) is already inside Obsidian. `devDependencies` are build tooling only: esbuild, TypeScript, `@types/node`, `builtin-modules`, `tslib`, and the `obsidian` typings.

Keep it that way unless there's a strong reason not to: a plugin with no dependencies has nothing to audit, nothing to keep patched, and no supply chain.

## Architecture

The plugin owns one piece of Obsidian's UI — the `.view-header-title` element in each open tab — and everything else follows from keeping that ownership honest.

```
main.ts                 plugin lifecycle, wraps the rename command
  └── breadcrumbManager.ts     one PathBreadcrumb per leaf, kept in sync
        └── pathBreadcrumb.ts  the header row itself: render + all interaction
              ├── folderChildSuggest.ts   autocomplete for the input
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
| `src/folderChildSuggest.ts` | Autocomplete over a folder's children, and over external folders. Extends Obsidian's `AbstractInputSuggest`. | Driven entirely by the `SuggestContext` the path bar hands it: which folder, whether rename mode is on, which name to pin (`keepName`) and which path is the file itself (`keepPath`, so a file never counts as a conflict with itself). Extend the context rather than reaching back into the breadcrumb. |
| `src/nativeFileItem.ts` | Makes an arbitrary element behave like a File Explorer row: Obsidian's own drag payload, and the same right-click menu including other plugins' contributions. | `wireNativeFileItem(app, el, target, keepFocusEl)`. Sits on undocumented API (`app.dragManager`), so every entry point is guarded — a failure must degrade to an ordinary element, never throw inside an event handler. |
| `src/createFileModal.ts` | The "create it?" confirmation for a typed path that doesn't exist. | `ConfirmCreateFileModal.ask(app, path)` resolves `true`/`false`; every form of cancel resolves `false`. |
| `src/fileKinds.ts` | Classifies an extension: binary, Markdown, or "Obsidian has no editor for this". | `isBinaryExtension`, `isMarkdownExtension`, `warnsOnOpen` — the last one decides the orange warning tier. |

### Outside the vault

Off by default behind `accessExternalFiles`; the vault-root segment is the only entrance.

| File | What it does | How you interact with it |
| --- | --- | --- |
| `src/systemLocations.ts` | The locations dropdown: other vaults (read from Obsidian's own `obsidian.json`), home, filesystem root, mounted drives, each with a device-type icon. | `listSystemLocations()`, `listVaults()`, plus `samePath`/`isInside`, which are the containment checks the write guards rely on. |
| `src/externalFs.ts` | Directory listing and path maths outside the vault, synchronous because the dropdown needs it during a click. | `listExternalChildren`, `externalParent`, `externalSegments`, `externalJoin`. Use these instead of `path` directly so separators stay consistent. |
| `src/externalFileOps.ts` | The four write operations, and the only place the plugin writes outside the vault. | `externalExists`, `createExternalFile`, `copyExternalFile`, `moveExternalFile`. Creation uses the filesystem's own exclusive-create, not a check-then-write — a check could lose a race and overwrite. Anything new that writes externally belongs here, behind the same unlock. |
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

## Ground rules

- Add a new key to `src/lang/strings.ts` first, then to every locale — `check:lang` will tell you which are missing.
- No user-facing string may be hardcoded; everything goes through `t()`.
- Prefer Obsidian's documented API. The few undocumented internals are typed in `src/types/obsidian-internal.d.ts` and guarded at the call site.
- Whatever a component adds to the DOM, it removes in `destroy()`.
- `README.md` and `docs/usage.md` are the sources; `docs/i18n/<doc>.<lang>.md` are translations of them: edit the English first, then re-translate the sections that changed. Each locale file records the English commit it was made from, so `git log <recorded>..HEAD -- <source>` shows exactly what a translation is missing. Plugin names, code, commands and paths stay untranslated, and UI labels quoted in prose must match `src/lang/translations.ts` for that locale — a page that names a button the app doesn't is worse than an English one. Obsidian's *own* setting names cannot be checked from this repo (its translations load at runtime, and only English ships in the archive), so those keep the English in parentheses rather than an invented translation.
- **Never translate a plugin's name.** A name is a proper noun: *Folder notes* stays *Folder notes* in all 45 locales, with only the grammar around it localised. Match the spelling and casing in Obsidian's `community-plugins.json`.
- The project follows Obsidian's [Developer policies](https://docs.obsidian.md/Developer+policies) and [plugin submission requirements](https://docs.obsidian.md/Plugins/Releasing/Submission+requirements+for+plugins).

## Testing

There are no unit tests. The features here are conversations between the path bar, Obsidian's suggest popover, an `ItemView` and the filesystem, and every bug found so far has lived in the gaps between those — so the suites drive a *live* Obsidian over the DevTools protocol and assert what the user would see: what the DOM says, and what is on disk afterwards.

```bash
node .dev/test-external.mjs          # outside-the-vault behaviour
node .dev/test-external.mjs edit     # only tests whose name matches
node .dev/test-compat.mjs            # against installed peer plugins
node .dev/test-compat.mjs Quick      # one peer
```

Both need Obsidian running with `--remote-debugging-port=9222` (add it to `~/.config/obsidian/user-flags.conf`) and the demo vault open — the same vault the screenshots are captured from, named in the `SCENES` table in `.dev/screenshots.mjs`. It needs this plugin symlinked into its `.obsidian/plugins/lure/`, and, for the compatibility suite, the peer plugins installed; the suite skips any that aren't. With several vaults open, choose the window with `OBSIDIAN_VAULT=<name>`. **Comment the port back out when you're done** — a shipped build must never be developed against an open debugging port.

One vault serving both roles means each use has to leave it fit for the other. The suites create a `LureFocus/` fixture inside the vault and toggle peer plugins on and off; the fixture is now dropped at the end of every run whether it passed or failed, and peer states are restored. The capture script refuses to shoot if either is still in evidence — both are invisible in a passing test run and perfectly visible in a photograph, which is not a difference documentation can be trusted to bridge.

| Tool | What it's for |
| --- | --- |
| `.dev/cdp.mjs` | One-shot probes into the running app: `eval`, `html`, `style`, `shot`. `eval` runs in the renderer's main world, so Obsidian's own `app` object is in scope. |
| `.dev/cdpSession.mjs` | One long-lived connection for the suites. Picks the window by vault name (`OBSIDIAN_VAULT`), since target order isn't stable with several vaults open. |
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

```bash
node .dev/usage-stats.mjs                      # refresh the disclosure first
npm run build                                  # produces main.js
git tag -a 1.0.0 -m "Lure 1.0.0" && git push origin 1.0.0
gh release create 1.0.0 --title "1.0.0" \
    --notes-file <notes> main.js manifest.json styles.css
```

Bump `manifest.json` and add the matching `versions.json` entry (`"<plugin version>": "<minimum Obsidian version>"`) before tagging — Obsidian uses that map to decide which release an older app may install.

## Reporting bugs

Include your Obsidian version, OS, theme, and the list of other enabled plugins — most issues so far have come from interactions with the header bar rather than the plugin alone.
