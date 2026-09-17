<!-- Preklad CHANGELOG.md — stav: commit f133f41.
     Strojový preklad (Claude Opus 5), neskontrolovaný rodenými hovoriacimi.
     Opravy sú vítané; rozhodujúcou verziou je anglický CHANGELOG. -->

[English](../../CHANGELOG.md) · [العربية](CHANGELOG.ar.md) · [አማርኛ](CHANGELOG.am.md) · [Беларуская](CHANGELOG.be.md) · [বাংলা](CHANGELOG.bn.md) · [Català](CHANGELOG.ca.md) · [Čeština](CHANGELOG.cs.md) · [Dansk](CHANGELOG.da.md) · [Deutsch](CHANGELOG.de.md) · [Ελληνικά](CHANGELOG.el.md) · [Español](CHANGELOG.es.md) · [فارسی](CHANGELOG.fa.md) · [Suomi](CHANGELOG.fi.md) · [Français](CHANGELOG.fr.md) · [Gaeilge](CHANGELOG.ga.md) · [עברית](CHANGELOG.he.md) · [Magyar](CHANGELOG.hu.md) · [Bahasa Indonesia](CHANGELOG.id.md) · [Italiano](CHANGELOG.it.md) · [日本語](CHANGELOG.ja.md) · [ქართული](CHANGELOG.ka.md) · [ភាសាខ្មែរ](CHANGELOG.kh.md) · [한국어](CHANGELOG.ko.md) · [Latviešu](CHANGELOG.lv.md) · [Bahasa Melayu](CHANGELOG.ms.md) · [नेपाली](CHANGELOG.ne.md) · [Nederlands](CHANGELOG.nl.md) · [Norsk](CHANGELOG.no.md) · [Polski](CHANGELOG.pl.md) · [Português](CHANGELOG.pt.md) · [Português (Brasil)](CHANGELOG.pt-BR.md) · [Română](CHANGELOG.ro.md) · [Русский](CHANGELOG.ru.md) · [संस्कृतम्](CHANGELOG.sa.md) · **Slovenčina** · [Shqip](CHANGELOG.sq.md) · [Српски](CHANGELOG.sr.md) · [Svenska](CHANGELOG.sv.md) · [ไทย](CHANGELOG.th.md) · [Türkçe](CHANGELOG.tr.md) · [Українська](CHANGELOG.uk.md) · [Oʻzbekcha](CHANGELOG.uz.md) · [Tiếng Việt](CHANGELOG.vi.md) · [简体中文](CHANGELOG.zh.md) · [繁體中文](CHANGELOG.zh-TW.md)

# Zoznam zmien

Každé vydanie pluginu Lure, od najnovšieho. Čo pribudlo od posledného vydania, nájdeš pod *Nevydané*. Verzie nemajú predponu `v`, rovnako ako značky vydaní.

## Nevydané[^unreleased]

### Pridané

