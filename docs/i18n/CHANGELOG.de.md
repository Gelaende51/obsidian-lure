<!-- Übersetzung von CHANGELOG.md — Stand: Commit 2cbb237.
     Maschinell übersetzt (Claude Opus 5) und nicht von Muttersprachlern
     geprüft. Korrekturen sind willkommen; das englische CHANGELOG ist die
     maßgebliche Fassung. -->

[English](../../CHANGELOG.md) · [العربية](CHANGELOG.ar.md) · [አማርኛ](CHANGELOG.am.md) · [Беларуская](CHANGELOG.be.md) · [বাংলা](CHANGELOG.bn.md) · [Català](CHANGELOG.ca.md) · [Čeština](CHANGELOG.cs.md) · [Dansk](CHANGELOG.da.md) · **Deutsch** · [Ελληνικά](CHANGELOG.el.md) · [Español](CHANGELOG.es.md) · [فارسی](CHANGELOG.fa.md) · [Suomi](CHANGELOG.fi.md) · [Français](CHANGELOG.fr.md) · [Gaeilge](CHANGELOG.ga.md) · [עברית](CHANGELOG.he.md) · [Magyar](CHANGELOG.hu.md) · [Bahasa Indonesia](CHANGELOG.id.md) · [Italiano](CHANGELOG.it.md) · [日本語](CHANGELOG.ja.md) · [ქართული](CHANGELOG.ka.md) · [ភាសាខ្មែរ](CHANGELOG.kh.md) · [한국어](CHANGELOG.ko.md) · [Latviešu](CHANGELOG.lv.md) · [Bahasa Melayu](CHANGELOG.ms.md) · [नेपाली](CHANGELOG.ne.md) · [Nederlands](CHANGELOG.nl.md) · [Norsk](CHANGELOG.no.md) · [Polski](CHANGELOG.pl.md) · [Português](CHANGELOG.pt.md) · [Português (Brasil)](CHANGELOG.pt-BR.md) · [Română](CHANGELOG.ro.md) · [Русский](CHANGELOG.ru.md) · [संस्कृतम्](CHANGELOG.sa.md) · [Slovenčina](CHANGELOG.sk.md) · [Shqip](CHANGELOG.sq.md) · [Српски](CHANGELOG.sr.md) · [Svenska](CHANGELOG.sv.md) · [ไทย](CHANGELOG.th.md) · [Türkçe](CHANGELOG.tr.md) · [Українська](CHANGELOG.uk.md) · [Oʻzbekcha](CHANGELOG.uz.md) · [Tiếng Việt](CHANGELOG.vi.md) · [简体中文](CHANGELOG.zh.md) · [繁體中文](CHANGELOG.zh-TW.md)

# Änderungsprotokoll

Jede Veröffentlichung von Lure, die neueste zuerst. Was seit der letzten Veröffentlichung dazugekommen ist, steht unter *Unveröffentlicht*. Versionen tragen kein `v` davor, passend zu den Release-Tags.

## Unveröffentlicht

### Hinzugefügt

- **Ein bereits vergebener Name fragt nach, statt abzulehnen.** Wird beim Verschieben oder Umbenennen ein Name gewählt, der schon vorhanden ist, öffnet sich ein Dialog mit zwei bearbeitbaren Pfaden: wohin deine Datei geht, und wohin die Datei im Weg geht, rot, solange sie noch vergeben ist. Jeder Pfad wird zudem so gezeichnet, wie die Pfadleiste einen zeichnet, mit den abweichenden Teilen farbig hervorgehoben und zuletzt gekürzt. Beide Felder haben eine Liste; die zweite enthält die üblichen Auswege — Plätze tauschen (sie wandert in den alten Ordner deiner Datei), Namen tauschen (sie bleibt und übernimmt den alten Namen deiner Datei), beide tauschen (sie übernimmt den alten Pfad deiner Datei), `-1`, `-bak` und `-old` neben ihrem eigenen Namen, und die beiden Namen, die die Dateien hatten. Ein Ausweg, dessen Pfad vergeben ist, ist grau. Einen Ausweg auszuwählen füllt nur das Feld; Anwenden verschiebt beide, samt Links, und Abbrechen verschiebt nichts. Wählst du im Dropdown einen bereits vergebenen Namen, wird ebenso gefragt, und ebenso, wenn du eine Datei auf einen Ordner ziehst, der ihren Namen bereits enthält.
- **`:graph` innerhalb eines Ordners öffnet den Graphen dieses Ordners** — den Graphen, gefiltert nach `path:"that/folder"`, so wie es das eigene Suchfeld täte. In der Vault-Wurzel bleibt es wie zuvor der gesamte Graph.
- **Ein Ordner, der den Namen bereits enthält, ist rot** im Dropdown während des Verschiebens, und ebenso eine Datei mit diesem Namen, sodass die Kollision schon vor der Auswahl sichtbar ist.

