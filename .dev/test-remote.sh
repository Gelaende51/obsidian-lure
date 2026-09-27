#!/bin/bash
# Runs the suites on GitHub's runners against what is pushed on this branch,
# instead of on this machine, and waits for the result.
#
#   .dev/test-remote.sh                     # every suite, both Obsidian versions
#   .dev/test-remote.sh test-tab test-drop  # just these
#   OBSIDIAN=latest .dev/test-remote.sh test-tab
#
# Tests the pushed commit: push first. Needs the gh CLI, signed in.
set -eu
branch=$(git rev-parse --abbrev-ref HEAD)
if [ -n "$(git log "origin/$branch..HEAD" 2>/dev/null)" ]; then
	echo "unpushed commits on $branch — the runners would test the pushed state; push first" >&2
	exit 1
fi
started=$(date -u +%Y-%m-%dT%H:%M:%SZ)
gh workflow run test.yml --ref "$branch" -f suites="$*" -f obsidian="${OBSIDIAN:-both}"
# The run appears a moment after the dispatch.
for _ in $(seq 1 30); do
	id=$(gh run list --workflow test.yml --branch "$branch" --event workflow_dispatch --limit 5 \
		--json databaseId,createdAt --jq "map(select(.createdAt >= \"$started\"))[0].databaseId // empty")
	[ -n "$id" ] && break
	sleep 2
done
[ -n "${id:-}" ] || { echo "the run did not appear" >&2; exit 1; }
echo "run $id: $(gh run view "$id" --json url --jq .url)"
gh run watch "$id" --exit-status --interval 30
