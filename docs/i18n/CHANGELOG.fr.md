<!-- Traduction de CHANGELOG.md — état : commit 973105b.
     Traduction automatique (Claude Opus 5), non relue par des locuteurs
     natifs. Les corrections sont bienvenues ; le CHANGELOG anglais fait foi. -->

[English](../../CHANGELOG.md) · [العربية](CHANGELOG.ar.md) · [አማርኛ](CHANGELOG.am.md) · [Беларуская](CHANGELOG.be.md) · [বাংলা](CHANGELOG.bn.md) · [Català](CHANGELOG.ca.md) · [Čeština](CHANGELOG.cs.md) · [Dansk](CHANGELOG.da.md) · [Deutsch](CHANGELOG.de.md) · [Ελληνικά](CHANGELOG.el.md) · [Español](CHANGELOG.es.md) · [فارسی](CHANGELOG.fa.md) · [Suomi](CHANGELOG.fi.md) · **Français** · [Gaeilge](CHANGELOG.ga.md) · [עברית](CHANGELOG.he.md) · [Magyar](CHANGELOG.hu.md) · [Bahasa Indonesia](CHANGELOG.id.md) · [Italiano](CHANGELOG.it.md) · [日本語](CHANGELOG.ja.md) · [ქართული](CHANGELOG.ka.md) · [ភាសាខ្មែរ](CHANGELOG.kh.md) · [한국어](CHANGELOG.ko.md) · [Latviešu](CHANGELOG.lv.md) · [Bahasa Melayu](CHANGELOG.ms.md) · [नेपाली](CHANGELOG.ne.md) · [Nederlands](CHANGELOG.nl.md) · [Norsk](CHANGELOG.no.md) · [Polski](CHANGELOG.pl.md) · [Português](CHANGELOG.pt.md) · [Português (Brasil)](CHANGELOG.pt-BR.md) · [Română](CHANGELOG.ro.md) · [Русский](CHANGELOG.ru.md) · [संस्कृतम्](CHANGELOG.sa.md) · [Slovenčina](CHANGELOG.sk.md) · [Shqip](CHANGELOG.sq.md) · [Српски](CHANGELOG.sr.md) · [Svenska](CHANGELOG.sv.md) · [ไทย](CHANGELOG.th.md) · [Türkçe](CHANGELOG.tr.md) · [Українська](CHANGELOG.uk.md) · [Oʻzbekcha](CHANGELOG.uz.md) · [Tiếng Việt](CHANGELOG.vi.md) · [简体中文](CHANGELOG.zh.md) · [繁體中文](CHANGELOG.zh-TW.md)

# Journal des modifications

Toutes les versions de Lure, de la plus récente à la plus ancienne. Ce qui a été ajouté depuis la dernière version figure sous *Non publié*. Les numéros de version ne portent pas de préfixe `v`, comme les étiquettes de publication.

## 1.3.0 — 2026-09-17[^1.3.0]

### Ajouté

- **Faites entrer un fichier dans le coffre depuis l'extérieur.** Déplacez ou copiez un fichier situé n'importe où sur le disque vers un chemin de votre coffre ; il y arrive comme une véritable note, et un déplacement ne supprime l'original qu'une fois la copie réussie.
- **Déposez du texte ou un fichier sur la barre pour le consigner.** Sur un dossier : une nouvelle note dans ce dossier, nommée à mesure que vous tapez. Sur le nom de la note, ou sur le séparateur d'un dossier qui possède une note de dossier : ajouté à la fin de cette note, après confirmation.
- **Créez une note de dossier** par une seconde pression sur ce qui ouvre le dossier, lorsqu'un plugin de notes de dossier est actif et que le dossier n'en a pas encore. Elle est placée là où l'indiquent les paramètres de [Folder notes](https://github.com/LostPaul/obsidian-folder-notes).
- **Faites glisser un dossier de la barre de chemin sur la barre d'onglets** pour l'y ouvrir : sa note de dossier s'il en a une, sinon un onglet placé dans ce dossier.
- **La molette parcourt le menu.** Au-dessus d'un nom, le premier cran ouvre la liste de ce nom et chaque cran suivant déplace la surbrillance d'une ligne. Une ligne en train de défiler latéralement garde la molette pour son défilement.
- **Sortez par le début du champ avec les flèches** pour y faire entrer le dossier qui le précède : <kbd>←</kbd> pour un dossier, <kbd>Maj</kbd>+<kbd>Home</kbd> (ou <kbd>Home</kbd> menu fermé) pour tous.
- **Le champ prend la couleur de ce qu'il désigne**, la même que sa ligne dans le menu, et vire au rouge dès que rien n'y répond — à l'instant où <kbd>Entrée</kbd> créerait quelque chose au lieu de l'ouvrir.
- **Les notes de dossier sont grises dans le menu**, pour qu'on les lise comme appartenant à leur dossier plutôt que comme une note de plus.
- **Clic du milieu sur un séparateur** pour ouvrir ce dossier dans un nouvel onglet : sa note de dossier, ou un onglet placé dedans.

