<!-- Vertaling van CHANGELOG.md — stand: commit f133f41.
     Machinaal vertaald (Claude Opus 5) en niet nagekeken door
     moedertaalsprekers. Correcties zijn welkom; het Engelse CHANGELOG is de
     maatgevende versie. -->

[English](../../CHANGELOG.md) · [العربية](CHANGELOG.ar.md) · [አማርኛ](CHANGELOG.am.md) · [Беларуская](CHANGELOG.be.md) · [বাংলা](CHANGELOG.bn.md) · [Català](CHANGELOG.ca.md) · [Čeština](CHANGELOG.cs.md) · [Dansk](CHANGELOG.da.md) · [Deutsch](CHANGELOG.de.md) · [Ελληνικά](CHANGELOG.el.md) · [Español](CHANGELOG.es.md) · [فارسی](CHANGELOG.fa.md) · [Suomi](CHANGELOG.fi.md) · [Français](CHANGELOG.fr.md) · [Gaeilge](CHANGELOG.ga.md) · [עברית](CHANGELOG.he.md) · [Magyar](CHANGELOG.hu.md) · [Bahasa Indonesia](CHANGELOG.id.md) · [Italiano](CHANGELOG.it.md) · [日本語](CHANGELOG.ja.md) · [ქართული](CHANGELOG.ka.md) · [ភាសាខ្មែរ](CHANGELOG.kh.md) · [한국어](CHANGELOG.ko.md) · [Latviešu](CHANGELOG.lv.md) · [Bahasa Melayu](CHANGELOG.ms.md) · [नेपाली](CHANGELOG.ne.md) · **Nederlands** · [Norsk](CHANGELOG.no.md) · [Polski](CHANGELOG.pl.md) · [Português](CHANGELOG.pt.md) · [Português (Brasil)](CHANGELOG.pt-BR.md) · [Română](CHANGELOG.ro.md) · [Русский](CHANGELOG.ru.md) · [संस्कृतम्](CHANGELOG.sa.md) · [Slovenčina](CHANGELOG.sk.md) · [Shqip](CHANGELOG.sq.md) · [Српски](CHANGELOG.sr.md) · [Svenska](CHANGELOG.sv.md) · [ไทย](CHANGELOG.th.md) · [Türkçe](CHANGELOG.tr.md) · [Українська](CHANGELOG.uk.md) · [Oʻzbekcha](CHANGELOG.uz.md) · [Tiếng Việt](CHANGELOG.vi.md) · [简体中文](CHANGELOG.zh.md) · [繁體中文](CHANGELOG.zh-TW.md)

# Wijzigingslogboek

Elke release van Lure, de nieuwste eerst. Wat er sinds de laatste release is geland staat onder *Niet uitgebracht*. Versies dragen geen `v`-voorvoegsel, net als de release-tags.

## Niet uitgebracht[^unreleased]

### Toegevoegd

