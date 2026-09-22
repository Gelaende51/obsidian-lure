<!-- Traducción de CHANGELOG.md — estado: commit 2cbb237.
     Traducción automática (Claude Opus 5), no revisada por hablantes nativos.
     Se agradecen las correcciones; el CHANGELOG en inglés es la versión
     de referencia. -->

[English](../../CHANGELOG.md) · [العربية](CHANGELOG.ar.md) · [አማርኛ](CHANGELOG.am.md) · [Беларуская](CHANGELOG.be.md) · [বাংলা](CHANGELOG.bn.md) · [Català](CHANGELOG.ca.md) · [Čeština](CHANGELOG.cs.md) · [Dansk](CHANGELOG.da.md) · [Deutsch](CHANGELOG.de.md) · [Ελληνικά](CHANGELOG.el.md) · **Español** · [فارسی](CHANGELOG.fa.md) · [Suomi](CHANGELOG.fi.md) · [Français](CHANGELOG.fr.md) · [Gaeilge](CHANGELOG.ga.md) · [עברית](CHANGELOG.he.md) · [Magyar](CHANGELOG.hu.md) · [Bahasa Indonesia](CHANGELOG.id.md) · [Italiano](CHANGELOG.it.md) · [日本語](CHANGELOG.ja.md) · [ქართული](CHANGELOG.ka.md) · [ភាសាខ្មែរ](CHANGELOG.kh.md) · [한국어](CHANGELOG.ko.md) · [Latviešu](CHANGELOG.lv.md) · [Bahasa Melayu](CHANGELOG.ms.md) · [नेपाली](CHANGELOG.ne.md) · [Nederlands](CHANGELOG.nl.md) · [Norsk](CHANGELOG.no.md) · [Polski](CHANGELOG.pl.md) · [Português](CHANGELOG.pt.md) · [Português (Brasil)](CHANGELOG.pt-BR.md) · [Română](CHANGELOG.ro.md) · [Русский](CHANGELOG.ru.md) · [संस्कृतम्](CHANGELOG.sa.md) · [Slovenčina](CHANGELOG.sk.md) · [Shqip](CHANGELOG.sq.md) · [Српски](CHANGELOG.sr.md) · [Svenska](CHANGELOG.sv.md) · [ไทย](CHANGELOG.th.md) · [Türkçe](CHANGELOG.tr.md) · [Українська](CHANGELOG.uk.md) · [Oʻzbekcha](CHANGELOG.uz.md) · [Tiếng Việt](CHANGELOG.vi.md) · [简体中文](CHANGELOG.zh.md) · [繁體中文](CHANGELOG.zh-TW.md)

# Registro de cambios

Todas las versiones de Lure, de la más reciente a la más antigua. Lo que ha entrado desde la última versión está bajo *Sin publicar*. Los números de versión no llevan el prefijo `v`, igual que las etiquetas de publicación.

## Sin publicar

### Añadido

- **Un nombre ya utilizado pregunta en lugar de rechazar.** Mover o renombrar a un nombre que ya existe abre un diálogo que muestra ambos archivos con su ruta completa. Puedes renombrar el que está en el camino y continuar, intercambiar el lugar con él (entre carpetas: cada uno conserva su nombre y toma la carpeta del otro), o intercambiar nombres con él (dentro de una misma carpeta). Cancelar no mueve nada. Cada botón indica lo que hará en cuanto lo señalas.
- **`:graph` dentro de una carpeta abre el grafo de esa carpeta** — el grafo filtrado por `path:"that/folder"`, tal como lo haría su propio cuadro de búsqueda. En la raíz de la bóveda sigue siendo el grafo completo, como antes.
- **Una carpeta que ya contiene el nombre aparece en rojo** en el desplegable mientras mueves, y también un archivo con ese nombre, de modo que el conflicto se ve antes de elegir.

### Cambiado

