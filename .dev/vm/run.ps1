# At logon: copies the repository off the shared folder, runs the suites the
# workflow asked for (suites.txt) on both Obsidian versions, and leaves each
# log, the exit codes and done.txt in the shared folder for the host to read.
$share = "\\host.lan\Data"
if (Test-Path "$share\done.txt") { exit }
# Anything that stops this script is said in the shared folder, where the
# host is looking — a failure in here is otherwise four hours of silence.
trap {
	"$_" | Set-Content "$share\run-error.txt"
	Set-Content "$share\done.txt" "failed"
	exit 1
}
"started $(Get-Date -Format s)" | Set-Content "$share\run-started.txt"
$env:Path = "C:\tools\node;C:\tools\git\bin;C:\tools\git\usr\bin;$env:Path"
robocopy "$share\repo" C:\repo /E /XD node_modules .git /NFL /NDL /NJH /NJS | Out-Null
Set-Location C:\repo
npm ci *> "$share\npm.log"
node esbuild.config.mjs production *>> "$share\npm.log"
$suites = (Get-Content "$share\suites.txt").Trim() -split "\s+"
foreach ($version in (Get-Content "$share\versions.txt").Trim() -split "\s+") {
	foreach ($suite in $suites) {
		$env:OBSIDIAN_VERSION = $version
		& C:\tools\git\bin\bash.exe .dev/ci-run.sh $suite *> "$share\$suite-$version.log"
		"$suite $version $LASTEXITCODE" | Add-Content "$share\results.txt"
	}
}
Set-Content "$share\done.txt" "done"
