<!-- Traducció de docs/usage.md — estat: commit 33b0e60.
     Traducció automàtica (Claude Opus 5), no revisada per parlants
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

Amb [Folder notes](obsidian://show-plugin?id=folder-notes) instal·lat, el mateix clic obre la nota d'aquella carpeta. És l'únic connector de notes de carpeta que s'ha vist que reclama el camí de la capçalera; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) i [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) gestionen notes de carpeta però no escolten el clic al camí, de manera que amb aquests el separador revela la carpeta com sempre. Vegeu [compatibilitat](../compatibility.md#verified-against).

Un separador només va **subratllat quan la carpeta que el precedeix té realment una nota de carpeta**, així que el subratllat és una promesa que hi ha alguna cosa per obrir. Cada separador continua sent clicable en qualsevol cas — un sense subratllat revela i desplega la seva carpeta a la barra lateral, cosa que el cursor continua indicant. El subratllat marxa del nom de la carpeta al mateix temps: amb l'intercanvi activat, el nom obre el desplegable, i marcar-lo com l'enllaç a la nota seria mentida.

**El mode canvi de nom/moviment ho sobreescriu tot dos**, digui el que digui la configuració: res de la fila no obre una carpeta mentre hi ha un moviment pendent, perquè obrir-ne una l'abandonaria. Els noms de carpeta se seleccionen per editar-los i els separadors baixen — totes dues coses són maneres de triar la destinació — i el subratllat desapareix per mostrar que l'obertura està suspesa.

**L'arrel del cofre** és l'únic segment que no és un segment de camí. No té cap pare del qual llistar germans, així que en comptes d'això obre el [desplegable d'ubicacions](#navegar-fora-del-cofre) — els teus altres cofres, la carpeta personal, l'arrel del sistema de fitxers i les unitats muntades.

## Clicar un segment: canvia'l per un germà

Clicar el nom d'una carpeta selecciona **el nom d'aquella carpeta** en un camp de text i obre un desplegable de la carpeta **un nivell per damunt** — el seu pare. Escriure o triar una entrada canvia aquesta carpeta per un germà i deixa intacte tot el que hi ha per sota, de manera que `Projectes/2026/Inici.md` → clic a `2026` → tria `2025` et dona `Projectes/2025/Inici.md`.

Clicar **el nom de la nota** funciona igual contra la seva pròpia carpeta, i selecciona el nom del fitxer **amb l'extensió inclosa** — reanomenar o reorientar una nota normalment vol dir canviar-la també.

Clicar la carpeta ja ha seleccionat un segment, de manera que **un clic més** eixampla la selecció a tota la línia — aquella carpeta *i* tot el que hi ha per sota — i llavors escriure substitueix la resta del camí d'un sol cop. Funciona igual en mode navegació i en mode canvi de nom/moviment.

Això només s'aplica com a continuació del clic que ha obert el camp. Un cop has fet servir el camp, es comporta com qualsevol altre camp de text: el clic col·loca el cursor, el doble clic agafa una paraula i el triple clic agafa la línia.

En tots dos casos la resta del camí queda visible al voltant del camp, com a fitxes al davant i com a text no seleccionat al darrere, de manera que el camí complet no desapareix mai de la capçalera. Escriu per substituir la selecció, o prem <kbd>End</kbd> / <kbd>→</kbd> per mantenir-la i editar a partir d'allà. El desplegable llista tota la carpeta sigui quin sigui el contingut previ; només comença a filtrar quan escrius de debò.

## Baixar amb el separador

Clicar un separador (amb **El nom de la carpeta obre el desplegable** desactivat) baixa dins la carpeta que el precedeix: el desplegable llista el contingut d'*aquella* carpeta, i la resta del camí s'obre seleccionada al camp. Triar una carpeta l'afegeix al rastre del camí i obre immediatament el desplegable següent, de manera que pots anar baixant per un arbre a cop de clic sense sortir de la fila de la capçalera.

## Les entrades del desplegable són files reals del gestor de fitxers

Cada fitxer i carpeta del desplegable es comporta com la seva fila a l'Explorador de fitxers:

- **Clic dret** per al mateix menú contextual — *Nota nova* / *Carpeta nova* en una carpeta, *Obre en una nova pestanya* / *Canvia el nom…* / *Suprimeix* en un fitxer — incloent-hi les entrades que altres connectors afegeixen als menús de fitxer.
- **Arrossega** una entrada a qualsevol lloc on l'Obsidian accepti un fitxer: dins d'un editor per inserir-hi un enllaç, sobre una carpeta de l'Explorador de fitxers per moure-la, sobre la barra de pestanyes per obrir-la.

La redacció dels menús ve de les traduccions del mateix Obsidian, de manera que encaixa amb la resta de l'aplicació en qualsevol idioma.

## Escriure un camí

- Clicar l'**espai buit** abans o després del camí obre un camp de text amb tot el camí ja escrit i completament seleccionat — escriu-hi al damunt, o edita'l allà mateix. (Clicar el nom del fitxer selecciona només el nom del fitxer; vegeu més amunt.)
- Escriure mentre es mostra el rastre del camí converteix el segment final en un camp petit amb autocompletat en viu limitat a la carpeta actual.
- `/` confirma el segment actual i hi baixa.
- <kbd>Backspace</kbd> en un camp buit torna enrere fins a la carpeta pare i en reobre el nom amb el cursor al final.
- <kbd>Enter</kbd> confirma; <kbd>Esc</kbd> o un clic en un altre lloc cancel·la i torna al camí real del fitxer.

El camp no té cap ornament — ni caixa ni vora — de manera que es llegeix com el text del camí mateix, i creix sol a mesura que escrius.

## La navegació mai no toca el fitxer obert

En el mode predeterminat (navegació), la nota oberta **mai** no es reanomena ni es mou.

- Un camí que resol a un fitxer existent l'obre.
- Un camí que encara no existeix pregunta *«Voleu crear un fitxer nou?»*. Confirmar-ho crea les carpetes pare que faltin i el fitxer; cancel·lar no fa absolutament res.

## <kbd>Ctrl</kbd> — pestanya nova, i copiar en comptes de moure

Mantenir <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> al macOS) mentre tries un fitxer del desplegable, o mentre prems <kbd>Enter</kbd> sobre un camí, envia el resultat a una **pestanya nova** en comptes d'aquesta:

