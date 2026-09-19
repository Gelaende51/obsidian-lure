<!-- Traducere a CHANGELOG.md — stare: commit 2cbb237.
     Traducere automată (Claude Opus 5), nerevizuită de vorbitori nativi.
     Corecturile sunt binevenite; versiunea de referință este jurnalul de
     modificări în engleză. -->

[English](../../CHANGELOG.md) · [العربية](CHANGELOG.ar.md) · [አማርኛ](CHANGELOG.am.md) · [Беларуская](CHANGELOG.be.md) · [বাংলা](CHANGELOG.bn.md) · [Català](CHANGELOG.ca.md) · [Čeština](CHANGELOG.cs.md) · [Dansk](CHANGELOG.da.md) · [Deutsch](CHANGELOG.de.md) · [Ελληνικά](CHANGELOG.el.md) · [Español](CHANGELOG.es.md) · [فارسی](CHANGELOG.fa.md) · [Suomi](CHANGELOG.fi.md) · [Français](CHANGELOG.fr.md) · [Gaeilge](CHANGELOG.ga.md) · [עברית](CHANGELOG.he.md) · [Magyar](CHANGELOG.hu.md) · [Bahasa Indonesia](CHANGELOG.id.md) · [Italiano](CHANGELOG.it.md) · [日本語](CHANGELOG.ja.md) · [ქართული](CHANGELOG.ka.md) · [ភាសាខ្មែរ](CHANGELOG.kh.md) · [한국어](CHANGELOG.ko.md) · [Latviešu](CHANGELOG.lv.md) · [Bahasa Melayu](CHANGELOG.ms.md) · [नेपाली](CHANGELOG.ne.md) · [Nederlands](CHANGELOG.nl.md) · [Norsk](CHANGELOG.no.md) · [Polski](CHANGELOG.pl.md) · [Português](CHANGELOG.pt.md) · [Português (Brasil)](CHANGELOG.pt-BR.md) · **Română** · [Русский](CHANGELOG.ru.md) · [संस्कृतम्](CHANGELOG.sa.md) · [Slovenčina](CHANGELOG.sk.md) · [Shqip](CHANGELOG.sq.md) · [Српски](CHANGELOG.sr.md) · [Svenska](CHANGELOG.sv.md) · [ไทย](CHANGELOG.th.md) · [Türkçe](CHANGELOG.tr.md) · [Українська](CHANGELOG.uk.md) · [Oʻzbekcha](CHANGELOG.uz.md) · [Tiếng Việt](CHANGELOG.vi.md) · [简体中文](CHANGELOG.zh.md) · [繁體中文](CHANGELOG.zh-TW.md)

# Jurnal de modificări

Fiecare versiune a Lure, cea mai nouă prima. Ce a apărut de la ultima versiune se află sub *Nelansate*. Versiunile nu poartă prefixul `v`, la fel ca etichetele de lansare.

## 1.4.0 — 2026-09-19[^1.4.0]

### Adăugat

