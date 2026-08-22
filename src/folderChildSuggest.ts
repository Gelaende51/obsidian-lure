import { AbstractInputSuggest, App, TAbstractFile, TFile, TFolder, setIcon } from "obsidian";
import { wireNativeFileItem } from "./nativeFileItem";
import { SystemLocation, applyIcon, iconFor } from "./systemLocations";
import { ExternalChild, externalJoin, listExternalChildren } from "./externalFs";
import { isMarkdownExtension } from "./fileKinds";
import { t } from "./lang";

export interface PathSuggestion {
	/** Text shown in the list. */
	label: string;
	kind: "folder" | "file" | "keep-name" | "location" | "more";
	/** Folder path for "folder"; full target file path for "file"/"keep-name"; absolute path for "location". */
	path: string;
	/** Rendered greyed out to mark the name as already taken; still selectable. */
	disabled: boolean;
	/** Lucide icon, on entries that carry one (locations, and children outside the vault). */
	icon?: string;
	/** True for entries that name something outside the vault, which can't be dragged or context-menued. */
	external?: boolean;
	/** Text file Obsidian has no view for — tinted as a caution before you commit to opening it. */
	warn?: boolean;
	/** A note — tinted so the files Obsidian actually opens as notes stand out from the rest. */
	markdown?: boolean;
	/** Where you already are — this bar's own note, or the folder it is standing in — tinted to say so. */
	current?: boolean;
}

export interface SuggestContext {
	/** Folder whose direct children are being listed. */
	folderPath: string;
	/**
	 * Jump targets to list *instead of* any folder's children — set while
	 * the vault-root dropdown is open. Vaults, home, root and mounts.
	 */
	locations: SystemLocation[] | null;
	/**
	 * Absolute filesystem path to list children of, instead of reading the
	 * vault. Set once browsing has left the open vault.
	 */
	externalFolder: string | null;
	/** Rename/move mode: existing files can't be overwritten, and the current name is offered. */
	renameMode: boolean;
	/** Current file's name, offered as a "move here, keep this name" entry in rename mode. */
	keepName: string | null;
	/**
	 * Where that file currently lives. A file never conflicts with itself,
	 * so this is what tells the taken-name checks to ignore one entry.
	 */
	keepPath: string | null;
	/**
	 * The path bar's own note, marked in the listing so browsing back to
	 * the folder you started in says so. Per leaf rather than per window:
	 * this bar belongs to one tab, and that tab's note is the one "here"
	 * means. Null while the bar has no file.
	 */
	currentPath: string | null;
	/**
	 * The folder the row is standing in. Marked the same way the note is,
	 * and for the same reason: a folder click lists the folder's *parent*,
	 * so the one you are in is a row among its siblings and there is
	 * otherwise nothing to say which of them you came from.
	 */
	currentFolder: string | null;
	/**
	 * Whether a child should appear in the list at all. Purely a display
	 * filter — hidden entries still occupy their name, so overwrite
	 * protection is unaffected by it.
	 */
	shouldList: (child: TAbstractFile) => boolean;
	/** Same display filter for entries outside the vault, which have no TAbstractFile. */
	shouldListExternal: (child: ExternalChild) => boolean;
	/** Whether an extension is a text type Obsidian has no view for — tinted as a caution. */
	warnsOnOpen: (extension: string) => boolean;
	/**
	 * Filters the listing in place of the input's own text when set.
	 * A delimiter click prefills the input with the rest of the path and
	 * selects it, which is about to be typed over — filtering by it would
	 * empty the very dropdown the click opened, so "" is passed until the
	 * first real keystroke and the folder stays fully listed.
	 */
	queryOverride: string | null;
	/**
	 * The completion standing in the field, so each row can show the part of
	 * itself that taking it would add: how many characters were typed, and
	 * the whole opening the names agree on. Null when nothing is offered.
	 */
	offered: { typedLength: number; prefix: string } | null;
	/**
	 * The row the list should open on: the file this bar is showing, or the
	 * folder it is standing in when the listing is that folder's parent.
	 *
	 * Obsidian's suggester always opens on the first entry, which in a
	 * folder of two hundred notes is nowhere near where you are. Null when
	 * nothing in the list is "here".
	 */
	preselectPath: string | null;
}

