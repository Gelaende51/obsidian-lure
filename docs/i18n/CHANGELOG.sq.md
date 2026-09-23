<!-- Përkthim i CHANGELOG.md — gjendja: commit 2739cf0.
     Përkthim me makinë (Claude Opus 5), i pashqyrtuar nga folës amtarë.
     Ndreqjet janë të mirëpritura; versioni përcaktues është CHANGELOG-u
     në anglisht. -->

[English](../../CHANGELOG.md) · [العربية](CHANGELOG.ar.md) · [አማርኛ](CHANGELOG.am.md) · [Беларуская](CHANGELOG.be.md) · [বাংলা](CHANGELOG.bn.md) · [Català](CHANGELOG.ca.md) · [Čeština](CHANGELOG.cs.md) · [Dansk](CHANGELOG.da.md) · [Deutsch](CHANGELOG.de.md) · [Ελληνικά](CHANGELOG.el.md) · [Español](CHANGELOG.es.md) · [فارسی](CHANGELOG.fa.md) · [Suomi](CHANGELOG.fi.md) · [Français](CHANGELOG.fr.md) · [Gaeilge](CHANGELOG.ga.md) · [עברית](CHANGELOG.he.md) · [Magyar](CHANGELOG.hu.md) · [Bahasa Indonesia](CHANGELOG.id.md) · [Italiano](CHANGELOG.it.md) · [日本語](CHANGELOG.ja.md) · [ქართული](CHANGELOG.ka.md) · [ភាសាខ្មែរ](CHANGELOG.kh.md) · [한국어](CHANGELOG.ko.md) · [Latviešu](CHANGELOG.lv.md) · [Bahasa Melayu](CHANGELOG.ms.md) · [नेपाली](CHANGELOG.ne.md) · [Nederlands](CHANGELOG.nl.md) · [Norsk](CHANGELOG.no.md) · [Polski](CHANGELOG.pl.md) · [Português](CHANGELOG.pt.md) · [Português (Brasil)](CHANGELOG.pt-BR.md) · [Română](CHANGELOG.ro.md) · [Русский](CHANGELOG.ru.md) · [संस्कृतम्](CHANGELOG.sa.md) · [Slovenčina](CHANGELOG.sk.md) · **Shqip** · [Српски](CHANGELOG.sr.md) · [Svenska](CHANGELOG.sv.md) · [ไทย](CHANGELOG.th.md) · [Türkçe](CHANGELOG.tr.md) · [Українська](CHANGELOG.uk.md) · [Oʻzbekcha](CHANGELOG.uz.md) · [Tiếng Việt](CHANGELOG.vi.md) · [简体中文](CHANGELOG.zh.md) · [繁體中文](CHANGELOG.zh-TW.md)

# Regjistri i ndryshimeve

Çdo publikim i Lure, më i riu i pari. Ajo që ka ardhur që nga publikimi i fundit ndodhet nën *Të papublikuara*. Versionet nuk kanë prapashtesën `v`, njësoj si etiketat e publikimeve.

## 1.5.0 — 2026-09-23[^1.5.0]

### Të shtuara

- **Një emër i zënë pyet, në vend që të refuzojë.** Zhvendosja ose riemërtimi drejt një emri që është aty tashmë hap një dialog me dy shtigje që mund t'i përpunosh: ku shkon skedari yt, dhe ku shkon skedari që është në rrugë, i kuq sa kohë që ai mbetet i zënë. Secili shteg vizatohet edhe ashtu siç e vizaton shiriti i shtegut njërin, me pjesët që ndryshojnë të sapo shkuara dhe të shkurtuara të fundit. Të dyja fushat kanë një listë; e dyta mban rrugët e zakonshme jashtë — ndërro vende (shkon te dosja e vjetër e skedarit tënd), ndërro emra (mbetet dhe merr emrin e vjetër të skedarit tënd), ndërro të dyja (merr shtegun e vjetër të skedarit tënd), `-1`, `-bak` dhe `-old` pranë emrit të vet, dhe dy emrat që skedarët kishin. Një rrugë jashtë me shteg të zënë është e gri. Zgjedhja e njërës vetëm e mbush fushën; Zbato zhvendos të dyja, me lidhjet, dhe Anulo nuk zhvendos asgjë. E njëjta gjë pyetet edhe kur zgjedh nga lista një emër të zënë, si dhe kur lëshon një skedar mbi një dosje që tashmë e mban atë emër.
- **`:graph` brenda një dosjeje hap grafikun e asaj dosjeje** — grafikun e filtruar te `path:"that/folder"`, ashtu si do ta bënte kutia e vet e kërkimit. Në rrënjën e kasafortës mbetet i gjithë grafiku, si më parë.
- **Një dosje që tashmë mban emrin bëhet e kuqe** në listë gjatë zhvendosjes, dhe kështu bëhet edhe një skedar me atë emër, kështu që përplasja shfaqet para se të zgjedhësh.

