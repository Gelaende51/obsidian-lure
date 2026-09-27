<!-- A docs/usage.md fordítása — állapot: commit 94b1372.
     Gépi fordítás (Claude Sonnet 5), anyanyelvi lektorálás nélkül. A
     bővítmény feliratai a src/lang/translations.ts fájlból, az Obsidian
     feliratai pedig az alkalmazás saját szövegeiből származnak, így
     megegyeznek azzal, amit a képernyőn látsz. -->

[English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · [Čeština](usage.cs.md) · [Dansk](usage.da.md) · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · **Magyar** · [Bahasa Indonesia](usage.id.md) · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · [Norsk](usage.no.md) · [Polski](usage.pl.md) · [Português](usage.pt.md) · [Português (Brasil)](usage.pt-BR.md) · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

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

Ahol a mappa jegyzete épp az, amit már olvasol, ott a kattintás inkább a mappát tárja fel — nincs mit megnyitni, ami ne lenne már a képernyőn, és ezt jelentette mindig is a második kattintás.

Ha a [Folder notes](obsidian://show-plugin?id=folder-notes) telepítve van, ugyanaz a kattintás **bármilyen mélységben** inkább annak a mappának a jegyzetét nyitja meg: a jegyzetet itt a bővítmény saját konvenciója alapján oldjuk fel, ahelyett hogy rábíznánk a válaszadást. Az a bővítmény csak azokat a mappákat ismeri fel, amelyeket megjelölt, ami egy egynél mélyebb útvonalon egyik sem, így az a kattintás, amely egy legfelső szintű mappa jegyzetét nyitotta meg, mélyebben eddig semmit sem csinált. A másik két mappajegyzet-bővítmény nem tesz közzé olvasható konvenciót, és sosem foglalja el a sort, így ezeknél az elválasztó a mappát tárja fel, ahogy mindig is tette. Ez az egyetlen mappajegyzet-bővítmény, amelyről kiderült, hogy lefoglalja a fejléc útvonalát; a [Folder Note](obsidian://show-plugin?id=folder-note-plugin) és a [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) kezeli a mappajegyzeteket, de nem figyeli az útvonalsávra kattintást, így ezeknél az elválasztó a szokásos módon tárja fel a mappát. Lásd a [kompatibilitást](../compatibility.md#verified-against).

Egy elválasztó **csak akkor van aláhúzva, ha az előtte álló mappának valóban van mappajegyzete**, tehát az aláhúzás ígéret arra, hogy van mit megnyitni — bármilyen mélységben, ha a [Folder notes](obsidian://show-plugin?id=folder-notes) fut, mivel a jegyzetet itt oldjuk fel ahelyett, hogy a bővítményre bíznánk a jelölést. Ahol nem ez a bővítmény fut, semmi sincs aláhúzva, és semmi sem nyílik meg: az elválasztó feltár, ahogy mappajegyzet-bővítmény nélkül is tenné. Minden elválasztó kattintható marad mindkét esetben — az aláhúzás nélküli is feltárja és kibontja a mappáját az oldalsávban, amit a mutató kurzora továbbra is jelez. Az aláhúzás egyúttal lekerül a mappanévről is: ha a csere be van kapcsolva, a név nyitja a listát, így azt jelölni meg a jegyzethez vezető hivatkozásként hazugság volna.

**Az átnevezés/áthelyezés mód mindkettőt felülírja**, bármit mond is a beállítás: amíg egy áthelyezés függőben van, a soron semmi sem nyit meg mappát, mert egy mappa megnyitása feladná az áthelyezést. A mappanevek szerkesztésre jelölődnek ki, az elválasztók pedig leereszkednek — mindkettő a célpont kiválasztásának módja —, az aláhúzás pedig eltűnik, jelezve, hogy a megnyitás fel van függesztve.

**A széf gyökere** az egyetlen szakasz, amely nem útvonalszakasz. Nincs szülője, amelyből testvéreket listázhatna, ezért helyette a [helyek listáját](#böngészés-a-széfen-kívül) nyitja meg — a többi széfedet, a saját mappát, a fájlrendszer gyökerét és a csatolt meghajtókat.

## A széf saját elválasztója

A széf neve utáni elválasztó nem egy mappát, hanem magát a széfet jelöli, ezért olyat tud, amit egyetlen másik elválasztó sem:

| | Első kattintás | Következő kattintás |
| --- | --- | --- |
| **Kezdőlap-bővítménnyel** (egy oldal, amely az Obsidian megnyitásakor fogad) | Megnyitja azt az oldalt ebben a panelben | Elrejti a fájlfát |
| **Nélküle** | Elrejti a fájlfát | Pontosan visszaállítja, ami nyitva volt |

Sima kattintások, nem dupla kattintás: ha az oldal már nyitva van, az elválasztónak nincs több mit megnyitnia, így a következő nyomás a becsukás — bármennyi idő telik is el addig.

**Aláhúzott**, ha van megnyitható kezdőoldal, ami ugyanaz az ígéret, mint egy mappa elválasztójáé: van ott valami. A becsukás egy kapcsoló — a következő nyomás visszaállítja a nyitva volt mappákat, és csakis azokat, így egy elrendezett fastruktúrát nem veszítesz el egy másik dologra vetett pillantás miatt.

## Panel fájl nélkül

Egy üres lap, a gráf, és bármi más, ami nem nevez meg fájlt, saját sort kap: a széf, majd egy szakasz, amely megmondja, mit tartalmaz a panel.

```
my-vault / :blank      egy új lap
my-vault / :graph      a gráf, helyi vagy globális
my-vault / :<type>     bármi más fájl nélkül
```

**A széf gyökerének saját listája** is felkínálja ezeket az oldalakat, a benne ténylegesen meglévő mappák és jegyzetek alatt: válaszd ott a `:graph`-ot vagy a `:search`-ot, és a panel megnyitja azt a nézetet, pontosan úgy, ahogy egy jegyzet kiválasztása megnyitja a jegyzetet. Hogy mely oldalak léteznek, azt az Obsidianból olvassuk ki, nem itt van rögzítve — minden nézet, amely nem fájl megjelenítésére létezik, tehát egy olyan bővítmény, amely regisztrál egyet (egy kezdőlap, egy naptár), megjelenik anélkül, hogy ez a bővítmény bármit tudna róla. A fájlt igénylő nézetek — Markdown, PDF, képek, vászonjegyzetek, adatbázisok — nincsenek felkínálva: nincs mit mutatniuk.

A kettőspont a lényeg — egyetlen fájlt vagy mappát sem hívhatnak `:graph`-nak, így a sor nem téveszthető össze egy megnyitható útvonallal. A címke a nézettípusból származik, nem az Obsidian saját szövegezéséből, így ugyanúgy olvasható, bármi is a felület nyelve, és a záró `-view` lemarad: egy kezdőlap-bővítmény `home-launcher-view` néven regisztrálja a nézetét, a sor pedig `:home-launcher`-t ír.

Az üres területre vagy magára a címkére kattintva **megnyílik a mező a széf gyökerénél**: gépelj be egy útvonalat, és az <kbd>Enter</kbd> megnyitja ugyanabban a panelben, ugyanazzal a kiegészítéssel, ugyanazzal a listával és ugyanazzal a piros mezővel, amely felajánlja a még nem létező létrehozását. Egy üres lap jó hely arra, hogy beírd, hova akarsz menni, és pontosan erre való.

A címke csak címke, semmi más: nincs lista, nincs húzás, nincs átnevezés. Az oldalsávok panelei teljesen érintetlenek maradnak — egy visszahivatkozások panel megtartja az Obsidian által adott címét.

A vászonjegyzeteknek, PDF-eknek, képeknek és adatbázisoknak mindez nem kell. Ezek fájlok, tehát egy szokásos útvonalsávot kapnak.

## Egy szakaszra kattintás: cseréld ki egy testvérére

Egy mappanévre kattintva **az adott mappa neve** jelölődik ki egy szövegmezőben, és megnyílik az **eggyel feljebb** lévő mappa — a szülő — listája. Gépeléssel vagy egy elem kiválasztásával ez a mappa egy testvérére cserélődik, az alatta lévő minden pedig érintetlen marad, tehát `Projektek/2026/Indulás.md` → kattints a `2026`-ra → válaszd a `2025`-öt, és `Projektek/2025/Indulás.md` lesz belőle.

A **jegyzet nevére** kattintva ugyanígy működik a saját mappájával szemben, és a nevet **kiterjesztés nélkül** jelöli ki — az átnevezés a gyakori szerkesztés, és a `.md`-t is tartalmazó kijelölés fölé közvetlenül gépelve régen véletlenül megváltoztatta a fájltípust. A kiterjesztés egy billentyűnyi távolságra látható marad: a <kbd>→</kbd> odaér, és az egész sorra kiterjedő dupla kattintás is elviszi az egészet.

A mappára kattintás már kijelölt egy szakaszt, így **még egy kattintás** az egész sorra tágítja a kijelölést — arra a mappára *és* mindenre alatta —, és a gépelés ekkor egy csapásra lecseréli az útvonal többi részét. Navigációs és átnevezés/áthelyezés módban egyaránt így működik.

Ez csak a mezőt megnyitó kattintás folytatásaként érvényes. Amint egyszer használtad a mezőt, úgy viselkedik, mint bármely más szövegmező: a kattintás elhelyezi a kurzort, a dupla kattintás egy szót, a hármas a sort jelöli ki.

Mindkét esetben az útvonal többi része láthatón marad a mező körül, chipekként előtte és kijelöletlen szövegként utána, így a teljes útvonal sosem tűnik el a fejlécből. Gépelj a kijelölés lecseréléséhez, vagy nyomd meg a <kbd>→</kbd>-t, hogy megtartsd, és onnan szerkeszd tovább. A lista az egész mappát felsorolja, függetlenül attól, mi van előre kitöltve; csak akkor kezd szűrni, amikor ténylegesen gépelni kezdesz.

## Leereszkedés az elválasztóval

Egy elválasztóra kattintva (**A mappanév nyitja a listát** kikapcsolva) leereszkedsz az előtte álló mappába: a lista *annak* a mappának a tartalmát sorolja fel, az útvonal többi része pedig kijelölve nyílik meg a mezőben. Egy mappa kiválasztása hozzáfűzi azt az útvonalhoz, és azonnal megnyitja a következő listát, így végigkattinthatod magad egy fán anélkül, hogy elhagynád a fejléc sorát.

## A lista ott nyílik meg, ahol te vagy

A lista azon a bejegyzésen nyílik meg, amelyben éppen állsz — azon a jegyzeten, amelyhez ez a sáv tartozik, vagy amikor egy mappára kattintás a szülőjét listázta, akkor azon a mappán —, nem pedig az első soron. Egy kétszáz jegyzetet tartalmazó mappában az első sor messze van tőled.

**Egy név fölötti görgetés megnyitja a listáját, és végigjárja azt.** Az első fordulat ugyanazt a listát nyitja meg, amit a névre kattintás is megnyit, minden további fordulat pedig egy sorral mozgatja a kiemelést, és pontosan úgy teszi a mezőbe, amire mutatsz, ahogy a nyílbillentyűk is tennék — így egy testvér a billentyűzet nélkül is megtalálható és átvehető. Az egyik véget elhagyva a görgetés visszaadja a szövegedet. Egy sor, amelynek több útvonala van, mint amennyi a panelbe fér, a görgetésre oldalirányú görgetéssel válaszol inkább, ami az olvasás elsőbbségét jelenti, amíg érvényes.

A lista **olyan magas, amennyit az ablak enged**. Az Obsidian a javaslatlistáit 300 képpontban maximálja, bármi is legyen alattuk; ez a lista viszont az ablak aljáig fut, néhány képponttal a szél előtt megállva, és csak akkor görgethető, ha a mappa ennél többet tartalmaz. **Nem szélesebb az útvonalsávnál**: egy nem beleférő nevet ugyanúgy megrövidít, ahogy a sor is megrövidít egyet, és teljes egészében megmutatja, amikor rámutatsz.

A listában mozogva **a mezőbe kerül, amire éppen mutatsz**, nyílbillentyűvel vagy lebegtetéssel — annak a szakasznak a helyén, amelyet éppen szerkesztettél, az útvonal többi részét pedig érintetlenül hagyva —, így az a sor, amelyen éppen állsz, egyben az az útvonal is, amit megkapnál.

Az útvonal többi része csak **addig a mélységig jelenik meg, ameddig létezik az alatt, amire mutatsz**. Ha egy mappában állsz, a szerkesztett szakasz mögött `2026/jegyzet.md` van, és egy olyan mappára mutatsz, amelyben van egy `2026`, benne egy `jegyzet.md`-vel, akkor az egész megjelenik; egy olyan, amelyben van a `2026`, de nincs benne jegyzet, csak a `2026`-ot mutatja; egy olyan, amelyikben egyik sincs, egyáltalán semmit sem mutat a név után, és egy fájl sem mutat semmit, mivel alatta semmi sem él. Amit **te gépeltél be**, megtartja a teljes útvonalát, amíg gépeled, bármilyen kevés is van még belőle — egy félig begépelt név nem egy döntés. Egy nevet beállítani döntés, és ami onnan nem elérhető, azon a ponton levágódik; a mappák, amelyeket létrehozol, azok, amelyeket *utána* gépelsz, és ott hozza is létre őket az <kbd>Enter</kbd>.
A begépelt szöveged megmarad: **a lista bármelyik végéről lelépve** — felfelé az első bejegyzésről, vagy lefelé az utolsóról — elengedi azt, és visszateszi a szövegedet, kiemelés nélkül. A mező ugyanolyan megálló a körön, mint bármely bejegyzés, így egy kör áthalad rajta, ahelyett hogy az utolsó sorról az elsőre ugrana, és onnan továbbnyomva átfordul a másik végre.

A **mutató listáról levétele** is visszateszi a szövegedet — és visszaadja a kiemelést annak, amié korábban volt, mielőtt az egér odaért: a bejegyzésnek, amelyre nyíllal léptél, ismét a mezőben megjelenve, vagy annak, amelyen a lista megnyílt, mert ott állsz. A lebegtetés a nézelődés, nem a választás módja, így a mutató végighúzása a listán nem kerül semmibe.

Maga a lista nem változik, miközben mozogsz benne — továbbra is az alapján szűr, amit begépeltél, nem aszerint, ami előnézetként bekerült a mezőbe —, így az alattad lévő bejegyzés sosem csúszik ki a következő nyomás alól. A gépelés lecseréli az előnézetet, és a szokásos módon szűr.

**Ami alapján szűr, az a szerkesztett szakasz**, nem a mező teljes tartalma. Egy mappára kattintva az útvonal többi része ott marad a módosított név mögött, így ha az egész alapján szűrne, olyan gyermeket keresne, amelyet úgy hívnak, `2026/Indulás.md`, és nem találna semmit — a lista bezárulna az első leütésedre, bármit is gépelnél. **A kiterjesztés is ki van hagyva belőle**, amíg a kurzor a pont előtt áll: egy jegyzet nevére kattintva a tő jelölődik ki, a `.md` pedig mögötte marad, így egyetlen betű begépelésétől a mező `a.md`-t mutatna, és nem ez az, amit keresel. Ha a kurzort a pont mögé teszed, a kiterjesztés is számít, mint bármi más. Egy név, amely tényleg semmire sem illik, akkor is bezárja a listát, mert egy üres lista a becsületes válasz.

Egy előnézet **csak azt az egy szakaszt cseréli ki, az útvonal többi részét érintetlenül hagyva**: egy mappára mutatva azt kérdezi, mi lenne, ha ez a lépés az lenne, nem pedig azt, hogy dobd el az útvonalat. A listáról lelépve visszaáll a szöveged *és* a kijelölésed, amit korábban tartottál, így a következő leütés azt cseréli le, amit a nézés előtt is lecserélt volna.

## A lista sorai valódi fájlkezelő-sorok

A lista minden fájlja és mappája úgy viselkedik, mint a Fájlkezelőben lévő sora:

- **Jobb kattintásra** ugyanazt a helyi menüt kapod, mint a Fájlkezelőben, sorról sorra — beleértve azokat is, amelyeket más bővítmények adnak hozzá. Egy mappa felkínálja az *Új jegyzet*, *Új mappa*, *Új vászon*, *Új adatbázis*, *Másolat készítése*, *Mappa áthelyezése…*, *Keresés a mappában*, *Útvonal másolása*, *Megjelenítés a rendszer fájlkezelőjében*, *Átnevezés…* és *Törlés* lehetőségeket; egy fájl a saját megfelelőit, beleértve a *Megnyitás az alapértelmezett alkalmazásban* opciót is.
- **Húzz** egy bejegyzést bárhová, ahol az Obsidian elfogad egy fájlt: egy szerkesztőbe, hogy hivatkozást szúrj be, egy mappára a Fájlkezelőben, hogy áthelyezd, vagy a lapok sorára, hogy megnyisd.

A menük szövege az Obsidian saját fordításaiból származik, így minden nyelven illeszkedik az alkalmazás többi részéhez.

## Útvonal beírása

- Az **üres területre** kattintás a morzsanyom előtt vagy után szövegmezőt nyit a teljes útvonalra *és megmutatja a jegyzetet a Fájlkezelőben*, így a fa követi a panelt egy második mozdulat nélkül. **Számolja a kattintásaidat**: egy kijelöli az útvonalat kiterjesztés nélkül, kettő kijelöli kiterjesztéssel együtt, három az útvonalat abban a formában, ahogyan a gép ismeri. A **fájl nevére** kattintás ugyanígy számol, csak eggyel lejjebb kezdve, magán a néven: egy kijelöli kiterjesztés nélkül, kettő kiterjesztéssel, három pedig kibővül a teljes útvonalra *a széfmappádtól kezdve* — arra a formára, amit egy hivatkozás vagy keresés kíván, nem arra, amit a gép. A negyedik kattintás jut el eddig.
- **A számolás ahhoz a sorozathoz tartozik, amely megnyitotta a mezőt.** Amint ez lezárul — szünetet tartottál, gépeltél, vagy egyszer kattintottál valahova a szövegbe —, a mező olyan szövegmező, mint bármely másik, és egy dupla kattintás benne a mutató alatti szót jelöli ki, ahogy másutt is tenné. Gépelj a kijelölt rész fölé, vagy szerkeszd a helyén. (Magára a fájlnévre kattintás csak a fájlnevet jelöli ki; lásd fent.) Ugyanarra a területre jobb kattintás **másolja** ugyanazt a három állapotot, két, három és négy kattintásnál — az egyik gomb megmutatja őket, a másik átveszi. Egyetlen jobb kattintás megnyitja az útvonalat teljesen kijelölve, és felkínálja, mit lehet vele kezdeni: kivágás, másolás, beillesztés, teljes kijelölés, Obsidian saját szavaival.
- **Középső kattintás az üres területre** az útvonal fölé illesztéshez: a mező a teljes útvonalra nyílik meg *a széf gyökerétől*, így a vágólap tartalma az egészet lecseréli, és ami odakerül, ki lesz jelölve. Az <kbd>Enter</kbd> ezután odavisz.
- **<kbd>Ctrl</kbd>+kattintás az üres területre** ismét megnyitja ezt a jegyzetet egy saját lapon, felvillantva a Fájlkezelőben, hogy a második lapot ne lehessen összetéveszteni az elsővel. A **széf nevén** <kbd>Ctrl</kbd>+kattintás vagy középső kattintás egy üres lapot nyit, amely a széf gyökerénél áll, a listával már megjelenítve — valahol, ahonnan nulláról beírható egy útvonal.
- Ha gépelsz, miközben a morzsanyom látszik, az utolsó szakasz egy kis mezővé alakul, élő automatikus kiegészítéssel, az aktuális mappára korlátozva.
- **A fájlrendszer gyökerétől induló útvonal is beírható.** A `/` egy üres mező elején egyet megnyit, ahelyett hogy egy szakaszt egészítene ki, minden utána következő perjel ehhez tartozik, a `~` pedig a saját mappádat jelenti. Amíg a mező ilyen útvonalat tartalmaz, a lista a gépet listázza a széf helyett, és a sor kezdő szakasza félreáll — ami a mezőben van, a gyökértől indul, és ezt jelzi is. Ha a *Külső fájlok elérése* ki van kapcsolva, a lista helyette üresen marad, mert az <kbd>Enter</kbd> úgyis elutasítaná az útvonalat.
- **Egy oldal is beírható, nem csak kiválasztható.** `:graph`, `:search`, vagy amit a bővítményeid regisztrálnak — azok a címkék, amelyeket a [széf gyökerének listája](#panel-fájl-nélkül) kínál. A kettőspont bárhol begépelve előhívja őket, mivel egyetlen név sem tartalmazhat ilyet, és az <kbd>Enter</kbd> megnyitja azt a nézetet ezen a panelen. A **mappán belül** begépelt `:graph` az adott mappa gráfját nyitja meg — a gráfot `path:"az/adott/mappa"`-ra szűrve a saját keresőmezőjében, mintha ott gépelted volna be; a széf gyökerénél a teljes gráf jelenik meg. A <kbd>Tab</kbd> befejezi a nevet, ahogy egy mappáét is befejezné — és magával viszi, amit a mező még tartalmazott, mivel egy oldal nincs egyetlen mappában sem, és semmi sem tartozik alá. Egy ilyen oldal címkéjére kattintás a mezőt már ezzel a tartalommal nyitja meg.
- **Amit a <kbd>Tab</kbd> beírna, az gépelés közben fel van ajánlva.** Ahol minden gyermek, amely azzal kezdődik, amit beírtál, egy darabig egyetért, ez az egyetértés a kurzor után jelenik meg, kijelölve; ahol megszűnnek egyetérteni, a lépés az első felé történik közülük — vagy afelé a sor felé, amelyre nyilazva léptél, mivel ez az, amerre a <kbd>Tab</kbd> tartana. Egy név fölé gépelés annak kiterjesztését érintetlenül hagyja és elé kínál fel, egy éppen belépett mappa pedig az első lépését ajánlja, így nincs olyan állapot, amelyben semmi sincs felajánlva, és a <kbd>Tab</kbd> mégis írna valamit. Gépeld be ezeket a betűket, és egyenként elnyeli őket; gépelj be bármi mást, és eltűnik. A <kbd>Tab</kbd> vagy az <kbd>End</kbd> egészben átveszi, a <kbd>→</kbd> egy betűjét veszi át, a <kbd>Backspace</kbd> visszaveszi anélkül, hogy egy általad begépelt betűhöz nyúlna, és semmi sincs újra felajánlva, amíg nem gépelsz — így mindig van kiút egy olyan névből, amelyet nem akartál. A <kbd>Tab</kbd> lenyomása után a következő lépés azonnal fel van ajánlva, ahogy egy begépelt betű után is.  Amit a lista mutat, azt az szűri, amit **te** gépeltél be, sosem az, ami fel volt ajánlva.
- **A felajánlások figyelmen kívül hagyják a kis- és nagybetűket.** A `sch` felajánlja a `Schemes`-t, úgy írva, ahogyan a név szól; a felajánlás visszavétele visszaadja a te betűidet úgy, ahogy begépelted őket. Ahol `Test` és `test` is létezik, az van felajánlva, amelyik úgy van írva, ahogy te gépelted.
- A mezőben a felajánlott rész egyszerűen **ki van jelölve**. A listában van kiírva: minden sor **félkövéren** mutatja azt a részét, amely **megegyezett azzal, amit begépeltél**, bárhol is talált egyezést a névben — a `kick` megtalálja a `Weekly kickoff`-ot, és ezt jelzi is. **Az azzal kezdődő nevek, amit begépeltél, előrébb kerülnek**, azok elé, amelyek csak tartalmazzák, és egy vonal jelöli őket a szélükön: **kék**, ahol többet osztanak meg, mint amit begépeltél, így a <kbd>Tab</kbd>-nak van mit hozzáadnia mindegyikükhöz, és **zöld** azon az ágon, amerre a felajánlás halad ott, ahol szétválnak — `te` esetén `test1`, `test2`, `text1` és `text2` mellett a `te`+`st`-t ajánlja fel, így a két `test` sor zöld, a két `text` sor pedig megtartja az egyszerű vonalat. Mindegyikük **aláhúzza azt a lépést, amelyet a <kbd>Tab</kbd> feléje tenne**, nem csak azt, amelyik fel van ajánlva, és az aláhúzás követi a felajánlást, ahogy változik.
- **A gépelés elengedi a kiemelt sort.** A lista azon a bejegyzésen nyílik meg, amelyben éppen állsz, de abban a pillanatban, amikor gépelsz, már valahol máshol jár, és egy olyan kiemelés, amelyet senki sem tett oda, már meghozott választásnak tűnne.
- A felajánlás mindig csak szöveg előtted: a betűk, amelyeket begépeltél, úgy maradnak írva, ahogyan begépelted őket, amíg gépelsz, a felajánlás elfogadása pedig átírja a nevet úgy, ahogyan a mappa írja, mert egy útvonalnak egyeznie kell a lemezzel. `sk` + <kbd>Tab</kbd> a `Skyline`-hoz jut, nem a `skyline`-hoz.
- **A mező annak a színét viseli, amit megnevez**, ugyanazt a színt, mint a sora a listában: lila egy jegyzethez, beleértve egy mappa saját jegyzetét is, narancs mindenhez, ami nem jegyzet, kék ahhoz a jegyzethez, amelyiken éppen vagy. Az a sor adja a színt, amelynek neve pontosan megegyezik azzal, amit begépeltél, vagy ennek hiányában a kiemelt sor, vagy ennek hiányában az első, amelyhez a gépelésed még elvezet.
- **A mező pirosra vált, amint semmi sem felel meg annak, ami benne van** — se fájl, se mappa, és a lista egyetlen sora sem vezet már el hozzá. Innentől az <kbd>Enter</kbd> létrehozza azt, ami a mezőben van, ahelyett hogy megnyitná, és a piros ezt jelzi, mielőtt megerősítenéd. Sosem jelenik meg webcímnél, amely nem olyan hely ezen a gépen, ahol keresni lehetne. A **teljes** mező színeződik, nem csak a hiányzó rész: egy szövegmező nem tudja saját tartalmának csak felét színezni. Átnevezés/áthelyezés módban a mező a saját pirosát tartja meg egy szabálytalan névhez — ott pedig pont az a lényeg, hogy semmi sem felel meg egy névnek. Az, hogy egy név **már foglalt**, akkor kerül elő, amikor megerősíted, egy párbeszédablakkal, amely megkérdezi, mi történjen az útban lévő fájllal — lásd [Egy foglalt név](#egy-név-amely-foglalt): minden a `Notes.md` felé beírt név áthalad olyan neveken, amelyek saját fájlok lehetnének, így a betűnkénti jelzés egy olyan névre figyelmeztetett volna, amelyet még senki sem kért.
- A `/` megerősíti a gépelt szakaszt és belép abba, megtartva mindazt, ami mögötte volt — ugyanazt teszi, amit a <kbd>Tab</kbd> is tesz, amikor belép.
- A <kbd>Backspace</kbd> egy üres mezőben visszalép a szülőmappára, újranyitva annak nevét a kurzorral a végén. Ugyanígy tesz a <kbd>Backspace</kbd> egy magára maradt kiterjesztés előtt is — egy mező, amely csak `.md`-t tartalmaz, semmit sem nevez meg —, és a magányos kiterjesztés is eltűnik vele.
- **Egy mappára kattintás, miközben egy mező nyitva van, kibővíti azt a teljes útvonalra az adott mappa után**, a mappa saját nevével kijelölve — ugyanazt teszi, amit a sorra kattintás tett volna, és minden, amit a mező tartalmazott, megmarad. Amit a mező tartalmaz, az a sor vége, amíg nyitva van, így egy feljebb lévő mappára kattintás azt az útvonalat adja vissza, amelyet a munkamenet bejárt, nem azt, amellyel a jegyzet indult.
- **A mező elejétől való elnyilazás behozza az előtte lévő mappát**, mintha a teljes útvonal egy sornyi szöveg lenne. Ha a kurzor legelöl áll, a <kbd>←</kbd> behozza a mezőbe azt a mappát, és annak nevének végére kerül, a <kbd>Ctrl</kbd>+<kbd>←</kbd> a nevének elejére kerül, a <kbd>Home</kbd> pedig egyszerre hozza be az összes mappát egészen a széf gyökeréig — vagy egészen addig a helyig, amelyet a széfen kívül választottál. Tartsd lenyomva a <kbd>Shift</kbd>-et, és a kijelölés kiterjed a behozott részre. macOS-en a szóugrás az <kbd>Option</kbd>+<kbd>←</kbd>, a <kbd>Cmd</kbd>+<kbd>←</kbd> pedig a <kbd>Home</kbd>-nak felel meg. Bárhol máshol az elején kívül ezek egyszerű szövegbillentyűk. **Amíg a lista látszik, a <kbd>Home</kbd>, <kbd>End</kbd>, <kbd>PgUp</kbd> és <kbd>PgDn</kbd> hozzá tartozik** — első sor, utolsó sor, egy oldallal feljebb, egy oldallal lejjebb, ahol az oldal azt jelenti, amit a lista mutat, a kiemelt sor pedig megtartja a helyét a képernyőn —, és csak a lista bezárása után érik el a szöveget; a <kbd>Shift</kbd>+<kbd>Home</kbd> a nyitott listánál is behozza az összes mappát.
- **A lista követi a kurzort.** Válassz ki más részt az útvonalból — húzd rá, kattints bele, vagy nyilazz odáig —, és a lista *annak* a mappának a gyermekeit sorolja fel, nem azét, amelyiken a mező megnyílt. A mappát a lánc plusz a mező kurzor előtti része alapján számolja, így ha egy `2026/Notes.md` tartalmú mezőben a `Notes.md`-be kattintasz, azt listázza, ami a `2026`-ban van. Egy sorra mutatva beírja azt abba a szakaszba, amelyben a kurzor áll, a mutató listáról való elvétele pedig visszaadja a szövegedet és a kijelölésedet, pontosan úgy, ahogy voltak.
- **Ha egy kijelölést kihúzol a mezőből**, és máshol engeded el, az nem zárja be. Egy kattintás, amely a mezőben kezdődik, a szerkesztéshez tartozik, bármeddig is tart; csak az a kattintás számít elkattintásnak, amely kívül *kezdődik*.
- Az <kbd>Enter</kbd> megerősít — és ha a mező egyáltalán semmit sem nevez meg, mint egy üres mappában, ahol sosem volt mit kiegészíteni, azt írja, hogy *Nincs kiválasztott fájl*, és nyitva marad, ahelyett hogy bezáródna, mintha valamit kiválasztottak volna. Az <kbd>Esc</kbd> vagy egy kattintás máshova visszavonja a fájl valódi útvonalára. Egy <kbd>Esc</kbd> lenyomás elég: bezárja a listát, elhagyja a mezőt és visszaadja a fókuszt a jegyzetnek, ahelyett hogy rétegenként egy-egy lenyomást igényelne.

A mezőn nincs semmi dísz — se doboz, se keret —, így magának az útvonal szövegének olvasható, és gépelés közben magától nő.

## A sor minden része, gombonként

Az egész sor egy pillantásra. A jobbklikk oszlop az, amit **egy** kattintás ad; ez a gomb a kattintásokat is számolja, és [a saját táblázata](#jobbklikk-egy-nyomás-két-nyomás-három) lentebb tartalmazza a másodikat, harmadikat és negyediket. Ez itt azt feltételezi, hogy a **A mappanév nyitja a listát** be van kapcsolva, ami az alapértelmezés — kikapcsolva a mappanév és az elválasztó felcserélik az első oszlopot, ahogy [a fenti táblázat](#az-útvonalsáv) is mondja.

| Ahol kattintasz | Kattintás | Dupla kattintás | <kbd>Ctrl</kbd>+kattintás, vagy középső gomb | Jobbklikk | Ráejtés valamivel |
| --- | --- | --- | --- | --- | --- |
| A **széf neve** | Megnyitja a helyek listáját — más széfek, home, a fájlrendszer gyökere, csatolt meghajtók. Alapból ki van kapcsolva; kikapcsolva ehelyett felfedi a széfet a File Explorerben | Megjelöli a **teljes abszolút útvonalat**. A lista úgy nyílik meg, hogy az útvonal már benne van a mezőben, és csak a széf saját része van megjelölve; egy második nyomás kiterjeszti a jelölést a többire is. Nincs mit kiterjeszteni, ha a lista ki van kapcsolva | Egy üres lap, amely a széf gyökerénél áll, a lista már megjelenítve — hely, ahonnan egy útvonalat a nulláról beírhatsz | A széf saját context menüje: amit azzal a széffel lehet csinálni, amit az a szakasz nevez | Egy **fájl** a széf gyökerébe kerül. A **szöveg** megnyitja a mezőt a gyökérnél, hogy elnevezd a jegyzetet, amivé válnia kell |
| Egy **mappanév** | Kiválasztja azt a mappát szerkesztésre, alatta a szülő tartalmával | Újra begépelteti azt a mappát és mindent alatta | Megnyitja azt a mappát egy új lapon | Annak a mappának a context menüje — a File Explorer saját menüje | Egy **fájl** az adott mappába kerül. A **szöveg** megnyitja ott a mezőt, hogy elnevezd a jegyzetet, amivé válnia kell |
| Egy **elválasztó** | Megnyitja az előtte lévő mappát — annak mappajegyzetét, ha egy mappajegyzet-bővítmény fut és van neki, egyébként felfedi és kibontja a File Explorerben | **Létrehozza az adott mappa jegyzetét**, és odalép, ha egy mappajegyzet-bővítmény fut és a mappának még nincs neki. Ahol már van neki, ez csak ismét az egyszeri kattintás | A mappajegyzet egy új lapon, ha van neki; egyébként egy lap, amely azon a mappán áll, a lista megjelenítve | Ugyanaz a context menü, mint amit a név ad — a mappajegyzeté, ha van neki | Az adott mappa jegyzetének végére, ha van neki, megerősítés után |
| A **jegyzet neve** | Megnyitja a nevet szerkesztésre — a mappák chipekként maradnak mellette — a kiterjesztés kivételével minden megjelölve | A kiterjesztést is bevonja a jelölésbe | Megnyitja a jegyzetet egy új lapon | A fájl context menüje — ugyanaz, mint amit a File Explorer sora ad | Ennek a jegyzetnek a végére, megerősítés után |
| Az **üres terület** | Megnyitja a **teljes útvonalat** szerkesztésre, a kiterjesztésig megjelölve. A mappák bekerülnek vele a mezőbe, ami ettől lesz a mozdulat egy útvonal — nem egy név — újragépeléséhez | A kiterjesztést is bevonja a jelölésbe | A <kbd>Ctrl</kbd> újra megnyitja ezt a jegyzetet egy saját lapon, felvillantva a File Explorerben, hogy a másolat ne legyen összetéveszthető az elsővel. A középső gomb *nem* ez a mozdulat: felülírja az útvonalat | Megjelöli a teljes útvonalat, és felkínálja, amit a megjelölt szöveggel lehet csinálni | |

**A második nyomás követi az elsőt.** A mappa jegyzetének létrehozása arra a sorrészre esik, amelyik *megnyitja* azt a mappát, ami alapból az elválasztó, kikapcsolt csere esetén pedig a mappanév — ugyanaz a cél, amit az aláhúzás jelöl, és ugyanaz, amit egy egyszeri kattintás is már a mappajegyzetért kér. Ez csak akkor kínálja fel, amíg egy mappajegyzet-bővítmény fut, mert egy mappajegyzet inkább egyezmény, mint a fájlrendszerről szóló tény, és csak ott, ahol a mappának még nincs neki. Hogy hol él, és minek hívják, azt a **Folder notes** saját beállításaiból olvassa ki, így egy olyan széf, amely a mappajegyzeteit a mappa mellett tartja, vagy `_index`-nek hívja őket, ilyet kap; maga a fájl mindig Markdown, ami az, amit annak a bővítménynek a saját alapértelmezett létrehozó parancsa készít, és amit megtalál, bármilyen típusra is van beállítva a széf. Az átnevezés/áthelyezés mód teljesen kívül esik ezen — a soron semmi sem nyit meg egy mappát, amíg egy áthelyezés függőben van.

**A név kattintásai folytatódnak.** A négy fok ugyanaz a négy, amit az átnevezés billentyű is bejár, ugyanabban a sorrendben: a név, a név a kiterjesztésével, az útvonal a széftől, az útvonal a rendszer gyökerétől. Így egy harmadik kattintás a széf útvonalához ér, egy negyedik pedig a géphez — ugyanaz a négy dolog, amit a <kbd>Tab</kbd> a mező végén túl ad, és ugyanaz a négy, amit a jobb gomb *másolásra* használ, kijelölés helyett.

**A rámutatás** a saját válasza, és sosem változtat semmin: egy lerövidített név teljes egészében visszatér, amíg rámutatsz, és a sor elején lévő ikon megmutatja, hol él a széf.

## Jobbklikk: egy nyomás, két nyomás, három

A soron minden cél válaszol egy jobbklikkre, és hogy hány nyomást adsz neki, eldönti, mit kapsz. Mivel egy második nyomás még jöhet, az első kb. egyharmad másodpercet vár, mielőtt cselekszik — ez az ára annak, hogy három mozdulatot egy gombra tettünk.

| Ahol kattintasz | Egyszer | Kétszer | Háromszor |
| --- | --- | --- | --- |
| A **széf neve** | A széf context menüje: amit azzal a széffel lehet csinálni, amit az a szakasz nevez — beleértve az *Ennek a széfnek a megnyitása* opciót, ha az a széf nem az, amelyikben éppen vagy | A széf nevét másolja | Azt másolja, hol van a széf — és egy negyedik nyomás, hol van a megnyitott fájl |
| Egy **elválasztó** | Annak a mappának a menüje — a mappajegyzeté, ha egy mappajegyzet-bővítmény fut és a mappának van egy | | |
| Egy **mappanév** | Annak a mappának a menüje | A mappa nevét másolja | Azt másolja, azt és mindent tőle jobbra |
| A **jegyzet neve** | A fájl menüje — ugyanaz, mint amit a File Explorer sora ad | A nevet másolja | Azt másolja, a kiterjesztésével együtt |
| Az **üres terület** | | Az útvonalat másolja a széf mappádtól, kiterjesztés nélkül | Ugyanaz, azzal együtt |

Egyetlen nyomás a **széf nevén** megnyitja, amit azzal lehet csinálni, amit az a szakasz nevez. **Annál a széfnél, amelyikben éppen vagy**: megnyitás új ablakban, széfek kezelése, hol van másolása, ID-jának másolása, megmutatása a fájlkezelőben. **Egy másik széfnél**, amit a helyek listáján keresztül érsz el, ugyanaz, mínusz az új ablak — ami *ezt* a széfet nyitná meg, nem azt —, plusz az az egy dolog, amit csak egy olyan széf kínálhat, amelyikben nem vagy: **Ennek a széfnek a megnyitása**. Obsidian számára az ID-je alapján nevesítik, nem a mappaneve alapján, mivel két széf oszthat egyet. Egy olyan helynél, ami egyáltalán nem is széf — a home mappád, egy csatolt meghajtó — nincs ID másolható, és nincs mit megnyitni, és a menü ezt úgy mondja, hogy nem kínálja fel őket.

Ez nem Obsidian saját három pontos menüje, ami az induló ablakhoz tartozik, és nem nyitható meg egy futó széfen belülről — ezek ugyanazok a bejegyzések újraépítve, Obsidian saját megfogalmazásában, a parancsaiból véve, hogy a te nyelveden érkezzenek. Annak a menünek három bejegyzése szándékosan **nincs** itt: a *széf átnevezése*, a *széf áthelyezése* és a *törlés a listából* mind a széf saját mappáján vagy Obsidian széf-nyilvántartásán hatnak, és ezt megtenni azzal a széffel, amelyikben éppen állsz — miközben a fájljai meg vannak nyitva, és a figyelői futnak — az, ahogy egy széf tönkremegy. Nyisd meg a széfkezelőt (*Másik széf megnyitása*), és ott csináld meg őket, ahol a széf le van zárva.

A két másolás az **üres területen** a sor úgy, ahogy le van írva — amit egy link vagy egy keresés akar —, a **széf nevén** lévők pedig a fájlrendszer által ismert útvonalak, ami az, amit bármi Obsidianon kívüli akar. Minden nyomás ott kiterjeszti, mire jó a másolat: kettő adja a széf nevét, három hol van a széf, négy hol van a megnyitott fájl. Obsidian ugyanezt a különbséget teszi a saját két parancsában, a *from vault folder* és a *from system root*-ban; itt a kifelé mutatók azon a szakaszon ülnek, amelyik maga is kívül van az útvonalon.

Mindez a széfen kívül is működik, ugyanazokon a célokon.

Minden másolás egy értesítésben jelzi ezt, mert egy másolás nem hagy semmit a képernyőn, ami mutatná, hogy megtörtént, és egy félreszámolt nyomás nem tűnhet sikeresnek.

## Módosítók: nyisd meg máshol

A jegyzet neve és a mappaszakaszok úgy viselkednek, mint a soraik a File Explorerben.

| | A jegyzet nevén | Egy mappaszakaszon |
| --- | --- | --- |
| Egyszerű kattintás | A név szerkesztése | Az adott mappa böngészése |
| <kbd>Ctrl</kbd> / középső gomb | A jegyzet megnyitása egy új lapon | A mappa küldése egy új lapra |
| <kbd>Ctrl</kbd>+<kbd>Alt</kbd> | Egy hasított nézet | Egy hasított nézet |
| Húzás | A jegyzet, bárhová, ahova Obsidian egy fájlt visz | A mappa, ugyanígy — a laprészt is beleértve |

Egy mappa nem olyasmi, amit Obsidian meg tud nyitni, így egyet egy lapra küldeni két dolog egyikét teszi: megnyitja a mappajegyzetét, ha egy mappajegyzet-bővítmény fut és van neki, vagy megnyit egy üres lapot, amelynek útvonalsávja már azon a mappán áll — csak a nevet kell begépelned. Egy mappaszakasz **laprészre** ejtése ugyanezt teszi, egy új lapon ott, ahol elengeded — Obsidian laprésze magától csak fájlokat fogad el, így egy a File Explorerből kihúzott mappát ott is elutasít.

## Tab: kiegészíti a nevet, majd az útvonalat, majd bővíti a kijelölést

A <kbd>Tab</kbd> úgy egészít ki, ahogy egy parancssor: **egy lenyomás annyira bővíti azt, amit beírtál, amennyire az adott mappa nevei megegyeznek, és ott áll meg, ahol eltérnek.** Írd be, hogy `Sk`, ahol csak a `Sketches` kezdődik így, és a szó kész; írd be, hogy `Al`, ahol az `Alpha-one`, az `Alpha-two` és az `Alpine` is így kezdődik, és `Alp`-et kapsz, mert a következő karakter olyan kérdés, amelyre csak te tudsz válaszolni.

Nyomd meg újra beírás nélkül, és egy név felé halad — a lista által kiemelt sor, vagy az első felé —, és az adott név következő kétértelműségénél áll meg: `Alpha-`, majd `Alpha-one`. A lista ott nyílik meg, ahol éppen állsz, így a saját mappádban az első lenyomás a megnyitott jegyzeted felé indul, nem afelé, ami elsőként rendeződik.

**Egy lenyomás sosem választ neked a nevek közül.** A <kbd>Tab</kbd> akkor lép be egy mappába, amint amit beírtál, egyetlen jelöltet hagy, vagy amint beírtad a mappa teljes nevét, és semmilyen *másik mappa* nem bővíti tovább. Ahol igen — `Schemes` a `Schemes2026` mellett —, a <kbd>Tab</kbd> a hosszabb név felé folytatja a kiegészítést; az <kbd>Enter</kbd> és a lista azok a gesztusok, amelyek azt jelentik: *ezt itt*.

Egy **fájl** sosem tartja fel így a mappát. Egy mappa, amely a saját nevével megegyező nevű jegyzet mellett áll, mappajegyzet, nem az útvonal elágazása, és a <kbd>Tab</kbd> mappákon lépdel — így a `Projects` a mellette lévő `Projects.md`-vel együtt ugyanúgy belépésre kerül, mint bármely más.

Két kisebb dolog következik ebből: ami a mezőbe kerül, úgy van írva, ahogyan a mappa írja, így a `sk`-ból `Sketches` lesz; és csak a beírás alatt álló név cserélődik ki, így egy olyan útvonal, amelynek jobbra még van folytatása, megtartja azt.

Ha egy név fel van kínálva, miközben gépelsz, a <kbd>Tab</kbd> **pontosan a felkínáltat írja be**: a felkínált mindig az, amit a lenyomás beírna, és a lista aláhúzása és zöld vonala ugyanazt mondja, így ami a kurzor után látszik, azt kapod meg. Ahol a nevek megegyezése megszakad, ott a lépés az elsejük felé történik — vagy azon sor felé, amelyre a nyilakkal álltál, amelyet a <kbd>Tab</kbd> a mellette lévő helyett választ —, ezért nyilazz a kívánt sorra, vagy írd túl az elágazást, mielőtt lenyomod. Csak ott, ahol a felkínált *egyetlen* nevet hagy, lép be ugyanaz a lenyomás oda.

A fájl nevéhez való megérkezés **maga** az első fok — egyetlen lenyomás sem megy el arra, hogy a kurzort egy éppen megjelölendő név végéhez parkolja. Innentől a lenyomások nem az útvonalon haladnak tovább, hanem elkezdik bővíteni a kijelölést:

1. a név
2. a név a kiterjesztésével
3. az útvonal a széfmappádtól
4. az útvonal a rendszer gyökerétől
5. vissza az útvonal elejére **úgy, ahogy az most áll** — ott állva, ahol a séta elkezdődött, az első szakasz megjelölve, készen arra, hogy újra végigjárd

Egy negyedik kattintás közvetlenül ehhez a negyedik fokhoz vezet.

A bővítés mindig csak **bővít**. Egy név, amely már teljes a mezőben — ugyanazzal a billentyűvel kiegészítve, vagy a listából kiválasztva —, egészében jelölődik meg, ahelyett hogy előbb visszavennék róla a kiterjesztést: az első fok annak a névnek szól, amelyhez a séta éppen most *érkezett*, ahol a kiterjesztés még nem téma.

A létra ott van, ahová a séta **érkezik**, nem ott, ahol elindul. Kattints egy mappára az útvonal közepén, és a mező mindannak megfelelően nyílik meg, ami alatta van, az adott mappa nevével megjelölve; minden <kbd>Tab</kbd> ekkor **egy** mappát lép — a következőt jelöli meg, a maradék útvonalat mögötte hagyva —, és csak akkor kezdődik a bővítés, amikor már csak a fájlnév maradt:

| lenyomás | jelvények | mező | megjelölve |
| --- | --- | --- | --- |
| `a`-ra kattintva | | `a/b/c/leaf.md` | `a` |
| <kbd>Tab</kbd> | `a` | `b/c/leaf.md` | `b` |
| <kbd>Tab</kbd> | `a › b` | `c/leaf.md` | `c` |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf` — az első fok |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf.md` |

**Egy beállított név beállított, bárhogyan is állítottad be.** A <kbd>Tab</kbd>-bal
való kiegészítés, a `/`-rel való véglegesítés, és a listából való kiválasztás
is ugyanott hagyja a sort, ugyanazt az útvonalat tartva, így a gesztus utáni
lenyomás ugyanazt jelenti, bármelyik úton is jutottál oda. Egy mappa listából
való kiválasztása korábban helyette kiürítette a mezőt, eldobva egy olyan
útvonalat, amelyet ugyanannak a mappának a <kbd>Tab</kbd>-bal való elérése
megtartott volna.

**Egy útvonal, amelyet még éppen írsz, egyben érkezik veled.** Belépni pontosan abba a mappába, amelyről az útvonal maradéka függ, nem azt állítja, hogy a maradék létezik — így írható be egy útvonal saját maga elé, és az általa megnevezett mappák azok, amelyeket az <kbd>Enter</kbd> mindjárt létre fog hozni. Így ha lelépsz a `Dokumente/plans/untitled.md`-ből a `Dokumente`-be, a `plans/untitled.md` megmarad előtted, akár létezik már a `plans`, akár nem. Ugyanez érvényes egy útvonalra, amelyet a semmiből írtál be: semmit sem örökölt sehonnan, így semmit sem vesz el belőle.

**Egy lépés cseréje egy másikra más történet, és ekkor az útvonal csak annyira jön veled, amennyire valóban ott van.** Cserélj ki egy mappát az útvonal közepén egy testvérére — kattints az `a`-ra, írj be egy másik nevet, nyomd meg a <kbd>Tab</kbd>-ot —, és minden, ami alatta van, veled jön, mert az útvonal, amelyen voltál, általában a kívánt útvonal nagy része. Csak az marad meg a mozgás után, ami valóban létezik ott, így a mező és a mellette lévő lista sosem mond ellent egymásnak: ami előtted marad, egy olyan útvonal, amelyet valóban végig tudnál járni. Kiindulva az `a/b/c/leaf.md`-ből, az `a`-ra kattintva és a nevét megjelölve:

| amit beállítasz | jelvények | mező | megjelölve |
| --- | --- | --- | --- |
| `x`, amelynek egyáltalán nincs `b`-je | `x` | | semmi sem jött vele |
| `y`, amelynek van `b`-je, de nincs benne `c` | `y` | `b` | `b` |
| `z`, az `a` ikertestvére egészen a mélyéig | `z` | `b/c/leaf.md` | `b` |

Egy mappa, amely így magára marad, még mindig belépésre váró mappa: az utána következő lenyomás belép, ahelyett hogy elkezdené bővíteni a kijelölést a neve fölött.

Egy nevet, amelyre a mappában **semmi** nem illik, másképp válaszol meg, mert semmi sem lett beállítva általa: a lenyomás azt jelöli meg, amit beírtál, készen arra, hogy felülírd, ahelyett hogy máshova válaszolna.

Az egész dolog egy **hurok, és semmibe sem kerül körbejárni**: az utolsó fok utáni lenyomás visszaadja a sort az útvonal elejére, mappástul, készen arra, hogy újra körbejárd. Az egyetlen dolog, ami valaha elhagyja a sort, az abszolút előtag, azon a lenyomáson, amely megszünteti a megjelenítését.

Ami visszatér, az **az útvonal, amelyet felépítettél**, nem az, amelyről elindultál. Ágazd el a sétát félúton — válassz másik testvért a listából, egészíts ki egy másik név felé —, és a kör azon zárul, ahol valójában állsz; az előtte lévő négy fok ugyanezt az útvonalat írja le, és ez a fok volt korábban a kilógó fok, amely a múltat írta le.

A <kbd>Shift</kbd>+<kbd>Tab</kbd> ugyanezt a gyűrűt zárja be a másik irányból: az útvonal elején, ahol már nincs mit visszaadni és nincs feljebb hova menni, a következő lenyomás a **legtávolabbi** fokra ugrik — az útvonalra a rendszer gyökerétől —, és onnan folytatja a szűkítést. Egyik irány sem zsákutca.

Egyetlen lenyomást sem pazarol olyan fokra, amelyet már megmutatott. Az utolsó fok alatt — a névnél a kiterjesztése nélkül — a létra véget ér, és *ugyanaz a lenyomás* hagyja el a mappát: az útvonal a rendszer gyökerétől, az útvonal a széfedtől, a név, a név a kiterjesztése nélkül, majd a mappa, egyenként egy lépéssel.

Egyetlen lenyomás sem megy el olyan fokra, amely semmit sem változtat: egy jegyzet nevére kattintva az máris a kiterjesztése nélkül jelenik meg, ami éppen az első fok, így onnantól a <kbd>Tab</kbd> a másodikkal kezd.

Minden fok megváltoztatja, mi van *a mezőben*, nemcsak azt, mi van kiemelve — egy kijelölésnek azon a szövegen kell állnia, amelyet megnevez, különben az <kbd>Enter</kbd> mást véglegesítene, mint amit láthatóan kijelöltél. A létra egyetlen szerkesztési munkamenethez tartozik: kattints el, vagy írj be bármit, és a következő <kbd>Tab</kbd> ismét egy nevet egészít ki.

### <kbd>Shift</kbd>+<kbd>Tab</kbd>: ugyanaz az út visszafelé

A <kbd>Shift</kbd>+<kbd>Tab</kbd> lenyomásonként egy lépést von vissza, a lenyomások sorrendjében: a kijelölés fokonként szűkül, minden kiegészítés visszaadásra kerül, és minden mappából kilépsz — a neve visszatér a mezőbe, hogy szerkeszthesd, ahelyett hogy újra be kelljen írnod.

**Visszafelé menet semmi sem törlődik.** Egy kiegészítés úgy adódik vissza, hogy *megjelöli* azokat a karaktereket, amelyeket hozzáadott, pontosan úgy, ahogy előre haladva megjelöli azt, ami fölött bővít — a név előtted marad, és minden további lenyomás egy lépéssel többet jelöl meg belőle:

| | mező | megjelölve |
| --- | --- | --- |
| bejárva | `Alpha-one` | |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `ha-one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `Alpha-one` |

A gépelés lecseréli a megjelölt részt, ahogy máshol is. A <kbd>Tab</kbd> pontosan azt teszi vissza, amit a jelölés visszaadott, így ha két lépést kifelé, majd két lépést újra befelé jársz, ugyanoda kerülsz vissza.

Amint az egész név meg van jelölve, nincs már mit egy lenyomás odatett volna, és a következő lenyomás *felfelé megy az útvonalon*: elhagyja a mappát, amelyben állsz, pontosan úgy, ahogy a <kbd>Backspace</kbd> egy üres mezőn. Ez sem kerül semmibe — a mappa neve visszakerül a mezőbe, **az előtt**, ami korábban benne volt, megjelölve, ami ugyanaz a szöveg, amit az adott mappára kattintás adott volna. A vissza inkább egy irány, mint egy visszavonási előzmény — de a név előzetes megjelölése azt jelenti, hogy egy lenyomás sosem vonja vissza egyszerre azt, amit írtál, és lép ki egyben abból a mappából, amelyben írtad.

Egy szöveg, amely **már kijelölve** nyílik meg — amit egy mappára kattintás hagy maga után —, az a név, amelyen a <kbd>Tab</kbd> ezután dolgozik: kiegészítésre és belépésre kerül, mint bármi más, és gépelés lecseréli. Csak a fókuszparancs nyílik meg magán a létra egy fokán, mert ez a teljes útvonalat mutatja neked, nem egy bejárandó mappát.

## Olyasmi beírása, ami nem útvonal

| Amit beírsz | Mi történik |
| --- | --- |
| `https://…` | Új lapon nyílik meg az Obsidian **Webböngésző** beépülőjében, ha az be van kapcsolva; egyébként az asztali böngésződben |
| `obsidian://…` | Átadódik az Obsidian saját URI-kezelőjének |
| `file:///…` | Dekódolásra és megnyitásra kerül: valódi jegyzetként, ha a széfeden belül van, egyébként a böngészőben |
| `/home/te/a%20b.md` | Ugyanez, egy böngészőből vagy fájlkezelőből kimásolt útvonalra |

Csak a kifejezett séma számít — egy `100%20` nevű jegyzet még mindig jegyzet. A sémához tartozó `/` szó szerinti marad, ahelyett hogy egy mappába lépne le, így egy URL kézzel is beírható, nem csak beilleszthető.

## Egy parancs a billentyűzethez

A **Fókusz az útvonalsávra** megnyitja a mezőt a jegyzet nevén, és úgy járja be, ahogy az <kbd>F2</kbd> — a név, a név a kiterjesztésével, az útvonal a széfedtől, az útvonal a rendszer gyökerétől —, és az ezt követő lenyomás bezárja a mezőt, és visszateszi a kurzort a jegyzetbe. Nem nevez át: az Enter navigál, mint bármely más mezőben. Alapból nincs saját billentyűje, mert az Obsidian irányelvei ezt nem ajánlják a beépülőknek; a **Billentyűparancsok** sor e beépülő beállításainak végén megnyitja a *Beállítások → Billentyűparancsok* oldalt, amely csak ennek parancsait mutatja, így ott hozzárendelhetsz neki egyet.

## A navigáció sosem nyúl a megnyitott fájlhoz

Az alapértelmezett (navigációs) módban a megnyitott jegyzet **sosem** kerül átnevezésre vagy áthelyezésre.

- Egy útvonal, amely egy létező fájlra oldódik fel, megnyitja azt.
- Egy még nem létező útvonal egyszerűen létrejön, a hiányzó szülőmappákkal együtt, és megnyílik. Minden így létrehozott fájl és mappa erről egy értesítésben számol be — egy új mappa egyébként láthatatlan maradna, amíg meg nem keresed —, és az Obsidian saját lomtára egyetlen billentyűleütéssel visszavonhatóvá teszi a nem kívánt eredményt.
- **A széfen kívül még mindig rákérdez előbb.** Odakint ugyanaz az elgépelés egy rendszermappába ír, ahol sem az értesítés, sem az Obsidian lomtára nem sok vigasz.

## <kbd>Ctrl</kbd> — új lap, és másolás áthelyezés helyett

Egy jegyzet, amely **a széfen belül jön létre, kerül áthelyezésre vagy másolásra, ott jelenik meg**, ahová került, a Fájlkezelőben, egy pillanatra az Obsidian saját kiemelőszínével megjelölve — a fastruktúra az, ahol utólag keresed, így elébed kerül, ahelyett hogy egy olyan mappában maradna, amely talán még csak meg sincs nyitva. A kettőzés is jelzi ezt: egy másolat az eredetit ott hagyja, ahol volt, és a másolatot saját panelen nyitja meg, ami szó nélkül könnyen úgy olvasható, mintha semmi sem történt volna.

Ha a <kbd>Ctrl</kbd> (macOS-en <kbd>Cmd</kbd>) billentyűt nyomva tartod, miközben fájlt választasz a listából, vagy miközben egy útvonalon <kbd>Enter</kbd>-t nyomsz, az eredmény **új lapra** kerül e helyett:

| | Egyszerűen | <kbd>Ctrl</kbd>-lal |
| --- | --- | --- |
| Létező fájl kiválasztása vagy beírása | Itt nyílik meg | Új lapon nyílik meg |
| Nem létező útvonal beírása | Rákérdez, majd itt nyitja meg | Rákérdez, majd új lapon nyitja meg |
| Útvonal véglegesítése átnevezés/áthelyezés módban | **Áthelyezi** oda a jegyzetet | Oda **másolja**, és a másolatot új lapon nyitja meg |

A módosítót az Obsidian saját szabálya olvassa, így pontosan úgy viselkedik, mint egy hivatkozáson vagy a Fájlkezelő egy során — a középső kattintás szintén „új lapot” jelent, a <kbd>Ctrl</kbd>+<kbd>Alt</kbd> osztást, a <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> pedig új ablakot.

A másolás megtagadja a felülírást, pontosan úgy, ahogy az áthelyezés is — beleértve a jegyzet saját útvonalára történő másolást is, ahol nincs értelme semminek. A széfen kívül ez a megtagadás szintén hangosan kimondásra kerül.

Mindez **a lista felnyitva** is működik, csakúgy mint anélkül: egy kiemelt soron a módosító arra a sorra vonatkozik, semmin sem állva pedig arra, amit beírtál.

## Böngészés a széfen kívül

**Ez alapból ki van kapcsolva.** Előbb kapcsold be a **Külső fájlok elérése** beállítást — a széfen kívüli olvasás és írás az egyetlen dolog, amit ez a bővítmény megtesz, és amit az Obsidian maga nem, ezért olyasmi, amire rábólintasz, nem pedig amiről leiratkozol. Kikapcsolva a széf neve egyszerűen megmutatja a széfedet a Fájlkezelőben, és itt semmi sem néz soha azon túlra.

A **széf nevére** kattintva (vagy a 🏠 ikonra, ha a *Tároló nevének megjelenítése* ki van kapcsolva) helyek listája nyílik meg, nem tartalmaké. A megnyíló mező **a teljes útvonalat tartalmazza, amin épp voltál, kiírva**, a kezdőhellyel kijelölve — így egy másik hely kiválasztása, vagy a kijelölés felülírása, csak azt a vezető részt cseréli ki, és az útvonal többi része előtted marad. **Nyomd meg a nevet másodszor is** — egy dupla kattintással —, és a kijelölés kiterjed az egészre, így vehető át egy mozdulattal a teljes útvonal, kézzel végigsöprés helyett. Ha meggondolod magad, az <kbd>Esc</kbd> visszaállítja a sort úgy, ahogy volt.

Az itt gépelésnél is felkínálja egy hely nevének hátralévő részét, mint bárhol máshol, és a <kbd>Tab</kbd> **beállítja azt a helyet** — amelyikre éppen mutatsz, vagy amelyikre a név egyedül utalhat. Ahol több hely is osztja azt, amit beírtál, a nyomás megáll az elágazásnál, mint mindenütt. Egy helyre mutatva **annak a helynek a saját útvonala** jelenik meg, mindegy kijelölve, majd a jegyzeted útvonala követi, csak addig, ameddig az valóban létezik odaát — pontosan az, amire a kiválasztása vinne. Egy hely nem lépés a képernyőn lévő útvonalon belül, hanem valami, ahonnan a teljes útvonal számolódik, így semmi sem marad meg abból, ahol voltál, előtte.

A felkínált helyek:

- **A többi széfed**, az Obsidian saját nyilvántartásából olvasva, a legutóbb megnyitottak elöl, mindegyik az Obsidian saját széfikonja alatt — azzal, amit az alkalmazás maga használ a széfparancsokhoz. A már megnyitott széf helyette házat kap: alapból onnan indul a sor, nem pedig oda kell menni.
- **A saját mappa**, a saját fióknév alatt, egy `~` jellel megjelölve. A Lucide-ban nincs hullámvonal, ezért ezt a bővítmény rajzolja meg a Lucide saját 24×24-es rácsán, ugyanazzal a vonalvastagsággal — a készletből hiányzó ikonként, nem pedig ikonok közé ültetett szöveges karakterként.
- **A fájlrendszer gyökere**, `root` felirattal — lefordítatlanul, mert minden rendszeren ez a neve — a `/` helyett, amely az utána következő elválasztó mellett üres lépésnek olvasódna.
- **A csatolt meghajtók**, típusonkénti ikonnal ott, ahol ezt olcsó megállapítani: a hálózati megosztások, az optikai lemezek, a hajlékonylemezek és a cserélhető adathordozók sajátot kapnak; minden más általánosat. Windowson a meghajtók `C:` alakban, általános ikonnal jelennek meg — a kötetnevekhez és a pontos típusokhoz WMI kellene, amit szándékosan nem használunk.

Egy másik széf kiválasztása **nem vált át rá az Obsidianban.** Minden nyitva marad, ami nyitva van; az útvonalsáv egyszerűen ott kezd böngészni. Épp ez az értelme annak, hogy az útvonalsávon van, és nem az oldalsáv széfváltójára van bízva.

Emellett **olyan közel is landol a jegyzetedhez, amennyire az a hely valóban elér**.

- Ha a kiválasztott hely *tartalmazza* a jegyzetet — a saját mappád, vagy ahol a széfeid laknak —, onnantól kapod meg az útvonalát: válaszd a `~`-t, miközben a `takeaways.md` van megnyitva, és a mező a `Vaults/your-vault/takeaways.md` szöveget mutatja.
- Ha egy hozzá közeli helyet választasz — egy másik széfet, egy másik meghajtót —, ugyanazt a relatív útvonalat próbálja meg, olyan mélyen, ameddig az valóban létezik. A széfek gyakran majdnem egymás másolatai, és az egyikre ugrás oka általában ugyanaz a jegyzet odaát.

Bármelyik esetben a sor a kiválasztott helynél marad, és **az útvonal első mappája kijelölve nyílik meg**, ugyanaz az alak, amit egy mappára kattintás ad: az a lépés, amelyet legnagyobb eséllyel megváltoztatsz, amikor máshová ugrasz, a legfelső, és az útvonal többi része látható marad, amíg változtatod. Soha semmi nincs előre kitöltve, ami valójában nincs a lemezen.

### Amíg kint vagy

Az útvonal **a kiválasztott helyen kezdődik**, nem a gép könyvtárszerkezetén — és ugyanígy tesz az a mező is, amelyet az üres területre kattintva vagy a fókuszbillentyűt megnyomva kapsz: az adott hely útvonalát tartalmazza, nem a gép abszolút útvonalát, az ösvény a helyre magára összecsukva, pontosan úgy, ahogy bent a széf gyökerére csukódik össze — válaszd az `Archive`-ot, és a sor `Archive / notes / …` alakban jelenik meg, nem `/home/te/Vaults/Archive/notes/…` alakban. A vezető szakasz ikont visel annak alapján, mi ő (széf, saját mappa, meghajtó), és a <kbd>Backspace</kbd> ott megáll, nem sétál tovább fel a fájlrendszer többi részébe. Ha a *Tároló nevének megjelenítése* ki van kapcsolva, ez a szakasz csak az ikon — a beállítás a sor kezdőszakaszáról szól, bármelyik széfet is nevezi meg, nem csak a tiédet.

Az útvonalsáv **a hibaszínnel van keretezve** — ugyanazzal a gyűrűvel, amit az átnevezés mód rajzol —, ameddig a széfeden kívülre mutat. Ez tartós állapotot jelöl, nem pillanatot: ameddig ott van, az Obsidian saját kezelései közül egyik sem vonatkozik arra, amit a sor mutat, és az írás zárolva marad, amíg mást nem mondasz.

Egyébként a böngészés úgy működik, mint bent: címkék, elválasztók, gépelés, automatikus kiegészítés, kilépéshez <kbd>Backspace</kbd>. Ugyanazok a láthatósági szabályok is érvényesek, tehát a nem támogatott kiterjesztésekhez továbbra is kell az Obsidian *Minden fájlkiterjesztés észlelése* beállítása, a rejtett fájlokhoz pedig továbbra is e bővítmény beállítása.

**A jobb kattintás odakint is működik**, bár más menüt ad: a Fájlkezelő saját kezelői olyan fájlt igényelnek, amelyet a széf ismer, ezért a rajta kívüli bejegyzések helyette az útvonalból épülnek fel. Felkínálják a megnyitást (itt, jobbra, új ablakban, vagy az asztal alapértelmezett alkalmazásában), a *Útvonal másolása* lehetőséget, a *Megjelenítés a rendszer fájlkezelőjében* lehetőséget, és — ha a lakat nyitva van — az *Új jegyzet*, *Új mappa*, *Másolat készítése*, *Átnevezés…* és *Törlés* lehetőségeket. A **húzás** még mindig széfbeli fájlt igényel, és elérhetetlen marad.

Ugyanez a menü elérhető a megjelenítőben megnyitott fájlon is, jobb kattintással vagy az ablaktábla saját három pontjából, és megkérdezi az adott nézet fejlécében lévő lakatot. Semmi mást nem kérdez: az, hogy a fájl megjelenítve vagy forrásként látszik, nincs hatással arra, hogy törölhető-e, és egy kép vagy egy PDF — amelynek egyáltalán nincs forrásnézete — épp úgy törölhető, mint egy jegyzet. A *Törlés* az asztal kukáját jelenti, így onnan visszaállítható; egy kuka nélküli rendszer ezt jelenti, a fájl elpusztítása helyett.

A széfen kívüli törlés a fájlt a **rendszer kukájába** helyezi — Windowson a Lomtárba, macOS-en a Kukába — soha nem törli közvetlenül. Idekint nincs Obsidian-kuka, amiből visszaállítható lenne, így egy vissza nem vonható törlés egyáltalán nincs felkínálva: ahol egy platformnak nincs kukája, a próbálkozás ezt a hibát jelenti, a fájl elpusztítása helyett.

### Írás a széfen kívülre

Minden, ami ír, **alapból zárolva van**. Ameddig a sor a széfeden kívülre mutat, az átnevezés-kapcsoló helyét a fejlécben egy **piros lakat** veszi át — ugyanaz a szín, mint a sor körüli gyűrűé, és ugyanazért: elutasítást jelöl. A kettő egyetlen vezérlő egyetlen helyen, így soha nincs kérdés, hogy melyikük mit kapuz.

Három megnyomás, körforgásban:

| Megnyomás | Mit kapsz |
| --- | --- |
| A piros lakat | Az itteni írás megengedett. A lakat helyét az átnevezés/áthelyezés kapcsoló veszi át |
| A kapcsoló | Átnevezés/áthelyezés mód, pontosan mint a széfen belül |
| A kapcsoló újra | A mód véget ér, és a lakat ismét bezáródik — az engedély nem éli túl azt, amire megnyílt |

**Az átnevezés billentyű is a lakatot kérdezi.** A széfeden kívül a megnyomása felvillantja a lakatot nyitva-zárva, ahelyett hogy megnyitna egy módot, amelyben minden véglegesítést elutasítana: az elutasítás a munka előtt érkezik, nem utána. Nyomd meg a lakatot, vagy nyomd meg újra az átnevezés billentyűt fél másodpercen belül — a második megnyomás pontosan azt adja meg, amit a gomb megadna, ehhez a helyhez, és ezzel egyben megnyitja az átnevezés módot.

A széfeden belül nincs lakat: nincs mit feloldani, és a kapcsoló egyszerűen a helyén van.

Az engedély **egy helynek szól, nem egy pillanatnak**: túlél mindent, amit egy helyen dolgozva tennél — egy áthelyezés befejezését, elkattintást a beviteli mezőből, egy fájl megnyitását —, és véget ér, amikor másik széfet, meghajtót vagy gyökeret választasz a listából, amikor a sor visszatér egy széfbeli fájlhoz, vagy a harmadik megnyomásnál. Így egy mappán belüli áthelyezés-sorozat egyetlen megnyomást igényel, nem egyet fájlonként.

Nyitott lakattal az útvonalsáv odakint is úgy viselkedik, ahogy bent:

| Művelet | Eredmény |
| --- | --- |
| Írj be egy nem létező nevet, <kbd>Enter</kbd> | Ugyanaz a „létrehozzuk?” kérdés, mint bent; a hiányzó szülőmappák is létrejönnek. A kiterjesztés nélküli névből `.md` lesz, pontosan úgy, mint bent |
| Átnevezés/áthelyezés mód, írj be új nevet | Átnevezi azt a fájlt, amit a sor mutat. A kiterjesztés nélküli név megtartja a fájl sajátját — idekint egy mappa mindenféle fájlt tartalmaz, és egy átnevezés nem változtathat csendben `.png`-t `.md`-vé |
| Átnevezés/áthelyezés mód, böngéssz máshová, válaszd a **tartsd meg ezt a nevet** elemet | Odahelyezi a jelenlegi nevén |
| Tartsd nyomva a <kbd>Ctrl</kbd>-t bármelyiknél | Áthelyezés helyett másol, és a másolatot új lapon nyitja meg |

Zárolt állapotban mindezek megtörténés helyett jelentik, mi akadályozza őket. Egyik állapotban sem íródik felül soha semmi: a már létező célpontot elutasítja, és az elutasítás magának a fájlrendszernek a dolga (`COPYFILE_EXCL`, kizárólagos létrehozás), nem pedig olyan ellenőrzés, amely versenyhelyzetben alulmaradhat. A fájlrendszerek közötti áthelyezés — USB-kulcsról, hálózati megosztásról — a másolás-majd-törlés megoldásra vált vissza, és az eredetit csak azután távolítja el, hogy a másolat megérkezett.

**Egy jegyzet széfeden *kívülre* áthelyezése előbb megkérdez.** A `fileManager` nem tudja követni a fájlt azon a határon át: minden rá mutató hivatkozás megszűnik feloldódni, semmi sem frissíti őket, és a jegyzet kikerül a széf indexéből. Az áthelyezés így döntésként van felkínálva, nem elutasítva vagy csendben végrehajtva — egy párbeszédablak megmondja, mibe kerül, és hány jegyzet hivatkozik arra, amit áthelyezel. Megerősítve valóban áthelyezi: kimásolja, majd az Obsidian saját törlésén keresztül eltávolítja a széfből, így pontosan úgy visszaállítható, mint egy törölt jegyzet, és bármelyik lépés meghiúsulása a jegyzetet a helyén hagyja. A <kbd>Ctrl</kbd> nyomva tartása továbbra is kimásolja helyette, amelynek nincs ilyen problémája. A másik irány — egy külső fájl széfbe *behozása* — még nincs kiépítve.

### Külső fájl megnyitása

A fájlrendszer böngészése visszavezethet **a megnyitott széfedbe** — a gyökérből, a saját mappádból, ahonnan a széfeid laknak. Az így elért fájl egy hétköznapi jegyzet, ezért úgy is nyílik meg: a valódi szerkesztő, hivatkozásokkal és visszahivatkozásokkal, és a sor visszaugrik a széf-gyökerű útvonalsávra. Csak azok a fájlok maradnak az előnézetben, amelyekhez az Obsidiannak nincs nézete, mert odakint az előnézet a jobb válasz. Ahol egy előnézet mégis egy ilyen jegyzetet mutat — mondjuk egy újranyitott munkaterületen —, a felső sora felkínálja a **Megnyitás *(széf)*-ben** lehetőséget, amely ugyanazt kínálja, amit kézzel is megtehetnél.

Az Obsidian szerkesztője csak a széfen belüli fájlokkal működik, így egy külső fájlt **nem lehet** valódi jegyzetként, hivatkozásokkal, visszahivatkozásokkal és a többivel megnyitni — ez az alkalmazás korlátja, nem a bővítményé. Egy ilyet kiválasztva helyette **előnézet** nyílik meg, csak olvashatóan, amíg mást nem mondasz:

| Típus | Megjelenítve mint |
| --- | --- |
| `.md`, `.markdown` | Megjelenített Markdown |
| `.html`, `.htm`, `.xhtml` | A megjelenített oldal |
| Képek, hang, videó, PDF | Natív lejátszó/megjelenítő |
| Bármely más **szöveges** fájl (`.json`, `.css`, `.log`, `.txt`, …) | Szó szerinti, egyszerű szöveg |
| Megjelenítő nélküli bináris formátumok (`.zip`, `.exe`, …) | A *Megnyitás az alapértelmezett alkalmazásban* lehetőségnek adva át |

A megjelenítőnek két olvasata van egy fájlról, és mivel ezek kizárják egymást, csak az látszik, amelyikre **átváltanál**:

| | Mit tesz | Alapértelmezett ehhez |
| --- | --- | --- |
| **Megtekintés Markdownként** | Jegyzetként jeleníti meg a fájlt, csak olvashatóan | `.md`, `.markdown` |
| **Megjelenítés oldalként** | Az oldalként jeleníti meg a fájlt, amilyen valójában, csak olvashatóan | `.html`, `.htm`, `.xhtml` |
| **Szerkesztés szövegként** | A forrás, szerkeszthetően | minden más |

A széfen kívül a **Szerkesztés szövegként** az a megnyomás is, amely feloldja a csak olvasható állapotot — a mód és az engedély egyetlen mozdulat, nem két végiggondolandó gomb. **Valahányszor a megnyomás feloldaná a csak olvashatót**, pirosas árnyalatot kap, akár helyben élesíted a szerkesztést, akár egyenesen a megjelenített nézetből érkezel; a széfen belül nincs mit feloldani, ott tehát egyszerű marad. A **Megtekintés Markdownként** halvány kiemelőszínt kap — ugyanazt az árnyalatot, amit az Obsidian a kijelölt szövegnek ad —, ami visszaútként jelöli meg, nem cselekvésre hívásként.

Mivel a gomb a *szerkesztést* követi, nem a nyers módot, a szövegnézetben csak olvashatóan álló fájl is felkínálja a **Szerkesztés szövegként** lehetőséget: épp ez a megnyomás élesíti. Az a fájl, amelybe soha nem lehet írni — csonkított vagy olvashatatlan —, helyette **Megtekintés szövegként** feliratot mutat, mert a megnyomás csak ennyit tud adni.

Az alapértelmezések a hasznos, nem a betű szerinti irányba állnak: egy héjszkriptben a `#` megjegyzés, nem címsor, tehát egy `.log` Markdownként való megjelenítése csendben elnyelné. Mindkét alapértelmezés fájlonként felülbírálható, és a választás bekerül a lap előzményeibe, így az előre/vissza és az újranyitott munkaterület megőrzi — rengeteg jegyzet lakik `.txt` fájlokban, és rengeteg `.md` fájlt könnyebb forrásként olvasni.

#### Mit tehet egy HTML-oldal

Semmit. Az oldal egy keretben jelenik meg, **minden jogosultság megvonva** — nincs parancsfájl, nincs űrlap, nincs navigáció, nincs saját eredet —, és egy tartalombiztonsági szabály, amely egyáltalán nem enged neki hálózatot. Ez nem öncélú óvatosság: egy szokásos módon betöltött helyi oldal megosztaná ezen az ablak eredetét, ez az ablak pedig az Obsidian, így egy letöltött HTML-fájlban lévő parancsfájl az alkalmazásod belsejében futna, az alkalmazásod hatókörével.

Amibe ez kerül, az mindaz, amit az oldal *tesz*; amit megtart, az mindaz, ami az oldal *maga*. A fájl mellett fekvő stíluslapokat és képeket beolvassa, és beviszi a keretbe, így egy elmentett oldal továbbra is önmagára hasonlít. Az oldal saját mappáján kívülre mutató, és a webre mutató hivatkozások pontosan úgy maradnak, ahogy írva vannak, és egyszerűen nem töltődnek be — egy helyi fájl nem szólhat csendben egy szervernek, hogy megnyitottad.

A parancsfájlok **eltávolítva** vannak, nem csak blokkolva, így az oldal, amit látsz, és a forrás, amelyre átválthatsz, egyetlen kimondott módon tér el, nem attól, amit a keret csendben elutasított futtatni. Az oldalon belüli hivatkozások nem csinálnak semmit. Amikor az igazi dolgot akarod — parancsfájlokkal, hálózattal és a többivel —, a *Megnyitás az alapértelmezett alkalmazásban* átadja a böngésződnek, amely a megfelelő eszköz erre.

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

- **Megnyitás *(széf)*-ben** — akkor jelenik meg, ha a fájl egy másik széfedhez tartozik. Az Obsidian saját URI-kezelőjének adja át, amely megnyitja azt a széfet egy ablakban, benne a jegyzettel, valódi, szerkeszthető jegyzetként. Ez az ablak pontosan úgy marad, ahogy volt; semmi sem vált át alattad.
- **Megtekintés Markdownként** / **Megjelenítés oldalként** / **Szerkesztés szövegként** — a fájl két olvasata; az utolsó a széfen kívül a csak olvashatót is feloldja.
- **Megnyitás az alapértelmezett alkalmazásban** — a fájlt az asztal alapértelmezett alkalmazásának adja át, beleértve azokat a bináris formátumokat is, amelyeket ez a megjelenítő nem tud mutatni. Pontosan úgy megszövegezve, mint az Obsidian saját, ugyanerre a műveletre vonatkozó bejegyzése, mert ugyanaz a művelet.

A megjelenítő egy **jobb kattintásra** is válaszol: a szövegszerkesztőn belül *Kivágás* / *Másolás* / *Beillesztés* / *Összes kijelölése* lehetőségekkel, bárhol máshol a fájl saját menüjével. Az Obsidian fejlécben lévő három pontos menüje is hordozza ezt a menüt — a széfen kívül különben csak a *Osztás jobbra* és *Osztás lefelé* lehetőségeket kínálná.

A széfen kívül semmi sem íródik, hacsak előbb meg nem nyomod a *Szerkesztés szövegként* gombot. A teljes tájékoztatásért lásd a README [A széfen kívül](README.hu.md#a-széfen-kívül) szakaszát.

## Fájl áthelyezése egy útvonalbeli mappára húzással

Az útvonal minden mappája fogadja a rádobást, így **egy erre húzott jegyzet
odaköltözik** — a legrövidebb út egy jegyzet és a fölötte lévő bármelyik mappa
között van, mivel a célpont már a képernyőn van. Húzhatsz a Fájlkezelőből, a
listából, a jegyzet saját nevéből a fejsorban, vagy Obsidianban bárhonnan
máshonnan, ami fájlt eredményez: ez az alkalmazás saját húzása, így a rálebegő
felirat, a kurzor és a kiemelés is az, amit a Fájlkezelő rajzol.

**A széf neve is fogad rádobást**, mivel ez a sor legfelső mappája — az egyetlen
mozdulat, amely egy jegyzetet a széf gyökerébe tesz innen.

**Egy egész kijelölés is húzható egyszerre**, és egyként mozog: ha közülük
bármelyik nem lenne áthelyezhető, a rádobás visszautasításra kerül, nem pedig
néhányat áthelyez, míg a többit csendben kihagyja.

A linkek követik a jegyzetet, pontosan úgy, mint amikor a Fájlkezelőből
mozgatod, vagy útvonal beírásával.

Egy mappa, amely **nem tudta elfogadni a rádobást, semmit sem kínál** — sem
*Áthelyezés ide* feliratot, sem kiemelést a mappán — helyette a fejsorra
vonatkozó Obsidian-válasz, a *Megnyitás ebben a lapban* jelenik meg. Három eset:

- a mappa, amelyben a fájl **már benne van**, mivel már ott van;
- egy mappa, amelyet **önmagára vagy saját leszármazottjára** dobtak, ami nem
  hagyna neki honnan jönnie;
- egy kijelölés, amely **egy mappát és valamit annak belsejéből** tartalmaz,
  mivel a mappa áthelyezése magával viszi a benne lévőt is.

Egy mappa, amely már tartalmaz egy **azonos nevű fájlt**, elfogadja a rádobást,
és megkérdezi, mi legyen az útban lévővel, ugyanazzal a párbeszédablakkal, mint
egy beírt vagy kiválasztott foglalt név esetén — lásd [Egy név, amely foglalt](#egy-név-amely-foglalt).
Itt semmi sem íródik felül.

Csak a **széfen belüli** mappák fogadnak rádobást. Amíg a sor a széfen kívülre
mutat, a szakaszai visszautasítják, mert egy jegyzet kivétele a széfből minden
rá mutató linket eltör — ez egy kérdést megérő döntés, nem egy mozdulatot. A
tudatos módja ennek megtételére még mindig az útvonal beírása, amely előbb
megkérdez, és megmondja, hány jegyzetet érintene.

## Szöveg vagy fájl leírásához való rádobása

Ugyanazok a célpontok **tartalmat** is fogadnak, nem csak fájlokat, és a kettőt
az különbözteti meg, mit húzol, nem az, hova engeded el.

**Egy jegyzetre, amelyet a sor már megnevez** — a jegyzet saját nevére, vagy egy
elválasztóra, amelynek mappájához mappajegyzet tartozik — amit ráengedsz, a
végére kerül, egy üres sor után. Előbb megkérdez, mert ez egy már létező fájlba
ír bele, és a húzás olyan mozdulat, amelyet egy bizonytalan kéz véletlenül is
megtehet. Szerkesztőből kihúzott szöveg, az asztalodról behúzott fájl és a
széfből kihúzott jegyzet is működik; egy fájlt szövegként olvas be, egy bináris
fájlt viszont visszautasít, nem pedig egy képernyőnyi értelmetlenségként
beilleszt.

**Egy helyre — a széf nevére vagy egy mappára** — még semmi sem íródik, mert még
semmi sincs elnevezve. A mező ott nyílik meg, azzal, amit ráengedtél, és a
beírt név az, amely rögzíti: egy új jegyzet *létrejön* a szöveggel, egy már
létezőtől pedig pontosan a fentiek szerint kérdez. <kbd>Esc</kbd>, vagy máshova
kattintás elengedi az egészet.

**A sor kékre gyűrűzik**, amíg egy tartalomként landoló húzás fölötte van, és
kék marad, amíg a mező ilyet tartalmaz — ugyanaz a kék, ugyanazt üzeni: az, mi
következik, az általad hozott szövegről szól. A saját széfedből egy mappára
húzott fájl még mindig azt jelenti: *helyezd oda*, megtartja Obsidian saját
kiemelését, és sosem gyűrűzik kékre; ez a mozdulat már korábban is itt volt, és
a tartalom háttérbe húzódik előle.

## Amikor az útvonal hosszabb, mint a panel

A nevek **rövidülnek, nem pedig összepréselődnek**, abban a sorrendben, amire
legkevésbé van szükséged:

1. **Elsőként a széf neve**, egészen az ikonjáig. Tudod, melyik széfben vagy;
   az ikon tovább mondja, honnan indul az útvonal.
2. **Majd a fájl kiterjesztése**, ha bekapcsoltad — ugyanaz a három karakter
   csaknem minden fájlon egy széfben. Teljesen eltűnik, nem rövidül: egy fél
   kiterjesztés semmit sem mond, amit egy hiányzó kiterjesztés nem mondana.
3. **Majd a mappák, a leghosszabbal kezdve.** A leghosszabb mappanév a következő
   leghosszabb hosszára rövidül, majd mindkettő együtt, és így tovább, mindegyik
   a saját alsó határánál megállva — így egy nagyon hosszú mappa mindent felad,
   amivel a másiknál hosszabb, mielőtt egy mellette lévő rövid név egyetlen
   betűt is elveszítene.
4. **Utoljára a fájl saját neve**, és körülbelül hat karaktert megtart. Ez a
   fejsor lényege.

A helyet **folytonosan** adja fel, egy pixel törtrészenként, nem betűnként
egyszerre: az engedő név pixelre pontosan levágásra kerül, és `…` alatt
elhalványul, így egy lassan húzott panel simán szűkíti a sort, és utána semmi
sem mozdul lépésekben. Mielőtt bármely betű eltűnne, az elválasztók körüli tér
kerül elköltésre — ez a sor egyetlen térköze, és semmilyen információt nem
kóstál — és egy rövidített név ott ér véget, ahol az elválasztó elkezdődik,
üres doboz csík nélkül a kettő között.

**A mező azt kapja, amit tartalmaz.** Egy mező megnyitása útvonal beírásához
nem szorítja el a mellette lévő mappákat: pontosan olyan széles, mint a benne
lévő szöveg, és nő, ahogy gépelsz, így a nyomvonal megtart mindent, amire a
mezőnek nincs szüksége. Csak amikor nincs elég hely mindkettőnek, akkor görgeti
a sor, és ekkor a mező az egyetlen dolog, amely soha nem enged — ez szerkesztés
alatt álló szöveg, nem egy illesztendő név.

Semmi nem vágódik le annál jobban, ami megkülönbözteti a szomszédjaitól:
`Projects2025` és `Projects2026` ugyanabban a mappában `…025` és `…026`-ra
rövidül, nem pedig egy olyan előtagra, amely ugyanazzá a szóvá tenné őket,
míg `Reports` a `Receipts` mellett lerövidülhet `Rep…`-re. Ezen felül minden
név megtart egy **olvasható szélességet** — egy mappánál kb. négy betűnyit, egy
fájlnévnél hatot, azon a betűtípuson mérve, amelyben a sor valójában
kirajzolódik, nem megszámolva. Négy szűk betű és négy széles betű nem ugyanannyi
névnyi, így a `lilliliillil` többet megtarthat magából, mint a `WWMMWWMMWWMM`,
és a képernyőn maradt rész mérete mindkét esetben ugyanannyi. A rövid neveket
teljesen érintetlenül hagyja — egy `A…`-ra ledolgozott név egyedi, de még
olvashatatlan. **A szóközök nem számítanak bele.** Hat karakter annak
megmondásához, melyik fájlról van szó, hat elolvasásra érdemes karakter, így a
köztük lévő üres helyek ingyen utaznak, és sosem marad egy a `…` mellett, ahol
egyébként is láthatatlan lenne.

**Egy név ott vágódik, ahol a szomszédai megegyeznek vele, és középen, ahol
sehol nem egyeznek.** Két mappa, `aaaa-common-one` és `aaaa-common-two`, minden
mást megosztanak, csak az utolsó három karaktert nem, így a végét levágva az a
fele marad, ami semmit sem mond: helyettük `…one` és `…two` áll, ami rövidebb
*és* megkülönbözteti őket. Ahol az egyezés a végén van — `alpha-draft` a
`beta-draft` mellett — a vég az, amely eltűnik; ahol mindkét végén, a közepe
marad. Egy közeli szomszéd nélküli név a közepét veszíti el, mivel egy név
azzal kezdődik, mi ő, és azzal zárul, melyik — egy fájlnál a kiterjesztésével:
`annual…2026.md`.

Egy rövid közös rész nem számít. A `parallel structures` véletlenül ugyanazzal
a két betűvel végződik, mint a mellette lévő `Schemes`, és ez nem ok arra, hogy
bármelyiket egészben megtartsa — már az elejéről három karakter is
megkülönbözteti őket.

Semmi nem tördelődik második sorba. Amikor még a legrövidebb becsületes nevek
sem férnek el, a sor **oldalra görgetődik**, a végén parkolva, ahol a fájl van
— ezen a ponton már nincs mit tömöríteni, és a további vágás inkább elrejtene,
mint rövidítene. A görgőkerék bárhol görgeti, ahol a mutató a sor fölött van, és
mindkét vég elérhető: görgetés közben a sor a kezdetéhez igazodik, bármit is
mond az igazítási beállítás, mert egy dobozban középre igazított tartalom,
amelyet kinőtt, balra és jobbra egyaránt kifolyik — és az a fél egyáltalán nem
érhető el görgetéssel.

**Rámutatva egy rövidített névre, az teljes egészében visszatér**, ameddig
rámutatsz, a bal szélig görgetve, hogy a visszatért rész teljes egészében
képernyőn legyen. **Rákattintva megmarad**: a mező megnyílik, mutatva a
mappát, amelyre kattintottál, amit utána kínál, és amit beírsz, és tovább
mutatja őket, miután a mutató elmozdult. A nevek helyben maradnak, amíg a sort
görgeted vagy beírsz bele — ha egy név egy sort olvasni szándékozó mozdulat
alatt kinyílna, mindent elmozdítana alólad, ami utána következik.

A **kezdő szakasz mindig tooltipet visel, és ez az abszolút útvonal** —
`/home/te/Vaults/Notes`, vagy ahol a sor kezdődik. Ez az egyetlen dolog a
sorral kapcsolatban, amit semmi a képernyőn nem tud elmondani: a név megmondja,
*melyik* széfben vagy, de sosem, hol van. Ott van, függetlenül attól, hogy
kellett-e valamit rövidíteni.

**Tároló nevének megjelenítése** kikapcsolva a név nem törlődik, csak nulla
szélességre kerül — így az ikonra mutatva visszaadja, pontosan úgy, mint amikor
egy olyan névre mutatsz, amelyet a sornak rövidítenie kellett.

**Fájlkiterjesztések megjelenítése** visszateszi a kiterjesztést a sor
fájlnevére. Kikapcsolva — az alapértelmezett — a sor úgy nevezi meg a
jegyzetet, ahogyan Obsidian a fejlécében is, a `.md` nélkül, amelyet
csaknem minden fájl megoszt a széfben; bekapcsolva úgy nevezi meg, ahogyan a
fájlrendszer, ami akkor kell, ha a széf nem csak jegyzeteket tartalmaz. Ez is
a második dolog, amit a sor feladat, amikor a hely szűkös, közvetlenül a széf
neve után.
Egy tooltip megadja a többit: nemcsak a nevet, hanem mindent, amit a sor alatta
mutat, mint `…/name/folder/note.md`, így egyetlen rámutatás megválaszolja
mindkettőt: "mi ez" és "mi van alatta". A széf ikonja ugyanígy nevezi meg a
széfét, amikor a név kikapcsolva van vagy összenyomódott.

## A figyelmeztető színek

| | Mikor | Mit jelent |
| --- | --- | --- |
| **Piros** gyűrű az útvonalsávon | A sor a széfen kívülre mutat | Obsidian nem tudja megnyitni, ami ott van, jegyzetként, és semmi nincs kint leírva, amíg ki nem nyitod a lakatot. |
| **Narancssárga** gyűrű az útvonalsávon | A fájl egy olyan szövegtípus, amelyhez Obsidiannak nincs nézete | Egy figyelmeztetés. Obsidian átadná az asztalod alapértelmezett alkalmazásának; ehelyett a bővítmény mutatja. |
| **Piros** szöveg a nyitott mezőben | Azon az útvonalon még nincs semmi | <kbd>Enter</kbd> létrehozza majd, nem megnyitja. Kevésbé figyelmeztetés, inkább egy kijelentés arról, mit tesz a következő gombnyomás — lásd [Útvonal beírása](#útvonal-beírása). |
| **Piros** lakat az átnevezés-kapcsoló helyén | A sor a széfen kívülre mutat, és az odaírás még zárolt | Ugyanaz a piros, mint a gyűrűnél, ugyanazért: egy visszautasítást jelöl. Rá kattintva engedélyezi az ide írást, és visszaadja a helyet a kapcsolónak — lásd [Írás a széfen kívülre](#írás-a-széfen-kívülre). |

A **két gyűrű független, és mindkettő fennállhat egyszerre** — egy külső
`.json` a széfen kívül van *és* olyan típus, amelyhez Obsidiannak nincs
szerkesztője. A nézetben külön sorokként jelennek meg, mindegyik csak a saját
tényét állítva. Az útvonalsávon a piros nyer, ahol mindkettő érvényes, mivel két
gyűrű csak zajt jelentene. A piros *szöveg* egy teljesen harmadik dolog: arról
szól, mi van beírva, nem arról, hova mutat a sor, így megjelenhet mindkét
gyűrűn belül, vagy semelyiken.

A narancssárga szint szándékosan szűk. A regisztrált típusok (Markdown, canvas,
képek, PDF, hang, videó) helyesen kezelve semmit nem kapnak. A bináris fájlok
sem kapnak semmit — nem fogsz véletlenül egy `.zip`-et kupaccá szerkeszteni. Az,
ami marad, pontosan a veszély: egy `.json`, `.css` vagy `.log`, amelyet a
**Minden fájltípus megjelenítése** tett láthatóvá. A lista szándékosan
szélesebb: ott minden, ami nem jegyzet, narancssárga — lásd [hogyan
színeződnek a lista sorai](#hogyan-színeződnek-a-lista-sorai).

## Átnevezés/áthelyezés mód

A ceruza gomb a fejsor jobb szélén — a nézetmód-gomb mellett, ugyanolyan
méretben, mint a natív gombok — kapcsolja az átnevezés/áthelyezés módot. A
széfen kívül egy piros lakat áll a helyén, amíg meg nem nyomod; lásd [Írás a
széfen kívülre](#írás-a-széfen-kívülre). A fejsor ekkor kiemelőszínű
kerettel jelenik meg, pontosan úgy, mint az átnevezés a Fájlkezelőben. Ugyanazok
a kattintások és billentyűleütések most az Obsidian `fileManager.renameFile`
függvényén keresztül rögzítenek egy áthelyezést vagy átnevezést, így a
jegyzetre mutató minden link követi.

Átnevezés közben:

- A jelenlegi fájlnév minden mappa listájába rögzítve van, így egy jegyzet
  áthelyezése átnevezés nélkül egyetlen kattintás.
- A célmappában már foglalt nevek **pirosak** — egy mappa, amely már tartalmazza
  a nevet, és egy azonos nevű fájl — így az ütközés még kiválasztás előtt
  látható. Ezek még kiválaszthatók: lásd lejjebb.
- A bevitel élőben validálódik Obsidian saját átnevezési szabályai szerint —
  ugyanaz a karakterkészlet, ugyanazok az üzenetek, ugyanaz a piros tooltip,
  amit a fájlfa átnevezésekor kapsz — így egy tiltott név megjelölésre kerül
  gépelés közben, és nem rögzíthető.
- A fejsoron kívülre kattintás, vagy a fejsor fókuszvesztése, befejezi az
  átnevezés módot.

### Egy név, amely foglalt

Egy már létező névre való áthelyezés vagy átnevezés **kérdez, nem
visszautasít.** Egy párbeszédablak nyílik meg két szerkeszthető útvonallal:
hova kerül a fájlod, és hova kerül az útban lévő fájl — piros, amíg az foglalt.
Mindegyik útvonal úgy is rajzolódik, ahogyan az útvonalsáv rajzol egyet, a
különböző részekkel kiszínezve, és utoljára rövidítve, így egy hosszú útvonal
is mutatja, mi változik.

Mindkét mezőnek van egy listája. A második a szokásos kiutakat tartalmazza:

- **Helycsere** — az elmegy a fájlod régi mappájába, a saját neve alatt.
- **Névcsere** — a helyén marad, és felveszi a fájlod régi nevét.
- **Mindkettő cseréje** — felveszi a fájlod régi útvonalát.
- `-1`, `-bak` és `-old` a saját neve mellett.
- A fájlok két neve.

Az első lista felkínálja, hova ment volna a fájlod, a **Marad a helyén**
lehetőséget, a saját nevét a célmappában, és `-1`, `-bak` és `-old` mellette. Az
a kiút, amelynek útvonala foglalt, kiszürkítve nem választható. Egy kiválasztás
**csak kitölti a mezőt** — még szerkeszthető marad —, és az **Alkalmaz**
áthelyezi mindkettőt, linkekkel együtt; a **Mégse** semmit sem mozgat. Egy
foglalt név kiválasztása a listából ugyanígy kérdez, és úgy is egy jegyzet
olyan mappára húzása, amely már tartalmazza a nevét.

## Egyetlen billentyű mindkét átnevezéshez

Az átnevezés parancs (alapértelmezetten <kbd>F2</kbd>, vagy amire átállítottad) **váltakozik** Obsidian beépített cím-átnevezése és e beépülő modul útvonalsávjának átnevezése között. Ha kikapcsoltad Obsidian beépített címét, az útvonalsáv marad az egyetlen cél, így a billentyű sosem tesz semmit.

Az útvonalsávban a **kiterjesztés nélküli névvel** nyílik meg — ez az, amit egy átnevezés szinte mindig szerkeszt, és ugyanez az, amit a névre kattintás kijelöl. Nyomd meg újra, és azt teszi, amit ott a <kbd>Tab</kbd> tenne: a néven állva ez a következő fok — a név a kiterjesztésével, az útvonal a széfmappádtól, az útvonal a rendszer gyökerétől; ha valamit beírtál, kiegészíti azt, ahogy a <kbd>Tab</kbd> is tenné.

**A ciklus a fejlécnél zárul.** Öt lenyomás körbevisz rajta — a beépített cím, a név, a név a kiterjesztésével, az útvonal a széfedtől, az útvonal a rendszer gyökerétől —, és a hatodik ismét a beépített cím. Ez a lenyomás az egyetlen, amely eltér a <kbd>Tab</kbd>-tól, amely ehelyett visszakörbefordul az útvonal elejére — és a hetedik oda megy, ahová a <kbd>Tab</kbd> köre visz: a széf gyökeréhez, a teljes útvonallal a mezőben és az első mappájával megjelölve. Így minden fokot, amit a <kbd>Tab</kbd> elér, a billentyű is eléri.

A **Fókusz az útvonalsávra** parancs ugyanezt teszi a mezőn belül — bármit, amit a <kbd>Tab</kbd> tenne —, és ahol a <kbd>Tab</kbd> körbefordulna, ott visszaadja a kurzort a jegyzetnek. A következő lenyomása a körbefordulás: a széf gyökere, az első mappa megjelölve.

**Egy már nyitott mezőben** a billentyű átnevezéssé alakítja azt ott, ahol áll — megtartva a szöveget, a kurzort és a kijelölést —, és a **Fókusz az útvonalsávra** ugyanígy veszi le róla az átnevezést. **Bármi más** lenyomás vagy kattintás a nyomások között újraindítja bármelyik ciklust, így egy szerkesztés utáni lenyomás sosem érkezik egy korábbi fokra.

A széfen kívül a billentyű is működik — ott nincs beépített cím, így az első lenyomás egyenesen az útvonalsávhoz megy.

Ez úgy működik, hogy a `workspace:edit-file-title` parancsot burkolja be, nem pedig elkapja a billentyűt, így a gyorsbillentyű átállítása és a parancs parancspalettából való futtatása is változatlanul működik.

## Hogyan színeződnek a lista sorai

| Szín | Jelentése |
| --- | --- |
| **Lila** | Egy jegyzet (`.md`, `.markdown`) — amit Obsidian jegyzetként nyit meg, kiválasztva egy vegyes tartalmú mappából |
| **Narancs** | Nem jegyzet — bármi, amit Obsidian nem jegyzetként nyit meg, PDF-től `.txt`-ig, velük együtt a `:page` bejegyzések. Egy vegyes tartalmú mappa a benne lévő jegyzetekért van beolvasva, és egyetlen szín mindenki másnak gyorsabban közli ezt, mint egy figyelmeztetés csak néhányukon; lásd [a figyelmeztető színek](#a-figyelmeztető-színek) |
| **Halványított** | A széfeden kívül, ahol a széf saját kezelése nem érvényes |
| **Kék**, félkövér | Ahol már vagy: e sáv saját jegyzete, és a mappa, amelyen az útvonalsáv áll. Átnevezés/áthelyezés módban a *ezt a nevet tartsd meg* bejegyzés áll a jegyzet helyén — mindkét esetben ugyanaz a jegyzet |
| **Piros** | Csak átnevezés/áthelyezés módban: a név foglalt. Még mindig kiválasztható — egy kiválasztása megkérdezi, mi legyen az útban lévő fájllal; lásd [Egy foglalt név](#egy-név-amely-foglalt) |

A **mappák félkövérek**, így egy mappa saját jegyzetének nincs szüksége külön színre, hogy elváljon a mappájától: lila, mint bármely más jegyzet. Egy **vonal egy sor szélén** jelöli azokat a neveket, amelyek azzal kezdődnek, amit beírtál — kék, ahol tovább egyeznek, zöld azon az ágon, amelyet a javaslat vesz; lásd [Útvonal beírása](#útvonal-beírása).

A mező ugyanazokat a színeket veszi fel arra, amit megnevez — lásd [Útvonal beírása](#útvonal-beírása).

## Láthatósági szabályok

- A nem támogatott kiterjesztésű fájlok csak akkor jelennek meg a listákban, ha Obsidian **Detect all file extensions** beállítása be van kapcsolva — **a széfen belül**. Kívül a beállítás nem érvényes: azt szabályozza, mit indexel a széf, és odakint semmi sincs a széfben, így egy `.txt` a jegyzeteid mellett mindkét esetben szerepel a listában.
- A lista legfeljebb 1000 bejegyzést mutat, tízszer annyit, mint Obsidian saját korlátja. Ha egy mappában több van, az utolsó sor megmondja, hány maradt ki; gépelj tovább a lista szűkítéséhez.
- Rejtett fájlok és mappák csak akkor jelennek meg, ha e beépülő modul **Rejtett fájlok megjelenítése** beállítása be van kapcsolva.
- **A felülírás elleni védelem a láthatóságtól függetlenül azonosan működik** — egy rejtett fájl felülírását is megakadályozza.

## Puskázó

Egy **idézőjelbe zárt** útvonalat automatikusan kicsomagol neked. Windows *Copy as path* parancsa `"C:\Users\te\jegyzet.md"` formában adja ki, idézőjelekkel együtt, és egy shell ugyanezt teszi minden szóközt tartalmazó útvonallal; akár beillesztve, akár begépelve, mindkét módon működik. Csak a dupla idézőjel, és csak az egész köré illesztett párként — valódi névben nem fordulhat elő, míg egy aposztróf igen.

| Ha ezt akarod… | Ezt tedd |
| --- | --- |
| Egy mappát megnyitni (a jegyzetét, vagy felfedni) | Kattints az adott mappa **utáni** elválasztóra |
| Egy mappának mappajegyzetet adni, amelyik még nincs neki | **Dupla kattintás** ugyanarra az elválasztóra (mappajegyzet-modul szükséges hozzá) |
| Egy mappát testvérére cserélni | Kattints a mappa nevére, majd gépelj vagy válassz |
| A jegyzetet átnevezni vagy más célra állítani | Kattints a jegyzet nevére — a kiterjesztésével együtt |
| Egy mappa tartalmát böngészni | Kattints a mappa nevére; a lista a szülőjét sorolja fel, így kattints a kívánt mappa **alattira** |
| Egy mappát és minden alatta lévőt újraírni | **Dupla kattintás** a mappa nevére, majd gépelj |
| Az útvonalat egy mappától lefelé szerkeszteni | Kattints a mappa nevére, majd <kbd>→</kbd> a kijelölés megszüntetéséhez |
| Egy fájlra ugrani az útvonala beírásával | Kattints a fájlnévre vagy az üres helyre, gépelj, <kbd>Enter</kbd> |
| Egy fájlt inkább új lapon megnyitni | <kbd>Ctrl</kbd> a kiválasztás közben, vagy <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| A jegyzetet áthelyezés helyett valahova másolni | Ceruza, majd <kbd>Ctrl</kbd> a cél kiválasztása vagy megerősítése közben |
| Jegyzetet létrehozni egy nem létező útvonalon | Gépeld be az útvonalat — a mező **pirosra** vált, amint semmi nem egyezik vele a listában sem —, majd <kbd>Enter</kbd>. A széfen belül azonnal létrejön; kívül előbb rákérdez |
| Megállapítani, hogy egy beírt útvonal már létezik-e | Nézd meg a színt: felveszi annak a sornak a színét, amit megnevez, és a piros azt jelenti, hogy az <kbd>Enter</kbd> létrehozná |
| Egy szinttel lejjebb lépni gépelés közben | Gépelj `/`-t |
| Egy szinttel feljebb lépni gépelés közben | <kbd>Backspace</kbd> az üres beviteli mezőben |
| A mező előtti mappákat behozni a mezőbe | <kbd>←</kbd> a mező elején eggyel; <kbd>Shift</kbd>+<kbd>Home</kbd>, vagy <kbd>Home</kbd> zárt listával, mindegyikkel |
| A nyitott jegyzetet áthelyezni vagy átnevezni | Kattints a ceruzára, majd böngéssz vagy gépelj a fentiek szerint |
| Egy foglalt névre áthelyezni | Erősítsd meg mindenképp: a párbeszédablak lehetővé teszi a helyek, a nevek vagy mindkettő cseréjét, vagy az útban lévő fájl más nevének megadását |
| Áthelyezni átnevezés nélkül | Ceruza → kattints a célmappába → válaszd a rögzített aktuális fájlnevet |
| Átnevezni a helyén | <kbd>F2</kbd> kétszer (első lenyomás a beépített címre megy, második a fejlécre) |
| Egy másik széfre, otthonra vagy meghajtóra ugrani | Kattints a széf nevére |
| Fájlt megnyitni a széfen kívülről | Széf neve → válassz egy helyet → böngéssz → válaszd ki a fájlt (csak olvasható, amíg a *Szerkesztés szövegként*) |
| A beírt nevet kiegészíteni | <kbd>Tab</kbd>, vagy <kbd>End</kbd> a felkínáltért; a <kbd>→</kbd> egy betűjét veszi belőle |
| Belépni a mappába, ha már csak egy név maradt | <kbd>Tab</kbd> ismét |
| Egy lépést visszavonni, vagy elhagyni a mappát | <kbd>Shift</kbd>+<kbd>Tab</kbd> |
| Megragadni a teljes útvonalat, vagy a rendszerútvonalat | <kbd>Tab</kbd> a végén túl, vagy négy kattintás |
| Egy nevet, útvonalat vagy rendszerútvonalat másolni | Kattints rá jobb gombbal kétszer; az üres helyre háromszor a rendszerútvonalért |
| Elérni, amit a széfkezelő kínál ehhez a széfhez | Kattints jobb gombbal a sor elején lévő ikonra |
| A széf azonosítóját másolni | Kattints jobb gombbal a sor elején lévő ikonra |
| Egy másik böngészett széfet megnyitni | Kattints jobb gombbal a nevére a sor elején |
| A fájl kiterjesztését látni a soron | Kapcsold be a **Fájlkiterjesztések megjelenítése** beállítást |
| Egy mappaszakaszt új lapon megnyitni | <kbd>Ctrl</kbd> vagy középső kattintás rajta, vagy húzd a lapsávra |
| Elérni az útvonalsávot billentyűzetről | Kösd hozzá a *Fókusz az útvonalsávra* parancsot a Gyorsbillentyűkben |
| Egy webcímet vagy egy `obsidian://` linket megnyitni | Gépeld be a sávba, és nyomd meg az <kbd>Enter</kbd>-t |
| Bármit megszakítani | <kbd>Esc</kbd>, vagy kattints a fejlécsávon kívülre |
| Bejegyzéseket kipróbálni, mielőtt döntenél | Nyilazz vagy vidd az egeret a listán végig; a <kbd>↑</kbd> a tetején túl visszaadja a szöveged |
| Egy jegyzetet egy fölötte lévő mappába áthelyezni | Húzd rá arra a mappára a sorban |
| Egy szövegtöredéket új jegyzetként megőrizni | Húzd a szöveget egy mappára, gépelj egy nevet, <kbd>Enter</kbd> |
| Egy szövegtöredéket hozzáadni az olvasott jegyzethez | Húzd rá a jegyzet nevére, erősítsd meg |
| Egy lerövidített mappanevet teljesen látni | Vidd rá az egeret, vagy szélesítsd a panelt |
| Megtudni, hol él maga a széf | Vidd az egeret a sor elején lévő ikonra |
| Kivenni egy jegyzetet a széfből | Ceruza → böngéssz kívül → erősítsd meg a párbeszédablakot (a linkek megszakadnak) |
| Engedélyezni az írást a széfeden kívülre | Kattints a **piros lakatra** a fejlécben; helyét az átnevezés kapcsoló veszi át |
| Ismét lezárni | Kattints a kapcsolóra, amíg a lakat vissza nem kerül — egy nyomás be, egy nyomás ki |
| Egy fájlt törölni a széfen kívül | Nyisd ki a lakatot, majd kattints jobb gombbal a fájlra: a *Delete* a rendszered lomtárába helyezi |

## Beállítások

| Beállítás | Lehetőségek | Alapértelmezett | Mit csinál |
| --- | --- | --- | --- |
| **Language** | Obsidian alapértelmezett, vagy 46 nyelv bármelyike | Obsidian alapértelmezett | Milyen nyelven jelenjen meg e beépülő modul saját szövege. Az *Obsidian alapértelmezett* a Megjelenés beállításokban megadott nyelvet követi, amit szinte mindenki szeretne. Maga a sor — a neve, a leírása és az *Obsidian alapértelmezett* — angol marad, bármit is választasz, mert ez a kiút egy olyan nyelvből, amelyet nem tudsz elolvasni. A görög és a szanszkrit itt le van fordítva, és hiányzik Obsidian saját listájából, így ez a beállítás az egyetlen módja elérésüknek. |
| **Alignment** | Balra / Középre / Jobbra | Balra | Hol áll az útvonalsáv a fejlécsorban. A *Középre* megfelel Obsidian klasszikus kinézetének. |
| **Delimiter** | Bármilyen karakter | `/` | A szakaszok között húzott elválasztó. Hat egykattintásos előre beállított érték (`/ > ▸ › \ •`) áll a szövegmező előtt. |
| **Show vault name** | Be / Ki | Be | Hogy maga a széf az útvonalsáv első szakasza-e. Kikapcsolva ez a szakasz 🏠 ikonná válik ahelyett, hogy eltűnne, így az útvonal továbbra is valami kattinthatóval kezdődik. |
| **Folder name opens the dropdown** | Be / Ki | Be | Felcseréli, mit csinál egy mappanév és az utána álló elválasztó — lásd [a fenti táblázatot](#az-útvonalsáv). A [Folder notes](obsidian://show-plugin?id=folder-notes) modullal az elválasztó nyitja meg a mappajegyzeteket. Átnevezés/áthelyezés módban sosem érvényes. |
| **Show dot files** | Be / Ki | Ki | Hogy a rejtett fájlok és mappák szerepelnek-e a listákban. A felülírás elleni védelem mindkét esetben érvényes. |
| **Show all file types** | — | — | Nem e beépülő modul beállítása, hanem Obsidiané, itt azért szerepel, mert ugyanarra a kérdésre válaszol: a széfed csak azokat a fájltípusokat indexeli, amelyekre utasítva van, és csak az listázható, amit indexel. Keresd meg Obsidian beállításai között, és kapcsold be, hogy minden fájlt láss; a sor melletti gomb megnyitja ezt az oldalt a beállításhoz görgetve és kiemelve, ahogy a beállítások saját keresőjében való kattintás tenné. A széfen kívül nem érvényes, mivel odakint semmi sincs indexelve. |
| **Show file extensions** | Be / Ki | Ki | Hogy a fájl neve a soron viseli-e a kiterjesztését. Kikapcsolva elmarad — ahogy Obsidian is elhagyja egy jegyzet címéből. Bekapcsolva a sor úgy nevezi meg a fájlt, ahogy a fájlrendszer teszi. Mindkét esetben a kiterjesztés a második dolog, ami elmarad, amikor a sornak elfogy a helye, közvetlenül a széf neve után. |
| **Access external files** | Be / Ki | **Ki** | Hogy a széf neve megnyitja-e a helyek listáját. Kikapcsolva a modul semmi sem néz túl ezen a széfen. |
| **Hotkeys** | gomb | — | Megnyitja Obsidian *Gyorsbillentyűk* oldalát erre a modulra szűrve, ahol a *Fókusz az útvonalsávra* parancshoz billentyű rendelhető. |

## Az ikonok cseréje

A Lure három ikont jelenít meg: a széf-gyökér ikont (amikor a **Tároló nevének megjelenítése** ki van kapcsolva), az átnevezés/áthelyezés kapcsolót, és a lakatot, amely a helyén áll, amíg a széfen kívüli írás zárolva van. Mindegyik lecserélhető egy témából vagy egy CSS-részletből — állítsd be a helyettesítő írásjelet, és rejtsd el a beépítettet egyetlen szabályban:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* Csak zárva jelenik meg valaha: kinyitása átadja a helyét az átnevezés kapcsolónak. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}
```

A `--lure-icon-glyph` bármit elfogad, ami a CSS `content` értékeként érvényes, így az `url(...)` ugyanúgy működik képhez, mint szöveges vagy emodzsi írásjelhez. Hagyd békén a `--lure-icon-svg` értékét, ha meg akarod tartani a Lucide-ikont, és mellé akarod rajzolni a sajátodat.
