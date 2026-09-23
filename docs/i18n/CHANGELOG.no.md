<!-- Oversettelse av CHANGELOG.md — status: commit 2739cf0.
     Maskinoversatt (Claude Opus 5) og ikke gjennomlest av morsmålsbrukere.
     Rettelser er velkomne; den engelske CHANGELOG-filen er den gjeldende
     utgaven. -->

[English](../../CHANGELOG.md) · [العربية](CHANGELOG.ar.md) · [አማርኛ](CHANGELOG.am.md) · [Беларуская](CHANGELOG.be.md) · [বাংলা](CHANGELOG.bn.md) · [Català](CHANGELOG.ca.md) · [Čeština](CHANGELOG.cs.md) · [Dansk](CHANGELOG.da.md) · [Deutsch](CHANGELOG.de.md) · [Ελληνικά](CHANGELOG.el.md) · [Español](CHANGELOG.es.md) · [فارسی](CHANGELOG.fa.md) · [Suomi](CHANGELOG.fi.md) · [Français](CHANGELOG.fr.md) · [Gaeilge](CHANGELOG.ga.md) · [עברית](CHANGELOG.he.md) · [Magyar](CHANGELOG.hu.md) · [Bahasa Indonesia](CHANGELOG.id.md) · [Italiano](CHANGELOG.it.md) · [日本語](CHANGELOG.ja.md) · [ქართული](CHANGELOG.ka.md) · [ភាសាខ្មែរ](CHANGELOG.kh.md) · [한국어](CHANGELOG.ko.md) · [Latviešu](CHANGELOG.lv.md) · [Bahasa Melayu](CHANGELOG.ms.md) · [नेपाली](CHANGELOG.ne.md) · [Nederlands](CHANGELOG.nl.md) · **Norsk** · [Polski](CHANGELOG.pl.md) · [Português](CHANGELOG.pt.md) · [Português (Brasil)](CHANGELOG.pt-BR.md) · [Română](CHANGELOG.ro.md) · [Русский](CHANGELOG.ru.md) · [संस्कृतम्](CHANGELOG.sa.md) · [Slovenčina](CHANGELOG.sk.md) · [Shqip](CHANGELOG.sq.md) · [Српски](CHANGELOG.sr.md) · [Svenska](CHANGELOG.sv.md) · [ไทย](CHANGELOG.th.md) · [Türkçe](CHANGELOG.tr.md) · [Українська](CHANGELOG.uk.md) · [Oʻzbekcha](CHANGELOG.uz.md) · [Tiếng Việt](CHANGELOG.vi.md) · [简体中文](CHANGELOG.zh.md) · [繁體中文](CHANGELOG.zh-TW.md)

# Endringslogg

Hver utgivelse av Lure, den nyeste først. Det som har kommet inn siden forrige utgivelse, står under *Ikke utgitt*. Versjonene har ingen `v` foran seg, slik som utgivelsesmerkene.

## 1.5.0 — 2026-09-23[^1.5.0]

### Lagt til

- **Et navn som allerede er i bruk, spør i stedet for å avvise.** Å flytte eller gi nytt navn til noe med et navn som allerede finnes, åpner en dialog med to stier du kan redigere: hvor filen din skal, og hvor filen i veien skal, rød mens den fortsatt er tatt. Hver sti er også tegnet slik stilinjen tegner en, med delene som skiller seg farget og forkortet sist. Begge felt har en liste; den andre har de vanlige veiene ut — bytt plass (den går til filens gamle mappe), bytt navn (den blir og tar filens gamle navn), bytt begge (den tar filens gamle sti), `-1`, `-bak` og `-old` ved siden av sitt eget navn, og de to navnene filene hadde. En vei ut hvis sti er tatt, er grået. Å velge en fyller bare feltet; Bruk flytter begge, lenker og alt, og Avbryt flytter ingenting. Å velge et navn som allerede er i bruk fra nedtrekkslisten spør det samme, og det samme gjør det å slippe en fil på en mappe som allerede har navnet.
- **`:graph` inne i en mappe åpner den mappens graf** — grafen filtrert til `path:"that/folder"`, slik dens egen søkeboks ville gjort. I hvelvroten er det fortsatt hele grafen, som før.
- **En mappe som allerede har navnet, er rød** i nedtrekkslisten mens du flytter, og det samme gjelder en fil med det navnet, slik at kollisjonen vises før du velger.

### Endret

