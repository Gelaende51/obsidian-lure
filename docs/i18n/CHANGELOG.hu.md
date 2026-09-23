<!-- A CHANGELOG.md fordítása — állapot: 2cbb237 commit.
     Gépi fordítás (Claude Opus 5), anyanyelvi lektorálás nélkül.
     A javításokat szívesen fogadjuk; az irányadó változat az angol
     CHANGELOG. -->

[English](../../CHANGELOG.md) · [العربية](CHANGELOG.ar.md) · [አማርኛ](CHANGELOG.am.md) · [Беларуская](CHANGELOG.be.md) · [বাংলা](CHANGELOG.bn.md) · [Català](CHANGELOG.ca.md) · [Čeština](CHANGELOG.cs.md) · [Dansk](CHANGELOG.da.md) · [Deutsch](CHANGELOG.de.md) · [Ελληνικά](CHANGELOG.el.md) · [Español](CHANGELOG.es.md) · [فارسی](CHANGELOG.fa.md) · [Suomi](CHANGELOG.fi.md) · [Français](CHANGELOG.fr.md) · [Gaeilge](CHANGELOG.ga.md) · [עברית](CHANGELOG.he.md) · **Magyar** · [Bahasa Indonesia](CHANGELOG.id.md) · [Italiano](CHANGELOG.it.md) · [日本語](CHANGELOG.ja.md) · [ქართული](CHANGELOG.ka.md) · [ភាសាខ្មែរ](CHANGELOG.kh.md) · [한국어](CHANGELOG.ko.md) · [Latviešu](CHANGELOG.lv.md) · [Bahasa Melayu](CHANGELOG.ms.md) · [नेपाली](CHANGELOG.ne.md) · [Nederlands](CHANGELOG.nl.md) · [Norsk](CHANGELOG.no.md) · [Polski](CHANGELOG.pl.md) · [Português](CHANGELOG.pt.md) · [Português (Brasil)](CHANGELOG.pt-BR.md) · [Română](CHANGELOG.ro.md) · [Русский](CHANGELOG.ru.md) · [संस्कृतम्](CHANGELOG.sa.md) · [Slovenčina](CHANGELOG.sk.md) · [Shqip](CHANGELOG.sq.md) · [Српски](CHANGELOG.sr.md) · [Svenska](CHANGELOG.sv.md) · [ไทย](CHANGELOG.th.md) · [Türkçe](CHANGELOG.tr.md) · [Українська](CHANGELOG.uk.md) · [Oʻzbekcha](CHANGELOG.uz.md) · [Tiếng Việt](CHANGELOG.vi.md) · [简体中文](CHANGELOG.zh.md) · [繁體中文](CHANGELOG.zh-TW.md)

# Változásnapló

A Lure minden kiadása, a legújabbal kezdve. Ami a legutóbbi kiadás óta került be, a *Kiadatlan* szakaszban található. A verziószámok elé nem kerül `v` előtag, így megegyeznek a kiadási címkékkel.

## Kiadatlan

### Hozzáadva

- **A foglalt név megkérdez, ahelyett hogy elutasítana.** Ha olyan névre helyezel át vagy nevezel át, amely már foglalt, egy párbeszédablak nyílik két szerkeszthető útvonallal: hová kerül a fájlod, és hová kerül az útban lévő fájl, amely piros marad, amíg foglalt. Mindkét útvonal úgy jelenik meg, ahogyan az útvonalsáv rajzolja: az eltérő részek színezve és utoljára rövidítve. Mindkét mezőnek van listája; a második a szokásos kiutakat tartalmazza — helycsere (a te fájlod korábbi mappájába kerül), névcsere (a helyén marad, és a te fájlod korábbi nevét veszi fel), mindkettő cseréje (a te fájlod korábbi útvonalát veszi fel), `-1`, `-bak` és `-old` a saját neve mellett, valamint a két fájl korábbi neve. Az a kiút, amelynek útvonala foglalt, szürkén jelenik meg. Egy kiválasztása csak a mezőt tölti ki; az Alkalmaz mindkettőt áthelyezi, a hivatkozásokkal együtt, a Mégse pedig semmit sem mozgat. A legördülő listából egy foglalt név kiválasztása ugyanezt kérdezi, csakúgy mint ha egy fájlt egy már ezt a nevet tartalmazó mappára húzol.
- **A `:graph` egy mappán belül annak a mappának a gráfját nyitja meg** — a `path:"that/folder"` szűrővel ellátott gráfot, ahogyan a saját keresőmezője is tenné. A széf gyökerén ez továbbra is a teljes gráf, mint eddig.
- **Az a mappa, amely már tartalmazza a nevet, pirossal jelenik meg** a legördülő listában áthelyezés közben, csakúgy mint az azonos nevű fájl, így az ütközés már a választás előtt látszik.

