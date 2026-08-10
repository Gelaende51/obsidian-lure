# Compatibility and related plugins

[← back to README](../README.md)

## Requires

Nothing. No plugin, core or community, has to be enabled.

## Optional

- **File Explorer** (core plugin) — used for the two actions that reveal something in the sidebar: clicking a folder segment, and *New folder* in an entry's context menu. With File Explorer disabled everything else works unchanged; those two are simply no-ops.

## Goes well with

- **Folder notes** — the best pairing. Giving every folder a note of its own makes each breadcrumb segment a real destination, reachable two ways: the folder's note appears in that folder's dropdown, and the **underlined delimiter after each folder opens it on click**. Moving or renaming a folder note in rename mode works like any other file.

  This works because the plugin never reimplements "open the folder note". It re-dispatches the click onto Obsidian's own breadcrumb element and lets whichever folder-notes plugin owns that element respond — so any of them works, under whatever note-location convention it is configured for, with nothing to keep in sync here. With no such plugin installed the same click hits Obsidian's own handler and reveals the folder in the sidebar, which is also the fallback for a folder that simply has no note. Obsidian's own reveal expands only the *ancestors* of its target, so Lure expands the folder itself afterwards — revealing a folder and finding it still shut is never what the click meant.

  The underline follows the same principle. Rather than work out where folder notes live, Lure keys it off the `has-folder-note` class that **Folder notes** (LostPaul) puts on the native path segment, so only delimiters that really lead to a note are underlined and the marking tracks that plugin's own configuration. Folder-notes plugins that don't set that class will simply leave every delimiter un-underlined; the clicks still work.

  Two gaps, both from the same cause — no native element exists to delegate to:

  - While you're *browsing* (after a dropdown has put chips on the row) the trail is this plugin's own, which no folder-notes plugin knows about. Those clicks reveal the folder in the sidebar instead of opening its note.
  - The vault-root segment likewise reveals the root rather than opening a vault-level folder note.

  Turning **Folder name opens the dropdown** off puts the folder *name* back to being what a folder-notes plugin sees a click on, with the dropdown moving to the delimiters.
- **Omnisearch** / **Another Quick Switcher** — search-first navigation, where this plugin is structure-first navigation.
- **Templater** — creating notes at typed paths pairs naturally with folder-based templates.

## May conflict

These are expectations based on what each plugin modifies, **not verified test results**. Please open an issue if you hit a real conflict.

- **Quick Explorer** — overlapping purpose *and* overlapping surface: it builds its own path UI in the title bar, the same region this plugin replaces. Expect the two to compete for the header rather than complement each other; pick whichever model suits you (see [similar projects](#similar-projects) for the difference).
- **Front Matter Title** and similar title-rewriting plugins also patch the view header title. Both plugins writing to the same element may produce a flickering or stale header.
- **Hider**-style plugins that hide the view header entirely leave this plugin with nothing to attach to; the breadcrumb simply won't be visible.
- Themes or CSS snippets that restyle `.view-header-title-container` may need small adjustments, since the breadcrumb renders inside it.

## Not supported

**Mobile.** The plugin is marked `isDesktopOnly` — the interaction model is built around hover, precise clicks on narrow delimiters and a physical keyboard, none of which translate well to a phone header bar.

## Similar projects

| Project | What it does | How this differs |
| --- | --- | --- |
| [Quick Explorer](https://github.com/pjeby/quick-explorer) | Adds a browsable path/menu UI for moving around the vault from the title bar | Quick Explorer is a *browser* for the whole vault. This plugin is an *address bar* for the note you're already in: editable, able to create files at typed paths, and doubling as a move/rename tool. |
| [Breadcrumbs](https://github.com/SkepticMystic/breadcrumbs) | Builds a navigable hierarchy from note *metadata* (parent/child links) | Breadcrumbs models conceptual relationships you declare in frontmatter. This plugin shows the actual folder path on disk, with no metadata required. |
| Obsidian core header breadcrumb | Shows ancestor folders in the header and reveals them on click | The core breadcrumb is read-only, omits the vault name and filename, and has no dropdowns, typing, or move/rename. This plugin reuses its reliable folder-reveal behaviour and builds the rest around it. |

*Comparisons reflect these projects as understood at the time of writing; check their current documentation before relying on the details.*
