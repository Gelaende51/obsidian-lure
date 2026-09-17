<!-- Vertaling van README.md — stand: commit 973105b.
     Machinaal vertaald (Claude Opus 5) en niet nagekeken door
     moedertaalsprekers. Correcties zijn welkom; de Engelse README is de
     maatgevende versie. -->

[English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · **Nederlands** · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

Een [Obsidian](https://obsidian.md)-plugin die de bestandsnaam in de kopbalk van een notitie verandert in een aanklikbaar, bewerkbaar pad door haar hele kluis — zoals de adresbalk in bestandsbeheerder [Dolphin](https://apps.kde.org/dolphin/).

![Klik op het scheidingsteken achter een map: de muisaanwijzer rust erop en de bestandsverkenner heeft die map getoond en uitgeklapt](../images/breadcrumb.png)

Obsidian 1.8.7+ · alleen desktop · AGPL-3.0

## AI-verantwoording

- **Agent** — **Claude Opus 5** en **Claude Sonnet 5** (Anthropic, via Claude Code): schreef de TypeScript, de CSS, alle 45 vertaalsets en de documentatie. De vertalingen zijn machinaal gemaakt en niet nagekeken door moedertaalsprekers.
- **Verbruik** — 3 augustus – 17 september 2026, 23 sessies, \~14.844 antwoorden: \~19,2 mln. tokens gegenereerd, \~85,2 mln. verzonden, \~4800,6 mln. herlezingen uit de cache (\~4905,0 mln. in totaal).
- **Herkomst** — het model heeft geleerd van opensourcecode, documentatie en teksten van de gemeenschap die anderen hebben gepubliceerd. De meeste eer komt hun toe.
- **Auteur** — Vault51: bepaalde elke functie, testte elke versie in een echte kluis, stuurde de correcties aan en las alle resultaten na.

## Functies

- **Klik op een map** voor een lijst met de inhoud van de map *erboven* — verruil één map voor een buurmap zonder de rest van het pad aan te raken. De naam van de notitie werkt net zo en selecteert de naam zonder de extensie.
- **Klik op het scheidingsteken** achter een map om die in de bestandsverkenner te tonen en uit te klappen. Eén instelling verwisselt de twee rollen.
- **Rechtsklik of sleep elk item** — het contextmenu van de bestandsverkenner zelf, item voor item, en haar sleepgedrag. Voor paden buiten de kluis is een gelijkwaardig menu gebouwd, tot en met *Verwijderen* via de systeemprullenbak.
- **Klik op de bestandsnaam of op lege ruimte** om een pad te typen, met automatisch aanvullen. `/` daalt af, <kbd>Backspace</kbd> gaat een niveau omhoog, <kbd>Enter</kbd> bevestigt — en een pad dat er nog niet is wordt eenvoudigweg aangemaakt, met een melding die zegt waar het terechtkwam.
- **De lijst opent op het item waar je staat**, en er met de pijltjes of de muis doorheen gaan vult het veld met waar je op wijst. Voorbij een van beide uiteinden van de lijst krijg je terug wat je had getypt, en de muisaanwijzer eraf halen geeft de markering terug aan waar je was.
- **De potlood-mapknop** zet dezelfde interacties om naar verplaatsen/hernoemen, met dezelfde controles die Obsidian zelf doet.
- **Houd <kbd>Ctrl</kbd> ingedrukt** om in een nieuw tabblad te openen — of, in verplaats-/hernoemmodus, om de notitie daarheen te kopiëren. De naam van de notitie en de mapsegmenten nemen dezelfde toetsencombinaties aan, en slepen, net als hun rijen in de bestandsverkenner.
- **Namen vullen zichzelf aan terwijl je typt** — waar de namen van de map overeenkomen, verschijnt de overeenkomst achter de cursor, geselecteerd; typen slikt haar letter voor letter in, <kbd>Tab</kbd> of <kbd>→</kbd> neemt haar heel, <kbd>Backspace</kbd> geeft haar terug. De lijst blijft filteren op wat je typte, niet op wat werd aangeboden.
- **<kbd>Tab</kbd> vult aan zoals een shell**: het verlengt wat je typte tot zover de namen in die map overeenkomen, loopt stap voor stap naar een van hen toe waar ze dat niet doen, en stapt een map pas in zodra er één naam over is. Voorbij het einde van het pad verbreedt het in plaats daarvan de selectie: naam, naam met extensie, pad vanaf de kluis, pad vanaf de systeemwortel. <kbd>Shift</kbd>+<kbd>Tab</kbd> loopt dezelfde weg terug — en markeert wat het teruggeeft in plaats van het te wissen — en gaat voorbij het begin verder het pad op, om daarna rond te lopen naar het systeempad. Welke kant je ook op gaat, een ronde komt uit bij het pad dat je hebt gebouwd.
- **Rechtsklik om te kopiëren** — twee keer voor een naam, drie keer voor alles rechts ervan, en op de lege ruimte voor het hele pad of het systeempad.
- **Sleep een notitie op een map in de rij** om haar daarheen te verplaatsen, links en al — de bestemming staat al op het scherm, dus het is één sleepbeweging in plaats van een tocht door de bestandsboom. De naam van de kluis neemt haar ook aan, voor de wortel. Een hele selectie verhuist als één, en een map die niet kan aannemen wat wordt aangeboden laat niets zien in plaats van achteraf te falen.
- **Zet tekst op de rij neer om die op te schrijven** — op een map of de kluisnaam om er een nieuwe notitie voor te benoemen, op de naam van de notitie zelf om de tekst toe te voegen aan het eind van wat je leest. Een bestand van je bureaublad werkt net zo, en de rij licht blauw op zolang het zou landen.
- **Het veld draagt de kleur van wat het benoemt** — dezelfde kleur die zijn rij in de lijst heeft, grijs voor de notitie van een map — en **wordt rood** zodra er niets meer op antwoordt, zodat je vóór het indrukken van <kbd>Enter</kbd> ziet of er een notitie geopend of aangemaakt wordt.
- **HTML-bestanden verschijnen als pagina's**, in een kader waaraan elke bevoegdheid onthouden is — geen scripts, geen netwerk, geen eigen oorsprong — met de stijlbladen en afbeeldingen naast het bestand meegenomen, zodat een opgeslagen pagina er nog steeds als zichzelf uitziet. De broncode is één toetsaanslag ver.
- **Typ een URL** — `https://`, `obsidian://`, of een `file://`- of procentgecodeerd pad — en die wordt geopend in plaats van als notitienaam gelezen. Webadressen gaan naar een tabblad van Obsidians eigen Webviewer als je die aan hebt staan.
- **Lange paden korten in waar letters overbodig zijn** — nooit verder dan wat een map van de buurmap onderscheidt, en vloeiend in plaats van letter voor letter — en schuiven pas als er niets meer te comprimeren valt. Wijs een ingekorte naam aan om haar weer heel te zien.
- **<kbd>F2</kbd>** wisselt tussen de titel in de notitie en de padbalk, opent op de naam zonder de extensie en loopt bij volgende toetsaanslagen uit naar de volledige paden. Het gaat schoon door Obsidians hernoemvenster heen wanneer de titel buiten beeld is gescrold. Er is een opdracht *Focus op de padbalk* om aan een toets te binden, als je het adresbalkgebaar wilt.
- **Klik op de kluisnaam** om door je andere kluizen, je persoonlijke map, de hoofdmap van het bestandssysteem en aangekoppelde schijven te bladeren zonder van kluis te wisselen. Alleen-lezen tot je het rode slot opent dat daarbuiten de plaats van de hernoemknop inneemt, en de hele tijd omkaderd in de foutkleur. Standaard uit — zie [buiten de kluis](#buiten-de-kluis).
- **Twee waarschuwingsniveaus** — rood buiten de kluis, oranje voor tekstbestanden waarvoor Obsidian geen editor heeft. Zie [de twee waarschuwingskleuren](usage.nl.md#de-twee-waarschuwingskleuren).
- **Themabare pictogrammen**, te vervangen vanuit een CSS-snippet — en **46 talen**: elke taal die Obsidian meelevert, plus Grieks en Sanskriet, waarvoor het zelf geen instelling heeft. Kies er een voor de plugin alleen, of volg die van Obsidian.
- **Instellingen:** taal, uitlijning, voorkeuzes voor het scheidingsteken, welke klik de lijst opent, kluisnaam, verborgen bestanden, bestandsextensies.

![Dezelfde lijst in verplaats-/hernoemmodus: de huidige bestandsnaam bovenaan vastgezet, daaronder buurmappen, en bestaande notities grijs](../images/dropdown.png)

*In verplaats-/hernoemmodus biedt dezelfde lijst iets anders: bovenaan vastgezet de huidige naam van de notitie, om haar te verplaatsen zonder te hernoemen; daaronder mappen om haar in te zetten; en al bezette namen grijs, zodat er niets per ongeluk wordt overschreven.*

→ [Volledige handleiding](usage.nl.md)

## Buiten de kluis

Obsidians ontwikkelaarsbeleid verlangt dat een plugin elke toegang tot bestanden buiten de kluis uitlegt, dus onomwonden:

**Of het dit überhaupt doet.** Alleen als je **Toegang tot externe bestanden** aanzet, wat **standaard uit staat**. Staat het uit, dan is er geen enkele manier om vanuit de plugin bij een extern pad te komen, en niets van de code hieronder wordt ooit uitgevoerd.

**Wat het leest.** Alleen wanneer je erom vraagt. Klikken op de kluisnaam toont je andere kluizen — gelezen uit Obsidians eigen `obsidian.json` — plus je persoonlijke map, de hoofdmap van het bestandssysteem en aangekoppelde schijven (`/proc/mounts` op Linux, `/Volumes` op macOS, stationsletters op Windows). Van daaruit bladeren toont de inhoud van mappen, en een bestand openen leest dat ene bestand.

**Wat het schrijft.** Niets, tot je op een knop drukt die dat zegt. Er zijn twee zulke knoppen, en elk dekt alleen zijn eigen terrein:

- De knop **Als tekst bewerken** in de weergave ontgrendelt het bestand dat voor je staat, dat ene bestand in dat ene tabblad. Vanaf dan worden je wijzigingen erin opgeslagen terwijl je typt.
- Het **rode slot** in de kopbalk, dat de plaats van de hernoemknop inneemt zolang de padbalk buiten je kluis wijst, ontgrendelt aanmaken, hernoemen, verplaatsen en verwijderen op externe paden — en geeft die plaats terug aan de hernoemknop zodra het open is. Het gaat weer op slot zodra je terug naar binnen komt, en bij de toetsaanslag die de hernoemmodus verlaat, zodat de toestemming nooit langer meegaat dan de map waarvoor je haar gaf.

Geen van beide ontgrendelingen wordt in de werkruimte of in de instellingen bewaard, dus schrijven staat nooit scherp op een bestand waarvan je niet meer weet dat je het opende. In geen van beide toestanden wordt iets overschreven — een bestaand doel wordt geweigerd, met het exclusieve aanmaken van het bestandssysteem zelf in plaats van een controle die de race kan verliezen.

Een notitie *uit* je kluis verplaatsen is de ene schrijfactie die iets kost wat niets kan teruggeven: Obsidian werkt links alleen binnen de kluis bij, dus elke link naar die notitie breekt. Ze wordt aangeboden achter een venster dat dit zegt en de getroffen notities telt, en ze gebeurt als kopiëren-en-dan-verwijderen via Obsidians eigen prullenbak, dus ze is net zo goed terug te halen als een verwijderde notitie. <kbd>Ctrl</kbd> ingedrukt houden kopieert haar er in plaats daarvan naartoe.

**Waarom.** De notities die je zoekt staan vaak in een andere kluis, in een synchronisatiemap of op een USB-stick, en Obsidians eigen antwoord — wissel van kluis — sluit alles wat je open had. Dit laat je gaan kijken zonder weg te gaan, en meteen een typefout herstellen.

**De beperking.** Obsidians editor is gebonden aan bestanden binnen de kluis, dus een extern bestand **kan niet** als echte notitie worden geopend, met links, backlinks en de rest; geen enkele plugin kan dat. Lure toont het in plaats daarvan in zijn eigen weergave (Markdown, afbeeldingen, audio, video, PDF), met *Extern openen* voor al het andere. De padbalk blijft omkaderd in de foutkleur zolang hij buiten je kluis wijst, en het spoor begint op de plek die je koos — een kluisnaam, je persoonlijke map, een schijf — en niet bij de mappenindeling van de machine.

## Installatie

Vermeld op [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure), maar nog niet goedgekeurd voor de browser in de app — installeer het dus op een van deze manieren:

**Handmatig:** download `main.js`, `manifest.json` en `styles.css` uit de [nieuwste release](https://github.com/Gelaende51/obsidian-lure/releases) naar `<vault>/.obsidian/plugins/lure/` en zet de plugin aan bij **Instellingen → Externe plug-ins**.

**BRAT:** voeg `Gelaende51/obsidian-lure` toe als bètaplugin.

**Vanuit de broncode:** `npm install && npm run build` — zie [ontwikkeling](../development.md).

## Compatibiliteit

Er is geen plugin nodig. De kernplug-in **Bestandsverkenner** is, als hij aanstaat, wat mappen in de zijbalk toont; zonder hem doen die kliks niets.

Getest tegen de communityplugins die de kopbalk van de notitie delen of op de mapklik reageren — in beide laadvolgordes, elk aan en uit:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — het scheidingsteken opent de notitie van een map in plaats van de map te tonen, waardoor elk segment van het pad ergens is waar je heen kunt, hoe diep ook: de notitie wordt bepaald aan de hand van de conventie van die plugin zelf, in plaats van het antwoord aan haar over te laten. Het is ook de enige die zo'n conventie publiceert; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) en [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) publiceren er geen en eisen het pad in de kopbalk nooit op, dus bij die twee toont het scheidingsteken de map zoals gewoonlijk.
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer) en [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — beide tekenen in hetzelfde kopbalkelement; Lure houdt zijn rij ongeacht wie het eerst laadt, en een van beide uitzetten laat de ander heel.
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header), [Running Head](obsidian://show-plugin?id=running-head), [Crumbs](obsidian://show-plugin?id=crumbs-obsidian), [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — hebben hun eigen strook, en gaan prima samen.

Alleen desktop — het interactiemodel heeft hover, precieze kliks en een toetsenbord nodig. De volledige resultaten, wat nog getoetst moet worden, en de vergelijking met Quick Explorer en Breadcrumbs staan in [compatibiliteit](../compatibility.md).

## Bijdragen

- Issues en pull requests zijn welkom — vooral **vertaalcorrecties**, aangezien alle 45 talen machinaal vertaald en niet door moedertaalsprekers nagekeken zijn. Zie [ontwikkeling](../development.md) voor de opzet en de basisregels.
- **Issuetracker:** https://github.com/Gelaende51/obsidian-lure/issues
- **Donaties:** [Ko-fi](https://ko-fi.com/vault51). De plugin is hoe dan ook gratis en AGPL-gelicentieerd; een fooi wordt gewaardeerd en nooit verlangd. De bedoeling is CO₂-compensatie — een bedoeling, geen belofte: er wordt niets gecompenseerd tot het totaal de moeite waard is, en deze regel zegt het zodra er echt iets gecompenseerd is.

## Met dank aan

- **Vault51** — auteur: ontwerp, eisen en handmatig testen van begin tot eind.
- **Claude Opus 5** en **Claude Sonnet 5** (Anthropic, via Claude Code) — implementatie, vertalingen en documentatie, onder leiding van de auteur. Zie [AI-verantwoording](#ai-verantwoording).
- **[Obsidian](https://obsidian.md)** — de applicatie die dit uitbreidt, en de bron van elk onderdeel dat de plugin gebruikt: de plugin-API, de Lucide-pictogrammenset achter `setIcon`, de meegeleverde i18next-instantie waaruit de labels van het contextmenu worden gelezen, en de eigen CSS-klassen en -variabelen. Er wordt niets van derden meegeleverd; de plugin heeft **geen runtime-afhankelijkheden**.

> **Het Obsidian-team heeft op geen enkele manier aan dit project meegewerkt** — het heeft dit niet geschreven, nagekeken, onderschreven of ondersteund. Obsidian is een handelsmerk van Dynalist Inc.; dit is een onafhankelijke, niet-gelieerde plugin.

Bijdragers worden hier vermeld zodra er bijdragen binnenkomen.

## Links


- **Documentatie:** [docs/](../)
- **Wijzigingslogboek:** [CHANGELOG.md](CHANGELOG.nl.md)
- **Pluginpagina:** https://community.obsidian.md/plugins/lure
- **Webaanwezigheid / broncode:** https://github.com/Gelaende51/obsidian-lure
- **Donaties:** [Ko-fi](https://ko-fi.com/vault51) — zie [bijdragen](#bijdragen).
- **Licentie:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. Forks en opnieuw verspreide builds moeten hun broncode onder dezelfde licentie uitbrengen.
