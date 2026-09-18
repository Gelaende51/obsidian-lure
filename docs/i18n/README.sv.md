<!-- Översättning av README.md — status: commit e1e2247.
     Maskinöversatt (Claude Opus 5) och inte granskad av modersmålstalare.
     Rättelser är välkomna; den engelska README-filen är den gällande
     versionen. -->

[English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · **Svenska** · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

Ett tillägg till [Obsidian](https://obsidian.md) som förvandlar filnamnet i en anteckningens rubrikrad till en klickbar, redigerbar brödsmulesökväg över hela dess plats i valvet — som adressfältet i filhanteraren [Dolphin](https://apps.kde.org/dolphin/).

![Klick på avskiljaren efter en mapp: pekaren vilar på den, och Filutforskaren har visat och expanderat den mappen](../images/breadcrumb.png)

Obsidian 1.8.7+ · endast dator · AGPL-3.0

## AI-redovisning

- **Agent** — **Claude Opus 5** och **Claude Sonnet 5** (Anthropic, via Claude Code): skrev TypeScript-koden, CSS:en, alla 45 översättningsuppsättningar och dokumentationen. Översättningarna är maskingenererade och inte granskade av modersmålstalare.
- **Förbrukning** — 3 aug – 19 sep 2026, 20 sessioner, \~16 460 svar: \~19,9 M genererade token, \~87,0 M skickade, \~5451,0 M cachade omläsningar (\~5558,0 M totalt).
- **Ursprung** — modellen har lärt sig av öppen källkod, dokumentation och gemenskapstexter som andra har publicerat. Det mesta av förtjänsten ligger där.
- **Författare** — Vault51: angav varje funktion, testade varje iteration i ett levande valv, ledde rättningarna, granskade all utdata.

## Funktioner

- **Klicka på en mapp** för en lista över den *överordnade* mappens innehåll — byt ut en mapp mot ett syskon och lämna resten av sökvägen orörd. Anteckningens namn fungerar likadant och markerar namnet utan filändelsen.
- **Klicka på avskiljaren** efter en mapp för att visa och expandera den i Filutforskaren. En inställning byter plats på de två rollerna.
- **Högerklicka eller dra vilken post som helst** — Filutforskarens egen snabbmeny, post för post, och dess dragbeteende. Sökvägar utanför valvet får en motsvarande meny byggd åt sig, ända ner till *Ta bort* via systemets papperskorg.
- **Klicka på filnamnet eller på tom yta** för att skriva en sökväg, med automatisk komplettering. `/` går nedåt, <kbd>Backsteg</kbd> går ut, <kbd>Retur</kbd> bekräftar — och en sökväg som ännu inte finns skapas helt enkelt, med ett meddelande om var den hamnade.
- **Listan öppnas på posten du står i**, och när du pilar eller hovrar genom den fylls fältet med det du pekar på. Går du ut genom någon av listans ändar får du tillbaka det du hade skrivit, och tar du bort pekaren från den lämnas markeringen tillbaka dit du var.
- **Pennknappen på mapp** växlar samma interaktioner till flytta/byt namn, validerat så som Obsidian validerar.
- **Håll <kbd>Ctrl</kbd>** för att öppna i en ny flik — eller, i flytt-/namnbytesläge, för att kopiera anteckningen dit i stället. Anteckningens namn och mappsegmenten tar emot samma modifierare, och dragning, som sina rader i Filutforskaren.
- **Namn fyller i sig själva medan du skriver** — där mappens namn är överens dyker det gemensamma upp efter markören, markerat; när du skriver sväljs det bokstav för bokstav, <kbd>Tabb</kbd> eller <kbd>→</kbd> tar det helt, <kbd>Backsteg</kbd> tar tillbaka det. Listan fortsätter att filtrera på det du skrev, inte på det som erbjöds.
- **<kbd>Tabb</kbd> kompletterar som ett skal**: den förlänger det du skrivit så långt namnen i den mappen är överens, går ett steg i taget mot ett av dem när de inte är det, och stiger in i en mapp först när bara ett namn återstår. Bortom sökvägens slut vidgar den i stället markeringen: namn, namn med filändelse, sökväg från valvet, sökväg från systemets rot. <kbd>Skift</kbd>+<kbd>Tabb</kbd> går samma väg baklänges — och markerar det den lämnar tillbaka i stället för att radera det — och bortom början fortsätter den uppåt i sökvägen och rundar sedan till systemsökvägen. Åt vilket håll du än går kommer ett varv tillbaka till sökvägen du byggde.
- **Högerklicka för att kopiera** — två gånger för ett namn, tre gånger för allt till höger om det, och på den tomma ytan för hela sökvägen eller systemsökvägen.
- **Dra en anteckning till en mapp i raden** för att flytta den dit, med länkar och allt — målet står redan på skärmen, så det blir ett drag i stället för en resa genom filträdet. Valvets namn fungerar också, för roten. En hel markering flyttas som en enhet, och en mapp som inte kan ta emot det som erbjuds visar ingenting i stället för att misslyckas i efterhand.
- **Släpp text på raden för att skriva ner den** — på en mapp eller på valvets namn för att namnge en ny anteckning åt den, på anteckningens eget namn för att lägga till den i slutet av det du läser. En fil från skrivbordet fungerar likadant, och raden ringas in i blått där den skulle landa.
- **Fältet bär färgen av det som det namnger** — samma färg som dess rad har i listan, grått för en mapps anteckning — och **blir rött** så snart ingenting svarar mot det, så att du ser innan du trycker <kbd>Retur</kbd> om det kommer att öppna en anteckning eller skapa en.
- **HTML-filer visas som sidor**, i en ram där varje behörighet är fråntagen — inga skript, inget nätverk, inget eget ursprung — med stilmallarna och bilderna bredvid filen medtagna så att en sparad sida fortfarande ser ut som sig själv. Källkoden är ett tryck bort.
- **Skriv en URL** — `https://`, `obsidian://`, eller en `file://`-sökväg eller procentkodad sökväg — så öppnas den i stället för att behandlas som ett anteckningsnamn. Webbadresser går till en flik i Obsidians egen webbvisare där du har den påslagen.
- **Långa sökvägar kortas där bokstäverna är överflödiga** — aldrig bortom det som skiljer en mapp från den bredvid, mjukt snarare än en bokstav i taget — och rullar bara när det inte finns något kvar att komprimera. Peka på ett förkortat namn för att få tillbaka det i sin helhet.
- **<kbd>F2</kbd>** växlar mellan den infogade titeln och sökvägsfältet, öppnar på namnet utan filändelse och går vid fler tryck ut till de fullständiga sökvägarna. Den passerar rent genom Obsidians namnbytesdialog när titeln är bortrullad. Ett kommando *Fokusera sökvägsfältet* går samma steg utan att byta namn; inställningarnas rad för Snabbkommandon tar dig dit för att binda det.
- **Klicka på valvets namn** för att bläddra bland dina andra valv, hemmappen, filsystemets rot och monterade enheter utan att byta valv. Skrivskyddat tills du öppnar det röda hänglåset som tar namnbytesväxlarens plats där ute, och inramat i felfärgen hela vägen. Avstängt som standard — se [utanför valvet](#utanför-valvet).
- **Valvets rot listar de sidor en flik kan hålla** — `:graph`, `:search`, och vilka vyer dina tillägg än registrerar. Välj en, eller skriv den: ett kolon inleder inget filnamn, så etiketterna fungerar även som en adress. Med ett startsidestillägg installerat öppnar valvets egen avgränsare den sidan vid det första klicket och fäller ihop filträdet vid nästa.
- **En rad på flikar som inte håller någon fil** — en tom flik läser `vault / :blank`, grafen `vault / :graph`, och fältet bredvid är ett adressfält: skriv en sökväg och <kbd>Retur</kbd> öppnar den i den fliken, eller skapar den. Sidopanelsflikar behåller Obsidians egen titel.
- **Två varningsnivåer** — rött utanför valvet, orange för textfiler som Obsidian saknar redigerare för. Se [de två varningsfärgerna](usage.sv.md#de-två-varningsfärgerna).
- **Temabara ikoner**, utbytta från ett CSS-utdrag — och **46 språk**: alla som Obsidian levererar, plus grekiska och sanskrit, som det inte har någon inställning för. Välj ett för enbart tillägget, eller följ Obsidians eget.
- **Inställningar:** språk, justering, avgränsarförval, vilket klick som öppnar listan, valvets namn, punktfiler, filändelser.

![Samma lista i flytt-/namnbytesläge: det nuvarande filnamnet fastnålat överst, syskonmappar under det, och befintliga anteckningar gråmarkerade](../images/dropdown.png)

*I flytt-/namnbytesläge ändrar samma lista vad den erbjuder: anteckningens nuvarande namn fastnålat överst för att flytta den utan att byta namn, mappar att flytta den till, och namn som redan är upptagna gråmarkerade så att ingenting skrivs över av misstag.*

→ [Fullständig användarguide](usage.sv.md)

## Utanför valvet

Obsidians utvecklarpolicyer kräver att tillägg redogör för all åtkomst till filer utanför valvet, så, rakt på sak:

**Om det över huvud taget gör något av det här.** Bara om du slår på **Åtkomst till externa filer**, som är **avstängt som standard**. Med det avstängt finns det inget sätt att nå en extern sökväg från tillägget, och ingen av koden nedan körs någonsin.

**Vad det läser.** Bara när du ber om det. Ett klick på valvets namn listar dina andra valv — lästa ur Obsidians egen `obsidian.json` — plus din hemmapp, filsystemets rot och monterade enheter (`/proc/mounts` på Linux, `/Volumes` på macOS, enhetsbokstäver på Windows). Att bläddra därifrån listar kataloginnehåll, och att öppna en fil läser just den filen.

**Vad det skriver.** Ingenting, förrän du trycker på en knapp som säger det. Det finns två sådana knappar, och var och en täcker bara sin egen yta:

- Visarens knapp **Redigera som text** låser upp filen framför dig, för just den filen i just den fliken. Dina ändringar sparas sedan tillbaka till den medan du skriver.
- Rubrikradens **röda hänglås**, som står på namnbytesväxlarens plats medan sökvägsfältet pekar utanför ditt valv, låser upp att skapa, byta namn på, flytta och ta bort på externa sökvägar — och lämnar tillbaka platsen till växlaren när det väl är öppet. Det låses igen när du kommer tillbaka in, och vid det tryck som lämnar namnbytesläget, så att behörigheten aldrig överlever den mapp du gav den för.

Ingen av upplåsningarna sparas i arbetsytan eller i inställningarna, så skrivning är aldrig förberedd på en fil du inte minns att du öppnade. Ingenting skrivs någonsin över i något av lägena — ett befintligt mål avvisas, med filsystemets eget exklusiva skapande i stället för en kontroll som skulle kunna förlora en kapplöpning.

Att flytta en anteckning *ut* ur ditt valv är den enda skrivning som kostar något som ingenting kan ge tillbaka: Obsidian uppdaterar bara länkar inuti valvet, så varje länk som pekar på den anteckningen går sönder. Det erbjuds bakom en dialog som säger det och räknar de anteckningar som berörs, och det sker som kopiera-och-sedan-ta-bort via Obsidians egen papperskorg, så det går att återställa lika väl som en borttagen anteckning. Håller du <kbd>Ctrl</kbd> kopieras den ut i stället.

**Varför.** Anteckningar du vill åt ligger ofta i ett annat valv, en synkmapp eller på ett USB-minne, och Obsidians eget svar — byt valv — stänger allt du hade öppet. Det här låter dig gå och titta utan att lämna, och rätta ett stavfel medan du är där.

**Begränsningen.** Obsidians redigerare är bunden till filer inuti valvet, så en extern fil **kan inte** öppnas som en riktig anteckning med länkar, bakåtlänkar och allt det andra; inget tillägg kan göra det. Lure visar den i sin egen visare i stället (Markdown, bilder, ljud, video, PDF), med *Öppna externt* för allt annat. Sökvägsfältet förblir inramat i felfärgen när det pekar utanför ditt valv, och spåret börjar på den plats du valde — ett valvnamn, din hemmapp, en enhet — snarare än i maskinens katalogstruktur.

## Installation

**I Obsidian:** öppna **Inställningar → Gemenskapstillägg → Bläddra**, sök efter *Lure* och tryck sedan på *Installera* och *Aktivera* — eller tryck på *Add to Obsidian* på [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure).

**Manuellt:** ladda ner `main.js`, `manifest.json` och `styles.css` från den [senaste utgåvan](https://github.com/Gelaende51/obsidian-lure/releases) till `<vault>/.obsidian/plugins/lure/`, och aktivera det sedan under **Inställningar → Gemenskapstillägg**.

**BRAT:** lägg till `Gelaende51/obsidian-lure` som ett betatillägg.

**Från källkod:** `npm install && npm run build` — se [utveckling](../development.md).

## Kompatibilitet

Inget tillägg krävs. Kärntillägget **Filutforskare** är, om det är aktiverat, det som visar mappar i sidopanelen; utan det gör de klicken ingenting.

Testat mot de gemenskapstillägg som delar anteckningens rubrikrad eller svarar på mappklicket — båda laddningsordningarna, vart och ett på och av:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — avskiljaren öppnar en mapps anteckning i stället för att visa mappen, vilket gör varje segment av sökvägen till något du kan gå till, hur djupt det än är: anteckningen härleds från det tilläggets egen konvention snarare än lämnas åt det att svara på. Det är också det enda som publicerar en sådan konvention; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) och [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) publicerar ingen och gör aldrig anspråk på sökvägen i rubrikraden, så med dem visar avskiljaren mappen som vanligt.
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer) och [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — båda ritar in i samma rubrikelement; Lure behåller raden oavsett vilket som laddas först, och att stänga av endera lämnar det andra intakt.
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header), [Running Head](obsidian://show-plugin?id=running-head), [Crumbs](obsidian://show-plugin?id=crumbs-obsidian), [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — äger sin egen rad, och samexisterar.

Endast dator — interaktionsmodellen behöver hovring, precisa klick och ett tangentbord. Fullständiga resultat, kvarstående förväntningar och hur det här står sig mot Quick Explorer och Breadcrumbs finns i [kompatibilitet](../compatibility.md).

## Bidra

- Ärenden och pull-förfrågningar är välkomna — särskilt **rättelser av översättningar**, eftersom alla 45 språkvarianter är maskinöversatta och inte granskade av modersmålstalare. Se [utveckling](../development.md) för uppsättning och grundregler.
- **Ärendehantering:** https://github.com/Gelaende51/obsidian-lure/issues
- **Donationer:** [Ko-fi](https://ko-fi.com/vault51). Tillägget är gratis och AGPL-licensierat hur som helst; dricks uppskattas, men krävs aldrig. Avsedd användning är koldioxidkompensation — en avsikt, inte ett åtagande: ingenting kompenseras förrän summan är stor nog att vara värd besväret, och den här raden kommer att säga det när något faktiskt har kompenserats.

## Tack till

- **Vault51** — författare: design, krav och manuell testning hela vägen.
- **Claude Opus 5** och **Claude Sonnet 5** (Anthropic, via Claude Code) — implementation, översättningar och dokumentation, under författarens ledning. Se [AI-redovisning](#ai-redovisning).
- **[Obsidian](https://obsidian.md)** — programmet som det här bygger vidare på, och källan till varje komponent tillägget använder: dess plugin-API, Lucide-ikonuppsättningen bakom `setIcon`, den medföljande i18next-instans som snabbmenyernas etiketter läses ur, och dess egna CSS-klasser och variabler. Ingenting från tredje part paketeras; tillägget har **inga körtidsberoenden**.

> **Obsidian-teamet har inte deltagit i det här projektet på något sätt** — de har inte skrivit, granskat, rekommenderat eller stöttat det. Obsidian är ett varumärke som tillhör Dynalist Inc.; det här är ett oberoende, icke anslutet tillägg.

Bidragsgivare kommer att listas här allt eftersom bidrag landar.

## Länkar


- **Dokumentation:** [docs/](../)
- **Ändringslogg:** [CHANGELOG.md](CHANGELOG.sv.md)
- **Tilläggets sida:** https://community.obsidian.md/plugins/lure
- **Webbnärvaro / källkod:** https://github.com/Gelaende51/obsidian-lure
- **Donationer:** [Ko-fi](https://ko-fi.com/vault51) — se [bidra](#bidra).
- **Licens:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. Förgreningar och vidaredistribuerade byggen måste leverera sin källkod under samma licens.