- **Un rând Taste rapide în setări.** Butonul lui deschide *Taste rapide* din Obsidian filtrat pe acest plugin, unde *Focalizează bara de cale* — care vine fără o tastă — poate primi una.
- **O bară de cale pe panourile care nu conțin niciun fișier.** O filă goală se citește `vault / :blank`, graful `vault / :graph`, iar orice altă vizualizare fără nimic de numit primește propria etichetă `:` — fila proprie a unui plugin de pagină de start se citește `:home-launcher`. Câmpul de lângă ea este o bară de adrese: tastează o cale și <kbd>Enter</kbd> o deschide în acel panou sau o creează. Înainte, rândul era gol — pluginul ascundea titlul propriu al Obsidian și nu punea nimic în locul lui.
- **O pagină poate fi tastată, nu doar aleasă** — `:graph` și celelalte sunt o adresă, nu doar o intrare din listă. Două puncte nu încep niciun nume de fișier, așa că tastându-le oriunde le invoci, iar câmpul ia culoarea lor în loc să se ofere să creeze o notă care nu ar putea purta un asemenea nume.
- **Un rând pentru *Afișează toate tipurile de fișiere*** din Obsidian, lângă regula fișierelor cu punct, deoarece ambele decid ce poate lista o listă derulantă: spune să cauți acea setare în setările proprii ale Obsidian și s-o activezi pentru a vedea toate fișierele, iar butonul de lângă deschide acea pagină cu setarea derulată în vedere și clipită, ca un rezultat al căutării în setări. Numit cu cuvintele Obsidian, explicat în 45 de limbi.
- **Rădăcina seifului listează paginile pe care le poate conține un panou** — `:graph`, `:search` și orice vizualizări înregistrează pluginurile tale, printre ele o filă de start sau un calendar. Alege una și panoul o deschide, așa cum alegerea unei note deschide nota. Vizualizările care există ca să afișeze un fișier sunt omise, pentru că nu ar avea ce să afișeze.
- **Delimitatorul propriu al seifului deschide pagina ta de start**, acolo unde un plugin o oferă, și este subliniat ca să o spună; apăsarea următoare strânge arborele de fișiere, iar cea de după readuce exact ce era deschis. Fără un astfel de plugin, prima apăsare strânge, ca înainte.
- **Tastează o cale de la rădăcina sistemului de fișiere.** Un `/` în fața unui câmp gol deschide una în loc să fie înghițit, fiecare bară oblică ulterioară îi aparține, iar lista derulantă listează mașina, nu seiful.

### Modificat

- **F2 și Focalizează bara de cale apasă Tab în câmp.** Orice ar face Tab acolo — următoarea treaptă, completarea a ceea ce ai tastat, intrarea într-un dosar — fac și ele; ies doar acolo unde Tab se întoarce la începutul căii, F2 spre titlul din text, comanda spre notă. Înainte, un câmp în care tastaseși făcea ca F2 să înceapă din nou pe nume, iar comanda să închidă câmpul.
- **Pasul de după ce ciclul iese este dosarul rădăcină.** Apăsarea de după întoarcerea lui F2 la titlul din text, sau a comenzii la notă, aterizează unde aterizează și turul lui Tab — rădăcina seifului, calea întreagă în câmp, primul ei dosar marcat — astfel încât niciun pas al inelului nu rămâne doar pentru Tab.
- **Focalizează bara de cale parcurge treptele ca F2.** Se deschide pe nume în loc de calea întreagă, parcurge aceleași patru trepte, iar apăsarea de după ultima închide câmpul și readuce cursorul în notă — înainte, învârtea treptele la nesfârșit, iar singura tastă care ajungea la rând nu îl putea părăsi.
- **Un nume deja luat este semnalat când îl folosești, nu cât îl tastezi.** Fiecare nume tastat către `Notes.md` trece prin nume care pot fi fișiere de sine stătătoare, iar avertismentul obișnuia să apară și să dispară literă cu literă. Ce nu e în regulă cu ortografia unui nume se spune în continuare pe măsură ce e scris.
- **Un delimitator al cărui dosar-notă este deja deschis dezvăluie dosarul** în loc să redeschidă ce e pe ecran — ceea ce a însemnat dintotdeauna a doua lui apăsare.
- **Locul unde te afli este îngroșat într-o listă derulantă**, nu doar albastru.
- **Tot ce nu este notă este portocaliu într-o listă derulantă**, nu doar tipurile de text pentru care Obsidian nu are vizualizare. Violetul scoate notele dintr-un dosar cu conținut mixt; o singură culoare pentru restul spune același lucru mai repede.

### Corectat