| | Sense res | Amb <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Triar o escriure un fitxer existent | S'obre aquí | S'obre en una pestanya nova |
| Escriure un camí que no existeix | Pregunta i després obre aquí | Pregunta i després obre en una pestanya nova |
| Confirmar un camí en mode canvi de nom/moviment | **Mou** la nota allà | La **copia** allà i obre la còpia en una pestanya nova |

El modificador es llegeix amb la regla del mateix Obsidian, de manera que es comporta exactament com sobre un enllaç o una fila de l'Explorador de fitxers — el clic central també vol dir «pestanya nova», <kbd>Ctrl</kbd>+<kbd>Alt</kbd> vol dir una divisió i <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> una finestra nova.

Copiar es nega a sobreescriure, exactament igual que moure — inclòs sobre el camí de la mateixa nota, on no hi ha res sensat per copiar.

## Navegar fora del cofre

**Això està desactivat per defecte.** Activa primer **Accés a fitxers externs** a la configuració — llegir i escriure fora del cofre és l'única cosa que fa aquest connector i que l'Obsidian mateix no fa, de manera que és una cosa a la qual t'hi apuntes en comptes de desapuntar-t'hi. Amb això desactivat, el nom del cofre simplement revela el teu cofre a l'Explorador de fitxers, i res d'aquí no mira mai més enllà.

Clicar el **nom del cofre** (o la icona 🏠, quan *Mostra el nom del magatzem* està desactivat) obre un desplegable de llocs en comptes de continguts:

- **Els teus altres cofres**, llegits del registre del mateix Obsidian, els oberts més recentment primer, cadascun sota la icona de cofre del mateix Obsidian — la que l'aplicació fa servir per als seus ordres de cofre. El cofre que ja tens obert rep una casa: és d'on arrenca la fila per defecte, no un lloc on anar.
- **La carpeta personal**, sota el seu propi nom de compte, marcada amb un `~`. Lucide no té titlla, així que aquesta la dibuixa el connector sobre la mateixa graella de 24×24 de Lucide i amb el mateix traç — una icona que falta al conjunt més que no pas un caràcter de text assegut entre icones.
- **L'arrel del sistema de fitxers**, etiquetada `root` — sense traduir, perquè aquest és el seu nom a tots els sistemes — en comptes de `/`, que es llegiria com un pas buit al costat del separador que la segueix.
- **Les unitats muntades**, amb una icona per tipus allà on és barat determinar-lo: els recursos compartits de xarxa, els discs òptics, els disquets i els suports extraïbles tenen la seva; tota la resta rep una unitat genèrica. Al Windows les unitats es mostren com a `C:` amb una icona genèrica — els noms de volum i els tipus precisos necessiten WMI, cosa que deliberadament no es fa.

