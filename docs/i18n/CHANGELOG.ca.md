<!-- Traducció de CHANGELOG.md — estat: commit 2cbb237.
     Traducció automàtica (Claude Opus 5), no revisada per parlants nadius.
     Les correccions són benvingudes; el CHANGELOG en anglès és la versió
     de referència. -->

[English](../../CHANGELOG.md) · [العربية](CHANGELOG.ar.md) · [አማርኛ](CHANGELOG.am.md) · [Беларуская](CHANGELOG.be.md) · [বাংলা](CHANGELOG.bn.md) · **Català** · [Čeština](CHANGELOG.cs.md) · [Dansk](CHANGELOG.da.md) · [Deutsch](CHANGELOG.de.md) · [Ελληνικά](CHANGELOG.el.md) · [Español](CHANGELOG.es.md) · [فارسی](CHANGELOG.fa.md) · [Suomi](CHANGELOG.fi.md) · [Français](CHANGELOG.fr.md) · [Gaeilge](CHANGELOG.ga.md) · [עברית](CHANGELOG.he.md) · [Magyar](CHANGELOG.hu.md) · [Bahasa Indonesia](CHANGELOG.id.md) · [Italiano](CHANGELOG.it.md) · [日本語](CHANGELOG.ja.md) · [ქართული](CHANGELOG.ka.md) · [ភាសាខ្មែរ](CHANGELOG.kh.md) · [한국어](CHANGELOG.ko.md) · [Latviešu](CHANGELOG.lv.md) · [Bahasa Melayu](CHANGELOG.ms.md) · [नेपाली](CHANGELOG.ne.md) · [Nederlands](CHANGELOG.nl.md) · [Norsk](CHANGELOG.no.md) · [Polski](CHANGELOG.pl.md) · [Português](CHANGELOG.pt.md) · [Português (Brasil)](CHANGELOG.pt-BR.md) · [Română](CHANGELOG.ro.md) · [Русский](CHANGELOG.ru.md) · [संस्कृतम्](CHANGELOG.sa.md) · [Slovenčina](CHANGELOG.sk.md) · [Shqip](CHANGELOG.sq.md) · [Српски](CHANGELOG.sr.md) · [Svenska](CHANGELOG.sv.md) · [ไทย](CHANGELOG.th.md) · [Türkçe](CHANGELOG.tr.md) · [Українська](CHANGELOG.uk.md) · [Oʻzbekcha](CHANGELOG.uz.md) · [Tiếng Việt](CHANGELOG.vi.md) · [简体中文](CHANGELOG.zh.md) · [繁體中文](CHANGELOG.zh-TW.md)

# Registre de canvis

Cada versió de Lure, de la més nova a la més antiga. El que ha arribat des de la darrera versió és a *Sense publicar*. Les versions no porten el prefix `v`, igual que les etiquetes de les versions.

## Sense publicar

### Afegit

- **Un nom ja agafat pregunta en lloc de refusar.** Moure o canviar el nom cap a un nom que ja hi és obre un diàleg que mostra els dos fitxers pel seu camí sencer. Pots canviar el nom del que hi ha al mig i continuar, intercanviar-hi els llocs (entre carpetes: cadascun conserva el seu nom i pren la carpeta de l'altre), o intercanviar-hi els noms (dins d'una mateixa carpeta). Cancel·lar no mou res. Cada botó diu què farà quan hi apuntes. Triar un nom ja agafat des del desplegable pregunta el mateix, i també arrossegar un fitxer cap a una carpeta que ja té aquell nom. El nom al camp de canvi de nom del diàleg es mostra en vermell mentre estigui agafat.
- **`:graph` dins d'una carpeta obre el graf d'aquella carpeta** — el graf filtrat a `path:"that/folder"`, tal com faria el seu propi quadre de cerca. A l'arrel del cofre segueix sent el graf sencer, com abans.
- **Una carpeta que ja té el nom es mostra en vermell** al desplegable mentre mous, i també un fitxer amb aquell nom, de manera que el conflicte es veu abans de triar.