### Geändert

- **Das Angebot ist stets das, was Tab schreiben würde.** Sobald die Namen nicht mehr übereinstimmen, bietet das Feld den Schritt zum ersten von ihnen an, und die Zeile, zu der Tab führen würde, entscheidet darüber; das Überschreiben eines Namens lässt dessen Erweiterung stehen und bietet sie davor an; ein Ordner, in den man gerade gewechselt ist, bietet seinen ersten Schritt an. Vorher gab es Zustände, in denen nichts angeboten wurde und Tab trotzdem etwas schrieb. Die Unterstreichung im Dropdown folgt dem Angebot, während es sich ändert, und Tab auf einer Zeile, die du mit den Pfeiltasten angesteuert hast, übernimmt diese Zeile statt der danebenliegenden.
- **Angebote ignorieren Groß-/Kleinschreibung.** Tippst du `sch`, wird `Schemes` angeboten, geschrieben wie der Name selbst; nimmst du das Angebot zurück, bekommst du deine Buchstaben so zurück, wie du sie getippt hast. Existieren sowohl `Test` als auch `test`, wird das angeboten, das so geschrieben ist, wie du getippt hast.
- **Nach einem Tab-Druck wird der nächste Schritt sofort angeboten**, genau wie nach einem getippten Buchstaben.
- **Namen, die mit dem Getippten beginnen, stehen im Dropdown zuerst**, markiert mit einer Linie am Rand — blau, wo sie mehr gemeinsam haben als du getippt hast, grün auf dem Zweig, den das Angebot nimmt, sobald sie sich trennen — vor den Namen, die es nur enthalten. Jeder von ihnen unterstreicht den Schritt, den <kbd>Tab</kbd> zu ihm hin machen würde, nicht nur den, der angeboten wird.
- **Das Dropdown folgt dem Cursor**, oder dem Anfang einer Auswahl: Es listet den Ordner, in dem sich dieser Punkt befindet, gefiltert nach den Buchstaben davor. Am Anfang eines Namens ist das der ganze Ordner.
- **Zeigst du auf eine Zeile, wird sie als Angebot angezeigt** — was du getippt hast, bleibt deins, und der Rest des Namens wird markiert — und nimmst du den Zeiger von der Liste, kehrt das Angebot zurück.
- **→ übernimmt einen Buchstaben des Angebots**, statt es ganz zu übernehmen; <kbd>Ende</kbd> übernimmt es weiterhin ganz.
- **Rücktaste vor einer allein stehenden Erweiterung wechselt eine Ordnerebene nach oben**, so wie sie es in einem leeren Feld tut; die einzeln stehende Erweiterung verschwindet dabei.
- **F2 verwandelt ein offenes Feld an Ort und Stelle in ein Umbenennen**, unter Beibehaltung von Text, Cursor und Auswahl, und **Pfadleiste fokussieren** nimmt das Umbenennen auf demselben Weg wieder zurück.
- **Alles andere, was zwischen den Tastendrücken gedrückt oder geklickt wird, beginnt den Zyklus von F2 und Pfadleiste fokussieren neu.**
- **Ordner erscheinen im Dropdown fett**, sodass die Notiz eines Ordners nicht mehr grau sein muss, um sich abzuheben: Sie ist nun violett wie jede andere Notiz.
- **Das Dropdown ist nie breiter als die Pfadleiste.** Ein Name, der nicht hineinpasst, wird so gekürzt, wie die Pfadleiste selbst einen Namen kürzt, und beim Zeigen ganz angezeigt.
- **Bild-auf/Bild-ab scrollen das Dropdown um das, was es zeigt**, auch vom Feld aus, und die ausgewählte Zeile behält ihren Platz auf dem Bildschirm. <kbd>Pos1</kbd> und <kbd>Ende</kbd> holen die erste und letzte Zeile ins Blickfeld.
- **Das Dropdown zeigt bis zu 1.000 Einträge**, bevor es den Rest zählt, statt 100.
- **Ordner weichen der Länge nach, der längste zuerst.** Reicht der Platz nicht, kürzt sich zunächst der längste Ordnername auf die Länge des nächstlängeren, dann beide gemeinsam, und so weiter, jeder bis zu seiner Untergrenze. Vorher kürzten sich alle Ordner gleichzeitig proportional zu ihrer Länge.
- **Gekürzte Namen gleiten, statt zu springen.** Ein Name, der weicht, wird pixelgenau abgeschnitten und verblasst unter seinem `…`, sodass sich nichts danach in der Zeile schrittweise bewegt, während ein Bereich in der Größe verändert wird.