- **Backspace peste un dosar pe care s-a dat clic nu mai ia numele seifului.** Bara oblică rămasă în față se citea ca o cale de la rădăcina mașinii, ceea ce golește segmentul de început — iar închiderea câmpului cu Escape nu îl punea niciodată înapoi, așa că fila pierdea definitiv numele și pictograma seifului. O bară oblică inițială contează acum ca a mașinii doar când primul ei dosar chiar există, iar segmentul de început revine la orice ieșire din câmp.
- În afara seifului, fișierele erau ascunse dacă nu era activată opțiunea **Detectează toate extensiile de fișiere** din Obsidian — o setare despre ce indexează seiful, aplicată unor dosare care nu sunt în seif. Un `.txt` de lângă notele tale este listat acolo în ambele cazuri.
- Lista derulantă a numelui seifului nu făcea nimic pe un panou fără fișier, tocmai panoul pe care l-ai folosi ca să mergi în altă parte.
- Clic pe numele seifului lăsa titlul propriu al Obsidian lângă cale în câmp, estompat, unde nu apare în niciun alt moment: rândul se măsoară după ce a desenat, iar în acel moment s-a golit ca să facă loc câmpului.

- Clic pe spațiul gol deschidea câmpul și apoi îl pierdea: dezvăluirea notei în Explorator de fișiere ia cursorul cu ea, așa că câmpul rămânea deschis și marcat în timp ce fiecare apăsare de tastă mergea în arbore.
- Treapta care arată calea de la rădăcina sistemului desena lângă câmp o urmă a aceleiași căi, nepotrivită, astfel încât o cale adâncă era pictată peste ea însăși.

## 1.3.0 — 2026-09-17[^1.3.0]

### Adăugat

