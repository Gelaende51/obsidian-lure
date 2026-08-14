<!-- Oversættelse af docs/usage.md — stand: commit 33b0e60.
     Maskinoversat (Claude Opus 5), ikke gennemset af personer med dansk
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

Med [Folder notes](obsidian://show-plugin?id=folder-notes) installeret åbner det samme klik i stedet mappens note. Det er det eneste mappenote-plugin, der har vist sig at gøre krav på stien i overskriften; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) og [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) håndterer mappenoter, men lytter ikke efter klik på stien, så med dem viser skilletegnet mappen som sædvanlig. Se [kompatibilitet](../compatibility.md#verified-against).

Et skilletegn er **kun understreget, når mappen før det faktisk har en mappenote**, så understregningen er et løfte om, at der er noget at åbne. Hvert skilletegn kan klikkes uanset — et uden understregning viser og folder sin mappe ud i sidepanelet, hvilket markøren stadig signalerer. Understregningen forlader mappenavnet samtidig: med ombytningen slået til åbner navnet listen, så at markere det som linket til noten ville være en løgn.

**Omdøb-/flyttetilstanden tilsidesætter begge**, uanset hvad indstillingen siger: intet på linjen åbner en mappe, mens en flytning er undervejs, for at åbne en ville opgive flytningen. Mappenavne vælges til redigering, og skilletegn går ned — begge er måder at udpege målet på — og understregningen forsvinder for at vise, at åbning er sat på pause.

**Boksens rod** er det eneste segment, der ikke er et stisegment. Den har ingen forælder at liste søskende ud fra, så i stedet åbner den [listen over steder](#at-browse-uden-for-boksen) — dine andre bokse, hjemmemappen, filsystemets rod og monterede drev.

## Klik på et segment: byt det ud med et søskende

Et klik på et mappenavn vælger **den mappes navn** i et tekstfelt og åbner en liste over mappen **ét niveau op** — dens forælder. At skrive eller vælge en række bytter denne mappe ud med et søskende og lader alt under den være urørt, så `Projekter/2026/Opstart.md` → klik `2026` → vælg `2025` giver dig `Projekter/2025/Opstart.md`.

Et klik på **notens navn** virker på samme måde mod dens egen mappe og vælger filnavnet **inklusive filendelsen** — at omdøbe eller omdirigere en note betyder som regel, at den også ændres.

Klikket på mappen har allerede valgt ét segment, så **ét klik mere** udvider markeringen til hele linjen — den mappe *og* alt under den — og det, du skriver, erstatter så resten af stien på én gang. Virker ens i navigations- og omdøb-/flyttetilstand.

Det gælder kun som en fortsættelse af det klik, der åbnede feltet. Når du først har brugt feltet, opfører det sig som et hvilket som helst andet tekstfelt: klik placerer markøren, dobbeltklik tager et ord, tredobbeltklik tager linjen.

Under alle omstændigheder forbliver resten af stien synlig omkring feltet, som brikker før det og som umarkeret tekst efter det, så den fulde sti aldrig forsvinder fra overskriften. Skriv for at erstatte markeringen, eller tryk <kbd>End</kbd> / <kbd>→</kbd> for at beholde den og redigere videre derfra. Listen viser hele mappen uanset det forudfyldte; den begynder først at filtrere, når du faktisk skriver.

## Nedstigning via skilletegn

Et klik på et skilletegn (med **Mappenavnet åbner listen** slået fra) går ned i mappen før det: listen viser *den* mappes indhold, og resten af stien åbnes markeret i feltet. At vælge en mappe føjer den til stien og åbner straks den næste liste, så du kan klikke dig ned gennem et træ uden at forlade overskriftslinjen.

## Listens rækker er rigtige filhåndteringsrækker

Hver fil og mappe på listen opfører sig som sin række i filstifinderen:

- **Højreklik** for den samme genvejsmenu — *Ny note* / *Ny mappe* på en mappe, *Åbn i ny fane* / *Omdøb…* / *Slet* på en fil — inklusive punkter, som andre plugins føjer til filmenuer.
- **Træk** en række hen, hvor Obsidian tager imod en fil: ind i en editor for at indsætte et link, over på en mappe i filstifinderen for at flytte den, over på fanerækken for at åbne den.

Menuteksterne kommer fra Obsidians egne oversættelser, så de passer til resten af programmet på alle sprog.

## At skrive en sti

- Et klik på det **tomme område** før eller efter stien åbner et tekstfelt forudfyldt med hele stien og helt markeret — skriv hen over den, eller redigér på stedet. (Et klik på selve filnavnet vælger kun filnavnet; se ovenfor.)
- At skrive, mens stien vises, laver det sidste segment om til et lille felt med levende autofuldførelse afgrænset til den aktuelle mappe.
- `/` bekræfter det aktuelle segment og går ned i det.
- <kbd>Backspace</kbd> i et tomt felt træder tilbage ud til den overordnede mappe og åbner dens navn igen med markøren til sidst.
- <kbd>Enter</kbd> bekræfter; <kbd>Esc</kbd> eller et klik et andet sted annullerer tilbage til filens rigtige sti.

Feltet er helt uden staffage — ingen kasse, ingen kant — så det læses som selve stiteksten, og det vokser af sig selv, mens du skriver.

## Navigation rører aldrig den åbne fil

I standardtilstanden (navigation) bliver den åbne note **aldrig** omdøbt eller flyttet.

- En sti, der peger på en eksisterende fil, åbner den.
- En sti, der ikke findes endnu, spørger *"Opret ny fil?"*. At bekræfte opretter de manglende mapper og filen; at annullere gør slet ingenting.

## <kbd>Ctrl</kbd> — ny fane, og kopiér i stedet for at flytte

At holde <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> på macOS) nede, mens du vælger en fil fra listen, eller mens du trykker <kbd>Enter</kbd> på en sti, sender resultatet til en **ny fane** i stedet for til denne:

| | Uden tast | Med <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Vælg eller skriv en eksisterende fil | Åbnes her | Åbnes i en ny fane |
| Skriv en sti, der ikke findes | Spørger, åbner derefter her | Spørger, åbner derefter i en ny fane |
| Bekræft en sti i omdøb-/flyttetilstand | **Flytter** noten derhen | **Kopierer** den derhen og åbner kopien i en ny fane |

Tasten læses med Obsidians egen regel, så den opfører sig præcis som på et link eller en række i filstifinderen — midterklik betyder også "ny fane", <kbd>Ctrl</kbd>+<kbd>Alt</kbd> betyder en opdeling, og <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> et nyt vindue.

At kopiere nægter at overskrive, præcis som at flytte gør — også hen over notens egen sti, hvor der ikke er noget fornuftigt at kopiere.

## At browse uden for boksen

**Dette er slået fra som standard.** Slå først **Adgang til eksterne filer** til i indstillingerne — at læse og skrive uden for boksen er det eneste, dette plugin gør, som Obsidian selv ikke gør, så man vælger det til frem for fra. Med det slået fra viser boksnavnet blot din boks i filstifinderen, og intet her kigger nogensinde ud over den.

Et klik på **boksnavnet** (eller på 🏠-ikonet, når *Vis boksens navn* er slået fra) åbner en liste over steder frem for indhold:

- **Dine andre bokse**, læst fra Obsidians eget register, senest åbnede først, hver under Obsidians eget boksikon — det, applikationen selv bruger til bokskommandoer. Den boks, du allerede har åben, får et hus i stedet: det er der, linjen begynder som standard, ikke et sted at tage hen.
- **Hjemmemappen**, under sit eget kontonavn, markeret med et `~`. Lucide har ingen tilde, så denne tegnes af plugin'et på Lucides eget 24×24-gitter med samme streg — et ikon, sættet mangler, frem for et skrifttegn blandt ikoner.
- **Filsystemets rod**, mærket `root` — uoversat, for sådan hedder den på ethvert system — frem for `/`, som ville læses som et tomt trin ved siden af det skilletegn, der følger.
- **Monterede drev**, med et ikon pr. type, hvor det er billigt at afgøre: netværksdrev, optiske skiver, disketter og flytbare medier får deres eget; alt andet får et generisk drev. På Windows vises drev som `C:` med et generisk ikon — diskenavne og præcise typer kræver WMI, hvilket bevidst ikke gøres.

At vælge en anden boks **skifter ikke Obsidian over til den.** Alt, du har åbent, forbliver åbent; stilinjen begynder blot at browse der. Det er hele pointen med at have det på stilinjen frem for at overlade det til sidepanelets boksskifter.

### Mens du er udenfor

Stien **begynder ved det sted, du valgte**, ikke ved maskinens mappestruktur — vælg `Arkiv`, og linjen lyder `Arkiv / noter / …`, ikke `/home/dig/Bokse/Arkiv/noter/…`. Det indledende segment bærer et ikon for, hvad det er (boks, hjem, drev), og <kbd>Backspace</kbd> standser der frem for at vandre videre op i resten af filsystemet. Med *Vis boksens navn* slået fra er det segment ikonet alene — indstillingen handler om linjens indledende segment, uanset hvilken boks det navngiver, ikke kun din egen.

Stilinjen er **indrammet i fejlfarven** — den samme ring, som omdøbningstilstanden tegner — så længe den peger uden for din boks. Den markerer en vedvarende tilstand, ikke et øjeblik: så længe den er der, gælder ingen af Obsidians egne håndteringer det, linjen viser, og skrivning er låst, indtil du siger andet.

Browsing virker ellers som derinde: brikker, skilletegn, skrivning, autofuldførelse, <kbd>Backspace</kbd> for at træde ud. De samme synlighedsregler gælder også, så filendelser, der ikke understøttes, kræver stadig Obsidians *Vis alle filtyper*, og skjulte filer kræver stadig dette plugins indstilling.

**Højreklik og træk** virker ikke derude — det er filstifinderens egne håndteringer, og de kræver en fil, boksen kender til.

### At skrive uden for boksen

Alt, der skriver, er **låst som standard.** En **hængelås** dukker op ved siden af omdøbningsknappen i overskriften, så længe linjen peger uden for din boks; at trykke på den åbner låsen og gør den rød, i takt med ringen omkring linjen.

Tilladelsen gives **til et sted, ikke til et øjeblik**: den overlever alt, du ville gøre, mens du arbejder ét sted — at afslutte en flytning, at klikke væk fra feltet, at åbne en fil — og ophører, når du vælger en anden boks, et andet drev eller roden fra listen, når linjen vender tilbage til en boksfil, eller når du trykker på hængelåsen igen. Så en række flytninger inden for én mappe koster ét tryk, ikke ét pr. fil.

Med hængelåsen åben opfører stilinjen sig derude, som den gør derinde:

| Handling | Resultat |
| --- | --- |
| Skriv et navn, der ikke findes, <kbd>Enter</kbd> | Samme "opret den?"-spørgsmål som derinde; manglende mapper oprettes også. Et navn uden filendelse bliver en `.md`, præcis som derinde |
| Omdøb-/flyttetilstand, skriv et nyt navn | Omdøber den fil, linjen viser. Et navn uden filendelse beholder filens egen — herude rummer en mappe alle slags filer, og en omdøbning skal ikke stiltiende gøre en `.png` til en `.md` |
| Omdøb-/flyttetilstand, browse videre, vælg **behold dette navn** | Flytter den derhen under det navn, den allerede har |
| Hold <kbd>Ctrl</kbd> nede ved en af dem | Kopierer i stedet for at flytte og åbner kopien i en ny fane |

Låst melder alle disse, hvad der blokerer dem, i stedet for at ske. Intet bliver nogensinde overskrevet i nogen af tilstandene: et mål, der allerede findes, afvises, og afvisningen er filsystemets egen (`COPYFILE_EXCL`, en eksklusiv oprettelse) frem for et tjek, der kunne tabe et kapløb. En flytning på tværs af filsystemer — fra en USB-nøgle, fra et netværksdrev — falder tilbage på kopiér-derefter-slet, og originalen fjernes først, når kopien er landet.

**Én ting låser hængelåsen ikke op: at flytte en note *ud* af din boks.** `fileManager` kan ikke følge en fil over den grænse, så hvert link, der peger på noten, ville gå stiltiende i stykker, og Obsidian ville simpelthen se den forsvinde. At holde <kbd>Ctrl</kbd> nede kopierer den ud i stedet, hvilket slet ikke har det problem, og beskeden siger det. Den anden vej — at bringe en fil udefra *ind* i boksen — er heller ikke koblet til endnu.

### At åbne en ekstern fil

Obsidians editor virker kun på filer inde i boksen, så en ekstern fil **kan ikke** åbnes som en rigtig note med links, tilbagelinks og resten — det er en begrænsning i programmet, ikke i dette plugin. At vælge en åbner i stedet en **forhåndsvisning**, skrivebeskyttet indtil du siger andet:

| Type | Vises som |
| --- | --- |
| `.md`, `.markdown` | Gengivet Markdown |
| Billeder, lyd, video, PDF | Indbygget afspiller/fremviser |
| Enhver anden **tekstfil** (`.json`, `.css`, `.log`, `.txt`, …) | Ordret almindelig tekst |
| Binære formater uden fremviser | Overlades til *Åbn eksternt* |

Fremviseren har to læsninger af en fil, og da de udelukker hinanden, vises kun den, du ville skifte **til**:

| | Hvad den gør | Standard for |
| --- | --- | --- |
| **Vis som Markdown** | Gengiver filen som en note, skrivebeskyttet | `.md`, `.markdown` |
| **Rediger som tekst** | Kilden, redigerbar | alt andet |

Uden for boksen er **Rediger som tekst** også det tryk, der ophæver skrivebeskyttelsen — tilstanden og tilladelsen er én handling frem for to knapper at holde styr på. Den er rødtonet, **hver gang et tryk ville ophæve skrivebeskyttelsen**, uanset om du klargør redigering på stedet eller kommer direkte fra den gengivne visning; inde i boksen er der intet at låse op, så der er den almindelig. **Vis som Markdown** får et let accentfarvet skær — den samme tone, Obsidian giver markeret tekst — hvilket markerer den som vejen tilbage frem for en opfordring.

Fordi knappen følger *redigeringen* frem for den rå tilstand, tilbyder en fil, der ligger skrivebeskyttet i tekstvisningen, stadig **Rediger som tekst**: det er trykket, der klargør den. En fil, der aldrig kan skrives i — forkortet eller ulæselig — siger **Vis som tekst** i stedet, for det er alt, trykket kan levere.

Standarderne vender den nyttige vej frem for den bogstavelige: et `#` i et shell-script er en kommentar, ikke en overskrift, så at gengive en `.log` som Markdown ville stiltiende sluge det. Begge standarder kan tilsidesættes pr. fil, og valget går ind i fanens historik, så frem/tilbage og et genåbnet arbejdsområde beholder det — masser af noter bor i `.txt`-filer, og masser af `.md`-filer er lettere at læse som kilde.

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

- **Åbn i *(boks)*** — vises, når filen tilhører en af dine andre bokse. Overlader den til Obsidians egen URI-håndtering, som åbner den boks' vindue med noten i, som en rigtig redigerbar note. Dette vindue efterlades præcis, som det var; intet skifter under dig.
- **Vis som Markdown** / **Rediger som tekst** — de to læsninger; den anden ophæver også skrivebeskyttelsen uden for boksen.
- **Åbn eksternt** — overlader filen til skrivebordets standardprogram, inklusive de binære formater, denne fremviser ikke kan vise.

Intet uden for din boks skrives, medmindre du først trykker *Rediger som tekst*. Se afsnittet [Uden for boksen](README.da.md#uden-for-boksen) i README for den fulde redegørelse.

## De to advarselsfarver

| | Hvornår | Hvad det betyder |
| --- | --- | --- |
| **Rød** ring på stilinjen | Linjen peger uden for din boks | Obsidian kan ikke åbne det, der er der, som en note, og intet derude skrives, før du åbner hængelåsen. |
| **Orange** ring på stilinjen, orange rækker på listen | Filen er en teksttype, Obsidian ikke har en visning til | En advarsel. Obsidian ville overlade den til skrivebordets standardprogram; plugin'et viser den i stedet. |

**De to er uafhængige, og begge kan gælde på én gang** — en ekstern `.json` er uden for din boks *og* en type, Obsidian ikke har en editor til. I fremviseren optræder de som adskilte linjer, der hver kun siger deres eget. På stilinjen vinder rød, hvor begge gælder, for to ringe ville kun være støj.

Det orange niveau er bevidst smalt. Registrerede typer (Markdown, canvas, billeder, PDF, lyd, video) håndteres ordentligt og får intet. Binære filer får heller intet — du kommer ikke til at redigere en `.zip` i stykker ved et uheld. Tilbage er præcis faren: en `.json`, `.css` eller `.log`, som **Vis alle filtyper** har gjort synlig.

Rød vinder, hvor begge ville gælde; to ringe på én gang ville kun være støj.

## Omdøb-/flyttetilstand

Blyantknappen yderst til højre i overskriften — ved siden af visningsknappen, samme størrelse som de indbyggede knapper — slår omdøb-/flyttetilstanden til og fra. Overskriftslinjen indrammes så i accentfarven, præcis som ved omdøbning i filstifinderen. De samme klik og tastetryk bekræfter nu en flytning eller omdøbning via Obsidians `fileManager.renameFile`, så alle links til noten følger med.

Under omdøbningen:

- Det aktuelle filnavn fastgøres i hver mappes liste, så at flytte en note uden at omdøbe den er ét enkelt klik.
- Navne, der allerede er taget i målmappen, tones ned, men kan stadig vælges.
- Indtastningen valideres levende mod Obsidians egne omdøbningsregler — samme tegnsæt, samme beskeder, samme røde værktøjstip, du får ved omdøbning i filtræet — så et ulovligt navn eller et, der kolliderer, markeres, mens du skriver, og kan ikke bekræftes.
- Et klik uden for overskriftslinjen, eller at overskriften mister fokus, afslutter omdøbningstilstanden.

## Én tast til begge omdøbninger

Omdøbningskommandoen (<kbd>F2</kbd> som standard, eller det, du har bundet den om til) **skifter** mellem Obsidians omdøbning i den indlejrede titel og dette plugins stilinje med hele stien markeret. Hvis du har slået Obsidians indlejrede titel fra, bliver stilinjen det eneste mål, så tasten aldrig gør ingenting.

Dette virker ved at pakke kommandoen `workspace:edit-file-title` ind frem for at kapre tasten, så både at binde genvejen om og at køre kommandoen fra paletten virker uændret.

## Sådan farves listens rækker

| Farve | Betyder |
| --- | --- |
| **Lilla** | En note (`.md`, `.markdown`) — det, Obsidian åbner som en note, plukket ud af en mappe med blandet indhold |
| **Orange** | En teksttype, Obsidian ikke har en visning til; se [advarselsfarverne](#de-to-advarselsfarver) |
| **Nedtonet** | Uden for din boks, så boksens egen håndtering gælder ikke |
| **Blå** | Den note, du er i. Når du browser, er det dens egen række; i omdøb-/flyttetilstand står rækken *behold dette navn* i stedet — samme note begge veje |
| **Grå** | Kun i omdøb-/flyttetilstand: navnet er taget. Kan stadig vælges — at vælge et fylder feltet, hvor valideringen markerer kollisionen |

## Synlighedsregler

- Filer med filendelser, der ikke understøttes, dukker kun op på listerne, hvis Obsidians indstilling **Vis alle filtyper** er slået til.
- Listen viser højst 100 rækker — Obsidians egen grænse. Når en mappe har flere, siger den sidste række, hvor mange der blev udeladt; skriv videre for at indsnævre listen.
- Skjulte filer og mapper dukker kun op, hvis dette plugins indstilling **Vis skjulte filer** er slået til.
- **Overskrivningsbeskyttelsen virker ens uanset synlighed** — en skjult fil forhindrer dig stadig i at overskrive den.

## Snydeark

| Du vil… | Gør sådan |
| --- | --- |
| Åbne en mappe (dens note, eller vise den) | Klik skilletegnet **efter** den mappe |
| Bytte en mappe ud med et søskende | Klik mappens navn, skriv derefter eller vælg |
| Omdøbe eller omdirigere noten | Klik notens navn — filendelsen inklusive |
| Browse en mappes indhold | Klik mappens navn; listen viser dens forælder, så klik mappen **under** den, du vil have fat i |
| Skrive en mappe og alt under den om | **Dobbeltklik** mappens navn, skriv derefter |
| Redigere stien fra en mappe og nedefter | Klik mappens navn, derefter <kbd>End</kbd> eller <kbd>→</kbd> for at afmarkere |
| Hoppe til en fil ved at skrive dens sti | Klik filnavnet eller det tomme område, skriv, <kbd>Enter</kbd> |
| Åbne en fil i en ny fane i stedet | <kbd>Ctrl</kbd> mens du vælger den, eller <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| Kopiere noten et sted hen i stedet for at flytte den | Blyanten, derefter <kbd>Ctrl</kbd> mens du vælger eller bekræfter målet |
| Oprette en note på en sti, der ikke findes | Skriv stien, <kbd>Enter</kbd>, bekræft spørgsmålet |
| Gå ét niveau ned, mens du skriver | Skriv `/` |
| Gå ét niveau op, mens du skriver | <kbd>Backspace</kbd> i det tomme felt |
| Flytte eller omdøbe den åbne note | Klik blyanten, browse derefter eller skriv som ovenfor |
| Flytte uden at omdøbe | Blyanten → klik ind i målmappen → vælg det fastgjorte aktuelle filnavn |
| Omdøbe på stedet | <kbd>F2</kbd> to gange (første tryk går til den indlejrede titel, andet til overskriften) |
| Hoppe til en anden boks, hjemmemappen eller et drev | Klik boksnavnet |
| Åbne en fil uden for boksen | Boksnavnet → vælg et sted → browse → vælg filen (skrivebeskyttet indtil *Rediger som tekst*) |
| Annullere hvad som helst | <kbd>Esc</kbd>, eller klik uden for overskriftslinjen |

## Indstillinger

| Indstilling | Muligheder | Standard | Hvad den gør |
| --- | --- | --- | --- |
| **Justering** | Venstre / Centreret / Højre | Venstre | Hvor stien sidder i overskriftslinjen. *Centreret* svarer til Obsidians klassiske udseende. |
| **Skilletegn** | Ethvert tegn | `/` | Skilletegnet, der tegnes mellem segmenterne. Seks forvalg med ét klik (`/ > ▸ › \ •`) sidder foran tekstfeltet. |
| **Vis boksens navn** | Til / Fra | Til | Om boksen selv er stiens første segment. Slået fra bliver det segment et 🏠-ikon frem for at forsvinde, så stien stadig begynder et sted, der kan klikkes. |
| **Mappenavnet åbner listen** | Til / Fra | Til | Bytter om på, hvad et mappenavn og skilletegnet efter det gør — se [tabellen ovenfor](#stien). Med [Folder notes](obsidian://show-plugin?id=folder-notes) åbner skilletegnet mappenoter. Gælder aldrig i omdøb-/flyttetilstand. |
| **Vis skjulte filer** | Til / Fra | Fra | Om skjulte filer og mapper vises på listerne. Overskrivningsbeskyttelsen gælder under alle omstændigheder. |
| **Adgang til eksterne filer** | Til / Fra | **Fra** | Om boksnavnet åbner listen over steder. Slået fra kigger intet i plugin'et nogensinde ud over denne boks. |

## Udskiftning af ikonerne

Lure tegner tre ikoner: boksrodens ikon (når **Vis boksens navn** er slået fra), omdøb-/flytteknappen og hængelåsen, der styrer skrivning uden for boksen. Alle kan skiftes ud fra et tema eller et CSS-uddrag — sæt erstatningstegnet og skjul det medfølgende i én enkelt regel:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* Hængelåsen har to tilstande; `.is-active` er den åbne. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}

.lure-unlock-btn.is-active {
	--lure-icon-glyph: "🔓";
}
```

`--lure-icon-glyph` tager alt, hvad der er gyldigt i CSS `content`, så `url(...)` virker til et billede lige så vel som til et tekst- eller emojitegn. Lad `--lure-icon-svg` være for at beholde Lucide-ikonet og tegne dit tegn ved siden af det.
