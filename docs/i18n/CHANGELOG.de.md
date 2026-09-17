<!-- Übersetzung von CHANGELOG.md — Stand: Commit f133f41.
     Maschinell übersetzt (Claude Opus 5) und nicht von Muttersprachlern
     geprüft. Korrekturen sind willkommen; das englische CHANGELOG ist die
     maßgebliche Fassung. -->

[English](../../CHANGELOG.md) · [العربية](CHANGELOG.ar.md) · [አማርኛ](CHANGELOG.am.md) · [Беларуская](CHANGELOG.be.md) · [বাংলা](CHANGELOG.bn.md) · [Català](CHANGELOG.ca.md) · [Čeština](CHANGELOG.cs.md) · [Dansk](CHANGELOG.da.md) · **Deutsch** · [Ελληνικά](CHANGELOG.el.md) · [Español](CHANGELOG.es.md) · [فارسی](CHANGELOG.fa.md) · [Suomi](CHANGELOG.fi.md) · [Français](CHANGELOG.fr.md) · [Gaeilge](CHANGELOG.ga.md) · [עברית](CHANGELOG.he.md) · [Magyar](CHANGELOG.hu.md) · [Bahasa Indonesia](CHANGELOG.id.md) · [Italiano](CHANGELOG.it.md) · [日本語](CHANGELOG.ja.md) · [ქართული](CHANGELOG.ka.md) · [ភាសាខ្មែរ](CHANGELOG.kh.md) · [한국어](CHANGELOG.ko.md) · [Latviešu](CHANGELOG.lv.md) · [Bahasa Melayu](CHANGELOG.ms.md) · [नेपाली](CHANGELOG.ne.md) · [Nederlands](CHANGELOG.nl.md) · [Norsk](CHANGELOG.no.md) · [Polski](CHANGELOG.pl.md) · [Português](CHANGELOG.pt.md) · [Português (Brasil)](CHANGELOG.pt-BR.md) · [Română](CHANGELOG.ro.md) · [Русский](CHANGELOG.ru.md) · [संस्कृतम्](CHANGELOG.sa.md) · [Slovenčina](CHANGELOG.sk.md) · [Shqip](CHANGELOG.sq.md) · [Српски](CHANGELOG.sr.md) · [Svenska](CHANGELOG.sv.md) · [ไทย](CHANGELOG.th.md) · [Türkçe](CHANGELOG.tr.md) · [Українська](CHANGELOG.uk.md) · [Oʻzbekcha](CHANGELOG.uz.md) · [Tiếng Việt](CHANGELOG.vi.md) · [简体中文](CHANGELOG.zh.md) · [繁體中文](CHANGELOG.zh-TW.md)

# Änderungsprotokoll

Jede Veröffentlichung von Lure, die neueste zuerst. Was seit der letzten Veröffentlichung dazugekommen ist, steht unter *Unveröffentlicht*. Versionen tragen kein `v` davor, passend zu den Release-Tags.

## Unveröffentlicht[^unreleased]

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
- **Menüs außerhalb des Vaults.** Dropdown-Zeilen und der externe Betrachter bieten das Öffnen, *Pfad kopieren* und *Im Systemexplorer anzeigen* an; bei offenem Schloss außerdem *Neue Notiz*, *Neuer Ordner*, *Kopie erstellen*, *Umbenennen…* und *Löschen*. Löschen verschiebt in den Papierkorb des Systems und ist nie endgültig.
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
- Die Anleitung nannte Obsidians Einstellung *Alle Dateierweiterungen erkennen*, die jetzt *Alle Dateitypen anzeigen* heißt.

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

[^unreleased]: Änderungen seit 1.2.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.2.0...HEAD>
[^1.2.0]: Änderungen seit 1.1.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.2...1.2.0>
[^1.1.2]: Änderungen seit 1.1.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.1...1.1.2>
[^1.1.1]: Änderungen seit 1.1.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.0...1.1.1>
[^1.1.0]: Änderungen seit 1.0.4: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.4...1.1.0>
[^1.0.4]: Änderungen seit 1.0.3: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.3...1.0.4>
[^1.0.3]: Änderungen seit 1.0.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.2...1.0.3>
[^1.0.2]: Änderungen seit 1.0.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.1...1.0.2>
[^1.0.1]: Änderungen seit 1.0.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.0...1.0.1>
[^1.0.0]: Die erste Veröffentlichung: <https://github.com/Gelaende51/obsidian-lure/releases/tag/1.0.0>
