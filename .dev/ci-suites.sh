#!/bin/bash
# Runs every suite in $SUITES on every Obsidian version in $VERSIONS through
# ci-run.sh, under a virtual display where there is no real one, and reports
# each as the workflow does: 0 passed, 2 skipped cases (a warning), else failed.
# Used by the jobs of test-systems.yml that differ only in how Obsidian got there.
set +e
cd "$(dirname "$0")/.."
failed=0
for version in ${VERSIONS:-latest}; do
	for suite in ${SUITES:?}; do
		echo "::group::$suite (Obsidian $version)"
		if [ -n "${DISPLAY:-}" ] || [ "$(uname)" = Darwin ] || [ "${OS:-}" = Windows_NT ]; then
			OBSIDIAN_VERSION=$version .dev/ci-run.sh "$suite"
		else
			OBSIDIAN_VERSION=$version xvfb-run -a -s "-screen 0 1920x1080x24" .dev/ci-run.sh "$suite"
		fi
		code=$?
		echo "::endgroup::"
		case $code in
			0) ;;
			2) echo "::warning::$suite ($version) skipped cases" ;;
			*) echo "::error::$suite ($version) failed"; failed=1; tail -30 "obsidian-$suite.log" 2>/dev/null ;;
		esac
	done
done
exit $failed
