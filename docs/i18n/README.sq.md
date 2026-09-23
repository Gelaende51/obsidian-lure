<!-- Përkthim i README.md — gjendja: commit 99fc83e.
     Përkthim me makinë (Claude Opus 5), i pashqyrtuar nga folës amtarë.
     Ndreqjet janë të mirëpritura; versioni përcaktues është README-ja
     në anglisht. -->

[English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · **Shqip** · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

Një shtojcë për [Obsidian](https://obsidian.md) që e shndërron emrin e skedarit në shiritin e kokës së një shënimi në një shteg të plotë të kasafortës, të klikueshëm dhe të redaktueshëm — si shiriti i adresës në menaxherin e skedarëve [Dolphin](https://apps.kde.org/dolphin/).

![Klikimi i ndarësit pas një dosjeje: treguesi qëndron mbi të dhe Eksploruesi i dokumenteve e ka zbuluar dhe zgjeruar atë dosje](../images/breadcrumb.png)

Obsidian 1.8.7+ · vetëm për desktop · AGPL-3.0

## Deklarim për IA-në

- **Agjenti** — **Claude Opus 5 / 5.5** dhe **Claude Sonnet 5** (Anthropic, përmes Claude Code): shkroi TypeScript-in, CSS-në, të 45 grupet e përkthimeve dhe dokumentacionin. Përkthimet janë të krijuara nga makina dhe të pashqyrtuara nga folës amtarë.
- **Konsumi** — 3 gusht – 23 shtator 2026, 25 sesione, \~17.973 përgjigje: \~21,1 mln token të gjeneruar, \~91,2 mln të dërguar, \~5817,0 mln rilexime nga kesh-i (\~5929,3 mln gjithsej).
- **Burimi** — modeli mësoi nga kodi me burim të hapur, dokumentacioni dhe shkrimet e komunitetit të botuara nga të tjerë. Pjesa më e madhe e meritës u takon atyre.
- **Autori** — Vault51: përcaktoi çdo veçori, provoi çdo përsëritje në një kasafortë të gjallë, drejtoi ndreqjet, shqyrtoi çdo rezultat.

## Veçoritë

- **Kliko një dosje** për një listë me përmbajtjen e dosjes së saj *prind* — ndërro një dosje me një motër të sajën dhe lëre pjesën tjetër të shtegut të paprekur. Emri i shënimit punon njësoj, duke e përzgjedhur emrin pa prapashtesën e tij.
- **Kliko ndarësin** pas një dosjeje për ta zbuluar dhe zgjeruar atë te Eksploruesi i dokumenteve. Një cilësim i vetëm i ndërron rolet mes tyre.
- **Kliko me të djathtën ose tërhiq çfarëdo zëri** — menyja e vetë Eksploruesit të dokumenteve, zë për zë, dhe sjellja e tij gjatë zvarritjes. Shtigjeve jashtë kasafortës u ndërtohet një meny e barasvlershme, deri te *Fshij* përmes koshit të sistemit.
- **Kliko emrin e skedarit ose hapësirën bosh** për të shkruar një shteg, me vetëplotësim. `/` zbret, <kbd>Backspace</kbd> del një hap jashtë, <kbd>Enter</kbd> e kryen — dhe një shteg që nuk ekziston ende thjesht krijohet, me një njoftim që thotë ku shkoi.
- **Lista hapet te zëri ku ndodhesh**, dhe kalimi nëpër të me shigjeta ose me treguesin e mbush fushën me atë që po tregon. Një rresht që tregon shfaqet si oferta që do të bënte; dalja nga cilido skaj i listës ta kthen atë që kishe shkruar, dhe largimi i treguesit ia dorëzon theksimin vendit ku ishe. Lista ndjek kursorin: dosjen ku ndodhet, të filtruar sipas shkronjave para tij.
- **Butoni me laps mbi dosje** i kalon të njëjtat ndërveprime në zhvendosje/riemërtim, të vlerësuara ashtu siç i vlerëson Obsidian. Një emër i zënë tashmë është i kuq në listë, dhe zgjedhja e tij hap të dy shtigjet krah për krah për t'i përpunuar, me ndërrimin e vendeve, emrave ose të dyjave një zgjedhje larg.
- **Mbaj shtypur <kbd>Ctrl</kbd>** për ta hapur në një skedë të re — ose, në modalitetin zhvendos/riemërto, për ta kopjuar shënimin atje. Emri i shënimit dhe segmentet e dosjeve pranojnë të njëjtët modifikues, dhe zvarritjen, si rreshtat e tyre në Eksploruesin e dokumenteve.
- **Emrat plotësohen ndërsa shkruan** — pas kursorit shfaqet, e përzgjedhur dhe e shkruar ashtu siç është vetë emri, cilëndo shkronjë të madhe a të vogël të kesh shkruar, ajo që do të shkruante <kbd>Tab</kbd> — pajtimi i emrave të dosjes, ose hapi drejt të parit prej tyre; shkrimi e gëlltit shkronjë pas shkronje, <kbd>→</kbd> merr një shkronjë, <kbd>Tab</kbd> ose <kbd>End</kbd> e merr të tërën, <kbd>Backspace</kbd> e kthen prapa. Lista vazhdon të filtrojë sipas asaj që shkrove, jo sipas asaj që t'u ofrua.
- **<kbd>Tab</kbd> plotëson si një guaskë**: e zgjaton atë që shkrove aq sa pajtohen emrat në atë dosje, ecën drejt njërit prej tyre një hap në kohë kur ata nuk pajtohen, dhe hyn në një dosje vetëm kur mbetet një emër i vetëm. Përtej fundit të shtegut e zgjeron përzgjedhjen: emri, emri me prapashtesë, shtegu nga kasaforta, shtegu nga rrënja e sistemit. <kbd>Shift</kbd>+<kbd>Tab</kbd> e bën të njëjtën rrugë mbrapsht — duke shënuar atë që kthen në vend që ta fshijë — dhe përtej fillimit të saj vazhdon të ngjitet nëpër shteg, pastaj kthehet rrotull te shtegu i sistemit. Sido që t'ia nisësh, një xhiro e plotë të sjell prapë te shtegu që ndërtove.
- **Klik i djathtë për kopjim** — dy herë për emrin, tri herë për gjithçka në të djathtë të tij, dhe mbi hapësirën bosh për të gjithë shtegun ose për shtegun e sistemit.
- **Zvarrit një shënim mbi një dosje të rreshtit** për ta zhvendosur atje, bashkë me lidhjet — destinacioni është tashmë në ekran, ndaj mjafton një zvarritje e vetme në vend të një udhëtimi nëpër pemën e skedarëve. Edhe emri i kasafortës punon, për rrënjën. Një përzgjedhje e tërë zhvendoset si një e vetme, dhe një dosje që nuk mund ta pranojë atë që i ofrohet nuk shfaq asgjë, në vend që të dështojë pasi puna të jetë bërë.
- **Lësho tekst mbi rresht që të shkruhet** — mbi një dosje ose mbi emrin e kasafortës për t'i vënë emrin një shënimi të ri atje, mbi vetë emrin e shënimit për t'ia shtuar në fund të asaj që po lexon. Një skedar nga desktopi yt punon njësoj, dhe rreshti rrethohet me blu aty ku do të binte.
- **Fusha vishet me ngjyrën e asaj që emërton** — po ajo ngjyrë që ka rreshti i saj në listë, gri për shënimin e një dosjeje — dhe **skuqet** sapo asgjë nuk i përgjigjet, kështu që para se të shtypësh <kbd>Enter</kbd> e sheh nëse do të hapë një shënim apo do të krijojë një të ri.
- **Skedarët HTML shfaqen si faqe**, brenda një kornize së cilës i është mohuar çdo leje — pa skripte, pa rrjet, pa origjinë të vetën — me fletët e stilit dhe figurat pranë skedarit të sjella brenda, që një faqe e ruajtur të duket ende vetvetja. Burimi është vetëm një shtypje larg.
- **Shkruaj një URL** — `https://`, `obsidian://`, ose një shteg `file://` a të koduar me përqindje — dhe ai hapet, në vend që të merret si emër shënimi. Adresat e internetit shkojnë te një skedë e Shikues uebi-t të vetë Obsidian-it, aty ku e ke të ndezur.
- **Shtigjet e gjata shkurtohen aty ku shkronjat janë të tepërta** — kurrë përtej asaj që e dallon një dosje nga ajo pranë saj, butësisht dhe jo shkronjë pas shkronje — dhe rrëshqasin vetëm kur nuk ka më asgjë për të ngjeshur. Trego me kursor një emër të shkurtuar për ta parë sërish të plotë.
- **<kbd>F2</kbd>** alternon mes titullit brenda tekstit dhe shiritit të shtegut, duke u hapur te emri pa prapashtesën e tij dhe duke dalë te shtigjet e plota me shtypjet e mëtejshme. Kalon pastër përmes dialogut të riemërtimit të Obsidian-it kur titulli ka dalë jashtë pamjes. Një komandë *Fokuso shiritin e shtegut* ecën nëpër të njëjtat shkallë pa riemërtuar; rreshti *Shkurtoret e tastierës* i cilësimeve të çon ta lidhësh me një tast.
- **Kliko emrin e kasafortës** për të shfletuar kasafortat e tua të tjera, dosjen e shtëpisë, rrënjën e sistemit të skedarëve dhe disqet e montuara pa ndërruar kasafortë. Vetëm për lexim derisa të hapësh dryjen e kuqe që atje jashtë zë vendin e çelësit të riemërtimit, dhe e kornizuar me ngjyrën e gabimit gjatë gjithë kohës. E fikur si parazgjedhje — shih [jashtë kasafortës](#jashtë-kasafortës).
- **Rrënja e kasafortës liston faqet që mund të mbajë një panel** — `:graph`, `:search`, dhe cilëndo pamje që regjistrojnë shtojcat e tua. Zgjidh një, ose shkruaje: dy pika nuk e fillojnë asnjë emër skedari, kështu etiketat shërbejnë edhe si adresë. `:graph` i shkruar brenda një dosjeje hap grafikun e asaj dosjeje. Me një shtojcë të faqes së nisjes të instaluar, ndarësi i vetë kasafortës e hap atë faqe me klikimin e parë dhe e palos pemën e skedarëve me tjetrin.
- **Një rresht te panelet që nuk mbajnë skedar** — një skedë e zbrazët lexohet `vault / :blank`, grafiku `vault / :graph`, dhe fusha pranë tij është një shirit adrese: shkruaj një shteg dhe <kbd>Enter</kbd> e hap në atë panel, ose e krijon. Panelet anësore e mbajnë titullin e vetë të Obsidian-it.
- **Dy shkallë paralajmërimi** — e kuqe jashtë kasafortës, portokalli për skedarët tekst për të cilët Obsidian nuk ka redaktues. Shih [ngjyrat e paralajmërimit](usage.sq.md#dy-ngjyrat-e-paralajmërimit).
- **Ikona që ndjekin temën**, të zëvendësueshme nga një copëz CSS — dhe **46 gjuhë**: çdo gjuhë që vjen me Obsidian, plus greqishtja dhe sanskritishtja, për të cilat ai nuk ka cilësim. Zgjidh një vetëm për shtojcën, ose ndiq atë të vetë Obsidian-it.
- **Cilësimet:** gjuha, rreshtimi, paracaktimet e ndarësit, se cili klikim e hap listën, emri i kasafortës, skedarët me pikë, prapashtesat e skedarëve.

![E njëjta listë në modalitetin zhvendos/riemërto: emri aktual i skedarit i ngulitur në krye, dosjet motra nën të dhe shënimet ekzistuese të zbehura](../images/dropdown.png)

*Në modalitetin zhvendos/riemërto e njëjta listë ndryshon atë që ofron: emri aktual i shënimit i ngulitur në krye, për ta zhvendosur pa e riemërtuar, dosjet ku mund ta zhvendosësh, dhe emrat tashmë të zënë të kuq; zgjedhja e njërit prej tyre pyet çfarë të bëhet me skedarin që është në rrugë.*

→ [Udhëzuesi i plotë i përdorimit](usage.sq.md)

## Jashtë kasafortës

Politikat e zhvilluesve të Obsidian-it kërkojnë që shtojcat të shpjegojnë çdo qasje te skedarët jashtë kasafortës, prandaj, hapur:

**A bën fare ndonjë prej këtyre.** Vetëm nëse ndez **Qasje te skedarët e jashtëm**, që është **i fikur si parazgjedhje**. Me të fikur nuk ka asnjë mënyrë për të arritur një shteg të jashtëm nga shtojca, dhe asnjë prej kodeve të përshkruara më poshtë nuk ekzekutohet kurrë.

**Çfarë lexon.** Vetëm kur ia kërkon ti. Klikimi i emrit të kasafortës rendit kasafortat e tua të tjera — të lexuara nga vetë `obsidian.json` i Obsidian-it — plus dosjen tënde të shtëpisë, rrënjën e sistemit të skedarëve dhe disqet e montuara (`/proc/mounts` në Linux, `/Volumes` në macOS, shkronjat e disqeve në Windows). Shfletimi prej andej rendit përmbajtjen e drejtorive, dhe hapja e një skedari lexon vetëm atë skedar.

**Çfarë shkruan.** Asgjë, derisa të shtypësh një buton që e thotë këtë. Butona të tillë janë dy, secili duke mbuluar vetëm sipërfaqen e vet:

- Butoni **Redakto si tekst** i parësit e shkyç skedarin që ke përpara, për atë skedar të vetëm në atë skedë të vetme. Redaktimet e tua pastaj ruhen në të ndërsa shkruan.
- **Dryja e kuqe** e kokës, që zë vendin e çelësit të riemërtimit ndërsa shiriti i shtegut tregon jashtë kasafortës sate, shkyç krijimin, riemërtimin, zhvendosjen dhe fshirjen në shtigje të jashtme — dhe ia dorëzon vendin çelësit sapo hapet. Kyçet sërish kur kthehesh brenda, si dhe me shtypjen që del nga modaliteti i riemërtimit, kështu që leja nuk i mbijeton kurrë dosjes për të cilën e dhe.

Asnjëri prej këtyre shkyçjeve nuk ruhet në hapësirën e punës a te cilësimet, kështu që shkrimi nuk është kurrë i armatosur mbi një skedar që nuk e mban mend se e ke hapur. Asgjë nuk mbishkruhet ndonjëherë në asnjërën gjendje — një objektiv ekzistues refuzohet, duke përdorur krijimin ekskluziv të vetë sistemit të skedarëve dhe jo një kontroll që mund ta humbte garën.

Zhvendosja e një shënimi *jashtë* kasafortës sate është i vetmi shkrim që kushton diçka që asgjë nuk ta kthen: Obsidian i përditëson lidhjet vetëm brenda kasafortës, kështu që çdo lidhje që tregon te ai shënim prishet. Ajo ofrohet pas një dialogu që e thotë këtë dhe që numëron shënimet e prekura, dhe kryhet si kopjim-pastaj-fshirje përmes koshit të vetë Obsidian-it, prandaj është po aq e rikuperueshme sa fshirja e një shënimi. Mbajtja e <kbd>Ctrl</kbd> e kopjon jashtë në vend që ta zhvendosë.

**Përse.** Shënimet që të duhen janë shpesh në një kasafortë tjetër, në një dosje sinkronizimi ose në një USB, dhe përgjigjja e vetë Obsidian-it — ndërro kasafortë — e mbyll gjithçka që kishe hapur. Kjo të lejon të shkosh e të shohësh pa u larguar, dhe të ndreqësh një gabim shtypi sa je atje.

**Kufizimi.** Redaktuesi i Obsidian-it është i lidhur me skedarët brenda kasafortës, kështu që një skedar i jashtëm **nuk mund** të hapet si shënim i vërtetë me lidhje, prapalidhje e gjithë të tjerat; asnjë shtojcë nuk mund ta bëjë këtë. Lure e shfaq atë në parësin e vet (Markdown, figura, audio, video, PDF), me *Hape jashtë programit* për gjithçka tjetër. Shiriti i shtegut mbetet i kornizuar me ngjyrën e gabimit kurdo që tregon jashtë kasafortës sate, dhe gjurma nis nga vendi që zgjodhe — emri i një kasaforte, dosja jote e shtëpisë, një disk — dhe jo nga struktura e drejtorive të makinës.

## Instalimi

**Në Obsidian:** hap **Konfigurime → Shtojca të treta → Kërko**, kërko *Lure*, pastaj shtyp *Instalo* dhe *Aktivizo* — ose shtyp *Add to Obsidian* te [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure).

**Me dorë:** shkarko `main.js`, `manifest.json` dhe `styles.css` nga [publikimi i fundit](https://github.com/Gelaende51/obsidian-lure/releases) te `<vault>/.obsidian/plugins/lure/`, pastaj aktivizoje te **Konfigurime → Shtojca të treta**.

**BRAT:** shtoje `Gelaende51/obsidian-lure` si shtojcë beta.

**Nga burimi:** `npm install && npm run build` — shih [zhvillimin](../development.md).

## Pajtueshmëria

Nuk kërkohet asnjë shtojcë. **Eksploruesi i dokumenteve** bazë, nëse është i aktivizuar, është ai që i zbulon dosjet në anështyllë; pa të, ato klikime nuk bëjnë asgjë.

E provuar me shtojcat e komunitetit që ndajnë kokën e shënimit ose që i përgjigjen klikimit mbi dosje — në të dyja radhët e ngarkimit, secila e ndezur dhe e fikur:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — ndarësi hap shënimin e një dosjeje në vend që ta zbulojë dosjen, duke e kthyer çdo segment të shtegut në një vend ku mund të shkosh, sado thellë: shënimi gjendet sipas konventës së vetë asaj shtojce, në vend që t'i lihet asaj të përgjigjet. Ajo është gjithashtu e vetmja që publikon një konventë të tillë; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) dhe [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) nuk publikojnë asnjë dhe nuk e kërkojnë kurrë shtegun te koka, kështu që me to ndarësi e zbulon dosjen si zakonisht.
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer) dhe [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — të dyja vizatojnë brenda të njëjtit element koke; Lure e ruan rreshtin cilado qoftë që ngarkohet e para, dhe fikja e njërës e lë tjetrën të paprekur.
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header), [Running Head](obsidian://show-plugin?id=running-head), [Crumbs](obsidian://show-plugin?id=crumbs-obsidian), [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — kanë shiritin e tyre dhe bashkëjetojnë.

Vetëm për desktop — modeli i ndërveprimit ka nevojë për kalim me kursor, klikime të sakta dhe një tastierë. Rezultatet e plota, pritshmëritë e mbetura dhe krahasimi me Quick Explorer e Breadcrumbs janë te [pajtueshmëria](../compatibility.md).

## Si të kontribuosh

- Problemet dhe kërkesat për shkrirje janë të mirëpritura — veçanërisht **ndreqjet e përkthimeve**, meqë të 45 lokalizimet janë të përkthyera me makinë dhe të pashqyrtuara nga folës amtarë. Shih [zhvillimin](../development.md) për konfigurimin dhe rregullat bazë.
- **Gjurmuesi i problemeve:** https://github.com/Gelaende51/obsidian-lure/issues
- **Dhurimet:** [Ko-fi](https://ko-fi.com/vault51). Shtojca është e lirë dhe e licencuar me AGPL sido që të jetë; bakshishet vlerësohen, por nuk kërkohen kurrë. Përdorimi i synuar është kompensimi i karbonit — një synim, jo një zotim: asgjë nuk kompensohet derisa shuma të jetë aq e madhe sa t'ia vlejë mundimi, dhe kjo rreshtë do ta thotë sapo diçka të jetë kompensuar vërtet.

## Falënderime

- **Vault51** — autori: dizajni, kërkesat dhe provat me dorë gjatë gjithë kohës.
- **Claude Opus 5 / 5.5** dhe **Claude Sonnet 5** (Anthropic, përmes Claude Code) — zbatimi, përkthimet dhe dokumentet, nën drejtimin e autorit. Shih [deklarimin për IA-në](#deklarim-për-ia-në).
- **[Obsidian](https://obsidian.md)** — aplikacioni që kjo shtojcë zgjeron, dhe burimi i çdo komponenti që shtojca përdor: API-ja e tij i shtojcave, grupi i ikonave Lucide pas `setIcon`, instanca e paketuar e i18next prej së cilës lexohen etiketat e menysë së klikimit të djathtë, si dhe klasat e variablat e tij CSS. Asgjë e palës së tretë nuk është e paketuar; shtojca **nuk ka asnjë varësi në kohë ekzekutimi**.

> **Ekipi i Obsidian-it nuk ka marrë pjesë në asnjë mënyrë në këtë projekt** — nuk e shkroi, nuk e shqyrtoi, nuk e miratoi dhe nuk e mbështeti. Obsidian është markë tregtare e Dynalist Inc.; kjo është një shtojcë e pavarur, e palidhur me të.

Kontribuuesit do të listohen këtu sapo të vijnë kontributet.

## Lidhje


- **Dokumentacioni:** [docs/](../)
- **Regjistri i ndryshimeve:** [CHANGELOG.md](CHANGELOG.sq.md)
- **Faqja e shtojcës:** https://community.obsidian.md/plugins/lure
- **Prania në internet / burimi:** https://github.com/Gelaende51/obsidian-lure
- **Dhurimet:** [Ko-fi](https://ko-fi.com/vault51) — shih [si të kontribuosh](#si-të-kontribuosh).
- **Licenca:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. Degëzimet dhe ndërtimet e rishpërndara duhet ta shpërndajnë burimin e tyre nën të njëjtën licencë.
