<!-- Traduzione di CHANGELOG.md — stato: commit 2cbb237.
     Traduzione automatica (Claude Opus 5), non rivista da madrelingua.
     Le correzioni sono benvenute; il CHANGELOG inglese è la versione
     di riferimento. -->

[English](../../CHANGELOG.md) · [العربية](CHANGELOG.ar.md) · [አማርኛ](CHANGELOG.am.md) · [Беларуская](CHANGELOG.be.md) · [বাংলা](CHANGELOG.bn.md) · [Català](CHANGELOG.ca.md) · [Čeština](CHANGELOG.cs.md) · [Dansk](CHANGELOG.da.md) · [Deutsch](CHANGELOG.de.md) · [Ελληνικά](CHANGELOG.el.md) · [Español](CHANGELOG.es.md) · [فارسی](CHANGELOG.fa.md) · [Suomi](CHANGELOG.fi.md) · [Français](CHANGELOG.fr.md) · [Gaeilge](CHANGELOG.ga.md) · [עברית](CHANGELOG.he.md) · [Magyar](CHANGELOG.hu.md) · [Bahasa Indonesia](CHANGELOG.id.md) · **Italiano** · [日本語](CHANGELOG.ja.md) · [ქართული](CHANGELOG.ka.md) · [ភាសាខ្មែរ](CHANGELOG.kh.md) · [한국어](CHANGELOG.ko.md) · [Latviešu](CHANGELOG.lv.md) · [Bahasa Melayu](CHANGELOG.ms.md) · [नेपाली](CHANGELOG.ne.md) · [Nederlands](CHANGELOG.nl.md) · [Norsk](CHANGELOG.no.md) · [Polski](CHANGELOG.pl.md) · [Português](CHANGELOG.pt.md) · [Português (Brasil)](CHANGELOG.pt-BR.md) · [Română](CHANGELOG.ro.md) · [Русский](CHANGELOG.ru.md) · [संस्कृतम्](CHANGELOG.sa.md) · [Slovenčina](CHANGELOG.sk.md) · [Shqip](CHANGELOG.sq.md) · [Српски](CHANGELOG.sr.md) · [Svenska](CHANGELOG.sv.md) · [ไทย](CHANGELOG.th.md) · [Türkçe](CHANGELOG.tr.md) · [Українська](CHANGELOG.uk.md) · [Oʻzbekcha](CHANGELOG.uz.md) · [Tiếng Việt](CHANGELOG.vi.md) · [简体中文](CHANGELOG.zh.md) · [繁體中文](CHANGELOG.zh-TW.md)

# Registro delle modifiche

Ogni release di Lure, dalla più recente. Ciò che è arrivato dopo l'ultima release sta sotto *Non rilasciato*. Le versioni non hanno il prefisso `v`, come i tag delle release.

## 1.4.0 — 2026-09-19[^1.4.0]

### Aggiunto