Triar un altre cofre **no fa que l'Obsidian hi canviï.** Tot el que tens obert continua obert; la barra de camí simplement comença a navegar allà. Aquest és tot el sentit de tenir-ho a la barra de camí en comptes de delegar-ho al commutador de cofres de la barra lateral.

### Mentre ets fora

El camí **comença a la ubicació que has triat**, no a la disposició de directoris de la màquina — tria `Arxiu` i la fila diu `Arxiu / notes / …`, no `/home/tu/Cofres/Arxiu/notes/…`. El segment inicial porta una icona del que és (cofre, carpeta personal, unitat), i <kbd>Backspace</kbd> s'atura allà en comptes de continuar pujant per la resta del sistema de fitxers. Amb *Mostra el nom del magatzem* desactivat, aquell segment és només la icona — la configuració va sobre el segment inicial de la fila, sigui quin sigui el cofre que anomeni, no només el teu.

La barra de camí queda **emmarcada amb el color d'error** — el mateix anell que dibuixa el mode canvi de nom — mentre apunta fora del teu cofre. Marca una condició permanent, no un moment: mentre hi sigui, cap de les maneres de fer del mateix Obsidian no s'aplica al que mostra la fila, i l'escriptura queda bloquejada fins que tu diguis el contrari.

Per la resta, navegar funciona igual que a dins: fitxes, separadors, escriptura, autocompletat, <kbd>Backspace</kbd> per sortir. També s'hi apliquen les mateixes regles de visibilitat, així que les extensions no admeses continuen necessitant *Detectar totes les extensions de fitxers* de l'Obsidian i els fitxers ocults continuen necessitant la configuració d'aquest connector.

**El clic dret i l'arrossegament** no funcionen allà fora — són els gestors del mateix Explorador de fitxers, i necessiten un fitxer que el cofre conegui.

### Escriure fora del cofre

Tot el que escriu està **bloquejat per defecte.** Apareix un **cadenat** al costat del commutador de canvi de nom a la capçalera mentre la fila apunta fora del teu cofre; prémer-lo obre el pany i el torna vermell, a joc amb l'anell del voltant de la fila.

El permís es concedeix **a una ubicació, no a un moment**: sobreviu a tot el que faries mentre treballes en un mateix lloc — acabar un moviment, clicar fora del camp, obrir un fitxer — i s'acaba quan tries un altre cofre, unitat o arrel del desplegable, quan la fila torna a un fitxer del cofre, o quan tornes a prémer el cadenat. Així, una tirada de moviments dins d'una mateixa carpeta costa una premuda, no una per fitxer.

Amb el cadenat obert, la barra de camí es comporta allà fora com ho fa a dins:

| Gest | Resultat |
| --- | --- |
| Escriure un nom que no existeix, <kbd>Enter</kbd> | La mateixa pregunta «voleu crear-lo?» que a dins; també es creen les carpetes pare que faltin. Un nom sense extensió es converteix en un `.md`, exactament com a dins |
| Mode canvi de nom/moviment, escriure un nom nou | Reanomena el fitxer que mostra la fila. Un nom sense extensió conserva la del fitxer — aquí fora una carpeta conté fitxers de tota mena, i un canvi de nom no hauria de convertir en silenci un `.png` en un `.md` |
| Mode canvi de nom/moviment, navegar a un altre lloc, triar **conserva aquest nom** | El mou allà amb el nom que ja té |
| Mantenir <kbd>Ctrl</kbd> en qualsevol dels dos | Copia en comptes de moure, i obre la còpia en una pestanya nova |

Bloquejats, tots aquests informen del que els frena en comptes de passar. No se sobreescriu mai res en cap dels dos estats: una destinació que ja existeix és rebutjada, i el rebuig és el del mateix sistema de fitxers (`COPYFILE_EXCL`, una creació exclusiva) i no pas una comprovació que podria perdre una cursa. Un moviment entre sistemes de fitxers — des d'un llapis USB, des d'un recurs compartit de xarxa — recorre a copiar i després esborrar, i l'original només se suprimeix un cop la còpia ha arribat.

