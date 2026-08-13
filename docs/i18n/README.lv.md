<!-- README.md tulkojums — stāvoklis: revīzija d116bbc.
     Mašīntulkojums (Claude Opus 5), ko nav pārlasījuši dzimtās valodas
     runātāji. Labojumi ir gaidīti; noteicošā ir README angļu valodā. -->

**Lasīt citās valodās:** [English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · **Latviešu** · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

[Obsidian](https://obsidian.md) spraudnis, kas piezīmes galvenes joslā esošo faila nosaukumu pārvērš par uzklikšķināmu un rediģējamu ceļu cauri visai glabātavai — gluži kā adreses josla failu pārvaldniekā [Dolphin](https://apps.kde.org/dolphin/).

![Klikšķis uz atdalītāja aiz mapes: rādītājs atrodas uz tā, un Failu pārlūks ir parādījis un izvērsis šo mapi](../images/breadcrumb.png)

Obsidian 1.8.7+ · tikai datoram · AGPL-3.0

## Paziņojums par MI

- **Aģents** — **Claude Opus 5** un **Claude Sonnet 5** (Anthropic, caur Claude Code): uzrakstīja TypeScript kodu, CSS, visus 45 tulkojumu komplektus un dokumentāciju. Tulkojumi ir mašīnas veidoti, un dzimtās valodas runātāji tos nav pārlasījuši.
- **Autors** — Vault51: noteica katru funkciju, izmēģināja katru versiju īstā glabātavā, vadīja labojumus, pārskatīja visus rezultātus.
- **Patēriņš** — 2026. gada 3.–13. augusts, deviņas sesijas, \~4928 atbildes: \~7,2 milj. ģenerētu marķieru, \~23,7 milj. nosūtītu, \~1169,6 milj. atkārtotu nolasījumu no kešatmiņas (\~1200,5 milj. kopā).
- **Pirmavots** — modelis, kas raksta Obsidian spraudņus, to iemācījās no atvērtā pirmkoda, dokumentācijas, forumu atbildēm un kļūdu ziņojumiem, ko cilvēki uzrakstīja un atdeva par velti. Nevienam no viņiem nejautāja, nevienu nepieminēja un nevienam nemaksāja. Tas ir lielākais nepieminētais ieguldījums šeit, un tas ir jūsu atbalsta vērts vairāk nekā šis spraudnis: ja izvēlaties, kurp kaut ko sūtīt, sūtiet turp.

## Iespējas

- **Uzklikšķini uz mapes**, lai redzētu tās *vecākmapes* saturu — nomaini vienu mapi pret kaimiņmapi, neaiztiekot pārējo ceļu. Piezīmes nosaukums darbojas tāpat, arī ar paplašinājumu.
- **Uzklikšķini uz atdalītāja** aiz mapes, lai to parādītu un izvērstu Failu pārlūkā. Viens iestatījums samaina abas lomas vietām.
- **Uzklikšķini ar labo pogu vai velc jebkuru ierakstu** — paša Failu pārlūka konteksta izvēlne un vilkšanas uzvedība.
- **Uzklikšķini uz faila nosaukuma vai tukšas vietas**, lai ierakstītu ceļu, ar papildināšanu. `/` nolaižas dziļāk, <kbd>Atpakaļatkāpe</kbd> paceļas vienu līmeni augstāk, <kbd>Enter</kbd> apstiprina.
- **Zīmuļa poga uz mapes** pārslēdz tās pašas darbības uz pārvietošanas/pārdēvēšanas režīmu, ar tādām pašām pārbaudēm, kādas veic pats Obsidian.
- **Turi <kbd>Ctrl</kbd>**, lai atvērtu jaunā cilnē — vai, pārvietošanas/pārdēvēšanas režīmā, lai piezīmi tur nokopētu, nevis pārvietotu.
- **<kbd>F2</kbd>** pārslēdzas starp virsrakstu pašā piezīmē un ceļa joslu.
- **Uzklikšķini uz glabātavas nosaukuma**, lai pārlūkotu savas pārējās glabātavas, mājas mapi, failu sistēmas sakni un pievienotos diskus, nemainot glabātavu. Tikai lasāms, kamēr neatver piekaramo atslēgu, un visu laiku ierāmēts kļūdas krāsā. Pēc noklusējuma izslēgts — sk. [ārpus glabātavas](#ārpus-glabātavas).
- **Divi brīdinājuma līmeņi** — sarkans ārpus glabātavas, oranžs teksta failiem, kuriem Obsidian nav redaktora. Sk. [divas brīdinājuma krāsas](usage.lv.md#divas-brīdinājuma-krāsas).
- **Motīvam pielāgojamas ikonas**, nomaināmas no CSS fragmenta — un **45 valodas**, katra, ko Obsidian piedāvā.
- **Iestatījumi:** līdzinājums, sagatavoti atdalītāji, kurš klikšķis atver sarakstu, glabātavas nosaukums, slēptie faili.

![Tas pats saraksts pārvietošanas/pārdēvēšanas režīmā: faila pašreizējais nosaukums piesprausts augšā, zem tā kaimiņmapes, un esošās piezīmes pelēkotas](../images/dropdown.png)

*Pārvietošanas/pārdēvēšanas režīmā tas pats saraksts piedāvā ko citu: augšā piesprausts piezīmes pašreizējais nosaukums, lai to pārvietotu bez pārdēvēšanas; zemāk mapes, uz kurām to pārvietot; un jau aizņemtie nosaukumi pelēkoti, lai nekas netiktu nejauši pārrakstīts.*

→ [Pilnā lietošanas pamācība](usage.lv.md)

## Ārpus glabātavas

Obsidian izstrādātāju noteikumi prasa, lai spraudnis paskaidrotu jebkuru piekļuvi failiem ārpus glabātavas, tāpēc bez aplinkiem:

**Vai tas vispār ko no tā dara.** Tikai tad, ja ieslēdz **Piekļuve ārējiem failiem**, kas **pēc noklusējuma ir izslēgta**. Kamēr iestatījums ir izslēgts, no spraudņa nav nekāda ceļa uz ārēju atrašanās vietu, un nekas no zemāk aprakstītā koda nekad neizpildās.

**Ko tas lasa.** Tikai tad, kad to palūdz. Klikšķis uz glabātavas nosaukuma uzskaita tavas pārējās glabātavas — nolasītas no paša Obsidian `obsidian.json` — kā arī mājas mapi, failu sistēmas sakni un pievienotos diskus (`/proc/mounts` Linux vidē, `/Volumes` macOS vidē, disku burti Windows vidē). Pārlūkošana tālāk no turienes uzskaita direktoriju saturu, bet faila atvēršana nolasa tikai to vienu failu.

**Ko tas raksta.** Neko, kamēr nenospied pogu, kas to pasaka. Šādas pogas ir divas, un katra sedz tikai savu jomu:

- Skatītāja poga **Rediģēt kā tekstu** atslēdz priekšā esošo failu — tikai to vienu failu tajā vienā cilnē. Turpmāk tavas izmaiņas tajā saglabājas, tev rakstot.
- Galvenes **piekaramā atslēga**, kas redzama tikai tikmēr, kamēr ceļa josla norāda ārpus glabātavas, atslēdz veidošanu, pārdēvēšanu un pārvietošanu ārējos ceļos. Tā aizslēdzas atpakaļ, tiklīdz atgriezies iekšpusē, tāpēc atļauja nekad nepārdzīvo mapi, kurai tā tika dota.

Neviena no atslēgšanām netiek saglabāta ne darbvietā, ne iestatījumos, tāpēc rakstīšana nekad nepaliek uzvilkta uz faila, kura atvēršanu neatceries. Nevienā no abiem stāvokļiem nekas netiek pārrakstīts — jau esošs mērķis tiek noraidīts, izmantojot pašas failu sistēmas ekskluzīvo izveidi, nevis pārbaudi, kas varētu zaudēt sacensībā — un piezīmi nekad nevar *pārvietot* ārpus glabātavas, jo saites uz to klusējot pārtrūktu; <kbd>Ctrl</kbd> turēšana to tā vietā nokopē ārā.

**Kāpēc.** Vajadzīgās piezīmes bieži ir citā glabātavā, sinhronizācijas mapē vai USB atmiņā, bet paša Obsidian atbilde — nomaini glabātavu — aizver visu, kas tev bija atvērts. Šis ļauj aiziet paskatīties, neaizejot prom, un turpat izlabot drukas kļūdu.

**Ierobežojums.** Obsidian redaktors ir piesaistīts failiem glabātavas iekšienē, tāpēc ārēju failu **nevar** atvērt kā īstu piezīmi ar saitēm, atpakaļsaitēm un visu pārējo; to nespēj neviens spraudnis. Tā vietā Lure to parāda savā skatītājā (Markdown, attēli, audio, video, PDF), bet visam pārējam piedāvā *Atvērt ārēji*. Ceļa josla paliek ierāmēta kļūdas krāsā ikreiz, kad tā norāda ārpus glabātavas, un pēdas sākas tajā vietā, kuru izvēlējies — pie glabātavas nosaukuma, mājas mapes, diska — nevis pie iekārtas direktoriju izkārtojuma.

## Uzstādīšana

Iekļauts [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure), taču vēl nav apstiprināts lietotnes iekšējam pārlūkam — instalējiet to kādā no šiem veidiem:

**Ar rokām:** lejupielādē `main.js`, `manifest.json` un `styles.css` no [jaunākā laidiena](https://github.com/Gelaende51/obsidian-lure/releases) mapē `<vault>/.obsidian/plugins/lure/`, tad ieslēdz to sadaļā **Iestatījumi → Trešās puses spraudnis**.

**BRAT:** pievieno `Gelaende51/obsidian-lure` kā beta spraudni.

**No pirmkoda:** `npm install && npm run build` — sk. [izstrāde](../development.md).

## Saderība

Neviens spraudnis nav vajadzīgs. Pamata **Failu pārlūks**, ja tas ir ieslēgts, ir tas, kas parāda mapes sānjoslā; bez tā šie klikšķi neko nedara.

Izmēģināts ar tiem kopienas spraudņiem, kas dala piezīmes galveni vai atbild uz klikšķi uz mapes — abās ielādes secībās, katrs ieslēgts un izslēgts:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — atdalītājs atver mapes piezīmi, nevis parāda pašu mapi, tāpēc katrs ceļa posms kļūst par vietu, uz kuru aiziet. Vienīgais mapju piezīmju spraudnis, kas pretendē uz ceļu galvenē; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) un [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) tur neklausās, tāpēc atdalītājs parāda mapi kā parasti.
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
- **Spraudņa lapa:** https://community.obsidian.md/plugins/lure
- **Tīmekļa klātbūtne / pirmkods:** https://github.com/Gelaende51/obsidian-lure
- **Ziedojumi:** [Ko-fi](https://ko-fi.com/vault51) — sk. [kā palīdzēt](#kā-palīdzēt).
- **Licence:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. Atzarojumiem un tālāk izplatītiem būvējumiem sava pirmkoda jāpublicē ar to pašu licenci.