### Canviat

- **L'oferta és sempre el que escriuria <kbd>Tab</kbd>.** On els noms deixen de coincidir, el camp ofereix el pas cap al primer d'ells — abans, no oferia res allà i el <kbd>Tab</kbd> escrivia alguna cosa igualment.
- **Les ofertes ignoren majúscules i minúscules.** Escriure `sch` ofereix `Schemes`, escrit tal com és el nom; desfer l'oferta et torna les teves lletres tal com les havies escrit. On existeixen tant `Test` com `test`, s'ofereix el que està escrit tal com tu ho has escrit.
- **Després de prémer <kbd>Tab</kbd> el pas següent s'ofereix immediatament**, igual que després d'escriure una lletra.
- **El desplegable segueix el cursor**, o l'inici d'una selecció: llista la carpeta en què és aquell punt, filtrada per les lletres que el precedeixen. A l'inici d'un nom, això és la carpeta sencera.
- **Assenyalar una fila la mostra com a oferta** — el que has escrit continua sent teu i la resta del nom queda marcada — i treure el punter de la llista fa tornar l'oferta.
- **→ pren una lletra de l'oferta**, no tota; <kbd>Fi</kbd> encara la pren sencera.
- **<kbd>F2</kbd> en un camp obert el converteix en un canvi de nom allà mateix**, conservant el text, el cursor i la selecció, i **Enfoca la barra de camí** li treu el canvi de nom de la mateixa manera.
- **Qualsevol altra cosa premuda o clicada entre les dues pulsacions torna a començar el cicle de <kbd>F2</kbd> i Enfoca la barra de camí.**
- **Les carpetes són en negreta al desplegable**, de manera que la nota pròpia d'una carpeta ja no necessita ser grisa per distingir-se: és lila com qualsevol altra nota.
- **El desplegable no és més ample que la barra de camí.** Un nom que no hi cap s'escurça de la mateixa manera que l'escurça la barra de camí, i es mostra sencer en passar-hi per sobre.
- **<kbd>RePàg</kbd> i <kbd>AvPàg</kbd> desplacen el desplegable pel que mostra**, també des del camp, i la fila seleccionada manté el seu lloc a la pantalla. <kbd>Inici</kbd> i <kbd>Fi</kbd> porten a la vista la primera i l'última fila.
- **El desplegable mostra fins a 1.000 entrades** abans de comptar la resta, en lloc de 100.
- **Les carpetes cedeixen primer les més llargues.** Quan falta espai, el nom de carpeta més llarg s'escurça fins a la longitud del següent més llarg, després tots dos junts, i així successivament, cadascun aturant-se al seu mínim. Abans, totes les carpetes s'escurçaven alhora en proporció a la seva longitud.
- **Els noms escurçats llisquen en lloc de saltar.** Un nom que cedeix es retalla al píxel i s'esvaeix sota els seus `…`, de manera que res del que hi ha després a la fila es mou a bots mentre es redimensiona un panell.

### Corregit

- En un panell de la dreta, el desplegable s'obria sota el panell de l'esquerra fins que s'escrivia la primera lletra.
- Treure el punter del desplegable feia tornar l'oferta però no el seu color.
- Es va perdre un espai on s'havia partit un nom escurçat — `development guidelines` — de manera que les dues paraules quedaven enganxades.

## 1.4.0 — 2026-09-19[^1.4.0]

### Afegit

