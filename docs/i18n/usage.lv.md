<!-- docs/usage.md tulkojums — stāvoklis: commit 94b1372.
     Mašīntulkojums (Claude Sonnet 5), kuru nav pārbaudījuši dzimtās
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

Ja mapes piezīme ir tā pati, ko tu jau lasi, klikšķis tā vietā parāda mapi — nav nekā, ko atvērt, kas jau nebūtu ekrānā, un tas vienmēr ir bijis otrā piespiediena nozīme.

Ja uzstādīts [Folder notes](obsidian://show-plugin?id=folder-notes), tas pats klikšķis tā vietā atver šīs mapes piezīmi, **jebkurā dziļumā**: piezīme šeit tiek noteikta pēc šī spraudņa paša konvencijas, nevis atstāta tā ziņā. Šis spraudnis atpazīst tikai tās mapes, kuras tas ir atzīmējis, kas ceļā vairāk nekā vienu mapi dziļumā nav neviena, tāpēc piespiediens, kas atvēra augšējā līmeņa mapes piezīmi, dziļāk agrāk vairs neko nedarīja. Pārējie divi mapju piezīmju spraudņi nepublicē konvenciju, ko nolasīt, un nekad nepretendē uz rindu, tāpēc ar tiem atdalītājs parāda mapi kā vienmēr. Tas ir vienīgais atrastais mapju piezīmju spraudnis, kas pretendē uz galvenes ceļu; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) un [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) pārvalda mapju piezīmes, bet neklausās klikšķi uz ceļa joslas, tāpēc ar tiem atdalītājs parāda mapi kā parasti. Skati [saderību](../compatibility.md#verified-against).

Atdalītājs ir **pasvītrots tikai tad, ja mapei pirms tā tiešām ir mapes piezīme**, tāpēc pasvītrojums ir solījums, ka tur ir kaut kas atverams — jebkurā dziļumā, kamēr darbojas [Folder notes](obsidian://show-plugin?id=folder-notes), jo piezīme šeit tiek noteikta, nevis atstāta šī spraudņa ziņā to atzīmēt. Ja darbojas cits spraudnis, nekas nav pasvītrots un nekas neatveras: atdalītājs parāda mapi, tāpat kā bez jebkāda mapju piezīmju spraudņa. Katrs atdalītājs abos gadījumos paliek noklikšķināms — tāds bez pasvītrojuma parāda un izvērš savu mapi sānjoslā, ko joprojām signalizē kursors. Vienlaikus pasvītrojums nozūd no mapes nosaukuma: ar ieslēgtu maiņu nosaukums atver sarakstu, tāpēc atzīmēt to kā saiti uz piezīmi būtu meli.

**Pārdēvēšanas/pārvietošanas režīms pārspēj abus**, lai ko teiktu iestatījums: kamēr pārvietošana ir iesākta, nekas rindā neatver mapi, jo atvērt kādu nozīmētu pārvietošanu pamest. Mapju nosaukumi tiek atlasīti rediģēšanai, un atdalītāji nolaižas — abi ir veidi, kā izvēlēties galamērķi — un pasvītrojums pazūd, lai parādītu, ka atvēršana ir apturēta.

**Glabātavas sakne** ir vienīgais segments, kas nav ceļa segments. Tai nav vecāka, no kura uzskaitīt kaimiņus, tāpēc tā tā vietā atver [vietu sarakstu](#pārlūkošana-ārpus-glabātavas) — tavas pārējās glabātavas, mājas mapi, failu sistēmas sakni un pievienotos diskus.

## Glabātavas pašas atdalītājs

Atdalītājs tūlīt aiz glabātavas nosaukuma apzīmē pašu glabātavu, nevis mapi,
tāpēc tas dara to, ko neviens cits atdalītājs nevar:

| | Pirmais klikšķis | Nākamais klikšķis |
| --- | --- | --- |
| **Ar sākuma lapas spraudni** (lapa, kas tevi sagaida, atverot Obsidian) | Atver šo lapu šajā rūtī | Salauž faila koku prom |
| **Bez tā** | Salauž faila koku prom | Atjauno tieši to, kas bija atvērts |

Parasti klikšķi, nevis dubultklikšķis: kad lapa ir atvērta, atdalītājam
vairs nav ko atvērt, tāpēc nākamais piespiediens ir salikšana — lai kā ilgi
tu ar to gaidītu.

Tas ir **pasvītrots**, kad ir sākuma lapa, ko atvērt, kas ir tas pats
solījums, ko dod mapes atdalītājs: kaut kas tur ir. Salikšana ir pārslēdzama —
nākamais piespiediens atjauno tieši tās mapes, kas bija atvērtas, un tikai
tās, tāpēc koks, ko biji sakārtojis, netiek zaudēts, tikai palūkojoties uz
kaut ko citu.

## Rūts bez faila

Tukša cilne, grafs un jebkas cits, kas nenosauc nevienu failu, saņem savu
rindu: glabātava, tad viens segments, kas pasaka, ko rūts satur.

```
my-vault / :blank      a new tab
my-vault / :graph      the graph, local or global
my-vault / :<type>     anything else with no file
```

**Pašas glabātavas saknes saraksts** piedāvā arī šīs lapas zem mapēm un
piezīmēm, kas tajā tiešām ir: izvēlies tur `:graph` vai `:search`, un rūts
atver šo skatu, tieši tāpat kā izvēloties piezīmi atveras piezīme. Kādas
lapas eksistē, tiek nolasīts no Obsidian, nevis pierakstīts šeit — katrs
skats, kas neeksistē, lai parādītu failu, tāpēc spraudnis, kas reģistrē tādu
(sākuma cilne, kalendārs), parādās bez tā, ka šis spraudnis par to jebko
zinātu. Skati, kam vajadzīgs fails — Markdown, PDF, attēli, kanvasi, bāzes —
netiek piedāvāti: tiem nav ko rādīt.

Kols ir būtība — nevienu failu vai mapi nevar nosaukt `:graph`, tāpēc rindu
nevar sajaukt ar ceļu, ko varētu atvērt. Nosaukums nāk no skata tipa, nevis
no Obsidian pašas terminoloģijas, tāpēc tas izskatās vienādi neatkarīgi no
saskarnes valodas, un beigu `-view` tiek nomests: sākuma cilnes spraudnis
reģistrē savu skatu kā `home-launcher-view`, un rinda saka
`:home-launcher`.

Klikšķis uz tukšās vietas vai uz paša nosaukuma **atver lauku glabātavas
saknē**: raksti ceļu, un <kbd>Enter</kbd> atver to šajā pašā rūtī, ar to
pašu papildināšanu, to pašu sarakstu un to pašu sarkano lauku, kas piedāvā
izveidot to, kā vēl nav. Tukša cilne ir laba vieta, kur ierakstīt, uz kurieni
gribi doties, kas tai arī paredzēts.

Nosaukums ir tikai nosaukums un nekas vairāk: nav saraksta, nav vilkšanas,
nav pārdēvēšanas. Sānjoslu rūtis tiek atstātas pilnīgi mierā — atsaišu rūts
patur nosaukumu, ko tai dod Obsidian.

Kanvasiem, PDF, attēliem un bāzēm nekas no tā nav vajadzīgs. Tie ir faili,
tāpēc tie saņem parastu ceļa joslu.

## Segmenta noklikšķināšana: nomaini to pret kaimiņu

Klikšķis uz mapes nosaukuma atlasa **šīs mapes nosaukumu** teksta laukā un atver saraksta skatu mapei **vienu līmeni augstāk** — tās vecākam. Rakstot vai izvēloties ierakstu, šī mape tiek nomainīta pret kaimiņu, bet viss zem tās paliek neskarts, tāpēc `Projekti/2026/Sākums.md` → klikšķis uz `2026` → izvēlies `2025` dod tev `Projekti/2025/Sākums.md`.

Klikšķis uz **piezīmes nosaukuma** darbojas tāpat pret savu mapi un atlasa nosaukumu **bez tā paplašinājuma** — pārdēvēšana ir bieža darbība, un rakstīšana tieši pāri atlasei, kas ietvēra `.md`, agrāk nejauši mainīja faila tipu. Paplašinājums paliek redzams vienu taustiņa piespiedienu tālāk: <kbd>→</kbd> to sasniedz, un dubultklikšķis, kas paplašina uz visu rindu, paņem visu kopā.

Klikšķis uz mapes jau ir atlasījis vienu segmentu, tāpēc **vēl viens klikšķis** paplašina atlasi uz visu rindu — uz šo mapi *un* visu zem tās — un rakstīšana tad aizstāj atlikušo ceļu uzreiz. Navigācijas un pārdēvēšanas/pārvietošanas režīmā tas darbojas vienādi.

Tas attiecas tikai uz turpinājumu tam klikšķim, kas lauku atvēra. Kad lauks reiz ir izmantots, tas uzvedas kā jebkurš cits teksta lauks: klikšķis novieto kursoru, dubultklikšķis paņem vārdu, trīskāršais — rindu.

Jebkurā gadījumā atlikušais ceļš paliek redzams ap ievades lauku — kā žetoni pirms tā un kā neatlasīts teksts aiz tā, tāpēc pilnais ceļš nekad nepazūd no galvenes. Raksti, lai aizstātu atlasi, vai spied <kbd>→</kbd>, lai to paturētu un rediģētu tālāk no turienes. Saraksts uzskaita visu mapi neatkarīgi no tā, kas ir sākotnēji ievadīts; tas sāk filtrēt tikai tad, kad tiešām sāc rakstīt.

## Nolaišanās pa atdalītāju

Klikšķis uz atdalītāja (ar izslēgtu **Mapes nosaukums atver sarakstu**) nolaižas mapē pirms tā: saraksts rāda *šīs* mapes saturu, bet atlikušais ceļš atveras atlasīts laukā. Izvēloties mapi, tā tiek pievienota ceļam un uzreiz atveras nākamais saraksts, tāpēc vari noklikšķināt sev ceļu lejup pa koku, nepametot galvenes rindu.

## Saraksts atveras tur, kur tu esi

Saraksts atveras uz ieraksta, kurā tu atrodies — piezīmes, kurai šī josla
pieder, vai, ja mapes klikšķis ir uzskaitījis tās vecāku, uz šīs mapes —
nevis uz pirmās rindas. Mapē ar divsimt piezīmēm pirmā rinda ir tālu prom no
tevis.

**Ritenītis virs nosaukuma atver tā sarakstu un pārvietojas pa to.** Pirmais
pagrieziens atver to pašu sarakstu, ko atver klikšķis uz nosaukuma, un katrs
nākamais pagrieziens pārceļ izcēlumu par vienu rindu, ieliekot to, uz ko
norādi, laukā tieši tāpat kā ar bulttaustiņiem — tā kaimiņu var atrast un
paņemt bez tastatūras. Griešana ārā jebkurā galā atdod tavu tekstu atpakaļ.
Rinda ar garāku ceļu nekā rūts atbild uz ritenīti ar ritināšanu sāniski, un
šis nolasījums uzvar, kamēr tas attiecas.

Saraksts ir **tik augsts, cik ļauj logs**. Obsidian ierobežo savus
ieteikumu sarakstus līdz 300 pikseļiem, lai kas būtu zem tiem; šis stiepjas
līdz loga apakšai, apstājoties dažus pikseļus pirms malas, un ritina tikai
tad, kad mapē ir vairāk nekā tas. Tas ir **ne platāks par ceļa joslu**:
nosaukums, kas neietilpst, tiek saīsināts tāpat, kā saīsinās rinda, un
parādīts pilnībā, kad uz to norādi.

Pārvietošanās pa sarakstu **ieliek to, uz ko norādi, laukā** — ar
bulttaustiņu vai ar peles turēšanu virs — tā segmenta vietā, kuru rediģēji,
atstājot pārējo ceļu stāvam, tāpēc rinda, uz kuras esi, ir arī ceļš, ko tu
saņemtu.

Atlikušais ceļš tiek rādīts **tikai tik tālu, cik tas pastāv zem tā, uz ko
norādi**. Ja esi vienā mapē ar `2026/piezīme.md` aiz segmenta, ko rediģē,
norādīšana uz mapi, kurai ir `2026` ar `piezīme.md` tajā, parāda visu; tāda,
kurai ir `2026`, bet nav piezīmes, parāda `2026`; tāda, kurai nav nekā,
neparāda neko aiz nosaukuma, un tāpat neko neparāda fails, jo zem tā nekas
nedzīvo. **Tas, ko tu esi rakstījis**, patur savu pilno ceļu, kamēr to
raksti, lai cik maz tā vēl būtu — pusuzrakstīts nosaukums nav lēmums.
Nosaukuma ievadīšana ir lēmums, un tas, kas no tā nav sasniedzams, tiek
nogriezts tajā punktā; mapes, ko tu veido, ir tās, ko raksti *aiz* tā, kur
<kbd>Enter</kbd> tās arī izveido.
Ievadītais teksts tiek saglabāts: pārvietošanās **prom no jebkura saraksta
gala** — uz augšu no pirmā ieraksta vai uz leju no pēdējā — to atlaiž un
atliek tavu tekstu atpakaļ, bez izcēluma. Lauks ir pieturas punkts riņķī
tāpat kā jebkurš ieraksts, tāpēc aplis iet cauri tam, nevis lec no pēdējās
rindas uz pirmo, un turpinot no turienes, apstaigā līdz otram galam.

**Peles noņemšana no saraksta** arī atliek tavu tekstu atpakaļ — un atdod
izcēlumu tam, kam tas piederēja pirms peles ierašanās: ierakstam, uz kuru
biji devies ar bulttaustiņiem un kas atkal rāda laukā, vai tam, uz kura
saraksts atvērās, jo tā ir vieta, kur tu esi. Turēšana virs ir skatīšanās
veids, nevis izvēles veids, tāpēc peles pārvilkšana pāri sarakstam tev nekā
nemaksā.

Pats saraksts nemainās, kamēr pa to pārvietojies — tas turpina filtrēt pēc
tā, ko esi ierakstījis, nevis pēc tā, kas laukā iepriekš parādīts — tāpēc
ieraksts zem tevis nekad nepārbīdās prom no nākamā piespiediena. Rakstīšana
aizstāj priekšskatījumu un filtrē kā parasti.

**Tas, pēc kā filtrē**, ir segments, ko tu rediģē, nevis viss laukā. Klikšķis
uz mapes atstāj atlikušo ceļu tur aiz nosaukuma, ko tu maini, tāpēc filtrēt
pēc visa lauka nozīmētu meklēt bērnu, ko sauc `2026/Sākums.md`, un neatrast
neko — saraksts aizvērtos jau pēc pirmā taustiņa piespiediena, lai ko tu
rakstītu. **Paplašinājums arī tiek izslēgts**, kamēr kursors ir pirms punkta:
klikšķis uz piezīmes nosaukuma atlasa celmu un atstāj `.md` aiz tā, tāpēc
viena burta ierakstīšana padara lauku par `a.md`, un tas nav tas, ko tu
meklē. Novieto kursoru aiz punkta, un paplašinājums skaitās tāpat kā jebkas
cits. Nosaukums, kas patiešām neatbilst nekam, tāpat aizver sarakstu, jo
tukšs saraksts ir godīga atbilde.

Priekšskatījums **nomaina tikai šo vienu segmentu un atstāj pārējo ceļu
mierā**: norādīšana uz mapi jautā, kas notiktu, ja šis solis būtu tas, nevis
izmet ceļu prom. Nokāpjot no saraksta, tiek atjaunots teksts *un* atlase,
kāda bija, tāpēc nākamais taustiņa piespiediens aizstāj to, ko tas būtu
aizstājis, pirms tu paskatījies.

## Saraksta rindas ir īstas failu pārvaldnieka rindas

Katrs saraksta fails un mape uzvedas kā tā rinda Failu pārlūkā:

- **Labais klikšķis** rāda to pašu konteksta izvēlni, ko dod Failu pārlūks, ierakstu pēc ieraksta — ieskaitot tos, ko pievieno citi spraudņi. Mape piedāvā *Jauna piezīme*, *Jauna mape*, *Jauns kanvass*, *Jauna bāze*, *Izveidot kopiju*, *Pārvietot mapi uz…*, *Meklēt mapē*, *Kopēt ceļu*, *Rādīt sistēmas failu pārlūkā*, *Pārdēvēt…* un *Dzēst*; fails piedāvā savu atbilstošo variantu, ieskaitot *Atvērt noklusējuma lietotnē*.
- **Velc** ierakstu jebkur, kur Obsidian pieņem failu: uz redaktoru, lai ievietotu saiti, uz mapi Failu pārlūkā, lai to pārvietotu, uz ciļņu joslu, lai to atvērtu.

Izvēlņu formulējumi nāk no paša Obsidian tulkojumiem, tāpēc tie sader ar pārējo lietotni jebkurā valodā.

## Ceļa ierakstīšana

- Noklikšķinot uz **tukšās vietas** pirms vai pēc ceļa joslas, atveras teksta lauks visam ceļam *un piezīme tiek parādīta failu pārvaldniekā*, tāpēc koks seko rūtij bez otras darbības. Tas **skaita tavus klikšķus**: viens izvēlas ceļu bez paplašinājuma, divi — ar to, trīs izvēlas ceļu, kādu zina dators. Noklikšķinot uz **faila nosaukuma**, skaitīšana notiek tāpat, bet sākas par vienu pakāpi zemāk, uz paša nosaukuma: viens izvēlas to bez paplašinājuma, divi — ar to, un trīs paplašina to līdz visam ceļam *no tavas glabātavas mapes* — formai, kāda vajadzīga saitei vai meklējumam, nevis datoram. Ceturtais klikšķis sasniedz to pašu.
- **Skaitīšana pieder tam laidienam, kas atvēra lauku.** Kad tas ir apstājies — tu esi pauzējis, rakstījis vai vienreiz noklikšķinājis kaut kur tekstā — lauks ir parasts teksta lauks, un dubultklikšķis tajā izvēlas vārdu zem kursora, tāpat kā jebkur citur. Raksti pāri iezīmētajam vai rediģē uz vietas. (Noklikšķinot uz paša faila nosaukuma, tiek izvēlēts tikai faila nosaukums; sk. iepriekš.) Labais klikšķis uz tās pašas vietas **nokopē** tos pašus trīs, pie diviem, trim un četriem klikšķiem — viena poga tos parāda, otra tos paņem. **Viens** labais klikšķis atver ceļu ar visu iezīmētu un piedāvā to, ko ar to var darīt: izgriezt, kopēt, ielīmēt, iezīmēt visu — Obsidian paša vārdiem.
- **Vidējais klikšķis uz tukšās vietas** ielīmē pāri ceļam: lauks atveras visam ceļam *no glabātavas saknes*, tāpēc starpliktuve aizstāj to visu, un tas, kas nonāk laukā, ir iezīmēts. <kbd>Enter</kbd> tad dodas turp.
- **<kbd>Ctrl</kbd>+klikšķis uz tukšās vietas** atver šo piezīmi vēlreiz savā cilnē, uzzibsnīta failu pārvaldniekā, lai otro cilni nesajauktu ar pirmo. Uz **glabātavas nosaukuma** <kbd>Ctrl</kbd>+klikšķis vai vidējais klikšķis atver tukšu cilni, kas atrodas glabātavas saknē ar jau redzamu sarakstu — vieta, kur ierakstīt ceļu no jauna.
- Rakstot, kamēr ir redzama ceļa josla, beigu segments pārvēršas par mazu ievades lauku ar dzīvu automātisko papildināšanu, kas ierobežota līdz pašreizējai mapei.
- **Var ierakstīt ceļu no failsistēmas saknes.** `/` tukša lauka priekšā atver to, nevis papildina pakāpi, katra svītra pēc tā pieder tam, un `~` ir tava mājas mape. Kamēr laukā ir šāds ceļš, saraksts rāda datoru, nevis glabātavu, un rindas sākuma segments atkāpjas — tas, kas ir laukā, sākas no saknes un to arī saka. Ja *Piekļuve ārējiem failiem* ir izslēgta, saraksts paliek tukšs, jo <kbd>Enter</kbd> tik un tā noraidītu šo ceļu.
- **Var ierakstīt lapu, ne tikai izvēlēties to.** `:graph`, `:search` vai ko nu reģistrē tavi spraudņi — apzīmējumus, ko piedāvā [glabātavas saknes saraksts](#rūts-bez-faila). Ierakstot kolu jebkur, tie tiek izsaukti, jo nevienā nosaukumā tā nevar būt, un <kbd>Enter</kbd> atver šo skatu šajā rūtī. `:graph`, ierakstīts **mapē**, atver šīs mapes grafu — grafu, filtrētu ar `path:"that/folder"` tā paša meklēšanas laukā, it kā tas būtu ierakstīts tur; glabātavas saknē tas ir viss grafs. <kbd>Tab</kbd> pabeidz nosaukumu tāpat, kā tas pabeidz mapes nosaukumu — un paņem līdzi visu pārējo, ko lauks vēl saturēja, jo lapa nav nevienā mapē un zem tās nekas neatrodas. Noklikšķinot uz apzīmējuma šādā lapā, atveras lauks, kurā tas jau ir.
- **Tas, ko uzrakstītu <kbd>Tab</kbd>, tiek piedāvāts, tev rakstot.** Kamēr katrs pēctecis, kas sākas ar to, ko esi uzrakstījis, turpina piekrist, šī vienprātība parādās aiz kursora, iezīmēta; kur tie pārstāj piekrist, tur soli veic tas, kas ved pie pirmā no tiem — vai pie tās rindas, uz kuru tu pārgāji ar bultiņu, jo tā ir tā, uz kuru dotos <kbd>Tab</kbd>. Rakstot pāri nosaukumam, tā paplašinājums paliek stāvam un tiek piedāvāts tā priekšā, un tikko izvēlēta mape piedāvā savu pirmo soli, tāpēc nav tāda stāvokļa, kurā nekas netiek piedāvāts un <kbd>Tab</kbd> tik un tā kaut ko uzraksta. Raksti šos burtus, un tie tiek aprīti pa vienam; raksti ko citu, un tas ir prom. <kbd>Tab</kbd> vai <kbd>End</kbd> paņem to veselu, <kbd>→</kbd> paņem no tā vienu burtu, <kbd>Backspace</kbd> paņem to atpakaļ, neaiztiekot nevienu tavis ierakstītu burtu, un nekas netiek piedāvāts atkal, kamēr tu neraksti — tāpēc vienmēr ir izeja no nosaukuma, kuru negribēji. Pēc <kbd>Tab</kbd> nospiešanas nākamais solis tiek piedāvāts uzreiz, tāpat kā pēc ierakstīta burta. To, ko rāda saraksts, filtrē tas, ko esi uzrakstījis **tu**, nekad ne tas, kas tika piedāvāts.
- **Piedāvājumi ignorē burtu reģistru.** `sch` piedāvā `Schemes`, rakstīts tā, kā rakstīts nosaukums; piedāvājuma atsaukšana atdod tavus burtus tā, kā tu tos ierakstīji. Kur pastāv gan `Test`, gan `test`, tiek piedāvāts tas, kas rakstīts tā, kā tu ierakstīji.
- Laukā piedāvātā daļa vienkārši ir **iezīmēta**. Sarakstā tā ir izklāstīta: katra rinda rāda to savu daļu, kas **sakrita ar tavu rakstīto, treknrakstā**, lai kur nosaukumā tā sakristu — `kick` atrod `Weekly kickoff` un to arī parāda. **Nosaukumi, kas sākas ar tavis rakstīto, ir pirmajā vietā**, pirms tiem, kas to tikai satur, un tie ir atzīmēti ar līniju gar malu: **zila**, kur tiem kopīgs vairāk par tavis rakstīto, tāpēc <kbd>Tab</kbd> visiem tiem var kaut ko pievienot, un **zaļa** uz tā zara, kuru izvēlas piedāvājums tur, kur tie šķiras — `te` ar `test1`, `test2`, `text1` un `text2` piedāvā `te`+`st`, tāpēc abas `test` rindas ir zaļas, bet abas `text` rindas patur vienkāršo līniju. Katra no tām **pasvītro soli, kuru <kbd>Tab</kbd> sperts virzienā uz to**, ne tikai to, kas tiek piedāvāts, un pasvītrojums seko piedāvājumam, tam mainoties.
- **Rakstīšana atlaiž iezīmēto rindu.** Saraksts atveras uz ieraksta, kurā tu atrodies, bet, tiklīdz sāc rakstīt, runa ir par kaut ko citu, un iezīmējums, ko neviens nav ielicis, lasās kā jau izdarīta izvēle.
- Piedāvājums vienmēr ir tikai teksts tavā priekšā: burti, ko esi ierakstījis, paliek uzrakstīti tā, kā tu tos ierakstīji, kamēr raksti, un piedāvājuma pieņemšana pārraksta nosaukumu tā, kā to raksta mape, jo ceļam jāsakrīt ar disku. `sk` + <kbd>Tab</kbd> sasniedz `Skyline`, nevis `skyline`.
- **Lauks valkā tā krāsu, ko nosauc**, tādu pašu krāsu kā tā rinda sarakstā: violeta piezīmei, ieskaitot mapes pašas piezīmi, oranža visam, kas nav piezīme, zila piezīmei, uz kuras tu atrodies. Rinda, no kuras lauks paņem krāsu, ir tā, kas nosaukta tieši tā, kā tu ierakstīji, vai, ja tādas nav, iezīmētā, vai, ja arī tādas nav, pirmā, uz kuru vēl ved tavis rakstītais.
- **Lauks kļūst sarkans, tiklīdz nekas neatbilst tam, kas tajā ir** — nav ne faila, ne mapes, un neviena saraksta rinda vairs uz to neved. No šejienes <kbd>Enter</kbd> izveido to, kas ir laukā, nevis atver to, un sarkanā krāsa to saka jau pirms apstiprināšanas. Tā nekad neparādās tīmekļa adresei, kas nav vieta šajā datorā, kur meklēt. **Viss** lauks tiek iekrāsots, nevis tikai daļa, kuras trūkst: teksta lauks nevar iekrāsot pusi no sava paša satura. Pārdēvēšanas/pārvietošanas režīmā lauks patur savu sarkano krāsu nosaukumam, kas ir nelikumīgs — tur nosaukums, kuram nekas neatbilst, ir jēga. Tas, ka nosaukums **jau ir aizņemts**, tiek risināts, kad to apstiprini, ar dialogu, kas jautā, kas jādara ar failu, kurš stāv ceļā — sk. [Nosaukums, kas ir aizņemts](#nosaukums-kas-ir-aizņemts): katrs nosaukums, kas rakstīts virzienā uz `Notes.md`, iziet cauri nosaukumiem, kas paši var būt faili, tāpēc to atzīmēšana burtu pa burtam brīdinātu par nosaukumu, kuru vēl neviens nebija prasījis.
- `/` apstiprina segmentu, ko raksti, un nolaižas tajā, saglabājot visu, kas ir aiz tā — to pašu, ko dara <kbd>Tab</kbd>, ieejot iekšā.
- <kbd>Backspace</kbd> tukšā laukā aiziet atpakaļ uz vecāka mapi, no jauna atverot tās nosaukumu ar kursoru beigās. To pašu dara <kbd>Backspace</kbd> paplašinājuma priekšā, kas palicis viens pats — lauks, kurā ir tikai `.md`, nenosauc neko — un vientuļais paplašinājums aiziet līdzi.
- **Noklikšķinot uz mapes, kamēr lauks ir atvērts, tas paplašinās līdz visam ceļam pēc tās mapes**, ar iezīmētu pašas mapes nosaukumu — to pašu, ko klikšķis uz tās būtu darījis no rindas, un viss, ko lauks saturēja, tiek saglabāts. Tas, kas ir laukā, ir rindas aste, kamēr tas ir atvērts, tāpēc mape, uz kuras noklikšķina augstāk, atdod ceļu, ko sesija ir gājusi, nevis to, ar kuru sākās piezīme.
- **Aizejot ar bultiņu no lauka priekšpuses, tajā ienāk mape pirms tā**, it kā viss ceļš būtu viena teksta rinda. Ar kursoru pašā sākumā <kbd>←</kbd> ieved šo mapi laukā un nolaižas tās nosaukuma beigās, <kbd>Ctrl</kbd>+<kbd>←</kbd> nolaižas tā sākumā, un <kbd>Home</kbd> ieved visas mapes līdz pat glabātavas saknei — vai līdz vietai, ko esi izvēlējies ārpus glabātavas — uzreiz. Turot <kbd>Shift</kbd>, iezīmējums stiepjas pār to, kas ienāca. macOS vārda lēciens ir <kbd>Option</kbd>+<kbd>←</kbd>, un <kbd>Cmd</kbd>+<kbd>←</kbd> ir <kbd>Home</kbd>. Jebkur, izņemot priekšpusi, tie ir parasti teksta taustiņi. **Kamēr saraksts ir redzams, <kbd>Home</kbd>, <kbd>End</kbd>, <kbd>PgUp</kbd> un <kbd>PgDn</kbd> pieder tam** — pirmā rinda, pēdējā rinda, lapa uz augšu, lapa uz leju, lapa esot tas, ko rāda saraksts, iezīmētajai rindai paturot savu vietu ekrānā — un sasniedz tekstu tikai tad, kad tas ir aizvērts; <kbd>Shift</kbd>+<kbd>Home</kbd> ieved visas mapes arī tad, kad saraksts ir atvērts.
- **Saraksts seko kursoram.** Izvēlies citu ceļa daļu — velc pāri tai, klikšķini tajā vai pārvietojies ar bultiņām — un saraksts rāda *tās* mapes pēctečus, nevis tās, uz kuras lauks tika atvērts. Mape tiek noteikta no žetoniem plus tās lauka daļas, kas atrodas pirms kursora, tāpēc, noklikšķinot uz `Notes.md` laukā, kas satur `2026/Notes.md`, tiek rādīts tas, kas ir `2026`. Norādot uz rindu, tā tiek ierakstīta segmentā, kurā ir kursors, un noņemot rādītāju no saraksta, tu atgūsti savu tekstu un iezīmējumu tieši tādus, kādi tie bija.
- **Iezīmējuma izvilkšana ārā no lauka** un tā atlaišana kaut kur citur to neaizver. Klikšķis, kas sākas laukā, pieder rediģēšanai, lai cik tālu tas ceļotu; tikai klikšķis, kas *sākas* ārpusē, ir klikšķis prom.
- <kbd>Enter</kbd> apstiprina — un, ja lauks nenosauc pilnīgi neko, kā tukšā mapē, kur nekad nebija ko papildināt, tas saka *Fails nav izvēlēts* un paliek atvērts, nevis aizveras, it kā kaut kas būtu izvēlēts. <kbd>Esc</kbd> vai klikšķis citur atceļ atpakaļ uz faila īsto ceļu. Pietiek ar vienu <kbd>Esc</kbd> nospiešanu: tā aizver sarakstu, atstāj lauku un atdod fokusu atpakaļ piezīmei, nevis prasa pa nospiešanai katrai kārtai.

Laukam nav nekādu rotājumu — ne rāmja, ne apmales — tāpēc tas lasās kā pats ceļa teksts un rakstot pats aug.

## Katra rindas daļa, pogu pēc pogas

Viss skats uzreiz. Labā klikšķa kolonna rāda, ko dod **viens** piespiediens; šī poga arī skaita piespiedienus, un [tai veltītajā tabulā](#labais-klikšķis-viens-piespiediens-divi-trīs) zemāk atrodams otrais, trešais un ceturtais. Šeit pieņemts, ka **Mapes nosaukums atver sarakstu** ir ieslēgts, kas ir noklusējums — ja tas izslēgts, mapes nosaukums un atdalītājs samainās vietām pirmajā kolonnā, kā teikts [tabulā augšā](#ceļa-josla).

| Kur nospiež | Klikšķis | Dubultklikšķis | <kbd>Ctrl</kbd>+klikšķis vai vidējais klikšķis | Labais klikšķis | Kaut ko uzmet virsū |
| --- | --- | --- | --- | --- | --- |
| **Glabātavas nosaukums** | Atver atrašanās vietu sarakstu — citas glabātavas, mājas mapi, failsistēmas sakni, pievienotus diskus. Pēc noklusējuma izslēgts; ja izslēgts, tā vietā parāda glabātavu Failu pārvaldniekā | Iezīmē **visu absolūto ceļu**. Šis saraksts atveras ar ceļu jau ierakstīts laukā, un iezīmēta tikai glabātavas paša daļa; otrs piespiediens paplašina uz pārējo. Ja saraksts izslēgts, nav ko paplašināt | Tukša cilne, kas atrodas glabātavas saknē ar sarakstu jau atvērtu — vieta, kur ierakstīt ceļu no jauna | Glabātavas pašas konteksta izvēlne: ko var izdarīt ar glabātavu, ko nosauc šis segments | **Fails** pārvietojas uz glabātavas sakni. **Teksts** atver lauku saknē, lai nosauktu piezīmi, par ko tam jākļūst |
| **Mapes nosaukums** | Izvēlas šo mapi rediģēšanai, tās vecākmapes saturu uzskaita zemāk | Pārraksta šo mapi un visu, kas zem tās | Atver šo mapi jaunā cilnē | Šīs mapes konteksta izvēlne — tā pati, ko dod Failu pārvaldnieks | **Fails** pārvietojas uz šo mapi. **Teksts** atver lauku tur, lai nosauktu piezīmi, par ko tam jākļūst |
| **Atdalītājs** | Atver mapi, kas ir pirms tā — tās mapes piezīmi, ja darbojas mapju piezīmju spraudnis un tāda pastāv, citādi parāda un izvērš to Failu pārvaldniekā | **Izveido šīs mapes piezīmi** un pāriet uz to, ja darbojas mapju piezīmju spraudnis un mapei vēl nav piezīmes. Ja piezīme jau ir, šis ir vienkārši atkārtots viens piespiediens | Mapes piezīmi jaunā cilnē, ja tāda pastāv; citādi cilni, kas atrodas šajā mapē ar sarakstu redzamu | To pašu mapes konteksta izvēlni, ko dod nosaukums — tās mapes piezīmes izvēlni, ja tāda ir | Šīs mapes piezīmes beigās, ja tāda ir, tiklīdz apstiprini |
| **Piezīmes nosaukums** | Atver nosaukumu rediģēšanai — mapes paliek kā tagi blakus — iezīmējot visu, izņemot paplašinājumu | Iekļauj iezīmē arī paplašinājumu | Atver piezīmi jaunā cilnē | Faila konteksta izvēlne — tā pati, ko dod Failu pārvaldnieka rinda | Šīs piezīmes beigās, tiklīdz apstiprini |
| **Tukšā vieta** | Atver **visu ceļu** rediģēšanai, iezīmētu līdz pat paplašinājumam. Mapes nonāk laukā kopā ar to, un tieši tāpēc šis ir žests ceļa, nevis nosaukuma, pārrakstīšanai | Iekļauj iezīmē arī paplašinājumu | <kbd>Ctrl</kbd> atver šo piezīmi vēlreiz savā cilnē, iezibinot to Failu pārvaldniekā, lai kopiju nesajauktu ar pirmo. Vidējais klikšķis *nav* šis žests: tas ielīmē pāri ceļam | Iezīmē visu ceļu un piedāvā, ko var darīt ar iezīmētu tekstu | |

**Otrais piespiediens seko pirmajam.** Mapes piezīmes izveide notiek uz tās rindas daļas, kas *atver* šo mapi — pēc noklusējuma tas ir atdalītājs, bet ar izslēgtu maiņu — mapes nosaukums — tas pats mērķis, ko iezīmē pasvītrojums, un tas pats, kam viens piespiediens jau prasa mapes piezīmi. Tas tiek piedāvāts tikai tad, kad darbojas mapju piezīmju spraudnis, jo mapes piezīme ir vienošanās, nevis failsistēmas fakts, un tikai tad, ja mapei vēl nav piezīmes. Kur tā atrodas un kā to sauc, tiek nolasīts no **Folder notes** paša iestatījumiem, tāpēc glabātava, kas savas mapju piezīmes tur mapes blakus vai sauc tās `_index`, saņem tieši tādu; pats fails vienmēr ir Markdown, ko rada šī spraudņa paša noklusējuma izveides komanda un ko tas atrod, lai kāds tips glabātavai iestatīts. Pārdēvēšanas/pārvietošanas režīmā tas neattiecas nemaz — nekas rindā neatver mapi, kamēr pārvietošana ir gaidīšanas stāvoklī.

**Klikšķi uz nosaukuma turpinās.** Četri pakāpieni ir tie paši četri, ko iziet pārdēvēšanas taustiņš, tādā pašā secībā: nosaukums, nosaukums ar paplašinājumu, ceļš no glabātavas, ceļš no sistēmas saknes. Tātad trešais klikšķis sasniedz glabātavas ceļu, bet ceturtais — mašīnas ceļu — tās pašas četras lietas, ko dod <kbd>Tab</kbd> pāri lauka beigām, un tās pašas četras, ko labā poga *kopē* iezīmēšanas vietā.

**Turēšana pār to** ir sava atsevišķa atbilde un nekad neko nemaina: saīsināts nosaukums parādās pilnībā, kamēr uz to rādi, un ikona rindas sākumā rāda, kur glabātava atrodas.

## Labais klikšķis: viens piespiediens, divi, trīs

Katrs rindas mērķis atbild uz labo klikšķi, un tas, cik reizes piespiedīsi, izšķir, ko saņemsi. Tā kā vēl var sekot otrs piespiediens, pirmais gaida apmēram trešdaļu sekundes, pirms rīkoties — tāda ir cena par trīs žestu ievietošanu vienā pogā.

| Kur nospiež | Vienreiz | Divreiz | Trīsreiz |
| --- | --- | --- | --- |
| **Glabātavas nosaukums** | Glabātavas konteksta izvēlne: ko var izdarīt ar glabātavu, ko nosauc šis segments — ieskaitot *Atvērt šo glabātavu*, ja tā nav tā, kurā pašlaik atrodies | Kopē glabātavas nosaukumu | Kopē, kur glabātava atrodas — un ceturtais piespiediens, kur atrodas atvērtais fails |
| **Atdalītājs** | Šīs mapes izvēlne — tās mapes piezīmes, ja darbojas mapju piezīmju spraudnis un mapei tāda ir | | |
| **Mapes nosaukums** | Šīs mapes izvēlne | Kopē mapes nosaukumu | Kopē to un visu, kas pa labi no tā |
| **Piezīmes nosaukums** | Faila izvēlne — tā pati, ko dod Failu pārvaldnieka rinda | Kopē nosaukumu | Kopē to ar paplašinājumu |
| **Tukšā vieta** | | Kopē ceļu no tavas glabātavas mapes, bez paplašinājuma | To pašu, ar to |

Viens piespiediens uz **glabātavas nosaukuma** atver, ko var izdarīt ar to, ko nosauc šis segments. **Glabātavai, kurā pašlaik atrodies**: atvērt to jaunā logā, pārvaldīt glabātavas, kopēt, kur tā atrodas, kopēt tās ID, parādīt to tavā failu pārvaldniekā. **Citai glabātavai**, kas sasniegta caur atrašanās vietu sarakstu, — tas pats, mīnus jaunais logs — kas atvērtu *šo* glabātavu, nevis to — plus vienīgā lieta, ko var piedāvāt tikai glabātava, kurā neatrodies: **Atvērt šo glabātavu**. Obsidian to nosauc pēc tās ID, nevis pēc mapes nosaukuma, jo divas glabātavas var to kopīgi lietot. Vietai, kas vispār nav glabātava — tavai mājas mapei, pievienotam diskam —, nav ID, ko kopēt, un nav nekā, ko atvērt, un izvēlne to parāda, tos nepiedāvājot.

Šī nav Obsidian pati trīs punktu izvēlne, kas pieder starta logam un ko nevar atvērt no strādājošas glabātavas iekšpuses — šīs ir tās pašas pozīcijas, no jauna izveidotas, Obsidian pašas vārdos, ņemtas no tā komandām, lai tās pienāktu tavā valodā. Trīs no šīs izvēlnes pozīcijām apzināti **nav** šeit: *pārdēvēt glabātavu*, *pārvietot glabātavu* un *noņemt no saraksta* — visas iedarbojas uz glabātavas pašas mapi vai uz Obsidian glabātavu reģistru, un to darīt glabātavai, kurā pašlaik stāvi — ar atvērtiem failiem un strādājošiem vērotājiem — tā glabātava tiek salauzta. Atver glabātavu pārvaldnieku (*Atvērt citu glabātavu*) un dari to tur, kur glabātava ir aizvērta.

Divas kopijas uz **tukšās vietas** ir rinda tāda, kā tā ierakstīta — tas, ko grib saite vai meklēšana —, un tās uz **glabātavas nosaukuma** ir ceļi, ko zina failsistēma, tas ir, ko grib jebkas ārpus Obsidian. Katrs piespiediens tur paplašina, kam kopija noder: divi dod glabātavas nosaukumu, trīs — kur glabātava atrodas, četri — kur atrodas atvērtais fails. Obsidian pati velk to pašu robežu savās divās komandās, *no glabātavas mapes* un *no sistēmas saknes*; šeit ārup vērstās atrodas uz segmenta, kas pats atrodas ārpus ceļa.

Tas viss darbojas arī ārpus glabātavas, uz tiem pašiem mērķiem.

Katra kopēšana to paziņo ar paziņojumu, jo kopēšana neatstāj uz ekrāna neko, kas parādītu, ka tā notikusi, un nepareizi saskaitīts piespiediens nedrīkst izskatīties pēc veiksmīga.

## Modifikatori: atvērt kaut kur citur

Piezīmes nosaukums un mapju segmenti uzvedas kā to rindas Failu pārvaldniekā.

| | Uz piezīmes nosaukuma | Uz mapes segmenta |
| --- | --- | --- |
| Vienkāršs klikšķis | Rediģē nosaukumu | Pārlūko šo mapi |
| <kbd>Ctrl</kbd> / vidējais klikšķis | Atver piezīmi jaunā cilnē | Nosūta mapi uz jaunu cilni |
| <kbd>Ctrl</kbd>+<kbd>Alt</kbd> | Sadalījums | Sadalījums |
| Vilkšana | Piezīmi, jebkur, kur Obsidian pieņem failu | Mapi, tāpat — ieskaitot cilņu joslu |

Mape nav kaut kas, ko Obsidian var atvērt, tāpēc tās nosūtīšana uz cilni izdara vienu no divām lietām: atver tās mapes piezīmi, ja darbojas mapju piezīmju spraudnis un tāda ir, vai atver tukšu cilni, kuras ceļa josla jau atrodas šajā mapē — atstājot tev iet tikai nosaukumu. Mapes segmenta nomešana uz **cilņu joslas** dara to pašu, jaunā cilnē tur, kur atlaid — Obsidian cilņu josla pati par sevi pieņem tikai failus, tāpēc mape, kas izvilkta no Failu pārvaldnieka, joprojām tiek tur noraidīta.

## Tab: pabeidz nosaukumu, tad ceļu, tad paplašini iezīmējumu

<kbd>Tab</kbd> pabeidz tāpat kā čaula: **nospiešana paplašina to, ko esi rakstījis, tik tālu, cik tās mapes nosaukumi sakrīt, un apstājas, kur tie atšķiras.** Ieraksti `Sk`, kur tā sākas tikai `Sketches`, un vārds ir pabeigts; ieraksti `Al`, kur tā sākas gan `Alpha-one`, gan `Alpha-two`, gan `Alpine`, un iegūsi `Alp`, jo nākamais burts ir jautājums, uz kuru var atbildēt tikai tu.

Nospied vēlreiz, neko neierakstot, un tas virzās uz vienu nosaukumu — sarakstā iezīmēto rindu vai pirmo — apstājoties pie šī nosaukuma nākamās neskaidrības: `Alpha-`, tad `Alpha-one`. Saraksts atveras tur, kur jau esi, tāpēc tavā pašā mapē pirmā nospiešana virzās uz atvērto piezīmi, nevis uz to, kas kārtojas pirmā.

**Nospiešana nekad neizvēlas starp nosaukumiem tavā vietā.** <kbd>Tab</kbd> ieiet mapē, tiklīdz ierakstītais atstāj tikai vienu kandidātu, vai tiklīdz esi ierakstījis visu mapes nosaukumu un neviena *cita mape* to nepaplašina. Ja tāda ir — `Schemes` blakus `Schemes2026` — <kbd>Tab</kbd> turpina pabeigt garāko nosaukumu; <kbd>Enter</kbd> un saraksts ir žesti, kas nozīmē *tieši šo*.

**Fails** mapi šādi nekad neaiztur. Mape blakus piezīmei ar savu pašas nosaukumu ir mapes piezīme, nevis ceļa atzarojums, un <kbd>Tab</kbd> iet cauri mapēm — tāpēc `Projects` ar `Projects.md` blakus tiek apstaigāts tāpat kā jebkurš cits.

Divas mazākas lietas, kas no tā izriet: laukā nonāk raksts tāds, kā to raksta mape, tāpēc `sk` kļūst par `Sketches`; un tiek aizstāts tikai tas nosaukums, kas tiek rakstīts, tāpēc ceļš ar vēl kaut ko pa labi to saglabā.

Kad rakstīšanas laikā tiek piedāvāts nosaukums, <kbd>Tab</kbd> **ieraksta tieši piedāvāto**: piedāvājums vienmēr ir tas, ko nospiešana ierakstītu, un saraksta pasvītrojums un zaļā līnija saka to pašu, tāpēc tas, ko redzi aiz kursora, ir tas, ko iegūsi. Kur nosaukumi pārstāj sakrist, tas ir solis uz pirmo no tiem — vai uz rindu, uz kuru esi pārvietojies ar bultiņu, ko <kbd>Tab</kbd> ņem, nevis to, kas blakus — tāpēc pirms nospiešanas ej ar bultiņu uz vēlamo vai raksti tālāk par atzarojumu. Tikai tad, kad piedāvājums atstāj *vienu* nosaukumu, tā pati nospiešana tajā ieiet.

Nonākšana pie faila nosaukuma **ir** pirmais pakāpiens — neviena nospiešana netiek tērēta kursora novietošanai nosaukuma beigās, ko tas tūlīt iezīmēs. No turienes nospiešanas vairs nepārvietojas pa ceļu, bet sāk paplašināt iezīmējumu:

1. nosaukums
2. nosaukums ar tā paplašinājumu
3. ceļš no tavas glabātavas mapes
4. ceļš no sistēmas saknes
5. atpakaļ uz ceļa sākumu **tādu, kāds tas tagad ir** — atrodoties tur, kur apstaigāšana sākās, ar pirmo segmentu iezīmētu, gatavu apstaigāt vēlreiz

Ceturtais klikšķis sasniedz to pašu ceturto pakāpienu tieši.

Paplašināšana vienmēr tikai **paplašina**. Nosaukums, kas laukā jau ir vesels — pabeigts ar to pašu taustiņu vai izvēlēts no saraksta — tiek iezīmēts vesels, nevis tam vispirms tiek noņemts paplašinājums: pirmais pakāpiens ir domāts nosaukumam, pie kura apstaigāšana tikko *nonākusi*, kur paplašinājums vēl nav tēma.

Kāpnes ir tur, kur apstaigāšana **nonāk**, nevis kur tā sākas. Noklikšķini uz mapes ceļa vidū, un lauks atveras ar visu, kas zem tās, ar šīs mapes nosaukumu iezīmētu; katrs <kbd>Tab</kbd> tad paņem **vienu** mapi — iezīmējot nākamo, atstājot pārējo ceļu aiz sevis — un tikai tad, kad palicis vairs tikai faila nosaukums, sākas paplašināšana:

| nospiešana | čipi | lauks | iezīmēts |
| --- | --- | --- | --- |
| noklikšķināts `a` | | `a/b/c/leaf.md` | `a` |
| <kbd>Tab</kbd> | `a` | `b/c/leaf.md` | `b` |
| <kbd>Tab</kbd> | `a › b` | `c/leaf.md` | `c` |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf` — pirmais pakāpiens |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf.md` |

**Nosaukums, kas ir iestatīts, ir iestatīts, lai kā to iestatītu.** Pabeigšana ar
<kbd>Tab</kbd>, apstiprināšana ar `/` un izvēlēšanās no saraksta — visi
atstāj rindu tajā pašā vietā ar to pašu ceļu, tāpēc nospiešana pēc žesta
nozīmē to pašu, lai kā tur nonāktu. Agrāk mapes izvēlēšanās no
saraksta iztukšoja lauku, izmetot ceļu, ko tā paša mape sasniegšana ar <kbd>Tab</kbd> būtu saglabājusi.

**Ceļš, ko vēl raksti, seko līdzi vesels.** Iešana tieši tajā mapē, uz kuras balstās pārējais ceļš, nav apgalvojums, ka pārējais eksistē — tā ir veids, kā ceļš tiek uzrakstīts pirms laika, un mapes, ko tas nosauc, ir tās, ko <kbd>Enter</kbd> tūlīt izveidos. Tāpēc, ejot no `Dokumente/plans/untitled.md` uz `Dokumente`, `plans/untitled.md` paliek tavā priekšā neatkarīgi no tā, vai `plans` jau ir vai nav. Tas pats attiecas uz ceļu, ko esi ierakstījis no nulles: nekas no tā nav mantots nezin no kurienes, tāpēc nekas arī netiek atņemts.

**Soļa maiņa pret citu soli ir cits stāsts, un tad ceļš seko tikai tik tālu, cik tas tiešām ir tur.** Nomaini mapi ceļa vidū pret kaimiņu — noklikšķini `a`, ieraksti citu nosaukumu, nospied <kbd>Tab</kbd> — un viss, kas zem tās, seko tev līdzi, jo ceļš, kurā biji, parasti ir lielākā daļa no ceļa, ko vēlies. Taču pārdzīvo tikai tas, kas patiešām eksistē turpat, tāpēc lauks un saraksts blakus tam nekad nesaskan pretrunīgi: tas, kas paliek tavā priekšā, ir ceļš, ko tiešām varētu apstaigāt. Sākot no `a/b/c/leaf.md`, kad `a` noklikšķināts un tā nosaukums iezīmēts:

| ko iestati | čipi | lauks | iezīmēts |
| --- | --- | --- | --- |
| `x`, kam nemaz nav `b` | `x` | | nekas nesekoja |
| `y`, kam ir `b`, bet tajā nav `c` | `y` | `b` | `b` |
| `z`, `a` dvīnis līdz pat galam | `z` | `b/c/leaf.md` | `b` |

Mape, kas šādi paliek stāvam viena, tomēr ir mape, kurā var ieiet: nospiešana pēc tās ieiet tajā, nevis sāk paplašināt iezīmējumu virs tās nosaukuma.

Uz nosaukumu, kam mapē **nekas** neatbilst, tiek atbildēts citādi, jo nekas ar to nav ticis iestatīts: nospiešana iezīmē to, ko esi ierakstījis, gatavu, lai to pārrakstītu, nevis atbild ar kaut ko citu.

Viss kopā ir **cilpa, un tās apstaigāšana neko nemaksā**: nospiešana pēc pēdējā pakāpiena atdod rindu atpakaļ uz ceļa sākumu, ar mapēm un visu, gatavu doties apkārt vēlreiz. Vienīgais, kas jebkad pazūd no rindas, ir absolūtais prefikss, nospiešanā, kas pārstāj to rādīt.

Tas, kas atgriežas, ir **ceļš, ko tu uzbūvēji**, nevis tas, no kura sāki. Sadali apstaigāšanu pusceļā — izvēlies citu kaimiņu no saraksta, pabeidz uz citu nosaukumu — un aplis noslēdzas tur, kur tu tiešām esi; četri pakāpieni pirms tā apraksta to pašu ceļu, un šis ir tas, kas agrāk bija izņēmuma pakāpiens, kas aprakstīja pagātni.

<kbd>Shift</kbd>+<kbd>Tab</kbd> noslēdz to pašu gredzenu otrādi: ceļa sākumā, kad vairs nav ko atdot un tālāk augšup nav kur iet, nākamā nospiešana lec uz **tālāko** pakāpienu — ceļu no sistēmas saknes — un turpina no turienes sašaurināt. Neviens virziens nenoved strupceļā.

Tas arī netērē nevienu nospiešanu pakāpienam, kuru jau ir rādījis. Zem pēdējā pakāpiena — nosaukuma bez paplašinājuma — kāpnes beidzas, un *tā pati nospiešana* iziet no mapes: ceļš no sistēmas saknes, ceļš no tavas glabātavas, nosaukums, nosaukums bez paplašinājuma, tad mape — pa vienam solim.

Nospiešana netiek tērēta arī pakāpienam, kas neko nemaina: noklikšķinot uz piezīmes nosaukuma, tas jau tiek rādīts bez paplašinājuma, kas ir tas, ko rāda pirmais pakāpiens, tāpēc no turienes <kbd>Tab</kbd> sāk ar otro.

Katrs pakāpiens maina to, kas ir *laukā*, ne tikai to, kas iezīmēts — iezīmējumam ir jābūt virs teksta, ko tas nosauc, citādi <kbd>Enter</kbd> apstiprinātu ko citu, nevis to, ko redzi kā iezīmētu. Kāpnes pieder vienai rediģēšanas sesijai: noklikšķini prom vai ieraksti jebko, un nākamais <kbd>Tab</kbd> atkal pabeidz nosaukumu.

### <kbd>Shift</kbd>+<kbd>Tab</kbd>: tas pats ceļš atpakaļ

<kbd>Shift</kbd>+<kbd>Tab</kbd> ar katru nospiešanu atņem vienu soli, tādā secībā, kādā nospiešanas tika veiktas: iezīmējums sašaurinās pa vienam pakāpienam, katrs pabeigums tiek atdots, un no katras mapes tiek izietas — tās nosaukums atgriežas laukā, lai to varētu rediģēt, nevis ierakstīt no jauna.

**Neviens raksturs ceļā atpakaļ netiek dzēsts.** Pabeigums tiek atdots, *iezīmējot* rakstzīmes, ko tas pievienoja, tieši tāpat kā ejot uz priekšu tiek iezīmēts tas, ko tas ir paplašinājis — nosaukums paliek tavā priekšā, un katra nākamā nospiešana iezīmē par vienu soli vairāk no tā:

| | lauks | iezīmēts |
| --- | --- | --- |
| ienākts | `Alpha-one` | |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `ha-one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `Alpha-one` |

Rakstīšana aizstāj iezīmēto daļu, tāpat kā jebkur citur. <kbd>Tab</kbd> ieliek atpakaļ tieši to, ko iezīmējums atdeva, tāpēc, izejot divus soļus ārā un divus soļus atpakaļ iekšā, atgriezīsies tur, kur biji.

Kad viss nosaukums ir iezīmēts, vairs nav nekā, ko nospiešana tur nolikusi, un nākamā nospiešana iet *uz augšu pa ceļu*: tā iziet no mapes, kurā stāvi, tieši tāpat kā <kbd>Backspace</kbd> tukšā laukā. Arī tas neko nemaksā — mapes nosaukums atgriežas laukā **pirms** tā, kas tajā jau bija, iezīmēts, kas ir tas pats teksts, ko būtu devis klikšķis uz šīs mapes. Atpakaļ ir virziens, nevis atsaukšanas vēsture — bet nosaukuma iezīmēšana vispirms nozīmē, ka viena nospiešana nekad vienlaikus neatņem to, ko uzrakstīji, un neizved no mapes, kurā to uzrakstīji.

Teksts, kas atveras **jau iezīmēts** — tas, ko mapes klikšķis atstāj aiz sevis — ir nosaukums, ar kuru <kbd>Tab</kbd> strādā tālāk: tas tiek pabeigts un tajā tiek ieiets tāpat kā jebkurā citā gadījumā, un rakstīšana to aizstāj. Tikai fokusēšanas komanda atveras uz paša kāpņu pakāpiena, jo tā rāda tev visu ceļu, nevis mapi, kurā iet.

## Kaut kā ierakstīšana, kas nav ceļš

| Ko raksti | Kas notiek |
| --- | --- |
| `https://…` | Atveras jaunā cilnē Obsidian **Web skatītājā** (Web viewer), ja šis galvenais spraudnis ir ieslēgts; citādi tavā datora pārlūkā |
| `obsidian://…` | Nodots Obsidian pašam URI apstrādātājam |
| `file:///…` | Atkodēts un atvērts: kā īsta piezīme, ja tas ir tavā glabātavā, skatītājā, ja nav |
| `/home/you/a%20b.md` | Tas pats, ceļam, kas ielīmēts no pārlūka vai failu pārvaldnieka |

Skaitās tikai skaidri norādītas shēmas — piezīme ar nosaukumu `100%20` joprojām ir piezīme. `/`, kas pieder shēmai, paliek burtisks, nevis noiet mapē, tāpēc URL var ierakstīt ar roku, ne tikai ielīmēt.

## Komanda tastatūrai

**Fokusēt ceļa joslu** atver lauku uz piezīmes nosaukuma un apstaigā to tāpat kā <kbd>F2</kbd> — nosaukums, nosaukums ar paplašinājumu, ceļš no tavas glabātavas, ceļš no sistēmas saknes — un nospiešana pēc tam aizver lauku un noliek kursoru atpakaļ piezīmē. Tā nepārdēvē: Enter navigē, tāpat kā jebkurā citā laukā. Tai bez papildu iestatīšanas nav sava taustiņa, jo Obsidian vadlīnijas neiesaka spraudņiem to piesavināties; rinda **Karstie taustiņi** šī spraudņa iestatījumu beigās atver *Iestatījumi → Karstie taustiņi*, rādot tikai tā komandas, lai tur to varētu piesaistīt.

## Navigācija nekad neaiztiek atvērto failu

Noklusējuma (navigācijas) režīmā atvērtā piezīme **nekad** netiek pārdēvēta vai pārvietota.

- Ceļš, kas norāda uz esošu failu, to atver.
- Ceļš, kura vēl nav, vienkārši tiek izveidots kopā ar visām trūkstošajām vecākmapēm un atvērts. Katrs šādi izveidotais fails un mape par to paziņo — jauna mape citādi ir neredzama, kamēr to nesāc meklēt — un Obsidian pati atkritne padara nevēlamu mapi par vienu taustiņsitienu atsaucamu.
- **Ārpus tavas glabātavas tā tomēr vispirms pajautā.** Tur ārā tā pati kļūda uzraksta sistēmas mapē, kur ne paziņojums, ne Obsidian atkritne daudz nepalīdz.

## <kbd>Ctrl</kbd> — jauna cilne un kopēšana pārvietošanas vietā

Piezīme, kas **izveidota, pārvietota vai nokopēta glabātavas iekšienē, tiek parādīta tur, kur tā nonāca**, Failu pārlūkā, uz mirkli iezīmēta Obsidian akcenta krāsā — koks ir vieta, kur to meklē pēc tam, tāpēc tā tiek nolikta tavā priekšā, nevis atstāta mapē, kas varbūt pat nav atvērta. Dublēšana to arī pasaka: kopija atstāj oriģinālu tur, kur tas bija, un atver kopiju savā pašas panelī, kas bez vārda būtu viegli lasāms kā nekas nebūtu noticis.

Turot <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> uz macOS), kamēr izvēlies failu no saraksta vai kamēr nospied <kbd>Enter</kbd> uz ceļa, rezultāts tiek nosūtīts uz **jaunu cilni**, nevis uz šo:

| | Vienkārši | Ar <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Izvēlies vai ieraksti esošu failu | Atveras šeit | Atveras jaunā cilnē |
| Ieraksti ceļu, kura nav | Pajautā, tad atver šeit | Pajautā, tad atver jaunā cilnē |
| Apstiprini ceļu pārdēvēšanas/pārvietošanas režīmā | **Pārvieto** piezīmi turp | **Nokopē** to turp un atver kopiju jaunā cilnē |

Modifikators tiek nolasīts pēc paša Obsidian likuma, tāpēc uzvedas tieši tāpat kā uz saites vai Failu pārlūka rindas — vidējais klikšķis arī nozīmē „jauna cilne”, <kbd>Ctrl</kbd>+<kbd>Alt</kbd> nozīmē sadalījumu, bet <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> — jaunu logu.

Kopēšana atsakās pārrakstīt, tieši tāpat kā pārvietošana — arī uz pašas piezīmes ceļu, kur nav nekā jēdzīga, ko kopēt. Ārpus glabātavas šis atteikums arī tiek pateikts skaļi.

Viss no tā strādā gan **ar atvērtu sarakstu**, gan bez tā: uz iezīmētas rindas modifikators attiecas uz šo rindu, un stāvot ne uz kā — uz to, ko esi ierakstījis.

## Pārlūkošana ārpus glabātavas

**Tas pēc noklusējuma ir izslēgts.** Vispirms iestatījumos ieslēdz **Piekļuve ārējiem failiem** — lasīšana un rakstīšana ārpus glabātavas ir vienīgā lieta, ko šis spraudnis dara un ko pats Obsidian nedara, tāpēc tā ir kaut kas, kam pieteicies, nevis no kā atteicies. Kamēr tas ir izslēgts, glabātavas nosaukums vienkārši parāda tavu glabātavu Failu pārlūkā, un nekas šeit nekad neskatās tai pāri.

Noklikšķinot uz **glabātavas nosaukuma** (vai 🏠 ikonas, ja *Rādīt glabātavas nosaukumu* ir izslēgts), atveras vietu, nevis saturu, saraksts. Lauks, kas tad atveras, satur **visu ceļu, uz kura biji, izrakstītu pilnībā**, ar atlasītu sākuma vietu — tāpēc izvēloties citu vietu vai pārrakstot atlasi, tiek nomainīta tikai tā priekšējā daļa, un pārējais ceļš paliek tavā priekšā. **Nospied nosaukumu vēlreiz** — dubultklikšķis — un atzīme paplašinās pār visu to, tā absolūtais ceļš tiek paņemts vienā žestā, nevis pārvilkts ar roku. Pārdomā un <kbd>Esc</kbd> atgriež rindu tādu, kāda tā bija.

Rakstīšana šeit piedāvā vietas nosaukuma atlikumu tāpat kā citur, un <kbd>Tab</kbd> **iestata šo vietu** — to, uz kuru norādi, vai to, ko nosaukums var nozīmēt tikai vienā veidā. Kur vairākas vietas joprojām dala to, ko esi ierakstījis, nospiediens apstājas atzarojumā, tāpat kā visur citur. Norādot uz vietu, tiek parādīts **tās pašas vietas ceļš**, viss atlasīts, kam seko tavas piezīmes ceļš tikai tik tālu, cik tas tur patiešām sniedzas — tas ir tieši tas, kur nokļūtu, to izvēloties. Vieta nav solis iekšpus ekrānā redzamā ceļa, bet gan vieta, no kuras skaitīt visu ceļu, tāpēc nekas no tā, kur biji, nepaliek tās priekšā.

Piedāvātās vietas:

- **Tavas pārējās glabātavas**, nolasītas no paša Obsidian reģistra, nesenāk atvērtās pirmās, katra zem paša Obsidian glabātavas ikonas — tās, ko lietotne pati izmanto glabātavas komandām. Glabātava, kas tev jau ir atvērta, tā vietā saņem māju: no turienes rinda pēc noklusējuma sākas, tā nav vieta, kurp doties.
- **Mājas mape**, zem sava konta nosaukuma, apzīmēta ar `~`. Lucide nav tildes, tāpēc šo zīmē pats spraudnis uz Lucide paša 24×24 režģa ar to pašu līnijas biezumu — kā ikonu, kuras komplektā trūkst, nevis kā teksta rakstzīmi, kas iesēdusies starp ikonām.
- **Failu sistēmas sakne**, apzīmēta ar `root` — netulkota, jo tāds ir tās nosaukums jebkurā sistēmā — nevis `/`, kas blakus tam sekojošajam atdalītājam lasītos kā tukšs solis.
- **Pievienotie diski**, ar ikonu katram tipam tur, kur to lēti noteikt: tīkla koplietojumi, optiskie diski, disketes un noņemamie datu nesēji dabū savējo; viss pārējais — vispārīgu disku. Windows diski parādās kā `C:` ar vispārīgu ikonu — sējumu nosaukumiem un precīziem tipiem vajadzīgs WMI, kas apzināti netiek darīts.

Citas glabātavas izvēle **nepārslēdz Obsidian uz to.** Viss, kas tev ir atvērts, paliek atvērts; ceļa josla vienkārši sāk pārlūkot tur. Tieši tāpēc tas ir ceļa joslā, nevis atstāts sānjoslas glabātavu pārslēdzējam.

Tas arī nonāk **tik tuvu piezīmei, uz kuras esi, cik tā vieta patiešām sniedzas**.

- Ja izvēlētā vieta *satur* piezīmi — mājas mape vai kur vien mīt tavas glabātavas — tu saņem tās ceļu no turienes: izvēlies `~` ar atvērtu `takeaways.md`, un lauks lasa `Vaults/your-vault/takeaways.md`.
- Ja tā ir vieta blakus šai — cita glabātava, cits disks — tiek mēģināts tas pats relatīvais ceļš, tik dziļi, cik tas patiešām pastāv. Glabātavas bieži ir gandrīz kopijas viena otrai, un iemesls lēkt uz citu parasti ir tā pati piezīme tur.

Jebkurā gadījumā rinda paliek izvēlētajā vietā, un **tā ceļa pirmā mape atveras atlasīta** — tā pati forma, ko dod mapes noklikšķināšana: solis, kuru visdrīzāk mainīsi, kad lēksi kaut kur citur, ir tas, kas atrodas vistuvāk augšai, un pārējais ceļš paliek redzams, kamēr to maini. Nekas nekad netiek iepriekš aizpildīts, ja tas patiešām neatrodas diskā.

### Kamēr esi ārpusē

Ceļš **sākas vietā, kuru izvēlējies**, nevis mašīnas direktoriju izkārtojumā — un tas pats attiecas uz lauku, kuru iegūsti, noklikšķinot uz tukšās vietas vai nospiežot fokusa taustiņu: tas satur ceļu no tās vietas, nevis mašīnas absolūto ceļu, ar aizsegtu ceļa daļu līdz pašai vietai tieši tāpat, kā tā aizsedzas līdz glabātavas saknei iekšpusē — izvēlies `Archive`, un rinda lasa `Archive / notes / …`, nevis `/home/tu/Vaults/Archive/notes/…`. Sākuma segmentam ir ikona atbilstoši tam, kas tas ir (glabātava, mājas mape, disks), un <kbd>Backspace</kbd> apstājas tur, nevis dodas tālāk augšup pārējā failu sistēmā. Ar izslēgtu *Rādīt glabātavas nosaukumu*, šis segments ir tikai ikona — iestatījums attiecas uz rindas atverošo segmentu neatkarīgi no tā, kuru glabātavu tas apzīmē, ne tikai uz tavu pašu.

Ceļa josla ir **ierāmēta kļūdas krāsā** — tajā pašā gredzenā, ko zīmē pārdēvēšanas režīms — tik ilgi, kamēr tā norāda ārpus tavas glabātavas. Tā apzīmē pastāvīgu stāvokli, nevis mirkli: kamēr tā ir redzama, neviena no paša Obsidian apstrādēm neattiecas uz to, ko rinda rāda, un rakstīšana paliek slēgta, līdz saki citādi.

Citādi pārlūkošana darbojas kā iekšpusē: zīmes, atdalītāji, rakstīšana, pabeigšana, <kbd>Backspace</kbd>, lai izkāptu. Spēkā ir arī tie paši redzamības noteikumi, tāpēc neatbalstītiem paplašinājumiem joprojām vajadzīgs Obsidian iestatījums *Atpazīt visus failu paplašinājumus*, bet slēptajiem failiem — joprojām šī spraudņa iestatījums.

**Labais klikšķis darbojas arī tur**, lai gan tā ir cita izvēlne: Failu pārlūka pašiem apstrādātājiem vajadzīgs fails, ko glabātava pazīst, tāpēc ieraksti ārpusē tiek veidoti no ceļa. Tie piedāvā atvēršanu (šeit, pa labi, jaunā logā vai tavas darbvirsmas noklusējuma lietotnē), *Kopēt ceļu*, *Rādīt sistēmas pārlūkā*, un — kad piekaramā atslēga ir atvērta — *Jauna piezīme*, *Jauna mape*, *Izveidot kopiju*, *Pārdēvēt…* un *Dzēst*. **Vilkšanai** joprojām vajadzīgs glabātavas fails, un tā paliek nepieejama.

Tā pati izvēlne ir arī atvērtajam failam skatītājā — ar labo klikšķi vai no rūts pašiem trim punktiem — un tā jautā tā skata galvenes piekaramajai atslēgai. Tā nejautā neko citu: vai fails tiek atveidots vai rādīts kā pirmavots, neietekmē to, vai to var dzēst, un attēls vai PDF — kam vispār nav pirmavota skata — ir tikpat dzēšams kā piezīme. *Dzēst* nozīmē darbvirsmas grozu, tāpēc to no turienes var atsaukt; sistēma bez groza ziņo par to, nevis iznīcina failu.

Dzēšana ārpus glabātavas pārvieto failu uz tavu **sistēmas grozu** — Atkritni Windows vidē, Grozu macOS vidē — nekad nesaistīšanu. Šeit ārpusē nav Obsidian groza, no kura atgūt, tāpēc dzēšana, kuru nevarētu atsaukt, netiek piedāvāta vispār: kur platformai nav groza, mēģinājums tā vietā ziņo par neizdošanos.

### Rakstīšana ārpus glabātavas

Viss, kas raksta, pēc noklusējuma ir **slēgts**. Kamēr rinda norāda ārpus tavas glabātavas, pārdēvēšanas pārslēga vietu galvenē aizņem **sarkana piekaramā atslēga** — tā pati krāsa, kas ir gredzenam ap rindu, un tā paša iemesla dēļ: tā apzīmē atteikumu. Abi ir viena kontrole vienā vietā, tāpēc nekad nav jautājuma, kurš no tiem ko liedz.

Trīs nospiedieni, ciklā:

| Nospiediens | Ko iegūsti |
| --- | --- |
| Sarkanā piekaramā atslēga | Rakstīšana šeit ir atļauta. Piekaramo atslēgu aizstāj pārdēvēšanas/pārvietošanas pārslēgs |
| Pārslēgs | Pārdēvēšanas/pārvietošanas režīms, tieši tāpat kā glabātavas iekšpusē |
| Pārslēgs vēlreiz | Režīms beidzas, un piekaramā atslēga atkal aizveras — atļauja nepārdzīvo lietu, kurai tā tika atvērta |

**Pārdēvēšanas taustiņš jautā arī piekaramajai atslēgai.** Ārpus tavas glabātavas tā nospiešana uzplaiksnī piekaramo atslēgu atvērtu un ciet, nevis atver režīmu, kuru katrs apstiprinājums atteiktu: atteikums pienāk pirms darba, nevis pēc tā. Nospied piekaramo atslēgu vai nospied pārdēvēšanas taustiņu vēlreiz pusotras sekundes laikā — otrais nospiediens piešķir tieši to, ko piešķir poga, šai vietai, un līdz ar to atver pārdēvēšanas režīmu.

Tavas glabātavas iekšpusē piekaramās atslēgas nav: nav ko atslēgt, un pārslēgam vienkārši pieder šī vieta.

Atļauja tiek piešķirta **vietai, nevis mirklim**: tā pārdzīvo visu, ko darītu, strādājot vienā vietā — pabeidzot pārvietošanu, noklikšķinot prom no ievades lauka, atverot failu — un beidzas, kad no saraksta izvēlies citu glabātavu, disku vai sakni, kad rinda atgriežas pie glabātavas faila, vai pie tā trešā nospiediena. Tāpēc virkne pārvietošanu vienā mapē prasa vienu nospiedienu, nevis vienu katram failam.

Ar atvērtu piekaramo atslēgu ceļa josla tur ārpusē uzvedas tāpat kā iekšpusē:

| Darbība | Rezultāts |
| --- | --- |
| Ieraksti nosaukumu, kura nav, <kbd>Enter</kbd> | Tas pats jautājums „izveidot to?” kā iekšpusē; tiek izveidotas arī trūkstošās vecākmapes. Nosaukums bez paplašinājuma kļūst par `.md`, tieši tāpat kā iekšpusē |
| Pārdēvēšanas/pārvietošanas režīms, ieraksti jaunu nosaukumu | Pārdēvē failu, ko rinda rāda. Nosaukums bez paplašinājuma patur faila paša paplašinājumu — te ārpusē mapē mīt visdažādākie faili, un pārdēvēšanai nevajadzētu klusi pārvērst `.png` par `.md` |
| Pārdēvēšanas/pārvietošanas režīms, pārlūko citur, izvēlies **paturēt šo nosaukumu** | Pārvieto to turp ar nosaukumu, kas tam jau ir |
| Turi <kbd>Ctrl</kbd> jebkurā no tiem | Kopē, nevis pārvieto, un atver kopiju jaunā cilnē |

Slēgtā stāvoklī visi šie ziņo, kas tos aizšķērso, tā vietā, lai notiktu. Nevienā no stāvokļiem nekas nekad netiek pārrakstīts: galamērķis, kas jau pastāv, tiek atteikts, un atteikums nāk no pašas failu sistēmas (`COPYFILE_EXCL`, ekskluzīva izveide), nevis no pārbaudes, kas varētu zaudēt sacensību. Pārvietošana starp failu sistēmām — no USB atmiņas, no tīkla koplietojuma — atkāpjas uz kopēt-tad-dzēst, un oriģināls tiek noņemts tikai pēc tam, kad kopija ir nonākusi vietā.

**Piezīmes pārvietošana *ārā* no tavas glabātavas vispirms jautā.** `fileManager` nevar sekot failam pāri tai robežai: katra saite, kas norāda uz piezīmi, pārstāj darboties, nekas tās neatjaunina, un piezīme pamet glabātavas rādītāju. Tāpēc pārvietošana tiek piedāvāta kā lēmums, nevis atteikta vai izdarīta klusi — dialogs pasaka, ko tas maksā un cik daudz piezīmju norāda uz to, kuru pārvieto. Apstiprini, un tā tiešām pārvietojas: nokopēta ārā, tad noņemta no glabātavas ar Obsidian pašu dzēšanu, tāpēc tā ir atgūstama tieši tāpat kā dzēsta piezīme, un neveiksme jebkurā no soļiem atstāj piezīmi tur, kur tā bija. Turot <kbd>Ctrl</kbd>, tā vietā to joprojām nokopē ārā, kam nav nekādas no šīm problēmām. Otrādā virzienā — ienesot ārēju failu *iekšā* glabātavā — vēl nav sasaistīts.

### Ārēja faila atvēršana

Pārlūkojot failu sistēmu, var atgriezties **atpakaļ tavā atvērtajā glabātavā** — no saknes, no mājas mapes, no kurienes vien mīt tavas glabātavas. Fails, kas sasniegts tādā veidā, ir parasta piezīme, tāpēc tas tā arī atveras: īstais redaktors, saites un atpakaļsaites, un rinda atlec atpakaļ pie glabātavā sakņotās ceļa joslas. Tikai faili, kuriem Obsidian nav skata, paliek priekšskatījumā, jo tur ārā priekšskatījums ir labākā atbilde. Kur priekšskatījums tik un tā rāda šādu piezīmi — teiksim, atkal atvērta darbvieta — tā augšējā rinda piedāvā **Atvērt *(glabātavā)***, kas ir tas pats piedāvājums, kas dots ar roku.

Obsidian redaktors strādā tikai ar failiem glabātavas iekšpusē, tāpēc ārēju failu **nevar** atvērt kā īstu piezīmi ar saitēm, atpakaļsaitēm un pārējo — tas ir lietotnes, nevis šī spraudņa ierobežojums. Izvēloties tādu, tā vietā atveras **priekšskatījums**, tikai lasāms, līdz saki citādi:

| Tips | Rādīts kā |
| --- | --- |
| `.md`, `.markdown` | Atveidots Markdown |
| `.html`, `.htm`, `.xhtml` | Atveidotā lapa |
| Attēli, audio, video, PDF | Iebūvēts atskaņotājs/skatītājs |
| Jebkurš cits **teksta** fails (`.json`, `.css`, `.log`, `.txt`, …) | Burtisks vienkāršs teksts |
| Bināri formāti bez skatītāja (`.zip`, `.exe`, …) | Nodots *Atvērt noklusējuma lietotnē* |

Skatītājam ir divi faila lasījumi, un, tā kā tie viens otru izslēdz, tiek rādīts tikai tas, uz kuru **pārslēgtos**:

| | Ko tas dara | Noklusējums priekš |
| --- | --- | --- |
| **Skatīt kā Markdown** | Atveido failu kā piezīmi, tikai lasāms | `.md`, `.markdown` |
| **Skatīt kā lapu** | Atveido failu kā lapu, kas tas ir, tikai lasāms | `.html`, `.htm`, `.xhtml` |
| **Rediģēt kā tekstu** | Pirmavots, rediģējams | viss pārējais |

Ārpus glabātavas **Rediģēt kā tekstu** ir arī tas nospiediens, kas noņem tikai-lasāms stāvokli — režīms un atļauja ir viens žests, nevis divas pogas, par kurām jādomā. Tas ir sarkanīgi ietonēts **ikreiz, kad nospiešana noņemtu tikai-lasāms stāvokli**, vienalga, vai gatavo rediģēšanu uz vietas, vai nāc tieši no atveidotā skata; glabātavas iekšpusē nav ko atslēgt, tāpēc tur tas paliek vienkāršs. **Skatīt kā Markdown** saņem vieglu akcenta krāsas pieskaņu — to pašu toni, ko Obsidian dod atlasītam tekstam — apzīmējot to kā ceļu atpakaļ, nevis kā aicinājumu rīkoties.

Tā kā poga seko *rediģēšanai*, nevis kailajam režīmam, fails, kas teksta skatā guļ tikai lasāms, joprojām piedāvā **Rediģēt kā tekstu**: tieši šis nospiediens to sagatavo. Fails, kurā nekad nevarēs rakstīt — saīsināts vai nenolasāms — tā vietā saka **Skatīt kā tekstu**, jo tas ir viss, ko nospiediens spēj dot.

Noklusējumi ir pagriezti derīgajā, nevis burtiskajā virzienā: `#` čaulas skriptā ir komentārs, nevis virsraksts, tāpēc `.log` atveidošana kā Markdown to klusi aprītu. Abus noklusējumus var pārrakstīt katram failam atsevišķi, un izvēle nonāk lapas vēsturē, tāpēc atpakaļ/uz priekšu un atkal atvērta darbvieta to patur — daudzas piezīmes mīt `.txt` failos, un daudzus `.md` failus ir vieglāk lasīt kā pirmavotu.

#### Ko HTML lapai drīkst darīt

Neko. Lapa tiek rādīta rāmī ar **visām atļaujām liegtām** — nekādu skriptu, nekādu formu, nekādas navigācijas, nekāda paša izcelsmes avota — un satura politiku, kas tai neļauj nekādu tīklu vispār. Tā nav piesardzība pati par sevi: parastā veidā ielādēta vietējā lapa dalītu šī loga izcelsmi, un šis logs ir Obsidian, tāpēc skripts lejupielādētā HTML failā darbotos tavas lietotnes iekšienē ar tavas lietotnes sasniedzamību.

Tas, ko tas maksā, ir viss, ko lapa *dara*; tas, ko tas patur, ir viss, kas lapa *ir*. Stila lapas un attēli, kas atrodas blakus failam, tiek ielasīti un ienesti rāmī, tāpēc saglabāta lapa joprojām izskatās kā tā pati. Atsauces, kas norāda ārpus lapas pašas mapes, un atsauces uz kaut ko internetā, tiek atstātas tieši tā, kā rakstītas, un vienkārši neielādējas — vietējs fails nevar klusi pateikt serverim, ka to atvēri.

Skripti tiek **noņemti**, nevis tikai bloķēti, tāpēc lapa, ko redzi, un pirmavots, uz kuru vari pārslēgties, atšķiras vienā skaidri norādītā veidā, nevis kaut kādā, ko rāmis klusi atteicās darboties. Saites lapas iekšienē nedara neko. Kad gribi īsto lietu — skriptus, tīklu un visu pārējo — *Atvērt noklusējuma lietotnē* nodod to tavai pārlūkprogrammai, kas tam ir pareizais rīks.

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

- **Atvērt *(glabātavā)*** — parādīts, kad fails pieder vienai no tavām pārējām glabātavām. Nodod to Obsidian paša URI apstrādātājam, kas atver tās glabātavas logu ar piezīmi tajā, kā īstu rediģējamu piezīmi. Šis logs paliek tieši tāds, kāds bija; nekas nepārslēdzas zem tevis.
- **Skatīt kā Markdown** / **Skatīt kā lapu** / **Rediģēt kā tekstu** — divi lasījumi, kas šim failam ir; pēdējais arī noņem tikai-lasāms stāvokli ārpus glabātavas.
- **Atvērt noklusējuma lietotnē** — nodod failu tavas darbvirsmas noklusējuma lietotnei, ieskaitot binārus formātus, kurus šis skatītājs nevar rādīt. Formulēts tieši tāpat kā Obsidian pašam ieraksts tai pašai darbībai, jo tā ir tā pati darbība.

Skatītājs atbild arī uz **labo klikšķi**: teksta redaktora iekšienē ar *Izgriezt* / *Kopēt* / *Ielīmēt* / *Atlasīt visu*, un jebkur citur ar faila paša izvēlni. Obsidian trīs punktu izvēlne galvenē arī nes šo izvēlni — ārpus glabātavas tā citādi nepiedāvātu neko, izņemot *Sadalīt pa labi* un *Sadalīt uz leju*.

Nekas ārpus tavas glabātavas netiek rakstīts, ja vispirms nenospied *Rediģēt kā tekstu*. Pilnu izklāstu sk. README sadaļā [Ārpus glabātavas](README.lv.md#ārpus-glabātavas).

## Faila nomešana uz mapes ceļā

Katra rinda mapes rindā ir nomešanas mērķis, tāpēc **piezīme, kas ievilkta uz
kādas no tām, pārceļas turp** — īsākais ceļš ir starp piezīmi un jebkuru mapi
virs tās, jo galamērķis jau ir redzams ekrānā. Velc no failu pārvaldnieka, no
saraksta, no piezīmes paša nosaukuma galvenē vai no jebkuras citas Obsidian
vietas, kas rada failu — tā ir paša Obsidian vilkšana, tāpēc uzpeldošā uzraksta
etiķete, kursors un iekrāsojums ir tie, ko zīmē failu pārvaldnieks.

**Nomešanu pieņem arī glabātavas nosaukums**, jo tā ir mape rindas sākumā — tas
ir vienīgais žests, kas no šejienes ievieto piezīmi glabātavas saknē.

**Vienlaikus var vilkt visu atlasi**, un tā pārceļas kā viens veselums: ja kaut
vienu no tiem nevarētu pārcelt, nomešana tiek atteikta, nevis daļa tiek
pārcelta, bet pārējā klusi izlaista.

Saites seko piezīmei tieši tāpat, kā tas notiek, pārceļot to no failu
pārvaldnieka vai ierakstot ceļu.

Mape, **kas nevar pieņemt nomešanu, nepiedāvā neko no sevis** — nekādu uzrakstu
*Pārvietot uz*, nekādu mapes iekrāsojumu — nevis piedāvā kaut ko, kas tad
neizdotos; tās vietā stāv paša Obsidian atbilde galvenei — *Atvērt šajā cilnē*.
Trīs gadījumi:

- mape, kurā fails **jau atrodas**, jo tas jau ir tur;
- mape, kas nomesta **pati sevī vai savā pēctecē**, kas atstātu to bez vietas,
  no kuras tā būtu nākusi;
- atlase, kas satur **mapi un kaut ko tās iekšienē**, jo, pārceļot mapi, kopā
  ar to pārceļas arī tās saturs.

Mape, kurā jau ir **tāda paša nosaukuma fails**, pieņem nomešanu un jautā, ko
darīt ar to, kas stāv ceļā — ar to pašu dialogu, kas parādās aizņemtam
ierakstītam vai izvēlētam nosaukumam — skat. [Nosaukums, kas ir aizņemts](#nosaukums-kas-ir-aizņemts).
Šeit nekas netiek pārrakstīts.

Nomešanu pieņem tikai mapes **glabātavas iekšienē**. Kamēr rinda norāda uz
kaut ko ārpus glabātavas, tās segmenti atsakās, jo piezīmes izņemšana no
glabātavas pārrauj visas saites uz to — tas ir lēmums, kas pelnījis jautājumu,
nevis žestu. Veids, kā to izdarīt apzināti, joprojām ir ceļa ierakstīšana, kas
vispirms pajautā un pasaka, cik piezīmju tas ietekmētu.

## Teksta vai faila nomešana, lai to pierakstītu

Tie paši mērķi pieņem arī **saturu**, ne tikai failus, un abus atšķir tas, ko
tu velc, nevis tas, kur tu to atlaid.

**Uz piezīmi, kuru rinda jau nosauc** — piezīmes pašas nosaukumu vai
atdalītāju, kura mapei ir mapes piezīme — tas, ko nometi, tiek pievienots tās
beigās, aiz tukšas rindas. Vispirms tiek uzdots jautājums, jo tas ieraksta
failā, kas jau eksistē, un vilkšana ir žests, ko nedroša roka var izdarīt
netīšām. Strādā teksts no redaktora, fails no darbvirsmas un piezīme, izvilkta
no šīs glabātavas; fails tiek nolasīts kā teksts, un bināru failu atsaka, nevis
ielīmē kā ekrānu pilnu ar bezjēdzību.

**Uz vietu — glabātavas nosaukumu vai mapi** — vēl nekas netiek ierakstīts, jo
vēl nekas nav nosaukts. Lauks tur atveras, saturot to, ko nometi, un nosaukums,
ko ieraksti, ir tas, kas to apstiprina: jaunā piezīme tiek *izveidota*, saturot
tekstu, un esošai tiek jautāts tieši tāpat kā iepriekš. <kbd>Esc</kbd> vai
klikšķis citur atlaiž visu kopā.

**Rinda mirdz zilā krāsā**, kamēr virs tās ir vilkšana, kas nolaistos kā
saturs, un paliek zila, kamēr lauks satur šādu saturu — tā pati zilā krāsa,
kas saka to pašu: tas, kas notiks tālāk, attiecas uz tekstu, ko tu nes. Fails,
izvilkts no tavas paša glabātavas uz mapi, joprojām nozīmē *pārvieto to turp*,
saglabā Obsidian paša iekrāsojumu un nekad nemirdz zilā krāsā — šis žests bija
šeit pirmais, un saturs tam dod ceļu.

## Kad ceļš ir garāks par paneli

Nosaukumi tiek **saīsināti, nevis saspiesti**, kārtībā, kāda tev, visticamāk,
ir vismazāk vajadzīga:

1. **Vispirms glabātavas nosaukums**, līdz pat tās ikonai. Tu zini, kurā
   glabātavā esi; ikona turpina rādīt, kur ceļš sākas.
2. **Tad faila paplašinājums**, ja tas ir ieslēgts — tās pašas trīs rakstzīmes
   gandrīz katram failam glabātavā. Tas tiek noņemts vesels, nevis saīsināts:
   pusparaplašinājums nepasaka neko vairāk, kā to nepasaka paplašinājuma
   trūkums.
3. **Tad mapes, garākā pirmā.** Garākais mapes nosaukums saīsinās līdz
   nākamā garākā garumam, tad abi kopā, un tā tālāk, katrs apstājoties pie
   savas apakšējās robežas — tā viena ļoti gara mape atdod visu pārsvaru, kas
   tai ir pār pārējām, pirms blakus esošs īss nosaukums zaudē kaut vienu
   burtu.
4. **Faila paša nosaukums pēdējais**, un tas patur apmēram sešas rakstzīmes.
   Tam jau galvene ir domāta.

Vieta tiek atdota **nepārtraukti**, pikseļa daļās, nevis pa burtam vienlaikus:
nosaukums, kas atkāpjas, tiek nogriezts precīzi pie pikseļa un izgaist zem sava
`…`, tā ka lēni ievilkts panelis vienmērīgi sašaurina rindu, un nekas aiz tā
nekustas lēcienos. Pirms kāds burts pazūd, tiek iztērēta gaisma ap
atdalītājiem — tā ir vienīgais rindas atstarpējums, un tas nemaksā nekādu
informāciju — un saīsinātais nosaukums beidzas tur, kur sākas atdalītājs, bez
tukšas joslas starp abiem.

**Lauks patur to, ko tas satur.** Lauka atvēršana, lai ierakstītu ceļu,
nesaspiež mapes tam blakus prom no ceļa: tas ir tikpat plats kā tajā esošais
teksts un aug, tev rakstot, tā ka pēda patur visu, kas laukam nav vajadzīgs.
Tikai tad, kad abiem nepietiek vietas, rinda ritinās, un tad lauks ir vienīgā
lieta, kas nekad neatkāpjas — tas ir teksts, kas tiek rediģēts, nevis
nosaukums, kas tiek pielāgots.

Nekas netiek nogriezts vairāk, kā vajadzīgs, lai to atšķirtu no kaimiņiem:
`Projects2025` un `Projects2026` vienā mapē saīsinās līdz `…025` un `…026`,
nevis līdz priedēklim, kas padarītu tos par vienu un to pašu vārdu, savukārt
`Reports` blakus `Receipts` var saīsināt līdz `Rep…`. Papildus tam katrs
nosaukums patur **salasāmu platumu** — aptuveni četru burtu vērtībā mapei un
sešu faila nosaukumam, mērot fontā, kurā rinda faktiski tiek zīmēta, nevis
skaitot rakstzīmes. Četri šauri burti un četri plati burti nav vienāds
nosaukuma daudzums, tāpēc `lilliliillil` drīkst paturēt vairāk no sevis nekā
`WWMMWWMMWWMM`, un tas, kas paliek ekrānā, ir tāda paša izmēra abos
gadījumos. Īsi nosaukumi paliek netikti vispār — nosaukums, nogriezts līdz
`A…`, ir unikāls, taču joprojām nesalasāms. **Atstarpes tajā neskaitās.**
Sešas rakstzīmes, lai pateiktu, kurš tas ir par failu, ir sešas rakstzīmes,
ko vērts lasīt, tāpēc tukšumi starp tām brauc līdzi bez maksas, un neviena
nekad nepaliek stāvam pret `…`, kur tā tāpat būtu neredzama.

**Nosaukums tiek nogriezts tur, kur tā kaimiņi tam piekrīt, un vidū, kur tie
nepiekrīt nekur.** Divas mapes ar nosaukumiem `aaaa-common-one` un
`aaaa-common-two` dala visu, izņemot pēdējās trīs rakstzīmes, tāpēc astes
nogriešana patur to pusi, kas nepasaka neko: tās saīsinās līdz `…one` un
`…two`, kas ir gan īsāks, gan tos atšķir. Kur vienošanās ir beigās —
`alpha-draft` blakus `beta-draft` — prom iet beigas; kur tā ir abos galos,
paliek vidus. Nosaukums bez tuviem kaimiņiem zaudē vidu, jo nosaukums sākas
ar to, kas tas ir, un beidzas ar to, kurš tas ir — failam tas ir tā
paplašinājums: `annual…2026.md`.

Īss kopīgs posms neskaitās. `parallel structures` gadās beigties ar tiem
pašiem diviem burtiem kā tam blakus esošais `Schemes`, un tas nav iemesls
paturēt kaut vienu no tiem veselu — trīs rakstzīmes no priekšas jau tos
atšķir.

Nekas nepāriet otrā rindā. Kad pat visīsākie godīgie nosaukumi neietilpst,
rinda **ritinās sāniski**, novietota galā, kur ir fails — tajā brīdī vairs
nav ko saspiest, un tālāka griešana slēptu, nevis saīsinātu. Ritenītis to
ritina neatkarīgi no tā, kur virs rindas atrodas kursors, un ir sasniedzami
abi gali: ritinoties, rinda pielīdzinās savam sākumam neatkarīgi no
izlīdzinājuma iestatījuma, jo saturs, centrēts kastē, kuru tas ir pārsniedzis,
izplūst gan pa kreisi, gan pa labi — un uz to pusi vispār nevar aizritināt.

**Norādi uz saīsinātu nosaukumu, un tas atgriežas pilnībā**, kamēr uz to
norādi, aizritināts pie kreisās malas, lai viss atgrieztais būtu redzams
ekrānā. **Noklikšķini uz tā, un tas paliek**: lauks atveras, rādot mapi, uz
kuras noklikšķināji, to, kas piedāvāts pēc tās, un to, ko tu ieraksti, un
turpina to rādīt, kad kursors ir pārvietots prom. Nosaukumi paliek uz vietas,
kamēr tu ritini rindu vai raksti tajā — ja viens atvērtos zem žesta, kas
domāts rindas lasīšanai, tas pārvietotu visu aiz tā tev no zem kājām.

**Sākuma segmentam vienmēr ir paskaidre, un tā ir absolūtais ceļš** —
`/home/tu/Vaults/Notes` vai kur vien rinda sākas. Tā ir vienīgā lieta par
rindu, ko nekas ekrānā nevar pateikt: nosaukums pasaka, *kuru* glabātavu, bet
nekad — kur tā atrodas. Tā ir tur neatkarīgi no tā, vai kaut kas bija
jāsaīsina.

Ar izslēgtu **Rādīt glabātavas nosaukumu** nosaukums netiek noņemts, tikai
turēts pie nekā — tā ka norādīšana uz ikonu to atdod tieši tāpat, kā to atdod
norādīšana uz nosaukumu, kuru rindai vajadzēja saīsināt.

**Rādīt failu paplašinājumus** atgriež paplašinājumu rindas faila nosaukumā.
Izslēgts — pēc noklusējuma — un rinda nosauc piezīmi tā, kā to virsraksta
Obsidian, bez `.md`, ko dala gandrīz katrs fails glabātavā; ieslēgts, un tā
to nosauc tā, kā to dara failsistēma, kas ir tas, ko vēlies, ja glabātava
satur ne tikai piezīmes. Tas ir arī otrā lieta, ko rinda atdod, kad vietas
pietrūkst, uzreiz aiz glabātavas nosaukuma.
Paskaidre sniedz pārējo: ne tikai nosaukumu, bet visu, ko rinda rāda zem tā,
kā `…/nosaukums/mape/piezīme.md`, tā ka viens uzturēšanās mirklis atbild gan
uz "kas tas ir", gan "kas zem tā ir". Glabātavas ikona nosauc savu glabātavu
tāpat, ja nosaukums ir izslēgts vai ir saspiests prom.

## Divas brīdinājuma krāsas

| | Kad | Ko tas nozīmē |
| --- | --- | --- |
| **Sarkans** aplis ceļa joslā | Rinda norāda ārpus tavas glabātavas | Obsidian nevar atvērt to, kas tur ir, kā piezīmi, un nekas tur netiek rakstīts, kamēr neatver piekaramo slēdzeni. |
| **Oranžs** aplis ceļa joslā | Fails ir teksta tips, kuram Obsidian nav skata | Piesardzība. Obsidian to nodotu tavas darbvirsmas noklusējuma lietotnei; spraudnis to parāda pats. |
| **Sarkans** teksts atvērtajā laukā | Šajā ceļā vēl nekā nav | <kbd>Enter</kbd> to izveidos, nevis atvērs. Tas nav tik daudz brīdinājums, cik apgalvojums par to, ko dara nākamais taustiņa nospiedums — skat. [Ceļa ierakstīšana](#ceļa-ierakstīšana). |
| **Sarkana** piekaramā slēdzene pārdēvēšanas slēdža vietā | Rinda norāda ārpus tavas glabātavas, un rakstīšana tur joprojām ir slēgta | Tā pati sarkanā krāsa, kas ir aplim, tā paša iemesla dēļ: tā apzīmē atteikumu. Tās nospiešana atļauj rakstīt šeit un atdod vietu atpakaļ slēdzim — skat. [Rakstīšana ārpus glabātavas](#rakstīšana-ārpus-glabātavas). |

**Abi apļi ir neatkarīgi, un abi var būt spēkā vienlaikus** — ārējs `.json` ir gan ārpus tavas glabātavas, gan tips, kuram Obsidian nav redaktora. Skatītājā tie parādās kā atsevišķas rindas, katra norādot tikai savu faktu. Ceļa joslā, kur abi ir spēkā, uzvar sarkans, jo divi apļi būtu tikai troksnis. Sarkanais *teksts* ir kaut kas pavisam trešais: tas attiecas uz to, kas tiek rakstīts, nevis uz to, kur rinda norāda, tāpēc tas var parādīties jebkurā no apļiem vai nevienā no tiem.

Oranžais līmenis ir apzināti šaurs. Reģistrētie tipi (Markdown, canvas, attēli, PDF, audio, video) tiek apstrādāti pareizi un nesaņem neko. Bināri faili arī nesaņem neko — tu netīšām neuztaisīsi juceklī `.zip` failu. Kas paliek, ir tieši risks: `.json`, `.css` vai `.log`, ko redzamu padarījis **Rādīt visus failu tipus**. Saraksts ir plašāks apzināti: tur viss, kas nav piezīme, ir oranžs — skat. [kā tiek krāsotas saraksta rindas](#kā-tiek-krāsotas-saraksta-rindas).

## Pārdēvēšanas/pārvietošanas režīms

Zīmuļa poga galvenes labajā malā — blakus skata režīma pogai, tāda paša izmēra kā vietējās pogas — pārslēdz pārdēvēšanas/pārvietošanas režīmu. Ārpus tavas glabātavas tās vietā stāv sarkana piekaramā slēdzene, kamēr to nenospiež; skat. [Rakstīšana ārpus glabātavas](#rakstīšana-ārpus-glabātavas). Galvenes rinda tad tiek ierāmēta akcenta krāsā, tieši tāpat kā pārdēvēšana failu pārvaldniekā. Tie paši klikšķi un taustiņu nospiedumi tagad apstiprina pārvietošanu vai pārdēvēšanu, izmantojot Obsidian `fileManager.renameFile`, tā ka visas saites uz piezīmi seko līdzi.

Pārdēvēšanas laikā:

- Pašreizējais faila nosaukums ir piesprausts pie katras mapes saraksta, tā ka piezīmes pārvietošana, nemainot tās nosaukumu, ir viens klikšķis.
- Nosaukumi, kas mērķa mapē jau aizņemti, ir **sarkani** — gan mape, kurā jau ir šis nosaukums, gan fails ar šo nosaukumu — tā ka sadursme ir redzama, pirms tu izvēlies. Tos joprojām var izvēlēties: skat. tālāk.
- Ievade tiek pārbaudīta dzīvē pret paša Obsidian pārdēvēšanas noteikumiem — tās pašas rakstzīmju kopas, tie paši ziņojumi, tā pati sarkanā paskaidre, ko saņem, pārdēvējot failu kokā — tā ka nelikumīgs nosaukums tiek atzīmēts, tev rakstot, un to nevar apstiprināt.
- Klikšķis ārpus galvenes joslas vai galvenes fokusa zaudēšana beidz pārdēvēšanas režīmu.

### Nosaukums, kas ir aizņemts

Pārvietošana vai pārdēvēšana uz nosaukumu, kas jau eksistē, **jautā, nevis
atsakās.** Atveras dialogs ar diviem ceļiem, kurus vari rediģēt: kur nonāk
tavs fails un kur nonāk fails, kas ir ceļā — sarkans, kamēr tas joprojām ir
aizņemts. Katrs ceļš ir arī uzzīmēts tā, kā to zīmē ceļa josla, ar daļām, kas
atšķiras, iekrāsotām un saīsinātām pēdējām, tā ka garš ceļš joprojām parāda,
kas mainās.

Abiem laukiem ir saraksts. Otrais satur ierastos izejas ceļus:

- **Samainīt vietas** — tas nonāk tavā faila vecajā mapē, ar savu paša
  nosaukumu.
- **Samainīt nosaukumus** — tas paliek tur, kur ir, un pārņem tavu faila
  veco nosaukumu.
- **Samainīt abus** — tas pārņem tavu faila veco ceļu.
- `-1`, `-bak` un `-old` blakus savam paša nosaukumam.
- Abi nosaukumi, kādi failiem bija.

Pirmais saraksts piedāvā to, uz kurieni tavs fails devās, **Palikt tur, kur
ir**, tā paša nosaukumu mērķa mapē un `-1`, `-bak` un `-old` tam blakus.
Izejas ceļš, kura nosaukums ir aizņemts, ir pelēks un nav izvēlams. Izvēloties
kādu no tiem, **tikai aizpilda lauku** — tu joprojām vari to rediģēt — un
**Piemērot** pārvieto abus, ar saitēm un visu; **Atcelt** nepārvieto neko.
Aizņemta nosaukuma izvēle no saraksta jautā to pašu, tāpat kā piezīmes
nomešana uz mapes, kurā jau ir tās nosaukums.

## Viens taustiņš abām pārdēvēšanām

Pārdēvēšanas komanda (pēc noklusējuma <kbd>F2</kbd> vai kā vien esi to pārlicis) **pārmaiņus** pārslēdzas starp Obsidian iebūvētā virsraksta pārdēvēšanu un šī spraudņa galvenes ceļa joslu. Ja esi izslēdzis Obsidian iebūvēto virsrakstu, galvenes ceļa josla kļūst par vienīgo mērķi, tāpēc taustiņš nekad nedara neko.

Ceļa joslā tas atver **nosaukumu bez tā paplašinājuma** — gandrīz vienmēr tieši to arī nozīmē pārdēvēt, un to pašu izvēlas, noklikšķinot uz nosaukuma. Nospied to vēlreiz, un tas dara to, ko tur darītu <kbd>Tab</kbd>: uz nosaukuma tas ir nākamais pakāpiens — nosaukums ar paplašinājumu, ceļš no glabātavas mapes, ceļš no sistēmas saknes; ja kaut kas ievadīts, tas to pabeidz, tāpat kā <kbd>Tab</kbd>.

**Cikls noslēdzas pie virsraksta.** Pieci nospiedumi ved cauri visam ciklam — iebūvētais virsraksts, nosaukums, nosaukums ar paplašinājumu, ceļš no glabātavas, ceļš no sistēmas saknes —, un sestais atkal ir iebūvētais virsraksts. Tas ir vienīgais nospiediens, kas atšķiras no <kbd>Tab</kbd>, kas tā vietā atgriežas ceļa sākumā — un septītais nonāk tur, kur nonāk <kbd>Tab</kbd> aplis: glabātavas saknē ar visu ceļu laukā un atzīmētu tās pirmo mapi. Tātad katru pakāpienu, ko sasniedz <kbd>Tab</kbd>, sasniedz arī šis taustiņš.

Komanda **Fokusēt ceļa joslu** laukā dara to pašu, ko darītu <kbd>Tab</kbd> — un tur, kur <kbd>Tab</kbd> veidotu apli, tā vietā atdod kursoru atpakaļ piezīmei. Nākamais tās nospiediens ir aplis: glabātavas sakne, atzīmēta pirmā mape.

**Laukā, kas jau ir atvērts**, taustiņš to pārvērš par pārdēvēšanu tieši tur, kur tas atrodas — saglabājot tekstu, kursoru un iezīmējumu —, un **Fokusēt ceļa joslu** to tāpat noņem no pārdēvēšanas režīma. **Jebkas cits**, kas nospiests vai noklikšķināts starp nospiedumiem, sāk jebkuru no cikliem no jauna, tāpēc nospiediens pēc tam, kad esi kaut ko rediģējis, nekad nenonāk kādā agrākā pakāpienā.

Ārpus glabātavas taustiņš arī darbojas — tur nav iebūvētā virsraksta, tāpēc pirmais nospiediens dodas tieši uz ceļa joslu.

Tas darbojas, apņemot komandu `workspace:edit-file-title`, nevis pārtverot taustiņu, tāpēc gan īsinājumtaustiņa pārlikšana, gan komandas palaišana no paletes darbojas nemainīgi.

## Kā tiek krāsotas saraksta rindas

| Krāsa | Nozīme |
| --- | --- |
| **Purpurs** | Piezīme (`.md`, `.markdown`) — kaut kas, ko Obsidian atvērs kā piezīmi, izcelts jauktas mapes saturā |
| **Oranžs** | Nav piezīme — viss, ko Obsidian neatvērs kā tādu, sākot no PDF līdz `.txt`, un kopā ar to `:page` ieraksti. Jauktas mapes saturs tiek lasīts, meklējot tajā piezīmes, un viena krāsa visam pārējam to pasaka ātrāk nekā brīdinājums pie dažiem no tiem; sk. [brīdinājuma krāsas](#divas-brīdinājuma-krāsas) |
| **Blāvs** | Ārpus glabātavas, tāpēc glabātavas pašas apstrāde neattiecas |
| **Zils**, treknrakstā | Kur tu jau esi: šīs joslas paša piezīme un mape, uz kuras ceļa josla atrodas. Pārdēvēšanas/pārvietošanas režīmā ieraksts *paturēt šo nosaukumu* stāv piezīmes vietā — abos gadījumos tā pati piezīme |
| **Sarkans** | Tikai pārdēvēšanas/pārvietošanas režīmā: nosaukums ir aizņemts. Tomēr izvēlams — izvēloties to, jautā, ko darīt ar failu, kas ir ceļā; sk. [Nosaukums, kas ir aizņemts](#nosaukums-kas-ir-aizņemts) |

**Mapes ir treknrakstā**, tāpēc mapes pašas piezīmei nav vajadzīga sava krāsa, lai izceltos no mapes: tā ir purpursarkana tāpat kā jebkura cita piezīme. **Līnija gar rindas malu** iezīmē nosaukumus, kas sākas ar to, ko ievadīji — zila, kur tie vēl vairāk sakrīt, zaļa uz zara, ko piedāvājums izvēlas; sk. [Ceļa ierakstīšana](#ceļa-ierakstīšana).

Lauks izmanto tās pašas krāsas tam, ko tas apzīmē — sk. [Ceļa ierakstīšana](#ceļa-ierakstīšana).

## Redzamības noteikumi

- Faili ar neatbalstītiem paplašinājumiem sarakstos parādās tikai tad, ja ir ieslēgts Obsidian iestatījums **Noteikt visus failu paplašinājumus** — **glabātavas iekšienē**. Ārpus tās šis iestatījums neattiecas: tas nosaka, ko glabātava indeksē, un nekas tur, ārā, glabātavā nav, tāpēc `.txt` blakus tavām piezīmēm tiek uzrādīts jebkurā gadījumā.
- Saraksts rāda līdz 1000 ierakstiem — desmit reizes vairāk nekā Obsidian paša ierobežojums. Ja mapē ir vairāk, pēdējā rinda parāda, cik tika izlaisti; turpini rakstīt, lai sarakstu sašaurinātu.
- Slēptie faili un slēptās mapes parādās tikai tad, ja ir ieslēgts šī spraudņa iestatījums **Rādīt slēptos failus**.
- **Aizsardzība pret pārrakstīšanu darbojas vienādi neatkarīgi no redzamības** — slēpts fails joprojām neļauj to pārrakstīt.

## Špikeris

Ceļš, kas **ievilkts pēdiņās**, tiek automātiski atbrīvots. Windows funkcija *Copy as path* dod `"C:\Users\you\note.md"` kopā ar pēdiņām, un čaula dara to pašu jebkuram ceļam ar atstarpi tajā; ielīmējot vai ierakstot to, abi varianti darbojas. Tikai dubultpēdiņa, un tikai kā saskaņots pāris ap visu, tiek noņemta — tā nevar parādīties īstā nosaukumā, kur gan var būt apostrofs.

| Tu gribi… | Dari šādi |
| --- | --- |
| Atvērt mapi (tās piezīmi vai parādīt to) | Noklikšķini uz atdalītāja **aiz** attiecīgās mapes |
| Piešķirt mapei mapes piezīmi, kuras tai vēl nav | **Veic dubultklikšķi** uz tā paša atdalītāja (nepieciešams mapes piezīmju spraudnis) |
| Nomainīt mapi pret kaimiņu | Noklikšķini uz mapes nosaukuma, tad raksti vai izvēlies |
| Pārdēvēt piezīmi vai mainīt tās mērķi | Noklikšķini uz piezīmes nosaukuma — ieskaitot paplašinājumu |
| Pārlūkot mapes saturu | Noklikšķini uz mapes nosaukuma; saraksts rāda tās vecāku mapi, tāpēc noklikšķini uz mapes **zem** tās, kuru gribi |
| Pārrakstīt mapi un visu zem tās | **Veic dubultklikšķi** uz mapes nosaukuma, tad raksti |
| Rediģēt ceļu no kādas mapes uz leju | Noklikšķini uz mapes nosaukuma, tad <kbd>→</kbd>, lai noņemtu iezīmējumu |
| Pāriet uz failu, ierakstot tā ceļu | Noklikšķini uz faila nosaukuma vai tukšās vietas, raksti, <kbd>Enter</kbd> |
| Tā vietā atvērt failu jaunā cilnē | <kbd>Ctrl</kbd>, izvēloties to, vai <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| Kopēt piezīmi kaut kur, nevis pārvietot to | Zīmulis, tad <kbd>Ctrl</kbd>, izvēloties vai apstiprinot mērķi |
| Izveidot piezīmi ceļā, kas neeksistē | Ieraksti ceļu — lauks kļūst **sarkans**, tiklīdz nekas sarakstā tam vairs neatbilst — tad <kbd>Enter</kbd>. Glabātavas iekšienē tas tiek izveidots uzreiz; ārpus tās vispirms tiek prasīts apstiprinājums |
| Noskaidrot, vai ierakstītais ceļš jau eksistē | Paskaties uz krāsu: tā pārņem tās rindas krāsu, ko apzīmē, un sarkans nozīmē, ka <kbd>Enter</kbd> to izveidotu |
| Nolaisties par vienu līmeni, rakstot | Ieraksti `/` |
| Pakāpties atpakaļ uz augšu par vienu līmeni, rakstot | <kbd>Backspace</kbd> tukšā ievades laukā |
| Ievilkt laukā mapes, kas ir pirms tā | <kbd>←</kbd> tā sākumā — vienu; <kbd>Shift</kbd>+<kbd>Home</kbd> vai <kbd>Home</kbd> ar aizvērtu sarakstu — visas |
| Pārvietot vai pārdēvēt atvērto piezīmi | Noklikšķini uz zīmuļa, tad pārlūko vai raksti kā aprakstīts iepriekš |
| Pārvietot uz nosaukumu, kas ir aizņemts | Tāpat apstiprini: dialogs ļauj apmainīt vietas, nosaukumus vai abus, vai piešķirt failam ceļā citu nosaukumu |
| Pārvietot, nepārdēvējot | Zīmulis → noklikšķini mērķa mapē → izvēlies piespraustu pašreizējo faila nosaukumu |
| Pārdēvēt uz vietas | Divreiz <kbd>F2</kbd> (pirmais nospiediens iet uz iebūvēto virsrakstu, otrais — uz galveni) |
| Pāriet uz citu glabātavu, mājas mapi vai diskdzini | Noklikšķini uz glabātavas nosaukuma |
| Atvērt failu no ārpus glabātavas | Glabātavas nosaukums → izvēlies atrašanās vietu → pārlūko → izvēlies failu (tikai lasāms, kamēr nav *Rediģēt kā tekstu*) |
| Pabeigt ierakstāmo nosaukumu | <kbd>Tab</kbd> vai <kbd>End</kbd> piedāvātajam; <kbd>→</kbd> pārņem no tā vienu burtu |
| Ieiet tajā, kad palicis viens nosaukums | Vēlreiz <kbd>Tab</kbd> |
| Atsaukt soli vai pamest mapi | <kbd>Shift</kbd>+<kbd>Tab</kbd> |
| Paņemt visu ceļu vai sistēmas ceļu | <kbd>Tab</kbd> pāri beigām vai četri klikšķi |
| Kopēt nosaukumu, ceļu vai sistēmas ceļu | Divreiz ar peles labo pogu noklikšķini uz tā; tukšā vieta trīs reizes — sistēmas ceļam |
| Sasniegt to, ko glabātavas pārvaldnieks piedāvā šai glabātavai | Noklikšķini ar peles labo pogu uz ikonas rindas sākumā |
| Kopēt glabātavas ID | Noklikšķini ar peles labo pogu uz ikonas rindas sākumā |
| Atvērt citu glabātavu, kuru pārlūkoji | Noklikšķini ar peles labo pogu uz tās nosaukuma rindas sākumā |
| Redzēt faila paplašinājumu rindā | Ieslēdz **Rādīt failu paplašinājumus** iestatījumos |
| Atvērt mapes segmentu jaunā cilnē | <kbd>Ctrl</kbd> vai vidējais klikšķis uz tā, vai velc to uz ciļņu joslu |
| Sasniegt ceļa joslu no tastatūras | Piešķir taustiņu *Fokusēt ceļa joslu* sadaļā Īsinājumtaustiņi |
| Atvērt tīmekļa adresi vai `obsidian://` saiti | Ieraksti to joslā un nospied <kbd>Enter</kbd> |
| Atcelt jebko | <kbd>Esc</kbd> vai noklikšķini ārpus galvenes joslas |
| Izmēģināt ierakstus, pirms tos apstiprini | Pārvietojies ar bultiņām vai peli pa sarakstu; <kbd>↑</kbd> pāri augšai atdod tavu tekstu atpakaļ |
| Pārvietot piezīmi uz mapi virs tās | Velc to uz attiecīgo mapi rindā |
| Paturēt teksta gabalu kā jaunu piezīmi | Velc tekstu uz mapi, ieraksti nosaukumu, <kbd>Enter</kbd> |
| Pievienot teksta gabalu piezīmei, kuru lasi | Velc to uz piezīmes nosaukumu, apstiprini |
| Redzēt saīsinātu mapes nosaukumu pilnībā | Novieto peli virs tā vai paplašini paneli |
| Uzzināt, kur pati glabātava atrodas | Novieto peli virs ikonas rindas sākumā |
| Izņemt piezīmi no glabātavas | Zīmulis → pārlūko ārpusē → apstiprini dialogu (saites salūzīs) |
| Atļaut rakstīšanu ārpus glabātavas | Noklikšķini uz **sarkanās piekaramās atslēgas** galvenē; tās vietā stājas pārdēvēšanas pārslēgs |
| Aizslēgt to atkal | Klikšķini uz pārslēga, līdz atslēga atkal ir tur — viens klikšķis iekšā, viens ārā |
| Dzēst failu ārpus glabātavas | Atver piekaramo atslēgu, tad noklikšķini ar peles labo pogu uz faila: *Dzēst* to pārvieto uz sistēmas grozu |

## Iestatījumi

| Iestatījums | Iespējas | Noklusējums | Ko tas dara |
| --- | --- | --- | --- |
| **Valoda** | Obsidian noklusējums vai kāda no 46 | Obsidian noklusējums | Kādā valodā ir šī spraudņa paša teksts. *Obsidian noklusējums* seko valodai, kas iestatīta Izskata iestatījumos, un to grib gandrīz ikviens. Pati rinda — tās nosaukums, apraksts un *Obsidian noklusējums* — paliek angļu valodā, lai kas arī tiktu izvēlēts, jo tas ir ceļš atpakaļ ārā no valodas, kuru tu nevari izlasīt. Grieķu un sanskrita valodas šeit ir tulkotas un nav pieejamas Obsidian pašu sarakstā, tāpēc šis iestatījums ir vienīgais veids, kā tās sasniegt. |
| **Līdzinājums** | Pa kreisi / Pa vidu / Pa labi | Pa kreisi | Kur galvenes rindā atrodas ceļa josla. *Pa vidu* atbilst Obsidian klasiskajam izskatam. |
| **Atdalītājs** | Jebkura rakstzīme | `/` | Atdalītājs, kas zīmēts starp segmentiem. Seši ar vienu klikšķi izvēlami priekšiestatījumi (`/ > ▸ › \ •`) atrodas pirms teksta lauka. |
| **Rādīt glabātavas nosaukumu** | Ieslēgts / Izslēgts | Ieslēgts | Vai pati glabātava ir pirmais ceļa joslas segments. Izslēdzot, šis segments kļūst par 🏠 ikonu, nevis pazūd, tāpēc ceļš joprojām sākas kaut kur noklikšķināmā vietā. |
| **Mapes nosaukums atver sarakstu** | Ieslēgts / Izslēgts | Ieslēgts | Apmaina to, ko dara mapes nosaukums un atdalītājs aiz tā — sk. [tabulu iepriekš](#ceļa-josla). Ar [Folder notes](obsidian://show-plugin?id=folder-notes) atdalītājs atver mapju piezīmes. Nekad neattiecas pārdēvēšanas/pārvietošanas režīmā. |
| **Rādīt slēptos failus** | Ieslēgts / Izslēgts | Izslēgts | Vai slēptie faili un slēptās mapes tiek uzrādītas sarakstos. Aizsardzība pret pārrakstīšanu attiecas jebkurā gadījumā. |
| **Rādīt visus failu tipus** | — | — | Šis nav šī spraudņa, bet gan Obsidian iestatījums, minēts šeit, jo tas atbild uz to pašu jautājumu: tava glabātava indeksē tikai tos failu tipus, kurus tai liek indeksēt, un sarakstos var parādīties tikai tas, kas ir indeksēts. Meklē to Obsidian iestatījumos un ieslēdz, lai redzētu visus failus; poga blakus rindai atver šo lapu ar iestatījumu jau ievirzītu skatā un pamirgotu, tāpat kā to darītu klikšķis pašu iestatījumu meklēšanā. Ārpus glabātavas tas neattiecas, jo tur nekas tik un tā netiek indeksēts. |
| **Rādīt failu paplašinājumus** | Ieslēgts / Izslēgts | Izslēgts | Vai faila nosaukums rindā ietver tā paplašinājumu. Izslēgts — tas tiek izlaists, tāpat kā Obsidian to izlaiž piezīmes virsrakstā. Ieslēgts — rinda nosauc failu tā, kā to dara failsistēma. Jebkurā gadījumā paplašinājums ir otrais, kas tiek atmests, kad rindai pietrūkst vietas, tūlīt aiz glabātavas nosaukuma. |
| **Piekļuve ārējiem failiem** | Ieslēgts / Izslēgts | **Izslēgts** | Vai glabātavas nosaukums atver atrašanās vietu sarakstu. Izslēgts — spraudnis nekad neskatās tālāk par šo glabātavu. |
| **Īsinājumtaustiņi** | poga | — | Atver Obsidian *Īsinājumtaustiņi*, filtrētu pēc šī spraudņa, kur *Fokusēt ceļa joslu* var piešķirt taustiņu. |

## Ikonu nomaiņa

Lure attēlo trīs ikonas: glabātavas saknes ikonu (kad **Rādīt glabātavas nosaukumu** ir izslēgts), pārdēvēšanas/pārvietošanas pārslēgu un piekaramo atslēgu, kas ieņem tās vietu, kamēr rakstīšana ārpus glabātavas ir slēgta. Visas var nomainīt no tēmas vai CSS fragmenta — iestati aizvietotāja zīmi un paslēp iebūvēto vienā noteikumā:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* Only ever shown shut: opening it hands the slot to the rename toggle. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}
```

`--lure-icon-glyph` pieņem visu, kas ir derīgs CSS `content` vērtībā, tāpēc `url(...)` der attēlam tikpat labi kā teksta vai emocizīmes rakstzīmei. Atstāj `--lure-icon-svg` mierā, ja gribi paturēt Lucide ikonu un savu zīmi uzzīmēt tai blakus.
