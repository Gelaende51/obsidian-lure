<!-- Oversettelse av README.md — status: commit f133f41.
     Maskinoversatt (Claude Opus 5) og ikke gjennomlest av morsmålsbrukere.
     Rettelser er velkomne; den engelske README-filen er den gjeldende
     utgaven.

     «Third-party plugin» under Installasjon står med vilje på engelsk: det
     er ordrett det Obsidian selv viser i den norske utgaven, som ikke har
     oversatt den innstillingen. -->

[English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · **Norsk** · [Polski](README.pl.md) · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

Et [Obsidian](https://obsidian.md)-tillegg som gjør filnavnet i overskriftslinjen til et notat om til en klikkbar, redigerbar sti gjennom hele hvelvet — som adresselinjen i filbehandleren [Dolphin](https://apps.kde.org/dolphin/).

![Klikk på skilletegnet etter en mappe: pekeren hviler på det, og Filutforskeren har vist og utvidet den mappen](../images/breadcrumb.png)

Obsidian 1.8.7+ · kun datamaskin · AGPL-3.0

## AI-erklæring

- **Agent** — **Claude Opus 5** og **Claude Sonnet 5** (Anthropic, via Claude Code): skrev TypeScript-koden, CSS-en, alle 45 oversettelsessettene og dokumentasjonen. Oversettelsene er laget maskinelt og ikke gjennomlest av morsmålsbrukere.
- **Forbruk** — 3. august – 6. september 2026, 22 økter, \~13 378 svar: \~16,3 mill. genererte tokens, \~62,3 mill. sendte, \~4245,1 mill. gjenlesinger fra hurtiglageret (\~4323,6 mill. totalt).
- **Opphav** — modellen har lært av åpen kildekode, dokumentasjon og fellesskapstekster utgitt av andre. Mesteparten av æren tilfaller dem.
- **Forfatter** — Vault51: fastsatte hver funksjon, prøvde hver utgave i et ekte hvelv, styrte rettelsene og leste gjennom alle resultater.

## Funksjoner

- **Klikk på en mappe** for en liste over innholdet i mappen *over* — bytt ut én mappe med en nabomappe, og la resten av stien være. Navnet på notatet virker på samme måte, og merker navnet uten filendelsen.
- **Klikk på skilletegnet** etter en mappe for å vise og utvide den i Filutforskeren. Én innstilling bytter om på de to rollene.
- **Høyreklikk eller dra hvilken som helst oppføring** — Filutforskerens egen hurtigmeny, oppføring for oppføring, og dens draoppførsel. Stier utenfor hvelvet får en tilsvarende meny bygget for seg, helt ned til *Slett* via systemets papirkurv.
- **Klikk på filnavnet eller på tom plass** for å skrive en sti, med autofullføring. `/` går nedover, <kbd>Rettetast</kbd> går ett nivå ut, <kbd>Enter</kbd> bekrefter — og en sti som ikke finnes ennå, blir rett og slett opprettet, med en melding om hvor den havnet.
- **Listen åpner på oppføringen du står i**, og å gå gjennom den med piltastene eller pekeren fyller feltet med det du peker på. Forbi begge ender av listen får du tilbake det du hadde skrevet, og tar du pekeren bort fra den, går merkingen tilbake dit du var.
- **Blyantknappen på mappe** stiller de samme handlingene om til å gi nytt navn / flytte, med de samme kontrollene Obsidian selv gjør.
- **Hold <kbd>Ctrl</kbd>** for å åpne i en ny fane — eller, i gi nytt navn-/flyttemodus, for å kopiere notatet dit i stedet. Navnet på notatet og mappeleddene tar de samme tastekombinasjonene, og draing, som radene deres i Filutforskeren gjør.
- **Navn fullfører seg selv mens du skriver** — der navnene i mappen stemmer overens, vises overensstemmelsen etter markøren, merket; skriving sluker den bokstav for bokstav, <kbd>Tab</kbd> eller <kbd>→</kbd> tar den hel, <kbd>Rettetast</kbd> tar den tilbake. Listen fortsetter å filtrere etter det du skrev, ikke etter det som ble tilbudt.
- **<kbd>Tab</kbd> fullfører som et skall**: det forlenger det du skrev så langt navnene i mappen stemmer overens, går ett skritt av gangen mot ett av dem når de ikke gjør det, og går inn i en mappe først når bare ett navn står igjen. Forbi enden av stien utvider det i stedet merkingen: navn, navn med endelse, sti fra hvelvet, sti fra systemroten. <kbd>Skift</kbd>+<kbd>Tab</kbd> går samme vei tilbake — og merker det den gir tilbake i stedet for å slette det — og forbi starten fortsetter den oppover stien, og går så rundt til systemstien. Uansett vei ender en runde tilbake på stien du bygde.
- **Høyreklikk for å kopiere** — to ganger for et navn, tre ganger for alt til høyre for det, og på det tomme feltet for hele stien eller systemstien.
- **Dra et notat til en mappe i raden** for å flytte det dit, lenker og alt — målet står allerede på skjermen, så det blir ett dratak i stedet for en tur gjennom filtreet. Hvelvets navn virker også, til roten. En hel merking flytter som én, og en mappe som ikke kan ta imot det som tilbys, viser ingenting i stedet for å svikte etterpå.
- **Slipp tekst på raden for å skrive den ned** — på en mappe eller på hvelvets navn for å gi et nytt notat der navn, på notatets eget navn for å legge den til på slutten av det du leser. En fil fra skrivebordet virker på samme måte, og raden lyser blått der den ville lande.
- **Feltet bærer fargen til det det navngir** — den samme fargen raden har i listen, grått for et mappenotat — og **blir rødt** når ingenting svarer til det, så du ser før du trykker <kbd>Enter</kbd> om det åpner et notat eller lager et.
- **HTML-filer vises som sider**, i en ramme uten en eneste tillatelse — ingen skript, ingen nettverkstilgang, ingen egen opprinnelse — med stilarkene og bildene som ligger ved siden av filen tatt med, slik at en lagret side fortsatt ser ut som seg selv. Kildekoden er ett tastetrykk unna.
- **Skriv en URL** — `https://`, `obsidian://` eller en `file://`- eller prosentkodet sti — og den åpnes i stedet for å leses som et notatnavn. Nettadresser går til en fane i Obsidians egen nettviser der du har den på.
- **Lange stier kortes ned der bokstavene er overflødige** — aldri lenger enn det som skiller en mappe fra nabomappen, og jevnt heller enn en bokstav av gangen — og ruller først når det ikke er mer å presse sammen. Pek på et forkortet navn for å få det helt igjen.
- **<kbd>F2</kbd>** veksler mellom overskriften i notatet og stilinjen, åpner på navnet uten filendelsen og går ved videre trykk ut til de fullstendige stiene. Den passerer rent gjennom Obsidians dialog for å gi nytt navn når tittelen er rullet ut av syne. Kommandoen *Fokuser på stilinjen* står klar til å bindes om du vil ha adresselinjebevegelsen.
- **Klikk på hvelvets navn** for å bla i de andre hvelvene dine, hjemmemappen, roten av filsystemet og monterte stasjoner uten å bytte hvelv. Skrivebeskyttet til du åpner den røde hengelåsen som der ute tar plassen til bryteren for å gi nytt navn, og innrammet i feilfargen hele veien. Av som standard — se [utenfor hvelvet](#utenfor-hvelvet).
- **To varselnivåer** — rødt utenfor hvelvet, oransje for tekstfiler Obsidian ikke har noen redigerer for. Se [de to varselfargene](usage.no.md#de-to-varselfargene).
- **Temavennlige ikoner**, som kan byttes ut fra et CSS-utdrag — og **46 språk**: alle Obsidian leverer, pluss gresk og sanskrit, som det ikke har noen innstilling for. Velg ett for tillegget alene, eller følg Obsidians eget.
- **Innstillinger:** språk, justering, ferdige skilletegn, hvilket klikk som åpner listen, hvelvets navn, skjulte filer, filendelser.

![Den samme listen i gi nytt navn-/flyttemodus: filens nåværende navn festet øverst, nabomapper under, og eksisterende notater nedtonet](../images/dropdown.png)

*I gi nytt navn-/flyttemodus tilbyr den samme listen noe annet: notatets nåværende navn festet øverst, så det kan flyttes uten å få nytt navn; mapper å flytte det inn i; og navn som allerede er tatt nedtonet, slik at ingenting blir overskrevet ved et uhell.*

→ [Fullstendig veiledning](usage.no.md)

## Utenfor hvelvet

Obsidians utviklerregler krever at et tillegg forklarer all tilgang til filer utenfor hvelvet, så rett fram:

**Om det i det hele tatt gjør noe av dette.** Bare hvis du slår på **Tilgang til eksterne filer**, som er **av som standard**. Med innstillingen av finnes det ingen vei fra tillegget til en ekstern sti, og ingenting av koden nedenfor kjøres noen gang.

**Hva det leser.** Bare når du ber om det. Et klikk på hvelvets navn lister opp de andre hvelvene dine — lest fra Obsidians egen `obsidian.json` — pluss hjemmemappen, roten av filsystemet og monterte stasjoner (`/proc/mounts` på Linux, `/Volumes` på macOS, stasjonsbokstaver på Windows). Videre blaing derfra lister opp mappeinnhold, og å åpne en fil leser nettopp den filen.

**Hva det skriver.** Ingenting, før du trykker på en knapp som sier det. Det er to slike knapper, og hver dekker bare sitt eget område:

- Viserens knapp **Rediger som tekst** låser opp filen du har foran deg, nettopp den filen i nettopp den fanen. Deretter lagres endringene dine til den mens du skriver.
- Overskriftslinjens **røde hengelås**, som står på plassen til bryteren for å gi nytt navn mens stilinjen peker utenfor hvelvet, låser opp å opprette, gi nytt navn, flytte og slette på eksterne stier — og gir plassen tilbake til bryteren så snart den er åpnet. Den låses igjen når du kommer tilbake innenfor, og ved trykket som forlater modusen for å gi nytt navn, slik at tillatelsen aldri overlever mappen du ga den for.

Ingen av opplåsingene lagres i arbeidsflaten eller i innstillingene, så skriving er aldri spent på en fil du ikke husker at du åpnet. I ingen av tilstandene blir noe overskrevet — et mål som allerede finnes blir avvist, med filsystemets egen eksklusive opprettelse i stedet for en sjekk som kunne tape kappløpet.

Å flytte et notat *ut* av hvelvet er den ene skrivingen som koster noe ingenting kan gi tilbake: Obsidian oppdaterer bare lenker inne i hvelvet, så hver eneste lenke som peker på det notatet, blir brutt. Det tilbys bak en dialog som sier det og teller notatene det gjelder, og det skjer som kopier-så-slett gjennom Obsidians egen papirkurv, så det kan gjenopprettes like lett som et slettet notat. Å holde <kbd>Ctrl</kbd> kopierer det ut i stedet.

**Hvorfor.** Notatene du er ute etter ligger ofte i et annet hvelv, i en synkroniseringsmappe eller på en minnepinne, og Obsidians eget svar — bytt hvelv — lukker alt du hadde åpent. Dette lar deg gå og se uten å forlate noe, og rette en skrivefeil mens du likevel er der.

**Begrensningen.** Obsidians redigerer er bundet til filer inne i hvelvet, så en ekstern fil **kan ikke** åpnes som et ekte notat, med lenker, tilbakelenker og resten; det klarer ingen tillegg. Lure viser den i stedet i sin egen viser (Markdown, bilder, lyd, video, PDF), med *Åpne eksternt* for alt annet. Stilinjen forblir innrammet i feilfargen så lenge den peker utenfor hvelvet, og sporet begynner på stedet du valgte — et hvelvnavn, hjemmemappen, en stasjon — og ikke i mappestrukturen på maskinen.

## Installasjon

Oppført på [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure), men ennå ikke godkjent for nettleseren i appen — installer det på en av disse måtene:

**Manuelt:** last ned `main.js`, `manifest.json` og `styles.css` fra [siste utgivelse](https://github.com/Gelaende51/obsidian-lure/releases) til `<vault>/.obsidian/plugins/lure/`, og slå det så på under **Innstillinger → Third-party plugin**.

**BRAT:** legg til `Gelaende51/obsidian-lure` som betatillegg.

**Fra kildekode:** `npm install && npm run build` — se [utvikling](../development.md).

## Kompatibilitet

Ingen tillegg kreves. Kjerneutvidelsen **Filutforsker** er, hvis den er på, det som viser mapper i sidepanelet; uten den gjør de klikkene ingenting.

Prøvd mot de fellesskapstilleggene som deler overskriftslinjen til notatet eller svarer på mappeklikket — i begge innlastingsrekkefølger, hvert av dem på og av:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — skilletegnet åpner mappens notat i stedet for å vise mappen, slik at hvert ledd i stien blir et sted du kan gå, uansett hvor dypt: notatet finnes fram etter det tilleggets egen konvensjon i stedet for å overlates til det å svare. Det er også det eneste som offentliggjør en slik konvensjon; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) og [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) offentliggjør ingen og gjør aldri krav på stien i overskriftslinjen, så med dem viser skilletegnet mappen som vanlig.
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer) og [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — begge tegner i det samme elementet i overskriftslinjen; Lure beholder raden sin uansett hvem som lastes først, og å slå av den ene lar den andre være urørt.
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header), [Running Head](obsidian://show-plugin?id=running-head), [Crumbs](obsidian://show-plugin?id=crumbs-obsidian), [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — har sin egen stripe, og lever fint side om side.

Kun datamaskin — samspillsmodellen trenger å holde musen over, presise klikk og et tastatur. De fullstendige resultatene, hva som gjenstår å prøve, og sammenligningen med Quick Explorer og Breadcrumbs står i [kompatibilitet](../compatibility.md).

## Bidra

- Feilmeldinger og pull-forespørsler er velkomne — særlig **rettelser av oversettelser**, siden alle 45 språk er maskinoversatt og ikke gjennomlest av morsmålsbrukere. Se [utvikling](../development.md) for oppsett og grunnregler.
- **Feilsporing:** https://github.com/Gelaende51/obsidian-lure/issues
- **Donasjoner:** [Ko-fi](https://ko-fi.com/vault51). Tillegget er gratis og AGPL-lisensiert uansett; tips settes pris på og kreves aldri. Hensikten er klimakompensasjon — en hensikt, ikke et løfte: ingenting kompenseres før summen er bryet verdt, og denne linjen sier det så snart noe faktisk er blitt det.

## Takk til

- **Vault51** — forfatter: utforming, krav og manuell utprøving hele veien.
- **Claude Opus 5** og **Claude Sonnet 5** (Anthropic, via Claude Code) — implementering, oversettelser og dokumentasjon, under forfatterens ledelse. Se [AI-erklæring](#ai-erklæring).
- **[Obsidian](https://obsidian.md)** — programmet dette utvider, og kilden til hver eneste bestanddel tillegget bruker: plugin-API-et, ikonsettet Lucide bak `setIcon`, den medfølgende i18next-instansen som etikettene i hurtigmenyen leses fra, og de egne CSS-klassene og -variablene. Ingenting fra tredjepart følger med; tillegget har **ingen avhengigheter ved kjøring**.

> **Obsidian-teamet har ikke deltatt i dette prosjektet på noen måte** — de har ikke skrevet, lest gjennom, gått god for eller støttet det. Obsidian er et varemerke som tilhører Dynalist Inc.; dette er et uavhengig, ikke-tilknyttet tillegg.

Bidragsytere blir nevnt her etter hvert som bidrag kommer inn.

## Lenker

- **Dokumentasjon:** [docs/](../)
- **Endringslogg:** [CHANGELOG.md](CHANGELOG.no.md)
- **Tilleggsside:** https://community.obsidian.md/plugins/lure
- **Nettsted / kildekode:** https://github.com/Gelaende51/obsidian-lure
- **Donasjoner:** [Ko-fi](https://ko-fi.com/vault51) — se [bidra](#bidra).
- **Lisens:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. Forgreninger og videredistribuerte bygg må gi ut kildekoden sin under samme lisens.
