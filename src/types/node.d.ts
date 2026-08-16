/**
 * The plugin's entire Node.js surface, declared rather than pulled in.
 *
 * Two reasons, one practical and one substantive.
 *
 * The practical one: the community-plugin review lints with type information
 * but without `@types/node` resolvable. Everything coming out of `readdirSync`
 * or `join` then degrades to `any`, and each use of it trips a type-aware
 * rule — 141 findings on a scorecard, none of them real. Declaring the surface
 * in the repository means the review sees the same types a contributor does.
 *
 * The substantive one: this plugin reads and writes files outside the vault,
 * which is the thing a reviewer should be most sceptical about. Eighteen
 * functions in one file is an inventory of everything it is *able* to do —
 * cheaper to audit than a promise in a README, and it fails the build if the
 * surface grows without someone adding it here.
 *
 * These are deliberately narrower than the real signatures: only the calls
 * this plugin makes. `readFileSync` is declared for `"utf8"` alone, so an
 * un-encoded call is a compile error rather than a silent `Buffer`; likewise
 * `readdirSync` exists only in its `withFileTypes` form.
 */

/** Node's Buffer, reduced to the three things this plugin does with one. */
interface NodeBuffer extends Uint8Array {
	toString(encoding?: string): string;
	subarray(begin?: number, end?: number): NodeBuffer;
}

declare namespace NodeJS {
	interface ErrnoException extends Error {
		code?: string;
	}
	interface ProcessEnv {
		[key: string]: string | undefined;
	}
	interface Process {
		env: ProcessEnv;
	}
}

declare const process: NodeJS.Process;

declare module "fs" {
	/** One entry from a `withFileTypes` listing. */
	export class Dirent {
		name: string;
		isDirectory(): boolean;
		isSymbolicLink(): boolean;
	}

	export interface Stats {
		isDirectory(): boolean;
		isFile(): boolean;
	}

	export const constants: {
		/** Fail rather than overwrite — the whole basis of the copy guard. */
		readonly COPYFILE_EXCL: number;
		/** Existence check only; no read, write or execute permission implied. */
		readonly F_OK: number;
	};

	export function readdirSync(
		path: string,
		options: { withFileTypes: true; encoding?: "utf8" },
	): Dirent[];
	export function statSync(path: string): Stats;
	export function existsSync(path: string): boolean;
	export function readFileSync(path: string, encoding: "utf8"): string;
}

declare module "fs/promises" {
	export function access(path: string, mode?: number): Promise<void>;
	export function copyFile(src: string, dest: string, mode?: number): Promise<void>;
	export function mkdir(path: string, options?: { recursive?: boolean }): Promise<string | undefined>;
	export function readFile(path: string): Promise<NodeBuffer>;
	/** `withFileTypes` only, matching readdirSync above: an entry's kind is never guessed from its name. */
	export function readdir(
		path: string,
		options: { withFileTypes: true; encoding?: "utf8" },
	): Promise<import("fs").Dirent[]>;
	export function rename(oldPath: string, newPath: string): Promise<void>;
	export function unlink(path: string): Promise<void>;
	export function writeFile(
		path: string,
		data: string,
		options?: "utf8" | { flag?: string; encoding?: "utf8" },
	): Promise<void>;
}

declare module "path" {
	export interface ParsedPath {
		root: string;
		dir: string;
		base: string;
		ext: string;
		name: string;
	}
	export function join(...paths: string[]): string;
	export function basename(path: string, suffix?: string): string;
	export function parse(path: string): ParsedPath;
	export function dirname(path: string): string;
	export const sep: string;
}

declare module "os" {
	export function homedir(): string;
	export function platform(): string;
}
