<!-- Översättning av docs/usage.md — läge: commit 94b1372.
     Maskinöversatt (Claude Sonnet 5), inte granskad av modersmålstalare.
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

Där mappens anteckning är den du redan läser visar klicket i stället mappen — det finns inget att öppna som inte redan syns på skärmen, vilket är vad det andra klicket alltid har betytt.

Med [Folder notes](obsidian://show-plugin?id=folder-notes) installerat öppnar samma klick i stället den mappens anteckning, **på vilket djup som helst**: anteckningen slås upp här utifrån det tilläggets egen konvention i stället för att lämnas åt det att besvara. Det tillägget känner bara igen de mappar det har markerat, vilket på en sökväg mer än en mapp djup är ingen av dem, så klicket som öppnade en toppnivåmapps anteckning brukade inte göra något längre in. De andra två mappanteckningstilläggen publicerar ingen konvention att läsa och gör aldrig anspråk på raden, så med dem visar avgränsaren mappen som vanligt. Det är det enda mappanteckningstillägg som befunnits göra anspråk på rubrikens sökväg; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) och [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) hanterar mappanteckningar men lyssnar inte efter ett klick på sökvägen, så med dem visar avgränsaren mappen som vanligt. Se [kompatibilitet](../compatibility.md#verified-against).

En avgränsare är **understruken bara när mappen före den faktiskt har en mappanteckning**, så understrykningen är ett löfte om att något finns där att öppna — på vilket djup som helst med [Folder notes](obsidian://show-plugin?id=folder-notes) igång, eftersom anteckningen slås upp här i stället för att lämnas åt det tillägget att markera. Där det inte är det tillägget som körs är ingenting understruket och ingenting öppnas: avgränsaren visar, precis som utan något mappanteckningstillägg alls. Varje avgränsare förblir klickbar oavsett — en utan understrykning visar och fäller upp sin mapp i sidopanelen, vilket pekarmarkören fortfarande signalerar. Understrykningen flyttas samtidigt bort från mappnamnet: med bytet på öppnar namnet listan, så att märka det som länken till anteckningen vore en lögn.

**Byt namn-/flyttläget åsidosätter båda**, oavsett vad inställningen säger: ingenting på raden öppnar en mapp medan en flytt väntar, eftersom att öppna en skulle överge flytten. Mappnamn väljs för redigering och avgränsare stiger ned — båda är sätt att peka ut målet — och understrykningen försvinner för att visa att öppnandet är pausat.

**Valvets rot** är det enda segment som inte är ett sökvägssegment. Det har ingen förälder att lista syskon ur, så i stället öppnar det [listan med platser](#bläddra-utanför-valvet) — dina andra valv, hemmappen, filsystemets rot och monterade enheter.

## Valvets egen avgränsare

Avgränsaren direkt efter valvets namn står för själva valvet snarare än för
en mapp, så den gör något som ingen annan avgränsare kan:

| | Första klicket | Nästa klick |
| --- | --- | --- |
| **Med ett startsidetillägg** (en sida som möter dig när Obsidian öppnas) | Öppnar den sidan i den här rutan | Fäller ihop filträdet |
| **Utan ett sådant** | Fäller ihop filträdet | Återställer exakt det som var öppet |

Vanliga klick, inte ett dubbelklick: när sidan väl är öppen har avgränsaren
inget kvar att öppna, så nästa tryckning blir hopfällningen — hur lång tid du
än tar på dig.

Den är **understruken** när det finns en startsida att öppna, vilket är samma
löfte som en mapps avgränsare ger: något finns där. Hopfällning är en
växlingsfunktion — nästa tryckning återställer de mappar som var öppna, och
bara dem, så ett träd du hade ordnat inte går förlorat vid en blick på något
annat.

## En ruta utan fil

En tom flik, grafen och allt annat som inte namnger någon fil får en egen
rad: valvet, sedan ett segment som anger vad rutan innehåller.

```
my-vault / :blank      a new tab
my-vault / :graph      the graph, local or global
my-vault / :<type>     anything else with no file
```

**Valvrotens egen lista** erbjuder också dessa sidor, under de mappar och
anteckningar som faktiskt finns i den: välj `:graph` eller `:search` där och
rutan öppnar den vyn, precis som att välja en anteckning öppnar anteckningen.
Vilka sidor som finns läses från Obsidian snarare än skrivs ner här — varje
vy som inte existerar för att visa en fil, så ett tillägg som registrerar en
(en hemflik, en kalender) dyker upp utan att det här tillägget vet något om
det. Vyer som behöver en fil — Markdown, PDF, bilder, canvasar, baser —
erbjuds inte: det finns inget för dem att visa.

Kolonet är själva poängen — ingen fil eller mapp kan heta `:graph`, så raden
kan inte misstas för en sökväg som skulle kunna öppnas. Etiketten kommer från
vytypen snarare än från Obsidians egen formulering, så den läses likadant
oavsett vilket gränssnittsspråk som används, och ett avslutande `-view`
tas bort: ett hemflikstillägg registrerar sin vy som `home-launcher-view`,
och raden säger `:home-launcher`.

Att klicka på det tomma utrymmet, eller på etiketten själv, **öppnar fältet
vid valvroten**: skriv en sökväg och <kbd>Enter</kbd> öppnar den i just den
här rutan, med samma komplettering, samma lista och samma röda fält som
erbjuder sig att skapa det som ännu inte finns. En tom flik är ett bra
ställe att skriva vart du vill, vilket är vad den är till för.

Etiketten är en etikett och inget mer: ingen lista, ingen dragning, inget
namnbyte. Rutor i sidopanelerna lämnas helt orörda — en bakåtlänkspanel
behåller titeln Obsidian ger den.

Canvasar, PDF-filer, bilder och baser behöver inget av detta. De är filer,
så de får en vanlig sökvägsrad.

## Klicka på ett segment: byt ut det mot ett syskon

Ett klick på ett mappnamn väljer **den mappens namn** i ett textfält och öppnar en lista över mappen **ett steg upp** — dess förälder. Att skriva eller välja en rad byter ut den här mappen mot ett syskon och lämnar allt under den orört, så `Projekt/2026/Uppstart.md` → klicka `2026` → välj `2025` ger dig `Projekt/2025/Uppstart.md`.

Att klicka på **anteckningens namn** fungerar på samma sätt mot dess egen mapp, och väljer namnet **utan filändelsen** — namnbyte är den vanliga redigeringen, och att skriva rakt över en markering som inkluderade `.md` brukade av misstag ändra filtypen. Filändelsen förblir synlig ett tangenttryck bort: <kbd>→</kbd> når den, och dubbelklicket som vidgar till hela raden tar allt.

Klicket på mappen har redan valt ett segment, så **ytterligare ett klick** vidgar markeringen till hela raden — den mappen *och* allt under den — och det du skriver ersätter då resten av sökvägen på en gång. Fungerar likadant i navigerings- och byt namn-/flyttläget.

Det gäller bara som en fortsättning på klicket som öppnade fältet. När du väl har använt fältet beter det sig som vilket textfält som helst: klick placerar markören, dubbelklick tar ett ord, trippelklick tar raden.

Oavsett vilket förblir resten av sökvägen synlig runt fältet, som brickor före det och som omarkerad text efter det, så hela sökvägen aldrig försvinner från rubriken. Skriv för att ersätta markeringen, eller tryck <kbd>→</kbd> för att behålla den och redigera därifrån. Listan visar hela mappen oavsett vad som är förifyllt; den börjar filtrera först när du faktiskt skriver.

## Nedstigning med avgränsare

Ett klick på en avgränsare (med **Mappnamnet öppnar listan** av) stiger ned i mappen före den: listan visar *den* mappens innehåll, och resten av sökvägen öppnas markerad i fältet. Att välja en mapp lägger till den i sökvägen och öppnar genast nästa lista, så du kan klicka dig ned genom ett träd utan att lämna rubrikraden.

## Listan öppnas där du är

Listan öppnas på raden du befinner dig på — den anteckning den här raden
tillhör, eller, när ett klick på en mapp har listat dess förälder, den mappen
— snarare än på den första raden. I en mapp med tvåhundra anteckningar ligger
den första raden ingenstans i närheten av dig.

**Ett scrollhjul över ett namn öppnar dess lista och rör sig genom den.**
Det första varvet öppnar samma lista som ett klick på namnet öppnar, och
varje varv därefter flyttar markeringen en rad, och lägger det du pekar på
i fältet precis som piltangenterna gör — så ett syskon kan hittas och väljas
utan tangentbordet. Att scrolla förbi endera änden ger dig din text tillbaka.
En rad med mer sökväg än rutan svarar på scrollhjulet genom att scrolla i
sidled i stället, vilket är den tolkning som vinner medan den gäller.

Listan är **så hög som fönstret tillåter**. Obsidian begränsar sina
förslagslistor till 300 pixlar oavsett vad som ligger under dem; den här
sträcker sig till fönstrets nederkant, stannar några pixlar från kanten, och
scrollar först när mappen innehåller mer än så. Den är **inte bredare än
sökvägsraden**: ett namn som inte får plats förkortas på samma sätt som
raden förkortar ett, och visas i sin helhet när du pekar på det.

Att röra sig genom listan **lägger det du pekar på i fältet**, med
piltangent eller genom att hovra — i stället för segmentet du redigerade,
med resten av sökvägen kvarlämnad — så raden du befinner dig på är också
sökvägen du skulle få.

Resten av sökvägen visas **bara så långt som den finns under det du pekar
på**. Om du står i en mapp med `2026/anteckning.md` bakom segmentet du
redigerar, visar en pekning på en mapp som har en `2026` med en
`anteckning.md` i sig allt av det; en som har `2026` men ingen anteckning
visar `2026`; en som har varken eller visar ingenting alls efter namnet, och
det gör inte heller en fil, eftersom inget finns under en sådan. Det **du har
skrivit** behåller hela sin sökväg medan du skriver det, hur lite av det som
än finns ännu — ett halvskrivet namn är inget beslut. Att bestämma ett namn
är ett beslut, och det som inte kan nås därifrån klipps av vid den punkten;
mapparna du skapar är de du skriver *efter* det, vilket är där
<kbd>Enter</kbd> skapar dem.
Texten du hade skrivit behålls: att flytta **förbi endera änden av listan**
— upp förbi den första raden, eller ned förbi den sista — släpper den och
sätter tillbaka din text, med ingenting markerat. Fältet är ett stopp på
ringen precis som vilken rad som helst, så ett varv passerar genom det i
stället för att hoppa från sista raden till den första, och att fortsätta
trycka därifrån går runt till andra änden.

Att ta bort **pekaren från listan** sätter också tillbaka din text — och
lämnar tillbaka markeringen till det som hade den innan musen kom dit: raden
du hade pilat till, som visas i fältet igen, eller den som listan öppnades
på eftersom det är där du är. Att hovra är ett sätt att titta snarare än att
välja, så en svepning av pekaren över listan kostar dig ingenting.

Listan själv ändras inte medan du rör dig genom den — den fortsätter
filtrera efter det du skrivit, inte efter det som förhandsvisats i fältet —
så raden under dig flyttar sig aldrig undan för nästa tryckning. Att skriva
ersätter förhandsvisningen och filtrerar som vanligt.

**Det den filtrerar efter är segmentet du redigerar**, inte allt i fältet.
Att klicka på en mapp lämnar resten av sökvägen kvar där bakom namnet du
ändrar, så att filtrera efter hela den skulle leta efter ett barn som heter
`2026/Uppstart.md` och inte hitta något — listan skulle stänga vid ditt
första tangenttryck oavsett vad du skrev. **Filändelsen lämnas också
utanför**, så länge markören står framför punkten: att klicka på en
antecknings namn väljer stammen och lämnar `.md` kvar efter den, så att
skriva en bokstav gör att fältet läser `a.md`, och det är inte vad du letar
efter. Flytta markören förbi punkten och filändelsen räknas som vad som
helst annat. Ett namn som verkligen inte matchar något stänger listan ändå,
eftersom en tom lista är det ärliga svaret.

En förhandsvisning **byter bara ut det segmentet och lämnar resten av
sökvägen orörd**: att peka på en mapp frågar vad-om det här steget vore det
där, inte kasta bort sökvägen. Att flytta bort pekaren från listan
återställer texten *och* markeringen du hade, så nästa tangenttryck ersätter
det det skulle ha ersatt innan du tittade.

## Listans rader är riktiga filhanterarrader

Varje fil och mapp i listan beter sig som sin rad i Filutforskaren:

- **Högerklicka** för samma kontextmeny som Filutforskaren ger, rad för rad — inklusive de som andra tillägg lägger till. En mapp erbjuder *Ny anteckning*, *Ny mapp*, *Ny canvas*, *Ny bas*, *Skapa en kopia*, *Flytta mapp till…*, *Sök i mapp*, *Kopiera sökväg*, *Visa i systemets filhanterare*, *Byt namn…* och *Radera*; en fil erbjuder sin egen motsvarighet, inklusive *Öppna i standardprogram*.
- **Dra** en rad vart som helst Obsidian tar emot en fil: in i en redigerare för att infoga en länk, på en mapp i Filutforskaren för att flytta den, till flikraden för att öppna den.

Menytexterna kommer från Obsidians egna översättningar, så de stämmer med resten av programmet på alla språk.

## Skriva en sökväg

- Att klicka på det **tomma utrymmet** före eller efter sökvägen öppnar ett textfält för hela sökvägen *och visar anteckningen i filhanteraren*, så att trädet följer panelen utan en andra gest. Det **räknar dina klick**: ett väljer sökvägen utan filändelsen, två väljer den med, tre väljer sökvägen som maskinen känner till. Att klicka på **filens namn** räknas på samma sätt men börjar ett steg lägre, på själva namnet: ett väljer det utan filändelsen, två med, och tre breddas till hela sökvägen *från din valvmapp* — den form en länk eller en sökning vill ha, snarare än maskinens. Ett fjärde klick når den.
- **Räkningen tillhör den räcka som öppnade fältet.** När den har runnit ut — du pausade, skrev, eller klickade en gång någonstans i texten — är fältet ett vanligt textfält som vilket annat, och ett dubbelklick i det väljer ordet under pekaren precis som någon annanstans. Skriv över det som är markerat, eller redigera på plats. (Att klicka på själva filnamnet väljer bara filnamnet; se ovan.) Att högerklicka på samma utrymme **kopierar** samma tre, vid två, tre och fyra klick — den ena knappen visar dem, den andra tar dem. Ett **enstaka** högerklick öppnar sökvägen med allt markerat och erbjuder vad som kan göras med den: klipp ut, kopiera, klistra in, markera allt, med Obsidians egna ord.
- **Mittklicka på det tomma utrymmet** för att klistra över sökvägen: fältet öppnas på hela sökvägen *från valvets rot*, så att urklippet ersätter den helt, och det som hamnar där är markerat. <kbd>Enter</kbd> går sedan dit.
- **<kbd>Ctrl</kbd>+klick på det tomma utrymmet** för att öppna denna anteckning igen i en egen flik, blinkad i filhanteraren så att den andra fliken inte förväxlas med den första. På **valvets namn** öppnar <kbd>Ctrl</kbd>+klick eller mittklick en flik som inte håller något, stående vid valvets rot med listan redan synlig — en plats att skriva en sökväg från grunden.
- Att skriva medan en sökväg visas omvandlar det sista segmentet till ett litet fält med autokomplettering i realtid begränsad till aktuell mapp.
- **En sökväg från filsystemets rot kan skrivas.** `/` framför ett tomt fält öppnar en sådan i stället för att komplettera ett steg, varje snedstreck efter det tillhör den, och `~` är din hemmapp. Medan fältet håller en sådan sökväg listar listan maskinen snarare än valvet, och radens inledande segment kliver åt sidan — det som står i fältet börjar vid roten och säger det. Med *Åtkomst till externa filer* avstängd står listan tom i stället, eftersom <kbd>Enter</kbd> ändå skulle vägra sökvägen.
- **En sida kan skrivas, inte bara väljas.** `:graph`, `:search`, eller vad dina tillägg registrerar — etiketterna som [valvrotens lista](#en-ruta-utan-fil) erbjuder. Att skriva ett kolon var som helst kallar fram dem, eftersom inget namn får innehålla ett, och <kbd>Enter</kbd> öppnar den vyn i denna panel. `:graph` skrivet **inuti en mapp** öppnar den mappens graf — grafen filtrerad till `path:"that/folder"` i sin egen sökruta, som om det skrivits där; vid valvets rot är det hela grafen. <kbd>Tab</kbd> färdigställer namnet som det gör för en mapp — och tar med sig vad annat fältet höll, eftersom en sida inte ligger i någon mapp och inget finns under en sådan. Att klicka på etiketten på en sådan panel öppnar fältet redan hållande den.
- **Det <kbd>Tab</kbd> skulle skriva erbjuds medan du skriver.** Där varje undermapp/fil som börjar med det du skrivit fortsätter hålla med ett tag, visas den samstämmigheten efter markören, markerad; där de slutar hålla med, gör steget mot den första av dem det — eller mot raden du pilat till, eftersom det är den <kbd>Tab</kbd> skulle gå mot. Att skriva över ett namn lämnar dess filändelse stående och erbjuder framför den, och en mapp man just klivit in i erbjuder sitt första steg, så det finns inget tillstånd där inget erbjuds och <kbd>Tab</kbd> ändå skriver något. Skriv dessa bokstäver och det sväljs en i taget; skriv något annat och det är borta. <kbd>Tab</kbd> eller <kbd>End</kbd> tar det i sin helhet, <kbd>→</kbd> tar en bokstav av det, <kbd>Backspace</kbd> tar tillbaka det utan att röra en bokstav du skrivit, och inget erbjuds igen förrän du skriver — så det finns alltid en väg ut ur ett namn du inte ville ha. Efter ett tryck på <kbd>Tab</kbd> erbjuds nästa steg direkt, precis som efter en skriven bokstav. Det listan visar filtreras av vad **du** skrivit, aldrig av vad som erbjöds.
- **Erbjudanden ignorerar skiftläge.** `sch` erbjuder `Schemes`, stavat som namnet är; att ta tillbaka erbjudandet ger dig dina bokstäver tillbaka som du skrev dem. Där både `Test` och `test` finns, erbjuds den som är stavad som du skrev.
- I fältet är den erbjudna delen helt enkelt **markerad**. Listan är där den stavas ut: varje rad visar den del av namnet som **matchade det du skrev i fetstil**, var i namnet det än matchade — `kick` hittar `Weekly kickoff` och visar det. **Namn som börjar med det du skrivit kommer först**, före de som bara innehåller det, och märks med en linje längs kanten: **blå** där de delar mer än du skrivit, så att <kbd>Tab</kbd> har något att lägga till för alla, och **grön** på den gren erbjudandet tar där de skiljer sig — `te` med `test1`, `test2`, `text1` och `text2` erbjuder `te`+`st`, så de två `test`-raderna är gröna och de två `text`-raderna behåller den vanliga linjen. Var och en av dem **understryker steget <kbd>Tab</kbd> skulle ta mot den**, inte bara den som erbjuds, och understrykningen följer erbjudandet när det ändras.
- **Att skriva släpper den markerade raden.** Listan öppnas på posten du står på, men i samma stund du skriver handlar det om någon annanstans, och en markering ingen satt dit läses som ett val redan gjort.
- Erbjudandet är alltid bara text framför dig: bokstäverna du skrivit förblir stavade som du skrev dem medan du skriver, och att ta erbjudandet skriver om namnet som mappen stavar det, eftersom en sökväg måste matcha disken. `sk` + <kbd>Tab</kbd> når `Skyline`, inte `skyline`.
- **Fältet bär färgen på det det namnger**, samma färg som dess rad i listan: lila för en anteckning, en mapps egen anteckning inräknad, orange för allt som inte är en anteckning, blått för anteckningen du befinner dig på. Raden fältet tar sin färg från är den som heter exakt det du skrivit, eller i annat fall den markerade, eller i annat fall den första din text fortfarande leder till.
- **Fältet blir rött så snart inget svarar mot det som står i det** — ingen fil, ingen mapp, och ingen rad i listan som fortfarande leder dit. Därifrån skapar <kbd>Enter</kbd> det som står i fältet i stället för att öppna det, och det röda säger det innan du bekräftar. Det visas aldrig för en webbadress, som inte är en plats på denna maskin att leta efter. **Hela** fältet färgas snarare än bara den del som saknas: ett textfält kan inte färga halva sitt eget innehåll. I byt namn-/flyttläge behåller fältet sitt eget röda för ett namn som är otillåtet — där är poängen just att inget svarar mot namnet. Att ett namn **redan är upptaget** tas upp när du bekräftar det, med en dialog som frågar vad som ska hända med filen i vägen — se [Ett namn som är upptaget](#ett-namn-som-är-upptaget): varje namn skrivet mot `Notes.md` passerar genom namn som kan vara egna filer, så att flagga det bokstav för bokstav varnade för ett namn ingen ännu hade frågat efter.
- `/` bekräftar segmentet du skriver och stiger ner i det, och behåller vad som ligger bakom det — samma sak <kbd>Tab</kbd> gör när det kliver in.
- <kbd>Backspace</kbd> i ett tomt fält kliver tillbaka ut till föräldramappen, öppnar dess namn igen med markören i slutet. Det gör även <kbd>Backspace</kbd> framför en filändelse lämnad för sig själv — ett fält som bara innehåller `.md` namnger inget — och den ensamma filändelsen följer med.
- **Att klicka på en mapp medan ett fält är öppet breddar det till hela sökvägen efter den mappen**, med mappens eget namn markerat — samma sak som att klicka på den från raden skulle ha gjort, och allt fältet höll bevaras. Det som står i fältet är radens svans medan det är öppet, så en mapp klickad längre upp lämnar tillbaka sökvägen sessionen har vandrat snarare än den anteckningen började vid.
- **Att pila av framkanten på fältet tar in mappen framför det**, som om hela sökvägen vore en rad text. Med markören längst fram tar <kbd>←</kbd> in den mappen i fältet och landar i slutet av dess namn, <kbd>Ctrl</kbd>+<kbd>←</kbd> landar i början av det, och <kbd>Home</kbd> tar in varje mapp upp till valvets rot — eller upp till platsen du valt, utanför valvet — på en gång. Håll <kbd>Shift</kbd> och markeringen sträcker sig över det som togs in. På macOS är ordhoppet <kbd>Option</kbd>+<kbd>←</kbd> och <kbd>Cmd</kbd>+<kbd>←</kbd> är <kbd>Home</kbd>. Någon annanstans än framkanten är dessa vanliga textknappar. **Medan listan visas tillhör <kbd>Home</kbd>, <kbd>End</kbd>, <kbd>PgUp</kbd> och <kbd>PgDn</kbd> den** — första raden, sista raden, en sida upp, en sida ner, en sida är det listan visar, med den markerade raden kvar på sin plats på skärmen — och når texten först när den har stängts; <kbd>Shift</kbd>+<kbd>Home</kbd> tar in varje mapp med listan öppen också.
- **Listan följer markören.** Välj ut en annan del av sökvägen — dra över den, klicka in i den, eller pila längs den — och listan visar *den* mappens innehåll, inte den fältet öppnades på. Mappen räknas från chipparna plus det av fältet som ligger framför markören, så att klicka in i `Notes.md` i ett fält som håller `2026/Notes.md` listar vad som finns i `2026`. Att peka på en rad skriver in den i segmentet markören står i, och att ta bort pekaren från listan ger dig din text och din markering tillbaka, exakt som de var.
- **Att dra ut en markering ur fältet** och släppa någon annanstans stänger inte det. Ett klick som börjar i fältet tillhör redigeringen hur långt det än rör sig; bara ett klick som *börjar* utanför är ett klick bort.
- <kbd>Enter</kbd> bekräftar — och när fältet inte namnger något alls, som i en tom mapp där det aldrig fanns något att komplettera, säger det *No file selected* och förblir öppet i stället för att stänga som om något hade valts. <kbd>Esc</kbd> eller ett klick någon annanstans avbryter tillbaka till filens verkliga sökväg. Ett tryck på <kbd>Esc</kbd> räcker: det stänger listan, lämnar fältet och ger fokus tillbaka till anteckningen, snarare än att kräva ett tryck per lager.

Fältet är helt avskalat — ingen ruta, ingen kant — så att det läses som själva sökvägstexten, och det växer av sig självt medan du skriver.

## Varje del av raden, knapp för knapp

Hela raden i ett svep. Kolumnen för högerklick visar vad **ett** tryck ger
dig; samma knapp räknar också antalet tryck, och [dess egen
tabell](#högerklick-ett-tryck-två-tryck-tre) nedan har det andra, tredje och
fjärde. Den här förutsätter att **Mappnamnet öppnar listan** är på, vilket är
standard — med den av byter mappnamnet och avgränsaren plats i första kolumnen,
som [tabellen högst upp](#sökvägen) säger.

| Var du trycker | Klick | Dubbelklick | <kbd>Ctrl</kbd>+klick, eller mittenklick | Högerklick | Släpp något på den |
| --- | --- | --- | --- | --- | --- |
| **Valvets namn** | Öppnar listan över platser — andra valv, hemmapp, filsystemets rot, monterade enheter. Av som standard; med den av visas valvet i Filutforskaren i stället | Markerar **hela den absoluta sökvägen**. Den listan öppnas med sökvägen redan i fältet och bara valvets egen del markerad; ett andra tryck breddar markeringen över resten. Inget att bredda med listan av | En flik utan innehåll, stående i valvets rot med listan redan synlig — någonstans att skriva en sökväg från grunden | Valvets egen snabbmeny: vad som kan göras med valvet som segmentet namnger | En **fil** flyttas till valvets rot. **Text** öppnar fältet vid roten, för att namnge anteckningen den ska bli |
| Ett **mappnamn** | Väljer den mappen för redigering, dess förälders innehåll listat nedanför | Skriver om den mappen och allt under den | Öppnar den mappen i en ny flik | Den mappens snabbmeny — Filutforskarens egen | En **fil** flyttas in i den mappen. **Text** öppnar fältet där, för att namnge anteckningen den ska bli |
| En **avgränsare** | Öppnar mappen framför den — dess mappanteckning där ett mappanteckningstillägg körs och en sådan finns, annars visas och expanderas den i Filutforskaren | **Skapar den mappens anteckning** och går till den, där ett mappanteckningstillägg körs och mappen ännu inte har någon. Har den redan en är detta bara samma enkla tryck igen | Mappanteckningen i en ny flik där en sådan finns; annars en flik stående vid den mappen med listan synlig | Samma snabbmeny som namnet ger — dess mappantecknings, där den har en | Till slutet av den mappens anteckning, där den har en, efter att du bekräftar |
| **Anteckningens namn** | Öppnar namnet för redigering — mapparna ligger kvar som chips bredvid — med allt utom filändelsen markerat | Tar med filändelsen i markeringen också | Öppnar anteckningen i en ny flik | Filens snabbmeny — samma som Filutforskarens rad ger | Till slutet av den här anteckningen, efter att du bekräftar |
| **Det tomma utrymmet** | Öppnar **hela sökvägen** för redigering, markerad fram till filändelsen. Mapparna kommer med in i fältet, vilket är det som gör detta till gesten för att skriva om en sökväg snarare än ett namn | Tar med filändelsen i markeringen också | <kbd>Ctrl</kbd> öppnar den här anteckningen igen i en egen flik, blinkande i Filutforskaren så att kopian inte förväxlas med den första. Mittenklick är *inte* den gesten: det klistrar in över sökvägen | Markerar hela sökvägen och erbjuder vad som kan göras med markerad text | |

**Det andra trycket följer det första.** Att skapa en mapps anteckning ligger på
vilken del av raden som helst som *öppnar* den mappen, vilket är avgränsaren som
standard och mappnamnet med bytet av — samma mål som understrykningen
markerar, och samma som ett enda tryck redan ber om mappanteckningen. Det
erbjuds bara medan ett mappanteckningstillägg körs, eftersom en mappanteckning är
en konvention snarare än ett faktum om filsystemet, och bara där mappen
ännu inte har någon. Var den finns och vad den heter läses från **Folder
notes**' egna inställningar, så ett valv som håller sina mappanteckningar bredvid
mappen, eller kallar dem `_index`, får en sådan; själva filen är alltid Markdown,
vilket är vad det tilläggets eget standardkommando för att skapa gör och vad det
hittar oavsett vilken typ valvet är inställt på. Byt namn-/flyttläge är helt
utanför detta — inget på raden öppnar en mapp medan en flytt väntar.

**Klick på namnet fortsätter.** De fyra stegen är samma fyra som namnbytestangenten
går igenom, i samma ordning: namnet, namnet med sin filändelse, sökvägen
från valvet, sökvägen från systemets rot. Så ett tredje klick når
valvets sökväg och ett fjärde maskinens — samma fyra saker
<kbd>Tab</kbd> förbi fältets slut ger dig, och samma fyra som högerknappen
*kopierar* i stället för att markera.

**Att hovra** är sitt eget svar och ändrar aldrig något: ett förkortat namn
visas i sin helhet så länge du pekar på det, och ikonen i början av
raden visar var valvet finns.

## Högerklick: ett tryck, två tryck, tre

Varje mål på raden svarar på ett högerklick, och hur många tryck du ger det avgör vad du får. Eftersom ett andra tryck fortfarande kan komma väntar det första i ungefär en tredjedels sekund innan det agerar — priset för att lägga tre gester på en knapp.

| Var du trycker | En gång | Två gånger | Tre gånger |
| --- | --- | --- | --- |
| **Valvets namn** | Valvets snabbmeny: vad som kan göras med valvet som segmentet namnger — inklusive *Öppna det här valvet*, där det valvet inte är det du befinner dig i | Kopierar valvets namn | Kopierar var valvet finns — och ett fjärde tryck, var den öppna filen finns |
| En **avgränsare** | Den mappens meny — dess mappantecknings, där ett mappanteckningstillägg körs och mappen har en | | |
| Ett **mappnamn** | Den mappens meny | Kopierar mappens namn | Kopierar den och allt till höger om den |
| **Anteckningens namn** | Filens meny — samma som Filutforskarens rad ger | Kopierar namnet | Kopierar det med filändelse |
| **Det tomma utrymmet** | | Kopierar sökvägen från din valvmapp, utan filändelse | Detsamma, med den |

Ett enda tryck på **valvets namn** öppnar vad som kan göras med det segmentet
namnger. För **valvet du befinner dig i**: öppna det i ett nytt fönster,
hantera valv, kopiera var det finns, kopiera dess ID, visa det i din filhanterare.
För **ett annat valv**, nått via listan över platser, samma minus
det nya fönstret — vilket skulle öppna *det här* valvet, inte det andra — plus den
enda sak bara ett valv du inte befinner dig i kan erbjuda: **Öppna det här valvet**.
Det namnges för Obsidian med sitt ID snarare än sitt mappnamn, eftersom två valv kan
dela ett sådant. För någonstans som inte alls är ett valv — din hemmapp, en
monterad enhet — finns inget ID att kopiera och inget att öppna, och menyn säger
det genom att inte erbjuda dem.

Detta är inte Obsidians egen trepunktsmeny, som tillhör startfönstret
och inte kan öppnas inifrån ett körande valv — dessa är samma poster
återskapade, i Obsidians egen ordalydelse, hämtade från dess kommandon så att de
kommer på ditt språk. Tre av den menyns poster är medvetet **inte** med här:
*byt namn på valv*, *flytta valv* och *ta bort från listan* agerar alla på valvets
egen mapp eller på Obsidians register över valv, och att göra det med valvet du
befinner dig i — med dess filer öppna och dess bevakare igång — är hur ett valv
förstörs. Öppna valvhanteraren (*Öppna ett annat valv*) och gör det där, där
valvet är stängt.

De två kopiorna på **det tomma utrymmet** är raden som den är skriven — vad en länk
eller en sökning vill ha — och de på **valvets namn** är de sökvägar
filsystemet känner till, vilket är vad allt utanför Obsidian vill ha. Varje tryck
där breddar vad kopian duger till: två ger valvets namn, tre var
valvet finns, fyra var den öppna filen finns. Obsidian gör samma
åtskillnad i sina två egna kommandon, *from vault folder* och *from system root*;
här sitter de utåtriktade på segmentet som självt ligger utanför sökvägen.

Allt detta fungerar även utanför valvet, på samma mål.

Varje kopiering meddelar det i en avisering, eftersom en kopiering inte lämnar något
kvar på skärmen som visar att det hänt, och ett feltryckt räknat tryck inte ska se ut
som ett lyckat.

## Modifierare: öppna det någon annanstans

Anteckningens namn och mappsegmenten beter sig som sina rader i Filutforskaren.

| | På anteckningens namn | På ett mappsegment |
| --- | --- | --- |
| Vanligt klick | Redigera namnet | Bläddra i den mappen |
| <kbd>Ctrl</kbd> / mittenklick | Öppna anteckningen i en ny flik | Skicka mappen till en ny flik |
| <kbd>Ctrl</kbd>+<kbd>Alt</kbd> | En delning | En delning |
| Dra | Anteckningen, vart som helst Obsidian tar en fil | Mappen, likaså — inklusive flikfältet |

En mapp är inte något Obsidian kan öppna, så att skicka en till en flik gör en av
två saker: öppnar dess mappanteckning, där ett mappanteckningstillägg körs och en
sådan finns, eller öppnar en tom flik vars sökvägsfält redan står i den mappen —
och lämnar bara namnet kvar att skriva. Att släppa ett mappsegment på **flikfältet**
gör detsamma, i en ny flik där du släpper — Obsidians eget flikfält tar bara emot
filer på egen hand, så en mapp dragen ut ur Filutforskaren avvisas fortfarande där.

## Tab: fyll i namnet, sedan sökvägen, sedan bredda urvalet

<kbd>Tab</kbd> fyller i på samma sätt som ett skal gör: **ett tryck utökar det du skrivit så långt som namnen i den mappen är överens, och stannar där de skiljer sig.** Skriv `Sk` där bara `Sketches` börjar så, och ordet är klart; skriv `Al` där `Alpha-one`, `Alpha-two` och `Alpine` alla gör det, och du får `Alp`, eftersom nästa tecken är en fråga bara du kan besvara.

Tryck igen utan att skriva och det går mot ett enda namn — raden listan har markerat, eller den första — och stannar vid det namnets nästa tvetydighet: `Alpha-`, sedan `Alpha-one`. Listan öppnas där du redan befinner dig, så i din egen mapp går första trycket mot anteckningen du har öppen snarare än mot vad som än sorteras först.

**Ett tryck väljer aldrig mellan namn åt dig.** <kbd>Tab</kbd> går in i en mapp så snart det du skrivit lämnar en enda kandidat, eller så snart du skrivit mappens hela namn och ingen *annan mapp* utökar det. Där en gör det — `Schemes` bredvid `Schemes2026` — fortsätter <kbd>Tab</kbd> att fylla i mot det längre namnet; <kbd>Enter</kbd> och listan är gesterna som betyder *den här*.

En **fil** håller aldrig upp en mapp på det sättet. En mapp bredvid en anteckning med samma namn är en mappanteckning, inte en gaffel i sökvägen, och <kbd>Tab</kbd> går in i mappar — så `Projects` med en `Projects.md` bredvid går det in i som vilken annan som helst.

Två mindre saker följer av detta: det som hamnar i fältet stavas som mappen stavar det, så `sk` blir `Sketches`; och bara namnet som skrivs byts ut, så en sökväg med mer till höger om det behåller det.

Med ett namn erbjudet medan du skriver **skriver <kbd>Tab</kbd> exakt förslaget**: förslaget är alltid det trycket skulle skriva, och listans understrykning och gröna linje säger samma sak, så det du ser efter markören är det du får. Där namnen slutar vara överens är det steget mot det första av dem — eller mot raden du pilat till, som <kbd>Tab</kbd> tar i stället för den bredvid — så pila till den du vill ha, eller skriv förbi gaffeln, innan du trycker. Bara där förslaget lämnar *ett* namn går samma tryck in i det.

Att nå filens namn **är** den första pinnen — inget tryck går åt till att parkera markören i slutet av ett namn det strax ska markera. Därifrån slutar trycken flytta sig längs sökvägen och börjar bredda vad som är markerat:

1. namnet
2. namnet med sin filändelse
3. sökvägen från din valvmapp
4. sökvägen från systemroten
5. tillbaka till sökvägens början **som den nu ser ut** — stående där gången började, första segmentet markerat, redo att gås igenom igen

Ett fjärde klick når samma fjärde pinne direkt.

Breddning gör bara någonsin en sak — **breddar**. Ett namn som redan är helt i fältet — kompletterat med samma tangent, eller valt ur listan — markeras i sin helhet i stället för att först få sin filändelse tagen bort igen: den första pinnen är för ett namn gången just *anlänt* till, där filändelsen ännu inte är föremålet.

Stegen är dit gången **anländer**, inte där den börjar. Klicka på en mapp mitt i en sökväg och fältet öppnas på allt under den med den mappens namn markerat; varje <kbd>Tab</kbd> tar sedan **en** mapp — markerar nästa, behåller resten av sökvägen bakom sig — och först när inget annat än filnamnet återstår börjar breddningen:

| tryck | brödsmulor | fält | markerat |
| --- | --- | --- | --- |
| klickade `a` | | `a/b/c/leaf.md` | `a` |
| <kbd>Tab</kbd> | `a` | `b/c/leaf.md` | `b` |
| <kbd>Tab</kbd> | `a › b` | `c/leaf.md` | `c` |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf` — den första pinnen |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf.md` |

**Ett namn som är fastställt är fastställt, oavsett hur du fastställde det.** Att fylla i det med <kbd>Tab</kbd>, bekräfta det med `/` och att välja det ur listan lämnar alla raden på samma plats med samma sökväg, så trycket efter gesten betyder samma sak oavsett hur du kom dit. Att välja en mapp ur listan brukade i stället tömma fältet, och kastade bort en sökväg som att nå samma mapp med <kbd>Tab</kbd> skulle ha behållit.

**En sökväg du fortfarande skriver följer med i sin helhet.** Att gå in i just den mapp resten av sökvägen hänger från är inte ett påstående om att resten finns — det är hur en sökväg skrivs i förväg, och mapparna den namnger är de som <kbd>Enter</kbd> strax ska skapa. Så att gå ner genom `Dokumente/plans/untitled.md` in i `Dokumente` behåller `plans/untitled.md` framför dig, oavsett om `plans` finns än eller inte. Detsamma gäller en sökväg du skrev från ingenting: inget av den ärvdes från någonstans, så inget av den tas bort.

**Att byta ut ett steg mot ett annat är en annan historia, och då följer sökvägen bara med så långt den verkligen finns.** Byt ut en mapp mitt i en sökväg mot ett syskon — klicka `a`, skriv ett annat namn, tryck <kbd>Tab</kbd> — och allt under den följer med, för sökvägen du var på är oftast större delen av sökvägen du vill ha. Bara det som finns där borta överlever bytet, dock, så fältet och listan bredvid det är aldrig oense: det som finns kvar framför dig är en sökväg du verkligen kan gå. Med start från `a/b/c/leaf.md`, med `a` klickad och dess namn markerat:

| vad du fastställde | brödsmulor | fält | markerat |
| --- | --- | --- | --- |
| `x`, som inte har någon `b` alls | `x` | | inget följde med |
| `y`, som har en `b` men ingen `c` i den | `y` | `b` | `b` |
| `z`, en tvilling till `a` hela vägen ner | `z` | `b/c/leaf.md` | `b` |

En mapp som blir lämnad ensam på det sättet är fortfarande en mapp att gå in i: trycket efter den går in, i stället för att börja bredda ett urval över dess namn.

Ett namn **inget** i mappen matchar besvaras annorlunda, eftersom inget har fastställts av det: trycket markerar det du skrivit, redo för dig att skriva över det, i stället för att svara med någon annanstans.

Det hela är en **loop, och det kostar inget att gå runt den**: trycket efter den sista pinnen ger tillbaka raden till sökvägens början, mappar och allt, redo att gå runt igen. Det enda som någonsin lämnar raden är det absoluta prefixet, vid trycket som slutar visa det.

Det som kommer tillbaka är **sökvägen du byggt**, inte den du gav dig ut från. Förgrena gången halvvägs — välj ett annat syskon ur listan, fyll i mot ett annat namn — och varvet sluts där du faktiskt befinner dig; de fyra pinnarna före den beskriver samma sökväg, och den här brukade vara den udda pinnen som beskrev det förflutna.

<kbd>Shift</kbd>+<kbd>Tab</kbd> sluter samma ring åt andra hållet: vid sökvägens början, med inget kvar att ge tillbaka och ingenstans längre upp, loopar nästa tryck till den **bortre** pinnen — sökvägen från systemroten — och fortsätter smalna av därifrån. Ingen riktning tar slut.

Den slösar inget tryck på en pinne den redan visat, heller. Under den sista pinnen — namnet utan sin filändelse — är stegen slut, och *samma tryck* lämnar mappen: sökvägen från systemroten, sökvägen från ditt valv, namnet, namnet utan sin filändelse, sedan mappen, ett steg vardera.

Inget tryck går åt till en pinne som inte ändrar något, heller: att klicka på en antecknings namn visar redan det utan sin filändelse, vilket är vad den första pinnen visar, så därifrån börjar <kbd>Tab</kbd> på den andra.

Varje pinne ändrar vad som *är* i fältet, inte bara vad som är markerat — ett urval måste vara över texten det namnger, annars skulle <kbd>Enter</kbd> bekräfta något annat än det du kan se är markerat. Stegen tillhör en enda redigeringssession: klicka bort, eller skriv vad som helst, och nästa <kbd>Tab</kbd> fyller i ett namn igen.

### <kbd>Shift</kbd>+<kbd>Tab</kbd>: samma väg baklänges

<kbd>Shift</kbd>+<kbd>Tab</kbd> tar tillbaka ett steg per tryck, i den ordning trycken gjordes: urvalet smalnar av en pinne i taget, varje ifyllning ges tillbaka, och varje mapp gås ut ur — dess namn återvänder till fältet så du kan redigera det i stället för att skriva om det.

**Inget raderas på vägen tillbaka.** En ifyllning ges tillbaka genom att *markera* tecknen den lade till, precis som att gå framåt markerar det den breddat över — namnet stannar framför dig, och varje ytterligare tryck markerar ett steg till av det:

| | fält | markerat |
| --- | --- | --- |
| gick in | `Alpha-one` | |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `ha-one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `Alpha-one` |

Att skriva ersätter den markerade delen, precis som överallt annars. <kbd>Tab</kbd> sätter tillbaka exakt det markeringen gav tillbaka, så att gå två steg ut och två steg in igen för dig tillbaka dit du var.

När hela namnet är markerat finns inget kvar som ett tryck lagt dit, och nästa tryck går *uppåt sökvägen*: det lämnar mappen du står i, precis som <kbd>Backspace</kbd> på ett tomt fält gör. Det kostar inget heller — mappens namn kommer tillbaka in i fältet **framför** vad som än fanns i det, markerat, vilket är samma text att klicka den mappen skulle ha gett dig. Tillbaka är en riktning snarare än en ångra-historik — men att markera namnet först betyder att ett tryck aldrig både tar tillbaka det du skrev och tar dig ut ur mappen du skrev det i.

Text som öppnas **redan markerad** — det ett mappklick lämnar efter sig — är namnet <kbd>Tab</kbd> jobbar på härnäst: det fylls i och gås in i som vad som helst annat, och att skriva ersätter det. Bara fokuskommandot öppnas på en pinne i själva stegen, eftersom det visar dig hela sökvägen snarare än en mapp att gå in i.

## Skriva något som inte är en sökväg

| Vad du skriver | Vad som händer |
| --- | --- |
| `https://…` | Öppnas i en ny flik i Obsidians **webbvisare**, om du har det kärnpluginet påslaget; annars din vanliga webbläsare |
| `obsidian://…` | Skickas till Obsidians egen URI-hanterare |
| `file:///…` | Avkodas och öppnas: som en riktig anteckning om den är inuti ditt valv, i visaren om inte |
| `/home/du/a%20b.md` | Detsamma, för en sökväg klistrad in från en webbläsare eller filhanterare |

Bara uttryckliga scheman räknas — en anteckning som heter `100%20` är fortfarande en anteckning. Ett `/` som tillhör ett schema förblir bokstavligt i stället för att stiga ner i en mapp, så en URL kan skrivas för hand och inte bara klistras in.

## Ett kommando för tangentbordet

**Fokusera sökvägsfältet** öppnar fältet på anteckningens namn och går igenom det på samma sätt som <kbd>F2</kbd> gör — namnet, namnet med sin filändelse, sökvägen från ditt valv, sökvägen från systemroten — och trycket efter det stänger fältet och sätter markören tillbaka i anteckningen. Det byter inte namn: Enter navigerar, som i vilket annat fält som helst. Det har ingen egen tangent från början, eftersom Obsidians riktlinjer avråder plugin-program från att ta en; raden **Snabbtangenter** i slutet av det här pluginets inställningar öppnar *Inställningar → Snabbtangenter* och visar bara dess kommandon, så du kan binda det där.

## Navigering rör aldrig den öppna filen

I standardläget (navigering) byts den öppna anteckningen **aldrig** namn på och flyttas aldrig.

- En sökväg som pekar mot en befintlig fil öppnar den.
- En sökväg som inte finns än skapas helt enkelt, tillsammans med eventuella saknade föräldramappar, och öppnas. Varje fil och mapp som skapas på det sättet säger så i en avisering — en ny mapp är annars osynlig tills du letar efter den — och Obsidians egen papperskorg gör en oönskad till ett tangenttryck att ångra.
- **Utanför valvet frågar den fortfarande först.** Där ute skriver samma stavfel in i en systemmapp, där varken aviseringen eller Obsidians papperskorg är till mycket tröst.

## <kbd>Ctrl</kbd> — ny flik, och kopiera i stället för att flytta

En anteckning som **skapas, flyttas eller kopieras inuti valvet visas där den hamnade** i Filutforskaren, markerad en stund i Obsidians accentfärg — trädet är där du letar efter den efteråt, så den sätts framför dig i stället för att lämnas i en mapp som kanske inte ens är öppen. Att duplicera säger också så: en kopia lämnar originalet där det var och öppnar kopian i sin egen ruta, vilket utan ett ord är lätt att läsa som att inget hänt.

Att hålla <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> på macOS) medan du väljer en fil ur listan, eller medan du trycker <kbd>Enter</kbd> på en sökväg, skickar resultatet till en **ny flik** i stället för till den här:

| | Utan tangent | Med <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Välj eller skriv en befintlig fil | Öppnas här | Öppnas i en ny flik |
| Skriv en sökväg som inte finns | Frågar, öppnar sedan här | Frågar, öppnar sedan i en ny flik |
| Bekräfta en sökväg i byt namn-/flyttläget | **Flyttar** anteckningen dit | **Kopierar** den dit och öppnar kopian i en ny flik |

Tangenten läses med Obsidians egen regel, så den beter sig exakt som på en länk eller en rad i Filutforskaren — mittklick betyder också "ny flik", <kbd>Ctrl</kbd>+<kbd>Alt</kbd> betyder en delning och <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> ett nytt fönster.

Att kopiera vägrar skriva över, precis som att flytta gör — inklusive till anteckningens egen sökväg, där det inte finns något förnuftigt att kopiera. Utanför valvet sägs den vägran också högt.

Allt detta fungerar **med listan uppe** lika väl som utan den: på en markerad rad gäller tangenten den raden, och stående på ingenting gäller den vad du skrivit.

## Bläddra utanför valvet

**Detta är av som standard.** Slå först på **Åtkomst till externa filer** i inställningarna — att läsa och skriva utanför valvet är det enda det här tillägget gör som Obsidian självt inte gör, så man väljer att slå på det snarare än att slå av det. Med det av visar valvnamnet helt enkelt ditt valv i Filutforskaren, och ingenting här tittar någonsin förbi det.

Att klicka på **valvnamnet** (eller 🏠-ikonen, när *Visa valvets namn* är av) öppnar en lista över platser snarare än innehåll. Fältet som öppnas innehåller **hela sökvägen du befann dig på, utskriven i sin helhet**, med platsen den börjar vid markerad — så att välja någon annanstans, eller att skriva över markeringen, byter bara ut den inledande delen och lämnar resten av sökvägen kvar framför dig. **Tryck på namnet en gång till** — en dubbelklickning — och markeringen breddas över hela det, vilket är hur den absoluta sökvägen tas i en enda gest snarare än sopas över för hand. Ändrar du dig sätter <kbd>Esc</kbd> tillbaka raden som den var.

Att skriva här erbjuder resten av en plats namn precis som annars, och <kbd>Tab</kbd> **sätter in den platsen** — den du pekar på, eller den namnet bara kan betyda. Där flera platser fortfarande delar det du har skrivit stannar trycket vid grenpunkten, precis som överallt annars. Att peka på en plats visar **den platsens egen sökväg**, helt markerad, följd av din antecknings sökväg bara så långt den verkligen sträcker sig därborta — vilket är precis vad det skulle landa dig på att välja den. En plats är inte ett steg inuti sökvägen på skärmen utan någonstans att räkna hela sökvägen från, så inget av var du var stannar kvar framför den.

Platserna som erbjuds:

- **Dina andra valv**, lästa ur Obsidians eget register, senast öppnade först, var och en under Obsidians egen valvikon — den som programmet självt använder för valvkommandon. Valvet du redan har öppet får ett hus i stället: det är där raden börjar som standard, inte någonstans att gå.
- **Hemmappen**, under sitt eget kontonamn, märkt med ett `~`. Lucide har ingen tilde, så den här ritas av tillägget på Lucides eget 24×24-rutnät med samma streck — en ikon som saknas i uppsättningen snarare än ett skrivtecken bland ikoner.
- **Filsystemets rot**, märkt `root` — oöversatt, eftersom det heter så på alla system — snarare än `/`, som skulle läsas som ett tomt steg intill avgränsaren som följer.
- **Monterade enheter**, med en ikon per typ där det är billigt att avgöra: nätverksresurser, optiska skivor, disketter och flyttbara media får sina egna; allt annat får en allmän enhet. På Windows visas enheter som `C:` med en allmän ikon — volymnamn och exakta typer kräver WMI, vilket medvetet inte görs.

Att välja ett annat valv **byter inte Obsidian till det.** Allt du har öppet förblir öppet; sökvägsraden börjar bara bläddra där. Det är hela poängen med att ha det på sökvägsraden i stället för att överlåta det till sidopanelens valvväljare.

Det landar också **så nära anteckningen du befinner dig på som den platsen faktiskt går**.

- Om platsen du valde *innehåller* anteckningen — hemmappen, eller var dina valv än bor — får du dess sökväg därifrån: välj `~` med `takeaways.md` öppen och fältet läser `Vaults/ditt-valv/takeaways.md`.
- Om det är en plats vid sidan av den här — ett annat valv, en annan enhet — provas samma relativa sökväg, så djupt den faktiskt finns. Valv är ofta nästan kopior av varandra, och anledningen till att hoppa till ett annat är oftast samma anteckning därborta.

Hur som helst stannar raden vid platsen du valde och **den första mappen i den sökvägen öppnas markerad**, samma form som att klicka på en mapp ger: steget du med störst sannolikhet ändrar när du hoppar någon annanstans är det närmast toppen, och resten av sökvägen förblir synlig medan du ändrar det. Ingenting fylls någonsin i på förhand som inte verkligen finns på disk.

### Medan du är utanför

Sökvägen **börjar vid platsen du valde**, inte vid maskinens katalogstruktur — och det gör även fältet du får genom att klicka på den tomma ytan eller trycka på fokustangenten: det innehåller sökvägen från den platsen, inte maskinens absoluta, med spåret hopvikt till själva platsen precis som det viks ihop till valvroten därinne — välj `Archive` och raden läser `Archive / notes / …`, inte `/home/du/Vaults/Archive/notes/…`. Det inledande segmentet bär en ikon för vad det är (valv, hemmapp, enhet), och <kbd>Backspace</kbd> stannar där i stället för att gå vidare upp i resten av filsystemet. Med *Visa valvets namn* av är det segmentet bara ikonen — inställningen gäller radens inledande segment oavsett vilket valv det namnger, inte bara ditt eget.

Sökvägsraden är **inramad i felfärgen** — samma ring som byt namn-läget ritar — så länge den pekar utanför ditt valv. Den markerar ett bestående tillstånd, inte ett ögonblick: så länge den syns gäller ingen av Obsidians egna hanteringar det raden visar, och skrivning är låst tills du säger annat.

Bläddrandet fungerar i övrigt som därinne: brickor, avgränsare, skrivande, autokomplettering, <kbd>Backspace</kbd> för att kliva ut. Samma synlighetsregler gäller också, så filändelser som inte stöds kräver fortfarande Obsidians *Titta på alla filändelser* och dolda filer kräver fortfarande det här tilläggets inställning.

**Högerklick fungerar även därute**, fast det är en annan meny: Filutforskarens egna hanterare behöver en fil valvet känner till, så rader utanför byggs i stället upp från sökvägen. De erbjuder öppning (här, till höger, i ett nytt fönster, eller i skrivbordets standardprogram), *Kopiera sökväg*, *Visa i systemets filhanterare*, och — när hänglåset väl är öppet — *Ny anteckning*, *Ny mapp*, *Skapa en kopia*, *Byt namn…* och *Radera*. **Dra och släpp** behöver fortfarande en valvfil och förblir otillgängligt.

Samma meny finns på den öppna filen i visaren, via högerklick eller från panelens egna tre punkter, och den frågar hänglåset i den vyns rubrikrad. Den frågar inget annat: om filen renderas eller visas som källa har ingen betydelse för om den kan raderas, och en bild eller en PDF — som inte har någon källvy alls — är lika raderingsbar som en anteckning. *Radera* betyder skrivbordets papperskorg, så det kan ångras därifrån; ett system utan papperskorg rapporterar det i stället för att förstöra filen.

Att radera utanför valvet flyttar filen till din **systempapperskorg** — Papperskorgen på Windows, Trash på macOS — aldrig en direkt borttagning. Härute finns ingen Obsidian-papperskorg att återhämta från, så en radering som inte kunde ångras erbjuds inte alls: där en plattform saknar papperskorg rapporterar försöket felet i stället.

### Skriva utanför valvet

Allt som skriver är **låst som standard**. Så länge raden pekar utanför ditt valv upptas byt namn-omkopplarens plats i rubrikraden av ett **rött hänglås** — samma färg som ringen runt raden, och av samma anledning: det markerar ett avslag. De två är en enda kontroll i en enda plats, så det är aldrig en fråga om vilken av dem som spärrar vad.

Tre tryck, i en cykel:

| Tryck | Vad du får |
| --- | --- |
| Det röda hänglåset | Skrivning här är tillåten. Hänglåset ersätts av omkopplaren för byt namn-/flyttläge |
| Omkopplaren | Byt namn-/flyttläge, precis som inuti valvet |
| Omkopplaren igen | Läget avslutas och hänglåset stängs igen — rättigheten överlever inte det den öppnades för |

**Byt namn-tangenten frågar också hänglåset.** Utanför ditt valv blinkar ett tryck på den till hänglåset öppet och stängt igen i stället för att öppna ett läge varje incheckning skulle avvisa: avslaget kommer före arbetet snarare än efter det. Tryck på hänglåset, eller tryck på byt namn-tangenten igen inom en halv sekund — det andra trycket ger exakt det knappen ger, för den här platsen, och öppnar byt namn-läget med det.

Inuti ditt valv finns inget hänglås: det finns inget att låsa upp, och omkopplaren har helt enkelt platsen.

Rättigheten ges **till en plats, inte till ett ögonblick**: den överlever allt du skulle göra medan du arbetar på ett ställe — att avsluta en flytt, klicka bort från fältet, öppna en fil — och tar slut när du väljer ett annat valv, en annan enhet eller en annan rot i listan, när raden återgår till en valvfil, eller vid det tredje trycket. Så en rad av flyttar inom en mapp kräver ett tryck, inte ett per fil.

Med hänglåset öppet beter sig sökvägsraden därute som den gör därinne:

| Gest | Resultat |
| --- | --- |
| Skriv ett namn som inte finns, <kbd>Enter</kbd> | Samma "skapa den?"-fråga som därinne; mappar som saknas skapas också. Ett namn utan filändelse blir en `.md`, precis som därinne |
| Byt namn-/flyttläget, skriv ett nytt namn | Byter namn på filen raden visar. Ett namn utan filändelse behåller filens egen — härute rymmer en mapp alla sorters filer, och ett namnbyte ska inte tyst göra en `.png` till en `.md` |
| Byt namn-/flyttläget, bläddra vidare, välj **behåll det här namnet** | Flyttar den dit under namnet den redan har |
| Håll <kbd>Ctrl</kbd> på någon av dem | Kopierar i stället för att flytta, och öppnar kopian i en ny flik |

Låst rapporterar alla dessa vad som hindrar dem i stället för att hända. Ingenting skrivs någonsin över i något av lägena: ett mål som redan finns avvisas, och avvisandet är filsystemets eget (`COPYFILE_EXCL`, ett exklusivt skapande) snarare än en kontroll som kunde förlora en kapplöpning. En flytt mellan filsystem — från ett USB-minne, från en nätverksresurs — faller tillbaka på kopiera-sedan-radera, och originalet tas bort först när kopian har landat.

**Att flytta en anteckning *ut ur* ditt valv frågar först.** `fileManager` kan inte följa en fil över den gränsen: varje länk som pekar mot anteckningen slutar lösas upp, ingenting uppdaterar dem, och anteckningen lämnar valvets index. Så flytten erbjuds som ett beslut snarare än avvisas eller görs i tysthet — en dialogruta anger vad det kostar och hur många anteckningar som länkar till den du flyttar. Bekräfta och den flyttas verkligen: kopieras ut, tas sedan bort från valvet genom Obsidians egen radering, så den går att återställa precis som en raderad anteckning gör, och ett fel i något av stegen lämnar anteckningen där den var. Att hålla <kbd>Ctrl</kbd> kopierar den fortfarande ut i stället, vilket inte har det problemet. Att gå åt andra hållet — att föra en extern fil *in i* valvet — är ännu inte kopplat.

### Öppna en extern fil

Att bläddra i filsystemet kan gå tillbaka **in i valvet du har öppet** — från roten, från hemmappen, från var dina valv än bor. En fil man når på det sättet är en vanlig anteckning, så den öppnas som en: den riktiga redigeraren, länkar och bakåtlänkar, och raden hoppar tillbaka till den valvrotade sökvägen. Bara filer Obsidian saknar en vy för stannar i förhandsvisningen, eftersom förhandsvisningen är det bättre svaret därute. Där en förhandsvisning ändå visar en sådan anteckning — en återöppnad arbetsyta, till exempel — erbjuder dess översta rad **Öppna i *(valv)***, samma erbjudande som görs för hand.

Obsidians redigerare fungerar bara på filer inne i valvet, så en extern fil **kan inte** öppnas som en riktig anteckning med länkar, bakåtlänkar och allt det där — det är en begränsning i programmet, inte i det här tillägget. Att välja en öppnar i stället en **förhandsvisning**, skrivskyddad tills du säger annat:

| Typ | Visas som |
| --- | --- |
| `.md`, `.markdown` | Renderad Markdown |
| `.html`, `.htm`, `.xhtml` | Den renderade sidan |
| Bilder, ljud, video, PDF | Inbyggd spelare/visare |
| Andra **text**filer (`.json`, `.css`, `.log`, `.txt`, …) | Oformaterad text, ordagrant |
| Binära format utan visare (`.zip`, `.exe`, …) | Lämnas till *Öppna i standardprogram* |

Visaren har två läsningar av en fil, och eftersom de utesluter varandra visas bara den du skulle byta **till**:

| | Vad den gör | Standard för |
| --- | --- | --- |
| **Visa som Markdown** | Renderar filen som en anteckning, skrivskyddad | `.md`, `.markdown` |
| **Visa som sida** | Renderar filen som den sida den är, skrivskyddad | `.html`, `.htm`, `.xhtml` |
| **Redigera som text** | Källan, redigerbar | allt annat |

Utanför valvet är **Redigera som text** också trycket som häver skrivskyddet — läget och rättigheten är en gest snarare än två knappar att hålla reda på. Den är rödtonad **närhelst ett tryck skulle häva skrivskyddet**, oavsett om du beväpnar redigering på plats eller kommer direkt från den renderade vyn; inne i valvet finns inget att låsa upp, så då är den vanlig. **Visa som Markdown** får ett lätt accentfärgat sken — samma ton Obsidian ger markerad text — vilket märker den som vägen tillbaka snarare än en uppmaning.

Eftersom knappen följer *redigerandet* snarare än råläget erbjuder en fil som ligger skrivskyddad i textvyn fortfarande **Redigera som text**: det är trycket som beväpnar den. En fil som aldrig kan skrivas i — avkortad eller oläsbar — säger **Visa som text** i stället, eftersom det är allt trycket kan leverera.

Standarderna är vända åt det nyttiga hållet snarare än det bokstavliga: ett `#` i ett skalskript är en kommentar, inte en rubrik, så att rendera en `.log` som Markdown skulle tyst svälja den. Båda standarderna kan åsidosättas per fil, och valet går in i flikens historik, så bakåt/framåt och en återöppnad arbetsyta behåller det — gott om anteckningar bor i `.txt`-filer, och gott om `.md`-filer är lättare att läsa som källa.

#### Vad en HTML-sida får lov att göra

Ingenting. Sidan visas i en ram med **varje rättighet indragen** — inga skript, inga formulär, ingen navigering, ingen egen ursprungsdomän — och en innehållspolicy som inte tillåter något nätverk alls. Det är inte försiktighet för dess egen skull: en lokal sida som laddades på vanligt sätt skulle dela det här fönstrets ursprungsdomän, och det här fönstret är Obsidian, så ett skript i en nedladdad HTML-fil skulle köras inne i ditt program med ditt programs räckvidd.

Vad det kostar är allt sidan *gör*; vad det behåller är allt sidan *är*. Stilmallarna och bilderna som ligger bredvid filen läses in och förs med in i ramen, så en sparad sida ser fortfarande ut som sig själv. Referenser som pekar ut ur sidans egen mapp, och referenser till något på webben, lämnas exakt som de skrevs och laddas helt enkelt inte — en lokal fil kan inte i tysthet berätta för en server att du öppnade den.

Skript **tas bort** snarare än bara blockeras, så att sidan du ser och källan du kan byta till skiljer sig på ett angivet sätt snarare än på vad som helst ramen tyst vägrade köra. Länkar inuti sidan gör ingenting. När du vill ha den riktiga varan — skript, nätverk och allt — lämnar *Öppna i standardprogram* den till din webbläsare, som är det rätta verktyget för det.

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

- **Öppna i *(valv)*** — visas när filen tillhör ett av dina andra valv. Lämnar den till Obsidians egen URI-hanterare, som öppnar det valvets fönster med anteckningen i sig, som en riktig redigerbar anteckning. Det här fönstret lämnas precis som det var; ingenting byts under dig.
- **Visa som Markdown** / **Visa som sida** / **Redigera som text** — de två läsningarna den här filen har; den sista häver också skrivskyddet utanför valvet.
- **Öppna i standardprogram** — lämnar filen till skrivbordets standardprogram, inklusive de binära format den här visaren inte kan visa. Formulerad exakt som Obsidians egen post för samma åtgärd, eftersom det är samma åtgärd.

Visaren svarar också på ett **högerklick**: inuti textredigeraren med *Klipp ut* / *Kopiera* / *Klistra in* / *Markera allt*, och överallt annars med filens egen meny. Obsidians tre-punktsmeny i rubrikraden bär också den menyn — utanför valvet skulle den annars inte erbjuda något annat än *Dela höger* och *Dela ned*.

Ingenting utanför ditt valv skrivs om du inte trycker *Redigera som text* först. Se avsnittet [Utanför valvet](README.sv.md#utanför-valvet) i README för hela redovisningen.

## Släppa en fil på en mapp i sökvägen

Varje mapp i raden är ett mål för släpp, så **en anteckning som dras till en mapp
flyttas dit** — den kortaste vägen dit går mellan en anteckning och vilken mapp
som helst ovanför den, eftersom målet redan syns på skärmen. Dra från
filhanteraren, från listan, från anteckningens eget namn i sidhuvudet, eller
från vilken annan plats i Obsidian som helst som ger en fil: det är appens egen
dragning, så texten som visas vid muspekaren, pekaren och markeringen är de som
filhanteraren ritar.

**Även valvets namn tar emot ett släpp**, eftersom det är mappen högst upp i
raden — den enda gesten som placerar en anteckning i valvets rot härifrån.

**Ett helt urval kan dras på en gång**, och det flyttas som ett: om någon av
filerna inte kunde flyttas avvisas hela släppet i stället för att flytta vissa
och tyst hoppa över resten.

Länkar följer med anteckningen, precis som när den flyttas från filhanteraren
eller genom att skriva en sökväg.

En mapp som **inte kan ta emot släppet erbjuder ingenting eget** — ingen
*Flytta in*-text, ingen markering på mappen — i stället för att erbjuda något
som ändå skulle misslyckas; Obsidians egen text för sidhuvudet, *Öppna i denna
flik*, står där i stället. Tre fall:

- mappen filen **redan finns i**, eftersom den redan är där;
- en mapp som släpps **i sig själv eller i en av sina egna undermappar**, vilket
  inte skulle lämna den någonstans att ha kommit ifrån;
- ett urval som innehåller **en mapp och något inuti den**, eftersom det att
  flytta mappen tar barnet med sig.

En mapp som redan har en **fil med samma namn** tar emot släppet och frågar vad
som ska hända med den som är i vägen, med samma dialogruta som ett upptaget
namn som skrivits in eller valts — se [Ett namn som är upptaget](#ett-namn-som-är-upptaget).
Inget här skriver över något.

Endast mappar **inuti ditt valv** tar emot släpp. Medan raden pekar utanför
valvet avböjer dess segment, eftersom det att ta en anteckning ut ur valvet
bryter varje länk till den — ett beslut värt en fråga snarare än en gest.
Sättet att göra det medvetet är fortfarande att skriva sökvägen, som frågar
först och talar om hur många anteckningar som skulle påverkas.

## Släppa text eller en fil för att skriva in den

Samma mål tar emot **innehåll** lika väl som filer, och de två skiljs åt genom
vad du drar snarare än var du släpper.

**På en anteckning raden redan namnger** — anteckningens eget namn, eller en
avgränsare vars mapp har en mappanteckning — hamnar det du släppte på slutet av
den, efter en tom rad. Det frågar först, eftersom detta skriver in i en fil som
redan finns, och en dragning är en gest en ostadig hand kan göra av misstag.
Text från en redigerare, en fil från skrivbordet och en anteckning dragen från
detta valv fungerar alla; en fil läses som text, och en binär fil avvisas i
stället för att klistras in som en skärm full av nonsens.

**På en plats — valvets namn eller en mapp** — skrivs ingenting ännu, eftersom
inget har namngetts. Fältet öppnas där och innehåller det du släppte, och
namnet du skriver är det som verkställer det: en ny anteckning **skapas** med
texten, och en befintlig tillfrågas precis som ovan. <kbd>Esc</kbd>, eller ett
klick någon annanstans, släpper hela grejen.

**Raden ringas in i blått** medan en dragning som skulle landa som innehåll är
över den, och förblir blå medan fältet innehåller ett — samma blå, som säger
samma sak: det som händer härnäst handlar om texten du bär på. En fil dragen
från ditt eget valv till en mapp betyder fortfarande *flytta den dit*, behåller
Obsidians egen markering, och ringas aldrig in i blått; den gesten fanns där
först och innehåll står tillbaka för den.

## När sökvägen är längre än panelen

Namn **förkortas i stället för att pressas ihop**, i ordningen av vad du minst
sannolikt behöver:

1. **Valvets namn först**, ner till dess ikon. Du vet vilket valv du är i;
   ikonen fortsätter att säga var sökvägen börjar.
2. **Sedan filens filändelse**, om du har den påslagen — samma tre tecken på
   nästan varje fil i ett valv. Den försvinner helt i stället för att förkortas:
   en halv filändelse säger inget som ingen filändelse inte redan säger.
3. **Sedan mapparna, längsta först.** Det längsta mappnamnet förkortas till
   längden av nästa längsta, sedan båda tillsammans, och så vidare, var och en
   stannar vid sitt golv — så en väldigt lång mapp ger upp allt den har jämfört
   med de andra innan ett kort namn bredvid den förlorar en bokstav.
4. **Filens eget namn sist**, och det behåller omkring sex tecken. Det är vad
   sidhuvudet är till för.

Utrymme ges upp **kontinuerligt**, i bråkdelar av en pixel snarare än en
bokstav i taget: ett namn som ger vika klipps vid pixeln och tonas bort under
sin `…`, så en panel som dras sakta smalnar av raden mjukt och inget efter den
flyttar sig i hopp. Innan någon bokstav försvinner tas luften runt avgränsarna
bort — det är radens enda mellanrum och det kostar ingen information alls —
och ett förkortat namn slutar där avgränsaren börjar, utan en remsa tom yta
mellan de två.

**Fältet tar det som ryms i det.** Att öppna ett för att skriva en sökväg
pressar inte mapparna bredvid det ur vägen: det är lika brett som texten i det
och växer när du skriver, så resten av raden behåller allt fältet inte
behöver. Bara när det inte finns plats för båda rullar raden, och då är fältet
det enda som aldrig ger vika — det är text som redigeras, inte ett namn som
anpassas.

Inget klipps bort utöver det som skiljer det från grannarna: `Projects2025`
och `Projects2026` i samma mapp förkortas till `…025` och `…026` snarare än
till ett prefix som skulle göra dem till samma ord, medan `Reports` bredvid
`Receipts` kan förkortas till `Rep…`. Utöver detta behåller varje namn en
**läsbar bredd** — ungefär fyra bokstäver värt för en mapp och sex för ett
filnamn, mätt i det typsnitt raden faktiskt ritas med snarare än räknat.
Fyra smala bokstäver och fyra breda är inte samma mängd namn, så `lilliliillil`
tillåts behålla mer av sig själv än `WWMMWWMMWWMM`, och det som blir kvar på
skärmen är samma storlek oavsett vilket. Korta namn lämnas helt orörda — ett
namn nedslipat till `A…` är unikt och ändå oläsligt. **Mellanslag räknas inte
med.** Sex tecken för att säga vilken fil detta är är sex tecken värda att
läsa, så mellanrummen mellan dem följer med gratis och ett lämnas aldrig
liggande mot `…`, där det ändå skulle vara osynligt.

**Ett namn klipps där dess grannar är överens om det, och i mitten där de inte
är överens någonstans.** Två mappar som heter `aaaa-common-one` och
`aaaa-common-two` delar allt utom sina sista tre tecken, så att klippa svansen
behåller den halva som säger något: de förkortas i stället till `…one` och
`…two`, vilket är kortare *och* skiljer dem åt. Där likheten finns i slutet —
`alpha-draft` bredvid `beta-draft` — är det slutet som försvinner; där den
finns i båda ändarna är det mitten som blir kvar. Ett namn utan nära grannar
förlorar sin mitt, eftersom ett namn öppnar med vad det är och avslutas med
vilket det är — för en fil, dess filändelse: `annual…2026.md`.

En kort gemensam följd räknas inte. `parallel structures` råkar sluta på samma
två bokstäver som `Schemes` bredvid den, och det är ingen anledning att behålla
någon av dem hel — tre tecken från början skiljer dem redan åt.

Inget radbryts till en andra rad. När inte ens de kortaste ärliga namnen får
plats, **rullar raden i sidled**, parkerad vid slutet där filen är — vid den
punkten finns inget kvar att pressa ihop, och att klippa mer skulle dölja
snarare än förkorta. Hjulet rullar den var pekaren än är över raden, och båda
ändarna kan nås: medan den rullar riktas raden mot sin startpunkt, oavsett vad
justeringsinställningen säger, eftersom innehåll centrerat i en box det har
växt ur svämmar över både vänster och höger — och den halvan går inte att nå
genom rullning alls.

**Peka på ett förkortat namn och det kommer tillbaka i sin helhet**, så länge
du pekar på det, rullat till vänsterkanten så att allt som kom tillbaka syns
på skärmen. **Klicka på ett och det stannar kvar**: fältet öppnas och visar
mappen du klickade på, det som erbjuds efter den och vad du än skriver, och
det fortsätter visa dem när pekaren har flyttat sig bort. Namn ligger stilla
medan du rullar raden eller skriver i den — ett som fjädrar upp under en gest
avsedd att läsa raden skulle flytta allt efter det undan under dig.

**Det inledande segmentet har alltid ett verktygstips, och det är den absoluta
sökvägen** — `/home/du/Vaults/Notes`, eller var raden än börjar. Det är det
enda om raden inget på skärmen kan säga: namnet säger dig *vilket* valv,
aldrig var det finns. Det finns där oavsett om något behövde förkortas eller
inte.

Med **Visa valvets namn** avstängt tas namnet inte bort, bara hålls vid intet
— så att peka på ikonen ger det tillbaka precis som att peka på ett namn raden
var tvungen att förkorta gör.

**Visa filändelser** sätter tillbaka filändelsen på radens filnamn. Av — som
standard — namnger raden en anteckning som Obsidian titelsätter den, utan
`.md` som nästan varje fil i ett valv delar; på, namnger den den som
filsystemet gör, vilket är vad du vill när valvet innehåller mer än
anteckningar. Det är också det andra raden ger upp när utrymmet tryter, direkt
efter valvets namn.
Ett verktygstips ger dig resten: inte bara namnet utan allt raden visar under
det, som `…/namn/mapp/anteckning.md`, så att en pekning svarar på både "vad är
detta" och "vad finns under det". Valvikonen namnger sitt valv på samma sätt,
när namnet är avstängt eller har pressats bort.

## De två varningsfärgerna

| | När | Vad det betyder |
| --- | --- | --- |
| **Röd** ring på sökvägsfältet | Raden pekar utanför ditt valv | Obsidian kan inte öppna det som finns där som en anteckning, och inget där skrivs förrän du öppnar hänglåset. |
| **Orange** ring på sökvägsfältet | Filen är en texttyp Obsidian saknar en vy för | En försiktighetsåtgärd. Obsidian skulle lämna över den till skrivbordets standardprogram; tillägget visar den i stället. |
| **Röd** text i det öppna fältet | Ingenting finns på den sökvägen än | <kbd>Enter</kbd> skapar den snarare än öppnar den. Inte så mycket en varning som ett påstående om vad nästa tangenttryckning gör — se [Skriva en sökväg](#skriva-en-sökväg). |
| **Rött** hänglås i stället för namnbytesomkopplaren | Raden pekar utanför ditt valv och att skriva där är fortfarande låst | Samma röd som ringen, av samma anledning: det markerar ett avslag. Att trycka på det tillåter skrivning här och lämnar tillbaka platsen till omkopplaren — se [Skriva utanför valvet](#skriva-utanför-valvet). |

De **två ringarna är oberoende, och båda kan gälla samtidigt** — en extern
`.json` är utanför ditt valv *och* en typ Obsidian saknar en redigerare för. I
visaren visas de som separata rader, var och en anger bara sitt eget faktum.
På sökvägsfältet vinner rött där båda gäller, eftersom två ringar bara skulle
vara brus. Den röda *texten* är en tredje sak helt: den handlar om vad som
skrivs, inte om var raden pekar, så den kan visas inuti endera ringen eller
ingen av dem.

Den orange nivån är medvetet snäv. Registrerade typer (Markdown, canvas,
bilder, PDF, ljud, video) hanteras korrekt och får ingen markering. Binära
filer får inte heller någon — du kommer inte råka redigera en `.zip` till ett
kaos av misstag. Det som återstår är precis riskzonen: en `.json`, `.css`
eller `.log` som **Visa alla filtyper** har gjort synlig. Listan är avsiktligt
bredare: där är allt som inte är en anteckning orange — se
[hur listans rader färgas](#hur-listans-rader-färgas).

## Byt namn-/flyttläge

Pennknappen längst till höger i sidhuvudet — bredvid knappen för visningsläge,
samma storlek som de inbyggda knapparna — växlar byt namn-/flyttläge. Utanför
ditt valv står ett rött hänglås på dess plats tills du trycker på det; se
[Skriva utanför valvet](#skriva-utanför-valvet). Sidhuvudets rad ramas då
in i accentfärgen, precis som att byta namn i filhanteraren. Samma klick och
tangenttryckningar verkställer nu en flytt eller ett namnbyte via Obsidians
`fileManager.renameFile`, så alla länkar till anteckningen följer med.

Under namnbytet:

- Det aktuella filnamnet är fastnålat i varje mapps lista, så att flytta en
  anteckning utan att byta namn på den är ett enda klick.
- Namn som redan är upptagna i målmappen är **röda** — en mapp som redan har
  namnet, och en fil med det namnet — så att kollisionen syns innan du väljer.
  De kan fortfarande väljas: se nedan.
- Inmatning valideras löpande mot Obsidians egna regler för namnbyte — samma
  teckenuppsättningar, samma meddelanden, samma röda verktygstips du får när
  du byter namn i filträdet — så att ett otillåtet namn flaggas medan du
  skriver och inte kan verkställas.
- Att klicka utanför sidhuvudets rad, eller att sidhuvudet förlorar fokus,
  avslutar namnbytesläget.

### Ett namn som är upptaget

Att flytta eller byta namn till ett namn som redan finns **frågar i stället
för att avvisa.** En dialogruta öppnas med två sökvägar du kan redigera: var
din fil hamnar, och var filen i vägen hamnar — röd medan den fortfarande är
upptagen. Varje sökväg ritas också som sökvägsfältet ritar en, med delarna som
skiljer sig färgade och förkortade sist, så en lång sökväg visar ändå vad som
ändras.

Båda fälten har en lista. Den andra innehåller de vanliga utvägarna:

- **Byt plats** — den flyttas till din fils gamla mapp, under sitt eget namn.
- **Byt namn** — den stannar kvar men tar din fils gamla namn.
- **Byt båda** — den tar din fils gamla sökväg.
- `-1`, `-bak` och `-old` bredvid sitt eget namn.
- De två namnen filerna hade.

Den första listan erbjuder vart din fil var på väg, **Stanna kvar**, sitt eget
namn i målmappen, samt `-1`, `-bak` och `-old` bredvid det. En utväg vars
sökväg är upptagen är gråtonad och kan inte väljas. Att välja en **fyller bara
i fältet** — du kan fortfarande redigera det — och **Verkställ** flyttar båda,
länkar och allt; **Avbryt** flyttar ingenting. Att välja ett upptaget namn ur
listan frågar samma sak, liksom att släppa en anteckning på en mapp som redan
har dess namn.

## En tangent för båda namnbytena

Namnbytenskommandot (<kbd>F2</kbd> som standard, eller vad du än har bundit om det till) **växlar** mellan Obsidians namnbyte via inline-titeln och det här tillägget sökvägsfält i huvudet. Om du har stängt av Obsidians inline-titel blir sökvägsfältet i huvudet det enda målet, så tangenten gör aldrig ingenting.

I sökvägsfältet öppnar den **namnet utan filändelse** — den redigering ett
namnbyte nästan alltid är, och samma sak som klick på namnet markerar. Tryck igen och
den gör det som <kbd>Tab</kbd> skulle göra där: på namnet är det nästa steg —
namnet med sin filändelse, sökvägen från din valvmapp, sökvägen från
systemets rot; med något inskrivet fyller den i det, som <kbd>Tab</kbd> gör.

**Cykeln sluts vid rubriken.** Fem tryck tar dig runt den — inline-titeln,
namnet, namnet med sin filändelse, sökvägen från ditt valv, sökvägen
från systemets rot — och det sjätte är inline-titeln igen. Det trycket är det enda som skiljer sig från
<kbd>Tab</kbd>, som i stället går ett varv tillbaka till sökvägens början — och det sjunde
tryck går dit <kbd>Tab</kbd>s varv går: valvets rot, med hela sökvägen i
fältet och dess första mapp markerad. Så varje steg <kbd>Tab</kbd> når, når
tangenten också.

Kommandot **Fokusera sökvägsfältet** gör samma sak inne i fältet — vad
<kbd>Tab</kbd> skulle göra — och där <kbd>Tab</kbd> skulle göra ett varv lämnar den i stället tillbaka markören
till anteckningen. Dess nästa tryck är varvet: valvets rot, första mappen markerad.

**I ett fält som redan är öppet** gör tangenten det till ett namnbyte där det
står — och behåller texten, markören och markeringen — och **Fokusera sökvägs-
fältet** tar bort namnbytet från det på samma sätt. **Allt annat** som trycks eller
klickas mellan tryckningarna startar om respektive cykel, så ett tryck efter att du har
redigerat hamnar aldrig på ett steg som är kvar från tidigare.

Utanför valvet fungerar tangenten också — där finns ingen inline-titel, så det
första trycket går direkt till sökvägsfältet.

Detta fungerar genom att linda kommandot `workspace:edit-file-title` snarare än att kapa tangenten, så både att binda om snabbtangenten och att köra kommandot från paletten fungerar oförändrat.

## Hur listans rader färgas

| Färg | Betyder |
| --- | --- |
| **Lila** | En anteckning (`.md`, `.markdown`) — det Obsidian öppnar som en anteckning, plockad ur en mapp med blandat innehåll |
| **Orange** | Inte en anteckning — allt Obsidian inte öppnar som en, från en PDF till en `.txt`, och `:page`-raderna med dem. En mapp med blandat innehåll läses för anteckningarna i den, och en färg för allt annat säger det snabbare än en varning på ett fåtal av dem; se [varningsfärgerna](#de-två-varningsfärgerna) |
| **Dämpad** | Utanför ditt valv, så valvets egen hantering gäller inte |
| **Blå**, fetstil | Där du redan är: den här fältets egen anteckning, och mappen sökvägsfältet står på. I namnbytes-/flyttläge står raden *behåll det här namnet* i anteckningens ställe — samma anteckning oavsett |
| **Röd** | Endast namnbytes-/flyttläge: namnet är upptaget. Ändå valbart — att välja en frågar vad som ska göras med filen som står i vägen; se [Ett namn som är upptaget](#ett-namn-som-är-upptaget) |

**Mappar är i fetstil**, så en mapps egen anteckning behöver ingen egen färg för att
skilja sig från sin mapp: den är lila som varje annan anteckning. En **linje längs
en rads kant** markerar namnen som börjar med det du skrev — blå där
de stämmer längre, grön på den gren förslaget tar; se
[Skriva en sökväg](#skriva-en-sökväg).

Fältet tar samma färger för det det namnger — se [Skriva en sökväg](#skriva-en-sökväg).

## Synlighetsregler

- Filer med filändelser som inte stöds visas i listorna bara om Obsidians inställning **Detect all file extensions** är på — **inuti valvet**. Utanför det gäller inte inställningen: den styr vad valvet indexerar, och inget där ute är i valvet, så en `.txt` bredvid dina anteckningar listas oavsett.
- Listan visar upp till 1000 rader, tio gånger Obsidians egen gräns. När en mapp har fler säger sista raden hur många som lämnades ute; fortsätt skriva för att smalna av listan.
- Punktfiler och punktmappar visas bara om det här tillägget inställning **Visa dolda filer** är på.
- **Skydd mot att skriva över fungerar likadant oavsett synlighet** — en dold fil hindrar dig fortfarande från att skriva över den.

## Fusklapp

En sökväg **omsluten av citattecken** packas upp åt dig. Windows *Kopiera som sökväg* ger
`"C:\Users\du\anteckning.md"`, citattecken inkluderade, och ett skal gör samma sak för varje
sökväg med ett mellanslag i den; att klistra in en eller skriva den fungerar oavsett. Bara
dubbla citattecken, och bara som ett matchande par runt hela sökvägen — det kan inte
förekomma i ett riktigt namn, där en apostrof mycket väl kan.

| Du vill… | Gör detta |
| --- | --- |
| Öppna en mapp (dess anteckning, eller visa den) | Klicka på avgränsaren **efter** den mappen |
| Ge en mapp en mappanteckning den saknar | **Dubbelklicka** på samma avgränsare (kräver ett tillägg för mappanteckningar) |
| Byta ut en mapp mot ett syskon | Klicka på mappens namn, sedan skriv eller välj |
| Byta namn på eller ändra mål för anteckningen | Klicka på anteckningens namn — filändelse inkluderad |
| Bläddra i en mapps innehåll | Klicka på mappens namn; listan visar dess förälder, så klicka på mappen **under** den du vill ha |
| Skriva om en mapp och allt under den | **Dubbelklicka** på mappens namn, skriv sedan |
| Redigera sökvägen från en mapp och nedåt | Klicka på mappens namn, sedan <kbd>→</kbd> för att avmarkera |
| Hoppa till en fil genom att skriva dess sökväg | Klicka på filnamnet eller den tomma ytan, skriv, <kbd>Enter</kbd> |
| Öppna en fil i en ny flik i stället | <kbd>Ctrl</kbd> medan du väljer den, eller <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| Kopiera anteckningen någonstans i stället för att flytta den | Pennan, sedan <kbd>Ctrl</kbd> medan du väljer eller bekräftar målet |
| Skapa en anteckning på en sökväg som inte finns | Skriv sökvägen — fältet blir **rött** så snart inget i listan matchar den heller — sedan <kbd>Enter</kbd>. Inuti valvet skapas den direkt; utanför frågar den först |
| Se om en sökväg du skrev redan finns | Titta på färgen: den tar färgen på raden den namnger, och röd betyder att <kbd>Enter</kbd> skulle skapa den |
| Stiga ner en nivå medan du skriver | Skriv `/` |
| Gå upp en nivå medan du skriver | <kbd>Backspace</kbd> i det tomma fältet |
| Ta in mapparna före fältet i det | <kbd>←</kbd> vid dess start för en; <kbd>Shift</kbd>+<kbd>Home</kbd>, eller <kbd>Home</kbd> med listan stängd, för alla |
| Flytta eller byta namn på den öppna anteckningen | Klicka på pennan, bläddra sedan eller skriv som ovan |
| Flytta till ett namn som är upptaget | Bekräfta det ändå: dialogen låter dig byta plats, namn eller båda, eller ge filen som står i vägen ett annat namn |
| Flytta utan att byta namn | Pennan → klicka in i målmappen → välj det fastnålade nuvarande filnamnet |
| Byt namn på plats | <kbd>F2</kbd> två gånger (första trycket går till inline-titeln, andra till huvudet) |
| Hoppa till ett annat valv, hem eller en enhet | Klicka på valvets namn |
| Öppna en fil från utanför valvet | Valvnamn → välj en plats → bläddra → välj filen (skrivskyddad tills *Redigera som text*) |
| Fylla i namnet som skrivs | <kbd>Tab</kbd>, eller <kbd>End</kbd> för det som erbjuds; <kbd>→</kbd> tar en bokstav av det |
| Stiga in i det, när ett namn är kvar | <kbd>Tab</kbd> igen |
| Ta tillbaka ett steg, eller lämna mappen | <kbd>Shift</kbd>+<kbd>Tab</kbd> |
| Ta hela sökvägen, eller systemets sökväg | <kbd>Tab</kbd> förbi slutet, eller klicka fyra gånger |
| Kopiera ett namn, en sökväg, eller en systemsökväg | Högerklicka på den två gånger; den tomma ytan tre gånger för systemsökvägen |
| Nå det valvhanteraren erbjuder för det här valvet | Högerklicka på ikonen i början av raden |
| Kopiera valvets ID | Högerklicka på ikonen i början av raden |
| Öppna ett annat valv du bläddrade i | Högerklicka på dess namn i början av raden |
| Se filens filändelse på raden | Slå på **Visa filändelser** i inställningarna |
| Öppna ett mappsegment i en ny flik | <kbd>Ctrl</kbd> eller mittenklick på det, eller dra det till flikfältet |
| Nå sökvägsfältet från tangentbordet | Bind *Fokusera sökvägsfältet* i Snabbtangenter |
| Öppna en webbadress eller en `obsidian://`-länk | Skriv den i fältet och tryck <kbd>Enter</kbd> |
| Avbryt vad som helst | <kbd>Esc</kbd>, eller klicka utanför huvudfältet |
| Prova rader innan du bekräftar | Pil eller hovra genom listan; <kbd>↑</kbd> förbi toppen ger tillbaka din text |
| Flytta en anteckning till en mapp ovanför den | Dra den till den mappen på raden |
| Behåll en textbit som en ny anteckning | Dra texten till en mapp, skriv ett namn, <kbd>Enter</kbd> |
| Lägg till en textbit i anteckningen du läser | Dra den till anteckningens namn, bekräfta |
| Se ett förkortat mappnamn i sin helhet | Hovra på det, eller gör panelen bredare |
| Ta reda på var valvet själv finns | Hovra på ikonen i början av raden |
| Ta en anteckning ut ur valvet | Pennan → bläddra utanför → bekräfta dialogen (länkar går sönder) |
| Tillåt att skriva utanför ditt valv | Klicka på det **röda hänglåset** i huvudet; namnbytesomkopplaren tar dess plats |
| Lås det igen | Klicka på omkopplaren tills hänglåset är tillbaka — ett tryck in, ett tryck ut |
| Ta bort en fil utanför valvet | Öppna hänglåset, högerklicka sedan på filen: *Delete* flyttar den till ditt systems papperskorg |

## Inställningar

| Inställning | Alternativ | Standard | Vad den gör |
| --- | --- | --- | --- |
| **Language** | Obsidian standard, eller någon av 46 | Obsidian standard | Vilket språk det här tillägget egen text är på. *Obsidian standard* följer språket i utseendeinställningarna, vilket är vad nästan alla vill. Raden själv — dess namn, dess beskrivning och *Obsidian standard* — förblir på engelska oavsett vad som väljs, eftersom det är vägen tillbaka ut ur ett språk du inte kan läsa. Grekiska och sanskrit är översatta här och saknas i Obsidians egen lista, så den här inställningen är det enda sättet att nå dem. |
| **Justering** | Left / Center / Right | Left | Var sökvägen sitter i huvudraden. *Center* matchar Obsidians klassiska utseende. |
| **Avgränsare** | Valfritt tecken | `/` | Separatorn som ritas mellan segmenten. Sex förinställningar med ett klick (`/ > ▸ › \ •`) finns framför textfältet. |
| **Visa valvets namn** | På / Av | På | Om valvet självt är det första segmentet i sökvägen. Avstängd blir det segmentet en 🏠-ikon i stället för att försvinna, så sökvägen börjar fortfarande någonstans klickbart. |
| **Mappnamnet öppnar listan** | På / Av | På | Byter vad ett mappnamn och avgränsaren efter det gör — se [tabellen ovan](#sökvägen). Med [Folder notes](obsidian://show-plugin?id=folder-notes) öppnar avgränsaren mappanteckningar. Gäller aldrig i namnbytes-/flyttläge. |
| **Visa dolda filer** | På / Av | Av | Om punktfiler och punktmappar listas i listorna. Skydd mot att skriva över gäller oavsett. |
| **Show all file types** | — | — | Inte det här tillägget inställning utan Obsidians, nämnd här eftersom den svarar på samma fråga: ditt valv indexerar bara de filtyper det är instruerat att, och bara det som indexeras kan listas. Leta efter den i Obsidians inställningar och slå på den för att se alla filer; knappen bredvid raden öppnar den sidan med inställningen rullad in i vy och blinkande, som om den klickades i inställningarnas egen sökning. Utanför valvet gäller den inte, eftersom inget där ute är indexerat ändå. |
| **Visa filändelser** | På / Av | Av | Om filens namn på raden bär sin filändelse. Av, den lämnas bort — som Obsidian lämnar bort den från en antecknings titel. På, raden namnger filen som filsystemet gör. Oavsett är filändelsen det andra som ges upp när raden får slut på utrymme, direkt efter valvets namn. |
| **Åtkomst till externa filer** | På / Av | **Av** | Om valvets namn öppnar platslistan. Av, tittar ingenting i tillägget någonsin förbi det här valvet. |
| **Snabbtangenter** | knapp | — | Öppnar Obsidians *Snabbtangenter* filtrerat till det här tillägget, där *Fokusera sökvägsfältet* kan tilldelas en tangent. |

## Byta ut ikonerna

Lure ritar tre ikoner: valvrotens ikon (när **Visa valvets namn** är av), namnbytes-/flyttomkopplaren, och hänglåset som står i dess ställe medan skrivning utanför valvet är låst. Alla kan bytas ut från ett tema eller ett CSS-utdrag — ställ in ersättningstecknet och dölj det medföljande i en enda regel:

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

`--lure-icon-glyph` tar emot allt som är giltigt i CSS `content`, så `url(...)` fungerar för en bild lika väl som för ett text- eller emojitecken. Låt `--lure-icon-svg` vara för att behålla Lucide-ikonen och rita ditt tecken bredvid den.
