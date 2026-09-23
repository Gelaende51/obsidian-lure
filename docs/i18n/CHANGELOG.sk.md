<!-- Preklad CHANGELOG.md — stav: commit 2cbb237.
     Strojový preklad (Claude Opus 5), neskontrolovaný rodenými hovoriacimi.
     Opravy sú vítané; rozhodujúcou verziou je anglický CHANGELOG. -->

[English](../../CHANGELOG.md) · [العربية](CHANGELOG.ar.md) · [አማርኛ](CHANGELOG.am.md) · [Беларуская](CHANGELOG.be.md) · [বাংলা](CHANGELOG.bn.md) · [Català](CHANGELOG.ca.md) · [Čeština](CHANGELOG.cs.md) · [Dansk](CHANGELOG.da.md) · [Deutsch](CHANGELOG.de.md) · [Ελληνικά](CHANGELOG.el.md) · [Español](CHANGELOG.es.md) · [فارسی](CHANGELOG.fa.md) · [Suomi](CHANGELOG.fi.md) · [Français](CHANGELOG.fr.md) · [Gaeilge](CHANGELOG.ga.md) · [עברית](CHANGELOG.he.md) · [Magyar](CHANGELOG.hu.md) · [Bahasa Indonesia](CHANGELOG.id.md) · [Italiano](CHANGELOG.it.md) · [日本語](CHANGELOG.ja.md) · [ქართული](CHANGELOG.ka.md) · [ភាសាខ្មែរ](CHANGELOG.kh.md) · [한국어](CHANGELOG.ko.md) · [Latviešu](CHANGELOG.lv.md) · [Bahasa Melayu](CHANGELOG.ms.md) · [नेपाली](CHANGELOG.ne.md) · [Nederlands](CHANGELOG.nl.md) · [Norsk](CHANGELOG.no.md) · [Polski](CHANGELOG.pl.md) · [Português](CHANGELOG.pt.md) · [Português (Brasil)](CHANGELOG.pt-BR.md) · [Română](CHANGELOG.ro.md) · [Русский](CHANGELOG.ru.md) · [संस्कृतम्](CHANGELOG.sa.md) · **Slovenčina** · [Shqip](CHANGELOG.sq.md) · [Српски](CHANGELOG.sr.md) · [Svenska](CHANGELOG.sv.md) · [ไทย](CHANGELOG.th.md) · [Türkçe](CHANGELOG.tr.md) · [Українська](CHANGELOG.uk.md) · [Oʻzbekcha](CHANGELOG.uz.md) · [Tiếng Việt](CHANGELOG.vi.md) · [简体中文](CHANGELOG.zh.md) · [繁體中文](CHANGELOG.zh-TW.md)

# Zoznam zmien

Každé vydanie pluginu Lure, od najnovšieho. Čo pribudlo od posledného vydania, nájdeš pod *Nevydané*. Verzie nemajú predponu `v`, rovnako ako značky vydaní.

## Nevydané

### Pridané

- **Obsadený názov sa opýta, namiesto toho, aby odmietol.** Presun alebo premenovanie na názov, ktorý už existuje, otvorí dialóg zobrazujúci oba súbory podľa ich celej cesty. Môžeš premenovať ten, čo je v ceste, a pokračovať, vymeniť si s ním miesta (naprieč priečinkami: každý si ponechá svoj názov a prevezme priečinok toho druhého), alebo si s ním vymeniť názvy (v rámci jedného priečinka). Zrušenie nič nepresunie. Každé tlačidlo hovorí, čo urobí, keď naň ukážeš. Výber obsadeného názvu zo zoznamu sa opýta to isté, a rovnako aj pustenie súboru na priečinok, ktorý už daný názov obsahuje. Názov v poli na premenovanie v dialógu je červený, kým je obsadený.
- **`:graph` vnútri priečinka otvorí graf tohto priečinka** — graf filtrovaný na `path:"that/folder"`, tak, ako by to urobilo jeho vlastné vyhľadávacie pole. V koreni trezora je to stále celý graf, ako predtým.
- **Priečinok, ktorý už daný názov obsahuje, je v zozname počas presunu červený**, a rovnako aj súbor s takým názvom, takže konflikt sa ukáže ešte pred výberom.