### Behoben

- In einem rechten Bereich öffnete sich das Dropdown unterhalb des linken Bereichs, bis der erste Buchstabe getippt wurde.
- Nahm man den Zeiger vom Dropdown, kehrte das Angebot zurück, aber nicht seine Farbe.
- Ein Leerzeichen an der Stelle, an der ein gekürzter Name geteilt wurde — `development guidelines` — ging verloren, wodurch die beiden Wörter zusammenliefen.

## 1.4.0 — 2026-09-19[^1.4.0]

### Hinzugefügt

- **Eine Tastenkombinationen-Zeile in den Einstellungen.** Ihre Schaltfläche öffnet Obsidians *Tastenkombinationen*, gefiltert auf dieses Plugin, wo *Pfadleiste fokussieren* — das ohne eigene Taste ausgeliefert wird — eine erhalten kann.
- **Eine Pfadleiste auf Panes ohne Datei.** Ein leerer Tab liest sich als `vault / :blank`, der Graph als `vault / :graph`, und jede andere Ansicht ohne etwas zu benennen bekommt ihr eigenes `:`-Label — der Tab eines Startseiten-Plugins liest sich als `:home-launcher`. Das Feld daneben ist eine Adressleiste: Pfad eingeben, und <kbd>Enter</kbd> öffnet ihn in diesem Pane oder legt ihn an. Zuvor war die Zeile leer — das Plugin verbarg Obsidians eigenen Titel und setzte nichts an seine Stelle.
- **Eine Seite lässt sich ebenso tippen wie auswählen** — `:graph` und die anderen sind eine Adresse, nicht nur ein Listeneintrag. Kein Dateiname beginnt mit einem Doppelpunkt, also ruft ein Doppelpunkt sie überall herbei, wo du ihn tippst, und das Feld trägt ihre Farbe, statt anzubieten, eine Notiz anzulegen, die ohnehin keinen Namen tragen könnte.
- **Eine Zeile für Obsidians eigenes *Alle Dateitypen anzeigen***, neben der Punktdatei-Regel, da beide bestimmen, was ein Dropdown auflisten darf: Sie verweist darauf, diese Einstellung in Obsidians eigenen Einstellungen zu suchen und einzuschalten, um jede Datei zu sehen, und die Schaltfläche daneben öffnet diese Seite mit der Einstellung ins Bild gescrollt und aufblitzend, wie es ein Einstellungen-Suchergebnis täte. Benannt in Obsidians eigenen Worten, erklärt in 45 Sprachen.
- **Die Vault-Wurzel listet die Seiten, die ein Pane halten kann** — `:graph`, `:search` und was auch immer deine Plugins registrieren, darunter ein Home-Tab oder ein Kalender. Wähle eine aus, und das Pane öffnet sie, so wie das Wählen einer Notiz die Notiz öffnet. Ansichten, die dazu da sind, eine Datei zu zeigen, bleiben außen vor, weil es für sie nichts zu zeigen gäbe.
- **Das eigene Trennzeichen des Vaults öffnet deine Startseite**, sofern ein Plugin eine bereitstellt, und ist dafür unterstrichen; der Druck danach klappt den Dateibaum weg, und der Druck danach stellt genau das wieder her, was offen war. Ohne ein solches Plugin klappt der erste Druck wie zuvor weg.
- **Tippe einen Pfad ab der Systemwurzel.** Ein `/` am Anfang eines leeren Feldes öffnet eine, statt verschluckt zu werden, jeder weitere Schrägstrich darin gehört dazu, und das Dropdown listet die Maschine statt den Vault.