- **Prines súbor do trezora zvonku.** Presuň alebo skopíruj súbor odkiaľkoľvek z disku na cestu vnútri trezora; pristane ako skutočná poznámka a pri presune sa pôvodný súbor odstráni až potom, ako sa kopírovanie podarilo.
- **Pusti text alebo súbor na riadok a zapíš ho.** Na priečinok: nová poznámka v tom priečinku, pomenovaná tak, ako ju napíšeš. Na názov poznámky alebo na oddeľovač priečinka, ktorý má poznámku priečinka: pridá sa na koniec tej poznámky, po potvrdení.
- **Vytvor poznámku priečinka** druhým stlačením toho, čo priečinok otvára, ak beží plugin na poznámky priečinkov a priečinok ju ešte nemá. Umiestni sa tam, kam určujú vlastné nastavenia pluginu [Folder notes](https://github.com/LostPaul/obsidian-folder-notes).
- **Potiahni priečinok z riadku cesty na lištu kariet** a otvorí sa tam: jeho poznámka priečinka, ak ju má, inak karta stojaca v tom priečinku.
- **Koliesko prechádza zoznamom.** Nad názvom prvé otočenie otvorí jeho zoznam a každé ďalšie posunie zvýraznenie o riadok. Riadok, ktorý sa posúva do strán, si koliesko ponechá na posúvanie.
- **Šípkou vyjdi pred začiatok poľa** a vtiahni doň priečinok pred ním: <kbd>←</kbd> pre jeden priečinok, <kbd>Shift</kbd>+<kbd>Home</kbd> (alebo <kbd>Home</kbd> pri zatvorenom zozname) pre všetky.
- **Pole nesie farbu toho, čo pomenúva**, tú istú, akú má jeho riadok v zozname, a sčervenie, len čo mu nič nezodpovedá — v tej chvíli by <kbd>Enter</kbd> niečo vytvoril, a nie otvoril.
- **Poznámky priečinkov sú v zozname sivé**, takže sa čítajú ako poznámky svojho priečinka, a nie ako ďalšia poznámka navyše.
- **Kliknutie stredným tlačidlom na oddeľovač** otvorí ten priečinok na novej karte: jeho poznámku priečinka alebo kartu stojacu v ňom.

### Zmenené

- **Zámok a prepínač premenovania sú jeden ovládací prvok.** Mimo trezora zaujme miesto prepínača červený zatvorený zámok; jeho otvorenie odovzdá miesto prepínaču a odchod z režimu premenovania ho opäť zatvorí.
- **Kláves na premenovanie sa pýta aj zámku.** Mimo trezora jedno stlačenie zámkom zablikne; druhé stlačenie do pol sekundy udelí to, čo udeľuje zámok, a otvorí režim premenovania.
- **Kláves na premenovanie prejde celé kolo** — nadpis v texte, názov, názov s príponou, cesta od trezora, cesta od koreňa systému — a ďalšie stlačenie je zase nadpis v texte.
- **Kliknutie s <kbd>Ctrl</kbd> a kliknutie stredným tlačidlom už nie sú to isté.** Jedno otvorí kartu a prejde na ňu, druhé ju otvorí na pozadí.
- **Pravé kliknutie na názov poznámky otvorí vlastnú ponuku súboru.**
- **Zoznam je taký vysoký, ako dovolí okno**, namiesto pevných 300 pixelov, ktoré dáva Obsidian.
- **Kliknutie na priečinok pri otvorenom poli zachová celú cestu za ním** a kliknutie do priečinka vnútri poľa vypíše obsah toho priečinka v plnom rozsahu.
- **Oddeľovač otvorí poznámku priečinka v ľubovoľnej hĺbke**, ak beží Folder notes, a je podčiarknutý všade tam, kde nejaká je. Predtým fungovali len priečinky na najvyššej úrovni. Pri ostatných pluginoch na poznámky priečinkov oddeľovač priečinok naďalej zobrazí.

### Opravené

- **Otvorené pole prežilo svoj súbor.** Prepnutie na inú poznámku pri otvorenom riadku cesty nechalo v riadku názov starého súboru po celý zvyšok relácie.
- **Odstrániť, Premenovať a Vytvoriť kópiu boli mimo trezora odmietnuté** aj pri otvorenom zámku a pri obrázkoch, PDF a stránkach sa k nim nedalo dostať vôbec.
- **<kbd>Ctrl</kbd>+<kbd>Enter</kbd> nerobil nič, kým bol otvorený zoznam** — a tak sa otvára každé pole.
- **<kbd>Enter</kbd> pri otvorenom zozname, no bez zvýrazneného riadku**, nerobil nič; teraz potvrdí to, čo si napísal.
- **Riadok, ktorý pretekal aj vtedy, keď už bol každý názov čo najkratší, sa nedal posúvať**, takže koniec cesty zostal nedosiahnuteľný.
- **Vypnutie pluginu nechalo mŕtve tlačidlo** v hlavičke každej poznámky, ktorú upravil.

## 1.2.0 — 2026-08-25[^1.2.0]

### Pridané

- **Nastavenie jazyka.** Lure sa predvolene riadi jazykom Obsidianu a dá sa nastaviť na ktorýkoľvek zo svojich vlastných. Je to aj jediná cesta ku gréckemu a sanskritskému prekladu, ktoré samotný Obsidian neponúka. Popis tohto nastavenia zostáva v angličtine, aby sa dalo vždy nájsť aj z jazyka, ktorý nevieš prečítať.

## 1.1.2 — 2026-08-25[^1.1.2]

### Zmenené

- **Ľahší štýlový predpis.** Riadok už nepoužíva selektory `:has()` ani väčšinu pravidiel `!important`. Prispôsobuje sa s menšou námahou a počet varovaní pri kontrole pluginu klesol zo 56 na 7.

## 1.1.1 — 2026-08-22[^1.1.1]

### Opravené

- **Krátky názov priečinka sa mohol vykresliť s medzerou v strede** — `atlas` ako `atl as` — pretože miesto vyhradené pre jeho skrátenú podobu bolo širšie než samotný názov.

## 1.1.0 — 2026-08-22[^1.1.0]

### Pridané

- **Slovník pravého kliknutia.** Jedno stlačenie otvorí ponuku; dve a tri stlačenia skopírujú postupne viac — názov, názov s príponou, cestu. Ponuky riadku sa teraz zhodujú s ponukami Prieskumníka súborov, položka za položkou.
- **Ponuky mimo trezora.** Riadky zoznamu a externý prehliadač ponúkajú otvorenie, *Kopírovať cestu* a *Zobraziť v priečinku*; pri otvorenom zámku aj *Nová poznámka*, *Nový priečinok*, *Vytvoriť kópiu*, *Premenovať…* a *Odstrániť*. Odstránenie presunie súbor do systémového koša a nikdy nie je trvalé.
- **Otvorenie inde.** <kbd>Ctrl</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> a kliknutie stredným tlačidlom na názov poznámky alebo na priečinok ho otvoria na novej karte, v rozdelení alebo v okne. Oboje sa dá ťahať, rovnako ako ich riadky v Prieskumníkovi súborov.
- **Potiahni poznámky na riadok a presuň ich.** Pusť poznámku, viacero poznámok alebo priečinok na segment priečinka alebo na názov trezora.
- **Príkaz: Zamerať lištu cesty**, s označenou celou cestou — bez predvolenej klávesovej skratky, prirad si vlastnú.
- **Napíš URL** do riadku cesty: `http(s)://` a `obsidian://` sa otvoria ako odkazy, `file://` a cesty zakódované percentami otvoria súbor.
- **Dopĺňanie klávesom Tab**, tak ako to robí shell: každé stlačenie doplní tak ďaleko, ako sa názvy v priečinku zhodujú, a zastaví sa tam, kde sa rozchádzajú. <kbd>Shift</kbd>+<kbd>Tab</kbd> ide späť. Keď už niet čo dopĺňať, <kbd>Tab</kbd> namiesto toho rozšíri výber: názov, názov s príponou, cesta od trezora, cesta od koreňa systému.
- **Zoznam sa otvorí tam, kde stojíš**, a to, na čo ukazuješ, sa zobrazí v poli; keď zoznam opustíš, vráti sa ti tvoj text.
- **Presuň poznámku mimo trezora** po potvrdení, ktoré spočíta odkazy, čo sa tým rozbijú. Skopíruje sa von a potom sa odstráni do koša, takže sa dá obnoviť ako každá odstránená poznámka.
- Nastavenie **Zobrazovať prípony súborov** a porozumenie cestám v úvodzovkách (tak, ako ich vytvára *Kopírovať ako cestu* vo Windowse).
- **Nastavenia sa objavia vo vyhľadávaní nastavení Obsidianu** v Obsidiane 1.13 a novšom.

### Zmenené

- **Dlhé cesty sa zmestia do panela.** Názvy sa skracujú od tých najmenej užitočných — najprv názov trezora, potom prípona, potom priečinky a názov samotnej poznámky až nakoniec — nikdy nie za hranicu, za ktorou by sa už nedali rozlíšiť. Ukáž na skrátený názov a prečítaš si ho celý.
- **Kliknutie na názov poznámky ho označí bez prípony**, takže premenovanie už neriskuje zmenu typu súboru.
- **Kláves na premenovanie sa otvorí na názve bez prípony** a ďalšie stlačenia výber rozširujú.
- **Kliknutie na priečinok zachová zvyšok cesty viditeľný**, aj mimo trezora.
- **Prezeranie späť vnútri trezora otvára súbory ako poznámky**, s odkazmi a spätnými odkazmi, a nie v externom prehliadači.

### Opravené

- **Popisy ponúk boli vo všetkých jazykoch anglické**; teraz pochádzajú z vlastných prekladov Obsidianu.
- **Kláves na premenovanie uviazol na dialógu premenovania Obsidianu**, keď bola poznámka odrolovaná pod svoj nadpis.
- **<kbd>Esc</kbd> vyžadoval dve stlačenia** na zatvorenie poľa a jeho zoznamu.
- **<kbd>Ctrl</kbd>+<kbd>Enter</kbd> otvoril odkaz v editore** namiesto toho, aby pôsobil na riadok cesty.
- **Premenovanie mimo trezora stratilo napísaný názov** pri stlačení zámku.
- **Tab sa mohol točiť dokola bez pokroku** pri priečinku, ktorý stojí vedľa vlastnej poznámky priečinka.

## 1.0.4 — 2026-08-13[^1.0.4]

### Pridané

- **Poznámka, v ktorej si, je v zozname označená namodro**, takže pri prezeraní späť do jej priečinka vidíš, odkiaľ si vyšiel.

## 1.0.3 — 2026-08-13[^1.0.3]

### Dokumentácia

- README odkazuje na stránku pluginu v komunitnom zozname a preložené READMEs sú aktualizované.

## 1.0.2 — 2026-08-13[^1.0.2]

### Zmenené

- **Vyžaduje Obsidian 1.8.7 alebo novší** (predtým 1.4.0). Dve funkcie, na ktorých riadok cesty stojí — kopírovanie súborov a chybová bublina pod poľom — ho potrebujú.
- **Súbory na stiahnutie pri vydaní nesú podpísaný doklad o zostavení**, takže si príkazom `gh attestation verify` môžeš overiť, že `main.js` bol zostavený z tohto repozitára.

### Opravené

- **Otvorenie chýbajúceho externého súboru v predvolenej aplikácii zlyhalo potichu**; teraz sa zlyhanie oznámi.

## 1.0.1 — 2026-08-13[^1.0.1]

### Opravené

- **V režime premenovania si poznámka zavadzala sama sebe** — pri prezeraní späť do vlastného priečinka sa jej názov v zozname skryl, akoby si bránila vlastnému premenovaniu.
- **Prvé zobrazenie priečinka po spustení Obsidianu nerozbalilo nič.**
- **Výber priečinka zo zoznamu mohol ukončiť režim premenovania** namiesto toho, aby doň zostúpil.
- **Externé úpravy mohol potichu prepísať** iný zapisovateľ, napríklad Sync alebo druhý panel. Zápisy sú teraz atomické.
- **Vynulovanie obrysu zamerania presakovalo do iných zobrazení**; teraz sa vzťahuje len na hlavičky, ktoré upravil Lure.

### Dokumentácia

- README a návod na použitie sú dostupné vo všetkých 44 jazykoch, ktoré plugin prináša.
- Návod uvádzal nastavenie Obsidianu *Detect all file extensions*, ktoré sa teraz volá *Rozpoznávať všetky typy súborov*.

## 1.0.0 — 2026-08-10[^1.0.0]

Prvé vydanie. Nahrádza názov súboru v hlavičke poznámky klikateľnou a upraviteľnou cestou cez trezor — adresný riadok pre tvoje poznámky, podľa vzoru Dolphinu.

### Pridané

- **Kliknutie na priečinok** otvorí zoznam obsahu jeho nadradeného priečinka, aby sa dal vymeniť za susedný a zvyšok cesty zostal nedotknutý.
- **Kliknutie na oddeľovač** za priečinkom ho zobrazí a rozbalí v Prieskumníkovi súborov, prípadne otvorí jeho poznámku priečinka, ak sa o ňu stará Folder notes.
- **Kliknutie na názov súboru alebo na prázdne miesto** umožní napísať cestu, s dopĺňaním: `/` schádza nadol, <kbd>Backspace</kbd> vyjde o úroveň vyššie, <kbd>Enter</kbd> potvrdí.
- **Režim presunu/premenovania** prepne tie isté úkony na presúvanie a premenovanie, s kontrolami, aké robí sám Obsidian.
- **<kbd>Ctrl</kbd> otvára na novej karte** — alebo, v režime presunu/premenovania, poznámku tam namiesto toho skopíruje.
- **<kbd>F2</kbd> prepína** medzi nadpisom v texte a riadkom cesty.
- **Mimo trezora** (predvolene vypnuté): názov trezora otvorí tvoje ďalšie trezory, domovský priečinok, koreň súborového systému a pripojené jednotky. Tam vonku sa nič nezapíše, kým to neodomkneš, a poznámku možno z trezora iba skopírovať, nikdy nie presunúť.
- **45 jazykov.**

[^unreleased]: Zmeny od 1.2.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.2.0...HEAD>
[^1.2.0]: Zmeny od 1.1.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.2...1.2.0>
[^1.1.2]: Zmeny od 1.1.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.1...1.1.2>
[^1.1.1]: Zmeny od 1.1.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.0...1.1.1>
[^1.1.0]: Zmeny od 1.0.4: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.4...1.1.0>
[^1.0.4]: Zmeny od 1.0.3: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.3...1.0.4>
[^1.0.3]: Zmeny od 1.0.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.2...1.0.3>
[^1.0.2]: Zmeny od 1.0.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.1...1.0.2>
[^1.0.1]: Zmeny od 1.0.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.0...1.0.1>
[^1.0.0]: Prvé vydanie: <https://github.com/Gelaende51/obsidian-lure/releases/tag/1.0.0>
