/** The one call this plugin makes into picomatch (posix build, no Node dependencies). */
declare module "picomatch/posix" {
	interface PicomatchOptions {
		nocase?: boolean;
		dot?: boolean;
	}
	function picomatch(glob: string, options?: PicomatchOptions): (path: string) => boolean;
	export default picomatch;
}
