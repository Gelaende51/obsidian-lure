<!-- Traduction de README.md — état : commit 33b0e60.
     Traduction automatique (Claude Opus 5), non relue par des locuteurs
     natifs. Les corrections sont bienvenues ; le README anglais fait foi. -->

[English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · **Français** · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

Un plugin [Obsidian](https://obsidian.md) qui transforme le nom de fichier affiché dans l'en-tête d'une note en un fil d'Ariane cliquable et modifiable reprenant le chemin complet dans le coffre — comme la barre d'adresse du gestionnaire de fichiers [Dolphin](https://apps.kde.org/dolphin/).

![Clic sur le séparateur qui suit un dossier : le pointeur est posé dessus, et l'Explorateur de fichiers a révélé et déplié ce dossier](../images/breadcrumb.png)

Obsidian 1.8.7+ · bureau uniquement · AGPL-3.0

## Divulgation de l'IA

- **Agent** — **Claude Opus 5** et **Claude Sonnet 5** (Anthropic, via Claude Code) : a écrit le TypeScript, le CSS, les 45 jeux de traductions et la documentation. Les traductions sont générées automatiquement et n'ont pas été relues par des locuteurs natifs.
- **Auteur** — Vault51 : a spécifié chaque fonctionnalité, testé chaque version dans un coffre réel, dirigé les corrections, relu l'ensemble des résultats.
- **Consommation** — du 3 au 13 août 2026, neuf sessions, \~4 928 réponses : \~7,2 M de tokens générés, \~23,7 M envoyés, \~1169,6 M de relectures mises en cache (\~1200,5 M au total).
- **Origine** — un modèle qui écrit des modules Obsidian l'a appris de code libre, de documentation, de réponses de forums et de rapports de bogues que des gens ont écrits et donnés. Aucun d'eux n'a été consulté, crédité ni payé. C'est la plus grande contribution non créditée ici, et elle mérite votre soutien plus que ce module : si vous choisissez où envoyer quelque chose, envoyez-le là.

## Fonctionnalités

- **Cliquez sur un dossier** pour ouvrir un menu déroulant listant le contenu de son dossier *parent* — remplacez un dossier par un voisin sans toucher au reste du chemin. Le nom de la note fonctionne de la même façon, extension comprise.
- **Cliquez sur le séparateur** qui suit un dossier pour le révéler et le déplier dans l'Explorateur de fichiers. Un paramètre échange les deux rôles.
- **Clic droit ou glisser-déposer sur n'importe quelle entrée** — le menu contextuel et le comportement de glissement propres à l'Explorateur de fichiers.
- **Cliquez sur le nom de fichier ou sur un espace vide** pour saisir un chemin, avec autocomplétion. `/` descend, <kbd>Retour arrière</kbd> remonte d'un niveau, <kbd>Entrée</kbd> valide.
- **Le bouton crayon-dossier** bascule les mêmes interactions en mode renommer/déplacer, avec les mêmes validations qu'Obsidian applique.
- **Maintenez <kbd>Ctrl</kbd>** pour ouvrir dans un nouvel onglet — ou, en mode renommer/déplacer, pour y copier la note au lieu de la déplacer.
- **<kbd>F2</kbd>** alterne entre le titre en ligne et la barre de chemin.
- **Cliquez sur le nom du coffre** pour parcourir vos autres coffres, votre dossier personnel, la racine du système de fichiers et les disques montés sans changer de coffre. En lecture seule tant que vous n'ouvrez pas un cadenas, et encadré de la couleur d'erreur en permanence. Désactivé par défaut — voir [hors du coffre](#hors-du-coffre).
- **Deux niveaux d'avertissement** — rouge hors du coffre, orange pour les fichiers texte qu'Obsidian ne sait pas éditer. Voir [les deux couleurs d'avertissement](usage.fr.md#les-deux-couleurs-davertissement).
- **Icônes thématisables**, remplaçables depuis un extrait CSS — et **45 langues**, toutes celles qu'Obsidian propose.
- **Paramètres :** alignement, séparateurs prédéfinis, quel clic ouvre le menu, nom du coffre, fichiers cachés.

![Le même menu en mode renommer/déplacer : le nom de fichier actuel épinglé en haut, les dossiers voisins en dessous, et les notes existantes grisées](../images/dropdown.png)

*En mode renommer/déplacer, ce même menu propose autre chose : le nom actuel de la note épinglé en haut pour la déplacer sans la renommer, les dossiers où la déplacer, et les noms déjà pris grisés afin que rien ne soit écrasé par accident.*

→ [Guide d'utilisation complet](usage.fr.md)

## Hors du coffre

Les règles pour développeurs d'Obsidian imposent aux plugins d'expliquer tout accès à des fichiers hors du coffre, alors disons-le simplement :

**S'il le fait seulement.** Uniquement si vous activez **Accès aux fichiers externes**, **désactivé par défaut**. Désactivé, il n'existe aucun moyen d'atteindre un chemin externe depuis le plugin, et rien de ce qui suit ne s'exécute jamais.

**Ce qui est lu.** Seulement à votre demande. Cliquer sur le nom du coffre liste vos autres coffres — lus depuis le fichier `obsidian.json` d'Obsidian lui-même — ainsi que votre dossier personnel, la racine du système de fichiers et les disques montés (`/proc/mounts` sous Linux, `/Volumes` sous macOS, lettres de lecteur sous Windows). À partir de là, la navigation liste le contenu des répertoires, et ouvrir un fichier lit ce seul fichier.

**Ce qui est écrit.** Rien, jusqu'à ce que vous pressiez un bouton qui l'annonce. Il y en a deux, chacun ne couvrant que son propre périmètre :

- Le bouton **Modifier en texte** du lecteur déverrouille le fichier affiché, pour ce seul fichier dans ce seul onglet. Vos modifications y sont alors enregistrées au fil de la frappe.
- Le **cadenas** de l'en-tête, visible uniquement tant que la barre de chemin pointe hors de votre coffre, déverrouille la création, le renommage et le déplacement à des chemins externes. Il se reverrouille dès que vous revenez à l'intérieur, afin qu'une autorisation ne survive jamais au dossier pour lequel vous l'avez accordée.

Aucun de ces déverrouillages n'est conservé dans l'espace de travail ni dans les paramètres : l'écriture n'est donc jamais armée sur un fichier dont vous ne vous souvenez pas l'avoir ouvert. Rien n'est jamais écrasé dans l'un ou l'autre état — une cible existante est refusée, au moyen de la création exclusive du système de fichiers lui-même plutôt que par une vérification qui pourrait perdre la course — et une note ne peut jamais être *déplacée* hors de votre coffre, car les liens vers elle seraient rompus en silence ; maintenir <kbd>Ctrl</kbd> l'y copie à la place.

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

- [Folder notes](obsidian://show-plugin?id=folder-notes) — le séparateur ouvre la note d'un dossier au lieu de révéler le dossier, ce qui fait de chaque segment du chemin un endroit où se rendre. C'est le seul plugin de notes de dossier à revendiquer le chemin dans l'en-tête ; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) et [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) n'y écoutent pas, le séparateur y révèle donc le dossier comme d'habitude.
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
- **Page du module :** https://community.obsidian.md/plugins/lure
- **Présence web / sources :** https://github.com/Gelaende51/obsidian-lure
- **Dons :** [Ko-fi](https://ko-fi.com/vault51) — voir [contribuer](#contribuer).
- **Licence :** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. Les forks et les builds redistribués doivent fournir leurs sources sous la même licence.
