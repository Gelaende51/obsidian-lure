<!-- Traducción de docs/usage.md — estado: commit 349b74e.
     Traducción automática (Claude Opus 5), no revisada por hablantes nativos.
     Las etiquetas del plugin proceden de src/lang/translations.ts y las de
     Obsidian de los textos que trae la propia aplicación, así que coinciden
     con lo que ves en pantalla. -->

**Lee esto en otros idiomas:** [English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · [Čeština](usage.cs.md) · [Dansk](usage.da.md) · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · **Español** · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · [Bahasa Indonesia](usage.id.md) · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · [Norsk](usage.no.md) · [Polski](usage.pl.md) · [Português](usage.pt.md) · [Português (Brasil)](usage.pt-BR.md) · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

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

Con [Folder notes](obsidian://show-plugin?id=folder-notes) instalado, ese mismo clic abre la nota de esa carpeta. Es el único plugin de notas de carpeta que se ha visto reclamar la ruta del encabezado; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) y [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) gestionan notas de carpeta pero no escuchan el clic en la ruta, así que con ellos el separador muestra la carpeta como siempre. Véase [compatibilidad](../compatibility.md#verified-against).

Un separador aparece **subrayado solo cuando la carpeta anterior tiene de verdad una nota de carpeta**, de modo que el subrayado es la promesa de que hay algo que abrir. Todos los separadores siguen siendo clicables igualmente — uno sin subrayado muestra y despliega su carpeta en la barra lateral, cosa que el cursor de mano sigue anunciando. El subrayado abandona el nombre de la carpeta al mismo tiempo: con el intercambio activado, el nombre abre el desplegable, así que marcarlo como el enlace a la nota sería mentir.

**El modo renombrar/mover manda sobre ambos**, diga lo que diga la opción: mientras hay un movimiento pendiente, nada de la fila abre una carpeta, porque abrirla abandonaría el movimiento. Los nombres de carpeta se seleccionan para editar y los separadores descienden — las dos son formas de elegir el destino — y el subrayado desaparece para indicar que abrir está suspendido.

La **raíz de la bóveda** es el único segmento que no es un segmento de ruta. No tiene carpeta superior de la que listar hermanas, así que en su lugar abre el [desplegable de ubicaciones](#navegar-fuera-de-la-bóveda) — tus otras bóvedas, la carpeta personal, la raíz del sistema de archivos y las unidades montadas.

## Clic en un segmento: cámbialo por otro hermano

Al hacer clic en el nombre de una carpeta se selecciona **el nombre de esa carpeta** dentro de un campo de texto y se abre un desplegable con la carpeta **de un nivel superior** — su carpeta madre. Al escribir o elegir una entrada se cambia esta carpeta por una hermana y se deja intacto todo lo que hay debajo, así que `Proyectos/2026/Arranque.md` → clic en `2026` → elegir `2025` te deja `Proyectos/2025/Arranque.md`.

Al hacer clic en el **nombre de la nota** ocurre lo mismo respecto a su propia carpeta, y se selecciona el nombre del archivo **con la extensión incluida** — renombrar o reapuntar una nota suele implicar cambiarla también.

El clic en la carpeta ya ha seleccionado un segmento, así que **un clic más** amplía la selección a la línea entera — esa carpeta *y* todo lo que hay debajo — y lo que escribas sustituye entonces el resto de la ruta de una vez. Funciona igual en navegación y en modo renombrar/mover.

Eso solo vale como continuación del clic que abrió el campo. Una vez que has usado el campo, se comporta como cualquier otro campo de texto: un clic coloca el cursor, un doble clic toma una palabra, un triple clic toma la línea.

En cualquier caso el resto de la ruta sigue visible alrededor del campo, como fichas antes y como texto sin seleccionar después, de modo que la ruta completa nunca desaparece del encabezado. Escribe para sustituir la selección, o pulsa <kbd>Fin</kbd> / <kbd>→</kbd> para conservarla y editar a partir de ahí. El desplegable lista la carpeta entera sin importar lo que haya prerrellenado; solo empieza a filtrar cuando escribes de verdad.

## Descender por el separador

Al hacer clic en un separador (con **El nombre de la carpeta abre el desplegable** desactivado) se desciende a la carpeta anterior: el desplegable lista el contenido de *esa* carpeta y el resto de la ruta se abre seleccionado en el campo. Al elegir una carpeta se añade al rastro de la ruta y se abre enseguida el siguiente desplegable, de modo que puedes bajar por un árbol a base de clics sin salir de la fila del encabezado.

## Las entradas del desplegable son filas de gestor de archivos de verdad

Cada archivo y carpeta del desplegable se comporta como su fila en el Explorador de archivos:

- **Clic derecho** para el mismo menú contextual — *Nueva nota* / *Nueva carpeta* en una carpeta, *Abrir en pestaña nueva* / *Renombrar* / *Eliminar* en un archivo — incluidas las entradas que otros plugins añaden a los menús de archivo.
- **Arrastra** una entrada a cualquier sitio donde Obsidian acepte un archivo: a un editor para insertar un enlace, sobre una carpeta del Explorador de archivos para moverlo, sobre la barra de pestañas para abrirlo.

El texto del menú sale de las traducciones del propio Obsidian, así que encaja con el resto de la aplicación en todos los idiomas.

## Escribir una ruta

- Al hacer clic en el **espacio vacío** antes o después de la ruta se abre un campo de texto prerrellenado con la ruta completa y totalmente seleccionada — escribe encima o edita ahí mismo. (Al hacer clic en el nombre del archivo se selecciona solo el nombre; véase arriba.)
- Escribir mientras se ve el rastro de la ruta convierte el último segmento en un pequeño campo con autocompletado en vivo limitado a la carpeta actual.
- `/` confirma el segmento actual y desciende a él.
- <kbd>Retroceso</kbd> en un campo vacío vuelve a salir a la carpeta madre y reabre su nombre con el cursor al final.
- <kbd>Intro</kbd> confirma; <kbd>Esc</kbd> o un clic en otro sitio cancela y vuelve a la ruta real del archivo.

El campo no tiene adornos — ni caja ni borde — así que se lee como el propio texto de la ruta, y crece solo a medida que escribes.

## La navegación nunca toca el archivo abierto

En el modo predeterminado (navegación) la nota abierta **nunca** se renombra ni se mueve.

- Una ruta que corresponde a un archivo existente lo abre.
- Una ruta que aún no existe pregunta *«¿Crear un archivo nuevo?»*. Al confirmar se crean las carpetas que falten y el archivo; al cancelar no ocurre absolutamente nada.

## <kbd>Ctrl</kbd> — pestaña nueva, y copiar en vez de mover

Mantener <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> en macOS) mientras eliges un archivo del desplegable, o mientras pulsas <kbd>Intro</kbd> sobre una ruta, manda el resultado a una **pestaña nueva** en lugar de a esta:

| | Sin más | Con <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Elegir o escribir un archivo existente | Se abre aquí | Se abre en una pestaña nueva |
| Escribir una ruta que no existe | Pregunta y luego abre aquí | Pregunta y luego abre en una pestaña nueva |
| Confirmar una ruta en modo renombrar/mover | **Mueve** la nota allí | La **copia** allí y abre la copia en una pestaña nueva |

El modificador se lee con la regla del propio Obsidian, así que se comporta exactamente igual que sobre un enlace o una fila del Explorador de archivos — el clic central también significa «pestaña nueva», <kbd>Ctrl</kbd>+<kbd>Alt</kbd> significa una división y <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Mayús</kbd> una ventana nueva.

Copiar se niega a sobrescribir, exactamente igual que mover — incluso sobre la propia ruta de la nota, donde no hay nada sensato que copiar.

## Navegar fuera de la bóveda

**Esto está desactivado por defecto.** Activa antes **Acceso a archivos externos** en las opciones — leer y escribir fuera de la bóveda es lo único que hace este plugin y que Obsidian por sí solo no hará, así que se entra en ello a propósito en vez de tener que salirse. Con la opción desactivada, el nombre de la bóveda simplemente muestra tu bóveda en el Explorador de archivos, y aquí nada mira nunca más allá.

Al hacer clic en el **nombre de la bóveda** (o en el icono 🏠, cuando *Mostrar el nombre de la bóveda* está desactivado) se abre un desplegable de lugares en lugar de contenidos:

- **Tus otras bóvedas**, leídas del registro del propio Obsidian, primero la abierta más recientemente, cada una bajo el icono de bóveda de Obsidian — el mismo que usa la aplicación para sus comandos de bóveda. La bóveda que ya tienes abierta lleva una casa en su lugar: es de donde parte la fila por defecto, no un sitio al que ir.
- **La carpeta personal**, bajo el nombre de tu cuenta, marcada con una `~`. Lucide no tiene tilde, así que este icono lo dibuja el plugin sobre la propia retícula de 24×24 de Lucide y con el mismo grosor de trazo — un icono que le falta al conjunto, no un carácter de texto puesto entre iconos.
- La **raíz del sistema de archivos**, etiquetada `root` — sin traducir, porque ese es su nombre en todos los sistemas — en vez de `/`, que junto al separador que viene después se leería como un paso vacío.
- Las **unidades montadas**, con un icono por tipo allí donde averiguarlo sale barato: los recursos de red, los discos ópticos, los disquetes y los medios extraíbles tienen el suyo; cualquier otra cosa recibe una unidad genérica. En Windows las unidades aparecen como `C:` con un icono genérico — los nombres de volumen y los tipos exactos exigen WMI, que a propósito no se usa.

Elegir otra bóveda **no cambia Obsidian a ella.** Todo lo que tengas abierto sigue abierto; la ruta simplemente empieza a navegar por allí. Esa es toda la razón de tenerlo en la barra de ruta en lugar de remitir al selector de bóvedas de la barra lateral.

### Mientras estás fuera

La ruta **empieza en el lugar que elegiste**, no en la disposición de directorios de la máquina — elige `Archivo` y la fila dice `Archivo / notas / …`, no `/home/tu/Vaults/Archivo/notas/…`. El primer segmento lleva un icono según lo que sea (bóveda, carpeta personal, unidad), y <kbd>Retroceso</kbd> se detiene ahí en lugar de seguir subiendo por el resto del sistema de archivos. Con *Mostrar el nombre de la bóveda* desactivado, ese segmento es solo el icono — la opción trata del segmento inicial de la fila sea cual sea la bóveda que nombre, no únicamente de la tuya.

La barra de ruta queda **enmarcada en el color de error** — el mismo anillo que dibuja el modo renombrar — todo el tiempo que apunte fuera de tu bóveda. Marca una condición permanente, no un instante: mientras está ahí, nada del manejo propio de Obsidian se aplica a lo que muestra la fila, y la escritura está bloqueada hasta que digas otra cosa.

Por lo demás la navegación funciona como dentro: fichas, separadores, escritura, autocompletado, <kbd>Retroceso</kbd> para salir. También se aplican las mismas reglas de visibilidad, así que las extensiones no admitidas siguen necesitando **Mostrar todos los tipos de archivo** de Obsidian y los archivos ocultos siguen necesitando la opción de este plugin.

**El clic derecho y el arrastre** sobre las entradas del desplegable no funcionan ahí fuera — son manejadores del propio Explorador de archivos y necesitan un archivo que la bóveda conozca.

### Escribir fuera de la bóveda

Todo lo que escribe está **bloqueado por defecto**. Aparece un **candado** junto al botón de renombrar en el encabezado mientras la fila apunte fuera de tu bóveda; al pulsarlo se abre el candado y se pone rojo, a juego con el anillo alrededor de la fila.

El permiso se concede **a un lugar, no a un momento**: sobrevive a todo lo que harías trabajando en un sitio — terminar un movimiento, hacer clic fuera del campo, abrir un archivo — y termina cuando eliges otra bóveda, unidad o raíz del desplegable, cuando la fila vuelve a un archivo de la bóveda o cuando vuelves a pulsar el candado. Así, una tanda de movimientos dentro de una carpeta cuesta una pulsación, no una por archivo.

Con el candado abierto, la barra de ruta se comporta ahí fuera como lo hace dentro:

| Gesto | Resultado |
| --- | --- |
| Escribir un nombre que no existe, <kbd>Intro</kbd> | El mismo aviso de «¿crearlo?» que dentro; también se crean las carpetas que falten. Un nombre sin extensión se convierte en `.md`, exactamente igual que dentro |
| Modo renombrar/mover, escribir un nombre nuevo | Renombra el archivo que muestra la fila. Un nombre sin extensión conserva la del archivo — aquí fuera una carpeta contiene toda clase de archivos, y un renombrado no debería convertir en silencio un `.png` en un `.md` |
| Modo renombrar/mover, navegar a otro sitio y elegir **conservar este nombre** | Lo mueve allí con el nombre que ya tiene |
| Mantener <kbd>Ctrl</kbd> en cualquiera de los dos | Copia en vez de mover, y abre la copia en una pestaña nueva |

Con el candado cerrado, todo eso informa de qué lo impide en lugar de ocurrir. En ninguno de los dos estados se sobrescribe nada: un destino que ya existe se rechaza, y el rechazo es del propio sistema de archivos (`COPYFILE_EXCL`, una creación exclusiva) y no una comprobación que podría perder la carrera. Un movimiento entre sistemas de archivos — desde un USB, desde un recurso de red — recurre a copiar y luego borrar, y el original solo se elimina cuando la copia ha llegado a su sitio.

**Una cosa que el candado no desbloquea: mover una nota *fuera* de tu bóveda.** `fileManager` no puede seguir un archivo a través de esa frontera, así que todos los enlaces que apunten a la nota se romperían en silencio y Obsidian simplemente la vería desaparecer. Mantener <kbd>Ctrl</kbd> la copia fuera, cosa que no tiene ese problema, y el aviso lo dice. El camino contrario — traer un archivo de fuera *a* la bóveda — tampoco está implementado todavía.

### Abrir un archivo externo

El editor de Obsidian solo funciona con archivos de dentro de la bóveda, así que un archivo externo **no puede** abrirse como una nota de verdad con enlaces, retroenlaces y lo demás — es un límite de la aplicación, no de este plugin. Al elegir uno se abre una **vista previa**, de solo lectura hasta que digas otra cosa:

| Tipo | Se muestra como |
| --- | --- |
| `.md`, `.markdown` | Markdown renderizado |
| Imágenes, audio, vídeo, PDF | Reproductor/visor nativo |
| Cualquier otro archivo de **texto** (`.json`, `.css`, `.log`, `.txt`, …) | Texto plano tal cual |
| Formatos binarios sin visor (`.zip`, `.exe`, …) | Se pasan a *Abrir externamente* |

El visor tiene dos lecturas de un archivo y, como se excluyen entre sí, solo se muestra aquella **a la que** cambiarías:

| | Qué hace | Predeterminado para |
| --- | --- | --- |
| **Ver como Markdown** | Renderiza el archivo como una nota, en solo lectura | `.md`, `.markdown` |
| **Editar como texto** | El código fuente, editable | todo lo demás |

Fuera de la bóveda, **Editar como texto** es además la pulsación que levanta el solo lectura — el modo y el permiso son un mismo gesto en lugar de dos botones sobre los que razonar. Se tiñe de rojo **siempre que pulsarlo levantaría el solo lectura**, tanto si estás armando la edición ahí mismo como si vienes directo de la vista renderizada; dentro de la bóveda no hay nada que desbloquear, así que se queda normal. **Ver como Markdown** recibe un lavado de color de acento suave — el mismo tinte que Obsidian da al texto seleccionado — señalándolo como el camino de vuelta y no como una llamada a la acción.

Como el botón sigue la *edición* y no el modo bruto, un archivo que está en solo lectura en la vista de texto sigue ofreciendo **Editar como texto**: esa es la pulsación que la arma. Un archivo en el que nunca se podrá escribir — truncado o ilegible — dice en cambio **Ver como texto**, ya que eso es todo lo que la pulsación puede dar.

Los valores predeterminados son los útiles y no los literales: una `#` en un script de shell es un comentario, no un encabezado, así que renderizar un `.log` como Markdown se lo tragaría sin más. Cualquiera de los dos se puede cambiar archivo por archivo, y la elección se guarda en el historial de la pestaña, así que atrás/adelante y un espacio de trabajo reabierto la conservan — muchas notas viven en archivos `.txt`, y muchos archivos `.md` se leen mejor como código fuente.

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

- **Abrir en *(bóveda)*** — se muestra cuando el archivo pertenece a una de tus otras bóvedas. Se lo pasa al propio manejador de URI de Obsidian, que abre la ventana de esa bóveda con la nota dentro, como una nota real y editable. Esta ventana se queda exactamente como estaba; nada cambia bajo tus pies.
- **Ver como Markdown** / **Editar como texto** — las dos lecturas; la segunda además levanta el solo lectura fuera de la bóveda.
- **Abrir externamente** — pasa el archivo a la aplicación predeterminada de tu escritorio, incluidos los formatos binarios que este visor no puede mostrar.

Nada de fuera de tu bóveda se escribe si no pulsas antes *Editar como texto*. Véase la sección [Fuera de la bóveda](README.es.md#fuera-de-la-bóveda) del README para la explicación completa.

## Los dos colores de aviso

| | Cuándo | Qué significa |
| --- | --- | --- |
| Anillo **rojo** en la barra de ruta | La fila apunta fuera de tu bóveda | Obsidian no puede abrir lo que hay ahí como una nota, y ahí fuera no se escribe nada hasta que abras el candado. |
| Anillo **naranja** en la barra de ruta, entradas naranjas en el desplegable | El archivo es de un tipo de texto para el que Obsidian no tiene vista | Una advertencia. Obsidian se lo pasaría a la aplicación predeterminada de tu escritorio; el plugin lo muestra en su lugar. |

Los **dos son independientes, y pueden darse a la vez** — un `.json` externo está fuera de tu bóveda *y* es un tipo para el que Obsidian no tiene editor. En el visor aparecen como líneas separadas, cada una diciendo solo su propio hecho. En la barra de ruta gana el rojo cuando se dan ambos, ya que dos anillos solo serían ruido.

El nivel naranja es deliberadamente estrecho. Los tipos registrados (Markdown, lienzo, imágenes, PDF, audio, vídeo) se tratan como es debido y no reciben nada. Los archivos binarios tampoco — no vas a convertir un `.zip` en un desastre escribiendo por accidente. Lo que queda es exactamente el peligro: un `.json`, `.css` o `.log` que **Mostrar todos los tipos de archivo** ha hecho visible.

Gana el rojo donde se aplicarían ambos; dos anillos a la vez solo serían ruido.

## Modo mover/renombrar

El botón del lápiz al extremo derecho del encabezado — junto al botón de modo de vista, del mismo tamaño que los botones nativos — activa y desactiva el modo mover/renombrar. La fila del encabezado queda entonces enmarcada en el color de acento, exactamente igual que al renombrar en el Explorador de archivos. Los mismos clics y teclas confirman ahora un movimiento o un renombrado mediante `fileManager.renameFile` de Obsidian, así que todos los enlaces a la nota van detrás.

Mientras se renombra:

- El nombre de archivo actual queda fijado en el desplegable de todas las carpetas, así que mover una nota sin renombrarla es un solo clic.
- Los nombres ya ocupados en la carpeta de destino salen en gris pero se pueden elegir igualmente.
- Lo que escribes se valida en vivo contra las propias reglas de renombrado de Obsidian — mismos juegos de caracteres, mismos mensajes, mismo mensaje emergente rojo que al renombrar en el árbol de archivos — así que un nombre ilegal o en conflicto se señala mientras escribes y no se puede confirmar.
- Hacer clic fuera de la barra del encabezado, o que el encabezado pierda el foco, termina el modo renombrar.

## Una tecla para los dos renombrados

El comando de renombrar (<kbd>F2</kbd> por defecto, o la tecla a la que lo hayas reasignado) **alterna** entre el renombrado del título en línea de Obsidian y la barra de ruta del encabezado de este plugin con la ruta completa seleccionada. Si has desactivado el título en línea de Obsidian, la barra de ruta del encabezado pasa a ser el único destino, de modo que la tecla nunca se queda sin hacer nada.

Esto funciona envolviendo el comando `workspace:edit-file-title` en lugar de secuestrar la tecla, así que reasignar el atajo y lanzar el comando desde la paleta siguen funcionando igual.

## Cómo se tiñen las entradas del desplegable

| Color | Significa |
| --- | --- |
| **Morado** | Una nota (`.md`, `.markdown`) — lo que Obsidian abrirá como nota, destacado dentro de una carpeta de contenido mezclado |
| **Naranja** | Un tipo de texto para el que Obsidian no tiene vista; véase [los colores de aviso](#los-dos-colores-de-aviso) |
| **Apagado** | Fuera de tu bóveda, así que el manejo propio de la bóveda no se aplica |
| **Azul** | La nota en la que estás. Al navegar es su propia entrada; en modo renombrar/mover, la entrada *conservar este nombre* ocupa su lugar: la misma nota en ambos casos |
| **Gris** | Solo en modo renombrar/mover: el nombre está ocupado. Se puede elegir igualmente — al hacerlo se rellena el campo, donde la validación señala el conflicto |

## Reglas de visibilidad

- Los archivos con extensiones no admitidas aparecen en los desplegables solo si la opción **Mostrar todos los tipos de archivo** de Obsidian está activada.
- El desplegable muestra como mucho 100 entradas — el límite del propio Obsidian. Cuando una carpeta tiene más, la última fila dice cuántas quedaron fuera; sigue escribiendo para acotar la lista.
- Los archivos y carpetas ocultos aparecen solo si la opción **Mostrar archivos ocultos** de este plugin está activada.
- **La protección contra sobrescritura funciona igual sea cual sea la visibilidad** — un archivo oculto te sigue impidiendo sobrescribirlo.

## Chuleta

| Quieres… | Haz esto |
| --- | --- |
| Abrir una carpeta (su nota, o mostrarla) | Clic en el separador **posterior** a esa carpeta |
| Cambiar una carpeta por una hermana | Clic en el nombre de esa carpeta, luego escribe o elige |
| Renombrar o reapuntar la nota | Clic en el nombre de la nota — extensión incluida |
| Ver el contenido de una carpeta | Clic en el nombre de esa carpeta; el desplegable lista su carpeta madre, así que haz clic en la carpeta **de debajo** de la que quieres |
| Reescribir una carpeta y todo lo que hay debajo | **Doble clic** en el nombre de esa carpeta, luego escribe |
| Editar la ruta a partir de una carpeta | Clic en el nombre de esa carpeta, luego <kbd>Fin</kbd> o <kbd>→</kbd> para deseleccionar |
| Ir a un archivo escribiendo su ruta | Clic en el nombre del archivo o en el espacio vacío, escribe, <kbd>Intro</kbd> |
| Abrir un archivo en una pestaña nueva | <kbd>Ctrl</kbd> al elegirlo, o <kbd>Ctrl</kbd>+<kbd>Intro</kbd> |
| Copiar la nota a otro sitio en vez de moverla | Lápiz, luego <kbd>Ctrl</kbd> al elegir o confirmar el destino |
| Crear una nota en una ruta que no existe | Escribe la ruta, <kbd>Intro</kbd>, confirma el aviso |
| Descender un nivel mientras escribes | Escribe `/` |
| Subir un nivel mientras escribes | <kbd>Retroceso</kbd> en el campo vacío |
| Mover o renombrar la nota abierta | Clic en el lápiz, luego navega o escribe como arriba |
| Mover sin renombrar | Lápiz → clic hasta la carpeta de destino → elige el nombre de archivo actual fijado arriba |
| Renombrar sin moverlo | <kbd>F2</kbd> dos veces (la primera va al título en línea, la segunda al encabezado) |
| Saltar a otra bóveda, a la carpeta personal o a una unidad | Clic en el nombre de la bóveda |
| Abrir un archivo de fuera de la bóveda | Nombre de la bóveda → elige un lugar → navega → elige el archivo (solo lectura hasta *Editar como texto*) |
| Cancelar cualquier cosa | <kbd>Esc</kbd>, o clic fuera de la barra del encabezado |

## Opciones

| Opción | Valores | Predeterminado | Qué hace |
| --- | --- | --- | --- |
| **Alineación** | Izquierda / Centrado / Derecha | Izquierda | Dónde se sitúa la ruta en la fila del encabezado. *Centrado* coincide con el aspecto clásico de Obsidian. |
| **Separador** | Cualquier carácter | `/` | El separador dibujado entre segmentos. Delante del campo de texto hay seis preajustes de un clic (`/ > ▸ › \ •`). |
| **Mostrar el nombre de la bóveda** | Activado / Desactivado | Activado | Si la propia bóveda es el primer segmento de la ruta. Desactivado, ese segmento se convierte en un icono 🏠 en vez de desaparecer, de modo que la ruta sigue empezando en algo clicable. |
| **El nombre de la carpeta abre el desplegable** | Activado / Desactivado | Activado | Intercambia lo que hacen el nombre de una carpeta y el separador que la sigue — véase [la tabla de arriba](#la-ruta). Con [Folder notes](obsidian://show-plugin?id=folder-notes) el separador abre notas de carpeta. Nunca se aplica en modo renombrar/mover. |
| **Mostrar archivos ocultos** | Activado / Desactivado | Desactivado | Si los archivos y carpetas ocultos se listan en los desplegables. La protección contra sobrescritura se aplica igualmente. |
| **Acceso a archivos externos** | Activado / Desactivado | **Desactivado** | Si el nombre de la bóveda abre el desplegable de ubicaciones. Desactivado, nada del plugin mira nunca más allá de esta bóveda. |

## Sustituir los iconos

Lure dibuja tres iconos: el de la raíz de la bóveda (cuando **Mostrar el nombre de la bóveda** está desactivado), el interruptor de renombrar/mover, y el candado que controla la escritura fuera de la bóveda. Todos se pueden cambiar desde un tema o un fragmento CSS — define el glifo de sustitución y oculta el que viene incluido en una sola regla:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* El candado tiene dos estados; `.is-active` es el abierto. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}

.lure-unlock-btn.is-active {
	--lure-icon-glyph: "🔓";
}
```

`--lure-icon-glyph` admite cualquier cosa válida en `content` de CSS, así que `url(...)` sirve para una imagen igual que para un glifo de texto o un emoji. Deja `--lure-icon-svg` en paz para conservar el icono de Lucide y dibujar tu glifo junto a él.
