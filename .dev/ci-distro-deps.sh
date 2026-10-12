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
		apt-get install -y -q bash curl ca-certificates procps xvfb xauth fontconfig fonts-dejavu-core
		# Newer releases (sid, Ubuntu's devel) renamed several libraries with a
		# t64 suffix: one at a time, the old name first, so one rename does not
		# take the whole list down with it.
		for lib in libnss3 libgtk-3-0 libgbm1 libxss1 libxtst6 libatk-bridge2.0-0 libdrm2 libsecret-1-0 libasound2; do
			apt-get install -y -q "$lib" >/dev/null 2>&1 || apt-get install -y -q "${lib}t64"
		done
		;;
	*fedora*|*rhel*)
		dnf install -y bash curl procps-ng findutils which xorg-x11-server-Xvfb \
			nss gtk3 mesa-libgbm libXScrnSaver libXtst at-spi2-atk libdrm libsecret alsa-lib fontconfig dejavu-sans-fonts
		;;
	*arch*)
		pacman -Syu --noconfirm bash curl procps-ng which xorg-server-xvfb \
			nss gtk3 mesa libxss libxtst at-spi2-core libdrm libsecret alsa-lib fontconfig ttf-dejavu
		;;
	*suse*)
		# The image's package lists go stale faster than the mirrors keep old
		# files: install from a fresh list, or half of it is a 404.
		zypper --non-interactive --gpg-auto-import-keys refresh
		# bash-sh: the slim image's /bin/sh is busybox's, which these
		# packages push out — without it the next step has no shell at all.
		zypper --non-interactive install bash bash-sh curl procps which xorg-x11-server-Xvfb \
			mozilla-nss libgtk-3-0 libgbm1 libXss1 libXtst6 at-spi2-core libdrm2 libsecret-1-0 alsa fontconfig dejavu-fonts
		;;
	*)
		echo "no package list for $ID" >&2
		exit 1
		;;
esac
# A font, and fontconfig knowing it: with none, text is laid out with no height
# (openSUSE's and FreeBSD's bare images), and a long textarea has nothing to scroll.
command -v fc-cache >/dev/null && fc-cache -f >/dev/null 2>&1
fc-list 2>/dev/null | head -1 || echo "no fonts found" >&2
