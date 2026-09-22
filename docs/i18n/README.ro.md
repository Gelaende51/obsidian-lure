<!-- Traducere a README.md — stare: commit 2cbb237.
     Traducere automată (Claude Opus 5), nerevizuită de vorbitori nativi.
     Corecturile sunt binevenite; versiunea de referință este README-ul
     în engleză. -->

[English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · **Română** · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

Un plugin pentru [Obsidian](https://obsidian.md) care transformă numele fișierului din bara de antet a unei notițe într-un traseu de navigare pe care poți face clic și pe care îl poți edita, cu întreaga cale din seif — ca bara de adrese din managerul de fișiere [Dolphin](https://apps.kde.org/dolphin/).

![Clic pe separatorul de după un dosar: indicatorul stă pe el, iar Exploratorul de fișiere a dezvăluit și a extins acel dosar](../images/breadcrumb.png)

Obsidian 1.8.7+ · doar desktop · AGPL-3.0

## Divulgare privind IA

- **Agent** — **Claude Opus 5** și **Claude Sonnet 5** (Anthropic, prin Claude Code): au scris codul TypeScript, CSS-ul, toate cele 45 de seturi de traduceri și documentația. Traducerile sunt generate automat și nerevizuite de vorbitori nativi.
- **Consum** — 3 aug. – 19 sept. 2026, 20 de sesiuni, ~16.460 de răspunsuri: ~19,9 M de jetoane generate, ~87,0 M trimise, ~5451,0 M recitiri din cache (~5558,0 M în total).
- **Amonte** — modelul a învățat din cod open source, documentație și scrieri ale comunității publicate de alții. Cea mai mare parte a meritului le revine lor.
- **Autor** — Vault51: a specificat fiecare funcție, a testat fiecare iterație într-un seif real, a coordonat corecturile, a revizuit tot ce a rezultat.

## Funcții

- **Clic pe un dosar** pentru o listă derulantă cu conținutul dosarului *părinte* — schimbi un dosar cu unul vecin, restul căii rămâne neatins. Numele notiței funcționează la fel, selectând numele fără extensie.
- **Clic pe separatorul** de după un dosar pentru a-l dezvălui și a-l extinde în Exploratorul de fișiere. O setare inversează cele două roluri.
- **Clic dreapta sau trage orice intrare** — meniul contextual propriu al Exploratorului de fișiere, intrare cu intrare, și comportamentul lui la tragere. Pentru căile din afara seifului se construiește un meniu echivalent, până la *Șterge* prin coșul de gunoi al sistemului.
- **Clic pe numele fișierului sau pe spațiul gol** pentru a scrie o cale, cu autocompletare. `/` coboară, <kbd>Backspace</kbd> iese un nivel, <kbd>Enter</kbd> confirmă — iar o cale care încă nu există este pur și simplu creată, cu o notificare care spune unde a ajuns.
- **Lista se deschide pe intrarea în care te afli**, iar parcurgerea ei cu săgețile sau cu indicatorul umple câmpul cu ceea ce arăți. Un rând pe care îl indici este arătat drept oferta pe care ar face-o; ieșirea pe la oricare capăt al listei îți dă înapoi ce scriseseși, iar luarea indicatorului de pe ea predă evidențierea înapoi acolo unde erai. Lista urmărește cursorul: dosarul în care se află, filtrat după literele dinaintea lui.
- **Butonul cu creion pe dosar** comută aceleași interacțiuni pe mutare/redenumire, validate așa cum validează Obsidian. Un nume deja ocupat este roșu în listă, iar alegerea lui întreabă dacă vrei să redenumești ce stă în cale, să schimbi locul, sau să schimbi numele cu el.
- **Ține <kbd>Ctrl</kbd>** pentru a deschide într-o filă nouă — sau, în modul mutare/redenumire, pentru a copia notița acolo. Numele notiței și segmentele de dosar acceptă aceiași modificatori și aceeași tragere ca rândurile lor din Exploratorul de fișiere.
- **Numele se completează pe măsură ce scrii** — ce ar scrie <kbd>Tab</kbd> apare după cursor, selectat — coincidența numelor din dosar, sau pasul spre primul dintre ele; scrisul o înghite literă cu literă, <kbd>→</kbd> preia o literă, <kbd>Tab</kbd> sau <kbd>End</kbd> o preia întreagă, <kbd>Backspace</kbd> o ia înapoi. Lista continuă să filtreze după ce ai scris tu, nu după ce ți s-a oferit.
- **<kbd>Tab</kbd> completează ca un shell**: extinde ce ai scris atât cât coincid numele din acel dosar, înaintează spre unul dintre ele câte un pas atunci când nu coincid și intră într-un dosar abia după ce a rămas un singur nume. Dincolo de capătul căii lărgește în schimb selecția: nume, nume cu extensie, cale din seif, cale de la rădăcina sistemului. <kbd>Shift</kbd>+<kbd>Tab</kbd> parcurge același drum înapoi — marcând ce restituie, în loc să șteargă — iar dincolo de începutul lui urcă mai departe pe cale, apoi se întoarce în buclă la calea de sistem. În oricare sens, un tur complet te aduce înapoi la calea pe care ai construit-o.
- **Clic dreapta pentru a copia** — de două ori pentru un nume, de trei ori pentru tot ce se află la dreapta lui, iar pe spațiul gol pentru calea întreagă sau pentru calea de sistem.
- **Trage o notiță pe un dosar din rând** pentru a o muta acolo, cu legături cu tot — destinația este deja pe ecran, așa că e o singură tragere, nu o plimbare prin arborele de fișiere. Merge și numele seifului, pentru rădăcină. O selecție întreagă se mută ca una singură, iar un dosar care nu poate primi ce i se oferă nu arată nimic, în loc să eșueze după fapt.
- **Lasă text pe rând ca să fie scris** — pe un dosar sau pe numele seifului pentru a numi o notiță nouă acolo, pe numele notiței pentru a-l adăuga la sfârșitul a ceea ce citești. Un fișier de pe desktop funcționează la fel, iar rândul se încadrează în albastru cât timp ar ateriza acolo.
- **Câmpul poartă culoarea a ceea ce numește** — aceeași culoare pe care o are rândul lui din listă, gri pentru notița unui dosar — și **devine roșu** de îndată ce nu-i mai răspunde nimic, ca să vezi înainte de a apăsa <kbd>Enter</kbd> dacă va deschide o notiță sau va crea una.
- **Fișierele HTML se afișează ca pagini**, într-un cadru cu toate permisiunile retrase — fără scripturi, fără rețea, fără origine proprie — cu foile de stil și imaginile de lângă fișier aduse înăuntru, ca o pagină salvată să arate tot ca ea însăși. Sursa e la o apăsare distanță.
- **Scrie un URL** — `https://`, `obsidian://` sau o cale `file://` ori codificată procentual — și va fi deschis, în loc să fie tratat ca nume de notiță. Adresele web ajung într-o filă din Vizualizator web propriu al Obsidian, dacă îl ai activat.
- **Căile lungi se scurtează acolo unde literele sunt de prisos** — niciodată dincolo de ce deosebește un dosar de cel de lângă el, lin, nu literă cu literă — și defilează abia când nu mai e nimic de comprimat. Arată spre un nume scurtat ca să-l vezi din nou întreg.
- **<kbd>F2</kbd>** alternează între titlul din text și bara de cale, deschizându-se pe numele fără extensie și lărgindu-se spre căile complete la apăsările următoare. Trece curat prin dialogul de redenumire al Obsidian atunci când titlul a ieșit din câmpul vizual. O comandă *Focalizează bara de cale* parcurge aceleași trepte fără redenumire; rândul *Taste rapide* din setări te duce să o asociezi unei taste.
- **Clic pe numele seifului** pentru a răsfoi celelalte seifuri, dosarul personal, rădăcina sistemului de fișiere și unitățile montate, fără a schimba seiful. Doar-citire până când deschizi lacătul roșu care ia acolo locul comutatorului de redenumire, și încadrat tot timpul în culoarea de eroare. Dezactivat implicit — vezi [în afara seifului](#în-afara-seifului).
- **Rădăcina seifului listează paginile pe care le poate conține un panou** — `:graph`, `:search` și orice vizualizări înregistrează pluginurile tale. Alege una sau tastează-o: două puncte nu încep niciun nume de fișier, așa că etichetele servesc și ca adresă. `:graph` scris într-un dosar deschide graful acelui dosar. Cu un plugin de pagină de start instalat, delimitatorul propriu al seifului deschide acea pagină la primul clic și strânge arborele de fișiere la următorul.
- **Un rând pe panourile fără fișier** — o filă goală se citește `vault / :blank`, graful `vault / :graph`, iar câmpul de lângă este o bară de adrese: tastează o cale și <kbd>Enter</kbd> o deschide în acel panou sau o creează. Panourile laterale păstrează titlul propriu al Obsidian.
- **Două niveluri de avertizare** — roșu în afara seifului, portocaliu pentru fișierele text pentru care Obsidian nu are editor. Vezi [culorile de avertizare](usage.ro.md#cele-două-culori-de-avertizare).
- **Pictograme care urmează tema**, înlocuite dintr-un fragment CSS — și **46 de limbi**: toate cele pe care le livrează Obsidian, plus greaca și sanscrita, pentru care el nu are setare. Alege una doar pentru plugin sau urmeaz-o pe cea a Obsidian.
- **Setări:** limbă, aliniere, presetări de separator, ce clic deschide lista, numele seifului, fișiere ascunse, extensii de fișier.

![Aceeași listă în modul mutare/redenumire: numele actual al fișierului fixat în partea de sus, dosarele vecine dedesubt, iar notițele existente estompate](../images/dropdown.png)

*În modul mutare/redenumire aceeași listă schimbă ce oferă: numele actual al notiței fixat în partea de sus, pentru a o muta fără a o redenumi, dosarele în care poate fi mutată și numele deja ocupate estompate, ca nimic să nu fie suprascris din greșeală.*

→ [Ghidul complet de utilizare](usage.ro.md)

## În afara seifului

Politicile pentru dezvoltatori ale Obsidian cer pluginurilor să explice orice acces la fișiere din afara seifului, așa că, pe șleau:

**Dacă face vreuna dintre aceste lucruri.** Doar dacă activezi **Acces la fișiere externe**, care este **dezactivat implicit**. Cu opțiunea dezactivată nu există nicio cale de a ajunge la o cale externă din plugin, iar niciuna dintre porțiunile de cod de mai jos nu rulează vreodată.

**Ce citește.** Doar când îi ceri tu. Clicul pe numele seifului îți listează celelalte seifuri — citite din fișierul `obsidian.json` al Obsidian însuși — plus dosarul personal, rădăcina sistemului de fișiere și unitățile montate (`/proc/mounts` pe Linux, `/Volumes` pe macOS, literele de unitate pe Windows). Răsfoirea de acolo listează conținutul dosarelor, iar deschiderea unui fișier citește acel unic fișier.

**Ce scrie.** Nimic, până când apeși un buton care spune asta. Există două astfel de butoane, fiecare acoperind doar propriul teren:

- Butonul **Editează ca text** al vizualizatorului deblochează fișierul din fața ta, pentru acel unic fișier în acea unică filă. Modificările tale sunt apoi salvate în el pe măsură ce scrii.
- **Lacătul roșu** din antet, care stă în locul comutatorului de redenumire cât timp bara de cale arată în afara seifului, deblochează crearea, redenumirea, mutarea și ștergerea la căi externe — și predă locul înapoi comutatorului odată deschis. Se încuie din nou când te întorci înăuntru, precum și la apăsarea care iese din modul redenumire, așa că permisiunea nu supraviețuiește niciodată dosarului pentru care ai acordat-o.

Nicio deblocare nu este păstrată în spațiul de lucru sau în setări, așa că scrierea nu e niciodată armată pe un fișier pe care nu-ți amintești că l-ai deschis. În niciuna dintre stări nu se suprascrie vreodată ceva — o destinație existentă este refuzată, folosind creare-exclusivă proprie sistemului de fișiere, nu o verificare care ar putea pierde o cursă.

Mutarea unei notițe *afară* din seif este singura scriere care costă ceva ce nimic nu poate da înapoi: Obsidian actualizează legăturile doar în interiorul seifului, așa că fiecare legătură care arată spre acea notiță se rupe. Este oferită în spatele unui dialog care spune asta și numără notițele afectate, iar operația se face prin copiere-apoi-ștergere prin coșul de gunoi al Obsidian, deci este la fel de recuperabilă ca ștergerea unei notițe. Ținând <kbd>Ctrl</kbd> o copiezi afară în schimb.

**De ce.** Notițele de care ai nevoie sunt adesea în alt seif, într-un dosar de sincronizare sau pe un stick USB, iar răspunsul propriu al Obsidian — schimbă seiful — închide tot ce aveai deschis. Asta îți permite să te duci să te uiți fără să pleci și să corectezi o greșeală de scriere cât ești acolo.

**Limitarea.** Editorul Obsidian este legat de fișierele din interiorul seifului, așa că un fișier extern **nu poate** fi deschis ca notiță adevărată, cu legături, legături inverse și tot restul; niciun plugin nu poate face asta. Lure îl arată în schimb în vizualizatorul propriu (Markdown, imagini, audio, video, PDF), cu *Deschide extern* pentru orice altceva. Bara de cale rămâne încadrată în culoarea de eroare ori de câte ori arată în afara seifului, iar traseul începe de la locul pe care l-ai ales — un nume de seif, dosarul tău personal, o unitate — și nu de la structura de directoare a mașinii.

## Instalare

**În Obsidian:** deschide **Setări → Module comunitare → Răsfoiți**, caută *Lure*, apoi apasă *Instalați* și *Activați* — sau apasă *Add to Obsidian* pe [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure).

**Manual:** descarcă `main.js`, `manifest.json` și `styles.css` din [ultima versiune](https://github.com/Gelaende51/obsidian-lure/releases) în `<vault>/.obsidian/plugins/lure/`, apoi activează-l din **Setări → Module comunitare**.

**BRAT:** adaugă `Gelaende51/obsidian-lure` ca plugin beta.

**Din surse:** `npm install && npm run build` — vezi [dezvoltare](../development.md).

## Compatibilitate

Nu este necesar niciun plugin. Modulul de bază **Exploratorul de fișiere**, dacă este activat, este cel care dezvăluie dosarele în bara laterală; fără el, clicurile respective nu fac nimic.

Testat cu pluginurile comunitare care împart antetul notiței sau care răspund la clicul pe dosar — ambele ordini de încărcare, fiecare activat și dezactivat:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — separatorul deschide notița unui dosar în loc să dezvăluie dosarul, făcând din fiecare segment al căii un loc unde poți merge, oricât de adânc: notița este determinată după convenția proprie a acelui plugin, în loc să fie lăsat el să răspundă. Este și singurul care publică o asemenea convenție; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) și [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) nu publică niciuna și nu revendică niciodată calea din antet, așa că, alături de ele, separatorul dezvăluie dosarul ca de obicei.
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer) și [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — amândouă desenează în același element de antet; Lure păstrează rândul indiferent care se încarcă primul, iar dezactivarea oricăruia îl lasă pe celălalt intact.
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header), [Running Head](obsidian://show-plugin?id=running-head), [Crumbs](obsidian://show-plugin?id=crumbs-obsidian), [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — își au propria bandă și coexistă.

Doar desktop — modelul de interacțiune are nevoie de hover, de clicuri precise și de o tastatură. Rezultatele complete, așteptările rămase și comparația cu Quick Explorer și Breadcrumbs sunt în [compatibilitate](../compatibility.md).

## Cum să contribui

- Problemele și pull request-urile sunt binevenite — mai ales **corecturile de traducere**, fiindcă toate cele 45 de localizări sunt traduse automat și nerevizuite de vorbitori nativi. Vezi [dezvoltare](../development.md) pentru configurare și reguli de bază.
- **Urmărirea problemelor:** https://github.com/Gelaende51/obsidian-lure/issues
- **Donații:** [Ko-fi](https://ko-fi.com/vault51). Pluginul este gratuit și licențiat AGPL oricum; bacșișurile sunt apreciate, niciodată obligatorii. Destinația intenționată este compensarea emisiilor de carbon — o intenție, nu un angajament: nimic nu se compensează până când totalul nu e destul de mare cât să merite efortul, iar rândul acesta o va spune odată ce chiar se va fi întâmplat ceva.

## Mulțumiri

- **Vault51** — autor: design, cerințe și testare manuală pe tot parcursul.
- **Claude Opus 5** și **Claude Sonnet 5** (Anthropic, prin Claude Code) — implementare, traduceri și documentație, sub îndrumarea autorului. Vezi [divulgarea privind IA](#divulgare-privind-ia).
- **[Obsidian](https://obsidian.md)** — aplicația pe care o extinde și sursa fiecărei componente folosite de plugin: API-ul său pentru pluginuri, setul de pictograme Lucide din spatele lui `setIcon`, instanța i18next inclusă din care sunt citite etichetele meniului contextual și propriile clase și variabile CSS. Nu este inclus nimic de la terți; pluginul **nu are dependențe de execuție**.

> **Echipa Obsidian nu a participat în niciun fel la acest proiect** — nu l-a scris, nu l-a revizuit, nu l-a aprobat și nu îl susține. Obsidian este marcă înregistrată a Dynalist Inc.; acesta este un plugin independent și neafiliat.

Contribuitorii vor fi listați aici pe măsură ce contribuțiile sosesc.

## Legături


- **Documentație:** [docs/](../)
- **Jurnal de modificări:** [CHANGELOG.md](CHANGELOG.ro.md)
- **Pagina pluginului:** https://community.obsidian.md/plugins/lure
- **Prezență web / surse:** https://github.com/Gelaende51/obsidian-lure
- **Donații:** [Ko-fi](https://ko-fi.com/vault51) — vezi [cum să contribui](#cum-să-contribui).
- **Licență:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. Fork-urile și versiunile redistribuite trebuie să-și livreze sursele sub aceeași licență.
