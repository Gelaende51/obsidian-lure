<!-- Traducció de docs/usage.md — estat: commit 94b1372.
     Traducció automàtica (Claude Sonnet 5), no revisada per parlants
     nadius. Les etiquetes del connector provenen de
     src/lang/translations.ts i les d'Obsidian dels textos que la
     mateixa aplicació inclou, de manera que coincideixen amb el que
     veus a la pantalla. -->

[English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · **Català** · [Čeština](usage.cs.md) · [Dansk](usage.da.md) · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · [Bahasa Indonesia](usage.id.md) · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · [Norsk](usage.no.md) · [Polski](usage.pl.md) · [Português](usage.pt.md) · [Português (Brasil)](usage.pt-BR.md) · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

# Ús

[← torna al README](README.ca.md)

## La barra de camí

El camí complet de la nota dins el cofre substitueix el nom de fitxer pelat a la capçalera de la vista — la barra sota la fila de pestanyes que també allotja els botons d'endavant i enrere.

Hi ha dues coses clicables en aquesta fila, i **El nom de la carpeta obre el desplegable** decideix què fa cadascuna:

| | Nom de la carpeta | Separador que la segueix |
| --- | --- | --- |
| **Activat** (predeterminat) | Selecciona aquella carpeta per editar-la | Obre la carpeta |
| **Desactivat** | Obre la carpeta | Baixa dins d'aquella carpeta |

«Obre la carpeta» vol dir el que fa clicar aquell segment a l'Obsidian sense connectors. Si no hi ha cap connector escoltant-hi, la carpeta es revela a l'Explorador de fitxers de la barra lateral — ressaltada i desplegada perquè se'n vegi el contingut.

Quan la carpeta de la nota és la mateixa que ja estàs llegint, el clic revela la carpeta en comptes d'obrir-la — no hi ha res a obrir que no estigui ja en pantalla, que és el que la segona pulsació sempre ha volgut dir.

Amb [Folder notes](obsidian://show-plugin?id=folder-notes) instal·lat, el mateix clic obre en canvi la nota d'aquella carpeta, **a qualsevol profunditat**: la nota es resol aquí a partir de la pròpia convenció d'aquell connector en comptes de deixar-li-ho respondre. Aquell connector només reconeix les carpetes que ha marcat, cosa que en un camí de més d'una carpeta de profunditat no és cap d'elles, de manera que la pulsació que obria la nota d'una carpeta d'arrel no feia res més avall. Els altres dos connectors de notes de carpeta no publiquen cap convenció a llegir i mai no reclamen la fila, de manera que amb aquests el separador revela la carpeta com sempre. És l'únic connector de notes de carpeta trobat que reclama el camí de la capçalera; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) i [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) gestionen notes de carpeta però no escolten un clic a la barra de camí, de manera que amb aquests el separador revela la carpeta com de costum. Vegeu [compatibilitat](../compatibility.md#verified-against).

Un separador només queda **subratllat quan la carpeta que el precedeix té realment una nota de carpeta**, de manera que el subratllat és una promesa que hi ha alguna cosa a obrir — a qualsevol profunditat amb [Folder notes](obsidian://show-plugin?id=folder-notes) en marxa, ja que la nota es resol aquí en comptes de deixar-ho marcar a aquell connector. Quan no és el connector que hi ha en marxa, no hi ha res subratllat i no s'obre res: el separador revela, tal com fa sense cap connector de notes de carpeta. Tots dos casos deixen cada separador clicable — un sense subratllat revela i desplega la seva carpeta a la barra lateral, cosa que el cursor de punter segueix indicant. El subratllat es desplaça alhora del nom de la carpeta: amb el canvi activat, el nom obre el desplegable, de manera que marcar-lo com l'enllaç a la nota seria mentida.

**El mode canvi de nom/moviment ho sobreescriu tot dos**, digui el que digui la configuració: res de la fila no obre una carpeta mentre hi ha un moviment pendent, perquè obrir-ne una l'abandonaria. Els noms de carpeta se seleccionen per editar-los i els separadors baixen — totes dues coses són maneres de triar la destinació — i el subratllat desapareix per mostrar que l'obertura està suspesa.

**L'arrel del cofre** és l'únic segment que no és un segment de camí. No té cap pare del qual llistar germans, així que en comptes d'això obre el [desplegable d'ubicacions](#navegar-fora-del-cofre) — els teus altres cofres, la carpeta personal, l'arrel del sistema de fitxers i les unitats muntades.

## El separador propi del cofre

El separador just després del nom del cofre representa el mateix cofre en comptes
d'una carpeta, de manera que fa el que cap altre separador pot fer:

| | Primer clic | Clic següent |
| --- | --- | --- |
| **Amb un connector de pàgina d'inici** (una pàgina que et rep quan s'obre l'Obsidian) | Obre aquella pàgina en aquest panell | Plega l'arbre de fitxers |
| **Sense cap** | Plega l'arbre de fitxers | Restaura exactament el que hi havia obert |

Clics normals, no un doble clic: un cop la pàgina és oberta, el separador no té
res més a obrir, de manera que la pulsació següent és el plegament — per molt
que hi trigues.

Queda **subratllat** quan hi ha una pàgina d'inici a obrir, que és la mateixa
promesa que fa el separador d'una carpeta: hi ha alguna cosa allà. Plegar és un
commutador — la pulsació següent restaura les carpetes que hi havia obertes, i
només aquelles, de manera que un arbre que havies ordenat no es perd per una
ullada a una altra cosa.

## Un panell sense fitxer

Una pestanya buida, el graf i qualsevol altra cosa que no anomeni cap fitxer
tenen una fila pròpia: el cofre, i després un segment que diu què conté el
panell.

```
my-vault / :blank      a new tab
my-vault / :graph      the graph, local or global
my-vault / :<type>     anything else with no file
```

El propi **llistat de l'arrel del cofre** també ofereix aquestes pàgines, sota
les carpetes i notes que hi ha realment: tria `:graph` o `:search` allà i el
panell obre aquella vista, exactament com triar una nota obre la nota. Quines
pàgines existeixen es llegeix de l'Obsidian en comptes d'estar escrit aquí —
cada vista que no existeix per mostrar un fitxer, de manera que un connector
que en registra una (una pestanya d'inici, un calendari) apareix sense que
aquest connector en sàpiga res. Les vistes que necessiten un fitxer —
Markdown, PDF, imatges, canvas, bases — no s'ofereixen: no hi ha res que
puguin mostrar.

Els dos punts són la clau — cap fitxer o carpeta es pot dir `:graph`, de manera
que la fila no es pot confondre amb un camí que es podria obrir. L'etiqueta ve
del tipus de vista en comptes de la redacció pròpia de l'Obsidian, de manera
que es llegeix igual sigui quin sigui l'idioma de la interfície, i un `-view`
final es descarta: un connector de pestanya d'inici registra la seva vista com
`home-launcher-view`, i la fila diu `:home-launcher`.

Clicar l'espai buit, o l'etiqueta en si, **obre el camp a l'arrel del cofre**:
escriu un camí i <kbd>Enter</kbd> l'obre en aquest mateix panell, amb el mateix
autocompletat, el mateix desplegable i el mateix camp vermell que ofereix crear
el que encara no hi és. Una pestanya buida és un bon lloc per escriure on vols
anar, que és per a què serveix.

L'etiqueta és una etiqueta i res més: sense desplegable, sense arrossegament,
sense canvi de nom. Els panells de les barres laterals es deixen completament
en pau — un panell d'enllaços entrants conserva el títol que li dona l'Obsidian.

Els canvas, els PDF, les imatges i les bases no necessiten res d'això. Són
fitxers, de manera que tenen una barra de camí normal.

## Clicar un segment: canvia'l per un germà

Clicar el nom d'una carpeta selecciona **el nom d'aquella carpeta** en un camp de text i obre un desplegable de la carpeta **un nivell per damunt** — el seu pare. Escriure o triar una entrada canvia aquesta carpeta per un germà i deixa intacte tot el que hi ha per sota, de manera que `Projectes/2026/Inici.md` → clic a `2026` → tria `2025` et dona `Projectes/2025/Inici.md`.

Clicar el **nom de la nota** funciona de la mateixa manera contra la seva pròpia carpeta, i selecciona el nom **sense l'extensió** — canviar el nom és l'edició habitual, i escriure directament sobre una selecció que incloïa `.md` abans canviava el tipus de fitxer per accident. L'extensió es manté visible a una tecla de distància: <kbd>→</kbd> hi arriba, i el doble clic que eixampla a tota la fila l'agafa tota.

Clicar la carpeta ja ha seleccionat un segment, de manera que **un clic més** eixampla la selecció a tota la línia — aquella carpeta *i* tot el que hi ha per sota — i llavors escriure substitueix la resta del camí d'un sol cop. Funciona igual en mode navegació i en mode canvi de nom/moviment.

Això només s'aplica com a continuació del clic que ha obert el camp. Un cop has fet servir el camp, es comporta com qualsevol altre camp de text: el clic col·loca el cursor, el doble clic agafa una paraula i el triple clic agafa la línia.

En ambdós casos, la resta del camí es manté visible al voltant del camp, com a etiquetes abans i com a text no seleccionat després, de manera que el camí complet mai no desapareix de la capçalera. Escriu per substituir la selecció, o prem <kbd>→</kbd> per mantenir-la i editar a partir d'allà. El desplegable llista tota la carpeta independentment del que hi hagi predefinit; només comença a filtrar quan realment escrius.

## Baixar amb el separador

Clicar un separador (amb **El nom de la carpeta obre el desplegable** desactivat) baixa dins la carpeta que el precedeix: el desplegable llista el contingut d'*aquella* carpeta, i la resta del camí s'obre seleccionada al camp. Triar una carpeta l'afegeix al rastre del camí i obre immediatament el desplegable següent, de manera que pots anar baixant per un arbre a cop de clic sense sortir de la fila de la capçalera.

## El desplegable s'obre on ets

La llista s'obre a l'entrada on estàs situat — la nota a la qual pertany
aquesta barra, o, quan un clic a una carpeta ha llistat el seu pare, aquella
carpeta — en comptes de la primera fila. En una carpeta de dues-centes notes,
la primera fila no queda a prop teu ni de bon tros.

**Una roda del ratolí sobre un nom obre la seva llista i la recorre.** El
primer gir obre la mateixa llista que obre prémer el nom, i cada gir posterior
mou el ressaltat una fila, posant allò cap a on apuntes al camp exactament com
fan les fletxes — de manera que es pot trobar i triar un germà sense el
teclat. Girar en qualsevol dels dos extrems et retorna el teu text. Una fila
amb més camí que panell respon a la roda desplaçant-se lateralment en comptes,
que és la lectura que guanya mentre s'hi aplica.

La llista és **tan alta com la finestra ho permet**. L'Obsidian limita les
seves llistes de suggeriments a 300 píxels sigui el que sigui que hi hagi a
sota; aquesta arriba fins al final de la finestra, aturant-se pocs píxels
abans del marge, i només fa desplaçament quan la carpeta en té més. **No és
més ampla que la barra de camí**: un nom que no hi cap s'escurça de la mateixa
manera que la fila n'escurça un, i es mostra sencer quan hi apuntes.

Moure's per la llista **posa allò cap a on apuntes al camp**, ja sigui amb les
fletxes o passant-hi el ratolí per sobre — en lloc del segment que estaves
editant, i deixant la resta del camí tal com era — de manera que la fila on
ets és també el camí que obtindries.

La resta del camí es mostra **només fins on existeix sota allò cap a on
apuntes**. Estant en una carpeta amb `2026/nota.md` darrere del segment que
estàs editant, apuntar a una carpeta que té un `2026` amb una `nota.md` a
dins en mostra tot; una que té el `2026` i cap nota mostra `2026`; una que no
té cap dels dos no mostra res després del nom, i tampoc ho fa un fitxer, ja
que sota d'un no hi viu res. El que **has escrit** manté tot el seu camí
mentre l'escrius, per poc que n'hi hagi encara — un nom escrit a mitges no és
una decisió. Fixar un nom sí que és una decisió, i el que no es pot assolir
des d'allà es talla en aquell punt; les carpetes que estàs creant són les que
escrius *després* d'ell, que és on <kbd>Enter</kbd> les crea.
El text que havies escrit es conserva: sortir **per qualsevol dels dos
extrems de la llista** — cap amunt sortint de la primera entrada, o cap avall
sortint de l'última — hi renuncia i et retorna el teu text, sense res
ressaltat. El camp és una parada més a l'anell com qualsevol entrada, de
manera que una volta hi passa en comptes de saltar de l'última fila a la
primera, i continuar prement des d'allà et porta cap a l'altre extrem.

Retirar **el punter de la llista** també et retorna el teu text — i torna el
ressaltat a allò que el tenia abans que hi arribés el ratolí: l'entrada a la
qual havies anat amb les fletxes, tornant a mostrar-se al camp, o la que va
obrir la llista perquè és on ets. Passar-hi el ratolí per sobre és una manera
de mirar més que de triar, de manera que un escombrat del punter per la
llista no et costa res.

La llista en si no canvia mentre t'hi mous — segueix filtrant pel que has
escrit, no pel que s'ha previsualitzat al camp — de manera que l'entrada sota
teu mai no es desplaça de sota la pulsació següent. Escriure substitueix la
previsualització i filtra com de costum.

**Allò pel qual filtra és el segment que estàs editant**, no tot el camp.
Clicar una carpeta deixa la resta del camí al darrere del nom que estàs
canviant, de manera que filtrar per tot ell buscaria un fill anomenat
`2026/Inici.md` i no en trobaria cap — la llista es tancaria a la primera
tecla que premessis, fos la que fos. **L'extensió tampoc s'hi inclou**,
mentre el cursor estigui just davant del punt: clicar el nom d'una nota
selecciona l'arrel del nom i deixa `.md` darrere, de manera que escriure una
lletra fa que el camp digui `a.md`, i això no és el que busques. Posa el
cursor després del punt i l'extensió compta com qualsevol altra cosa. Un nom
que genuïnament no coincideix amb res també tanca la llista, perquè una
llista buida és la resposta honesta.

Una previsualització **canvia només aquell segment i deixa la resta del camí
intacta**: apuntar a una carpeta pregunta què passaria si aquest pas fos
aquell, no llença el camí. Sortir de la llista restaura el text *i* la
selecció que tenies, de manera que la tecla següent substitueix el que anava
a substituir abans que hi miressis.

## Les entrades del desplegable són files reals del gestor de fitxers

Cada fitxer i carpeta del desplegable es comporta com la seva fila a l'Explorador de fitxers:

- **Clic dret** per obtenir el mateix menú contextual que dona l'Explorador de fitxers, entrada per entrada — incloent-hi les que afegeixen altres connectors. Una carpeta ofereix *Nota nova*, *Carpeta nova*, *Canvas nou*, *Base nova*, *Fes una còpia*, *Mou la carpeta a…*, *Cerca a la carpeta*, *Copia el camí*, *Mostra a l'explorador del sistema*, *Canvia el nom…* i *Suprimeix*; un fitxer ofereix el seu propi equivalent, *Obre amb l'aplicació predeterminada* inclòs.
- **Arrossega** una entrada a qualsevol lloc on l'Obsidian accepti un fitxer: dins un editor per inserir un enllaç, sobre una carpeta a l'Explorador de fitxers per moure-la-hi, sobre la barra de pestanyes per obrir-la.

La redacció dels menús ve de les traduccions del mateix Obsidian, de manera que encaixa amb la resta de l'aplicació en qualsevol idioma.

## Escriure un camí

- Clicar l'**espai buit** abans o després de la barra de camí obre un camp de text sobre el camí sencer *i mostra la nota al gestor de fitxers*, de manera que l'arbre segueix el panell sense un segon gest. **Compta les teves pulsacions**: una selecciona el camí sense l'extensió, dues el seleccionen amb ella, tres seleccionen el camí tal com el coneix la màquina. Clicar el **nom del fitxer** compta igual però comença un graó més avall, en el nom mateix: una el selecciona sense l'extensió, dues amb ella, i tres amplien al camí sencer *des de la carpeta del teu cofre* — la forma que vol un enllaç o una cerca, en comptes de la de la màquina. Una quarta pulsació hi arriba.
- **El comptatge pertany a la sèrie que ha obert el camp.** Un cop ha caducat — has fet una pausa, has escrit, o has clicat un cop en algun lloc del text — el camp és un camp de text com qualsevol altre, i un doble clic hi selecciona la paraula sota el punter com faria a qualsevol lloc. Escriu sobre el que està seleccionat, o edita in situ. (Clicar el nom del fitxer mateix selecciona només el nom del fitxer; vegeu més amunt.) Clicar amb el botó dret al mateix espai **copia** aquestes mateixes tres, a dues, tres i quatre pulsacions — un botó les mostra, l'altre les pren. Una **única** pulsació amb el botó dret obre el camí amb tot seleccionat i ofereix el que s'hi pot fer: tallar, copiar, enganxar, seleccionar-ho tot, en paraules del mateix Obsidian.
- **Clica amb el botó del mig l'espai buit** per enganxar sobre el camí: el camp s'obre sobre el camí sencer *des de l'arrel del cofre*, de manera que el porta-retalls el substitueix tot, i el que hi arriba queda seleccionat. <kbd>Enter</kbd> hi va a continuació.
- **<kbd>Ctrl</kbd>+clic a l'espai buit** per obrir aquesta nota de nou en una pestanya pròpia, mostrada breument al gestor de fitxers perquè la segona pestanya no es confongui amb la primera. Sobre el **nom del cofre**, <kbd>Ctrl</kbd>+clic o el clic amb el botó del mig obre una pestanya que no conté res, situada a l'arrel del cofre amb la llista ja mostrada — un lloc on escriure un camí des de zero.
- Escriure mentre es mostra un rastre de camí converteix el segment final en un petit camp amb autocompletat en directe limitat a la carpeta actual.
- **Es pot escriure un camí des de l'arrel del sistema de fitxers.** `/` davant d'un camp buit n'obre un en comptes de completar un graó, cada barra després pertany a aquest camí, i `~` és la teva carpeta d'usuari. Mentre el camp conté un camí així, el desplegable llista la màquina en comptes del cofre, i el segment inicial de la fila s'aparta — el que hi ha al camp comença a l'arrel i ho diu. Amb *Accés a fitxers externs* desactivat, la llista queda buida, perquè <kbd>Enter</kbd> refusaria el camí de totes maneres.
- **Es pot escriure una pàgina, no només triar-la.** `:graph`, `:search`, o el que registrin els teus connectors — les etiquetes que ofereix [el llistat de l'arrel del cofre](#un-panell-sense-fitxer). Escriure dos punts en qualsevol lloc les invoca, ja que cap nom en pot contenir, i <kbd>Enter</kbd> obre aquesta vista en aquest panell. `:graph` escrit **dins d'una carpeta** obre el graf d'aquesta carpeta — el graf filtrat a `path:"that/folder"` en el seu propi camp de cerca, com si s'hi hagués escrit; a l'arrel del cofre és el graf sencer. <kbd>Tab</kbd> completa el nom com completa el d'una carpeta — i s'emporta tot el que el camp contenia, ja que una pàgina no és a cap carpeta i res viu sota una. Clicar l'etiqueta d'una d'aquestes pàgines obre el camp ja amb-la contenint.
- **El que <kbd>Tab</kbd> escriuria s'ofereix mentre escrius.** On cada fill que comença amb el que has escrit continua concordant una estona, aquesta concordança apareix després del cursor, seleccionada; on deixen de concordar, el pas cap al primer d'ells hi apareix — o cap a la fila a la qual has anat amb les fletxes, ja que és cap a aquesta que aniria <kbd>Tab</kbd>. Escriure sobre un nom deixa la seva extensió dreta i ofereix davant seu, i una carpeta on just has entrat ofereix el seu primer pas, de manera que no hi ha cap estat en què no s'ofereix res i <kbd>Tab</kbd> tanmateix escriu alguna cosa. Escriu aquestes lletres i s'engoleixen d'una en una; escriu qualsevol altra cosa i desapareix. <kbd>Tab</kbd> o <kbd>End</kbd> la pren tota, <kbd>→</kbd> en pren una lletra, <kbd>Retrocés</kbd> la retorna sense tocar cap lletra que hagis escrit, i no es torna a oferir res fins que escrius — de manera que sempre hi ha una sortida d'un nom que no volies. Després d'una pulsació de <kbd>Tab</kbd> el pas següent s'ofereix de seguida, com després d'una lletra escrita. El que llista el desplegable està filtrat per allò que **tu** has escrit, mai per allò que s'havia ofert.
- **Les ofertes ignoren majúscules i minúscules.** `sch` ofereix `Schemes`, escrit tal com s'anomena el nom; recuperar l'oferta et retorna les teves lletres tal com les havies escrit. On existeixen `Test` i `test` alhora, s'ofereix el que està escrit tal com tu l'has escrit.
- Al camp, la part oferta simplement està **seleccionada**. A la llista és on s'especifica: cada fila mostra la part que **ha coincidit amb el que has escrit en negreta**, allà on sigui dins el nom que hi ha coincidit — `kick` troba `Weekly kickoff` i ho indica. **Els noms que comencen amb el que has escrit van primer**, per davant dels que només el contenen, i estan marcats amb una línia al costat: **blava** on comparteixen més del que has escrit, de manera que <kbd>Tab</kbd> té alguna cosa a afegir per a tots ells, i **verda** en la branca que segueix l'oferta on es separen — `te` amb `test1`, `test2`, `text1` i `text2` ofereix `te`+`st`, de manera que les dues files `test` són verdes i les dues files `text` mantenen la línia simple. Cadascuna **subratlla el pas que <kbd>Tab</kbd> faria cap a ella**, no només el que s'ofereix, i el subratllat segueix l'oferta a mesura que canvia.
- **Escriure deixa anar la fila ressaltada.** La llista s'obre a l'entrada on estàs situat, però en el moment que escrius es tracta d'un altre lloc, i un ressaltat que ningú hi ha posat es llegeix com una tria ja feta.
- L'oferta és només text davant teu: les lletres que has escrit es mantenen tal com les has escrit mentre escrius, i acceptar l'oferta reescriu el nom tal com l'anomena la carpeta, perquè un camí ha de coincidir amb el disc. `sk` + <kbd>Tab</kbd> arriba a `Skyline`, no a `skyline`.
- **El camp porta el color del que anomena**, el mateix color que la seva fila al desplegable: lila per a una nota, inclosa la nota pròpia d'una carpeta, taronja per a qualsevol cosa que no sigui una nota, blau per a la nota on ets. La fila d'on pren el color és la que s'anomena exactament com has escrit, o si no, la ressaltada, o si no, la primera a la qual encara porta el que has escrit.
- **El camp es torna vermell quan res respon al que hi ha escrit** — ni fitxer, ni carpeta, ni cap fila del desplegable que encara hi porti. Des d'aquí <kbd>Enter</kbd> crea el que hi ha al camp en comptes d'obrir-ho, i el vermell ho diu abans que ho confirmis. Mai apareix per a una adreça web, que no és un lloc en aquesta màquina on buscar. Es colora el camp **sencer** en comptes de només la part que falta: un camp de text no pot colorar la meitat del seu propi contingut. En mode canvi de nom/moviment, el camp manté el seu propi vermell per a un nom il·legal — allà, un nom al qual res respon és precisament el punt. Que un nom **ja estigui ocupat** es tracta quan el confirmes, amb un diàleg que pregunta què s'ha de fer amb el fitxer que hi ha pel mig — vegeu [Un nom que ja està ocupat](#un-nom-que-ja-existeix): cada nom escrit cap a `Notes.md` passa per noms que poden ser fitxers propis, de manera que marcar-lo lletra per lletra avisaria d'un nom que encara ningú havia demanat.
- `/` confirma el segment que estàs escrivint i hi descendeix, mantenint el que hi ha darrere — el mateix que fa <kbd>Tab</kbd> quan hi entra.
- <kbd>Retrocés</kbd> en un camp buit torna a la carpeta pare, tornant a obrir el seu nom amb el cursor al final. El mateix fa <kbd>Retrocés</kbd> davant d'una extensió que ha quedat sola — un camp que només conté `.md` no anomena res — i l'extensió sola se'n va amb ella.
- **Clicar una carpeta mentre un camp és obert l'amplia al camí sencer després d'aquesta carpeta**, amb el nom propi de la carpeta seleccionat — el mateix que hauria fet clicar-la des de la fila, i tot el que el camp contenia es manté. El que hi ha al camp és la cua de la fila mentre és oberta, de manera que una carpeta clicada més amunt retorna el camí que la sessió ha recorregut en comptes del que la nota tenia al començament.
- **Fer anar les fletxes fora del davant del camp hi porta la carpeta anterior**, com si el camí sencer fos una sola línia de text. Amb el cursor just al començament, <kbd>←</kbd> porta aquesta carpeta dins el camp i aterra al final del seu nom, <kbd>Ctrl</kbd>+<kbd>←</kbd> aterra al començament, i <kbd>Home</kbd> porta totes les carpetes fins a l'arrel del cofre — o fins al lloc que has triat, fora del cofre — d'un cop. Mantenint <kbd>Shift</kbd> la selecció s'estén sobre el que ha entrat. A macOS el salt de paraula és <kbd>Option</kbd>+<kbd>←</kbd> i <kbd>Cmd</kbd>+<kbd>←</kbd> és <kbd>Home</kbd>. En qualsevol lloc que no sigui el davant, aquestes són tecles de text ordinàries. **Mentre el desplegable es mostra, <kbd>Home</kbd>, <kbd>End</kbd>, <kbd>PgUp</kbd> i <kbd>PgDn</kbd> li pertanyen** — primera fila, última fila, una pàgina amunt, una pàgina avall, sent una pàgina el que mostra la llista, amb la fila ressaltada mantenint el seu lloc a la pantalla — i només arriben al text un cop s'ha tancat; <kbd>Shift</kbd>+<kbd>Home</kbd> porta totes les carpetes amb la llista encara oberta.
- **La llista segueix el cursor.** Tria una part diferent del camí — arrossega-hi per sobre, clica-hi dins, o mou-t'hi amb les fletxes — i el desplegable llista els fills d'*aquella* carpeta, no de la que el camp havia obert. La carpeta es compta a partir de les etiquetes més el que del camp queda davant del cursor, de manera que clicar dins de `Notes.md` en un camp que conté `2026/Notes.md` llista el que hi ha a `2026`. Apuntar a una fila l'escriu al segment on és el cursor, i treure el punter de la llista et retorna el teu text i la teva selecció, exactament tal com eren.
- **Arrossegar una selecció fora del camp** i deixar-la anar en un altre lloc no el tanca. Una pulsació que comença dins el camp pertany a l'edició per molt lluny que arribi; només una pulsació que *comença* fora és un clic que se'n va.
- <kbd>Enter</kbd> confirma — i quan el camp no anomena res, com en una carpeta buida on mai hi ha hagut res a completar, diu *No file selected* i es manté obert en comptes de tancar-se com si s'hagués triat alguna cosa. <kbd>Esc</kbd> o un clic en un altre lloc cancel·la i torna al camí real del fitxer. Una pulsació d'<kbd>Esc</kbd> n'hi ha prou: tanca el desplegable, surt del camp i retorna el focus a la nota, en comptes de necessitar una pulsació per capa.

El camp no té cap ornament — ni caixa ni vora — de manera que es llegeix com el text del camí mateix, i creix sol a mesura que escrius.

## Cada part de la fila, botó per botó

Tota la fila d'un cop d'ull. La columna del clic dret és el que et dona **una** sola pulsació; aquest botó també compta pulsacions, i [la seva pròpia taula](#clic-dret-una-pulsació-dues-pulsacions-tres) més avall té la segona, tercera i quarta. Aquesta assumeix que **El nom de la carpeta obre el desplegable** està activat, que és el valor per defecte — amb això desactivat, el nom de la carpeta i el separador intercanvien la primera columna, tal com diu [la taula de dalt](#la-barra-de-camí).

| On premeu | Clic | Doble clic | <kbd>Ctrl</kbd>+clic, o clic central | Clic dret | Deixar-hi anar alguna cosa |
| --- | --- | --- | --- | --- | --- |
| El **nom del magatzem** | Obre el desplegable d'ubicacions — altres magatzems, l'inici, l'arrel del sistema de fitxers, unitats muntades. Desactivat per defecte; amb això desactivat, mostra el magatzem al Sistema d'arxius en lloc d'això | Marca el **camí absolut sencer**. Aquest desplegable s'obre amb el camí ja al camp i només marcada la part pròpia del magatzem; una segona pulsació amplia sobre la resta. No hi ha res a ampliar amb el desplegable desactivat | Una pestanya sense res, situada a l'arrel del magatzem amb la llista ja mostrada — un lloc on escriure un camí des de zero | El menú contextual propi del magatzem: el que es pot fer al magatzem que aquell segment anomena | Un **fitxer** es mou a l'arrel del magatzem. El **text** obre el camp a l'arrel, per anomenar la nota en què s'ha de convertir |
| Un **nom de carpeta** | Selecciona aquella carpeta per editar-la, amb el contingut del seu pare llistat a sota | Torna a escriure aquella carpeta i tot el que hi ha a sota | Obre aquella carpeta en una pestanya nova | El menú contextual d'aquella carpeta — el mateix del Sistema d'arxius | Un **fitxer** es mou a dins d'aquella carpeta. El **text** obre el camp allà, per anomenar la nota en què s'ha de convertir |
| Un **separador** | Obre la carpeta anterior — la seva nota de carpeta si hi ha un connector de notes de carpeta en funcionament i n'hi ha una, altrament la mostra i l'expandeix al Sistema d'arxius | **Crea la nota d'aquella carpeta** i hi va, si hi ha un connector de notes de carpeta en funcionament i la carpeta encara no en té cap. Si ja en té una, això és només la mateixa pulsació única un altre cop | La nota de carpeta en una pestanya nova si n'hi ha una; altrament una pestanya situada en aquella carpeta amb la llista mostrada | El mateix menú contextual de carpeta que dona el nom — el de la seva nota de carpeta, si en té una | Al final de la nota d'aquella carpeta, si en té una, un cop confirmeu |
| El **nom de la nota** | Obre el nom per editar-lo — les carpetes queden com a fitxes al costat — amb tot menys l'extensió marcat | Inclou l'extensió també a la marca | Obre la nota en una pestanya nova | El menú contextual del fitxer — el mateix que dona la fila del Sistema d'arxius | Al final d'aquesta nota, un cop confirmeu |
| L'**espai buit** | Obre el **camí sencer** per editar-lo, marcat fins a l'extensió. Les carpetes entren al camp juntament amb ell, cosa que fa que aquest sigui el gest per tornar a escriure un camí en lloc d'un nom | Inclou l'extensió també a la marca | <kbd>Ctrl</kbd> torna a obrir aquesta nota en una pestanya pròpia, ressaltada al Sistema d'arxius perquè la còpia no es confongui amb la primera. El clic central *no* és aquest gest: enganxa sobre el camí | Marca tot el camí i ofereix el que es pot fer amb text marcat | |

**La segona pulsació segueix la primera.** Crear la nota d'una carpeta se situa a la part de la fila que *obre* aquella carpeta, que és el separador per defecte i el nom de la carpeta amb l'intercanvi desactivat — el mateix objectiu que marca el subratllat, i el mateix que una sola pulsació ja demana per a la nota de carpeta. Només s'ofereix mentre hi ha un connector de notes de carpeta en funcionament, perquè una nota de carpeta és una convenció i no un fet sobre el sistema de fitxers, i només si la carpeta encara no en té cap. On viu i com es diu es llegeix de la pròpia configuració de **Folder notes**, així que un magatzem que guarda les seves notes de carpeta al costat de la carpeta, o les anomena `_index`, en rep una d'aquestes; el fitxer en si sempre és Markdown, que és el que fa l'ordre de creació per defecte pròpia d'aquell connector i el que troba sigui quin sigui el tipus configurat al magatzem. El mode canvi de nom/moviment en queda totalment al marge — res a la fila obre una carpeta mentre hi ha un moviment pendent.

**Els clics sobre el nom continuen avançant.** Els quatre esglaons són els mateixos quatre pels quals passa la tecla de canvi de nom, en el mateix ordre: el nom, el nom amb l'extensió, el camí des del magatzem, el camí des de l'arrel del sistema. Així que un tercer clic arriba al camí del magatzem i un quart al de la màquina — les mateixes quatre coses que us dona <kbd>Tab</kbd> passat el final del camp, i les mateixes quatre que el botó dret *copia* en lloc de seleccionar.

**Passar el ratolí per sobre** és una resposta pròpia i mai canvia res: un nom escurçat torna a mostrar-se sencer mentre l'apunteu, i la icona a l'inici de la fila diu on viu el magatzem.

## Clic dret: una pulsació, dues pulsacions, tres

Tot objectiu de la fila respon a un clic dret, i quantes pulsacions li doneu decideix què obteniu. Com que encara podria venir una segona pulsació, la primera espera aproximadament un terç de segon abans d'actuar — el cost de posar tres gestos en un sol botó.

| On premeu | Un cop | Dos cops | Tres cops |
| --- | --- | --- | --- |
| El **nom del magatzem** | El menú contextual del magatzem: el que es pot fer al magatzem que anomena aquell segment — incloent-hi *Obre aquest magatzem*, si aquell magatzem no és aquell en què esteu | Copia el nom del magatzem | Copia on és el magatzem — i una quarta pulsació, on és el fitxer obert |
| Un **separador** | El menú d'aquella carpeta — el de la seva nota de carpeta, si hi ha un connector de notes de carpeta en funcionament i la carpeta en té una | | |
| Un **nom de carpeta** | El menú d'aquella carpeta | Copia el nom de la carpeta | El copia juntament amb tot el que hi ha a la seva dreta |
| El **nom de la nota** | El menú del fitxer — el mateix que dona la fila del Sistema d'arxius | Copia el nom | El copia amb la seva extensió |
| L'**espai buit** | | Copia el camí des de la carpeta del vostre magatzem, sense l'extensió | El mateix, amb ella |

Una sola pulsació sobre el **nom del magatzem** obre el que es pot fer amb allò que anomena aquell segment. Per al **magatzem en què esteu**: obrir-lo en una finestra nova, gestionar magatzems, copiar on viu, copiar el seu ID, mostrar-lo al vostre gestor de fitxers. Per a **un altre magatzem**, arribat a través del desplegable d'ubicacions, el mateix menys la finestra nova — que obriria *aquest* magatzem, no aquell — més l'única cosa que només un magatzem en què no esteu pot oferir: **Obre aquest magatzem**. S'anomena a Obsidian pel seu ID en lloc de pel nom de la seva carpeta, ja que dos magatzems poden compartir-ne un. Per a un lloc que no és un magatzem en absolut — la vostra carpeta d'inici, una unitat muntada — no hi ha cap ID a copiar ni res a obrir, i el menú ho diu no oferint-los.

Això no és el propi menú de tres punts d'Obsidian, que pertany a la finestra d'inici i no es pot obrir des de dins d'un magatzem en funcionament — aquestes són les mateixes entrades reconstruïdes, amb el redactat propi d'Obsidian, extretes de les seves ordres perquè arribin en el vostre idioma. Tres entrades d'aquell menú deliberadament **no** hi són: *canvia el nom del magatzem*, *mou el magatzem* i *elimina de la llista* actuen totes sobre la pròpia carpeta del magatzem o sobre el registre de magatzems d'Obsidian, i fer això al magatzem en què esteu — amb els seus fitxers oberts i els seus vigilants en funcionament — és com es trenca un magatzem. Obriu el gestor de magatzems (*Obre un altre magatzem*) i feu-ho allà, on el magatzem està tancat.

Les dues còpies sobre l'**espai buit** són la fila tal com està escrita — el que vol un enllaç o una cerca — i les del **nom del magatzem** són els camins que coneix el sistema de fitxers, que és el que vol qualsevol cosa fora d'Obsidian. Cada pulsació allà amplia per a què serveix la còpia: dues donen el nom del magatzem, tres on és el magatzem, quatre on és el fitxer obert. Obsidian fa la mateixa distinció en les seves dues pròpies ordres, *des de la carpeta del magatzem* i *des de l'arrel del sistema*; aquí les que miren cap enfora se situen sobre el segment que en si mateix és fora del camí.

Tot això també funciona fora del magatzem, sobre els mateixos objectius.

Cada còpia ho diu en una notificació, perquè una còpia no deixa res a la pantalla per mostrar que ha passat, i una pulsació mal comptada no hauria de semblar-ne una de reeixida.

## Modificadors: obrir-ho en un altre lloc

El nom de la nota i els segments de carpeta es comporten com les seves files al Sistema d'arxius.

| | Sobre el nom de la nota | Sobre un segment de carpeta |
| --- | --- | --- |
| Clic simple | Edita el nom | Navega per aquella carpeta |
| <kbd>Ctrl</kbd> / clic central | Obre la nota en una pestanya nova | Envia la carpeta a una pestanya nova |
| <kbd>Ctrl</kbd>+<kbd>Alt</kbd> | Una divisió | Una divisió |
| Arrossegar | La nota, a qualsevol lloc on Obsidian accepti un fitxer | La carpeta, igualment — inclosa la barra de pestanyes |

Una carpeta no és res que Obsidian pugui obrir, així que enviar-ne una a una pestanya fa una de dues coses: obre la seva nota de carpeta, si hi ha un connector de notes de carpeta en funcionament i n'hi ha una, o obre una pestanya buida la barra de camí de la qual ja se situa en aquella carpeta — deixant-vos només el nom per escriure. Deixar anar un segment de carpeta sobre la **barra de pestanyes** fa el mateix, en una pestanya nova on deixeu anar — la barra de pestanyes d'Obsidian només accepta fitxers pel seu compte, així que una carpeta arrossegada fora del Sistema d'arxius encara hi és rebutjada.

## Tab: completa el nom, després el camí, després amplia la selecció

<kbd>Tab</kbd> completa com ho fa una shell: **una pulsació allarga el que has escrit fins on coincideixen els noms d'aquella carpeta, i s'atura on discrepen.** Escriu `Sk` on només `Sketches` comença així i la paraula queda acabada; escriu `Al` on `Alpha-one`, `Alpha-two` i `Alpine` hi comencen tots tres i obtens `Alp`, perquè el següent caràcter és una pregunta que només tu pots respondre.

Prem-lo de nou sense escriure i avança cap a un nom concret — la fila que el desplegable ha ressaltat, o la primera — aturant-se en la següent ambigüitat d'aquell nom: `Alpha-`, després `Alpha-one`. La llista s'obre allà on ja ets, així que dins la teva pròpia carpeta la primera pulsació apunta cap a la nota que tens oberta en comptes de la que ordena primer.

**Una pulsació mai no tria entre noms per tu.** <kbd>Tab</kbd> entra en una carpeta un cop el que has escrit deixa un únic candidat, o un cop has escrit tot el nom de la carpeta i cap *altra carpeta* l'allarga. On sí que n'hi ha una — `Schemes` al costat de `Schemes2026` — <kbd>Tab</kbd> continua completant cap al nom més llarg; <kbd>Enter</kbd> i el desplegable són els gestos que volen dir *aquest en concret*.

Un **fitxer** mai no atura una carpeta d'aquesta manera. Una carpeta al costat d'una nota amb el seu mateix nom és una nota de carpeta, no una bifurcació del camí, i <kbd>Tab</kbd> avança per carpetes — així que `Projects` amb un `Projects.md` al costat s'hi entra com a qualsevol altra.

Dues coses més petites que se'n deriven: el que acaba al camp s'escriu tal com l'escriu la carpeta, així que `sk` esdevé `Sketches`; i només se substitueix el nom que s'està escrivint, així que un camí amb més coses a la dreta les manté.

Amb un nom oferit mentre escrius, <kbd>Tab</kbd> **escriu exactament l'oferta**: l'oferta és sempre el que la pulsació escriuria, i el subratllat i la línia verda del desplegable diuen el mateix, així que el que veus després del cursor és el que obtens. On els noms deixen de coincidir, això és el pas cap al primer d'ells — o cap a la fila a la qual has anat amb les fletxes, que <kbd>Tab</kbd> pren en comptes de la del costat — així que utilitza les fletxes fins al que vulguis, o escriu més enllà de la bifurcació, abans de prémer. Només on l'oferta deixa *un* únic nom, la mateixa pulsació hi entra.

Arribar al nom del fitxer **és** el primer graó — cap pulsació es gasta a deixar el cursor al final d'un nom que està a punt de marcar. A partir d'aquí, les pulsacions deixen d'avançar pel camí i comencen a ampliar el que hi ha seleccionat:

1. el nom
2. el nom amb la seva extensió
3. el camí des de la teva carpeta del cofre
4. el camí des de l'arrel del sistema
5. de tornada al principi del camí **tal com queda ara** — situat on va començar la caminada, amb el primer segment marcat, a punt per tornar-lo a caminar

Un quart clic arriba directament a aquest mateix quart graó.

Ampliar només **amplia**. Un nom que ja és sencer al camp — completat amb la mateixa tecla, o triat del desplegable — es marca sencer en comptes que primer se li retiri l'extensió: el primer graó és per a un nom al qual la caminada just ha *arribat*, on l'extensió encara no és el tema.

L'escala és on la caminada **arriba**, no on comença. Clica una carpeta al mig d'un camí i el camp s'obre amb tot el que hi ha per sota amb el nom d'aquesta carpeta marcat; cada <kbd>Tab</kbd> avança llavors **una** carpeta — marcant la següent, mantenint la resta del camí al darrere — i només un cop no queda res més que el nom del fitxer comença l'ampliació:

| pulsació | fitxes | camp | marcat |
| --- | --- | --- | --- |
| clic a `a` | | `a/b/c/leaf.md` | `a` |
| <kbd>Tab</kbd> | `a` | `b/c/leaf.md` | `b` |
| <kbd>Tab</kbd> | `a › b` | `c/leaf.md` | `c` |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf` — el primer graó |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf.md` |

**Un nom que queda fixat queda fixat, sigui com sigui que el fixis.** Completar-lo amb
<kbd>Tab</kbd>, confirmar-lo amb `/`, i triar-lo del desplegable
deixen tots la fila al mateix lloc amb el mateix camí, així que la pulsació després del
gest vol dir el mateix sigui quin sigui el camí que has fet. Triar una carpeta de la
llista abans buidava el camp, llençant un camí que arribar a
la mateixa carpeta amb <kbd>Tab</kbd> hauria mantingut.

**Un camí que encara estàs escrivint t'acompanya sencer.** Entrar a la mateixa carpeta de la qual penja la resta del camí no és una afirmació de que la resta existeixi — és així com un camí s'escriu per endavant, i les carpetes que anomena són les que <kbd>Enter</kbd> està a punt de crear. Així, avançar per `Dokumente/plans/untitled.md` cap a `Dokumente` manté `plans/untitled.md` al davant teu, tant si `plans` ja hi és com si no. El mateix val per a un camí que has escrit de zero: res d'ell s'ha heretat de cap lloc, així que res se n'hi treu.

**Canviar un pas per un altre és una altra història, i llavors el camí t'acompanya només fins on realment hi és.** Canvia una carpeta al mig d'un camí per un germà — clica `a`, escriu un altre nom, prem <kbd>Tab</kbd> — i tot el que hi ha per sota et segueix, perquè el camí en què eres és normalment la major part del camí que vols. Només el que existeix allà sobreviu al canvi, però, així que el camp i el desplegable del costat mai discrepen: el que queda al davant teu és un camí que realment pots recórrer. Començant per `a/b/c/leaf.md`, amb `a` clicat i el seu nom marcat:

| el que fixes | fitxes | camp | marcat |
| --- | --- | --- | --- |
| `x`, que no té cap `b` | `x` | | no ha vingut res amb ell |
| `y`, que té un `b` però cap `c` a dins | `y` | `b` | `b` |
| `z`, un bessó de `a` fins al final | `z` | `b/c/leaf.md` | `b` |

Una carpeta que queda sola d'aquesta manera continua sent una carpeta on entrar: la pulsació d'després hi entra, en comptes de començar a ampliar una selecció sobre el seu nom.

Un nom que **res** de la carpeta coincideix es respon de manera diferent, perquè no s'hi ha fixat res: la pulsació marca el que has escrit, a punt per a que hi escriguis a sobre, en comptes de respondre amb algun altre lloc.

Tot el conjunt és un **bucle, i costa res fer-hi la volta**: la pulsació després de l'últim graó torna la fila al principi del camí, carpetes i tot, a punt per fer-hi la volta un altre cop. L'única cosa que mai desapareix de la fila és el prefix absolut, en la pulsació que deixa de mostrar-lo.

El que torna és **el camí que has construït**, no el del qual vas partir. Bifurca la caminada a mig camí — tria un altre germà del desplegable, completa cap a un altre nom — i la volta es tanca on realment ets; els quatre graons anteriors descriuen aquest mateix camí, i aquest era abans el graó estrany que descrivia el passat.

<kbd>Shift</kbd>+<kbd>Tab</kbd> tanca el mateix anell a l'inrevés: al principi del camí, sense res més a tornar i sense res més amunt, la pulsació següent salta al graó **més llunyà** — el camí des de l'arrel del sistema — i continua estrenyent des d'allà. Cap de les dues direccions arriba a un carreró sense sortida.

Tampoc gasta cap pulsació en un graó que ja ha mostrat. Per sota de l'últim graó — el nom sense la seva extensió — l'escala s'acaba, i *la mateixa pulsació* surt de la carpeta: el camí des de l'arrel del sistema, el camí des del teu cofre, el nom, el nom sense la seva extensió, després la carpeta, un pas cada cop.

Tampoc es gasta cap pulsació en un graó que no canvia res: clicar el nom d'una nota ja el mostra sense la seva extensió, que és el que mostra el primer graó, així que a partir d'allà <kbd>Tab</kbd> comença pel segon.

Cada graó canvia el que hi ha *al* camp, no només el que està ressaltat — una selecció ha de recaure sobre el text que anomena, o <kbd>Enter</kbd> confirmaria una altra cosa que la que veus seleccionada. L'escala pertany a una sola sessió d'edició: clica fora, o escriu qualsevol cosa, i el següent <kbd>Tab</kbd> torna a completar un nom.

### <kbd>Shift</kbd>+<kbd>Tab</kbd>: el mateix camí a l'inrevés

<kbd>Shift</kbd>+<kbd>Tab</kbd> desfà un pas per pulsació, en l'ordre en què s'han fet les pulsacions: la selecció s'estreny un graó cada cop, cada finalització es retorna, i se surt de cada carpeta — el seu nom torna al camp per a que el puguis editar en comptes de tornar-lo a escriure.

**No s'esborra res pel camí de tornada.** Una finalització es retorna *marcant* els caràcters que va afegir, exactament com anar endavant marca el que ha ampliat sobre — el nom continua al davant teu, i cada pulsació addicional en marca un pas més:

| | camp | marcat |
| --- | --- | --- |
| ja caminat | `Alpha-one` | |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `ha-one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `Alpha-one` |

Escriure substitueix la part marcada, com a qualsevol altre lloc. <kbd>Tab</kbd> torna a posar exactament el que la marca havia retornat, així que fer dos passos enrere i dos passos endavant altre cop et torna on eres.

Un cop tot el nom està marcat no queda res que una pulsació hi hagi posat, i la pulsació següent va *amunt pel camí*: surt de la carpeta on estàs situat, exactament com fa <kbd>Backspace</kbd> en un camp buit. Això tampoc costa res — el nom de la carpeta torna al camp **al davant** de tot el que hi hagués, marcat, que és el mateix text que et donaria clicar aquella carpeta. Enrere és una direcció més que un historial de desfer — però marcar el nom primer fa que una pulsació mai desfaci el que has escrit i alhora et faci sortir de la carpeta on l'has escrit.

Un text que s'obre **ja seleccionat** — el que deixa un clic en una carpeta — és el nom sobre el qual <kbd>Tab</kbd> actua a continuació: es completa i s'hi entra com qualsevol altre, i escriure el substitueix. Només l'ordre d'enfocament s'obre en un graó de l'escala mateixa, perquè està mostrant-te el camí sencer en comptes d'una carpeta on caminar.

## Escriure una cosa que no és un camí

| Què escrius | Què passa |
| --- | --- |
| `https://…` | S'obre en una pestanya nova al **Visor web** d'Obsidian, si tens aquest connector principal activat; en el teu navegador d'escriptori si no |
| `obsidian://…` | Es passa al gestor d'URI propi d'Obsidian |
| `file:///…` | Es descodifica i s'obre: com a nota real si és dins el teu cofre, al visor si no |
| `/home/tu/a%20b.md` | El mateix, per a un camí enganxat des d'un navegador o gestor de fitxers |

Només compten els esquemes explícits — una nota anomenada `100%20` continua sent una nota. Una `/` que pertany a un esquema es manté literal en comptes de baixar a una carpeta, així que un URL es pot escriure a mà i no només enganxar.

## Una ordre per al teclat

**Enfoca la barra de camí** obre el camp amb el nom de la nota i hi avança de la mateixa manera que fa <kbd>F2</kbd> — el nom, el nom amb la seva extensió, el camí des del teu cofre, el camí des de l'arrel del sistema — i la pulsació d'després tanca el camp i torna el cursor a la nota. No reanomena: <kbd>Enter</kbd> navega, com a qualsevol altre camp. No té cap tecla pròpia de sortida de fàbrica, perquè les directrius d'Obsidian desanimen els connectors a reclamar-ne una; la fila **Dreceres de teclat** al final de la configuració d'aquest connector obre *Configuració → Dreceres de teclat* mostrant només les seves ordres, així que la pots vincular des d'allà.

## La navegació mai no toca el fitxer obert

En el mode predeterminat (navegació), la nota oberta **mai** no es reanomena ni es mou.

- Un camí que correspon a un fitxer existent l'obre.
- Un camí que encara no existeix simplement es crea, junt amb qualsevol carpeta pare que falti, i s'obre. Cada fitxer i carpeta creats d'aquesta manera ho diuen en un avís — una carpeta nova és, si no, invisible fins que la busques — i la paperera pròpia d'Obsidian fa que una que no volies es pugui desfer amb una sola tecla.
- **Fora del teu cofre, encara pregunta primer.** Allà fora, el mateix error de tecleig escriu dins una carpeta del sistema, on ni l'avís ni la paperera d'Obsidian són gaire consol.

## <kbd>Ctrl</kbd> — pestanya nova, i copiar en comptes de moure

Una nota **creada, moguda o copiada dins el cofre es mostra allà on ha anat a parar** a l'Explorador de fitxers, marcada un moment amb el color d'accent d'Obsidian — l'arbre és on la busques després, així que se't posa al davant en comptes de deixar-la en una carpeta que potser ni tan sols està oberta. Duplicar també ho diu: una còpia deixa l'original on estava i obre la còpia en el seu propi panell, cosa que sense cap paraula és fàcil de llegir com si no hagués passat res.

Mantenir <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> al macOS) mentre tries un fitxer del desplegable, o mentre prems <kbd>Enter</kbd> sobre un camí, envia el resultat a una **pestanya nova** en comptes d'aquesta:

| | Sense res | Amb <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Triar o escriure un fitxer existent | S'obre aquí | S'obre en una pestanya nova |
| Escriure un camí que no existeix | Pregunta i després obre aquí | Pregunta i després obre en una pestanya nova |
| Confirmar un camí en mode canvi de nom/moviment | **Mou** la nota allà | La **copia** allà i obre la còpia en una pestanya nova |

El modificador es llegeix amb la regla del mateix Obsidian, de manera que es comporta exactament com sobre un enllaç o una fila de l'Explorador de fitxers — el clic central també vol dir «pestanya nova», <kbd>Ctrl</kbd>+<kbd>Alt</kbd> vol dir una divisió i <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> una finestra nova.

Copiar es nega a sobreescriure, exactament com moure — inclús sobre el propi camí de la nota, on no hi ha res sensat a copiar. Fora del cofre, aquesta negativa també es diu en veu alta.

Tot això funciona **amb el desplegable obert** igual que sense: sobre una fila ressaltada el modificador s'aplica a aquella fila, i sense res seleccionat s'aplica al que has escrit.

## Navegar fora del cofre

**Això està desactivat per defecte.** Activa primer **Accés a fitxers externs** a la configuració — llegir i escriure fora del cofre és l'única cosa que fa aquest connector i que l'Obsidian mateix no fa, de manera que és una cosa a la qual t'hi apuntes en comptes de desapuntar-t'hi. Amb això desactivat, el nom del cofre simplement revela el teu cofre a l'Explorador de fitxers, i res d'aquí no mira mai més enllà.

Clicar el **nom del cofre** (o la icona 🏠, quan *Mostra el nom del magatzem* està desactivat) obre un desplegable de llocs en comptes de continguts. El camp que obre conté **tot el camí on eres, escrit sencer**, amb el lloc on comença seleccionat — així que triar-ne un altre, o escriure a sobre de la selecció, canvia només aquesta part inicial i deixa la resta del camí davant teu. **Prem el nom una segona vegada** — un doble clic — i la marca s'eixampla sobre tot el conjunt, que és com es pren el camí absolut en un sol gest en comptes de recórrer-lo a mà. Canvia d'opinió i <kbd>Esc</kbd> torna la fila a com era.

Escriure aquí ofereix la resta del nom d'un lloc com a qualsevol altre lloc, i <kbd>Tab</kbd> **fixa aquell lloc** — el que estàs assenyalant, o el que el nom només pot voler dir. Quan diversos llocs encara comparteixen el que has escrit, la premuda s'atura a la bifurcació, com passa a tot arreu. Assenyalar un lloc mostra **el propi camí d'aquell lloc**, tot seleccionat, seguit del camí de la teva nota només fins allà on de debò arriba en aquell lloc — que és exactament on aterraries si el triessis. Un lloc no és un pas dins del camí a la pantalla sinó un punt des d'on comptar tot el camí, així que res d'on eres es queda davant seu.

Els llocs que s'ofereixen:

- **Els teus altres cofres**, llegits del registre del mateix Obsidian, els oberts més recentment primer, cadascun sota la icona de cofre del mateix Obsidian — la que l'aplicació fa servir per a les seves ordres de cofre. El cofre que ja tens obert rep una casa: és d'on arrenca la fila per defecte, no un lloc on anar.
- **La carpeta personal**, sota el seu propi nom de compte, marcada amb un `~`. Lucide no té titlla, així que aquesta la dibuixa el connector sobre la mateixa graella de 24×24 de Lucide i amb el mateix traç — una icona que falta al conjunt més que no pas un caràcter de text assegut entre icones.
- **L'arrel del sistema de fitxers**, etiquetada `root` — sense traduir, perquè aquest és el seu nom a tots els sistemes — en comptes de `/`, que es llegiria com un pas buit al costat del separador que la segueix.
- **Les unitats muntades**, amb una icona per tipus allà on és barat determinar-lo: els recursos compartits de xarxa, els discs òptics, els disquets i els suports extraïbles tenen la seva; tota la resta rep una unitat genèrica. Al Windows les unitats es mostren com a `C:` amb una icona genèrica — els noms de volum i els tipus precisos necessiten WMI, cosa que deliberadament no es fa.

Triar un altre cofre **no fa que l'Obsidian hi canviï.** Tot el que tens obert continua obert; la barra de camí simplement comença a navegar allà. Aquest és tot el sentit de tenir-ho a la barra de camí en comptes de delegar-ho al commutador de cofres de la barra lateral.

També aterra **tan a prop de la nota on eres com aquell lloc de debò arriba**.

- Si el lloc que has triat *conté* la nota — la carpeta personal, o allà on viuen els teus cofres — obtens el seu camí des d'allà: tria `~` amb `takeaways.md` obert i el camp diu `Vaults/el-teu-cofre/takeaways.md`.
- Si és un lloc al costat d'aquest — un altre cofre, una altra unitat — es prova el mateix camí relatiu, tan endins com de debò existeixi. Els cofres sovint són gairebé còpies l'un de l'altre, i el motiu per saltar a un és normalment la mateixa nota allà.

En qualsevol dels dos casos la fila es queda al lloc que has triat i **la primera carpeta d'aquell camí s'obre seleccionada**, la mateixa forma que dona clicar una carpeta: el pas que és més probable que canviïs quan saltes a un altre lloc és el més proper a dalt, i la resta del camí es queda visible mentre el canvies. Mai no s'ompli res prèviament que de debò no sigui al disc.

### Mentre ets fora

El camí **comença al lloc que has triat**, no a la disposició de directoris de la màquina — i el mateix val per al camp que obtens clicant l'espai buit o prement la tecla de focus: conté el camí des d'aquell lloc, no l'absolut de la màquina, amb el rastre col·lapsat fins al lloc mateix exactament com es col·lapsa fins a l'arrel del cofre a dins — tria `Archive` i la fila diu `Archive / notes / …`, no `/home/tu/Vaults/Archive/notes/…`. El segment inicial porta una icona per al que és (cofre, carpeta personal, unitat), i <kbd>Backspace</kbd> s'atura allà en comptes de continuar cap amunt cap a la resta del sistema de fitxers. Amb *Mostra el nom del magatzem* desactivat, aquell segment és només la icona — la configuració fa referència al segment inicial de la fila sigui quin sigui el cofre que anomena, no només el teu.

La barra de camí queda **emmarcada amb el color d'error** — el mateix anell que dibuixa el mode canvi de nom — mentre apunta fora del teu cofre. Marca una condició permanent, no un moment: mentre hi sigui, cap de les maneres de fer del mateix Obsidian no s'aplica al que mostra la fila, i l'escriptura queda bloquejada fins que tu diguis el contrari.

Per la resta, navegar funciona igual que a dins: fitxes, separadors, escriptura, autocompletat, <kbd>Backspace</kbd> per sortir. També s'hi apliquen les mateixes regles de visibilitat, així que les extensions no admeses continuen necessitant *Detectar totes les extensions de fitxers* de l'Obsidian i els fitxers ocults continuen necessitant la configuració d'aquest connector.

**El clic dret també funciona allà fora**, tot i que és un menú diferent: els propis controladors de l'Explorador de fitxers necessiten un fitxer que el cofre conegui, així que les entrades de fora es construeixen a partir del camí. Ofereixen obrir (aquí, a la dreta, en una finestra nova, o en l'aplicació predeterminada del teu escriptori), *Copia el camí*, *Mostra a l'explorador del sistema* i — un cop el cadenat és obert — *Nota nova*, *Carpeta nova*, *Fes una còpia*, *Reanomena…* i *Suprimeix*. **Arrossegar** encara necessita un fitxer del cofre i continua no disponible.

El mateix menú és al fitxer obert al visor, per clic dret o des dels tres punts del propi plafó, i pregunta al cadenat de la capçalera d'aquella vista. No pregunta res més: si el fitxer es renderitza o es mostra com a font no té cap incidència sobre si es pot suprimir, i una imatge o un PDF — que no té cap vista de font — és tan suprimible com una nota. *Suprimeix* vol dir la paperera del sistema, així que es pot desfer des d'allà; un sistema sense paperera ho informa en comptes de destruir el fitxer.

Suprimir fora del cofre mou el fitxer a la teva **paperera del sistema** — la Paperera de reciclatge al Windows, la Paperera al macOS — mai un simple desenllaçament. Aquí fora no hi ha cap paperera de l'Obsidian des d'on recuperar-lo, així que una supressió que no es podria desfer no s'ofereix gens: allà on una plataforma no té paperera, l'intent en informa el fracàs en comptes de destruir el fitxer.

### Escriure fora del cofre

Tot el que escriu està **bloquejat per defecte**. Mentre la fila apunti fora del teu cofre, el lloc del commutador de canvi de nom a la capçalera l'ocupa un **cadenat vermell** — el mateix color que l'anell al voltant de la fila, i pel mateix motiu: marca un rebuig. Els dos són un sol control en un sol espai, així que mai no hi ha dubte de quin dels dos controla què.

Tres premudes, en un cicle:

| Premuda | Què obtens |
| --- | --- |
| El cadenat vermell | S'hi permet escriure. El cadenat és substituït pel commutador de canvi de nom/moviment |
| El commutador | Mode canvi de nom/moviment, exactament com dins del cofre |
| El commutador de nou | El mode acaba i el cadenat es torna a tancar — el permís no sobreviu a allò per al qual es va obrir |

**La tecla de canvi de nom també pregunta al cadenat.** Fora del teu cofre, prémer-la fa parpellejar el cadenat entre obert i tancat en comptes d'obrir un mode que qualsevol confirmació rebutjaria: el rebuig arriba abans de la feina i no pas després. Prem el cadenat, o torna a prémer la tecla de canvi de nom dins de mig segon — la segona premuda concedeix exactament el que concedeix el botó, per a aquest lloc, i amb això obre el mode canvi de nom.

Dins del teu cofre no hi ha cadenat: no hi ha res a desbloquejar, i el commutador simplement ocupa l'espai.

El permís es concedeix **a un lloc, no a un moment**: sobreviu a tot el que faries mentre treballes en un lloc — acabar un moviment, clicar fora del camp, obrir un fitxer — i acaba quan tries un altre cofre, unitat o arrel al desplegable, quan la fila torna a un fitxer del cofre, o en aquesta tercera premuda. Així que una tirada de moviments dins d'una mateixa carpeta necessita una premuda, no una per fitxer.

Amb el cadenat obert, la barra de camí es comporta allà fora com ho fa a dins:

| Gest | Resultat |
| --- | --- |
| Escriure un nom que no existeix, <kbd>Enter</kbd> | La mateixa pregunta «voleu crear-lo?» que a dins; també es creen les carpetes pare que faltin. Un nom sense extensió es converteix en un `.md`, exactament com a dins |
| Mode canvi de nom/moviment, escriure un nom nou | Reanomena el fitxer que mostra la fila. Un nom sense extensió conserva la del fitxer — aquí fora una carpeta conté fitxers de tota mena, i un canvi de nom no hauria de convertir en silenci un `.png` en un `.md` |
| Mode canvi de nom/moviment, navegar a un altre lloc, triar **conserva aquest nom** | El mou allà amb el nom que ja té |
| Mantenir <kbd>Ctrl</kbd> en qualsevol dels dos | Copia en comptes de moure, i obre la còpia en una pestanya nova |

Bloquejats, tots aquests informen del que els frena en comptes de passar. No se sobreescriu mai res en cap dels dos estats: una destinació que ja existeix és rebutjada, i el rebuig és el del mateix sistema de fitxers (`COPYFILE_EXCL`, una creació exclusiva) i no pas una comprovació que podria perdre una cursa. Un moviment entre sistemes de fitxers — des d'un llapis USB, des d'un recurs compartit de xarxa — recorre a copiar i després esborrar, i l'original només se suprimeix un cop la còpia ha arribat.

**Moure una nota *fora* del teu cofre pregunta primer.** El `fileManager` no pot seguir un fitxer a través d'aquest límit: tots els enllaços que apunten a la nota deixen de resoldre's, res no els actualitza, i la nota surt de l'índex del cofre. Així que el moviment s'ofereix com una decisió en comptes de rebutjar-se o fer-se en silenci — un diàleg indica què costa i quantes notes enllacen amb la que estàs movent. Confirma i realment es mou: es copia a fora, i després se suprimeix del cofre mitjançant la pròpia supressió de l'Obsidian, així que és recuperable exactament com ho és una nota suprimida, i un fracàs a qualsevol dels dos passos deixa la nota on era. Mantenir <kbd>Ctrl</kbd> encara la copia a fora en comptes, cosa que no té cap d'aquests problemes. Anar en la direcció contrària — portar un fitxer extern *cap dins* del cofre — encara no està implementat.

### Obrir un fitxer extern

Navegar pel sistema de fitxers pot tornar **cap dins del cofre que tens obert** — des de l'arrel, des de la carpeta personal, des d'on visquin els teus cofres. Un fitxer al qual s'arriba així és una nota ordinària, així que s'obre com a tal: l'editor de debò, enllaços i retroenllaços, i la fila torna de cop a la barra de camí arrelada al cofre. Només els fitxers per als quals l'Obsidian no té cap vista es queden a la previsualització, ja que allà fora la previsualització és la millor resposta. Allà on una previsualització mostra igualment aquesta mena de nota — un espai de treball reobert, per exemple — la seva línia superior ofereix **Obre a *(cofre)***, que és la mateixa oferta que faries a mà.

L'editor de l'Obsidian només funciona amb fitxers de dins del cofre, de manera que un fitxer extern **no es pot** obrir com una nota de debò amb enllaços, retroenllaços i la resta — és un límit de l'aplicació, no d'aquest connector. Triar-ne un obre una **previsualització**, de només lectura fins que tu diguis el contrari:

| Tipus | Es mostra com a |
| --- | --- |
| `.md`, `.markdown` | Markdown renderitzat |
| `.html`, `.htm`, `.xhtml` | La pàgina renderitzada |
| Imatges, àudio, vídeo, PDF | Reproductor/visor natiu |
| Qualsevol altre fitxer de **text** (`.json`, `.css`, `.log`, `.txt`, …) | Text pla literal |
| Formats binaris sense visor (`.zip`, `.exe`, …) | Cedit a *Obre amb l'aplicació predeterminada* |

El visor té dues lectures d'un fitxer i, com que s'exclouen mútuament, només es mostra aquella a la qual **canviaries**:

| | Què fa | Per defecte per a |
| --- | --- | --- |
| **Mostra com a Markdown** | Renderitza el fitxer com una nota, només lectura | `.md`, `.markdown` |
| **Mostra com a pàgina** | Renderitza el fitxer com la pàgina que és, només lectura | `.html`, `.htm`, `.xhtml` |
| **Edita com a text** | La font, editable | tota la resta |

Fora del cofre, **Edita com a text** és també la premuda que aixeca el només lectura — el mode i el permís són un sol gest en comptes de dos botons sobre els quals rumiar. Va tenyit de vermell **sempre que prémer-lo aixecaria el només lectura**, tant si estàs armant l'edició allà mateix com si véns directament de la vista renderitzada; dins del cofre no hi ha res per desbloquejar, així que es queda net. **Mostra com a Markdown** rep un bany d'accent suau — el mateix to que l'Obsidian dona al text seleccionat — que el marca com el camí de tornada i no pas com una crida a l'acció.

Com que el botó segueix l'*edició* i no el mode cru, un fitxer que està en només lectura a la vista de text encara ofereix **Edita com a text**: és la premuda que l'arma. Un fitxer en què no es podrà escriure mai — truncat, o il·legible — diu **Mostra com a text**, perquè és tot el que la premuda pot oferir.

Els valors per defecte van en el sentit útil i no pas en el literal: una `#` en un script de shell és un comentari, no un encapçalament, de manera que renderitzar un `.log` com a Markdown se'l cruspiria en silenci. Tots dos valors per defecte es poden sobreescriure per fitxer, i la tria entra a l'historial de la fulla, així que endavant/enrere i un espai de treball reobert la conserven — hi ha moltes notes que viuen en fitxers `.txt`, i molts fitxers `.md` són més fàcils de llegir com a font.

#### Què li permet fer una pàgina HTML

Res. La pàgina es mostra en un marc amb **tots els permisos denegats** — cap script, cap formulari, cap navegació, cap origen propi — i una política de contingut que no li permet cap xarxa. Això no és precaució per la mera precaució: una pàgina local carregada de la manera habitual compartiria l'origen d'aquesta finestra, i aquesta finestra és l'Obsidian, així que un script en un fitxer HTML descarregat s'executaria dins de la teva aplicació amb l'abast de la teva aplicació.

El que això costa és qualsevol cosa que la pàgina *faci*; el que conserva és tot el que la pàgina *és*. Els fulls d'estil i les imatges que hi ha al costat del fitxer es llegeixen i es porten al marc, així que una pàgina desada continua semblant-se a si mateixa. Les referències que apunten fora de la pròpia carpeta de la pàgina, i les referències a algun lloc de la web, es deixen exactament com estan escrites i simplement no es carreguen — un fitxer local no pot dir en silenci a un servidor que l'has obert.

Els scripts s'**eliminen** en comptes de només bloquejar-se, de manera que la pàgina que veus i la font a la qual pots canviar difereixen d'una manera declarada en comptes de en el que sigui que el marc hagi declinat executar en silenci. Els enllaços dins de la pàgina no fan res. Quan vulguis la cosa de debò — scripts, xarxa i tota la resta — *Obre amb l'aplicació predeterminada* la cedeix al teu navegador, que és l'eina adequada per a això.

**Els fitxers del teu cofre es poden editar de seguida**, sense cap desbloqueig: *Edita com a text* és un editor de debò i escriu a mesura que escrius.

**L'edició es recorda a través del canvi.** Anar a *Mostra com a Markdown* la suspèn — una renderització estàtica no té res on escriure, i la Previsualització en viu necessita l'editor del mateix Obsidian, que només existeix per als fitxers de dins del cofre — així que res no pretén que estiguis editant mentre ets allà. Tornar a *Edita com a text* reprèn on ho havies deixat.

**Els fitxers de fora del cofre s'obren en només lectura, i *Edita com a text* ho aixeca.** La premuda és tota la porta: fins que no passa, no s'escriu res allà fora. Després el fitxer es desa a mesura que escrius, exactament com un del cofre; i la línia d'estat canvia d'un pany a un llapis. El desbloqueig cobreix aquell fitxer en aquella pestanya — navegar a un altre fitxer torna a bloquejar — i deliberadament no es desa a l'historial de la pestanya, de manera que un espai de treball reobert no torna mai amb l'escriptura ja armada sobre un fitxer de sistema que no recordes haver obert.

**Els fitxers truncats es queden en només lectura sigui com sigui** — desar el que hi ha a la pantalla descartaria tot el que hi ha més enllà del límit, així que el botó no s'ofereix gens en comptes d'oferir-se i rebutjar-se. El mateix val per a un fitxer que no s'ha pogut llegir: no hi ha res per escriure-hi de tornada tret d'un plafó buit.

Si l'escriptura falla — un muntatge de només lectura, un fitxer que no és teu — es mostra en un avís el motiu del mateix sistema.

Els fitxers molt grans es mostren truncats, i la línia d'estat ho diu en comptes de deixar que ho descobreixis — al costat de les altres condicions i no pas darrere els botons, ja que és un fet sobre el fitxer com la resta. Els límits es mesuren contra un renderitzador de debò i no s'endevinen — maquetar un megabyte de text en un sol plafó mata directament el procés de renderització de l'Obsidian, i el Markdown costa uns quants cops més per byte que el text pla, així que tots dos tenen límits separats i una sola línia enorme s'escurça fins i tot quan el fitxer sencer és petit.

**Les línies d'estat són etiquetes, i l'explicació és un rètol emergent.** Cada línia diu què és cert amb tan poques paraules com calgui — *Fora del teu cofre*, *Cap editor per a aquest tipus de fitxer*, *Truncat — fitxer massa gran* — perquè els botons del costat ja diuen en quin estat és el fitxer. Passar-hi el cursor per damunt en dona la frase: per què l'Obsidian no el pot obrir com una nota, què passaria altrament amb aquest tipus de fitxer, què et costa el truncament.

Això també val per als fitxers de **dins** del teu cofre. L'Obsidian passa qualsevol extensió per a la qual no té vista directament a l'aplicació predeterminada de l'escriptori — de manera que un `.txt` o un `.json` del teu cofre et trauria de l'Obsidian del tot. Ara aquests s'obren al mateix visor, amb l'anell taronja, ja que «obre'l a l'Obsidian» és el que has demanat — i, com que són fitxers del cofre, allà es poden editar sense cap desbloqueig. Els fitxers binaris sense visor mantenen el comportament de l'Obsidian; no hi ha res a mostrar.

La previsualització s'obre **a la pestanya on eres**, de manera que endavant/enrere et tornen a la nota d'on véns; mantén <kbd>Ctrl</kbd> per a una pestanya nova, com a tot arreu. La barra de capçalera continua mostrant el camí del fitxer extern mentre és obert, així que pots continuar navegant des d'allà.

Una línia discreta damunt del contingut ofereix les sortides:

- **Obre a *(cofre)*** — es mostra quan el fitxer pertany a un dels teus altres cofres. El cedeix al propi gestor d'URI de l'Obsidian, que obre la finestra d'aquell cofre amb la nota a dins, com una nota editable de debò. Aquesta finestra es deixa exactament com era; res no canvia sota teu.
- **Mostra com a Markdown** / **Mostra com a pàgina** / **Edita com a text** — les dues lectures que té aquest fitxer; l'última també aixeca el només lectura fora del cofre.
- **Obre amb l'aplicació predeterminada** — cedeix el fitxer a l'aplicació predeterminada del teu escriptori, incloent-hi els formats binaris que aquest visor no pot mostrar. Redactat exactament com la pròpia entrada de l'Obsidian per a la mateixa acció, perquè és la mateixa acció.

El visor també respon a un **clic dret**: dins de l'editor de text amb *Retalla* / *Copia* / *Enganxa* / *Selecciona-ho tot*, i a qualsevol altre lloc amb el menú propi del fitxer. El menú de tres punts de l'Obsidian a la capçalera també porta aquest menú — fora del cofre, altrament, no oferiria res més que *Divideix a la dreta* i *Divideix a sota*.

No s'escriu res fora del teu cofre si abans no prems *Edita com a text*. Vegeu la secció [Fora del cofre](README.ca.md#fora-del-cofre) del README per a la divulgació completa.

## Deixar anar un fitxer sobre una carpeta del camí

Cada carpeta de la fila és un objectiu de deixada, així que **una nota arrossegada
sobre una carpeta s'hi mou** — el camí més curt hi passa entre una nota i qualsevol
carpeta per sobre seu, ja que la destinació ja és a la pantalla. Arrossega des del
gestor de fitxers, des del desplegable, des del propi nom de la nota a la capçalera,
o des de qualsevol altre lloc d'Obsidian que produeixi un fitxer: és l'arrossegament
propi de l'aplicació, així que l'etiqueta en passar-hi per sobre, el cursor i el
ressaltat són els que dibuixa el gestor de fitxers.

**El nom del cofre també accepta una deixada**, ja que és la carpeta al capdamunt de
la fila — l'únic gest que posa una nota a l'arrel del cofre des d'aquí.

**Es pot arrossegar tota una selecció alhora**, i es mou com un sol bloc: si algun
dels elements no es pogués agafar, la deixada es rebutja en comptes de moure'n
alguns i ometre la resta en silenci.

Els enllaços segueixen la nota, exactament com quan es mou des del gestor de
fitxers o escrivint un camí.

Una carpeta que **no pot acceptar la deixada no ofereix res** — cap etiqueta
*Move into*, cap ressaltat a la carpeta — en comptes d'oferir alguna cosa que
després fallaria; la resposta pròpia d'Obsidian per a la capçalera, *Open in this
tab*, és el que hi apareix en el seu lloc. Tres casos:

- la carpeta on el fitxer **ja és**, ja que ja hi és;
- una carpeta deixada anar **dins d'ella mateixa o dins d'un descendent seu**, ja
  que això la deixaria sense lloc d'on venir;
- una selecció que conté **una carpeta i alguna cosa dins seu**, ja que moure la
  carpeta s'emporta el seu contingut.

Una carpeta que ja té un **fitxer amb el mateix nom** accepta la deixada i pregunta
què fer amb el que hi ha pel mig, amb el mateix diàleg que un nom ja agafat
escrit o triat — vegeu [Un nom que ja existeix](#un-nom-que-ja-existeix). Res aquí
sobreescriu res.

Només les carpetes **dins del teu cofre** accepten deixades. Mentre la fila apunta
fora del cofre, els seus segments declinen, perquè treure una nota del cofre
trenca tots els enllaços que hi apunten — una decisió que val la pena preguntar
en comptes de fer-la amb un gest. La manera de fer-ho deliberadament segueix sent
escriure el camí, que pregunta primer i et diu quantes notes es veurien afectades.

## Deixar anar text o un fitxer per escriure'l

Els mateixos objectius accepten **contingut** a més de fitxers, i es distingeixen
pel que arrossegues, no per on ho deixes anar.

**Sobre una nota que la fila ja anomena** — el propi nom de la nota, o un
separador la carpeta del qual té una nota de carpeta — el que has deixat anar
s'afegeix al final, després d'una línia en blanc. Pregunta primer, perquè això
escriu en un fitxer que ja existeix i un arrossegament és un gest que una mà poc
ferma pot fer sense voler. Funciona amb text d'un editor, un fitxer del teu
escriptori i una nota arrossegada des de fora d'aquest cofre; un fitxer es llegeix
com a text, i un fitxer binari es rebutja en comptes d'enganxar-lo com una
pantalla plena de sense sentit.

**Sobre un lloc — el nom del cofre o una carpeta —** encara no s'escriu res, perquè
encara no s'ha anomenat res. El camp s'obre allà amb el que has deixat anar dins,
i el nom que escrius és el que ho confirma: es *crea* una nota nova amb el text,
i a una que ja existeix se li pregunta exactament com abans. <kbd>Esc</kbd>, o un
clic en un altre lloc, ho deixa anar tot.

**La fila s'envolta de blau** mentre hi ha a sobre un arrossegament que acabaria
com a contingut, i es manté blava mentre el camp en conté un — el mateix blau,
dient la mateixa cosa: el que passarà a continuació és sobre el text que portes.
Un fitxer arrossegat des del teu propi cofre cap a una carpeta encara vol dir
*mou-lo aquí*, manté el ressaltat propi d'Obsidian, i mai no s'envolta de blau;
aquest gest hi era primer i el contingut se n'aparta.

## Quan el camí és més llarg que el panell

Els noms es **retallen en comptes d'estrènyer-se**, en l'ordre del que menys
probablement necessitaràs:

1. **El nom del cofre primer**, fins a la seva icona. Ja saps en quin cofre ets;
   la icona continua dient on comença el camí.
2. **Després l'extensió del fitxer**, si la tens activada — els mateixos tres
   caràcters en gairebé tots els fitxers d'un cofre. Desapareix sencera en
   comptes d'escurçar-se: mitja extensió no diu res que cap extensió tampoc digui.
3. **Després les carpetes, la més llarga primer.** El nom de carpeta més llarg
   s'escurça fins a la llargada del següent més llarg, després tots dos junts, i
   així successivament, cada un s'atura al seu mínim — així una carpeta molt
   llarga cedeix tot el que té per sobre de les altres abans que un nom curt al
   costat perdi una lletra.
4. **El propi nom del fitxer, l'últim**, i manté unes sis lletres. Per a això
   serveix la capçalera.

L'espai es cedeix **contínuament**, en fraccions de píxel en comptes de lletra a
lletra: un nom que cedeix es retalla al píxel i s'esvaeix sota el seu `…`, així
que un panell arrossegat lentament estreny la fila suaument i res del que ve
després es mou a bots. Abans que caigui cap lletra, es gasta l'aire al voltant
dels separadors — és l'únic espaiat de la fila i no costa cap informació — i un
nom escurçat acaba on comença el separador, sense cap franja de caixa buida
entre els dos.

**El camp agafa el que conté.** Obrir-ne un per escriure un camí no estreny les
carpetes del costat per fer-li lloc: és tan ample com el text que conté i creix
mentre escrius, així que el rastre manté tot allò que el camp no necessita. Només
quan no hi ha prou espai per als dos, la fila es desplaça, i llavors el camp és
l'única cosa que mai no cedeix — és text que s'està editant, no un nom que
s'ajusta.

No es talla res més enllà del que el distingeix dels seus veïns: `Projects2025`
i `Projects2026` a la mateixa carpeta es redueixen a `…025` i `…026` en comptes
d'un prefix que els faria semblar la mateixa paraula, mentre que `Reports` al
costat de `Receipts` pot reduir-se a `Rep…`. A més d'això, cada nom manté una
**amplada llegible** — l'equivalent a unes quatre lletres per a una carpeta i
sis per a un nom de fitxer, mesurat en la tipografia amb què es dibuixa realment
la fila i no comptat lletra per lletra. Quatre lletres estretes i quatre
d'amples no són la mateixa quantitat de nom, així que `lilliliillil` pot
conservar més de si mateix que `WWMMWWMMWWMM`, i el que queda a la pantalla
ocupa la mateixa mida en tots dos casos. Els noms curts es deixen del tot en
pau — un nom retallat fins a `A…` és únic i encara il·legible.
**Els espais no compten per a això.** Sis caràcters per dir de quin fitxer es
tracta són sis caràcters que val la pena llegir, així que els espais entre ells
viatgen gratis i mai no en queda un enganxat al `…`, on seria invisible de
totes maneres.

**Un nom es talla allà on els seus veïns hi coincideixen, i pel mig quan no hi
coincideixen enlloc.** Dues carpetes anomenades `aaaa-common-one` i
`aaaa-common-two` comparteixen tot menys els seus últims tres caràcters, així
que tallar la cua manté la meitat que sí que diu alguna cosa: es redueixen a
`…one` i `…two`, cosa que és més curta *i* les distingeix. Quan la coincidència
és al final — `alpha-draft` al costat de `beta-draft` — és el final el que
desapareix; quan hi és als dos extrems, el que queda és el mig. Un nom sense
veïns propers perd el mig, ja que un nom comença amb el que és i acaba amb quin
és — per a un fitxer, la seva extensió: `annual…2026.md`.

Una coincidència curta no compta. `parallel structures` resulta que acaba amb
les mateixes dues lletres que `Schemes` al seu costat, i això no és cap raó per
mantenir cap dels dos sencer — tres caràcters des del principi ja els
distingeixen.

Res no passa a una segona línia. Quan ni tan sols els noms honestos més curts
hi caben, la fila **es desplaça horitzontalment**, aparcada al final, on és el
fitxer — en aquest punt ja no queda res a comprimir, i tallar més amagaria en
comptes d'escurçar. La roda del ratolí la desplaça allà on el punter estigui
sobre la fila, i es pot arribar als dos extrems: mentre es desplaça, la fila
s'alinea al seu inici, sigui quina sigui la configuració d'alineació, perquè
un contingut centrat en una caixa que ha superat vessa tant per l'esquerra com
per la dreta — i aquella meitat no es pot arribar a desplaçar mai.

**Apunta a un nom escurçat i torna a mostrar-se sencer**, mentre l'assenyalis,
desplaçat cap a la vora esquerra perquè tot el que ha tornat sigui a la
pantalla. **Fes-hi clic i es queda així**: el camp s'obre mostrant la carpeta
on has fet clic, el que s'ofereix a continuació i el que escriguis, i continua
mostrant-los quan el punter s'ha allunyat. Els noms es queden quiets mentre
desplaces la fila o hi escrius — que un se t'obrís sota un gest pensat per
llegir la fila et mouria tot el que ve després.

El **segment inicial sempre porta un consell d'eina, i és el camí absolut** —
`/home/tu/Vaults/Notes`, o on sigui que comenci la fila. Això és l'única cosa
sobre la fila que res a la pantalla pot dir: el nom et diu *quin* cofre, mai
on és. Hi és tant si s'ha hagut d'escurçar alguna cosa com si no.

Amb **Mostra el nom del magatzem** desactivat, el nom no es treu, només es
manté a zero — així que apuntar a la icona el retorna exactament igual que
apuntar a un nom que la fila ha hagut d'escurçar.

**Mostra les extensions de fitxer** torna a posar l'extensió al nom de fitxer
de la fila. Desactivat — el valor per defecte — la fila anomena una nota tal
com Obsidian la titula, sense el `.md` que gairebé tots els fitxers d'un cofre
comparteixen; activat, l'anomena tal com ho fa el sistema de fitxers, que és el
que vols quan el cofre conté més que notes. També és la segona cosa que la fila
cedeix quan l'espai s'escurça, just després del nom del cofre.
Un consell d'eina et dona la resta: no només el nom sinó tot el que la fila
mostra a sota, com a `…/nom/carpeta/nota.md`, així que un sol pas per sobre
respon tant "què és això" com "què hi ha a sota". La icona del cofre anomena
el seu cofre de la mateixa manera, quan el nom està desactivat o s'ha
escurçat del tot.

## Els colors d'avís

| | Quan | Què vol dir |
| --- | --- | --- |
| Anell **vermell** a la barra de camí | La fila apunta fora del teu cofre | Obsidian no pot obrir el que hi ha allà com a nota, i res d'allà s'escriu fins que obris el cadenat. |
| Anell **taronja** a la barra de camí | El fitxer és un tipus de text per al qual Obsidian no té cap vista | Una precaució. Obsidian l'entregaria a l'aplicació predeterminada del teu escriptori; el connector el mostra en el seu lloc. |
| Text **vermell** al camp obert | Encara no hi ha res en aquest camí | <kbd>Enter</kbd> el crearà en comptes d'obrir-lo. No és tant un avís com una declaració del que farà la pròxima tecla — vegeu [Escriure un camí](#escriure-un-camí). |
| Cadenat **vermell** al lloc de l'interruptor de canvi de nom | La fila apunta fora del teu cofre i escriure-hi encara està bloquejat | El mateix vermell que l'anell, pel mateix motiu: marca una negativa. Prement-lo, es permet escriure aquí i es torna la funció a l'interruptor — vegeu [Escriure fora del cofre](#escriure-fora-del-cofre). |

Els **dos anells són independents, i tots dos poden ser presents alhora** — un
`.json` extern és tant fora del teu cofre *com* un tipus per al qual Obsidian no
té editor. Al visor apareixen com a línies separades, cadascuna afirmant només
el seu propi fet. A la barra de camí, el vermell guanya quan tots dos
s'apliquen, ja que dos anells només serien soroll. El *text* vermell és una
tercera cosa completament diferent: es tracta del que s'està escrivint, no
d'on apunta la fila, així que pot aparèixer dins de qualsevol dels dos anells
o de cap.

El nivell taronja és deliberadament estret. Els tipus registrats (Markdown,
canvas, imatges, PDF, àudio, vídeo) es gestionen correctament i no reben res.
Els fitxers binaris tampoc reben res — no acabaràs convertint un `.zip` en un
desastre per accident. El que queda és exactament el perill: un `.json`,
`.css` o `.log` que **Mostra tots els tipus de fitxer** ha fet visible. El
desplegable és deliberadament més ampli: allà, tot el que no és una nota és
taronja — vegeu [com es coloregen les entrades del desplegable](#com-es-coloregen-les-entrades-del-desplegable).

## Mode canvi de nom/moviment

El botó de llapis a l'extrem dret de la capçalera — al costat del botó del mode
de visualització, de la mateixa mida que els botons natius — activa i desactiva
el mode canvi de nom/moviment. Fora del teu cofre, un cadenat vermell hi és en
el seu lloc fins que el prems; vegeu [Escriure fora del cofre](#escriure-fora-del-cofre).
Llavors la fila de la capçalera queda emmarcada amb el color d'accent,
exactament com quan reanomenes al gestor de fitxers. Els mateixos clics i
pulsacions de tecla ara confirmen un moviment o un canvi de nom mitjançant el
`fileManager.renameFile` d'Obsidian, així que tots els enllaços a la nota
segueixen el canvi.

Mentre reanomenes:

- El nom de fitxer actual queda fixat al desplegable de cada carpeta, així que
  moure una nota sense reanomenar-la és un sol clic.
- Els noms ja agafats a la carpeta de destinació apareixen en **vermell** — una
  carpeta que ja té aquell nom, i un fitxer amb aquell nom — així que el
  conflicte es mostra abans que triïs. Encara es poden triar: vegeu més avall.
- L'entrada es valida en directe segons les pròpies regles de canvi de nom
  d'Obsidian — els mateixos conjunts de caràcters, els mateixos missatges, el
  mateix consell d'eina vermell que obtens en reanomenar a l'arbre de fitxers —
  així que un nom il·legal es marca mentre l'escrius i no es pot confirmar.
- Fer clic fora de la barra de capçalera, o que la capçalera perdi el focus,
  acaba el mode de canvi de nom.

### Un nom que ja existeix

Moure o reanomenar cap a un nom que ja hi és **pregunta en comptes de
rebutjar-ho.** S'obre un diàleg amb dos camins que pots editar: on va el teu
fitxer, i on va el fitxer que hi ha pel mig — en vermell mentre encara estigui
agafat. Cada camí també es dibuixa tal com la barra de camí en dibuixa un, amb
les parts que difereixen acolorides i escurçades les últimes, així que un camí
llarg encara mostra què canvia.

Tots dos camps tenen una llista. La segona conté les sortides habituals:

- **Intercanvia els llocs** — va a la carpeta antiga del teu fitxer, amb el
  seu propi nom.
- **Intercanvia els noms** — es queda on és i pren el nom antic del teu
  fitxer.
- **Intercanvia-ho tot** — pren el camí antic del teu fitxer.
- `-1`, `-bak` i `-old` al costat del seu propi nom.
- Els dos noms que tenien els fitxers.

La primera llista ofereix on anava el teu fitxer, **Queda't on és**, el seu
propi nom a la carpeta de destinació, i `-1`, `-bak` i `-old` al costat. Una
sortida el camí de la qual ja estigui agafat apareix en gris i no es pot
triar. Triar-ne una **només omple el camp** — encara el pots editar — i
**Aplica** mou tots dos, enllaços inclosos; **Cancel·la** no mou res. Triar un
nom ja agafat del desplegable pregunta el mateix, i també ho fa deixar anar
una nota sobre una carpeta que ja té el seu nom.

## Una sola tecla per als dos canvis de nom

L'ordre de canvi de nom (<kbd>F2</kbd> per defecte, o la que li hagis assignat) **alterna** entre el canvi de nom del títol inserit d'Obsidian i la barra de camí de la capçalera d'aquest connector. Si has desactivat el títol inserit d'Obsidian, la barra de camí de la capçalera esdevé l'únic objectiu, de manera que la tecla mai no fa res.

A la barra de camí s'obre sobre el **nom sense la seva extensió** — l'edició que gairebé sempre és un canvi de nom, i el mateix que selecciona clicar el nom. Prem-la de nou i fa el que hi faria <kbd>Tab</kbd>: al nom, això és el següent graó — el nom amb la seva extensió, el camí des de la carpeta del teu cofre, el camí des de l'arrel del sistema; amb quelcom escrit, el completa, tal com fa <kbd>Tab</kbd>.

**El cicle es tanca a la capçalera.** Cinc premudes et fan fer-hi la volta — el títol inserit, el nom, el nom amb la seva extensió, el camí des del teu cofre, el camí des de l'arrel del sistema — i la sisena és de nou el títol inserit. Aquesta premuda és l'única que difereix de <kbd>Tab</kbd>, que en canvi torna al principi del camí — i la setena va on va la volta de <kbd>Tab</kbd>: l'arrel del cofre, amb tot el camí al camp i la seva primera carpeta marcada. Així que a cada pas que arriba <kbd>Tab</kbd>, la tecla també hi arriba.

L'ordre **Enfoca la barra de camí** fa el mateix dins del camp — el que faria <kbd>Tab</kbd> — i on <kbd>Tab</kbd> tancaria la volta, retorna el cursor a la nota. La seva següent premuda és la volta: l'arrel del cofre, amb la primera carpeta marcada.

**En un camp que ja està obert**, la tecla el converteix en un canvi de nom on es troba — mantenint el text, el cursor i la selecció — i **Enfoca la barra de camí** el treu del canvi de nom de la mateixa manera. **Qualsevol altra cosa** premuda o clicada entre les premudes reinicia qualsevol dels dos cicles, de manera que una premuda després d'haver estat editant mai no cau en un graó que quedava d'abans.

Fora del cofre la tecla també funciona — allà no hi ha títol inserit, així que la primera premuda va directament a la barra de camí.

Això funciona embolcallant l'ordre `workspace:edit-file-title` en comptes d'agafar la tecla, de manera que tant reassignar la drecera com executar l'ordre des de la paleta funcionen igual.

## Com es coloregen les entrades del desplegable

| Color | Significa |
| --- | --- |
| **Porpra** | Una nota (`.md`, `.markdown`) — el que Obsidian obrirà com a nota, triada d'una carpeta de contingut mixt |
| **Taronja** | No és una nota — qualsevol cosa que Obsidian no obrirà com a tal, des d'un PDF fins a un `.txt`, i les entrades `:page` que hi van amb elles. Una carpeta de contingut mixt es llegeix per les notes que conté, i un sol color per a tota la resta ho diu més ràpid que un avís sobre unes quantes; vegeu [els colors d'avís](#els-colors-davís) |
| **Atenuat** | Fora del teu cofre, així que el tractament propi del cofre no s'aplica |
| **Blau**, negreta | On ja et trobes: la nota d'aquesta barra mateixa, i la carpeta sobre la qual s'assenta la barra de camí. En mode canvi de nom/moviment, l'entrada *mantenir aquest nom* ocupa el lloc de la nota — la mateixa nota en tots dos casos |
| **Vermell** | Només en mode canvi de nom/moviment: el nom ja està en ús. Encara es pot seleccionar — triar-la pregunta què fer amb el fitxer que hi ha pel mig; vegeu [Un nom que ja està en ús](#un-nom-que-ja-existeix) |

**Les carpetes van en negreta**, així que la nota pròpia d'una carpeta no necessita cap color propi per distingir-se de la seva carpeta: és porpra com qualsevol altra nota. Una **línia a la vora d'una fila** marca els noms que comencen amb el que has escrit — blau on coincideixen més enllà, verd a la branca que segueix l'oferta; vegeu [Escriure un camí](#escriure-un-camí).

El camp pren els mateixos colors per al que designa — vegeu [Escriure un camí](#escriure-un-camí).

## Regles de visibilitat

- Els fitxers amb extensions no compatibles apareixen als desplegables només si el paràmetre **Detect all file extensions** d'Obsidian està activat — **dins del cofre**. Fora d'ell, el paràmetre no s'aplica: governa el que el cofre indexa, i res allà fora és al cofre, així que un `.txt` al costat de les teves notes hi apareix igualment.
- El desplegable mostra fins a 1.000 entrades, deu vegades el límit propi d'Obsidian. Quan una carpeta en té més, l'última fila diu quantes s'han deixat fora; segueix escrivint per reduir la llista.
- Els fitxers i carpetes ocults apareixen només si el paràmetre **Mostra els fitxers ocults** d'aquest connector està activat.
- **La protecció contra la sobreescriptura funciona igual sigui quina sigui la visibilitat** — un fitxer ocult també et bloqueja de sobreescriure'l.

## Full de consulta ràpida

Un camí **entre cometes** se't presenta sense elles. La funció *Copy as path* de Windows dona `"C:\Users\tu\nota.md"`, cometes incloses, i un intèrpret d'ordres fa el mateix per a qualsevol camí amb un espai; enganxar-lo o escriure'l funciona igual. Només la cometa doble, i només com a parella que envolta tot el conjunt — no pot aparèixer en un nom real, on un apòstrof sí que hi pot ben aparèixer.

| Vols… | Fes això |
| --- | --- |
| Obrir una carpeta (la seva nota, o mostrar-la) | Clica el separador **després** d'aquella carpeta |
| Donar a una carpeta una nota de carpeta que no té | **Doble clic** en aquell mateix separador (cal un connector de notes de carpeta) |
| Canviar una carpeta per una germana | Clica el nom d'aquella carpeta i després escriu o tria |
| Canviar el nom o el destí de la nota | Clica el nom de la nota — extensió inclosa |
| Explorar el contingut d'una carpeta | Clica el nom d'aquella carpeta; el desplegable llista la seva carpeta pare, així que clica la carpeta **de sota** de la que vols |
| Reescriure una carpeta i tot el que hi ha per sota | **Doble clic** en el nom d'aquella carpeta i després escriu |
| Editar el camí des d'una carpeta cap avall | Clica el nom d'aquella carpeta i després <kbd>→</kbd> per desseleccionar |
| Saltar a un fitxer escrivint el seu camí | Clica el nom del fitxer o l'espai buit, escriu, <kbd>Enter</kbd> |
| Obrir un fitxer en una pestanya nova en comptes d'això | <kbd>Ctrl</kbd> mentre el tries, o <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| Copiar la nota a algun lloc en comptes de moure-la | Llapis, després <kbd>Ctrl</kbd> mentre tries o confirmes el destí |
| Crear una nota en un camí que no existeix | Escriu el camí — el camp es torna **vermell** un cop res al desplegable hi coincideix tampoc — després <kbd>Enter</kbd>. Dins del cofre es crea immediatament; fora, primer pregunta |
| Saber si un camí que has escrit ja existeix | Mira el color: pren el color de la fila que designa, i vermell vol dir que <kbd>Enter</kbd> el crearia |
| Baixar un nivell mentre escrius | Escriu `/` |
| Pujar un nivell mentre escrius | <kbd>Backspace</kbd> amb l'entrada buida |
| Portar al camp les carpetes anteriors | <kbd>←</kbd> al seu inici per a una; <kbd>Shift</kbd>+<kbd>Home</kbd>, o <kbd>Home</kbd> amb el desplegable tancat, per a totes |
| Moure o canviar el nom de la nota oberta | Clica el llapis i després navega o escriu com a dalt |
| Moure a un nom que ja està en ús | Confirma'l igualment: el diàleg et permet intercanviar llocs, noms o ambdós, o donar al fitxer que hi ha pel mig un altre nom |
| Moure sense canviar el nom | Llapis → clica dins la carpeta de destí → tria el nom de fitxer actual fixat |
| Canviar el nom sense moure's | <kbd>F2</kbd> dues vegades (la primera premuda va al títol inserit, la segona a la capçalera) |
| Saltar a un altre cofre, a l'inici o a una unitat | Clica el nom del cofre |
| Obrir un fitxer de fora del cofre | Nom del cofre → tria una ubicació → navega → tria el fitxer (només lectura fins a *Edita com a text*) |
| Completar el nom que s'està escrivint | <kbd>Tab</kbd>, o <kbd>End</kbd> per al que s'ofereix; <kbd>→</kbd> n'agafa una lletra |
| Entrar-hi, un cop queda un únic nom | <kbd>Tab</kbd> de nou |
| Desfer un pas, o sortir de la carpeta | <kbd>Shift</kbd>+<kbd>Tab</kbd> |
| Agafar tot el camí, o el camí del sistema | <kbd>Tab</kbd> més enllà del final, o clicar quatre vegades |
| Copiar un nom, un camí, o un camí del sistema | Clic dret dues vegades; l'espai buit tres vegades per al camí del sistema |
| Accedir al que el gestor de cofres ofereix per a aquest cofre | Clic dret a la icona a l'inici de la fila |
| Copiar l'identificador del cofre | Clic dret a la icona a l'inici de la fila |
| Obrir un altre cofre que estaves explorant | Clic dret al seu nom a l'inici de la fila |
| Veure l'extensió del fitxer a la fila | Activa **Mostra les extensions de fitxer** a la configuració |
| Obrir un segment de carpeta en una pestanya nova | <kbd>Ctrl</kbd> o clic amb el botó del mig, o arrossega'l a la barra de pestanyes |
| Accedir a la barra de camí des del teclat | Assigna *Enfoca la barra de camí* a Dreceres |
| Obrir una adreça web o un enllaç `obsidian://` | Escriu-la a la barra i prem <kbd>Enter</kbd> |
| Cancel·lar qualsevol cosa | <kbd>Esc</kbd>, o clica fora de la barra de capçalera |
| Provar entrades abans de confirmar | Fletxes o passa el ratolí pel desplegable; <kbd>↑</kbd> més enllà de dalt et retorna el teu text |
| Moure una nota a una carpeta superior | Arrossega-la sobre aquella carpeta a la fila |
| Guardar un fragment de text com a nota nova | Arrossega el text sobre una carpeta, escriu un nom, <kbd>Enter</kbd> |
| Afegir un fragment de text a la nota que estàs llegint | Arrossega'l sobre el nom de la nota, confirma |
| Veure sencer un nom de carpeta escurçat | Passa-hi el ratolí per sobre, o eixampla el panell |
| Saber on viu el cofre mateix | Passa el ratolí per la icona a l'inici de la fila |
| Treure una nota del cofre | Llapis → navega cap a fora → confirma el diàleg (els enllaços es trencaran) |
| Permetre escriure fora del teu cofre | Clica el **cadenat vermell** a la capçalera; el commutador de canvi de nom ocupa el seu lloc |
| Tornar-lo a bloquejar | Clica el commutador fins que el cadenat torni — una premuda per entrar, una per sortir |
| Suprimir un fitxer fora del cofre | Obre el cadenat i després clic dret al fitxer: *Delete* el mou a la paperera del teu sistema |

## Configuració

| Paràmetre | Opcions | Per defecte | Què fa |
| --- | --- | --- | --- |
| **Language** | Per defecte d'Obsidian, o qualsevol de les 46 | Per defecte d'Obsidian | En quin idioma és el text propi d'aquest connector. *Obsidian default* segueix l'idioma establert a la configuració d'aparença, que és el que gairebé tothom vol. La fila mateixa — el seu nom, la seva descripció i *Obsidian default* — es manté en anglès sigui quin sigui l'idioma triat, perquè és el camí de tornada des d'un idioma que no pots llegir. El grec i el sànscrit estan traduïts aquí i absents de la llista pròpia d'Obsidian, així que aquest paràmetre és l'única manera d'arribar-hi. |
| **Alineació** | Esquerra / Centre / Dreta | Esquerra | On se situa la barra de camí a la fila de capçalera. *Centre* coincideix amb l'aspecte clàssic d'Obsidian. |
| **Separador** | Qualsevol caràcter | `/` | El separador dibuixat entre segments. Sis opcions predefinides d'un sol clic (`/ > ▸ › \ •`) es troben davant del camp de text. |
| **Mostra el nom del magatzem** | Activat / Desactivat | Activat | Si el cofre mateix és el primer segment de la barra de camí. Desactivat, aquell segment esdevé una icona 🏠 en comptes de desaparèixer, així que el camí encara comença en algun lloc clicable. |
| **El nom de la carpeta obre el desplegable** | Activat / Desactivat | Activat | Intercanvia el que fan el nom d'una carpeta i el separador que el segueix — vegeu [la taula de dalt](#la-barra-de-camí). Amb [Folder notes](obsidian://show-plugin?id=folder-notes) el separador obre les notes de carpeta. Mai no s'aplica en mode canvi de nom/moviment. |
| **Mostra els fitxers ocults** | Activat / Desactivat | Desactivat | Si els fitxers i carpetes ocultes es llisten als desplegables. La protecció contra la sobreescriptura s'aplica igualment. |
| **Show all file types** | — | — | No és un paràmetre d'aquest connector sinó d'Obsidian, esmentat aquí perquè respon a la mateixa pregunta: el teu cofre només indexa els tipus de fitxer que se li diu, i només el que indexa es pot llistar. Cerca'l a la configuració d'Obsidian i activa'l per veure tots els fitxers; el botó al costat de la fila obre aquella pàgina amb el paràmetre desplaçat a la vista i ressaltat un instant, com si el cliquessis des de la cerca pròpia de la configuració. Fora del cofre no s'aplica, ja que res allà fora s'indexa de totes maneres. |
| **Mostra les extensions de fitxer** | Activat / Desactivat | Desactivat | Si el nom del fitxer a la fila porta la seva extensió. Desactivat, es deixa fora — com Obsidian la deixa fora del títol d'una nota. Activat, la fila anomena el fitxer tal com ho fa el sistema de fitxers. En tots dos casos, l'extensió és la segona cosa que es sacrifica quan la fila es queda sense espai, just després del nom del cofre. |
| **Accés a fitxers externs** | Activat / Desactivat | **Desactivat** | Si el nom del cofre obre el desplegable d'ubicacions. Desactivat, res dins el connector mira mai més enllà d'aquest cofre. |
| **Hotkeys** | botó | — | Obre les *Hotkeys* d'Obsidian filtrades per a aquest connector, on es pot assignar una tecla a *Enfoca la barra de camí*. |

## Substituir les icones

Lure dibuixa tres icones: la icona de l'arrel del cofre (quan **Mostra el nom del magatzem** està desactivat), el commutador de canvi de nom/moviment, i el cadenat que ocupa el seu lloc mentre escriure fora del cofre està bloquejat. Totes es poden substituir des d'un tema o un fragment de CSS — defineix el glif de substitució i amaga el propi en una sola regla:

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

`--lure-icon-glyph` accepta qualsevol cosa vàlida a `content` de CSS, així que `url(...)` funciona per a una imatge tant com per a un glif de text o un emoji. Deixa `--lure-icon-svg` tal com està per conservar la icona de Lucide i dibuixar el teu glif al seu costat.
