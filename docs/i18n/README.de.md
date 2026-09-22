<!-- Übersetzung von README.md — Stand: Commit 2cbb237.
     Maschinell übersetzt (Claude Opus 5) und nicht von Muttersprachlern
     geprüft. Korrekturen sind willkommen; das englische README ist die
     maßgebliche Fassung. -->

[English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · **Deutsch** · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

Ein [Obsidian](https://obsidian.md)-Plugin, das den Dateinamen in der Kopfzeile einer Notiz in eine anklickbare, bearbeitbare Pfadleiste des vollständigen Vault-Pfads verwandelt — wie die Adressleiste im Dateimanager [Dolphin](https://apps.kde.org/dolphin/).

![Klick auf das Trennzeichen hinter einem Ordner: der Mauszeiger liegt darauf, und der Dateiexplorer hat diesen Ordner angezeigt und aufgeklappt](../images/breadcrumb.png)

Obsidian 1.8.7+ · nur Desktop · AGPL-3.0

## KI-Offenlegung

- **Agent** — **Claude Opus 5** und **Claude Sonnet 5** (Anthropic, über Claude Code): schrieb das TypeScript, das CSS, alle 45 Übersetzungssätze und die Dokumentation. Die Übersetzungen sind maschinell erstellt und wurden nicht von Muttersprachlern geprüft.
- **Verbrauch** — 3. August – 19. September 2026, 20 Sitzungen, \~16.460 Antworten: \~19,9 Mio. Token erzeugt, \~87,0 Mio. gesendet, \~5451,0 Mio. zwischengespeicherte Wiederholungen (\~5558,0 Mio. gesamt).
- **Herkunft** — das Modell hat aus quelloffenem Code, Dokumentation und Beiträgen der Gemeinschaft gelernt, die andere veröffentlicht haben. Der größte Teil der Anerkennung gebührt ihnen.
- **Autor** — Vault51: legte jede Funktion fest, testete jede Fassung in einem echten Vault, gab die Korrekturen vor, prüfte alle Ergebnisse.

## Funktionen

- **Klick auf einen Ordner** öffnet ein Dropdown mit dem Inhalt seines *übergeordneten* Ordners — tausche einen Ordner gegen einen benachbarten, ohne den Rest des Pfads anzurühren. Der Name der Notiz verhält sich genauso und wird dabei ohne seine Endung markiert.
- **Klick auf das Trennzeichen** hinter einem Ordner zeigt ihn im Dateiexplorer und klappt ihn auf. Eine Einstellung tauscht die beiden Rollen.
- **Rechtsklick oder Ziehen auf jeden Eintrag** — das Kontextmenü des Dateiexplorers selbst, Eintrag für Eintrag, und sein Ziehverhalten. Pfade außerhalb des Vaults bekommen ein gleichwertiges, eigens für sie gebautes Menü, bis hin zu *Löschen* über den Papierkorb des Systems.
- **Klick auf den Dateinamen oder auf freie Fläche**, um einen Pfad zu tippen, mit Autovervollständigung. `/` steigt hinab, <kbd>Rücktaste</kbd> geht eine Ebene hinaus, <kbd>Enter</kbd> bestätigt — und ein Pfad, den es noch nicht gibt, wird einfach angelegt, mit einem Hinweis, wo er gelandet ist.
- **Das Dropdown öffnet auf dem Eintrag, in dem du stehst**, und gehst du mit den Pfeiltasten oder dem Zeiger hindurch, füllt sich das Feld mit dem, worauf du zeigst. Eine Zeile, auf die du zeigst, wird als das Angebot angezeigt, das sie machen würde; über eines der beiden Enden der Liste hinaus bekommst du zurück, was du getippt hattest, und nimmst du den Zeiger von der Liste, kehrt die Hervorhebung dorthin zurück, wo du warst. Die Liste folgt dem Cursor: dem Ordner, in dem er sich befindet, gefiltert nach den Buchstaben davor.
- **Die Stift-Ordner-Schaltfläche** stellt dieselben Interaktionen auf Umbenennen/Verschieben um, geprüft so, wie Obsidian selbst prüft. Ein bereits vergebener Name ist in der Liste rot, und wählst du ihn aus, wird gefragt, ob die Datei im Weg umbenannt oder mit ihr Plätze oder Namen getauscht werden sollen.
- **<kbd>Strg</kbd> halten** öffnet in einem neuen Tab — oder kopiert die Notiz im Umbenennen-/Verschieben-Modus stattdessen dorthin. Der Name der Notiz und die Ordnersegmente reagieren auf dieselben Modifikatortasten und lassen sich ziehen, genau wie ihre Zeilen im Dateiexplorer.
- **Namen vervollständigen sich beim Tippen** — was <kbd>Tab</kbd> schreiben würde, erscheint markiert hinter dem Cursor — die Übereinstimmung der Namen des Ordners, oder der Schritt zum ersten von ihnen; Weitertippen verschluckt sie Buchstabe für Buchstabe, <kbd>→</kbd> übernimmt einen Buchstaben, <kbd>Tab</kbd> oder <kbd>Ende</kbd> übernimmt sie ganz, <kbd>Rücktaste</kbd> nimmt sie zurück. Das Dropdown filtert weiter nach dem, was du getippt hast, nicht nach dem, was angeboten wurde.
- **<kbd>Tab</kbd> vervollständigt wie eine Shell**: es verlängert das Getippte so weit, wie die Namen in diesem Ordner übereinstimmen, geht Schritt für Schritt auf einen von ihnen zu, wenn sie das nicht tun, und steigt erst dann in einen Ordner hinab, wenn nur noch ein Name übrig ist. Hinter dem Ende des Pfads erweitert es stattdessen die Auswahl: Name, Name mit Endung, Pfad ab dem Vault, Pfad ab der Systemwurzel. <kbd>Umschalt</kbd>+<kbd>Tab</kbd> geht denselben Weg rückwärts — und markiert, was es zurückgibt, statt es zu löschen —, geht über dessen Anfang hinaus weiter den Pfad hinauf und springt dann herum zum Systempfad. In beiden Richtungen führt eine volle Runde zurück zu dem Pfad, den du aufgebaut hast.
- **Rechtsklick zum Kopieren** — zweimal für einen Namen, dreimal für alles rechts davon, und auf der freien Fläche für den ganzen Pfad oder den Systempfad.
- **Zieh eine Notiz auf einen Ordner in der Leiste**, um sie dorthin zu verschieben, samt Links — das Ziel ist ja schon zu sehen, also genügt ein einziges Ziehen statt eines Ausflugs durch den Dateibaum. Der Vault-Name funktioniert auch, für die Wurzel. Eine ganze Auswahl wandert als eine, und ein Ordner, der das Angebotene nicht aufnehmen kann, zeigt gar nichts an, statt erst hinterher zu scheitern.
- **Lass Text auf die Leiste fallen, um ihn festzuhalten** — auf einen Ordner oder den Vault-Namen, um dafür eine neue Notiz zu benennen, auf den Namen der Notiz selbst, um ihn ans Ende dessen anzufügen, was du gerade liest. Eine Datei von deinem Desktop funktioniert genauso, und die Leiste leuchtet blau umrandet, solange der Abwurf dort landen würde.
- **Das Feld trägt die Farbe dessen, was es benennt** — dieselbe Farbe, die seine Zeile im Dropdown hat, grau für die Notiz eines Ordners — und **wird rot**, sobald nichts mehr darauf passt; so siehst du schon vor dem Drücken von <kbd>Enter</kbd>, ob es eine Notiz öffnet oder eine anlegt.
- **HTML-Dateien erscheinen als Seiten**, in einem Rahmen, dem jede Berechtigung entzogen ist — keine Skripte, kein Netzwerk, kein eigener Origin —, wobei Stylesheets und Bilder neben der Datei mit hineingeholt werden, damit eine gespeicherte Seite noch wie sie selbst aussieht. Der Quelltext ist nur einen Klick entfernt.
- **Gib eine URL ein** — `https://`, `obsidian://` oder einen `file://`- bzw. prozentkodierten Pfad — und sie wird geöffnet, statt als Notizname behandelt zu werden. Webadressen landen in einem Tab von Obsidians eigenem Web-Viewer, sofern du ihn eingeschaltet hast.
- **Lange Pfade kürzen sich dort, wo Buchstaben entbehrlich sind** — nie über das hinaus, was einen Ordner vom Nachbarn unterscheidet, und fließend statt Buchstabe für Buchstabe — und scrollen erst, wenn nichts mehr zu stauchen ist. Zeig auf einen gekürzten Namen, um ihn wieder ganz zu sehen.
- **<kbd>F2</kbd>** wechselt zwischen dem Inline-Titel und der Pfadleiste, öffnet auf dem Namen ohne Endung und weitet sich bei weiteren Drücken bis zu den vollständigen Pfaden aus. Es gleitet sauber durch Obsidians Umbenennen-Dialog, wenn der Titel aus dem sichtbaren Bereich gescrollt ist. Ein Befehl *Pfadleiste fokussieren* durchläuft dieselben Stufen, ohne umzubenennen; die *Tastenkombinationen*-Zeile der Einstellungen führt dich dorthin, um ihn zu belegen.
- **Klick auf den Vault-Namen**, um deine anderen Vaults, den Persönlichen Ordner, das Wurzelverzeichnis und eingehängte Laufwerke zu durchstöbern, ohne den Vault zu wechseln. Nur lesend, bis du das rote Schloss öffnest, das dort draußen den Platz des Umbenennen-Schalters einnimmt, und durchgehend in der Fehlerfarbe umrandet. Standardmäßig aus — siehe [Außerhalb des Vaults](#außerhalb-des-vaults).
- **Die Vault-Wurzel listet die Seiten, die ein Pane halten kann** — `:graph`, `:search` und was auch immer deine Plugins registrieren. Wähle eine aus, oder tippe sie: Kein Dateiname beginnt mit einem Doppelpunkt, also dienen die Bezeichnungen zugleich als Adresse. `:graph`, innerhalb eines Ordners getippt, öffnet den Graphen dieses Ordners. Ist ein Startseiten-Plugin installiert, öffnet das eigene Trennzeichen des Vaults diese Seite beim ersten Klick und klappt beim nächsten den Dateibaum weg.
- **Eine Zeile auf Panes ohne Datei** — ein leerer Tab liest sich als `vault / :blank`, der Graph als `vault / :graph`, und das Feld daneben ist eine Adressleiste: Pfad eingeben, und <kbd>Enter</kbd> öffnet ihn in diesem Pane oder legt ihn an. Seitenleisten-Panes behalten Obsidians eigenen Titel.
- **Zwei Warnstufen** — Rot außerhalb des Vaults, Orange für Textdateien, für die Obsidian keinen Editor hat. Siehe [die Warnfarben](usage.de.md#die-beiden-warnfarben).
- **Themenfähige Symbole**, über ein CSS-Snippet austauschbar — und **46 Sprachen**: jede, die Obsidian mitbringt, dazu Griechisch und Sanskrit, für die es keine Einstellung hat. Wähle eine nur für das Plugin, oder folge der von Obsidian.
- **Einstellungen:** Sprache, Ausrichtung, Trennzeichen-Vorlagen, welcher Klick das Dropdown öffnet, Vault-Name, Punktdateien, Dateiendungen.

![Dasselbe Dropdown im Umbenennen-/Verschieben-Modus: der aktuelle Dateiname oben angeheftet, darunter benachbarte Ordner, und bereits vorhandene Notizen ausgegraut](../images/dropdown.png)

*Im Umbenennen-/Verschieben-Modus bietet dasselbe Dropdown anderes an: oben angeheftet der aktuelle Name der Notiz, um sie zu verschieben, ohne sie umzubenennen; Ordner, in die sie verschoben werden kann; und bereits vergebene Namen ausgegraut, damit nichts versehentlich überschrieben wird.*

→ [Vollständige Anleitung](usage.de.md)

## Außerhalb des Vaults

Obsidians Entwicklerrichtlinien verlangen, dass Plugins jeden Zugriff auf Dateien außerhalb des Vaults erklären, also ganz direkt:

**Ob es das überhaupt tut.** Nur wenn du **Zugriff auf externe Dateien** einschaltest — standardmäßig **aus**. Ausgeschaltet gibt es im Plugin keinen Weg zu einem externen Pfad, und nichts von dem unten Beschriebenen läuft jemals.

**Was gelesen wird.** Nur auf deine Aufforderung hin. Ein Klick auf den Vault-Namen listet deine anderen Vaults auf — gelesen aus Obsidians eigener `obsidian.json` — dazu deinen Persönlichen Ordner, das Wurzelverzeichnis und eingehängte Laufwerke (`/proc/mounts` unter Linux, `/Volumes` unter macOS, Laufwerksbuchstaben unter Windows). Von dort aus zeigt das Blättern Verzeichnisinhalte, und das Öffnen einer Datei liest genau diese eine Datei.

**Was geschrieben wird.** Nichts, bis du eine Schaltfläche drückst, die das ankündigt. Es gibt zwei davon, und jede deckt nur ihren eigenen Bereich ab:

- Die Schaltfläche **Als Text bearbeiten** im Betrachter gibt die Datei vor dir frei, für diese eine Datei in diesem einen Tab. Deine Änderungen werden dann beim Tippen dorthin zurückgeschrieben.
- Das **rote Schloss** in der Kopfzeile, das den Platz des Umbenennen-Schalters einnimmt, solange die Pfadleiste aus deinem Vault hinauszeigt, gibt Anlegen, Umbenennen, Verschieben und Löschen an externen Pfaden frei — und überlässt den Platz, einmal geöffnet, wieder dem Schalter. Es schließt sich wieder, sobald du zurück hineingehst, und bei dem Druck, der den Umbenennen-Modus verlässt, damit eine Erlaubnis nie den Ordner überdauert, für den du sie erteilt hast.

Keine der beiden Freigaben wird im Arbeitsbereich oder in den Einstellungen gespeichert, also ist das Schreiben nie an einer Datei scharf gestellt, an deren Öffnen du dich nicht erinnerst. In keinem der beiden Zustände wird jemals etwas überschrieben — ein vorhandenes Ziel wird abgelehnt, und zwar über das exklusive Anlegen des Dateisystems selbst statt über eine Prüfung, die ein Wettrennen verlieren könnte.

Eine Notiz aus deinem Vault *hinaus* zu verschieben, ist der eine Schreibvorgang, der etwas kostet, das nichts zurückbringen kann: Obsidian aktualisiert Links nur innerhalb des Vaults, also zerbricht jeder Link, der auf diese Notiz zeigt. Angeboten wird es nur hinter einem Dialog, der genau das sagt und die betroffenen Notizen zählt, und es geschieht als Kopieren-dann-Löschen über Obsidians eigenen Papierkorb, sodass es sich genauso wiederherstellen lässt wie eine gelöschte Notiz. <kbd>Strg</kbd> halten kopiert sie stattdessen hinaus.

**Warum.** Notizen, die du brauchst, liegen oft in einem anderen Vault, einem Sync-Ordner oder auf einem USB-Stick, und Obsidians eigene Antwort — den Vault wechseln — schließt alles, was du offen hattest. Hiermit kannst du nachsehen, ohne zu gehen, und gleich einen Tippfehler beheben.

**Die Einschränkung.** Obsidians Editor ist an Dateien innerhalb des Vaults gebunden, deshalb **kann** eine externe Datei nicht als echte Notiz mit Links, Rückverweisen und allem Übrigen geöffnet werden; kein Plugin kann das. Lure zeigt sie stattdessen in einem eigenen Betrachter (Markdown, Bilder, Audio, Video, PDF), mit *Extern öffnen* für alles andere. Die Pfadleiste bleibt in der Fehlerfarbe umrandet, solange sie aus deinem Vault hinauszeigt, und der Pfad beginnt an der Stelle, die du gewählt hast — ein Vault-Name, dein Persönlicher Ordner, ein Laufwerk — statt am Verzeichnisaufbau des Rechners.

## Installation

**In Obsidian:** **Einstellungen → Externe Erweiterungen → Durchsuchen** öffnen, nach *Lure* suchen, dann *Installieren* und *Aktivieren* — oder auf [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure) *Add to Obsidian* drücken.

**Manuell:** `main.js`, `manifest.json` und `styles.css` aus dem [neuesten Release](https://github.com/Gelaende51/obsidian-lure/releases) nach `<vault>/.obsidian/plugins/lure/` herunterladen und das Plugin dann unter **Einstellungen → Externe Erweiterungen** aktivieren.

**BRAT:** `Gelaende51/obsidian-lure` als Beta-Plugin hinzufügen.

**Aus dem Quelltext:** `npm install && npm run build` — siehe [Entwicklung](../development.md).

## Kompatibilität

Kein Plugin wird vorausgesetzt. Der Kern-**Dateiexplorer** ist, sofern aktiviert, das, was Ordner in der Seitenleiste anzeigt; ohne ihn laufen diese Klicks ins Leere.

Getestet gegen die Community-Plugins, die sich die Kopfzeile der Notiz teilen oder auf den Ordnerklick antworten — in beiden Ladereihenfolgen, jeweils ein- und ausgeschaltet:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — das Trennzeichen öffnet die Notiz eines Ordners, statt den Ordner anzuzeigen, wodurch jeder Abschnitt des Pfads zu einem Ort wird, an den du gehen kannst, wie tief er auch liegt: die Notiz wird nach der eigenen Konvention dieses Plugins aufgelöst, statt es ihm zu überlassen, zu antworten. Es ist außerdem das einzige, das eine solche Konvention veröffentlicht; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) und [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) veröffentlichen keine und beanspruchen den Pfad in der Kopfzeile nie für sich, dort zeigt das Trennzeichen also wie gewohnt den Ordner.
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer) und [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — beide zeichnen in dasselbe Kopfzeilenelement; Lure behält die Zeile, gleich welches zuerst lädt, und schaltet man eines ab, bleibt das andere unversehrt.
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header), [Running Head](obsidian://show-plugin?id=running-head), [Crumbs](obsidian://show-plugin?id=crumbs-obsidian), [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — haben ihre eigene Leiste und kommen sich nicht in die Quere.

Nur Desktop — das Bedienkonzept braucht Hover, genaue Klicks und eine Tastatur. Vollständige Ergebnisse, offene Erwartungen und der Vergleich mit Quick Explorer und Breadcrumbs stehen in [Kompatibilität](../compatibility.md).

## Mitwirken

- Issues und Pull Requests sind willkommen — besonders **Übersetzungskorrekturen**, da alle 45 Sprachen maschinell übersetzt und nicht von Muttersprachlern geprüft sind. Zur Einrichtung und zu den Grundregeln siehe [Entwicklung](../development.md).
- **Issue-Tracker:** https://github.com/Gelaende51/obsidian-lure/issues
- **Spenden:** [Ko-fi](https://ko-fi.com/vault51). Das Plugin ist so oder so frei und AGPL-lizenziert; Trinkgeld freut mich, ist aber nie Voraussetzung. Vorgesehener Zweck ist der CO₂-Ausgleich — eine Absicht, keine Zusage: es wird nichts ausgeglichen, bevor die Summe den Aufwand lohnt, und sobald tatsächlich etwas ausgeglichen wurde, steht es hier.

## Danksagungen

- **Vault51** — Autor: Entwurf, Anforderungen und die manuellen Tests durchgehend.
- **Claude Opus 5** und **Claude Sonnet 5** (Anthropic, über Claude Code) — Umsetzung, Übersetzungen und Dokumentation, nach Vorgabe des Autors. Siehe [KI-Offenlegung](#ki-offenlegung).
- **[Obsidian](https://obsidian.md)** — die Anwendung, die dies erweitert, und die Quelle jedes Bausteins, den das Plugin verwendet: die Plugin-API, der Lucide-Symbolsatz hinter `setIcon`, die mitgelieferte i18next-Instanz, aus der die Kontextmenü-Beschriftungen gelesen werden, und die eigenen CSS-Klassen und -Variablen. Nichts von Dritten wird mitgeliefert; das Plugin hat **keine Laufzeitabhängigkeiten**.

> **Das Obsidian-Team war in keiner Weise an diesem Projekt beteiligt** — es hat daran weder geschrieben noch es geprüft, befürwortet oder unterstützt. Obsidian ist eine Marke von Dynalist Inc.; dies ist ein unabhängiges, nicht verbundenes Plugin.

Mitwirkende werden hier aufgeführt, sobald Beiträge eingehen.

## Links

- **Dokumentation:** [docs/](../)
- **Änderungsprotokoll:** [CHANGELOG.md](CHANGELOG.de.md)
- **Plugin-Seite:** https://community.obsidian.md/plugins/lure
- **Webpräsenz / Quelltext:** https://github.com/Gelaende51/obsidian-lure
- **Spenden:** [Ko-fi](https://ko-fi.com/vault51) — siehe [Mitwirken](#mitwirken).
- **Lizenz:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. Forks und weitergegebene Builds müssen ihren Quelltext unter derselben Lizenz bereitstellen.
