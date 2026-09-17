<!-- Tłumaczenie CHANGELOG.md — stan: commit 973105b.
     Tłumaczenie maszynowe (Claude Opus 5), nieskorygowane przez native
     speakerów. Poprawki mile widziane; wersją rozstrzygającą jest
     angielski CHANGELOG. -->

[English](../../CHANGELOG.md) · [العربية](CHANGELOG.ar.md) · [አማርኛ](CHANGELOG.am.md) · [Беларуская](CHANGELOG.be.md) · [বাংলা](CHANGELOG.bn.md) · [Català](CHANGELOG.ca.md) · [Čeština](CHANGELOG.cs.md) · [Dansk](CHANGELOG.da.md) · [Deutsch](CHANGELOG.de.md) · [Ελληνικά](CHANGELOG.el.md) · [Español](CHANGELOG.es.md) · [فارسی](CHANGELOG.fa.md) · [Suomi](CHANGELOG.fi.md) · [Français](CHANGELOG.fr.md) · [Gaeilge](CHANGELOG.ga.md) · [עברית](CHANGELOG.he.md) · [Magyar](CHANGELOG.hu.md) · [Bahasa Indonesia](CHANGELOG.id.md) · [Italiano](CHANGELOG.it.md) · [日本語](CHANGELOG.ja.md) · [ქართული](CHANGELOG.ka.md) · [ភាសាខ្មែរ](CHANGELOG.kh.md) · [한국어](CHANGELOG.ko.md) · [Latviešu](CHANGELOG.lv.md) · [Bahasa Melayu](CHANGELOG.ms.md) · [नेपाली](CHANGELOG.ne.md) · [Nederlands](CHANGELOG.nl.md) · [Norsk](CHANGELOG.no.md) · **Polski** · [Português](CHANGELOG.pt.md) · [Português (Brasil)](CHANGELOG.pt-BR.md) · [Română](CHANGELOG.ro.md) · [Русский](CHANGELOG.ru.md) · [संस्कृतम्](CHANGELOG.sa.md) · [Slovenčina](CHANGELOG.sk.md) · [Shqip](CHANGELOG.sq.md) · [Српски](CHANGELOG.sr.md) · [Svenska](CHANGELOG.sv.md) · [ไทย](CHANGELOG.th.md) · [Türkçe](CHANGELOG.tr.md) · [Українська](CHANGELOG.uk.md) · [Oʻzbekcha](CHANGELOG.uz.md) · [Tiếng Việt](CHANGELOG.vi.md) · [简体中文](CHANGELOG.zh.md) · [繁體中文](CHANGELOG.zh-TW.md)

# Lista zmian

Każde wydanie Lure, od najnowszego. To, co pojawiło się od ostatniego wydania, znajduje się pod nagłówkiem *Niewydane*. Wersje nie mają przedrostka `v`, zgodnie ze znacznikami wydań.

## 1.3.0 — 2026-09-17[^1.3.0]

### Dodano

