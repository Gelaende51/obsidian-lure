<!-- A README.md fordítása — állapot: 973105b commit.
     Gépi fordítás (Claude Opus 5), anyanyelvi lektorálás nélkül.
     A javításokat szívesen fogadjuk; az irányadó változat az angol
     README. -->

[English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · **Magyar** · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

Egy [Obsidian](https://obsidian.md)-bővítmény, amely a jegyzet fejlécsávjában lévő fájlnevet a teljes széfbeli útvonalát mutató, kattintható és szerkeszthető morzsamenüvé alakítja — akár a [Dolphin](https://apps.kde.org/dolphin/) fájlkezelő címsora.

![Kattintás a mappa utáni elválasztóra: a mutató rajta pihen, a Fájlkezelő pedig megmutatta és kinyitotta azt a mappát](../images/breadcrumb.png)

Obsidian 1.8.7+ · csak asztali gépen · AGPL-3.0

## MI-nyilatkozat

- **Ügynök** — **Claude Opus 5** és **Claude Sonnet 5** (Anthropic, a Claude Code-on keresztül): megírta a TypeScript kódot, a CSS-t, mind a 45 fordításkészletet és a dokumentációt. A fordítások gépiek, anyanyelvi lektorálás nélkül.
- **Fogyasztás** — 2026. augusztus 3. – szeptember 17., 23 munkamenet, \~14844 válasz: \~19,2 M előállított token, \~85,2 M elküldött, \~4800,6 M újraolvasás a gyorsítótárból (összesen \~4905,0 M).
- **Forrás** — a modell nyílt forráskódú kódból, dokumentációból és mások által közzétett közösségi írásokból tanult. Az érdem nagyobb része őket illeti.
- **Szerző** — Vault51: meghatározott minden funkciót, valódi széfben próbálta ki az egyes változatokat, irányította a javításokat, átnézte az összes eredményt.

## Funkciók

- **Kattints egy mappára**, és egy legördülő lista mutatja a *szülőmappája* tartalmát — cserélj le egy mappát egy testvérére, az útvonal többi részét pedig hagyd békén. A jegyzet neve ugyanígy működik: ilyenkor a név a kiterjesztése nélkül lesz kijelölve.
- **Kattints a mappa utáni elválasztóra**, és a mappa megjelenik és kinyílik a Fájlkezelőben. Egyetlen beállítás felcseréli a két szerepet.
- **Kattints jobb gombbal bármelyik bejegyzésre, vagy húzd el** — a Fájlkezelő saját helyi menüjét kapod, tételről tételre, és a húzás is úgy viselkedik, mint ott. A széfen kívüli útvonalakhoz egyenértékű, rájuk szabott menü készül, egészen a *Törlés* tételig, amely a rendszer kukáján keresztül töröl.
- **Kattints a fájlnévre vagy az üres helyre**, és beírhatsz egy útvonalat, automatikus kiegészítéssel. A `/` egy szinttel lejjebb lép, a <kbd>Backspace</kbd> kilép, az <kbd>Enter</kbd> jóváhagy — a még nem létező útvonal pedig egyszerűen létrejön, és egy értesítés megmondja, hová került.
- **A lista azon a bejegyzésen nyílik meg, amelyikben állsz**, és ha nyilakkal vagy az egérrel végigmész rajta, a mező azzal telik meg, amire éppen mutatsz. Ha a lista bármelyik végén túllépsz, visszakapod, amit begépeltél, ha pedig leveszed róla a mutatót, a kiemelés visszatér oda, ahol voltál.
- **A ceruzás mappa gomb** ugyanezeket a műveleteket áthelyezésre/átnevezésre kapcsolja, ugyanazokkal az ellenőrzésekkel, amelyeket az Obsidian is végez.
- **Tartsd nyomva a <kbd>Ctrl</kbd> billentyűt**, hogy új lapon nyíljon meg — vagy áthelyezés/átnevezés módban, hogy a jegyzetet áthelyezés helyett oda másold. A jegyzet neve és a mappaszakaszok ugyanazokat a módosítóbillentyűket fogadják, és ugyanúgy húzhatók, mint a Fájlkezelőben lévő soraik.
- **A nevek gépelés közben kiegészülnek** — ahol a mappa nevei egyeznek, az egyező rész a kurzor mögött jelenik meg, kijelölve; a gépelés betűről betűre elnyeli, a <kbd>Tab</kbd> vagy a <kbd>→</kbd> egészben elfogadja, a <kbd>Backspace</kbd> visszavonja. A lista továbbra is aszerint szűr, amit te gépeltél, nem aszerint, amit felajánlott.
- **A <kbd>Tab</kbd> úgy egészít ki, mint egy parancsértelmező**: addig nyújtja a begépeltet, ameddig a mappa nevei egyeznek; ahol eltérnek, lépésenként halad az egyikük felé, és csak akkor lép be egy mappába, ha már egyetlen név maradt. Az útvonal végén túl inkább a kijelölést tágítja: név, név kiterjesztéssel, útvonal a széftől, útvonal a rendszer gyökerétől. A <kbd>Shift</kbd>+<kbd>Tab</kbd> ugyanezt az utat járja be visszafelé — amit visszaad, azt kijelöli, nem törli —, az elején túl pedig tovább halad fölfelé az útvonalon, majd körbefordul a rendszerbeli útvonalra. Bármelyik irányba indulsz, egy teljes kör után visszaérsz az általad összerakott útvonalhoz.
- **Jobb kattintás másol** — kétszer a nevet, háromszor mindent, ami tőle jobbra van, az üres helyen pedig a teljes útvonalat vagy a rendszerbeli útvonalat.
- **Húzz egy jegyzetet a sor egyik mappájára**, hogy oda kerüljön, hivatkozásostul — a cél már ott van a képernyőn, így egyetlen húzás az egész, nem kell a fájlfán át odavándorolni. A széf neve is működik, a gyökérhez. Egy teljes kijelölés egyben mozdul, és az a mappa, amely nem tudja befogadni a felkínáltat, semmit sem jelez, ahelyett hogy utólag hibára futna.
- **Ejts szöveget a sorra, hogy leírd** — egy mappára vagy a széf nevére, hogy új jegyzetet nevezz el neki, a jegyzet saját nevére pedig, hogy annak a végéhez fűzd, amit éppen olvasol. Az asztalról idehúzott fájl ugyanígy működik, és a sort kék keret övezi, amíg az ejtés célba érne.
- **A mező annak a színét viseli, amit megnevez** — ugyanazt a színt, amelyet a sora a listában kap, mappajegyzetnél szürkét —, és **pirosra vált**, amint semmi sem felel meg neki, így még az <kbd>Enter</kbd> megnyomása előtt látod, hogy jegyzetet fog megnyitni vagy létrehozni.
- **A HTML-fájlok oldalként jelennek meg**, egy minden jogosultságtól megfosztott keretben — nincs szkript, nincs hálózat, nincs saját eredet —, a fájl mellett lévő stíluslapokat és képeket pedig behúzza, így egy elmentett weboldal továbbra is önmagára hasonlít. A forrás egyetlen gombnyomásnyira van.
- **Írj be egy URL-t** — `https://`, `obsidian://`, vagy egy `file://`, illetve százalékkódolt útvonalat —, és megnyílik ahelyett, hogy jegyzetnévként kezelné. A webcímek az Obsidian saját Webes megjelenítő lapján nyílnak meg, ha az be van kapcsolva.
- **A hosszú útvonalak ott rövidülnek, ahol a betűk fölöslegesek** — sosem azon túl, ami egy mappát megkülönböztet a szomszédjától, és egyenletesen, nem betűnként ugrálva —, és csak akkor gördülnek, ha már nincs mit összenyomni. Mutass rá egy lerövidített névre, hogy újra teljes egészében lásd.
- Az **<kbd>F2</kbd>** a beágyazott cím és az útvonalsáv között vált: a kiterjesztés nélküli néven nyílik meg, a további lenyomásokra pedig egészen a teljes útvonalakig tágul. Az Obsidian átnevezési párbeszédablakán is simán átjut, ha a cím kigördült a látómezőből. Ha a címsoros mozdulatot szeretnéd, a *Fókusz az útvonalsávra* parancshoz rendelhetsz billentyűt.
- **Kattints a széf nevére**, és széfváltás nélkül böngészheted a többi széfedet, a saját mappádat, a fájlrendszer gyökerét és a csatolt meghajtókat. Csak olvasható, amíg ki nem nyitod a piros lakatot, amely odakint az átnevezés kapcsoló helyére kerül, és végig hibaszínű keret veszi körül. Alapból kikapcsolva — lásd [a széfen kívül](#a-széfen-kívül).
- **Két figyelmeztetési szint** — piros a széfen kívül, narancs azoknál a szövegfájloknál, amelyekhez az Obsidiannak nincs szerkesztője. Lásd [a figyelmeztető színek](usage.hu.md#a-két-figyelmeztető-szín).
- **Témához igazítható ikonok**, egy CSS-részletből cserélhetők — és **46 nyelv**: mindegyik, amelyet az Obsidian hoz, továbbá a görög és a szanszkrit, amelyekhez az Obsidiannak nincs beállítása. Választhatsz egyet csak a bővítmény számára, vagy követheted az Obsidian saját nyelvét.
- **Beállítások:** nyelv, igazítás, előre megadott elválasztók, melyik kattintás nyitja a listát, a széf neve, rejtett fájlok, fájlkiterjesztések.

![Ugyanaz a lista áthelyezés/átnevezés módban: a fájl jelenlegi neve legfelül rögzítve, alatta a szomszédos mappák, a meglévő jegyzetek pedig halványan](../images/dropdown.png)

*Áthelyezés/átnevezés módban ugyanaz a lista mást kínál: legfelül rögzítve a jegyzet jelenlegi neve, hogy átnevezés nélkül lehessen áthelyezni; alatta a mappák, amelyekbe áthelyezhető; a már foglalt nevek pedig halványan, hogy semmi ne íródjon felül véletlenül.*

→ [Teljes használati útmutató](usage.hu.md)

## A széfen kívül

Az Obsidian fejlesztői irányelvei megkövetelik, hogy egy bővítmény megmagyarázza a széfen kívüli fájlokhoz való minden hozzáférését, tehát kertelés nélkül:

**Hogy egyáltalán csinál-e ilyesmit.** Csak akkor, ha bekapcsolod a **Külső fájlok elérése** beállítást, amely **alapból ki van kapcsolva**. Kikapcsolt állapotban a bővítményből semmilyen úton nem lehet külső útvonalhoz jutni, és az alább leírt kódból semmi sem fut le soha.

**Hogy mit olvas.** Csak amikor kéred. A széf nevére kattintva felsorolja a többi széfedet — az Obsidian saját `obsidian.json` fájljából olvasva —, továbbá a saját mappádat, a fájlrendszer gyökerét és a csatolt meghajtókat (Linuxon `/proc/mounts`, macOS-en `/Volumes`, Windowson meghajtóbetűk). Az onnan tovább böngészés a könyvtárak tartalmát sorolja fel, egy fájl megnyitása pedig azt az egy fájlt olvassa be.

**Hogy mit ír.** Semmit, amíg meg nem nyomsz egy gombot, amely ezt ki is mondja. Két ilyen gomb van, és mindegyik csak a saját területét fedi le:

- A megjelenítő **Szerkesztés szövegként** gombja feloldja az előtted lévő fájlt, azt az egy fájlt azon az egy lapon. Ettől kezdve a módosításaid gépelés közben mentődnek bele.
- A fejléc **piros lakatja**, amely az átnevezés kapcsoló helyén áll, amíg az útvonalsáv a széfeden kívülre mutat, feloldja a létrehozást, az átnevezést, az áthelyezést és a törlést külső útvonalakon — kinyitva pedig visszaadja a helyet a kapcsolónak. Újra bezárul, amikor visszatérsz a széfbe, és akkor is, amikor a gombnyomással kilépsz az átnevezés módból, így az engedély sosem éli túl azt a mappát, amelyre megadtad.

Egyik feloldás sem mentődik el a munkaterületbe vagy a beállításokba, így az írás sosem marad élesítve olyan fájlon, amelynek megnyitására nem emlékszel. Egyik állapotban sem íródik felül semmi — a már létező célt elutasítja, ehhez magának a fájlrendszernek a kizárólagos létrehozását használja, nem egy olyan ellenőrzést, amely versenyhelyzetben alulmaradhatna.

Egy jegyzet *kihelyezése* a széfből az egyetlen írás, amelynek olyan ára van, amelyet semmi sem ad vissza: az Obsidian csak a széfen belüli hivatkozásokat frissíti, így minden erre a jegyzetre mutató hivatkozás eltörik. Ezt egy párbeszédablak mögött kínálja fel, amely ezt ki is mondja, és megszámolja az érintett jegyzeteket; a művelet másolás, majd törlés az Obsidian saját kukáján keresztül, így ugyanúgy visszaállítható, mint egy törölt jegyzet. A <kbd>Ctrl</kbd> nyomva tartásával helyette kimásolod.

**Hogy miért.** A keresett jegyzetek gyakran egy másik széfben, egy szinkronizált mappában vagy egy pendrive-on vannak, az Obsidian saját válasza pedig — válts széfet — bezár mindent, ami nyitva volt. Ez viszont engedi, hogy anélkül nézz oda, hogy elmennél, és menet közben kijavíts egy elgépelést.

**A korlát.** Az Obsidian szerkesztője a széfen belüli fájlokhoz van kötve, ezért egy külső fájl **nem nyitható meg** valódi jegyzetként, hivatkozásokkal, visszahivatkozásokkal és a többivel; erre egyetlen bővítmény sem képes. A Lure helyette a saját megjelenítőjében mutatja (Markdown, képek, hang, videó, PDF), minden másra pedig ott a *Megnyitás külsőleg*. Az útvonalsáv mindaddig hibaszínű keretben marad, amíg a széfeden kívülre mutat, a nyom pedig az általad választott helyről indul — egy széf nevétől, a saját mappádtól, egy meghajtótól —, nem pedig a gép könyvtárszerkezetétől.

## Telepítés

Szerepel a [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure) oldalon, de az alkalmazáson belüli böngészőhöz még nincs jóváhagyva — telepítsd az alábbi módok egyikén:

**Kézzel:** töltsd le a `main.js`, `manifest.json` és `styles.css` fájlt a [legutóbbi kiadásból](https://github.com/Gelaende51/obsidian-lure/releases) a `<vault>/.obsidian/plugins/lure/` mappába, majd kapcsold be a **Beállítások → Közösségi bővítmények** alatt.

**BRAT:** add hozzá a `Gelaende51/obsidian-lure` címet béta bővítményként.

**Forrásból:** `npm install && npm run build` — lásd [fejlesztés](../development.md).

## Kompatibilitás

Semmilyen bővítmény nem szükséges. Az alap **Fájlkezelő**, ha be van kapcsolva, az mutatja meg a mappákat az oldalsávban; nélküle azok a kattintások nem csinálnak semmit.

Kipróbálva azokkal a közösségi bővítményekkel, amelyek osztoznak a jegyzet fejlécén vagy válaszolnak a mappára kattintásra — mindkét betöltési sorrendben, mindegyiket be- és kikapcsolva:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — az elválasztó a mappa jegyzetét nyitja meg ahelyett, hogy a mappát mutatná meg, így az útvonal minden szakasza olyan hely lesz, ahová el lehet jutni, bármilyen mélyen legyen is: a jegyzetet a Lure annak a bővítménynek a saját konvenciója alapján keresi meg, ahelyett hogy rá bízná a választ. Ez az egyetlen, amely ilyen konvenciót közzé is tesz; a [Folder Note](obsidian://show-plugin?id=folder-note-plugin) és a [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) semmit sem tesz közzé, és sosem tart igényt a fejléc útvonalára, így velük az elválasztó a szokásos módon mutatja meg a mappát.
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer) és [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — mindkettő ugyanabba a fejlécelembe rajzol; a Lure megtartja a sorát, bármelyik töltődjön is be előbb, és bármelyiket kikapcsolva a másik érintetlen marad.
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header), [Running Head](obsidian://show-plugin?id=running-head), [Crumbs](obsidian://show-plugin?id=crumbs-obsidian), [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — saját sávjuk van, és megférnek egymás mellett.

Csak asztali gépen — a kezelési mód rámutatást, pontos kattintásokat és billentyűzetet kíván. A teljes eredmények, a még hátralévő ellenőrzések, valamint a Quick Explorerrel és a Breadcrumbsszal való összevetés a [kompatibilitás](../compatibility.md) lapon található.

## Közreműködés

- A hibajelentéseket és a pull requesteket szívesen fogadjuk — különösen a **fordítási javításokat**, hiszen mind a 45 nyelv gépi fordítás, anyanyelvi lektorálás nélkül. A beállításról és az alapszabályokról lásd a [fejlesztés](../development.md) lapot.
- **Hibakövető:** https://github.com/Gelaende51/obsidian-lure/issues
- **Adományok:** [Ko-fi](https://ko-fi.com/vault51). A bővítmény így is, úgy is ingyenes és AGPL-licencű; a borravalónak örülünk, de sosem kérjük. A tervezett cél a szén-dioxid-kibocsátás ellentételezése — szándék, nem kötelezettségvállalás: semmi sem kerül ellentételezésre, amíg az összeg meg nem éri a fáradságot, és ez a sor akkor fogja ezt kimondani, amikor tényleg megtörtént.

## Köszönet

- **Vault51** — szerző: tervezés, követelmények és kézi tesztelés az elejétől a végéig.
- **Claude Opus 5** és **Claude Sonnet 5** (Anthropic, a Claude Code-on keresztül) — megvalósítás, fordítások és dokumentáció, a szerző irányításával. Lásd [MI-nyilatkozat](#mi-nyilatkozat).
- **[Obsidian](https://obsidian.md)** — az alkalmazás, amelyet ez kiegészít, és minden olyan alkotórész forrása, amelyet a bővítmény használ: a bővítmény-API, a `setIcon` mögötti Lucide ikonkészlet, a mellékelt i18next példány, amelyből a helyi menü feliratai származnak, valamint a saját CSS-osztályai és -változói. Semmi harmadik féltől származó nincs becsomagolva; a bővítménynek **nincs futásidejű függősége**.

> **Az Obsidian csapata semmilyen módon nem vett részt ebben a projektben** — nem írták, nem nézték át, nem támogatták és nem álltak mögé. Az Obsidian a Dynalist Inc. védjegye; ez egy független, nem kapcsolódó bővítmény.

A közreműködők itt lesznek felsorolva, ahogy a hozzájárulások megérkeznek.

## Hivatkozások

- **Dokumentáció:** [docs/](../)
- **Változásnapló:** [CHANGELOG.md](CHANGELOG.hu.md)
- **Bővítmény oldala:** https://community.obsidian.md/plugins/lure
- **Webes jelenlét / forrás:** https://github.com/Gelaende51/obsidian-lure
- **Adományok:** [Ko-fi](https://ko-fi.com/vault51) — lásd [közreműködés](#közreműködés).
- **Licenc:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. A forkoknak és az újraterjesztett buildeknek ugyanazzal a licenccel kell közzétenniük a forrásukat.