### Modifié

- **Le cadenas et le bouton de renommage ne font qu'un.** Hors du coffre, un cadenas rouge et fermé prend la place du bouton ; l'ouvrir rend l'emplacement au bouton, et quitter le mode renommage le referme.
- **La touche de renommage interroge aussi le cadenas.** Hors du coffre, une pression fait clignoter le cadenas ; une seconde pression dans la demi-seconde accorde ce qu'accorde le cadenas et ouvre le mode renommage.
- **La touche de renommage parcourt un cycle complet** — titre en ligne, nom, nom avec extension, chemin depuis le coffre, chemin depuis la racine du système — et la pression suivante revient au titre en ligne.
- **Le <kbd>Ctrl</kbd>-clic et le clic du milieu ne sont plus synonymes.** L'un ouvre un onglet et s'y rend, l'autre l'ouvre en arrière-plan.
- **Le clic droit sur le nom de la note ouvre le menu propre au fichier.**
- **Le menu est aussi haut que la fenêtre le permet**, au lieu des 300 pixels fixes d'Obsidian.
- **Cliquer sur un dossier alors qu'un champ est ouvert conserve tout le chemin qui suit**, et cliquer dans un dossier à l'intérieur du champ liste l'intégralité du contenu de ce dossier.
- **Le séparateur ouvre une note de dossier à n'importe quelle profondeur** lorsque Folder notes est actif, et il est souligné partout où il en existe une. Auparavant, seuls les dossiers de premier niveau fonctionnaient. Avec les autres plugins de notes de dossier, le séparateur révèle toujours le dossier.

### Corrigé

- **Un champ ouvert survivait à son fichier.** Passer à une autre note avec la barre de chemin ouverte laissait la barre désigner l'ancien fichier pour le reste de la session.
- **Supprimer, Renommer et Dupliquer étaient refusés hors du coffre** alors même que le cadenas était ouvert, et restaient inaccessibles pour les images, les PDF et les pages.
- **<kbd>Ctrl</kbd>+<kbd>Entrée</kbd> ne faisait rien tant que le menu était ouvert** — c'est-à-dire dans l'état où s'ouvre chaque champ.
- **<kbd>Entrée</kbd>, menu ouvert mais aucune ligne en surbrillance,** ne faisait rien ; elle valide désormais ce que vous avez tapé.
- **Une barre qui débordait alors que tous les noms étaient déjà au plus court ne pouvait pas défiler**, rendant la fin du chemin inaccessible.
- **Désactiver le plugin laissait un bouton mort** dans l'en-tête de chaque note qu'il avait modifiée.

## 1.2.0 — 2026-08-25[^1.2.0]

### Ajouté

- **Paramètre de langue.** Lure suit par défaut la langue d'Obsidian, et peut être réglé sur n'importe laquelle des siennes. C'est aussi le seul moyen d'atteindre les traductions en grec et en sanskrit, qu'Obsidian lui-même ne propose pas. Le libellé du paramètre reste en anglais, afin qu'on puisse toujours le retrouver depuis une langue qu'on ne sait pas lire.

## 1.1.2 — 2026-08-25[^1.1.2]

### Modifié

- **Feuille de style allégée.** La barre n'utilise plus les sélecteurs `:has()` ni la plupart des règles `!important`. Elle se réajuste à moindres frais, et les avertissements de la revue des plugins sont passés de 56 à 7.

## 1.1.1 — 2026-08-22[^1.1.1]

### Corrigé

- **Un nom de dossier court pouvait s'afficher avec un trou** — `atlas` en `atl as` — parce que l'espace réservé à sa forme raccourcie était plus large que le nom lui-même.

## 1.1.0 — 2026-08-22[^1.1.0]

### Ajouté