- **Una fila de Dreceres de teclat a la configuració.** El botó obre les *Dreceres de teclat* d'Obsidian filtrades per aquest connector, on es pot assignar una tecla a *Enfoca la barra de camí* — que ve sense cap.
- **Una barra de camí als panells que no contenen cap fitxer.** Una pestanya buida diu `vault / :blank`, el graf `vault / :graph`, i qualsevol altra vista sense res a nomenar rep la seva pròpia etiqueta amb `:` — la pestanya pròpia d'un connector de pestanya d'inici diu `:home-launcher`. El camp del costat és una barra d'adreces: escriu un camí i <kbd>Enter</kbd> l'obre en aquell panell, o el crea. Abans la fila quedava en blanc — el connector amagava el títol propi d'Obsidian i no hi posava res en el seu lloc.
- **Una pàgina es pot escriure i també triar** — `:graph` i les altres són una adreça, no només una entrada de llista. Els dos punts no comencen cap nom de fitxer, així que escriure'n un en qualsevol lloc les convoca, i el camp es vesteix del seu color en lloc d'oferir crear una nota que no es podria dir així.
- **Una fila per a *Mostra tots els tipus de fitxer* d'Obsidian**, al costat de la regla dels fitxers que comencen amb punt, ja que totes dues decideixen què pot llistar un menú desplegable: diu que cerquis aquesta opció a la configuració d'Obsidian i l'activis per veure tots els fitxers, i el botó del costat obre aquella pàgina amb l'opció desplaçada a la vista i ressaltada, com faria el resultat d'una cerca a la configuració. Anomenada amb les paraules d'Obsidian, explicada en 45 llengües.
- **L'arrel del cofre llista les pàgines que un panell pot contenir** — `:graph`, `:search` i les vistes que registrin els teus connectors, entre elles una pestanya d'inici o un calendari. Tria'n una i el panell l'obre, com triar una nota obre la nota. Les vistes que existeixen per mostrar un fitxer s'exclouen, perquè no tindrien res per mostrar.
- **El delimitador propi del cofre obre la teva pàgina d'inici**, si un connector en proporciona una, i es subratlla per indicar-ho; la pulsació següent plega l'arbre de fitxers, i la que ve després restaura exactament el que hi havia obert. Sense aquest connector, la primera pulsació plega, com abans.
- **Escriu un camí des de l'arrel del sistema de fitxers.** Un `/` davant d'un camp buit n'obre un en lloc de ser empassat, cada barra posterior hi pertany, i el menú desplegable llista la màquina en lloc del cofre.

### Canviat

- **F2 i Enfoca la barra de camí premen Tab dins del camp.** Tot el que Tab hi faria — el graó següent, completar el que has escrit, entrar en una carpeta — ho fan també; només allà on Tab torna al principi del camí se'n van, F2 cap al títol dins la nota, l'ordre cap a la nota. Abans, un camp en què haguessis escrit feia que F2 tornés a començar pel nom i que l'ordre tanqués el camp.
- **El pas després de sortir del cicle és la carpeta arrel.** La pulsació posterior al retorn de F2 al títol dins la nota, o al retorn de l'ordre a la nota, arriba on arriba la volta de Tab — l'arrel del cofre, amb el camí sencer al camp i la seva primera carpeta marcada — de manera que cap pas de l'anell queda només per a Tab.
- **Enfoca la barra de camí recorre com F2.** S'obre sobre el nom en lloc de tot el camí, pren els mateixos quatre graons, i la pulsació posterior a l'últim tanca el camp i torna el cursor a la nota — abans, giravoltava pels graons indefinidament i l'única tecla que arribava a la fila no la podia deixar.
- **Un nom ocupat s'avisa quan l'uses, no mentre l'escrius.** Cada nom escrit cap a `Notes.md` passa per noms que poden ser fitxers propis, i l'avís solia aparèixer i desaparèixer lletra a lletra. El que està malament en l'ortografia d'un nom continua avisant-se a mesura que s'escriu.
- **Un delimitador la nota de carpeta del qual ja és oberta revela la carpeta** en lloc de reobrir el que ja és en pantalla — que és el que ha volgut dir sempre la seva segona pulsació.
- **On ets és en negreta en un menú desplegable**, no només blau.
- **Tot el que no és una nota és taronja en un menú desplegable**, no només els tipus de text per als quals Obsidian no té vista. El porpra distingeix les notes d'una carpeta de contingut barrejat; un sol color per a la resta diu el mateix més ràpid.

### Corregit

