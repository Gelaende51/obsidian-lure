<!-- Překlad CHANGELOG.md — stav: commit 973105b.
     Strojový překlad (Claude Opus 5), nezkontrolovaný rodilými mluvčími.
     Opravy vítány; rozhodující verzí je anglický CHANGELOG. -->

[English](../../CHANGELOG.md) · [العربية](CHANGELOG.ar.md) · [አማርኛ](CHANGELOG.am.md) · [Беларуская](CHANGELOG.be.md) · [বাংলা](CHANGELOG.bn.md) · [Català](CHANGELOG.ca.md) · **Čeština** · [Dansk](CHANGELOG.da.md) · [Deutsch](CHANGELOG.de.md) · [Ελληνικά](CHANGELOG.el.md) · [Español](CHANGELOG.es.md) · [فارسی](CHANGELOG.fa.md) · [Suomi](CHANGELOG.fi.md) · [Français](CHANGELOG.fr.md) · [Gaeilge](CHANGELOG.ga.md) · [עברית](CHANGELOG.he.md) · [Magyar](CHANGELOG.hu.md) · [Bahasa Indonesia](CHANGELOG.id.md) · [Italiano](CHANGELOG.it.md) · [日本語](CHANGELOG.ja.md) · [ქართული](CHANGELOG.ka.md) · [ភាសាខ្មែរ](CHANGELOG.kh.md) · [한국어](CHANGELOG.ko.md) · [Latviešu](CHANGELOG.lv.md) · [Bahasa Melayu](CHANGELOG.ms.md) · [नेपाली](CHANGELOG.ne.md) · [Nederlands](CHANGELOG.nl.md) · [Norsk](CHANGELOG.no.md) · [Polski](CHANGELOG.pl.md) · [Português](CHANGELOG.pt.md) · [Português (Brasil)](CHANGELOG.pt-BR.md) · [Română](CHANGELOG.ro.md) · [Русский](CHANGELOG.ru.md) · [संस्कृतम्](CHANGELOG.sa.md) · [Slovenčina](CHANGELOG.sk.md) · [Shqip](CHANGELOG.sq.md) · [Српски](CHANGELOG.sr.md) · [Svenska](CHANGELOG.sv.md) · [ไทย](CHANGELOG.th.md) · [Türkçe](CHANGELOG.tr.md) · [Українська](CHANGELOG.uk.md) · [Oʻzbekcha](CHANGELOG.uz.md) · [Tiếng Việt](CHANGELOG.vi.md) · [简体中文](CHANGELOG.zh.md) · [繁體中文](CHANGELOG.zh-TW.md)

# Seznam změn

Každé vydání pluginu Lure, od nejnovějšího. Co přibylo od posledního vydání, najdete pod *Nevydáno*. Verze nemají předponu `v`, stejně jako značky vydání.

## 1.4.0 — 2026-09-19[^1.4.0]

### Přidáno