### Geändert

- **F2 und Pfadleiste fokussieren drücken innerhalb des Feldes Tab.** Was auch immer Tab dort täte — die nächste Stufe, das Vervollständigen des Getippten, das Hineingehen in einen Ordner — tun sie auch; nur dort, wo Tab an den Anfang des Pfads zurückspringt, verlassen sie das Feld, F2 zum Inline-Titel, der Befehl zur Notiz. Zuvor ließ ein Feld, in das du getippt hattest, F2 beim Namen neu beginnen und den Befehl das Feld schließen.
- **Der Schritt, nachdem der Zyklus verlässt, ist der Wurzelordner.** Der Druck nach F2s Rückkehr zum Inline-Titel oder der Rückkehr des Befehls zur Notiz landet dort, wo auch Tabs Runde landet — die Vault-Wurzel, der ganze Pfad im Feld, sein erster Ordner markiert — sodass kein Schritt des Rings allein Tab überlassen bleibt.
- **Pfadleiste fokussieren läuft wie F2.** Es öffnet auf dem Namen statt dem ganzen Pfad, durchläuft dieselben vier Stufen, und der Druck nach der letzten schließt das Feld und setzt den Cursor zurück in die Notiz — zuvor drehte es endlos seine Runden durch die Stufen, und die einzige Taste, die die Zeile erreichte, konnte sie nicht verlassen.
- **Ein vergebener Name wird gemeldet, wenn du ihn verwendest, nicht während du ihn tippst.** Jeder Name, der auf `Notes.md` zutippt, durchläuft dabei Namen, die selbst Dateien sein können, und die Warnung blitzte früher Buchstabe für Buchstabe auf und wieder weg. Was an der Schreibweise eines Namens falsch ist, wird weiterhin so gesagt, wie er geschrieben ist.
- **Ein Trennzeichen, dessen Ordnernotiz bereits offen ist, deckt den Ordner auf**, statt das erneut zu öffnen, was schon auf dem Bildschirm steht — was sein zweiter Druck schon immer bedeutet hat.
- **Wo du dich befindest, ist im Dropdown fett**, nicht nur blau.
- **Alles, was keine Notiz ist, ist im Dropdown orange**, nicht nur die Textarten, für die Obsidian keine Ansicht hat. Das Lila hebt die Notizen aus einem Ordner mit gemischtem Inhalt hervor; eine Farbe für den Rest sagt dasselbe schneller.

### Behoben

- **Backspace über einen angeklickten Ordner nimmt dem Vault nicht mehr seinen Namen.** Der am Anfang verbliebene Schrägstrich las sich als Pfad ab der Wurzel der Maschine, was das erste Segment leerte — und das Schließen des Feldes mit Escape stellte es nie wieder her, sodass der Tab seinen Vault-Namen und sein Symbol für immer verlor. Ein führender Schrägstrich zählt jetzt nur dann als der der Maschine, wenn sein erster Ordner wirklich da ist, und das erste Segment kehrt bei jedem Weg aus dem Feld zurück.
- Außerhalb des Vaults waren Dateien verborgen, sofern Obsidians **Alle Dateiendungen erkennen** nicht eingeschaltet war — eine Einstellung darüber, was der Vault indiziert, angewandt auf Ordner, die nicht im Vault liegen. Eine `.txt` neben deinen Notizen wird dort draußen so oder so aufgeführt.
- Das Dropdown des Vault-Namens tat nichts auf einem Pane ohne Datei — genau dem Pane, das du benutzen würdest, um woanders hinzugehen.
- Ein Klick auf den Vault-Namen ließ Obsidians eigenen Titel grau neben dem Pfad im Feld stehen, wo er sonst nie erscheint: Die Zeile bemisst sich an dem, was sie gezeichnet hat, und in diesem Moment hat sie sich selbst geleert, um dem Feld Platz zu machen.

- Ein Klick auf die leere Fläche öffnete das Feld und verlor es gleich wieder: Das Anzeigen der Notiz im Dateiexplorer nimmt den Cursor mit sich, sodass das Feld offen und markiert stehen blieb, während jeder Tastendruck an den Baum ging.
- Die Stufe, die den Pfad ab der Systemwurzel zeigt, zeichnete eine Spur desselben Pfads neben dem Feld, ungekürzt, sodass ein tiefer Pfad sich selbst überdeckte.