- **Retrocés sobre una carpeta clicada ja no t'emporta el nom del cofre.** La barra que quedava al davant es llegia com un camí des de l'arrel de la màquina, cosa que buida el segment inicial — i tancar el camp amb Esc mai no el tornava, de manera que la pestanya perdia el nom i la icona del cofre per sempre. Ara una barra inicial compta com a de la màquina només quan la seva primera carpeta hi és realment, i el segment inicial torna amb totes les maneres de sortir del camp.
- Fora del cofre, els fitxers s'amagaven tret que **Detecta totes les extensions de fitxer** d'Obsidian estigués activada — una opció sobre què indexa el cofre, aplicada a carpetes que no són al cofre. Un `.txt` al costat de les teves notes ara es llista allà fora en qualsevol cas.
- El menú desplegable del nom del cofre no feia res en un panell sense fitxer, que és justament el panell que faries servir per anar a un altre lloc.
- Clicar el nom del cofre deixava el títol propi d'Obsidian al costat del camí al camp, en gris, on no apareix en cap altre moment: la fila es mesura pel que ha dibuixat, i en aquell moment s'ha buidat per fer lloc al camp.

- Clicar l'espai buit obria el camp i el perdia: revelar la nota a l'Explorador de fitxers s'emporta el cursor, de manera que el camp quedava obert i marcat mentre cada tecla anava a l'arbre.
- El graó que mostra el camí des de l'arrel del sistema dibuixava un rastre del mateix camí al costat del camp, sense ajustar, de manera que un camí profund quedava pintat sobre si mateix.

## 1.3.0 — 2026-09-17[^1.3.0]

### Afegit

