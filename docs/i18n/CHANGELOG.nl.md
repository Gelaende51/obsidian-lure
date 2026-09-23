<!-- Vertaling van CHANGELOG.md — stand: commit 2739cf0.
     Machinaal vertaald (Claude Opus 5) en niet nagekeken door
     moedertaalsprekers. Correcties zijn welkom; het Engelse CHANGELOG is de
     maatgevende versie. -->

[English](../../CHANGELOG.md) · [العربية](CHANGELOG.ar.md) · [አማርኛ](CHANGELOG.am.md) · [Беларуская](CHANGELOG.be.md) · [বাংলা](CHANGELOG.bn.md) · [Català](CHANGELOG.ca.md) · [Čeština](CHANGELOG.cs.md) · [Dansk](CHANGELOG.da.md) · [Deutsch](CHANGELOG.de.md) · [Ελληνικά](CHANGELOG.el.md) · [Español](CHANGELOG.es.md) · [فارسی](CHANGELOG.fa.md) · [Suomi](CHANGELOG.fi.md) · [Français](CHANGELOG.fr.md) · [Gaeilge](CHANGELOG.ga.md) · [עברית](CHANGELOG.he.md) · [Magyar](CHANGELOG.hu.md) · [Bahasa Indonesia](CHANGELOG.id.md) · [Italiano](CHANGELOG.it.md) · [日本語](CHANGELOG.ja.md) · [ქართული](CHANGELOG.ka.md) · [ភាសាខ្មែរ](CHANGELOG.kh.md) · [한국어](CHANGELOG.ko.md) · [Latviešu](CHANGELOG.lv.md) · [Bahasa Melayu](CHANGELOG.ms.md) · [नेपाली](CHANGELOG.ne.md) · **Nederlands** · [Norsk](CHANGELOG.no.md) · [Polski](CHANGELOG.pl.md) · [Português](CHANGELOG.pt.md) · [Português (Brasil)](CHANGELOG.pt-BR.md) · [Română](CHANGELOG.ro.md) · [Русский](CHANGELOG.ru.md) · [संस्कृतम्](CHANGELOG.sa.md) · [Slovenčina](CHANGELOG.sk.md) · [Shqip](CHANGELOG.sq.md) · [Српски](CHANGELOG.sr.md) · [Svenska](CHANGELOG.sv.md) · [ไทย](CHANGELOG.th.md) · [Türkçe](CHANGELOG.tr.md) · [Українська](CHANGELOG.uk.md) · [Oʻzbekcha](CHANGELOG.uz.md) · [Tiếng Việt](CHANGELOG.vi.md) · [简体中文](CHANGELOG.zh.md) · [繁體中文](CHANGELOG.zh-TW.md)

# Wijzigingslogboek

Elke release van Lure, de nieuwste eerst. Wat er sinds de laatste release is geland staat onder *Niet uitgebracht*. Versies dragen geen `v`-voorvoegsel, net als de release-tags.

## 1.5.0 — 2026-09-23[^1.5.0]

### Toegevoegd

- **Een naam die al in gebruik is, vraagt in plaats van te weigeren.** Verplaatsen of hernoemen naar een naam die er al is, opent een dialoogvenster met twee paden die je kunt bewerken: waar je bestand naartoe gaat, en waar het bestand dat in de weg staat naartoe gaat, rood zolang dat nog in gebruik is. Elk pad wordt ook getekend zoals de padbalk er een tekent, met de delen die verschillen gekleurd en als laatste ingekort. Beide velden hebben een lijst; de tweede bevat de gebruikelijke uitwegen — plaatsen omwisselen (het gaat naar de oude map van je bestand), namen omwisselen (het blijft staan en krijgt de oude naam van je bestand), beide omwisselen (het krijgt het oude pad van je bestand), `-1`, `-bak` en `-old` naast zijn eigen naam, en de twee namen die de bestanden hadden. Een uitweg waarvan het pad al in gebruik is, is grijs. Er een kiezen vult alleen het veld; Toepassen verplaatst beide, met links en al, en Annuleren verplaatst niets. Een naam uit de lijst kiezen die al in gebruik is, vraagt hetzelfde, en dat geldt ook voor een bestand naar een map slepen die de naam al heeft.
- **`:graph` in een map opent de graaf van die map** — de graaf gefilterd op `path:"that/folder"`, zoals het eigen zoekvak dat zou doen. In de hoofdmap van de kluis is het de hele graaf, zoals voorheen.
- **Een map die de naam al heeft, is rood** in de lijst tijdens het verplaatsen, en zo ook een bestand met die naam, zodat het conflict te zien is voordat je kiest.

