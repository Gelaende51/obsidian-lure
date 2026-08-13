<!-- Preklad README.md — stav: commit d116bbc.
     Strojový preklad (Claude Opus 5), neskontrolovaný rodenými hovoriacimi.
     Opravy sú vítané; rozhodujúcou verziou je anglické README. -->

**Prečítajte si to v iných jazykoch:** [English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · **Slovenčina** · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

Plugin pre [Obsidian](https://obsidian.md), ktorý premení názov súboru v hlavičke poznámky na klikateľnú a upraviteľnú cestu cez celý trezor — ako adresný riadok v správcovi súborov [Dolphin](https://apps.kde.org/dolphin/).

![Kliknutie na oddeľovač za priečinkom: ukazovateľ na ňom spočíva a Prieskumník súborov ten priečinok zobrazil a rozbalil](../images/breadcrumb.png)

Obsidian 1.8.7+ · iba počítač · AGPL-3.0

## Vyhlásenie o AI

- **Agent** — **Claude Opus 5** a **Claude Sonnet 5** (Anthropic, cez Claude Code): napísal TypeScript, CSS, všetkých 45 sád prekladov a dokumentáciu. Preklady vznikli strojovo a rodení hovoriaci ich nekontrolovali.
- **Autor** — Vault51: určil každú funkciu, každú verziu vyskúšal v skutočnom trezore, riadil opravy, prezrel všetky výstupy.
- **Spotreba** — 3.–13. augusta 2026, deväť relácií, \~4928 odpovedí: \~7,2 mil. vygenerovaných tokenov, \~23,7 mil. odoslaných, \~1169,6 mil. opätovných čítaní z vyrovnávacej pamäte (\~1200,5 mil. celkom).
- **Zdroj** — model, ktorý píše pluginy pre Obsidian, sa to naučil z otvoreného kódu, dokumentácie, odpovedí na fórach a hlásení chýb, ktoré ľudia napísali a rozdali. Nikoho z nich sa nepýtali, nikoho neuviedli a nikomu nezaplatili. To je tunajší najväčší neuvedený príspevok a zaslúži si vašu podporu viac než tento plugin: ak vyberáte, kam niečo poslať, pošlite to tam.

## Funkcie

- **Kliknutie na priečinok** otvorí zoznam obsahu *nadradeného* priečinka — vymeň jeden priečinok za susedný bez toho, aby si sa dotkol zvyšku cesty. Názov poznámky funguje rovnako, aj s príponou.
- **Kliknutie na oddeľovač** za priečinkom ho zobrazí v Prieskumníkovi súborov a rozbalí. Jedno nastavenie obe úlohy prehodí.
- **Pravé kliknutie alebo potiahnutie ktorejkoľvek položky** — kontextová ponuka a ťahanie samotného Prieskumníka súborov.
- **Kliknutie na názov súboru alebo na prázdne miesto** umožní napísať cestu, s dopĺňaním. `/` schádza nadol, <kbd>Backspace</kbd> vyjde o úroveň vyššie, <kbd>Enter</kbd> potvrdí.
- **Tlačidlo s ceruzkou na priečinku** prepne tie isté úkony na presun/premenovanie, s rovnakými kontrolami, aké robí sám Obsidian.
- **Podrž <kbd>Ctrl</kbd>** na otvorenie na novej karte — alebo, v režime presunu/premenovania, na skopírovanie poznámky tam namiesto jej presunutia.
- **<kbd>F2</kbd>** prepína medzi nadpisom v texte a riadkom cesty.
- **Kliknutie na názov trezora** umožní prezerať ostatné trezory, domovský priečinok, koreň súborového systému a pripojené jednotky bez toho, aby si menil trezor. Iba na čítanie, kým neotvoríš zámok, a po celý čas orámované chybovou farbou. Predvolene vypnuté — pozri [mimo trezora](#mimo-trezora).
- **Dva stupne varovania** — červená mimo trezora, oranžová pre textové súbory, pre ktoré Obsidian nemá editor. Pozri [dve varovné farby](usage.sk.md#dve-varovné-farby).
- **Ikony prispôsobiteľné motívu**, vymeniteľné z útržku CSS — a **45 jazykov**, každý, ktorý Obsidian prináša.
- **Nastavenia:** zarovnanie, prednastavené oddeľovače, ktoré kliknutie otvára zoznam, názov trezora, skryté súbory.

![Ten istý zoznam v režime presunu/premenovania: súčasný názov súboru pripnutý hore, pod ním susedné priečinky a existujúce poznámky zosivené](../images/dropdown.png)

*V režime presunu/premenovania ponúka ten istý zoznam niečo iné: hore pripnutý súčasný názov poznámky, aby sa dala presunúť bez premenovania; pod ním priečinky, kam ju presunúť; a už obsadené názvy zosivené, aby sa nič omylom neprepísalo.*

→ [Úplný návod na použitie](usage.sk.md)

## Mimo trezora

Pravidlá Obsidianu pre vývojárov vyžadujú, aby plugin vysvetlil každý prístup k súborom mimo trezora, takže bez okolkov:

**Či vôbec niečo z toho robí.** Iba ak zapneš **Prístup k externým súborom**, ktorý je **predvolene vypnutý**. Pri vypnutom nastavení z pluginu nevedie k externej ceste žiadna cesta a nič z nižšie opísaného kódu sa nikdy nespustí.

**Čo číta.** Iba keď o to požiadaš. Kliknutie na názov trezora vypíše tvoje ostatné trezory — načítané z vlastného `obsidian.json` Obsidianu — a k tomu domovský priečinok, koreň súborového systému a pripojené jednotky (`/proc/mounts` na Linuxe, `/Volumes` na macOS, písmená jednotiek na Windowse). Prezeranie odtiaľ vypisuje obsah adresárov a otvorenie súboru prečíta ten jeden súbor.

**Čo zapisuje.** Nič, kým nestlačíš tlačidlo, ktoré to hovorí. Takéto tlačidlá sú dve a každé pokrýva výhradne svoju vlastnú oblasť:

- Tlačidlo **Upraviť ako text** v prehliadači odomkne súbor, ktorý máš pred sebou — ten jeden súbor na tej jednej karte. Odvtedy sa doň tvoje úpravy ukladajú tak, ako píšeš.
- **Zámok** v hlavičke, viditeľný len kým riadok cesty smeruje mimo trezora, odomkne vytváranie, premenovanie a presúvanie na externých cestách. Zamkne sa späť, len čo sa vrátiš dovnútra, takže povolenie nikdy neprežije priečinok, pre ktorý bolo dané.

Ani jedno odomknutie sa neukladá do pracovnej plochy ani do nastavení, takže zápis nikdy nezostáva natiahnutý nad súborom, o ktorého otvorení nevieš. Ani v jednom stave sa nič neprepisuje — existujúci cieľ sa odmietne, s využitím výlučného vytvorenia, ktoré ponúka samotný súborový systém, a nie kontroly, ktorá by mohla prehrať preteky — a poznámku nikdy nemožno *presunúť* mimo trezora, pretože odkazy na ňu by sa potichu rozbili; podržanie <kbd>Ctrl</kbd> ju tam namiesto toho skopíruje.

**Prečo.** Poznámky, ktoré hľadáš, bývajú v inom trezore, v priečinku so synchronizáciou alebo na kľúči USB, a vlastná odpoveď Obsidianu — prepni trezor — zavrie všetko, čo si mal otvorené. Toto ťa nechá ísť sa pozrieť bez toho, aby si odišiel, a pri tej príležitosti opraviť preklep.

**Obmedzenie.** Editor Obsidianu je viazaný na súbory vnútri trezora, takže externý súbor **nemožno** otvoriť ako skutočnú poznámku, s odkazmi, spätnými odkazmi a všetkým ostatným; nedokáže to žiadny plugin. Lure ho namiesto toho ukáže vo vlastnom prehliadači (Markdown, obrázky, zvuk, video, PDF) a pre všetko ostatné ponúkne *Otvoriť externe*. Riadok cesty zostáva orámovaný chybovou farbou vždy, keď smeruje mimo trezora, a stopa začína na mieste, ktoré si si vybral — pri názve trezora, domovskom priečinku, jednotke — a nie pri usporiadaní adresárov daného stroja.

## Inštalácia

Uvedené na [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure), ale zatiaľ neschválené pre prehliadač v aplikácii — nainštalujte ho jedným z týchto spôsobov:

**Ručne:** stiahni `main.js`, `manifest.json` a `styles.css` z [najnovšieho vydania](https://github.com/Gelaende51/obsidian-lure/releases) do `<vault>/.obsidian/plugins/lure/` a potom plugin zapni v **Nastavenia → Pluginy tretích strán**.

**BRAT:** pridaj `Gelaende51/obsidian-lure` ako beta plugin.

**Zo zdrojov:** `npm install && npm run build` — pozri [vývoj](../development.md).

## Kompatibilita

Žiadny plugin nie je potrebný. Vstavaný **Prieskumník súborov**, ak je zapnutý, je to, čo zobrazuje priečinky v bočnom paneli; bez neho tie kliknutia nerobia nič.

Vyskúšané s komunitnými pluginmi, ktoré zdieľajú hlavičku poznámky alebo odpovedajú na kliknutie na priečinok — v oboch poradiach načítania, každý zapnutý aj vypnutý:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — oddeľovač otvorí poznámku priečinka namiesto toho, aby priečinok zobrazil, čím sa každý úsek cesty stane miestom, kam sa dá ísť. Jediný plugin poznámok k priečinkom, ktorý si nárokuje cestu v hlavičke; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) a [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) tam nepočúvajú, takže oddeľovač priečinok zobrazí ako obvykle.
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer) a [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — obidva kreslia do toho istého prvku hlavičky; Lure si svoj riadok udrží bez ohľadu na to, ktorý sa načíta prvý, a vypnutie ktoréhokoľvek z nich nechá ten druhý nedotknutý.
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header), [Running Head](obsidian://show-plugin?id=running-head), [Crumbs](obsidian://show-plugin?id=crumbs-obsidian), [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — majú vlastný pruh a spolunažívajú bez problémov.

Iba počítač — model ovládania potrebuje prejdenie myšou, presné kliknutia a klávesnicu. Úplné výsledky, čo zostáva overiť, a porovnanie s Quick Explorer a Breadcrumbs sú v [kompatibilite](../compatibility.md).

## Ako prispieť

- Hlásenia a pull requesty sú vítané — najmä **opravy prekladov**, pretože všetkých 45 jazykov je preložených strojovo a rodení hovoriaci ich nekontrolovali. Nastavenie a základné pravidlá opisuje [vývoj](../development.md).
- **Hlásenie chýb:** https://github.com/Gelaende51/obsidian-lure/issues
- **Dary:** [Ko-fi](https://ko-fi.com/vault51). Plugin je tak či tak zadarmo a pod licenciou AGPL; prepitné poteší, ale nikdy sa nevyžaduje. Zamýšľaným účelom je uhlíková kompenzácia — zámer, nie záväzok: nič sa nekompenzuje, kým suma nestojí za tú námahu, a tento riadok to povie, len čo sa naozaj niečo skompenzuje.

## Poďakovanie

- **Vault51** — autor: návrh, požiadavky a ručné testovanie po celý čas.
- **Claude Opus 5** a **Claude Sonnet 5** (Anthropic, cez Claude Code) — implementácia, preklady a dokumentácia, pod vedením autora. Pozri [vyhlásenie o AI](#vyhlásenie-o-ai).
- **[Obsidian](https://obsidian.md)** — aplikácia, ktorú toto rozširuje, a zdroj každej súčasti, ktorú plugin používa: jeho API pre pluginy, sada ikon Lucide za `setIcon`, priložená inštancia i18next, z ktorej sa čítajú popisy kontextovej ponuky, a jeho vlastné triedy a premenné CSS. Nič cudzie sa nepribaľuje; plugin **nemá žiadne behové závislosti**.

> **Tím Obsidianu sa na tomto projekte nijako nepodieľal** — nenapísal ho, neprezrel, nepodporil ani nezastrešil. Obsidian je ochranná známka spoločnosti Dynalist Inc.; toto je nezávislý, nespriaznený plugin.

Prispievatelia tu budú uvedení, ako budú príspevky prichádzať.

## Odkazy

- **Dokumentácia:** [docs/](../)
- **Stránka pluginu:** https://community.obsidian.md/plugins/lure
- **Web / zdrojový kód:** https://github.com/Gelaende51/obsidian-lure
- **Dary:** [Ko-fi](https://ko-fi.com/vault51) — pozri [ako prispieť](#ako-prispieť).
- **Licencia:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. Forky a znovu šírené zostavenia musia zverejniť svoje zdroje pod tou istou licenciou.