/**
 * The list object Obsidian keeps behind the popover.
 *
 * Not in the public typings, which is why every use of it is guarded and
 * why nothing here does more than read the selected index and move it. The
 * two calls that matter are documented at their use sites.
 */
interface SuggestionList {
	selectedItem: number;
	/** The rows behind the popover, in the order they are shown. Read to find the highlighted one. */
	values?: PathSuggestion[];
	containerEl?: HTMLElement;
	setSelectedItem(index: number, evt: unknown): void;
	forceSetSelectedItem(index: number, evt: unknown): void;
}

/**
 * Whether a name belongs in a listing.
 *
 * The dropdown and Tab want different answers from the same folder — the
 * dropdown searches (substring), completion extends (prefix) — so the rule
 * is the parameter and the listing is shared.
 */
type NameMatcher = (name: string) => boolean;

/**
 * Obsidian's own fallback when a suggester doesn't set `limit`. Used only
 * to size our own overflow row, so it stays right even if that default
 * changes: the real limit is read off the instance.
 */
const DEFAULT_SUGGESTION_LIMIT = 100;

/**
 * Type-ahead suggestions for the direct children of a folder that's
 * resolved fresh on every query, so the same suggester keeps working
 * as the user drills through the breadcrumb trail.
 */
export class FolderChildSuggest extends AbstractInputSuggest<PathSuggestion> {
	/** Kept so dragging an entry can hold the popover open — see wireNativeFileItem. */
	private readonly dragKeepFocusEl: HTMLInputElement;
	/** Index of the entry the list should open on, worked out while building it. */
	private preselectIndex = -1;
	/** Guards the re-selection below against answering its own call. */
	private preselecting = false;
	/** Set once the list has been wrapped for the "up past the top" gesture. */
	private wrapped = false;
	/** What the listing was last filtered by, lowercased — the run to mark in each row. */
	private lastQuery = "";
	/** What the field was offering when the listing was built — the run to underline in each row. */
	private lastOffer: { typedLength: number; prefix: string } | null = null;
	/**
	 * The row the list is on when the pointer is not what put it there, and
	 * whether that row had written itself into the field.
	 *
	 * Hovering is a way of looking, not of choosing, so taking the pointer
	 * off the list gives the highlight back to whatever had it before the
	 * mouse arrived — the row you arrowed to, or the one the list opened on
	 * because it is where you already are.
	 */
	private kept: { index: number; previewed: boolean } = { index: -1, previewed: false };
	/** Guards the restore below against previewing a row that never previewed. */
	private restoring = false;

	constructor(
		app: App,
		inputEl: HTMLInputElement,
		private getContext: () => SuggestContext,
		/**
		 * Opens the menu for a row that names something outside the vault.
		 * Injected because building that menu needs the plugin and the leaf,
		 * neither of which a suggester has any other business knowing.
		 */
		private onExternalContextMenu?: (evt: MouseEvent, path: string, isFolder: boolean) => void,
		/**
		 * Shows what landing on an entry would mean, in the field itself —
		 * the address-bar gesture. Null means "back to what was typed".
		 * The path bar owns the input and the query, so it does the writing.
		 */
		private onPreview?: (value: PathSuggestion | null) => void,
	) {
		super(app, inputEl);
		this.dragKeepFocusEl = inputEl;
	}

	/**
	 * Obsidian calls this whenever the highlighted row changes, with the
	 * event that caused it — and with `null` for the selection it makes
	 * itself when a list is rendered. That distinction is the whole hook:
	 * a *user* moving through the list previews into the field, while the
	 * list simply appearing must not overwrite what is being typed.
	 */
	onSelectedChange(value: PathSuggestion | undefined, evt: unknown): void {
		this.wrapList();
		if (this.preselecting) return;
		if (this.restoring) {
			// The pointer has left, and the row it is handing the highlight
			// back to is one that never wrote itself into the field. So the
			// field goes back to what was typed rather than taking that
			// row's name — the highlight moves, the text does not.
			this.onPreview?.(null);
			return;
		}
		if (!evt) {
			// Whichever row the list settles on here is the one it opened
			// on, and the one the pointer has to give back when it leaves.
			this.kept = { index: Math.max(this.preselectIndex, 0), previewed: false };
			// Nothing to open on — which is what typing leaves, since the row
			// you were standing in is no longer what the list is about. Rest
			// at nothing rather than on whichever row happens to sort first:
			// a highlight nobody put there reads as a choice already made,
			// and Enter would act on it.
			if (this.preselectIndex < 0) {
				this.preselecting = true;
				try {
					this.list()?.forceSetSelectedItem(-1, null);
				} finally {
					this.preselecting = false;
				}
				return;
			}
			// The list has just been rendered and opened on its first row.
			// Move it to where the user actually is, once.
			if (this.preselectIndex > 0) {
				this.preselecting = true;
				try {
					this.list()?.setSelectedItem(this.preselectIndex, null);
				} finally {
					this.preselecting = false;
				}
			}
			return;
		}
		// The overflow row is a count, not a destination; previewing it would
		// put a sentence in the field.
		this.onPreview?.(value && value.kind !== "more" ? value : null);
	}

