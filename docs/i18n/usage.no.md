<!-- Oversettelse av docs/usage.md — stand: commit 94b1372.
     Maskinoversatt (Claude Sonnet 5), ikke gjennomgått av personer med
     norsk som morsmål. Programtilleggets etiketter kommer fra
     src/lang/translations.ts og Obsidians fra tekstene applikasjonen
     selv leverer, så de stemmer med det du ser på skjermen. -->

[English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · [Čeština](usage.cs.md) · [Dansk](usage.da.md) · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · [Bahasa Indonesia](usage.id.md) · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · **Norsk** · [Polski](usage.pl.md) · [Português](usage.pt.md) · [Português (Brasil)](usage.pt-BR.md) · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

# Bruk

[← tilbake til README](README.no.md)

## Stien

Notatets fulle sti i hvelvet erstatter det nakne filnavnet i visningens overskriftslinje — linjen under faneraden som også rommer fram- og tilbakeknappene.

To ting på linjen kan klikkes, og **Mappenavnet åpner listen** avgjør hva som gjør hva:

| | Mappenavn | Skilletegnet etter det |
| --- | --- | --- |
| **På** (standard) | Velger den mappen for redigering | Åpner mappen |
| **Av** | Åpner mappen | Går ned i den mappen |

"Åpner mappen" betyr det et klikk på det segmentet gjør i Obsidian uten programtillegg. Uten et tillegg som lytter der, vises mappen i sidepanelet filutforskeren — uthevet og utvidet slik at innholdet synes.

Der mappens notat er det du allerede leser, viser klikket mappen i stedet — det er ingenting å åpne som ikke allerede er på skjermen, som er det andre trykket alltid har betydd.

Med [Folder notes](obsidian://show-plugin?id=folder-notes) installert åpner det samme klikket i stedet den mappens notat, **på hvilket dybdenivå som helst**: notatet slås opp her etter det tilleggets egen konvensjon i stedet for å bli overlatt til det å avgjøre. Det tillegget kjenner bare mapper det selv har merket, og på en sti mer enn én mappe dyp er det ingen av dem, så trykket som åpnet et notat for en mappe på toppnivå gjorde tidligere ingenting dypere nede. De to andre programtilleggene for mappenotater publiserer ingen konvensjon å lese og gjør aldri krav på raden, så med dem viser skilletegnet mappen som det alltid har gjort. Det er det ene programtillegget for mappenotater vi har funnet som gjør krav på overskriftsstien; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) og [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) håndterer mappenotater, men lytter ikke etter klikk på stien, så med dem viser skilletegnet mappen som vanlig. Se [kompatibilitet](../compatibility.md#verified-against).

Et skilletegn er **kun understreket når mappen foran det faktisk har et mappenotat**, så understrekingen er et løfte om at det er noe å åpne der — på alle dybdenivåer når [Folder notes](obsidian://show-plugin?id=folder-notes) kjører, siden notatet slås opp her i stedet for å overlates til det tillegget å markere. Der det ikke er det tillegget som kjører, er ingenting understreket og ingenting åpnes: skilletegnet viser, som det gjør uten noe programtillegg for mappenotater i det hele tatt. Hvert skilletegn forblir klikkbart uansett — et uten understreking viser og utvider mappen sin i sidepanelet, som pekerkursoren fortsatt signalerer. Understrekingen flyttes samtidig bort fra mappenavnet: med byttet på, åpner navnet listen, så å merke det som lenken til notatet ville vært en lygn.

**Gi nytt navn-/flyttemodus overstyrer begge**, uansett hva innstillingen sier: ingenting på linjen åpner en mappe mens en flytting venter, for å åpne en ville forlate flyttingen. Mappenavn velges for redigering og skilletegn går ned — begge er måter å peke ut målet på — og understrekingen forsvinner for å vise at åpning er satt på vent.

**Hvelvets rot** er det eneste segmentet som ikke er et stisegment. Det har ingen forelder å liste søsken fra, så i stedet åpner det [listen over steder](#å-bla-utenfor-hvelvet) — de andre hvelvene dine, hjemmemappen, filsystemets rot og monterte stasjoner.

## Hvelvets eget skilletegn

Skilletegnet like etter hvelvnavnet står for hvelvet selv i stedet for en mappe,
så det gjør noe ingen andre skilletegn kan:

| | Første klikk | Neste klikk |
| --- | --- | --- |
| **Med et programtillegg for startside** (en side som møter deg når Obsidian åpnes) | Åpner den siden i denne ruten | Slår sammen filtreet |
| **Uten et slikt** | Slår sammen filtreet | Setter tilbake nøyaktig det som var åpent |

Vanlige klikk, ikke dobbeltklikk: når siden først er åpen, har skilletegnet
ingenting mer å åpne, så neste trykk er sammenslåingen — uansett hvor lenge du
bruker på det.

Det er **understreket** når det finnes en startside å åpne, som er det samme
løftet et mappeskilletegn gir: noe finnes der. Sammenslåing er en av-/på-funksjon —
neste trykk gjenoppretter mappene som var åpne, og bare dem, så et tre
du hadde ordnet ikke går tapt ved et blikk på noe annet.

## En rute uten fil

En tom fane, grafen og alt annet som ikke navngir en fil får en egen
linje: hvelvet, så ett segment som sier hva ruten inneholder.

```
mitt-hvelv / :blank      en ny fane
mitt-hvelv / :graph      grafen, lokal eller global
mitt-hvelv / :<type>     alt annet uten fil
```

**Hvelvrotens egen liste** tilbyr også disse sidene, under mappene og
notatene som faktisk finnes i den: velg `:graph` eller `:search` der og ruten
åpner den visningen, akkurat som å velge et notat åpner notatet. Hvilke sider som
finnes leses fra Obsidian i stedet for å skrives ned her — hver visning som ikke
finnes for å vise en fil, så et programtillegg som registrerer en (en hjemmefane, en kalender)
dukker opp uten at dette programtillegget vet noe om det. Visninger som krever en fil —
Markdown, PDF, bilder, tavler, baser — tilbys ikke: det er ingenting for
dem å vise.

Kolonet er selve poenget — ingen fil eller mappe kan kalles `:graph`, så raden
kan ikke forveksles med en sti som kunne åpnes. Merkelappen kommer fra
visningstypen i stedet for fra Obsidians egen ordlyd, så den leses likt
uansett grensesnittspråk, og en etterhengende `-view` fjernes: et
programtillegg for hjemmefane registrerer sin visning som `home-launcher-view`, og raden
sier `:home-launcher`.

Å klikke på det tomme rommet, eller merkelappen selv, **åpner feltet ved hvelvroten**:
skriv en sti og <kbd>Enter</kbd> åpner den i nettopp denne ruten, med
samme fullføring, samme liste og samme røde felt som tilbyr å opprette
det som ikke finnes ennå. En tom fane er et godt sted å skrive hvor du vil,
som er det den er til for.

Merkelappen er en merkelapp og ingenting mer: ingen liste, ingen dra, ingen navnebytte. Ruter
i sidepanelene er helt urørte — en ru for tilbakelenker holder på tittelen
Obsidian gir den.

Tavler, PDF-er, bilder og baser trenger ingenting av dette. De er filer, så de
får en vanlig stilinje.

## Klikke på et segment: bytt det ut med et søsken

Et klikk på et mappenavn velger **den mappens navn** i et tekstfelt og åpner en liste over mappen **ett nivå opp** — forelderen. Å skrive eller velge en rad bytter denne mappen ut med et søsken og lar alt under den være urørt, så `Prosjekter/2026/Oppstart.md` → klikk `2026` → velg `2025` gir deg `Prosjekter/2025/Oppstart.md`.

Å klikke på **notatets navn** fungerer på samme måte mot sin egen mappe, og velger navnet **uten filendelsen** — å gi nytt navn er den vanlige redigeringen, og å skrive rett over en markering som inkluderte `.md` endret tidligere filtypen ved et uhell. Filendelsen forblir synlig ett tastetrykk unna: <kbd>→</kbd> når fram til den, og dobbeltklikket som utvider til hele raden tar alt.

Klikket på mappen har allerede valgt ett segment, så **ett klikk til** utvider merkingen til hele linjen — den mappen *og* alt under den — og det du skriver erstatter da resten av stien på én gang. Fungerer likt i navigasjons- og gi nytt navn-/flyttemodus.

Det gjelder bare som en fortsettelse av klikket som åpnet feltet. Når du først har brukt feltet, oppfører det seg som et hvilket som helst annet tekstfelt: klikk plasserer markøren, dobbeltklikk tar et ord, trippelklikk tar linjen.

Uansett hva forblir resten av stien synlig rundt feltet, som brikker foran det og som umerket tekst etter det, så hele stien forsvinner aldri fra overskriften. Skriv for å erstatte markeringen, eller trykk <kbd>→</kbd> for å behold den og redigere derfra. Listen viser hele mappen uansett hva som er forhåndsutfylt; den begynner først å filtrere når du faktisk skriver.

## Nedstigning via skilletegn

Et klikk på et skilletegn (med **Mappenavnet åpner listen** av) går ned i mappen foran det: listen viser *den* mappens innhold, og resten av stien åpnes merket i feltet. Å velge en mappe føyer den til stien og åpner straks neste liste, så du kan klikke deg nedover i et tre uten å forlate overskriftslinjen.

## Listen åpner der du er

Listen åpner på oppføringen du står i — notatet denne linjen tilhører,
eller, når et mappeklikk har listet forelderen, den mappen — i stedet for på den
første raden. I en mappe med to hundre notater er den første raden langt fra deg.

**Et hjulscroll over et navn åpner listen og går gjennom den.** Det første hakket åpner
den samme listen som å trykke navnet gjør, og hvert hakk etter det flytter markeringen
en rad, og setter det du peker på inn i feltet nøyaktig som piltastene gjør —
så et søsken kan finnes og velges uten tastaturet. Å scrolle forbi enten enden
gir teksten din tilbake. En rad med mer sti enn plass svarer på hjulet ved å
scrolle sidelengs i stedet, som er tolkningen som vinner mens den gjelder.

Listen er **så høy som vinduet tillater**. Obsidian setter en grense på 300 piksler for
sine forslagslister uansett hva som ligger under dem; denne går til bunnen av
vinduet, stopper noen piksler før kanten, og scroller først når mappen
inneholder mer enn det. Den er **ikke bredere enn stilinjen**: et navn som
ikke passer forkortes på samme måte som raden forkorter ett, og vises helt
når du peker på det.

Å bevege seg gjennom listen **setter det du peker på inn i feltet**, med piltast
eller ved å pekemarkere — i stedet for segmentet du redigerte, med
resten av stien stående urørt — så raden du er på også er stien du
ville fått.

Resten av stien vises **bare så langt den faktisk finnes under det du
peker på**. Stående i en mappe med `2026/notat.md` etter segmentet du
redigerer, vil å peke på en mappe som har en `2026` med en `notat.md` i den vise
alt av det; en som har `2026` uten notat viser `2026`; en som har ingen av delene
viser ingenting etter navnet i det hele tatt, og heller ikke en fil, siden ingenting ligger
under en fil. Det **du har skrevet** holder på hele stien sin mens du
skriver den, uansett hvor lite av den som finnes ennå — et halvskrevet navn er ikke en
avgjørelse. Å sette inn et navn er en avgjørelse, og det som ikke kan nås fra det
kuttes på det punktet; mappene du oppretter er de du skriver
*etter* det, som er der <kbd>Enter</kbd> oppretter dem.
Teksten du hadde skrevet blir bevart: å bevege seg **av enten enden av listen** —
opp forbi første oppføring, eller ned forbi den siste — slipper den og setter teksten din tilbake,
uten noe markert. Feltet er et stopp i ringen som en hvilken som helst oppføring, så en
runde går gjennom det i stedet for å hoppe fra siste til første rad, og
å trykke videre fra der fortsetter rundt til den andre enden.

Å ta **pekeren av listen** setter også teksten din tilbake — og gir
markeringen tilbake til det som hadde den før musen kom: oppføringen du hadde
gått til med piltast, som vises i feltet igjen, eller den listen åpnet på fordi det
er der du er. Å pekemarkere er en måte å se på snarere enn å velge, så en
sveip med pekeren over listen koster deg ingenting.

Listen selv endrer seg ikke mens du beveger deg gjennom den — den fortsetter å filtrere etter
det du har skrevet, ikke etter det som er forhåndsvist inn i feltet — så oppføringen
under deg flytter seg aldri unna neste trykk. Å skrive erstatter
forhåndsvisningen og filtrerer som vanlig.

**Det den filtrerer etter er segmentet du redigerer**, ikke alt i
feltet. Å klikke på en mappe lar resten av stien stå der bak navnet
du endrer, så å filtrere etter hele den ville sett etter et barn kalt
`2026/Oppstart.md` og funnet ingenting — listen ville lukket seg på ditt første
tastetrykk uansett hva du skrev. **Filendelsen er også utelatt**, så
lenge markøren står foran punktumet: å klikke på et notats navn velger
stammen og lar `.md` stå bak den, så å skrive én bokstav gjør at feltet leser
`a.md`, og det er ikke det du ser etter. Sett markøren forbi punktumet
og filendelsen telles som alt annet. Et navn som virkelig ikke matcher
noe lukker fortsatt listen, fordi en tom liste er det ærlige svaret.

En forhåndsvisning **bytter ut kun det ene segmentet og lar resten av stien være**:
å peke på en mappe spør hva om dette steget var det andre, ikke kast stien
bort. Å gå av listen gjenoppretter teksten *og* markeringen du hadde,
så neste tastetrykk erstatter det den skulle erstatte før du så deg om.

## Radene i listen er ekte filbehandlerrader

Hver fil og mappe i listen oppfører seg som sin rad i filutforskeren:

- **Høyreklikk** for samme hurtigmeny som filutforskeren gir, rad for rad — inkludert de andre programtillegg legger til. En mappe tilbyr *Nytt notat*, *Ny mappe*, *Ny tavle*, *Ny base*, *Lag en kopi*, *Flytt mappe til…*, *Søk i mappe*, *Kopier sti*, *Vis i systemets filutforsker*, *Gi nytt navn…* og *Slett*; en fil tilbyr sitt eget motstykke, inkludert *Åpne i standardprogram*.
- **Dra** en oppføring hvor som helst Obsidian tar imot en fil: inn i en redigeringsrute for å sette inn en lenke, på en mappe i filutforskeren for å flytte den, på fanelinjen for å åpne den.

Menytekstene kommer fra Obsidians egne oversettelser, så de stemmer med resten av programmet på alle språk.

## Å skrive en sti

- Å klikke på det **tomme rommet** før eller etter stien åpner et tekstfelt for hele stien *og viser notatet i filutforskeren*, slik at treet følger ruten uten en ekstra bevegelse. Det **teller trykkene dine**: ett velger stien uten filtype, to velger den med, tre velger stien slik maskinen kjenner den. Å klikke på **filens navn** telles på samme måte, men starter ett trinn lavere, på selve navnet: ett velger det uten filtype, to med, og tre utvider til hele stien *fra hvelvmappen din* — formen en lenke eller et søk vil ha, snarere enn maskinens. Et fjerde trykk når den.
- **Tellingen tilhører økten som åpnet feltet.** Når den har gått ut — du stanset, skrev, eller klikket én gang et sted i teksten — er feltet et vanlig tekstfelt, og et dobbeltklikk i det velger ordet under pekeren slik det ville gjort hvor som helst ellers. Skriv over det som er valgt, eller rediger på stedet. (Å klikke på selve filnavnet velger bare filnavnet; se ovenfor.) Høyreklikk på det samme rommet **kopierer** de samme tre, ved to, tre og fire trykk — den ene knappen viser dem, den andre henter dem. Et **enkelt** høyretrykk åpner stien med alt valgt og tilbyr det som kan gjøres med den: klipp ut, kopier, lim inn, velg alt, i Obsidians egne ord.
- **Midtklikk på det tomme rommet** for å lime inn over stien: feltet åpnes for hele stien *fra hvelvroten*, slik at utklippstavlen erstatter alt sammen, og det som havner der er valgt. <kbd>Enter</kbd> går så dit.
- **<kbd>Ctrl</kbd>+klikk på det tomme rommet** for å åpne dette notatet på nytt i en egen fane, som blinker i filutforskeren så den andre fanen ikke forveksles med den første. På **hvelvnavnet** åpner <kbd>Ctrl</kbd>+klikk eller midtklikk en fane uten innhold, stående i hvelvroten med listen allerede synlig — et sted å skrive en sti fra bunnen av.
- Å skrive mens en sti vises, gjør det siste segmentet om til et lite tekstfelt med sanntids autofullføring avgrenset til gjeldende mappe.
- **En sti fra filsystemets rot kan skrives.** `/` foran et tomt felt åpner én i stedet for å fullføre et trinn, hver skråstrek etter den tilhører den, og `~` er hjemmemappen din. Mens feltet inneholder en slik sti, viser listen maskinen i stedet for hvelvet, og radens innledende segment trer til side — det som står i feltet starter fra roten og sier det. Med *Tilgang til eksterne filer* av, står listen tom i stedet, fordi <kbd>Enter</kbd> uansett ville avvist stien.
- **En side kan skrives, ikke bare velges.** `:graph`, `:search`, eller hva enn tillegg dine registrerer — merkelappene [hvelvrotens liste](#en-rute-uten-fil) tilbyr. Å skrive kolon hvor som helst tilkaller dem, siden intet navn kan inneholde ett, og <kbd>Enter</kbd> åpner den visningen i denne ruten. `:graph` skrevet **inne i en mappe** åpner den mappens graf — grafen filtrert til `path:"the/folder"` i sin egen søkeboks, som om det var skrevet der; i hvelvroten er det hele grafen. <kbd>Tab</kbd> fullfører navnet slik det fullfører en mappes — og tar med seg alt annet feltet inneholdt, siden en side ikke ligger i noen mappe og ingenting ligger under en side. Å klikke på merkelappen på en slik side åpner feltet allerede med den inni.
- **Det <kbd>Tab</kbd> ville skrevet, tilbys mens du skriver.** Der hvert underelement som begynner med det du har skrevet fortsetter å være enig en stund, vises den enigheten etter markøren, valgt; der de slutter å være enige, gjør steget mot det første av dem det — eller mot raden du har pilet deg til, siden det er den <kbd>Tab</kbd> ville gått mot. Å skrive over et navn lar filtypen stå og tilbyr foran den, og en mappe man nettopp har trådt inn i tilbyr sitt første steg, så det finnes ingen tilstand der ingenting tilbys og <kbd>Tab</kbd> likevel skriver noe. Skriv de bokstavene, og det spises én om gangen; skriv noe annet, og det er borte. <kbd>Tab</kbd> eller <kbd>End</kbd> tar det helt, <kbd>→</kbd> tar én bokstav av det, <kbd>Backspace</kbd> tar det tilbake uten å røre en bokstav du skrev, og ingenting tilbys igjen før du skriver — så det finnes alltid en vei ut av et navn du ikke ville ha. Etter et trykk på <kbd>Tab</kbd> tilbys neste steg med det samme, som etter en skrevet bokstav. Det listen viser er filtrert av det **du** skrev, aldri av det som ble tilbudt.
- **Tilbudene ser bort fra store og små bokstaver.** `sch` tilbyr `Schemes`, stavet slik navnet er; å ta tilbudet tilbake gir deg bokstavene dine tilbake slik du skrev dem. Der både `Test` og `test` finnes, tilbys den som er stavet slik du skrev.
- I feltet er den tilbudte delen ganske enkelt **valgt**. Listen er der den skrives ut: hver rad viser delen som **stemte med det du skrev i fet skrift**, uansett hvor i navnet det stemte — `kick` finner `Weekly kickoff` og viser det. **Navn som begynner med det du skrev, kommer først**, foran dem som bare inneholder det, og er merket med en strek nedover kanten: **blå** der de deler mer enn det du skrev, slik at <kbd>Tab</kbd> har noe å legge til for dem alle, og **grønn** på den grenen tilbudet tar der de skiller lag — `te` med `test1`, `test2`, `text1` og `text2` tilbyr `te`+`st`, så de to `test`-radene er grønne mens de to `text`-radene beholder den vanlige streken. Hver av dem **understreker steget <kbd>Tab</kbd> ville tatt mot den**, ikke bare den som tilbys, og understrekingen følger tilbudet mens det endrer seg.
- **Å skrive slipper taket på den uthevede raden.** Listen åpnes på oppføringen du står i, men i det øyeblikket du skriver, handler det om et annet sted, og en utheving ingen satte der leses som et valg allerede tatt.
- Tilbudet er alltid bare tekst foran deg: bokstavene du skrev beholder stavemåten din mens du skriver, og å ta imot tilbudet skriver om navnet slik mappen staver det, fordi en sti må stemme med disken. `sk` + <kbd>Tab</kbd> når `Skyline`, ikke `skyline`.
- **Feltet har fargen til det det navngir**, samme farge som raden dets i listen: lilla for et notat, medregnet en mappes eget notat, oransje for alt som ikke er et notat, blått for notatet du er på. Raden det henter fargen fra er den som heter nøyaktig det du skrev, eller ellers den uthevede, eller ellers den første det du skriver fortsatt fører til.
- **Feltet blir rødt så snart ingenting svarer til det som står i det** — ingen fil, ingen mappe, og ingen rad i listen som fortsatt fører dit. Derfra lager <kbd>Enter</kbd> det som står i feltet i stedet for å åpne det, og den røde fargen sier det før du bekrefter. Den vises aldri for en nettadresse, som ikke er et sted på denne maskinen å lete etter. Det er **hele** feltet som farges, ikke bare den manglende delen: et tekstfelt kan ikke farge halvparten av sitt eget innhold. I gi nytt navn-/flyttemodus beholder feltet sin egen røde farge for et navn som er ulovlig — der er poenget nettopp et navn ingenting svarer til. At et navn **allerede er tatt** tas opp når du bekrefter det, med en dialog som spør hva som skal skje med filen i veien — se [Et navn som er tatt](#et-navn-som-er-opptatt): hvert navn skrevet mot `Notes.md` går gjennom navn som kan være egne filer, så å flagge det bokstav for bokstav ville varslet om et navn ingen hadde spurt om ennå.
- `/` bekrefter segmentet du skriver og går ned i det, og beholder alt som ligger bak det — det samme som <kbd>Tab</kbd> gjør når det trer inn.
- <kbd>Backspace</kbd> i et tomt felt trer tilbake ut til foreldremappen, og åpner igjen navnet dens med markøren på slutten. Det samme gjør <kbd>Backspace</kbd> foran en filtype som står alene — et felt som bare inneholder `.md` navngir ingenting — og den ensomme filtypen forsvinner med.
- **Å klikke på en mappe mens et felt er åpent, utvider det til hele stien etter den mappen**, med mappens eget navn valgt — det samme som å klikke på den ville gjort fra raden, og alt feltet inneholdt beholdes. Det som står i feltet er halen på raden mens det er åpent, så en mappe klikket lenger opp gir tilbake stien økten har vandret, snarere enn den notatet startet ved.
- **Å pile av gårde forbi begynnelsen av feltet henter mappen foran det inn.**, som om hele stien var én linje tekst. Med markøren helt i starten tar <kbd>←</kbd> den mappen inn i feltet og havner på slutten av navnet dens, <kbd>Ctrl</kbd>+<kbd>←</kbd> havner ved starten av det, og <kbd>Home</kbd> tar med seg hver mappe helt til hvelvroten — eller til stedet du valgte, utenfor hvelvet — på én gang. Hold <kbd>Shift</kbd>, og markeringen strekker seg over det som kom inn. På macOS er ordhoppet <kbd>Option</kbd>+<kbd>←</kbd> og <kbd>Cmd</kbd>+<kbd>←</kbd> er <kbd>Home</kbd>. Andre steder enn helt fremst er disse vanlige teksttaster. **Mens listen vises, tilhører <kbd>Home</kbd>, <kbd>End</kbd>, <kbd>PgUp</kbd> og <kbd>PgDn</kbd> den** — første rad, siste rad, en side opp, en side ned, en side være det listen viser, med den uthevede raden som beholder sin plass på skjermen — og når teksten først når den har lukket seg; <kbd>Shift</kbd>+<kbd>Home</kbd> tar med hver mappe også mens listen er åpen.
- **Listen følger markøren.** Velg ut en annen del av stien — dra over den, klikk inn i den, eller pil deg langs den — og listen viser barna til *den* mappen, ikke den feltet ble åpnet på. Mappen telles fra brikkene pluss det av feltet som ligger foran markøren, så å klikke inn i `Notes.md` i et felt som inneholder `2026/Notes.md` viser det som er i `2026`. Å peke på en rad skriver den inn i segmentet markøren står i, og å ta pekeren av listen gir deg teksten og markeringen din tilbake, nøyaktig slik de var.
- **Å dra en markering ut av feltet** og slippe et annet sted lukker det ikke. Et trykk som begynner i feltet tilhører redigeringen uansett hvor langt det beveger seg; bare et trykk som *begynner* utenfor er et klikk unna.
- <kbd>Enter</kbd> bekrefter — og når feltet ikke navngir noe som helst, som i en tom mappe der det aldri var noe å fullføre, sier det *Ingen fil valgt* og forblir åpent i stedet for å lukkes som om noe var valgt. <kbd>Esc</kbd> eller et klikk et annet sted avbryter tilbake til filens virkelige sti. Ett trykk på <kbd>Esc</kbd> er nok: det lukker listen, forlater feltet og gir fokus tilbake til notatet, i stedet for å kreve ett trykk per lag.

Feltet er helt uten staffasje — ingen boks, ingen kant — så det leses som selve stiteksten, og det vokser av seg selv mens du skriver.

## Hver del av raden, knapp for knapp

Hele raden på én gang. Høyreklikk-kolonnen viser hva **ett** trykk gir deg —
den knappen teller også trykk, og [sin egen
tabell](#høyreklikk-ett-trykk-to-trykk-tre) nedenfor har det andre,
tredje og fjerde. Denne antar at **Mappenavnet åpner listen** er på, som er
standard — med den av bytter mappenavnet og skilletegnet plass i den første
kolonnen, slik [tabellen øverst](#stien) sier.

| Hvor du trykker | Klikk | Dobbeltklikk | <kbd>Ctrl</kbd>+klikk, eller midtklikk | Høyreklikk | Slipp noe på den |
| --- | --- | --- | --- | --- | --- |
| **Hvelvnavnet** | Åpner listen over steder — andre hvelv, hjem, filsystemets rot, monterte stasjoner. Av som standard; med den av vises hvelvet i Filutforskeren i stedet | Markerer **hele den absolutte stien**. Denne listen åpnes med stien allerede i feltet og bare hvelvets egen del markert; et andre trykk utvider over resten. Ingenting å utvide med listen av | En fane uten innhold, stående ved hvelvroten med listen allerede synlig — et sted å skrive en sti fra bunnen av | Hvelvets egen kontekstmeny: hva som kan gjøres med hvelvet det segmentet navngir | En **fil** flyttes til hvelvroten. **Tekst** åpner feltet ved roten, for å navngi notatet den skal bli |
| Et **mappenavn** | Velger den mappen for redigering, med det overordnede innholdet listet under | Skriver om den mappen og alt under den | Åpner den mappen i en ny fane | Den mappens kontekstmeny — Filutforskerens egen | En **fil** flyttes inn i den mappen. **Tekst** åpner feltet der, for å navngi notatet den skal bli |
| Et **skilletegn** | Åpner mappen foran det — dens mappenotat der et mappenotat-tillegg kjører og ett finnes, ellers vises og utvides den i Filutforskeren | **Lager mappens notat** og går til det, der et mappenotat-tillegg kjører og mappen ennå ikke har noen. Der den allerede har ett, er dette bare det enkle trykket igjen | Mappenotatet i en ny fane der ett finnes; ellers en fane stående ved den mappen med listen synlig | Den samme kontekstmenyen navnet gir — dens mappenotats, der den har ett | Til slutten av den mappens notat, der den har ett, når du bekrefter |
| **Notatets navn** | Åpner navnet for redigering — mappene forblir som brikker ved siden av det — med alt unntatt filtypen markert | Tar filtypen med i markeringen også | Åpner notatet i en ny fane | Filens kontekstmeny — den samme Filutforskerens rad gir | Til slutten av dette notatet, når du bekrefter |
| Det **tomme rommet** | Åpner **hele stien** for redigering, markert frem til filtypen. Mappene kommer inn i feltet sammen med den, som er det som gjør dette til bevegelsen for å skrive om en sti fremfor et navn | Tar filtypen med i markeringen også | <kbd>Ctrl</kbd> åpner dette notatet igjen i en egen fane, blinket i Filutforskeren så kopien ikke forveksles med den første. Midtklikk er *ikke* den bevegelsen: det limer inn over stien | Markerer hele stien og tilbyr hva som kan gjøres med markert tekst | |

**Det andre trykket følger det første.** Å lage en mappes notat ligger på
den delen av raden som *åpner* den mappen, som er skilletegnet som standard og
mappenavnet med byttet av — det samme målet understreken markerer, og det
samme et enkelt trykk allerede ber om mappenotatet. Det tilbys bare mens et
mappenotat-tillegg kjører, siden et mappenotat er en konvensjon snarere enn en
kjensgjerning om filsystemet, og bare der mappen ennå ikke har noen. Hvor det
ligger og hva det heter, leses fra **Folder notes**' egne innstillinger, så et
hvelv som holder sine mappenotater ved siden av mappen, eller kaller dem
`_index`, får en av dem; selve filen er alltid Markdown, som er det det
tilleggets egen standard opprett-kommando lager og det det finner uansett
hvilken type hvelvet er satt til. Gi nytt navn-/flyttemodus er helt utenfor
dette — ingenting på raden åpner en mappe mens en flytting venter.

**Klikk på navnet fortsetter.** De fire trinnene er de samme fire
navnebytte-tasten går gjennom, i samme rekkefølge: navnet, navnet med
filtypen, stien fra hvelvet, stien fra systemroten. Så et tredje klikk når
hvelvstien og et fjerde maskinens — de samme fire tingene <kbd>Tab</kbd> forbi
enden av feltet gir deg, og de samme fire den høyre knappen *kopierer* i
stedet for å markere.

**Å peke** er sitt eget svar og endrer aldri noe: et forkortet navn kommer
tilbake i sin helhet så lenge du peker på det, og ikonet i starten av raden
sier hvor hvelvet ligger.

## Høyreklikk: ett trykk, to trykk, tre

Hvert mål på raden svarer på et høyreklikk, og hvor mange trykk du gir det avgjør hva du får. Fordi et andre trykk fortsatt kan komme, venter det første i omtrent et tredjedels sekund før det handler — prisen for å legge tre bevegelser på én knapp.

| Hvor du trykker | Én gang | To ganger | Tre ganger |
| --- | --- | --- | --- |
| **Hvelvnavnet** | Hvelvets kontekstmeny: hva som kan gjøres med hvelvet det segmentet navngir — inkludert *Åpne dette hvelvet*, der det hvelvet ikke er det du er i | Kopierer hvelvets navn | Kopierer hvor hvelvet ligger — og et fjerde trykk, hvor den åpne filen er |
| Et **skilletegn** | Den mappens meny — dens mappenotats, der et mappenotat-tillegg kjører og mappen har ett | | |
| Et **mappenavn** | Den mappens meny | Kopierer mappens navn | Kopierer det og alt til høyre for det |
| **Notatets navn** | Filens meny — den samme Filutforskerens rad gir | Kopierer navnet | Kopierer det med filtypen |
| Det **tomme rommet** | | Kopierer stien fra hvelvmappen din, uten filtypen | Det samme, med den |

Ett enkelt trykk på **hvelvnavnet** åpner hva som kan gjøres med det den
segmentet navngir. For **hvelvet du er i**: åpne det i et nytt vindu, behandle
hvelv, kopier hvor det ligger, kopier dets ID, vis det i filbehandleren din.
For **et annet hvelv**, nådd gjennom listen over steder, det samme minus det
nye vinduet — som ville åpnet *dette* hvelvet, ikke det — pluss den ene tingen
bare et hvelv du ikke er i kan tilby: **Åpne dette hvelvet**. Det navngis for
Obsidian etter sin ID snarere enn etter mappenavnet, siden to hvelv kan dele
ett. For et sted som ikke er et hvelv i det hele tatt — hjemmemappen din, en
montert stasjon — er det ingen ID å kopiere og ingenting å åpne, og menyen
sier det ved ikke å tilby dem.

Dette er ikke Obsidians egen trepunktsmeny, som hører til startvinduet og ikke
kan åpnes fra inne i et kjørende hvelv — dette er de samme oppføringene
gjenoppbygd, i Obsidians egen ordlyd, hentet fra kommandoene dens slik at de
kommer på ditt språk. Tre av den menyens oppføringer er bevisst **ikke** her:
*gi hvelv nytt navn*, *flytt hvelv* og *fjern fra listen* handler alle på
hvelvets egen mappe eller på Obsidians register over hvelv, og å gjøre det med
hvelvet du står i — med filene dets åpne og overvåkerne dets i gang — er slik
et hvelv blir ødelagt. Åpne hvelvbehandleren (*Åpne et annet hvelv*) og gjør
dem der, der hvelvet er lukket.

De to kopieringene på det **tomme rommet** er raden slik den er skrevet — hva
en lenke eller et søk vil ha — og de på **hvelvnavnet** er stiene filsystemet
kjenner, som er hva alt utenfor Obsidian vil ha. Hvert trykk der utvider hva
kopien er god for: to gir hvelvets navn, tre hvor hvelvet er, fire hvor den
åpne filen er. Obsidian trekker det samme skillet i sine egne to kommandoer,
*fra hvelvmappe* og *fra systemrot*; her ligger de utadvendte på segmentet som
selv er utenfor stien.

Alt dette virker utenfor hvelvet også, på de samme målene.

Hver kopiering sier fra i et varsel, fordi en kopiering ikke etterlater noe på
skjermen som viser at det skjedde, og et feiltalt trykk skal ikke se ut som et
vellykket ett.

## Modifikasjonstaster: åpne det et annet sted

Notatets navn og mappesegmentene oppfører seg som sine rader i Filutforskeren.

| | På notatets navn | På et mappesegment |
| --- | --- | --- |
| Vanlig klikk | Rediger navnet | Bla i den mappen |
| <kbd>Ctrl</kbd> / midtklikk | Åpne notatet i en ny fane | Send mappen til en ny fane |
| <kbd>Ctrl</kbd>+<kbd>Alt</kbd> | En deling | En deling |
| Dra | Notatet, hvor som helst Obsidian tar imot en fil | Mappen, det samme — fanelinjen inkludert |

En mappe er ikke noe Obsidian kan åpne, så å sende en til en fane gjør en av
to ting: åpner mappenotatet dens, der et mappenotat-tillegg kjører og det
finnes ett, eller åpner en tom fane hvis stilinje allerede står i den mappen —
og lar deg bare skrive navnet. Å slippe et mappesegment på **fanelinjen** gjør
det samme, i en ny fane der du slipper — Obsidians fanelinje tar bare imot
filer på egen hånd, så en mappe dratt ut av Filutforskeren blir fortsatt avvist
der.

## Tab: fullfør navnet, deretter stien, og utvid så utvalget

<kbd>Tab</kbd> fullfører slik et skall gjør det: **et trykk utvider det du har skrevet så langt navnene i den mappen er enige, og stopper der de er uenige.** Skriv `Sk` der bare `Sketches` starter slik, og ordet er ferdig; skriv `Al` der `Alpha-one`, `Alpha-two` og `Alpine` alle gjør det, og du får `Alp`, fordi det neste tegnet er et spørsmål bare du kan svare på.

Trykk igjen uten å skrive noe, og den beveger seg mot ett navn — raden listen har markert, eller den første — og stopper ved det navnets neste tvetydighet: `Alpha-`, deretter `Alpha-one`. Listen åpnes der du allerede er, så i din egen mappe går det første trykket mot notatet du har åpent, ikke mot det som sorteres først.

**Et trykk velger aldri mellom navn for deg.** <kbd>Tab</kbd> går inn i en mappe først når det du har skrevet etterlater én kandidat, eller når du har skrevet hele mappens navn og ingen *annen mappe* utvider det. Der én gjør det — `Schemes` ved siden av `Schemes2026` — fortsetter <kbd>Tab</kbd> å fullføre mot det lengre navnet; <kbd>Enter</kbd> og listen er gestene som betyr *denne her*.

En **fil** holder aldri igjen en mappe på den måten. En mappe ved siden av et notat med samme navn er et mappenotat, ikke en avstikker i stien, og <kbd>Tab</kbd> går inn i mapper — så `Projects` med en `Projects.md` ved siden av behandles som enhver annen mappe.

To mindre ting følger av dette: det som havner i feltet, staves slik mappen staver det, så `sk` blir `Sketches`; og bare navnet som skrives, blir erstattet, så en sti med mer til høyre for det, beholder det.

Med et navn tilbudt mens du skriver, **skriver <kbd>Tab</kbd> nøyaktig det tilbudte**: tilbudet er alltid det trykket ville skrevet, og understreken og den grønne linjen i listen sier det samme, så det du ser etter markøren, er det du får. Der navnene slutter å være enige, er det steget mot det første av dem — eller mot raden du har pilet deg til, som <kbd>Tab</kbd> tar i stedet for den ved siden av — så pil deg til den du vil ha, eller skriv forbi forgreiningen, før du trykker. Bare der tilbudet etterlater *ett* navn, går det samme trykket inn i det.

Å ankomme filens navn **er** det første trinnet — ikke noe trykk brukes bare på å plassere markøren på slutten av et navn det er i ferd med å markere. Derfra slutter trykkene å bevege seg langs stien og begynner å utvide det som er markert:

1. navnet
2. navnet med filtypen
3. stien fra hvelvmappen din
4. stien fra systemroten
5. tilbake til fronten av stien **slik den nå står** — stående der vandringen begynte, med det første segmentet markert, klar til å vandres igjen

Et fjerde klikk når det samme fjerde trinnet direkte.

Å utvide gjør bare **utvide**. Et navn som allerede er helt i feltet — fullført med samme tast, eller valgt fra listen — markeres helt i stedet for at filtypen først tas bort igjen: det første trinnet er for et navn vandringen nettopp har *ankommet*, der filtypen ennå ikke er temaet.

Stigen er der vandringen **ankommer**, ikke der den starter. Klikk en mappe midt i en sti, og feltet åpnes med alt under den, med mappens navn markert; hvert <kbd>Tab</kbd> tar da **én** mappe — markerer den neste, og beholder resten av stien bak den — og først når bare filnavnet er igjen, begynner utvidelsen:

| trykk | brødsmuler | felt | markert |
| --- | --- | --- | --- |
| klikket `a` | | `a/b/c/leaf.md` | `a` |
| <kbd>Tab</kbd> | `a` | `b/c/leaf.md` | `b` |
| <kbd>Tab</kbd> | `a › b` | `c/leaf.md` | `c` |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf` — det første trinnet |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf.md` |

**Et navn som er satt inn, er satt inn, uansett hvordan du satte det inn.** Å fullføre det med <kbd>Tab</kbd>, bekrefte det med `/`, og velge det fra listen, etterlater alle raden på samme sted med samme sti, så trykket etter gesten betyr det samme uansett hvordan du kom dit. Å velge en mappe fra listen pleide i stedet å tømme feltet, og kastet bort en sti som det å nå samme mappe med <kbd>Tab</kbd> ville ha beholdt.

**En sti du fortsatt skriver, blir med hel og holden.** Å tre inn i selve mappen resten av stien henger fra, er ikke en påstand om at resten finnes — det er slik en sti skrives i forkant av seg selv, og mappene den nevner, er de <kbd>Enter</kbd> er i ferd med å lage. Så å vandre ned `Dokumente/plans/untitled.md` inn i `Dokumente` beholder `plans/untitled.md` foran deg, enten `plans` finnes ennå eller ei. Det samme gjelder en sti du skrev fra bunnen av: ingenting av den var arvet fra noe sted, så ingenting av den tas bort.

**Å bytte ut ett steg med et annet er en annen sak, og da blir stien bare med så langt den faktisk finnes der.** Bytt ut en mappe midt i en sti med et søsken — klikk `a`, skriv et annet navn, trykk <kbd>Tab</kbd> — og alt under den blir med deg, fordi stien du var på, som regel er mesteparten av stien du vil ha. Bare det som finnes der borte, overlever flyttingen, likevel, så feltet og listen ved siden av det aldri er uenige: det som er igjen foran deg, er en sti du faktisk kan vandre. Starter du fra `a/b/c/leaf.md`, med `a` klikket og navnet markert:

| det du setter inn | brødsmuler | felt | markert |
| --- | --- | --- | --- |
| `x`, som ikke har noen `b` i det hele tatt | `x` | | ingenting ble med |
| `y`, som har en `b` men ingen `c` i den | `y` | `b` | `b` |
| `z`, en tvilling av `a` helt til bunns | `z` | `b/c/leaf.md` | `b` |

En mappe som blir stående alene på den måten, er fortsatt en mappe å gå inn i: trykket etter går inn, i stedet for å begynne å utvide et utvalg over navnet.

Et navn **ingenting** i mappen svarer til, besvares annerledes, fordi ingenting er satt inn av det: trykket markerer det du skrev, klart for at du skriver over det, i stedet for å svare med et annet sted.

Det hele er en **løkke, og det koster ingenting å gå rundt den**: trykket etter det siste trinnet gir raden tilbake til fronten av stien, mapper og alt, klar til å gå rundt igjen. Det eneste som noensinne forlater raden, er det absolutte prefikset, ved trykket som slutter å vise det.

Det som kommer tilbake, er **stien du bygde**, ikke den du dro ut fra. Del vandringen på midten — velg et annet søsken fra listen, fullfør mot et annet navn — og runden lukkes der du faktisk er; de fire trinnene før den beskriver den samme stien, og dette var trinnet som pleide å beskrive fortiden.

<kbd>Shift</kbd>+<kbd>Tab</kbd> lukker den samme ringen andre veien: ved fronten av stien, uten noe mer å gi tilbake og ingenting lenger opp, hopper neste trykk til det **fjerneste** trinnet — stien fra systemroten — og fortsetter å snevre inn derfra. Ingen av retningene ender blindt.

Den bruker heller ikke noe trykk på et trinn den allerede har vist. Under det siste trinnet — navnet uten filtypen — er stigen over, og *det samme trykket* forlater mappen: stien fra systemroten, stien fra hvelvet ditt, navnet, navnet uten filtypen, deretter mappen, ett steg om gangen.

Det brukes heller ikke noe trykk på et trinn som ikke endrer noe: å klikke på et notats navn viser det allerede uten filtypen, som er det det første trinnet viser, så derfra starter <kbd>Tab</kbd> på det andre.

Hvert trinn endrer det som er *i* feltet, ikke bare det som er uthevet — et utvalg må være over teksten det navngir, ellers ville <kbd>Enter</kbd> bekrefte noe annet enn det du ser er markert. Stigen tilhører én redigeringsøkt: klikk bort, eller skriv hva som helst, og neste <kbd>Tab</kbd> fullfører et navn igjen.

### <kbd>Shift</kbd>+<kbd>Tab</kbd>: samme vei bakover

<kbd>Shift</kbd>+<kbd>Tab</kbd> tar tilbake ett steg per trykk, i den rekkefølgen trykkene ble gjort: utvalget snevres inn ett trinn om gangen, hver fullføring gis tilbake, og hver mappe forlates — navnet dens kommer tilbake i feltet, slik at du kan redigere det i stedet for å skrive det på nytt.

**Ingenting slettes på veien tilbake.** En fullføring gis tilbake ved at tegnene den la til, *markeres*, nøyaktig som å gå fremover markerer det den har utvidet over — navnet blir stående foran deg, og hvert nye trykk markerer ett steg mer av det:

| | felt | markert |
| --- | --- | --- |
| vandret inn | `Alpha-one` | |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `ha-one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `Alpha-one` |

Å skrive erstatter den markerte delen, som overalt ellers. <kbd>Tab</kbd> setter tilbake nøyaktig det markeringen ga tilbake, så å vandre to steg ut og to steg inn igjen bringer deg dit du var.

Når hele navnet er markert, er det ingenting igjen som et trykk plasserte der, og neste trykk går *opp stien*: det forlater mappen du står i, nøyaktig som <kbd>Backspace</kbd> i et tomt felt gjør. Det koster heller ingenting — mappens navn kommer tilbake i feltet **foran** det som var i det, markert, som er den samme teksten det å klikke den mappen ville gitt deg. Tilbake er en retning snarere enn en angrehistorikk — men å markere navnet først betyr at ett trykk aldri både tar tilbake det du skrev, og fører deg ut av mappen du skrev det i.

Tekst som åpnes **allerede markert** — det et mappeklikk etterlater seg — er navnet <kbd>Tab</kbd> jobber videre på: det fullføres og gås inn i som alt annet, og å skrive erstatter det. Bare fokuskommandoen åpnes på et trinn i stigen selv, fordi den viser deg hele stien i stedet for en mappe å vandre inn i.

## Å skrive noe som ikke er en sti

| Det du skriver | Hva som skjer |
| --- | --- |
| `https://…` | Åpnes i en ny fane i Obsidians **Nettleser**, hvis du har det kjerne-tillegget slått på; ellers i din vanlige nettleser |
| `obsidian://…` | Overlates til Obsidians egen URI-behandler |
| `file:///…` | Dekodes og åpnes: som et ekte notat hvis det er inne i hvelvet ditt, i visningen hvis ikke |
| `/home/du/a%20b.md` | Det samme, for en sti limt inn fra en nettleser eller filbehandler |

Bare eksplisitte skjemaer teller — et notat kalt `100%20` er fortsatt et notat. En `/` som tilhører et skjema, forblir bokstavelig i stedet for å gå ned i en mappe, så en URL kan skrives for hånd og ikke bare limes inn.

## En kommando for tastaturet

**Fokuser på stilinjen** åpner feltet på notatets navn og vandrer det slik <kbd>F2</kbd> gjør — navnet, navnet med filtypen, stien fra hvelvet ditt, stien fra systemroten — og trykket etter det lukker feltet og setter markøren tilbake i notatet. Den gir ikke nytt navn: Enter navigerer, som i ethvert annet felt. Den har ingen tast av seg selv fra starten, fordi Obsidians retningslinjer frarår at tillegg tar over en tast; **Hurtigtaster**-raden på slutten av dette tilleggets innstillinger åpner *Innstillinger → Hurtigtaster* med bare tilleggets egne kommandoer vist, så du kan binde den der.

## Navigering rører aldri den åpne filen

I standardmodus (navigering) får det åpne notatet **aldri** nytt navn og blir aldri flyttet.

- En sti som fører til en eksisterende fil, åpner den.
- En sti som ikke finnes ennå, opprettes rett og slett, sammen med eventuelle manglende foreldremapper, og åpnes. Hver fil og mappe som lages på denne måten, sies det ifra om i en melding — en ny mappe er ellers usynlig til du leter etter den — og Obsidians eget papirkurv gjør en uønsket en til et tastetrykk å angre.
- **Utenfor hvelvet ditt spør den fortsatt først.** Der ute skriver den samme skrivefeilen inn i en systemmappe, der verken meldingen eller Obsidians papirkurv er til mye trøst.

## <kbd>Ctrl</kbd> — ny fane, og kopier i stedet for å flytte

Et notat som **opprettes, flyttes eller kopieres inne i hvelvet, vises der det havnet** i filutforskeren, markert et øyeblikk i Obsidians aksentfarge — treet er der du leter etter det etterpå, så det legges foran deg i stedet for å bli liggende igjen i en mappe som kanskje ikke engang er åpen. Duplisering sier ifra på samme måte: en kopi lar originalen bli der den var, og åpner kopien i sin egen rute, noe som uten et ord er lett å lese som at ingenting har skjedd.

Å holde <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> på macOS) mens du velger en fil fra listen, eller mens du trykker <kbd>Enter</kbd> på en sti, sender resultatet til en **ny fane** i stedet for til denne:

| | Uten tast | Med <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Velg eller skriv en eksisterende fil | Åpnes her | Åpnes i en ny fane |
| Skriv en sti som ikke finnes | Spør, åpner deretter her | Spør, åpner deretter i en ny fane |
| Bekreft en sti i gi nytt navn-/flyttemodus | **Flytter** notatet dit | **Kopierer** det dit og åpner kopien i en ny fane |

Tasten leses med Obsidians egen regel, så den oppfører seg nøyaktig som på en lenke eller en rad i filutforskeren — midtklikk betyr også "ny fane", <kbd>Ctrl</kbd>+<kbd>Alt</kbd> betyr en deling, og <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> et nytt vindu.

Å kopiere nekter å overskrive, nøyaktig som å flytte gjør — også til notatets egen sti, der det ikke er noe fornuftig å kopiere. Utenfor hvelvet sies dette avslaget også ifra om.

Alt dette fungerer **med listen oppe** like godt som uten den: på en uthevet rad gjelder tasten den raden, og når ingenting er uthevet, gjelder den det du har skrevet.

## Å bla utenfor hvelvet

**Dette er av som standard.** Slå først på **Tilgang til eksterne filer** i innstillingene — å lese og skrive utenfor hvelvet er det eneste dette programtillegget gjør som Obsidian selv ikke gjør, så man velger det på framfor av. Med det av viser hvelvnavnet ganske enkelt hvelvet ditt i filutforskeren, og ingenting her ser noen gang forbi det.

Å klikke på **hvelvets navn** (eller 🏠-ikonet, når *Vis hvelvets navn* er av) åpner en liste med steder framfor innhold. Feltet som åpnes inneholder **hele stien du var på, skrevet ut i sin helhet**, med stedet den begynner ved markert — så å velge et annet sted, eller å skrive over det markerte, bytter bare ut den ledende delen og lar resten av stien bli stående foran deg. **Trykk på navnet en gang til** — et dobbeltklikk — og markeringen utvides over hele det, som er hvordan den absolutte stien tas i én handling framfor å strykes over for hånd. Ombestemmer du deg, setter <kbd>Esc</kbd> linjen tilbake slik den var.

Å skrive her tilbys resten av et steds navn som overalt ellers, og <kbd>Tab</kbd> **setter det stedet inn** — det du peker på, eller det navnet bare kan bety. Der flere steder fortsatt deler det du har skrevet, stopper trykket ved forgreiningen, som overalt ellers. Å peke på et sted viser **stedets egen sti**, hele den markert, etterfulgt av notatets sti bare så langt den faktisk går der borte — som er akkurat det å velge det ville landet deg på. Et sted er ikke et steg inne i stien på skjermen, men et sted å telle hele stien fra, så ingenting av hvor du var blir stående foran det.

Stedene som tilbys:

- **De andre hvelvene dine**, lest fra Obsidians eget register, sist åpnede først, hvert under Obsidians eget hvelvikon — det applikasjonen selv bruker til hvelvkommandoer. Hvelvet du allerede har åpent får et hus i stedet: det er der linjen begynner som standard, ikke et sted å dra.
- **Hjemmemappen**, under sitt eget kontonavn, merket med en `~`. Lucide har ingen tilde, så denne tegnes av tillegget på Lucides eget 24×24-rutenett med samme strek — et ikon settet mangler framfor et skrifttegn blant ikoner.
- **Filsystemets rot**, merket `root` — uoversatt, for det heter det på ethvert system — framfor `/`, som ville leses som et tomt steg ved siden av skilletegnet som følger.
- **Monterte stasjoner**, med et ikon per type der det er billig å avgjøre: nettverksressurser, optiske plater, disketter og flyttbare medier får sine egne; alt annet får en generisk stasjon. På Windows vises stasjoner som `C:` med et generisk ikon — volumnavn og presise typer krever WMI, noe som bevisst ikke gjøres.

Å velge et annet hvelv **bytter ikke Obsidian over til det.** Alt du har åpent forblir åpent; stilinjen begynner bare å bla der. Det er hele poenget med å ha det på stilinjen framfor å overlate det til sidepanelets hvelvbytter.

Det lander også **så nært notatet du er på som det stedet faktisk går**.

- Hvis stedet du valgte *inneholder* notatet — hjemmemappen, eller der hvelvene dine bor — får du stien dens derfra: velg `~` med `takeaways.md` åpent, og feltet leser `Vaults/hvelvet-ditt/takeaways.md`.
- Hvis det er et sted ved siden av dette — et annet hvelv, en annen stasjon — forsøkes den samme relative stien, så dypt den faktisk finnes. Hvelv er ofte nesten-kopier av hverandre, og grunnen til å hoppe til et er som regel det samme notatet der borte.

Uansett blir linjen stående på stedet du valgte, og **den første mappen i den stien åpnes markert**, den samme formen å klikke på en mappe gir: steget du mest sannsynlig vil endre når du hopper et annet sted, er det nærmest toppen, og resten av stien forblir synlig mens du endrer det. Ingenting fylles noen gang inn på forhånd som ikke faktisk finnes på disken.

### Mens du er utenfor

Stien **begynner ved stedet du valgte**, ikke ved maskinens mappestruktur — og det gjør også feltet du får ved å klikke på det tomme rommet eller trykke fokustasten: det inneholder stien fra det stedet, ikke maskinens absolutte, med sporet trukket sammen til selve stedet akkurat slik det trekkes sammen til hvelvroten der inne — velg `Arkiv`, og linjen leser `Arkiv / notater / …`, ikke `/home/deg/Vaults/Arkiv/notater/…`. Det ledende segmentet bærer et ikon for hva det er (hvelv, hjemmemappe, stasjon), og <kbd>Backspace</kbd> stopper der framfor å gå videre opp i resten av filsystemet. Med *Vis hvelvets navn* av er det segmentet ikonet alene — innstillingen gjelder linjens åpnende segment uansett hvilket hvelv det navngir, ikke bare ditt eget.

Stilinjen er **innrammet i feilfargen** — den samme ringen navnebyttemodus tegner — så lenge den peker utenfor hvelvet ditt. Den markerer en vedvarende tilstand, ikke et øyeblikk: så lenge den er der, gjelder ingen av Obsidians egne håndteringer det linjen viser, og skriving er låst til du sier noe annet.

Blaingen fungerer ellers som der inne: brikker, skilletegn, skriving, autofullføring, <kbd>Backspace</kbd> for å tre ut. De samme synlighetsreglene gjelder også, så filendelser som ikke støttes krever fortsatt Obsidians *Detect all file extensions*, og skjulte filer krever fortsatt dette tilleggets innstilling.

**Høyreklikk fungerer der ute også**, selv om det er en annen meny: filutforskerens egne behandlere trenger en fil hvelvet kjenner til, så oppføringer utenfor bygges fra stien i stedet. De tilbyr å åpne (her, til høyre, i et nytt vindu, eller i skrivebordets standardprogram), *Kopier sti*, *Vis i systemutforsker*, og — når hengelåsen er åpen — *Nytt notat*, *Ny mappe*, *Lag en kopi*, *Gi nytt navn …* og *Slett*. **Å dra** krever fortsatt en hvelvfil og forblir utilgjengelig.

Den samme menyen finnes på den åpne filen i viseren, ved høyreklikk eller fra rutens egne tre prikker, og den spør hengelåsen i den visningens overskrift. Den spør om ingenting annet: om filen blir gjengitt eller vist som kilde har ingen betydning for om den kan slettes, og et bilde eller en PDF — som ikke har noen kildevisning i det hele tatt — kan slettes like lett som et notat. *Slett* betyr skrivebordets papirkurv, så det kan angres derfra; et system uten papirkurv melder det i stedet for å ødelegge filen.

Å slette utenfor hvelvet flytter filen til **systemets papirkurv** — Papirkurven på Windows, Trash på macOS — aldri en direkte fjerning. Her ute finnes ingen Obsidian-papirkurv å gjenopprette fra, så en sletting som ikke kunne angres, tilbys ikke i det hele tatt: der en plattform mangler papirkurv, melder forsøket feilen i stedet.

### Å skrive utenfor hvelvet

Alt som skriver er **låst som standard**. Så lenge linjen peker utenfor hvelvet ditt, tar en **rød hengelås** plassen navnebyttebryteren har i overskriften — samme farge som ringen rundt linjen, og av samme grunn: den markerer en avvisning. De to er én kontroll i én plass, så det er aldri tvil om hvilken av dem som styrer hva.

Tre trykk, i en syklus:

| Trykk | Hva du får |
| --- | --- |
| Den røde hengelåsen | Skriving her er tillatt. Hengelåsen erstattes av gi nytt navn-/flytte-bryteren |
| Bryteren | Gi nytt navn-/flyttemodus, akkurat som inne i hvelvet |
| Bryteren igjen | Modusen avsluttes og hengelåsen lukkes igjen — tillatelsen overlever ikke det den ble åpnet for |

**Navnebyttetasten spør også hengelåsen.** Utenfor hvelvet ditt får et trykk på den
hengelåsen til å blinke opp og igjen framfor å åpne en modus enhver bekreftelse
ville avvist: avvisningen kommer før arbeidet framfor etter. Trykk hengelåsen,
eller trykk navnebyttetasten igjen innen et halvt sekund — det andre trykket gir
akkurat det knappen gir, for dette stedet, og åpner navnebyttemodus med det.

Inne i hvelvet ditt finnes ingen hengelås: det er ingenting å låse opp, og bryteren har rett og slett plassen.

Tillatelsen gis **til et sted, ikke til et øyeblikk**: den overlever alt du skulle gjøre mens du arbeider ett sted — å fullføre en flytting, klikke bort fra feltet, åpne en fil — og opphører når du velger et annet hvelv, en annen stasjon eller rot fra listen, når linjen vender tilbake til en hvelvfil, eller ved det tredje trykket. Så en rekke flyttinger inne i én mappe krever ett trykk, ikke ett per fil.

Med hengelåsen åpen oppfører stilinjen seg der ute som den gjør der inne:

| Handling | Resultat |
| --- | --- |
| Skriv et navn som ikke finnes, <kbd>Enter</kbd> | Samme "opprette den?"-spørsmål som der inne; mapper som mangler opprettes også. Et navn uten filendelse blir en `.md`, akkurat som der inne |
| Gi nytt navn-/flyttemodus, skriv et nytt navn | Gir filen linjen viser nytt navn. Et navn uten filendelse beholder filens egen — her ute rommer en mappe alle slags filer, og et navnebytte skal ikke stille om en `.png` til en `.md` i det stille |
| Gi nytt navn-/flyttemodus, bla videre, velg **behold dette navnet** | Flytter den dit under navnet den allerede har |
| Hold <kbd>Ctrl</kbd> på en av dem | Kopierer i stedet for å flytte, og åpner kopien i en ny fane |

Låst melder alle disse hva som blokkerer dem i stedet for å skje. Ingenting blir noen gang overskrevet i noen av tilstandene: et mål som allerede finnes avvises, og avvisningen er filsystemets egen (`COPYFILE_EXCL`, en eksklusiv opprettelse) framfor en sjekk som kunne tape et kappløp. En flytting på tvers av filsystemer — fra en USB-pinne, fra en nettverksressurs — faller tilbake på kopier-så-slett, og originalen fjernes først når kopien har landet.

**Å flytte et notat *ut av* hvelvet ditt spør først.** `fileManager` kan ikke følge en fil over den grensen: enhver lenke som peker på notatet slutter å løses opp, ingenting oppdaterer dem, og notatet forlater hvelvets register. Så flyttingen tilbys som en beslutning framfor å avvises eller gjøres i det stille — en dialog sier hva det koster og hvor mange notater som lenker til det du flytter. Bekreft, og den flyttes faktisk: kopiert ut, deretter fjernet fra hvelvet gjennom Obsidians egen sletting, så den kan gjenopprettes akkurat som et slettet notat, og en feil i noen av trinnene lar notatet bli der det var. Å holde <kbd>Ctrl</kbd> kopierer den fortsatt ut i stedet, noe som ikke har det problemet. Å gå den andre veien — å bringe en ekstern fil *inn i* hvelvet — er ikke koblet opp ennå.

### Å åpne en ekstern fil

Å bla i filsystemet kan gå tilbake **inn i hvelvet du har åpent** — fra roten, fra hjemmemappen, fra der hvelvene dine bor. En fil nådd på den måten er et vanlig notat, så den åpnes som ett: den ekte redigereren, lenker og tilbakelenker, og linjen smetter tilbake til den hvelvforankrede stien. Bare filer Obsidian ikke har noen visning for blir værende i forhåndsvisningen, siden forhåndsvisningen er det bedre svaret der ute. Der en forhåndsvisning uansett viser et slikt notat — et gjenåpnet arbeidsområde, for eksempel — tilbyr toppelinjen **Åpne i *(hvelv)***, som er det samme tilbudet gitt for hånd.

Obsidians redigerer fungerer bare på filer inne i hvelvet, så en ekstern fil **kan ikke** åpnes som et ekte notat med lenker, tilbakelenker og resten — det er en begrensning i programmet, ikke i dette tillegget. Å velge en åpner i stedet en **forhåndsvisning**, skrivebeskyttet til du sier noe annet:

| Type | Vises som |
| --- | --- |
| `.md`, `.markdown` | Gjengitt Markdown |
| `.html`, `.htm`, `.xhtml` | Den gjengitte siden |
| Bilder, lyd, video, PDF | Innebygget spiller/viser |
| Enhver annen **tekst**fil (`.json`, `.css`, `.log`, `.txt`, …) | Ren tekst, ordrett |
| Binærformater uten viser (`.zip`, `.exe`, …) | Overlatt til *Åpne i standardprogram* |

Viseren har to lesninger av en fil, og siden de utelukker hverandre vises bare den du ville byttet **til**:

| | Hva den gjør | Standard for |
| --- | --- | --- |
| **Vis som Markdown** | Gjengir filen som et notat, skrivebeskyttet | `.md`, `.markdown` |
| **Vis som side** | Gjengir filen som den siden den er, skrivebeskyttet | `.html`, `.htm`, `.xhtml` |
| **Rediger som tekst** | Kilden, redigerbar | alt annet |

Utenfor hvelvet er **Rediger som tekst** også trykket som opphever skrivebeskyttelsen — modusen og tillatelsen er én handling framfor to knapper å holde styr på. Den er rødtonet **hver gang et trykk ville opphevet skrivebeskyttelsen**, enten du klargjør redigering på stedet eller kommer rett fra den gjengitte visningen; inne i hvelvet er det ingenting å låse opp, så der er den vanlig. **Vis som Markdown** får et lett aksentfarget skjær — den samme tonen Obsidian gir merket tekst — som merker den som veien tilbake framfor en oppfordring.

Fordi knappen følger *redigeringen* framfor den rå modusen, tilbyr en fil som ligger skrivebeskyttet i tekstvisningen fortsatt **Rediger som tekst**: det er trykket som klargjør den. En fil som aldri kan skrives i — forkortet eller uleselig — sier **Vis som tekst** i stedet, siden det er alt trykket kan levere.

Standardene vender den nyttige veien framfor den bokstavelige: en `#` i et skallskript er en kommentar, ikke en overskrift, så å gjengi en `.log` som Markdown ville svelge den i det stille. Begge standardene kan overstyres per fil, og valget går inn i fanens historikk, så fram/tilbake og et gjenåpnet arbeidsområde beholder det — mange notater bor i `.txt`-filer, og mange `.md`-filer er lettere å lese som kilde.

#### Hva en HTML-side har lov til å gjøre

Ingenting. Siden vises i en ramme med **enhver tillatelse tilbakeholdt** — ingen
skript, ingen skjemaer, ingen navigering, ingen egen opprinnelse — og en
innholdspolicy som ikke tillater noe nettverk i det hele tatt. Det er ikke
forsiktighet for sin egen skyld: en lokal side lastet på vanlig vis ville delt
dette vinduets opprinnelse, og dette vinduet er Obsidian, så et skript i en
nedlastet HTML-fil ville kjørt inne i programmet ditt med programmets rekkevidde.

Det dette koster er alt siden *gjør*; det det beholder er alt siden *er*.
Stilarkene og bildene som ligger ved siden av filen leses inn og bæres inn i
rammen, så en lagret side ser fortsatt ut som seg selv. Referanser som peker ut
av sidens egen mappe, og referanser til et sted på nettet, blir stående akkurat
som skrevet og laster rett og slett ikke — en lokal fil kan ikke stille fortelle
en server at du åpnet den.

Skript blir **fjernet** framfor bare blokkert, slik at siden du ser og kilden du
kan bytte til, skiller seg på én oppgitt måte framfor på hva enn rammen i
stillhet lot være å kjøre. Lenker inne i siden gjør ingenting. Når du vil ha det
ekte — skript, nettverk og alt — overlater *Åpne i standardprogram* den til
nettleseren din, som er riktig verktøy for det.

**Filer i hvelvet ditt kan redigeres med en gang**, uten opplåsing: *Rediger som tekst* er en ekte redigerer og skriver tilbake mens du skriver.

**Redigeringen huskes over byttet.** Å gå til *Vis som Markdown* setter den på vent — en statisk gjengivelse har ingenting å skrive i, og Live Preview trenger Obsidians egen redigerer, som bare finnes for filer inne i hvelvet — så ingenting påstår at du redigerer mens du er der. Å gå tilbake til *Rediger som tekst* tar opp igjen der du slapp.

**Filer utenfor hvelvet åpnes skrivebeskyttet, og *Rediger som tekst* opphever det.** Trykket er hele porten: til det skjer, skrives ingenting der ute. Etterpå lagres filen mens du skriver, akkurat som en i hvelvet; og statuslinjen bytter fra en lås til en blyant. Opplåsingen dekker den ene filen i den ene fanen — å navigere til en annen fil låser igjen, og den lagres bevisst ikke i fanens historikk, så et gjenåpnet arbeidsområde kommer aldri tilbake med skriving allerede klargjort på en systemfil du ikke husker at du åpnet.

**Forkortede filer forblir skrivebeskyttet uansett** — å lagre det som er på skjermen ville kaste bort alt forbi grensen, så knappen tilbys ikke i det hele tatt framfor å tilbys og avvises. Det samme gjelder en fil som ikke lot seg lese: det er ingenting å skrive tilbake bortsett fra en tom rute.

Hvis skrivingen mislykkes — et skrivebeskyttet monteringspunkt, en fil du ikke eier — vises systemets egen begrunnelse i en melding.

Svært store filer vises forkortet, og statuslinjen sier det framfor å la deg finne det ut — ved siden av de øvrige forholdene framfor etter knappene, siden det er et faktum om filen som de andre. Grensene måles mot en levende gjengiver framfor å gjettes — å sette opp en megabyte tekst i én rute dreper Obsidians gjengivelsesprosess fullstendig, og Markdown koster flere ganger mer per byte enn ren tekst, så de to har hver sin grense, og en enkelt enorm linje forkortes selv når filen som helhet er liten.

**Statuslinjene er etiketter, og forklaringen er et verktøytips.** Hver linje sier hva som er sant med så få ord som mulig — *Utenfor hvelvet*, *Ingen redigerer for denne filtypen*, *Forkortet — filen er for stor* — for knappene ved siden av dem sier allerede hvilken tilstand filen er i. Å holde pekeren over en gir setningen: hvorfor Obsidian ikke kan åpne den som et notat, hva som ellers ville skjedd med denne filtypen, hva forkortingen koster deg.

Dette gjelder også filer **inne** i hvelvet ditt. Obsidian overlater enhver filendelse den ikke har en visning for rett til skrivebordets standardprogram — så en `.txt` eller `.json` i hvelvet ditt ville forlatt Obsidian helt. Slike åpnes nå i den samme viseren, med den oransje ringen, for "åpne den i Obsidian" er det du ba om — og som hvelvfiler kan de redigeres der uten noen opplåsing. Binære filer uten viser beholder Obsidians oppførsel; det er ingenting å vise.

Forhåndsvisningen åpnes **i fanen du var i**, så fram/tilbake fører deg tilbake til notatet du kom fra; hold <kbd>Ctrl</kbd> for en ny fane som overalt ellers. Overskriftslinjen fortsetter å vise den eksterne filens sti mens den er åpen, så du kan bla videre derfra.

En stillferdig linje over innholdet tilbyr veiene ut:

- **Åpne i *(hvelv)*** — vises når filen tilhører et av de andre hvelvene dine. Overlater den til Obsidians egen URI-behandler, som åpner det hvelvets vindu med notatet i det, som et ekte redigerbart notat. Dette vinduet blir stående akkurat som det var; ingenting bytter under deg.
- **Vis som Markdown** / **Vis som side** / **Rediger som tekst** — de to lesningene denne filen har; den siste opphever også skrivebeskyttelsen utenfor hvelvet.
- **Åpne i standardprogram** — overlater filen til skrivebordets standardprogram, inkludert de binærformatene denne viseren ikke kan vise. Formulert akkurat som Obsidians egen oppføring for den samme handlingen, for det er den samme handlingen.

Viseren svarer også på et **høyreklikk**: inne i tekstredigereren med *Klipp ut* / *Kopier* / *Lim inn* / *Velg alt*, og alle andre steder med filens egen meny. Obsidians tre-prikkers-meny i overskriften bærer også den menyen — utenfor hvelvet ville den ellers ikke tilby noe annet enn *Del til høyre* og *Del nedover*.

Ingenting utenfor hvelvet ditt skrives med mindre du trykker *Rediger som tekst* først. Se avsnittet [Utenfor hvelvet](README.no.md#utenfor-hvelvet) i README for hele redegjørelsen.

## Å slippe en fil på en mappe i stien

Hver mappe i raden er et slippmål, så **et notat som dras til én, flyttes
dit** — den korteste veien dit er mellom et notat og en hvilken som helst mappe
over det, siden målet allerede er synlig på skjermen. Dra fra filbehandleren,
fra listen, fra notatets eget navn i headeren, eller fra hvor som helst ellers
i Obsidian som gir en fil: det er appens egen dra-funksjon, så etikettene ved
markøren, markøren selv og fremhevingen er de samme som filbehandleren tegner.

**Hvelvets navn tar også imot et slipp**, siden det er mappen øverst i
raden — den ene bevegelsen som plasserer et notat i hvelvets rot herfra.

**Et helt utvalg kan dras samtidig**, og det flytter som én enhet: hvis noen av
dem ikke kunne tas imot, avvises hele slippet i stedet for å flytte noen og
stille hoppe over resten.

Lenker følger notatet, akkurat som når det flyttes fra filbehandleren eller ved
å skrive en sti.

En mappe som **ikke kunne ta imot slippet, tilbyr ingenting eget** — ingen
*Flytt inn i*-etikett, ingen fremheving av mappen — i stedet for å tilby noe
som deretter ville feile; Obsidians eget svar for headeren, *Åpne i denne
fanen*, står der i stedet. Tre tilfeller:

- mappen filen **allerede er i**, siden den allerede er der;
- en mappe sluppet **inn i seg selv eller inn i sitt eget etterkommende ledd**,
  som ville latt den ikke ha noe sted å ha kommet fra;
- et utvalg som holder **en mappe og noe inni den**, siden flytting av mappen
  tar med seg barnet.

En mappe som allerede har en **fil med samme navn**, tar imot slippet og spør
hva som skal gjøres med den som er i veien, med samme dialog som et opptatt
navn skrevet eller valgt — se [Et navn som er opptatt](#et-navn-som-er-opptatt).
Ingenting her overskriver.

Bare mapper **inni hvelvet ditt** tar imot slipp. Mens raden peker utenfor
hvelvet, avslår segmentene, fordi å ta et notat ut av hvelvet bryter hver
lenke til det — en avgjørelse verdt et spørsmål snarere enn en bevegelse.
Måten å gjøre det med vilje på er fortsatt å skrive stien, som spør først og
forteller deg hvor mange notater som ville bli påvirket.

## Å slippe tekst eller en fil for å skrive den ned

De samme målene tar imot **innhold** i tillegg til filer, og de to skilles
etter hva du drar snarere enn hvor du slipper.

**På et notat raden allerede navngir** — notatets eget navn, eller et
skilletegn hvis mappe har et mappenotat — legges det du slapp, til på slutten
av det, etter en tom linje. Det spør først, fordi dette skriver inn i en fil
som allerede finnes, og et drag er en bevegelse en ustø hånd kan gjøre ved et
uhell. Tekst fra en editor, en fil fra skrivebordet ditt og et notat dratt ut
av dette hvelvet fungerer alle sammen; en fil leses som tekst, og en binærfil
avvises i stedet for å limes inn som en skjerm full av tull.

**På et sted — hvelvets navn eller en mappe** — skrives ingenting ennå, fordi
ingenting er navngitt. Feltet åpnes der og holder det du slapp, og navnet du
skriver, er det som fullfører det: et nytt notat *lages* med teksten i seg, og
et eksisterende blir spurt om nøyaktig som over. <kbd>Esc</kbd>, eller et klikk
et annet sted, slipper hele greia.

**Raden ringes inn i blått** mens et drag som ville landet som innhold, er over
den, og forblir blå mens feltet holder ett — samme blå, som sier det samme:
det som skjer videre, handler om teksten du bærer på. En fil dratt fra ditt
eget hvelv til en mappe betyr fortsatt *flytt den dit*, beholder Obsidians egen
fremheving, og ringes aldri inn i blått; den bevegelsen var der først, og
innhold trer tilbake for den.

## Når stien er lengre enn ruten

Navn **forkortes i stedet for å klemmes sammen**, i rekkefølgen på hva du minst
sannsynlig trenger:

1. **Hvelvets navn først**, helt ned til ikonet dets. Du vet hvilket hvelv du
   er i; ikonet fortsetter å si hvor stien starter.
2. **Deretter filens filendelse**, hvis du har den slått på — de samme tre
   tegnene på nesten hver fil i et hvelv. Den fjernes helt fremfor å
   forkortes: en halv filendelse sier ingenting som ingen filendelse ikke
   allerede gjør.
3. **Deretter mappene, lengste først.** Det lengste mappenavnet forkortes til
   lengden på det nest lengste, så begge sammen, og så videre, hver med sitt
   eget gulv — så én svært lang mappe gir opp alt den har over de andre før et
   kort navn ved siden av den mister en bokstav.
4. **Filens eget navn sist**, og det beholder omtrent seks tegn. Det er det
   headeren er til for.

Plass gis opp **kontinuerlig**, i brøkdeler av en piksel snarere enn en
bokstav om gangen: et navn som viker, klippes ved pikselen og toner ut under
sin `…`, så en rute som dras sakte, gjør raden smalere jevnt, og ingenting
etter den flytter seg i sprang. Før noen bokstav går, brukes luften rundt
skilletegnene opp — det er radens eneste mellomrom, og det koster ingen
informasjon i det hele tatt — og et forkortet navn ender der skilletegnet
begynner, uten noen stripe av tom boks mellom de to.

**Feltet tar det det holder.** Å åpne ett for å skrive en sti klemmer ikke
mappene ved siden av det ut av veien: det er like bredt som teksten i det og
vokser mens du skriver, så sporet beholder alt feltet ikke trenger. Bare når
det ikke er nok plass til begge, ruller raden, og da er feltet det ene som
aldri viker — det er tekst som redigeres, ikke et navn som tilpasses.

Ingenting kuttes forbi det som skiller det fra naboene: `Prosjekter2025` og
`Prosjekter2026` i samme mappe kommer ned til `…025` og `…026` snarere enn til
et prefiks som ville gjort dem til samme ord, mens `Rapporter` ved siden av
`Kvitteringer` kan komme ned til `Rap…`. I tillegg beholder hvert navn en
**lesbar bredde** — omtrent fire bokstavers verdi for en mappe og seks for et
filnavn, målt i den skrifttypen raden faktisk tegnes i, snarere enn talt. Fire
smale bokstaver og fire brede er ikke samme mengde navn, så `lilliliillil` får
lov til å beholde mer av seg selv enn `WWMMWWMMWWMM` gjør, og det som er igjen
på skjermen, er like stort begge veier. Korte navn får være helt i fred — et
navn slipt ned til `A…` er unikt og fortsatt ulesbart. **Mellomrom telles ikke
med.** Seks tegn for å si hvilken fil dette er, er seks tegn verdt å lese, så
mellomrommene mellom dem blir med gratis, og ett blir aldri liggende igjen mot
`…`, der det uansett ville vært usynlig.

**Et navn kuttes der naboene stemmer overens med det, og på midten der de ikke
stemmer overens noe sted.** To mapper kalt `aaaa-felles-en` og `aaaa-felles-to`
deler alt bortsett fra de tre siste tegnene, så å kutte halen beholder halvparten
som sier noe: de kommer ned til `…en` og `…to` i stedet, som er kortere *og*
skiller dem fra hverandre. Der overensstemmelsen er på slutten — `alpha-utkast`
ved siden av `beta-utkast` — er det slutten som forsvinner; der den er i begge
ender, er det midten som blir stående. Et navn uten nære naboer mister midten,
siden et navn åpner med hva det er og avslutter med hvilket det er — for en
fil, dens filendelse: `årlig…2026.md`.

En kort felles del teller ikke. `parallelle strukturer` slutter tilfeldigvis på
de samme to bokstavene som `Skjemaer` ved siden av, og det er ingen grunn til å
beholde noen av dem hele — tre tegn fra begynnelsen skiller dem allerede fra
hverandre.

Ingenting brytes til en ny linje. Når selv de korteste ærlige navnene ikke får
plass, **ruller raden sidelengs**, parkert i enden der filen er — på det
punktet er det ingenting mer å komprimere, og videre kutting ville skjule
snarere enn forkorte. Hjulet ruller den uansett hvor pekeren er over raden, og
begge ender kan nås: mens den ruller, følger raden sin startjustering, uansett
hva justeringsinnstillingen sier, fordi innhold sentrert i en boks det har
vokst ut av, flyter over til venstre like mye som til høyre — og den halvdelen
kan ikke rulles til i det hele tatt.

**Pek på et forkortet navn, og det kommer tilbake i sin helhet**, så lenge du
peker på det, rullet til venstre kant slik at alt som kom tilbake, er synlig.
**Klikk på ett, og det blir stående**: feltet åpnes og viser mappen du klikket,
det som tilbys etter det og det du skriver, og det fortsetter å vise dem etter
at pekeren har flyttet seg bort. Navn blir stående mens du ruller raden eller
skriver inn i den — at ett springer opp under en bevegelse ment for å lese
raden, ville flyttet alt etter det bort under deg.

Det **innledende segmentet har alltid en verktøytips, og det er den absolutte
stien** — `/home/deg/Hvelv/Notater`, eller hvor enn raden begynner. Det er det
ene ved raden ingenting på skjermen ellers kan si: navnet forteller deg
*hvilket* hvelv, aldri hvor det er. Det er der uansett om noe måtte forkortes
eller ikke.

Med **Vis hvelvets navn** slått av, fjernes ikke navnet, det bare holdes på
ingenting — så å peke på ikonet gir det tilbake på nøyaktig samme måte som å
peke på et navn raden måtte forkorte.

**Vis filendelser** setter filendelsen tilbake på radens filnavn. Av — standarden
— navngir raden et notat slik Obsidian titulerer det, uten `.md` som nesten
hver fil i et hvelv deler; på, navngir den det slik filsystemet gjør, som er
det du vil ha når hvelvet inneholder mer enn notater. Det er også det andre
raden gir opp når plassen blir knapp, rett etter hvelvets navn.
Et verktøytips gir deg resten: ikke bare navnet, men alt raden viser under det,
som `…/navn/mappe/notat.md`, så ett hover svarer på både "hva er dette" og
"hva er under det". Hvelvets ikon navngir sitt hvelv på samme måte, når navnet
er slått av eller er blitt klemt bort.

## Varselfargene

| | Når | Hva det betyr |
| --- | --- | --- |
| **Rød** ring på stien | Raden peker utenfor hvelvet ditt | Obsidian kan ikke åpne det som er der, som et notat, og ingenting der ute skrives før du åpner hengelåsen. |
| **Oransje** ring på stien | Filen er en teksttype Obsidian ikke har noen visning for | En advarsel. Obsidian ville overlatt den til skrivebordets standardprogram; programtillegget viser den i stedet. |
| **Rød** tekst i det åpne feltet | Ingenting finnes på den stien ennå | <kbd>Enter</kbd> vil lage den snarere enn å åpne den. Ikke så mye en advarsel som en beskrivelse av hva neste tastetrykk gjør — se [Å skrive en sti](#å-skrive-en-sti). |
| **Rød** hengelås i stedet for navnebytte-bryteren | Raden peker utenfor hvelvet ditt, og skriving der er fortsatt låst | Samme rødt som ringen, av samme grunn: det markerer en avvisning. Å trykke på den tillater skriving her og gir plassen tilbake til bryteren — se [Å skrive utenfor hvelvet](#å-skrive-utenfor-hvelvet). |

De **to ringene er uavhengige, og begge kan gjelde samtidig** — en ekstern `.json` er både utenfor hvelvet ditt *og* en type Obsidian ikke har noen editor for. I visningen vises de som separate linjer, hver med kun sin egen faktaopplysning. På stien vinner rødt der begge gjelder, siden to ringer bare ville være støy. Den røde *teksten* er en helt tredje ting: den handler om hva som skrives, ikke om hvor raden peker, så den kan vises inni hvilken som helst av ringene eller ingen av dem.

Det oransje nivået er bevisst smalt. Registrerte typer (Markdown, canvas, bilder, PDF, lyd, video) håndteres skikkelig og får ingenting. Binærfiler får heller ingenting — du kommer ikke til å redigere en `.zip` til rot ved et uhell. Det som er igjen, er nøyaktig faren: en `.json`, `.css` eller `.log` som **Vis alle filtyper** har gjort synlig. Listen er bevisst bredere: der er alt som ikke er et notat, oransje — se [slik fargelegges radene i listen](#slik-fargelegges-radene-i-listen).

## Gi nytt navn-/flyttemodus

Blyantknappen helt til høyre i headeren — ved siden av visningsmodus-knappen, i samme størrelse som de innebygde knappene — slår på og av gi nytt navn-/flyttemodus. Utenfor hvelvet ditt står en rød hengelås i dens sted til du trykker på den; se [Å skrive utenfor hvelvet](#å-skrive-utenfor-hvelvet). Header-raden rammes da inn i aksentfargen, akkurat som å gi nytt navn i filbehandleren. De samme klikkene og tastetrykkene fullfører nå en flytting eller navnebytte via Obsidians `fileManager.renameFile`, slik at alle lenker til notatet følger med.

Under navnebyttet:

- Det gjeldende filnavnet er festet inn i hver mappes liste, så det å flytte et notat uten å gi det nytt navn, er ett enkelt klikk.
- Navn som allerede er opptatt i målmappen, er **røde** — en mappe som allerede har navnet, og en fil med det navnet — så kollisjonen vises før du velger. De kan fortsatt velges: se under.
- Inndata valideres direkte mot Obsidians egne regler for navnebytte — samme tegnsett, samme meldinger, samme røde verktøytips du får ved å gi nytt navn i filtreet — så et ulovlig navn markeres mens du skriver, og kan ikke fullføres.
- Å klikke utenfor header-raden, eller at headeren mister fokus, avslutter navnebyttemodus.

### Et navn som er opptatt

Å flytte eller gi nytt navn til noe som allerede har det navnet, **spør i
stedet for å avvise.** En dialog åpnes med to stier du kan redigere: hvor filen
din skal, og hvor filen som er i veien, skal — rød mens den fortsatt er
opptatt. Hver sti tegnes også på samme måte som stien tegner en, med delene
som skiller seg farget og forkortet sist, så en lang sti fortsatt viser hva som
endres.

Begge feltene har en liste. Den andre inneholder de vanlige utveiene:

- **Bytt plass** — den går til din fils gamle mappe, under sitt eget navn.
- **Bytt navn** — den blir der den er, og tar din fils gamle navn.
- **Bytt begge** — den tar din fils gamle sti.
- `-1`, `-bak` og `-old` ved siden av sitt eget navn.
- De to navnene filene hadde.

Den første listen tilbyr hvor filen din skulle, **Bli der den er**, sitt eget
navn i målmappen, og `-1`, `-bak` og `-old` ved siden av det. En utvei hvis sti
er opptatt, er grået ut og kan ikke velges. Å velge én **fyller bare ut
feltet** — du kan fortsatt redigere det — og **Bruk** flytter begge, lenker og
alt; **Avbryt** flytter ingenting. Å velge et opptatt navn fra listen spør om
det samme, og det gjør også det å slippe et notat på en mappe som allerede har
navnet dets.

## Én tast for begge navnebyttene

Kommandoen for å gi nytt navn (<kbd>F2</kbd> som standard, eller det du har bundet den om til) **veksler** mellom Obsidians navnebytte i den innebygde tittelen og dette tilleggets stilinje i toppteksten. Har du slått av Obsidians innebygde tittel, blir stilinjen i toppteksten det eneste målet, så tasten gjør aldri ingenting.

I stilinjen åpner den på **navnet uten filendelse** — den redigeringen et navnebytte
nesten alltid er, og det samme som å klikke på navnet velger. Trykk den igjen, så
gjør den det <kbd>Tab</kbd> ville gjort der: på navnet er det neste trinnet —
navnet med filendelse, stien fra hvelvmappen din, stien fra
systemroten; med noe skrevet inn, fullfører den det, slik <kbd>Tab</kbd> gjør.

**Runden lukkes ved overskriften.** Fem trykk tar deg rundt den — den innebygde
tittelen, navnet, navnet med filendelse, stien fra hvelvet, stien fra
systemroten — og det sjette er den innebygde tittelen igjen. Det trykket er det eneste som skiller seg fra
<kbd>Tab</kbd>, som i stedet runder tilbake til starten av stien — og det syvende
går dit <kbd>Tab</kbd>s runde går: hvelvroten, med hele stien i
feltet og den første mappen markert. Så hvert trinn <kbd>Tab</kbd> når, når
tasten også.

Kommandoen **Fokuser på stilinjen** gjør det samme inne i feltet — hva enn
<kbd>Tab</kbd> ville gjort — og der <kbd>Tab</kbd> ville runde, gir den heller markøren
tilbake til notatet. Neste trykk er runden: hvelvroten, første mappe markert.

**I et felt som allerede er åpent**, gjør tasten det om til et navnebytte der det
står — og beholder teksten, markøren og utvalget — og **Fokuser på stilinjen**
tar navnebyttet av det igjen på samme måte. **Alt annet** som trykkes eller
klikkes mellom trykkene, starter den ene eller den andre runden på nytt, så et trykk etter at du har
redigert, havner aldri på et trinn som er igjen fra før.

Utenfor hvelvet fungerer tasten også — der finnes ingen innebygd tittel, så
det første trykket går rett til stilinjen.

Dette fungerer ved å pakke inn kommandoen `workspace:edit-file-title` framfor å kapre tasten, så både å binde om hurtigtasten og å kjøre kommandoen fra paletten fungerer uendret.

## Slik fargelegges radene i listen

| Farge | Betyr |
| --- | --- |
| **Lilla** | Et notat (`.md`, `.markdown`) — det Obsidian vil åpne som et notat, plukket ut av en mappe med blandet innhold |
| **Oransje** | Ikke et notat — alt Obsidian ikke vil åpne som et, fra en PDF til en `.txt`, og `:page`-radene sammen med dem. En mappe med blandet innhold blir lest for notatene i den, og én farge for alt annet sier det raskere enn en advarsel på noen få av dem; se [de to varselfargene](#varselfargene) |
| **Dempet** | Utenfor hvelvet ditt, så hvelvets egen håndtering gjelder ikke |
| **Blå**, fet | Der du allerede er: denne linjens eget notat, og mappen stilinjen står på. I gi nytt navn-/flyttemodus står oppføringen *behold dette navnet* i notatets sted — samme notat begge veier |
| **Rød** | Kun i gi nytt navn-/flyttemodus: navnet er opptatt. Fortsatt valgbart — å velge ett spør hva som skal gjøres med filen i veien; se [Et navn som er opptatt](#et-navn-som-er-opptatt) |

**Mapper er fete**, så en mappes eget notat trenger ingen egen farge for å
skille seg fra mappen sin: det er lilla som ethvert annet notat. En **strek nedover
kanten av en rad** markerer navnene som begynner med det du skrev — blått der
de stemmer overens videre, grønt på grenen tilbudet tar; se
[Å skrive en sti](#å-skrive-en-sti).

Feltet tar de samme fargene for det det navngir — se [Å skrive en sti](#å-skrive-en-sti).

## Synlighetsregler

- Filer med filendelser som ikke støttes, vises i listene kun hvis Obsidians innstilling **Detect all file extensions** er slått på — **inne i hvelvet**. Utenfor gjelder ikke innstillingen: den styrer hva hvelvet indekserer, og ingenting der ute er i hvelvet, så en `.txt` ved siden av notatene dine blir listet uansett.
- Listen viser opptil 1000 oppføringer, ti ganger Obsidians egen grense. Når en mappe har flere, sier den siste raden hvor mange som ble utelatt; fortsett å skrive for å begrense listen.
- Skjulte filer og mapper (punktum-filer og -mapper) vises kun hvis dette tilleggets innstilling **Vis skjulte filer** er slått på.
- **Overskrivingsvernet fungerer likt uansett synlighet** — en skjult fil hindrer deg fortsatt fra å overskrive den.

## Juksekort

En sti **pakket inn i anførselstegn** pakkes ut for deg. Windows' *Kopier som sti* gir
deg `"C:\Users\du\notat.md"`, anførselstegn inkludert, og et skall gjør det samme for enhver
sti med et mellomrom i seg; å lime inn en eller skrive den fungerer begge veier. Bare
det doble anførselstegnet, og bare som et matchende par rundt hele — det kan ikke
forekomme i et ekte navn, der en apostrof godt kan.

| Du vil… | Gjør dette |
| --- | --- |
| Åpne en mappe (dens notat, eller vise den i filbehandleren) | Klikk på skilletegnet **etter** den mappen |
| Gi en mappe et mappenotat den ikke har | **Dobbeltklikk** det samme skilletegnet (krever et mappenotat-tillegg) |
| Bytte ut en mappe med et søsken | Klikk på mappens navn, og skriv eller velg deretter |
| Gi notatet nytt navn eller nytt mål | Klikk på notatets navn — filendelse inkludert |
| Bla gjennom en mappes innhold | Klikk på den mappens navn; listen viser dens forelder, så klikk mappen **under** den du vil ha |
| Skrive om en mappe og alt under den | **Dobbeltklikk** den mappens navn, og skriv deretter |
| Redigere stien fra en mappe og nedover | Klikk på den mappens navn, deretter <kbd>→</kbd> for å fjerne utvalget |
| Hoppe til en fil ved å skrive stien | Klikk på filnavnet eller det tomme rommet, skriv, <kbd>Enter</kbd> |
| Åpne en fil i en ny fane i stedet | <kbd>Ctrl</kbd> mens du velger den, eller <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| Kopiere notatet et sted i stedet for å flytte det | Blyant, deretter <kbd>Ctrl</kbd> mens du velger eller bekrefter målet |
| Opprette et notat på en sti som ikke finnes | Skriv stien — feltet blir **rødt** når ingenting i listen samsvarer med den heller — deretter <kbd>Enter</kbd>. Inne i hvelvet opprettes den med én gang; utenfor spør den først |
| Se om en sti du har skrevet allerede finnes | Se på fargen: den tar fargen til raden den navngir, og rødt betyr at <kbd>Enter</kbd> ville opprette den |
| Gå ett nivå ned mens du skriver | Skriv `/` |
| Gå ett nivå opp igjen mens du skriver | <kbd>Backspace</kbd> i det tomme feltet |
| Ta med mappene før feltet inn i det | <kbd>←</kbd> ved starten for én; <kbd>Shift</kbd>+<kbd>Home</kbd>, eller <kbd>Home</kbd> med listen lukket, for alle |
| Flytte eller gi det åpne notatet nytt navn | Klikk på blyanten, og bla eller skriv som over |
| Flytte til et navn som er opptatt | Bekreft likevel: dialogen lar deg bytte plass, navn eller begge deler, eller gi filen i veien et annet navn |
| Flytte uten å gi nytt navn | Blyant → klikk inn i målmappen → velg det festede gjeldende filnavnet |
| Gi nytt navn der det står | <kbd>F2</kbd> to ganger (første trykk går til den innebygde tittelen, andre til toppteksten) |
| Hoppe til et annet hvelv, hjem eller en stasjon | Klikk på hvelvets navn |
| Åpne en fil utenfra hvelvet | Hvelvnavn → velg et sted → bla → velg filen (skrivebeskyttet inntil *Rediger som tekst*) |
| Fullføre navnet som skrives | <kbd>Tab</kbd>, eller <kbd>End</kbd> for det som tilbys; <kbd>→</kbd> tar én bokstav av det |
| Gå inn i den, når ett navn gjenstår | <kbd>Tab</kbd> igjen |
| Ta tilbake et steg, eller forlate mappen | <kbd>Shift</kbd>+<kbd>Tab</kbd> |
| Ta hele stien, eller systemstien | <kbd>Tab</kbd> forbi slutten, eller klikk fire ganger |
| Kopiere et navn, en sti, eller en systemsti | Høyreklikk den to ganger; det tomme rommet tre ganger for systemstien |
| Nå det hvelvbehandleren tilbyr for dette hvelvet | Høyreklikk ikonet i starten av raden |
| Kopiere hvelvets ID | Høyreklikk ikonet i starten av raden |
| Åpne et annet hvelv du bladde i | Høyreklikk navnet i starten av raden |
| Se filens filendelse på raden | Slå på **Vis filendelser** i innstillingene |
| Åpne et mappesegment i en ny fane | <kbd>Ctrl</kbd> eller midtklikk det, eller dra det til fanelinjen |
| Nå stilinjen fra tastaturet | Bind *Fokuser på stilinjen* i Hurtigtaster |
| Åpne en webadresse eller en `obsidian://`-lenke | Skriv den inn i linjen og trykk <kbd>Enter</kbd> |
| Avbryte hva som helst | <kbd>Esc</kbd>, eller klikk utenfor toppteksten |
| Prøve oppføringer for størrelse før du bekrefter | Bruk piltast eller hold musen over listen; <kbd>↑</kbd> forbi toppen gir deg teksten din tilbake |
| Flytte et notat inn i en mappe over det | Dra det til den mappen i raden |
| Beholde en tekstbit som et nytt notat | Dra teksten til en mappe, skriv et navn, <kbd>Enter</kbd> |
| Legge en tekstbit til notatet du leser | Dra den til notatets navn, bekreft |
| Se et forkortet mappenavn i sin helhet | Hold musen over det, eller utvid ruten |
| Finne ut hvor hvelvet selv ligger | Hold musen over ikonet i starten av raden |
| Ta et notat ut av hvelvet | Blyant → bla utenfor → bekreft dialogen (lenker vil brytes) |
| Tillate skriving utenfor hvelvet ditt | Klikk på den **røde hengelåsen** i toppteksten; navnebytte-bryteren tar dens plass |
| Låse det igjen | Klikk bryteren til hengelåsen er tilbake — ett trykk inn, ett trykk ut |
| Slette en fil utenfor hvelvet | Åpne hengelåsen, høyreklikk deretter filen: *Slett* flytter den til systemets papirkurv |

## Innstillinger

| Innstilling | Alternativer | Standard | Hva den gjør |
| --- | --- | --- | --- |
| **Language** | Obsidian-standard, eller en av 46 | Obsidian-standard | Hvilket språk dette tilleggets egen tekst er på. *Obsidian-standard* følger språket satt i utseendeinnstillingene, som er det nesten alle vil ha. Selve raden — dens navn, beskrivelse og *Obsidian-standard* — forblir på engelsk uansett hva som velges, fordi det er veien tilbake ut av et språk du ikke kan lese. Gresk og sanskrit er oversatt her og mangler i Obsidians egen liste, så denne innstillingen er eneste måte å nå dem på. |
| **Justering** | Venstre / Midtstilt / Høyre | Venstre | Hvor stien plasseres i topptekstraden. *Midtstilt* samsvarer med Obsidians klassiske utseende. |
| **Skilletegn** | Ethvert tegn | `/` | Skilletegnet tegnet mellom segmentene. Seks forhåndsvalg med ett klikk (`/ > ▸ › \ •`) står foran tekstfeltet. |
| **Vis hvelvets navn** | På / Av | På | Om hvelvet selv er det første segmentet i stien. Slått av blir det segmentet et 🏠-ikon i stedet for å forsvinne, så stien fortsatt starter et sted som kan klikkes. |
| **Mappenavnet åpner listen** | På / Av | På | Bytter om hva et mappenavn og skilletegnet etter det gjør — se [tabellen over](#stien). Med [Folder notes](obsidian://show-plugin?id=folder-notes) åpner skilletegnet mappenotater. Gjelder aldri i gi nytt navn-/flyttemodus. |
| **Vis skjulte filer** | På / Av | Av | Om skjulte filer og mapper (punktum-filer og -mapper) listes i listene. Overskrivingsvernet gjelder uansett. |
| **Show all file types** | — | — | Ikke dette tilleggets innstilling, men Obsidians, nevnt her fordi den svarer på det samme spørsmålet: hvelvet ditt indekserer bare filtypene det er fortalt å indeksere, og bare det som indekseres kan listes. Finn den i Obsidians innstillinger og slå den på for å se alle filer; knappen ved siden av raden åpner den siden med innstillingen rullet inn i visning og blinket, slik det å klikke den i innstillingenes eget søk ville gjort. Utenfor hvelvet gjelder den ikke, siden ingenting der ute er indeksert uansett. |
| **Vis filendelser** | På / Av | Av | Om filens navn på raden bærer filendelsen. Av, den utelates — slik Obsidian utelater den fra et notats tittel. På, raden navngir filen slik filsystemet gjør. Uansett er filendelsen det andre som forsvinner når raden går tom for plass, rett etter hvelvets navn. |
| **Tilgang til eksterne filer** | På / Av | **Av** | Om hvelvets navn åpner listen over steder. Av, ingenting i tillegget ser noensinne forbi dette hvelvet. |
| **Hurtigtaster** | knapp | — | Åpner Obsidians *Hurtigtaster* filtrert til dette tillegget, der *Fokuser på stilinjen* kan gis en tast. |

## Bytte ut ikonene

Lure tegner tre ikoner: hvelvrot-ikonet (når **Vis hvelvets navn** er av), gi nytt navn-/flytte-bryteren, og hengelåsen som står i dens sted mens skriving utenfor hvelvet er låst. Alle kan byttes ut fra et tema eller et CSS-utdrag — sett erstatningstegnet og skjul det medfølgende i én regel:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* Only ever shown shut: opening it hands the slot to the rename toggle. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}
```

`--lure-icon-glyph` tar alt som er gyldig i CSS `content`, så `url(...)` fungerer for et bilde like godt som for et tekst- eller emojitegn. La `--lure-icon-svg` være for å beholde Lucide-ikonet og tegne ditt tegn ved siden av det.
