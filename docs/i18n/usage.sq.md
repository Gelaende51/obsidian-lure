<!-- Përkthim i docs/usage.md — gjendja: commit 349b74e.
     Përkthim makinerie (Claude Opus 5), i papërmirësuar nga folës
     amtarë. Unazat e shtojcës vijnë nga src/lang/translations.ts,
     ndërsa ato të Obsidian nga tekstet që shpërndan vetë aplikacioni,
     ashtu siç i sheh në ekran. -->

**Lexoje këtë në gjuhë të tjera:** [English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · [Čeština](usage.cs.md) · [Dansk](usage.da.md) · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · [Bahasa Indonesia](usage.id.md) · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · [Norsk](usage.no.md) · [Polski](usage.pl.md) · [Português](usage.pt.md) · [Português (Brasil)](usage.pt-BR.md) · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · **Shqip** · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

# Përdorimi

[← kthehu te README](README.sq.md)

## Shtegu në kokë

Shtegu i plotë i shënimit brenda kasafortës zëvendëson emrin e thjeshtë të skedarit në shiritin e kokës — rreshti nën radhën e skedave, ai që mban edhe butonat mbrapa/përpara.

Dy gjëra në rresht janë të klikueshme, dhe **Emri i dosjes hap listën** vendos se cila bën çfarë:

| | Emri i dosjes | Ndarësi pas tij |
| --- | --- | --- |
| **I ndezur** (parazgjedhje) | E zgjedh atë dosje për redaktim | Hap dosjen |
| **I fikur** | Hap dosjen | Zbret brenda asaj dosjeje |

„Hap dosjen“ do të thotë çfarëdo që bën klikimi i atij segmenti në Obsidian të pastër. Pa ndonjë shtojcë që dëgjon aty, dosja shfaqet në shiritin anësor Eksploruesi i dokumenteve — e theksuar dhe e hapur për të treguar përmbajtjen.

Me [Folder notes](obsidian://show-plugin?id=folder-notes) të instaluar, i njëjti klikim hap përkundrazi shënimin e asaj dosjeje. Është e vetmja shtojcë shënimesh dosjeje që u gjet të kërkojë shtegun e kokës; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) dhe [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) i menaxhojnë shënimet e dosjeve, por nuk dëgjojnë për klikim mbi shtegun, ndaj me to ndarësi e shfaq dosjen si zakonisht. Shih [pajtueshmërinë](../compatibility.md#verified-against).

Një ndarës është **i nënvizuar vetëm kur dosja para tij ka vërtet një shënim dosjeje**, ndaj nënvizimi është premtim se ka diçka për t'u hapur. Çdo ndarës mbetet i klikueshëm sido që të jetë — një pa nënvizim e shfaq dhe e hap dosjen e vet në shiritin anësor, gjë që kursori i shigjetës e sinjalizon prapë. Nënvizimi largohet njëkohësisht nga emri i dosjes: me ndërrimin të ndezur, emri hap listën, ndaj shënimi i tij si lidhje drejt shënimit do të ishte gënjeshtër.

**Modaliteti riemërtim/zhvendosje i mbivendos të dyja**, çfarëdo që thotë cilësimi: asgjë në rresht nuk hap dosje derisa një zhvendosje është pezull, sepse hapja e njërës do ta braktiste zhvendosjen. Emrat e dosjeve zgjidhen për redaktim dhe ndarësit zbresin — të dyja janë mënyra për të zgjedhur destinacionin — dhe nënvizimi zhduket për të treguar se hapja është pezulluar.

**Rrënja e kasafortës** është i vetmi segment që nuk është segment shtegu. Nuk ka prind nga i cili të listojë motrat, ndaj në vend të kësaj hap [listën e vendndodhjeve](#shfletimi-jashtë-kasafortës) — kasafortat e tua të tjera, dosjen personale, rrënjën e sistemit të skedarëve dhe disqet e montuara.

## Klikimi i një segmenti: ndërroje me një motër

Klikimi i emrit të një dosjeje zgjedh **emrin e asaj dosjeje** në një fushë teksti dhe hap listën e dosjes **një shtresë më lart** — prindin e saj. Shkrimi ose zgjedhja e një zëri e ndërron këtë dosje me një motër dhe lë të paprekur gjithçka nën të, ndaj `Projects/2026/Kickoff.md` → klikim mbi `2026` → zgjedh `2025` të jep `Projects/2025/Kickoff.md`.

Klikimi i **emrit të shënimit** funksionon njësoj kundrejt dosjes së vet, dhe e zgjedh emrin e skedarit **bashkë me prapashtesën** — riemërtimi ose ridrejtimi i një shënimi zakonisht do të thotë ta ndryshosh edhe atë.

Klikimi i dosjes ka zgjedhur tashmë një segment, ndaj **një klikim i mëtejshëm** e zgjeron zgjedhjen në të gjithë rreshtin — atë dosje *dhe* gjithçka nën të — dhe shkrimi më pas e zëvendëson pjesën tjetër të shtegut me një të vetme. Funksionon njësoj në lundrim dhe në modalitetin riemërtim/zhvendosje.

Kjo vlen vetëm si vazhdim i klikimit që hapi fushën. Sapo ta kesh përdorur fushën, ajo sillet si çdo fushë tjetër teksti: klikimi e vendos kursorin, klikimi i dyfishtë merr një fjalë, klikimi i trefishtë merr rreshtin.

Sido që të jetë, pjesa tjetër e shtegut mbetet e dukshme rreth fushës, si copëza para saj dhe si tekst i pazgjedhur pas saj, ndaj shtegu i plotë nuk zhduket kurrë nga koka. Shkruaj për të zëvendësuar zgjedhjen, ose shtyp <kbd>End</kbd> / <kbd>→</kbd> për ta ruajtur dhe për të redaktuar që aty. Lista e paraqet të gjithë dosjen pavarësisht se çfarë është parambushur; fillon të filtrojë vetëm kur shkruan vërtet.

## Zbritja me ndarës

Klikimi i një ndarësi (me **Emri i dosjes hap listën** të fikur) zbret brenda dosjes para tij: lista paraqet përmbajtjen e *asaj* dosjeje, dhe pjesa tjetër e shtegut hapet e zgjedhur në fushë. Zgjedhja e një dosjeje e shton atë në gjurmën e shtegut dhe hap menjëherë listën tjetër, ndaj mund të klikosh rrugës poshtë një peme pa e lënë rreshtin e kokës.

## Zërat e listës janë rreshta të vërtetë menaxheri skedarësh

Çdo skedar dhe dosje në listë sillet si rreshti i vet në Eksploruesin e dokumenteve:

- **Klikim i djathtë** për të njëjtin menu konteksti — *Dokument i ri* / *Dosje e re* mbi një dosje, *Hap në skedë të re* / *Riemërto* / *Fshi* mbi një skedar — përfshirë zërat që shtojnë shtojca të tjera në menutë e skedarëve.
- **Tërhiqe** një zë kudo ku Obsidian pranon një skedar: brenda një redaktuesi për të futur një lidhje, mbi një dosje në Eksploruesin e dokumenteve për ta zhvendosur, mbi shiritin e skedave për ta hapur.

Fjalët e menusë vijnë nga përkthimet e vetë Obsidian, ndaj përputhen me pjesën tjetër të aplikacionit në çdo gjuhë.

## Shkrimi i një shtegu

- Klikimi i **hapësirës bosh** para ose pas copëzave hap një fushë teksti të parambushur me të gjithë shtegun dhe plotësisht të zgjedhur — shkruaj mbi të, ose redakto në vend. (Klikimi i vetë emrit të skedarit zgjedh vetëm emrin e skedarit; shih më sipër.)
- Shkrimi ndërsa shfaqet një gjurmë copëzash e kthen segmentin e fundit në një fushë të vogël me vetëplotësim të drejtpërdrejtë të kufizuar në dosjen aktuale.
- `/` e kryen segmentin aktual dhe zbret brenda tij.
- <kbd>Backspace</kbd> në një fushë bosh kthehet prapa te dosja prind, duke rihapur emrin e saj me kursorin në fund.
- <kbd>Enter</kbd> kryen; <kbd>Esc</kbd> ose një klikim gjetkë anulon dhe kthen shtegun e vërtetë të skedarit.

Fusha është pa kornizë — pa kuti, pa vijë — ndaj lexohet si vetë teksti i shtegut, dhe rritet vetë ndërsa shkruan.

## Lundrimi nuk e prek kurrë skedarin e hapur

Në modalitetin e parazgjedhur (lundrim) shënimi i hapur **nuk** riemërtohet dhe nuk zhvendoset kurrë.

- Një shteg që përkon me një skedar ekzistues e hap atë.
- Një shteg që nuk ekziston ende kërkon *„Të krijohet skedar i ri?“*. Pohimi krijon dosjet prind që mungojnë dhe skedarin; anulimi nuk bën absolutisht asgjë.

## <kbd>Ctrl</kbd> — skedë e re, dhe kopjim në vend të zhvendosjes

Mbajtja e <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> në macOS) ndërsa zgjedh një skedar nga lista, ose ndërsa shtyp <kbd>Enter</kbd> mbi një shteg, e dërgon rezultatin në një **skedë të re** në vend të kësaj:

| | Normal | Me <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Zgjidh ose shkruaj një skedar ekzistues | Hapet këtu | Hapet në skedë të re |
| Shkruaj një shteg që nuk ekziston | Kërkon, pastaj hapet këtu | Kërkon, pastaj hapet në skedë të re |
| Kryej një shteg në modalitetin riemërtim/zhvendosje | **E zhvendos** shënimin atje | **E kopjon** atje dhe e hap kopjen në skedë të re |

Modifikuesi lexohet me rregullin e vetë Obsidian, ndaj sillet saktësisht si mbi një lidhje apo mbi një rresht të Eksploruesit të dokumenteve — klikimi i mesit gjithashtu do të thotë „skedë e re“, <kbd>Ctrl</kbd>+<kbd>Alt</kbd> do të thotë ndarje, dhe <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> dritare e re.

Kopjimi nuk pranon të mbishkruajë, tamam si zhvendosja — përfshirë mbi vetë shtegun e shënimit, ku nuk ka asgjë të arsyeshme për të kopjuar.

## Shfletimi jashtë kasafortës

**Kjo është e fikur si parazgjedhje.** Ndiz së pari **Qasje te skedarët e jashtëm** në cilësimet — leximi dhe shkrimi jashtë kasafortës është e vetmja gjë që kjo shtojcë bën e që Obsidian vetë nuk e bën, ndaj hyhet në të me dëshirë e nuk dilet prej saj. Me të fikur, emri i kasafortës thjesht e shfaq kasafortën tënde në Eksploruesin e dokumenteve, dhe asgjë këtu nuk shikon kurrë përtej saj.

Klikimi i **emrit të kasafortës** (ose i ikonës 🏠, kur *Shfaq emrin e kasafortës* është i fikur) hap një listë vendesh në vend të përmbajtjes:

- **Kasafortat e tua të tjera**, të lexuara nga regjistri i vetë Obsidian, më e hapura së fundmi e para, secila nën ikonën e kasafortës të vetë Obsidian — atë që aplikacioni përdor për urdhrat e kasafortës. Kasaforta që ke tashmë hapur merr një shtëpi: është vendi nga ku niset rreshti si parazgjedhje, jo diku për të shkuar.
- **Dosja personale**, nën emrin e llogarisë tënde, e shënuar me `~`. Lucide nuk ka tildë, ndaj kjo vizatohet nga shtojca mbi rrjetën 24×24 të vetë Lucide me të njëjtin trashësi vije — një ikonë që i mungon grupit, e jo një shenjë teksti e ulur mes ikonave.
- **Rrënja e sistemit të skedarëve**, e etiketuar `root` — e papërkthyer, pasi ai është emri i saj në çdo sistem — e jo `/`, që do të lexohej si një hap bosh pranë ndarësit që e ndjek.
- **Disqet e montuara**, me një ikonë për çdo lloj aty ku kjo është e lirë të përcaktohet: ndarjet e rrjetit, disqet optike, disketat dhe mediat e heqshme marrin të vetat; çdo gjë tjetër merr një disk të përgjithshëm. Në Windows disqet shfaqen si `C:` me ikonë të përgjithshme — emrat e volumeve dhe llojet e sakta kërkojnë WMI, gjë që qëllimisht nuk bëhet.

Zgjedhja e një kasaforte tjetër **nuk e kalon Obsidian tek ajo.** Gjithçka që ke hapur mbetet e hapur; shtegu thjesht fillon të shfletojë atje. Ky është i gjithë qëllimi i ta pasurit në shiritin e shtegut e jo t'ia lësh ndërruesit të kasafortave në shiritin anësor.

### Ndërsa je jashtë

Shtegu **fillon nga vendi që zgjodhe**, jo nga struktura e drejtorive e makinës — zgjidh `Archive` dhe rreshti lexon `Archive / notes / …`, jo `/home/ti/Vaults/Archive/notes/…`. Segmenti i parë mban një ikonë për atë që është (kasafortë, dosje personale, disk), dhe <kbd>Backspace</kbd> ndalon aty e nuk ecën më lart brenda pjesës tjetër të sistemit të skedarëve. Me *Shfaq emrin e kasafortës* të fikur, ai segment është vetëm ikona — cilësimi ka të bëjë me segmentin e parë të rreshtit cilëndo kasafortë që emërton, jo vetëm tënden.

Shiriti i shtegut është **i kornizuar me ngjyrën e gabimit** — të njëjtën unazë që vizaton modaliteti i riemërtimit — për aq kohë sa tregon jashtë kasafortës. Ai shënon një gjendje të qëndrueshme, jo një çast: ndërsa është aty, asnjë nga trajtimet e vetë Obsidian nuk vlen për atë që tregon rreshti, dhe shkrimi mbetet i kyçur derisa të thuash ndryshe.

Shfletimi përndryshe funksionon si brenda: copëza, ndarës, shkrim, vetëplotësim, <kbd>Backspace</kbd> për të dalë një hap. Vlejnë edhe të njëjtat rregulla dukshmërie, ndaj prapashtesat e pambështetura kërkojnë prapë *Zbulo të gjithë llojet e materialeve* të Obsidian dhe skedarët me pikë kërkojnë prapë cilësimin e kësaj shtojce.

**Klikimi i djathtë dhe tërheqja** mbi zërat e listës nuk funksionojnë atje jashtë — ato janë trajtuesit e vetë Eksploruesit të dokumenteve, dhe atyre u duhet një skedar që kasaforta e njeh.

### Shkrimi jashtë kasafortës

Gjithçka që shkruan është **e kyçur si parazgjedhje**. Një **bravë** shfaqet pranë çelësit të riemërtimit në kokë për aq kohë sa rreshti tregon jashtë kasafortës; shtypja e saj e hap bravën dhe skuqet, duke përputhur unazën rreth rreshtit.

Leja jepet **për një vendndodhje, jo për një çast**: ajo mbijeton gjithçka që do të bëje duke punuar në një vend — përfundimin e një zhvendosjeje, klikimin larg fushës, hapjen e një skedari — dhe mbaron kur zgjedh një kasafortë, disk ose rrënjë tjetër nga lista, kur rreshti kthehet te një skedar i kasafortës, ose kur shtyp sërish bravën. Kështu një varg zhvendosjesh brenda një dosjeje kërkon një shtypje, jo një për skedar.

Me bravën e hapur, shiriti i shtegut sillet atje jashtë siç sillet brenda:

| Veprimi | Rezultati |
| --- | --- |
| Shkruaj një emër që nuk ekziston, <kbd>Enter</kbd> | E njëjta kërkesë „ta krijoj?“ si brenda; edhe dosjet prind që mungojnë krijohen. Një emër pa prapashtesë bëhet `.md`, tamam si brenda |
| Modaliteti riemërtim/zhvendosje, shkruaj një emër të ri | Riemërton skedarin që rreshti po tregon. Një emër pa prapashtesë e ruan atë të skedarit — këtu jashtë një dosje mban çdo lloj skedari, dhe një riemërtim nuk duhet ta kthejë në heshtje një `.png` në `.md` |
| Modaliteti riemërtim/zhvendosje, shfleto gjetkë, zgjidh **ruaje këtë emër** | E zhvendos atje me emrin që ka tashmë |
| Mbaj <kbd>Ctrl</kbd> mbi cilëndo | Kopjon në vend të zhvendosjes, dhe e hap kopjen në skedë të re |

Të kyçura, të gjitha këto raportojnë çfarë i pengon në vend që të ndodhin. Asgjë nuk mbishkruhet kurrë në asnjërën gjendje: një objektiv që ekziston tashmë refuzohet, dhe refuzimi është ai i vetë sistemit të skedarëve (`COPYFILE_EXCL`, një krijim ekskluziv) e jo një kontroll që mund ta humbte garën. Një zhvendosje ndërmjet sistemesh skedarësh — nga një USB, nga një ndarje rrjeti — kthehet në kopjo-pastaj-fshi, dhe origjinali hiqet vetëm pasi kopja të ketë mbërritur.

**Një gjë që brava nuk e shkyç: zhvendosja e një shënimi *jashtë* kasafortës.** `fileManager` nuk mund ta ndjekë një skedar përtej asaj kufie, ndaj çdo lidhje drejt shënimit do të prishej në heshtje dhe Obsidian thjesht do ta shihte të zhdukur. Mbajtja e <kbd>Ctrl</kbd> e kopjon atje përkundrazi, gjë që nuk e ka atë problem, dhe njoftimi e thotë këtë. Rruga e kundërt — sjellja e një skedari të jashtëm *brenda* kasafortës — nuk është e lidhur ende.

### Hapja e një skedari të jashtëm

Redaktuesi i Obsidian punon vetëm mbi skedarë brenda kasafortës, ndaj një skedar i jashtëm **nuk mund** të hapet si shënim i vërtetë me lidhje, prapalidhje e gjithçka tjetër — ky është kufi i aplikacionit, jo i kësaj shtojce. Zgjedhja e njërit hap përkundrazi një **paraparje**, vetëm për lexim derisa të thuash ndryshe:

| Lloji | Shfaqet si |
| --- | --- |
| `.md`, `.markdown` | Markdown i vizatuar |
| Imazhe, audio, video, PDF | Luajtës/shikues vendas |
| Çdo skedar tjetër **teksti** (`.json`, `.css`, `.log`, `.txt`, …) | Tekst i thjeshtë fjalë për fjalë |
| Formate binare pa shikues | I jepen *Hap jashtë* |

Shikuesi ka dy lexime të një skedari, dhe meqë ato përjashtojnë njëri-tjetrin, shfaqet vetëm ai te i cili do të kaloje:

| | Çfarë bën | Parazgjedhje për |
| --- | --- | --- |
| **Shiko si Markdown** | E vizaton skedarin si shënim, vetëm për lexim | `.md`, `.markdown` |
| **Redakto si tekst** | Burimi, i redaktueshëm | gjithçka tjetër |

Jashtë kasafortës, **Redakto si tekst** është njëkohësisht shtypja që heq vetëm-leximin — modaliteti dhe leja janë një lëvizje e vetme e jo dy butona për t'u menduar. Ai ngjyroset i kuq **sa herë që shtypja e tij do të hiqte vetëm-leximin**, qoftë kur armatos redaktimin në vend, qoftë kur vjen drejt nga pamja e vizatuar; brenda kasafortës nuk ka çfarë të shkyçet, ndaj mbetet i thjeshtë. **Shiko si Markdown** merr një lyerje të lehtë theksi — të njëjtën ngjyrë që Obsidian i jep tekstit të zgjedhur — duke e shënuar si rrugën e kthimit e jo si thirrje për veprim.

Meqë butoni ndjek *redaktimin* e jo modalitetin e papërpunuar, një skedar që rri vetëm-lexim në pamjen e tekstit ofron prapë **Redakto si tekst**: ajo është shtypja që e armatos. Një skedar që nuk mund të shkruhet kurrë — i prerë, ose i palexueshëm — thotë përkundrazi **Shiko si tekst**, pasi vetëm kaq mund të japë shtypja.

Parazgjedhjet janë të dobishmet e jo të fjalëpërfjalshmet: një `#` në një skript shelli është koment, jo titull, ndaj vizatimi i një `.log` si Markdown do ta gëlltiste atë në heshtje. Secila parazgjedhje mund të mbivendoset për çdo skedar, dhe zgjedhja hyn në historikun e fletës, ndaj mbrapa/përpara dhe një hapësirë pune e rihapur e ruajnë — plot shënime jetojnë në skedarë `.txt`, dhe plot skedarë `.md` lexohen më lehtë si burim.

**Skedarët në kasafortën tënde janë të redaktueshëm menjëherë**, pa asnjë shkyçje: *Redakto si tekst* është redaktues i vërtetë dhe shkruan mbrapsht ndërsa shkruan.

**Redaktimi mbahet mend përgjatë kalimit.** Kalimi te *Shiko si Markdown* e pezullon atë — një vizatim statik nuk ka ku të shkruhet, dhe Live Preview i duhet redaktuesi i vetë Obsidian, i cili ekziston vetëm për skedarë brenda kasafortës — ndaj asgjë nuk pretendon se po redakton ndërsa je aty. Kthimi te *Redakto si tekst* e merr aty ku e le.

**Skedarët jashtë kasafortës hapen vetëm për lexim, dhe *Redakto si tekst* e heq atë.** Shtypja është e gjithë porta: derisa të ndodhë, asgjë atje jashtë nuk shkruhet. Pastaj skedari ruhet ndërsa shkruan, tamam si një brenda kasafortës; dhe rreshti i gjendjes ndryshon nga bravë në laps. Shkyçja mbulon atë skedar në atë skedë — lundrimi drejt një skedari tjetër rikyç, dhe qëllimisht nuk ruhet në historikun e skedës, ndaj një hapësirë pune e rihapur nuk kthehet kurrë me shkrimin tashmë të armatosur mbi një skedar sistemi që nuk e mban mend se e hape.

**Skedarët e prerë mbeten vetëm-lexim sido që të jetë** — ruajtja e asaj që është në ekran do të hidhte tutje gjithçka përtej kufirit, ndaj butoni nuk ofrohet fare e jo të ofrohet dhe të refuzohet. E njëjta vlen për një skedar që nuk u lexua dot: nuk ka çfarë të shkruhet mbrapsht veç një pjese bosh.

Nëse shkrimi dështon — një montim vetëm-lexim, një skedar që nuk të përket — arsyeja e vetë sistemit shfaqet në një njoftim.

Skedarët shumë të mëdhenj shfaqen të prerë, dhe rreshti i gjendjes e thotë këtë e nuk të lë ta zbulosh vetë — krahas kushteve të tjera e jo pas butonave, pasi kjo është fakt për skedarin si të tjerët. Kufijtë maten kundrejt një vizatuesi të vërtetë e nuk hamendësohen — shtrirja e një megabajti teksti në një pjesë e vret procesin vizatues të Obsidian menjëherë, dhe Markdown kushton disa herë më shumë për bajt sesa teksti i thjeshtë, ndaj të dy kanë kufij të veçantë dhe një rresht i vetëm i stërmadh shkurtohet edhe kur skedari në tërësi është i vogël.

**Rreshtat e gjendjes janë etiketa, dhe shpjegimi është këshillë kalimtare.** Secili rresht thotë çfarë është e vërtetë me sa më pak fjalë — *Jashtë kasafortës*, *Asnjë redaktues për këtë lloj skedari*, *I prerë — skedari shumë i madh* — sepse butonat pranë tyre e thonë tashmë në ç'gjendje është skedari. Kalimi i miut mbi njërin jep fjalinë: pse Obsidian nuk mund ta hapë si shënim, çfarë do të ndodhte përndryshe me këtë lloj skedari, sa të kushton prerja.

Kjo vlen edhe për skedarët **brenda** kasafortës tënde. Obsidian ia jep çdo prapashtese për të cilën nuk ka pamje drejt e aplikacionit të parazgjedhur të desktopit — ndaj një `.txt` ose `.json` në kasafortën tënde do të dilte krejt jashtë Obsidian. Ata tani hapen në të njëjtin shikues, me unazën portokalli, pasi „hape në Obsidian“ është ajo që kërkove — dhe si skedarë kasaforte, aty janë të redaktueshëm pa asnjë shkyçje. Skedarët binarë pa shikues ruajnë sjelljen e Obsidian; nuk ka çfarë të shfaqet.

Paraparja hapet **në skedën ku ishe**, ndaj mbrapa/përpara të kthejnë te shënimi nga ke ardhur; mbaj <kbd>Ctrl</kbd> për një skedë të re si kudo tjetër. Shiriti i kokës vazhdon të tregojë shtegun e skedarit të jashtëm sa është hapur, ndaj mund të vazhdosh shfletimin që aty.

Një rresht i qetë mbi përmbajtjen ofron rrugët e daljes:

- **Hape në *(kasafortë)*** — shfaqet kur skedari i përket njërës prej kasafortave të tua të tjera. Ia jep trajtuesit të URI-ve të vetë Obsidian, i cili hap dritaren e asaj kasaforte me shënimin brenda, si shënim i vërtetë i redaktueshëm. Kjo dritare lihet tamam siç ishte; asgjë nuk ndërrohet nën ty.
- **Shiko si Markdown** / **Redakto si tekst** — dy leximet; i dyti heq edhe vetëm-leximin jashtë kasafortës.
- **Hap jashtë** — ia jep skedarin aplikacionit të parazgjedhur të desktopit, përfshirë formatet binare që ky shikues nuk i tregon dot.

Asgjë jashtë kasafortës sate nuk shkruhet pa shtypur më parë *Redakto si tekst*. Shih pjesën [Jashtë kasafortës](README.sq.md#jashtë-kasafortës) të README-së për zbulimin e plotë.

## Dy ngjyrat e paralajmërimit

| | Kur | Çfarë do të thotë |
| --- | --- | --- |
| Unazë **e kuqe** mbi shiritin e shtegut | Rreshti tregon jashtë kasafortës | Obsidian nuk mund ta hapë si shënim atë që ndodhet aty, dhe asgjë atje jashtë nuk shkruhet derisa të hapësh bravën. |
| Unazë **portokalli** mbi shiritin e shtegut, zëra portokalli në listë | Skedari është lloj teksti për të cilin Obsidian nuk ka pamje | Kujdes. Obsidian do t'ia jepte aplikacionit të parazgjedhur të desktopit; shtojca e shfaq përkundrazi. |

Të **dyja janë të pavarura, dhe të dyja mund të vlejnë njëherësh** — një `.json` i jashtëm është jashtë kasafortës *dhe* lloj për të cilin Obsidian nuk ka redaktues. Në shikues ato shfaqen si rreshta të veçantë, secili duke thënë vetëm faktin e vet. Mbi shiritin e shtegut, e kuqja fiton aty ku vlejnë të dyja, pasi dy unaza do të ishin vetëm zhurmë.

Shkalla portokalli është qëllimisht e ngushtë. Llojet e regjistruara (Markdown, canvas, imazhe, PDF, audio, video) trajtohen si duhet dhe nuk marrin asgjë. Skedarët binarë nuk marrin asgjë as ata — nuk do ta rrëmujosësh një `.zip` pa dashje. Ajo që mbetet është pikërisht rreziku: një `.json`, `.css` ose `.log` që **Zbulo të gjithë llojet e materialeve** e ka bërë të dukshëm.

E kuqja fiton aty ku do të vlenin të dyja; dy unaza njëherësh do të ishin vetëm zhurmë.

## Modaliteti zhvendos/riemërto

Butoni me laps në skajin e djathtë të kokës — pranë butonit të modalitetit të pamjes, i së njëjtës madhësi me butonat vendas — ndez e fik modalitetin zhvendos/riemërto. Rreshti i kokës kornizohet atëherë me ngjyrën e theksit, tamam si riemërtimi në Eksploruesin e dokumenteve. Të njëjtat klikime dhe shtypje tastesh kryejnë tani një zhvendosje ose riemërtim përmes `fileManager.renameFile` të Obsidian, ndaj të gjitha lidhjet drejt shënimit e ndjekin atë.

Gjatë riemërtimit:

- Emri aktual i skedarit është i fiksuar në listën e çdo dosjeje, ndaj zhvendosja e një shënimi pa e riemërtuar është një klikim i vetëm.
- Emrat e zënë tashmë në dosjen e destinacionit janë të zbehur, por prapë të zgjedhshëm.
- Hyrja vlerësohet drejtpërdrejt kundrejt rregullave të riemërtimit të vetë Obsidian — të njëjtat grupe shenjash, të njëjtat mesazhe, e njëjta këshillë e kuqe që merr kur riemërton në pemën e skedarëve — ndaj një emër i palejuar ose në konflikt shënohet ndërsa shkruan dhe nuk kryhet dot.
- Klikimi jashtë shiritit të kokës, ose humbja e fokusit nga koka, e mbyll modalitetin e riemërtimit.

## Një tast për të dy riemërtimet

Urdhri i riemërtimit (<kbd>F2</kbd> si parazgjedhje, ose çfarëdo që i ke caktuar) **alternon** mes riemërtimit të titullit të brendshëm të Obsidian dhe shiritit të shtegut të kësaj shtojce me shtegun e plotë të zgjedhur. Nëse e ke fikur titullin e brendshëm të Obsidian, shiriti i shtegut mbetet objektivi i vetëm, ndaj tasti nuk rri kurrë pa bërë asgjë.

Kjo funksionon duke mbështjellë urdhrin `workspace:edit-file-title` e jo duke rrëmbyer tastin, ndaj si ricaktimi i shkurtores ashtu edhe nisja e urdhrit nga paleta funksionojnë të pandryshuara.

## Si ngjyrosen zërat e listës

| Ngjyra | Do të thotë |
| --- | --- |
| **Vjollcë** | Një shënim (`.md`, `.markdown`) — ajo që Obsidian do ta hapë si shënim, e veçuar nga një dosje me përmbajtje të përzier |
| **Portokalli** | Lloj teksti për të cilin Obsidian nuk ka pamje; shih [ngjyrat e paralajmërimit](#dy-ngjyrat-e-paralajmërimit) |
| **E zbehtë** | Jashtë kasafortës, ndaj trajtimi i vetë kasafortës nuk vlen |
| **Blu** | Shënimi ku ndodheni. Gjatë shfletimit është zëri i tij; në modalitetin riemërtim/zhvendosje zëri *ruaje këtë emër* qëndron në vend të tij — i njëjti shënim në të dyja rastet |
| **E hirtë** | Vetëm në modalitetin riemërtim/zhvendosje: emri është i zënë. Prapë i zgjedhshëm — zgjedhja e mbush fushën, ku vlerësimi e shënon konfliktin |

## Rregullat e dukshmërisë

- Skedarët me prapashtesa të pambështetura shfaqen në lista vetëm nëse cilësimi **Zbulo të gjithë llojet e materialeve** i Obsidian është i ndezur.
- Lista tregon më së shumti 100 zëra — kufiri i vetë Obsidian. Kur një dosje ka më shumë, rreshti i fundit thotë sa mbetën jashtë; vazhdo të shkruash për ta ngushtuar listën.
- Skedarët dhe dosjet me pikë shfaqen vetëm nëse cilësimi **Shfaq skedarët e fshehur** i kësaj shtojce është i ndezur.
- **Mbrojtja nga mbishkrimi funksionon njësoj pavarësisht dukshmërisë** — një skedar i fshehur të pengon prapë ta mbishkruash.

## Fletë ndihmëse

| Do të… | Bëj këtë |
| --- | --- |
| Hapësh një dosje (shënimin e saj, ose ta shfaqësh) | Kliko ndarësin **pas** asaj dosjeje |
| Ndërrosh një dosje me një motër | Kliko emrin e asaj dosjeje, pastaj shkruaj ose zgjidh |
| Riemërtosh ose ridrejtosh shënimin | Kliko emrin e shënimit — bashkë me prapashtesën |
| Shfletosh përmbajtjen e një dosjeje | Kliko emrin e asaj dosjeje; lista paraqet prindin e saj, ndaj kliko dosjen **poshtë** asaj që do |
| Rishkruash një dosje dhe gjithçka nën të | **Kliko dy herë** emrin e asaj dosjeje, pastaj shkruaj |
| Redaktosh shtegun nga një dosje e poshtë | Kliko emrin e asaj dosjeje, pastaj <kbd>End</kbd> ose <kbd>→</kbd> për ta çzgjedhur |
| Kërcesh te një skedar duke shkruar shtegun e tij | Kliko emrin e skedarit ose hapësirën bosh, shkruaj, <kbd>Enter</kbd> |
| Hapësh një skedar në skedë të re | <kbd>Ctrl</kbd> ndërsa e zgjedh, ose <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| Kopjosh shënimin diku në vend që ta zhvendosësh | Laps, pastaj <kbd>Ctrl</kbd> ndërsa zgjedh ose kryen destinacionin |
| Krijosh një shënim në një shteg që nuk ekziston | Shkruaj shtegun, <kbd>Enter</kbd>, pohoje kërkesën |
| Zbresësh një nivel ndërsa shkruan | Shkruaj `/` |
| Ngjitesh një nivel ndërsa shkruan | <kbd>Backspace</kbd> në fushën bosh |
| Zhvendosësh ose riemërtosh shënimin e hapur | Kliko lapsin, pastaj shfleto ose shkruaj si më sipër |
| Zhvendosësh pa riemërtuar | Laps → kliko brenda dosjes së destinacionit → zgjidh emrin aktual të fiksuar |
| Riemërtosh në vend | <kbd>F2</kbd> dy herë (shtypja e parë shkon te titulli i brendshëm, e dyta te koka) |
| Kërcesh te një kasafortë tjetër, dosja personale ose një disk | Kliko emrin e kasafortës |
| Hapësh një skedar nga jashtë kasafortës | Emri i kasafortës → zgjidh një vend → shfleto → zgjidh skedarin (vetëm për lexim derisa *Redakto si tekst*) |
| Anulosh çfarëdo | <kbd>Esc</kbd>, ose kliko jashtë shiritit të kokës |

## Cilësimet

| Cilësimi | Mundësitë | Parazgjedhja | Çfarë bën |
| --- | --- | --- | --- |
| **Rreshtimi** | Majtas / Në qendër / Djathtas | Majtas | Ku ndodhet shtegu në rreshtin e kokës. *Në qendër* përputhet me pamjen klasike të Obsidian. |
| **Ndarës** | Çdo shenjë | `/` | Ndarësi i vizatuar mes segmenteve. Gjashtë paraprirje me një klikim (`/ > ▸ › \ •`) rrinë para fushës së tekstit. |
| **Shfaq emrin e kasafortës** | I ndezur / I fikur | I ndezur | Nëse vetë kasaforta është segmenti i parë i shtegut. E fikur, ai segment bëhet një ikonë 🏠 e nuk zhduket, ndaj shtegu nis prapë diku të klikueshme. |
| **Emri i dosjes hap listën** | I ndezur / I fikur | I ndezur | Ndërron çfarë bëjnë emri i dosjes dhe ndarësi pas tij — shih [tabelën më sipër](#shtegu-në-kokë). Me [Folder notes](obsidian://show-plugin?id=folder-notes) ndarësi hap shënimet e dosjeve. Nuk vlen kurrë në modalitetin riemërtim/zhvendosje. |
| **Shfaq skedarët e fshehur** | I ndezur / I fikur | I fikur | Nëse skedarët dhe dosjet me pikë paraqiten në lista. Mbrojtja nga mbishkrimi vlen sido që të jetë. |
| **Qasje te skedarët e jashtëm** | I ndezur / I fikur | **I fikur** | Nëse emri i kasafortës hap listën e vendndodhjeve. I fikur, asgjë në shtojcë nuk shikon kurrë përtej kësaj kasaforte. |

## Zëvendësimi i ikonave

Lure vizaton tri ikona: ikonën e rrënjës së kasafortës (kur **Shfaq emrin e kasafortës** është i fikur), çelësin riemërto/zhvendos, dhe bravën që kontrollon shkrimin jashtë kasafortës. Të gjitha mund të ndërrohen nga një temë ose një copëz CSS — cakto shenjën zëvendësuese dhe fshihe atë të bashkëngjitur në një rregull të vetëm:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* Brava ka dy gjendje; `.is-active` është e hapura. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}

.lure-unlock-btn.is-active {
	--lure-icon-glyph: "🔓";
}
```

`--lure-icon-glyph` pranon çdo gjë të vlefshme në `content` të CSS-së, ndaj `url(...)` funksionon për një imazh po aq mirë sa për një shenjë teksti ose emoji. Lëre `--lure-icon-svg` të qetë për të mbajtur ikonën Lucide dhe për ta vizatuar shenjën tënde pranë saj.