- **La propuesta es siempre lo que Tab escribiría.** Donde los nombres dejan de coincidir, el campo propone el paso hacia el primero de ellos — antes no proponía nada ahí, y aun así Tab escribía algo.
- **El desplegable sigue al cursor**, o al inicio de una selección: lista la carpeta en la que está ese punto, filtrada por las letras que lo preceden. Al principio de un nombre, es la carpeta entera.
- **Señalar una fila la muestra como la propuesta** — lo que escribiste sigue siendo tuyo y el resto del nombre queda marcado — y quitar el puntero de la lista devuelve la propuesta.
- **→ toma una letra de la propuesta** en lugar de todas; <kbd>Fin</kbd> sigue tomándola entera.
- **F2 en un campo abierto lo convierte en un renombrado justo donde está**, conservando el texto, el cursor y la selección, y **Enfocar la barra de ruta** le retira el renombrado de la misma manera.
- **Cualquier otra tecla pulsada o clic realizado entre una pulsación y otra reinicia el ciclo de F2 y Enfocar la barra de ruta.**
- **Las carpetas aparecen en negrita en el desplegable**, así que la nota propia de una carpeta ya no necesita ser gris para distinguirse: es morada como cualquier otra nota.
- **El desplegable nunca es más ancho que la barra de ruta.** Un nombre que no cabe se acorta como la barra de ruta acorta uno, y se muestra completo al pasar el cursor por encima.
- **Re Pág y Av Pág se mueven según las filas que muestran los propios desplegables de Obsidian**, también desde el campo, y mantienen la selección a la vista.
- **El desplegable muestra hasta 1000 entradas** antes de contar el resto, en lugar de 100.
- **Los nombres acortados se deslizan en vez de saltar.** Un nombre que cede se recorta al píxel y se desvanece bajo sus `…`, de modo que nada después de él en la fila se mueve a saltos mientras se redimensiona un panel.

### Corregido

- Se perdía un espacio en el punto donde se dividía un nombre acortado — `development guidelines` —, uniendo las dos palabras.

## 1.4.0 — 2026-09-19[^1.4.0]

### Añadido

- **Una fila de *Atajos de teclado* en los ajustes.** Su botón abre los *Atajos de teclado* de Obsidian filtrados a este plugin, donde *Enfocar la barra de ruta* — que no trae ninguna tecla asignada — puede recibir una.
- **Una barra de ruta en los paneles que no contienen ningún archivo.** Una pestaña vacía se lee `vault / :blank`, el grafo `vault / :graph`, y cualquier otra vista sin nada que nombrar recibe su propia etiqueta `:` — la propia pestaña de un plugin de pestaña de inicio se lee `:home-launcher`. El campo de al lado es una barra de direcciones: escribe una ruta y <kbd>Intro</kbd> la abre en ese panel, o la crea. Antes de esto la fila estaba en blanco — el plugin ocultaba el título propio de Obsidian y no ponía nada en su lugar.
- **Una página se puede escribir además de elegirse** — `:graph` y las demás son una dirección, no solo una entrada de lista. Ningún nombre de archivo empieza con dos puntos, así que escribir uno en cualquier parte las convoca, y el campo adopta su color en lugar de ofrecer crear una nota que nada podría llamarse.
- **Una fila para *Mostrar todos los tipos de archivo*, el ajuste propio de Obsidian**, junto a la regla de los archivos ocultos, ya que ambos deciden lo que puede listar un desplegable: indica que hay que buscar ese ajuste en la configuración propia de Obsidian y activarlo para ver todos los archivos, y el botón de al lado abre esa página con el ajuste desplazado a la vista y destacado con un parpadeo, como haría un resultado de búsqueda en los ajustes. Nombrado con las palabras de Obsidian, explicado en 45 idiomas.
- **La raíz de la bóveda lista las páginas que puede contener un panel** — `:graph`, `:search`, y cualquier vista que registren tus plugins, entre ellas una pestaña de inicio o un calendario. Elige una y el panel la abre, igual que elegir una nota abre la nota. Las vistas que existen para mostrar un archivo quedan fuera, porque no tendrían nada que mostrar.
- **El separador propio de la bóveda abre tu página de inicio**, cuando algún plugin la ofrece, y aparece subrayado para indicarlo; la pulsación siguiente pliega el árbol de archivos, y la de después restaura exactamente lo que había abierto. Sin un plugin así, la primera pulsación pliega, como antes.
- **Escribe una ruta desde la raíz del sistema de archivos.** Una `/` al principio de un campo vacío abre esa ruta en lugar de ser ignorada, cada barra posterior le pertenece a ella, y el desplegable lista la máquina en lugar de la bóveda.

### Cambiado

