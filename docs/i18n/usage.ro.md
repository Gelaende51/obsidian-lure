<!-- Traducerea fișierului docs/usage.md — stare: commit 94b1372.
     Traducere automată (Claude Sonnet 5), neverificată de vorbitori
     nativi. Etichetele pluginului provin din src/lang/translations.ts,
     iar cele ale Obsidian din textele livrate de aplicația însăși, deci
     corespund cu ceea ce vezi pe ecran. -->

[English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · [Čeština](usage.cs.md) · [Dansk](usage.da.md) · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · [Bahasa Indonesia](usage.id.md) · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · [Norsk](usage.no.md) · [Polski](usage.pl.md) · [Português](usage.pt.md) · [Português (Brasil)](usage.pt-BR.md) · **Română** · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

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

Acolo unde notița folderului este chiar cea pe care o citești deja, clicul arată folderul în schimb — nu mai este nimic de deschis care să nu fie deja pe ecran, ceea ce a însemnat mereu a doua apăsare.

Cu [Folder notes](obsidian://show-plugin?id=folder-notes) instalat, același clic deschide în schimb notița acelui folder, **la orice adâncime**: notița este determinată aici după convenția proprie a acelui plugin, în loc să i se lase lui să răspundă. Acel plugin recunoaște doar folderele pe care le-a marcat, ceea ce pe o cale mai adâncă de un folder nu înseamnă niciunul dintre ele, așa că apăsarea care deschidea notița unui folder de nivel superior nu mai făcea nimic mai departe. Celelalte două pluginuri de notițe de folder nu publică nicio convenție de citit și nu revendică niciodată rândul, așa că la acestea separatorul arată folderul ca de obicei. Este singurul plugin de notițe de folder găsit care revendică bara de cale din titlu; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) și [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) gestionează notițe de folder, dar nu ascultă un clic pe bara de cale, așa că la acestea separatorul arată folderul ca de obicei. Vezi [compatibilitatea](../compatibility.md#verified-against).

Un separator este **subliniat doar când folderul dinaintea lui are chiar o notiță de folder**, așa că sublinierea este o promisiune că acolo se află ceva de deschis — la orice adâncime cu [Folder notes](obsidian://show-plugin?id=folder-notes) activ, deoarece notița este determinată aici, în loc să fie lăsată acelui plugin s-o marcheze. Acolo unde nu acel plugin este activ, nimic nu este subliniat și nimic nu se deschide: separatorul arată, așa cum face fără niciun plugin de notițe de folder. Fiecare separator rămâne clicabil oricum — unul fără subliniere arată și desfășoară folderul său în bara laterală, ceea ce cursorul de tip indicator încă îl semnalează. Sublinierea se mută de pe numele folderului în același timp: cu schimbul pornit, numele deschide lista, așa că marcarea lui ca legătură spre notiță ar fi o minciună.

**Modul redenumire/mutare le anulează pe amândouă**, indiferent ce spune setarea: nimic de pe rând nu deschide un folder cât timp o mutare este în așteptare, fiindcă a deschide unul ar însemna abandonarea mutării. Numele de foldere se selectează pentru editare, iar separatoarele coboară — ambele sunt moduri de a alege destinația — și sublinierea dispare, ca să arate că deschiderea este suspendată.

**Rădăcina seifului** este singurul segment care nu este un segment de cale. Nu are un părinte din care să listeze vecini, așa că deschide în schimb [lista de locații](#navigarea-în-afara-seifului) — celelalte seifuri ale tale, folderul personal, rădăcina sistemului de fișiere și unitățile montate.

## Separatorul propriu al seifului

Separatorul de imediat după numele seifului reprezintă seiful însuși, nu un
folder, așa că face ceva ce niciun alt separator nu poate:

| | Primul clic | Următorul clic |
| --- | --- | --- |
| **Cu un plugin de pagină de start** (o pagină care te întâmpină la deschiderea Obsidian) | Deschide acea pagină în acest panou | Pliază arborele de fișiere |
| **Fără unul** | Pliază arborele de fișiere | Repune exact ce era deschis |

Clicuri obișnuite, nu un dublu clic: odată ce pagina este deschisă, separatorul
nu mai are nimic de deschis, așa că apăsarea următoare este plierea — oricât ai
zăbovi asupra ei.

Este **subliniat** când există o pagină de start de deschis, ceea ce este
aceeași promisiune pe care o face separatorul unui folder: că acolo se află
ceva. Plierea este un comutator — apăsarea următoare restaurează folderele care
erau deschise, și doar pe acelea, așa că un arbore pe care l-ai aranjat nu se
pierde la o privire aruncată în altă parte.

## Un panou fără niciun fișier

O filă goală, graful și orice altceva care nu numește niciun fișier primesc un
rând propriu: seiful, apoi un segment care spune ce conține panoul.

```
seiful-meu / :blank      o filă nouă
seiful-meu / :graph      graful, local sau global
seiful-meu / :<type>     orice altceva fără fișier
```

**Listarea proprie a rădăcinii seifului** oferă și aceste pagini, sub folderele
și notițele care se află efectiv în ea: alege `:graph` sau `:search` acolo și
panoul deschide acea vizualizare, exact cum alegerea unei notițe deschide
notița. Ce pagini există se citește din Obsidian, nu este scris aici — fiecare
vizualizare care nu există ca să arate un fișier, așa că un plugin care își
înregistrează una (o filă de pornire, un calendar) apare fără ca acest plugin
să știe ceva despre ea. Vizualizările care au nevoie de un fișier — Markdown,
PDF, imagini, canvas-uri, baze — nu sunt oferite: nu au ce arăta.

Cele două puncte sunt esențiale — niciun fișier sau folder nu se poate numi
`:graph`, așa că rândul nu poate fi confundat cu o cale care ar putea fi
deschisă. Eticheta vine din tipul de vizualizare, nu din formularea proprie a
Obsidian, așa că se citește la fel indiferent de limba interfeței, iar un
`-view` final este eliminat: un plugin de filă de pornire își înregistrează
vizualizarea ca `home-launcher-view`, iar rândul spune `:home-launcher`.

Un clic pe spațiul gol, sau pe eticheta însăși, **deschide câmpul la rădăcina
seifului**: scrie o cale și <kbd>Enter</kbd> o deschide chiar în acest panou,
cu aceeași completare, aceeași listă și același câmp roșu care oferă să
creeze ce nu există încă. O filă goală este un loc bun în care să scrii unde
vrei să ajungi, la asta servește.

Eticheta este o etichetă și nimic mai mult: nicio listă, nicio tragere, nicio
redenumire. Panourile din barele laterale sunt lăsate complet neatinse — un
panou de backlinks își păstrează titlul dat de Obsidian.

Canvas-urile, PDF-urile, imaginile și bazele nu au nevoie de nimic din toate
acestea. Sunt fișiere, așa că primesc o bară de cale obișnuită.

## Clic pe un segment: înlocuiește-l cu unul vecin

Un clic pe numele unui folder selectează **numele acelui folder** într-un câmp de text și deschide o listă a folderului **cu un nivel mai sus** — părintele lui. Scrierea sau alegerea unei intrări schimbă acest folder cu unul vecin și lasă neatins tot ce se află sub el, așa că `Proiecte/2026/Start.md` → clic pe `2026` → alegi `2025` îți dă `Proiecte/2025/Start.md`.

Un clic pe **numele notiței** funcționează la fel, față de propriul ei folder, și selectează numele **fără extensie** — redenumirea este editarea obișnuită, iar scrierea direct peste o selecție care includea `.md` schimba din greșeală tipul fișierului. Extensia rămâne vizibilă la o apăsare distanță: <kbd>→</kbd> ajunge la ea, iar dublul clic care lărgește la tot rândul o ia pe toată.

Clicul pe folder a selectat deja un segment, așa că **încă un clic** lărgește selecția la întreg rândul — acel folder *și* tot ce se află sub el — iar scrierea înlocuiește atunci restul căii dintr-o dată. Funcționează la fel în modul navigare și în modul redenumire/mutare.

Acest lucru se aplică doar ca o continuare a clicului care a deschis câmpul. Odată ce ai folosit câmpul, el se comportă ca orice alt câmp de text: clicul plasează cursorul, dublul clic ia un cuvânt, triplul clic ia rândul.

Oricum, restul căii rămâne vizibil în jurul câmpului, ca segmente înainte de el și ca text neselectat după el, așa că întreaga cale nu dispare niciodată din titlu. Scrie pentru a înlocui selecția, sau apasă <kbd>→</kbd> pentru a o păstra și a edita de acolo încolo. Lista arată tot folderul indiferent de ce este precompletat; începe să filtreze doar când chiar scrii ceva.

## Coborârea prin separator

Un clic pe un separator (cu **Numele folderului deschide lista** oprit) coboară în folderul dinaintea lui: lista arată conținutul *acelui* folder, iar restul căii se deschide selectat în câmp. Alegerea unui folder îl adaugă la urma căii și deschide imediat lista următoare, așa că poți coborî din clic în clic printr-un arbore fără să părăsești rândul barei de titlu.

## Lista se deschide acolo unde ești

Lista se deschide pe intrarea în care te afli — notița căreia îi aparține
această bară, sau, atunci când un clic pe un folder i-a listat părintele,
acel folder — și nu pe primul rând. Într-un folder cu două sute de notițe,
primul rând nu este nicidecum lângă tine.

**O rotire a roții deasupra unui nume îi deschide lista și o parcurge.**
Prima rotire deschide aceeași listă pe care o deschide apăsarea numelui, iar
fiecare rotire ulterioară mută evidențierea cu un rând, punând ceea ce
indici în câmp exact cum o fac săgețile — așa că un vecin poate fi găsit și
ales fără tastatură. Rotirea la oricare capăt îți dă textul înapoi. Un rând cu
mai multă cale decât panou răspunde la rotire prin derulare laterală în
schimb, ceea ce este citirea care câștigă cât timp se aplică.

Lista este **la fel de înaltă cât permite fereastra**. Obsidian își limitează
listele de sugestii la 300 de pixeli indiferent ce se află sub ele; aceasta
ajunge până la marginea de jos a ferestrei, oprindu-se cu câțiva pixeli
înainte de margine, și derulează doar din momentul în care folderul conține
mai mult decât atât. Nu este **mai lată decât bara de cale**: un nume care
nu încape este scurtat la fel cum se scurtează un rând, și arătat întreg
atunci când îl indici.

Parcurgerea listei **pune ceea ce indici în câmp**, prin tastele săgeată sau
prin poziționarea deasupra — în locul segmentului pe care îl editai, cu restul
căii rămas neschimbat — așa că rândul pe care te afli este și calea pe care ai
obține-o.

Restul căii este arătat **doar cât timp există sub ceea ce indici**. Aflându-te
într-un folder cu `2026/notiță.md` în urma segmentului pe care îl editezi, a
indica un folder care are un `2026` cu un `notiță.md` în el arată totul; unul
care are `2026` dar nicio notiță arată `2026`; unul care nu are niciunul din
ele nu arată nimic după nume, și nici un fișier, fiindcă nimic nu trăiește sub
unul. Ceea ce **ai scris** își păstrează întreaga cale cât timp o scrii, oricât
de puțin ar exista deocamdată — un nume scris pe jumătate nu este o decizie.
A stabili un nume este o decizie, iar ce nu poate fi atins de la el este tăiat
în acel punct; folderele pe care le creezi sunt cele pe care le scrii *după*
el, unde <kbd>Enter</kbd> le creează.
Textul pe care l-ai scris este păstrat: deplasarea **în afara oricărui capăt al
listei** — în sus, dincolo de prima intrare, sau în jos, dincolo de ultima —
îl eliberează și îți pune textul înapoi, fără nimic evidențiat. Câmpul este o
oprire pe inel ca orice intrare, așa că o tură trece prin el în loc să sară de
la ultimul rând la primul, iar apăsarea în continuare de acolo continuă spre
celălalt capăt.

Scoaterea **cursorului de pe listă** îți pune textul înapoi la fel — și
înapoiază evidențierea către ceea ce o avea înainte ca mausul să sosească:
intrarea la care ajunseseși cu săgețile, arătată din nou în câmp, sau cea pe
care lista s-a deschis fiindcă acolo te afli. Poziționarea este un mod de a
privi, nu de a alege, așa că o trecere a cursorului peste listă nu te costă
nimic.

Lista însăși nu se schimbă cât timp o parcurgi — continuă să filtreze după
ce ai scris, nu după ce a fost previzualizat în câmp — așa că intrarea de sub
tine nu se schimbă niciodată sub următoarea apăsare. Scrierea înlocuiește
previzualizarea și filtrează ca de obicei.

**Ceea ce filtrează este segmentul pe care îl editezi**, nu tot ce se află în
câmp. Un clic pe un folder lasă restul căii acolo, în urma numelui pe care îl
schimbi, așa că filtrarea după întregul conținut ar căuta un copil numit
`2026/Start.md` și nu ar găsi nimic — lista s-ar închide la prima ta apăsare
de tastă, oricare ar fi ea. **Extensia este de asemenea exclusă**, atâta timp
cât cursorul este înaintea punctului: un clic pe numele unei notițe selectează
rădăcina numelui și lasă `.md` în urma lui, așa că a scrie o literă face câmpul
să citească `a.md`, iar acela nu este ceea ce cauți. Pune cursorul după punct
și extensia contează ca oricare altceva. Un nume care chiar nu se potrivește
cu nimic închide totuși lista, fiindcă o listă goală este răspunsul cinstit.

O previzualizare **schimbă doar acel segment și lasă restul căii neatins**:
a indica un folder întreabă ce-ar fi dacă acest pas ar fi acela, nu aruncă
calea la gunoi. Ieșirea de pe listă restaurează textul *și* selecția pe care o
aveai, așa că următoarea tastă apăsată înlocuiește ceea ce urma să înlocuiască
înainte să te uiți.

## Intrările din listă sunt rânduri reale de manager de fișiere

Fiecare fișier și folder din listă se comportă ca rândul său din Exploratorul de fișiere:

- **Clic dreapta** pentru același meniu contextual pe care îl oferă Exploratorul de fișiere, intrare cu intrare — inclusiv cele adăugate de alte pluginuri. Un folder oferă *Notiță nouă*, *Folder nou*, *Canvas nou*, *Bază nouă*, *Creează o copie*, *Mută folderul în…*, *Caută în folder*, *Copiază calea*, *Arată în exploratorul de sistem*, *Redenumește…* și *Șterge*; un fișier oferă echivalentul propriu, inclusiv *Deschide în aplicația implicită*.
- **Tragerea** unei intrări oriunde Obsidian acceptă un fișier: într-un editor pentru a introduce o legătură, pe un folder din Exploratorul de fișiere pentru a-l muta, pe bara de file pentru a-l deschide.

Formulările din meniuri vin din traducerile Obsidian însuși, deci se potrivesc cu restul aplicației în orice limbă.

## Scrierea unei căi

- Clic pe **spațiul gol** dinainte sau după bara de cale deschide un câmp de text pe întreaga cale *și arată nota în File Explorer*, așa că arborele urmează panoul fără un al doilea gest. **Numără apăsările tale**: una selectează calea fără extensie, două o selectează cu ea, trei selectează calea pe care o știe mașina. Clic pe **numele fișierului** numără la fel, dar începe cu o treaptă mai jos, chiar pe nume: una îl selectează fără extensie, două cu ea, iar trei se lărgesc la întreaga cale *din folderul seifului tău* — forma pe care o vrea un link sau o căutare, nu cea a mașinii. A patra apăsare ajunge la aceasta.
- **Numărătoarea aparține secvenței care a deschis câmpul.** Odată ce a expirat — ai făcut o pauză, ai scris sau ai dat un singur clic undeva în text — câmpul e un câmp de text ca oricare altul, iar un dublu clic în el alege cuvântul de sub cursor exact ca oriunde altundeva. Scrie peste ce e selectat sau editează pe loc. (Clic pe numele fișierului însuși selectează doar numele fișierului; vezi mai sus.) Clic dreapta pe același spațiu **copiază** aceleași trei, la două, trei și patru apăsări — un buton le arată, celălalt le ia. O **singură** apăsare dreapta deschide calea cu totul selectat și oferă ce se poate face cu ea: taie, copiază, lipește, selectează tot, în cuvintele lui Obsidian.
- **Clic cu rotița pe spațiul gol** pentru a lipi peste cale: câmpul se deschide pe întreaga cale *din rădăcina seifului*, așa că memoria de schimb înlocuiește totul, iar ce ajunge acolo e selectat. <kbd>Enter</kbd> apoi merge acolo.
- **<kbd>Ctrl</kbd>+clic pe spațiul gol** pentru a deschide din nou această notă într-o filă proprie, semnalată în File Explorer ca să nu fie confundată a doua filă cu prima. Pe **numele seifului**, <kbd>Ctrl</kbd>+clic sau clic cu rotița deschide o filă goală, aflată în rădăcina seifului cu lista deja afișată — un loc unde să scrii o cale de la zero.
- Scrierea în timp ce bara de cale e afișată transformă segmentul final într-un câmp mic, cu autocompletare în timp real limitată la folderul curent.
- **Se poate scrie o cale de la rădăcina sistemului de fișiere.** `/` în fața unui câmp gol deschide una în loc să completeze o treaptă, fiecare bară oblică de după ea îi aparține, iar `~` e folderul tău personal. Cât timp câmpul conține o astfel de cale, lista derulantă arată mașina, nu seiful, iar segmentul de deschidere al rândului se dă la o parte — ce e în câmp începe din rădăcină și o arată. Cu *Acces la fișiere externe* dezactivat, lista rămâne goală în schimb, pentru că <kbd>Enter</kbd> ar refuza oricum calea.
- **Se poate scrie o pagină, nu doar alege.** `:graph`, `:search`, sau orice altceva înregistrează pluginurile tale — etichetele pe care le oferă [listarea rădăcinii seifului](#un-panou-fără-niciun-fișier). Scrierea unor două puncte oriunde le cheamă, pentru că niciun nume nu poate conține așa ceva, iar <kbd>Enter</kbd> deschide acea vizualizare în acest panou. `:graph` scris **într-un folder** deschide graful acelui folder — graful filtrat după `path:"acel/folder"` în propria sa casetă de căutare, ca și cum ar fi fost scris acolo; în rădăcina seifului e graful întreg. <kbd>Tab</kbd> completează numele așa cum completează pe cel al unui folder — și ia cu el orice altceva mai conținea câmpul, pentru că o pagină nu e în niciun folder și nimic nu trăiește sub una. Clic pe eticheta unei astfel de pagini deschide câmpul deja conținând-o.
- **Ce ar scrie <kbd>Tab</kbd> e oferit pe măsură ce scrii.** Acolo unde fiecare copil ce începe cu ce ai scris continuă să fie de acord o vreme, acel acord apare după cursor, selectat; acolo unde încetează să fie de acord, pasul spre primul dintre ei apare — sau spre rândul la care ai ajuns cu săgețile, pentru că acela e cel spre care s-ar îndrepta <kbd>Tab</kbd>. Scrierea peste un nume lasă extensia lui pe loc și oferă în fața ei, iar un folder în care tocmai ai intrat oferă primul său pas, așa că nu există stare în care nimic nu e oferit și <kbd>Tab</kbd> să scrie totuși ceva. Scrie acele litere și e înghițit câte una; scrie orice altceva și dispare. <kbd>Tab</kbd> sau <kbd>End</kbd> îl ia întreg, <kbd>→</kbd> ia o literă din el, <kbd>Backspace</kbd> îl retrage fără să atingă o literă pe care ai scris-o tu, iar nimic nu mai e oferit până când nu scrii — așa că există mereu o cale de ieșire dintr-un nume pe care nu l-ai vrut. După o apăsare de <kbd>Tab</kbd> pasul următor e oferit imediat, la fel ca după o literă scrisă. Ce arată lista derulantă e filtrat de ce ai scris **tu**, niciodată de ce a fost oferit.
- **Ofertele ignoră majusculele.** `sch` oferă `Schemes`, scris așa cum e scris numele; retragerea ofertei redă literele tale exact cum le-ai scris. Acolo unde există și `Test` și `test`, e oferit cel scris așa cum ai scris tu.
- În câmp, partea oferită e pur și simplu **selectată**. Lista e locul unde e detaliată: fiecare rând arată partea din el care **s-a potrivit cu ce ai scris, cu bold**, oriunde din nume s-ar fi potrivit — `kick` găsește `Weekly kickoff` și o arată. **Numele care încep cu ce ai scris vin primele**, înaintea celor care doar îl conțin, și sunt marcate cu o linie pe margine: **albastru** acolo unde au în comun mai mult decât ai scris, așa că <kbd>Tab</kbd> are ceva de adăugat pentru toate, și **verde** pe ramura pe care o ia oferta acolo unde se despart — `te` cu `test1`, `test2`, `text1` și `text2` oferă `te`+`st`, așa că cele două rânduri `test` sunt verzi, iar cele două rânduri `text` păstrează linia simplă. Fiecare dintre ele **subliniază pasul pe care l-ar face <kbd>Tab</kbd> spre el**, nu doar cel oferit, iar sublinierea urmează oferta pe măsură ce se schimbă.
- **Scrierea renunță la rândul evidențiat.** Lista se deschide pe intrarea în care te afli, dar în clipa în care scrii, e vorba despre altundeva, iar o evidențiere pusă de nimeni se citește ca o alegere deja făcută.
- Oferta e mereu doar text în fața ta: literele pe care le-ai scris rămân scrise așa cum le-ai scris cât timp scrii, iar acceptarea ofertei rescrie numele așa cum îl scrie folderul, pentru că o cale trebuie să corespundă discului. `sk` + <kbd>Tab</kbd> ajunge la `Skyline`, nu la `skyline`.
- **Câmpul poartă culoarea a ceea ce numește**, aceeași culoare ca rândul său din lista derulantă: mov pentru o notă, inclusiv nota proprie a unui folder, portocaliu pentru orice nu e o notă, albastru pentru nota pe care te afli. Rândul de la care preia culoarea e cel numit exact ce ai scris, sau, dacă nu, cel evidențiat, sau, dacă nu, primul spre care mai duce ce ai scris.
- **Câmpul devine roșu odată ce nimic nu mai corespunde cu ce e în el** — niciun fișier, niciun folder, și niciun rând din lista derulantă care să mai ducă la el. De acolo, <kbd>Enter</kbd> creează ce e în câmp în loc să îl deschidă, iar roșul o arată înainte să confirmi. Nu apare niciodată pentru o adresă web, care nu e un loc pe această mașină unde să cauți. E colorat **întregul** câmp, nu doar partea care lipsește: un câmp de text nu poate colora doar jumătate din propriul conținut. În modul redenumire/mutare câmpul își păstrează propriul roșu pentru un nume ilegal — acolo, un nume căruia nimic nu-i corespunde e chiar rostul. Faptul că un nume e **deja luat** e tratat atunci când confirmi, cu un dialog care întreabă ce ar trebui făcut cu fișierul aflat în cale — vezi [Un nume deja luat](#un-nume-care-este-ocupat): fiecare nume scris spre `Notes.md` trece prin nume care pot fi ele însele fișiere, așa că marcarea lui literă cu literă avertiza despre un nume pe care nimeni nu-l ceruse încă.
- `/` confirmă segmentul pe care îl scrii și coboară în el, păstrând tot ce e în spatele lui — la fel ca <kbd>Tab</kbd> atunci când pășește înăuntru.
- <kbd>Backspace</kbd> într-un câmp gol iese înapoi în folderul-părinte, redeschizându-i numele cu cursorul la sfârșit. La fel face <kbd>Backspace</kbd> în fața unei extensii rămase singură — un câmp care nu conține decât `.md` nu numește nimic — iar extensia solitară pleacă odată cu el.
- **Clic pe un folder cât timp un câmp e deschis îl lărgește la întreaga cale de după acel folder**, cu numele propriu al folderului selectat — la fel ca ce ar fi făcut clicul pe el din rând, iar tot ce reținea câmpul e păstrat. Ce e în câmp e coada rândului cât timp e deschis, așa că un folder pe care faci clic mai sus în cale redă calea pe care a parcurs-o sesiunea, nu pe cea de la care a pornit nota.
- **Ieșirea cu săgeata din fața câmpului aduce folderul dinaintea lui înăuntru**, ca și cum întreaga cale ar fi un singur rând de text. Cu cursorul chiar la început, <kbd>←</kbd> aduce acel folder în câmp și ajunge la sfârșitul numelui lui, <kbd>Ctrl</kbd>+<kbd>←</kbd> ajunge la începutul lui, iar <kbd>Home</kbd> aduce înăuntru toate folderele până la rădăcina seifului — sau până la locul pe care l-ai ales, în afara seifului — deodată. Ține apăsat <kbd>Shift</kbd> și selecția se întinde peste ce a intrat. Pe macOS saltul de cuvânt e <kbd>Option</kbd>+<kbd>←</kbd>, iar <kbd>Cmd</kbd>+<kbd>←</kbd> e <kbd>Home</kbd>. Oriunde altundeva decât la început, acestea sunt taste obișnuite de text. **Cât timp lista derulantă e afișată, <kbd>Home</kbd>, <kbd>End</kbd>, <kbd>PgUp</kbd> și <kbd>PgDn</kbd> îi aparțin ei** — primul rând, ultimul rând, o pagină în sus, o pagină în jos, o pagină fiind ce arată lista, iar rândul evidențiat își păstrează locul pe ecran — și ajung la text abia după ce s-a închis; <kbd>Shift</kbd>+<kbd>Home</kbd> aduce înăuntru toate folderele și cu lista deschisă.
- **Lista urmează cursorul.** Alege o altă parte a căii — trage peste ea, dă clic în ea, sau mergi cu săgețile — iar lista derulantă arată copiii *acelui* folder, nu ai celui pe care s-a deschis câmpul. Folderul e calculat din segmente plus tot ce din câmp se află în fața cursorului, așa că un clic în `Notes.md` într-un câmp care conține `2026/Notes.md` arată ce e în `2026`. Îndreptarea spre un rând scrie conținutul lui în segmentul în care e cursorul, iar retragerea cursorului din listă îți redă textul și selecția tale, exact cum erau.
- **Tragerea unei selecții în afara câmpului** și eliberarea ei altundeva nu îl închide. O apăsare care începe în câmp aparține editării oricât de departe ar călători; doar o apăsare care *începe* în afara lui e un clic la distanță.
- <kbd>Enter</kbd> confirmă — iar când câmpul nu numește nimic deloc, ca într-un folder gol unde n-a existat niciodată nimic de completat, spune *No file selected* și rămâne deschis în loc să se închidă ca și cum ceva ar fi fost ales. <kbd>Esc</kbd> sau un clic în altă parte anulează și revine la calea reală a fișierului. O singură apăsare de <kbd>Esc</kbd> e de ajuns: închide lista derulantă, părăsește câmpul și redă focalizarea notei, în loc să ceară câte o apăsare pentru fiecare strat.

Câmpul este lipsit de podoabe — fără casetă, fără chenar — așa că se citește ca textul căii însuși și crește singur pe măsură ce scrii.

## Fiecare parte a rândului, buton cu buton

Întregul rând dintr-o privire. Coloana de clic-dreapta este ceea ce îți oferă
**o singură** apăsare; acel buton numără și apăsările, iar [tabelul lui
propriu](#clic-dreapta-o-apăsare-două-apăsări-trei) de mai jos are a doua, a
treia și a patra. Acesta presupune că **Numele folderului deschide lista**
este activat, ceea ce e implicit — cu opțiunea dezactivată, numele folderului
și separatorul își schimbă locul în prima coloană, așa cum spune [tabelul de
la început](#bara-de-cale).

| Unde apeși | Clic | Dublu-clic | <kbd>Ctrl</kbd>+clic, sau clic pe rotița mouse-ului | Clic-dreapta | Tragi ceva peste el |
| --- | --- | --- | --- | --- | --- |
| **Numele seifului** | Deschide lista de locații — alte seifuri, directorul home, rădăcina sistemului de fișiere, unități montate. Dezactivat implicit; cu opțiunea dezactivată, dezvăluie seiful în File Explorer în schimb | Marchează **întreaga cale absolută**. Lista respectivă se deschide cu calea deja în câmp și doar partea proprie a seifului marcată; a doua apăsare extinde marcajul peste rest | O filă goală, situată la rădăcina seifului cu lista deja afișată — un loc de unde să scrii o cale de la zero | Meniul contextual propriu al seifului: ce se poate face cu seiful pe care segmentul îl numește | Un **fișier** se mută la rădăcina seifului. **Text** deschide câmpul la rădăcină, pentru a numi nota care ar trebui să devină |
| **Numele unui folder** | Selectează acel folder pentru editare, conținutul părintelui său fiind listat dedesubt | Rescrie acel folder și tot ce se află sub el | Deschide acel folder într-o filă nouă | Meniul contextual al acelui folder — cel propriu al File Explorer | Un **fișier** se mută în acel folder. **Text** deschide câmpul acolo, pentru a numi nota care ar trebui să devină |
| Un **separator** | Deschide folderul dinaintea lui — nota lui de folder, acolo unde rulează un plugin de note de folder și una există, altfel îl dezvăluie și îl extinde în File Explorer | **Creează nota acelui folder** și merge la ea, acolo unde rulează un plugin de note de folder și folderul nu are încă una. Acolo unde are deja una, aceasta este doar aceeași apăsare simplă | Nota de folder într-o filă nouă acolo unde există una; altfel o filă situată la acel folder cu lista afișată | Același meniu contextual de folder pe care îl dă numele — cel al notei sale de folder, acolo unde are una | La sfârșitul notei acelui folder, acolo unde are una, odată ce confirmi |
| **Numele notei** | Deschide numele pentru editare — folderele rămân ca etichete alături — cu totul marcat în afară de extensie | Include și extensia în marcaj | Deschide nota într-o filă nouă | Meniul contextual al fișierului — același pe care îl dă rândul din File Explorer | La sfârșitul acestei note, odată ce confirmi |
| **Spațiul gol** | Deschide **întreaga cale** pentru editare, marcată până la extensie. Folderele intră în câmp odată cu ea, ceea ce face din acesta gestul pentru a rescrie o cale, nu doar un nume | Include și extensia în marcaj | <kbd>Ctrl</kbd> deschide din nou această notă într-o filă proprie, evidențiată în File Explorer astfel încât copia să nu fie confundată cu prima. Clicul pe rotița mouse-ului *nu* este acest gest: el suprascrie calea | Marchează întreaga cale și oferă ce se poate face cu text marcat | |

**A doua apăsare urmează după prima.** Crearea notei unui folder se află pe
oricare parte a rândului care *deschide* acel folder, adică separatorul
implicit și numele folderului cu opțiunea dezactivată — aceeași țintă pe care
o marchează sublinierea, și aceeași pe care o singură apăsare o cere deja
pentru nota de folder. Este oferită doar cât timp rulează un plugin de note de
folder, pentru că o notă de folder este o convenție, nu un fapt despre
sistemul de fișiere, și doar acolo unde folderul nu are încă una. Unde
locuiește și cum se numește sunt citite din propriile setări ale **Folder
notes**, astfel încât un seif care își păstrează notele de folder lângă
folder, sau le numește `_index`, primește una dintre acestea; fișierul însuși
este mereu Markdown, ceea ce creează comanda proprie de creare implicită a
acelui plugin și ceea ce găsește indiferent de tipul stabilit pentru seif.
Modul redenumire/mutare este complet exclus — nimic pe rând nu deschide un
folder cât timp o mutare este în așteptare.

**Clicurile pe nume continuă.** Cele patru trepte sunt aceleași patru pe care
le parcurge tasta de redenumire, în aceeași ordine: numele, numele cu
extensia sa, calea de la seif, calea de la rădăcina sistemului. Așadar un al
treilea clic ajunge la calea seifului, iar al patrulea la cea a mașinii —
aceleași patru lucruri pe care ți le oferă <kbd>Tab</kbd> trecut de capătul
câmpului, și aceleași patru pe care butonul din dreapta le *copiază* în loc
să le selecteze.

**Trecerea cu mouse-ul** este propriul ei răspuns și nu schimbă niciodată
nimic: un nume scurtat revine complet cât timp îl indici, iar pictograma de
la începutul rândului spune unde locuiește seiful.

## Clic-dreapta: o apăsare, două apăsări, trei

Fiecare țintă de pe rând răspunde la clic-dreapta, iar câte apăsări îi dai
decide ce primești. Pentru că o a doua apăsare ar putea încă să vină, prima
așteaptă circa o treime de secundă înainte de a acționa — costul de a pune
trei gesturi pe un singur buton.

| Unde apeși | O dată | De două ori | De trei ori |
| --- | --- | --- | --- |
| **Numele seifului** | Meniul contextual al seifului: ce se poate face cu seiful pe care segmentul îl numește — inclusiv *Deschide acest seif*, acolo unde acel seif nu este cel în care te afli | Copiază numele seifului | Copiază unde se află seiful — și o a patra apăsare, unde se află fișierul deschis |
| Un **separator** | Meniul acelui folder — cel al notei sale de folder, acolo unde rulează un plugin de note de folder și folderul are una | | |
| **Numele unui folder** | Meniul acelui folder | Copiază numele folderului | Îl copiază împreună cu tot ce se află la dreapta lui |
| **Numele notei** | Meniul fișierului — același pe care îl dă rândul din File Explorer | Copiază numele | Îl copiază împreună cu extensia sa |
| **Spațiul gol** | | Copiază calea de la folderul seifului tău, fără extensie | Aceeași, cu ea |

O singură apăsare pe **numele seifului** deschide ce se poate face cu orice
numește acel segment. Pentru **seiful în care te afli**: deschide-l într-o
fereastră nouă, gestionează seifurile, copiază unde locuiește, copiază ID-ul
său, arată-l în managerul tău de fișiere. Pentru **alt seif**, accesat prin
lista de locații, aceleași opțiuni minus fereastra nouă — care ar deschide
*acest* seif, nu pe celălalt — plus singurul lucru pe care doar un seif în
care nu te afli îl poate oferi: **Deschide acest seif**. Este numit lui
Obsidian după ID-ul său, nu după numele folderului său, întrucât două seifuri
pot avea același nume. Pentru un loc care nu este deloc un seif — folderul
tău home, o unitate montată — nu există ID de copiat și nimic de deschis, iar
meniul spune asta neoferindu-le.

Acesta nu este meniul propriu cu trei puncte al Obsidian, care aparține
ferestrei de pornire și nu poate fi deschis din interiorul unui seif rulat —
acestea sunt aceleași intrări reconstruite, în formularea proprie a
Obsidian, preluate din comenzile sale astfel încât să ajungă în limba ta.
Trei dintre intrările acelui meniu sunt în mod deliberat **absente** de aici:
*redenumire seif*, *mutare seif* și *elimină din listă* acționează toate
asupra folderului propriu al seifului sau asupra registrului de seifuri al
Obsidian, iar a face asta seifului în care te afli — cu fișierele sale
deschise și observatorii săi rulând — este modul în care un seif se strică.
Deschide managerul de seifuri (*Deschide alt seif*) și fă-le acolo, unde
seiful este închis.

Cele două copieri de pe **spațiul gol** sunt rândul așa cum este scris — ceea
ce își dorește un link sau o căutare — iar cele de pe **numele seifului**
sunt căile pe care le cunoaște sistemul de fișiere, ceea ce își dorește orice
din afara Obsidian. Fiecare apăsare acolo extinde la ce este bună copia:
două oferă numele seifului, trei unde este seiful, patru unde este fișierul
deschis. Obsidian face aceeași distincție în propriile sale două comenzi,
*from vault folder* și *from system root*; aici cele orientate spre exterior
se află pe segmentul care este el însuși în afara căii.

Toate acestea funcționează și în afara seifului, pe aceleași ținte.

Fiecare copiere anunță asta printr-o notificare, pentru că o copiere nu lasă
nimic pe ecran care să arate că s-a întâmplat, iar o apăsare numărată greșit
nu ar trebui să pară o apăsare reușită.

## Modificatori: deschide-l altundeva

Numele notei și segmentele de folder se comportă ca rândurile lor din File
Explorer.

| | Pe numele notei | Pe un segment de folder |
| --- | --- | --- |
| Clic simplu | Editează numele | Navighează în acel folder |
| <kbd>Ctrl</kbd> / clic pe rotița mouse-ului | Deschide nota într-o filă nouă | Trimite folderul într-o filă nouă |
| <kbd>Ctrl</kbd>+<kbd>Alt</kbd> | O împărțire | O împărțire |
| Tragere | Nota, oriunde Obsidian preia un fișier | Folderul, la fel — inclusiv bara de file |

Un folder nu este ceva ce Obsidian poate deschide, așa că trimiterea unuia
într-o filă face unul din două lucruri: deschide nota sa de folder, acolo
unde rulează un plugin de note de folder și una există, sau deschide o filă
goală a cărei bară de cale se află deja în acel folder — lăsându-ți doar
numele de scris. Plasarea unui segment de folder pe **bara de file** face
același lucru, într-o filă nouă acolo unde dai drumul — bara de file a
Obsidian acceptă de la sine doar fișiere, așa că un folder tras din File
Explorer este respins și acolo.

## Tab: completează numele, apoi calea, apoi lărgește selecția

<kbd>Tab</kbd> completează așa cum face un shell: **o apăsare extinde ce ai scris cât timp numele din acel folder sunt de acord, și se oprește unde ele diferă.** Scrie `Sk` acolo unde doar `Sketches` începe așa și cuvântul e terminat; scrie `Al` acolo unde `Alpha-one`, `Alpha-two` și `Alpine` încep toate așa și obții `Alp`, pentru că următorul caracter e o întrebare la care doar tu poți răspunde.

Apasă din nou fără să scrii nimic și te îndrepți spre un singur nume — rândul evidențiat de listă, sau primul — oprindu-te la următoarea ambiguitate a acelui nume: `Alpha-`, apoi `Alpha-one`. Lista se deschide de unde te afli deja, deci în propriul folder prima apăsare se îndreaptă spre notița pe care o ai deschisă, nu spre ce se sortează primul.

**O apăsare nu alege niciodată între nume în locul tău.** <kbd>Tab</kbd> pătrunde într-un folder odată ce ce ai scris lasă un singur candidat, sau odată ce ai scris numele întreg al folderului și niciun *alt folder* nu îl extinde. Acolo unde unul o face — `Schemes` alături de `Schemes2026` — <kbd>Tab</kbd> continuă să completeze spre numele mai lung; <kbd>Enter</kbd> și lista sunt gesturile care înseamnă *pe acesta*.

Un **fișier** nu ține niciodată un folder pe loc în felul acesta. Un folder alături de o notiță cu numele său propriu e o notiță de folder, nu o bifurcație în cale, iar <kbd>Tab</kbd> pătrunde în foldere — deci `Projects` cu un `Projects.md` alături e parcurs ca oricare altul.

Două lucruri mai mici care rezultă: ce ajunge în câmp e scris așa cum îl scrie folderul, deci `sk` devine `Sketches`; și doar numele care e scris e înlocuit, deci o cale cu mai mult la dreapta lui îl păstrează.

Cu un nume oferit pe măsură ce scrii, <kbd>Tab</kbd> **scrie exact oferta**: oferta e mereu ce ar scrie apăsarea, iar sublinierea și linia verde din listă spun același lucru, deci ce vezi după cursor e ce obții. Acolo unde numele încetează să fie de acord, acela e pasul spre primul dintre ele — sau spre rândul spre care ai navigat cu săgețile, pe care <kbd>Tab</kbd> îl alege în locul celui de alături — așa că navighează cu săgețile spre cel dorit, sau scrie dincolo de bifurcație, înainte să apeși. Doar acolo unde oferta lasă *un singur* nume aceeași apăsare pătrunde în el.

Ajungerea la numele fișierului **este** prima treaptă — nicio apăsare nu e cheltuită parcând cursorul la finalul unui nume pe care tocmai urmează să-l marcheze. De acolo apăsările încetează să se deplaseze de-a lungul căii și încep să lărgească ce e selectat:

1. numele
2. numele cu extensia sa
3. calea de la folderul seifului tău
4. calea de la rădăcina sistemului
5. înapoi la începutul căii **așa cum stă acum** — stând acolo unde a început parcurgerea, primul segment marcat, pregătit să fie parcurs din nou

Un al patrulea clic ajunge direct la aceeași a patra treaptă.

Lărgirea doar **lărgește**, întotdeauna. Un nume care e deja întreg în câmp — completat de aceeași tastă, sau ales din listă — e marcat întreg în loc să i se ia mai întâi extensia înapoi: prima treaptă e pentru un nume la care parcurgerea tocmai *a ajuns*, unde extensia nu e încă subiectul.

Scara e locul unde **ajunge** parcurgerea, nu locul de unde pornește. Dă clic pe un folder la mijlocul unei căi și câmpul se deschide pe tot ce e sub el, cu numele acelui folder marcat; fiecare <kbd>Tab</kbd> apoi trece printr-**un** singur folder — marcând următorul, păstrând restul căii în urmă — și doar odată ce nu mai rămâne decât numele fișierului începe lărgirea:

| apăsare | segmente | câmp | marcat |
| --- | --- | --- | --- |
| clic pe `a` | | `a/b/c/leaf.md` | `a` |
| <kbd>Tab</kbd> | `a` | `b/c/leaf.md` | `b` |
| <kbd>Tab</kbd> | `a › b` | `c/leaf.md` | `c` |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf` — prima treaptă |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf.md` |

**Un nume care e stabilit e stabilit, indiferent cum l-ai stabilit.** Completarea
lui cu <kbd>Tab</kbd>, confirmarea lui cu `/` și alegerea lui din listă lasă
toate rândul în același loc, ținând aceeași cale, deci apăsarea de după gest
înseamnă același lucru indiferent pe ce cale ai ajuns acolo. Alegerea unui
folder din listă obișnuia în schimb să golească câmpul, aruncând o cale pe
care ajungerea la același folder cu <kbd>Tab</kbd> ar fi păstrat-o.

**O cale pe care încă o scrii vine cu tine întreagă.** Pătrunderea chiar în folderul de care atârnă restul căii nu e o afirmație că restul există — așa se scrie o cale înainte ca ea să existe, iar folderele pe care le numește sunt cele pe care <kbd>Enter</kbd> urmează să le creeze. Deci parcurgând `Dokumente/plans/untitled.md` spre `Dokumente` păstrează `plans/untitled.md` în fața ta, indiferent dacă `plans` există deja sau nu. Același lucru e valabil pentru o cale pe care ai scris-o de la zero: nimic din ea nu a fost moștenit de nicăieri, deci nimic din ea nu e luat înapoi.

**Înlocuirea unui pas cu altul e o altă poveste, iar atunci calea vine cu tine doar în măsura în care există cu adevărat acolo.** Înlocuiește un folder la mijlocul unei căi cu unul vecin — dă clic pe `a`, scrie alt nume, apasă <kbd>Tab</kbd> — și tot ce e sub el vine cu tine, pentru că de obicei calea pe care erai e cea mai mare parte a căii pe care o vrei. Doar ce există acolo supraviețuiește mutării, totuși, deci câmpul și lista de alături nu sunt niciodată în dezacord: ce rămâne în fața ta e o cale pe care chiar ai putea s-o parcurgi. Pornind de la `a/b/c/leaf.md`, cu `a` selectat prin clic și numele lui marcat:

| ce stabilești | segmente | câmp | marcat |
| --- | --- | --- | --- |
| `x`, care nu are deloc `b` | `x` | | nimic n-a venit cu el |
| `y`, care are `b` dar nu are `c` în el | `y` | `b` | `b` |
| `z`, un geamăn al lui `a` până la capăt | `z` | `b/c/leaf.md` | `b` |

Un folder lăsat singur în felul acesta rămâne totuși un folder în care se poate pătrunde: apăsarea de după el pătrunde în el, în loc să înceapă să lărgească o selecție peste numele lui.

Unui nume pe care **nimic** din folder nu îl potrivește i se răspunde diferit, pentru că nimic nu a fost stabilit prin el: apăsarea marchează ce ai scris, gata să scrii peste el, în loc să răspundă cu altceva în altă parte.

Întregul lucru e o **buclă, și nu costă nimic s-o parcurgi**: apăsarea de după ultima treaptă întoarce rândul la începutul căii, cu foldere cu tot, gata să pornească din nou. Singurul lucru care părăsește vreodată rândul e prefixul absolut, la apăsarea care încetează să-l mai arate.

Ce se întoarce e **calea pe care ai construit-o**, nu cea de la care ai pornit. Bifurcă parcurgerea la jumătatea drumului — alege un alt frate din listă, completează spre alt nume — și tura se închide unde te afli cu adevărat; cele patru trepte dinaintea ei descriu aceeași cale, iar aceasta obișnuia să fie treapta ciudată care descria trecutul.

<kbd>Shift</kbd>+<kbd>Tab</kbd> închide același inel în sens invers: la începutul căii, fără nimic de dat înapoi și nimic mai sus, apăsarea următoare face bucla spre treapta **cea mai îndepărtată** — calea de la rădăcina sistemului — și continuă să se îngusteze de acolo. Niciuna dintre direcții nu ajunge într-o fundătură.

De asemenea, nu cheltuie nicio apăsare pe o treaptă pe care a arătat-o deja. Sub ultima treaptă — numele fără extensia sa — scara s-a terminat, și *aceeași apăsare* părăsește folderul: calea de la rădăcina sistemului, calea de la seiful tău, numele, numele fără extensia sa, apoi folderul, câte un pas fiecare.

De asemenea, nicio apăsare nu e cheltuită pe o treaptă care nu schimbă nimic: dând clic pe numele unei notițe se arată deja fără extensia ei, ceea ce arată și prima treaptă, deci de acolo <kbd>Tab</kbd> începe cu a doua.

Fiecare treaptă schimbă ce se află *în* câmp, nu doar ce e evidențiat — o selecție trebuie să fie peste textul pe care îl numește, altfel <kbd>Enter</kbd> ar confirma altceva decât ce vezi selectat. Scara aparține unei singure sesiuni de editare: dă clic în altă parte, sau scrie orice, și următorul <kbd>Tab</kbd> completează din nou un nume.

### <kbd>Shift</kbd>+<kbd>Tab</kbd>: același drum înapoi

<kbd>Shift</kbd>+<kbd>Tab</kbd> retrage câte un pas pentru fiecare apăsare, în ordinea în care apăsările au fost făcute: selecția se îngustează câte o treaptă, fiecare completare e dată înapoi, iar fiecare folder e părăsit — numele lui revenind în câmp ca să-l poți edita în loc să-l rescrii.

**Nimic nu e șters pe drumul înapoi.** O completare e dată înapoi *marcând* caracterele pe care le-a adăugat, exact așa cum mersul înainte marchează ce a lărgit — numele rămâne în fața ta, iar fiecare apăsare ulterioară marchează încă un pas din el:

| | câmp | marcat |
| --- | --- | --- |
| ajuns aici prin parcurgere | `Alpha-one` | |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `ha-one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `Alpha-one` |

Scrierea înlocuiește partea marcată, ca oriunde altundeva. <kbd>Tab</kbd> pune înapoi exact ce marcajul a dat înapoi, deci parcurgerea a doi pași afară și doi pași înapoi te aduce exact unde erai.

Odată ce tot numele e marcat nu mai rămâne nimic ce o apăsare a pus acolo, iar apăsarea următoare merge *în sus pe cale*: părăsește folderul în care te afli, exact cum face <kbd>Backspace</kbd> pe un câmp gol. Nici asta nu costă nimic — numele folderului revine în câmp **înaintea** a ce era în el, marcat, ceea ce e același text pe care clicul pe acel folder ți l-ar fi dat. Înapoi e o direcție, nu un istoric de anulare — dar marcarea numelui mai întâi înseamnă că nicio apăsare nu retrage ce ai scris și în același timp te scoate din folderul în care l-ai scris.

Textul care se deschide **deja selectat** — ce lasă în urmă un clic pe folder — e numele pe care <kbd>Tab</kbd> lucrează în continuare: e completat și parcurs ca orice altceva, iar scrierea îl înlocuiește. Doar comanda de focalizare se deschide pe o treaptă a scării înseși, pentru că îți arată calea întreagă, nu un folder în care să pătrunzi.

## Scrierea a ceva care nu e o cale

| Ce scrii | Ce se întâmplă |
| --- | --- |
| `https://…` | Se deschide într-o filă nouă în **vizualizatorul Web** al Obsidian, dacă ai activat acel plugin de bază; altfel în browserul tău de sistem |
| `obsidian://…` | Predat propriului gestionar de URI al Obsidian |
| `file:///…` | Decodat și deschis: ca notiță reală dacă e în seiful tău, în vizualizator dacă nu |
| `/home/tu/a%20b.md` | Același lucru, pentru o cale lipită dintr-un browser sau manager de fișiere |

Doar schemele explicite contează — o notiță numită `100%20` rămâne o notiță. Un `/` care aparține unei scheme rămâne literal în loc să coboare într-un folder, deci un URL poate fi scris de mână, nu doar lipit.

## O comandă pentru tastatură

**Focalizează bara de cale** deschide câmpul pe numele notiței și îl parcurge așa cum face <kbd>F2</kbd> — numele, numele cu extensia sa, calea de la seiful tău, calea de la rădăcina sistemului — iar apăsarea de după aceea închide câmpul și pune cursorul înapoi în notiță. Nu redenumește: <kbd>Enter</kbd> navighează, ca în orice alt câmp. Nu are o tastă proprie din start, pentru că liniile directoare ale Obsidian descurajează plugin-urile să reclame una; rândul **Comenzi rapide** de la finalul setărilor acestui plugin deschide *Setări → Comenzi rapide*, arătând doar comenzile sale, așa că o poți asocia acolo.

## Navigarea nu atinge niciodată fișierul deschis

În modul implicit (navigare), notița deschisă nu este **niciodată** redenumită sau mutată.

- O cale care corespunde unui fișier existent îl deschide.
- O cale care nu există încă e pur și simplu creată, împreună cu orice foldere-părinte lipsă, și deschisă. Fiecare fișier și folder creat astfel spune asta într-o notificare — un folder nou e altfel invizibil până când îl cauți — iar coșul de gunoi propriu al Obsidian face ca unul nedorit să fie de anulat cu o singură tastă.
- **În afara seifului tot întreabă mai întâi.** Acolo, aceeași greșeală de scriere scrie într-un folder de sistem, unde nici notificarea, nici coșul de gunoi al Obsidian nu sunt o consolare prea mare.

## <kbd>Ctrl</kbd> — filă nouă și copiere în loc de mutare

O notiță **creată, mutată sau copiată în interiorul seifului e arătată acolo unde a ajuns** în Exploratorul de fișiere, marcată pentru o clipă cu culoarea de accent a Obsidian — arborele e locul unde o cauți după aceea, deci e pusă în fața ta în loc să fie lăsată într-un folder care s-ar putea să nici nu fie deschis. Duplicarea spune și ea la fel: o copie lasă originalul unde era și deschide copia în propriul panou, ceea ce fără niciun cuvânt e ușor de citit ca și cum nimic nu s-ar fi întâmplat.

Ținerea apăsată a tastei <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> pe macOS) în timp ce alegi un fișier din listă sau în timp ce apeși <kbd>Enter</kbd> pe o cale trimite rezultatul într-o **filă nouă** în loc de aceasta:

| | Simplu | Cu <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Alegi sau scrii un fișier existent | Se deschide aici | Se deschide într-o filă nouă |
| Scrii o cale care nu există | Întreabă, apoi deschide aici | Întreabă, apoi deschide într-o filă nouă |
| Confirmi o cale în modul redenumire/mutare | **Mută** notița acolo | O **copiază** acolo și deschide copia într-o filă nouă |

Modificatorul este citit cu regula proprie a Obsidian, deci se comportă exact ca pe o legătură sau pe un rând din Exploratorul de fișiere — clicul cu rotița înseamnă tot „filă nouă”, <kbd>Ctrl</kbd>+<kbd>Alt</kbd> înseamnă o împărțire, iar <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> o fereastră nouă.

Copierea refuză să suprascrie, exact ca mutarea — inclusiv peste propria cale a notiței, unde nu e nimic sensibil de copiat. În afara seifului acest refuz e spus și el cu voce tare.

Tot ce e mai sus funcționează **cu lista deschisă** la fel de bine ca fără ea: pe un rând evidențiat, modificatorul se aplică acelui rând, iar stând pe nimic se aplică la ce ai scris.

## Navigarea în afara seifului

**Aceasta este oprită implicit.** Pornește mai întâi **Acces la fișiere externe** în setări — citirea și scrierea în afara seifului este singurul lucru pe care acest plugin îl face și pe care Obsidian însuși nu îl face, așa că este ceva la care aderi, nu ceva din care te retragi. Cu ea oprită, numele seifului doar arată seiful tău în Exploratorul de fișiere, iar nimic de aici nu privește vreodată dincolo de el.

Clic pe **numele seifului** (sau pe pictograma 🏠, când *Afișează numele seifului* este oprită) deschide o listă de locuri, nu de conținuturi. Câmpul pe care îl deschide conține **întreaga cale pe care erai, scrisă integral**, cu locul de la care pornește selectat — astfel încât să alegi altundeva, sau să scrii peste selecție, înlocuiește doar acea parte inițială și lasă restul căii în fața ta. **Apasă numele a doua oară** — un dublu clic — iar marcajul se extinde peste el în întregime, aceasta fiind modalitatea prin care calea absolută este preluată dintr-un singur gest, în loc să fie selectată manual. Răzgândește-te și <kbd>Esc</kbd> pune rândul înapoi cum era.

Scrierea aici primește restul numelui unui loc ca oriunde altundeva, iar <kbd>Tab</kbd> **stabilește acel loc** — cel spre care arăți sau cel pe care numele îl poate însemna doar pe unul. Acolo unde mai multe locuri încă împart ceea ce ai scris, apăsarea se oprește la bifurcație, ca peste tot. A arăta spre un loc afișează **propria cale a acelui loc**, toată selectată, urmată de calea notiței tale doar atât cât aceasta chiar merge acolo — exact ceea ce te-ar aduce alegerea lui. Un loc nu este un pas în interiorul căii de pe ecran, ci un punct de la care se numără întreaga cale, așa că nimic din locul unde erai nu rămâne în fața lui.

Locurile disponibile:

- **Celelalte seifuri ale tale**, citite din propriul registru al Obsidian, cele deschise cel mai recent primele, fiecare sub pictograma de seif a Obsidian — cea pe care aplicația însăși o folosește pentru comenzile de seif. Seiful pe care îl ai deja deschis primește în schimb o casă: de acolo pornește rândul în mod implicit, nu este un loc unde să mergi.
- **Folderul personal**, sub propriul nume de cont, marcat cu un `~`. Lucide nu are tildă, așa că aceasta este desenată de plugin pe propria grilă de 24×24 a Lucide, cu aceeași grosime de linie — o pictogramă care lipsește din set, nu un caracter de text așezat printre pictograme.
- **Rădăcina sistemului de fișiere**, etichetată `root` — netradusă, fiindcă acesta îi este numele pe orice sistem — în locul lui `/`, care s-ar citi ca un pas gol lângă separatorul care îl urmează.
- **Unitățile montate**, cu o pictogramă pe tip acolo unde determinarea este ieftină: partajările de rețea, discurile optice, dischetele și mediile detașabile o au pe a lor; orice altceva primește o unitate generică. Pe Windows unitățile apar ca `C:` cu o pictogramă generică — numele de volum și tipurile exacte necesită WMI, ceea ce în mod deliberat nu se face.

Alegerea altui seif **nu comută Obsidian pe el.** Tot ce ai deschis rămâne deschis; bara de cale doar începe să navigheze acolo. Exact acesta este rostul de a o avea pe bara de cale, în loc s-o lăsăm în seama comutatorului de seifuri din bara laterală.

Ajunge, de asemenea, **cât de aproape de notița pe care ești posibil, acolo unde acel loc chiar ajunge**.

- Dacă locul pe care l-ai ales *conține* notița — folderul personal sau oriunde locuiesc seifurile tale — obții calea ei de acolo: alege `~` cu `takeaways.md` deschis, iar câmpul citește `Vaults/your-vault/takeaways.md`.
- Dacă e un loc alături de acesta — un alt seif, o altă unitate — se încearcă aceeași cale relativă, cât de adânc chiar există. Seifurile sunt adesea aproape copii unele ale altora, iar motivul pentru a sări la unul este de obicei aceeași notiță de acolo.

În ambele cazuri rândul rămâne la locul ales, iar **primul folder al acelei căi se deschide selectat**, aceeași formă pe care o dă clicul pe un folder: pasul pe care e cel mai probabil să-l schimbi când sari altundeva este cel mai apropiat de vârf, iar restul căii rămâne vizibil cât timp îl schimbi. Nimic nu este vreodată pre-completat dacă nu e cu adevărat pe disc.

### Cât timp ești afară

Calea **pornește de la locul pe care l-ai ales**, nu de la structura de directoare a mașinii — la fel și câmpul obținut la clic pe spațiul gol sau la apăsarea tastei de focalizare: el conține calea de la acel loc, nu calea absolută a mașinii, cu traseul restrâns exact la acel loc, așa cum se restrânge la rădăcina seifului înăuntru — alege `Archive`, iar rândul citește `Archive / notes / …`, nu `/home/tu/Vaults/Archive/notes/…`. Segmentul de la început poartă o pictogramă pentru ce este (seif, folder personal, unitate), iar <kbd>Backspace</kbd> se oprește acolo, în loc să urce mai departe în restul sistemului de fișiere. Cu *Afișează numele seifului* oprită, acel segment este doar pictograma — setarea privește segmentul de deschidere al rândului, oricare seif ar numi, nu doar al tău.

Bara de cale este **încadrată în culoarea de eroare** — același inel pe care îl desenează modul redenumire — cât timp indică în afara seifului tău. Ea marchează o condiție permanentă, nu un moment: cât timp este acolo, niciuna dintre prelucrările proprii ale Obsidian nu se aplică la ceea ce arată rândul, iar scrierea rămâne blocată până când spui tu altfel.

În rest, navigarea funcționează ca înăuntru: jetoane, separatoare, scriere, autocompletare, <kbd>Backspace</kbd> ca să ieși. Se aplică și aceleași reguli de vizibilitate, deci extensiile neacceptate au în continuare nevoie de setarea *Permiteți afișarea fișierelor indiferent de extensia acestora* din Obsidian, iar fișierele ascunse au în continuare nevoie de setarea acestui plugin.

**Clicul dreapta funcționează și acolo afară**, deși e un meniu diferit: gestionarii proprii ai Exploratorului de fișiere au nevoie de un fișier pe care seiful îl cunoaște, așa că intrările din afară sunt construite din cale în schimb. Ele oferă deschiderea (aici, la dreapta, într-o fereastră nouă sau în aplicația implicită a desktopului), *Copiază calea*, *Arată în exploratorul de sistem* și — odată lacătul deschis — *Notiță nouă*, *Folder nou*, *Fă o copie*, *Redenumește…* și *Șterge*. **Tragerea** are în continuare nevoie de un fișier din seif și rămâne indisponibilă.

Același meniu se află pe fișierul deschis în vizualizator, prin clic dreapta sau din cele trei puncte proprii ale panoului, iar el întreabă lacătul din titlul acelei vizualizări. Nu întreabă nimic altceva: dacă fișierul este randat sau afișat ca sursă nu are nicio legătură cu posibilitatea de a fi șters, iar o imagine sau un PDF — care nu are deloc o vizualizare sursă — este la fel de ștergibil ca o notiță. *Șterge* înseamnă coșul de gunoi al desktopului, așa că poate fi anulat de acolo; un sistem fără coș de gunoi raportează asta, în loc să distrugă fișierul.

Ștergerea în afara seifului mută fișierul în **coșul de gunoi al sistemului** — Recycle Bin pe Windows, Coșul de gunoi pe macOS — niciodată o dezlegare directă. Aici afară nu există un coș de gunoi al Obsidian din care să recuperezi, așa că o ștergere care nu ar putea fi anulată nu este oferită deloc: acolo unde o platformă nu are coș de gunoi, încercarea raportează eșecul în schimb.

### Scrierea în afara seifului

Tot ce scrie este **blocat implicit**. Cât timp rândul indică în afara seifului tău, locul comutatorului de redenumire din titlu este luat de un **lacăt roșu** — aceeași culoare ca inelul din jurul rândului, și din același motiv: marchează un refuz. Cele două sunt un singur control într-un singur loc, așa că nu există niciodată întrebarea care dintre ele condiționează ce.

Trei apăsări, într-un ciclu:

| Apăsare | Ce obții |
| --- | --- |
| Lacătul roșu | Scrierea aici este permisă. Lacătul este înlocuit de comutatorul redenumire/mutare |
| Comutatorul | Modul redenumire/mutare, exact ca în interiorul seifului |
| Comutatorul din nou | Modul se încheie, iar lacătul se închide din nou — permisiunea nu supraviețuiește lucrului pentru care a fost deschisă |

**Tasta de redenumire întreabă și ea lacătul.** În afara seifului tău, o apăsare a ei face lacătul să se deschidă și să se închidă în scurtă succesiune, în loc să deschidă un mod pe care orice confirmare l-ar refuza: refuzul sosește înainte de lucru, nu după. Apasă lacătul, sau apasă tasta de redenumire din nou în jumătate de secundă — a doua apăsare acordă exact ceea ce acordă butonul, pentru acest loc, și deschide modul redenumire odată cu el.

În interiorul seifului tău nu există lacăt: nu e nimic de deblocat, iar comutatorul ocupă pur și simplu locul.

Permisiunea este acordată **unui loc, nu unui moment**: supraviețuiește tot ce ai face în timp ce lucrezi într-un loc — terminarea unei mutări, un clic în afara câmpului, deschiderea unui fișier — și se încheie când alegi un alt seif, o altă unitate sau altă rădăcină din listă, când rândul revine la un fișier din seif sau la acea a treia apăsare. Așa că un șir de mutări în interiorul unui singur folder necesită o apăsare, nu una per fișier.

Cu lacătul deschis, bara de cale se comportă acolo așa cum se comportă înăuntru:

| Gest | Rezultat |
| --- | --- |
| Scrii un nume care nu există, <kbd>Enter</kbd> | Aceeași întrebare „îl creăm?” ca înăuntru; se creează și folderele părinte lipsă. Un nume fără extensie devine un `.md`, exact ca înăuntru |
| Modul redenumire/mutare, scrii un nume nou | Redenumește fișierul pe care îl arată rândul. Un nume fără extensie o păstrează pe cea a fișierului — aici afară un folder conține fișiere de tot felul, iar o redenumire nu ar trebui să transforme pe tăcute un `.png` într-un `.md` |
| Modul redenumire/mutare, navighezi în altă parte, alegi **păstrează acest nume** | Îl mută acolo cu numele pe care îl are deja |
| Ții <kbd>Ctrl</kbd> la oricare dintre ele | Copiază în loc să mute și deschide copia într-o filă nouă |

Blocate, toate acestea raportează ce le împiedică, în loc să se întâmple. Nimic nu este suprascris vreodată în niciuna dintre stări: o destinație care există deja este refuzată, iar refuzul este cel al sistemului de fișiere însuși (`COPYFILE_EXCL`, o creare exclusivă), nu o verificare care ar putea pierde o cursă. O mutare între sisteme de fișiere — de pe un stick USB, de pe o partajare de rețea — recurge la copiere-apoi-ștergere, iar originalul este eliminat abia după ce copia a ajuns.

**Mutarea unei notițe *în afara* seifului tău întreabă mai întâi.** `fileManager` nu poate urmări un fișier peste acea graniță: fiecare legătură care indică spre notiță încetează să se rezolve, nimic nu le actualizează, iar notița părăsește indexul seifului. Așa că mutarea este oferită ca o decizie, nu refuzată sau făcută pe tăcute — un dialog spune ce costă și câte notițe leagă la cea pe care o muți. Confirmă și chiar se mută: copiată afară, apoi eliminată din seif prin ștergerea proprie a Obsidian, așa că este recuperabilă exact ca o notiță ștearsă, iar un eșec la oricare pas lasă notița unde era. Ținând <kbd>Ctrl</kbd> tot o copiază afară în schimb, ceea ce nu are nimic din acea problemă. Mersul în cealaltă direcție — aducerea unui fișier extern *în* seif — nu este încă implementat.

### Deschiderea unui fișier extern

Navigarea prin sistemul de fișiere se poate întoarce **înapoi în seiful pe care îl ai deschis** — de la rădăcină, de la folderul personal, de oriunde locuiesc seifurile tale. Un fișier atins astfel este o notiță obișnuită, așa că se deschide ca una: editorul real, legături și retrolegături, iar rândul revine la bara de cale rădăcinată în seif. Doar fișierele pentru care Obsidian nu are o vizualizare rămân în previzualizare, fiindcă acolo afară previzualizarea este răspunsul mai bun. Acolo unde o previzualizare arată totuși o astfel de notiță — un spațiu de lucru redeschis, de exemplu — linia de sus oferă **Deschide în *(seif)***, aceeași ofertă pe care ai face-o manual.

Editorul Obsidian funcționează doar cu fișiere din interiorul seifului, așa că un fișier extern **nu poate** fi deschis ca o notiță adevărată, cu legături, retrolegături și restul — aceasta este o limită a aplicației, nu a acestui plugin. Alegerea unuia deschide în schimb o **previzualizare**, doar pentru citire până când spui tu altfel:

| Tip | Afișat ca |
| --- | --- |
| `.md`, `.markdown` | Markdown randat |
| `.html`, `.htm`, `.xhtml` | Pagina randată |
| Imagini, audio, video, PDF | Player/vizualizator nativ |
| Orice alt fișier **text** (`.json`, `.css`, `.log`, `.txt`, …) | Text simplu, ca atare |
| Formate binare fără vizualizator (`.zip`, `.exe`, …) | Predat lui *Deschide în aplicația implicită* |

Vizualizatorul are două citiri ale unui fișier și, fiindcă se exclud reciproc, este afișată doar cea către care ai **comuta**:

| | Ce face | Implicit pentru |
| --- | --- | --- |
| **Vezi ca Markdown** | Randează fișierul ca o notiță, doar pentru citire | `.md`, `.markdown` |
| **Vizualizați ca pagină** | Randează fișierul ca pagina care este, doar pentru citire | `.html`, `.htm`, `.xhtml` |
| **Editează ca text** | Sursa, editabilă | orice altceva |

În afara seifului, **Editează ca text** este și apăsarea care ridică starea „doar pentru citire” — modul și permisiunea sunt un singur gest, nu două butoane la care să te gândești. Este nuanțat în roșu **ori de câte ori apăsarea ar ridica starea „doar pentru citire”**, fie că pregătești editarea pe loc, fie că vii direct din vizualizarea randată; în interiorul seifului nu e nimic de deblocat, așa că rămâne simplu. **Vezi ca Markdown** primește o spălare ușoară de accent — aceeași nuanță pe care Obsidian o dă textului selectat — marcându-l ca drum de întoarcere, nu ca îndemn la acțiune.

Fiindcă butonul urmărește *editarea*, nu modul brut, un fișier care stă doar pentru citire în vizualizarea text oferă în continuare **Editează ca text**: aceea este apăsarea care o pregătește. Un fișier în care nu se va putea scrie niciodată — trunchiat sau ilizibil — spune în schimb **Vezi ca text**, fiindcă atât poate oferi apăsarea.

Valorile implicite merg în direcția utilă, nu în cea literală: un `#` într-un script de shell este un comentariu, nu un titlu, așa că randarea unui `.log` ca Markdown l-ar înghiți pe tăcute. Ambele valori implicite pot fi anulate per fișier, iar alegerea intră în istoricul filei, așa că înainte/înapoi și un spațiu de lucru redeschis o păstrează — o mulțime de notițe trăiesc în fișiere `.txt`, iar o mulțime de fișiere `.md` sunt mai ușor de citit ca sursă.

#### Ce are voie să facă o pagină HTML

Nimic. Pagina este afișată într-un cadru cu **fiecare permisiune retrasă** — fără scripturi, fără formulare, fără navigare, fără origine proprie — și o politică de conținut care nu îi permite deloc acces la rețea. Aceasta nu este prudență de dragul prudenței: o pagină locală încărcată în mod obișnuit ar împărtăși originea acestei ferestre, iar această fereastră este Obsidian, așa că un script dintr-un fișier HTML descărcat ar rula în interiorul aplicației tale, cu accesul aplicației tale.

Ce costă asta este orice *face* pagina; ce păstrează este tot ce *este* pagina. Foile de stil și imaginile așezate lângă fișier sunt citite și aduse în cadru, așa că o pagină salvată încă arată ca ea însăși. Referințele care indică în afara propriului folder al paginii, și referințele către undeva pe internet, sunt lăsate exact așa cum au fost scrise și pur și simplu nu se încarcă — un fișier local nu poate spune pe tăcute unui server că l-ai deschis.

Scripturile sunt **eliminate**, nu doar blocate, astfel încât pagina pe care o vezi și sursa la care poți comuta să difere într-un mod declarat, nu în orice fel a decis cadrul, în tăcere, să nu ruleze. Legăturile din interiorul paginii nu fac nimic. Când vrei lucrul real — scripturi, rețea și restul — *Deschide în aplicația implicită* îl predă browserului tău, care este uneltea potrivită pentru asta.

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

- **Deschide în *(seif)*** — afișat când fișierul aparține unuia dintre celelalte seifuri ale tale. Îl predă propriului gestionar de URI al Obsidian, care deschide fereastra acelui seif cu notița în ea, ca o notiță reală, editabilă. Această fereastră rămâne exact cum era; nimic nu se schimbă sub tine.
- **Vezi ca Markdown** / **Vizualizați ca pagină** / **Editează ca text** — cele două citiri pe care le are acest fișier; ultima ridică și starea „doar pentru citire” în afara seifului.
- **Deschide în aplicația implicită** — predă fișierul aplicației implicite a desktopului tău, inclusiv formatele binare pe care acest vizualizator nu le poate afișa. Formulat exact ca propria intrare a Obsidian pentru aceeași acțiune, fiindcă este aceeași acțiune.

Vizualizatorul răspunde și la **clic dreapta**: în interiorul editorului de text cu *Taie* / *Copiază* / *Lipește* / *Selectează tot*, iar oriunde altundeva cu meniul propriu al fișierului. Meniul cu trei puncte al Obsidian din titlu poartă și el acel meniu — în afara seifului, altfel nu ar oferi nimic în afară de *Împarte la dreapta* și *Împarte jos*.

Nimic din afara seifului tău nu este scris dacă nu apeși mai întâi *Editează ca text*. Vezi secțiunea [În afara seifului](README.ro.md#în-afara-seifului) din README pentru dezvăluirea completă.

## Plasarea unui fișier peste un folder din cale

Fiecare folder din rând este o țintă pentru plasare, deci **o notă trasă peste unul se mută acolo** — cel mai scurt drum e între o notă și orice folder deasupra ei, deoarece destinația e deja pe ecran. Trage din File Explorer, din listă, din numele propriu al notei din antet sau din orice altă parte a Obsidian care produce un fișier: este chiar tragerea aplicației, deci eticheta de la survolare, cursorul și evidențierea sunt cele desenate de File Explorer.

**Numele seifului primește și el o plasare**, fiind folderul din vârful rândului — singurul gest care pune o notă în rădăcina seifului de aici.

**O selecție întreagă poate fi trasă deodată**, și se mută ca una singură: dacă vreuna dintre note nu ar putea fi mutată, plasarea este refuzată în loc să mute unele și să le sară pe celelalte pe tăcute.

Legăturile urmează nota, exact ca atunci când este mutată din File Explorer sau prin scrierea unei căi.

Un folder care **nu ar putea primi plasarea nu oferă nimic al său** — nicio etichetă *Move into*, nicio evidențiere pe folder — în loc să ofere ceva care apoi ar eșua; răspunsul propriu al Obsidian pentru antet, *Open in this tab*, este ce apare în loc. Trei cazuri:

- folderul în care fișierul se află **deja**, fiindcă e deja acolo;
- un folder plasat **în el însuși sau într-un descendent al său**, ceea ce nu i-ar lăsa de unde să provină;
- o selecție care conține **un folder și ceva din interiorul lui**, deoarece mutarea folderului îl ia și pe cel dinăuntru cu el.

Un folder care deja conține un **fișier cu același nume** primește plasarea și întreabă ce să facă cu cel din cale, cu același dialog ca pentru un nume ocupat scris sau ales — vezi [Un nume care este ocupat](#un-nume-care-este-ocupat). Nimic de aici nu suprascrie.

Doar folderele **din interiorul seifului** primesc plasări. Cât timp rândul indică în afara seifului, segmentele lui refuză, deoarece scoaterea unei note din seif rupe fiecare legătură către ea — o decizie care merită o întrebare, nu un gest. Modul deliberat de a face asta rămâne scrierea căii, care întreabă mai întâi și îți spune câte note ar fi afectate.

## Plasarea unui text sau a unui fișier pentru a-l scrie

Aceleași ținte primesc și **conținut**, nu doar fișiere, iar cele două sunt deosebite după ce tragi, nu după unde dai drumul.

**Peste o notă pe care rândul o numește deja** — numele propriu al notei, sau un separator al cărui folder are o notă de folder — ceea ce ai plasat se adaugă la sfârșitul ei, după o linie goală. Se întreabă mai întâi, fiindcă asta scrie într-un fișier care există deja, iar o tragere e un gest pe care o mână nesigură îl poate face din greșeală. Funcționează text dintr-un editor, un fișier de pe desktop și o notă trasă din afara acestui seif; un fișier este citit ca text, iar unul binar este refuzat în loc să fie lipit ca un ecran de nonsens.

**Peste un loc — numele seifului sau un folder** — nu se scrie încă nimic, fiindcă nu s-a numit nimic. Câmpul se deschide acolo, ținând ce ai plasat, iar numele pe care îl scrii este ce confirmă: o notă nouă este *creată* ținând textul, iar una existentă este întrebată exact ca mai sus. <kbd>Esc</kbd>, sau un clic în altă parte, renunță la tot.

**Rândul se colorează în albastru** cât timp o tragere care ar ateriza ca și conținut e deasupra lui, și rămâne albastru cât timp câmpul ține unul — același albastru, spunând același lucru: ce urmează e despre textul pe care îl porți. Un fișier tras din propriul tău seif peste un folder încă înseamnă *mută-l acolo*, păstrează evidențierea proprie a Obsidian și nu se colorează niciodată în albastru; acel gest a fost acolo primul, iar conținutul se dă la o parte în fața lui.

## Când calea este mai lungă decât panoul

Numele sunt **scurtate, nu comprimate**, în ordinea a ceea ce e mai puțin probabil să-ți trebuiască:

1. **Mai întâi numele seifului**, până la pictograma lui. Știi în ce seif ești; pictograma continuă să spună de unde începe calea.
2. **Apoi extensia fișierului**, dacă o ai activată — aceleași trei caractere pe aproape fiecare fișier dintr-un seif. Dispare integral, nu treptat: jumătate de extensie nu spune nimic mai mult decât nicio extensie.
3. **Apoi folderele, cel mai lung întâi.** Cel mai lung nume de folder se scurtează la lungimea următorului cel mai lung, apoi ambele împreună, și tot așa, fiecare oprindu-se la pragul lui — astfel un folder foarte lung renunță la tot ce are în plus față de celelalte înainte ca un nume scurt de lângă el să piardă o literă.
4. **Numele propriu al fișierului la urmă**, și păstrează în jur de șase caractere. Pentru asta există antetul.

Spațiul este cedat **continuu**, în fracțiuni de pixel, nu literă cu literă: un nume care cedează este tăiat la pixel și se estompează sub `…`, astfel încât un panou tras încet îngustează rândul lin și nimic după el nu se mișcă în trepte. Înainte să dispară vreo literă, se consumă spațiul din jurul separatorilor — este singura spațiere a rândului și nu costă nicio informație — iar un nume scurtat se termină acolo unde începe separatorul, fără o bandă de spațiu gol între cele două.

**Câmpul păstrează ce conține.** Deschiderea unuia pentru a scrie o cale nu împinge folderele de lângă el din cale: are lățimea textului din el și crește pe măsură ce scrii, astfel încât urma păstrează tot ce câmpul nu are nevoie. Doar când nu e loc pentru amândouă, rândul derulează, și atunci câmpul este singurul lucru care nu cedează niciodată — este text care se editează, nu un nume care se ajustează.

Nu se taie nimic mai mult decât ce îl deosebește de vecinii lui: `Projects2025` și `Projects2026` în același folder ajung la `…025` și `…026` în loc de un prefix care le-ar face să pară același cuvânt, în timp ce `Reports` lângă `Receipts` poate ajunge la `Rep…`. Pe lângă asta, fiecare nume păstrează o **lățime lizibilă** — cam cât patru litere pentru un folder și șase pentru un nume de fișier, măsurate în fontul în care rândul e efectiv desenat, nu numărate. Patru litere înguste și patru litere late nu înseamnă aceeași cantitate de nume, deci `lilliliillil` are voie să păstreze mai mult din sine decât `WWMMWWMMWWMM`, iar ce rămâne pe ecran are aceeași dimensiune în ambele cazuri. Numele scurte sunt lăsate complet neatinse — un nume redus la `A…` este unic și totuși ilizibil. **Spațiile nu contează în asta.** Șase caractere care spun ce fișier este acesta sunt șase caractere care merită citite, deci spațiile dintre ele merg gratis și niciunul nu este lăsat lipit de `…`, unde oricum ar fi invizibil.

**Un nume este tăiat oriunde vecinii lui sunt de acord, și la mijloc când nu sunt de acord nicăieri.** Două foldere numite `aaaa-common-one` și `aaaa-common-two` au totul comun în afară de ultimele trei caractere, deci tăierea cozii păstrează jumătatea care nu spune nimic: ajung la `…one` și `…two`, ceea ce este mai scurt *și* le deosebește. Unde acordul e la sfârșit — `alpha-draft` lângă `beta-draft` — sfârșitul este ce dispare; unde e la ambele capete, ce rămâne e mijlocul. Un nume fără vecini apropiați își pierde mijlocul, fiindcă un nume începe cu ce este și se termină cu care anume este — pentru un fișier, extensia lui: `annual…2026.md`.

O potrivire scurtă în comun nu contează. `parallel structures` se întâmplă să se termine în aceleași două litere ca `Schemes` de lângă el, și asta nu e un motiv să le păstrezi întregi pe amândouă — trei caractere de la început le deosebesc deja.

Nimic nu trece pe a doua linie. Când nici cele mai scurte nume oneste nu încap, rândul **derulează lateral**, oprit la capătul unde e fișierul — în acel punct nu mai e nimic de comprimat, iar o tăiere suplimentară ar ascunde, nu ar scurta. Rotița îl derulează oriunde ar fi indicatorul deasupra rândului, iar ambele capete pot fi atinse: cât timp derulează, rândul se aliniază la începutul lui, indiferent ce spune setarea de aliniere, fiindcă un conținut centrat într-o cutie pe care a depășit-o se revarsă și la stânga, și la dreapta — iar acea jumătate nu poate fi atinsă prin derulare deloc.

**Indică un nume scurtat și el revine complet**, cât timp continui să indici spre el, derulat la marginea din stânga astfel încât tot ce a revenit e pe ecran. **Dă clic pe unul și rămâne așa**: câmpul se deschide arătând folderul pe care ai dat clic, ce se oferă după el și orice scrii, și continuă să le arate după ce indicatorul s-a mutat. Numele rămân neschimbate cât timp derulezi rândul sau scrii în el — unul care s-ar deschide brusc sub un gest menit să citească rândul ar muta totul de sub tine.

**Segmentul de deschidere poartă mereu un indiciu (tooltip), și acesta este calea absolută** — `/home/tu/Vaults/Notes`, sau oriunde începe rândul. Este singurul lucru despre rând pe care nimic altceva de pe ecran nu-l poate spune: numele îți spune *care* seif, niciodată unde este. Este acolo indiferent dacă a trebuit sau nu ceva scurtat.

Cu **Afișează numele seifului** dezactivat, numele nu este eliminat, ci doar redus la nimic — astfel încât să indici spre pictogramă îl aduce înapoi exact așa cum o face indicarea unui nume pe care rândul a trebuit să-l scurteze.

**Afișează extensiile fișierelor** pune extensia înapoi pe numele de fișier al rândului. Dezactivat — implicit — rândul numește o notă așa cum o titrează Obsidian, fără `.md`-ul pe care aproape fiecare fișier dintr-un seif îl are în comun; activat, o numește așa cum o face sistemul de fișiere, ceea ce este util când seiful conține mai mult decât note. Este și al doilea lucru la care rândul renunță când spațiul e insuficient, imediat după numele seifului.
Un indiciu (tooltip) îți dă restul: nu doar numele, ci tot ce arată rândul sub el, ca `…/nume/folder/nota.md`, astfel încât o singură survolare răspunde și la "ce este asta", și la "ce se află sub asta". Pictograma seifului îl numește la fel, când numele este dezactivat sau a fost comprimat complet.

## Culorile de avertizare

| | Când | Ce înseamnă |
| --- | --- | --- |
| Inel **roșu** pe bara de cale | Rândul indică în afara seifului | Obsidian nu poate deschide ce se află acolo ca notă, și nimic de acolo nu se scrie până nu deschizi lacătul. |
| Inel **portocaliu** pe bara de cale | Fișierul este de un tip text pentru care Obsidian nu are o vizualizare | O precauție. Obsidian l-ar preda aplicației implicite a desktopului tău; pluginul îl afișează în loc. |
| Text **roșu** în câmpul deschis | Nimic nu se află încă la acea cale | <kbd>Enter</kbd> va crea, nu va deschide. Nu este atât o avertizare, cât o afirmație despre ce face apăsarea următoare — vezi [Scrierea unei căi](#scrierea-unei-căi). |
| Lacăt **roșu** în locul comutatorului de redenumire | Rândul indică în afara seifului și scrierea acolo este încă blocată | Același roșu ca al inelului, din același motiv: marchează un refuz. Apăsarea lui permite scrierea aici și predă poziția înapoi comutatorului — vezi [Scrierea în afara seifului](#scrierea-în-afara-seifului). |

**Cele două inele sunt independente, și pot fi active amândouă deodată** — un `.json` extern se află în afara seifului *și* este un tip pentru care Obsidian nu are editor. În vizualizator apar ca linii separate, fiecare afirmând doar propriul ei fapt. Pe bara de cale, roșu câștigă acolo unde ambele se aplică, deoarece două inele ar fi doar zgomot. Textul *roșu* este cu totul altceva: este despre ce se scrie, nu despre unde indică rândul, deci poate apărea în interiorul oricărui inel sau al niciunuia.

Nivelul portocaliu este intenționat restrâns. Tipurile înregistrate (Markdown, canvas, imagini, PDF, audio, video) sunt tratate corespunzător și nu primesc nimic. Fișierele binare nu primesc nici ele nimic — nu vei transforma un `.zip` într-o mizerie din greșeală. Ce rămâne este exact pericolul: un `.json`, `.css` sau `.log` pe care **Show all file types** l-a făcut vizibil. Lista este intenționat mai largă: acolo, tot ce nu este o notă este portocaliu — vezi [cum sunt colorate intrările din listă](#cum-sunt-colorate-intrările-din-listă).

## Modul redenumire/mutare

Butonul creion din extrema dreaptă a antetului — lângă butonul de mod de vizualizare, de aceeași dimensiune ca butoanele native — comută modul redenumire/mutare. În afara seifului, un lacăt roșu îi ia locul până îl apeși; vezi [Scrierea în afara seifului](#scrierea-în-afara-seifului). Rândul antetului este apoi încadrat în culoarea de accent, exact ca redenumirea în File Explorer. Aceleași clicuri și taste confirmă acum o mutare sau o redenumire prin `fileManager.renameFile` al Obsidian, astfel încât toate legăturile către notă urmează.

În timpul redenumirii:

- Numele curent al fișierului este fixat în lista fiecărui folder, astfel încât mutarea unei note fără a o redenumi este un singur clic.
- Numele deja ocupate în folderul țintă sunt **roșii** — un folder care deja conține numele, și un fișier cu acel nume — astfel încât conflictul se vede înainte să alegi. Pot fi totuși selectate: vezi mai jos.
- Intrarea este validată în timp real după regulile proprii de redenumire ale Obsidian — aceleași seturi de caractere, aceleași mesaje, același indiciu (tooltip) roșu pe care îl primești la redenumirea din arborele de fișiere — astfel încât un nume ilegal este semnalat pe măsură ce scrii și nu poate fi confirmat.
- Un clic în afara barei de antet, sau pierderea focalizării de către antet, încheie modul de redenumire.

### Un nume care este ocupat

Mutarea sau redenumirea peste un nume deja existent **întreabă în loc să
refuze.** Se deschide un dialog cu două căi pe care le poți edita: unde merge
fișierul tău și unde merge fișierul din cale — roșu cât timp acesta e încă
ocupat. Fiecare cale este desenată și ea în felul în care bara de cale desenează
una, cu părțile care diferă colorate și scurtate ultimele, astfel încât o cale
lungă continuă să arate ce se schimbă.

Ambele câmpuri au o listă. A doua conține soluțiile obișnuite:

- **Schimbă locurile** — merge în vechiul folder al fișierului tău, sub numele lui propriu.
- **Schimbă numele** — rămâne pe loc și preia vechiul nume al fișierului tău.
- **Schimbă amândouă** — preia vechea cale a fișierului tău.
- `-1`, `-bak` și `-old` lângă numele lui propriu.
- Cele două nume pe care le-au avut fișierele.

Prima listă oferă unde mergea fișierul tău, **Rămâne pe loc**, numele lui propriu
în folderul țintă, și `-1`, `-bak` și `-old` alături. O soluție a cărei cale este
ocupată este dezactivată (gri) și nu poate fi selectată. Selectarea uneia doar
**completează câmpul** — poți încă să-l editezi — iar **Aplică** mută pe
amândouă, legături și tot; **Anulează** nu mută nimic. Selectarea unui nume
ocupat din listă întreabă la fel, la fel ca și plasarea unei note peste un
folder care deja conține numele ei.

## O singură tastă pentru ambele redenumiri

Comanda de redenumire (<kbd>F2</kbd> implicit, sau orice tastă i-ai atribuit-o) **alternează** între redenumirea prin titlul din text al Obsidian și bara de cale din antet a acestui plugin. Dacă ai dezactivat titlul din text al Obsidian, bara de cale din antet devine singura țintă, așa că tasta nu rămâne niciodată fără efect.

În bara de cale, ea deschide editarea pe **numele fără extensie** — modificarea pe care o redenumire aproape întotdeauna o presupune, și același lucru pe care clicul pe nume îl selectează. Apasă din nou și face ceea ce ar face <kbd>Tab</kbd> acolo: pe nume, aceasta este treapta următoare — numele cu extensia sa, calea din folderul seifului tău, calea din rădăcina sistemului; cu ceva scris, îl completează, așa cum face <kbd>Tab</kbd>.

**Ciclul se închide la titlu.** Cinci apăsări te duc tot ciclul — titlul din text, numele, numele cu extensia sa, calea din seiful tău, calea din rădăcina sistemului — iar a șasea este din nou titlul din text. Această apăsare este singura care diferă de
<kbd>Tab</kbd>, care revine în schimb la începutul căii — iar a șaptea
merge unde ajunge revenirea lui <kbd>Tab</kbd>: rădăcina seifului, cu întreaga cale în
câmp și primul său folder marcat. Așa că fiecare treaptă la care ajunge <kbd>Tab</kbd>, ajunge
și tasta.

Comanda **Focalizează bara de cale** face același lucru în interiorul câmpului — orice ar face
<kbd>Tab</kbd> — iar acolo unde <kbd>Tab</kbd> ar reveni, ea predă cursorul înapoi
notiței. Următoarea sa apăsare este revenirea: rădăcina seifului, primul folder marcat.

**Într-un câmp deja deschis**, tasta îl transformă într-o redenumire acolo unde
se află — păstrând textul, cursorul și selecția — iar **Focalizează bara de
cale** îi ia redenumirea înapoi în același mod. **Orice altceva** apăsat sau
apăsat cu clic între apăsări reîncepe oricare dintre cicluri, așa că o apăsare după ce ai
editat nu ajunge niciodată pe o treaptă rămasă de dinainte.

În afara seifului, tasta funcționează la fel — nu există titlu din text acolo, așa că
prima apăsare merge direct la bara de cale.

Aceasta funcționează prin împachetarea comenzii `workspace:edit-file-title`, nu prin acapararea tastei, așa că atât reasignarea scurtăturii, cât și rularea comenzii din paletă funcționează neschimbate.

## Cum sunt colorate intrările din listă

| Culoare | Înseamnă |
| --- | --- |
| **Mov** | O notiță (`.md`, `.markdown`) — ceea ce Obsidian va deschide ca notiță, aleasă dintr-un folder cu conținut mixt |
| **Portocaliu** | Nu este notiță — orice ce Obsidian nu va deschide ca atare, de la un PDF la un `.txt`, împreună cu intrările `:page`. Un folder cu conținut mixt este citit pentru notițele din el, iar o singură culoare pentru tot restul spune asta mai repede decât o avertizare pe câteva dintre ele; vezi [culorile de avertizare](#culorile-de-avertizare) |
| **Estompat** | În afara seifului tău, așa că gestionarea proprie a seifului nu se aplică |
| **Albastru**, îngroșat | Unde te afli deja: propria notiță a acestei bare și folderul pe care se sprijină bara de cale. În modul redenumire/mutare, intrarea *păstrează acest nume* stă în locul notiței — aceeași notiță în ambele cazuri |
| **Roșu** | Doar în modul redenumire/mutare: numele este ocupat. Poate fi selectat totuși — alegerea lui întreabă ce să faci cu fișierul din cale; vezi [Un nume care este ocupat](#un-nume-care-este-ocupat) |

**Folderele sunt îngroșate**, așa că notița proprie a unui folder nu are nevoie de o
culoare proprie ca să iasă în evidență față de folderul său: este mov ca orice altă
notiță. O **linie pe marginea unui rând** marchează numele care încep cu ceea ce ai scris — albastru acolo unde
seamănă mai departe, verde pe ramura pe care o urmează oferta; vezi
[Scrierea unei căi](#scrierea-unei-căi).

Câmpul preia aceleași culori pentru ceea ce denumește — vezi [Scrierea unei căi](#scrierea-unei-căi).

## Reguli de vizibilitate

- Fișierele cu extensii neacceptate apar în liste numai dacă setarea **Detectează toate extensiile de fișiere** a Obsidian este activată — **în interiorul seifului**. În afara lui setarea nu se aplică: ea guvernează ce indexează seiful, iar nimic de acolo nu se află în seif, așa că un `.txt` alături de notițele tale este listat oricum.
- Lista afișează până la 1.000 de intrări, de zece ori limita proprie a Obsidian. Când un folder are mai multe, ultimul rând spune câte au fost omise; continuă să scrii ca să restrângi lista.
- Fișierele și folderele ascunse (care încep cu punct) apar doar dacă setarea **Afișează fișierele ascunse** a acestui plugin este activată.
- **Protecția împotriva suprascrierii funcționează identic indiferent de vizibilitate** — un fișier ascuns tot te împiedică să-l suprascrii.

## Foaie de referință

O cale **încadrată în ghilimele** este dezîncadrată automat pentru tine. *Copy as path* din Windows oferă
`"C:\Users\you\note.md"`, ghilimele incluse, iar un shell face la fel pentru orice
cale ce conține un spațiu; lipirea sau scrierea ei funcționează în ambele cazuri. Doar
ghilimeaua dublă, și doar ca pereche care încadrează întregul text — ea nu poate
apărea într-un nume real, unde un apostrof cu siguranță poate.

| Vrei să… | Fă asta |
| --- | --- |
| Deschizi un folder (notița lui, sau să-l dezvălui) | Clic pe separatorul **de după** acel folder |
| Dai unui folder o notiță de folder pe care nu o are | **Dublu clic** pe același separator (necesită un plugin pentru notițe de folder) |
| Înlocuiești un folder cu unul vecin | Clic pe numele folderului, apoi scrie sau alege |
| Redenumești sau retrasezi ținta notiței | Clic pe numele notiței — extensia inclusă |
| Răsfoiești conținutul unui folder | Clic pe numele acelui folder; lista arată conținutul folderului părinte, așa că fă clic pe folderul **de sub** cel dorit |
| Rescrii un folder și tot ce este sub el | **Dublu clic** pe numele acelui folder, apoi scrie |
| Editezi calea de la un folder în jos | Clic pe numele acelui folder, apoi <kbd>→</kbd> ca să deselectezi |
| Sari la un fișier scriindu-i calea | Clic pe numele fișierului sau pe spațiul gol, scrie, <kbd>Enter</kbd> |
| Deschizi în schimb un fișier într-o filă nouă | <kbd>Ctrl</kbd> în timp ce îl alegi, sau <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| Copiezi notița undeva în loc s-o muți | Creion, apoi <kbd>Ctrl</kbd> la alegerea sau confirmarea țintei |
| Creezi o notiță la o cale care nu există | Scrie calea — câmpul devine **roșu** de îndată ce nimic din listă nu i se potrivește — apoi <kbd>Enter</kbd>. În interiorul seifului este creată imediat; în afara lui întreabă mai întâi |
| Afli dacă o cale pe care ai scris-o există deja | Uită-te la culoare: preia culoarea rândului pe care îl denumește, iar roșu înseamnă că <kbd>Enter</kbd> ar crea-o |
| Cobori un nivel în timp ce scrii | Scrie `/` |
| Urci înapoi un nivel în timp ce scrii | <kbd>Backspace</kbd> în câmpul gol |
| Aduci în câmp folderele dinaintea lui | <kbd>←</kbd> la începutul lui pentru unul singur; <kbd>Shift</kbd>+<kbd>Home</kbd>, sau <kbd>Home</kbd> cu lista închisă, pentru toate |
| Muți sau redenumești notița deschisă | Clic pe creion, apoi răsfoiește sau scrie ca mai sus |
| Muți peste un nume care este ocupat | Confirmă oricum: dialogul îți permite să schimbi locurile, numele sau ambele, ori să dai fișierului din cale alt nume |
| Muți fără să redenumești | Creion → clic în folderul țintă → alege numele curent fixat al fișierului |
| Redenumești pe loc | <kbd>F2</kbd> de două ori (prima apăsare merge la titlul din text, a doua la antet) |
| Sari la un alt seif, acasă sau la un disc | Clic pe numele seifului |
| Deschizi un fișier din afara seifului | Numele seifului → alege o locație → răsfoiește → alege fișierul (doar citire până la *Editează ca text*) |
| Completezi numele pe care îl scrii | <kbd>Tab</kbd>, sau <kbd>End</kbd> pentru ce este oferit; <kbd>→</kbd> preia o literă din el |
| Intri în el, odată ce a rămas un singur nume | <kbd>Tab</kbd> din nou |
| Iei un pas înapoi, sau ieși din folder | <kbd>Shift</kbd>+<kbd>Tab</kbd> |
| Preiei întreaga cale, sau calea de sistem | <kbd>Tab</kbd> dincolo de sfârșit, sau patru clicuri |
| Copiezi un nume, o cale, sau o cale de sistem | Clic dreapta pe el de două ori; spațiul gol de trei ori pentru calea de sistem |
| Ajungi la ce oferă managerul de seifuri pentru acest seif | Clic dreapta pe pictograma de la începutul rândului |
| Copiezi ID-ul seifului | Clic dreapta pe pictograma de la începutul rândului |
| Deschizi un alt seif pe care îl răsfoiai | Clic dreapta pe numele lui de la începutul rândului |
| Vezi extensia fișierului pe rând | Activează **Afișează extensiile fișierelor** din setări |
| Deschizi un segment de folder într-o filă nouă | <kbd>Ctrl</kbd> sau clic cu butonul din mijloc pe el, ori trage-l pe bara de file |
| Ajungi la bara de cale de la tastatură | Asociază *Focalizează bara de cale* în Scurtături |
| Deschizi o adresă web sau un link `obsidian://` | Scrie-o în bară și apasă <kbd>Enter</kbd> |
| Anulezi orice | <kbd>Esc</kbd>, sau clic în afara barei din antet |
| Încerci intrări înainte de a confirma | Săgeți sau plimbă cursorul prin listă; <kbd>↑</kbd> dincolo de vârf îți dă înapoi textul tău |
| Muți o notiță într-un folder de deasupra ei | Trage-o peste acel folder în rând |
| Păstrezi un fragment de text ca notiță nouă | Trage textul peste un folder, scrie un nume, <kbd>Enter</kbd> |
| Adaugi un fragment de text la notița pe care o citești | Trage-l peste numele notiței, confirmă |
| Vezi în întregime un nume de folder prescurtat | Treci cursorul peste el, sau lărgește panoul |
| Afli unde se află seiful însuși | Treci cursorul peste pictograma de la începutul rândului |
| Scoți o notiță din seif | Creion → răsfoiește în afară → confirmă dialogul (linkurile se vor rupe) |
| Permiți scrierea în afara seifului tău | Clic pe **lacătul roșu** din antet; comutatorul de redenumire îi ia locul |
| Îl încui din nou | Clic pe comutator până când lacătul revine — o apăsare pentru a intra, una pentru a ieși |
| Ștergi un fișier din afara seifului | Deschide lacătul, apoi clic dreapta pe fișier: *Delete* îl mută în coșul de gunoi al sistemului tău |

## Setări

| Setare | Opțiuni | Implicit | Ce face |
| --- | --- | --- | --- |
| **Limbă** | Implicit Obsidian, sau oricare din cele 46 | Implicit Obsidian | În ce limbă este textul propriu al acestui plugin. *Implicit Obsidian* urmează limba stabilită în setările de Aspect, ceea ce își dorește aproape toată lumea. Rândul însuși — numele său, descrierea și *Implicit Obsidian* — rămâne în engleză indiferent ce alegi, pentru că este calea de întoarcere dintr-o limbă pe care nu o poți citi. Greaca și sanscrita sunt traduse aici și absente din propria listă a Obsidian, așa că această setare este singura cale de a ajunge la ele. |
| **Aliniere** | Stânga / Centru / Dreapta | Stânga | Unde stă bara de cale în rândul antetului. *Centru* se potrivește cu aspectul clasic al Obsidian. |
| **Separator** | Orice caracter | `/` | Separatorul desenat între segmente. Șase presetări cu un clic (`/ > ▸ › \ •`) stau înaintea câmpului de text. |
| **Afișează numele seifului** | Activat / Dezactivat | Activat | Dacă seiful însuși este primul segment al barei de cale. Dezactivat, acel segment devine o pictogramă 🏠 în loc să dispară, așa că traseul tot pornește de undeva accesibil cu clic. |
| **Numele folderului deschide lista** | Activat / Dezactivat | Activat | Inversează ce fac numele unui folder și separatorul de după el — vezi [tabelul de mai sus](#bara-de-cale). Cu [Folder notes](obsidian://show-plugin?id=folder-notes), separatorul deschide notițele de folder. Nu se aplică niciodată în modul redenumire/mutare. |
| **Afișează fișierele ascunse** | Activat / Dezactivat | Dezactivat | Dacă fișierele și folderele ascunse (cu punct) sunt listate în liste. Protecția împotriva suprascrierii se aplică oricum. |
| **Show all file types** | — | — | Nu este setarea acestui plugin, ci a Obsidian, menționată aici pentru că răspunde la aceeași întrebare: seiful tău indexează doar tipurile de fișiere pe care i s-a spus să le indexeze, și doar ce indexează poate fi listat. Caut-o în setările Obsidian și activeaz-o ca să vezi toate fișierele; butonul de lângă rând deschide acea pagină cu setarea derulată în vedere și evidențiată o clipă, la fel cum ar face clicul din propria căutare a setărilor. În afara seifului nu se aplică, întrucât nimic de acolo nu este oricum indexat. |
| **Afișează extensiile fișierelor** | Activat / Dezactivat | Dezactivat | Dacă numele fișierului pe rând poartă extensia sa. Dezactivat, ea este omisă — așa cum Obsidian o omite din titlul unei notițe. Activat, rândul denumește fișierul așa cum o face sistemul de fișiere. Oricum ar fi, extensia este al doilea lucru la care se renunță când rândul rămâne fără loc, imediat după numele seifului. |
| **Acces la fișiere externe** | Activat / Dezactivat | **Dezactivat** | Dacă numele seifului deschide lista de locații. Dezactivat, nimic din plugin nu privește vreodată dincolo de acest seif. |
| **Scurtături** | buton | — | Deschide *Scurtături* din Obsidian filtrat la acest plugin, unde *Focalizează bara de cale* poate primi o tastă. |

## Înlocuirea pictogramelor

Lure desenează trei pictograme: pictograma rădăcinii seifului (când **Afișează numele seifului** este dezactivat), comutatorul de redenumire/mutare și lacătul care îi ia locul cât timp scrierea în afara seifului este blocată. Toate pot fi înlocuite dintr-o temă sau dintr-un fragment CSS — setează glifa de înlocuire și ascunde-o pe cea inclusă într-o singură regulă:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* Afișat doar închis: deschiderea lui predă locul comutatorului de redenumire. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}
```

`--lure-icon-glyph` acceptă orice este valid în `content` din CSS, așa că `url(...)` funcționează pentru o imagine la fel de bine ca pentru o glifă text sau un emoji. Lasă `--lure-icon-svg` neatins ca să păstrezi pictograma Lucide și să-ți desenezi glifa lângă ea.