	/**
	 * Makes moving up off the first row let go of the list instead of
	 * jumping to the last one.
	 *
	 * Obsidian's own `setSelectedItem` wraps a negative index round to the
	 * end, so there is no way to stop being on an entry — and no way back to
	 * the text you had typed before you started arrowing. This lets the
	 * selection rest at "nothing", which restores that text; pressing up
	 * again from there wraps to the bottom as it always did.
	 */
	private wrapList(): void {
		const list = this.list();
		if (!list || this.wrapped) return;
		this.wrapped = true;
		const original = list.setSelectedItem.bind(list);
		const force = list.forceSetSelectedItem.bind(list);
		// Anything but the pointer moving the highlight is a choice, and a
		// choice is what the pointer has to give back. A keypress is also
		// what previews into the field; the list's own selection is not.
		//
		// Read off the list *after* the move rather than taken from the
		// index asked for: an arrow off the end of the list is passed on as
		// the index past the end and wraps to the front inside, so
		// remembering what was asked for remembered a row that isn't there.
		const remember = (cause: unknown) => {
			if (cause instanceof MouseEvent) return;
			this.kept = { index: list.selectedItem, previewed: Boolean(cause) };
		};
		list.setSelectedItem = (index: number, evt: unknown) => {
			// Both ends of the list open onto the field. -1 is a real state
			// for the renderer: it clears the marking and reports the change
			// with no value, which is what tells the field to put the typed
			// text back. Remembered as the choice it is — letting go of the
			// list on purpose is not something the pointer should undo.
			//
			// Obsidian's own arithmetic takes an index past either end round
			// to the other, so the list was a ring you could not step out of
			// downwards: up off the top let go, while down off the bottom
			// jumped to the first row and carried on. Now the field is a stop
			// on the ring like any other, and a lap passes through it
			// whichever way you are going.
			const values = list.values;
			const last = Array.isArray(values) ? values.length - 1 : -1;
			const offTheTop = index < 0 && list.selectedItem === 0;
			const offTheBottom = last >= 0 && index > last && list.selectedItem === last;
			if (evt && (offTheTop || offTheBottom)) {
				force(-1, evt);
				remember(evt);
				return;
			}
			original(index, evt);
			remember(evt);
		};

		// Hovering a row previews it, so taking the pointer off the list has
		// to be a way back — otherwise a stray sweep of the mouse would
		// leave the field holding a name nobody chose. Back to the row that
		// was standing before the mouse, though, not to nothing: clearing it
		// outright threw away the row you had arrowed to, and the one the
		// list had opened on because it is where you are.
		list.containerEl?.addEventListener("mouseleave", (evt) => {
			const values = list.values;
			// The list is rebuilt on every query, so a remembered index can
			// outlive the row it named.
			const index =
				Array.isArray(values) && this.kept.index < values.length ? this.kept.index : -1;
			// The field comes back too, and first. Restoring the highlight
			// alone left whatever the last hovered row had written standing
			// in the field — with the user's own selection gone, which is
			// the thing they were in the middle of. `null` puts back the
			// text *and* the selection it was made with.
			if (!this.kept.previewed) this.onPreview?.(null);
			if (list.selectedItem === index) return;
			this.restoring = !this.kept.previewed;
			try {
				force(index, evt);
			} finally {
				this.restoring = false;
			}
		});
	}

	/** Obsidian's list object behind the popover. Undocumented, so every use is guarded. */
	private list(): SuggestionList | null {
		return (this as unknown as { suggestions?: SuggestionList }).suggestions ?? null;
	}