### Zmenené

- **Ponuka je vždy to, čo by napísal Tab.** Tam, kde sa názvy prestanú zhodovať, pole ponúka krok smerom k prvému z nich — predtým tam nič neponúkalo a Tab aj tak niečo napísal.
- **Ponuky ignorujú veľkosť písmen.** Napísanie `sch` ponúkne `Schemes`, napísané tak, ako znie názov; vzatie ponuky späť vráti tvoje písmená tak, ako si ich napísal. Tam, kde existuje aj `Test`, aj `test`, sa ponúkne ten, ktorý je napísaný presne tak, ako si písal.
- **Po stlačení Tab sa hneď ponúkne ďalší krok**, tak ako po napísanom písmene.
- **Zoznam sleduje kurzor**, alebo začiatok výberu: uvádza priečinok, v ktorom sa ten bod nachádza, filtrovaný podľa písmen pred ním. Na začiatku názvu je to celý priečinok.
- **Ukázanie na riadok ho zobrazí ako ponuku** — čo si napísal, zostáva tvoje a zvyšok názvu je označený — a presunutie ukazovateľa mimo zoznamu ponuku vráti späť.
- **→ vezme jedno písmeno ponuky** namiesto celej; <kbd>End</kbd> ju stále vezme celú.
- **F2 v otvorenom poli ho zmení na premenovanie tam, kde stojí**, pričom zachová text, kurzor aj výber, a **Zamerať lištu cesty** z neho premenovanie tým istým spôsobom zase odoberie.
- **Čokoľvek iné stlačené alebo kliknuté medzi stlačeniami spustí cyklus F2 a Zamerať lištu cesty odznova.**
- **Priečinky sú v zozname tučné**, takže vlastná poznámka priečinka už nemusí byť sivá, aby sa odlíšila: je fialová ako každá iná poznámka.
- **Zoznam nie je širší ako lišta cesty.** Názov, ktorý sa tam nezmestí, sa skráti tak, ako lišta cesty skracuje svoj vlastný, a pri ukázaní naň sa zobrazí celý.
- **PageUp a PageDown posúvajú zoznam o toľko, koľko ukazuje**, aj z poľa, a vybraný riadok si udrží svoje miesto na obrazovke. <kbd>Home</kbd> a <kbd>End</kbd> privedú do zorného poľa prvý a posledný riadok.
- **Zoznam zobrazuje až 1 000 položiek**, kým začne počítať zvyšok, namiesto 100.
- **Priečinky ustupujú najdlhšie ako prvé.** Keď nie je dosť miesta, najdlhší názov priečinka sa skráti na dĺžku ďalšieho najdlhšieho, potom sa skrátia oba spolu, a tak ďalej, každý sa zastaví na svojom dolnom limite. Predtým sa všetky priečinky skracovali naraz, úmerne svojej dĺžke.
- **Skrátené názvy sa posúvajú plynulo, nie skokom.** Názov, ktorý ustupuje, sa oreže na pixel a stráca sa pod svojimi `…`, takže nič za ním v riadku sa nehýbe po krokoch, kým sa mení veľkosť panela.

### Opravené

- V pravom paneli sa zoznam otváral pod ľavým panelom, kým nebolo napísané prvé písmeno.
- Presunutie ukazovateľa mimo zoznamu vrátilo ponuku späť, ale nie jej farbu.
- Medzera tam, kde bol skrátený názov rozdelený — `development guidelines` — bola vynechaná, čím sa dve slová spojili dokopy.

## 1.4.0 — 2026-09-19[^1.4.0]

### Pridané

