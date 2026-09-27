<!-- Preklad súboru docs/usage.md — stav: commit 94b1372.
     Strojový preklad (Claude Sonnet 5), neoverený rodenými hovoriacimi.
     Popisky pluginu pochádzajú zo src/lang/translations.ts a popisky
     Obsidianu z prekladov, ktoré dodáva samotná aplikácia, takže
     zodpovedajú tomu, čo vidíš na obrazovke. -->

[English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · [Čeština](usage.cs.md) · [Dansk](usage.da.md) · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · [Bahasa Indonesia](usage.id.md) · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · [Norsk](usage.no.md) · [Polski](usage.pl.md) · [Português](usage.pt.md) · [Português (Brasil)](usage.pt-BR.md) · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · **Slovenčina** · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

# Používanie

[← späť na README](README.sk.md)

## Panel cesty

Úplná cesta poznámky v trezore nahrádza holý názov súboru v hlavičke zobrazenia — v lište pod radom kariet, na ktorej sú aj tlačidlá dozadu a dopredu.

Na tomto riadku sa dá klikať na dve veci a **Názov priečinka otvára zoznam** rozhoduje o tom, čo ktorá robí:

| | Názov priečinka | Oddeľovač za ním |
| --- | --- | --- |
| **Zapnuté** (predvolené) | Vyberie ten priečinok na úpravu | Otvorí priečinok |
| **Vypnuté** | Otvorí priečinok | Zostúpi do toho priečinka |

„Otvorí priečinok“ znamená to, čo kliknutie na daný segment robí v Obsidiane bez pluginov. Ak tam nič nepočúva, priečinok sa zobrazí v Prieskumníkovi súborov v bočnom paneli — zvýraznený a rozbalený, aby bolo vidieť jeho obsah.

Ak je priečinok priečinkom poznámky, ktorú práve čítaš, kliknutie namiesto toho zobrazí priečinok — nie je čo otvárať, čo by už nebolo na obrazovke, čo je to, čo druhé stlačenie vždy znamenalo.

S nainštalovaným pluginom [Folder notes](obsidian://show-plugin?id=folder-notes) to isté kliknutie namiesto toho otvorí poznámku daného priečinka, **v akejkoľvek hĺbke**: poznámka sa tu určuje podľa vlastnej konvencie toho pluginu, namiesto toho, aby sa to nechalo na neho. Tento plugin rozpoznáva len tie priečinky, ktoré sám označil, čo pri ceste hlbšej ako jeden priečinok nie je žiaden z nich, takže stlačenie, ktoré otvorilo poznámku priečinka na najvyššej úrovni, ďalej dovnútra už nič nerobilo. Ostatné dva pluginy na poznámky priečinkov nezverejňujú žiadnu konvenciu na čítanie a riadok si nikdy nenárokujú, takže pri nich oddeľovač zobrazí priečinok tak ako vždy. Ide o jediný plugin na poznámky priečinkov, o ktorom sa zistilo, že si nárokuje cestu v hlavičke; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) a [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) spravujú poznámky priečinkov, ale kliknutie na panel cesty nepočúvajú, takže pri nich oddeľovač zobrazí priečinok ako obvykle. Pozri [kompatibilitu](../compatibility.md#verified-against).

Oddeľovač je **podčiarknutý len vtedy, keď priečinok pred ním skutočne má poznámku priečinka**, takže podčiarknutie je prísľubom, že je tam čo otvoriť — v akejkoľvek hĺbke, keď beží [Folder notes](obsidian://show-plugin?id=folder-notes), keďže poznámka sa tu určuje priamo, namiesto toho, aby ju označoval ten plugin. Tam, kde nebeží tento plugin, nič nie je podčiarknuté a nič sa neotvára: oddeľovač zobrazuje, tak ako pri žiadnom plugine na poznámky priečinkov. Každý oddeľovač zostáva klikateľný tak či onak — ten bez podčiarknutia zobrazí a rozbalí svoj priečinok v bočnom paneli, čo stále signalizuje aj kurzor myši. Podčiarknutie sa v tej istej chvíli presúva preč z názvu priečinka: pri zapnutej výmene názov otvára zoznam, takže označiť ho ako odkaz na poznámku by bola lož.

**Režim premenovania/presunu prebíja oboje**, nech nastavenie hovorí čokoľvek: kým je presun rozpracovaný, nič na riadku neotvára priečinok, lebo otvoriť ho by znamenalo presun opustiť. Názvy priečinkov sa vyberajú na úpravu a oddeľovače zostupujú — oboje sú spôsoby, ako určiť cieľ — a podčiarknutie zmizne, aby ukázalo, že otváranie je pozastavené.

**Koreň trezora** je jediný segment, ktorý nie je segmentom cesty. Nemá rodiča, z ktorého by vypísal súrodencov, a tak namiesto toho otvára [zoznam umiestnení](#prehliadanie-mimo-trezora) — tvoje ostatné trezory, domovský priečinok, koreň súborového systému a pripojené jednotky.

## Vlastný oddeľovač trezora

Oddeľovač hneď za názvom trezora nezastupuje priečinok, ale samotný trezor,
takže robí to, čo žiadny iný oddeľovač nedokáže:

| | Prvé kliknutie | Ďalšie kliknutie |
| --- | --- | --- |
| **S pluginom na úvodnú stránku** (stránka, ktorá ťa privíta pri otvorení Obsidianu) | Otvorí tú stránku v tomto paneli | Zbalí strom súborov |
| **Bez neho** | Zbalí strom súborov | Vráti presne to, čo bolo otvorené |

Bežné kliknutia, nie dvojklik: keď je stránka raz otvorená, oddeľovač už
nemá čo otvárať, takže ďalšie stlačenie je zbalenie — nech si na to
dáš akokoľvek dlho.

Je **podčiarknutý**, keď existuje úvodná stránka na otvorenie, čo je ten istý
prísľub, aký dáva oddeľovač priečinka: niečo tam je. Zbalenie funguje ako prepínač —
ďalšie stlačenie obnoví priečinky, ktoré boli otvorené, a len tie, takže
strom, ktorý si si usporiadal, sa nestratí len kvôli pohľadu na niečo iné.

## Panel bez súboru

Prázdna karta, graf a čokoľvek iné, čo neuvádza žiadny súbor, dostane vlastný
riadok: trezor a potom jeden segment hovoriaci, čo panel obsahuje.

```
my-vault / :blank      nová karta
my-vault / :graph      graf, lokálny alebo globálny
my-vault / :<type>     čokoľvek iné bez súboru
```

Aj **vlastný zoznam koreňa trezora** ponúka tieto stránky, pod priečinkami a
poznámkami, ktoré v ňom skutočne sú: vyber si tam `:graph` alebo `:search` a panel
otvorí to zobrazenie presne tak, ako výber poznámky otvorí poznámku. Ktoré stránky
existujú, sa číta z Obsidianu, nie je to zapísané tu — každé zobrazenie, ktoré
neexistuje na zobrazenie súboru, takže plugin, ktorý si zaregistruje vlastné
(úvodná karta, kalendár), sa objaví bez toho, aby o ňom tento plugin čokoľvek vedel.
Zobrazenia, ktoré potrebujú súbor — Markdown, PDF, obrázky, plátna, databázy —
sa neponúkajú: nie je čo zobraziť.

Dvojbodka je práve to podstatné — žiadny súbor ani priečinok sa nemôže volať
`:graph`, takže riadok nemožno zameniť za cestu, ktorú by sa dalo otvoriť. Popisok
pochádza z typu zobrazenia, nie z vlastného znenia Obsidianu, takže znie rovnako
bez ohľadu na jazyk rozhrania, a koncové `-view` sa odstráni: plugin na úvodnú
kartu registruje svoje zobrazenie ako `home-launcher-view` a riadok hovorí
`:home-launcher`.

Kliknutie na prázdny priestor alebo na samotný popisok **otvorí pole v koreni
trezora**: napíš cestu a <kbd>Enter</kbd> ju otvorí presne v tomto paneli, s tým
istým dopĺňaním, tým istým zoznamom a tým istým červeným poľom ponúkajúcim
vytvoriť to, čo tam ešte nie je. Prázdna karta je dobré miesto na napísanie
toho, kam chceš ísť, na to slúži.

Popisok je len popisok a nič viac: žiadny zoznam, žiadne ťahanie, žiadne
premenovanie. Panely v bočných paneloch sa vôbec nedotýkajú — panel spätných
odkazov si ponecháva názov, ktorý mu dal Obsidian.

Plátna, PDF, obrázky a databázy nič z toho nepotrebujú. Sú to súbory, takže
dostávajú bežnú lištu cesty.

## Kliknutie na segment: vymeň ho za súrodenca

Kliknutie na názov priečinka vyberie **názov toho priečinka** v textovom poli a otvorí zoznam priečinka **o úroveň vyššie** — jeho rodiča. Písaním alebo výberom položky vymeníš tento priečinok za súrodenca a všetko pod ním zostane nedotknuté, takže `Projekty/2026/Štart.md` → klikni na `2026` → vyber `2025` ti dá `Projekty/2025/Štart.md`.

Kliknutie na **názov poznámky** funguje rovnako, voči jej vlastnému priečinku, a vyberie názov **bez prípony** — premenovanie je bežná úprava a písanie priamo cez výber, ktorý zahŕňal `.md`, kedysi omylom menilo typ súboru. Prípona zostáva viditeľná jeden stlačok klávesu ďalej: <kbd>→</kbd> sa k nej dostane, a dvojklik, ktorý rozšíri výber na celý riadok, vezme všetko.

Kliknutie na priečinok už jeden segment vybralo, takže **ďalšie kliknutie** rozšíri výber na celý riadok — na ten priečinok *a* na všetko pod ním — a písanie potom nahradí zvyšok cesty naraz. V navigačnom režime aj v režime premenovania/presunu to funguje rovnako.

Platí to len ako pokračovanie kliknutia, ktoré pole otvorilo. Len čo pole raz použiješ, správa sa ako ktorékoľvek iné textové pole: kliknutie umiestni kurzor, dvojklik vezme slovo, trojklik riadok.

Tak či onak, zvyšok cesty zostáva viditeľný okolo poľa, ako štítky pred ním a ako nevybraný text za ním, takže úplná cesta z hlavičky nikdy nezmizne. Píš, aby si nahradil výber, alebo stlač <kbd>→</kbd>, aby si ho zachoval a upravoval odtiaľ ďalej. Zoznam vypíše celý priečinok bez ohľadu na to, čo je predvyplnené; filtrovať začne, až keď skutočne začneš písať.

## Zostup cez oddeľovač

Kliknutie na oddeľovač (pri vypnutom **Názov priečinka otvára zoznam**) zostúpi do priečinka pred ním: zoznam vypíše obsah *toho* priečinka a zvyšok cesty sa otvorí vybraný v poli. Výberom priečinka ho pripojíš k ceste a hneď sa otvorí ďalší zoznam, takže sa môžeš preklikať stromom nadol bez opustenia riadka hlavičky.

## Zoznam sa otvára tam, kde si

Zoznam sa otvorí na položke, na ktorej práve stojíš — na poznámke, ktorej patrí
táto lišta, alebo tam, kde kliknutie na priečinok vypísalo jeho rodiča, na tom
priečinku — namiesto na prvom riadku. V priečinku s dvesto poznámkami by prvý
riadok bol ďaleko od teba.

**Koliesko myši nad názvom otvorí jeho zoznam a prechádza ním.** Prvé otočenie
otvorí ten istý zoznam, ktorý otvorí stlačenie názvu, a každé ďalšie otočenie
posunie zvýraznenie o riadok a vloží to, na čo práve ukazuješ, do poľa presne
tak, ako to robia šípky — takže súrodenca možno nájsť a vybrať bez klávesnice.
Otáčanie za ktorýkoľvek koniec ti vráti tvoj text. Riadok, ktorý má viac cesty
ako panel, odpovedá kolieskom bočným posúvaním namiesto toho, čo je čítanie,
ktoré vyhráva, kým sa dá použiť.

Zoznam je **taký vysoký, ako to okno dovolí**. Obsidian obmedzuje svoje
zoznamy návrhov na 300 pixelov nech je pod nimi čokoľvek; tento siaha až na
spodok okna, zastaví sa pár pixelov pred okrajom a posúva sa, až keď priečinok
obsahuje viac než to. Je **najviac taký široký ako lišta cesty**: názov, ktorý
sa nezmestí, sa skráti tak, ako skracuje riadok, a zobrazí sa celý, keď naň
ukážeš.

Pohyb po zozname **vloží to, na čo ukazuješ, do poľa**, šípkou alebo
prejdením myšou — namiesto segmentu, ktorý si upravoval, so zvyškom cesty
ponechaným tak, ako bol — takže riadok, na ktorom si, je zároveň cesta, ktorú
by si dostal.

Zvyšok cesty sa zobrazuje **len do tej miery, do akej existuje pod tým, na čo
ukazuješ**. Ak stojíš v jednom priečinku a za segmentom, ktorý upravuješ, je
`2026/poznámka.md`, ukázanie na priečinok, ktorý má `2026` s `poznámka.md` v ňom,
zobrazí všetko; ten, ktorý má `2026` bez poznámky, zobrazí `2026`; ten, ktorý
nemá ani jedno, nezobrazí po názve vôbec nič, a rovnako ani súbor, keďže pod ním
nič nie je. **To, čo si napísal**, si ponecháva celú cestu, kým to píšeš, nech
je toho zatiaľ akokoľvek málo — napoly napísaný názov nie je rozhodnutie.
Zadanie názvu je rozhodnutie a to, čo sa z neho nedá dosiahnuť, sa v tom bode
odreže; priečinky, ktoré vytváraš, sú tie, ktoré napíšeš *za* ním, kde ich
vytvorí <kbd>Enter</kbd>.
Text, ktorý si mal napísaný, zostáva zachovaný: pohyb **mimo ktoréhokoľvek
konca zoznamu** — nahor za prvú položku alebo nadol za poslednú — ho pustí
a vráti tvoj text, bez zvýraznenia čohokoľvek. Pole je zastávkou na kruhu ako
ktorákoľvek položka, takže kolo prechádza cezeň, namiesto toho, aby skočilo
z posledného riadka na prvý, a pokračovanie odtiaľ sa prenesie na druhý koniec.

Vzdialenie **ukazovateľa od zoznamu** tiež vráti tvoj text — a odovzdá
zvýraznenie späť tomu, čo ho malo predtým, než tam prišla myš: položke, na
ktorú si sa dostal šípkami, ktorá sa znova zobrazí v poli, alebo tej, na ktorej
sa zoznam otvoril, lebo je tam, kde si. Prejdenie myšou je spôsob pozerania,
nie voľby, takže prejdenie ukazovateľa cez zoznam ťa nič nestojí.

Samotný zoznam sa počas pohybu po ňom nemení — stále filtruje podľa toho, čo
si napísal, nie podľa toho, čo sa zobrazilo v poli ako náhľad — takže položka
pod tebou sa nikdy nevysunie spod ďalšieho stlačenia. Písanie nahradí náhľad
a filtruje ako obvykle.

**Filtruje podľa segmentu, ktorý upravuješ**, nie podľa všetkého v poli.
Kliknutie na priečinok necháva zvyšok cesty v poli za názvom, ktorý meníš,
takže filtrovanie podľa celého obsahu by hľadalo potomka s názvom
`2026/Štart.md` a nič by nenašlo — zoznam by sa zavrel pri prvom stlačení
klávesu, nech napíšeš čokoľvek. **Prípona je z toho tiež vynechaná**, pokiaľ
je kurzor pred bodkou: kliknutie na názov poznámky vyberie kmeň a necháva
`.md` za ním, takže napísanie jedného písmena spraví z poľa `a.md`, a to
nie je to, čo hľadáš. Presuň kurzor za bodku a prípona sa počíta ako
čokoľvek iné. Názov, ktorý skutočne ničomu nezodpovedá, zoznam aj tak
zavrie, lebo prázdny zoznam je čestná odpoveď.

Náhľad **vymení len ten jeden segment a zvyšok cesty ponechá tak, ako je**:
ukázanie na priečinok sa pýta, čo keby tento krok bol tamten, nie zahodenie
celej cesty. Odchod zo zoznamu obnoví text *aj* výber, ktorý si mal, takže
ďalší stlačok klávesu nahradí to, čo mal nahradiť predtým, než si sa pozrel.

## Riadky zoznamu sú skutočné riadky správcu súborov

Každý súbor a priečinok v zozname sa správa ako jeho riadok v Prieskumníkovi súborov:

- **Kliknutie pravým tlačidlom** otvorí tú istú kontextovú ponuku, akú dáva Prieskumník súborov, položku po položke — vrátane tých, ktoré pridávajú iné pluginy. Priečinok ponúka *Nová poznámka*, *Nový priečinok*, *Nové plátno*, *Nová databáza*, *Vytvoriť kópiu*, *Presunúť priečinok do…*, *Hľadať v priečinku*, *Kopírovať cestu*, *Zobraziť v systémovom prieskumníkovi*, *Premenovať…* a *Odstrániť*; súbor ponúka svoj vlastný ekvivalent, vrátane *Otvoriť v predvolenej aplikácii*.
- **Ťahanie** položky kamkoľvek, kde Obsidian prijíma súbor: do editora na vloženie odkazu, na priečinok v Prieskumníkovi súborov na presunutie, na lištu kariet na otvorenie.

Znenie ponúk pochádza z vlastných prekladov Obsidianu, takže sedí so zvyškom aplikácie v každom jazyku.

## Písanie cesty

- Kliknutie na **prázdny priestor** pred alebo za panelom cesty otvorí textové pole na celej ceste *a zároveň ukáže poznámku v Prieskumníku súborov*, takže strom sleduje panel bez druhého gesta. **Počíta tvoje kliknutia**: jedno vyberie cestu bez prípony, dve ju vyberú aj s ňou, tri vyberú cestu tak, ako ju pozná stroj. Kliknutie na **názov súboru** počíta rovnako, no začína o priečku nižšie, na samotnom názve: jedno ho vyberie bez prípony, dve s ňou a tri rozšíria výber na celú cestu *od priečinka tvojho trezora* — podobu, akú chce odkaz či vyhľadávanie, nie stroj. Štvrté kliknutie sa dostane k tejto podobe.
- **Počítanie patrí sérii, ktorá pole otvorila.** Len čo vyprší — zastavíš sa, píšeš, alebo raz niekam v texte klikneš — pole je textové pole ako každé iné a dvojklik v ňom vyberie slovo pod kurzorom, tak ako kdekoľvek inde. Píš cez vybraný text, alebo edituj priamo na mieste. (Kliknutie na samotný názov súboru vyberie len názov súboru; pozri vyššie.) Kliknutie pravým tlačidlom na to isté miesto **kopíruje** tie isté tri podoby pri druhom, treťom a štvrtom stlačení — jedno tlačidlo ich ukazuje, druhé ich berie. **Jedno** stlačenie pravého tlačidla otvorí cestu s celým výberom a ponúkne, čo sa s ňou dá urobiť: vystrihnúť, kopírovať, vložiť, vybrať všetko, slovami samotného Obsidianu.
- **Kliknutím na stredné tlačidlo na prázdny priestor** vložíš text cez cestu: pole sa otvorí na celej ceste *od koreňa trezora*, takže schránka nahradí úplne všetko, a to, čo pristane, je vybrané. <kbd>Enter</kbd> potom prejde tam.
- **<kbd>Ctrl</kbd>+klik na prázdny priestor** znova otvorí túto poznámku v jej vlastnej karte, zvýraznenej v Prieskumníku súborov, aby sa druhá karta nezamenila s prvou. Na **názve trezora** <kbd>Ctrl</kbd>+klik alebo klik stredným tlačidlom otvorí kartu bez ničoho, stojacu v koreni trezora so zoznamom už zobrazeným — miesto, kde možno napísať cestu od nuly.
- Písanie počas zobrazenej stopy panela cesty premení posledný segment na malé pole so živým dopĺňaním ohraničeným na aktuálny priečinok.
- **Dá sa napísať aj cesta od koreňa súborového systému.** `/` pred prázdnym poľom otvorí ho namiesto dopĺňania priečky, každá lomka za ním mu patrí a `~` je tvoj domovský priečinok. Kým pole drží takúto cestu, zoznam ukazuje stroj namiesto trezora a úvodný segment riadku ustúpi bokom — to, čo je v poli, začína od koreňa a aj to hovorí. Keď je *Prístup k externým súborom* vypnutý, zoznam ostáva prázdny, pretože <kbd>Enter</kbd> by cestu aj tak odmietol.
- **Dá sa napísať aj stránka, nielen vybrať.** `:graph`, `:search`, alebo čokoľvek, čo zaregistrujú tvoje pluginy — popisky, ktoré ponúka [zoznam koreňa trezora](#panel-bez-súboru). Napísanie dvojbodky kdekoľvek ich privolá, keďže žiadny názov nemôže dvojbodku obsahovať, a <kbd>Enter</kbd> otvorí toto zobrazenie v tomto paneli. `:graph` napísané **vnútri priečinka** otvorí graf tohto priečinka — graf filtrovaný na `path:"that/folder"` vo vlastnom vyhľadávacom poli, akoby to tam bolo napísané; v koreni trezora je to celý graf. <kbd>Tab</kbd> dokončí názov tak, ako dokončuje názov priečinka — a vezme so sebou čokoľvek iné, čo pole obsahovalo, keďže stránka nie je v žiadnom priečinku a nič pod ňou nežije. Kliknutie na popisok na takomto paneli otvorí pole, ktoré ho už drží.
- **To, čo by napísal <kbd>Tab</kbd>, sa ponúka priebežne pri písaní.** Tam, kde každé dieťa začínajúce tým, čo si napísal, chvíľu súhlasí ďalej, sa táto zhoda objaví za kurzorom, vybraná; tam, kde prestanú súhlasiť, sa objaví krok k prvému z nich — alebo k riadku, na ktorý si prešiel šípkami, keďže práve k tomu by smeroval <kbd>Tab</kbd>. Písanie cez názov necháva jeho príponu stáť a ponúka pred ňou, a priečinok, do ktorého si práve vstúpil, ponúkne svoj prvý krok, takže neexistuje stav, v ktorom by sa nič neponúkalo a <kbd>Tab</kbd> by aj tak niečo napísal. Napíš tie písmená a pohltí sa jedno po druhom; napíš čokoľvek iné a je preč. <kbd>Tab</kbd> alebo <kbd>End</kbd> ho vezme celé, <kbd>→</kbd> vezme jedno jeho písmeno, <kbd>Backspace</kbd> ho vráti bez toho, aby sa dotkol písmena, ktoré si napísal ty, a nič sa neponúkne znova, kým nezačneš písať — takže vždy existuje cesta von z názvu, ktorý si nechcel. Po stlačení <kbd>Tab</kbd> sa ďalší krok ponúkne hneď, tak ako po napísanom písmene. To, čo zoznam ukazuje, je filtrované tým, čo si napísal **ty**, nikdy tým, čo bolo ponúknuté.
- **Ponuky ignorujú veľkosť písmen.** `sch` ponúkne `Schemes`, napísané tak, ako je názov napísaný; vrátenie ponuky späť vráti tvoje písmená tak, ako si ich napísal. Tam, kde existuje aj `Test` aj `test`, sa ponúkne to, ktoré je napísané rovnako ako si napísal ty.
- V poli je ponúkaná časť jednoducho **vybraná**. V zozname je to, kde je to rozpísané: každý riadok ukazuje časť, ktorá **zodpovedala tomu, čo si napísal, tučne**, nech sa zhoda nachádza kdekoľvek v názve — `kick` nájde `Weekly kickoff` a aj to ukáže. **Názvy, ktoré začínajú tým, čo si napísal, sú prvé**, pred tými, ktoré to len obsahujú, a sú označené čiarou pozdĺž okraja: **modrou** tam, kde zdieľajú viac než si napísal, takže <kbd>Tab</kbd> má čo pridať pre všetky z nich, a **zelenou** na vetve, ktorou sa ponuka vyberie tam, kde sa rozchádzajú — `te` s `test1`, `test2`, `text1` a `text2` ponúkne `te`+`st`, takže oba riadky `test` sú zelené a oba riadky `text` si ponechajú obyčajnú čiaru. Každý z nich **podčiarkuje krok, ktorý by k nemu urobil <kbd>Tab</kbd>**, nielen ten, ktorý je ponúknutý, a podčiarknutie sleduje ponuku, ako sa mení.
- **Písanie sa vzdáva zvýrazneného riadku.** Zoznam sa otvorí na položke, na ktorej stojíš, no v okamihu, keď začneš písať, ide o niečo iné, a zvýraznenie, ktoré tam nikto nedal, by pôsobilo ako už urobená voľba.
- Ponuka je vždy len text pred tebou: písmená, ktoré si napísal, ostávajú napísané tak, ako si ich napísal, kým píšeš, a prijatie ponuky prepíše názov tak, ako ho hláskuje priečinok, pretože cesta sa musí zhodovať s diskom. `sk` + <kbd>Tab</kbd> sa dostane k `Skyline`, nie k `skyline`.
- **Pole má farbu toho, čo pomenúva**, rovnakú farbu ako jeho riadok v zozname: fialovú pre poznámku, vrátane vlastnej poznámky priečinka, oranžovú pre čokoľvek, čo nie je poznámka, modrú pre poznámku, na ktorej práve si. Riadok, od ktorého si pole berie farbu, je ten, ktorý je pomenovaný presne tak, ako si napísal, alebo ak taký nie je, zvýraznený riadok, alebo ak ani ten nie je, prvý, ku ktorému tvoje písanie ešte vedie.
- **Pole zčervenie, len čo ničomu nezodpovedá to, čo je v ňom** — žiadny súbor, žiadny priečinok a žiadny riadok zoznamu k tomu ešte nevedie. Odtiaľ <kbd>Enter</kbd> vytvorí to, čo je v poli, namiesto toho, aby to otvoril, a červená to hovorí ešte predtým, než to potvrdíš. Nikdy sa neobjaví pri webovej adrese, ktorá nie je miestom na tomto stroji, kde by sa dalo hľadať. Sfarbí sa **celé** pole, nie len časť, ktorá chýba: textové pole nemôže sfarbiť len polovicu svojho vlastného obsahu. V režime premenovania/presunu si pole ponecháva svoju vlastnú červenú pre názov, ktorý je neplatný — tam je práve to zmyslom, že žiadny názov mu nezodpovedá. To, že názov je **už obsadený**, sa rieši až pri potvrdení, dialógom, ktorý sa pýta, čo sa má stať so súborom, ktorý stojí v ceste — pozri [Názov, ktorý je obsadený](#názov-ktorý-je-obsadený): každý názov napísaný smerom k `Notes.md` prechádza cez názvy, ktoré môžu byť súbormi samy o sebe, takže označovanie po písmenách by varovalo pred názvom, o ktorý sa ešte nikto nepýtal.
- `/` potvrdí segment, ktorý práve píšeš, a zostúpi doň, pričom si ponechá to, čo je za ním — presne to, čo robí aj <kbd>Tab</kbd>, keď vstupuje dnu.
- <kbd>Backspace</kbd> v prázdnom poli vystúpi späť do nadradeného priečinka a znova otvorí jeho názov s kurzorom na konci. To isté robí <kbd>Backspace</kbd> pred príponou ponechanou samu osebe — pole obsahujúce len `.md` nič nepomenúva — a osamelá prípona ide s ním.
- **Kliknutie na priečinok, kým je pole otvorené, ho rozšíri na celú cestu za týmto priečinkom**, s vybraným vlastným názvom priečinka — presne to, čo by kliknutie urobilo z riadku, a všetko, čo pole doteraz obsahovalo, sa zachová. To, čo je v poli, je koncom riadku, kým je otvorené, takže priečinok kliknutý vyššie vráti cestu, ktorú séria prešla, nie tú, na ktorej poznámka začínala.
- **Prechod šípkami cez začiatok poľa vtiahne priečinok pred ním dnu**, akoby celá cesta bola jeden riadok textu. S kurzorom na úplnom začiatku <kbd>←</kbd> vtiahne tento priečinok do poľa a pristane na konci jeho názvu, <kbd>Ctrl</kbd>+<kbd>←</kbd> pristane na jeho začiatku a <kbd>Home</kbd> vtiahne naraz každý priečinok až po koreň trezora — alebo po miesto, ktoré si vybral, mimo trezora. Podrž <kbd>Shift</kbd> a výber sa natiahne cez to, čo prišlo dnu. Na macOS je skok o slovo <kbd>Option</kbd>+<kbd>←</kbd> a <kbd>Cmd</kbd>+<kbd>←</kbd> je <kbd>Home</kbd>. Kdekoľvek okrem začiatku sú to obyčajné textové klávesy. **Kým je zoznam zobrazený, <kbd>Home</kbd>, <kbd>End</kbd>, <kbd>PgUp</kbd> a <kbd>PgDn</kbd> patria jemu** — prvý riadok, posledný riadok, o stránku hore, o stránku dole, pričom stránka je to, čo zoznam ukazuje, a zvýraznený riadok si drží svoje miesto na obrazovke — a k textu sa dostanú až po tom, čo sa zavrie; <kbd>Shift</kbd>+<kbd>Home</kbd> vtiahne dnu každý priečinok aj s otvoreným zoznamom.
- **Zoznam sleduje kurzor.** Vyber si inú časť cesty — pretiahni cez ňu, klikni do nej, alebo prejdi šípkami — a zoznam ukáže deti *tohto* priečinka, nie toho, na ktorom bolo pole otvorené. Priečinok sa počíta z čipov plus toho, čo z poľa leží pred kurzorom, takže kliknutie do `Notes.md` v poli obsahujúcom `2026/Notes.md` ukáže to, čo je v `2026`. Ukázanie na riadok ho zapíše do segmentu, v ktorom je kurzor, a odtiahnutie ukazovateľa zo zoznamu ti vráti tvoj text a tvoj výber presne také, aké boli.
- **Vytiahnutie výberu z poľa** a jeho pustenie niekde inde ho nezavrie. Stlačenie, ktoré začína v poli, patrí úprave bez ohľadu na to, ako ďaleko sa dostane; len stlačenie, ktoré *začína* mimo neho, je kliknutím preč.
- <kbd>Enter</kbd> potvrdí — a keď pole nepomenúva vôbec nič, ako v prázdnom priečinku, kde nikdy nebolo čo dopĺňať, povie *Nevybraný žiadny súbor* a ostane otvorené namiesto toho, aby sa zavrelo, akoby niečo bolo vybrané. <kbd>Esc</kbd> alebo klik niekam inam zruší úpravu späť na skutočnú cestu súboru. Jedno stlačenie <kbd>Esc</kbd> stačí: zavrie zoznam, opustí pole a vráti fokus späť poznámke, namiesto toho, aby vyžadovalo jedno stlačenie na vrstvu.

Pole je bez ozdôb — bez rámčeka, bez okraja — takže sa číta ako samotný text cesty a pri písaní samo rastie.

## Každá časť riadku, tlačidlo po tlačidle

Celý riadok na jeden pohľad. Stĺpec pravého tlačidla je to, čo ti dá **jedno**
stlačenie; toto tlačidlo si stlačenia aj počíta a [jeho vlastná
tabuľka](#pravý-klik-jedno-stlačenie-dve-tri) nižšie má druhé, tretie a
štvrté. Táto tabuľka predpokladá, že **Názov priečinka otvára zoznam** je
zapnuté, čo je predvolené — keď je vypnuté, názov priečinka a oddeľovač si
vymenia prvý stĺpec, ako hovorí [tabuľka na začiatku](#panel-cesty).

| Kam klikneš | Klik | Dvojklik | <kbd>Ctrl</kbd>+klik alebo klik kolieskom | Pravý klik | Pustenie niečoho na to |
| --- | --- | --- | --- | --- | --- |
| **Názov trezora** | Otvorí zoznam miest — iné trezory, domov, koreň systému súborov, pripojené disky. Predvolene vypnuté; keď je vypnuté, namiesto toho odhalí trezor v File Exploreri | Označí **celú absolútnu cestu**. Ten zoznam sa otvorí s cestou už v poli a označená je len vlastná časť trezora; druhé stlačenie rozšíri označenie na zvyšok. Keď je zoznam vypnutý, nie je čo rozšíriť | Karta bez ničoho, stojaca v koreni trezora so zoznamom už zobrazeným — miesto na napísanie cesty odznova | Vlastné kontextové menu trezora: čo sa dá urobiť s trezorom, ktorý ten segment pomenúva | **Súbor** sa presunie do koreňa trezora. **Text** otvorí pole v koreni, na pomenovanie poznámky, ktorou sa má stať |
| **Názov priečinka** | Vyberie ten priečinok na úpravu, obsah jeho nadradeného priečinka je vypísaný nižšie | Prepíše ten priečinok a všetko pod ním | Otvorí ten priečinok v novej karte | Kontextové menu toho priečinka — vlastné menu File Exploreru | **Súbor** sa presunie do toho priečinka. **Text** tam otvorí pole, na pomenovanie poznámky, ktorou sa má stať |
| **Oddeľovač** | Otvorí priečinok pred ním — jeho poznámku priečinka, ak beží plugin na poznámky priečinkov a nejaká existuje, inak ho odhalí a rozbalí v File Exploreri | **Vytvorí poznámku toho priečinka** a prejde na ňu, ak beží plugin na poznámky priečinkov a priečinok ešte žiadnu nemá. Ak už nejakú má, ide len o to isté jedno stlačenie | Poznámka priečinka v novej karte, ak existuje; inak karta stojaca pri tom priečinku so zobrazeným zoznamom | Rovnaké kontextové menu priečinka ako dáva názov — menu jeho poznámky priečinka, ak nejakú má | Na koniec poznámky toho priečinka, ak nejakú má, po potvrdení |
| **Názov poznámky** | Otvorí názov na úpravu — priečinky ostanú vedľa ako čipy — označené je všetko okrem prípony | Zoberie do označenia aj príponu | Otvorí poznámku v novej karte | Kontextové menu súboru — rovnaké, aké dáva riadok File Exploreru | Na koniec tejto poznámky, po potvrdení |
| **Prázdne miesto** | Otvorí **celú cestu** na úpravu, označenú až po príponu. Priečinky sa dostanú do poľa s ňou, práve to z tohto robí gesto na prepísanie cesty, nie iba názvu | Zoberie do označenia aj príponu | <kbd>Ctrl</kbd> otvorí túto poznámku znova vo vlastnej karte, zablikanú vo File Exploreri, aby sa kópia nezamenila s prvou. Klik kolieskom *nie je* toto gesto: prepíše cestu | Označí celú cestu a ponúkne, čo sa dá urobiť s označeným textom | |

**Druhé stlačenie nadväzuje na prvé.** Vytvorenie poznámky priečinka sedí na tej
časti riadku, ktorá *otvára* daný priečinok, čo je predvolene oddeľovač a pri
vypnutej výmene názov priečinka — rovnaký cieľ, aký označuje podčiarknutie, a
ten istý, o ktorý už žiada jedno stlačenie pri poznámke priečinka. Ponúka sa
len vtedy, keď beží plugin na poznámky priečinkov, pretože poznámka priečinka
je dohoda, nie skutočnosť systému súborov, a len tam, kde priečinok ešte žiadnu
nemá. Kde žije a ako sa volá, sa číta z vlastných nastavení **Folder notes**,
takže trezor, ktorý si poznámky priečinkov drží vedľa priečinka, alebo ich
nazýva `_index`, dostane jednu z nich; samotný súbor je vždy Markdown, čo je
to, čo vytvára vlastný predvolený príkaz na vytvorenie toho pluginu, a čo
nájde bez ohľadu na to, aký typ má trezor nastavený. Režim
premenovania/presunu je z toho úplne vynechaný — nič na riadku neotvára
priečinok, kým premenovanie čaká.

**Kliky na názov idú ďalej.** Štyri stupne sú tie isté štyri, po ktorých kráča
kláves na premenovanie, v rovnakom poradí: názov, názov s príponou, cesta od
trezora, cesta od koreňa systému. Tretí klik teda siaha po ceste trezora a
štvrtý po ceste stroja — to sú tie isté štyri veci, ktoré ti dá
<kbd>Tab</kbd> za koncom poľa, a tie isté štyri, ktoré pravé tlačidlo
*kopíruje* namiesto toho, aby ich označilo.

**Prejdenie kurzorom** je vlastná odpoveď a nikdy nič nemení: skrátený názov sa
vráti v plnej podobe, kým naň ukazuješ, a ikona na začiatku riadku hovorí, kde
trezor žije.

## Pravý klik: jedno stlačenie, dve, tri

Každý cieľ na riadku odpovedá na pravý klik, a to, koľko stlačení mu dáš,
rozhoduje, čo dostaneš. Pretože druhé stlačenie ešte môže prísť, prvé počká asi
tretinu sekundy pred tým, ako niečo urobí — cena za to, že tri gestá sú na
jednom tlačidle.

| Kam klikneš | Raz | Dvakrát | Trikrát |
| --- | --- | --- | --- |
| **Názov trezora** | Kontextové menu trezora: čo sa dá urobiť s trezorom, ktorý ten segment pomenúva — vrátane *Otvoriť tento trezor*, ak ten trezor nie je ten, v ktorom si | Skopíruje názov trezora | Skopíruje, kde trezor je — a štvrté stlačenie, kde je otvorený súbor |
| **Oddeľovač** | Menu toho priečinka — menu jeho poznámky priečinka, ak beží plugin na poznámky priečinkov a priečinok nejakú má | | |
| **Názov priečinka** | Menu toho priečinka | Skopíruje názov priečinka | Skopíruje ho a všetko napravo od neho |
| **Názov poznámky** | Menu súboru — rovnaké, aké dáva riadok File Exploreru | Skopíruje názov | Skopíruje ho s príponou |
| **Prázdne miesto** | | Skopíruje cestu od tvojho priečinka trezora, bez prípony | To isté, s ňou |

Jedno stlačenie na **názve trezora** otvorí, čo sa dá urobiť s tým, čo ten
segment pomenúva. Pre **trezor, v ktorom si**: otvoriť ho v novom okne,
spravovať trezory, skopírovať, kde žije, skopírovať jeho ID, ukázať ho v tvojom
správcovi súborov. Pre **iný trezor**, dosiahnuteľný cez zoznam miest, to isté
mínus nové okno — to by otvorilo *tento* trezor, nie ten — plus jedna vec, ktorú
môže ponúknuť len trezor, v ktorom nie si: **Otvoriť tento trezor**. Je
pomenovaný pre Obsidian podľa svojho ID, nie podľa názvu priečinka, keďže dva
trezory môžu jeden zdieľať. Pre miesto, ktoré vôbec nie je trezor — tvoj domovský
priečinok, pripojený disk — nie je čo kopírovať ako ID ani čo otvoriť, a menu to
hovorí tým, že ich neponúka.

Toto nie je vlastné trojbodkové menu Obsidianu, ktoré patrí úvodnému oknu a
nedá sa otvoriť zvnútra bežiaceho trezora — sú to tie isté položky
znovupostavené, vo vlastnom znení Obsidianu, prevzaté z jeho príkazov, aby
prišli v tvojom jazyku. Tri položky toho menu tu zámerne **chýbajú**:
*premenovať trezor*, *presunúť trezor* a *odstrániť zo zoznamu* pôsobia na
vlastný priečinok trezora alebo na register trezorov Obsidianu, a urobiť to
trezoru, v ktorom práve stojíš — s otvorenými súbormi a bežiacimi
sledovačmi — je spôsob, ako sa trezor pokazí. Otvor si správcu trezorov
(*Otvoriť iný trezor*) a urob to tam, kde je trezor zavretý.

Dve kopírovania na **prázdnom mieste** sú riadok tak, ako je napísaný — čo chce
odkaz alebo vyhľadávanie — a tie na **názve trezora** sú cesty, ktoré pozná
systém súborov, čo je to, čo chce čokoľvek mimo Obsidianu. Každé stlačenie tam
rozširuje, na čo je kópia dobrá: dve dajú názov trezora, tri kde trezor je,
štyri kde je otvorený súbor. Obsidian robí to isté rozlíšenie vo svojich
vlastných dvoch príkazoch, *z priečinka trezora* a *z koreňa systému*; tu tie
smerujúce von sedia na segmente, ktorý je sám mimo cesty.

Toto všetko funguje aj mimo trezora, na tých istých cieľoch.

Každé kopírovanie to oznámi upozornením, pretože kopírovanie nenechá na
obrazovke nič, čo by ukázalo, že sa stalo, a zle spočítané stlačenie by nemalo
vyzerať ako úspešné.

## Modifikátory: otvoriť to inde

Názov poznámky a segmenty priečinkov sa správajú ako ich riadky vo File
Exploreri.

| | Na názve poznámky | Na segmente priečinka |
| --- | --- | --- |
| Obyčajný klik | Upraviť názov | Prehliadať ten priečinok |
| <kbd>Ctrl</kbd> / klik kolieskom | Otvoriť poznámku v novej karte | Poslať priečinok do novej karty |
| <kbd>Ctrl</kbd>+<kbd>Alt</kbd> | Rozdelenie | Rozdelenie |
| Ťahanie | Poznámka, kamkoľvek Obsidian berie súbor | Priečinok, rovnako — vrátane panela kariet |

Priečinok nie je niečo, čo Obsidian dokáže otvoriť, takže poslanie priečinka do
karty urobí jednu z dvoch vecí: otvorí jeho poznámku priečinka, ak beží plugin
na poznámky priečinkov a nejaká existuje, alebo otvorí prázdnu kartu, ktorej
panel cesty už stojí v tom priečinku — necháva ti napísať už len názov.
Pustenie segmentu priečinka na **panel kariet** urobí to isté, v novej karte
tam, kde pustíš — panel kariet Obsidianu sám o sebe berie len súbory, takže
priečinok vytiahnutý z File Exploreru je aj tam odmietnutý.

## Tab: dokonči meno, potom cestu, potom rozšír výber

<kbd>Tab</kbd> dopĺňa tak, ako to robí shell: **stlačenie predĺži to, čo si napísal, o toľko, koľko sa mená v danom priečinku zhodujú, a zastaví sa tam, kde sa rozchádzajú.** Napíš `Sk` tam, kde takto začína iba `Sketches`, a slovo je dokončené; napíš `Al` tam, kde takto začínajú `Alpha-one`, `Alpha-two` aj `Alpine`, a dostaneš `Alp`, pretože ďalší znak je otázka, na ktorú vieš odpovedať iba ty.

Stlač znova bez písania a krok smeruje k jednému menu — k riadku, ktorý má zoznam zvýraznený, alebo k prvému — a zastaví sa pri ďalšej nejednoznačnosti daného mena: `Alpha-`, potom `Alpha-one`. Zoznam sa otvára tam, kde už si, takže vo vlastnom priečinku prvé stlačenie mieri k otvorenej poznámke, nie k tomu, čo je zoradené prvé.

**Stlačenie za teba nikdy nevyberá medzi menami.** <kbd>Tab</kbd> vstúpi do priečinka, len keď to, čo si napísal, necháva jedného kandidáta, alebo keď si napísal celé meno priečinka a žiadny *iný priečinok* ho nepredlžuje. Tam, kde áno — `Schemes` popri `Schemes2026` — <kbd>Tab</kbd> pokračuje v dopĺňaní k dlhšiemu menu; <kbd>Enter</kbd> a zoznam sú gestá, ktoré znamenajú *práve toto*.

**Súbor** takto priečinok nikdy nezastaví. Priečinok popri poznámke rovnakého mena je poznámka priečinka, nie rozdvojenie cesty, a <kbd>Tab</kbd> prechádza priečinkami — takže do `Projects` s `Projects.md` vedľa neho sa vstupuje ako do hociktorého iného.

Z toho vyplývajú dve menšie veci: to, čo pristane v poli, je napísané tak, ako to píše priečinok, takže `sk` sa zmení na `Sketches`; a nahradí sa iba práve písané meno, takže cesta s ďalšou časťou napravo si ju ponechá.

Keď sa počas písania ponúka meno, <kbd>Tab</kbd> **napíše presne túto ponuku**: ponuka je vždy to, čo by stlačenie napísalo, a podčiarknutie a zelená čiara v zozname hovoria to isté, takže to, čo vidíš za kurzorom, je to, čo dostaneš. Tam, kde sa mená prestávajú zhodovať, ide o krok k prvému z nich — alebo k riadku, na ktorý si sa presunul šípkami, ktorý <kbd>Tab</kbd> berie namiesto toho vedľa neho — takže sa šípkami presuň na ten, ktorý chceš, alebo napíš za rozdvojenie, kým stlačíš. Iba tam, kde ponuka necháva *jedno* meno, ho to isté stlačenie prevedie dovnútra.

Dosiahnutie mena súboru **je** prvý stupeň — žiadne stlačenie sa nespotrebuje na zaparkovanie kurzora na konci mena, ktoré sa práve chystá označiť. Odtiaľ sa stlačenia prestávajú posúvať po ceste a začínajú rozširovať to, čo je vybrané:

1. meno
2. meno s príponou
3. cesta od priečinka trezora
4. cesta od koreňa systému
5. späť na začiatok cesty **v podobe, v akej práve stojí** — stojac tam, kde sa chôdza začala, s označeným prvým segmentom, pripravená prejsť sa znova

Štvrté kliknutie dosiahne rovnaký štvrtý stupeň priamo.

Rozširovanie vždy len **rozširuje**. Meno, ktoré je v poli už celé — dokončené tým istým klávesom alebo vybrané zo zoznamu — je označené celé, namiesto toho, aby sa mu najprv vzala späť prípona: prvý stupeň je pre meno, ku ktorému chôdza práve *dorazila*, kde prípona ešte nie je predmetom.

Rebrík je miesto, kam chôdza **dorazí**, nie kde začína. Klikni na priečinok v strede cesty a pole sa otvorí na všetkom pod ním s označeným menom daného priečinka; každý <kbd>Tab</kbd> potom vezme **jeden** priečinok — označí ďalší, pričom zvyšok cesty nechá za sebou — a až keď zostane iba meno súboru, začína sa rozširovanie:

| stlačenie | čipy | pole | označené |
| --- | --- | --- | --- |
| kliknuté `a` | | `a/b/c/leaf.md` | `a` |
| <kbd>Tab</kbd> | `a` | `b/c/leaf.md` | `b` |
| <kbd>Tab</kbd> | `a › b` | `c/leaf.md` | `c` |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf` — prvý stupeň |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf.md` |

**Meno, ktoré je zadané, je zadané, nech si ho zadal akokoľvek.** Dokončenie klávesom
<kbd>Tab</kbd>, potvrdenie znakom `/` a výber zo zoznamu — všetko necháva riadok
na rovnakom mieste s rovnakou cestou, takže stlačenie po geste znamená to isté
bez ohľadu na to, akou cestou si sa tam dostal. Výber priečinka zo zoznamu
kedysi namiesto toho pole vyprázdnil, čím zahodil cestu, ktorú by dosiahnutie
rovnakého priečinka pomocou <kbd>Tab</kbd> ponechalo.

**Cesta, ktorú ešte len píšeš, ide s tebou celá.** Vstup do práve toho priečinka, na ktorom visí zvyšok cesty, netvrdí, že tento zvyšok existuje — takto sa cesta píše dopredu sama pred seba a priečinky, ktoré pomenúva, sú tie, ktoré <kbd>Enter</kbd> chystá vytvoriť. Takže krok z `Dokumente/plans/untitled.md` do `Dokumente` ponechá pred tebou `plans/untitled.md`, či už `plans` už existuje, alebo nie. To isté platí pre cestu, ktorú si napísal odnuly: nič z nej nebolo zdedené odnikiaľ, takže ani nič z nej sa nestráca.

**Výmena kroku za iný je iný príbeh a vtedy cesta ide s tebou len do miery, do akej naozaj existuje.** Vymeň priečinok v strede cesty za súrodenca — klikni na `a`, napíš iné meno, stlač <kbd>Tab</kbd> — a všetko pod ním ide s tebou, pretože cesta, na ktorej si bol, je väčšinou aj väčšina cesty, ktorú chceš. Prežije to ale iba to, čo tam naozaj existuje, takže pole a zoznam vedľa neho si nikdy neodporujú: to, čo zostane pred tebou, je cesta, po ktorej by si sa naozaj mohol prejsť. Počnúc od `a/b/c/leaf.md`, s kliknutým a označeným `a`:

| čo zadáš | čipy | pole | označené |
| --- | --- | --- | --- |
| `x`, ktoré nemá vôbec žiadne `b` | `x` | | nič sa neprenieslo |
| `y`, ktoré má `b`, ale bez `c` | `y` | `b` | `b` |
| `z`, dvojča `a` úplne dole | `z` | `b/c/leaf.md` | `b` |

Priečinok takto ponechaný osamote je stále priečinok, do ktorého sa dá vstúpiť: stlačenie po ňom vstúpi dovnútra, namiesto toho, aby začalo rozširovať výber nad jeho menom.

Na meno, ktorému **nič** v priečinku nezodpovedá, sa reaguje inak, pretože ním nič nebolo zadané: stlačenie označí to, čo si napísal, pripravené na prepísanie, namiesto toho, aby odpovedalo niekde inde.

Celá vec je **slučka a obehnúť ju nič nestojí**: stlačenie po poslednom stupni vráti riadok na začiatok cesty, priečinky a všetko, pripravené prejsť sa znova. Jediné, čo z riadku niekedy zmizne, je absolútna predpona, pri stlačení, ktoré ju prestane zobrazovať.

To, čo sa vráti, je **cesta, ktorú si vybudoval**, nie tá, z ktorej si vyšiel. Rozdvoj chôdzu v polovici — vyber iného súrodenca zo zoznamu, dopĺň k inému menu — a kolo sa uzavrie tam, kde skutočne si; štyri stupne pred ním opisujú tú istú cestu, a tento by kedysi bol tým výnimočným stupňom, ktorý opisoval minulosť.

<kbd>Shift</kbd>+<kbd>Tab</kbd> uzatvára ten istý kruh opačným smerom: na začiatku cesty, keď už niet čo vracať a niet kam vyššie, ďalšie stlačenie preskočí na **vzdialený** stupeň — cestu od koreňa systému — a odtiaľ pokračuje v zužovaní. Ani jeden smer nekončí v slepej uličke.

Nespotrebuje ani stlačenie na stupeň, ktorý už raz ukázal. Pod posledným stupňom — meno bez prípony — je rebrík u konca a *to isté stlačenie* opustí priečinok: cesta od koreňa systému, cesta od trezora, meno, meno bez prípony, potom priečinok, po jednom kroku.

Nespotrebuje sa ani stlačenie na stupeň, ktorý nič nemení: kliknutie na meno poznámky ju už zobrazuje bez prípony, čo je presne to, čo ukazuje prvý stupeň, takže odtiaľ <kbd>Tab</kbd> začína na druhom.

Každý stupeň mení to, čo *je v* poli, nielen to, čo je zvýraznené — výber musí byť nad textom, ktorý pomenúva, inak by <kbd>Enter</kbd> potvrdil niečo iné, než čo vidíš vybrané. Rebrík patrí jednej relácii úprav: klikni preč alebo napíš čokoľvek a ďalší <kbd>Tab</kbd> znova dopĺňa meno.

### <kbd>Shift</kbd>+<kbd>Tab</kbd>: tá istá cesta naspäť

<kbd>Shift</kbd>+<kbd>Tab</kbd> vracia jeden krok na stlačenie, v poradí, v akom boli stlačenia urobené: výber sa zužuje o stupeň naraz, každé dopĺňanie sa vracia späť a z každého priečinka sa vystupuje — jeho meno sa vracia do poľa, aby si ho mohol upraviť, nie prepísať odznova.

**Cestou späť sa nič nemaže.** Dopĺňanie sa vracia *označením* znakov, ktoré pridalo, presne tak, ako ich chôdza dopredu označuje nad tým, čo rozšírila — meno zostáva pred tebou a každé ďalšie stlačenie ho označí o kúsok viac:

| | pole | označené |
| --- | --- | --- |
| prišiel si sem | `Alpha-one` | |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `ha-one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `Alpha-one` |

Písanie nahrádza označenú časť, tak ako všade inde. <kbd>Tab</kbd> vráti presne to, čo označenie vrátilo späť, takže dva kroky von a dva kroky späť ťa vrátia tam, kde si bol.

Keď je označené celé meno, neostáva už nič, čo tam dalo stlačenie, a ďalšie stlačenie ide *hore po ceste*: opustí priečinok, v ktorom stojíš, presne tak, ako to robí <kbd>Backspace</kbd> na prázdnom poli. Ani to nič nestojí — meno priečinka sa vráti do poľa **pred** to, čo v ňom bolo, označené, čo je ten istý text, aký by ti dalo kliknutie na daný priečinok. Späť je smer, nie história krokov späť — ale to, že sa meno najprv označí, znamená, že jedno stlačenie nikdy naraz nevráti to, čo si napísal, aj ťa nevyvedie z priečinka, v ktorom si to napísal.

Text, ktorý sa otvára **už vybraný** — to, čo za sebou zanechá kliknutie na priečinok — je meno, s ktorým <kbd>Tab</kbd> pracuje ďalej: dopĺňa sa a vstupuje sa doň ako do čohokoľvek iného a písanie ho nahradí. Iba príkaz na zameranie sa otvára na stupni samotného rebríka, pretože ukazuje celú cestu, nie priečinok, do ktorého treba vstúpiť.

## Písanie niečoho, čo nie je cesta

| Čo napíšeš | Čo sa stane |
| --- | --- |
| `https://…` | Otvorí sa v novej karte vo **Webovom prehliadači** Obsidianu, ak máš tento základný doplnok zapnutý; inak v tvojom prehliadači |
| `obsidian://…` | Odovzdané vlastnému spracovaniu URI v Obsidiane |
| `file:///…` | Dekódované a otvorené: ako skutočná poznámka, ak je vo vnútri tvojho trezora, inak v prehliadači |
| `/home/ty/a%20b.md` | To isté, pre cestu vloženú z prehliadača alebo správcu súborov |

Počítajú sa iba explicitné schémy — poznámka nazvaná `100%20` je stále poznámka. `/`, ktoré patrí ku schéme, zostáva doslovné namiesto toho, aby zostupovalo do priečinka, takže URL sa dá napísať aj ručne, nielen vložiť.

## Príkaz pre klávesnicu

**Zamerať lištu cesty** otvorí pole na mene poznámky a prechádza ním rovnako ako <kbd>F2</kbd> — meno, meno s príponou, cesta od trezora, cesta od koreňa systému — a stlačenie po tomto poli pole zavrie a vráti kurzor späť do poznámky. Nepremenováva: <kbd>Enter</kbd> naviguje, ako v hocijakom inom poli. Nemá vlastný kláves prednastavený, pretože pokyny Obsidianu odrádzajú doplnky od toho, aby si ho nárokovali; riadok **Klávesové skratky** na konci nastavení tohto doplnku otvorí *Nastavenia → Klávesové skratky* zobrazujúce iba jeho príkazy, takže si ho tam môžeš priradiť.

## Navigácia sa nikdy nedotkne otvoreného súboru

V predvolenom (navigačnom) режime sa otvorená poznámka **nikdy** nepremenúva ani nepresúva.

- Cesta, ktorá vedie k existujúcemu súboru, ho otvorí.
- Cesta, ktorá ešte neexistuje, sa jednoducho vytvorí, spolu s chýbajúcimi nadradenými priečinkami, a otvorí. Každý takto vytvorený súbor a priečinok to oznámi upozornením — nový priečinok je inak neviditeľný, kým ho nezačneš hľadať — a vlastný kôš Obsidianu robí z nechceného jeden stlačený kláves na vrátenie späť.
- **Mimo trezora sa stále najprv opýta.** Tam vonku by tá istá preklep zapísala do systémového priečinka, kde nie je veľkou útechou ani oznámenie, ani kôš Obsidianu.

## <kbd>Ctrl</kbd> — nová karta a kopírovanie namiesto presunu

Poznámka **vytvorená, presunutá alebo skopírovaná vo vnútri trezora sa zobrazí tam, kde pristála**, v Prieskumníkovi súborov, na chvíľu označená zvýrazňovacou farbou Obsidianu — strom je miesto, kde ju hľadáš potom, takže sa umiestni pred teba namiesto toho, aby zostala v priečinku, ktorý ani nemusí byť otvorený. To isté hovorí aj duplikovanie: kópia necháva originál tam, kde bol, a kópiu otvorí vo vlastnom paneli, čo bez slova ľahko pôsobí, akoby sa nič nestalo.

Podržanie klávesu <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> na macOS) pri výbere súboru zo zoznamu alebo pri stlačení <kbd>Enter</kbd> na ceste pošle výsledok do **novej karty** namiesto tejto:

| | Bez klávesu | S <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Vyber alebo napíš existujúci súbor | Otvorí sa tu | Otvorí sa v novej karte |
| Napíš cestu, ktorá neexistuje | Spýta sa a potom otvorí tu | Spýta sa a potom otvorí v novej karte |
| Potvrď cestu v režime premenovania/presunu | **Presunie** poznámku tam | **Skopíruje** ju tam a kópiu otvorí v novej karte |

Modifikátor sa číta vlastným pravidlom Obsidianu, takže sa správa presne tak ako na odkaze či na riadku v Prieskumníkovi súborov — kliknutie stredným tlačidlom tiež znamená „nová karta“, <kbd>Ctrl</kbd>+<kbd>Alt</kbd> znamená rozdelenie a <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> nové okno.

Kopírovanie odmieta prepísať, presne tak ako presun — vrátane cesty samotnej poznámky, kde nie je nič rozumné na skopírovanie. Mimo trezora sa toto odmietnutie tiež vysloví nahlas.

Všetko z toho funguje **s otvoreným zoznamom** rovnako ako bez neho: na zvýraznenom riadku sa modifikátor vzťahuje na daný riadok, a keď nič nie je zvýraznené, vzťahuje sa na to, čo si napísal.

## Prehliadanie mimo trezora

**Toto je predvolene vypnuté.** Najprv v nastaveniach zapni **Prístup k externým súborom** — čítanie a zápis mimo trezora je jediná vec, ktorú tento plugin robí a ktorú samotný Obsidian nerobí, takže je to niečo, k čomu sa prihlásiš, nie niečo, z čoho sa odhlásiš. Kým je to vypnuté, názov trezora len zobrazí tvoj trezor v Prieskumníkovi súborov a nič tu sa nikdy nepozrie za jeho hranicu.

Kliknutím na **názov trezora** (alebo na ikonu 🏠, keď je *Zobraziť názov trezora* vypnuté) sa otvorí rozbaľovací zoznam miest, nie obsahu. Pole, ktoré sa otvorí, obsahuje **celú cestu, na ktorej si bol, vypísanú v plnom rozsahu**, s vybranou časťou, kde začína — takže výber iného miesta alebo prepísanie výberu vymení len tú úvodnú časť a zvyšok cesty ti zostane pred očami. **Stlač názov druhýkrát** — dvojklikom — a výber sa rozšíri na celý názov, čím sa absolútna cesta zoberie jedným gestom, nie ručným ťahaním. Ak si to rozmyslíš, <kbd>Esc</kbd> vráti riadok do pôvodného stavu.

Písanie tu funguje ako všade inde s ponukou zvyšku názvu miesta a <kbd>Tab</kbd> **nastaví to miesto** — to, na ktoré ukazuješ, alebo to, ktoré názov môže znamenať len jedno. Kde viaceré miesta stále zdieľajú to, čo si napísal, stlačenie sa zastaví na rozdvojení, tak ako všade. Ukázanie na miesto zobrazí **vlastnú cestu toho miesta**, celú vybranú, za ňou nasleduje cesta tvojej poznámky len tak ďaleko, ako naozaj tam existuje — presne to, na čom by ťa výber toho miesta priniesol.

Ponúkané miesta:

- **Tvoje ostatné trezory**, načítané z vlastného registra Obsidianu, naposledy otvorené ako prvé, každý pod vlastnou ikonou trezora Obsidianu — tou, ktorú aplikácia sama používa pre príkazy trezora. Trezor, ktorý už máš otvorený, dostane namiesto toho domček: odtiaľ riadok predvolene začína, nie je to miesto, kam ísť.
- **Domovský priečinok**, pod vlastným názvom účtu, označený znakom `~`. Lucide nemá vlnovku, a tak túto ikonu kreslí plugin na vlastnej mriežke Lucide 24×24 rovnakou hrúbkou čiary — ako ikonu, ktorá v sade chýba, nie ako textový znak posadený medzi ikony.
- **Koreň súborového systému**, označený `root` — nepreložene, lebo tak sa volá na každom systéme — namiesto `/`, ktoré by sa vedľa nasledujúceho oddeľovača čítalo ako prázdny krok.
- **Pripojené jednotky**, s ikonou podľa typu tam, kde sa to dá zistiť lacno: sieťové zdieľania, optické disky, diskety a vymeniteľné médiá majú vlastné; všetko ostatné dostane všeobecnú jednotku. Vo Windowse sa jednotky zobrazujú ako `C:` so všeobecnou ikonou — názvy zväzkov a presné typy vyžadujú WMI, čo sa zámerne nerobí.

Výber iného trezora **neprepne naň Obsidian.** Všetko, čo máš otvorené, zostáva otvorené; panel cesty len začne prehliadať tam. Presne v tom je zmysel toho, že je to na paneli cesty a nie prenechané prepínaču trezorov v bočnom paneli.

Zároveň to dopadne **tak blízko poznámke, na ktorej si, ako to dané miesto vôbec umožňuje**.

- Ak miesto, ktoré si vybral, poznámku *obsahuje* — domovský priečinok, alebo kdekoľvek žijú tvoje trezory — dostaneš jej cestu odtiaľ: vyber `~` s otvoreným `takeaways.md` a pole ukáže `Vaults/your-vault/takeaways.md`.
- Ak je to miesto vedľa tohto — iný trezor, iná jednotka — skúsi sa tá istá relatívna cesta, tak hlboko, ako naozaj existuje. Trezory sú často takmer kópiami jeden druhého, a dôvod na skok do iného býva zvyčajne tá istá poznámka tam.

V oboch prípadoch riadok zostane na mieste, ktoré si vybral, a **prvý priečinok tejto cesty sa otvorí vybraný** — v tom istom tvare, aký dáva kliknutie na priečinok: krok, ktorý najskôr zmeníš pri skoku niekam inam, je ten najbližšie k vrchu, a zvyšok cesty zostane viditeľný, kým ho meníš. Nikdy sa nič nevyplní vopred, čo naozaj nie je na disku.

### Kým si vonku

Cesta **začína na mieste, ktoré si vybral**, nie na adresárovej štruktúre počítača — a to isté platí pre pole, ktoré dostaneš kliknutím na prázdny priestor alebo stlačením klávesu na zaostrenie: obsahuje cestu od toho miesta, nie absolútnu cestu počítača, so stopou zbalenou na samo miesto presne tak, ako sa zbaľuje na koreň trezora vnútri — vyber `Archive` a riadok ukáže `Archive / notes / …`, nie `/home/you/Vaults/Archive/notes/…`. Úvodný segment nesie ikonu podľa toho, čo je (trezor, domovský priečinok, jednotka), a <kbd>Backspace</kbd> sa tam zastaví, nepokračuje ďalej hore do zvyšku súborového systému. Pri vypnutom *Zobraziť názov trezora* je tento segment len ikona — nastavenie sa týka úvodného segmentu riadku bez ohľadu na to, aký trezor pomenúva, nielen tvoj vlastný.

Panel cesty je **orámovaný chybovou farbou** — tým istým rámom, aký kreslí režim premenovania — tak dlho, kým ukazuje mimo tvojho trezora. Označuje trvalý stav, nie okamih: kým je tam, nič z vlastného spracovania Obsidianu sa nevzťahuje na to, čo riadok ukazuje, a zápis zostáva zamknutý, kým nepovieš inak.

Inak prehliadanie funguje ako vnútri: štítky, oddeľovače, písanie, dopĺňanie, <kbd>Backspace</kbd> na vykročenie von. Platia aj tie isté pravidlá viditeľnosti, takže nepodporované prípony stále potrebujú nastavenie *Rozpoznávať všetky typy súborov* v Obsidiane a skryté súbory stále potrebujú nastavenie tohto pluginu.

**Kliknutie pravým tlačidlom funguje aj tam vonku**, hoci ide o iné menu: vlastné obslužné rutiny Prieskumníka súborov potrebujú súbor, ktorý trezor pozná, takže položky vonku sa zostavujú z cesty. Ponúkajú otvorenie (tu, vpravo, v novom okne alebo v predvolenej aplikácii pracovnej plochy), *Kopírovať cestu*, *Zobraziť v systémovom prieskumníkovi*, a — keď je visiaci zámok otvorený — *Nová poznámka*, *Nový priečinok*, *Vytvoriť kópiu*, *Premenovať…* a *Odstrániť*. **Ťahanie** stále potrebuje súbor trezora a zostáva nedostupné.

To isté menu je na otvorenom súbore v prehliadači, kliknutím pravým tlačidlom alebo z vlastných troch bodiek panela, a pýta sa na visiaci zámok v hlavičke toho zobrazenia. Nič iné sa nepýta: či sa súbor vykresľuje alebo zobrazuje ako zdroj, nemá vplyv na to, či sa dá odstrániť, a obrázok alebo PDF — ktoré nemá vôbec žiadne zobrazenie zdroja — je rovnako odstrániteľné ako poznámka. *Odstrániť* znamená kôš pracovnej plochy, takže sa to odtiaľ dá vrátiť; systém bez koša to nahlási, namiesto aby súbor zničil.

Odstránenie mimo trezora presunie súbor do tvojho **systémového koša** — Koš vo Windowse, Trash na macOS — nikdy nie priame odstránenie. Tu vonku nie je žiadny kôš Obsidianu, z ktorého by sa dalo obnoviť, takže odstránenie, ktoré by sa nedalo vrátiť, sa vôbec neponúka: kde platforma nemá kôš, pokus namiesto toho nahlási zlyhanie.

### Písanie mimo trezora

Všetko, čo zapisuje, je **predvolene zamknuté**. Kým riadok ukazuje mimo tvojho trezora, miesto prepínača premenovania v hlavičke zaberá **červený visiaci zámok** — tou istou farbou ako rám okolo riadku, a z toho istého dôvodu: označuje odmietnutie. Oba sú jedno ovládanie na jednom mieste, takže nikdy nevzniká otázka, ktorý z nich čo brzdí.

Tri stlačenia v cykle:

| Stlačenie | Čo dostaneš |
| --- | --- |
| Červený visiaci zámok | Zápis je tu povolený. Visiaci zámok nahradí prepínač premenovania/presunu |
| Prepínač | Režim premenovania/presunu, presne ako vnútri trezora |
| Prepínač znova | Režim sa skončí a visiaci zámok sa znova zavrie — povolenie neprežíva to, na čo bolo otvorené |

**Kláves na premenovanie sa pýta aj na visiaci zámok.** Mimo tvojho trezora jeho stlačenie krátko zobrazí otvorenie a zatvorenie visiaceho zámku, namiesto otvorenia režimu, ktorý by každé potvrdenie odmietlo: odmietnutie prichádza pred prácou, nie po nej. Stlač visiaci zámok, alebo stlač kláves na premenovanie znova do polsekundy — druhé stlačenie udelí presne to, čo udeľuje tlačidlo, pre toto miesto, a s tým otvorí režim premenovania.

Vnútri tvojho trezora nie je visiaci zámok: nie je čo odomykať a prepínač jednoducho zaberá to miesto.

Povolenie sa udeľuje **miestu, nie okamihu**: prežije všetko, čo by si robil pri práci na jednom mieste — dokončenie presunu, kliknutie mimo poľa, otvorenie súboru — a skončí, keď z rozbaľovacieho zoznamu vyberieš iný trezor, jednotku alebo koreň, keď sa riadok vráti k súboru trezora, alebo pri treťom stlačení. Takže séria presunov v jednom priečinku si vyžaduje jedno stlačenie, nie jedno na súbor.

Pri otvorenom visiacom zámku sa panel cesty vonku správa tak ako vnútri:

| Úkon | Výsledok |
| --- | --- |
| Napíš názov, ktorý neexistuje, <kbd>Enter</kbd> | Tá istá otázka „vytvoriť ho?“ ako vnútri; vytvoria sa aj chýbajúce nadradené priečinky. Z názvu bez prípony sa stane `.md`, presne ako vnútri |
| Režim premenovania/presunu, napíš nový názov | Premenuje súbor, ktorý riadok ukazuje. Názov bez prípony si ponechá príponu súboru — tu vonku priečinok obsahuje všetky druhy súborov a premenovanie by nemalo potichu zmeniť `.png` na `.md` |
| Režim premenovania/presunu, prehliadaj inde, vyber **ponechať tento názov** | Presunie ho tam pod názvom, ktorý už má |
| Podrž <kbd>Ctrl</kbd> pri ktoromkoľvek | Namiesto presunu skopíruje a kópiu otvorí v novej karte |

V zamknutom stave všetky tieto úkony namiesto vykonania ohlásia, čo im bráni. V žiadnom zo stavov sa nikdy nič neprepíše: cieľ, ktorý už existuje, je odmietnutý, a odmietnutie pochádza od samotného súborového systému (`COPYFILE_EXCL`, výhradné vytvorenie), nie od kontroly, ktorá by mohla prehrať súbeh. Presun cez hranicu súborových systémov — z USB kľúča, zo sieťového zdieľania — sa vráti ku kopírovaniu a následnému mazaniu a originál sa odstráni až po tom, čo kópia dorazí.

**Presun poznámky *z* tvojho trezora sa najprv opýta.** `fileManager` nemôže súbor sledovať cez túto hranicu: každý odkaz smerujúci na poznámku prestane byť rozpoznaný, nič ich neaktualizuje a poznámka opustí index trezora. Presun sa teda ponúka ako rozhodnutie, nie odmietne sa ani sa nevykoná potichu — dialóg oznámi, čo to stojí a koľko poznámok odkazuje na tú, ktorú presúvaš. Potvrdíš a naozaj sa presunie: skopíruje sa mimo a potom sa odstráni z trezora prostredníctvom vlastného odstránenia Obsidianu, takže sa dá obnoviť presne ako odstránená poznámka, a zlyhanie pri ktoromkoľvek kroku poznámku ponechá tam, kde bola. Podržanie <kbd>Ctrl</kbd> ju stále namiesto toho skopíruje mimo, čo nemá žiadny z týchto problémov. Opačným smerom — vnesenie externého súboru *do* trezora — ešte nie je zapojené.

### Otvorenie externého súboru

Prehliadanie súborového systému môže viesť späť **do trezora, ktorý máš otvorený** — od koreňa, od domovského priečinka, odkiaľkoľvek žijú tvoje trezory. Súbor, ku ktorému sa tak dostaneš, je bežná poznámka, takže sa aj tak otvorí: skutočný editor, odkazy a spätné odkazy, a riadok sa vráti späť na panel cesty zakotvený v trezore. V náhľade zostanú len súbory, pre ktoré Obsidian nemá zobrazenie, keďže tam vonku je náhľad lepšia odpoveď. Kde náhľad takú poznámku aj tak zobrazuje — napríklad znovuotvorený pracovný priestor — jeho horný riadok ponúkne **Otvoriť v *(trezor)***, čo je tá istá ponuka, akú by dala ručná voľba.

Editor Obsidianu pracuje len so súbormi vnútri trezora, takže externý súbor **nemožno** otvoriť ako skutočnú poznámku s odkazmi, spätnými odkazmi a ostatným — je to limit aplikácie, nie tohto pluginu. Výberom takého súboru sa namiesto toho otvorí **náhľad**, len na čítanie, kým nepovieš inak:

| Typ | Zobrazený ako |
| --- | --- |
| `.md`, `.markdown` | Vykreslený Markdown |
| `.html`, `.htm`, `.xhtml` | Vykreslená stránka |
| Obrázky, zvuk, video, PDF | Natívny prehrávač/prehliadač |
| Akýkoľvek iný **textový** súbor (`.json`, `.css`, `.log`, `.txt`, …) | Čistý text bez zmien |
| Binárne formáty bez prehliadača (`.zip`, `.exe`, …) | Odovzdané *Otvoriť v predvolenej aplikácii* |

Prehliadač má dve čítania súboru, a keďže sa navzájom vylučujú, zobrazí sa len to, na ktoré by si **prepol**:

| | Čo to robí | Predvolené pre |
| --- | --- | --- |
| **Zobraziť ako Markdown** | Vykreslí súbor ako poznámku, len na čítanie | `.md`, `.markdown` |
| **Zobraziť ako stránku** | Vykreslí súbor ako stránku, ktorou je, len na čítanie | `.html`, `.htm`, `.xhtml` |
| **Upraviť ako text** | Zdroj, upravovateľný | všetko ostatné |

Mimo trezora je **Upraviť ako text** zároveň stlačením, ktoré zruší režim len na čítanie — režim a povolenie sú jedno gesto namiesto dvoch tlačidiel, nad ktorými treba premýšľať. Je zafarbené dočervena **vždy, keď by stlačenie zrušilo režim len na čítanie**, či už úpravu pripravuješ na mieste, alebo prichádzaš rovno z vykresleného zobrazenia; vnútri trezora nie je čo odomykať, takže tam zostáva obyčajné. **Zobraziť ako Markdown** dostane ľahký nádych zvýrazňovacej farby — ten istý odtieň, aký Obsidian dáva vybranému textu — čím ho označuje za cestu späť, nie za výzvu na akciu.

Keďže tlačidlo sleduje *úpravu*, a nie holý režim, súbor, ktorý v textovom zobrazení leží len na čítanie, stále ponúka **Upraviť ako text**: práve to stlačenie ho pripraví. Súbor, do ktorého sa nikdy nedá písať — skrátený alebo nečitateľný — hovorí namiesto toho **Zobraziť ako text**, lebo to je všetko, čo stlačenie dokáže poskytnúť.

Predvoľby sú nastavené užitočným smerom, nie doslovným: `#` v shellovom skripte je komentár, nie nadpis, takže vykreslenie `.log` ako Markdown by ho potichu prehltlo. Obe predvoľby sa dajú prebiť pre konkrétny súbor a voľba ide do histórie listu, takže dozadu/dopredu aj znovuotvorený pracovný priestor si ju zapamätajú — množstvo poznámok býva v súboroch `.txt` a množstvo súborov `.md` sa ľahšie číta ako zdroj.

#### Čo môže HTML stránka robiť

Nič. Stránka sa zobrazí v rámci so **všetkými povoleniami odopretými** — žiadne skripty, žiadne formuláre, žiadna navigácia, žiadny vlastný pôvod — a s politikou obsahu, ktorá jej nedovoľuje vôbec žiadnu sieť. Nie je to opatrnosť pre samotnú opatrnosť: lokálna stránka načítaná obvyklým spôsobom by zdieľala pôvod tohto okna, a toto okno je Obsidian, takže skript v stiahnutom HTML súbore by bežal vnútri tvojej aplikácie s dosahom tvojej aplikácie.

To, čo to stojí, je čokoľvek, čo stránka *robí*; to, čo si zachováva, je všetko, čím stránka *je*. Šablóny štýlov a obrázky ležiace vedľa súboru sa načítajú a prenesú do rámca, takže uložená stránka stále vyzerá ako ona sama. Odkazy smerujúce mimo vlastného priečinka stránky a odkazy niekam na web zostávajú presne tak, ako sú napísané, a jednoducho sa nenačítajú — lokálny súbor nemôže potichu oznámiť serveru, že si ho otvoril.

Skripty sa **odstraňujú**, nielen blokujú, aby sa stránka, ktorú vidíš, a zdroj, na ktorý môžeš prepnúť, líšili jedným udaným spôsobom, nie čímkoľvek, čo rám potichu odmietol spustiť. Odkazy vnútri stránky nerobia nič. Keď chceš skutočnú vec — skripty, sieť a všetko — *Otvoriť v predvolenej aplikácii* ju odovzdá tvojemu prehliadaču, ktorý je na to správny nástroj.

**Súbory v tvojom trezore sa dajú upravovať hneď**, bez odomykania: *Upraviť ako text* je skutočný editor a zapisuje počas písania.

**Úprava sa pamätá cez prepnutie.** Prechod na *Zobraziť ako Markdown* ju pozastaví — do statického vykreslenia nie je do čoho písať a Živý náhľad potrebuje vlastný editor Obsidianu, ktorý existuje len pre súbory vnútri trezora — takže nič netvrdí, že upravuješ, kým si tam. Návrat na *Upraviť ako text* pokračuje tam, kde si prestal.

**Súbory mimo trezora sa otvárajú len na čítanie a *Upraviť ako text* to zruší.** To stlačenie je celá brána: kým sa nestane, vonku sa nič nezapíše. Potom sa súbor ukladá počas písania, presne ako ten v trezore; a stavový riadok sa zmení zo zámku na ceruzku. Odomknutie sa vzťahuje na ten jeden súbor v tej jednej karte — prechod na iný súbor znova zamkne — a zámerne sa neukladá do histórie karty, takže znovuotvorený pracovný priestor sa nikdy nevráti s už pripraveným zápisom do systémového súboru, o ktorého otvorení si nevieš.

**Skrátené súbory zostávajú len na čítanie tak či tak** — uloženie toho, čo je na obrazovke, by zahodilo všetko za limitom, a tak sa tlačidlo vôbec neponúka, namiesto toho, aby sa ponúklo a odmietlo. To isté platí pre súbor, ktorý sa nedal prečítať: niet čo zapisovať späť okrem prázdneho panela.

Ak zápis zlyhá — pripojenie len na čítanie, súbor, ktorý ti nepatrí — v upozornení sa zobrazí vlastný dôvod systému.

Veľmi veľké súbory sa zobrazujú skrátené a stavový riadok to povie, namiesto aby ťa nechal prísť na to samého — vedľa ostatných podmienok, nie až za tlačidlami, keďže je to fakt o súbore ako ostatné. Limity sú merané voči skutočnému vykresľovaču, nie odhadované — vysadiť megabajt textu v jedinom paneli zabije vykresľovací proces Obsidianu naisto a Markdown stojí na bajt niekoľkokrát viac než čistý text, takže obe majú vlastné limity a jediný obrovský riadok sa skráti, aj keď je súbor ako celok malý.

**Stavové riadky sú štítky a vysvetlenie je bublinová nápoveda.** Každý riadok povie, čo platí, toľkými slovami, koľko treba — *Mimo trezora*, *Pre tento typ súboru nie je editor*, *Skrátené — súbor je príliš veľký* — pretože tlačidlá vedľa nich už hovoria, v akom stave súbor je. Prejdenie kurzorom po jednom z nich dá vetu: prečo ho Obsidian nedokáže otvoriť ako poznámku, čo by sa s týmto typom súboru inak stalo, čo ťa skrátenie stojí.

Platí to aj pre súbory **vnútri** tvojho trezora. Obsidian odovzdá každú príponu, pre ktorú nemá zobrazenie, rovno predvolenej aplikácii pracovnej plochy — takže `.txt` alebo `.json` v tvojom trezore by ťa vyviedol z Obsidianu úplne. Tie sa teraz otvárajú v tom istom prehliadači, s oranžovým rámom, keďže „otvor to v Obsidiane“ je to, o čo si žiadal — a keďže sú to súbory trezora, dajú sa tam upravovať bez akéhokoľvek odomykania. Binárne súbory bez prehliadača si ponechávajú správanie Obsidianu; niet čo zobraziť.

Náhľad sa otvorí **v karte, v ktorej si bol**, takže dozadu/dopredu ťa vrátia k poznámke, z ktorej si prišiel; podrž <kbd>Ctrl</kbd> pre novú kartu ako všade inde. Lišta hlavičky ukazuje cestu externého súboru, kým je otvorený, takže z nej môžeš prehliadať ďalej.

Tichý riadok nad obsahom ponúka východy:

- **Otvoriť v *(trezor)*** — zobrazí sa, keď súbor patrí do jedného z tvojich ostatných trezorov. Odovzdá ho vlastnému obslužcovi URI Obsidianu, ktorý otvorí okno toho trezora s poznámkou v ňom, ako skutočnú upravovateľnú poznámku. Toto okno zostane presne tak, ako bolo; nič sa ti pod rukami neprepne.
- **Zobraziť ako Markdown** / **Zobraziť ako stránku** / **Upraviť ako text** — dve čítania, ktoré tento súbor má; posledné aj zruší režim len na čítanie mimo trezora.
- **Otvoriť v predvolenej aplikácii** — odovzdá súbor predvolenej aplikácii tvojej pracovnej plochy, vrátane binárnych formátov, ktoré tento prehliadač nedokáže zobraziť. Znenie presne ako vlastná položka Obsidianu pre tú istú akciu, pretože je to tá istá akcia.

Prehliadač odpovedá aj na **kliknutie pravým tlačidlom**: vnútri textového editora s *Vystrihnúť* / *Kopírovať* / *Prilepiť* / *Vybrať všetko*, a všade inde vlastným menu súboru. Menu s tromi bodkami Obsidianu v hlavičke nesie aj toto menu — mimo trezora by inak ponúkalo len *Rozdeliť vpravo* a *Rozdeliť dole*.

Mimo tvojho trezora sa nič nezapíše, kým najprv nestlačíš *Upraviť ako text*. Úplné vysvetlenie nájdeš v časti [Mimo trezora](README.sk.md#mimo-trezora) v README.

## Pustenie súboru na priečinok v ceste

Každý priečinok v riadku je cieľom pre pustenie, takže **poznámka pretiahnutá na priečinok sa doň presunie** — najkratšia cesta k tomu vedie medzi poznámkou a ktorýmkoľvek priečinkom nad ňou, keďže cieľ je už na obrazovke. Ťahaj zo správcu súborov, zo zoznamu, z názvu poznámky v záhlaví alebo odkiaľkoľvek inde v Obsidiane, čo vytvára súbor: ide o vlastné ťahanie aplikácie, takže popisok pri kurzore, kurzor aj zvýraznenie sú tie, ktoré kreslí správca súborov.

**Aj názov trezora prijíma pustenie**, keďže je priečinkom na vrchu riadku — tým jediným gestom sa poznámka odtiaľto dostane do koreňa trezora.

**Naraz sa dá pretiahnuť aj celý výber**, a presunie sa ako celok: ak by čo i len jeden z výberu nebolo možné presunúť, pustenie sa odmietne, namiesto toho, aby sa časť presunula a zvyšok potichu preskočil.

Odkazy nasledujú poznámku úplne rovnako, ako keď sa presúva zo správcu súborov alebo napísaním cesty.

Priečinok, ktorý **pustenie prijať nemôže, neponúka nič vlastné** — žiadny popisok *Presunúť do*, žiadne zvýraznenie priečinka — namiesto ponuky niečoho, čo by aj tak zlyhalo; namiesto toho tam stojí vlastná odpoveď Obsidianu pre záhlavie, *Otvoriť v tejto karte*. Tri prípady:

- priečinok, v ktorom sa súbor **už nachádza**, keďže tam už je;
- priečinok pustený **sám do seba alebo do svojho vlastného potomka**, čo by mu nezanechalo miesto, odkiaľ pochádza;
- výber obsahujúci **priečinok a niečo, čo sa v ňom nachádza**, keďže presun priečinka berie so sebou aj potomka.

Priečinok, ktorý už obsahuje **súbor rovnakého názvu**, pustenie prijme a spýta sa, čo urobiť so súborom, ktorý stojí v ceste — s rovnakým dialógom ako pri napísanom alebo vybranom obsadenom názve — pozri [Názov, ktorý je obsadený](#názov-ktorý-je-obsadený). Nič sa tu neprepisuje.

Pustenie prijímajú iba priečinky **vo vnútri trezora**. Kým riadok ukazuje mimo trezora, jeho segmenty pustenie odmietajú, keďže vytiahnutím poznámky z trezora sa poruší každý odkaz na ňu — rozhodnutie, ktoré si zaslúži otázku, nie gesto. Spôsob, ako to urobiť zámerne, je stále napísať cestu, ktorá sa najprv spýta a povie ti, koľko poznámok by to ovplyvnilo.

## Pustenie textu alebo súboru na jeho zapísanie

Rovnaké ciele prijímajú aj **obsah**, nielen súbory, a tieto dva prípady rozlišuje to, čo ťaháš, nie miesto, kde to pustíš.

**Na poznámku, ktorú riadok už pomenúva** — vlastný názov poznámky alebo oddeľovač, ktorého priečinok má poznámku priečinka — sa to, čo si pustil, pridá na jej koniec, po prázdnom riadku. Najprv sa spýta, keďže sa tým zapisuje do súboru, ktorý už existuje, a ťahanie je gesto, ktoré nepevná ruka môže urobiť aj náhodou. Funguje text z editora, súbor z pracovnej plochy aj poznámka vytiahnutá z tohto trezora; súbor sa číta ako text a binárny súbor sa odmietne, namiesto toho, aby sa vložil ako obrazovka plná nezmyslov.

**Na miesto — názov trezora alebo priečinok** — sa zatiaľ nič nezapíše, keďže nič nemá názov. Pole sa tam otvorí a drží to, čo si pustil, a názov, ktorý napíšeš, je to, čo to potvrdí: nová poznámka sa *vytvorí* s daným textom a pri existujúcej sa spýta presne ako vyššie. <kbd>Esc</kbd>, alebo klik inde, celú vec zruší.

**Riadok sa rozžiari namodro**, kým je nad ním ťahanie, ktoré by pristálo ako obsah, a zostáva modrý, kým pole niečo drží — rovnaká modrá, hovoriaca to isté: to, čo sa stane ďalej, sa týka textu, ktorý nesieš. Súbor pretiahnutý z tvojho vlastného trezora na priečinok stále znamená *presuň ho tam*, ponecháva si vlastné zvýraznenie Obsidianu a nikdy sa nerozžiari namodro; toto gesto tu bolo skôr a obsah ustupuje pred ním.

## Keď je cesta dlhšia ako panel

Názvy sa **skracujú, nie stláčajú**, v poradí toho, čo asi najmenej potrebuješ:

1. **Najprv názov trezora**, až po jeho ikonu. Vieš, v akom trezore si; ikona naďalej hovorí, kde cesta začína.
2. **Potom prípona súboru**, ak ju máš zapnutú — rovnaké tri znaky takmer pri každom súbore v trezore. Ide preč celá, nie skrátená: polovica prípony nehovorí nič, čo by nehovorila žiadna prípona.
3. **Potom priečinky, od najdlhšieho.** Najdlhší názov priečinka sa skráti na dĺžku ďalšieho najdlhšieho, potom sa obidva skracujú spolu, a tak ďalej, každý sa zastaví na svojom minime — takže jeden veľmi dlhý priečinok vzdá všetko, čo má navyše oproti ostatným, skôr ako krátky názov vedľa neho stratí čo i len jedno písmeno.
4. **Vlastný názov súboru nakoniec**, a ponecháva si okolo šiestich znakov. Na to tu záhlavie je.

Miesto sa uvoľňuje **priebežne**, v zlomkoch pixelu, nie po jednom písmene naraz: názov, ktorý ustupuje, sa oreže na pixel a stráca sa pod svojimi `…`, takže pomaly zužovaný panel plynulo zužuje riadok a nič za tým sa nehýbe skokovito. Skôr než zmizne čo i len jedno písmeno, minie sa priestor okolo oddeľovačov — je to jediné rozostupovanie riadku a nestojí to žiadnu informáciu — a skrátený názov končí tam, kde začína oddeľovač, bez pásu prázdneho priestoru medzi nimi.

**Pole si berie to, čo drží.** Otvorenie poľa na napísanie cesty nevytláča priečinky vedľa neho z cesty: je široké presne ako text v ňom a rastie, ako píšeš, takže zvyšok cesty si ponecháva všetko, čo pole nepotrebuje. Iba keď nie je dosť miesta pre oboje, riadok sa posunie, a vtedy je pole tá jediná vec, ktorá nikdy neustupuje — je to text, ktorý sa upravuje, nie názov, ktorý sa zmestí.

Nič sa neoreže za bod, ktorý ho odlišuje od susedov: `Projects2025` a `Projects2026` v tom istom priečinku sa skrátia na `…025` a `…026`, nie na predponu, ktorá by z nich urobila to isté slovo, zatiaľ čo `Reports` vedľa `Receipts` sa môže skrátiť na `Rep…`. Okrem toho si každý názov zachováva **čitateľnú šírku** — zhruba na štyri písmená pri priečinku a šesť pri názve súboru, meranú v písme, ktorým sa riadok naozaj kreslí, nie počítanú. Štyri úzke písmená a štyri široké nie sú rovnaké množstvo názvu, takže `lilliliillil` si smie ponechať viac zo seba než `WWMMWWMMWWMM`, a to, čo zostane na obrazovke, má v oboch prípadoch rovnakú veľkosť. Krátke názvy sa nechajú úplne na pokoji — názov obrúsený na `A…` je jedinečný a napriek tomu nečitateľný. **Medzery sa do toho nepočítajú.** Šesť znakov na to, aby povedali, o ktorý súbor ide, je šesť znakov na prečítanie, takže medzery medzi nimi idú zadarmo a jedna nikdy nezostane pri `…`, kde by aj tak bola neviditeľná.

**Názov sa oreže tam, kde sa naň susedia zhodujú, a uprostred, keď sa nezhodujú nikde.** Dva priečinky s názvom `aaaa-common-one` a `aaaa-common-two` zdieľajú všetko okrem posledných troch znakov, takže orezanie konca si ponechá tú polovicu, ktorá niečo hovorí: skrátia sa na `…one` a `…two`, čo je kratšie *a zároveň* ich to odlíši. Tam, kde je zhoda na konci — `alpha-draft` vedľa `beta-draft` — odchádza koniec; tam, kde je zhoda na oboch koncoch, zostáva stred. Názov bez blízkych susedov stráca stred, keďže názov začína tým, čím je, a končí tým, ktorý to je — pri súbore jeho príponou: `annual…2026.md`.

Krátka zhoda sa nepočíta. `parallel structures` náhodou končí rovnakými dvoma písmenami ako `Schemes` vedľa neho, a to nie je dôvod ponechať niektorý z nich celý — už tri znaky spredu ich navzájom odlíšia.

Nič sa nezalamuje na druhý riadok. Keď sa nezmestia ani tie najkratšie čestné názvy, riadok sa **posúva vodorovne**, zaparkovaný na konci, kde je súbor — v tom bode už nezostáva nič na stlačenie a ďalšie orezávanie by skôr skrývalo, než skracovalo. Koliesko posúva riadok bez ohľadu na to, kde nad riadkom stojí kurzor, a dá sa dosiahnuť oboch koncov: počas posúvania sa riadok zarovnáva podľa svojho začiatku, nech je nastavenie zarovnania akékoľvek, keďže obsah vycentrovaný v boxe, z ktorého vyrástol, presahuje rovnako doľava ako doprava — a tú polovicu nemožno posunutím dosiahnuť vôbec.

**Ukáž na skrátený názov a vráti sa celý**, kým naň ukazuješ, posunutý k ľavému okraju, aby bolo celé to, čo sa vrátilo, na obrazovke. **Klikni naň a zostane**: pole sa otvorí a ukazuje priečinok, na ktorý si klikol, čo sa ponúka za ním a čokoľvek napíšeš, a naďalej to ukazuje aj po tom, ako sa kurzor presunie preč. Názvy zostávajú na mieste, kým posúvaš riadok alebo do neho píšeš — keby sa jeden otvoril pod gestom myslenom na čítanie riadku, posunulo by to všetko za ním spod teba.

**Úvodný segment vždy nesie tooltip a je ním absolútna cesta** — `/home/ty/Vaults/Notes`, alebo kdekoľvek riadok začína. To je jediná vec o riadku, ktorú nič na obrazovke povedať nedokáže: názov ti povie *ktorý* trezor, nikdy kde sa nachádza. Je tam bez ohľadu na to, či bolo treba niečo skrátiť.

Keď je **Zobraziť názov trezora** vypnuté, názov sa neodstráni, iba sa drží na nule — takže ukázanie na ikonu ho vráti presne tak, ako ukázanie na názov, ktorý riadok musel skrátiť.

**Zobrazovať prípony súborov** vráti príponu späť do názvu súboru v riadku. Vypnuté — predvolené — riadok pomenúva poznámku tak, ako ju tituluje Obsidian, bez `.md`, ktoré zdieľa takmer každý súbor v trezore; zapnuté ju pomenúva tak, ako to robí súborový systém, čo sa hodí, keď trezor obsahuje viac než len poznámky. Je to tiež druhá vec, ktorú riadok obetuje, keď dôjde miesto, hneď po názve trezora.
Tooltip ti dá zvyšok: nielen názov, ale všetko, čo pod ním riadok zobrazuje, ako `…/názov/priečinok/poznámka.md`, takže jedno ukázanie odpovie zároveň na "čo je toto" aj "čo je pod tým". Ikona trezora pomenúva svoj trezor rovnako, keď je názov vypnutý alebo bol stlačený preč.

## Varovné farby

| | Kedy | Čo to znamená |
| --- | --- | --- |
| **Červený** okraj na paneli cesty | Riadok ukazuje mimo trezora | Obsidian nedokáže otvoriť to, čo je tam, ako poznámku, a nič tam vonku sa nezapíše, kým neotvoríš zámok. |
| **Oranžový** okraj na paneli cesty | Súbor je textového typu, pre ktorý Obsidian nemá zobrazenie | Upozornenie. Obsidian by ho odovzdal predvolenej aplikácii tvojej plochy; namiesto toho ho zobrazí tento plugin. |
| **Červený** text v otvorenom poli | Na tej ceste zatiaľ nič nie je | <kbd>Enter</kbd> to vytvorí, nie otvorí. Nie je to ani tak varovanie, ako skôr tvrdenie o tom, čo urobí ďalší stlačený kláves — pozri [Písanie cesty](#písanie-cesty). |
| **Červený** zámok namiesto prepínača premenovania | Riadok ukazuje mimo trezora a zápis tam je stále uzamknutý | Rovnaká červená ako okraj, z rovnakého dôvodu: označuje odmietnutie. Stlačením povolíš zápis tu a miesto sa vráti prepínaču — pozri [Písanie mimo trezora](#písanie-mimo-trezora). |

**Dva okraje sú nezávislé a obidva môžu platiť naraz** — externý `.json` je mimo trezora *a zároveň* typu, pre ktorý Obsidian nemá editor. V prehliadači sa objavia ako samostatné riadky, každý uvádza iba svoj vlastný fakt. Na paneli cesty vyhráva červená tam, kde platí obidvoje, keďže dva okraje by boli len šum. Červený *text* je celkom tretia vec: týka sa toho, čo sa práve píše, nie toho, kam riadok ukazuje, takže sa môže objaviť vnútri ktoréhokoľvek okraja alebo žiadneho.

Oranžová úroveň je zámerne úzka. Registrované typy (Markdown, canvas, obrázky, PDF, audio, video) sa spracúvajú správne a nedostávajú nič. Binárne súbory nedostávajú nič tiež — nehrozí, že by si `.zip` náhodou upravil na neporiadok. Zostáva presne to riziko: `.json`, `.css` alebo `.log`, ktoré viditeľnými urobilo **Zobraziť všetky typy súborov**. Zoznam je zámerne širší: v ňom je oranžové všetko, čo nie je poznámka — pozri [ako sa farbia riadky zoznamu](#ako-sa-farbia-riadky-zoznamu).

## Režim premenovania/presunu

Tlačidlo s ceruzkou celkom vpravo v záhlaví — vedľa tlačidla režimu zobrazenia, rovnako veľké ako natívne tlačidlá — prepína režim premenovania/presunu. Mimo trezora na jeho mieste stojí červený zámok, kým naň nestlačíš; pozri [Písanie mimo trezora](#písanie-mimo-trezora). Riadok záhlavia je potom orámovaný farbou zvýraznenia, presne ako pri premenovaní v správcovi súborov. Rovnaké kliknutia a klávesové skratky teraz potvrdia presun alebo premenovanie cez Obsidianovu funkciu `fileManager.renameFile`, takže sa všetky odkazy na poznámku pretiahnu s ňou.

Počas premenovania:

- Aktuálny názov súboru je pripnutý v zozname každého priečinka, takže presun poznámky bez premenovania je jediné kliknutie.
- Názvy, ktoré sú v cieľovom priečinku už obsadené, sú **červené** — priečinok, ktorý daný názov už má, aj súbor s daným názvom — takže kolízia sa ukáže skôr, než si vyberieš. Stále sa dajú vybrať: pozri nižšie.
- Vstup sa overuje priebežne podľa vlastných pravidiel Obsidianu na premenovanie — rovnaké sady znakov, rovnaké hlásenia, rovnaký červený tooltip ako pri premenovaní v strome súborov — takže neplatný názov je označený už počas písania a nedá sa potvrdiť.
- Kliknutie mimo riadku záhlavia, alebo strata fokusu záhlavia, ukončí režim premenovania.

### Názov, ktorý je obsadený

Presun alebo premenovanie na názov, ktorý už existuje, sa **spýta, namiesto toho, aby odmietol.** Otvorí sa dialóg s dvoma cestami, ktoré môžeš upraviť: kam ide tvoj súbor a kam ide súbor, ktorý stojí v ceste — červený, kým je stále obsadený. Každá cesta je nakreslená rovnako, ako panel cesty kreslí cestu, s časťami, ktoré sa líšia, zafarbenými a skracovanými ako posledné, takže aj dlhá cesta stále ukazuje, čo sa mení.

Obe polia majú zoznam. Druhé obsahuje bežné spôsoby riešenia:

- **Vymeniť miesta** — ide do pôvodného priečinka tvojho súboru, pod svojím vlastným názvom.
- **Vymeniť názvy** — zostáva na mieste a preberá pôvodný názov tvojho súboru.
- **Vymeniť obe** — preberá pôvodnú cestu tvojho súboru.
- `-1`, `-bak` a `-old` vedľa svojho vlastného názvu.
- Dva názvy, ktoré súbory mali.

Prvý zoznam ponúka miesto, kam tvoj súbor mieril, **Ostať na mieste**, jeho vlastný názov v cieľovom priečinku a `-1`, `-bak` a `-old` vedľa neho. Spôsob riešenia, ktorého cesta je obsadená, je sivý a nedá sa vybrať. Výberom sa **iba vyplní pole** — stále ho môžeš upraviť — a **Použiť** presunie oboje, vrátane odkazov; **Zrušiť** nepresunie nič. Výber obsadeného názvu zo zoznamu sa spýta to isté, rovnako ako pustenie poznámky na priečinok, ktorý jej názov už obsahuje.

## Jeden kláves na obe premenovania

Príkaz na premenovanie (<kbd>F2</kbd> v predvolenom nastavení, alebo čokoľvek, na čo si ho preradil) **prepína** medzi Obsidianovým premenovaním priamo v nadpise a lištou cesty tohto pluginu. Ak máš Obsidianov nadpis vypnutý, lišta cesty sa stáva jediným cieľom, takže kláves nikdy nezostane bez účinku.

V lište cesty otvára **meno bez prípony** — presne to, čím premenovanie takmer vždy je, a to isté, čo vyberie kliknutie na meno. Stlač ho znova a urobí to, čo by tam urobil <kbd>Tab</kbd>: na mene je to ďalší priečinok v poradí — meno s prípomou, cesta od koreňa trezora, cesta od koreňa systému; pri niečom napísanom to doplní, ako to robí <kbd>Tab</kbd>.

**Cyklus sa uzatvára pri nadpise.** Päť stlačení ťa prevedie okolo neho — nadpis, meno, meno s prípomou, cesta od trezora, cesta od koreňa systému — a šieste je znova nadpis. Toto stlačenie je jediné, ktoré sa líši od
<kbd>Tab</kbd>, ktorý sa naopak vracia späť na začiatok cesty — a siedme
ide tam, kam vedie kolo <kbd>Tab</kbd>u: koreň trezora, s celou cestou v
poli a označeným prvým priečinkom. Takže každý krok, ktorý dosiahne <kbd>Tab</kbd>, dosiahne
aj tento kláves.

Príkaz **Zamerať lištu cesty** robí to isté vo vnútri poľa — čokoľvek, čo
by urobil <kbd>Tab</kbd> — a kde by <kbd>Tab</kbd> urobil kolo, tento príkaz odovzdá kurzor
späť poznámke. Jeho ďalšie stlačenie je kolo: koreň trezora, označený prvý priečinok.

**V poli, ktoré je už otvorené**, kláves ho zmení na premenovanie tam, kde
stojí — pričom zachová text, kurzor aj výber — a **Zamerať lištu
cesty** ho z premenovania rovnakým spôsobom vezme späť. **Čokoľvek iné** stlačené alebo
kliknuté medzi stlačeniami začne oba cykly znova, takže stlačenie po tom, čo si
niečo upravoval, nikdy nedopadne na priečinok ponechaný z predtým.

Mimo trezora kláves funguje tiež — tam vonku nie je žiadny nadpis, takže
prvé stlačenie ide priamo do lišty cesty.

Funguje to obalením príkazu `workspace:edit-file-title`, nie zabratím klávesu, takže preradenie klávesovej skratky aj spustenie príkazu z palety fungujú nezmenene.

## Ako sa farbia riadky zoznamu

| Farba | Znamená |
| --- | --- |
| **Fialová** | Poznámka (`.md`, `.markdown`) — čo Obsidian otvorí ako poznámku, vybraná z priečinka so zmiešaným obsahom |
| **Oranžová** | Nie je poznámka — čokoľvek, čo Obsidian neotvorí ako poznámku, od PDF po `.txt`, a s nimi aj riadky `:page`. Priečinok so zmiešaným obsahom sa skenuje pre poznámky v ňom, a jedna farba pre všetko ostatné to povie rýchlejšie než upozornenie na niekoľko z nich; pozri [varovné farby](#varovné-farby) |
| **Stlmená** | Mimo trezora, takže sa neuplatňuje spracovanie samotného trezora |
| **Modrá**, tučná | Tam, kde už si: vlastná poznámka tejto lišty a priečinok, na ktorom lišta cesty stojí. V režime premenovania/presunu stojí na mieste poznámky riadok *zachovať toto meno* — v oboch prípadoch ide o tú istú poznámku |
| **Červená** | Iba v režime premenovania/presunu: meno je obsadené. Stále vybrateľné — jeho výber sa spýta, čo urobiť so súborom, ktorý stojí v ceste; pozri [Meno, ktoré je obsadené](#názov-ktorý-je-obsadený) |

**Priečinky sú tučné**, takže vlastná poznámka priečinka nepotrebuje žiadnu vlastnú
farbu na to, aby sa odlíšila od svojho priečinka: je fialová ako každá iná
poznámka. **Čiara na okraji riadku** označuje mená, ktoré začínajú tým, čo si napísal — modrá tam, kde
sa zhodujú ďalej, zelená na vetve, ktorú návrh ponúka; pozri
[Písanie cesty](#písanie-cesty).

Pole má pri tom, čo pomenúva, tie isté farby — pozri [Písanie cesty](#písanie-cesty).

## Pravidlá viditeľnosti

- Súbory s nepodporovanými prípomami sa v zoznamoch objavia iba ak je zapnuté Obsidianovo nastavenie **Detect all file extensions** — **vo vnútri trezora**. Mimo neho sa toto nastavenie neuplatňuje: riadi, čo trezor indexuje, a nič vonku nie je v trezore, takže `.txt` vedľa tvojich poznámok sa zobrazí tak či tak.
- Zoznam zobrazuje až 1 000 riadkov, desaťkrát viac než Obsidianov vlastný limit. Keď má priečinok viac, posledný riadok povie, koľko bolo vynechaných; píš ďalej, aby sa zoznam zúžil.
- Skryté súbory a priečinky (dot-files) sa zobrazia iba ak je zapnuté nastavenie tohto pluginu **Zobraziť skryté súbory**.
- **Ochrana proti prepísaniu funguje rovnako bez ohľadu na viditeľnosť** — skrytý súbor ti stále zabráni ho prepísať.

## Ťahák

Cesta **obalená v úvodzovkách** sa pre teba rozbalí. Windows *Copy as path* vydá
`"C:\Users\ty\poznamka.md"`, vrátane úvodzoviek, a shell to isté urobí pre každú
cestu s medzerou; vloženie aj napísanie funguje tak či tak. Iba
úvodzovka, a iba ako zhodný pár okolo celého výrazu — v skutočnom mene sa
nemôže objaviť, na rozdiel od apostrofu, ktorý pokojne môže.

| Chceš… | Urob toto |
| --- | --- |
| Otvoriť priečinok (jeho poznámku, alebo ho odhaliť) | Klikni na oddeľovač **za** tým priečinkom |
| Dať priečinku poznámku priečinka, ktorú nemá | **Dvojklik** na ten istý oddeľovač (potrebuje plugin na poznámky priečinkov) |
| Vymeniť priečinok za súrodenca | Klikni na meno toho priečinka, potom napíš alebo vyber |
| Premenovať alebo presmerovať poznámku | Klikni na meno poznámky — vrátane prípony |
| Prehliadať obsah priečinka | Klikni na meno toho priečinka; zoznam zobrazuje jeho rodiča, tak klikni na priečinok **pod** tým, ktorý chceš |
| Prepísať priečinok a všetko pod ním | **Dvojklik** na meno toho priečinka, potom píš |
| Upraviť cestu od priečinka nižšie | Klikni na meno toho priečinka, potom <kbd>→</kbd> na zrušenie výberu |
| Preskočiť na súbor napísaním jeho cesty | Klikni na meno súboru alebo prázdne miesto, píš, <kbd>Enter</kbd> |
| Otvoriť súbor v novej karte namiesto toho | <kbd>Ctrl</kbd> pri jeho výbere, alebo <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| Skopírovať poznámku niekam namiesto presunu | Ceruzka, potom <kbd>Ctrl</kbd> pri výbere alebo potvrdení cieľa |
| Vytvoriť poznámku na ceste, ktorá neexistuje | Napíš cestu — pole sa zmení na **červené**, keď jej v zozname nič nezodpovedá — potom <kbd>Enter</kbd>. Vo vnútri trezora sa vytvorí hneď; mimo neho sa najprv spýta |
| Zistiť, či cesta, ktorú si napísal, už existuje | Pozri sa na farbu: má farbu riadku, ktorý pomenúva, a červená znamená, že <kbd>Enter</kbd> by ju vytvoril |
| Zostúpiť o úroveň nižšie počas písania | Napíš `/` |
| Vrátiť sa o úroveň vyššie počas písania | <kbd>Backspace</kbd> v prázdnom poli |
| Vtiahnuť priečinky pred poľom do neho | <kbd>←</kbd> na jeho začiatku pre jeden; <kbd>Shift</kbd>+<kbd>Home</kbd>, alebo <kbd>Home</kbd> so zatvoreným zoznamom, pre všetky |
| Presunúť alebo premenovať otvorenú poznámku | Klikni na ceruzku, potom prehliadaj alebo píš ako vyššie |
| Presunúť na meno, ktoré je obsadené | Potvrď to aj tak: dialóg ti umožní vymeniť miesta, mená alebo oboje, alebo dať súboru v ceste iné meno |
| Presunúť bez premenovania | Ceruzka → klikni do cieľového priečinka → vyber pripnuté aktuálne meno súboru |
| Premenovať na mieste | <kbd>F2</kbd> dvakrát (prvé stlačenie ide na nadpis, druhé na hlavičku) |
| Preskočiť do iného trezora, domov alebo na disk | Klikni na meno trezora |
| Otvoriť súbor spoza trezora | Meno trezora → vyber miesto → prehliadaj → vyber súbor (iba na čítanie, kým sa nepoužije *Upraviť ako text*) |
| Doplniť meno, ktoré píšeš | <kbd>Tab</kbd>, alebo <kbd>End</kbd> pre to, čo je ponúknuté; <kbd>→</kbd> zoberie jedno jeho písmeno |
| Vstúpiť doňho, keď zostane jedno meno | <kbd>Tab</kbd> znova |
| Vziať krok späť, alebo opustiť priečinok | <kbd>Shift</kbd>+<kbd>Tab</kbd> |
| Zobrať celú cestu, alebo systémovú cestu | <kbd>Tab</kbd> za koniec, alebo klikni štyrikrát |
| Skopírovať meno, cestu, alebo systémovú cestu | Klikni pravým dvakrát; prázdne miesto trikrát pre systémovú cestu |
| Dosiahnuť to, čo pre tento trezor ponúka správca trezorov | Klikni pravým na ikonu na začiatku riadku |
| Skopírovať ID trezora | Klikni pravým na ikonu na začiatku riadku |
| Otvoriť iný trezor, ktorý si prehliadal | Klikni pravým na jeho meno na začiatku riadku |
| Vidieť prípony súborov v riadku | Zapni **Zobrazovať prípony súborov** v nastaveniach |
| Otvoriť segment priečinka v novej karte | <kbd>Ctrl</kbd> alebo klik prostredným tlačidlom, alebo ho pretiahni na lištu kariet |
| Dosiahnuť lištu cesty z klávesnice | Priraď *Zamerať lištu cesty* v Klávesových skratkách |
| Otvoriť webovú adresu alebo odkaz `obsidian://` | Napíš ju do lišty a stlač <kbd>Enter</kbd> |
| Zrušiť čokoľvek | <kbd>Esc</kbd>, alebo klikni mimo hlavičky |
| Vyskúšať riadky nanečisto pred potvrdením | Šípkami alebo prejdením myšou prechádzaj zoznamom; <kbd>↑</kbd> nad vrchol vráti tvoj text |
| Presunúť poznámku do priečinka nad ňou | Pretiahni ju na ten priečinok v riadku |
| Uložiť útržok textu ako novú poznámku | Pretiahni text na priečinok, napíš meno, <kbd>Enter</kbd> |
| Pridať útržok textu do poznámky, ktorú čítaš | Pretiahni ho na meno poznámky, potvrď |
| Vidieť skrátené meno priečinka celé | Prejdi ním myšou, alebo rozšír panel |
| Zistiť, kde samotný trezor žije | Prejdi myšou nad ikonu na začiatku riadku |
| Vyňať poznámku z trezora | Ceruzka → prehliadaj mimo trezora → potvrď dialóg (odkazy sa poškodia) |
| Povoliť písanie mimo trezora | Klikni na **červenú zámku** v hlavičke; na jej miesto nastúpi prepínač premenovania |
| Znova to zamknúť | Klikni na prepínač, kým sa zámka nevráti — jedno stlačenie dnu, jedno vonku |
| Vymazať súbor mimo trezora | Odomkni zámku, potom klikni pravým na súbor: *Vymazať* ho presunie do systémového koša |

## Nastavenia

| Nastavenie | Možnosti | Predvolené | Čo robí |
| --- | --- | --- | --- |
| **Language** | Predvolené Obsidianom, alebo jeden z 46 jazykov | Predvolené Obsidianom | V akom jazyku je vlastný text tohto pluginu. *Predvolené Obsidianom* sa riadi jazykom nastaveným v nastaveniach Vzhľadu, čo chce takmer každý. Samotný riadok — jeho meno, popis a *Predvolené Obsidianom* — zostáva v angličtine bez ohľadu na výber, pretože je to cesta späť z jazyka, ktorý nevieš čítať. Gréčtina a sanskrit sú preložené tu a chýbajú v Obsidianovom vlastnom zozname, takže toto nastavenie je jediný spôsob, ako sa k nim dostať. |
| **Alignment** | Left / Center / Right | Left | Kde sa panel cesty umiestni v riadku hlavičky. *Center* zodpovedá klasickému vzhľadu Obsidianu. |
| **Delimiter** | Ľubovoľný znak | `/` | Oddeľovač vykreslený medzi segmentmi. Šesť predvolieb na jeden klik (`/ > ▸ › \ •`) sa nachádza pred textovým poľom. |
| **Show vault name** | Zapnuté / Vypnuté | Zapnuté | Či je samotný trezor prvým segmentom panela cesty. Po vypnutí sa tento segment zmení na ikonu 🏠 namiesto zmiznutia, takže cesta stále začína niečím klikateľným. |
| **Folder name opens the dropdown** | Zapnuté / Vypnuté | Zapnuté | Vymení, čo robí meno priečinka a oddeľovač za ním — pozri [tabuľku vyššie](#panel-cesty). S [Folder notes](obsidian://show-plugin?id=folder-notes) oddeľovač otvára poznámky priečinkov. Nikdy sa neuplatní v režime premenovania/presunu. |
| **Show dot files** | Zapnuté / Vypnuté | Vypnuté | Či sú skryté súbory a priečinky uvedené v zoznamoch. Ochrana proti prepísaniu platí tak či tak. |
| **Show all file types** | — | — | Nie je to nastavenie tohto pluginu, ale Obsidianu, uvedené tu, pretože odpovedá na tú istú otázku: tvoj trezor indexuje iba typy súborov, ktoré má prikázané, a iba to, čo indexuje, môže byť uvedené v zozname. Nájdeš ho v nastaveniach Obsidianu, zapni ho, aby si videl každý súbor; tlačidlo vedľa riadku otvorí tú stránku so zvýrazneným a odscrollovaným nastavením, presne ako by ho otvorilo kliknutie vo vlastnom vyhľadávaní nastavení. Mimo trezora sa neuplatňuje, pretože nič vonku sa aj tak neindexuje. |
| **Show file extensions** | Zapnuté / Vypnuté | Vypnuté | Či meno súboru v riadku nesie svoju prípomu. Vypnuté, je vynechaná — tak ako ju Obsidian vynecháva z názvu poznámky. Zapnuté, riadok pomenúva súbor tak, ako to robí súborový systém. Tak či tak je prípona druhá vec, ktorá sa vynechá, keď riadku dôjde miesto, hneď po mene trezora. |
| **Access external files** | Zapnuté / Vypnuté | **Vypnuté** | Či meno trezora otvára zoznam miest. Vypnuté, plugin nikdy nepozerá za tento trezor. |
| **Hotkeys** | tlačidlo | — | Otvorí Obsidianove *Klávesové skratky* filtrované na tento plugin, kde možno *Zamerať lištu cesty* priradiť kláves. |

## Výmena ikon

Lure vykresľuje tri ikony: ikonu koreňa trezora (keď je **Zobraziť názov trezora** vypnuté), prepínač premenovania/presunu a zámku, ktorá stojí na jeho mieste, keď je písanie mimo trezora zamknuté. Všetky sa dajú vymeniť z témy alebo CSS úryvku — nastav náhradný znak a skry vlastný v jednom pravidle:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* Only ever shown shut: opening it hands the slot to the rename toggle. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}
```

`--lure-icon-glyph` prijme čokoľvek, čo je platné v CSS `content`, takže `url(...)` funguje pre obrázok rovnako dobre ako textový znak či emodži. Nechaj `--lure-icon-svg` tak, ak si chceš ponechať ikonu Lucide a svoj znak nakresliť vedľa nej.
