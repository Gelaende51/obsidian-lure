#!/bin/bash
# Releases Lure through the Release workflow, from this machine.
#
#   .dev/release.sh 1.5.2
#
# Before it: the Unreleased entries translated into every changelog as a
# pending section, and the AI-usage figures refreshed and translated
# (node .dev/usage-stats.mjs, then the translated README lines) — the two
# steps that need this machine. This checks both, then hands the rest to
# GitHub: tests, changelogs, version files, stamps, tag, build, attestation,
# release. What stays manual is the community directory's "Check for new
# releases" (a browser step, see .claude/rules/publishing.md).
set -eu
cd "$(dirname "$0")/.."
VERSION="${1:?usage: release.sh <x.y.z>}"

node scripts/release.mjs "$VERSION" --check
if ! node .dev/usage-stats.mjs --check >/dev/null 2>&1; then
	echo "The usage figures are stale: run node .dev/usage-stats.mjs and translate the README lines first," >&2
	echo "or RELEASE_STALE_USAGE=1 to release with the figures as they are." >&2
	[ -n "${RELEASE_STALE_USAGE:-}" ] || exit 1
fi
[ -z "$(git status --porcelain -- CHANGELOG.md README.md docs manifest.json package.json versions.json src styles.css)" ] \
	|| { echo "uncommitted changes to released files — commit them first" >&2; exit 1; }
git fetch -q origin main
[ "$(git rev-parse HEAD)" = "$(git rev-parse origin/main)" ] \
	|| { echo "HEAD is not origin/main — push (or pull) first; the workflow releases origin/main" >&2; exit 1; }

# The workflow's directory steps sign in with a stored session: renew it
# first when this machine keeps one (see .dev/directory-session.mjs).
[ -d "$HOME/.local/share/lure-directory/profile" ] && node .dev/directory-session.mjs

started=$(date -u +%Y-%m-%dT%H:%M:%SZ)
gh workflow run release.yml --ref main -f version="$VERSION"
for _ in $(seq 1 30); do
	id=$(gh run list --workflow release.yml --event workflow_dispatch --limit 5 \
		--json databaseId,createdAt --jq "map(select(.createdAt >= \"$started\"))[0].databaseId // empty")
	[ -n "$id" ] && break
	sleep 2
done
[ -n "${id:-}" ] || { echo "the run did not appear" >&2; exit 1; }
echo "run $id: $(gh run view "$id" --json url --jq .url)"
gh run watch "$id" --exit-status --interval 30
git pull -q --ff-only origin main
echo
echo "Released $VERSION: $(gh release view "$VERSION" --json url --jq .url)"
# The directory has no API for this: opening the page in the browser you are
# signed in with is what queues the scan. No credentials leave that browser.
CHECK=https://community.obsidian.md/account/plugins/lure/check-release
# With the OBSIDIAN_COMMUNITY_COOKIE secret set, the workflow queued it already.
if gh secret list | grep -q OBSIDIAN_COMMUNITY_COOKIE; then
	echo "The workflow queued the directory's scan and waited for the listing (see the run's summary)."
elif command -v xdg-open >/dev/null && [ -z "${RELEASE_NO_BROWSER:-}" ]; then
	xdg-open "$CHECK" >/dev/null 2>&1 &
	echo "Opened $CHECK — it queues the directory's scan; waiting for the listing (~5–10 min)."
	node scripts/directory.mjs confirm "$VERSION"
else
	echo "Left: open $CHECK (signed in) to queue the directory's scan."
fi
