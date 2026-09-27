<!-- Traducción de docs/usage.md — estado: commit 94b1372.
     Traducción automática (Claude Sonnet 5), no revisada por hablantes nativos.
     Las etiquetas del plugin proceden de src/lang/translations.ts y las de
     Obsidian de los textos que trae la propia aplicación, así que coinciden
     con lo que ves en pantalla. -->

[English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · [Čeština](usage.cs.md) · [Dansk](usage.da.md) · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · **Español** · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · [Bahasa Indonesia](usage.id.md) · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · [Norsk](usage.no.md) · [Polski](usage.pl.md) · [Português](usage.pt.md) · [Português (Brasil)](usage.pt-BR.md) · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

# Uso

[← volver al README](README.es.md)

## La ruta

La ruta completa de la nota dentro de la bóveda sustituye al nombre de archivo a secas en el encabezado de la vista — la barra bajo la fila de pestañas, la que también lleva los botones de atrás y adelante.

Hay dos cosas clicables en la fila, y **El nombre de la carpeta abre el desplegable** decide cuál hace qué:

| | Nombre de la carpeta | Separador que la sigue |
| --- | --- | --- |
| **Activado** (predeterminado) | Selecciona esa carpeta para editarla | Abre la carpeta |
| **Desactivado** | Abre la carpeta | Desciende a esa carpeta |

«Abre la carpeta» significa lo que haga ese clic en un Obsidian sin añadidos. Sin ningún plugin a la escucha, la carpeta se muestra en la barra lateral del Explorador de archivos — resaltada y desplegada para ver su contenido.

Cuando la carpeta de la nota es la que ya estás leyendo, el clic muestra la carpeta en su lugar — no hay nada que abrir que no esté ya en pantalla, que es lo que la segunda pulsación siempre ha significado.

Con [Folder notes](obsidian://show-plugin?id=folder-notes) instalado, ese mismo clic abre en su lugar la nota de esa carpeta, **a cualquier profundidad**: la nota se resuelve aquí a partir de la propia convención de ese plugin en vez de dejársela a él. Ese plugin solo reconoce las carpetas que ha marcado, que en una ruta de más de una carpeta de profundidad no son ninguna, así que la pulsación que abría la nota de una carpeta de nivel superior no hacía nada más adentro. Los otros dos plugins de notas de carpeta no publican ninguna convención que leer y nunca reclaman la fila, así que con esos el separador muestra la carpeta como siempre lo ha hecho. Es el único plugin de notas de carpeta que se ha encontrado que reclame la ruta del encabezado; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) y [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) gestionan notas de carpeta pero no escuchan el clic en la ruta, así que con esos el separador muestra la carpeta como siempre. Consulta [compatibilidad](../compatibility.md#verified-against).

Un separador se **subraya solo cuando la carpeta anterior tiene realmente una nota de carpeta**, así que el subrayado es una promesa de que hay algo que abrir — a cualquier profundidad con [Folder notes](obsidian://show-plugin?id=folder-notes) en marcha, ya que la nota se resuelve aquí en vez de dejársela a ese plugin para marcarla. Donde no es ese el plugin en marcha, nada se subraya y nada se abre: el separador muestra, igual que sin ningún plugin de notas de carpeta. Todo separador sigue siendo clicable de todas formas — uno sin subrayado muestra y despliega su carpeta en la barra lateral, cosa que el cursor de puntero sigue indicando. El subrayado se retira del nombre de la carpeta al mismo tiempo: con el intercambio activado, el nombre abre el desplegable, así que marcarlo como el enlace a la nota sería mentira.

**El modo renombrar/mover manda sobre ambos**, diga lo que diga la opción: mientras hay un movimiento pendiente, nada de la fila abre una carpeta, porque abrirla abandonaría el movimiento. Los nombres de carpeta se seleccionan para editar y los separadores descienden — las dos son formas de elegir el destino — y el subrayado desaparece para indicar que abrir está suspendido.

La **raíz de la bóveda** es el único segmento que no es un segmento de ruta. No tiene carpeta superior de la que listar hermanas, así que en su lugar abre el [desplegable de ubicaciones](#navegar-fuera-de-la-bóveda) — tus otras bóvedas, la carpeta personal, la raíz del sistema de archivos y las unidades montadas.

## El separador propio de la bóveda

El separador justo después del nombre de la bóveda representa a la bóveda misma en vez de a una carpeta, así que hace lo que ningún otro separador puede:

| | Primer clic | Siguiente clic |
| --- | --- | --- |
| **Con un plugin de página de inicio** (una página que te recibe al abrir Obsidian) | Abre esa página en este panel | Repliega el árbol de archivos |
| **Sin uno** | Repliega el árbol de archivos | Restituye exactamente lo que estaba abierto |

Clics normales, no un doble clic: una vez abierta la página, al separador no le queda nada que abrir, así que la siguiente pulsación es el repliegue — por mucho que tardes en llegar a él.

Está **subrayado** cuando hay una página de inicio que abrir, la misma promesa que hace el separador de una carpeta: algo hay ahí. Replegar es un interruptor de dos posiciones — la siguiente pulsación restaura las carpetas que estaban abiertas, y solo esas, así que un árbol que habías organizado no se pierde por echar un vistazo a otra cosa.

## Un panel sin archivo

Una pestaña vacía, el grafo y cualquier otra cosa que no nombra ningún archivo reciben su propia fila: la bóveda, y luego un segmento que dice qué contiene el panel.

```
my-vault / :blank      a new tab
my-vault / :graph      the graph, local or global
my-vault / :<type>     anything else with no file
```

El **propio listado de la raíz de la bóveda** también ofrece estas páginas, junto a las carpetas y notas que hay realmente en ella: elige `:graph` o `:search` ahí y el panel abre esa vista, exactamente como elegir una nota abre la nota. Qué páginas existen se lee de Obsidian en vez de estar escrito aquí — toda vista que no existe para mostrar un archivo, así que un plugin que registra una (una pestaña de inicio, un calendario) aparece sin que este plugin sepa nada de él. Las vistas que necesitan un archivo — Markdown, PDF, imágenes, lienzos, bases — no se ofrecen: no hay nada que puedan mostrar.

Los dos puntos son la clave — ningún archivo o carpeta puede llamarse `:graph`, así que la fila no puede confundirse con una ruta que se pudiera abrir. La etiqueta procede del tipo de vista en vez de la propia redacción de Obsidian, así que se lee igual sea cual sea el idioma de la interfaz, y se descarta un `-view` final: un plugin de pestaña de inicio registra su vista como `home-launcher-view`, y la fila dice `:home-launcher`.

Al hacer clic en el espacio vacío, o en la propia etiqueta, se **abre el campo en la raíz de la bóveda**: escribe una ruta y <kbd>Enter</kbd> la abre en este mismo panel, con el mismo autocompletado, el mismo desplegable y el mismo campo rojo ofreciéndose a crear lo que aún no existe. Una pestaña vacía es un buen sitio para escribir a dónde quieres ir, que es para lo que sirve.

La etiqueta es una etiqueta y nada más: sin desplegable, sin arrastrar, sin renombrar. Los paneles en las barras laterales se dejan completamente en paz — un panel de vínculos de retorno conserva el título que le da Obsidian.

Los lienzos, PDF, imágenes y bases no necesitan nada de esto. Son archivos, así que tienen una barra de ruta normal.

## Clic en un segmento: cámbialo por otro hermano

Al hacer clic en el nombre de una carpeta se selecciona **el nombre de esa carpeta** dentro de un campo de texto y se abre un desplegable con la carpeta **de un nivel superior** — su carpeta madre. Al escribir o elegir una entrada se cambia esta carpeta por una hermana y se deja intacto todo lo que hay debajo, así que `Proyectos/2026/Arranque.md` → clic en `2026` → elegir `2025` te deja `Proyectos/2025/Arranque.md`.

Hacer clic en el **nombre de la nota** funciona igual respecto a su propia carpeta, y selecciona el nombre **sin su extensión** — renombrar es la edición habitual, y escribir directamente sobre una selección que incluía `.md` solía cambiar el tipo de archivo por accidente. La extensión sigue visible a una pulsación de distancia: <kbd>→</kbd> la alcanza, y el doble clic que amplía a la fila entera se lleva todo.

El clic en la carpeta ya ha seleccionado un segmento, así que **un clic más** amplía la selección a la línea entera — esa carpeta *y* todo lo que hay debajo — y lo que escribas sustituye entonces el resto de la ruta de una vez. Funciona igual en navegación y en modo renombrar/mover.

Eso solo vale como continuación del clic que abrió el campo. Una vez que has usado el campo, se comporta como cualquier otro campo de texto: un clic coloca el cursor, un doble clic toma una palabra, un triple clic toma la línea.

De cualquier forma, el resto de la ruta sigue visible alrededor del campo, como fichas antes de él y como texto sin seleccionar después, así que la ruta completa nunca desaparece del encabezado. Escribe para sustituir la selección, o pulsa <kbd>→</kbd> para conservarla y editar desde ahí. El desplegable lista la carpeta entera sin importar qué haya prerrellenado; solo empieza a filtrar cuando escribes de verdad.

## Descender por el separador

Al hacer clic en un separador (con **El nombre de la carpeta abre el desplegable** desactivado) se desciende a la carpeta anterior: el desplegable lista el contenido de *esa* carpeta y el resto de la ruta se abre seleccionado en el campo. Al elegir una carpeta se añade al rastro de la ruta y se abre enseguida el siguiente desplegable, de modo que puedes bajar por un árbol a base de clics sin salir de la fila del encabezado.

## El desplegable se abre donde estás

La lista se abre en la entrada en la que estás situado — la nota a la que pertenece esta barra, o, cuando un clic en una carpeta ha listado su carpeta madre, esa carpeta — en vez de en la primera fila. En una carpeta de doscientas notas, la primera fila no está ni cerca de ti.

**La rueda del ratón sobre un nombre abre su lista y la recorre.** El primer giro abre la misma lista que abre pulsar el nombre, y cada giro siguiente mueve el resaltado una fila, poniendo aquello a lo que apuntas en el campo exactamente como lo hacen las flechas — así se puede encontrar y tomar una hermana sin el teclado. Girar en cualquiera de los dos extremos te devuelve tu texto. Una fila con más ruta que panel responde a la rueda desplazándose lateralmente en su lugar, que es la lectura que gana mientras aplica.

La lista es **tan alta como la ventana permite**. Obsidian limita sus listas de sugerencias a 300 píxeles sea lo que sea lo que quede debajo; esta llega hasta el final de la ventana, deteniéndose unos pocos píxeles antes del borde, y solo se desplaza cuando la carpeta contiene más que eso. **No es más ancha que la barra de ruta**: un nombre que no cabe se acorta igual que se acorta uno de la fila, y se muestra entero cuando apuntas a él.

Moverse por la lista **pone en el campo aquello a lo que apuntas**, con las flechas o al pasar el ratón por encima — en lugar del segmento que estabas editando, dejando el resto de la ruta intacto — así que la fila en la que estás es también la ruta que obtendrías.

El resto de la ruta se muestra **solo hasta donde existe bajo aquello a lo que apuntas**. Estando en una carpeta con `2026/nota.md` detrás del segmento que estás editando, apuntar a una carpeta que tiene un `2026` con un `nota.md` dentro lo muestra todo; una que tiene el `2026` y ninguna nota muestra `2026`; una que no tiene ninguno de los dos no muestra nada después del nombre, y tampoco lo muestra un archivo, ya que nada vive bajo uno. Lo que **tú has escrito** conserva su ruta entera mientras lo estás escribiendo, por poco que haya todavía — un nombre a medio escribir no es una decisión. Fijar un nombre sí es una decisión, y lo que no se puede alcanzar desde ahí se corta en ese punto; las carpetas que estás creando son las que escribes *después* de él, que es donde <kbd>Enter</kbd> las crea.
El texto que habías escrito se conserva: salir **por cualquiera de los dos extremos de la lista** — hacia arriba desde la primera entrada, o hacia abajo desde la última — lo suelta y devuelve tu texto, sin nada resaltado. El campo es una parada más en el anillo como cualquier entrada, así que una vuelta pasa por él en vez de saltar de la última fila a la primera, y seguir pulsando desde ahí da la vuelta al otro extremo.

Retirar el **puntero de la lista** también devuelve tu texto — y entrega el resaltado a lo que lo tuviera antes de que llegara el ratón: la entrada a la que habías llegado con las flechas, que vuelve a mostrarse en el campo, o aquella en la que se abrió la lista porque es donde estás. Pasar el ratón por encima es una forma de mirar más que de elegir, así que un barrido del puntero sobre la lista no te cuesta nada.

La lista en sí no cambia mientras te mueves por ella — sigue filtrando por lo que has escrito, no por lo que se ha previsualizado en el campo — así que la entrada bajo tu posición nunca se desplaza justo antes de la siguiente pulsación. Escribir sustituye la vista previa y filtra como de costumbre.

**Lo que filtra es el segmento que estás editando**, no todo el campo. Hacer clic en una carpeta deja el resto de la ruta ahí detrás del nombre que estás cambiando, así que filtrar por la ruta entera buscaría un hijo llamado `2026/Arranque.md` y no encontraría nada — la lista se cerraría a tu primera pulsación, escribas lo que escribas. La **extensión también se deja fuera**, mientras el cursor esté delante del punto: hacer clic en el nombre de una nota selecciona la raíz del nombre y deja `.md` detrás, así que escribir una letra hace que el campo lea `a.md`, y eso no es lo que buscas. Pon el cursor detrás del punto y la extensión cuenta como cualquier otra cosa. Un nombre que de verdad no coincide con nada igualmente cierra la lista, porque una lista vacía es la respuesta honesta.

Una vista previa **intercambia solo ese segmento y deja el resto de la ruta intacto**: apuntar a una carpeta pregunta qué pasaría si este paso fuera aquel otro, no tira la ruta por la borda. Salir de la lista restaura el texto *y* la selección que tenías, así que la siguiente pulsación sustituye lo que iba a sustituir antes de que miraras.

## Las entradas del desplegable son filas de gestor de archivos de verdad

Cada archivo y carpeta del desplegable se comporta como su fila en el Explorador de archivos:

- **Clic derecho** para el mismo menú contextual que da el Explorador de archivos, entrada por entrada — incluidas las que añaden otros plugins. Una carpeta ofrece *Nueva nota*, *Nueva carpeta*, *Nuevo lienzo*, *Nueva base*, *Hacer una copia*, *Mover carpeta a…*, *Buscar en la carpeta*, *Copiar ruta*, *Mostrar en el explorador del sistema*, *Renombrar…* y *Eliminar*; un archivo ofrece su propio equivalente, incluido *Abrir con la aplicación predeterminada*.
- **Arrastra** una entrada a cualquier sitio donde Obsidian acepte un archivo: a un editor para insertar un enlace, a una carpeta en el Explorador de archivos para moverla, a la barra de pestañas para abrirla.

El texto del menú sale de las traducciones del propio Obsidian, así que encaja con el resto de la aplicación en todos los idiomas.

## Escribir una ruta

- Clicar el **espacio vacío** antes o después de la ruta abre un campo de texto sobre la ruta entera *y muestra la nota en el Navegador de archivos*, así que el árbol sigue al panel sin un segundo gesto. **Cuenta tus pulsaciones**: una selecciona la ruta sin la extensión, dos la seleccionan con ella, tres seleccionan la ruta que conoce la máquina. Clicar el **nombre del archivo** cuenta igual pero empieza un peldaño más abajo, en el propio nombre: uno lo selecciona sin la extensión, dos con ella, y tres se amplían a la ruta entera *desde tu carpeta de la bóveda* — la forma que quiere un enlace o una búsqueda, en vez de la de la máquina. Una cuarta pulsación llega a esa.
- **El conteo pertenece a la racha que abrió el campo.** Una vez que ha caducado — has pausado, escrito, o clicado una vez en algún punto del texto —, el campo es un campo de texto como cualquier otro, y un doble clic en él selecciona la palabra bajo el puntero como lo haría en cualquier otro sitio. Escribe sobre lo seleccionado, o edita en el sitio. (Clicar el propio nombre del archivo selecciona solo el nombre del archivo; ver arriba). Clicar con el botón derecho el mismo espacio **copia** esas mismas tres, a dos, tres y cuatro pulsaciones — un botón las muestra, el otro las toma. Una **única** pulsación derecha abre la ruta con todo ella seleccionado y ofrece lo que se puede hacer con ella: cortar, copiar, pegar, seleccionar todo, en las propias palabras de Obsidian.
- **Clic central en el espacio vacío** para pegar sobre la ruta: el campo se abre sobre la ruta entera *desde la raíz de la bóveda*, así que el portapapeles la reemplaza toda, y lo que cae queda seleccionado. <kbd>Enter</kbd> va entonces ahí.
- **<kbd>Ctrl</kbd>+clic en el espacio vacío** para abrir esta nota de nuevo en una pestaña propia, resaltada en el Navegador de archivos para que la segunda pestaña no se confunda con la primera. En el **nombre de la bóveda**, <kbd>Ctrl</kbd>+clic o clic central abre una pestaña que no contiene nada, situada en la raíz de la bóveda con la lista ya mostrándose — un sitio donde escribir una ruta desde cero.
- Escribir mientras se muestra un rastro de ruta convierte el segmento final en un pequeño campo con autocompletado en vivo limitado a la carpeta actual.
- **Se puede escribir una ruta desde la raíz del sistema de archivos.** `/` delante de un campo vacío abre una en vez de completar un peldaño, cada barra tras ella le pertenece, y `~` es tu carpeta de inicio. Mientras el campo contiene tal ruta, el desplegable lista la máquina en vez de la bóveda, y el segmento inicial de la fila se aparta — lo que hay en el campo empieza en la raíz y lo dice. Con *Acceso a archivos externos* desactivado la lista queda vacía en su lugar, porque <kbd>Enter</kbd> rechazaría la ruta de todos modos.
- **Se puede escribir una página, no solo elegirla.** `:graph`, `:search`, o lo que sea que registren tus plugins — las etiquetas que ofrece [el listado de la raíz de la bóveda](#un-panel-sin-archivo). Escribir dos puntos en cualquier sitio las convoca, ya que ningún nombre puede contener uno, y <kbd>Enter</kbd> abre esa vista en este panel. `:graph` escrito **dentro de una carpeta** abre el grafo de esa carpeta — el grafo filtrado a `path:"esa/carpeta"` en su propio cuadro de búsqueda, como si se hubiera escrito ahí; en la raíz de la bóveda es el grafo entero. <kbd>Tab</kbd> completa el nombre como completa el de una carpeta — y se lleva consigo lo que fuera que el campo contuviera, ya que una página no está en ninguna carpeta y nada vive bajo una. Clicar la etiqueta en tal panel abre el campo ya conteniéndola.
- **Lo que <kbd>Tab</kbd> escribiría se ofrece mientras escribes.** Donde todos los hijos que empiezan con lo que has escrito siguen de acuerdo durante un tramo, ese acuerdo aparece tras el cursor, seleccionado; donde dejan de estar de acuerdo, lo hace el paso hacia el primero de ellos — o hacia la fila a la que llegaste con las flechas, ya que esa es la que <kbd>Tab</kbd> tomaría. Escribir sobre un nombre deja su extensión en pie y ofrece delante de ella, y una carpeta en la que se acaba de entrar ofrece su primer paso, así que no hay estado en el que no se ofrezca nada y aun así <kbd>Tab</kbd> escriba algo. Escribe esas letras y se traga una a una; escribe cualquier otra cosa y desaparece. <kbd>Tab</kbd> o <kbd>End</kbd> la toma entera, <kbd>→</kbd> toma una letra de ella, <kbd>Retroceso</kbd> la retira sin tocar una letra que escribiste tú, y no se ofrece nada de nuevo hasta que escribes — así que siempre hay una salida de un nombre que no querías. Tras una pulsación de <kbd>Tab</kbd> el siguiente paso se ofrece de inmediato, como tras una letra escrita. Lo que lista el desplegable está filtrado por lo que **tú** escribiste, nunca por lo que se ofreció.
- **Las ofertas ignoran mayúsculas y minúsculas.** `sch` ofrece `Schemes`, deletreado como se deletrea el nombre; retirar la oferta devuelve tus letras tal como las escribiste. Donde existen tanto `Test` como `test`, se ofrece el que se deletrea como tú escribiste.
- En el campo, la parte ofrecida simplemente está **seleccionada**. La lista es donde se deletrea: cada fila muestra la parte de ella que **coincidió con lo que escribiste en negrita**, dondequiera que coincidiera en el nombre — `kick` encuentra `Weekly kickoff` y lo dice. **Los nombres que empiezan con lo que escribiste van primero**, por delante de los que solo lo contienen, y se marcan con una línea por el borde: **azul** donde comparten más de lo que escribiste, así que <kbd>Tab</kbd> tiene algo que añadir para todos ellos, y **verde** en la rama que toma la oferta donde se separan — `te` con `test1`, `test2`, `text1` y `text2` ofrece `te`+`st`, así que las dos filas `test` son verdes y las dos filas `text` conservan la línea simple. Cada una de ellas **subraya el paso que <kbd>Tab</kbd> tomaría hacia ella**, no solo la que se ofrece, y el subrayado sigue a la oferta a medida que cambia.
- **Escribir suelta la fila resaltada.** La lista se abre en la entrada en la que estás situado, pero en el momento en que escribes trata de otro sitio, y un resalte que nadie puso ahí se lee como una elección ya hecha.
- La oferta es siempre solo texto delante de ti: las letras que escribiste se mantienen deletreadas como las escribiste mientras escribes, y tomar la oferta reescribe el nombre como lo deletrea la carpeta, porque una ruta tiene que coincidir con el disco. `sk` + <kbd>Tab</kbd> llega a `Skyline`, no a `skyline`.
- **El campo lleva el color de lo que nombra**, el mismo color que su fila en el desplegable: morado para una nota, incluida la propia nota de una carpeta, naranja para cualquier cosa que no sea una nota, azul para la nota en la que estás. La fila de la que toma el color es la que se llama exactamente como escribiste, o si no la resaltada, o si no la primera a la que aún lleva lo que escribiste.
- **El campo se pone rojo en cuanto nada responde a lo que hay en él** — ningún archivo, ninguna carpeta, y ninguna fila del desplegable que aún lleve a ello. Desde ahí <kbd>Enter</kbd> crea lo que hay en el campo en vez de abrirlo, y el rojo lo dice antes de que confirmes. Nunca aparece para una dirección web, que no es un lugar en esta máquina donde buscar. Se colorea el campo **entero** en vez de solo la parte que falta: un campo de texto no puede colorear la mitad de su propio contenido. En modo mover/renombrar el campo mantiene su propio rojo en su lugar, para un nombre que es ilegal — ahí, un nombre al que nada responde es precisamente el objetivo. Que un nombre **ya esté tomado** se aborda cuando lo confirmas, con un diálogo que pregunta qué debe pasar con el archivo que estorba — ver [Un nombre que está tomado](#un-nombre-que-está-tomado): cada nombre escrito hacia `Notas.md` pasa por nombres que pueden ser archivos propios, así que marcarlo letra por letra avisaba de un nombre que nadie había pedido todavía.
- `/` confirma el segmento que estás escribiendo y desciende a él, conservando lo que hay detrás — lo mismo que hace <kbd>Tab</kbd> cuando entra.
- <kbd>Retroceso</kbd> en un campo vacío retrocede a la carpeta superior, reabriendo su nombre con el cursor al final. Lo mismo hace <kbd>Retroceso</kbd> delante de una extensión que ha quedado sola — un campo que no contiene más que `.md` no nombra nada — y la extensión solitaria se va con él.
- **Clicar una carpeta mientras un campo está abierto lo amplía a la ruta entera tras esa carpeta**, con el propio nombre de la carpeta seleccionado — lo mismo que habría hecho clicarla desde la fila, y todo lo que el campo contenía se conserva. Lo que hay en el campo es la cola de la fila mientras está abierto, así que una carpeta clicada más arriba devuelve la ruta que ha recorrido la sesión en vez de la que empezó la nota.
- **Salir con las flechas por el frente del campo trae a la carpeta anterior dentro**, como si la ruta entera fuera una sola línea de texto. Con el cursor en el punto de inicio, <kbd>←</kbd> trae esa carpeta al campo y aterriza al final de su nombre, <kbd>Ctrl</kbd>+<kbd>←</kbd> aterriza al principio de él, y <kbd>Home</kbd> trae todas las carpetas hasta la raíz de la bóveda — o hasta el lugar que elegiste, fuera de la bóveda — de una vez. Mantén <kbd>Shift</kbd> y la selección se extiende sobre lo que entró. En macOS el salto de palabra es <kbd>Option</kbd>+<kbd>←</kbd> y <kbd>Cmd</kbd>+<kbd>←</kbd> es <kbd>Home</kbd>. En cualquier otro sitio que no sea el frente, estas son teclas de texto normales. **Mientras el desplegable se muestra, <kbd>Home</kbd>, <kbd>End</kbd>, <kbd>RePág</kbd> y <kbd>AvPág</kbd> le pertenecen** — primera fila, última fila, una página hacia arriba, una página hacia abajo, siendo una página lo que muestra la lista, con la fila resaltada manteniendo su lugar en pantalla — y solo llegan al texto una vez que se ha cerrado; <kbd>Shift</kbd>+<kbd>Home</kbd> trae todas las carpetas con la lista abierta también.
- **La lista sigue al cursor.** Selecciona una parte distinta de la ruta — arrastra sobre ella, clica dentro, o desplázate con las flechas — y el desplegable lista los hijos de *esa* carpeta, no los de aquella en la que se abrió el campo. La carpeta se cuenta desde los segmentos más lo que del campo queda delante del cursor, así que clicar dentro de `Notas.md` en un campo que contiene `2026/Notas.md` lista lo que hay en `2026`. Señalar una fila la escribe en el segmento en el que está el cursor, y quitar el puntero de la lista te devuelve tu texto y tu selección, exactamente como estaban.
- **Arrastrar una selección fuera del campo** y soltarla en otro sitio no lo cierra. Una pulsación que empieza en el campo pertenece a la edición por lejos que viaje; solo una pulsación que *empieza* fuera es un clic de distancia.
- <kbd>Enter</kbd> confirma — y cuando el campo no nombra absolutamente nada, como en una carpeta vacía donde nunca hubo nada que completar, dice *No hay ningún archivo seleccionado* y permanece abierto en vez de cerrarse como si se hubiera elegido algo. <kbd>Esc</kbd> o un clic en otro sitio cancela de vuelta a la ruta real del archivo. Una sola pulsación de <kbd>Esc</kbd> basta: cierra el desplegable, deja el campo y devuelve el foco a la nota, en vez de necesitar una pulsación por capa.

El campo no tiene adornos — ni caja ni borde — así que se lee como el propio texto de la ruta, y crece solo a medida que escribes.

## Cada parte de la fila, botón por botón

Toda la fila de un vistazo. La columna del clic derecho es lo que te da **una** pulsación; ese botón también cuenta pulsaciones, y [su propia tabla](#clic-derecho-una-pulsación-dos-pulsaciones-tres) más abajo tiene la segunda, tercera y cuarta. Esta asume que **El nombre de la carpeta abre el desplegable** está activado, que es lo predeterminado — con eso desactivado, el nombre de la carpeta y el separador intercambian la primera columna, como dice [la tabla de arriba](#la-ruta).

| Dónde pulsas | Clic | Doble clic | <kbd>Ctrl</kbd>+clic, o clic central | Clic derecho | Soltar algo encima |
| --- | --- | --- | --- | --- | --- |
| El **nombre de la bóveda** | Abre el desplegable de ubicaciones — otras bóvedas, el directorio de usuario, la raíz del sistema de archivos, unidades montadas. Desactivado por defecto; con eso desactivado, revela la bóveda en el Explorador de archivos en su lugar | Marca la **ruta absoluta completa**. Ese desplegable se abre con la ruta ya en el campo y solo la parte de la propia bóveda marcada; una segunda pulsación se extiende sobre el resto. No hay nada que extender con el desplegable desactivado | Una pestaña sin nada, situada en la raíz de la bóveda con la lista ya mostrándose — un lugar donde escribir una ruta desde cero | El menú contextual propio de la bóveda: lo que se puede hacer con la bóveda que nombra ese segmento | Un **archivo** se mueve a la raíz de la bóveda. **Texto** abre el campo en la raíz, para nombrar la nota en que debería convertirse |
| Un **nombre de carpeta** | Selecciona esa carpeta para editarla, con el contenido de su carpeta padre listado debajo | Reescribe esa carpeta y todo lo que hay debajo | Abre esa carpeta en una pestaña nueva | El menú contextual de esa carpeta — el propio del Explorador de archivos | Un **archivo** se mueve a esa carpeta. **Texto** abre el campo ahí, para nombrar la nota en que debería convertirse |
| Un **separador** | Abre la carpeta anterior — su nota de carpeta donde hay un complemento de notas de carpeta en marcha y existe una, o si no, la revela y la expande en el Explorador de archivos | **Crea la nota de esa carpeta** y va a ella, donde hay un complemento de notas de carpeta en marcha y la carpeta aún no tiene ninguna. Donde ya tiene una, esto es solo la pulsación simple de nuevo | La nota de carpeta en una pestaña nueva donde existe una; si no, una pestaña situada en esa carpeta con la lista mostrándose | El mismo menú contextual de carpeta que da el nombre — el de su nota de carpeta, donde tiene una | Al final de la nota de esa carpeta, donde tiene una, en cuanto confirmes |
| El **nombre de la nota** | Abre el nombre para editarlo — las carpetas se quedan como fichas al lado — con todo menos la extensión marcado | Incluye la extensión en la marca también | Abre la nota en una pestaña nueva | El menú contextual del archivo — el mismo que da la fila del Explorador de archivos | Al final de esta nota, en cuanto confirmes |
| El **espacio vacío** | Abre la **ruta completa** para editarla, marcada hasta la extensión. Las carpetas entran en el campo con ella, que es lo que convierte esto en el gesto para reescribir una ruta en vez de un nombre | Incluye la extensión en la marca también | <kbd>Ctrl</kbd> abre esta nota de nuevo en una pestaña propia, resaltada en el Explorador de archivos para que la copia no se confunda con la primera. El clic central *no* es ese gesto: pega sobre la ruta | Marca la ruta entera y ofrece lo que se puede hacer con texto marcado | |

**La segunda pulsación sigue a la primera.** Crear la nota de una carpeta recae en la parte de la fila que *abre* esa carpeta, que por defecto es el separador y, con el intercambio desactivado, el nombre de la carpeta — el mismo objetivo que marca el subrayado, y el mismo que una sola pulsación ya pide para la nota de carpeta. Solo se ofrece mientras hay un complemento de notas de carpeta en marcha, porque una nota de carpeta es una convención y no un hecho sobre el sistema de archivos, y solo donde la carpeta aún no tiene ninguna. Dónde vive y cómo se llama se leen de las propias opciones de **Folder notes**, así que una bóveda que guarda sus notas de carpeta junto a la carpeta, o las llama `_index`, obtiene una de esas; el archivo en sí es siempre Markdown, que es lo que crea el propio comando de creación predeterminado de ese complemento y lo que encuentra sea cual sea el tipo configurado en la bóveda. El modo mover/renombrar queda completamente al margen — nada en la fila abre una carpeta mientras hay un movimiento pendiente.

**Los clics sobre el nombre siguen avanzando.** Los cuatro escalones son los mismos cuatro que recorre la tecla de renombrar, en el mismo orden: el nombre, el nombre con su extensión, la ruta desde la bóveda, la ruta desde la raíz del sistema. Así que un tercer clic llega a la ruta de la bóveda y un cuarto a la de la máquina — las mismas cuatro cosas que te da <kbd>Tab</kbd> pasado el final del campo, y las mismas cuatro que el botón derecho *copia* en vez de seleccionar.

**Pasar el ratón por encima** es su propia respuesta y nunca cambia nada: un nombre abreviado vuelve completo mientras lo señalas, y el icono al principio de la fila indica dónde vive la bóveda.

## Clic derecho: una pulsación, dos pulsaciones, tres

Todos los objetivos de la fila responden a un clic derecho, y cuántas pulsaciones le das decide lo que obtienes. Como podría llegar una segunda pulsación, la primera espera cerca de un tercio de segundo antes de actuar — el coste de meter tres gestos en un solo botón.

| Dónde pulsas | Una vez | Dos veces | Tres veces |
| --- | --- | --- | --- |
| El **nombre de la bóveda** | El menú contextual de la bóveda: lo que se puede hacer con la bóveda que nombra ese segmento — incluido *Abrir esta bóveda*, donde esa bóveda no es la que estás usando | Copia el nombre de la bóveda | Copia dónde está la bóveda — y una cuarta pulsación, dónde está el archivo abierto |
| Un **separador** | El menú de esa carpeta — el de su nota de carpeta, donde hay un complemento de notas de carpeta en marcha y la carpeta tiene una | | |
| Un **nombre de carpeta** | El menú de esa carpeta | Copia el nombre de la carpeta | Lo copia junto con todo lo que hay a su derecha |
| El **nombre de la nota** | El menú del archivo — el mismo que da la fila del Explorador de archivos | Copia el nombre | Lo copia con su extensión |
| El **espacio vacío** | | Copia la ruta desde la carpeta de tu bóveda, sin la extensión | Lo mismo, con ella |

Una sola pulsación sobre el **nombre de la bóveda** abre lo que se puede hacer con lo que nombra ese segmento. Para **la bóveda en la que estás**: abrirla en una ventana nueva, gestionar bóvedas, copiar dónde vive, copiar su ID, mostrarla en tu gestor de archivos. Para **otra bóveda**, alcanzada a través del desplegable de ubicaciones, lo mismo menos la ventana nueva — que abriría *esta* bóveda, no aquella — más lo único que solo puede ofrecer una bóveda en la que no estás: **Abrir esta bóveda**. Obsidian la identifica por su ID en vez de por el nombre de su carpeta, ya que dos bóvedas pueden compartir uno. Para un lugar que no es una bóveda en absoluto — tu directorio de usuario, una unidad montada — no hay ID que copiar ni nada que abrir, y el menú lo indica no ofreciéndolos.

Esto no es el propio menú de tres puntos de Obsidian, que pertenece a la ventana de inicio y no se puede abrir desde dentro de una bóveda en marcha — son las mismas entradas reconstruidas, con las palabras propias de Obsidian, tomadas de sus comandos para que lleguen en tu idioma. Tres de las entradas de ese menú deliberadamente **no** están aquí: *renombrar bóveda*, *mover bóveda* y *quitar de la lista* actúan todas sobre la propia carpeta de la bóveda o sobre el registro de bóvedas de Obsidian, y hacer eso en la bóveda en la que estás — con sus archivos abiertos y sus vigilantes en marcha — es cómo se rompe una bóveda. Abre el gestor de bóvedas (*Abrir otra bóveda*) y hazlo ahí, donde la bóveda está cerrada.

Las dos copias del **espacio vacío** son la fila tal como está escrita — lo que quiere un enlace o una búsqueda — y las del **nombre de la bóveda** son las rutas que conoce el sistema de archivos, que es lo que quiere cualquier cosa fuera de Obsidian. Cada pulsación ahí amplía para qué sirve la copia: dos dan el nombre de la bóveda, tres dónde está la bóveda, cuatro dónde está el archivo abierto. Obsidian traza la misma distinción en sus dos propios comandos, *desde la carpeta de la bóveda* y *desde la raíz del sistema*; aquí las orientadas hacia fuera se sitúan en el segmento que está él mismo fuera de la ruta.

Todo esto también funciona fuera de la bóveda, sobre los mismos objetivos.

Cada copia lo indica con un aviso, porque una copia no deja nada en pantalla que muestre que ocurrió, y una pulsación mal contada no debería parecer una pulsación exitosa.

## Modificadores: abrirlo en otro sitio

El nombre de la nota y los segmentos de carpeta se comportan como sus filas en el Explorador de archivos.

| | En el nombre de la nota | En un segmento de carpeta |
| --- | --- | --- |
| Clic simple | Editar el nombre | Navegar por esa carpeta |
| <kbd>Ctrl</kbd> / clic central | Abrir la nota en una pestaña nueva | Enviar la carpeta a una pestaña nueva |
| <kbd>Ctrl</kbd>+<kbd>Alt</kbd> | Una división | Una división |
| Arrastrar | La nota, a cualquier sitio donde Obsidian acepte un archivo | La carpeta, igual — incluida la barra de pestañas |

Una carpeta no es algo que Obsidian pueda abrir, así que enviar una a una pestaña hace una de dos cosas: abre su nota de carpeta, donde hay un complemento de notas de carpeta en marcha y existe una, o abre una pestaña vacía cuya barra de ruta ya está situada en esa carpeta — dejándote solo el nombre por escribir. Soltar un segmento de carpeta sobre la **barra de pestañas** hace lo mismo, en una pestaña nueva donde sueltes — la barra de pestañas de Obsidian solo acepta archivos por su cuenta, así que una carpeta arrastrada fuera del Explorador de archivos sigue siendo rechazada ahí.

## Tab: completar el nombre, luego la ruta, luego ampliar la selección

<kbd>Tab</kbd> completa como lo hace una terminal: **una pulsación extiende lo que escribiste hasta donde los nombres de esa carpeta coinciden, y se detiene donde discrepan.** Escribe `Sk` donde solo `Sketches` empieza así y la palabra queda terminada; escribe `Al` donde `Alpha-one`, `Alpha-two` y `Alpine` empiezan igual y obtienes `Alp`, porque el siguiente carácter es una pregunta que solo tú puedes responder.

Pulsa otra vez sin escribir nada y avanza hacia un nombre — la fila que el desplegable ha resaltado, o la primera — deteniéndose en la siguiente ambigüedad de ese nombre: `Alpha-`, y luego `Alpha-one`. La lista se abre en el punto donde ya estás, así que en tu propia carpeta la primera pulsación apunta a la nota que tienes abierta en lugar de a la que ordena primero.

**Una pulsación nunca elige entre nombres por ti.** <kbd>Tab</kbd> entra en una carpeta en cuanto lo que escribiste deja una sola candidata, o en cuanto has escrito el nombre completo de la carpeta y ninguna *otra carpeta* lo extiende. Donde sí lo hace — `Schemes` junto a `Schemes2026` — <kbd>Tab</kbd> sigue completando hacia el nombre más largo; <kbd>Intro</kbd> y el desplegable son los gestos que significan *este*.

Un **archivo** nunca detiene así a una carpeta. Una carpeta junto a una nota de su mismo nombre es una nota de carpeta, no una bifurcación en la ruta, y <kbd>Tab</kbd> recorre carpetas — así que `Projects` con un `Projects.md` al lado se atraviesa como cualquier otra.

Dos cosas menores que se derivan de esto: lo que aparece en el campo se escribe tal como lo escribe la carpeta, así que `sk` se convierte en `Sketches`; y solo se reemplaza el nombre que se está escribiendo, así que una ruta con más a la derecha conserva ese resto.

Cuando se ofrece un nombre mientras escribes, <kbd>Tab</kbd> **escribe exactamente lo ofrecido**: lo ofrecido es siempre lo que la pulsación escribiría, y el subrayado y la línea verde del desplegable dicen lo mismo, así que lo que ves tras el cursor es lo que obtienes. Donde los nombres dejan de coincidir, ese es el paso hacia el primero de ellos — o hacia la fila a la que llegaste con las flechas, que <kbd>Tab</kbd> toma en vez de la de al lado — así que usa las flechas para llegar al que quieres, o escribe más allá de la bifurcación, antes de pulsar. Solo donde lo ofrecido deja *un* nombre, la misma pulsación entra en él.

Llegar al nombre del archivo **es** el primer peldaño — ninguna pulsación se gasta en dejar el cursor al final de un nombre a punto de marcarlo. A partir de ahí las pulsaciones dejan de avanzar por la ruta y empiezan a ampliar lo que está seleccionado:

1. el nombre
2. el nombre con su extensión
3. la ruta desde la carpeta de tu bóveda
4. la ruta desde la raíz del sistema
5. de vuelta al principio de la ruta **tal como está ahora** — situado donde empezó el recorrido, con el primer segmento marcado, listo para recorrerse de nuevo

Un cuarto clic llega directamente a ese mismo cuarto peldaño.

Ampliar solo **amplía**. Un nombre que ya está completo en el campo — completado con la misma tecla, o elegido del desplegable — se marca entero en vez de que se le quite primero la extensión: el primer peldaño es para un nombre al que el recorrido acaba de *llegar*, donde la extensión aún no es el asunto.

La escalera es el punto de **llegada** del recorrido, no el de partida. Haz clic en una carpeta en medio de una ruta y el campo se abre con todo lo que hay debajo marcado con el nombre de esa carpeta; cada <kbd>Tab</kbd> avanza entonces **una** carpeta — marcando la siguiente, dejando el resto de la ruta detrás — y solo cuando no queda más que el nombre del archivo empieza la ampliación:

| pulsación | migas | campo | marcado |
| --- | --- | --- | --- |
| clic en `a` | | `a/b/c/leaf.md` | `a` |
| <kbd>Tab</kbd> | `a` | `b/c/leaf.md` | `b` |
| <kbd>Tab</kbd> | `a › b` | `c/leaf.md` | `c` |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf` — el primer peldaño |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf.md` |

**Un nombre que se fija queda fijado, sea como sea que lo fijaste.** Completarlo con
<kbd>Tab</kbd>, confirmarlo con `/`, y elegirlo del desplegable
dejan la fila en el mismo sitio con la misma ruta, así que la pulsación posterior
al gesto significa lo mismo sea cual sea el camino que tomaste. Elegir una carpeta de la
lista solía vaciar el campo en su lugar, descartando una ruta que llegar a la
misma carpeta con <kbd>Tab</kbd> habría conservado.

**Una ruta que todavía estás escribiendo viene entera contigo.** Entrar en la propia carpeta de la que cuelga el resto de la ruta no es afirmar que ese resto exista — es así como se escribe una ruta adelantándose a sí misma, y las carpetas que nombra son las que <kbd>Intro</kbd> está a punto de crear. Así que bajar por `Dokumente/plans/untitled.md` hasta `Dokumente` mantiene `plans/untitled.md` delante de ti, exista `plans` ya o no. Lo mismo vale para una ruta que escribiste desde cero: nada de ella se heredó de ninguna parte, así que nada de ella se retira.

**Cambiar un paso por otro es harina de otro costal, y entonces la ruta te acompaña solo hasta donde realmente existe.** Cambia una carpeta en medio de una ruta por otra hermana — haz clic en `a`, escribe otro nombre, pulsa <kbd>Tab</kbd> — y todo lo que hay debajo viene contigo, porque la ruta en la que estabas suele ser la mayor parte de la ruta que quieres. Solo lo que existe al otro lado sobrevive al cambio, eso sí, así que el campo y el desplegable de al lado nunca se contradicen: lo que queda delante de ti es una ruta que realmente podrías recorrer. Partiendo de `a/b/c/leaf.md`, con `a` clicado y su nombre marcado:

| lo que fijas | migas | campo | marcado |
| --- | --- | --- | --- |
| `x`, que no tiene ningún `b` | `x` | | no vino nada con él |
| `y`, que tiene un `b` pero sin `c` dentro | `y` | `b` | `b` |
| `z`, un gemelo de `a` hasta el final | `z` | `b/c/leaf.md` | `b` |

Una carpeta que queda sola así sigue siendo una carpeta en la que entrar: la pulsación siguiente entra en ella, en vez de empezar a ampliar una selección sobre su nombre.

Un nombre que **nada** en la carpeta coincide se responde de otra manera, porque nada se ha fijado con él: la pulsación marca lo que escribiste, listo para que escribas encima, en vez de responder con otro lugar.

Todo el conjunto es un **bucle, y dar la vuelta no cuesta nada**: la pulsación tras el último peldaño devuelve la fila al principio de la ruta, carpetas incluidas, lista para recorrerse otra vez. Lo único que sale de la fila alguna vez es el prefijo absoluto, en la pulsación que deja de mostrarlo.

Lo que vuelve es **la ruta que construiste**, no la de partida. Bifurca el recorrido a mitad de camino — elige otro hermano del desplegable, completa hacia otro nombre — y la vuelta se cierra sobre donde realmente estás; los cuatro peldaños anteriores describen esa misma ruta, y este solía ser el peldaño impar que describía el pasado.

<kbd>Shift</kbd>+<kbd>Tab</kbd> cierra el mismo círculo al revés: al principio de la ruta, sin nada más que devolver y sin nada más arriba, la siguiente pulsación salta al peldaño **lejano** — la ruta desde la raíz del sistema — y sigue estrechándose desde ahí. Ninguna dirección llega a un callejón sin salida.

Tampoco gasta ninguna pulsación en un peldaño que ya ha mostrado. Por debajo del último peldaño — el nombre sin su extensión — la escalera se acaba, y *la misma pulsación* sale de la carpeta: la ruta desde la raíz del sistema, la ruta desde tu bóveda, el nombre, el nombre sin su extensión, y luego la carpeta, un paso cada vez.

Tampoco se gasta ninguna pulsación en un peldaño que no cambia nada: hacer clic en el nombre de una nota ya lo muestra sin su extensión, que es lo que muestra el primer peldaño, así que desde ahí <kbd>Tab</kbd> empieza en el segundo.

Cada peldaño cambia lo que hay *en* el campo, no solo lo que está resaltado — una selección tiene que estar sobre el texto que nombra, o <kbd>Intro</kbd> confirmaría algo distinto de lo que a la vista está seleccionado. La escalera pertenece a una sola sesión de edición: haz clic fuera, o escribe cualquier cosa, y el siguiente <kbd>Tab</kbd> vuelve a completar un nombre.

### <kbd>Shift</kbd>+<kbd>Tab</kbd>: el mismo camino hacia atrás

<kbd>Shift</kbd>+<kbd>Tab</kbd> deshace un paso por pulsación, en el orden en que se dieron las pulsaciones: la selección se estrecha un peldaño cada vez, cada completado se devuelve, y de cada carpeta se sale — su nombre vuelve al campo para que lo edites en vez de tener que reescribirlo.

**Nada se borra en el camino de vuelta.** Un completado se devuelve *marcando* los caracteres que añadió, igual que al ir hacia delante se marca lo que se ha ampliado — el nombre sigue delante de ti, y cada pulsación adicional marca un paso más de él:

| | campo | marcado |
| --- | --- | --- |
| al llegar | `Alpha-one` | |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `ha-one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `Alpha-one` |

Escribir reemplaza la parte marcada, como en cualquier otro sitio. <kbd>Tab</kbd> repone exactamente lo que la marca devolvió, así que dar dos pasos hacia fuera y dos hacia dentro otra vez te devuelve donde estabas.

Una vez marcado el nombre entero ya no queda nada que haya puesto una pulsación, y la siguiente pulsación sube *por la ruta*: sale de la carpeta en la que estás, igual que hace <kbd>Retroceso</kbd> en un campo vacío. Eso tampoco cuesta nada — el nombre de la carpeta vuelve al campo **delante de** lo que hubiera en él, marcado, que es el mismo texto que te habría dado hacer clic en esa carpeta. Atrás es una dirección y no un historial de deshacer — pero marcar antes el nombre hace que una sola pulsación nunca deshaga a la vez lo que escribiste y te saque de la carpeta en la que lo escribiste.

El texto que se abre **ya seleccionado** — lo que deja tras de sí un clic en una carpeta — es el nombre sobre el que <kbd>Tab</kbd> trabaja después: se completa y se entra en él como en cualquier otro caso, y escribir lo reemplaza. Solo el comando de enfoque se abre sobre un peldaño de la escalera en sí, porque te muestra la ruta entera en vez de una carpeta en la que entrar.

## Escribir algo que no es una ruta

| Lo que escribes | Lo que sucede |
| --- | --- |
| `https://…` | Se abre en una pestaña nueva en el **visor web** de Obsidian, si tienes activado ese plugin nativo; si no, en tu navegador de escritorio |
| `obsidian://…` | Se entrega al gestor de URI del propio Obsidian |
| `file:///…` | Se decodifica y se abre: como nota de verdad si está dentro de tu bóveda, en el visor si no |
| `/home/tu/a%20b.md` | Lo mismo, para una ruta pegada desde un navegador o un gestor de archivos |

Solo cuentan los esquemas explícitos — una nota llamada `100%20` sigue siendo una nota. Una `/` que pertenece a un esquema se queda literal en vez de descender a una carpeta, así que una URL se puede escribir a mano y no solo pegar.

## Un comando para el teclado

**Enfocar la barra de ruta** abre el campo sobre el nombre de la nota y lo recorre igual que hace <kbd>F2</kbd> — el nombre, el nombre con su extensión, la ruta desde tu bóveda, la ruta desde la raíz del sistema — y la pulsación siguiente cierra el campo y devuelve el cursor a la nota. No renombra: Intro navega, como en cualquier otro campo. No tiene tecla propia de fábrica, porque las directrices de Obsidian desaconsejan que los plugins se apropien de una; la fila **Atajos de teclado** al final de las opciones de este plugin abre *Opciones → Atajos de teclado* mostrando solo sus comandos, así que puedes asignarla ahí.

## La navegación nunca toca el archivo abierto

En el modo predeterminado (navegación) la nota abierta **nunca** se renombra ni se mueve.

- Una ruta que corresponde a un archivo existente lo abre.
- Una ruta que aún no existe simplemente se crea, junto con las carpetas superiores que falten, y se abre. Todo archivo y carpeta creados así lo indican en un aviso — una carpeta nueva es, si no, invisible hasta que la buscas — y la papelera del propio Obsidian hace que deshacer una no deseada sea cuestión de una pulsación.
- **Fuera de tu bóveda, sigue preguntando primero.** Ahí fuera, la misma errata escribe en una carpeta del sistema, donde ni el aviso ni la papelera de Obsidian sirven de mucho consuelo.

## <kbd>Ctrl</kbd> — pestaña nueva, y copiar en vez de mover

Una nota **creada, movida o copiada dentro de la bóveda se muestra donde ha aterrizado** en el Explorador de archivos, marcada un instante con el color de acento de Obsidian — el árbol es donde la buscas después, así que se pone delante de ti en vez de dejarla en una carpeta que puede ni siquiera estar abierta. Duplicar también lo indica así: una copia deja el original donde estaba y abre la copia en su propio panel, lo cual sin ningún aviso sería fácil de leer como si no hubiera pasado nada.

Mantener <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> en macOS) mientras eliges un archivo del desplegable, o mientras pulsas <kbd>Intro</kbd> sobre una ruta, manda el resultado a una **pestaña nueva** en lugar de a esta:

| | Sin más | Con <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Elegir o escribir un archivo existente | Se abre aquí | Se abre en una pestaña nueva |
| Escribir una ruta que no existe | Pregunta y luego abre aquí | Pregunta y luego abre en una pestaña nueva |
| Confirmar una ruta en modo renombrar/mover | **Mueve** la nota allí | La **copia** allí y abre la copia en una pestaña nueva |

El modificador se lee con la regla del propio Obsidian, así que se comporta exactamente igual que sobre un enlace o una fila del Explorador de archivos — el clic central también significa «pestaña nueva», <kbd>Ctrl</kbd>+<kbd>Alt</kbd> significa una división y <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Mayús</kbd> una ventana nueva.

Copiar se niega a sobrescribir, exactamente igual que mover — incluso sobre la propia ruta de la nota, donde no hay nada sensato que copiar. Fuera de la bóveda, esa negativa también se anuncia en voz alta.

Todo esto funciona **con el desplegable abierto** igual que sin él: sobre una fila resaltada el modificador se aplica a esa fila, y sin nada resaltado se aplica a lo que escribiste.

## Navegar fuera de la bóveda

**Esto está desactivado por defecto.** Activa antes **Acceso a archivos externos** en las opciones — leer y escribir fuera de la bóveda es lo único que hace este plugin y que Obsidian por sí solo no hará, así que se entra en ello a propósito en vez de tener que salirse. Con la opción desactivada, el nombre de la bóveda simplemente muestra tu bóveda en el Explorador de archivos, y aquí nada mira nunca más allá.

Al hacer clic en el **nombre de la bóveda** (o en el icono 🏠, cuando *Mostrar el nombre de la bóveda* está desactivado) se abre un desplegable de lugares, no de contenidos. El campo que se abre contiene **toda la ruta en la que estabas, escrita entera**, con el lugar de partida seleccionado — así que elegir otro sitio, o escribir sobre la selección, solo cambia esa parte inicial y deja el resto de la ruta delante de ti. **Pulsa el nombre una segunda vez** — un doble clic — y la marca se extiende sobre todo él, que es como se toma la ruta absoluta de un solo gesto en vez de seleccionarla a mano. Si te arrepientes, <kbd>Esc</kbd> devuelve la fila a como estaba.

Escribir aquí ofrece el resto del nombre de un lugar como en cualquier otro sitio, y <kbd>Tab</kbd> **fija ese lugar** — aquel al que apuntas, o aquel al que el nombre solo puede referirse. Donde varios lugares todavía comparten lo que has escrito, la pulsación se detiene en la bifurcación, como en todas partes. Apuntar a un lugar muestra **la propia ruta de ese lugar**, toda ella seleccionada, seguida de la ruta de tu nota solo hasta donde de verdad llega allí — que es exactamente donde te dejaría elegirlo. Un lugar no es un paso dentro de la ruta en pantalla, sino un sitio desde el que contar toda la ruta, así que nada de dónde estabas queda delante de él.

Los lugares disponibles:

- **Tus otras bóvedas**, leídas del registro del propio Obsidian, primero la abierta más recientemente, cada una bajo el icono de bóveda de Obsidian — el mismo que usa la aplicación para sus comandos de bóveda. La bóveda que ya tienes abierta lleva una casa en su lugar: es de donde parte la fila por defecto, no un sitio al que ir.
- **La carpeta personal**, bajo el nombre de tu cuenta, marcada con una `~`. Lucide no tiene tilde, así que este icono lo dibuja el plugin sobre la propia retícula de 24×24 de Lucide y con el mismo grosor de trazo — un icono que le falta al conjunto, no un carácter de texto puesto entre iconos.
- La **raíz del sistema de archivos**, etiquetada `root` — sin traducir, porque ese es su nombre en todos los sistemas — en vez de `/`, que junto al separador que viene después se leería como un paso vacío.
- Las **unidades montadas**, con un icono por tipo allí donde averiguarlo sale barato: los recursos de red, los discos ópticos, los disquetes y los medios extraíbles tienen el suyo; cualquier otra cosa recibe una unidad genérica. En Windows las unidades aparecen como `C:` con un icono genérico — los nombres de volumen y los tipos exactos exigen WMI, que a propósito no se usa.

Elegir otra bóveda **no cambia Obsidian a ella.** Todo lo que tengas abierto sigue abierto; la ruta simplemente empieza a navegar por allí. Esa es toda la razón de tenerlo en la barra de ruta en lugar de remitir al selector de bóvedas de la barra lateral.

También aterriza **tan cerca de la nota en la que estás como ese lugar realmente llegue**.

- Si el lugar que elegiste *contiene* la nota — la carpeta personal, o donde vivan tus bóvedas — obtienes su ruta desde ahí: elige `~` con `resumen.md` abierto y el campo dice `Bóvedas/tu-bóveda/resumen.md`.
- Si es un lugar junto a este — otra bóveda, otra unidad — se prueba la misma ruta relativa, tan a fondo como realmente exista. Las bóvedas suelen ser casi copias unas de otras, y el motivo para saltar a una suele ser esa misma nota allí.

En ambos casos la fila se queda en el lugar que elegiste y **la primera carpeta de esa ruta se abre seleccionada**, la misma forma que da hacer clic en una carpeta: el paso que más probablemente cambiarás al saltar a otro sitio es el más cercano al principio, y el resto de la ruta sigue visible mientras lo cambias. Nunca se rellena nada previamente que no esté de verdad en disco.

### Mientras estás fuera

La ruta **empieza en el lugar que elegiste**, no en la disposición de directorios de la máquina — y lo mismo el campo que obtienes al hacer clic en el espacio vacío o al pulsar la tecla de foco: contiene la ruta desde ese lugar, no la absoluta de la máquina, con el recorrido colapsado hasta el propio lugar exactamente igual que colapsa hasta la raíz de la bóveda dentro — elige `Archivo` y la fila dice `Archivo / notas / …`, no `/home/tu/Bóvedas/Archivo/notas/…`. El segmento inicial lleva un icono según lo que sea (bóveda, carpeta personal, unidad), y <kbd>Retroceso</kbd> se detiene ahí en vez de seguir subiendo por el resto del sistema de archivos. Con *Mostrar el nombre de la bóveda* desactivado, ese segmento es solo el icono — la opción trata sobre el segmento inicial de la fila, sea cual sea la bóveda que nombre, no solo la tuya.

La barra de ruta queda **enmarcada en el color de error** — el mismo anillo que dibuja el modo renombrar — todo el tiempo que apunte fuera de tu bóveda. Marca una condición permanente, no un instante: mientras está ahí, nada del manejo propio de Obsidian se aplica a lo que muestra la fila, y la escritura está bloqueada hasta que digas otra cosa.

Por lo demás la navegación funciona como dentro: fichas, separadores, escritura, autocompletado, <kbd>Retroceso</kbd> para salir. También se aplican las mismas reglas de visibilidad, así que las extensiones no admitidas siguen necesitando **Mostrar todos los tipos de archivo** de Obsidian y los archivos ocultos siguen necesitando la opción de este plugin.

**El clic derecho también funciona ahí fuera**, aunque es un menú distinto: los propios manejadores del Explorador de archivos necesitan un archivo que la bóveda conozca, así que las entradas de fuera se construyen a partir de la ruta. Ofrecen abrir (aquí, a la derecha, en una ventana nueva, o en la aplicación predeterminada de tu escritorio), *Copiar ruta*, *Mostrar en el explorador del sistema*, y — una vez abierto el candado — *Nueva nota*, *Nueva carpeta*, *Hacer una copia*, *Cambiar nombre…* y *Eliminar*. **Arrastrar** sigue necesitando un archivo de la bóveda y sigue sin estar disponible.

El mismo menú está en el archivo abierto en el visor, mediante clic derecho o desde los tres puntos del propio panel, y consulta el candado del encabezado de esa vista. No pregunta nada más: que el archivo se esté renderizando o mostrando como código fuente no afecta a si se puede eliminar, y una imagen o un PDF — que no tienen vista de código fuente en absoluto — son tan eliminables como una nota. *Eliminar* significa la papelera del escritorio, así que se puede deshacer desde ahí; un sistema sin papelera informa de eso en vez de destruir el archivo.

Eliminar fuera de la bóveda mueve el archivo a tu **papelera del sistema** — la Papelera de reciclaje en Windows, Papelera en macOS — nunca un desenlazado directo. Aquí fuera no hay papelera de Obsidian de la que recuperarlo, así que una eliminación que no se pudiera deshacer directamente no se ofrece: donde una plataforma no tiene papelera, el intento informa del fallo en vez de destruir el archivo.

### Escribir fuera de la bóveda

Todo lo que escribe está **bloqueado por defecto**. Mientras la fila apunte fuera de tu bóveda, el lugar del interruptor de renombrar en el encabezado lo ocupa un **candado rojo** — el mismo color que el anillo alrededor de la fila, y por el mismo motivo: marca un rechazo. Los dos son un único control en un único sitio, así que nunca hay duda de cuál de ellos controla qué.

Tres pulsaciones, en un ciclo:

| Pulsación | Qué obtienes |
| --- | --- |
| El candado rojo | Se permite escribir aquí. El candado es sustituido por el interruptor de renombrar/mover |
| El interruptor | Modo renombrar/mover, exactamente igual que dentro de la bóveda |
| El interruptor otra vez | El modo termina y el candado se cierra de nuevo — el permiso no sobrevive a aquello para lo que se abrió |

**La tecla de renombrar también consulta el candado.** Fuera de tu bóveda, pulsarla hace que el candado destelle abierto y cerrado en vez de abrir un modo que cada confirmación rechazaría: el rechazo llega antes del trabajo, no después. Pulsa el candado, o pulsa la tecla de renombrar otra vez en medio segundo — la segunda pulsación concede exactamente lo que concede el botón, para este lugar, y abre con ello el modo renombrar.

Dentro de tu bóveda no hay candado: no hay nada que desbloquear, y el interruptor simplemente ocupa el sitio.

El permiso se concede **a un lugar, no a un instante**: sobrevive a todo lo que harías trabajando en un mismo sitio — terminar un movimiento, hacer clic fuera del campo, abrir un archivo — y termina cuando eliges otra bóveda, unidad o raíz en el desplegable, cuando la fila vuelve a un archivo de la bóveda, o en esa tercera pulsación. Así que una serie de movimientos dentro de una misma carpeta cuesta una pulsación, no una por archivo.

Con el candado abierto, la barra de ruta se comporta ahí fuera como lo hace dentro:

| Gesto | Resultado |
| --- | --- |
| Escribir un nombre que no existe, <kbd>Intro</kbd> | El mismo aviso de «¿crearlo?» que dentro; también se crean las carpetas que falten. Un nombre sin extensión se convierte en `.md`, exactamente igual que dentro |
| Modo renombrar/mover, escribir un nombre nuevo | Renombra el archivo que muestra la fila. Un nombre sin extensión conserva la del archivo — aquí fuera una carpeta contiene toda clase de archivos, y un renombrado no debería convertir en silencio un `.png` en un `.md` |
| Modo renombrar/mover, navegar a otro sitio y elegir **conservar este nombre** | Lo mueve allí con el nombre que ya tiene |
| Mantener <kbd>Ctrl</kbd> en cualquiera de los dos | Copia en vez de mover, y abre la copia en una pestaña nueva |

Con el candado cerrado, todo eso informa de qué lo impide en lugar de ocurrir. En ninguno de los dos estados se sobrescribe nada: un destino que ya existe se rechaza, y el rechazo es del propio sistema de archivos (`COPYFILE_EXCL`, una creación exclusiva) y no una comprobación que podría perder la carrera. Un movimiento entre sistemas de archivos — desde un USB, desde un recurso de red — recurre a copiar y luego borrar, y el original solo se elimina cuando la copia ha llegado a su sitio.

**Mover una nota *fuera* de tu bóveda pregunta antes.** `fileManager` no puede seguir un archivo a través de ese límite: todos los enlaces que apuntan a la nota dejan de resolverse, nada los actualiza, y la nota sale del índice de la bóveda. Así que el movimiento se ofrece como una decisión en lugar de rechazarse o hacerse en silencio — un diálogo indica qué cuesta y cuántas notas enlazan a la que estás moviendo. Confirma y realmente se mueve: se copia fuera, y luego se elimina de la bóveda mediante el propio borrado de Obsidian, así que es recuperable exactamente igual que una nota eliminada, y un fallo en cualquiera de los dos pasos deja la nota donde estaba. Mantener <kbd>Ctrl</kbd> sigue copiándola fuera en vez de moverla, lo que no tiene ese problema. Ir en el otro sentido — traer un archivo externo *a* la bóveda — todavía no está implementado.

### Abrir un archivo externo

Navegar por el sistema de archivos puede volver **a la bóveda que tienes abierta** — desde la raíz, desde la carpeta personal, desde donde sea que vivan tus bóvedas. Un archivo al que se llega así es una nota corriente, así que se abre como tal: el editor de verdad, enlaces y retroenlaces, y la fila vuelve de golpe a la ruta con raíz en la bóveda. Solo los archivos para los que Obsidian no tiene vista se quedan en la vista previa, porque ahí fuera la vista previa es la mejor respuesta. Donde una vista previa muestra de todos modos una nota así — un espacio de trabajo reabierto, por ejemplo — su línea superior ofrece **Abrir en *(bóveda)***, que es la misma oferta que harías a mano.

El editor de Obsidian solo funciona con archivos de dentro de la bóveda, así que un archivo externo **no puede** abrirse como una nota de verdad con enlaces, retroenlaces y lo demás — es un límite de la aplicación, no de este plugin. Al elegir uno se abre una **vista previa**, de solo lectura hasta que digas otra cosa:

| Tipo | Se muestra como |
| --- | --- |
| `.md`, `.markdown` | Markdown renderizado |
| `.html`, `.htm`, `.xhtml` | La página renderizada |
| Imágenes, audio, vídeo, PDF | Reproductor/visor nativo |
| Cualquier otro archivo de **texto** (`.json`, `.css`, `.log`, `.txt`, …) | Texto plano tal cual |
| Formatos binarios sin visor (`.zip`, `.exe`, …) | Se pasa a *Abrir en la aplicación predeterminada* |

El visor tiene dos lecturas de un archivo y, como se excluyen entre sí, solo se muestra aquella **a la que** cambiarías:

| | Qué hace | Predeterminado para |
| --- | --- | --- |
| **Ver como Markdown** | Renderiza el archivo como una nota, de solo lectura | `.md`, `.markdown` |
| **Ver como página** | Renderiza el archivo como la página que es, de solo lectura | `.html`, `.htm`, `.xhtml` |
| **Editar como texto** | El código fuente, editable | todo lo demás |

Fuera de la bóveda, **Editar como texto** es además la pulsación que levanta el solo lectura — el modo y el permiso son un mismo gesto en lugar de dos botones sobre los que razonar. Se tiñe de rojo **siempre que pulsarlo levantaría el solo lectura**, tanto si estás armando la edición ahí mismo como si vienes directo de la vista renderizada; dentro de la bóveda no hay nada que desbloquear, así que se queda normal. **Ver como Markdown** recibe un lavado de color de acento suave — el mismo tinte que Obsidian da al texto seleccionado — señalándolo como el camino de vuelta y no como una llamada a la acción.

Como el botón sigue la *edición* y no el modo bruto, un archivo que está en solo lectura en la vista de texto sigue ofreciendo **Editar como texto**: esa es la pulsación que la arma. Un archivo en el que nunca se podrá escribir — truncado o ilegible — dice en cambio **Ver como texto**, ya que eso es todo lo que la pulsación puede dar.

Los valores predeterminados son los útiles y no los literales: una `#` en un script de shell es un comentario, no un encabezado, así que renderizar un `.log` como Markdown se lo tragaría sin más. Cualquiera de los dos se puede cambiar archivo por archivo, y la elección se guarda en el historial de la pestaña, así que atrás/adelante y un espacio de trabajo reabierto la conservan — muchas notas viven en archivos `.txt`, y muchos archivos `.md` se leen mejor como código fuente.

#### Qué se le permite hacer a una página HTML

Nada. La página se muestra en un marco con **todos los permisos denegados** — sin scripts, sin formularios, sin navegación, sin origen propio — y una política de contenido que no le permite red alguna. No es precaución porque sí: una página local cargada de la manera habitual compartiría el origen de esta ventana, y esta ventana es Obsidian, así que un script en un archivo HTML descargado estaría corriendo dentro de tu aplicación con el alcance de tu aplicación.

Lo que eso cuesta es cualquier cosa que la página *haga*; lo que conserva es todo lo que la página *es*. Las hojas de estilo y las imágenes que están junto al archivo se leen y se llevan al marco, así que una página guardada sigue pareciéndose a sí misma. Las referencias que apuntan fuera de la propia carpeta de la página, y las referencias a algún lugar de la web, se dejan exactamente como están escritas y simplemente no se cargan — un archivo local no puede avisar en silencio a un servidor de que lo has abierto.

Los scripts se **eliminan** en vez de simplemente bloquearse, para que la página que ves y el código fuente al que puedes cambiar difieran de una única manera declarada en lugar de en lo que sea que el marco haya decidido no ejecutar en silencio. Los enlaces dentro de la página no hacen nada. Cuando quieres lo de verdad — scripts, red y todo — *Abrir en la aplicación predeterminada* se lo pasa a tu navegador, que es la herramienta adecuada para eso.

**Los archivos de tu bóveda son editables de entrada**, sin desbloqueo: *Editar como texto* es un editor de verdad y guarda a medida que escribes.

**La edición se recuerda al cambiar de lectura.** Ir a *Ver como Markdown* la suspende — un render estático no tiene dónde escribir, y la Vista previa en vivo necesita el editor propio de Obsidian, que solo existe para archivos de dentro de la bóveda — así que nada afirma que estás editando mientras estás ahí. Al volver a *Editar como texto* se retoma donde lo dejaste.

**Los archivos de fuera de la bóveda se abren en solo lectura, y *Editar como texto* levanta eso.** La pulsación es toda la barrera: hasta que ocurre, ahí fuera no se escribe nada. Después el archivo se guarda a medida que escribes, exactamente como uno de la bóveda; y la línea de estado pasa de un candado a un lápiz. El desbloqueo cubre ese archivo en esa pestaña — navegar a otro archivo vuelve a bloquear, y a propósito no se guarda en el historial de la pestaña, para que un espacio de trabajo reabierto nunca vuelva con la escritura ya armada sobre un archivo del sistema que no recuerdas haber abierto.

**Los archivos truncados siguen siendo de solo lectura pase lo que pase** — guardar lo que se ve en pantalla descartaría todo lo que hay más allá del límite, así que el botón directamente no se ofrece en lugar de ofrecerse y rechazarse. Lo mismo vale para un archivo que no se pudo leer: no hay nada que devolver a disco salvo un panel vacío.

Si la escritura falla — un punto de montaje de solo lectura, un archivo que no es tuyo — se muestra en un aviso el motivo que da el propio sistema.

Los archivos muy grandes se muestran truncados, y la línea de estado lo dice en vez de dejar que lo descubras — junto a las demás condiciones y no colgando de los botones, porque es un hecho sobre el archivo como los otros. Los límites se miden contra un renderizador real y no a ojo — colocar un megabyte de texto en un solo panel mata en seco el proceso de renderizado de Obsidian, y el Markdown cuesta varias veces más por byte que el texto plano, así que cada uno tiene su límite y una única línea enorme se acorta aunque el archivo entero sea pequeño.

**Las líneas de estado son etiquetas, y la explicación es un mensaje emergente.** Cada línea dice lo que es cierto con las palabras justas — *Fuera de tu bóveda*, *Sin editor para este tipo de archivo*, *Truncado: archivo demasiado grande* — porque los botones que tiene al lado ya dicen en qué estado está el archivo. Al pasar el ratón por encima aparece la frase: por qué Obsidian no puede abrirlo como nota, qué le pasaría si no a este tipo de archivo, qué te cuesta el truncado.

Esto vale también para los archivos de **dentro** de tu bóveda. Obsidian pasa cualquier extensión para la que no tenga vista directamente a la aplicación predeterminada del escritorio — así que un `.txt` o un `.json` de tu bóveda te sacaría de Obsidian por completo. Ahora esos se abren en el mismo visor, con el anillo naranja, porque «ábrelo en Obsidian» es lo que pediste — y, al ser archivos de la bóveda, ahí se pueden editar sin ningún desbloqueo. Los archivos binarios sin visor conservan el comportamiento de Obsidian; no hay nada que mostrar.

La vista previa se abre **en la pestaña en la que estabas**, así que atrás/adelante te devuelven a la nota de la que venías; mantén <kbd>Ctrl</kbd> para una pestaña nueva, como en todas partes. La barra del encabezado sigue mostrando la ruta del archivo externo mientras está abierto, para que puedas seguir navegando desde ahí.

Una línea discreta encima del contenido ofrece las salidas:

- **Abrir en *(bóveda)*** — se muestra cuando el archivo pertenece a una de tus otras bóvedas. Se lo pasa al propio manejador de URI de Obsidian, que abre la ventana de esa bóveda con la nota dentro, como una nota real editable. Esta ventana se deja exactamente como estaba; nada cambia bajo tus pies.
- **Ver como Markdown** / **Ver como página** / **Editar como texto** — las dos lecturas que tiene este archivo; la última también levanta el solo lectura fuera de la bóveda.
- **Abrir en la aplicación predeterminada** — le pasa el archivo a la aplicación predeterminada de tu escritorio, incluidos los formatos binarios que este visor no puede mostrar. Redactado exactamente igual que la propia entrada de Obsidian para la misma acción, porque es la misma acción.

El visor también responde al **clic derecho**: dentro del editor de texto con *Cortar* / *Copiar* / *Pegar* / *Seleccionar todo*, y en cualquier otro sitio con el menú propio del archivo. El menú de tres puntos de Obsidian en el encabezado también lleva ese menú — fuera de la bóveda, de lo contrario, no ofrecería nada salvo *Dividir a la derecha* y *Dividir abajo*.

Nada de fuera de tu bóveda se escribe si no pulsas antes *Editar como texto*. Véase la sección [Fuera de la bóveda](README.es.md#fuera-de-la-bóveda) del README para la explicación completa.

## Soltar un archivo sobre una carpeta en la ruta

Cada carpeta de la fila es un destino para soltar, así que **una nota
arrastrada sobre una se mueve allí** — el trayecto más corto es entre una nota
y cualquier carpeta por encima de ella, ya que el destino ya está en
pantalla. Arrastra desde el Explorador de archivos, desde el desplegable,
desde el propio nombre de la nota en la cabecera, o desde cualquier otro
lugar de Obsidian que produzca un archivo: es el propio arrastre de la
aplicación, así que la etiqueta al pasar el cursor, el puntero y el resaltado
son los que dibuja el Explorador de archivos.

**El nombre de la bóveda también acepta que se suelte algo**, ya que es la
carpeta en lo alto de la fila — el único gesto que pone una nota en la raíz
de la bóveda desde aquí.

**Toda una selección puede arrastrarse a la vez**, y se mueve como una sola
unidad: si alguno de los elementos no pudiera aceptarse, se rechaza el
soltado en vez de mover unos y omitir el resto en silencio.

Los enlaces siguen a la nota, exactamente igual que cuando se mueve desde el
Explorador de archivos o escribiendo una ruta.

Una carpeta que **no pudiera aceptar el soltado no ofrece nada propio** — ni
etiqueta de *Mover a*, ni resaltado en la carpeta — en vez de ofrecer algo
que luego fallaría; en su lugar aparece la propia respuesta de Obsidian para
la cabecera, *Abrir en esta pestaña*. Tres casos:

- la carpeta en la que el archivo **ya está**, ya que ya está ahí;
- una carpeta soltada **sobre sí misma o sobre uno de sus descendientes**,
  lo que la dejaría sin lugar de origen;
- una selección que contiene **una carpeta y algo dentro de ella**, ya que
  mover la carpeta se lleva consigo al hijo.

Una carpeta que ya contiene un **archivo del mismo nombre** acepta el
soltado y pregunta qué hacer con el que está en medio, con el mismo diálogo
que un nombre tomado escrito o elegido — mira [Un nombre que está
tomado](#un-nombre-que-está-tomado). Nada aquí sobrescribe.

Solo las carpetas **dentro de tu bóveda** aceptan soltados. Mientras la fila
apunta fuera de la bóveda sus segmentos rehúsan, porque sacar una nota de la
bóveda rompe todos los enlaces hacia ella — una decisión que merece una
pregunta y no un gesto. La forma de hacerlo deliberadamente sigue siendo
escribir la ruta, que pregunta antes y te dice a cuántas notas afectaría.

## Soltar texto o un archivo para escribirlo

Los mismos destinos aceptan también **contenido**, además de archivos, y los
dos se distinguen por lo que estás arrastrando y no por dónde lo sueltas.

**Sobre una nota que la fila ya nombra** — el propio nombre de la nota, o un
separador cuya carpeta tiene una nota de carpeta — lo que soltaste va al
final de ella, tras una línea en blanco. Pregunta antes, porque esto escribe
en un archivo que ya existe y arrastrar es un gesto que una mano poco firme
puede hacer por accidente. Funciona texto de un editor, un archivo de tu
escritorio y una nota arrastrada fuera de esta bóveda; un archivo se lee
como texto, y uno binario se rechaza en vez de pegarse como una pantalla
llena de sinsentido.

**Sobre un lugar — el nombre de la bóveda o una carpeta —** no se escribe
nada todavía, porque nada se ha nombrado. El campo se abre ahí conteniendo
lo que soltaste, y el nombre que escribes es lo que lo confirma: una nota
nueva se *crea* con el texto, y a una ya existente se le pregunta
exactamente como arriba. <kbd>Esc</kbd>, o un clic en otro lugar, suelta
todo el asunto.

**La fila se ilumina en azul** mientras un arrastre que acabaría como
contenido está sobre ella, y sigue en azul mientras el campo contiene uno —
el mismo azul, diciendo lo mismo: lo que pasa a continuación tiene que ver
con el texto que llevas. Un archivo arrastrado desde tu propia bóveda sobre
una carpeta sigue significando *muévelo ahí*, conserva el propio resaltado
de Obsidian, y nunca se ilumina en azul; ese gesto estaba ahí primero y el
contenido se aparta de él.

## Cuando la ruta es más larga que el panel

Los nombres se **acortan en vez de apretarse**, en el orden de lo que menos
probablemente necesites:

1. **Primero el nombre de la bóveda**, hasta quedar en su icono. Sabes en
   qué bóveda estás; el icono sigue diciendo dónde empieza la ruta.
2. **Luego la extensión del archivo**, si la tienes activada — los mismos
   tres caracteres en casi todos los archivos de una bóveda. Se va entera en
   vez de acortarse: media extensión no dice nada que ninguna extensión no
   diga.
3. **Luego las carpetas, la más larga primero.** El nombre de carpeta más
   largo se acorta hasta la longitud del siguiente más largo, luego ambos
   juntos, y así sucesivamente, cada uno deteniéndose en su suelo — así una
   carpeta muy larga cede todo lo que tiene de más frente a las demás antes
   de que un nombre corto a su lado pierda una letra.
4. **El propio nombre del archivo al final**, y conserva unos seis
   caracteres. Es para lo que está la cabecera.

El espacio se cede **de forma continua**, en fracciones de píxel y no letra
a letra: un nombre que cede se recorta en el píxel y se difumina bajo su
`…`, así que un panel arrastrado despacio estrecha la fila con suavidad y
nada después se mueve a saltos. Antes de que se vaya ninguna letra, se gasta
el aire alrededor de los separadores — es el único espaciado de la fila y no
cuesta ninguna información — y un nombre acortado termina donde empieza el
separador, sin ninguna franja de caja vacía entre los dos.

**El campo toma lo que contiene.** Abrir uno para escribir una ruta no
aparta a empujones las carpetas de al lado: es tan ancho como el texto que
contiene y crece mientras escribes, así que el rastro conserva todo lo que
el campo no necesita. Solo cuando no hay suficiente para ambos la fila se
desplaza, y entonces el campo es lo único que nunca cede — es texto que se
está editando, no un nombre que se está ajustando.

Nada se recorta más allá de lo que lo distingue de sus vecinos:
`Proyectos2025` y `Proyectos2026` en la misma carpeta se reducen a `…025` y
`…026` en vez de a un prefijo que los volvería la misma palabra, mientras
que `Informes` junto a `Ingresos` puede reducirse a `In…` según haga falta.
Además de eso, cada nombre conserva un **ancho legible** — el equivalente a
unas cuatro letras para una carpeta y seis para un nombre de archivo,
medido en la fuente en la que la fila realmente se dibuja y no contado.
Cuatro letras estrechas y cuatro anchas no son la misma cantidad de nombre,
así que `lilliliillil` puede conservar más de sí mismo que `WWMMWWMMWWMM`,
y lo que queda en pantalla ocupa el mismo tamaño en ambos casos. Los
nombres cortos se dejan del todo en paz — un nombre reducido a `A…` es
único y sigue siendo ilegible. **Los espacios no cuentan para esto.** Seis
caracteres para decir qué archivo es este son seis caracteres que merece la
pena leer, así que los espacios en blanco entre ellos viajan gratis y uno
nunca queda pegado al `…`, donde de todos modos sería invisible.

**Un nombre se corta donde sus vecinos coinciden con él, y por el medio
donde no coinciden en ningún sitio.** Dos carpetas llamadas
`aaaa-comun-uno` y `aaaa-comun-dos` comparten todo salvo sus últimos tres
caracteres, así que cortar la cola conserva la mitad que no dice nada: se
reducen a `…uno` y `…dos`, lo cual es más corto *y* los distingue. Donde la
coincidencia está al final — `alpha-borrador` junto a `beta-borrador` —, lo
que se va es el final; donde está en ambos extremos, lo que queda es el
medio. Un nombre sin vecinos cercanos pierde el medio, ya que un nombre
empieza diciendo qué es y termina diciendo cuál es — para un archivo, su
extensión: `anual…2026.md`.

Una coincidencia corta no cuenta. `estructuras paralelas` termina por
casualidad en las mismas dos letras que `Esquemas` a su lado, y eso no es
motivo para conservar íntegro ninguno de los dos — tres caracteres desde el
principio ya los distinguen.

Nada pasa a una segunda línea. Cuando ni siquiera los nombres honestamente
más cortos caben, la fila **se desplaza hacia los lados**, aparcada en el
extremo donde está el archivo — en ese punto ya no queda nada que comprimir,
y recortar más ocultaría en vez de acortar. La rueda la desplaza allí donde
esté el puntero sobre la fila, y se puede llegar a ambos extremos: mientras
se desplaza la fila se alinea a su inicio, diga lo que diga la opción de
alineación, porque un contenido centrado en una caja que ya ha desbordado se
sale tanto por la izquierda como por la derecha — y a esa mitad no se puede
llegar desplazando en absoluto.

**Señala un nombre acortado y vuelve entero**, mientras lo estés señalando,
desplazado al borde izquierdo para que todo lo que volvió esté en pantalla.
**Haz clic en uno y se queda**: el campo se abre mostrando la carpeta en la
que hiciste clic, lo que se ofrece después de ella y lo que escribas, y
sigue mostrándolo una vez que el puntero se ha apartado. Los nombres se
quedan quietos mientras desplazas la fila o escribes en ella — que uno se
abriera de golpe bajo un gesto pensado para leer la fila movería todo lo que
viene después de debajo de ti.

El **segmento inicial siempre lleva una descripción emergente, y es la ruta
absoluta** — `/home/tu/Bóvedas/Notas`, o donde sea que empiece la fila. Es
lo único de la fila que nada en pantalla puede decir: el nombre te dice
*qué* bóveda, nunca dónde está. Está ahí tanto si hubo que acortar algo como
si no.

Con **Mostrar el nombre de la bóveda** desactivado, el nombre no se
elimina, solo se mantiene en nada — así que señalar el icono lo devuelve
exactamente igual que señalar un nombre que la fila tuvo que acortar.

**Mostrar las extensiones de archivo** vuelve a poner la extensión en el
nombre de archivo de la fila. Desactivado — el valor por defecto — la fila
nombra una nota como Obsidian la titula, sin el `.md` que casi todos los
archivos de una bóveda comparten; activado, la nombra como lo hace el
sistema de archivos, que es lo que quieres cuando la bóveda contiene algo
más que notas. Es también lo segundo que la fila cede cuando el espacio
escasea, justo después del nombre de la bóveda.
Una descripción emergente te da el resto: no solo el nombre sino todo lo
que la fila muestra bajo él, como `…/nombre/carpeta/nota.md`, así que un
solo hover responde tanto a "qué es esto" como a "qué hay debajo". El icono
de la bóveda nombra su bóveda de la misma manera, cuando el nombre está
desactivado o se ha comprimido hasta desaparecer.

## Los colores de aviso

| | Cuándo | Qué significa |
| --- | --- | --- |
| Anillo **rojo** en la barra de ruta | La fila apunta fuera de tu bóveda | Obsidian no puede abrir lo que hay ahí como una nota, y nada de lo que hay ahí fuera se escribe hasta que abras el candado. |
| Anillo **naranja** en la barra de ruta | El archivo es un tipo de texto para el que Obsidian no tiene vista | Una precaución. Obsidian se lo pasaría a la aplicación predeterminada de tu escritorio; el complemento lo muestra en su lugar. |
| Texto **rojo** en el campo abierto | Todavía no hay nada en esa ruta | <kbd>Enter</kbd> lo creará en vez de abrirlo. No tanto un aviso como una constatación de lo que hace la siguiente pulsación de tecla — mira [Escribir una ruta](#escribir-una-ruta). |
| Candado **rojo** en el lugar del interruptor de renombrado | La fila apunta fuera de tu bóveda y escribir ahí sigue bloqueado | El mismo rojo que el anillo, por el mismo motivo: marca una negativa. Pulsarlo permite escribir aquí y devuelve el hueco al interruptor — mira [Escribir fuera de la bóveda](#escribir-fuera-de-la-bóveda). |

Los **dos anillos son independientes, y ambos pueden darse a la vez** — un
`.json` externo está fuera de tu bóveda *y* es un tipo para el que Obsidian
no tiene editor. En el visor aparecen como líneas separadas, cada una
declarando solo su propio hecho. En la barra de ruta, el rojo gana donde
aplican ambos, ya que dos anillos serían solo ruido. El *texto* rojo es una
tercera cosa por completo: tiene que ver con lo que se está escribiendo, no
con hacia dónde apunta la fila, así que puede aparecer dentro de cualquiera
de los dos anillos o de ninguno.

El nivel naranja es deliberadamente estrecho. Los tipos registrados
(Markdown, canvas, imágenes, PDF, audio, vídeo) se gestionan bien y no
reciben nada. Los archivos binarios tampoco reciben nada — no vas a editar
un `.zip` hasta convertirlo en un desastre por accidente. Lo que queda es
exactamente el riesgo: un `.json`, `.css` o `.log` que **Mostrar todos los
tipos de archivo** ha hecho visible. El desplegable es más amplio a
propósito: ahí, todo lo que no es una nota es naranja — mira [cómo se tiñen
las entradas del desplegable](#cómo-se-tiñen-las-entradas-del-desplegable).

## Modo mover/renombrar

El botón del lápiz en el extremo derecho de la cabecera — junto al botón de
modo de vista, del mismo tamaño que los botones nativos — activa o desactiva
el modo mover/renombrar. Fuera de tu bóveda hay un candado rojo en su lugar
hasta que lo pulses; mira [Escribir fuera de la
bóveda](#escribir-fuera-de-la-bóveda). La fila de la cabecera queda entonces
enmarcada en el color de acento, exactamente igual que al renombrar en el
Explorador de archivos. Los mismos clics y pulsaciones de tecla ahora
confirman un movimiento o un renombrado mediante el `fileManager.renameFile`
de Obsidian, así que todos los enlaces a la nota le siguen.

Mientras se renombra:

- El nombre de archivo actual queda fijado en el desplegable de cada
  carpeta, así que mover una nota sin renombrarla es un solo clic.
- Los nombres ya tomados en la carpeta de destino aparecen en **rojo** —
  una carpeta que ya contiene el nombre, y un archivo con ese nombre — así
  que el choque se muestra antes de que elijas. Aun así se pueden escoger:
  mira más abajo.
- La entrada se valida en vivo contra las propias reglas de renombrado de
  Obsidian — los mismos conjuntos de caracteres, los mismos mensajes, la
  misma descripción emergente roja que obtienes al renombrar en el árbol
  de archivos — así que un nombre ilegal se marca mientras escribes y no se
  puede confirmar.
- Hacer clic fuera de la barra de cabecera, o que la cabecera pierda el
  foco, termina el modo renombrar.

### Un nombre que está tomado

Mover o renombrar hacia un nombre que ya existe **pregunta en vez de
rehusar.** Se abre un diálogo con dos rutas que puedes editar: adónde va tu
archivo, y adónde va el archivo que estaba en medio — en rojo mientras siga
tomado. Cada ruta también se dibuja de la misma forma que la barra de ruta
dibuja una, con las partes que difieren coloreadas y acortadas en último
lugar, así que una ruta larga sigue mostrando lo que cambia.

Ambos campos tienen una lista. La segunda contiene las salidas habituales:

- **Intercambiar lugares** — va a la antigua carpeta de tu archivo, con su
  propio nombre.
- **Intercambiar nombres** — se queda donde está y toma el antiguo nombre
  de tu archivo.
- **Intercambiar ambos** — toma la antigua ruta de tu archivo.
- `-1`, `-bak` y `-old` junto a su propio nombre.
- Los dos nombres que tenían los archivos.

La primera lista ofrece adónde iba tu archivo, **Quedarse donde está**, su
propio nombre en la carpeta de destino, y `-1`, `-bak` y `-old` junto a él.
Una salida cuya ruta está tomada aparece atenuada y no se puede elegir.
Elegir una **solo rellena el campo** — todavía puedes editarlo — y
**Aplicar** mueve ambos, enlaces y todo; **Cancelar** no mueve nada. Elegir
un nombre tomado del desplegable pregunta lo mismo, y también lo hace soltar
una nota sobre una carpeta que ya contiene su nombre.

## Una tecla para los dos renombrados

El comando de renombrar (<kbd>F2</kbd> por defecto, o lo que sea a lo que lo hayas reasignado) **alterna** entre el renombrado del título en línea de Obsidian y la barra de ruta del encabezado de este plugin. Si has desactivado el título en línea de Obsidian, la barra de ruta del encabezado se convierte en el único destino, así que la tecla nunca se queda sin hacer nada.

En la barra de ruta se abre sobre el **nombre sin su extensión** — la edición que casi siempre es un renombrado, y lo mismo que selecciona clicar el nombre. Pulsa otra vez y hace lo que <kbd>Tab</kbd> haría ahí: en el nombre, ese es el siguiente escalón —
el nombre con su extensión, la ruta desde la carpeta de tu bóveda, la ruta desde la
raíz del sistema; con algo escrito, lo completa, como hace <kbd>Tab</kbd>.

**El ciclo se cierra en el encabezado.** Cinco pulsaciones te llevan alrededor — el título
en línea, el nombre, el nombre con su extensión, la ruta desde tu bóveda, la ruta
desde la raíz del sistema — y la sexta vuelve a ser el título en línea. Esa pulsación es la única que difiere de
<kbd>Tab</kbd>, que en cambio vuelve al principio de la ruta — y la séptima
va donde va esa vuelta de <kbd>Tab</kbd>: la raíz de la bóveda, con toda la ruta en el
campo y su primera carpeta marcada. Así que a todos los pasos que llega <kbd>Tab</kbd>, la tecla
también llega.

El comando **Enfocar la barra de ruta** hace lo mismo dentro del campo — lo que
<kbd>Tab</kbd> haría — y donde <kbd>Tab</kbd> daría la vuelta, en cambio devuelve el cursor
a la nota. Su siguiente pulsación es la vuelta: la raíz de la bóveda, primera carpeta marcada.

**En un campo que ya está abierto**, la tecla lo convierte en un renombrado donde
está — conservando el texto, el cursor y la selección — y **Enfocar la barra de
ruta** le quita ese renombrado del mismo modo. **Cualquier otra cosa** pulsada o
clicada entre medias reinicia cualquiera de los dos ciclos, así que una pulsación después de haber
estado editando nunca cae en un escalón que quedó de antes.

Fuera de la bóveda la tecla también funciona — ahí no hay título en línea, así que la
primera pulsación va directa a la barra de ruta.

Esto funciona envolviendo el comando `workspace:edit-file-title` en lugar de secuestrar la tecla, así que reasignar el atajo y lanzar el comando desde la paleta siguen funcionando igual.

## Cómo se tiñen las entradas del desplegable

| Color | Significa |
| --- | --- |
| **Morado** | Una nota (`.md`, `.markdown`) — lo que Obsidian abrirá como nota, escogida entre el contenido variado de una carpeta |
| **Naranja** | No es una nota — cualquier cosa que Obsidian no abrirá como tal, desde un PDF hasta un `.txt`, y las entradas `:page` junto con ellos. Una carpeta de contenido variado se lee por las notas que contiene, y un solo color para todo lo demás lo indica más rápido que una advertencia en solo algunos; ver [los colores de aviso](#los-colores-de-aviso) |
| **Apagado** | Fuera de tu bóveda, así que el tratamiento propio de la bóveda no se aplica |
| **Azul**, en negrita | Donde ya estás: la nota propia de esta barra, y la carpeta sobre la que está la barra de ruta. En modo mover/renombrar la entrada *mantener este nombre* ocupa el lugar de la nota — la misma nota en ambos casos |
| **Rojo** | Solo en modo mover/renombrar: el nombre está ocupado. Sigue siendo seleccionable — elegir uno pregunta qué hacer con el archivo que está en medio; ver [Un nombre que está ocupado](#un-nombre-que-está-tomado) |

**Las carpetas van en negrita**, así que la propia nota de una carpeta no necesita
un color aparte para distinguirse de su carpeta: es morada como cualquier otra nota. Una **línea en el
borde de una fila** marca los nombres que empiezan por lo que escribiste — azul donde
coinciden más allá, verde en la rama que toma la propuesta; ver
[Escribir una ruta](#escribir-una-ruta).

El campo toma los mismos colores para lo que nombra — ver [Escribir una ruta](#escribir-una-ruta).

## Reglas de visibilidad

- Los archivos con extensiones no compatibles aparecen en los desplegables solo si la opción de Obsidian **Detectar todas las extensiones de archivo** está activada — **dentro de la bóveda**. Fuera de ella la opción no se aplica: rige lo que la bóveda indexa, y nada de ahí fuera está en la bóveda, así que un `.txt` junto a tus notas se muestra en cualquier caso.
- El desplegable muestra hasta 1000 entradas, diez veces el límite propio de Obsidian. Cuando una carpeta tiene más, la última fila indica cuántas se dejaron fuera; sigue escribiendo para acortar la lista.
- Los archivos y carpetas ocultos aparecen solo si la opción **Mostrar archivos ocultos** de este plugin está activada.
- **La protección contra sobrescritura funciona igual sea lo que sea visible** — un archivo oculto sigue impidiéndote sobrescribirlo.

## Chuleta

Una ruta **envuelta entre comillas** se desenvuelve por ti. *Copiar como ruta* de Windows
entrega `"C:\Users\tu\nota.md"`, comillas incluidas, y una shell hace lo mismo con cualquier
ruta que tenga un espacio; pegarla o escribirla funciona igual en ambos casos. Solo la
comilla doble, y solo como un par que envuelve todo — no puede
aparecer en un nombre real, donde un apóstrofe sí puede.

| Quieres… | Haz esto |
| --- | --- |
| Abrir una carpeta (su nota, o revelarla) | Clic en el separador **después de** esa carpeta |
| Darle a una carpeta una nota de carpeta que no tiene | **Doble clic** en ese mismo separador (necesita un plugin de notas de carpeta) |
| Cambiar una carpeta por otra hermana | Clic en el nombre de esa carpeta, luego escribe o elige |
| Renombrar o redirigir la nota | Clic en el nombre de la nota — extensión incluida |
| Explorar el contenido de una carpeta | Clic en el nombre de esa carpeta; el desplegable lista su carpeta padre, así que haz clic en la carpeta **debajo** de la que quieres |
| Reescribir una carpeta y todo lo que hay debajo | **Doble clic** en el nombre de esa carpeta, luego escribe |
| Editar la ruta desde una carpeta hacia abajo | Clic en el nombre de esa carpeta, luego <kbd>→</kbd> para deseleccionar |
| Saltar a un archivo escribiendo su ruta | Clic en el nombre de archivo o en el espacio vacío, escribe, <kbd>Enter</kbd> |
| Abrir un archivo en una pestaña nueva en su lugar | <kbd>Ctrl</kbd> al elegirlo, o <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| Copiar la nota a otro lugar en vez de moverla | Lápiz, luego <kbd>Ctrl</kbd> al elegir o confirmar el destino |
| Crear una nota en una ruta que no existe | Escribe la ruta — el campo se pone **rojo** en cuanto nada en el desplegable coincide con ella — luego <kbd>Enter</kbd>. Dentro de la bóveda se crea al instante; fuera de ella primero pregunta |
| Saber si una ruta que escribiste ya existe | Mira el color: toma el color de la fila que nombra, y rojo significa que <kbd>Enter</kbd> la crearía |
| Descender un nivel mientras escribes | Escribe `/` |
| Subir un nivel mientras escribes | <kbd>Backspace</kbd> con el campo vacío |
| Traer al campo las carpetas que van antes | <kbd>←</kbd> al principio para una; <kbd>Shift</kbd>+<kbd>Home</kbd>, o <kbd>Home</kbd> con el desplegable cerrado, para todas |
| Mover o renombrar la nota abierta | Clic en el lápiz, luego navega o escribe como arriba |
| Mover a un nombre que está ocupado | Confírmalo igualmente: el diálogo te deja intercambiar posiciones, nombres o ambos, o darle otro nombre al archivo que está en medio |
| Mover sin renombrar | Lápiz → clic dentro de la carpeta destino → elige el nombre de archivo actual fijado |
| Renombrar en el sitio | <kbd>F2</kbd> dos veces (la primera pulsación va al título en línea, la segunda al encabezado) |
| Saltar a otra bóveda, a inicio o a una unidad | Clic en el nombre de la bóveda |
| Abrir un archivo desde fuera de la bóveda | Nombre de la bóveda → elige una ubicación → navega → elige el archivo (solo lectura hasta *Editar como texto*) |
| Completar el nombre que estás escribiendo | <kbd>Tab</kbd>, o <kbd>End</kbd> para lo que se propone; <kbd>→</kbd> toma una letra de ello |
| Entrar en él, una vez queda un solo nombre | <kbd>Tab</kbd> otra vez |
| Retroceder un paso, o salir de la carpeta | <kbd>Shift</kbd>+<kbd>Tab</kbd> |
| Tomar toda la ruta, o la ruta del sistema | <kbd>Tab</kbd> más allá del final, o clic cuatro veces |
| Copiar un nombre, una ruta, o una ruta del sistema | Clic derecho dos veces sobre ella; el espacio vacío tres veces para la ruta del sistema |
| Acceder a lo que el gestor de bóvedas ofrece para esta bóveda | Clic derecho en el icono al principio de la fila |
| Copiar el ID de la bóveda | Clic derecho en el icono al principio de la fila |
| Abrir otra bóveda que estabas explorando | Clic derecho en su nombre al principio de la fila |
| Ver la extensión del archivo en la fila | Activa **Mostrar las extensiones de archivo** en las opciones |
| Abrir un segmento de carpeta en una pestaña nueva | <kbd>Ctrl</kbd> o clic con el botón central, o arrástralo a la barra de pestañas |
| Llegar a la barra de ruta desde el teclado | Asigna *Enfocar la barra de ruta* en Atajos |
| Abrir una dirección web o un enlace `obsidian://` | Escríbelo en la barra y pulsa <kbd>Enter</kbd> |
| Cancelar cualquier cosa | <kbd>Esc</kbd>, o clic fuera de la barra del encabezado |
| Probar entradas antes de confirmar | Flechas o el ratón por el desplegable; <kbd>↑</kbd> más allá de la primera te devuelve tu texto |
| Mover una nota a una carpeta por encima de ella | Arrástrala sobre esa carpeta en la fila |
| Guardar un trozo de texto como una nota nueva | Arrastra el texto sobre una carpeta, escribe un nombre, <kbd>Enter</kbd> |
| Añadir un trozo de texto a la nota que estás leyendo | Arrástralo sobre el nombre de la nota, confirma |
| Ver un nombre de carpeta abreviado en completo | Pasa el ratón por encima, o ensancha el panel |
| Averiguar dónde vive la propia bóveda | Pasa el ratón sobre el icono al principio de la fila |
| Sacar una nota de la bóveda | Lápiz → navega fuera → confirma el diálogo (los enlaces se romperán) |
| Permitir escribir fuera de tu bóveda | Clic en el **candado rojo** del encabezado; el interruptor de renombrar ocupa su lugar |
| Volver a bloquearlo | Clic en el interruptor hasta que el candado vuelva — una pulsación para entrar, otra para salir |
| Borrar un archivo fuera de la bóveda | Abre el candado, luego clic derecho en el archivo: *Eliminar* lo lleva a la papelera de tu sistema |

## Opciones

| Opción | Opciones | Por defecto | Qué hace |
| --- | --- | --- | --- |
| **Language** | Por defecto de Obsidian, o cualquiera de 46 | Por defecto de Obsidian | En qué idioma está el propio texto de este plugin. *Por defecto de Obsidian* sigue el idioma fijado en las opciones de Apariencia, que es lo que casi todos quieren. La fila en sí — su nombre, su descripción y *Por defecto de Obsidian* — se queda en inglés sea lo que sea lo elegido, porque es el camino de vuelta desde un idioma que no puedes leer. El griego y el sánscrito están traducidos aquí y ausentes de la propia lista de Obsidian, así que esta opción es la única manera de llegar a ellos. |
| **Alineación** | Izquierda / Centro / Derecha | Izquierda | Dónde se sitúa la ruta en la fila del encabezado. *Centro* coincide con el aspecto clásico de Obsidian. |
| **Separador** | Cualquier carácter | `/` | El separador dibujado entre segmentos. Seis preajustes de un clic (`/ > ▸ › \ •`) van delante del campo de texto. |
| **Mostrar el nombre de la bóveda** | Activado / Desactivado | Activado | Si la propia bóveda es el primer segmento de la ruta. Desactivado, ese segmento se convierte en un icono 🏠 en vez de desaparecer, así que la ruta sigue empezando en algo clicable. |
| **El nombre de la carpeta abre el desplegable** | Activado / Desactivado | Activado | Intercambia lo que hacen el nombre de una carpeta y el separador que va después — ver [la tabla de arriba](#la-ruta). Con [Folder notes](obsidian://show-plugin?id=folder-notes) el separador abre las notas de carpeta. Nunca se aplica en modo mover/renombrar. |
| **Mostrar archivos ocultos** | Activado / Desactivado | Desactivado | Si los archivos y carpetas ocultos se listan en los desplegables. La protección contra sobrescritura se aplica en ambos casos. |
| **Mostrar todos los tipos de archivo** | — | — | No es una opción de este plugin sino de Obsidian, nombrada aquí porque responde a la misma pregunta: tu bóveda indexa solo los tipos de archivo que se le indica, y solo lo que indexa puede listarse. Búscala en las opciones de Obsidian y actívala para ver todos los archivos; el botón junto a la fila abre esa página con la opción desplazada a la vista y resaltada, como si hubieras hecho clic en ella desde la propia búsqueda de las opciones. Fuera de la bóveda no se aplica, ya que nada de ahí fuera está indexado de todos modos. |
| **Mostrar las extensiones de archivo** | Activado / Desactivado | Desactivado | Si el nombre del archivo en la fila lleva su extensión. Desactivado, se omite — igual que Obsidian la omite en el título de una nota. Activado, la fila nombra el archivo como lo hace el sistema de archivos. En cualquier caso la extensión es lo segundo que se sacrifica cuando la fila se queda sin espacio, justo después del nombre de la bóveda. |
| **Acceso a archivos externos** | Activado / Desactivado | **Desactivado** | Si el nombre de la bóveda abre el desplegable de ubicaciones. Desactivado, nada en el plugin mira nunca más allá de esta bóveda. |
| **Atajos** | botón | — | Abre los *Atajos* de Obsidian filtrados a este plugin, donde se puede asignar una tecla a *Enfocar la barra de ruta*. |

## Sustituir los iconos

Lure dibuja tres iconos: el icono de la raíz de la bóveda (cuando **Mostrar el nombre de la bóveda** está desactivado), el interruptor de mover/renombrar, y el candado que ocupa su lugar mientras la escritura fuera de la bóveda está bloqueada. Todos se pueden sustituir desde un tema o un fragmento de CSS — fija el glifo de sustitución y oculta el que viene incluido en una sola regla:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* Solo se muestra cerrado: abrirlo le cede el lugar al interruptor de renombrar. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}
```

`--lure-icon-glyph` admite cualquier cosa válida en `content` de CSS, así que `url(...)` sirve para una imagen igual que para un glifo de texto o un emoji. Deja `--lure-icon-svg` en paz para conservar el icono de Lucide y dibujar tu glifo junto a él.
