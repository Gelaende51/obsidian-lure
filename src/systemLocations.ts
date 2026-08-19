import { existsSync, readFileSync, readdirSync } from "fs";
import { homedir, platform } from "os";
import { join, parse } from "path";

/**
 * Places the vault-root dropdown can jump to. Everything here is an
 * absolute filesystem path, and everything except `kind: "vault"` on the
 * open vault is outside it — see PathBreadcrumb's external mode.
 */
export type LocationKind = "vault" | "home" | "root" | "drive";

/**
 * Only what can be worked out without spawning anything. Windows drives
 * always come back "unknown": classifying them needs WMI or PowerShell,
 * which costs a subprocess per dropdown and is deliberately deferred.
 */
export type DeviceType = "hdd" | "usb" | "optical" | "floppy" | "network" | "unknown";

export interface SystemLocation {
	/** Display text. Short forms ("~", "/") are chosen by the caller. */
	label: string;
	/** Absolute filesystem path. */
	path: string;
	kind: LocationKind;
	device: DeviceType;
	/** The vault this window has open — reachable, but never "external". */
	isCurrentVault: boolean;
}

/** Lucide icon per device type, with a fallback the caller applies if one is missing. */
export const DEVICE_ICONS: Record<DeviceType, string> = {
	hdd: "hard-drive",
	usb: "usb",
	optical: "disc",
	floppy: "save",
	network: "network",
	unknown: "hard-drive",
};

/**
 * Icons this plugin has to draw itself, as SVG path data on Lucide's own
 * 24×24 grid.
 *
 * `~` names the home folder in every shell there is, and Lucide has no
 * tilde. Drawing it as a text character would work, but it would be the one
 * mark in the row that isn't a stroked SVG: it wouldn't take the icon
 * sizing, wouldn't match the 2px stroke beside it, and would shift with the
 * theme's font. One symmetric wave, ends level, 4px margins like most of
 * the set — see applyIcon.
 */
export const GLYPH_ICONS: Record<string, string> = {
	tilde: "M4 12q4-5 8 0t8 0",
};

export const LOCATION_ICONS: Record<LocationKind, string> = {
	// Obsidian's own icon for a vault — it uses this one for "Copy vault
	// path" and the vault commands, so the dropdown names them the way the
	// rest of the app does.
	vault: "vault",
	home: "tilde",
	// Not a plain "folder": the filesystem root is a jump target in a
	// dropdown of jump targets, and drawing it as an ordinary folder made it
	// read as one more directory among the drives. `applyIcon` falls back to
	// a folder where Obsidian's Lucide subset predates this name.
	root: "folder-root",
	drive: "hard-drive",
};

/**
 * The vault this window has open. Not the same as `LOCATION_ICONS.vault`,
 * which marks the *other* vaults: this one is where the row starts from by
 * default, which is what the house says.
 */
export const CURRENT_VAULT_ICON = "home";

/** Not real storage — listing them would bury the handful of mounts that matter. */
const PSEUDO_FILESYSTEMS = new Set([
	"autofs", "bpf", "binfmt_misc", "cgroup", "cgroup2", "configfs", "debugfs",
	"devpts", "devtmpfs", "efivarfs", "fusectl", "hugetlbfs", "mqueue", "nsfs",
	"proc", "pstore", "ramfs", "rpc_pipefs", "securityfs", "selinuxfs", "sysfs",
	"tmpfs", "tracefs",
]);

const NETWORK_FILESYSTEMS = new Set([
	"nfs", "nfs4", "cifs", "smb", "smbfs", "smb3", "afs", "afp", "davfs",
	"fuse.sshfs", "fuse.davfs", "fuse.gvfsd-fuse", "fuse.rclone", "9p",
]);

const OPTICAL_FILESYSTEMS = new Set(["iso9660", "udf"]);

/**
 * Where Obsidian keeps obsidian.json, which is the only record of which
 * vaults exist. Undocumented, so every read of it is best-effort.
 */
function obsidianConfigDir(): string | null {
	const home = homedir();
	switch (platform()) {
		case "win32": {
			const appData = process.env.APPDATA;
			return appData ? join(appData, "obsidian") : null;
		}
		case "darwin":
			return join(home, "Library", "Application Support", "obsidian");
		default:
			return join(home, ".config", "obsidian");
	}
}

/**
 * Every vault Obsidian knows about, most recently opened first.
 *
 * Reads Obsidian's own registry rather than offering a folder picker: the
 * point of the dropdown is to reach the vaults you actually use, and this
 * is the same list the vault switcher shows. Any failure — file missing,
 * unreadable, or a shape we don't recognise — yields an empty list, which
 * simply means the dropdown falls back to home/root/drives.
 */