- **Porta un fitxer al cofre des de fora.** Mou o copia un fitxer des de qualsevol lloc del disc a un camí dins del teu cofre; hi arriba com una nota de debò, i un moviment només elimina l'original quan la còpia s'ha fet correctament.
- **Deixa anar text o un fitxer sobre la barra per desar-lo.** Sobre una carpeta: una nota nova en aquella carpeta, amb el nom que escriguis. Sobre el nom de la nota, o sobre el separador d'una carpeta que té nota de carpeta: s'afegeix al final d'aquella nota, després d'una confirmació.
- **Crea una nota de carpeta** amb una segona pulsació sobre allò que obre la carpeta, quan hi ha un connector de notes de carpeta en marxa i la carpeta encara no en té. Es col·loca on indiquen les opcions de [Folder notes](https://github.com/LostPaul/obsidian-folder-notes).
- **Arrossega una carpeta de la barra de camí a la barra de pestanyes** per obrir-la allà: la seva nota de carpeta si en té, i si no, una pestanya situada en aquella carpeta.
- **La roda recorre el desplegable.** Sobre un nom, el primer gir obre la llista d'aquell nom i cada gir següent mou el ressaltat una fila. Una barra que s'està desplaçant lateralment conserva la roda per desplaçar-se.
- **Surt amb la fletxa per davant del camp** per incorporar-hi la carpeta anterior: <kbd>←</kbd> per a una carpeta, <kbd>Maj</kbd>+<kbd>Home</kbd> (o <kbd>Home</kbd> amb el desplegable tancat) per a totes.
- **El camp pren el color del que anomena**, el mateix que aquella fila al desplegable, i es torna vermell quan ja no hi correspon res — el moment en què <kbd>Retorn</kbd> crearia alguna cosa en lloc d'obrir-la.
- **Les notes de carpeta surten en gris al desplegable**, perquè es llegeixin com a part de la seva carpeta i no com una nota més.
- **Clic del mig sobre un separador** per obrir aquella carpeta en una pestanya nova: la seva nota de carpeta, o una pestanya situada en ella.

### Canviat

- **El cadenat i el commutador de reanomenar són un sol control.** Fora del cofre, un cadenat vermell i tancat ocupa el lloc del commutador; en obrir-lo, cedeix el lloc al commutador, i sortir del mode reanomenar el torna a tancar.
- **La tecla de reanomenar també consulta el cadenat.** Fora del cofre, una pulsació fa parpellejar el cadenat; una segona pulsació en menys de mig segon concedeix el que concedeix el cadenat i obre el mode reanomenar.
- **La tecla de reanomenar recorre un cicle complet** — títol dins la nota, nom, nom amb extensió, camí des del cofre, camí des de l'arrel del sistema — i la pulsació següent torna al títol dins la nota.
- **<kbd>Ctrl</kbd>+clic i el clic del mig ja no són sinònims.** Un obre una pestanya i hi va; l'altre l'obre en segon pla.
- **El clic dret sobre el nom de la nota obre el menú propi del fitxer.**
- **El desplegable és tan alt com permet la finestra**, en lloc dels 300 píxels fixos d'Obsidian.
- **Clicar una carpeta amb un camp obert conserva tot el camí que la segueix**, i clicar una carpeta dins del camp en llista el contingut sencer.
- **El separador obre una nota de carpeta a qualsevol profunditat** amb Folder notes en marxa, i queda subratllat allà on n'hi ha una. Abans només funcionava amb les carpetes de primer nivell. Amb els altres connectors de notes de carpeta, el separador continua mostrant la carpeta.

### Corregit

- **Un camp obert sobrevivia al seu fitxer.** Canviar a una altra nota amb la barra de camí oberta deixava la barra amb el nom del fitxer antic durant la resta de la sessió.
- **Suprimeix, Canvia el nom i Fes una còpia es rebutjaven fora del cofre** amb el cadenat obert, i no s'hi podia arribar mai per a imatges, PDF i pàgines.
- **<kbd>Ctrl</kbd>+<kbd>Retorn</kbd> no feia res amb el desplegable obert** — que és com s'obre qualsevol camp.
- **<kbd>Retorn</kbd> amb el desplegable obert però sense res ressaltat** no feia res; ara confirma el que has escrit.
- **Una barra que desbordava amb tots els noms ja escurçats al màxim no es podia desplaçar**, i el final del camí quedava inaccessible.
- **Desactivar el connector deixava un botó mort** a la capçalera de cada nota que havia modificat.

## 1.2.0 — 2026-08-25[^1.2.0]

### Afegit

- **Opció d'idioma.** Lure segueix l'idioma d'Obsidian per defecte, i es pot configurar en qualsevol dels seus propis idiomes. També és l'única manera d'arribar a les traduccions al grec i al sànscrit, que el mateix Obsidian no ofereix. L'etiqueta de l'opció es manté en anglès, perquè sempre es pugui tornar a trobar des d'un idioma que no saps llegir.

## 1.1.2 — 2026-08-25[^1.1.2]

### Canviat

- **Full d'estil més lleuger.** La barra ja no fa servir selectors `:has()` ni la majoria de regles `!important`. Es reajusta amb menys feina, i els avisos de la revisió del connector han baixat de 56 a 7.

## 1.1.1 — 2026-08-22[^1.1.1]

### Corregit

- **Un nom de carpeta curt es podia dibuixar amb un buit al mig** — `atlas` com `atl as` — perquè l'espai reservat per a la seva forma escurçada era més ample que el mateix nom.

## 1.1.0 — 2026-08-22[^1.1.0]

### Afegit

- **Vocabulari del clic dret.** Una pulsació obre un menú; dues i tres pulsacions copien progressivament més — el nom, el nom amb l'extensió, el camí. Els menús de la barra ara coincideixen entrada per entrada amb els de l'Explorador de fitxers.
- **Menús fora del cofre.** Les files del desplegable i el visor extern ofereixen obrir, *Copia el camí* i *Mostra a la carpeta*; amb el cadenat obert, també *Nota nova*, *Carpeta nova*, *Fes una còpia*, *Canvia el nom…* i *Suprimeix*. Suprimir envia a la paperera del sistema i mai no és permanent.
- **Obre en un altre lloc.** <kbd>Ctrl</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Maj</kbd> i el clic del mig sobre el nom de la nota o una carpeta l'obren en una pestanya nova, una divisió o una finestra. Tots dos es poden arrossegar, com les seves files a l'Explorador de fitxers.
- **Arrossega notes sobre la barra per moure-les.** Deixa anar una nota, diverses notes o una carpeta sobre un segment de carpeta o el nom del cofre.
- **Ordre: Enfoca la barra de camí**, amb tot el camí seleccionat — sense drecera per defecte, assigna-n'hi una de pròpia.
- **Escriu un URL** a la barra de camí: `http(s)://` i `obsidian://` s'obren com a enllaços, `file://` i els camins codificats amb percentatges obren el fitxer.
- **Compleció amb Tab**, com ho fa un intèrpret d'ordres: cada pulsació completa fins on coincideixen els noms de la carpeta i s'atura on divergeixen. <kbd>Maj</kbd>+<kbd>Tab</kbd> torna enrere. Quan no queda res per completar, <kbd>Tab</kbd> eixampla la selecció: nom, nom amb extensió, camí des del cofre, camí des de l'arrel del sistema.
- **El desplegable s'obre on ets** i mostra al camp allò que assenyales; sortir de la llista et torna el teu text.
- **Mou una nota fora del cofre** després d'una confirmació que compta els enllaços que es trencaran. Primer es copia a fora i després s'envia a la paperera, de manera que es pot recuperar com qualsevol nota suprimida.
- Opció **Mostra les extensions de fitxer**, i s'entenen els camins entre cometes (tal com els produeix *Copy as path* (Copia com a camí) de Windows).
- **Les opcions apareixen a la cerca de la configuració d'Obsidian** a Obsidian 1.13 o posterior.

### Canviat

- **Els camins llargs caben a la subfinestra.** Els noms s'escurcen començant pel menys útil — el nom del cofre, després l'extensió, després les carpetes i, en darrer lloc, el nom de la mateixa nota — mai més enllà del punt en què es poden distingir. Passa el punter per sobre d'un nom escurçat per llegir-lo sencer.
- **Clicar el nom de la nota el selecciona sense l'extensió**, així que reanomenar ja no posa en risc el tipus de fitxer.
- **La tecla de reanomenar s'obre sobre el nom sense l'extensió**, i les pulsacions següents eixamplen la selecció.
- **Clicar una carpeta manté visible la resta del camí**, també fora del cofre.
- **Tornar a navegar dins del teu cofre obre els fitxers com a notes**, amb enllaços i retroenllaços, en lloc de fer-ho al visor extern.

### Corregit

- **Les etiquetes dels menús eren en anglès en tots els idiomes**; ara provenen de les traduccions del mateix Obsidian.
- **La tecla de reanomenar acabava en un carreró sense sortida al diàleg de reanomenar d'Obsidian** quan la nota estava desplaçada més avall del títol.
- **Calien dues pulsacions d'<kbd>Esc</kbd>** per tancar el camp i el seu desplegable.
- **<kbd>Ctrl</kbd>+<kbd>Retorn</kbd> obria un enllaç a l'editor** en lloc d'actuar sobre la barra de camí.
- **Reanomenar fora del cofre perdia el nom escrit** en prémer el cadenat.
- **Tab podia fer voltes sense avançar** en una carpeta situada al costat de la seva pròpia nota de carpeta.

## 1.0.4 — 2026-08-13[^1.0.4]

### Afegit

- **La nota on ets es marca en blau** al desplegable, perquè en tornar a la seva carpeta vegis d'on has sortit.

## 1.0.3 — 2026-08-13[^1.0.3]

### Documentació

- El README enllaça la pàgina del connector al directori de la comunitat, i els README traduïts s'han posat al dia.

## 1.0.2 — 2026-08-13[^1.0.2]

### Canviat

- **Requereix Obsidian 1.8.7 o posterior** (abans 1.4.0). Dues funcions de les quals depèn la barra de camí — copiar fitxers i el missatge d'error sota el camp — ho necessiten.
- **Les baixades de les versions porten una procedència de compilació signada**, de manera que pots confirmar amb `gh attestation verify` que `main.js` s'ha compilat a partir d'aquest repositori.

### Corregit

- **Obrir a l'aplicació predeterminada un fitxer extern que no existeix fallava en silenci**; ara es notifica l'error.

## 1.0.1 — 2026-08-13[^1.0.1]

### Corregit

- **En mode reanomenar, una nota entrava en conflicte amb ella mateixa** — tornar a la seva pròpia carpeta n'amagava el nom de la llista, com si bloquegés el seu propi canvi de nom.
- **La primera vegada que es mostrava una carpeta després d'iniciar Obsidian no es desplegava res.**
- **Triar una carpeta del desplegable podia acabar el mode reanomenar** en lloc d'entrar-hi.
- **Els canvis externs es podien sobreescriure en silenci** per un altre escriptor, com Sync o una segona subfinestra. Ara les escriptures són atòmiques.
- **El restabliment del contorn de focus es filtrava a altres vistes**; ara només s'aplica a les capçaleres que Lure ha modificat.

### Documentació

- El README i la guia d'ús estan disponibles en els 44 idiomes que inclou el connector.
- La guia esmentava l'opció *Detectar totes les extensions de fitxers* (Detect all file extensions) d'Obsidian, que ara es diu *Detectar totes les extensions de fitxers* (Show all file types).

## 1.0.0 — 2026-08-10[^1.0.0]

Primera versió. Substitueix el nom del fitxer a la capçalera d'una nota per un camí del cofre clicable i editable, segment a segment — una barra d'adreces per a les teves notes, inspirada en la de Dolphin.

### Afegit

- **Clica una carpeta** per obtenir un desplegable amb el contingut de la carpeta superior, per canviar-la per una germana i deixar la resta del camí tal com està.
- **Clica el separador** que segueix una carpeta per mostrar-la i desplegar-la a l'Explorador de fitxers, o per obrir-ne la nota de carpeta quan se n'ocupa Folder notes.
- **Clica el nom del fitxer o l'espai buit** per escriure un camí, amb compleció automàtica: `/` baixa, <kbd>Retrocés</kbd> puja un nivell, <kbd>Retorn</kbd> confirma.
- **El mode moure/reanomenar** passa les mateixes interaccions a moure i reanomenar, amb les mateixes comprovacions que fa Obsidian.
- **<kbd>Ctrl</kbd> obre en una pestanya nova** — o, en mode moure/reanomenar, hi copia la nota en lloc de moure-la.
- **<kbd>F2</kbd> alterna** entre el títol dins la nota i la barra de camí.
- **Fora del cofre** (desactivat per defecte): el nom del cofre obre els teus altres cofres, la carpeta personal, l'arrel del sistema de fitxers i les unitats muntades. No s'hi escriu res fins que ho desbloquegis, i una nota només es pot copiar fora del cofre, mai moure.
- **45 idiomes.**

[^1.4.0]: Canvis des de la 1.3.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.3.0...1.4.0>
[^1.3.0]: Canvis des de la 1.2.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.2.0...1.3.0>
[^1.2.0]: Canvis des de la 1.1.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.2...1.2.0>
[^1.1.2]: Canvis des de la 1.1.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.1...1.1.2>
[^1.1.1]: Canvis des de la 1.1.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.0...1.1.1>
[^1.1.0]: Canvis des de la 1.0.4: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.4...1.1.0>
[^1.0.4]: Canvis des de la 1.0.3: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.3...1.0.4>
[^1.0.3]: Canvis des de la 1.0.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.2...1.0.3>
[^1.0.2]: Canvis des de la 1.0.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.1...1.0.2>
[^1.0.1]: Canvis des de la 1.0.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.0...1.0.1>
[^1.0.0]: La primera versió: <https://github.com/Gelaende51/obsidian-lure/releases/tag/1.0.0>
