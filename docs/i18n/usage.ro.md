<!-- Traducerea fișierului docs/usage.md — stare: commit 7b2691a.
     Traducere automată (Claude Opus 5), neverificată de vorbitori
     nativi. Etichetele pluginului provin din src/lang/translations.ts,
     iar cele ale Obsidian din textele livrate de aplicația însăși, deci
     corespund cu ceea ce vezi pe ecran. -->

**Citește acest fișier în alte limbi:** [English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · [Čeština](usage.cs.md) · [Dansk](usage.da.md) · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · [Bahasa Indonesia](usage.id.md) · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · [Norsk](usage.no.md) · [Polski](usage.pl.md) · [Português](usage.pt.md) · [Português (Brasil)](usage.pt-BR.md) · **Română** · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

# Utilizare

[← înapoi la README](README.ro.md)

## Bara de cale

Calea completă a notiței în seif înlocuiește numele gol al fișierului din bara de titlu a vizualizării — bara de sub rândul filelor, care găzduiește și butoanele înainte/înapoi.

Pe acest rând sunt două lucruri pe care se poate face clic, iar **Numele folderului deschide lista** hotărăște care ce face:

| | Numele folderului | Separatorul de după el |
| --- | --- | --- |
| **Pornit** (implicit) | Selectează acel folder pentru editare | Deschide folderul |
| **Oprit** | Deschide folderul | Coboară în acel folder |

„Deschide folderul” înseamnă ceea ce face un clic pe acel segment în Obsidian fără pluginuri. Dacă niciun plugin nu ascultă acolo, folderul este arătat în Exploratorul de fișiere din bara laterală — evidențiat și desfășurat, ca să i se vadă conținutul.

Cu [Folder notes](obsidian://show-plugin?id=folder-notes) instalat, același clic deschide în schimb notița acelui folder. Este singurul plugin de notițe de folder despre care s-a constatat că revendică calea din bara de titlu; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) și [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) gestionează notițe de folder, dar nu ascultă clicul pe cale, așa că, împreună cu ele, separatorul arată folderul ca de obicei. Vezi [compatibilitatea](../compatibility.md#verified-against).

Un separator este **subliniat doar când folderul dinaintea lui chiar are o notiță de folder**, deci sublinierea este o promisiune că există ceva de deschis. Fiecare separator rămâne oricum accesibil prin clic — unul nesubliniat își arată și își desfășoară folderul în bara laterală, lucru pe care cursorul îl semnalează în continuare. Sublinierea părăsește numele folderului în același timp: cu schimbul pornit, numele deschide lista, așa că marcarea lui drept legătură către notiță ar fi o minciună.

**Modul redenumire/mutare le anulează pe amândouă**, indiferent ce spune setarea: nimic de pe rând nu deschide un folder cât timp o mutare este în așteptare, fiindcă a deschide unul ar însemna abandonarea mutării. Numele de foldere se selectează pentru editare, iar separatoarele coboară — ambele sunt moduri de a alege destinația — și sublinierea dispare, ca să arate că deschiderea este suspendată.

**Rădăcina seifului** este singurul segment care nu este un segment de cale. Nu are un părinte din care să listeze vecini, așa că deschide în schimb [lista de locații](#navigarea-în-afara-seifului) — celelalte seifuri ale tale, folderul personal, rădăcina sistemului de fișiere și unitățile montate.

## Clic pe un segment: înlocuiește-l cu unul vecin

Un clic pe numele unui folder selectează **numele acelui folder** într-un câmp de text și deschide o listă a folderului **cu un nivel mai sus** — părintele lui. Scrierea sau alegerea unei intrări schimbă acest folder cu unul vecin și lasă neatins tot ce se află sub el, așa că `Proiecte/2026/Start.md` → clic pe `2026` → alegi `2025` îți dă `Proiecte/2025/Start.md`.

Un clic pe **numele notiței** funcționează la fel față de propriul ei folder și selectează numele fișierului **inclusiv extensia** — redenumirea sau reorientarea unei notițe înseamnă de obicei și schimbarea acesteia.

Clicul pe folder a selectat deja un segment, așa că **încă un clic** lărgește selecția la întreg rândul — acel folder *și* tot ce se află sub el — iar scrierea înlocuiește atunci restul căii dintr-o dată. Funcționează la fel în modul navigare și în modul redenumire/mutare.

Acest lucru se aplică doar ca o continuare a clicului care a deschis câmpul. Odată ce ai folosit câmpul, el se comportă ca orice alt câmp de text: clicul plasează cursorul, dublul clic ia un cuvânt, triplul clic ia rândul.

În ambele cazuri restul căii rămâne vizibil în jurul câmpului, ca jetoane înaintea lui și ca text neselectat după el, așa că întreaga cale nu dispare niciodată din bara de titlu. Scrie ca să înlocuiești selecția sau apasă <kbd>End</kbd> / <kbd>→</kbd> ca s-o păstrezi și să editezi de acolo. Lista arată tot folderul, indiferent ce este precompletat; începe să filtreze abia când scrii cu adevărat.

## Coborârea prin separator

Un clic pe un separator (cu **Numele folderului deschide lista** oprit) coboară în folderul dinaintea lui: lista arată conținutul *acelui* folder, iar restul căii se deschide selectat în câmp. Alegerea unui folder îl adaugă la urma căii și deschide imediat lista următoare, așa că poți coborî din clic în clic printr-un arbore fără să părăsești rândul barei de titlu.

## Intrările din listă sunt rânduri reale de manager de fișiere

Fiecare fișier și folder din listă se comportă ca rândul său din Exploratorul de fișiere:

- **Clic dreapta** pentru același meniu contextual — *Notă nouă* / *Director nou* pe un folder, *Deschideți într-o filă nouă* / *Redenumiți…* / *Șterge* pe un fișier — inclusiv intrările pe care alte pluginuri le adaugă în meniurile de fișier.
- **Trage** o intrare oriunde Obsidian acceptă un fișier: într-un editor, ca să inserezi o legătură; peste un folder din Exploratorul de fișiere, ca s-o muți; pe bara de file, ca s-o deschizi.

Formulările din meniuri vin din traducerile Obsidian însuși, deci se potrivesc cu restul aplicației în orice limbă.

## Scrierea unei căi

- Un clic pe **spațiul gol** dinaintea sau de după cale deschide un câmp de text precompletat cu întreaga cale și selectat în întregime — scrie peste ea sau editeaz-o pe loc. (Un clic pe numele fișierului selectează doar numele fișierului; vezi mai sus.)
- Scrierea cât timp urma căii este afișată transformă segmentul final într-un câmp mic, cu autocompletare vie limitată la folderul curent.
- `/` confirmă segmentul curent și coboară în el.
- <kbd>Backspace</kbd> într-un câmp gol iese înapoi către folderul părinte și îi redeschide numele, cu cursorul la sfârșit.
- <kbd>Enter</kbd> confirmă; <kbd>Esc</kbd> sau un clic în altă parte anulează și revine la calea reală a fișierului.

Câmpul este lipsit de podoabe — fără casetă, fără chenar — așa că se citește ca textul căii însuși și crește singur pe măsură ce scrii.

## Navigarea nu atinge niciodată fișierul deschis

În modul implicit (navigare), notița deschisă nu este **niciodată** redenumită sau mutată.

- O cale care duce la un fișier existent îl deschide.
- O cale care încă nu există întreabă *„Creezi un fișier nou?”*. Confirmarea creează folderele părinte lipsă și fișierul; anularea nu face absolut nimic.

## <kbd>Ctrl</kbd> — filă nouă și copiere în loc de mutare

Ținerea apăsată a tastei <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> pe macOS) în timp ce alegi un fișier din listă sau în timp ce apeși <kbd>Enter</kbd> pe o cale trimite rezultatul într-o **filă nouă** în loc de aceasta:

| | Simplu | Cu <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Alegi sau scrii un fișier existent | Se deschide aici | Se deschide într-o filă nouă |
| Scrii o cale care nu există | Întreabă, apoi deschide aici | Întreabă, apoi deschide într-o filă nouă |
| Confirmi o cale în modul redenumire/mutare | **Mută** notița acolo | O **copiază** acolo și deschide copia într-o filă nouă |

Modificatorul este citit cu regula proprie a Obsidian, deci se comportă exact ca pe o legătură sau pe un rând din Exploratorul de fișiere — clicul cu rotița înseamnă tot „filă nouă”, <kbd>Ctrl</kbd>+<kbd>Alt</kbd> înseamnă o împărțire, iar <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> o fereastră nouă.

Copierea refuză să suprascrie, exact ca mutarea — inclusiv peste propria cale a notiței, unde nu există nimic rezonabil de copiat.

## Navigarea în afara seifului

**Aceasta este oprită implicit.** Pornește mai întâi **Acces la fișiere externe** în setări — citirea și scrierea în afara seifului este singurul lucru pe care acest plugin îl face și pe care Obsidian însuși nu îl face, așa că este ceva la care aderi, nu ceva din care te retragi. Cu ea oprită, numele seifului doar arată seiful tău în Exploratorul de fișiere, iar nimic de aici nu privește vreodată dincolo de el.

Un clic pe **numele seifului** (sau pe pictograma 🏠, când *Afișează numele seifului* este oprit) deschide o listă de locuri, nu de conținut:

- **Celelalte seifuri ale tale**, citite din propriul registru al Obsidian, cele deschise cel mai recent primele, fiecare sub pictograma de seif a Obsidian — cea pe care aplicația însăși o folosește pentru comenzile de seif. Seiful pe care îl ai deja deschis primește în schimb o casă: de acolo pornește rândul în mod implicit, nu este un loc unde să mergi.
- **Folderul personal**, sub propriul nume de cont, marcat cu un `~`. Lucide nu are tildă, așa că aceasta este desenată de plugin pe propria grilă de 24×24 a Lucide, cu aceeași grosime de linie — o pictogramă care lipsește din set, nu un caracter de text așezat printre pictograme.
- **Rădăcina sistemului de fișiere**, etichetată `root` — netradusă, fiindcă acesta îi este numele pe orice sistem — în locul lui `/`, care s-ar citi ca un pas gol lângă separatorul care îl urmează.
- **Unitățile montate**, cu o pictogramă pe tip acolo unde determinarea este ieftină: partajările de rețea, discurile optice, dischetele și mediile detașabile o au pe a lor; orice altceva primește o unitate generică. Pe Windows unitățile apar ca `C:` cu o pictogramă generică — numele de volum și tipurile exacte necesită WMI, ceea ce în mod deliberat nu se face.

Alegerea altui seif **nu comută Obsidian pe el.** Tot ce ai deschis rămâne deschis; bara de cale doar începe să navigheze acolo. Exact acesta este rostul de a o avea pe bara de cale, în loc s-o lăsăm în seama comutatorului de seifuri din bara laterală.

### Cât timp ești afară

Calea **începe de la locația pe care ai ales-o**, nu de la structura de directoare a mașinii — alege `Arhivă` și rândul se citește `Arhivă / notițe / …`, nu `/home/tu/Seifuri/Arhivă/notițe/…`. Segmentul de început poartă o pictogramă pentru ceea ce este (seif, folder personal, unitate), iar <kbd>Backspace</kbd> se oprește acolo, în loc să urce mai departe prin restul sistemului de fișiere. Cu *Afișează numele seifului* oprit, acel segment este doar pictograma — setarea privește segmentul de început al rândului, oricare ar fi seiful pe care îl numește, nu doar pe al tău.

Bara de cale este **încadrată în culoarea de eroare** — același inel pe care îl desenează modul redenumire — cât timp indică în afara seifului tău. Ea marchează o condiție permanentă, nu un moment: cât timp este acolo, niciuna dintre prelucrările proprii ale Obsidian nu se aplică la ceea ce arată rândul, iar scrierea rămâne blocată până când spui tu altfel.

În rest, navigarea funcționează ca înăuntru: jetoane, separatoare, scriere, autocompletare, <kbd>Backspace</kbd> ca să ieși. Se aplică și aceleași reguli de vizibilitate, deci extensiile neacceptate au în continuare nevoie de setarea *Permiteți afișarea fișierelor indiferent de extensia acestora* din Obsidian, iar fișierele ascunse au în continuare nevoie de setarea acestui plugin.

**Clicul dreapta și tragerea** nu funcționează acolo — acelea sunt prelucrările proprii ale Exploratorului de fișiere și au nevoie de un fișier pe care seiful îl cunoaște.

### Scrierea în afara seifului

Tot ce scrie este **blocat implicit.** Un **lacăt** apare lângă comutatorul de redenumire din bara de titlu cât timp rândul indică în afara seifului tău; apăsarea lui deschide lacătul și îl face roșu, potrivindu-se cu inelul din jurul rândului.

Permisiunea se acordă **unei locații, nu unui moment**: supraviețuiește la tot ce ai face lucrând într-un singur loc — încheierea unei mutări, un clic în afara câmpului, deschiderea unui fișier — și se încheie când alegi din listă alt seif, altă unitate sau rădăcina, când rândul revine la un fișier din seif sau când apeși din nou lacătul. Așa că o serie de mutări în același folder costă o apăsare, nu una per fișier.

Cu lacătul deschis, bara de cale se comportă acolo așa cum se comportă înăuntru:

| Gest | Rezultat |
| --- | --- |
| Scrii un nume care nu există, <kbd>Enter</kbd> | Aceeași întrebare „îl creăm?” ca înăuntru; se creează și folderele părinte lipsă. Un nume fără extensie devine un `.md`, exact ca înăuntru |
| Modul redenumire/mutare, scrii un nume nou | Redenumește fișierul pe care îl arată rândul. Un nume fără extensie o păstrează pe cea a fișierului — aici afară un folder conține fișiere de tot felul, iar o redenumire nu ar trebui să transforme pe tăcute un `.png` într-un `.md` |
| Modul redenumire/mutare, navighezi în altă parte, alegi **păstrează acest nume** | Îl mută acolo cu numele pe care îl are deja |
| Ții <kbd>Ctrl</kbd> la oricare dintre ele | Copiază în loc să mute și deschide copia într-o filă nouă |

Blocate, toate acestea raportează ce le împiedică, în loc să se întâmple. Nimic nu este suprascris vreodată în niciuna dintre stări: o destinație care există deja este refuzată, iar refuzul este cel al sistemului de fișiere însuși (`COPYFILE_EXCL`, o creare exclusivă), nu o verificare care ar putea pierde o cursă. O mutare între sisteme de fișiere — de pe un stick USB, de pe o partajare de rețea — recurge la copiere-apoi-ștergere, iar originalul este eliminat abia după ce copia a ajuns.

**Un lucru pe care lacătul nu îl deblochează: mutarea unei notițe *în afara* seifului tău.** `fileManager` nu poate urmări un fișier peste această graniță, așa că fiecare legătură care indică spre notiță s-ar rupe pe tăcute, iar Obsidian ar vedea-o pur și simplu dispărând. Ținerea apăsată a tastei <kbd>Ctrl</kbd> o copiază în schimb afară, ceea ce nu are deloc această problemă, iar notificarea o spune. În sens invers — aducerea unui fișier din afară *în* seif — nu este nici ea încă legată.

### Deschiderea unui fișier extern

Editorul Obsidian funcționează doar cu fișiere din interiorul seifului, așa că un fișier extern **nu poate** fi deschis ca o notiță adevărată, cu legături, retrolegături și restul — aceasta este o limită a aplicației, nu a acestui plugin. Alegerea unuia deschide în schimb o **previzualizare**, doar pentru citire până când spui tu altfel:

| Tip | Afișat ca |
| --- | --- |
| `.md`, `.markdown` | Markdown randat |
| Imagini, audio, video, PDF | Player/vizualizator nativ |
| Orice alt fișier **text** (`.json`, `.css`, `.log`, `.txt`, …) | Text simplu, cuvânt cu cuvânt |
| Formate binare fără vizualizator | Predate lui *Deschide extern* |

Vizualizatorul are două citiri ale unui fișier și, fiindcă se exclud reciproc, este afișată doar cea către care ai **comuta**:

| | Ce face | Implicit pentru |
| --- | --- | --- |
| **Vezi ca Markdown** | Randează fișierul ca notiță, doar pentru citire | `.md`, `.markdown` |
| **Editează ca text** | Sursa, editabilă | tot restul |

În afara seifului, **Editează ca text** este și apăsarea care ridică starea „doar pentru citire” — modul și permisiunea sunt un singur gest, nu două butoane la care să te gândești. Este nuanțat în roșu **ori de câte ori apăsarea ar ridica starea „doar pentru citire”**, fie că pregătești editarea pe loc, fie că vii direct din vizualizarea randată; în interiorul seifului nu e nimic de deblocat, așa că rămâne simplu. **Vezi ca Markdown** primește o spălare ușoară de accent — aceeași nuanță pe care Obsidian o dă textului selectat — marcându-l ca drum de întoarcere, nu ca îndemn la acțiune.

Fiindcă butonul urmărește *editarea*, nu modul brut, un fișier care stă doar pentru citire în vizualizarea text oferă în continuare **Editează ca text**: aceea este apăsarea care o pregătește. Un fișier în care nu se va putea scrie niciodată — trunchiat sau ilizibil — spune în schimb **Vezi ca text**, fiindcă atât poate oferi apăsarea.

Valorile implicite merg în direcția utilă, nu în cea literală: un `#` într-un script de shell este un comentariu, nu un titlu, așa că randarea unui `.log` ca Markdown l-ar înghiți pe tăcute. Ambele valori implicite pot fi anulate per fișier, iar alegerea intră în istoricul filei, așa că înainte/înapoi și un spațiu de lucru redeschis o păstrează — o mulțime de notițe trăiesc în fișiere `.txt`, iar o mulțime de fișiere `.md` sunt mai ușor de citit ca sursă.

**Fișierele din seiful tău sunt editabile imediat**, fără nicio deblocare: *Editează ca text* este un editor adevărat și scrie înapoi pe măsură ce scrii.

**Editarea este ținută minte peste comutare.** Trecerea la *Vezi ca Markdown* o suspendă — o randare statică nu are în ce să scrii, iar Previzualizarea live are nevoie de editorul propriu al Obsidian, care există doar pentru fișierele din interiorul seifului — așa că nimic nu pretinde că editezi cât timp ești acolo. Întoarcerea la *Editează ca text* reia de unde ai rămas.

**Fișierele din afara seifului se deschid doar pentru citire, iar *Editează ca text* ridică asta.** Apăsarea este toată poarta: până când nu se întâmplă, nu se scrie nimic acolo afară. După aceea fișierul se salvează pe măsură ce scrii, exact ca unul din seif; iar linia de stare se schimbă dintr-un lacăt într-un creion. Deblocarea acoperă acel fișier în acea filă — navigarea la alt fișier blochează din nou — și în mod deliberat nu este păstrată în istoricul filei, așa că un spațiu de lucru redeschis nu revine niciodată cu scrierea deja pregătită pe un fișier de sistem pe care nu-ți amintești să-l fi deschis.

**Fișierele trunchiate rămân doar pentru citire oricum** — salvarea a ceea ce e pe ecran ar arunca tot ce trece de limită, așa că butonul nu este oferit deloc, în loc să fie oferit și refuzat. La fel și pentru un fișier care nu a putut fi citit: nu e nimic de scris înapoi în afara unui panou gol.

Dacă scrierea eșuează — o montare doar pentru citire, un fișier care nu-ți aparține — motivul propriu al sistemului este afișat într-o notificare.

Fișierele foarte mari sunt afișate trunchiat, iar linia de stare o spune, în loc să te lase să descoperi singur — alături de celelalte condiții, nu în urma butoanelor, fiindcă este un fapt despre fișier ca oricare altul. Limitele sunt măsurate față de un randor real, nu ghicite — așezarea unui megaoctet de text într-un singur panou omoară de-a dreptul procesul de randare al Obsidian, iar Markdown costă de câteva ori mai mult per octet decât textul simplu, așa că cele două au limite separate, iar un singur rând uriaș este scurtat chiar și când fișierul în ansamblu este mic.

**Liniile de stare sunt etichete, iar explicația este un indiciu.** Fiecare linie spune ce este adevărat în cât mai puține cuvinte — *În afara seifului*, *Niciun editor pentru acest tip de fișier*, *Trunchiat — fișier prea mare* — fiindcă butoanele de lângă ele spun deja în ce stare este fișierul. Trecerea cu cursorul peste una dă propoziția: de ce nu o poate deschide Obsidian ca notiță, ce s-ar întâmpla altfel cu acest tip de fișier, cât te costă trunchierea.

Acest lucru se aplică și fișierelor din **interiorul** seifului tău. Obsidian predă orice extensie pentru care nu are o vizualizare direct aplicației implicite a desktopului — așa că un `.txt` sau un `.json` din seiful tău te-ar scoate cu totul din Obsidian. Acelea se deschid acum în același vizualizator, cu inelul portocaliu, fiindcă „deschide-l în Obsidian” este ceea ce ai cerut — iar, fiind fișiere din seif, sunt editabile acolo fără nicio deblocare. Fișierele binare fără vizualizator păstrează comportamentul Obsidian; nu e nimic de arătat.

Previzualizarea se deschide **în fila în care erai**, așa că înainte/înapoi te readuc la notița din care ai venit; ține <kbd>Ctrl</kbd> pentru o filă nouă, ca peste tot. Bara de titlu continuă să arate calea fișierului extern cât timp acesta este deschis, așa că poți naviga mai departe de acolo.

Un rând discret deasupra conținutului oferă ieșirile:

- **Deschide în *(seif)*** — apare când fișierul aparține unuia dintre celelalte seifuri ale tale. Îl predă gestionarului de URI al Obsidian, care deschide fereastra acelui seif cu notița în ea, ca notiță adevărată și editabilă. Fereastra aceasta rămâne exact cum era; nimic nu se schimbă sub tine.
- **Vezi ca Markdown** / **Editează ca text** — cele două citiri; a doua ridică și starea „doar pentru citire” în afara seifului.
- **Deschide extern** — predă fișierul aplicației implicite a desktopului tău, inclusiv formatele binare pe care acest vizualizator nu le poate arăta.

Nimic din afara seifului tău nu este scris dacă nu apeși mai întâi *Editează ca text*. Vezi secțiunea [În afara seifului](README.ro.md#în-afara-seifului) din README pentru dezvăluirea completă.

## Cele două culori de avertizare

| | Când | Ce înseamnă |
| --- | --- | --- |
| Inel **roșu** pe bara de cale | Rândul indică în afara seifului tău | Obsidian nu poate deschide ca notiță ceea ce se află acolo, iar nimic de acolo nu este scris până când nu deschizi lacătul. |
| Inel **portocaliu** pe bara de cale, intrări portocalii în listă | Fișierul este un tip text pentru care Obsidian nu are vizualizare | O precauție. Obsidian l-ar preda aplicației implicite a desktopului tău; pluginul îl arată în schimb. |

**Cele două sunt independente și pot fi valabile în același timp** — un `.json` extern este în afara seifului tău *și* de un tip pentru care Obsidian nu are editor. În vizualizator apar ca linii separate, fiecare spunând doar faptul ei. Pe bara de cale, roșul câștigă acolo unde se aplică amândouă, fiindcă două inele ar fi doar zgomot.

Treapta portocalie este în mod deliberat îngustă. Tipurile înregistrate (Markdown, canvas, imagini, PDF, audio, video) sunt tratate cum se cuvine și nu primesc nimic. Nici fișierele binare nu primesc nimic — nu ai să editezi din greșeală un `.zip` până îl faci varză. Rămâne exact pericolul: un `.json`, `.css` sau `.log` pe care **Permiteți afișarea fișierelor indiferent de extensia acestora** l-a făcut vizibil.

Roșul câștigă acolo unde s-ar aplica amândouă; două inele deodată ar fi doar zgomot.

## Modul redenumire/mutare

Butonul cu creion din capătul din dreapta al barei de titlu — lângă butonul de mod de vizualizare, de aceeași mărime cu butoanele native — comută modul redenumire/mutare. Rândul barei de titlu este atunci încadrat în culoarea de accent, exact ca la redenumirea din Exploratorul de fișiere. Aceleași clicuri și apăsări de taste confirmă acum o mutare sau o redenumire prin `fileManager.renameFile` al Obsidian, așa că toate legăturile către notiță o urmează.

În timpul redenumirii:

- Numele curent al fișierului este fixat în lista fiecărui folder, așa că mutarea unei notițe fără a o redenumi este un singur clic.
- Numele deja ocupate în folderul de destinație sunt estompate, dar rămân selectabile.
- Intrarea este validată în timp real față de regulile de redenumire proprii ale Obsidian — aceleași seturi de caractere, aceleași mesaje, același indiciu roșu pe care îl primești când redenumești în arborele de fișiere — așa că un nume ilegal sau în conflict este semnalat pe măsură ce scrii și nu poate fi confirmat.
- Un clic în afara barei de titlu sau pierderea focalizării de către bara de titlu încheie modul redenumire.

## O singură tastă pentru ambele redenumiri

Comanda de redenumire (<kbd>F2</kbd> implicit, sau ce ai reasignat) **alternează** între redenumirea titlului încorporat din Obsidian și bara de cale din bara de titlu a acestui plugin, cu întreaga cale selectată. Dacă ai oprit titlul încorporat al Obsidian, bara de cale devine singura țintă, așa că tasta nu rămâne niciodată fără efect.

Aceasta funcționează prin împachetarea comenzii `workspace:edit-file-title`, nu prin acapararea tastei, așa că atât reasignarea scurtăturii, cât și rularea comenzii din paletă funcționează neschimbate.

## Cum sunt colorate intrările din listă

| Culoare | Înseamnă |
| --- | --- |
| **Mov** | O notiță (`.md`, `.markdown`) — ceea ce Obsidian va deschide ca notiță, scoasă în evidență dintr-un folder cu conținut amestecat |
| **Portocaliu** | Un tip text pentru care Obsidian nu are vizualizare; vezi [culorile de avertizare](#cele-două-culori-de-avertizare) |
| **Estompat** | În afara seifului tău, deci prelucrarea proprie a seifului nu se aplică |
| **Albastru** | Doar în modul redenumire/mutare: intrarea *păstrează acest nume* — o destinație, nu ceva care există, așa că este scoasă în evidență dintre numele de fișiere printre care stă |
| **Gri** | Doar în modul redenumire/mutare: numele este ocupat. Rămâne selectabil — alegerea unuia umple câmpul, unde validarea semnalează conflictul |

## Reguli de vizibilitate

- Fișierele cu extensii neacceptate apar în liste doar dacă setarea **Permiteți afișarea fișierelor indiferent de extensia acestora** din Obsidian este pornită.
- Lista arată cel mult 100 de intrări — limita proprie a Obsidian. Când un folder are mai multe, ultimul rând spune câte au rămas pe dinafară; scrie mai departe ca să restrângi lista.
- Fișierele și folderele ascunse apar doar dacă setarea **Afișează fișierele ascunse** a acestui plugin este pornită.
- **Protecția la suprascriere funcționează identic, indiferent de vizibilitate** — un fișier ascuns tot te împiedică să îl suprascrii.

## Foaie de referință

| Vrei să… | Fă asta |
| --- | --- |
| Deschizi un folder (notița lui sau să-l arăți) | Clic pe separatorul de **după** acel folder |
| Schimbi un folder cu unul vecin | Clic pe numele acelui folder, apoi scrie sau alege |
| Redenumești sau reorientezi notița | Clic pe numele notiței — cu extensie cu tot |
| Navighezi prin conținutul unui folder | Clic pe numele acelui folder; lista arată părintele lui, deci clic pe folderul **de sub** cel pe care îl vrei |
| Rescrii un folder și tot ce e sub el | **Dublu clic** pe numele acelui folder, apoi scrie |
| Editezi calea de la un folder în jos | Clic pe numele acelui folder, apoi <kbd>End</kbd> sau <kbd>→</kbd> ca să deselectezi |
| Sari la un fișier scriindu-i calea | Clic pe numele fișierului sau pe spațiul gol, scrie, <kbd>Enter</kbd> |
| Deschizi un fișier într-o filă nouă | <kbd>Ctrl</kbd> în timp ce îl alegi, sau <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| Copiezi notița undeva în loc s-o muți | Creionul, apoi <kbd>Ctrl</kbd> în timp ce alegi sau confirmi destinația |
| Creezi o notiță la o cale care nu există | Scrie calea, <kbd>Enter</kbd>, confirmă întrebarea |
| Cobori un nivel în timp ce scrii | Scrie `/` |
| Urci un nivel în timp ce scrii | <kbd>Backspace</kbd> în câmpul gol |
| Muți sau redenumești notița deschisă | Clic pe creion, apoi navighează sau scrie ca mai sus |
| Muți fără să redenumești | Creion → clic în folderul de destinație → alege numele curent fixat |
| Redenumești pe loc | <kbd>F2</kbd> de două ori (prima apăsare merge la titlul încorporat, a doua la bara de titlu) |
| Sari la alt seif, la folderul personal sau la o unitate | Clic pe numele seifului |
| Deschizi un fișier din afara seifului | Numele seifului → alege o locație → navighează → alege fișierul (doar pentru citire până la *Editează ca text*) |
| Anulezi orice | <kbd>Esc</kbd> sau clic în afara barei de titlu |

## Setări

| Setare | Opțiuni | Implicit | Ce face |
| --- | --- | --- | --- |
| **Aliniere** | La stânga / Centrat / La dreapta | La stânga | Unde stă calea în rândul barei de titlu. *Centrat* se potrivește cu aspectul clasic al Obsidian. |
| **Separator** | Orice caracter | `/` | Separatorul desenat între segmente. Șase presetări cu un singur clic (`/ > ▸ › \ •`) stau în fața câmpului de text. |
| **Afișează numele seifului** | Pornit / Oprit | Pornit | Dacă seiful însuși este primul segment al căii. Oprit, acel segment devine o pictogramă 🏠 în loc să dispară, așa că întreaga cale începe tot dintr-un loc pe care se poate face clic. |
| **Numele folderului deschide lista** | Pornit / Oprit | Pornit | Schimbă între ele ce fac numele unui folder și separatorul de după el — vezi [tabelul de mai sus](#bara-de-cale). Cu [Folder notes](obsidian://show-plugin?id=folder-notes) separatorul deschide notițe de folder. Nu se aplică niciodată în modul redenumire/mutare. |
| **Afișează fișierele ascunse** | Pornit / Oprit | Oprit | Dacă fișierele și folderele ascunse sunt listate. Protecția la suprascriere se aplică oricum. |
| **Acces la fișiere externe** | Pornit / Oprit | **Oprit** | Dacă numele seifului deschide lista de locații. Oprit, nimic din plugin nu privește vreodată dincolo de acest seif. |

## Înlocuirea pictogramelor

Lure desenează trei pictograme: pictograma rădăcinii seifului (când **Afișează numele seifului** este oprit), comutatorul de redenumire/mutare și lacătul care păzește scrierea în afara seifului. Toate pot fi schimbate dintr-o temă sau dintr-un fragment CSS — setează glifa de înlocuire și ascunde-o pe cea inclusă într-o singură regulă:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* Lacătul are două stări; `.is-active` este cea deschisă. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}

.lure-unlock-btn.is-active {
	--lure-icon-glyph: "🔓";
}
```

`--lure-icon-glyph` acceptă orice este valid în `content` din CSS, așa că `url(...)` funcționează pentru o imagine la fel de bine ca pentru o glifă text sau un emoji. Lasă `--lure-icon-svg` neatins ca să păstrezi pictograma Lucide și să-ți desenezi glifa lângă ea.