export function listVaults(currentVaultPath: string): SystemLocation[] {
	const dir = obsidianConfigDir();
	if (!dir) return [];

	let parsed: unknown;
	try {
		parsed = JSON.parse(readFileSync(join(dir, "obsidian.json"), "utf8"));
	} catch {
		return [];
	}

	const vaults = (parsed as { vaults?: Record<string, { path?: string; ts?: number }> })?.vaults;
	if (!vaults || typeof vaults !== "object") return [];

	return Object.values(vaults)
		.filter((entry): entry is { path: string; ts?: number } => typeof entry?.path === "string")
		.sort((a, b) => (b.ts ?? 0) - (a.ts ?? 0))
		.map((entry) => ({
			label: parse(entry.path).base || entry.path,
			path: entry.path,
			kind: "vault" as const,
			device: "unknown" as const,
			isCurrentVault: samePath(entry.path, currentVaultPath),
		}));
}

/**
 * Strips a partition suffix to get the block device a mount sits on:
 * "/dev/sda1" -> "sda", "/dev/nvme0n1p2" -> "nvme0n1". Used only to look
 * up the removable flag, so a wrong guess just costs a generic icon.
 */
function blockDeviceName(devicePath: string): string | null {
	if (!devicePath.startsWith("/dev/")) return null;
	const name = devicePath.slice("/dev/".length);
	if (/^nvme\d+n\d+p\d+$/.test(name)) return name.replace(/p\d+$/, "");
	if (/^mmcblk\d+p\d+$/.test(name)) return name.replace(/p\d+$/, "");
	return name.replace(/\d+$/, "");
}

function linuxDeviceType(devicePath: string, fsType: string): DeviceType {
	if (NETWORK_FILESYSTEMS.has(fsType) || fsType.startsWith("fuse.")) return "network";
	if (OPTICAL_FILESYSTEMS.has(fsType) || devicePath.startsWith("/dev/sr")) return "optical";
	if (devicePath.startsWith("/dev/fd")) return "floppy";

	const block = blockDeviceName(devicePath);
	if (!block) return "unknown";
	try {
		// One tiny sysfs read, no subprocess — the whole reason type
		// detection is affordable at all on Linux.
		if (readFileSync(`/sys/block/${block}/removable`, "utf8").trim() === "1") return "usb";
	} catch {
		return "hdd";
	}
	return "hdd";
}

/** /proc/mounts octal-escapes the characters that would otherwise break its own field split. */
function unescapeMountPath(value: string): string {
	return value.replace(/\\(\d{3})/g, (_, code: string) => String.fromCharCode(parseInt(code, 8)));
}