- **Tilbudet er alltid det Tab ville skrevet.** Der navnene slutter å stemme overens, tilbyr feltet steget mot det første av dem, og raden Tab ville gått til, avgjør det; å skrive over et navn lar filendelsen stå og tilbys foran den; en mappe man nettopp steg inn i tilbyr sitt første steg. Før fantes tilstander der ingenting ble tilbudt, og Tab skrev noe likevel. Nedtrekkslistens understreking følger tilbudet mens det endres, og Tab på en rad du har pilet deg til, tar den raden, ikke den ved siden av.
- **Tilbudet ignorerer store og små bokstaver.** Å skrive `sch` tilbyr `Schemes`, stavet slik navnet er; å ta tilbudet tilbake gir bokstavene dine tilbake slik du skrev dem. Der både `Test` og `test` finnes, tilbys den som er stavet slik du skrev.
- **Etter et trykk på Tab tilbys neste steg med det samme**, som etter en skrevet bokstav.
- **Navn som begynner med det du skrev, kommer først i nedtrekkslisten**, merket med en linje ned kanten — blå der de deler mer enn du skrev, grønn på grenen tilbudet tar der de skiller seg — foran navnene som bare inneholder det. Hvert av dem understreker steget <kbd>Tab</kbd> ville tatt mot det, ikke bare det som tilbys.
- **Nedtrekkslisten følger markøren**, eller starten av en markering: den lister opp mappen punktet er i, filtrert etter bokstavene foran det. Ved starten av et navn er det hele mappen.
- **Å peke på en rad viser den som tilbudet** — det du skrev, forblir ditt, og resten av navnet er merket — og å flytte pekeren av listen bringer tilbudet tilbake.
- **→ tar én bokstav av tilbudet** i stedet for hele; <kbd>End</kbd> tar det fortsatt helt.
- **Rettetast før en filendelse som står alene, går ett nivå opp**, som i et tomt felt; den alenestående filendelsen forsvinner.
- **F2 i et åpent felt gjør det til en gi-nytt-navn der det står**, og beholder teksten, markøren og merkingen, og **Fokuser på stilinjen** tar navneendringen tilbake av det på samme måte.
- **Alt annet som trykkes eller klikkes mellom trykkene, starter runden av F2 og Fokuser på stilinjen på nytt.**
- **Mapper er fet i nedtrekkslisten**, så en mappes eget notat ikke lenger trenger å være grått for å skille seg ut: det er lilla som ethvert annet notat.
- **Nedtrekkslisten er ikke bredere enn stilinjen.** Et navn som ikke passer, forkortes på samme måte som stilinjen forkorter ett, og vises helt ved hover.
- **PageUp og PageDown ruller nedtrekkslisten etter det den viser**, også fra feltet, og den merkede raden beholder plassen sin på skjermen. <kbd>Home</kbd> og <kbd>End</kbd> bringer den første og siste raden i syne.
- **Nedtrekkslisten viser opptil 1 000 oppføringer**, før den teller resten, i stedet for 100.
- **Mapper viker lengst først.** Når plassen blir knapp, forkortes det lengste mappenavnet til lengden på det nest lengste, så begge sammen, og så videre, hver med sin egen nedre grense. Før ble alle mapper forkortet samtidig i forhold til lengden sin.
- **Forkortede navn glir i stedet for å hoppe.** Et navn som viker, klippes ved pikselen og toner ut under sin `…`, slik at ingenting etter det i raden flytter seg i trinn mens et panel endrer størrelse.

### Rettet

- I en rute til høyre åpnet nedtrekkslisten under den venstre ruten, helt til den første bokstaven ble skrevet.
- Å flytte pekeren bort fra nedtrekkslisten brakte tilbudet tilbake, men ikke fargen dens.
- Et mellomrom der et forkortet navn ble delt — `development guidelines` — falt bort, slik at de to ordene rant sammen.

## 1.4.0 — 2026-09-19[^1.4.0]

### Lagt til

- **En Hurtigtaster-rad i innstillingene.** Knappen åpner Obsidians *Hurtigtaster* filtrert til dette tillegget, der *Fokuser på stilinjen* — som leveres uten tast — kan få en.
- **En stilinje på paneler som ikke holder noen fil.** En tom fane viser `vault / :blank`, grafen `vault / :graph`, og alle andre visninger uten noe å navngi får sin egen `:`-etikett — fanen til et hjemmeside-tillegg viser `:home-launcher`. Feltet ved siden av er en adresselinje: skriv inn en sti og <kbd>Enter</kbd> åpner den i det panelet, eller oppretter den. Før dette var raden tom — tillegget skjulte Obsidians egen tittel og satte ingenting i stedet.
- **En side kan skrives inn i tillegg til å velges** — `:graph` og resten er en adresse, ikke bare et listeelement. Et kolon begynner ingen filnavn, så å skrive ett hvor som helst tilkaller dem, og feltet får deres farge i stedet for å tilby å opprette et notat som ingenting kunne hete.
- **En rad for Obsidians egen *Vis alle filtyper***, ved siden av regelen for punktfiler, siden begge avgjør hva en nedtrekksliste kan vise: den sier at du skal lete etter den innstillingen i Obsidians egne innstillinger og slå den på for å se alle filer, og knappen ved siden av åpner den siden med innstillingen rullet til syne og blinkende, slik et søkeresultat i innstillingene ville gjort. Navngitt med Obsidians ord, forklart på 45 språk.
- **Hvelvets rot lister opp sidene et panel kan holde** — `:graph`, `:search` og alle visninger tilleggene dine registrerer, deriblant en hjemmefane eller en kalender. Velg en, og panelet åpner den, slik som når du velger et notat åpner notatet. Visninger som finnes for å vise en fil er utelatt, fordi de ikke ville hatt noe å vise.
- **Hvelvets eget skilletegn åpner startsiden din**, der et tillegg tilbyr en, og er understreket for å si det; trykket etter det bretter filtreet sammen, og trykket etter det setter tilbake nøyaktig det som var åpent. Uten et slikt tillegg bretter første trykk sammen, som før.
- **Skriv en sti fra filsystemets rot.** En `/` foran et tomt felt åpner en i stedet for å bli slukt, hvert senere skråstrek i den hører til den, og nedtrekkslisten viser maskinen i stedet for hvelvet.

