<!-- Traduzione di docs/usage.md — stato: commit 349b74e.
     Traduzione automatica (Claude Opus 5), non rivista da madrelingua.
     Le etichette del plugin vengono da src/lang/translations.ts e quelle di
     Obsidian dai testi che l'applicazione stessa include, quindi coincidono
     con ciò che vedi a schermo. -->

[English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · [Čeština](usage.cs.md) · [Dansk](usage.da.md) · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · [Bahasa Indonesia](usage.id.md) · **Italiano** · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · [Norsk](usage.no.md) · [Polski](usage.pl.md) · [Português](usage.pt.md) · [Português (Brasil)](usage.pt-BR.md) · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

# Uso

[← torna al README](README.it.md)

## Il percorso

Il percorso completo della nota dentro il vault sostituisce il nome del file da solo nell'intestazione della vista — la barra sotto la fila delle schede, quella che porta anche i pulsanti avanti e indietro.

Sulla riga ci sono due cose cliccabili, e **Il nome della cartella apre il menu** decide quale fa cosa:

| | Nome della cartella | Separatore che segue |
| --- | --- | --- |
| **Attivo** (predefinito) | Seleziona quella cartella per modificarla | Apre la cartella |
| **Disattivo** | Apre la cartella | Scende in quella cartella |

«Apre la cartella» significa quello che fa quel clic in un Obsidian senza aggiunte. Senza alcun plugin in ascolto lì, la cartella viene mostrata nella barra laterale di Esplora file — evidenziata ed espansa per vederne il contenuto.

Con [Folder notes](obsidian://show-plugin?id=folder-notes) installato lo stesso clic apre invece la nota di quella cartella. È l'unico plugin di note-cartella che si è visto rivendicare il percorso nell'intestazione; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) e [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) gestiscono le note-cartella ma non ascoltano il clic sul percorso, quindi con quelli il separatore mostra la cartella come sempre. Vedi [compatibilità](../compatibility.md#verified-against).

Un separatore è **sottolineato solo quando la cartella che lo precede ha davvero una nota-cartella**, così la sottolineatura è la promessa che c'è qualcosa da aprire. Ogni separatore resta comunque cliccabile — uno senza sottolineatura mostra ed espande la sua cartella nella barra laterale, cosa che il cursore a mano continua a segnalare. Contemporaneamente la sottolineatura lascia il nome della cartella: con lo scambio attivo il nome apre il menu, quindi segnarlo come il collegamento alla nota sarebbe una bugia.

**La modalità rinomina/sposta prevale su entrambi**, qualunque cosa dica l'impostazione: mentre uno spostamento è in sospeso, niente sulla riga apre una cartella, perché aprirla abbandonerebbe lo spostamento. I nomi delle cartelle si selezionano per la modifica e i separatori scendono — sono entrambi modi di scegliere la destinazione — e la sottolineatura sparisce per mostrare che l'apertura è sospesa.

La **radice del vault** è l'unico segmento che non è un segmento di percorso. Non ha una cartella superiore da cui elencare le vicine, quindi apre invece il [menu delle posizioni](#sfogliare-fuori-dal-vault) — gli altri vault, la cartella home, la radice del file system e le unità montate.

## Clic su un segmento: sostituiscilo con uno vicino

Cliccare sul nome di una cartella seleziona **il nome di quella cartella** in un campo di testo e apre un menu con la cartella **di un livello superiore** — la sua cartella madre. Digitando o scegliendo una voce si sostituisce questa cartella con una vicina e si lascia intatto tutto quello che sta sotto, così `Progetti/2026/Avvio.md` → clic su `2026` → scegli `2025` ti dà `Progetti/2025/Avvio.md`.

Cliccare sul **nome della nota** funziona allo stesso modo rispetto alla sua cartella, e seleziona il nome del file **estensione compresa** — rinominare o riportare altrove una nota di solito significa cambiare anche quella.

Il clic sulla cartella ha già selezionato un segmento, quindi **un ulteriore clic** allarga la selezione all'intera riga — quella cartella *e* tutto ciò che sta sotto — e quello che digiti sostituisce allora il resto del percorso in un colpo solo. Funziona uguale in navigazione e in modalità rinomina/sposta.

Vale solo come continuazione del clic che ha aperto il campo. Una volta che hai usato il campo, si comporta come qualsiasi altro campo di testo: un clic posiziona il cursore, un doppio clic prende una parola, un triplo clic prende la riga.

In ogni caso il resto del percorso resta visibile attorno al campo, come pastiglie prima e come testo non selezionato dopo, così il percorso completo non sparisce mai dall'intestazione. Digita per sostituire la selezione, oppure premi <kbd>Fine</kbd> / <kbd>→</kbd> per tenerla e modificare da lì. Il menu elenca l'intera cartella qualunque cosa sia precompilata; comincia a filtrare solo quando digiti davvero.

## Scendere con il separatore

Cliccare su un separatore (con **Il nome della cartella apre il menu** disattivo) fa scendere nella cartella che lo precede: il menu elenca il contenuto di *quella* cartella, e il resto del percorso si apre selezionato nel campo. Scegliendo una cartella la si aggiunge alla scia del percorso e si apre subito il menu successivo, così puoi scendere lungo un albero a colpi di clic senza lasciare la riga dell'intestazione.

## Le voci del menu sono vere righe da gestore di file

Ogni file e cartella nel menu si comporta come la sua riga in Esplora file:

- **Clic destro** per lo stesso menu contestuale — *Nuova nota* / *Nuova cartella* su una cartella, *Apri in nuova scheda* / *Rinomina* / *Elimina* su un file — comprese le voci che altri plugin aggiungono ai menu dei file.
- **Trascina** una voce ovunque Obsidian accetti un file: in un editor per inserire un collegamento, su una cartella in Esplora file per spostarlo, sulla barra delle schede per aprirlo.

Il testo dei menu viene dalle traduzioni di Obsidian stesso, quindi combacia con il resto dell'applicazione in ogni lingua.

## Digitare un percorso

- Cliccare sullo **spazio vuoto** prima o dopo il percorso apre un campo di testo precompilato con l'intero percorso e tutto selezionato — scrivici sopra, o modificalo sul posto. (Cliccando sul nome del file si seleziona solo quello; vedi sopra.)
- Digitare mentre è visibile la scia del percorso trasforma l'ultimo segmento in un piccolo campo con completamento automatico dal vivo limitato alla cartella corrente.
- `/` conferma il segmento corrente e vi scende dentro.
- <kbd>Backspace</kbd> in un campo vuoto risale alla cartella madre, riaprendone il nome con il cursore alla fine.
- <kbd>Invio</kbd> conferma; <kbd>Esc</kbd> o un clic altrove annulla e torna al percorso reale del file.

Il campo è privo di cornice — niente riquadro, niente bordo — così si legge come il testo stesso del percorso, e cresce da solo mentre digiti.

## La navigazione non tocca mai il file aperto

Nella modalità predefinita (navigazione) la nota aperta non viene **mai** rinominata né spostata.

- Un percorso che corrisponde a un file esistente lo apre.
- Un percorso che non esiste ancora chiede *«Creare un nuovo file?»*. Confermando si creano le cartelle mancanti e il file; annullando non succede assolutamente nulla.

## <kbd>Ctrl</kbd> — nuova scheda, e copia invece di sposta

Tenere <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> su macOS) mentre scegli un file dal menu, o mentre premi <kbd>Invio</kbd> su un percorso, manda il risultato in una **nuova scheda** anziché in questa:

| | Senza modificatori | Con <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Scegliere o digitare un file esistente | Si apre qui | Si apre in una nuova scheda |
| Digitare un percorso che non esiste | Chiede, poi apre qui | Chiede, poi apre in una nuova scheda |
| Confermare un percorso in modalità rinomina/sposta | **Sposta** la nota lì | La **copia** lì e apre la copia in una nuova scheda |

Il modificatore è letto con la regola di Obsidian stesso, quindi si comporta esattamente come su un collegamento o su una riga di Esplora file — anche il clic centrale significa «nuova scheda», <kbd>Ctrl</kbd>+<kbd>Alt</kbd> significa una divisione e <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Maiusc</kbd> una nuova finestra.

La copia si rifiuta di sovrascrivere, esattamente come lo spostamento — anche sul percorso stesso della nota, dove non c'è nulla di sensato da copiare.

## Sfogliare fuori dal vault

**Questo è disattivato di default.** Attiva prima **Accesso ai file esterni** nelle impostazioni — leggere e scrivere fuori dal vault è l'unica cosa che questo plugin fa e che Obsidian da solo non farebbe, quindi ci si entra apposta invece di doverne uscire. Con l'opzione spenta il nome del vault mostra semplicemente il tuo vault in Esplora file, e qui niente guarda mai oltre.

Cliccare sul **nome del vault** (o sull'icona 🏠, quando *Mostra il nome del vault* è disattivo) apre un menu di luoghi anziché di contenuti:

- **Gli altri tuoi vault**, letti dal registro di Obsidian stesso, prima quello aperto più di recente, ciascuno sotto l'icona del vault di Obsidian — la stessa che l'applicazione usa per i suoi comandi sui vault. Il vault che hai già aperto porta invece una casa: è il punto da cui la riga parte di default, non un posto dove andare.
- La **cartella home**, sotto il nome del tuo account, contrassegnata da una `~`. Lucide non ha una tilde, quindi questa icona la disegna il plugin sulla stessa griglia 24×24 di Lucide e con lo stesso spessore di tratto — un'icona che manca al set, non un carattere di testo piazzato in mezzo alle icone.
- La **radice del file system**, etichettata `root` — non tradotta, perché quello è il suo nome su ogni sistema — anziché `/`, che accanto al separatore che segue si leggerebbe come un passo vuoto.
- Le **unità montate**, con un'icona per tipo dove è facile stabilirlo: condivisioni di rete, dischi ottici, floppy e supporti rimovibili hanno la propria; tutto il resto riceve un'unità generica. Su Windows le unità compaiono come `C:` con un'icona generica — i nomi dei volumi e i tipi precisi richiedono WMI, che di proposito non viene usato.

Scegliere un altro vault **non fa passare Obsidian a quello.** Tutto ciò che hai aperto resta aperto; il percorso comincia semplicemente a sfogliare lì. È tutto il senso di averlo sulla barra del percorso invece di rimandare al selettore di vault della barra laterale.

### Mentre sei fuori

Il percorso **parte dal luogo che hai scelto**, non dall'organizzazione delle cartelle della macchina — scegli `Archivio` e la riga dice `Archivio / note / …`, non `/home/tu/Vaults/Archivio/note/…`. Il primo segmento porta un'icona per ciò che è (vault, home, unità), e <kbd>Backspace</kbd> si ferma lì invece di continuare a salire nel resto del file system. Con *Mostra il nome del vault* disattivo, quel segmento è la sola icona — l'impostazione riguarda il segmento iniziale della riga qualunque vault nomini, non soltanto il tuo.

La barra del percorso resta **incorniciata nel colore di errore** — lo stesso anello che disegna la modalità rinomina — per tutto il tempo in cui punta fuori dal tuo vault. Segnala una condizione permanente, non un istante: finché è lì, nulla della gestione propria di Obsidian si applica a ciò che la riga mostra, e la scrittura è bloccata finché non dici altrimenti.

Per il resto sfogliare funziona come dentro: pastiglie, separatori, digitazione, completamento automatico, <kbd>Backspace</kbd> per uscire. Valgono anche le stesse regole di visibilità, quindi le estensioni non supportate hanno ancora bisogno di **Mostra tutti i tipi di file** di Obsidian e i file nascosti dell'impostazione di questo plugin.

**Clic destro e trascinamento** sulle voci del menu non funzionano là fuori — sono gestori di Esplora file, e hanno bisogno di un file che il vault conosca.

### Scrivere fuori dal vault

Tutto ciò che scrive è **bloccato di default**. Accanto al pulsante di rinomina nell'intestazione compare un **lucchetto** per tutto il tempo in cui la riga punta fuori dal tuo vault; premendolo il lucchetto si apre e diventa rosso, in tinta con l'anello attorno alla riga.

Il permesso è concesso **a un luogo, non a un momento**: sopravvive a tutto quello che faresti lavorando in un posto — finire uno spostamento, cliccare via dal campo, aprire un file — e finisce quando scegli un altro vault, un'altra unità o un'altra radice dal menu, quando la riga torna a un file del vault, o quando premi di nuovo il lucchetto. Così una serie di spostamenti dentro una cartella costa una pressione, non una per file.

Con il lucchetto aperto, la barra del percorso si comporta là fuori come si comporta dentro:

| Gesto | Risultato |
| --- | --- |
| Digitare un nome che non esiste, <kbd>Invio</kbd> | La stessa richiesta «crearlo?» di dentro; vengono create anche le cartelle mancanti. Un nome senza estensione diventa un `.md`, esattamente come dentro |
| Modalità rinomina/sposta, digitare un nome nuovo | Rinomina il file che la riga sta mostrando. Un nome senza estensione mantiene quella del file — qui fuori una cartella contiene ogni genere di file, e una rinomina non dovrebbe trasformare in silenzio un `.png` in un `.md` |
| Modalità rinomina/sposta, sfogliare altrove, scegliere **mantieni questo nome** | Lo sposta lì con il nome che ha già |
| Tenere <kbd>Ctrl</kbd> su una delle due | Copia invece di spostare, e apre la copia in una nuova scheda |

Con il lucchetto chiuso, tutte queste azioni segnalano che cosa le blocca invece di avvenire. In nessuno dei due stati viene sovrascritto qualcosa: una destinazione che esiste già viene rifiutata, e il rifiuto è del file system stesso (`COPYFILE_EXCL`, una creazione esclusiva) e non un controllo che potrebbe perdere la corsa. Uno spostamento fra file system diversi — da una chiavetta USB, da una condivisione di rete — ripiega su copia-poi-elimina, e l'originale viene rimosso solo quando la copia è arrivata.

**Una cosa che il lucchetto non sblocca: spostare una nota *fuori* dal tuo vault.** `fileManager` non può seguire un file oltre quel confine, quindi ogni collegamento che punta alla nota si romperebbe in silenzio e Obsidian la vedrebbe semplicemente sparire. Tenendo <kbd>Ctrl</kbd> la si copia fuori, cosa che non ha quel problema, e l'avviso lo dice. Il senso opposto — portare un file esterno *dentro* il vault — non è ancora implementato.

### Aprire un file esterno

L'editor di Obsidian funziona solo sui file dentro il vault, quindi un file esterno **non può** essere aperto come una nota vera con collegamenti, backlink e il resto — è un limite dell'applicazione, non di questo plugin. Sceglierne uno apre invece un'**anteprima**, in sola lettura finché non dici altrimenti:

| Tipo | Mostrato come |
| --- | --- |
| `.md`, `.markdown` | Markdown renderizzato |
| Immagini, audio, video, PDF | Lettore/visualizzatore nativo |
| Qualsiasi altro file di **testo** (`.json`, `.css`, `.log`, `.txt`, …) | Testo semplice così com'è |
| Formati binari senza visualizzatore (`.zip`, `.exe`, …) | Passati a *Apri esternamente* |

Il visualizzatore ha due letture di un file e, poiché si escludono a vicenda, viene mostrata solo quella **verso cui** passeresti:

| | Cosa fa | Predefinito per |
| --- | --- | --- |
| **Visualizza come Markdown** | Renderizza il file come una nota, in sola lettura | `.md`, `.markdown` |
| **Modifica come testo** | Il sorgente, modificabile | tutto il resto |

Fuori dal vault, **Modifica come testo** è anche la pressione che toglie la sola lettura — la modalità e il permesso sono un unico gesto invece di due pulsanti su cui ragionare. Si tinge di rosso **ogni volta che premerlo toglierebbe la sola lettura**, sia che tu stia armando la modifica sul posto sia che arrivi direttamente dalla vista renderizzata; dentro il vault non c'è nulla da sbloccare, quindi resta normale. **Visualizza come Markdown** riceve una velatura leggera del colore d'accento — la stessa tinta che Obsidian dà al testo selezionato — a segnarlo come la via del ritorno e non come un invito ad agire.

Poiché il pulsante segue la *modifica* e non la modalità grezza, un file in sola lettura nella vista testo offre comunque **Modifica come testo**: è quella la pressione che la arma. Un file in cui non si potrà mai scrivere — troncato o illeggibile — dice invece **Visualizza come testo**, perché è tutto ciò che quella pressione può dare.

I valori predefiniti sono quelli utili e non quelli letterali: un `#` in uno script di shell è un commento, non un titolo, quindi renderizzare un `.log` come Markdown se lo mangerebbe in silenzio. Entrambi i predefiniti si possono scavalcare file per file, e la scelta finisce nella cronologia della scheda, così avanti/indietro e uno spazio di lavoro riaperto la conservano — moltissime note vivono in file `.txt`, e moltissimi file `.md` si leggono meglio come sorgente.

**I file dentro il tuo vault sono modificabili subito**, senza sblocco: *Modifica come testo* è un vero editor e salva mentre digiti.

**La modifica viene ricordata attraverso il passaggio.** Andare su *Visualizza come Markdown* la sospende — un render statico non ha dove scrivere, e l'Anteprima dal vivo ha bisogno dell'editor di Obsidian, che esiste solo per i file dentro il vault — così nulla sostiene che stai modificando mentre sei lì. Tornando a *Modifica come testo* si riprende da dove avevi lasciato.

**I file fuori dal vault si aprono in sola lettura, e *Modifica come testo* la toglie.** Quella pressione è tutto il cancello: finché non avviene, là fuori non viene scritto nulla. Dopo, il file salva mentre digiti, esattamente come uno del vault; e la riga di stato passa da un lucchetto a una matita. Lo sblocco copre quel file in quella scheda — navigando verso un altro file si riblocca, e di proposito non viene salvato nella cronologia della scheda, così uno spazio di lavoro riaperto non torna mai con la scrittura già armata su un file di sistema che non ricordi di aver aperto.

**I file troncati restano in sola lettura comunque** — salvare ciò che è a schermo scarterebbe tutto ciò che sta oltre il limite, quindi il pulsante non viene proprio offerto anziché essere offerto e rifiutato. Lo stesso vale per un file che non si è potuto leggere: non c'è niente da riscrivere se non un riquadro vuoto.

Se la scrittura fallisce — un mount in sola lettura, un file non tuo — viene mostrato in un avviso il motivo dato dal sistema stesso.

I file molto grandi vengono mostrati troncati, e la riga di stato lo dice invece di lasciartelo scoprire — accanto alle altre condizioni e non appesa ai pulsanti, perché è un fatto sul file come gli altri. I limiti sono misurati contro un renderizzatore vero e non stimati a occhio — impaginare un megabyte di testo in un solo riquadro uccide di netto il processo di rendering di Obsidian, e il Markdown costa parecchie volte di più per byte rispetto al testo semplice, quindi i due hanno limiti distinti e una singola riga enorme viene accorciata anche quando il file nel suo insieme è piccolo.

**Le righe di stato sono etichette, e la spiegazione è un suggerimento.** Ogni riga dice ciò che è vero con le poche parole che servono — *Fuori dal tuo vault*, *Nessun editor per questo tipo di file*, *Troncato — file troppo grande* — perché i pulsanti accanto dicono già in che stato è il file. Passandoci sopra il mouse arriva la frase: perché Obsidian non può aprirlo come nota, che cosa succederebbe altrimenti a questo tipo di file, che cosa ti costa il troncamento.

Questo vale anche per i file **dentro** il tuo vault. Obsidian passa qualsiasi estensione per cui non ha una vista direttamente all'applicazione predefinita del desktop — quindi un `.txt` o un `.json` nel tuo vault ti farebbe uscire del tutto da Obsidian. Adesso quelli si aprono nello stesso visualizzatore, con l'anello arancione, perché «aprilo in Obsidian» è ciò che hai chiesto — ed essendo file del vault, lì sono modificabili senza alcuno sblocco. I file binari senza visualizzatore mantengono il comportamento di Obsidian; non c'è nulla da mostrare.

L'anteprima si apre **nella scheda in cui eri**, così avanti/indietro ti riportano alla nota da cui venivi; tieni <kbd>Ctrl</kbd> per una nuova scheda come ovunque. La barra dell'intestazione continua a mostrare il percorso del file esterno mentre è aperto, così puoi proseguire a sfogliare da lì.

Una riga discreta sopra il contenuto offre le vie d'uscita:

- **Apri in *(vault)*** — mostrata quando il file appartiene a uno dei tuoi altri vault. Lo passa al gestore di URI di Obsidian stesso, che apre la finestra di quel vault con la nota dentro, come una nota vera e modificabile. Questa finestra resta esattamente com'era; nulla cambia sotto di te.
- **Visualizza come Markdown** / **Modifica come testo** — le due letture; la seconda toglie anche la sola lettura fuori dal vault.
- **Apri esternamente** — passa il file all'applicazione predefinita del tuo desktop, compresi i formati binari che questo visualizzatore non sa mostrare.

Nulla fuori dal tuo vault viene scritto se prima non premi *Modifica come testo*. Vedi la sezione [Fuori dal vault](README.it.md#fuori-dal-vault) del README per la spiegazione completa.

## I due colori di avviso

| | Quando | Che cosa significa |
| --- | --- | --- |
| Anello **rosso** sulla barra del percorso | La riga punta fuori dal tuo vault | Obsidian non può aprire ciò che c'è lì come una nota, e là fuori non viene scritto nulla finché non apri il lucchetto. |
| Anello **arancione** sulla barra del percorso, voci arancioni nel menu | Il file è di un tipo testuale per cui Obsidian non ha una vista | Un avvertimento. Obsidian lo passerebbe all'applicazione predefinita del tuo desktop; il plugin lo mostra al suo posto. |

I **due sono indipendenti, e possono valere entrambi insieme** — un `.json` esterno è fuori dal tuo vault *ed* è un tipo per cui Obsidian non ha un editor. Nel visualizzatore compaiono come righe separate, ciascuna a dichiarare solo il proprio fatto. Sulla barra del percorso vince il rosso quando valgono entrambi, dato che due anelli sarebbero solo rumore.

Il livello arancione è deliberatamente stretto. I tipi registrati (Markdown, canvas, immagini, PDF, audio, video) sono gestiti come si deve e non ricevono nulla. Nemmeno i file binari — non trasformerai per sbaglio uno `.zip` in un pasticcio scrivendoci dentro. Quel che resta è esattamente il pericolo: un `.json`, `.css` o `.log` che **Mostra tutti i tipi di file** ha reso visibile.

Vince il rosso dove varrebbero entrambi; due anelli insieme sarebbero solo rumore.

## Modalità sposta/rinomina

Il pulsante con la matita all'estrema destra dell'intestazione — accanto al pulsante della modalità di vista, della stessa dimensione dei pulsanti nativi — attiva e disattiva la modalità sposta/rinomina. La riga dell'intestazione viene allora incorniciata nel colore d'accento, esattamente come quando si rinomina in Esplora file. Gli stessi clic e gli stessi tasti confermano ora uno spostamento o una rinomina tramite `fileManager.renameFile` di Obsidian, così tutti i collegamenti alla nota seguono.

Mentre rinomini:

- Il nome file attuale è fissato nel menu di ogni cartella, così spostare una nota senza rinominarla è un solo clic.
- I nomi già occupati nella cartella di destinazione sono in grigio ma restano selezionabili.
- Quello che digiti è validato dal vivo contro le regole di rinomina di Obsidian stesso — stessi insiemi di caratteri, stessi messaggi, stesso suggerimento rosso che ottieni rinominando nell'albero dei file — così un nome illegale o in conflitto viene segnalato mentre scrivi e non può essere confermato.
- Cliccare fuori dalla barra dell'intestazione, o l'intestazione che perde il fuoco, chiude la modalità rinomina.

## Un tasto per entrambe le rinomine

Il comando di rinomina (<kbd>F2</kbd> di default, o quello a cui l'hai riassegnato) **alterna** fra la rinomina del titolo in linea di Obsidian e la barra del percorso di questo plugin con l'intero percorso selezionato. Se hai disattivato il titolo in linea di Obsidian, la barra del percorso diventa l'unico bersaglio, così il tasto non resta mai senza effetto.

Funziona avvolgendo il comando `workspace:edit-file-title` anziché catturare il tasto, quindi riassegnare la scorciatoia e lanciare il comando dalla tavolozza continuano a funzionare senza cambiamenti.

## Come vengono tinte le voci del menu

| Colore | Significa |
| --- | --- |
| **Viola** | Una nota (`.md`, `.markdown`) — ciò che Obsidian aprirà come nota, distinto in una cartella dal contenuto misto |
| **Arancione** | Un tipo testuale per cui Obsidian non ha una vista; vedi [i colori di avviso](#i-due-colori-di-avviso) |
| **Attenuato** | Fuori dal tuo vault, quindi la gestione propria del vault non si applica |
| **Blu** | La nota in cui ti trovi. Durante la navigazione è la sua stessa voce; in modalità rinomina/sposta la voce *mantieni questo nome* ne prende il posto — la stessa nota in entrambi i casi |
| **Grigio** | Solo in modalità rinomina/sposta: il nome è occupato. Resta selezionabile — sceglierlo riempie il campo, dove la validazione segnala il conflitto |

## Regole di visibilità

- I file con estensioni non supportate compaiono nei menu solo se l'impostazione **Mostra tutti i tipi di file** di Obsidian è attiva.
- Il menu mostra al massimo 100 voci — il limite di Obsidian stesso. Quando una cartella ne ha di più, l'ultima riga dice quante sono rimaste fuori; continua a digitare per restringere l'elenco.
- I file e le cartelle nascosti compaiono solo se l'impostazione **Mostra i file nascosti** di questo plugin è attiva.
- **La protezione dalla sovrascrittura funziona allo stesso modo qualunque sia la visibilità** — un file nascosto ti impedisce comunque di sovrascriverlo.

## Riassunto

| Vuoi… | Fai così |
| --- | --- |
| Aprire una cartella (la sua nota, o mostrarla) | Clic sul separatore **dopo** quella cartella |
| Sostituire una cartella con una vicina | Clic sul nome di quella cartella, poi digita o scegli |
| Rinominare o riportare altrove la nota | Clic sul nome della nota — estensione compresa |
| Sfogliare il contenuto di una cartella | Clic sul nome di quella cartella; il menu elenca la sua cartella madre, quindi clicca sulla cartella **sotto** quella che vuoi |
| Riscrivere una cartella e tutto ciò che sta sotto | **Doppio clic** sul nome di quella cartella, poi digita |
| Modificare il percorso a partire da una cartella | Clic sul nome di quella cartella, poi <kbd>Fine</kbd> o <kbd>→</kbd> per deselezionare |
| Saltare a un file digitandone il percorso | Clic sul nome del file o sullo spazio vuoto, digita, <kbd>Invio</kbd> |
| Aprire un file in una nuova scheda | <kbd>Ctrl</kbd> mentre lo scegli, oppure <kbd>Ctrl</kbd>+<kbd>Invio</kbd> |
| Copiare la nota altrove invece di spostarla | Matita, poi <kbd>Ctrl</kbd> mentre scegli o confermi la destinazione |
| Creare una nota a un percorso che non esiste | Digita il percorso, <kbd>Invio</kbd>, conferma la richiesta |
| Scendere di un livello mentre digiti | Digita `/` |
| Risalire di un livello mentre digiti | <kbd>Backspace</kbd> nel campo vuoto |
| Spostare o rinominare la nota aperta | Clic sulla matita, poi sfoglia o digita come sopra |
| Spostare senza rinominare | Matita → clic fin dentro la cartella di destinazione → scegli il nome file attuale fissato in cima |
| Rinominare sul posto | <kbd>F2</kbd> due volte (la prima va al titolo in linea, la seconda all'intestazione) |
| Saltare a un altro vault, alla home o a un'unità | Clic sul nome del vault |
| Aprire un file fuori dal vault | Nome del vault → scegli un luogo → sfoglia → scegli il file (sola lettura fino a *Modifica come testo*) |
| Annullare qualsiasi cosa | <kbd>Esc</kbd>, o clic fuori dalla barra dell'intestazione |

## Impostazioni

| Impostazione | Valori | Predefinito | Che cosa fa |
| --- | --- | --- | --- |
| **Allineamento** | Sinistra / Centrato / Destra | Sinistra | Dove sta il percorso nella riga dell'intestazione. *Centrato* corrisponde all'aspetto classico di Obsidian. |
| **Separatore** | Qualsiasi carattere | `/` | Il separatore disegnato fra i segmenti. Davanti al campo di testo ci sono sei preimpostazioni da un clic (`/ > ▸ › \ •`). |
| **Mostra il nome del vault** | Attivo / Disattivo | Attivo | Se il vault stesso è il primo segmento del percorso. Disattivato, quel segmento diventa un'icona 🏠 invece di sparire, così il percorso comincia comunque da qualcosa di cliccabile. |
| **Il nome della cartella apre il menu** | Attivo / Disattivo | Attivo | Scambia quello che fanno il nome di una cartella e il separatore che la segue — vedi [la tabella sopra](#il-percorso). Con [Folder notes](obsidian://show-plugin?id=folder-notes) il separatore apre le note-cartella. Non si applica mai in modalità rinomina/sposta. |
| **Mostra i file nascosti** | Attivo / Disattivo | Disattivo | Se i file e le cartelle nascosti sono elencati nei menu. La protezione dalla sovrascrittura vale comunque. |
| **Accesso ai file esterni** | Attivo / Disattivo | **Disattivo** | Se il nome del vault apre il menu delle posizioni. Disattivato, niente nel plugin guarda mai oltre questo vault. |

## Sostituire le icone

Lure disegna tre icone: quella della radice del vault (quando **Mostra il nome del vault** è disattivo), l'interruttore rinomina/sposta, e il lucchetto che regola la scrittura fuori dal vault. Tutte si possono sostituire da un tema o da uno snippet CSS — imposta il glifo sostitutivo e nascondi quello incluso in un'unica regola:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* Il lucchetto ha due stati; `.is-active` è quello aperto. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}

.lure-unlock-btn.is-active {
	--lure-icon-glyph: "🔓";
}
```

`--lure-icon-glyph` accetta qualunque cosa sia valida in `content` di CSS, quindi `url(...)` vale per un'immagine così come per un glifo di testo o un'emoji. Lascia stare `--lure-icon-svg` per tenere l'icona di Lucide e disegnare il tuo glifo accanto.