**Una cosa que el cadenat no desbloqueja: moure una nota *fora* del teu cofre.** El `fileManager` no pot seguir un fitxer a través d'aquesta frontera, de manera que tots els enllaços que apunten a la nota es trencarien en silenci i l'Obsidian simplement la veuria desaparèixer. Mantenir <kbd>Ctrl</kbd> la copia a fora, cosa que no té gens d'aquest problema, i l'avís ho diu. En sentit contrari — portar un fitxer de fora *cap a dins* del cofre — tampoc no està connectat encara.

### Obrir un fitxer extern

L'editor de l'Obsidian només funciona amb fitxers de dins del cofre, de manera que un fitxer extern **no es pot** obrir com una nota de debò amb enllaços, retroenllaços i la resta — és un límit de l'aplicació, no d'aquest connector. Triar-ne un obre una **previsualització**, de només lectura fins que tu diguis el contrari:

| Tipus | Es mostra com |
| --- | --- |
| `.md`, `.markdown` | Markdown renderitzat |
| Imatges, àudio, vídeo, PDF | Reproductor/visor natiu |
| Qualsevol altre fitxer de **text** (`.json`, `.css`, `.log`, `.txt`, …) | Text pla literal |
| Formats binaris sense visor | Es passen a *Obre externament* |

El visor té dues lectures d'un fitxer i, com que s'exclouen mútuament, només es mostra aquella a la qual **canviaries**:

| | Què fa | Predeterminat per a |
| --- | --- | --- |
| **Mostra com a Markdown** | Renderitza el fitxer com una nota, només lectura | `.md`, `.markdown` |
| **Edita com a text** | La font, editable | tota la resta |

Fora del cofre, **Edita com a text** és també la premuda que aixeca el només lectura — el mode i el permís són un sol gest en comptes de dos botons sobre els quals rumiar. Va tenyit de vermell **sempre que prémer-lo aixecaria el només lectura**, tant si estàs armant l'edició allà mateix com si véns directament de la vista renderitzada; dins del cofre no hi ha res per desbloquejar, així que es queda net. **Mostra com a Markdown** rep un bany d'accent suau — el mateix to que l'Obsidian dona al text seleccionat — que el marca com el camí de tornada i no pas com una crida a l'acció.

Com que el botó segueix l'*edició* i no el mode cru, un fitxer que està en només lectura a la vista de text encara ofereix **Edita com a text**: és la premuda que l'arma. Un fitxer en què no es podrà escriure mai — truncat, o il·legible — diu **Mostra com a text**, perquè és tot el que la premuda pot oferir.

Els valors per defecte van en el sentit útil i no pas en el literal: una `#` en un script de shell és un comentari, no un encapçalament, de manera que renderitzar un `.log` com a Markdown se'l cruspiria en silenci. Tots dos valors per defecte es poden sobreescriure per fitxer, i la tria entra a l'historial de la fulla, així que endavant/enrere i un espai de treball reobert la conserven — hi ha moltes notes que viuen en fitxers `.txt`, i molts fitxers `.md` són més fàcils de llegir com a font.

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

- **Obre a *(cofre)*** — es mostra quan el fitxer pertany a un dels teus altres cofres. El passa al gestor d'URI del mateix Obsidian, que obre la finestra d'aquell cofre amb la nota a dins, com una nota de debò editable. Aquesta finestra es deixa exactament com era; no et canvia res sota els peus.
- **Mostra com a Markdown** / **Edita com a text** — les dues lectures; la segona també aixeca el només lectura fora del cofre.
- **Obre externament** — passa el fitxer a l'aplicació predeterminada del teu escriptori, incloent-hi els formats binaris que aquest visor no pot mostrar.

No s'escriu res fora del teu cofre si abans no prems *Edita com a text*. Vegeu la secció [Fora del cofre](README.ca.md#fora-del-cofre) del README per a la divulgació completa.

## Els dos colors d'avís

| | Quan | Què vol dir |
| --- | --- | --- |
| Anell **vermell** a la barra de camí | La fila apunta fora del teu cofre | L'Obsidian no pot obrir com una nota el que hi ha allà, i no s'escriu res allà fora fins que obris el cadenat. |
| Anell **taronja** a la barra de camí, entrades taronges al desplegable | El fitxer és un tipus de text per al qual l'Obsidian no té vista | Una precaució. L'Obsidian el passaria a l'aplicació predeterminada del teu escriptori; el connector el mostra en comptes d'això. |

