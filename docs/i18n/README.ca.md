<!-- Traducció de README.md — estat: commit 33b0e60.
     Traducció automàtica (Claude Opus 5), no revisada per parlants nadius.
     Les correccions són benvingudes; el README en anglès és la versió
     de referència. -->

[English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · **Català** · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

Un connector d'[Obsidian](https://obsidian.md) que converteix el nom del fitxer de la barra de capçalera d'una nota en un camí complet clicable i editable, segment a segment — com la barra d'adreces del gestor de fitxers [Dolphin](https://apps.kde.org/dolphin/).

![Clic al separador que segueix una carpeta: el punter hi reposa a sobre i l'Explorador de fitxers ha mostrat i desplegat aquella carpeta](../images/breadcrumb.png)

Obsidian 1.8.7+ · només escriptori · AGPL-3.0

## Divulgació sobre la IA

- **Agent** — **Claude Opus 5** i **Claude Sonnet 5** (Anthropic, mitjançant Claude Code): va escriure el TypeScript, el CSS, els 45 jocs de traduccions i la documentació. Les traduccions són automàtiques i no han estat revisades per parlants nadius.
- **Autor** — Vault51: va definir cada funció, va provar cada versió en un cofre real, va dirigir les correccions i va revisar tots els resultats.
- **Consum** — del 3 al 13 d'agost de 2026, nou sessions, \~4.928 respostes: \~7,2 M de tokens generats, \~23,7 M enviats, \~1169,6 M de relectures de la memòria cau (\~1200,5 M en total).
- **Origen** — un model que escriu connectors d'Obsidian ho ha après de codi obert, documentació, respostes de fòrums i informes d'errors que la gent va escriure i va regalar. No se'ls va preguntar, ni acreditar, ni pagar. És la contribució sense crèdit més gran que hi ha aquí, i mereix el teu suport més que aquest connector: si tries on enviar alguna cosa, envia-ho allà.

## Funcions

- **Clica una carpeta** per obtenir una llista amb el contingut de la carpeta *superior* — canvia una carpeta per una de veïna sense tocar la resta del camí. El nom de la nota funciona igual, extensió inclosa.
- **Clica el separador** que segueix una carpeta per mostrar-la i desplegar-la a l'Explorador de fitxers. Una opció intercanvia els dos papers.
- **Clic dret o arrossega qualsevol entrada** — el menú contextual i el comportament d'arrossegament del mateix Explorador de fitxers.
- **Clica el nom del fitxer o l'espai buit** per escriure un camí, amb compleció automàtica. `/` baixa, <kbd>Retrocés</kbd> puja un nivell, <kbd>Retorn</kbd> confirma.
- **El botó de llapis sobre carpeta** passa les mateixes interaccions a moure/reanomenar, amb les mateixes comprovacions que fa Obsidian.
- **Mantén <kbd>Ctrl</kbd>** per obrir en una pestanya nova — o, en mode moure/reanomenar, per copiar-hi la nota en lloc de moure-la.
- **<kbd>F2</kbd>** alterna entre el títol dins la nota i la barra de camí.
- **Clica el nom del cofre** per navegar pels teus altres cofres, la carpeta personal, l'arrel del sistema de fitxers i les unitats muntades sense canviar de cofre. Només lectura fins que obris un cadenat, i emmarcat amb el color d'error tota l'estona. Desactivat per defecte — vegeu [fora del cofre](#fora-del-cofre).
- **Dos nivells d'avís** — vermell fora del cofre, taronja per als fitxers de text que Obsidian no sap editar. Vegeu [els dos colors d'avís](usage.ca.md#els-dos-colors-davís).
- **Icones adaptables al tema**, substituïbles des d'un fragment CSS — i **45 idiomes**, tots els que porta Obsidian.
- **Opcions:** alineació, separadors predefinits, quin clic obre la llista, nom del cofre, fitxers ocults.

![La mateixa llista en mode moure/reanomenar: el nom actual del fitxer fixat a dalt, les carpetes veïnes a sota i les notes existents en gris](../images/dropdown.png)

*En mode moure/reanomenar la mateixa llista ofereix una altra cosa: el nom actual de la nota fixat a dalt per moure-la sense reanomenar-la, carpetes on portar-la, i els noms ja ocupats en gris perquè no se sobreescrigui res per accident.*

→ [Guia d'ús completa](usage.ca.md)

## Fora del cofre

Les polítiques per a desenvolupadors d'Obsidian exigeixen que un connector expliqui qualsevol accés a fitxers de fora del cofre, així que, sense embuts:

**Si fa res de tot això.** Només si actives **Accés a fitxers externs**, que està **desactivat per defecte**. Amb l'opció desactivada no hi ha manera d'arribar a un camí extern des del connector, i res del codi descrit a sota s'arriba a executar mai.

**Què llegeix.** Només quan l'hi demanes. Clicar el nom del cofre llista els teus altres cofres — llegits del mateix `obsidian.json` d'Obsidian — més la teva carpeta personal, l'arrel del sistema de fitxers i les unitats muntades (`/proc/mounts` a Linux, `/Volumes` a macOS, lletres d'unitat a Windows). Navegar-hi a partir d'aquí llista el contingut dels directoris, i obrir un fitxer llegeix aquell únic fitxer.

**Què escriu.** Res, fins que premis un botó que ho digui. Hi ha dos botons així, i cadascun cobreix només el seu propi àmbit:

- El botó **Edita com a text** del visor desbloqueja el fitxer que tens al davant, aquell únic fitxer en aquella única pestanya. A partir d'aleshores els teus canvis s'hi desen a mesura que escrius.
- El **cadenat** de la capçalera, visible només mentre la barra de camí apunta fora del teu cofre, desbloqueja crear, reanomenar i moure en camins externs. Es torna a tancar quan tornes a dins, de manera que el permís mai no sobreviu a la carpeta per a la qual el vas concedir.

Cap dels dos desbloquejos es desa a l'espai de treball ni a les opcions, així que l'escriptura no queda mai armada sobre un fitxer que no recordes haver obert. En cap dels dos estats no se sobreescriu res — una destinació existent es rebutja, fent servir la creació exclusiva del mateix sistema de fitxers en lloc d'una comprovació que podria perdre la cursa — i una nota no es pot *moure* mai fora del teu cofre, perquè els enllaços que hi apunten es trencarien en silenci; mantenir <kbd>Ctrl</kbd> l'hi copia en comptes d'això.

**Per què.** Les notes que vols sovint són en un altre cofre, en una carpeta de sincronització o en un llapis USB, i la resposta del mateix Obsidian — canvia de cofre — tanca tot el que tenies obert. Això et deixa anar-hi a mirar sense marxar, i corregir una errada ja que hi ets.

**La limitació.** L'editor d'Obsidian està lligat als fitxers de dins del cofre, així que un fitxer extern **no es pot** obrir com una nota de debò, amb enllaços, retroenllaços i la resta; cap connector no ho pot fer. Lure el mostra al seu propi visor (Markdown, imatges, àudio, vídeo, PDF), amb *Obre externament* per a tota la resta. La barra de camí es manté emmarcada amb el color d'error sempre que apunta fora del teu cofre, i el rastre comença al lloc que has triat — un nom de cofre, la teva carpeta personal, una unitat — i no a l'estructura de directoris de la màquina.

## Instal·lació

Apareix a [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure), però encara no està aprovat per al navegador dins l'aplicació: instal·la'l d'una d'aquestes maneres:

**Manual:** baixa `main.js`, `manifest.json` i `styles.css` de la [darrera versió publicada](https://github.com/Gelaende51/obsidian-lure/releases) a `<vault>/.obsidian/plugins/lure/` i activa'l a **Configuració → Connectors de tercers**.

**BRAT:** afegeix `Gelaende51/obsidian-lure` com a connector beta.

**Des del codi font:** `npm install && npm run build` — vegeu [desenvolupament](../development.md).

## Compatibilitat

No cal cap connector. L'**Explorador de fitxers** bàsic, si està activat, és el que mostra les carpetes a la barra lateral; sense ell aquells clics no fan res.

Provat contra els connectors de la comunitat que comparteixen la capçalera de la nota o responen al clic sobre una carpeta — en tots dos ordres de càrrega, cadascun activat i desactivat:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — el separador obre la nota de la carpeta en lloc de mostrar-la, de manera que cada segment del camí passa a ser un lloc on anar. És l'únic connector de notes de carpeta que reclama el camí de la capçalera; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) i [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) no hi escolten, i per tant el separador mostra la carpeta com sempre.
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer) i [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — tots dos dibuixen dins el mateix element de la capçalera; Lure conserva la seva fila tant se val quin es carregui primer, i desactivar-ne qualsevol dels dos deixa l'altre intacte.
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header), [Running Head](obsidian://show-plugin?id=running-head), [Crumbs](obsidian://show-plugin?id=crumbs-obsidian), [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — tenen la seva pròpia franja, i conviuen sense problemes.

Només escriptori — el model d'interacció necessita passar-hi el ratolí per sobre, clics precisos i un teclat. Els resultats complets, el que queda per comprovar i la comparació amb Quick Explorer i Breadcrumbs són a [compatibilitat](../compatibility.md).

## Com contribuir

- Les incidències i les pull requests són benvingudes — sobretot les **correccions de traducció**, ja que els 45 idiomes són traduïts automàticament i no revisats per parlants nadius. Vegeu [desenvolupament](../development.md) per a la posada en marxa i les regles bàsiques.
- **Gestor d'incidències:** https://github.com/Gelaende51/obsidian-lure/issues
- **Donatius:** [Ko-fi](https://ko-fi.com/vault51). El connector és gratuït i amb llicència AGPL en qualsevol cas; les propines s'agraeixen i no s'exigeixen mai. La intenció és compensar les emissions de carboni — una intenció, no un compromís: no es compensa res fins que la suma val la pena, i aquesta línia ho dirà tan bon punt s'hagi compensat res de debò.

## Crèdits

- **Vault51** — autor: disseny, requisits i proves manuals de cap a cap.
- **Claude Opus 5** i **Claude Sonnet 5** (Anthropic, mitjançant Claude Code) — implementació, traduccions i documentació, sota la direcció de l'autor. Vegeu [divulgació sobre la IA](#divulgació-sobre-la-ia).
- **[Obsidian](https://obsidian.md)** — l'aplicació que això amplia, i l'origen de cada component que fa servir el connector: la seva API de connectors, el joc d'icones Lucide que hi ha darrere de `setIcon`, la instància d'i18next inclosa d'on es llegeixen les etiquetes del menú contextual, i les seves pròpies classes i variables CSS. No s'hi inclou res de tercers; el connector **no té cap dependència en temps d'execució**.

> **L'equip d'Obsidian no ha participat en aquest projecte de cap manera** — no l'ha escrit, revisat, avalat ni donat suport. Obsidian és una marca registrada de Dynalist Inc.; aquest és un connector independent i sense cap vinculació.

Els col·laboradors es llistaran aquí a mesura que arribin contribucions.

## Enllaços

- **Documentació:** [docs/](../)
- **Pàgina del connector:** https://community.obsidian.md/plugins/lure
- **Presència web / codi font:** https://github.com/Gelaende51/obsidian-lure
- **Donatius:** [Ko-fi](https://ko-fi.com/vault51) — vegeu [com contribuir](#com-contribuir).
- **Llicència:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. Els forks i les compilacions redistribuïdes han de publicar el seu codi font amb la mateixa llicència.
