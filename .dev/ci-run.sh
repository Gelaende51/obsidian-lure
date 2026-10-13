#!/bin/bash
# Runs one suite against a sandboxed Obsidian — what the Test workflow does on
# GitHub's runners, so the suites never need this machine's Obsidian:
# obsidian-toolkit's run-suite, with Lure's neighbours, the plugins only
# test-compat-ui installs, and the start page kept on, all in devkit.config.json.
#
#   .dev/ci-run.sh test-tab                             # latest Obsidian
#   OBSIDIAN_VERSION=earliest .dev/ci-run.sh test-tab   # the manifest's minAppVersion
#
# Exit code is the suite's: 0 passed, 1 failed, 2 a case could not be asked here.
cd "$(dirname "$0")/.."
exec bash node_modules/obsidian-toolkit/bin/run-suite.sh "$@"
