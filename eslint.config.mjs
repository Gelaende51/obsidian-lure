/**
 * The same rules the community-plugin submission bot runs, so its findings
 * can be reproduced here rather than discovered after a release.
 *
 * `projectService` gives the type-aware rules a real programme to work from.
 * That matters more than it looks: without Node's types resolved, every value
 * from `fs`, `path` and `os` degrades to `any`, and the type-aware rules then
 * report a flood of "unsafe call/assignment/return" findings against code that
 * is in fact fully typed.
 */
import tseslint from "typescript-eslint";
import obsidianmd from "eslint-plugin-obsidianmd";

export default tseslint.config(
	...obsidianmd.configs.recommended,
	{
		languageOptions: {
			parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname },
		},
	},
	{
		// no-undef is a JavaScript rule: on TypeScript it re-implements the
		// checker's job and gets it wrong for ambient declarations, where the
		// imported names are in scope for the compiler but not for eslint.
		files: ["**/*.d.ts"],
		rules: { "no-undef": "off" },
	},
	{
		ignores: ["main.js", "node_modules/**", ".dev/**", "scripts/**", "esbuild.config.mjs"],
	},
);
