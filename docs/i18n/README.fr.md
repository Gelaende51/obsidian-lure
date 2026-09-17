<!-- Traduction de README.md — état : commit f133f41.
     Traduction automatique (Claude Opus 5), non relue par des locuteurs
     natifs. Les corrections sont bienvenues ; le README anglais fait foi. -->

[English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · **Français** · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

Un plugin [Obsidian](https://obsidian.md) qui transforme le nom de fichier affiché dans l'en-tête d'une note en un fil d'Ariane cliquable et modifiable reprenant son chemin complet dans le coffre — comme la barre d'adresse du gestionnaire de fichiers [Dolphin](https://apps.kde.org/dolphin/).

![Clic sur le séparateur qui suit un dossier : le pointeur est posé dessus, et l'Explorateur de fichiers a révélé et déplié ce dossier](../images/breadcrumb.png)

Obsidian 1.8.7+ · bureau uniquement · AGPL-3.0

## Divulgation de l'IA

- **Agent** — **Claude Opus 5** et **Claude Sonnet 5** (Anthropic, via Claude Code) : a écrit le TypeScript, le CSS, les 45 jeux de traductions et la documentation. Les traductions sont générées automatiquement et n'ont pas été relues par des locuteurs natifs.
- **Consommation** — du 3 août au 6 septembre 2026, 22 sessions, \~13 378 réponses : \~16,3 M de tokens générés, \~62,3 M envoyés, \~4245,1 M de relectures mises en cache (\~4323,6 M au total).
- **Origine** — le modèle a appris de code libre, de documentation et d'écrits communautaires publiés par d'autres. L'essentiel du mérite leur revient.
- **Auteur** — Vault51 : a spécifié chaque fonctionnalité, testé chaque version dans un coffre réel, dirigé les corrections, relu l'ensemble des résultats.

## Fonctionnalités

- **Cliquez sur un dossier** pour ouvrir un menu déroulant listant le contenu de son dossier *parent* — remplacez un dossier par un voisin sans toucher au reste du chemin. Le nom de la note fonctionne de la même façon, et sélectionne le nom sans son extension.
- **Cliquez sur le séparateur** qui suit un dossier pour le révéler et le déplier dans l'Explorateur de fichiers. Un paramètre échange les deux rôles.
- **Clic droit ou glisser-déposer sur n'importe quelle entrée** — le menu contextuel propre à l'Explorateur de fichiers, entrée pour entrée, et son comportement de glissement. Les chemins hors du coffre reçoivent un menu équivalent construit pour eux, jusqu'à *Supprimer*, qui passe par la corbeille du système.
- **Cliquez sur le nom de fichier ou sur un espace vide** pour saisir un chemin, avec autocomplétion. `/` descend, <kbd>Retour arrière</kbd> remonte d'un niveau, <kbd>Entrée</kbd> valide — et un chemin qui n'existe pas encore est tout simplement créé, avec une notification indiquant où il a atterri.
- **Le menu s'ouvre sur l'entrée où vous vous trouvez**, et le parcourir aux flèches ou au pointeur remplit le champ avec ce que vous visez. Sortir par l'une ou l'autre extrémité de la liste vous rend ce que vous aviez tapé, et retirer le pointeur de la liste ramène la surbrillance là où vous étiez.
- **Le bouton crayon-dossier** bascule les mêmes interactions en mode déplacer/renommer, avec les mêmes validations qu'Obsidian applique.
- **Maintenez <kbd>Ctrl</kbd>** pour ouvrir dans un nouvel onglet — ou, en mode déplacer/renommer, pour y copier la note au lieu de la déplacer. Le nom de la note et les segments de dossier acceptent les mêmes modificateurs, et le glissement, que leurs lignes dans l'Explorateur de fichiers.
- **Les noms se complètent à la frappe** — là où les noms du dossier concordent, la concordance apparaît après le curseur, sélectionnée ; la frappe l'absorbe lettre après lettre, <kbd>Tab</kbd> ou <kbd>→</kbd> la prend entière, <kbd>Retour arrière</kbd> la reprend. Le menu continue de filtrer selon ce que vous avez tapé, pas selon ce qui vous a été proposé.
- **<kbd>Tab</kbd> complète comme un shell** : il prolonge ce que vous avez tapé aussi loin que les noms de ce dossier concordent, avance pas à pas vers l'un d'eux quand ils divergent, et n'entre dans un dossier qu'une fois un seul nom restant. Au-delà de la fin du chemin, il élargit la sélection : nom, nom avec extension, chemin depuis le coffre, chemin depuis la racine du système. <kbd>Maj</kbd>+<kbd>Tab</kbd> refait le même chemin en sens inverse — en marquant ce qu'il rend plutôt qu'en l'effaçant — et, passé son début, continue de remonter le chemin, puis boucle jusqu'au chemin système. Dans un sens comme dans l'autre, un tour complet ramène au chemin que vous aviez construit.
- **Clic droit pour copier** — deux fois pour un nom, trois fois pour tout ce qui est à sa droite, et sur l'espace vide pour le chemin entier ou le chemin système.
- **Faites glisser une note sur un dossier de la barre** pour l'y déplacer, liens compris — la destination est déjà à l'écran, c'est donc un seul glissement plutôt qu'un détour par l'arborescence. Le nom du coffre fonctionne aussi, pour la racine. Une sélection entière se déplace d'un bloc, et un dossier qui ne peut pas accueillir ce qu'on lui propose n'affiche rien plutôt que d'échouer après coup.
- **Déposez du texte sur la barre pour le consigner** — sur un dossier ou sur le nom du coffre pour nommer une nouvelle note qui le contiendra, sur le nom de la note elle-même pour l'ajouter à la fin de ce que vous lisez. Un fichier venu de votre bureau fonctionne de la même façon, et la ligne s'entoure de bleu tant qu'il y atterrirait.
- **Le champ prend la couleur de ce qu'il désigne** — la même couleur que sa ligne dans le menu, gris pour la note d'un dossier — et **vire au rouge** dès que rien n'y répond : vous voyez ainsi, avant d'appuyer sur <kbd>Entrée</kbd>, s'il va ouvrir une note ou en créer une.
- **Les fichiers HTML s'affichent comme des pages**, dans un cadre privé de toute permission — pas de scripts, pas de réseau, pas d'origine propre — avec les feuilles de style et les images situées à côté du fichier reprises, pour qu'une page enregistrée garde son apparence. Le code source est à un clic.
- **Saisissez une URL** — `https://`, `obsidian://`, ou un chemin `file://` ou encodé en pourcentage — et elle est ouverte au lieu d'être prise pour un nom de note. Les adresses web s'ouvrent dans un onglet du *Web viewer* (visionneuse web) d'Obsidian si vous l'avez activé.
- **Les chemins longs se raccourcissent là où les lettres sont redondantes** — jamais au-delà de ce qui distingue un dossier de son voisin, et en douceur plutôt que lettre par lettre — et ne défilent que lorsqu'il n'y a plus rien à comprimer. Pointez un nom raccourci pour le revoir en entier.
- **<kbd>F2</kbd>** alterne entre le titre en ligne et la barre de chemin, en s'ouvrant sur le nom sans son extension puis en s'élargissant jusqu'aux chemins complets aux pressions suivantes. Il traverse proprement la boîte de dialogue de renommage d'Obsidian lorsque le titre est sorti de la vue. Une commande *Placer le focus sur la barre de chemin* est disponible si vous voulez lui attribuer le geste de la barre d'adresse.
- **Cliquez sur le nom du coffre** pour parcourir vos autres coffres, votre dossier personnel, la racine du système de fichiers et les disques montés sans changer de coffre. En lecture seule tant que vous n'ouvrez pas le cadenas rouge qui, là-bas, prend la place du bouton de renommage, et encadré de la couleur d'erreur en permanence. Désactivé par défaut — voir [hors du coffre](#hors-du-coffre).
- **Deux niveaux d'avertissement** — rouge hors du coffre, orange pour les fichiers texte qu'Obsidian ne sait pas éditer. Voir [les couleurs d'avertissement](usage.fr.md#les-deux-couleurs-davertissement).
- **Icônes thématisables**, remplaçables depuis un extrait CSS — et **46 langues** : toutes celles qu'Obsidian propose, plus le grec et le sanskrit, pour lesquels il n'a pas de réglage. Choisissez-en une pour le plugin seul, ou suivez celle d'Obsidian.
- **Paramètres :** langue, alignement, séparateurs prédéfinis, quel clic ouvre le menu, nom du coffre, fichiers cachés, extensions de fichier.

![Le même menu en mode déplacer/renommer : le nom de fichier actuel épinglé en haut, les dossiers voisins en dessous, et les notes existantes grisées](../images/dropdown.png)

*En mode déplacer/renommer, ce même menu propose autre chose : le nom actuel de la note épinglé en haut pour la déplacer sans la renommer, les dossiers où la déplacer, et les noms déjà pris grisés afin que rien ne soit écrasé par accident.*

→ [Guide d'utilisation complet](usage.fr.md)

## Hors du coffre

Les règles pour développeurs d'Obsidian imposent aux plugins d'expliquer tout accès à des fichiers hors du coffre, alors disons-le simplement :

**S'il le fait seulement.** Uniquement si vous activez **Accès aux fichiers externes**, **désactivé par défaut**. Désactivé, il n'existe aucun moyen d'atteindre un chemin externe depuis le plugin, et rien de ce qui suit ne s'exécute jamais.

**Ce qui est lu.** Seulement à votre demande. Cliquer sur le nom du coffre liste vos autres coffres — lus depuis le fichier `obsidian.json` d'Obsidian lui-même — ainsi que votre dossier personnel, la racine du système de fichiers et les disques montés (`/proc/mounts` sous Linux, `/Volumes` sous macOS, lettres de lecteur sous Windows). À partir de là, la navigation liste le contenu des répertoires, et ouvrir un fichier lit ce seul fichier.

**Ce qui est écrit.** Rien, jusqu'à ce que vous pressiez un bouton qui l'annonce. Il y en a deux, chacun ne couvrant que son propre périmètre :

- Le bouton **Modifier en texte** du lecteur déverrouille le fichier affiché, pour ce seul fichier dans ce seul onglet. Vos modifications y sont alors enregistrées au fil de la frappe.
- Le **cadenas rouge** de l'en-tête, qui prend la place du bouton de renommage tant que la barre de chemin pointe hors de votre coffre, déverrouille la création, le renommage, le déplacement et la suppression à des chemins externes — puis, une fois ouvert, rend sa place au bouton. Il se reverrouille dès que vous revenez à l'intérieur, ainsi qu'à la pression qui quitte le mode renommage, afin qu'une autorisation ne survive jamais au dossier pour lequel vous l'avez accordée.

Aucun de ces déverrouillages n'est conservé dans l'espace de travail ni dans les paramètres : l'écriture n'est donc jamais armée sur un fichier dont vous ne vous souvenez pas l'avoir ouvert. Rien n'est jamais écrasé dans l'un ou l'autre état — une cible existante est refusée, au moyen de la création exclusive du système de fichiers lui-même plutôt que par une vérification qui pourrait perdre la course.

Déplacer une note *hors* de votre coffre est la seule écriture dont le coût ne peut être rattrapé par rien : Obsidian ne met à jour les liens qu'à l'intérieur du coffre, si bien que chaque lien pointant vers cette note se rompt. Elle est donc proposée derrière une boîte de dialogue qui le dit et compte les notes concernées, et elle se fait par copie puis suppression via la corbeille d'Obsidian elle-même : elle est ainsi aussi récupérable que la suppression d'une note. Maintenir <kbd>Ctrl</kbd> la copie dehors à la place.

**Pourquoi.** Les notes dont vous avez besoin se trouvent souvent dans un autre coffre, un dossier de synchronisation ou une clé USB, et la réponse d'Obsidian — changer de coffre — ferme tout ce que vous aviez d'ouvert. Ceci vous permet d'aller voir sans partir, et de corriger une faute au passage.

**La limite.** L'éditeur d'Obsidian est lié aux fichiers situés dans le coffre : un fichier externe **ne peut pas** être ouvert comme une véritable note, avec liens, rétroliens et le reste ; aucun plugin ne le peut. Lure l'affiche donc dans son propre lecteur (Markdown, images, audio, vidéo, PDF), avec *Ouvrir en externe* pour tout le reste. La barre de chemin reste encadrée de la couleur d'erreur tant qu'elle pointe hors de votre coffre, et le chemin commence à l'emplacement que vous avez choisi — un nom de coffre, votre dossier personnel, un disque — plutôt qu'à l'arborescence de la machine.

## Installation

Référencé sur [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure), mais pas encore approuvé pour le catalogue intégré — installez-le de l'une de ces façons :

**Manuelle :** téléchargez `main.js`, `manifest.json` et `styles.css` depuis la [dernière version publiée](https://github.com/Gelaende51/obsidian-lure/releases) dans `<vault>/.obsidian/plugins/lure/`, puis activez le plugin dans **Paramètres → Modules complémentaires**.

**BRAT :** ajoutez `Gelaende51/obsidian-lure` comme plugin bêta.

**Depuis les sources :** `npm install && npm run build` — voir [développement](../development.md).

## Compatibilité

Aucun plugin n'est requis. C'est l'**Explorateur de fichiers** de base, s'il est activé, qui révèle les dossiers dans la barre latérale ; sans lui, ces clics restent sans effet.

Testé avec les plugins communautaires qui partagent l'en-tête de la note ou répondent au clic sur un dossier — dans les deux ordres de chargement, chacun activé puis désactivé :

- [Folder notes](obsidian://show-plugin?id=folder-notes) — le séparateur ouvre la note d'un dossier au lieu de révéler le dossier, ce qui fait de chaque segment du chemin, à quelque profondeur qu'il soit, un endroit où se rendre : la note est déterminée d'après la convention propre à ce plugin plutôt que de lui laisser le soin de répondre. C'est aussi le seul à publier une telle convention ; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) et [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) n'en publient aucune et ne revendiquent jamais le chemin de l'en-tête, si bien qu'avec eux le séparateur révèle le dossier comme d'habitude.
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer) et [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — tous deux dessinent dans le même élément d'en-tête ; Lure conserve la ligne quel que soit celui qui charge en premier, et désactiver l'un laisse l'autre intact.
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header), [Running Head](obsidian://show-plugin?id=running-head), [Crumbs](obsidian://show-plugin?id=crumbs-obsidian), [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — possèdent leur propre bandeau et coexistent.

Bureau uniquement — le principe d'interaction suppose le survol, des clics précis et un clavier. Les résultats complets, les attentes restantes et la comparaison avec Quick Explorer et Breadcrumbs figurent dans [compatibilité](../compatibility.md).

## Contribuer

- Les tickets et les pull requests sont bienvenus — en particulier les **corrections de traduction**, puisque les 45 langues sont traduites automatiquement et non relues par des locuteurs natifs. Voir [développement](../development.md) pour l'installation et les règles de base.
- **Suivi des tickets :** https://github.com/Gelaende51/obsidian-lure/issues
- **Dons :** [Ko-fi](https://ko-fi.com/vault51). Le plugin est gratuit et sous licence AGPL dans tous les cas ; les pourboires font plaisir, ils ne sont jamais exigés. L'usage prévu est la compensation carbone — une intention, pas un engagement : rien ne sera compensé tant que le total ne justifiera pas l'effort, et cette ligne le dira dès que ce sera effectivement fait.

## Crédits

- **Vault51** — auteur : conception, spécifications et tests manuels d'un bout à l'autre.
- **Claude Opus 5** et **Claude Sonnet 5** (Anthropic, via Claude Code) — implémentation, traductions et documentation, sous la direction de l'auteur. Voir [divulgation de l'IA](#divulgation-de-lia).
- **[Obsidian](https://obsidian.md)** — l'application que ceci étend, et la source de chaque composant utilisé par le plugin : son API de plugins, le jeu d'icônes Lucide derrière `setIcon`, l'instance i18next fournie d'où sont lus les libellés du menu contextuel, ainsi que ses propres classes et variables CSS. Rien de tiers n'est embarqué ; le plugin n'a **aucune dépendance d'exécution**.

> **L'équipe d'Obsidian n'a participé d'aucune manière à ce projet** — elle ne l'a ni écrit, ni relu, ni approuvé, ni soutenu. Obsidian est une marque de Dynalist Inc. ; ceci est un plugin indépendant et non affilié.

Les contributeurs seront listés ici au fur et à mesure des contributions.

## Liens

- **Documentation :** [docs/](../)
- **Journal des modifications :** [CHANGELOG.md](CHANGELOG.fr.md)
- **Page du module :** https://community.obsidian.md/plugins/lure
- **Présence web / sources :** https://github.com/Gelaende51/obsidian-lure
- **Dons :** [Ko-fi](https://ko-fi.com/vault51) — voir [contribuer](#contribuer).
- **Licence :** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. Les forks et les builds redistribués doivent fournir leurs sources sous la même licence.
