<!-- README.md tulkojums — stāvoklis: revīzija f133f41.
     Mašīntulkojums (Claude Opus 5), ko nav pārlasījuši dzimtās valodas
     runātāji. Labojumi ir gaidīti; noteicošā ir README angļu valodā. -->

[English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · **Latviešu** · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

[Obsidian](https://obsidian.md) spraudnis, kas piezīmes galvenes joslā esošo faila nosaukumu pārvērš par uzklikšķināmu un rediģējamu ceļu cauri visai glabātavai — gluži kā adreses josla failu pārvaldniekā [Dolphin](https://apps.kde.org/dolphin/).

![Klikšķis uz atdalītāja aiz mapes: rādītājs atrodas uz tā, un Failu pārlūks ir parādījis un izvērsis šo mapi](../images/breadcrumb.png)

Obsidian 1.8.7+ · tikai datoram · AGPL-3.0

## Paziņojums par MI

- **Aģents** — **Claude Opus 5** un **Claude Sonnet 5** (Anthropic, caur Claude Code): uzrakstīja TypeScript kodu, CSS, visus 45 tulkojumu komplektus un dokumentāciju. Tulkojumi ir mašīnas veidoti, un dzimtās valodas runātāji tos nav pārlasījuši.
- **Patēriņš** — 2026. gada 3. augusts – 6. septembris, 22 sesijas, \~13 378 atbildes: \~16,3 milj. ģenerētu marķieru, \~62,3 milj. nosūtītu, \~4245,1 milj. atkārtotu nolasījumu no kešatmiņas (\~4323,6 milj. kopā).
- **Pirmavots** — modelis mācījās no atvērtā pirmkoda, dokumentācijas un kopienas rakstiem, ko publicējuši citi. Lielākā daļa nopelnu pieder tiem.
- **Autors** — Vault51: noteica katru funkciju, izmēģināja katru versiju īstā glabātavā, vadīja labojumus, pārskatīja visus rezultātus.

## Iespējas

- **Uzklikšķini uz mapes**, lai redzētu tās *vecākmapes* saturu — nomaini vienu mapi pret kaimiņmapi, neaiztiekot pārējo ceļu. Piezīmes nosaukums darbojas tāpat, iezīmējot nosaukumu bez paplašinājuma.
- **Uzklikšķini uz atdalītāja** aiz mapes, lai to parādītu un izvērstu Failu pārlūkā. Viens iestatījums samaina abas lomas vietām.
- **Uzklikšķini ar labo pogu vai velc jebkuru ierakstu** — paša Failu pārlūka konteksta izvēlne, ieraksts pēc ieraksta, un tā vilkšanas uzvedība. Ceļiem ārpus glabātavas ir tiem veidota līdzvērtīga izvēlne, līdz pat *Dzēst* caur sistēmas atkritni.
- **Uzklikšķini uz faila nosaukuma vai tukšas vietas**, lai ierakstītu ceļu, ar papildināšanu. `/` nolaižas dziļāk, <kbd>Atpakaļatkāpe</kbd> paceļas vienu līmeni augstāk, <kbd>Enter</kbd> apstiprina — un ceļš, kāda vēl nav, vienkārši tiek izveidots, ar paziņojumu, kur tas nonāca.
- **Saraksts atveras pie ieraksta, kurā atrodies**, un pārvietošanās pa to ar bultiņām vai rādītāju aizpilda lauku ar to, uz ko norādi. Aiz jebkura saraksta gala tas atdod to, ko biji ierakstījis, bet, aizvedot rādītāju prom, iezīmējums atgriežas tur, kur biji.
- **Zīmuļa poga uz mapes** pārslēdz tās pašas darbības uz pārvietošanas/pārdēvēšanas režīmu, ar tādām pašām pārbaudēm, kādas veic pats Obsidian.
- **Turi <kbd>Ctrl</kbd>**, lai atvērtu jaunā cilnē — vai, pārvietošanas/pārdēvēšanas režīmā, lai piezīmi tur nokopētu. Piezīmes nosaukums un mapju posmi pieņem tos pašus modifikatorus un vilkšanu, gluži kā to rindas Failu pārlūkā.
- **Nosaukumi papildinās rakstīšanas gaitā** — kur mapes nosaukumi sakrīt, sakritība parādās aiz kursora, iezīmēta; rakstīšana to aprij burtu pa burtam, <kbd>Tab</kbd> vai <kbd>→</kbd> paņem to visu, <kbd>Atpakaļatkāpe</kbd> to atdod atpakaļ. Saraksts turpina filtrēt pēc tā, ko ierakstīji, nevis pēc tā, kas tika piedāvāts.
- **<kbd>Tab</kbd> papildina kā čaula**: tas pagarina ierakstīto tik tālu, cik šīs mapes nosaukumi sakrīt, iet pretī vienam no tiem soli pa solim, kad tie nesakrīt, un ieiet mapē tikai tad, kad palicis viens nosaukums. Aiz ceļa gala tas tā vietā paplašina iezīmējumu: nosaukums, nosaukums ar paplašinājumu, ceļš no glabātavas, ceļš no sistēmas saknes. <kbd>Shift</kbd>+<kbd>Tab</kbd> iet to pašu ceļu atpakaļ — atdodamo iezīmējot, nevis dzēšot — un aiz ceļa sākuma turpina kāpt pa ceļu augšup, tad apgriežas atpakaļ uz sistēmas ceļu. Lai uz kuru pusi ietu, aplis atgriežas pie ceļa, ko biji uzbūvējis.
- **Labais klikšķis kopē** — divreiz nosaukumu, trīsreiz visu, kas pa labi no tā, bet tukšajā vietā — visu ceļu vai sistēmas ceļu.
- **Velc piezīmi uz mapi rindā**, lai pārvietotu to turp kopā ar saitēm — galamērķis jau ir uz ekrāna, tāpēc tas ir viens vilciens, nevis ceļojums cauri failu kokam. Glabātavas nosaukums to pieņem arī, uz sakni. Viss iezīmējums pārvietojas kā viens, un mape, kas piedāvāto pieņemt nevar, nerāda neko, nevis atsakās pēc padarītā.
- **Nomet tekstu uz rindas, lai to pierakstītu** — uz mapes vai glabātavas nosaukuma, lai tai nosauktu jaunu piezīmi; uz pašas piezīmes nosaukuma, lai to pievienotu tā beigās, ko lasi. Fails no darbvirsmas darbojas tāpat, un rinda mirdz zilganā, kamēr nomestais tur nokļūtu.
- **Lauks nes tā krāsu, ko tas nosauc** — to pašu krāsu, kāda ir tā rindai sarakstā, pelēku mapes piezīmei — un **kļūst sarkans**, tiklīdz nekas uz to neatsaucas, tāpēc pirms <kbd>Enter</kbd> nospiešanas redzi, vai tas atvērs piezīmi vai to izveidos.
- **HTML faili rādās kā lapas**, rāmī ar atņemtām visām atļaujām — bez skriptiem, bez tīkla, bez savas izcelsmes — kur līdzi ienesti blakus failam esošie stilu faili un attēli, lai saglabāta lapa joprojām izskatītos pati par sevi. Pirmkods ir viena klikšķa attālumā.
- **Ieraksti URL** — `https://`, `obsidian://`, vai `file://` vai procentkodētu ceļu — un tas tiek atvērts, nevis lasīts kā piezīmes nosaukums. Tīmekļa adreses nonāk paša Obsidian Tīmekļa skatītāja cilnē, ja tas tev ir ieslēgts.
- **Gari ceļi saīsinās tur, kur burti ir lieki** — nekad tālāk par to, kas atšķir mapi no blakusesošās, un plūstoši, nevis pa burtam — un ritina tikai tad, kad vairs nav ko saspiest. Norādi uz saīsinātu nosaukumu, lai redzētu to visu.
- **<kbd>F2</kbd>** pārslēdzas starp virsrakstu pašā piezīmē un ceļa joslu, atveroties uz nosaukuma bez paplašinājuma un ar nākamajiem spiedieniem izejot līdz pilnajiem ceļiem. Tas tīri iziet cauri Obsidian pārdēvēšanas dialogam, kad virsraksts ir aizritināts prom. Komanda *Fokusēt ceļa joslu* ir gatava piesaistei, ja gribi adreses joslas žestu.
- **Uzklikšķini uz glabātavas nosaukuma**, lai pārlūkotu savas pārējās glabātavas, mājas mapi, failu sistēmas sakni un pievienotos diskus, nemainot glabātavu. Tikai lasāms, kamēr neatver sarkano piekaramo atslēgu, kas tur ārpusē ieņem pārdēvēšanas slēdža vietu, un visu laiku ierāmēts kļūdas krāsā. Pēc noklusējuma izslēgts — sk. [ārpus glabātavas](#ārpus-glabātavas).
- **Divi brīdinājuma līmeņi** — sarkans ārpus glabātavas, oranžs teksta failiem, kuriem Obsidian nav redaktora. Sk. [divas brīdinājuma krāsas](usage.lv.md#divas-brīdinājuma-krāsas).
- **Motīvam pielāgojamas ikonas**, nomaināmas no CSS fragmenta — un **46 valodas**: katra, ko Obsidian piedāvā, plus grieķu un sanskrits, kuriem tam nav iestatījuma. Izvēlies vienu spraudnim atsevišķi vai seko paša Obsidian valodai.
- **Iestatījumi:** valoda, līdzinājums, sagatavoti atdalītāji, kurš klikšķis atver sarakstu, glabātavas nosaukums, slēptie faili, failu paplašinājumi.

![Tas pats saraksts pārvietošanas/pārdēvēšanas režīmā: faila pašreizējais nosaukums piesprausts augšā, zem tā kaimiņmapes, un esošās piezīmes pelēkotas](../images/dropdown.png)

*Pārvietošanas/pārdēvēšanas režīmā tas pats saraksts piedāvā ko citu: augšā piesprausts piezīmes pašreizējais nosaukums, lai to pārvietotu bez pārdēvēšanas; zemāk mapes, uz kurām to pārvietot; un jau aizņemtie nosaukumi pelēkoti, lai nekas netiktu nejauši pārrakstīts.*

→ [Pilnā lietošanas pamācība](usage.lv.md)

## Ārpus glabātavas

Obsidian izstrādātāju noteikumi prasa, lai spraudnis paskaidrotu jebkuru piekļuvi failiem ārpus glabātavas, tāpēc bez aplinkiem:

**Vai tas vispār ko no tā dara.** Tikai tad, ja ieslēdz **Piekļuve ārējiem failiem**, kas **pēc noklusējuma ir izslēgta**. Kamēr iestatījums ir izslēgts, no spraudņa nav nekāda ceļa uz ārēju atrašanās vietu, un nekas no zemāk aprakstītā koda nekad neizpildās.

**Ko tas lasa.** Tikai tad, kad to palūdz. Klikšķis uz glabātavas nosaukuma uzskaita tavas pārējās glabātavas — nolasītas no paša Obsidian `obsidian.json` — kā arī mājas mapi, failu sistēmas sakni un pievienotos diskus (`/proc/mounts` Linux vidē, `/Volumes` macOS vidē, disku burti Windows vidē). Pārlūkošana tālāk no turienes uzskaita direktoriju saturu, bet faila atvēršana nolasa tikai to vienu failu.

**Ko tas raksta.** Neko, kamēr nenospied pogu, kas to pasaka. Šādas pogas ir divas, un katra sedz tikai savu jomu:

- Skatītāja poga **Rediģēt kā tekstu** atslēdz priekšā esošo failu — tikai to vienu failu tajā vienā cilnē. Turpmāk tavas izmaiņas tajā saglabājas, tev rakstot.
- Galvenes **sarkanā piekaramā atslēga**, kas ieņem pārdēvēšanas slēdža vietu, kamēr ceļa josla norāda ārpus tavas glabātavas, atslēdz veidošanu, pārdēvēšanu, pārvietošanu un dzēšanu ārējos ceļos — un, atvērta, atdod vietu atpakaļ slēdzim. Tā aizslēdzas atpakaļ, tiklīdz atgriezies iekšpusē, un ar to spiedienu, kas iziet no pārdēvēšanas režīma, tāpēc atļauja nekad nepārdzīvo mapi, kurai tā tika dota.

Neviena no atslēgšanām netiek saglabāta ne darbvietā, ne iestatījumos, tāpēc rakstīšana nekad nepaliek uzvilkta uz faila, kura atvēršanu neatceries. Nevienā no abiem stāvokļiem nekas netiek pārrakstīts — jau esošs mērķis tiek noraidīts, izmantojot pašas failu sistēmas ekskluzīvo izveidi, nevis pārbaudi, kas varētu zaudēt sacensībā.

Piezīmes pārvietošana *ārā* no glabātavas ir tā vienīgā rakstīšana, kas maksā kaut ko, ko nekas nevar atdot atpakaļ: Obsidian atjaunina saites tikai glabātavas iekšienē, tāpēc katra saite uz šo piezīmi pārtrūkst. To piedāvā aiz dialoga, kas to pasaka un saskaita skartās piezīmes, un tas notiek kā kopēšana un pēc tam dzēšana caur paša Obsidian atkritni, tāpēc tas ir tikpat atgūstams kā izdzēsta piezīme. <kbd>Ctrl</kbd> turēšana to tā vietā nokopē ārā.

**Kāpēc.** Vajadzīgās piezīmes bieži ir citā glabātavā, sinhronizācijas mapē vai USB atmiņā, bet paša Obsidian atbilde — nomaini glabātavu — aizver visu, kas tev bija atvērts. Šis ļauj aiziet paskatīties, neaizejot prom, un turpat izlabot drukas kļūdu.

**Ierobežojums.** Obsidian redaktors ir piesaistīts failiem glabātavas iekšienē, tāpēc ārēju failu **nevar** atvērt kā īstu piezīmi ar saitēm, atpakaļsaitēm un visu pārējo; to nespēj neviens spraudnis. Tā vietā Lure to parāda savā skatītājā (Markdown, attēli, audio, video, PDF), bet visam pārējam piedāvā *Atvērt ārēji*. Ceļa josla paliek ierāmēta kļūdas krāsā ikreiz, kad tā norāda ārpus tavas glabātavas, un pēdas sākas tajā vietā, kuru izvēlējies — pie glabātavas nosaukuma, mājas mapes, diska — nevis pie iekārtas direktoriju izkārtojuma.

## Uzstādīšana

Iekļauts [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure), taču vēl nav apstiprināts lietotnes iekšējam pārlūkam — tāpēc instalē to kādā no šiem veidiem:

**Ar rokām:** lejupielādē `main.js`, `manifest.json` un `styles.css` no [jaunākā laidiena](https://github.com/Gelaende51/obsidian-lure/releases) mapē `<vault>/.obsidian/plugins/lure/`, tad ieslēdz to sadaļā **Iestatījumi → Trešās puses spraudnis**.

**BRAT:** pievieno `Gelaende51/obsidian-lure` kā beta spraudni.

**No pirmkoda:** `npm install && npm run build` — sk. [izstrāde](../development.md).

## Saderība

Neviens spraudnis nav vajadzīgs. Pamata **Failu pārlūks**, ja tas ir ieslēgts, ir tas, kas parāda mapes sānjoslā; bez tā šie klikšķi neko nedara.

Izmēģināts ar tiem kopienas spraudņiem, kas dala piezīmes galveni vai atbild uz klikšķi uz mapes — abās ielādes secībās, katrs ieslēgts un izslēgts:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — atdalītājs atver mapes piezīmi, nevis parāda pašu mapi, tāpēc katrs ceļa posms kļūst par vietu, uz kuru aiziet, lai cik dziļi: piezīme tiek atrasta pēc šī spraudņa pašu konvencijas, nevis atstāta tam pašam atbildēt. Tas ir arī vienīgais, kas šādu konvenciju publisko; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) un [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) nepublisko nevienu un nekad nepretendē uz ceļu galvenē, tāpēc ar tiem atdalītājs parāda mapi kā parasti.
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer) un [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — abi zīmē tajā pašā galvenes elementā; Lure patur savu rindu neatkarīgi no tā, kurš ielādējas pirmais, un jebkura no tiem izslēgšana otru atstāj neskartu.
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header), [Running Head](obsidian://show-plugin?id=running-head), [Crumbs](obsidian://show-plugin?id=crumbs-obsidian), [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — tiem ir sava josla, un tie sadzīvo bez raizēm.

Tikai datoram — mijiedarbības veidam vajadzīga peles novietošana virsū, precīzi klikšķi un tastatūra. Pilnie rezultāti, kas vēl jāpārbauda, un salīdzinājums ar Quick Explorer un Breadcrumbs ir [saderībā](../compatibility.md).

## Kā palīdzēt

- Ziņojumi un pull request ir gaidīti — jo īpaši **tulkojumu labojumi**, jo visas 45 valodas ir mašīntulkotas un dzimtās valodas runātāji tās nav pārlasījuši. Par sagatavošanos un pamatnoteikumiem sk. [izstrāde](../development.md).
- **Kļūdu izsekošana:** https://github.com/Gelaende51/obsidian-lure/issues
- **Ziedojumi:** [Ko-fi](https://ko-fi.com/vault51). Spraudnis tik un tā ir bez maksas un ar AGPL licenci; dzeramnauda iepriecina, bet nekad netiek prasīta. Paredzētais mērķis ir oglekļa kompensācija — nodoms, nevis saistības: nekas netiek kompensēts, kamēr summa nav pūļu vērta, un šī rinda to pateiks, tiklīdz kaut kas tiešām būs kompensēts.

## Pateicības

- **Vault51** — autors: iecere, prasības un manuāla testēšana visu laiku.
- **Claude Opus 5** un **Claude Sonnet 5** (Anthropic, caur Claude Code) — realizācija, tulkojumi un dokumentācija, autora vadībā. Sk. [paziņojums par MI](#paziņojums-par-mi).
- **[Obsidian](https://obsidian.md)** — lietotne, ko šis paplašina, un katras spraudņa izmantotās sastāvdaļas avots: tās spraudņu API, Lucide ikonu komplekts aiz `setIcon`, komplektā iekļautais i18next eksemplārs, no kura tiek nolasīti konteksta izvēlnes uzraksti, kā arī tās pašas CSS klases un mainīgie. Nekas no trešajām pusēm netiek iekļauts; spraudnim **nav izpildlaika atkarību**.

> **Obsidian komanda šajā projektā nav piedalījusies nekādā veidā** — viņi to nav rakstījuši, pārlasījuši, atbalstījuši vai apstiprinājuši. Obsidian ir Dynalist Inc. preču zīme; šis ir neatkarīgs, nesaistīts spraudnis.

Līdzautori šeit tiks uzskaitīti, tiklīdz ieguldījumi sāks ienākt.

## Saites


- **Dokumentācija:** [docs/](../)
- **Izmaiņu žurnāls:** [CHANGELOG.lv.md](CHANGELOG.lv.md)
- **Spraudņa lapa:** https://community.obsidian.md/plugins/lure
- **Tīmekļa klātbūtne / pirmkods:** https://github.com/Gelaende51/obsidian-lure
- **Ziedojumi:** [Ko-fi](https://ko-fi.com/vault51) — sk. [kā palīdzēt](#kā-palīdzēt).
- **Licence:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. Atzarojumiem un tālāk izplatītiem būvējumiem sava pirmkoda jāpublicē ar to pašu licenci.
