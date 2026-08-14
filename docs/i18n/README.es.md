<!-- Traducción de README.md — estado: commit 9e180d1.
     Traducción automática (Claude Opus 5), no revisada por hablantes nativos.
     Se agradecen las correcciones; el README en inglés es la versión
     de referencia. -->

[English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · **Español** · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

Un plugin de [Obsidian](https://obsidian.md) que convierte el nombre de archivo de la barra de encabezado de una nota en una ruta completa navegable y editable, segmento a segmento — como la barra de direcciones del gestor de archivos [Dolphin](https://apps.kde.org/dolphin/).

![Clic en el separador que sigue a una carpeta: el puntero descansa sobre él y el Explorador de archivos ha mostrado y desplegado esa carpeta](../images/breadcrumb.png)

Obsidian 1.8.7+ · solo escritorio · AGPL-3.0

## Divulgación sobre IA

- **Agente** — **Claude Opus 5** y **Claude Sonnet 5** (Anthropic, mediante Claude Code): escribió el TypeScript, el CSS, los 45 juegos de traducciones y la documentación. Las traducciones son automáticas y no han sido revisadas por hablantes nativos.
- **Consumo** — del 3 al 13 de agosto de 2026, nueve sesiones, \~4.928 respuestas: \~7,2 M de tokens generados, \~23,7 M enviados, \~1169,6 M de relecturas en caché (\~1200,5 M en total).
- **Origen** — el modelo aprendió de código abierto, documentación y escritos de la comunidad publicados por otras personas. La mayor parte del mérito es suya.
- **Autor** — Vault51: definió cada función, probó cada iteración en una bóveda real, dirigió las correcciones y revisó todos los resultados.

## Funciones

- **Clic en una carpeta** para desplegar el contenido de su carpeta *superior* — cambia una carpeta por otra hermana sin tocar el resto de la ruta. El nombre de la nota funciona igual, extensión incluida.
- **Clic en el separador** que sigue a una carpeta para mostrarla y desplegarla en el Explorador de archivos. Una opción intercambia los dos papeles.
- **Clic derecho o arrastrar cualquier entrada** — el menú contextual y el arrastre propios del Explorador de archivos.
- **Clic en el nombre del archivo o en el espacio vacío** para escribir una ruta, con autocompletado. `/` desciende, <kbd>Retroceso</kbd> sube un nivel, <kbd>Intro</kbd> confirma.
- **El botón de lápiz sobre carpeta** cambia las mismas interacciones a mover/renombrar, con las mismas validaciones que aplica Obsidian.
- **Mantén <kbd>Ctrl</kbd>** para abrir en una pestaña nueva — o, en modo mover/renombrar, para copiar la nota allí en lugar de moverla.
- **<kbd>F2</kbd>** alterna entre el título en línea y la barra de ruta.
- **Clic en el nombre de la bóveda** para recorrer tus otras bóvedas, tu carpeta personal, la raíz del sistema de archivos y las unidades montadas sin cambiar de bóveda. Solo lectura hasta que abras un candado, y enmarcado en el color de error todo el tiempo. Desactivado por defecto — véase [fuera de la bóveda](#fuera-de-la-bóveda).
- **Dos niveles de aviso** — rojo fuera de la bóveda, naranja para los archivos de texto que Obsidian no sabe editar. Véase [los dos colores de aviso](usage.es.md#los-dos-colores-de-aviso).
- **Iconos adaptables al tema**, sustituibles desde un fragmento CSS — y **45 idiomas**, todos los que Obsidian incluye.
- **Opciones:** alineación, separadores predefinidos, qué clic abre el desplegable, nombre de la bóveda, archivos ocultos.

![El mismo desplegable en modo mover/renombrar: el nombre actual del archivo fijado arriba, las carpetas hermanas debajo y las notas existentes atenuadas](../images/dropdown.png)

*En modo mover/renombrar el mismo desplegable ofrece otra cosa: el nombre actual de la nota fijado arriba para moverla sin renombrarla, carpetas a las que llevarla, y los nombres ya ocupados atenuados para que nada se sobrescriba por accidente.*

→ [Guía de uso completa](usage.es.md)

## Fuera de la bóveda

Las políticas para desarrolladores de Obsidian exigen que un plugin explique cualquier acceso a archivos fuera de la bóveda, así que, sin rodeos:

**Si hace algo de esto siquiera.** Solo si activas **Acceso a archivos externos**, que está **desactivado por defecto**. Con la opción desactivada no hay forma de alcanzar una ruta externa desde el plugin, y nada del código descrito abajo llega a ejecutarse.

**Qué lee.** Solo cuando se lo pides. Al hacer clic en el nombre de la bóveda se listan tus otras bóvedas — leídas del propio `obsidian.json` de Obsidian — más tu carpeta personal, la raíz del sistema de archivos y las unidades montadas (`/proc/mounts` en Linux, `/Volumes` en macOS, letras de unidad en Windows). Navegar desde ahí lista el contenido de los directorios, y abrir un archivo lee ese único archivo.

**Qué escribe.** Nada, hasta que pulses un botón que lo diga. Hay dos botones así, y cada uno cubre únicamente su propio ámbito:

- El botón **Editar como texto** del visor desbloquea el archivo que tienes delante, solo ese archivo y solo en esa pestaña. A partir de ahí tus cambios se guardan en él según escribes.
- El **candado** del encabezado, visible solo mientras la barra de ruta apunta fuera de tu bóveda, desbloquea crear, renombrar y mover en rutas externas. Se vuelve a cerrar en cuanto regresas al interior, de modo que el permiso nunca sobrevive a la carpeta para la que lo concediste.

Ningún desbloqueo se guarda en el espacio de trabajo ni en las opciones, así que la escritura nunca queda armada sobre un archivo que no recuerdas haber abierto. En ninguno de los dos estados se sobrescribe nada — un destino existente se rechaza, usando la creación exclusiva del propio sistema de archivos en lugar de una comprobación que podría perder la carrera — y una nota nunca puede *moverse* fuera de tu bóveda, porque los enlaces hacia ella se romperían en silencio; mantener <kbd>Ctrl</kbd> la copia fuera en su lugar.

**Por qué.** Las notas que quieres suelen estar en otra bóveda, en una carpeta de sincronización o en un USB, y la respuesta de Obsidian — cambiar de bóveda — cierra todo lo que tenías abierto. Esto te deja ir a mirar sin salir, y corregir una errata ya que estás.

**La limitación.** El editor de Obsidian está atado a los archivos del interior de la bóveda, así que un archivo externo **no puede** abrirse como una nota de verdad, con enlaces, retroenlaces y lo demás; ningún plugin puede hacerlo. Lure lo muestra en su propio visor (Markdown, imágenes, audio, vídeo, PDF), con *Abrir externamente* para todo lo demás. La barra de ruta permanece enmarcada en el color de error siempre que apunta fuera de tu bóveda, y el recorrido empieza en el lugar que elegiste — el nombre de una bóveda, tu carpeta personal, una unidad — y no en la disposición de directorios de la máquina.

## Instalación

Aparece en [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure), pero todavía no está aprobado para el explorador dentro de la aplicación: instálalo de una de estas maneras:

**Manual:** descarga `main.js`, `manifest.json` y `styles.css` de la [última versión publicada](https://github.com/Gelaende51/obsidian-lure/releases) en `<vault>/.obsidian/plugins/lure/` y actívalo en **Preferencias → Complementos comunitarios**.

**BRAT:** añade `Gelaende51/obsidian-lure` como plugin beta.

**Desde el código fuente:** `npm install && npm run build` — véase [desarrollo](../development.md).

## Compatibilidad

No hace falta ningún plugin. El **Explorador de archivos** básico, si está activado, es lo que muestra las carpetas en la barra lateral; sin él, esos clics no hacen nada.

Probado contra los plugins comunitarios que comparten el encabezado de la nota o responden al clic sobre una carpeta — en ambos órdenes de carga y con cada uno activado y desactivado:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — el separador abre la nota de la carpeta en vez de mostrar la carpeta, con lo que cada segmento de la ruta pasa a ser un sitio al que ir. Es el único plugin de notas de carpeta que reclama la ruta del encabezado; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) y [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) no escuchan ahí, así que el separador muestra la carpeta como siempre.
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer) y [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — ambos dibujan en el mismo elemento del encabezado; Lure conserva su fila cargue quien cargue primero, y desactivar cualquiera de los dos deja el otro intacto.
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header), [Running Head](obsidian://show-plugin?id=running-head), [Crumbs](obsidian://show-plugin?id=crumbs-obsidian), [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — tienen su propia franja, y conviven sin problema.

Solo escritorio — el modelo de interacción necesita pasar el ratón por encima, clics precisos y un teclado. Los resultados completos, lo que queda por comprobar y la comparación con Quick Explorer y Breadcrumbs están en [compatibilidad](../compatibility.md).

## Cómo contribuir

- Se agradecen incidencias y pull requests — sobre todo **correcciones de traducción**, ya que los 45 idiomas están traducidos automáticamente y sin revisión de hablantes nativos. Véase [desarrollo](../development.md) para la puesta en marcha y las reglas básicas.
- **Gestor de incidencias:** https://github.com/Gelaende51/obsidian-lure/issues
- **Donaciones:** [Ko-fi](https://ko-fi.com/vault51). El plugin es gratuito y está bajo licencia AGPL en cualquier caso; las propinas se agradecen y nunca se exigen. La intención es compensar la huella de carbono — una intención, no un compromiso: no se compensa nada hasta que la suma valga el esfuerzo, y esta línea lo dirá en cuanto algo se haya compensado de verdad.

## Créditos

- **Vault51** — autor: diseño, requisitos y pruebas manuales de principio a fin.
- **Claude Opus 5** y **Claude Sonnet 5** (Anthropic, mediante Claude Code) — implementación, traducciones y documentación, bajo la dirección del autor. Véase [divulgación sobre IA](#divulgación-sobre-ia).
- **[Obsidian](https://obsidian.md)** — la aplicación que esto extiende, y el origen de cada componente que usa el plugin: su API de plugins, el juego de iconos Lucide que hay detrás de `setIcon`, la instancia de i18next incluida de la que se leen las etiquetas del menú contextual, y sus propias clases y variables CSS. No se incluye nada de terceros; el plugin **no tiene dependencias en tiempo de ejecución**.

> **El equipo de Obsidian no ha participado en este proyecto de ninguna manera** — no lo ha escrito, revisado, respaldado ni apoyado. Obsidian es una marca registrada de Dynalist Inc.; este es un plugin independiente y sin vinculación alguna.

Los contribuyentes se irán listando aquí a medida que lleguen aportaciones.

## Enlaces

- **Documentación:** [docs/](../)
- **Página del complemento:** https://community.obsidian.md/plugins/lure
- **Presencia web / código fuente:** https://github.com/Gelaende51/obsidian-lure
- **Donaciones:** [Ko-fi](https://ko-fi.com/vault51) — véase [cómo contribuir](#cómo-contribuir).
- **Licencia:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. Los forks y las compilaciones redistribuidas deben publicar su código fuente bajo la misma licencia.
