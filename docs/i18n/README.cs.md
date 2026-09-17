<!-- Překlad README.md — stav: commit f133f41.
     Strojový překlad (Claude Opus 5), nezkontrolovaný rodilými mluvčími.
     Opravy vítány; rozhodující verzí je anglické README. -->

[English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · **Čeština** · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

Plugin pro [Obsidian](https://obsidian.md), který promění název souboru v záhlaví poznámky v klikatelnou, upravitelnou cestu celým trezorem — jako adresní řádek ve správci souborů [Dolphin](https://apps.kde.org/dolphin/).

![Kliknutí na oddělovač za složkou: ukazatel na něm spočívá a Průzkumník souborů tuto složku zobrazil a rozbalil](../images/breadcrumb.png)

Obsidian 1.8.7+ · pouze počítač · AGPL-3.0

## Prohlášení o AI

- **Agent** — **Claude Opus 5** a **Claude Sonnet 5** (Anthropic, přes Claude Code): napsal TypeScript, CSS, všech 45 sad překladů a dokumentaci. Překlady vznikly strojově a rodilí mluvčí je nekontrolovali.
- **Spotřeba** — 3. srpna – 6. září 2026, 22 sezení, \~13 378 odpovědí: \~16,3 mil. vygenerovaných tokenů, \~62,3 mil. odeslaných, \~4245,1 mil. opětovných čtení z mezipaměti (\~4323,6 mil. celkem).
- **Zdroj** — model se učil z otevřeného kódu, dokumentace a textů komunity, které zveřejnili jiní. Většina zásluh patří tam.
- **Autor** — Vault51: určil každou funkci, každou verzi vyzkoušel ve skutečném trezoru, řídil opravy, prošel všechny výstupy.

## Funkce

- **Kliknutí na složku** otevře seznam obsahu její *nadřazené* složky — vyměňte jednu složku za sousední a zbytek cesty nechte být. Název poznámky funguje stejně a označí se bez přípony.
- **Kliknutí na oddělovač** za složkou ji zobrazí v Průzkumníku souborů a rozbalí. Jedno nastavení obě role prohodí.
- **Pravé kliknutí nebo přetažení kterékoli položky** — kontextová nabídka samotného Průzkumníka souborů, položka po položce, i jeho chování při přetahování. Cesty mimo trezor dostanou rovnocennou nabídku vytvořenou přímo pro ně, až po *Delete* (smazat) přes systémový koš.
- **Kliknutí na název souboru nebo na prázdné místo** umožní napsat cestu, s doplňováním. `/` sestupuje, <kbd>Backspace</kbd> vystoupí o úroveň výš, <kbd>Enter</kbd> potvrdí — a cesta, která ještě neexistuje, se jednoduše vytvoří, s oznámením, kam se uložila.
- **Seznam se otevře na položce, ve které stojíte**, a procházení šipkami nebo ukazatelem vyplní pole tím, na co ukazujete. Když z kteréhokoli konce seznamu vyjedete, vrátí se to, co jste napsali, a když z něj ukazatel odtáhnete, zvýraznění se vrátí tam, kde jste byli.
- **Tlačítko tužky na složce** přepne stejné interakce na přesun/přejmenování, se stejnými kontrolami, jaké dělá sám Obsidian.
- **Podržte <kbd>Ctrl</kbd>** pro otevření na nové kartě — nebo, v režimu přesunu/přejmenování, pro zkopírování poznámky tam místo jejího přesunutí. Název poznámky i segmenty složek přijímají stejné modifikátory a dají se přetáhnout, stejně jako jejich řádky v Průzkumníku souborů.
- **Názvy se doplňují při psaní** — kde se názvy ve složce shodují, objeví se shoda za kurzorem, označená; psaní ji polyká písmeno po písmenu, <kbd>Tab</kbd> nebo <kbd>→</kbd> ji vezme celou, <kbd>Backspace</kbd> ji vrátí. Seznam dál filtruje podle toho, co jste napsali, ne podle toho, co bylo nabídnuto.
- **<kbd>Tab</kbd> doplňuje jako shell**: prodlouží napsané tak daleko, jak se názvy v dané složce shodují, když se neshodují, postupuje k jednomu z nich krok za krokem, a do složky vstoupí, teprve když zbude jediný název. Za koncem cesty místo toho rozšíří výběr: název, název s příponou, cesta od trezoru, cesta od kořene systému. <kbd>Shift</kbd>+<kbd>Tab</kbd> jde toutéž cestou zpět — co vrací, označí, místo aby to smazal — a za jejím začátkem pokračuje nahoru po cestě a pak přeskočí na systémovou cestu. Oběma směry vás celé kolo přivede zpět k cestě, kterou jste sestavili.
- **Kliknutím pravým tlačítkem zkopírujete** — dvakrát název, třikrát vše napravo od něj, a na prázdném místě celou cestu nebo cestu systémovou.
- **Přetáhněte poznámku na složku v řádku** a přesune se tam i s odkazy — cíl už máte na obrazovce, takže stačí jedno přetažení místo cesty stromem souborů. Funguje i název trezoru, pro kořen. Celý výběr se přesune jako jeden a složka, která nabízené přijmout nemůže, neukáže nic, místo aby selhala až dodatečně.
- **Přetáhněte text na řádek a zapíše se** — na složku nebo název trezoru, abyste pro něj pojmenovali novou poznámku, na vlastní název poznámky, aby se připojil na konec toho, co čtete. Soubor z plochy funguje stejně a řádek se orámuje modře, dokud by na něj dopadl.
- **Pole nese barvu toho, co pojmenovává** — stejnou barvu, jakou má jeho řádek v seznamu, šedou pro poznámku složky — a **zčervená**, jakmile tomu nic neodpovídá, takže ještě před stisknutím <kbd>Enter</kbd> vidíte, zda poznámku otevře, nebo vytvoří.
- **Soubory HTML se zobrazují jako stránky**, v rámu s odepřenými všemi oprávněními — žádné skripty, žádná síť, žádný vlastní původ — a se styly a obrázky ze sousedství souboru, takže uložená stránka vypadá pořád jako ona. Zdrojový kód je na jedno stisknutí.
- **Napište URL** — `https://`, `obsidian://`, nebo cestu `file://` či zakódovanou procenty — a otevře se, místo aby se četla jako název poznámky. Webové adresy se otevřou na kartě vlastního Web viewer (webový prohlížeč) Obsidianu, pokud ho máte zapnutý.
- **Dlouhé cesty se zkracují tam, kde jsou písmena nadbytečná** — nikdy za hranici toho, co odliší složku od sousední, plynule, ne po jednom písmenu — a posouvají se, teprve když už není co stlačit. Ukažte na zkrácený název a uvidíte jej celý.
- **<kbd>F2</kbd>** přepíná mezi nadpisem v textu a řádkem cesty; otevře se na názvu bez přípony a dalšími stisky postupuje až k úplným cestám. Hladce projde dialogem přejmenování Obsidianu, když je nadpis odrolovaný z dohledu. Pokud chcete gesto adresního řádku, můžete si přiřadit klávesovou zkratku k příkazu *Zaměřit lištu cesty*.
- **Kliknutí na název trezoru** umožní procházet ostatní trezory, domovskou složku, kořen souborového systému a připojené jednotky, aniž byste měnili trezor. Jen ke čtení, dokud neotevřete červený zámek, který tam venku zaujme místo přepínače přejmenování, a po celou dobu orámováno chybovou barvou. Ve výchozím stavu vypnuto — viz [mimo trezor](#mimo-trezor).
- **Dva stupně varování** — červená mimo trezor, oranžová pro textové soubory, pro které Obsidian nemá editor. Viz [dvě varovné barvy](usage.cs.md#dvě-varovné-barvy).
- **Ikony přizpůsobitelné motivu**, vyměnitelné z úryvku CSS — a **46 jazyků**: každý, který Obsidian přináší, plus řečtina a sanskrt, pro které nemá nastavení. Zvolte jeden jen pro plugin, nebo se řiďte jazykem Obsidianu.
- **Nastavení:** jazyk, zarovnání, přednastavené oddělovače, které kliknutí otevírá seznam, název trezoru, skryté soubory, přípony souborů.

![Tentýž seznam v režimu přesunu/přejmenování: současný název souboru připnutý nahoře, pod ním sousední složky a existující poznámky zašedlé](../images/dropdown.png)

*V režimu přesunu/přejmenování nabízí tentýž seznam něco jiného: nahoře připnutý současný název poznámky, aby ji šlo přesunout bez přejmenování; pod ním složky, kam ji přesunout; a už obsazené názvy zašedlé, aby se nic omylem nepřepsalo.*

→ [Úplný návod](usage.cs.md)

## Mimo trezor

Pravidla Obsidianu pro vývojáře vyžadují, aby plugin vysvětlil každý přístup k souborům mimo trezor, takže bez okolků:

**Jestli vůbec něco z toho dělá.** Jen když zapnete **Přístup k externím souborům**, který je **ve výchozím stavu vypnutý**. Při vypnutém nastavení se z pluginu nedá dostat k žádné externí cestě a nic z níže popsaného kódu se nikdy nespustí.

**Co čte.** Jen když o to požádáte. Kliknutí na název trezoru vypíše vaše ostatní trezory — načtené z vlastního `obsidian.json` Obsidianu — a k tomu domovskou složku, kořen souborového systému a připojené jednotky (`/proc/mounts` na Linuxu, `/Volumes` na macOS, písmena jednotek na Windows). Procházení odtud vypisuje obsah adresářů a otevření souboru přečte ten jeden soubor.

**Co zapisuje.** Nic, dokud nestisknete tlačítko, které to říká. Taková tlačítka jsou dvě a každé pokrývá výhradně svou vlastní oblast:

- Tlačítko **Upravit jako text** v prohlížeči odemkne soubor, který máte před sebou — ten jeden soubor na té jedné kartě. Od té chvíle se do něj vaše úpravy ukládají, jak píšete.
- **Červený zámek** v záhlaví, který stojí na místě přepínače přejmenování, dokud řádek cesty míří mimo trezor, odemkne vytváření, přejmenování, přesouvání a mazání na externích cestách — a jakmile je otevřený, vrátí místo přepínači. Zamkne se znovu, když se vrátíte dovnitř, a také stiskem, kterým opustíte režim přejmenování, takže povolení nikdy nepřežije složku, pro kterou jste ho udělili.

Ani jedno odemčení se neukládá do pracovní plochy ani do nastavení, takže zápis nikdy není natažený nad souborem, o jehož otevření nevíte. Ani v jednom stavu se nic nepřepisuje — existující cíl je odmítnut, s využitím výlučného vytvoření nabízeného samotným souborovým systémem, ne kontroly, která by mohla prohrát závod.

Přesun poznámky *ven* z trezoru je jediný zápis, který stojí něco, co nic nevrátí: Obsidian aktualizuje odkazy jen uvnitř trezoru, takže se rozbije každý odkaz, který na tu poznámku míří. Nabízí se až za dialogem, který to říká a spočítá dotčené poznámky, a probíhá jako zkopírování a následné smazání přes vlastní koš Obsidianu, takže je stejně obnovitelný jako smazání poznámky. Podržení <kbd>Ctrl</kbd> ji místo toho ven zkopíruje.

**Proč.** Poznámky, které hledáte, bývají v jiném trezoru, ve složce se synchronizací nebo na flashce, a vlastní odpověď Obsidianu — přepněte trezor — zavře všechno, co jste měli otevřené. Tohle vás nechá jít se podívat, aniž byste odešli, a při té příležitosti opravit překlep.

**Omezení.** Editor Obsidianu je vázaný na soubory uvnitř trezoru, takže externí soubor **nelze** otevřít jako skutečnou poznámku, s odkazy, zpětnými odkazy a vším ostatním; to nedokáže žádný plugin. Lure ho místo toho ukáže ve vlastním prohlížeči (Markdown, obrázky, zvuk, video, PDF) a pro všechno ostatní nabídne *Otevřít externě*. Řádek cesty zůstává orámovaný chybovou barvou pokaždé, když míří mimo trezor, a stopa začíná v místě, které jste si vybrali — u názvu trezoru, domovské složky, jednotky — a ne u uspořádání adresářů daného stroje.

## Instalace

Uvedeno na [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure), ale zatím neschváleno pro prohlížeč v aplikaci — nainstalujte jej proto jedním z těchto způsobů:

**Ručně:** stáhněte `main.js`, `manifest.json` a `styles.css` z [nejnovějšího vydání](https://github.com/Gelaende51/obsidian-lure/releases) do `<vault>/.obsidian/plugins/lure/` a pak plugin zapněte v **Nastavení → Pluginy třetích stran**.

**BRAT:** přidejte `Gelaende51/obsidian-lure` jako beta plugin.

**Ze zdrojů:** `npm install && npm run build` — viz [vývoj](../development.md).

## Kompatibilita

Žádný plugin není potřeba. Vestavěný **Průzkumník souborů**, pokud je zapnutý, je to, co zobrazuje složky v postranním panelu; bez něj tato kliknutí nic nedělají.

Vyzkoušeno s pluginy komunity, které sdílejí záhlaví poznámky nebo odpovídají na kliknutí na složku — v obou pořadích načtení, každý zapnutý i vypnutý:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — oddělovač otevře poznámku složky místo toho, aby složku zobrazil, čímž se každý segment cesty stane místem, kam se dá jít, ať je jakkoli hluboko: poznámka se dohledá podle vlastní konvence tohoto pluginu, místo aby se odpověď nechala na něm. Je to také jediný plugin, který takovou konvenci zveřejňuje; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) a [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) žádnou nezveřejňují a cestu v záhlaví si nikdy nenárokují, takže s nimi oddělovač složku zobrazí jako obvykle.
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer) a [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — oba kreslí do téhož prvku záhlaví; Lure si svůj řádek udrží bez ohledu na to, kdo se načte první, a vypnutí kteréhokoli z nich nechá ten druhý nedotčený.
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header), [Running Head](obsidian://show-plugin?id=running-head), [Crumbs](obsidian://show-plugin?id=crumbs-obsidian), [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — mají vlastní pruh a soužití je bez potíží.

Pouze počítač — model ovládání potřebuje najetí myší, přesná kliknutí a klávesnici. Úplné výsledky, co zbývá ověřit, a srovnání s Quick Explorer a Breadcrumbs jsou v [kompatibilitě](../compatibility.md).

## Jak přispět

- Hlášení a pull requesty vítány — zvlášť **opravy překladů**, protože všech 45 jazyků je přeloženo strojově a rodilí mluvčí je nekontrolovali. Nastavení a základní pravidla popisuje [vývoj](../development.md).
- **Hlášení chyb:** https://github.com/Gelaende51/obsidian-lure/issues
- **Dary:** [Ko-fi](https://ko-fi.com/vault51). Plugin je tak jako tak zdarma a pod licencí AGPL; spropitné potěší, ale nikdy se nevyžaduje. Zamýšleným účelem je uhlíková kompenzace — záměr, ne závazek: nic se nekompenzuje, dokud částka nestojí za tu námahu, a tenhle řádek to řekne, jakmile se opravdu něco zkompenzuje.

## Poděkování

- **Vault51** — autor: návrh, požadavky a ruční testování po celou dobu.
- **Claude Opus 5** a **Claude Sonnet 5** (Anthropic, přes Claude Code) — implementace, překlady a dokumentace, pod vedením autora. Viz [prohlášení o AI](#prohlášení-o-ai).
- **[Obsidian](https://obsidian.md)** — aplikace, kterou plugin rozšiřuje, a zdroj každé součásti, kterou používá: její API pro pluginy, sada ikon Lucide za `setIcon`, přibalená instance i18next, ze které se čtou popisky kontextové nabídky, a její vlastní CSS třídy a proměnné. Nic cizího se nepřibaluje; plugin **nemá žádné běhové závislosti**.

> **Tým Obsidianu se na tomto projektu nijak nepodílel** — nenapsal ho, neprošel, nepodpořil ani nepodporuje. Obsidian je ochranná známka společnosti Dynalist Inc.; tohle je nezávislý, nespřízněný plugin.

Přispěvatelé zde budou uvedeni, jak budou příspěvky přicházet.

## Odkazy


- **Dokumentace:** [docs/](../)
- **Seznam změn:** [CHANGELOG.cs.md](CHANGELOG.cs.md)
- **Stránka pluginu:** https://community.obsidian.md/plugins/lure
- **Web / zdrojový kód:** https://github.com/Gelaende51/obsidian-lure
- **Dary:** [Ko-fi](https://ko-fi.com/vault51) — viz [jak přispět](#jak-přispět).
- **Licence:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. Forky a přebalená vydání musí zveřejnit své zdroje pod toutéž licencí.
