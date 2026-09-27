<!-- Übersetzung von docs/usage.md — Stand: Commit 94b1372.
     Maschinell übersetzt (Claude Sonnet 5) und nicht von Muttersprachlern
     geprüft. Bezeichnungen aus dem Plugin selbst stammen aus
     src/lang/translations.ts; bei Obsidians eigenen Einstellungen steht der
     englische Name in Klammern, weil er hier nicht überprüft werden konnte. -->

[English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · [Čeština](usage.cs.md) · [Dansk](usage.da.md) · **Deutsch** · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · [Bahasa Indonesia](usage.id.md) · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · [Norsk](usage.no.md) · [Polski](usage.pl.md) · [Português](usage.pt.md) · [Português (Brasil)](usage.pt-BR.md) · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

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

Ist der Ordner, dessen Notiz du gerade liest, derjenige, um den es geht, zeigt der Klick statt dessen den Ordner an — es gibt nichts zu öffnen, das nicht schon auf dem Bildschirm steht, und genau das hat der zweite Klick schon immer bedeutet.

Ist [Folder notes](obsidian://show-plugin?id=folder-notes) installiert, öffnet derselbe Klick statt dessen die Notiz dieses Ordners — **auf jeder Tiefe**: die Notiz wird hier nach der eigenen Konvention dieses Plugins aufgelöst, statt es diesem zu überlassen. Die anderen beiden Ordnernotiz-Plugins veröffentlichen keine Konvention, die sich auslesen ließe, und beanspruchen die Zeile nie für sich, sodass bei ihnen das Trennzeichen den Ordner wie immer anzeigt. Es ist das eine gefundene Ordnernotiz-Plugin, das den Kopfzeilen-Pfad für sich beansprucht; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) und [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) verwalten Ordnernotizen, hören aber nicht auf einen Klick in der Pfadleiste, sodass bei ihnen das Trennzeichen den Ordner wie gewohnt anzeigt. Siehe [Kompatibilität](../compatibility.md#verified-against).

Ein Trennzeichen ist **nur unterstrichen, wenn der Ordner davor tatsächlich eine Ordnernotiz hat**, sodass die Unterstreichung ein Versprechen ist, dass es dort etwas zu öffnen gibt — auf jeder Tiefe, wenn [Folder notes](obsidian://show-plugin?id=folder-notes) läuft, da die Notiz hier aufgelöst wird, statt es diesem Plugin zu überlassen, sie zu markieren. Läuft ein anderes Plugin, ist nichts unterstrichen und nichts öffnet sich: das Trennzeichen zeigt an, wie ohne jedes Ordnernotiz-Plugin auch. Jedes Trennzeichen bleibt in jedem Fall anklickbar — eines ohne Unterstreichung zeigt seinen Ordner in der Seitenleiste an und klappt ihn auf, was der Mauszeiger weiterhin anzeigt. Die Unterstreichung wandert zugleich vom Ordnernamen weg: bei eingeschaltetem Tausch öffnet der Name das Dropdown, sodass es eine Lüge wäre, ihn als Link zur Notiz zu markieren.

**Der Umbenennen-/Verschieben-Modus setzt sich über beides hinweg**, ganz gleich, was die Einstellung sagt: solange ein Verschieben aussteht, öffnet nichts in der Zeile einen Ordner, denn ihn zu öffnen hieße, das Verschieben aufzugeben. Ordnernamen wählen zum Bearbeiten aus, Trennzeichen steigen hinab — beides sind Wege, das Ziel zu bestimmen — und die Unterstreichung verschwindet, um zu zeigen, dass das Öffnen ausgesetzt ist.

Das **Vault-Stammverzeichnis** ist das eine Segment, das kein Pfadsegment ist. Es hat keinen übergeordneten Ordner, aus dem sich Nachbarn auflisten ließen, und öffnet deshalb das [Orte-Dropdown](#außerhalb-des-vaults-browsen) — deine anderen Vaults, den Persönlichen Ordner, das Wurzelverzeichnis und eingehängte Laufwerke.

## Das eigene Trennzeichen des Vaults

Das Trennzeichen direkt hinter dem Vault-Namen steht für den Vault selbst und
nicht für einen Ordner, und tut deshalb, was kein anderes Trennzeichen kann:

| | Erster Klick | Nächster Klick |
| --- | --- | --- |
| **Mit einem Startseiten-Plugin** (eine Seite, die dich beim Öffnen von Obsidian begrüßt) | Öffnet diese Seite in diesem Bereich | Klappt den Dateibaum ein |
| **Ohne eines** | Klappt den Dateibaum ein | Stellt genau das wieder her, was offen war |

Gewöhnliche Klicks, kein Doppelklick: sobald die Seite offen ist, hat das
Trennzeichen nichts mehr zu öffnen, sodass der nächste Klick das Einklappen
auslöst — egal, wie lange du dir dafür Zeit lässt.

Es ist **unterstrichen**, wenn es eine Startseite zum Öffnen gibt, was
dasselbe Versprechen ist, das das Trennzeichen eines Ordners macht: dort ist
etwas. Das Einklappen ist ein Umschalter — der nächste Klick stellt genau die
Ordner wieder her, die offen waren, und nur diese, sodass ein Baum, den du
angeordnet hattest, nicht durch einen Blick auf etwas anderes verloren geht.

## Ein Bereich ohne Datei

Ein leerer Tab, der Graph und alles andere, das keine Datei benennt, erhält
eine eigene Zeile: der Vault, dann ein Segment, das sagt, was der Bereich
enthält.

```
my-vault / :blank      ein neuer Tab
my-vault / :graph      der Graph, lokal oder global
my-vault / :<type>     alles andere ohne Datei
```

Auch die **eigene Auflistung des Vault-Stammverzeichnisses** bietet diese
Seiten an, unter den Ordnern und Notizen, die tatsächlich darin liegen: wählst
du dort `:graph` oder `:search`, öffnet der Bereich diese Ansicht, genau wie
die Auswahl einer Notiz die Notiz öffnet. Welche Seiten existieren, wird aus
Obsidian ausgelesen und nicht hier festgeschrieben — jede Ansicht, die nicht
dazu existiert, eine Datei zu zeigen, sodass ein Plugin, das eine registriert
(ein Home-Tab, ein Kalender), erscheint, ohne dass dieses Plugin etwas davon
wüsste. Ansichten, die eine Datei benötigen — Markdown, PDF, Bilder, Canvases,
Bases — werden nicht angeboten: es gibt für sie nichts zu zeigen.

Der Doppelpunkt ist der Punkt dabei — keine Datei und kein Ordner kann
`:graph` heißen, sodass die Zeile nicht mit einem Pfad verwechselt werden
kann, der sich öffnen ließe. Die Bezeichnung stammt aus dem Ansichtstyp und
nicht aus Obsidians eigenem Wortlaut, sodass sie unabhängig von der
Oberflächensprache gleich aussieht, und ein angehängtes `-view` wird
weggelassen: ein Home-Tab-Plugin registriert seine Ansicht als
`home-launcher-view`, und die Zeile sagt `:home-launcher`.

Ein Klick auf den leeren Bereich oder auf die Bezeichnung selbst **öffnet das
Feld am Vault-Stammverzeichnis**: einen Pfad tippen und <kbd>Enter</kbd> öffnet
ihn in genau diesem Bereich, mit derselben Vervollständigung, demselben
Dropdown und demselben roten Feld, das anbietet, zu erstellen, was noch nicht
da ist. Ein leerer Tab ist ein guter Ort, um zu tippen, wohin du willst — genau
dafür ist er da.

Die Bezeichnung ist eine Bezeichnung und nichts weiter: kein Dropdown, kein
Ziehen, kein Umbenennen. Bereiche in den Seitenleisten werden vollständig in
Ruhe gelassen — ein Backlinks-Bereich behält den Titel, den Obsidian ihm gibt.

Canvases, PDFs, Bilder und Bases brauchen nichts davon. Sie sind Dateien und
erhalten deshalb eine gewöhnliche Pfadleiste.

## Ein Segment anklicken: gegen einen Nachbarn tauschen

Ein Klick auf einen Ordnernamen wählt **den Namen dieses Ordners** in einem Textfeld aus und öffnet ein Dropdown des Ordners **eine Ebene darüber** — seines übergeordneten. Tippen oder Auswählen tauscht diesen Ordner gegen einen Nachbarn und lässt alles darunter unangetastet: `Projekte/2026/Auftakt.md` → Klick auf `2026` → `2025` wählen ergibt `Projekte/2025/Auftakt.md`.

Ein Klick auf den **Notiznamen** funktioniert ebenso gegen den eigenen Ordner und wählt den Namen **ohne seine Erweiterung** aus — Umbenennen ist die übliche Änderung, und über eine Auswahl zu tippen, die `.md` einschloss, änderte früher versehentlich den Dateityp. Die Erweiterung bleibt einen Tastendruck entfernt sichtbar: <kbd>→</kbd> erreicht sie, und der Doppelklick, der auf die ganze Zeile ausweitet, nimmt alles.

Der Klick auf den Ordner hat bereits ein Segment ausgewählt, deshalb weitet **ein weiterer Klick** die Auswahl auf die ganze Zeile aus — diesen Ordner *und* alles darunter — und Tippen ersetzt dann den restlichen Pfad in einem Zug. Funktioniert in der Navigation wie im Umbenennen-/Verschieben-Modus gleich.

Das gilt nur als Fortsetzung des Klicks, der das Feld geöffnet hat. Sobald du das Feld benutzt hast, verhält es sich wie jedes andere Textfeld: Klick setzt die Einfügemarke, Doppelklick nimmt ein Wort, Dreifachklick die Zeile.

In jedem Fall bleibt der Rest des Pfads um das Eingabefeld herum sichtbar, als Chips davor und als nicht ausgewählter Text danach, sodass der vollständige Pfad nie aus der Kopfzeile verschwindet. Tippe, um die Auswahl zu ersetzen, oder drücke <kbd>→</kbd>, um sie zu behalten und von dort weiterzubearbeiten. Das Dropdown listet den ganzen Ordner unabhängig davon, was vorausgefüllt ist; es beginnt erst zu filtern, sobald du tatsächlich tippst.

## Über das Trennzeichen absteigen

Ein Klick auf ein Trennzeichen (bei ausgeschaltetem **Ordnername öffnet das Dropdown**) steigt in den Ordner davor hinab: das Dropdown listet den Inhalt *dieses* Ordners, und der Rest des Pfads öffnet sich ausgewählt im Eingabefeld. Wählst du einen Ordner, hängt er sich an die Pfadleiste an und das nächste Dropdown öffnet sich sofort — du kannst dich also durch einen Baum klicken, ohne die Kopfzeile zu verlassen.

## Das Dropdown öffnet sich, wo du stehst

Die Liste öffnet sich beim Eintrag, in dem du gerade stehst — der Notiz, zu
der diese Leiste gehört, oder, wenn ein Klick auf einen Ordner dessen
übergeordneten aufgelistet hat, jenem Ordner — statt bei der ersten Zeile. In
einem Ordner mit zweihundert Notizen ist die erste Zeile weit von dir entfernt.

**Ein Mausrad über einem Namen öffnet dessen Liste und läuft sie durch.** Die
erste Drehung öffnet dieselbe Liste, die ein Klick auf den Namen öffnet, und
jede weitere Drehung verschiebt die Hervorhebung um eine Zeile und trägt das,
worauf du zeigst, genau wie mit den Pfeiltasten ins Feld ein — sodass sich ein
Nachbar finden und wählen lässt, ohne die Tastatur zu benutzen. Drehst du über
ein Ende hinaus, bekommst du deinen Text zurück. Eine Zeile mit mehr Pfad, als
der Bereich fasst, beantwortet das Rad statt dessen mit seitlichem Scrollen —
diese Lesart gewinnt, solange sie zutrifft.

Die Liste ist **so hoch, wie es das Fenster zulässt**. Obsidian begrenzt seine
Vorschlagslisten auf 300 Pixel, egal was darunter liegt; diese läuft bis zum
unteren Fensterrand, hält wenige Pixel vor der Kante an und scrollt erst, wenn
der Ordner mehr enthält, als hineinpasst. Sie ist **nicht breiter als die
Pfadleiste**: ein Name, der nicht hineinpasst, wird gekürzt, wie auch die
Zeile einen kürzt, und vollständig gezeigt, sobald du darauf zeigst.

Das Durchlaufen der Liste **trägt das, worauf du zeigst, ins Feld ein**, per
Pfeiltaste oder per Hovern — an die Stelle des Segments, das du gerade
bearbeitet hast, wobei der Rest des Pfads stehen bleibt — sodass die Zeile, in
der du dich befindest, auch der Pfad ist, den du bekommen würdest.

Der Rest des Pfads wird **nur so weit gezeigt, wie er unter dem existiert,
worauf du zeigst**. Stehst du in einem Ordner mit `2026/notiz.md` hinter dem
Segment, das du bearbeitest, zeigt das Zeigen auf einen Ordner mit einem
`2026`, das eine `notiz.md` enthält, alles davon; einer mit dem `2026`, aber
ohne Notiz, zeigt `2026`; einer mit keinem von beidem zeigt nach dem Namen
gar nichts mehr, und ebenso wenig eine Datei, da unter ihr nichts liegt. Was
**du getippt hast**, behält seinen ganzen Pfad, während du es tippst, wie
wenig davon auch schon da ist — ein halb getippter Name ist keine
Entscheidung. Einen Namen festzulegen ist eine Entscheidung, und was von dort
nicht erreichbar ist, wird an dieser Stelle abgeschnitten; die Ordner, die du
erstellst, sind die, die du *danach* tippst, und genau dort erzeugt sie
<kbd>Enter</kbd>.
Der Text, den du getippt hattest, bleibt erhalten: das Bewegen **über eines
der beiden Enden der Liste hinaus** — nach oben über den ersten Eintrag, oder
nach unten über den letzten — gibt ihn los und stellt deinen Text wieder her,
ohne dass etwas hervorgehoben ist. Das Feld ist eine Station im Ring wie jeder
Eintrag, sodass eine Runde hindurchläuft, statt von der letzten Zeile zur
ersten zu springen, und ein Weitergehen von dort trägt zum anderen Ende herum.

Nimmst du den **Zeiger von der Liste**, stellt das ebenfalls deinen Text
wieder her — und gibt die Hervorhebung an das zurück, was sie hatte, bevor die
Maus ankam: den Eintrag, zu dem du mit den Pfeiltasten gegangen warst und der
wieder im Feld erscheint, oder den, bei dem die Liste geöffnet hat, weil du
dort stehst. Hovern ist eine Art zu schauen und nicht zu wählen, sodass ein
Streifen des Zeigers über die Liste dich nichts kostet.

Die Liste selbst ändert sich nicht, während du dich durch sie bewegst — sie
filtert weiterhin nach dem, was du getippt hast, nicht nach dem, was ins Feld
vorgeschaut wurde — sodass der Eintrag unter dir sich beim nächsten Klick
nicht verschiebt. Tippen ersetzt die Vorschau und filtert wie gewohnt.

**Gefiltert wird nach dem Segment, das du bearbeitest**, nicht nach allem im
Feld. Ein Klick auf einen Ordner lässt den Rest des Pfads hinter dem Namen
stehen, den du änderst, sodass ein Filtern nach dem Ganzen nach einem Kind
namens `2026/Auftakt.md` suchen und nichts finden würde — die Liste würde
sich beim ersten Tastendruck schließen, egal was du tippst. Auch die
**Erweiterung bleibt außen vor**, solange die Einfügemarke vor dem Punkt
steht: ein Klick auf den Namen einer Notiz wählt den Stamm aus und lässt
`.md` dahinter stehen, sodass das Tippen eines Buchstabens das Feld `a.md`
lesen lässt, und das ist nicht, wonach du suchst. Setzt du die Einfügemarke
hinter den Punkt, zählt die Erweiterung wie alles andere. Ein Name, der
wirklich auf nichts passt, schließt die Liste trotzdem, denn eine leere
Liste ist die ehrliche Antwort.

Eine Vorschau **tauscht nur dieses eine Segment und lässt den Rest des Pfads
unangetastet**: das Zeigen auf einen Ordner fragt, was wäre, wenn dieser
Schritt jener wäre, statt den Pfad wegzuwerfen. Verlässt du die Liste, stellt
das den Text *und* die Auswahl wieder her, die du hattest, sodass der nächste
Tastendruck ersetzt, was er ersetzt hätte, bevor du geschaut hast.

## Dropdown-Einträge sind echte Dateimanager-Zeilen

Jede Datei und jeder Ordner im Dropdown verhält sich wie die entsprechende Zeile im Dateiexplorer:

- **Rechtsklick** für dasselbe Kontextmenü, das der Dateiexplorer bietet, Eintrag für Eintrag — einschließlich der Einträge, die andere Plugins hinzufügen. Ein Ordner bietet *Neue Notiz*, *Neuer Ordner*, *Neue Canvas*, *Neue Base*, *Kopie erstellen*, *Ordner verschieben nach…*, *Im Ordner suchen*, *Pfad kopieren*, *Im Systemexplorer anzeigen*, *Umbenennen…* und *Löschen*; eine Datei bietet ihr eigenes Gegenstück, einschließlich *Mit Standard-App öffnen*.
- **Ziehen** eines Eintrags überallhin, wo Obsidian eine Datei akzeptiert: in einen Editor, um einen Link einzufügen, auf einen Ordner im Dateiexplorer, um ihn zu verschieben, auf die Tab-Leiste, um ihn zu öffnen.

Die Menütexte stammen aus Obsidians eigenen Übersetzungen und passen daher in jeder Sprache zum Rest der App.

## Einen Pfad tippen

- Auf den **leeren Bereich** vor oder nach der Pfadleiste zu klicken öffnet ein Textfeld für den gesamten Pfad *und zeigt die Notiz im Datei-Explorer*, sodass der Baum dem Bereich folgt, ohne eine zweite Geste zu brauchen. Es **zählt deine Klicks**: einer wählt den Pfad ohne die Dateiendung, zwei wählen ihn mit, drei wählen den Pfad, den die Maschine kennt. Auf den **Namen der Datei** zu klicken zählt genauso, beginnt aber eine Stufe tiefer, beim Namen selbst: einer wählt ihn ohne die Dateiendung, zwei mit, und drei weiten ihn auf den gesamten Pfad *ab deinem Vault-Ordner* aus — die Form, die ein Link oder eine Suche will, statt der der Maschine. Ein vierter Klick erreicht diese.
- **Das Zählen gehört zu dem Vorgang, der das Feld geöffnet hat.** Sobald er verstrichen ist — du hast pausiert, getippt oder einmal irgendwo im Text geklickt —, ist das Feld ein Textfeld wie jedes andere, und ein Doppelklick darin wählt das Wort unter dem Zeiger aus, wie überall sonst auch. Überschreibe das Ausgewählte, oder bearbeite an Ort und Stelle. (Ein Klick auf den Dateinamen selbst wählt nur den Dateinamen aus; siehe oben.) Ein Rechtsklick auf denselben Bereich **kopiert** dieselben drei Auswahlen, bei zwei, drei und vier Klicks — die eine Taste zeigt sie, die andere übernimmt sie. Ein **einzelner** Rechtsklick öffnet den Pfad mit allem ausgewählt und bietet an, was man damit tun kann: Ausschneiden, Kopieren, Einfügen, Alles auswählen, in Obsidians eigenen Worten.
- **Mit der mittleren Maustaste** auf den leeren Bereich klicken, um über den Pfad einzufügen: Das Feld öffnet sich mit dem gesamten Pfad *ab der Vault-Wurzel*, sodass die Zwischenablage alles davon ersetzt, und was landet, ist ausgewählt. <kbd>Enter</kbd> geht dann dorthin.
- **<kbd>Strg</kbd>+Klick** auf den leeren Bereich, um diese Notiz erneut in einem eigenen Tab zu öffnen, im Datei-Explorer kurz hervorgehoben, damit der zweite Tab nicht mit dem ersten verwechselt wird. Beim **Vault-Namen** öffnet <kbd>Strg</kbd>+Klick oder ein Klick mit der mittleren Maustaste einen leeren Tab, der an der Vault-Wurzel steht, mit bereits eingeblendeter Liste — ein Ort, um einen Pfad von Grund auf zu tippen.
- Tippen, während eine Pfadleiste angezeigt wird, verwandelt das letzte Segment in ein kleines Eingabefeld mit Live-Autovervollständigung, die auf den aktuellen Ordner beschränkt ist.
- **Ein Pfad ab der Wurzel des Dateisystems kann getippt werden.** `/` vor einem leeren Feld öffnet einen solchen, statt eine Stufe zu vervollständigen, jeder Schrägstrich danach gehört dazu, und `~` ist dein Home-Ordner. Solange das Feld einen solchen Pfad enthält, listet das Dropdown die Maschine statt den Vault auf, und das öffnende Segment der Zeile tritt zur Seite — was im Feld steht, beginnt an der Wurzel und sagt das auch. Bei ausgeschaltetem *Zugriff auf externe Dateien* bleibt die Liste stattdessen leer, weil <kbd>Enter</kbd> den Pfad ohnehin ablehnen würde.
- **Eine Seite kann getippt werden, nicht nur ausgewählt.** `:graph`, `:search`, oder was auch immer deine Plugins registrieren — die Bezeichnungen, die die [Auflistung der Vault-Wurzel](#ein-bereich-ohne-datei) anbietet. Einen Doppelpunkt zu tippen ruft sie überall herbei, da kein Name einen enthalten darf, und <kbd>Enter</kbd> öffnet diese Ansicht in diesem Bereich. `:graph`, **innerhalb eines Ordners** getippt, öffnet den Graphen dieses Ordners — den auf `path:"jener/ordner"` gefilterten Graphen in dessen eigenem Suchfeld, als hätte man es dort getippt; an der Vault-Wurzel ist es der gesamte Graph. <kbd>Tab</kbd> vervollständigt den Namen, wie es den eines Ordners vervollständigt — und nimmt dabei mit, was das Feld sonst noch enthielt, da eine Seite in keinem Ordner liegt und nichts unter einer existiert. Ein Klick auf die Bezeichnung auf einer solchen Seite öffnet das Feld, das sie bereits enthält.
- **Was <kbd>Tab</kbd> schreiben würde, wird beim Tippen angeboten.** Solange jedes Kind, das mit dem beginnt, was du getippt hast, eine Weile lang übereinstimmt, erscheint diese Übereinstimmung nach dem Cursor, ausgewählt; wo sie aufhören übereinzustimmen, tut es der Schritt zum ersten von ihnen — oder zu der Zeile, zu der du mit den Pfeiltasten gegangen bist, da dies diejenige ist, zu der <kbd>Tab</kbd> gehen würde. Einen Namen zu überschreiben lässt seine Dateiendung stehen und bietet davor an, und ein Ordner, in den man gerade hineingetreten ist, bietet seinen ersten Schritt an, sodass es keinen Zustand gibt, in dem nichts angeboten wird und <kbd>Tab</kbd> trotzdem etwas schreibt. Tippe diese Buchstaben, und sie werden einer nach dem anderen verschluckt; tippe irgendetwas anderes, und es ist weg. <kbd>Tab</kbd> oder <kbd>End</kbd> übernimmt es ganz, <kbd>→</kbd> übernimmt einen Buchstaben davon, <kbd>Rücktaste</kbd> nimmt es zurück, ohne einen von dir getippten Buchstaben anzutasten, und nichts wird wieder angeboten, bis du tippst — sodass es immer einen Weg aus einem Namen gibt, den du nicht wolltest. Nach einem Druck auf <kbd>Tab</kbd> wird der nächste Schritt sofort angeboten, wie nach einem getippten Buchstaben. Was das Dropdown auflistet, wird durch das gefiltert, was **du** getippt hast, niemals durch das, was angeboten wurde.
- **Angebote ignorieren Groß-/Kleinschreibung.** `sch` bietet `Schemes` an, so geschrieben, wie der Name geschrieben ist; das Angebot zurückzunehmen gibt dir deine Buchstaben so zurück, wie du sie getippt hast. Existieren sowohl `Test` als auch `test`, wird das angeboten, das so geschrieben ist, wie du es getippt hast.
- Im Feld ist der angebotene Teil einfach **ausgewählt**. Die Liste ist der Ort, an dem er ausgeschrieben ist: jede Zeile zeigt den Teil davon, der **fett mit dem übereinstimmt, was du getippt hast**, wo auch immer im Namen die Übereinstimmung liegt — `kick` findet `Weekly kickoff` und zeigt das auch an. **Namen, die mit dem beginnen, was du getippt hast, stehen zuerst**, vor denen, die es nur enthalten, und sind mit einer Linie am Rand markiert: **blau**, wo sie mehr teilen, als du getippt hast, sodass <kbd>Tab</kbd> für alle davon etwas hinzuzufügen hat, und **grün** an der Verzweigung, an der sich das Angebot trennt — `te` bietet bei `test1`, `test2`, `text1` und `text2` `te`+`st` an, sodass die beiden `test`-Zeilen grün sind und die beiden `text`-Zeilen die einfache Linie behalten. Jede von ihnen **unterstreicht den Schritt, den <kbd>Tab</kbd> zu ihr hin machen würde**, nicht nur die, die angeboten wird, und die Unterstreichung folgt dem Angebot, wenn es sich ändert.
- **Tippen lässt die hervorgehobene Zeile los.** Die Liste öffnet sich bei dem Eintrag, in dem du gerade stehst, aber in dem Moment, in dem du tippst, geht es um woanders, und eine Hervorhebung, die niemand dorthin gesetzt hat, würde sonst als bereits getroffene Wahl gelesen.
- Das Angebot ist immer nur Text vor dir: Die Buchstaben, die du getippt hast, bleiben so geschrieben, wie du sie getippt hast, während du tippst, und das Angebot anzunehmen schreibt den Namen so um, wie der Ordner ihn schreibt, denn ein Pfad muss zur Festplatte passen. `sk` + <kbd>Tab</kbd> erreicht `Skyline`, nicht `skyline`.
- **Das Feld trägt die Farbe dessen, was es benennt**, dieselbe Farbe wie seine Zeile im Dropdown: Lila für eine Notiz, die eigene Notiz eines Ordners eingeschlossen, Orange für alles, was keine Notiz ist, Blau für die Notiz, auf der du dich befindest. Die Zeile, von der es die Farbe übernimmt, ist die, die genau so heißt, wie du getippt hast, andernfalls die hervorgehobene, andernfalls die erste, zu der dein Tippen noch führt.
- **Das Feld wird rot, sobald nichts mehr dem entspricht, was darin steht** — keine Datei, kein Ordner, und keine Zeile des Dropdowns führt noch dorthin. Von da an erstellt <kbd>Enter</kbd>, was im Feld steht, statt es zu öffnen, und das Rot sagt das, bevor du bestätigst. Bei einer Webadresse erscheint es nie, denn das ist kein Ort auf dieser Maschine, an dem man suchen würde. Das **gesamte** Feld wird gefärbt, nicht nur der fehlende Teil: Ein Textfeld kann nicht die Hälfte seines eigenen Inhalts einfärben. Im Verschieben-/Umbenennen-Modus behält das Feld sein eigenes Rot, für einen ungültigen Namen — dort ist ein Name, dem nichts entspricht, genau der Punkt. Dass ein Name **schon vergeben** ist, wird beim Bestätigen aufgegriffen, mit einem Dialog, der fragt, was mit der im Weg stehenden Datei geschehen soll — siehe [Ein Name, der vergeben ist](#ein-vergebener-name): jeder Name, der in Richtung `Notes.md` getippt wird, durchläuft Namen, die selbst Dateien sein könnten, sodass ihn Buchstabe für Buchstabe zu markieren vor einem Namen gewarnt hätte, nach dem noch niemand gefragt hatte.
- `/` bestätigt das Segment, das du gerade tippst, und steigt hinein, wobei alles dahinter erhalten bleibt — dasselbe, was <kbd>Tab</kbd> tut, wenn es hineingeht.
- <kbd>Rücktaste</kbd> in einem leeren Eingabefeld tritt zurück in den übergeordneten Ordner und öffnet dessen Namen erneut, mit dem Cursor am Ende. Dasselbe tut <kbd>Rücktaste</kbd> vor einer allein stehenden Dateiendung — ein Feld, das nur `.md` enthält, benennt nichts —, und die einzelne Dateiendung geht mit.
- **Auf einen Ordner zu klicken, während ein Feld offen ist, weitet es auf den gesamten Pfad nach diesem Ordner aus**, mit dem eigenen Namen des Ordners ausgewählt — dasselbe, was ein Klick darauf von der Zeile aus getan hätte, und alles, was das Feld enthielt, bleibt erhalten. Was im Feld steht, ist, solange es offen ist, das Ende der Zeile, sodass ein weiter oben angeklickter Ordner den Pfad zurückgibt, den die Sitzung durchlaufen hat, statt dem, bei dem die Notiz begann.
- **Mit den Pfeiltasten über den Anfang des Feldes hinauszugehen holt den davor liegenden Ordner herein**, als wäre der gesamte Pfad eine einzige Textzeile. Steht der Cursor ganz am Anfang, nimmt <kbd>←</kbd> diesen Ordner ins Feld auf und landet am Ende seines Namens, <kbd>Strg</kbd>+<kbd>←</kbd> landet an seinem Anfang, und <kbd>Pos1</kbd> nimmt jeden Ordner bis zur Vault-Wurzel — oder bis zu dem Ort, den du gewählt hast, außerhalb des Vaults — auf einmal auf. Hältst du <kbd>Umschalt</kbd>, dehnt sich die Auswahl über das Hereingeholte aus. Auf macOS ist der Wortsprung <kbd>Option</kbd>+<kbd>←</kbd>, und <kbd>Cmd</kbd>+<kbd>←</kbd> ist <kbd>Pos1</kbd>. Überall außer am Anfang sind das gewöhnliche Textbearbeitungstasten. **Während das Dropdown angezeigt wird, gehören <kbd>Pos1</kbd>, <kbd>Ende</kbd>, <kbd>Bild auf</kbd> und <kbd>Bild ab</kbd> ihm** — erste Zeile, letzte Zeile, eine Seite nach oben, eine Seite nach unten, wobei eine Seite das ist, was die Liste zeigt, und die hervorgehobene Zeile ihren Platz auf dem Bildschirm behält — und erreichen den Text erst, nachdem es sich geschlossen hat; <kbd>Umschalt</kbd>+<kbd>Pos1</kbd> nimmt auch bei offener Liste jeden Ordner auf.
- **Die Liste folgt dem Cursor.** Wähle einen anderen Teil des Pfades aus — ziehe darüber, klicke hinein, oder gehe mit den Pfeiltasten entlang — und das Dropdown listet die Kinder *dieses* Ordners auf, nicht des, bei dem das Feld geöffnet wurde. Der Ordner wird aus den Chips plus dem, was von dem Feld vor dem Cursor liegt, ermittelt, sodass ein Klick in `Notes.md` in einem Feld, das `2026/Notes.md` enthält, auflistet, was in `2026` liegt. Auf eine Zeile zu zeigen schreibt sie in das Segment, in dem der Cursor steht, und den Zeiger von der Liste zu nehmen gibt dir deinen Text und deine Auswahl zurück, genau wie sie waren.
- **Eine Auswahl aus dem Feld herauszuziehen** und sie irgendwo anders loszulassen, schließt es nicht. Ein Klick, der im Feld beginnt, gehört zur Bearbeitung, wie weit er auch reicht; nur ein Klick, der *außerhalb* beginnt, ist ein Klick weg.
- <kbd>Enter</kbd> bestätigt — und wenn das Feld überhaupt nichts benennt, wie in einem leeren Ordner, in dem es nie etwas zu vervollständigen gab, sagt es *Keine Datei ausgewählt* und bleibt offen, statt sich zu schließen, als wäre etwas ausgewählt worden. <kbd>Esc</kbd> oder ein Klick anderswo bricht zurück zum tatsächlichen Pfad der Datei ab. Ein einziger Druck auf <kbd>Esc</kbd> genügt: Er schließt das Dropdown, verlässt das Feld und gibt den Fokus an die Notiz zurück, statt einen Druck pro Ebene zu benötigen.

Das Eingabefeld ist schmucklos — kein Kasten, kein Rahmen —, sodass es sich wie der Pfadtext selbst liest, und es wächst beim Tippen mit.

## Jeder Teil der Zeile, Knopf für Knopf

Die ganze Zeile auf einen Blick. Die Rechtsklick-Spalte ist das, was **ein**
Druck dir gibt; dieser Knopf zählt auch Drücke mit, und [seine eigene
Tabelle](#rechtsklick-ein-druck-zwei-drücke-drei) weiter unten enthält den
zweiten, dritten und vierten. Diese hier geht davon aus, dass **Ordnername
öffnet das Dropdown** aktiv ist, was die Voreinstellung ist — ist es aus,
tauschen Ordnername und Trennzeichen die erste Spalte, wie
[die Tabelle ganz oben](#die-pfadleiste) sagt.

| Wo du drückst | Klick | Doppelklick | <kbd>Strg</kbd>+Klick, oder Mittelklick | Rechtsklick | Etwas darauf ablegen |
| --- | --- | --- | --- | --- | --- |
| Der **Vault-Name** | Öffnet das Orte-Dropdown — andere Vaults, Home, die Dateisystemwurzel, eingehängte Laufwerke. Standardmäßig aus; ist es aus, wird der Vault stattdessen im Datei-Explorer angezeigt | Markiert den **ganzen absoluten Pfad**. Dieses Dropdown öffnet sich mit dem Pfad bereits im Feld und nur dem eigenen Teil des Vaults markiert; ein zweiter Druck weitet über den Rest aus. Nichts zum Ausweiten bei ausgeschaltetem Dropdown | Ein Tab ohne Inhalt, stehend an der Vault-Wurzel mit bereits eingeblendeter Liste — irgendwo, um einen Pfad von Grund auf zu tippen | Das eigene Kontextmenü des Vaults: was mit dem Vault gemacht werden kann, den dieses Segment benennt | Eine **Datei** wandert an die Vault-Wurzel. **Text** öffnet das Feld an der Wurzel, um die Notiz zu benennen, die daraus werden soll |
| Ein **Ordnername** | Wählt diesen Ordner zum Bearbeiten aus, der Inhalt seines übergeordneten Ordners darunter aufgelistet | Tippt diesen Ordner und alles darunter neu ein | Öffnet diesen Ordner in einem neuen Tab | Das Kontextmenü dieses Ordners — das eigene des Datei-Explorers | Eine **Datei** wandert in diesen Ordner. **Text** öffnet das Feld dort, um die Notiz zu benennen, die daraus werden soll |
| Ein **Trennzeichen** | Öffnet den Ordner davor — dessen Ordnernotiz, wo ein Ordnernotiz-Plugin läuft und eine existiert, andernfalls zeigt und klappt es ihn im Datei-Explorer auf | **Erstellt die Notiz dieses Ordners** und geht zu ihr, wo ein Ordnernotiz-Plugin läuft und der Ordner noch keine hat. Wo bereits eine existiert, ist dies nur der einzelne Druck erneut | Die Ordnernotiz in einem neuen Tab, wo eine existiert; sonst ein Tab, der an diesem Ordner steht, mit eingeblendeter Liste | Dasselbe Kontextmenü des Ordners, das der Name gibt — das seiner Ordnernotiz, wo er eine hat | Ans Ende der Notiz dieses Ordners, wo er eine hat, sobald du bestätigst |
| Der **Name der Notiz** | Öffnet den Namen zum Bearbeiten — die Ordner bleiben als Chips daneben — mit allem außer der Dateiendung markiert | Nimmt auch die Dateiendung in die Markierung auf | Öffnet die Notiz in einem neuen Tab | Das Kontextmenü der Datei — dasselbe, das die Zeile des Datei-Explorers gibt | Ans Ende dieser Notiz, sobald du bestätigst |
| Der **leere Bereich** | Öffnet den **ganzen Pfad** zum Bearbeiten, markiert bis zur Dateiendung. Die Ordner kommen mit ins Feld, was dies zur Geste zum Neutippen eines Pfads macht statt eines Namens | Nimmt auch die Dateiendung in die Markierung auf | <kbd>Strg</kbd> öffnet diese Notiz erneut in einem eigenen Tab, kurz im Datei-Explorer aufblitzend, damit die Kopie nicht mit dem ersten verwechselt wird. Mittelklick ist *nicht* diese Geste: er überschreibt den Pfad | Markiert den ganzen Pfad und bietet an, was mit markiertem Text gemacht werden kann | |

**Der zweite Druck folgt dem ersten.** Das Erstellen der Notiz eines Ordners
liegt auf dem Teil der Zeile, der diesen Ordner *öffnet* — das ist standardmäßig
das Trennzeichen und bei ausgeschalteter Vertauschung der Ordnername — demselben
Ziel, das die Unterstreichung markiert, und demselben, das ein einzelner Druck
bereits nach der Ordnernotiz fragt. Es wird nur angeboten, während ein
Ordnernotiz-Plugin läuft, da eine Ordnernotiz eine Konvention ist und keine
Tatsache über das Dateisystem, und nur dort, wo der Ordner noch keine hat. Wo
sie liegt und wie sie heißt, wird aus den eigenen Einstellungen von **Folder
notes** gelesen, sodass ein Vault, der seine Ordnernotizen neben dem Ordner
aufbewahrt oder sie `_index` nennt, eine davon erhält; die Datei selbst ist
immer Markdown, was der eigene Standard-Erstellbefehl dieses Plugins erzeugt
und was es unabhängig vom eingestellten Dateityp des Vaults vorfindet. Der
Verschieben-/Umbenennen-Modus ist davon vollständig ausgenommen — nichts auf
der Zeile öffnet einen Ordner, während eine Verschiebung aussteht.

**Klicks auf den Namen gehen weiter.** Die vier Stufen sind dieselben vier, die
die Umbenennen-Taste durchläuft, in derselben Reihenfolge: der Name, der Name
mit seiner Dateiendung, der Pfad ab dem Vault, der Pfad ab der Systemwurzel.
Ein dritter Klick erreicht also den Vault-Pfad und ein vierter den der
Maschine — dieselben vier Dinge, die dir <kbd>Tab</kbd> über das Ende des
Felds hinaus gibt, und dieselben vier, die der rechte Knopf *kopiert* statt zu
markieren.

**Hovern** beantwortet sich selbst und ändert nie etwas: ein gekürzter Name
kehrt vollständig zurück, solange du darauf zeigst, und das Symbol am Anfang
der Zeile sagt, wo der Vault liegt.

## Rechtsklick: ein Druck, zwei Drücke, drei

Jedes Ziel auf der Zeile beantwortet einen Rechtsklick, und wie viele Drücke du
ihm gibst, entscheidet, was du bekommst. Weil noch ein zweiter Druck kommen
könnte, wartet der erste etwa ein Drittel einer Sekunde, bevor er handelt — der
Preis dafür, drei Gesten auf einen Knopf zu legen.

| Wo du drückst | Einmal | Zweimal | Dreimal |
| --- | --- | --- | --- |
| Der **Vault-Name** | Das Kontextmenü des Vaults: was mit dem Vault gemacht werden kann, den dieses Segment benennt — einschließlich *Diesen Vault öffnen*, wo dieser Vault nicht der ist, in dem du dich befindest | Kopiert den Namen des Vaults | Kopiert, wo der Vault liegt — und ein vierter Druck, wo die offene Datei liegt |
| Ein **Trennzeichen** | Das Menü dieses Ordners — das seiner Ordnernotiz, wo ein Ordnernotiz-Plugin läuft und der Ordner eine hat | | |
| Ein **Ordnername** | Das Menü dieses Ordners | Kopiert den Namen des Ordners | Kopiert ihn und alles rechts davon |
| Der **Name der Notiz** | Das Menü der Datei — dasselbe, das die Zeile des Datei-Explorers gibt | Kopiert den Namen | Kopiert ihn mit seiner Dateiendung |
| Der **leere Bereich** | | Kopiert den Pfad ab deinem Vault-Ordner, ohne die Dateiendung | Dasselbe, mit ihr |

Ein einzelner Druck auf den **Vault-Namen** öffnet, was mit dem gemacht werden
kann, was dieses Segment gerade benennt. Für **den Vault, in dem du dich
befindest**: ihn in einem neuen Fenster öffnen, Vaults verwalten, kopieren, wo
er liegt, seine ID kopieren, ihn in deinem Dateimanager anzeigen. Für **einen
anderen Vault**, erreicht über das Orte-Dropdown, dasselbe minus dem neuen
Fenster — das würde *diesen* Vault öffnen, nicht jenen — plus dem einen, das nur
ein Vault bieten kann, in dem du dich nicht befindest: **Diesen Vault öffnen**.
Er wird Obsidian gegenüber über seine ID benannt statt über seinen Ordnernamen,
da zwei Vaults sich einen teilen könnten. Für einen Ort, der überhaupt kein
Vault ist — dein Home-Ordner, ein eingehängtes Laufwerk — gibt es keine ID zum
Kopieren und nichts zum Öffnen, und das Menü sagt das, indem es sie nicht
anbietet.

Dies ist nicht Obsidians eigenes Drei-Punkte-Menü, das zum Startfenster gehört
und aus einem laufenden Vault heraus nicht geöffnet werden kann — dies sind
dieselben Einträge, neu aufgebaut, in Obsidians eigenem Wortlaut, entnommen aus
seinen Befehlen, damit sie in deiner Sprache ankommen. Drei Einträge jenes
Menüs sind absichtlich **nicht** hier: *Vault umbenennen*, *Vault verschieben*
und *Aus Liste entfernen* wirken alle auf den eigenen Ordner des Vaults oder
auf Obsidians Register der Vaults, und das mit dem Vault zu tun, in dem du
gerade stehst — mit seinen offenen Dateien und laufenden Beobachtern — ist,
wie ein Vault kaputtgeht. Öffne die Vault-Verwaltung (*Anderen Vault öffnen*)
und erledige sie dort, wo der Vault geschlossen ist.

Die beiden Kopien auf dem **leeren Bereich** sind die Zeile, wie sie geschrieben
steht — was ein Link oder eine Suche will — und die auf dem **Vault-Namen** sind
die Pfade, die das Dateisystem kennt, was das ist, was alles außerhalb von
Obsidian will. Jeder Druck dort weitet aus, wofür die Kopie taugt: zwei geben
den Namen des Vaults, drei, wo der Vault liegt, vier, wo die offene Datei
liegt. Obsidian trifft dieselbe Unterscheidung in seinen eigenen zwei Befehlen,
*Vom Vault-Ordner* und *Von der Systemwurzel*; hier liegen die nach außen
gerichteten auf dem Segment, das selbst außerhalb des Pfads steht.

All das funktioniert auch außerhalb des Vaults, auf denselben Zielen.

Jede Kopie meldet sich mit einem Hinweis, denn eine Kopie hinterlässt nichts
auf dem Bildschirm, das zeigt, dass sie stattgefunden hat, und ein falsch
gezählter Druck sollte nicht wie ein erfolgreicher aussehen.

## Modifikatoren: woanders öffnen

Der Name der Notiz und die Ordner-Segmente verhalten sich wie ihre Zeilen im
Datei-Explorer.

| | Auf dem Namen der Notiz | Auf einem Ordner-Segment |
| --- | --- | --- |
| Einfacher Klick | Namen bearbeiten | Diesen Ordner durchsuchen |
| <kbd>Strg</kbd> / Mittelklick | Notiz in neuem Tab öffnen | Ordner an einen neuen Tab senden |
| <kbd>Strg</kbd>+<kbd>Alt</kbd> | Ein Split | Ein Split |
| Ziehen | Die Notiz, überallhin, wo Obsidian eine Datei annimmt | Der Ordner, ebenso — die Tableiste eingeschlossen |

Ein Ordner ist nichts, was Obsidian öffnen kann, also tut das Senden eines
Ordners an einen Tab eines von zwei Dingen: öffnet dessen Ordnernotiz, wo ein
Ordnernotiz-Plugin läuft und eine existiert, oder öffnet einen leeren Tab,
dessen Pfadleiste bereits in diesem Ordner steht — dir bleibt nur, den Namen zu
tippen. Einen Ordner-Segment auf die **Tableiste** fallenzulassen tut dasselbe,
in einem neuen Tab dort, wo du loslässt — Obsidians Tableiste nimmt von sich
aus nur Dateien an, sodass ein aus dem Datei-Explorer gezogener Ordner dort
weiterhin abgewiesen wird.

## Tab: erst den Namen vervollständigen, dann den Pfad, dann die Auswahl weiten

<kbd>Tab</kbd> vervollständigt wie eine Shell: **ein Druck verlängert das Getippte so weit, wie sich die Namen in diesem Ordner einig sind, und stoppt, wo sie sich uneinig werden.** Tippe `Sk`, wo nur `Sketches` so beginnt, und das Wort ist fertig; tippe `Al`, wo `Alpha-one`, `Alpha-two` und `Alpine` das alle tun, und du bekommst `Alp`, weil das nächste Zeichen eine Frage ist, die nur du beantworten kannst.

Drückst du noch einmal, ohne zu tippen, geht es auf einen Namen zu — die Zeile, die das Dropdown hervorhebt, oder die erste — und stoppt bei dessen nächster Uneindeutigkeit: `Alpha-`, dann `Alpha-one`. Die Liste öffnet sich dort, wo du gerade bist, sodass der erste Druck im eigenen Ordner die geöffnete Notiz ansteuert und nicht das, was zuerst sortiert wird.

**Ein Druck entscheidet nie für dich zwischen Namen.** <kbd>Tab</kbd> tritt in einen Ordner ein, sobald das Getippte nur einen Kandidaten übrig lässt, oder sobald du den vollen Namen des Ordners getippt hast und kein *anderer Ordner* ihn verlängert. Tut das einer — `Schemes` neben `Schemes2026` — vervollständigt <kbd>Tab</kbd> weiter zum längeren Namen; <kbd>Enter</kbd> und das Dropdown sind die Gesten, die *genau diesen* meinen.

Eine **Datei** hält einen Ordner nie auf diese Weise auf. Ein Ordner neben einer Notiz seines eigenen Namens ist eine Ordnernotiz, keine Gabelung im Pfad, und <kbd>Tab</kbd> geht durch Ordner — also wird `Projects` mit einer `Projects.md` daneben genauso betreten wie jeder andere.

Zwei kleinere Dinge folgen daraus: Was im Feld landet, ist so geschrieben, wie der Ordner es schreibt, also wird aus `sk` `Sketches`; und nur der gerade getippte Name wird ersetzt, sodass ein Pfad mit mehr rechts davon das behält.

Wird beim Tippen ein Name angeboten, **schreibt** <kbd>Tab</kbd> **genau das Angebotene**: Das Angebot ist immer das, was der Druck schreiben würde, und Unterstrich und grüne Linie im Dropdown sagen dasselbe, sodass das, was du hinter dem Cursor siehst, genau das ist, was du bekommst. Wo sich die Namen uneinig werden, ist das der Schritt zum ersten von ihnen — oder zu der Zeile, zu der du mit den Pfeiltasten gegangen bist, die <kbd>Tab</kbd> nimmt statt der danebenstehenden — geh also mit den Pfeiltasten zu der gewünschten, oder tippe über die Gabelung hinaus, bevor du drückst. Nur wo das Angebot *einen einzigen* Namen übrig lässt, tritt derselbe Druck in ihn ein.

Beim Namen der Datei anzukommen **ist** die erste Sprosse — kein Druck wird darauf verwendet, den Cursor ans Ende eines Namens zu setzen, den er gleich markieren wird. Von dort an bewegen sich die Drücke nicht mehr entlang des Pfads, sondern beginnen, die Auswahl zu weiten:

1. der Name
2. der Name mit seiner Erweiterung
3. der Pfad ab deinem Vault-Ordner
4. der Pfad ab der Systemwurzel
5. zurück an den Anfang des Pfads **so, wie er jetzt dasteht** — dort stehend, wo der Weg begann, erstes Segment markiert, bereit, erneut gegangen zu werden

Ein vierter Klick erreicht dieselbe vierte Sprosse direkt.

Weiten **weitet** immer nur. Ein Name, der im Feld bereits vollständig ist — durch dieselbe Taste vervollständigt oder aus dem Dropdown gewählt — wird als Ganzes markiert, statt ihm zuerst die Erweiterung wieder abzunehmen: Die erste Sprosse ist für einen Namen gedacht, bei dem der Weg gerade *angekommen* ist, wo die Erweiterung noch nicht das Thema ist.

Die Leiter ist dort, wo der Weg **ankommt**, nicht, wo er beginnt. Klicke einen Ordner mitten im Pfad an, und das Feld öffnet sich mit allem darunter, wobei der Name dieses Ordners markiert ist; jedes <kbd>Tab</kbd> nimmt dann **einen** Ordner — markiert den nächsten, behält den Rest des Pfads dahinter — und erst wenn nichts als der Dateiname übrig ist, beginnt das Weiten:

| Druck | Chips | Feld | markiert |
| --- | --- | --- | --- |
| `a` geklickt | | `a/b/c/leaf.md` | `a` |
| <kbd>Tab</kbd> | `a` | `b/c/leaf.md` | `b` |
| <kbd>Tab</kbd> | `a › b` | `c/leaf.md` | `c` |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf` — die erste Sprosse |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf.md` |

**Ein Name, der eingesetzt ist, ist eingesetzt, egal wie du ihn eingesetzt hast.** Ihn mit
<kbd>Tab</kbd> zu vervollständigen, mit `/` zu bestätigen und ihn aus dem Dropdown zu wählen,
lassen die Zeile alle an derselben Stelle mit demselben Pfad, sodass der Druck nach der
Geste dasselbe bedeutet, egal auf welchem Weg du dorthin kamst. Einen Ordner aus der
Liste zu wählen, leerte früher stattdessen das Feld und warf einen Pfad weg, den das
Erreichen desselben Ordners mit <kbd>Tab</kbd> behalten hätte.

**Ein Pfad, den du noch schreibst, kommt vollständig mit.** In genau den Ordner einzutreten, an dem der Rest des Pfads hängt, ist keine Behauptung, dass der Rest existiert — so wird ein Pfad seiner selbst vorausgeschrieben, und die Ordner, die er benennt, sind die, die <kbd>Enter</kbd> gleich anlegen wird. Also behält der Weg von `Dokumente/plans/untitled.md` hinein nach `Dokumente` `plans/untitled.md` vor dir, ob `plans` schon existiert oder nicht. Dasselbe gilt für einen Pfad, den du aus dem Nichts getippt hast: Nichts davon war von irgendwoher geerbt, also wird auch nichts davon weggenommen.

**Einen Schritt gegen einen anderen zu tauschen, ist eine andere Geschichte — dann kommt der Pfad nur so weit mit, wie er wirklich vorhanden ist.** Tauschst du einen Ordner mitten im Pfad gegen einen Nachbarn — klicke `a`, tippe einen anderen Namen, drücke <kbd>Tab</kbd> — kommt alles darunter mit, denn der Pfad, auf dem du warst, ist meist das meiste vom gewünschten Pfad. Nur was dort drüben wirklich existiert, überlebt den Wechsel, sodass Feld und Dropdown daneben nie widersprüchlich sind: Was vor dir übrig bleibt, ist ein Pfad, den du wirklich gehen könntest. Ausgehend von `a/b/c/leaf.md`, mit geklicktem `a` und markiertem Namen:

| was du einsetzt | Chips | Feld | markiert |
| --- | --- | --- | --- |
| `x`, das gar kein `b` hat | `x` | | nichts kam mit |
| `y`, das ein `b`, aber kein `c` darin hat | `y` | `b` | `b` |
| `z`, ein Zwilling von `a` bis ganz unten | `z` | `b/c/leaf.md` | `b` |

Ein Ordner, der so allein stehen bleibt, ist immer noch ein Ordner zum Betreten: Der Druck danach tritt ein, statt eine Auswahl über seinem Namen zu weiten.

Ein Name, dem **nichts** im Ordner entspricht, wird anders beantwortet, weil nichts durch ihn eingesetzt wurde: Der Druck markiert das Getippte, bereit, dass du es überschreibst, statt mit etwas anderem zu antworten.

Das Ganze ist eine **Schleife, und sie durchzugehen kostet nichts**: Der Druck nach der letzten Sprosse gibt die Zeile zurück an den Anfang des Pfads, samt Ordnern, bereit, erneut die Runde zu drehen. Das Einzige, was die Zeile je verlässt, ist das absolute Präfix, bei dem Druck, der aufhört, es anzuzeigen.

Was zurückkommt, ist **der Pfad, den du gebaut hast**, nicht der, von dem du losgegangen bist. Verzweige den Weg auf halber Strecke — wähle einen anderen Nachbarn aus dem Dropdown, vervollständige zu einem anderen Namen — und die Runde schließt sich dort, wo du tatsächlich stehst; die vier Sprossen davor beschreiben denselben Pfad, und diese hier war früher die ungerade Sprosse, die die Vergangenheit beschrieb.

<kbd>Shift</kbd>+<kbd>Tab</kbd> schließt denselben Ring in die andere Richtung: am Anfang des Pfads, mit nichts mehr zurückzugeben und nirgends weiter oben, springt der nächste Druck zur **fernen** Sprosse — dem Pfad ab der Systemwurzel — und macht von dort mit dem Verengen weiter. Keine Richtung endet in einer Sackgasse.

Sie verschwendet auch keinen Druck auf eine Sprosse, die sie schon gezeigt hat. Unterhalb der letzten Sprosse — der Name ohne seine Erweiterung — ist die Leiter zu Ende, und *derselbe Druck* verlässt den Ordner: der Pfad ab der Systemwurzel, der Pfad ab deinem Vault, der Name, der Name ohne Erweiterung, dann der Ordner, jeweils ein Schritt.

Es wird auch kein Druck auf eine Sprosse verwendet, die nichts ändert: Der Klick auf den Namen einer Notiz zeigt ihn bereits ohne Erweiterung, was die erste Sprosse zeigt, sodass <kbd>Tab</kbd> von dort mit der zweiten beginnt.

Jede Sprosse ändert, was *im* Feld steht, nicht nur, was hervorgehoben ist — eine Auswahl muss über dem Text stehen, den sie benennt, sonst würde <kbd>Enter</kbd> etwas anderes bestätigen als das, was sichtbar ausgewählt ist. Die Leiter gehört zu einer Bearbeitungssitzung: Klicke weg oder tippe irgendetwas, und das nächste <kbd>Tab</kbd> vervollständigt wieder einen Namen.

### <kbd>Shift</kbd>+<kbd>Tab</kbd>: derselbe Weg rückwärts

<kbd>Shift</kbd>+<kbd>Tab</kbd> nimmt pro Druck einen Schritt zurück, in der Reihenfolge, in der die Drücke gemacht wurden: Die Auswahl verengt sich Sprosse um Sprosse, jede Vervollständigung wird zurückgegeben, und aus jedem Ordner wird herausgetreten — sein Name kehrt ins Feld zurück, damit du ihn bearbeiten statt neu tippen kannst.

**Auf dem Rückweg wird nichts gelöscht.** Eine Vervollständigung wird zurückgegeben, indem die von ihr hinzugefügten Zeichen *markiert* werden, genau wie beim Vorwärtsgehen markiert wird, worüber geweitet wurde — der Name bleibt vor dir, und jeder weitere Druck markiert einen Schritt mehr davon:

| | Feld | markiert |
| --- | --- | --- |
| hineingegangen | `Alpha-one` | |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `ha-one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `Alpha-one` |

Tippen ersetzt den markierten Teil, wie überall sonst auch. <kbd>Tab</kbd> setzt genau das zurück ein, was die Markierung zurückgegeben hat, sodass zwei Schritte hinaus und zwei Schritte wieder hinein dich dorthin zurückbringen, wo du warst.

Ist der ganze Name erst einmal markiert, gibt es nichts mehr, was ein Druck dort hingesetzt hätte, und der nächste Druck geht *den Pfad hinauf*: Er verlässt den Ordner, in dem du stehst, genau wie <kbd>Backspace</kbd> bei einem leeren Feld. Auch das kostet nichts — der Name des Ordners kommt zurück ins Feld, **vor** das, was schon darin stand, markiert, was genau dem Text entspricht, den ein Klick auf diesen Ordner ergeben hätte. Zurück ist eine Richtung, kein Rückgängig-Verlauf — aber den Namen zuerst zu markieren bedeutet, dass ein Druck nie zugleich das Geschriebene zurücknimmt und dich aus dem Ordner führt, in dem du es geschrieben hast.

Text, der **bereits ausgewählt** geöffnet wird — was ein Klick auf einen Ordner hinterlässt — ist der Name, an dem <kbd>Tab</kbd> als Nächstes arbeitet: Er wird vervollständigt und betreten wie jeder andere, und Tippen ersetzt ihn. Nur der Fokus-Befehl öffnet auf einer Sprosse der Leiter selbst, weil er dir den ganzen Pfad zeigt statt eines zu betretenden Ordners.

## Etwas tippen, das kein Pfad ist

| Was du tippst | Was passiert |
| --- | --- |
| `https://…` | Öffnet in einem neuen Tab in Obsidians **Web-Viewer**, falls du dieses Kernplugin aktiviert hast; sonst in deinem Desktop-Browser |
| `obsidian://…` | Wird an Obsidians eigenen URI-Handler übergeben |
| `file:///…` | Wird decodiert und geöffnet: als echte Notiz, wenn sie in deinem Vault liegt, sonst im Viewer |
| `/home/du/a%20b.md` | Dasselbe, für einen Pfad, der aus einem Browser oder Dateimanager eingefügt wurde |

Nur explizite Schemata zählen — eine Notiz namens `100%20` bleibt eine Notiz. Ein `/`, das zu einem Schema gehört, bleibt wörtlich, statt in einen Ordner abzusteigen, sodass eine URL von Hand getippt und nicht nur eingefügt werden kann.

## Ein Befehl für die Tastatur

**Pfadleiste fokussieren** öffnet das Feld auf dem Namen der Notiz und geht ihn so ab wie <kbd>F2</kbd> — der Name, der Name mit seiner Erweiterung, der Pfad ab deinem Vault, der Pfad ab der Systemwurzel — und der Druck danach schließt das Feld und setzt den Cursor zurück in die Notiz. Er benennt nicht um: Enter navigiert, wie in jedem anderen Feld. Er hat von Haus aus keine eigene Taste, weil Obsidians Richtlinien Plugins davon abraten, sich eine zu nehmen; die Zeile **Hotkeys** am Ende der Einstellungen dieses Plugins öffnet *Einstellungen → Hotkeys* mit nur dessen Befehlen, sodass du ihn dort binden kannst.

## Navigation rührt die offene Datei nie an

Im Standardmodus (Navigation) wird die gerade geöffnete Notiz **nie** umbenannt oder verschoben.

- Ein Pfad, der zu einer vorhandenen Datei aufgelöst wird, öffnet sie.
- Ein Pfad, den es noch nicht gibt, wird einfach angelegt, samt fehlender übergeordneter Ordner, und geöffnet. Jede so angelegte Datei und jeder so angelegte Ordner meldet das in einer Benachrichtigung — ein neuer Ordner ist sonst unsichtbar, bis du danach suchst — und Obsidians eigener Papierkorb macht einen ungewollten mit einem Tastendruck rückgängig.
- **Außerhalb deines Vaults fragt er trotzdem zuerst nach.** Dort draußen schreibt derselbe Tippfehler in einen Systemordner, wo weder die Benachrichtigung noch Obsidians Papierkorb viel Trost sind.

## <kbd>Strg</kbd> — neuer Tab, und Kopieren statt Verschieben

Eine Notiz, die **innerhalb des Vaults erstellt, verschoben oder kopiert wird, wird dort gezeigt, wo sie gelandet ist**, im Dateiexplorer, kurz markiert in Obsidians Akzentfarbe — der Baum ist, wo du danach nach ihr suchst, also wird sie dir vor Augen gestellt statt in einem Ordner belassen, der vielleicht nicht einmal geöffnet ist. Auch das Duplizieren sagt das: Eine Kopie lässt das Original an seinem Platz und öffnet die Kopie in ihrem eigenen Fenster, was ohne ein Wort leicht so gelesen werden kann, als wäre nichts passiert.

Hältst du <kbd>Strg</kbd> (<kbd>Cmd</kbd> unter macOS), während du eine Datei aus dem Dropdown wählst oder <kbd>Enter</kbd> auf einem Pfad drückst, landet das Ergebnis in einem **neuen Tab** statt in diesem:

| | Ohne | Mit <kbd>Strg</kbd> |
| --- | --- | --- |
| Vorhandene Datei wählen oder tippen | Öffnet hier | Öffnet in neuem Tab |
| Pfad tippen, den es nicht gibt | Fragt nach, öffnet dann hier | Fragt nach, öffnet dann in neuem Tab |
| Pfad im Umbenennen-/Verschieben-Modus bestätigen | **Verschiebt** die Notiz dorthin | **Kopiert** sie dorthin und öffnet die Kopie in neuem Tab |

Der Modifikator wird nach Obsidians eigener Regel gelesen und verhält sich daher genau wie auf einem Link oder einer Zeile im Dateiexplorer — Mittelklick heißt ebenfalls „neuer Tab“, <kbd>Strg</kbd>+<kbd>Alt</kbd> heißt geteilte Ansicht und <kbd>Strg</kbd>+<kbd>Alt</kbd>+<kbd>Umschalt</kbd> ein neues Fenster.

Kopieren weigert sich, zu überschreiben, genau wie Verschieben — auch auf den eigenen Pfad der Notiz, wo es nichts Sinnvolles zu kopieren gibt. Außerhalb des Vaults wird diese Weigerung ebenfalls laut ausgesprochen.

Das alles funktioniert **mit geöffnetem Dropdown** ebenso wie ohne: Bei einer hervorgehobenen Zeile gilt der Modifikator für diese Zeile, und steht nichts hervorgehoben da, gilt er für das Getippte.

## Außerhalb des Vaults browsen

**Das ist standardmäßig aus.** Schalte zuerst **Zugriff auf externe Dateien** in den Einstellungen ein — außerhalb des Vaults zu lesen und zu schreiben ist das Einzige, was dieses Plugin tut und Obsidian selbst nicht, deshalb wird es bewusst eingeschaltet statt abgeschaltet. Ist es aus, zeigt der Vault-Name lediglich deinen Vault im Dateiexplorer, und nichts hiervon schaut je darüber hinaus.

Klickst du auf den **Vault-Namen** (oder das 🏠-Symbol, wenn *Vault-Namen anzeigen* aus ist), öffnet sich ein Dropdown von Orten statt von Inhalten. Das Feld, das sich öffnet, enthält **den gesamten Pfad, auf dem du warst, vollständig ausgeschrieben**, mit dem Ort, an dem er beginnt, ausgewählt — wählst du also woanders hin oder tippst über die Auswahl, tauscht das nur diesen führenden Teil aus und lässt den Rest des Pfads vor dir stehen. **Drückst du den Namen ein zweites Mal** — ein Doppelklick — weitet sich die Markierung über den gesamten Namen aus, so wird der absolute Pfad in einer Geste erfasst, statt ihn per Hand zu überstreichen. Überlegst du es dir anders, bringt <kbd>Esc</kbd> die Zeile zurück, wie sie war.

Auch hier wird dir beim Tippen der Rest eines Ortsnamens angeboten wie überall sonst, und <kbd>Tab</kbd> **setzt diesen Ort ein** — den, auf den du gerade zeigst, oder den, den der Name nur bedeuten kann. Teilen sich mehrere Orte noch, was du getippt hast, hält der Druck an der Weggabelung, wie überall. Zeigst du auf einen Ort, wird **dessen eigener Pfad** angezeigt, vollständig ausgewählt, gefolgt vom Pfad deiner Notiz, aber nur so weit, wie er dort drüben tatsächlich reicht — genau das, wo dich die Auswahl hinbringen würde. Ein Ort ist kein Schritt innerhalb des angezeigten Pfads, sondern ein Punkt, von dem aus der ganze Pfad gezählt wird, sodass nichts davon, wo du warst, davor stehen bleibt.

Die angebotenen Orte:

- **Deine anderen Vaults**, gelesen aus Obsidians eigener Registrierung, zuletzt geöffnete zuerst, jeder unter Obsidians eigenem Vault-Symbol — dem, das die App selbst für Vault-Befehle verwendet. Der bereits geöffnete Vault bekommt stattdessen ein Haus: er ist der Ausgangspunkt der Zeile, kein Ziel.
- **Der Persönliche Ordner**, unter seinem Kontonamen, gekennzeichnet mit `~`. Lucide hat keine Tilde, deshalb zeichnet das Plugin dieses eine Symbol selbst auf Lucides eigenem 24×24-Raster und mit derselben Strichstärke — ein fehlendes Symbol des Satzes, kein Textzeichen zwischen Symbolen.
- Das **Wurzelverzeichnis**, beschriftet mit `root` — unübersetzt, denn so heißt es auf jedem System — statt `/`, was neben dem folgenden Trennzeichen wie ein leerer Schritt aussähe.
- **Eingehängte Laufwerke**, mit einem Symbol je Art, soweit sich das günstig feststellen lässt: Netzwerkfreigaben, optische Medien, Disketten und Wechselmedien bekommen ein eigenes; alles andere ein allgemeines Laufwerkssymbol. Unter Windows erscheinen Laufwerke als `C:` mit allgemeinem Symbol — Datenträgernamen und genaue Typen bräuchten WMI, was bewusst unterbleibt.

Einen anderen Vault zu wählen **wechselt Obsidian nicht dorthin.** Alles Geöffnete bleibt offen; die Pfadleiste beginnt lediglich, dort zu browsen. Genau darum sitzt das hier in der Pfadleiste, statt an den Vault-Umschalter der Seitenleiste zu verweisen.

Zudem landet es **so nah an der Notiz, auf der du warst, wie dieser Ort tatsächlich reicht**.

- Wenn der gewählte Ort die Notiz *enthält* — der Persönliche Ordner oder wo auch immer deine Vaults liegen —, bekommst du ihren Pfad von dort aus: wählst du `~` bei geöffneter `takeaways.md`, liest das Feld `Vaults/dein-vault/takeaways.md`.
- Ist es ein Ort neben diesem hier — ein anderer Vault, ein anderes Laufwerk —, wird derselbe relative Pfad versucht, so tief er tatsächlich existiert. Vaults sind oft Fast-Kopien voneinander, und der Grund, zu einem zu springen, ist meist dieselbe Notiz dort drüben.

In beiden Fällen bleibt die Zeile am gewählten Ort, und der **erste Ordner dieses Pfads öffnet sich ausgewählt**, dieselbe Form, die das Anklicken eines Ordners ergibt: der Schritt, den du am wahrscheinlichsten änderst, wenn du woanders hinspringst, ist der oberste, und der Rest des Pfads bleibt sichtbar, während du ihn änderst. Nichts wird je vorausgefüllt, was nicht wirklich auf der Platte liegt.

### Während du draußen bist

Der Pfad **beginnt am gewählten Ort**, nicht bei der Verzeichnisstruktur der Maschine — und genauso das Feld, das du durch Klicken auf den leeren Raum oder Drücken der Fokus-Taste bekommst: es enthält den Pfad von diesem Ort aus, nicht den absoluten der Maschine, mit der Spur bis zum Ort selbst zusammengezogen, genau wie sie sich drinnen bis zur Vault-Wurzel zusammenzieht — wählst du `Archiv`, liest die Zeile `Archiv / notizen / …`, nicht `/home/du/Vaults/Archiv/notizen/…`. Das führende Segment trägt ein Symbol dafür, was es ist (Vault, Persönlicher Ordner, Laufwerk), und <kbd>Rücktaste</kbd> hält dort an, statt weiter hinauf in den Rest des Dateisystems zu wandern. Bei ausgeschaltetem *Vault-Namen anzeigen* ist dieses Segment nur das Symbol — die Einstellung betrifft das öffnende Segment der Zeile, unabhängig davon, welchen Vault es benennt, nicht nur deinen eigenen.

Die Pfadleiste ist **in der Fehlerfarbe umrandet** — derselbe Ring, den der Umbenennen-Modus zeichnet —, solange sie aus deinem Vault hinauszeigt. Er markiert einen anhaltenden Zustand, keinen Augenblick: solange er da ist, gilt nichts von Obsidians eigener Behandlung für das, was die Zeile zeigt, und Schreiben ist gesperrt, bis du etwas anderes sagst.

Ansonsten funktioniert das Browsen wie drinnen: Chips, Trennzeichen, Tippen, Autovervollständigung, <kbd>Rücktaste</kbd> zum Hinausgehen. Auch dieselben Sichtbarkeitsregeln gelten, nicht unterstützte Endungen brauchen also weiterhin Obsidians **Alle Datei-Endungen erkennen** und Punktdateien weiterhin die Einstellung dieses Plugins.

**Rechtsklick funktioniert auch dort draußen**, allerdings mit einem anderen Menü: Die eigenen Handler des Dateiexplorers brauchen eine Datei, die der Vault kennt, deshalb werden Einträge außerhalb aus dem Pfad heraus gebaut. Sie bieten Öffnen (hier, rechts daneben, in einem neuen Fenster oder in der Standardanwendung deines Systems), *Pfad kopieren*, *Im System-Explorer anzeigen* und — sobald das Schloss offen ist — *Neue Notiz*, *Neuer Ordner*, *Kopie erstellen*, *Umbenennen…* und *Löschen*. **Ziehen** braucht weiterhin eine Vault-Datei und bleibt nicht verfügbar.

Dasselbe Menü gibt es an der offenen Datei im Betrachter, per Rechtsklick oder über die drei Punkte der Fläche, und es fragt das Schloss in der Kopfzeile dieser Ansicht. Es fragt nichts anderes: ob die Datei gerendert oder als Quelltext gezeigt wird, hat keinen Einfluss darauf, ob sie gelöscht werden kann, und ein Bild oder ein PDF — das gar keine Quelltextansicht hat — ist genauso löschbar wie eine Notiz. *Löschen* bedeutet den Papierkorb des Systems, sodass es sich von dort aus wiederherstellen lässt; ein System ohne Papierkorb meldet das, statt die Datei zu vernichten.

Löschen außerhalb des Vaults verschiebt die Datei in deinen **System-Papierkorb** — den Papierkorb unter Windows, den Trash unter macOS — nie ein Unlink. Hier draußen gibt es keinen Obsidian-Papierkorb zum Wiederherstellen, deshalb wird ein Löschen, das sich nicht rückgängig machen ließe, gar nicht erst angeboten: hat eine Plattform keinen Papierkorb, meldet der Versuch das statt es zu tun.

### Schreiben außerhalb des Vaults

Alles, was schreibt, ist **standardmäßig gesperrt**. Solange die Zeile aus deinem Vault hinauszeigt, nimmt ein **rotes Schloss** den Platz des Umbenennen-Schalters in der Kopfzeile ein — dieselbe Farbe wie der Ring um die Zeile, und aus demselben Grund: er markiert eine Verweigerung. Beide sind ein Bedienelement an einem Platz, es gibt also nie eine Frage, welches von beiden was sperrt.

Drei Drücke, im Kreislauf:

| Druck | Was du bekommst |
| --- | --- |
| Das rote Schloss | Schreiben hier ist erlaubt. Das Schloss wird durch den Umbenennen-/Verschieben-Schalter ersetzt |
| Der Schalter | Umbenennen-/Verschieben-Modus, genau wie innerhalb des Vaults |
| Der Schalter erneut | Der Modus endet und das Schloss schließt sich wieder — die Erlaubnis überlebt nicht das, wofür sie geöffnet wurde |

**Die Umbenennen-Taste fragt ebenfalls das Schloss.** Außerhalb deines Vaults lässt ein Druck darauf das Schloss nur auf- und wieder zublinken, statt einen Modus zu öffnen, den jedes Bestätigen doch verweigern würde: die Verweigerung kommt vor der Arbeit statt danach. Drücke das Schloss, oder drücke die Umbenennen-Taste innerhalb einer halben Sekunde erneut — der zweite Druck gewährt genau das, was die Schaltfläche gewähren würde, für diesen Ort, und öffnet damit gleich den Umbenennen-Modus.

Innerhalb deines Vaults gibt es kein Schloss: da ist nichts zu entsperren, und der Schalter belegt den Platz einfach selbst.

Die Erlaubnis wird **einem Ort gewährt, nicht einem Augenblick**: sie überlebt alles, was du bei der Arbeit an einem Ort tust — ein Verschieben abschließen, aus dem Eingabefeld herausklicken, eine Datei öffnen — und endet, wenn du im Dropdown einen anderen Vault, ein anderes Laufwerk oder eine andere Wurzel wählst, wenn die Zeile zu einer Vault-Datei zurückkehrt, oder beim dritten Druck. Eine Serie von Verschiebungen innerhalb eines Ordners braucht also einen Druck, nicht einen pro Datei.

Bei geöffnetem Schloss verhält sich die Pfadleiste dort draußen wie drinnen:

| Geste | Ergebnis |
| --- | --- |
| Einen Namen tippen, den es nicht gibt, <kbd>Enter</kbd> | Dieselbe Nachfrage „erstellen?“ wie drinnen; fehlende übergeordnete Ordner werden mit angelegt. Ein Name ohne Endung wird zu `.md`, genau wie drinnen |
| Umbenennen-/Verschieben-Modus, neuen Namen tippen | Benennt die Datei um, die die Zeile zeigt. Ein Name ohne Endung behält die eigene der Datei — draußen liegt in einem Ordner jede Art von Datei, und ein Umbenennen sollte aus einer `.png` nicht stillschweigend eine `.md` machen |
| Umbenennen-/Verschieben-Modus, woanders hin browsen, **diesen Namen behalten** wählen | Verschiebt sie dorthin unter dem Namen, den sie schon hat |
| <kbd>Strg</kbd> bei beidem halten | Kopiert statt zu verschieben und öffnet die Kopie in einem neuen Tab |

Gesperrt meldet all das, was es blockiert, statt zu geschehen. In keinem der beiden Zustände wird jemals etwas überschrieben: ein bereits vorhandenes Ziel wird abgelehnt, und die Ablehnung ist die des Dateisystems selbst (`COPYFILE_EXCL`, ein exklusives Anlegen) statt einer Prüfung, die ein Wettrennen verlieren könnte. Ein Verschieben über Dateisystemgrenzen — von einem USB-Stick, von einer Netzwerkfreigabe — fällt auf Kopieren-dann-Löschen zurück, und das Original verschwindet erst, wenn die Kopie angekommen ist.

**Eine Notiz aus deinem Vault *hinaus* zu verschieben fragt erst nach.** `fileManager` kann einer Datei über diese Grenze nicht folgen: jeder Link, der auf die Notiz zeigt, hört auf sich aufzulösen, nichts aktualisiert sie, und die Notiz verlässt den Index des Vaults. Das Verschieben wird also als Entscheidung angeboten statt verweigert oder stillschweigend ausgeführt — ein Dialog nennt, was es kostet und wie viele Notizen auf die verlinken, die du gerade verschiebst. Bestätigst du, verschiebt es tatsächlich: hinauskopiert, dann über Obsidians eigenes Löschen aus dem Vault entfernt, sodass es sich genauso wiederherstellen lässt wie eine gelöschte Notiz, und ein Fehlschlag bei einem der beiden Schritte lässt die Notiz dort, wo sie war. Hältst du <kbd>Strg</kbd>, kopiert es stattdessen weiterhin nur hinaus, was von diesem Problem nichts hat. Der andere Weg — eine externe Datei *in* den Vault hineinholen — ist noch nicht angebunden.

### Eine externe Datei öffnen

Beim Browsen im Dateisystem kannst du zurück **in den geöffneten Vault** wandern — von der Wurzel, vom Persönlichen Ordner, von wo auch immer deine Vaults liegen. Eine so erreichte Datei ist eine ganz normale Notiz, sie öffnet sich also auch als eine: der echte Editor, Links und Rückverweise, und die Zeile springt zurück zur vault-verwurzelten Pfadleiste. Nur Dateien, für die Obsidian keine Ansicht hat, bleiben in der Vorschau, denn dort draußen ist die Vorschau die bessere Antwort. Zeigt eine Vorschau ohnehin so eine Notiz — etwa ein wiederhergestellter Arbeitsbereich —, bietet ihre oberste Zeile **In *(Vault)* öffnen** an, dasselbe Angebot, das du auch von Hand hättest.

Obsidians Editor arbeitet nur mit Dateien innerhalb des Vaults, eine externe Datei **kann** deshalb nicht als echte Notiz mit Links, Rückverweisen und allem Übrigen geöffnet werden — das ist eine Grenze der App, nicht dieses Plugins. Wählst du eine aus, öffnet sich stattdessen eine **Vorschau**, schreibgeschützt, bis du etwas anderes sagst:

| Typ | Angezeigt als |
| --- | --- |
| `.md`, `.markdown` | Gerendertes Markdown |
| `.html`, `.htm`, `.xhtml` | Die gerenderte Seite |
| Bilder, Audio, Video, PDF | Nativer Player/Betrachter |
| Jede andere **Text**-Datei (`.json`, `.css`, `.log`, `.txt`, …) | Reiner Klartext, unverändert |
| Binärformate ohne Betrachter (`.zip`, `.exe`, …) | An *In Standardanwendung öffnen* weitergereicht |

Der Betrachter hat zwei Lesarten einer Datei, und da sie einander ausschließen, wird nur die gezeigt, zu der du wechseln würdest:

| | Was es tut | Standard für |
| --- | --- | --- |
| **Als Markdown anzeigen** | Rendert die Datei als Notiz, schreibgeschützt | `.md`, `.markdown` |
| **Als Seite anzeigen** | Rendert die Datei als die Seite, die sie ist, schreibgeschützt | `.html`, `.htm`, `.xhtml` |
| **Als Text bearbeiten** | Der Quelltext, bearbeitbar | alles andere |

Außerhalb des Vaults ist **Als Text bearbeiten** zugleich der Druck, der den Schreibschutz aufhebt — Modus und Erlaubnis sind eine Geste statt zweier Schaltflächen, über die man nachdenken müsste. Sie ist rot getönt, **wann immer ein Druck den Schreibschutz aufheben würde**, ob du das Bearbeiten an Ort und Stelle scharf stellst oder direkt aus der gerenderten Ansicht kommst; innerhalb des Vaults gibt es nichts zu entsperren, dort bleibt sie schlicht. **Als Markdown anzeigen** bekommt einen leichten Akzentschimmer — denselben Ton, den Obsidian ausgewähltem Text gibt — und ist damit als Weg zurück markiert, nicht als Handlungsaufforderung.

Weil die Schaltfläche dem *Bearbeiten* folgt und nicht dem rohen Modus, bietet eine schreibgeschützt in der Textansicht liegende Datei weiterhin **Als Text bearbeiten** an: das ist der Druck, der es scharf stellt. Eine Datei, in die nie getippt werden kann — gekürzt oder unlesbar —, sagt stattdessen **Als Text anzeigen**, denn mehr kann der Druck nicht liefern.

Die Standards sind die nützliche Variante, nicht die wörtliche: ein `#` in einem Shell-Skript ist ein Kommentar, keine Überschrift, ein `.log` als Markdown zu rendern würde es also still verschlucken. Beide Standards lassen sich pro Datei übergehen, und die Wahl geht in die Historie des Tabs ein, sodass Vor/Zurück und ein wiederhergestellter Arbeitsbereich sie behalten — reichlich Notizen leben in `.txt`-Dateien, und reichlich `.md`-Dateien liest man leichter als Quelltext.

#### Was eine HTML-Seite tun darf

Nichts. Die Seite wird in einem Rahmen gezeigt, dem **jede Berechtigung entzogen** ist — keine Skripte, keine Formulare, keine Navigation, keine eigene Ursprungsadresse — und mit einer Inhaltsrichtlinie, die ihr überhaupt kein Netzwerk erlaubt. Das ist keine Vorsicht um ihrer selbst willen: eine lokale Seite, auf dem gewöhnlichen Weg geladen, würde die Ursprungsadresse dieses Fensters teilen, und dieses Fenster ist Obsidian, ein Skript in einer heruntergeladenen HTML-Datei würde also innerhalb deiner App laufen, mit der Reichweite deiner App.

Was das kostet, ist alles, was die Seite *tut*; was es bewahrt, ist alles, was die Seite *ist*. Die Stylesheets und Bilder neben der Datei werden eingelesen und in den Rahmen mitgenommen, eine gespeicherte Seite sieht also weiterhin aus wie sich selbst. Verweise, die aus dem eigenen Ordner der Seite herausführen, und Verweise ins Web, bleiben genau so stehen, wie sie geschrieben sind, und laden schlicht nicht — eine lokale Datei kann einem Server nicht heimlich mitteilen, dass du sie geöffnet hast.

Skripte werden **entfernt**, nicht bloß blockiert, sodass die Seite, die du siehst, und der Quelltext, zu dem du wechseln kannst, sich in einer benannten Weise unterscheiden, statt in irgendetwas, das der Rahmen stillschweigend nicht ausgeführt hat. Links innerhalb der Seite tun nichts. Willst du das Echte — Skripte, Netzwerk und alles —, reicht *In Standardanwendung öffnen* sie an deinen Browser weiter, das richtige Werkzeug dafür.

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

- **In *(Vault)* öffnen** — erscheint, wenn die Datei zu einem deiner anderen Vaults gehört. Reicht sie an Obsidians eigenen URI-Handler weiter, der das Fenster dieses Vaults mit der Notiz darin öffnet, als echte, bearbeitbare Notiz. Dieses Fenster bleibt genau so, wie es war; nichts wechselt unter dir.
- **Als Markdown anzeigen** / **Als Seite anzeigen** / **Als Text bearbeiten** — die beiden Lesarten dieser Datei; Letztere hebt außerhalb des Vaults zudem den Schreibschutz auf.
- **In Standardanwendung öffnen** — reicht die Datei an die Standardanwendung deines Systems weiter, einschließlich der Binärformate, die dieser Betrachter nicht zeigen kann. Genauso formuliert wie Obsidians eigener Eintrag für dieselbe Aktion, weil es dieselbe Aktion ist.

Der Betrachter beantwortet auch einen **Rechtsklick**: innerhalb des Text-Editors mit *Ausschneiden* / *Kopieren* / *Einfügen* / *Alles auswählen*, überall sonst mit dem eigenen Menü der Datei. Obsidians Drei-Punkte-Menü in der Kopfzeile führt dieses Menü ebenfalls — außerhalb des Vaults würde es sonst nichts außer *Rechts teilen* und *Unten teilen* anbieten.

Außerhalb deines Vaults wird nichts geschrieben, ohne dass du zuvor *Als Text bearbeiten* drückst. Die vollständige Offenlegung steht im Abschnitt [Außerhalb des Vaults](README.de.md#außerhalb-des-vaults) des README.

## Eine Datei auf einen Ordner im Pfad ziehen

Jeder Ordner in der Zeile ist ein Ziel für Drag & Drop, sodass **eine dorthin gezogene Notiz auch dorthin verschoben wird** — der kürzeste Weg dahin liegt zwischen einer Notiz und jedem Ordner darüber, da das Ziel bereits auf dem Bildschirm zu sehen ist. Ziehe aus dem Dateimanager, aus dem Dropdown, aus dem eigenen Namen der Notiz im Header oder aus jeder anderen Stelle in Obsidian, die eine Datei liefert: Es ist der eigene Drag der App, also stammen Hover-Beschriftung, Cursor und Hervorhebung vom Dateimanager selbst.

**Auch der Name des Vaults nimmt einen Drop entgegen**, da er der Ordner ganz oben in der Zeile ist — die eine Geste, die eine Notiz von hier aus in die Vault-Wurzel legt.

**Eine ganze Auswahl kann auf einmal gezogen werden**, und sie bewegt sich als eine Einheit: Falls auch nur eine davon nicht verschoben werden könnte, wird der Drop abgelehnt, statt einen Teil zu verschieben und den Rest stillschweigend zu übergehen.

Links folgen der Notiz, genau wie beim Verschieben aus dem Dateimanager oder durch Tippen eines Pfads.

Ein Ordner, der **den Drop nicht annehmen könnte, bietet nichts Eigenes an** — kein *Move into*-Label, keine Hervorhebung auf dem Ordner — statt etwas anzubieten, das dann fehlschlagen würde; Obsidians eigene Antwort für den Header, *In diesem Tab öffnen*, steht stattdessen dort. Drei Fälle:

- der Ordner, in dem die Datei **bereits liegt**, da sie schon dort ist;
- ein Ordner, der **in sich selbst oder einen eigenen Nachfahren** fallengelassen wird, was ihm keinen Ort ließe, von dem er hätte kommen können;
- eine Auswahl, die **einen Ordner und etwas darin** enthält, da das Verschieben des Ordners das Kind mitnimmt.

Ein Ordner, der bereits eine **gleichnamige Datei** enthält, nimmt den Drop an und fragt, was mit der im Weg stehenden geschehen soll, mit demselben Dialog wie bei einem eingegebenen oder ausgewählten vergebenen Namen — siehe [Ein vergebener Name](#ein-vergebener-name). Nichts hier überschreibt etwas.

Nur Ordner **innerhalb deines Vaults** nehmen Drops entgegen. Während die Zeile aus dem Vault hinauszeigt, lehnen ihre Segmente ab, da das Herausnehmen einer Notiz aus dem Vault jeden Link zu ihr bricht — eine Entscheidung, die eher eine Nachfrage als eine Geste verdient. Der Weg, es bewusst zu tun, bleibt weiterhin, den Pfad zu tippen, was zuerst nachfragt und dir sagt, wie viele Notizen betroffen wären.

## Text oder eine Datei ablegen, um ihn niederzuschreiben

Dieselben Ziele nehmen auch **Inhalt** entgegen, nicht nur Dateien, und die beiden werden anhand dessen unterschieden, was du gerade ziehst, nicht wo du loslässt.

**Auf eine Notiz, die die Zeile bereits benennt** — den eigenen Namen der Notiz, oder ein Trennzeichen, dessen Ordner eine Ordnernotiz hat — wandert das Abgelegte an ihr Ende, nach einer Leerzeile. Es wird zuerst nachgefragt, denn dies schreibt in eine bereits vorhandene Datei, und ein Drag ist eine Geste, die eine unsichere Hand versehentlich ausführen kann. Text aus einem Editor, eine Datei vom Desktop und eine aus diesem Vault gezogene Notiz funktionieren alle; eine Datei wird als Text gelesen, und eine Binärdatei wird abgelehnt, statt als bildschirmfüllender Unsinn eingefügt zu werden.

**Auf einen Ort — den Vault-Namen oder einen Ordner** — wird noch nichts geschrieben, da noch nichts benannt wurde. Das Feld öffnet sich dort mit dem Abgelegten darin, und der Name, den du tippst, ist das, was es festschreibt: Eine neue Notiz wird mit dem Text *erstellt*, und bei einer bestehenden wird genau wie oben nachgefragt. <kbd>Esc</kbd>, oder ein Klick woanders, lässt das Ganze los.

**Die Zeile leuchtet blau**, während ein Drag, das als Inhalt landen würde, darüber schwebt, und bleibt blau, während das Feld einen solchen enthält — dasselbe Blau, das dasselbe sagt: Was als Nächstes passiert, betrifft den Text, den du bei dir trägst. Eine aus deinem eigenen Vault auf einen Ordner gezogene Datei bedeutet weiterhin *dorthin verschieben*, behält Obsidians eigene Hervorhebung und leuchtet nie blau; diese Geste war zuerst da, und Inhalt tritt vor ihr zurück.

## Wenn der Pfad länger ist als das Fenster

Namen werden **gekürzt statt gequetscht**, in der Reihenfolge dessen, was du am wenigsten brauchst:

1. **Zuerst der Vault-Name**, bis hin zu seinem Symbol. Du weißt, in welchem Vault du dich befindest; das Symbol sagt weiterhin, wo der Pfad beginnt.
2. **Dann die Dateiendung der Datei**, falls du sie eingeschaltet hast — dieselben drei Zeichen bei fast jeder Datei in einem Vault. Sie fällt ganz weg, statt gekürzt zu werden: eine halbe Endung sagt nichts, was keine Endung nicht auch sagt.
3. **Dann die Ordner, längster zuerst.** Der längste Ordnername kürzt sich auf die Länge des nächstlängsten, dann beide zusammen, und so weiter, jeder hält an seiner Untergrenze — sodass ein sehr langer Ordner alles hergibt, was er den anderen voraus hat, bevor ein kurzer Name daneben auch nur einen Buchstaben verliert.
4. **Der eigene Name der Datei zuletzt**, und er behält etwa sechs Zeichen. Dafür ist der Header da.

Platz wird **kontinuierlich** abgegeben, in Bruchteilen eines Pixels statt einen Buchstaben nach dem anderen: Ein weichender Name wird am Pixel abgeschnitten und verblasst unter seinem `…`, sodass ein langsam gezogenes Fenster die Zeile gleichmäßig verschmälert und nichts danach schrittweise nachrückt. Bevor auch nur ein Buchstabe verschwindet, wird der Raum um die Trennzeichen ausgegeben — er ist der einzige Abstand der Zeile und kostet überhaupt keine Information — und ein gekürzter Name endet dort, wo das Trennzeichen beginnt, ohne einen Streifen leeren Kastens dazwischen.

**Das Feld nimmt sich, was es braucht.** Ein Feld zum Tippen eines Pfads zu öffnen drängt die Ordner daneben nicht aus dem Weg: Es ist so breit wie der Text darin und wächst beim Tippen mit, sodass die Spur alles behält, was das Feld nicht braucht. Erst wenn nicht genug Platz für beides da ist, scrollt die Zeile, und dann ist das Feld das eine, das nie weicht — es ist Text, der bearbeitet wird, kein Name, der eingepasst wird.

Nichts wird über das hinaus abgeschnitten, was es von seinen Nachbarn unterscheidet: `Projects2025` und `Projects2026` im selben Ordner werden zu `…025` und `…026`, statt zu einem Präfix, das aus ihnen dasselbe Wort machen würde, während `Reports` neben `Receipts` auf `Rep…` gekürzt werden kann. Zusätzlich behält jeder Name eine **lesbare Breite** — etwa vier Buchstaben für einen Ordner und sechs für einen Dateinamen, gemessen in der Schrift, in der die Zeile tatsächlich dargestellt wird, statt gezählt. Vier schmale Buchstaben und vier breite sind nicht dieselbe Menge Name, also darf `lilliliillil` mehr von sich behalten als `WWMMWWMMWWMM`, und was auf dem Bildschirm übrig bleibt, hat so oder so dieselbe Größe. Kurze Namen werden ganz in Ruhe gelassen — ein auf `A…` heruntergekürzter Name ist eindeutig und trotzdem unlesbar. **Leerzeichen zählen nicht mit.** Sechs Zeichen, um zu sagen, welche Datei das ist, sind sechs lesenswerte Zeichen, also fahren die Leerräume dazwischen kostenlos mit, und eines wird nie direkt am `…` stehen gelassen, wo es ohnehin unsichtbar wäre.

**Ein Name wird dort gekürzt, wo seine Nachbarn mit ihm übereinstimmen, und in der Mitte, wenn sie nirgends übereinstimmen.** Zwei Ordner namens `aaaa-common-one` und `aaaa-common-two` teilen sich alles außer den letzten drei Zeichen, also behält das Abschneiden des Schwanzes die Hälfte, die etwas aussagt: Sie werden stattdessen zu `…one` und `…two`, was kürzer *und* unterscheidend ist. Wo die Übereinstimmung am Ende liegt — `alpha-draft` neben `beta-draft` — verschwindet das Ende; wo sie an beiden Enden liegt, bleibt die Mitte stehen. Ein Name ohne nahe Nachbarn verliert seine Mitte, denn ein Name beginnt mit dem, was er ist, und endet mit dem, welcher er ist — bei einer Datei mit ihrer Endung: `annual…2026.md`.

Eine kurze gemeinsame Strecke zählt nicht. `parallel structures` endet zufällig auf dieselben zwei Buchstaben wie `Schemes` daneben, und das ist kein Grund, einen von beiden ganz zu lassen — drei Zeichen vom Anfang unterscheiden sie bereits.

Nichts umbricht in eine zweite Zeile. Wenn selbst die kürzesten ehrlichen Namen nicht passen, **scrollt die Zeile seitwärts**, geparkt an dem Ende, an dem die Datei liegt — an diesem Punkt gibt es nichts mehr zu komprimieren, und weiteres Abschneiden würde eher verbergen als kürzen. Das Mausrad scrollt sie, egal wo der Zeiger über der Zeile steht, und beide Enden sind erreichbar: Während sie scrollt, richtet sich die Zeile an ihrem Anfang aus, egal was die Ausrichtungseinstellung sagt, da Inhalt, der in einem Kasten zentriert ist, den er überwachsen hat, sowohl links als auch rechts überläuft — und diese Hälfte lässt sich überhaupt nicht erreichen.

**Zeige auf einen gekürzten Namen, und er kommt vollständig zurück**, solange du darauf zeigst, zum linken Rand gescrollt, sodass alles Zurückgekehrte auf dem Bildschirm ist. **Klicke einen an, und er bleibt**: Das Feld öffnet sich und zeigt den angeklickten Ordner, was danach angeboten wird, und was du tippst, und zeigt sie weiterhin, sobald der Zeiger weitergezogen ist. Namen bleiben stehen, während du die Zeile scrollst oder hineintippst — einer, der unter einer Geste aufspringt, die die Zeile lesen soll, würde dir alles danach unter der Hand wegbewegen.

Das **eröffnende Segment trägt immer einen Tooltip, und zwar den absoluten Pfad** — `/home/du/Vaults/Notizen`, oder wo auch immer die Zeile beginnt. Das ist die eine Sache über die Zeile, die nichts auf dem Bildschirm sagen kann: Der Name sagt dir, *welches* Vault, nie wo es liegt. Er ist da, egal ob etwas gekürzt werden musste oder nicht.

Mit ausgeschaltetem **Vault-Namen anzeigen** wird der Name nicht entfernt, sondern nur auf null gehalten — sodass ein Zeigen auf das Symbol ihn genauso zurückbringt wie ein Zeigen auf einen Namen, den die Zeile kürzen musste.

**Dateiendungen anzeigen** setzt die Endung wieder an den Dateinamen der Zeile. Aus — der Standard — benennt die Zeile eine Notiz so, wie Obsidian sie betitelt, ohne das `.md`, das fast jede Datei in einem Vault teilt; an, benennt sie sie so, wie das Dateisystem es tut, was du willst, wenn das Vault mehr als Notizen enthält. Es ist zudem das Zweite, das die Zeile aufgibt, wenn der Platz knapp wird, gleich nach dem Vault-Namen.
Ein Tooltip gibt dir den Rest: nicht nur den Namen, sondern alles, was die Zeile darunter zeigt, als `…/name/ordner/notiz.md`, sodass ein Hover sowohl "was ist das" als auch "was liegt darunter" beantwortet. Das Vault-Symbol benennt sein Vault auf dieselbe Weise, wenn der Name ausgeschaltet oder weggekürzt wurde.

## Die Warnfarben

| | Wann | Was es bedeutet |
| --- | --- | --- |
| **Roter** Ring auf der Pfadleiste | Die Zeile zeigt aus deinem Vault hinaus | Obsidian kann nicht öffnen, was dort liegt, als Notiz, und nichts dort draußen wird geschrieben, bis du das Vorhängeschloss öffnest. |
| **Oranger** Ring auf der Pfadleiste | Die Datei ist ein Textformat, für das Obsidian keine Ansicht hat | Eine Vorsicht. Obsidian würde sie der Standardanwendung deines Desktops übergeben; das Plugin zeigt sie stattdessen an. |
| **Roter** Text im geöffneten Feld | An diesem Pfad liegt noch nichts | <kbd>Enter</kbd> wird es erstellen statt es zu öffnen. Weniger eine Warnung als eine Aussage darüber, was der nächste Tastendruck bewirkt — siehe [Einen Pfad tippen](#einen-pfad-tippen). |
| **Rotes** Vorhängeschloss anstelle des Umbenennen-Schalters | Die Zeile zeigt aus deinem Vault hinaus, und das Schreiben dort ist noch gesperrt | Dasselbe Rot wie der Ring, aus demselben Grund: Es markiert eine Ablehnung. Es zu drücken erlaubt das Schreiben hier und gibt den Platz an den Schalter zurück — siehe [Schreiben außerhalb des Vaults](#schreiben-außerhalb-des-vaults). |

Die **beiden Ringe sind unabhängig, und beide können gleichzeitig gelten** — eine externe `.json` liegt außerhalb deines Vaults *und* ist ein Typ, für den Obsidian keinen Editor hat. Im Viewer erscheinen sie als getrennte Zeilen, jede sagt nur ihre eigene Tatsache aus. Auf der Pfadleiste gewinnt Rot, wo beides zutrifft, da zwei Ringe nur Lärm wären. Der rote *Text* ist etwas völlig anderes: Er betrifft, was gerade getippt wird, nicht, wohin die Zeile zeigt, also kann er innerhalb beider Ringe oder keines von beiden erscheinen.

Die orange Stufe ist bewusst schmal. Registrierte Typen (Markdown, Canvas, Bilder, PDF, Audio, Video) werden ordentlich behandelt und bekommen nichts. Binärdateien bekommen ebenfalls nichts — du wirst eine `.zip` nicht versehentlich zu einem Durcheinander bearbeiten. Was übrig bleibt, ist genau das Risiko: eine `.json`, `.css` oder `.log`, die **Alle Dateitypen anzeigen** sichtbar gemacht hat. Das Dropdown ist absichtlich breiter angelegt: Dort ist alles, was keine Notiz ist, orange — siehe [Wie Dropdown-Einträge eingefärbt sind](#wie-dropdown-einträge-eingefärbt-sind).

## Verschieben-/Umbenennen-Modus

Der Bleistift-Knopf ganz rechts im Header — neben dem Ansichtsmodus-Knopf, in derselben Größe wie die nativen Knöpfe — schaltet den Verschieben-/Umbenennen-Modus um. Außerhalb deines Vaults steht an seiner Stelle ein rotes Vorhängeschloss, bis du es drückst; siehe [Schreiben außerhalb des Vaults](#schreiben-außerhalb-des-vaults). Die Header-Zeile ist dann in der Akzentfarbe umrahmt, genau wie beim Umbenennen im Dateimanager. Dieselben Klicks und Tastendrücke schreiben nun einen Verschiebe- oder Umbenennungsvorgang über Obsidians `fileManager.renameFile` fest, sodass alle Links zur Notiz mitfolgen.

Während des Umbenennens:

- Der aktuelle Dateiname ist in jedem Ordner-Dropdown fixiert, sodass das Verschieben einer Notiz ohne Umbenennen ein einziger Klick ist.
- Bereits im Zielordner vergebene Namen sind **rot** — ein Ordner, der den Namen bereits enthält, und eine Datei mit diesem Namen — sodass die Kollision sichtbar wird, bevor du wählst. Sie können trotzdem ausgewählt werden: siehe unten.
- Eingaben werden live gegen Obsidians eigene Umbenennungsregeln geprüft — dieselben Zeichensätze, dieselben Meldungen, derselbe rote Tooltip wie beim Umbenennen im Dateibaum — sodass ein unzulässiger Name schon beim Tippen markiert wird und nicht festgeschrieben werden kann.
- Ein Klick außerhalb der Header-Zeile, oder wenn der Header den Fokus verliert, beendet den Umbenennen-Modus.

### Ein vergebener Name

Verschieben oder Umbenennen auf einen bereits vorhandenen Namen **fragt nach, statt abzulehnen.** Ein Dialog öffnet sich mit zwei bearbeitbaren Pfaden: wohin deine Datei geht, und wohin die im Weg stehende Datei geht — rot, solange dieser noch vergeben ist. Jeder Pfad wird zudem so dargestellt, wie die Pfadleiste einen darstellt, mit den unterschiedlichen Teilen eingefärbt und zuletzt gekürzt, sodass ein langer Pfad weiterhin zeigt, was sich ändert.

Beide Felder haben eine Liste. Die zweite enthält die üblichen Auswege:

- **Plätze tauschen** — sie geht in den alten Ordner deiner Datei, unter ihrem eigenen Namen.
- **Namen tauschen** — sie bleibt, wo sie ist, und übernimmt den alten Namen deiner Datei.
- **Beide tauschen** — sie übernimmt den alten Pfad deiner Datei.
- `-1`, `-bak` und `-old` neben ihrem eigenen Namen.
- Die beiden Namen, die die Dateien hatten.

Die erste Liste bietet an, wohin deine Datei unterwegs war, **Bleiben, wo es ist**, ihren eigenen Namen im Zielordner sowie `-1`, `-bak` und `-old` daneben. Ein Ausweg, dessen Pfad vergeben ist, ist ausgegraut und kann nicht ausgewählt werden. Einen auszuwählen **füllt nur das Feld** — du kannst es weiterhin bearbeiten — und **Anwenden** verschiebt beide, samt Links; **Abbrechen** verschiebt nichts. Einen vergebenen Namen aus dem Dropdown auszuwählen fragt dasselbe nach, ebenso wie das Ablegen einer Notiz auf einem Ordner, der ihren Namen bereits enthält.

## Eine Taste für beide Umbenennungen

Der Umbenennen-Befehl (standardmäßig <kbd>F2</kbd>, oder was auch immer du dafür festgelegt hast) **wechselt** zwischen Obsidians Umbenennung über den Inline-Titel und der Pfadleiste dieses Plugins in der Kopfzeile. Hast du Obsidians Inline-Titel abgeschaltet, wird die Pfadleiste in der Kopfzeile zum einzigen Ziel, sodass die Taste nie ins Leere greift.

In der Pfadleiste öffnet sie den **Namen ohne seine Endung** — die Bearbeitung, die eine Umbenennung fast immer ist, und dasselbe, was ein Klick auf den Namen auswählt. Drück sie noch einmal, und sie tut, was dort auch <kbd>Tab</kbd> täte: beim Namen ist das die nächste Stufe — der Name mit seiner Endung, der Pfad ab deinem Vault-Ordner, der Pfad ab der Systemwurzel; bei etwas Getipptem vervollständigt sie es, wie es <kbd>Tab</kbd> auch tut.

**Der Kreislauf schließt sich bei der Überschrift.** Fünf Druckvorgänge führen einmal herum — der Inline-Titel, der Name, der Name mit seiner Endung, der Pfad ab deinem Vault, der Pfad ab der Systemwurzel — und der sechste ist wieder der Inline-Titel. Dieser Druck ist der einzige, der sich von
<kbd>Tab</kbd> unterscheidet, das stattdessen zum Anfang des Pfades zurückspringt — und der siebte
geht dorthin, wohin auch <kbd>Tab</kbd>s Runde führt: die Vault-Wurzel, mit dem ganzen Pfad im
Feld und ihrem ersten Ordner markiert. Jede Stufe, die <kbd>Tab</kbd> erreicht, erreicht also
auch die Taste.

Der Befehl **Pfadleiste fokussieren** tut dasselbe innerhalb des Feldes — was auch
immer <kbd>Tab</kbd> täte — und wo <kbd>Tab</kbd> eine Runde machen würde, gibt er den Cursor stattdessen an
die Notiz zurück. Sein nächster Druck ist die Runde: die Vault-Wurzel, erster Ordner markiert.

**In einem bereits geöffneten Feld** verwandelt die Taste es an Ort und Stelle in eine Umbenennung — Text, Cursor
und Auswahl bleiben erhalten — und **Pfadleiste fokussieren**
nimmt die Umbenennung auf dieselbe Weise wieder zurück. **Alles andere**, das zwischen den Druckvorgängen gedrückt oder
geklickt wird, beginnt jeden der beiden Kreisläufe neu, sodass ein Druck nach dem Bearbeiten nie
auf einer alten Stufe landet.

Außerhalb des Vaults funktioniert die Taste ebenfalls — dort gibt es keinen Inline-Titel, also
geht der erste Druck direkt zur Pfadleiste.

Das funktioniert, indem der Befehl `workspace:edit-file-title` umhüllt wird, statt die Taste abzufangen — ein neu belegtes Tastenkürzel und der Aufruf aus der Befehlspalette funktionieren daher unverändert.

## Wie Dropdown-Einträge eingefärbt sind

| Farbe | Bedeutung |
| --- | --- |
| **Lila** | Eine Notiz (`.md`, `.markdown`) — was Obsidian als Notiz öffnen wird, herausgesucht aus einem Ordner mit gemischtem Inhalt |
| **Orange** | Keine Notiz — alles, was Obsidian nicht als solche öffnet, von einem PDF bis zu einer `.txt`, und die `:page`-Einträge dazu. Ein Ordner mit gemischtem Inhalt wird auf die darin enthaltenen Notizen hin gelesen, und eine Farbe für alles andere sagt das schneller als eine Warnung bei einigen wenigen; siehe [die Warnfarben](#die-warnfarben) |
| **Gedämpft** | Außerhalb deines Vaults, sodass die eigene Handhabung des Vaults nicht gilt |
| **Blau**, fett | Wo du gerade bist: die eigene Notiz dieser Leiste, und der Ordner, auf dem die Pfadleiste steht. Im Verschieben-/Umbenennen-Modus steht der Eintrag *diesen Namen behalten* anstelle der Notiz — in beiden Fällen dieselbe Notiz |
| **Rot** | Nur im Verschieben-/Umbenennen-Modus: der Name ist vergeben. Trotzdem auswählbar — die Auswahl fragt, was mit der im Weg stehenden Datei geschehen soll; siehe [Ein Name, der vergeben ist](#ein-vergebener-name) |

**Ordner sind fett**, sodass die eigene Notiz eines Ordners keine eigene Farbe braucht, um
sich von ihrem Ordner abzuheben: sie ist lila wie jede andere Notiz. Eine **Linie am
Rand einer Zeile** markiert die Namen, die mit dem beginnen, was du getippt hast — blau, wo
sie weiter übereinstimmen, grün auf dem Zweig, den der Vorschlag nimmt; siehe
[Einen Pfad tippen](#einen-pfad-tippen).

Das Feld nimmt dieselben Farben für das an, was es benennt — siehe [Einen Pfad tippen](#einen-pfad-tippen).

## Sichtbarkeitsregeln

- Dateien mit nicht unterstützten Endungen erscheinen in den Dropdowns nur, wenn Obsidians Einstellung **Alle Dateierweiterungen erkennen** aktiviert ist — **innerhalb des Vaults**. Außerhalb gilt die Einstellung nicht: sie bestimmt, was der Vault indiziert, und nichts dort draußen ist im Vault, also wird eine `.txt` neben deinen Notizen in jedem Fall aufgelistet.
- Das Dropdown zeigt bis zu 1.000 Einträge, zehnmal Obsidians eigenes Limit. Hat ein Ordner mehr, nennt die letzte Zeile, wie viele weggelassen wurden; tipp weiter, um die Liste einzugrenzen.
- Punktdateien und Punktordner erscheinen nur, wenn die Einstellung **Punktdateien anzeigen** dieses Plugins aktiviert ist.
- **Der Überschreibschutz funktioniert unabhängig von der Sichtbarkeit** — eine versteckte Datei hindert dich weiterhin daran, sie zu überschreiben.

## Spickzettel

Ein **in Anführungszeichen eingeschlossener** Pfad wird für dich ausgepackt. Windows' *Als Pfad kopieren* liefert
`"C:\Users\du\notiz.md"`, Anführungszeichen inklusive, und eine Shell macht dasselbe für jeden
Pfad mit einem Leerzeichen darin; das Einfügen oder Tippen funktioniert so oder so. Nur das
doppelte Anführungszeichen, und nur als zusammenpassendes Paar um das Ganze — es kann
nicht in einem echten Namen vorkommen, wo ein Apostroph sehr wohl kann.

| Du willst… | Mach das |
| --- | --- |
| Einen Ordner öffnen (seine Notiz, oder ihn im Dateimanager anzeigen) | Klick auf das Trennzeichen **nach** diesem Ordner |
| Einem Ordner eine Ordnernotiz geben, die er noch nicht hat | **Doppelklick** auf dasselbe Trennzeichen (braucht ein Ordnernotiz-Plugin) |
| Einen Ordner gegen einen Nachbarn tauschen | Klick auf den Namen dieses Ordners, dann tippen oder auswählen |
| Die Notiz umbenennen oder umleiten | Klick auf den Namen der Notiz — Endung eingeschlossen |
| Den Inhalt eines Ordners durchsuchen | Klick auf den Namen dieses Ordners; das Dropdown listet dessen übergeordneten Ordner auf, also klick auf den Ordner **unterhalb** desjenigen, den du willst |
| Einen Ordner und alles darunter neu eintippen | **Doppelklick** auf den Namen dieses Ordners, dann tippen |
| Den Pfad ab einem Ordner abwärts bearbeiten | Klick auf den Namen dieses Ordners, dann <kbd>→</kbd> zum Aufheben der Auswahl |
| Zu einer Datei springen, indem du ihren Pfad tippst | Klick auf den Dateinamen oder die leere Fläche, tippen, <kbd>Enter</kbd> |
| Eine Datei stattdessen in einem neuen Tab öffnen | <kbd>Strg</kbd> beim Auswählen, oder <kbd>Strg</kbd>+<kbd>Enter</kbd> |
| Die Notiz irgendwohin kopieren statt sie zu verschieben | Stift, dann <kbd>Strg</kbd> beim Auswählen oder Bestätigen des Ziels |
| Eine Notiz an einem Pfad erstellen, der nicht existiert | Den Pfad tippen — das Feld wird **rot**, sobald nichts im Dropdown darauf passt — dann <kbd>Enter</kbd>. Innerhalb des Vaults wird sie sofort angelegt; außerhalb wird zuerst gefragt |
| Herausfinden, ob ein getippter Pfad schon existiert | Auf die Farbe schauen: sie nimmt die Farbe der Zeile an, die sie benennt, und Rot bedeutet, dass <kbd>Enter</kbd> ihn anlegen würde |
| Beim Tippen eine Ebene hinabsteigen | `/` tippen |
| Beim Tippen eine Ebene hochgehen | <kbd>Backspace</kbd> im leeren Eingabefeld |
| Die Ordner vor dem Feld ins Feld holen | <kbd>←</kbd> an dessen Anfang für einen; <kbd>Umschalt</kbd>+<kbd>Pos1</kbd>, oder <kbd>Pos1</kbd> bei geschlossenem Dropdown, für alle |
| Die offene Notiz verschieben oder umbenennen | Klick auf den Stift, dann wie oben browsen oder tippen |
| Auf einen Namen verschieben, der vergeben ist | Trotzdem bestätigen: der Dialog lässt dich Plätze tauschen, Namen tauschen oder beides, oder der im Weg stehenden Datei einen anderen Namen geben |
| Verschieben ohne Umbenennen | Stift → in den Zielordner klicken → den angehefteten aktuellen Dateinamen auswählen |
| Direkt umbenennen | <kbd>F2</kbd> zweimal (erster Druck geht zum Inline-Titel, zweiter zur Kopfzeile) |
| Zu einem anderen Vault, nach Hause oder zu einem Laufwerk springen | Klick auf den Vault-Namen |
| Eine Datei von außerhalb des Vaults öffnen | Vault-Name → einen Ort auswählen → browsen → die Datei auswählen (schreibgeschützt bis *Als Text bearbeiten*) |
| Den getippten Namen vervollständigen | <kbd>Tab</kbd>, oder <kbd>Ende</kbd> für den Vorschlag; <kbd>→</kbd> übernimmt einen Buchstaben davon |
| Hineingehen, sobald nur noch ein Name übrig ist | Nochmal <kbd>Tab</kbd> |
| Einen Schritt zurücknehmen, oder den Ordner verlassen | <kbd>Umschalt</kbd>+<kbd>Tab</kbd> |
| Den ganzen Pfad greifen, oder den Systempfad | <kbd>Tab</kbd> über das Ende hinaus, oder viermal klicken |
| Einen Namen, einen Pfad oder einen Systempfad kopieren | Zweimal rechtsklicken; die leere Fläche dreimal für den Systempfad |
| Erreichen, was der Vault-Manager für diesen Vault anbietet | Rechtsklick auf das Symbol am Anfang der Zeile |
| Die ID des Vaults kopieren | Rechtsklick auf das Symbol am Anfang der Zeile |
| Einen anderen Vault öffnen, den du durchsucht hast | Rechtsklick auf seinen Namen am Anfang der Zeile |
| Die Endung der Datei in der Zeile sehen | **Dateiendungen anzeigen** in den Einstellungen aktivieren |
| Ein Ordner-Segment in einem neuen Tab öffnen | <kbd>Strg</kbd> oder mittlere Maustaste darauf, oder es auf die Tab-Leiste ziehen |
| Die Pfadleiste über die Tastatur erreichen | *Pfadleiste fokussieren* in den Tastenkürzeln belegen |
| Eine Webadresse oder einen `obsidian://`-Link öffnen | In die Leiste tippen und <kbd>Enter</kbd> drücken |
| Irgendetwas abbrechen | <kbd>Esc</kbd>, oder außerhalb der Kopfzeile klicken |
| Einträge probeweise durchgehen, bevor du dich festlegst | Mit den Pfeiltasten oder dem Mauszeiger durchs Dropdown gehen; <kbd>↑</kbd> über den Anfang hinaus gibt deinen Text zurück |
| Eine Notiz in einen darüberliegenden Ordner verschieben | Sie in der Zeile auf diesen Ordner ziehen |
| Ein Textschnipsel als neue Notiz behalten | Den Text auf einen Ordner ziehen, einen Namen tippen, <kbd>Enter</kbd> |
| Ein Textschnipsel zur gerade gelesenen Notiz hinzufügen | Auf den Namen der Notiz ziehen, bestätigen |
| Einen gekürzten Ordnernamen vollständig sehen | Mit der Maus darüberfahren, oder den Bereich verbreitern |
| Herausfinden, wo der Vault selbst liegt | Mit der Maus über das Symbol am Anfang der Zeile fahren |
| Eine Notiz aus dem Vault herausnehmen | Stift → außerhalb browsen → den Dialog bestätigen (Links brechen dabei) |
| Schreiben außerhalb deines Vaults erlauben | Klick auf das **rote Vorhängeschloss** in der Kopfzeile; der Umbenennen-Schalter tritt an seine Stelle |
| Es wieder sperren | Den Schalter klicken, bis das Vorhängeschloss zurück ist — ein Druck hinein, ein Druck heraus |
| Eine Datei außerhalb des Vaults löschen | Das Schloss öffnen, dann Rechtsklick auf die Datei: *Löschen* verschiebt sie in den Papierkorb deines Systems |

## Einstellungen

| Einstellung | Optionen | Standard | Was sie bewirkt |
| --- | --- | --- | --- |
| **Sprache** | Obsidian-Standard, oder eine von 46 | Obsidian-Standard | In welcher Sprache der eigene Text dieses Plugins ist. *Obsidian-Standard* folgt der in den Darstellungseinstellungen festgelegten Sprache, was sich fast jeder wünscht. Die Zeile selbst — ihr Name, ihre Beschreibung und *Obsidian-Standard* — bleibt Englisch, egal was gewählt ist, weil sie der Weg zurück aus einer Sprache ist, die du nicht lesen kannst. Griechisch und Sanskrit sind hier übersetzt und fehlen in Obsidians eigener Liste, sodass diese Einstellung der einzige Weg ist, sie zu erreichen. |
| **Ausrichtung** | Links / Mitte / Rechts | Links | Wo die Pfadleiste in der Kopfzeile sitzt. *Mitte* entspricht Obsidians klassischem Aussehen. |
| **Trennzeichen** | Beliebiges Zeichen | `/` | Der zwischen den Segmenten gezeichnete Trenner. Sechs Voreinstellungen mit einem Klick (`/ > ▸ › \ •`) stehen vor dem Textfeld. |
| **Vault-Namen anzeigen** | An / Aus | An | Ob der Vault selbst das erste Segment der Pfadleiste ist. Ausgeschaltet wird aus diesem Segment ein 🏠-Symbol statt dass es verschwindet, sodass der Pfad weiterhin irgendwo Anklickbarem beginnt. |
| **Ordnername öffnet das Dropdown** | An / Aus | An | Vertauscht, was ein Ordnername und das Trennzeichen danach tun — siehe [die Tabelle oben](#die-pfadleiste). Mit [Folder notes](obsidian://show-plugin?id=folder-notes) öffnet das Trennzeichen Ordnernotizen. Gilt nie im Verschieben-/Umbenennen-Modus. |
| **Punktdateien anzeigen** | An / Aus | Aus | Ob Punktdateien und Punktordner in den Dropdowns aufgelistet werden. Der Überschreibschutz gilt in jedem Fall. |
| **Alle Dateitypen anzeigen** | — | — | Nicht die Einstellung dieses Plugins, sondern die von Obsidian, hier genannt, weil sie dieselbe Frage beantwortet: dein Vault indiziert nur die Dateitypen, die ihm gesagt wurden, und nur was er indiziert, kann aufgelistet werden. Such danach in Obsidians Einstellungen und schalte sie ein, um jede Datei zu sehen; die Schaltfläche neben der Zeile öffnet diese Seite mit der Einstellung ins Bild gescrollt und aufblinkend, so wie ein Klick in der eigenen Suche der Einstellungen es täte. Außerhalb des Vaults gilt sie nicht, da dort ohnehin nichts indiziert ist. |
| **Dateiendungen anzeigen** | An / Aus | Aus | Ob der Dateiname in der Zeile seine Endung trägt. Aus, bleibt sie weg — so wie Obsidian sie beim Titel einer Notiz wegläßt. An, benennt die Zeile die Datei so, wie es das Dateisystem tut. So oder so ist die Endung das Zweite, das aufgegeben wird, wenn der Zeile der Platz ausgeht, gleich nach dem Vault-Namen. |
| **Zugriff auf externe Dateien** | An / Aus | **Aus** | Ob der Vault-Name das Dropdown der Orte öffnet. Aus, blickt nichts im Plugin je über diesen Vault hinaus. |
| **Tastenkürzel** | Schaltfläche | — | Öffnet Obsidians *Tastenkürzel*, gefiltert auf dieses Plugin, wo *Pfadleiste fokussieren* eine Taste zugewiesen werden kann. |

## Die Symbole ersetzen

Lure zeichnet drei Symbole: das Vault-Wurzel-Symbol (wenn **Vault-Namen anzeigen** aus ist), den Verschieben-/Umbenennen-Schalter, und das Vorhängeschloss, das an dessen Stelle steht, während das Schreiben außerhalb des Vaults gesperrt ist. Alle lassen sich aus einem Theme oder einem CSS-Snippet austauschen — leg das Ersatzzeichen fest und blend das mitgelieferte in einer einzigen Regel aus:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* Wird nur je geschlossen gezeigt: das Öffnen übergibt den Platz an den Umbenennen-Schalter. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}
```

`--lure-icon-glyph` nimmt alles, was in CSS `content` gültig ist, `url(...)` funktioniert also für ein Bild ebenso wie ein Text- oder Emoji-Zeichen. Lass `--lure-icon-svg` unangetastet, um das Lucide-Symbol zu behalten und dein Zeichen daneben zu zeichnen.
