#!/bin/bash
# Obsidian's beta, tested on this machine instead of on GitHub: the repository
# is public, so its Actions logs are, and early-access builds are not to be
# reported in public. Same scripts as the CI jobs (ci-distro-deps.sh,
# ci-suites.sh), in a Debian container, one suite after another.
#
#   .dev/beta-local.sh                       # the suites below, when a beta is newer than the release
#   .dev/beta-local.sh test-tab test-links   # just these
#   BETA_FORCE=1 .dev/beta-local.sh test-blank   # run even with no beta out (to try the setup)
#
# The Insider account is read from .personal/personal.md ("## Obsidian
# Community" section, lines "- usr" and "- pw", as directory-session.mjs reads
# it) or from OBSIDIAN_EMAIL / OBSIDIAN_PASSWORD if set; it is handed to the
# container through the environment, never on a command line, and never
# printed. Logs go to .personal/beta-logs/<date>/, which git ignores.
set -euo pipefail
cd "$(dirname "$0")/.."

SUITES="${*:-test-blank test-additions test-create test-drop test-external test-glob test-tab test-urls test-html test-links test-rename test-gestures test-navlock test-keyleak test-compat test-compat-ui test-foldernote}"
LOGS=".personal/beta-logs/$(date +%F-%H%M)"
mkdir -p "$LOGS"

if [ -z "${OBSIDIAN_EMAIL:-}" ] || [ -z "${OBSIDIAN_PASSWORD:-}" ]; then
	read_personal() {
		awk -v k="$1" '/^## Obsidian Community/{s=1;next} /^## /{s=0} s && $1=="-" && $2==k {sub(/^[ \t]*- [a-z]+ /,""); sub(/[ \t]+$/,""); printf "%s", $0; exit}' .personal/personal.md
	}
	OBSIDIAN_EMAIL=$(read_personal usr)
	OBSIDIAN_PASSWORD=$(read_personal pw)
fi
[ -n "$OBSIDIAN_EMAIL" ] && [ -n "$OBSIDIAN_PASSWORD" ] || { echo "no Insider credentials (personal.md or OBSIDIAN_EMAIL/OBSIDIAN_PASSWORD)" >&2; exit 1; }
export OBSIDIAN_EMAIL OBSIDIAN_PASSWORD

# Docker if its daemon runs, else Podman (no daemon, rootless).
if docker info >/dev/null 2>&1; then engine=docker; elif command -v podman >/dev/null; then engine=podman; else echo "neither docker nor podman" >&2; exit 1; fi

# One Obsidian at a time and a ceiling on memory: this machine has little.
"$engine" run --rm --memory=3g --shm-size=1g \
	-e OBSIDIAN_EMAIL -e OBSIDIAN_PASSWORD -e SUITES="$SUITES" -e BETA_FORCE="${BETA_FORCE:-}" \
	-v "$PWD:/src:ro" -v "$PWD/$LOGS:/logs" \
	docker.io/library/node:24-bookworm bash -c '
		set -e
		mkdir /repo && tar -C /src --exclude=./node_modules --exclude=./.personal --exclude=./.git -cf - . | tar -C /repo -xf - && cd /repo
		sh .dev/ci-distro-deps.sh >/logs/setup.log 2>&1
		npm ci >>/logs/setup.log 2>&1 && node esbuild.config.mjs production >>/logs/setup.log 2>&1
		npm install --no-save --no-package-lock obsidian-launcher@3 >>/logs/setup.log 2>&1
		read -r beta stable < <(node --input-type=module -e "const { default: L } = await import(\"obsidian-launcher\"); const l = new L(); const [b] = await l.resolveVersion(\"latest-beta\"); const [s] = await l.resolveVersion(\"latest\"); console.log(b + \" \" + s);")
		echo "beta $beta, release $stable" | tee /logs/versions.txt
		if [ "$beta" = "$stable" ] && [ -z "$BETA_FORCE" ]; then echo "no beta newer than $stable: nothing to test"; exit 0; fi
		VERSIONS=latest-beta OBSIDIAN_EXTRA_ARGS=--no-sandbox bash .dev/ci-suites.sh 2>&1 | tee /logs/suites.log
		cp obsidian-*.log /logs/ 2>/dev/null || true
	' 2>&1 | tee "$LOGS/run.log"
# What was tested, for .dev/beta-pending.mjs: the beta the launcher resolved,
# and whether the suites passed. Not when there was nothing to test.
if [ -f "$LOGS/suites.log" ]; then
	version=$(awk '/^beta /{print $2}' "$LOGS/versions.txt" | tr -d ,)
	failed=$(grep -c "::error::" "$LOGS/suites.log" || true)
	printf '{"version": "%s", "at": "%s", "failedSuites": %s, "logs": "%s"}\n' "$version" "$(date -Iseconds)" "${failed:-0}" "$LOGS" > .personal/beta-logs/tested.json
fi
echo "logs: $LOGS"
