<!-- A docs/usage.md fordítása — állapot: commit 349b74e.
     Gépi fordítás (Claude Opus 5), anyanyelvi lektorálás nélkül. A
     bővítmény feliratai a src/lang/translations.ts fájlból, az Obsidian
     feliratai pedig az alkalmazás saját szövegeiből származnak, így
     megegyeznek azzal, amit a képernyőn látsz. -->

**Olvasd el más nyelveken:** [English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · [Čeština](usage.cs.md) · [Dansk](usage.da.md) · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · **Magyar** · [Bahasa Indonesia](usage.id.md) · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · [Norsk](usage.no.md) · [Polski](usage.pl.md) · [Português](usage.pt.md) · [Português (Brasil)](usage.pt-BR.md) · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

# Használat

[← vissza a READMÉ-hez](README.hu.md)

## Az útvonalsáv

A jegyzet teljes széfen belüli útvonala váltja fel a puszta fájlnevet a nézet fejlécében — abban a sávban, amely a lapok sora alatt van, és amelyen az előre/vissza gombok is helyet kapnak.

Ezen a soron két dologra lehet kattintani, és **A mappanév nyitja a listát** dönti el, melyik mit csinál:

| | Mappanév | Az utána álló elválasztó |
| --- | --- | --- |
| **Be** (alapértelmezett) | Kijelöli azt a mappát szerkesztésre | Megnyitja a mappát |
| **Ki** | Megnyitja a mappát | Leereszkedik abba a mappába |

A „megnyitja a mappát” azt jelenti, amit az adott szakaszra kattintás a bővítmények nélküli Obsidianban tesz. Ha nincs ott figyelő bővítmény, a mappa megjelenik az oldalsáv Fájlkezelőjében — kiemelve és kibontva, hogy látszódjék a tartalma.

Ha a [Folder notes](obsidian://show-plugin?id=folder-notes) telepítve van, ugyanez a kattintás inkább az adott mappa jegyzetét nyitja meg. Ez az egyetlen mappajegyzet-bővítmény, amelyről kiderült, hogy igényt tart a fejléc útvonalára; a [Folder Note](obsidian://show-plugin?id=folder-note-plugin) és a [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) kezel mappajegyzeteket, de nem figyeli az útvonalon történő kattintást, így azokkal az elválasztó a szokott módon mutatja meg a mappát. Lásd a [kompatibilitást](../compatibility.md#verified-against).

Egy elválasztó **csak akkor van aláhúzva, ha az előtte álló mappának tényleg van mappajegyzete**, így az aláhúzás ígéret arra, hogy van mit megnyitni. Minden elválasztó így is, úgy is kattintható marad — az aláhúzatlan megmutatja és kibontja a mappáját az oldalsávban, amit a mutató továbbra is jelez. Az aláhúzás ugyanabban a pillanatban elhagyja a mappanevet: bekapcsolt cserével a név a listát nyitja, tehát hazugság volna a jegyzethez vezető hivatkozásként megjelölni.

**Az átnevezés/áthelyezés mód mindkettőt felülírja**, bármit mond is a beállítás: amíg egy áthelyezés függőben van, a soron semmi sem nyit meg mappát, mert egy mappa megnyitása feladná az áthelyezést. A mappanevek szerkesztésre jelölődnek ki, az elválasztók pedig leereszkednek — mindkettő a célpont kiválasztásának módja —, az aláhúzás pedig eltűnik, jelezve, hogy a megnyitás fel van függesztve.

**A széf gyökere** az egyetlen szakasz, amely nem útvonalszakasz. Nincs szülője, amelyből testvéreket listázhatna, ezért helyette a [helyek listáját](#böngészés-a-széfen-kívül) nyitja meg — a többi széfedet, a saját mappát, a fájlrendszer gyökerét és a csatolt meghajtókat.

## Egy szakaszra kattintás: cseréld ki egy testvérére

Egy mappanévre kattintva **az adott mappa neve** jelölődik ki egy szövegmezőben, és megnyílik az **eggyel feljebb** lévő mappa — a szülő — listája. Gépeléssel vagy egy elem kiválasztásával ez a mappa egy testvérére cserélődik, az alatta lévő minden pedig érintetlen marad, tehát `Projektek/2026/Indulás.md` → kattints a `2026`-ra → válaszd a `2025`-öt, és `Projektek/2025/Indulás.md` lesz belőle.

**A jegyzet nevére** kattintva ugyanígy működik a saját mappájával szemben, és a fájlnevet **a kiterjesztéssel együtt** jelöli ki — egy jegyzet átnevezése vagy átirányítása általában azt is megváltoztatja.

A mappára kattintás már kijelölt egy szakaszt, így **még egy kattintás** az egész sorra tágítja a kijelölést — arra a mappára *és* mindenre alatta —, és a gépelés ekkor egy csapásra lecseréli az útvonal többi részét. Navigációs és átnevezés/áthelyezés módban egyaránt így működik.

Ez csak a mezőt megnyitó kattintás folytatásaként érvényes. Amint egyszer használtad a mezőt, úgy viselkedik, mint bármely más szövegmező: a kattintás elhelyezi a kurzort, a dupla kattintás egy szót, a hármas a sort jelöli ki.

Az útvonal többi része mindkét esetben látható marad a mező körül, előtte címkékként, utána kijelöletlen szövegként, így a teljes útvonal sosem tűnik el a fejlécből. Gépelj a kijelölés felülírásához, vagy nyomd meg az <kbd>End</kbd> / <kbd>→</kbd> billentyűt, hogy megtartsd, és onnan szerkessz tovább. A lista attól függetlenül a teljes mappát mutatja, hogy mi van előre kitöltve; csak akkor kezd szűrni, ha tényleg gépelsz.

## Leereszkedés az elválasztóval

Egy elválasztóra kattintva (**A mappanév nyitja a listát** kikapcsolva) leereszkedsz az előtte álló mappába: a lista *annak* a mappának a tartalmát sorolja fel, az útvonal többi része pedig kijelölve nyílik meg a mezőben. Egy mappa kiválasztása hozzáfűzi azt az útvonalhoz, és azonnal megnyitja a következő listát, így végigkattinthatod magad egy fán anélkül, hogy elhagynád a fejléc sorát.

## A lista sorai valódi fájlkezelő-sorok

A lista minden fájlja és mappája úgy viselkedik, mint a Fájlkezelőben lévő sora:

- **Jobb kattintás** ugyanahhoz a helyi menühöz — mappán *Új jegyzet* / *Új mappa*, fájlon *Megnyitás új lapon* / *Átnevezés…* / *Törlés* —, beleértve azokat a tételeket is, amelyeket más bővítmények adnak a fájlmenükhöz.
- **Húzd** az elemet bárhová, ahol az Obsidian fájlt fogad: egy szerkesztőbe hivatkozás beszúrásához, a Fájlkezelő egy mappájára áthelyezéshez, a lapsávra megnyitáshoz.

A menük szövege az Obsidian saját fordításaiból származik, így minden nyelven illeszkedik az alkalmazás többi részéhez.

## Útvonal beírása

- Az útvonal előtti vagy utáni **üres helyre** kattintva megnyílik egy szövegmező, amelyben a teljes útvonal előre ki van töltve és teljesen ki van jelölve — írd felül, vagy szerkeszd helyben. (Magára a fájlnévre kattintva csak a fájlnév jelölődik ki; lásd fentebb.)
- Ha akkor kezdesz gépelni, amikor az útvonal látszik, az utolsó szakasz kis mezővé alakul, a jelenlegi mappára szűkített élő automatikus kiegészítéssel.
- A `/` véglegesíti az aktuális szakaszt, és leereszkedik bele.
- Üres mezőben a <kbd>Backspace</kbd> visszalép a szülőmappához, és a kurzort a végére téve újranyitja annak nevét.
- Az <kbd>Enter</kbd> véglegesít; az <kbd>Esc</kbd> vagy egy máshová történő kattintás megszakítja, és visszaáll a fájl valódi útvonalára.

A mezőn nincs semmi dísz — se doboz, se keret —, így magának az útvonal szövegének olvasható, és gépelés közben magától nő.

## A navigáció sosem nyúl a megnyitott fájlhoz

Az alapértelmezett (navigációs) módban a megnyitott jegyzet **sosem** kerül átnevezésre vagy áthelyezésre.

- A létező fájlra mutató útvonal megnyitja azt.
- A még nem létező útvonal megkérdezi: *„Létrehozod az új fájlt?”*. A megerősítés létrehozza a hiányzó szülőmappákat és a fájlt; a megszakítás egyáltalán semmit sem tesz.

## <kbd>Ctrl</kbd> — új lap, és másolás áthelyezés helyett

Ha a <kbd>Ctrl</kbd> (macOS-en <kbd>Cmd</kbd>) billentyűt nyomva tartod, miközben fájlt választasz a listából, vagy miközben egy útvonalon <kbd>Enter</kbd>-t nyomsz, az eredmény **új lapra** kerül e helyett:

| | Egyszerűen | <kbd>Ctrl</kbd>-lal |
| --- | --- | --- |
| Létező fájl kiválasztása vagy beírása | Itt nyílik meg | Új lapon nyílik meg |
| Nem létező útvonal beírása | Rákérdez, majd itt nyitja meg | Rákérdez, majd új lapon nyitja meg |
| Útvonal véglegesítése átnevezés/áthelyezés módban | **Áthelyezi** oda a jegyzetet | Oda **másolja**, és a másolatot új lapon nyitja meg |

A módosítót az Obsidian saját szabálya olvassa, így pontosan úgy viselkedik, mint egy hivatkozáson vagy a Fájlkezelő egy során — a középső kattintás szintén „új lapot” jelent, a <kbd>Ctrl</kbd>+<kbd>Alt</kbd> osztást, a <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> pedig új ablakot.

A másolás ugyanúgy megtagadja a felülírást, mint az áthelyezés — beleértve a jegyzet saját útvonalát is, ahol nincs mit értelmesen másolni.

## Böngészés a széfen kívül

**Ez alapból ki van kapcsolva.** Előbb kapcsold be a **Külső fájlok elérése** beállítást — a széfen kívüli olvasás és írás az egyetlen dolog, amit ez a bővítmény megtesz, és amit az Obsidian maga nem, ezért olyasmi, amire rábólintasz, nem pedig amiről leiratkozol. Kikapcsolva a széf neve egyszerűen megmutatja a széfedet a Fájlkezelőben, és itt semmi sem néz soha azon túlra.

A **széf nevére** kattintva (vagy a 🏠 ikonra, ha a *Tároló nevének megjelenítése* ki van kapcsolva) helyek listája nyílik meg, nem tartalom:

- **A többi széfed**, az Obsidian saját nyilvántartásából olvasva, a legutóbb megnyitottak elöl, mindegyik az Obsidian saját széfikonja alatt — azzal, amit az alkalmazás maga használ a széfparancsokhoz. A már megnyitott széf helyette házat kap: alapból onnan indul a sor, nem pedig oda kell menni.
- **A saját mappa**, a saját fióknév alatt, egy `~` jellel megjelölve. A Lucide-ban nincs hullámvonal, ezért ezt a bővítmény rajzolja meg a Lucide saját 24×24-es rácsán, ugyanazzal a vonalvastagsággal — a készletből hiányzó ikonként, nem pedig ikonok közé ültetett szöveges karakterként.
- **A fájlrendszer gyökere**, `root` felirattal — lefordítatlanul, mert minden rendszeren ez a neve — a `/` helyett, amely az utána következő elválasztó mellett üres lépésnek olvasódna.
- **A csatolt meghajtók**, típusonkénti ikonnal ott, ahol ezt olcsó megállapítani: a hálózati megosztások, az optikai lemezek, a hajlékonylemezek és a cserélhető adathordozók sajátot kapnak; minden más általánosat. Windowson a meghajtók `C:` alakban, általános ikonnal jelennek meg — a kötetnevekhez és a pontos típusokhoz WMI kellene, amit szándékosan nem használunk.

Egy másik széf kiválasztása **nem vált át rá az Obsidianban.** Minden nyitva marad, ami nyitva van; az útvonalsáv egyszerűen ott kezd böngészni. Épp ez az értelme annak, hogy az útvonalsávon van, és nem az oldalsáv széfváltójára van bízva.

### Amíg kint vagy

Az útvonal **a kiválasztott helyről indul**, nem a gép könyvtárszerkezetéből — válaszd az `Archívum`-ot, és a sor így szól: `Archívum / jegyzetek / …`, nem pedig `/home/te/Széfek/Archívum/jegyzetek/…`. A kezdő szakasz ikont visel arról, hogy mi az (széf, saját mappa, meghajtó), a <kbd>Backspace</kbd> pedig ott megáll, ahelyett hogy tovább sétálna fölfelé a fájlrendszer többi részébe. Ha a *Tároló nevének megjelenítése* ki van kapcsolva, az a szakasz csupán az ikon — a beállítás a sor kezdő szakaszáról szól, bármelyik széfet nevezze is meg, nem csak a sajátodról.

Az útvonalsáv **a hibaszínnel van keretezve** — ugyanazzal a gyűrűvel, amit az átnevezés mód rajzol —, ameddig a széfeden kívülre mutat. Ez tartós állapotot jelöl, nem pillanatot: ameddig ott van, az Obsidian saját kezelései közül egyik sem vonatkozik arra, amit a sor mutat, és az írás zárolva marad, amíg mást nem mondasz.

Egyébként a böngészés úgy működik, mint bent: címkék, elválasztók, gépelés, automatikus kiegészítés, kilépéshez <kbd>Backspace</kbd>. Ugyanazok a láthatósági szabályok is érvényesek, tehát a nem támogatott kiterjesztésekhez továbbra is kell az Obsidian *Minden fájlkiterjesztés észlelése* beállítása, a rejtett fájlokhoz pedig továbbra is e bővítmény beállítása.

**A jobb kattintás és a húzás** odakint nem működik — azok a Fájlkezelő saját kezelői, és olyan fájlra van szükségük, amelyet a széf ismer.

### Írás a széfen kívülre

Minden, ami ír, **alapból zárolva van.** Egy **lakat** jelenik meg a fejlécben az átnevezés gomb mellett, ameddig a sor a széfeden kívülre mutat; megnyomva kinyílik a zár, és pirossá válik, illeszkedve a sor körüli gyűrűhöz.

Az engedély **egy helynek szól, nem egy pillanatnak**: túléli mindazt, amit egy helyen dolgozva tennél — egy áthelyezés befejezését, a mezőről elkattintást, egy fájl megnyitását —, és akkor ér véget, amikor a listából másik széfet, meghajtót vagy gyökeret választasz, amikor a sor visszatér egy széfbeli fájlhoz, vagy amikor újra megnyomod a lakatot. Így egy mappán belüli áthelyezés-sorozat egy megnyomásba kerül, nem fájlonként egybe.

Nyitott lakattal az útvonalsáv odakint is úgy viselkedik, ahogy bent:

| Művelet | Eredmény |
| --- | --- |
| Írj be egy nem létező nevet, <kbd>Enter</kbd> | Ugyanaz a „létrehozzuk?” kérdés, mint bent; a hiányzó szülőmappák is létrejönnek. A kiterjesztés nélküli névből `.md` lesz, pontosan úgy, mint bent |
| Átnevezés/áthelyezés mód, írj be új nevet | Átnevezi azt a fájlt, amit a sor mutat. A kiterjesztés nélküli név megtartja a fájl sajátját — idekint egy mappa mindenféle fájlt tartalmaz, és egy átnevezés nem változtathat csendben `.png`-t `.md`-vé |
| Átnevezés/áthelyezés mód, böngéssz máshová, válaszd a **tartsd meg ezt a nevet** elemet | Odahelyezi a jelenlegi nevén |
| Tartsd nyomva a <kbd>Ctrl</kbd>-t bármelyiknél | Áthelyezés helyett másol, és a másolatot új lapon nyitja meg |

Zárolt állapotban mindezek megtörténés helyett jelentik, mi akadályozza őket. Egyik állapotban sem íródik felül soha semmi: a már létező célpontot elutasítja, és az elutasítás magának a fájlrendszernek a dolga (`COPYFILE_EXCL`, kizárólagos létrehozás), nem pedig olyan ellenőrzés, amely versenyhelyzetben alulmaradhat. A fájlrendszerek közötti áthelyezés — USB-kulcsról, hálózati megosztásról — a másolás-majd-törlés megoldásra vált vissza, és az eredetit csak azután távolítja el, hogy a másolat megérkezett.

**Egyvalamit a lakat nem old fel: egy jegyzet áthelyezését a széfeden *kívülre*.** A `fileManager` nem tud fájlt követni ezen a határon át, így minden, a jegyzetre mutató hivatkozás csendben eltörne, az Obsidian pedig egyszerűen csak eltűnni látná. A <kbd>Ctrl</kbd> nyomva tartása helyette kimásolja, amivel ez a gond egyáltalán nem áll fenn, és az értesítés ezt meg is mondja. A másik irány — egy kinti fájl *behozása* a széfbe — szintén nincs még bekötve.

### Külső fájl megnyitása

Az Obsidian szerkesztője csak a széfen belüli fájlokkal működik, így egy külső fájlt **nem lehet** valódi jegyzetként, hivatkozásokkal, visszahivatkozásokkal és a többivel megnyitni — ez az alkalmazás korlátja, nem a bővítményé. Egy ilyet kiválasztva helyette **előnézet** nyílik meg, csak olvashatóan, amíg mást nem mondasz:

| Típus | Így jelenik meg |
| --- | --- |
| `.md`, `.markdown` | Megjelenített Markdown |
| Képek, hang, videó, PDF | Beépített lejátszó/megjelenítő |
| Bármely más **szöveges** fájl (`.json`, `.css`, `.log`, `.txt`, …) | Szó szerinti egyszerű szöveg |
| Megjelenítő nélküli bináris formátumok | A *Megnyitás külsőleg* kapja meg |

A megjelenítőnek két olvasata van egy fájlról, és mivel ezek kizárják egymást, csak az látszik, amelyikre **átváltanál**:

| | Mit tesz | Alapértelmezett ehhez |
| --- | --- | --- |
| **Megtekintés Markdownként** | Jegyzetként jeleníti meg a fájlt, csak olvashatóan | `.md`, `.markdown` |
| **Szerkesztés szövegként** | A forrás, szerkeszthetően | minden más |

A széfen kívül a **Szerkesztés szövegként** az a megnyomás is, amely feloldja a csak olvasható állapotot — a mód és az engedély egyetlen mozdulat, nem két végiggondolandó gomb. **Valahányszor a megnyomás feloldaná a csak olvashatót**, pirosas árnyalatot kap, akár helyben élesíted a szerkesztést, akár egyenesen a megjelenített nézetből érkezel; a széfen belül nincs mit feloldani, ott tehát egyszerű marad. A **Megtekintés Markdownként** halvány kiemelőszínt kap — ugyanazt az árnyalatot, amit az Obsidian a kijelölt szövegnek ad —, ami visszaútként jelöli meg, nem cselekvésre hívásként.

Mivel a gomb a *szerkesztést* követi, nem a nyers módot, a szövegnézetben csak olvashatóan álló fájl is felkínálja a **Szerkesztés szövegként** lehetőséget: épp ez a megnyomás élesíti. Az a fájl, amelybe soha nem lehet írni — csonkított vagy olvashatatlan —, helyette **Megtekintés szövegként** feliratot mutat, mert a megnyomás csak ennyit tud adni.

Az alapértelmezések a hasznos, nem a betű szerinti irányba állnak: egy héjszkriptben a `#` megjegyzés, nem címsor, tehát egy `.log` Markdownként való megjelenítése csendben elnyelné. Mindkét alapértelmezés fájlonként felülbírálható, és a választás bekerül a lap előzményeibe, így az előre/vissza és az újranyitott munkaterület megőrzi — rengeteg jegyzet lakik `.txt` fájlokban, és rengeteg `.md` fájlt könnyebb forrásként olvasni.

**A széfedben lévő fájlok azonnal szerkeszthetők**, feloldás nélkül: a *Szerkesztés szövegként* valódi szerkesztő, és gépelés közben visszaír.

**A szerkesztést a váltáson át megjegyzi.** A *Megtekintés Markdownként* nézetre váltás felfüggeszti — egy statikus megjelenítésbe nincs mibe gépelni, az élő előnézetnek pedig az Obsidian saját szerkesztője kell, amely csak a széfen belüli fájlokhoz létezik —, így semmi sem állítja, hogy szerkesztenél, amíg ott vagy. A *Szerkesztés szövegként* nézetre visszatérve ott folytatod, ahol abbahagytad.

**A széfen kívüli fájlok csak olvashatóan nyílnak meg, és ezt a *Szerkesztés szövegként* oldja fel.** A megnyomás maga az egész kapu: amíg meg nem történik, odakint semmi sem íródik. Utána a fájl gépelés közben mentődik, pontosan úgy, mint egy széfbeli; az állapotsor pedig lakatból ceruzává változik. A feloldás arra az egy fájlra vonatkozik azon az egy lapon — másik fájlra lépve újra zárolódik —, és szándékosan nem kerül a lap előzményeibe, így egy újranyitott munkaterület sosem tér vissza úgy, hogy egy rendszerfájlon már élesítve van az írás, amelynek megnyitására nem is emlékszel.

**A csonkított fájlok mindenképp csak olvashatók maradnak** — a képernyőn lévő mentése eldobná mindazt, ami a korláton túl van, ezért a gomb egyáltalán meg sem jelenik, ahelyett hogy megjelenne és elutasítana. Ugyanez áll az olvashatatlan fájlra: egy üres ablaktáblán kívül nincs mit visszaírni.

Ha az írás meghiúsul — csak olvasható csatolás, nem a tiéd a fájl —, a rendszer saját indoka jelenik meg egy értesítésben.

A nagyon nagy fájlok csonkítva jelennek meg, és az állapotsor ezt ki is mondja, ahelyett hogy rád bízná a felfedezését — a többi feltétel mellett, nem a gombok mögött, hiszen ez is tény a fájlról, mint a többi. A korlátokat valódi megjelenítőn mérték, nem találgatták — egy megabájtnyi szöveg egy ablaktáblába tördelése egyenesen megöli az Obsidian megjelenítőfolyamatát, a Markdown pedig bájtonként többszörösébe kerül, mint az egyszerű szöveg, így a kettőnek külön korlátja van, és egyetlen hatalmas sor akkor is rövidül, ha a fájl egésze kicsi.

**Az állapotsorok címkék, a magyarázat pedig buboréksúgó.** Minden sor annyi szóval mondja meg, mi igaz, amennyi épp kell — *A széfen kívül*, *Nincs szerkesztő ehhez a fájltípushoz*, *Csonkítva — túl nagy fájl* —, mert a mellettük lévő gombok már megmondják, milyen állapotban van a fájl. Fölé húzva az egérmutatót megkapod a mondatot: miért nem tudja az Obsidian jegyzetként megnyitni, mi történne egyébként ezzel a fájltípussal, mibe kerül neked a csonkítás.

Ez a széfeden **belüli** fájlokra is áll. Az Obsidian minden olyan kiterjesztést, amelyhez nincs nézete, egyenesen az asztal alapértelmezett alkalmazásának ad át — így egy `.txt` vagy `.json` a széfedben teljesen kivinne az Obsidianból. Ezek most ugyanabban a megjelenítőben nyílnak meg, a narancs gyűrűvel, hiszen „nyisd meg az Obsidianban” volt a kérésed — és széfbeli fájlok lévén ott mindenféle feloldás nélkül szerkeszthetők. A megjelenítő nélküli bináris fájlok megtartják az Obsidian viselkedését; nincs mit mutatni.

Az előnézet **abban a lapban** nyílik meg, amelyikben voltál, így az előre/vissza visszavisz ahhoz a jegyzethez, ahonnan jöttél; tartsd nyomva a <kbd>Ctrl</kbd>-t új lapért, mint mindenütt. A fejlécsáv továbbra is a külső fájl útvonalát mutatja, amíg az nyitva van, így onnan tovább böngészhetsz.

Egy csendes sor a tartalom fölött kínálja a kijáratokat:

- **Megnyitás itt: *(széf)*** — akkor jelenik meg, ha a fájl az egyik másik széfedhez tartozik. Átadja az Obsidian saját URI-kezelőjének, amely megnyitja annak a széfnek az ablakát a jegyzettel benne, valódi, szerkeszthető jegyzetként. Ez az ablak pontosan úgy marad, ahogy volt; semmi sem vált át alattad.
- **Megtekintés Markdownként** / **Szerkesztés szövegként** — a két olvasat; a második a széfen kívül a csak olvashatót is feloldja.
- **Megnyitás külsőleg** — átadja a fájlt az asztalod alapértelmezett alkalmazásának, beleértve azokat a bináris formátumokat is, amelyeket ez a megjelenítő nem tud mutatni.

A széfeden kívül semmi sem íródik, hacsak előbb meg nem nyomod a *Szerkesztés szövegként* gombot. A teljes tájékoztatásért lásd a README [A széfen kívül](README.hu.md#a-széfen-kívül) szakaszát.

## A két figyelmeztető szín

| | Mikor | Mit jelent |
| --- | --- | --- |
| **Piros** gyűrű az útvonalsávon | A sor a széfeden kívülre mutat | Az Obsidian nem tudja jegyzetként megnyitni, ami ott van, és odakint semmi sem íródik, amíg ki nem nyitod a lakatot. |
| **Narancs** gyűrű az útvonalsávon, narancs elemek a listában | A fájl olyan szöveges típus, amelyhez az Obsidiannak nincs nézete | Óvatosságra intés. Az Obsidian átadná az asztalod alapértelmezett alkalmazásának; a bővítmény helyette megmutatja. |

**A kettő független egymástól, és egyszerre is fennállhatnak** — egy külső `.json` a széfeden kívül van, *és* olyan típusú, amelyhez az Obsidiannak nincs szerkesztője. A megjelenítőben külön sorokként jelennek meg, mindegyik csak a saját tényét mondja ki. Az útvonalsávon a piros nyer, ahol mindkettő áll, mert két gyűrű csak zaj volna.

A narancs szint szándékosan szűk. A regisztrált típusokat (Markdown, canvas, képek, PDF, hang, videó) rendesen kezeli, azok semmit sem kapnak. A bináris fájlok sem kapnak semmit — nem fogsz véletlenül összeszerkeszteni egy `.zip`-et. Ami marad, pontosan a veszély: egy `.json`, `.css` vagy `.log`, amelyet a **Minden fájlkiterjesztés észlelése** tett láthatóvá.

A piros nyer ott, ahol mindkettő állna; két gyűrű egyszerre csak zaj volna.

## Átnevezés/áthelyezés mód

A fejléc jobb szélén lévő ceruzagomb — a nézetmód gomb mellett, a beépített gombokkal azonos méretben — kapcsolja az átnevezés/áthelyezés módot. A fejléc sora ekkor a kiemelőszínbe kerül keretbe, pontosan úgy, mint a Fájlkezelőben történő átnevezéskor. Ugyanazok a kattintások és billentyűleütések most az Obsidian `fileManager.renameFile` hívásán át véglegesítenek egy áthelyezést vagy átnevezést, így a jegyzetre mutató összes hivatkozás követi.

Átnevezés közben:

- Az aktuális fájlnév minden mappa listájába rögzítve van, így egy jegyzet átnevezés nélküli áthelyezése egyetlen kattintás.
- A célmappában már foglalt nevek elhalványulnak, de továbbra is kiválaszthatók.
- A bevitelt élőben ellenőrzi az Obsidian saját átnevezési szabályai szerint — ugyanazok a karakterkészletek, ugyanazok az üzenetek, ugyanaz a piros buboréksúgó, amit a fájlfában történő átnevezéskor kapsz —, így a szabálytalan vagy ütköző név gépelés közben megjelölődik, és nem véglegesíthető.
- A fejlécsávon kívülre kattintás, vagy ha a fejléc elveszti a fókuszt, befejezi az átnevezés módot.

## Egyetlen billentyű mindkét átnevezéshez

Az átnevezés parancs (alapból <kbd>F2</kbd>, vagy amire átállítottad) **felváltva** hívja az Obsidian beágyazott címének átnevezését és e bővítmény fejléc-útvonalsávját a teljes útvonal kijelölésével. Ha kikapcsoltad az Obsidian beágyazott címét, a fejléc-útvonalsáv lesz az egyetlen célpont, így a billentyű sosem marad hatástalan.

Ez úgy működik, hogy a `workspace:edit-file-title` parancsot burkolja be, nem pedig elkapja a billentyűt, így a gyorsbillentyű átállítása és a parancs parancspalettából való futtatása is változatlanul működik.

## Hogyan színeződnek a lista sorai

| Szín | Jelentés |
| --- | --- |
| **Lila** | Jegyzet (`.md`, `.markdown`) — amit az Obsidian jegyzetként fog megnyitni, kiemelve egy vegyes tartalmú mappából |
| **Narancs** | Szöveges típus, amelyhez az Obsidiannak nincs nézete; lásd [a figyelmeztető színeket](#a-két-figyelmeztető-szín) |
| **Halvány** | A széfeden kívül, tehát a széf saját kezelése nem érvényes |
| **Kék** | A jegyzet, amelyben vagy. Böngészés közben a saját eleme; átnevezés/áthelyezés módban a *tartsd meg ezt a nevet* elem áll a helyén — mindkét esetben ugyanaz a jegyzet |
| **Szürkített** | Csak átnevezés/áthelyezés módban: a név foglalt. Továbbra is kiválasztható — kiválasztva kitölti a mezőt, ahol az ellenőrzés megjelöli az ütközést |

## Láthatósági szabályok

- A nem támogatott kiterjesztésű fájlok csak akkor jelennek meg a listákban, ha az Obsidian **Minden fájlkiterjesztés észlelése** beállítása be van kapcsolva.
- A lista legfeljebb 100 elemet mutat — ez az Obsidian saját korlátja. Ha egy mappában több van, az utolsó sor megmondja, hány maradt ki; gépelj tovább a szűkítéshez.
- A rejtett fájlok és mappák csak akkor jelennek meg, ha e bővítmény **Rejtett fájlok megjelenítése** beállítása be van kapcsolva.
- **A felülírás elleni védelem a láthatóságtól függetlenül ugyanúgy működik** — egy rejtett fájl továbbra is megakadályozza, hogy felülírd.

## Puskázó

| Ha azt szeretnéd… | Tedd ezt |
| --- | --- |
| Megnyitni egy mappát (a jegyzetét, vagy megmutatni) | Kattints az adott mappa **utáni** elválasztóra |
| Kicserélni egy mappát a testvérére | Kattints az adott mappa nevére, aztán gépelj vagy válassz |
| Átnevezni vagy átirányítani a jegyzetet | Kattints a jegyzet nevére — kiterjesztéssel együtt |
| Böngészni egy mappa tartalmát | Kattints az adott mappa nevére; a lista a szülőjét mutatja, ezért a kívánt mappa **alatti** mappára kattints |
| Újraírni egy mappát és mindent alatta | **Kattints duplán** az adott mappa nevére, aztán gépelj |
| Szerkeszteni az útvonalat egy mappától lefelé | Kattints az adott mappa nevére, majd <kbd>End</kbd> vagy <kbd>→</kbd> a kijelölés megszüntetéséhez |
| Egy fájlra ugrani az útvonala beírásával | Kattints a fájlnévre vagy az üres helyre, gépelj, <kbd>Enter</kbd> |
| Inkább új lapon megnyitni egy fájlt | <kbd>Ctrl</kbd> a kiválasztás közben, vagy <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| A jegyzetet áthelyezés helyett valahová másolni | Ceruza, majd <kbd>Ctrl</kbd> a célpont kiválasztásakor vagy véglegesítésekor |
| Jegyzetet létrehozni egy nem létező útvonalon | Írd be az útvonalat, <kbd>Enter</kbd>, hagyd jóvá a kérdést |
| Egy szinttel lejjebb menni gépelés közben | Írj `/` jelet |
| Egy szinttel feljebb menni gépelés közben | <kbd>Backspace</kbd> az üres mezőben |
| Áthelyezni vagy átnevezni a megnyitott jegyzetet | Kattints a ceruzára, aztán böngéssz vagy gépelj a fentiek szerint |
| Áthelyezni átnevezés nélkül | Ceruza → kattints be a célmappába → válaszd a rögzített aktuális fájlnevet |
| Helyben átnevezni | Kétszer <kbd>F2</kbd> (az első a beágyazott címre megy, a második a fejlécre) |
| Másik széfre, a saját mappára vagy egy meghajtóra ugrani | Kattints a széf nevére |
| Megnyitni egy fájlt a széfen kívülről | Széf neve → válassz helyet → böngéssz → válaszd ki a fájlt (csak olvasható a *Szerkesztés szövegként* megnyomásáig) |
| Megszakítani bármit | <kbd>Esc</kbd>, vagy kattints a fejlécsávon kívülre |

## Beállítások

| Beállítás | Lehetőségek | Alapértelmezett | Mit tesz |
| --- | --- | --- | --- |
| **Igazítás** | Balra / Középre / Jobbra | Balra | Hol ül az útvonal a fejléc sorában. A *Középre* az Obsidian klasszikus megjelenéséhez illik. |
| **Elválasztó** | Bármely karakter | `/` | A szakaszok közé rajzolt elválasztó. Hat egykattintásos előbeállítás (`/ > ▸ › \ •`) áll a szövegmező előtt. |
| **Tároló nevének megjelenítése** | Be / Ki | Be | A széf maga az útvonal első szakasza-e. Kikapcsolva az a szakasz eltűnés helyett 🏠 ikonná válik, így az útvonal továbbra is kattintható helyen kezdődik. |
| **A mappanév nyitja a listát** | Be / Ki | Be | Felcseréli, mit tesz a mappanév és az utána álló elválasztó — lásd [a fenti táblázatot](#az-útvonalsáv). A [Folder notes](obsidian://show-plugin?id=folder-notes) mellett az elválasztó mappajegyzeteket nyit. Átnevezés/áthelyezés módban sosem érvényes. |
| **Rejtett fájlok megjelenítése** | Be / Ki | Ki | Szerepelnek-e a rejtett fájlok és mappák a listákban. A felülírás elleni védelem mindenképp érvényes. |
| **Külső fájlok elérése** | Be / Ki | **Ki** | Megnyitja-e a széf neve a helyek listáját. Kikapcsolva a bővítményben semmi sem néz soha e széfen túlra. |

## Az ikonok cseréje

A Lure három ikont rajzol: a széf gyökerének ikonját (amikor a **Tároló nevének megjelenítése** ki van kapcsolva), az átnevezés/áthelyezés kapcsolót, és a lakatot, amely a széfen kívüli írást őrzi. Mindegyik lecserélhető témából vagy CSS-részletből — állítsd be a helyettesítő írásjelet, és rejtsd el a mellékeltet egyetlen szabályban:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* A lakatnak két állapota van; az `.is-active` a nyitott. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}

.lure-unlock-btn.is-active {
	--lure-icon-glyph: "🔓";
}
```

A `--lure-icon-glyph` bármit elfogad, ami a CSS `content` értékeként érvényes, így az `url(...)` ugyanúgy működik képhez, mint szöveges vagy emodzsi írásjelhez. Hagyd békén a `--lure-icon-svg` értékét, ha meg akarod tartani a Lucide-ikont, és mellé akarod rajzolni a sajátodat.
