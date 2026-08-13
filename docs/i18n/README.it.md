<!-- Traduzione di README.md — stato: commit d116bbc.
     Traduzione automatica (Claude Opus 5), non rivista da madrelingua.
     Le correzioni sono benvenute; il README inglese è la versione
     di riferimento. -->

**Leggi questo in altre lingue:** [English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · **Italiano** · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

Un plugin per [Obsidian](https://obsidian.md) che trasforma il nome del file nella barra di intestazione di una nota in un percorso completo cliccabile e modificabile, segmento per segmento — come la barra degli indirizzi del gestore di file [Dolphin](https://apps.kde.org/dolphin/).

![Clic sul separatore che segue una cartella: il puntatore vi si appoggia sopra ed Esplora file ha mostrato ed espanso quella cartella](../images/breadcrumb.png)

Obsidian 1.8.7+ · solo desktop · AGPL-3.0

## Divulgazione sull'IA

- **Agente** — **Claude Opus 5** e **Claude Sonnet 5** (Anthropic, tramite Claude Code): ha scritto il TypeScript, il CSS, tutti i 45 set di traduzioni e la documentazione. Le traduzioni sono generate automaticamente e non sono state riviste da madrelingua.
- **Autore** — Vault51: ha definito ogni funzione, provato ogni versione in un vault reale, indirizzato le correzioni e riletto tutti i risultati.
- **Consumo** — 3–13 agosto 2026, nove sessioni, \~4.928 risposte: \~7,2 M di token generati, \~23,7 M inviati, \~1169,6 M di riletture dalla cache (\~1200,5 M in totale).

## Funzioni

- **Clic su una cartella** per un elenco a discesa del contenuto della cartella *superiore* — sostituisci una cartella con una vicina senza toccare il resto del percorso. Il nome della nota funziona allo stesso modo, estensione compresa.
- **Clic sul separatore** che segue una cartella per mostrarla ed espanderla in Esplora file. Un'impostazione scambia i due ruoli.
- **Clic destro o trascinamento su qualsiasi voce** — il menu contestuale e il trascinamento di Esplora file stesso.
- **Clic sul nome del file o sullo spazio vuoto** per digitare un percorso, con completamento automatico. `/` scende, <kbd>Backspace</kbd> risale di un livello, <kbd>Invio</kbd> conferma.
- **Il pulsante matita su cartella** porta le stesse interazioni in modalità sposta/rinomina, con le stesse verifiche che fa Obsidian.
- **Tieni premuto <kbd>Ctrl</kbd>** per aprire in una nuova scheda — oppure, in modalità sposta/rinomina, per copiarvi la nota anziché spostarla.
- **<kbd>F2</kbd>** alterna fra il titolo in linea e la barra del percorso.
- **Clic sul nome del vault** per sfogliare gli altri vault, la cartella home, la radice del file system e le unità montate senza cambiare vault. Sola lettura finché non apri un lucchetto, e incorniciato nel colore di errore per tutto il tempo. Disattivato di default — vedi [fuori dal vault](#fuori-dal-vault).
- **Due livelli di avviso** — rosso fuori dal vault, arancione per i file di testo per cui Obsidian non ha un editor. Vedi [i due colori di avviso](usage.it.md#i-due-colori-di-avviso).
- **Icone adattabili al tema**, sostituibili da uno snippet CSS — e **45 lingue**, tutte quelle che Obsidian include.
- **Impostazioni:** allineamento, separatori predefiniti, quale clic apre l'elenco, nome del vault, file nascosti.

![Lo stesso elenco in modalità sposta/rinomina: il nome attuale del file fissato in cima, sotto le cartelle vicine, e le note esistenti in grigio](../images/dropdown.png)

*In modalità sposta/rinomina lo stesso elenco offre altro: il nome attuale della nota fissato in cima per spostarla senza rinominarla, le cartelle in cui portarla, e i nomi già occupati in grigio perché nulla venga sovrascritto per sbaglio.*

→ [Guida all'uso completa](usage.it.md)

## Fuori dal vault

Le politiche per sviluppatori di Obsidian impongono che un plugin spieghi ogni accesso a file fuori dal vault, quindi, senza giri di parole:

**Se fa qualcosa di tutto ciò.** Solo se attivi **Accesso ai file esterni**, che è **disattivato di default**. Con l'opzione spenta non c'è modo di raggiungere un percorso esterno dal plugin, e nulla del codice descritto qui sotto viene mai eseguito.

**Cosa legge.** Solo quando glielo chiedi. Il clic sul nome del vault elenca gli altri vault — letti dall'`obsidian.json` di Obsidian stesso — più la cartella home, la radice del file system e le unità montate (`/proc/mounts` su Linux, `/Volumes` su macOS, lettere di unità su Windows). Sfogliare da lì elenca il contenuto delle cartelle, e aprire un file legge quel solo file.

**Cosa scrive.** Nulla, finché non premi un pulsante che lo dice. Di pulsanti così ce ne sono due, e ciascuno copre soltanto il proprio ambito:

- Il pulsante **Modifica come testo** del visualizzatore sblocca il file che hai davanti, quel solo file in quella sola scheda. Da lì in poi le tue modifiche vi vengono salvate mentre scrivi.
- Il **lucchetto** nell'intestazione, visibile solo mentre la barra del percorso punta fuori dal vault, sblocca creazione, rinomina e spostamento su percorsi esterni. Si richiude appena rientri, così il permesso non sopravvive mai alla cartella per cui l'hai concesso.

Nessuno dei due sblocchi viene salvato nell'area di lavoro o nelle impostazioni, quindi la scrittura non resta mai armata su un file che non ricordi di aver aperto. In nessuno dei due stati viene sovrascritto qualcosa — una destinazione già esistente viene rifiutata, usando la creazione esclusiva del file system stesso invece di un controllo che potrebbe perdere la corsa — e una nota non può mai essere *spostata* fuori dal vault, perché i collegamenti a essa si romperebbero in silenzio; tenendo premuto <kbd>Ctrl</kbd> viene invece copiata fuori.

**Perché.** Le note che ti servono stanno spesso in un altro vault, in una cartella sincronizzata o su una chiavetta, e la risposta di Obsidian — cambia vault — chiude tutto quello che avevi aperto. Questo ti lascia andare a guardare senza uscire, e correggere un refuso già che ci sei.

**Il limite.** L'editor di Obsidian è legato ai file dentro il vault, quindi un file esterno **non può** essere aperto come una nota vera, con collegamenti, backlink e il resto; nessun plugin può farlo. Lure lo mostra invece nel proprio visualizzatore (Markdown, immagini, audio, video, PDF), con *Apri esternamente* per tutto il resto. La barra del percorso resta incorniciata nel colore di errore ogni volta che punta fuori dal vault, e il tracciato parte dal luogo che hai scelto — il nome di un vault, la cartella home, un'unità — e non dall'organizzazione delle cartelle della macchina.

## Installazione

Elencato su [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure), ma non ancora approvato per il catalogo interno all'app: installalo in uno di questi modi:

**Manuale:** scarica `main.js`, `manifest.json` e `styles.css` dall'[ultima release](https://github.com/Gelaende51/obsidian-lure/releases) in `<vault>/.obsidian/plugins/lure/`, poi attivalo in **Impostazioni → Plugin di terze parti**.

**BRAT:** aggiungi `Gelaende51/obsidian-lure` come plugin beta.

**Dai sorgenti:** `npm install && npm run build` — vedi [sviluppo](../development.md).

## Compatibilità

Non serve alcun plugin. **Esplora file**, il plugin di base, se attivo è ciò che mostra le cartelle nella barra laterale; senza di esso quei clic non fanno nulla.

Provato contro i plugin della comunità che condividono l'intestazione della nota o rispondono al clic su una cartella — in entrambi gli ordini di caricamento, ciascuno acceso e spento:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — il separatore apre la nota della cartella invece di mostrare la cartella, così ogni segmento del percorso diventa un posto dove andare. È l'unico plugin di note-cartella che rivendica il percorso nell'intestazione; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) e [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) non ascoltano lì, quindi il separatore mostra la cartella come sempre.
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer) e [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — entrambi disegnano nello stesso elemento dell'intestazione; Lure mantiene la sua riga quale che sia l'ordine di caricamento, e spegnere l'uno lascia intatto l'altro.
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header), [Running Head](obsidian://show-plugin?id=running-head), [Crumbs](obsidian://show-plugin?id=crumbs-obsidian), [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — hanno una propria striscia, e convivono senza problemi.

Solo desktop — il modello di interazione richiede il passaggio del mouse, clic precisi e una tastiera. I risultati completi, ciò che resta da verificare e il confronto con Quick Explorer e Breadcrumbs sono in [compatibilità](../compatibility.md).

## Come contribuire

- Segnalazioni e pull request sono benvenute — soprattutto **correzioni alle traduzioni**, dato che tutte le 45 lingue sono tradotte automaticamente e non riviste da madrelingua. Vedi [sviluppo](../development.md) per la configurazione e le regole di base.
- **Segnalazione problemi:** https://github.com/Gelaende51/obsidian-lure/issues
- **Donazioni:** [Ko-fi](https://ko-fi.com/vault51). Il plugin è gratuito e sotto licenza AGPL in ogni caso; le mance sono gradite e mai richieste. L'intenzione è compensare le emissioni di carbonio — un'intenzione, non un impegno: nulla viene compensato finché la somma non vale la fatica, e questa riga lo dirà non appena qualcosa lo sarà davvero.

## Riconoscimenti

- **Vault51** — autore: progettazione, requisiti e prove manuali dall'inizio alla fine.
- **Claude Opus 5** e **Claude Sonnet 5** (Anthropic, tramite Claude Code) — implementazione, traduzioni e documentazione, sotto la direzione dell'autore. Vedi [divulgazione sull'IA](#divulgazione-sullia).
- **[Obsidian](https://obsidian.md)** — l'applicazione che questo estende, e l'origine di ogni componente che il plugin usa: la sua API per i plugin, il set di icone Lucide dietro `setIcon`, l'istanza di i18next inclusa da cui vengono lette le etichette del menu contestuale, e le sue classi e variabili CSS. Non viene incluso nulla di terze parti; il plugin **non ha dipendenze a runtime**.

> **Il team di Obsidian non ha partecipato in alcun modo a questo progetto** — non l'ha scritto, riletto, approvato né sostenuto. Obsidian è un marchio registrato di Dynalist Inc.; questo è un plugin indipendente e non affiliato.

I contributori verranno elencati qui man mano che arrivano i contributi.

## Collegamenti

- **Documentazione:** [docs/](../)
- **Pagina del plugin:** https://community.obsidian.md/plugins/lure
- **Presenza web / sorgenti:** https://github.com/Gelaende51/obsidian-lure
- **Donazioni:** [Ko-fi](https://ko-fi.com/vault51) — vedi [come contribuire](#come-contribuire).
- **Licenza:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. I fork e le build ridistribuite devono pubblicare i propri sorgenti con la stessa licenza.
