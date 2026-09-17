# A path bar on views that have no file

Concept for the tracker item *add path bar to empty page, graph view, and other
special pages that dont have one*. Written 2026-09-17, against `e1e2247`.

## What happens today

`BreadcrumbManager.patchLeaf()` patches **every** leaf whose view has a
`.view-header-title` — there is no view-type test anywhere. A graph view or an
empty tab is therefore already patched: the native title is hidden
(`lure-native-title-hidden`, added unconditionally in the constructor,
`pathBreadcrumb.ts:794`) and then nothing is drawn, because
`renderVaultSegment()` (`:4071`) and `renderFilename()` (`:4341`) both return
early while `file`, `browsePath` and `externalPath` are all empty.
`enterTypingMode()` (`:6713`) bails on the same condition.

The result is a header that is emptier than Obsidian's own: the plugin hides
the view's title and puts nothing in its place. That is the actual defect —
"no path bar" here means "the title was taken away".

Views with a file need nothing: canvas, PDF, image and Obsidian's bases all
arrive as a `FileView`, `getFileForLeaf()` returns their file
(`pathBreadcrumb.ts:3117`), and they get an ordinary row already.

## What the row shows

The vault name as usual, then one pseudo-segment naming the view:

```
my-vault › :graph
my-vault › :blank
```

The colon marks it as not a path: no file or folder can be called `:graph`, so
the row cannot be mistaken for something that could be opened, and a reader who
has seen `host:port` or a drive letter reads it as a namespace rather than a
name. The label comes from the view type, not from Obsidian's display text, so
it does not change with the interface language and stays short enough not to
fight the fitter.

| view type | segment |
|---|---|
| `empty` | `:blank` |
| `graph` | `:graph` |
| `localgraph` | `:graph` |
| anything else with no file | `:` + its view type |

The last row keeps this open-ended on purpose: a view this plugin has never
heard of still gets an honest label rather than an empty header. Sidebar
leaves are excluded — the row is for editor panes, tested as `navLock`
already tests it (`leaf.getRoot() === workspace.rootSplit`, `:2209`).

## What it does

**The field is an address bar.** Clicking the empty space or the pseudo-segment
opens the typing field on an empty value, rooted at the vault, with the
autocomplete the row has everywhere else. Enter opens the note it names, in
this leaf, replacing the graph or the empty view — which is what an empty tab
is for. A path that does not exist is created, exactly as on a normal row: the
red field and the *creating* notice are unchanged, because the code that
decides all that never looks at the current file.

**The pseudo-segment is inert.** It is not a folder: clicking it opens the
field (like the empty space), and it offers no dropdown, no folder note, no
drag, no context menu beyond the row's own text menu. It is a label, not a
target.

**The vault name keeps its meaning.** Its dropdown lists the vault root and,
with *Browse outside the vault* on, the places — so a graph view is a place you
can browse from, not a dead end.

**Rename mode and the padlock stay away.** There is nothing to rename: the
pencil is not drawn while the row has no file, and `startHeaderRename()`
already refuses (`:2487`). The padlock is unrelated — it belongs to external
paths and appears there as usual if browsing leaves the vault.

**Drops.** A note dropped on the vault name moves it to the root, as it does on
any row. Text dropped on the pseudo-segment does nothing: there is no note to
append it to, and inventing one would be a surprise rather than a convenience.

## Why not the alternatives

*Show the view's own name* (`Graph`, `No file is open`) reads like a filename
and translates, which puts a language-dependent string where every other
segment is a path. *Show the last file you had open* was considered and
rejected: the row would name a note that this pane is not showing, and every
gesture on it — reveal, drag, rename — would act on a file the user cannot see.

## Implementation sketch

1. `pseudoSegmentFor(view)` in `pathBreadcrumb.ts` — returns `:blank`,
   `:graph`, `":" + viewType`, or `null` for sidebar leaves and for views that
   have a file.
2. `renderVaultSegment()` and `renderFilename()`: where they return early on
   "no file, no browse, no external", they instead render the vault segment and
   the pseudo-segment when `pseudoSegmentFor()` gives one.
3. `enterTypingMode()`: allow it when a pseudo-segment is showing, with the
   vault root as the base — the same state a `browsePath` of `""` describes, so
   the commit path needs no change.
4. The constructor keeps hiding the native title only when the row will draw
   something: a sidebar leaf with no file gets its title back.
5. `layout-change` already re-patches; an empty tab that becomes a note is an
   ordinary re-render.

## How it is tested

A new `.dev/test-blank.mjs`, in the shape of the other suites (`reset` before
every case):

- an empty tab shows `vault › :blank`, and the native title is not left hidden;
- a graph view shows `vault › :graph`; switching that leaf to a note shows the
  note's path;
- typing a path in an empty tab opens the note there, and a path that does not
  exist is created with the notice;
- the pseudo-segment offers no dropdown and no rename;
- a sidebar leaf (backlinks) keeps Obsidian's own title.