	/**
	 * Every child whose name *starts with* what has been typed — the set Tab
	 * completes against.
	 *
	 * A prefix, where the dropdown lists by substring: completion extends
	 * what you typed, so it can only offer names that begin with it.
	 * Uncapped, because the longest common prefix is a fact about the whole
	 * set — cut the list at a hundred and what Tab completed to would change
	 * with the size of the folder.
	 *
	 * Places count. They are listed *instead of* a folder's children rather
	 * than beside them, so they can only turn up here while the vault
	 * dropdown is open — and there they are exactly what is being typed at.
	 * "keep-name" and the overflow row are skipped: neither is a thing you
	 * can descend into or land on.
	 */
	completions(prefix: string): PathSuggestion[] {
		const lower = prefix.toLowerCase();
		return this.buildSuggestions(this.getContext(), (name) =>
			name.toLowerCase().startsWith(lower),
		).filter((s) => s.kind === "folder" || s.kind === "file" || s.kind === "location");
	}

	/**
	 * The row the popover has highlighted, which is the one Tab steps
	 * toward. Null when the selection is resting at nothing.
	 *
	 * The list object is undocumented, so this reads two of its fields and
	 * gives up quietly if either is not what it expects.
	 */
	highlighted(): PathSuggestion | null {
		const list = this.list();
		const values = list?.values;
		const index = list?.selectedItem ?? -1;
		if (!Array.isArray(values) || index < 0 || index >= values.length) return null;
		return values[index] ?? null;
	}

	protected getSuggestions(query: string): PathSuggestion[] {
		const context = this.getContext();
		this.preselectIndex = -1;
		const q = (context.queryOverride ?? query).trim().toLowerCase();
		this.lastQuery = q;
		this.lastOffer = context.offered;
		// Substring rather than prefix: the dropdown doubles as a search of
		// the folder, and finding "Weekly kickoff" by typing "kick" is most
		// of what that is for. Tab is the one that needs a prefix.
		return this.capped(
			this.buildSuggestions(context, (name) => !q || name.toLowerCase().includes(q)),
		);
	}

	/**
	 * The folder's contents as rows, filtered by whichever rule the caller
	 * brings. Uncapped, and without the preselect bookkeeping `capped` does,
	 * so completion can read the folder without moving the popover's
	 * selection out from under the user.
	 */
	private buildSuggestions(context: SuggestContext, matches: NameMatcher): PathSuggestion[] {
		const { folderPath, renameMode, keepName, shouldList } = context;

		// The vault-root dropdown replaces the listing outright: it offers
		// places to go, not things in a folder.
		if (context.locations) {
			return context.locations
				.filter((location) => matches(location.label))
				.map((location) => ({
					label: location.label,
					kind: "location" as const,
					path: location.path,
					disabled: false,
					icon: iconFor(location),
					external: !location.isCurrentVault,
				}));
		}

		if (context.externalFolder !== null) {
			return this.externalSuggestions(context.externalFolder, context, matches);
		}

		const resolved = folderPath
			? this.app.vault.getAbstractFileByPath(folderPath)
			: this.app.vault.getRoot();
		// A path typed with "/" can name a folder that doesn't exist yet
		// (it gets created on commit) — that lists nothing rather than
		// falling back to some other folder's contents.
		const folder = resolved instanceof TFolder ? resolved : null;

		const suggestions: PathSuggestion[] = [];

		// Pinned first in rename mode so moving a file without renaming
		// it is always one click away, in whichever folder you've drilled
		// into — every folder, including the one the file is already in.
		// Skipped only when some *other* file has taken the name here; that
		// one shows up greyed out below instead.
		if (renameMode && keepName && matches(keepName)) {
			const targetPath = folderPath ? `${folderPath}/${keepName}` : keepName;
			const taken = this.app.vault.getAbstractFileByPath(targetPath);
			// A file does not conflict with itself. Treating it as taken in
			// its own folder made the current name disappear from the list
			// the moment you browsed back to where the note already is,
			// which reads as the autocomplete breaking rather than as a
			// rule. Selecting it there is the no-op move `moveFileTo`
			// already short-circuits, so the entry costs nothing.
			if (!taken || taken.path === context.keepPath) {
				suggestions.push({
					label: keepName,
					kind: "keep-name",
					path: targetPath,
					disabled: false,
				});
			}
		}

		if (!folder) return suggestions;

		const children = [...folder.children]
			.filter((child) => {
				// A broken display filter must not empty the whole list.
				try {
					return shouldList(child);
				} catch {
					return true;
				}
			})
			.sort((a, b) => {
				const aIsFolder = a instanceof TFolder;
				const bIsFolder = b instanceof TFolder;
				if (aIsFolder !== bIsFolder) return aIsFolder ? -1 : 1;
				return a.name.localeCompare(b.name);
			});

		for (const child of children) {
			if (!matches(child.name)) continue;

			if (child instanceof TFolder) {
				suggestions.push({
					label: child.name,
					kind: "folder",
					path: child.path,
					disabled: false,
					current: child.path === context.currentFolder,
				});
			} else if (child instanceof TFile) {
				// The file being renamed is already represented by the pinned
				// keep-name entry above. Listing it again would show the name
				// twice, the second time greyed out as though the note
				// blocked its own rename.
				if (renameMode && child.path === context.keepPath) continue;
				// In rename mode existing files are greyed to mark the
				// name as taken. They're still selectable — picking one
				// just fills the input, where live validation flags the
				// conflict rather than letting it overwrite the note.
				suggestions.push({
					label: child.name,
					kind: "file",
					path: child.path,
					disabled: renameMode,
					warn: context.warnsOnOpen(child.extension),
					markdown: isMarkdownExtension(child.extension),
					current: child.path === context.currentPath,
				});
			}
		}

		return suggestions;
	}