- **Wciągnij plik do skarbca z zewnątrz.** Przenieś lub skopiuj plik z dowolnego miejsca na dysku do ścieżki wewnątrz skarbca; trafia tam jako prawdziwa notatka, a przenoszenie usuwa oryginał dopiero po udanym skopiowaniu.
- **Upuść tekst lub plik na pasek, aby go zapisać.** Na folder: nowa notatka w tym folderze, nazwana tak, jak wpiszesz. Na nazwę notatki albo na separator folderu, który ma notatkę folderu: dopisane na końcu tej notatki, po potwierdzeniu.
- **Utwórz notatkę folderu** drugim naciśnięciem tego, co otwiera folder, jeśli działa wtyczka notatek folderowych, a folder jeszcze żadnej nie ma. Trafia tam, gdzie każą własne ustawienia [Folder notes](https://github.com/LostPaul/obsidian-folder-notes).
- **Przeciągnij folder z paska ścieżki na pasek kart**, aby go tam otworzyć: jego notatkę folderu, jeśli ją ma, w przeciwnym razie kartę stojącą w tym folderze.
- **Kółko myszy chodzi po liście.** Nad nazwą pierwszy obrót otwiera listę tej nazwy, a każdy kolejny przesuwa podświetlenie o wiersz. Wiersz, który przewija się w bok, zatrzymuje kółko dla siebie.
- **Wyjdź strzałką przed początek pola**, aby wciągnąć do niego folder stojący wcześniej: <kbd>←</kbd> dla jednego folderu, <kbd>Shift</kbd>+<kbd>Home</kbd> (albo <kbd>Home</kbd> przy zamkniętej liście) dla wszystkich.
- **Pole przybiera kolor tego, co nazywa**, ten sam, który ma ten wiersz na liście, i robi się czerwone, gdy nic mu już nie odpowiada — w chwili, w której <kbd>Enter</kbd> coś utworzy, zamiast to otworzyć.
- **Notatki folderów są na liście szare**, więc czyta się je jako należące do folderu, a nie jako jeszcze jedną notatkę.
- **Kliknij separator środkowym przyciskiem**, aby otworzyć ten folder w nowej karcie: jego notatkę folderu albo kartę stojącą w tym folderze.

### Zmieniono

- **Kłódka i przełącznik zmiany nazwy to jeden element.** Poza skarbcem miejsce przełącznika zajmuje czerwona, zamknięta kłódka; jej otwarcie oddaje to miejsce przełącznikowi, a wyjście z trybu zmiany nazwy znów ją zamyka.
- **Klawisz zmiany nazwy pyta też kłódkę.** Poza skarbcem jedno naciśnięcie mruga kłódką; drugie naciśnięcie w ciągu pół sekundy daje to, co daje kłódka, i otwiera tryb zmiany nazwy.
- **Klawisz zmiany nazwy przechodzi pełny cykl** — tytuł w treści, nazwa, nazwa z rozszerzeniem, ścieżka od skarbca, ścieżka od katalogu głównego systemu — a kolejne naciśnięcie to znów tytuł w treści.
- **Kliknięcie z <kbd>Ctrl</kbd> i kliknięcie środkowym przyciskiem nie są już tym samym.** Jedno otwiera kartę i do niej przechodzi, drugie otwiera ją w tle.
- **Kliknięcie nazwy notatki prawym przyciskiem otwiera własne menu pliku.**
- **Lista jest tak wysoka, na ile pozwala okno**, zamiast sztywnych 300 pikseli Obsidiana.
- **Kliknięcie folderu przy otwartym polu zachowuje całą ścieżkę za nim**, a kliknięcie wewnątrz pola w folder wypisuje zawartość tego folderu w całości.
- **Separator otwiera notatkę folderu na dowolnej głębokości**, gdy działa Folder notes, i jest podkreślony wszędzie tam, gdzie taka notatka istnieje. Wcześniej działały tylko foldery najwyższego poziomu. Przy pozostałych wtyczkach notatek folderowych separator nadal pokazuje folder.

### Naprawiono

- **Otwarte pole przeżywało swój plik.** Przejście do innej notatki przy otwartym pasku ścieżki zostawiało pasek nazywający stary plik do końca sesji.
- **Usuwanie, zmiana nazwy i Stwórz kopię były odrzucane poza skarbcem** przy otwartej kłódce i w ogóle nie dawały się wywołać dla obrazów, plików PDF i stron.
- **<kbd>Ctrl</kbd>+<kbd>Enter</kbd> nic nie robiło przy otwartej liście** — a tak otwiera się każde pole.
- **<kbd>Enter</kbd> przy otwartej liście, gdy nic nie było podświetlone**, nic nie robił; teraz zatwierdza to, co wpisałeś.
- **Wiersza, który się nie mieścił, choć każda nazwa była już najkrótsza, nie dało się przewinąć**, przez co koniec ścieżki pozostawał nieosiągalny.
- **Wyłączenie wtyczki zostawiało martwy przycisk** w nagłówku każdej notatki, którą zdążyła załatać.

## 1.2.0 — 2026-08-25[^1.2.0]

### Dodano

- **Ustawienie języka.** Lure domyślnie podąża za językiem Obsidiana i można go ustawić na dowolny z własnych. To także jedyna droga do tłumaczenia greckiego i sanskryckiego, których sam Obsidian nie oferuje. Etykieta samego ustawienia pozostaje po angielsku, żeby zawsze dało się do niej wrócić z języka, którego nie umiesz przeczytać.

## 1.1.2 — 2026-08-25[^1.1.2]

### Zmieniono

- **Lżejszy arkusz stylów.** Pasek nie używa już selektorów `:has()` ani większości reguł `!important`. Dopasowuje się mniejszym nakładem pracy, a liczba ostrzeżeń w przeglądzie wtyczki spadła z 56 do 7.

## 1.1.1 — 2026-08-22[^1.1.1]

### Naprawiono

- **Krótka nazwa folderu mogła rysować się z dziurą w środku** — `atlas` jako `atl as` — ponieważ miejsce zarezerwowane na jej skróconą postać było szersze niż sama nazwa.

## 1.1.0 — 2026-08-22[^1.1.0]

### Dodano

- **Słownik prawego przycisku.** Jedno naciśnięcie otwiera menu; dwa i trzy naciśnięcia kopiują coraz więcej — nazwę, nazwę z rozszerzeniem, ścieżkę. Menu paska odpowiadają teraz menu Eksploratora plików pozycja po pozycji.
- **Menu poza skarbcem.** Wiersze listy i zewnętrzny podgląd oferują otwieranie, *Skopiuj ścieżkę* i *Pokaż w folderze*; przy otwartej kłódce również *Nowa notatka*, *Nowy folder*, *Stwórz kopię*, *Zmień nazwę…* i *Usuń*. Usuwanie przenosi do kosza systemowego i nigdy nie jest trwałe.
- **Otwieranie gdzie indziej.** <kbd>Ctrl</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> i kliknięcie środkowym przyciskiem na nazwie notatki lub na folderze otwierają go w nowej karcie, w podziale albo w oknie. Oba da się przeciągać, jak ich wiersze w Eksploratorze plików.
- **Przeciągaj notatki na pasek, aby je przenieść.** Upuść notatkę, kilka notatek albo folder na segment folderu lub na nazwę skarbca.
- **Polecenie: Ustaw fokus na pasku ścieżki**, z zaznaczoną całą ścieżką — bez domyślnego skrótu, przypisz własny.
- **Wpisz adres URL** w pasku ścieżki: `http(s)://` i `obsidian://` otwierają się jako odnośniki, `file://` i ścieżki zakodowane procentowo otwierają plik.
- **Uzupełnianie tabulatorem**, tak jak robi to powłoka: każde naciśnięcie uzupełnia tak daleko, jak zgadzają się nazwy w folderze, i zatrzymuje się tam, gdzie się różnią. <kbd>Shift</kbd>+<kbd>Tab</kbd> cofa się. Gdy nie ma już czego uzupełniać, <kbd>Tab</kbd> poszerza natomiast zaznaczenie: nazwa, nazwa z rozszerzeniem, ścieżka od skarbca, ścieżka od katalogu głównego systemu.
- **Lista otwiera się tam, gdzie jesteś** i podgląda w polu to, co wskazujesz; opuszczenie listy oddaje twój tekst.
- **Przenieś notatkę poza skarbiec** po potwierdzeniu, które liczy odnośniki, jakie to zerwie. Zostaje skopiowana na zewnątrz, a potem wyrzucona do kosza, więc da się ją odzyskać jak każdą usuniętą notatkę.
- Ustawienie **Pokazuj rozszerzenia plików** oraz rozumienie ścieżek w cudzysłowie (takich, jakie daje windowsowe *Kopiuj jako ścieżkę*).
- **Ustawienia pojawiają się w wyszukiwarce ustawień Obsidiana** w Obsidianie 1.13 i nowszym.

### Zmieniono

- **Długie ścieżki mieszczą się w panelu.** Nazwy skracane są od najmniej przydatnej — nazwa skarbca, potem rozszerzenie, potem foldery, a nazwa samej notatki na końcu — nigdy poza punkt, w którym da się je jeszcze rozróżnić. Najedź na skróconą nazwę, aby przeczytać ją w całości.
- **Kliknięcie nazwy notatki zaznacza ją bez rozszerzenia**, więc zmiana nazwy nie grozi już zmianą typu pliku.
- **Klawisz zmiany nazwy otwiera się na nazwie bez rozszerzenia**, a kolejne naciśnięcia poszerzają zaznaczenie.
- **Kliknięcie folderu zachowuje resztę ścieżki na widoku**, także poza skarbcem.
- **Powrót z przeglądania do skarbca otwiera pliki jako notatki**, z odnośnikami i odnośnikami zwrotnymi, a nie w zewnętrznym podglądzie.

### Naprawiono

- **Etykiety menu były po angielsku w każdym języku**; teraz pochodzą z własnych tłumaczeń Obsidiana.
- **Klawisz zmiany nazwy utykał na oknie zmiany nazwy Obsidiana**, gdy notatka była przewinięta poza swój tytuł.
- **<kbd>Esc</kbd> wymagał dwóch naciśnięć**, aby zamknąć pole i jego listę.
- **<kbd>Ctrl</kbd>+<kbd>Enter</kbd> otwierał odnośnik w edytorze** zamiast działać na pasku ścieżki.
- **Zmiana nazwy poza skarbcem gubiła wpisaną nazwę** po naciśnięciu kłódki.
- **Tabulator mógł krążyć bez postępu** na folderze, który stoi obok własnej notatki folderu.

## 1.0.4 — 2026-08-13[^1.0.4]

### Dodano

- **Notatka, na której jesteś, jest zaznaczona na niebiesko** na liście, więc powrót do jej folderu pokazuje, skąd wyszedłeś.

## 1.0.3 — 2026-08-13[^1.0.3]

### Dokumentacja

- README odsyła do strony wtyczki w katalogu społeczności, a przetłumaczone pliki README zostały uaktualnione.

## 1.0.2 — 2026-08-13[^1.0.2]

### Zmieniono

- **Wymaga Obsidiana 1.8.7 lub nowszego** (było 1.4.0). Potrzebują go dwie funkcje, na których opiera się pasek ścieżki — kopiowanie plików i dymek błędu pod polem.
- **Pliki do pobrania w wydaniach niosą podpisane poświadczenie budowania**, więc poleceniem `gh attestation verify` możesz potwierdzić, że `main.js` powstał z tego repozytorium.

### Naprawiono

- **Otwarcie brakującego pliku zewnętrznego w domyślnej aplikacji kończyło się cichą porażką**; niepowodzenie jest teraz zgłaszane.

## 1.0.1 — 2026-08-13[^1.0.1]

### Naprawiono

- **W trybie zmiany nazwy notatka kolidowała sama ze sobą** — powrót do jej własnego folderu ukrywał jej nazwę na liście, jak gdyby blokowała własną zmianę nazwy.
- **Pierwsze pokazanie folderu po uruchomieniu Obsidiana nic nie rozwijało.**
- **Wybranie folderu z listy mogło zakończyć tryb zmiany nazwy** zamiast wejść do tego folderu.
- **Zmiany zewnętrzne mogły zostać po cichu nadpisane** przez innego zapisującego, na przykład Sync albo drugi panel. Zapisy są teraz atomowe.
- **Wyzerowanie obrysu fokusu przenikało do innych widoków**; teraz dotyczy tylko nagłówków załatanych przez Lure.

### Dokumentacja

- README i przewodnik użytkowania są dostępne we wszystkich 44 językach, które dostarcza wtyczka.
- Przewodnik wymieniał ustawienie Obsidiana *Detect all file extensions*, które nazywa się teraz *Wykrywaj wszystkie rozszerzenia plików*.

## 1.0.0 — 2026-08-10[^1.0.0]

Pierwsze wydanie. Zastępuje nazwę pliku w nagłówku notatki klikalną, edytowalną ścieżką przez skarbiec — paskiem adresu dla twoich notatek, wzorowanym na tym z Dolphina.

### Dodano

- **Kliknięcie folderu** otwiera listę z zawartością folderu nadrzędnego, aby zamienić go na sąsiedni i nie ruszać reszty ścieżki.
- **Kliknięcie separatora** za folderem pokazuje go i rozwija w Eksploratorze plików albo otwiera jego notatkę folderu, jeśli obsługuje ją Folder notes.
- **Kliknięcie nazwy pliku lub pustego miejsca** pozwala wpisać ścieżkę, z autouzupełnianiem: `/` schodzi w dół, <kbd>Backspace</kbd> wychodzi poziom wyżej, <kbd>Enter</kbd> zatwierdza.
- **Tryb przenoszenia/zmiany nazwy** przełącza te same interakcje na przenoszenie i zmianę nazwy, ze sprawdzeniami takimi, jakie robi sam Obsidian.
- **<kbd>Ctrl</kbd> otwiera w nowej karcie** — albo, w trybie przenoszenia/zmiany nazwy, kopiuje tam notatkę.
- **<kbd>F2</kbd> przełącza** między tytułem w treści a paskiem ścieżki.
- **Poza skarbcem** (domyślnie wyłączone): nazwa skarbca otwiera inne skarbce, katalog domowy, katalog główny systemu plików i zamontowane napędy. Nic tam na zewnątrz nie jest zapisywane, dopóki tego nie odblokujesz, a notatkę można poza skarbiec tylko skopiować, nigdy przenieść.
- **45 języków.**

[^1.3.0]: Zmiany od 1.2.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.2.0...1.3.0>
[^1.2.0]: Zmiany od 1.1.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.2...1.2.0>
[^1.1.2]: Zmiany od 1.1.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.1...1.1.2>
[^1.1.1]: Zmiany od 1.1.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.0...1.1.1>
[^1.1.0]: Zmiany od 1.0.4: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.4...1.1.0>
[^1.0.4]: Zmiany od 1.0.3: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.3...1.0.4>
[^1.0.3]: Zmiany od 1.0.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.2...1.0.3>
[^1.0.2]: Zmiany od 1.0.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.1...1.0.2>
[^1.0.1]: Zmiany od 1.0.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.0...1.0.1>
[^1.0.0]: Pierwsze wydanie: <https://github.com/Gelaende51/obsidian-lure/releases/tag/1.0.0>
