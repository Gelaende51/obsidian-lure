<!-- Übersetzung von README.md — Stand: Commit 9e180d1.
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
- **Autor** — Vault51: legte jede Funktion fest, testete jede Fassung in einem echten Vault, gab die Korrekturen vor, prüfte alle Ergebnisse.
- **Verbrauch** — 3.–13. August 2026, neun Sitzungen, \~4.928 Antworten: \~7,2 Mio. Token erzeugt, \~23,7 Mio. gesendet, \~1169,6 Mio. zwischengespeicherte Wiederholungen (\~1200,5 Mio. gesamt).
- **Herkunft** — das Modell hat aus quelloffenem Code, Dokumentation und Beiträgen der Gemeinschaft gelernt, die andere veröffentlicht haben.

## Funktionen

- **Klick auf einen Ordner** öffnet ein Dropdown mit dem Inhalt seines *übergeordneten* Ordners — tausche einen Ordner gegen einen benachbarten, ohne den Rest des Pfads anzurühren. Der Name der Notiz verhält sich genauso, Dateiendung eingeschlossen.
- **Klick auf das Trennzeichen** hinter einem Ordner zeigt ihn im Dateiexplorer und klappt ihn auf. Eine Einstellung tauscht die beiden Rollen.
- **Rechtsklick oder Ziehen** auf jeden Eintrag — das Kontextmenü und das Ziehverhalten des Dateiexplorers selbst.
- **Klick auf den Dateinamen oder auf freie Fläche** öffnet ein Eingabefeld für einen Pfad, mit Autovervollständigung. `/` steigt hinab, <kbd>Rücktaste</kbd> geht eine Ebene hinaus, <kbd>Enter</kbd> bestätigt.
- **Die Stift-Ordner-Schaltfläche** stellt dieselben Interaktionen auf Umbenennen/Verschieben um, geprüft so, wie Obsidian selbst prüft.
- **<kbd>Strg</kbd> halten** öffnet in einem neuen Tab — oder kopiert die Notiz im Umbenennen-/Verschieben-Modus dorthin, statt sie zu verschieben.
- **<kbd>F2</kbd>** wechselt zwischen dem Inline-Titel und der Pfadleiste.
- **Klick auf den Vault-Namen** öffnet deine anderen Vaults, den Persönlichen Ordner, das Wurzelverzeichnis und eingehängte Laufwerke, ohne den Vault zu wechseln. Nur lesend, bis du ein Schloss öffnest, und durchgehend in der Fehlerfarbe umrandet. Standardmäßig aus — siehe [Außerhalb des Vaults](#außerhalb-des-vaults).
- **Zwei Warnstufen** — Rot außerhalb des Vaults, Orange für Textdateien, für die Obsidian keinen Editor hat. Siehe [die beiden Warnfarben](usage.de.md#die-beiden-warnfarben).
- **Themenfähige Symbole**, über ein CSS-Snippet austauschbar — und **45 Sprachen**, jede die Obsidian mitbringt.
- **Einstellungen:** Ausrichtung, Trennzeichen-Vorlagen, welcher Klick das Dropdown öffnet, Vault-Name, Punktdateien.

![Dasselbe Dropdown im Umbenennen-/Verschieben-Modus: der aktuelle Dateiname oben angeheftet, darunter benachbarte Ordner, und bereits vergebene Namen ausgegraut](../images/dropdown.png)

*Im Umbenennen-/Verschieben-Modus bietet dasselbe Dropdown anderes an: oben angeheftet der aktuelle Name der Notiz, um sie zu verschieben, ohne sie umzubenennen; darunter Ordner, in die sie verschoben werden kann; und bereits vergebene Namen ausgegraut, damit nichts versehentlich überschrieben wird.*

→ [Vollständige Anleitung](usage.de.md)

## Außerhalb des Vaults

Obsidians Entwicklerrichtlinien verlangen, dass Plugins jeden Zugriff auf Dateien außerhalb des Vaults erklären, also ganz direkt:

**Ob es das überhaupt tut.** Nur wenn du **Zugriff auf externe Dateien** einschaltest — standardmäßig **aus**. Ausgeschaltet gibt es im Plugin keinen Weg zu einem externen Pfad, und nichts von dem unten Beschriebenen läuft jemals.

**Was gelesen wird.** Nur auf deine Aufforderung hin. Ein Klick auf den Vault-Namen listet deine anderen Vaults auf — gelesen aus Obsidians eigener `obsidian.json` — dazu deinen Persönlichen Ordner, das Wurzelverzeichnis und eingehängte Laufwerke (`/proc/mounts` unter Linux, `/Volumes` unter macOS, Laufwerksbuchstaben unter Windows). Von dort aus zeigt das Blättern Verzeichnisinhalte, und das Öffnen einer Datei liest genau diese eine Datei.

**Was geschrieben wird.** Nichts, bis du eine Schaltfläche drückst, die das ankündigt. Es gibt zwei davon, und jede deckt nur ihren eigenen Bereich ab:

- Die Schaltfläche **Als Text bearbeiten** im Betrachter gibt die Datei vor dir frei, für diese eine Datei in diesem einen Tab. Deine Änderungen werden dann beim Tippen dorthin zurückgeschrieben.
- Das **Schloss** in der Kopfzeile, nur sichtbar solange die Pfadleiste aus dem Vault hinauszeigt, gibt Anlegen, Umbenennen und Verschieben an externen Pfaden frei. Es schließt sich wieder, sobald du zurück hineingehst, damit eine Erlaubnis nie den Ordner überdauert, für den du sie erteilt hast.

Keine der beiden Freigaben wird im Arbeitsbereich oder in den Einstellungen gespeichert, also ist das Schreiben nie an einer Datei scharf gestellt, an deren Öffnen du dich nicht erinnerst. In keinem der beiden Zustände wird jemals etwas überschrieben — ein vorhandenes Ziel wird abgelehnt, und zwar über das exklusive Anlegen des Dateisystems selbst statt über eine Prüfung, die ein Wettrennen verlieren könnte — und eine Notiz kann nie aus deinem Vault heraus *verschoben* werden, weil Links darauf still zerbrechen würden; <kbd>Strg</kbd> halten kopiert sie stattdessen hinaus.

**Warum.** Notizen, die du brauchst, liegen oft in einem anderen Vault, einem Sync-Ordner oder auf einem USB-Stick, und Obsidians eigene Antwort — den Vault wechseln — schließt alles, was du offen hattest. Hiermit kannst du nachsehen, ohne zu gehen, und gleich einen Tippfehler beheben.

**Die Einschränkung.** Obsidians Editor ist an Dateien innerhalb des Vaults gebunden, deshalb **kann** eine externe Datei nicht als echte Notiz mit Links, Rückverweisen und allem Übrigen geöffnet werden; kein Plugin kann das. Lure zeigt sie stattdessen in einem eigenen Betrachter (Markdown, Bilder, Audio, Video, PDF), mit *Extern öffnen* für alles andere. Die Pfadleiste bleibt in der Fehlerfarbe umrandet, solange sie aus deinem Vault hinauszeigt, und der Pfad beginnt an der Stelle, die du gewählt hast — ein Vault-Name, dein Persönlicher Ordner, ein Laufwerk — statt am Verzeichnisaufbau des Rechners.

## Installation

Auf [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure) gelistet, aber noch nicht für den Browser in der App freigegeben — daher auf einem dieser Wege installieren:

**Manuell:** `main.js`, `manifest.json` und `styles.css` aus dem [neuesten Release](https://github.com/Gelaende51/obsidian-lure/releases) nach `<vault>/.obsidian/plugins/lure/` herunterladen und das Plugin dann unter **Einstellungen → Externe Erweiterungen** aktivieren.

**BRAT:** `Gelaende51/obsidian-lure` als Beta-Plugin hinzufügen.

**Aus dem Quelltext:** `npm install && npm run build` — siehe [Entwicklung](../development.md).

## Kompatibilität

Kein Plugin wird vorausgesetzt. Der Kern-**Dateiexplorer** ist, sofern aktiviert, das, was Ordner in der Seitenleiste anzeigt; ohne ihn laufen diese Klicks ins Leere.

Getestet gegen die Community-Plugins, die sich die Kopfzeile der Notiz teilen oder auf den Ordnerklick antworten — in beiden Ladereihenfolgen, jeweils ein- und ausgeschaltet:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — das Trennzeichen öffnet die Notiz eines Ordners, statt den Ordner anzuzeigen, wodurch jeder Abschnitt des Pfads zu einem Ort wird, an den du gehen kannst. Das einzige Ordnernotiz-Plugin, das die Kopfzeile für sich beansprucht; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) und [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) hören dort nicht mit, dort zeigt das Trennzeichen also wie gewohnt den Ordner.
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
- **Plugin-Seite:** https://community.obsidian.md/plugins/lure
- **Webpräsenz / Quelltext:** https://github.com/Gelaende51/obsidian-lure
- **Spenden:** [Ko-fi](https://ko-fi.com/vault51) — siehe [Mitwirken](#mitwirken).
- **Lizenz:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. Forks und weitergegebene Builds müssen ihren Quelltext unter derselben Lizenz bereitstellen.
