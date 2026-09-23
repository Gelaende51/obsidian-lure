<!-- Traduzione di README.md — stato: commit 2cbb237.
     Traduzione automatica (Claude Opus 5), non rivista da madrelingua.
     Le correzioni sono benvenute; il README inglese è la versione
     di riferimento. -->

[English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · **Italiano** · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

Un plugin per [Obsidian](https://obsidian.md) che trasforma il nome del file nella barra di intestazione di una nota in un percorso completo del vault cliccabile e modificabile, segmento per segmento — come la barra degli indirizzi del gestore di file [Dolphin](https://apps.kde.org/dolphin/).

![Clic sul separatore che segue una cartella: il puntatore vi si appoggia sopra ed Esplora file ha mostrato ed espanso quella cartella](../images/breadcrumb.png)

Obsidian 1.8.7+ · solo desktop · AGPL-3.0

## Divulgazione sull'IA

- **Agente** — **Claude Opus 5** e **Claude Sonnet 5** (Anthropic, tramite Claude Code): ha scritto il TypeScript, il CSS, tutti i 45 set di traduzioni e la documentazione. Le traduzioni sono generate automaticamente e non sono state riviste da madrelingua.
- **Consumo** — 3 agosto – 19 settembre 2026, 20 sessioni, \~16.460 risposte: \~19,9 M di token generati, \~87,0 M inviati, \~5451,0 M di riletture dalla cache (\~5558,0 M in totale).
- **A monte** — il modello ha imparato da codice open source, documentazione e scritti della comunità pubblicati da altri. Gran parte del merito è loro.
- **Autore** — Vault51: ha definito ogni funzione, provato ogni versione in un vault reale, indirizzato le correzioni e riletto tutti i risultati.

## Funzioni

- **Clic su una cartella** per un menu a discesa del contenuto della cartella *superiore* — sostituisci una cartella con una vicina e lascia intatto il resto del percorso. Il nome della nota funziona allo stesso modo, selezionando il nome senza la sua estensione.
- **Clic sul separatore** che segue una cartella per mostrarla ed espanderla in Esplora file. Un'impostazione scambia i due ruoli.
- **Clic destro o trascinamento su qualsiasi voce** — il menu contestuale di Esplora file stesso, voce per voce, e il suo comportamento di trascinamento. Per i percorsi fuori dal vault è stato costruito un menu equivalente, fino a *Elimina* passando per il cestino di sistema.
- **Clic sul nome del file o sullo spazio vuoto** per digitare un percorso, con completamento automatico. `/` scende, <kbd>Backspace</kbd> risale di un livello, <kbd>Invio</kbd> conferma — e un percorso che non esiste ancora viene semplicemente creato, con un avviso che dice dove è finito.
- **Il menu a discesa si apre sulla voce in cui ti trovi**, e percorrerlo con le frecce o col puntatore riempie il campo con ciò che stai indicando. Una riga che indichi viene mostrata come la proposta che farebbe; uscire dall'una o dall'altra estremità dell'elenco ti restituisce quello che avevi scritto, e togliere il puntatore dall'elenco rimanda l'evidenziazione dov'eri. L'elenco segue il cursore: la cartella in cui si trova, filtrata dalle lettere che lo precedono.
- **Il pulsante matita su cartella** porta le stesse interazioni in modalità sposta/rinomina, con le stesse verifiche che fa Obsidian. Un nome già in uso appare rosso nell'elenco, e sceglierlo chiede se rinominare ciò che è di intralcio, oppure scambiare il posto o i nomi con lui.
- **Tieni premuto <kbd>Ctrl</kbd>** per aprire in una nuova scheda — oppure, in modalità sposta/rinomina, per copiarvi la nota anziché spostarla. Il nome della nota e i segmenti di cartella accettano gli stessi modificatori, e lo stesso trascinamento, delle righe corrispondenti in Esplora file.
- **I nomi si completano mentre scrivi** — ciò che <kbd>Tab</kbd> scriverebbe compare dopo il cursore, selezionato e scritto come lo è il nome, qualunque sia la maiuscola o minuscola digitata — la concordanza dei nomi della cartella, o il passo verso il primo di essi; scrivendo la si consuma lettera per lettera, <kbd>→</kbd> ne prende una lettera, <kbd>Tab</kbd> o <kbd>Fine</kbd> la prende intera, <kbd>Backspace</kbd> la restituisce. Il menu a discesa continua a filtrare in base a ciò che hai scritto, non a ciò che ti è stato proposto.
- **<kbd>Tab</kbd> completa come una shell**: estende quanto hai scritto fin dove i nomi di quella cartella concordano, avanza verso uno di essi un passo alla volta quando non concordano, ed entra in una cartella soltanto quando ne resta un nome solo. Oltre la fine del percorso allarga invece la selezione: nome, nome con estensione, percorso dal vault, percorso dalla radice del sistema. <kbd>Maiusc</kbd>+<kbd>Tab</kbd> ripercorre la stessa strada all'indietro — segnando ciò che restituisce anziché cancellarlo — e oltre l'inizio prosegue risalendo il percorso, per poi tornare in cerchio al percorso di sistema. In entrambi i versi, un giro completo riporta al percorso che avevi costruito.
- **Clic destro per copiare** — due volte per un nome, tre per tutto ciò che sta alla sua destra, e sullo spazio vuoto per l'intero percorso o per quello di sistema.
- **Trascina una nota su una cartella della barra** per spostarla lì, collegamenti compresi — la destinazione è già sullo schermo, quindi basta un trascinamento anziché un viaggio nell'albero dei file. Anche il nome del vault la accetta, per la radice. Un'intera selezione si sposta come una sola, e una cartella che non può accogliere ciò che le viene offerto non mostra nulla invece di fallire a cose fatte.
- **Rilascia del testo sulla barra per metterlo per iscritto** — su una cartella o sul nome del vault per dare un nome a una nuova nota lì dentro, sul nome della nota stessa per aggiungerlo in fondo a ciò che stai leggendo. Un file trascinato dal desktop funziona allo stesso modo, e la riga si cinge di blu finché il rilascio andrebbe a segno.
- **Il campo prende il colore di ciò che nomina** — lo stesso colore che la sua riga ha nel menu a discesa, grigio per la nota di una cartella — e **diventa rosso** quando nulla gli risponde, così puoi vedere prima di premere <kbd>Invio</kbd> se aprirà una nota o ne creerà una.
- **I file HTML vengono mostrati come pagine**, in un riquadro a cui è negato ogni permesso — niente script, niente rete, nessuna origine propria — con i fogli di stile e le immagini che stanno accanto al file portati dentro, così una pagina salvata continua ad apparire com'è. Il sorgente è a un tasto di distanza.
- **Digita un URL** — `https://`, `obsidian://`, oppure un percorso `file://` o codificato in percentuale — e viene aperto anziché trattato come nome di nota. Gli indirizzi web finiscono in una scheda del visualizzatore Web di Obsidian, se lo hai attivo.
- **I percorsi lunghi si accorciano dove le lettere sono ridondanti** — mai oltre ciò che distingue una cartella da quella accanto, in modo fluido anziché una lettera alla volta — e scorrono solo quando non c'è più nulla da comprimere. Punta un nome accorciato per rivederlo per intero.
- **<kbd>F2</kbd>** alterna fra il titolo in linea e la barra del percorso, aprendo sul nome senza la sua estensione e allargandosi ai percorsi completi alle pressioni successive. Passa senza intoppi attraverso la finestra di rinomina di Obsidian quando il titolo è scorso fuori vista. Il comando *Attiva la barra del percorso* percorre gli stessi gradini senza rinominare; la riga *Tasti di scelta rapida* delle impostazioni ti porta ad associarlo a un tasto.
- **Clic sul nome del vault** per sfogliare gli altri vault, la cartella home, la radice del file system e le unità montate senza cambiare vault. Sola lettura finché non apri il lucchetto rosso che là fuori prende il posto dell'interruttore di rinomina, e incorniciato nel colore di errore per tutto il tempo. Disattivato di default — vedi [fuori dal vault](#fuori-dal-vault).
- **La radice del vault elenca le pagine che un riquadro può contenere** — `:graph`, `:search`, e qualsiasi vista registrata dai tuoi plugin. Scegline una, oppure digitala: nessun nome di file inizia con i due punti, quindi le etichette valgono anche come indirizzo. `:graph` digitato dentro una cartella apre il grafo di quella cartella. Con un plugin per la pagina iniziale installato, il separatore del vault apre quella pagina al primo clic e richiude l'albero dei file al successivo.
- **Una riga sui riquadri che non contengono un file** — una scheda vuota si legge `vault / :blank`, il grafo `vault / :graph`, e il campo accanto è una barra degli indirizzi: digita un percorso e <kbd>Invio</kbd> lo apre in quel riquadro, o lo crea. I riquadri della barra laterale mantengono il titolo di Obsidian.
- **Due livelli di avviso** — rosso fuori dal vault, arancione per i file di testo per cui Obsidian non ha un editor. Vedi [i due colori di avviso](usage.it.md#i-due-colori-di-avviso).
- **Icone adattabili al tema**, sostituibili da uno snippet CSS — e **46 lingue**: tutte quelle incluse in Obsidian, più il greco e il sanscrito, per cui non ha un'impostazione. Scegline una solo per il plugin, oppure segui quella di Obsidian.
- **Impostazioni:** lingua, allineamento, separatori predefiniti, quale clic apre il menu a discesa, nome del vault, file nascosti, estensioni dei file.

![Lo stesso menu a discesa in modalità sposta/rinomina: il nome attuale del file fissato in cima, sotto le cartelle vicine, e le note esistenti in grigio](../images/dropdown.png)

*In modalità sposta/rinomina lo stesso menu a discesa offre altro: il nome attuale della nota fissato in cima per spostarla senza rinominarla, le cartelle in cui portarla, e i nomi già occupati in rosso; sceglierne uno chiede cosa fare del file di intralcio.*

→ [Guida all'uso completa](usage.it.md)

## Fuori dal vault

Le politiche per sviluppatori di Obsidian impongono che un plugin spieghi ogni accesso a file fuori dal vault, quindi, senza giri di parole:

**Se fa qualcosa di tutto ciò.** Solo se attivi **Accesso ai file esterni**, che è **disattivato di default**. Con l'opzione spenta non c'è modo di raggiungere un percorso esterno dal plugin, e nulla del codice descritto qui sotto viene mai eseguito.

**Cosa legge.** Solo quando glielo chiedi. Il clic sul nome del vault elenca gli altri vault — letti dall'`obsidian.json` di Obsidian stesso — più la cartella home, la radice del file system e le unità montate (`/proc/mounts` su Linux, `/Volumes` su macOS, lettere di unità su Windows). Sfogliare da lì elenca il contenuto delle cartelle, e aprire un file legge quel solo file.

**Cosa scrive.** Nulla, finché non premi un pulsante che lo dice. Di pulsanti così ce ne sono due, e ciascuno copre soltanto il proprio ambito:

- Il pulsante **Modifica come testo** del visualizzatore sblocca il file che hai davanti, quel solo file in quella sola scheda. Da lì in poi le tue modifiche vi vengono salvate mentre scrivi.
- Il **lucchetto rosso** nell'intestazione, che prende il posto dell'interruttore di rinomina mentre la barra del percorso punta fuori dal tuo vault, sblocca creazione, rinomina, spostamento ed eliminazione su percorsi esterni — e, una volta aperto, restituisce il posto all'interruttore. Si richiude quando rientri, e alla pressione che esce dalla modalità rinomina, così il permesso non sopravvive mai alla cartella per cui l'hai concesso.

Nessuno dei due sblocchi viene salvato nell'area di lavoro o nelle impostazioni, quindi la scrittura non resta mai armata su un file che non ricordi di aver aperto. In nessuno dei due stati viene sovrascritto qualcosa — una destinazione già esistente viene rifiutata, usando la creazione esclusiva del file system stesso invece di un controllo che potrebbe perdere la corsa.

Spostare una nota *fuori* dal vault è l'unica scrittura che costa qualcosa che nulla può restituire: Obsidian aggiorna i collegamenti solo dentro il vault, quindi ogni collegamento che punta a quella nota si rompe. Viene offerta dietro una finestra di dialogo che lo dice e conta le note coinvolte, e avviene come copia seguita da eliminazione attraverso il cestino di Obsidian stesso, quindi è recuperabile quanto l'eliminazione di una nota. Tenendo premuto <kbd>Ctrl</kbd> viene invece copiata fuori.

**Perché.** Le note che ti servono stanno spesso in un altro vault, in una cartella sincronizzata o su una chiavetta, e la risposta di Obsidian — cambia vault — chiude tutto quello che avevi aperto. Questo ti lascia andare a guardare senza uscire, e correggere un refuso già che ci sei.

**Il limite.** L'editor di Obsidian è legato ai file dentro il vault, quindi un file esterno **non può** essere aperto come una nota vera, con collegamenti, backlink e il resto; nessun plugin può farlo. Lure lo mostra invece nel proprio visualizzatore (Markdown, immagini, audio, video, PDF), con *Apri esternamente* per tutto il resto. La barra del percorso resta incorniciata nel colore di errore ogni volta che punta fuori dal vault, e il tracciato parte dal luogo che hai scelto — il nome di un vault, la cartella home, un'unità — e non dall'organizzazione delle cartelle della macchina.

## Installazione

**In Obsidian:** apri **Impostazioni → Plugin di terze parti → Sfoglia**, cerca *Lure*, poi premi *Installa* e *Abilita* — oppure premi *Add to Obsidian* su [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure).

**Manuale:** scarica `main.js`, `manifest.json` e `styles.css` dall'[ultima release](https://github.com/Gelaende51/obsidian-lure/releases) in `<vault>/.obsidian/plugins/lure/`, poi attivalo in **Impostazioni → Plugin di terze parti**.

**BRAT:** aggiungi `Gelaende51/obsidian-lure` come plugin beta.

**Dai sorgenti:** `npm install && npm run build` — vedi [sviluppo](../development.md).

## Compatibilità

Non serve alcun plugin. **Esplora file**, il plugin di base, se attivo è ciò che mostra le cartelle nella barra laterale; senza di esso quei clic non fanno nulla.

Provato contro i plugin della comunità che condividono l'intestazione della nota o rispondono al clic su una cartella — in entrambi gli ordini di caricamento, ciascuno acceso e spento:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — il separatore apre la nota della cartella invece di mostrare la cartella, così ogni segmento del percorso diventa un posto dove andare, per quanto in profondità: la nota viene ricavata dalla convenzione di quel plugin, anziché lasciare a lui il compito di rispondere. È anche l'unico a pubblicare una convenzione del genere; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) e [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) non ne pubblicano alcuna e non rivendicano mai il percorso nell'intestazione, quindi con quelli il separatore mostra la cartella come sempre.
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
- **Registro delle modifiche:** [CHANGELOG.md](CHANGELOG.it.md)
- **Pagina del plugin:** https://community.obsidian.md/plugins/lure
- **Presenza web / sorgenti:** https://github.com/Gelaende51/obsidian-lure
- **Donazioni:** [Ko-fi](https://ko-fi.com/vault51) — vedi [come contribuire](#come-contribuire).
- **Licenza:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. I fork e le build ridistribuite devono pubblicare i propri sorgenti con la stessa licenza.