### Gewijzigd

- **Het aanbod is altijd wat Tab zou schrijven.** Waar de namen elkaar niet meer volgen, biedt het veld de stap richting de eerste van hen aan, en de rij waar Tab naartoe zou gaan bepaalt dat; over een naam heen typen laat de extensie ervan staan, en het aanbod verschijnt ervoor; een map waar je net in bent gestapt biedt haar eerste stap aan. Voorheen waren er gevallen waarin niets werd aangeboden, en typte Tab er toch iets. De onderstreping van de lijst volgt het aanbod terwijl het verandert, en Tab op een rij waar je met de pijltjes naartoe bent gegaan, neemt die rij in plaats van de ernaast.
- **Het aanbod negeert hoofdletters.** `sch` typen biedt `Schemes` aan, gespeld zoals de naam is; het aanbod terugnemen geeft je eigen letters terug zoals je ze typte. Waar zowel `Test` als `test` bestaan, wordt degene aangeboden die gespeld is zoals je typte.
- **Na het indrukken van Tab wordt de volgende stap meteen aangeboden**, net als na een getypte letter.
- **Namen die beginnen met wat je typte komen eerst in de lijst**, gemarkeerd met een lijn langs hun rand — blauw waar ze meer delen dan je typte, groen op de tak die het aanbod neemt waar ze uiteengaan — vóór de namen die het alleen bevatten. Elk van hen onderstreept de stap die <kbd>Tab</kbd> ernaartoe zou zetten, niet alleen die van het aanbod.
- **De lijst volgt de cursor**, of het begin van een selectie: ze toont de map waar dat punt in staat, gefilterd op de letters ervoor. Aan het begin van een naam is dat de hele map.
- **Een rij aanwijzen toont haar als het aanbod** — wat je typte blijft van jou en de rest van de naam wordt gemarkeerd — en de muisaanwijzer van de lijst halen brengt het aanbod terug.
- **→ neemt één letter van het aanbod** in plaats van alles; <kbd>End</kbd> neemt het nog steeds helemaal.
- **Backspace vóór een extensie die alleen nog overblijft, gaat een map omhoog**, net als in een leeg veld; de losse extensie verdwijnt.
- **F2 in een geopend veld maakt er een hernoeming van, ter plekke**, met behoud van de tekst, de cursor en de selectie, en **Focus op de padbalk** haalt de hernoeming er op dezelfde manier weer af.
- **Iets anders indrukken of aanklikken tussen de drukken door begint de cyclus van F2 en Focus op de padbalk opnieuw.**
- **Mappen staan vet in de lijst**, dus de eigen notitie van een map hoeft niet langer grijs te zijn om zich te onderscheiden: ze is paars, zoals elke andere notitie.
- **De lijst is nooit breder dan de padbalk.** Een naam die niet past, wordt ingekort zoals de padbalk er een inkort, en volledig getoond bij het aanwijzen.
- **PageUp en PageDown scrollen de lijst per wat ze toont**, ook vanuit het veld, en de geselecteerde rij houdt haar plaats op het scherm. <kbd>Home</kbd> en <kbd>End</kbd> brengen de eerste en de laatste rij in beeld.
- **De lijst toont tot 1000 items** voordat ze de rest telt, in plaats van 100.
- **Mappen wijken langste eerst.** Bij ruimtegebrek verkort de langste mapnaam tot de lengte van de op-één-na-langste, dan allebei samen, enzovoort, elk stoppend bij haar ondergrens. Voorheen verkortte elke map tegelijk, naar verhouding van haar lengte.
- **Ingekorte namen schuiven in plaats van te springen.** Een naam die wijkt, wordt tot op de pixel afgeknot en vervaagt onder zijn `…`, zodat niets erna op de rij met sprongen beweegt terwijl een deelvenster van grootte verandert.

### Opgelost

- In een rechterdeelvenster opende de lijst onder het linkerdeelvenster totdat de eerste letter werd getypt.
- De muisaanwijzer van de lijst halen bracht het aanbod terug, maar niet zijn kleur.
- Een spatie waar een ingekorte naam werd gesplitst — `development guidelines` — verdween, waardoor de twee woorden aan elkaar kwamen.