- **Riadok Klávesové skratky v nastaveniach.** Jeho tlačidlo otvorí *Klávesové skratky* Obsidianu prefiltrované na tento plugin, kde môžeš príkazu *Zamerať lištu cesty* — ktorý sa dodáva bez klávesovej skratky — nejakú priradiť.
- **Lišta cesty na paneloch bez súboru.** Prázdna karta ukazuje `vault / :blank`, graf `vault / :graph` a každé ďalšie zobrazenie, ktoré nemá čo pomenovať, dostane vlastný štítok s `:` — karta pluginu domovskej karty ukazuje `:home-launcher`. Pole vedľa je adresný riadok: napíš cestu a <kbd>Enter</kbd> ju v tomto paneli otvorí alebo vytvorí. Predtým bol riadok prázdny — plugin skryl vlastný nadpis Obsidianu a nič nedal na jeho miesto.
- **Stránku možno aj napísať, nielen vybrať** — `:graph` a ostatné sú adresa, nielen položka zoznamu. Dvojbodka nezačína žiadny názov súboru, takže jej napísanie kdekoľvek ich vyvolá a pole má ich farbu namiesto ponuky vytvoriť poznámku, ktorá by sa tak nemohla volať.
- **Riadok pre vlastné nastavenie Obsidianu *Zobraziť všetky typy súborov***, vedľa pravidla pre súbory s bodkou, keďže obe rozhodujú o tom, čo môže rozbaľovací zoznam uvádzať: hovorí, aby si toto nastavenie hľadal vo vlastných nastaveniach Obsidianu a zapol ho, ak chceš vidieť všetky súbory, a tlačidlo vedľa neho otvorí príslušnú stránku s nastavením odrolovaným do zobrazenia a zablikaným, ako výsledok vyhľadávania v nastaveniach. Pomenované Obsidianovými slovami, vysvetlené v 45 jazykoch.
- **Koreň trezora uvádza stránky, ktoré môže panel obsahovať** — `:graph`, `:search` a všetky zobrazenia, ktoré registrujú tvoje pluginy, vrátane domovskej karty či kalendára. Vyber jednu a panel ju otvorí, tak ako výber poznámky otvorí poznámku. Zobrazenia, ktoré existujú na zobrazenie súboru, sú vynechané, pretože by nemali čo ukázať.
- **Oddeľovač samotného trezora otvorí tvoju úvodnú stránku**, ak ju nejaký plugin poskytuje, a je podčiarknutý, aby to naznačil; ďalšie stlačenie zbalí strom súborov a to po ňom vráti presne to, čo bolo otvorené. Bez takého pluginu prvé stlačenie zbalí, ako predtým.
- **Napíš cestu od koreňa súborového systému.** `/` pred prázdnym poľom ho otvorí namiesto toho, aby sa stratilo, každé ďalšie lomítko v ňom mu patrí a rozbaľovací zoznam uvádza počítač, nie trezor.

### Zmenené

