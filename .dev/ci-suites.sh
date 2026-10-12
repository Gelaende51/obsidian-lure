#!/bin/bash
# Runs every suite in $SUITES on every Obsidian version in $VERSIONS through
# ci-run.sh: electron-template's electron-suites (virtual display where there
# is none; 0 passed, 2 skipped cases as a warning, else failed with the tail
# of Obsidian's log). Used by the jobs of test-systems.yml that differ only in
# how Obsidian got there, and by beta-local.sh.
cd "$(dirname "$0")/.."
RUN_SUITE=.dev/ci-run.sh VERSION_VAR=OBSIDIAN_VERSION APP_NAME=Obsidian SUITE_LOG='obsidian-%s.log' \
	exec bash node_modules/electron-template/bin/electron-suites.sh