### Módosítva

- **A felajánlott érték mindig az, amit a <kbd>Tab</kbd> beírna.** Ahol a nevek megegyezése megszakad, a mező a köztük lévő elsőhöz vezető lépést ajánlja fel, és az a sor dönt, amelyre a Tab tartana; egy név fölé gépelés a kiterjesztését állva hagyja, és az elé kerül felajánlásra; egy éppen belépett mappa a saját első lépését ajánlja fel. Korábban voltak olyan állapotok, amikor semmit sem ajánlott fel, és a <kbd>Tab</kbd> mégis beírt valamit. A legördülő lista aláhúzása követi a felajánlást, ahogy az változik, és a Tab egy nyilakkal kijelölt soron azt a sort fogadja el, nem a mellette lévőt.
- **A felajánlások nem különböztetik meg a kis- és nagybetűket.** A `sch` beírása a `Schemes`-t ajánlja fel, úgy írva, ahogyan a név van; az ajánlat visszavonása a te betűidet adja vissza úgy, ahogyan begépelted. Ahol mind a `Test`, mind a `test` létezik, az jelenik meg felajánlásként, amelyet úgy írtál, ahogyan begépelted.
- **Egy Tab lenyomása után a következő lépés azonnal felajánlásra kerül**, csakúgy mint egy begépelt betű után.
- **A begépelttel kezdődő nevek kerülnek előre a legördülő listában**, szegélyükön egy vonallal jelölve — kékkel, ahol többet osztanak meg, mint amit begépeltél, zölddel azon az ágon, amerre a felajánlás halad, ahol elválnak — a csak tartalmazó nevek előtt. Mindegyikük aláhúzza azt a lépést, amelyet a <kbd>Tab</kbd> feléjük tenne, nemcsak azt, amelyik éppen felajánlott.
- **A legördülő lista a kurzort követi**, vagy a kijelölés kezdetét: azt a mappát listázza, amelyben az a pont van, az előtte álló betűkkel szűrve. Egy név elején ez a teljes mappa.
- **Egy sorra mutatva az megjelenik felajánlásként** — amit begépeltél, az a tiéd marad, a név többi része pedig ki van jelölve —, és ha lekerül róla a mutató, az ajánlat visszatér.
- **A → az ajánlat egyetlen betűjét veszi át**, nem az egészet; az <kbd>End</kbd> továbbra is egészben veszi át.
- **A Backspace egy magára maradt kiterjesztés előtt egy szinttel feljebb lép**, ahogyan egy üres mezőben is; a magányos kiterjesztés eltűnik.
- **Az F2 egy nyitott mezőben helyben átnevezéssé alakítja azt**, megtartva a szöveget, a kurzort és a kijelölést, és **Az útvonalsáv fókuszálása** ugyanígy veszi le róla az átnevezést.
- **Bármi más, amit a két lenyomás között megnyomsz vagy kattintasz, újraindítja az F2 és Az útvonalsáv fókuszálása körforgását.**
- **A mappák félkövérek a legördülő listában**, így egy mappa saját jegyzetének már nem kell szürkének lennie, hogy kitűnjön: lila, mint bármely másik jegyzet.
- **A legördülő lista nem szélesebb az útvonalsávnál.** A be nem férő nevet ugyanúgy lerövidíti, ahogyan az útvonalsáv is lerövidít egyet, és rámutatva teljes egészében megjelenik.
- **A PageUp és a PageDown a legördülő listát azzal görgeti, amennyit az mutat**, a mezőből is, és a kijelölt sor megtartja a helyét a képernyőn. A <kbd>Home</kbd> és az <kbd>End</kbd> az első és az utolsó sort hozza láthatóvá.
- **A legördülő lista akár 1000 bejegyzést is megjelenít**, mielőtt megszámolná a többit, a korábbi 100 helyett.
- **A mappák a leghosszabb sorrendjében engednek.** Ha kevés a hely, a leghosszabb mappanév a következő leghosszabbnak a hosszára rövidül, majd mindkettő együtt, és így tovább, mindegyik a saját alsó határánál megállva. Korábban minden mappa egyszerre rövidült, a hosszával arányosan.
- **A lerövidített nevek csúsznak, nem ugranak.** Az engedő név pixelre pontosan levágódik, és a `…` alatt tűnik el, így a sorban utána semmi sem mozog lépésekben, amíg egy panel átméreteződik.