### Endret

- **F2 og Fokuser på stilinjen trykker Tab inne i feltet.** Det Tab ville gjort der — neste trinn, fullføre det du skrev, gå inn i en mappe — gjør de også; bare der Tab går rundt til begynnelsen av stien, forlater de feltet: F2 til overskriften i notatet, kommandoen til notatet. Før fikk F2 et felt du hadde skrevet i til å begynne på nytt på navnet, og kommandoen lukket feltet.
- **Trinnet etter at syklusen forlater feltet er rotmappen.** Trykket etter at F2 har gått tilbake til overskriften i notatet, eller kommandoen tilbake til notatet, lander der Tabs runde gjør — hvelvets rot, hele stien i feltet, den første mappen markert — slik at intet trinn i ringen er overlatt til Tab alene.
- **Fokuser på stilinjen går som F2.** Den åpner på navnet i stedet for hele stien, tar de samme fire trinnene, og trykket etter det siste lukker feltet og setter markøren tilbake i notatet — før gikk den rundt i trinnene i det uendelige, og den ene tasten som nådde raden kunne ikke forlate den.
- **Et opptatt navn meldes når du bruker det, ikke mens du skriver det.** Hvert navn som skrives mot `Notes.md` passerer navn som kan være egne filer, og advarselen pleide å blinke opp og bort bokstav for bokstav. Det som er galt med stavemåten til et navn, sies fortsatt mens det staves.
- **Et skilletegn hvis mappenotat allerede er åpent, viser mappen** i stedet for å åpne på nytt det som er på skjermen — som er det andre trykket alltid har betydd.
- **Der du er, er fet i en nedtrekksliste**, ikke bare blå.
- **Alt som ikke er et notat, er oransje i en nedtrekksliste**, ikke bare teksttypene Obsidian ikke har noen visning for. Det lilla plukker ut notatene i en mappe med blandet innhold; én farge for resten sier det samme raskere.

### Rettet

- **Backspace over en klikket mappe tar ikke lenger hvelvets navn bort.** Skråstreken som ble stående foran, ble lest som en sti fra maskinens rot, noe som tømmer det åpnende segmentet — og å lukke feltet med Escape satte det aldri tilbake, så fanen mistet hvelvets navn og ikon for godt. En innledende skråstrek regnes nå som maskinens bare når dens første mappe faktisk finnes, og det åpnende segmentet kommer tilbake med hver vei ut av feltet.
- Utenfor hvelvet var filer skjult med mindre Obsidians **Oppdag alle filendelser** var på — en innstilling om hva hvelvet indekserer, brukt på mapper som ikke er i hvelvet. En `.txt` ved siden av notatene dine listes der ute uansett.
- Nedtrekkslisten til hvelvets navn gjorde ingenting på et panel uten fil, som er nettopp panelet du ville brukt for å gå et annet sted.
- Å klikke på hvelvets navn lot Obsidians egen tittel stå ved siden av stien i feltet, gråtonet, der den ikke vises noe annet tidspunkt: raden måler seg selv etter det den har tegnet, og i det øyeblikket har den tømt seg selv for å gi plass til feltet.

- Å klikke på det tomme området åpnet feltet og mistet det så: å vise notatet i Filutforsker tar med seg tekstmarkøren, så feltet sto åpent og markert mens hvert tastetrykk gikk til treet.
- Trinnet som viser stien fra systemroten, tegnet et spor av den samme stien ved siden av feltet, uten tilpasning, slik at en dyp sti ble malt over seg selv.

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

[^1.5.0]: Endringer siden 1.4.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.4.0...1.5.0>
[^1.4.0]: Endringer siden 1.3.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.3.0...1.4.0>
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
