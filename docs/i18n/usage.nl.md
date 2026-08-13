<!-- Vertaling van docs/usage.md — stand: commit 7b2691a.
     Machinaal vertaald (Claude Opus 5), niet nagekeken door
     moedertaalsprekers. De labels van de plugin komen uit
     src/lang/translations.ts en die van Obsidian uit de teksten die de
     applicatie zelf meelevert, dus ze komen overeen met wat je op je scherm
     ziet. -->

**Lees dit in andere talen:** [English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · [Čeština](usage.cs.md) · [Dansk](usage.da.md) · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · [Bahasa Indonesia](usage.id.md) · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · **Nederlands** · [Norsk](usage.no.md) · [Polski](usage.pl.md) · [Português](usage.pt.md) · [Português (Brasil)](usage.pt-BR.md) · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

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

Met [Folder notes](obsidian://show-plugin?id=folder-notes) geïnstalleerd opent dezelfde klik in plaats daarvan de notitie van die map. Het is de enige mapnotitie-plugin waarvan is vastgesteld dat hij het pad in de kopbalk opeist; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) en [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) beheren mapnotities maar luisteren niet naar de klik op het pad, dus daarmee toont het scheidingsteken de map als vanouds. Zie [compatibiliteit](../compatibility.md#verified-against).

Een scheidingsteken is **alleen onderstreept als de map ervoor werkelijk een mapnotitie heeft**, zodat de onderstreping de belofte is dat er iets te openen valt. Elk scheidingsteken blijft hoe dan ook aanklikbaar — een zonder onderstreping toont zijn map in de zijbalk en klapt hem uit, wat de handcursor nog steeds aangeeft. De onderstreping verlaat de mapnaam op datzelfde moment: met de wissel aan opent de naam de lijst, dus hem markeren als de link naar de notitie zou een leugen zijn.

**De verplaats-/hernoemmodus gaat boven beide**, wat de instelling ook zegt: zolang er een verplaatsing openstaat, opent niets op de rij een map, omdat er een openen de verplaatsing zou opgeven. Mapnamen worden geselecteerd om te bewerken en scheidingstekens dalen af — beide zijn manieren om de bestemming te kiezen — en de onderstreping verdwijnt om te tonen dat openen is opgeschort.

De **wortel van de kluis** is het enige segment dat geen padsegment is. Hij heeft geen bovenliggende map om buren uit op te sommen, dus opent hij in plaats daarvan de [lijst met locaties](#buiten-de-kluis-bladeren) — je andere kluizen, je persoonlijke map, de hoofdmap van het bestandssysteem en aangekoppelde stations.

## Klikken op een segment: verruil het voor een buur

Klikken op een mapnaam selecteert **de naam van die map** in een tekstveld en opent een lijst van de map **één laag hoger** — de map erboven. Typen of een item kiezen verruilt deze map voor een buurmap en laat alles eronder ongemoeid, dus `Projecten/2026/Aftrap.md` → klik op `2026` → kies `2025` levert `Projecten/2025/Aftrap.md`.

Klikken op de **naam van de notitie** werkt op dezelfde manier tegen haar eigen map, en selecteert de bestandsnaam **inclusief de extensie** — hernoemen of omleiden van een notitie betekent meestal dat die ook verandert.

De klik op de map heeft al één segment geselecteerd, dus **nog één klik** verbreedt de selectie tot de hele regel — die map *en* alles eronder — en wat je dan typt vervangt de rest van het pad in één keer. Werkt hetzelfde bij navigeren en in de verplaats-/hernoemmodus.

Dat geldt alleen als voortzetting van de klik die het veld opende. Zodra je het veld gebruikt hebt, gedraagt het zich als elk ander tekstveld: een klik zet de cursor, een dubbelklik pakt een woord, een driedubbele klik pakt de regel.

Hoe dan ook blijft de rest van het pad rond het veld zichtbaar, als chips ervoor en als niet-geselecteerde tekst erna, zodat het volledige pad nooit uit de kopbalk verdwijnt. Typ om de selectie te vervangen, of druk op <kbd>End</kbd> / <kbd>→</kbd> om hem te houden en vandaar te bewerken. De lijst toont de hele map, ongeacht wat er is voorgevuld; hij begint pas te filteren zodra je echt typt.

## Afdalen via het scheidingsteken

Klikken op een scheidingsteken (met **Mapnaam opent de lijst** uit) daalt af in de map ervoor: de lijst toont de inhoud van *die* map, en de rest van het pad opent geselecteerd in het veld. Een map kiezen voegt hem toe aan het pad en opent meteen de volgende lijst, zodat je een boom omlaag kunt klikken zonder de kopbalkrij te verlaten.

## Items in de lijst zijn echte verkennerrijen

Elk bestand en elke map in de lijst gedraagt zich als zijn rij in de Verkenner:

- **Rechtsklik** voor hetzelfde contextmenu — *Nieuwe notitie* / *Nieuwe map* op een map, *Open in nieuw tabblad* / *Hernoemen* / *Verwijderen* op een bestand — inclusief items die andere plugins aan bestandsmenu's toevoegen.
- **Sleep** een item naar elke plek waar Obsidian een bestand accepteert: naar een editor om een link in te voegen, op een map in de Verkenner om het te verplaatsen, op de tabbladenbalk om het te openen.

De menuteksten komen uit Obsidians eigen vertalingen, dus ze passen in elke taal bij de rest van de applicatie.

## Een pad typen

- Klikken op de **lege ruimte** voor of na het pad opent een tekstveld dat is voorgevuld met het hele pad en volledig geselecteerd — typ eroverheen, of bewerk ter plekke. (Klikken op de bestandsnaam zelf selecteert alleen die naam; zie hierboven.)
- Typen terwijl het pad zichtbaar is, verandert het laatste segment in een klein veld met live aanvulling beperkt tot de huidige map.
- `/` bevestigt het huidige segment en daalt erin af.
- <kbd>Backspace</kbd> in een leeg veld stapt terug naar de bovenliggende map en opent die naam opnieuw met de cursor aan het eind.
- <kbd>Enter</kbd> bevestigt; <kbd>Esc</kbd> of een klik elders annuleert terug naar het echte pad van het bestand.

Het veld heeft geen omlijsting — geen kader, geen rand — dus het leest als de padtekst zelf, en het groeit vanzelf mee terwijl je typt.

## Navigeren raakt het geopende bestand nooit aan

In de standaardmodus (navigeren) wordt de geopende notitie **nooit** hernoemd of verplaatst.

- Een pad dat naar een bestaand bestand verwijst, opent dat.
- Een pad dat nog niet bestaat vraagt *"Nieuw bestand aanmaken?"*. Bevestigen maakt ontbrekende mappen en het bestand aan; annuleren doet helemaal niets.

## <kbd>Ctrl</kbd> — nieuw tabblad, en kopiëren in plaats van verplaatsen

<kbd>Ctrl</kbd> (<kbd>Cmd</kbd> op macOS) ingedrukt houden terwijl je een bestand uit de lijst kiest, of terwijl je op <kbd>Enter</kbd> drukt op een pad, stuurt het resultaat naar een **nieuw tabblad** in plaats van naar dit:

| | Gewoon | Met <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Een bestaand bestand kiezen of typen | Opent hier | Opent in een nieuw tabblad |
| Een pad typen dat niet bestaat | Vraagt, opent dan hier | Vraagt, opent dan in een nieuw tabblad |
| Een pad bevestigen in de verplaats-/hernoemmodus | **Verplaatst** de notitie daarheen | **Kopieert** haar daarheen en opent de kopie in een nieuw tabblad |

De modifier wordt met Obsidians eigen regel gelezen, dus hij gedraagt zich precies zoals op een link of een rij in de Verkenner — middelklik betekent ook "nieuw tabblad", <kbd>Ctrl</kbd>+<kbd>Alt</kbd> betekent een splitsing en <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> een nieuw venster.

Kopiëren weigert te overschrijven, precies zoals verplaatsen — ook naar het eigen pad van de notitie, waar er niets zinnigs te kopiëren valt.

## Buiten de kluis bladeren

**Dit staat standaard uit.** Zet eerst **Toegang tot externe bestanden** aan in de instellingen — lezen en schrijven buiten de kluis is het enige dat deze plugin doet en Obsidian zelf niet, dus je stapt er bewust in in plaats van eruit. Staat het uit, dan toont de kluisnaam simpelweg je kluis in de Verkenner, en kijkt hier niets ooit verder.

Klikken op de **kluisnaam** (of op het 🏠-pictogram, als *Kluisnaam tonen* uit staat) opent een lijst met plekken in plaats van inhoud:

- **Je andere kluizen**, gelezen uit Obsidians eigen register, de laatst geopende eerst, elk onder Obsidians eigen kluispictogram — hetzelfde dat de applicatie voor haar kluiscommando's gebruikt. De kluis die je al open hebt krijgt in plaats daarvan een huisje: dat is waar de rij standaard begint, niet ergens om heen te gaan.
- Je **persoonlijke map**, onder je eigen accountnaam, gemarkeerd met een `~`. Lucide heeft geen tilde, dus dit pictogram tekent de plugin zelf op Lucides eigen 24×24-raster met dezelfde lijndikte — een pictogram dat de set mist, niet een tekstteken dat tussen pictogrammen zit.
- De **hoofdmap van het bestandssysteem**, met het label `root` — onvertaald, want zo heet hij op elk systeem — in plaats van `/`, dat naast het scheidingsteken erachter als een lege stap zou lezen.
- **Aangekoppelde stations**, met een pictogram per soort waar dat goedkoop te bepalen is: netwerkshares, optische schijven, diskettes en verwisselbare media krijgen hun eigen; al het andere krijgt een algemeen station. Op Windows verschijnen stations als `C:` met een algemeen pictogram — volumenamen en precieze soorten vergen WMI, wat bewust niet gebeurt.

Een andere kluis kiezen **laat Obsidian er niet naartoe overschakelen.** Alles wat je open hebt blijft open; het pad begint eenvoudigweg daar te bladeren. Dat is het hele punt van deze functie op de padbalk in plaats van het door te schuiven naar de kluiswisselaar in de zijbalk.

### Terwijl je buiten bent

Het pad **begint op de plek die je koos**, niet bij de mappenindeling van de machine — kies `Archief` en de rij leest `Archief / notities / …`, niet `/home/jij/Vaults/Archief/notities/…`. Het eerste segment draagt een pictogram voor wat het is (kluis, persoonlijke map, station), en <kbd>Backspace</kbd> stopt daar in plaats van door te lopen omhoog in de rest van het bestandssysteem. Met *Kluisnaam tonen* uit is dat segment alleen het pictogram — de instelling gaat over het beginsegment van de rij, welke kluis het ook noemt, niet alleen over die van jou.

De padbalk blijft **omkaderd in de foutkleur** — dezelfde ring die de hernoemmodus tekent — zolang hij buiten je kluis wijst. Hij markeert een blijvende toestand, geen moment: zolang hij er staat, geldt niets van Obsidians eigen afhandeling voor wat de rij toont, en schrijven is vergrendeld tot je anders zegt.

Verder werkt bladeren zoals binnen: chips, scheidingstekens, typen, aanvulling, <kbd>Backspace</kbd> om eruit te stappen. Dezelfde zichtbaarheidsregels gelden ook, dus niet-ondersteunde extensies hebben nog steeds Obsidians **Toon alle bestandsextenties** nodig en verborgen bestanden nog steeds de instelling van deze plugin.

**Rechtsklik en slepen** op items in de lijst werken daarbuiten niet — dat zijn de eigen handlers van de Verkenner, en die hebben een bestand nodig dat de kluis kent.

### Buiten de kluis schrijven

Alles wat schrijft is **standaard vergrendeld**. Er verschijnt een **hangslot** naast de hernoemknop in de kopbalk zolang de rij buiten je kluis wijst; erop drukken opent het slot en kleurt het rood, passend bij de ring om de rij.

De toestemming wordt verleend **aan een plek, niet aan een moment**: ze overleeft alles wat je zou doen terwijl je op één plek werkt — een verplaatsing afronden, wegklikken uit het veld, een bestand openen — en eindigt wanneer je een andere kluis, station of hoofdmap uit de lijst kiest, wanneer de rij terugkeert naar een bestand in de kluis, of wanneer je het hangslot nogmaals indrukt. Zo kost een reeks verplaatsingen binnen één map één druk, niet één per bestand.

Met het hangslot open gedraagt de padbalk zich daarbuiten zoals binnen:

| Handeling | Resultaat |
| --- | --- |
| Een naam typen die niet bestaat, <kbd>Enter</kbd> | Dezelfde "aanmaken?"-vraag als binnen; ontbrekende mappen worden ook aangemaakt. Een naam zonder extensie wordt een `.md`, precies als binnen |
| Verplaats-/hernoemmodus, een nieuwe naam typen | Hernoemt het bestand dat de rij toont. Een naam zonder extensie houdt die van het bestand — hierbuiten bevat een map elke soort bestand, en een hernoeming hoort niet stilzwijgend een `.png` in een `.md` te veranderen |
| Verplaats-/hernoemmodus, elders bladeren, **deze naam behouden** kiezen | Verplaatst het daarheen onder de naam die het al heeft |
| <kbd>Ctrl</kbd> ingedrukt houden bij een van beide | Kopieert in plaats van te verplaatsen, en opent de kopie in een nieuw tabblad |

Vergrendeld melden al die handelingen wat hen tegenhoudt in plaats van te gebeuren. In geen van beide toestanden wordt iets overschreven: een doel dat al bestaat wordt geweigerd, en de weigering komt van het bestandssysteem zelf (`COPYFILE_EXCL`, een exclusief aanmaken) en niet van een controle die de race zou kunnen verliezen. Een verplaatsing over bestandssystemen heen — van een USB-stick af, van een netwerkshare af — valt terug op kopiëren-dan-verwijderen, en het origineel wordt pas weggehaald zodra de kopie is geland.

**Eén ding ontgrendelt het hangslot niet: een notitie *uit* je kluis verplaatsen.** `fileManager` kan een bestand niet over die grens volgen, dus elke link naar de notitie zou stilzwijgend breken en Obsidian zou haar simpelweg zien verdwijnen. <kbd>Ctrl</kbd> ingedrukt houden kopieert haar naar buiten, wat dat probleem niet heeft, en de melding zegt dat. De andere kant op — een bestand van buiten *de kluis in* halen — is ook nog niet gebouwd.

### Een extern bestand openen

Obsidians editor werkt alleen op bestanden binnen de kluis, dus een extern bestand **kan niet** als echte notitie geopend worden met links, backlinks en de rest — dat is een grens van de applicatie, niet van deze plugin. Er een kiezen opent in plaats daarvan een **voorbeeld**, alleen-lezen tot je anders zegt:

| Soort | Getoond als |
| --- | --- |
| `.md`, `.markdown` | Gerenderde Markdown |
| Afbeeldingen, audio, video, PDF | Native speler/weergave |
| Elk ander **tekst**bestand (`.json`, `.css`, `.log`, `.txt`, …) | Platte tekst, letterlijk |
| Binaire formaten zonder weergave (`.zip`, `.exe`, …) | Doorgegeven aan *Extern openen* |

De weergave heeft twee lezingen van een bestand, en omdat ze elkaar uitsluiten wordt alleen die getoond waar je **naartoe** zou schakelen:

| | Wat het doet | Standaard voor |
| --- | --- | --- |
| **Als Markdown weergeven** | Rendert het bestand als een notitie, alleen-lezen | `.md`, `.markdown` |
| **Als tekst bewerken** | De bron, bewerkbaar | al het andere |

Buiten de kluis is **Als tekst bewerken** ook de druk die alleen-lezen opheft — de modus en de toestemming zijn één handeling in plaats van twee knoppen om over na te denken. Hij kleurt rood **telkens als indrukken alleen-lezen zou opheffen**, of je nu ter plekke het bewerken scherpstelt of rechtstreeks uit de gerenderde weergave komt; binnen de kluis valt er niets te ontgrendelen, dus blijft hij gewoon. **Als Markdown weergeven** krijgt een lichte waas van de accentkleur — dezelfde tint die Obsidian aan geselecteerde tekst geeft — die hem markeert als de weg terug in plaats van als een oproep tot actie.

Omdat de knop het *bewerken* volgt en niet de kale modus, biedt een bestand dat alleen-lezen in de tekstweergave staat nog steeds **Als tekst bewerken**: dat is de druk die het scherpstelt. Een bestand waarin nooit getypt kan worden — ingekort of onleesbaar — zegt in plaats daarvan **Als tekst weergeven**, want dat is alles wat die druk kan leveren.

De standaarden zijn de bruikbare in plaats van de letterlijke: een `#` in een shellscript is een commentaar, geen kop, dus een `.log` als Markdown renderen zou hem stilzwijgend opslokken. Beide standaarden kun je per bestand overrulen, en de keuze gaat de geschiedenis van het tabblad in, zodat terug/vooruit en een heropende werkruimte hem behouden — heel wat notities leven in `.txt`-bestanden, en heel wat `.md`-bestanden lezen makkelijker als bron.

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

- **Open in *(kluis)*** — getoond wanneer het bestand bij een van je andere kluizen hoort. Geeft het door aan Obsidians eigen URI-handler, die het venster van die kluis opent met de notitie erin, als echte bewerkbare notitie. Dit venster blijft precies zoals het was; er schakelt niets onder je vandaan.
- **Als Markdown weergeven** / **Als tekst bewerken** — de twee lezingen; de tweede heft buiten de kluis ook alleen-lezen op.
- **Extern openen** — geeft het bestand door aan de standaardapplicatie van je bureaublad, inclusief de binaire formaten die deze weergave niet kan tonen.

Er wordt niets buiten je kluis geschreven tenzij je eerst *Als tekst bewerken* indrukt. Zie het onderdeel [Buiten de kluis](README.nl.md#buiten-de-kluis) van de README voor de volledige verantwoording.

## De twee waarschuwingskleuren

| | Wanneer | Wat het betekent |
| --- | --- | --- |
| **Rode** ring om de padbalk | De rij wijst buiten je kluis | Obsidian kan wat daar staat niet als notitie openen, en daarbuiten wordt niets geschreven tot je het hangslot opent. |
| **Oranje** ring om de padbalk, oranje items in de lijst | Het bestand is een teksttype waarvoor Obsidian geen weergave heeft | Een waarschuwing. Obsidian zou het aan de standaardapplicatie van je bureaublad doorgeven; de plugin toont het in plaats daarvan. |

De **twee staan los van elkaar, en kunnen allebei tegelijk gelden** — een externe `.json` is buiten je kluis *en* een type waarvoor Obsidian geen editor heeft. In de weergave verschijnen ze als aparte regels, elk met alleen het eigen feit. Op de padbalk wint rood waar beide gelden, want twee ringen zouden alleen ruis zijn.

De oranje trap is bewust smal. Geregistreerde types (Markdown, canvas, afbeeldingen, PDF, audio, video) worden netjes afgehandeld en krijgen niets. Binaire bestanden krijgen ook niets — je gaat een `.zip` niet per ongeluk tot een puinhoop typen. Wat overblijft is precies het gevaar: een `.json`, `.css` of `.log` die **Toon alle bestandsextenties** zichtbaar heeft gemaakt.

Rood wint waar beide zouden gelden; twee ringen tegelijk zouden alleen ruis zijn.

## Verplaats-/hernoemmodus

De potloodknop uiterst rechts in de kopbalk — naast de weergavemodusknop, even groot als de ingebouwde knoppen — schakelt de verplaats-/hernoemmodus aan en uit. De kopbalkrij is dan omkaderd in de accentkleur, precies zoals bij hernoemen in de Verkenner. Dezelfde kliks en toetsen leggen nu een verplaatsing of hernoeming vast via Obsidians `fileManager.renameFile`, zodat alle links naar de notitie meegaan.

Tijdens het hernoemen:

- De huidige bestandsnaam staat vastgeprikt in de lijst van elke map, zodat een notitie verplaatsen zonder haar te hernoemen één klik is.
- Namen die in de doelmap al bezet zijn staan grijs maar blijven te kiezen.
- Wat je typt wordt live gecontroleerd tegen Obsidians eigen hernoemregels — dezelfde tekensets, dezelfde meldingen, dezelfde rode tooltip die je bij hernoemen in de bestandsboom krijgt — dus een ongeldige of botsende naam wordt tijdens het typen gemeld en kan niet worden vastgelegd.
- Buiten de kopbalk klikken, of de kopbalk die de focus verliest, beëindigt de hernoemmodus.

## Eén toets voor beide hernoemingen

Het hernoemcommando (standaard <kbd>F2</kbd>, of waar je het ook aan hebt gekoppeld) **wisselt** tussen Obsidians hernoeming van de titel in de notitie en de padbalk van deze plugin met het hele pad geselecteerd. Heb je Obsidians titel in de notitie uitgezet, dan wordt de padbalk in de kopbalk het enige doel, zodat de toets nooit niets doet.

Dit werkt door het commando `workspace:edit-file-title` te omhullen in plaats van de toets af te vangen, dus de sneltoets opnieuw koppelen en het commando vanuit het palet uitvoeren werken allebei onveranderd.

## Hoe items in de lijst getint worden

| Kleur | Betekent |
| --- | --- |
| **Paars** | Een notitie (`.md`, `.markdown`) — wat Obsidian als notitie zal openen, eruit gelicht in een map met gemengde inhoud |
| **Oranje** | Een teksttype waarvoor Obsidian geen weergave heeft; zie [de waarschuwingskleuren](#de-twee-waarschuwingskleuren) |
| **Gedempt** | Buiten je kluis, dus de eigen afhandeling van de kluis geldt niet |
| **Blauw** | De notitie waarin je zit. Tijdens het bladeren is dat haar eigen item; in de verplaats-/hernoemmodus staat het item *deze naam behouden* op haar plaats — in beide gevallen dezelfde notitie |
| **Grijs** | Alleen in de verplaats-/hernoemmodus: de naam is bezet. Nog steeds te kiezen — hem kiezen vult het veld, waar de controle de botsing meldt |

## Zichtbaarheidsregels

- Bestanden met niet-ondersteunde extensies verschijnen alleen in de lijsten als Obsidians instelling **Toon alle bestandsextenties** aan staat.
- De lijst toont hoogstens 100 items — Obsidians eigen limiet. Heeft een map er meer, dan zegt de laatste rij hoeveel er buiten vielen; typ door om de lijst te versmallen.
- Verborgen bestanden en mappen verschijnen alleen als de instelling **Verborgen bestanden tonen** van deze plugin aan staat.
- **De overschrijfbeveiliging werkt identiek ongeacht de zichtbaarheid** — een verborgen bestand houdt je nog steeds tegen om het te overschrijven.

## Spiekbriefje

| Je wilt… | Doe dit |
| --- | --- |
| Een map openen (haar notitie, of haar tonen) | Klik op het scheidingsteken **achter** die map |
| Een map verruilen voor een buur | Klik op de naam van die map, typ of kies dan |
| De notitie hernoemen of omleiden | Klik op de naam van de notitie — extensie inbegrepen |
| De inhoud van een map bekijken | Klik op de naam van die map; de lijst toont de map erboven, dus klik op de map **onder** die je wilt |
| Een map en alles eronder opnieuw typen | **Dubbelklik** op de naam van die map, typ dan |
| Het pad vanaf een map bewerken | Klik op de naam van die map, dan <kbd>End</kbd> of <kbd>→</kbd> om te deselecteren |
| Naar een bestand springen door het pad te typen | Klik op de bestandsnaam of de lege ruimte, typ, <kbd>Enter</kbd> |
| Een bestand in een nieuw tabblad openen | <kbd>Ctrl</kbd> bij het kiezen, of <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| De notitie ergens heen kopiëren in plaats van verplaatsen | Potlood, dan <kbd>Ctrl</kbd> bij het kiezen of vastleggen van de bestemming |
| Een notitie aanmaken op een pad dat niet bestaat | Typ het pad, <kbd>Enter</kbd>, bevestig de vraag |
| Eén niveau afdalen tijdens het typen | Typ `/` |
| Eén niveau omhoog tijdens het typen | <kbd>Backspace</kbd> in het lege veld |
| De geopende notitie verplaatsen of hernoemen | Klik op het potlood, blader of typ dan als hierboven |
| Verplaatsen zonder hernoemen | Potlood → klik door naar de doelmap → kies de bovenaan vastgeprikte huidige bestandsnaam |
| Ter plekke hernoemen | Twee keer <kbd>F2</kbd> (de eerste gaat naar de titel in de notitie, de tweede naar de kopbalk) |
| Naar een andere kluis, je persoonlijke map of een station springen | Klik op de kluisnaam |
| Een bestand van buiten de kluis openen | Kluisnaam → kies een plek → blader → kies het bestand (alleen-lezen tot *Als tekst bewerken*) |
| Iets annuleren | <kbd>Esc</kbd>, of klik buiten de kopbalk |

## Instellingen

| Instelling | Opties | Standaard | Wat het doet |
| --- | --- | --- | --- |
| **Uitlijning** | Links / Gecentreerd / Rechts | Links | Waar het pad in de kopbalkrij zit. *Gecentreerd* komt overeen met Obsidians klassieke uiterlijk. |
| **Scheidingsteken** | Elk teken | `/` | Het scheidingsteken dat tussen segmenten wordt getekend. Voor het tekstveld staan zes voorkeuzes met één klik (`/ > ▸ › \ •`). |
| **Kluisnaam tonen** | Aan / Uit | Aan | Of de kluis zelf het eerste padsegment is. Uitgezet wordt dat segment een 🏠-pictogram in plaats van te verdwijnen, zodat het pad nog altijd bij iets aanklikbaars begint. |
| **Mapnaam opent de lijst** | Aan / Uit | Aan | Verwisselt wat een mapnaam en het scheidingsteken erachter doen — zie [de tabel hierboven](#het-pad). Met [Folder notes](obsidian://show-plugin?id=folder-notes) opent het scheidingsteken mapnotities. Geldt nooit in de verplaats-/hernoemmodus. |
| **Verborgen bestanden tonen** | Aan / Uit | Uit | Of verborgen bestanden en mappen in de lijsten staan. De overschrijfbeveiliging geldt hoe dan ook. |
| **Toegang tot externe bestanden** | Aan / Uit | **Uit** | Of de kluisnaam de lijst met locaties opent. Uit kijkt niets in de plugin ooit verder dan deze kluis. |

## De pictogrammen vervangen

Lure tekent drie pictogrammen: dat van de kluiswortel (als **Kluisnaam tonen** uit staat), de verplaats-/hernoemschakelaar, en het hangslot dat schrijven buiten de kluis afschermt. Ze zijn alle drie te vervangen vanuit een thema of een CSS-snippet — stel het vervangende teken in en verberg het meegeleverde in één regel:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* Het hangslot heeft twee toestanden; `.is-active` is de open stand. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}

.lure-unlock-btn.is-active {
	--lure-icon-glyph: "🔓";
}
```

`--lure-icon-glyph` neemt alles wat geldig is in CSS `content`, dus `url(...)` werkt voor een afbeelding net zo goed als een tekst- of emojiteken. Laat `--lure-icon-svg` met rust om het Lucide-pictogram te houden en jouw teken ernaast te tekenen.
