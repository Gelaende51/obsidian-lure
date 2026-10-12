#!/bin/bash
# Runs one suite against a sandboxed Obsidian — what the Test workflow does on
# GitHub's runners, so the suites never need this machine's Obsidian.
#
#   .dev/ci-run.sh test-tab                  # latest Obsidian
#   OBSIDIAN_VERSION=earliest .dev/ci-run.sh test-tab   # the manifest's minAppVersion
#
# obsidian-launcher downloads Obsidian (cached in ~/.obsidian-cache), opens a
# copy of .dev/test-vault with its own configuration directory, installs this
# build and every plugin the suites switch on, and passes the DevTools port the
# suites talk to. Needs a display: on a runner that is xvfb-run.
#
# Exit code is the suite's: 0 passed, 1 failed, 2 a case could not be asked
# here (see Skipped in development-template's harness).
set -u
cd "$(dirname "$0")/.."
SUITE="${1:?usage: ci-run.sh <suite, e.g. test-tab>}"
VERSION="${OBSIDIAN_VERSION:-latest}"
PORT="${OBSIDIAN_CDP_PORT:-9222}"
LOG="${OBSIDIAN_LOG:-obsidian-$SUITE.log}"

# The suites turn these on and off: test-compat and test-foldernote check Lure
# beside each of them, and a start-page plugin gives the vault's delimiter
# something to open. test-keyleak turns on two that answer Tab in a note.
PLUGINS=(
	-p .
	-p id:folder-notes -p id:folder-note-plugin -p id:create-folder-notes-with-dropdown
	-p id:quick-explorer -p id:obsidian-front-matter-title-plugin -p id:nav-link-header
	-p id:running-head -p id:crumbs-obsidian -p id:breadcrumbs
	-p id:home-launcher
	-p id:obsidian-outliner -p id:table-editor-obsidian
)
# EXTRA_PLUGINS: more community plugin ids to install (and so to load once
# before ci-prepare turns them off) — how test-systems.yml finds which of
# them leaves something behind.
for id in ${EXTRA_PLUGINS:-}; do PLUGINS+=(-p "id:$id"); done
# The header plugins test-compat-ui checks are installed for it alone: some
# keep patches after being disabled, and would be in every other suite's way.
if [ "$SUITE" = test-compat-ui ]; then
	PLUGINS+=(
		-p id:obsidian-icon-folder -p id:cmdr -p id:pane-relief -p id:obsidian-hider
		-p id:make-md -p id:tab-file-path -p id:obsidian-hover-editor
		-p id:notebook-navigator -p id:editor-breadcrumbs -p id:another-name
		-p id:obsidian-path-title -p id:vertical-tabs -p id:continuous-mode
		-p id:obsidian-filename-heading-sync
		-p id:advanced-rename-and-delete-handler -p id:mononote -p id:open-tab-settings
	)
	# Iconic freezes Obsidian when turned on, except on macOS.
	[ "$(uname)" = Darwin ] && PLUGINS+=(-p id:iconic)
fi

# PEER_CHANNEL=beta: each neighbour at its newest pre-release where it has one
# (test-systems' peer-betas target, a heads-up on their next releases).
if [ "${PEER_CHANNEL:-}" = beta ]; then
	mapfile -t PLUGINS < <(node node_modules/obsidian-toolkit/bin/peer-betas.mjs "${PLUGINS[@]}")
fi

# The installer (Electron) goes with the app: the newest for "latest", the
# oldest that can run it for "earliest" — which is what users on each end have.
INSTALLER="${OBSIDIAN_INSTALLER:-$([ "$VERSION" = earliest ] && echo earliest || echo latest)}"

