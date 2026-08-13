<!-- Oversettelse av docs/usage.md — stand: commit 7b2691a.
     Maskinoversatt (Claude Opus 5), ikke gjennomgått av personer med
     norsk som morsmål. Programtilleggets etiketter kommer fra
     src/lang/translations.ts og Obsidians fra tekstene applikasjonen
     selv leverer, så de stemmer med det du ser på skjermen. -->

**Les dette på andre språk:** [English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · [Čeština](usage.cs.md) · [Dansk](usage.da.md) · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · [Bahasa Indonesia](usage.id.md) · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · **Norsk** · [Polski](usage.pl.md) · [Português](usage.pt.md) · [Português (Brasil)](usage.pt-BR.md) · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

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

Med [Folder notes](obsidian://show-plugin?id=folder-notes) installert åpner det samme klikket i stedet mappens notat. Det er det eneste mappenotat-tillegget som har vist seg å gjøre krav på stien i overskriften; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) og [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) håndterer mappenotater, men lytter ikke etter klikk på stien, så med dem viser skilletegnet mappen som vanlig. Se [kompatibilitet](../compatibility.md#verified-against).

Et skilletegn er **understreket bare når mappen foran det faktisk har et mappenotat**, så understrekingen er et løfte om at det finnes noe å åpne. Hvert skilletegn kan klikkes uansett — et uten understreking viser og utvider mappen sin i sidepanelet, noe pekeren fortsatt signaliserer. Understrekingen forlater mappenavnet samtidig: med byttet på åpner navnet listen, så å merke det som lenken til notatet ville vært en løgn.

**Gi nytt navn-/flyttemodus overstyrer begge**, uansett hva innstillingen sier: ingenting på linjen åpner en mappe mens en flytting venter, for å åpne en ville forlate flyttingen. Mappenavn velges for redigering og skilletegn går ned — begge er måter å peke ut målet på — og understrekingen forsvinner for å vise at åpning er satt på vent.

**Hvelvets rot** er det eneste segmentet som ikke er et stisegment. Det har ingen forelder å liste søsken fra, så i stedet åpner det [listen over steder](#å-bla-utenfor-hvelvet) — de andre hvelvene dine, hjemmemappen, filsystemets rot og monterte stasjoner.

## Klikke på et segment: bytt det ut med et søsken

Et klikk på et mappenavn velger **den mappens navn** i et tekstfelt og åpner en liste over mappen **ett nivå opp** — forelderen. Å skrive eller velge en rad bytter denne mappen ut med et søsken og lar alt under den være urørt, så `Prosjekter/2026/Oppstart.md` → klikk `2026` → velg `2025` gir deg `Prosjekter/2025/Oppstart.md`.

Et klikk på **notatets navn** fungerer på samme måte mot dets egen mappe, og velger filnavnet **inkludert filendelsen** — å gi et notat nytt navn eller peke det et annet sted betyr som regel at den også endres.

Klikket på mappen har allerede valgt ett segment, så **ett klikk til** utvider merkingen til hele linjen — den mappen *og* alt under den — og det du skriver erstatter da resten av stien på én gang. Fungerer likt i navigasjons- og gi nytt navn-/flyttemodus.

Det gjelder bare som en fortsettelse av klikket som åpnet feltet. Når du først har brukt feltet, oppfører det seg som et hvilket som helst annet tekstfelt: klikk plasserer markøren, dobbeltklikk tar et ord, trippelklikk tar linjen.

Uansett forblir resten av stien synlig rundt feltet, som brikker foran det og som umerket tekst etter det, så den fulle stien aldri forsvinner fra overskriften. Skriv for å erstatte merkingen, eller trykk <kbd>End</kbd> / <kbd>→</kbd> for å beholde den og redigere videre derfra. Listen viser hele mappen uansett hva som er forhåndsutfylt; den begynner ikke å filtrere før du faktisk skriver.

## Nedstigning via skilletegn

Et klikk på et skilletegn (med **Mappenavnet åpner listen** av) går ned i mappen foran det: listen viser *den* mappens innhold, og resten av stien åpnes merket i feltet. Å velge en mappe føyer den til stien og åpner straks neste liste, så du kan klikke deg nedover i et tre uten å forlate overskriftslinjen.

## Radene i listen er ekte filbehandlerrader

Hver fil og mappe i listen oppfører seg som sin rad i filutforskeren:

- **Høyreklikk** for den samme hurtigmenyen — *Nytt notat* / *Ny mappe* på en mappe, *Åpne i ny fane* / *Gi nytt navn…* / *Slett* på en fil — inkludert punkter andre programtillegg føyer til filmenyer.
- **Dra** en rad dit Obsidian tar imot en fil: inn i en redigerer for å sette inn en lenke, over på en mappe i filutforskeren for å flytte den, over på faneraden for å åpne den.

Menytekstene kommer fra Obsidians egne oversettelser, så de stemmer med resten av programmet på alle språk.

## Å skrive en sti

- Et klikk på det **tomme området** foran eller etter stien åpner et tekstfelt forhåndsutfylt med hele stien og helt merket — skriv over den, eller rediger på stedet. (Et klikk på selve filnavnet velger bare filnavnet; se ovenfor.)
- Å skrive mens stien vises gjør det siste segmentet om til et lite felt med levende autofullføring avgrenset til den gjeldende mappen.
- `/` bekrefter det gjeldende segmentet og går ned i det.
- <kbd>Backspace</kbd> i et tomt felt trer tilbake ut til den overordnede mappen og åpner navnet dens igjen med markøren til slutt.
- <kbd>Enter</kbd> bekrefter; <kbd>Esc</kbd> eller et klikk et annet sted avbryter tilbake til filens virkelige sti.

Feltet er helt uten staffasje — ingen boks, ingen kant — så det leses som selve stiteksten, og det vokser av seg selv mens du skriver.

## Navigering rører aldri den åpne filen

I standardmodus (navigering) får det åpne notatet **aldri** nytt navn og blir aldri flyttet.

- En sti som peker på en eksisterende fil, åpner den.
- En sti som ikke finnes ennå, spør *"Opprette ny fil?"*. Å bekrefte oppretter mappene som mangler og filen; å avbryte gjør ingenting i det hele tatt.

## <kbd>Ctrl</kbd> — ny fane, og kopier i stedet for å flytte

Å holde <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> på macOS) mens du velger en fil fra listen, eller mens du trykker <kbd>Enter</kbd> på en sti, sender resultatet til en **ny fane** i stedet for til denne:

| | Uten tast | Med <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Velg eller skriv en eksisterende fil | Åpnes her | Åpnes i en ny fane |
| Skriv en sti som ikke finnes | Spør, åpner deretter her | Spør, åpner deretter i en ny fane |
| Bekreft en sti i gi nytt navn-/flyttemodus | **Flytter** notatet dit | **Kopierer** det dit og åpner kopien i en ny fane |

Tasten leses med Obsidians egen regel, så den oppfører seg nøyaktig som på en lenke eller en rad i filutforskeren — midtklikk betyr også "ny fane", <kbd>Ctrl</kbd>+<kbd>Alt</kbd> betyr en deling, og <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> et nytt vindu.

Å kopiere nekter å overskrive, akkurat som å flytte gjør — også over notatets egen sti, der det ikke er noe fornuftig å kopiere.

## Å bla utenfor hvelvet

**Dette er av som standard.** Slå først på **Tilgang til eksterne filer** i innstillingene — å lese og skrive utenfor hvelvet er det eneste dette programtillegget gjør som Obsidian selv ikke gjør, så man velger det på framfor av. Med det av viser hvelvnavnet ganske enkelt hvelvet ditt i filutforskeren, og ingenting her ser noen gang forbi det.

Et klikk på **hvelvnavnet** (eller på 🏠-ikonet, når *Vis hvelvets navn* er av) åpner en liste over steder framfor innhold:

- **De andre hvelvene dine**, lest fra Obsidians eget register, sist åpnede først, hvert under Obsidians eget hvelvikon — det applikasjonen selv bruker til hvelvkommandoer. Hvelvet du allerede har åpent får et hus i stedet: det er der linjen begynner som standard, ikke et sted å dra.
- **Hjemmemappen**, under sitt eget kontonavn, merket med en `~`. Lucide har ingen tilde, så denne tegnes av tillegget på Lucides eget 24×24-rutenett med samme strek — et ikon settet mangler framfor et skrifttegn blant ikoner.
- **Filsystemets rot**, merket `root` — uoversatt, for det heter det på ethvert system — framfor `/`, som ville leses som et tomt steg ved siden av skilletegnet som følger.
- **Monterte stasjoner**, med et ikon per type der det er billig å avgjøre: nettverksressurser, optiske plater, disketter og flyttbare medier får sine egne; alt annet får en generisk stasjon. På Windows vises stasjoner som `C:` med et generisk ikon — volumnavn og presise typer krever WMI, noe som bevisst ikke gjøres.

Å velge et annet hvelv **bytter ikke Obsidian over til det.** Alt du har åpent forblir åpent; stilinjen begynner bare å bla der. Det er hele poenget med å ha det på stilinjen framfor å overlate det til sidepanelets hvelvbytter.

### Mens du er utenfor

Stien **begynner ved stedet du valgte**, ikke ved maskinens mappestruktur — velg `Arkiv`, og linjen lyder `Arkiv / notater / …`, ikke `/home/deg/Hvelv/Arkiv/notater/…`. Det innledende segmentet bærer et ikon for hva det er (hvelv, hjem, stasjon), og <kbd>Backspace</kbd> stopper der framfor å vandre videre opp i resten av filsystemet. Med *Vis hvelvets navn* av er det segmentet ikonet alene — innstillingen handler om linjens innledende segment uansett hvilket hvelv det navngir, ikke bare ditt eget.

Stilinjen er **innrammet i feilfargen** — den samme ringen navnebyttemodus tegner — så lenge den peker utenfor hvelvet ditt. Den markerer en vedvarende tilstand, ikke et øyeblikk: så lenge den er der, gjelder ingen av Obsidians egne håndteringer det linjen viser, og skriving er låst til du sier noe annet.

Blaingen fungerer ellers som der inne: brikker, skilletegn, skriving, autofullføring, <kbd>Backspace</kbd> for å tre ut. De samme synlighetsreglene gjelder også, så filendelser som ikke støttes krever fortsatt Obsidians *Detect all file extensions*, og skjulte filer krever fortsatt dette tilleggets innstilling.

**Høyreklikk og dra** fungerer ikke der ute — det er filutforskerens egne håndterere, og de trenger en fil hvelvet kjenner til.

### Å skrive utenfor hvelvet

Alt som skriver er **låst som standard.** En **hengelås** dukker opp ved siden av navnebytteknappen i overskriften så lenge linjen peker utenfor hvelvet ditt; å trykke på den åpner låsen og gjør den rød, i takt med ringen rundt linjen.

Tillatelsen gis **til et sted, ikke til et øyeblikk**: den overlever alt du ville gjort mens du arbeider ett sted — å fullføre en flytting, å klikke bort fra feltet, å åpne en fil — og opphører når du velger et annet hvelv, en annen stasjon eller roten fra listen, når linjen vender tilbake til en hvelvfil, eller når du trykker på hengelåsen igjen. Så en rekke flyttinger innenfor én mappe koster ett trykk, ikke ett per fil.

Med hengelåsen åpen oppfører stilinjen seg der ute som den gjør der inne:

| Handling | Resultat |
| --- | --- |
| Skriv et navn som ikke finnes, <kbd>Enter</kbd> | Samme "opprette den?"-spørsmål som der inne; mapper som mangler opprettes også. Et navn uten filendelse blir en `.md`, akkurat som der inne |
| Gi nytt navn-/flyttemodus, skriv et nytt navn | Gir filen linjen viser nytt navn. Et navn uten filendelse beholder filens egen — her ute rommer en mappe alle slags filer, og et navnebytte skal ikke stille om en `.png` til en `.md` i det stille |
| Gi nytt navn-/flyttemodus, bla videre, velg **behold dette navnet** | Flytter den dit under navnet den allerede har |
| Hold <kbd>Ctrl</kbd> på en av dem | Kopierer i stedet for å flytte, og åpner kopien i en ny fane |

Låst melder alle disse hva som blokkerer dem i stedet for å skje. Ingenting blir noen gang overskrevet i noen av tilstandene: et mål som allerede finnes avvises, og avvisningen er filsystemets egen (`COPYFILE_EXCL`, en eksklusiv opprettelse) framfor en sjekk som kunne tape et kappløp. En flytting på tvers av filsystemer — fra en USB-pinne, fra en nettverksressurs — faller tilbake på kopier-så-slett, og originalen fjernes først når kopien har landet.

**Én ting hengelåsen ikke låser opp: å flytte et notat *ut* av hvelvet ditt.** `fileManager` kan ikke følge en fil over den grensen, så hver lenke som peker på notatet ville gå i stykker i det stille, og Obsidian ville rett og slett se det forsvinne. Å holde <kbd>Ctrl</kbd> kopierer det ut i stedet, noe som ikke har det problemet i det hele tatt, og meldingen sier det. Den andre veien — å ta en fil utenfra *inn* i hvelvet — er heller ikke koblet opp ennå.

### Å åpne en ekstern fil

Obsidians redigerer fungerer bare på filer inne i hvelvet, så en ekstern fil **kan ikke** åpnes som et ekte notat med lenker, tilbakelenker og resten — det er en begrensning i programmet, ikke i dette tillegget. Å velge en åpner i stedet en **forhåndsvisning**, skrivebeskyttet til du sier noe annet:

| Type | Vises som |
| --- | --- |
| `.md`, `.markdown` | Gjengitt Markdown |
| Bilder, lyd, video, PDF | Innebygd spiller/viser |
| Enhver annen **tekstfil** (`.json`, `.css`, `.log`, `.txt`, …) | Ordrett ren tekst |
| Binære formater uten viser | Overlates til *Åpne eksternt* |

Viseren har to lesninger av en fil, og siden de utelukker hverandre vises bare den du ville byttet **til**:

| | Hva den gjør | Standard for |
| --- | --- | --- |
| **Vis som Markdown** | Gjengir filen som et notat, skrivebeskyttet | `.md`, `.markdown` |
| **Rediger som tekst** | Kilden, redigerbar | alt annet |

Utenfor hvelvet er **Rediger som tekst** også trykket som opphever skrivebeskyttelsen — modusen og tillatelsen er én handling framfor to knapper å holde styr på. Den er rødtonet **hver gang et trykk ville opphevet skrivebeskyttelsen**, enten du klargjør redigering på stedet eller kommer rett fra den gjengitte visningen; inne i hvelvet er det ingenting å låse opp, så der er den vanlig. **Vis som Markdown** får et lett aksentfarget skjær — den samme tonen Obsidian gir merket tekst — som merker den som veien tilbake framfor en oppfordring.

Fordi knappen følger *redigeringen* framfor den rå modusen, tilbyr en fil som ligger skrivebeskyttet i tekstvisningen fortsatt **Rediger som tekst**: det er trykket som klargjør den. En fil som aldri kan skrives i — forkortet eller uleselig — sier **Vis som tekst** i stedet, siden det er alt trykket kan levere.

Standardene vender den nyttige veien framfor den bokstavelige: en `#` i et skallskript er en kommentar, ikke en overskrift, så å gjengi en `.log` som Markdown ville svelge den i det stille. Begge standardene kan overstyres per fil, og valget går inn i fanens historikk, så fram/tilbake og et gjenåpnet arbeidsområde beholder det — mange notater bor i `.txt`-filer, og mange `.md`-filer er lettere å lese som kilde.

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

- **Åpne i *(hvelv)*** — vises når filen tilhører et av de andre hvelvene dine. Overlater den til Obsidians egen URI-håndterer, som åpner det hvelvets vindu med notatet i, som et ekte redigerbart notat. Dette vinduet etterlates nøyaktig som det var; ingenting bytter under deg.
- **Vis som Markdown** / **Rediger som tekst** — de to lesningene; den andre opphever også skrivebeskyttelsen utenfor hvelvet.
- **Åpne eksternt** — overlater filen til skrivebordets standardprogram, inkludert de binære formatene denne viseren ikke kan vise.

Ingenting utenfor hvelvet ditt skrives med mindre du trykker *Rediger som tekst* først. Se avsnittet [Utenfor hvelvet](README.no.md#utenfor-hvelvet) i README for hele redegjørelsen.

## De to varselfargene

| | Når | Hva det betyr |
| --- | --- | --- |
| **Rød** ring på stilinjen | Linjen peker utenfor hvelvet ditt | Obsidian kan ikke åpne det som er der som et notat, og ingenting der ute skrives før du åpner hengelåsen. |
| **Oransje** ring på stilinjen, oransje rader i listen | Filen er en teksttype Obsidian ikke har en visning for | En advarsel. Obsidian ville overlatt den til skrivebordets standardprogram; tillegget viser den i stedet. |

**De to er uavhengige, og begge kan gjelde samtidig** — en ekstern `.json` er utenfor hvelvet ditt *og* en type Obsidian ikke har en redigerer for. I viseren opptrer de som atskilte linjer, hver som bare sier sitt eget. På stilinjen vinner rødt der begge gjelder, siden to ringer bare ville vært støy.

Det oransje nivået er bevisst smalt. Registrerte typer (Markdown, canvas, bilder, PDF, lyd, video) håndteres ordentlig og får ingenting. Binære filer får heller ingenting — du kommer ikke til å redigere en `.zip` i stykker ved et uhell. Igjen står nøyaktig faren: en `.json`, `.css` eller `.log` som **Detect all file extensions** har gjort synlig.

Rødt vinner der begge ville gjeldt; to ringer på én gang ville bare vært støy.

## Gi nytt navn-/flyttemodus

Blyantknappen ytterst til høyre i overskriften — ved siden av visningsmodusknappen, samme størrelse som de innebygde knappene — slår gi nytt navn-/flyttemodus av og på. Overskriftslinjen rammes da inn i aksentfargen, akkurat som ved navnebytte i filutforskeren. De samme klikkene og tastetrykkene bekrefter nå en flytting eller et navnebytte via Obsidians `fileManager.renameFile`, så alle lenker til notatet følger med.

Under navnebyttet:

- Det gjeldende filnavnet festes i hver mappes liste, så å flytte et notat uten å gi det nytt navn er ett enkelt klikk.
- Navn som allerede er tatt i målmappen tones ned, men kan fortsatt velges.
- Inndataene valideres levende mot Obsidians egne navnebytteregler — samme tegnsett, samme meldinger, samme røde verktøytips du får ved navnebytte i filtreet — så et ulovlig navn eller et som kolliderer merkes mens du skriver og kan ikke bekreftes.
- Et klikk utenfor overskriftslinjen, eller at overskriften mister fokus, avslutter navnebyttemodus.

## Én tast for begge navnebyttene

Navnebyttekommandoen (<kbd>F2</kbd> som standard, eller det du har bundet den om til) **veksler** mellom Obsidians navnebytte i den innebygde tittelen og dette tilleggets stilinje med hele stien merket. Hvis du har slått av Obsidians innebygde tittel, blir stilinjen det eneste målet, så tasten aldri gjør ingenting.

Dette fungerer ved å pakke inn kommandoen `workspace:edit-file-title` framfor å kapre tasten, så både å binde om hurtigtasten og å kjøre kommandoen fra paletten fungerer uendret.

## Slik fargelegges radene i listen

| Farge | Betyr |
| --- | --- |
| **Lilla** | Et notat (`.md`, `.markdown`) — det Obsidian åpner som et notat, plukket ut av en mappe med blandet innhold |
| **Oransje** | En teksttype Obsidian ikke har en visning for; se [varselfargene](#de-to-varselfargene) |
| **Nedtonet** | Utenfor hvelvet ditt, så hvelvets egen håndtering gjelder ikke |
| **Blå** | Notatet du er i. Når du blar, er det dets egen rad; i gi nytt navn-/flyttemodus står raden *behold dette navnet* i stedet — samme notat begge veier |
| **Grå** | Bare i gi nytt navn-/flyttemodus: navnet er tatt. Kan fortsatt velges — å velge et fyller feltet, der valideringen merker kollisjonen |

## Synlighetsregler

- Filer med filendelser som ikke støttes dukker bare opp i listene hvis Obsidians innstilling **Detect all file extensions** er på.
- Listen viser høyst 100 rader — Obsidians egen grense. Når en mappe har flere, sier den siste raden hvor mange som ble utelatt; skriv videre for å snevre inn listen.
- Skjulte filer og mapper dukker bare opp hvis dette tilleggets innstilling **Vis skjulte filer** er på.
- **Overskrivingsbeskyttelsen fungerer likt uansett synlighet** — en skjult fil hindrer deg fortsatt i å overskrive den.

## Juksekort

| Du vil… | Gjør slik |
| --- | --- |
| Åpne en mappe (notatet dens, eller vise den) | Klikk skilletegnet **etter** den mappen |
| Bytte ut en mappe med et søsken | Klikk mappens navn, skriv deretter eller velg |
| Gi notatet nytt navn eller peke det et annet sted | Klikk notatets navn — filendelsen inkludert |
| Bla i en mappes innhold | Klikk mappens navn; listen viser forelderen, så klikk mappen **under** den du vil til |
| Skrive om en mappe og alt under den | **Dobbeltklikk** mappens navn, skriv deretter |
| Redigere stien fra en mappe og nedover | Klikk mappens navn, deretter <kbd>End</kbd> eller <kbd>→</kbd> for å oppheve merkingen |
| Hoppe til en fil ved å skrive stien | Klikk filnavnet eller det tomme området, skriv, <kbd>Enter</kbd> |
| Åpne en fil i en ny fane i stedet | <kbd>Ctrl</kbd> mens du velger den, eller <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| Kopiere notatet et sted framfor å flytte det | Blyanten, deretter <kbd>Ctrl</kbd> mens du velger eller bekrefter målet |
| Opprette et notat på en sti som ikke finnes | Skriv stien, <kbd>Enter</kbd>, bekreft spørsmålet |
| Gå ett nivå ned mens du skriver | Skriv `/` |
| Gå ett nivå opp mens du skriver | <kbd>Backspace</kbd> i det tomme feltet |
| Flytte eller gi det åpne notatet nytt navn | Klikk blyanten, bla deretter eller skriv som ovenfor |
| Flytte uten å gi nytt navn | Blyanten → klikk inn i målmappen → velg det festede gjeldende filnavnet |
| Gi nytt navn på stedet | <kbd>F2</kbd> to ganger (første trykk går til den innebygde tittelen, andre til overskriften) |
| Hoppe til et annet hvelv, hjemmemappen eller en stasjon | Klikk hvelvnavnet |
| Åpne en fil utenfor hvelvet | Hvelvnavnet → velg et sted → bla → velg filen (skrivebeskyttet til *Rediger som tekst*) |
| Avbryte hva som helst | <kbd>Esc</kbd>, eller klikk utenfor overskriftslinjen |

## Innstillinger

| Innstilling | Alternativer | Standard | Hva den gjør |
| --- | --- | --- | --- |
| **Justering** | Venstre / Midtstilt / Høyre | Venstre | Hvor stien sitter i overskriftslinjen. *Midtstilt* svarer til Obsidians klassiske utseende. |
| **Skilletegn** | Et hvilket som helst tegn | `/` | Skilletegnet som tegnes mellom segmentene. Seks forvalg med ett klikk (`/ > ▸ › \ •`) sitter foran tekstfeltet. |
| **Vis hvelvets navn** | På / Av | På | Om hvelvet selv er stiens første segment. Slått av blir det segmentet et 🏠-ikon framfor å forsvinne, så stien begynner fortsatt et sted som kan klikkes. |
| **Mappenavnet åpner listen** | På / Av | På | Bytter om på hva et mappenavn og skilletegnet etter det gjør — se [tabellen ovenfor](#stien). Med [Folder notes](obsidian://show-plugin?id=folder-notes) åpner skilletegnet mappenotater. Gjelder aldri i gi nytt navn-/flyttemodus. |
| **Vis skjulte filer** | På / Av | Av | Om skjulte filer og mapper vises i listene. Overskrivingsbeskyttelsen gjelder uansett. |
| **Tilgang til eksterne filer** | På / Av | **Av** | Om hvelvnavnet åpner listen over steder. Slått av ser ingenting i tillegget noen gang forbi dette hvelvet. |

## Bytte ut ikonene

Lure tegner tre ikoner: hvelvrotens ikon (når **Vis hvelvets navn** er av), gi nytt navn-/flyttebryteren og hengelåsen som styrer skriving utenfor hvelvet. Alle kan byttes ut fra et tema eller et CSS-utdrag — sett erstatningstegnet og skjul det medfølgende i én enkelt regel:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* Hengelåsen har to tilstander; `.is-active` er den åpne. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}

.lure-unlock-btn.is-active {
	--lure-icon-glyph: "🔓";
}
```

`--lure-icon-glyph` tar alt som er gyldig i CSS `content`, så `url(...)` fungerer for et bilde like godt som for et tekst- eller emojitegn. La `--lure-icon-svg` være for å beholde Lucide-ikonet og tegne ditt tegn ved siden av det.
