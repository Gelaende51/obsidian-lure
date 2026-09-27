<!-- Traduzione di docs/usage.md — stato: commit 94b1372.
     Traduzione automatica (Claude Sonnet 5), non rivista da madrelingua.
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

Dove la nota della cartella è quella che stai già leggendo, il clic mostra invece la cartella — non c'è nulla da aprire che non sia già a schermo, che è quello che il secondo clic ha sempre significato.

Con [Folder notes](obsidian://show-plugin?id=folder-notes) installato lo stesso clic apre invece la nota di quella cartella, **a qualsiasi profondità**: la nota viene qui risolta secondo la convenzione di quel plugin invece di lasciarglielo rispondere. Quel plugin riconosce solo le cartelle che ha marcato, che su un percorso di più di una cartella di profondità non sono nessuna di esse, quindi il clic che apriva la nota di una cartella di primo livello non faceva più nulla più in profondità. Gli altri due plugin per note di cartella non pubblicano alcuna convenzione da leggere e non rivendicano mai la riga, quindi con quelli il separatore mostra la cartella come ha sempre fatto. È l'unico plugin per note di cartella trovato che rivendica il percorso dell'intestazione; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) e [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) gestiscono le note di cartella ma non ascoltano un clic sul percorso, quindi con quelli il separatore mostra la cartella come al solito. Vedi [compatibilità](../compatibility.md#verified-against).

Un separatore è **sottolineato solo quando la cartella che lo precede ha davvero una nota di cartella**, quindi la sottolineatura è una promessa che c'è qualcosa da aprire — a qualsiasi profondità con [Folder notes](obsidian://show-plugin?id=folder-notes) in esecuzione, dato che la nota viene qui risolta invece di lasciarla marcare a quel plugin. Dove non è quel plugin in esecuzione, niente è sottolineato e niente si apre: il separatore mostra, come fa senza alcun plugin per note di cartella. Ogni separatore resta comunque cliccabile — uno senza sottolineatura mostra ed espande la sua cartella nella barra laterale, cosa che il cursore a puntatore segnala comunque. La sottolineatura si sposta via dal nome della cartella nello stesso momento: con lo scambio attivo, il nome apre il menu, quindi marcarlo come il link alla nota sarebbe una bugia.

**La modalità rinomina/sposta prevale su entrambi**, qualunque cosa dica l'impostazione: mentre uno spostamento è in sospeso, niente sulla riga apre una cartella, perché aprirla abbandonerebbe lo spostamento. I nomi delle cartelle si selezionano per la modifica e i separatori scendono — sono entrambi modi di scegliere la destinazione — e la sottolineatura sparisce per mostrare che l'apertura è sospesa.

La **radice del vault** è l'unico segmento che non è un segmento di percorso. Non ha una cartella superiore da cui elencare le vicine, quindi apre invece il [menu delle posizioni](#sfogliare-fuori-dal-vault) — gli altri vault, la cartella home, la radice del file system e le unità montate.

## Il separatore proprio del vault

Il separatore subito dopo il nome del vault rappresenta il vault stesso invece
che una cartella, quindi fa quello che nessun altro separatore può fare:

| | Primo clic | Clic successivo |
| --- | --- | --- |
| **Con un plugin di pagina iniziale** (una pagina che ti accoglie quando Obsidian si apre) | Apre quella pagina in questo riquadro | Ripiega l'albero dei file |
| **Senza uno** | Ripiega l'albero dei file | Ripristina esattamente ciò che era aperto |

Clic ordinari, non un doppio clic: una volta che la pagina è aperta, il separatore
non ha più nulla da aprire, quindi il clic successivo è il ripiegamento — per
quanto tempo tu ci metta.

È **sottolineato** quando c'è una pagina iniziale da aprire, la stessa promessa
che fa il separatore di una cartella: c'è qualcosa lì. Il ripiegamento è un
interruttore — il clic successivo ripristina le cartelle che erano aperte, e
solo quelle, così un albero che avevi organizzato non si perde dando un'occhiata
a qualcos'altro.

## Un riquadro senza file

Una scheda vuota, il grafico e qualsiasi altra cosa che non nomina un file
ottengono una riga tutta loro: il vault, poi un segmento che dice cosa contiene
il riquadro.

```
my-vault / :blank      una nuova scheda
my-vault / :graph      il grafico, locale o globale
my-vault / :<type>     qualsiasi altra cosa senza file
```

Anche l'**elenco della radice del vault** offre queste pagine, sotto le
cartelle e le note che ci sono davvero: scegli `:graph` o `:search` lì e il
riquadro apre quella vista, esattamente come scegliere una nota apre la nota.
Quali pagine esistono viene letto da Obsidian invece che scritto qui — ogni
vista che non esiste per mostrare un file, quindi un plugin che ne registra
una (una scheda home, un calendario) appare senza che questo plugin ne sappia
nulla. Le viste che hanno bisogno di un file — Markdown, PDF, immagini, tele,
basi — non vengono offerte: non c'è nulla da mostrare per loro.

I due punti sono il punto: nessun file o cartella può chiamarsi `:graph`,
quindi la riga non può essere scambiata per un percorso apribile. L'etichetta
viene dal tipo di vista invece che dal testo di Obsidian, quindi si legge
uguale qualunque sia la lingua dell'interfaccia, e un `-view` finale viene
tolto: un plugin di scheda home registra la sua vista come
`home-launcher-view`, e la riga dice `:home-launcher`.

Cliccare lo spazio vuoto, o l'etichetta stessa, **apre il campo alla radice
del vault**: digita un percorso e <kbd>Invio</kbd> lo apre in questo stesso
riquadro, con lo stesso completamento, lo stesso menu e lo stesso campo rosso
che offre di creare ciò che non c'è ancora. Una scheda vuota è un buon posto
per digitare dove vuoi andare, che è a questo che serve.

L'etichetta è un'etichetta e nient'altro: nessun menu, nessun trascinamento,
nessuna rinomina. I riquadri nelle barre laterali sono lasciati del tutto in
pace — un riquadro di backlink mantiene il titolo che gli dà Obsidian.

Tele, PDF, immagini e basi non hanno bisogno di niente di tutto questo. Sono
file, quindi ottengono una normale barra del percorso.

## Clic su un segmento: sostituiscilo con uno vicino

Cliccare sul nome di una cartella seleziona **il nome di quella cartella** in un campo di testo e apre un menu con la cartella **di un livello superiore** — la sua cartella madre. Digitando o scegliendo una voce si sostituisce questa cartella con una vicina e si lascia intatto tutto quello che sta sotto, così `Progetti/2026/Avvio.md` → clic su `2026` → scegli `2025` ti dà `Progetti/2025/Avvio.md`.

Cliccare sul **nome della nota** funziona allo stesso modo rispetto alla propria cartella, e seleziona il nome **senza la sua estensione** — la rinomina è la modifica più comune, e digitare sopra una selezione che includeva `.md` in passato cambiava il tipo di file per sbaglio. L'estensione resta visibile a una sola pressione di distanza: <kbd>→</kbd> ci arriva, e il doppio clic che allarga a tutta la riga la prende insieme al resto.

Il clic sulla cartella ha già selezionato un segmento, quindi **un ulteriore clic** allarga la selezione all'intera riga — quella cartella *e* tutto ciò che sta sotto — e quello che digiti sostituisce allora il resto del percorso in un colpo solo. Funziona uguale in navigazione e in modalità rinomina/sposta.

Vale solo come continuazione del clic che ha aperto il campo. Una volta che hai usato il campo, si comporta come qualsiasi altro campo di testo: un clic posiziona il cursore, un doppio clic prende una parola, un triplo clic prende la riga.

In entrambi i casi il resto del percorso resta visibile intorno al campo, come etichette prima di esso e come testo non selezionato dopo, così il percorso completo non sparisce mai dall'intestazione. Digita per sostituire la selezione, oppure premi <kbd>→</kbd> per mantenerla e modificare da lì. Il menu elenca l'intera cartella indipendentemente da cosa è precompilato; comincia a filtrare solo quando digiti davvero qualcosa.

## Scendere con il separatore

Cliccare su un separatore (con **Il nome della cartella apre il menu** disattivo) fa scendere nella cartella che lo precede: il menu elenca il contenuto di *quella* cartella, e il resto del percorso si apre selezionato nel campo. Scegliendo una cartella la si aggiunge alla scia del percorso e si apre subito il menu successivo, così puoi scendere lungo un albero a colpi di clic senza lasciare la riga dell'intestazione.

## Il menu si apre dove ti trovi

L'elenco si apre sulla voce in cui ti trovi — la nota a cui appartiene questa
barra, oppure, quando un clic su una cartella ne ha elencato la cartella madre,
quella cartella — invece che sulla prima riga. In una cartella di duecento note
la prima riga non è affatto vicina a te.

**Una rotellina sopra un nome ne apre l'elenco e lo percorre.** Il primo scatto
apre lo stesso elenco che apre premere il nome, e ogni scatto successivo sposta
l'evidenziazione di una riga, mettendo ciò che stai puntando nel campo esattamente
come fanno le frecce — così una voce vicina può essere trovata e scelta senza
tastiera. Girare oltre l'una o l'altra estremità ti restituisce il tuo testo. Una
riga con più percorso di quanto stia nel riquadro risponde alla rotellina
scorrendo di lato invece, che è la lettura che prevale finché si applica.

L'elenco è **alto quanto la finestra glielo permette**. Obsidian limita i suoi
elenchi di suggerimenti a 300 pixel qualunque cosa ci sia sotto; questo arriva
fino in fondo alla finestra, fermandosi a pochi pixel dal bordo, e scorre solo
una volta che la cartella ne contiene più di quanti ce ne stiano. Non è **più
largo della barra del percorso**: un nome che non ci sta viene accorciato come
si accorcia una riga, e mostrato per intero quando lo punti.

Spostarsi nell'elenco **mette ciò che stai puntando nel campo**, con le frecce
o passandoci sopra — al posto del segmento che stavi modificando, con il resto
del percorso lasciato al suo posto — così la riga su cui ti trovi è anche il
percorso che otterresti.

Il resto del percorso è mostrato **solo fin dove esiste sotto ciò che stai
puntando**. Trovandoti in una cartella con `2026/nota.md` dietro il segmento che
stai modificando, puntare una cartella che ha un `2026` con dentro un `nota.md`
lo mostra tutto; una che ha il `2026` ma non la nota mostra `2026`; una che non
ha né l'uno né l'altra non mostra nulla dopo il nome, e nemmeno lo fa un file,
dato che sotto a un file non vive nulla. Ciò che **hai digitato** mantiene il
suo intero percorso mentre lo stai digitando, per quanto poco ce ne sia ancora
— un nome digitato a metà non è una decisione. Impostare un nome è una
decisione, e ciò che non è raggiungibile da lì viene tagliato a quel punto; le
cartelle che stai creando sono quelle che digiti *dopo* di esso, che è dove
<kbd>Invio</kbd> le crea.
Il testo che avevi digitato viene conservato: uscire **da un'estremità o
dall'altra dell'elenco** — su, oltre la prima voce, o giù, oltre l'ultima —
lo lascia andare e rimette il tuo testo al suo posto, senza nulla evidenziato.
Il campo è una tappa sull'anello come qualsiasi voce, quindi un giro ci passa
attraverso invece di saltare dall'ultima riga alla prima, e continuare da lì
riporta all'altra estremità.

Togliere il **puntatore dall'elenco** rimette anch'esso il tuo testo al suo
posto — e restituisce l'evidenziazione a qualunque cosa l'avesse prima che
arrivasse il mouse: la voce a cui eri arrivato con le frecce, che torna a
comparire nel campo, oppure quella su cui l'elenco si era aperto perché è dove
ti trovi. Passare sopra con il puntatore è un modo di guardare, non di
scegliere, quindi una scorsa del puntatore sull'elenco non ti costa nulla.

L'elenco stesso non cambia mentre ti sposti al suo interno — continua a
filtrare in base a ciò che hai digitato, non in base a ciò che è stato
anteprima nel campo — così la voce sotto di te non si sposta mai da sotto la
pressione successiva. Digitare sostituisce l'anteprima e filtra come al
solito.

**Ciò in base a cui filtra è il segmento che stai modificando**, non tutto il
campo. Cliccare su una cartella lascia il resto del percorso lì dietro al nome
che stai cambiando, quindi filtrare in base a tutto il campo cercherebbe una
figlia chiamata `2026/Avvio.md` e non troverebbe nulla — l'elenco si
chiuderebbe al tuo primo tasto premuto qualunque cosa tu digitassi.
Anche **l'estensione ne resta fuori**, finché il cursore è davanti al punto:
cliccare sul nome di una nota seleziona la radice del nome e lascia `.md`
dietro di esso, quindi digitare una lettera fa leggere al campo `a.md`, e non
è quello che stai cercando. Metti il cursore oltre il punto e l'estensione
conta come qualsiasi altra cosa. Un nome che davvero non corrisponde a nulla
chiude comunque l'elenco, perché un elenco vuoto è la risposta onesta.

Un'anteprima **scambia solo quel segmento e lascia stare il resto del
percorso**: puntare una cartella chiede cosa succederebbe se questo passo
fosse quell'altro, non butta via il percorso. Uscire dall'elenco ripristina il
testo *e* la selezione che avevi, così la prossima pressione di un tasto
sostituisce ciò che avrebbe sostituito prima che guardassi.

## Le voci del menu sono vere righe da gestore di file

Ogni file e cartella nel menu si comporta come la sua riga in Esplora file:

- **Clic destro** per lo stesso menu contestuale che dà Esplora file, voce per voce — comprese quelle aggiunte da altri plugin. Una cartella offre *Nuova nota*, *Nuova cartella*, *Nuova tela*, *Nuova base*, *Crea una copia*, *Sposta cartella in…*, *Cerca nella cartella*, *Copia percorso*, *Mostra nell'esplora risorse di sistema*, *Rinomina…* e *Elimina*; un file offre il suo equivalente, incluso *Apri nell'app predefinita*.
- **Trascina** una voce ovunque Obsidian accetti un file: in un editor per inserire un link, su una cartella in Esplora file per spostarla, sulla barra delle schede per aprirla.

Il testo dei menu viene dalle traduzioni di Obsidian stesso, quindi combacia con il resto dell'applicazione in ogni lingua.

## Digitare un percorso

- Cliccare lo **spazio vuoto** prima o dopo il percorso apre un campo di testo sull'intero percorso *e mostra la nota nel File Explorer*, così l'albero segue il pannello senza un secondo gesto. **Conta i tuoi clic**: uno seleziona il percorso senza l'estensione, due lo selezionano con l'estensione, tre selezionano il percorso come lo conosce la macchina. Cliccare il **nome del file** conta allo stesso modo ma parte un gradino più in basso, sul nome stesso: uno lo seleziona senza l'estensione, due con, e tre si allargano all'intero percorso *dalla cartella del tuo vault* — la forma che vuole un link o una ricerca, piuttosto che quella della macchina. Un quarto clic arriva a quella.
- **Il conteggio appartiene alla sequenza che ha aperto il campo.** Una volta scaduta — hai fatto una pausa, digitato, o cliccato una volta da qualche parte nel testo — il campo è un campo di testo come un altro, e un doppio clic al suo interno seleziona la parola sotto il puntatore come farebbe ovunque altrove. Digita sopra ciò che è selezionato, oppure modifica sul posto. (Cliccare il nome del file stesso seleziona solo il nome del file; vedi sopra.) Un clic destro sullo stesso spazio **copia** quegli stessi tre livelli, a due, tre e quattro pressioni — un pulsante li mostra, l'altro li prende. Una **singola** pressione destra apre il percorso con tutto selezionato e offre ciò che si può fare con esso: taglia, copia, incolla, seleziona tutto, con le parole di Obsidian stesso.
- **Clic centrale sullo spazio vuoto** per incollare sopra il percorso: il campo si apre sull'intero percorso *dalla radice del vault*, così gli appunti sostituiscono tutto, e ciò che arriva è selezionato. <kbd>Invio</kbd> quindi ci va.
- **<kbd>Ctrl</kbd>+clic sullo spazio vuoto** per aprire di nuovo questa nota in una scheda propria, evidenziata nel File Explorer così la seconda scheda non viene scambiata per la prima. Sul **nome del vault**, <kbd>Ctrl</kbd>+clic o clic centrale apre una scheda che non contiene nulla, posta alla radice del vault con la lista già visibile — un posto dove digitare un percorso da zero.
- Digitare mentre è visibile un percorso lo converte, per il segmento finale, in un piccolo campo con completamento automatico dal vivo limitato alla cartella corrente.
- **Si può digitare un percorso dalla radice del filesystem.** `/` davanti a un campo vuoto ne apre uno anziché completare un gradino, ogni barra dopo di essa gli appartiene, e `~` è la tua cartella home. Mentre il campo contiene un percorso simile il menu elenca la macchina anziché il vault, e il segmento iniziale della riga si fa da parte — ciò che è nel campo parte dalla radice e lo dichiara. Con *Accesso ai file esterni* disattivato la lista resta vuota, perché <kbd>Invio</kbd> rifiuterebbe comunque il percorso.
- **Si può digitare una pagina, non solo sceglierla.** `:graph`, `:search`, o qualunque cosa registrino i tuoi plugin — le etichette che offre [l'elenco alla radice del vault](#un-riquadro-senza-file). Digitare i due punti in qualsiasi punto le richiama, dato che nessun nome può contenerli, e <kbd>Invio</kbd> apre quella vista in questo pannello. `:graph` digitato **dentro una cartella** apre il grafico di quella cartella — il grafico filtrato su `path:"quella/cartella"` nella sua stessa casella di ricerca, come se fosse stato digitato lì; alla radice del vault è il grafico intero. <kbd>Tab</kbd> completa il nome come completa quello di una cartella — e porta con sé qualunque altra cosa contenesse il campo, dato che una pagina non sta in nessuna cartella e nulla vive sotto una di esse. Cliccare l'etichetta su una pagina simile apre il campo già contenendola.
- **Ciò che <kbd>Tab</kbd> scriverebbe viene offerto mentre digiti.** Dove ogni elemento figlio che inizia con ciò che hai digitato continua a concordare per un tratto, quell'accordo appare dopo il cursore, selezionato; dove smettono di concordare, il passo verso il primo di essi lo fa — o verso la riga a cui sei arrivato con le frecce, dato che è quella verso cui punterebbe <kbd>Tab</kbd>. Digitare sopra un nome lascia in piedi la sua estensione e offre ciò che sta prima di essa, e una cartella appena raggiunta offre il suo primo passo, così non c'è uno stato in cui nulla viene offerto e <kbd>Tab</kbd> scrive comunque qualcosa. Digita quelle lettere e viene inghiottito una alla volta; digita qualsiasi altra cosa e sparisce. <kbd>Tab</kbd> o <kbd>Fine</kbd> lo prende per intero, <kbd>→</kbd> ne prende una lettera, <kbd>Backspace</kbd> lo respinge senza toccare una lettera che hai digitato tu, e non viene offerto nulla finché non digiti — così c'è sempre una via d'uscita da un nome che non volevi. Dopo una pressione di <kbd>Tab</kbd> il passo successivo viene offerto subito, come dopo una lettera digitata. Ciò che il menu elenca è filtrato da ciò che hai digitato **tu**, mai da ciò che è stato offerto.
- **Le offerte ignorano maiuscole/minuscole.** `sch` offre `Schemes`, scritto come è scritto il nome; ritirare l'offerta restituisce le tue lettere come le hai digitate. Dove esistono sia `Test` che `test`, viene offerto quello scritto come l'hai digitato tu.
- Nel campo la parte offerta è semplicemente **selezionata**. È nella lista che viene scritta per intero: ogni riga mostra la parte che **ha corrisposto a ciò che hai digitato in grassetto**, ovunque nel nome sia avvenuta la corrispondenza — `kick` trova `Weekly kickoff` e lo segnala. **I nomi che iniziano con ciò che hai digitato vengono prima**, davanti a quelli che lo contengono soltanto, e sono segnati da una linea lungo il bordo: **blu** dove condividono più di ciò che hai digitato, così <kbd>Tab</kbd> ha qualcosa da aggiungere per tutti loro, e **verde** sul ramo che l'offerta prende dove si separano — `te` con `test1`, `test2`, `text1` e `text2` offre `te`+`st`, così le due righe `test` sono verdi e le due righe `text` mantengono la linea semplice. Ognuna di esse **sottolinea il passo che <kbd>Tab</kbd> compirebbe verso di essa**, non solo quella che è offerta, e la sottolineatura segue l'offerta man mano che cambia.
- **Digitare abbandona la riga evidenziata.** La lista si apre sulla voce su cui ti trovi, ma nel momento in cui digiti riguarda un altro posto, e un'evidenziazione che nessuno ha messo lì si legge come una scelta già fatta.
- L'offerta è sempre e solo testo davanti a te: le lettere che hai digitato restano scritte come le hai digitate mentre digiti, e accettare l'offerta riscrive il nome come lo scrive la cartella, perché un percorso deve corrispondere al disco. `sk` + <kbd>Tab</kbd> arriva a `Skyline`, non a `skyline`.
- **Il campo assume il colore di ciò che nomina**, lo stesso colore della sua riga nel menu: viola per una nota, inclusa la nota propria di una cartella, arancione per qualsiasi cosa non sia una nota, blu per la nota su cui ti trovi. La riga da cui prende il colore è quella che si chiama esattamente come hai digitato, o in mancanza di ciò quella evidenziata, o in mancanza di ciò la prima a cui la tua digitazione conduce ancora.
- **Il campo diventa rosso quando nulla risponde più a ciò che contiene** — nessun file, nessuna cartella, e nessuna riga del menu che ci porti ancora. Da lì <kbd>Invio</kbd> crea ciò che è nel campo anziché aprirlo, e il rosso lo segnala prima che tu confermi. Non appare mai per un indirizzo web, che non è un posto su questa macchina dove andare a cercare. È **l'intero** campo a essere colorato e non solo la parte mancante: un campo di testo non può colorare metà del proprio contenuto. In modalità sposta/rinomina il campo mantiene il proprio rosso invece, per un nome che è illegale — lì, un nome a cui nulla risponde è proprio il punto. Che un nome sia **già occupato** viene affrontato quando lo confermi, con una finestra di dialogo che chiede cosa fare del file che è d'intralcio — vedi [Un nome già occupato](#un-nome-già-in-uso): ogni nome digitato verso `Notes.md` passa per nomi che potrebbero essere file a sé stanti, così segnalarlo lettera per lettera avvertiva di un nome che nessuno aveva ancora richiesto.
- `/` conferma il segmento che stai digitando e vi discende dentro, mantenendo tutto ciò che sta prima — la stessa cosa che fa <kbd>Tab</kbd> quando entra.
- <kbd>Backspace</kbd> in un campo vuoto torna indietro alla cartella padre, riaprendo il suo nome con il cursore alla fine. Lo stesso fa <kbd>Backspace</kbd> davanti a un'estensione rimasta da sola — un campo che contiene solo `.md` non nomina nulla — e l'estensione solitaria se ne va con esso.
- **Cliccare una cartella mentre un campo è aperto lo allarga all'intero percorso dopo quella cartella**, con il nome della cartella stesso selezionato — la stessa cosa che avrebbe fatto cliccarla dalla riga, e tutto ciò che il campo conteneva viene mantenuto. Ciò che è nel campo è la coda della riga mentre è aperto, così una cartella cliccata più in alto restituisce il percorso che la sessione ha percorso piuttosto che quello da cui è partita la nota.
- **Spostarsi con le frecce oltre l'inizio del campo fa entrare la cartella che lo precede**, come se l'intero percorso fosse una sola riga di testo. Con il cursore proprio all'inizio, <kbd>←</kbd> fa entrare quella cartella nel campo e atterra alla fine del suo nome, <kbd>Ctrl</kbd>+<kbd>←</kbd> atterra all'inizio, e <kbd>Inizio</kbd> fa entrare tutte le cartelle fino alla radice del vault in una volta — o fino al punto che hai scelto, fuori dal vault. Tieni premuto <kbd>Shift</kbd> e la selezione si estende su ciò che è entrato. Su macOS il salto di parola è <kbd>Option</kbd>+<kbd>←</kbd> e <kbd>Cmd</kbd>+<kbd>←</kbd> equivale a <kbd>Inizio</kbd>. Ovunque tranne l'inizio questi sono normali tasti di testo. **Mentre il menu è visibile, <kbd>Inizio</kbd>, <kbd>Fine</kbd>, <kbd>PgSu</kbd> e <kbd>PgGiù</kbd> gli appartengono** — prima riga, ultima riga, una pagina su, una pagina giù, dove una pagina è ciò che la lista mostra, con la riga evidenziata che mantiene il proprio posto sullo schermo — e raggiungono il testo solo dopo che si è chiuso; <kbd>Shift</kbd>+<kbd>Inizio</kbd> fa entrare tutte le cartelle anche con la lista aperta.
- **La lista segue il cursore.** Seleziona una parte diversa del percorso — trascinaci sopra, clicca al suo interno, o spostati con le frecce — e il menu elenca i figli di *quella* cartella, non di quella su cui era stato aperto il campo. La cartella viene contata a partire dai segmenti più ciò che del campo si trova davanti al cursore, così cliccare dentro `Notes.md` in un campo che contiene `2026/Notes.md` elenca ciò che si trova in `2026`. Puntare una riga la scrive nel segmento in cui si trova il cursore, e togliere il puntatore dalla lista ti restituisce il tuo testo e la tua selezione esattamente come erano.
- **Trascinare una selezione fuori dal campo** e lasciarla andare da qualche altra parte non lo chiude. Una pressione che inizia nel campo appartiene alla modifica per quanto lontano viaggi; solo una pressione che *inizia* fuori è un clic di distanza.
- <kbd>Invio</kbd> conferma — e quando il campo non nomina proprio nulla, come in una cartella vuota dove non c'era mai stato niente da completare, dice *Nessun file selezionato* e resta aperto anziché chiudersi come se fosse stato scelto qualcosa. <kbd>Esc</kbd> o un clic altrove annulla tornando al percorso reale del file. Una sola pressione di <kbd>Esc</kbd> basta: chiude il menu, lascia il campo e restituisce il focus alla nota, invece di richiedere una pressione per ogni livello.

Il campo è privo di cornice — niente riquadro, niente bordo — così si legge come il testo stesso del percorso, e cresce da solo mentre digiti.

## Ogni parte della riga, pulsante per pulsante

L'intera riga in un colpo d'occhio. La colonna del clic destro è quello che **una** pressione ti dà; quel pulsante conta anche le pressioni, e [la sua stessa tabella](#clic-destro-una-pressione-due-pressioni-tre) più sotto ha la seconda, la terza e la quarta. Questa assume che **Il nome della cartella apre il menu** sia attivo, come impostazione predefinita — con l'opzione disattivata, il nome della cartella e il separatore si scambiano la prima colonna, come dice [la tabella in alto](#il-percorso).

| Dove premi | Clic | Doppio clic | <kbd>Ctrl</kbd>+clic, o clic centrale | Clic destro | Trascinarci sopra qualcosa |
| --- | --- | --- | --- | --- | --- |
| Il **nome del vault** | Apre il menu delle posizioni — altri vault, home, la radice del filesystem, unità montate. Disattivato per impostazione predefinita; con l'opzione disattivata, mostra invece il vault nel File Explorer | Marca **l'intero percorso assoluto**. Quel menu si apre con il percorso già nel campo e solo la parte propria del vault marcata; una seconda pressione allarga sul resto. Niente da allargare con il menu disattivato | Una scheda che non contiene nulla, posizionata alla radice del vault con l'elenco già visibile — un posto dove digitare un percorso da zero | Il menu contestuale del vault stesso: cosa si può fare al vault che quel segmento nomina | Un **file** si sposta alla radice del vault. Il **testo** apre il campo alla radice, per nominare la nota che dovrebbe diventare |
| Un **nome di cartella** | Seleziona quella cartella per la modifica, con il contenuto della cartella madre elencato sotto | Riscrive quella cartella e tutto ciò che sta sotto | Apre quella cartella in una nuova scheda | Il menu contestuale di quella cartella — lo stesso del File Explorer | Un **file** si sposta in quella cartella. Il **testo** apre il campo lì, per nominare la nota che dovrebbe diventare |
| Un **separatore** | Apre la cartella che lo precede — la sua nota di cartella dove è attivo un plugin per le note di cartella e ne esiste una, altrimenti la mostra e la espande nel File Explorer | **Crea la nota di quella cartella** e vi si sposta, dove è attivo un plugin per le note di cartella e la cartella non ne ha ancora una. Dove ne ha già una, questo equivale semplicemente alla pressione singola | La nota di cartella in una nuova scheda dove ne esiste una; altrimenti una scheda posizionata su quella cartella con l'elenco visibile | Il menu contestuale della stessa cartella che dà il nome — quello della sua nota di cartella, dove ne ha una | Alla fine della nota di quella cartella, dove ne ha una, una volta confermato |
| Il **nome della nota** | Apre il nome per la modifica — le cartelle restano come chip accanto — con tutto tranne l'estensione marcato | Include anche l'estensione nella marcatura | Apre la nota in una nuova scheda | Il menu contestuale del file — lo stesso che dà la riga del File Explorer | Alla fine di questa nota, una volta confermato |
| Lo **spazio vuoto** | Apre **l'intero percorso** per la modifica, marcato fino all'estensione. Le cartelle entrano nel campo insieme al resto, ed è questo che rende questo il gesto per riscrivere un percorso piuttosto che un nome | Include anche l'estensione nella marcatura | <kbd>Ctrl</kbd> riapre questa nota in una scheda propria, evidenziata nel File Explorer così la copia non viene scambiata per la prima. Il clic centrale *non* è quel gesto: incolla sopra il percorso | Marca l'intero percorso e offre cosa si può fare al testo marcato | |

**La seconda pressione segue la prima.** Creare la nota di una cartella si trova su qualunque parte della riga *apra* quella cartella, che per impostazione predefinita è il separatore e il nome della cartella con lo scambio disattivato — lo stesso bersaglio che la sottolineatura marca, e lo stesso che una pressione singola già chiede per la nota di cartella. Viene offerta solo mentre è attivo un plugin per le note di cartella, perché una nota di cartella è una convenzione piuttosto che un fatto sul filesystem, e solo dove la cartella non ne ha ancora una. Dove vive e come si chiama vengono letti dalle impostazioni proprie di **Folder notes**, così un vault che tiene le sue note di cartella accanto alla cartella, o le chiama `_index`, ne ottiene una di quelle; il file stesso è sempre Markdown, che è ciò che il comando di creazione predefinito di quel plugin genera e ciò che trova qualunque sia il tipo impostato per il vault. La modalità sposta/rinomina ne è del tutto esclusa — niente sulla riga apre una cartella mentre uno spostamento è in sospeso.

**I clic sul nome continuano a funzionare.** I quattro gradini sono gli stessi quattro che il tasto di rinomina percorre, nello stesso ordine: il nome, il nome con la sua estensione, il percorso dal vault, il percorso dalla radice del sistema. Quindi un terzo clic raggiunge il percorso del vault e un quarto quello della macchina — le stesse quattro cose che ti dà <kbd>Tab</kbd> oltre la fine del campo, e le stesse quattro che il pulsante destro *copia* invece di selezionare.

**Il passaggio del mouse** è una risposta a sé e non cambia mai nulla: un nome abbreviato torna per intero finché lo punti, e l'icona all'inizio della riga dice dove vive il vault.

## Clic destro: una pressione, due pressioni, tre

Ogni bersaglio sulla riga risponde a un clic destro, e quante pressioni gli dai decide cosa ottieni. Poiché una seconda pressione potrebbe ancora arrivare, la prima aspetta circa un terzo di secondo prima di agire — il costo di mettere tre gesti su un solo pulsante.

| Dove premi | Una volta | Due volte | Tre volte |
| --- | --- | --- | --- |
| Il **nome del vault** | Il menu contestuale del vault: cosa si può fare al vault che quel segmento nomina — incluso *Apri questo vault*, dove quel vault non è quello in cui ti trovi | Copia il nome del vault | Copia dove si trova il vault — e una quarta pressione, dove si trova il file aperto |
| Un **separatore** | Il menu di quella cartella — quello della sua nota di cartella, dove è attivo un plugin per le note di cartella e la cartella ne ha una | | |
| Un **nome di cartella** | Il menu di quella cartella | Copia il nome della cartella | La copia insieme a tutto ciò che sta alla sua destra |
| Il **nome della nota** | Il menu del file — lo stesso che dà la riga del File Explorer | Copia il nome | Lo copia con la sua estensione |
| Lo **spazio vuoto** | | Copia il percorso dalla cartella del tuo vault, senza l'estensione | Lo stesso, con l'estensione |

Una singola pressione sul **nome del vault** apre cosa si può fare a qualunque cosa quel segmento stia nominando. Per **il vault in cui ti trovi**: aprilo in una nuova finestra, gestisci i vault, copia dove vive, copia il suo ID, mostralo nel tuo gestore di file. Per **un altro vault**, raggiunto tramite il menu delle posizioni, lo stesso meno la nuova finestra — che aprirebbe *questo* vault, non quello — più l'unica cosa che solo un vault in cui non ti trovi può offrire: **Apri questo vault**. Viene nominato a Obsidian tramite il suo ID piuttosto che tramite il nome della cartella, dato che due vault potrebbero condividerne uno. Per un posto che non è affatto un vault — la tua cartella home, un'unità montata — non c'è nessun ID da copiare e nulla da aprire, e il menu lo dice non offrendoli.

Questo non è il menu a tre punti di Obsidian stesso, che appartiene alla finestra iniziale e non può essere aperto dall'interno di un vault in esecuzione — queste sono le stesse voci ricostruite, con la formulazione propria di Obsidian, prese dai suoi comandi così che arrivino nella tua lingua. Tre voci di quel menu sono deliberatamente **assenti** qui: *rinomina vault*, *sposta vault* e *rimuovi dall'elenco* agiscono tutte sulla cartella propria del vault o sul registro dei vault di Obsidian, e farlo al vault in cui ti trovi — con i suoi file aperti e i suoi osservatori in esecuzione — è come un vault si rompe. Apri il gestore dei vault (*Apri un altro vault*) e falle lì, dove il vault è chiuso.

Le due copie sullo **spazio vuoto** sono la riga così come è scritta — ciò che vuole un link o una ricerca — e quelle sul **nome del vault** sono i percorsi che il filesystem conosce, ciò che vuole qualunque cosa fuori da Obsidian. Ogni pressione lì allarga a cosa la copia serve: due danno il nome del vault, tre dove si trova il vault, quattro dove si trova il file aperto. Obsidian traccia la stessa distinzione nei suoi due comandi propri, *dalla cartella del vault* e *dalla radice del sistema*; qui quelli rivolti verso l'esterno stanno sul segmento che è esso stesso fuori dal percorso.

Tutto questo funziona anche fuori dal vault, sugli stessi bersagli.

Ogni copia lo dice con un avviso, perché una copia non lascia nulla sullo schermo a mostrare che è avvenuta e una pressione mal contata non dovrebbe sembrare una riuscita.

## Modificatori: aprilo da un'altra parte

Il nome della nota e i segmenti di cartella si comportano come le loro righe nel File Explorer.

| | Sul nome della nota | Su un segmento di cartella |
| --- | --- | --- |
| Clic semplice | Modifica il nome | Sfoglia quella cartella |
| <kbd>Ctrl</kbd> / clic centrale | Apre la nota in una nuova scheda | Invia la cartella a una nuova scheda |
| <kbd>Ctrl</kbd>+<kbd>Alt</kbd> | Una divisione | Una divisione |
| Trascinamento | La nota, ovunque Obsidian accetti un file | La cartella, allo stesso modo — barra delle schede inclusa |

Una cartella non è qualcosa che Obsidian può aprire, quindi inviarne una a una scheda fa una di due cose: apre la sua nota di cartella, dove è attivo un plugin per le note di cartella e ne esiste una, oppure apre una scheda vuota la cui barra del percorso si trova già in quella cartella — lasciandoti solo il nome da digitare. Rilasciare un segmento di cartella sulla **barra delle schede** fa lo stesso, in una nuova scheda dove lasci la presa — la barra delle schede di Obsidian accetta solo file di per sé, quindi una cartella trascinata fuori dal File Explorer viene comunque respinta anche lì.

## Tab: completa il nome, poi il percorso, poi allarga la selezione

<kbd>Tab</kbd> completa come fa una shell: **una pressione estende ciò che hai digitato finché i nomi in quella cartella concordano, e si ferma dove divergono.** Digita `Sk` dove solo `Sketches` inizia così e la parola è finita; digita `Al` dove `Alpha-one`, `Alpha-two` e `Alpine` iniziano tutti allo stesso modo e ottieni `Alp`, perché il carattere successivo è una domanda a cui solo tu puoi rispondere.

Premi di nuovo senza digitare e si dirige verso un nome — la riga evidenziata nel menu, oppure la prima — fermandosi alla prossima ambiguità di quel nome: `Alpha-`, poi `Alpha-one`. L'elenco si apre dove ti trovi già, quindi nella tua stessa cartella la prima pressione punta alla nota che hai aperta piuttosto che a quella che viene prima in ordine.

**Una pressione non sceglie mai tra i nomi al posto tuo.** <kbd>Tab</kbd> entra in una cartella una volta che ciò che hai digitato lascia un solo candidato, o una volta che hai digitato l'intero nome della cartella e nessun'*altra cartella* lo estende. Dove una lo fa — `Schemes` accanto a `Schemes2026` — <kbd>Tab</kbd> continua a completare verso il nome più lungo; <kbd>Invio</kbd> e il menu sono i gesti che significano *questo qui*.

Un **file** non blocca mai una cartella in quel modo. Una cartella accanto a una nota del suo stesso nome è una nota-cartella, non un bivio nel percorso, e <kbd>Tab</kbd> attraversa le cartelle — quindi `Projects` con accanto `Projects.md` viene attraversata come qualsiasi altra.

Due cose più piccole ne conseguono: ciò che finisce nel campo è scritto come lo scrive la cartella, quindi `sk` diventa `Sketches`; e viene sostituito solo il nome che si sta digitando, quindi un percorso con altro alla sua destra lo conserva.

Con un nome offerto mentre digiti, <kbd>Tab</kbd> **scrive esattamente ciò che viene offerto**: l'offerta è sempre ciò che la pressione scriverebbe, e la sottolineatura e la riga verde del menu dicono la stessa cosa, quindi ciò che vedi dopo il cursore è ciò che ottieni. Dove i nomi smettono di concordare, quello è il passo verso il primo di essi — o verso la riga a cui sei arrivato con le frecce, che <kbd>Tab</kbd> sceglie invece di quella accanto — quindi usa le frecce per raggiungere quello che vuoi, o digita oltre il bivio, prima di premere. Solo dove l'offerta lascia *un solo* nome, la stessa pressione vi entra dentro.

Arrivare al nome del file **è** il primo gradino — nessuna pressione viene spesa per posizionare il cursore alla fine di un nome che sta per essere marcato. Da lì le pressioni smettono di muoversi lungo il percorso e iniziano ad allargare ciò che è selezionato:

1. il nome
2. il nome con la sua estensione
3. il percorso dalla cartella del tuo vault
4. il percorso dalla radice del sistema
5. torna all'inizio del percorso **come si presenta ora** — fermo dove è iniziato il cammino, primo segmento marcato, pronto per essere ripercorso

Un quarto clic raggiunge direttamente quello stesso quarto gradino.

Allargare **allarga** e basta. Un nome già intero nel campo — completato dallo stesso tasto, o scelto dal menu — viene marcato per intero anziché farsi togliere prima l'estensione: il primo gradino è per un nome a cui il cammino è appena *arrivato*, dove l'estensione non è ancora il soggetto.

La scala è dove il cammino **arriva**, non da dove parte. Fai clic su una cartella nel mezzo di un percorso e il campo si apre su tutto ciò che sta sotto di essa con il nome di quella cartella marcato; ogni <kbd>Tab</kbd> attraversa poi **una** cartella — marcando la successiva, mantenendo dietro di sé il resto del percorso — e solo una volta che non rimane altro che il nome del file inizia l'allargamento:

| pressione | segmenti | campo | marcato |
| --- | --- | --- | --- |
| cliccato `a` | | `a/b/c/leaf.md` | `a` |
| <kbd>Tab</kbd> | `a` | `b/c/leaf.md` | `b` |
| <kbd>Tab</kbd> | `a › b` | `c/leaf.md` | `c` |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf` — il primo gradino |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf.md` |

**Un nome che è stato impostato è impostato, in qualunque modo tu l'abbia impostato.** Completarlo con
<kbd>Tab</kbd>, confermarlo con `/`, e sceglierlo dal menu lasciano tutti la riga nello
stesso punto con lo stesso percorso, quindi la pressione dopo il gesto significa la
stessa cosa qualunque sia la via da cui sei arrivato. Scegliere una cartella dall'elenco
prima svuotava invece il campo, buttando via un percorso che raggiungere la
stessa cartella con <kbd>Tab</kbd> avrebbe conservato.

**Un percorso che stai ancora scrivendo ti segue per intero.** Entrare proprio nella cartella da cui pende il resto del percorso non è un'affermazione che il resto esista — è come un percorso viene digitato in anticipo su se stesso, e le cartelle che nomina sono quelle che <kbd>Invio</kbd> sta per creare. Quindi scendendo da `Dokumente/plans/untitled.md` verso `Dokumente` si mantiene `plans/untitled.md` davanti a te, che `plans` esista già o no. Lo stesso vale per un percorso digitato dal nulla: niente di esso è stato ereditato da qualche parte, quindi niente di esso viene tolto.

**Scambiare un passo con un altro è una storia diversa, e allora il percorso ti segue solo per quanto è davvero lì.** Scambia una cartella nel mezzo di un percorso con una vicina — fai clic su `a`, digita un altro nome, premi <kbd>Tab</kbd> — e tutto ciò che sta sotto ti segue, perché il percorso su cui eri è di solito gran parte del percorso che vuoi. Sopravvive allo spostamento solo ciò che esiste davvero lì, però, così il campo e il menu accanto non sono mai in disaccordo: ciò che rimane davanti a te è un percorso che potresti davvero percorrere. Partendo da `a/b/c/leaf.md`, con `a` cliccato e il suo nome marcato:

| cosa imposti | segmenti | campo | marcato |
| --- | --- | --- | --- |
| `x`, che non ha affatto `b` | `x` | | niente ti è seguito |
| `y`, che ha `b` ma non `c` al suo interno | `y` | `b` | `b` |
| `z`, un gemello di `a` fino in fondo | `z` | `b/c/leaf.md` | `b` |

Una cartella lasciata così da sola è comunque una cartella in cui entrare: la pressione successiva vi entra dentro, invece di iniziare ad allargare una selezione sopra il suo nome.

Un nome che **niente** nella cartella corrisponde riceve una risposta diversa, perché niente è stato impostato da esso: la pressione marca ciò che hai digitato, pronto perché tu lo sovrascriva, invece di rispondere con qualcos'altro.

Il tutto è un **ciclo, e percorrerlo non costa nulla**: la pressione dopo l'ultimo gradino riporta la riga all'inizio del percorso, cartelle comprese, pronta per ripercorrerlo. L'unica cosa che lascia mai la riga è il prefisso assoluto, alla pressione che smette di mostrarlo.

Ciò che torna è **il percorso che hai costruito**, non quello da cui sei partito. Deviare il cammino a metà — scegliere un vicino diverso dal menu, completare verso un altro nome — e il giro si chiude su dove ti trovi davvero; i quattro gradini che lo precedono descrivono quello stesso percorso, e questo era prima il gradino dispari che descriveva il passato.

<kbd>Maiusc</kbd>+<kbd>Tab</kbd> chiude lo stesso anello nell'altra direzione: all'inizio del percorso, senza più niente da restituire e nulla più in alto, la pressione successiva salta al gradino **più lontano** — il percorso dalla radice del sistema — e continua a restringersi da lì. Nessuna delle due direzioni finisce in un vicolo cieco.

Non spende neanche una pressione su un gradino che ha già mostrato. Sotto l'ultimo gradino — il nome senza la sua estensione — la scala finisce, e *la stessa pressione* esce dalla cartella: il percorso dalla radice del sistema, il percorso dal tuo vault, il nome, il nome senza estensione, poi la cartella, un passo alla volta.

Nessuna pressione viene spesa neanche su un gradino che non cambia nulla: fare clic sul nome di una nota lo mostra già senza estensione, che è ciò che mostra il primo gradino, quindi da lì <kbd>Tab</kbd> parte dal secondo.

Ogni gradino cambia ciò che è *nel* campo, non solo ciò che è evidenziato — una selezione deve trovarsi sopra il testo che nomina, altrimenti <kbd>Invio</kbd> confermerebbe qualcosa di diverso da ciò che vedi selezionato. La scala appartiene a una sola sessione di modifica: fai clic altrove, o digita qualsiasi cosa, e il prossimo <kbd>Tab</kbd> completa di nuovo un nome.

### <kbd>Maiusc</kbd>+<kbd>Tab</kbd>: la stessa strada al contrario

<kbd>Maiusc</kbd>+<kbd>Tab</kbd> ripercorre un passo indietro per pressione, nell'ordine in cui le pressioni sono state fatte: la selezione si restringe di un gradino alla volta, ogni completamento viene restituito, e da ogni cartella si esce — il suo nome torna nel campo così puoi modificarlo invece di ridigitarlo.

**Niente viene cancellato lungo il percorso di ritorno.** Un completamento viene restituito *marcando* i caratteri che ha aggiunto, esattamente come andare avanti marca ciò su cui si è allargato — il nome resta davanti a te, e ogni pressione successiva ne marca un altro pezzo:

| | campo | marcato |
| --- | --- | --- |
| entrato | `Alpha-one` | |
| <kbd>Maiusc</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `one` |
| <kbd>Maiusc</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `ha-one` |
| <kbd>Maiusc</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `Alpha-one` |

Digitare sostituisce la parte marcata, come ovunque altrove. <kbd>Tab</kbd> rimette esattamente ciò che la marcatura aveva restituito, quindi ripercorrere due passi fuori e due passi dentro ti riporta dove eri.

Una volta che l'intero nome è marcato non rimane nulla che una pressione abbia messo lì, e la pressione successiva sale *lungo il percorso*: esce dalla cartella in cui ti trovi, esattamente come fa <kbd>Backspace</kbd> su un campo vuoto. Anche questo non costa nulla — il nome della cartella torna nel campo **davanti a** qualsiasi cosa ci fosse, marcato, che è lo stesso testo che avrebbe dato fare clic su quella cartella. Indietro è una direzione, non una cronologia di annullamento — ma marcare prima il nome fa sì che una pressione non ritiri mai ciò che hai scritto *e* ti porti fuori dalla cartella in cui l'hai scritto allo stesso tempo.

Un testo che si apre **già selezionato** — ciò che lascia dietro di sé un clic su una cartella — è il nome su cui <kbd>Tab</kbd> lavora subito dopo: viene completato e attraversato come qualsiasi altro, e digitare lo sostituisce. Solo il comando di attivazione si apre su un gradino della scala stesso, perché sta mostrando l'intero percorso piuttosto che una cartella in cui entrare.

## Digitare qualcosa che non è un percorso

| Cosa digiti | Cosa succede |
| --- | --- |
| `https://…` | Si apre in una nuova scheda nel **Visualizzatore web** di Obsidian, se hai attivato quel plugin principale; altrimenti nel tuo browser desktop |
| `obsidian://…` | Passato al gestore URI di Obsidian stesso |
| `file:///…` | Decodificato e aperto: come nota vera se è dentro il tuo vault, nel visualizzatore in caso contrario |
| `/home/tu/a%20b.md` | Lo stesso, per un percorso incollato da un browser o gestore di file |

Contano solo gli schemi espliciti — una nota chiamata `100%20` resta una nota. Una `/` che appartiene a uno schema resta letterale invece di scendere in una cartella, così un URL può essere digitato a mano e non solo incollato.

## Un comando per la tastiera

**Attiva la barra del percorso** apre il campo sul nome della nota e lo attraversa come fa <kbd>F2</kbd> — il nome, il nome con la sua estensione, il percorso dal tuo vault, il percorso dalla radice del sistema — e la pressione successiva chiude il campo e rimette il cursore nella nota. Non rinomina: Invio naviga, come in qualsiasi altro campo. Non ha un proprio tasto di serie, perché le linee guida di Obsidian scoraggiano i plugin dal rivendicarne uno; la riga **Hotkeys** alla fine delle impostazioni di questo plugin apre *Impostazioni → Hotkeys* mostrando solo i suoi comandi, così puoi assegnarglielo lì.

## La navigazione non tocca mai il file aperto

Nella modalità predefinita (navigazione) la nota aperta non viene **mai** rinominata né spostata.

- Un percorso che corrisponde a un file esistente lo apre.
- Un percorso che non esiste ancora viene semplicemente creato, insieme a qualsiasi cartella madre mancante, e aperto. Ogni file e cartella creati in questo modo lo dicono in un avviso — una nuova cartella è altrimenti invisibile finché non vai a cercarla — e il cestino di Obsidian stesso rende un annullamento indesiderato una questione di un tasto.
- **Fuori dal tuo vault chiede comunque prima.** Là fuori lo stesso errore di battitura scrive in una cartella di sistema, dove né l'avviso né il cestino di Obsidian sono di grande conforto.

## <kbd>Ctrl</kbd> — nuova scheda, e copia invece di sposta

Una nota **creata, spostata o copiata dentro il vault viene mostrata dove è finita** in Esplora file, marcata per un momento nel colore d'accento di Obsidian — l'albero è dove la cerchi in seguito, quindi viene messa davanti a te invece di essere lasciata in una cartella che potrebbe non essere nemmeno aperta. Anche duplicare lo dice: una copia lascia l'originale dov'era e apre la copia nel proprio riquadro, cosa che senza una parola sarebbe facile leggere come se non fosse successo nulla.

Tenere <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> su macOS) mentre scegli un file dal menu, o mentre premi <kbd>Invio</kbd> su un percorso, manda il risultato in una **nuova scheda** anziché in questa:

| | Senza modificatori | Con <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Scegliere o digitare un file esistente | Si apre qui | Si apre in una nuova scheda |
| Digitare un percorso che non esiste | Chiede, poi apre qui | Chiede, poi apre in una nuova scheda |
| Confermare un percorso in modalità rinomina/sposta | **Sposta** la nota lì | La **copia** lì e apre la copia in una nuova scheda |

Il modificatore è letto con la regola di Obsidian stesso, quindi si comporta esattamente come su un collegamento o su una riga di Esplora file — anche il clic centrale significa «nuova scheda», <kbd>Ctrl</kbd>+<kbd>Alt</kbd> significa una divisione e <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Maiusc</kbd> una nuova finestra.

Copiare rifiuta di sovrascrivere, esattamente come fa spostare — compreso sul percorso stesso della nota, dove non c'è nulla di sensato da copiare. Fuori dal vault quel rifiuto viene detto ad alta voce anche lì.

Tutto questo funziona **con il menu aperto** tanto quanto senza: su una riga evidenziata il modificatore si applica a quella riga, e stando su niente si applica a ciò che hai digitato.

## Sfogliare fuori dal vault

**Questo è disattivato di default.** Attiva prima **Accesso ai file esterni** nelle impostazioni — leggere e scrivere fuori dal vault è l'unica cosa che questo plugin fa e che Obsidian da solo non farebbe, quindi ci si entra apposta invece di doverne uscire. Con l'opzione spenta il nome del vault mostra semplicemente il tuo vault in Esplora file, e qui niente guarda mai oltre.

Cliccare sul **nome del vault** (o sull'icona 🏠, quando *Mostra il nome del vault* è disattivato) apre un menu di luoghi anziché di contenuti. Il campo che apre contiene **l'intero percorso su cui ti trovavi, scritto per intero**, con il punto da cui parte selezionato — così scegliere un altro posto, o digitare sopra la selezione, sostituisce solo quella parte iniziale e lascia il resto del percorso davanti a te. **Premi il nome una seconda volta** — un doppio clic — e il segno si allarga su tutto quanto: è così che il percorso assoluto si prende con un solo gesto invece di essere spazzato via a mano. Cambi idea e <kbd>Esc</kbd> riporta la riga com'era.

Digitando qui ti viene offerto il resto del nome di un luogo come ovunque, e <kbd>Tab</kbd> **fissa quel luogo dentro** — quello a cui stai puntando, o quello che il nome può significare soltanto. Dove più luoghi condividono ancora ciò che hai digitato, la pressione si ferma al bivio, come dappertutto. Puntare su un luogo mostra **il percorso di quel luogo**, tutto selezionato, seguito dal percorso della tua nota solo per quanto davvero si estende laggiù — che è esattamente dove ti porterebbe sceglierlo. Un luogo non è un passo dentro al percorso a schermo ma un punto da cui contare l'intero percorso, così nulla di dove ti trovavi resta davanti a esso.

I luoghi offerti:

- **Gli altri tuoi vault**, letti dal registro di Obsidian stesso, prima quello aperto più di recente, ciascuno sotto l'icona del vault di Obsidian — la stessa che l'applicazione usa per i suoi comandi sui vault. Il vault che hai già aperto porta invece una casa: è il punto da cui la riga parte di default, non un posto dove andare.
- La **cartella home**, sotto il nome del tuo account, contrassegnata da una `~`. Lucide non ha una tilde, quindi questa icona la disegna il plugin sulla stessa griglia 24×24 di Lucide e con lo stesso spessore di tratto — un'icona che manca al set, non un carattere di testo piazzato in mezzo alle icone.
- La **radice del file system**, etichettata `root` — non tradotta, perché quello è il suo nome su ogni sistema — anziché `/`, che accanto al separatore che segue si leggerebbe come un passo vuoto.
- Le **unità montate**, con un'icona per tipo dove è facile stabilirlo: condivisioni di rete, dischi ottici, floppy e supporti rimovibili hanno la propria; tutto il resto riceve un'unità generica. Su Windows le unità compaiono come `C:` con un'icona generica — i nomi dei volumi e i tipi precisi richiedono WMI, che di proposito non viene usato.

Scegliere un altro vault **non fa passare Obsidian a quello.** Tutto ciò che hai aperto resta aperto; il percorso comincia semplicemente a sfogliare lì. È tutto il senso di averlo sulla barra del percorso invece di rimandare al selettore di vault della barra laterale.

Ti porta anche **il più vicino possibile alla nota su cui ti trovi, per quanto quel luogo arrivi davvero.**

- Se il luogo scelto *contiene* la nota — la home, o dovunque vivano i tuoi vault — ottieni il suo percorso da lì: scegli `~` con `appunti.md` aperto e il campo dice `Vaults/il-tuo-vault/appunti.md`.
- Se è un luogo accanto a questo — un altro vault, un'altra unità — si prova lo stesso percorso relativo, per quanto profondamente esista davvero. I vault sono spesso quasi copie l'uno dell'altro, e il motivo per saltare su uno è di solito la stessa nota laggiù.

In entrambi i casi la riga resta al luogo scelto e la **prima cartella di quel percorso si apre selezionata**, la stessa forma che dà un clic su una cartella: il passo che più probabilmente cambierai quando salti altrove è quello più vicino all'inizio, e il resto del percorso resta visibile mentre lo cambi. Non viene mai precompilato nulla che non sia davvero su disco.

### Mentre sei fuori

Il percorso **parte dal luogo che hai scelto**, non dalla struttura di directory della macchina — e lo stesso vale per il campo che ottieni cliccando lo spazio vuoto o premendo il tasto di focus: contiene il percorso da quel luogo, non quello assoluto della macchina, con la traccia collassata sul luogo stesso esattamente come collassa sulla radice del vault quando sei dentro — scegli `Archivio` e la riga dice `Archivio / note / …`, non `/home/tu/Vaults/Archivio/note/…`. Il segmento iniziale porta un'icona per ciò che è (vault, home, unità), e <kbd>Backspace</kbd> si ferma lì invece di risalire nel resto del file system. Con *Mostra il nome del vault* disattivato, quel segmento è la sola icona — l'impostazione riguarda il segmento iniziale della riga qualunque vault esso indichi, non solo il tuo.

La barra del percorso resta **incorniciata nel colore di errore** — lo stesso anello che disegna la modalità rinomina — per tutto il tempo in cui punta fuori dal tuo vault. Segnala una condizione permanente, non un istante: finché è lì, nulla della gestione propria di Obsidian si applica a ciò che la riga mostra, e la scrittura è bloccata finché non dici altrimenti.

Per il resto sfogliare funziona come dentro: pastiglie, separatori, digitazione, completamento automatico, <kbd>Backspace</kbd> per uscire. Valgono anche le stesse regole di visibilità, quindi le estensioni non supportate hanno ancora bisogno di **Mostra tutti i tipi di file** di Obsidian e i file nascosti dell'impostazione di questo plugin.

**Anche là fuori funziona il clic destro**, benché sia un menu diverso: i gestori propri di Esplora file hanno bisogno di un file che il vault conosca, quindi le voci fuori vengono costruite a partire dal percorso. Offrono l'apertura (qui, a destra, in una nuova finestra, o nell'applicazione predefinita del tuo desktop), *Copia percorso*, *Mostra nell'esplora file di sistema*, e — una volta aperto il lucchetto — *Nuova nota*, *Nuova cartella*, *Crea una copia*, *Rinomina…* ed *Elimina*. **Il trascinamento** ha ancora bisogno di un file del vault e resta non disponibile.

Lo stesso menu compare sul file aperto nel visualizzatore, con il clic destro o dai tre puntini della scheda, e interpella il lucchetto nell'intestazione di quella vista. Non chiede altro: che il file venga renderizzato o mostrato come sorgente non incide sulla possibilità di eliminarlo, e un'immagine o un PDF — che non hanno nessuna vista sorgente — sono eliminabili quanto una nota. *Elimina* significa il cestino del sistema operativo, così si può annullare da lì; un sistema senza cestino lo segnala invece di distruggere il file.

Eliminare fuori dal vault sposta il file nel tuo **cestino di sistema** — il Cestino su Windows, Cestino su macOS — mai un semplice unlink. Qui fuori non c'è un cestino di Obsidian da cui recuperare, quindi un'eliminazione che non si potrebbe annullare non viene proprio offerta: dove una piattaforma non ha un cestino, il tentativo segnala il fallimento anziché distruggere il file.

### Scrivere fuori dal vault

Tutto ciò che scrive è **bloccato di default**. Per tutto il tempo in cui la riga punta fuori dal tuo vault, il posto dell'interruttore di rinomina nell'intestazione è preso da un **lucchetto rosso** — lo stesso colore dell'anello attorno alla riga, e per la stessa ragione: segnala un rifiuto. I due sono un unico controllo in un unico slot, così non c'è mai dubbio su quale dei due regoli cosa.

Tre pressioni, in un ciclo:

| Pressione | Cosa ottieni |
| --- | --- |
| Il lucchetto rosso | Qui scrivere è permesso. Il lucchetto viene sostituito dall'interruttore rinomina/sposta |
| L'interruttore | Modalità rinomina/sposta, esattamente come dentro il vault |
| L'interruttore di nuovo | La modalità finisce e il lucchetto si richiude — il permesso non sopravvive a ciò per cui era stato aperto |

**Anche il tasto di rinomina interpella il lucchetto.** Fuori dal tuo vault premerlo fa lampeggiare il lucchetto aperto e poi chiuso invece di aprire una modalità che ogni conferma rifiuterebbe: il rifiuto arriva prima del lavoro invece che dopo. Premi il lucchetto, oppure premi di nuovo il tasto di rinomina entro mezzo secondo — la seconda pressione concede esattamente ciò che concede il pulsante, per questo luogo, e apre con esso la modalità rinomina.

Dentro il tuo vault non c'è nessun lucchetto: non c'è nulla da sbloccare, e l'interruttore occupa semplicemente lo slot.

Il permesso viene concesso **a un luogo, non a un istante**: sopravvive a tutto ciò che faresti lavorando in un posto — finire uno spostamento, cliccare via dal campo, aprire un file — e finisce quando scegli un altro vault, un'altra unità o un'altra radice dal menu, quando la riga torna a un file del vault, o alla terza pressione. Così una serie di spostamenti dentro una cartella richiede una sola pressione, non una per file.

Con il lucchetto aperto, la barra del percorso si comporta là fuori come si comporta dentro:

| Gesto | Risultato |
| --- | --- |
| Digitare un nome che non esiste, <kbd>Invio</kbd> | La stessa richiesta «crearlo?» di dentro; vengono create anche le cartelle mancanti. Un nome senza estensione diventa un `.md`, esattamente come dentro |
| Modalità rinomina/sposta, digitare un nome nuovo | Rinomina il file che la riga sta mostrando. Un nome senza estensione mantiene quella del file — qui fuori una cartella contiene ogni genere di file, e una rinomina non dovrebbe trasformare in silenzio un `.png` in un `.md` |
| Modalità rinomina/sposta, sfogliare altrove, scegliere **mantieni questo nome** | Lo sposta lì con il nome che ha già |
| Tenere <kbd>Ctrl</kbd> su una delle due | Copia invece di spostare, e apre la copia in una nuova scheda |

Con il lucchetto chiuso, tutte queste azioni segnalano che cosa le blocca invece di avvenire. In nessuno dei due stati viene sovrascritto qualcosa: una destinazione che esiste già viene rifiutata, e il rifiuto è del file system stesso (`COPYFILE_EXCL`, una creazione esclusiva) e non un controllo che potrebbe perdere la corsa. Uno spostamento fra file system diversi — da una chiavetta USB, da una condivisione di rete — ripiega su copia-poi-elimina, e l'originale viene rimosso solo quando la copia è arrivata.

**Spostare una nota *fuori* dal tuo vault chiede prima conferma.** `fileManager` non può seguire un file oltre quel confine: ogni collegamento che punta alla nota smette di risolversi, nulla li aggiorna, e la nota esce dall'indice del vault. Perciò lo spostamento viene offerto come una decisione anziché essere rifiutato o eseguito in silenzio — una finestra di dialogo indica che cosa costa e quante note sono collegate a quella che stai spostando. Confermi e lo spostamento avviene davvero: copiata fuori, poi rimossa dal vault tramite l'eliminazione propria di Obsidian, così è recuperabile esattamente come una nota eliminata, e un fallimento in uno dei due passaggi lascia la nota dov'era. Tenere premuto <kbd>Ctrl</kbd> la copia comunque fuori invece di spostarla, il che non ha nessuno di questi problemi. Andare nell'altra direzione — portare un file esterno *dentro* il vault — non è ancora collegato.

### Aprire un file esterno

Sfogliare il file system può ripercorrere la strada **dentro il vault che hai aperto** — dalla radice, dalla home, da dovunque vivano i tuoi vault. Un file raggiunto in questo modo è una nota ordinaria, quindi si apre come tale: il vero editor, collegamenti e backlink, e la riga torna di scatto al percorso radicato nel vault. Solo i file per cui Obsidian non ha una vista restano nell'anteprima, perché là fuori l'anteprima è la risposta migliore. Dove un'anteprima mostra comunque una nota simile — uno spazio di lavoro riaperto, per esempio — la sua riga superiore offre **Apri in *(vault)***, la stessa offerta fatta a mano.

L'editor di Obsidian funziona solo sui file dentro il vault, quindi un file esterno **non può** essere aperto come una nota vera con collegamenti, backlink e il resto — è un limite dell'applicazione, non di questo plugin. Sceglierne uno apre invece un'**anteprima**, in sola lettura finché non dici altrimenti:

| Tipo | Mostrato come |
| --- | --- |
| `.md`, `.markdown` | Markdown renderizzato |
| `.html`, `.htm`, `.xhtml` | La pagina renderizzata |
| Immagini, audio, video, PDF | Lettore/visualizzatore nativo |
| Qualsiasi altro file di **testo** (`.json`, `.css`, `.log`, `.txt`, …) | Testo semplice letterale |
| Formati binari senza visualizzatore (`.zip`, `.exe`, …) | Passati ad *Apri nell'app predefinita* |

Il visualizzatore ha due letture di un file e, poiché si escludono a vicenda, viene mostrata solo quella **verso cui** passeresti:

| | Cosa fa | Predefinito per |
| --- | --- | --- |
| **Visualizza come Markdown** | Renderizza il file come una nota, in sola lettura | `.md`, `.markdown` |
| **Visualizza come pagina** | Renderizza il file come la pagina che è, in sola lettura | `.html`, `.htm`, `.xhtml` |
| **Modifica come testo** | Il sorgente, modificabile | tutto il resto |

Fuori dal vault, **Modifica come testo** è anche la pressione che toglie la sola lettura — la modalità e il permesso sono un unico gesto invece di due pulsanti su cui ragionare. Si tinge di rosso **ogni volta che premerlo toglierebbe la sola lettura**, sia che tu stia armando la modifica sul posto sia che arrivi direttamente dalla vista renderizzata; dentro il vault non c'è nulla da sbloccare, quindi resta normale. **Visualizza come Markdown** riceve una velatura leggera del colore d'accento — la stessa tinta che Obsidian dà al testo selezionato — a segnarlo come la via del ritorno e non come un invito ad agire.

Poiché il pulsante segue la *modifica* e non la modalità grezza, un file in sola lettura nella vista testo offre comunque **Modifica come testo**: è quella la pressione che la arma. Un file in cui non si potrà mai scrivere — troncato o illeggibile — dice invece **Visualizza come testo**, perché è tutto ciò che quella pressione può dare.

I valori predefiniti sono quelli utili e non quelli letterali: un `#` in uno script di shell è un commento, non un titolo, quindi renderizzare un `.log` come Markdown se lo mangerebbe in silenzio. Entrambi i predefiniti si possono scavalcare file per file, e la scelta finisce nella cronologia della scheda, così avanti/indietro e uno spazio di lavoro riaperto la conservano — moltissime note vivono in file `.txt`, e moltissimi file `.md` si leggono meglio come sorgente.

#### Che cosa può fare una pagina HTML

Niente. La pagina viene mostrata in un riquadro con **ogni permesso negato** — niente script, niente moduli, niente navigazione, nessuna origine propria — e una politica dei contenuti che non le permette alcuna rete. Non è una precauzione fine a se stessa: una pagina locale caricata nel modo ordinario condividerebbe l'origine di questa finestra, e questa finestra è Obsidian, quindi uno script in un file HTML scaricato girerebbe dentro la tua applicazione con la portata della tua applicazione.

Ciò che si perde è tutto quello che la pagina *fa*; ciò che resta è tutto quello che la pagina *è*. I fogli di stile e le immagini che stanno accanto al file vengono letti e portati dentro il riquadro, così una pagina salvata assomiglia ancora a se stessa. I riferimenti che puntano fuori dalla cartella propria della pagina, e i riferimenti a qualcosa sul web, restano esattamente come sono scritti e semplicemente non si caricano — un file locale non può avvisare in silenzio un server che l'hai aperto.

Gli script vengono **rimossi** anziché semplicemente bloccati, così che la pagina che vedi e il sorgente a cui puoi passare differiscano in un modo dichiarato invece che in qualunque cosa il riquadro abbia rifiutato di eseguire in silenzio. I collegamenti dentro la pagina non fanno nulla. Quando vuoi la cosa vera — script, rete e tutto il resto — *Apri nell'app predefinita* la passa al tuo browser, che è lo strumento giusto per questo.

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

- **Apri in *(vault)*** — mostrato quando il file appartiene a uno dei tuoi altri vault. Lo passa al gestore di URI proprio di Obsidian, che apre la finestra di quel vault con dentro la nota, come una vera nota modificabile. Questa finestra resta esattamente com'era; nulla cambia sotto di te.
- **Visualizza come Markdown** / **Visualizza come pagina** / **Modifica come testo** — le due letture che questo file ha; l'ultima toglie anche la sola lettura fuori dal vault.
- **Apri nell'app predefinita** — passa il file all'applicazione predefinita del tuo desktop, compresi i formati binari che questo visualizzatore non può mostrare. Formulato esattamente come la voce propria di Obsidian per la stessa azione, perché è la stessa azione.

Il visualizzatore risponde anche a un **clic destro**: dentro l'editor di testo con *Taglia* / *Copia* / *Incolla* / *Seleziona tutto*, e altrove con il menu proprio del file. Anche il menu a tre puntini di Obsidian nell'intestazione porta quel menu — fuori dal vault altrimenti non offrirebbe altro che *Dividi a destra* e *Dividi in basso*.

Nulla fuori dal tuo vault viene scritto se prima non premi *Modifica come testo*. Vedi la sezione [Fuori dal vault](README.it.md#fuori-dal-vault) del README per la spiegazione completa.

## Trascinare un file su una cartella nel percorso

Ogni cartella nella riga è una destinazione per il trascinamento, quindi
**una nota trascinata su una di esse si sposta lì** — la via più breve è
quella tra una nota e una qualsiasi cartella sopra di essa, dato che la
destinazione è già a schermo. Trascina dal File Explorer, dal menu, dal
nome stesso della nota nell'intestazione, o da qualsiasi altro punto di
Obsidian che produce un file: è il trascinamento nativo dell'app, quindi
l'etichetta al passaggio, il cursore e l'evidenziazione sono quelli
disegnati dal File Explorer.

**Anche il nome del vault accetta un rilascio**, dato che è la cartella in
cima alla riga — l'unico gesto che porta una nota nella radice del vault
da qui.

**Un'intera selezione può essere trascinata insieme**, e si sposta come
un tutt'uno: se anche solo uno degli elementi non potesse essere spostato,
il rilascio viene rifiutato invece di spostarne alcuni e saltarne
silenziosamente altri.

I link seguono la nota, esattamente come quando viene spostata dal File
Explorer o digitando un percorso.

Una cartella che **non può accettare il rilascio non offre nulla di
proprio** — nessuna etichetta *Sposta in*, nessuna evidenziazione sulla
cartella — piuttosto che offrire qualcosa che poi fallirebbe; al suo
posto compare la risposta nativa di Obsidian per l'intestazione, *Apri in
questa scheda*. Tre casi:

- la cartella in cui il file **si trova già**, dato che è già lì;
- una cartella trascinata **su se stessa o su un proprio discendente**,
  il che la lascerebbe senza un punto da cui provenire;
- una selezione che contiene **una cartella e qualcosa al suo interno**,
  dato che spostare la cartella porta con sé anche il contenuto.

Una cartella che già contiene un **file con lo stesso nome** accetta il
rilascio e chiede cosa fare di quello che occupa il posto, con la stessa
finestra di dialogo di un nome già in uso digitato o scelto — vedi
[Un nome già in uso](#un-nome-già-in-uso). Niente qui viene sovrascritto.

Solo le cartelle **all'interno del tuo vault** accettano i rilasci.
Mentre la riga punta fuori dal vault i suoi segmenti rifiutano, perché
portare una nota fuori dal vault spezza ogni link ad essa — una decisione
che merita una domanda piuttosto che un gesto. Il modo per farlo
deliberatamente resta digitare il percorso, che chiede prima conferma e
dice quante note ne sarebbero coinvolte.

## Trascinare testo o un file per scriverlo

Le stesse destinazioni accettano anche **contenuto**, oltre ai file, e i
due casi si distinguono da cosa stai trascinando, non da dove lo rilasci.

**Su una nota che la riga già nomina** — il nome stesso della nota, o un
separatore la cui cartella ha una nota cartella — ciò che hai rilasciato
va in fondo ad essa, dopo una riga vuota. Chiede prima conferma, perché
questo scrive in un file già esistente e un trascinamento è un gesto che
una mano incerta può fare per sbaglio. Funzionano testo da un editor, un
file dal tuo desktop e una nota trascinata fuori da questo vault; un file
viene letto come testo, e uno binario viene rifiutato invece di essere
incollato come una schermata di caratteri senza senso.

**Su un luogo — il nome del vault o una cartella —** non viene ancora
scritto nulla, perché nulla ha ancora un nome. Il campo si apre lì
contenendo ciò che hai rilasciato, e il nome che digiti è ciò che lo
conferma: una nuova nota viene *creata* con dentro il testo, e una
esistente viene interpellata esattamente come sopra. <kbd>Esc</kbd>, o un
clic altrove, abbandona il tutto.

**La riga si illumina di blu** mentre un trascinamento che finirebbe come
contenuto vi passa sopra, e resta blu finché il campo lo contiene — lo
stesso blu, che dice la stessa cosa: quello che succede dopo riguarda il
testo che stai portando. Un file trascinato dal tuo stesso vault su una
cartella significa ancora *spostalo qui*, mantiene l'evidenziazione
nativa di Obsidian, e non si illumina mai di blu; quel gesto era lì
prima, e il contenuto gli lascia il passo.

## Quando il percorso è più lungo del riquadro

I nomi vengono **accorciati piuttosto che compressi**, nell'ordine di ciò
di cui è meno probabile aver bisogno:

1. **Prima il nome del vault**, fino alla sua icona. Sai in quale vault
   ti trovi; l'icona continua a indicare dove inizia il percorso.
2. **Poi l'estensione del file**, se l'hai attivata — gli stessi tre
   caratteri su quasi ogni file di un vault. Va intera piuttosto che
   accorciata: mezza estensione non dice nulla che nessuna estensione
   non dica già.
3. **Poi le cartelle, la più lunga per prima.** Il nome di cartella più
   lungo si accorcia fino alla lunghezza del successivo più lungo, poi
   entrambi insieme, e così via, ciascuno fermandosi al proprio limite —
   così una cartella molto lunga cede tutto ciò che ha in più rispetto
   alle altre prima che un nome corto accanto perda anche solo una
   lettera.
4. **Il nome del file per ultimo**, e mantiene circa sei caratteri. È a
   questo che serve l'intestazione.

Lo spazio viene ceduto **con continuità**, in frazioni di pixel piuttosto
che una lettera alla volta: un nome che cede viene tagliato al pixel e
sfuma sotto il suo `…`, così un riquadro trascinato lentamente restringe
la riga in modo fluido e nulla dopo di essa si muove a scatti. Prima che
venga sacrificata una sola lettera, viene speso lo spazio attorno ai
separatori — è l'unica spaziatura della riga e non costa alcuna
informazione — e un nome accorciato finisce dove inizia il separatore,
senza striscia di spazio vuoto tra i due.

**Il campo prende ciò che contiene.** Aprirne uno per digitare un
percorso non spinge via le cartelle accanto: è largo quanto il testo al
suo interno e cresce mentre digiti, così il resto del percorso mantiene
tutto ciò di cui il campo non ha bisogno. Solo quando non c'è spazio per
entrambi la riga scorre, e allora il campo è l'unica cosa che non cede
mai — è testo in fase di modifica, non un nome da far stare nello
spazio.

Non viene tagliato nulla oltre ciò che lo distingue dai vicini:
`Progetti2025` e `Progetti2026` nella stessa cartella si riducono a
`…025` e `…026` piuttosto che a un prefisso che li renderebbe la stessa
parola, mentre `Report` accanto a `Ricevute` può ridursi a `Rep…`.
Oltre a questo ogni nome mantiene una **larghezza leggibile** — circa
quattro lettere per una cartella e sei per un nome di file, misurate
nel font in cui la riga è effettivamente disegnata piuttosto che
contate. Quattro lettere strette e quattro larghe non sono la stessa
quantità di nome, quindi `lilliliillil` può mantenere più di se stesso
di quanto possa `WWMMWWMMWWMM`, e ciò che resta a schermo occupa la
stessa dimensione in entrambi i casi. I nomi corti vengono lasciati
completamente intatti — un nome ridotto ad `A…` è univoco ma resta
illeggibile. **Gli spazi non contano ai fini di questo calcolo.** Sei
caratteri per dire di quale file si tratta sono sei caratteri che vale
la pena leggere, quindi gli spazi vuoti tra loro viaggiano gratis e uno
non resta mai appoggiato contro il `…`, dove sarebbe comunque invisibile.

**Un nome viene tagliato dove i suoi vicini concordano con esso, e nel
mezzo dove non concordano da nessuna parte.** Due cartelle chiamate
`aaaa-comune-uno` e `aaaa-comune-due` condividono tutto tranne gli
ultimi tre caratteri, quindi tagliare la coda mantiene la metà che dice
qualcosa: si riducono a `…uno` e `…due`, il che è più corto *e* le
distingue. Dove l'accordo è alla fine — `alfa-bozza` accanto a
`beta-bozza` — è la fine a sparire; dove è a entrambe le estremità, a
restare è il centro. Un nome senza vicini simili perde il centro,
poiché un nome si apre con cosa è e si chiude con quale sia — per un
file, la sua estensione: `annuale…2026.md`.

Un breve tratto in comune non conta. `strutture parallele` finisce per
caso con le stesse due lettere di `Schemi` accanto ad esso, e non è un
motivo per mantenerli entrambi interi — tre caratteri dall'inizio già
li distinguono.

Nulla va a capo su una seconda riga. Quando anche i nomi più corti e
onesti non ci stanno, la riga **scorre lateralmente**, ferma alla fine
dove si trova il file — a quel punto non resta nulla da comprimere, e
tagliare ulteriormente nasconderebbe piuttosto che accorciare. La
rotellina la fa scorrere ovunque si trovi il puntatore sopra la riga, ed
entrambe le estremità sono raggiungibili: mentre scorre la riga si
allinea al suo inizio, qualunque sia l'impostazione di allineamento,
perché un contenuto centrato in uno spazio che ha superato trabocca sia
a sinistra che a destra — e quella metà non è affatto raggiungibile
scorrendo.

**Punta un nome accorciato e torna per intero**, per tutto il tempo in
cui lo stai puntando, scorso fino al bordo sinistro così che tutto ciò
che è tornato è a schermo. **Clicca su uno e resta così**: il campo si
apre mostrando la cartella su cui hai cliccato, ciò che viene offerto
dopo di essa e qualunque cosa tu digiti, e continua a mostrarli anche
dopo che il puntatore si è spostato altrove. I nomi restano fermi
mentre stai scorrendo la riga o digitando al suo interno — uno che si
apre di scatto sotto un gesto pensato per leggere la riga sposterebbe
tutto ciò che viene dopo da sotto di te.

Il **segmento iniziale porta sempre un tooltip, ed è il percorso
assoluto** — `/home/tu/Vaults/Note`, o ovunque inizi la riga. È l'unica
cosa sulla riga che nulla a schermo può dire: il nome ti dice *quale*
vault, mai dove si trova. È presente sia che qualcosa abbia dovuto
essere accorciato sia che non lo abbia dovuto.

Con **Mostra il nome del vault** disattivato il nome non viene rimosso,
solo ridotto a niente — così puntare sull'icona lo restituisce
esattamente come puntare su un nome che la riga ha dovuto accorciare.

**Mostra le estensioni dei file** rimette l'estensione sul nome di file
della riga. Disattivato — l'impostazione predefinita — la riga nomina
una nota come la titola Obsidian, senza il `.md` che quasi ogni file di
un vault condivide; attivato, la nomina come fa il filesystem, il che è
utile quando il vault contiene più che semplici note. È anche la
seconda cosa che la riga cede quando lo spazio scarseggia, subito dopo
il nome del vault.
Un tooltip ti dà il resto: non solo il nome ma tutto ciò che la riga
mostra sotto di esso, come `…/nome/cartella/nota.md`, così un solo
passaggio del puntatore risponde sia a "cos'è questo" sia a "cosa c'è
sotto". L'icona del vault nomina il proprio vault allo stesso modo,
quando il nome è disattivato o è stato compresso via.

## I colori di avviso

| | Quando | Cosa significa |
| --- | --- | --- |
| Anello **rosso** sulla barra del percorso | La riga punta fuori dal tuo vault | Obsidian non può aprire ciò che si trova lì come nota, e nulla lì fuori viene scritto finché non apri il lucchetto. |
| Anello **arancione** sulla barra del percorso | Il file è un tipo testuale per cui Obsidian non ha una vista | Un'avvertenza. Obsidian lo affiderebbe all'applicazione predefinita del tuo sistema; il plugin lo mostra invece direttamente. |
| Testo **rosso** nel campo aperto | In quel percorso non c'è ancora nulla | <kbd>Invio</kbd> lo creerà invece di aprirlo. Non tanto un avviso quanto una dichiarazione di cosa farà il prossimo tasto — vedi [Digitare un percorso](#digitare-un-percorso). |
| Lucchetto **rosso** al posto dell'interruttore di rinomina | La riga punta fuori dal tuo vault e la scrittura lì è ancora bloccata | Lo stesso rosso dell'anello, per lo stesso motivo: segna un rifiuto. Premerlo consente di scrivere qui e restituisce il posto all'interruttore — vedi [Scrivere fuori dal vault](#scrivere-fuori-dal-vault). |

I **due anelli sono indipendenti, ed entrambi possono essere presenti
insieme** — un `.json` esterno è sia fuori dal tuo vault *sia* un tipo
per cui Obsidian non ha un editor. Nel visualizzatore compaiono come
righe separate, ciascuna che afferma solo il proprio fatto. Sulla barra
del percorso, il rosso prevale dove entrambi si applicano, dato che due
anelli sarebbero solo rumore. Il testo rosso è una terza cosa del tutto
a sé: riguarda ciò che si sta digitando, non dove punta la riga, quindi
può comparire dentro l'uno o l'altro anello, o in nessuno dei due.

Il livello arancione è deliberatamente ristretto. I tipi registrati
(Markdown, canvas, immagini, PDF, audio, video) sono gestiti
correttamente e non ricevono nulla. Anche i file binari non ricevono
nulla — non finirai per rovinare uno `.zip` modificandolo per sbaglio.
Ciò che resta è esattamente il rischio: un `.json`, `.css` o `.log` che
**Mostra tutti i tipi di file** ha reso visibile. Il menu è
volutamente più ampio: lì, tutto ciò che non è una nota è arancione —
vedi [come vengono tinte le voci del menu](#come-vengono-tinte-le-voci-del-menu).

## Modalità sposta/rinomina

Il pulsante a matita all'estrema destra dell'intestazione — accanto al
pulsante di modalità di visualizzazione, della stessa dimensione dei
pulsanti nativi — attiva o disattiva la modalità sposta/rinomina. Fuori
dal tuo vault un lucchetto rosso ne prende il posto finché non lo premi;
vedi [Scrivere fuori dal vault](#scrivere-fuori-dal-vault). La riga
dell'intestazione viene quindi incorniciata nel colore d'accento,
esattamente come la rinomina nel File Explorer. Gli stessi clic e gli
stessi tasti ora confermano uno spostamento o una rinomina tramite il
`fileManager.renameFile` di Obsidian, così tutti i link alla nota
seguono con essa.

Mentre rinomini:

- Il nome file attuale è fissato nel menu di ogni cartella, così
  spostare una nota senza rinominarla è un singolo clic.
- I nomi già presenti nella cartella di destinazione sono **rossi** —
  sia una cartella che già contiene quel nome, sia un file con quel
  nome — così il conflitto si vede prima ancora di scegliere. Possono
  comunque essere selezionati: vedi sotto.
- L'input viene convalidato in tempo reale contro le stesse regole di
  rinomina di Obsidian — stessi set di caratteri, stessi messaggi,
  stesso tooltip rosso che ottieni rinominando nell'albero dei file —
  così un nome non valido viene segnalato mentre digiti e non può
  essere confermato.
- Cliccare fuori dalla barra dell'intestazione, o la perdita del focus
  da parte dell'intestazione, termina la modalità di rinomina.

### Un nome già in uso

Spostare o rinominare su un nome già esistente **chiede invece di
rifiutare.** Si apre una finestra di dialogo con due percorsi
modificabili: dove va il tuo file, e dove va il file che occupa il
posto — rosso finché questo resta in uso. Ogni percorso è disegnato
anche nello stesso modo in cui la barra del percorso ne disegna uno,
con le parti che differiscono colorate e accorciate per ultime, così
un percorso lungo mostra comunque cosa cambia.

Entrambi i campi hanno un elenco. Il secondo contiene le solite vie
d'uscita:

- **Scambia i posti** — va nella vecchia cartella del tuo file, con il
  proprio nome.
- **Scambia i nomi** — resta dov'è e prende il vecchio nome del tuo
  file.
- **Scambia entrambi** — prende il vecchio percorso del tuo file.
- `-1`, `-bak` e `-old` accanto al proprio nome.
- I due nomi che i file avevano.

Il primo elenco offre dove stava andando il tuo file, **Resta dov'è**,
il proprio nome nella cartella di destinazione, e `-1`, `-bak` e
`-old` accanto ad esso. Una via d'uscita il cui percorso è già in uso
è in grigio e non può essere scelta. Selezionarne una **compila solo
il campo** — puoi comunque modificarlo — e **Applica** sposta
entrambi, link compresi; **Annulla** non sposta nulla. Scegliere un
nome già in uso dal menu chiede la stessa cosa, e così fa anche
trascinare una nota su una cartella che già contiene il suo nome.

## Un tasto per entrambe le rinomine

Il comando di rinomina (<kbd>F2</kbd> di default, o qualunque tasto tu gli abbia riassegnato) **alterna** tra la rinomina del titolo inline di Obsidian e la barra del percorso nell'intestazione di questo plugin. Se hai disattivato il titolo inline di Obsidian, la barra del percorso nell'intestazione diventa l'unico obiettivo, quindi il tasto non fa mai nulla di sbagliato.

Nella barra del percorso si apre sul **nome senza estensione** — la modifica che una rinomina quasi sempre è, e la stessa cosa che seleziona un clic sul nome. Premilo di nuovo e fa quello che farebbe lì <kbd>Tab</kbd>: sul nome, è il gradino successivo — il nome con la sua estensione, il percorso dalla cartella del tuo vault, il percorso dalla radice del sistema; con qualcosa digitato, lo completa, come fa <kbd>Tab</kbd>.

**Il ciclo si chiude all'intestazione.** Cinque pressioni te lo fanno percorrere tutto — il titolo inline, il nome, il nome con la sua estensione, il percorso dal tuo vault, il percorso dalla radice del sistema — e la sesta è di nuovo il titolo inline. Quella pressione è l'unica che differisce da <kbd>Tab</kbd>, che invece torna all'inizio del percorso — e la settima va dove va il giro di <kbd>Tab</kbd>: la radice del vault, con l'intero percorso nel campo e la sua prima cartella selezionata. Quindi ogni gradino che <kbd>Tab</kbd> raggiunge, lo raggiunge anche il tasto.

Il comando **Attiva la barra del percorso** fa la stessa cosa dentro il campo — qualunque cosa farebbe <kbd>Tab</kbd> — e dove <kbd>Tab</kbd> farebbe il giro, restituisce invece il cursore alla nota. La sua pressione successiva è il giro: la radice del vault, con la prima cartella selezionata.

**In un campo già aperto**, il tasto lo trasforma in una rinomina dove si trova — mantenendo il testo, il cursore e la selezione — e **Attiva la barra del percorso** gli fa fare il percorso inverso allo stesso modo. **Qualsiasi altra cosa** premuta o cliccata tra una pressione e l'altra fa ripartire da capo entrambi i cicli, così una pressione dopo che hai modificato qualcosa non finisce mai su un gradino rimasto da prima.

Fuori dal vault il tasto funziona comunque — lì non esiste un titolo inline, quindi la prima pressione va direttamente alla barra del percorso.

Funziona avvolgendo il comando `workspace:edit-file-title` anziché catturare il tasto, quindi riassegnare la scorciatoia e lanciare il comando dalla tavolozza continuano a funzionare senza cambiamenti.

## Come vengono tinte le voci del menu

| Colore | Significa |
| --- | --- |
| **Viola** | Una nota (`.md`, `.markdown`) — ciò che Obsidian apre come nota, individuata in una cartella con contenuti misti |
| **Arancione** | Non è una nota — qualunque cosa Obsidian non apre come tale, da un PDF a un `.txt`, insieme alle voci `:page`. Una cartella con contenuti misti viene letta per le note che contiene, e un unico colore per tutto il resto lo dice più in fretta di un avviso su solo alcuni di essi; vedi [i colori di avviso](#i-colori-di-avviso) |
| **Attenuato** | Fuori dal tuo vault, quindi la gestione propria del vault non si applica |
| **Blu**, in grassetto | Dove ti trovi già: la nota di questa barra, e la cartella su cui la barra del percorso si trova. In modalità sposta/rinomina la voce *mantieni questo nome* prende il posto della nota — la stessa nota in entrambi i casi |
| **Rosso** | Solo in modalità sposta/rinomina: il nome è già occupato. È comunque selezionabile — scegliendone uno chiede cosa fare del file che occupa il posto; vedi [Un nome già occupato](#un-nome-già-in-uso) |

**Le cartelle sono in grassetto**, quindi la nota di una cartella non ha bisogno di un colore proprio per distinguersi dalla sua cartella: è viola come qualsiasi altra nota. Una **linea sul bordo di una riga** segna i nomi che iniziano con ciò che hai digitato — blu dove concordano ancora oltre, verde sul ramo che il suggerimento prende; vedi [Digitare un percorso](#digitare-un-percorso).

Il campo assume gli stessi colori per ciò che nomina — vedi [Digitare un percorso](#digitare-un-percorso).

## Regole di visibilità

- I file con estensioni non supportate appaiono nei menu solo se l'impostazione **Rileva tutte le estensioni dei file** di Obsidian è attiva — **dentro il vault**. Fuori dal vault l'impostazione non si applica: governa cosa il vault indicizza, e nulla lì fuori è nel vault, quindi un `.txt` accanto alle tue note è elencato in entrambi i casi.
- Il menu mostra fino a 1.000 voci, dieci volte il limite di Obsidian stesso. Quando una cartella ne ha di più, l'ultima riga indica quante sono state escluse; continua a digitare per restringere l'elenco.
- I file e le cartelle nascosti appaiono solo se l'impostazione **Mostra i file nascosti** di questo plugin è attiva.
- **La protezione dalla sovrascrittura funziona in modo identico indipendentemente dalla visibilità** — un file nascosto ti impedisce comunque di sovrascriverlo.

## Riassunto

Un percorso **racchiuso tra virgolette** viene liberato per te. *Copia come percorso* di Windows restituisce `"C:\Users\tu\nota.md"`, virgolette incluse, e una shell fa lo stesso per qualunque percorso con uno spazio; incollarlo o digitarlo funziona in entrambi i casi. Solo le virgolette doppie, e solo come coppia che racchiude l'intero percorso — non possono comparire in un nome reale, dove un apostrofo invece può benissimo.

| Vuoi… | Fai questo |
| --- | --- |
| Apri una cartella (la sua nota, o rivelala) | Clic sul separatore **dopo** quella cartella |
| Dai a una cartella una nota di cartella che non ha | **Doppio clic** su quello stesso separatore (richiede un plugin per le note di cartella) |
| Sostituisci una cartella con una vicina | Clic sul nome di quella cartella, poi digita o scegli |
| Rinomina o ridirigi la nota | Clic sul nome della nota — estensione incluso |
| Sfoglia il contenuto di una cartella | Clic sul nome di quella cartella; il menu elenca il suo genitore, quindi clic sulla cartella **sotto** quella che vuoi |
| Ridigita una cartella e tutto ciò che è sotto | **Doppio clic** sul nome di quella cartella, poi digita |
| Modifica il percorso da una cartella in giù | Clic sul nome di quella cartella, poi <kbd>→</kbd> per deselezionare |
| Salta a un file digitando il suo percorso | Clic sul nome del file o sullo spazio vuoto, digita, <kbd>Invio</kbd> |
| Apri invece un file in una nuova scheda | <kbd>Ctrl</kbd> mentre lo scegli, oppure <kbd>Ctrl</kbd>+<kbd>Invio</kbd> |
| Copia la nota da qualche parte invece di spostarla | Matita, poi <kbd>Ctrl</kbd> mentre scegli o confermi la destinazione |
| Crea una nota a un percorso che non esiste | Digita il percorso — il campo diventa **rosso** una volta che nulla nel menu lo corrisponde più — poi <kbd>Invio</kbd>. Dentro il vault viene creata immediatamente; fuori chiede prima conferma |
| Scopri se un percorso che hai digitato esiste già | Guarda il colore: assume il colore della riga che nomina, e rosso significa che <kbd>Invio</kbd> lo creerebbe |
| Scendi di un livello mentre digiti | Digita `/` |
| Risali di un livello mentre digiti | <kbd>Backspace</kbd> nell'input vuoto |
| Porta nel campo le cartelle che lo precedono | <kbd>←</kbd> al suo inizio per una; <kbd>Shift</kbd>+<kbd>Home</kbd>, oppure <kbd>Home</kbd> con il menu chiuso, per tutte |
| Sposta o rinomina la nota aperta | Clic sulla matita, poi sfoglia o digita come sopra |
| Sposta su un nome già occupato | Confermalo comunque: la finestra ti permette di scambiare i posti, i nomi o entrambi, oppure di dare al file che occupa il posto un altro nome |
| Sposta senza rinominare | Matita → clic dentro la cartella di destinazione → scegli il nome file corrente fissato in alto |
| Rinomina sul posto | <kbd>F2</kbd> due volte (la prima pressione va al titolo inline, la seconda all'intestazione) |
| Salta a un altro vault, alla home o a un'unità | Clic sul nome del vault |
| Apri un file da fuori il vault | Nome del vault → scegli una posizione → sfoglia → scegli il file (di sola lettura finché non usi *Modifica come testo*) |
| Completa il nome che stai digitando | <kbd>Tab</kbd>, oppure <kbd>Fine</kbd> per ciò che viene suggerito; <kbd>→</kbd> ne prende una lettera |
| Entraci dentro, quando resta un solo nome | Di nuovo <kbd>Tab</kbd> |
| Torna indietro di un passo, o esci dalla cartella | <kbd>Shift</kbd>+<kbd>Tab</kbd> |
| Prendi l'intero percorso, o il percorso di sistema | <kbd>Tab</kbd> oltre la fine, oppure clicca quattro volte |
| Copia un nome, un percorso, o un percorso di sistema | Clic destro due volte su di esso; lo spazio vuoto tre volte per il percorso di sistema |
| Raggiungi ciò che il gestore del vault offre per questo vault | Clic destro sull'icona all'inizio della riga |
| Copia l'ID del vault | Clic destro sull'icona all'inizio della riga |
| Apri un altro vault che stavi sfogliando | Clic destro sul suo nome all'inizio della riga |
| Vedi l'estensione del file sulla riga | Attiva **Mostra le estensioni dei file** nelle impostazioni |
| Apri un segmento di cartella in una nuova scheda | <kbd>Ctrl</kbd> o clic centrale su di esso, oppure trascinalo sulla barra delle schede |
| Raggiungi la barra del percorso da tastiera | Assegna *Attiva la barra del percorso* nelle Scorciatoie |
| Apri un indirizzo web o un link `obsidian://` | Digitalo nella barra e premi <kbd>Invio</kbd> |
| Annulla qualsiasi cosa | <kbd>Esc</kbd>, oppure clic fuori dalla barra dell'intestazione |
| Prova le voci prima di confermare | Freccia o passaggio del mouse sul menu; <kbd>↑</kbd> oltre l'inizio ti restituisce il tuo testo |
| Sposta una nota in una cartella sopra di essa | Trascinala su quella cartella nella riga |
| Conserva un frammento di testo come nuova nota | Trascina il testo su una cartella, digita un nome, <kbd>Invio</kbd> |
| Aggiungi un frammento di testo alla nota che stai leggendo | Trascinalo sul nome della nota, confermalo |
| Vedi per intero un nome di cartella abbreviato | Passa il mouse su di esso, oppure allarga il riquadro |
| Scopri dove risiede il vault stesso | Passa il mouse sull'icona all'inizio della riga |
| Porta una nota fuori dal vault | Matita → sfoglia fuori → confermalo nella finestra (i link si romperanno) |
| Consenti la scrittura fuori dal tuo vault | Clic sul **lucchetto rosso** nell'intestazione; l'interruttore di rinomina prende il suo posto |
| Bloccalo di nuovo | Clic sull'interruttore finché il lucchetto non torna — una pressione per aprire, una per chiudere |
| Elimina un file fuori dal vault | Apri il lucchetto, poi clic destro sul file: *Elimina* lo sposta nel cestino del tuo sistema |

## Impostazioni

| Impostazione | Opzioni | Predefinito | Cosa fa |
| --- | --- | --- | --- |
| **Lingua** | Predefinita di Obsidian, o una tra 46 | Predefinita di Obsidian | In quale lingua è il testo di questo plugin. *Predefinita di Obsidian* segue la lingua impostata nelle impostazioni di Aspetto, che è ciò che quasi tutti vogliono. La riga stessa — il suo nome, la sua descrizione e *Predefinita di Obsidian* — resta in inglese qualunque cosa venga scelta, perché è la via d'uscita da una lingua che non sai leggere. Greco e sanscrito sono tradotti qui e assenti dall'elenco di Obsidian stesso, quindi questa impostazione è l'unico modo per raggiungerli. |
| **Allineamento** | Sinistra / Centro / Destra | Sinistra | Dove si trova il percorso nella riga dell'intestazione. *Centro* corrisponde all'aspetto classico di Obsidian. |
| **Separatore** | Qualsiasi carattere | `/` | Il separatore disegnato tra i segmenti. Sei preimpostazioni con un clic (`/ > ▸ › \ •`) si trovano davanti al campo di testo. |
| **Mostra il nome del vault** | Sì / No | Sì | Se il vault stesso è il primo segmento del percorso. Se disattivato, quel segmento diventa un'icona 🏠 invece di scomparire, così il percorso inizia comunque da qualcosa su cui si può cliccare. |
| **Il nome della cartella apre il menu** | Sì / No | Sì | Scambia ciò che fanno il nome di una cartella e il separatore dopo di esso — vedi [la tabella qui sopra](#il-percorso). Con [Folder notes](obsidian://show-plugin?id=folder-notes) il separatore apre le note di cartella. Non si applica mai in modalità sposta/rinomina. |
| **Mostra i file nascosti** | Sì / No | No | Se i file e le cartelle nascosti sono elencati nei menu. La protezione dalla sovrascrittura si applica in entrambi i casi. |
| **Mostra tutti i tipi di file** | — | — | Non è un'impostazione di questo plugin ma di Obsidian, citata qui perché risponde alla stessa domanda: il tuo vault indicizza solo i tipi di file che gli viene detto di indicizzare, e solo ciò che indicizza può essere elencato. Cercala nelle impostazioni di Obsidian e attivala per vedere ogni file; il pulsante accanto alla riga apre quella pagina con l'impostazione portata in vista e messa in evidenza, come farebbe cliccare su di essa nella ricerca delle impostazioni stesse. Fuori dal vault non si applica, poiché nulla lì fuori è comunque indicizzato. |
| **Mostra le estensioni dei file** | Sì / No | No | Se il nome del file sulla riga porta la sua estensione. Se disattivato, viene omessa — come Obsidian la omette dal titolo di una nota. Se attivato, la riga nomina il file come fa il file system. In entrambi i casi l'estensione è la seconda cosa a essere tagliata quando la riga finisce lo spazio, subito dopo il nome del vault. |
| **Accesso ai file esterni** | Sì / No | **No** | Se il nome del vault apre il menu delle posizioni. Se disattivato, nulla nel plugin guarda mai oltre questo vault. |
| **Scorciatoie** | pulsante | — | Apre le *Scorciatoie* di Obsidian filtrate su questo plugin, dove a *Attiva la barra del percorso* si può assegnare un tasto. |

## Sostituire le icone

Lure disegna tre icone: l'icona della radice del vault (quando **Mostra il nome del vault** è disattivato), l'interruttore sposta/rinomina, e il lucchetto che prende il suo posto mentre la scrittura fuori dal vault è bloccata. Tutte possono essere sostituite da un tema o da uno snippet CSS: imposta il glifo sostitutivo e nascondi quello incluso in un'unica regola:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* Mostrato solo chiuso: aprirlo cede il posto all'interruttore di rinomina. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}
```

`--lure-icon-glyph` accetta qualunque cosa sia valida in `content` di CSS, quindi `url(...)` vale per un'immagine così come per un glifo di testo o un'emoji. Lascia stare `--lure-icon-svg` per tenere l'icona di Lucide e disegnare il tuo glifo accanto.
