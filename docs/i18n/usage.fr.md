<!-- Traduction de docs/usage.md — état : commit 33b0e60.
     Traduction automatique (Claude Opus 5), non relue par des locuteurs
     natifs. Les libellés du plugin proviennent de src/lang/translations.ts ;
     pour les paramètres d'Obsidian lui-même, le nom anglais est donné entre
     parenthèses, faute d'avoir pu le vérifier ici. -->

[English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · [Čeština](usage.cs.md) · [Dansk](usage.da.md) · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · **Français** · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · [Bahasa Indonesia](usage.id.md) · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · [Norsk](usage.no.md) · [Polski](usage.pl.md) · [Português](usage.pt.md) · [Português (Brasil)](usage.pt-BR.md) · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

# Utilisation

[← retour au README](README.fr.md)

> **Ce guide décrit Lure 1.0.** Huit sections ajoutées depuis — dont la complétion par <kbd>Tab</kbd>, le compte des clics droits, le glissement d'une note sur un dossier de la barre et ce qui se passe quand le chemin dépasse la largeur du volet — ne figurent pour l'instant que dans le [guide anglais](../usage.md).

## Le fil d'Ariane

Le chemin complet de la note dans le coffre remplace le simple nom de fichier dans l'en-tête de la vue — la barre située sous la rangée d'onglets, qui porte aussi les boutons précédent/suivant.

Deux éléments de la ligne sont cliquables, et **Le nom du dossier ouvre le menu** décide lequel fait quoi :

| | Nom du dossier | Séparateur qui suit |
| --- | --- | --- |
| **Activé** (par défaut) | Sélectionne ce dossier pour le modifier | Ouvre le dossier |
| **Désactivé** | Ouvre le dossier | Descend dans ce dossier |

« Ouvre le dossier » désigne ce que fait un clic sur ce segment dans un Obsidian d'origine. Si aucun plugin n'écoute là, le dossier est révélé dans l'Explorateur de fichiers — mis en évidence, et déplié pour montrer son contenu.

Avec [Folder notes](obsidian://show-plugin?id=folder-notes) installé, le même clic ouvre plutôt la note de ce dossier. C'est le seul plugin de notes de dossier trouvé à revendiquer le chemin dans l'en-tête ; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) et [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) gèrent des notes de dossier mais n'écoutent pas le clic sur le fil d'Ariane : avec ceux-là, le séparateur révèle le dossier comme d'habitude. Voir [compatibilité](../compatibility.md#verified-against).

Un séparateur n'est **souligné que si le dossier qui le précède possède réellement une note de dossier** : le soulignement est donc la promesse qu'il y a quelque chose à ouvrir. Chaque séparateur reste cliquable dans tous les cas — un séparateur non souligné révèle et déplie son dossier dans la barre latérale, ce que le curseur en forme de main signale toujours. Le soulignement quitte en même temps le nom du dossier : avec l'échange activé, c'est le nom qui ouvre le menu, et le marquer comme lien vers la note serait un mensonge.

**Le mode renommer/déplacer l'emporte sur les deux**, quoi que dise le paramètre : rien dans la ligne n'ouvre un dossier tant qu'un déplacement est en cours, car l'ouvrir reviendrait à l'abandonner. Les noms de dossier sélectionnent pour modification et les séparateurs descendent — ce sont deux façons de choisir la destination — et le soulignement disparaît pour montrer que l'ouverture est suspendue.

La **racine du coffre** est le seul segment qui n'est pas un segment de chemin. Elle n'a pas de parent dont lister les voisins : elle ouvre donc le [menu des emplacements](#naviguer-hors-du-coffre) — vos autres coffres, votre dossier personnel, la racine du système de fichiers et les disques montés.

## Cliquer sur un segment : le remplacer par un voisin

Cliquer sur un nom de dossier sélectionne **le nom de ce dossier** dans un champ de texte et ouvre un menu listant le dossier situé **un niveau au-dessus** — son parent. Taper ou choisir une entrée remplace ce dossier par un voisin et laisse intact tout ce qui se trouve en dessous : `Projets/2026/Lancement.md` → clic sur `2026` → choisir `2025` donne `Projets/2025/Lancement.md`.

Cliquer sur le **nom de la note** fonctionne de la même façon vis-à-vis de son propre dossier, et sélectionne le nom de fichier **extension comprise** — renommer ou réorienter une note implique généralement de la changer aussi.

Le clic sur le dossier a déjà sélectionné un segment ; **un clic supplémentaire** élargit donc la sélection à la ligne entière — ce dossier *et* tout ce qui suit — et la saisie remplace alors le reste du chemin d'un seul coup. Fonctionne pareillement en navigation et en mode renommer/déplacer.

Cela ne vaut que dans la continuité du clic qui a ouvert le champ. Une fois que vous vous en êtes servi, il se comporte comme n'importe quel champ de texte : un clic place le curseur, un double-clic prend un mot, un triple-clic la ligne.

Dans tous les cas, le reste du chemin demeure visible autour du champ — en pastilles avant lui, en texte non sélectionné après — de sorte que le chemin complet ne disparaît jamais de l'en-tête. Tapez pour remplacer la sélection, ou appuyez sur <kbd>Fin</kbd> / <kbd>→</kbd> pour la conserver et modifier à partir de là. Le menu liste tout le dossier quel que soit le contenu pré-rempli ; il ne filtre qu'à partir du moment où vous tapez vraiment.

## Descendre par le séparateur

Cliquer sur un séparateur (avec **Le nom du dossier ouvre le menu** désactivé) descend dans le dossier qui le précède : le menu liste le contenu de *ce* dossier, et le reste du chemin s'ouvre sélectionné dans le champ. Choisir un dossier l'ajoute au fil d'Ariane et ouvre aussitôt le menu suivant : vous pouvez donc descendre une arborescence au clic sans quitter la ligne d'en-tête.

## Les entrées du menu sont de vraies lignes de gestionnaire de fichiers

Chaque fichier et chaque dossier du menu se comporte comme sa ligne dans l'Explorateur de fichiers :

- **Clic droit** pour le même menu contextuel — *Nouvelle note* / *Nouveau dossier* sur un dossier, *Ouvrir dans un nouvel onglet* / *Renommer…* / *Supprimer* sur un fichier — y compris les entrées que d'autres plugins ajoutent aux menus de fichiers.
- **Glissez** une entrée partout où Obsidian accepte un fichier : dans un éditeur pour insérer un lien, sur un dossier de l'Explorateur de fichiers pour l'y déplacer, sur la barre d'onglets pour l'ouvrir.

Les intitulés des menus proviennent des traductions d'Obsidian : ils s'accordent donc au reste de l'application dans toutes les langues.

## Saisir un chemin

- Cliquer sur l'**espace vide** avant ou après le fil d'Ariane ouvre un champ de texte pré-rempli avec le chemin entier et entièrement sélectionné — tapez par-dessus, ou modifiez sur place. (Cliquer sur le nom de fichier lui-même ne sélectionne que celui-ci ; voir plus haut.)
- Taper pendant qu'un fil d'Ariane est affiché convertit le dernier segment en un petit champ avec autocomplétion limitée au dossier courant.
- `/` valide le segment courant et y descend.
- <kbd>Retour arrière</kbd> dans un champ vide remonte au dossier parent et rouvre son nom, curseur en fin de ligne.
- <kbd>Entrée</kbd> valide ; <kbd>Échap</kbd> ou un clic ailleurs annule et revient au chemin réel du fichier.

Le champ est dépouillé — pas de cadre, pas de bordure — pour se lire comme le texte du chemin lui-même, et il s'élargit à mesure que vous tapez.

## La navigation ne touche jamais au fichier ouvert

Dans le mode par défaut (navigation), la note actuellement ouverte n'est **jamais** renommée ni déplacée.

- Un chemin qui correspond à un fichier existant l'ouvre.
- Un chemin qui n'existe pas encore déclenche l'invite *« Créer un nouveau fichier ? »*. Confirmer crée les dossiers parents manquants et le fichier ; annuler ne fait strictement rien.

## <kbd>Ctrl</kbd> — nouvel onglet, et copier au lieu de déplacer

Maintenir <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> sur macOS) en choisissant un fichier dans le menu, ou en appuyant sur <kbd>Entrée</kbd> sur un chemin, envoie le résultat dans un **nouvel onglet** plutôt que dans celui-ci :

| | Sans | Avec <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Choisir ou taper un fichier existant | Ouvre ici | Ouvre dans un nouvel onglet |
| Taper un chemin inexistant | Demande, puis ouvre ici | Demande, puis ouvre dans un nouvel onglet |
| Valider un chemin en mode renommer/déplacer | **Déplace** la note à cet endroit | **Copie** la note à cet endroit et ouvre la copie dans un nouvel onglet |

Le modificateur est lu selon la règle d'Obsidian lui-même : il se comporte donc exactement comme sur un lien ou une ligne de l'Explorateur de fichiers — le clic du milieu signifie également « nouvel onglet », <kbd>Ctrl</kbd>+<kbd>Alt</kbd> une vue scindée, et <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Maj</kbd> une nouvelle fenêtre.

La copie refuse d'écraser, exactement comme le déplacement — y compris sur le chemin de la note elle-même, où il n'y a rien de sensé à copier.

## Naviguer hors du coffre

**Désactivé par défaut.** Activez d'abord **Accès aux fichiers externes** dans les paramètres — lire et écrire hors du coffre est la seule chose que ce plugin fait et qu'Obsidian lui-même refuse : on y consent donc explicitement plutôt que de devoir s'en retirer. Désactivé, le nom du coffre se contente de révéler votre coffre dans l'Explorateur de fichiers, et rien ici ne regarde jamais au-delà.

Cliquer sur le **nom du coffre** (ou sur l'icône 🏠, quand *Afficher le nom du coffre* est désactivé) ouvre un menu de lieux plutôt que de contenus :

- **Vos autres coffres**, lus depuis le registre d'Obsidian lui-même, les plus récemment ouverts d'abord, chacun sous l'icône de coffre d'Obsidian — celle que l'application emploie pour ses propres commandes de coffre. Le coffre déjà ouvert reçoit une maison à la place : c'est le point de départ de la ligne, pas une destination.
- **Le dossier personnel**, sous son nom de compte, marqué d'un `~`. Lucide n'a pas de tilde : cette icône-là est donc dessinée par le plugin sur la grille 24×24 de Lucide et avec la même épaisseur de trait — une icône que le jeu ne fournit pas, plutôt qu'un caractère texte au milieu d'icônes.
- La **racine du système de fichiers**, intitulée `root` — non traduit, puisque c'est son nom sur tous les systèmes — plutôt que `/`, qui se lirait comme une étape vide à côté du séparateur qui suit.
- **Les disques montés**, avec une icône par type quand cela ne coûte rien à déterminer : partages réseau, disques optiques, disquettes et supports amovibles ont la leur ; tout le reste reçoit une icône générique. Sous Windows, les disques apparaissent comme `C:` avec une icône générique — les noms de volume et les types précis exigeraient WMI, délibérément écarté.

Choisir un autre coffre **ne fait pas basculer Obsidian dedans.** Tout ce que vous aviez ouvert le reste ; le fil d'Ariane se contente d'aller y naviguer. C'est tout l'intérêt de placer cela dans la barre de chemin plutôt que de renvoyer au sélecteur de coffre de la barre latérale.

### Pendant que vous êtes dehors

Le chemin **commence à l'emplacement que vous avez choisi**, non à l'arborescence de la machine — choisissez `Archives` et la ligne se lit `Archives / notes / …`, pas `/home/vous/Coffres/Archives/notes/…`. Le segment de tête porte une icône indiquant ce qu'il est (coffre, dossier personnel, disque), et <kbd>Retour arrière</kbd> s'y arrête au lieu de continuer à remonter dans le reste du système de fichiers. Avec *Afficher le nom du coffre* désactivé, ce segment se réduit à l'icône — le paramètre concerne le segment d'ouverture de la ligne quel que soit le coffre qu'il nomme, pas seulement le vôtre.

La barre de chemin est **encadrée de la couleur d'erreur** — le même anneau que dessine le mode renommer — tant qu'elle pointe hors de votre coffre. Il signale un état persistant, non un instant : tant qu'il est là, rien du traitement propre à Obsidian ne s'applique à ce que la ligne affiche, et l'écriture reste verrouillée jusqu'à ce que vous en décidiez autrement.

Pour le reste, la navigation fonctionne comme à l'intérieur : pastilles, séparateurs, saisie, autocomplétion, <kbd>Retour arrière</kbd> pour ressortir. Les mêmes règles de visibilité s'appliquent aussi : les extensions non prises en charge exigent toujours **Détecter toutes les extensions de fichiers** d'Obsidian, et les fichiers cachés toujours le paramètre de ce plugin.

**Le clic droit et le glisser-déposer** sur les entrées du menu ne fonctionnent pas là-bas — ce sont les gestionnaires de l'Explorateur de fichiers, et il leur faut un fichier que le coffre connaît.

### Écrire hors du coffre

Tout ce qui écrit est **verrouillé par défaut**. Un **cadenas** apparaît à côté du bouton de renommage dans l'en-tête tant que la ligne pointe hors de votre coffre ; l'actionner ouvre le verrou et le passe au rouge, assorti à l'anneau autour de la ligne.

L'autorisation est accordée **à un lieu, pas à un instant** : elle survit à tout ce que l'on fait en travaillant au même endroit — terminer un déplacement, cliquer hors du champ, ouvrir un fichier — et prend fin lorsque vous choisissez un autre coffre, disque ou racine dans le menu, lorsque la ligne revient à un fichier du coffre, ou lorsque vous actionnez de nouveau le cadenas. Une série de déplacements dans un même dossier coûte donc une pression, et non une par fichier.

Le cadenas ouvert, la barre de chemin se comporte dehors comme dedans :

| Geste | Résultat |
| --- | --- |
| Taper un nom inexistant, <kbd>Entrée</kbd> | La même invite « créer ? » qu'à l'intérieur ; les dossiers parents manquants sont créés aussi. Un nom sans extension devient un `.md`, exactement comme à l'intérieur |
| Mode renommer/déplacer, taper un nouveau nom | Renomme le fichier que la ligne affiche. Un nom sans extension conserve celle du fichier — dehors, un dossier contient toutes sortes de fichiers, et un renommage ne doit pas transformer discrètement un `.png` en `.md` |
| Mode renommer/déplacer, naviguer ailleurs, choisir **conserver ce nom** | Le déplace là-bas sous le nom qu'il porte déjà |
| Maintenir <kbd>Ctrl</kbd> sur l'un ou l'autre | Copie au lieu de déplacer, et ouvre la copie dans un nouvel onglet |

Verrouillé, tout cela signale ce qui l'empêche au lieu de se produire. Rien n'est jamais écrasé dans l'un ou l'autre état : une cible existante est refusée, et le refus est celui du système de fichiers lui-même (`COPYFILE_EXCL`, une création exclusive) plutôt qu'une vérification qui pourrait perdre la course. Un déplacement entre systèmes de fichiers — depuis une clé USB, depuis un partage réseau — bascule sur copier-puis-supprimer, et l'original n'est retiré qu'une fois la copie arrivée.

**Une chose que le cadenas ne déverrouille pas : déplacer une note *hors* de votre coffre.** `fileManager` ne peut pas suivre un fichier au-delà de cette frontière : tous les liens pointant vers la note se rompraient en silence et Obsidian la verrait simplement disparaître. Maintenir <kbd>Ctrl</kbd> la copie dehors à la place, ce qui n'a pas ce défaut, et la notification le dit. Le trajet inverse — faire entrer un fichier extérieur *dans* le coffre — n'est pas non plus encore en place.

### Ouvrir un fichier externe

L'éditeur d'Obsidian ne fonctionne que sur les fichiers du coffre : un fichier externe **ne peut pas** être ouvert comme une véritable note avec liens, rétroliens et le reste — c'est une limite de l'application, pas de ce plugin. En choisir un ouvre plutôt un **aperçu**, en lecture seule jusqu'à ce que vous en décidiez autrement :

| Type | Affiché comme |
| --- | --- |
| `.md`, `.markdown` | Markdown rendu |
| Images, audio, vidéo, PDF | Lecteur/visionneuse natifs |
| Tout autre fichier **texte** (`.json`, `.css`, `.log`, `.txt`, …) | Texte brut, verbatim |
| Formats binaires sans visionneuse (`.zip`, `.exe`, …) | Confiés à *Ouvrir en externe* |

La visionneuse a deux lectures d'un fichier, et comme elles s'excluent, seule celle vers laquelle vous basculeriez est proposée :

| | Ce que cela fait | Par défaut pour |
| --- | --- | --- |
| **Afficher en Markdown** | Rend le fichier comme une note, en lecture seule | `.md`, `.markdown` |
| **Modifier en texte** | La source, modifiable | tout le reste |

Hors du coffre, **Modifier en texte** est aussi la pression qui lève la lecture seule — le mode et l'autorisation forment un seul geste plutôt que deux boutons à démêler. Le bouton est teinté de rouge **chaque fois que l'actionner lèverait la lecture seule**, que vous armiez la modification sur place ou que vous arriviez directement de la vue rendue ; dans le coffre il n'y a rien à déverrouiller, il reste donc neutre. **Afficher en Markdown** reçoit un léger voile d'accentuation — la teinte qu'Obsidian donne au texte sélectionné — le désignant comme le chemin du retour plutôt qu'un appel à l'action.

Parce que le bouton suit la *modification* et non le mode brut, un fichier en lecture seule dans la vue texte propose encore **Modifier en texte** : c'est cette pression qui l'arme. Un fichier dans lequel on ne pourra jamais taper — tronqué, ou illisible — affiche **Afficher en texte**, puisque c'est tout ce que la pression peut offrir.

Les valeurs par défaut sont les plus utiles plutôt que les plus littérales : un `#` dans un script shell est un commentaire, pas un titre, et rendre un `.log` en Markdown l'avalerait sans bruit. Chaque valeur par défaut se remplace fichier par fichier, et le choix entre dans l'historique de l'onglet : précédent/suivant et un espace de travail rouvert le conservent — quantité de notes vivent dans des `.txt`, et quantité de `.md` se lisent plus aisément en source.

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

- **Ouvrir dans *(coffre)*** — affiché quand le fichier appartient à l'un de vos autres coffres. Le confie au gestionnaire d'URI d'Obsidian, qui ouvre la fenêtre de ce coffre avec la note dedans, en véritable note modifiable. Cette fenêtre-ci reste exactement telle quelle ; rien ne bascule sous vos pieds.
- **Afficher en Markdown** / **Modifier en texte** — les deux lectures ; la seconde lève aussi la lecture seule hors du coffre.
- **Ouvrir en externe** — confie le fichier à l'application par défaut de votre bureau, y compris les formats binaires que cette visionneuse ne sait pas montrer.

Rien n'est écrit hors de votre coffre sans que vous ayez d'abord actionné *Modifier en texte*. Voir la section [Hors du coffre](README.fr.md#hors-du-coffre) du README pour la divulgation complète.

## Les deux couleurs d'avertissement

| | Quand | Ce que cela signifie |
| --- | --- | --- |
| Anneau **rouge** sur la barre de chemin | La ligne pointe hors de votre coffre | Obsidian ne peut pas ouvrir ce qui s'y trouve comme une note, et rien n'y est écrit tant que vous n'ouvrez pas le cadenas. |
| Anneau **orange** sur la barre de chemin, entrées orange dans le menu | Le fichier est d'un type texte pour lequel Obsidian n'a pas de vue | Une mise en garde. Obsidian le confierait à l'application par défaut de votre bureau ; le plugin l'affiche à la place. |

Les **deux sont indépendants, et peuvent valoir en même temps** — un `.json` externe est hors de votre coffre *et* d'un type pour lequel Obsidian n'a pas d'éditeur. Dans la visionneuse ils apparaissent sur des lignes distinctes, chacune n'énonçant que son propre fait. Sur la barre de chemin, le rouge l'emporte là où les deux s'appliquent : deux anneaux ne seraient que du bruit.

Le palier orange est délibérément étroit. Les types enregistrés (Markdown, canevas, images, PDF, audio, vidéo) sont correctement pris en charge et ne reçoivent rien. Les fichiers binaires non plus — vous n'allez pas transformer un `.zip` en bouillie par mégarde. Reste exactement le danger : un `.json`, `.css` ou `.log` que **Détecter toutes les extensions de fichiers** a rendu visible.

Le rouge l'emporte là où les deux s'appliqueraient ; deux anneaux à la fois ne seraient que du bruit.

## Mode déplacer/renommer

Le bouton crayon à l'extrême droite de l'en-tête — à côté du bouton de mode d'affichage, à la taille des boutons natifs — bascule le mode déplacer/renommer. La ligne d'en-tête est alors encadrée de la couleur d'accentuation, exactement comme un renommage dans l'Explorateur de fichiers. Les mêmes clics et frappes valident désormais un déplacement ou un renommage via `fileManager.renameFile` d'Obsidian, de sorte que tous les liens vers la note suivent.

Pendant le renommage :

- Le nom de fichier actuel est épinglé dans le menu de chaque dossier : déplacer une note sans la renommer tient donc en un clic.
- Les noms déjà pris dans le dossier de destination sont grisés mais restent sélectionnables.
- La saisie est validée en direct selon les règles de renommage d'Obsidian — mêmes jeux de caractères, mêmes messages, même infobulle rouge que lors d'un renommage dans l'arborescence — de sorte qu'un nom illégal ou en conflit est signalé à la frappe et ne peut pas être validé.
- Un clic hors de la barre d'en-tête met fin au mode renommage.

## Une touche pour les deux renommages

La commande de renommage (<kbd>F2</kbd> par défaut, ou ce à quoi vous l'avez réattribuée) **alterne** entre le renommage du titre en ligne d'Obsidian et la barre de chemin de ce plugin, chemin complet sélectionné. Si vous avez désactivé le titre en ligne d'Obsidian, la barre de chemin devient la seule cible, de sorte que la touche ne reste jamais sans effet.

Cela fonctionne en enveloppant la commande `workspace:edit-file-title` plutôt qu'en interceptant la touche : réattribuer le raccourci et lancer la commande depuis la palette fonctionnent donc sans changement.

## Comment les entrées du menu sont teintées

| Couleur | Signifie |
| --- | --- |
| **Violet** | Une note (`.md`, `.markdown`) — ce qu'Obsidian ouvrira comme une note, distingué au sein d'un dossier au contenu mêlé |
| **Orange** | Un type texte pour lequel Obsidian n'a pas de vue ; voir [les couleurs d'avertissement](#les-deux-couleurs-davertissement) |
| **Atténué** | Hors de votre coffre : le traitement propre au coffre ne s'applique donc pas |
| **Bleu** | La note où vous êtes. En navigation, c'est sa propre entrée ; en mode renommer/déplacer, l'entrée *conserver ce nom* prend sa place — la même note dans les deux cas |
| **Grisé** | Mode renommer/déplacer uniquement : le nom est pris. Toujours sélectionnable — le choisir remplit le champ, où la validation signale le conflit |

## Règles de visibilité

- Les fichiers aux extensions non prises en charge n'apparaissent dans les menus que si le paramètre **Détecter toutes les extensions de fichiers** d'Obsidian est activé.
- Le menu affiche au plus 100 entrées — la limite d'Obsidian lui-même. Quand un dossier en contient davantage, la dernière ligne indique combien ont été omises ; continuez à taper pour restreindre la liste.
- Les fichiers et dossiers cachés n'apparaissent que si le paramètre **Afficher les fichiers cachés** de ce plugin est activé.
- **La protection contre l'écrasement fonctionne indépendamment de la visibilité** — un fichier caché vous empêche toujours de l'écraser.

## Aide-mémoire

| Vous voulez… | Faites ceci |
| --- | --- |
| Ouvrir un dossier (sa note, ou le révéler) | Cliquez sur le séparateur **après** ce dossier |
| Remplacer un dossier par un voisin | Cliquez sur le nom de ce dossier, puis tapez ou choisissez |
| Renommer ou réorienter la note | Cliquez sur le nom de la note — extension comprise |
| Parcourir le contenu d'un dossier | Cliquez sur le nom de ce dossier ; le menu liste son parent, cliquez donc sur le dossier **situé en dessous** de celui que vous visez |
| Retaper un dossier et tout ce qui suit | **Double-cliquez** sur le nom de ce dossier, puis tapez |
| Modifier le chemin à partir d'un dossier | Cliquez sur le nom de ce dossier, puis <kbd>Fin</kbd> ou <kbd>→</kbd> pour désélectionner |
| Rejoindre un fichier en tapant son chemin | Cliquez sur le nom de fichier ou l'espace vide, tapez, <kbd>Entrée</kbd> |
| Ouvrir plutôt un fichier dans un nouvel onglet | <kbd>Ctrl</kbd> en le choisissant, ou <kbd>Ctrl</kbd>+<kbd>Entrée</kbd> |
| Copier la note au lieu de la déplacer | Crayon, puis <kbd>Ctrl</kbd> en choisissant ou en validant la destination |
| Créer une note à un chemin inexistant | Tapez le chemin, <kbd>Entrée</kbd>, confirmez l'invite |
| Descendre d'un niveau pendant la saisie | Tapez `/` |
| Remonter d'un niveau pendant la saisie | <kbd>Retour arrière</kbd> dans le champ vide |
| Déplacer ou renommer la note ouverte | Cliquez sur le crayon, puis naviguez ou tapez comme ci-dessus |
| Déplacer sans renommer | Crayon → cliquez jusque dans le dossier cible → choisissez le nom de fichier actuel épinglé |
| Renommer sur place | <kbd>F2</kbd> deux fois (la première va au titre en ligne, la seconde à l'en-tête) |
| Rejoindre un autre coffre, le dossier personnel ou un disque | Cliquez sur le nom du coffre |
| Ouvrir un fichier extérieur au coffre | Nom du coffre → choisir un emplacement → naviguer → choisir le fichier (lecture seule jusqu'à *Modifier en texte*) |
| Tout annuler | <kbd>Échap</kbd>, ou un clic hors de la barre d'en-tête |

## Paramètres

| Paramètre | Options | Défaut | Ce qu'il fait |
| --- | --- | --- | --- |
| **Alignement** | Gauche / Centré / Droite | Gauche | Où le fil d'Ariane se place dans la ligne d'en-tête. *Centré* correspond à l'aspect classique d'Obsidian. |
| **Séparateur** | N'importe quel caractère | `/` | Le séparateur dessiné entre les segments. Six préréglages en un clic (`/ > ▸ › \ •`) précèdent le champ de texte. |
| **Afficher le nom du coffre** | Activé / Désactivé | Activé | Si le coffre lui-même constitue le premier segment du fil d'Ariane. Désactivé, ce segment devient une icône 🏠 au lieu de disparaître, afin que le chemin commence toujours par quelque chose de cliquable. |
| **Le nom du dossier ouvre le menu** | Activé / Désactivé | Activé | Échange ce que font un nom de dossier et le séparateur qui le suit — voir [le tableau plus haut](#le-fil-dariane). Avec [Folder notes](obsidian://show-plugin?id=folder-notes), le séparateur ouvre les notes de dossier. Jamais en mode renommer/déplacer. |
| **Afficher les fichiers cachés** | Activé / Désactivé | Désactivé | Si les fichiers et dossiers cachés sont listés dans les menus. La protection contre l'écrasement s'applique dans les deux cas. |
| **Accès aux fichiers externes** | Activé / Désactivé | **Désactivé** | Si le nom du coffre ouvre le menu des emplacements. Désactivé, rien dans le plugin ne regarde jamais au-delà de ce coffre. |

## Remplacer les icônes

Lure dessine trois icônes : celle de la racine du coffre (quand **Afficher le nom du coffre** est désactivé), le bouton de bascule renommer/déplacer, et le cadenas qui contrôle l'écriture hors du coffre. Toutes peuvent être remplacées depuis un thème ou un extrait CSS — définissez le glyphe de remplacement et masquez celui fourni dans une seule règle :

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* Le cadenas a deux états ; `.is-active` est l'état ouvert. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}

.lure-unlock-btn.is-active {
	--lure-icon-glyph: "🔓";
}
```

`--lure-icon-glyph` accepte tout ce qui est valide dans la propriété CSS `content` : `url(...)` fonctionne donc pour une image aussi bien qu'un glyphe texte ou emoji. Laissez `--lure-icon-svg` tel quel pour conserver l'icône Lucide et dessiner votre glyphe à côté.