- **Řádek Klávesové zkratky v nastavení.** Jeho tlačítko otevře Obsidianovy *Klávesové zkratky* filtrované na tento plugin, kde příkaz *Zaměřit lištu cesty* — který se dodává bez klávesy — může klávesu dostat.
- **Lišta cesty na panelech, které neobsahují žádný soubor.** Prázdná karta se čte jako `vault / :blank`, graf jako `vault / :graph`, a každý další pohled, který nemá co pojmenovat, dostane vlastní popisek `:` — vlastní karta pluginu pro domovskou kartu se čte jako `:home-launcher`. Pole vedle ní je adresní řádek: napište cestu a <kbd>Enter</kbd> ji v tom panelu otevře, nebo ji vytvoří. Předtím byl řádek prázdný — plugin skryl Obsidianův vlastní nadpis a nic na jeho místo nedal.
- **Stránku lze napsat stejně jako vybrat** — `:graph` a ostatní jsou adresa, ne jen položka seznamu. Dvojtečkou nezačíná žádný název souboru, takže její napsání kdekoli tyto stránky přivolá a pole na sebe vezme jejich barvu, místo aby nabízelo vytvoření poznámky, kterou by nešlo nijak pojmenovat.
- **Řádek pro Obsidianovo vlastní *Zobrazit všechny typy souborů*** vedle pravidla pro skryté soubory, protože obě rozhodují, co smí seznam vypsat: říká, kde toto nastavení v Obsidianových vlastních nastaveních najít a zapnout ho, aby bylo vidět každý soubor, a tlačítko vedle něj otevře tu stránku s nastavením odrolovaným do zorného pole a zablikaným, jako by šlo o výsledek hledání v nastavení. Pojmenováno Obsidianovými slovy, vysvětleno ve 45 jazycích.
- **Kořen trezoru vypisuje stránky, které panel dokáže obsahovat** — `:graph`, `:search` a jakékoli pohledy, které zaregistrují vaše pluginy, mezi nimi třeba domovská karta nebo kalendář. Vyberte jeden a panel ho otevře, stejně jako výběr poznámky otevře poznámku. Pohledy, které existují k zobrazení souboru, jsou vynechány, protože by pro ně nebylo co zobrazovat.
- **Trezoru vlastní oddělovač otevře vaši úvodní stránku**, pokud ji nějaký plugin poskytuje, a je to naznačeno podtržením; stisk po něm sbalí strom souborů a další stisk vrátí přesně to, co bylo otevřené předtím. Bez takového pluginu první stisk jako dřív sbalí strom.
- **Napište cestu od kořene souborového systému.** Lomítko `/` na začátku prázdného pole cestu otevře, místo aby bylo pohlceno, každé další lomítko v ní pak patří jí, a seznam vypisuje počítač místo trezoru.

### Změněno

- **F2 a Zaměřit lištu cesty v poli stisknou Tab.** Cokoli by tam Tab udělal — další příčku, doplnění napsaného, vstup do složky — udělají také; opustí pole jen tam, kde se Tab vrací na začátek cesty, F2 k nadpisu v textu, příkaz k poznámce. Předtím pole, do kterého jste napsali, přimělo F2 začít znovu u názvu a příkaz pole zavřel.
- **Krok po opuštění cyklu je kořenová složka.** Stisk po F2 návratu k nadpisu v textu nebo po příkazovém návratu k poznámce přistane tam, kde končí i okruh Tabu — kořen trezoru, celá cesta v poli, jeho první složka označená — takže žádný krok kruhu není ponechán jen Tabu.
- **Zaměřit lištu cesty prochází stejně jako F2.** Otevře se na názvu místo celé cesty, projde stejnými čtyřmi příčkami a stisk po poslední zavře pole a vrátí kurzor do poznámky — předtím obcházel příčky donekonečna a klávesa, která se k řádku jako jediná dostala, ho nedokázala opustit.
- **Obsazený název se hlásí, až když ho použijete, ne zatímco ho píšete.** Každý název napsaný směrem k `Notes.md` prochází názvy, které mohou být vlastními soubory, a varování dřív blikalo nahoru a zas pryč s každým písmenem. Co je na pravopisu názvu špatně, se pořád řekne tak, jak je napsáno.
- **Oddělovač, jehož poznámka složky je už otevřená, odhalí složku** místo toho, aby znovu otevřel to, co je už na obrazovce — což jeho druhý stisk vždycky znamenal.
- **Kde se nacházíte, je v seznamu tučně**, nejen modře.
- **Vše, co není poznámka, je v seznamu oranžové**, nejen textové typy, pro které Obsidian nemá pohled. Fialová vybírá poznámky ze složky se smíšeným obsahem; jedna barva pro zbytek říká totéž rychleji.

### Opraveno

