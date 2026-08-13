<!-- Oversættelse af README.md — status: commit 7b2691a.
     Maskinoversat (Claude Opus 5) og ikke gennemlæst af modersmålstalere.
     Rettelser er velkomne; den engelske README er den gældende udgave. -->

**Læs dette på andre sprog:** [English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · **Dansk** · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

Et [Obsidian](https://obsidian.md)-plugin, der forvandler filnavnet i en notes overskriftslinje til en klikbar, redigerbar sti gennem hele boksen — som adresselinjen i filhåndteringen [Dolphin](https://apps.kde.org/dolphin/).

![Klik på adskilleren efter en mappe: markøren hviler på den, og Filer har vist og foldet den mappe ud](../images/breadcrumb.png)

Obsidian 1.8.7+ · kun computer · AGPL-3.0

## AI-oplysning

- **Agent** — **Claude Opus 5** og **Claude Sonnet 5** (Anthropic, via Claude Code): skrev TypeScript-koden, CSS'en, alle 45 oversættelsessæt og dokumentationen. Oversættelserne er lavet maskinelt og ikke gennemlæst af modersmålstalere.
- **Forfatter** — Vault51: fastlagde hver funktion, prøvede hver udgave i en rigtig boks, styrede rettelserne og læste alle resultater igennem.
- **Forbrug** — 3.–13. august 2026, ni sessioner, ~4.928 svar: ~7,2 mio. genererede tokens, ~23,7 mio. sendte, ~1169,6 mio. genlæsninger fra cachen (~1200,5 mio. i alt).

## Funktioner

- **Klik på en mappe** for en liste over indholdet i mappen *ovenover* — byt én mappe ud med en nabomappe uden at røre resten af stien. Notens navn virker på samme måde, filendelsen med.
- **Klik på adskilleren** efter en mappe for at vise og folde den ud i Filer. Én indstilling bytter om på de to roller.
- **Højreklik eller træk et hvilket som helst punkt** — Filers egen genvejsmenu og trækadfærd.
- **Klik på filnavnet eller på tom plads** for at skrive en sti, med fuldførelse. `/` går nedad, <kbd>Backspace</kbd> går et niveau op, <kbd>Enter</kbd> bekræfter.
- **Blyantsknappen på mappe** stiller de samme handlinger om til flyt/omdøb, med de samme kontroller, som Obsidian selv laver.
- **Hold <kbd>Ctrl</kbd>** for at åbne i en ny fane — eller, i flyt/omdøb-tilstand, for at kopiere noten derhen i stedet for at flytte den.
- **<kbd>F2</kbd>** skifter mellem overskriften i noten og stilinjen.
- **Klik på boksens navn** for at gennemse dine andre bokse, hjemmemappen, filsystemets rod og tilsluttede drev uden at skifte boks. Skrivebeskyttet, indtil du åbner en hængelås, og indrammet i fejlfarven hele vejen. Slået fra som standard — se [uden for boksen](#uden-for-boksen).
- **To advarselstrin** — rødt uden for boksen, orange for tekstfiler, som Obsidian ikke har en editor til. Se [de to advarselsfarver](usage.da.md#de-to-advarselsfarver).
- **Ikoner der følger temaet**, kan udskiftes fra et CSS-uddrag — og **45 sprog**, alle dem Obsidian leverer.
- **Indstillinger:** justering, foruddefinerede adskillere, hvilket klik der åbner listen, boksens navn, skjulte filer.

![Den samme liste i flyt/omdøb-tilstand: filens nuværende navn fastgjort øverst, nabomapper nedenunder, og eksisterende noter nedtonede](../images/dropdown.png)

*I flyt/omdøb-tilstand tilbyder den samme liste noget andet: notens nuværende navn fastgjort øverst, så den kan flyttes uden at blive omdøbt; mapper at flytte den ind i; og allerede optagede navne nedtonede, så intet bliver overskrevet ved et uheld.*

→ [Fuld vejledning](usage.da.md)

## Uden for boksen

Obsidians udviklerregler kræver, at et plugin forklarer al adgang til filer uden for boksen, så lige ud ad landevejen:

**Om det overhovedet gør noget af det her.** Kun hvis du slår **Adgang til eksterne filer** til, og den er **slået fra som standard**. Med indstillingen fra er der ingen vej fra pluginet til en ekstern sti, og intet af koden nedenfor kører nogensinde.

**Hvad det læser.** Kun når du beder om det. Et klik på boksens navn viser dine andre bokse — læst fra Obsidians egen `obsidian.json` — plus hjemmemappen, filsystemets rod og tilsluttede drev (`/proc/mounts` på Linux, `/Volumes` på macOS, drevbogstaver på Windows). Videre gennemsyn derfra viser mappeindhold, og at åbne en fil læser netop den fil.

**Hvad det skriver.** Intet, før du trykker på en knap, der siger det. Der er to sådanne knapper, og hver dækker kun sit eget område:

- Fremviserens knap **Rediger som tekst** låser filen op foran dig, netop den fil i netop den fane. Derefter gemmes dine ændringer i den, mens du skriver.
- **Hængelåsen** i overskriftslinjen, der kun er synlig, mens stilinjen peger uden for boksen, låser op for at oprette, omdøbe og flytte på eksterne stier. Den låser igen, så snart du kommer tilbage indenfor, så tilladelsen overlever aldrig den mappe, du gav den til.

Ingen af oplåsningerne gemmes i arbejdsområdet eller i indstillingerne, så skrivning er aldrig spændt an på en fil, du ikke husker at have åbnet. I ingen af tilstandene bliver noget overskrevet — et eksisterende mål bliver afvist, med filsystemets egen eksklusive oprettelse i stedet for et tjek, der kunne tabe kapløbet — og en note kan aldrig *flyttes* ud af boksen, fordi links til den ville gå i stykker i stilhed; at holde <kbd>Ctrl</kbd> kopierer den derud i stedet.

**Hvorfor.** De noter, du er ude efter, ligger tit i en anden boks, i en synkroniseringsmappe eller på en USB-nøgle, og Obsidians eget svar — skift boks — lukker alt, hvad du havde åbent. Det her lader dig gå hen og kigge uden at forlade noget, og rette en tastefejl, mens du alligevel er der.

**Begrænsningen.** Obsidians editor er bundet til filer inde i boksen, så en ekstern fil **kan ikke** åbnes som en rigtig note, med links, tilbagelinks og resten; det kan intet plugin. Lure viser den i stedet i sin egen fremviser (Markdown, billeder, lyd, video, PDF), med *Åbn eksternt* til alt andet. Stilinjen bliver ved med at være indrammet i fejlfarven, når den peger uden for boksen, og sporet begynder det sted, du valgte — et boksnavn, hjemmemappen, et drev — og ikke i maskinens mappestruktur.

## Installation

Endnu ikke i mappen over fællesskabsplugins.

**Manuelt:** hent `main.js`, `manifest.json` og `styles.css` fra [seneste udgivelse](https://github.com/Gelaende51/obsidian-lure/releases) til `<vault>/.obsidian/plugins/lure/`, og slå det derefter til under **Indstillinger → Fællesskabsplugins**.

**BRAT:** tilføj `Gelaende51/obsidian-lure` som betaplugin.

**Fra kildekode:** `npm install && npm run build` — se [udvikling](../development.md).

## Kompatibilitet

Der kræves ingen plugins. Kerneplugin'et **Filer** er, hvis det er slået til, det, der viser mapper i sidepanelet; uden det gør de klik ingenting.

Prøvet mod de fællesskabsplugins, der deler notens overskriftslinje eller svarer på mappeklikket — i begge indlæsningsrækkefølger, hver især slået til og fra:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — adskilleren åbner mappens note i stedet for at vise mappen, hvilket gør hvert led i stien til et sted, man kan gå hen. Det eneste mappenoteplugin, der gør krav på stien i overskriftslinjen; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) og [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) lytter ikke der, så adskilleren viser mappen som sædvanlig.
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer) og [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — begge tegner i det samme element i overskriftslinjen; Lure beholder sin række, uanset hvem der indlæses først, og at slå den ene fra lader den anden være urørt.
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header), [Running Head](obsidian://show-plugin?id=running-head), [Crumbs](obsidian://show-plugin?id=crumbs-obsidian), [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — har deres egen stribe og lever fint side om side.

Kun computer — interaktionsmodellen har brug for at holde musen over, præcise klik og et tastatur. De fulde resultater, hvad der stadig mangler at blive prøvet, og sammenligningen med Quick Explorer og Breadcrumbs står i [kompatibilitet](../compatibility.md).

## Bidrag

- Fejlrapporter og pull requests er velkomne — især **rettelser af oversættelser**, da alle 45 sprog er maskinoversat og ikke gennemlæst af modersmålstalere. Se [udvikling](../development.md) for opsætning og grundregler.
- **Fejlsporing:** https://github.com/Gelaende51/obsidian-lure/issues
- **Donationer:** [Ko-fi](https://ko-fi.com/vault51). Pluginet er gratis og AGPL-licenseret under alle omstændigheder; drikkepenge er værdsat og aldrig påkrævet. Hensigten er CO₂-kompensation — en hensigt, ikke et løfte: intet bliver kompenseret, før summen er besværet værd, og denne linje siger det, så snart noget rent faktisk er blevet det.

## Tak til

- **Vault51** — forfatter: udformning, krav og manuel afprøvning hele vejen.
- **Claude Opus 5** og **Claude Sonnet 5** (Anthropic, via Claude Code) — implementering, oversættelser og dokumentation, under forfatterens ledelse. Se [AI-oplysning](#ai-oplysning).
- **[Obsidian](https://obsidian.md)** — programmet, dette udvider, og kilden til hver eneste bestanddel, pluginet bruger: dets plugin-API, ikonsættet Lucide bag `setIcon`, den medfølgende i18next-instans, som genvejsmenuens etiketter læses fra, og dets egne CSS-klasser og -variabler. Intet fra tredjepart følger med; pluginet har **ingen afhængigheder ved kørsel**.

> **Obsidian-holdet har ikke deltaget i dette projekt på nogen måde** — de har ikke skrevet, gennemlæst, godkendt eller støttet det. Obsidian er et varemærke tilhørende Dynalist Inc.; dette er et uafhængigt, ikke-tilknyttet plugin.

Bidragydere bliver nævnt her, efterhånden som bidrag kommer ind.

## Links

- **Dokumentation:** [docs/](../)
- **Web / kildekode:** https://github.com/Gelaende51/obsidian-lure
- **Donationer:** [Ko-fi](https://ko-fi.com/vault51) — se [bidrag](#bidrag).
- **Licens:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. Forgreninger og videredistribuerede builds skal udgive deres kildekode under samme licens.