- **Una riga per i Tasti di scelta rapida nelle impostazioni.** Il suo pulsante apre i *Tasti di scelta rapida* di Obsidian filtrati su questo plugin, dove ad *Attiva la barra del percorso* — che non ha un tasto assegnato di serie — se ne può assegnare uno.
- **Una barra del percorso sui riquadri che non contengono un file.** Una scheda vuota si legge `vault / :blank`, il grafo `vault / :graph`, e ogni altra vista senza nulla da nominare riceve una propria etichetta `:` — la scheda di un plugin per la pagina iniziale si legge `:home-launcher`. Il campo accanto è una barra degli indirizzi: digita un percorso e <kbd>Invio</kbd> lo apre in quel riquadro, o lo crea. Prima la riga era vuota — il plugin nascondeva il titolo di Obsidian e non metteva nulla al suo posto.
- **Una pagina si può anche digitare, non solo scegliere** — `:graph` e le altre sono un indirizzo, non solo una voce d'elenco. Nessun nome di file inizia con i due punti, quindi digitarne uno in qualsiasi punto le richiama, e il campo assume il loro colore invece di proporre di creare una nota che non potrebbe chiamarsi così.
- **Una riga per l'impostazione di Obsidian *Mostra tutti i tipi di file***, accanto alla regola dei file che iniziano con un punto, perché entrambe decidono cosa un menu a discesa può elencare: dice di cercare quell'impostazione nelle impostazioni di Obsidian e di attivarla per vedere ogni file, e il pulsante accanto apre quella pagina con l'impostazione scorsa in vista e evidenziata con un lampeggio, come farebbe un risultato di ricerca nelle impostazioni. Chiamata con le parole di Obsidian, spiegata in 45 lingue.
- **La radice del vault elenca le pagine che un riquadro può contenere** — `:graph`, `:search`, e qualsiasi vista registrata dai tuoi plugin, tra cui una scheda per la pagina iniziale o un calendario. Scegline una e il riquadro la apre, come scegliere una nota apre la nota. Le viste che esistono per mostrare un file restano fuori, perché non avrebbero nulla da mostrare.
- **Il separatore del vault apre la tua pagina iniziale**, dove un plugin ne fornisce una, ed è sottolineato per dirlo; la pressione successiva richiude l'albero dei file, e quella dopo ancora rimette esattamente ciò che era aperto. Senza un plugin del genere la prima pressione richiude, come prima.
- **Digita un percorso dalla radice del file system.** Una `/` davanti a un campo vuoto ne apre uno invece di essere inghiottita, ogni barra successiva al suo interno gli appartiene, e il menu a discesa elenca la macchina invece del vault.

### Modificato

- **F2 e Attiva la barra del percorso premono Tab dentro il campo.** Qualunque cosa Tab farebbe lì — il gradino successivo, completare ciò che hai digitato, entrare in una cartella — lo fanno anche loro; solo dove Tab richiude il giro tornando all'inizio del percorso escono dal campo, F2 verso il titolo in linea, il comando verso la nota. Prima, un campo in cui avevi digitato faceva ricominciare F2 dal nome e il comando chiudeva il campo.
- **Il passo dopo l'uscita dal ciclo è la cartella radice.** La pressione dopo il ritorno di F2 al titolo in linea, o il ritorno del comando alla nota, atterra dove atterra il giro di Tab — la radice del vault, il percorso intero nel campo, la sua prima cartella evidenziata — così nessun passo del ciclo resta solo a Tab.
- **Attiva la barra del percorso percorre lo stesso ciclo di F2.** Si apre sul nome invece che sul percorso intero, attraversa gli stessi quattro gradini, e la pressione dopo l'ultimo chiude il campo e riporta il cursore nella nota — prima, girava sui gradini all'infinito e l'unico tasto che raggiungeva la riga non riusciva a lasciarla.
- **Un nome già occupato viene segnalato quando lo usi, non mentre lo digiti.** Ogni nome digitato verso `Notes.md` attraversa nomi che possono essere file a loro volta, e l'avviso prima lampeggiava e spariva lettera per lettera. Ciò che non va nella grafia di un nome viene comunque segnalato mentre lo scrivi.
- **Un separatore la cui nota di cartella è già aperta rivela la cartella** invece di riaprire ciò che è già sullo schermo — che è quanto la sua seconda pressione ha sempre significato.
- **Dove ti trovi è in grassetto in un menu a discesa**, non solo blu.
- **Tutto ciò che non è una nota è arancione in un menu a discesa**, non solo i tipi di testo per cui Obsidian non ha una vista. Il viola distingue le note in una cartella dal contenuto misto; un solo colore per il resto dice la stessa cosa più in fretta.

### Corretto

