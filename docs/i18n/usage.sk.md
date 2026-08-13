<!-- Preklad súboru docs/usage.md — stav: commit 7b2691a.
     Strojový preklad (Claude Opus 5), neoverený rodenými hovoriacimi.
     Popisky pluginu pochádzajú zo src/lang/translations.ts a popisky
     Obsidianu z prekladov, ktoré dodáva samotná aplikácia, takže
     zodpovedajú tomu, čo vidíš na obrazovke. -->

**Prečítajte si to v iných jazykoch:** [English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · [Čeština](usage.cs.md) · [Dansk](usage.da.md) · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · [Bahasa Indonesia](usage.id.md) · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · [Norsk](usage.no.md) · [Polski](usage.pl.md) · [Português](usage.pt.md) · [Português (Brasil)](usage.pt-BR.md) · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · **Slovenčina** · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

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

S nainštalovaným [Folder notes](obsidian://show-plugin?id=folder-notes) to isté kliknutie namiesto toho otvorí poznámku daného priečinka. Je to jediný plugin na poznámky priečinkov, o ktorom sa zistilo, že si nárokuje cestu v hlavičke; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) a [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) spravujú poznámky priečinkov, ale nepočúvajú kliknutie na cestu, takže s nimi oddeľovač zobrazí priečinok ako obvykle. Pozri [kompatibilitu](../compatibility.md#verified-against).

Oddeľovač je **podčiarknutý len vtedy, keď priečinok pred ním naozaj má poznámku priečinka**, takže podčiarknutie je prísľub, že je čo otvárať. Každý oddeľovač zostáva klikateľný tak či tak — nepodčiarknutý zobrazí a rozbalí svoj priečinok v bočnom paneli, čo kurzor stále naznačuje. Podčiarknutie zároveň odchádza z názvu priečinka: pri zapnutej výmene názov otvára zoznam, takže označiť ho za odkaz na poznámku by bola lož.

**Režim premenovania/presunu prebíja oboje**, nech nastavenie hovorí čokoľvek: kým je presun rozpracovaný, nič na riadku neotvára priečinok, lebo otvoriť ho by znamenalo presun opustiť. Názvy priečinkov sa vyberajú na úpravu a oddeľovače zostupujú — oboje sú spôsoby, ako určiť cieľ — a podčiarknutie zmizne, aby ukázalo, že otváranie je pozastavené.

**Koreň trezora** je jediný segment, ktorý nie je segmentom cesty. Nemá rodiča, z ktorého by vypísal súrodencov, a tak namiesto toho otvára [zoznam umiestnení](#prehliadanie-mimo-trezora) — tvoje ostatné trezory, domovský priečinok, koreň súborového systému a pripojené jednotky.

## Kliknutie na segment: vymeň ho za súrodenca

Kliknutie na názov priečinka vyberie **názov toho priečinka** v textovom poli a otvorí zoznam priečinka **o úroveň vyššie** — jeho rodiča. Písaním alebo výberom položky vymeníš tento priečinok za súrodenca a všetko pod ním zostane nedotknuté, takže `Projekty/2026/Štart.md` → klikni na `2026` → vyber `2025` ti dá `Projekty/2025/Štart.md`.

Kliknutie na **názov poznámky** funguje rovnako voči jej vlastnému priečinku a vyberie názov súboru **aj s príponou** — premenovať poznámku alebo ju presmerovať zvyčajne znamená zmeniť aj tú.

Kliknutie na priečinok už jeden segment vybralo, takže **ďalšie kliknutie** rozšíri výber na celý riadok — na ten priečinok *a* na všetko pod ním — a písanie potom nahradí zvyšok cesty naraz. V navigačnom režime aj v režime premenovania/presunu to funguje rovnako.

Platí to len ako pokračovanie kliknutia, ktoré pole otvorilo. Len čo pole raz použiješ, správa sa ako ktorékoľvek iné textové pole: kliknutie umiestni kurzor, dvojklik vezme slovo, trojklik riadok.

Zvyšok cesty tak či tak zostáva viditeľný okolo poľa, ako štítky pred ním a ako nevybraný text za ním, takže úplná cesta nikdy nezmizne z hlavičky. Píš, ak chceš výber nahradiť, alebo stlač <kbd>End</kbd> / <kbd>→</kbd>, ak ho chceš zachovať a upravovať odtiaľ. Zoznam vypíše celý priečinok bez ohľadu na predvyplnený obsah; filtrovať začne, až keď naozaj píšeš.

## Zostup cez oddeľovač

Kliknutie na oddeľovač (pri vypnutom **Názov priečinka otvára zoznam**) zostúpi do priečinka pred ním: zoznam vypíše obsah *toho* priečinka a zvyšok cesty sa otvorí vybraný v poli. Výberom priečinka ho pripojíš k ceste a hneď sa otvorí ďalší zoznam, takže sa môžeš preklikať stromom nadol bez opustenia riadka hlavičky.

## Riadky zoznamu sú skutočné riadky správcu súborov

Každý súbor a priečinok v zozname sa správa ako jeho riadok v Prieskumníkovi súborov:

- **Kliknutie pravým** vyvolá tú istú kontextovú ponuku — *Nová poznámka* / *Nový priečinok* na priečinku, *Otvoriť v novej karte* / *Premenovať…* / *Odstrániť* na súbore — vrátane položiek, ktoré do ponúk súborov pridávajú iné pluginy.
- **Potiahni** položku kamkoľvek, kde Obsidian prijíma súbor: do editora, aby si vložil odkaz; na priečinok v Prieskumníkovi súborov, aby si ju presunul; na lištu kariet, aby si ju otvoril.

Znenie ponúk pochádza z vlastných prekladov Obsidianu, takže sedí so zvyškom aplikácie v každom jazyku.

## Písanie cesty

- Kliknutie na **prázdne miesto** pred cestou alebo za ňou otvorí textové pole predvyplnené celou cestou a úplne vybrané — prepíš ho alebo uprav na mieste. (Kliknutie na samotný názov súboru vyberie len názov súboru; pozri vyššie.)
- Písanie, kým je cesta zobrazená, premení posledný segment na malé pole so živým dopĺňaním obmedzeným na aktuálny priečinok.
- `/` potvrdí aktuálny segment a zostúpi doň.
- <kbd>Backspace</kbd> v prázdnom poli vykročí späť do nadradeného priečinka a znovu otvorí jeho názov s kurzorom na konci.
- <kbd>Enter</kbd> potvrdí; <kbd>Esc</kbd> alebo kliknutie inde zruší a vráti sa na skutočnú cestu súboru.

Pole je bez ozdôb — bez rámčeka, bez okraja — takže sa číta ako samotný text cesty a pri písaní samo rastie.

## Navigácia sa nikdy nedotkne otvoreného súboru

V predvolenom (navigačnom) režime sa otvorená poznámka **nikdy** nepremenúva ani nepresúva.

- Cesta, ktorá ukazuje na existujúci súbor, ho otvorí.
- Cesta, ktorá ešte neexistuje, sa spýta *„Vytvoriť nový súbor?“*. Potvrdenie vytvorí chýbajúce nadradené priečinky aj súbor; zrušenie neurobí vôbec nič.

## <kbd>Ctrl</kbd> — nová karta a kopírovanie namiesto presunu

Podržanie klávesu <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> na macOS) pri výbere súboru zo zoznamu alebo pri stlačení <kbd>Enter</kbd> na ceste pošle výsledok do **novej karty** namiesto tejto:

| | Bez klávesu | S <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Vyber alebo napíš existujúci súbor | Otvorí sa tu | Otvorí sa v novej karte |
| Napíš cestu, ktorá neexistuje | Spýta sa a potom otvorí tu | Spýta sa a potom otvorí v novej karte |
| Potvrď cestu v režime premenovania/presunu | **Presunie** poznámku tam | **Skopíruje** ju tam a kópiu otvorí v novej karte |

Modifikátor sa číta vlastným pravidlom Obsidianu, takže sa správa presne tak ako na odkaze či na riadku v Prieskumníkovi súborov — kliknutie stredným tlačidlom tiež znamená „nová karta“, <kbd>Ctrl</kbd>+<kbd>Alt</kbd> znamená rozdelenie a <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> nové okno.

Kopírovanie odmieta prepisovať presne tak ako presúvanie — vrátane prepisu vlastnej cesty poznámky, kde nie je čo rozumné kopírovať.

## Prehliadanie mimo trezora

**Toto je predvolene vypnuté.** Najprv v nastaveniach zapni **Prístup k externým súborom** — čítanie a zápis mimo trezora je jediná vec, ktorú tento plugin robí a ktorú samotný Obsidian nerobí, takže je to niečo, k čomu sa prihlásiš, nie niečo, z čoho sa odhlásiš. Kým je to vypnuté, názov trezora len zobrazí tvoj trezor v Prieskumníkovi súborov a nič tu sa nikdy nepozrie za jeho hranicu.

Kliknutie na **názov trezora** (alebo na ikonu 🏠, keď je *Zobraziť názov trezora* vypnuté) otvorí zoznam miest namiesto obsahu:

- **Tvoje ostatné trezory**, načítané z vlastného registra Obsidianu, naposledy otvorené ako prvé, každý pod vlastnou ikonou trezora Obsidianu — tou, ktorú aplikácia sama používa pre príkazy trezora. Trezor, ktorý už máš otvorený, dostane namiesto toho domček: odtiaľ riadok predvolene začína, nie je to miesto, kam ísť.
- **Domovský priečinok**, pod vlastným názvom účtu, označený znakom `~`. Lucide nemá vlnovku, a tak túto ikonu kreslí plugin na vlastnej mriežke Lucide 24×24 rovnakou hrúbkou čiary — ako ikonu, ktorá v sade chýba, nie ako textový znak posadený medzi ikony.
- **Koreň súborového systému**, označený `root` — nepreložene, lebo tak sa volá na každom systéme — namiesto `/`, ktoré by sa vedľa nasledujúceho oddeľovača čítalo ako prázdny krok.
- **Pripojené jednotky**, s ikonou podľa typu tam, kde sa to dá zistiť lacno: sieťové zdieľania, optické disky, diskety a vymeniteľné médiá majú vlastné; všetko ostatné dostane všeobecnú jednotku. Vo Windowse sa jednotky zobrazujú ako `C:` so všeobecnou ikonou — názvy zväzkov a presné typy vyžadujú WMI, čo sa zámerne nerobí.

Výber iného trezora **neprepne naň Obsidian.** Všetko, čo máš otvorené, zostáva otvorené; panel cesty len začne prehliadať tam. Presne v tom je zmysel toho, že je to na paneli cesty a nie prenechané prepínaču trezorov v bočnom paneli.

### Kým si vonku

Cesta **začína na mieste, ktoré si vybral**, nie v adresárovej štruktúre počítača — vyber `Archív` a riadok znie `Archív / poznámky / …`, nie `/home/ty/Trezory/Archív/poznámky/…`. Úvodný segment nesie ikonu podľa toho, čím je (trezor, domov, jednotka), a <kbd>Backspace</kbd> sa tam zastaví namiesto toho, aby kráčal vyššie do zvyšku súborového systému. Pri vypnutom *Zobraziť názov trezora* je ten segment len ikonou — nastavenie sa týka úvodného segmentu riadka, nech pomenúva ktorýkoľvek trezor, nielen tvojho vlastného.

Panel cesty je **orámovaný chybovou farbou** — tým istým rámom, aký kreslí režim premenovania — tak dlho, kým ukazuje mimo tvojho trezora. Označuje trvalý stav, nie okamih: kým je tam, nič z vlastného spracovania Obsidianu sa nevzťahuje na to, čo riadok ukazuje, a zápis zostáva zamknutý, kým nepovieš inak.

Inak prehliadanie funguje ako vnútri: štítky, oddeľovače, písanie, dopĺňanie, <kbd>Backspace</kbd> na vykročenie von. Platia aj tie isté pravidlá viditeľnosti, takže nepodporované prípony stále potrebujú nastavenie *Rozpoznávať všetky typy súborov* v Obsidiane a skryté súbory stále potrebujú nastavenie tohto pluginu.

**Kliknutie pravým a ťahanie** tam vonku nefungujú — sú to vlastné obslužné rutiny Prieskumníka súborov a potrebujú súbor, o ktorom trezor vie.

### Písanie mimo trezora

Všetko, čo zapisuje, je **predvolene zamknuté.** Vedľa prepínača premenovania v hlavičke sa objaví **visiaci zámok**, kým riadok ukazuje mimo tvojho trezora; stlačením sa zámok otvorí a sčervenie, v súlade s rámom okolo riadka.

Povolenie sa udeľuje **miestu, nie okamihu**: prežije všetko, čo by si robil pri práci na jednom mieste — dokončenie presunu, kliknutie mimo poľa, otvorenie súboru — a končí, keď zo zoznamu vyberieš iný trezor, jednotku alebo koreň, keď sa riadok vráti k súboru v trezore, alebo keď visiaci zámok stlačíš znova. Séria presunov v rámci jedného priečinka teda stojí jedno stlačenie, nie jedno na súbor.

Pri otvorenom visiacom zámku sa panel cesty vonku správa tak ako vnútri:

| Úkon | Výsledok |
| --- | --- |
| Napíš názov, ktorý neexistuje, <kbd>Enter</kbd> | Tá istá otázka „vytvoriť ho?“ ako vnútri; vytvoria sa aj chýbajúce nadradené priečinky. Z názvu bez prípony sa stane `.md`, presne ako vnútri |
| Režim premenovania/presunu, napíš nový názov | Premenuje súbor, ktorý riadok ukazuje. Názov bez prípony si ponechá príponu súboru — tu vonku priečinok obsahuje všetky druhy súborov a premenovanie by nemalo potichu zmeniť `.png` na `.md` |
| Režim premenovania/presunu, prehliadaj inde, vyber **ponechať tento názov** | Presunie ho tam pod názvom, ktorý už má |
| Podrž <kbd>Ctrl</kbd> pri ktoromkoľvek | Namiesto presunu skopíruje a kópiu otvorí v novej karte |

V zamknutom stave všetky tieto úkony namiesto vykonania ohlásia, čo im bráni. V žiadnom zo stavov sa nikdy nič neprepíše: cieľ, ktorý už existuje, je odmietnutý, a odmietnutie pochádza od samotného súborového systému (`COPYFILE_EXCL`, výhradné vytvorenie), nie od kontroly, ktorá by mohla prehrať súbeh. Presun cez hranicu súborových systémov — z USB kľúča, zo sieťového zdieľania — sa vráti ku kopírovaniu a následnému mazaniu a originál sa odstráni až po tom, čo kópia dorazí.

**Jednu vec visiaci zámok neodomkne: presun poznámky *von* z tvojho trezora.** `fileManager` nedokáže sledovať súbor cez túto hranicu, takže každý odkaz smerujúci na poznámku by sa potichu zlomil a Obsidian by ju jednoducho videl zmiznúť. Podržanie <kbd>Ctrl</kbd> ju namiesto toho skopíruje von, čo tento problém vôbec nemá, a upozornenie to aj hovorí. Opačný smer — prinesenie vonkajšieho súboru *do* trezora — tiež ešte nie je zapojený.

### Otvorenie externého súboru

Editor Obsidianu pracuje len so súbormi vnútri trezora, takže externý súbor **nemožno** otvoriť ako skutočnú poznámku s odkazmi, spätnými odkazmi a ostatným — je to limit aplikácie, nie tohto pluginu. Výberom takého súboru sa namiesto toho otvorí **náhľad**, len na čítanie, kým nepovieš inak:

| Typ | Zobrazí sa ako |
| --- | --- |
| `.md`, `.markdown` | Vykreslený Markdown |
| Obrázky, zvuk, video, PDF | Natívny prehrávač/prehliadač |
| Ktorýkoľvek iný **textový** súbor (`.json`, `.css`, `.log`, `.txt`, …) | Doslovný čistý text |
| Binárne formáty bez prehliadača | Odovzdané do *Otvoriť externe* |

Prehliadač má dve čítania súboru, a keďže sa navzájom vylučujú, zobrazí sa len to, na ktoré by si **prepol**:

| | Čo robí | Predvolené pre |
| --- | --- | --- |
| **Zobraziť ako Markdown** | Vykreslí súbor ako poznámku, len na čítanie | `.md`, `.markdown` |
| **Upraviť ako text** | Zdroj, upraviteľný | všetko ostatné |

Mimo trezora je **Upraviť ako text** zároveň stlačením, ktoré zruší režim len na čítanie — režim a povolenie sú jedno gesto namiesto dvoch tlačidiel, nad ktorými treba premýšľať. Je zafarbené dočervena **vždy, keď by stlačenie zrušilo režim len na čítanie**, či už úpravu pripravuješ na mieste, alebo prichádzaš rovno z vykresleného zobrazenia; vnútri trezora nie je čo odomykať, takže tam zostáva obyčajné. **Zobraziť ako Markdown** dostane ľahký nádych zvýrazňovacej farby — ten istý odtieň, aký Obsidian dáva vybranému textu — čím ho označuje za cestu späť, nie za výzvu na akciu.

Keďže tlačidlo sleduje *úpravu*, a nie holý režim, súbor, ktorý v textovom zobrazení leží len na čítanie, stále ponúka **Upraviť ako text**: práve to stlačenie ho pripraví. Súbor, do ktorého sa nikdy nedá písať — skrátený alebo nečitateľný — hovorí namiesto toho **Zobraziť ako text**, lebo to je všetko, čo stlačenie dokáže poskytnúť.

Predvoľby sú nastavené užitočným smerom, nie doslovným: `#` v shellovom skripte je komentár, nie nadpis, takže vykreslenie `.log` ako Markdown by ho potichu prehltlo. Obe predvoľby sa dajú prebiť pre konkrétny súbor a voľba ide do histórie listu, takže dozadu/dopredu aj znovuotvorený pracovný priestor si ju zapamätajú — množstvo poznámok býva v súboroch `.txt` a množstvo súborov `.md` sa ľahšie číta ako zdroj.

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

- **Otvoriť v *(trezor)*** — zobrazí sa, keď súbor patrí niektorému z tvojich ostatných trezorov. Odovzdá ho vlastnému spracovaniu URI v Obsidiane, ktoré otvorí okno toho trezora s poznámkou v ňom, ako skutočnú upraviteľnú poznámku. Toto okno zostane presne také, aké bolo; nič sa ti pod rukami neprepne.
- **Zobraziť ako Markdown** / **Upraviť ako text** — dve čítania; druhé mimo trezora zároveň zruší režim len na čítanie.
- **Otvoriť externe** — odovzdá súbor predvolenej aplikácii tvojej pracovnej plochy vrátane binárnych formátov, ktoré tento prehliadač nedokáže zobraziť.

Mimo tvojho trezora sa nič nezapíše, kým najprv nestlačíš *Upraviť ako text*. Úplné vysvetlenie nájdeš v časti [Mimo trezora](README.sk.md#mimo-trezora) v README.

## Dve varovné farby

| | Kedy | Čo to znamená |
| --- | --- | --- |
| **Červený** rám na paneli cesty | Riadok ukazuje mimo tvojho trezora | Obsidian nedokáže otvoriť to, čo je tam, ako poznámku, a vonku sa nič nezapíše, kým neotvoríš visiaci zámok. |
| **Oranžový** rám na paneli cesty, oranžové položky v zozname | Súbor je textový typ, pre ktorý Obsidian nemá zobrazenie | Výstraha. Obsidian by ho odovzdal predvolenej aplikácii tvojej pracovnej plochy; plugin ho namiesto toho zobrazí. |

**Tieto dve sú nezávislé a môžu platiť naraz** — externý `.json` je mimo tvojho trezora *aj* je to typ, pre ktorý Obsidian nemá editor. V prehliadači sa objavia ako samostatné riadky, každý hovorí len svoj vlastný fakt. Na paneli cesty vyhráva červená tam, kde platia obe, keďže dva rámy by boli iba šum.

Oranžová úroveň je zámerne úzka. Registrované typy (Markdown, canvas, obrázky, PDF, zvuk, video) sú spracované poriadne a nedostanú nič. Ani binárne súbory nedostanú nič — `.zip` si omylom na kašu neupravíš. Ostáva presne to nebezpečné: `.json`, `.css` alebo `.log`, ktorý zviditeľnilo nastavenie **Rozpoznávať všetky typy súborov**.

Červená vyhráva tam, kde by platili obe; dva rámy naraz by boli iba šum.

## Režim premenovania/presunu

Tlačidlo s ceruzkou úplne vpravo v hlavičke — vedľa tlačidla režimu zobrazenia, rovnako veľké ako natívne tlačidlá — prepína režim premenovania/presunu. Riadok hlavičky je potom orámovaný zvýrazňovacou farbou, presne ako pri premenovaní v Prieskumníkovi súborov. Tie isté kliknutia a stlačenia klávesov teraz potvrdia presun alebo premenovanie cez `fileManager.renameFile` v Obsidiane, takže všetky odkazy na poznámku ju nasledujú.

Počas premenovania:

- Aktuálny názov súboru je pripnutý v zozname každého priečinka, takže presunúť poznámku bez premenovania je jediné kliknutie.
- Názvy, ktoré sú v cieľovom priečinku už obsadené, sú stlmené, ale stále vybrateľné.
- Vstup sa naživo overuje voči vlastným pravidlám premenovania v Obsidiane — tie isté znakové sady, tie isté hlásenia, tá istá červená nápoveda, akú dostaneš pri premenovaní v strome súborov — takže neprípustný alebo kolidujúci názov sa označí počas písania a nedá sa potvrdiť.
- Kliknutie mimo lišty hlavičky alebo strata zamerania hlavičky ukončí režim premenovania.

## Jeden kláves na obe premenovania

Príkaz na premenovanie (predvolene <kbd>F2</kbd>, alebo to, na čo si ho preradil) **strieda** medzi premenovaním vloženého názvu v Obsidiane a panelom cesty v hlavičke tohto pluginu s vybranou celou cestou. Ak si vložený názov v Obsidiane vypol, panel cesty v hlavičke sa stane jediným cieľom, takže kláves nikdy neostane bez účinku.

Funguje to obalením príkazu `workspace:edit-file-title`, nie zabratím klávesu, takže preradenie klávesovej skratky aj spustenie príkazu z palety fungujú nezmenene.

## Ako sa farbia riadky zoznamu

| Farba | Znamená |
| --- | --- |
| **Fialová** | Poznámka (`.md`, `.markdown`) — to, čo Obsidian otvorí ako poznámku, vybrané z priečinka so zmiešaným obsahom |
| **Oranžová** | Textový typ, pre ktorý Obsidian nemá zobrazenie; pozri [varovné farby](#dve-varovné-farby) |
| **Stlmená** | Mimo tvojho trezora, takže vlastné spracovanie trezora neplatí |
| **Modrá** | Len v režime premenovania/presunu: položka *ponechať tento názov* — cieľ, a nie niečo, čo existuje, takže je vybraná spomedzi názvov súborov, medzi ktorými sedí |
| **Sivá** | Len v režime premenovania/presunu: názov je obsadený. Stále vybrateľný — výberom sa vyplní pole, kde overenie označí kolíziu |

## Pravidlá viditeľnosti

- Súbory s nepodporovanými príponami sa v zoznamoch objavia, len ak je nastavenie **Rozpoznávať všetky typy súborov** v Obsidiane zapnuté.
- Zoznam zobrazí najviac 100 položiek — je to vlastný limit Obsidianu. Keď ich má priečinok viac, posledný riadok povie, koľko ich vypadlo; píš ďalej, aby si zoznam zúžil.
- Skryté súbory a priečinky sa objavia, len ak je nastavenie **Zobraziť skryté súbory** tohto pluginu zapnuté.
- **Ochrana pred prepísaním funguje rovnako bez ohľadu na viditeľnosť** — skrytý súbor ti stále bráni prepísať ho.

## Ťahák

| Chceš… | Urob toto |
| --- | --- |
| Otvoriť priečinok (jeho poznámku alebo ho zobraziť) | Klikni na oddeľovač **za** tým priečinkom |
| Vymeniť priečinok za súrodenca | Klikni na názov toho priečinka, potom píš alebo vyber |
| Premenovať alebo presmerovať poznámku | Klikni na názov poznámky — aj s príponou |
| Prehliadať obsah priečinka | Klikni na názov toho priečinka; zoznam vypíše jeho rodiča, takže klikni na priečinok **pod** tým, ktorý chceš |
| Prepísať priečinok a všetko pod ním | **Dvojklik** na názov toho priečinka, potom píš |
| Upraviť cestu od priečinka nadol | Klikni na názov toho priečinka, potom <kbd>End</kbd> alebo <kbd>→</kbd> na zrušenie výberu |
| Skočiť na súbor napísaním jeho cesty | Klikni na názov súboru alebo prázdne miesto, píš, <kbd>Enter</kbd> |
| Otvoriť súbor radšej v novej karte | <kbd>Ctrl</kbd> pri výbere alebo <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| Skopírovať poznámku niekam namiesto presunu | Ceruzka, potom <kbd>Ctrl</kbd> pri výbere alebo potvrdení cieľa |
| Vytvoriť poznámku na ceste, ktorá neexistuje | Napíš cestu, <kbd>Enter</kbd>, potvrď otázku |
| Zostúpiť o úroveň počas písania | Napíš `/` |
| Vystúpiť o úroveň počas písania | <kbd>Backspace</kbd> v prázdnom poli |
| Presunúť alebo premenovať otvorenú poznámku | Klikni na ceruzku, potom prehliadaj alebo píš ako vyššie |
| Presunúť bez premenovania | Ceruzka → klikni do cieľového priečinka → vyber pripnutý aktuálny názov súboru |
| Premenovať na mieste | Dvakrát <kbd>F2</kbd> (prvé stlačenie ide na vložený názov, druhé na hlavičku) |
| Skočiť do iného trezora, domov alebo na jednotku | Klikni na názov trezora |
| Otvoriť súbor mimo trezora | Názov trezora → vyber miesto → prehliadaj → vyber súbor (len na čítanie až do *Upraviť ako text*) |
| Zrušiť čokoľvek | <kbd>Esc</kbd> alebo klikni mimo lišty hlavičky |

## Nastavenia

| Nastavenie | Možnosti | Predvolené | Čo robí |
| --- | --- | --- | --- |
| **Zarovnanie** | Vľavo / Na stred / Vpravo | Vľavo | Kde cesta sedí v riadku hlavičky. *Na stred* zodpovedá klasickému vzhľadu Obsidianu. |
| **Oddeľovač** | Ľubovoľný znak | `/` | Oddeľovač kreslený medzi segmentmi. Pred textovým poľom sedí šesť predvolieb na jedno kliknutie (`/ > ▸ › \ •`). |
| **Zobraziť názov trezora** | Zap. / Vyp. | Zap. | Či je samotný trezor prvým segmentom cesty. Po vypnutí sa z toho segmentu stane ikona 🏠, namiesto aby zmizol, takže cesta stále začína na klikateľnom mieste. |
| **Názov priečinka otvára zoznam** | Zap. / Vyp. | Zap. | Vymení, čo robia názov priečinka a oddeľovač za ním — pozri [tabuľku vyššie](#panel-cesty). S [Folder notes](obsidian://show-plugin?id=folder-notes) oddeľovač otvára poznámky priečinkov. V režime premenovania/presunu neplatí nikdy. |
| **Zobraziť skryté súbory** | Zap. / Vyp. | Vyp. | Či sú skryté súbory a priečinky v zoznamoch vypísané. Ochrana pred prepísaním platí tak či tak. |
| **Prístup k externým súborom** | Zap. / Vyp. | **Vyp.** | Či názov trezora otvára zoznam umiestnení. Po vypnutí sa nič v plugine nikdy nepozrie za tento trezor. |

## Výmena ikon

Lure kreslí tri ikony: ikonu koreňa trezora (keď je **Zobraziť názov trezora** vypnuté), prepínač premenovania/presunu a visiaci zámok, ktorý stráži zápis mimo trezora. Všetky sa dajú vymeniť z témy alebo z útržku CSS — nastav náhradný znak a skry pribalený v jedinom pravidle:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* Visiaci zámok má dva stavy; `.is-active` je otvorený. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}

.lure-unlock-btn.is-active {
	--lure-icon-glyph: "🔓";
}
```

`--lure-icon-glyph` prijme čokoľvek, čo je platné v CSS `content`, takže `url(...)` funguje pre obrázok rovnako dobre ako textový znak či emodži. Nechaj `--lure-icon-svg` tak, ak si chceš ponechať ikonu Lucide a svoj znak nakresliť vedľa nej.
