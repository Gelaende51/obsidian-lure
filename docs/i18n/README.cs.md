<!-- Překlad README.md — stav: commit d116bbc.
     Strojový překlad (Claude Opus 5), nezkontrolovaný rodilými mluvčími.
     Opravy vítány; rozhodující verzí je anglické README. -->

[English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · **Čeština** · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

Plugin pro [Obsidian](https://obsidian.md), který promění název souboru v záhlaví poznámky v klikatelnou, upravitelnou cestu celým trezorem — jako adresní řádek ve správci souborů [Dolphin](https://apps.kde.org/dolphin/).

![Kliknutí na oddělovač za složkou: ukazatel na něm spočívá a Průzkumník souborů tuto složku zobrazil a rozbalil](../images/breadcrumb.png)

Obsidian 1.8.7+ · pouze počítač · AGPL-3.0

## Prohlášení o AI

- **Agent** — **Claude Opus 5** a **Claude Sonnet 5** (Anthropic, přes Claude Code): napsal TypeScript, CSS, všech 45 sad překladů a dokumentaci. Překlady vznikly strojově a rodilí mluvčí je nekontrolovali.
- **Autor** — Vault51: určil každou funkci, každou verzi vyzkoušel ve skutečném trezoru, řídil opravy, prošel všechny výstupy.
- **Spotřeba** — 3.–13. srpna 2026, devět sezení, \~4928 odpovědí: \~7,2 mil. vygenerovaných tokenů, \~23,7 mil. odeslaných, \~1169,6 mil. opětovných čtení z mezipaměti (\~1200,5 mil. celkem).
- **Zdroj** — model, který píše pluginy pro Obsidian, se to naučil z otevřeného kódu, dokumentace, odpovědí na fórech a hlášení chyb, které lidé napsali a rozdali. Nikoho z nich se nikdo neptal, nikdo je neuvedl a nikdo jim nezaplatil. To je zdejší největší neuvedený příspěvek a zaslouží si vaši podporu víc než tento plugin: pokud vybíráte, kam něco poslat, pošlete to tam.

## Funkce

- **Kliknutí na složku** otevře seznam obsahu *nadřazené* složky — vyměň jednu složku za sousední, aniž bys sáhl na zbytek cesty. Název poznámky funguje stejně, i s příponou.
- **Kliknutí na oddělovač** za složkou ji zobrazí v Průzkumníku souborů a rozbalí. Jedno nastavení obě role prohodí.
- **Pravé kliknutí nebo přetažení kterékoli položky** — kontextová nabídka a přetahování samotného Průzkumníka souborů.
- **Kliknutí na název souboru nebo na prázdné místo** umožní napsat cestu, s doplňováním. `/` sestupuje, <kbd>Backspace</kbd> vystoupí o úroveň výš, <kbd>Enter</kbd> potvrdí.
- **Tlačítko tužky na složce** přepne stejné interakce na přesun/přejmenování, se stejnými kontrolami, jaké dělá sám Obsidian.
- **Podrž <kbd>Ctrl</kbd>** pro otevření na nové kartě — nebo, v režimu přesunu/přejmenování, pro zkopírování poznámky tam místo jejího přesunutí.
- **<kbd>F2</kbd>** přepíná mezi nadpisem v textu a řádkem cesty.
- **Kliknutí na název trezoru** umožní procházet ostatní trezory, domovskou složku, kořen souborového systému a připojené jednotky, aniž bys měnil trezor. Jen ke čtení, dokud neotevřeš zámek, a po celou dobu orámováno chybovou barvou. Ve výchozím stavu vypnuto — viz [mimo trezor](#mimo-trezor).
- **Dva stupně varování** — červená mimo trezor, oranžová pro textové soubory, pro které Obsidian nemá editor. Viz [dvě varovné barvy](usage.cs.md#dvě-varovné-barvy).
- **Ikony přizpůsobitelné motivu**, vyměnitelné z úryvku CSS — a **45 jazyků**, každý, který Obsidian přináší.
- **Nastavení:** zarovnání, přednastavené oddělovače, které kliknutí otevírá seznam, název trezoru, skryté soubory.

![Tentýž seznam v režimu přesunu/přejmenování: současný název souboru připnutý nahoře, pod ním sousední složky a existující poznámky zašedlé](../images/dropdown.png)

*V režimu přesunu/přejmenování nabízí tentýž seznam něco jiného: nahoře připnutý současný název poznámky, aby ji šlo přesunout bez přejmenování; pod ním složky, kam ji přesunout; a už obsazené názvy zašedlé, aby se nic omylem nepřepsalo.*

→ [Úplný návod](usage.cs.md)

## Mimo trezor

Pravidla Obsidianu pro vývojáře vyžadují, aby plugin vysvětlil každý přístup k souborům mimo trezor, takže bez okolků:

**Jestli vůbec něco z toho dělá.** Jen když zapneš **Přístup k externím souborům**, který je **ve výchozím stavu vypnutý**. Při vypnutém nastavení není z pluginu žádná cesta k externímu umístění a nic z níže popsaného kódu se nikdy nespustí.

**Co čte.** Jen když o to požádáš. Kliknutí na název trezoru vypíše tvé ostatní trezory — načtené z vlastního `obsidian.json` Obsidianu — a k tomu domovskou složku, kořen souborového systému a připojené jednotky (`/proc/mounts` na Linuxu, `/Volumes` na macOS, písmena jednotek na Windows). Procházení odtud vypisuje obsah adresářů a otevření souboru přečte ten jeden soubor.

**Co zapisuje.** Nic, dokud nestiskneš tlačítko, které to říká. Taková tlačítka jsou dvě a každé pokrývá výhradně svou vlastní oblast:

- Tlačítko **Upravit jako text** v prohlížeči odemkne soubor, který máš před sebou — ten jeden soubor na té jedné kartě. Od té chvíle se do něj tvé úpravy ukládají, jak píšeš.
- **Zámek** v záhlaví, viditelný jen dokud řádek cesty míří mimo trezor, odemkne vytváření, přejmenování a přesouvání na externích cestách. Zamkne se zpět, jakmile se vrátíš dovnitř, takže povolení nikdy nepřežije složku, pro kterou bylo dáno.

Ani jedno odemčení se neukládá do pracovní plochy ani do nastavení, takže zápis nikdy není natažený nad souborem, o jehož otevření nevíš. Ani v jednom stavu se nic nepřepisuje — existující cíl je odmítnut, s využitím výlučného vytvoření nabízeného samotným souborovým systémem, ne kontroly, která by mohla prohrát závod — a poznámku nikdy nelze *přesunout* mimo trezor, protože odkazy na ni by se potichu rozbily; podržení <kbd>Ctrl</kbd> ji tam místo toho zkopíruje.

**Proč.** Poznámky, které hledáš, bývají v jiném trezoru, ve složce se synchronizací nebo na flashce, a vlastní odpověď Obsidianu — přepni trezor — zavře všechno, co jsi měl otevřené. Tohle tě nechá jít se podívat, aniž bys odešel, a při té příležitosti opravit překlep.

**Omezení.** Editor Obsidianu je vázaný na soubory uvnitř trezoru, takže externí soubor **nelze** otevřít jako skutečnou poznámku, s odkazy, zpětnými odkazy a vším ostatním; to nedokáže žádný plugin. Lure ho místo toho ukáže ve vlastním prohlížeči (Markdown, obrázky, zvuk, video, PDF) a pro všechno ostatní nabídne *Otevřít externě*. Řádek cesty zůstává orámovaný chybovou barvou pokaždé, když míří mimo trezor, a stopa začíná v místě, které sis vybral — u názvu trezoru, domovské složky, jednotky — a ne u uspořádání adresářů daného stroje.

## Instalace

Uvedeno na [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure), ale zatím neschváleno pro prohlížeč v aplikaci — nainstalujte jej jedním z těchto způsobů:

**Ručně:** stáhni `main.js`, `manifest.json` a `styles.css` z [nejnovějšího vydání](https://github.com/Gelaende51/obsidian-lure/releases) do `<vault>/.obsidian/plugins/lure/` a pak plugin zapni v **Nastavení → Pluginy třetích stran**.

**BRAT:** přidej `Gelaende51/obsidian-lure` jako beta plugin.

**Ze zdrojů:** `npm install && npm run build` — viz [vývoj](../development.md).

## Kompatibilita

Žádný plugin není potřeba. Vestavěný **Průzkumník souborů**, pokud je zapnutý, je to, co zobrazuje složky v postranním panelu; bez něj tato kliknutí nic nedělají.

Vyzkoušeno s pluginy komunity, které sdílejí záhlaví poznámky nebo odpovídají na kliknutí na složku — v obou pořadích načtení, každý zapnutý i vypnutý:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — oddělovač otevře poznámku složky místo toho, aby složku zobrazil, čímž se každý úsek cesty stane místem, kam se dá jít. Jediný plugin poznámek ke složkám, který si nárokuje cestu v záhlaví; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) a [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) tam neposlouchají, takže oddělovač složku zobrazí jako obvykle.
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer) a [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — oba kreslí do téhož prvku záhlaví; Lure si svůj řádek udrží bez ohledu na to, kdo se načte první, a vypnutí kteréhokoli z nich nechá ten druhý nedotčený.
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header), [Running Head](obsidian://show-plugin?id=running-head), [Crumbs](obsidian://show-plugin?id=crumbs-obsidian), [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — mají vlastní pruh a soužití je bez potíží.

Pouze počítač — model ovládání potřebuje najetí myší, přesná kliknutí a klávesnici. Úplné výsledky, co zbývá ověřit, a srovnání s Quick Explorer a Breadcrumbs jsou v [kompatibilitě](../compatibility.md).

## Jak přispět

- Hlášení a pull requesty vítány — zvlášť **opravy překladů**, protože všech 45 jazyků je přeloženo strojově a rodilí mluvčí je nekontrolovali. Nastavení a základní pravidla popisuje [vývoj](../development.md).
- **Hlášení chyb:** https://github.com/Gelaende51/obsidian-lure/issues
- **Dary:** [Ko-fi](https://ko-fi.com/vault51). Plugin je tak jako tak zdarma a pod licencí AGPL; spropitné potěší, ale nikdy se nevyžaduje. Zamýšleným účelem je uhlíková kompenzace — záměr, ne závazek: nic se nekompenzuje, dokud částka nestojí za tu námahu, a tenhle řádek to řekne, jakmile se opravdu něco zkompenzuje.

## Poděkování

- **Vault51** — autor: návrh, požadavky a ruční testování po celou dobu.
- **Claude Opus 5** a **Claude Sonnet 5** (Anthropic, přes Claude Code) — implementace, překlady a dokumentace, pod vedením autora. Viz [prohlášení o AI](#prohlášení-o-ai).
- **[Obsidian](https://obsidian.md)** — aplikace, kterou to rozšiřuje, a zdroj každé součásti, kterou plugin používá: jeho API pro pluginy, sada ikon Lucide za `setIcon`, přibalená instance i18next, ze které se čtou popisky kontextové nabídky, a jeho vlastní CSS třídy a proměnné. Nic cizího se nepřibaluje; plugin **nemá žádné běhové závislosti**.

> **Tým Obsidianu se na tomto projektu nijak nepodílel** — nenapsal ho, neprošel, nepodpořil ani nepodporuje. Obsidian je ochranná známka společnosti Dynalist Inc.; tohle je nezávislý, nespřízněný plugin.

Přispěvatelé zde budou uvedeni, jak budou příspěvky přicházet.

## Odkazy

- **Dokumentace:** [docs/](../)
- **Stránka pluginu:** https://community.obsidian.md/plugins/lure
- **Web / zdrojový kód:** https://github.com/Gelaende51/obsidian-lure
- **Dary:** [Ko-fi](https://ko-fi.com/vault51) — viz [jak přispět](#jak-přispět).
- **Licence:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. Forky a přebalená vydání musí zveřejnit své zdroje pod toutéž licencí.
