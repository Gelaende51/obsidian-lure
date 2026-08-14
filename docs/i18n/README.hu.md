<!-- A README.md fordítása — állapot: 9e180d1 commit.
     Gépi fordítás (Claude Opus 5), anyanyelvi lektorálás nélkül.
     A javításokat szívesen fogadjuk; az irányadó változat az angol
     README. -->

[English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · **Magyar** · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

Egy [Obsidian](https://obsidian.md)-bővítmény, amely a jegyzet fejlécsávjában lévő fájlnevet a széfen át vezető, kattintható és szerkeszthető útvonallá alakítja — akár a [Dolphin](https://apps.kde.org/dolphin/) fájlkezelő címsora.

![Kattintás a mappa utáni elválasztóra: a mutató rajta pihen, a Fájlkezelő pedig megmutatta és kinyitotta azt a mappát](../images/breadcrumb.png)

Obsidian 1.8.7+ · csak asztali gépen · AGPL-3.0

## MI-nyilatkozat

- **Ügynök** — **Claude Opus 5** és **Claude Sonnet 5** (Anthropic, a Claude Code-on keresztül): megírta a TypeScript kódot, a CSS-t, mind a 45 fordításkészletet és a dokumentációt. A fordítások gépiek, anyanyelvi lektorálás nélkül.
- **Szerző** — Vault51: meghatározott minden funkciót, valódi széfben próbálta ki az egyes változatokat, irányította a javításokat, átnézte az összes eredményt.
- **Fogyasztás** — 2026. augusztus 3–13., kilenc munkamenet, \~4928 válasz: \~7,2 M előállított token, \~23,7 M elküldött, \~1169,6 M újraolvasás a gyorsítótárból (összesen \~1200,5 M).
- **Forrás** — a modell nyílt forráskódú kódból, dokumentációból és mások által közzétett közösségi írásokból tanult.

## Funkciók

- **Kattints egy mappára**, és megjelenik a *fölötte* lévő mappa tartalma — cserélj le egy mappát a szomszédjára anélkül, hogy az útvonal többi részéhez nyúlnál. A jegyzet neve ugyanígy működik, a kiterjesztéssel együtt.
- **Kattints a mappa utáni elválasztóra**, és a mappa megjelenik és kinyílik a Fájlkezelőben. Egyetlen beállítás felcseréli a két szerepet.
- **Kattints jobb gombbal vagy húzz bármelyik sort** — a Fájlkezelő saját helyi menüje és húzási viselkedése.
- **Kattints a fájlnévre vagy az üres helyre**, és beírhatsz egy útvonalat, kiegészítéssel. A `/` lefelé lép be, a <kbd>Backspace</kbd> egy szinttel feljebb, az <kbd>Enter</kbd> jóváhagy.
- **A mappán lévő ceruzagomb** ugyanezeket a műveleteket áthelyezés/átnevezés módba kapcsolja, ugyanazokkal az ellenőrzésekkel, amelyeket az Obsidian is végez.
- **Tartsd nyomva a <kbd>Ctrl</kbd> billentyűt**, hogy új lapon nyíljon meg — vagy áthelyezés/átnevezés módban, hogy a jegyzetet oda másold ahelyett, hogy áthelyeznéd.
- Az **<kbd>F2</kbd>** a jegyzeten belüli cím és az útvonalsáv között vált.
- **Kattints a széf nevére**, és széfváltás nélkül böngészheted a többi széfedet, a saját mappádat, a fájlrendszer gyökerét és a csatolt meghajtókat. Csak olvasható, amíg ki nem nyitsz egy lakatot, és végig a hibaszínnel van keretezve. Alapból kikapcsolva — lásd [a széfen kívül](#a-széfen-kívül).
- **Két figyelmeztetési szint** — piros a széfen kívül, narancs azoknál a szövegfájloknál, amelyekhez az Obsidiannak nincs szerkesztője. Lásd [a két figyelmeztető szín](usage.hu.md#a-két-figyelmeztető-szín).
- **Témát követő ikonok**, egy CSS-részletből cserélhetők — és **45 nyelv**, minden, amit az Obsidian hoz magával.
- **Beállítások:** igazítás, előre megadott elválasztók, melyik kattintás nyitja a listát, a széf neve, rejtett fájlok.

![Ugyanaz a lista áthelyezés/átnevezés módban: a fájl jelenlegi neve legfelül rögzítve, alatta a szomszédos mappák, a meglévő jegyzetek pedig halványan](../images/dropdown.png)

*Áthelyezés/átnevezés módban ugyanaz a lista mást kínál: legfelül rögzítve a jegyzet jelenlegi neve, hogy átnevezés nélkül lehessen áthelyezni; alatta a mappák, amelyekbe áthelyezhető; a már foglalt nevek pedig halványan, hogy semmi ne íródjon felül véletlenül.*

→ [Teljes használati útmutató](usage.hu.md)

## A széfen kívül

Az Obsidian fejlesztői irányelvei megkövetelik, hogy egy bővítmény megmagyarázza a széfen kívüli fájlokhoz való minden hozzáférését, tehát kertelés nélkül:

**Hogy egyáltalán csinál-e ilyesmit.** Csak akkor, ha bekapcsolod a **Külső fájlok elérése** beállítást, amely **alapból ki van kapcsolva**. Kikapcsolt állapotban a bővítményből semmilyen úton nem lehet külső útvonalhoz jutni, és az alább leírt kódból semmi sem fut le soha.

**Hogy mit olvas.** Csak amikor kéred. A széf nevére kattintva felsorolja a többi széfedet — az Obsidian saját `obsidian.json` fájljából olvasva —, továbbá a saját mappádat, a fájlrendszer gyökerét és a csatolt meghajtókat (Linuxon `/proc/mounts`, macOS-en `/Volumes`, Windowson meghajtóbetűk). Az onnan tovább böngészés a könyvtárak tartalmát sorolja fel, egy fájl megnyitása pedig azt az egy fájlt olvassa be.

**Hogy mit ír.** Semmit, amíg meg nem nyomsz egy gombot, ami ezt ki is mondja. Két ilyen gomb van, és mindegyik csak a saját területét fedi le:

- A megjelenítő **Szerkesztés szövegként** gombja feloldja az előtted lévő fájlt, azt az egy fájlt azon az egy lapon. Ettől kezdve a módosításaid gépelés közben mentődnek bele.
- A fejlécben lévő **lakat**, amely csak addig látszik, amíg az útvonalsáv a széfeden kívülre mutat, feloldja a létrehozást, az átnevezést és az áthelyezést külső útvonalakon. Amint visszatérsz a széfbe, újra bezárul, így az engedély sosem éli túl azt a mappát, amelyre adtad.

Egyik feloldás sem mentődik el a munkaterületbe vagy a beállításokba, így az írás sosem marad élesítve olyan fájlon, amelynek megnyitására nem emlékszel. Egyik állapotban sem íródik felül semmi — a már létező célt elutasítja, ehhez magának a fájlrendszernek a kizárólagos létrehozását használja, nem egy olyan ellenőrzést, amely elveszíthetné a versenyt — és egy jegyzetet soha nem lehet a széfen kívülre *áthelyezni*, mert a rá mutató hivatkozások némán eltörnének; a <kbd>Ctrl</kbd> nyomva tartása helyette kimásolja.

**Hogy miért.** A keresett jegyzetek gyakran egy másik széfben, egy szinkronizált mappában vagy egy pendrive-on vannak, az Obsidian saját válasza pedig — válts széfet — bezár mindent, ami nyitva volt. Ez viszont engedi, hogy anélkül nézz oda, hogy elmennél, és menet közben kijavíts egy elgépelést.

**A korlát.** Az Obsidian szerkesztője a széfen belüli fájlokhoz van kötve, ezért egy külső fájl **nem nyitható meg** valódi jegyzetként, hivatkozásokkal, visszahivatkozásokkal és a többivel; erre egyetlen bővítmény sem képes. A Lure helyette a saját megjelenítőjében mutatja (Markdown, képek, hang, videó, PDF), minden másra pedig a *Megnyitás külsőleg* marad. Az útvonalsáv mindaddig hibaszínű keretben marad, amíg a széfeden kívülre mutat, a nyom pedig az általad választott helyről indul — egy széf nevétől, a saját mappádtól, egy meghajtótól — és nem a gép könyvtárszerkezetétől.

## Telepítés

Szerepel a [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure) oldalon, de az alkalmazáson belüli böngészőhöz még nincs jóváhagyva — telepítsd az alábbi módok egyikén:

**Kézzel:** töltsd le a `main.js`, `manifest.json` és `styles.css` fájlt a [legutóbbi kiadásból](https://github.com/Gelaende51/obsidian-lure/releases) a `<vault>/.obsidian/plugins/lure/` mappába, majd kapcsold be a **Beállítások → Közösségi bővítmények** alatt.

**BRAT:** add hozzá a `Gelaende51/obsidian-lure` címet béta bővítményként.

**Forrásból:** `npm install && npm run build` — lásd [fejlesztés](../development.md).

## Kompatibilitás

Semmilyen bővítmény nem szükséges. Az alap **Fájlkezelő**, ha be van kapcsolva, az mutatja meg a mappákat az oldalsávban; nélküle azok a kattintások nem csinálnak semmit.

Kipróbálva azokkal a közösségi bővítményekkel, amelyek osztoznak a jegyzet fejlécén vagy válaszolnak a mappára kattintásra — mindkét betöltési sorrendben, mindegyiket be- és kikapcsolva:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — az elválasztó a mappa jegyzetét nyitja meg ahelyett, hogy a mappát mutatná meg, így az útvonal minden szakasza olyan hely lesz, ahová el lehet jutni. Ez az egyetlen mappajegyzet-bővítmény, amely igényt tart a fejléc útvonalára; a [Folder Note](obsidian://show-plugin?id=folder-note-plugin) és a [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) nem figyel oda, így az elválasztó a szokásos módon mutatja meg a mappát.
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer) és [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — mindkettő ugyanabba a fejlécelembe rajzol; a Lure megtartja a sorát, bármelyik töltődjön is be előbb, és bármelyiket kikapcsolva a másik érintetlen marad.
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header), [Running Head](obsidian://show-plugin?id=running-head), [Crumbs](obsidian://show-plugin?id=crumbs-obsidian), [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — saját sávjuk van, és gond nélkül megférnek egymás mellett.

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
- **Bővítmény oldala:** https://community.obsidian.md/plugins/lure
- **Webes jelenlét / forrás:** https://github.com/Gelaende51/obsidian-lure
- **Adományok:** [Ko-fi](https://ko-fi.com/vault51) — lásd [közreműködés](#közreműködés).
- **Licenc:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. A forkoknak és az újraterjesztett fordításoknak ugyanazzal a licenccel kell közzétenniük a forrásukat.