- **Backspace su una cartella cliccata non toglie più il nome del vault.** La barra rimasta all'inizio veniva letta come un percorso dalla radice della macchina, il che svuotava il segmento iniziale — e chiudere il campo con Escape non lo rimetteva mai a posto, così la scheda perdeva per sempre il nome e l'icona del vault. Una barra iniziale ora conta come quella della macchina solo quando la sua prima cartella esiste davvero, e il segmento iniziale torna con ogni modo di uscire dal campo.
- Fuori dal vault, i file restavano nascosti a meno che l'impostazione di Obsidian **Rileva tutte le estensioni dei file** non fosse attiva — un'impostazione su cosa il vault indicizza, applicata a cartelle che non fanno parte del vault. Un `.txt` accanto alle tue note viene comunque elencato là fuori.
- Il menu a discesa del nome del vault non faceva nulla su un riquadro che non conteneva un file, che è esattamente il riquadro che useresti per andare altrove.
- Cliccare sul nome del vault lasciava il titolo di Obsidian accanto al percorso nel campo, in grigio, dove non compare in nessun altro momento: la riga si misura in base a ciò che ha disegnato, e in quel momento si è svuotata per fare posto al campo.

- Cliccare sullo spazio vuoto apriva il campo per poi perderlo: rivelare la nota in Esplora file porta via con sé il cursore, così il campo restava aperto ed evidenziato mentre ogni tasto premuto andava all'albero.
- Il gradino che mostra il percorso dalla radice del sistema disegnava una scia dello stesso percorso accanto al campo, non adattata, così un percorso profondo si sovrapponeva a se stesso.

## 1.3.0 — 2026-09-17[^1.3.0]

### Aggiunto