- **Backspace přes rozkliknutou složku už nebere trezoru jeho název.** Lomítko zanechané na začátku se četlo jako cesta od kořene souborového systému, což vyprázdnilo úvodní segment — a zavření pole klávesou Escape ho už nikdy nevrátilo, takže karta o název a ikonu trezoru přišla natrvalo. Počáteční lomítko se teď počítá za cestu souborového systému, jen když je jeho první složka opravdu přítomná, a úvodní segment se vrátí při každém způsobu, jak pole opustit.
- Mimo trezor byly soubory skryté, pokud nebylo zapnuté Obsidianovo **Rozpoznávat všechny přípony souborů** — nastavení o tom, co trezor indexuje, uplatněné na složky, které v trezoru nejsou. `.txt` vedle vašich poznámek se tam venku vypisuje tak jako tak.
- Seznam u názvu trezoru nedělal nic na panelu, který neobsahuje žádný soubor — a to je přesně ten panel, který byste použili k přechodu někam jinam.
- Kliknutí na název trezoru nechalo Obsidianův vlastní nadpis stát vedle cesty v poli, zešedlý, tam, kde se jindy nikdy neobjevuje: řádek se měří podle toho, co vykreslil, a v tu chvíli se sám vyprázdnil, aby udělal místo pro pole.

- Kliknutí na prázdné místo otevřelo pole a hned ho ztratilo: odhalení poznámky v Průzkumníku souborů si s sebou odneslo kurzor, takže pole zůstalo otevřené a označené, zatímco každý úhoz klávesy směřoval do stromu.
- Příčka, která ukazuje cestu od kořene systému, kreslila vedle pole stopu téže cesty, nepřizpůsobenou, takže se hluboká cesta vykreslovala sama přes sebe.

## 1.3.0 — 2026-09-17[^1.3.0]

### Přidáno

