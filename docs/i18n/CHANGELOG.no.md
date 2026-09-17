<!-- Oversettelse av CHANGELOG.md — status: commit 973105b.
     Maskinoversatt (Claude Opus 5) og ikke gjennomlest av morsmålsbrukere.
     Rettelser er velkomne; den engelske CHANGELOG-filen er den gjeldende
     utgaven. -->

[English](../../CHANGELOG.md) · [العربية](CHANGELOG.ar.md) · [አማርኛ](CHANGELOG.am.md) · [Беларуская](CHANGELOG.be.md) · [বাংলা](CHANGELOG.bn.md) · [Català](CHANGELOG.ca.md) · [Čeština](CHANGELOG.cs.md) · [Dansk](CHANGELOG.da.md) · [Deutsch](CHANGELOG.de.md) · [Ελληνικά](CHANGELOG.el.md) · [Español](CHANGELOG.es.md) · [فارسی](CHANGELOG.fa.md) · [Suomi](CHANGELOG.fi.md) · [Français](CHANGELOG.fr.md) · [Gaeilge](CHANGELOG.ga.md) · [עברית](CHANGELOG.he.md) · [Magyar](CHANGELOG.hu.md) · [Bahasa Indonesia](CHANGELOG.id.md) · [Italiano](CHANGELOG.it.md) · [日本語](CHANGELOG.ja.md) · [ქართული](CHANGELOG.ka.md) · [ភាសាខ្មែរ](CHANGELOG.kh.md) · [한국어](CHANGELOG.ko.md) · [Latviešu](CHANGELOG.lv.md) · [Bahasa Melayu](CHANGELOG.ms.md) · [नेपाली](CHANGELOG.ne.md) · [Nederlands](CHANGELOG.nl.md) · **Norsk** · [Polski](CHANGELOG.pl.md) · [Português](CHANGELOG.pt.md) · [Português (Brasil)](CHANGELOG.pt-BR.md) · [Română](CHANGELOG.ro.md) · [Русский](CHANGELOG.ru.md) · [संस्कृतम्](CHANGELOG.sa.md) · [Slovenčina](CHANGELOG.sk.md) · [Shqip](CHANGELOG.sq.md) · [Српски](CHANGELOG.sr.md) · [Svenska](CHANGELOG.sv.md) · [ไทย](CHANGELOG.th.md) · [Türkçe](CHANGELOG.tr.md) · [Українська](CHANGELOG.uk.md) · [Oʻzbekcha](CHANGELOG.uz.md) · [Tiếng Việt](CHANGELOG.vi.md) · [简体中文](CHANGELOG.zh.md) · [繁體中文](CHANGELOG.zh-TW.md)

# Endringslogg

Hver utgivelse av Lure, den nyeste først. Det som har kommet inn siden forrige utgivelse, står under *Ikke utgitt*. Versjonene har ingen `v` foran seg, slik som utgivelsesmerkene.

## 1.3.0 — 2026-09-17[^1.3.0]

### Lagt til