- **Vocabulaire du clic droit.** Une pression ouvre un menu ; deux et trois pressions copient toujours plus — le nom, le nom avec son extension, le chemin. Les menus de la barre correspondent désormais à ceux de l'Explorateur de fichiers, entrée pour entrée.
- **Menus hors du coffre.** Les lignes du menu déroulant et le lecteur externe proposent l'ouverture, *Copier le chemin* et *Afficher dans le dossier* ; avec le cadenas ouvert, également *Nouvelle note*, *Nouveau dossier*, *Dupliquer*, *Renommer…* et *Supprimer*. La suppression passe par la corbeille du système et n'est jamais définitive.
- **Ouvrir ailleurs.** <kbd>Ctrl</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Maj</kbd> et le clic du milieu sur le nom de la note ou sur un dossier l'ouvrent dans un nouvel onglet, un volet divisé ou une fenêtre. Les deux se laissent glisser, comme leurs lignes dans l'Explorateur de fichiers.
- **Faites glisser des notes sur la barre pour les déplacer.** Déposez une note, plusieurs notes ou un dossier sur un segment de dossier ou sur le nom du coffre.
- **Commande : Placer le focus sur la barre de chemin**, avec tout le chemin sélectionné — aucun raccourci par défaut, attribuez le vôtre.
- **Saisissez une URL** dans la barre de chemin : `http(s)://` et `obsidian://` s'ouvrent comme des liens, `file://` et les chemins encodés en pourcentage ouvrent le fichier.
- **Complétion par <kbd>Tab</kbd>**, à la manière d'un shell : chaque pression complète aussi loin que les noms du dossier concordent et s'arrête là où ils divergent. <kbd>Maj</kbd>+<kbd>Tab</kbd> revient en arrière. Quand il n'y a plus rien à compléter, <kbd>Tab</kbd> élargit la sélection à la place : nom, nom avec extension, chemin depuis le coffre, chemin depuis la racine du système.
- **Le menu s'ouvre là où vous êtes** et affiche dans le champ un aperçu de ce que vous visez ; sortir de la liste vous rend votre texte.
- **Déplacez une note hors du coffre** après une confirmation qui compte les liens qu'elle va rompre. Elle est copiée dehors, puis mise à la corbeille, afin de pouvoir être récupérée comme n'importe quelle note supprimée.
- Paramètre **Afficher les extensions de fichier**, et prise en charge des chemins entre guillemets (tels que les produit *Copier en tant que chemin d'accès* sous Windows).
- **Les paramètres apparaissent dans la recherche des paramètres d'Obsidian** à partir d'Obsidian 1.13.

### Modifié

- **Les chemins longs tiennent dans le volet.** Les noms sont raccourcis en commençant par les moins utiles — le nom du coffre, puis l'extension, puis les dossiers, et le nom de la note en dernier — jamais au-delà du point où on peut encore les distinguer. Pointez un nom raccourci pour le lire en entier.
- **Cliquer sur le nom de la note le sélectionne sans son extension**, de sorte qu'un renommage ne risque plus de changer le type du fichier.
- **La touche de renommage s'ouvre sur le nom sans son extension**, et les pressions suivantes élargissent la sélection.
- **Cliquer sur un dossier garde le reste du chemin visible**, y compris hors du coffre.
- **Revenir dans votre coffre en naviguant ouvre les fichiers comme des notes**, avec liens et rétroliens, plutôt que dans le lecteur externe.

### Corrigé

- **Les libellés des menus étaient en anglais dans toutes les langues** ; ils proviennent désormais des traductions d'Obsidian elles-mêmes.
- **La touche de renommage restait bloquée sur la boîte de dialogue de renommage d'Obsidian** lorsque la note était défilée au-delà de son titre.
- **<kbd>Esc</kbd> demandait deux pressions** pour fermer le champ et son menu.
- **<kbd>Ctrl</kbd>+<kbd>Entrée</kbd> ouvrait un lien dans l'éditeur** au lieu d'agir sur la barre de chemin.
- **Un renommage hors du coffre perdait le nom saisi** lorsqu'on pressait le cadenas.
- **<kbd>Tab</kbd> pouvait boucler sans avancer** sur un dossier situé à côté de sa propre note de dossier.

## 1.0.4 — 2026-08-13[^1.0.4]

### Ajouté

- **La note où vous vous trouvez est marquée en bleu** dans le menu, de sorte que revenir à son dossier montre d'où vous étiez parti.

## 1.0.3 — 2026-08-13[^1.0.3]

### Documentation

- Le README renvoie à la page du plugin dans le catalogue communautaire, et les README traduits sont mis à jour.

## 1.0.2 — 2026-08-13[^1.0.2]

### Modifié

- **Nécessite Obsidian 1.8.7 ou une version ultérieure** (auparavant 1.4.0). Deux fonctionnalités dont dépend la barre de chemin — la copie de fichiers et l'infobulle d'erreur sous le champ — l'exigent.
- **Les téléchargements des versions publiées portent une provenance de build signée**, ce qui permet de vérifier avec `gh attestation verify` que `main.js` a bien été construit à partir de ce dépôt.

### Corrigé

- **L'ouverture d'un fichier externe absent dans l'application par défaut échouait silencieusement** ; l'échec est désormais signalé.

## 1.0.1 — 2026-08-13[^1.0.1]

### Corrigé

- **En mode renommage, une note entrait en conflit avec elle-même** — revenir à son propre dossier masquait son nom dans la liste, comme si elle bloquait son propre renommage.
- **La première révélation de dossier après le démarrage d'Obsidian ne dépliait rien.**
- **Choisir un dossier dans le menu pouvait mettre fin au mode renommage** au lieu d'y descendre.
- **Des modifications externes pouvaient être écrasées silencieusement** par un autre intervenant, comme Sync ou un second volet. Les écritures sont désormais atomiques.
- **La réinitialisation du contour de focus débordait sur d'autres vues** ; elle ne s'applique désormais qu'aux en-têtes modifiés par Lure.

### Documentation

- Le README et le guide d'utilisation sont disponibles dans les 44 langues fournies avec le plugin.
- Le guide nommait le paramètre *Détecter toutes les extensions de fichier* (Detect all file extensions) d'Obsidian, qui s'appelle désormais *Détecter toutes les extensions de fichiers* (Show all file types).

## 1.0.0 — 2026-08-10[^1.0.0]

Première version. Remplace le nom de fichier dans l'en-tête d'une note par un fil d'Ariane cliquable et modifiable reprenant son chemin dans le coffre — une barre d'adresse pour vos notes, inspirée de celle de Dolphin.

### Ajouté

- **Cliquez sur un dossier** pour obtenir un menu listant le contenu de son parent, afin de le remplacer par un voisin sans toucher au reste du chemin.
- **Cliquez sur le séparateur** qui suit un dossier pour le révéler et le déplier dans l'Explorateur de fichiers, ou pour ouvrir sa note de dossier lorsque Folder notes s'en charge.
- **Cliquez sur le nom de fichier ou sur l'espace vide** pour saisir un chemin, avec autocomplétion : `/` descend, <kbd>Retour arrière</kbd> remonte d'un niveau, <kbd>Entrée</kbd> valide.
- **Le mode déplacer/renommer** bascule les mêmes interactions vers le déplacement et le renommage, avec les mêmes validations qu'Obsidian applique.
- **<kbd>Ctrl</kbd> ouvre dans un nouvel onglet** — ou, en mode déplacer/renommer, y copie la note à la place.
- **<kbd>F2</kbd> alterne** entre le titre en ligne et la barre de chemin.
- **Hors du coffre** (désactivé par défaut) : le nom du coffre ouvre vos autres coffres, votre dossier personnel, la racine du système de fichiers et les disques montés. Rien n'y est écrit tant que vous ne l'avez pas déverrouillé, et une note ne peut être que copiée hors du coffre, jamais déplacée.
- **45 langues.**

[^1.3.0]: Modifications depuis 1.2.0 : <https://github.com/Gelaende51/obsidian-lure/compare/1.2.0...1.3.0>
[^1.2.0]: Modifications depuis 1.1.2 : <https://github.com/Gelaende51/obsidian-lure/compare/1.1.2...1.2.0>
[^1.1.2]: Modifications depuis 1.1.1 : <https://github.com/Gelaende51/obsidian-lure/compare/1.1.1...1.1.2>
[^1.1.1]: Modifications depuis 1.1.0 : <https://github.com/Gelaende51/obsidian-lure/compare/1.1.0...1.1.1>
[^1.1.0]: Modifications depuis 1.0.4 : <https://github.com/Gelaende51/obsidian-lure/compare/1.0.4...1.1.0>
[^1.0.4]: Modifications depuis 1.0.3 : <https://github.com/Gelaende51/obsidian-lure/compare/1.0.3...1.0.4>
[^1.0.3]: Modifications depuis 1.0.2 : <https://github.com/Gelaende51/obsidian-lure/compare/1.0.2...1.0.3>
[^1.0.2]: Modifications depuis 1.0.1 : <https://github.com/Gelaende51/obsidian-lure/compare/1.0.1...1.0.2>
[^1.0.1]: Modifications depuis 1.0.0 : <https://github.com/Gelaende51/obsidian-lure/compare/1.0.0...1.0.1>
[^1.0.0]: La première version : <https://github.com/Gelaende51/obsidian-lure/releases/tag/1.0.0>