## 1.3.0 — 2026-09-17[^1.3.0]

### Hinzugefügt

- **Hol eine Datei von außen in den Vault.** Verschiebe oder kopiere eine Datei von irgendwo auf der Festplatte an einen Pfad in deinem Vault; sie kommt dort als echte Notiz an, und beim Verschieben wird das Original erst entfernt, wenn die Kopie geglückt ist.
- **Lass Text oder eine Datei auf die Zeile fallen, um sie festzuhalten.** Auf einen Ordner: eine neue Notiz in diesem Ordner, benannt nach dem, was du tippst. Auf den Namen der Notiz oder auf das Trennzeichen eines Ordners, der eine Ordnernotiz hat: ans Ende dieser Notiz angefügt, nach einer Bestätigung.
- **Lege eine Ordnernotiz an** mit einem zweiten Druck auf das, was den Ordner öffnet — sofern ein Ordnernotiz-Plugin läuft und der Ordner noch keine hat. Sie wird dort abgelegt, wo es die eigenen Einstellungen von [Folder notes](https://github.com/LostPaul/obsidian-folder-notes) vorgeben.
- **Zieh einen Ordner aus der Pfadleiste auf die Tableiste**, um ihn dort zu öffnen: seine Ordnernotiz, sofern er eine hat, sonst ein Tab, der in diesem Ordner steht.
- **Das Mausrad läuft durch das Dropdown.** Über einem Namen öffnet die erste Drehung dessen Liste, und jede weitere schiebt die Hervorhebung eine Zeile weiter. Eine Zeile, die seitwärts scrollt, behält das Rad zum Scrollen.
- **Fahr mit dem Pfeil über den Anfang des Feldes hinaus**, um den Ordner davor hereinzuholen: <kbd>←</kbd> für einen Ordner, <kbd>Umschalt</kbd>+<kbd>Pos1</kbd> (oder <kbd>Pos1</kbd> bei geschlossenem Dropdown) für alle.
- **Das Feld trägt die Farbe dessen, was es benennt**, dieselbe wie seine Zeile im Dropdown, und wird rot, sobald nichts mehr darauf passt — in dem Moment, in dem <kbd>Enter</kbd> etwas anlegen statt öffnen würde.
- **Ordnernotizen sind im Dropdown grau**, damit sie sich als die Notiz ihres Ordners lesen und nicht als eine weitere Notiz.
- **Mittelklick auf ein Trennzeichen** öffnet diesen Ordner in einem neuen Tab: seine Ordnernotiz oder einen Tab, der darin steht.

### Geändert

- **Das Schloss und der Umbenennen-Schalter sind ein Bedienelement.** Außerhalb des Vaults nimmt ein rotes, geschlossenes Schloss den Platz des Schalters ein; öffnet man es, überlässt es den Platz dem Schalter, und das Verlassen des Umbenennen-Modus schließt es wieder.
- **Die Umbenennen-Taste fragt auch beim Schloss an.** Außerhalb des Vaults lässt ein Druck das Schloss aufblinken; ein zweiter Druck innerhalb einer halben Sekunde erteilt, was das Schloss erteilt, und öffnet den Umbenennen-Modus.
- **Die Umbenennen-Taste durchläuft eine volle Runde** — Inline-Titel, Name, Name mit Endung, Pfad ab dem Vault, Pfad ab der Systemwurzel — und der nächste Druck ist wieder der Inline-Titel.
- **<kbd>Strg</kbd>-Klick und Mittelklick sind nicht mehr dasselbe.** Der eine öffnet einen Tab und wechselt dorthin, der andere öffnet ihn im Hintergrund.
- **Ein Rechtsklick auf den Namen der Notiz öffnet das Menü der Datei selbst.**
- **Das Dropdown ist so hoch, wie das Fenster es zulässt**, statt Obsidians fester 300 Pixel.
- **Ein Klick auf einen Ordner bei offenem Feld behält den ganzen Pfad dahinter**, und ein Klick in einen Ordner innerhalb des Feldes listet dessen Inhalt vollständig auf.
- **Das Trennzeichen öffnet eine Ordnernotiz in jeder Tiefe**, solange Folder notes läuft, und ist überall dort unterstrichen, wo es eine gibt. Zuvor funktionierten nur Ordner der obersten Ebene. Bei den anderen Ordnernotiz-Plugins zeigt das Trennzeichen weiterhin den Ordner an.

### Behoben

- **Ein offenes Feld überlebte seine Datei.** Wechselte man bei offener Pfadleiste zu einer anderen Notiz, benannte die Zeile für den Rest der Sitzung weiter die alte Datei.
- **Löschen, Umbenennen und Kopie erstellen wurden außerhalb des Vaults abgelehnt**, obwohl das Schloss offen war, und waren für Bilder, PDFs und Seiten nie erreichbar.
- **<kbd>Strg</kbd>+<kbd>Enter</kbd> tat nichts, solange das Dropdown offen war** — und so öffnet sich jedes Feld.
- **<kbd>Enter</kbd> bei offenem Dropdown, aber ohne Hervorhebung** tat nichts; jetzt bestätigt es das Getippte.
- **Eine Zeile, die überlief, obwohl schon jeder Name auf seiner kürzesten Form stand, ließ sich nicht scrollen**, sodass das Ende des Pfads unerreichbar blieb.
- **Beim Deaktivieren des Plugins blieb eine tote Schaltfläche** in der Kopfzeile jeder Notiz zurück, die es angepasst hatte.

## 1.2.0 — 2026-08-25[^1.2.0]

### Hinzugefügt

- **Spracheinstellung.** Lure folgt standardmäßig der Sprache von Obsidian und lässt sich auf jede seiner eigenen einstellen. Nur so sind auch die griechische und die sanskritische Übersetzung erreichbar, die Obsidian selbst nicht anbietet. Die Beschriftung der Einstellung bleibt englisch, damit sie sich immer wiederfinden lässt, auch aus einer Sprache heraus, die du nicht lesen kannst.

## 1.1.2 — 2026-08-25[^1.1.2]

### Geändert

- **Schlankeres Stylesheet.** Die Zeile verwendet keine `:has()`-Selektoren und die meisten `!important`-Regeln nicht mehr. Sie passt sich mit weniger Aufwand neu ein, und die Warnungen der Plugin-Prüfung sanken von 56 auf 7.

## 1.1.1 — 2026-08-22[^1.1.1]

### Behoben

- **Ein kurzer Ordnername konnte mit einer Lücke darin gezeichnet werden** — `atlas` als `atl as` —, weil der für seine gekürzte Form reservierte Platz breiter war als der Name selbst.

## 1.1.0 — 2026-08-22[^1.1.0]

### Hinzugefügt

- **Rechtsklick-Vokabular.** Ein Druck öffnet ein Menü; zwei und drei Drücke kopieren immer mehr — den Namen, den Namen mit seiner Endung, den Pfad. Die Menüs der Zeile entsprechen jetzt denen des Dateiexplorers, Eintrag für Eintrag.
- **Menüs außerhalb des Vaults.** Dropdown-Zeilen und der externe Betrachter bieten das Öffnen, *Pfad kopieren* und *Im Ordner anzeigen* an; bei offenem Schloss außerdem *Neue Notiz*, *Neuer Ordner*, *Kopie erstellen*, *Umbenennen…* und *Löschen*. Löschen verschiebt in den Papierkorb des Systems und ist nie endgültig.
- **Anderswo öffnen.** <kbd>Strg</kbd>, <kbd>Strg</kbd>+<kbd>Alt</kbd>, <kbd>Strg</kbd>+<kbd>Alt</kbd>+<kbd>Umschalt</kbd> und Mittelklick auf den Namen der Notiz oder einen Ordner öffnen ihn in einem neuen Tab, einem geteilten Bereich oder einem Fenster. Beide lassen sich ziehen, wie ihre Zeilen im Dateiexplorer.
- **Zieh Notizen auf die Zeile, um sie zu verschieben.** Lass eine Notiz, mehrere Notizen oder einen Ordner auf ein Ordnersegment oder den Vault-Namen fallen.
- **Befehl: Pfadleiste fokussieren**, mit dem ganzen Pfad markiert — kein voreingestelltes Tastenkürzel, belege dein eigenes.
- **Gib eine URL** in die Pfadleiste ein: `http(s)://` und `obsidian://` öffnen sich als Links, `file://` und prozentkodierte Pfade öffnen die Datei.
- **Vervollständigung mit <kbd>Tab</kbd>**, so wie es eine Shell tut: Jeder Druck vervollständigt so weit, wie die Namen des Ordners übereinstimmen, und hält dort an, wo sie sich unterscheiden. <kbd>Umschalt</kbd>+<kbd>Tab</kbd> geht rückwärts. Bleibt nichts mehr zu vervollständigen, erweitert <kbd>Tab</kbd> stattdessen die Auswahl: Name, Name mit Endung, Pfad ab dem Vault, Pfad ab der Systemwurzel.
- **Das Dropdown öffnet dort, wo du stehst**, und zeigt das, worauf du zeigst, als Vorschau im Feld; verlässt du die Liste, bekommst du deinen Text zurück.
- **Verschieb eine Notiz aus dem Vault hinaus**, nach einer Bestätigung, die die Links zählt, die dabei zerbrechen. Sie wird hinauskopiert und dann in den Papierkorb gelegt, sodass sie sich wie jede gelöschte Notiz wiederherstellen lässt.
- **Einstellung Dateiendungen anzeigen**, und Pfade in Anführungszeichen (wie sie Windows' *Als Pfad kopieren* erzeugt) werden verstanden.
- **Einstellungen erscheinen in Obsidians Einstellungssuche**, ab Obsidian 1.13.

### Geändert

- **Lange Pfade passen in den Bereich.** Namen werden vom Entbehrlichsten her gekürzt — der Vault-Name, dann die Endung, dann die Ordner, der Name der Notiz zuletzt — nie über den Punkt hinaus, an dem sie sich noch unterscheiden lassen. Zeig auf einen gekürzten Namen, um ihn ganz zu lesen.
- **Ein Klick auf den Namen der Notiz markiert ihn ohne seine Endung**, sodass das Umbenennen nicht mehr Gefahr läuft, den Dateityp zu ändern.
- **Die Umbenennen-Taste öffnet auf dem Namen ohne seine Endung**, und weitere Drücke erweitern die Auswahl.
- **Ein Klick auf einen Ordner hält den Rest des Pfads sichtbar**, auch außerhalb des Vaults.
- **Blätterst du zurück in deinen Vault, öffnen sich Dateien als Notizen**, mit Links und Rückverweisen, statt im externen Betrachter.

### Behoben

- **Menübeschriftungen waren in jeder Sprache englisch**; sie stammen jetzt aus Obsidians eigenen Übersetzungen.
- **Die Umbenennen-Taste lief in Obsidians Umbenennen-Dialog in eine Sackgasse**, wenn die Notiz über ihren Titel hinaus gescrollt war.
- **<kbd>Esc</kbd> brauchte zwei Drücke**, um das Feld und sein Dropdown zu schließen.
- **<kbd>Strg</kbd>+<kbd>Enter</kbd> öffnete einen Link im Editor**, statt auf die Pfadleiste zu wirken.
- **Beim Umbenennen außerhalb des Vaults ging der getippte Name verloren**, wenn das Schloss gedrückt wurde.
- **Tab konnte sich ohne Fortschritt im Kreis drehen** bei einem Ordner, der neben seiner eigenen Ordnernotiz liegt.

## 1.0.4 — 2026-08-13[^1.0.4]

### Hinzugefügt

- **Die Notiz, in der du stehst, ist im Dropdown blau markiert**, sodass beim Zurückblättern in ihren Ordner zu sehen ist, wo du gestartet bist.

## 1.0.3 — 2026-08-13[^1.0.3]

### Dokumentation

- Das README verlinkt die Seite des Plugins im Community-Verzeichnis, und die übersetzten READMEs werden auf den aktuellen Stand gebracht.

## 1.0.2 — 2026-08-13[^1.0.2]

### Geändert

- **Setzt Obsidian 1.8.7 oder neuer voraus** (zuvor 1.4.0). Zwei Funktionen, auf die die Pfadleiste baut — das Kopieren von Dateien und der Fehler-Tooltip unter dem Feld —, brauchen es.
- **Release-Downloads tragen eine signierte Build-Herkunft**, sodass du mit `gh attestation verify` bestätigen kannst, dass `main.js` aus diesem Repository gebaut wurde.

### Behoben

- **Das Öffnen einer fehlenden externen Datei in der Standard-App schlug stillschweigend fehl**; der Fehlschlag wird jetzt gemeldet.

## 1.0.1 — 2026-08-13[^1.0.1]

### Behoben

- **Im Umbenennen-Modus stand eine Notiz mit sich selbst in Konflikt** — blätterte man zurück in ihren eigenen Ordner, verschwand ihr Name aus der Liste, als blockierte sie ihre eigene Umbenennung.
- **Das erste Anzeigen eines Ordners nach dem Start von Obsidian klappte nichts auf.**
- **Die Wahl eines Ordners aus dem Dropdown konnte den Umbenennen-Modus beenden**, statt in den Ordner hinabzusteigen.
- **Externe Änderungen konnten stillschweigend überschrieben werden**, von einem anderen Schreiber wie Sync oder einem zweiten Bereich. Schreibvorgänge sind jetzt atomar.
- **Das Zurücksetzen des Fokusrahmens wirkte in andere Ansichten hinein**; es gilt jetzt nur noch für Kopfzeilen, die Lure angepasst hat.

### Dokumentation

- Das README und die Anleitung liegen in allen 44 Sprachen vor, die das Plugin mitbringt.
- Die Anleitung nannte Obsidians Einstellung *Alle Dateierweiterungen erkennen* (*Detect all file extensions*), die jetzt *Alle Datei-Endungen erkennen* (*Show all file types*) heißt.

## 1.0.0 — 2026-08-10[^1.0.0]

Erste Veröffentlichung. Ersetzt den Dateinamen in der Kopfzeile einer Notiz durch eine anklickbare, bearbeitbare Pfadleiste seines Vault-Pfads — eine Adressleiste für deine Notizen, nach dem Vorbild von Dolphin.

### Hinzugefügt

- **Klick auf einen Ordner** für ein Dropdown mit dem Inhalt seines übergeordneten Ordners, um ihn gegen einen benachbarten zu tauschen und den Rest des Pfads unangetastet zu lassen.
- **Klick auf das Trennzeichen** hinter einem Ordner, um ihn im Dateiexplorer anzuzeigen und aufzuklappen — oder um seine Ordnernotiz zu öffnen, sofern Folder notes das übernimmt.
- **Klick auf den Dateinamen oder auf die freie Fläche**, um einen Pfad zu tippen, mit Autovervollständigung: `/` steigt hinab, <kbd>Rücktaste</kbd> geht eine Ebene hinaus, <kbd>Enter</kbd> bestätigt.
- **Der Verschieben-/Umbenennen-Modus** stellt dieselben Interaktionen auf Verschieben und Umbenennen um, geprüft so, wie Obsidian prüft.
- **<kbd>Strg</kbd> öffnet in einem neuen Tab** — oder kopiert die Notiz im Verschieben-/Umbenennen-Modus stattdessen dorthin.
- **<kbd>F2</kbd> wechselt** zwischen dem Inline-Titel und der Pfadleiste.
- **Außerhalb des Vaults** (standardmäßig aus): Der Vault-Name öffnet deine anderen Vaults, den Persönlichen Ordner, das Wurzelverzeichnis und eingehängte Laufwerke. Dort draußen wird nichts geschrieben, bevor du es freigibst, und eine Notiz kann nur aus dem Vault hinauskopiert, nie hinausverschoben werden.
- **45 Sprachen.**

[^1.4.0]: Änderungen seit 1.3.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.3.0...1.4.0>
[^1.3.0]: Änderungen seit 1.2.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.2.0...1.3.0>
[^1.2.0]: Änderungen seit 1.1.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.2...1.2.0>
[^1.1.2]: Änderungen seit 1.1.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.1...1.1.2>
[^1.1.1]: Änderungen seit 1.1.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.0...1.1.1>
[^1.1.0]: Änderungen seit 1.0.4: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.4...1.1.0>
[^1.0.4]: Änderungen seit 1.0.3: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.3...1.0.4>
[^1.0.3]: Änderungen seit 1.0.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.2...1.0.3>
[^1.0.2]: Änderungen seit 1.0.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.1...1.0.2>
[^1.0.1]: Änderungen seit 1.0.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.0...1.0.1>
[^1.0.0]: Die erste Veröffentlichung: <https://github.com/Gelaende51/obsidian-lure/releases/tag/1.0.0>
