# Node 24 and Git Bash (portable), then run.ps1 in the Startup folder of every
# user: the VM logs its user in on its own, and the suites need that session.
$ErrorActionPreference = "Stop"
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$ProgressPreference = "SilentlyContinue"

# Into a variable first: Windows PowerShell 5.1 hands a JSON array down the
# pipeline as one object, and filtering that matched the whole list.
$releases = Invoke-RestMethod "https://nodejs.org/dist/index.json"
$node = ($releases | Where-Object { $_.version -like "v24.*" } | Select-Object -First 1).version
Invoke-WebRequest "https://nodejs.org/dist/$node/node-$node-win-x64.zip" -OutFile C:\OEM\node.zip
Expand-Archive C:\OEM\node.zip -DestinationPath C:\tools
Rename-Item "C:\tools\node-$node-win-x64" C:\tools\node

$latest = Invoke-RestMethod "https://api.github.com/repos/git-for-windows/git/releases/latest"
$git = $latest.assets | Where-Object { $_.name -match "^PortableGit-.*-64-bit\.7z\.exe$" } | Select-Object -First 1
Invoke-WebRequest $git.browser_download_url -OutFile C:\OEM\git.exe
Start-Process C:\OEM\git.exe -ArgumentList "-o", "C:\tools\git", "-y" -Wait

$startup = "C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp"
Set-Content "$startup\lure-run.cmd" "powershell -NoProfile -ExecutionPolicy Bypass -File C:\OEM\run.ps1"
"node $node, $($git.name)"
"setup finished"
