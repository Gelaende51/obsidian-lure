# Upstream report sketches

Problems found while testing Lure that are not Lure's to fix. Drafts only —
nothing here has been filed. Each says how it was found, so it can be checked
again before it is sent.

## obsidian-launcher: a plugin with a two-part version stops the whole launch

- **Project:** [obsidian-launcher](https://www.npmjs.com/package/obsidian-launcher) (wdio-obsidian-service)
- **Version:** 3.x (`npx obsidian-launcher@3`), 2026-10-10
- **What happens:** `obsidian-launcher launch -p id:obsidian-prozen …` fails with
  `[error] Invalid version "0.3"`, and none of the other plugins in the list is
  installed. ProZen's `manifest.json` has `"version": "0.3"`.
- **Expected:** Obsidian itself installs and runs that plugin, so the launcher
  should too — coerce the version (`semver.coerce`), or skip the one plugin with a
  warning instead of failing the launch.
- **Reproduce:** `npx obsidian-launcher@3 launch -p id:obsidian-prozen <vault>`.
- **Found by:** test-compat-ui in `.github/workflows/test.yml`, run 38052133194.

## Iconic: turning it on freezes Obsidian's window on Linux and Windows

- **Project:** [Iconic](https://github.com/gfxholo/iconic) (`iconic`), 1.1.10
- **Where:** Obsidian 1.14.4 (and 1.8.7 on Linux), started by
  obsidian-launcher with a copy of a small demo vault, on GitHub runners:
  - Ubuntu under Xvfb — freezes;
  - Windows Server 2025, a real desktop session — freezes;
  - macOS 15 (Apple silicon) — does **not** freeze.
  Each with no other community plugin enabled (and again beside Lure, the
  same).
- **What happens:** `app.plugins.enablePlugin("iconic")` never returns; the
  window's page stops answering the DevTools protocol (`Runtime.evaluate`
  times out), `Debugger.pause` does not pause it either, and no dialog,
  exception or renderer crash is reported.
- **Suspected:** a synchronous call that blocks outside JavaScript at load —
  the debugger can interrupt any script loop — and one that behaves
  differently on macOS: a native API (system colours, file icons) or a sync
  IPC to the main process.
- **Still to check before filing:** a person's own desktop on Linux or
  Windows, a fresh vault, and which Iconic version started it.
- **Reproduce:** `EXTRA_PLUGINS=iconic LURE_OFF=1 .dev/ci-run.sh probe-freeze`
  (`.dev/probe-freeze.mjs`), or the freeze-probe job of
  `.github/workflows/test-systems.yml` (runs 38061880299, 38066641480).
