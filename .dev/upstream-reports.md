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

## Iconic: turning it on freezes Obsidian's window (CI sandbox)

- **Project:** [Iconic](https://github.com/gfxholo/iconic) (`iconic`), 1.1.10
- **Where:** Obsidian 1.14.4 and 1.8.7 on Ubuntu (GitHub runner), under Xvfb,
  started by obsidian-launcher with a copy of a small demo vault. No other
  community plugin enabled.
- **What happens:** `app.plugins.enablePlugin("iconic")` never returns; the
  window's page stops answering the DevTools protocol (`Runtime.evaluate`
  times out), `Debugger.pause` does not pause it either, and no dialog or
  renderer crash is reported. The same happens with every other plugin off.
- **Suspected:** a synchronous call that blocks outside JavaScript at load
  (the debugger can interrupt any script loop), e.g. a sync IPC or a file
  system walk.
- **Still to check before filing:** whether it happens on a desktop session
  (Linux, Windows, macOS) and in a fresh vault, and which Iconic version
  started it. `.dev/probe-freeze.mjs` reproduces it: `EXTRA_PLUGINS=iconic
  LURE_OFF=1 .dev/ci-run.sh probe-freeze`.
- **Found by:** test-compat-ui, then the freeze-probe job of
  `.github/workflows/test-systems.yml` (run 38061880299, Lure on and off).
