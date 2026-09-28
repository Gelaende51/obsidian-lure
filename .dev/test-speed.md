# Test speed: GitHub's runners against this machine

Appended by `node .dev/test-speed.mjs [run id]`. "Job" adds checkout, npm ci, the build and downloading and starting Obsidian to the suite itself.

## Run 36362893587 — deb1c3a, 2026-09-28 00:37 UTC

| suite | assertions | here (median of last 3) | CI 1.8.7: suite / job | CI latest: suite / job | CI suite ÷ here |
| --- | --- | --- | --- | --- | --- |
| test-blank | — | — | 1:28 / 1:44 | 1:23 / 1:36 | — |
| test-compat | 78 | 1:55 | 21 s / 38 s ✗ | 22 s / 38 s ✗ | 0.2× |
| test-complete | 43 | 2 s | 0 s / 10 s | — | — |
| test-create | 59 | 1:03 | 1:29 / 1:42 | 1:28 / 1:39 | 1.4× |
| test-drop | 46 | 1:13 | 1:31 / 1:44 | 1:26 / 1:40 | 1.2× |
| test-external | 173 | 1:45 | 2:32 / 2:49 | 2:25 / 2:42 | 1.4× |
| test-fit | 70 | 1 s | 0 s / 10 s | — | — |
| test-foldernote | 28 | 52 s | 1:46 / 2:00 ✗ | 1:45 / 2:03 | 2.0× |
| test-gestures | 254 | 6:01 | 6:54 / 7:13 ✗ | 6:45 / 7:02 | 1.1× |
| test-html | 22 | 20 s | 38 s / 50 s | 35 s / 50 s | 1.8× |
| test-navlock | 41 | 1:48 | 1:29 / 1:42 | 1:27 / 1:46 | 0.8× |
| test-rename | 75 | 2:10 | 2:16 / 2:35 | 2:17 / 2:32 | 1.1× |
| test-tab | 342 | 5:21 | 5:06 / 5:21 ✗ | 5:01 / 5:21 ✗ | 0.9× |
| test-urls | 41 | 44 s | 1:14 / 1:26 | 1:12 / 1:26 | 1.7× |

All suites one after another here: **23:14**, with the machine taken while they run. On CI they run side by side: the whole run took **9:13** from start to finish (longest job 7:13), and nothing here was used. ✗ marks a job that failed; its time still counts.