## 1.4.0 — 2026-09-19[^1.4.0]

### Toegevoegd

- **Een rij 'Sneltoetsen' in de instellingen.** De knop erbij opent Obsidians *Sneltoetsen*, gefilterd op deze plugin, waar *Focus op de padbalk* — dat zonder toets wordt geleverd — er een kan krijgen.
- **Een padbalk op deelvensters zonder bestand.** Een leeg tabblad toont `vault / :blank`, de graaf `vault / :graph`, en elke andere weergave zonder naam krijgt haar eigen `:`-label — het eigen tabblad van een home-tab-plugin toont `:home-launcher`. Het veld ernaast is een adresbalk: typ een pad en <kbd>Enter</kbd> opent het in dat deelvenster, of maakt het aan. Voorheen was de rij leeg — de plugin verborg Obsidians eigen titel en zette er niets voor in de plaats.
- **Een pagina kan getypt worden, niet alleen gekozen** — `:graph` en de rest zijn een adres, niet alleen een lijstitem. Geen bestandsnaam begint met een dubbele punt, dus roept het typen van één, waar dan ook, ze op, en draagt het veld hun kleur in plaats van aan te bieden een notitie te maken die niets zou kunnen heten.
- **Een rij voor Obsidians eigen *Alle bestandstypen weergeven***, naast de regel voor puntbestanden, aangezien beide bepalen wat een lijst mag tonen: hij zegt dat je die instelling in Obsidians eigen instellingen moet opzoeken en aanzetten om elk bestand te zien, en de knop ernaast opent die pagina met de instelling in beeld gescrold en opgelicht, zoals een zoekresultaat in de instellingen dat zou doen. Genoemd met Obsidians eigen woorden, uitgelegd in 45 talen.
- **De hoofdmap van de kluis toont de pagina's die een deelvenster kan bevatten** — `:graph`, `:search`, en welke weergaven je plugins ook registreren, een home-tab of een kalender erbij. Kies er één en het deelvenster opent hem, zoals het kiezen van een notitie de notitie opent. Weergaven die er zijn om een bestand te tonen, blijven buiten beschouwing, omdat er dan niets voor hen te tonen zou zijn.
- **Het eigen scheidingsteken van de kluis opent je startpagina**, waar een plugin er een levert, en is daarom onderstreept; de druk erna vouwt de bestandsboom weg, en de druk daarna zet precies terug wat open stond. Zonder zo'n plugin vouwt de eerste druk, zoals voorheen.
- **Typ een pad vanaf de hoofdmap van het bestandssysteem.** Een `/` vooraan in een leeg veld opent er een in plaats van te worden opgeslokt, elke latere schuine streep erin hoort erbij, en de lijst toont de machine in plaats van de kluis.

### Gewijzigd

- **F2 en Focus op de padbalk drukken Tab binnen het veld.** Wat Tab daar ook zou doen — de volgende trede, het aanvullen van wat je typte, een map in stappen — dat doen ze ook; alleen waar Tab terug naar het begin van het pad loopt, verlaten ze het veld, F2 naar de titel in de notitie, de opdracht naar de notitie. Voorheen liet een veld waarin je had getypt, F2 opnieuw beginnen bij de naam en de opdracht het veld sluiten.
- **De stap na het verlaten van de cyclus is de hoofdmap van de kluis.** De druk na F2's terugkeer naar de titel in de notitie, of de terugkeer van de opdracht naar de notitie, komt uit waar Tabs ronde ook uitkomt — de hoofdmap van de kluis, het hele pad in het veld, de eerste map ervan gemarkeerd — zodat geen enkele stap van de cyclus alleen aan Tab is overgelaten.
- **Focus op de padbalk loopt als F2.** Het opent op de naam in plaats van het hele pad, doorloopt dezelfde vier treden, en de druk na de laatste sluit het veld en zet de cursor terug in de notitie — voorheen liep het de treden eindeloos rond, en de enige toets die de rij bereikte, kon er niet meer uit.
- **Een bezette naam wordt gemeld wanneer je hem gebruikt, niet terwijl je hem typt.** Elke naam die naar `Notes.md` toe wordt getypt, doorloopt namen die zelf ook bestanden kunnen zijn, en de waarschuwing flitste vroeger letter voor letter op en weer weg. Wat er mis is met de spelling van een naam wordt nog steeds gezegd zoals hij gespeld is.
- **Een scheidingsteken waarvan de mapnotitie al open is, onthult de map** in plaats van te heropenen wat al op het scherm staat — wat de tweede druk erop altijd al betekend heeft.
- **Waar je bent, is vetgedrukt in een lijst**, niet alleen blauw.
- **Alles wat geen notitie is, is oranje in een lijst**, niet alleen de teksttypen waar Obsidian geen weergave voor heeft. Het paars pikt de notities uit een map met gemengde inhoud; één kleur voor de rest zegt hetzelfde, sneller.

