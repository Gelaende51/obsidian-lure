<!-- Oversettelse av README.md — status: commit dc475f7.
     Maskinoversatt (Claude Opus 5) og ikke gjennomlest av morsmålsbrukere.
     Rettelser er velkomne; den engelske README-filen er den gjeldende
     utgaven.

     «Third-party plugin» under Installasjon står med vilje på engelsk: det
     er ordrett det Obsidian selv viser i den norske utgaven, som ikke har
     oversatt den innstillingen. -->

[English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · **Norsk** · [Polski](README.pl.md) · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

Et [Obsidian](https://obsidian.md)-tillegg som gjør filnavnet i overskriftslinjen til en notat om til en klikkbar, redigerbar sti gjennom hele hvelvet — som adresselinjen i filbehandleren [Dolphin](https://apps.kde.org/dolphin/).

![Klikk på skilletegnet etter en mappe: pekeren hviler på det, og Filutforskeren har vist og utvidet den mappen](../images/breadcrumb.png)

Obsidian 1.8.7+ · kun datamaskin · AGPL-3.0

## AI-erklæring

- **Agent** — **Claude Opus 5** og **Claude Sonnet 5** (Anthropic, via Claude Code): skrev TypeScript-koden, CSS-en, alle 45 oversettelsessettene og dokumentasjonen. Oversettelsene er laget maskinelt og ikke gjennomlest av morsmålsbrukere.
- **Forbruk** — 3.–13. august 2026, ni økter, \~4928 svar: \~7,2 mill. genererte tokens, \~23,7 mill. sendte, \~1169,6 mill. gjenlesinger fra hurtiglageret (\~1200,5 mill. totalt).
- **Opphav** — modellen har lært av åpen kildekode, dokumentasjon og fellesskapstekster utgitt av andre. Mesteparten av æren tilfaller dem.
- **Forfatter** — Vault51: fastsatte hver funksjon, prøvde hver utgave i et ekte hvelv, styrte rettelsene og leste gjennom alle resultater.

## Funksjoner

- **Klikk på en mappe** for en liste over innholdet i mappen *over* — bytt ut én mappe med en nabomappe uten å røre resten av stien. Navnet på notatet virker på samme måte, filendelsen inkludert.
- **Klikk på skilletegnet** etter en mappe for å vise og utvide den i Filutforskeren. Én innstilling bytter om på de to rollene.
- **Høyreklikk eller dra hvilken som helst oppføring** — Filutforskerens egen hurtigmeny og draoppførsel.
- **Klikk på filnavnet eller på tom plass** for å skrive en sti, med fullføring. `/` går nedover, <kbd>Rettetast</kbd> går ett nivå opp, <kbd>Enter</kbd> bekrefter.
- **Blyantknappen på mappe** stiller de samme handlingene om til flytt/gi nytt navn, med de samme kontrollene Obsidian selv gjør.
- **Hold <kbd>Ctrl</kbd>** for å åpne i en ny fane — eller, i flytt/gi nytt navn-modus, for å kopiere notatet dit i stedet for å flytte det.
- **<kbd>F2</kbd>** veksler mellom overskriften i notatet og stilinjen.
- **Klikk på navnet på hvelvet** for å bla i de andre hvelvene dine, hjemmemappen, roten av filsystemet og monterte stasjoner uten å bytte hvelv. Skrivebeskyttet til du åpner en hengelås, og innrammet i feilfargen hele veien. Av som standard — se [utenfor hvelvet](#utenfor-hvelvet).
- **To varselnivåer** — rødt utenfor hvelvet, oransje for tekstfiler Obsidian ikke har noen redigerer for. Se [de to varselfargene](usage.no.md#de-to-varselfargene).
- **Temavennlige ikoner**, som kan byttes ut fra et CSS-utdrag — og **45 språk**, alle Obsidian leverer.
- **Innstillinger:** justering, ferdige skilletegn, hvilket klikk som åpner listen, navnet på hvelvet, skjulte filer.

![Den samme listen i flytt/gi nytt navn-modus: filens nåværende navn festet øverst, nabomapper under, og eksisterende notater nedtonet](../images/dropdown.png)

*I flytt/gi nytt navn-modus tilbyr den samme listen noe annet: notatets nåværende navn festet øverst, så det kan flyttes uten å få nytt navn; mapper å flytte det inn i; og navn som allerede er tatt nedtonet, slik at ingenting blir overskrevet ved et uhell.*

→ [Fullstendig veiledning](usage.no.md)

## Utenfor hvelvet

Obsidians utviklerregler krever at et tillegg forklarer all tilgang til filer utenfor hvelvet, så rett fram:

**Om det i det hele tatt gjør noe av dette.** Bare hvis du slår på **Tilgang til eksterne filer**, som er **av som standard**. Med innstillingen av finnes det ingen vei fra tillegget til en ekstern sti, og ingenting av koden nedenfor kjøres noen gang.

**Hva det leser.** Bare når du ber om det. Et klikk på navnet på hvelvet lister opp de andre hvelvene dine — lest fra Obsidians egen `obsidian.json` — pluss hjemmemappen, roten av filsystemet og monterte stasjoner (`/proc/mounts` på Linux, `/Volumes` på macOS, stasjonsbokstaver på Windows). Videre blaing derfra lister opp mappeinnhold, og å åpne en fil leser nettopp den filen.

**Hva det skriver.** Ingenting, før du trykker på en knapp som sier det. Det er to slike knapper, og hver dekker bare sitt eget område:

- Viserens knapp **Rediger som tekst** låser opp filen du har foran deg, nettopp den filen i nettopp den fanen. Deretter lagres endringene dine til den mens du skriver.
- **Hengelåsen** i overskriftslinjen, som bare vises mens stilinjen peker utenfor hvelvet, låser opp å opprette, gi nytt navn og flytte på eksterne stier. Den låses igjen så snart du kommer tilbake innenfor, så tillatelsen overlever aldri mappen du ga den for.

Ingen av opplåsingene lagres i arbeidsflaten eller i innstillingene, så skriving er aldri spent på en fil du ikke husker at du åpnet. I ingen av tilstandene blir noe overskrevet — et mål som allerede finnes blir avvist, med filsystemets egen eksklusive opprettelse i stedet for en sjekk som kunne tape kappløpet — og et notat kan aldri *flyttes* ut av hvelvet, fordi lenker til det ville ryke i stillhet; å holde <kbd>Ctrl</kbd> kopierer det ut i stedet.

**Hvorfor.** Notatene du er ute etter ligger ofte i et annet hvelv, i en synkroniseringsmappe eller på en minnepinne, og Obsidians eget svar — bytt hvelv — lukker alt du hadde åpent. Dette lar deg gå og se uten å forlate noe, og rette en skrivefeil mens du likevel er der.

**Begrensningen.** Obsidians redigerer er bundet til filer inne i hvelvet, så en ekstern fil **kan ikke** åpnes som et ekte notat, med lenker, tilbakelenker og resten; det klarer ingen tillegg. Lure viser den i stedet i sin egen viser (Markdown, bilder, lyd, video, PDF), med *Åpne eksternt* for alt annet. Stilinjen forblir innrammet i feilfargen så lenge den peker utenfor hvelvet, og sporet begynner på stedet du valgte — et hvelvnavn, hjemmemappen, en stasjon — og ikke i mappestrukturen på maskinen.

## Installasjon

Oppført på [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure), men ennå ikke godkjent for nettleseren i appen — installer det på en av disse måtene:

**Manuelt:** last ned `main.js`, `manifest.json` og `styles.css` fra [siste utgivelse](https://github.com/Gelaende51/obsidian-lure/releases) til `<vault>/.obsidian/plugins/lure/`, og slå det så på under **Innstillinger → Third-party plugin**.

**BRAT:** legg til `Gelaende51/obsidian-lure` som betatillegg.

**Fra kildekode:** `npm install && npm run build` — se [utvikling](../development.md).

## Kompatibilitet

Ingen tillegg kreves. Kjernetillegget **Filutforsker** er, hvis det er på, det som viser mapper i sidepanelet; uten det gjør de klikkene ingenting.

Prøvd mot de fellesskapstilleggene som deler overskriftslinjen til notatet eller svarer på mappeklikket — i begge innlastingsrekkefølger, hvert av dem på og av:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — skilletegnet åpner mappens notat i stedet for å vise mappen, slik at hvert ledd i stien blir et sted å gå. Det eneste mappenotat-tillegget som gjør krav på stien i overskriftslinjen; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) og [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) lytter ikke der, så skilletegnet viser mappen som vanlig.
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
- **Tilleggsside:** https://community.obsidian.md/plugins/lure
- **Nettsted / kildekode:** https://github.com/Gelaende51/obsidian-lure
- **Donasjoner:** [Ko-fi](https://ko-fi.com/vault51) — se [bidra](#bidra).
- **Lisens:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. Forgreninger og videredistribuerte bygg må gi ut kildekoden sin under samme lisens.