- **Haal een bestand van buiten je kluis naar binnen.** Verplaats of kopieer een bestand van waar dan ook op schijf naar een pad binnen je kluis; het komt aan als echte notitie, en bij een verplaatsing wordt het origineel pas verwijderd nadat de kopie is gelukt.
- **Zet tekst of een bestand op de rij neer om het op te schrijven.** Op een map: een nieuwe notitie in die map, met de naam die je typt. Op de naam van de notitie, of op het scheidingsteken van een map die een mapnotitie heeft: na een bevestiging toegevoegd aan het eind van die notitie.
- **Maak een mapnotitie** met een tweede druk op wat de map ook opent, waar een mapnotitie-plugin draait en de map er nog geen heeft. Ze wordt geplaatst waar de eigen instellingen van [Folder notes](https://github.com/LostPaul/obsidian-folder-notes) dat zeggen.
- **Sleep een map van de padbalk naar de tabbladbalk** om haar daar te openen: haar mapnotitie waar ze er een heeft, anders een tabblad dat in die map staat.
- **Het muiswiel loopt door de lijst.** Boven een naam opent de eerste draai de lijst van die naam en verplaatst elke volgende draai de markering een rij. Een rij die zijwaarts schuift houdt het wiel voor het schuiven.
- **Pijl van de voorkant van het veld af** om de map ervóór erbij te halen: <kbd>←</kbd> voor één map, <kbd>Shift</kbd>+<kbd>Home</kbd> (of <kbd>Home</kbd> met de lijst dicht) voor allemaal.
- **Het veld draagt de kleur van wat het benoemt**, dezelfde als die rij in de lijst, en wordt rood zodra er niets meer op antwoordt — op het moment dat <kbd>Enter</kbd> iets zou maken in plaats van openen.
- **Mapnotities zijn grijs in de lijst**, zodat ze te lezen zijn als die van hun map en niet als nog een notitie.
- **Middelklik op een scheidingsteken** om die map in een nieuw tabblad te openen: haar mapnotitie, of een tabblad dat erin staat.

### Gewijzigd

- **Het slot en de hernoemknop zijn één bedieningselement.** Buiten de kluis neemt een rood, gesloten slot de plaats van de knop in; het openen geeft de plek aan de knop, en de hernoemmodus verlaten sluit het weer.
- **De hernoemtoets vraagt het slot ook.** Buiten de kluis laat één druk het slot knipperen; een tweede druk binnen een halve seconde verleent wat het slot verleent en opent de hernoemmodus.
- **De hernoemtoets loopt een volledige cyclus** — titel in de notitie, naam, naam met extensie, pad vanaf de kluis, pad vanaf de systeemwortel — en de volgende druk is weer de titel in de notitie.
- **<kbd>Ctrl</kbd>-klik en middelklik zijn geen synoniemen meer.** De ene opent een tabblad en gaat erheen, de andere opent het op de achtergrond.
- **Rechtsklikken op de naam van de notitie opent het eigen menu van het bestand.**
- **De lijst is zo hoog als het venster toelaat**, in plaats van Obsidians vaste 300 pixels.
- **Op een map klikken terwijl een veld open is behoudt het hele pad erachter**, en in een map klikken binnen het veld toont de inhoud van die map volledig.
- **Het scheidingsteken opent een mapnotitie op elke diepte** wanneer Folder notes draait, en is onderstreept overal waar er een is. Voorheen werkten alleen mappen op het hoogste niveau. Bij de andere mapnotitie-plugins toont het scheidingsteken nog steeds de map.

### Opgelost

- **Een open veld overleefde zijn bestand.** Overschakelen naar een andere notitie met de padbalk open liet de rij de rest van de sessie het oude bestand benoemen.
- **Verwijderen, Hernoemen en Een kopie maken werden buiten de kluis geweigerd** terwijl het slot open was, en waren voor afbeeldingen, PDF's en pagina's nooit bereikbaar.
- **<kbd>Ctrl</kbd>+<kbd>Enter</kbd> deed niets zolang de lijst open was** — en zo opent elk veld nu eenmaal.
- **<kbd>Enter</kbd> met de lijst open maar zonder gemarkeerde rij** deed niets; het bevestigt nu wat je typte.
- **Een rij die overliep terwijl elke naam al zo kort mogelijk was, kon niet worden geschoven**, waardoor het eind van het pad onbereikbaar bleef.
- **De plugin uitzetten liet een dode knop achter** in de kopbalk van elke notitie die hij had aangepast.

## 1.2.0 — 2026-08-25[^1.2.0]

### Toegevoegd

- **Taalinstelling.** Lure volgt standaard de taal van Obsidian, en kan op elke eigen taal worden ingesteld. Dit is ook de enige manier om bij de Griekse en Sanskriete vertalingen te komen, die Obsidian zelf niet aanbiedt. Het label van de instelling blijft in het Engels, zodat het altijd terug te vinden is vanuit een taal die je niet kunt lezen.

## 1.1.2 — 2026-08-25[^1.1.2]

### Gewijzigd

- **Lichter stijlblad.** De rij gebruikt geen `:has()`-selectors en de meeste `!important`-regels niet meer. Ze past zich met minder werk aan, en de waarschuwingen van de plugincontrole daalden van 56 naar 7.

## 1.1.1 — 2026-08-22[^1.1.1]

### Opgelost

- **Een korte mapnaam kon met een gat erin getekend worden** — `atlas` als `atl as` — omdat de ruimte die voor de ingekorte vorm gereserveerd was breder was dan de naam zelf.

## 1.1.0 — 2026-08-22[^1.1.0]

### Toegevoegd

- **Rechtsklikwoordenschat.** Eén druk opent een menu; twee en drie drukken kopiëren steeds meer — de naam, de naam met extensie, het pad. De menu's van de rij komen nu item voor item overeen met die van de bestandsverkenner.
- **Menu's buiten de kluis.** Rijen in de lijst en de externe weergave bieden openen, *Pad kopiëren* en *Weergeven in systeemverkenner*; met het slot open ook *Nieuwe notitie*, *Nieuwe map*, *Een kopie maken*, *Hernoemen…* en *Verwijderen*. Verwijderen gaat naar de systeemprullenbak en is nooit definitief.
- **Elders openen.** <kbd>Ctrl</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> en middelklik op de naam van de notitie of op een map openen die in een nieuw tabblad, een splitsing of een venster. Beide zijn versleepbaar, net als hun rijen in de bestandsverkenner.
- **Sleep notities op de rij om ze te verplaatsen.** Zet een notitie, meerdere notities of een map neer op een mapsegment of op de kluisnaam.
- **Opdracht: Focus op de padbalk**, met het hele pad geselecteerd — geen standaardsneltoets, bind je eigen.
- **Typ een URL** in de padbalk: `http(s)://` en `obsidian://` openen als links, `file://` en procentgecodeerde paden openen het bestand.
- **Aanvullen met Tab**, zoals een shell dat doet: elke druk vult aan tot zover de namen van de map overeenkomen en stopt waar ze verschillen. <kbd>Shift</kbd>+<kbd>Tab</kbd> loopt terug. Als er niets meer aan te vullen valt, verbreedt <kbd>Tab</kbd> in plaats daarvan de selectie: naam, naam met extensie, pad vanaf de kluis, pad vanaf de systeemwortel.
- **De lijst opent waar je bent** en toont in het veld een voorbeeld van waar je op wijst; de lijst verlaten geeft je tekst terug.
- **Verplaats een notitie uit de kluis** na een bevestiging die de links telt die dat zal breken. Ze wordt eruit gekopieerd en daarna in de prullenbak gezet, zodat ze net als elke verwijderde notitie terug te halen is.
- **Instelling Bestandsextensies tonen**, en paden tussen aanhalingstekens (zoals Windows' *Als pad kopiëren* ze maakt) worden begrepen.
- **Instellingen verschijnen in Obsidians instellingenzoekfunctie** op Obsidian 1.13 en later.

### Gewijzigd

- **Lange paden passen in het deelvenster.** Namen worden ingekort vanaf de minst nuttige: eerst de kluisnaam, dan de extensie, dan de mappen, en de naam van de notitie als laatste — nooit voorbij het punt waarop ze nog te onderscheiden zijn. Wijs een ingekorte naam aan om haar heel te lezen.
- **Op de naam van de notitie klikken selecteert haar zonder de extensie**, zodat hernoemen niet langer het bestandstype kan veranderen.
- **De hernoemtoets opent op de naam zonder de extensie**, en verdere drukken verbreden de selectie.
- **Op een map klikken houdt de rest van het pad zichtbaar**, ook buiten de kluis.
- **Terugbladeren je kluis in opent bestanden als notities**, met links en backlinks, in plaats van in de externe weergave.

### Opgelost

- **Menulabels waren in elke taal Engels**; ze komen nu uit Obsidians eigen vertalingen.
- **De hernoemtoets liep dood op Obsidians hernoemvenster** wanneer de notitie voorbij haar titel was gescrold.
- **<kbd>Esc</kbd> had twee drukken nodig** om het veld en zijn lijst te sluiten.
- **<kbd>Ctrl</kbd>+<kbd>Enter</kbd> opende een link in de editor** in plaats van op de padbalk te werken.
- **Hernoemen buiten de kluis verloor de getypte naam** wanneer het slot werd ingedrukt.
- **Tab kon zonder voortgang rondlopen** bij een map die naast haar eigen mapnotitie staat.

## 1.0.4 — 2026-08-13[^1.0.4]

### Toegevoegd

- **De notitie waar je bent is blauw gemarkeerd** in de lijst, zodat terugbladeren naar haar map laat zien waar je begon.

## 1.0.3 — 2026-08-13[^1.0.3]

### Documentatie

- De README verwijst naar de pagina van de plugin in de communitygids, en de vertaalde README's zijn bijgewerkt.

## 1.0.2 — 2026-08-13[^1.0.2]

### Gewijzigd

- **Vereist Obsidian 1.8.7 of later** (was 1.4.0). Twee functies waarop de padbalk steunt — bestanden kopiëren en de fouttooltip onder het veld — hebben dat nodig.
- **Downloads van releases dragen een ondertekende bouwherkomst**, zodat je met `gh attestation verify` kunt bevestigen dat `main.js` uit deze repository is gebouwd.

### Opgelost

- **Een ontbrekend extern bestand openen in de standaardapp mislukte stilzwijgend**; de mislukking wordt nu gemeld.

## 1.0.1 — 2026-08-13[^1.0.1]

### Opgelost

- **In hernoemmodus botste een notitie met zichzelf** — terugbladeren naar haar eigen map verborg haar naam uit de lijst, alsof ze haar eigen hernoeming blokkeerde.
- **De eerste map die na het starten van Obsidian getoond werd, klapte niets uit.**
- **Een map uit de lijst kiezen kon de hernoemmodus beëindigen** in plaats van erin af te dalen.
- **Externe bewerkingen konden stilzwijgend overschreven worden** door een andere schrijver, zoals Sync of een tweede deelvenster. Schrijfacties zijn nu atomair.
- **Het herstel van de focusomlijning lekte door naar andere weergaven**; het geldt nu alleen voor kopbalken die Lure heeft aangepast.

### Documentatie

- De README en de handleiding zijn beschikbaar in alle 44 talen die de plugin meelevert.
- De handleiding noemde Obsidians instelling *Detect all file extensions*, die nu *Alle bestandstypen weergeven* heet.

## 1.0.0 — 2026-08-10[^1.0.0]

Eerste release. Vervangt de bestandsnaam in de kopbalk van een notitie door een aanklikbaar, bewerkbaar pad door haar kluis — een adresbalk voor je notities, naar het model van die van Dolphin.

### Toegevoegd

- **Klik op een map** voor een lijst met de inhoud van de map erboven, om haar te verruilen voor een buurmap en de rest van het pad ongemoeid te laten.
- **Klik op het scheidingsteken** achter een map om die in de bestandsverkenner te tonen en uit te klappen, of om haar mapnotitie te openen waar Folder notes dat afhandelt.
- **Klik op de bestandsnaam of op de lege ruimte** om een pad te typen, met automatisch aanvullen: `/` daalt af, <kbd>Backspace</kbd> gaat een niveau omhoog, <kbd>Enter</kbd> bevestigt.
- **De verplaats-/hernoemmodus** zet dezelfde interacties om naar verplaatsen en hernoemen, gecontroleerd zoals Obsidian controleert.
- **<kbd>Ctrl</kbd> opent in een nieuw tabblad** — of kopieert, in de verplaats-/hernoemmodus, de notitie daarheen.
- **<kbd>F2</kbd> wisselt** tussen de titel in de notitie en de padbalk.
- **Buiten de kluis** (standaard uit): de kluisnaam opent je andere kluizen, je persoonlijke map, de hoofdmap van het bestandssysteem en aangekoppelde schijven. Daarbuiten wordt er niets geschreven tot je het ontgrendelt, en een notitie kan alleen uit de kluis worden gekopieerd, nooit verplaatst.
- **45 talen.**

[^unreleased]: Wijzigingen sinds 1.2.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.2.0...HEAD>
[^1.2.0]: Wijzigingen sinds 1.1.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.2...1.2.0>
[^1.1.2]: Wijzigingen sinds 1.1.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.1...1.1.2>
[^1.1.1]: Wijzigingen sinds 1.1.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.0...1.1.1>
[^1.1.0]: Wijzigingen sinds 1.0.4: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.4...1.1.0>
[^1.0.4]: Wijzigingen sinds 1.0.3: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.3...1.0.4>
[^1.0.3]: Wijzigingen sinds 1.0.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.2...1.0.3>
[^1.0.2]: Wijzigingen sinds 1.0.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.1...1.0.2>
[^1.0.1]: Wijzigingen sinds 1.0.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.0...1.0.1>
[^1.0.0]: De eerste release: <https://github.com/Gelaende51/obsidian-lure/releases/tag/1.0.0>
