#!/bin/bash
# Releases Lure through the Release workflow, from this machine.
#
#   .dev/release.sh 1.5.2
#
# Before it: the Unreleased entries translated into every changelog as a
# pending section, and the AI-usage figures refreshed and translated
# (node .dev/usage-stats.mjs, then the translated README lines) — the two
# steps that need this machine. This checks the figures and renews the
# directory session, then hands over to obsidian-toolkit's
# obsidian-release-dispatch: the changelog check, a clean tree and HEAD =
# origin/main, the workflow run (tests, changelogs, version files, stamps,
# tag, build, attestation, release, the community directory's steps), and the
# check-release page in the browser when the session secret is missing.
set -eu
cd "$(dirname "$0")/.."
VERSION="${1:?usage: release.sh <x.y.z>}"

if ! node .dev/usage-stats.mjs --check >/dev/null 2>&1; then
	echo "The usage figures are stale: run node .dev/usage-stats.mjs (it writes every README) and commit," >&2
	echo "or RELEASE_STALE_USAGE=1 to release with the figures as they are." >&2
	[ -n "${RELEASE_STALE_USAGE:-}" ] || exit 1
fi
# The workflow's directory steps sign in with a stored session: renew it
# first when this machine keeps one (see .dev/directory-session.mjs).
[ -d "$HOME/.local/share/lure-directory/profile" ] && node .dev/directory-session.mjs

exec bash node_modules/obsidian-toolkit/bin/release-dispatch.sh "$VERSION"
