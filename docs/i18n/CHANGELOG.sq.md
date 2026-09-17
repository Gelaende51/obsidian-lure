<!-- Përkthim i CHANGELOG.md — gjendja: commit f133f41.
     Përkthim me makinë (Claude Opus 5), i pashqyrtuar nga folës amtarë.
     Ndreqjet janë të mirëpritura; versioni përcaktues është CHANGELOG-u
     në anglisht. -->

[English](../../CHANGELOG.md) · [العربية](CHANGELOG.ar.md) · [አማርኛ](CHANGELOG.am.md) · [Беларуская](CHANGELOG.be.md) · [বাংলা](CHANGELOG.bn.md) · [Català](CHANGELOG.ca.md) · [Čeština](CHANGELOG.cs.md) · [Dansk](CHANGELOG.da.md) · [Deutsch](CHANGELOG.de.md) · [Ελληνικά](CHANGELOG.el.md) · [Español](CHANGELOG.es.md) · [فارسی](CHANGELOG.fa.md) · [Suomi](CHANGELOG.fi.md) · [Français](CHANGELOG.fr.md) · [Gaeilge](CHANGELOG.ga.md) · [עברית](CHANGELOG.he.md) · [Magyar](CHANGELOG.hu.md) · [Bahasa Indonesia](CHANGELOG.id.md) · [Italiano](CHANGELOG.it.md) · [日本語](CHANGELOG.ja.md) · [ქართული](CHANGELOG.ka.md) · [ភាសាខ្មែរ](CHANGELOG.kh.md) · [한국어](CHANGELOG.ko.md) · [Latviešu](CHANGELOG.lv.md) · [Bahasa Melayu](CHANGELOG.ms.md) · [नेपाली](CHANGELOG.ne.md) · [Nederlands](CHANGELOG.nl.md) · [Norsk](CHANGELOG.no.md) · [Polski](CHANGELOG.pl.md) · [Português](CHANGELOG.pt.md) · [Português (Brasil)](CHANGELOG.pt-BR.md) · [Română](CHANGELOG.ro.md) · [Русский](CHANGELOG.ru.md) · [संस्कृतम्](CHANGELOG.sa.md) · [Slovenčina](CHANGELOG.sk.md) · **Shqip** · [Српски](CHANGELOG.sr.md) · [Svenska](CHANGELOG.sv.md) · [ไทย](CHANGELOG.th.md) · [Türkçe](CHANGELOG.tr.md) · [Українська](CHANGELOG.uk.md) · [Oʻzbekcha](CHANGELOG.uz.md) · [Tiếng Việt](CHANGELOG.vi.md) · [简体中文](CHANGELOG.zh.md) · [繁體中文](CHANGELOG.zh-TW.md)

# Regjistri i ndryshimeve

Çdo publikim i Lure, më i riu i pari. Ajo që ka ardhur që nga publikimi i fundit ndodhet nën *Të papublikuara*. Versionet nuk kanë prapashtesën `v`, njësoj si etiketat e publikimeve.

## Të papublikuara[^unreleased]

### Të shtuara