**Tots dos són independents, i poden donar-se alhora** — un `.json` extern és fora del teu cofre *i* d'un tipus per al qual l'Obsidian no té editor. Al visor apareixen com a línies separades, cadascuna dient només el seu fet. A la barra de camí, el vermell guanya quan tots dos s'apliquen, ja que dos anells només serien soroll.

El nivell taronja és deliberadament estret. Els tipus registrats (Markdown, canvas, imatges, PDF, àudio, vídeo) es gestionen com cal i no reben res. Els fitxers binaris tampoc no reben res — no editaràs un `.zip` fins a fer-lo malbé sense voler. El que queda és exactament el perill: un `.json`, `.css` o `.log` que **Detectar totes les extensions de fitxers** ha fet visible.

El vermell guanya allà on tots dos s'aplicarien; dos anells alhora només serien soroll.

## Mode canvi de nom/moviment

El botó del llapis a l'extrem dret de la capçalera — al costat del botó de mode de vista, de la mateixa mida que els botons natius — commuta el mode canvi de nom/moviment. Aleshores la fila de la capçalera queda emmarcada amb el color d'accent, exactament com quan es reanomena a l'Explorador de fitxers. Els mateixos clics i tecles ara confirmen un moviment o un canvi de nom mitjançant el `fileManager.renameFile` de l'Obsidian, així que tots els enllaços a la nota el segueixen.

Mentre reanomenes:

- El nom de fitxer actual queda fixat al desplegable de cada carpeta, de manera que moure una nota sense reanomenar-la és un sol clic.
- Els noms ja ocupats a la carpeta de destinació surten atenuats però continuen sent seleccionables.
- L'entrada es valida en viu contra les regles de canvi de nom del mateix Obsidian — els mateixos conjunts de caràcters, els mateixos missatges, el mateix rètol vermell que reps quan reanomenes a l'arbre de fitxers — de manera que un nom il·legal o en conflicte queda marcat mentre escrius i no es pot confirmar.
- Clicar fora de la barra de capçalera, o que la capçalera perdi el focus, acaba el mode canvi de nom.

## Una sola tecla per als dos canvis de nom

L'ordre de canvi de nom (<kbd>F2</kbd> per defecte, o allò a què l'hagis reassignat) **alterna** entre el canvi de nom del títol en línia de l'Obsidian i la barra de camí de la capçalera d'aquest connector amb el camí complet seleccionat. Si has desactivat el títol en línia de l'Obsidian, la barra de camí de la capçalera passa a ser l'únic objectiu, així que la tecla no es queda mai sense fer res.

Això funciona embolcallant l'ordre `workspace:edit-file-title` en comptes d'agafar la tecla, de manera que tant reassignar la drecera com executar l'ordre des de la paleta funcionen igual.

## Com es coloregen les entrades del desplegable