### Të ndryshuara

- **Oferta është gjithmonë ajo që do të shkruante Tab.** Aty ku emrat pushojnë së pajtuari, fusha ofron hapin drejt të parit prej tyre, dhe rreshti drejt të cilit do të shkonte Tab e vendos atë; të shkruarit mbi një emër ia lë prapashtesën në vend dhe ofrohet para saj; një dosje sapo hyrë ofron hapin e saj të parë. Më parë, kishte gjendje ku nuk ofrohej asgjë dhe Tab shkruante diçka sido që të ishte. Nënvija e listës ndjek ofertën ndërsa ndryshon, dhe Tab mbi një rresht te i cili ke shkuar me shigjeta merr atë rresht, jo atë pranë tij.
- **Ofertat shpërfillin shkronjat e mëdha/të vogla.** Të shkruarit `sch` ofron `Schemes`, të shkruar ashtu siç është vetë emri; marrja mbrapsht e ofertës i kthen shkronjat e tua ashtu siç i shkrove. Aty ku ekzistojnë të dy, `Test` dhe `test`, ofrohet ai që është shkruar saktësisht ashtu siç shkrove ti.
- **Pas shtypjes së Tab, hapi tjetër ofrohet menjëherë**, ashtu si pas një shkronje të shkruar.
- **Emrat që fillojnë me atë që shkrove vijnë të parët në listë**, të shënuar me një vijë përgjatë skajit të tyre — blu aty ku ndajnë më shumë se ç'ke shkruar, jeshile te dega drejt së cilës shkon oferta aty ku ndahen — para emrave që vetëm e përmbajnë atë. Secili prej tyre nënvijëzon hapin që <kbd>Tab</kbd> do të bënte drejt tij, jo vetëm atë që ofrohet.
- **Lista ndjek kursorin**, ose fillimin e një përzgjedhjeje: liston dosjen ku ndodhet ai pikë, e filtruar sipas shkronjave para tij. Në fillim të një emri, kjo është e gjithë dosja.
- **Kur tregon një rresht, ai shfaqet si oferta** — ajo që shkrove mbetet jotja dhe pjesa tjetër e emrit shënohet — dhe largimi i kursorit nga lista e sjell ofertën përsëri.
- **→ merr një shkronjë të vetme të ofertës** në vend të gjithës; <kbd>End</kbd> ende e merr të tërën.
- **Backspace para një prapashtese të mbetur vetëm ngjitet një dosje lart**, ashtu siç bën në një fushë bosh; prapashtesa e vetmuar zhduket.
- **F2 në një fushë të hapur e kthen atë në riemërtim aty ku ndodhet**, duke ruajtur tekstin, kursorin dhe përzgjedhjen, dhe **Fokuso shiritin e shtegut** ia heq riemërtimin po në të njëjtën mënyrë.
- **Çdo gjë tjetër e shtypur ose e klikuar mes shtypjeve nis nga fillimi ciklin e F2 dhe Fokuso shiritin e shtegut.**
- **Dosjet janë me shkronja të trasha në listë**, kështu që shënimi i vetë dosjes nuk ka më nevojë të jetë gri për t'u dalluar: është vjollcë si çdo shënim tjetër.
- **Lista nuk është më e gjerë se shiriti i shtegut.** Një emër që nuk përshtatet shkurtohet ashtu si shiriti i shtegut shkurton të vetin, dhe shfaqet i plotë kur i vë kursorin sipër.
- **PageUp dhe PageDown e rrëshqasin listën sipas asaj që ajo shfaq**, edhe nga fusha, dhe rreshti i përzgjedhur ruan vendin e vet në ekran. <kbd>Home</kbd> dhe <kbd>End</kbd> sjellin në shikim rreshtin e parë dhe të fundit.
- **Lista tregon deri në 1000 zëra** para se të numërojë pjesën tjetër, në vend të 100.
- **Dosjet japin vend, më e gjata para.** Kur mungon hapësira, emri më i gjatë i dosjes shkurtohet deri në gjatësinë e tjetrit më të gjatë, pastaj të dyja bashkë, e kështu me radhë, secila duke u ndalur në kufirin e vet. Më parë, çdo dosje shkurtohej njëherësh në përpjesëtim me gjatësinë e saj.
- **Emrat e shkurtuar rrëshqasin në vend që të kërcejnë.** Një emër që po jep vend pritet saktësisht te pikseli dhe zbehet nën `…`-in e vet, kështu që asgjë pas tij në rresht nuk lëviz me hapa ndërsa një panel ndryshon madhësi.