- **Aducerea unui fișier în seif din afara lui.** Mută sau copiază un fișier de oriunde de pe disc într-o cale din interiorul seifului; ajunge acolo ca notiță adevărată, iar o mutare șterge originalul abia după ce copierea a reușit.
- **Lasă text sau un fișier pe rând ca să fie scris.** Pe un dosar: o notiță nouă în acel dosar, numită pe măsură ce scrii. Pe numele notiței, sau pe separatorul unui dosar care are o notiță de dosar: adăugat la sfârșitul acelei notițe, după o confirmare.
- **Creează o notiță de dosar** cu o a doua apăsare pe ce anume deschide dosarul, acolo unde rulează un plugin de notițe de dosar și dosarul nu are încă una. Este plasată acolo unde spun setările proprii ale [Folder notes](https://github.com/LostPaul/obsidian-folder-notes).
- **Trage un dosar din bara de cale pe bara de file** ca să-l deschizi acolo: notița lui de dosar, dacă are una, altfel o filă poziționată în acel dosar.
- **Rotița parcurge lista.** Deasupra unui nume, prima rotire deschide lista acelui nume, iar fiecare rotire de după mută evidențierea cu un rând. Un rând care defilează lateral păstrează rotița pentru defilare.
- **Ieși cu săgeata prin fața câmpului** ca să aduci înăuntru dosarul dinaintea lui: <kbd>←</kbd> pentru un dosar, <kbd>Shift</kbd>+<kbd>Home</kbd> (sau <kbd>Home</kbd> cu lista închisă) pentru toate.
- **Câmpul poartă culoarea a ceea ce numește**, aceeași cu a rândului său din listă, și devine roșu de îndată ce nu-i mai răspunde nimic — exact în clipa în care <kbd>Enter</kbd> ar crea ceva, nu ar deschide.
- **Notițele de dosar sunt gri în listă**, ca să se citească drept ale dosarului lor, nu ca încă o notiță.
- **Clic cu rotița pe un separator** ca să deschizi acel dosar într-o filă nouă: notița lui de dosar, sau o filă poziționată în el.

### Modificat

- **Lacătul și comutatorul de redenumire sunt un singur control.** În afara seifului, un lacăt roșu, închis, ia locul comutatorului; deschiderea lui predă locul comutatorului, iar ieșirea din modul redenumire îl închide la loc.
- **Tasta de redenumire întreabă și lacătul.** În afara seifului, o apăsare face lacătul să clipească; o a doua apăsare în mai puțin de o jumătate de secundă acordă ce acordă lacătul și deschide modul redenumire.
- **Tasta de redenumire parcurge un ciclu complet** — titlul din text, nume, nume cu extensie, cale din seif, cale de la rădăcina sistemului — iar apăsarea următoare revine la titlul din text.
- **<kbd>Ctrl</kbd>-clic și clicul cu rotița nu mai sunt sinonime.** Unul deschide o filă și trece la ea, celălalt o deschide în fundal.
- **Clicul dreapta pe numele notiței deschide meniul propriu al fișierului.**
- **Lista este atât de înaltă cât permite fereastra**, în loc de cele 300 de pixele fixe ale Obsidian.
- **Clicul pe un dosar cât timp un câmp este deschis păstrează toată calea de după el**, iar intrarea cu clic într-un dosar din câmp listează integral conținutul acelui dosar.
- **Separatorul deschide o notiță de dosar la orice adâncime** cu Folder notes activ și este subliniat oriunde există una. Anterior funcționau doar dosarele de nivel superior. Cu celelalte pluginuri de notițe de dosar, separatorul dezvăluie în continuare dosarul.

### Corectat

- **Un câmp deschis supraviețuia fișierului său.** Trecerea la altă notiță cu bara de cale deschisă lăsa rândul să numească fișierul vechi pentru tot restul sesiunii.
- **Șterge, Redenumiți și Creează o copie erau refuzate în afara seifului** cu lacătul deschis și nu puteau fi accesate niciodată pentru imagini, PDF-uri și pagini.
- **<kbd>Ctrl</kbd>+<kbd>Enter</kbd> nu făcea nimic cât timp lista era deschisă** — adică exact felul în care se deschide orice câmp.
- **<kbd>Enter</kbd> cu lista deschisă, dar fără nimic evidențiat** nu făcea nimic; acum confirmă ce ai scris.
- **Un rând care depășea lățimea cu toate numele deja la forma cea mai scurtă nu putea fi defilat**, lăsând capătul căii inaccesibil.
- **Dezactivarea pluginului lăsa un buton mort** în antetul fiecărei notițe pe care o modificase.

## 1.2.0 — 2026-08-25[^1.2.0]

### Adăugat

- **Setare de limbă.** Lure urmează implicit limba Obsidian și poate fi fixat pe oricare dintre limbile proprii. Aceasta este și singura cale de a ajunge la traducerile în greacă și sanscrită, pe care Obsidian însuși nu le oferă. Eticheta setării rămâne în engleză, ca să poată fi găsită oricând dintr-o limbă pe care nu o poți citi.

## 1.1.2 — 2026-08-25[^1.1.2]

### Modificat

- **Foaie de stil mai ușoară.** Rândul nu mai folosește selectori `:has()` și nici majoritatea regulilor `!important`. Se reașază cu mai puțin efort, iar avertismentele de la revizuirea pluginului au scăzut de la 56 la 7.

## 1.1.1 — 2026-08-22[^1.1.1]

### Corectat

- **Un nume scurt de dosar putea fi desenat cu un gol în el** — `atlas` ca `atl as` — fiindcă spațiul rezervat formei lui scurtate era mai lat decât numele însuși.

## 1.1.0 — 2026-08-22[^1.1.0]

### Adăugat

- **Vocabularul clicului dreapta.** O apăsare deschide un meniu; două și trei apăsări copiază progresiv mai mult — numele, numele cu extensie, calea. Meniurile rândului se potrivesc acum, intrare cu intrare, cu cele ale Exploratorului de fișiere.
- **Meniuri în afara seifului.** Rândurile din listă și vizualizatorul extern oferă deschiderea, *Copiază calea* și *Arată în director*; cu lacătul deschis, și *Notă nouă*, *Director nou*, *Creează o copie*, *Redenumiți…* și *Șterge*. Ștergerea mută în coșul de gunoi al sistemului și nu este niciodată definitivă.
- **Deschiderea în altă parte.** <kbd>Ctrl</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> și clicul cu rotița pe numele notiței sau pe un dosar îl deschid într-o filă nouă, într-un panou divizat sau într-o fereastră. Ambele pot fi trase, ca rândurile lor din Exploratorul de fișiere.
- **Trage notițe pe rând ca să le muți.** Lasă o notiță, mai multe notițe sau un dosar pe un segment de dosar sau pe numele seifului.
- **Comandă: Focalizează bara de cale**, cu întreaga cale selectată — fără scurtătură implicită, asociază-ți una.
- **Scrie un URL** în bara de cale: `http(s)://` și `obsidian://` se deschid ca legături, `file://` și căile codificate procentual deschid fișierul.
- **Completare cu Tab**, așa cum o face un shell: fiecare apăsare completează atât cât coincid numele din dosar și se oprește unde diferă. <kbd>Shift</kbd>+<kbd>Tab</kbd> merge înapoi. Când nu mai e nimic de completat, <kbd>Tab</kbd> lărgește în schimb selecția: nume, nume cu extensie, cale din seif, cale de la rădăcina sistemului.
- **Lista se deschide acolo unde te afli** și previzualizează în câmp ceea ce arăți; ieșirea din listă îți dă textul înapoi.
- **Mutarea unei notițe în afara seifului** după o confirmare care numără legăturile pe care le va rupe. Este copiată afară, apoi aruncată la coș, deci poate fi recuperată ca orice notiță ștearsă.
- Setarea **Afișează extensiile fișierelor** și înțelegerea căilor între ghilimele (așa cum le produce *Copy as path* din Windows).
- **Setările apar în căutarea din setările Obsidian** pe Obsidian 1.13 și mai nou.

### Modificat

- **Căile lungi încap în panou.** Numele sunt scurtate începând cu cel mai puțin util — numele seifului, apoi extensia, apoi dosarele, numele notiței ultimul — niciodată dincolo de punctul în care mai pot fi deosebite. Treci cu mouse-ul peste un nume scurtat ca să-l citești întreg.
- **Clicul pe numele notiței îl selectează fără extensie**, așa că redenumirea nu mai riscă să schimbe tipul fișierului.
- **Tasta de redenumire se deschide pe numele fără extensie**, iar apăsările următoare lărgesc selecția.
- **Clicul pe un dosar păstrează restul căii vizibil**, inclusiv în afara seifului.
- **Răsfoirea înapoi în seif deschide fișierele ca notițe**, cu legături și legături inverse, în loc de vizualizatorul extern.

### Corectat

- **Etichetele de meniu erau în engleză în toate limbile**; acum provin din traducerile proprii ale Obsidian.
- **Tasta de redenumire se înfunda la dialogul de redenumire al Obsidian** când notița era defilată dincolo de titlul ei.
- **<kbd>Esc</kbd> avea nevoie de două apăsări** ca să închidă câmpul și lista lui.
- **<kbd>Ctrl</kbd>+<kbd>Enter</kbd> deschidea o legătură în editor** în loc să acționeze asupra barei de cale.
- **Redenumirea în afara seifului pierdea numele scris** când era apăsat lacătul.
- **Tab putea intra în buclă fără progres** pe un dosar care stă lângă propria notiță de dosar.

## 1.0.4 — 2026-08-13[^1.0.4]

### Adăugat

- **Notița pe care te afli este marcată cu albastru** în listă, așa că răsfoirea înapoi până la dosarul ei arată de unde ai pornit.

## 1.0.3 — 2026-08-13[^1.0.3]

### Documentație

- README-ul face legătura cu pagina pluginului din directorul comunitar, iar README-urile traduse sunt aduse la zi.

## 1.0.2 — 2026-08-13[^1.0.2]

### Modificat

- **Necesită Obsidian 1.8.7 sau mai nou** (înainte 1.4.0). Două funcții de care depinde bara de cale — copierea fișierelor și sfatul de eroare de sub câmp — au nevoie de el.
- **Descărcările de lansare poartă proveniență de build semnată**, așa că poți confirma cu `gh attestation verify` că `main.js` a fost construit din acest depozit.

### Corectat

- **Deschiderea unui fișier extern inexistent în aplicația implicită eșua în tăcere**; eșecul este acum raportat.

## 1.0.1 — 2026-08-13[^1.0.1]

### Corectat

- **În modul redenumire o notiță intra în conflict cu ea însăși** — răsfoirea înapoi până la propriul dosar îi ascundea numele din listă, ca și cum și-ar fi blocat propria redenumire.
- **Prima dezvăluire de dosar după pornirea Obsidian nu extindea nimic.**
- **Alegerea unui dosar din listă putea încheia modul redenumire** în loc să coboare în el.
- **Modificările externe puteau fi suprascrise în tăcere** de un alt scriitor, precum Sync sau un al doilea panou. Scrierile sunt acum atomice.
- **Resetarea conturului de focalizare se scurgea în alte vizualizări**; acum se aplică doar antetelor modificate de Lure.

### Documentație

- README-ul și ghidul de utilizare sunt disponibile în toate cele 44 de limbi pe care le livrează pluginul.
- Ghidul numea setarea *Detect all file extensions* din Obsidian, care acum se numește *Permiteți afișarea fișierelor indiferent de extensia acestora*.

## 1.0.0 — 2026-08-10[^1.0.0]

Prima lansare. Înlocuiește numele fișierului din antetul unei notițe cu un traseu de navigare pe care poți face clic și pe care îl poți edita, cu calea din seif — o bară de adrese pentru notițele tale, după modelul celei din Dolphin.

### Adăugat

- **Clic pe un dosar** pentru o listă derulantă cu conținutul dosarului părinte, ca să-l schimbi cu unul vecin și să lași restul căii neatins.
- **Clic pe separatorul** de după un dosar pentru a-l dezvălui și a-l extinde în Exploratorul de fișiere, sau pentru a deschide notița lui de dosar acolo unde de asta se ocupă Folder notes.
- **Clic pe numele fișierului sau pe spațiul gol** pentru a scrie o cale, cu autocompletare: `/` coboară, <kbd>Backspace</kbd> iese un nivel, <kbd>Enter</kbd> confirmă.
- **Modul mutare/redenumire** comută aceleași interacțiuni pe mutare și redenumire, validate așa cum validează Obsidian.
- **<kbd>Ctrl</kbd> deschide într-o filă nouă** — sau, în modul mutare/redenumire, copiază notița acolo.
- **<kbd>F2</kbd> alternează** între titlul din text și bara de cale.
- **În afara seifului** (dezactivat implicit): numele seifului deschide celelalte seifuri, dosarul personal, rădăcina sistemului de fișiere și unitățile montate. Nimic de acolo nu este scris până nu deblochezi, iar o notiță poate fi doar copiată în afara seifului, niciodată mutată.
- **45 de limbi.**

[^1.4.0]: Modificări de la 1.3.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.3.0...1.4.0>
[^1.3.0]: Modificări de la 1.2.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.2.0...1.3.0>
[^1.2.0]: Modificări de la 1.1.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.2...1.2.0>
[^1.1.2]: Modificări de la 1.1.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.1...1.1.2>
[^1.1.1]: Modificări de la 1.1.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.0...1.1.1>
[^1.1.0]: Modificări de la 1.0.4: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.4...1.1.0>
[^1.0.4]: Modificări de la 1.0.3: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.3...1.0.4>
[^1.0.3]: Modificări de la 1.0.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.2...1.0.3>
[^1.0.2]: Modificări de la 1.0.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.1...1.0.2>
[^1.0.1]: Modificări de la 1.0.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.0...1.0.1>
[^1.0.0]: Prima lansare: <https://github.com/Gelaende51/obsidian-lure/releases/tag/1.0.0>