| Color | Vol dir |
| --- | --- |
| **Lila** | Una nota (`.md`, `.markdown`) — allò que l'Obsidian obrirà com una nota, destriat d'una carpeta de contingut barrejat |
| **Taronja** | Un tipus de text per al qual l'Obsidian no té vista; vegeu [els colors d'avís](#els-dos-colors-davís) |
| **Atenuat** | Fora del teu cofre, així que no s'hi apliquen les maneres de fer del cofre |
| **Blau** | La nota on ets. Navegant és la seva pròpia entrada; en mode canvi de nom/moviment l'entrada *conserva aquest nom* ocupa el seu lloc — la mateixa nota en tots dos casos |
| **Grisat** | Només en mode canvi de nom/moviment: el nom està ocupat. Encara és seleccionable — triar-ne un omple el camp, on la validació marca el conflicte |

## Regles de visibilitat

- Els fitxers amb extensions no admeses només apareixen als desplegables si la configuració **Detectar totes les extensions de fitxers** de l'Obsidian està activada.
- El desplegable mostra com a molt 100 entrades — el límit del mateix Obsidian. Quan una carpeta en té més, l'última fila diu quantes se n'han deixat fora; continua escrivint per estrènyer la llista.
- Els fitxers i carpetes ocults només apareixen si la configuració **Mostra els fitxers ocults** d'aquest connector està activada.
- **La protecció contra sobreescriptura funciona igual sigui quina sigui la visibilitat** — un fitxer ocult continua impedint que el sobreescriguis.

## Full de consulta ràpida

| Vols… | Fes això |
| --- | --- |
| Obrir una carpeta (la seva nota, o revelar-la) | Clica el separador **després** d'aquella carpeta |
| Canviar una carpeta per un germà | Clica el nom d'aquella carpeta, després escriu o tria |
| Reanomenar o reorientar la nota | Clica el nom de la nota — extensió inclosa |
| Navegar pel contingut d'una carpeta | Clica el nom d'aquella carpeta; el desplegable llista el seu pare, així que clica la carpeta **de sota** de la que vols |
| Reescriure una carpeta i tot el que hi ha per sota | **Doble clic** al nom d'aquella carpeta, després escriu |
| Editar el camí a partir d'una carpeta | Clica el nom d'aquella carpeta, després <kbd>End</kbd> o <kbd>→</kbd> per desseleccionar |
| Saltar a un fitxer escrivint-ne el camí | Clica el nom del fitxer o l'espai buit, escriu, <kbd>Enter</kbd> |
| Obrir un fitxer en una pestanya nova | <kbd>Ctrl</kbd> mentre el tries, o <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| Copiar la nota en un lloc en comptes de moure-la | Llapis, després <kbd>Ctrl</kbd> mentre tries o confirmes la destinació |
| Crear una nota en un camí que no existeix | Escriu el camí, <kbd>Enter</kbd>, confirma la pregunta |
| Baixar un nivell mentre escrius | Escriu `/` |
| Pujar un nivell mentre escrius | <kbd>Backspace</kbd> al camp buit |
| Moure o reanomenar la nota oberta | Clica el llapis, després navega o escriu com abans |
| Moure sense reanomenar | Llapis → clica dins la carpeta de destinació → tria el nom de fitxer actual fixat |
| Reanomenar allà mateix | <kbd>F2</kbd> dues vegades (la primera va al títol en línia, la segona a la capçalera) |
| Saltar a un altre cofre, a la carpeta personal o a una unitat | Clica el nom del cofre |
| Obrir un fitxer de fora del cofre | Nom del cofre → tria una ubicació → navega → tria el fitxer (només lectura fins a *Edita com a text*) |
| Cancel·lar qualsevol cosa | <kbd>Esc</kbd>, o clica fora de la barra de capçalera |

## Configuració

| Opció | Valors | Predeterminat | Què fa |
| --- | --- | --- | --- |
| **Alineació** | Esquerra / Centrat / Dreta | Esquerra | On seu el camí a la fila de la capçalera. *Centrat* coincideix amb l'aspecte clàssic de l'Obsidian. |
| **Separador** | Qualsevol caràcter | `/` | El separador dibuixat entre segments. Sis valors predefinits d'un clic (`/ > ▸ › \ •`) seuen davant del camp de text. |
| **Mostra el nom del magatzem** | Activat / Desactivat | Activat | Si el cofre mateix és el primer segment del camí. Desactivat, aquell segment es torna una icona 🏠 en comptes de desaparèixer, de manera que el camí continua començant en un lloc clicable. |
| **El nom de la carpeta obre el desplegable** | Activat / Desactivat | Activat | Intercanvia què fan el nom d'una carpeta i el separador que la segueix — vegeu [la taula de més amunt](#la-barra-de-camí). Amb [Folder notes](obsidian://show-plugin?id=folder-notes) el separador obre notes de carpeta. No s'aplica mai en mode canvi de nom/moviment. |
| **Mostra els fitxers ocults** | Activat / Desactivat | Desactivat | Si els fitxers i carpetes ocults es llisten als desplegables. La protecció contra sobreescriptura s'aplica igualment. |
| **Accés a fitxers externs** | Activat / Desactivat | **Desactivat** | Si el nom del cofre obre el desplegable d'ubicacions. Desactivat, res del connector no mira mai més enllà d'aquest cofre. |

## Substituir les icones

El Lure dibuixa tres icones: la de l'arrel del cofre (quan **Mostra el nom del magatzem** està desactivat), el commutador de canvi de nom/moviment i el cadenat que guarda l'escriptura fora del cofre. Totes es poden canviar des d'un tema o un fragment de CSS — defineix el glif de substitució i amaga el que ve inclòs en una sola regla:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* El cadenat té dos estats; `.is-active` és l'obert. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}

.lure-unlock-btn.is-active {
	--lure-icon-glyph: "🔓";
}
```

`--lure-icon-glyph` accepta qualsevol cosa vàlida a `content` de CSS, així que `url(...)` funciona per a una imatge tant com per a un glif de text o un emoji. Deixa `--lure-icon-svg` tal com està per conservar la icona de Lucide i dibuixar el teu glif al seu costat.