- **F2 a Zamerať lištu cesty stláčajú Tab vo vnútri poľa.** Čokoľvek by tam urobil Tab — ďalší stupeň, doplnenie napísaného, vstup do priečinka — urobia aj oni; odídu iba tam, kde sa Tab vracia na začiatok cesty: F2 na nadpis v texte, príkaz do poznámky. Predtým F2 v poli, do ktorého si písal, začalo znova od názvu a príkaz pole zatvoril.
- **Krok po odchode z cyklu je koreňový priečinok.** Stlačenie po návrate F2 na nadpis v texte alebo príkazu do poznámky skončí tam, kde končí okruh Tabu — v koreni trezora, s celou cestou v poli a prvým priečinkom označeným — takže žiadny krok okruhu nezostáva len pre Tab.
- **Zamerať lištu cesty postupuje ako F2.** Otvorí sa na názve namiesto celej cesty, prejde tými istými štyrmi stupňami a stlačenie po poslednom pole zatvorí a vráti kurzor do poznámky — predtým donekonečna kružilo po stupňoch a jediný kláves, ktorý sa k riadku dostal, ho nemohol opustiť.
- **Obsadený názov sa hlási pri použití, nie pri písaní.** Každý názov písaný smerom k `Notes.md` prechádza názvami, ktoré môžu byť samostatné súbory, a upozornenie predtým blikalo a miznalo písmeno po písmene. To, čo je zle v pravopise názvu, sa naďalej hlási hneď, ako sa napíše.
- **Oddeľovač, ktorého poznámka priečinka je už otvorená, zobrazí priečinok** namiesto opätovného otvárania toho, čo je na obrazovke — čo jeho druhé stlačenie vždy znamenalo.
- **Kde sa nachádzaš, je v rozbaľovacom zozname tučné**, nielen modré.
- **Všetko, čo nie je poznámka, je v rozbaľovacom zozname oranžové**, nielen textové typy, pre ktoré Obsidian nemá zobrazenie. Fialová vyberie poznámky z priečinka so zmiešaným obsahom; jedna farba pre zvyšok povie to isté rýchlejšie.

### Opravené

- **Backspace nad kliknutým priečinkom už neberie meno trezora.** Lomítko, ktoré zostalo na začiatku, sa čítalo ako cesta od koreňa počítača, čo vyprázdni úvodný segment — a zatvorenie poľa Escapom ho nikdy nevrátilo, takže karta natrvalo prišla o názov a ikonu trezora. Úvodné lomítko sa teraz počíta ako koreň počítača, iba ak tam jeho prvý priečinok naozaj je, a úvodný segment sa vráti pri každom spôsobe odchodu z poľa.
- Mimo trezora boli súbory skryté, ak nebolo zapnuté nastavenie Obsidianu **Rozpoznať všetky prípony súborov** — nastavenie o tom, čo trezor indexuje, použité na priečinky, ktoré v trezore nie sú. `.txt` vedľa tvojich poznámok sa tam zobrazí v každom prípade.
- Rozbaľovací zoznam názvu trezora nerobil nič na paneli bez súboru, čo je presne ten panel, ktorý by si použil na presun inam.
- Kliknutie na názov trezora nechalo vlastný nadpis Obsidianu stáť vedľa cesty v poli, zosivený, kde sa inak nikdy nezobrazuje: riadok sa meria podľa toho, čo vykreslil, a v tom okamihu sa vyprázdnil, aby urobil miesto poľu.

- Kliknutie na prázdne miesto otvorilo pole a potom ho stratilo: zobrazenie poznámky v Prieskumníkovi súborov si berie kurzor so sebou, takže pole stálo otvorené a označené, kým každý stlačený kláves išiel do stromu.
- Stupeň, ktorý ukazuje cestu od koreňa systému, vykreslil vedľa poľa stopu tej istej cesty, neprispôsobenú, takže hlboká cesta bola namaľovaná sama cez seba.

## 1.3.0 — 2026-09-17[^1.3.0]

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

[^1.4.0]: Zmeny od 1.3.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.3.0...1.4.0>
[^1.3.0]: Zmeny od 1.2.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.2.0...1.3.0>
[^1.2.0]: Zmeny od 1.1.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.2...1.2.0>
[^1.1.2]: Zmeny od 1.1.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.1...1.1.2>
[^1.1.1]: Zmeny od 1.1.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.0...1.1.1>
[^1.1.0]: Zmeny od 1.0.4: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.4...1.1.0>
[^1.0.4]: Zmeny od 1.0.3: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.3...1.0.4>
[^1.0.3]: Zmeny od 1.0.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.2...1.0.3>
[^1.0.2]: Zmeny od 1.0.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.1...1.0.2>
[^1.0.1]: Zmeny od 1.0.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.0...1.0.1>
[^1.0.0]: Prvé vydanie: <https://github.com/Gelaende51/obsidian-lure/releases/tag/1.0.0>