	/**
	 * Trims the list to what the popover will actually show, and spends the
	 * last row saying how much was left out.
	 *
	 * Obsidian slices to `limit` itself, silently — browsing /usr/bin gives
	 * a hundred names out of nine thousand with nothing to say so, which
	 * reads as "this folder has a hundred files". Ending on a count instead
	 * makes the list honest and points at the way through it, which is to
	 * keep typing.
	 */
	private capped(suggestions: PathSuggestion[]): PathSuggestion[] {
		// Every listing funnels through here, so this is the one place that
		// has to find "where you are" — and it must be found *after* the
		// list is built, since the index is what the selection is set by.
		const wanted = this.getContext().preselectPath;
		this.preselectIndex = wanted === null ? -1 : suggestions.findIndex((s) => s.path === wanted);

		const limit = this.limit > 0 ? this.limit : DEFAULT_SUGGESTION_LIMIT;
		if (suggestions.length <= limit) return suggestions;

		// One slot short, so the row we add lands inside the limit rather
		// than being the thing Obsidian's own slice cuts off.
		const shown = suggestions.slice(0, limit - 1);
		shown.push({
			label: t("suggestMore", { count: String(suggestions.length - shown.length) }),
			kind: "more",
			path: "",
			disabled: true,
		});
		return shown;
	}

	/**
	 * Children of a folder outside the vault.
	 *
	 * No greying of taken names: out here the vault's rename rules don't
	 * apply, and the commit path checks the filesystem itself before it
	 * writes. The keep-name entry is offered though — "move it here under
	 * the name it already has" is the same gesture, and the same one click,
	 * whichever side of the vault boundary the destination is on.
	 */
	private externalSuggestions(
		folderPath: string,
		context: SuggestContext,
		matches: (name: string) => boolean,
	): PathSuggestion[] {
		const children = listExternalChildren(folderPath);

		const suggestions: PathSuggestion[] = [];
		if (context.renameMode && context.keepName && matches(context.keepName)) {
			const keepName = context.keepName;
			const targetPath = externalJoin(folderPath, keepName);
			// Skipped when some other entry has taken the name here. The file
			// itself doesn't count, exactly as inside the vault — otherwise
			// the name vanishes as soon as you browse back to it.
			const taken = children.some(
				(child) => child.name === keepName && child.path !== context.keepPath,
			);
			if (!taken) {
				suggestions.push({
					label: keepName,
					kind: "keep-name",
					path: targetPath,
					disabled: false,
					external: true,
				});
			}
		}

		return suggestions.concat(children
			.filter((child) => {
				if (!matches(child.name)) return false;
				// Represented by the keep-name entry above; see the vault branch.
				if (context.renameMode && child.path === context.keepPath) return false;
				// A broken display filter must not empty the whole list.
				try {
					return context.shouldListExternal(child);
				} catch {
					return true;
				}
			})
			.map((child) => ({
				label: child.name,
				kind: child.isFolder ? ("folder" as const) : ("file" as const),
				path: child.path,
				disabled: false,
				external: true,
				warn: !child.isFolder && context.warnsOnOpen(child.extension),
				markdown: !child.isFolder && isMarkdownExtension(child.extension),
				current: child.isFolder && child.path === context.currentFolder,
			})));
	}

