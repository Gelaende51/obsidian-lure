@echo off
rem Run by dockur/windows at the end of the unattended install (mounted at
rem /oem, copied to C:\OEM). Installs what the suites need and leaves run.ps1
rem to start at logon: Obsidian needs the desktop session, which this step
rem runs before.
powershell -NoProfile -ExecutionPolicy Bypass -File C:\OEM\setup.ps1 > C:\OEM\setup.log 2>&1
copy /y C:\OEM\setup.log \\host.lan\Data\setup.log
