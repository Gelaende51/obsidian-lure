<!-- A CHANGELOG.md fordítása — állapot: f133f41 commit.
     Gépi fordítás (Claude Opus 5), anyanyelvi lektorálás nélkül.
     A javításokat szívesen fogadjuk; az irányadó változat az angol
     CHANGELOG. -->

[English](../../CHANGELOG.md) · [العربية](CHANGELOG.ar.md) · [አማርኛ](CHANGELOG.am.md) · [Беларуская](CHANGELOG.be.md) · [বাংলা](CHANGELOG.bn.md) · [Català](CHANGELOG.ca.md) · [Čeština](CHANGELOG.cs.md) · [Dansk](CHANGELOG.da.md) · [Deutsch](CHANGELOG.de.md) · [Ελληνικά](CHANGELOG.el.md) · [Español](CHANGELOG.es.md) · [فارسی](CHANGELOG.fa.md) · [Suomi](CHANGELOG.fi.md) · [Français](CHANGELOG.fr.md) · [Gaeilge](CHANGELOG.ga.md) · [עברית](CHANGELOG.he.md) · **Magyar** · [Bahasa Indonesia](CHANGELOG.id.md) · [Italiano](CHANGELOG.it.md) · [日本語](CHANGELOG.ja.md) · [ქართული](CHANGELOG.ka.md) · [ភាសាខ្មែរ](CHANGELOG.kh.md) · [한국어](CHANGELOG.ko.md) · [Latviešu](CHANGELOG.lv.md) · [Bahasa Melayu](CHANGELOG.ms.md) · [नेपाली](CHANGELOG.ne.md) · [Nederlands](CHANGELOG.nl.md) · [Norsk](CHANGELOG.no.md) · [Polski](CHANGELOG.pl.md) · [Português](CHANGELOG.pt.md) · [Português (Brasil)](CHANGELOG.pt-BR.md) · [Română](CHANGELOG.ro.md) · [Русский](CHANGELOG.ru.md) · [संस्कृतम्](CHANGELOG.sa.md) · [Slovenčina](CHANGELOG.sk.md) · [Shqip](CHANGELOG.sq.md) · [Српски](CHANGELOG.sr.md) · [Svenska](CHANGELOG.sv.md) · [ไทย](CHANGELOG.th.md) · [Türkçe](CHANGELOG.tr.md) · [Українська](CHANGELOG.uk.md) · [Oʻzbekcha](CHANGELOG.uz.md) · [Tiếng Việt](CHANGELOG.vi.md) · [简体中文](CHANGELOG.zh.md) · [繁體中文](CHANGELOG.zh-TW.md)

# Változásnapló

A Lure minden kiadása, a legújabbal kezdve. Ami a legutóbbi kiadás óta került be, a *Kiadatlan* szakaszban található. A verziószámok elé nem kerül `v` előtag, így megegyeznek a kiadási címkékkel.

## Kiadatlan[^unreleased]

### Hozzáadva

