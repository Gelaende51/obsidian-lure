<!-- Oversættelse af docs/usage.md — stand: commit 94b1372.
     Maskinoversat (Claude Sonnet 5), ikke gennemset af personer med dansk
     som modersmål. Plugin'ets etiketter kommer fra
     src/lang/translations.ts og Obsidians fra de tekster, applikationen
     selv leverer, så de svarer til det, du ser på skærmen. -->

[English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · [Čeština](usage.cs.md) · **Dansk** · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · [Bahasa Indonesia](usage.id.md) · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · [Norsk](usage.no.md) · [Polski](usage.pl.md) · [Português](usage.pt.md) · [Português (Brasil)](usage.pt-BR.md) · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

# Brug

[← tilbage til README](README.da.md)

## Stien

Notens fulde sti i boksen erstatter det nøgne filnavn i visningens overskriftslinje — linjen under fanerækken, som også rummer frem/tilbage-knapperne.

To ting på linjen kan klikkes, og **Mappenavnet åbner listen** afgør, hvad der gør hvad:

| | Mappenavn | Skilletegnet efter det |
| --- | --- | --- |
| **Til** (standard) | Vælger den mappe til redigering | Åbner mappen |
| **Fra** | Åbner mappen | Går ned i den mappe |

"Åbner mappen" betyder det, et klik på det segment gør i Obsidian uden plugins. Uden et plugin, der lytter der, vises mappen i sidepanelet filstifinderen — fremhævet og foldet ud, så indholdet ses.

Hvor mappens note er den, du allerede læser, viser klikket i stedet mappen frem — der er intet at åbne, som ikke allerede er på skærmen, hvilket er, hvad det andet klik altid har betydet.

Med [Folder notes](obsidian://show-plugin?id=folder-notes) installeret åbner det samme klik i stedet den mappes note, **uanset dybde**: noten findes her ud fra det plugins egen konvention i stedet for at overlade det til det. Det plugin genkender kun de mapper, det har markeret, hvilket på en sti mere end én mappe dyb er ingen af dem, så det klik, der åbnede en topniveau-mappes note, plejede ikke at gøre yderligere længere nede. De to andre folder-note-plugins offentliggør ingen konvention at læse og gør aldrig krav på linjen, så med dem viser skilletegnet mappen frem som altid. Det er det ene folder-note-plugin, der er fundet at gøre krav på overskriftsstien; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) og [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) håndterer folder-notes, men lytter ikke efter et klik på stien, så med dem viser skilletegnet mappen frem som sædvanligt. Se [kompatibilitet](../compatibility.md#verified-against).

Et skilletegn er **kun understreget, når mappen før det faktisk har en folder-note**, så understregningen er et løfte om, at der er noget at åbne — på enhver dybde med [Folder notes](obsidian://show-plugin?id=folder-notes) kørende, da noten findes her i stedet for at overlade det til det plugin at markere. Hvor det ikke er det plugin, der kører, er intet understreget, og intet åbnes: skilletegnet viser frem, som det gør uden noget folder-note-plugin overhovedet. Hvert skilletegn forbliver klikbart i begge tilfælde — ét uden understregning viser dets mappe frem og folder den ud i sidepanelet, hvilket markørens udseende stadig viser. Understregningen flytter sig samtidig væk fra mappenavnet: med ombytningen slået til åbner navnet listen, så at markere det som linket til noten ville være en løgn.

**Omdøb-/flyttetilstanden tilsidesætter begge**, uanset hvad indstillingen siger: intet på linjen åbner en mappe, mens en flytning er undervejs, for at åbne en ville opgive flytningen. Mappenavne vælges til redigering, og skilletegn går ned — begge er måder at udpege målet på — og understregningen forsvinder for at vise, at åbning er sat på pause.

**Boksens rod** er det eneste segment, der ikke er et stisegment. Den har ingen forælder at liste søskende ud fra, så i stedet åbner den [listen over steder](#at-browse-uden-for-boksen) — dine andre bokse, hjemmemappen, filsystemets rod og monterede drev.

## Boksens eget skilletegn

Skilletegnet lige efter boksens navn står for selve boksen frem for for en
mappe, så det gør, hvad intet andet skilletegn kan:

| | Første klik | Næste klik |
| --- | --- | --- |
| **Med et startside-plugin** (en side, der møder dig, når Obsidian åbner) | Åbner den side i denne rude | Folder filtræet væk |
| **Uden et** | Folder filtræet væk | Genskaber præcis det, der var åbent |

Almindelige klik, ikke et dobbeltklik: når siden først er åben, har
skilletegnet intet tilbage at åbne, så det næste tryk er foldningen — uanset
hvor lang tid du bruger på det.

Det er **understreget**, når der er en startside at åbne, hvilket er det samme
løfte, et mappeskilletegn giver: der er noget der. Foldning er en kontakt —
næste tryk gendanner de mapper, der var åbne, og kun dem, så et træ, du havde
arrangeret, ikke går tabt ved et kig på noget andet.

## En rude uden fil

En tom fane, grafen og alt andet, der ikke navngiver en fil, får deres egen
linje: boksen, derefter ét segment, der siger, hvad ruden indeholder.

```
my-vault / :blank      en ny fane
my-vault / :graph      grafen, lokal eller global
my-vault / :<type>     alt andet uden fil
```

**Boksens rods egen liste** tilbyder også disse sider, under de mapper og
noter, der faktisk er i den: vælg `:graph` eller `:search` der, og ruden
åbner den visning, præcis som at vælge en note åbner noten. Hvilke sider der
findes, læses fra Obsidian frem for at være skrevet ned her — enhver visning,
der ikke findes for at vise en fil, så et plugin, der registrerer en (en
hjemmefane, en kalender), dukker op, uden at dette plugin ved noget om det.
Visninger, der kræver en fil — Markdown, PDF, billeder, canvasser, baser —
tilbydes ikke: der er intet for dem at vise.

Kolonet er pointen — ingen fil eller mappe kan hedde `:graph`, så linjen kan
ikke forveksles med en sti, der kunne åbnes. Etiketten kommer fra visningstypen
frem for fra Obsidians eget ordvalg, så den læses ens uanset grænsefladesprog,
og et afsluttende `-view` fjernes: et hjemmefane-plugin registrerer sin
visning som `home-launcher-view`, og linjen siger `:home-launcher`.

Et klik på det tomme rum, eller på selve etiketten, **åbner feltet ved boksens
rod**: skriv en sti, og <kbd>Enter</kbd> åbner den i selvsamme rude, med den
samme fuldførelse, den samme liste og det samme røde felt, der tilbyder at
oprette det, der ikke er der endnu. En tom fane er et godt sted at skrive,
hvor du vil hen, hvilket er, hvad den er til.

Etiketten er en etiket og intet mere: ingen liste, intet træk, ingen
omdøbning. Ruder i sidepanelerne rører vi slet ikke ved — en
tilbagelinks-rude beholder den titel, Obsidian giver den.

Canvasser, PDF'er, billeder og baser har ikke brug for noget af dette. De er
filer, så de får en almindelig sti.

## Klik på et segment: byt det ud med et søskende

Et klik på et mappenavn vælger **den mappes navn** i et tekstfelt og åbner en liste over mappen **ét niveau op** — dens forælder. At skrive eller vælge en række bytter denne mappe ud med et søskende og lader alt under den være urørt, så `Projekter/2026/Opstart.md` → klik `2026` → vælg `2025` giver dig `Projekter/2025/Opstart.md`.

Et klik på **notens navn** virker på samme måde mod dens egen mappe og vælger navnet **uden dets filtype** — omdøbning er den almindelige rettelse, og at skrive direkte hen over en markering, der inkluderede `.md`, plejede at ændre filtypen ved et uheld. Filtypen forbliver synlig ét tastetryk væk: <kbd>→</kbd> når frem til den, og dobbeltklikket, der udvider til hele rækken, tager det hele.

Klikket på mappen har allerede valgt ét segment, så **ét klik mere** udvider markeringen til hele linjen — den mappe *og* alt under den — og det, du skriver, erstatter så resten af stien på én gang. Virker ens i navigations- og omdøb-/flyttetilstand.

Det gælder kun som en fortsættelse af det klik, der åbnede feltet. Når du først har brugt feltet, opfører det sig som et hvilket som helst andet tekstfelt: klik placerer markøren, dobbeltklik tager et ord, tredobbeltklik tager linjen.

I begge tilfælde forbliver resten af stien synlig omkring feltet, som mærker før det og som umarkeret tekst efter det, så den fulde sti aldrig forsvinder fra overskriften. Skriv for at erstatte markeringen, eller tryk <kbd>→</kbd> for at beholde den og redigere derfra. Listen viser hele mappen uanset hvad der er forudfyldt; den begynder først at filtrere, når du rent faktisk skriver.

## Nedstigning via skilletegn

Et klik på et skilletegn (med **Mappenavnet åbner listen** slået fra) går ned i mappen før det: listen viser *den* mappes indhold, og resten af stien åbnes markeret i feltet. At vælge en mappe føjer den til stien og åbner straks den næste liste, så du kan klikke dig ned gennem et træ uden at forlade overskriftslinjen.

## Listen åbner, hvor du er

Listen åbner ved den række, du står i — noten, som denne linje tilhører,
eller, når et mappeklik har vist dens forælder, den mappe — frem for ved den
første række. I en mappe med to hundrede noter er den første række slet ikke
i nærheden af dig.

**Et hjul over et navn åbner dets liste og bevæger sig gennem den.** Det
første tryk åbner den samme liste, som at trykke på navnet åbner, og hvert
efterfølgende tryk flytter fremhævningen en række, hvilket sætter det, du
peger på, ind i feltet præcis som piletasterne gør — så et søskende kan
findes og vælges uden tastaturet. At dreje ud over hver ende giver din tekst
tilbage. En række med mere sti end plads besvarer hjulet ved at rulle
sidelæns i stedet, hvilket er den fortolkning, der vinder, mens den gælder.

Listen er **så høj, som vinduet tillader**. Obsidian sætter et loft på sine
forslagslister på 300 pixel, uanset hvad der ligger under dem; denne løber
til bunden af vinduet, standser nogle få pixel fra kanten, og ruller først,
når mappen indeholder mere end det. Den er **ikke bredere end stien**: et
navn, der ikke passer, forkortes på samme måde, som linjen forkorter et, og
vises helt, når du peger på det.

At bevæge sig gennem listen **sætter det, du peger på, ind i feltet**, med
piletast eller med musemarkøren — i stedet for det segment, du redigerede,
med resten af stien stående tilbage — så den række, du er på, også er den
sti, du ville få.

Resten af stien vises **kun så langt, som den findes under det, du peger
på**. Stående i en mappe med `2026/note.md` bag det segment, du redigerer, vil
at pege på en mappe, der har en `2026` med en `note.md` i, vise det hele; én,
der har `2026` og ingen note, viser `2026`; én, der har hverken, viser intet
efter navnet overhovedet, og det gør en fil heller ikke, da intet lever under
en fil. Det, **du har skrevet**, beholder sin fulde sti, mens du skriver den,
uanset hvor lidt af den der findes endnu — et halvt skrevet navn er ingen
beslutning. At sætte et navn ind er en beslutning, og det, der ikke kan nås
derfra, skæres af på det punkt; de mapper, du opretter, er dem, du skriver
*efter* det, hvilket er, hvor <kbd>Enter</kbd> opretter dem.
Den tekst, du havde skrevet, bevares: at bevæge sig **ud over enten den ene
eller anden ende af listen** — op forbi den første række, eller ned forbi den
sidste — slipper den og sætter din tekst tilbage, uden noget fremhævet.
Feltet er et stop på ringen ligesom enhver anden række, så en omgang passerer
gennem det i stedet for at springe fra sidste til første række, og at
fortsætte derfra bærer rundt til den anden ende.

At tage **musemarkøren væk fra listen** sætter også din tekst tilbage — og
giver fremhævningen tilbage til det, der havde den, før musen ankom: den
række, du havde pilet hen til, som igen vises i feltet, eller den, listen
åbnede på, fordi det er der, du er. At holde musen over er en måde at kigge
på frem for at vælge på, så en fejning af musemarkøren hen over listen koster
dig intet.

Selve listen ændrer sig ikke, mens du bevæger dig gennem den — den bliver ved
med at filtrere efter det, du skrev, ikke efter det, der er forhåndsvist ind
i feltet — så rækken under dig aldrig flytter sig væk under det næste tryk.
At skrive erstatter forhåndsvisningen og filtrerer som sædvanligt.

**Det, den filtrerer efter, er det segment, du redigerer**, ikke hele
feltet. Et klik på en mappe efterlader resten af stien der bag det navn, du
ændrer, så at filtrere efter det hele ville lede efter et barn kaldet
`2026/Kickoff.md` og finde intet — listen ville lukke ved dit første
tastetryk, uanset hvad du skrev. **Filtypen holdes også ude af det**, så
længe markøren er foran punktummet: at klikke på en notes navn vælger
stammen og efterlader `.md` bagved, så at skrive ét bogstav gør, at feltet
læser `a.md`, og det er ikke, hvad du leder efter. Sæt markøren efter
punktummet, og filtypen tæller som alt andet. Et navn, der reelt ikke matcher
noget, lukker stadig listen, fordi en tom liste er det ærlige svar.

En forhåndsvisning **bytter kun det ene segment og lader resten af stien
være**: at pege på en mappe spørger, hvad hvis dette trin var det, ikke smid
stien væk. At bevæge sig væk fra listen genskaber teksten *og* markeringen,
du havde, så det næste tastetryk erstatter det, det ville have erstattet,
før du kiggede.

## Listens rækker er rigtige filhåndteringsrækker

Hver fil og mappe på listen opfører sig som sin række i filstifinderen:

- **Højreklik** for den samme kontekstmenu, filstifinderen giver, række for række — inklusive dem, andre plugins tilføjer. En mappe tilbyder *Ny note*, *Ny mappe*, *Ny canvas*, *Ny base*, *Lav en kopi*, *Flyt mappe til…*, *Søg i mappe*, *Kopiér sti*, *Vis i systemets filhåndtering*, *Omdøb…* og *Slet*; en fil tilbyder sit eget tilsvarende, herunder *Åbn i standardprogram*.
- **Træk** en række hen, hvor som helst Obsidian accepterer en fil: ind i en editor for at indsætte et link, hen på en mappe i filstifinderen for at flytte den, hen på fanerækken for at åbne den.

Menuteksterne kommer fra Obsidians egne oversættelser, så de passer til resten af programmet på alle sprog.

## At skrive en sti

- Klik på det **tomme rum** før eller efter stien åbner et tekstfelt på hele stien *og viser noten i Filhåndteringen*, så træet følger ruden uden endnu en gestus. Det **tæller dine klik**: ét vælger stien uden endelsen, to vælger den med, tre vælger den sti maskinen kender. Klik på **filens navn** tæller på samme måde, men starter ét trin lavere, på selve navnet: ét vælger det uden endelsen, to med, og tre udvider til hele stien *fra din boksmappe* — den form, et link eller en søgning ønsker, snarere end maskinens. Et fjerde klik når den.
- **Tællingen hører til det forløb, der åbnede feltet.** Når det er ophørt — du satte en pause, skrev, eller klikkede én gang et sted i teksten — er feltet et tekstfelt som alle andre, og et dobbeltklik i det udpeger ordet under markøren, som det ville alle andre steder. Skriv over det markerede, eller redigér på stedet. (Klik på selve filnavnet markerer kun filnavnet; se ovenfor.) Højreklik på det samme rum **kopierer** de samme tre, ved to, tre og fire klik — den ene knap viser dem, den anden tager dem. Et **enkelt** højreklik åbner stien med det hele markeret og tilbyder det, der kan gøres med den: klip, kopiér, indsæt, markér alt, med Obsidians egne ord.
- **Midterklik på det tomme rum** for at indsætte over stien: feltet åbner på hele stien *fra boksens rod*, så udklipsholderen erstatter det hele, og det, der lander, er markeret. <kbd>Enter</kbd> går så derhen.
- **<kbd>Ctrl</kbd>+klik på det tomme rum** for at åbne denne note igen i sin egen fane, blinket i Filhåndteringen, så den anden fane ikke forveksles med den første. På **boksens navn** åbner <kbd>Ctrl</kbd>+klik eller midterklik en fane, der ikke holder noget, stående ved boksens rod med listen allerede vist — et sted at skrive en sti fra bunden.
- At skrive, mens en sti vises, omdanner det sidste segment til et lille felt med autofuldførelse i realtid afgrænset til den aktuelle mappe.
- **En sti fra filsystemets rod kan skrives.** `/` foran et tomt felt åbner en sådan i stedet for at fuldføre et trin, hver skråstreg efter den hører til den, og `~` er din hjemmemappe. Mens feltet holder en sådan sti, viser listen maskinen snarere end boksen, og rækkens indledende segment træder til side — det, der står i feltet, starter ved roden og siger det. Med *Adgang til eksterne filer* slået fra står listen tom i stedet, fordi <kbd>Enter</kbd> alligevel ville afvise stien.
- **En side kan skrives, ikke kun vælges.** `:graph`, `:search`, eller hvad dine plugins nu registrerer — de betegnelser, [boksrodens liste](#en-rude-uden-fil) tilbyder. At skrive et kolon hvor som helst tilkalder dem, siden intet navn må indeholde et, og <kbd>Enter</kbd> åbner den visning i denne rude. `:graph` skrevet **inde i en mappe** åbner den mappes graf — grafen filtreret til `path:"that/folder"` i sin egen søgeboks, som var det skrevet der; ved boksens rod er det hele grafen. <kbd>Tab</kbd> fuldfører navnet, som det fuldfører en mappes — og tager med sig alt andet, feltet holdt, siden en side ikke er i nogen mappe, og intet ligger under en. Klik på betegnelsen på en sådan side åbner feltet med den allerede stående.
- **Det <kbd>Tab</kbd> ville skrive, tilbydes mens du skriver.** Hvor hvert underelement, der starter med det, du har skrevet, bliver ved med at være enige et stykke tid, vises den enighed efter markøren, markeret; hvor de holder op med at være enige, gør trinnet mod det første af dem — eller mod den række, du pilede til, siden det er den, <kbd>Tab</kbd> ville gå efter. At skrive over et navn lader dets endelse stå og tilbyder foran den, og en mappe, der lige er trådt ind i, tilbyder sit første trin, så der findes ingen tilstand, hvor intet tilbydes, og <kbd>Tab</kbd> alligevel skriver noget. Skriv de bogstaver, og det sluges ét ad gangen; skriv noget andet, og det er væk. <kbd>Tab</kbd> eller <kbd>End</kbd> tager det hele, <kbd>→</kbd> tager ét bogstav af det, <kbd>Backspace</kbd> tager det tilbage uden at røre et bogstav, du skrev, og intet tilbydes igen, før du skriver — så der er altid en vej ud af et navn, du ikke ville have. Efter et tryk på <kbd>Tab</kbd> tilbydes det næste trin med det samme, som efter et skrevet bogstav. Det, listen viser, er filtreret af det, **du** skrev, aldrig af det, der blev tilbudt.
- **Tilbud ser bort fra store/små bogstaver.** `sch` tilbyder `Schemes`, stavet som navnet er; at tage tilbuddet tilbage giver dine bogstaver tilbage, som du skrev dem. Hvor både `Test` og `test` findes, tilbydes den, der er stavet, som du skrev den.
- I feltet er den tilbudte del ganske enkelt **markeret**. Listen er der, hvor den staves ud: hver række viser den del af den, der **matchede det, du skrev, i fed**, uanset hvor i navnet det matchede — `kick` finder `Weekly kickoff` og siger det. **Navne, der begynder med det, du skrev, kommer først**, foran dem, der blot indeholder det, og er markeret med en linje ned langs kanten: **blå** hvor de deler mere end det, du skrev, så <kbd>Tab</kbd> har noget at tilføje for dem alle, og **grøn** på den gren, tilbuddet tager, hvor de skilles — `te` med `test1`, `test2`, `text1` og `text2` tilbyder `te`+`st`, så de to `test`-rækker er grønne, og de to `text`-rækker beholder den almindelige linje. Hver af dem **understreger det trin, <kbd>Tab</kbd> ville tage mod den**, ikke kun den, der tilbydes, og understregningen følger tilbuddet, som det ændrer sig.
- **At skrive slipper den fremhævede række.** Listen åbner på det element, du står ved, men i det øjeblik du skriver, handler det om et andet sted, og en fremhævning, ingen har sat der, læses som et valg, der allerede er truffet.
- Tilbuddet er altid kun tekst foran dig: de bogstaver, du skrev, forbliver stavet, som du skrev dem, mens du skriver, og at tage tilbuddet omskriver navnet, som mappen staver det, fordi en sti skal matche disken. `sk` + <kbd>Tab</kbd> når frem til `Skyline`, ikke `skyline`.
- **Feltet bærer farven på det, det navngiver**, samme farve som dets række i listen: lilla for en note, en mappes egen note inklusive, orange for alt, der ikke er en note, blå for den note, du er på. Den række, det tager farven fra, er den, der hedder præcis det, du skrev, eller, hvis ikke, den fremhævede, eller, hvis ikke, den første, din indtastning stadig fører til.
- **Feltet bliver rødt, så snart intet svarer til det, der står i det** — ingen fil, ingen mappe, og ingen række i listen, der stadig fører derhen. Derfra gør <kbd>Enter</kbd> det, der står i feltet, i stedet for at åbne det, og det røde siger det, før du bekræfter. Det vises aldrig for en webadresse, som ikke er et sted på denne maskine at lede efter. Det er **hele** feltet, der farves, ikke kun den manglende del: et tekstfelt kan ikke farve halvdelen af sit eget indhold. I omdøb-/flyttetilstand beholder feltet sin egen røde farve til et ulovligt navn — der er pointen netop et navn, intet svarer til. At et navn **allerede er taget**, tages op, når du bekræfter det, med en dialog, der spørger, hvad der skal ske med filen i vejen — se [Et navn, der er taget](#et-navn-der-er-taget): hvert navn skrevet mod `Notes.md` passerer gennem navne, der kan være filer i sig selv, så at markere det bogstav for bogstav ville advare om et navn, ingen endnu havde bedt om.
- `/` bekræfter det segment, du er ved at skrive, og stiger ned i det, mens det, der ligger bagved, bevares — det samme, <kbd>Tab</kbd> gør, når det træder ind.
- <kbd>Backspace</kbd> i et tomt felt træder tilbage ud til den overordnede mappe og genåbner dens navn med markøren for enden. Det samme gør <kbd>Backspace</kbd> foran en endelse, der står alene — et felt, der kun holder `.md`, navngiver intet — og den ensomme endelse følger med.
- **Klik på en mappe, mens et felt er åbent, udvider det til hele stien efter den mappe**, med mappens eget navn markeret — det samme, et klik på den ville have gjort fra rækken, og alt, feltet holdt, bevares. Det, der står i feltet, er rækkens hale, mens den er åben, så en mappe klikket længere oppe giver stien tilbage, som forløbet har vandret, snarere end den, noten startede ved.
- **At pile af foran feltet tager mappen foran ind i det**, som var hele stien én linje tekst. Med markøren helt i starten tager <kbd>←</kbd> den mappe ind i feltet og lander for enden af dens navn, <kbd>Ctrl</kbd>+<kbd>←</kbd> lander i starten af det, og <kbd>Home</kbd> tager hver mappe helt op til boksens rod ind — eller op til det sted, du valgte, uden for boksen — på én gang. Hold <kbd>Shift</kbd> nede, og markeringen strækker sig over det, der kom ind. På macOS er ordspringet <kbd>Option</kbd>+<kbd>←</kbd>, og <kbd>Cmd</kbd>+<kbd>←</kbd> er <kbd>Home</kbd>. Alle andre steder end fronten er disse almindelige teksttaster. **Mens listen vises, hører <kbd>Home</kbd>, <kbd>End</kbd>, <kbd>PgUp</kbd> og <kbd>PgDn</kbd> til den** — første række, sidste række, en side op, en side ned, en side værende det, listen viser, med den fremhævede række, der beholder sin plads på skærmen — og når først teksten, når den er lukket; <kbd>Shift</kbd>+<kbd>Home</kbd> tager hver mappe ind med listen åben også.
- **Listen følger markøren.** Vælg en anden del af stien — træk over den, klik ind i den, eller pil langs den — og listen viser *den* mappes underelementer, ikke den, feltet blev åbnet på. Mappen tælles fra brikkerne plus det af feltet, der ligger foran markøren, så at klikke ind i `Notes.md` i et felt, der holder `2026/Notes.md`, viser det, der er i `2026`. At pege på en række skriver den ind i det segment, markøren er i, og at tage markøren væk fra listen giver dig din tekst og din markering tilbage, nøjagtigt som de var.
- **At trække en markering ud af feltet** og slippe et andet sted lukker det ikke. Et tryk, der starter i feltet, hører til redigeringen, uanset hvor langt det rejser; kun et tryk, der *starter* udenfor, er et klik væk.
- <kbd>Enter</kbd> bekræfter — og når feltet ikke navngiver noget som helst, som i en tom mappe, hvor der aldrig var noget at fuldføre, siger det *Ingen fil valgt* og forbliver åbent i stedet for at lukke, som var noget blevet valgt. <kbd>Esc</kbd> eller et klik et andet sted annullerer tilbage til filens rigtige sti. Ét tryk på <kbd>Esc</kbd> er nok: det lukker listen, forlader feltet og giver fokus tilbage til noten, i stedet for at tage ét tryk pr. lag.

Feltet er helt uden staffage — ingen kasse, ingen kant — så det læses som selve stiteksten, og det vokser af sig selv, mens du skriver.

## Hver del af rækken, knap for knap

Hele rækken på én gang. Højreklik-kolonnen er, hvad **ét** tryk giver dig; den
knap tæller også antal tryk, og [sin egen
tabel](#højreklik-ét-tryk-to-tryk-tre) nedenfor har det andet, tredje
og fjerde. Denne her antager, at **Mappenavnet åbner listen** er slået til,
hvilket er standarden — med den slået fra bytter mappenavnet og skilletegnet
plads i den første kolonne, som [tabellen øverst](#stien) siger.

| Hvor du trykker | Klik | Dobbeltklik | <kbd>Ctrl</kbd>+klik, eller midterklik | Højreklik | Slip noget på det |
| --- | --- | --- | --- | --- | --- |
| **Hvælvingens navn** | Åbner placeringslisten — andre hvælvinger, hjem, filsystemets rod, monterede drev. Slået fra som standard; med den slået fra afsløres hvælvingen i Filoversigten i stedet | Markerer **hele den absolutte sti**. Listen åbner med stien allerede i feltet og kun hvælvingens egen del markeret; et andet tryk udvider over resten. Intet at udvide med listen slået fra | En fane uden indhold, stående ved hvælvingens rod med listen allerede vist — et sted at skrive en sti fra bunden | Hvælvingens egen kontekstmenu: hvad der kan gøres ved hvælvingen, som segmentnavne | En **fil** flyttes til hvælvingens rod. **Tekst** åbner feltet ved roden, til at navngive den note, den skal blive til |
| Et **mappenavn** | Vælger den mappe til redigering, dens overordnedes indhold vist nedenunder | Genskriver den mappe og alt under den | Åbner den mappe i en ny fane | Den mappes kontekstmenu — Filoversigtens egen | En **fil** flyttes ind i den mappe. **Tekst** åbner feltet der, til at navngive den note, den skal blive til |
| Et **skilletegn** | Åbner mappen foran det — dens mappenote, hvor et mappenote-plugin kører og en findes, ellers afslører og udvider den i Filoversigten | **Opretter den mappes note** og går til den, hvor et mappenote-plugin kører og mappen endnu ingen har. Hvor den allerede har en, er dette blot det enkelte tryk igen | Mappenoten i en ny fane, hvor en findes; ellers en fane stående ved den mappe med listen vist | Den samme mappes kontekstmenu, som navnet giver — dens mappenotes, hvor den har en | På enden af den mappes note, hvor den har en, når du bekræfter |
| **Notens navn** | Åbner navnet til redigering — mapperne forbliver som chips ved siden af — med alt undtagen filtypen markeret | Tager filtypen med i markeringen også | Åbner noten i en ny fane | Filens kontekstmenu — den samme som Filoversigtens række giver | På enden af denne note, når du bekræfter |
| **Det tomme rum** | Åbner **hele stien** til redigering, markeret så langt som filtypen. Mapperne kommer med ind i feltet, hvilket er det, der gør dette til bevægelsen for at genskrive en sti frem for et navn | Tager filtypen med i markeringen også | <kbd>Ctrl</kbd> åbner denne note igen i sin egen fane, blinket i Filoversigten så kopien ikke forveksles med den første. Midterklik er *ikke* den bevægelse: det indsætter over stien | Markerer hele stien og tilbyder, hvad der kan gøres ved markeret tekst | |

**Det andet tryk følger det første.** Oprettelse af en mappes note ligger på,
hvilken del af rækken der *åbner* den mappe, hvilket er skilletegnet som
standard og mappenavnet med byttet slået fra — det samme mål som understregningen
markerer, og det samme som et enkelt tryk allerede beder om mappenoten. Det
tilbydes kun mens et mappenote-plugin kører, fordi en mappenote er en konvention
snarere end en kendsgerning om filsystemet, og kun hvor mappen endnu ingen har.
Hvor den ligger, og hvad den hedder, læses fra **Folder notes**' egne
indstillinger, så en hvælving, der holder sine mappenoter ved siden af mappen,
eller kalder dem `_index`, får en af dem; selve filen er altid Markdown, hvilket
er, hvad det plugins egen standard-opret-kommando laver, og hvad det finder,
uanset hvilken filtype hvælvingen er indstillet til. Omdøb-/flyttetilstand er
helt uden for dette — intet på rækken åbner en mappe, mens en flytning er
undervejs.

**Klik på navnet fortsætter.** De fire trin er de samme fire, som omdøbningstasten
går igennem, i samme rækkefølge: navnet, navnet med filtypen, stien fra
hvælvingen, stien fra systemets rod. Så et tredje klik når hvælvingens sti og et
fjerde maskinens — de samme fire ting, <kbd>Tab</kbd> forbi enden af feltet
giver dig, og de samme fire, som den højre knap *kopierer* i stedet for at
markere.

**At holde musen over** er sit eget svar og ændrer aldrig noget: et forkortet
navn vender tilbage i sin fulde længde, så længe du peger på det, og ikonet i
starten af rækken siger, hvor hvælvingen ligger.

## Højreklik: ét tryk, to tryk, tre

Hvert mål på rækken svarer på et højreklik, og hvor mange tryk du giver det,
afgør, hvad du får. Fordi et andet tryk stadig kan komme, venter det første i
omkring et trediedels sekund, før det handler — prisen for at lægge tre
bevægelser på én knap.

| Hvor du trykker | Én gang | To gange | Tre gange |
| --- | --- | --- | --- |
| **Hvælvingens navn** | Hvælvingens kontekstmenu: hvad der kan gøres ved hvælvingen, som segmentnavne — inklusive *Åbn denne hvælving*, hvor den hvælving ikke er den, du er i | Kopierer hvælvingens navn | Kopierer, hvor hvælvingen ligger — og et fjerde tryk, hvor den åbne fil ligger |
| Et **skilletegn** | Den mappes menu — dens mappenotes, hvor et mappenote-plugin kører og mappen har en | | |
| Et **mappenavn** | Den mappes menu | Kopierer mappens navn | Kopierer den og alt til højre for den |
| **Notens navn** | Filens menu — den samme som Filoversigtens række giver | Kopierer navnet | Kopierer det med filtypen |
| **Det tomme rum** | | Kopierer stien fra din hvælvingsmappe, uden filtypen | Det samme, med den |

Et enkelt tryk på **hvælvingens navn** åbner, hvad der kan gøres ved, hvad det
segment navngiver. For **hvælvingen du er i**: åbn den i et nyt vindue, håndtér
hvælvinger, kopiér hvor den ligger, kopiér dens ID, vis den i din filhåndtering.
For **en anden hvælving**, nået gennem placeringslisten, det samme minus det nye
vindue — som ville åbne *denne* hvælving, ikke den — plus den ene ting kun en
hvælving, du ikke er i, kan tilbyde: **Åbn denne hvælving**. Den navngives til
Obsidian ved sit ID snarere end ved sit mappenavn, da to hvælvinger kan dele et.
For et sted, der slet ikke er en hvælving — din hjemmemappe, et monteret drev —
er der intet ID at kopiere og intet at åbne, og menuen siger det ved ikke at
tilbyde dem.

Dette er ikke Obsidians egen tre-prikkers-menu, som hører til startvinduet og
ikke kan åbnes inde fra en kørende hvælving — dette er de samme punkter
genopbygget, i Obsidians eget ordvalg, taget fra dets kommandoer, så de ankommer
på dit sprog. Tre af den menus punkter er bevidst **ikke** her: *omdøb hvælving*,
*flyt hvælving* og *fjern fra liste* handler alle på hvælvingens egen mappe
eller på Obsidians register over hvælvinger, og at gøre det ved den hvælving,
du står i — med dens filer åbne og dens overvågere kørende — er sådan en
hvælving går i stykker. Åbn hvælvingshåndteringen (*Åbn en anden hvælving*) og
gør det der, hvor hvælvingen er lukket.

De to kopieringer på **det tomme rum** er rækken, som den er skrevet — hvad et
link eller en søgning ønsker — og dem på **hvælvingens navn** er de stier,
filsystemet kender, hvilket er, hvad alt uden for Obsidian ønsker. Hvert tryk
der udvider, hvad kopien er god til: to giver hvælvingens navn, tre hvor
hvælvingen ligger, fire hvor den åbne fil ligger. Obsidian drager det samme
skel i sine egne to kommandoer, *from vault folder* og *from system root*; her
sidder de udadvendte på det segment, der selv er uden for stien.

Alt dette virker også uden for hvælvingen, på de samme mål.

Hver kopiering siger det i en meddelelse, fordi en kopiering ikke efterlader
noget på skærmen, der viser, at det skete, og et fejltalt tryk bør ikke se ud
som et vellykket et.

## Modifikatorer: åbn det et andet sted

Notens navn og mappesegmenterne opfører sig som deres rækker i Filoversigten.

| | På notens navn | På et mappesegment |
| --- | --- | --- |
| Almindeligt klik | Redigér navnet | Gennemse den mappe |
| <kbd>Ctrl</kbd> / midterklik | Åbn noten i en ny fane | Send mappen til en ny fane |
| <kbd>Ctrl</kbd>+<kbd>Alt</kbd> | En opdeling | En opdeling |
| Træk | Noten, hvorhen som helst Obsidian tager en fil | Mappen, ligeledes — fanebjælken inklusive |

En mappe er ikke noget, Obsidian kan åbne, så at sende en til en fane gør en af
to ting: åbner dens mappenote, hvor et mappenote-plugin kører og der er en,
eller åbner en tom fane, hvis stibjælke allerede står i den mappe — kun
efterladende dig navnet at skrive. At slippe et mappesegment på **fanebjælken**
gør det samme, i en ny fane hvor du slipper — Obsidians fanebjælke tager kun
filer på egen hånd, så en mappe trukket ud af Filoversigten afvises stadig der.

## Tab: fuldfør navnet, så stien, og udvid derefter markeringen

<kbd>Tab</kbd> fuldfører, ligesom en shell gør det: **et tryk forlænger det, du har skrevet, så langt som navnene i den mappe er enige, og standser der, hvor de er uenige.** Skriv `Sk`, hvor kun `Sketches` starter sådan, og ordet er færdigt; skriv `Al`, hvor både `Alpha-one`, `Alpha-two` og `Alpine` gør det, og du får `Alp`, fordi det næste tegn er et spørgsmål, kun du kan besvare.

Tryk igen uden at skrive, og det bevæger sig mod ét navn — den række, listen har fremhævet, eller den første — og standser ved det navns næste uklarhed: `Alpha-`, derefter `Alpha-one`. Listen åbner der, hvor du allerede er, så i din egen mappe sigter det første tryk mod den note, du har åben, frem for hvad end der sorteres først.

**Et tryk vælger aldrig mellem navne for dig.** <kbd>Tab</kbd> træder ind i en mappe, når det, du har skrevet, kun efterlader én kandidat, eller når du har skrevet mappens fulde navn, og ingen *anden mappe* forlænger det. Hvor én gør — `Schemes` ved siden af `Schemes2026` — bliver <kbd>Tab</kbd> ved med at fuldføre mod det længere navn; <kbd>Enter</kbd> og listen er de handlinger, der betyder *netop denne*.

En **fil** holder aldrig en mappe tilbage på den måde. En mappe ved siden af en note med samme navn er en mappenote, ikke en gaffel i stien, og <kbd>Tab</kbd> går gennem mapper — så `Projects` med `Projects.md` ved siden af trædes der ind i som enhver anden.

To mindre ting følger af det: det, der lander i feltet, er stavet, som mappen staver det, så `sk` bliver til `Sketches`; og kun det navn, der skrives, bliver erstattet, så en sti med mere til højre for det beholder det.

Med et navn tilbudt, mens du skriver, **skriver <kbd>Tab</kbd> nøjagtigt tilbuddet**: tilbuddet er altid det, trykket ville skrive, og listens understregning og grønne linje siger det samme, så det, du ser efter markøren, er det, du får. Hvor navnene holder op med at være enige, er det trinnet mod det første af dem — eller mod den række, du er gået til med piletasterne, som <kbd>Tab</kbd> tager i stedet for den ved siden af — så gå til den, du vil have, med piletasterne, eller skriv forbi gaflen, før du trykker. Kun hvor tilbuddet efterlader *ét* navn, træder det samme tryk ind i det.

At nå frem til filens navn **er** det første trin — intet tryk bruges på at parkere markøren for enden af et navn, det er ved at markere. Herfra holder trykkene op med at bevæge sig langs stien og begynder at udvide det, der er markeret:

1. navnet
2. navnet med dets filtype
3. stien fra din boks-mappe
4. stien fra systemets rod
5. tilbage til stiens begyndelse **som den nu ser ud** — stående dér, hvor gangen begyndte, med første segment markeret, klar til at blive gennemgået igen

Et fjerde klik når det samme fjerde trin direkte.

Udvidelse **udvider** altid kun. Et navn, der allerede er helt i feltet — fuldført med samme tast, eller valgt fra listen — bliver markeret i sin helhed frem for først at få filtypen taget af igen: det første trin er til et navn, gangen lige er *nået frem til*, hvor filtypen endnu ikke er emnet.

Stigen er der, hvor gangen **ankommer**, ikke der, hvor den starter. Klik på en mappe midt i en sti, og feltet åbner på alt under den med den mappes navn markeret; hvert <kbd>Tab</kbd> tager derefter **én** mappe — markerer den næste, og beholder resten af stien bag den — og først når intet andet end filnavnet er tilbage, begynder udvidelsen:

| tryk | chips | felt | markeret |
| --- | --- | --- | --- |
| klikkede `a` | | `a/b/c/leaf.md` | `a` |
| <kbd>Tab</kbd> | `a` | `b/c/leaf.md` | `b` |
| <kbd>Tab</kbd> | `a › b` | `c/leaf.md` | `c` |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf` — det første trin |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf.md` |

**Et navn, der er sat ind, er sat ind, uanset hvordan du satte det ind.** At fuldføre det med
<kbd>Tab</kbd>, bekræfte det med `/`, og vælge det fra listen
efterlader alle sammen rækken samme sted med samme sti, så trykket efter
handlingen betyder det samme, uanset hvordan du kom dertil. At vælge en mappe fra
listen plejede i stedet at tømme feltet og kasserede en sti, som det ville have bevaret
at nå den samme mappe med <kbd>Tab</kbd>.

**En sti, du stadig er ved at skrive, følger med i sin helhed.** At træde ind i netop den mappe, resten af stien hænger fra, er ikke en påstand om, at resten findes — det er sådan en sti bliver skrevet forud for sig selv, og de mapper, den nævner, er dem, <kbd>Enter</kbd> er ved at oprette. Så at gå ned gennem `Dokumente/plans/untitled.md` og ind i `Dokumente` beholder `plans/untitled.md` foran dig, uanset om `plans` findes endnu eller ej. Det samme gælder for en sti, du har skrevet fra bunden: intet af den blev arvet nogen steder fra, så intet af den bliver taget væk.

**At bytte ét trin ud med et andet er en anden historie, og så følger stien kun med, så langt som den reelt er der.** Byt en mappe midt i en sti ud med en søskende — klik på `a`, skriv et andet navn, tryk <kbd>Tab</kbd> — og alt under den følger med, fordi den sti, du var på, som regel er det meste af den sti, du vil have. Kun det, der eksisterer derovre, overlever dog flytningen, så feltet og listen ved siden af det aldrig er uenige: det, der er tilbage foran dig, er en sti, du reelt kunne gå. Med udgangspunkt i `a/b/c/leaf.md`, hvor `a` er klikket og dets navn markeret:

| hvad du sætter ind | chips | felt | markeret |
| --- | --- | --- | --- |
| `x`, som slet ikke har en `b` | `x` | | intet fulgte med |
| `y`, som har en `b`, men ikke en `c` i den | `y` | `b` | `b` |
| `z`, en tvilling af `a` hele vejen ned | `z` | `b/c/leaf.md` | `b` |

En mappe, der bliver stående alene på den måde, er stadig en mappe at gå ind i: trykket efter det træder ind i den, frem for at begynde at udvide en markering over dens navn.

Et navn, **intet** i mappen matcher, besvares anderledes, fordi intet er blevet sat ind af det: trykket markerer det, du skrev, klar til at du skriver over det, i stedet for at svare med et andet sted.

Det hele er en **løkke, og det koster ingenting at gå den rundt**: trykket efter det sidste trin giver rækken tilbage til stiens begyndelse, mapper og det hele, klar til at gå den rundt igen. Det eneste, der nogensinde forlader rækken, er det absolutte præfiks, ved det tryk, der holder op med at vise det.

Det, der kommer tilbage, er **den sti, du har bygget**, ikke den, du startede fra. Grener gangen halvvejs — vælg en anden søskende fra listen, fuldfør mod et andet navn — og runden slutter der, hvor du reelt er; de fire foregående trin beskriver den samme sti, og dette trin plejede at være det trin, der beskrev fortiden.

<kbd>Shift</kbd>+<kbd>Tab</kbd> lukker den samme ring den anden vej rundt: ved stiens begyndelse, hvor der ikke er mere at give tilbage, og intet længere oppe, går det næste tryk i løkke til det **fjerneste** trin — stien fra systemets rod — og fortsætter med at indsnævre derfra. Ingen af retningerne ender blindt.

Det bruger heller aldrig et tryk på et trin, det allerede har vist. Under det sidste trin — navnet uden dets filtype — er stigen forbi, og *det samme tryk* forlader mappen: stien fra systemets rod, stien fra din boks, navnet, navnet uden dets filtype, så mappen, ét skridt ad gangen.

Der bliver heller ikke brugt et tryk på et trin, der ikke ændrer noget: at klikke på en notes navn viser det allerede uden dens filtype, hvilket er det, det første trin viser, så derfra begynder <kbd>Tab</kbd> ved det andet.

Hvert trin ændrer det, der *er* i feltet, ikke kun det, der er fremhævet — en markering skal være over den tekst, den navngiver, ellers ville <kbd>Enter</kbd> bekræfte noget andet, end det, du kan se er markeret. Stigen hører til én redigeringssession: klik væk, eller skriv hvad som helst, og næste <kbd>Tab</kbd> fuldfører et navn igen.

### <kbd>Shift</kbd>+<kbd>Tab</kbd>: den samme vej baglæns

<kbd>Shift</kbd>+<kbd>Tab</kbd> tager ét skridt tilbage per tryk, i den rækkefølge trykkene blev foretaget: markeringen indsnævres ét trin ad gangen, hver fuldførelse gives tilbage, og hver mappe trædes ud af — dens navn vender tilbage til feltet, så du kan redigere det frem for at skrive det igen.

**Intet slettes på vejen tilbage.** En fuldførelse gives tilbage ved at *markere* de tegn, den tilføjede, nøjagtig som det at gå fremad markerer det, den har udvidet over — navnet forbliver foran dig, og hvert yderligere tryk markerer ét skridt mere af det:

| | felt | markeret |
| --- | --- | --- |
| gik ind | `Alpha-one` | |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `ha-one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `Alpha-one` |

At skrive erstatter den markerede del, som alle andre steder. <kbd>Tab</kbd> sætter nøjagtig det tilbage, som markeringen gav tilbage, så at gå to skridt ud og to skridt ind igen bringer dig tilbage, hvor du var.

Når hele navnet er markeret, er der intet tilbage, som et tryk har sat der, og det næste tryk går *op ad stien*: det forlader den mappe, du står i, nøjagtig som <kbd>Backspace</kbd> gør i et tomt felt. Det koster heller ikke noget — mappens navn kommer tilbage i feltet **foran** det, der var i det, markeret, hvilket er den samme tekst, et klik på den mappe ville have givet dig. Tilbage er en retning frem for en fortrydelseshistorik — men at markere navnet først betyder, at ét tryk aldrig både tager det, du skrev, tilbage og fører dig ud af den mappe, du skrev det i.

Tekst, der åbner **allerede markeret** — det, et mappeklik efterlader efter sig — er det navn, <kbd>Tab</kbd> arbejder videre på: det fuldføres og trædes ind i som alt andet, og at skrive erstatter det. Kun fokus-kommandoen åbner på et trin i stigen selv, fordi den viser dig hele stien frem for en mappe at gå ind i.

## At skrive noget, der ikke er en sti

| Hvad du skriver | Hvad der sker |
| --- | --- |
| `https://…` | Åbnes i en ny fane i Obsidians **Web viewer**, hvis du har det kerne-plugin slået til; ellers din computers browser |
| `obsidian://…` | Overgives til Obsidians egen URI-håndtering |
| `file:///…` | Afkodes og åbnes: som en rigtig note, hvis den er inde i din boks, i visningen hvis ikke |
| `/home/you/a%20b.md` | Det samme, for en sti indsat fra en browser eller filhåndtering |

Kun eksplicitte skemaer tæller — en note ved navn `100%20` er stadig en note. En `/`, der hører til et skema, forbliver bogstavelig frem for at stige ned i en mappe, så en URL kan skrives i hånden og ikke kun indsættes.

## En kommando til tastaturet

**Fokusér stilinjen** åbner feltet på notens navn og gennemgår det på samme måde som <kbd>F2</kbd> — navnet, navnet med dets filtype, stien fra din boks, stien fra systemets rod — og trykket efter det lukker feltet og sætter markøren tilbage i noten. Det omdøber ikke: Enter navigerer, som i ethvert andet felt. Den har ingen egen tast som standard, fordi Obsidians retningslinjer fraråder plugins at gøre krav på én; rækken **Genvejstaster** i slutningen af dette plugins indstillinger åbner *Indstillinger → Genvejstaster* og viser kun dets kommandoer, så du kan tildele den der.

## Navigation rører aldrig den åbne fil

I standardtilstanden (navigation) bliver den åbne note **aldrig** omdøbt eller flyttet.

- En sti, der peger på en eksisterende fil, åbner den.
- En sti, der endnu ikke findes, bliver simpelthen oprettet, sammen med eventuelle manglende overordnede mapper, og åbnet. Hver fil og mappe, der oprettes på denne måde, siges der besked om i en notifikation — en ny mappe er ellers usynlig, indtil du går og leder efter den — og Obsidians egen papirkurv gør en uønsket en til et tastetryk at fortryde.
- **Uden for din boks spørger den stadig først.** Derude skriver den samme tastefejl ind i en systemmappe, hvor hverken notifikationen eller Obsidians papirkurv er megen trøst.

## <kbd>Ctrl</kbd> — ny fane, og kopiér i stedet for at flytte

En note **oprettet, flyttet eller kopieret inde i boksen bliver vist der, hvor den landede** i filstifinderen, kortvarigt markeret i Obsidians accentfarve — træet er der, hvor du leder efter den bagefter, så den bliver placeret foran dig frem for efterladt i en mappe, der måske ikke engang er åben. Duplikering siger det samme: en kopi efterlader originalen, hvor den var, og åbner kopien i sit eget panel, hvilket uden et ord er let at læse som, at intet er sket.

At holde <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> på macOS) nede, mens du vælger en fil fra listen, eller mens du trykker <kbd>Enter</kbd> på en sti, sender resultatet til en **ny fane** i stedet for til denne:

| | Uden tast | Med <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Vælg eller skriv en eksisterende fil | Åbnes her | Åbnes i en ny fane |
| Skriv en sti, der ikke findes | Spørger, åbner derefter her | Spørger, åbner derefter i en ny fane |
| Bekræft en sti i omdøb-/flyttetilstand | **Flytter** noten derhen | **Kopierer** den derhen og åbner kopien i en ny fane |

Tasten læses med Obsidians egen regel, så den opfører sig præcis som på et link eller en række i filstifinderen — midterklik betyder også "ny fane", <kbd>Ctrl</kbd>+<kbd>Alt</kbd> betyder en opdeling, og <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> et nyt vindue.

Kopiering nægter at overskrive, nøjagtig som flytning gør — også oven på notens egen sti, hvor der ikke er noget fornuftigt at kopiere. Uden for boksen bliver det afslag også sagt højt.

Det hele fungerer **med listen åben** såvel som uden den: på en fremhævet række gælder tasten den række, og stående på intet gælder den det, du har skrevet.

## At browse uden for boksen

**Dette er slået fra som standard.** Slå først **Adgang til eksterne filer** til i indstillingerne — at læse og skrive uden for boksen er det eneste, dette plugin gør, som Obsidian selv ikke gør, så man vælger det til frem for fra. Med det slået fra viser boksnavnet blot din boks i filstifinderen, og intet her kigger nogensinde ud over den.

Klik på **boksens navn** (eller 🏠-ikonet, når *Vis boksens navn* er slået fra) åbner en dropdown med steder frem for indhold. Feltet, det åbner, indeholder **hele den sti, du var på, skrevet helt ud**, med det sted, den starter fra, markeret — så at vælge et andet sted, eller skrive hen over markeringen, bytter kun den forreste del ud og efterlader resten af stien foran dig. **Tryk på navnet endnu en gang** — et dobbeltklik — og markeringen udvides over det hele, hvilket er sådan, den absolutte sti tages i én handling frem for at blive fejet over i hånden. Fortryd, og <kbd>Esc</kbd> sætter linjen tilbage, som den var.

Skrivning her tilbydes resten af et steds navn som alle andre steder, og <kbd>Tab</kbd> **sætter det sted ind** — det, du peger på, eller det, navnet kun kan betyde. Hvor flere steder stadig deler det, du har skrevet, stopper trykket ved forgreningen, som det gør alle andre steder. At pege på et sted viser **det steds egen sti**, hele den markeret, efterfulgt af din notes sti kun så langt, som den rent faktisk går derovre — hvilket er præcis det, at vælge det ville lande dig på. Et sted er ikke et trin inde i stien på skærmen, men et sted at tælle hele stien fra, så intet af, hvor du var, forbliver foran det.

Stederne, der tilbydes:

- **Dine andre bokse**, læst fra Obsidians eget register, senest åbnede først, hver under Obsidians eget boksikon — det, applikationen selv bruger til bokskommandoer. Den boks, du allerede har åben, får et hus i stedet: det er der, linjen begynder som standard, ikke et sted at tage hen.
- **Hjemmemappen**, under sit eget kontonavn, markeret med et `~`. Lucide har ingen tilde, så denne tegnes af plugin'et på Lucides eget 24×24-gitter med samme streg — et ikon, sættet mangler, frem for et skrifttegn blandt ikoner.
- **Filsystemets rod**, mærket `root` — uoversat, for sådan hedder den på ethvert system — frem for `/`, som ville læses som et tomt trin ved siden af det skilletegn, der følger.
- **Monterede drev**, med et ikon pr. type, hvor det er billigt at afgøre: netværksdrev, optiske skiver, disketter og flytbare medier får deres eget; alt andet får et generisk drev. På Windows vises drev som `C:` med et generisk ikon — diskenavne og præcise typer kræver WMI, hvilket bevidst ikke gøres.

At vælge en anden boks **skifter ikke Obsidian over til den.** Alt, du har åbent, forbliver åbent; stilinjen begynder blot at browse der. Det er hele pointen med at have det på stilinjen frem for at overlade det til sidepanelets boksskifter.

Det lander også **så tæt på den note, du er på, som det pågældende sted rent faktisk går**.

- Hvis det sted, du valgte, *indeholder* noten — hjemmemappen, eller hvor end dine bokse bor — får du dens sti derfra: vælg `~` med `takeaways.md` åben, og feltet læser `Vaults/your-vault/takeaways.md`.
- Hvis det er et sted ved siden af det nuværende — en anden boks, et andet drev — forsøges den samme relative sti, så dybt som den rent faktisk findes. Bokse er ofte næsten-kopier af hinanden, og grunden til at hoppe til en anden er som regel den samme note derovre.

Under alle omstændigheder forbliver linjen ved det sted, du valgte, og **den første mappe i den sti åbnes markeret**, samme form som at klikke på en mappe giver: det trin, du mest sandsynligt vil ændre, når du hopper et andet sted hen, er det nærmest toppen, og resten af stien forbliver synlig, mens du ændrer det. Intet udfyldes nogensinde på forhånd, som ikke rent faktisk findes på disken.

### Mens du er udenfor

Stien **begynder ved det sted, du valgte**, ikke ved maskinens mappelayout — og det gør det felt, du får ved at klikke på det tomme rum eller trykke på fokustasten, også: det indeholder stien fra det sted, ikke maskinens absolutte, med sporet foldet sammen til stedet selv, præcis som det foldes sammen til boksens rod derinde — vælg `Archive`, og linjen læser `Archive / notes / …`, ikke `/home/dig/Vaults/Archive/notes/…`. Det forreste segment bærer et ikon for, hvad det er (boks, hjemmemappe, drev), og <kbd>Backspace</kbd> stopper der frem for at gå videre op i resten af filsystemet. Med *Vis boksens navn* slået fra er det segment ikonet alene — indstillingen handler om linjens indledende segment, uanset hvilken boks det navngiver, ikke kun din egen.

Stilinjen er **indrammet i fejlfarven** — den samme ring, som omdøbningstilstanden tegner — så længe den peger uden for din boks. Den markerer en vedvarende tilstand, ikke et øjeblik: så længe den er der, gælder ingen af Obsidians egne håndteringer det, linjen viser, og skrivning er låst, indtil du siger andet.

Browsing virker ellers som derinde: brikker, skilletegn, skrivning, autofuldførelse, <kbd>Backspace</kbd> for at træde ud. De samme synlighedsregler gælder også, så filendelser, der ikke understøttes, kræver stadig Obsidians *Vis alle filtyper*, og skjulte filer kræver stadig dette plugins indstilling.

**Højreklik virker også derude**, dog er det en anden menu: filstifinderens egne håndteringer kræver en fil, boksen kender til, så punkter uden for boksen bygges ud fra stien i stedet. De tilbyder at åbne (her, til højre, i et nyt vindue, eller i skrivebordets standardprogram), *Kopiér sti*, *Vis i systemets filhåndtering*, og — når hængelåsen først er åben — *Ny note*, *Ny mappe*, *Lav en kopi*, *Omdøb…* og *Slet*. **Træk** kræver stadig en boksfil og forbliver utilgængeligt.

Den samme menu findes på den åbne fil i fremviseren, via højreklik eller fra rudens egne tre prikker, og den spørger hængelåsen i den visnings overskrift. Den spørger om intet andet: om filen bliver gengivet eller vist som kilde, har ingen betydning for, om den kan slettes, og et billede eller en PDF — som slet ikke har nogen kildevisning — kan slettes ligesom en note. *Slet* betyder skrivebordets papirkurv, så det kan fortrydes derfra; et system uden papirkurv melder det i stedet for at destruere filen.

At slette uden for boksen flytter filen til dit **systems papirkurv** — Papirkurven på Windows, Papirkurv på macOS — aldrig et unlink. Herude er der ingen Obsidian-papirkurv at gendanne fra, så en sletning, der ikke kunne fortrydes, tilbydes slet ikke: hvor en platform ikke har nogen papirkurv, melder forsøget fejlen i stedet.

### At skrive uden for boksen

Alt, der skriver, er **låst som standard**. Så længe linjen peger uden for din boks, er omdøbningsknappens plads i overskriften taget af en **rød hængelås** — samme farve som ringen omkring linjen, og af samme grund: den markerer en afvisning. De to er én kontrol i én plads, så der er aldrig tvivl om, hvilken af dem der spærrer for hvad.

Tre tryk, i en cyklus:

| Tryk | Hvad du får |
| --- | --- |
| Den røde hængelås | Skrivning her er tilladt. Hængelåsen erstattes af omdøb-/flyt-knappen |
| Knappen | Omdøb-/flyttetilstand, præcis som inde i boksen |
| Knappen igen | Tilstanden ophører, og hængelåsen lukker igen — tilladelsen overlever ikke det, den blev åbnet til |

**Omdøbningstasten spørger også hængelåsen.** Uden for din boks blinker et tryk på den hængelåsen op og i igen, frem for at åbne en tilstand, som ethvert commit alligevel ville afvise: afvisningen kommer før arbejdet frem for efter det. Tryk på hængelåsen, eller tryk på omdøbningstasten igen inden for et halvt sekund — det andet tryk giver præcis det, knappen giver, for dette sted, og åbner omdøbningstilstanden med det.

Inde i din boks er der ingen hængelås: der er intet at låse op, og knappen har blot pladsen.

Tilladelsen gives **til et sted, ikke til et øjeblik**: den overlever alt, du ville gøre, mens du arbejder ét sted — at afslutte en flytning, at klikke væk fra feltet, at åbne en fil — og ophører, når du vælger en anden boks, drev eller rod fra dropdown-menuen, når linjen vender tilbage til en boksfil, eller ved det tredje tryk. Så en række flytninger inden for én mappe kræver ét tryk, ikke ét pr. fil.

Med hængelåsen åben opfører stilinjen sig derude, som den gør derinde:

| Handling | Resultat |
| --- | --- |
| Skriv et navn, der ikke findes, <kbd>Enter</kbd> | Samme "opret den?"-spørgsmål som derinde; manglende mapper oprettes også. Et navn uden filendelse bliver en `.md`, præcis som derinde |
| Omdøb-/flyttetilstand, skriv et nyt navn | Omdøber den fil, linjen viser. Et navn uden filendelse beholder filens egen — herude rummer en mappe alle slags filer, og en omdøbning skal ikke stiltiende gøre en `.png` til en `.md` |
| Omdøb-/flyttetilstand, browse videre, vælg **behold dette navn** | Flytter den derhen under det navn, den allerede har |
| Hold <kbd>Ctrl</kbd> nede ved en af dem | Kopierer i stedet for at flytte og åbner kopien i en ny fane |

Låst melder alle disse, hvad der blokerer dem, i stedet for at ske. Intet bliver nogensinde overskrevet i nogen af tilstandene: et mål, der allerede findes, afvises, og afvisningen er filsystemets egen (`COPYFILE_EXCL`, en eksklusiv oprettelse) frem for et tjek, der kunne tabe et kapløb. En flytning på tværs af filsystemer — fra en USB-nøgle, fra et netværksdrev — falder tilbage på kopiér-derefter-slet, og originalen fjernes først, når kopien er landet.

**At flytte en note *ud* af din boks spørger først.** `fileManager` kan ikke følge en fil over den grænse: hvert link, der peger på noten, holder op med at kunne opløses, intet opdaterer dem, og noten forlader boksens indeks. Så flytningen tilbydes som en beslutning frem for at blive afvist eller udført i stilhed — en dialog angiver, hvad det koster, og hvor mange noter der linker til den, du flytter. Bekræft, og den flytter rent faktisk: kopieret ud, derefter fjernet fra boksen gennem Obsidians egen sletning, så den kan gendannes præcis som en slettet note kan, og en fejl ved et af trinene efterlader noten, hvor den var. At holde <kbd>Ctrl</kbd> nede kopierer den stadig ud i stedet, hvilket ikke har det problem. Den anden vej — at hente en ekstern fil *ind* i boksen — er endnu ikke understøttet.

### At åbne en ekstern fil

At browse filsystemet kan gå tilbage **ind i den boks, du har åben** — fra roden, fra hjemmemappen, fra hvor end dine bokse bor. En fil, man når frem til på den måde, er en almindelig note, så den åbnes som en: den rigtige editor, links og tilbagelinks, og linjen springer tilbage til den boksbaserede sti. Kun filer, Obsidian ikke har nogen visning til, forbliver i forhåndsvisningen, for derude er forhåndsvisningen det bedre svar. Hvor en forhåndsvisning alligevel viser sådan en note — et genåbnet arbejdsområde, for eksempel — tilbyder dens øverste linje **Åbn i *(boks)***, hvilket er det samme tilbud, som gives i hånden.

Obsidians editor virker kun på filer inde i boksen, så en ekstern fil **kan ikke** åbnes som en rigtig note med links, tilbagelinks og resten — det er en begrænsning i programmet, ikke i dette plugin. At vælge en åbner i stedet en **forhåndsvisning**, skrivebeskyttet indtil du siger andet:

| Type | Vises som |
| --- | --- |
| `.md`, `.markdown` | Gengivet Markdown |
| `.html`, `.htm`, `.xhtml` | Den gengivne side |
| Billeder, lyd, video, PDF | Indbygget afspiller/fremviser |
| Enhver anden **tekst**fil (`.json`, `.css`, `.log`, `.txt`, …) | Ordret almindelig tekst |
| Binære formater uden fremviser (`.zip`, `.exe`, …) | Overlades til *Åbn i standardprogram* |

Fremviseren har to læsninger af en fil, og da de udelukker hinanden, vises kun den, du ville skifte **til**:

| | Hvad den gør | Standard for |
| --- | --- | --- |
| **Vis som Markdown** | Gengiver filen som en note, skrivebeskyttet | `.md`, `.markdown` |
| **Vis som side** | Gengiver filen som den side, den er, skrivebeskyttet | `.html`, `.htm`, `.xhtml` |
| **Rediger som tekst** | Kilden, redigerbar | alt andet |

Uden for boksen er **Rediger som tekst** også det tryk, der ophæver skrivebeskyttelsen — tilstanden og tilladelsen er én handling frem for to knapper at holde styr på. Den er rødtonet, **hver gang et tryk ville ophæve skrivebeskyttelsen**, uanset om du klargør redigering på stedet eller kommer direkte fra den gengivne visning; inde i boksen er der intet at låse op, så der er den almindelig. **Vis som Markdown** får et let accentfarvet skær — den samme tone, Obsidian giver markeret tekst — hvilket markerer den som vejen tilbage frem for en opfordring.

Fordi knappen følger *redigeringen* frem for den rå tilstand, tilbyder en fil, der ligger skrivebeskyttet i tekstvisningen, stadig **Rediger som tekst**: det er trykket, der klargør den. En fil, der aldrig kan skrives i — forkortet eller ulæselig — siger **Vis som tekst** i stedet, for det er alt, trykket kan levere.

Standarderne vender den nyttige vej frem for den bogstavelige: et `#` i et shell-script er en kommentar, ikke en overskrift, så at gengive en `.log` som Markdown ville stiltiende sluge det. Begge standarder kan tilsidesættes pr. fil, og valget går ind i fanens historik, så frem/tilbage og et genåbnet arbejdsområde beholder det — masser af noter bor i `.txt`-filer, og masser af `.md`-filer er lettere at læse som kilde.

#### Hvad en HTML-side har lov til at gøre

Intet. Siden vises i en ramme med **enhver tilladelse tilbageholdt** — ingen scripts, ingen formularer, ingen navigation, ingen egen oprindelse — og en indholdspolitik, der ikke tillader den nogen netværksadgang overhovedet. Det er ikke forsigtighed for forsigtighedens skyld: en lokal side, indlæst på den almindelige måde, ville dele dette vindues oprindelse, og dette vindue er Obsidian, så et script i en downloadet HTML-fil ville køre inde i din app med din apps rækkevidde.

Hvad det koster, er alt det, siden *gør*; hvad det bevarer, er alt det, siden *er*. Stilarkene og billederne, der ligger ved siden af filen, læses ind og bæres med ind i rammen, så en gemt side stadig ligner sig selv. Referencer, der peger uden for sidens egen mappe, og referencer til et sted på nettet, efterlades præcis som skrevet og indlæses simpelthen ikke — en lokal fil kan ikke stiltiende fortælle en server, at du åbnede den.

Scripts **fjernes** frem for blot at blive blokeret, så den side, du ser, og den kilde, du kan skifte til, adskiller sig på én angivet måde frem for på hvad som helst, rammen i stilhed nægtede at køre. Links inde i siden gør ingenting. Når du vil have det ægte — scripts, netværk og det hele — overlader *Åbn i standardprogram* den til din browser, som er det rette værktøj til det.

**Filer i din boks kan redigeres med det samme**, uden oplåsning: *Rediger som tekst* er en rigtig editor og skriver tilbage, mens du skriver.

**Redigeringen huskes hen over skiftet.** At gå til *Vis som Markdown* sætter den på pause — en statisk gengivelse har intet at skrive i, og Live Preview kræver Obsidians egen editor, som kun findes for filer inde i boksen — så intet påstår, at du redigerer, mens du er der. At gå tilbage til *Rediger som tekst* tager fat, hvor du slap.

**Filer uden for boksen åbnes skrivebeskyttet, og *Rediger som tekst* ophæver det.** Trykket er hele porten: indtil det sker, skrives intet derude. Bagefter gemmes filen, mens du skriver, præcis som en i boksen; og statuslinjen skifter fra en lås til en blyant. Oplåsningen dækker den ene fil i den ene fane — at navigere til en anden fil låser igen, og den gemmes bevidst ikke i fanens historik, så et genåbnet arbejdsområde kommer aldrig tilbage med skrivning allerede klargjort på en systemfil, du ikke husker at have åbnet.

**Forkortede filer forbliver skrivebeskyttede uanset** — at gemme det, der er på skærmen, ville kassere alt ud over grænsen, så knappen tilbydes slet ikke frem for at blive tilbudt og afvist. Det samme gælder en fil, der ikke kunne læses: der er intet at skrive tilbage ud over en tom rude.

Hvis skrivningen mislykkes — et skrivebeskyttet drev, en fil du ikke ejer — vises systemets egen begrundelse i en besked.

Meget store filer vises forkortede, og statuslinjen siger det frem for at lade dig finde ud af det — ved siden af de øvrige forhold frem for efter knapperne, for det er en kendsgerning om filen som de andre. Grænserne måles mod en levende gengiver frem for at blive gættet — at sætte en megabyte tekst op i én rude dræber Obsidians gengivelsesproces fuldstændig, og Markdown koster flere gange mere pr. byte end almindelig tekst, så de to har hver sin grænse, og en enkelt enorm linje forkortes, selv når filen som helhed er lille.

**Statuslinjerne er etiketter, og forklaringen er et værktøjstip.** Hver linje siger, hvad der er sandt, med så få ord som muligt — *Uden for boksen*, *Ingen editor til denne filtype*, *Forkortet — filen er for stor* — for knapperne ved siden af dem siger allerede, hvilken tilstand filen er i. At holde markøren over en giver sætningen: hvorfor Obsidian ikke kan åbne den som en note, hvad der ellers ville ske med denne filtype, hvad forkortelsen koster dig.

Dette gælder også filer **inde** i din boks. Obsidian overlader enhver filendelse, den ikke har en visning til, direkte til skrivebordets standardprogram — så en `.txt` eller `.json` i din boks ville forlade Obsidian helt. Sådanne åbnes nu i den samme fremviser, med den orange ring, for "åbn den i Obsidian" er det, du bad om — og som boksfiler kan de redigeres der uden nogen oplåsning. Binære filer uden fremviser beholder Obsidians adfærd; der er intet at vise.

Forhåndsvisningen åbnes **i den fane, du var i**, så frem/tilbage fører dig tilbage til den note, du kom fra; hold <kbd>Ctrl</kbd> nede for en ny fane som alle andre steder. Overskriftslinjen bliver ved med at vise den eksterne fils sti, mens den er åben, så du kan browse videre derfra.

En stilfærdig linje over indholdet tilbyder vejene ud:

- **Åbn i *(boks)*** — vises, når filen hører til en af dine andre bokse. Overlader den til Obsidians egen URI-håndtering, som åbner den boks' vindue med noten i den, som en rigtig redigerbar note. Dette vindue efterlades præcis som det var; intet skifter under dig.
- **Vis som Markdown** / **Vis som side** / **Rediger som tekst** — de to læsninger, denne fil har; den sidste ophæver også skrivebeskyttelsen uden for boksen.
- **Åbn i standardprogram** — overlader filen til dit skrivebords standardprogram, herunder de binære formater, denne fremviser ikke kan vise. Formuleret præcis som Obsidians eget punkt for samme handling, for det er den samme handling.

Fremviseren besvarer også et **højreklik**: inde i teksteditoren med *Klip* / *Kopiér* / *Sæt ind* / *Vælg alt*, og alle andre steder med filens egen menu. Obsidians tre-prikker-menu i overskriften bærer også den menu — uden for boksen ville den ellers ikke tilbyde andet end *Opdel til højre* og *Opdel nedad*.

Intet uden for din boks skrives, medmindre du først trykker *Rediger som tekst*. Se afsnittet [Uden for boksen](README.da.md#uden-for-boksen) i README for den fulde redegørelse.

## At droppe en fil på en mappe i stien

Hver mappe i rækken er et dropmål, så **en note trukket hen på en flyttes
derhen** — den korteste vej dertil er mellem en note og en hvilken som helst mappe
over den, siden destinationen allerede er på skærmen. Træk fra File Explorer, fra
listen, fra notens eget navn i headeren, eller fra et hvilket som helst andet sted
i Obsidian, der frembringer en fil: det er appens eget træk, så hover-teksten,
markøren og fremhævningen er dem, File Explorer tegner.

**Boksens navn tager også imod et drop**, siden det er mappen øverst i
rækken — den ene bevægelse, der placerer en note i boksens rod herfra.

**En hel markering kan trækkes på én gang**, og den flytter som én: hvis blot
én af dem ikke kunne tages, afvises droppet i stedet for at flytte nogle og
stiltiende springe resten over.

Links følger noten, ganske som når den flyttes fra File Explorer eller ved
at skrive en sti.

En mappe, der **ikke kunne tage imod droppet, tilbyder intet af sit
eget** — ingen *Flyt ind*-tekst, ingen fremhævning på mappen — frem for at
tilbyde noget, der så ville fejle; Obsidians eget svar for headeren, *Åbn i
denne fane*, står der i stedet. Tre tilfælde:

- mappen, filen **allerede er i**, siden den allerede er der;
- en mappe droppet **ind i sig selv eller sin egen efterkommer**, hvilket
  ville efterlade den uden noget sted at komme fra;
- en markering, der holder **en mappe og noget inden i den**, siden flytning af
  mappen tager barnet med sig.

En mappe, der allerede har en **fil med samme navn**, tager imod droppet og
spørger, hvad der skal ske med den i vejen, med samme dialog som et taget navn
skrevet eller valgt — se [Et navn, der er taget](#et-navn-der-er-taget). Intet her
overskriver.

Kun mapper **inde i din boks** tager imod drop. Mens rækken peger uden for
boksen, afviser dens segmenter, fordi at tage en note ud af boksen bryder
hvert eneste link til den — en beslutning, der er et spørgsmål værd frem for
en bevægelse. Måden at gøre det bevidst på er stadig at skrive stien, som
spørger først og fortæller, hvor mange noter det ville påvirke.

## At droppe tekst eller en fil for at skrive den ned

De samme mål tager også imod **indhold** ud over filer, og de to skelnes
ved, hvad du trækker, frem for hvor du slipper.

**På en note, rækken allerede navngiver** — notens eget navn, eller et
skilletegn, hvis mappe har en mappenote — går det, du droppede, på enden af
den, efter en tom linje. Det spørger først, fordi dette skriver ind i en fil,
der allerede findes, og et træk er en bevægelse, en usikker hånd kan lave ved et
uheld. Tekst fra en editor, en fil fra dit skrivebord og en note trukket ud af
denne boks virker alle sammen; en fil læses som tekst, og en binær fil afvises
i stedet for at blive indsat som en skærmfuld vrøvl.

**På et sted — boksens navn eller en mappe** — skrives intet endnu, fordi
intet er navngivet. Feltet åbner der og holder det, du droppede, og navnet,
du skriver, er det, der gennemfører det: en ny note *laves* med teksten, og en
eksisterende bliver spurgt om nøjagtig som ovenfor. <kbd>Esc</kbd>, eller et klik
et andet sted, slipper det hele.

**Rækken ringer blåt**, mens et træk, der ville lande som indhold, er over
den, og forbliver blå, mens feltet holder ét — den samme blå, der siger det
samme: hvad der sker næste, handler om teksten, du bærer. En fil trukket ud
af din egen boks hen på en mappe betyder stadig *flyt den derhen*, beholder
Obsidians egen fremhævning, og ringer aldrig blåt; den bevægelse var der
først, og indhold viger for den.

## Når stien er længere end panelet

Navne **forkortes frem for at blive presset sammen**, i den rækkefølge, du
mindst sandsynligt har brug for dem:

1. **Boksens navn først**, ned til dets ikon. Du ved, hvilken boks du er i;
   ikonet bliver ved med at sige, hvor stien starter.
2. **Så filens endelse**, hvis du har den slået til — de samme tre tegn på
   næsten hver fil i en boks. Den forkortes ikke, men bevares hel: en halv
   endelse siger ikke noget, som ingen endelse ikke også siger.
3. **Så mapperne, længste først.** Det længste mappenavn forkortes til
   længden af det næstlængste, så begge sammen, og så videre, hver stoppende
   ved sit gulv — så én meget lang mappe giver afkald på alt, hvad den har
   over de andre, før et kort navn ved siden af den mister et bogstav.
4. **Filens eget navn sidst**, og det beholder omkring seks tegn. Det er, hvad
   headeren er til.

Plads gives op **kontinuerligt**, i brøkdele af en pixel frem for et bogstav
ad gangen: et navn, der viger, klippes ved pixlen og toner ud under sit
`…`, så et panel, der trækkes langsomt, indsnævrer rækken jævnt, og intet
efter det bevæger sig i spring. Før noget bogstav går, bruges luften omkring
skilletegnene — det er rækkens eneste mellemrum, og det koster ingen
information overhovedet — og et forkortet navn slutter, hvor skilletegnet
begynder, uden en strimmel tom boks mellem de to.

**Feltet tager, hvad det holder.** At åbne ét for at skrive en sti presser
ikke mapperne ved siden af det af vejen: det er så bredt som teksten i det og
vokser, mens du skriver, så sporet beholder alt, feltet ikke har brug for.
Kun når der ikke er nok plads til begge, ruller rækken, og så er feltet det
ene, der aldrig viger — det er tekst under redigering, ikke et navn, der
tilpasses.

Intet klippes forbi det, der skelner det fra dets naboer: `Projects2025` og
`Projects2026` i samme mappe kommer ned på `…025` og `…026` frem for til
en fælles begyndelse, der ville gøre dem til samme ord, mens `Reports` ved
siden af `Receipts` kan komme ned på `Rep…`. Oven i det beholder hvert navn
en **læselig bredde** — omkring fire bogstavers værdi for en mappe og seks
for et filnavn, målt i den skrifttype, rækken faktisk tegnes i, frem for
talt. Fire smalle bogstaver og fire brede er ikke samme mængde navn, så
`lilliliillil` får lov at beholde mere af sig selv, end `WWMMWWMMWWMM`
gør, og det, der står tilbage på skærmen, er samme størrelse begge veje.
Korte navne rører man slet ikke ved — et navn slebet ned til `A…` er unikt
og stadig ulæseligt. **Mellemrum tæller ikke med.** Seks tegn til at sige,
hvilken fil dette er, er seks tegn værd at læse, så mellemrummene mellem dem
kører med gratis, og et bliver aldrig efterladt op ad `…`, hvor det ville
være usynligt alligevel.

**Et navn klippes, hvor dets naboer er enige med det, og i midten, hvor de
ikke er enige nogen steder.** To mapper kaldet `aaaa-common-one` og
`aaaa-common-two` deler alt undtagen deres sidste tre tegn, så at klippe
halen bevarer den halvdel, der siger noget: de kommer ned på `…one` og `…two`
i stedet, hvilket er kortere *og* skelner dem. Hvor overensstemmelsen er i
slutningen — `alpha-draft` ved siden af `beta-draft` — er det slutningen, der
går; hvor den er i begge ender, står midten tilbage. Et navn uden nære naboer
mister sin midte, siden et navn åbner med, hvad det er, og slutter med,
hvilket ét det er — for en fil, dens endelse: `annual…2026.md`.

Et kort fælles stykke tæller ikke. `parallel structures` ender tilfældigvis på
de samme to bogstaver som `Schemes` ved siden af, og det er ingen grund til at
beholde nogen af dem hele — tre tegn fra fronten skelner dem allerede.

Intet ombrydes til en anden linje. Når selv de korteste ærlige navne ikke
passer, **ruller rækken sidelæns**, parkeret ved enden, hvor filen er — på
det tidspunkt er der intet tilbage at komprimere, og at klippe yderligere ville
skjule frem for at forkorte. Hjulet ruller den, hvor end markøren er over
rækken, og begge ender kan nås: mens den ruller, retter rækken sig ind efter
sin start, uanset hvad justeringsindstillingen siger, fordi indhold centreret i
en boks, det er vokset ud af, spilder ud både til venstre og til højre — og
den halvdel kan slet ikke rulles til.

**Peg på et forkortet navn, og det kommer tilbage i fuld længde**, så længe du
peger på det, rullet til venstre kant, så alt det tilbagevendte er på
skærmen. **Klik på ét, og det bliver**: feltet åbner og viser den mappe, du
klikkede på, hvad der tilbydes efter den, og hvad du skriver, og det bliver
ved med at vise det, når markøren har flyttet sig væk. Navne bliver stående,
mens du ruller rækken eller skriver ind i den — ét, der sprang op under en
bevægelse ment til at læse rækken, ville flytte alt efter det væk under dig.

Det **åbnende segment bærer altid et tooltip, og det er den absolutte
sti** — `/home/dig/Vaults/Notes`, eller hvor end rækken begynder. Det er den
ene ting om rækken, intet på skærmen kan sige: navnet fortæller dig,
*hvilken* boks, aldrig hvor den er. Det er der, uanset om noget har måttet
forkortes.

Med **Vis boksens navn** slået fra fjernes navnet ikke, det holdes bare på
nul — så at pege på ikonet giver det tilbage på nøjagtig samme måde, som at
pege på et navn, rækken har måttet forkorte, gør.

**Vis filendelser** sætter endelsen tilbage på rækkens filnavn. Fra — som
standard — navngiver rækken en note, som Obsidian titulerer den, uden det
`.md`, næsten hver fil i en boks deler; til, navngiver den den, som
filsystemet gør, hvilket er, hvad du vil have, når boksen rummer mere end
noter. Det er også den anden ting, rækken opgiver, når pladsen bliver
knap, lige efter boksens navn.
Et tooltip giver dig resten: ikke bare navnet, men alt, rækken viser under
det, som `…/navn/mappe/note.md`, så én hover besvarer både "hvad er dette"
og "hvad er under det". Boksikonet navngiver sin boks på samme måde, når
navnet er slået fra eller er blevet presset væk.

## Advarselsfarverne

| | Hvornår | Hvad det betyder |
| --- | --- | --- |
| **Rød** ring på stien | Rækken peger uden for din boks | Obsidian kan ikke åbne det, der er der, som en note, og intet derude skrives, før du åbner hængelåsen. |
| **Orange** ring på stien | Filen er en teksttype, Obsidian ikke har nogen visning for | En advarsel. Obsidian ville give den til dit skrivebords standardprogram; pluginet viser den i stedet. |
| **Rød** tekst i det åbne felt | Der er intet på den sti endnu | <kbd>Enter</kbd> vil lave den frem for at åbne den. Ikke så meget en advarsel som en angivelse af, hvad næste tastetryk gør — se [At skrive en sti](#at-skrive-en-sti). |
| **Rød** hængelås i stedet for omdøb-knappen | Rækken peger uden for din boks, og skrivning der er stadig låst | Den samme røde som ringen, af samme grund: den markerer en afvisning. Tryk på den tillader skrivning her og giver pladsen tilbage til knappen — se [At skrive uden for boksen](#at-skrive-uden-for-boksen). |

De **to ringe er uafhængige, og begge kan gælde på én gang** — en ekstern
`.json` er uden for din boks *og* en type, Obsidian ikke har nogen editor
for. I fremviseren fremstår de som separate linjer, hver med kun sin egen
kendsgerning. På stien vinder rød, hvor begge gælder, siden to ringe kun ville
være støj. Den røde *tekst* er en helt tredje ting: den handler om, hvad der
skrives, ikke om, hvor rækken peger, så den kan fremstå inden i den ene
ring, den anden eller ingen af dem.

Det orange niveau er bevidst snævert. Registrerede typer (Markdown, canvas,
billeder, PDF, lyd, video) håndteres korrekt og får intet. Binære filer får
heller intet — du kommer ikke til at redigere en `.zip` til rod ved et
uheld. Det, der er tilbage, er præcis faren: en `.json`, `.css` eller `.log`,
som **Vis alle filtyper** har gjort synlig. Listen er bredere med vilje: der
er alt, der ikke er en note, orange — se
[sådan farves listens rækker](#sådan-farves-listens-rækker).

## Omdøb-/flyttetilstand

Blyantknappen yderst til højre i headeren — ved siden af visningstilstand-
knappen, samme størrelse som de indbyggede knapper — slår omdøb-/flyttetilstand
til og fra. Uden for din boks står en rød hængelås i dens sted, indtil du
trykker på den; se [At skrive uden for boksen](#at-skrive-uden-for-boksen).
Header-rækken er derefter indrammet i accentfarven, ganske som omdøbning i
File Explorer. De samme klik og tastetryk gennemfører nu en flytning eller
omdøbning via Obsidians `fileManager.renameFile`, så alle links til noten
følger med.

Under omdøbningen:

- Det nuværende filnavn er fastgjort i hver mappes liste, så at flytte en note
  uden at omdøbe den er ét enkelt klik.
- Navne, der allerede er taget i målmappen, er **røde** — en mappe, der
  allerede har navnet, og en fil med det navn — så kollisionen vises, før du
  vælger. De kan stadig vælges: se nedenfor.
- Input valideres live mod Obsidians egne omdøbningsregler — samme
  tegnsæt, samme meddelelser, samme røde tooltip, du får ved omdøbning i
  filtræet — så et ulovligt navn markeres, mens du skriver, og kan ikke
  gennemføres.
- Klik uden for header-linjen, eller at headeren mister fokus, afslutter
  omdøbningstilstand.

### Et navn, der er taget

At flytte eller omdøbe til et navn, der allerede findes, **spørger i stedet
for at afvise.** En dialog åbner med to stier, du kan redigere: hvor din fil
går hen, og hvor filen i vejen går hen — rød, mens det stadig er taget. Hver
sti tegnes også på den måde, stien tegner én, med de dele, der er
forskellige, farvet og forkortet sidst, så en lang sti stadig viser, hvad
der ændres.

Begge felter har en liste. Den anden holder de sædvanlige udveje:

- **Byt plads** — den går til din fils gamle mappe, under sit eget navn.
- **Byt navne** — den bliver, hvor den er, og tager din fils gamle navn.
- **Byt begge** — den tager din fils gamle sti.
- `-1`, `-bak` og `-old` ved siden af sit eget navn.
- De to navne, filerne havde.

Den første liste tilbyder, hvor din fil var på vej hen, **Bliv, hvor den
er**, dens eget navn i målmappen, og `-1`, `-bak` og `-old` ved siden af det.
En udvej, hvis sti er taget, er gråtonet og kan ikke vælges. At vælge én
**udfylder kun feltet** — du kan stadig redigere det — og **Anvend** flytter
begge, links og det hele; **Annuller** flytter intet. At vælge et taget navn
fra listen spørger det samme, og det gør at droppe en note på en mappe, der
allerede holder dens navn, også.

## Én tast til begge omdøbninger

Omdøb-kommandoen (<kbd>F2</kbd> som standard, eller hvad end du har bundet den om til) **skifter** mellem Obsidians omdøbning af den indbyggede titel og dette plugins stilinje i headeren. Hvis du har slået Obsidians indbyggede titel fra, bliver stilinjen i headeren det eneste mål, så tasten aldrig gør ingenting.

I stilinjen åbner den på **navnet uden dets endelse** — den redigering en omdøbning
næsten altid er, og det samme som et klik på navnet vælger. Tryk igen, og
den gør det, som <kbd>Tab</kbd> ville gøre der: på navnet er det næste trin —
navnet med dets endelse, stien fra din boksmappe, stien fra
systemroden; med noget indtastet fuldender den det, ligesom <kbd>Tab</kbd> gør.

**Cyklussen slutter ved overskriften.** Fem tryk fører dig hele vejen rundt — den indbyggede
titel, navnet, navnet med dets endelse, stien fra din boks, stien fra
systemroden — og det sjette er den indbyggede titel igen. Det tryk er det eneste, der adskiller sig fra
<kbd>Tab</kbd>, som i stedet ringer tilbage til stiens begyndelse — og det syvende
går derhen, hvor <kbd>Tab</kbd>s runde går hen: boksroden, med hele stien i
feltet og dens første mappe markeret. Så hvert trin <kbd>Tab</kbd> når frem til, når tasten
også frem til.

Kommandoen **Fokusér stilinjen** gør det samme inde i feltet — hvad end
<kbd>Tab</kbd> ville gøre — og hvor <kbd>Tab</kbd> ville runde rundt, giver den i stedet markøren tilbage
til noten. Dens næste tryk er runden: boksroden, første mappe markeret.

**I et felt, der allerede er åbent**, gør tasten det til en omdøbning der hvor det
står — og bevarer teksten, markøren og markeringen — og **Fokusér stilinjen**
tager omdøbningen af det igen på samme måde. **Alt andet**, der trykkes eller
klikkes mellem trykkene, starter enten cyklus forfra, så et tryk efter du har
redigeret, aldrig lander på et trin, der er levn fra før.

Uden for boksen virker tasten også — der findes ingen indbygget titel derude, så
det første tryk går direkte til stilinjen.

Dette virker ved at pakke kommandoen `workspace:edit-file-title` ind frem for at kapre tasten, så både at binde genvejen om og at køre kommandoen fra paletten virker uændret.

## Sådan farves listens rækker

| Farve | Betyder |
| --- | --- |
| **Lilla** | En note (`.md`, `.markdown`) — det Obsidian vil åbne som en note, udpeget fra en mappe med blandet indhold |
| **Orange** | Ikke en note — alt det Obsidian ikke vil åbne som en, fra en PDF til en `.txt`, og `:page`-rækkerne sammen med dem. En mappe med blandet indhold gennemgås for de noter, den indeholder, og én farve for alt andet siger det hurtigere end en advarsel på nogle få af dem; se [advarselsfarverne](#advarselsfarverne) |
| **Dæmpet** | Uden for din boks, så boksens egen håndtering ikke gælder |
| **Blå**, fed | Der hvor du allerede er: denne linjes egen note, og den mappe stilinjen står på. I omdøb-/flyttetilstand står rækken *behold dette navn* i notens sted — samme note begge veje |
| **Rød** | Kun i omdøb-/flyttetilstand: navnet er optaget. Stadig valgbar — vælger du den, spørges der, hvad der skal ske med filen i vejen; se [Et navn der er optaget](#et-navn-der-er-taget) |

**Mapper er fede**, så en mappes egen note ikke behøver sin egen farve for at
skille sig ud fra sin mappe: den er lilla som enhver anden note. En **linje ned
langs kanten af en række** markerer de navne, der begynder med det, du skrev — blå hvor
de fortsat stemmer overens, grøn på den gren, tilbuddet tager; se
[At skrive en sti](#at-skrive-en-sti).

Feltet bruger de samme farver for det, det navngiver — se [At skrive en sti](#at-skrive-en-sti).

## Synlighedsregler

- Filer med endelser, der ikke understøttes, vises kun i listerne, hvis Obsidians indstilling **Detect all file extensions** er slået til — **inde i boksen**. Uden for den gælder indstillingen ikke: den styrer, hvad boksen indekserer, og intet derude er i boksen, så en `.txt` ved siden af dine noter vises under alle omstændigheder.
- Listen viser op til 1.000 rækker, ti gange Obsidians eget loft. Har en mappe flere, angiver den sidste række, hvor mange der blev udeladt; bliv ved med at skrive for at indsnævre listen.
- Skjulte filer og mapper (dot-files og dot-folders) vises kun, hvis dette plugins indstilling **Vis skjulte filer** er slået til.
- **Overskrivningsbeskyttelsen virker uafhængigt af synlighed** — en skjult fil forhindrer dig stadig i at overskrive den.

## Snydeark

En sti **pakket ind i anførselstegn** pakkes ud for dig. Windows' *Kopiér som sti* giver
dig `"C:\Users\dig\note.md"`, anførselstegn inklusive, og en shell gør det samme for enhver
sti med et mellemrum i sig; at indsætte eller skrive en virker begge veje. Kun
dobbelt anførselstegn, og kun som et matchende par omkring det hele — det kan
ikke forekomme i et rigtigt navn, hvor en apostrof til gengæld sagtens kan.

| Du vil… | Gør dette |
| --- | --- |
| Åbne en mappe (dens note, eller vise den) | Klik på skilletegnet **efter** den mappe |
| Give en mappe en mappenote, den ikke har | **Dobbeltklik** på samme skilletegn (kræver et mappenote-plugin) |
| Bytte en mappe ud med en søskende | Klik på mappens navn, og skriv eller vælg derefter |
| Omdøbe eller ændre notens mål | Klik på notens navn — endelse inklusive |
| Gennemse en mappes indhold | Klik på mappens navn; listen viser dens forælder, så klik på mappen **under** den, du vil have |
| Skrive en mappe og alt under den om igen | **Dobbeltklik** på mappens navn, og skriv derefter |
| Redigere stien fra en mappe og ned | Klik på mappens navn, og tryk <kbd>→</kbd> for at fjerne markeringen |
| Springe til en fil ved at skrive dens sti | Klik på filnavnet eller det tomme felt, skriv, <kbd>Enter</kbd> |
| Åbne en fil i en ny fane i stedet | <kbd>Ctrl</kbd> mens du vælger den, eller <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| Kopiere noten et sted hen i stedet for at flytte den | Blyant, og derefter <kbd>Ctrl</kbd> mens du vælger eller bekræfter målet |
| Oprette en note på en sti, der ikke findes | Skriv stien — feltet bliver **rødt**, når intet i listen matcher den heller — tryk så <kbd>Enter</kbd>. Inde i boksen oprettes den med det samme; uden for spørger den først |
| Se om en sti, du har skrevet, allerede findes | Se på farven: den antager farven på den række, den navngiver, og rød betyder, at <kbd>Enter</kbd> ville oprette den |
| Gå et niveau ned mens du skriver | Skriv `/` |
| Gå et niveau op igen mens du skriver | <kbd>Backspace</kbd> i det tomme felt |
| Trække mapperne foran feltet ind i det | <kbd>←</kbd> ved dets begyndelse for én; <kbd>Shift</kbd>+<kbd>Home</kbd>, eller <kbd>Home</kbd> med listen lukket, for dem alle |
| Flytte eller omdøbe den åbne note | Klik på blyanten, og gennemse eller skriv som ovenfor |
| Flytte til et navn, der er optaget | Bekræft alligevel: dialogen lader dig bytte plads, navne eller begge dele, eller give filen i vejen et andet navn |
| Flytte uden at omdøbe | Blyant → klik ind i målmappen → vælg det fastgjorte nuværende filnavn |
| Omdøbe på stedet | <kbd>F2</kbd> to gange (første tryk går til den indbyggede titel, andet til headeren) |
| Springe til en anden boks, hjem eller et drev | Klik på boksens navn |
| Åbne en fil uden for boksen | Boksens navn → vælg en placering → gennemse → vælg filen (skrivebeskyttet indtil *Rediger som tekst*) |
| Fuldende navnet, der skrives | <kbd>Tab</kbd>, eller <kbd>End</kbd> for det tilbudte; <kbd>→</kbd> tager ét bogstav af det |
| Træde ind i det, når kun ét navn er tilbage | <kbd>Tab</kbd> igen |
| Tage et skridt tilbage, eller forlade mappen | <kbd>Shift</kbd>+<kbd>Tab</kbd> |
| Gribe hele stien, eller systemstien | <kbd>Tab</kbd> forbi enden, eller klik fire gange |
| Kopiere et navn, en sti eller en systemsti | Højreklik på det to gange; det tomme felt tre gange for systemstien |
| Nå det, boksmanageren tilbyder for denne boks | Højreklik på ikonet i starten af rækken |
| Kopiere boksens ID | Højreklik på ikonet i starten af rækken |
| Åbne en anden boks, du gennemsøgte | Højreklik på dens navn i starten af rækken |
| Se filens endelse på rækken | Slå **Vis filendelser** til i indstillingerne |
| Åbne et mappesegment i en ny fane | <kbd>Ctrl</kbd> eller midterklik på det, eller træk det hen på fanebjælken |
| Nå stilinjen fra tastaturet | Bind *Fokusér stilinjen* i Genveje |
| Åbne en webadresse eller et `obsidian://`-link | Skriv det i linjen, og tryk <kbd>Enter</kbd> |
| Annullere noget som helst | <kbd>Esc</kbd>, eller klik uden for headerlinjen |
| Prøve rækker af, før du bekræfter | Pil eller hold musen hen over listen; <kbd>↑</kbd> forbi toppen giver din tekst tilbage |
| Flytte en note ind i en mappe over den | Træk den hen på den mappe i rækken |
| Beholde en tekststump som en ny note | Træk teksten hen på en mappe, skriv et navn, <kbd>Enter</kbd> |
| Tilføje en tekststump til noten, du læser | Træk den hen på notens navn, bekræft |
| Se et forkortet mappenavn i fuld længde | Hold musen over det, eller gør ruden bredere |
| Finde ud af, hvor selve boksen ligger | Hold musen over ikonet i starten af rækken |
| Tage en note ud af boksen | Blyant → gennemse udenfor → bekræft dialogen (links vil gå i stykker) |
| Tillade skrivning uden for din boks | Klik på den **røde hængelås** i headeren; omdøb-omskifteren tager dens plads |
| Låse den igen | Klik på omskifteren, indtil hængelåsen er tilbage — ét tryk ind, ét tryk ud |
| Slette en fil uden for boksen | Åbn hængelåsen, og højreklik derefter på filen: *Slet* flytter den til dit systems papirkurv |

## Indstillinger

| Indstilling | Muligheder | Standard | Hvad den gør |
| --- | --- | --- | --- |
| **Language** | Obsidian standard, eller en af 46 | Obsidian standard | Hvilket sprog dette plugins egen tekst er på. *Obsidian standard* følger sproget indstillet i Udseende-indstillingerne, hvilket er det, næsten alle vil have. Selve rækken — dens navn, dens beskrivelse og *Obsidian standard* — forbliver på engelsk, uanset hvad der vælges, fordi det er vejen tilbage ud af et sprog, du ikke kan læse. Græsk og sanskrit er oversat her og mangler på Obsidians egen liste, så denne indstilling er den eneste måde at nå dem på. |
| **Alignment** | Left / Center / Right | Left | Hvor stien sidder i headerrækken. *Center* svarer til Obsidians klassiske udseende. |
| **Delimiter** | Ethvert tegn | `/` | Adskilleren tegnet mellem segmenterne. Seks ét-klik-forudindstillinger (`/ > ▸ › \ •`) står foran tekstfeltet. |
| **Vis boksens navn** | Til / Fra | Til | Om boksen selv er det første stisegment. Slås den fra, bliver det segment til et 🏠-ikon i stedet for at forsvinde, så stien stadig starter et sted, der kan klikkes på. |
| **Mappenavnet åbner listen** | Til / Fra | Til | Bytter om på, hvad et mappenavn og skilletegnet efter det gør — se [tabellen ovenfor](#stien). Med [Folder notes](obsidian://show-plugin?id=folder-notes) åbner skilletegnet mappenoter. Gælder aldrig i omdøb-/flyttetilstand. |
| **Vis skjulte filer** | Til / Fra | Fra | Om skjulte filer og mapper (dot-files og dot-folders) vises i listerne. Overskrivningsbeskyttelsen gælder under alle omstændigheder. |
| **Show all file types** | — | — | Ikke dette plugins indstilling, men Obsidians, nævnt her fordi den besvarer det samme spørgsmål: din boks indekserer kun de filtyper, den bliver bedt om, og kun det, den indekserer, kan vises. Find den i Obsidians indstillinger, og slå den til for at se alle filer; knappen ved siden af rækken åbner den side med indstillingen scrollet i visning og fremhævet, ligesom at klikke på den i indstillingernes egen søgning ville. Uden for boksen gælder den ikke, da intet derude alligevel er indekseret. |
| **Vis filendelser** | Til / Fra | Fra | Om filens navn på rækken bærer dens endelse. Fra, udelades den — ligesom Obsidian udelader den fra en notes titel. Til, navngiver rækken filen, sådan som filsystemet gør. Under alle omstændigheder er endelsen det andet, der opgives, når rækken løber tør for plads, lige efter boksens navn. |
| **Adgang til eksterne filer** | Til / Fra | **Fra** | Om boksens navn åbner listen over placeringer. Fra, kigger intet i pluginet nogensinde ud over denne boks. |
| **Hotkeys** | knap | — | Åbner Obsidians *Genveje* filtreret til dette plugin, hvor *Fokusér stilinjen* kan gives en tast. |

## Udskiftning af ikonerne

Lure tegner tre ikoner: boksrod-ikonet (når **Vis boksens navn** er fra), omdøb-/flytte-omskifteren, og hængelåsen der står i dens sted, mens skrivning uden for boksen er låst. Alle kan udskiftes fra et tema eller et CSS-snippet — sæt erstatningstegnet, og skjul det medfølgende i én regel:

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

`--lure-icon-glyph` tager alt, hvad der er gyldigt i CSS `content`, så `url(...)` virker til et billede lige så vel som til et tekst- eller emojitegn. Lad `--lure-icon-svg` være for at beholde Lucide-ikonet og tegne dit tegn ved siden af det.
