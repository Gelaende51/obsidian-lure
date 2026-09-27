<!-- Vertaling van docs/usage.md — stand: commit 94b1372.
     Machinaal vertaald (Claude Sonnet 5), niet nagekeken door
     moedertaalsprekers. De labels van de plugin komen uit
     src/lang/translations.ts en die van Obsidian uit de teksten die de
     applicatie zelf meelevert, dus ze komen overeen met wat je op je scherm
     ziet. -->

[English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · [Čeština](usage.cs.md) · [Dansk](usage.da.md) · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · [Bahasa Indonesia](usage.id.md) · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · **Nederlands** · [Norsk](usage.no.md) · [Polski](usage.pl.md) · [Português](usage.pt.md) · [Português (Brasil)](usage.pt-BR.md) · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

# Gebruik

[← terug naar de README](README.nl.md)

## Het pad

Het volledige pad van de notitie binnen de kluis vervangt de kale bestandsnaam in de kopbalk van de weergave — de balk onder de tabbladenrij, die ook de knoppen voor terug en vooruit draagt.

Twee dingen op de rij zijn aanklikbaar, en **Mapnaam opent de lijst** bepaalt wat wat doet:

| | Mapnaam | Scheidingsteken erachter |
| --- | --- | --- |
| **Aan** (standaard) | Selecteert die map om te bewerken | Opent de map |
| **Uit** | Opent de map | Daalt af in die map |

"Opent de map" betekent wat die klik in een kaal Obsidian doet. Zonder plugin die daar meeluistert, wordt de map in de zijbalk van de Verkenner getoond — gemarkeerd en uitgeklapt om de inhoud te laten zien.

Wanneer de notitie van de map degene is die je al aan het lezen bent, toont de klik in plaats daarvan de map — er is niets te openen dat niet al op het scherm staat, wat de tweede druk altijd al betekend heeft.

Met [Folder notes](obsidian://show-plugin?id=folder-notes) geïnstalleerd opent dezelfde klik in plaats daarvan de notitie van die map, **op elke diepte**: de notitie wordt hier bepaald volgens de eigen conventie van die plugin, in plaats van dit aan haar over te laten. Die plugin herkent alleen de mappen die ze zelf gemarkeerd heeft, wat op een pad van meer dan één map diep geen van alle is, dus de druk die de notitie van een map op het hoogste niveau opende, deed voorheen dieper niets meer. De andere twee folder-note-plugins publiceren geen conventie om te lezen en claimen de rij nooit, dus daarmee toont het scheidingsteken de map zoals altijd. Het is de enige folder-note-plugin waarvan bekend is dat ze het kopbalkpad claimt; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) en [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) beheren mapnotities maar luisteren niet naar een klik op het pad, dus daarmee toont het scheidingsteken de map zoals gebruikelijk. Zie [compatibiliteit](../compatibility.md#verified-against).

Een scheidingsteken is **alleen onderstreept wanneer de map ervoor daadwerkelijk een mapnotitie heeft**, zodat de onderstreping een belofte is dat er iets is om te openen — op elke diepte zolang [Folder notes](obsidian://show-plugin?id=folder-notes) actief is, aangezien de notitie hier wordt bepaald in plaats van dit aan die plugin over te laten om te markeren. Waar het niet die plugin is die actief is, is niets onderstreept en opent niets: het scheidingsteken toont, zoals ook zonder enige folder-note-plugin. Elk scheidingsteken blijft hoe dan ook aanklikbaar — een zonder onderstreping toont en klapt zijn map uit in de zijbalk, wat de aanwijzercursor nog steeds aangeeft. De onderstreping verplaatst zich tegelijk weg van de mapnaam: met de verruiling aan opent de naam de lijst, dus hem markeren als de link naar de notitie zou een leugen zijn.

**De verplaats-/hernoemmodus gaat boven beide**, wat de instelling ook zegt: zolang er een verplaatsing openstaat, opent niets op de rij een map, omdat er een openen de verplaatsing zou opgeven. Mapnamen worden geselecteerd om te bewerken en scheidingstekens dalen af — beide zijn manieren om de bestemming te kiezen — en de onderstreping verdwijnt om te tonen dat openen is opgeschort.

De **wortel van de kluis** is het enige segment dat geen padsegment is. Hij heeft geen bovenliggende map om buren uit op te sommen, dus opent hij in plaats daarvan de [lijst met locaties](#buiten-de-kluis-bladeren) — je andere kluizen, je persoonlijke map, de hoofdmap van het bestandssysteem en aangekoppelde stations.

## Het scheidingsteken van de kluis zelf

Het scheidingsteken direct na de kluisnaam staat voor de kluis zelf in plaats
van voor een map, dus het doet wat geen ander scheidingsteken kan:

| | Eerste klik | Volgende klik |
| --- | --- | --- |
| **Met een startpagina-plugin** (een pagina die je begroet zodra Obsidian opent) | Opent die pagina in dit paneel | Klapt de bestandsboom weg |
| **Zonder een dergelijke plugin** | Klapt de bestandsboom weg | Zet precies terug wat open stond |

Gewone klikken, geen dubbelklik: zodra de pagina open is, heeft het
scheidingsteken niets meer te openen, dus de volgende druk is het inklappen —
hoelang je er ook over doet.

Het is **onderstreept** wanneer er een startpagina is om te openen, wat dezelfde
belofte is die het scheidingsteken van een map doet: er is iets. Inklappen is een
schakelaar — de volgende druk herstelt de mappen die open stonden, en alleen
die, zodat een boom die je had ingericht niet verloren gaat door een blik op iets
anders.

## Een paneel zonder bestand

Een leeg tabblad, de grafiek en al het andere dat geen bestand benoemt, krijgen
een eigen rij: de kluis, gevolgd door één segment dat zegt wat het paneel bevat.

```
my-vault / :blank      a new tab
my-vault / :graph      the graph, local or global
my-vault / :<type>     anything else with no file
```

De **eigen lijst van de wortel van de kluis** biedt deze pagina's ook aan, onder
de mappen en notities die er daadwerkelijk in staan: kies daar `:graph` of
`:search` en het paneel opent die weergave, precies zoals het kiezen van een
notitie de notitie opent. Welke pagina's bestaan wordt uit Obsidian gelezen in
plaats van hier vastgelegd — elke weergave die niet bestaat om een bestand te
tonen, zodat een plugin die er een registreert (een startpaginatabblad, een
kalender) verschijnt zonder dat deze plugin er iets van weet. Weergaven die een
bestand nodig hebben — Markdown, PDF, afbeeldingen, canvassen, bases — worden
niet aangeboden: er is niets voor hen om te tonen.

De dubbele punt is het punt — geen bestand of map kan `:graph` heten, dus de rij
kan niet worden aangezien voor een pad dat geopend zou kunnen worden. Het label
komt uit het weergavetype in plaats van uit Obsidians eigen bewoording, dus het
leest hetzelfde ongeacht de interfacetaal, en een `-view` aan het eind wordt
weggelaten: een startpaginatabblad-plugin registreert zijn weergave als
`home-launcher-view`, en de rij zegt `:home-launcher`.

Klikken op de lege ruimte, of op het label zelf, **opent het veld bij de wortel
van de kluis**: typ een pad en <kbd>Enter</kbd> opent het in datzelfde paneel,
met dezelfde aanvulling, dezelfde lijst en hetzelfde rode veld dat aanbiedt te
maken wat er nog niet is. Een leeg tabblad is een goede plek om te typen waar je
naartoe wilt, en daar is het voor bedoeld.

Het label is een label en niets meer: geen lijst, geen slepen, geen hernoemen.
Panelen in de zijbalken worden volledig met rust gelaten — een backlinks-paneel
behoudt de titel die Obsidian eraan geeft.

Canvassen, PDF's, afbeeldingen en bases hebben niets hiervan nodig. Het zijn
bestanden, dus zij krijgen een gewone padbalk.

## Klikken op een segment: verruil het voor een buur

Klikken op een mapnaam selecteert **de naam van die map** in een tekstveld en opent een lijst van de map **één laag hoger** — de map erboven. Typen of een item kiezen verruilt deze map voor een buurmap en laat alles eronder ongemoeid, dus `Projecten/2026/Aftrap.md` → klik op `2026` → kies `2025` levert `Projecten/2025/Aftrap.md`.

Klikken op **de naam van de notitie** werkt op dezelfde manier tegen haar eigen map, en selecteert de naam **zonder extensie** — hernoemen is de gebruikelijke bewerking, en rechtstreeks typen over een selectie die `.md` bevatte, veranderde vroeger per ongeluk het bestandstype. De extensie blijft één toetsaanslag verwijderd zichtbaar: <kbd>→</kbd> bereikt hem, en de dubbelklik die verbreedt tot de hele rij pakt alles.

De klik op de map heeft al één segment geselecteerd, dus **nog één klik** verbreedt de selectie tot de hele regel — die map *en* alles eronder — en wat je dan typt vervangt de rest van het pad in één keer. Werkt hetzelfde bij navigeren en in de verplaats-/hernoemmodus.

Dat geldt alleen als voortzetting van de klik die het veld opende. Zodra je het veld gebruikt hebt, gedraagt het zich als elk ander tekstveld: een klik zet de cursor, een dubbelklik pakt een woord, een driedubbele klik pakt de regel.

Hoe dan ook blijft de rest van het pad zichtbaar rond het veld, als chips ervoor en als niet-geselecteerde tekst erna, zodat het volledige pad nooit uit de kopbalk verdwijnt. Typ om de selectie te vervangen, of druk op <kbd>→</kbd> om ze te behouden en vanaf daar te bewerken. De lijst toont de hele map ongeacht wat er is voorgevuld; ze begint pas te filteren zodra je daadwerkelijk typt.

## Afdalen via het scheidingsteken

Klikken op een scheidingsteken (met **Mapnaam opent de lijst** uit) daalt af in de map ervoor: de lijst toont de inhoud van *die* map, en de rest van het pad opent geselecteerd in het veld. Een map kiezen voegt hem toe aan het pad en opent meteen de volgende lijst, zodat je een boom omlaag kunt klikken zonder de kopbalkrij te verlaten.

## De lijst opent waar jij bent

De lijst opent op het item waar je op staat — de notitie waarbij deze balk hoort,
of, wanneer een klik op een map de bovenliggende map heeft getoond, die map —
in plaats van op de eerste rij. In een map met tweehonderd notities ligt de
eerste rij mijlenver van je vandaan.

**Een scrollbeweging over een naam opent zijn lijst en loopt hem door.** De
eerste beweging opent dezelfde lijst die het aanklikken van de naam opent, en
elke beweging daarna verplaatst de markering een rij, en zet wat je aanwijst in
het veld, precies zoals de pijltjestoetsen dat doen — zodat een buur gevonden en
gekozen kan worden zonder toetsenbord. Scrollen voorbij een van beide uiteinden
geeft je tekst terug. Een rij met meer pad dan paneel beantwoordt de
scrollbeweging in plaats daarvan met zijwaarts scrollen, wat de interpretatie is
die wint zolang die van toepassing is.

De lijst is **zo hoog als het venster toelaat**. Obsidian begrenst zijn
suggestielijsten op 300 pixels, wat er ook onder ligt; deze loopt door tot de
onderkant van het venster, een paar pixels voor de rand stoppend, en scrolt pas
zodra de map er meer bevat dan dat. Ze is **niet breder dan de padbalk**: een
naam die niet past wordt ingekort zoals de rij dat ook doet, en volledig getoond
zodra je hem aanwijst.

Door de lijst bewegen **zet wat je aanwijst in het veld**, met de pijltjestoets
of door te hoveren — in plaats van het segment dat je aan het bewerken was, met
de rest van het pad blijvend staan — zodat de rij waar je op staat ook het pad
is dat je zou krijgen.

De rest van het pad wordt **alleen getoond voor zover het bestaat onder wat je
aanwijst**. Staand in een map met `2026/notitie.md` achter het segment dat je
bewerkt, toont het aanwijzen van een map met daarin een `2026` met daarin een
`notitie.md`, alles daarvan; een die de `2026` heeft maar geen notitie toont
`2026`; een die geen van beide heeft toont na de naam helemaal niets, en een
bestand ook niet, want onder een bestand leeft niets. Wat **jij hebt getypt**
behoudt zijn volledige pad terwijl je het typt, hoe weinig ervan er ook al staat
— een half getypte naam is nog geen beslissing. Een naam vastleggen is een
beslissing, en wat daaronder niet bereikbaar is wordt op dat punt afgesneden; de
mappen die je aanmaakt zijn degene die je *na* dat punt typt, waar
<kbd>Enter</kbd> ze aanmaakt.
De tekst die je had getypt blijft bewaard: bewegen **voorbij een van beide
uiteinden van de lijst** — omhoog voorbij het eerste item, of omlaag voorbij het
laatste — laat hem los en zet je tekst terug, zonder dat er iets gemarkeerd is.
Het veld is een halte op de ring net als elk item, dus een ronde loopt erdoorheen
in plaats van van de laatste naar de eerste rij te springen, en verder drukken
vanaf daar brengt je rond naar het andere uiteinde.

De **aanwijzer van de lijst afhalen** zet je tekst ook terug — en geeft de
markering terug aan wat hem had voordat de muis aankwam: het item waar je met de
pijltjestoetsen naartoe was gegaan, weer zichtbaar in het veld, of het item
waarop de lijst opende omdat het is waar jij bent. Hoveren is een manier van
kijken, geen manier van kiezen, dus een veeg van de aanwijzer over de lijst kost
je niets.

De lijst zelf verandert niet terwijl je erdoorheen beweegt — ze blijft filteren
op wat je hebt getypt, niet op wat er in het veld is voorvertoond — zodat het
item onder je nooit onder de volgende druk vandaan verschuift. Typen vervangt de
voorvertoning en filtert zoals gebruikelijk.

**Waarop ze filtert is het segment dat je aan het bewerken bent**, niet alles in
het veld. Klikken op een map laat de rest van het pad erin staan achter de naam
die je verandert, dus filteren op het geheel ervan zou zoeken naar een kind
genaamd `2026/Aftrap.md` en niets vinden — de lijst zou sluiten bij je eerste
toetsaanslag, wat je ook typte. De **extensie wordt er ook buiten gelaten**,
zolang de cursor vóór de punt staat: klikken op de naam van een notitie selecteert
de stam en laat `.md` erachter staan, dus één letter typen maakt dat het veld
`a.md` leest, en dat is niet waar je naar op zoek bent. Zet de cursor voorbij de
punt en de extensie telt mee als alles andere. Een naam die werkelijk nergens op
past sluit de lijst nog steeds, want een lege lijst is het eerlijke antwoord.

Een voorvertoning **verruilt alleen dat ene segment en laat de rest van het pad
ongemoeid**: een map aanwijzen vraagt wat als deze stap die andere was, niet gooi
het pad weg. De lijst verlaten herstelt de tekst *en* de selectie die je had,
zodat de volgende toetsaanslag vervangt wat hij had vervangen voordat je keek.

## Items in de lijst zijn echte verkennerrijen

Elk bestand en elke map in de lijst gedraagt zich als zijn rij in de Verkenner:

- **Rechtsklik** voor hetzelfde contextmenu dat de Verkenner geeft, item voor item — inclusief de items die andere plugins toevoegen. Een map biedt *Nieuwe notitie*, *Nieuwe map*, *Nieuw canvas*, *Nieuwe base*, *Kopie maken*, *Map verplaatsen naar…*, *Zoeken in map*, *Pad kopiëren*, *Tonen in systeemverkenner*, *Naam wijzigen…* en *Verwijderen* aan; een bestand biedt zijn eigen equivalent, inclusief *Openen in standaardapp*.
- **Sleep** een item naar overal waar Obsidian een bestand accepteert: in een editor om een link in te voegen, op een map in de Verkenner om hem te verplaatsen, op de tabbladenrij om hem te openen.

De menuteksten komen uit Obsidians eigen vertalingen, dus ze passen in elke taal bij de rest van de applicatie.

## Een pad typen

- Klikken op de **lege ruimte** voor of na het pad opent een tekstveld op het hele pad *en toont de notitie in de bestandenverkenner*, zodat de boom het paneel volgt zonder een tweede handeling. Het **telt je klikken**: één selecteert het pad zonder de extensie, twee selecteren het mét, drie selecteren het pad zoals de machine het kent. Klikken op de **naam van het bestand** telt op dezelfde manier maar begint één trede lager, op de naam zelf: één selecteert het zonder de extensie, twee mét, en drie verbreden naar het hele pad *vanaf je kluismap* — de vorm die een link of een zoekopdracht wil, in plaats van die van de machine. Een vierde klik bereikt die laatste.
- **Het tellen hoort bij de reeks die het veld heeft geopend.** Zodra die vervallen is — je pauzeerde, typte, of klikte eenmaal ergens in de tekst — is het veld een gewoon tekstveld, en een dubbelklik erin selecteert het woord onder de aanwijzer zoals overal elders. Typ over wat geselecteerd is, of bewerk ter plaatse. (Klikken op de bestandsnaam zelf selecteert alleen de bestandsnaam; zie hierboven.) Rechtsklikken op dezelfde ruimte **kopieert** diezelfde drie, bij twee, drie en vier klikken — de ene knop toont ze, de andere neemt ze over. Een **enkele** rechterklik opent het pad met alles geselecteerd en biedt aan wat ermee kan gebeuren: knippen, kopiëren, plakken, alles selecteren, in Obsidians eigen woorden.
- **Middelklik de lege ruimte** om over het pad te plakken: het veld opent op het hele pad *vanaf de kluiswortel*, zodat het klembord het geheel vervangt, en wat terechtkomt is geselecteerd. <kbd>Enter</kbd> gaat er dan naartoe.
- **<kbd>Ctrl</kbd>+klik de lege ruimte** om deze notitie opnieuw te openen in een eigen tabblad, kort opgelicht in de bestandenverkenner zodat het tweede tabblad niet voor het eerste wordt aangezien. Op de **kluisnaam** opent <kbd>Ctrl</kbd>+klik of middelklik een leeg tabblad, staand op de kluiswortel met de lijst al zichtbaar — een plek om een pad vanaf nul te typen.
- Typen terwijl een pad wordt getoond, zet het laatste segment om in een klein invoerveld met live-aanvulling beperkt tot de huidige map.
- **Een pad vanaf de bestandssysteemwortel kan getypt worden.** `/` voor een leeg veld opent er een in plaats van een trede aan te vullen, elke schuine streep erna hoort erbij, en `~` is je thuismap. Terwijl het veld zo'n pad bevat, toont de lijst de machine in plaats van de kluis, en het openingssegment van de rij stapt opzij — wat in het veld staat begint bij de wortel en zegt dat ook. Met *Toegang tot externe bestanden* uit blijft de lijst leeg, omdat <kbd>Enter</kbd> het pad toch zou weigeren.
- **Een pagina kan getypt worden, niet alleen gekozen.** `:graph`, `:search`, of wat je invoegtoepassingen ook registreren — de labels die de [lijst van de kluiswortel](#een-paneel-zonder-bestand) aanbiedt. Een dubbele punt typen roept ze overal op, aangezien geen naam er een mag bevatten, en <kbd>Enter</kbd> opent die weergave in dit paneel. `:graph` getypt **binnen een map** opent de grafiek van die map — de grafiek gefilterd op `path:"die/map"` in zijn eigen zoekvak, alsof het daar getypt was; op de kluiswortel is het de hele grafiek. <kbd>Tab</kbd> maakt de naam af zoals bij een map — en neemt mee wat het veld verder bevatte, aangezien een pagina in geen map zit en er niets onder één leeft. Klikken op het label van zo'n paneel opent het veld terwijl het dat al bevat.
- **Wat <kbd>Tab</kbd> zou schrijven wordt aangeboden terwijl je typt.** Waar elke onderliggende naam die begint met wat je hebt getypt nog een tijdje meegaat, verschijnt die overeenkomst na de cursor, geselecteerd; waar ze ophouden mee te gaan, doet de stap naar de eerste ervan dat — of naar de rij waar je met de pijltjes naartoe ging, aangezien dat degene is waar <kbd>Tab</kbd> naartoe zou gaan. Typen over een naam laat de extensie ervan staan en biedt ervoor aan, en een map waar je net in bent gestapt biedt zijn eerste stap aan, dus er is geen toestand waarin niets wordt aangeboden en <kbd>Tab</kbd> toch iets schrijft. Typ die letters en het wordt er één voor één ingeslikt; typ iets anders en het is weg. <kbd>Tab</kbd> of <kbd>End</kbd> neemt het geheel over, <kbd>→</kbd> neemt er één letter van, <kbd>Backspace</kbd> neemt het terug zonder een letter aan te raken die je zelf typte, en er wordt niets meer aangeboden tot je typt — dus er is altijd een uitweg uit een naam die je niet wilde. Na een druk op <kbd>Tab</kbd> wordt de volgende stap meteen aangeboden, net als na een getypte letter. Wat de lijst toont wordt gefilterd door wat **jij** hebt getypt, nooit door wat werd aangeboden.
- **Aanbiedingen negeren hoofdlettergebruik.** `sch` biedt `Schemes` aan, gespeld zoals de naam is; het aanbod teruggeven geeft je eigen letters terug zoals je ze typte. Waar zowel `Test` als `test` bestaan, wordt degene aangeboden die gespeld is zoals jij typte.
- In het veld is het aangeboden deel gewoon **geselecteerd**. De lijst is waar het uitgeschreven staat: elke rij toont het deel dat **overeenkwam met wat je typte in vet**, waar in de naam het ook overeenkwam — `kick` vindt `Weekly kickoff` en toont dat. **Namen die beginnen met wat je typte komen eerst**, vóór degene die het alleen bevatten, en zijn gemarkeerd met een lijn langs hun rand: **blauw** waar ze meer delen dan je typte, zodat <kbd>Tab</kbd> voor allemaal iets toe te voegen heeft, en **groen** op de tak waar het aanbod naartoe gaat waar ze uiteenlopen — `te` met `test1`, `test2`, `text1` en `text2` biedt `te`+`st` aan, dus de twee `test`-rijen zijn groen en de twee `text`-rijen houden de gewone lijn. Elk van hen **onderstreept de stap die <kbd>Tab</kbd> ernaartoe zou zetten**, niet alleen degene die wordt aangeboden, en de onderstreping volgt het aanbod terwijl het verandert.
- **Typen laat de gemarkeerde rij los.** De lijst opent op het item waar je in staat, maar zodra je typt, gaat het ergens anders over, en een markering die niemand daar zette leest als een keuze die al gemaakt is.
- Het aanbod is altijd alleen tekst vóór je: de letters die je typte blijven gespeld zoals jij ze typte terwijl je typt, en het aanbod overnemen herschrijft de naam zoals de map hem spelt, omdat een pad moet overeenkomen met de schijf. `sk` + <kbd>Tab</kbd> bereikt `Skyline`, niet `skyline`.
- **Het veld draagt de kleur van waarnaar het verwijst**, dezelfde kleur als zijn rij in de lijst: paars voor een notitie, de eigen notitie van een map inbegrepen, oranje voor alles wat geen notitie is, blauw voor de notitie waar je op zit. De rij waar de kleur van komt is degene die precies zo heet als wat je typte, of anders de gemarkeerde, of anders de eerste waar je typen nog naartoe leidt.
- **Het veld wordt rood zodra niets meer overeenkomt met wat erin staat** — geen bestand, geen map, en geen rij van de lijst die er nog naartoe leidt. Vanaf dan maakt <kbd>Enter</kbd> wat in het veld staat in plaats van het te openen, en het rood zegt dat al voor je bevestigt. Het verschijnt nooit voor een webadres, dat geen plek op deze machine is om naar te zoeken. Het **hele** veld krijgt kleur in plaats van alleen het deel dat ontbreekt: een tekstveld kan niet de helft van zijn eigen inhoud kleuren. In de verplaats-/hernoemmodus houdt het veld zijn eigen rood, voor een naam die ongeldig is — daar is een naam waar niets mee overeenkomt precies het punt. Dat een naam **al bezet** is, komt aan de orde zodra je hem bevestigt, met een dialoogvenster dat vraagt wat er moet gebeuren met het bestand dat in de weg staat — zie [Een naam die al bezet is](#een-naam-die-al-bestaat): elke naam getypt op weg naar `Notes.md` passeert namen die zelf bestanden kunnen zijn, dus het letter voor letter markeren ervan waarschuwde voor een naam waar nog niemand om had gevraagd.
- `/` bevestigt het segment dat je typt en daalt erin af, en behoudt wat erachter staat — hetzelfde wat <kbd>Tab</kbd> doet wanneer het naar binnen stapt.
- <kbd>Backspace</kbd> in een leeg veld stapt terug naar de bovenliggende map, en opent haar naam opnieuw met de cursor aan het einde. Hetzelfde doet <kbd>Backspace</kbd> vóór een extensie die alleen is overgebleven — een veld met alleen `.md` erin verwijst nergens naar — en de losse extensie gaat ermee mee.
- **Klikken op een map terwijl een veld open is, verbreedt het naar het hele pad na die map**, met de eigen naam van de map geselecteerd — hetzelfde wat klikken erop vanuit de rij zou hebben gedaan, en alles wat het veld bevatte blijft behouden. Wat in het veld staat is de staart van de rij terwijl het open is, dus een map die verder naar boven wordt aangeklikt geeft het pad terug dat de sessie heeft afgelegd in plaats van dat waarmee de notitie begon.
- **Met de pijltjestoets van de voorkant van het veld af gaan haalt de map ervoor naar binnen**, alsof het hele pad één regel tekst was. Met de cursor helemaal vooraan neemt <kbd>←</kbd> die map het veld in en landt aan het einde van haar naam, <kbd>Ctrl</kbd>+<kbd>←</kbd> landt aan het begin ervan, en <kbd>Home</kbd> neemt elke map tot aan de kluiswortel op — of tot aan de plek die je koos, buiten de kluis — in één keer. Houd <kbd>Shift</kbd> ingedrukt en de selectie strekt zich uit over wat binnenkwam. Op macOS is de woordsprong <kbd>Option</kbd>+<kbd>←</kbd> en is <kbd>Cmd</kbd>+<kbd>←</kbd> gelijk aan <kbd>Home</kbd>. Overal behalve vooraan zijn dit gewone tekstsneltoetsen. **Terwijl de lijst getoond wordt, horen <kbd>Home</kbd>, <kbd>End</kbd>, <kbd>PgUp</kbd> en <kbd>PgDn</kbd> daarbij** — eerste rij, laatste rij, een pagina omhoog, een pagina omlaag, waarbij een pagina is wat de lijst toont, met de gemarkeerde rij die haar plaats op het scherm behoudt — en bereiken de tekst pas zodra ze gesloten is; <kbd>Shift</kbd>+<kbd>Home</kbd> neemt ook elke map op terwijl de lijst open staat.
- **De lijst volgt de cursor.** Kies een ander deel van het pad — sleep erover, klik erin, of ga er met de pijltjes naartoe — en de lijst toont de onderliggende items van *die* map, niet die waarop het veld werd geopend. De map wordt geteld vanaf de chips plus wat van het veld vóór de cursor ligt, dus klikken in `Notes.md` in een veld met `2026/Notes.md` toont wat in `2026` zit. Wijzen naar een rij schrijft die in het segment waar de cursor in staat, en de aanwijzer van de lijst afhalen geeft je je tekst en je selectie terug, precies zoals ze waren.
- **Een selectie uit het veld slepen** en ergens anders loslaten sluit het niet. Een klik die in het veld begint hoort bij de bewerking hoe ver hij ook reikt; alleen een klik die *buiten* begint is een klik weg.
- <kbd>Enter</kbd> bevestigt — en wanneer het veld helemaal niets aanduidt, zoals in een lege map waar nooit iets aan te vullen viel, zegt het *No file selected* en blijft open in plaats van te sluiten alsof er iets gekozen was. <kbd>Esc</kbd> of een klik ergens anders annuleert terug naar het echte pad van het bestand. Eén druk op <kbd>Esc</kbd> volstaat: het sluit de lijst, verlaat het veld en geeft de focus terug aan de notitie, in plaats van één druk per laag te vereisen.

Het veld heeft geen omlijsting — geen kader, geen rand — dus het leest als de padtekst zelf, en het groeit vanzelf mee terwijl je typt.

## Elk onderdeel van de rij, knop voor knop

De hele rij in één oogopslag. De rechtsklik-kolom is wat **één** druk je
oplevert; die knop telt drukken ook, en [zijn eigen
tabel](#rechtsklik-één-druk-twee-drukken-drie) hieronder geeft de tweede, derde en
vierde. Deze gaat ervan uit dat **Mapnaam opent de lijst** aan staat, wat de
standaard is — staat hij uit, dan wisselen de mapnaam en het scheidingsteken van
eerste kolom, zoals [de tabel bovenaan](#het-pad) zegt.

| Waar je drukt | Klik | Dubbelklik | <kbd>Ctrl</kbd>+klik, of middelklik | Rechtsklik | Iets erop neerzetten |
| --- | --- | --- | --- | --- | --- |
| De **kluisnaam** | Opent de lijst met locaties — andere kluizen, thuismap, de basis van het bestandssysteem, aangekoppelde schijven. Standaard uit; staat het uit, dan wordt de kluis in plaats daarvan getoond in de Bestandsverkenner | Markeert het **hele absolute pad**. Die lijst opent met het pad al in het veld en alleen het eigen deel van de kluis gemarkeerd; een tweede druk verbreedt over de rest. Niets om te verbreden met de lijst uit | Een tabblad zonder inhoud, staand bij de kluiswortel met de lijst al zichtbaar — een plek om een pad helemaal opnieuw te typen | Het eigen contextmenu van de kluis: wat er kan gebeuren met de kluis die dat segment benoemt | Een **bestand** verplaatst naar de kluiswortel. **Tekst** opent het veld bij de wortel, om de notitie te noemen die het moet worden |
| Een **mapnaam** | Selecteert die map om te bewerken, met de inhoud van de bovenliggende map eronder | Retypt die map en alles eronder | Opent die map in een nieuw tabblad | Het contextmenu van die map — hetzelfde als dat van de Bestandsverkenner | Een **bestand** verplaatst naar die map. **Tekst** opent daar het veld, om de notitie te noemen die het moet worden |
| Een **scheidingsteken** | Opent de map ervoor — de mapnotitie ervan als er een mapnotitie-plugin draait en er een bestaat, anders toont en vouwt het de map open in de Bestandsverkenner | **Maakt de notitie van die map** en gaat ernaartoe, waar een mapnotitie-plugin draait en de map er nog geen heeft. Heeft de map er al een, dan is dit gewoon opnieuw de enkele druk | De mapnotitie in een nieuw tabblad als er een bestaat; anders een tabblad dat bij die map staat met de lijst zichtbaar | Hetzelfde contextmenu van de map als de naam geeft — dat van zijn mapnotitie, als hij er een heeft | Op het einde van de notitie van die map, als hij er een heeft, zodra je bevestigt |
| De **naam van de notitie** | Opent de naam om te bewerken — de mappen blijven als chips ernaast staan — met alles behalve de extensie gemarkeerd | Neemt de extensie ook op in de markering | Opent de notitie in een nieuw tabblad | Het contextmenu van het bestand — hetzelfde als de rij van de Bestandsverkenner geeft | Op het einde van deze notitie, zodra je bevestigt |
| De **lege ruimte** | Opent het **hele pad** om te bewerken, gemarkeerd tot aan de extensie. De mappen komen daarbij mee het veld in, wat dit tot het gebaar maakt voor het retypen van een pad in plaats van een naam | Neemt de extensie ook op in de markering | <kbd>Ctrl</kbd> opent deze notitie opnieuw in een eigen tabblad, kort opgelicht in de Bestandsverkenner zodat de kopie niet voor de eerste wordt aangezien. Middelklik is *niet* dat gebaar: het plakt over het pad heen | Markeert het hele pad en biedt aan wat er met gemarkeerde tekst kan gebeuren | |

**De tweede druk volgt op de eerste.** De notitie van een map maken zit op
welk deel van de rij dan ook die map *opent*, en dat is standaard het
scheidingsteken, en de mapnaam met de wissel uit — hetzelfde doel dat de
onderstreping markeert, en hetzelfde waar een enkele druk al om de mapnotitie
vraagt. Het wordt alleen aangeboden zolang een mapnotitie-plugin draait, omdat
een mapnotitie een afspraak is en geen feit over het bestandssysteem, en alleen
waar de map er nog geen heeft. Waar hij staat en hoe hij heet, wordt gelezen
uit de eigen instellingen van **Folder notes**, dus een kluis die zijn
mapnotities naast de map bewaart, of ze `_index` noemt, krijgt er zo een; het
bestand zelf is altijd Markdown, wat de eigen standaard aanmaakopdracht van
die plugin maakt en wat hij vindt ongeacht op welk type de kluis is
ingesteld. Verplaats-/hernoemmodus staat er helemaal buiten — niets op de rij
opent een map terwijl een verplaatsing in behandeling is.

**Klikken op de naam gaan door.** De vier treden zijn dezelfde vier die de
hernoemtoets doorloopt, in dezelfde volgorde: de naam, de naam met extensie,
het pad vanaf de kluis, het pad vanaf de systeemwortel. Dus een derde klik
bereikt het kluispad en een vierde dat van de machine — dezelfde vier dingen
die <kbd>Tab</kbd> voorbij het einde van het veld je geeft, en dezelfde vier
die de rechterknop *kopieert* in plaats van selecteert.

**Zweven** geeft zijn eigen antwoord en verandert nooit iets: een verkorte
naam komt weer volledig terug zolang je ernaar wijst, en het pictogram aan het
begin van de rij zegt waar de kluis leeft.

## Rechtsklik: één druk, twee drukken, drie

Elk doel op de rij reageert op een rechtsklik, en hoeveel drukken je eraan geeft, bepaalt wat je krijgt. Omdat een tweede druk er nog aan kan komen, wacht de eerste ongeveer een derde seconde voordat hij handelt — de prijs van drie gebaren op één knop.

| Waar je drukt | Eén keer | Twee keer | Drie keer |
| --- | --- | --- | --- |
| De **kluisnaam** | Het contextmenu van de kluis: wat er kan gebeuren met de kluis die dat segment benoemt — inclusief *Deze kluis openen*, als die kluis niet degene is waarin je je bevindt | Kopieert de naam van de kluis | Kopieert waar de kluis zich bevindt — en een vierde druk, waar het geopende bestand zich bevindt |
| Een **scheidingsteken** | Het menu van die map — dat van zijn mapnotitie, als er een mapnotitie-plugin draait en de map er een heeft | | |
| Een **mapnaam** | Het menu van die map | Kopieert de naam van de map | Kopieert deze en alles rechts ervan |
| De **naam van de notitie** | Het menu van het bestand — hetzelfde als de rij van de Bestandsverkenner geeft | Kopieert de naam | Kopieert deze met de extensie |
| De **lege ruimte** | | Kopieert het pad vanaf je kluismap, zonder de extensie | Hetzelfde, met extensie |

Eén druk op de **kluisnaam** opent wat er kan gebeuren met wat dat segment ook
benoemt. Voor **de kluis waarin je je bevindt**: open hem in een nieuw
venster, beheer kluizen, kopieer waar hij leeft, kopieer zijn ID, toon hem in
je bestandsbeheerder. Voor **een andere kluis**, bereikt via de lijst met
locaties, hetzelfde min het nieuwe venster — dat immers *deze* kluis zou
openen, niet die — plus het ene ding dat alleen een kluis waarin je je niet
bevindt kan bieden: **Deze kluis openen**. Die wordt bij Obsidian benoemd naar
zijn ID in plaats van naar zijn mapnaam, aangezien twee kluizen er een kunnen
delen. Voor iets dat helemaal geen kluis is — je thuismap, een aangekoppelde
schijf — is er geen ID om te kopiëren en niets om te openen, en het menu zegt
dat door ze niet aan te bieden.

Dit is niet het eigen menu met drie puntjes van Obsidian, dat bij het
startvenster hoort en niet vanuit een draaiende kluis geopend kan worden —
dit zijn dezelfde items opnieuw opgebouwd, in Obsidians eigen bewoordingen,
overgenomen uit zijn opdrachten zodat ze in jouw taal aankomen. Drie items uit
dat menu staan hier bewust **niet** in: *kluis hernoemen*, *kluis verplaatsen*
en *uit lijst verwijderen* werken allemaal in op de eigen map van de kluis of
op Obsidians register van kluizen, en dat doen bij de kluis waarin je op dat
moment staat — met de bestanden ervan geopend en de watchers ervan draaiend —
is hoe een kluis kapotgaat. Open het kluisbeheer (*Andere kluis openen*) en
doe ze daar, waar de kluis gesloten is.

De twee kopieën op de **lege ruimte** zijn de rij zoals hij geschreven staat —
wat een link of een zoekopdracht wil — en die op de **kluisnaam** zijn de
paden die het bestandssysteem kent, wat is wat alles buiten Obsidian wil.
Elke druk daar verbreedt waar de kopie goed voor is: twee geven de naam van de
kluis, drie waar de kluis zich bevindt, vier waar het geopende bestand zich
bevindt. Obsidian maakt hetzelfde onderscheid in zijn eigen twee opdrachten,
*vanaf kluismap* en *vanaf systeemwortel*; hier staan de naar buiten gerichte
op het segment dat zelf buiten het pad staat.

Dit werkt ook allemaal buiten de kluis, op dezelfde doelen.

Elke kopie meldt dat via een melding, omdat een kopie niets op het scherm achterlaat om te tonen dat het gebeurd is, en een verkeerd getelde druk niet moet lijken op een geslaagde.

## Wijzigingstoetsen: open het ergens anders

De naam van de notitie en de mapsegmenten gedragen zich als hun rijen in de Bestandsverkenner.

| | Op de naam van de notitie | Op een mapsegment |
| --- | --- | --- |
| Gewone klik | De naam bewerken | Door die map bladeren |
| <kbd>Ctrl</kbd> / middelklik | De notitie openen in een nieuw tabblad | De map naar een nieuw tabblad sturen |
| <kbd>Ctrl</kbd>+<kbd>Alt</kbd> | Een gesplitst venster | Een gesplitst venster |
| Slepen | De notitie, overal waar Obsidian een bestand naartoe neemt | De map, evenzo — inclusief de tabbladbalk |

Een map is niet iets dat Obsidian kan openen, dus het sturen van een map naar
een tabblad doet een van twee dingen: opent zijn mapnotitie, als er een
mapnotitie-plugin draait en er een is, of opent een leeg tabblad waarvan de
padbalk al in die map staat — waarbij je alleen nog de naam hoeft te typen. Een
mapsegment neerzetten op de **tabbladbalk** doet hetzelfde, in een nieuw
tabblad waar je loslaat — Obsidians eigen tabbladbalk neemt uit zichzelf alleen
bestanden aan, dus een map die uit de Bestandsverkenner wordt gesleept, wordt
ook daar nog steeds afgewezen.

## Tab: eerst de naam aanvullen, dan het pad, dan de selectie verbreden

<kbd>Tab</kbd> vult aan zoals een shell dat doet: **een druk verlengt wat je typte tot waar de namen in die map overeenkomen, en stopt waar ze verschillen.** Typ `Sk` waar alleen `Sketches` zo begint en het woord is klaar; typ `Al` waar `Alpha-one`, `Alpha-two` en `Alpine` dat allemaal doen en je krijgt `Alp`, omdat het volgende teken een vraag is die alleen jij kunt beantwoorden.

Druk opnieuw zonder te typen en het loopt naar één naam toe — de rij die de lijst gemarkeerd heeft, of de eerste — en stopt bij de volgende dubbelzinnigheid van die naam: `Alpha-`, dan `Alpha-one`. De lijst opent op waar je al bent, dus in je eigen map gaat de eerste druk naar de notitie die je open hebt, in plaats van naar wat er als eerste gesorteerd staat.

**Een druk kiest nooit voor jou tussen namen.** <kbd>Tab</kbd> stapt een map in zodra wat je typte nog maar één kandidaat overlaat, of zodra je de hele naam van de map hebt getypt en geen *andere map* die verlengt. Waar dat wel zo is — `Schemes` naast `Schemes2026` — blijft <kbd>Tab</kbd> verder aanvullen naar de langere naam; <kbd>Enter</kbd> en de lijst zijn de gebaren die *deze hier* betekenen.

Een **bestand** houdt een map nooit op die manier tegen. Een map naast een notitie met dezelfde naam is een mapnotitie, geen splitsing in het pad, en <kbd>Tab</kbd> loopt door mappen — dus `Projects` met een `Projects.md` ernaast wordt ingestapt als elke andere.

Twee kleinere dingen die daaruit volgen: wat in het veld terechtkomt, wordt gespeld zoals de map het spelt, dus `sk` wordt `Sketches`; en alleen de naam die getypt wordt, wordt vervangen, dus een pad met meer rechts ervan behoudt dat.

Met een naam die wordt aangeboden terwijl je typt, **schrijft** <kbd>Tab</kbd> **precies het aanbod**: het aanbod is altijd wat de druk zou schrijven, en de onderstreping en de groene lijn van de lijst zeggen hetzelfde, dus wat je na de cursor ziet, is wat je krijgt. Waar de namen ophouden overeen te komen, is dat de stap naar de eerste ervan — of naar de rij waar je met de pijltjes naartoe ging, die <kbd>Tab</kbd> neemt in plaats van de rij ernaast — dus pijl naar de rij die je wilt, of typ voorbij de splitsing, voordat je drukt. Alleen waar het aanbod nog maar *één* naam overlaat, stapt dezelfde druk erin.

Aankomen bij de naam van het bestand **is** de eerste trede — er wordt geen druk besteed aan het parkeren van de cursor aan het eind van een naam die hij op het punt staat te markeren. Vanaf daar stoppen de drukken met langs het pad bewegen en beginnen ze de selectie te verbreden:

1. de naam
2. de naam met de extensie
3. het pad vanaf je kluismap
4. het pad vanaf de systeemroot
5. terug naar het begin van het pad **zoals het er nu bij staat** — staand waar de tocht begon, eerste segment gemarkeerd, klaar om opnieuw doorlopen te worden

Een vierde klik bereikt diezelfde vierde trede rechtstreeks.

Verbreden **verbreedt** alleen maar. Een naam die al helemaal in het veld staat — voltooid met dezelfde toets, of gekozen uit de lijst — wordt in zijn geheel gemarkeerd in plaats van dat de extensie er eerst weer af gaat: de eerste trede is voor een naam waar de tocht net *aankomt*, waar de extensie nog niet aan de orde is.

De ladder is waar de tocht **aankomt**, niet waar hij begint. Klik op een map in het midden van een pad en het veld opent op alles daaronder met de naam van die map gemarkeerd; elke <kbd>Tab</kbd> neemt dan **één** map — markeert de volgende, houdt de rest van het pad erachter — en pas als er niets meer over is dan de bestandsnaam, begint het verbreden:

| druk | kruimels | veld | gemarkeerd |
| --- | --- | --- | --- |
| geklikt op `a` | | `a/b/c/leaf.md` | `a` |
| <kbd>Tab</kbd> | `a` | `b/c/leaf.md` | `b` |
| <kbd>Tab</kbd> | `a › b` | `c/leaf.md` | `c` |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf` — de eerste trede |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf.md` |

**Een naam die is vastgezet, is vastgezet, hoe je hem ook vastzet.** Hem aanvullen met
<kbd>Tab</kbd>, hem bevestigen met `/`, en hem uit de lijst kiezen laten allemaal de rij
op dezelfde plek achter met hetzelfde pad, dus de druk na het gebaar betekent
hetzelfde ongeacht hoe je er kwam. Een map uit de lijst kiezen maakte vroeger juist
het veld leeg, waardoor een pad verloren ging dat dezelfde map bereiken met <kbd>Tab</kbd>
zou hebben behouden.

**Een pad dat je nog aan het schrijven bent, komt volledig mee.** Instappen in juist de map waar de rest van het pad aan hangt, is geen bewering dat de rest bestaat — het is hoe een pad vooruit op zichzelf getypt wordt, en de mappen die het noemt zijn precies de mappen die <kbd>Enter</kbd> op het punt staat te maken. Dus door `Dokumente/plans/untitled.md` af te lopen naar `Dokumente` blijft `plans/untitled.md` voor je staan, of `plans` er nu al is of niet. Hetzelfde geldt voor een pad dat je vanuit het niets typte: niets ervan was ergens vandaan geërfd, dus niets ervan wordt afgenomen.

**Een stap voor een andere verruilen is het andere verhaal, en dan komt het pad alleen mee voor zover het er echt is.** Verruil een map in het midden van een pad voor een buur — klik op `a`, typ een andere naam, druk op <kbd>Tab</kbd> — en alles daaronder gaat mee, omdat het pad waar je op stond meestal het grootste deel is van het pad dat je wilt. Alleen wat daar echt bestaat, overleeft de wissel, dus het veld en de lijst ernaast spreken elkaar nooit tegen: wat voor je overblijft, is een pad dat je echt zou kunnen aflopen. Uitgaand van `a/b/c/leaf.md`, met `a` aangeklikt en de naam gemarkeerd:

| wat je vastzet | kruimels | veld | gemarkeerd |
| --- | --- | --- | --- |
| `x`, dat helemaal geen `b` heeft | `x` | | er kwam niets mee |
| `y`, dat een `b` heeft maar geen `c` erin | `y` | `b` | `b` |
| `z`, een tweeling van `a` helemaal door | `z` | `b/c/leaf.md` | `b` |

Een map die zo alleen achterblijft, is nog steeds een map om in te stappen: de druk erna stapt erin, in plaats van te beginnen met een selectie over de naam ervan te verbreden.

Een naam die **niets** in de map matcht, wordt anders beantwoord, omdat er niets door is vastgezet: de druk markeert wat je typte, klaar om het te overtypen, in plaats van te antwoorden met iets anders.

Het geheel is een **lus, en er rondgaan kost niets**: de druk na de laatste trede geeft de rij terug aan het begin van het pad, mappen en al, klaar om er opnieuw rond te gaan. Het enige dat ooit de rij verlaat, is het absolute voorvoegsel, bij de druk die stopt het te tonen.

Wat terugkomt, is **het pad dat je gebouwd hebt**, niet het pad waar je vandaan kwam. Splits de tocht halverwege — kies een andere buur uit de lijst, vul aan naar een andere naam — en de ronde sluit op waar je werkelijk bent; de vier tredes ervoor beschrijven datzelfde pad, en deze zou vroeger de vreemde eend zijn geweest die het verleden beschreef.

<kbd>Shift</kbd>+<kbd>Tab</kbd> sluit dezelfde ring de andere kant op: aan het begin van het pad, met niets meer terug te geven en nergens hoger, gaat de volgende druk naar de **verste** trede — het pad vanaf de systeemroot — en gaat vandaar verder met versmallen. Geen van beide richtingen loopt dood.

Er wordt ook geen druk besteed aan een trede die al is getoond. Onder de laatste trede — de naam zonder extensie — is de ladder voorbij, en *dezelfde druk* verlaat de map: het pad vanaf de systeemroot, het pad vanaf je kluis, de naam, de naam zonder extensie, dan de map, telkens één stap.

Er wordt ook geen druk besteed aan een trede die niets verandert: klikken op de naam van een notitie toont die al zonder extensie, wat precies is wat de eerste trede toont, dus vandaar begint <kbd>Tab</kbd> bij de tweede.

Elke trede verandert wat er *in* het veld staat, niet alleen wat gemarkeerd is — een selectie moet over de tekst staan die zij benoemt, anders zou <kbd>Enter</kbd> iets anders bevestigen dan wat je ziet geselecteerd. De ladder hoort bij één bewerkingssessie: klik weg, of typ wat dan ook, en de volgende <kbd>Tab</kbd> vult opnieuw een naam aan.

### <kbd>Shift</kbd>+<kbd>Tab</kbd>: dezelfde weg terug

<kbd>Shift</kbd>+<kbd>Tab</kbd> neemt per druk één stap terug, in de volgorde waarin de drukken gemaakt zijn: de selectie versmalt trede voor trede, elke aanvulling wordt teruggegeven, en elke map wordt uitgestapt — de naam ervan keert terug in het veld zodat je haar kunt bewerken in plaats van opnieuw te typen.

**Er wordt onderweg terug niets verwijderd.** Een aanvulling wordt teruggegeven door de tekens die zij toevoegde te *markeren*, precies zoals voorwaarts gaan markeert wat het heeft verbreed — de naam blijft voor je staan, en elke volgende druk markeert er nog een stap meer van:

| | veld | gemarkeerd |
| --- | --- | --- |
| ingestapt | `Alpha-one` | |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `ha-one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `Alpha-one` |

Typen vervangt het gemarkeerde deel, zoals overal elders. <kbd>Tab</kbd> zet precies terug wat de markering teruggaf, dus twee stappen uit en twee stappen weer in brengt je terug waar je was.

Zodra de hele naam gemarkeerd is, is er niets meer over dat een druk erin gezet heeft, en gaat de volgende druk *het pad omhoog*: hij verlaat de map waarin je staat, precies zoals <kbd>Backspace</kbd> op een leeg veld doet. Ook dat kost niets — de naam van de map komt terug in het veld **vóór** wat erin stond, gemarkeerd, wat dezelfde tekst is die op die map klikken je zou hebben gegeven. Terug is een richting, geen ongedaanmaakgeschiedenis — maar de naam eerst markeren betekent dat één druk nooit tegelijk terugneemt wat je schreef én je uit de map schrijft waarin je het schreef.

Tekst die opent **al geselecteerd** — wat een klik op een map achterlaat — is de naam waar <kbd>Tab</kbd> vervolgens op werkt: hij wordt aangevuld en ingestapt als elke andere, en typen vervangt hem. Alleen het focuscommando opent op een trede van de ladder zelf, omdat het je het hele pad toont in plaats van een map om te doorlopen.

## Iets typen dat geen pad is

| Wat je typt | Wat er gebeurt |
| --- | --- |
| `https://…` | Opent in een nieuw tabblad in Obsidians **Webviewer**, als je die kernplug-in aan hebt staan; anders in je desktopbrowser |
| `obsidian://…` | Doorgegeven aan Obsidians eigen URI-handler |
| `file:///…` | Gedecodeerd en geopend: als echte notitie als het binnen je kluis staat, in de viewer als dat niet zo is |
| `/home/you/a%20b.md` | Hetzelfde, voor een pad geplakt uit een browser of bestandsbeheerder |

Alleen expliciete schema's tellen mee — een notitie genaamd `100%20` blijft een notitie. Een `/` die bij een schema hoort, blijft letterlijk in plaats van een map in te dalen, zodat een URL met de hand getypt kan worden, en niet alleen geplakt.

## Een opdracht voor het toetsenbord

**Focus op de padbalk** opent het veld op de naam van de notitie en loopt hem af zoals <kbd>F2</kbd> doet — de naam, de naam met extensie, het pad vanaf je kluis, het pad vanaf de systeemroot — en de druk daarna sluit het veld en zet de cursor terug in de notitie. Het hernoemt niet: Enter navigeert, zoals in elk ander veld. Het heeft standaard geen eigen toets, omdat Obsidians richtlijnen ontmoedigen dat plug-ins er een claimen; de rij **Sneltoetsen** aan het eind van de instellingen van deze plug-in opent *Instellingen → Sneltoetsen* met alleen de opdrachten van deze plug-in, zodat je hem daar kunt binden.

## Navigeren raakt het geopende bestand nooit aan

In de standaardmodus (navigeren) wordt de geopende notitie **nooit** hernoemd of verplaatst.

- Een pad dat naar een bestaand bestand verwijst, opent het.
- Een pad dat nog niet bestaat, wordt gewoon aangemaakt, samen met eventuele ontbrekende bovenliggende mappen, en geopend. Elk bestand en elke map die zo gemaakt wordt, meldt dat via een notificatie — een nieuwe map is anders onzichtbaar tot je ernaar op zoek gaat — en Obsidians eigen prullenbak maakt een ongewenste map met één toetsaanslag ongedaan.
- **Buiten je kluis wordt eerst gevraagd.** Daarbuiten schrijft dezelfde tikfout in een systeemmap, waar noch de notificatie noch Obsidians prullenbak veel troost biedt.

## <kbd>Ctrl</kbd> — nieuw tabblad, en kopiëren in plaats van verplaatsen

Een notitie die **binnen de kluis wordt aangemaakt, verplaatst of gekopieerd, wordt getoond waar zij is terechtgekomen** in de Verkenner, even gemarkeerd in Obsidians accentkleur — de boomstructuur is waar je haar achteraf zoekt, dus ze wordt voor je neergezet in plaats van achtergelaten in een map die misschien niet eens open is. Dupliceren zegt dat ook: een kopie laat het origineel staan waar het was en opent de kopie in een eigen paneel, wat zonder verdere uitleg makkelijk te lezen valt als dat er niets gebeurd is.

<kbd>Ctrl</kbd> (<kbd>Cmd</kbd> op macOS) ingedrukt houden terwijl je een bestand uit de lijst kiest, of terwijl je op <kbd>Enter</kbd> drukt op een pad, stuurt het resultaat naar een **nieuw tabblad** in plaats van naar dit:

| | Gewoon | Met <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Een bestaand bestand kiezen of typen | Opent hier | Opent in een nieuw tabblad |
| Een pad typen dat niet bestaat | Vraagt, opent dan hier | Vraagt, opent dan in een nieuw tabblad |
| Een pad bevestigen in de verplaats-/hernoemmodus | **Verplaatst** de notitie daarheen | **Kopieert** haar daarheen en opent de kopie in een nieuw tabblad |

De modifier wordt met Obsidians eigen regel gelezen, dus hij gedraagt zich precies zoals op een link of een rij in de Verkenner — middelklik betekent ook "nieuw tabblad", <kbd>Ctrl</kbd>+<kbd>Alt</kbd> betekent een splitsing en <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> een nieuw venster.

Kopiëren weigert te overschrijven, net als verplaatsen — ook naar het eigen pad van de notitie, waar niets zinnigs te kopiëren valt. Buiten de kluis wordt die weigering ook hardop gezegd.

Het werkt allemaal **met de lijst open** net zo goed als zonder: op een gemarkeerde rij geldt de modifier voor die rij, en zonder iets gemarkeerd geldt hij voor wat je typte.

## Buiten de kluis bladeren

**Dit staat standaard uit.** Zet eerst **Toegang tot externe bestanden** aan in de instellingen — lezen en schrijven buiten de kluis is het enige dat deze plugin doet en Obsidian zelf niet, dus je stapt er bewust in in plaats van eruit. Staat het uit, dan toont de kluisnaam simpelweg je kluis in de Verkenner, en kijkt hier niets ooit verder.

Klikken op de **kluisnaam** (of het 🏠-pictogram, wanneer **Kluisnaam tonen** uit staat) opent een lijst met plekken in plaats van inhoud. Het veld dat opent bevat **het hele pad waar je op zat, volledig uitgeschreven**, met de plek waar het begint geselecteerd — dus ergens anders kiezen, of over de selectie heen typen, verruilt alleen dat eerste stuk en laat de rest van het pad voor je staan. **Druk de naam een tweede keer aan** — een dubbelklik — en de markering strekt zich uit over het geheel, en zo neem je het absolute pad in één handeling in plaats van het handmatig te selecteren. Bedenk je je, dan zet <kbd>Esc</kbd> de rij terug zoals hij was.

Typen hier krijgt de rest van een plaatsnaam aangereikt zoals overal, en <kbd>Tab</kbd> **zet die plek vast** — die waar je op wijst, of die waar de naam alleen naar kan verwijzen. Waar meerdere plekken nog delen wat je hebt getypt, stopt de druk bij de splitsing, zoals overal. Op een plek wijzen toont **het eigen pad van die plek**, allemaal geselecteerd, gevolgd door het pad van je notitie alleen zover als het daar echt reikt — precies waar kiezen ervan je zou brengen. Een plek is geen stap binnen het pad op het scherm, maar een plaats om het hele pad vanaf te tellen, dus niets van waar je was blijft ervoor staan.

De aangeboden plekken:

- **Je andere kluizen**, gelezen uit Obsidians eigen register, de laatst geopende eerst, elk onder Obsidians eigen kluispictogram — hetzelfde dat de applicatie voor haar kluiscommando's gebruikt. De kluis die je al open hebt krijgt in plaats daarvan een huisje: dat is waar de rij standaard begint, niet ergens om heen te gaan.
- Je **persoonlijke map**, onder je eigen accountnaam, gemarkeerd met een `~`. Lucide heeft geen tilde, dus dit pictogram tekent de plugin zelf op Lucides eigen 24×24-raster met dezelfde lijndikte — een pictogram dat de set mist, niet een tekstteken dat tussen pictogrammen zit.
- De **hoofdmap van het bestandssysteem**, met het label `root` — onvertaald, want zo heet hij op elk systeem — in plaats van `/`, dat naast het scheidingsteken erachter als een lege stap zou lezen.
- **Aangekoppelde stations**, met een pictogram per soort waar dat goedkoop te bepalen is: netwerkshares, optische schijven, diskettes en verwisselbare media krijgen hun eigen; al het andere krijgt een algemeen station. Op Windows verschijnen stations als `C:` met een algemeen pictogram — volumenamen en precieze soorten vergen WMI, wat bewust niet gebeurt.

Een andere kluis kiezen **laat Obsidian er niet naartoe overschakelen.** Alles wat je open hebt blijft open; het pad begint eenvoudigweg daar te bladeren. Dat is het hele punt van deze functie op de padbalk in plaats van het door te schuiven naar de kluiswisselaar in de zijbalk.

Ook komt het **zo dicht mogelijk bij de notitie waar je op zat als die plek daadwerkelijk reikt**.

- Als de plek die je koos de notitie *bevat* — de persoonlijke map, of waar je kluizen ook leven — krijg je het pad ernaar vanaf daar: kies `~` met `takeaways.md` open en het veld leest `Vaults/jouw-kluis/takeaways.md`.
- Is het een plek naast deze — een andere kluis, een ander station — dan wordt hetzelfde relatieve pad geprobeerd, zo diep als het daadwerkelijk bestaat. Kluizen zijn vaak bijna-kopieën van elkaar, en de reden om naar één te springen is meestal dezelfde notitie daar.

Hoe dan ook blijft de rij bij de plek die je koos en **opent de eerste map van dat pad geselecteerd**, dezelfde vorm die klikken op een map geeft: de stap die je het waarschijnlijkst verandert wanneer je ergens anders naartoe springt is die het dichtst bij het begin, en de rest van het pad blijft zichtbaar terwijl je hem verandert. Er wordt nooit iets vooraf ingevuld dat niet echt op de schijf staat.

### Terwijl je buiten bent

Het pad **begint bij de locatie die je koos**, niet bij de mappenindeling van de machine — en dat geldt ook voor het veld dat je krijgt door op de lege ruimte te klikken of de focustoets in te drukken: het bevat het pad vanaf die plek, niet het absolute pad van de machine, waarbij het spoor tot de plek zelf wordt ingekort precies zoals het binnen tot de kluisroot wordt ingekort — kies `Archief` en de rij leest `Archief / notities / …`, niet `/home/jij/Vaults/Archief/notities/…`. Het eerste segment draagt een pictogram voor wat het is (kluis, persoonlijke map, station), en <kbd>Backspace</kbd> stopt daar in plaats van verder omhoog de rest van het bestandssysteem in te lopen. Met **Kluisnaam tonen** uit is dat segment het pictogram alleen — de instelling gaat over het openingssegment van de rij, welke kluis het ook noemt, niet alleen je eigen kluis.

De padbalk blijft **omkaderd in de foutkleur** — dezelfde ring die de hernoemmodus tekent — zolang hij buiten je kluis wijst. Hij markeert een blijvende toestand, geen moment: zolang hij er staat, geldt niets van Obsidians eigen afhandeling voor wat de rij toont, en schrijven is vergrendeld tot je anders zegt.

Verder werkt bladeren zoals binnen: chips, scheidingstekens, typen, aanvulling, <kbd>Backspace</kbd> om eruit te stappen. Dezelfde zichtbaarheidsregels gelden ook, dus niet-ondersteunde extensies hebben nog steeds Obsidians **Toon alle bestandsextenties** nodig en verborgen bestanden nog steeds de instelling van deze plugin.

**Rechtsklikken werkt daarbuiten ook**, al is het een ander menu: de eigen afhandelaars van de Verkenner hebben een bestand nodig dat de kluis kent, dus items buiten worden in plaats daarvan opgebouwd uit het pad. Ze bieden openen (hier, rechts ernaast, in een nieuw venster, of in de standaardapplicatie van je bureaublad), **Pad kopiëren**, **Tonen in systeemverkenner**, en — zodra het hangslot open is — **Nieuwe notitie**, **Nieuwe map**, **Kopie maken**, **Hernoemen…** en **Verwijderen**. **Slepen** heeft nog steeds een kluisbestand nodig en blijft onbeschikbaar.

Hetzelfde menu zit op het geopende bestand in de weergave, via rechtsklikken of vanaf de eigen drie puntjes van het paneel, en het vraagt het hangslot in de kopbalk van die weergave. Het vraagt verder niets: of het bestand gerenderd wordt of als bron getoond, heeft geen invloed op of het verwijderd kan worden, en een afbeelding of een PDF — die helemaal geen bronweergave heeft — is net zo verwijderbaar als een notitie. **Verwijderen** betekent de prullenbak van het bureaublad, dus het kan van daaruit ongedaan gemaakt worden; een systeem zonder prullenbak meldt dat in plaats van het bestand te vernietigen.

Verwijderen buiten de kluis verplaatst het bestand naar je **systeemprullenbak** — de Prullenbak op Windows, Prullenmand op macOS — nooit een unlink. Hierbuiten is er geen Obsidian-prullenbak om uit te herstellen, dus een verwijdering die niet ongedaan gemaakt kan worden wordt helemaal niet aangeboden: waar een platform geen prullenbak heeft, meldt de poging dat in plaats van het bestand te vernietigen.

### Buiten de kluis schrijven

Alles wat schrijft is **standaard vergrendeld**. Zolang de rij buiten je kluis wijst, wordt de plek van de hernoemschakelaar in de kopbalk ingenomen door een **rood hangslot** — dezelfde kleur als de ring rond de rij, en om dezelfde reden: het markeert een weigering. De twee zijn één bediening op één plek, dus er is nooit twijfel over wie van beide wat afsluit.

Drie drukken, in een cyclus:

| Druk | Wat je krijgt |
| --- | --- |
| Het rode hangslot | Hier schrijven is toegestaan. Het hangslot wordt vervangen door de hernoem-/verplaatsschakelaar |
| De schakelaar | Verplaats-/hernoemmodus, precies als binnen de kluis |
| De schakelaar opnieuw | De modus eindigt en het hangslot sluit weer — de toestemming overleeft niet waarvoor ze geopend werd |

**De hernoemtoets vraagt ook het hangslot.** Buiten je kluis laat een druk erop het hangslot even open en dicht flitsen in plaats van een modus te openen die elke commit zou weigeren: de weigering komt vóór het werk in plaats van erna. Druk het hangslot, of druk de hernoemtoets binnen een halve seconde opnieuw — de tweede druk verleent precies wat de knop verleent, voor deze locatie, en opent daarmee de hernoemmodus.

Binnen je kluis is er geen hangslot: er valt niets te ontgrendelen, en de schakelaar heeft simpelweg die plek.

De toestemming wordt verleend **aan een locatie, niet aan een moment**: ze overleeft alles wat je zou doen terwijl je op één plek werkt — een verplaatsing afronden, wegklikken van het invoerveld, een bestand openen — en eindigt wanneer je een andere kluis, station of hoofdmap in de lijst kiest, wanneer de rij terugkeert naar een kluisbestand, of bij die derde druk. Zo kost een reeks verplaatsingen binnen één map één druk, niet één per bestand.

Met het hangslot open gedraagt de padbalk zich daarbuiten zoals binnen:

| Handeling | Resultaat |
| --- | --- |
| Een naam typen die niet bestaat, <kbd>Enter</kbd> | Dezelfde "aanmaken?"-vraag als binnen; ontbrekende mappen worden ook aangemaakt. Een naam zonder extensie wordt een `.md`, precies als binnen |
| Verplaats-/hernoemmodus, een nieuwe naam typen | Hernoemt het bestand dat de rij toont. Een naam zonder extensie houdt die van het bestand — hierbuiten bevat een map elke soort bestand, en een hernoeming hoort niet stilzwijgend een `.png` in een `.md` te veranderen |
| Verplaats-/hernoemmodus, elders bladeren, **deze naam behouden** kiezen | Verplaatst het daarheen onder de naam die het al heeft |
| <kbd>Ctrl</kbd> ingedrukt houden bij een van beide | Kopieert in plaats van te verplaatsen, en opent de kopie in een nieuw tabblad |

Vergrendeld melden al die handelingen wat hen tegenhoudt in plaats van te gebeuren. In geen van beide toestanden wordt iets overschreven: een doel dat al bestaat wordt geweigerd, en de weigering komt van het bestandssysteem zelf (`COPYFILE_EXCL`, een exclusief aanmaken) en niet van een controle die de race zou kunnen verliezen. Een verplaatsing over bestandssystemen heen — van een USB-stick af, van een netwerkshare af — valt terug op kopiëren-dan-verwijderen, en het origineel wordt pas weggehaald zodra de kopie is geland.

**Een notitie *uit* je kluis verplaatsen vraagt eerst.** `fileManager` kan een bestand niet over die grens heen volgen: elke link die naar de notitie wijst, houdt op te verwijzen, niets werkt ze bij, en de notitie verlaat de index van de kluis. Dus de verplaatsing wordt aangeboden als een beslissing in plaats van geweigerd of stilzwijgend uitgevoerd — een dialoogvenster zegt wat het kost en hoeveel notities naar de notitie linken die je verplaatst. Bevestig, en ze verplaatst echt: eerst gekopieerd, dan uit de kluis verwijderd via Obsidians eigen verwijderen, dus ze is net zo herstelbaar als een verwijderde notitie, en een mislukking bij een van beide stappen laat de notitie waar ze was. <kbd>Ctrl</kbd> ingedrukt houden kopieert haar in plaats daarvan nog steeds naar buiten, wat niets van dat probleem heeft. De andere kant op — een extern bestand *in* de kluis brengen — is nog niet aangesloten.

### Een extern bestand openen

Door het bestandssysteem bladeren kan terug **in de kluis komen die je open hebt** — vanaf de hoofdmap, vanaf de persoonlijke map, vanaf waar je kluizen ook leven. Een bestand dat zo bereikt wordt, is een gewone notitie, dus opent het ook als zodanig: de echte editor, links en backlinks, en de rij springt terug naar het pad geworteld in de kluis. Alleen bestanden waarvoor Obsidian geen weergave heeft, blijven in het voorbeeld, want daarbuiten is het voorbeeld het betere antwoord. Waar een voorbeeld toch zo'n notitie toont — een heropende werkruimte, bijvoorbeeld — biedt de bovenste regel **Openen in *(kluis)***, hetzelfde aanbod als handmatig.

Obsidians editor werkt alleen op bestanden binnen de kluis, dus een extern bestand **kan niet** als echte notitie geopend worden met links, backlinks en de rest — dat is een grens van de applicatie, niet van deze plugin. Er een kiezen opent in plaats daarvan een **voorbeeld**, alleen-lezen tot je anders zegt:

| Type | Weergegeven als |
| --- | --- |
| `.md`, `.markdown` | Gerenderde Markdown |
| `.html`, `.htm`, `.xhtml` | De gerenderde pagina |
| Afbeeldingen, audio, video, PDF | Native speler/weergave |
| Elk ander **tekst**bestand (`.json`, `.css`, `.log`, `.txt`, …) | Platte tekst, letterlijk |
| Binaire formaten zonder weergave (`.zip`, `.exe`, …) | Doorgegeven aan **Openen in standaardapplicatie** |

De weergave heeft twee lezingen van een bestand, en omdat ze elkaar uitsluiten wordt alleen die getoond waar je **naartoe** zou schakelen:

| | Wat het doet | Standaard voor |
| --- | --- | --- |
| **Als Markdown weergeven** | Rendert het bestand als notitie, alleen-lezen | `.md`, `.markdown` |
| **Als pagina weergeven** | Rendert het bestand als de pagina die het is, alleen-lezen | `.html`, `.htm`, `.xhtml` |
| **Als tekst bewerken** | De bron, bewerkbaar | al het andere |

Buiten de kluis is **Als tekst bewerken** ook de druk die alleen-lezen opheft — de modus en de toestemming zijn één handeling in plaats van twee knoppen om over na te denken. Hij kleurt rood **telkens als indrukken alleen-lezen zou opheffen**, of je nu ter plekke het bewerken scherpstelt of rechtstreeks uit de gerenderde weergave komt; binnen de kluis valt er niets te ontgrendelen, dus blijft hij gewoon. **Als Markdown weergeven** krijgt een lichte waas van de accentkleur — dezelfde tint die Obsidian aan geselecteerde tekst geeft — die hem markeert als de weg terug in plaats van als een oproep tot actie.

Omdat de knop het *bewerken* volgt en niet de kale modus, biedt een bestand dat alleen-lezen in de tekstweergave staat nog steeds **Als tekst bewerken**: dat is de druk die het scherpstelt. Een bestand waarin nooit getypt kan worden — ingekort of onleesbaar — zegt in plaats daarvan **Als tekst weergeven**, want dat is alles wat die druk kan leveren.

De standaarden zijn de bruikbare in plaats van de letterlijke: een `#` in een shellscript is een commentaar, geen kop, dus een `.log` als Markdown renderen zou hem stilzwijgend opslokken. Beide standaarden kun je per bestand overrulen, en de keuze gaat de geschiedenis van het tabblad in, zodat terug/vooruit en een heropende werkruimte hem behouden — heel wat notities leven in `.txt`-bestanden, en heel wat `.md`-bestanden lezen makkelijker als bron.

#### Wat een HTML-pagina mag doen

Niets. De pagina wordt getoond in een frame met **elke toestemming ingehouden** — geen scripts, geen formulieren, geen navigatie, geen eigen oorsprong — en een contentbeleid dat het helemaal geen netwerktoegang toestaat. Dat is geen voorzichtigheid om de voorzichtigheid: een lokale pagina die op de gewone manier geladen wordt, zou de oorsprong van dit venster delen, en dit venster is Obsidian, dus een script in een gedownload HTML-bestand zou binnen je applicatie draaien met het bereik van je applicatie.

Wat dat kost is alles wat de pagina *doet*; wat het behoudt is alles wat de pagina *is*. De stylesheets en afbeeldingen naast het bestand worden ingelezen en meegenomen in het frame, zodat een opgeslagen pagina er nog steeds als zichzelf uitziet. Verwijzingen die uit de eigen map van de pagina wijzen, en verwijzingen naar ergens op het web, blijven precies zoals ze geschreven zijn en laden simpelweg niet — een lokaal bestand kan niet stilzwijgend een server vertellen dat je het geopend hebt.

Scripts worden **verwijderd** in plaats van slechts geblokkeerd, zodat de pagina die je ziet en de bron waar je naartoe kunt schakelen op één benoemde manier verschillen in plaats van in wat het frame stilzwijgend weigerde uit te voeren. Links binnen de pagina doen niets. Wil je het echte werk — scripts, netwerk en al — dan geeft **Openen in standaardapplicatie** het door aan je browser, wat daar het juiste gereedschap voor is.

**Bestanden in je kluis zijn meteen bewerkbaar**, zonder ontgrendeling: *Als tekst bewerken* is een echte editor en schrijft terug terwijl je typt.

**Het bewerken wordt onthouden over de wissel heen.** Naar *Als Markdown weergeven* gaan schort het op — een statische render heeft niets om in te typen, en Live Preview heeft Obsidians eigen editor nodig, die alleen bestaat voor bestanden binnen de kluis — dus niets beweert dat je aan het bewerken bent terwijl je daar bent. Terug naar *Als tekst bewerken* pakt de draad op waar je hem liet.

**Bestanden buiten de kluis openen alleen-lezen, en *Als tekst bewerken* heft dat op.** Die druk is de hele poort: tot hij plaatsvindt, wordt daarbuiten niets geschreven. Daarna wordt het bestand opgeslagen terwijl je typt, precies als een in de kluis; en de statusregel verandert van een slot in een potlood. De ontgrendeling geldt dat ene bestand in dat ene tabblad — naar een ander bestand navigeren vergrendelt opnieuw, en ze wordt bewust niet in de geschiedenis van het tabblad bewaard, zodat een heropende werkruimte nooit terugkomt met schrijven al scherpgesteld op een systeembestand waarvan je je niet herinnert dat je het opende.

**Ingekorte bestanden blijven hoe dan ook alleen-lezen** — opslaan wat op het scherm staat zou alles voorbij de limiet weggooien, dus de knop wordt helemaal niet aangeboden in plaats van aangeboden en geweigerd. Hetzelfde geldt voor een bestand dat niet gelezen kon worden: er is niets terug te schrijven dan een leeg paneel.

Mislukt het schrijven — een alleen-lezen koppeling, een bestand dat niet van jou is — dan wordt de reden van het systeem zelf in een melding getoond.

Heel grote bestanden worden ingekort getoond, en de statusregel zegt dat in plaats van je het te laten ontdekken — naast de andere toestanden en niet bungelend onder de knoppen, want het is net zo goed een feit over het bestand als de rest. De limieten worden gemeten tegen een echte renderer in plaats van geschat — een megabyte tekst in één paneel opmaken maakt Obsidians renderproces regelrecht dood, en Markdown kost per byte een veelvoud van platte tekst, dus de twee hebben aparte limieten en één enorme regel wordt ingekort ook als het bestand als geheel klein is.

**De statusregels zijn labels, en de uitleg is een tooltip.** Elke regel zegt in zo min mogelijk woorden wat waar is — *Buiten je kluis*, *Geen editor voor dit bestandstype*, *Ingekort — bestand te groot* — omdat de knoppen ernaast al zeggen in welke staat het bestand is. Er met de muis overheen gaan geeft de zin: waarom Obsidian het niet als notitie kan openen, wat er anders met dit bestandstype zou gebeuren, wat het inkorten je kost.

Dit geldt ook voor bestanden **binnen** je kluis. Obsidian geeft elke extensie waarvoor het geen weergave heeft rechtstreeks door aan de standaardapplicatie van je bureaublad — dus een `.txt` of een `.json` in je kluis zou je Obsidian helemaal uit voeren. Die openen nu in dezelfde weergave, met de oranje ring, want "open het in Obsidian" is wat je vroeg — en omdat het kluisbestanden zijn, zijn ze daar zonder enige ontgrendeling bewerkbaar. Binaire bestanden zonder weergave houden Obsidians gedrag; er valt niets te tonen.

Het voorbeeld opent **in het tabblad waarin je zat**, dus terug/vooruit brengen je naar de notitie waar je vandaan kwam; houd <kbd>Ctrl</kbd> ingedrukt voor een nieuw tabblad, zoals overal. De kopbalk blijft het pad van het externe bestand tonen zolang het open is, zodat je vandaar verder kunt bladeren.

Een rustige regel boven de inhoud biedt de uitgangen:

- **Openen in *(kluis)*** — getoond wanneer het bestand tot een van je andere kluizen behoort. Geeft het door aan Obsidians eigen URI-afhandelaar, die het venster van die kluis opent met de notitie erin, als een echte bewerkbare notitie. Dit venster blijft precies zoals het was; niets wisselt onder je.
- **Als Markdown weergeven** / **Als pagina weergeven** / **Als tekst bewerken** — de twee lezingen die dit bestand heeft; de laatste heft ook alleen-lezen op buiten de kluis.
- **Openen in standaardapplicatie** — geeft het bestand door aan de standaardapplicatie van je bureaublad, inclusief de binaire formaten die deze weergave niet kan tonen. Precies zo verwoord als Obsidians eigen item voor dezelfde actie, want het is dezelfde actie.

De weergave beantwoordt ook een **rechtsklik**: binnen de tekstbewerker met *Knippen* / *Kopiëren* / *Plakken* / *Alles selecteren*, en overal elders met het eigen menu van het bestand. Obsidians drie-puntjesmenu in de kopbalk draagt dat menu ook — buiten de kluis zou het anders niets aanbieden dan *Rechts splitsen* en *Onder splitsen*.

Er wordt niets buiten je kluis geschreven tenzij je eerst *Als tekst bewerken* indrukt. Zie het onderdeel [Buiten de kluis](README.nl.md#buiten-de-kluis) van de README voor de volledige verantwoording.

## Een bestand op een map in het pad neerzetten

Elke map in de rij is een drop-doel, dus **een notitie die op een map wordt
gesleept, verplaatst daarheen** — de kortste route hiernaartoe is die tussen een
notitie en een map erboven, omdat de bestemming al in beeld staat. Sleep vanuit
de Verkenner, vanuit de lijst, vanuit de eigen naam van de notitie in de kop, of
vanuit elke andere plek in Obsidian die een bestand oplevert: het is het slepen
van de app zelf, dus het label bij de aanwijzer, de cursor en de markering zijn
degene die de Verkenner tekent.

**De naam van de kluis neemt ook een drop aan**, omdat dit de map is die
boven in de rij staat — het enige gebaar dat een notitie van hier naar de
hoofdmap van de kluis brengt.

**Een hele selectie kan tegelijk gesleept worden**, en die verplaatst als één
geheel: als er ook maar één niet meegenomen kan worden, wordt de hele drop
geweigerd in plaats van dat sommige verplaatst worden en de rest stilletjes
overgeslagen wordt.

Links volgen de notitie, precies zoals wanneer die verplaatst wordt vanuit de
Verkenner of door een pad te typen.

Een map die **de drop niet kan aannemen, biedt zelf niets aan** — geen label
*Verplaats naar*, geen markering op de map — in plaats van iets aan te bieden
dat vervolgens zou mislukken; Obsidians eigen antwoord voor de kop, *Openen in
dit tabblad*, staat daar in plaats. Drie gevallen:

- de map waar het bestand **al in staat**, omdat het daar al staat;
- een map die neergezet wordt **in zichzelf of in een eigen submap**, wat het
  nergens vandaan zou laten komen;
- een selectie met **een map en iets erin**, omdat het verplaatsen van de map
  het onderliggende bestand meeneemt.

Een map die al een **bestand met dezelfde naam** bevat, neemt de drop aan en
vraagt wat er met het bestand in de weg moet gebeuren, met dezelfde dialoog als
een getypte of gekozen naam die al bestaat — zie [Een naam die al bestaat](#een-naam-die-al-bestaat).
Niets hier wordt overschreven.

Alleen mappen **binnen je kluis** nemen drops aan. Terwijl de rij naar buiten
de kluis wijst, wijzen de segmenten af, omdat het uit de kluis halen van een
notitie elke link ernaartoe verbreekt — een beslissing die een vraag verdient
in plaats van een gebaar. De manier om dit doelbewust te doen, is nog steeds
het pad te typen, wat eerst vraagt en je vertelt hoeveel notities erdoor
geraakt worden.

## Tekst of een bestand neerzetten om het op te schrijven

Dezelfde doelen nemen ook **inhoud** aan naast bestanden, en de twee worden
onderscheiden door wat je sleept, niet door waar je loslaat.

**Op een notitie die de rij al benoemt** — de eigen naam van de notitie, of een
scheidingsteken waarvan de map een mapnotitie heeft — komt wat je liet vallen
aan het einde ervan, na een lege regel. Er wordt eerst gevraagd, omdat dit in
een bestand schrijft dat er al is en slepen een gebaar is dat een onstabiele
hand per ongeluk kan maken. Tekst uit een editor, een bestand vanaf je bureaublad
en een notitie die uit deze kluis gesleept wordt, werken allemaal; een bestand
wordt als tekst gelezen, en een binair bestand wordt geweigerd in plaats van
erin geplakt als een schermvol onzin.

**Op een plek — de kluisnaam of een map** — wordt nog niets geschreven, omdat
er nog niets benoemd is. Het veld opent daar met wat je liet vallen erin, en de
naam die je typt, bevestigt het: een nieuwe notitie wordt *gemaakt* met die
tekst erin, en een bestaande wordt precies zoals hierboven gevraagd.
<kbd>Esc</kbd>, of een klik ergens anders, laat het hele geval los.

**De rij kleurt blauw** terwijl een sleepbeweging die als inhoud zou
terechtkomen erboven hangt, en blijft blauw terwijl het veld er een bevat —
hetzelfde blauw, dat hetzelfde zegt: wat er nu gebeurt, gaat over de tekst die
je meedraagt. Een bestand dat uit je eigen kluis op een map gesleept wordt,
betekent nog steeds *verplaats het daarheen*, houdt Obsidians eigen markering
aan, en kleurt nooit blauw; dat gebaar was er eerst en inhoud wijkt ervoor.

## Wanneer het pad langer is dan het paneel

Namen worden **verkort in plaats van samengeperst**, in de volgorde van wat je
het minst nodig zult hebben:

1. **Eerst de kluisnaam**, tot aan het pictogram. Je weet in welke kluis je
   zit; het pictogram blijft zeggen waar het pad begint.
2. **Dan de extensie van het bestand**, als je die aan hebt staan — dezelfde
   drie tekens op bijna elk bestand in een kluis. Die verdwijnt in zijn
   geheel in plaats van verkort te worden: een halve extensie zegt niets dat
   geen extensie ook niet zegt.
3. **Dan de mappen, langste eerst.** De langste mapnaam wordt verkort tot de
   lengte van de volgende langste, dan worden beide samen verkort, enzovoort,
   elk stoppend bij zijn eigen ondergrens — zodat één heel lange map alles
   wat hij te veel heeft ten opzichte van de andere opgeeft, voordat een
   korte naam ernaast een letter verliest.
4. **De eigen naam van het bestand als laatste**, en die houdt ongeveer zes
   tekens over. Daarvoor is de kop er.

Ruimte wordt **continu** opgegeven, in fracties van een pixel in plaats van
een letter per keer: een naam die wijkt, wordt bij de pixel afgesneden en
vervaagt onder zijn `…`, zodat een paneel dat langzaam versmald wordt, de rij
soepel versmalt en niets erna in stappen beweegt. Voordat er ook maar één
letter verdwijnt, wordt eerst de ruimte rond de scheidingstekens
opgesoupeerd — dat is de enige opvulling van de rij en het kost helemaal geen
informatie — en een verkorte naam eindigt waar het scheidingsteken begint,
zonder een strook lege ruimte tussen de twee.

**Het veld neemt wat het bevat.** Een veld openen om een pad te typen, drukt
de mappen ernaast niet aan de kant: het is zo breed als de tekst erin en
groeit terwijl je typt, zodat het spoor alles behoudt wat het veld niet nodig
heeft. Alleen wanneer er niet genoeg ruimte is voor beide, scrollt de rij, en
dan is het veld het enige dat nooit wijkt — het is tekst die bewerkt wordt,
geen naam die passend gemaakt wordt.

Er wordt niets weggesneden verder dan wat nodig is om het van zijn buren te
onderscheiden: `Projects2025` en `Projects2026` in dezelfde map komen neer op
`…025` en `…026` in plaats van op een voorvoegsel dat ze hetzelfde woord zou
maken, terwijl `Reports` naast `Receipts` kan neerkomen op `Rep…`. Daarbovenop
houdt elke naam een **leesbare breedte** aan — ongeveer vier letters breed voor
een map en zes voor een bestandsnaam, gemeten in het lettertype waarin de rij
daadwerkelijk getekend wordt in plaats van geteld. Vier smalle letters en vier
brede letters zijn niet dezelfde hoeveelheid naam, dus `lilliliillil` mag meer
van zichzelf behouden dan `WWMMWWMMWWMM`, en wat er op het scherm overblijft,
heeft in beide gevallen dezelfde grootte. Korte namen worden helemaal met rust
gelaten — een naam die tot `A…` is afgeslepen, is uniek en toch onleesbaar.
**Spaties tellen er niet voor mee.** Zes tekens om te zeggen welk bestand dit
is, zijn zes tekens die het waard zijn om gelezen te worden, dus de spaties
ertussen liften gratis mee en er blijft er nooit een tegen de `…` aan staan,
waar hij toch onzichtbaar zou zijn.

**Een naam wordt afgesneden waar zijn buren ermee overeenkomen, en in het
midden waar ze nergens overeenkomen.** Twee mappen genaamd `aaaa-common-one`
en `aaaa-common-two` delen alles behalve hun laatste drie tekens, dus het
afsnijden van de staart behoudt de helft die niets zegt: ze komen in plaats
daarvan neer op `…one` en `…two`, wat korter is *en* ze onderscheidt. Waar de
overeenkomst aan het einde ligt — `alpha-draft` naast `beta-draft` — is het
einde wat verdwijnt; waar het aan beide einden ligt, blijft het midden staan.
Een naam zonder nabije buren verliest zijn midden, omdat een naam begint met
wat hij is en eindigt met welke hij is — voor een bestand, zijn extensie:
`annual…2026.md`.

Een korte overeenkomst telt niet mee. `parallel structures` eindigt toevallig
op dezelfde twee letters als `Schemes` ernaast, en dat is geen reden om
beide geheel te houden — drie tekens vanaf het begin onderscheiden ze al.

Niets loopt door naar een tweede regel. Wanneer zelfs de kortste eerlijke
namen niet passen, **scrollt de rij zijwaarts**, geparkeerd aan het einde waar
het bestand staat — op dat moment is er niets meer om samen te persen, en
verder afsnijden zou verhullen in plaats van verkorten. Het wieltje scrolt de
rij overal waar de aanwijzer erboven staat, en beide uiteinden zijn te
bereiken: terwijl er gescrold wordt, lijnt de rij zich aan het begin uit,
wat de uitlijningsinstelling ook zegt, omdat inhoud die gecentreerd is in een
vak dat het ontgroeid is, zowel links als rechts overloopt — en die linkerhelft
kan helemaal niet bereikt worden door te scrollen.

**Wijs een verkorte naam aan en die komt volledig terug**, zolang je hem
aanwijst, gescrold naar de linkerrand zodat alles wat terugkwam in beeld staat.
**Klik erop en hij blijft staan**: het veld opent en toont de map waarop je
klikte, wat erna aangeboden wordt en wat je typt, en het blijft dat tonen zodra
de aanwijzer weg is bewogen. Namen blijven op hun plaats terwijl je de rij
scrolt of erin typt — als er een openspringt onder een gebaar dat bedoeld is
om de rij te lezen, zou alles erna onder je uit verschuiven.

Het **openende segment draagt altijd een tooltip, en dat is het absolute
pad** — `/home/jij/Kluizen/Notities`, of waar de rij ook begint. Dat is het
enige aan de rij dat niets op het scherm anders kan zeggen: de naam vertelt
je *welke* kluis, nooit waar die is. Het is er, of er nu iets verkort moest
worden of niet.

Met **Kluisnaam tonen** uit is de naam niet verwijderd, alleen op niets
gehouden — dus het aanwijzen van het pictogram geeft hem terug, precies zoals
het aanwijzen van een naam die de rij moest verkorten dat doet.

**Bestandsextensies tonen** zet de extensie terug op de bestandsnaam van de
rij. Uit — de standaard — noemt de rij een notitie zoals Obsidian hem in de
titel noemt, zonder de `.md` die bijna elk bestand in een kluis deelt; aan,
noemt hij hem zoals het bestandssysteem dat doet, wat je wilt wanneer de
kluis meer dan alleen notities bevat. Het is ook het tweede dat de rij
opgeeft wanneer de ruimte krap wordt, direct na de kluisnaam.
Een tooltip geeft je de rest: niet alleen de naam, maar alles wat de rij
erboven toont, als `…/naam/map/notitie.md`, zodat één keer aanwijzen zowel
"wat is dit" als "wat staat erboven" beantwoordt. Het kluispictogram noemt
zijn kluis op dezelfde manier, wanneer de naam uitgeschakeld is of weggeperst
is.

## De waarschuwingskleuren

| | Wanneer | Wat het betekent |
| --- | --- | --- |
| **Rode** ring op de padbalk | De rij wijst buiten je kluis | Obsidian kan wat daar staat niet als notitie openen, en niets daarbuiten wordt geschreven totdat je het slotje opent. |
| **Oranje** ring op de padbalk | Het bestand is een teksttype waarvoor Obsidian geen weergave heeft | Een waarschuwing. Obsidian zou het doorgeven aan de standaardtoepassing van je systeem; de plugin toont het in plaats daarvan. |
| **Rode** tekst in het open veld | Er staat nog niets op dat pad | <kbd>Enter</kbd> zal het maken in plaats van het te openen. Niet zozeer een waarschuwing als een verklaring van wat de volgende toetsaanslag doet — zie [Een pad typen](#een-pad-typen). |
| **Rood** slotje in plaats van de hernoemschakelaar | De rij wijst buiten je kluis en schrijven daar is nog vergrendeld | Hetzelfde rood als de ring, om dezelfde reden: het markeert een weigering. Erop drukken staat schrijven hier toe en geeft de plek terug aan de schakelaar — zie [Buiten de kluis schrijven](#buiten-de-kluis-schrijven). |

De **twee ringen zijn onafhankelijk, en beide kunnen tegelijk gelden** — een
externe `.json` staat buiten je kluis *en* is een type waarvoor Obsidian geen
editor heeft. In de weergave verschijnen ze als afzonderlijke regels, elk met
alleen zijn eigen feit. Op de padbalk wint rood waar beide van toepassing
zijn, omdat twee ringen alleen ruis zouden zijn. De rode *tekst* is een
volledig apart geval: die gaat over wat er getypt wordt, niet over waar de
rij naartoe wijst, dus die kan binnen elke ring of geen van beide verschijnen.

De oranje laag is bewust smal. Geregistreerde types (Markdown, canvas,
afbeeldingen, PDF, audio, video) worden correct verwerkt en krijgen niets.
Binaire bestanden krijgen ook niets — je gaat een `.zip` niet per ongeluk tot
een puinhoop bewerken. Wat overblijft, is precies het risico: een `.json`,
`.css` of `.log` die **Alle bestandstypen tonen** zichtbaar heeft gemaakt. De
lijst is met opzet breder: daar is alles dat geen notitie is oranje — zie
[hoe items in de lijst getint worden](#hoe-items-in-de-lijst-getint-worden).

## Verplaats-/hernoemmodus

De potloodknop helemaal rechts in de kop — naast de knop voor weergavemodus,
dezelfde grootte als de eigen knoppen — schakelt de verplaats-/hernoemmodus in
en uit. Buiten je kluis staat er een rood slotje in plaats daarvan totdat je
erop drukt; zie [Buiten de kluis schrijven](#buiten-de-kluis-schrijven). De
kop wordt dan omkaderd in de accentkleur, precies zoals hernoemen in de
Verkenner. Dezelfde klikken en toetsaanslagen bevestigen nu een verplaatsing
of hernoeming via Obsidians `fileManager.renameFile`, zodat alle links naar de
notitie meelopen.

Tijdens het hernoemen:

- De huidige bestandsnaam wordt vastgezet in de lijst van elke map, zodat het
  verplaatsen van een notitie zonder hem te hernoemen één klik is.
- Namen die al bezet zijn in de doelmap zijn **rood** — een map die de naam
  al bevat, en een bestand met die naam — zodat de botsing te zien is voordat
  je kiest. Ze kunnen nog steeds gekozen worden: zie hieronder.
- Invoer wordt live gecontroleerd tegen Obsidians eigen regels voor
  hernoemen — dezelfde tekensets, dezelfde meldingen, dezelfde rode tooltip
  die je krijgt bij hernoemen in de bestandsboom — zodat een ongeldige naam
  gemarkeerd wordt terwijl je typt en niet bevestigd kan worden.
- Klikken buiten de kopbalk, of de kop die de focus verliest, beëindigt de
  hernoemmodus.

### Een naam die al bestaat

Verplaatsen of hernoemen naar een naam die er al is, **vraagt in plaats van te
weigeren.** Er opent een dialoog met twee paden die je kunt bewerken: waar je
bestand naartoe gaat, en waar het bestand dat in de weg staat naartoe gaat —
rood zolang dat nog bezet is. Elk pad wordt ook getekend zoals de padbalk er
een tekent, met de delen die verschillen gekleurd en als laatste verkort, zodat
een lang pad nog steeds laat zien wat er verandert.

Beide velden hebben een lijst. De tweede bevat de gebruikelijke uitwegen:

- **Plaatsen omwisselen** — het gaat naar de oude map van je bestand, onder
  zijn eigen naam.
- **Namen omwisselen** — het blijft staan waar het staat en neemt de oude naam
  van je bestand over.
- **Beide omwisselen** — het neemt het oude pad van je bestand over.
- `-1`, `-bak` en `-old` naast zijn eigen naam.
- De twee namen die de bestanden hadden.

De eerste lijst biedt waar je bestand naartoe zou gaan, **Blijven staan**,
zijn eigen naam in de doelmap, en `-1`, `-bak` en `-old` ernaast. Een uitweg
waarvan het pad al bezet is, is grijs en kan niet gekozen worden. Een keuze
maken **vult alleen het veld** — je kunt het nog steeds bewerken — en
**Toepassen** verplaatst beide, links en al; **Annuleren** verplaatst niets.
Een bezette naam uit de lijst kiezen vraagt hetzelfde, en zo ook het neerzetten
van een notitie op een map die de naam ervan al bevat.

## Eén toets voor beide hernoemingen

Het hernoemcommando (standaard <kbd>F2</kbd>, of wat je er ook van gemaakt hebt) **wisselt** tussen de inline-titel-hernoeming van Obsidian en de padbalk van deze plugin in de kop. Als je de inline titel van Obsidian hebt uitgeschakeld, wordt de padbalk in de kop het enige doelwit, zodat de toets nooit niets doet.

In de padbalk opent hij de **naam zonder extensie** — de bewerking die een hernoeming vrijwel altijd is, en hetzelfde als klikken op de naam selecteert. Druk er nogmaals op en hij doet wat <kbd>Tab</kbd> daar zou doen: op de naam is dat de volgende trede — de naam met extensie, het pad vanaf je kluismap, het pad vanaf de systeemroot; bij iets ingetypts vult hij het aan, zoals <kbd>Tab</kbd> doet.

**De cyclus sluit bij de kop.** Vijf keer drukken brengt je er helemaal rond — de inline titel, de naam, de naam met extensie, het pad vanaf je kluis, het pad vanaf de systeemroot — en de zesde is weer de inline titel. Die druk is de enige die verschilt van <kbd>Tab</kbd>, die in plaats daarvan terugspringt naar het begin van het pad — en de zevende gaat waar de ronde van <kbd>Tab</kbd> heen gaat: de kluisroot, met het hele pad in het veld en de eerste map gemarkeerd. Dus elke stap die <kbd>Tab</kbd> bereikt, bereikt de toets ook.

Het commando **Focus op de padbalk** doet hetzelfde binnen het veld — wat <kbd>Tab</kbd> ook zou doen — en waar <kbd>Tab</kbd> zou rondgaan, geeft het de cursor juist terug aan de notitie. De volgende druk erna is de ronde: de kluisroot, eerste map gemarkeerd.

**In een veld dat al open staat**, maakt de toets er een hernoeming van waar het staat — met behoud van de tekst, de cursor en de selectie — en **Focus op de padbalk** haalt de hernoeming er op dezelfde manier weer af. **Al het andere** dat tussen de drukken door wordt ingedrukt of aangeklikt, start beide cycli opnieuw, zodat een druk nadat je hebt bewerkt nooit op een overgebleven trede van eerder terechtkomt.

Buiten de kluis werkt de toets ook — daar is geen inline titel, dus de eerste druk gaat rechtstreeks naar de padbalk.

Dit werkt door het commando `workspace:edit-file-title` te omhullen in plaats van de toets af te vangen, dus de sneltoets opnieuw koppelen en het commando vanuit het palet uitvoeren werken allebei onveranderd.

## Hoe items in de lijst getint worden

| Kleur | Betekent |
| --- | --- |
| **Paars** | Een notitie (`.md`, `.markdown`) — wat Obsidian als notitie zal openen, uitgekozen uit een map met gemengde inhoud |
| **Oranje** | Geen notitie — alles wat Obsidian niet als zodanig zal openen, van een pdf tot een `.txt`, en de `:page`-items daarbij. Een map met gemengde inhoud wordt gelezen voor de notities erin, en één kleur voor al het andere zegt dat sneller dan een waarschuwing bij een paar ervan; zie [de waarschuwingskleuren](#de-waarschuwingskleuren) |
| **Gedempt** | Buiten je kluis, dus de eigen behandeling van de kluis geldt niet |
| **Blauw**, vet | Waar je je al bevindt: de eigen notitie van deze balk, en de map waarop de padbalk staat. In de verplaats-/hernoemmodus staat het item *deze naam behouden* in de plaats van de notitie — in beide gevallen dezelfde notitie |
| **Rood** | Alleen in de verplaats-/hernoemmodus: de naam is al in gebruik. Nog steeds selecteerbaar — een keuze vraagt wat er met het bestand in de weg moet gebeuren; zie [Een naam die al in gebruik is](#een-naam-die-al-bestaat) |

**Mappen staan vet**, zodat de eigen notitie van een map geen aparte kleur nodig heeft om zich van haar map te onderscheiden: ze is paars zoals elke andere notitie. Een **lijn langs de rand van een rij** markeert de namen die beginnen met wat je hebt getypt — blauw waar ze verder overeenkomen, groen op de tak die het aanbod volgt; zie [Een pad typen](#een-pad-typen).

Het veld neemt dezelfde kleuren aan voor wat het benoemt — zie [Een pad typen](#een-pad-typen).

## Zichtbaarheidsregels

- Bestanden met niet-ondersteunde extensies verschijnen alleen in de lijsten als de instelling **Detect all file extensions** van Obsidian aanstaat — **binnen de kluis**. Buiten de kluis geldt de instelling niet: ze bepaalt wat de kluis indexeert, en niets daarbuiten zit in de kluis, dus een `.txt` naast je notities wordt sowieso vermeld.
- De lijst toont tot 1000 items, tien keer de eigen limiet van Obsidian. Heeft een map er meer, dan vermeldt de laatste rij hoeveel er zijn weggelaten; blijf typen om de lijst te versmallen.
- Verborgen bestanden en mappen (met een punt ervoor) verschijnen alleen als de instelling **Verborgen bestanden tonen** van deze plugin aanstaat.
- **Overschrijfbeveiliging werkt identiek, ongeacht zichtbaarheid** — een verborgen bestand houdt je nog steeds tegen om het te overschrijven.

## Spiekbriefje

Een pad **tussen aanhalingstekens** wordt voor je uitgepakt. De functie *Copy as path* van Windows levert `"C:\Users\jij\notitie.md"` op, aanhalingstekens inbegrepen, en een shell doet hetzelfde voor elk pad met een spatie erin; zo'n pad plakken of typen werkt in beide gevallen. Alleen het dubbele aanhalingsteken, en alleen als bijeenhorend paar rond het geheel — het kan niet voorkomen in een echte naam, waar een apostrof dat juist wel kan.

| Je wilt… | Doe dit |
| --- | --- |
| Een map openen (haar notitie, of tonen) | Klik op het scheidingsteken **na** die map |
| Een map die geen mapnotitie heeft er een geven | **Dubbelklik** op datzelfde scheidingsteken (vereist een mapnotitie-plugin) |
| Een map voor een buur verruilen | Klik op de naam van die map, typ dan of kies |
| De notitie hernoemen of naar een ander doel sturen | Klik op de naam van de notitie — extensie inbegrepen |
| Door de inhoud van een map bladeren | Klik op de naam van die map; de lijst toont de inhoud van de bovenliggende map, dus klik op de map **onder** degene die je wilt |
| Een map en alles eronder opnieuw typen | **Dubbelklik** op de naam van die map, typ dan |
| Het pad vanaf een map naar beneden bewerken | Klik op de naam van die map, dan <kbd>→</kbd> om de selectie op te heffen |
| Naar een bestand springen door het pad te typen | Klik op de bestandsnaam of de lege ruimte, typ, <kbd>Enter</kbd> |
| Een bestand in plaats daarvan in een nieuw tabblad openen | <kbd>Ctrl</kbd> tijdens het kiezen, of <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| De notitie ergens naartoe kopiëren in plaats van verplaatsen | Potlood, dan <kbd>Ctrl</kbd> tijdens het kiezen of bevestigen van het doel |
| Een notitie aanmaken op een pad dat niet bestaat | Typ het pad — het veld wordt **rood** zodra niets in de lijst er ook maar mee overeenkomt — dan <kbd>Enter</kbd>. Binnen de kluis wordt het meteen aangemaakt; daarbuiten wordt eerst gevraagd |
| Nagaan of een getypt pad al bestaat | Kijk naar de kleur: die neemt de kleur aan van de rij die het benoemt, en rood betekent dat <kbd>Enter</kbd> het zou aanmaken |
| Eén niveau afdalen tijdens het typen | Typ `/` |
| Eén niveau teruggaan tijdens het typen | <kbd>Backspace</kbd> in de lege invoer |
| De mappen vóór het veld erin brengen | <kbd>←</kbd> aan het begin ervan voor één; <kbd>Shift</kbd>+<kbd>Home</kbd>, of <kbd>Home</kbd> met gesloten lijst, voor allemaal |
| De geopende notitie verplaatsen of hernoemen | Klik op het potlood, blader dan of typ zoals hierboven |
| Verplaatsen naar een naam die al in gebruik is | Bevestig het toch: het dialoogvenster laat je plaatsen, namen of beide verwisselen, of het bestand in de weg een andere naam geven |
| Verplaatsen zonder hernoemen | Potlood → klik in de doelmap → kies de vastgezette huidige bestandsnaam |
| Ter plekke hernoemen | <kbd>F2</kbd> tweemaal (eerste druk gaat naar de inline titel, tweede naar de kop) |
| Naar een andere kluis, thuismap of schijf springen | Klik op de kluisnaam |
| Een bestand van buiten de kluis openen | Kluisnaam → kies een locatie → blader → kies het bestand (alleen-lezen tot *Als tekst bewerken*) |
| De naam die wordt getypt aanvullen | <kbd>Tab</kbd>, of <kbd>End</kbd> voor wat wordt aangeboden; <kbd>→</kbd> neemt er één letter van |
| Erin stappen, zodra er nog één naam over is | Nogmaals <kbd>Tab</kbd> |
| Een stap terugnemen, of de map verlaten | <kbd>Shift</kbd>+<kbd>Tab</kbd> |
| Het hele pad grijpen, of het systeempad | <kbd>Tab</kbd> voorbij het einde, of vier keer klikken |
| Een naam, een pad of een systeempad kopiëren | Klik er tweemaal met rechts op; de lege ruimte driemaal voor het systeempad |
| Bereiken wat het kluisbeheer voor deze kluis biedt | Klik met rechts op het pictogram aan het begin van de rij |
| De ID van de kluis kopiëren | Klik met rechts op het pictogram aan het begin van de rij |
| Een andere kluis openen waarin je aan het bladeren was | Klik met rechts op haar naam aan het begin van de rij |
| De extensie van het bestand op de rij zien | Zet **Bestandsextensies tonen** aan in de instellingen |
| Een mapsegment in een nieuw tabblad openen | <kbd>Ctrl</kbd> of middelste muisknop erop, of sleep het naar de tabbalk |
| De padbalk vanaf het toetsenbord bereiken | Koppel *Focus op de padbalk* in Hotkeys |
| Een webadres of een `obsidian://`-link openen | Typ het in de balk en druk op <kbd>Enter</kbd> |
| Iets annuleren | <kbd>Esc</kbd>, of klik buiten de kopbalk |
| Items uitproberen voordat je ze bevestigt | Blader met pijltjes of muis door de lijst; <kbd>↑</kbd> voorbij de bovenkant geeft je tekst terug |
| Een notitie naar een map erboven verplaatsen | Sleep haar naar die map in de rij |
| Een stukje tekst als nieuwe notitie bewaren | Sleep de tekst naar een map, typ een naam, <kbd>Enter</kbd> |
| Een stukje tekst toevoegen aan de notitie die je leest | Sleep het naar de naam van de notitie, bevestig |
| Een ingekorte mapnaam volledig zien | Beweeg erover, of maak het paneel breder |
| Uitzoeken waar de kluis zelf zich bevindt | Beweeg over het pictogram aan het begin van de rij |
| Een notitie uit de kluis halen | Potlood → blader naar buiten → bevestig het dialoogvenster (links breken) |
| Schrijven buiten je kluis toestaan | Klik op het **rode hangslot** in de kop; de hernoemschakelaar neemt zijn plaats in |
| Weer vergrendelen | Klik op de schakelaar tot het hangslot terug is — eenmaal in, eenmaal uit |
| Een bestand buiten de kluis verwijderen | Open het hangslot, klik dan met rechts op het bestand: *Verwijderen* verplaatst het naar de prullenbak van je systeem |

## Instellingen

| Instelling | Opties | Standaard | Wat het doet |
| --- | --- | --- | --- |
| **Language** | Standaard van Obsidian, of een van de 46 talen | Standaard van Obsidian | In welke taal de eigen tekst van deze plugin staat. *Standaard van Obsidian* volgt de taal die in de weergave-instellingen is ingesteld, wat is wat bijna iedereen wil. De rij zelf — haar naam, haar beschrijving en *Standaard van Obsidian* — blijft in het Engels, ongeacht wat gekozen wordt, omdat het de weg terug is uit een taal die je niet kunt lezen. Grieks en Sanskriet zijn hier vertaald en ontbreken in de eigen lijst van Obsidian, dus deze instelling is de enige manier om ze te bereiken. |
| **Uitlijning** | Links / Centreren / Rechts | Links | Waar het pad in de kopregel staat. *Centreren* komt overeen met de klassieke look van Obsidian. |
| **Scheidingsteken** | Elk teken | `/` | Het scheidingsteken tussen segmenten. Zes voorinstellingen met één klik (`/ > ▸ › \ •`) staan voor het tekstveld. |
| **Kluisnaam tonen** | Aan / Uit | Aan | Of de kluis zelf het eerste segment van het pad is. Uitgezet wordt dat segment een 🏠-pictogram in plaats van te verdwijnen, zodat het pad nog ergens klikbaars begint. |
| **Mapnaam opent de lijst** | Aan / Uit | Aan | Verwisselt wat een mapnaam en het scheidingsteken erna doen — zie [de tabel hierboven](#het-pad). Met [Folder notes](obsidian://show-plugin?id=folder-notes) opent het scheidingsteken mapnotities. Geldt nooit in de verplaats-/hernoemmodus. |
| **Verborgen bestanden tonen** | Aan / Uit | Uit | Of bestanden en mappen met een punt ervoor in de lijsten worden vermeld. Overschrijfbeveiliging geldt hoe dan ook. |
| **Show all file types** | — | — | Niet de instelling van deze plugin maar die van Obsidian, hier vermeld omdat ze dezelfde vraag beantwoordt: je kluis indexeert alleen de bestandstypen die haar zijn opgedragen, en alleen wat ze indexeert kan worden vermeld. Zoek haar op in de instellingen van Obsidian en zet haar aan om elk bestand te zien; de knop naast de rij opent die pagina met de instelling erin gescrold en opgelicht, zoals klikken erop in de eigen zoekfunctie van de instellingen zou doen. Buiten de kluis geldt ze niet, aangezien niets daarbuiten toch geïndexeerd wordt. |
| **Bestandsextensies tonen** | Aan / Uit | Uit | Of de naam van het bestand op de rij zijn extensie meedraagt. Uit, dan wordt ze weggelaten — zoals Obsidian ze weglaat bij de titel van een notitie. Aan, dan noemt de rij het bestand zoals het bestandssysteem dat doet. Hoe dan ook is de extensie het tweede wat wordt opgeofferd wanneer de rij zonder ruimte komt te zitten, meteen na de kluisnaam. |
| **Toegang tot externe bestanden** | Aan / Uit | **Uit** | Of de kluisnaam de locatielijst opent. Uit, dan kijkt niets in de plugin ooit voorbij deze kluis. |
| **Hotkeys** | knop | — | Opent de *Hotkeys* van Obsidian, gefilterd op deze plugin, waar *Focus op de padbalk* een toets kan krijgen. |

## De pictogrammen vervangen

Lure toont drie pictogrammen: het pictogram van de kluisroot (wanneer **Kluisnaam tonen** uit staat), de verplaats-/hernoemschakelaar, en het hangslot dat in zijn plaats staat terwijl schrijven buiten de kluis vergrendeld is. Alle drie kunnen worden vervangen vanuit een thema of een CSS-snippet — stel het vervangende teken in en verberg het meegeleverde in één regel:

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

`--lure-icon-glyph` neemt alles wat geldig is in CSS `content`, dus `url(...)` werkt voor een afbeelding net zo goed als een tekst- of emojiteken. Laat `--lure-icon-svg` met rust om het Lucide-pictogram te houden en jouw teken ernaast te tekenen.