### Javítva

- Egy jobb oldali panelen a legördülő lista a bal oldali panel alatt nyílt meg, amíg az első betűt be nem gépelték.
- Ha a mutató lekerült a legördülő listáról, az ajánlat visszatért, de a színe nem.
- Egy szóköz, ahol egy lerövidített nevet elvágtak — `development guidelines` — kimaradt, összeragasztva a két szót.

## 1.4.0 — 2026-09-19[^1.4.0]

### Hozzáadva

- **Gyorsbillentyűk sor a beállításokban.** A gombja az Obsidian *Gyorsbillentyűk* oldalát nyitja meg erre a bővítményre szűrve, ahol a *Fókusz az útvonalsávra* parancshoz — amely alapból billentyű nélkül érkezik — rendelhetsz egyet.
- **Útvonalsáv a fájlt nem tartalmazó paneleken.** Az üres lapon `vault / :blank` áll, a gráfon `vault / :graph`, és minden más nézet, amelynek nincs mit megneveznie, saját `:` címkét kap — egy kezdőlap-bővítmény saját lapján `:home-launcher` áll. A mellette lévő mező címsor: írj be egy útvonalat, és az <kbd>Enter</kbd> megnyitja abban a panelben, vagy létrehozza. Korábban a sor üres volt — a bővítmény elrejtette az Obsidian saját címét, és semmit sem tett a helyére.
- **Az oldalakat be is lehet gépelni, nem csak kiválasztani** — a `:graph` és a többi cím, nem csupán listaelem. A kettőspont egyetlen fájlnevet sem kezd, ezért bárhol beírva előhívja őket, és a mező az ő színüket veszi fel ahelyett, hogy olyan jegyzet létrehozását kínálná, amelyet semmilyen néven nem lehetne nevezni.
- **Sor az Obsidian saját *Az összes fájltípus megjelenítése* beállításához** a pontfájl-szabály mellett, mivel mindkettő azt határozza meg, mit listázhat egy legördülő menü: azt mondja, hogy keresd ezt a beállítást az Obsidian saját beállításai között, és kapcsold be, hogy minden fájl látszódjon, a mellette lévő gomb pedig megnyitja azt az oldalt úgy, hogy a beállítás láthatóvá görgetődik és felvillan, mint egy beállításkeresési találat. Az Obsidian szavaival nevezve, 45 nyelven magyarázva.
- **A széf gyökere felsorolja a panel által megjeleníthető oldalakat** — `:graph`, `:search`, és mindazokat a nézeteket, amelyeket a bővítményeid regisztrálnak, köztük egy kezdőlapot vagy egy naptárat. Válassz ki egyet, és a panel megnyitja, ahogy egy jegyzet kiválasztásakor a jegyzetet. A kizárólag fájlok megjelenítésére szolgáló nézetek kimaradnak, mert nem lenne mit mutatniuk.
- **A széf saját elválasztója megnyitja a kezdőoldaladat**, ha valamelyik bővítmény biztosít ilyet, és aláhúzás jelzi ezt; az utána következő lenyomás összecsukja a fájlfát, az azt követő pedig pontosan azt állítja vissza, ami nyitva volt. Ilyen bővítmény nélkül az első lenyomás összecsuk, mint korábban.
- **Írj be útvonalat a fájlrendszer gyökerétől.** Egy üres mező előtt álló `/` ahelyett, hogy elnyelődne, ilyet nyit meg, benne minden további perjel hozzá tartozik, a legördülő menü pedig a gépet listázza, nem a széfet.

### Módosítva