### Opgelost

- **Backspace over een aangeklikte map haalt de naam van de kluis niet langer weg.** De schuine streep die vooraan overbleef, werd gelezen als een pad vanaf de wortel van de machine, waardoor het beginsegment leeg raakte — en het veld sluiten met Escape zette het nooit terug, zodat het tabblad zijn kluisnaam en icoon voorgoed kwijtraakte. Een schuine streep vooraan telt nu alleen als die van de machine wanneer de eerste map erachter er echt is, en het beginsegment keert terug bij elke manier om het veld te verlaten.
- Buiten de kluis werden bestanden verborgen tenzij Obsidians **Alle bestandsextensies detecteren** aanstond — een instelling over wat de kluis indexeert, toegepast op mappen die niet in de kluis zitten. Een `.txt` naast je notities wordt daarbuiten hoe dan ook getoond.
- De lijst van de kluisnaam deed niets op een deelvenster zonder bestand — precies het deelvenster waarmee je ergens anders naartoe zou gaan.
- Klikken op de kluisnaam liet Obsidians eigen titel grijs naast het pad in het veld staan, waar hij op geen enkel ander moment verschijnt: de rij meet zichzelf af aan wat ze getekend heeft, en op dat moment heeft ze zichzelf geleegd om plaats te maken voor het veld.

- Klikken op de lege ruimte opende het veld en verloor het daarna weer: de notitie onthullen in de Bestandsverkenner neemt de cursor mee, zodat het veld open en gemarkeerd bleef staan terwijl elke toetsaanslag naar de boom ging.
- De trede die het pad vanaf de systeemwortel toont, tekende een spoor van datzelfde pad naast het veld, niet passend, zodat een diep pad over zichzelf heen werd geschilderd.

## 1.3.0 — 2026-09-17[^1.3.0]

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
- **Verwijderen, Hernoemen en Dupliceren werden buiten de kluis geweigerd** terwijl het slot open was, en waren voor afbeeldingen, PDF's en pagina's nooit bereikbaar.
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
- **Menu's buiten de kluis.** Rijen in de lijst en de externe weergave bieden openen, *Pad kopiëren* en *Toon in map*; met het slot open ook *Nieuwe notitie*, *Nieuwe map*, *Dupliceren*, *Hernoemen…* en *Verwijderen*. Verwijderen gaat naar de systeemprullenbak en is nooit definitief.
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
- De handleiding noemde Obsidians instelling *Detect all file extensions*, die nu *Toon alle bestandsextenties* heet.

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

[^1.5.0]: Wijzigingen sinds 1.4.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.4.0...1.5.0>
[^1.4.0]: Wijzigingen sinds 1.3.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.3.0...1.4.0>
[^1.3.0]: Wijzigingen sinds 1.2.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.2.0...1.3.0>
[^1.2.0]: Wijzigingen sinds 1.1.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.2...1.2.0>
[^1.1.2]: Wijzigingen sinds 1.1.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.1...1.1.2>
[^1.1.1]: Wijzigingen sinds 1.1.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.0...1.1.1>
[^1.1.0]: Wijzigingen sinds 1.0.4: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.4...1.1.0>
[^1.0.4]: Wijzigingen sinds 1.0.3: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.3...1.0.4>
[^1.0.3]: Wijzigingen sinds 1.0.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.2...1.0.3>
[^1.0.2]: Wijzigingen sinds 1.0.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.1...1.0.2>
[^1.0.1]: Wijzigingen sinds 1.0.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.0...1.0.1>
[^1.0.0]: De eerste release: <https://github.com/Gelaende51/obsidian-lure/releases/tag/1.0.0>
