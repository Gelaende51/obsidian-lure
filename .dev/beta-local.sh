#!/bin/bash
# Obsidian's beta, tested on this machine (obsidian-toolkit's beta-local: a
# memory-capped container, the suites from devkit.config.json, logs in
# .personal/beta-logs/, which git ignores). This wrapper supplies the Insider
# account from .personal/personal.md ("## Obsidian Community", lines "- usr"
# and "- pw", as directory-session.mjs reads it) unless OBSIDIAN_EMAIL /
# OBSIDIAN_PASSWORD are set; it reaches the container through the
# environment only and is never printed.
#
#   .dev/beta-local.sh                       # all suites, when a beta is newer than the release
#   .dev/beta-local.sh test-tab test-links   # just these
#   BETA_FORCE=1 .dev/beta-local.sh test-blank   # run even with no beta out
set -euo pipefail
cd "$(dirname "$0")/.."
if [ -z "${OBSIDIAN_EMAIL:-}" ] || [ -z "${OBSIDIAN_PASSWORD:-}" ]; then
	read_personal() {
		awk -v k="$1" '/^## Obsidian Community/{s=1;next} /^## /{s=0} s && $1=="-" && $2==k {sub(/^[ \t]*- [a-z]+ /,""); sub(/[ \t]+$/,""); printf "%s", $0; exit}' .personal/personal.md
	}
	OBSIDIAN_EMAIL=$(read_personal usr)
	OBSIDIAN_PASSWORD=$(read_personal pw)
fi
export OBSIDIAN_EMAIL OBSIDIAN_PASSWORD
exec bash node_modules/obsidian-toolkit/bin/beta-local.sh "$@"
