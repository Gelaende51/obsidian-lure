#!/bin/sh
# What Obsidian (Electron) and the suites need on a bare distribution image,
# for the distro jobs of .github/workflows/test-systems.yml. One branch per
# package manager; names differ, the list is the same: a virtual display,
# Electron's libraries, and the tools ci-run.sh calls (bash, curl, pkill).
set -eu
. /etc/os-release
case "$ID ${ID_LIKE:-}" in
	*debian*|*ubuntu*)
		export DEBIAN_FRONTEND=noninteractive
		apt-get update -q
		apt-get install -y -q bash curl ca-certificates procps xvfb xauth \
			libnss3 libgtk-3-0 libgbm1 libxss1 libxtst6 libatk-bridge2.0-0 libdrm2 libsecret-1-0 \
			libasound2 || apt-get install -y -q libasound2t64
		;;
	*fedora*|*rhel*)
		dnf install -y bash curl procps-ng findutils which xorg-x11-server-Xvfb \
			nss gtk3 mesa-libgbm libXScrnSaver libXtst at-spi2-atk libdrm libsecret alsa-lib
		;;
	*arch*)
		pacman -Syu --noconfirm bash curl procps-ng which xorg-server-xvfb \
			nss gtk3 mesa libxss libxtst at-spi2-core libdrm libsecret alsa-lib
		;;
	*suse*)
		# The image's package lists go stale faster than the mirrors keep old
		# files: install from a fresh list, or half of it is a 404.
		zypper --non-interactive --gpg-auto-import-keys refresh
		zypper --non-interactive install bash curl procps which xorg-x11-server-Xvfb \
			mozilla-nss libgtk-3-0 libgbm1 libXss1 libXtst6 at-spi2-core libdrm2 libsecret-1-0 alsa
		;;
	*)
		echo "no package list for $ID" >&2
		exit 1
		;;
esac