### Të ndrequra

- Në panelin e djathtë lista hapej nën panelin e majtë derisa shkruhej shkronja e parë.
- Largimi i kursorit nga lista e sillte ofertën përsëri, por jo ngjyrën e saj.
- Një hapësirë ku një emër i shkurtuar ishte ndarë — `development guidelines` — u hodh tej, duke i bashkuar dy fjalët së bashku.

## 1.4.0 — 2026-09-19[^1.4.0]

### Të shtuara

- **Një rresht Shkurtoret e tastierës te cilësimet.** Butoni i tij hap *Shkurtoret e tastierës* të Obsidian-it, të filtruara për këtë shtojcë, ku *Fokuso shiritin e shtegut* — që vjen pa tast — mund të marrë një.
- **Një shirit shtegu te panelet që nuk mbajnë skedar.** Një skedë e zbrazët lexohet `vault / :blank`, grafiku `vault / :graph`, dhe çdo pamje tjetër pa ndonjë emër për t'i dhënë merr etiketën e vet `:` — skeda e vetë e një shtojce të skedës kryesore lexohet `:home-launcher`. Fusha pranë tij është një shirit adrese: shkruaj një shteg dhe <kbd>Enter</kbd> e hap në atë panel, ose e krijon. Përpara kësaj rreshti ishte bosh — shtojca fshihte titullin e vetë të Obsidian-it dhe nuk vendoste asgjë në vend të tij.
- **Një faqe mund të shkruhet edhe jo vetëm të zgjidhet** — `:graph` dhe të tjerat janë adresë, jo vetëm zë liste. Dy pika nuk e fillojnë asnjë emër skedari, prandaj shkrimi i një dy pikash kudo i thërret ato, dhe fusha vishet me ngjyrën e tyre në vend që të ofrojë krijimin e një shënimi që s'mund të quhej asgjë.
- **Një rresht për *Shfaq të gjitha llojet e skedarëve* të vetë Obsidian-it**, pranë rregullit të skedarëve me pikë, pasi të dy vendosin se çfarë mund të listojë një listë rënëse: thotë ta kërkosh atë cilësim te cilësimet e vetë Obsidian-it dhe ta ndezësh për të parë çdo skedar, dhe butoni pranë tij e hap atë faqe me cilësimin të lëvizur në pamje dhe të ndriçuar shkurt, si një rezultat kërkimi te cilësimet. Emërtuar me fjalët e Obsidian-it, shpjeguar në 45 gjuhë.
- **Rrënja e kasafortës liston faqet që mund të mbajë një panel** — `:graph`, `:search`, dhe cilëndo pamje që regjistrojnë shtojcat e tua, mes tyre një skedë kryesore ose një kalendar. Zgjidh një dhe paneli e hap, ashtu si zgjedhja e një shënimi e hap shënimin. Pamjet që ekzistojnë për të shfaqur një skedar lihen jashtë, sepse nuk do të kishin çfarë të shfaqnin.
- **Ndarësi i vetë kasafortës hap faqen tënde të nisjes**, aty ku një shtojcë e ofron një të tillë, dhe nënvizohet për ta thënë; shtypja pas tij e palos pemën e skedarëve, dhe shtypja pas asaj vë prapa saktësisht atë që ishte hapur. Pa një shtojcë të tillë, shtypja e parë palos, si më parë.
- **Shkruaj një shteg nga rrënja e sistemit të skedarëve.** Një `/` para një fushe të zbrazët hap një shteg të tillë në vend që të gëlltitet, çdo vijë e pjerrët e mëvonshme në të i përket asaj, dhe lista rënëse liston makinën në vend të kasafortës.

### Të ndryshuara

