<!-- Překlad docs/usage.md — stav: commit 7b2691a.
     Strojový překlad (Claude Opus 5), nezkontrolovaný rodilými mluvčími.
     Popisky pluginu pocházejí z src/lang/translations.ts a popisky Obsidianu
     z řetězců, které dodává sama aplikace, takže odpovídají tomu, co vidíš
     na obrazovce. -->

**Přečtěte si to v jiných jazycích:** [English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · **Čeština** · [Dansk](usage.da.md) · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · [Bahasa Indonesia](usage.id.md) · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · [Norsk](usage.no.md) · [Polski](usage.pl.md) · [Português](usage.pt.md) · [Português (Brasil)](usage.pt-BR.md) · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

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

S nainstalovaným [Folder notes](obsidian://show-plugin?id=folder-notes) tentýž klik otevře místo toho poznámku té složky. Je to jediný plugin poznámek ke složkám, u kterého se ukázalo, že si nárokuje cestu v záhlaví; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) a [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) spravují poznámky složek, ale klik na cestu neposlouchají, takže s nimi oddělovač zobrazí složku jako obvykle. Viz [kompatibilita](../compatibility.md#verified-against).

Oddělovač je **podtržený jen tehdy, když složka před ním opravdu má poznámku složky**, takže podtržení je příslib, že je co otevírat. Klikatelný zůstává tak jako tak každý oddělovač — ten bez podtržení zobrazí a rozbalí svou složku v postranním panelu, což kurzor ve tvaru ruky pořád signalizuje. Podtržení zároveň odchází z názvu složky: se zapnutou záměnou otevírá seznam název, takže označit ho jako odkaz na poznámku by byla lež.

**Režim přejmenování/přesunu má přednost před oběma**, ať nastavení říká cokoli: dokud čeká přesun, nic v řádku neotevírá složku, protože otevření by přesun zahodilo. Názvy složek se vybírají k úpravě a oddělovače sestupují — obojí je způsob, jak zvolit cíl — a podtržení zmizí, aby ukázalo, že otevírání je pozastaveno.

**Kořen trezoru** je jediný segment, který není segmentem cesty. Nemá nadřazenou složku, ze které by šlo vypsat sousedy, takže místo toho otevírá [seznam umístění](#procházení-mimo-trezor) — tvé ostatní trezory, domovskou složku, kořen souborového systému a připojené jednotky.

## Klik na segment: vyměň ho za sousední

Klik na název složky vybere **název té složky** v textovém poli a otevře seznam složky **o úroveň výš** — její nadřazené. Psaní nebo výběr položky vymění tuto složku za sousední a nechá nedotčené vše pod ní, takže `Projekty/2026/Start.md` → klik na `2026` → vyber `2025` dá `Projekty/2025/Start.md`.

Klik na **název poznámky** funguje stejně vůči její vlastní složce a vybere název souboru **i s příponou** — přejmenování nebo přesměrování poznámky obvykle znamená změnit i ji.

Klik na složku už jeden segment vybral, takže **další klik** rozšíří výběr na celý řádek — tu složku *a* všechno pod ní — a to, co pak napíšeš, nahradí zbytek cesty naráz. Funguje stejně v navigaci i v režimu přejmenování/přesunu.

Platí to jen jako pokračování kliku, který pole otevřel. Jakmile pole jednou použiješ, chová se jako každé jiné textové pole: klik umístí kurzor, dvojklik vezme slovo, trojklik vezme řádek.

Tak či tak zůstává zbytek cesty viditelný kolem pole — jako štítky před ním a jako nevybraný text za ním — takže úplná cesta ze záhlaví nikdy nezmizí. Piš, ať výběr nahradíš, nebo stiskni <kbd>End</kbd> / <kbd>→</kbd>, ať si ho podržíš a upravoval odtud dál. Seznam ukazuje celou složku bez ohledu na to, co je předvyplněné; filtrovat začne až tehdy, když opravdu píšeš.

## Sestup oddělovačem

Klik na oddělovač (s vypnutým **Název složky otevírá seznam**) sestoupí do složky před ním: seznam ukáže obsah *té* složky a zbytek cesty se otevře vybraný v poli. Výběr složky ji připojí ke stopě cesty a hned otevře další seznam, takže se dá sestupovat stromem po kliknutích, aniž bys opustil řádek záhlaví.

## Položky seznamu jsou skutečné řádky správce souborů

Každý soubor a složka v seznamu se chová jako svůj řádek v Průzkumníku souborů:

- **Pravý klik** dá tutéž kontextovou nabídku — *Nová poznámka* / *Nová složka* na složce, *Otevřít v nové kartě* / *Přejmenovat* / *Smazat* na souboru — včetně položek, které do souborových nabídek přidávají jiné pluginy.
- **Přetáhni** položku kamkoli, kde Obsidian přijímá soubor: do editoru, ať vloží odkaz, na složku v Průzkumníku souborů, ať ji přesune, na lištu karet, ať ji otevře.

Text nabídek pochází z vlastních překladů Obsidianu, takže v každém jazyce ladí se zbytkem aplikace.

## Psaní cesty

- Klik na **prázdné místo** před cestou nebo za ní otevře textové pole předvyplněné celou cestou a celé vybrané — piš přes něj, nebo uprav na místě. (Klik na samotný název souboru vybere jen ten název; viz výše.)
- Psaní ve chvíli, kdy je vidět stopa cesty, promění poslední segment v malé pole s živým doplňováním omezeným na aktuální složku.
- `/` potvrdí aktuální segment a sestoupí do něj.
- <kbd>Backspace</kbd> v prázdném poli vystoupí zpět do nadřazené složky a znovu otevře její název s kurzorem na konci.
- <kbd>Enter</kbd> potvrdí; <kbd>Esc</kbd> nebo klik jinam zruší a vrátí se ke skutečné cestě souboru.

Pole nemá žádný rám — ani rámeček, ani okraj — takže se čte jako samotný text cesty a samo roste, jak píšeš.

## Navigace se nikdy nedotkne otevřeného souboru

Ve výchozím (navigačním) režimu se otevřená poznámka **nikdy** nepřejmenovává ani nepřesouvá.

- Cesta vedoucí k existujícímu souboru ho otevře.
- Cesta, která ještě neexistuje, se zeptá *„Vytvořit nový soubor?“*. Potvrzení vytvoří chybějící složky i soubor; zrušení neudělá vůbec nic.

## <kbd>Ctrl</kbd> — nová karta a kopírování místo přesunu

Podržení <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> na macOS) při výběru souboru ze seznamu nebo při stisku <kbd>Enter</kbd> na cestě pošle výsledek do **nové karty** místo do této:

| | Bez ničeho | S <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Vybrat nebo napsat existující soubor | Otevře se zde | Otevře se v nové kartě |
| Napsat neexistující cestu | Zeptá se, pak otevře zde | Zeptá se, pak otevře v nové kartě |
| Potvrdit cestu v režimu přejmenování/přesunu | **Přesune** poznámku tam | **Zkopíruje** ji tam a otevře kopii v nové kartě |

Modifikátor se čte pravidlem samotného Obsidianu, takže se chová přesně jako na odkazu nebo na řádku Průzkumníka souborů — prostřední klik také znamená „nová karta“, <kbd>Ctrl</kbd>+<kbd>Alt</kbd> znamená rozdělení a <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> nové okno.

Kopírování odmítá přepsat, přesně jako přesun — včetně na vlastní cestu poznámky, kde není co rozumného kopírovat.

## Procházení mimo trezor

**Tohle je ve výchozím stavu vypnuté.** Nejdřív zapni **Přístup k externím souborům** v nastavení — čtení a zápis mimo trezor je jediná věc, kterou tenhle plugin dělá a Obsidian sám ne, takže se do toho vstupuje záměrně, místo aby se z toho muselo vystupovat. S vypnutým nastavením název trezoru prostě zobrazí tvůj trezor v Průzkumníku souborů a nic tady nikdy nekouká dál.

Klik na **název trezoru** (nebo na ikonu 🏠, když je *Zobrazit název trezoru* vypnuté) otevře seznam míst, ne obsahu:

- **Tvoje ostatní trezory**, načtené z vlastního registru Obsidianu, nejdřív naposledy otevřený, každý pod vlastní ikonou trezoru Obsidianu — tou samou, kterou aplikace používá pro příkazy k trezorům. Trezor, který už máš otevřený, dostane místo toho domeček: je to místo, odkud řádek ve výchozím stavu začíná, ne místo, kam jít.
- **Domovská složka**, pod názvem tvého účtu, označená `~`. Lucide nemá vlnovku, takže tuhle ikonu kreslí sám plugin na téže mřížce 24×24 Lucide a se stejnou tloušťkou tahu — ikona, která sadě chybí, ne textový znak zapadlý mezi ikony.
- **Kořen souborového systému**, popsaný jako `root` — nepřeloženo, protože tak se jmenuje v každém systému — místo `/`, který by se vedle následujícího oddělovače četl jako prázdný krok.
- **Připojené jednotky**, s ikonou podle typu tam, kde je to levné zjistit: síťová sdílení, optické disky, diskety a vyměnitelná média mají svou; všechno ostatní dostane obecnou jednotku. Ve Windows se jednotky zobrazují jako `C:` s obecnou ikonou — názvy svazků a přesné typy vyžadují WMI, které se záměrně nepoužívá.

Výběr jiného trezoru **na něj Obsidian nepřepne.** Všechno, co máš otevřené, zůstává otevřené; řádek cesty prostě začne procházet tam. V tom je celý smysl toho, že je to na liště cesty, a ne odloženo na přepínač trezorů v postranním panelu.

### Zatímco jsi venku

Cesta **začíná v místě, které sis vybral**, ne u uspořádání adresářů stroje — vyber `Archiv` a řádek se čte `Archiv / poznámky / …`, ne `/home/ty/Vaults/Archiv/poznámky/…`. První segment nese ikonu podle toho, co to je (trezor, domovská složka, jednotka), a <kbd>Backspace</kbd> se zastaví tam, místo aby šel dál nahoru po zbytku souborového systému. S vypnutým *Zobrazit název trezoru* je tím segmentem samotná ikona — nastavení je o úvodním segmentu řádku, ať pojmenovává jakýkoli trezor, ne jen o tvém.

Řádek cesty zůstává **orámovaný chybovou barvou** — tímtéž prstencem, který kreslí režim přejmenování — po celou dobu, kdy míří mimo tvůj trezor. Označuje trvající stav, ne okamžik: dokud tam je, nic z vlastního zacházení Obsidianu se netýká toho, co řádek ukazuje, a zápis je zamčený, dokud neřekneš jinak.

Jinak procházení funguje jako uvnitř: štítky, oddělovače, psaní, doplňování, <kbd>Backspace</kbd> na vystoupení. Platí i tatáž pravidla viditelnosti, takže nepodporované přípony pořád potřebují **Detekovat všechny přípony souborů** Obsidianu a skryté soubory nastavení tohoto pluginu.

**Pravý klik a přetahování** na položkách seznamu tam venku nefungují — to jsou vlastní obsluhy Průzkumníka souborů a potřebují soubor, který trezor zná.

### Zápis mimo trezor

Všechno, co zapisuje, je **ve výchozím stavu zamčené**. Vedle přepínače přejmenování v záhlaví se objeví **visací zámek** po celou dobu, kdy řádek míří mimo tvůj trezor; stisk zámek otevře a obarví ho červeně, v tónu s prstencem kolem řádku.

Povolení se uděluje **místu, ne okamžiku**: přežije všechno, co bys dělal při práci na jednom místě — dokončení přesunu, kliknutí mimo pole, otevření souboru — a končí, když ze seznamu vybereš jiný trezor, jednotku nebo kořen, když se řádek vrátí k souboru v trezoru, nebo když zámek stiskneš znovu. Série přesunů uvnitř jedné složky tak stojí jeden stisk, ne jeden na soubor.

S otevřeným zámkem se řádek cesty chová venku stejně jako uvnitř:

| Úkon | Výsledek |
| --- | --- |
| Napsat neexistující název, <kbd>Enter</kbd> | Tentýž dotaz „vytvořit?“ jako uvnitř; chybějící složky se také vytvoří. Název bez přípony se stane `.md`, přesně jako uvnitř |
| Režim přejmenování/přesunu, napsat nový název | Přejmenuje soubor, který řádek ukazuje. Název bez přípony si ponechá tu souborovou — tady venku složka drží soubory všeho druhu a přejmenování by nemělo potichu proměnit `.png` v `.md` |
| Režim přejmenování/přesunu, přejít jinam, vybrat **ponechat tento název** | Přesune ho tam pod názvem, který už má |
| Podržet <kbd>Ctrl</kbd> u kteréhokoli z obou | Zkopíruje místo přesunu a otevře kopii v nové kartě |

Se zavřeným zámkem všechno tohle místo provedení ohlásí, co ho blokuje. Ani v jednom stavu se nic nepřepisuje: už existující cíl je odmítnut a odmítnutí pochází od samotného souborového systému (`COPYFILE_EXCL`, výlučné vytvoření), ne od kontroly, která by mohla prohrát závod. Přesun mezi souborovými systémy — z flash disku, ze síťového sdílení — přejde na zkopírovat-a-pak-smazat a originál se odstraní teprve tehdy, když kopie dosedla.

**Jednu věc zámek neodemyká: přesun poznámky *mimo* tvůj trezor.** `fileManager` neumí sledovat soubor přes tuhle hranici, takže každý odkaz mířící na poznámku by se potichu rozbil a Obsidian by prostě viděl, že zmizela. Podržení <kbd>Ctrl</kbd> ji zkopíruje ven, což tenhle problém nemá, a upozornění to říká. Opačný směr — vtáhnout vnější soubor *do* trezoru — také ještě není hotový.

### Otevření externího souboru

Editor Obsidianu funguje jen na souborech uvnitř trezoru, takže externí soubor **nelze** otevřít jako skutečnou poznámku s odkazy, zpětnými odkazy a vším ostatním — to je omezení aplikace, ne tohoto pluginu. Výběr takového souboru otevře místo toho **náhled**, jen ke čtení, dokud neřekneš jinak:

| Typ | Zobrazen jako |
| --- | --- |
| `.md`, `.markdown` | Vykreslený Markdown |
| Obrázky, zvuk, video, PDF | Nativní přehrávač/prohlížeč |
| Jakýkoli jiný **textový** soubor (`.json`, `.css`, `.log`, `.txt`, …) | Prostý text tak, jak je |
| Binární formáty bez prohlížeče (`.zip`, `.exe`, …) | Předány do *Otevřít externě* |

Prohlížeč má dvě čtení souboru, a protože se navzájem vylučují, zobrazuje se jen to, **na které** bys přepnul:

| | Co dělá | Výchozí pro |
| --- | --- | --- |
| **Zobrazit jako Markdown** | Vykreslí soubor jako poznámku, jen ke čtení | `.md`, `.markdown` |
| **Upravit jako text** | Zdroj, upravitelný | všechno ostatní |

Mimo trezor je **Upravit jako text** zároveň stiskem, který sundá „jen ke čtení“ — režim a povolení jsou jedno gesto místo dvou tlačítek, nad kterými se má přemýšlet. Zbarví se červeně **pokaždé, když by stisk sundal „jen ke čtení“**, ať už úpravu natahuješ na místě, nebo přicházíš rovnou z vykresleného pohledu; uvnitř trezoru není co odemykat, takže zůstává obyčejné. **Zobrazit jako Markdown** dostane lehký nádech barvy akcentu — tentýž odstín, jaký Obsidian dává vybranému textu — čímž ho označuje jako cestu zpět, ne jako výzvu k akci.

Protože tlačítko sleduje *úpravu*, a ne surový režim, soubor ležící v textovém pohledu jen ke čtení pořád nabízí **Upravit jako text**: to je ten stisk, který ji natáhne. Soubor, do kterého se nikdy nebude dát psát — zkrácený nebo nečitelný — říká místo toho **Zobrazit jako text**, protože to je všechno, co stisk může dodat.

Výchozí nastavení jsou ta užitečná, ne doslovná: `#` v shellovém skriptu je komentář, ne nadpis, takže vykreslení `.log` jako Markdownu by ho potichu spolklo. Kterékoli z výchozích nastavení jde přebít po jednotlivých souborech a volba jde do historie karty, takže zpět/vpřed i znovu otevřená pracovní plocha ji podrží — spousta poznámek žije v souborech `.txt` a spousta souborů `.md` se čte lépe jako zdroj.

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

- **Otevřít v *(trezor)*** — zobrazí se, když soubor patří do některého z tvých ostatních trezorů. Předá ho vlastní obsluze URI Obsidianu, která otevře okno toho trezoru s poznámkou uvnitř, jako skutečnou upravitelnou poznámku. Tohle okno zůstane přesně takové, jaké bylo; nic se ti pod rukama nepřepne.
- **Zobrazit jako Markdown** / **Upravit jako text** — dvě čtení; druhé mimo trezor navíc sundá „jen ke čtení“.
- **Otevřít externě** — předá soubor výchozí aplikaci tvé plochy, včetně binárních formátů, které tenhle prohlížeč neumí zobrazit.

Nic mimo tvůj trezor se nezapíše, dokud nejdřív nestiskneš *Upravit jako text*. Úplné vysvětlení najdeš v sekci [Mimo trezor](README.cs.md#mimo-trezor) v README.

## Dvě varovné barvy

| | Kdy | Co to znamená |
| --- | --- | --- |
| **Červený** prstenec na liště cesty | Řádek míří mimo tvůj trezor | Obsidian nemůže to, co je tam, otevřít jako poznámku, a venku se nic nezapisuje, dokud neotevřeš zámek. |
| **Oranžový** prstenec na liště cesty, oranžové položky v seznamu | Soubor je textový typ, pro který Obsidian nemá pohled | Upozornění. Obsidian by ho předal výchozí aplikaci tvé plochy; plugin ho zobrazí sám. |

**Obě jsou nezávislé a mohou platit obě naráz** — externí `.json` je mimo tvůj trezor *a* je to typ, pro který Obsidian nemá editor. V prohlížeči se objeví jako oddělené řádky, každý uvádí jen svůj vlastní fakt. Na liště cesty, kde platí obě, vyhrává červená, protože dva prstence by byly jen šum.

Oranžový stupeň je záměrně úzký. Registrované typy (Markdown, plátno, obrázky, PDF, zvuk, video) jsou ošetřené pořádně a nedostanou nic. Binární soubory také ne — `.zip` omylem v kaši nepřepíšeš. Zbývá přesně to nebezpečí: `.json`, `.css` nebo `.log`, který zviditelnilo **Detekovat všechny přípony souborů**.

Vyhrává červená tam, kde by platily obě; dva prstence naráz by byly jen šum.

## Režim přesunu/přejmenování

Tlačítko s tužkou na pravém konci záhlaví — vedle tlačítka režimu pohledu, stejně velké jako nativní tlačítka — zapíná a vypíná režim přesunu/přejmenování. Řádek záhlaví je pak orámovaný barvou akcentu, přesně jako při přejmenování v Průzkumníku souborů. Tytéž kliky a klávesy teď potvrzují přesun nebo přejmenování přes `fileManager.renameFile` Obsidianu, takže všechny odkazy na poznámku jdou s ní.

Během přejmenování:

- Aktuální název souboru je připnutý v seznamu každé složky, takže přesunout poznámku bez přejmenování je jediný klik.
- Názvy už obsazené v cílové složce jsou zašedlé, ale pořád vybratelné.
- To, co píšeš, se kontroluje živě proti vlastním pravidlům přejmenování Obsidianu — tytéž znakové sady, tytéž hlášky, tatáž červená bublina, jakou dostaneš při přejmenování ve stromu souborů — takže nepřípustný nebo kolidující název se hlásí, jak píšeš, a nejde potvrdit.
- Klik mimo lištu záhlaví nebo ztráta zaměření záhlavím ukončí režim přejmenování.

## Jedna klávesa pro obě přejmenování

Příkaz přejmenování (výchozí <kbd>F2</kbd>, nebo cokoli, na co sis ho přemapoval) **střídá** přejmenování vloženého nadpisu Obsidianu a lištu cesty v záhlaví tohoto pluginu s vybranou celou cestou. Pokud sis vložený nadpis Obsidianu vypnul, stane se lišta cesty v záhlaví jediným cílem, takže klávesa nikdy neudělá nic.

Funguje to obalením příkazu `workspace:edit-file-title`, ne odchycením klávesy, takže přemapování zkratky i spuštění příkazu z palety fungují beze změny.

## Jak jsou položky seznamu obarvené

| Barva | Znamená |
| --- | --- |
| **Fialová** | Poznámka (`.md`, `.markdown`) — to, co Obsidian otevře jako poznámku, vypíchnuté ze složky se smíšeným obsahem |
| **Oranžová** | Textový typ, pro který Obsidian nemá pohled; viz [varovné barvy](#dvě-varovné-barvy) |
| **Ztlumená** | Mimo tvůj trezor, takže vlastní zacházení trezoru neplatí |
| **Modrá** | Poznámka, ve které jste. Při procházení je to její vlastní položka; v režimu přejmenování/přesunu ji na jejím místě nahradí položka *ponechat tento název* — v obou případech tatáž poznámka |
| **Šedá** | Jen v režimu přejmenování/přesunu: název je obsazený. Pořád vybratelný — výběr vyplní pole, kde kontrola nahlásí konflikt |

## Pravidla viditelnosti

- Soubory s nepodporovanými příponami se v seznamech objeví, jen když je zapnuté nastavení **Detekovat všechny přípony souborů** Obsidianu.
- Seznam ukazuje nejvýš 100 položek — je to vlastní limit Obsidianu. Když jich má složka víc, poslední řádek říká, kolik jich zbylo mimo; piš dál, ať seznam zúžíš.
- Skryté soubory a složky se objeví, jen když je zapnuté nastavení **Zobrazit skryté soubory** tohoto pluginu.
- **Ochrana proti přepsání funguje stejně bez ohledu na viditelnost** — skrytý soubor ti přepsání pořád zabrání.

## Tahák

| Chceš… | Udělej tohle |
| --- | --- |
| Otevřít složku (její poznámku, nebo ji zobrazit) | Klikni na oddělovač **za** tou složkou |
| Vyměnit složku za sousední | Klikni na název té složky, pak piš nebo vyber |
| Přejmenovat nebo přesměrovat poznámku | Klikni na název poznámky — i s příponou |
| Projít obsah složky | Klikni na název té složky; seznam ukáže její nadřazenou, takže klikni na složku **pod** tou, kterou chceš |
| Přepsat složku i vše pod ní | **Dvojklik** na název té složky, pak piš |
| Upravit cestu od nějaké složky dolů | Klikni na název té složky, pak <kbd>End</kbd> nebo <kbd>→</kbd> pro zrušení výběru |
| Skočit na soubor napsáním jeho cesty | Klikni na název souboru nebo na prázdné místo, napiš, <kbd>Enter</kbd> |
| Otevřít soubor v nové kartě | <kbd>Ctrl</kbd> při výběru, nebo <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| Zkopírovat poznámku jinam místo přesunutí | Tužka, pak <kbd>Ctrl</kbd> při výběru nebo potvrzení cíle |
| Vytvořit poznámku na neexistující cestě | Napiš cestu, <kbd>Enter</kbd>, potvrď dotaz |
| Sestoupit o úroveň při psaní | Napiš `/` |
| Vystoupit o úroveň při psaní | <kbd>Backspace</kbd> v prázdném poli |
| Přesunout nebo přejmenovat otevřenou poznámku | Klikni na tužku, pak procházej nebo piš jako výše |
| Přesunout bez přejmenování | Tužka → proklikej se do cílové složky → vyber nahoře připnutý aktuální název souboru |
| Přejmenovat na místě | <kbd>F2</kbd> dvakrát (první jde na vložený nadpis, druhé na záhlaví) |
| Skočit do jiného trezoru, do domovské složky nebo na jednotku | Klikni na název trezoru |
| Otevřít soubor mimo trezor | Název trezoru → vyber místo → procházej → vyber soubor (jen ke čtení do *Upravit jako text*) |
| Cokoli zrušit | <kbd>Esc</kbd>, nebo klik mimo lištu záhlaví |

## Nastavení

| Nastavení | Možnosti | Výchozí | Co dělá |
| --- | --- | --- | --- |
| **Zarovnání** | Vlevo / Na střed / Vpravo | Vlevo | Kde cesta sedí v řádku záhlaví. *Na střed* odpovídá klasickému vzhledu Obsidianu. |
| **Oddělovač** | Libovolný znak | `/` | Oddělovač kreslený mezi segmenty. Před textovým polem stojí šest přednastavení na jedno kliknutí (`/ > ▸ › \ •`). |
| **Zobrazit název trezoru** | Zap. / Vyp. | Zap. | Zda je sám trezor prvním segmentem cesty. Vypnuto se ten segment stane ikonou 🏠, místo aby zmizel, takže cesta pořád začíná něčím klikatelným. |
| **Název složky otevírá seznam** | Zap. / Vyp. | Zap. | Prohodí, co dělá název složky a oddělovač za ním — viz [tabulka výše](#řádek-cesty). S [Folder notes](obsidian://show-plugin?id=folder-notes) oddělovač otevírá poznámky složek. Nikdy neplatí v režimu přejmenování/přesunu. |
| **Zobrazit skryté soubory** | Zap. / Vyp. | Vyp. | Zda jsou skryté soubory a složky vypsané v seznamech. Ochrana proti přepsání platí tak jako tak. |
| **Přístup k externím souborům** | Zap. / Vyp. | **Vyp.** | Zda název trezoru otevírá seznam umístění. Vypnuto nic v pluginu nikdy nekouká za tenhle trezor. |

## Výměna ikon

Lure kreslí tři ikony: ikonu kořene trezoru (když je **Zobrazit název trezoru** vypnuté), přepínač přejmenování/přesunu a visací zámek, který hlídá zápis mimo trezor. Všechny jdou vyměnit z motivu nebo z útržku CSS — nastav náhradní glyf a skryj ten přibalený jediným pravidlem:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* Zámek má dva stavy; `.is-active` je ten otevřený. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}

.lure-unlock-btn.is-active {
	--lure-icon-glyph: "🔓";
}
```

`--lure-icon-glyph` bere cokoli platného v CSS vlastnosti `content`, takže `url(...)` funguje pro obrázek stejně jako textový glyf nebo emodži. Nech `--lure-icon-svg` být, ať si podržíš ikonu Lucide a svůj glyf nakreslíš vedle ní.
