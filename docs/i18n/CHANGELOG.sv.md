<!-- Översättning av CHANGELOG.md — status: commit f133f41.
     Maskinöversatt (Claude Opus 5) och inte granskad av modersmålstalare.
     Rättelser är välkomna; den engelska CHANGELOG-filen är den gällande
     versionen. -->

[English](../../CHANGELOG.md) · [العربية](CHANGELOG.ar.md) · [አማርኛ](CHANGELOG.am.md) · [Беларуская](CHANGELOG.be.md) · [বাংলা](CHANGELOG.bn.md) · [Català](CHANGELOG.ca.md) · [Čeština](CHANGELOG.cs.md) · [Dansk](CHANGELOG.da.md) · [Deutsch](CHANGELOG.de.md) · [Ελληνικά](CHANGELOG.el.md) · [Español](CHANGELOG.es.md) · [فارسی](CHANGELOG.fa.md) · [Suomi](CHANGELOG.fi.md) · [Français](CHANGELOG.fr.md) · [Gaeilge](CHANGELOG.ga.md) · [עברית](CHANGELOG.he.md) · [Magyar](CHANGELOG.hu.md) · [Bahasa Indonesia](CHANGELOG.id.md) · [Italiano](CHANGELOG.it.md) · [日本語](CHANGELOG.ja.md) · [ქართული](CHANGELOG.ka.md) · [ភាសាខ្មែរ](CHANGELOG.kh.md) · [한국어](CHANGELOG.ko.md) · [Latviešu](CHANGELOG.lv.md) · [Bahasa Melayu](CHANGELOG.ms.md) · [नेपाली](CHANGELOG.ne.md) · [Nederlands](CHANGELOG.nl.md) · [Norsk](CHANGELOG.no.md) · [Polski](CHANGELOG.pl.md) · [Português](CHANGELOG.pt.md) · [Português (Brasil)](CHANGELOG.pt-BR.md) · [Română](CHANGELOG.ro.md) · [Русский](CHANGELOG.ru.md) · [संस्कृतम्](CHANGELOG.sa.md) · [Slovenčina](CHANGELOG.sk.md) · [Shqip](CHANGELOG.sq.md) · [Српски](CHANGELOG.sr.md) · **Svenska** · [ไทย](CHANGELOG.th.md) · [Türkçe](CHANGELOG.tr.md) · [Українська](CHANGELOG.uk.md) · [Oʻzbekcha](CHANGELOG.uz.md) · [Tiếng Việt](CHANGELOG.vi.md) · [简体中文](CHANGELOG.zh.md) · [繁體中文](CHANGELOG.zh-TW.md)

# Ändringslogg

Varje utgåva av Lure, nyast först. Det som har landat sedan den senaste utgåvan ligger under *Ej släppt*. Versionerna bär inget `v`-prefix, i linje med utgåvetaggarna.

## Ej släppt[^unreleased]

### Tillagt