- **F2 dhe Fokuso shiritin e shtegut shtypin Tab brenda fushës.** Çfarëdo që do të bënte Tab atje — shkallën tjetër, plotësimin e asaj që shkruajte, hyrjen në një dosje — e bëjnë edhe ato; largohen vetëm aty ku Tab kthehet në fillim të shtegut, F2 te titulli brenda tekstit, komanda te shënimi. Më parë, një fushë ku kishe shkruar bënte që F2 të niste sërish nga emri dhe komanda ta mbyllte fushën.
- **Hapi pas daljes së ciklit është dosja rrënjë.** Shtypja pas kthimit të F2 te titulli brenda tekstit, ose kthimit të komandës te shënimi, zbret aty ku zbret rrotullimi i Tab — rrënja e kasafortës, i gjithë shtegu në fushë, dosja e tij e parë e shënuar — kështu asnjë hap i unazës nuk mbetet vetëm për Tab.
- **Fokuso shiritin e shtegut ecën si F2.** Hapet te emri në vend të shtegut të plotë, merr të katër shkallët e njëjta, dhe shtypja pas të fundit e mbyll fushën dhe e kthen kursorin te shënimi — më parë, i rrotullonte shkallët pafundësisht dhe i vetmi tast që arrinte te rreshti nuk mund ta linte atë.
- **Një emër i zënë raportohet kur e përdor, jo ndërsa e shkruan.** Çdo emër i shkruar drejt `Notes.md` kalon nëpër emra që mund të jenë skedarë më vete, dhe paralajmërimi dikur pulsonte e zhdukej shkronjë pas shkronje. Ajo që është e gabuar në drejtshkrimin e një emri thuhet prapë ndërsa shkruhet.
- **Një ndarës, dosja e shënimit të të cilit është hapur tashmë, e shfaq dosjen** në vend që të rihapë atë që është në ekran — çka ka nënkuptuar gjithmonë shtypja e tij e dytë.
- **Ku je tani është me të trasha në një listë rënëse**, jo vetëm blu.
- **Gjithçka që nuk është shënim është portokalli në një listë rënëse**, jo vetëm llojet e tekstit për të cilat Obsidian-i nuk ka pamje. E purpurta veçon shënimet në një dosje me përmbajtje të përzier; një ngjyrë për pjesën tjetër thotë të njëjtën gjë më shpejt.

### Të ndrequra

- **Backspace mbi një dosje të klikuar nuk ia heq më emrin kasafortës.** Vija e pjerrët e lënë në fillim lexohej si shteg nga rrënja e makinës, çka e zbraz segmentin e hapjes — dhe mbyllja e fushës me Escape nuk e kthente kurrë, kështu skeda e humbi emrin dhe ikonën e kasafortës përgjithmonë. Një vijë e pjerrët në fillim tani llogaritet si e makinës vetëm kur dosja e saj e parë ekziston vërtet, dhe segmenti i hapjes kthehet me çdo mënyrë daljeje nga fusha.
- Jashtë kasafortës, skedarët fshiheshin nëse nuk ishte ndezur **Zbulo të gjitha prapashtesat e skedarëve** i Obsidian-it — një cilësim për atë që indekson kasaforta, i zbatuar mbi dosje që nuk janë në kasafortë. Një `.txt` pranë shënimeve të tua listohet atje jashtë në të dyja rastet.
- Lista rënëse e emrit të kasafortës nuk bënte asgjë në një panel pa skedar, që është pikërisht paneli që do të përdorje për të shkuar diku tjetër.
- Klikimi i emrit të kasafortës linte titullin e vetë të Obsidian-it pranë shtegut në fushë, gri, aty ku shfaqet në asnjë kohë tjetër: rreshti e mat veten nga ajo që ka vizatuar, dhe në atë çast ai ka zbrazur veten për t'i lënë vend fushës.

- Klikimi i hapësirës boshe e hapte fushën dhe pastaj e humbiste: shfaqja e shënimit në Eksploruesin e skedarëve merr kursorin me vete, kështu fusha qëndronte e hapur dhe e shënuar ndërsa çdo goditje tasti shkonte te pema.
- Shkalla që tregon shtegun nga rrënja e sistemit vizatonte një gjurmë të të njëjtit shteg pranë fushës, e pa përshtatur, kështu një shteg i thellë pikturohej mbi vetveten.

## 1.3.0 — 2026-09-17[^1.3.0]

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

[^1.5.0]: Ndryshimet që nga 1.4.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.4.0...1.5.0>
[^1.4.0]: Ndryshimet që nga 1.3.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.3.0...1.4.0>
[^1.3.0]: Ndryshimet që nga 1.2.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.2.0...1.3.0>
[^1.2.0]: Ndryshimet që nga 1.1.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.2...1.2.0>
[^1.1.2]: Ndryshimet që nga 1.1.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.1...1.1.2>
[^1.1.1]: Ndryshimet që nga 1.1.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.0...1.1.1>
[^1.1.0]: Ndryshimet që nga 1.0.4: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.4...1.1.0>
[^1.0.4]: Ndryshimet që nga 1.0.3: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.3...1.0.4>
[^1.0.3]: Ndryshimet që nga 1.0.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.2...1.0.3>
[^1.0.2]: Ndryshimet që nga 1.0.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.1...1.0.2>
[^1.0.1]: Ndryshimet që nga 1.0.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.0...1.0.1>
[^1.0.0]: Publikimi i parë: <https://github.com/Gelaende51/obsidian-lure/releases/tag/1.0.0>