# `launch` starts Obsidian detached and returns; Obsidian is stopped on exit by
# where it runs from — the launcher's cache — so a system Obsidian is untouched.
CACHE="${OBSIDIAN_CACHE:-$HOME/.obsidian-cache}"
# Waited for, not only signalled: Obsidian is single-instance, and a suite run
# straight after this one (the test-systems jobs run several in a row) would
# otherwise hand its launch to the copy still shutting down, and see it exit.
stop_obsidian() {
	pkill -f "$CACHE/" 2>/dev/null
	pkill -f "lure-ci-alt" 2>/dev/null
	# Under Wine the app's processes are Windows ones the patterns above do
	# not reach; left running, the next suite's Obsidian never starts.
	[ "${OBSIDIAN_PATHS:-}" = wine ] && wineserver -k 2>/dev/null
	for _ in $(seq 1 20); do
		pgrep -f "$CACHE/" >/dev/null 2>&1 || return 0
		sleep 0.5
	done
	pkill -9 -f "$CACHE/" 2>/dev/null
}
trap stop_obsidian EXIT
# The copy of the vault goes under home, where a vault lives — so home
# "contains" it, as the location cases expect. Windows reads TEMP/TMP, not
# TMPDIR; left alone it copies to %TEMP%, which a runner spells with the
# 8.3 short name (C:\Users\RUNNER~1\...) that never matches home's long one.
# LURE_VAULT_PARENT puts the vault copy somewhere else — another drive, a
# folder outside home, a network share — since a vault can be anywhere
# (test-systems' vault-elsewhere target). Lure and the suites must not care.
# Only the vault goes there: Obsidian's own settings folder stays local, as
# a user's does — Chromium's databases want file locks a share may not give.
VAULTS="$HOME/.cache/lure-ci"
mkdir -p "$VAULTS"
VAULT_ARGS=(--copy .dev/test-vault)
if [ -n "${LURE_VAULT_PARENT:-}" ]; then
	placed="$LURE_VAULT_PARENT/test-vault-$$"
	# Git Bash copies by its own spelling of the path (//localhost/lure/…),
	# Obsidian opens Windows' (\\localhost\lure\…).
	if command -v cygpath >/dev/null; then here=$(cygpath -u "$placed"); placed=$(cygpath -w "$placed"); else here="$placed"; fi
	rm -rf "$here" && cp -r .dev/test-vault "$here"
	VAULT_ARGS=("$placed")
fi
if [ -n "${OBSIDIAN_COMMAND:-}" ]; then
	# An Obsidian installed some other way — Flatpak, Snap, a distribution's
	# package, Wine (see test-systems.yml): the launcher's library prepares the
	# vault and the configuration directory, and that Obsidian is started on them.
	[ -d node_modules/obsidian-launcher ] || npm install --no-save --no-package-lock obsidian-launcher@3 >/dev/null 2>&1
	TMPDIR="$VAULTS" OBSIDIAN_ALT_LOG="$LOG" node .dev/ci-launch-alt.mjs "$VERSION" .dev/test-vault "${PLUGINS[@]}" \
		-- --remote-debugging-port="$PORT" ${OBSIDIAN_EXTRA_ARGS:-} >>"$LOG" 2>&1
else
	TMPDIR="$VAULTS" TEMP="$VAULTS" TMP="$VAULTS" npx --yes obsidian-launcher@3 launch --version "$VERSION" --installer "$INSTALLER" "${PLUGINS[@]}" "${VAULT_ARGS[@]}" \
		-- --remote-debugging-port="$PORT" ${OBSIDIAN_EXTRA_ARGS:-} >"$LOG" 2>&1
fi

# The port answers before the vault has loaded; wait for a page target and for
# the plugin itself.
# Longer where the machine is slow on purpose (LURE_SLOW, see cdpSession.mjs).
for _ in $(seq 1 $((240 * ${LURE_SLOW:-1}))); do
	if curl -s --max-time 1 "http://127.0.0.1:$PORT/json/list" | grep -q '"type": *"page"'; then
		if OBSIDIAN_CDP_PORT="$PORT" node .dev/cdp.mjs eval '!!app?.plugins?.plugins?.lure' 2>/dev/null | grep -q true; then
			ready=1
			break
		fi
	fi
	sleep 1
done
if [ -z "${ready:-}" ]; then
	echo "Obsidian did not come up with Lure loaded; launcher log:" >&2
	tail -40 "$LOG" >&2
	# What the window got as far as, when it answers at all.
	echo "--- the page:" >&2
	curl -s --max-time 3 "http://127.0.0.1:$PORT/json/list" | head -c 600 >&2
	OBSIDIAN_CDP_PORT="$PORT" timeout 20 node .dev/cdp.mjs eval 'JSON.stringify({ url: location.href, app: !!window.app, vault: window.app?.vault?.getName?.(), safe: window.app?.plugins?.isEnabled?.(), manifests: Object.keys(window.app?.plugins?.manifests ?? {}).length, enabled: [...(window.app?.plugins?.enabledPlugins ?? [])].length, title: document.title })' >&2 2>&1
	exit 1
fi

OBSIDIAN_CDP_PORT="$PORT" node .dev/ci-prepare.mjs || exit 1
# SUITE_NODE runs the suite on another Node — Windows' own under Wine, so
# the test and the app it drives agree on what a path looks like.
if [ -z "${SUITE_NODE:-}" ]; then
	OBSIDIAN_CDP_PORT="$PORT" node ".dev/$SUITE.mjs" ${SUITE_FILTER:+"$SUITE_FILTER"}
	exit $?
fi
# Windows' Node under Wine cannot write to a pipe (EBADF on its stderr): it
# writes to a file, shown when it is done.
out="$CACHE/suite-$SUITE.out"
OBSIDIAN_CDP_PORT="$PORT" $SUITE_NODE ".dev/$SUITE.mjs" ${SUITE_FILTER:+"$SUITE_FILTER"} >"$out" 2>&1 </dev/null
code=$?
tr -d '\r' < "$out"
exit $code
