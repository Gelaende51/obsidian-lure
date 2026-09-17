<!-- CHANGELOG.md tulkojums — stāvoklis: revīzija f133f41.
     Mašīntulkojums (Claude Opus 5), ko nav pārlasījuši dzimtās valodas
     runātāji. Labojumi ir gaidīti; noteicošais ir CHANGELOG angļu valodā. -->

[English](../../CHANGELOG.md) · [العربية](CHANGELOG.ar.md) · [አማርኛ](CHANGELOG.am.md) · [Беларуская](CHANGELOG.be.md) · [বাংলা](CHANGELOG.bn.md) · [Català](CHANGELOG.ca.md) · [Čeština](CHANGELOG.cs.md) · [Dansk](CHANGELOG.da.md) · [Deutsch](CHANGELOG.de.md) · [Ελληνικά](CHANGELOG.el.md) · [Español](CHANGELOG.es.md) · [فارسی](CHANGELOG.fa.md) · [Suomi](CHANGELOG.fi.md) · [Français](CHANGELOG.fr.md) · [Gaeilge](CHANGELOG.ga.md) · [עברית](CHANGELOG.he.md) · [Magyar](CHANGELOG.hu.md) · [Bahasa Indonesia](CHANGELOG.id.md) · [Italiano](CHANGELOG.it.md) · [日本語](CHANGELOG.ja.md) · [ქართული](CHANGELOG.ka.md) · [ភាសាខ្មែរ](CHANGELOG.kh.md) · [한국어](CHANGELOG.ko.md) · **Latviešu** · [Bahasa Melayu](CHANGELOG.ms.md) · [नेपाली](CHANGELOG.ne.md) · [Nederlands](CHANGELOG.nl.md) · [Norsk](CHANGELOG.no.md) · [Polski](CHANGELOG.pl.md) · [Português](CHANGELOG.pt.md) · [Português (Brasil)](CHANGELOG.pt-BR.md) · [Română](CHANGELOG.ro.md) · [Русский](CHANGELOG.ru.md) · [संस्कृतम्](CHANGELOG.sa.md) · [Slovenčina](CHANGELOG.sk.md) · [Shqip](CHANGELOG.sq.md) · [Српски](CHANGELOG.sr.md) · [Svenska](CHANGELOG.sv.md) · [ไทย](CHANGELOG.th.md) · [Türkçe](CHANGELOG.tr.md) · [Українська](CHANGELOG.uk.md) · [Oʻzbekcha](CHANGELOG.uz.md) · [Tiếng Việt](CHANGELOG.vi.md) · [简体中文](CHANGELOG.zh.md) · [繁體中文](CHANGELOG.zh-TW.md)

# Izmaiņu žurnāls

Katrs Lure laidiens, jaunākais pirmais. Tas, kas ienācis kopš pēdējā laidiena, ir sadaļā *Neizdots*. Versijām nav `v` priedēkļa, tāpat kā laidienu tagiem.

## Neizdots[^unreleased]

### Pievienots

