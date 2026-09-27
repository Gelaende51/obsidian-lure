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
# something to open.
PLUGINS=(
	-p .
	-p id:folder-notes -p id:folder-note-plugin -p id:create-folder-notes-with-dropdown
	-p id:quick-explorer -p id:obsidian-front-matter-title-plugin -p id:nav-link-header
	-p id:running-head -p id:crumbs-obsidian -p id:breadcrumbs
	-p id:home-launcher
)

npx --yes obsidian-launcher@3 launch --version "$VERSION" --copy "${PLUGINS[@]}" .dev/test-vault \
	-- --remote-debugging-port="$PORT" ${OBSIDIAN_EXTRA_ARGS:-} >"$LOG" 2>&1 &
LAUNCHER=$!
trap 'kill $LAUNCHER 2>/dev/null; pkill -P $LAUNCHER 2>/dev/null' EXIT

# The port answers before the vault has loaded; wait for a page target and for
# the plugin itself.
for _ in $(seq 1 240); do
	if curl -s --max-time 1 "http://127.0.0.1:$PORT/json/list" | grep -q '"type": *"page"'; then
		if OBSIDIAN_CDP_PORT="$PORT" node .dev/cdp.mjs eval '!!app?.plugins?.plugins?.lure' 2>/dev/null | grep -q true; then
			ready=1
			break
		fi
	fi
	kill -0 $LAUNCHER 2>/dev/null || break
	sleep 1
done
if [ -z "${ready:-}" ]; then
	echo "Obsidian did not come up with Lure loaded; launcher log:" >&2
	tail -40 "$LOG" >&2
	exit 1
fi

OBSIDIAN_CDP_PORT="$PORT" node ".dev/$SUITE.mjs"