- **Hozz be egy fájlt kívülről a széfbe.** Helyezz át vagy másolj egy fájlt a lemez bármely pontjáról a széfeden belüli útvonalra; valódi jegyzetként érkezik meg, áthelyezéskor pedig csak akkor tűnik el az eredeti, ha a másolás sikerrel járt.
- **Ejts szöveget vagy fájlt a sorra, hogy leírd.** Egy mappára: új jegyzet abban a mappában, amelynek gépelés közben adsz nevet. A jegyzet nevére, vagy egy mappa elválasztójára ott, ahol a mappának van mappajegyzete: megerősítés után annak a jegyzetnek a végére kerül.
- **Készíts mappajegyzetet** egy második lenyomással azon, ami a mappát megnyitja — ott, ahol fut mappajegyzet-bővítmény, és a mappának még nincs ilyenje. Oda kerül, ahová a [Folder notes](https://github.com/LostPaul/obsidian-folder-notes) saját beállításai mondják.
- **Húzz egy mappát az útvonalsávról a lapsávra**, hogy ott nyíljon meg: a mappajegyzete, ha van neki, egyébként egy abban a mappában álló lap.
- **Az egérgörgő végigjárja a listát.** Egy név fölött az első fordítás megnyitja annak a névnek a listáját, és minden további egy sorral mozdítja a kiemelést. Az oldalirányban éppen gördülő sor megtartja magának a görgőt a gördítéshez.
- **Lépj ki nyíllal a mező elejéről**, hogy az előtte álló mappa is bekerüljön: a <kbd>←</kbd> egy mappát hoz be, a <kbd>Shift</kbd>+<kbd>Home</kbd> (vagy zárt lista mellett a <kbd>Home</kbd>) az összeset.
- **A mező annak a színét viseli, amit megnevez** — ugyanazt, amelyet a sora a listában kap —, és pirosra vált, amint semmi sem felel meg neki: abban a pillanatban, amikor az <kbd>Enter</kbd> már nem megnyitna, hanem létrehozna valamit.
- **A mappajegyzetek szürkék a listában**, így a mappájukhoz tartozónak látszanak, nem pedig egy újabb jegyzetnek.
- **Kattints középső gombbal egy elválasztóra**, hogy az a mappa új lapon nyíljon meg: a mappajegyzete, vagy egy benne álló lap.

### Módosítva

- **A lakat és az átnevezés kapcsoló egyetlen vezérlő.** A széfen kívül egy piros, zárt lakat áll a kapcsoló helyén; ha kinyitod, a helyet átadja a kapcsolónak, az átnevezés módból kilépve pedig újra bezárul.
- **Az átnevezés billentyű a lakatot is megkérdezi.** A széfen kívül egy lenyomás felvillantja a lakatot; a fél másodpercen belüli második lenyomás megadja, amit a lakat megad, és megnyitja az átnevezés módot.
- **Az átnevezés billentyű teljes kört jár be** — beágyazott cím, név, név kiterjesztéssel, útvonal a széftől, útvonal a rendszer gyökerétől —, a következő lenyomás pedig ismét a beágyazott cím.
- **A <kbd>Ctrl</kbd>+kattintás és a középső gombos kattintás többé nem ugyanaz.** Az egyik lapot nyit és oda is ugrik, a másik a háttérben nyitja meg.
- **A jegyzet nevére jobb gombbal kattintva a fájl saját menüje nyílik meg.**
- **A lista olyan magas, amilyet az ablak enged**, az Obsidian rögzített 300 képpontja helyett.
- **Nyitott mező mellett egy mappára kattintva az utána álló teljes útvonal megmarad**, a mezőn belül egy mappába kattintva pedig a lista teljes egészében mutatja annak a mappának a tartalmát.
- **Az elválasztó bármilyen mélységben megnyitja a mappajegyzetet**, ha fut a Folder notes, és alá van húzva mindenütt, ahol van ilyen. Korábban csak a legfelső szintű mappáknál működött. A többi mappajegyzet-bővítmény mellett az elválasztó továbbra is megmutatja a mappát.

### Javítva

- **Egy nyitott mező túlélte a saját fájlját.** Ha nyitott útvonalsáv mellett váltottál másik jegyzetre, a sor a munkamenet hátralévő részében a régi fájlt nevezte meg.
- **A Törlés, az Átnevezés és a Másolat készítése elutasításra került a széfen kívül** nyitott lakat mellett is, képeknél, PDF-eknél és oldalaknál pedig sosem volt elérhető.
- **A <kbd>Ctrl</kbd>+<kbd>Enter</kbd> nem csinált semmit, amíg a lista nyitva volt** — márpedig minden mező így nyílik meg.
- **Az <kbd>Enter</kbd> nyitott lista mellett, kiemelt sor nélkül** nem csinált semmit; mostantól jóváhagyja, amit begépeltél.
- **Az a sor, amely már minden nevet a legrövidebb alakjában mutatva is túlcsordult, nem volt gördíthető**, így az útvonal vége elérhetetlen maradt.
- **A bővítmény kikapcsolása egy halott gombot hagyott maga után** minden olyan jegyzet fejlécében, amelyet korábban módosított.

## 1.2.0 — 2026-08-25[^1.2.0]

### Hozzáadva

- **Nyelvi beállítás.** A Lure alapértelmezetten az Obsidian nyelvét követi, de bármelyik saját nyelvére állítható. Egyedül így érhető el a görög és a szanszkrit fordítás, amelyet maga az Obsidian nem kínál. A beállítás saját felirata angolul marad, így olyan nyelvről is mindig visszatalálsz hozzá, amelyet nem tudsz elolvasni.

## 1.1.2 — 2026-08-25[^1.1.2]

### Módosítva

- **Könnyebb stíluslap.** A sor már nem használ `:has()` szelektorokat, és a legtöbb `!important` szabályt sem. Kevesebb munkával igazodik újra, a bővítményellenőrzés figyelmeztetéseinek száma pedig 56-ról 7-re csökkent.

## 1.1.1 — 2026-08-22[^1.1.1]

### Javítva

- **Egy rövid mappanév réssel a közepén jelenhetett meg** — az `atlas` `atl as` alakban —, mert a lerövidített alakjának fenntartott hely szélesebb volt magánál a névnél.

## 1.1.0 — 2026-08-22[^1.1.0]

### Hozzáadva

- **Jobbgombos szótár.** Egy lenyomás menüt nyit; a második és a harmadik egyre többet másol — a nevet, a nevet kiterjesztéssel, az útvonalat. A sor menüi mostantól tételről tételre megegyeznek a Fájlkezelőével.
- **Menük a széfen kívül.** A lista sorai és a külső megjelenítő felkínálja a megnyitást, az *Útvonal másolása* és a *Megjelenítés mappában* tételt; nyitott lakat mellett az *Új jegyzet*, *Új mappa*, *Másolat készítése*, *Átnevezés…* és *Törlés* tételt is. A törlés a rendszer kukájába helyez, és sosem végleges.
- **Megnyitás máshol.** A <kbd>Ctrl</kbd>, a <kbd>Ctrl</kbd>+<kbd>Alt</kbd>, a <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> és a középső gombos kattintás a jegyzet nevén vagy egy mappán új lapon, osztott nézetben vagy új ablakban nyitja meg. Mindkettő húzható, akárcsak a Fájlkezelőben lévő soruk.
- **Húzz jegyzeteket a sorra, hogy áthelyezd őket.** Ejts egy jegyzetet, több jegyzetet vagy egy mappát egy mappaszakaszra vagy a széf nevére.
- **Parancs: Fókusz az útvonalsávra**, a teljes útvonal kijelölésével — alapértelmezett gyorsbillentyű nélkül, rendelj hozzá sajátot.
- **Írj be egy URL-t** az útvonalsávba: a `http(s)://` és az `obsidian://` hivatkozásként nyílik meg, a `file://` és a százalékkódolt útvonalak pedig magát a fájlt nyitják meg.
- **Tabulátoros kiegészítés**, ahogy egy parancsértelmező csinálja: minden lenyomás addig egészít ki, ameddig a mappa nevei egyeznek, és ott áll meg, ahol eltérnek. A <kbd>Shift</kbd>+<kbd>Tab</kbd> visszafelé lépked. Ha már nincs mit kiegészíteni, a <kbd>Tab</kbd> inkább a kijelölést tágítja: név, név kiterjesztéssel, útvonal a széftől, útvonal a rendszer gyökerétől.
- **A lista ott nyílik meg, ahol éppen állsz**, és amire rámutatsz, azt előnézetként a mezőbe írja; a listát elhagyva visszakapod a szövegedet.
- **Helyezz ki egy jegyzetet a széfből** egy olyan megerősítés után, amely megszámolja az általa megtört hivatkozásokat. Kimásolódik, majd a kukába kerül, így ugyanúgy visszaállítható, mint bármely törölt jegyzet.
- **Fájlkiterjesztések megjelenítése** beállítás, valamint az idézőjeles útvonalak értelmezése (ahogy a Windows *Másolás útvonalként* parancsa előállítja őket).
- **A beállítások megjelennek az Obsidian beállításkeresőjében** az Obsidian 1.13-as és újabb változataiban.

### Módosítva

- **A hosszú útvonalak elférnek a panelben.** A nevek a legkevésbé hasznossal kezdve rövidülnek — először a széf neve, aztán a kiterjesztés, aztán a mappák, legvégül a jegyzet saját neve —, sosem azon a ponton túl, ahol még megkülönböztethetők. Mutass rá egy lerövidített névre, hogy teljes egészében elolvashasd.
- **A jegyzet nevére kattintva a név a kiterjesztése nélkül jelölődik ki**, így az átnevezés már nem kockáztatja a fájltípus megváltozását.
- **Az átnevezés billentyű a kiterjesztés nélküli néven nyílik meg**, a további lenyomások pedig tágítják a kijelölést.
- **Egy mappára kattintva az útvonal többi része látható marad**, a széfen kívül is.
- **A széfbe visszaböngészve a fájlok jegyzetként nyílnak meg**, hivatkozásokkal és visszahivatkozásokkal, nem pedig a külső megjelenítőben.

### Javítva

- **A menüfeliratok minden nyelven angolul jelentek meg**; mostantól az Obsidian saját fordításaiból származnak.
- **Az átnevezés billentyű zsákutcába futott az Obsidian átnevezési párbeszédablakán**, ha a jegyzet a címén túlra volt gördítve.
- **Az <kbd>Esc</kbd> két lenyomást igényelt** a mező és a listája bezárásához.
- **A <kbd>Ctrl</kbd>+<kbd>Enter</kbd> a szerkesztőben nyitott meg egy hivatkozást** ahelyett, hogy az útvonalsávra hatott volna.
- **A széfen kívüli átnevezés elvesztette a begépelt nevet**, amikor megnyomtad a lakatot.
- **A Tab haladás nélkül körözhetett** olyan mappánál, amely a saját mappajegyzete mellett áll.

## 1.0.4 — 2026-08-13[^1.0.4]

### Hozzáadva

- **Az a jegyzet, amelyen éppen állsz, kék jelölést kap** a listában, így a mappájába visszaböngészve látod, honnan indultál.

## 1.0.3 — 2026-08-13[^1.0.3]

### Dokumentáció

- A README hivatkozik a bővítmény oldalára a közösségi katalógusban, a lefordított README-k pedig naprakészek lettek.

## 1.0.2 — 2026-08-13[^1.0.2]

### Módosítva

- **Obsidian 1.8.7-et vagy újabbat igényel** (korábban 1.4.0). Két olyan funkció miatt, amelyre az útvonalsáv épül: a fájlok másolása és a mező alatti hibabuborék.
- **A kiadási letöltések aláírt build-eredetigazolást hordoznak**, így a `gh attestation verify` paranccsal megbizonyosodhatsz arról, hogy a `main.js` ebből a tárolóból készült.

### Javítva

- **Egy hiányzó külső fájl megnyitása az alapértelmezett alkalmazásban némán meghiúsult**; mostantól jelzi a hibát.

## 1.0.1 — 2026-08-13[^1.0.1]

### Javítva

- **Átnevezés módban a jegyzet önmagával ütközött** — a saját mappájába visszaböngészve a neve eltűnt a listából, mintha a saját átnevezését akadályozná.
- **Az Obsidian indítása utáni első mappamegjelenítés semmit sem nyitott ki.**
- **A listából mappát választva véget érhetett az átnevezés mód** ahelyett, hogy a mappába lépett volna.
- **A külső szerkesztéseket némán felülírhatta** egy másik író fél, például a Sync vagy egy másik panel. Az írások mostantól atomiak.
- **A fókuszkeret visszaállítása átszivárgott más nézetekbe**; mostantól csak a Lure által módosított fejlécekre vonatkozik.

### Dokumentáció

- A README és a használati útmutató mind a 44 nyelven elérhető, amelyet a bővítmény hoz.
- Az útmutató az Obsidian *Detect all file extensions* beállítását nevezte meg, amelynek új neve *Minden fájlkiterjesztés észlelése* (Show all file types).

## 1.0.0 — 2026-08-10[^1.0.0]

Első kiadás. A jegyzet fejlécében lévő fájlnevet a széfbeli útvonalát mutató, kattintható és szerkeszthető morzsamenüvel váltja fel — címsor a jegyzeteidhez, a Dolphinéra mintázva.

### Hozzáadva

- **Kattints egy mappára**, és egy legördülő lista mutatja a szülőmappája tartalmát, hogy lecseréld egy testvérére, az útvonal többi részét pedig békén hagyd.
- **Kattints a mappa utáni elválasztóra**, hogy a mappa megjelenjen és kinyíljon a Fájlkezelőben, vagy hogy megnyíljon a mappajegyzete ott, ahol a Folder notes kezeli.
- **Kattints a fájlnévre vagy az üres helyre**, hogy útvonalat gépelj be, automatikus kiegészítéssel: a `/` lejjebb lép, a <kbd>Backspace</kbd> kilép, az <kbd>Enter</kbd> jóváhagy.
- **Az áthelyezés/átnevezés mód** ugyanezeket a műveleteket áthelyezésre és átnevezésre kapcsolja, ugyanazokkal az ellenőrzésekkel, amelyeket az Obsidian is végez.
- **A <kbd>Ctrl</kbd> új lapon nyit meg** — vagy áthelyezés/átnevezés módban inkább odamásolja a jegyzetet.
- **Az <kbd>F2</kbd> váltogat** a beágyazott cím és az útvonalsáv között.
- **A széfen kívül** (alapból kikapcsolva): a széf neve megnyitja a többi széfedet, a saját mappádat, a fájlrendszer gyökerét és a csatolt meghajtókat. Odakint semmi sem íródik, amíg fel nem oldod, egy jegyzetet pedig csak kimásolni lehet a széfből, áthelyezni sosem.
- **45 nyelv.**

[^unreleased]: Változások az 1.2.0 óta: <https://github.com/Gelaende51/obsidian-lure/compare/1.2.0...HEAD>
[^1.2.0]: Változások az 1.1.2 óta: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.2...1.2.0>
[^1.1.2]: Változások az 1.1.1 óta: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.1...1.1.2>
[^1.1.1]: Változások az 1.1.0 óta: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.0...1.1.1>
[^1.1.0]: Változások az 1.0.4 óta: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.4...1.1.0>
[^1.0.4]: Változások az 1.0.3 óta: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.3...1.0.4>
[^1.0.3]: Változások az 1.0.2 óta: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.2...1.0.3>
[^1.0.2]: Változások az 1.0.1 óta: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.1...1.0.2>
[^1.0.1]: Változások az 1.0.0 óta: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.0...1.0.1>
[^1.0.0]: Az első kiadás: <https://github.com/Gelaende51/obsidian-lure/releases/tag/1.0.0>
