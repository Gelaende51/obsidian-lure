<!-- Översättning av README.md — status: commit 33b0e60.
     Maskinöversatt (Claude Opus 5) och inte granskad av modersmålstalare.
     Rättelser är välkomna; den engelska README-filen är den gällande
     versionen. -->

[English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · **Svenska** · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

Ett [Obsidian](https://obsidian.md)-tillägg som förvandlar filnamnet i en antecknings rubrikrad till en klickbar, redigerbar sökväg genom hela valvet — som adressfältet i filhanteraren [Dolphin](https://apps.kde.org/dolphin/).

![Klick på avskiljaren efter en mapp: pekaren vilar på den och Filutforskaren har visat och fällt ut den mappen](../images/breadcrumb.png)

Obsidian 1.8.7+ · endast dator · AGPL-3.0

## AI-redovisning

- **Agent** — **Claude Opus 5** och **Claude Sonnet 5** (Anthropic, via Claude Code): skrev TypeScript-koden, CSS:en, alla 45 översättningsuppsättningar och dokumentationen. Översättningarna är maskinellt gjorda och inte granskade av modersmålstalare.
- **Författare** — Vault51: bestämde varje funktion, provade varje version i ett riktigt valv, styrde rättelserna och läste igenom allt resultat.
- **Förbrukning** — 3–13 augusti 2026, nio sessioner, \~4 928 svar: \~7,2 M genererade tokens, \~23,7 M skickade, \~1169,6 M omläsningar ur cachen (\~1200,5 M totalt).
- **Ursprung** — modellen har lärt sig av öppen källkod, dokumentation och gemenskapstexter som andra publicerat.

## Funktioner

- **Klicka på en mapp** för en lista över innehållet i mappen *ovanför* — byt ut en mapp mot en grannmapp utan att röra resten av sökvägen. Anteckningens namn fungerar likadant, filändelsen inräknad.
- **Klicka på avskiljaren** efter en mapp för att visa och fälla ut den i Filutforskaren. En inställning byter plats på de två rollerna.
- **Högerklicka eller dra vilken post som helst** — Filutforskarens egen snabbmeny och dragbeteende.
- **Klicka på filnamnet eller på tom yta** för att skriva en sökväg, med komplettering. `/` går nedåt, <kbd>Backsteg</kbd> går upp en nivå, <kbd>Retur</kbd> bekräftar.
- **Pennknappen på mapp** ställer om samma interaktioner till flytta/byt namn, med samma kontroller som Obsidian själv gör.
- **Håll <kbd>Ctrl</kbd>** för att öppna i en ny flik — eller, i flytta/byt namn-läget, för att kopiera anteckningen dit i stället för att flytta den.
- **<kbd>F2</kbd>** växlar mellan rubriken i anteckningen och sökvägsraden.
- **Klicka på valvets namn** för att bläddra i dina andra valv, hemmappen, filsystemets rot och monterade enheter utan att byta valv. Skrivskyddat tills du öppnar ett hänglås, och inramat i felfärgen hela tiden. Avstängt som standard — se [utanför valvet](#utanför-valvet).
- **Två varningsnivåer** — rött utanför valvet, orange för textfiler som Obsidian saknar redigerare för. Se [de två varningsfärgerna](usage.sv.md#de-två-varningsfärgerna).
- **Temabara ikoner**, utbytbara från ett CSS-utdrag — och **45 språk**, alla som Obsidian levererar.
- **Inställningar:** justering, förvalda avskiljare, vilket klick som öppnar listan, valvets namn, dolda filer.

![Samma lista i flytta/byt namn-läget: filens nuvarande namn fastnålat överst, grannmappar under, och befintliga anteckningar nedtonade](../images/dropdown.png)

*I flytta/byt namn-läget erbjuder samma lista något annat: anteckningens nuvarande namn fastnålat överst, för att flytta den utan att byta namn; mappar att flytta den till; och redan upptagna namn nedtonade så att inget skrivs över av misstag.*

→ [Fullständig handledning](usage.sv.md)

## Utanför valvet

Obsidians utvecklarregler kräver att ett tillägg förklarar all åtkomst till filer utanför valvet, så rakt på sak:

**Om det över huvud taget gör något av det här.** Bara om du slår på **Åtkomst till externa filer**, som är **avstängt som standard**. Med inställningen av finns det ingen väg från tillägget till en extern sökväg, och ingenting av koden nedan körs någonsin.

**Vad det läser.** Bara när du ber om det. Ett klick på valvets namn listar dina andra valv — lästa ur Obsidians egen `obsidian.json` — plus hemmappen, filsystemets rot och monterade enheter (`/proc/mounts` på Linux, `/Volumes` på macOS, enhetsbokstäver på Windows). Att bläddra vidare därifrån listar kataloginnehåll, och att öppna en fil läser just den filen.

**Vad det skriver.** Ingenting, förrän du trycker på en knapp som säger det. Det finns två sådana knappar, och var och en täcker bara sitt eget område:

- Visarens knapp **Redigera som text** låser upp filen du har framför dig, just den filen i just den fliken. Därefter sparas dina ändringar till den medan du skriver.
- **Hänglåset** i rubrikraden, som bara syns medan sökvägsraden pekar utanför valvet, låser upp att skapa, byta namn och flytta på externa sökvägar. Det låses igen så snart du kommer tillbaka in, så tillståndet överlever aldrig den mapp du gav det för.

Ingen av upplåsningarna sparas i arbetsytan eller i inställningarna, så skrivning är aldrig laddad på en fil du inte minns att du öppnade. I inget av lägena skrivs något över — ett befintligt mål avvisas, med filsystemets eget exklusiva skapande i stället för en kontroll som kan förlora kapplöpningen — och en anteckning kan aldrig *flyttas* ut ur valvet, eftersom länkar till den skulle gå sönder i tysthet; att hålla <kbd>Ctrl</kbd> kopierar den ut i stället.

**Varför.** Anteckningarna du vill åt ligger ofta i ett annat valv, i en synkmapp eller på ett USB-minne, och Obsidians eget svar — byt valv — stänger allt du hade öppet. Det här låter dig gå och titta utan att lämna, och rätta ett stavfel medan du ändå är där.

**Begränsningen.** Obsidians redigerare är bunden till filer inuti valvet, så en extern fil **kan inte** öppnas som en riktig anteckning, med länkar, baklänkar och allt det andra; inget tillägg kan göra det. Lure visar den i stället i sin egen visare (Markdown, bilder, ljud, video, PDF), med *Öppna externt* för allt annat. Sökvägsraden förblir inramad i felfärgen så länge den pekar utanför valvet, och spåret börjar på platsen du valde — ett valvnamn, hemmappen, en enhet — och inte i maskinens katalogstruktur.

## Installation

Listad på [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure), men ännu inte godkänd för webbläsaren i appen — installera det på något av dessa sätt:

**Manuellt:** hämta `main.js`, `manifest.json` och `styles.css` från [senaste utgåvan](https://github.com/Gelaende51/obsidian-lure/releases) till `<vault>/.obsidian/plugins/lure/` och slå sedan på tillägget under **Inställningar → Gemenskapstillägg**.

**BRAT:** lägg till `Gelaende51/obsidian-lure` som betatillägg.

**Från källkod:** `npm install && npm run build` — se [utveckling](../development.md).

## Kompatibilitet

Inget tillägg krävs. Kärntillägget **Filutforskare** är, om det är påslaget, det som visar mappar i sidopanelen; utan det gör de klicken ingenting.

Provat mot de gemenskapstillägg som delar anteckningens rubrikrad eller svarar på mappklicket — i båda inläsningsordningarna, vart och ett på och av:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — avskiljaren öppnar mappens anteckning i stället för att visa mappen, vilket gör varje del av sökvägen till någonstans att gå. Det enda mappanteckningstillägget som gör anspråk på sökvägen i rubrikraden; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) och [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) lyssnar inte där, så avskiljaren visar mappen som vanligt.
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer) och [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — båda ritar i samma rubrikelement; Lure behåller sin rad oavsett vilket som läses in först, och att stänga av endera lämnar det andra orört.
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header), [Running Head](obsidian://show-plugin?id=running-head), [Crumbs](obsidian://show-plugin?id=crumbs-obsidian), [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — har sin egen list, och samsas utan besvär.

Endast dator — interaktionsmodellen behöver hovring, precisa klick och ett tangentbord. Fullständiga resultat, vad som återstår att pröva, och jämförelsen med Quick Explorer och Breadcrumbs finns i [kompatibilitet](../compatibility.md).

## Bidra

- Ärenden och pull-förfrågningar välkomnas — särskilt **rättelser av översättningar**, eftersom alla 45 språk är maskinöversatta och inte granskade av modersmålstalare. Se [utveckling](../development.md) för uppsättning och grundregler.
- **Ärendehantering:** https://github.com/Gelaende51/obsidian-lure/issues
- **Donationer:** [Ko-fi](https://ko-fi.com/vault51). Tillägget är gratis och AGPL-licensierat oavsett; dricks uppskattas och krävs aldrig. Avsikten är klimatkompensation — en avsikt, inte ett löfte: ingenting kompenseras förrän summan är värd besväret, och den här raden säger det så snart något faktiskt har kompenserats.

## Tack till

- **Vault51** — författare: utformning, krav och manuell provning hela vägen.
- **Claude Opus 5** och **Claude Sonnet 5** (Anthropic, via Claude Code) — implementation, översättningar och dokumentation, under författarens ledning. Se [AI-redovisning](#ai-redovisning).
- **[Obsidian](https://obsidian.md)** — programmet som det här utvidgar, och källan till varje beståndsdel tillägget använder: dess plugin-API, ikonuppsättningen Lucide bakom `setIcon`, den medföljande i18next-instansen som snabbmenyns etiketter läses ur, och dess egna CSS-klasser och variabler. Ingenting från tredje part följer med; tillägget har **inga körtidsberoenden**.

> **Obsidian-teamet har inte deltagit i det här projektet på något sätt** — de har inte skrivit, granskat, ställt sig bakom eller stött det. Obsidian är ett varumärke som tillhör Dynalist Inc.; det här är ett fristående, obundet tillägg.

Bidragsgivare listas här efterhand som bidrag kommer in.

## Länkar

- **Dokumentation:** [docs/](../)
- **Tilläggets sida:** https://community.obsidian.md/plugins/lure
- **Webbnärvaro / källkod:** https://github.com/Gelaende51/obsidian-lure
- **Donationer:** [Ko-fi](https://ko-fi.com/vault51) — se [bidra](#bidra).
- **Licens:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. Förgreningar och vidaredistribuerade byggen måste släppa sin källkod under samma licens.