- **F2 y *Enfocar la barra de ruta* pulsan Tab dentro del campo.** Todo lo que Tab haría ahí — el siguiente peldaño, completar lo que has escrito, entrar en una carpeta — lo hacen también ellos; solo donde Tab vuelve al principio de la ruta salen del campo, F2 hacia el título en línea, el comando hacia la nota. Antes, un campo en el que habías escrito hacía que F2 empezara de nuevo por el nombre y que el comando cerrara el campo.
- **El paso siguiente a que el ciclo termine es la carpeta raíz.** La pulsación que sigue al regreso de F2 al título en línea, o al regreso del comando a la nota, llega adonde llega la vuelta de Tab — la raíz de la bóveda, la ruta completa en el campo, con su primera carpeta marcada — de modo que ningún paso del anillo queda solo para Tab.
- ***Enfocar la barra de ruta* recorre los mismos peldaños que F2.** Se abre sobre el nombre en lugar de la ruta completa, recorre los mismos cuatro peldaños, y la pulsación después del último cierra el campo y devuelve el cursor a la nota — antes daba vueltas a los peldaños sin parar, y la única tecla que llegaba a la fila no podía salir de ella.
- **Un nombre ya ocupado se avisa cuando lo usas, no mientras lo escribes.** Todo nombre que se escribe camino de `Notes.md` pasa por nombres que pueden ser archivos por derecho propio, y el aviso antes aparecía y desaparecía letra a letra. Lo que está mal en la ortografía de un nombre se sigue diciendo tal como se escribe.
- **Un separador cuya nota de carpeta ya está abierta revela la carpeta** en lugar de reabrir lo que ya está en pantalla — que es lo que su segunda pulsación ha significado siempre.
- **Dónde estás aparece en negrita en el desplegable**, no solo en azul.
- **Todo lo que no es una nota aparece en naranja en el desplegable**, no solo los tipos de texto para los que Obsidian no tiene vista. El morado distingue las notas dentro de una carpeta de contenido mixto; un solo color para el resto dice lo mismo más rápido.

### Corregido

- **Retroceso sobre una carpeta pulsada ya no borra el nombre de la bóveda.** La barra que quedaba al principio se leía como una ruta desde la raíz de la máquina, lo que vaciaba el segmento inicial — y cerrar el campo con Esc nunca lo devolvía, así que la pestaña perdía el nombre y el icono de la bóveda para siempre. Una barra inicial ahora cuenta como de la máquina solo cuando su primera carpeta existe de verdad, y el segmento inicial vuelve con cualquier forma de salir del campo.
- Fuera de la bóveda, los archivos quedaban ocultos a menos que **Detectar todas las extensiones de archivo** de Obsidian estuviera activado — un ajuste sobre lo que indexa la bóveda, aplicado a carpetas que no están en la bóveda. Un `.txt` junto a tus notas aparece listado ahí fuera de cualquier modo.
- El desplegable del nombre de la bóveda no hacía nada en un panel sin ningún archivo, que es justo el panel que usarías para ir a otra parte.
- Hacer clic en el nombre de la bóveda dejaba el título propio de Obsidian junto a la ruta en el campo, en gris, donde no aparece en ningún otro momento: la fila se mide por lo que ha dibujado, y en ese instante se ha vaciado para hacer sitio al campo.

- Hacer clic en el espacio vacío abría el campo y luego lo perdía: revelar la nota en el navegador de archivos se lleva el cursor con ella, así que el campo quedaba abierto y marcado mientras cada pulsación iba al árbol.
- El peldaño que muestra la ruta desde la raíz del sistema dibujaba un rastro de la misma ruta junto al campo, sin ajustar, de modo que una ruta profunda se pintaba encima de sí misma.

## 1.3.0 — 2026-09-17[^1.3.0]

### Añadido

