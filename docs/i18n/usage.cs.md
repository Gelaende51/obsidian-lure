<!-- Překlad docs/usage.md — stav: commit 94b1372.
     Strojový překlad (Claude Sonnet 5), nezkontrolovaný rodilými mluvčími.
     Popisky pluginu pocházejí z src/lang/translations.ts a popisky Obsidianu
     z řetězců, které dodává sama aplikace, takže odpovídají tomu, co vidíš
     na obrazovce. -->

[English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · **Čeština** · [Dansk](usage.da.md) · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · [Bahasa Indonesia](usage.id.md) · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · [Norsk](usage.no.md) · [Polski](usage.pl.md) · [Português](usage.pt.md) · [Português (Brasil)](usage.pt-BR.md) · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

# Použití

[← zpět na README](README.cs.md)

## Řádek cesty

Úplná cesta poznámky uvnitř trezoru nahrazuje holý název souboru v záhlaví pohledu — v pruhu pod řadou karet, tom samém, kde jsou tlačítka zpět a vpřed.

V řádku jsou klikatelné dvě věci a **Název složky otevírá seznam** rozhoduje, co která dělá:

| | Název složky | Oddělovač za ním |
| --- | --- | --- |
| **Zapnuto** (výchozí) | Vybere tu složku k úpravě | Otevře složku |
| **Vypnuto** | Otevře složku | Sestoupí do té složky |

„Otevře složku“ znamená to, co ten klik dělá v holém Obsidianu. Pokud tam nic neposlouchá, složka se zobrazí v postranním panelu Průzkumníka souborů — zvýrazněná a rozbalená, aby byl vidět obsah.

Tam, kde je poznámka té složky ta, kterou už čteš, klik místo toho zobrazí složku — není co otevírat, co by na obrazovce ještě nebylo, a to je to, co druhé stisknutí vždy znamenalo.

S nainstalovaným pluginem [Folder notes](obsidian://show-plugin?id=folder-notes) stejný klik místo toho otevře poznámku té složky, **v jakékoli hloubce**: poznámka se zde určuje podle konvence toho pluginu, místo aby se to nechalo na něm. Ten plugin rozpoznává jen složky, které sám označil, což na cestě hlubší než jedna složka není žádná z nich, takže stisknutí, které otevřelo poznámku složky nejvyšší úrovně, hlouběji dřív nedělalo nic dál. Ostatní dva pluginy pro poznámky složek nezveřejňují žádnou konvenci ke čtení a nikdy si řádek nenárokují, takže s nimi oddělovač zobrazí složku jako vždy. Je to jediný plugin pro poznámky složek, u kterého bylo zjištěno, že si nárokuje cestu v záhlaví; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) a [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) spravují poznámky složek, ale neposlouchají klik na řádku cesty, takže s nimi oddělovač zobrazí složku jako obvykle. Viz [kompatibilita](../compatibility.md#verified-against).

Oddělovač je **podtržený jen tehdy, když složka před ním skutečně má poznámku složky**, takže podtržení je slib, že tam je co otevřít — v každé hloubce, když běží [Folder notes](obsidian://show-plugin?id=folder-notes), protože poznámka se zde určuje místo toho, aby se to nechalo na označení tím pluginem. Tam, kde neběží ten plugin, nic není podtržené a nic se neotevírá: oddělovač zobrazuje, stejně jako bez jakéhokoli pluginu pro poznámky složek. Každý oddělovač zůstává klikatelný v obou případech — ten bez podtržení zobrazí a rozbalí svou složku v postranním panelu, což pořád signalizuje kurzor ve tvaru ukazatele. Podtržení se zároveň přesune pryč z názvu složky: se zapnutou výměnou název otevírá seznam, takže označit ho jako odkaz na poznámku by byla lež.

**Režim přejmenování/přesunu má přednost před oběma**, ať nastavení říká cokoli: dokud čeká přesun, nic v řádku neotevírá složku, protože otevření by přesun zahodilo. Názvy složek se vybírají k úpravě a oddělovače sestupují — obojí je způsob, jak zvolit cíl — a podtržení zmizí, aby ukázalo, že otevírání je pozastaveno.

**Kořen trezoru** je jediný segment, který není segmentem cesty. Nemá nadřazenou složku, ze které by šlo vypsat sousedy, takže místo toho otevírá [seznam umístění](#procházení-mimo-trezor) — tvé ostatní trezory, domovskou složku, kořen souborového systému a připojené jednotky.

## Vlastní oddělovač trezoru

Oddělovač hned za názvem trezoru zastupuje samotný trezor, ne
složku, takže dělá to, co žádný jiný oddělovač nedokáže:

| | První klik | Další klik |
| --- | --- | --- |
| **S pluginem pro úvodní stránku** (stránka, která tě uvítá při otevření Obsidianu) | Otevře tu stránku v tomto panelu | Sbalí strom souborů |
| **Bez něj** | Sbalí strom souborů | Vrátí přesně to, co bylo otevřené |

Obyčejné kliky, ne dvojklik: jakmile je stránka otevřená, oddělovač už
nemá co otevírat, takže další stisknutí je sbalení — ať si na něj necháš
jakkoli dlouho.

Je **podtržený**, když existuje úvodní stránka k otevření, což je stejný
slib jako u oddělovače složky: něco tam je. Sbalení je přepínač —
další stisknutí obnoví složky, které byly otevřené, a jen ty, takže
strom, který sis uspořádal, se neztratí kvůli pohledu na něco jiného.

## Panel bez souboru

Prázdná karta, graf a cokoli dalšího, co nepojmenovává žádný soubor, dostane
vlastní řádek: trezor, pak jeden segment říkající, co panel obsahuje.

```
muj-trezor / :blank      nová karta
muj-trezor / :graph      graf, lokální nebo globální
muj-trezor / :<type>     cokoli jiného bez souboru
```

**Vlastní seznam kořene trezoru** nabízí i tyto stránky, pod složkami a
poznámkami, které v něm skutečně jsou: vyber tam `:graph` nebo `:search` a panel
otevře ten pohled, přesně jako výběr poznámky otevře poznámku. To, jaké stránky
existují, se čte z Obsidianu, místo aby to bylo zapsáno zde — každý pohled, který
neexistuje proto, aby zobrazoval soubor, takže plugin, který nějaký registruje
(domovská karta, kalendář), se objeví, aniž by o něm tento plugin cokoli věděl.
Pohledy, které potřebují soubor — Markdown, PDF, obrázky, plátna, báze — nejsou
nabízeny: není pro ně co zobrazit.

Dvojtečka je to podstatné — žádný soubor ani složka se nemůže jmenovat `:graph`,
takže řádek nelze zaměnit za cestu, kterou by šlo otevřít. Popisek pochází z typu
pohledu, ne z vlastního znění Obsidianu, takže se čte stejně bez ohledu na jazyk
rozhraní, a koncové `-view` se odstraní: plugin domovské karty zaregistruje svůj
pohled jako `home-launcher-view` a řádek říká `:home-launcher`.

Klik na prázdné místo nebo na samotný popisek **otevře pole v kořeni
trezoru**: napiš cestu a <kbd>Enter</kbd> ji otevře přímo v tomto panelu, se
stejným doplňováním, stejným seznamem a stejným červeným polem nabízejícím
vytvořit to, co tam ještě není. Prázdná karta je dobré místo napsat, kam chceš
jít, k čemu je určená.

Popisek je jen popisek a nic víc: žádný seznam, žádné přetažení, žádné
přejmenování. Panely v postranních panelech se nechávají zcela na pokoji —
panel zpětných odkazů si podrží název, který mu dá Obsidian.

Plátna, PDF, obrázky a báze nic z tohohle nepotřebují. Jsou to soubory, takže
dostanou obyčejný řádek cesty.

## Klik na segment: vyměň ho za sousední

Klik na název složky vybere **název té složky** v textovém poli a otevře seznam složky **o úroveň výš** — její nadřazené. Psaní nebo výběr položky vymění tuto složku za sousední a nechá nedotčené vše pod ní, takže `Projekty/2026/Start.md` → klik na `2026` → vyber `2025` dá `Projekty/2025/Start.md`.

Klik na **název poznámky** funguje stejně vůči vlastní složce a vybere název **bez přípony** — přejmenování je běžná úprava a psaní přímo přes výběr, který zahrnoval `.md`, dřív omylem měnilo typ souboru. Přípona zůstává na dosah o jedno stisknutí klávesy dál: <kbd>→</kbd> se k ní dostane a dvojklik, který rozšíří na celý řádek, vezme všechno.

Klik na složku už jeden segment vybral, takže **další klik** rozšíří výběr na celý řádek — tu složku *a* všechno pod ní — a to, co pak napíšeš, nahradí zbytek cesty naráz. Funguje stejně v navigaci i v režimu přejmenování/přesunu.

Platí to jen jako pokračování kliku, který pole otevřel. Jakmile pole jednou použiješ, chová se jako každé jiné textové pole: klik umístí kurzor, dvojklik vezme slovo, trojklik vezme řádek.

V obou případech zůstává zbytek cesty viditelný kolem pole, jako štítky před ním a jako nevybraný text za ním, takže úplná cesta ze záhlaví nikdy nezmizí. Napsáním výběr nahradíš, nebo stiskni <kbd>→</kbd>, aby zůstal a upravoval jsi od té chvíle dál. Seznam vypisuje celou složku bez ohledu na to, co je předvyplněné; filtrovat začne, teprve až opravdu začneš psát.

## Sestup oddělovačem

Klik na oddělovač (s vypnutým **Název složky otevírá seznam**) sestoupí do složky před ním: seznam ukáže obsah *té* složky a zbytek cesty se otevře vybraný v poli. Výběr složky ji připojí ke stopě cesty a hned otevře další seznam, takže se dá sestupovat stromem po kliknutích, aniž bys opustil řádek záhlaví.

## Seznam se otevírá tam, kde jsi

Seznam se otevírá na položce, na které stojíš — na poznámce, ke které tento
řádek patří, nebo tam, kde klik na složku vypsal její nadřazenou, na té
složce — místo na prvním řádku. Ve složce s dvěma sty poznámkami je první
řádek daleko od tebe.

**Kolečko myši nad názvem otevře jeho seznam a prochází ho.** První otočení
otevře stejný seznam, jaký otevře stisknutí názvu, a každé další otočení posune
zvýraznění o řádek a vloží do pole přesně to, na co ukazuješ, stejně jako to
dělají šipky — takže lze najít a vzít souseda bez klávesnice. Otočení na
kterémkoli konci ti vrátí tvůj text zpátky. Řádek s delší cestou, než kam
sahá panel, na kolečko odpoví posunem do strany místo toho — to je čtení, které
vyhrává, dokud platí.

Seznam je **tak vysoký, jak to okno dovolí**. Obsidian omezuje své seznamy
návrhů na 300 pixelů bez ohledu na to, co je pod nimi; tenhle jde až ke spodku
okna, zastaví se pár pixelů před okrajem, a rolovat začne, teprve když
složka obsahuje víc položek, než se vejde. Je **nejvýše tak široký jako
řádek cesty**: název, který se nevejde, se zkrátí stejně, jako se zkracuje v
řádku, a ukáže se celý, když na něj ukážeš.

Pohyb v seznamu **vloží to, na co ukazuješ, do pole**, ať už šipkou nebo
najetím myší — místo segmentu, který jsi upravoval, se zbytkem cesty
ponechaným tak, jak stál — takže řádek, na kterém stojíš, je zároveň cesta,
kterou bys dostal.

Zbytek cesty se zobrazí **jen do té míry, do jaké existuje pod tím, na co
ukazuješ**. Když stojíš v jedné složce a za upravovaným segmentem je
`2026/poznamka.md`, ukázání na složku, která má `2026` s `poznamka.md`
uvnitř, ukáže všechno; ta, co má `2026` a žádnou poznámku, ukáže `2026`; ta,
co nemá ani jedno, neukáže za názvem vůbec nic, a stejně tak soubor, protože
pod ním nic nežije. To, **co jsi napsal**, si podrží celou cestu, dokud to
píšeš, ať už toho tam zatím je jakkoli málo — napůl napsaný název není
rozhodnutí. Nastavení názvu je rozhodnutí a to, co se z něj nedá dosáhnout,
se v tom bodě usekne; složky, které vytváříš, jsou ty, co napíšeš *za* ním,
což je tam, kde je vytvoří <kbd>Enter</kbd>.
Text, který jsi napsal, se uchová: přesun **mimo kterýkoli konec seznamu** —
nahoru pryč od první položky, nebo dolů pryč od poslední — ho pustí a vrátí
zpátky tvůj text bez ničeho zvýrazněného. Pole je zastávka na kruhu jako
kterákoli položka, takže kolo jím prochází místo skoku z posledního řádku na
první, a další stisknutí odtamtud pokračuje na druhý konec.

Sundání **ukazatele ze seznamu** taky vrátí zpátky tvůj text — a vrátí
zvýraznění tomu, co ho mělo předtím, než myš přišla: položce, ke které jsi
se dostal šipkami, znovu zobrazené v poli, nebo té, na které se seznam
otevřel, protože je to tam, kde jsi. Najíždění myší je způsob dívání se, ne
volby, takže přejetí ukazatele přes seznam tě nic nestojí.

Samotný seznam se při pohybu skrz něj nemění — pořád filtruje podle toho, co
jsi napsal, ne podle toho, co bylo předvedeno do pole — takže položka pod
tebou se ti nikdy neposune zpod dalšího stisknutí. Psaní nahradí náhled a
filtruje jako obvykle.

**Filtruje podle segmentu, který upravuješ**, ne podle celého obsahu pole.
Klik na složku nechá zbytek cesty v poli za názvem, který měníš, takže
filtrování podle celku by hledalo potomka jménem `2026/Start.md` a nenašlo
by nic — seznam by se zavřel na první stisknutí klávesy, ať bys napsal
cokoli. **Přípona je z toho taky vynechaná**, dokud je kurzor před tečkou:
klik na název poznámky vybere kmen a nechá `.md` za ním, takže napsání
jednoho písmene změní pole na `a.md`, a to není to, co hledáš. Umísti kurzor
za tečku a přípona se počítá jako cokoli jiného. Název, který skutečně
neodpovídá ničemu, seznam přesto zavře, protože prázdný seznam je poctivá
odpověď.

Náhled **vymění jen ten jeden segment a zbytek cesty nechá na pokoji**:
ukázání na složku se ptá, co kdyby tenhle krok byl tamten, ne zahodit cestu.
Sundání ze seznamu obnoví text *i* výběr, který jsi měl, takže další
stisknutí klávesy nahradí to, co mělo nahradit, než ses podíval.

## Položky seznamu jsou skutečné řádky správce souborů

Každý soubor a složka v seznamu se chová jako svůj řádek v Průzkumníku souborů:

- **Klik pravým tlačítkem** vyvolá stejnou kontextovou nabídku, jakou dává Průzkumník souborů, položku po položce — včetně těch, které přidávají jiné pluginy. Složka nabízí *Nová poznámka*, *Nová složka*, *Nové plátno*, *Nová báze*, *Vytvořit kopii*, *Přesunout složku do…*, *Hledat ve složce*, *Kopírovat cestu*, *Zobrazit v systémovém průzkumníku*, *Přejmenovat…* a *Smazat*; soubor nabízí svůj vlastní ekvivalent, včetně *Otevřít ve výchozí aplikaci*.
- **Přetažením** položky kamkoli, kde Obsidian přijímá soubor: do editoru pro vložení odkazu, na složku v Průzkumníku souborů pro přesun, na pruh karet pro otevření.

Text nabídek pochází z vlastních překladů Obsidianu, takže v každém jazyce ladí se zbytkem aplikace.

## Psaní cesty

- Kliknutí na **prázdné místo** před nebo za řádkem cesty otevře textové pole nad celou cestou *a zároveň ukáže poznámku v File Exploreru*, takže strom následuje panel bez druhého gesta. **Počítá tvá stisknutí**: jedno vybere cestu bez přípony, dvě ji vyberou i s ní, tři vyberou cestu tak, jak ji zná stroj. Kliknutí na **název souboru** počítá stejně, ale začíná o stupeň níž, na samotném názvu: jedno ho vybere bez přípony, dvě s ní, a tři rozšíří výběr na celou cestu *od kořenové složky trezoru* — na podobu, jakou chce odkaz nebo hledání, spíš než tu, kterou zná stroj. Čtvrté stisknutí dosáhne i na ni.
- **Počítání patří k běhu, který pole otevřel.** Jakmile vyprší — uděláš pauzu, něco napíšeš nebo jednou klikneš někam do textu — pole je textové pole jako každé jiné, a dvojklik v něm vybere slovo pod ukazatelem stejně jako kdekoli jinde. Přepiš vybrané, nebo uprav na místě. (Kliknutí přímo na název souboru vybere jen jeho jméno; viz výše.) Klik pravým tlačítkem na totéž místo **kopíruje** stejné tři možnosti při dvou, třech a čtyřech stisknutích — jedno tlačítko je ukáže, druhé je vezme. **Jedno** stisknutí pravého tlačítka otevře cestu s celým jejím obsahem vybraným a nabídne, co se s ní dá udělat: vyjmout, kopírovat, vložit, vybrat vše, slovy samotného Obsidianu.
- **Kliknutí prostředním tlačítkem na prázdné místo** přepíše cestu vloženým textem: pole se otevře nad celou cestou *od kořene trezoru*, takže schránka nahradí úplně vše, a to, co přistane, je vybrané. <kbd>Enter</kbd> pak tam přejde.
- **<kbd>Ctrl</kbd>+klik na prázdné místo** otevře tuto poznámku znovu ve vlastní kartě, zvýrazněnou v File Exploreru, aby si druhou kartu nespletl s první. Na **názvu trezoru** otevře <kbd>Ctrl</kbd>+klik nebo klik prostředním tlačítkem kartu s prázdným obsahem, stojící u kořene trezoru se seznamem už zobrazeným — místo, odkud napsat cestu od začátku.
- Psaní, zatímco je zobrazený řádek cesty, převede poslední segment na malé pole s živým doplňováním omezeným na aktuální složku.
- **Cestu lze napsat i od kořene souborového systému.** `/` na začátku prázdného pole otevře kořen místo dokončení stupně, každé lomítko za ním patří k němu a `~` je tvá domovská složka. Zatímco pole obsahuje takovou cestu, seznam zobrazuje stroj, ne trezor, a úvodní segment řádku ustoupí stranou — to, co je v poli, začíná u kořene a dává to najevo. Když je *Přístup k externím souborům* vypnutý, seznam zůstane prázdný, protože <kbd>Enter</kbd> by cestu stejně odmítl.
- **Stránku lze napsat, ne jen vybrat.** `:graph`, `:search`, nebo cokoli, co registrují tvé pluginy — štítky, které nabízí [výpis kořene trezoru](#panel-bez-souboru). Napsání dvojtečky kdekoli je vyvolá, protože žádný název nesmí dvojtečku obsahovat, a <kbd>Enter</kbd> otevře toto zobrazení v tomto panelu. `:graph` napsané **uvnitř složky** otevře graf té složky — graf filtrovaný na `path:"ta/slozka"` ve vlastním vyhledávacím poli, jako by tam bylo napsané; u kořene trezoru je to celý graf. <kbd>Tab</kbd> dokončí název stejně jako u složky — a vezme s sebou všechno ostatní, co pole obsahovalo, protože stránka není v žádné složce a nic nežije pod ní. Kliknutí na štítek takové stránky otevře pole už s ní.
- **To, co by napsal <kbd>Tab</kbd>, se nabízí za psaní.** Tam, kde se každé dítě začínající tím, co jsi napsal, ještě chvíli shoduje, se ta shoda objeví za kurzorem, vybraná; tam, kde se přestávají shodovat, se objeví krok k prvnímu z nich — nebo k řádku, na který jsi šipkami přešel, protože právě k němu by <kbd>Tab</kbd> zamířil. Přepsání názvu ponechá jeho příponu stát a nabídne se před ní, a složka, do které jsi právě vstoupil, nabídne svůj první krok, takže neexistuje stav, kdy se nic nenabízí a <kbd>Tab</kbd> přesto něco napíše. Napiš ta písmena a spolknou se jedno po druhém; napiš cokoli jiného a nabídka zmizí. <kbd>Tab</kbd> nebo <kbd>End</kbd> ji vezme celou, <kbd>→</kbd> vezme jedno její písmeno, <kbd>Backspace</kbd> ji vrátí zpět, aniž by se dotkl písmene, které jsi napsal, a nic se nenabízí znovu, dokud nezačneš psát — takže vždycky existuje cesta ven z názvu, který jsi nechtěl. Po stisknutí <kbd>Tab</kbd> se další krok nabídne hned, stejně jako po napsaném písmenu. To, co seznam zobrazuje, je filtrováno tím, co jsi napsal **ty**, nikdy tím, co bylo nabídnuto.
- **Nabídky ignorují velikost písmen.** `sch` nabídne `Schemes`, napsané tak, jak je název hláskovaný; vzetí nabídky zpět vrátí tvá vlastní písmena tak, jak jsi je napsal. Tam, kde existuje `Test` i `test`, se nabídne to, které je napsané stejně jako jsi psal ty.
- V poli je nabízená část prostě **vybraná**. Seznam je místo, kde je vypsaná: každý řádek ukazuje tu jeho část, která **odpovídá tomu, co jsi napsal, tučně**, ať už se shoduje kdekoli v názvu — `kick` najde `Weekly kickoff` a dá to najevo. **Názvy, které začínají tím, co jsi napsal, jsou první**, před těmi, které to jen obsahují, a jsou označené čárou na okraji: **modrou**, pokud sdílejí víc, než jsi napsal, takže <kbd>Tab</kbd> má k nim všem co dodat, a **zelenou** na větvi, kterou se nabídka vydá tam, kde se rozdělují — `te` u `test1`, `test2`, `text1` a `text2` nabídne `te`+`st`, takže oba řádky `test` jsou zelené a oba řádky `text` mají prostou čáru. Každý z nich **podtrhuje krok, který by k němu udělal <kbd>Tab</kbd>**, nejen ten, který je nabízený, a podtržení sleduje nabídku, jak se mění.
- **Psaní opouští zvýrazněný řádek.** Seznam se otevře na položce, na které stojíš, ale ve chvíli, kdy začneš psát, jde o něco jiného, a zvýraznění, které tam nikdo nedal, by se četlo jako už učiněná volba.
- Nabídka je vždy jen text před tebou: písmena, která jsi napsal, zůstávají napsaná tak, jak jsi je zadal, dokud píšeš, a přijetí nabídky přepíše název tak, jak ho hláskuje složka, protože cesta se musí shodovat s diskem. `sk` + <kbd>Tab</kbd> dosáhne na `Skyline`, ne na `skyline`.
- **Pole má barvu toho, co pojmenovává**, stejnou barvu jako jeho řádek v seznamu: fialovou pro poznámku, včetně vlastní poznámky složky, oranžovou pro cokoli, co poznámka není, modrou pro poznámku, na které jsi. Řádek, ze kterého pole bere barvu, je ten pojmenovaný přesně tak, jak jsi napsal, nebo pokud takový není, zvýrazněný řádek, nebo pokud ani ten ne, první, ke kterému tvé psaní ještě vede.
- **Pole zčervená, jakmile ničemu neodpovídá to, co v něm je** — žádný soubor, žádná složka, a žádný řádek seznamu k němu už nevede. Odtud <kbd>Enter</kbd> vytvoří to, co je v poli, místo aby to otevřel, a červená to dá najevo dřív, než potvrdíš. Nikdy se neobjeví u webové adresy, která není místem na tomto stroji, kde by se dalo hledat. Barvu má **celé** pole, ne jen ta chybějící část: textové pole nemůže obarvit jen půlku vlastního obsahu. V režimu přesunu/přejmenování si pole ponechává vlastní červenou pro název, který je nepřípustný — tam je smyslem právě to, že název ničemu neodpovídá. To, že je název **už obsazený**, se řeší až při potvrzení, dialogem, který se zeptá, co se má stát se souborem, který stojí v cestě — viz [Obsazený název](#jméno-které-je-zabrané): každý název napsaný směrem k `Poznámky.md` prochází přes názvy, které mohou být samostatnými soubory, takže označovat to po písmenech by varovalo před názvem, na který se ještě nikdo neptal.
- `/` potvrdí segment, který právě píšeš, a sestoupí do něj, přičemž ponechá vše, co je za ním — totéž dělá <kbd>Tab</kbd>, když vstupuje dovnitř.
- <kbd>Backspace</kbd> v prázdném poli vystoupí zpět do nadřazené složky a znovu otevře její název s kurzorem na konci. Totéž udělá <kbd>Backspace</kbd> před příponou, která zůstala sama — pole obsahující jen `.md` nic nepojmenovává — a osamocená přípona odejde s ním.
- **Kliknutí na složku, zatímco je pole otevřené, ho rozšíří na celou cestu za tou složkou**, s vlastním názvem složky vybraným — totéž, co by udělalo kliknutí na ni z řádku, a všechno, co pole obsahovalo, zůstává zachováno. To, co je v poli, je konec řádku, dokud je otevřené, takže kliknutí na složku výš znovu vrátí cestu, kterou relace prošla, ne tu, u které poznámka začínala.
- **Šipka od začátku pole vezme dovnitř složku před ním**, jako by celá cesta byla jeden řádek textu. S kurzorem úplně na začátku vezme <kbd>←</kbd> tuto složku do pole a přistane na konci jejího názvu, <kbd>Ctrl</kbd>+<kbd>←</kbd> přistane na jeho začátku a <kbd>Home</kbd> vezme dovnitř všechny složky až ke kořeni trezoru — nebo až k místu, které jsi vybral mimo trezor — naráz. Podrž <kbd>Shift</kbd> a výběr se natáhne přes to, co přišlo dovnitř. Na macOS je skok po slovech <kbd>Option</kbd>+<kbd>←</kbd> a <kbd>Cmd</kbd>+<kbd>←</kbd> je <kbd>Home</kbd>. Kdekoli jinde než na začátku jsou to obyčejné textové klávesy. **Zatímco je seznam zobrazený, patří mu <kbd>Home</kbd>, <kbd>End</kbd>, <kbd>PgUp</kbd> a <kbd>PgDn</kbd>** — první řádek, poslední řádek, o stránku výš, o stránku níž, přičemž stránka je to, co seznam zobrazuje, a zvýrazněný řádek si drží místo na obrazovce — a dostanou se k textu, až jakmile se zavře; <kbd>Shift</kbd>+<kbd>Home</kbd> vezme dovnitř všechny složky i s otevřeným seznamem.
- **Seznam sleduje kurzor.** Vyber jinou část cesty — přetáhni přes ni, klikni do ní, nebo se k ní dostaň šipkami — a seznam zobrazí děti *té* složky, ne té, na které se pole otevřelo. Složka se počítá z čipů plus toho, co z pole leží před kurzorem, takže kliknutí do `Poznámky.md` v poli obsahujícím `2026/Poznámky.md` zobrazí to, co je v `2026`. Ukázání na řádek ho zapíše do segmentu, ve kterém je kurzor, a sejmutí ukazatele ze seznamu ti vrátí tvůj text i tvůj výběr přesně tak, jak byly.
- **Vytažení výběru z pole** a puštění někde jinde ho nezavře. Stisknutí, které začíná v poli, patří k úpravě bez ohledu na to, jak daleko doputuje; jen stisknutí, které *začíná* mimo, je klik pryč.
- <kbd>Enter</kbd> potvrdí — a když pole nepojmenovává vůbec nic, jako v prázdné složce, kde nikdy nebylo co doplnit, řekne *Nebyl vybrán žádný soubor* a zůstane otevřené místo aby se zavřelo, jako by něco bylo vybráno. <kbd>Esc</kbd> nebo klik jinam zruší úpravu zpět na skutečnou cestu souboru. Jedno stisknutí <kbd>Esc</kbd> stačí: zavře seznam, opustí pole a vrátí fokus poznámce, místo aby vyžadovalo jedno stisknutí na každou vrstvu.

Pole nemá žádný rám — ani rámeček, ani okraj — takže se čte jako samotný text cesty a samo roste, jak píšeš.

## Každá část řádku, tlačítko po tlačítku

Celý řádek na jeden pohled. Sloupec pravého kliknutí ukazuje, co dá **jedno**
stisknutí; totéž tlačítko také počítá stisknutí a [jeho vlastní
tabulka](#pravé-tlačítko-jedno-stisknutí-dvě-tři) níže obsahuje druhé, třetí a
čtvrté. Tahle tabulka počítá s tím, že je zapnuté **Název složky otevírá
seznam**, což je výchozí stav — když je vypnuté, název složky a oddělovač si
prohodí první sloupec, jak říká [tabulka nahoře](#řádek-cesty).

| Kam klikáš | Klik | Dvojklik | <kbd>Ctrl</kbd>+klik nebo prostřední tlačítko | Pravé tlačítko | Přetažení něčeho na to |
| --- | --- | --- | --- | --- | --- |
| **Název trezoru** | Otevře seznam míst — další trezory, domovskou složku, kořen souborového systému, připojené disky. Ve výchozím stavu vypnuté; když je vypnuté, místo toho odhalí trezor v File Exploreru | Označí **celou absolutní cestu**. Ten seznam se otevře s cestou už vyplněnou v poli a označenou jen vlastní částí trezoru; druhé stisknutí rozšíří označení na zbytek. Se seznamem vypnutým není co rozšiřovat | Prázdná karta stojící v kořeni trezoru s už zobrazeným seznamem — místo, kam napsat cestu od začátku | Vlastní kontextová nabídka trezoru: co lze udělat s trezorem, který ten segment pojmenovává | **Soubor** se přesune do kořene trezoru. **Text** otevře pole v kořeni, aby dostal jméno poznámky, kterou se má stát |
| **Název složky** | Vybere tu složku k úpravě, obsah jejího rodiče je vypsaný pod ní | Přepíše tu složku a všechno pod ní | Otevře tu složku na nové kartě | Kontextová nabídka té složky — stejná jako z File Exploreru | **Soubor** se přesune do té složky. **Text** tam otevře pole, aby dostal jméno poznámky, kterou se má stát |
| **Oddělovač** | Otevře složku před ním — její poznámku ke složce, pokud běží plugin na poznámky ke složkám a nějaká existuje, jinak ji odhalí a rozbalí v File Exploreru | **Vytvoří poznámku té složky** a přejde na ni, pokud běží plugin na poznámky ke složkám a složka ještě žádnou nemá. Pokud už nějakou má, jde jen o opakování jednoho stisknutí | Poznámka ke složce na nové kartě, pokud existuje; jinak karta stojící v té složce se zobrazeným seznamem | Stejná kontextová nabídka složky jako u jejího názvu — nabídka její poznámky ke složce, pokud nějakou má | Na konec poznámky té složky, pokud nějakou má, jakmile to potvrdíš |
| **Název poznámky** | Otevře název k úpravě — složky zůstanou vedle jako štítky — označeno je všechno kromě přípony | Vezme do označení i příponu | Otevře poznámku na nové kartě | Kontextová nabídka souboru — stejná jako z řádku File Exploreru | Na konec této poznámky, jakmile to potvrdíš |
| **Prázdné místo** | Otevře **celou cestu** k úpravě, označenou až po příponu. Složky se do pole dostanou spolu s ní, což z tohoto gesta dělá přepsání cesty, ne jen jména | Vezme do označení i příponu | <kbd>Ctrl</kbd> otevře tuto poznámku znovu na vlastní kartě, zablikané ve File Exploreru, aby si kopii nikdo nespletl s tou první. Prostřední tlačítko *není* totéž gesto: přepíše cestu | Označí celou cestu a nabídne, co lze s označeným textem udělat | |

**Druhé stisknutí navazuje na první.** Vytvoření poznámky složky sedí na té
části řádku, která tu složku *otevírá* — což je ve výchozím stavu oddělovač a
se zapnutou výměnou název složky — stejný cíl, který podtržení označuje, a
stejný, který o poznámku ke složce žádá už jedno stisknutí. Nabízí se jen
tehdy, když běží plugin na poznámky ke složkám, protože poznámka ke složce je
konvence, ne fakt o souborovém systému, a jen tam, kde ji složka ještě nemá.
Kde žije a jak se jmenuje, se čte z vlastního nastavení pluginu **Folder
notes**, takže trezor, který drží poznámky ke složkám vedle složky, nebo je
nazývá `_index`, dostane právě takovou; samotný soubor je vždy Markdown, což
je to, co vytváří vlastní výchozí příkaz toho pluginu pro vytvoření, a co
najde bez ohledu na to, na jaký typ je trezor nastavený. Režim
přesunu/přejmenování je z toho úplně vyňatý — dokud přesun čeká na potvrzení,
na řádku nic žádnou složku neotvírá.

**Kliknutí na jméno pokračují dál.** Čtyři úrovně jsou stejné čtyři, kterými
prochází klávesa pro přejmenování, ve stejném pořadí: jméno, jméno s příponou,
cesta od trezoru, cesta od kořene systému. Třetí kliknutí tedy dosáhne cesty
trezoru a čtvrté cesty stroje — stejné čtyři věci, které dostaneš od
<kbd>Tab</kbd> za koncem pole, a stejné čtyři, které pravé tlačítko *kopíruje*
místo toho, aby je označovalo.

**Najetí myší** je samostatná odpověď a nikdy nic nemění: zkrácené jméno se po
dobu, co na něj ukazuješ, vrátí v plné podobě, a ikona na začátku řádku
ukazuje, kde trezor žije.

## Pravé tlačítko: jedno stisknutí, dvě, tři

Každý cíl na řádku odpovídá na pravé kliknutí a to, kolikrát stiskneš,
rozhoduje, co dostaneš. Protože ještě může přijít druhé stisknutí, první asi
třetinu vteřiny čeká, než zareaguje — cena za to, že na jedno tlačítko jsou
navěšená tři gesta.

| Kam klikáš | Jednou | Dvakrát | Třikrát |
| --- | --- | --- | --- |
| **Název trezoru** | Kontextová nabídka trezoru: co lze udělat s trezorem, který ten segment pojmenovává — včetně *Otevřít tento trezor*, pokud ten trezor není ten, ve kterém právě jsi | Zkopíruje název trezoru | Zkopíruje, kde trezor je — a čtvrté stisknutí, kde je otevřený soubor |
| **Oddělovač** | Nabídka té složky — nabídka její poznámky ke složce, pokud běží plugin na poznámky ke složkám a složka nějakou má | | |
| **Název složky** | Nabídka té složky | Zkopíruje název složky | Zkopíruje ho i se vším napravo od něj |
| **Název poznámky** | Nabídka souboru — stejná jako z řádku File Exploreru | Zkopíruje jméno | Zkopíruje ho i s příponou |
| **Prázdné místo** | | Zkopíruje cestu od tvé složky trezoru, bez přípony | Totéž, i s ní |

Jedno stisknutí na **názvu trezoru** otevře, co lze udělat s tím, co ten
segment pojmenovává. Pro **trezor, ve kterém jsi**: otevřít ho v novém okně,
spravovat trezory, zkopírovat, kde žije, zkopírovat jeho ID, zobrazit ho ve
tvém správci souborů. Pro **jiný trezor**, dosažitelný přes seznam míst, totéž
mínus nové okno — které by otevřelo *tento* trezor, ne ten — plus jedno, co
nabídne jen trezor, ve kterém nejsi: **Otevřít tento trezor**. Obsidianu je
známý podle svého ID, ne podle názvu své složky, protože dva trezory mohou
sdílet jeden a týž. Pro místo, které vůbec není trezorem — tvou domovskou
složku, připojený disk — není co kopírovat jako ID a není co otevírat, a
nabídka to říká tím, že to nenabízí.

Tohle není Obsidianova vlastní nabídka se třemi tečkami, která patří startovacímu
oknu a nedá se otevřít zevnitř běžícího trezoru — jde o stejné položky znovu
sestavené, ve vlastním znění Obsidianu, převzaté z jeho příkazů, takže přijdou
v tvém jazyce. Tři položky té nabídky tu záměrně **nejsou**: *přejmenovat
trezor*, *přesunout trezor* a *odebrat ze seznamu* působí na vlastní složku
trezoru nebo na Obsidianův seznam trezorů, a dělat to trezoru, ve kterém právě
stojíš — s otevřenými soubory a běžícími sledovači — je způsob, jak trezor
rozbít. Otevři správce trezorů (*Otevřít jiný trezor*) a udělej to tam, kde je
trezor zavřený.

Dvě kopie na **prázdném místě** jsou řádek tak, jak je zapsaný — co chce odkaz
nebo vyhledávání — a ty na **názvu trezoru** jsou cesty, které zná souborový
systém, což je to, co chce cokoli mimo Obsidian. Každé další stisknutí tam
rozšíří, k čemu je kopie dobrá: dvě dají název trezoru, tři kde trezor je,
čtyři kde je otevřený soubor. Obsidian dělá stejný rozdíl ve svých dvou
příkazech, *from vault folder* a *from system root*; ty, které míří ven,
tady sedí na segmentu, který sám leží mimo cestu.

Tohle všechno funguje i mimo trezor, na stejných cílech.

Každé kopírování to oznámí v notifikaci, protože kopírování nenechá na
obrazovce nic, co by ukázalo, že k němu došlo, a špatně spočítané stisknutí by
nemělo vypadat jako úspěšné.

## Modifikátory: otevřít to jinde

Název poznámky a segmenty složek se chovají jako jejich řádky ve File
Exploreru.

| | Na názvu poznámky | Na segmentu složky |
| --- | --- | --- |
| Obyčejný klik | Upravit název | Procházet tu složku |
| <kbd>Ctrl</kbd> / prostřední tlačítko | Otevřít poznámku na nové kartě | Poslat složku na novou kartu |
| <kbd>Ctrl</kbd>+<kbd>Alt</kbd> | Rozdělení | Rozdělení |
| Přetažení | Poznámka, kamkoli, kam Obsidian přijme soubor | Složka, stejně tak — včetně lišty karet |

Složka není něco, co Obsidian dokáže otevřít, takže poslání jedné na kartu
udělá jednu ze dvou věcí: otevře její poznámku ke složce, pokud běží plugin na
poznámky ke složkám a nějaká existuje, nebo otevře prázdnou kartu, jejíž řádek
cesty už stojí v té složce — necháš jen dopsat jméno. Přetažení segmentu
složky na **lištu karet** udělá totéž, na nové kartě tam, kde pustíš —
Obsidianova lišta karet sama o sobě přijímá jen soubory, takže složka
vytažená z File Exploreru je tam pořád odmítnutá.

## Tab: nejdřív doplní jméno, pak cestu, pak rozšíří výběr

<kbd>Tab</kbd> doplňuje jako shell: **stisk rozšíří to, co jsi napsal, tak daleko, kam až se jména ve složce shodují, a zastaví se tam, kde se rozcházejí.** Napiš `Sk` tam, kde takhle začíná jen `Sketches`, a slovo je hotové; napiš `Al` tam, kde takhle začínají `Alpha-one`, `Alpha-two` i `Alpine`, a dostaneš `Alp`, protože další znak je otázka, na kterou umíš odpovědět jen ty.

Stiskni znovu bez psaní a doplňování se vydá k jednomu jménu — k řádku, který má seznam zvýrazněný, nebo k prvnímu — a zastaví se u další nejednoznačnosti toho jména: `Alpha-`, pak `Alpha-one`. Seznam se otevírá tam, kde už jsi, takže ve vlastní složce první stisk míří k poznámce, kterou máš otevřenou, ne k té, co se řadí jako první.

**Stisk za tebe nikdy nevybere mezi jmény.** <kbd>Tab</kbd> vstoupí do složky, jakmile to, co jsi napsal, nechá jen jednoho kandidáta, nebo jakmile jsi napsal celé jméno složky a žádná *jiná složka* ho dál nerozvíjí. Tam, kde nějaká ano — `Schemes` vedle `Schemes2026` — <kbd>Tab</kbd> pokračuje v doplňování k delšímu jménu; <kbd>Enter</kbd> a seznam jsou gesta, která znamenají *tohle*.

**Soubor** takhle složku nikdy nezdrží. Složka vedle poznámky stejného jména je poznámka složky, ne rozcestí v cestě, a <kbd>Tab</kbd> prochází složky — takže do `Projects` s `Projects.md` vedle ní se vstoupí jako do kterékoli jiné.

Z toho plynou dvě menší věci: to, co skončí v poli, je napsané tak, jak to píše složka, takže `sk` se stane `Sketches`; a nahrazuje se jen ta část jména, která se právě píše, takže cesta s dalšími kroky vpravo si je podrží.

Když se ti při psaní nabízí jméno, <kbd>Tab</kbd> **napíše přesně tu nabídku**: nabídka je vždy to, co by stisk napsal, a podtržení i zelená čára v seznamu říkají totéž, takže co vidíš za kurzorem, to dostaneš. Tam, kde se jména přestávají shodovat, je to krok k prvnímu z nich — nebo k řádku, ke kterému jsi došel šipkami, který <kbd>Tab</kbd> vezme spíš než ten vedle něj — takže na ten, který chceš, dojdi šipkami, nebo přepiš rozcestí, než stiskneš. Jen tam, kde nabídka nechává *jedno* jméno, tentýž stisk do něj vstoupí.

Dojít ke jménu souboru **je** první příčka — žádný stisk se nespotřebuje na to, aby zaparkoval kurzor na konci jména, které se teprve chystá označit. Odtud se stisky přestávají posouvat po cestě a začínají rozšiřovat, co je označené:

1. jméno
2. jméno s příponou
3. cesta od tvé složky trezoru
4. cesta od kořene systému
5. zpátky na začátek cesty **tak, jak teď stojí** — stojíš tam, kde chůze začala, první segment je označený, připravený k dalšímu procházení

Čtvrté kliknutí se dostane přímo na tu čtvrtou příčku.

Rozšiřování jen **rozšiřuje**. Jméno, které je v poli už celé — doplněné stejnou klávesou, nebo vybrané ze seznamu — je označené celé, místo aby se mu nejdřív vzala přípona zpátky: první příčka je pro jméno, ke kterému chůze právě *dorazila*, kde přípona ještě není předmětem.

Žebřík je tam, kam chůze **dorazí**, ne tam, kde začíná. Klikni na složku uprostřed cesty a pole se otevře na všechno pod ní s označeným jménem té složky; každý <kbd>Tab</kbd> pak vezme **jednu** složku — označí další a zbytek cesty za ní ponechá — a teprve když nezbude nic než jméno souboru, začne rozšiřování:

| stisk | drobky | pole | označeno |
| --- | --- | --- | --- |
| klik na `a` | | `a/b/c/leaf.md` | `a` |
| <kbd>Tab</kbd> | `a` | `b/c/leaf.md` | `b` |
| <kbd>Tab</kbd> | `a › b` | `c/leaf.md` | `c` |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf` — první příčka |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf.md` |

**Jméno, které je zadané, je zadané, ať už jsi ho zadal jakkoli.** Doplnění pomocí
<kbd>Tab</kbd>, potvrzení pomocí `/` i výběr ze seznamu — to všechno nechá
řádek na stejném místě se stejnou cestou, takže stisk po gestu znamená totéž bez
ohledu na to, jak jsi se tam dostal. Výběr složky ze seznamu dřív místo toho pole
vyprázdnil a zahodil cestu, kterou by dosažení té samé složky pomocí <kbd>Tab</kbd> podrželo.

**Cesta, kterou ještě píšeš, jde s tebou celá.** Vstoupit přímo do složky, na které visí zbytek cesty, není tvrzení, že zbytek existuje — je to způsob, jak napsat cestu dopředu, a jmenované složky jsou ty, které <kbd>Enter</kbd> se chystá vytvořit. Takže sestup po `Dokumente/plans/untitled.md` do `Dokumente` podrží `plans/untitled.md` před tebou bez ohledu na to, jestli `plans` už existuje. Totéž platí pro cestu, kterou jsi napsal od nuly: nic z ní nebylo zděděné odnikud, takže se nic nebere zpátky.

**Výměna kroku za jiný je jiný příběh, a pak jde cesta s tebou jen v rozsahu, v jakém tam opravdu je.** Vyměň složku uprostřed cesty za sousední — klikni na `a`, napiš jiné jméno, stiskni <kbd>Tab</kbd> — a všechno pod ní jde s tebou, protože cesta, na které jsi byl, je obvykle většina cesty, kterou chceš. Přežije ale jen to, co tam skutečně existuje, takže pole a vedlejší seznam se nikdy nerozcházejí: to, co ti zůstane před sebou, je cesta, po které bys mohl skutečně jít. Počínaje `a/b/c/leaf.md`, s klikem na `a` a jeho označeným jménem:

| co zadáš | drobky | pole | označeno |
| --- | --- | --- | --- |
| `x`, které nemá vůbec žádné `b` | `x` | | nic nešlo s tebou |
| `y`, které má `b`, ale bez `c` | `y` | `b` | `b` |
| `z`, dvojče `a` až do konce | `z` | `b/c/leaf.md` | `b` |

Složka takhle ponechaná osamocená je pořád složka, do které se dá vstoupit: stisk po ní vstoupí, místo aby začal rozšiřovat výběr přes její jméno.

Na jméno, kterému **nic** ve složce neodpovídá, se odpovídá jinak, protože jím nebylo nic zadáno: stisk označí to, co jsi napsal, připravené k přepsání, místo aby odpověděl něčím jiným.

Celá věc je **smyčka a projít ji nic nestojí**: stisk po poslední příčce vrátí řádek na začátek cesty, i se složkami, připravený jít znovu dokola. Jediné, co z řádku někdy zmizí, je absolutní předpona, při stisku, který ji přestane zobrazovat.

Co se vrátí, je **cesta, kterou jsi vytvořil**, ne ta, ze které jsi vyšel. Rozděl chůzi v polovině — vyber ze seznamu jinou sousední, doplň k jinému jménu — a kolo se uzavře tam, kde skutečně jsi; čtyři příčky před ním popisují tutéž cestu, a tahle bývala tou zvláštní příčkou, co popisovala minulost.

<kbd>Shift</kbd>+<kbd>Tab</kbd> uzavírá tentýž kruh opačným směrem: na začátku cesty, kdy už není co vracet a není kam výš, další stisk skočí na **vzdálenou** příčku — cestu od kořene systému — a odtud pokračuje v zužování. Ani jeden směr nekončí slepě.

Nepromrhá stisk ani na příčku, kterou už ukázal. Pod poslední příčkou — jménem bez přípony — žebřík končí, a *tentýž stisk* opustí složku: cesta od kořene systému, cesta od tvého trezoru, jméno, jméno bez přípony, pak složka, každé o jeden krok.

Žádný stisk se také nespotřebuje na příčku, která nic nemění: kliknutí na jméno poznámky ji už ukazuje bez přípony, což je to, co ukazuje první příčka, takže odtud <kbd>Tab</kbd> začíná druhou.

Každá příčka mění to, co je *v* poli, ne jen to, co je zvýrazněné — výběr musí ležet přesně nad textem, který pojmenovává, jinak by <kbd>Enter</kbd> potvrdil něco jiného, než co vidíš jako vybrané. Žebřík patří jednomu editačnímu sezení: klikni jinam, nebo cokoli napiš, a další <kbd>Tab</kbd> zase doplňuje jméno.

### <kbd>Shift</kbd>+<kbd>Tab</kbd>: tatáž cesta pozpátku

<kbd>Shift</kbd>+<kbd>Tab</kbd> bere zpátky jeden krok za stiskem, v pořadí, v jakém byly stisky udělané: výběr se zužuje o jednu příčku, každé doplnění se vrátí a z každé složky se vystoupí — její jméno se vrátí do pole, abys ho mohl upravit, ne přepsat znovu.

**Cestou zpátky se nic nemaže.** Doplnění se vrací tak, že se *označí* znaky, které přidalo, přesně jako chůze vpřed označuje to, přes co se rozšiřuje — jméno zůstává před tebou a každý další stisk označí ještě o kousek víc:

| | pole | označeno |
| --- | --- | --- |
| po příchodu | `Alpha-one` | |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `ha-one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `Alpha-one` |

Psaní nahrazuje označenou část, stejně jako kdekoli jinde. <kbd>Tab</kbd> vrátí přesně to, co označení vrátilo zpátky, takže dva kroky ven a dva kroky zase dovnitř tě vrátí tam, kde jsi byl.

Jakmile je označené celé jméno, nezbývá nic, co by tam dal nějaký stisk, a další stisk jde *po cestě nahoru*: opustí složku, ve které stojíš, přesně jako <kbd>Backspace</kbd> v prázdném poli. Ani to nic nestojí — jméno složky se vrátí do pole **před** to, co v něm bylo, označené, což je přesně ten text, který by ti dalo kliknutí na tu složku. Zpátky je směr, ne historie zpětných kroků — ale díky tomu, že se jméno nejdřív označí, jeden stisk nikdy nevezme zpátky, co jsi napsal, a zároveň tě nevyvede ze složky, ve které jsi to napsal.

Text, který se otevře **už vybraný** — to, co za sebou nechá klik na složku — je jméno, se kterým <kbd>Tab</kbd> dál pracuje: doplní se a vstoupí se do něj jako do čehokoli jiného, a psaní ho nahrazuje. Jen příkaz pro zaměření se otevírá na příčce žebříku samotné, protože ukazuje celou cestu, ne složku, do které se má vstoupit.

## Psaní něčeho, co není cesta

| Co napíšeš | Co se stane |
| --- | --- |
| `https://…` | Otevře se v nové kartě v Obsidianově **prohlížeči webu**, pokud máš zapnutý tenhle základní plugin; jinak ve tvém desktopovém prohlížeči |
| `obsidian://…` | Předá se vlastnímu obslužnému programu URI Obsidianu |
| `file:///…` | Dekóduje se a otevře: jako skutečná poznámka, pokud je uvnitř tvého trezoru, jinak v prohlížeči |
| `/home/you/a%20b.md` | Totéž, pro cestu vloženou z prohlížeče nebo správce souborů |

Počítají se jen výslovná schémata — poznámka jménem `100%20` je pořád poznámka. `/`, které patří ke schématu, zůstává doslovné místo toho, aby sestupovalo do složky, takže URL se dá napsat ručně, ne jen vložit.

## Příkaz pro klávesnici

**Zaměřit lištu cesty** otevře pole na jméně poznámky a prochází ho stejně jako <kbd>F2</kbd> — jméno, jméno s příponou, cesta od tvého trezoru, cesta od kořene systému — a stisk po tom zavře pole a vrátí kurzor zpátky do poznámky. Nepřejmenovává: Enter navigujte, jako v jakémkoli jiném poli. Ve výchozím stavu nemá vlastní klávesu, protože Obsidianova pravidla pluginům odrazují od toho, aby si nějakou nárokovaly; řádek **Hotkeys** na konci nastavení tohoto pluginu otevírá *Nastavení → Hotkeys*, kde jsou vidět jen jeho příkazy, takže si ji tam můžeš přiřadit.

## Navigace se nikdy nedotkne otevřeného souboru

Ve výchozím (navigačním) režimu se otevřená poznámka **nikdy** nepřejmenovává ani nepřesouvá.

- Cesta, která odkazuje na existující soubor, ho otevře.
- Cesta, která ještě neexistuje, se prostě vytvoří, včetně případných chybějících nadřazených složek, a otevře. Každý takto vytvořený soubor a složka to oznámí ve zprávě — nová složka je jinak neviditelná, dokud ji nezačneš hledat — a Obsidianův vlastní koš dělá z nechtěné jeden stisk klávesy na vrácení zpět.
- **Mimo trezor se pořád nejdřív zeptá.** Tam venku ten samý překlep zapíše do systémové složky, kde ti moc nepomůže ani hlášení, ani Obsidianův koš.

## <kbd>Ctrl</kbd> — nová karta a kopírování místo přesunu

Poznámka **vytvořená, přesunutá nebo zkopírovaná uvnitř trezoru se ukáže tam, kam dopadla** v Průzkumníku souborů, na chvíli zvýrazněná Obsidianovou akcentní barvou — strom je místo, kde ji potom hledáš, takže se ti postaví před oči místo toho, aby zůstala ve složce, která ani nemusí být otevřená. Duplikování to oznamuje také: kopie nechá originál tam, kde byl, a otevře kopii ve vlastním panelu, což by bez slova bylo snadné číst jako to, že se nic nestalo.

Podržení <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> na macOS) při výběru souboru ze seznamu nebo při stisku <kbd>Enter</kbd> na cestě pošle výsledek do **nové karty** místo do této:

| | Bez ničeho | S <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Vybrat nebo napsat existující soubor | Otevře se zde | Otevře se v nové kartě |
| Napsat neexistující cestu | Zeptá se, pak otevře zde | Zeptá se, pak otevře v nové kartě |
| Potvrdit cestu v režimu přejmenování/přesunu | **Přesune** poznámku tam | **Zkopíruje** ji tam a otevře kopii v nové kartě |

Modifikátor se čte pravidlem samotného Obsidianu, takže se chová přesně jako na odkazu nebo na řádku Průzkumníka souborů — prostřední klik také znamená „nová karta“, <kbd>Ctrl</kbd>+<kbd>Alt</kbd> znamená rozdělení a <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> nové okno.

Kopírování odmítá přepsat, přesně jako přesun — včetně přepsání vlastní cesty poznámky, kam stejně není co kopírovat. Mimo trezor se tohle odmítnutí taky vysloví nahlas.

Všechno tohle funguje **jak s otevřeným seznamem**, tak bez něj: na zvýrazněném řádku se modifikátor vztahuje na ten řádek, a když nestojíš na ničem, vztahuje se na to, co jsi napsal.

## Procházení mimo trezor

**Tohle je ve výchozím stavu vypnuté.** Nejdřív zapni **Přístup k externím souborům** v nastavení — čtení a zápis mimo trezor je jediná věc, kterou tenhle plugin dělá a Obsidian sám ne, takže se do toho vstupuje záměrně, místo aby se z toho muselo vystupovat. S vypnutým nastavením název trezoru prostě zobrazí tvůj trezor v Průzkumníku souborů a nic tady nikdy nekouká dál.

Klik na **název trezoru** (nebo na ikonu 🏠, když je **Zobrazit název trezoru** vypnuté) otevře rozbalovací seznam míst místo obsahu. Pole, které se otevře, drží **celou cestu, na které jsi byl, vypsanou celou**, s vybraným místem, kde začíná — takže výběr někam jinam, nebo přepsání výběru, vymění jen tuhle úvodní část a zbytek cesty nechá před tebou. **Stiskni název podruhé** — dvojklikem — a označení se rozšíří přes celou cestu, což je způsob, jak se absolutní cesta vezme jedním gestem, místo aby se přejížděla ručně. Rozmysli si to a <kbd>Esc</kbd> vrátí řádek do původního stavu.

Psaní tady nabízí zbytek názvu místa jako kdekoli jinde a <kbd>Tab</kbd> **to místo vloží** — to, na které ukazuješ, nebo to, co název může znamenat jedině. Tam, kde si víc míst pořád dělí to, co jsi napsal, stisk zůstane na rozcestí, jako všude jinde. Ukázání na místo zobrazí **cestu toho místa samotného**, celou vybranou, a za ní cestu tvé poznámky jen tak daleko, jak tam skutečně vede — což je přesně to, na čem bys skončil, kdyby ses ho vybral. Místo není krok uvnitř cesty na obrazovce, ale odkud se počítá celá cesta, takže z toho, kde jsi byl, před ním nic nezůstává.

Nabízená místa:

- **Tvoje ostatní trezory**, načtené z vlastního registru Obsidianu, nejdřív naposledy otevřený, každý pod vlastní ikonou trezoru Obsidianu — tou samou, kterou aplikace používá pro příkazy k trezorům. Trezor, který už máš otevřený, dostane místo toho domeček: je to místo, odkud řádek ve výchozím stavu začíná, ne místo, kam jít.
- **Domovská složka**, pod názvem tvého účtu, označená `~`. Lucide nemá vlnovku, takže tuhle ikonu kreslí sám plugin na téže mřížce 24×24 Lucide a se stejnou tloušťkou tahu — ikona, která sadě chybí, ne textový znak zapadlý mezi ikony.
- **Kořen souborového systému**, popsaný jako `root` — nepřeloženo, protože tak se jmenuje v každém systému — místo `/`, který by se vedle následujícího oddělovače četl jako prázdný krok.
- **Připojené jednotky**, s ikonou podle typu tam, kde je to levné zjistit: síťová sdílení, optické disky, diskety a vyměnitelná média mají svou; všechno ostatní dostane obecnou jednotku. Ve Windows se jednotky zobrazují jako `C:` s obecnou ikonou — názvy svazků a přesné typy vyžadují WMI, které se záměrně nepoužívá.

Výběr jiného trezoru **na něj Obsidian nepřepne.** Všechno, co máš otevřené, zůstává otevřené; řádek cesty prostě začne procházet tam. V tom je celý smysl toho, že je to na liště cesty, a ne odloženo na přepínač trezorů v postranním panelu.

Zároveň to přistane **tak blízko poznámce, na které jsi**, jak dané místo doopravdy dovoluje.

- Pokud vybrané místo poznámku *obsahuje* — domovská složka nebo místo, kde žijí tvé trezory — dostaneš její cestu odtud: vyber `~` s otevřeným `takeaways.md` a pole ukáže `Vaults/tvuj-trezor/takeaways.md`.
- Pokud jde o místo vedle tohoto — jiný trezor, jiná jednotka — vyzkouší se stejná relativní cesta, tak hluboko, jak doopravdy existuje. Trezory bývají skoro kopiemi jeden druhého a důvodem k přeskoku na jiný bývá právě táž poznámka tam.

Ať tak či onak, řádek zůstane na vybraném místě a **první složka té cesty se otevře vybraná**, stejná podoba, jakou dává klik na složku: krok, který nejspíš změníš, když skočíš někam jinam, je ten nejbližší vrcholu, a zbytek cesty zůstává vidět, zatímco ho měníš. Nikdy se nepředvyplní nic, co doopravdy není na disku.

### Zatímco jsi venku

Cesta **začíná na místě, které jsi vybral**, ne na adresářovém uspořádání stroje — a stejně tak pole, které dostaneš klikem na prázdné místo nebo stiskem klávesy pro zaměření: drží cestu od toho místa, ne absolutní cestu stroje, se stopou sbalenou k samotnému místu přesně tak, jak se sbaluje ke kořeni trezoru uvnitř — vyber `Archive` a řádek ukáže `Archive / notes / …`, ne `/home/ty/Vaults/Archive/notes/…`. Úvodní segment nese ikonu podle toho, co je (trezor, domovská složka, jednotka), a <kbd>Backspace</kbd> se tam zastaví, místo aby šel dál nahoru do zbytku souborového systému. S vypnutým **Zobrazit název trezoru** je ten segment jen ikona samotná — nastavení se týká úvodního segmentu řádku, ať pojmenovává kterýkoli trezor, ne jen ten tvůj.

Řádek cesty zůstává **orámovaný chybovou barvou** — tímtéž prstencem, který kreslí režim přejmenování — po celou dobu, kdy míří mimo tvůj trezor. Označuje trvající stav, ne okamžik: dokud tam je, nic z vlastního zacházení Obsidianu se netýká toho, co řádek ukazuje, a zápis je zamčený, dokud neřekneš jinak.

Jinak procházení funguje jako uvnitř: štítky, oddělovače, psaní, doplňování, <kbd>Backspace</kbd> na vystoupení. Platí i tatáž pravidla viditelnosti, takže nepodporované přípony pořád potřebují **Detekovat všechny přípony souborů** Obsidianu a skryté soubory nastavení tohoto pluginu.

**Klik pravým tlačítkem funguje i tam venku**, i když jde o jiné menu: vlastní obslužné rutiny Průzkumníku souborů potřebují soubor, o kterém trezor ví, takže položky venku se sestavují z cesty místo toho. Nabízejí otevření (zde, vpravo, v novém okně nebo ve výchozí aplikaci tvojí plochy), *Kopírovat cestu*, *Zobrazit v systémovém průzkumníku* a — jakmile je zámek otevřený — *Nová poznámka*, *Nová složka*, *Vytvořit kopii*, *Přejmenovat…* a *Smazat*. **Přetahování** pořád potřebuje soubor trezoru a zůstává nedostupné.

Totéž menu je na otevřeném souboru v prohlížeči, ať klikem pravým tlačítkem nebo z vlastních tří teček panelu, a ptá se na zámek v záhlaví toho pohledu. Na nic jiného se neptá: jestli je soubor vykreslován, nebo zobrazen jako zdroj, nemá vliv na to, jestli lze smazat, a obrázek nebo PDF — které nemá žádný zdrojový pohled — je smazatelné stejně jako poznámka. *Smazat* znamená koš plochy, takže se to odtud dá vrátit; systém bez koše to ohlásí místo toho, aby soubor zničil.

Mazání mimo trezor přesune soubor do tvého **systémového koše** — Koš na Windows, Trash na macOS — nikdy ne odpojení souboru. Tady venku není žádný koš Obsidianu, ze kterého by se dalo obnovit, takže mazání, které by se nedalo vrátit, se vůbec nenabízí: tam, kde platforma nemá koš, pokus ohlásí neúspěch místo toho.

### Zápis mimo trezor

Všechno, co zapisuje, je **ve výchozím stavu zamčené**. Po celou dobu, kdy řádek míří mimo tvůj trezor, místo přepínače přejmenování v záhlaví zaujme **červený zámek** — tatáž barva jako prstenec kolem řádku a ze stejného důvodu: označuje odmítnutí. Ty dva jsou jedno ovládání v jednom místě, takže nikdy nejde o otázku, který z nich co brání.

Tři stisky v cyklu:

| Stisk | Co dostaneš |
| --- | --- |
| Červený zámek | Zápis je tady povolený. Zámek nahradí přepínač přejmenování/přesunu |
| Přepínač | Režim přejmenování/přesunu, přesně jako uvnitř trezoru |
| Přepínač znovu | Režim skončí a zámek se zase zavře — povolení nepřežije to, kvůli čemu bylo otevřeno |

**Klávesa pro přejmenování se ptá i na zámek.** Mimo tvůj trezor její stisk zámek jen bleskově otevře a zavře, místo aby otevřel režim, který by každé potvrzení odmítlo: odmítnutí přijde před prací, ne po ní. Stiskni zámek, nebo stiskni klávesu pro přejmenování znovu do půl vteřiny — druhý stisk udělí přesně to, co uděluje tlačítko, pro tohle místo, a otevře s tím i režim přejmenování.

Uvnitř tvého trezoru žádný zámek není: není co odemykat a místo je jednoduše přepínačovo.

Povolení je udělené **místu, ne okamžiku**: přežije všechno, co bys udělal při práci na jednom místě — dokončení přesunu, odklik z pole, otevření souboru — a končí, když z rozbalovacího seznamu vybereš jiný trezor, jednotku nebo kořen, když se řádek vrátí na soubor trezoru, nebo při tom třetím stisku. Takže série přesunů uvnitř jedné složky vezme jeden stisk, ne jeden na soubor.

S otevřeným zámkem se řádek cesty chová venku stejně jako uvnitř:

| Úkon | Výsledek |
| --- | --- |
| Napsat neexistující název, <kbd>Enter</kbd> | Tentýž dotaz „vytvořit?“ jako uvnitř; chybějící složky se také vytvoří. Název bez přípony se stane `.md`, přesně jako uvnitř |
| Režim přejmenování/přesunu, napsat nový název | Přejmenuje soubor, který řádek ukazuje. Název bez přípony si ponechá tu souborovou — tady venku složka drží soubory všeho druhu a přejmenování by nemělo potichu proměnit `.png` v `.md` |
| Režim přejmenování/přesunu, přejít jinam, vybrat **ponechat tento název** | Přesune ho tam pod názvem, který už má |
| Podržet <kbd>Ctrl</kbd> u kteréhokoli z obou | Zkopíruje místo přesunu a otevře kopii v nové kartě |

Se zavřeným zámkem všechno tohle místo provedení ohlásí, co ho blokuje. Ani v jednom stavu se nic nepřepisuje: už existující cíl je odmítnut a odmítnutí pochází od samotného souborového systému (`COPYFILE_EXCL`, výlučné vytvoření), ne od kontroly, která by mohla prohrát závod. Přesun mezi souborovými systémy — z flash disku, ze síťového sdílení — přejde na zkopírovat-a-pak-smazat a originál se odstraní teprve tehdy, když kopie dosedla.

**Přesun poznámky *z* tvého trezoru se nejdřív zeptá.** `fileManager` nemůže soubor sledovat přes tuhle hranici: každý odkaz mířící na poznámku se přestane rozpoznávat, nic je neaktualizuje a poznámka opustí index trezoru. Takže přesun se nabídne jako rozhodnutí, místo aby byl odmítnut nebo proveden potichu — dialog uvede, co to stojí a kolik poznámek odkazuje na tu, kterou přesouváš. Potvrď a doopravdy se přesune: zkopíruje se ven, pak se odstraní z trezoru přes vlastní mazání Obsidianu, takže je obnovitelná přesně jako smazaná poznámka, a selhání v kterémkoli kroku ponechá poznámku tam, kde byla. Podržení <kbd>Ctrl</kbd> ji pořád místo toho jen zkopíruje ven, což ten problém vůbec nemá. Opačný směr — přinést vnější soubor *do* trezoru — zatím není zapojený.

### Otevření externího souboru

Procházení souborového systému se může vrátit zpátky **do trezoru, který máš otevřený** — z kořene, z domovské složky, odkudkoli, kde žijí tvé trezory. Soubor, ke kterému se dostaneš takhle, je obyčejná poznámka, takže se tak i otevře: opravdový editor, odkazy a zpětné odkazy, a řádek se vrátí zpátky k řádku cesty kořeněnému trezorem. V náhledu zůstávají jen soubory, pro které Obsidian nemá pohled, protože tam venku je náhled ta lepší odpověď. Tam, kde náhled takovou poznámku přesto zobrazuje — třeba znovu otevřená pracovní plocha — jeho horní řádek nabídne **Otevřít v *(trezor)***, což je tatáž nabídka, jaká se dělá ručně.

Editor Obsidianu funguje jen na souborech uvnitř trezoru, takže externí soubor **nelze** otevřít jako skutečnou poznámku s odkazy, zpětnými odkazy a vším ostatním — to je omezení aplikace, ne tohoto pluginu. Výběr takového souboru otevře místo toho **náhled**, jen ke čtení, dokud neřekneš jinak:

| Typ | Zobrazený jako |
| --- | --- |
| `.md`, `.markdown` | Vykreslený Markdown |
| `.html`, `.htm`, `.xhtml` | Vykreslená stránka |
| Obrázky, zvuk, video, PDF | Nativní přehrávač/prohlížeč |
| Jakýkoli jiný **textový** soubor (`.json`, `.css`, `.log`, `.txt`, …) | Doslovný prostý text |
| Binární formáty bez prohlížeče (`.zip`, `.exe`, …) | Předáno funkci *Otevřít ve výchozí aplikaci* |

Prohlížeč má dvě čtení souboru, a protože se navzájem vylučují, zobrazuje se jen to, **na které** bys přepnul:

| | Co to dělá | Výchozí pro |
| --- | --- | --- |
| **Zobrazit jako Markdown** | Vykreslí soubor jako poznámku, jen ke čtení | `.md`, `.markdown` |
| **Zobrazit jako stránku** | Vykreslí soubor jako stránku, kterou je, jen ke čtení | `.html`, `.htm`, `.xhtml` |
| **Upravit jako text** | Zdroj, upravitelný | všechno ostatní |

Mimo trezor je **Upravit jako text** zároveň stiskem, který sundá „jen ke čtení“ — režim a povolení jsou jedno gesto místo dvou tlačítek, nad kterými se má přemýšlet. Zbarví se červeně **pokaždé, když by stisk sundal „jen ke čtení“**, ať už úpravu natahuješ na místě, nebo přicházíš rovnou z vykresleného pohledu; uvnitř trezoru není co odemykat, takže zůstává obyčejné. **Zobrazit jako Markdown** dostane lehký nádech barvy akcentu — tentýž odstín, jaký Obsidian dává vybranému textu — čímž ho označuje jako cestu zpět, ne jako výzvu k akci.

Protože tlačítko sleduje *úpravu*, a ne surový režim, soubor ležící v textovém pohledu jen ke čtení pořád nabízí **Upravit jako text**: to je ten stisk, který ji natáhne. Soubor, do kterého se nikdy nebude dát psát — zkrácený nebo nečitelný — říká místo toho **Zobrazit jako text**, protože to je všechno, co stisk může dodat.

Výchozí nastavení jsou ta užitečná, ne doslovná: `#` v shellovém skriptu je komentář, ne nadpis, takže vykreslení `.log` jako Markdownu by ho potichu spolklo. Kterékoli z výchozích nastavení jde přebít po jednotlivých souborech a volba jde do historie karty, takže zpět/vpřed i znovu otevřená pracovní plocha ji podrží — spousta poznámek žije v souborech `.txt` a spousta souborů `.md` se čte lépe jako zdroj.

#### Co smí stránka HTML dělat

Nic. Stránka se zobrazuje v rámci s **odepřenými všemi oprávněními** — žádné skripty, žádné formuláře, žádná navigace, žádný vlastní původ — a s politikou obsahu, která jí nedovoluje žádnou síť vůbec. Není to opatrnost pro opatrnost samotnou: lokální stránka načtená obvyklým způsobem by sdílela původ tohoto okna, a tohle okno je Obsidian, takže skript ve staženém souboru HTML by běžel uvnitř tvé aplikace s dosahem tvé aplikace.

Co to stojí, je cokoli, co stránka *dělá*; co si to podrží, je všechno, čím stránka *je*. Styly a obrázky ležící vedle souboru se načtou a přenesou do rámce, takže uložená stránka pořád vypadá jako ona sama. Odkazy mířící mimo vlastní složku stránky a odkazy někam na web zůstávají přesně tak, jak jsou napsané, a jednoduše se nenačtou — lokální soubor nemůže potichu říct serveru, že jsi ho otevřel.

Skripty jsou **odstraněné**, ne jen zablokované, aby se stránka, kterou vidíš, a zdroj, na který můžeš přepnout, lišily jedním uvedeným způsobem, ne tím, cokoli rámec potichu odmítl spustit. Odkazy uvnitř stránky nedělají nic. Když chceš tu skutečnou věc — skripty, síť a všechno — *Otevřít ve výchozí aplikaci* to předá tvému prohlížeči, což je pro to ten správný nástroj.

**Soubory v tvém trezoru jsou upravitelné rovnou**, bez jakéhokoli odemykání: *Upravit jako text* je opravdový editor a zapisuje, jak píšeš.

**Úprava se přes přepnutí pamatuje.** Přechod na *Zobrazit jako Markdown* ji pozastaví — statické vykreslení nemá kam psát a Živý náhled potřebuje vlastní editor Obsidianu, který existuje jen pro soubory uvnitř trezoru — takže nic netvrdí, že upravuješ, zatímco jsi tam. Návrat k *Upravit jako text* naváže tam, kde jsi skončil.

**Soubory mimo trezor se otevírají jen ke čtení a *Upravit jako text* to sundá.** Ten stisk je celá brána: dokud nenastane, venku se nic nezapisuje. Potom se soubor ukládá, jak píšeš, přesně jako soubor v trezoru; a stavový řádek vymění zámek za tužku. Odemčení pokrývá ten jeden soubor v té jedné kartě — přechod na jiný soubor zase zamkne a záměrně se neukládá do historie karty, aby se znovu otevřená pracovní plocha nikdy nevrátila s natáhnutým zápisem na systémovém souboru, o jehož otevření nevíš.

**Zkrácené soubory zůstávají jen ke čtení tak jako tak** — uložit to, co je na obrazovce, by zahodilo všechno za limitem, takže se tlačítko vůbec nenabídne, místo aby se nabídlo a odmítlo. Totéž platí pro soubor, který nešlo přečíst: není co zapisovat zpět kromě prázdného panelu.

Pokud zápis selže — připojení jen ke čtení, cizí soubor — zobrazí se v upozornění důvod, který uvedl sám systém.

Velmi velké soubory se zobrazují zkrácené a stavový řádek to říká, místo aby to nechal na tobě — vedle ostatních podmínek, ne pověšené pod tlačítky, protože je to fakt o souboru jako každý jiný. Limity jsou změřené proti skutečnému vykreslovači, ne odhadnuté — rozvrhnout megabajt textu v jednom panelu zabije vykreslovací proces Obsidianu na místě a Markdown stojí několikanásobně víc na bajt než prostý text, takže mají oddělené limity a jeden obrovský řádek se zkrátí i tehdy, když je soubor jako celek malý.

**Stavové řádky jsou popisky a vysvětlení bydlí v bublině.** Každý řádek říká, co platí, tolika slovy, kolik je třeba — *Mimo trezor*, *Pro tento typ souboru není editor*, *Zkráceno — soubor je příliš velký* — protože tlačítka vedle už říkají, v jakém stavu soubor je. Najetí myší dá větu: proč ho Obsidian nemůže otevřít jako poznámku, co by se s tímhle typem souboru jinak stalo, co tě zkrácení stojí.

Platí to i pro soubory **uvnitř** tvého trezoru. Každou příponu, pro kterou nemá pohled, předá Obsidian rovnou výchozí aplikaci plochy — takže `.txt` nebo `.json` ve tvém trezoru by tě z Obsidianu vyvedl úplně. Takové se teď otevírají v témže prohlížeči, s oranžovým prstencem, protože „otevři to v Obsidianu“ je to, oč jsi žádal — a jelikož jsou to soubory trezoru, jsou tam upravitelné bez jakéhokoli odemykání. Binární soubory bez prohlížeče si podrží chování Obsidianu; není co zobrazit.

Náhled se otevře **v kartě, ve které jsi byl**, takže zpět/vpřed tě vrátí k poznámce, ze které jsi přišel; podrž <kbd>Ctrl</kbd> pro novou kartu jako všude jinde. Lišta záhlaví dál ukazuje cestu externího souboru, dokud je otevřený, takže odtud můžeš procházet dál.

Tichý řádek nad obsahem nabízí cesty ven:

- **Otevřít v *(trezor)*** — zobrazuje se, když soubor patří do jednoho z tvých ostatních trezorů. Předá ho vlastnímu obslužnému nástroji URI Obsidianu, který otevře okno toho trezoru s poznámkou v něm, jako skutečnou upravitelnou poznámku. Tohle okno zůstane přesně tak, jak bylo; nic se pod tebou nepřepíná.
- **Zobrazit jako Markdown** / **Zobrazit jako stránku** / **Upravit jako text** — dvě čtení, která tento soubor má; poslední mimo trezor také sundá „jen ke čtení“.
- **Otevřít ve výchozí aplikaci** — předá soubor výchozí aplikaci tvojí plochy, včetně binárních formátů, které tenhle prohlížeč neumí zobrazit. Formulováno přesně jako vlastní položka Obsidianu pro tutéž akci, protože je to táž akce.

Prohlížeč odpovídá i na **klik pravým tlačítkem**: uvnitř textového editoru s *Vyjmout* / *Kopírovat* / *Vložit* / *Vybrat vše*, a kdekoli jinde s vlastním menu souboru. Menu tří teček Obsidianu v záhlaví nese to samé menu — mimo trezor by jinak nabízelo jen *Rozdělit vpravo* a *Rozdělit dolů*.

Nic mimo tvůj trezor se nezapíše, dokud nejdřív nestiskneš *Upravit jako text*. Úplné vysvětlení najdeš v sekci [Mimo trezor](README.cs.md#mimo-trezor) v README.

## Přetažení souboru na složku v cestě

Každá složka v řádku je cíl pro upuštění, takže **poznámka přetažená na ni se
tam přesune** — nejkratší cesta k tomu vede mezi poznámkou a jakoukoli složkou
nad ní, protože cíl je už na obrazovce. Přetahuj ze správce souborů, ze
seznamu, z názvu poznámky v záhlaví nebo odkudkoli jinak v Obsidianu, co
vytváří soubor: jde o vlastní přetahování aplikace, takže popisek při najetí,
kurzor i zvýraznění jsou ty, které kreslí správce souborů.

**Cílem upuštění je i název trezoru**, protože je to složka na začátku
řádku — jediné gesto, které odsud přesune poznámku do kořene trezoru.

**Přetáhnout lze naráz i celý výběr**, a přesune se jako celek: pokud by
kterýkoli z výběru nešlo přesunout, upuštění se odmítne, místo aby se přesunula
jen část a zbytek se tiše přeskočil.

Odkazy poznámku následují, přesně jako když se přesune ze správce souborů nebo
zapsáním cesty.

Složka, **na kterou upuštění nejde provést, sama od sebe nic nenabízí** —
žádný popisek *Přesunout do*, žádné zvýraznění složky — místo aby nabízela
něco, co by pak selhalo; místo toho tam stojí vlastní odpověď Obsidianu pro
záhlaví, *Otevřít na této kartě*. Tři případy:

- složka, ve které soubor **už je**, protože tam už je;
- složka upuštěná **sama do sebe nebo do svého potomka**, což by ji nechalo bez
  místa, odkud by pocházela;
- výběr obsahující **složku a něco uvnitř ní**, protože přesun složky vezme
  s sebou i to, co je v ní.

Složka, která už obsahuje **soubor stejného jména**, upuštění přijme a zeptá
se, co se stávajícím souborem, se stejným dialogem jako u zadaného nebo
vybraného zabraného jména — viz [Jméno, které je zabrané](#jméno-které-je-zabrané).
Nic se tu nepřepisuje.

Upuštění přijímají jen složky **uvnitř tvého trezoru**. Zatímco řádek ukazuje
mimo trezor, jeho segmenty odmítají, protože vyvedení poznámky z trezoru
zlomí každý odkaz na ni — rozhodnutí, které si zaslouží otázku, ne gesto.
Způsob, jak to udělat záměrně, je stále zapsat cestu, která se nejdřív zeptá a
řekne ti, kolik poznámek by to zasáhlo.

## Přetažení textu nebo souboru pro jeho zapsání

Stejné cíle přijímají i **obsah**, nejen soubory, a oboje se rozlišuje podle
toho, co přetahuješ, ne podle toho, kam to pustíš.

**Na poznámku, kterou řádek už pojmenovává** — vlastní název poznámky, nebo
oddělovač, jehož složka má poznámku složky — to, co jsi upustil, se přidá na
konec, za prázdný řádek. Nejdřív se zeptá, protože se tím zapisuje do souboru,
který už existuje, a přetažení je gesto, které nejistá ruka může udělat
omylem. Funguje text z editoru, soubor z plochy i poznámka přetažená z tohoto
trezoru; soubor se čte jako text a binární soubor se odmítne, místo aby se
vložil jako obrazovka nesmyslů.

**Na místo — název trezoru nebo složku** — zatím se nic nezapíše, protože nic
nebylo pojmenováno. Pole se tam otevře s tím, co jsi upustil, a název, který
napíšeš, je to, co to potvrdí: nová poznámka se *vytvoří* s tímto textem a u
existující se zeptá přesně jako výše. <kbd>Esc</kbd> nebo klik jinam celou věc
pustí.

**Řádek se orámuje modře**, dokud nad ním visí přetažení, které by dopadlo
jako obsah, a zůstává modrý, dokud ho pole drží — stejná modrá, která říká
totéž: to, co se stane dál, se týká textu, který neseš. Soubor přetažený z
vlastního trezoru na složku pořád znamená *přesunout ho tam*, ponechává si
vlastní zvýraznění Obsidianu a nikdy se neorámuje modře; to gesto tu bylo
první a obsah před ním ustupuje.

## Když je cesta delší než panel

Názvy se **zkracují, ne mačkají**, v pořadí toho, co nejspíš nejmíň potřebuješ:

1. **Nejdřív název trezoru**, až na jeho ikonu. Víš, ve kterém trezoru jsi;
   ikona dál říká, kde cesta začíná.
2. **Pak přípona souboru**, pokud ji máš zapnutou — stejné tři znaky u téměř
   každého souboru v trezoru. Zmizí celá, ne zkrácená: půlka přípony neřekne
   nic, co by neřekla žádná přípona.
3. **Pak složky, nejdelší první.** Nejdelší název složky se zkrátí na délku
   druhého nejdelšího, pak se zkracují oba společně a tak dále, každý se
   zastaví u své spodní hranice — takže jedna velmi dlouhá složka vzdá vše, co
   má navíc oproti ostatním, dřív, než krátký název vedle ní ztratí jediné
   písmeno.
4. **Vlastní název souboru naposled**, a drží si asi šest znaků. Právě k tomu
   je záhlaví.

Místo se uvolňuje **plynule**, po zlomcích pixelu, ne po písmenech: název,
který ustupuje, se ořízne na pixel a vytratí pod svými `…`, takže pomalu
zužovaný panel řádek zužuje plynule a nic za ním se nehýbe skokově. Než zmizí
jediné písmeno, spotřebuje se prostor kolem oddělovačů — je to jediné
odsazení řádku a nestojí to žádnou informaci — a zkrácený název končí tam, kde
začíná oddělovač, bez pruhu prázdného místa mezi nimi.

**Pole si bere, co drží.** Otevření pole pro zápis cesty nevytlačí sousední
složky z cesty: je široké přesně jako text v něm a roste, jak píšeš, takže
zbytek si nechává vše, co pole nepotřebuje. Teprve když nestačí místo pro obě
věci, řádek se posouvá, a pak je pole jedinou věcí, která nikdy neustoupí —
je to text, který se edituje, ne název, který se přizpůsobuje.

Nic se neořízne za hranici, která ho odliší od sousedů: `Projects2025` a
`Projects2026` ve stejné složce se zkrátí na `…025` a `…026`, ne na předponu,
která by z nich udělala stejné slovo, zatímco `Reports` vedle `Receipts` může
klidně sejít na `Rep…`. Navíc si každý název drží **čitelnou šířku** — u
složky přibližně šířku čtyř písmen, u názvu souboru šesti, měřeno ve
skutečném písmu, kterým se řádek kreslí, ne počítáno znaky. Čtyři úzká
písmena a čtyři široká nejsou stejné množství jména, takže `lilliliillil`
si smí ponechat víc ze sebe než `WWMMWWMMWWMM`, a to, co zbude na obrazovce,
má stejnou velikost v obou případech. Krátké názvy se nechávají zcela na
pokoji — název ohlodaný na `A…` je unikátní a přitom nečitelný. **Mezery se
do toho nepočítají.** Šest znaků, které říkají, o který soubor jde, je šest
znaků hodných přečtení, takže mezery mezi nimi jedou zdarma a žádná nezůstane
ležet vedle `…`, kde by tak jako tak byla neviditelná.

**Název se ořízne tam, kde se s ním sousedé shodují, a uprostřed tam, kde se
neshodují nikde.** Dvě složky `aaaa-common-one` a `aaaa-common-two` sdílejí
všechno kromě posledních tří znaků, takže oříznutí konce ponechá právě tu
polovinu, která něco říká: sejdou na `…one` a `…two` místo toho, což je
kratší *a zároveň* je to rozliší. Tam, kde se shoda nachází na konci —
`alpha-draft` vedle `beta-draft` — mizí konec; tam, kde je na obou koncích,
zůstává střed. Název bez blízkých sousedů ztrácí střed, protože název začíná
tím, co je, a končí tím, který z nich je — u souboru jeho příponou:
`annual…2026.md`.

Krátká společná část se nepočítá. `parallel structures` náhodou končí
stejnými dvěma písmeny jako `Schemes` vedle něj, a to není důvod nechat
kterýkoli z nich celý — tři znaky zepředu je už rozliší.

Nic se nezalamuje na druhý řádek. Když se nevejdou ani nejkratší poctivé
názvy, řádek se **posouvá do strany**, zaparkovaný na konci, kde je soubor —
v tu chvíli už není co komprimovat a další ořezávání by spíš skrývalo, než
zkracovalo. Kolečko myši ho posouvá kdekoli nad řádkem, kam ukazatel míří, a
dosáhnout lze na oba konce: při posouvání se řádek zarovná ke svému začátku,
ať nastavení zarovnání říká cokoli, protože obsah zarovnaný na střed v
rámečku, který přerostl, přetéká vlevo stejně jako vpravo — a k té polovině
se posouváním vůbec nedá dostat.

**Ukaž na zkrácený název a vrátí se v plné podobě**, dokud na něj ukazuješ,
posunutý k levému okraji, aby bylo na obrazovce vidět vše, co se vrátilo.
**Klikni na něj a zůstane**: pole se otevře a ukazuje složku, na kterou jsi
klikl, to, co se nabízí po ní, a cokoli napíšeš, a dál to ukazuje i poté, co
se ukazatel odsune. Názvy zůstávají na místě, dokud řádek posouváš nebo do
něj píšeš — kdyby se některý roztáhl pod gestem míněným jako čtení řádku,
posunulo by ti to všechno za ním zpod rukou.

**Úvodní segment vždy nese tooltip, a je to absolutní cesta** —
`/home/ty/Vaults/Notes`, nebo kdekoli řádek začíná. To je jediná věc o řádku,
kterou nic na obrazovce neřekne: název ti řekne, *který* trezor, nikdy kde
je. Je tam bez ohledu na to, jestli se něco muselo zkracovat.

S vypnutým **Zobrazit název trezoru** se název neodstraní, jen se drží na
nule — takže ukázání na ikonu ho vrátí přesně stejně, jako ukázání na název,
který řádek musel zkrátit.

**Zobrazovat přípony souborů** vrátí příponu do názvu souboru v řádku.
Vypnuto — výchozí stav — a řádek pojmenovává poznámku tak, jak ji titulkuje
Obsidian, bez `.md`, kterou sdílí skoro každý soubor v trezoru; zapnuto, a
pojmenovává ji tak, jak to dělá souborový systém, což se hodí, když trezor
obsahuje víc než jen poznámky. Je to také druhá věc, kterou řádek vzdává,
když dochází místo, hned po názvu trezoru.
Tooltip ti dá zbytek: nejen název, ale vše, co pod ním řádek ukazuje, jako
`…/název/složka/poznámka.md`, takže jedno najetí odpoví jak na „co je to", tak
na „co je pod tím". Ikona trezoru pojmenovává svůj trezor stejně, když je
název vypnutý nebo byl zmáčknutý pryč.

## Varovné barvy

| | Kdy | Co to znamená |
| --- | --- | --- |
| **Červené** orámování řádku cesty | Řádek ukazuje mimo trezor | Obsidian nemůže otevřít, co tam je, jako poznámku, a nic tam venku se nezapíše, dokud neotevřeš zámek. |
| **Oranžové** orámování řádku cesty | Soubor je textového typu, pro který Obsidian nemá zobrazení | Upozornění. Obsidian by ho předal výchozí aplikaci tvého systému; místo toho ho ukazuje plugin. |
| **Červený** text v otevřeném poli | Na té cestě zatím nic není | <kbd>Enter</kbd> to vytvoří, ne otevře. Není to ani tak varování, jako spíš vyjádření toho, co udělá další stisk klávesy — viz [Psaní cesty](#psaní-cesty). |
| **Červený** zámek na místě přepínače přejmenování | Řádek ukazuje mimo trezor a zápis tam je stále uzamčený | Stejná červená jako u orámování, ze stejného důvodu: značí odmítnutí. Stiskem se zápis sem povolí a slot se vrátí přepínači — viz [Zápis mimo trezor](#zápis-mimo-trezor). |

**Obě orámování jsou nezávislá a obě mohou platit zároveň** — externí `.json`
je mimo trezor *a zároveň* typ, pro který Obsidian nemá editor. V prohlížeči
se objevují jako samostatné řádky, každý uvádí jen svou vlastní skutečnost. Na
řádku cesty vyhrává červená tam, kde platí obě, protože dvě orámování by byla
jen šum. Červený *text* je zcela třetí věc: týká se toho, co se píše, ne toho,
kam řádek ukazuje, takže se může objevit uvnitř kteréhokoli orámování nebo
žádného.

Oranžová úroveň je záměrně úzká. Registrované typy (Markdown, canvas, obrázky,
PDF, zvuk, video) se zpracovávají řádně a nic nedostanou. Binární soubory
nedostanou nic taky — nehrozí, že bys omylem rozeditoval `.zip` do chaosu.
Zbývá přesně to riziko: `.json`, `.css` nebo `.log`, které zviditelnilo
**Zobrazit všechny typy souborů**. Seznam je záměrně širší: tam je oranžové
všechno, co není poznámka — viz [jak jsou položky seznamu obarvené](#jak-jsou-položky-seznamu-obarvené).

## Režim přesunu/přejmenování

Tlačítko s tužkou zcela vpravo v záhlaví — vedle tlačítka režimu zobrazení,
stejně velké jako nativní tlačítka — přepíná režim přesunu/přejmenování. Mimo
trezor stojí na jeho místě červený zámek, dokud ho nestiskneš; viz
[Zápis mimo trezor](#zápis-mimo-trezor). Řádek záhlaví se pak
orámuje zvýrazňovací barvou, přesně jako přejmenování ve správci souborů.
Stejné kliky a klávesy teď potvrzují přesun nebo přejmenování přes
`fileManager.renameFile` Obsidianu, takže je následují i všechny odkazy na
poznámku.

Během přejmenování:

- Aktuální název souboru je připnutý v seznamu každé složky, takže přesunout
  poznámku beze změny jejího názvu je otázka jednoho kliku.
- Názvy už zabrané v cílové složce jsou **červené** — složka, která už tento
  název drží, i soubor tohoto jména — takže je konflikt vidět dřív, než si
  vybereš. Přesto je lze zvolit: viz níže.
- Vstup se ověřuje průběžně podle vlastních pravidel Obsidianu pro
  přejmenování — stejné sady znaků, stejná hlášení, stejný červený tooltip
  jako při přejmenování ve stromu souborů — takže nedovolený název se označí,
  jak píšeš, a nejde potvrdit.
- Klik mimo řádek záhlaví, nebo ztráta fokusu záhlaví, ukončí režim
  přejmenování.

### Jméno, které je zabrané

Přesun nebo přejmenování na název, který už existuje, se **místo odmítnutí
zeptá.** Otevře se dialog se dvěma cestami, které lze upravit: kam jde tvůj
soubor, a kam jde soubor, který stojí v cestě — červená, dokud je to místo
zabrané. Obě cesty jsou zakresleny stejně jako je kreslí řádek cesty, s
částmi, které se liší, obarvenými a zkracovanými jako poslední, takže i
dlouhá cesta pořád ukáže, co se mění.

Obě pole mají seznam. Druhé nabízí obvyklá východiska:

- **Prohodit místa** — jde do staré složky tvého souboru, pod svým vlastním
  názvem.
- **Prohodit názvy** — zůstává na místě a přebírá starý název tvého souboru.
- **Prohodit obě** — přebírá starou cestu tvého souboru.
- `-1`, `-bak` a `-old` vedle svého vlastního názvu.
- Oba názvy, které soubory měly.

První seznam nabízí, kam měl tvůj soubor namířeno, **Zůstat na místě**, svůj
vlastní název v cílové složce a k němu `-1`, `-bak` a `-old`. Východisko,
jehož cesta je zabraná, je vyšedlé a nedá se vybrat. Výběrem se **jen vyplní
pole** — pořád ho lze upravit — a **Použít** přesune obě, i s odkazy;
**Zrušit** nepřesune nic. Výběr zabraného jména ze seznamu se ptá na totéž,
stejně jako přetažení poznámky na složku, která už jeho jméno obsahuje.

## Jedna klávesa pro obě přejmenování

Příkaz pro přejmenování (výchozí <kbd>F2</kbd>, nebo cokoli, na co sis ho přemapoval) se **přepíná** mezi Obsidianovým přejmenováním v inline titulku a lištou cesty tohoto pluginu. Pokud máš Obsidianův inline titulek vypnutý, stane se jediným cílem lišta cesty, takže klávesa nikdy neudělá nic.

V liště cesty otevře úpravu **jména bez přípony** — to je oprava, kterou přejmenování téměř vždy je, a totéž vybere i klik na jméno. Zmáčkni ji znovu a udělá to, co by tam udělal <kbd>Tab</kbd>: u jména je to další příčka — jméno s příponou, cesta od složky trezoru, cesta od kořene systému; u něčeho napsaného ji doplní, stejně jako <kbd>Tab</kbd>.

**Cyklus se uzavírá u titulku.** Pět zmáčknutí tě provede kolem — inline titulek, jméno, jméno s přípona, cesta od trezoru, cesta od kořene systému — a šesté je znovu inline titulek. Toto zmáčknutí je jediné, které se liší od <kbd>Tab</kbd>u, který se místo toho vrací na začátek cesty — a sedmé jde tam, kam vede okruh <kbd>Tab</kbd>u: kořen trezoru, s celou cestou v poli a jeho první složkou označenou. Takže každý krok, ke kterému se dostane <kbd>Tab</kbd>, se dostane i klávesa.

Příkaz **Zaměřit lištu cesty** dělá totéž uvnitř pole — cokoli by udělal <kbd>Tab</kbd> — a kde by <kbd>Tab</kbd> udělal okruh, vrátí místo toho kurzor zpět do poznámky. Jeho další zmáčknutí je onen okruh: kořen trezoru, první složka označená.

**V poli, které už je otevřené**, klávesa ho přepne na přejmenování tam, kde stojí — zachová text, kurzor i výběr — a **Zaměřit lištu cesty** z něj přejmenování stejným způsobem sejme. **Cokoli jiného** zmáčknuté nebo kliknuté mezi zmáčknutími začne kterýkoli z cyklů znovu, takže zmáčknutí po tom, co jsi upravoval, nikdy nespadne na příčku zbylou z předchozího.

Mimo trezor klávesa funguje také — tam venku není žádný inline titulek, takže první zmáčknutí jde přímo do lišty cesty.

Funguje to obalením příkazu `workspace:edit-file-title`, ne odchycením klávesy, takže přemapování zkratky i spuštění příkazu z palety fungují beze změny.

## Jak jsou položky seznamu obarvené

| Barva | Znamená |
| --- | --- |
| **Fialová** | Poznámka (`.md`, `.markdown`) — to, co Obsidian otevře jako poznámku, vybrané ze složky se smíšeným obsahem |
| **Oranžová** | Ne poznámka — cokoli, co Obsidian jako poznámku neotevře, od PDF po `.txt`, a s nimi i položky `:page`. Složka se smíšeným obsahem je čtena kvůli poznámkám v ní, a jedna barva pro všechno ostatní to řekne rychleji než varování na několika z nich; viz [dvě varovné barvy](#varovné-barvy) |
| **Ztlumená** | Mimo trezor, takže se neuplatní vlastní zacházení trezoru |
| **Modrá**, tučně | Kde už jsi: vlastní poznámka této lišty a složka, na které lišta cesty stojí. V režimu přejmenování/přesunu stojí na místě poznámky položka *zachovat toto jméno* — v obou případech ta samá poznámka |
| **Červená** | Jen v režimu přejmenování/přesunu: jméno je obsazené. Stále vybíratelné — výběr se zeptá, co dělat se souborem, který stojí v cestě; viz [Jméno, které je obsazené](#jméno-které-je-zabrané) |

**Složky jsou tučně**, takže vlastní poznámka složky nepotřebuje žádnou vlastní barvu, aby se odlišila od své složky: je fialová jako každá jiná poznámka. **Čára na okraji řádku** označuje jména, která začínají tím, co jsi napsal — modrá, kde se shodují dál, zelená na větvi, kterou nabídka volí; viz [Psaní cesty](#psaní-cesty).

Pole přebírá stejné barvy pro to, co pojmenovává — viz [Psaní cesty](#psaní-cesty).

## Pravidla viditelnosti

- Soubory s nepodporovanými přípomna se v seznamech objeví jen pokud je zapnuté Obsidianovo nastavení **Detect all file extensions** — **uvnitř trezoru**. Mimo něj se nastavení neuplatní: řídí, co trezor indexuje, a nic tam venku v trezoru není, takže `.txt` vedle tvých poznámek je vypsán v obou případech.
- Seznam zobrazí až 1 000 položek, desetkrát více než vlastní limit Obsidianu. Když má složka víc, poslední řádek říká, kolik jich bylo vynecháno; pokračuj v psaní, abys seznam zúžil.
- Skryté soubory a složky (dot-files, dot-folders) se objeví jen pokud je zapnuté nastavení tohoto pluginu **Zobrazit skryté soubory**.
- **Ochrana před přepsáním funguje stejně bez ohledu na viditelnost** — skrytý soubor tě před jeho přepsáním stále chrání.

## Tahák

Cesta **obalená v uvozovkách** je za tebe rozbalena. Windows funkce *Copy as path* vydá `"C:\Users\ty\poznamka.md"`, uvozovky včetně, a shell to samé udělá pro jakoukoli cestu s mezerou; vložení nebo napsání funguje v obou případech. Jen dvojitá uvozovka, a jen jako shodující se pár kolem celé věci — v reálném jménu se nemůže objevit, na rozdíl od apostrofu, který v něm klidně být může.

| Chceš… | Udělej toto |
| --- | --- |
| Otevřít složku (její poznámku, nebo ji zobrazit) | Klikni na oddělovač **za** tou složkou |
| Dát složce poznámku složky, kterou nemá | **Dvojklik** na tentýž oddělovač (potřebuje plugin pro poznámky složek) |
| Vyměnit složku za sousední | Klikni na jméno té složky, pak napiš nebo vyber |
| Přejmenovat nebo přesměrovat poznámku | Klikni na jméno poznámky — přípona včetně |
| Prohlížet obsah složky | Klikni na jméno té složky; seznam vypisuje jejího rodiče, takže klikni na složku **pod** tou, kterou chceš |
| Přepsat složku a vše pod ní | **Dvojklik** na jméno té složky, pak napiš |
| Upravit cestu od jedné složky dolů | Klikni na jméno té složky, pak <kbd>→</kbd> pro zrušení výběru |
| Přeskočit na soubor napsáním jeho cesty | Klikni na jméno souboru nebo prázdné místo, napiš, <kbd>Enter</kbd> |
| Otevřít soubor místo toho v nové kartě | <kbd>Ctrl</kbd> při výběru, nebo <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| Zkopírovat poznámku někam místo přesunu | Tužka, pak <kbd>Ctrl</kbd> při výběru nebo potvrzení cíle |
| Vytvořit poznámku na cestě, která neexistuje | Napiš cestu — pole zčervená, jakmile se s ní nic v seznamu neshoduje — pak <kbd>Enter</kbd>. Uvnitř trezoru je vytvořena okamžitě; mimo něj se nejdřív zeptá |
| Zjistit, jestli napsaná cesta už existuje | Podívej se na barvu: přebírá barvu řádku, který pojmenovává, a červená znamená, že by ji <kbd>Enter</kbd> vytvořil |
| Sestoupit o úroveň při psaní | Napiš `/` |
| Vystoupit o úroveň zpět při psaní | <kbd>Backspace</kbd> v prázdném poli |
| Přenést složky před polem do něj | <kbd>←</kbd> na jeho začátku pro jednu; <kbd>Shift</kbd>+<kbd>Home</kbd>, nebo <kbd>Home</kbd> se zavřeným seznamem, pro všechny |
| Přesunout nebo přejmenovat otevřenou poznámku | Klikni na tužku, pak procházej nebo pište jako výše |
| Přesunout na jméno, které je obsazené | Potvrď to i tak: dialog ti umožní vyměnit místa, jména nebo obojí, nebo dát souboru v cestě jiné jméno |
| Přesunout bez přejmenování | Tužka → klikni do cílové složky → vyber připnuté aktuální jméno souboru |
| Přejmenovat na místě | <kbd>F2</kbd> dvakrát (první zmáčknutí jde do inline titulku, druhé do záhlaví) |
| Přeskočit do jiného trezoru, domů nebo na disk | Klikni na jméno trezoru |
| Otevřít soubor mimo trezor | Jméno trezoru → vyber umístění → procházej → vyber soubor (jen ke čtení, dokud neklikneš na *Upravit jako text*) |
| Doplnit psané jméno | <kbd>Tab</kbd>, nebo <kbd>End</kbd> pro nabízené; <kbd>→</kbd> vezme jedno jeho písmeno |
| Vstoupit do něj, jakmile zbude jedno jméno | <kbd>Tab</kbd> znovu |
| Vrátit krok zpět, nebo opustit složku | <kbd>Shift</kbd>+<kbd>Tab</kbd> |
| Zabrat celou cestu, nebo systémovou cestu | <kbd>Tab</kbd> za konec, nebo čtyři kliknutí |
| Zkopírovat jméno, cestu, nebo systémovou cestu | Klikni pravým dvakrát; prázdné místo třikrát pro systémovou cestu |
| Dosáhnout na to, co pro tento trezor nabízí správce trezorů | Klikni pravým na ikonu na začátku řádku |
| Zkopírovat ID trezoru | Klikni pravým na ikonu na začátku řádku |
| Otevřít jiný trezor, který jsi procházel | Klikni pravým na jeho jméno na začátku řádku |
| Vidět příponu souboru na řádku | Zapni **Zobrazovat přípony souborů** v nastavení |
| Otevřít segment složky v nové kartě | <kbd>Ctrl</kbd> nebo klik prostředním tlačítkem, nebo ho přetáhni na lištu karet |
| Dosáhnout na lištu cesty z klávesnice | Přiřaď *Zaměřit lištu cesty* v Klávesových zkratkách |
| Otevřít webovou adresu nebo odkaz `obsidian://` | Napiš to do lišty a zmáčkni <kbd>Enter</kbd> |
| Zrušit cokoli | <kbd>Esc</kbd>, nebo klik mimo lištu záhlaví |
| Vyzkoušet položky, než je potvrdíš | Šipkami nebo přejezdem myší procházej seznam; <kbd>↑</kbd> nad začátek vrátí tvůj text zpět |
| Přesunout poznámku do složky nad ní | Přetáhni ji na tu složku v řádku |
| Uchovat útržek textu jako novou poznámku | Přetáhni text na složku, napiš jméno, <kbd>Enter</kbd> |
| Přidat útržek textu do poznámky, kterou čteš | Přetáhni ho na jméno poznámky, potvrď |
| Vidět zkrácené jméno složky celé | Přejeď na něj myší, nebo rozšiř panel |
| Zjistit, kde vlastní trezor leží | Přejeď myší na ikonu na začátku řádku |
| Vyjmout poznámku z trezoru | Tužka → procházej vně → potvrď dialog (odkazy se rozbijí) |
| Povolit zápis mimo trezor | Klikni na **červený zámek** v záhlaví; přepínač přejmenování zaujme jeho místo |
| Zamknout to znovu | Klikej na přepínač, dokud se zámek nevrátí — jedno zmáčknutí dovnitř, jedno ven |
| Smazat soubor mimo trezor | Otevři zámek, pak klikni pravým na soubor: *Delete* ho přesune do koše tvého systému |

## Nastavení

| Nastavení | Možnosti | Výchozí | Co dělá |
| --- | --- | --- | --- |
| **Language** | Výchozí Obsidian, nebo některý ze 46 | Výchozí Obsidian | V jakém jazyce je vlastní text tohoto pluginu. *Výchozí Obsidian* se řídí jazykem nastaveným v nastavení Vzhledu, což chce téměř každý. Samotný řádek — jeho jméno, popis a *Výchozí Obsidian* — zůstává anglicky, ať zvolíš cokoli, protože je to cesta zpět z jazyka, který nemůžeš přečíst. Řečtina a sanskrt jsou přeloženy zde a chybí ve vlastním seznamu Obsidianu, takže toto nastavení je jediný způsob, jak se k nim dostat. |
| **Alignment** | Left / Center / Right | Left | Kde v řádku záhlaví sedí řádek cesty. *Center* odpovídá klasickému vzhledu Obsidianu. |
| **Delimiter** | Jakýkoli znak | `/` | Oddělovač kreslený mezi segmenty. Šest voleb na jedno kliknutí (`/ > ▸ › \ •`) je před textovým polem. |
| **Show vault name** | Zapnuto / Vypnuto | Zapnuto | Zda je samotný trezor prvním segmentem řádku cesty. Po vypnutí se ten segment stane ikonou 🏠 místo zmizení, takže cesta stále začíná něčím klikatelným. |
| **Folder name opens the dropdown** | Zapnuto / Vypnuto | Zapnuto | Vymění, co dělá jméno složky a oddělovač za ním — viz [tabulka výše](#řádek-cesty). S pluginem [Folder notes](obsidian://show-plugin?id=folder-notes) otevírá oddělovač poznámky složek. V režimu přejmenování/přesunu se nikdy neuplatní. |
| **Show dot files** | Zapnuto / Vypnuto | Vypnuto | Zda jsou skryté soubory a složky vypsané v seznamech. Ochrana před přepsáním se uplatní tak jako tak. |
| **Show all file types** | — | — | Není to nastavení tohoto pluginu, ale Obsidianu, uvedené zde, protože odpovídá na stejnou otázku: tvůj trezor indexuje jen typy souborů, které má nařízeno, a jen to, co indexuje, může být vypsáno. Najdi ho v nastavení Obsidianu a zapni ho, aby se zobrazil každý soubor; tlačítko vedle řádku otevře tu stránku s nastavením zvýrazněným a zaostřeným ve výhledu, stejně jako by to udělalo kliknutí ve vlastním vyhledávání nastavení. Mimo trezor se neuplatní, protože tam venku není nic indexováno vůbec. |
| **Show file extensions** | Zapnuto / Vypnuto | Vypnuto | Zda jméno souboru na řádku nese svou přípony. Vypnuto, je vynechána — jako Obsidian vynechává příponu u titulku poznámky. Zapnuto, řádek pojmenovává soubor tak, jak to dělá souborový systém. Tak jako tak je přípona druhá věc, kterou se vzdá, když řádku nezbývá místo, hned po jménu trezoru. |
| **Access external files** | Zapnuto / Vypnuto | **Vypnuto** | Zda jméno trezoru otevírá seznam umístění. Vypnuto, plugin nikdy nekoukne za tento trezor. |
| **Hotkeys** | tlačítko | — | Otevře Obsidianovy *Klávesové zkratky* filtrované na tento plugin, kde lze *Zaměřit lištu cesty* přiřadit klávesu. |

## Výměna ikon

Lure vykresluje tři ikony: ikonu kořene trezoru (když je **Zobrazit název trezoru** vypnuto), přepínač přejmenování/přesunu a zámek, který stojí na jeho místě, dokud je zápis mimo trezor zamčen. Všechny lze vyměnit z tématu nebo CSS úryvku — nastav náhradní glyf a skryj vestavěný v jediném pravidle:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* Vždy zobrazen jen zamčený: otevřením předá slot přepínači přejmenování. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}
```

`--lure-icon-glyph` bere cokoli platného v CSS vlastnosti `content`, takže `url(...)` funguje pro obrázek stejně jako textový glyf nebo emodži. Nech `--lure-icon-svg` být, ať si podržíš ikonu Lucide a svůj glyf nakreslíš vedle ní.
