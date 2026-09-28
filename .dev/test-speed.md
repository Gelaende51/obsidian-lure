# Test speed: GitHub's runners against this machine

Appended by `node .dev/ci-speed.mjs [run id]`. "Job" adds checkout, npm ci, the build and downloading and starting Obsidian to the suite itself.

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

## Run 36364150601 — e2fc596, 2026-09-28 00:58 UTC

| suite | assertions | here (median of last 3) | CI 1.8.7: suite / job | CI latest: suite / job | CI suite ÷ here |
| --- | --- | --- | --- | --- | --- |
| test-blank | — | — | 1:31 / 1:46 | 1:24 / 1:43 | — |
| test-compat | 78 | 1:55 | 1:53 / 2:09 | 2:16 / 2:30 | 1.2× |
| test-complete | 43 | 2 s | 0 s / 13 s | — | — |
| test-create | 59 | 1:03 | 1:30 / 1:47 | 1:27 / 1:39 | 1.4× |
| test-drop | 46 | 1:13 | 1:29 / 1:42 | 1:33 / 1:48 | 1.3× |
| test-external | 173 | 1:45 | 2:26 / 2:50 | 2:20 / 2:34 | 1.3× |
| test-fit | 70 | 1 s | 0 s / 12 s | — | — |
| test-foldernote | 28 | 52 s | 1:45 / 2:00 ✗ | 1:46 / 2:06 | 2.0× |
| test-gestures | 254 | 6:01 | 7:10 / 7:29 ✗ | 6:53 / 7:06 | 1.1× |
| test-html | 22 | 20 s | 38 s / 54 s | 33 s / 46 s | 1.7× |
| test-navlock | 41 | 1:48 | 1:24 / 1:37 | 1:29 / 1:43 | 0.8× |
| test-rename | 75 | 2:10 | 2:18 / 2:35 | 2:10 / 2:24 | 1.0× |
| test-tab | 342 | 5:21 | 5:04 / 5:24 | 5:04 / 5:18 | 0.9× |
| test-urls | 41 | 44 s | 1:15 / 1:28 | 1:16 / 1:37 | 1.7× |

All suites one after another here: **23:14**, with the machine taken while they run. On CI they run side by side: the whole run took **7:42** from start to finish (longest job 7:29), and nothing here was used. ✗ marks a job that failed; its time still counts.

## Run 36365678153 — 4a15fc2, 2026-09-28 01:21 UTC

| suite | assertions | here (median of last 3) | CI 1.8.7: suite / job | CI latest: suite / job | CI suite ÷ here |
| --- | --- | --- | --- | --- | --- |
| test-blank | — | — | 1:21 / 1:34 | 1:30 / 1:54 | — |
| test-compat | 78 | 1:55 | 1:54 / 2:07 | 2:00 / 2:12 | 1.0× |
| test-complete | 43 | 2 s | 0 s / 7 s | — | — |
| test-create | 59 | 1:03 | 1:27 / 1:40 | 1:27 / 1:43 | 1.4× |
| test-drop | 46 | 1:13 | 1:28 / 1:41 | 1:26 / 1:39 | 1.2× |
| test-external | 173 | 1:45 | 2:26 / 2:41 | 2:26 / 2:44 | 1.4× |
| test-fit | 70 | 1 s | 0 s / 9 s | — | — |
| test-foldernote | 28 | 52 s | 1:43 / 1:55 | 1:40 / 1:57 | 1.9× |
| test-gestures | 254 | 6:01 | 6:54 / 7:09 | 6:52 / 7:09 | 1.1× |
| test-html | 22 | 20 s | 34 s / 51 s | 38 s / 52 s | 1.9× |
| test-navlock | 41 | 1:48 | 1:21 / 1:32 | 1:22 / 1:39 | 0.8× |
| test-rename | 75 | 2:10 | 2:11 / 2:23 | 2:12 / 2:26 | 1.0× |
| test-tab | 342 | 5:21 | 5:05 / 5:24 | 4:57 / 5:10 | 0.9× |
| test-urls | 41 | 44 s | 1:13 / 3:16 | 1:10 / 1:27 | 1.6× |

All suites one after another here: **23:14**, with the machine taken while they run. On CI they run side by side: the whole run took **8:09** from start to finish (longest job 7:09), and nothing here was used. ✗ marks a job that failed; its time still counts.
