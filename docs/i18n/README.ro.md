<!-- Traducere a README.md — stare: commit dc475f7.
     Traducere automată (Claude Opus 5), nerevizuită de vorbitori nativi.
     Corecturile sunt binevenite; versiunea de referință este README-ul
     în engleză. -->

[English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · **Română** · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

Un modul [Obsidian](https://obsidian.md) care transformă numele fișierului din bara de antet a unei notițe într-o cale completă prin seif, pe care poți da clic și pe care o poți edita — ca bara de adrese din managerul de fișiere [Dolphin](https://apps.kde.org/dolphin/).

![Clic pe separatorul de după un dosar: indicatorul stă pe el, iar Exploratorul de fișiere a arătat și a desfășurat acel dosar](../images/breadcrumb.png)

Obsidian 1.8.7+ · doar desktop · AGPL-3.0

## Divulgare privind IA

- **Agent** — **Claude Opus 5** și **Claude Sonnet 5** (Anthropic, prin Claude Code): a scris codul TypeScript, CSS-ul, toate cele 45 de seturi de traduceri și documentația. Traducerile sunt generate automat și nu au fost revizuite de vorbitori nativi.
- **Consum** — 3–22 august 2026, 22 de sesiuni, \~11.820 de răspunsuri: \~15,4 mil. jetoane generate, \~55,5 mil. trimise, \~3644,2 mil. recitiri din memoria tampon (\~3715,0 mil. în total).
- **Amonte** — modelul a învățat din cod deschis, documentație și scrieri ale comunității publicate de alții. Cea mai mare parte a meritului le revine lor.
- **Autor** — Vault51: a stabilit fiecare funcție, a încercat fiecare versiune într-un seif real, a îndrumat corecturile și a citit toate rezultatele.

## Funcții

- **Clic pe un dosar** pentru o listă cu conținutul dosarului *de deasupra* — schimbă un dosar cu unul vecin fără să atingi restul căii. Numele notiței funcționează la fel, cu tot cu extensie.
- **Clic pe separatorul** de după un dosar pentru a-l arăta și a-l desfășura în Exploratorul de fișiere. O singură setare schimbă cele două roluri între ele.
- **Clic dreapta sau trage orice intrare** — meniul contextual și comportamentul de tragere ale Exploratorului de fișiere însuși.
- **Clic pe numele fișierului sau pe spațiul gol** pentru a scrie o cale, cu completare automată. `/` coboară, <kbd>Backspace</kbd> urcă un nivel, <kbd>Enter</kbd> confirmă.
- **Butonul cu creion pe dosar** comută aceleași interacțiuni pe mutare/redenumire, cu aceleași verificări pe care le face Obsidian.
- **Ține <kbd>Ctrl</kbd>** pentru a deschide într-o filă nouă — sau, în modul mutare/redenumire, pentru a copia notița acolo în loc să o muți.
- **Lista se deschide pe intrarea în care te afli**, iar parcurgerea ei cu săgețile sau cu indicatorul umple câmpul cu ceea ce indici. Dincolo de oricare capăt îți dă înapoi ce scriseseși.
- **Numele se completează pe măsură ce scrii** — acolo unde numele din dosar coincid, coincidența apare după cursor, selectată; <kbd>Tab</kbd> sau <kbd>→</kbd> o ia întreagă, <kbd>Backspace</kbd> o dă înapoi.
- **<kbd>Tab</kbd> completează ca un shell**: prelungește ce ai scris atât cât numele coincid și intră într-un dosar de îndată ce rămâne unul singur. Dincolo de capătul căii lărgește în schimb selecția: nume, nume cu extensie, cale de la seif, cale de la rădăcina sistemului. <kbd>Shift</kbd>+<kbd>Tab</kbd> face același drum înapoi.
- **Clic dreapta pentru a copia** — de două ori pentru un nume, de trei ori pentru tot ce e la dreapta lui, iar pe spațiul gol pentru calea întreagă sau cea de sistem.
- **Trage o notiță pe un dosar din rând** ca s-o muți acolo, cu tot cu legături. Numele seifului o primește și el, pentru rădăcină; o selecție întreagă se mută ca una singură, iar un dosar care n-o poate primi nu arată nimic.
- **Scrie un URL** — `https://`, `obsidian://`, ori o cale `file://` sau codificată procentual — și se deschide în loc să fie citit ca nume de notiță.
- **Căile lungi se scurtează acolo unde literele sunt de prisos** — niciodată dincolo de ce deosebește un dosar de vecinul lui — și derulează abia când nu mai e nimic de comprimat. Indică un nume scurtat ca să-l vezi întreg.
- **<kbd>F2</kbd>** alternează între titlul din notiță și bara de cale.
- **Clic pe numele seifului** pentru a răsfoi celelalte seifuri, dosarul personal, rădăcina sistemului de fișiere și unitățile montate fără a schimba seiful. Doar citire până deschizi un lacăt, și încadrat în culoarea de eroare tot timpul. Dezactivat implicit — vezi [în afara seifului](#în-afara-seifului).
- **Două niveluri de avertizare** — roșu în afara seifului, portocaliu pentru fișierele text pentru care Obsidian nu are editor. Vezi [cele două culori de avertizare](usage.ro.md#cele-două-culori-de-avertizare).
- **Pictograme care urmează tema**, se pot schimba dintr-un fragment CSS — și **45 de limbi**, fiecare pe care o aduce Obsidian.
- **Setări:** aliniere, separatoare predefinite, care clic deschide lista, numele seifului, fișiere ascunse, extensii de fișier.

![Aceeași listă în modul mutare/redenumire: numele actual al fișierului fixat sus, dosarele vecine dedesubt, iar notițele existente estompate](../images/dropdown.png)

*În modul mutare/redenumire aceeași listă oferă altceva: numele actual al notiței fixat sus, ca să o muți fără să o redenumești; dedesubt dosarele în care poate fi mutată; iar numele deja ocupate estompate, ca nimic să nu fie suprascris din greșeală.*

→ [Ghid de utilizare complet](usage.ro.md)

## În afara seifului

Politicile Obsidian pentru dezvoltatori cer ca un modul să explice orice acces la fișiere din afara seifului, așa că, pe șleau:

**Dacă face vreuna dintre aceste lucruri.** Doar dacă activezi **Acces la fișiere externe**, care este **dezactivat implicit**. Cu setarea oprită nu există niciun drum din modul către o cale externă, iar nimic din codul descris mai jos nu se execută vreodată.

**Ce citește.** Doar când îi ceri. Clicul pe numele seifului enumeră celelalte seifuri ale tale — citite din chiar `obsidian.json` al Obsidian — plus dosarul personal, rădăcina sistemului de fișiere și unitățile montate (`/proc/mounts` pe Linux, `/Volumes` pe macOS, litere de unitate pe Windows). Răsfoirea mai departe de acolo enumeră conținutul dosarelor, iar deschiderea unui fișier citește exact acel fișier.

**Ce scrie.** Nimic, până când apeși un buton care spune asta. Există două astfel de butoane, iar fiecare acoperă doar propriul domeniu:

- Butonul **Editează ca text** din vizualizator deblochează fișierul din fața ta, exact acel fișier în exact acea filă. De atunci înainte modificările tale se salvează în el pe măsură ce scrii.
- **Lacătul** din antet, vizibil doar cât timp bara de cale arată în afara seifului tău, deblochează crearea, redenumirea și mutarea pe căi externe. Se încuie la loc de îndată ce revii înăuntru, așa că permisiunea nu supraviețuiește niciodată dosarului pentru care a fost dată.

Nici una dintre deblocări nu este salvată în spațiul de lucru sau în setări, așa că scrierea nu rămâne niciodată armată pe un fișier pe care nu-ți amintești să-l fi deschis. În nici una dintre stări nu se suprascrie nimic — o destinație existentă este refuzată, folosind crearea exclusivă a sistemului de fișiere însuși în loc de o verificare care ar putea pierde cursa — iar o notiță nu poate fi niciodată *mutată* în afara seifului, pentru că legăturile către ea s-ar rupe în tăcere; ținând <kbd>Ctrl</kbd> o copiezi acolo în schimb.

**De ce.** Notițele pe care le vrei sunt adesea în alt seif, într-un dosar de sincronizare sau pe un stick USB, iar răspunsul propriu al Obsidian — schimbă seiful — închide tot ce aveai deschis. Asta te lasă să mergi să te uiți fără să pleci, și să corectezi o greșeală de tipar cât ești acolo.

**Limitarea.** Editorul Obsidian este legat de fișierele din interiorul seifului, așa că un fișier extern **nu poate** fi deschis ca o notiță adevărată, cu legături, retrolegături și tot restul; niciun modul nu poate face asta. Lure îl arată în schimb în propriul vizualizator (Markdown, imagini, audio, video, PDF), cu *Deschide extern* pentru tot restul. Bara de cale rămâne încadrată în culoarea de eroare ori de câte ori arată în afara seifului, iar urma începe din locul pe care l-ai ales — numele unui seif, dosarul personal, o unitate — și nu din structura de dosare a mașinii.

## Instalare

Listat la [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure), dar încă neaprobat pentru catalogul din aplicație — instalează-l într-unul dintre aceste moduri:

**Manual:** descarcă `main.js`, `manifest.json` și `styles.css` din [cea mai recentă versiune](https://github.com/Gelaende51/obsidian-lure/releases) în `<vault>/.obsidian/plugins/lure/`, apoi activează-l din **Setări → Module comunitare**.

**BRAT:** adaugă `Gelaende51/obsidian-lure` ca modul beta.

**Din surse:** `npm install && npm run build` — vezi [dezvoltare](../development.md).

## Compatibilitate

Nu este necesar niciun modul. **Exploratorul de fișiere** de bază, dacă este activat, este cel care arată dosarele în bara laterală; fără el, acele clicuri nu fac nimic.

Încercat cu modulele comunitare care împart antetul notiței sau răspund la clicul pe dosar — în ambele ordini de încărcare, fiecare pornit și oprit:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — separatorul deschide notița dosarului în loc să arate dosarul, astfel încât fiecare segment al căii devine un loc unde poți merge. Singurul modul de notițe pentru dosare care revendică calea din antet; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) și [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) nu ascultă acolo, așa că separatorul arată dosarul ca de obicei.
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer) și [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — amândouă desenează în același element de antet; Lure își păstrează rândul indiferent care se încarcă primul, iar oprirea oricăruia îl lasă pe celălalt neatins.
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header), [Running Head](obsidian://show-plugin?id=running-head), [Crumbs](obsidian://show-plugin?id=crumbs-obsidian), [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — au propria lor bandă și conviețuiesc fără probleme.

Doar desktop — modelul de interacțiune are nevoie de trecerea mouse-ului pe deasupra, de clicuri precise și de o tastatură. Rezultatele complete, ce a mai rămas de verificat și comparația cu Quick Explorer și Breadcrumbs se află în [compatibilitate](../compatibility.md).

## Cum să contribui

- Sesizările și pull request-urile sunt binevenite — mai ales **corecturile de traducere**, fiindcă toate cele 45 de limbi sunt traduse automat și nerevizuite de vorbitori nativi. Vezi [dezvoltare](../development.md) pentru pregătire și regulile de bază.
- **Urmărirea problemelor:** https://github.com/Gelaende51/obsidian-lure/issues
- **Donații:** [Ko-fi](https://ko-fi.com/vault51). Modulul este gratuit și sub licență AGPL oricum; bacșișurile sunt apreciate și niciodată cerute. Scopul avut în vedere este compensarea emisiilor de carbon — o intenție, nu un angajament: nu se compensează nimic până când suma nu merită osteneala, iar rândul acesta o va spune de îndată ce ceva chiar a fost compensat.

## Mulțumiri

- **Vault51** — autor: proiectare, cerințe și testare manuală de la un capăt la altul.
- **Claude Opus 5** și **Claude Sonnet 5** (Anthropic, prin Claude Code) — implementare, traduceri și documentație, sub îndrumarea autorului. Vezi [divulgare privind IA](#divulgare-privind-ia).
- **[Obsidian](https://obsidian.md)** — aplicația pe care acest modul o extinde și sursa fiecărei componente pe care o folosește: API-ul pentru module, setul de pictograme Lucide din spatele `setIcon`, instanța i18next inclusă din care sunt citite etichetele meniului contextual, precum și clasele și variabilele sale CSS. Nu este împachetat nimic de la terți; modulul **nu are dependențe la rulare**.

> **Echipa Obsidian nu a participat în niciun fel la acest proiect** — nu l-a scris, nu l-a revizuit, nu l-a girat și nu l-a sprijinit. Obsidian este o marcă înregistrată a Dynalist Inc.; acesta este un modul independent și fără nicio legătură.

Contribuitorii vor fi enumerați aici pe măsură ce sosesc contribuții.

## Legături

- **Documentație:** [docs/](../)
- **Pagina modulului:** https://community.obsidian.md/plugins/lure
- **Prezență web / surse:** https://github.com/Gelaende51/obsidian-lure
- **Donații:** [Ko-fi](https://ko-fi.com/vault51) — vezi [cum să contribui](#cum-să-contribui).
- **Licență:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. Bifurcările și versiunile redistribuite trebuie să-și publice sursele sub aceeași licență.