- **Trae un archivo a la bóveda desde fuera.** Mueve o copia un archivo desde cualquier punto del disco a una ruta dentro de tu bóveda; llega como una nota de verdad, y al mover se elimina el original solo después de que la copia haya salido bien.
- **Suelta texto o un archivo sobre la fila para anotarlo.** Sobre una carpeta: una nota nueva en esa carpeta, con el nombre que escribas. Sobre el nombre de la nota, o sobre el separador de una carpeta que tenga nota de carpeta: se añade al final de esa nota, tras una confirmación.
- **Crea una nota de carpeta** con una segunda pulsación sobre lo que abre la carpeta, cuando hay un plugin de notas de carpeta activo y la carpeta todavía no tiene ninguna. Se coloca donde indiquen las opciones del propio [Folder notes](https://github.com/LostPaul/obsidian-folder-notes).
- **Arrastra una carpeta de la barra de ruta a la barra de pestañas** para abrirla ahí: su nota de carpeta si la tiene, y si no una pestaña situada en esa carpeta.
- **La rueda recorre el desplegable.** Sobre un nombre, el primer giro abre la lista de ese nombre y cada giro siguiente mueve el resaltado una fila. Una fila que se está desplazando lateralmente se queda con la rueda para desplazarse.
- **Sal por el principio del campo con las flechas** para traer dentro la carpeta anterior: <kbd>←</kbd> para una carpeta, <kbd>Mayús</kbd>+<kbd>Inicio</kbd> (o <kbd>Inicio</kbd> con el desplegable cerrado) para todas.
- **El campo lleva el color de lo que nombra**, el mismo que tiene su fila en el desplegable, y se vuelve rojo en cuanto nada responde a ese nombre — justo cuando <kbd>Intro</kbd> crearía algo en lugar de abrirlo.
- **Las notas de carpeta salen en gris en el desplegable**, para que se lean como parte de su carpeta y no como una nota más.
- **Clic central en un separador** para abrir esa carpeta en una pestaña nueva: su nota de carpeta, o una pestaña situada en ella.

### Cambiado

- **El candado y el botón de renombrar son un solo control.** Fuera de la bóveda, un candado rojo y cerrado ocupa el lugar del botón; al abrirlo, el hueco pasa al botón, y salir del modo renombrar vuelve a cerrarlo.
- **La tecla de renombrar también le pregunta al candado.** Fuera de la bóveda, una pulsación hace parpadear el candado; una segunda pulsación en menos de medio segundo concede lo que concede el candado y abre el modo renombrar.
- **La tecla de renombrar recorre un ciclo completo** — título en línea, nombre, nombre con extensión, ruta desde la bóveda, ruta desde la raíz del sistema — y la siguiente pulsación vuelve al título en línea.
- **El clic con <kbd>Ctrl</kbd> y el clic central ya no son sinónimos.** Uno abre una pestaña y va a ella; el otro la abre en segundo plano.
- **El clic derecho sobre el nombre de la nota abre el menú propio del archivo.**
- **El desplegable es tan alto como permita la ventana**, en lugar de los 300 píxeles fijos de Obsidian.
- **Hacer clic en una carpeta con un campo abierto conserva toda la ruta que viene después**, y hacer clic dentro de una carpeta en el campo lista el contenido completo de esa carpeta.
- **El separador abre la nota de carpeta a cualquier profundidad** con Folder notes activo, y aparece subrayado allí donde haya una. Antes solo funcionaba con las carpetas de primer nivel. Con los demás plugins de notas de carpeta, el separador sigue mostrando la carpeta.

### Corregido

- **Un campo abierto sobrevivía a su archivo.** Cambiar a otra nota con la barra de ruta abierta dejaba la fila nombrando el archivo anterior durante el resto de la sesión.
- **Eliminar, Cambiar nombre y Hacer una copia se rechazaban fuera de la bóveda** con el candado abierto, y nunca se podía llegar a ellos en imágenes, PDF y páginas.
- **<kbd>Ctrl</kbd>+<kbd>Intro</kbd> no hacía nada con el desplegable abierto** — que es como se abre cualquier campo.
- **<kbd>Intro</kbd> con el desplegable abierto pero sin nada resaltado** no hacía nada; ahora confirma lo que hayas escrito.
- **Una fila que se desbordaba con todos los nombres ya en su forma más corta no se podía desplazar**, y el final de la ruta quedaba inalcanzable.
- **Desactivar el plugin dejaba un botón muerto** en el encabezado de todas las notas que había modificado.

## 1.2.0 — 2026-08-25[^1.2.0]

### Añadido

- **Opción de idioma.** Lure sigue el idioma de Obsidian por defecto, y puede fijarse en cualquiera de los suyos. Es además la única forma de llegar a las traducciones al griego y al sánscrito, que el propio Obsidian no ofrece. La etiqueta de la opción se queda en inglés, para poder volver a encontrarla desde un idioma que no sepas leer.

## 1.1.2 — 2026-08-25[^1.1.2]

### Cambiado

- **Hoja de estilos más ligera.** La fila ya no usa selectores `:has()` ni la mayoría de las reglas `!important`. Se reajusta con menos trabajo, y los avisos de la revisión de plugins bajaron de 56 a 7.

## 1.1.1 — 2026-08-22[^1.1.1]

### Corregido

- **Un nombre de carpeta corto podía dibujarse con un hueco dentro** — `atlas` como `atl as` — porque el espacio reservado para su forma acortada era más ancho que el propio nombre.

## 1.1.0 — 2026-08-22[^1.1.0]

### Añadido

- **Vocabulario del clic derecho.** Una pulsación abre un menú; dos y tres pulsaciones copian cada vez más — el nombre, el nombre con su extensión, la ruta. Los menús de la fila coinciden ahora con los del Explorador de archivos, entrada por entrada.
- **Menús fuera de la bóveda.** Las filas del desplegable y el visor externo ofrecen abrir, *Copiar ruta* y *Mostrar en carpeta*; con el candado abierto, también *Nueva nota*, *Nueva carpeta*, *Hacer una copia*, *Cambiar nombre…* y *Eliminar*. Eliminar manda a la papelera del sistema y nunca es permanente.
- **Abrir en otro sitio.** <kbd>Ctrl</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Mayús</kbd> y el clic central sobre el nombre de la nota o una carpeta la abren en una pestaña nueva, en una división o en una ventana. Ambos se pueden arrastrar, igual que sus filas del Explorador de archivos.
- **Arrastra notas sobre la fila para moverlas.** Suelta una nota, varias notas o una carpeta sobre un segmento de carpeta o el nombre de la bóveda.
- **Comando: Enfocar la barra de ruta**, con toda la ruta seleccionada — sin atajo predeterminado, asigna el tuyo.
- **Escribe una URL** en la barra de ruta: `http(s)://` y `obsidian://` se abren como enlaces; `file://` y las rutas codificadas en porcentaje abren el archivo.
- **Completado con Tab**, como en un intérprete de comandos: cada pulsación completa hasta donde coinciden los nombres de la carpeta y se detiene donde difieren. <kbd>Mayús</kbd>+<kbd>Tab</kbd> recorre el camino inverso. Cuando no queda nada que completar, <kbd>Tab</kbd> amplía la selección: nombre, nombre con extensión, ruta desde la bóveda, ruta desde la raíz del sistema.
- **El desplegable se abre donde estás** y muestra en el campo aquello a lo que apuntas; salir de la lista te devuelve tu texto.
- **Mueve una nota fuera de la bóveda** tras una confirmación que cuenta los enlaces que se romperán. Se copia fuera y luego se manda a la papelera, así que se puede recuperar como cualquier nota eliminada.
- Opción **Mostrar las extensiones de archivo**, y se entienden las rutas entrecomilladas (tal como las produce *Copiar como ruta de acceso* de Windows).
- **Las opciones aparecen en el buscador de preferencias de Obsidian** en Obsidian 1.13 y posteriores.

### Cambiado

- **Las rutas largas caben en el panel.** Los nombres se acortan empezando por los menos útiles — el nombre de la bóveda, luego la extensión, luego las carpetas y, en último lugar, el nombre de la propia nota — nunca más allá del punto en el que se pueden distinguir. Apunta a un nombre acortado para leerlo completo.
- **Al hacer clic en el nombre de la nota se selecciona sin la extensión**, así que renombrar ya no arriesga cambiar el tipo de archivo.
- **La tecla de renombrar abre sobre el nombre sin la extensión**, y las pulsaciones siguientes amplían la selección.
- **Hacer clic en una carpeta mantiene visible el resto de la ruta**, también fuera de la bóveda.
- **Volver navegando a tu bóveda abre los archivos como notas**, con enlaces y retroenlaces, en lugar de en el visor externo.

### Corregido

- **Las etiquetas de los menús salían en inglés en todos los idiomas**; ahora proceden de las propias traducciones de Obsidian.
- **La tecla de renombrar se quedaba atascada en el diálogo de renombrar de Obsidian** cuando la nota estaba desplazada más allá de su título.
- **<kbd>Esc</kbd> requería dos pulsaciones** para cerrar el campo y su desplegable.
- **<kbd>Ctrl</kbd>+<kbd>Intro</kbd> abría un enlace en el editor** en lugar de actuar sobre la barra de ruta.
- **Renombrar fuera de la bóveda perdía el nombre escrito** al pulsar el candado.
- **Tab podía dar vueltas sin avanzar** en una carpeta que está junto a su propia nota de carpeta.

## 1.0.4 — 2026-08-13[^1.0.4]

### Añadido

- **La nota en la que estás aparece marcada en azul** en el desplegable, así que volver navegando a su carpeta muestra dónde empezaste.

## 1.0.3 — 2026-08-13[^1.0.3]

### Documentación

- El README enlaza la página del plugin en el directorio de la comunidad, y los README traducidos se ponen al día.

## 1.0.2 — 2026-08-13[^1.0.2]

### Cambiado

- **Requiere Obsidian 1.8.7 o posterior** (antes 1.4.0). Dos funciones de las que depende la barra de ruta — copiar archivos y el mensaje de error bajo el campo — lo necesitan.
- **Las descargas de cada versión llevan procedencia de compilación firmada**, así que puedes confirmar con `gh attestation verify` que `main.js` se compiló a partir de este repositorio.

### Corregido

- **Abrir en la aplicación predeterminada un archivo externo inexistente fallaba en silencio**; ahora el fallo se informa.

## 1.0.1 — 2026-08-13[^1.0.1]

### Corregido

- **En modo renombrar, una nota entraba en conflicto consigo misma** — volver navegando a su propia carpeta ocultaba su nombre de la lista, como si bloqueara su propio renombrado.
- **La primera vez que se mostraba una carpeta tras iniciar Obsidian no se desplegaba nada.**
- **Elegir una carpeta en el desplegable podía terminar el modo renombrar** en lugar de descender a ella.
- **Los cambios externos podían sobrescribirse en silencio** por otro escritor, como Sync o un segundo panel. Las escrituras ahora son atómicas.
- **El restablecimiento del contorno de foco se filtraba a otras vistas**; ahora se aplica solo a los encabezados que Lure ha modificado.

### Documentación

- El README y la guía de uso están disponibles en los 44 idiomas que incluye el plugin.
- La guía mencionaba la opción *Detectar todas las extensiones de archivo* de Obsidian, que ahora se llama *Mostrar todos los tipos de archivo*.

## 1.0.0 — 2026-08-10[^1.0.0]

Primera versión. Sustituye el nombre de archivo del encabezado de una nota por una ruta clicable y editable de su ubicación en la bóveda — una barra de direcciones para tus notas, inspirada en la de Dolphin.

### Añadido

- **Clic en una carpeta** para desplegar el contenido de su carpeta superior, cambiarla por otra hermana y dejar intacto el resto de la ruta.
- **Clic en el separador** que sigue a una carpeta para mostrarla y desplegarla en el Explorador de archivos, o para abrir su nota de carpeta cuando Folder notes se encarga.
- **Clic en el nombre del archivo o en el espacio vacío** para escribir una ruta, con autocompletado: `/` desciende, <kbd>Retroceso</kbd> sube un nivel, <kbd>Intro</kbd> confirma.
- **El modo mover/renombrar** cambia las mismas interacciones a mover y renombrar, con las mismas validaciones que aplica Obsidian.
- **<kbd>Ctrl</kbd> abre en una pestaña nueva** — o, en modo mover/renombrar, copia allí la nota en su lugar.
- **<kbd>F2</kbd> alterna** entre el título en línea y la barra de ruta.
- **Fuera de la bóveda** (desactivado por defecto): el nombre de la bóveda abre tus otras bóvedas, tu carpeta personal, la raíz del sistema de archivos y las unidades montadas. Ahí fuera no se escribe nada hasta que lo desbloquees, y una nota solo se puede copiar fuera de la bóveda, nunca mover.
- **45 idiomas.**

[^1.4.0]: Cambios desde 1.3.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.3.0...1.4.0>
[^1.3.0]: Cambios desde 1.2.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.2.0...1.3.0>
[^1.2.0]: Cambios desde 1.1.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.2...1.2.0>
[^1.1.2]: Cambios desde 1.1.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.1...1.1.2>
[^1.1.1]: Cambios desde 1.1.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.0...1.1.1>
[^1.1.0]: Cambios desde 1.0.4: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.4...1.1.0>
[^1.0.4]: Cambios desde 1.0.3: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.3...1.0.4>
[^1.0.3]: Cambios desde 1.0.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.2...1.0.3>
[^1.0.2]: Cambios desde 1.0.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.1...1.0.2>
[^1.0.1]: Cambios desde 1.0.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.0...1.0.1>
[^1.0.0]: La primera versión: <https://github.com/Gelaende51/obsidian-lure/releases/tag/1.0.0>
