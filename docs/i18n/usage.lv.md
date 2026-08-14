<!-- docs/usage.md tulkojums — stāvoklis: commit 349b74e.
     Mašīntulkojums (Claude Opus 5), kuru nav pārbaudījuši dzimtās
     valodas runātāji. Spraudņa uzraksti nāk no
     src/lang/translations.ts, bet Obsidian uzraksti — no tekstiem, ko
     piegādā pati lietotne, tāpēc tie sakrīt ar redzamo ekrānā. -->

[English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · [Čeština](usage.cs.md) · [Dansk](usage.da.md) · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · [Bahasa Indonesia](usage.id.md) · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · **Latviešu** · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · [Norsk](usage.no.md) · [Polski](usage.pl.md) · [Português](usage.pt.md) · [Português (Brasil)](usage.pt-BR.md) · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

# Lietošana

[← atpakaļ uz README](README.lv.md)

## Ceļa josla

Piezīmes pilnais ceļš glabātavā aizstāj kailo faila nosaukumu skata galvenē — joslā zem ciļņu rindas, kurā ir arī atpakaļ/uz priekšu pogas.

Šajā rindā ir divas noklikšķināmas lietas, un **Mapes nosaukums atver sarakstu** izšķir, kura ko dara:

| | Mapes nosaukums | Atdalītājs aiz tā |
| --- | --- | --- |
| **Ieslēgts** (noklusējums) | Atlasa šo mapi rediģēšanai | Atver mapi |
| **Izslēgts** | Atver mapi | Nolaižas šajā mapē |

„Atver mapi” nozīmē to, ko klikšķis uz šī segmenta dara Obsidian bez spraudņiem. Ja tur neviens spraudnis neklausās, mape tiek parādīta sānjoslas Failu pārlūkā — izcelta un izvērsta, lai redzētu tās saturu.

Ar uzstādītu [Folder notes](obsidian://show-plugin?id=folder-notes) tas pats klikšķis atver attiecīgās mapes piezīmi. Tas ir vienīgais mapju piezīmju spraudnis, par kuru noskaidrots, ka tas pārņem galvenes ceļu; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) un [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) pārvalda mapju piezīmes, bet neklausās klikšķi uz ceļa, tāpēc ar tiem atdalītājs parāda mapi kā parasti. Sk. [saderību](../compatibility.md#verified-against).

Atdalītājs ir **pasvītrots tikai tad, ja mapei pirms tā tiešām ir mapes piezīme**, tāpēc pasvītrojums ir solījums, ka ir ko atvērt. Katrs atdalītājs paliek noklikšķināms jebkurā gadījumā — nepasvītrots parāda un izvērš savu mapi sānjoslā, ko kursors joprojām apliecina. Pasvītrojums tajā pašā brīdī pamet mapes nosaukumu: ar ieslēgtu apmaiņu nosaukums atver sarakstu, tāpēc atzīmēt to kā saiti uz piezīmi būtu meli.

**Pārdēvēšanas/pārvietošanas režīms pārspēj abus**, lai ko teiktu iestatījums: kamēr pārvietošana ir iesākta, nekas rindā neatver mapi, jo atvērt kādu nozīmētu pārvietošanu pamest. Mapju nosaukumi tiek atlasīti rediģēšanai, un atdalītāji nolaižas — abi ir veidi, kā izvēlēties galamērķi — un pasvītrojums pazūd, lai parādītu, ka atvēršana ir apturēta.

**Glabātavas sakne** ir vienīgais segments, kas nav ceļa segments. Tai nav vecāka, no kura uzskaitīt kaimiņus, tāpēc tā tā vietā atver [vietu sarakstu](#pārlūkošana-ārpus-glabātavas) — tavas pārējās glabātavas, mājas mapi, failu sistēmas sakni un pievienotos diskus.

## Segmenta noklikšķināšana: nomaini to pret kaimiņu

Klikšķis uz mapes nosaukuma atlasa **šīs mapes nosaukumu** teksta laukā un atver saraksta skatu mapei **vienu līmeni augstāk** — tās vecākam. Rakstot vai izvēloties ierakstu, šī mape tiek nomainīta pret kaimiņu, bet viss zem tās paliek neskarts, tāpēc `Projekti/2026/Sākums.md` → klikšķis uz `2026` → izvēlies `2025` dod tev `Projekti/2025/Sākums.md`.

Klikšķis uz **piezīmes nosaukuma** darbojas tāpat pret tās pašas mapi un atlasa faila nosaukumu **kopā ar paplašinājumu** — pārdēvēt piezīmi vai pārvirzīt to parasti nozīmē mainīt arī to.

Klikšķis uz mapes jau ir atlasījis vienu segmentu, tāpēc **vēl viens klikšķis** paplašina atlasi uz visu rindu — uz šo mapi *un* visu zem tās — un rakstīšana tad aizstāj atlikušo ceļu uzreiz. Navigācijas un pārdēvēšanas/pārvietošanas režīmā tas darbojas vienādi.

Tas attiecas tikai uz turpinājumu tam klikšķim, kas lauku atvēra. Kad lauks reiz ir izmantots, tas uzvedas kā jebkurš cits teksta lauks: klikšķis novieto kursoru, dubultklikšķis paņem vārdu, trīskāršais — rindu.

Jebkurā gadījumā atlikušais ceļš paliek redzams ap lauku — kā zīmes pirms tā un kā neatlasīts teksts aiz tā — tāpēc pilnais ceļš nekad nepazūd no galvenes. Raksti, lai aizstātu atlasi, vai nospied <kbd>End</kbd> / <kbd>→</kbd>, lai to paturētu un rediģētu no turienes. Saraksts rāda visu mapi neatkarīgi no iepriekš ievadītā; tas sāk filtrēt tikai tad, kad tiešām raksti.

## Nolaišanās pa atdalītāju

Klikšķis uz atdalītāja (ar izslēgtu **Mapes nosaukums atver sarakstu**) nolaižas mapē pirms tā: saraksts rāda *šīs* mapes saturu, bet atlikušais ceļš atveras atlasīts laukā. Izvēloties mapi, tā tiek pievienota ceļam un uzreiz atveras nākamais saraksts, tāpēc vari noklikšķināt sev ceļu lejup pa koku, nepametot galvenes rindu.

## Saraksta rindas ir īstas failu pārvaldnieka rindas

Katrs saraksta fails un mape uzvedas kā tā rinda Failu pārlūkā:

- **Labais klikšķis** dod to pašu konteksta izvēlni — *Jauna piezīme* / *Jauna mape* uz mapes, *Atvērt jaunā cilnē* / *Pārdēvēt…* / *Dzēst* uz faila — ieskaitot ierakstus, ko failu izvēlnēm pievieno citi spraudņi.
- **Velc** ierakstu jebkur, kur Obsidian pieņem failu: redaktorā, lai ievietotu saiti; uz mapi Failu pārlūkā, lai to pārvietotu; uz ciļņu joslu, lai to atvērtu.

Izvēlņu formulējumi nāk no paša Obsidian tulkojumiem, tāpēc tie sader ar pārējo lietotni jebkurā valodā.

## Ceļa ierakstīšana

- Klikšķis uz **tukšās vietas** pirms ceļa vai aiz tā atver teksta lauku, kurā jau ierakstīts viss ceļš un viss ir atlasīts — pārraksti to vai rediģē uz vietas. (Klikšķis uz paša faila nosaukuma atlasa tikai faila nosaukumu; sk. augstāk.)
- Rakstīšana, kamēr ceļš ir redzams, pārvērš pēdējo segmentu mazā laukā ar dzīvu pabeigšanu, kas aprobežota ar pašreizējo mapi.
- `/` apstiprina pašreizējo segmentu un nolaižas tajā.
- <kbd>Backspace</kbd> tukšā laukā izkāpj atpakaļ uz vecākmapi un atkal atver tās nosaukumu ar kursoru beigās.
- <kbd>Enter</kbd> apstiprina; <kbd>Esc</kbd> vai klikšķis citur atceļ un atgriežas pie faila īstā ceļa.

Laukam nav nekādu rotājumu — ne rāmja, ne apmales — tāpēc tas lasās kā pats ceļa teksts un rakstot pats aug.

## Navigācija nekad neaiztiek atvērto failu

Noklusējuma (navigācijas) režīmā atvērtā piezīme **nekad** netiek pārdēvēta vai pārvietota.

- Ceļš, kas norāda uz esošu failu, to atver.
- Ceļš, kura vēl nav, jautā *„Izveidot jaunu failu?”*. Apstiprinājums izveido trūkstošās vecākmapes un failu; atcelšana nedara pilnīgi neko.

## <kbd>Ctrl</kbd> — jauna cilne un kopēšana pārvietošanas vietā

Turot <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> uz macOS), kamēr izvēlies failu no saraksta vai kamēr nospied <kbd>Enter</kbd> uz ceļa, rezultāts tiek nosūtīts uz **jaunu cilni**, nevis uz šo:

| | Vienkārši | Ar <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Izvēlies vai ieraksti esošu failu | Atveras šeit | Atveras jaunā cilnē |
| Ieraksti ceļu, kura nav | Pajautā, tad atver šeit | Pajautā, tad atver jaunā cilnē |
| Apstiprini ceļu pārdēvēšanas/pārvietošanas režīmā | **Pārvieto** piezīmi turp | **Nokopē** to turp un atver kopiju jaunā cilnē |

Modifikators tiek nolasīts pēc paša Obsidian likuma, tāpēc uzvedas tieši tāpat kā uz saites vai Failu pārlūka rindas — vidējais klikšķis arī nozīmē „jauna cilne”, <kbd>Ctrl</kbd>+<kbd>Alt</kbd> nozīmē sadalījumu, bet <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> — jaunu logu.

Kopēšana atsakās pārrakstīt tieši tāpat kā pārvietošana — arī pāri pašas piezīmes ceļam, kur nav nekā saprātīga, ko kopēt.

## Pārlūkošana ārpus glabātavas

**Tas pēc noklusējuma ir izslēgts.** Vispirms iestatījumos ieslēdz **Piekļuve ārējiem failiem** — lasīšana un rakstīšana ārpus glabātavas ir vienīgā lieta, ko šis spraudnis dara un ko pats Obsidian nedara, tāpēc tā ir kaut kas, kam pieteicies, nevis no kā atteicies. Kamēr tas ir izslēgts, glabātavas nosaukums vienkārši parāda tavu glabātavu Failu pārlūkā, un nekas šeit nekad neskatās tai pāri.

Klikšķis uz **glabātavas nosaukuma** (vai uz 🏠 ikonas, kad *Rādīt glabātavas nosaukumu* ir izslēgts) atver nevis satura, bet vietu sarakstu:

- **Tavas pārējās glabātavas**, nolasītas no paša Obsidian reģistra, nesenāk atvērtās pirmās, katra zem paša Obsidian glabātavas ikonas — tās, ko lietotne pati izmanto glabātavas komandām. Glabātava, kas tev jau ir atvērta, tā vietā saņem māju: no turienes rinda pēc noklusējuma sākas, tā nav vieta, kurp doties.
- **Mājas mape**, zem sava konta nosaukuma, apzīmēta ar `~`. Lucide nav tildes, tāpēc šo zīmē pats spraudnis uz Lucide paša 24×24 režģa ar to pašu līnijas biezumu — kā ikonu, kuras komplektā trūkst, nevis kā teksta rakstzīmi, kas iesēdusies starp ikonām.
- **Failu sistēmas sakne**, apzīmēta ar `root` — netulkota, jo tāds ir tās nosaukums jebkurā sistēmā — nevis `/`, kas blakus tam sekojošajam atdalītājam lasītos kā tukšs solis.
- **Pievienotie diski**, ar ikonu katram tipam tur, kur to lēti noteikt: tīkla koplietojumi, optiskie diski, disketes un noņemamie datu nesēji dabū savējo; viss pārējais — vispārīgu disku. Windows diski parādās kā `C:` ar vispārīgu ikonu — sējumu nosaukumiem un precīziem tipiem vajadzīgs WMI, kas apzināti netiek darīts.

Citas glabātavas izvēle **nepārslēdz Obsidian uz to.** Viss, kas tev ir atvērts, paliek atvērts; ceļa josla vienkārši sāk pārlūkot tur. Tieši tāpēc tas ir ceļa joslā, nevis atstāts sānjoslas glabātavu pārslēdzējam.

### Kamēr esi ārpusē

Ceļš **sākas vietā, kuru izvēlējies**, nevis datora direktoriju izkārtojumā — izvēlies `Arhīvs`, un rinda skan `Arhīvs / piezīmes / …`, nevis `/home/tu/Glabātavas/Arhīvs/piezīmes/…`. Sākuma segments nes ikonu par to, kas tas ir (glabātava, mājas, disks), un <kbd>Backspace</kbd> tur apstājas, nevis kāpj tālāk augšup pa pārējo failu sistēmu. Ar izslēgtu *Rādīt glabātavas nosaukumu* šis segments ir tikai ikona — iestatījums attiecas uz rindas sākuma segmentu, lai kuru glabātavu tas nosauktu, ne tikai uz tavu.

Ceļa josla ir **ierāmēta kļūdas krāsā** — tajā pašā gredzenā, ko zīmē pārdēvēšanas režīms — tik ilgi, kamēr tā norāda ārpus tavas glabātavas. Tā apzīmē pastāvīgu stāvokli, nevis mirkli: kamēr tā ir redzama, neviena no paša Obsidian apstrādēm neattiecas uz to, ko rinda rāda, un rakstīšana paliek slēgta, līdz saki citādi.

Citādi pārlūkošana darbojas kā iekšpusē: zīmes, atdalītāji, rakstīšana, pabeigšana, <kbd>Backspace</kbd>, lai izkāptu. Spēkā ir arī tie paši redzamības noteikumi, tāpēc neatbalstītiem paplašinājumiem joprojām vajadzīgs Obsidian iestatījums *Atpazīt visus failu paplašinājumus*, bet slēptajiem failiem — joprojām šī spraudņa iestatījums.

**Labais klikšķis un vilkšana** tur ārpusē nedarbojas — tie ir paša Failu pārlūka apstrādātāji, un tiem vajadzīgs fails, ko glabātava pazīst.

### Rakstīšana ārpus glabātavas

Viss, kas raksta, ir **pēc noklusējuma slēgts.** Blakus pārdēvēšanas pārslēdzējam galvenē parādās **piekaramā atslēga**, kamēr rinda norāda ārpus tavas glabātavas; nospiežot to, slēdzene atveras un kļūst sarkana, saskanot ar gredzenu ap rindu.

Atļauja tiek dota **vietai, nevis mirklim**: tā pārdzīvo visu, ko darītu, strādājot vienā vietā — pabeigt pārvietošanu, noklikšķināt prom no lauka, atvērt failu — un beidzas, kad no saraksta izvēlies citu glabātavu, disku vai sakni, kad rinda atgriežas pie glabātavas faila vai kad piekaramo atslēgu nospied vēlreiz. Tātad virkne pārvietojumu vienas mapes ietvaros maksā vienu nospiedienu, nevis vienu uz failu.

Ar atvērtu piekaramo atslēgu ceļa josla tur ārpusē uzvedas tāpat kā iekšpusē:

| Darbība | Rezultāts |
| --- | --- |
| Ieraksti nosaukumu, kura nav, <kbd>Enter</kbd> | Tas pats jautājums „izveidot to?” kā iekšpusē; tiek izveidotas arī trūkstošās vecākmapes. Nosaukums bez paplašinājuma kļūst par `.md`, tieši tāpat kā iekšpusē |
| Pārdēvēšanas/pārvietošanas režīms, ieraksti jaunu nosaukumu | Pārdēvē failu, ko rinda rāda. Nosaukums bez paplašinājuma patur faila paša paplašinājumu — te ārpusē mapē mīt visdažādākie faili, un pārdēvēšanai nevajadzētu klusi pārvērst `.png` par `.md` |
| Pārdēvēšanas/pārvietošanas režīms, pārlūko citur, izvēlies **paturēt šo nosaukumu** | Pārvieto to turp ar nosaukumu, kas tam jau ir |
| Turi <kbd>Ctrl</kbd> jebkurā no tiem | Kopē, nevis pārvieto, un atver kopiju jaunā cilnē |

Slēgtā stāvoklī visi šie ziņo, kas tos aizšķērso, tā vietā, lai notiktu. Nevienā no stāvokļiem nekas nekad netiek pārrakstīts: galamērķis, kas jau pastāv, tiek atteikts, un atteikums nāk no pašas failu sistēmas (`COPYFILE_EXCL`, ekskluzīva izveide), nevis no pārbaudes, kas varētu zaudēt sacensību. Pārvietošana starp failu sistēmām — no USB atmiņas, no tīkla koplietojuma — atkāpjas uz kopēt-tad-dzēst, un oriģināls tiek noņemts tikai pēc tam, kad kopija ir nonākusi vietā.

**Vienu lietu piekaramā atslēga neatslēdz: piezīmes pārvietošanu *ārā* no tavas glabātavas.** `fileManager` nespēj sekot failam pāri šai robežai, tāpēc katra saite, kas norāda uz piezīmi, klusi salūztu, un Obsidian to vienkārši redzētu pazūdam. Turot <kbd>Ctrl</kbd>, tā tiek nokopēta ārā, kam šīs problēmas nav nemaz, un paziņojums to arī pasaka. Pretējais virziens — ārēja faila ienešana *iekšā* glabātavā — arī vēl nav pieslēgts.

### Ārēja faila atvēršana

Obsidian redaktors strādā tikai ar failiem glabātavas iekšpusē, tāpēc ārēju failu **nevar** atvērt kā īstu piezīmi ar saitēm, atpakaļsaitēm un pārējo — tas ir lietotnes, nevis šī spraudņa ierobežojums. Izvēloties tādu, tā vietā atveras **priekšskatījums**, tikai lasāms, līdz saki citādi:

| Tips | Tiek rādīts kā |
| --- | --- |
| `.md`, `.markdown` | Atveidots Markdown |
| Attēli, audio, video, PDF | Iebūvēts atskaņotājs/skatītājs |
| Jebkurš cits **teksta** fails (`.json`, `.css`, `.log`, `.txt`, …) | Burtisks vienkāršs teksts |
| Binārie formāti bez skatītāja | Nodoti *Atvērt ārēji* |

Skatītājam ir divi faila lasījumi, un, tā kā tie viens otru izslēdz, tiek rādīts tikai tas, uz kuru **pārslēgtos**:

| | Ko tas dara | Noklusējums šiem |
| --- | --- | --- |
| **Skatīt kā Markdown** | Atveido failu kā piezīmi, tikai lasāmu | `.md`, `.markdown` |
| **Rediģēt kā tekstu** | Pirmavotu, rediģējamu | visam pārējam |

Ārpus glabātavas **Rediģēt kā tekstu** ir arī tas nospiediens, kas noņem tikai-lasāms stāvokli — režīms un atļauja ir viens žests, nevis divas pogas, par kurām jādomā. Tas ir sarkanīgi ietonēts **ikreiz, kad nospiešana noņemtu tikai-lasāms stāvokli**, vienalga, vai gatavo rediģēšanu uz vietas, vai nāc tieši no atveidotā skata; glabātavas iekšpusē nav ko atslēgt, tāpēc tur tas paliek vienkāršs. **Skatīt kā Markdown** saņem vieglu akcenta krāsas pieskaņu — to pašu toni, ko Obsidian dod atlasītam tekstam — apzīmējot to kā ceļu atpakaļ, nevis kā aicinājumu rīkoties.

Tā kā poga seko *rediģēšanai*, nevis kailajam režīmam, fails, kas teksta skatā guļ tikai lasāms, joprojām piedāvā **Rediģēt kā tekstu**: tieši šis nospiediens to sagatavo. Fails, kurā nekad nevarēs rakstīt — saīsināts vai nenolasāms — tā vietā saka **Skatīt kā tekstu**, jo tas ir viss, ko nospiediens spēj dot.

Noklusējumi ir pagriezti derīgajā, nevis burtiskajā virzienā: `#` čaulas skriptā ir komentārs, nevis virsraksts, tāpēc `.log` atveidošana kā Markdown to klusi aprītu. Abus noklusējumus var pārrakstīt katram failam atsevišķi, un izvēle nonāk lapas vēsturē, tāpēc atpakaļ/uz priekšu un atkal atvērta darbvieta to patur — daudzas piezīmes mīt `.txt` failos, un daudzus `.md` failus ir vieglāk lasīt kā pirmavotu.

**Faili tavā glabātavā ir rediģējami uzreiz**, bez nekādas atslēgšanas: *Rediģēt kā tekstu* ir īsts redaktors un raksta atpakaļ, kamēr tu raksti.

**Rediģēšana tiek atcerēta pāri pārslēgšanai.** Pāreja uz *Skatīt kā Markdown* to aptur — statiskā atveidojumā nav kur rakstīt, un Dzīvajam priekšskatījumam vajadzīgs paša Obsidian redaktors, kas pastāv tikai failiem glabātavas iekšpusē — tāpēc nekas neapgalvo, ka tu rediģē, kamēr esi tur. Atgriešanās pie *Rediģēt kā tekstu* turpina no tās vietas, kur pameti.

**Faili ārpus glabātavas atveras tikai lasāmi, un *Rediģēt kā tekstu* to noņem.** Šis nospiediens ir visi vārti: līdz tas nenotiek, ārpusē nekas netiek rakstīts. Pēc tam fails saglabājas, kamēr raksti, tieši tāpat kā glabātavā esošais; un statusa rinda mainās no slēdzenes uz zīmuli. Atslēgšana attiecas uz to vienu failu tajā vienā cilnē — pāreja uz citu failu atkal aizslēdz — un tā apzināti netiek glabāta cilnes vēsturē, tāpēc atkal atvērta darbvieta nekad neatgriežas ar jau sagatavotu rakstīšanu sistēmas failā, kuru neatceries atvēris.

**Saīsinātie faili paliek tikai lasāmi jebkurā gadījumā** — saglabājot to, kas ir uz ekrāna, tiktu atmests viss aiz ierobežojuma, tāpēc poga netiek piedāvāta nemaz, nevis piedāvāta un tad atteikta. Tas pats attiecas uz failu, kuru nevarēja nolasīt: nav ko rakstīt atpakaļ, izņemot tukšu rūti.

Ja rakstīšana neizdodas — tikai lasāms pievienojums, fails, kas nepieder tev — paziņojumā tiek parādīts pašas sistēmas iemesls.

Ļoti lieli faili tiek rādīti saīsināti, un statusa rinda to pasaka, nevis atstāj tev pašam to atklāt — līdzās pārējiem nosacījumiem, nevis aiz pogām, jo tas ir fakts par failu tāpat kā pārējie. Ierobežojumi ir mērīti pret īstu atveidotāju, nevis uzminēti — megabaita teksta izkārtošana vienā rūtī nogalina Obsidian atveidošanas procesu pavisam, un Markdown uz baitu maksā vairākas reizes vairāk nekā vienkāršs teksts, tāpēc abiem ir atsevišķi ierobežojumi, un viena milzīga rinda tiek saīsināta pat tad, ja fails kopumā ir mazs.

**Statusa rindas ir uzraksti, bet skaidrojums ir padoms.** Katra rinda pasaka, kas ir patiess, ar tik daudz vārdiem, cik vajag — *Ārpus glabātavas*, *Šim faila tipam nav redaktora*, *Saīsināts — fails pārāk liels* — jo blakus esošās pogas jau pasaka, kādā stāvoklī fails ir. Uzvirzot kursoru virsū, tiek dots teikums: kāpēc Obsidian nevar to atvērt kā piezīmi, kas ar šo faila tipu citādi notiktu, ko saīsinājums tev maksā.

Tas attiecas arī uz failiem tavas glabātavas **iekšpusē**. Obsidian nodod jebkuru paplašinājumu, kuram tam nav skata, tieši darbvirsmas noklusējuma lietotnei — tātad `.txt` vai `.json` tavā glabātavā tevi izvestu no Obsidian pavisam. Tie tagad atveras tajā pašā skatītājā, ar oranžo gredzenu, jo „atver to Obsidian” ir tas, ko lūdzi — un, tā kā tie ir glabātavas faili, tur tie ir rediģējami bez nekādas atslēgšanas. Binārie faili bez skatītāja patur Obsidian uzvedību; nav ko rādīt.

Priekšskatījums atveras **tajā cilnē, kurā biji**, tāpēc atpakaļ/uz priekšu atgriež tevi pie piezīmes, no kuras nāci; turi <kbd>Ctrl</kbd>, lai iegūtu jaunu cilni, kā visur citur. Galvenes josla turpina rādīt ārējā faila ceļu, kamēr tas ir atvērts, tāpēc no turienes vari pārlūkot tālāk.

Kluss uzraksts virs satura piedāvā izejas:

- **Atvērt glabātavā *(glabātava)*** — parādās, kad fails pieder kādai no tavām pārējām glabātavām. Nodod to paša Obsidian URI apstrādātājam, kas atver attiecīgās glabātavas logu ar piezīmi tajā, kā īstu rediģējamu piezīmi. Šis logs paliek tieši tāds, kāds bija; nekas tev zem rokām nepārslēdzas.
- **Skatīt kā Markdown** / **Rediģēt kā tekstu** — abi lasījumi; otrais ārpus glabātavas arī noņem tikai-lasāms stāvokli.
- **Atvērt ārēji** — nodod failu tavas darbvirsmas noklusējuma lietotnei, ieskaitot tos bināros formātus, kurus šis skatītājs nespēj parādīt.

Nekas ārpus tavas glabātavas netiek rakstīts, ja vispirms nenospied *Rediģēt kā tekstu*. Pilnu izklāstu sk. README sadaļā [Ārpus glabātavas](README.lv.md#ārpus-glabātavas).

## Divas brīdinājuma krāsas

| | Kad | Ko tas nozīmē |
| --- | --- | --- |
| **Sarkans** gredzens uz ceļa joslas | Rinda norāda ārpus tavas glabātavas | Obsidian nevar atvērt to, kas tur ir, kā piezīmi, un tur ārpusē nekas netiek rakstīts, līdz atver piekaramo atslēgu. |
| **Oranžs** gredzens uz ceļa joslas, oranži ieraksti sarakstā | Fails ir teksta tips, kuram Obsidian nav skata | Piesardzība. Obsidian to nodotu tavas darbvirsmas noklusējuma lietotnei; spraudnis tā vietā to parāda. |

**Abi ir neatkarīgi, un abi var būt spēkā vienlaikus** — ārējs `.json` ir ārpus tavas glabātavas *un* tāda tipa, kuram Obsidian nav redaktora. Skatītājā tie parādās kā atsevišķas rindas, katra pasakot tikai savu faktu. Uz ceļa joslas sarkanais uzvar tur, kur spēkā ir abi, jo divi gredzeni būtu tikai troksnis.

Oranžais līmenis ir apzināti šaurs. Reģistrētie tipi (Markdown, canvas, attēli, PDF, audio, video) tiek apstrādāti kārtīgi un nesaņem neko. Arī binārie faili nesaņem neko — `.zip` tu nejauši sarediģēt par putru nevarēsi. Paliek tieši tas bīstamais: `.json`, `.css` vai `.log`, ko redzamu padarījis **Atpazīt visus failu paplašinājumus**.

Sarkanais uzvar tur, kur būtu spēkā abi; divi gredzeni reizē būtu tikai troksnis.

## Pārdēvēšanas/pārvietošanas režīms

Zīmuļa poga galvenes labajā malā — blakus skata režīma pogai, tikpat liela kā iebūvētās pogas — pārslēdz pārdēvēšanas/pārvietošanas režīmu. Galvenes rinda tad tiek ierāmēta akcenta krāsā, tieši tāpat kā pārdēvējot Failu pārlūkā. Tie paši klikšķi un taustiņu nospiedieni tagad apstiprina pārvietošanu vai pārdēvēšanu caur Obsidian `fileManager.renameFile`, tāpēc visas saites uz piezīmi seko līdzi.

Pārdēvēšanas laikā:

- Pašreizējais faila nosaukums ir piesprausts katras mapes sarakstā, tāpēc pārvietot piezīmi, to nepārdēvējot, ir viens klikšķis.
- Nosaukumi, kas mērķa mapē jau ir aizņemti, ir pieklusināti, bet joprojām izvēlami.
- Ievade tiek dzīvi pārbaudīta pret paša Obsidian pārdēvēšanas noteikumiem — tās pašas rakstzīmju kopas, tie paši ziņojumi, tas pats sarkanais padoms, ko saņem, pārdēvējot failu kokā — tāpēc nepieļaujams vai konfliktējošs nosaukums tiek atzīmēts rakstīšanas laikā un nav apstiprināms.
- Klikšķis ārpus galvenes joslas vai galvenes fokusa zaudēšana beidz pārdēvēšanas režīmu.

## Viens taustiņš abām pārdēvēšanām

Pārdēvēšanas komanda (pēc noklusējuma <kbd>F2</kbd> vai tas, uz ko esi to pārlicis) **mijas** starp Obsidian iekļautā virsraksta pārdēvēšanu un šī spraudņa galvenes ceļa joslu ar atlasītu visu ceļu. Ja esi izslēdzis Obsidian iekļauto virsrakstu, galvenes ceļa josla kļūst par vienīgo mērķi, tāpēc taustiņš nekad nepaliek bez darba.

Tas darbojas, apņemot komandu `workspace:edit-file-title`, nevis pārtverot taustiņu, tāpēc gan īsinājumtaustiņa pārlikšana, gan komandas palaišana no paletes darbojas nemainīgi.

## Kā tiek krāsotas saraksta rindas

| Krāsa | Nozīmē |
| --- | --- |
| **Violeta** | Piezīme (`.md`, `.markdown`) — tas, ko Obsidian atvērs kā piezīmi, izcelts no mapes ar jauktu saturu |
| **Oranža** | Teksta tips, kuram Obsidian nav skata; sk. [brīdinājuma krāsas](#divas-brīdinājuma-krāsas) |
| **Pieklusināta** | Ārpus tavas glabātavas, tāpēc glabātavas pašas apstrāde neattiecas |
| **Zila** | Piezīme, kurā atrodaties. Pārlūkojot tas ir tās pašas ieraksts; pārdēvēšanas/pārvietošanas režīmā tās vietā stāv ieraksts *paturēt šo nosaukumu* — abos gadījumos tā pati piezīme |
| **Pelēka** | Tikai pārdēvēšanas/pārvietošanas režīmā: nosaukums ir aizņemts. Joprojām izvēlams — izvēloties tas aizpilda lauku, kur pārbaude atzīmē konfliktu |

## Redzamības noteikumi

- Faili ar neatbalstītiem paplašinājumiem sarakstos parādās tikai tad, ja Obsidian iestatījums **Atpazīt visus failu paplašinājumus** ir ieslēgts.
- Saraksts rāda ne vairāk kā 100 ierakstus — tas ir paša Obsidian ierobežojums. Kad mapē to ir vairāk, pēdējā rinda pasaka, cik palika ārpusē; raksti tālāk, lai sarakstu sašaurinātu.
- Slēptie faili un mapes parādās tikai tad, ja šī spraudņa iestatījums **Rādīt slēptos failus** ir ieslēgts.
- **Aizsardzība pret pārrakstīšanu darbojas vienādi neatkarīgi no redzamības** — slēpts fails joprojām neļauj tev to pārrakstīt.

## Špikeris

| Vēlies… | Dari šo |
| --- | --- |
| Atvērt mapi (tās piezīmi vai parādīt to) | Klikšķini uz atdalītāja **aiz** šīs mapes |
| Nomainīt mapi pret kaimiņu | Klikšķini uz šīs mapes nosaukuma, tad raksti vai izvēlies |
| Pārdēvēt vai pārvirzīt piezīmi | Klikšķini uz piezīmes nosaukuma — kopā ar paplašinājumu |
| Pārlūkot mapes saturu | Klikšķini uz šīs mapes nosaukuma; saraksts rāda tās vecāku, tāpēc klikšķini uz mapes **zem** tās, kuru vēlies |
| Pārrakstīt mapi un visu zem tās | **Dubultklikšķis** uz šīs mapes nosaukuma, tad raksti |
| Rediģēt ceļu no mapes lejup | Klikšķini uz šīs mapes nosaukuma, tad <kbd>End</kbd> vai <kbd>→</kbd>, lai noņemtu atlasi |
| Pārlēkt uz failu, ierakstot tā ceļu | Klikšķini uz faila nosaukuma vai tukšās vietas, raksti, <kbd>Enter</kbd> |
| Atvērt failu jaunā cilnē | <kbd>Ctrl</kbd>, kamēr to izvēlies, vai <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| Nokopēt piezīmi kaut kur, nevis pārvietot | Zīmulis, tad <kbd>Ctrl</kbd>, kamēr izvēlies vai apstiprini mērķi |
| Izveidot piezīmi ceļā, kura nav | Ieraksti ceļu, <kbd>Enter</kbd>, apstiprini jautājumu |
| Nolaisties par līmeni, kamēr raksti | Ieraksti `/` |
| Pakāpties par līmeni augšup, kamēr raksti | <kbd>Backspace</kbd> tukšā laukā |
| Pārvietot vai pārdēvēt atvērto piezīmi | Klikšķini uz zīmuļa, tad pārlūko vai raksti kā augstāk |
| Pārvietot bez pārdēvēšanas | Zīmulis → ieklikšķini mērķa mapē → izvēlies piesprausto pašreizējo faila nosaukumu |
| Pārdēvēt uz vietas | Divreiz <kbd>F2</kbd> (pirmais nospiediens iet uz iekļauto virsrakstu, otrais uz galveni) |
| Pārlēkt uz citu glabātavu, mājām vai disku | Klikšķini uz glabātavas nosaukuma |
| Atvērt failu ārpus glabātavas | Glabātavas nosaukums → izvēlies vietu → pārlūko → izvēlies failu (tikai lasāms līdz *Rediģēt kā tekstu*) |
| Atcelt jebko | <kbd>Esc</kbd> vai klikšķis ārpus galvenes joslas |

## Iestatījumi

| Iestatījums | Iespējas | Noklusējums | Ko tas dara |
| --- | --- | --- | --- |
| **Līdzinājums** | Pa kreisi / Centrēts / Pa labi | Pa kreisi | Kur ceļš sēž galvenes rindā. *Centrēts* atbilst Obsidian klasiskajam izskatam. |
| **Atdalītājs** | Jebkura rakstzīme | `/` | Atdalītājs, ko zīmē starp segmentiem. Sešas viena klikšķa sagataves (`/ > ▸ › \ •`) sēž teksta lauka priekšā. |
| **Rādīt glabātavas nosaukumu** | Ieslēgts / Izslēgts | Ieslēgts | Vai pati glabātava ir ceļa pirmais segments. Izslēdzot šis segments kļūst par 🏠 ikonu, nevis pazūd, tāpēc ceļš joprojām sākas noklikšķināmā vietā. |
| **Mapes nosaukums atver sarakstu** | Ieslēgts / Izslēgts | Ieslēgts | Samaina to, ko dara mapes nosaukums un atdalītājs aiz tā — sk. [tabulu augstāk](#ceļa-josla). Ar [Folder notes](obsidian://show-plugin?id=folder-notes) atdalītājs atver mapju piezīmes. Pārdēvēšanas/pārvietošanas režīmā nekad neattiecas. |
| **Rādīt slēptos failus** | Ieslēgts / Izslēgts | Izslēgts | Vai slēptie faili un mapes tiek rādīti sarakstos. Aizsardzība pret pārrakstīšanu ir spēkā jebkurā gadījumā. |
| **Piekļuve ārējiem failiem** | Ieslēgts / Izslēgts | **Izslēgts** | Vai glabātavas nosaukums atver vietu sarakstu. Izslēgtā stāvoklī nekas spraudnī nekad neskatās aiz šīs glabātavas. |

## Ikonu nomaiņa

Lure zīmē trīs ikonas: glabātavas saknes ikonu (kad **Rādīt glabātavas nosaukumu** ir izslēgts), pārdēvēšanas/pārvietošanas pārslēdzēju un piekaramo atslēgu, kas sargā rakstīšanu ārpus glabātavas. Visas var nomainīt no motīva vai CSS fragmenta — norādi aizvietojošo zīmi un paslēp komplektā nākošo vienā noteikumā:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* Piekaramajai atslēgai ir divi stāvokļi; `.is-active` ir atvērtais. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}

.lure-unlock-btn.is-active {
	--lure-icon-glyph: "🔓";
}
```

`--lure-icon-glyph` pieņem visu, kas ir derīgs CSS `content` vērtībā, tāpēc `url(...)` der attēlam tikpat labi kā teksta vai emocijzīmes rakstzīmei. Atstāj `--lure-icon-svg` mierā, ja gribi paturēt Lucide ikonu un savu zīmi uzzīmēt tai blakus.
