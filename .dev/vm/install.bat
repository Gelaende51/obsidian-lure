@echo off
rem Run by dockur/windows at the first logon after the unattended install
rem (mounted at /oem, copied to C:\OEM). Installs what the suites need, then
rem starts run.ps1 in this same session, which has the desktop Obsidian needs.
rem A Startup-folder entry would wait for a next logon that never comes: the
rem first VM run sat idle for two and a half hours that way.
powershell -NoProfile -ExecutionPolicy Bypass -File C:\OEM\setup.ps1 > C:\OEM\setup.log 2>&1
copy /y C:\OEM\setup.log \\host.lan\Data\setup.log
start "lure-run" powershell -NoProfile -ExecutionPolicy Bypass -File C:\OEM\run.ps1