- **Ta in en fil i valvet utifrån.** Flytta eller kopiera en fil från var som helst på disken till en sökväg inuti ditt valv; den kommer fram som en riktig anteckning, och en flytt tar bort originalet först när kopian har lyckats.
- **Släpp text eller en fil på raden för att skriva ner den.** På en mapp: en ny anteckning i den mappen, namngiven medan du skriver. På anteckningens namn, eller på en mapps avskiljare där den mappen har en mappanteckning: tillagt i slutet av den anteckningen, efter en bekräftelse.
- **Skapa en mappanteckning** med ett andra tryck på det som öppnar mappen, där ett mappanteckningstillägg är igång och mappen ännu inte har någon. Den placeras där [Folder notes](https://github.com/LostPaul/obsidian-folder-notes) egna inställningar säger.
- **Dra en mapp från sökvägsfältet till flikraden** för att öppna den där: dess mappanteckning där den har en, annars en flik som står i den mappen.
- **Hjulet vandrar genom listan.** Över ett namn öppnar det första hjulsteget det namnets lista och varje steg därefter flyttar markeringen en rad. En rad som rullar i sidled behåller hjulet för rullningen.
- **Pila ut framför fältet** för att ta in mappen före det: <kbd>←</kbd> för en mapp, <kbd>Skift</kbd>+<kbd>Home</kbd> (eller <kbd>Home</kbd> med listan stängd) för allihop.
- **Fältet bär färgen av det som det namnger**, samma som den raden i listan, och blir rött så snart ingenting svarar mot det — i samma ögonblick som <kbd>Retur</kbd> skulle skapa något i stället för att öppna det.
- **Mappanteckningar är grå i listan**, så att de läses som sin mapps och inte som ännu en anteckning.
- **Mittenklicka på en avskiljare** för att öppna den mappen i en ny flik: dess mappanteckning, eller en flik som står i den.

### Ändrat

- **Hänglåset och namnbytesväxlaren är en och samma kontroll.** Utanför valvet tar ett rött, stängt hänglås växlarens plats; att öppna det lämnar platsen till växlaren, och att lämna namnbytesläget stänger det igen.
- **Namnbytestangenten frågar hänglåset också.** Utanför valvet blinkar ett tryck till hänglåset; ett andra tryck inom en halv sekund ger det hänglåset ger och öppnar namnbytesläget.
- **Namnbytestangenten går ett helt varv** — infogad titel, namn, namn med filändelse, sökväg från valvet, sökväg från systemets rot — och nästa tryck är den infogade titeln igen.
- **<kbd>Ctrl</kbd>-klick och mittenklick är inte längre synonymer.** Det ena öppnar en flik och går till den, det andra öppnar den i bakgrunden.
- **Högerklick på anteckningens namn öppnar filens egen meny.**
- **Listan är så hög som fönstret tillåter**, i stället för Obsidians fasta 300 bildpunkter.
- **Att klicka på en mapp medan ett fält är öppet behåller hela sökvägen efter den**, och att klicka in i en mapp inuti fältet listar den mappens innehåll i sin helhet.
- **Avgränsaren öppnar en mappanteckning på vilket djup som helst** med Folder notes igång, och är understruken överallt där det finns en. Tidigare fungerade bara mappar på översta nivån. Med de andra mappanteckningstilläggen visar avskiljaren fortfarande mappen.

### Rättat

- **Ett öppet fält överlevde sin fil.** Att byta till en annan anteckning med sökvägsfältet öppet lämnade raden namngivande den gamla filen resten av sessionen.
- **Ta bort, Byt namn och Gör en kopia avvisades utanför valvet** med hänglåset öppet, och kunde aldrig nås för bilder, PDF:er och sidor.
- **<kbd>Ctrl</kbd>+<kbd>Retur</kbd> gjorde ingenting medan listan var öppen** — vilket är så varje fält öppnas.
- **<kbd>Retur</kbd> med listan öppen men ingenting markerat** gjorde ingenting; nu bekräftar det det du skrivit.
- **En rad som svämmade över med varje namn redan i sin kortaste form gick inte att rulla**, vilket gjorde slutet av sökvägen onåbart.
- **Att inaktivera tillägget lämnade kvar en död knapp** i rubrikraden på varje anteckning det hade lappat.

## 1.2.0 — 2026-08-25[^1.2.0]

### Tillagt

- **Språkinställning.** Lure följer Obsidians språk som standard, och kan ställas in på vilket som helst av sina egna. Det är också det enda sättet att nå de grekiska och sanskritiska översättningarna, som Obsidian självt inte erbjuder. Inställningens egen etikett förblir på engelska, så att den alltid går att hitta igen från ett språk du inte kan läsa.

## 1.1.2 — 2026-08-25[^1.1.2]

### Ändrat

- **Lättare stilmall.** Raden använder inte längre `:has()`-selektorer eller de flesta `!important`-regler. Den anpassar om sig med mindre arbete, och varningarna i tilläggsgranskningen sjönk från 56 till 7.

## 1.1.1 — 2026-08-22[^1.1.1]

### Rättat

- **Ett kort mappnamn kunde ritas med en lucka i sig** — `atlas` som `atl as` — eftersom utrymmet som reserverats för dess förkortade form var bredare än namnet självt.

## 1.1.0 — 2026-08-22[^1.1.0]

### Tillagt

- **Högerklicksvokabulär.** Ett tryck öppnar en meny; två och tre tryck kopierar successivt mer — namnet, namnet med sin filändelse, sökvägen. Radens menyer motsvarar nu Filutforskarens, post för post.
- **Menyer utanför valvet.** Listans rader och den externa visaren erbjuder att öppna, *Kopiera sökväg* och *Visa i systemets filhanterare*; med hänglåset öppet också *Ny anteckning*, *Ny mapp*, *Gör en kopia*, *Byt namn…* och *Ta bort*. Ta bort flyttar till systemets papperskorg och är aldrig permanent.
- **Öppna någon annanstans.** <kbd>Ctrl</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Skift</kbd> och mittenklick på anteckningens namn eller en mapp öppnar den i en ny flik, en delning eller ett fönster. Båda går att dra, som sina rader i Filutforskaren.
- **Dra anteckningar till raden för att flytta dem.** Släpp en anteckning, flera anteckningar eller en mapp på ett mappsegment eller på valvets namn.
- **Kommando: Fokusera sökvägsfältet**, med hela sökvägen markerad — inget snabbkommando som standard, bind ditt eget.
- **Skriv en URL** i sökvägsfältet: `http(s)://` och `obsidian://` öppnas som länkar, `file://` och procentkodade sökvägar öppnar filen.
- **Tabbkomplettering**, så som ett skal gör det: varje tryck kompletterar så långt mappens namn är överens och stannar där de skiljer sig. <kbd>Skift</kbd>+<kbd>Tabb</kbd> går tillbaka. När det inte finns något kvar att komplettera vidgar <kbd>Tabb</kbd> i stället markeringen: namn, namn med filändelse, sökväg från valvet, sökväg från systemets rot.
- **Listan öppnas där du är** och förhandsvisar det du pekar på i fältet; lämnar du listan får du tillbaka din text.
- **Flytta en anteckning ut ur valvet** efter en bekräftelse som räknar de länkar det kommer att bryta. Den kopieras ut och slängs sedan, så den kan återställas som vilken borttagen anteckning som helst.
- **Inställningen Visa filändelser**, och citerade sökvägar (så som Windows *Kopiera som sökväg* skapar dem) förstås nu.
- **Inställningarna dyker upp i Obsidians inställningssökning** på Obsidian 1.13 och senare.

### Ändrat

- **Långa sökvägar får plats i rutan.** Namn kortas med det minst användbara först — valvets namn, sedan filändelsen, sedan mappar, anteckningens eget namn sist — aldrig bortom den punkt där de går att skilja åt. Hovra över ett förkortat namn för att läsa det i sin helhet.
- **Klick på anteckningens namn markerar det utan filändelsen**, så att byta namn inte längre riskerar att ändra filtypen.
- **Namnbytestangenten öppnar på namnet utan filändelsen**, och fler tryck vidgar markeringen.
- **Klick på en mapp behåller resten av sökvägen synlig**, även utanför valvet.
- **Att bläddra tillbaka in i ditt valv öppnar filer som anteckningar**, med länkar och bakåtlänkar, snarare än i den externa visaren.

### Rättat

- **Menyetiketter var engelska på alla språk**; de kommer nu från Obsidians egna översättningar.
- **Namnbytestangenten körde fast i Obsidians namnbytesdialog** när anteckningen var rullad förbi sin titel.
- **<kbd>Esc</kbd> krävde två tryck** för att stänga fältet och dess lista.
- **<kbd>Ctrl</kbd>+<kbd>Retur</kbd> öppnade en länk i redigeraren** i stället för att verka på sökvägsfältet.
- **Namnbyte utanför valvet tappade det inskrivna namnet** när hänglåset trycktes.
- **Tabb kunde loopa utan att komma framåt** på en mapp som står bredvid sin egen mappanteckning.

## 1.0.4 — 2026-08-13[^1.0.4]

### Tillagt

- **Anteckningen du står på markeras i blått** i listan, så att bläddra tillbaka till dess mapp visar var du började.

## 1.0.3 — 2026-08-13[^1.0.3]

### Dokumentation

- README-filen länkar till tilläggets sida i gemenskapskatalogen, och de översatta README-filerna förs à jour.

## 1.0.2 — 2026-08-13[^1.0.2]

### Ändrat

- **Kräver Obsidian 1.8.7 eller senare** (var 1.4.0). Två funktioner som sökvägsfältet förlitar sig på — att kopiera filer och felverktygstipset under fältet — behöver det.
- **Nedladdningar av utgåvor bär signerat byggursprung**, så att du med `gh attestation verify` kan bekräfta att `main.js` byggdes från det här arkivet.

### Rättat

- **Att öppna en saknad extern fil i standardprogrammet misslyckades tyst**; felet rapporteras nu.

## 1.0.1 — 2026-08-13[^1.0.1]

### Rättat

- **I namnbytesläge kom en anteckning i konflikt med sig själv** — att bläddra tillbaka till dess egen mapp dolde dess namn från listan, som om den blockerade sitt eget namnbyte.
- **Det första mappvisandet efter start av Obsidian expanderade ingenting.**
- **Att välja en mapp ur listan kunde avsluta namnbytesläget** i stället för att stiga ned i den.
- **Externa ändringar kunde skrivas över tyst** av en annan skrivare, som Sync eller en andra ruta. Skrivningarna är nu atomära.
- **Återställningen av fokuskonturen läckte in i andra vyer**; den gäller nu bara rubrikrader som Lure har lappat.

### Dokumentation

- README-filen och användarguiden finns på alla 44 språk som tillägget levererar.
- Guiden nämnde Obsidians inställning *Detect all file extensions*, som nu heter *Visa alla filtyper*.

## 1.0.0 — 2026-08-10[^1.0.0]

Första utgåvan. Ersätter filnamnet i en anteckningens rubrikrad med en klickbar, redigerbar brödsmulesökväg över dess plats i valvet — ett adressfält för dina anteckningar, modellerat efter Dolphins.

### Tillagt

- **Klicka på en mapp** för en lista över den överordnade mappens innehåll, för att byta ut den mot ett syskon och lämna resten av sökvägen orörd.
- **Klicka på avskiljaren** efter en mapp för att visa och expandera den i Filutforskaren, eller för att öppna dess mappanteckning där Folder notes hanterar det.
- **Klicka på filnamnet eller på den tomma ytan** för att skriva en sökväg, med automatisk komplettering: `/` går nedåt, <kbd>Backsteg</kbd> går ut, <kbd>Retur</kbd> bekräftar.
- **Flytt-/namnbytesläge** växlar samma interaktioner till att flytta och byta namn, validerat så som Obsidian validerar.
- **<kbd>Ctrl</kbd> öppnar i en ny flik** — eller, i flytt-/namnbytesläge, kopierar anteckningen dit i stället.
- **<kbd>F2</kbd> växlar** mellan den infogade titeln och sökvägsfältet.
- **Utanför valvet** (avstängt som standard): valvets namn öppnar dina andra valv, hemmappen, filsystemets rot och monterade enheter. Ingenting där ute skrivs förrän du låser upp det, och en anteckning kan bara kopieras ut ur valvet, aldrig flyttas.
- **45 språk.**

[^unreleased]: Ändringar sedan 1.2.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.2.0...HEAD>
[^1.2.0]: Ändringar sedan 1.1.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.2...1.2.0>
[^1.1.2]: Ändringar sedan 1.1.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.1...1.1.2>
[^1.1.1]: Ändringar sedan 1.1.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.0...1.1.1>
[^1.1.0]: Ändringar sedan 1.0.4: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.4...1.1.0>
[^1.0.4]: Ändringar sedan 1.0.3: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.3...1.0.4>
[^1.0.3]: Ändringar sedan 1.0.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.2...1.0.3>
[^1.0.2]: Ändringar sedan 1.0.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.1...1.0.2>
[^1.0.1]: Ändringar sedan 1.0.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.0...1.0.1>
[^1.0.0]: Den första utgåvan: <https://github.com/Gelaende51/obsidian-lure/releases/tag/1.0.0>