- **Přeneste soubor do trezoru zvenčí.** Přesuňte nebo zkopírujte soubor odkudkoli z disku na cestu uvnitř trezoru; dorazí jako skutečná poznámka a přesun odstraní originál až poté, co se kopírování zdařilo.
- **Přetáhněte text nebo soubor na řádek a zapíše se.** Na složku: nová poznámka v té složce, pojmenovaná tak, jak napíšete. Na název poznámky nebo na oddělovač složky, která má poznámku složky: připojí se na konec té poznámky, po potvrzení.
- **Vytvořte poznámku složky** druhým stisknutím toho, co složku otevírá, pokud běží plugin pro poznámky složek a složka zatím žádnou nemá. Umístí se tam, kam určuje vlastní nastavení pluginu [Folder notes](https://github.com/LostPaul/obsidian-folder-notes).
- **Přetáhněte složku z lišty cesty na lištu karet** a otevře se tam: její poznámka složky, pokud ji má, jinak karta stojící v té složce.
- **Kolečko myši prochází seznamem.** Nad názvem první otočení otevře seznam toho názvu a každé další posune zvýraznění o řádek. Řádek, který se posouvá do strany, si kolečko ponechá pro posouvání.
- **Vyjeďte šipkou ze začátku pole** a vtáhnete do něj složku před ním: <kbd>←</kbd> pro jednu složku, <kbd>Shift</kbd>+<kbd>Home</kbd> (nebo <kbd>Home</kbd> při zavřeném seznamu) pro všechny.
- **Pole nese barvu toho, co pojmenovává**, stejnou jako daný řádek v seznamu, a zčervená, jakmile tomu nic neodpovídá — ve chvíli, kdy by <kbd>Enter</kbd> něco vytvořil, místo aby to otevřel.
- **Poznámky složek jsou v seznamu šedé**, takže se čtou jako součást své složky, a ne jako další poznámka.
- **Kliknutím prostředním tlačítkem na oddělovač** otevřete tu složku na nové kartě: její poznámku složky, nebo kartu stojící v ní.

### Změněno

- **Zámek a přepínač přejmenování jsou jeden ovládací prvek.** Mimo trezor zaujme místo přepínače červený zavřený zámek; jeho otevřením se místo předá přepínači a opuštění režimu přejmenování jej znovu zamkne.
- **Klávesa přejmenování se ptá i zámku.** Mimo trezor jedno stisknutí zámek rozbliká; druhé stisknutí do půl sekundy udělí to, co uděluje zámek, a otevře režim přejmenování.
- **Klávesa přejmenování projde celý cyklus** — nadpis v textu, název, název s příponou, cesta od trezoru, cesta od kořene systému — a další stisknutí je znovu nadpis v textu.
- **Kliknutí s <kbd>Ctrl</kbd> a kliknutí prostředním tlačítkem už nejsou totéž.** Jedno otevře kartu a přejde na ni, druhé ji otevře na pozadí.
- **Pravé kliknutí na název poznámky otevře vlastní nabídku souboru.**
- **Seznam je tak vysoký, jak okno dovolí**, místo pevných 300 pixelů Obsidianu.
- **Kliknutí na složku při otevřeném poli zachová celou cestu za ní** a kliknutí do složky uvnitř pole vypíše obsah té složky celý.
- **Oddělovač otevře poznámku složky v jakékoli hloubce**, když běží Folder notes, a je podtržený všude, kde nějaká je. Dříve to fungovalo jen u složek nejvyšší úrovně. S ostatními pluginy pro poznámky složek oddělovač složku dál zobrazuje.

### Opraveno

- **Otevřené pole přežilo svůj soubor.** Přepnutí na jinou poznámku s otevřenou lištou cesty nechalo řádek pojmenovávat starý soubor po zbytek sezení.
- ***Smazat*, *Přejmenovat* a *Vytvořit kopii* byly mimo trezor odmítnuty** i s otevřeným zámkem a u obrázků, PDF a stránek se k nim nedalo vůbec dostat.
- **<kbd>Ctrl</kbd>+<kbd>Enter</kbd> nedělal nic, když byl seznam otevřený** — a tak se otevírá každé pole.
- **<kbd>Enter</kbd> při otevřeném seznamu bez zvýrazněné položky** nedělal nic; nyní potvrdí, co jste napsali.
- **Řádek, který přetékal, i když byly všechny názvy už co nejkratší, nešlo posouvat**, takže konec cesty zůstal nedosažitelný.
- **Vypnutí pluginu zanechalo mrtvé tlačítko** v záhlaví každé poznámky, kterou upravil.

## 1.2.0 — 2026-08-25[^1.2.0]

### Přidáno

- **Nastavení jazyka.** Lure se ve výchozím stavu řídí jazykem Obsidianu a lze jej přepnout na kterýkoli z vlastních jazyků. Je to také jediná cesta k řeckému a sanskrtskému překladu, které sám Obsidian nenabízí. Popisek tohoto nastavení zůstává anglicky, aby se dal vždy znovu najít i z jazyka, který neumíte přečíst.

## 1.1.2 — 2026-08-25[^1.1.2]

### Změněno

- **Lehčí styly.** Řádek už nepoužívá selektory `:has()` ani většinu pravidel `!important`. Přizpůsobuje se s menší námahou a počet varování z kontroly pluginu klesl z 56 na 7.

## 1.1.1 — 2026-08-22[^1.1.1]

### Opraveno

- **Krátký název složky se mohl vykreslit s mezerou uprostřed** — `atlas` jako `atl as` — protože místo vyhrazené pro jeho zkrácenou podobu bylo širší než samotný název.

## 1.1.0 — 2026-08-22[^1.1.0]

### Přidáno

- **Slovník pravého kliknutí.** Jedno stisknutí otevře nabídku; dvě a tři zkopírují postupně víc — název, název s příponou, cestu. Nabídky řádku teď odpovídají Průzkumníku souborů položku po položce.
- **Nabídky mimo trezor.** Řádky seznamu a externí prohlížeč nabízejí otevření, *Kopírovat cestu* a *Zobrazit ve složce*; s otevřeným zámkem také *Nová poznámka*, *Nová složka*, *Vytvořit kopii*, *Přejmenovat…* a *Smazat*. Mazání přesouvá do systémového koše a nikdy není trvalé.
- **Otevření jinde.** <kbd>Ctrl</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> a kliknutí prostředním tlačítkem na název poznámky nebo na složku ji otevřou na nové kartě, v rozdělení nebo v okně. Obojí lze přetahovat, stejně jako jejich řádky v Průzkumníku souborů.
- **Přetažením poznámek na řádek je přesunete.** Pusťte poznámku, několik poznámek nebo složku na segment složky nebo na název trezoru.
- **Příkaz: Zaměřit lištu cesty**, s označenou celou cestou — bez výchozí klávesové zkratky, přiřaďte si vlastní.
- **Napište URL** do lišty cesty: `http(s)://` a `obsidian://` se otevřou jako odkazy, `file://` a cesty zakódované procenty otevřou soubor.
- **Doplňování tabulátorem**, tak jak to dělá shell: každé stisknutí doplní tak daleko, jak se názvy ve složce shodují, a zastaví se tam, kde se liší. <kbd>Shift</kbd>+<kbd>Tab</kbd> jde zpět. Když už není co doplnit, <kbd>Tab</kbd> místo toho rozšíří výběr: název, název s příponou, cesta od trezoru, cesta od kořene systému.
- **Seznam se otevře tam, kde jste**, a do pole předvádí to, na co ukazujete; opuštěním seznamu se vrátí váš text.
- **Přesun poznámky mimo trezor** po potvrzení, které spočítá odkazy, jež se rozbijí. Poznámka se zkopíruje ven a pak přesune do koše, takže ji lze obnovit jako kteroukoli smazanou poznámku.
- **Nastavení „Zobrazovat přípony souborů“** a cesty v uvozovkách (jak je vytváří *Copy as path* ve Windows) jsou rozpoznávány.
- **Nastavení se objevují ve vyhledávání v nastavení Obsidianu** od Obsidianu 1.13.

### Změněno

- **Dlouhé cesty se vejdou do panelu.** Názvy se zkracují od nejméně užitečného — název trezoru, pak přípona, pak složky, vlastní název poznámky nakonec — nikdy za hranici, kdy by se od sebe nedaly rozlišit. Najeďte na zkrácený název a přečtete ho celý.
- **Kliknutí na název poznámky jej označí bez přípony**, takže přejmenování už nehrozí změnou typu souboru.
- **Klávesa přejmenování se otevře na názvu bez přípony** a další stisky výběr rozšiřují.
- **Kliknutí na složku nechá zbytek cesty viditelný**, i mimo trezor.
- **Procházení zpět do trezoru otevírá soubory jako poznámky**, s odkazy a zpětnými odkazy, a ne v externím prohlížeči.

### Opraveno

- **Popisky nabídek byly ve všech jazycích anglicky**; nyní pocházejí z vlastních překladů Obsidianu.
- **Klávesa přejmenování skončila ve slepé uličce dialogu přejmenování Obsidianu**, když byla poznámka odrolovaná za svůj nadpis.
- **<kbd>Esc</kbd> potřeboval dvě stisknutí**, aby zavřel pole i jeho seznam.
- **<kbd>Ctrl</kbd>+<kbd>Enter</kbd> otevřel odkaz v editoru**, místo aby působil na lištu cesty.
- **Přejmenování mimo trezor ztratilo napsaný název**, když se stiskl zámek.
- **Tab se mohl točit v kruhu bez postupu** u složky, která leží vedle své vlastní poznámky složky.

## 1.0.4 — 2026-08-13[^1.0.4]

### Přidáno

- **Poznámka, na které jste, je v seznamu označena modře**, takže při procházení zpět do její složky vidíte, kde jste začali.

## 1.0.3 — 2026-08-13[^1.0.3]

### Dokumentace

- README odkazuje na stránku pluginu v adresáři komunity a přeložená README jsou aktualizována.

## 1.0.2 — 2026-08-13[^1.0.2]

### Změněno

- **Vyžaduje Obsidian 1.8.7 nebo novější** (dříve 1.4.0). Potřebují to dvě funkce, na které lišta cesty spoléhá — kopírování souborů a chybová bublina pod polem.
- **Stažené soubory vydání nesou podepsaný původ sestavení**, takže si pomocí `gh attestation verify` můžete ověřit, že `main.js` byl sestaven z tohoto repozitáře.

### Opraveno

- **Otevření chybějícího externího souboru ve výchozí aplikaci selhalo potichu**; selhání se nyní hlásí.

## 1.0.1 — 2026-08-13[^1.0.1]

### Opraveno

- **V režimu přejmenování byla poznámka v konfliktu sama se sebou** — procházení zpět do její vlastní složky skrylo její název ze seznamu, jako by bránila vlastnímu přejmenování.
- **První zobrazení složky po spuštění Obsidianu nic nerozbalilo.**
- **Výběr složky ze seznamu mohl ukončit režim přejmenování**, místo aby do ní sestoupil.
- **Externí úpravy mohly být potichu přepsány** jiným zapisovatelem, například Sync nebo druhým panelem. Zápisy jsou nyní atomické.
- **Zrušení obrysu zaměření prosakovalo do jiných zobrazení**; nyní platí jen pro záhlaví, která Lure upravil.

### Dokumentace

- README a návod k použití jsou k dispozici ve všech 44 jazycích, které plugin obsahuje.
- Návod uváděl nastavení Obsidianu *Detekovat všechny přípony souborů* (Detect all file extensions), které se nyní jmenuje *Detekovat všechny přípony souborů* (Show all file types).

## 1.0.0 — 2026-08-10[^1.0.0]

První vydání. Nahrazuje název souboru v záhlaví poznámky klikatelnou, upravitelnou cestou trezorem — adresní řádek pro vaše poznámky, podle vzoru Dolphinu.

### Přidáno

- **Klikněte na složku** a otevře se seznam obsahu její nadřazené složky, abyste ji vyměnili za sousední a zbytek cesty nechali být.
- **Klikněte na oddělovač** za složkou a zobrazí se a rozbalí v Průzkumníku souborů, nebo se otevře její poznámka složky, pokud se o ni stará Folder notes.
- **Klikněte na název souboru nebo na prázdné místo** a napište cestu, s doplňováním: `/` sestupuje, <kbd>Backspace</kbd> vystoupí o úroveň výš, <kbd>Enter</kbd> potvrdí.
- **Režim přesunu/přejmenování** přepne tytéž interakce na přesouvání a přejmenovávání, se stejnými kontrolami, jaké dělá Obsidian.
- **<kbd>Ctrl</kbd> otevírá na nové kartě** — nebo v režimu přesunu/přejmenování poznámku tam místo toho zkopíruje.
- **<kbd>F2</kbd> přepíná** mezi nadpisem v textu a lištou cesty.
- **Mimo trezor** (ve výchozím stavu vypnuto): název trezoru otevírá vaše další trezory, domovskou složku, kořen souborového systému a připojené jednotky. Nic se tam nezapíše, dokud to neodemknete, a poznámku lze z trezoru jen zkopírovat, nikdy přesunout.
- **45 jazyků.**

[^1.4.0]: Změny od 1.3.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.3.0...1.4.0>
[^1.3.0]: Změny od 1.2.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.2.0...1.3.0>
[^1.2.0]: Změny od 1.1.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.2...1.2.0>
[^1.1.2]: Změny od 1.1.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.1...1.1.2>
[^1.1.1]: Změny od 1.1.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.0...1.1.1>
[^1.1.0]: Změny od 1.0.4: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.4...1.1.0>
[^1.0.4]: Změny od 1.0.3: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.3...1.0.4>
[^1.0.3]: Změny od 1.0.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.2...1.0.3>
[^1.0.2]: Změny od 1.0.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.1...1.0.2>
[^1.0.1]: Změny od 1.0.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.0...1.0.1>
[^1.0.0]: První vydání: <https://github.com/Gelaende51/obsidian-lure/releases/tag/1.0.0>
