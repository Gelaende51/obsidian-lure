<!-- Traduction de docs/usage.md — état : commit 94b1372.
     Traduction automatique (Claude Sonnet 5), non relue par des locuteurs
     natifs. Les libellés du plugin proviennent de src/lang/translations.ts ;
     pour les paramètres d'Obsidian lui-même, le nom anglais est donné entre
     parenthèses, faute d'avoir pu le vérifier ici. -->

[English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · [Čeština](usage.cs.md) · [Dansk](usage.da.md) · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · **Français** · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · [Bahasa Indonesia](usage.id.md) · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · [Norsk](usage.no.md) · [Polski](usage.pl.md) · [Português](usage.pt.md) · [Português (Brasil)](usage.pt-BR.md) · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

# Utilisation

[← retour au README](README.fr.md)

## Le fil d'Ariane

Le chemin complet de la note dans le coffre remplace le simple nom de fichier dans l'en-tête de la vue — la barre située sous la rangée d'onglets, qui porte aussi les boutons précédent/suivant.

Deux éléments de la ligne sont cliquables, et **Le nom du dossier ouvre le menu** décide lequel fait quoi :

| | Nom du dossier | Séparateur qui suit |
| --- | --- | --- |
| **Activé** (par défaut) | Sélectionne ce dossier pour le modifier | Ouvre le dossier |
| **Désactivé** | Ouvre le dossier | Descend dans ce dossier |

« Ouvre le dossier » désigne ce que fait un clic sur ce segment dans un Obsidian d'origine. Si aucun plugin n'écoute là, le dossier est révélé dans l'Explorateur de fichiers — mis en évidence, et déplié pour montrer son contenu.

Lorsque le dossier contient la note que vous êtes déjà en train de lire, le clic révèle simplement le dossier — il n'y a rien à ouvrir qui ne soit déjà à l'écran, ce qu'a toujours signifié un second appui.

Avec [Folder notes](obsidian://show-plugin?id=folder-notes) installé, le même clic ouvre plutôt la note de ce dossier, **à n'importe quelle profondeur** : la note est ici résolue selon la convention propre à ce plugin, plutôt que de lui laisser le soin d'y répondre. Ce plugin ne reconnaît que les dossiers qu'il a marqués, ce qui, sur un chemin de plus d'un dossier de profondeur, n'en concerne aucun — l'appui qui ouvrait la note d'un dossier de premier niveau ne faisait alors plus rien plus bas. Les deux autres plugins de notes de dossier ne publient aucune convention à lire et ne revendiquent jamais la ligne : avec eux, le séparateur révèle donc le dossier comme toujours. C'est le seul plugin de notes de dossier constaté à revendiquer le chemin de l'en-tête ; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) et [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) gèrent des notes de dossier mais n'écoutent pas de clic sur le fil d'Ariane, donc avec eux le séparateur révèle le dossier comme d'habitude. Voir [compatibilité](../compatibility.md#verified-against).

Un séparateur n'est **souligné que si le dossier qui le précède a effectivement une note de dossier**, si bien que le soulignement est une promesse : quelque chose est là à ouvrir — à n'importe quelle profondeur avec [Folder notes](obsidian://show-plugin?id=folder-notes) actif, puisque la note est ici résolue plutôt que laissée à ce plugin le soin de la marquer. Là où ce n'est pas ce plugin qui est actif, rien n'est souligné et rien ne s'ouvre : le séparateur révèle, comme il le fait sans aucun plugin de notes de dossier. Chaque séparateur reste cliquable dans tous les cas — un séparateur sans soulignement révèle et déplie son dossier dans la barre latérale, ce que le curseur en forme de pointeur continue de signaler. Le soulignement quitte en même temps le nom du dossier : avec l'échange activé, le nom ouvre le menu, donc le marquer comme le lien vers la note serait un mensonge.

**Le mode renommer/déplacer l'emporte sur les deux**, quoi que dise le paramètre : rien dans la ligne n'ouvre un dossier tant qu'un déplacement est en cours, car l'ouvrir reviendrait à l'abandonner. Les noms de dossier sélectionnent pour modification et les séparateurs descendent — ce sont deux façons de choisir la destination — et le soulignement disparaît pour montrer que l'ouverture est suspendue.

La **racine du coffre** est le seul segment qui n'est pas un segment de chemin. Elle n'a pas de parent dont lister les voisins : elle ouvre donc le [menu des emplacements](#naviguer-hors-du-coffre) — vos autres coffres, votre dossier personnel, la racine du système de fichiers et les disques montés.

## Le séparateur propre au coffre

Le séparateur qui suit immédiatement le nom du coffre représente le coffre
lui-même plutôt qu'un dossier, si bien qu'il fait ce qu'aucun autre séparateur
ne peut faire :

| | Premier clic | Clic suivant |
| --- | --- | --- |
| **Avec un plugin de page de démarrage** (une page qui vous accueille à l'ouverture d'Obsidian) | Ouvre cette page dans ce volet | Replie l'arborescence des fichiers |
| **Sans un tel plugin** | Replie l'arborescence des fichiers | Restaure exactement ce qui était ouvert |

Des clics ordinaires, pas un double-clic : une fois la page ouverte, le
séparateur n'a plus rien à ouvrir, donc l'appui suivant produit le repli —
quel que soit le temps que vous y mettiez.

Il est **souligné** lorsqu'il existe une page de démarrage à ouvrir, la même
promesse que fait le séparateur d'un dossier : quelque chose est là. Le repli
est un bouton à bascule — l'appui suivant restaure les dossiers qui étaient
ouverts, et ceux-là seuls, si bien qu'une arborescence que vous aviez organisée
n'est pas perdue pour un simple coup d'œil ailleurs.

## Un volet sans fichier

Un onglet vide, le graphe et tout ce qui ne désigne aucun fichier reçoivent
leur propre ligne : le coffre, puis un segment indiquant ce que contient le
volet.

```
mon-coffre / :blank      un nouvel onglet
mon-coffre / :graph      le graphe, local ou global
mon-coffre / :<type>     tout autre élément sans fichier
```

Le **listage de la racine du coffre elle-même** propose aussi ces pages, sous
les dossiers et notes qui s'y trouvent réellement : choisissez `:graph` ou
`:search` là, et le volet ouvre cette vue, exactement comme choisir une note
ouvre la note. Les pages qui existent sont lues depuis Obsidian plutôt que
répertoriées ici — toute vue qui n'existe pas pour afficher un fichier — de
sorte qu'un plugin qui en enregistre une (un onglet d'accueil, un calendrier)
apparaît sans que ce plugin en sache quoi que ce soit. Les vues qui ont besoin
d'un fichier — Markdown, PDF, images, canvas, bases — ne sont pas proposées :
il n'y a rien à leur faire afficher.

Les deux-points sont l'essentiel — aucun fichier ni dossier ne peut s'appeler
`:graph`, donc la ligne ne peut pas être confondue avec un chemin qui pourrait
être ouvert. L'étiquette provient du type de vue plutôt que du texte propre
d'Obsidian, si bien qu'elle se lit de la même façon quelle que soit la langue
de l'interface, et un `-view` final est retiré : un plugin d'onglet d'accueil
enregistre sa vue sous le nom `home-launcher-view`, et la ligne affiche
`:home-launcher`.

Cliquer sur l'espace vide, ou sur l'étiquette elle-même, **ouvre le champ à la
racine du coffre** : tapez un chemin et <kbd>Entrée</kbd> l'ouvre dans ce même
volet, avec la même complétion, le même menu et le même champ rouge proposant
de créer ce qui n'existe pas encore. Un onglet vide est un bon endroit pour
taper où vous voulez aller, c'est d'ailleurs à cela qu'il sert.

L'étiquette n'est qu'une étiquette et rien de plus : pas de menu, pas de
glisser, pas de renommage. Les volets des barres latérales sont laissés
entièrement tranquilles — un volet de rétroliens conserve le titre
qu'Obsidian lui donne.

Les canvas, PDF, images et bases n'ont besoin de rien de tout cela. Ce sont
des fichiers, ils reçoivent donc une barre de chemin ordinaire.

## Cliquer sur un segment : le remplacer par un voisin

Cliquer sur un nom de dossier sélectionne **le nom de ce dossier** dans un champ de texte et ouvre un menu listant le dossier situé **un niveau au-dessus** — son parent. Taper ou choisir une entrée remplace ce dossier par un voisin et laisse intact tout ce qui se trouve en dessous : `Projets/2026/Lancement.md` → clic sur `2026` → choisir `2025` donne `Projets/2025/Lancement.md`.

Cliquer sur **le nom de la note** fonctionne de la même façon par rapport à son propre dossier, et sélectionne le nom **sans son extension** — le renommage étant la modification la plus courante, et taper directement sur une sélection incluant `.md` changeait autrefois le type de fichier par accident. L'extension reste visible à une touche de distance : <kbd>→</kbd> l'atteint, et le double-clic qui élargit à toute la ligne l'emporte avec le reste.

Le clic sur le dossier a déjà sélectionné un segment ; **un clic supplémentaire** élargit donc la sélection à la ligne entière — ce dossier *et* tout ce qui suit — et la saisie remplace alors le reste du chemin d'un seul coup. Fonctionne pareillement en navigation et en mode renommer/déplacer.

Cela ne vaut que dans la continuité du clic qui a ouvert le champ. Une fois que vous vous en êtes servi, il se comporte comme n'importe quel champ de texte : un clic place le curseur, un double-clic prend un mot, un triple-clic la ligne.

Dans les deux cas, le reste du chemin reste visible autour du champ, sous forme de puces avant lui et de texte non sélectionné après lui, si bien que le chemin complet ne disparaît jamais de l'en-tête. Tapez pour remplacer la sélection, ou appuyez sur <kbd>→</kbd> pour la conserver et modifier à partir de là. Le menu liste tout le dossier quel que soit le préremplissage ; il ne commence à filtrer qu'une fois que vous vous mettez réellement à taper.

## Descendre par le séparateur

Cliquer sur un séparateur (avec **Le nom du dossier ouvre le menu** désactivé) descend dans le dossier qui le précède : le menu liste le contenu de *ce* dossier, et le reste du chemin s'ouvre sélectionné dans le champ. Choisir un dossier l'ajoute au fil d'Ariane et ouvre aussitôt le menu suivant : vous pouvez donc descendre une arborescence au clic sans quitter la ligne d'en-tête.

## Le menu s'ouvre là où vous êtes

La liste s'ouvre sur l'entrée où vous vous trouvez — la note à laquelle
appartient cette barre, ou, lorsqu'un clic sur un dossier a listé son parent,
ce dossier — plutôt que sur la première ligne. Dans un dossier de deux cents
notes, la première ligne n'est jamais près de vous.

**Une molette au-dessus d'un nom ouvre sa liste et la parcourt.** Le premier
cran ouvre la même liste que celle ouverte en appuyant sur le nom, et chaque
cran suivant déplace la surbrillance d'une ligne, plaçant ce que vous visez
dans le champ, exactement comme le ferait les flèches — de sorte qu'un voisin
peut être trouvé et pris sans le clavier. Tourner au-delà de l'une ou l'autre
extrémité vous rend votre texte. Une ligne dont le chemin dépasse le volet
répond à la molette en défilant plutôt latéralement, ce qui l'emporte tant
que cela s'applique.

La liste est **aussi haute que la fenêtre le permet**. Obsidian plafonne ses
listes de suggestions à 300 pixels, quoi qu'il y ait en dessous ; celle-ci va
jusqu'en bas de la fenêtre, s'arrêtant à quelques pixels du bord, et ne défile
que si le dossier contient davantage d'entrées. Elle n'est **pas plus large
que la barre de chemin** : un nom qui ne tient pas est raccourci comme l'est
un nom dans la ligne, et affiché en entier quand vous le visez.

Se déplacer dans la liste **place ce que vous visez dans le champ**, par la
flèche du clavier ou en survolant — à la place du segment que vous modifiiez,
le reste du chemin restant en place — si bien que la ligne sur laquelle vous
êtes est aussi le chemin que vous obtiendriez.

Le reste du chemin n'est montré **que dans la mesure où il existe sous ce que
vous visez**. En étant dans un dossier, avec `2026/note.md` derrière le
segment que vous modifiez, viser un dossier qui contient un `2026` avec un
`note.md` dedans montre le tout ; un dossier qui a le `2026` mais pas la note
montre `2026` ; un dossier qui n'a ni l'un ni l'autre ne montre rien après le
nom, et un fichier non plus, puisque rien ne vit sous lui. Ce **que vous avez
tapé** conserve son chemin entier pendant que vous le tapez, aussi peu qu'il y
en ait pour l'instant — un nom à moitié tapé n'est pas une décision. Fixer un
nom en est une, et ce qui ne peut être atteint à partir de là est coupé à ce
point ; les dossiers que vous créez sont ceux que vous tapez *après* lui, ce
qui est là où <kbd>Entrée</kbd> les crée.
Le texte que vous aviez tapé est conservé : sortir **par l'une ou l'autre
extrémité de la liste** — vers le haut au-delà de la première entrée, ou vers
le bas au-delà de la dernière — l'abandonne et remet votre texte en place,
sans rien en surbrillance. Le champ est un arrêt sur l'anneau comme toute
entrée, si bien qu'un tour y passe plutôt que de sauter directement de la
dernière ligne à la première, et continuer à partir de là ramène à l'autre
extrémité.

Retirer **le pointeur de la liste** remet lui aussi votre texte en place — et
rend la surbrillance à ce qui l'avait avant l'arrivée de la souris : l'entrée
à laquelle vous étiez arrivé par les flèches, réapparaissant dans le champ, ou
celle sur laquelle la liste s'est ouverte parce que c'est là où vous êtes.
Survoler est une façon de regarder plutôt que de choisir, donc balayer la
liste du pointeur ne vous coûte rien.

La liste elle-même ne change pas pendant que vous la parcourez — elle continue
de filtrer selon ce que vous avez tapé, pas selon ce qui a été prévisualisé
dans le champ — si bien que l'entrée sous vous ne se dérobe jamais avant
l'appui suivant. Taper remplace l'aperçu et filtre comme d'habitude.

**Ce selon quoi elle filtre est le segment que vous modifiez**, pas tout le
contenu du champ. Cliquer sur un dossier laisse le reste du chemin dans le
champ derrière le nom que vous changez, donc filtrer sur son intégralité
chercherait un enfant nommé `2026/Lancement.md` et n'en trouverait aucun — la
liste se fermerait dès la première touche tapée. **L'extension est elle aussi
laissée de côté**, tant que le curseur se trouve devant le point : cliquer sur
le nom d'une note en sélectionne le radical et laisse `.md` derrière, donc
taper une lettre fait lire au champ `a.md`, ce qui n'est pas ce que vous
cherchez. Placez le curseur après le point, et l'extension compte comme
n'importe quel autre caractère. Un nom qui ne correspond vraiment à rien ferme
tout de même la liste, car une liste vide est la réponse honnête.

Un aperçu **remplace ce seul segment et laisse le reste du chemin intact** :
viser un dossier demande ce qu'il adviendrait si cette étape en était une
autre, pas de jeter le chemin. Sortir de la liste restaure le texte *et* la
sélection que vous aviez, si bien que la touche suivante remplace ce qu'elle
allait remplacer avant que vous ne regardiez.

## Les entrées du menu sont de vraies lignes de gestionnaire de fichiers

Chaque fichier et chaque dossier du menu se comporte comme sa ligne dans l'Explorateur de fichiers :

- **Clic droit** pour le même menu contextuel que donne l'Explorateur de fichiers, entrée pour entrée — y compris celles ajoutées par d'autres plugins. Un dossier propose *Nouvelle note*, *Nouveau dossier*, *Nouveau canvas*, *Nouvelle base*, *Faire une copie*, *Déplacer le dossier vers…*, *Rechercher dans le dossier*, *Copier le chemin*, *Afficher dans l'explorateur système*, *Renommer…* et *Supprimer* ; un fichier propose son équivalent, *Ouvrir avec l'application par défaut* compris.
- **Glisser** une entrée n'importe où qu'Obsidian accepte un fichier : dans un éditeur pour insérer un lien, sur un dossier de l'Explorateur de fichiers pour le déplacer, sur la barre d'onglets pour l'ouvrir.

Les intitulés des menus proviennent des traductions d'Obsidian : ils s'accordent donc au reste de l'application dans toutes les langues.

## Saisir un chemin

- Cliquer sur l'**espace vide** avant ou après le fil d'Ariane ouvre un champ texte sur le chemin entier *et affiche la note dans l'explorateur de fichiers*, si bien que l'arborescence suit le panneau sans un second geste. Il **compte vos clics** : un sélectionne le chemin sans l'extension, deux le sélectionnent avec, trois sélectionnent le chemin que la machine connaît. Cliquer sur le **nom du fichier** compte de la même façon mais démarre un échelon plus bas, sur le nom lui-même : un le sélectionne sans l'extension, deux avec, et trois élargissent au chemin entier *depuis le dossier de votre coffre* — la forme qu'un lien ou une recherche veut, plutôt que celle de la machine. Un quatrième clic atteint celle-là.
- **Le comptage appartient à la série de clics qui a ouvert le champ.** Une fois qu'elle a expiré — vous avez marqué une pause, tapé, ou cliqué une fois quelque part dans le texte — le champ est un champ texte comme un autre, et un double-clic y sélectionne le mot sous le pointeur comme il le ferait ailleurs. Tapez par-dessus ce qui est sélectionné, ou modifiez sur place. (Cliquer sur le nom de fichier lui-même sélectionne seulement le nom du fichier ; voir ci-dessus.) Faire un clic droit sur ce même espace **copie** ces mêmes trois niveaux, à deux, trois et quatre clics — un bouton les montre, l'autre les prend. Un **seul** clic droit ouvre le chemin avec tout son contenu sélectionné et propose ce qui peut lui être fait : couper, copier, coller, tout sélectionner, dans les mots mêmes d'Obsidian.
- **Cliquez avec le bouton du milieu sur l'espace vide** pour coller par-dessus le chemin : le champ s'ouvre sur le chemin entier *depuis la racine du coffre*, si bien que le presse-papiers remplace le tout, et ce qui atterrit est sélectionné. <kbd>Entrée</kbd> vous y mène ensuite.
- **<kbd>Ctrl</kbd>+clic sur l'espace vide** pour rouvrir cette note dans un onglet qui lui est propre, mis en évidence dans l'explorateur de fichiers pour que le second onglet ne soit pas confondu avec le premier. Sur le **nom du coffre**, <kbd>Ctrl</kbd>+clic ou clic du milieu ouvre un onglet ne contenant rien, se tenant à la racine du coffre avec la liste déjà affichée — un endroit où taper un chemin depuis rien.
- Taper pendant que le fil d'Ariane est affiché convertit le segment final en un petit champ avec autocomplétion en direct limitée au dossier courant.
- **Un chemin depuis la racine du système de fichiers peut être tapé.** `/` devant un champ vide en ouvre un plutôt que de compléter un échelon, chaque barre oblique après lui appartient à cette syntaxe, et `~` est votre dossier personnel. Tant que le champ contient un tel chemin, le menu liste la machine plutôt que le coffre, et le segment d'ouverture de la ligne s'efface — ce qui est dans le champ part de la racine et le signale. Avec *Accès aux fichiers externes* désactivé, la liste reste vide à la place, puisque <kbd>Entrée</kbd> refuserait le chemin de toute façon.
- **Une page peut être tapée, pas seulement choisie.** `:graph`, `:search`, ou tout ce que vos extensions enregistrent — les libellés que propose [le listing de la racine du coffre](#un-volet-sans-fichier). Taper un deux-points n'importe où les fait apparaître, puisqu'aucun nom ne peut en contenir un, et <kbd>Entrée</kbd> ouvre cette vue dans ce panneau. `:graph` tapé **à l'intérieur d'un dossier** ouvre le graphe de ce dossier — le graphe filtré sur `path:"ce/dossier"` dans son propre champ de recherche, comme s'il y avait été tapé ; à la racine du coffre, c'est le graphe entier. <kbd>Tab</kbd> termine le nom comme il termine celui d'un dossier — et emporte avec lui tout ce que le champ contenait par ailleurs, puisqu'une page n'est dans aucun dossier et que rien ne vit sous l'une d'elles. Cliquer sur le libellé d'une telle page ouvre le champ le contenant déjà.
- **Ce que <kbd>Tab</kbd> écrirait est proposé au fur et à mesure que vous tapez.** Là où chaque élément commençant par ce que vous avez tapé continue de s'accorder un moment, cet accord apparaît après le curseur, sélectionné ; là où ils cessent de s'accorder, le pas vers le premier d'entre eux le fait — ou vers la ligne que vous avez atteinte avec les flèches, puisque c'est vers elle que <kbd>Tab</kbd> se dirigerait. Taper par-dessus un nom laisse son extension en place et propose ce qui la précède, et un dossier dans lequel on vient d'entrer propose son premier pas, si bien qu'il n'existe aucun état où rien n'est proposé et où <kbd>Tab</kbd> écrit quand même quelque chose. Tapez ces lettres et elle est avalée une par une ; tapez autre chose et elle disparaît. <kbd>Tab</kbd> ou <kbd>Fin</kbd> la prend entièrement, <kbd>→</kbd> en prend une lettre, <kbd>Retour arrière</kbd> la retire sans toucher à une lettre que vous avez tapée, et rien n'est proposé de nouveau tant que vous ne tapez pas — il y a donc toujours un moyen de sortir d'un nom que vous ne vouliez pas. Après un appui sur <kbd>Tab</kbd>, le pas suivant est proposé aussitôt, comme après une lettre tapée. Ce que liste le menu est filtré par ce que **vous** avez tapé, jamais par ce qui a été proposé.
- **Les propositions ignorent la casse.** `sch` propose `Schemes`, orthographié comme le nom l'est ; reprendre la proposition rend vos lettres telles que vous les avez tapées. Là où `Test` et `test` existent tous deux, celui orthographié comme vous l'avez tapé est proposé.
- Dans le champ, la partie proposée est simplement **sélectionnée**. C'est dans la liste qu'elle est détaillée : chaque ligne montre la partie qui **correspond à ce que vous avez tapé en gras**, où que ce soit dans le nom qu'elle corresponde — `kick` trouve `Weekly kickoff` et le signale. **Les noms qui commencent par ce que vous avez tapé viennent en premier**, avant ceux qui le contiennent seulement, et sont marqués d'un trait sur leur bord : **bleu** là où ils partagent plus que ce que vous avez tapé, si bien que <kbd>Tab</kbd> a quelque chose à ajouter pour chacun d'eux, et **vert** sur la branche que suit la proposition à l'endroit où ils se séparent — `te` avec `test1`, `test2`, `text1` et `text2` propose `te`+`st`, si bien que les deux lignes `test` sont vertes et que les deux lignes `text` gardent le trait uni. Chacune d'elles **souligne le pas que <kbd>Tab</kbd> ferait vers elle**, pas seulement celle qui est proposée, et le soulignement suit la proposition à mesure qu'elle change.
- **Taper lâche la ligne en surbrillance.** La liste s'ouvre sur l'entrée où vous vous trouvez, mais dès que vous tapez, il s'agit d'ailleurs, et une surbrillance que personne n'a placée là se lit comme un choix déjà fait.
- La proposition n'est jamais qu'un texte devant vous : les lettres que vous avez tapées restent orthographiées comme vous les avez tapées pendant que vous tapez, et accepter la proposition réécrit le nom comme le dossier l'orthographie, parce qu'un chemin doit correspondre au disque. `sk` + <kbd>Tab</kbd> atteint `Skyline`, pas `skyline`.
- **Le champ porte la couleur de ce qu'il nomme**, la même couleur que sa ligne dans le menu : violet pour une note, y compris la note propre d'un dossier, orange pour tout ce qui n'est pas une note, bleu pour la note où vous êtes. La ligne dont il tire sa couleur est celle nommée exactement comme ce que vous avez tapé, ou à défaut celle en surbrillance, ou à défaut la première vers laquelle votre saisie mène encore.
- **Le champ devient rouge dès que rien ne répond à ce qu'il contient** — ni fichier, ni dossier, ni ligne du menu n'y menant plus. À partir de là, <kbd>Entrée</kbd> crée ce qui est dans le champ plutôt que de l'ouvrir, et le rouge le signale avant que vous ne validiez. Il n'apparaît jamais pour une adresse web, qui n'est pas un endroit sur cette machine où aller chercher. C'est le champ **entier** qui est coloré plutôt que seulement la partie manquante : un champ texte ne peut pas colorer la moitié de son propre contenu. En mode déplacer/renommer, le champ garde sa propre couleur rouge pour un nom illégal — là, un nom auquel rien ne répond est justement le but. Le fait qu'un nom soit **déjà pris** est traité au moment où vous validez, avec une boîte de dialogue demandant ce qu'il faut faire du fichier qui fait obstacle — voir [Un nom déjà pris](#un-nom-déjà-pris) : chaque nom tapé vers `Notes.md` passe par des noms qui peuvent être des fichiers à part entière, si bien que le signaler lettre par lettre aurait averti d'un nom que personne n'avait encore demandé.
- `/` valide le segment que vous êtes en train de taper et y descend, en conservant ce qui le précède — la même chose que fait <kbd>Tab</kbd> quand il entre dans un dossier.
- <kbd>Retour arrière</kbd> dans un champ vide remonte au dossier parent, en rouvrant son nom avec le curseur à la fin. Il en va de même pour <kbd>Retour arrière</kbd> devant une extension laissée seule — un champ ne contenant que `.md` ne nomme rien — et l'extension isolée part avec lui.
- **Cliquer sur un dossier pendant qu'un champ est ouvert l'élargit au chemin entier après ce dossier**, avec le nom propre du dossier sélectionné — la même chose que cliquer dessus aurait fait depuis la ligne, et tout ce que le champ contenait est conservé. Ce qui est dans le champ est la queue de la ligne tant qu'il est ouvert, si bien qu'un dossier cliqué plus haut rend le chemin que la session a parcouru plutôt que celui sur lequel la note a démarré.
- **Sortir par l'avant du champ avec les flèches fait entrer le dossier qui le précède**, comme si le chemin entier était une seule ligne de texte. Avec le curseur tout au début, <kbd>←</kbd> fait entrer ce dossier dans le champ et atterrit à la fin de son nom, <kbd>Ctrl</kbd>+<kbd>←</kbd> atterrit à son début, et <kbd>Origine</kbd> fait entrer tous les dossiers jusqu'à la racine du coffre — ou jusqu'à l'endroit que vous avez choisi, hors du coffre — d'un coup. Maintenez <kbd>Maj</kbd> et la sélection s'étend sur ce qui est entré. Sur macOS, le saut de mot est <kbd>Option</kbd>+<kbd>←</kbd> et <kbd>Cmd</kbd>+<kbd>←</kbd> équivaut à <kbd>Origine</kbd>. Partout ailleurs qu'à l'avant, ce sont des touches de texte ordinaires. **Pendant que le menu est affiché, <kbd>Origine</kbd>, <kbd>Fin</kbd>, <kbd>Page préc.</kbd> et <kbd>Page suiv.</kbd> lui appartiennent** — première ligne, dernière ligne, une page vers le haut, une page vers le bas, une page étant ce que la liste affiche, la ligne en surbrillance gardant sa place à l'écran — et n'atteignent le texte qu'une fois le menu fermé ; <kbd>Maj</kbd>+<kbd>Origine</kbd> fait aussi entrer tous les dossiers avec la liste ouverte.
- **La liste suit le curseur.** Choisissez une autre partie du chemin — glissez dessus, cliquez dedans, ou déplacez-vous avec les flèches — et le menu liste les enfants de *ce* dossier-là, pas celui sur lequel le champ a été ouvert. Le dossier est calculé à partir des segments plus ce qui, dans le champ, se trouve avant le curseur, si bien que cliquer dans `Notes.md` dans un champ contenant `2026/Notes.md` liste ce qu'il y a dans `2026`. Pointer une ligne l'écrit dans le segment où se trouve le curseur, et retirer le pointeur de la liste vous rend votre texte et votre sélection exactement comme ils étaient.
- **Faire glisser une sélection hors du champ** et relâcher ailleurs ne le ferme pas. Un clic qui commence dans le champ appartient à la modification, aussi loin qu'il voyage ; seul un clic qui *commence* à l'extérieur en sort.
- <kbd>Entrée</kbd> valide — et quand le champ ne nomme rien du tout, comme dans un dossier vide où il n'y a jamais rien eu à compléter, il affiche *Aucun fichier sélectionné* et reste ouvert plutôt que de se fermer comme si quelque chose avait été choisi. <kbd>Échap</kbd> ou un clic ailleurs annule et revient au chemin réel du fichier. Un seul appui sur <kbd>Échap</kbd> suffit : il ferme le menu, quitte le champ et rend le focus à la note, plutôt que de demander un appui par niveau.

Le champ est dépouillé — pas de cadre, pas de bordure — pour se lire comme le texte du chemin lui-même, et il s'élargit à mesure que vous tapez.

## Chaque partie de la ligne, bouton par bouton

Toute la ligne en un coup d'œil. La colonne clic droit est ce qu'**une seule**
pression vous donne ; ce bouton compte aussi les pressions, et [son propre
tableau](#clic-droit--une-pression-deux-pressions-trois) plus bas donne la deuxième,
la troisième et la quatrième. Celui-ci suppose que **Le nom du dossier ouvre le
menu** est activé, ce qui est le réglage par défaut — désactivé, le nom du
dossier et le séparateur échangent la première colonne, comme le dit [le
tableau du haut](#le-fil-dariane).

| Où vous appuyez | Clic | Double-clic | <kbd>Ctrl</kbd>+clic, ou clic molette | Clic droit | Déposer quelque chose dessus |
| --- | --- | --- | --- | --- | --- |
| Le **nom du coffre** | Ouvre le menu des emplacements — autres coffres, dossier personnel, racine du système de fichiers, disques montés. Désactivé par défaut ; désactivé, révèle le coffre dans l'Explorateur de fichiers à la place | Marque le **chemin absolu entier**. Ce menu s'ouvre avec le chemin déjà dans le champ et seule la partie propre au coffre marquée ; une seconde pression étend au reste. Rien à étendre si le menu est désactivé | Un onglet ne contenant rien, situé à la racine du coffre avec la liste déjà affichée — un endroit où saisir un chemin depuis zéro | Le menu contextuel propre au coffre : ce qu'on peut faire au coffre que ce segment nomme | Un **fichier** se déplace vers la racine du coffre. Le **texte** ouvre le champ à la racine, pour nommer la note qu'il doit devenir |
| Un **nom de dossier** | Sélectionne ce dossier pour édition, le contenu de son parent listé en dessous | Ressaisit ce dossier et tout ce qui est en dessous | Ouvre ce dossier dans un nouvel onglet | Le menu contextuel de ce dossier — celui de l'Explorateur de fichiers | Un **fichier** se déplace dans ce dossier. Le **texte** ouvre le champ là, pour nommer la note qu'il doit devenir |
| Un **séparateur** | Ouvre le dossier qui le précède — sa note de dossier si un plugin de notes de dossier est actif et qu'une existe, sinon la révèle et le déploie dans l'Explorateur de fichiers | **Crée la note de ce dossier** et s'y rend, si un plugin de notes de dossier est actif et que le dossier n'en a pas encore. S'il en a déjà une, c'est simplement la pression unique de nouveau | La note de dossier dans un nouvel onglet si elle existe ; sinon un onglet situé à ce dossier avec la liste affichée | Le même menu contextuel de dossier que donne le nom — celui de sa note de dossier, s'il en a une | Sur la fin de la note de ce dossier, s'il en a une, une fois confirmé |
| Le **nom de la note** | Ouvre le nom pour édition — les dossiers restent en jetons à côté — avec tout sauf l'extension marqué | Inclut l'extension dans la marque aussi | Ouvre la note dans un nouvel onglet | Le menu contextuel du fichier — le même que donne la ligne de l'Explorateur de fichiers | Sur la fin de cette note, une fois confirmé |
| L'**espace vide** | Ouvre le **chemin entier** pour édition, marqué jusqu'à l'extension. Les dossiers entrent dans le champ avec lui, ce qui fait de ceci le geste pour ressaisir un chemin plutôt qu'un nom | Inclut l'extension dans la marque aussi | <kbd>Ctrl</kbd> rouvre cette note dans un onglet qui lui est propre, mis en surbrillance dans l'Explorateur de fichiers pour que la copie ne soit pas confondue avec la première. Le clic molette n'est *pas* ce geste : il colle par-dessus le chemin | Marque le chemin entier et propose ce qu'on peut faire à du texte marqué | |

**La seconde pression suit la première.** Créer la note d'un dossier se situe
sur la partie de la ligne qui *ouvre* ce dossier, ce qui est le séparateur par
défaut et le nom du dossier une fois l'échange désactivé — la même cible que
souligne le trait, et la même à laquelle une pression unique demande déjà la
note de dossier. Elle n'est proposée que pendant qu'un plugin de notes de
dossier est actif, car une note de dossier est une convention plutôt qu'un fait
du système de fichiers, et seulement là où le dossier n'en a pas encore. Où
elle se trouve et comment elle s'appelle sont lus depuis les paramètres propres
de **Folder notes**, si bien qu'un coffre qui garde ses notes de dossier à côté
du dossier, ou les appelle `_index`, en obtient une de ce genre ; le fichier
lui-même est toujours en Markdown, ce que crée la commande de création par
défaut de ce plugin et ce qu'il trouve quel que soit le type auquel le coffre
est réglé. Le mode déplacer/renommer en est entièrement exclu — rien sur la
ligne n'ouvre un dossier tant qu'un déplacement est en attente.

**Les clics sur le nom continuent.** Les quatre échelons sont les mêmes quatre
que parcourt la touche de renommage, dans le même ordre : le nom, le nom avec
son extension, le chemin depuis le coffre, le chemin depuis la racine du
système. Un troisième clic atteint donc le chemin du coffre et un quatrième
celui de la machine — les mêmes quatre éléments que donne <kbd>Tab</kbd>
au-delà de la fin du champ, et les mêmes quatre que le bouton droit *copie* au
lieu de sélectionner.

**Le survol** répond à sa propre logique et ne change jamais rien : un nom
raccourci revient en entier tant que vous le pointez, et l'icône au début de la
ligne indique où se trouve le coffre.

## Clic droit : une pression, deux pressions, trois

Chaque cible de la ligne répond à un clic droit, et le nombre de pressions que
vous lui donnez décide de ce que vous obtenez. Comme une seconde pression
pourrait encore arriver, la première attend environ un tiers de seconde avant
d'agir — le prix à payer pour mettre trois gestes sur un seul bouton.

| Où vous appuyez | Une fois | Deux fois | Trois fois |
| --- | --- | --- | --- |
| Le **nom du coffre** | Le menu contextuel du coffre : ce qu'on peut faire au coffre que ce segment nomme — y compris *Ouvrir ce coffre*, si ce coffre n'est pas celui où vous êtes | Copie le nom du coffre | Copie où se trouve le coffre — et une quatrième pression, où se trouve le fichier ouvert |
| Un **séparateur** | Le menu de ce dossier — celui de sa note de dossier, si un plugin de notes de dossier est actif et que le dossier en a une | | |
| Un **nom de dossier** | Le menu de ce dossier | Copie le nom du dossier | Le copie avec tout ce qui se trouve à sa droite |
| Le **nom de la note** | Le menu du fichier — le même que donne la ligne de l'Explorateur de fichiers | Copie le nom | Le copie avec son extension |
| L'**espace vide** | | Copie le chemin depuis le dossier de votre coffre, sans l'extension | Le même, avec elle |

Une pression unique sur le **nom du coffre** ouvre ce qu'on peut faire à ce que
ce segment nomme. Pour **le coffre où vous êtes** : l'ouvrir dans une nouvelle
fenêtre, gérer les coffres, copier où il se trouve, copier son identifiant, le
montrer dans votre gestionnaire de fichiers. Pour **un autre coffre**, atteint
via le menu des emplacements, la même chose moins la nouvelle fenêtre — qui
ouvrirait *ce* coffre-ci, pas celui-là — plus la seule chose qu'un coffre où
vous n'êtes pas peut offrir : **Ouvrir ce coffre**. Il est nommé pour Obsidian
par son identifiant plutôt que par le nom de son dossier, puisque deux coffres
peuvent en partager un. Pour un endroit qui n'est pas du tout un coffre — votre
dossier personnel, un disque monté — il n'y a pas d'identifiant à copier ni
rien à ouvrir, et le menu le dit en ne les proposant pas.

Ce n'est pas le menu à trois points d'Obsidian, qui appartient à la fenêtre de
démarrage et ne peut pas s'ouvrir depuis un coffre en cours d'exécution — ce
sont les mêmes entrées reconstruites, dans les mots propres d'Obsidian, tirées
de ses commandes pour qu'elles arrivent dans votre langue. Trois des entrées de
ce menu sont délibérément **absentes** ici : *renommer le coffre*, *déplacer le
coffre* et *retirer de la liste* agissent toutes sur le dossier propre du
coffre ou sur le registre des coffres d'Obsidian, et faire cela au coffre dans
lequel vous vous trouvez — avec ses fichiers ouverts et ses observateurs en
cours d'exécution — c'est ainsi qu'un coffre se casse. Ouvrez le gestionnaire de
coffres (*Ouvrir un autre coffre*) et faites-le là, où le coffre est fermé.

Les deux copies sur l'**espace vide** sont la ligne telle qu'elle est écrite —
ce que veut un lien ou une recherche — et celles sur le **nom du coffre** sont
les chemins que connaît le système de fichiers, ce que veut tout ce qui est en
dehors d'Obsidian. Chaque pression là élargit ce à quoi la copie est utile :
deux donnent le nom du coffre, trois où se trouve le coffre, quatre où se
trouve le fichier ouvert. Obsidian fait la même distinction dans ses deux
propres commandes, *depuis le dossier du coffre* et *depuis la racine du
système* ; ici, celles tournées vers l'extérieur se trouvent sur le segment qui
est lui-même en dehors du chemin.

Tout ceci fonctionne aussi hors du coffre, sur les mêmes cibles.

Chaque copie le signale par une notification, car une copie ne laisse rien à
l'écran pour montrer qu'elle a eu lieu, et une pression mal comptée ne devrait
pas ressembler à une pression réussie.

## Modificateurs : l'ouvrir ailleurs

Le nom de la note et les segments de dossier se comportent comme leurs lignes
dans l'Explorateur de fichiers.

| | Sur le nom de la note | Sur un segment de dossier |
| --- | --- | --- |
| Clic simple | Modifier le nom | Parcourir ce dossier |
| <kbd>Ctrl</kbd> / clic molette | Ouvrir la note dans un nouvel onglet | Envoyer le dossier vers un nouvel onglet |
| <kbd>Ctrl</kbd>+<kbd>Alt</kbd> | Un fractionnement | Un fractionnement |
| Glisser | La note, partout où Obsidian accepte un fichier | Le dossier, de même — la barre d'onglets incluse |

Un dossier n'est pas quelque chose qu'Obsidian peut ouvrir, donc l'envoyer vers
un onglet fait l'une de deux choses : ouvre sa note de dossier, si un plugin de
notes de dossier est actif et qu'il en existe une, ou ouvre un onglet vide dont
la barre de chemin se trouve déjà dans ce dossier — ne vous laissant plus qu'à
en saisir le nom. Déposer un segment de dossier sur la **barre d'onglets** fait
la même chose, dans un nouvel onglet là où vous relâchez — la barre d'onglets
d'Obsidian n'accepte à elle seule que des fichiers, donc un dossier glissé hors
de l'Explorateur de fichiers y est toujours refusé.

## Tab : compléter le nom, puis le chemin, puis élargir la sélection

<kbd>Tab</kbd> complète comme le fait un shell : **une pression étend ce que vous avez tapé aussi loin que les noms de ce dossier s'accordent, et s'arrête où ils divergent.** Tapez `Sk` là où seul `Sketches` commence ainsi et le mot est terminé ; tapez `Al` là où `Alpha-one`, `Alpha-two` et `Alpine` commencent tous ainsi et vous obtenez `Alp`, parce que le caractère suivant est une question à laquelle seul vous pouvez répondre.

Appuyez à nouveau sans taper et cela avance vers un seul nom — la ligne que le menu a surlignée, ou la première — en s'arrêtant à la prochaine ambiguïté de ce nom : `Alpha-`, puis `Alpha-one`. La liste s'ouvre là où vous êtes déjà, donc dans votre propre dossier la première pression se dirige vers la note que vous avez ouverte plutôt que vers ce qui trie en premier.

**Une pression ne choisit jamais entre des noms à votre place.** <kbd>Tab</kbd> entre dans un dossier une fois que ce que vous avez tapé ne laisse plus qu'un seul candidat, ou une fois que vous avez tapé le nom entier du dossier et qu'aucun *autre dossier* ne l'étend. Là où c'est le cas — `Schemes` à côté de `Schemes2026` — <kbd>Tab</kbd> continue de compléter vers le nom le plus long ; <kbd>Entrée</kbd> et le menu sont les gestes qui signifient *celui-ci*.

Un **fichier** ne retient jamais un dossier de cette façon. Un dossier accompagné d'une note portant son propre nom est une note de dossier, pas une fourche dans le chemin, et <kbd>Tab</kbd> parcourt les dossiers — donc `Projects` avec un `Projects.md` à côté est traversé comme n'importe quel autre.

Deux détails plus mineurs qui en découlent : ce qui atterrit dans le champ est écrit comme le dossier l'écrit, donc `sk` devient `Sketches` ; et seul le nom en train d'être tapé est remplacé, donc un chemin ayant davantage à droite de lui le conserve.

Lorsqu'un nom est proposé pendant que vous tapez, <kbd>Tab</kbd> **écrit exactement la proposition** : la proposition est toujours ce que la pression écrirait, et le souligné du menu ainsi que la ligne verte disent la même chose, donc ce que vous voyez après le curseur est ce que vous obtenez. Là où les noms cessent de s'accorder, c'est le pas vers le premier d'entre eux — ou vers la ligne vers laquelle vous avez navigué avec les flèches, que <kbd>Tab</kbd> prend plutôt que celle d'à côté — donc utilisez les flèches pour aller vers celui que vous voulez, ou tapez au-delà de la fourche, avant d'appuyer. C'est uniquement là où la proposition ne laisse plus qu'*un* nom que la même pression y entre.

Arriver au nom du fichier **est** le premier échelon — aucune pression n'est dépensée à placer le curseur à la fin d'un nom qu'elle est sur le point de marquer. À partir de là, les pressions cessent de se déplacer le long du chemin et commencent à élargir ce qui est sélectionné :

1. le nom
2. le nom avec son extension
3. le chemin depuis le dossier de votre coffre
4. le chemin depuis la racine du système
5. de retour à l'avant du chemin **tel qu'il se présente maintenant** — se tenant là où le parcours a commencé, premier segment marqué, prêt à être parcouru à nouveau

Un quatrième clic atteint directement ce même quatrième échelon.

Élargir ne fait toujours qu'**élargir**. Un nom déjà entier dans le champ — complété par la même touche, ou choisi dans le menu — est marqué en entier plutôt que de se voir d'abord retirer son extension : le premier échelon est destiné à un nom que le parcours vient juste d'*atteindre*, où l'extension n'est pas encore en cause.

L'échelle est là où le parcours **arrive**, pas là où il commence. Cliquez sur un dossier au milieu d'un chemin et le champ s'ouvre sur tout ce qui se trouve sous lui, avec le nom de ce dossier marqué ; chaque <kbd>Tab</kbd> franchit alors **un seul** dossier — en marquant le suivant, en gardant le reste du chemin derrière lui — et ce n'est qu'une fois qu'il ne reste plus que le nom du fichier que l'élargissement commence :

| pression | fragments | champ | marqué |
| --- | --- | --- | --- |
| clic sur `a` | | `a/b/c/leaf.md` | `a` |
| <kbd>Tab</kbd> | `a` | `b/c/leaf.md` | `b` |
| <kbd>Tab</kbd> | `a › b` | `c/leaf.md` | `c` |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf` — le premier échelon |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf.md` |

**Un nom qui est validé est validé, quelle que soit la façon dont vous l'avez validé.** Le compléter avec
<kbd>Tab</kbd>, le valider avec `/`, et le choisir dans le menu laissent tous
la ligne au même endroit portant le même chemin, donc la pression qui suit le
geste signifie la même chose quelle que soit la façon dont vous y êtes arrivé.
Choisir un dossier dans la liste avait pour habitude de vider le champ à la
place, jetant un chemin que le fait d'atteindre le même dossier avec <kbd>Tab</kbd>
aurait conservé.

**Un chemin que vous êtes encore en train d'écrire vous accompagne en entier.** Entrer dans le tout premier dossier duquel dépend le reste du chemin n'affirme pas que le reste existe — c'est ainsi qu'un chemin s'écrit en avance sur lui-même, et les dossiers qu'il nomme sont ceux que <kbd>Entrée</kbd> est sur le point de créer. Ainsi, parcourir `Dokumente/plans/untitled.md` en entrant dans `Dokumente` garde `plans/untitled.md` devant vous, que `plans` existe déjà ou non. Il en va de même pour un chemin que vous avez tapé à partir de rien : rien n'en a été hérité de quelque part, donc rien n'en est retiré.

**Remplacer une étape par une autre est une autre histoire, et alors le chemin ne vous accompagne que dans la mesure où il existe réellement.** Remplacez un dossier au milieu d'un chemin par un voisin — cliquez sur `a`, tapez un autre nom, appuyez sur <kbd>Tab</kbd> — et tout ce qui se trouve sous lui vous accompagne, parce que le chemin sur lequel vous étiez est en général la plus grande partie du chemin que vous voulez. Seul ce qui existe là-bas survit au changement, cependant, si bien que le champ et le menu à côté de lui ne se contredisent jamais : ce qui reste devant vous est un chemin que vous pourriez réellement parcourir. En partant de `a/b/c/leaf.md`, avec `a` cliqué et son nom marqué :

| ce que vous validez | fragments | champ | marqué |
| --- | --- | --- | --- |
| `x`, qui n'a aucun `b` du tout | `x` | | rien ne l'a accompagné |
| `y`, qui a un `b` mais aucun `c` dedans | `y` | `b` | `b` |
| `z`, un jumeau de `a` de bout en bout | `z` | `b/c/leaf.md` | `b` |

Un dossier laissé ainsi seul est toujours un dossier dans lequel entrer : la pression qui le suit y entre, plutôt que de commencer à élargir une sélection sur son nom.

Un nom qu'**aucun élément** du dossier ne correspond reçoit une réponse différente, car rien n'a été validé par lui : la pression marque ce que vous avez tapé, prêt à être remplacé, plutôt que de répondre en allant ailleurs.

Le tout est une **boucle, et il ne coûte rien de la parcourir** : la pression qui suit le dernier échelon rend la ligne à l'avant du chemin, dossiers compris, prête à recommencer un tour. La seule chose qui quitte jamais la ligne est le préfixe absolu, à la pression qui cesse de l'afficher.

Ce qui revient est **le chemin que vous avez construit**, pas celui dont vous êtes parti. Divisez le parcours à mi-chemin — choisissez un autre voisin dans le menu, complétez vers un autre nom — et le tour se referme sur l'endroit où vous vous trouvez réellement ; les quatre échelons qui le précèdent décrivent ce même chemin, et celui-ci était autrefois l'échelon impair qui décrivait le passé.

<kbd>Maj</kbd>+<kbd>Tab</kbd> referme le même anneau dans l'autre sens : à l'avant du chemin, sans plus rien à rendre et sans rien plus haut, la pression suivante boucle vers l'échelon **le plus lointain** — le chemin depuis la racine du système — et poursuit son rétrécissement à partir de là. Aucune des deux directions ne mène à une impasse.

Elle ne dépense non plus aucune pression sur un échelon déjà affiché. Sous le dernier échelon — le nom sans son extension — l'échelle est terminée, et *la même pression* fait quitter le dossier : le chemin depuis la racine du système, le chemin depuis votre coffre, le nom, le nom sans son extension, puis le dossier, un pas à la fois.

Aucune pression n'est non plus dépensée sur un échelon qui ne change rien : cliquer sur le nom d'une note l'affiche déjà sans son extension, ce qui est ce que montre le premier échelon, donc à partir de là <kbd>Tab</kbd> commence au deuxième.

Chaque échelon change ce qui est *dans* le champ, pas seulement ce qui est surligné — une sélection doit porter sur le texte qu'elle désigne, sinon <kbd>Entrée</kbd> validerait autre chose que ce que vous voyez sélectionné. L'échelle appartient à une seule session d'édition : cliquez ailleurs, ou tapez quoi que ce soit, et le <kbd>Tab</kbd> suivant complète à nouveau un nom.

### <kbd>Maj</kbd>+<kbd>Tab</kbd> : le même chemin à l'envers

<kbd>Maj</kbd>+<kbd>Tab</kbd> reprend un pas par pression, dans l'ordre où les pressions ont été faites : la sélection se rétrécit d'un échelon à la fois, chaque complétion est rendue, et chaque dossier est quitté — son nom revenant dans le champ pour que vous puissiez le modifier plutôt que le retaper.

**Rien n'est supprimé au retour.** Une complétion est rendue en *marquant* les caractères qu'elle a ajoutés, exactement comme l'aller marque ce sur quoi il a élargi — le nom reste devant vous, et chaque pression supplémentaire en marque un pas de plus :

| | champ | marqué |
| --- | --- | --- |
| parcouru vers l'intérieur | `Alpha-one` | |
| <kbd>Maj</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `one` |
| <kbd>Maj</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `ha-one` |
| <kbd>Maj</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `Alpha-one` |

Taper remplace la partie marquée, comme partout ailleurs. <kbd>Tab</kbd> remet exactement ce que la marque a rendu, donc parcourir deux pas vers l'extérieur puis deux pas vers l'intérieur vous ramène là où vous étiez.

Une fois que le nom entier est marqué, il ne reste plus rien qu'une pression y ait mis, et la pression suivante remonte *le long du chemin* : elle fait quitter le dossier où vous vous trouvez, exactement comme le fait <kbd>Retour arrière</kbd> sur un champ vide. Cela ne coûte rien non plus — le nom du dossier revient dans le champ **devant** ce qui s'y trouvait, marqué, ce qui est le même texte que cliquer sur ce dossier vous aurait donné. Reculer est une direction plutôt qu'un historique d'annulation — mais marquer le nom d'abord fait qu'une pression ne reprend jamais à la fois ce que vous avez écrit et ne vous fait sortir du dossier dans lequel vous l'avez écrit.

Un texte qui s'ouvre **déjà sélectionné** — ce qu'un clic sur un dossier laisse derrière lui — est le nom sur lequel <kbd>Tab</kbd> agit ensuite : il est complété et on y entre comme n'importe quel autre, et taper le remplace. Seule la commande de focus s'ouvre sur un échelon de l'échelle lui-même, car elle vous montre le chemin entier plutôt qu'un dossier à parcourir.

## Saisir quelque chose qui n'est pas un chemin

| Ce que vous tapez | Ce qui se passe |
| --- | --- |
| `https://…` | S'ouvre dans un nouvel onglet dans le **Lecteur web** d'Obsidian, si vous avez activé ce plugin natif ; votre navigateur de bureau sinon |
| `obsidian://…` | Transmis au gestionnaire d'URI propre à Obsidian |
| `file:///…` | Décodé et ouvert : comme une véritable note s'il est dans votre coffre, dans le lecteur sinon |
| `/home/vous/a%20b.md` | La même chose, pour un chemin collé depuis un navigateur ou un gestionnaire de fichiers |

Seuls les schémas explicites comptent — une note appelée `100%20` reste une note. Un `/` qui appartient à un schéma reste littéral plutôt que de descendre dans un dossier, si bien qu'une URL peut être tapée à la main et pas seulement collée.

## Une commande pour le clavier

**Placer le focus sur la barre de chemin** ouvre le champ sur le nom de la note et le parcourt comme le fait <kbd>F2</kbd> — le nom, le nom avec son extension, le chemin depuis votre coffre, le chemin depuis la racine du système — et la pression qui suit ferme le champ et remet le curseur dans la note. Elle ne renomme pas : Entrée navigue, comme dans tout autre champ. Elle n'a pas de touche propre par défaut, car les recommandations d'Obsidian découragent les plugins de s'en réserver une ; la ligne **Raccourcis clavier** à la fin des paramètres de ce plugin ouvre *Paramètres → Raccourcis clavier* en n'affichant que ses commandes, afin que vous puissiez l'y associer.

## La navigation ne touche jamais au fichier ouvert

Dans le mode par défaut (navigation), la note actuellement ouverte n'est **jamais** renommée ni déplacée.

- Un chemin qui correspond à un fichier existant l'ouvre.
- Un chemin qui n'existe pas encore est simplement créé, ainsi que tout dossier parent manquant, puis ouvert. Chaque fichier et dossier créé ainsi le signale dans une notification — un nouveau dossier est sinon invisible jusqu'à ce que vous alliez le chercher — et la corbeille propre à Obsidian fait qu'annuler un dossier indésirable ne coûte qu'une frappe.
- **Hors de votre coffre, cela demande toujours confirmation d'abord.** Là-bas, la même faute de frappe écrit dans un dossier système, où ni la notification ni la corbeille d'Obsidian n'apportent grand réconfort.

## <kbd>Ctrl</kbd> — nouvel onglet, et copier au lieu de déplacer

Une note **créée, déplacée ou copiée à l'intérieur du coffre est affichée là où elle a atterri** dans l'Explorateur de fichiers, marquée un instant dans la couleur d'accentuation d'Obsidian — l'arborescence est l'endroit où vous la chercherez ensuite, donc elle est mise devant vous plutôt que laissée dans un dossier qui n'est peut-être même pas ouvert. La duplication le signale également : une copie laisse l'original où il était et ouvre la copie dans son propre panneau, ce qui, sans un mot, serait facile à interpréter comme si rien ne s'était passé.

Maintenir <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> sur macOS) en choisissant un fichier dans le menu, ou en appuyant sur <kbd>Entrée</kbd> sur un chemin, envoie le résultat dans un **nouvel onglet** plutôt que dans celui-ci :

| | Sans | Avec <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Choisir ou taper un fichier existant | Ouvre ici | Ouvre dans un nouvel onglet |
| Taper un chemin inexistant | Demande, puis ouvre ici | Demande, puis ouvre dans un nouvel onglet |
| Valider un chemin en mode renommer/déplacer | **Déplace** la note à cet endroit | **Copie** la note à cet endroit et ouvre la copie dans un nouvel onglet |

Le modificateur est lu selon la règle d'Obsidian lui-même : il se comporte donc exactement comme sur un lien ou une ligne de l'Explorateur de fichiers — le clic du milieu signifie également « nouvel onglet », <kbd>Ctrl</kbd>+<kbd>Alt</kbd> une vue scindée, et <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Maj</kbd> une nouvelle fenêtre.

Copier refuse d'écraser, exactement comme déplacer — y compris sur le propre chemin de la note, où il n'y a rien de sensé à copier. Hors du coffre, ce refus est également signalé à voix haute.

Tout cela fonctionne **avec le menu ouvert** aussi bien que sans : sur une ligne surlignée, le modificateur s'applique à cette ligne, et sans rien de surligné, il s'applique à ce que vous avez tapé.

## Naviguer hors du coffre

**Désactivé par défaut.** Activez d'abord **Accès aux fichiers externes** dans les paramètres — lire et écrire hors du coffre est la seule chose que ce plugin fait et qu'Obsidian lui-même refuse : on y consent donc explicitement plutôt que de devoir s'en retirer. Désactivé, le nom du coffre se contente de révéler votre coffre dans l'Explorateur de fichiers, et rien ici ne regarde jamais au-delà.

Cliquer sur le **nom du coffre** (ou l'icône 🏠, quand *Afficher le nom du coffre* est désactivé) ouvre un menu de lieux plutôt que de contenus. Le champ qu'il ouvre contient **le chemin entier sur lequel vous étiez, écrit en toutes lettres**, avec le lieu de départ sélectionné — choisir un autre endroit, ou taper par-dessus la sélection, ne remplace donc que cette partie initiale et laisse le reste du chemin devant vous. **Appuyez une seconde fois sur le nom** — un double-clic — et la sélection s'élargit à l'ensemble : c'est ainsi que le chemin absolu se saisit en un geste plutôt qu'en le balayant à la main. Changez d'avis et <kbd>Échap</kbd> remet la ligne comme elle était.

Taper ici propose le reste du nom d'un lieu comme partout ailleurs, et <kbd>Tab</kbd> **installe ce lieu** — celui que vous visez, ou celui que le nom ne peut désigner que lui seul. Là où plusieurs lieux partagent encore ce que vous avez tapé, la pression s'arrête à l'embranchement, comme partout. Viser un lieu affiche **le chemin propre de ce lieu**, entièrement sélectionné, suivi du chemin de votre note seulement dans la mesure où il existe réellement là-bas — ce qui est exactement ce sur quoi le choisir vous ferait atterrir. Un lieu n'est pas une étape à l'intérieur du chemin affiché à l'écran, mais un point d'où compter le chemin entier : rien de l'endroit où vous étiez ne subsiste devant lui.

Les lieux proposés :

- **Vos autres coffres**, lus depuis le registre d'Obsidian lui-même, les plus récemment ouverts d'abord, chacun sous l'icône de coffre d'Obsidian — celle que l'application emploie pour ses propres commandes de coffre. Le coffre déjà ouvert reçoit une maison à la place : c'est le point de départ de la ligne, pas une destination.
- **Le dossier personnel**, sous son nom de compte, marqué d'un `~`. Lucide n'a pas de tilde : cette icône-là est donc dessinée par le plugin sur la grille 24×24 de Lucide et avec la même épaisseur de trait — une icône que le jeu ne fournit pas, plutôt qu'un caractère texte au milieu d'icônes.
- La **racine du système de fichiers**, intitulée `root` — non traduit, puisque c'est son nom sur tous les systèmes — plutôt que `/`, qui se lirait comme une étape vide à côté du séparateur qui suit.
- **Les disques montés**, avec une icône par type quand cela ne coûte rien à déterminer : partages réseau, disques optiques, disquettes et supports amovibles ont la leur ; tout le reste reçoit une icône générique. Sous Windows, les disques apparaissent comme `C:` avec une icône générique — les noms de volume et les types précis exigeraient WMI, délibérément écarté.

Choisir un autre coffre **ne fait pas basculer Obsidian dedans.** Tout ce que vous aviez ouvert le reste ; le fil d'Ariane se contente d'aller y naviguer. C'est tout l'intérêt de placer cela dans la barre de chemin plutôt que de renvoyer au sélecteur de coffre de la barre latérale.

Cela atterrit aussi **aussi près de la note où vous êtes que ce lieu le permet réellement**.

- Si le lieu choisi *contient* la note — le dossier personnel, ou l'endroit où vivent vos coffres — vous obtenez son chemin depuis là : choisissez `~` avec `takeaways.md` ouvert, et le champ affiche `Vaults/votre-coffre/takeaways.md`.
- Si c'est un lieu voisin de celui-ci — un autre coffre, un autre disque — le même chemin relatif est tenté, aussi profondément qu'il existe réellement. Les coffres sont souvent des quasi-copies les uns des autres, et la raison de sauter vers l'un d'eux est généralement la même note là-bas.

Dans les deux cas, la ligne reste au lieu choisi et **le premier dossier de ce chemin s'ouvre sélectionné**, la même forme que donne le clic sur un dossier : l'étape que vous êtes le plus susceptible de changer quand vous sautez ailleurs est celle la plus proche du sommet, et le reste du chemin demeure visible pendant que vous la modifiez. Rien n'est jamais préremplie qui ne soit réellement sur le disque.

### Pendant que vous êtes dehors

Le chemin **démarre au lieu que vous avez choisi**, non à la disposition de répertoires de la machine — et il en va de même du champ obtenu en cliquant sur l'espace vide ou en appuyant sur la touche de focus : il contient le chemin depuis ce lieu, non le chemin absolu de la machine, avec la traîne réduite au lieu lui-même exactement comme elle se réduit à la racine du coffre à l'intérieur — choisissez `Archive` et la ligne affiche `Archive / notes / …`, pas `/home/vous/Vaults/Archive/notes/…`. Le segment initial porte une icône selon ce qu'il est (coffre, dossier personnel, disque), et <kbd>Retour arrière</kbd> s'arrête là plutôt que de remonter dans le reste du système de fichiers. Avec *Afficher le nom du coffre* désactivé, ce segment n'est que l'icône seule — le paramètre concerne le segment d'ouverture de la ligne, quel que soit le coffre qu'il désigne, pas seulement le vôtre.

La barre de chemin est **encadrée de la couleur d'erreur** — le même anneau que dessine le mode renommer — tant qu'elle pointe hors de votre coffre. Il signale un état persistant, non un instant : tant qu'il est là, rien du traitement propre à Obsidian ne s'applique à ce que la ligne affiche, et l'écriture reste verrouillée jusqu'à ce que vous en décidiez autrement.

Pour le reste, la navigation fonctionne comme à l'intérieur : pastilles, séparateurs, saisie, autocomplétion, <kbd>Retour arrière</kbd> pour ressortir. Les mêmes règles de visibilité s'appliquent aussi : les extensions non prises en charge exigent toujours **Détecter toutes les extensions de fichiers** d'Obsidian, et les fichiers cachés toujours le paramètre de ce plugin.

**Le clic droit fonctionne aussi là-bas**, bien que ce soit un menu différent : les gestionnaires propres de l'Explorateur de fichiers ont besoin d'un fichier que le coffre connaît, donc les entrées extérieures sont construites à partir du chemin à la place. Elles proposent l'ouverture (ici, à droite, dans une nouvelle fenêtre, ou dans l'application par défaut de votre bureau), *Copier le chemin*, *Afficher dans l'explorateur système*, et — une fois le cadenas ouvert — *Nouvelle note*, *Nouveau dossier*, *Faire une copie*, *Renommer…* et *Supprimer*. **Le glisser-déposer** exige toujours un fichier du coffre et reste indisponible.

Le même menu se trouve sur le fichier ouvert dans la visionneuse, par clic droit ou depuis les trois points du panneau lui-même, et il interroge le cadenas de l'en-tête de cette vue. Il ne demande rien d'autre : que le fichier soit rendu ou affiché comme source n'a aucune incidence sur la possibilité de le supprimer, et une image ou un PDF — qui n'a aucune vue source — est aussi supprimable qu'une note. *Supprimer* signifie la corbeille du bureau, donc réversible depuis là ; un système sans corbeille le signale plutôt que de détruire le fichier.

Supprimer hors du coffre déplace le fichier vers votre **corbeille système** — la Corbeille sous Windows, Trash sous macOS — jamais un unlink direct. Ici, il n'y a pas de corbeille Obsidian pour se rétablir : une suppression irréversible n'est donc jamais proposée du tout — là où une plateforme n'a pas de corbeille, la tentative signale l'échec au lieu de détruire le fichier.

### Écrire hors du coffre

Tout ce qui écrit est **verrouillé par défaut**. Tant que la ligne pointe hors de votre coffre, la place du bouton renommer dans l'en-tête est occupée par un **cadenas rouge** — la même couleur que l'anneau autour de la ligne, et pour la même raison : il signale un refus. Les deux forment un seul contrôle dans un seul emplacement, il n'y a donc jamais de doute sur lequel des deux régit quoi.

Trois pressions, en cycle :

| Pression | Ce que vous obtenez |
| --- | --- |
| Le cadenas rouge | Écrire ici est autorisé. Le cadenas est remplacé par le bouton renommer/déplacer |
| Le bouton | Mode renommer/déplacer, exactement comme dans le coffre |
| Le bouton à nouveau | Le mode se termine et le cadenas se referme — l'autorisation ne survit pas à ce pour quoi elle a été ouverte |

**La touche de renommage interroge aussi le cadenas.** Hors de votre coffre, l'actionner fait clignoter le cadenas — s'ouvrant puis se refermant — plutôt que d'ouvrir un mode que toute validation refuserait : le refus arrive avant le travail plutôt qu'après. Appuyez sur le cadenas, ou appuyez à nouveau sur la touche de renommage dans la demi-seconde qui suit — la seconde pression accorde exactement ce que le bouton accorde, pour ce lieu, et ouvre le mode renommer avec elle.

À l'intérieur de votre coffre, il n'y a pas de cadenas : il n'y a rien à déverrouiller, et le bouton occupe simplement l'emplacement.

L'autorisation est accordée **à un lieu, pas à un instant** : elle survit à tout ce que vous feriez en travaillant à un endroit — terminer un déplacement, cliquer ailleurs que sur le champ, ouvrir un fichier — et prend fin quand vous choisissez un autre coffre, disque ou racine depuis le menu, quand la ligne revient à un fichier du coffre, ou à cette troisième pression. Une série de déplacements dans un même dossier ne demande donc qu'une seule pression, pas une par fichier.

Le cadenas ouvert, la barre de chemin se comporte dehors comme dedans :

| Geste | Résultat |
| --- | --- |
| Taper un nom inexistant, <kbd>Entrée</kbd> | La même invite « créer ? » qu'à l'intérieur ; les dossiers parents manquants sont créés aussi. Un nom sans extension devient un `.md`, exactement comme à l'intérieur |
| Mode renommer/déplacer, taper un nouveau nom | Renomme le fichier que la ligne affiche. Un nom sans extension conserve celle du fichier — dehors, un dossier contient toutes sortes de fichiers, et un renommage ne doit pas transformer discrètement un `.png` en `.md` |
| Mode renommer/déplacer, naviguer ailleurs, choisir **conserver ce nom** | Le déplace là-bas sous le nom qu'il porte déjà |
| Maintenir <kbd>Ctrl</kbd> sur l'un ou l'autre | Copie au lieu de déplacer, et ouvre la copie dans un nouvel onglet |

Verrouillé, tout cela signale ce qui l'empêche au lieu de se produire. Rien n'est jamais écrasé dans l'un ou l'autre état : une cible existante est refusée, et le refus est celui du système de fichiers lui-même (`COPYFILE_EXCL`, une création exclusive) plutôt qu'une vérification qui pourrait perdre la course. Un déplacement entre systèmes de fichiers — depuis une clé USB, depuis un partage réseau — bascule sur copier-puis-supprimer, et l'original n'est retiré qu'une fois la copie arrivée.

**Déplacer une note *hors* de votre coffre demande d'abord confirmation.** `fileManager` ne peut pas suivre un fichier au-delà de cette frontière : chaque lien pointant vers la note cesse de se résoudre, rien ne les met à jour, et la note quitte l'index du coffre. Le déplacement est donc proposé comme une décision plutôt que refusé ou effectué en silence — une boîte de dialogue indique ce que cela coûte et combien de notes pointent vers celle que vous déplacez. Confirmez, et il se déplace réellement : copié à l'extérieur, puis retiré du coffre via la suppression propre d'Obsidian, ce qui le rend récupérable exactement comme une note supprimée l'est ; un échec à l'une ou l'autre étape laisse la note où elle était. Maintenir <kbd>Ctrl</kbd> la copie plutôt à l'extérieur à la place, ce qui n'a aucun de ces problèmes. Le sens inverse — faire entrer un fichier externe *dans* le coffre — n'est pas encore relié.

### Ouvrir un fichier externe

Naviguer dans le système de fichiers peut ramener **dans le coffre que vous avez ouvert** — depuis la racine, depuis le dossier personnel, depuis l'endroit où vivent vos coffres. Un fichier atteint ainsi est une note ordinaire, il s'ouvre donc comme telle : le véritable éditeur, liens et rétroliens, et la ligne revient d'un coup au fil d'Ariane enraciné dans le coffre. Seuls les fichiers pour lesquels Obsidian n'a pas de vue restent dans l'aperçu, puisque là-bas l'aperçu est la meilleure réponse. Là où un aperçu affiche malgré tout une telle note — un espace de travail rouvert, disons — sa ligne du haut propose **Ouvrir dans *(coffre)***, qui est la même offre faite à la main.

L'éditeur d'Obsidian ne fonctionne que sur les fichiers du coffre : un fichier externe **ne peut pas** être ouvert comme une véritable note avec liens, rétroliens et le reste — c'est une limite de l'application, pas de ce plugin. En choisir un ouvre plutôt un **aperçu**, en lecture seule jusqu'à ce que vous en décidiez autrement :

| Type | Affiché comme |
| --- | --- |
| `.md`, `.markdown` | Markdown rendu |
| `.html`, `.htm`, `.xhtml` | La page rendue |
| Images, audio, vidéo, PDF | Lecteur/visionneuse natif |
| Tout autre fichier **texte** (`.json`, `.css`, `.log`, `.txt`, …) | Texte brut tel quel |
| Formats binaires sans visionneuse (`.zip`, `.exe`, …) | Confié à *Ouvrir dans l'application par défaut* |

La visionneuse a deux lectures d'un fichier, et comme elles s'excluent, seule celle vers laquelle vous basculeriez est proposée :

| | Ce que ça fait | Par défaut pour |
| --- | --- | --- |
| **Afficher en Markdown** | Rend le fichier comme une note, en lecture seule | `.md`, `.markdown` |
| **Afficher comme page** | Rend le fichier comme la page qu'il est, en lecture seule | `.html`, `.htm`, `.xhtml` |
| **Modifier en texte** | La source, modifiable | tout le reste |

Hors du coffre, **Modifier en texte** est aussi la pression qui lève la lecture seule — le mode et l'autorisation forment un seul geste plutôt que deux boutons à démêler. Le bouton est teinté de rouge **chaque fois que l'actionner lèverait la lecture seule**, que vous armiez la modification sur place ou que vous arriviez directement de la vue rendue ; dans le coffre il n'y a rien à déverrouiller, il reste donc neutre. **Afficher en Markdown** reçoit un léger voile d'accentuation — la teinte qu'Obsidian donne au texte sélectionné — le désignant comme le chemin du retour plutôt qu'un appel à l'action.

Parce que le bouton suit la *modification* et non le mode brut, un fichier en lecture seule dans la vue texte propose encore **Modifier en texte** : c'est cette pression qui l'arme. Un fichier dans lequel on ne pourra jamais taper — tronqué, ou illisible — affiche **Afficher en texte**, puisque c'est tout ce que la pression peut offrir.

Les valeurs par défaut sont les plus utiles plutôt que les plus littérales : un `#` dans un script shell est un commentaire, pas un titre, et rendre un `.log` en Markdown l'avalerait sans bruit. Chaque valeur par défaut se remplace fichier par fichier, et le choix entre dans l'historique de l'onglet : précédent/suivant et un espace de travail rouvert le conservent — quantité de notes vivent dans des `.txt`, et quantité de `.md` se lisent plus aisément en source.

#### Ce qu'une page HTML a le droit de faire

Rien. La page est affichée dans un cadre où **toute permission est retirée** — pas de scripts, pas de formulaires, pas de navigation, pas d'origine propre — et une politique de contenu qui ne lui laisse aucun accès réseau du tout. Ce n'est pas de la prudence pour la forme : une page locale chargée de manière ordinaire partagerait l'origine de cette fenêtre, et cette fenêtre est Obsidian, donc un script dans un fichier HTML téléchargé s'exécuterait dans votre application avec la portée de votre application.

Ce que cela coûte, c'est tout ce que la page *fait* ; ce que cela préserve, c'est tout ce que la page *est*. Les feuilles de style et images situées à côté du fichier sont lues et intégrées au cadre, de sorte qu'une page enregistrée continue de ressembler à elle-même. Les références pointant hors du dossier propre de la page, et les références vers un endroit du web, sont laissées exactement telles qu'écrites et ne se chargent tout simplement pas — un fichier local ne peut pas discrètement signaler à un serveur que vous l'avez ouvert.

Les scripts sont **retirés** plutôt que simplement bloqués, de sorte que la page que vous voyez et la source vers laquelle vous pouvez basculer diffèrent d'une manière déclarée plutôt que par tout ce que le cadre a silencieusement refusé d'exécuter. Les liens à l'intérieur de la page ne font rien. Quand vous voulez la vraie chose — scripts, réseau et tout le reste — *Ouvrir dans l'application par défaut* la confie à votre navigateur, qui est le bon outil pour cela.

**Les fichiers de votre coffre sont modifiables d'emblée**, sans déverrouillage : *Modifier en texte* y est un véritable éditeur qui enregistre au fil de la frappe.

**La modification est mémorisée d'un mode à l'autre.** Passer à *Afficher en Markdown* la suspend — un rendu statique n'offre rien où taper, et l'aperçu en direct exige l'éditeur d'Obsidian, qui n'existe que pour les fichiers du coffre — de sorte que rien ne prétend là que vous êtes en train de modifier. Revenir à *Modifier en texte* reprend où vous en étiez.

**Les fichiers hors du coffre s'ouvrent en lecture seule, et *Modifier en texte* lève cela.** Cette pression est toute la barrière : tant qu'elle n'a pas eu lieu, rien n'est écrit dehors. Ensuite le fichier s'enregistre au fil de la frappe, exactement comme un fichier du coffre, et la ligne d'état passe du cadenas au crayon. Le déverrouillage couvre ce seul fichier dans ce seul onglet — naviguer vers un autre fichier reverrouille — et il n'est délibérément pas conservé dans l'historique de l'onglet, afin qu'un espace de travail rouvert ne revienne jamais avec l'écriture déjà armée sur un fichier système dont vous ne vous souvenez pas l'avoir ouvert.

**Les fichiers tronqués restent en lecture seule dans tous les cas** — enregistrer ce qui est à l'écran écarterait tout ce qui dépasse la limite : le bouton n'est donc pas proposé du tout, plutôt que proposé puis refusé. Il en va de même d'un fichier qui n'a pas pu être lu : il n'y a rien à réécrire, sinon un panneau vide.

Si l'écriture échoue — montage en lecture seule, fichier qui ne vous appartient pas — la raison donnée par le système est affichée dans une notification.

Les fichiers très volumineux sont affichés tronqués, et la ligne d'état le dit au lieu de vous laisser le découvrir — aux côtés des autres conditions plutôt qu'à la traîne des boutons, puisque c'est un fait sur le fichier comme les autres. Les limites sont mesurées sur un moteur de rendu réel plutôt que devinées : disposer un mégaoctet de texte dans un seul panneau tue net le processus de rendu d'Obsidian, et le Markdown coûte plusieurs fois plus par octet que le texte brut ; les deux ont donc des limites distinctes, et une unique ligne démesurée est raccourcie même quand le fichier entier est petit.

**Les lignes d'état sont des libellés, et l'explication est une infobulle.** Chaque ligne énonce ce qui est vrai en aussi peu de mots qu'il faut — *Hors de votre coffre*, *Aucun éditeur pour ce type de fichier*, *Tronqué — fichier trop grand* — parce que les boutons voisins disent déjà dans quel état se trouve le fichier. Le survol donne la phrase : pourquoi Obsidian ne peut pas l'ouvrir comme une note, ce qu'il adviendrait sinon de ce type de fichier, ce que la troncature vous coûte.

Cela vaut également pour les fichiers **à l'intérieur** de votre coffre. Obsidian confie toute extension pour laquelle il n'a pas de vue directement à l'application par défaut du bureau — un `.txt` ou un `.json` de votre coffre quitterait donc Obsidian entièrement. Ceux-là s'ouvrent désormais dans la même visionneuse, avec l'anneau orange, puisque « ouvre-le dans Obsidian » est ce que vous avez demandé — et, étant des fichiers du coffre, ils y sont modifiables sans aucun déverrouillage. Les fichiers binaires sans visionneuse conservent le comportement d'Obsidian ; il n'y a rien à montrer.

L'aperçu s'ouvre **dans l'onglet où vous étiez**, de sorte que précédent/suivant vous ramènent à la note d'où vous veniez ; maintenez <kbd>Ctrl</kbd> pour un nouvel onglet, comme partout ailleurs. L'en-tête continue d'afficher le chemin du fichier externe tant qu'il est ouvert : vous pouvez donc poursuivre votre navigation depuis là.

Une ligne discrète au-dessus du contenu propose les sorties :

- **Ouvrir dans *(coffre)*** — affiché quand le fichier appartient à l'un de vos autres coffres. Le confie au gestionnaire d'URI propre d'Obsidian, qui ouvre la fenêtre de ce coffre avec la note dedans, comme une véritable note modifiable. Cette fenêtre reste exactement telle qu'elle était ; rien ne bascule sous vos yeux.
- **Afficher en Markdown** / **Afficher comme page** / **Modifier en texte** — les deux lectures que possède ce fichier ; la dernière lève aussi la lecture seule hors du coffre.
- **Ouvrir dans l'application par défaut** — confie le fichier à l'application par défaut de votre bureau, y compris les formats binaires que cette visionneuse ne peut pas afficher. Formulé exactement comme l'entrée propre d'Obsidian pour la même action, parce que c'est la même action.

La visionneuse répond aussi à un **clic droit** : à l'intérieur de l'éditeur de texte avec *Couper* / *Copier* / *Coller* / *Tout sélectionner*, et partout ailleurs avec le menu propre du fichier. Le menu à trois points d'Obsidian dans l'en-tête porte aussi ce menu — hors du coffre, il ne proposerait sinon rien d'autre que *Scinder à droite* et *Scinder en bas*.

Rien n'est écrit hors de votre coffre sans que vous ayez d'abord actionné *Modifier en texte*. Voir la section [Hors du coffre](README.fr.md#hors-du-coffre) du README pour la divulgation complète.

## Déposer un fichier sur un dossier du chemin

Chaque dossier de la ligne est une cible de dépôt, si bien qu'**une note glissée sur l'un d'eux s'y déplace** — le chemin le plus court est celui entre une note et n'importe quel dossier au-dessus d'elle, puisque la destination est déjà à l'écran. Glissez depuis l'explorateur de fichiers, depuis le menu déroulant, depuis le nom de la note dans l'en-tête, ou depuis n'importe où ailleurs dans Obsidian qui produit un fichier : c'est le glisser-déposer natif de l'application, donc l'étiquette au survol, le curseur et la surbrillance sont ceux dessinés par l'explorateur de fichiers.

**Le nom du coffre accepte aussi un dépôt**, puisqu'il s'agit du dossier tout en haut de la ligne — le seul geste qui place une note à la racine du coffre depuis ici.

**Toute une sélection peut être glissée à la fois**, et elle se déplace comme un seul bloc : si l'un des éléments ne pouvait pas être pris, le dépôt est refusé plutôt que de déplacer certains éléments en ignorant silencieusement les autres.

Les liens suivent la note, exactement comme lorsqu'elle est déplacée depuis l'explorateur de fichiers ou en saisissant un chemin.

Un dossier qui **ne pourrait pas accepter le dépôt n'offre rien de particulier** — pas d'étiquette *Déplacer dans*, pas de surbrillance sur le dossier — plutôt que de proposer quelque chose qui échouerait ensuite ; la propre réponse d'Obsidian pour l'en-tête, *Ouvrir dans cet onglet*, se tient là à la place. Trois cas :

- le dossier dans lequel le fichier **se trouve déjà**, puisqu'il y est déjà ;
- un dossier déposé **sur lui-même ou sur son propre descendant**, ce qui ne lui laisserait plus d'origine ;
- une sélection contenant **un dossier et quelque chose à l'intérieur**, puisque déplacer le dossier emmène l'enfant avec lui.

Un dossier qui contient déjà un **fichier du même nom** accepte le dépôt et demande quoi faire de celui qui se trouve sur le chemin, avec la même boîte de dialogue qu'un nom déjà pris saisi ou choisi — voir [Un nom déjà pris](#un-nom-déjà-pris). Rien ici n'écrase quoi que ce soit.

Seuls les dossiers **à l'intérieur de votre coffre** acceptent les dépôts. Tant que la ligne pointe hors du coffre, ses segments refusent, car faire sortir une note du coffre casse tous les liens qui y menaient — une décision qui mérite une question plutôt qu'un geste. La façon de le faire délibérément reste de saisir le chemin, qui demande d'abord confirmation et indique combien de notes seraient affectées.

## Déposer du texte ou un fichier pour l'écrire

Les mêmes cibles acceptent aussi **du contenu**, en plus des fichiers, et les deux sont distingués par ce que vous glissez plutôt que par l'endroit où vous relâchez.

**Sur une note que la ligne nomme déjà** — le propre nom de la note, ou un séparateur dont le dossier a une note de dossier — ce que vous avez déposé s'ajoute à la fin, après une ligne vide. Cela demande d'abord confirmation, car cela écrit dans un fichier déjà présent, et un glisser-déposer est un geste qu'une main peu assurée peut faire par accident. Du texte issu d'un éditeur, un fichier depuis votre bureau et une note glissée hors de ce coffre fonctionnent tous ; un fichier est lu comme texte, et un fichier binaire est refusé plutôt que collé sous forme d'un écran de charabia.

**Sur un emplacement — le nom du coffre ou un dossier** — rien n'est encore écrit, car rien n'a encore de nom. Le champ s'ouvre là, contenant ce que vous avez déposé, et le nom que vous tapez est ce qui valide l'opération : une nouvelle note est *créée* contenant le texte, et une note existante reçoit exactement la même question que ci-dessus. <kbd>Échap</kbd>, ou un clic ailleurs, abandonne le tout.

**La ligne s'entoure de bleu** pendant qu'un glissement qui atterrirait comme contenu la survole, et reste bleue tant que le champ en contient un — le même bleu, disant la même chose : ce qui se passe ensuite concerne le texte que vous transportez. Un fichier glissé depuis votre propre coffre sur un dossier signifie toujours *le déplacer là*, garde la surbrillance propre à Obsidian, et ne s'entoure jamais de bleu ; ce geste était là en premier et le contenu s'en écarte.

## Quand le chemin est plus long que le panneau

Les noms sont **raccourcis plutôt que compressés**, dans l'ordre de ce dont vous avez le moins besoin :

1. **Le nom du coffre en premier**, jusqu'à son icône. Vous savez dans quel coffre vous êtes ; l'icône continue d'indiquer où commence le chemin.
2. **Puis l'extension du fichier**, si vous l'avez activée — les mêmes trois caractères sur presque tous les fichiers d'un coffre. Elle disparaît entièrement plutôt que d'être raccourcie : une demi-extension ne dit rien qu'aucune extension ne dise déjà.
3. **Puis les dossiers, le plus long en premier.** Le nom de dossier le plus long se raccourcit jusqu'à la longueur du suivant, puis les deux ensemble, et ainsi de suite, chacun s'arrêtant à son seuil minimal — si bien qu'un très long dossier abandonne tout ce qu'il a en trop par rapport aux autres avant qu'un nom court à côté ne perde une seule lettre.
4. **Le nom du fichier lui-même en dernier**, et il conserve environ six caractères. C'est à cela que sert l'en-tête.

L'espace est libéré **en continu**, par fractions de pixel plutôt que lettre par lettre : un nom qui céde est rogné au pixel et s'estompe sous son `…`, si bien qu'un panneau rétréci lentement resserre la ligne en douceur et que rien après lui ne se déplace par paliers. Avant qu'aucune lettre ne disparaisse, c'est l'espace autour des séparateurs qui est dépensé — c'est le seul espacement de la ligne et il ne coûte aucune information — et un nom raccourci se termine là où commence le séparateur, sans bande de vide entre les deux.

**Le champ prend ce qu'il contient.** Ouvrir un champ pour saisir un chemin ne repousse pas les dossiers à côté : il est aussi large que le texte qu'il contient et s'agrandit au fur et à mesure que vous tapez, si bien que le reste de la ligne conserve tout ce dont le champ n'a pas besoin. Ce n'est que lorsqu'il n'y a pas assez de place pour les deux que la ligne défile, et alors le champ est la seule chose qui ne céde jamais — c'est un texte en cours d'édition, pas un nom qu'on ajuste.

Rien n'est coupé au-delà de ce qui le distingue de ses voisins : `Projects2025` et `Projects2026` dans le même dossier se réduisent à `…025` et `…026` plutôt qu'à un préfixe qui en ferait le même mot, tandis que `Reports` à côté de `Receipts` peut se réduire à `Rep…`. En plus de cela, chaque nom conserve une **largeur lisible** — l'équivalent d'environ quatre lettres pour un dossier et six pour un nom de fichier, mesurées dans la police avec laquelle la ligne est réellement dessinée plutôt que comptées. Quatre lettres étroites et quatre lettres larges ne représentent pas la même quantité de nom, si bien que `lilliliillil` a le droit de garder plus de lui-même que `WWMMWWMMWWMM`, et ce qui reste à l'écran occupe la même taille dans les deux cas. Les noms courts sont laissés entièrement tranquilles — un nom réduit à `A…` est unique et pourtant illisible. **Les espaces ne comptent pas dans ce calcul.** Six caractères pour dire de quel fichier il s'agit sont six caractères qui valent la peine d'être lus, donc les espaces entre eux voyagent gratuitement et l'un d'eux ne se retrouve jamais collé contre le `…`, où il serait invisible de toute façon.

**Un nom est coupé là où ses voisins s'accordent avec lui, et au milieu là où ils ne s'accordent nulle part.** Deux dossiers appelés `aaaa-common-one` et `aaaa-common-two` partagent tout sauf leurs trois derniers caractères, donc couper la fin conserve la moitié qui parle : ils se réduisent à `…one` et `…two`, ce qui est à la fois plus court *et* les distingue. Là où l'accord est à la fin — `alpha-draft` à côté de `beta-draft` — c'est la fin qui disparaît ; là où il est aux deux extrémités, ce qui reste est le milieu. Un nom sans voisin proche perd son milieu, puisqu'un nom commence par ce qu'il est et se termine par lequel il est — pour un fichier, son extension : `annual…2026.md`.

Une courte séquence commune ne compte pas. `parallel structures` se termine par hasard par les deux mêmes lettres que `Schemes` à côté, et ce n'est pas une raison de garder l'un ou l'autre entier — trois caractères depuis le début les distinguent déjà.

Rien ne passe à une seconde ligne. Quand même les noms honnêtes les plus courts ne rentrent pas, la ligne **défile latéralement**, positionnée à l'extrémité où se trouve le fichier — à ce stade, il n'y a plus rien à compresser, et couper davantage cacherait plutôt que raccourcirait. La molette la fait défiler où que se trouve le pointeur sur la ligne, et les deux extrémités sont accessibles : pendant qu'elle défile, la ligne s'aligne sur son début, quel que soit le réglage d'alignement, car un contenu centré dans une boîte qu'il a dépassée dépasse aussi bien à gauche qu'à droite — et cette moitié n'est alors accessible par aucun défilement.

**Pointez un nom raccourci et il revient en entier**, aussi longtemps que vous le pointez, défilé jusqu'au bord gauche pour que tout ce qui est revenu soit à l'écran. **Cliquez sur l'un d'eux et il reste** : le champ s'ouvre en affichant le dossier sur lequel vous avez cliqué, ce qui est proposé après lui et ce que vous tapez, et il continue de les afficher une fois le pointeur éloigné. Les noms restent en place pendant que vous faites défiler la ligne ou que vous y tapez — l'un d'eux qui s'ouvrirait brusquement sous un geste destiné à lire la ligne déplacerait tout ce qui le suit sous vos yeux.

Le **segment d'ouverture porte toujours une infobulle, et c'est le chemin absolu** — `/home/vous/Coffres/Notes`, ou où que commence la ligne. C'est la seule chose à propos de la ligne que rien à l'écran ne peut dire : le nom vous indique *quel* coffre, jamais où il se trouve. Elle est présente que quelque chose ait dû être raccourci ou non.

Avec **Afficher le nom du coffre** désactivé, le nom n'est pas retiré, seulement réduit à néant — donc pointer l'icône le fait revenir exactement comme pointer un nom que la ligne a dû raccourcir.

**Afficher les extensions de fichier** remet l'extension sur le nom de fichier de la ligne. Désactivé — le réglage par défaut — la ligne nomme une note comme Obsidian la titre, sans le `.md` que presque tous les fichiers d'un coffre partagent ; activé, elle la nomme comme le fait le système de fichiers, ce qui est utile quand le coffre contient plus que des notes. C'est aussi la deuxième chose que la ligne abandonne quand l'espace manque, juste après le nom du coffre.
Une infobulle donne le reste : pas seulement le nom mais tout ce que la ligne montre en dessous, sous la forme `…/nom/dossier/note.md`, si bien qu'un seul survol répond à la fois à « qu'est-ce que c'est » et « qu'y a-t-il dessous ». L'icône du coffre nomme son coffre de la même manière, quand le nom est désactivé ou a été compressé jusqu'à disparaître.

## Les couleurs d'avertissement

| | Quand | Ce que cela signifie |
| --- | --- | --- |
| Anneau **rouge** sur la barre de chemin | La ligne pointe hors de votre coffre | Obsidian ne peut pas ouvrir ce qui se trouve là comme une note, et rien là-bas n'est écrit avant que vous n'ouvriez le cadenas. |
| Anneau **orange** sur la barre de chemin | Le fichier est d'un type texte pour lequel Obsidian n'a pas de vue | Un avertissement. Obsidian le confierait à l'application par défaut de votre bureau ; le plugin l'affiche à la place. |
| Texte **rouge** dans le champ ouvert | Rien ne se trouve encore à ce chemin | <kbd>Entrée</kbd> le créera plutôt que de l'ouvrir. Moins un avertissement qu'un énoncé de ce que fera la prochaine frappe — voir [Saisir un chemin](#saisir-un-chemin). |
| Cadenas **rouge** à la place du bouton de renommage | La ligne pointe hors de votre coffre et l'écriture y est encore verrouillée | Le même rouge que l'anneau, pour la même raison : il marque un refus. L'appuyer autorise l'écriture ici et rend l'emplacement au bouton — voir [Écrire hors du coffre](#écrire-hors-du-coffre). |

Les **deux anneaux sont indépendants, et peuvent être présents en même temps** — un `.json` externe est à la fois hors de votre coffre *et* d'un type pour lequel Obsidian n'a pas d'éditeur. Dans la visionneuse, ils apparaissent comme des lignes séparées, chacune n'énonçant que son propre fait. Sur la barre de chemin, le rouge l'emporte quand les deux s'appliquent, car deux anneaux ne seraient que du bruit. Le *texte* rouge est une troisième chose entièrement à part : il concerne ce qui est en train d'être tapé, pas ce vers quoi pointe la ligne, donc il peut apparaître à l'intérieur de l'un ou l'autre anneau, ou d'aucun des deux.

Le niveau orange est volontairement restreint. Les types reconnus (Markdown, canvas, images, PDF, audio, vidéo) sont gérés correctement et n'obtiennent rien. Les fichiers binaires n'obtiennent rien non plus — vous n'allez pas transformer accidentellement un `.zip` en bouillie en l'éditant. Ce qui reste est exactement le risque : un `.json`, `.css` ou `.log` que **Afficher tous les types de fichiers** a rendu visible. Le menu déroulant est volontairement plus large : là, tout ce qui n'est pas une note est orange — voir [comment les entrées du menu sont teintées](#comment-les-entrées-du-menu-sont-teintées).

## Mode déplacer/renommer

Le bouton crayon à l'extrémité droite de l'en-tête — à côté du bouton de mode d'affichage, de la même taille que les boutons natifs — active ou désactive le mode déplacer/renommer. Hors de votre coffre, un cadenas rouge se tient à sa place jusqu'à ce que vous l'appuyiez ; voir [Écrire hors du coffre](#écrire-hors-du-coffre). La ligne d'en-tête est alors encadrée dans la couleur d'accentuation, exactement comme un renommage dans l'explorateur de fichiers. Les mêmes clics et frappes valident désormais un déplacement ou un renommage via le `fileManager.renameFile` d'Obsidian, si bien que tous les liens vers la note suivent.

Pendant le renommage :

- Le nom de fichier actuel est épinglé dans le menu déroulant de chaque dossier, si bien que déplacer une note sans la renommer se fait en un seul clic.
- Les noms déjà pris dans le dossier cible sont en **rouge** — un dossier qui contient déjà le nom, et un fichier de ce nom — si bien que la collision apparaît avant que vous ne choisissiez. Ils peuvent quand même être choisis : voir ci-dessous.
- La saisie est validée en direct selon les propres règles de renommage d'Obsidian — mêmes jeux de caractères, mêmes messages, même infobulle rouge que celle obtenue en renommant dans l'arborescence de fichiers — si bien qu'un nom illégal est signalé au fur et à mesure et ne peut pas être validé.
- Cliquer hors de la barre d'en-tête, ou la perte de focus de l'en-tête, met fin au mode de renommage.

### Un nom déjà pris

Déplacer ou renommer vers un nom déjà présent **demande au lieu de refuser.** Une boîte de dialogue s'ouvre avec deux chemins que vous pouvez modifier : où va votre fichier, et où va le fichier qui se trouvait sur le chemin — en rouge tant que celui-ci est encore pris. Chaque chemin est également dessiné comme la barre de chemin en dessine un, avec les parties qui diffèrent colorées et raccourcies en dernier, si bien qu'un long chemin montre quand même ce qui change.

Les deux champs ont une liste. La seconde propose les issues habituelles :

- **Échanger les emplacements** — il va vers l'ancien dossier de votre fichier, sous son propre nom.
- **Échanger les noms** — il reste où il est et prend l'ancien nom de votre fichier.
- **Échanger les deux** — il prend l'ancien chemin de votre fichier.
- `-1`, `-bak` et `-old` à côté de son propre nom.
- Les deux noms qu'avaient les fichiers.

La première liste propose là où votre fichier allait, **Rester où il est**, son propre nom dans le dossier cible, et `-1`, `-bak` et `-old` à côté. Une issue dont le chemin est déjà pris est grisée et ne peut pas être choisie. Choisir l'une d'elles **ne fait que remplir le champ** — vous pouvez toujours le modifier — et **Appliquer** déplace les deux, liens compris ; **Annuler** ne déplace rien. Choisir un nom déjà pris dans le menu déroulant pose la même question, tout comme déposer une note sur un dossier qui contient déjà son nom.

## Une touche pour les deux renommages

La commande de renommage (<kbd>F2</kbd> par défaut, ou toute autre touche à laquelle vous l'avez réattribuée) **alterne** entre le renommage du titre en ligne d'Obsidian et la barre de chemin de ce plugin dans l'en-tête. Si vous avez désactivé le titre en ligne d'Obsidian, la barre de chemin de l'en-tête devient la seule cible, et la touche n'est donc jamais sans effet.

Dans la barre de chemin, elle ouvre le **nom sans son extension** — la modification qu'un renommage est presque toujours, et ce que cliquer sur le nom sélectionne également. Appuyez à nouveau et elle fait ce que <kbd>Tab</kbd> ferait au même endroit : sur le nom, c'est l'échelon suivant —
le nom avec son extension, le chemin depuis le dossier de votre coffre, le chemin depuis la
racine du système ; avec du texte saisi, elle le complète, comme le ferait <kbd>Tab</kbd>.

**Le cycle se referme au niveau du titre.** Cinq pressions vous font faire le tour —
le titre en ligne, le nom, le nom avec son extension, le chemin depuis votre coffre, le chemin
depuis la racine du système — et la sixième revient au titre en ligne. Cette pression est la seule qui diffère de
<kbd>Tab</kbd>, qui repart plutôt au début du chemin — et la septième
va là où le tour de <kbd>Tab</kbd> va : la racine du coffre, avec le chemin entier dans le
champ et son premier dossier marqué. Ainsi, chaque étape que <kbd>Tab</kbd> atteint, la touche
l'atteint aussi.

La commande **Placer le focus sur la barre de chemin** fait la même chose à l'intérieur du champ — tout ce que
<kbd>Tab</kbd> ferait — et là où <kbd>Tab</kbd> ferait le tour, elle rend plutôt le curseur
à la note. Sa pression suivante est le tour : la racine du coffre, premier dossier marqué.

**Dans un champ déjà ouvert**, la touche le transforme en renommage là où il
se trouve — en conservant le texte, le curseur et la sélection — et **Placer le focus sur la barre
de chemin** retire le renommage de la même façon. **Tout autre chose** appuyée ou
cliquée entre les pressions relance l'un ou l'autre cycle depuis le début, si bien qu'une pression après avoir
modifié n'atterrit jamais sur un échelon laissé de la fois précédente.

Hors du coffre, la touche fonctionne aussi — il n'y a pas de titre en ligne là-bas, donc la
première pression va directement à la barre de chemin.

Cela fonctionne en enveloppant la commande `workspace:edit-file-title` plutôt qu'en interceptant la touche : réattribuer le raccourci et lancer la commande depuis la palette fonctionnent donc sans changement.

## Comment les entrées du menu sont teintées

| Couleur | Signification |
| --- | --- |
| **Violet** | Une note (`.md`, `.markdown`) — ce qu'Obsidian ouvrira comme note, distinguée dans un dossier au contenu mixte |
| **Orange** | Pas une note — tout ce qu'Obsidian n'ouvrira pas comme telle, d'un PDF à un `.txt`, et les entrées `:page` qui vont avec. Un dossier au contenu mixte est lu pour les notes qu'il contient, et une seule couleur pour tout le reste le signale plus vite qu'un avertissement sur quelques-unes d'entre elles ; voir [les couleurs d'avertissement](#les-couleurs-davertissement) |
| **Estompé** | Hors de votre coffre, donc le traitement propre au coffre ne s'applique pas |
| **Bleu**, en gras | Là où vous êtes déjà : la note de cette barre elle-même, et le dossier sur lequel la barre de chemin se trouve. En mode renommer/déplacer, l'entrée *conserver ce nom* tient la place de la note — la même note dans les deux cas |
| **Rouge** | Mode renommer/déplacer uniquement : le nom est déjà pris. Toujours sélectionnable — en choisir un demande quoi faire du fichier qui bloque ; voir [Un nom déjà pris](#un-nom-déjà-pris) |

**Les dossiers sont en gras**, si bien que la propre note d'un dossier n'a besoin d'aucune couleur
particulière pour se distinguer de son dossier : elle est violette comme n'importe quelle autre note. Un **trait le long du bord
d'une ligne** marque les noms qui commencent comme ce que vous avez tapé — bleu là où
ils concordent davantage, vert sur la branche que la proposition prend ; voir
[Saisir un chemin](#saisir-un-chemin).

Le champ prend les mêmes couleurs pour ce qu'il nomme — voir [Saisir un chemin](#saisir-un-chemin).

## Règles de visibilité

- Les fichiers aux extensions non prises en charge n'apparaissent dans les menus que si le paramètre **Detect all file extensions** d'Obsidian est activé — **à l'intérieur du coffre**. En dehors, le paramètre ne s'applique pas : il régit ce que le coffre indexe, et rien là-bas n'est dans le coffre, donc un `.txt` à côté de vos notes est listé dans les deux cas.
- Le menu affiche jusqu'à 1 000 entrées, dix fois la limite propre à Obsidian. Quand un dossier en contient davantage, la dernière ligne indique combien ont été omises ; continuez à taper pour restreindre la liste.
- Les fichiers et dossiers cachés (dont le nom commence par un point) n'apparaissent que si le paramètre **Afficher les fichiers cachés** de ce plugin est activé.
- **La protection contre l'écrasement fonctionne de manière identique, qu'un élément soit visible ou non** — un fichier caché vous empêche quand même de l'écraser.

## Aide-mémoire

Un chemin **entouré de guillemets** est déballé pour vous. La fonction *Copier en tant que chemin* de Windows fournit
`"C:\Users\you\note.md"`, guillemets compris, et un shell fait de même pour tout
chemin contenant un espace ; le coller ou le taper fonctionne dans les deux cas. Seul le
guillemet double, et seulement en paire correspondante autour de l'ensemble — il ne peut pas
apparaître dans un vrai nom, là où une apostrophe le peut très bien.

| Vous voulez… | Faites ceci |
| --- | --- |
| Ouvrir un dossier (sa note, ou le révéler) | Cliquez sur le séparateur **après** ce dossier |
| Donner à un dossier une note de dossier qu'il n'a pas | **Double-cliquez** sur ce même séparateur (nécessite un plugin de notes de dossier) |
| Remplacer un dossier par un voisin | Cliquez sur le nom de ce dossier, puis tapez ou choisissez |
| Renommer ou reciblage la note | Cliquez sur le nom de la note — extension comprise |
| Parcourir le contenu d'un dossier | Cliquez sur le nom de ce dossier ; le menu liste son parent, donc cliquez sur le dossier **en dessous** de celui que vous voulez |
| Retaper un dossier et tout ce qui est en dessous | **Double-cliquez** sur le nom de ce dossier, puis tapez |
| Modifier le chemin à partir d'un dossier vers le bas | Cliquez sur le nom de ce dossier, puis <kbd>→</kbd> pour désélectionner |
| Sauter vers un fichier en tapant son chemin | Cliquez sur le nom de fichier ou l'espace vide, tapez, <kbd>Enter</kbd> |
| Ouvrir un fichier dans un nouvel onglet à la place | <kbd>Ctrl</kbd> en le choisissant, ou <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| Copier la note quelque part plutôt que de la déplacer | Crayon, puis <kbd>Ctrl</kbd> en choisissant ou en validant la cible |
| Créer une note à un chemin qui n'existe pas | Tapez le chemin — le champ devient **rouge** dès que rien dans le menu ne le fait plus correspondre — puis <kbd>Enter</kbd>. À l'intérieur du coffre, elle est créée immédiatement ; en dehors, une confirmation est demandée d'abord |
| Savoir si un chemin que vous avez tapé existe déjà | Regardez la couleur : elle prend la couleur de la ligne qu'elle nomme, et le rouge signifie que <kbd>Enter</kbd> la créerait |
| Descendre d'un niveau en tapant | Tapez `/` |
| Remonter d'un niveau en tapant | <kbd>Backspace</kbd> dans le champ vide |
| Ramener dans le champ les dossiers qui le précèdent | <kbd>←</kbd> en son début pour un seul ; <kbd>Shift</kbd>+<kbd>Home</kbd>, ou <kbd>Home</kbd> avec le menu fermé, pour tous |
| Déplacer ou renommer la note ouverte | Cliquez sur le crayon, puis parcourez ou tapez comme ci-dessus |
| Déplacer vers un nom déjà pris | Validez quand même : la boîte de dialogue vous permet d'échanger les emplacements, les noms ou les deux, ou de donner un autre nom au fichier qui bloque |
| Déplacer sans renommer | Crayon → cliquez dans le dossier cible → choisissez le nom de fichier actuel épinglé |
| Renommer sur place | <kbd>F2</kbd> deux fois (la première pression va au titre en ligne, la seconde à l'en-tête) |
| Sauter vers un autre coffre, le dossier personnel ou un lecteur | Cliquez sur le nom du coffre |
| Ouvrir un fichier depuis l'extérieur du coffre | Nom du coffre → choisissez un emplacement → parcourez → choisissez le fichier (lecture seule jusqu'à *Modifier en texte*) |
| Compléter le nom en cours de saisie | <kbd>Tab</kbd>, ou <kbd>End</kbd> pour ce qui est proposé ; <kbd>→</kbd> en prend une lettre |
| S'y engager, une fois qu'un seul nom reste | <kbd>Tab</kbd> à nouveau |
| Revenir en arrière d'une étape, ou quitter le dossier | <kbd>Shift</kbd>+<kbd>Tab</kbd> |
| Récupérer le chemin entier, ou le chemin système | <kbd>Tab</kbd> après la fin, ou cliquez quatre fois |
| Copier un nom, un chemin, ou un chemin système | Clic droit deux fois ; l'espace vide trois fois pour le chemin système |
| Accéder à ce que le gestionnaire de coffres propose pour ce coffre | Clic droit sur l'icône au début de la ligne |
| Copier l'identifiant du coffre | Clic droit sur l'icône au début de la ligne |
| Ouvrir un autre coffre que vous parcouriez | Clic droit sur son nom au début de la ligne |
| Voir l'extension du fichier sur la ligne | Activez **Afficher les extensions de fichier** dans les paramètres |
| Ouvrir un segment de dossier dans un nouvel onglet | <kbd>Ctrl</kbd> ou clic du milieu sur celui-ci, ou faites-le glisser sur la barre d'onglets |
| Atteindre la barre de chemin depuis le clavier | Associez *Placer le focus sur la barre de chemin* dans Raccourcis clavier |
| Ouvrir une adresse web ou un lien `obsidian://` | Tapez-le dans la barre et appuyez sur <kbd>Enter</kbd> |
| Annuler quoi que ce soit | <kbd>Esc</kbd>, ou cliquez en dehors de la barre d'en-tête |
| Essayer des entrées avant de valider | Flèches ou survol dans le menu ; <kbd>↑</kbd> au-delà du haut restitue votre texte |
| Déplacer une note dans un dossier au-dessus d'elle | Faites-la glisser sur ce dossier dans la ligne |
| Conserver un bout de texte comme nouvelle note | Faites glisser le texte sur un dossier, tapez un nom, <kbd>Enter</kbd> |
| Ajouter un bout de texte à la note que vous lisez | Faites-le glisser sur le nom de la note, confirmez |
| Voir en entier un nom de dossier tronqué | Survolez-le, ou élargissez le panneau |
| Découvrir où se trouve le coffre lui-même | Survolez l'icône au début de la ligne |
| Sortir une note du coffre | Crayon → parcourez en dehors → confirmez la boîte de dialogue (les liens seront rompus) |
| Autoriser l'écriture en dehors de votre coffre | Cliquez sur le **cadenas rouge** dans l'en-tête ; le bouton de renommage prend sa place |
| Le verrouiller à nouveau | Cliquez sur le bouton jusqu'à ce que le cadenas revienne — une pression pour entrer, une pour sortir |
| Supprimer un fichier en dehors du coffre | Ouvrez le cadenas, puis clic droit sur le fichier : *Supprimer* le déplace vers la corbeille de votre système |

## Paramètres

| Paramètre | Options | Par défaut | Ce qu'il fait |
| --- | --- | --- | --- |
| **Langue** | Par défaut d'Obsidian, ou l'une des 46 | Par défaut d'Obsidian | Dans quelle langue est le propre texte de ce plugin. *Par défaut d'Obsidian* suit la langue définie dans les paramètres d'apparence, ce que presque tout le monde souhaite. La ligne elle-même — son nom, sa description et *Par défaut d'Obsidian* — reste en anglais quel que soit le choix, car c'est le chemin de retour hors d'une langue que vous ne pouvez pas lire. Le grec et le sanskrit sont traduits ici et absents de la propre liste d'Obsidian, donc ce paramètre est le seul moyen de les atteindre. |
| **Alignement** | Gauche / Centre / Droite | Gauche | Où le fil d'Ariane se place dans la ligne d'en-tête. *Centre* correspond à l'apparence classique d'Obsidian. |
| **Séparateur** | Tout caractère | `/` | Le séparateur dessiné entre les segments. Six préréglages en un clic (`/ > ▸ › \ •`) se trouvent devant le champ de texte. |
| **Afficher le nom du coffre** | Activé / Désactivé | Activé | Si le coffre lui-même est le premier segment du fil d'Ariane. Désactivé, ce segment devient une icône 🏠 plutôt que de disparaître, si bien que le chemin commence toujours quelque part de cliquable. |
| **Le nom du dossier ouvre le menu** | Activé / Désactivé | Activé | Échange ce que font le nom d'un dossier et le séparateur qui le suit — voir [le tableau ci-dessus](#le-fil-dariane). Avec [Folder notes](obsidian://show-plugin?id=folder-notes), le séparateur ouvre les notes de dossier. Ne s'applique jamais en mode renommer/déplacer. |
| **Afficher les fichiers cachés** | Activé / Désactivé | Désactivé | Si les fichiers et dossiers cachés sont listés dans les menus. La protection contre l'écrasement s'applique dans les deux cas. |
| **Show all file types** | — | — | Ce n'est pas un paramètre de ce plugin mais d'Obsidian, mentionné ici car il répond à la même question : votre coffre n'indexe que les types de fichiers qu'on lui dit d'indexer, et seul ce qu'il indexe peut être listé. Cherchez-le dans les paramètres d'Obsidian et activez-le pour voir tous les fichiers ; le bouton à côté de la ligne ouvre cette page avec le paramètre défilé jusqu'à sa position et mis en surbrillance, comme le ferait un clic dans la recherche des paramètres eux-mêmes. En dehors du coffre, il ne s'applique pas, puisque rien là-bas n'est indexé de toute façon. |
| **Afficher les extensions de fichier** | Activé / Désactivé | Désactivé | Si le nom du fichier sur la ligne porte son extension. Désactivé, elle est omise — comme Obsidian l'omet du titre d'une note. Activé, la ligne nomme le fichier comme le fait le système de fichiers. Dans les deux cas, l'extension est la deuxième chose abandonnée quand la ligne manque de place, juste après le nom du coffre. |
| **Accès aux fichiers externes** | Activé / Désactivé | **Désactivé** | Si le nom du coffre ouvre le menu des emplacements. Désactivé, rien dans le plugin ne regarde jamais au-delà de ce coffre. |
| **Raccourcis clavier** | bouton | — | Ouvre les *Raccourcis clavier* d'Obsidian filtrés sur ce plugin, où *Placer le focus sur la barre de chemin* peut recevoir une touche. |

## Remplacer les icônes

Lure affiche trois icônes : l'icône de la racine du coffre (quand **Afficher le nom du coffre** est désactivé), le bouton de renommage/déplacement, et le cadenas qui prend sa place tant que l'écriture en dehors du coffre est verrouillée. Toutes peuvent être remplacées depuis un thème ou un extrait CSS : définissez le glyphe de remplacement et masquez celui fourni dans une seule règle :

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* Toujours affiché fermé seulement : l'ouvrir cède la place au bouton de renommage. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}
```

`--lure-icon-glyph` accepte tout ce qui est valide dans la propriété CSS `content` : `url(...)` fonctionne donc pour une image aussi bien qu'un glyphe texte ou emoji. Laissez `--lure-icon-svg` tel quel pour conserver l'icône Lucide et dessiner votre glyphe à côté.
