<!-- Übersetzung von docs/usage.md — Stand: Commit 7b2691a.
     Maschinell übersetzt (Claude Opus 5) und nicht von Muttersprachlern
     geprüft. Bezeichnungen aus dem Plugin selbst stammen aus
     src/lang/translations.ts; bei Obsidians eigenen Einstellungen steht der
     englische Name in Klammern, weil er hier nicht überprüft werden konnte. -->

**Diese Datei in anderen Sprachen lesen:** [English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · [Čeština](usage.cs.md) · [Dansk](usage.da.md) · **Deutsch** · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · [Bahasa Indonesia](usage.id.md) · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · [Norsk](usage.no.md) · [Polski](usage.pl.md) · [Português](usage.pt.md) · [Português (Brasil)](usage.pt-BR.md) · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

# Verwendung

[← zurück zum README](README.de.md)

## Die Pfadleiste

Der vollständige Vault-Pfad der Notiz ersetzt den bloßen Dateinamen in der Kopfzeile der Ansicht — der Leiste unterhalb der Tab-Zeile, in der auch die Vor-/Zurück-Schaltflächen sitzen.

Zwei Dinge in der Zeile sind anklickbar, und **Ordnername öffnet das Dropdown** entscheidet, was welche Rolle übernimmt:

| | Ordnername | Trennzeichen dahinter |
| --- | --- | --- |
| **Ein** (Standard) | Wählt diesen Ordner zum Bearbeiten aus | Öffnet den Ordner |
| **Aus** | Öffnet den Ordner | Steigt in diesen Ordner hinab |

„Öffnet den Ordner“ heißt: was ein Klick auf dieses Segment im unveränderten Obsidian tut. Hört dort kein Plugin mit, wird der Ordner im Dateiexplorer angezeigt — hervorgehoben und aufgeklappt, sodass sein Inhalt sichtbar ist.

Mit installiertem [Folder notes](obsidian://show-plugin?id=folder-notes) öffnet derselbe Klick stattdessen die Notiz dieses Ordners. Es ist das einzige gefundene Ordnernotiz-Plugin, das die Kopfzeile für sich beansprucht; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) und [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) verwalten Ordnernotizen, hören aber nicht auf einen Klick in der Pfadleiste — dort zeigt das Trennzeichen also wie gewohnt den Ordner. Siehe [Kompatibilität](../compatibility.md#verified-against).

Ein Trennzeichen ist **nur dann unterstrichen, wenn der Ordner davor tatsächlich eine Ordnernotiz hat**; die Unterstreichung ist also ein Versprechen, dass es dort etwas zu öffnen gibt. Anklickbar bleibt jedes Trennzeichen so oder so — eines ohne Unterstreichung zeigt seinen Ordner in der Seitenleiste und klappt ihn auf, was der Zeigerhand weiterhin anzusehen ist. Gleichzeitig wandert die Unterstreichung vom Ordnernamen weg: ist der Tausch eingeschaltet, öffnet der Name das Dropdown, und ihn als Verweis auf die Notiz zu markieren wäre gelogen.

**Der Umbenennen-/Verschieben-Modus setzt sich über beides hinweg**, ganz gleich, was die Einstellung sagt: solange ein Verschieben aussteht, öffnet nichts in der Zeile einen Ordner, denn ihn zu öffnen hieße, das Verschieben aufzugeben. Ordnernamen wählen zum Bearbeiten aus, Trennzeichen steigen hinab — beides sind Wege, das Ziel zu bestimmen — und die Unterstreichung verschwindet, um zu zeigen, dass das Öffnen ausgesetzt ist.

Das **Vault-Stammverzeichnis** ist das eine Segment, das kein Pfadsegment ist. Es hat keinen übergeordneten Ordner, aus dem sich Nachbarn auflisten ließen, und öffnet deshalb das [Orte-Dropdown](#außerhalb-des-vaults-browsen) — deine anderen Vaults, den Persönlichen Ordner, das Wurzelverzeichnis und eingehängte Laufwerke.

## Ein Segment anklicken: gegen einen Nachbarn tauschen

Ein Klick auf einen Ordnernamen wählt **den Namen dieses Ordners** in einem Textfeld aus und öffnet ein Dropdown des Ordners **eine Ebene darüber** — seines übergeordneten. Tippen oder Auswählen tauscht diesen Ordner gegen einen Nachbarn und lässt alles darunter unangetastet: `Projekte/2026/Auftakt.md` → Klick auf `2026` → `2025` wählen ergibt `Projekte/2025/Auftakt.md`.

Ein Klick auf den **Namen der Notiz** funktioniert genauso gegen ihren eigenen Ordner und wählt den Dateinamen **einschließlich der Endung** aus — beim Umbenennen oder Umlenken einer Notiz ändert sich meist auch die.

Der Klick auf den Ordner hat bereits ein Segment ausgewählt, deshalb weitet **ein weiterer Klick** die Auswahl auf die ganze Zeile aus — diesen Ordner *und* alles darunter — und Tippen ersetzt dann den restlichen Pfad in einem Zug. Funktioniert in der Navigation wie im Umbenennen-/Verschieben-Modus gleich.

Das gilt nur als Fortsetzung des Klicks, der das Feld geöffnet hat. Sobald du das Feld benutzt hast, verhält es sich wie jedes andere Textfeld: Klick setzt die Einfügemarke, Doppelklick nimmt ein Wort, Dreifachklick die Zeile.

So oder so bleibt der Rest des Pfads rings um das Feld sichtbar — als Chips davor und als nicht ausgewählter Text dahinter —, sodass der vollständige Pfad nie aus der Kopfzeile verschwindet. Tippe, um die Auswahl zu ersetzen, oder drücke <kbd>Ende</kbd> / <kbd>→</kbd>, um sie zu behalten und von dort aus weiterzuschreiben. Das Dropdown listet den ganzen Ordner, unabhängig davon, was vorausgefüllt ist; gefiltert wird erst, sobald du wirklich tippst.

## Über das Trennzeichen absteigen

Ein Klick auf ein Trennzeichen (bei ausgeschaltetem **Ordnername öffnet das Dropdown**) steigt in den Ordner davor hinab: das Dropdown listet den Inhalt *dieses* Ordners, und der Rest des Pfads öffnet sich ausgewählt im Eingabefeld. Wählst du einen Ordner, hängt er sich an die Pfadleiste an und das nächste Dropdown öffnet sich sofort — du kannst dich also durch einen Baum klicken, ohne die Kopfzeile zu verlassen.

## Dropdown-Einträge sind echte Dateimanager-Zeilen

Jede Datei und jeder Ordner im Dropdown verhält sich wie die entsprechende Zeile im Dateiexplorer:

- **Rechtsklick** für dasselbe Kontextmenü — *Neue Notiz* / *Neuer Ordner* bei einem Ordner, *In neuem Tab öffnen* / *Umbenennen…* / *Löschen* bei einer Datei — einschließlich der Einträge, die andere Plugins zu Dateimenüs beisteuern.
- **Ziehen** eines Eintrags überallhin, wo Obsidian eine Datei annimmt: in einen Editor, um einen Link einzufügen; auf einen Ordner im Dateiexplorer, um sie zu verschieben; auf die Tab-Leiste, um sie zu öffnen.

Die Menütexte stammen aus Obsidians eigenen Übersetzungen und passen daher in jeder Sprache zum Rest der App.

## Einen Pfad tippen

- Ein Klick auf die **freie Fläche** vor oder hinter der Pfadleiste öffnet ein Textfeld, vorausgefüllt mit dem ganzen Pfad und vollständig ausgewählt — tippe darüber oder bearbeite an Ort und Stelle. (Ein Klick auf den Dateinamen selbst wählt nur den Dateinamen aus; siehe oben.)
- Tippen, während eine Pfadleiste sichtbar ist, verwandelt das letzte Segment in ein kleines Eingabefeld mit Autovervollständigung im aktuellen Ordner.
- `/` bestätigt das aktuelle Segment und steigt hinein.
- <kbd>Rücktaste</kbd> in einem leeren Feld geht zurück in den übergeordneten Ordner und öffnet dessen Namen erneut, mit dem Cursor am Ende.
- <kbd>Enter</kbd> bestätigt; <kbd>Esc</kbd> oder ein Klick woanders bricht zum tatsächlichen Pfad der Datei ab.

Das Eingabefeld ist schmucklos — kein Kasten, kein Rahmen —, sodass es sich wie der Pfadtext selbst liest, und es wächst beim Tippen mit.

## Navigation rührt die offene Datei nie an

Im Standardmodus (Navigation) wird die gerade geöffnete Notiz **nie** umbenannt oder verschoben.

- Ein Pfad, der auf eine vorhandene Datei zeigt, öffnet sie.
- Ein Pfad, den es noch nicht gibt, fragt *„Neue Datei erstellen?“*. Bestätigen legt alle fehlenden übergeordneten Ordner und die Datei an; Abbrechen tut überhaupt nichts.

## <kbd>Strg</kbd> — neuer Tab, und Kopieren statt Verschieben

Hältst du <kbd>Strg</kbd> (<kbd>Cmd</kbd> unter macOS), während du eine Datei aus dem Dropdown wählst oder <kbd>Enter</kbd> auf einem Pfad drückst, landet das Ergebnis in einem **neuen Tab** statt in diesem:

| | Ohne | Mit <kbd>Strg</kbd> |
| --- | --- | --- |
| Vorhandene Datei wählen oder tippen | Öffnet hier | Öffnet in neuem Tab |
| Pfad tippen, den es nicht gibt | Fragt nach, öffnet dann hier | Fragt nach, öffnet dann in neuem Tab |
| Pfad im Umbenennen-/Verschieben-Modus bestätigen | **Verschiebt** die Notiz dorthin | **Kopiert** sie dorthin und öffnet die Kopie in neuem Tab |

Der Modifikator wird nach Obsidians eigener Regel gelesen und verhält sich daher genau wie auf einem Link oder einer Zeile im Dateiexplorer — Mittelklick heißt ebenfalls „neuer Tab“, <kbd>Strg</kbd>+<kbd>Alt</kbd> heißt geteilte Ansicht und <kbd>Strg</kbd>+<kbd>Alt</kbd>+<kbd>Umschalt</kbd> ein neues Fenster.

Kopieren weigert sich zu überschreiben, genau wie Verschieben — auch auf den eigenen Pfad der Notiz, wo es nichts sinnvoll zu kopieren gibt.

## Außerhalb des Vaults browsen

**Das ist standardmäßig aus.** Schalte zuerst **Zugriff auf externe Dateien** in den Einstellungen ein — außerhalb des Vaults zu lesen und zu schreiben ist das Einzige, was dieses Plugin tut und Obsidian selbst nicht, deshalb wird es bewusst eingeschaltet statt abgeschaltet. Ist es aus, zeigt der Vault-Name lediglich deinen Vault im Dateiexplorer, und nichts hiervon schaut je darüber hinaus.

Ein Klick auf den **Vault-Namen** (oder auf das 🏠-Symbol, wenn *Vault-Namen anzeigen* aus ist) öffnet ein Dropdown mit Orten statt mit Inhalten:

- **Deine anderen Vaults**, gelesen aus Obsidians eigener Registrierung, zuletzt geöffnete zuerst, jeder unter Obsidians eigenem Vault-Symbol — dem, das die App selbst für Vault-Befehle verwendet. Der bereits geöffnete Vault bekommt stattdessen ein Haus: er ist der Ausgangspunkt der Zeile, kein Ziel.
- **Der Persönliche Ordner**, unter seinem Kontonamen, gekennzeichnet mit `~`. Lucide hat keine Tilde, deshalb zeichnet das Plugin dieses eine Symbol selbst auf Lucides eigenem 24×24-Raster und mit derselben Strichstärke — ein fehlendes Symbol des Satzes, kein Textzeichen zwischen Symbolen.
- Das **Wurzelverzeichnis**, beschriftet mit `root` — unübersetzt, denn so heißt es auf jedem System — statt `/`, was neben dem folgenden Trennzeichen wie ein leerer Schritt aussähe.
- **Eingehängte Laufwerke**, mit einem Symbol je Art, soweit sich das günstig feststellen lässt: Netzwerkfreigaben, optische Medien, Disketten und Wechselmedien bekommen ein eigenes; alles andere ein allgemeines Laufwerkssymbol. Unter Windows erscheinen Laufwerke als `C:` mit allgemeinem Symbol — Datenträgernamen und genaue Typen bräuchten WMI, was bewusst unterbleibt.

Einen anderen Vault zu wählen **wechselt Obsidian nicht dorthin.** Alles Geöffnete bleibt offen; die Pfadleiste beginnt lediglich, dort zu browsen. Genau darum sitzt das hier in der Pfadleiste, statt an den Vault-Umschalter der Seitenleiste zu verweisen.

### Während du draußen bist

Der Pfad **beginnt an dem Ort, den du gewählt hast**, nicht am Verzeichnisaufbau des Rechners — wählst du `Archiv`, liest sich die Zeile als `Archiv / Notizen / …`, nicht als `/home/du/Vaults/Archiv/Notizen/…`. Das führende Segment trägt ein Symbol für das, was es ist (Vault, Persönlicher Ordner, Laufwerk), und die <kbd>Rücktaste</kbd> hält dort an, statt weiter in den Rest des Dateisystems hinaufzulaufen. Ist *Vault-Namen anzeigen* aus, besteht dieses Segment nur aus dem Symbol — die Einstellung betrifft das Anfangssegment der Zeile, gleich welchen Vault es benennt, nicht nur deinen eigenen.

Die Pfadleiste ist **in der Fehlerfarbe umrandet** — derselbe Ring, den der Umbenennen-Modus zeichnet —, solange sie aus deinem Vault hinauszeigt. Er markiert einen anhaltenden Zustand, keinen Augenblick: solange er da ist, gilt nichts von Obsidians eigener Behandlung für das, was die Zeile zeigt, und Schreiben ist gesperrt, bis du etwas anderes sagst.

Ansonsten funktioniert das Browsen wie drinnen: Chips, Trennzeichen, Tippen, Autovervollständigung, <kbd>Rücktaste</kbd> zum Hinausgehen. Auch dieselben Sichtbarkeitsregeln gelten, nicht unterstützte Endungen brauchen also weiterhin Obsidians **Alle Datei-Endungen erkennen** und Punktdateien weiterhin die Einstellung dieses Plugins.

**Rechtsklick und Ziehen** auf Dropdown-Einträge funktionieren dort draußen nicht — das sind die Handler des Dateiexplorers, und die brauchen eine Datei, die der Vault kennt.

### Schreiben außerhalb des Vaults

Alles, was schreibt, ist **standardmäßig gesperrt**. Ein **Schloss** erscheint neben dem Umbenennen-Schalter in der Kopfzeile, solange die Zeile aus deinem Vault hinauszeigt; ein Druck darauf öffnet das Schloss und färbt es rot, passend zum Ring um die Zeile.

Die Erlaubnis gilt **einem Ort, nicht einem Augenblick**: sie übersteht alles, was man an einer Stelle tut — ein Verschieben abschließen, aus dem Eingabefeld klicken, eine Datei öffnen — und endet, wenn du einen anderen Vault, ein anderes Laufwerk oder das Wurzelverzeichnis aus dem Dropdown wählst, wenn die Zeile zu einer Vault-Datei zurückkehrt, oder wenn du das Schloss erneut drückst. Eine Reihe von Verschiebungen innerhalb eines Ordners kostet also einen Druck, nicht einen pro Datei.

Bei geöffnetem Schloss verhält sich die Pfadleiste dort draußen wie drinnen:

| Geste | Ergebnis |
| --- | --- |
| Einen Namen tippen, den es nicht gibt, <kbd>Enter</kbd> | Dieselbe Nachfrage „erstellen?“ wie drinnen; fehlende übergeordnete Ordner werden mit angelegt. Ein Name ohne Endung wird zu `.md`, genau wie drinnen |
| Umbenennen-/Verschieben-Modus, neuen Namen tippen | Benennt die Datei um, die die Zeile zeigt. Ein Name ohne Endung behält die eigene der Datei — draußen liegt in einem Ordner jede Art von Datei, und ein Umbenennen sollte aus einer `.png` nicht stillschweigend eine `.md` machen |
| Umbenennen-/Verschieben-Modus, woanders hin browsen, **diesen Namen behalten** wählen | Verschiebt sie dorthin unter dem Namen, den sie schon hat |
| <kbd>Strg</kbd> bei beidem halten | Kopiert statt zu verschieben und öffnet die Kopie in einem neuen Tab |

Gesperrt meldet all das, was es blockiert, statt zu geschehen. In keinem der beiden Zustände wird jemals etwas überschrieben: ein bereits vorhandenes Ziel wird abgelehnt, und die Ablehnung ist die des Dateisystems selbst (`COPYFILE_EXCL`, ein exklusives Anlegen) statt einer Prüfung, die ein Wettrennen verlieren könnte. Ein Verschieben über Dateisystemgrenzen — von einem USB-Stick, von einer Netzwerkfreigabe — fällt auf Kopieren-dann-Löschen zurück, und das Original verschwindet erst, wenn die Kopie angekommen ist.

**Eines entsperrt das Schloss nicht: eine Notiz aus deinem Vault *heraus* zu verschieben.** Der `fileManager` kann einer Datei über diese Grenze nicht folgen, jeder Link auf die Notiz würde also still zerbrechen und Obsidian sähe sie schlicht verschwinden. <kbd>Strg</kbd> halten kopiert sie stattdessen hinaus, was dieses Problem nicht hat, und der Hinweis sagt das auch. Der umgekehrte Weg — eine Datei von draußen *in* den Vault holen — ist ebenfalls noch nicht eingerichtet.

### Eine externe Datei öffnen

Obsidians Editor arbeitet nur mit Dateien innerhalb des Vaults, eine externe Datei **kann** deshalb nicht als echte Notiz mit Links, Rückverweisen und allem Übrigen geöffnet werden — das ist eine Grenze der App, nicht dieses Plugins. Wählst du eine aus, öffnet sich stattdessen eine **Vorschau**, schreibgeschützt, bis du etwas anderes sagst:

| Art | Dargestellt als |
| --- | --- |
| `.md`, `.markdown` | Gerendertes Markdown |
| Bilder, Audio, Video, PDF | Native Wiedergabe/Anzeige |
| Jede andere **Textdatei** (`.json`, `.css`, `.log`, `.txt`, …) | Wortgetreuer Klartext |
| Binärformate ohne Anzeige (`.zip`, `.exe`, …) | An *Extern öffnen* übergeben |

Der Betrachter hat zwei Lesarten einer Datei, und da sie einander ausschließen, wird nur die gezeigt, zu der du wechseln würdest:

| | Was es tut | Standard für |
| --- | --- | --- |
| **Als Markdown anzeigen** | Stellt die Datei als Notiz dar, schreibgeschützt | `.md`, `.markdown` |
| **Als Text bearbeiten** | Der Quelltext, bearbeitbar | alles andere |

Außerhalb des Vaults ist **Als Text bearbeiten** zugleich der Druck, der den Schreibschutz aufhebt — Modus und Erlaubnis sind eine Geste statt zweier Schaltflächen, über die man nachdenken müsste. Sie ist rot getönt, **wann immer ein Druck den Schreibschutz aufheben würde**, ob du das Bearbeiten an Ort und Stelle scharf stellst oder direkt aus der gerenderten Ansicht kommst; innerhalb des Vaults gibt es nichts zu entsperren, dort bleibt sie schlicht. **Als Markdown anzeigen** bekommt einen leichten Akzentschimmer — denselben Ton, den Obsidian ausgewähltem Text gibt — und ist damit als Weg zurück markiert, nicht als Handlungsaufforderung.

Weil die Schaltfläche dem *Bearbeiten* folgt und nicht dem rohen Modus, bietet eine schreibgeschützt in der Textansicht liegende Datei weiterhin **Als Text bearbeiten** an: das ist der Druck, der es scharf stellt. Eine Datei, in die nie getippt werden kann — gekürzt oder unlesbar —, sagt stattdessen **Als Text anzeigen**, denn mehr kann der Druck nicht liefern.

Die Standards sind die nützliche Variante, nicht die wörtliche: ein `#` in einem Shell-Skript ist ein Kommentar, keine Überschrift, ein `.log` als Markdown zu rendern würde es also still verschlucken. Beide Standards lassen sich pro Datei übergehen, und die Wahl geht in die Historie des Tabs ein, sodass Vor/Zurück und ein wiederhergestellter Arbeitsbereich sie behalten — reichlich Notizen leben in `.txt`-Dateien, und reichlich `.md`-Dateien liest man leichter als Quelltext.

**Dateien in deinem Vault sind sofort bearbeitbar**, ohne Entsperren: *Als Text bearbeiten* ist ein echter Editor und schreibt beim Tippen zurück.

**Das Bearbeiten wird über den Wechsel hinweg gemerkt.** Der Gang zu *Als Markdown anzeigen* setzt es aus — eine statische Darstellung hat nichts, worin man tippen könnte, und die Live-Vorschau braucht Obsidians eigenen Editor, den es nur für Dateien im Vault gibt —, sodass dort nichts behauptet, du würdest bearbeiten. Der Gang zurück zu *Als Text bearbeiten* macht dort weiter, wo du aufgehört hast.

**Dateien außerhalb des Vaults öffnen schreibgeschützt, und *Als Text bearbeiten* hebt das auf.** Dieser Druck ist das ganze Tor: bis er geschieht, wird dort draußen nichts geschrieben. Danach speichert die Datei beim Tippen, genau wie eine im Vault, und die Statuszeile wechselt vom Schloss zum Stift. Die Freigabe gilt dieser einen Datei in diesem einen Tab — zu einer anderen Datei zu navigieren sperrt wieder, und sie wird bewusst nicht in der Historie des Tabs gespeichert, damit ein wiederhergestellter Arbeitsbereich nie mit bereits scharf gestelltem Schreiben auf einer Systemdatei zurückkommt, an deren Öffnen du dich nicht erinnerst.

**Gekürzte Dateien bleiben in jedem Fall schreibgeschützt** — zu speichern, was auf dem Bildschirm steht, würde alles jenseits der Grenze verwerfen, deshalb wird die Schaltfläche gar nicht erst angeboten statt angeboten und verweigert. Dasselbe gilt für eine Datei, die nicht gelesen werden konnte: da ist nichts zurückzuschreiben außer einer leeren Fläche.

Scheitert das Schreiben — ein schreibgeschütztes Laufwerk, eine Datei, die dir nicht gehört —, wird der Grund des Systems selbst in einem Hinweis gezeigt.

Sehr große Dateien werden gekürzt gezeigt, und die Statuszeile sagt das, statt es dich herausfinden zu lassen — neben den anderen Bedingungen statt hinter den Schaltflächen, denn es ist eine Tatsache über die Datei wie die übrigen auch. Die Grenzen sind an einem laufenden Renderer gemessen und nicht geraten — ein Megabyte Text in einer Fläche zu setzen bringt Obsidians Renderer-Prozess schlicht um, und Markdown kostet pro Byte ein Mehrfaches von Klartext, die beiden haben also getrennte Grenzen, und eine einzelne riesige Zeile wird selbst dann gekürzt, wenn die Datei insgesamt klein ist.

**Die Statuszeilen sind Beschriftungen, die Erklärung ist ein Tooltip.** Jede Zeile stellt in so wenigen Worten wie nötig fest, was zutrifft — *Außerhalb deines Vaults*, *Kein Editor für diesen Dateityp*, *Gekürzt — Datei zu groß* —, denn die Schaltflächen daneben sagen bereits, in welchem Zustand die Datei ist. Beim Überfahren erscheint der Satz dazu: warum Obsidian sie nicht als Notiz öffnen kann, was sonst mit diesem Dateityp geschähe, was das Kürzen dich kostet.

Das gilt auch für Dateien **innerhalb** deines Vaults. Obsidian reicht jede Endung, für die es keine Ansicht hat, direkt an die Standardanwendung des Systems weiter — eine `.txt` oder `.json` in deinem Vault würde Obsidian also ganz verlassen. Die öffnen sich jetzt im selben Betrachter, mit dem orangen Ring, denn „öffne es in Obsidian“ war ja die Bitte — und als Vault-Dateien sind sie dort ohne jedes Entsperren bearbeitbar. Binärdateien ohne Anzeige behalten Obsidians Verhalten; es gibt nichts zu zeigen.

Die Vorschau öffnet sich **in dem Tab, in dem du warst**, sodass Vor/Zurück dich zu der Notiz zurückbringen, aus der du kamst; halte <kbd>Strg</kbd> für einen neuen Tab, wie überall sonst. Die Kopfzeile zeigt weiterhin den Pfad der externen Datei, solange sie offen ist, du kannst also von dort aus weiterbrowsen.

Eine unaufdringliche Zeile über dem Inhalt bietet die Auswege an:

- **In *(Vault)* öffnen** — erscheint, wenn die Datei zu einem deiner anderen Vaults gehört. Reicht sie an Obsidians eigenen URI-Handler weiter, der das Fenster dieses Vaults mit der Notiz darin öffnet, als echte bearbeitbare Notiz. Dieses Fenster bleibt genau so, wie es war; nichts wechselt unter dir weg.
- **Als Markdown anzeigen** / **Als Text bearbeiten** — die beiden Lesarten; die zweite hebt außerhalb des Vaults zugleich den Schreibschutz auf.
- **Extern öffnen** — reicht die Datei an die Standardanwendung deines Systems weiter, auch die Binärformate, die dieser Betrachter nicht zeigen kann.

Außerhalb deines Vaults wird nichts geschrieben, ohne dass du zuvor *Als Text bearbeiten* drückst. Die vollständige Offenlegung steht im Abschnitt [Außerhalb des Vaults](README.de.md#außerhalb-des-vaults) des README.

## Die beiden Warnfarben

| | Wann | Was es bedeutet |
| --- | --- | --- |
| **Roter** Ring um die Pfadleiste | Die Zeile zeigt aus deinem Vault hinaus | Obsidian kann das Dortige nicht als Notiz öffnen, und dort draußen wird nichts geschrieben, bis du das Schloss öffnest. |
| **Oranger** Ring um die Pfadleiste, orange Einträge im Dropdown | Die Datei ist ein Texttyp, für den Obsidian keine Ansicht hat | Eine Vorsichtsmarkierung. Obsidian würde sie an die Standardanwendung deines Systems weiterreichen; das Plugin zeigt sie stattdessen. |

Die **beiden sind unabhängig, und beide können zugleich gelten** — eine externe `.json` ist außerhalb deines Vaults *und* ein Typ, für den Obsidian keinen Editor hat. Im Betrachter erscheinen sie als getrennte Zeilen, von denen jede nur ihre eigene Tatsache feststellt. Auf der Pfadleiste gewinnt Rot, wo beides zutrifft, denn zwei Ringe wären nur Lärm.

Die orange Stufe ist bewusst eng gefasst. Registrierte Typen (Markdown, Canvas, Bilder, PDF, Audio, Video) werden ordentlich behandelt und bekommen nichts. Binärdateien ebenfalls nichts — du wirst eine `.zip` nicht versehentlich zu Brei tippen. Übrig bleibt genau die Gefahr: eine `.json`, `.css` oder `.log`, die **Alle Datei-Endungen erkennen** sichtbar gemacht hat.

Rot gewinnt, wo beides zuträfe; zwei Ringe zugleich wären nur Lärm.

## Verschieben-/Umbenennen-Modus

Die Stift-Schaltfläche ganz rechts in der Kopfzeile — neben der Ansichtsmodus-Schaltfläche, in der Größe der nativen Schaltflächen — schaltet den Verschieben-/Umbenennen-Modus um. Die Kopfzeile ist dann in der Akzentfarbe umrandet, genau wie beim Umbenennen im Dateiexplorer. Dieselben Klicks und Tastendrücke bestätigen nun ein Verschieben oder Umbenennen über Obsidians `fileManager.renameFile`, sodass alle Links auf die Notiz mitwandern.

Während des Umbenennens:

- Der aktuelle Dateiname ist in jedem Ordner-Dropdown oben angeheftet, eine Notiz ohne Umbenennen zu verschieben ist also ein einziger Klick.
- Im Zielordner bereits vergebene Namen sind ausgegraut, bleiben aber auswählbar.
- Die Eingabe wird live gegen Obsidians eigene Umbenennungsregeln geprüft — dieselben Zeichensätze, dieselben Meldungen, derselbe rote Tooltip wie beim Umbenennen im Dateibaum —, ein unzulässiger oder kollidierender Name wird also beim Tippen markiert und kann nicht bestätigt werden.
- Ein Klick außerhalb der Kopfzeile beendet den Umbenennen-Modus.

## Eine Taste für beide Umbenennungen

Der Umbenennen-Befehl (standardmäßig <kbd>F2</kbd>, oder worauf du ihn gelegt hast) **wechselt** zwischen Obsidians Umbenennen im Inline-Titel und der Pfadleiste dieses Plugins mit ausgewähltem vollständigem Pfad. Hast du Obsidians Inline-Titel abgeschaltet, wird die Pfadleiste zum einzigen Ziel, damit die Taste nie ins Leere greift.

Das funktioniert, indem der Befehl `workspace:edit-file-title` umhüllt wird, statt die Taste abzufangen — ein neu belegtes Tastenkürzel und der Aufruf aus der Befehlspalette funktionieren daher unverändert.

## Wie Dropdown-Einträge eingefärbt sind

| Farbe | Bedeutet |
| --- | --- |
| **Violett** | Eine Notiz (`.md`, `.markdown`) — das, was Obsidian als Notiz öffnet, herausgehoben aus einem Ordner mit gemischtem Inhalt |
| **Orange** | Ein Texttyp, für den Obsidian keine Ansicht hat; siehe [die Warnfarben](#die-beiden-warnfarben) |
| **Gedämpft** | Außerhalb deines Vaults, die Behandlung des Vaults gilt dort also nicht |
| **Blau** | Nur im Umbenennen-/Verschieben-Modus: der Eintrag *diesen Namen behalten* — ein Ziel statt etwas Vorhandenem, deshalb aus den Dateinamen ringsum herausgehoben |
| **Ausgegraut** | Nur im Umbenennen-/Verschieben-Modus: der Name ist vergeben. Weiterhin auswählbar — die Wahl füllt das Eingabefeld, wo die Prüfung die Kollision markiert |

## Sichtbarkeitsregeln

- Dateien mit nicht unterstützten Endungen erscheinen in den Dropdowns nur, wenn Obsidians Einstellung **Alle Datei-Endungen erkennen** an ist.
- Das Dropdown zeigt höchstens 100 Einträge — Obsidians eigene Grenze. Hat ein Ordner mehr, sagt die letzte Zeile, wie viele ausgelassen wurden; tippe weiter, um die Liste einzuengen.
- Punktdateien und Punktordner erscheinen nur, wenn die Einstellung **Punktdateien anzeigen** dieses Plugins an ist.
- **Der Überschreibschutz wirkt unabhängig von der Sichtbarkeit** — eine versteckte Datei hindert dich weiterhin daran, sie zu überschreiben.

## Spickzettel

| Du willst… | Tu das |
| --- | --- |
| Einen Ordner öffnen (seine Notiz, oder ihn anzeigen) | Klicke auf das Trennzeichen **hinter** diesem Ordner |
| Einen Ordner gegen einen Nachbarn tauschen | Klicke auf den Namen dieses Ordners, dann tippen oder wählen |
| Die Notiz umbenennen oder umlenken | Klicke auf den Namen der Notiz — Endung inklusive |
| Den Inhalt eines Ordners durchsehen | Klicke auf den Namen dieses Ordners; das Dropdown listet seinen übergeordneten, klicke also auf den Ordner **unterhalb** des gewünschten |
| Einen Ordner und alles darunter neu tippen | **Doppelklick** auf den Namen dieses Ordners, dann tippen |
| Den Pfad ab einem Ordner bearbeiten | Klicke auf den Namen dieses Ordners, dann <kbd>Ende</kbd> oder <kbd>→</kbd> zum Abwählen |
| Zu einer Datei über ihren Pfad springen | Klicke auf den Dateinamen oder die freie Fläche, tippen, <kbd>Enter</kbd> |
| Eine Datei stattdessen in neuem Tab öffnen | <kbd>Strg</kbd> beim Auswählen, oder <kbd>Strg</kbd>+<kbd>Enter</kbd> |
| Die Notiz kopieren statt verschieben | Stift, dann <kbd>Strg</kbd> beim Auswählen oder Bestätigen des Ziels |
| Eine Notiz an einem Pfad anlegen, den es nicht gibt | Pfad tippen, <kbd>Enter</kbd>, Nachfrage bestätigen |
| Beim Tippen eine Ebene hinabsteigen | `/` tippen |
| Beim Tippen eine Ebene hinaufgehen | <kbd>Rücktaste</kbd> im leeren Feld |
| Die offene Notiz verschieben oder umbenennen | Auf den Stift klicken, dann browsen oder tippen wie oben |
| Verschieben ohne Umbenennen | Stift → in den Zielordner klicken → den angehefteten aktuellen Dateinamen wählen |
| An Ort und Stelle umbenennen | <kbd>F2</kbd> zweimal (der erste Druck geht zum Inline-Titel, der zweite zur Kopfzeile) |
| Zu einem anderen Vault, dem Persönlichen Ordner oder einem Laufwerk springen | Auf den Vault-Namen klicken |
| Eine Datei von außerhalb des Vaults öffnen | Vault-Name → Ort wählen → browsen → Datei wählen (schreibgeschützt bis *Als Text bearbeiten*) |
| Irgendetwas abbrechen | <kbd>Esc</kbd>, oder ein Klick außerhalb der Kopfzeile |

## Einstellungen

| Einstellung | Optionen | Standard | Was sie tut |
| --- | --- | --- | --- |
| **Ausrichtung** | Links / Zentriert / Rechts | Links | Wo die Pfadleiste in der Kopfzeile sitzt. *Zentriert* entspricht Obsidians klassischem Aussehen. |
| **Trennzeichen** | Beliebiges Zeichen | `/` | Das Trennzeichen zwischen den Segmenten. Sechs Ein-Klick-Vorlagen (`/ > ▸ › \ •`) stehen vor dem Textfeld. |
| **Vault-Namen anzeigen** | Ein / Aus | Ein | Ob der Vault selbst das erste Segment der Pfadleiste ist. Ausgeschaltet wird dieses Segment zu einem 🏠-Symbol, statt zu verschwinden, damit der Pfad weiterhin irgendwo Anklickbarem beginnt. |
| **Ordnername öffnet das Dropdown** | Ein / Aus | Ein | Tauscht, was ein Ordnername und das Trennzeichen dahinter tun — siehe [die Tabelle oben](#die-pfadleiste). Mit [Folder notes](obsidian://show-plugin?id=folder-notes) öffnet das Trennzeichen Ordnernotizen. Gilt nie im Umbenennen-/Verschieben-Modus. |
| **Punktdateien anzeigen** | Ein / Aus | Aus | Ob Punktdateien und Punktordner in den Dropdowns aufgeführt werden. Der Überschreibschutz gilt so oder so. |
| **Zugriff auf externe Dateien** | Ein / Aus | **Aus** | Ob der Vault-Name das Orte-Dropdown öffnet. Aus schaut nichts im Plugin je über diesen Vault hinaus. |

## Die Symbole ersetzen

Lure zeichnet drei Symbole: das Symbol des Vault-Stammverzeichnisses (wenn **Vault-Namen anzeigen** aus ist), den Umschalter für Umbenennen/Verschieben und das Schloss, das das Schreiben außerhalb des Vaults absichert. Alle lassen sich aus einem Theme oder einem CSS-Snippet austauschen — setze das Ersatzzeichen und blende das mitgelieferte in einer einzigen Regel aus:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* Das Schloss hat zwei Zustände; `.is-active` ist das offene. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}

.lure-unlock-btn.is-active {
	--lure-icon-glyph: "🔓";
}
```

`--lure-icon-glyph` nimmt alles, was in CSS `content` gültig ist, `url(...)` funktioniert also für ein Bild ebenso wie ein Text- oder Emoji-Zeichen. Lass `--lure-icon-svg` unangetastet, um das Lucide-Symbol zu behalten und dein Zeichen daneben zu zeichnen.
