<!-- Përkthim i README.md — gjendja: commit 33b0e60.
     Përkthim me makinë (Claude Opus 5), i pashqyrtuar nga folës amtarë.
     Ndreqjet janë të mirëpritura; versioni përcaktues është README-ja
     në anglisht. -->

[English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · **Shqip** · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

Një shtojcë e [Obsidian](https://obsidian.md) që e kthen emrin e skedarit në shiritin e kokës së një shënimi në një shteg të plotë nëpër kasafortë, që mund të klikohet dhe të redaktohet — si shiriti i adresës në menaxherin e skedarëve [Dolphin](https://apps.kde.org/dolphin/).

![Klikim mbi ndarësin pas një dosjeje: treguesi qëndron mbi të dhe Eksploruesi i dokumenteve e ka shfaqur dhe zgjeruar atë dosje](../images/breadcrumb.png)

Obsidian 1.8.7+ · vetëm në kompjuter · AGPL-3.0

## Deklarim për IA-në

- **Agjenti** — **Claude Opus 5** dhe **Claude Sonnet 5** (Anthropic, përmes Claude Code): shkroi TypeScript-in, CSS-në, të 45 grupet e përkthimeve dhe dokumentimin. Përkthimet janë prodhuar me makinë dhe nuk janë shqyrtuar nga folës amtarë.
- **Autori** — Vault51: përcaktoi çdo veçori, provoi çdo version në një kasafortë të vërtetë, drejtoi ndreqjet, shqyrtoi të gjitha rezultatet.
- **Konsumi** — 3–13 gusht 2026, nëntë seanca, \~4.928 përgjigje: \~7,2 milionë token të prodhuar, \~23,7 milionë të dërguar, \~1169,6 milionë rilexime nga fshehtina (\~1200,5 milionë gjithsej).
- **Burimi** — modeli mësoi nga kodi me burim të hapur, dokumentimi dhe shkrimet e komunitetit të botuara nga të tjerë.

## Veçoritë

- **Kliko një dosje** për të parë përmbajtjen e dosjes *prind* — këmbe një dosje me një fqinje pa e prekur pjesën tjetër të shtegut. Emri i shënimit funksionon njësoj, bashkë me prapashtesën.
- **Kliko ndarësin** pas një dosjeje që ajo të shfaqet dhe të zgjerohet te Eksploruesi i dokumenteve. Një cilësim i vetëm i ndërron rolet e të dyve.
- **Kliko me të djathtën ose tërhiq çfarëdo zëri** — menuja e kontekstit dhe sjellja e tërheqjes të vetë Eksploruesit të dokumenteve.
- **Kliko emrin e skedarit ose hapësirën bosh** për të shkruar një shteg, me plotësim. `/` zbret brenda, <kbd>Backspace</kbd> ngjitet një nivel, <kbd>Enter</kbd> konfirmon.
- **Butoni me laps mbi dosje** i kalon po ato veprime në mënyrën zhvendos/riemërto, me po ato kontrolle që bën vetë Obsidian.
- **Mbaj shtypur <kbd>Ctrl</kbd>** për ta hapur në një skedë të re — ose, në mënyrën zhvendos/riemërto, për ta kopjuar shënimin atje në vend që ta zhvendosësh.
- **<kbd>F2</kbd>** kalon mes titullit brenda shënimit dhe shiritit të shtegut.
- **Kliko emrin e kasafortës** për të shfletuar kasafortat e tua të tjera, dosjen shtëpi, rrënjën e sistemit të skedarëve dhe disqet e montuara pa ndërruar kasafortë. Vetëm për lexim derisa të hapësh një dry, dhe i kornizuar me ngjyrën e gabimit gjatë gjithë kohës. I fikur si parazgjedhje — shih [jashtë kasafortës](#jashtë-kasafortës).
- **Dy shkallë paralajmërimi** — e kuqe jashtë kasafortës, portokalli për skedarët tekst për të cilët Obsidian nuk ka redaktues. Shih [dy ngjyrat e paralajmërimit](usage.sq.md#dy-ngjyrat-e-paralajmërimit).
- **Ikona që ndjekin temën**, të këmbyeshme nga një copëz CSS — dhe **45 gjuhë**, çdo gjuhë që sjell Obsidian.
- **Cilësimet:** drejtimi, ndarës të gatshëm, cili klikim hap listën, emri i kasafortës, skedarët e fshehur.

![E njëjta listë në mënyrën zhvendos/riemërto: emri i tanishëm i skedarit i ngjitur në krye, dosjet fqinje poshtë tij, dhe shënimet ekzistuese të zbehta](../images/dropdown.png)

*Në mënyrën zhvendos/riemërto e njëjta listë ofron diçka tjetër: emri i tanishëm i shënimit i ngjitur në krye, që ai të zhvendoset pa u riemërtuar; poshtë tij dosjet ku mund të çohet; dhe emrat tashmë të zënë të zbehtë, që asgjë të mos mbishkruhet pa dashje.*

→ [Udhëzuesi i plotë i përdorimit](usage.sq.md)

## Jashtë kasafortës

Politikat e Obsidian për zhvilluesit kërkojnë që një shtojcë të shpjegojë çdo qasje te skedarët jashtë kasafortës, prandaj pa dredha:

**A bën fare ndonjë prej këtyre.** Vetëm nëse ndez **Qasje te skedarët e jashtëm**, që është **i fikur si parazgjedhje**. Me cilësimin të fikur nuk ka asnjë rrugë nga shtojca drejt një shtegu të jashtëm, dhe asgjë nga kodi i përshkruar më poshtë nuk ekzekutohet ndonjëherë.

**Çfarë lexon.** Vetëm kur ia kërkon. Klikimi mbi emrin e kasafortës rendit kasafortat e tua të tjera — të lexuara nga vetë `obsidian.json` i Obsidian — plus dosjen shtëpi, rrënjën e sistemit të skedarëve dhe disqet e montuara (`/proc/mounts` në Linux, `/Volumes` në macOS, shkronjat e disqeve në Windows). Shfletimi më tej prej andej rendit përmbajtjen e direktorive, dhe hapja e një skedari lexon vetëm atë skedar.

**Çfarë shkruan.** Asgjë, derisa të shtypësh një buton që e thotë këtë. Butona të tillë ka dy, dhe secili mbulon vetëm fushën e vet:

- Butoni **Redakto si tekst** i shikuesit shkyç skedarin që ke përpara, vetëm atë skedar në vetëm atë skedë. Që andej e tutje ndryshimet e tua ruhen në të ndërsa shkruan.
- **Dryja** në shiritin e kokës, e dukshme vetëm sa kohë që shiriti i shtegut tregon jashtë kasafortës sate, shkyç krijimin, riemërtimin dhe zhvendosjen në shtigje të jashtme. Ajo kyçet sërish sapo kthehesh brenda, kështu që leja nuk jeton kurrë më gjatë se dosja për të cilën e dhe.

Asnjëra prej shkyçjeve nuk ruhet as në hapësirën e punës, as në cilësime, prandaj shkrimi nuk mbetet kurrë i armatosur mbi një skedar që s'e mban mend ta kesh hapur. Në asnjërën gjendje nuk mbishkruhet asgjë — një cak që tashmë ekziston refuzohet, duke përdorur krijimin ekskluziv të vetë sistemit të skedarëve në vend të një kontrolli që mund ta humbte garën — dhe një shënim nuk mund të *zhvendoset* kurrë jashtë kasafortës sate, sepse lidhjet drejt tij do të këputeshin në heshtje; mbajtja e <kbd>Ctrl</kbd> e kopjon atje në vend të kësaj.

**Përse.** Shënimet që kërkon shpesh janë në një kasafortë tjetër, në një dosje sinkronizimi ose në një USB, ndërsa përgjigjja e vetë Obsidian — ndërro kasafortë — mbyll gjithçka që kishe hapur. Kjo të lë të shkosh e të shohësh pa u larguar, dhe të ndreqësh një gabim shtypi meqë je aty.

**Kufizimi.** Redaktuesi i Obsidian është i lidhur me skedarët brenda kasafortës, prandaj një skedar i jashtëm **nuk mund** të hapet si shënim i vërtetë, me lidhje, prapalidhje e gjithë të tjerat; këtë s'e bën dot asnjë shtojcë. Lure e shfaq atë në shikuesin e vet (Markdown, figura, audio, video, PDF), me *Hap jashtë* për gjithçka tjetër. Shiriti i shtegut mbetet i kornizuar me ngjyrën e gabimit sa herë që tregon jashtë kasafortës sate, dhe gjurma nis nga vendi që zgjodhe — një emër kasaforte, dosja jote shtëpi, një disk — e jo nga rregullimi i direktorive të makinës.

## Instalimi

I listuar te [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure), por ende i paaprovuar për shfletuesin brenda aplikacionit — prandaj instalojeni me një nga këto mënyra:

**Me dorë:** shkarko `main.js`, `manifest.json` dhe `styles.css` nga [lëshimi i fundit](https://github.com/Gelaende51/obsidian-lure/releases) te `<vault>/.obsidian/plugins/lure/`, pastaj ndize te **Konfigurime → Shtojca të treta**.

**BRAT:** shto `Gelaende51/obsidian-lure` si shtojcë beta.

**Nga burimi:** `npm install && npm run build` — shih [zhvillimi](../development.md).

## Pajtueshmëria

Nuk kërkohet asnjë shtojcë. **Eksploruesi i dokumenteve** bazë, nëse është i ndezur, është ai që i shfaq dosjet në shiritin anësor; pa të, ato klikime nuk bëjnë asgjë.

Provuar përballë shtojcave të komunitetit që ndajnë shiritin e kokës së shënimit ose i përgjigjen klikimit mbi dosje — në të dyja radhët e ngarkimit, secila e ndezur dhe e fikur:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — ndarësi hap shënimin e dosjes në vend që ta shfaqë dosjen, kështu çdo pjesë e shtegut bëhet një vend ku mund të shkosh. Shtojca e vetme e shënimeve të dosjeve që e pretendon shtegun në shiritin e kokës; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) dhe [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) nuk dëgjojnë atje, ndaj ndarësi e shfaq dosjen si zakonisht.
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer) dhe [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — të dyja vizatojnë në të njëjtin element të shiritit të kokës; Lure e ruan rreshtin e vet cilado qoftë që ngarkohet e para, dhe fikja e njërës e lë tjetrën të paprekur.
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header), [Running Head](obsidian://show-plugin?id=running-head), [Crumbs](obsidian://show-plugin?id=crumbs-obsidian), [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — kanë shiritin e tyre dhe bashkëjetojnë pa telashe.

Vetëm në kompjuter — modeli i ndërveprimit kërkon kalimin e miut sipër, klikime të sakta dhe një tastierë. Rezultatet e plota, çfarë mbetet për t'u provuar, dhe krahasimi me Quick Explorer e Breadcrumbs janë te [pajtueshmëria](../compatibility.md).

## Si të kontribuosh

- Raportimet dhe pull request-et janë të mirëpritura — sidomos **ndreqjet e përkthimeve**, meqë të 45 gjuhët janë përkthyer me makinë dhe të pashqyrtuara nga folës amtarë. Për përgatitjen dhe rregullat bazë shih [zhvillimi](../development.md).
- **Gjurmuesi i problemeve:** https://github.com/Gelaende51/obsidian-lure/issues
- **Dhurimet:** [Ko-fi](https://ko-fi.com/vault51). Shtojca është sidoqoftë falas dhe me licencë AGPL; bakshishi çmohet dhe nuk kërkohet kurrë. Përdorimi i menduar është kompensimi i karbonit — një qëllim, jo një zotim: asgjë nuk kompensohet derisa shuma të ia vlejë mundimin, dhe kjo rresht do ta thotë sapo diçka të jetë kompensuar vërtet.

## Falënderime

- **Vault51** — autori: koncepti, kërkesat dhe testimi me dorë nga fillimi në fund.
- **Claude Opus 5** dhe **Claude Sonnet 5** (Anthropic, përmes Claude Code) — zbatimi, përkthimet dhe dokumentimi, nën drejtimin e autorit. Shih [deklarim për IA-në](#deklarim-për-ia-në).
- **[Obsidian](https://obsidian.md)** — aplikacioni që kjo shtojcë zgjeron, dhe burimi i çdo pjese që shtojca përdor: API-ja e shtojcave, grupi i ikonave Lucide pas `setIcon`, instanca e përfshirë e i18next prej së cilës lexohen etiketat e menusë së kontekstit, si dhe klasat e ndryshoret e veta CSS. Asgjë nga palë të treta nuk paketohet; shtojca **nuk ka varësi gjatë ekzekutimit**.

> **Ekipi i Obsidian nuk ka marrë pjesë në këtë projekt në asnjë mënyrë** — nuk e ka shkruar, shqyrtuar, miratuar apo mbështetur. Obsidian është markë tregtare e Dynalist Inc.; kjo është një shtojcë e pavarur dhe e palidhur.

Kontribuuesit do të renditen këtu sapo të mbërrijnë kontributet.

## Lidhje

- **Dokumentimi:** [docs/](../)
- **Faqja e shtojcës:** https://community.obsidian.md/plugins/lure
- **Prania në web / burimi:** https://github.com/Gelaende51/obsidian-lure
- **Dhurimet:** [Ko-fi](https://ko-fi.com/vault51) — shih [si të kontribuosh](#si-të-kontribuosh).
- **Licenca:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. Degëzimet dhe ndërtimet e rishpërndara duhet ta nxjerrin burimin e tyre me të njëjtën licencë.
