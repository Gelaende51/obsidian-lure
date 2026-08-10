# Compatibility and related plugins

[← back to README](../README.md)

## Requires

Nothing. No plugin, core or community, has to be enabled.

## Optional

- **File Explorer** (core plugin) — used for the two actions that reveal something in the sidebar: clicking a folder segment, and *New folder* in an entry's context menu. With File Explorer disabled everything else works unchanged; those two are simply no-ops.

## Goes well with

- **Folder notes** — the best pairing. Giving every folder a note of its own makes each breadcrumb segment a real destination, reachable two ways: the folder's note appears in that folder's dropdown, and the **underlined delimiter after each folder opens it on click**. Moving or renaming a folder note in rename mode works like any other file.

  This works because the plugin never reimplements "open the folder note". It re-dispatches the click onto Obsidian's own breadcrumb element and lets whatever owns that element respond, under whatever note-location convention it is configured for, with nothing to keep in sync here.

  That delegation only pays off for a plugin that actually listens on the header path, and **testing found only one that does**: [Folder notes](obsidian://show-plugin?id=folder-notes). [Folder Note](obsidian://show-plugin?id=folder-note-plugin) and [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) create and manage folder notes perfectly well but never claim the breadcrumb, so a delimiter click falls through to Obsidian's own handler and reveals the folder instead. Nothing breaks; you simply don't get the note.

  Revealing is also the fallback with no folder-notes plugin at all, and for a folder that has no note. Obsidian's own reveal expands only the *ancestors* of its target, so Lure expands the folder itself afterwards — revealing a folder and finding it still shut is never what the click meant.

  The underline follows the same principle. Rather than work out where folder notes live, Lure keys it off the `has-folder-note` class that **Folder notes** (LostPaul) puts on the native path segment, so only delimiters that really lead to a note are underlined and the marking tracks that plugin's own configuration. Folder-notes plugins that don't set that class will simply leave every delimiter un-underlined; the clicks still work.

  Two gaps, both from the same cause — no native element exists to delegate to:

  - While you're *browsing* (after a dropdown has put chips on the row) the trail is this plugin's own, which no folder-notes plugin knows about. Those clicks reveal the folder in the sidebar instead of opening its note.
  - The vault-root segment likewise reveals the root rather than opening a vault-level folder note.

  Turning **Folder name opens the dropdown** off puts the folder *name* back to being what a folder-notes plugin sees a click on, with the dropdown moving to the delimiters.
- **Omnisearch** / **Another Quick Switcher** — search-first navigation, where this plugin is structure-first navigation.
- **Templater** — creating notes at typed paths pairs naturally with folder-based templates.

## Verified against

Every community plugin that contends for the note header or answers the folder
click, exercised by `.dev/test-compat.mjs` against a live Obsidian: both load
orders, each plugin on and off, and **Folder name opens the dropdown** in both
positions. Names and ids are verbatim from Obsidian's `community-plugins.json`;
a plugin's name is never translated. Links open the plugin's page in Obsidian.

**Contend for the header** — they draw into `.view-header-title`, the element
this plugin takes over, so the risk is a clobber in one load order only.

| Plugin | Id | Result |
| --- | --- | --- |
| [Quick Explorer](obsidian://show-plugin?id=quick-explorer) | `quick-explorer` | Coexists. Lure keeps the header whichever loads first; disabling either leaves the other intact |
| [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) | `obsidian-front-matter-title-plugin` | Coexists, both load orders. Disabling Lure restores the native title with no leftover nodes |

**Answer the folder click** — the delimiter is re-dispatched onto Obsidian's
native breadcrumb, and whoever has claimed it responds.

| Plugin | Id | Result |
| --- | --- | --- |
| [Folder notes](obsidian://show-plugin?id=folder-notes) | `folder-notes` | Opens the folder note on the delimiter click; with the swap off the delimiter opens the dropdown instead |
| [Folder Note](obsidian://show-plugin?id=folder-note-plugin) | `folder-note-plugin` | Does not claim the header path — the click reveals and expands the folder |
| [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) | `create-folder-notes-with-dropdown` | Does not claim the header path — same fallback |

**Own their own strip** — a bar of their own above or inside the note, rather
than the header title.

| Plugin | Id | Result |
| --- | --- | --- |
| [Nav Link Header](obsidian://show-plugin?id=nav-link-header) | `nav-link-header` | Coexists |
| [Running Head](obsidian://show-plugin?id=running-head) | `running-head` | Coexists |
| [Crumbs](obsidian://show-plugin?id=crumbs-obsidian) | `crumbs-obsidian` | Coexists |
| [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) | `breadcrumbs` | Coexists |

## May conflict

Untested expectations based on what each plugin modifies, not results. Please
open an issue if you hit a real conflict.

- **Hider**-style plugins that hide the view header entirely leave this plugin with nothing to attach to; the breadcrumb simply won't be visible.
- Themes or CSS snippets that restyle `.view-header-title-container` may need small adjustments, since the breadcrumb renders inside it.
- Any other plugin that writes into `.view-header-title`. The two tested above coexist, but that is a property of those two, not a guarantee about the element.

## Not supported

**Mobile.** The plugin is marked `isDesktopOnly` — the interaction model is built around hover, precise clicks on narrow delimiters and a physical keyboard, none of which translate well to a phone header bar.

## Similar projects

| Project | What it does | How this differs |
| --- | --- | --- |
| [Quick Explorer](obsidian://show-plugin?id=quick-explorer) ([source](https://github.com/pjeby/quick-explorer)) | Adds a browsable path/menu UI for moving around the vault from the title bar | Quick Explorer is a *browser* for the whole vault. This plugin is an *address bar* for the note you're already in: editable, able to create files at typed paths, and doubling as a move/rename tool. |
| [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) ([source](https://github.com/michaelpporter/breadcrumbs)) | Builds a navigable hierarchy from note *metadata* (parent/child links) | Breadcrumbs models conceptual relationships you declare in frontmatter. This plugin shows the actual folder path on disk, with no metadata required. |
| Obsidian core header breadcrumb | Shows ancestor folders in the header and reveals them on click | The core breadcrumb is read-only, omits the vault name and filename, and has no dropdowns, typing, or move/rename. This plugin reuses its reliable folder-reveal behaviour and builds the rest around it. |

*Comparisons reflect these projects as understood at the time of writing; check their current documentation before relying on the details.*