- **Az F2 és a Fókusz az útvonalsávra a mezőn belül Tabot nyom.** Amit a Tab ott tenne — a következő fok, a beírtak kiegészítése, belépés egy mappába —, azt ők is megteszik; csak ott lépnek ki, ahol a Tab visszaugrik az útvonal elejére: az F2 a beágyazott címre, a parancs a jegyzetre. Korábban egy olyan mezőben, amelybe már gépeltél, az F2 elölről kezdte a nevet, a parancs pedig bezárta a mezőt.
- **A ciklus elhagyása utáni lépés a gyökérmappa.** Az F2-nek a beágyazott címre való visszatérése, illetve a parancsnak a jegyzetre való visszatérése utáni lenyomás oda visz, ahová a Tab körbeugrása — a széf gyökerére, a teljes útvonal a mezőben, az első mappája megjelölve —, így a körnek nem marad olyan lépése, amelyet csak a Tab érne el.
- **A Fókusz az útvonalsávra úgy jár, mint az F2.** A teljes útvonal helyett a néven nyílik meg, ugyanazt a négy fokot járja be, és az utolsó után következő lenyomás bezárja a mezőt, a kurzort pedig visszateszi a jegyzetbe — korábban örökké körbejárta a fokokat, és az egyetlen billentyű, amely elérte a sort, nem tudott kilépni belőle.
- **A már foglalt nevet akkor jelzi, amikor használod, nem gépelés közben.** Minden `Notes.md` felé gépelt név olyan neveken halad át, amelyek külön fájlok is lehetnek, és a figyelmeztetés betűről betűre felvillant, majd eltűnt. Azt, ha egy név helyesírása hibás, továbbra is jelzi, ahogy leírod.
- **Az az elválasztó, amelynek mappajegyzete már meg van nyitva, felfedi a mappát** ahelyett, hogy újra megnyitná azt, ami a képernyőn van — ez volt mindig is a második lenyomás jelentése.
- **A hely, ahol vagy, félkövér a legördülő menüben**, nem csupán kék.
- **Minden, ami nem jegyzet, narancssárga a legördülő menüben**, nem csak azok a szövegtípusok, amelyekhez az Obsidiannak nincs nézete. A lila kiemeli a jegyzeteket egy vegyes tartalmú mappában; a többire egyetlen szín ugyanezt mondja gyorsabban.

### Javítva

- **A Backspace egy rákattintott mappán már nem viszi el a széf nevét.** Az elöl maradt perjel a gép gyökeréből induló útvonalnak számított, ami kiüríti a nyitó szegmenst — és a mező Escape-pel való bezárása sosem tette vissza, így a lap végleg elveszítette a széf nevét és ikonját. A kezdő perjel mostantól csak akkor számít a gépének, ha az első mappája tényleg létezik, a nyitó szegmens pedig a mezőből való minden kilépéskor visszatér.
- A széfen kívül a fájlok el voltak rejtve, hacsak az Obsidian **Az összes fájlkiterjesztés észlelése** beállítása nem volt bekapcsolva — ez a széf indexelését érintő beállítás, amelyet olyan mappákra alkalmazott, amelyek nincsenek a széfben. A jegyzeteid mellett lévő `.txt` fájl odakint mindkét esetben megjelenik a listában.
- A széf nevének legördülő menüje nem csinált semmit a fájlt nem tartalmazó panelen, pedig éppen ezt a panelt használnád arra, hogy máshová menj.
- A széf nevére kattintva az Obsidian saját címe a mezőben az útvonal mellett maradt, szürkén, ahol máskor sosem jelenik meg: a sor abból méri magát, amit kirajzolt, és ebben a pillanatban éppen kiürítette magát, hogy helyet adjon a mezőnek.

- Az üres helyre kattintás megnyitotta a mezőt, majd elvesztette: a jegyzet felfedése a Fájlkezelőben magával viszi a kurzort, így a mező nyitva és megjelölve állt, miközben minden billentyűleütés a fába ment.
- A rendszergyökértől mutatott útvonalat megjelenítő fok a mező mellé ugyanannak az útvonalnak egy illesztetlen nyomvonalát rajzolta, így egy mély útvonal önmagára lett festve.

## 1.3.0 — 2026-09-17[^1.3.0]

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

[^1.4.0]: Változások az 1.3.0 óta: <https://github.com/Gelaende51/obsidian-lure/compare/1.3.0...1.4.0>
[^1.3.0]: Változások az 1.2.0 óta: <https://github.com/Gelaende51/obsidian-lure/compare/1.2.0...1.3.0>
[^1.2.0]: Változások az 1.1.2 óta: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.2...1.2.0>
[^1.1.2]: Változások az 1.1.1 óta: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.1...1.1.2>
[^1.1.1]: Változások az 1.1.0 óta: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.0...1.1.1>
[^1.1.0]: Változások az 1.0.4 óta: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.4...1.1.0>
[^1.0.4]: Változások az 1.0.3 óta: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.3...1.0.4>
[^1.0.3]: Változások az 1.0.2 óta: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.2...1.0.3>
[^1.0.2]: Változások az 1.0.1 óta: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.1...1.0.2>
[^1.0.1]: Változások az 1.0.0 óta: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.0...1.0.1>
[^1.0.0]: Az első kiadás: <https://github.com/Gelaende51/obsidian-lure/releases/tag/1.0.0>
