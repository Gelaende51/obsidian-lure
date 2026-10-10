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
# here (see Skipped in harness.mjs).
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
	-p id:obsidian-icon-folder -p id:cmdr -p id:pane-relief -p id:obsidian-hider
	-p id:make-md -p id:tab-file-path -p id:obsidian-hover-editor
	-p id:notebook-navigator -p id:editor-breadcrumbs -p id:another-name
)

# The installer (Electron) goes with the app: the newest for "latest", the
# oldest that can run it for "earliest" — which is what users on each end have.
INSTALLER="${OBSIDIAN_INSTALLER:-$([ "$VERSION" = earliest ] && echo earliest || echo latest)}"

# `launch` starts Obsidian detached and returns; Obsidian is stopped on exit by
# where it runs from — the launcher's cache — so a system Obsidian is untouched.
CACHE="${OBSIDIAN_CACHE:-$HOME/.obsidian-cache}"
trap 'pkill -f "$CACHE/" 2>/dev/null' EXIT
# The copy of the vault goes under home, where a vault lives — so home
# "contains" it, as the location cases expect. Windows reads TEMP/TMP, not
# TMPDIR; left alone it copies to %TEMP%, which a runner spells with the
# 8.3 short name (C:\Users\RUNNER~1\...) that never matches home's long one.
mkdir -p "$HOME/.cache/lure-ci"
TMPDIR="$HOME/.cache/lure-ci" TEMP="$HOME/.cache/lure-ci" TMP="$HOME/.cache/lure-ci" npx --yes obsidian-launcher@3 launch --version "$VERSION" --installer "$INSTALLER" --copy "${PLUGINS[@]}" .dev/test-vault \
	-- --remote-debugging-port="$PORT" ${OBSIDIAN_EXTRA_ARGS:-} >"$LOG" 2>&1

# The port answers before the vault has loaded; wait for a page target and for
# the plugin itself.
for _ in $(seq 1 240); do
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
	exit 1
fi

OBSIDIAN_CDP_PORT="$PORT" node .dev/ci-prepare.mjs || exit 1
OBSIDIAN_CDP_PORT="$PORT" node ".dev/$SUITE.mjs" ${SUITE_FILTER:+"$SUITE_FILTER"}