- **Porta un file dentro il vault dall'esterno.** Sposta o copia un file da un punto qualsiasi del disco a un percorso dentro il tuo vault; arriva come una nota vera, e uno spostamento rimuove l'originale solo dopo che la copia è riuscita.
- **Rilascia del testo o un file sulla barra per metterlo per iscritto.** Su una cartella: una nuova nota in quella cartella, con il nome che digiti. Sul nome della nota, oppure sul separatore di una cartella che ha una nota di cartella: aggiunto in fondo a quella nota, dopo una conferma.
- **Crea una nota di cartella** con una seconda pressione su ciò che apre la cartella, quando è attivo un plugin per le note di cartella e la cartella non ne ha ancora una. Viene collocata dove dicono le impostazioni di [Folder notes](https://github.com/LostPaul/obsidian-folder-notes).
- **Trascina una cartella dalla barra del percorso sulla barra delle schede** per aprirla lì: la sua nota di cartella se ne ha una, altrimenti una scheda posizionata in quella cartella.
- **La rotellina percorre il menu a discesa.** Sopra un nome, il primo scatto apre l'elenco di quel nome e ogni scatto successivo sposta l'evidenziazione di una riga. Una riga che sta scorrendo lateralmente tiene la rotellina per lo scorrimento.
- **Esci con la freccia dall'inizio del campo** per farvi entrare la cartella che lo precede: <kbd>←</kbd> per una cartella, <kbd>Maiusc</kbd>+<kbd>Home</kbd> (o <kbd>Home</kbd> con il menu a discesa chiuso) per tutte quante.
- **Il campo prende il colore di ciò che nomina**, lo stesso della sua riga nel menu a discesa, e diventa rosso quando nulla gli risponde — nel momento in cui <kbd>Invio</kbd> creerebbe qualcosa invece di aprirlo.
- **Le note di cartella sono grigie nel menu a discesa**, così si leggono come appartenenti alla loro cartella e non come una nota in più.
- **Clic centrale su un separatore** per aprire quella cartella in una nuova scheda: la sua nota di cartella, oppure una scheda posizionata al suo interno.

### Modificato

- **Il lucchetto e l'interruttore di rinomina sono un unico comando.** Fuori dal vault un lucchetto rosso e chiuso prende il posto dell'interruttore; aprirlo cede il posto all'interruttore, e uscire dalla modalità rinomina lo richiude.
- **Anche il tasto di rinomina interroga il lucchetto.** Fuori dal vault una pressione fa lampeggiare il lucchetto; una seconda pressione entro mezzo secondo concede ciò che concede il lucchetto e apre la modalità rinomina.
- **Il tasto di rinomina percorre un ciclo completo** — titolo in linea, nome, nome con estensione, percorso dal vault, percorso dalla radice del sistema — e la pressione successiva torna al titolo in linea.
- **<kbd>Ctrl</kbd>+clic e clic centrale non sono più sinonimi.** Uno apre una scheda e vi si sposta, l'altro la apre in secondo piano.
- **Il clic destro sul nome della nota apre il menu del file stesso.**
- **Il menu a discesa è alto quanto la finestra consente**, invece dei 300 pixel fissi di Obsidian.
- **Cliccare una cartella mentre un campo è aperto conserva tutto il percorso che la segue**, e entrare in una cartella dentro il campo ne elenca il contenuto per intero.
- **Il separatore apre una nota di cartella a qualsiasi profondità** con Folder notes attivo, ed è sottolineato ovunque ce ne sia una. Prima funzionavano solo le cartelle di primo livello. Con gli altri plugin per le note di cartella il separatore mostra ancora la cartella.

### Corretto

- **Un campo aperto sopravviveva al proprio file.** Passare a un'altra nota con la barra del percorso aperta lasciava la riga a nominare il vecchio file per il resto della sessione.
- **Elimina, Rinomina e Crea una copia venivano rifiutati fuori dal vault** con il lucchetto aperto, e non si potevano mai raggiungere per immagini, PDF e pagine.
- **<kbd>Ctrl</kbd>+<kbd>Invio</kbd> non faceva nulla mentre il menu a discesa era aperto** — cioè nel modo in cui ogni campo si apre.
- **<kbd>Invio</kbd> con il menu a discesa aperto ma senza nulla di evidenziato** non faceva nulla; ora conferma ciò che hai scritto.
- **Una riga che traboccava con tutti i nomi già al minimo non si poteva far scorrere**, rendendo irraggiungibile la fine del percorso.
- **Disattivare il plugin lasciava un pulsante morto** nell'intestazione di ogni nota che aveva modificato.

## 1.2.0 — 2026-08-25[^1.2.0]

### Aggiunto

- **Impostazione della lingua.** Lure segue di default la lingua di Obsidian, e può essere impostato su una qualsiasi delle proprie. È anche l'unico modo per raggiungere le traduzioni in greco e sanscrito, che Obsidian stesso non offre. L'etichetta dell'impostazione resta in inglese, così la si può sempre ritrovare partendo da una lingua che non sai leggere.

## 1.1.2 — 2026-08-25[^1.1.2]

### Modificato

- **Foglio di stile più leggero.** La riga non usa più i selettori `:has()` né la maggior parte delle regole `!important`. Si riadatta con meno lavoro, e gli avvisi della revisione dei plugin sono scesi da 56 a 7.

## 1.1.1 — 2026-08-22[^1.1.1]

### Corretto

- **Un nome di cartella breve poteva essere disegnato con uno spazio dentro** — `atlas` come `atl as` — perché lo spazio riservato alla sua forma accorciata era più largo del nome stesso.

## 1.1.0 — 2026-08-22[^1.1.0]

### Aggiunto

- **Vocabolario del clic destro.** Una pressione apre un menu; due e tre pressioni copiano via via di più — il nome, il nome con la sua estensione, il percorso. I menu della riga ora corrispondono a quelli di Esplora file, voce per voce.
- **Menu fuori dal vault.** Le righe del menu a discesa e il visualizzatore esterno offrono l'apertura, *Copia percorso* e *Mostra in Esplora file*; con il lucchetto aperto, anche *Nuova nota*, *Nuova cartella*, *Crea una copia*, *Rinomina…* ed *Elimina*. L'eliminazione sposta nel cestino di sistema e non è mai definitiva.
- **Apri altrove.** <kbd>Ctrl</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Maiusc</kbd> e il clic centrale sul nome della nota o su una cartella la aprono in una nuova scheda, in un riquadro affiancato o in una finestra. Entrambi sono trascinabili, come le righe corrispondenti in Esplora file.
- **Trascina le note sulla riga per spostarle.** Rilascia una nota, più note o una cartella su un segmento di cartella o sul nome del vault.
- **Comando: Attiva la barra del percorso**, con l'intero percorso selezionato — nessuna scorciatoia predefinita, assegnane una tua.
- **Digita un URL** nella barra del percorso: `http(s)://` e `obsidian://` si aprono come collegamenti, `file://` e i percorsi codificati in percentuale aprono il file.
- **Completamento con Tab**, come fa una shell: ogni pressione completa fin dove i nomi della cartella concordano e si ferma dove differiscono. <kbd>Maiusc</kbd>+<kbd>Tab</kbd> torna indietro. Quando non resta nulla da completare, <kbd>Tab</kbd> allarga invece la selezione: nome, nome con estensione, percorso dal vault, percorso dalla radice del sistema.
- **Il menu a discesa si apre dove sei** e anticipa nel campo ciò che indichi; uscendo dall'elenco ti restituisce il tuo testo.
- **Sposta una nota fuori dal vault** dopo una conferma che conta i collegamenti che romperà. Viene copiata fuori e poi cestinata, così si può recuperare come qualsiasi nota eliminata.
- Impostazione **Mostra le estensioni dei file**, e i percorsi tra virgolette (come li produce *Copia come percorso* di Windows) vengono compresi.
- **Le impostazioni compaiono nella ricerca delle impostazioni di Obsidian** su Obsidian 1.13 e successivi.

### Modificato

- **I percorsi lunghi si adattano al riquadro.** I nomi vengono accorciati partendo dal meno utile — il nome del vault, poi l'estensione, poi le cartelle, e per ultimo il nome della nota — mai oltre il punto in cui si possono ancora distinguere. Passa sopra un nome accorciato per leggerlo per intero.
- **Cliccare il nome della nota lo seleziona senza la sua estensione**, così rinominare non rischia più di cambiare il tipo di file.
- **Il tasto di rinomina si apre sul nome senza la sua estensione**, e le pressioni successive allargano la selezione.
- **Cliccare una cartella mantiene visibile il resto del percorso**, anche fuori dal vault.
- **Tornando a sfogliare dentro il tuo vault i file si aprono come note**, con collegamenti e backlink, anziché nel visualizzatore esterno.

### Corretto

- **Le etichette dei menu erano in inglese in tutte le lingue**; ora provengono dalle traduzioni di Obsidian stesso.
- **Il tasto di rinomina finiva in un vicolo cieco sulla finestra di rinomina di Obsidian** quando la nota era scorsa oltre il suo titolo.
- **<kbd>Esc</kbd> richiedeva due pressioni** per chiudere il campo e il suo menu a discesa.
- **<kbd>Ctrl</kbd>+<kbd>Invio</kbd> apriva un collegamento nell'editor** invece di agire sulla barra del percorso.
- **Rinominare fuori dal vault perdeva il nome digitato** quando si premeva il lucchetto.
- **Tab poteva girare a vuoto** su una cartella che sta accanto alla propria nota di cartella.

## 1.0.4 — 2026-08-13[^1.0.4]

### Aggiunto

- **La nota in cui ti trovi è segnata in blu** nel menu a discesa, così tornando a sfogliare la sua cartella si vede da dove sei partito.

## 1.0.3 — 2026-08-13[^1.0.3]

### Documentazione

- Il README rimanda alla pagina del plugin nel catalogo della comunità, e i README tradotti sono stati aggiornati.

## 1.0.2 — 2026-08-13[^1.0.2]

### Modificato

- **Richiede Obsidian 1.8.7 o successivo** (prima era 1.4.0). Due funzioni su cui la barra del percorso si appoggia — la copia dei file e il suggerimento di errore sotto il campo — ne hanno bisogno.
- **I download delle release portano una provenienza di build firmata**, così puoi verificare con `gh attestation verify` che `main.js` è stato compilato a partire da questo repository.

### Corretto

- **Aprire un file esterno mancante nell'app predefinita falliva in silenzio**; ora il fallimento viene segnalato.

## 1.0.1 — 2026-08-13[^1.0.1]

### Corretto

- **In modalità rinomina una nota entrava in conflitto con sé stessa** — tornando a sfogliare la propria cartella il suo nome spariva dall'elenco, come se bloccasse la propria rinomina.
- **La prima cartella mostrata dopo l'avvio di Obsidian non espandeva nulla.**
- **Scegliere una cartella dal menu a discesa poteva far uscire dalla modalità rinomina** invece di entrarci dentro.
- **Le modifiche esterne potevano essere sovrascritte in silenzio** da un altro scrittore, come Sync o un secondo riquadro. Ora le scritture sono atomiche.
- **L'azzeramento del contorno di focus si propagava ad altre viste**; ora si applica solo alle intestazioni modificate da Lure.

### Documentazione

- Il README e la guida all'uso sono disponibili in tutte le 44 lingue incluse nel plugin.
- La guida citava l'impostazione *Rileva tutte le estensioni dei file* di Obsidian, che ora si chiama *Mostra tutti i tipi di file*.

## 1.0.0 — 2026-08-10[^1.0.0]

Prima release. Sostituisce il nome del file nell'intestazione di una nota con un percorso del vault cliccabile e modificabile — una barra degli indirizzi per le tue note, modellata su quella di Dolphin.

### Aggiunto

- **Clic su una cartella** per un menu a discesa del contenuto della cartella superiore, per sostituirla con una vicina e lasciare intatto il resto del percorso.
- **Clic sul separatore** che segue una cartella per mostrarla ed espanderla in Esplora file, oppure per aprire la sua nota di cartella dove se ne occupa Folder notes.
- **Clic sul nome del file o sullo spazio vuoto** per digitare un percorso, con completamento automatico: `/` scende, <kbd>Backspace</kbd> risale di un livello, <kbd>Invio</kbd> conferma.
- **La modalità sposta/rinomina** porta le stesse interazioni allo spostamento e alla rinomina, con le stesse verifiche che fa Obsidian.
- **<kbd>Ctrl</kbd> apre in una nuova scheda** — oppure, in modalità sposta/rinomina, vi copia la nota.
- **<kbd>F2</kbd> alterna** fra il titolo in linea e la barra del percorso.
- **Fuori dal vault** (disattivato di default): il nome del vault apre gli altri vault, la cartella home, la radice del file system e le unità montate. Nulla là fuori viene scritto finché non lo sblocchi, e una nota può solo essere copiata fuori dal vault, mai spostata.
- **45 lingue.**

[^1.4.0]: Modifiche dopo la 1.3.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.3.0...1.4.0>
[^1.3.0]: Modifiche dopo la 1.2.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.2.0...1.3.0>
[^1.2.0]: Modifiche dopo la 1.1.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.2...1.2.0>
[^1.1.2]: Modifiche dopo la 1.1.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.1...1.1.2>
[^1.1.1]: Modifiche dopo la 1.1.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.0...1.1.1>
[^1.1.0]: Modifiche dopo la 1.0.4: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.4...1.1.0>
[^1.0.4]: Modifiche dopo la 1.0.3: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.3...1.0.4>
[^1.0.3]: Modifiche dopo la 1.0.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.2...1.0.3>
[^1.0.2]: Modifiche dopo la 1.0.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.1...1.0.2>
[^1.0.1]: Modifiche dopo la 1.0.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.0...1.0.1>
[^1.0.0]: La prima release: <https://github.com/Gelaende51/obsidian-lure/releases/tag/1.0.0>