	/**
	 * The row's name, with the part you typed marked inside it.
	 *
	 * The listing matches by substring, so what you typed is not always at
	 * the front of the name — "kick" finds "Weekly kickoff" — and pointing
	 * at *where* it matched is most of what makes a long list readable.
	 */
	private writeLabel(el: HTMLElement, label: string): void {
		const query = this.lastQuery;
		const at = query ? label.toLowerCase().indexOf(query) : -1;

		// The run this row would gain if the offer were taken: from the end
		// of what was typed to the end of the opening every candidate shares.
		// Only on the rows the offer is actually about — a row that matched
		// somewhere in the middle of its name is not one of them.
		const offer = this.lastOffer;
		const offered =
			offer && label.toLowerCase().startsWith(offer.prefix.toLowerCase())
				? { start: offer.typedLength, end: offer.prefix.length }
				: null;

		if (at < 0 && !offered) {
			el.setText(label);
			return;
		}

		// Marked runs, in order, over a name that is written once. The two
		// never overlap: a row the offer is about matched at its front, so
		// what was typed ends exactly where the offered part begins.
		const runs: { start: number; end: number; cls: string }[] = [];
		if (at >= 0) runs.push({ start: at, end: at + query.length, cls: "lure-suggest-match" });
		if (offered && offered.end > offered.start) {
			runs.push({ start: offered.start, end: offered.end, cls: "lure-suggest-offer" });
		}
		runs.sort((a, b) => a.start - b.start);

		let cut = 0;
		for (const run of runs) {
			if (run.start < cut) continue;
			el.appendText(label.slice(cut, run.start));
			el.createSpan({ cls: run.cls, text: label.slice(run.start, run.end) });
			cut = run.end;
		}
		el.appendText(label.slice(cut));
	}

	renderSuggestion(value: PathSuggestion, el: HTMLElement): void {
		el.addClass(`lure-suggest-${value.kind}`);

		// A count, not an entry: nothing to icon, drag, or right-click.
		if (value.kind === "more") {
			el.createSpan({ cls: "lure-suggest-label", text: value.label });
			return;
		}


		if (value.disabled) el.addClass("lure-suggest-disabled");
		if (value.external) el.addClass("lure-suggest-external");
		if (value.markdown) el.addClass("lure-suggest-md");
		if (value.warn) el.addClass("lure-suggest-warn");
		if (value.current) el.addClass("lure-suggest-current");

		if (value.icon) {
			const iconEl = el.createSpan({ cls: "lure-suggest-icon" });
			applyIcon(setIcon, iconEl, value.icon, "hard-drive");
		}
		this.writeLabel(el.createSpan({ cls: "lure-suggest-label" }), value.label);

		// "keep-name" is a proposed destination that nothing exists at yet,
		// so there is nothing to act on either way.
		if (value.kind === "keep-name") return;

		// Outside the vault there is no TAbstractFile, so the File Explorer's
		// handlers cannot be reused — these rows used to fall through here
		// with nothing wired at all, which is why right-clicking one did
		// nothing. They get the path-built menu instead. Dragging still needs
		// a vault file and stays unavailable.
		if (value.external) {
			if (!this.onExternalContextMenu) return;
			const open = this.onExternalContextMenu;
			el.addEventListener("contextmenu", (evt) => {
				evt.preventDefault();
				evt.stopPropagation();
				open(evt, value.path, value.kind === "folder");
			});
			return;
		}

		// Entries stand for real vault items, so they behave like the File
		// Explorer's rows: draggable, and right-clickable for the same menu.
		const target = this.app.vault.getAbstractFileByPath(value.path);
		if (target) wireNativeFileItem(this.app, el, target, this.dragKeepFocusEl);
	}
}

