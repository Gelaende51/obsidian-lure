#!/usr/bin/env node
/**
 * test-compat, for the plugins that draw into or around the note header
 * (the "ui" set in test-compat.mjs). A suite of its own because .dev/ci-run.sh
 * installs these only for it: several patch the workspace when they load and
 * keep part of that after being disabled.
 *
 * Requires the debugging port, like every suite that calls connect().
 */
process.env.LURE_PEER_SET = "ui";
await import("./test-compat.mjs");
