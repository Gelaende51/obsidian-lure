# Glob patterns in the path field — design

Status: agreed (answers from `.personal/issues4.md`, "glob specs additions", 2026-10-09).

## What it is for

Typing a pattern instead of a path — `Recipes/*/cake*.md`, `Inbox/**/*.pdf`,
`Daily/2026-10-0?.md` — to see what it matches on the row, open everything it
matches at once, and, where the pattern names exactly a set of new files,
create them.

## Behaviour

1. **When a field is a pattern.** A segment counts as a pattern when it holds
   `*`, `?`, `[…]` or `{a,b}` *and* nothing with that literal name exists at
   that point of the path. A real file or folder whose name contains one of
   these characters is always taken literally, so existing names never turn
   into patterns by accident. Patterns are never applied in rename/move mode:
   there Enter keeps doing exactly what it does now.
2. **Matching.** `*` and `?` stay inside one segment, `**` spans folders,
   `[…]` and `{…}` as in a shell. Case-insensitive, like the rest of the
   completion. Dot-files only with *Show dot files* on, and the visibility
   rules for file types apply, as for the dropdown.
3. **The row.** Each pattern segment is tinted **green** when it matches at
   least one entry and **red** when it matches none, so the place where the
   pattern stops matching can be seen. A count of matches sits at the end of
   the field.
4. **The dropdown.** While the field holds a pattern, the list shows the
   matching paths (relative to where the row stands), capped like every other
   listing with a count row. Picking one opens it, as any row does.
5. **Enter opens every match**, each in its own tab (Ctrl/Cmd+Enter: in new
   tabs without switching, as elsewhere). Above a threshold (recommended: 10)
   a confirmation states the number first.
6. **Creation.** A pattern with no `*`, `**` or `?` names a finite set — only
   braces (and brackets, see open questions) — so Enter on one whose matches
   are all missing creates each expanded name: `Week {1,2,3}.md` makes three
   notes. A pattern with a wildcard never creates anything.
7. **Outside the vault.** Not in the first version: matching walks the vault's
   own index, which is cheap; walking a filesystem is not.

## Components

- `src/globPattern.ts` — pure functions: `isPattern(segment)`,
  `expandBraces(pattern)`, `matchPaths(pattern, paths)`. Uses **picomatch**
  (MIT, no dependencies, ~20 KB minified) rather than a hand-written matcher;
  per the project rule, an existing library first.
- `pathBreadcrumb.ts` — detection on input, tint of the field's segments,
  Enter's open-all and create-all branches.
- `folderChildSuggest.ts` — a pattern listing mode, beside the folder and
  the locations listings.
- Strings for the count, the confirmation, and the tooltips, in every
  language.

## Testing

`test-complete.mjs`-style unit tests for `globPattern.ts` (pure); a suite case
per behaviour above against the test vault, including a literal name that
contains `[` to prove it is not taken as a pattern.

## Answers (2026-10-09)

1. Brackets only match; only braces create (no answer given; the recommended default).
2. Opening more than **10** matches asks first.
3. **Where matches show:** in the other-paths button and its menu. While the
   field holds a pattern, the button's count is the number of matches (in
   place of the other paths' count), its icon is **green** when something
   matches — over every other colour — and **red** when nothing does; its menu
   lists the matches in green, ahead of the note's other paths. This replaces
   the count at the end of the field and the pattern listing in the dropdown.
4. Outside the vault: left out for now.
