<!-- Traducción de CHANGELOG.md — estado: commit f133f41.
     Traducción automática (Claude Opus 5), no revisada por hablantes nativos.
     Se agradecen las correcciones; el CHANGELOG en inglés es la versión
     de referencia. -->

[English](../../CHANGELOG.md) · [العربية](CHANGELOG.ar.md) · [አማርኛ](CHANGELOG.am.md) · [Беларуская](CHANGELOG.be.md) · [বাংলা](CHANGELOG.bn.md) · [Català](CHANGELOG.ca.md) · [Čeština](CHANGELOG.cs.md) · [Dansk](CHANGELOG.da.md) · [Deutsch](CHANGELOG.de.md) · [Ελληνικά](CHANGELOG.el.md) · **Español** · [فارسی](CHANGELOG.fa.md) · [Suomi](CHANGELOG.fi.md) · [Français](CHANGELOG.fr.md) · [Gaeilge](CHANGELOG.ga.md) · [עברית](CHANGELOG.he.md) · [Magyar](CHANGELOG.hu.md) · [Bahasa Indonesia](CHANGELOG.id.md) · [Italiano](CHANGELOG.it.md) · [日本語](CHANGELOG.ja.md) · [ქართული](CHANGELOG.ka.md) · [ភាសាខ្មែរ](CHANGELOG.kh.md) · [한국어](CHANGELOG.ko.md) · [Latviešu](CHANGELOG.lv.md) · [Bahasa Melayu](CHANGELOG.ms.md) · [नेपाली](CHANGELOG.ne.md) · [Nederlands](CHANGELOG.nl.md) · [Norsk](CHANGELOG.no.md) · [Polski](CHANGELOG.pl.md) · [Português](CHANGELOG.pt.md) · [Português (Brasil)](CHANGELOG.pt-BR.md) · [Română](CHANGELOG.ro.md) · [Русский](CHANGELOG.ru.md) · [संस्कृतम्](CHANGELOG.sa.md) · [Slovenčina](CHANGELOG.sk.md) · [Shqip](CHANGELOG.sq.md) · [Српски](CHANGELOG.sr.md) · [Svenska](CHANGELOG.sv.md) · [ไทย](CHANGELOG.th.md) · [Türkçe](CHANGELOG.tr.md) · [Українська](CHANGELOG.uk.md) · [Oʻzbekcha](CHANGELOG.uz.md) · [Tiếng Việt](CHANGELOG.vi.md) · [简体中文](CHANGELOG.zh.md) · [繁體中文](CHANGELOG.zh-TW.md)

# Registro de cambios

Todas las versiones de Lure, de la más reciente a la más antigua. Lo que ha entrado desde la última versión está bajo *Sin publicar*. Los números de versión no llevan el prefijo `v`, igual que las etiquetas de publicación.

## Sin publicar[^unreleased]

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

[^unreleased]: Cambios desde 1.2.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.2.0...HEAD>
[^1.2.0]: Cambios desde 1.1.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.2...1.2.0>
[^1.1.2]: Cambios desde 1.1.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.1...1.1.2>
[^1.1.1]: Cambios desde 1.1.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.0...1.1.1>
[^1.1.0]: Cambios desde 1.0.4: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.4...1.1.0>
[^1.0.4]: Cambios desde 1.0.3: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.3...1.0.4>
[^1.0.3]: Cambios desde 1.0.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.2...1.0.3>
[^1.0.2]: Cambios desde 1.0.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.1...1.0.2>
[^1.0.1]: Cambios desde 1.0.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.0...1.0.1>
[^1.0.0]: La primera versión: <https://github.com/Gelaende51/obsidian-lure/releases/tag/1.0.0>