- **Hent en fil inn i hvelvet utenfra.** Flytt eller kopier en fil fra hvor som helst på disken til en sti inne i hvelvet ditt; den kommer inn som et ekte notat, og en flytting fjerner originalen først etter at kopien har lykkes.
- **Slipp tekst eller en fil på raden for å skrive den ned.** På en mappe: et nytt notat i den mappen, med navnet du skriver. På navnet til notatet, eller på skilletegnet til en mappe som har et mappenotat: lagt til på slutten av det notatet, etter en bekreftelse.
- **Lag et mappenotat** med et nytt trykk på det som åpner mappen, der et mappenotat-tillegg kjører og mappen ennå ikke har noe. Det legges der [Folder notes](https://github.com/LostPaul/obsidian-folder-notes) sine egne innstillinger sier.
- **Dra en mappe fra stilinjen opp på fanelinjen** for å åpne den der: mappenotatet der den har ett, ellers en fane som står i den mappen.
- **Hjulet går gjennom listen.** Over et navn åpner første dreining navnets liste, og hver dreining etter det flytter merkingen en rad. En rad som ruller sidelengs, beholder hjulet til rulling.
- **Gå ut foran feltet med piltast** for å hente inn mappen foran det: <kbd>←</kbd> for én mappe, <kbd>Skift</kbd>+<kbd>Home</kbd> (eller <kbd>Home</kbd> med listen lukket) for alle sammen.
- **Feltet bærer fargen til det det navngir**, den samme som raden har i listen, og blir rødt når ingenting svarer til det — i det øyeblikket <kbd>Enter</kbd> ville lage noe i stedet for å åpne det.
- **Mappenotater er grå i listen**, så de leses som mappens eget og ikke som enda et notat.
- **Midtklikk på et skilletegn** for å åpne den mappen i en ny fane: mappenotatet, eller en fane som står i den.

### Endret

- **Hengelåsen og vekslebryteren for å gi nytt navn er én kontroll.** Utenfor hvelvet tar en rød, lukket hengelås bryterens plass; åpner du den, overlates plassen til bryteren, og å forlate modusen for å gi nytt navn lukker den igjen.
- **Tasten for å gi nytt navn spør hengelåsen også.** Utenfor hvelvet får ett trykk hengelåsen til å blinke; et nytt trykk innen et halvt sekund gir det hengelåsen gir, og åpner modusen for å gi nytt navn.
- **Tasten for å gi nytt navn går en hel runde** — overskriften i notatet, navnet, navnet med filendelsen, stien fra hvelvet, stien fra systemroten — og neste trykk er overskriften i notatet igjen.
- **<kbd>Ctrl</kbd>-klikk og midtklikk er ikke lenger det samme.** Det ene åpner en fane og går til den, det andre åpner den i bakgrunnen.
- **Høyreklikk på navnet til notatet åpner filens egen meny.**
- **Listen er så høy som vinduet tillater**, i stedet for Obsidians faste 300 piksler.
- **Å klikke på en mappe mens et felt er åpent, beholder hele stien etter den**, og å klikke seg inn i en mappe inne i feltet lister opp innholdet i den mappen i sin helhet.
- **Skilletegnet åpner et mappenotat på et hvilket som helst nivå** når Folder notes kjører, og er understreket overalt hvor det finnes ett. Tidligere virket bare mapper på øverste nivå. Med de andre mappenotat-tilleggene viser skilletegnet fremdeles mappen.

### Rettet

- **Et åpent felt overlevde filen sin.** Å bytte til et annet notat med stilinjen åpen gjorde at raden navnga den gamle filen resten av økten.
- **Slett, Gi nytt navn og Lag en kopi ble avvist utenfor hvelvet** med hengelåsen åpen, og kunne aldri nås for bilder, PDF-er og sider.
- **<kbd>Ctrl</kbd>+<kbd>Enter</kbd> gjorde ingenting mens listen var åpen** — som er slik hvert felt åpner.
- **<kbd>Enter</kbd> med listen åpen, men uten noe merket,** gjorde ingenting; nå bekrefter den det du skrev.
- **En rad som fløt over med alle navn allerede på det korteste, kunne ikke rulles**, slik at enden av stien ble uoppnåelig.
- **Å slå av tillegget etterlot en død knapp** i overskriftslinjen til hvert notat det hadde endret.

## 1.2.0 — 2026-08-25[^1.2.0]

### Lagt til

- **Språkinnstilling.** Lure følger Obsidians språk som standard, og kan settes til hvilket som helst av sine egne. Dette er også den eneste veien til oversettelsene til gresk og sanskrit, som Obsidian selv ikke tilbyr. Etiketten til innstillingen står på engelsk, slik at den alltid kan finnes igjen fra et språk du ikke kan lese.

## 1.1.2 — 2026-08-25[^1.1.2]

### Endret

- **Lettere stilark.** Raden bruker ikke lenger `:has()`-velgere eller de fleste `!important`-reglene. Den tilpasser seg med mindre arbeid, og advarslene i tilleggsgjennomgangen falt fra 56 til 7.

## 1.1.1 — 2026-08-22[^1.1.1]

### Rettet

- **Et kort mappenavn kunne tegnes med et mellomrom i seg** — `atlas` som `atl as` — fordi plassen som var satt av til den forkortede formen, var bredere enn navnet selv.

## 1.1.0 — 2026-08-22[^1.1.0]

### Lagt til

- **Høyreklikkets ordforråd.** Ett trykk åpner en meny; to og tre trykk kopierer gradvis mer — navnet, navnet med filendelsen, stien. Menyene i raden svarer nå til Filutforskerens, oppføring for oppføring.
- **Menyer utenfor hvelvet.** Radene i listen og den eksterne viseren tilbyr å åpne, *Kopier sti* og *Vis i mappe*; med hengelåsen åpen også *Nytt notat*, *Ny mappe*, *Lag en kopi*, *Gi nytt navn…* og *Slett*. Slett flytter til systemets papirkurv og er aldri endelig.
- **Åpne et annet sted.** <kbd>Ctrl</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Skift</kbd> og midtklikk på navnet til notatet eller på en mappe åpner det i en ny fane, en deling eller et vindu. Begge kan dras, slik radene deres i Filutforskeren kan.
- **Dra notater til raden for å flytte dem.** Slipp et notat, flere notater eller en mappe på et mappeledd eller på hvelvets navn.
- **Kommando: Fokuser på stilinjen**, med hele stien merket — ingen forhåndsvalgt hurtigtast, bind din egen.
- **Skriv en URL** i stilinjen: `http(s)://` og `obsidian://` åpnes som lenker, `file://` og prosentkodede stier åpner filen.
- **Tab-fullføring**, slik et skall gjør det: hvert trykk fullfører så langt navnene i mappen stemmer overens, og stanser der de skiller lag. <kbd>Skift</kbd>+<kbd>Tab</kbd> går tilbake. Når det ikke er mer å fullføre, utvider <kbd>Tab</kbd> merkingen i stedet: navn, navn med filendelse, sti fra hvelvet, sti fra systemroten.
- **Listen åpner der du er** og forhåndsviser det du peker på, i feltet; forlater du listen, får du teksten din tilbake.
- **Flytt et notat ut av hvelvet** etter en bekreftelse som teller lenkene det vil bryte. Det kopieres ut og legges så i papirkurven, så det kan gjenopprettes som et hvilket som helst slettet notat.
- **Innstillingen Vis filendelser**, og siterte stier (slik Windows' *Kopier som bane* lager dem) forstås.
- **Innstillingene dukker opp i Obsidians søk i innstillingene** på Obsidian 1.13 og senere.

### Endret

- **Lange stier får plass i ruten.** Navnene kortes ned med det minst nyttige først — hvelvets navn, så filendelsen, så mappene, notatets eget navn til sist — aldri forbi punktet der de kan skilles fra hverandre. Hold pekeren over et forkortet navn for å lese det i sin helhet.
- **Å klikke på navnet til notatet merker det uten filendelsen**, så det å gi nytt navn risikerer ikke lenger å endre filtypen.
- **Tasten for å gi nytt navn åpner på navnet uten filendelsen**, og videre trykk utvider merkingen.
- **Å klikke på en mappe holder resten av stien synlig**, også utenfor hvelvet.
- **Å bla tilbake inn i hvelvet åpner filer som notater**, med lenker og tilbakelenker, i stedet for i den eksterne viseren.

### Rettet

- **Etikettene i menyene var engelske på alle språk**; nå kommer de fra Obsidians egne oversettelser.
- **Tasten for å gi nytt navn kjørte seg fast i Obsidians dialog for å gi nytt navn** når notatet var rullet forbi tittelen sin.
- **<kbd>Esc</kbd> krevde to trykk** for å lukke feltet og listen.
- **<kbd>Ctrl</kbd>+<kbd>Enter</kbd> åpnet en lenke i redigereren** i stedet for å virke på stilinjen.
- **Å gi nytt navn utenfor hvelvet mistet det innskrevne navnet** når hengelåsen ble trykket.
- **Tab kunne gå i ring uten å komme videre** på en mappe som ligger ved siden av sitt eget mappenotat.

## 1.0.4 — 2026-08-13[^1.0.4]

### Lagt til

- **Notatet du står i, er merket med blått** i listen, slik at det å bla tilbake til mappen viser hvor du startet.

## 1.0.3 — 2026-08-13[^1.0.3]

### Dokumentasjon

- README-filen lenker til tilleggets side i fellesskapskatalogen, og de oversatte README-filene er oppdatert.

## 1.0.2 — 2026-08-13[^1.0.2]

### Endret

- **Krever Obsidian 1.8.7 eller senere** (tidligere 1.4.0). To funksjoner stilinjen bygger på — å kopiere filer og feilboblen under feltet — trenger den.
- **Nedlastingene i utgivelsene bærer signert byggeopphav**, så du kan bekrefte med `gh attestation verify` at `main.js` ble bygget fra dette kodelageret.

### Rettet

- **Å åpne en ekstern fil som manglet, i standardappen mislyktes i stillhet**; nå meldes feilen fra.

## 1.0.1 — 2026-08-13[^1.0.1]

### Rettet

- **I modusen for å gi nytt navn kom et notat i konflikt med seg selv** — å bla tilbake til sin egen mappe skjulte navnet fra listen, som om det sperret for sitt eget navnebytte.
- **Første mappevisning etter oppstart av Obsidian utvidet ingenting.**
- **Å velge en mappe fra listen kunne avslutte modusen for å gi nytt navn** i stedet for å gå ned i den.
- **Eksterne endringer kunne bli overskrevet i stillhet** av en annen skriver, som Sync eller en annen rute. Skrivingene er nå atomiske.
- **Nullstillingen av fokusrammen lakk over i andre visninger**; nå gjelder den bare overskriftslinjer Lure har endret.

### Dokumentasjon

- README-filen og bruksveiledningen finnes på alle de 44 språkene tillegget leveres med.
- Veiledningen nevnte Obsidians innstilling *Detect all file extensions*, som nå heter *Show all file types*.

## 1.0.0 — 2026-08-10[^1.0.0]

Første utgivelse. Erstatter filnavnet i overskriftslinjen til et notat med en klikkbar, redigerbar sti gjennom hvelvet — en adresselinje for notatene dine, etter mønster av Dolphins.

### Lagt til

- **Klikk på en mappe** for en liste over innholdet i mappen over, for å bytte den ut med en nabomappe og la resten av stien være.
- **Klikk på skilletegnet** etter en mappe for å vise og utvide den i Filutforskeren, eller for å åpne mappenotatet der Folder notes håndterer det.
- **Klikk på filnavnet eller på tom plass** for å skrive en sti, med autofullføring: `/` går nedover, <kbd>Rettetast</kbd> går ett nivå ut, <kbd>Enter</kbd> bekrefter.
- **Gi nytt navn-/flyttemodus** stiller de samme handlingene om til å flytte og gi nytt navn, med de samme kontrollene Obsidian selv gjør.
- **<kbd>Ctrl</kbd> åpner i en ny fane** — eller, i gi nytt navn-/flyttemodus, kopierer notatet dit i stedet.
- **<kbd>F2</kbd> veksler** mellom overskriften i notatet og stilinjen.
- **Utenfor hvelvet** (av som standard): hvelvnavnet åpner de andre hvelvene dine, hjemmemappen, roten av filsystemet og monterte stasjoner. Ingenting der ute skrives før du låser det opp, og et notat kan bare kopieres ut av hvelvet, aldri flyttes.
- **45 språk.**

[^1.3.0]: Endringer siden 1.2.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.2.0...1.3.0>
[^1.2.0]: Endringer siden 1.1.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.2...1.2.0>
[^1.1.2]: Endringer siden 1.1.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.1...1.1.2>
[^1.1.1]: Endringer siden 1.1.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.0...1.1.1>
[^1.1.0]: Endringer siden 1.0.4: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.4...1.1.0>
[^1.0.4]: Endringer siden 1.0.3: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.3...1.0.4>
[^1.0.3]: Endringer siden 1.0.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.2...1.0.3>
[^1.0.2]: Endringer siden 1.0.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.1...1.0.2>
[^1.0.1]: Endringer siden 1.0.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.0...1.0.1>
[^1.0.0]: Den første utgivelsen: <https://github.com/Gelaende51/obsidian-lure/releases/tag/1.0.0>
