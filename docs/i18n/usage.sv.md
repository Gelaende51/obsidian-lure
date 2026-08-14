<!-- Översättning av docs/usage.md — läge: commit 33b0e60.
     Maskinöversatt (Claude Opus 5), inte granskad av modersmålstalare.
     Tilläggets etiketter kommer från src/lang/translations.ts och
     Obsidians från de texter som applikationen själv levererar, så de
     stämmer med det du ser på skärmen. -->

[English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · [Čeština](usage.cs.md) · [Dansk](usage.da.md) · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · [Bahasa Indonesia](usage.id.md) · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · [Norsk](usage.no.md) · [Polski](usage.pl.md) · [Português](usage.pt.md) · [Português (Brasil)](usage.pt-BR.md) · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · **Svenska** · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

# Användning

[← tillbaka till README](README.sv.md)

## Sökvägen

Anteckningens fullständiga sökväg i valvet ersätter det nakna filnamnet i vyns rubrikrad — raden under flikraden som också rymmer bakåt-/framåtknapparna.

Två saker på raden är klickbara, och **Mappnamnet öppnar listan** avgör vad som gör vad:

| | Mappnamn | Avgränsaren efter det |
| --- | --- | --- |
| **På** (standard) | Väljer den mappen för redigering | Öppnar mappen |
| **Av** | Öppnar mappen | Stiger ned i den mappen |

"Öppnar mappen" betyder vad ett klick på det segmentet gör i Obsidian utan tillägg. Utan ett tillägg som lyssnar där visas mappen i sidopanelen Filutforskaren — markerad och uppfälld så att innehållet syns.

Med [Folder notes](obsidian://show-plugin?id=folder-notes) installerat öppnar samma klick i stället mappens anteckning. Det är det enda mappanteckningstillägg som visat sig göra anspråk på sökvägen i rubriken; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) och [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) hanterar mappanteckningar men lyssnar inte efter klick på sökvägen, så med dem visar avgränsaren mappen som vanligt. Se [kompatibilitet](../compatibility.md#verified-against).

En avgränsare är **understruken bara när mappen före den faktiskt har en mappanteckning**, så understrykningen är ett löfte om att det finns något att öppna. Varje avgränsare förblir klickbar oavsett — en utan understrykning visar och fäller upp sin mapp i sidopanelen, vilket pekaren fortfarande signalerar. Understrykningen lämnar mappnamnet samtidigt: med bytet på öppnar namnet listan, så att märka det som länken till anteckningen vore en lögn.

**Byt namn-/flyttläget åsidosätter båda**, oavsett vad inställningen säger: ingenting på raden öppnar en mapp medan en flytt väntar, eftersom att öppna en skulle överge flytten. Mappnamn väljs för redigering och avgränsare stiger ned — båda är sätt att peka ut målet — och understrykningen försvinner för att visa att öppnandet är pausat.

**Valvets rot** är det enda segment som inte är ett sökvägssegment. Det har ingen förälder att lista syskon ur, så i stället öppnar det [listan med platser](#bläddra-utanför-valvet) — dina andra valv, hemmappen, filsystemets rot och monterade enheter.

## Klicka på ett segment: byt ut det mot ett syskon

Ett klick på ett mappnamn väljer **den mappens namn** i ett textfält och öppnar en lista över mappen **ett steg upp** — dess förälder. Att skriva eller välja en rad byter ut den här mappen mot ett syskon och lämnar allt under den orört, så `Projekt/2026/Uppstart.md` → klicka `2026` → välj `2025` ger dig `Projekt/2025/Uppstart.md`.

Ett klick på **anteckningens namn** fungerar likadant mot dess egen mapp, och väljer filnamnet **inklusive filändelsen** — att byta namn på eller rikta om en anteckning innebär oftast att den också ändras.

Klicket på mappen har redan valt ett segment, så **ytterligare ett klick** vidgar markeringen till hela raden — den mappen *och* allt under den — och det du skriver ersätter då resten av sökvägen på en gång. Fungerar likadant i navigerings- och byt namn-/flyttläget.

Det gäller bara som en fortsättning på klicket som öppnade fältet. När du väl har använt fältet beter det sig som vilket textfält som helst: klick placerar markören, dubbelklick tar ett ord, trippelklick tar raden.

Hur som helst förblir resten av sökvägen synlig runt fältet, som brickor före det och som omarkerad text efter det, så att den fullständiga sökvägen aldrig försvinner ur rubriken. Skriv för att ersätta markeringen, eller tryck <kbd>End</kbd> / <kbd>→</kbd> för att behålla den och redigera vidare därifrån. Listan visar hela mappen oavsett vad som är förifyllt; den börjar filtrera först när du faktiskt skriver.

## Nedstigning med avgränsare

Ett klick på en avgränsare (med **Mappnamnet öppnar listan** av) stiger ned i mappen före den: listan visar *den* mappens innehåll, och resten av sökvägen öppnas markerad i fältet. Att välja en mapp lägger till den i sökvägen och öppnar genast nästa lista, så du kan klicka dig ned genom ett träd utan att lämna rubrikraden.

## Listans rader är riktiga filhanterarrader

Varje fil och mapp i listan beter sig som sin rad i Filutforskaren:

- **Högerklicka** för samma snabbmeny — *Ny anteckning* / *Ny mapp* på en mapp, *Öppna i ny flik* / *Byt namn…* / *Radera* på en fil — inklusive rader som andra tillägg lägger till i filmenyer.
- **Dra** en rad dit Obsidian tar emot en fil: in i en redigerare för att infoga en länk, till en mapp i Filutforskaren för att flytta den, till flikraden för att öppna den.

Menytexterna kommer från Obsidians egna översättningar, så de stämmer med resten av programmet på alla språk.

## Skriva en sökväg

- Ett klick på det **tomma utrymmet** före eller efter sökvägen öppnar ett textfält förifyllt med hela sökvägen och helt markerat — skriv över den, eller redigera på plats. (Ett klick på själva filnamnet väljer bara filnamnet; se ovan.)
- Att skriva medan sökvägen visas gör om det sista segmentet till ett litet fält med levande autokomplettering begränsad till den aktuella mappen.
- `/` bekräftar det aktuella segmentet och stiger ned i det.
- <kbd>Backspace</kbd> i ett tomt fält kliver tillbaka ut till föräldramappen och öppnar dess namn igen med markören sist.
- <kbd>Enter</kbd> bekräftar; <kbd>Esc</kbd> eller ett klick någon annanstans avbryter tillbaka till filens verkliga sökväg.

Fältet är helt avskalat — ingen ruta, ingen kant — så att det läses som själva sökvägstexten, och det växer av sig självt medan du skriver.

## Navigering rör aldrig den öppna filen

I standardläget (navigering) byts den öppna anteckningen **aldrig** namn på och flyttas aldrig.

- En sökväg som pekar på en befintlig fil öppnar den.
- En sökväg som inte finns än frågar *"Skapa ny fil?"*. Att bekräfta skapar de mappar som saknas och filen; att avbryta gör ingenting alls.

## <kbd>Ctrl</kbd> — ny flik, och kopiera i stället för att flytta

Att hålla <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> på macOS) medan du väljer en fil ur listan, eller medan du trycker <kbd>Enter</kbd> på en sökväg, skickar resultatet till en **ny flik** i stället för till den här:

| | Utan tangent | Med <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Välj eller skriv en befintlig fil | Öppnas här | Öppnas i en ny flik |
| Skriv en sökväg som inte finns | Frågar, öppnar sedan här | Frågar, öppnar sedan i en ny flik |
| Bekräfta en sökväg i byt namn-/flyttläget | **Flyttar** anteckningen dit | **Kopierar** den dit och öppnar kopian i en ny flik |

Tangenten läses med Obsidians egen regel, så den beter sig exakt som på en länk eller en rad i Filutforskaren — mittklick betyder också "ny flik", <kbd>Ctrl</kbd>+<kbd>Alt</kbd> betyder en delning och <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> ett nytt fönster.

Att kopiera vägrar skriva över, precis som att flytta gör — även över anteckningens egen sökväg, där det inte finns något vettigt att kopiera.

## Bläddra utanför valvet

**Detta är av som standard.** Slå först på **Åtkomst till externa filer** i inställningarna — att läsa och skriva utanför valvet är det enda det här tillägget gör som Obsidian självt inte gör, så man väljer att slå på det snarare än att slå av det. Med det av visar valvnamnet helt enkelt ditt valv i Filutforskaren, och ingenting här tittar någonsin förbi det.

Ett klick på **valvnamnet** (eller på 🏠-ikonen, när *Visa valvets namn* är av) öppnar en lista över platser i stället för innehåll:

- **Dina andra valv**, lästa ur Obsidians eget register, senast öppnade först, var och en under Obsidians egen valvikon — den som programmet självt använder för valvkommandon. Valvet du redan har öppet får ett hus i stället: det är där raden börjar som standard, inte någonstans att gå.
- **Hemmappen**, under sitt eget kontonamn, märkt med ett `~`. Lucide har ingen tilde, så den här ritas av tillägget på Lucides eget 24×24-rutnät med samma streck — en ikon som saknas i uppsättningen snarare än ett skrivtecken bland ikoner.
- **Filsystemets rot**, märkt `root` — oöversatt, eftersom det heter så på alla system — snarare än `/`, som skulle läsas som ett tomt steg intill avgränsaren som följer.
- **Monterade enheter**, med en ikon per typ där det är billigt att avgöra: nätverksresurser, optiska skivor, disketter och flyttbara media får sina egna; allt annat får en allmän enhet. På Windows visas enheter som `C:` med en allmän ikon — volymnamn och exakta typer kräver WMI, vilket medvetet inte görs.

Att välja ett annat valv **byter inte Obsidian till det.** Allt du har öppet förblir öppet; sökvägsraden börjar bara bläddra där. Det är hela poängen med att ha det på sökvägsraden i stället för att överlåta det till sidopanelens valvväljare.

### Medan du är utanför

Sökvägen **börjar vid platsen du valde**, inte vid maskinens katalogstruktur — välj `Arkiv` och raden lyder `Arkiv / anteckningar / …`, inte `/home/du/Valv/Arkiv/anteckningar/…`. Det inledande segmentet bär en ikon för vad det är (valv, hem, enhet), och <kbd>Backspace</kbd> stannar där i stället för att vandra vidare upp i resten av filsystemet. Med *Visa valvets namn* av är det segmentet enbart ikonen — inställningen handlar om radens inledande segment vilket valv det än namnger, inte bara ditt eget.

Sökvägsraden är **inramad i felfärgen** — samma ring som byt namn-läget ritar — så länge den pekar utanför ditt valv. Den markerar ett bestående tillstånd, inte ett ögonblick: så länge den syns gäller ingen av Obsidians egna hanteringar det raden visar, och skrivning är låst tills du säger annat.

Bläddrandet fungerar i övrigt som därinne: brickor, avgränsare, skrivande, autokomplettering, <kbd>Backspace</kbd> för att kliva ut. Samma synlighetsregler gäller också, så filändelser som inte stöds kräver fortfarande Obsidians *Titta på alla filändelser* och dolda filer kräver fortfarande det här tilläggets inställning.

**Högerklick och dra** fungerar inte därute — det är Filutforskarens egna hanterare, och de behöver en fil som valvet känner till.

### Skriva utanför valvet

Allt som skriver är **låst som standard.** Ett **hänglås** dyker upp bredvid byt namn-knappen i rubriken så länge raden pekar utanför ditt valv; att trycka på det öppnar låset och gör det rött, i takt med ringen runt raden.

Rättigheten ges **till en plats, inte till ett ögonblick**: den överlever allt du skulle göra medan du arbetar på ett ställe — avsluta en flytt, klicka bort från fältet, öppna en fil — och upphör när du väljer ett annat valv, en annan enhet eller roten i listan, när raden återvänder till en valvfil, eller när du trycker på hänglåset igen. Så en följd av flyttar inom en mapp kostar ett tryck, inte ett per fil.

Med hänglåset öppet beter sig sökvägsraden därute som den gör därinne:

| Gest | Resultat |
| --- | --- |
| Skriv ett namn som inte finns, <kbd>Enter</kbd> | Samma "skapa den?"-fråga som därinne; mappar som saknas skapas också. Ett namn utan filändelse blir en `.md`, precis som därinne |
| Byt namn-/flyttläget, skriv ett nytt namn | Byter namn på filen raden visar. Ett namn utan filändelse behåller filens egen — härute rymmer en mapp alla sorters filer, och ett namnbyte ska inte tyst göra en `.png` till en `.md` |
| Byt namn-/flyttläget, bläddra vidare, välj **behåll det här namnet** | Flyttar den dit under namnet den redan har |
| Håll <kbd>Ctrl</kbd> på någon av dem | Kopierar i stället för att flytta, och öppnar kopian i en ny flik |

Låst rapporterar alla dessa vad som hindrar dem i stället för att hända. Ingenting skrivs någonsin över i något av lägena: ett mål som redan finns avvisas, och avvisandet är filsystemets eget (`COPYFILE_EXCL`, ett exklusivt skapande) snarare än en kontroll som kunde förlora en kapplöpning. En flytt mellan filsystem — från ett USB-minne, från en nätverksresurs — faller tillbaka på kopiera-sedan-radera, och originalet tas bort först när kopian har landat.

**En sak hänglåset inte låser upp: att flytta en anteckning *ut* ur ditt valv.** `fileManager` kan inte följa en fil över den gränsen, så varje länk som pekar på anteckningen skulle brytas tyst och Obsidian skulle helt enkelt se den försvinna. Att hålla <kbd>Ctrl</kbd> kopierar ut den i stället, vilket inte har det problemet alls, och meddelandet säger det. Åt andra hållet — att ta in en fil utifrån *in i* valvet — är inte heller kopplat än.

### Öppna en extern fil

Obsidians redigerare fungerar bara på filer inne i valvet, så en extern fil **kan inte** öppnas som en riktig anteckning med länkar, bakåtlänkar och allt det där — det är en begränsning i programmet, inte i det här tillägget. Att välja en öppnar i stället en **förhandsvisning**, skrivskyddad tills du säger annat:

| Typ | Visas som |
| --- | --- |
| `.md`, `.markdown` | Renderad Markdown |
| Bilder, ljud, video, PDF | Inbyggd spelare/visare |
| Vilken annan **textfil** som helst (`.json`, `.css`, `.log`, `.txt`, …) | Ordagrann oformaterad text |
| Binära format utan visare | Lämnas till *Öppna externt* |

Visaren har två läsningar av en fil, och eftersom de utesluter varandra visas bara den du skulle byta **till**:

| | Vad den gör | Standard för |
| --- | --- | --- |
| **Visa som Markdown** | Renderar filen som en anteckning, skrivskyddad | `.md`, `.markdown` |
| **Redigera som text** | Källan, redigerbar | allt annat |

Utanför valvet är **Redigera som text** också trycket som häver skrivskyddet — läget och rättigheten är en gest snarare än två knappar att hålla reda på. Den är rödtonad **närhelst ett tryck skulle häva skrivskyddet**, oavsett om du beväpnar redigering på plats eller kommer direkt från den renderade vyn; inne i valvet finns inget att låsa upp, så då är den vanlig. **Visa som Markdown** får ett lätt accentfärgat sken — samma ton Obsidian ger markerad text — vilket märker den som vägen tillbaka snarare än en uppmaning.

Eftersom knappen följer *redigerandet* snarare än råläget erbjuder en fil som ligger skrivskyddad i textvyn fortfarande **Redigera som text**: det är trycket som beväpnar den. En fil som aldrig kan skrivas i — avkortad eller oläsbar — säger **Visa som text** i stället, eftersom det är allt trycket kan leverera.

Standarderna är vända åt det nyttiga hållet snarare än det bokstavliga: ett `#` i ett skalskript är en kommentar, inte en rubrik, så att rendera en `.log` som Markdown skulle tyst svälja den. Båda standarderna kan åsidosättas per fil, och valet går in i flikens historik, så bakåt/framåt och en återöppnad arbetsyta behåller det — gott om anteckningar bor i `.txt`-filer, och gott om `.md`-filer är lättare att läsa som källa.

**Filer i ditt valv går att redigera direkt**, utan upplåsning: *Redigera som text* är en riktig redigerare och skriver tillbaka medan du skriver.

**Redigerandet kommer ihåg över bytet.** Att gå till *Visa som Markdown* pausar det — en statisk rendering har inget att skriva i, och Live Preview behöver Obsidians egen redigerare, som bara finns för filer inne i valvet — så ingenting påstår att du redigerar medan du är där. Att gå tillbaka till *Redigera som text* tar vid där du slutade.

**Filer utanför valvet öppnas skrivskyddade, och *Redigera som text* häver det.** Trycket är hela grinden: tills det sker skrivs ingenting därute. Efteråt sparas filen medan du skriver, precis som en i valvet; och statusraden byter från ett lås till en penna. Upplåsningen gäller den ena filen i den ena fliken — att navigera till en annan fil låser om, och den sparas medvetet inte i flikens historik, så en återöppnad arbetsyta kommer aldrig tillbaka med skrivning redan beväpnad på en systemfil du inte minns att du öppnade.

**Avkortade filer förblir skrivskyddade oavsett** — att spara det som syns skulle kasta bort allt bortom gränsen, så knappen erbjuds inte alls i stället för att erbjudas och avvisas. Detsamma gäller en fil som inte gick att läsa: det finns inget att skriva tillbaka utom en tom ruta.

Om skrivningen misslyckas — en skrivskyddad montering, en fil du inte äger — visas systemets egen orsak i ett meddelande.

Mycket stora filer visas avkortade, och statusraden säger det snarare än att låta dig upptäcka det — bredvid de andra villkoren snarare än efter knapparna, eftersom det är ett faktum om filen som de andra. Gränserna mäts mot en levande renderare snarare än gissas — att lägga ut en megabyte text i en ruta dödar Obsidians renderarprocess helt, och Markdown kostar flera gånger mer per byte än oformaterad text, så de två har skilda gränser och en enda enorm rad kortas av även när filen som helhet är liten.

**Statusraderna är etiketter, och förklaringen är en tooltip.** Varje rad säger vad som är sant med så få ord det tar — *Utanför valvet*, *Ingen redigerare för den här filtypen*, *Avkortad — filen är för stor* — eftersom knapparna bredvid dem redan säger vilket tillstånd filen är i. Att hålla pekaren över en ger meningen: varför Obsidian inte kan öppna den som en anteckning, vad som annars skulle hända med den filtypen, vad avkortningen kostar dig.

Detta gäller också filer **inne** i ditt valv. Obsidian lämnar varje filändelse det saknar vy för direkt till skrivbordets standardprogram — så en `.txt` eller `.json` i ditt valv skulle lämna Obsidian helt. Sådana öppnas nu i samma visare, med den orange ringen, eftersom "öppna den i Obsidian" är vad du bad om — och som valvfiler går de att redigera där utan någon upplåsning. Binära filer utan visare behåller Obsidians beteende; det finns inget att visa.

Förhandsvisningen öppnas **i fliken du var i**, så bakåt/framåt tar dig tillbaka till anteckningen du kom från; håll <kbd>Ctrl</kbd> för en ny flik som överallt annars. Rubrikraden fortsätter visa den externa filens sökväg medan den är öppen, så du kan bläddra vidare därifrån.

En stillsam rad ovanför innehållet erbjuder vägarna ut:

- **Öppna i *(valv)*** — visas när filen tillhör ett av dina andra valv. Lämnar den till Obsidians egen URI-hanterare, som öppnar det valvets fönster med anteckningen i, som en riktig redigerbar anteckning. Det här fönstret lämnas precis som det var; ingenting byts under dig.
- **Visa som Markdown** / **Redigera som text** — de två läsningarna; den andra häver också skrivskyddet utanför valvet.
- **Öppna externt** — lämnar filen till skrivbordets standardprogram, inklusive de binära format den här visaren inte kan visa.

Ingenting utanför ditt valv skrivs om du inte trycker *Redigera som text* först. Se avsnittet [Utanför valvet](README.sv.md#utanför-valvet) i README för hela redovisningen.

## De två varningsfärgerna

| | När | Vad det betyder |
| --- | --- | --- |
| **Röd** ring på sökvägsraden | Raden pekar utanför ditt valv | Obsidian kan inte öppna det som finns där som en anteckning, och ingenting därute skrivs förrän du öppnar hänglåset. |
| **Orange** ring på sökvägsraden, orange rader i listan | Filen är en texttyp Obsidian saknar vy för | En varning. Obsidian skulle lämna den till skrivbordets standardprogram; tillägget visar den i stället. |

**De två är oberoende, och båda kan gälla samtidigt** — en extern `.json` är utanför ditt valv *och* en typ Obsidian saknar redigerare för. I visaren dyker de upp som skilda rader, var och en som bara säger sitt eget. På sökvägsraden vinner rött där båda gäller, eftersom två ringar bara vore brus.

Den orange nivån är medvetet smal. Registrerade typer (Markdown, canvas, bilder, PDF, ljud, video) hanteras ordentligt och får ingenting. Binära filer får inte heller något — du kommer inte att redigera sönder en `.zip` av misstag. Kvar är precis faran: en `.json`, `.css` eller `.log` som **Titta på alla filändelser** har gjort synlig.

Rött vinner där båda skulle gälla; två ringar på en gång vore bara brus.

## Byt namn-/flyttläge

Pennknappen längst till höger i rubriken — bredvid vylägesknappen, lika stor som de inbyggda knapparna — växlar byt namn-/flyttläget. Rubrikraden ramas då in i accentfärgen, precis som vid namnbyte i Filutforskaren. Samma klick och tangenttryck bekräftar nu en flytt eller ett namnbyte via Obsidians `fileManager.renameFile`, så alla länkar till anteckningen följer med.

Under namnbytet:

- Det aktuella filnamnet fästs in i varje mapps lista, så att flytta en anteckning utan att byta namn på den är ett enda klick.
- Namn som redan är tagna i målmappen tonas ned men går fortfarande att välja.
- Inmatningen valideras levande mot Obsidians egna namnbytesregler — samma teckenuppsättningar, samma meddelanden, samma röda tooltip du får när du byter namn i filträdet — så ett otillåtet namn eller ett som krockar flaggas medan du skriver och går inte att bekräfta.
- Ett klick utanför rubrikraden, eller att rubriken tappar fokus, avslutar byt namn-läget.

## En tangent för båda namnbytena

Kommandot för namnbyte (<kbd>F2</kbd> som standard, eller vad du har bundit om det till) **växlar** mellan Obsidians namnbyte i den infogade titeln och det här tilläggets sökvägsrad med hela sökvägen markerad. Om du har slagit av Obsidians infogade titel blir sökvägsraden det enda målet, så tangenten gör aldrig ingenting.

Detta fungerar genom att linda kommandot `workspace:edit-file-title` snarare än att kapa tangenten, så både att binda om snabbtangenten och att köra kommandot från paletten fungerar oförändrat.

## Hur listans rader färgas

| Färg | Betyder |
| --- | --- |
| **Lila** | En anteckning (`.md`, `.markdown`) — det Obsidian öppnar som en anteckning, utplockat ur en mapp med blandat innehåll |
| **Orange** | En texttyp Obsidian saknar vy för; se [varningsfärgerna](#de-två-varningsfärgerna) |
| **Nedtonad** | Utanför ditt valv, så valvets egen hantering gäller inte |
| **Blå** | Anteckningen du är i. När du bläddrar är det dess egen rad; i byt namn-/flyttläget står raden *behåll det här namnet* i dess ställe — samma anteckning i båda fallen |
| **Grå** | Endast i byt namn-/flyttläget: namnet är taget. Går fortfarande att välja — att välja ett fyller fältet, där valideringen flaggar krocken |

## Synlighetsregler

- Filer med filändelser som inte stöds dyker upp i listorna bara om Obsidians inställning **Titta på alla filändelser** är på.
- Listan visar högst 100 rader — Obsidians egen gräns. När en mapp har fler säger den sista raden hur många som utelämnades; skriv vidare för att smalna av listan.
- Dolda filer och mappar dyker upp bara om det här tilläggets inställning **Visa dolda filer** är på.
- **Överskrivningsskyddet fungerar likadant oavsett synlighet** — en dold fil hindrar dig fortfarande från att skriva över den.

## Fusklapp

| Du vill… | Gör så här |
| --- | --- |
| Öppna en mapp (dess anteckning, eller visa den) | Klicka avgränsaren **efter** den mappen |
| Byta ut en mapp mot ett syskon | Klicka mappens namn, skriv sedan eller välj |
| Byta namn på eller rikta om anteckningen | Klicka anteckningens namn — filändelsen inräknad |
| Bläddra i en mapps innehåll | Klicka mappens namn; listan visar dess förälder, så klicka mappen **under** den du vill åt |
| Skriva om en mapp och allt under den | **Dubbelklicka** mappens namn, skriv sedan |
| Redigera sökvägen från en mapp och nedåt | Klicka mappens namn, sedan <kbd>End</kbd> eller <kbd>→</kbd> för att avmarkera |
| Hoppa till en fil genom att skriva dess sökväg | Klicka filnamnet eller det tomma utrymmet, skriv, <kbd>Enter</kbd> |
| Öppna en fil i en ny flik i stället | <kbd>Ctrl</kbd> medan du väljer den, eller <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| Kopiera anteckningen någonstans i stället för att flytta den | Pennan, sedan <kbd>Ctrl</kbd> medan du väljer eller bekräftar målet |
| Skapa en anteckning på en sökväg som inte finns | Skriv sökvägen, <kbd>Enter</kbd>, bekräfta frågan |
| Stiga ned en nivå medan du skriver | Skriv `/` |
| Gå upp en nivå medan du skriver | <kbd>Backspace</kbd> i det tomma fältet |
| Flytta eller byta namn på den öppna anteckningen | Klicka pennan, bläddra sedan eller skriv som ovan |
| Flytta utan att byta namn | Pennan → klicka in i målmappen → välj det fästa aktuella filnamnet |
| Byta namn på plats | <kbd>F2</kbd> två gånger (första trycket går till den infogade titeln, andra till rubriken) |
| Hoppa till ett annat valv, hemmappen eller en enhet | Klicka valvnamnet |
| Öppna en fil utanför valvet | Valvnamnet → välj en plats → bläddra → välj filen (skrivskyddad tills *Redigera som text*) |
| Avbryta vad som helst | <kbd>Esc</kbd>, eller klicka utanför rubrikraden |

## Inställningar

| Inställning | Alternativ | Standard | Vad den gör |
| --- | --- | --- | --- |
| **Justering** | Vänster / Centrerad / Höger | Vänster | Var sökvägen sitter i rubrikraden. *Centrerad* motsvarar Obsidians klassiska utseende. |
| **Avgränsare** | Vilket tecken som helst | `/` | Skiljetecknet som ritas mellan segmenten. Sex förval med ett klick (`/ > ▸ › \ •`) sitter framför textfältet. |
| **Visa valvets namn** | På / Av | På | Om valvet självt är sökvägens första segment. Avslaget blir det segmentet en 🏠-ikon snarare än försvinner, så sökvägen börjar fortfarande någonstans klickbart. |
| **Mappnamnet öppnar listan** | På / Av | På | Byter vad ett mappnamn och avgränsaren efter det gör — se [tabellen ovan](#sökvägen). Med [Folder notes](obsidian://show-plugin?id=folder-notes) öppnar avgränsaren mappanteckningar. Gäller aldrig i byt namn-/flyttläget. |
| **Visa dolda filer** | På / Av | Av | Om dolda filer och mappar listas i listorna. Överskrivningsskyddet gäller ändå. |
| **Åtkomst till externa filer** | På / Av | **Av** | Om valvnamnet öppnar listan med platser. Av tittar ingenting i tillägget någonsin förbi det här valvet. |

## Byta ut ikonerna

Lure ritar tre ikoner: valvrotens ikon (när **Visa valvets namn** är av), byt namn-/flyttväxlaren och hänglåset som styr skrivning utanför valvet. Alla går att byta ut från ett tema eller ett CSS-utdrag — sätt ersättningstecknet och dölj det medföljande i en enda regel:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* Hänglåset har två lägen; `.is-active` är det öppna. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}

.lure-unlock-btn.is-active {
	--lure-icon-glyph: "🔓";
}
```

`--lure-icon-glyph` tar emot allt som är giltigt i CSS `content`, så `url(...)` fungerar för en bild lika väl som för ett text- eller emojitecken. Låt `--lure-icon-svg` vara för att behålla Lucide-ikonen och rita ditt tecken bredvid den.