function listLinuxMounts(): SystemLocation[] {
	let contents: string;
	try {
		contents = readFileSync("/proc/mounts", "utf8");
	} catch {
		return [];
	}

	const seen = new Set<string>();
	const mounts: SystemLocation[] = [];

	for (const line of contents.split("\n")) {
		const [device, rawMount, fsType] = line.split(" ");
		if (!device || !rawMount || !fsType) continue;
		if (PSEUDO_FILESYSTEMS.has(fsType)) continue;

		const mountPath = unescapeMountPath(rawMount);
		// "/" is offered separately as the root entry, and a mount point
		// can legitimately appear twice (bind mounts, overlays).
		if (mountPath === "/" || seen.has(mountPath)) continue;
		// Session runtime plumbing (gvfs, portal document store) — never
		// somewhere to browse. Deliberately narrower than all of /run,
		// because /run/media/<user>/... is where removable media lands.
		if (/^\/run\/user\/\d+\//.test(mountPath)) continue;
		seen.add(mountPath);

		mounts.push({
			label: `${parse(mountPath).base || mountPath}`,
			path: mountPath,
			kind: "drive",
			device: linuxDeviceType(device, fsType),
			isCurrentVault: false,
		});
	}

	return mounts;
}

function listMacVolumes(): SystemLocation[] {
	try {
		return readdirSync("/Volumes", { withFileTypes: true })
			.filter((entry) => entry.isDirectory() || entry.isSymbolicLink())
			.map((entry) => ({
				label: entry.name,
				path: join("/Volumes", entry.name),
				kind: "drive" as const,
				device: "unknown" as const,
				isCurrentVault: false,
			}));
	} catch {
		return [];
	}
}

/**
 * Probes A: through Z: for existence. Volume names and device types need
 * WMI, which is the deliberately deferred half of this feature — so a
 * drive shows as "C:" with a generic icon.
 */
function listWindowsDrives(): SystemLocation[] {
	const drives: SystemLocation[] = [];
	for (let code = "A".charCodeAt(0); code <= "Z".charCodeAt(0); code++) {
		const letter = String.fromCharCode(code);
		const root = `${letter}:\\`;
		try {
			if (existsSync(root)) {
				drives.push({
					label: `${letter}:`,
					path: root,
					kind: "drive",
					device: "unknown",
					isCurrentVault: false,
				});
			}
		} catch {
			// An empty optical drive can throw rather than return false.
		}
	}
	return drives;
}

/**
 * The icon a location is drawn with, in the dropdown and as the leading
 * breadcrumb segment. Single source of truth so the two never disagree.
 *
 * The vault you already have open takes the house rather than the generic
 * vault icon — it's the place the row starts from by default, and it's the
 * same icon the root segment shows when the vault name is hidden, so the
 * two readings stay consistent.
 */
export function iconFor(location: SystemLocation): string {
	if (location.isCurrentVault) return CURRENT_VAULT_ICON;
	if (location.kind === "drive") return DEVICE_ICONS[location.device];
	return LOCATION_ICONS[location.kind];
}

/**
 * Obsidian bundles a subset of Lucide, and which names are present varies
 * by version — setIcon on a missing one silently renders nothing. Falling
 * back keeps rows visually aligned rather than leaving holes.
 *
 * Names in GLYPH_ICONS are drawn from our own path data instead, as an SVG
 * built with the attributes Lucide's own icons carry — so an icon Lucide
 * doesn't have still sizes, strokes and recolours like one that it does.
 *
 * Takes setIcon as an argument so this module stays free of the obsidian
 * import and remains testable as plain Node code.
 */
export function applyIcon(
	setIcon: (el: HTMLElement, name: string) => void,
	el: HTMLElement,
	name: string,
	fallback: string,
): void {
	const glyph = GLYPH_ICONS[name];
	if (glyph) {
		drawGlyphIcon(el, glyph);
		return;
	}
	setIcon(el, name);
	if (!el.querySelector("svg")) setIcon(el, fallback);
}

const SVG_NS = "http://www.w3.org/2000/svg";

/** Lucide's own attribute set, so a hand-drawn icon is indistinguishable from a bundled one. */
const LUCIDE_SVG_ATTRS: Record<string, string> = {
	class: "svg-icon lure-glyph-icon",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"stroke-linecap": "round",
	"stroke-linejoin": "round",
};

function drawGlyphIcon(el: HTMLElement, pathData: string): void {
	const svg = document.createElementNS(SVG_NS, "svg");
	for (const [name, value] of Object.entries(LUCIDE_SVG_ATTRS)) svg.setAttribute(name, value);
	const path = document.createElementNS(SVG_NS, "path");
	path.setAttribute("d", pathData);
	svg.appendChild(path);

	el.textContent = "";
	el.appendChild(svg);
}

/** True for paths that name the same place, allowing for a trailing separator and Windows' case-insensitivity. */
export function samePath(a: string, b: string): boolean {
	const normalize = (value: string) => {
		const trimmed = value.replace(/[\\/]+$/, "") || value;
		return platform() === "win32" ? trimmed.toLowerCase().replace(/\//g, "\\") : trimmed;
	};
	return normalize(a) === normalize(b);
}

/** True when `child` is inside `parent` (or is `parent`). */
export function isInside(child: string, parent: string): boolean {
	if (samePath(child, parent)) return true;
	const sep = platform() === "win32" ? "\\" : "/";
	const base = parent.replace(/[\\/]+$/, "") + sep;
	const value = platform() === "win32" ? child.toLowerCase() : child;
	const prefix = platform() === "win32" ? base.toLowerCase() : base;
	return value.startsWith(prefix);
}

/**
 * Everything the vault-root dropdown offers: known vaults first (they're
 * what the gesture is mostly for), then home and the filesystem root,
 * then whatever else is mounted.
 *
 * Home keeps the account name it has on disk; what marks it as home is its
 * "~" icon, not a substituted label. The root entry is labelled "root" —
 * untranslated, because that is its name on every system rather than a word
 * being used descriptively — and not "/", since the segment is already
 * followed by a separator and the two would read as one empty step.
 */
export function listSystemLocations(currentVaultPath: string): SystemLocation[] {
	const home = homedir();
	const isWindows = platform() === "win32";
	const rootPath = isWindows ? parse(home).root : "/";

	const anchors: SystemLocation[] = [
		{
			label: parse(home).base || home,
			path: home,
			kind: "home",
			device: "unknown",
			isCurrentVault: false,
		},
		{
			label: "root",
			path: rootPath,
			kind: "root",
			device: "unknown",
			isCurrentVault: false,
		},
	];

	const mounts = isWindows
		? listWindowsDrives()
		: platform() === "darwin"
			? listMacVolumes()
			: listLinuxMounts();

	return [
		...listVaults(currentVaultPath),
		...anchors,
		// The root entry already covers whichever drive holds it.
		...mounts.filter((mount) => !samePath(mount.path, rootPath)),
	];
}
