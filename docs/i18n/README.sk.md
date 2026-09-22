<!-- Preklad README.md — stav: commit 2cbb237.
     Strojový preklad (Claude Opus 5), neskontrolovaný rodenými hovoriacimi.
     Opravy sú vítané; rozhodujúcou verziou je anglické README. -->

[English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · **Slovenčina** · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

Plugin pre [Obsidian](https://obsidian.md), ktorý premení názov súboru v hlavičke poznámky na klikateľnú a upraviteľnú cestu cez celý trezor — ako adresný riadok v správcovi súborov [Dolphin](https://apps.kde.org/dolphin/).

![Kliknutie na oddeľovač za priečinkom: ukazovateľ na ňom spočíva a Prieskumník súborov ten priečinok zobrazil a rozbalil](../images/breadcrumb.png)

Obsidian 1.8.7+ · iba počítač · AGPL-3.0

## Vyhlásenie o AI

- **Agent** — **Claude Opus 5** a **Claude Sonnet 5** (Anthropic, cez Claude Code): napísal TypeScript, CSS, všetkých 45 sád prekladov a dokumentáciu. Preklady vznikli strojovo a rodení hovoriaci ich nekontrolovali.
- **Spotreba** — 3. augusta – 19. septembra 2026, 20 relácií, \~16460 odpovedí: \~19,9 mil. vygenerovaných tokenov, \~87,0 mil. odoslaných, \~5451,0 mil. opätovných čítaní z vyrovnávacej pamäte (\~5558,0 mil. celkom).
- **Zdroj** — model sa učil z otvoreného kódu, dokumentácie a textov komunity, ktoré zverejnili iní. Väčšina zásluh patrí im.
- **Autor** — Vault51: určil každú funkciu, každú verziu vyskúšal v skutočnom trezore, riadil opravy, prezrel všetky výstupy.

## Funkcie

- **Kliknutie na priečinok** otvorí zoznam obsahu jeho *nadradeného* priečinka — vymeň jeden priečinok za susedný a zvyšok cesty nechaj tak. Názov poznámky funguje rovnako a označí sa bez prípony.
- **Kliknutie na oddeľovač** za priečinkom ho zobrazí a rozbalí v Prieskumníkovi súborov. Jedno nastavenie obe úlohy prehodí.
- **Pravé kliknutie alebo potiahnutie ktorejkoľvek položky** — kontextová ponuka samotného Prieskumníka súborov, položka za položkou, aj jeho správanie pri ťahaní. Cesty mimo trezora dostanú rovnocennú ponuku zostavenú práve pre ne, až po *Odstrániť* cez systémový kôš.
- **Kliknutie na názov súboru alebo na prázdne miesto** umožní napísať cestu, s dopĺňaním. `/` schádza nadol, <kbd>Backspace</kbd> vyjde o úroveň vyššie, <kbd>Enter</kbd> potvrdí — a cesta, ktorá ešte neexistuje, sa jednoducho vytvorí, s oznámením, kam sa dostala.
- **Zoznam sa otvorí na položke, v ktorej stojíš**, a prechádzanie šípkami alebo ukazovateľom vyplní pole tým, na čo ukazuješ. Riadok, na ktorý ukážeš, sa zobrazí ako ponuka, akú by dal; keď prejdeš za ktorýkoľvek koniec zoznamu, vráti sa to, čo si napísal, a keď z neho ukazovateľ odtiahneš, zvýraznenie sa vráti tam, kde si bol. Zoznam sleduje kurzor: priečinok, v ktorom sa nachádza, filtrovaný podľa písmen pred ním.
- **Tlačidlo s ceruzkou na priečinku** prepne tie isté úkony na presun/premenovanie, s rovnakými kontrolami, aké robí sám Obsidian. Názov, ktorý je už obsadený, je v zozname červený, a jeho výber sa opýta, či premenovať to, čo je v ceste, alebo si s ním vymeniť miesta či názvy.
- **Podrž <kbd>Ctrl</kbd>** na otvorenie na novej karte — alebo, v režime presunu/premenovania, na skopírovanie poznámky tam namiesto jej presunutia. Názov poznámky aj segmenty priečinkov prijímajú rovnaké modifikátory a ťahanie ako ich riadky v Prieskumníkovi súborov.
- **Názvy sa dopĺňajú počas písania** — za kurzorom sa objaví, označené, to, čo by napísal <kbd>Tab</kbd> — zhoda názvov v priečinku, alebo krok smerom k prvému z nich; písanie ju pohlcuje písmeno po písmene, <kbd>→</kbd> vezme jedno písmeno, <kbd>Tab</kbd> alebo <kbd>End</kbd> ju vezme celú, <kbd>Backspace</kbd> ju vráti. Zoznam ďalej filtruje podľa toho, čo si napísal, nie podľa toho, čo bolo ponúknuté.
- **<kbd>Tab</kbd> dopĺňa ako shell**: predĺži napísané tak ďaleko, ako sa názvy v danom priečinku zhodujú, kde sa nezhodujú, postupuje k jednému z nich krok za krokom, a do priečinka vstúpi, až keď zostane jediný názov. Za koncom cesty namiesto toho rozšíri výber: názov, názov s príponou, cesta od trezora, cesta od koreňa systému. <kbd>Shift</kbd>+<kbd>Tab</kbd> ide tou istou cestou späť — čo vracia, to označí, namiesto aby to zmazal — a za jej začiatkom pokračuje hore po ceste a potom prejde dokola k systémovej ceste. Tak či onak, celé kolo ťa privedie späť k ceste, ktorú si poskladal.
- **Kopírovanie pravým kliknutím** — dvakrát pre názov, trikrát pre všetko napravo od neho, a na prázdnom mieste pre celú cestu alebo systémovú cestu.
- **Potiahni poznámku na priečinok v riadku** a presunie sa tam aj s odkazmi — cieľ už je na obrazovke, takže stačí jedno potiahnutie namiesto výletu cez strom súborov. Funguje aj názov trezora, pre koreň. Celý výber sa presunie naraz a priečinok, ktorý ponúknuté nemôže prijať, neukáže nič, namiesto aby zlyhal až dodatočne.
- **Pusti text na riadok a zapíš ho** — na priečinok alebo na názov trezora, aby si preň pomenoval novú poznámku; na vlastný názov poznámky, aby sa pridal na koniec toho, čo práve čítaš. Súbor z pracovnej plochy funguje rovnako a riadok sa orámuje namodro, kým by tam pristál.
- **Pole nesie farbu toho, čo pomenúva** — tú istú farbu, akú má jeho riadok v zozname, sivú pre poznámku priečinka — a **sčervenie**, len čo mu nič nezodpovedá, takže ešte pred stlačením <kbd>Enter</kbd> vidíš, či poznámku otvorí, alebo vytvorí.
- **Súbory HTML sa zobrazujú ako stránky**, v rámci, ktorému sú odopreté všetky oprávnenia — žiadne skripty, žiadna sieť, žiadny vlastný pôvod — pričom štýly a obrázky uložené vedľa súboru sa načítajú s ním, takže uložená stránka stále vyzerá ako ona. Zdrojový kód je vzdialený jediné stlačenie.
- **Napíš URL** — `https://`, `obsidian://`, alebo cestu `file://` či zakódovanú percentami — a otvorí sa, namiesto aby sa brala ako názov poznámky. Webové adresy idú na kartu vlastného modulu Obsidianu Webový prehliadač, ak ho máš zapnutý.
- **Dlhé cesty sa skracujú tam, kde sú písmená nadbytočné** — nikdy za hranicu toho, čo odlíši priečinok od susedného, a plynulo, nie po jednom písmene — a posúvajú sa, až keď už niet čo stlačiť. Ukáž na skrátený názov a uvidíš ho celý.
- **<kbd>F2</kbd>** prepína medzi nadpisom v texte a riadkom cesty; otvorí sa na názve bez prípony a ďalšími stlačeniami sa rozširuje až po úplné cesty. Hladko prejde cez dialóg premenovania Obsidianu, keď je nadpis odrolovaný mimo obrazovky. Príkaz *Zamerať lištu cesty* prejde tými istými stupňami bez premenovania; riadok *Klávesové skratky* v nastaveniach ťa tam privedie, aby si ho mohol priradiť.
- **Kliknutie na názov trezora** umožní prezerať ostatné trezory, domovský priečinok, koreň súborového systému a pripojené jednotky bez prepnutia trezora. Iba na čítanie, kým neotvoríš červený zámok, ktorý tam vonku zaujme miesto prepínača premenovania, a po celý čas orámované chybovou farbou. Predvolene vypnuté — pozri [mimo trezora](#mimo-trezora).
- **Koreň trezora uvádza stránky, ktoré môže panel obsahovať** — `:graph`, `:search` a všetky zobrazenia, ktoré registrujú tvoje pluginy. Vyber jednu alebo ju napíš: dvojbodka nezačína žiadny názov súboru, takže štítky slúžia zároveň ako adresa. `:graph` napísané vnútri priečinka otvorí graf tohto priečinka. Ak je nainštalovaný plugin úvodnej stránky, oddeľovač samotného trezora ju otvorí prvým kliknutím a ďalším zbalí strom súborov.
- **Riadok na paneloch bez súboru** — prázdna karta ukazuje `vault / :blank`, graf `vault / :graph` a pole vedľa je adresný riadok: napíš cestu a <kbd>Enter</kbd> ju v tomto paneli otvorí alebo vytvorí. Panely na bočnej lište si ponechávajú vlastný nadpis Obsidianu.
- **Dva stupne varovania** — červená mimo trezora, oranžová pre textové súbory, pre ktoré Obsidian nemá editor. Pozri [dve varovné farby](usage.sk.md#dve-varovné-farby).
- **Ikony prispôsobiteľné motívu**, vymeniteľné z útržku CSS — a **46 jazykov**: každý, ktorý Obsidian prináša, plus gréčtina a sanskrit, pre ktoré Obsidian nastavenie nemá. Vyber si jazyk len pre plugin, alebo nasleduj jazyk Obsidianu.
- **Nastavenia:** jazyk, zarovnanie, prednastavené oddeľovače, ktoré kliknutie otvára zoznam, názov trezora, skryté súbory, prípony súborov.

![Ten istý zoznam v režime presunu/premenovania: súčasný názov súboru pripnutý hore, pod ním susedné priečinky a existujúce poznámky zosivené](../images/dropdown.png)

*V režime presunu/premenovania ponúka ten istý zoznam niečo iné: hore pripnutý súčasný názov poznámky, aby sa dala presunúť bez premenovania; priečinky, kam ju presunúť; a už obsadené názvy zosivené, aby sa nič omylom neprepísalo.*

→ [Úplný návod na použitie](usage.sk.md)

## Mimo trezora

Pravidlá Obsidianu pre vývojárov vyžadujú, aby plugin vysvetlil každý prístup k súborom mimo trezora, takže bez okolkov:

**Či vôbec niečo z toho robí.** Iba ak zapneš **Prístup k externým súborom**, ktorý je **predvolene vypnutý**. Pri vypnutom nastavení z pluginu nevedie k externej ceste žiadna cesta a nič z nižšie opísaného kódu sa nikdy nespustí.

**Čo číta.** Iba keď o to požiadaš. Kliknutie na názov trezora vypíše tvoje ostatné trezory — načítané z vlastného `obsidian.json` Obsidianu — a k tomu domovský priečinok, koreň súborového systému a pripojené jednotky (`/proc/mounts` na Linuxe, `/Volumes` na macOS, písmená jednotiek na Windowse). Prezeranie odtiaľ vypisuje obsah adresárov a otvorenie súboru prečíta ten jeden súbor.

**Čo zapisuje.** Nič, kým nestlačíš tlačidlo, ktoré to hovorí. Takéto tlačidlá sú dve a každé pokrýva výhradne svoju vlastnú oblasť:

- Tlačidlo **Upraviť ako text** v prehliadači odomkne súbor, ktorý máš pred sebou — ten jeden súbor na tej jednej karte. Odvtedy sa doň tvoje úpravy ukladajú tak, ako píšeš.
- **Červený zámok** v hlavičke, ktorý stojí na mieste prepínača premenovania, kým riadok cesty smeruje mimo tvojho trezora, odomkne vytváranie, premenovanie, presúvanie a odstraňovanie na externých cestách — a po otvorení vráti to miesto prepínaču. Znova sa zamkne, keď sa vrátiš dovnútra, a pri stlačení, ktorým opúšťaš režim premenovania, takže povolenie nikdy neprežije priečinok, pre ktorý si ho udelil.

Ani jedno odomknutie sa neukladá do pracovnej plochy ani do nastavení, takže zápis nikdy nezostáva natiahnutý nad súborom, o ktorého otvorení nevieš. Ani v jednom stave sa nič neprepisuje — existujúci cieľ sa odmietne, s využitím výlučného vytvorenia, ktoré ponúka samotný súborový systém, a nie kontroly, ktorá by mohla prehrať preteky.

Presun poznámky *von* z trezora je jediný zápis, ktorý stojí niečo, čo už nič nevráti: Obsidian aktualizuje odkazy len vnútri trezora, takže sa rozbije každý odkaz, ktorý na tú poznámku smeruje. Ponúka sa preto až za dialógom, ktorý to povie a spočíta dotknuté poznámky, a prebehne ako skopírovanie a následné odstránenie cez vlastný kôš Obsidianu, takže sa dá obnoviť rovnako ako odstránená poznámka. Podržaním <kbd>Ctrl</kbd> ju namiesto toho skopíruješ von.

**Prečo.** Poznámky, ktoré hľadáš, bývajú v inom trezore, v priečinku so synchronizáciou alebo na kľúči USB, a vlastná odpoveď Obsidianu — prepni trezor — zavrie všetko, čo si mal otvorené. Toto ťa nechá ísť sa pozrieť bez toho, aby si odišiel, a pri tej príležitosti opraviť preklep.

**Obmedzenie.** Editor Obsidianu je viazaný na súbory vnútri trezora, takže externý súbor **nemožno** otvoriť ako skutočnú poznámku, s odkazmi, spätnými odkazmi a všetkým ostatným; nedokáže to žiadny plugin. Lure ho namiesto toho ukáže vo vlastnom prehliadači (Markdown, obrázky, zvuk, video, PDF) a pre všetko ostatné ponúkne *Otvoriť externe*. Riadok cesty zostáva orámovaný chybovou farbou vždy, keď smeruje mimo trezora, a stopa začína na mieste, ktoré si si vybral — pri názve trezora, domovskom priečinku, jednotke — a nie pri usporiadaní adresárov daného stroja.

## Inštalácia

**V Obsidiane:** otvor **Nastavenia → Pluginy tretích strán → Prehľadávať**, vyhľadaj *Lure* a potom klikni na *Inštalovať* a *Zapnúť* — alebo stlač *Add to Obsidian* na [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure).

**Ručne:** stiahni `main.js`, `manifest.json` a `styles.css` z [najnovšieho vydania](https://github.com/Gelaende51/obsidian-lure/releases) do `<vault>/.obsidian/plugins/lure/` a potom plugin zapni v **Nastavenia → Pluginy tretích strán**.

**BRAT:** pridaj `Gelaende51/obsidian-lure` ako beta plugin.

**Zo zdrojov:** `npm install && npm run build` — pozri [vývoj](../development.md).

## Kompatibilita

Žiadny plugin nie je potrebný. Vstavaný **Prieskumník súborov**, ak je zapnutý, je to, čo zobrazuje priečinky v bočnom paneli; bez neho tie kliknutia nerobia nič.

Vyskúšané s komunitnými pluginmi, ktoré zdieľajú hlavičku poznámky alebo odpovedajú na kliknutie na priečinok — v oboch poradiach načítania, každý zapnutý aj vypnutý:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — oddeľovač otvorí poznámku priečinka namiesto toho, aby priečinok zobrazil, čím sa každý úsek cesty, akokoľvek hlboko, stane miestom, kam sa dá ísť: poznámka sa určí podľa konvencie samotného pluginu, a nie tak, že by sa odpoveď nechala na ňom. Je to aj jediný plugin, ktorý takú konvenciu zverejňuje; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) a [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) žiadnu nezverejňujú a cestu v hlavičke si nikdy nenárokujú, takže s nimi oddeľovač priečinok zobrazí ako obvykle.
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer) a [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — obidva kreslia do toho istého prvku hlavičky; Lure si svoj riadok udrží bez ohľadu na to, ktorý sa načíta prvý, a vypnutie ktoréhokoľvek z nich nechá ten druhý nedotknutý.
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header), [Running Head](obsidian://show-plugin?id=running-head), [Crumbs](obsidian://show-plugin?id=crumbs-obsidian), [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — majú vlastný pruh a spolunažívajú bez problémov.

Iba počítač — model ovládania potrebuje prejdenie myšou, presné kliknutia a klávesnicu. Úplné výsledky, čo ešte zostáva overiť, a porovnanie s Quick Explorer a Breadcrumbs sú v [kompatibilite](../compatibility.md).

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
- **Zoznam zmien:** [CHANGELOG.sk.md](CHANGELOG.sk.md)
- **Stránka pluginu:** https://community.obsidian.md/plugins/lure
- **Web / zdrojový kód:** https://github.com/Gelaende51/obsidian-lure
- **Dary:** [Ko-fi](https://ko-fi.com/vault51) — pozri [ako prispieť](#ako-prispieť).
- **Licencia:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. Forky a znovu šírené zostavenia musia zverejniť svoje zdroje pod tou istou licenciou.