- **Sill një skedar brenda kasafortës nga jashtë.** Zhvendos ose kopjo një skedar nga kudo në disk drejt një shtegu brenda kasafortës sate; ai mbërrin si shënim i vërtetë, dhe një zhvendosje e heq origjinalin vetëm pasi kopjimi të ketë pasur sukses.
- **Lësho tekst ose një skedar mbi rresht që të shkruhet.** Mbi një dosje: një shënim i ri në atë dosje, i emërtuar ndërsa shkruan. Mbi emrin e shënimit, ose mbi ndarësin e një dosjeje që ka shënim dosjeje: i shtohet fundit të atij shënimi, pas një konfirmimi.
- **Krijo një shënim dosjeje** me një shtypje të dytë mbi çfarëdo që e hap dosjen, aty ku po punon një shtojcë shënimesh dosjeje dhe dosja nuk ka ende një të tillë. Ai vendoset aty ku e thonë cilësimet e vetë [Folder notes](https://github.com/LostPaul/obsidian-folder-notes).
- **Zvarrit një dosje nga shiriti i shtegut mbi shiritin e skedave** për ta hapur atje: shënimin e saj të dosjes aty ku e ka, përndryshe një skedë që qëndron në atë dosje.
- **Rrota e miut ecën nëpër listë.** Mbi një emër, kthesa e parë hap listën e atij emri dhe çdo kthesë tjetër e lëviz theksimin një rresht. Një rresht që po rrëshqet anash e mban rrotën për rrëshqitjen.
- **Dil me shigjetë nga fillimi i fushës** për të sjellë brenda dosjen para saj: <kbd>←</kbd> për një dosje, <kbd>Shift</kbd>+<kbd>Home</kbd> (ose <kbd>Home</kbd> me listën e mbyllur) për të gjitha.
- **Fusha vishet me ngjyrën e asaj që emërton**, po atë të rreshtit përkatës në listë, dhe skuqet sapo asgjë nuk i përgjigjet — pikërisht në çastin kur <kbd>Enter</kbd> do të krijonte diçka në vend që ta hapte.
- **Shënimet e dosjeve janë gri në listë**, kështu që lexohen si pjesë e dosjes së tyre e jo si edhe një shënim tjetër.
- **Kliko me butonin e mesëm një ndarës** për ta hapur atë dosje në një skedë të re: shënimin e saj të dosjes, ose një skedë që qëndron në të.

### Të ndryshuara

- **Dryja dhe çelësi i riemërtimit janë një kontroll i vetëm.** Jashtë kasafortës një dry i kuq e i mbyllur zë vendin e çelësit; hapja e tij ia dorëzon vendin çelësit, dhe dalja nga modaliteti i riemërtimit e mbyll sërish.
- **Tasti i riemërtimit e pyet edhe dryjen.** Jashtë kasafortës një shtypje e bën dryjen të pulsojë; një shtypje e dytë brenda gjysmë sekonde jep atë që jep dryja dhe hap modalitetin e riemërtimit.
- **Tasti i riemërtimit bën një cikël të plotë** — titulli brenda tekstit, emri, emri me prapashtesë, shtegu nga kasaforta, shtegu nga rrënja e sistemit — dhe shtypja pasuese kthehet te titulli brenda tekstit.
- **Klikimi me <kbd>Ctrl</kbd> dhe klikimi me butonin e mesëm nuk janë më sinonime.** Njëri hap një skedë dhe shkon te ajo, tjetri e hap në sfond.
- **Klikimi me të djathtën mbi emrin e shënimit hap menynë e vetë skedarit.**
- **Lista është aq e lartë sa e lejon dritarja**, në vend të 300 pikselave fikse të Obsidian-it.
- **Klikimi i një dosjeje ndërsa një fushë është e hapur e ruan të gjithë shtegun pas saj**, dhe klikimi brenda një dosjeje në fushë rendit të plotë përmbajtjen e asaj dosjeje.
- **Ndarësi hap një shënim dosjeje në çdo thellësi** kur Folder notes është në punë, dhe është i nënvizuar kudo ku ka një të tillë. Më parë punonin vetëm dosjet e nivelit të parë. Me shtojcat e tjera të shënimeve të dosjeve ndarësi vazhdon ta zbulojë dosjen.

### Të ndrequra

- **Një fushë e hapur i mbijetonte skedarit të vet.** Kalimi te një shënim tjetër me shiritin e shtegut të hapur e linte rreshtin duke emërtuar skedarin e vjetër për pjesën e mbetur të sesionit.
- **Fshij, Riemërto dhe Krijo një kopje refuzoheshin jashtë kasafortës** edhe me dryjen të hapur, dhe nuk arriheshin kurrë për figurat, PDF-të dhe faqet.
- **<kbd>Ctrl</kbd>+<kbd>Enter</kbd> nuk bënte asgjë ndërsa lista ishte e hapur** — pikërisht ashtu si hapet çdo fushë.
- **<kbd>Enter</kbd> me listën të hapur por pa asgjë të theksuar** nuk bënte asgjë; tani e kryen atë që ke shkruar.
- **Një rresht që dilte jashtë kufijve me të gjithë emrat tashmë në formën më të shkurtër nuk mund të rrëshqitej**, duke e lënë fundin e shtegut të paarritshëm.
- **Çaktivizimi i shtojcës linte një buton të vdekur** në kokën e çdo shënimi që ajo kishte modifikuar.

## 1.2.0 — 2026-08-25[^1.2.0]

### Të shtuara

- **Cilësimi i gjuhës.** Lure ndjek gjuhën e Obsidian-it si parazgjedhje dhe mund të vihet në cilëndo prej gjuhëve të veta. Kjo është gjithashtu e vetmja mënyrë për të arritur përkthimet në greqisht dhe sanskritisht, të cilat vetë Obsidian nuk i ofron. Etiketa e vetë cilësimit mbetet në anglisht, që të mund të gjendet sërish nga një gjuhë që nuk e lexon dot.

## 1.1.2 — 2026-08-25[^1.1.2]

### Të ndryshuara

- **Fletë stili më e lehtë.** Rreshti nuk përdor më përzgjedhës `:has()` dhe as shumicën e rregullave `!important`. Ripërshtatet me më pak punë, dhe paralajmërimet e shqyrtimit të shtojcave ranë nga 56 në 7.

## 1.1.1 — 2026-08-22[^1.1.1]

### Të ndrequra

- **Një emër i shkurtër dosjeje mund të vizatohej me një hapësirë brenda** — `atlas` si `atl as` — sepse hapësira e rezervuar për formën e tij të shkurtuar ishte më e gjerë se vetë emri.

## 1.1.0 — 2026-08-22[^1.1.0]

### Të shtuara

- **Fjalor i klikimit të djathtë.** Një shtypje hap një meny; dy e tri shtypje kopjojnë gjithnjë e më shumë — emrin, emrin me prapashtesën e tij, shtegun. Menytë e rreshtit tani përputhen zë për zë me ato të Eksploruesit të dokumenteve.
- **Meny jashtë kasafortës.** Rreshtat e listës dhe parësi i jashtëm ofrojnë hapjen, *Kopjo shtegun* dhe *Shfaq në dosje*; me dryjen të hapur, edhe *Dokument i ri*, *Dosje e re*, *Krijo një kopje*, *Riemërto…* dhe *Fshij*. Fshirja e çon në koshin e sistemit dhe nuk është kurrë e përhershme.
- **Hape diku tjetër.** <kbd>Ctrl</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> dhe klikimi me butonin e mesëm mbi emrin e shënimit ose mbi një dosje e hapin atë në një skedë të re, në një ndarje ose në një dritare. Të dyja janë të zvarritshme, si rreshtat e tyre në Eksploruesin e dokumenteve.
- **Zvarrit shënime mbi rresht për t'i zhvendosur.** Lësho një shënim, disa shënime ose një dosje mbi një segment dosjeje ose mbi emrin e kasafortës.
- **Komandë: Fokuso shiritin e shtegut**, me të gjithë shtegun të përzgjedhur — pa tast të parazgjedhur, lidhe vetë.
- **Shkruaj një URL** në shiritin e shtegut: `http(s)://` dhe `obsidian://` hapen si lidhje, `file://` dhe shtigjet e koduara me përqindje e hapin skedarin.
- **Plotësim me <kbd>Tab</kbd>**, ashtu siç e bën një guaskë: çdo shtypje plotëson aq sa pajtohen emrat e dosjes dhe ndalet aty ku ata ndryshojnë. <kbd>Shift</kbd>+<kbd>Tab</kbd> ecën mbrapsht. Kur nuk ka më asgjë për të plotësuar, <kbd>Tab</kbd> e zgjeron përzgjedhjen: emri, emri me prapashtesë, shtegu nga kasaforta, shtegu nga rrënja e sistemit.
- **Lista hapet aty ku ndodhesh** dhe e parashfaq në fushë atë që tregon; dalja nga lista ta kthen tekstin.
- **Zhvendos një shënim jashtë kasafortës** pas një konfirmimi që numëron lidhjet që do të prishë. Ai kopjohet jashtë, pastaj hidhet në kosh, kështu që mund të rikuperohet si çdo shënim i fshirë.
- Cilësimi **Shfaq prapashtesat e skedarëve**, dhe kuptohen shtigjet në thonjëza (ashtu si i prodhon *Copy as path* i Windows-it).
- **Cilësimet shfaqen te kërkimi i cilësimeve të Obsidian-it** në Obsidian 1.13 e më vonë.

### Të ndryshuara

- **Shtigjet e gjata i përshtaten panelit.** Emrat shkurtohen duke nisur nga më pak i dobishmi — emri i kasafortës, pastaj prapashtesa, pastaj dosjet, dhe i fundit emri i vetë shënimit — kurrë përtej pikës ku mund të dallohen nga njëri-tjetri. Kalo kursorin mbi një emër të shkurtuar për ta lexuar të plotë.
- **Klikimi i emrit të shënimit e përzgjedh atë pa prapashtesën**, kështu që riemërtimi nuk rrezikon më të ndryshojë llojin e skedarit.
- **Tasti i riemërtimit hapet te emri pa prapashtesën e tij**, dhe shtypjet e mëtejshme e zgjerojnë përzgjedhjen.
- **Klikimi i një dosjeje e mban pjesën tjetër të shtegut të dukshme**, edhe jashtë kasafortës.
- **Shfletimi prapa brenda kasafortës sate i hap skedarët si shënime**, me lidhje e prapalidhje, dhe jo në parësin e jashtëm.

### Të ndrequra

- **Etiketat e menyve ishin në anglisht në çdo gjuhë**; tani vijnë nga përkthimet e vetë Obsidian-it.
- **Tasti i riemërtimit ngecte te dialogu i riemërtimit të Obsidian-it** kur shënimi ishte rrëshqitur përtej titullit të tij.
- **<kbd>Esc</kbd> kërkonte dy shtypje** për të mbyllur fushën dhe listën e saj.
- **<kbd>Ctrl</kbd>+<kbd>Enter</kbd> hapte një lidhje në redaktues** në vend që të vepronte mbi shiritin e shtegut.
- **Riemërtimi jashtë kasafortës e humbte emrin e shkruar** kur shtypej dryja.
- **<kbd>Tab</kbd> mund të vërtitej pa përparuar** mbi një dosje që qëndron pranë shënimit të vet të dosjes.

## 1.0.4 — 2026-08-13[^1.0.4]

### Të shtuara

- **Shënimi ku ndodhesh shënohet me blu** në listë, kështu që shfletimi prapa te dosja e tij tregon se nga ku nise.

## 1.0.3 — 2026-08-13[^1.0.3]

### Dokumentacion

- README-ja lidhet me faqen e shtojcës në direktorinë e komunitetit, dhe README-të e përkthyera sillen në ditë.

## 1.0.2 — 2026-08-13[^1.0.2]

### Të ndryshuara

- **Kërkon Obsidian 1.8.7 ose më të ri** (ishte 1.4.0). Dy veçori mbi të cilat mbështetet shiriti i shtegut — kopjimi i skedarëve dhe këshilla e gabimit nën fushë — kanë nevojë për të.
- **Shkarkimet e publikimeve mbartin prejardhje të nënshkruar të ndërtimit**, kështu që mund të konfirmosh me `gh attestation verify` se `main.js` u ndërtua nga ky depo.

### Të ndrequra

- **Hapja e një skedari të jashtëm që mungonte në aplikacionin e parazgjedhur dështonte në heshtje**; dështimi tani raportohet.

## 1.0.1 — 2026-08-13[^1.0.1]

### Të ndrequra

- **Në modalitetin e riemërtimit një shënim binte në konflikt me vetveten** — shfletimi prapa te dosja e vet ia fshihte emrin nga lista, sikur ta bllokonte riemërtimin e vet.
- **Zbulimi i parë i një dosjeje pas nisjes së Obsidian-it nuk zgjeronte asgjë.**
- **Zgjedhja e një dosjeje nga lista mund të mbyllte modalitetin e riemërtimit** në vend që të zbriste brenda saj.
- **Redaktimet e jashtme mund të mbishkruheshin në heshtje** nga një shkrues tjetër, si Sync-u ose një panel i dytë. Shkrimet tani janë atomike.
- **Rivendosja e konturit të fokusit rridhte te pamje të tjera**; tani zbatohet vetëm te kokat që Lure ka modifikuar.

### Dokumentacion

- README-ja dhe udhëzuesi i përdorimit janë të disponueshëm në të 44 gjuhët që vijnë me shtojcën.
- Udhëzuesi përmendte cilësimin *Detect all file extensions* të Obsidian-it, i cili tani quhet *Zbulo të gjithë llojet e materialeve*.

## 1.0.0 — 2026-08-10[^1.0.0]

Publikimi i parë. E zëvendëson emrin e skedarit në kokën e një shënimi me një shteg të klikueshëm e të redaktueshëm të kasafortës — një shirit adrese për shënimet e tua, i modeluar sipas atij të Dolphin.

### Të shtuara

- **Kliko një dosje** për një listë me përmbajtjen e dosjes prind, për ta ndërruar me një motër dhe për ta lënë pjesën tjetër të shtegut të paprekur.
- **Kliko ndarësin** pas një dosjeje për ta zbuluar dhe zgjeruar atë te Eksploruesi i dokumenteve, ose për të hapur shënimin e saj të dosjes aty ku Folder notes e menaxhon atë.
- **Kliko emrin e skedarit ose hapësirën bosh** për të shkruar një shteg, me vetëplotësim: `/` zbret, <kbd>Backspace</kbd> del një hap jashtë, <kbd>Enter</kbd> e kryen.
- **Modaliteti zhvendos/riemërto** i kalon të njëjtat ndërveprime në zhvendosje dhe riemërtim, të vlerësuara ashtu siç i vlerëson Obsidian.
- **<kbd>Ctrl</kbd> hap në një skedë të re** — ose, në modalitetin zhvendos/riemërto, e kopjon shënimin atje.
- **<kbd>F2</kbd> alternon** mes titullit brenda tekstit dhe shiritit të shtegut.
- **Jashtë kasafortës** (e fikur si parazgjedhje): emri i kasafortës hap kasafortat e tua të tjera, dosjen e shtëpisë, rrënjën e sistemit të skedarëve dhe disqet e montuara. Atje jashtë nuk shkruhet asgjë derisa ta shkyçësh, dhe një shënim mund vetëm të kopjohet jashtë kasafortës, kurrë të zhvendoset.
- **45 gjuhë.**

[^unreleased]: Ndryshimet që nga 1.2.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.2.0...HEAD>
[^1.2.0]: Ndryshimet që nga 1.1.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.2...1.2.0>
[^1.1.2]: Ndryshimet që nga 1.1.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.1...1.1.2>
[^1.1.1]: Ndryshimet që nga 1.1.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.0...1.1.1>
[^1.1.0]: Ndryshimet që nga 1.0.4: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.4...1.1.0>
[^1.0.4]: Ndryshimet që nga 1.0.3: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.3...1.0.4>
[^1.0.3]: Ndryshimet që nga 1.0.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.2...1.0.3>
[^1.0.2]: Ndryshimet që nga 1.0.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.1...1.0.2>
[^1.0.1]: Ndryshimet që nga 1.0.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.0...1.0.1>
[^1.0.0]: Publikimi i parë: <https://github.com/Gelaende51/obsidian-lure/releases/tag/1.0.0>