- **Ienes failu glabātavā no ārpuses.** Pārvieto vai nokopē failu no jebkuras vietas diskā uz ceļu glabātavas iekšienē; tas nonāk tur kā īsta piezīme, un pārvietošana oriģinālu noņem tikai pēc tam, kad kopēšana ir izdevusies.
- **Nomet tekstu vai failu uz rindas, lai to pierakstītu.** Uz mapes: jauna piezīme tajā mapē, nosaukta tā, kā ieraksti. Uz piezīmes nosaukuma vai uz mapes atdalītāja, ja šai mapei ir mapes piezīme: pievienots šīs piezīmes beigās, pēc apstiprinājuma.
- **Izveido mapes piezīmi** ar otru spiedienu uz tā, kas atver mapi, ja darbojas mapju piezīmju spraudnis un mapei tādas vēl nav. Tā tiek novietota tur, kur saka paša [Folder notes](https://github.com/LostPaul/obsidian-folder-notes) iestatījumi.
- **Velc mapi no ceļa joslas uz ciļņu joslu**, lai to atvērtu tur: tās mapes piezīmi, ja tai tāda ir, citādi cilni, kas stāv šajā mapē.
- **Ritenītis staigā pa sarakstu.** Virs nosaukuma pirmais pagrieziens atver šī nosaukuma sarakstu, un katrs nākamais pārbīda iezīmējumu par rindu. Rinda, kas ritinās uz sāniem, patur ritenīti ritināšanai.
- **Ar bultiņu ārā no lauka sākuma**, lai ievilktu tajā mapi, kas ir pirms tā: <kbd>←</kbd> vienai mapei, <kbd>Shift</kbd>+<kbd>Home</kbd> (vai <kbd>Home</kbd>, kad saraksts ir aizvērts) visām.
- **Lauks nes tā krāsu, ko tas nosauc**, to pašu, kāda ir tā rindai sarakstā, un kļūst sarkans, tiklīdz nekas uz to neatsaucas — tieši tajā brīdī, kad <kbd>Enter</kbd> kaut ko izveidotu, nevis atvērtu.
- **Mapju piezīmes sarakstā ir pelēkas**, tāpēc tās lasās kā savas mapes, nevis kā vēl viena piezīme.
- **Vidējais klikšķis uz atdalītāja** atver šo mapi jaunā cilnē: tās mapes piezīmi vai cilni, kas stāv tajā.

### Mainīts

- **Piekaramā atslēga un pārdēvēšanas slēdzis ir viena vadīkla.** Ārpus glabātavas sarkana, aizslēgta piekaramā atslēga ieņem slēdža vietu; tās atvēršana atdod vietu slēdzim, un iziešana no pārdēvēšanas režīma to atkal aizslēdz.
- **Pārdēvēšanas taustiņš prasa arī piekaramajai atslēgai.** Ārpus glabātavas viens spiediens piekaramo atslēgu iemirdzina; otrs spiediens pussekundes laikā piešķir to, ko piešķir piekaramā atslēga, un atver pārdēvēšanas režīmu.
- **Pārdēvēšanas taustiņš iet pilnu apli** — virsraksts pašā piezīmē, nosaukums, nosaukums ar paplašinājumu, ceļš no glabātavas, ceļš no sistēmas saknes — un nākamais spiediens atkal ir virsraksts pašā piezīmē.
- **<kbd>Ctrl</kbd>+klikšķis un vidējais klikšķis vairs nav sinonīmi.** Viens atver cilni un pāriet uz to, otrs to atver fonā.
- **Labais klikšķis uz piezīmes nosaukuma atver paša faila izvēlni.**
- **Saraksts ir tik augsts, cik logs atļauj**, nevis Obsidian noteiktie 300 pikseļi.
- **Klikšķis uz mapes, kamēr lauks ir atvērts, patur visu ceļu aiz tās**, un ieklikšķināšana mapē laukā uzskaita šīs mapes saturu pilnībā.
- **Atdalītājs atver mapes piezīmi jebkurā dziļumā**, kamēr darbojas Folder notes, un ir pasvītrots visur, kur tāda ir. Iepriekš darbojās tikai augšējā līmeņa mapes. Ar pārējiem mapju piezīmju spraudņiem atdalītājs joprojām parāda mapi.

### Labots

- **Atvērts lauks pārdzīvoja savu failu.** Pārslēgšanās uz citu piezīmi ar atvērtu ceļa joslu atstāja rindu, kas līdz sesijas beigām sauca veco failu.
- **Dzēst, Pārdēvēt un Izveidot kopiju tika atteikti ārpus glabātavas** ar atvērtu piekaramo atslēgu, un attēliem, PDF un lapām nebija sasniedzami nekad.
- **<kbd>Ctrl</kbd>+<kbd>Enter</kbd> neko nedarīja, kamēr saraksts bija atvērts** — bet tieši tā katrs lauks atveras.
- **<kbd>Enter</kbd> ar atvērtu sarakstu, bet neko neiezīmētu** neko nedarīja; tagad tas apstiprina ierakstīto.
- **Rindu, kas pārplūda, kad visi nosaukumi jau bija visīsākajā formā, nevarēja paritināt**, tāpēc ceļa gals palika nesasniedzams.
- **Spraudņa atslēgšana atstāja nedzīvu pogu** katras tā aizlāpītās piezīmes galvenē.

## 1.2.0 — 2026-08-25[^1.2.0]

### Pievienots

- **Valodas iestatījums.** Lure pēc noklusējuma seko Obsidian valodai, un to var iestatīt uz jebkuru no savām. Šis ir arī vienīgais ceļš pie grieķu un sanskrita tulkojuma, ko pats Obsidian nepiedāvā. Paša iestatījuma uzraksts paliek angliski, lai to vienmēr varētu atrast atpakaļ no valodas, kuru neproti lasīt.

## 1.1.2 — 2026-08-25[^1.1.2]

### Mainīts

- **Vieglāka stila lapa.** Rinda vairs neizmanto `:has()` selektorus un lielāko daļu `!important` noteikumu. Tā pārkārtojas ar mazāku darbu, un spraudņu pārbaudes brīdinājumu skaits nokrita no 56 uz 7.

## 1.1.1 — 2026-08-22[^1.1.1]

### Labots

- **Īss mapes nosaukums varēja tikt uzzīmēts ar spraugu vidū** — `atlas` kā `atl as` — jo tā saīsinātajai formai atvēlētā vieta bija platāka par pašu nosaukumu.

## 1.1.0 — 2026-08-22[^1.1.0]

### Pievienots

- **Labā klikšķa vārdnīca.** Viens spiediens atver izvēlni; divi un trīs spiedieni kopē arvien vairāk — nosaukumu, nosaukumu ar paplašinājumu, ceļu. Rindas izvēlnes tagad sakrīt ar Failu pārlūka izvēlnēm ieraksts pēc ieraksta.
- **Izvēlnes ārpus glabātavas.** Saraksta rindas un ārējais skatītājs piedāvā atvēršanu, *Kopēt ceļu* un *Parādīt sistēmas pārlūkā*; ar atvērtu piekaramo atslēgu arī *Jauna piezīme*, *Jauna mape*, *Izveidot kopiju*, *Pārdēvēt…* un *Dzēst*. Dzēšana pārvieto uz sistēmas atkritni un nekad nav galīga.
- **Atvērt citur.** <kbd>Ctrl</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> un vidējais klikšķis uz piezīmes nosaukuma vai mapes atver to jaunā cilnē, dalījumā vai logā. Abi ir velkami, tāpat kā to rindas Failu pārlūkā.
- **Velc piezīmes uz rindas, lai tās pārvietotu.** Nomet piezīmi, vairākas piezīmes vai mapi uz mapes posma vai glabātavas nosaukuma.
- **Komanda: Fokusēt ceļa joslu**, ar iezīmētu visu ceļu — bez noklusējuma karstā taustiņa, piesaisti savu.
- **Ieraksti URL** ceļa joslā: `http(s)://` un `obsidian://` atveras kā saites, `file://` un procentkodēti ceļi atver failu.
- **Papildināšana ar Tab**, kā to dara čaula: katrs spiediens papildina tik tālu, cik mapes nosaukumi sakrīt, un apstājas tur, kur tie atšķiras. <kbd>Shift</kbd>+<kbd>Tab</kbd> iet atpakaļ. Kad papildināt vairs nav ko, <kbd>Tab</kbd> tā vietā paplašina iezīmējumu: nosaukums, nosaukums ar paplašinājumu, ceļš no glabātavas, ceļš no sistēmas saknes.
- **Saraksts atveras tur, kur esi**, un priekšskata laukā to, uz ko norādi; iziešana no saraksta atdod tavu tekstu atpakaļ.
- **Pārvieto piezīmi ārā no glabātavas** pēc apstiprinājuma, kas saskaita saites, ko tas pārraus. To izkopē ārā un tad izmet atkritnē, tāpēc to var atgūt tāpat kā jebkuru izdzēstu piezīmi.
- **Iestatījums Rādīt failu paplašinājumus**, un pēdiņās liktie ceļi (kādus rada Windows *Kopēt kā ceļu*) tiek saprasti.
- **Iestatījumi parādās Obsidian iestatījumu meklēšanā** Obsidian 1.13 un jaunākā versijā.

### Mainīts

- **Gari ceļi ietilpst rūtī.** Nosaukumi tiek saīsināti, sākot ar visnederīgāko — glabātavas nosaukums, tad paplašinājums, tad mapes, pašas piezīmes nosaukums pēdējais — nekad tālāk par robežu, aiz kuras tos vairs nevar atšķirt. Novieto peli virs saīsināta nosaukuma, lai izlasītu to pilnībā.
- **Klikšķis uz piezīmes nosaukuma iezīmē to bez paplašinājuma**, tāpēc pārdēvēšana vairs neriskē mainīt faila tipu.
- **Pārdēvēšanas taustiņš atveras uz nosaukuma bez paplašinājuma**, un nākamie spiedieni paplašina iezīmējumu.
- **Klikšķis uz mapes patur pārējo ceļu redzamu**, arī ārpus glabātavas.
- **Pārlūkošana atpakaļ savā glabātavā atver failus kā piezīmes**, ar saitēm un atpakaļsaitēm, nevis ārējā skatītājā.

### Labots

- **Izvēlņu uzraksti visās valodās bija angliski**; tagad tie nāk no paša Obsidian tulkojumiem.
- **Pārdēvēšanas taustiņš iestrēga Obsidian pārdēvēšanas dialogā**, kad piezīme bija aizritināta garām virsrakstam.
- **<kbd>Esc</kbd> bija jāspiež divreiz**, lai aizvērtu lauku un tā sarakstu.
- **<kbd>Ctrl</kbd>+<kbd>Enter</kbd> atvēra saiti redaktorā**, nevis darbojās ar ceļa joslu.
- **Pārdēvēšana ārpus glabātavas pazaudēja ierakstīto nosaukumu**, kad tika nospiesta piekaramā atslēga.
- **Tab varēja griezties bez virzības** mapē, kas atrodas blakus savai mapes piezīmei.

## 1.0.4 — 2026-08-13[^1.0.4]

### Pievienots

- **Piezīme, kurā atrodies, sarakstā ir atzīmēta zilā krāsā**, tāpēc, pārlūkojot atpakaļ uz tās mapi, redzi, kur sāki.

## 1.0.3 — 2026-08-13[^1.0.3]

### Dokumentācija

- README saista spraudņa lapu kopienas katalogā, un tulkotie README ir atjaunināti.

## 1.0.2 — 2026-08-13[^1.0.2]

### Mainīts

- **Nepieciešams Obsidian 1.8.7 vai jaunāks** (bija 1.4.0). Divas iespējas, uz kurām ceļa josla balstās — failu kopēšana un kļūdas paskaidre zem lauka — to prasa.
- **Laidienu lejupielādēm ir parakstīta būvējuma izcelsme**, tāpēc ar `gh attestation verify` var apstiprināt, ka `main.js` ir būvēts no šī repozitorija.

### Labots

- **Trūkstoša ārēja faila atvēršana noklusējuma lietotnē klusējot neizdevās**; tagad par neveiksmi tiek paziņots.

## 1.0.1 — 2026-08-13[^1.0.1]

### Labots

- **Pārdēvēšanas režīmā piezīme konfliktēja pati ar sevi** — pārlūkojot atpakaļ uz tās pašas mapi, tās nosaukums no saraksta pazuda, it kā tas bloķētu savu paša pārdēvēšanu.
- **Pirmā mapes parādīšana pēc Obsidian palaišanas neizvērsa neko.**
- **Mapes izvēle no saraksta varēja izbeigt pārdēvēšanas režīmu**, nevis ieiet tajā dziļāk.
- **Ārējas izmaiņas varēja klusējot pārrakstīt** cits rakstītājs, piemēram, Sync vai otra rūts. Tagad rakstīšana ir atomāra.
- **Fokusa kontūras atiestatījums noplūda citos skatos**; tagad tas attiecas tikai uz galvenēm, ko Lure ir aizlāpījis.

### Dokumentācija

- README un lietošanas pamācība ir pieejamas visās 44 valodās, ko spraudnis piegādā.
- Pamācība sauca Obsidian iestatījumu *Detect all file extensions*, kas tagad saucas *Rādīt visus failu tipus*.

## 1.0.0 — 2026-08-10[^1.0.0]

Pirmais laidiens. Aizstāj faila nosaukumu piezīmes galvenē ar uzklikšķināmu un rediģējamu ceļu cauri glabātavai — adreses joslu tavām piezīmēm, veidotu pēc Dolphin parauga.

### Pievienots

- **Uzklikšķini uz mapes**, lai redzētu tās vecākmapes saturu un nomainītu to pret kaimiņmapi, neaiztiekot pārējo ceļu.
- **Uzklikšķini uz atdalītāja** aiz mapes, lai to parādītu un izvērstu Failu pārlūkā vai lai atvērtu tās mapes piezīmi, ja to apstrādā Folder notes.
- **Uzklikšķini uz faila nosaukuma vai tukšas vietas**, lai ierakstītu ceļu, ar papildināšanu: `/` nolaižas dziļāk, <kbd>Atpakaļatkāpe</kbd> paceļas augšup, <kbd>Enter</kbd> apstiprina.
- **Pārvietošanas/pārdēvēšanas režīms** pārslēdz tās pašas darbības uz pārvietošanu un pārdēvēšanu, ar tādām pašām pārbaudēm, kādas veic Obsidian.
- **<kbd>Ctrl</kbd> atver jaunā cilnē** — vai, pārvietošanas/pārdēvēšanas režīmā, piezīmi turp nokopē.
- **<kbd>F2</kbd> pārslēdzas** starp virsrakstu pašā piezīmē un ceļa joslu.
- **Ārpus glabātavas** (pēc noklusējuma izslēgts): glabātavas nosaukums atver tavas pārējās glabātavas, mājas mapi, failu sistēmas sakni un pievienotos diskus. Tur ārā nekas netiek rakstīts, kamēr to neatslēdz, un piezīmi no glabātavas var tikai izkopēt, nekad pārvietot.
- **45 valodas.**

[^unreleased]: Izmaiņas kopš 1.2.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.2.0...HEAD>
[^1.2.0]: Izmaiņas kopš 1.1.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.2...1.2.0>
[^1.1.2]: Izmaiņas kopš 1.1.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.1...1.1.2>
[^1.1.1]: Izmaiņas kopš 1.1.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.0...1.1.1>
[^1.1.0]: Izmaiņas kopš 1.0.4: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.4...1.1.0>
[^1.0.4]: Izmaiņas kopš 1.0.3: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.3...1.0.4>
[^1.0.3]: Izmaiņas kopš 1.0.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.2...1.0.3>
[^1.0.2]: Izmaiņas kopš 1.0.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.1...1.0.2>
[^1.0.1]: Izmaiņas kopš 1.0.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.0...1.0.1>
[^1.0.0]: Pirmais laidiens: <https://github.com/Gelaende51/obsidian-lure/releases/tag/1.0.0>
