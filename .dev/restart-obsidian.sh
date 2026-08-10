#!/bin/bash
# Restarts Obsidian and waits for the DevTools port to answer.
#
# The renderer can be killed outright by a bad render (see .dev/takeaways.md
# on the text cap), and a debugging session then needs it back without a
# human at the keyboard.
set -u

LOG="${1:-/tmp/lure-obsidian.log}"

pkill -f "obsidian/app.asar" 2>/dev/null
for _ in $(seq 1 20); do
	pgrep -f "obsidian/app.asar" >/dev/null || break
	sleep 0.5
done

setsid /usr/bin/obsidian >"$LOG" 2>&1 </dev/null &
disown

for _ in $(seq 1 60); do
	if curl -s --max-time 1 http://127.0.0.1:9222/json/version >/dev/null 2>&1; then
		# The port answers before the vault is loaded; wait for a page target.
		if curl -s --max-time 1 http://127.0.0.1:9222/json/list | grep -q '"type": *"page"'; then
			echo "ready"
			exit 0
		fi
	fi
	sleep 1
done

echo "timed out waiting for Obsidian" >&2
exit 1
