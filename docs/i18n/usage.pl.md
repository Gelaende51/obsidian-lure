<!-- Tłumaczenie docs/usage.md — stan: commit 7b2691a.
     Tłumaczenie maszynowe (Claude Opus 5), nieskorygowane przez native
     speakerów. Etykiety wtyczki pochodzą z src/lang/translations.ts, a te
     Obsidiana z tekstów dostarczanych przez samą aplikację, więc zgadzają
     się z tym, co widać na ekranie. -->

**Przeczytaj to w innych językach:** [English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · [Čeština](usage.cs.md) · [Dansk](usage.da.md) · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · [Bahasa Indonesia](usage.id.md) · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · [Norsk](usage.no.md) · **Polski** · [Português](usage.pt.md) · [Português (Brasil)](usage.pt-BR.md) · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

# Użycie

[← powrót do README](README.pl.md)

## Ścieżka

Pełna ścieżka notatki w skarbcu zastępuje samą nazwę pliku w nagłówku widoku — pasku pod rzędem kart, tym samym, na którym są przyciski wstecz i dalej.

W wierszu klikalne są dwie rzeczy, a **Nazwa folderu otwiera listę** decyduje, która robi co:

| | Nazwa folderu | Separator za nią |
| --- | --- | --- |
| **Włączone** (domyślnie) | Zaznacza ten folder do edycji | Otwiera folder |
| **Wyłączone** | Otwiera folder | Schodzi do tego folderu |

„Otwiera folder” znaczy to, co robi to kliknięcie w gołym Obsidianie. Bez wtyczki nasłuchującej w tym miejscu folder zostaje pokazany na pasku bocznym Przeglądarki plików — podświetlony i rozwinięty, żeby pokazać zawartość.

Z zainstalowaną wtyczką [Folder notes](obsidian://show-plugin?id=folder-notes) to samo kliknięcie otwiera zamiast tego notatkę tego folderu. To jedyna wtyczka notatek folderowych, o której stwierdzono, że zajmuje ścieżkę w nagłówku; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) i [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) zarządzają notatkami folderowymi, ale nie nasłuchują kliknięcia na ścieżce, więc przy nich separator pokazuje folder jak zwykle. Zobacz [zgodność](../compatibility.md#verified-against).

Separator jest **podkreślony tylko wtedy, gdy folder przed nim naprawdę ma notatkę folderową**, więc podkreślenie to obietnica, że jest co otwierać. Każdy separator i tak pozostaje klikalny — ten bez podkreślenia pokazuje i rozwija swój folder na pasku bocznym, co kursor w kształcie dłoni nadal sygnalizuje. Podkreślenie schodzi wtedy z nazwy folderu: przy włączonej zamianie to nazwa otwiera listę, więc oznaczanie jej jako odnośnika do notatki byłoby kłamstwem.

**Tryb zmiany nazwy/przenoszenia ma pierwszeństwo przed obydwoma**, cokolwiek mówi ustawienie: dopóki trwa przenoszenie, nic w wierszu nie otwiera folderu, bo otwarcie porzuciłoby przenoszenie. Nazwy folderów zaznaczają się do edycji, a separatory schodzą w dół — jedno i drugie to sposoby wskazania celu — a podkreślenie znika, żeby pokazać, że otwieranie jest zawieszone.

**Korzeń skarbca** to jedyny segment, który nie jest segmentem ścieżki. Nie ma folderu nadrzędnego, z którego można by wypisać sąsiadów, więc zamiast tego otwiera [listę lokalizacji](#przeglądanie-poza-skarbcem) — twoje inne skarbce, katalog domowy, katalog główny systemu plików i zamontowane napędy.

## Kliknięcie segmentu: zamień go na sąsiedni

Kliknięcie nazwy folderu zaznacza **nazwę tego folderu** w polu tekstowym i otwiera listę folderu **o poziom wyżej** — jego folderu nadrzędnego. Wpisanie albo wybranie pozycji zamienia ten folder na sąsiedni i zostawia nietknięte wszystko, co pod nim, więc `Projekty/2026/Start.md` → kliknij `2026` → wybierz `2025` daje `Projekty/2025/Start.md`.

Kliknięcie **nazwy notatki** działa tak samo względem jej własnego folderu i zaznacza nazwę pliku **razem z rozszerzeniem** — zmiana nazwy albo przekierowanie notatki zwykle oznacza zmianę i tego.

Kliknięcie folderu zaznaczyło już jeden segment, więc **kolejne kliknięcie** poszerza zaznaczenie do całego wiersza — tego folderu *i* wszystkiego pod nim — a to, co wpiszesz, zastępuje wtedy resztę ścieżki za jednym razem. Działa tak samo w nawigacji i w trybie zmiany nazwy/przenoszenia.

Dotyczy to tylko kontynuacji kliknięcia, które otworzyło pole. Kiedy raz użyjesz pola, zachowuje się jak każde inne pole tekstowe: kliknięcie ustawia kursor, podwójne bierze słowo, potrójne bierze wiersz.

Tak czy inaczej reszta ścieżki pozostaje widoczna wokół pola — jako plakietki przed nim i jako niezaznaczony tekst za nim — więc pełna ścieżka nigdy nie znika z nagłówka. Pisz, żeby zastąpić zaznaczenie, albo naciśnij <kbd>End</kbd> / <kbd>→</kbd>, żeby je zachować i pisać dalej od tego miejsca. Lista pokazuje cały folder niezależnie od tego, co jest wypełnione; filtruje dopiero, kiedy naprawdę zaczniesz pisać.

## Schodzenie po separatorze

Kliknięcie separatora (przy wyłączonej opcji **Nazwa folderu otwiera listę**) schodzi do folderu przed nim: lista pokazuje zawartość *tego* folderu, a reszta ścieżki otwiera się zaznaczona w polu. Wybranie folderu dokłada go do śladu ścieżki i od razu otwiera kolejną listę, więc możesz zejść po drzewie samymi kliknięciami, nie opuszczając wiersza nagłówka.

## Pozycje listy to prawdziwe wiersze menedżera plików

Każdy plik i folder na liście zachowuje się jak jego wiersz w Przeglądarce plików:

- **Prawy przycisk myszy** daje to samo menu kontekstowe — *Nowa notatka* / *Nowy folder* na folderze, *Otwórz w nowej karcie* / *Zmień nazwę* / *Usuń* na pliku — łącznie z pozycjami, które inne wtyczki dokładają do menu plików.
- **Przeciągnij** pozycję gdziekolwiek Obsidian przyjmuje plik: do edytora, żeby wstawić odnośnik, na folder w Przeglądarce plików, żeby go przenieść, na pasek kart, żeby go otworzyć.

Treść menu pochodzi z tłumaczeń samego Obsidiana, więc w każdym języku pasuje do reszty aplikacji.

## Wpisywanie ścieżki

- Kliknięcie **pustego miejsca** przed ścieżką albo za nią otwiera pole tekstowe wypełnione całą ścieżką i w całości zaznaczone — pisz po nim albo edytuj w miejscu. (Kliknięcie samej nazwy pliku zaznacza tylko nazwę; zobacz wyżej.)
- Pisanie, kiedy widoczny jest ślad ścieżki, zamienia ostatni segment w małe pole z uzupełnianiem na żywo ograniczonym do bieżącego folderu.
- `/` zatwierdza bieżący segment i schodzi do niego.
- <kbd>Backspace</kbd> w pustym polu wychodzi z powrotem do folderu nadrzędnego, otwierając jego nazwę z kursorem na końcu.
- <kbd>Enter</kbd> zatwierdza; <kbd>Esc</kbd> albo kliknięcie gdzie indziej anuluje i wraca do prawdziwej ścieżki pliku.

Pole nie ma żadnej oprawy — ani ramki, ani obwódki — więc czyta się je jak sam tekst ścieżki, i rośnie samo w miarę pisania.

## Nawigacja nigdy nie rusza otwartego pliku

W trybie domyślnym (nawigacji) otwarta notatka **nigdy** nie jest przemianowywana ani przenoszona.

- Ścieżka prowadząca do istniejącego pliku otwiera go.
- Ścieżka, która jeszcze nie istnieje, pyta *„Utworzyć nowy plik?”*. Potwierdzenie tworzy brakujące foldery i plik; anulowanie nie robi zupełnie nic.

## <kbd>Ctrl</kbd> — nowa karta, i kopiowanie zamiast przenoszenia

Przytrzymanie <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> na macOS) przy wybieraniu pliku z listy albo przy naciskaniu <kbd>Enter</kbd> na ścieżce wysyła wynik do **nowej karty** zamiast do tej:

| | Bez modyfikatora | Z <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Wybranie albo wpisanie istniejącego pliku | Otwiera tutaj | Otwiera w nowej karcie |
| Wpisanie ścieżki, która nie istnieje | Pyta, potem otwiera tutaj | Pyta, potem otwiera w nowej karcie |
| Zatwierdzenie ścieżki w trybie zmiany nazwy/przenoszenia | **Przenosi** tam notatkę | **Kopiuje** ją tam i otwiera kopię w nowej karcie |

Modyfikator jest odczytywany regułą samego Obsidiana, więc zachowuje się dokładnie tak jak na odnośniku albo na wierszu Przeglądarki plików — kliknięcie środkowym też znaczy „nowa karta”, <kbd>Ctrl</kbd>+<kbd>Alt</kbd> znaczy podział, a <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> nowe okno.

Kopiowanie odmawia nadpisania, dokładnie tak jak przenoszenie — również na własną ścieżkę notatki, gdzie nie ma czego sensownie kopiować.

## Przeglądanie poza skarbcem

**To jest domyślnie wyłączone.** Włącz najpierw **Dostęp do plików zewnętrznych** w ustawieniach — czytanie i zapisywanie poza skarbcem to jedyna rzecz, którą ta wtyczka robi, a sam Obsidian nie, więc wchodzi się w to świadomie, zamiast musieć z tego wychodzić. Przy wyłączonej opcji nazwa skarbca po prostu pokazuje twój skarbiec w Przeglądarce plików, a nic tutaj nigdy nie zagląda dalej.

Kliknięcie **nazwy skarbca** (albo ikony 🏠, gdy *Pokaż nazwę skarbca* jest wyłączone) otwiera listę miejsc zamiast zawartości:

- **Twoje pozostałe skarbce**, odczytane z własnego rejestru Obsidiana, najpierw ostatnio otwarty, każdy pod ikoną skarbca Obsidiana — tą samą, której aplikacja używa do swoich poleceń dotyczących skarbców. Skarbiec, który masz już otwarty, dostaje zamiast tego domek: to miejsce, z którego wiersz zaczyna domyślnie, a nie miejsce, do którego można pójść.
- **Katalog domowy**, pod nazwą twojego konta, oznaczony `~`. Lucide nie ma tyldy, więc tę ikonę rysuje sama wtyczka na siatce 24×24 Lucide i z tą samą grubością kreski — ikona, której brakuje zestawowi, a nie znak tekstowy wciśnięty między ikony.
- **Katalog główny systemu plików**, opisany jako `root` — nietłumaczony, bo tak nazywa się w każdym systemie — a nie `/`, które obok następującego po nim separatora czytałoby się jak pusty krok.
- **Zamontowane napędy**, z ikoną według rodzaju tam, gdzie tanio to ustalić: udziały sieciowe, dyski optyczne, dyskietki i nośniki wymienne mają własne; wszystko inne dostaje ogólny napęd. Na Windowsie napędy pokazują się jako `C:` z ogólną ikoną — nazwy woluminów i dokładne rodzaje wymagają WMI, z czego celowo się nie korzysta.

Wybranie innego skarbca **nie przełącza do niego Obsidiana.** Wszystko, co masz otwarte, zostaje otwarte; ścieżka po prostu zaczyna przeglądać tam. Na tym polega cały sens umieszczenia tego na pasku ścieżki zamiast odsyłania do przełącznika skarbców na pasku bocznym.

### Kiedy jesteś na zewnątrz

Ścieżka **zaczyna się w miejscu, które wybrałeś**, a nie w układzie katalogów maszyny — wybierz `Archiwum`, a wiersz brzmi `Archiwum / notatki / …`, a nie `/home/ty/Vaults/Archiwum/notatki/…`. Pierwszy segment nosi ikonę tego, czym jest (skarbiec, katalog domowy, napęd), a <kbd>Backspace</kbd> zatrzymuje się tam, zamiast iść dalej w górę po reszcie systemu plików. Przy wyłączonym *Pokaż nazwę skarbca* tym segmentem jest sama ikona — ustawienie dotyczy początkowego segmentu wiersza, jakikolwiek skarbiec nazywa, a nie tylko twojego.

Pasek ścieżki pozostaje **obramowany kolorem błędu** — tym samym pierścieniem, który rysuje tryb zmiany nazwy — przez cały czas, kiedy wskazuje poza twój skarbiec. Oznacza stan trwały, a nie chwilę: dopóki tam jest, nic z własnej obsługi Obsidiana nie dotyczy tego, co wiersz pokazuje, a zapis jest zablokowany, dopóki nie powiesz inaczej.

Poza tym przeglądanie działa jak w środku: plakietki, separatory, pisanie, uzupełnianie, <kbd>Backspace</kbd>, żeby wyjść. Obowiązują też te same reguły widoczności, więc nieobsługiwane rozszerzenia nadal wymagają opcji **Wykrywaj wszystkie rozszerzenia plików** Obsidiana, a pliki ukryte nadal ustawienia tej wtyczki.

**Prawy przycisk myszy i przeciąganie** na pozycjach listy tam nie działają — to własne procedury Przeglądarki plików, a one potrzebują pliku, który skarbiec zna.

### Zapisywanie poza skarbcem

Wszystko, co zapisuje, jest **domyślnie zablokowane**. Obok przełącznika zmiany nazwy w nagłówku pojawia się **kłódka** przez cały czas, kiedy wiersz wskazuje poza twój skarbiec; naciśnięcie jej otwiera zamek i zmienia go na czerwony, w tonie pierścienia wokół wiersza.

Zgoda jest udzielana **miejscu, a nie chwili**: przeżywa wszystko, co robiłbyś pracując w jednym miejscu — dokończenie przenoszenia, kliknięcie poza polem, otwarcie pliku — a kończy się, kiedy wybierzesz z listy inny skarbiec, napęd albo katalog główny, kiedy wiersz wróci do pliku ze skarbca albo kiedy naciśniesz kłódkę ponownie. Dzięki temu seria przenosin w jednym folderze kosztuje jedno naciśnięcie, a nie jedno na plik.

Przy otwartej kłódce pasek ścieżki zachowuje się tam tak jak w środku:

| Gest | Wynik |
| --- | --- |
| Wpisanie nazwy, która nie istnieje, <kbd>Enter</kbd> | To samo pytanie „utworzyć?” co w środku; brakujące foldery też są tworzone. Nazwa bez rozszerzenia staje się `.md`, dokładnie tak jak w środku |
| Tryb zmiany nazwy/przenoszenia, wpisanie nowej nazwy | Zmienia nazwę pliku, który wiersz pokazuje. Nazwa bez rozszerzenia zachowuje rozszerzenie pliku — tutaj folder mieści pliki każdego rodzaju, a zmiana nazwy nie powinna po cichu zamieniać `.png` w `.md` |
| Tryb zmiany nazwy/przenoszenia, przejście gdzie indziej, wybór **zachowaj tę nazwę** | Przenosi go tam pod nazwą, którą już ma |
| Przytrzymanie <kbd>Ctrl</kbd> przy którymkolwiek | Kopiuje zamiast przenosić i otwiera kopię w nowej karcie |

Przy zamkniętej kłódce wszystko to zamiast się wydarzyć zgłasza, co je blokuje. W żadnym z tych stanów nic nie jest nadpisywane: istniejący już cel jest odrzucany, a odmowa pochodzi od samego systemu plików (`COPYFILE_EXCL`, wyłączne utworzenie), a nie od sprawdzenia, które mogłoby przegrać wyścig. Przenosiny między systemami plików — z pendrive'a, z udziału sieciowego — schodzą do kopiuj-a-potem-usuń, a oryginał znika dopiero wtedy, gdy kopia dotarła na miejsce.

**Jednej rzeczy kłódka nie odblokowuje: przeniesienia notatki *poza* twój skarbiec.** `fileManager` nie potrafi podążyć za plikiem przez tę granicę, więc każdy odnośnik wskazujący na notatkę pękłby po cichu, a Obsidian po prostu zobaczyłby, że zniknęła. Przytrzymanie <kbd>Ctrl</kbd> kopiuje ją na zewnątrz, co tego problemu nie ma, i komunikat tak mówi. Kierunek odwrotny — wciągnięcie pliku z zewnątrz *do* skarbca — też nie jest jeszcze zrobiony.

### Otwieranie pliku zewnętrznego

Edytor Obsidiana działa tylko na plikach wewnątrz skarbca, więc pliku zewnętrznego **nie da się** otworzyć jako prawdziwej notatki z odnośnikami, odnośnikami zwrotnymi i całą resztą — to ograniczenie aplikacji, a nie tej wtyczki. Wybranie takiego pliku otwiera zamiast tego **podgląd**, tylko do odczytu, dopóki nie powiesz inaczej:

| Rodzaj | Pokazywany jako |
| --- | --- |
| `.md`, `.markdown` | Wyrenderowany Markdown |
| Obrazy, dźwięk, wideo, PDF | Natywny odtwarzacz/podgląd |
| Każdy inny plik **tekstowy** (`.json`, `.css`, `.log`, `.txt`, …) | Czysty tekst dosłownie |
| Formaty binarne bez podglądu (`.zip`, `.exe`, …) | Przekazane do *Otwórz zewnętrznie* |

Podgląd ma dwa odczyty pliku, a ponieważ się wykluczają, pokazywany jest tylko ten, **na który** byś przełączył:

| | Co robi | Domyślnie dla |
| --- | --- | --- |
| **Pokaż jako Markdown** | Renderuje plik jak notatkę, tylko do odczytu | `.md`, `.markdown` |
| **Edytuj jako tekst** | Źródło, edytowalne | wszystko inne |

Poza skarbcem **Edytuj jako tekst** jest zarazem naciśnięciem, które zdejmuje tryb tylko do odczytu — tryb i zgoda to jeden gest, a nie dwa przyciski do rozważania. Robi się czerwony **za każdym razem, kiedy naciśnięcie zdjęłoby tryb tylko do odczytu**, czy to gdy uzbrajasz edycję na miejscu, czy gdy przychodzisz prosto z widoku wyrenderowanego; wewnątrz skarbca nie ma czego odblokowywać, więc pozostaje zwykły. **Pokaż jako Markdown** dostaje lekką powłokę koloru akcentu — ten sam odcień, który Obsidian daje zaznaczonemu tekstowi — oznaczając go jako drogę powrotną, a nie wezwanie do działania.

Ponieważ przycisk śledzi *edycję*, a nie surowy tryb, plik leżący w widoku tekstowym tylko do odczytu wciąż oferuje **Edytuj jako tekst**: to jest naciśnięcie, które ją uzbraja. Plik, w którym nigdy nie da się pisać — skrócony albo nieczytelny — mówi zamiast tego **Pokaż jako tekst**, bo tyle właśnie może dać naciśnięcie.

Domyślne ustawienia są tymi użytecznymi, a nie dosłownymi: `#` w skrypcie powłoki to komentarz, a nie nagłówek, więc renderowanie `.log` jako Markdown połknęłoby go po cichu. Każde z domyślnych ustawień da się nadpisać dla pojedynczego pliku, a wybór trafia do historii karty, więc wstecz/dalej i ponownie otwarta przestrzeń robocza go zachowują — mnóstwo notatek mieszka w plikach `.txt`, a mnóstwo plików `.md` czyta się lepiej jako źródło.

**Pliki w twoim skarbcu są edytowalne od razu**, bez odblokowywania: *Edytuj jako tekst* to prawdziwy edytor i zapisuje w miarę pisania.

**Edycja jest pamiętana przy przełączeniu.** Przejście do *Pokaż jako Markdown* ją zawiesza — statyczne renderowanie nie ma gdzie pisać, a Podgląd na żywo potrzebuje własnego edytora Obsidiana, który istnieje tylko dla plików wewnątrz skarbca — więc nic nie twierdzi, że edytujesz, kiedy tam jesteś. Powrót do *Edytuj jako tekst* podejmuje w miejscu, w którym przerwałeś.

**Pliki spoza skarbca otwierają się tylko do odczytu, a *Edytuj jako tekst* to zdejmuje.** To naciśnięcie jest całą bramą: dopóki nie nastąpi, na zewnątrz nic nie jest zapisywane. Potem plik zapisuje się w miarę pisania, dokładnie jak plik ze skarbca, a wiersz stanu zmienia się z kłódki w ołówek. Odblokowanie obejmuje ten jeden plik w tej jednej karcie — przejście do innego pliku blokuje z powrotem, i celowo nie jest zapisywane w historii karty, żeby ponownie otwarta przestrzeń robocza nigdy nie wróciła z zapisem już uzbrojonym na pliku systemowym, którego otwarcia nie pamiętasz.

**Skrócone pliki i tak pozostają tylko do odczytu** — zapisanie tego, co na ekranie, wyrzuciłoby wszystko poza limitem, więc przycisk w ogóle się nie pojawia, zamiast pojawiać się i odmawiać. To samo dotyczy pliku, którego nie dało się odczytać: nie ma czego zapisywać poza pustym panelem.

Jeśli zapis się nie powiedzie — zamontowanie tylko do odczytu, plik nie twój — powód podany przez sam system pokazuje się w komunikacie.

Bardzo duże pliki są pokazywane w skróconej formie, a wiersz stanu tak mówi, zamiast zostawiać ci to do odkrycia — obok innych warunków, a nie doczepiony pod przyciskami, bo to fakt o pliku jak każdy inny. Limity są mierzone względem prawdziwego mechanizmu renderowania, a nie zgadywane — rozłożenie megabajta tekstu w jednym panelu zabija proces renderowania Obsidiana na miejscu, a Markdown kosztuje kilka razy więcej na bajt niż czysty tekst, więc każde ma osobny limit, a jedna ogromna linia jest skracana nawet wtedy, gdy cały plik jest mały.

**Wiersze stanu są etykietami, a wyjaśnienie jest dymkiem.** Każdy wiersz mówi, co jest prawdą, w tylu słowach, ile trzeba — *Poza skarbcem*, *Brak edytora dla tego typu pliku*, *Skrócono — plik za duży* — bo przyciski obok już mówią, w jakim stanie jest plik. Najechanie na wiersz daje zdanie: dlaczego Obsidian nie może go otworzyć jako notatki, co inaczej stałoby się z tym typem pliku, ile kosztuje cię skrócenie.

Dotyczy to również plików **wewnątrz** twojego skarbca. Obsidian przekazuje każde rozszerzenie, dla którego nie ma widoku, prosto do domyślnej aplikacji pulpitu — więc `.txt` albo `.json` w twoim skarbcu wyprowadziłby cię z Obsidiana zupełnie. Teraz takie otwierają się w tym samym podglądzie, z pomarańczowym pierścieniem, bo „otwórz to w Obsidianie” jest tym, o co prosiłeś — a będąc plikami skarbca, są tam edytowalne bez żadnego odblokowywania. Pliki binarne bez podglądu zachowują zachowanie Obsidiana; nie ma czego pokazywać.

Podgląd otwiera się **w karcie, w której byłeś**, więc wstecz/dalej wracają do notatki, z której przyszedłeś; przytrzymaj <kbd>Ctrl</kbd>, żeby dostać nową kartę, jak wszędzie. Pasek nagłówka wciąż pokazuje ścieżkę pliku zewnętrznego, dopóki jest otwarty, więc możesz przeglądać dalej stamtąd.

Dyskretny wiersz nad treścią oferuje drogi wyjścia:

- **Otwórz w *(skarbiec)*** — pokazywane, kiedy plik należy do jednego z twoich innych skarbców. Przekazuje go własnej obsłudze URI Obsidiana, która otwiera okno tamtego skarbca z notatką w środku, jako prawdziwą edytowalną notatkę. To okno zostaje dokładnie takie, jakie było; nic nie przełącza się pod tobą.
- **Pokaż jako Markdown** / **Edytuj jako tekst** — dwa odczyty; drugi zdejmuje też tryb tylko do odczytu poza skarbcem.
- **Otwórz zewnętrznie** — przekazuje plik domyślnej aplikacji twojego pulpitu, łącznie z formatami binarnymi, których ten podgląd nie umie pokazać.

Nic poza twoim skarbcem nie jest zapisywane, dopóki najpierw nie naciśniesz *Edytuj jako tekst*. Pełne wyjaśnienie znajdziesz w sekcji [Poza skarbcem](README.pl.md#poza-skarbcem) w README.

## Dwa kolory ostrzeżeń

| | Kiedy | Co znaczy |
| --- | --- | --- |
| **Czerwony** pierścień na pasku ścieżki | Wiersz wskazuje poza twój skarbiec | Obsidian nie może otworzyć tego, co tam jest, jako notatki, a na zewnątrz nic nie jest zapisywane, dopóki nie otworzysz kłódki. |
| **Pomarańczowy** pierścień na pasku ścieżki, pomarańczowe pozycje na liście | Plik jest typem tekstowym, dla którego Obsidian nie ma widoku | Ostrzeżenie. Obsidian przekazałby go domyślnej aplikacji twojego pulpitu; wtyczka pokazuje go zamiast tego. |

Te **dwa są niezależne i mogą obowiązywać naraz** — zewnętrzny `.json` jest poza twoim skarbcem *i* jest typem, dla którego Obsidian nie ma edytora. W podglądzie pojawiają się jako osobne wiersze, każdy mówiący tylko swój własny fakt. Na pasku ścieżki wygrywa czerwony, gdy zachodzą oba, bo dwa pierścienie byłyby tylko szumem.

Stopień pomarańczowy jest celowo wąski. Typy zarejestrowane (Markdown, kanwa, obrazy, PDF, dźwięk, wideo) są obsługiwane porządnie i nie dostają nic. Pliki binarne też nie — nie zamienisz przypadkiem `.zip` w bałagan. Zostaje dokładnie to zagrożenie: `.json`, `.css` albo `.log`, który **Wykrywaj wszystkie rozszerzenia plików** uczyniło widocznym.

Wygrywa czerwony tam, gdzie zachodziłyby oba; dwa pierścienie naraz byłyby tylko szumem.

## Tryb przenoszenia/zmiany nazwy

Przycisk z ołówkiem na prawym końcu nagłówka — obok przycisku trybu widoku, tej samej wielkości co przyciski natywne — włącza i wyłącza tryb przenoszenia/zmiany nazwy. Wiersz nagłówka jest wtedy obramowany kolorem akcentu, dokładnie jak przy zmianie nazwy w Przeglądarce plików. Te same kliknięcia i klawisze zatwierdzają teraz przeniesienie albo zmianę nazwy przez `fileManager.renameFile` Obsidiana, więc wszystkie odnośniki do notatki podążają za nią.

Podczas zmiany nazwy:

- Bieżąca nazwa pliku jest przypięta na liście każdego folderu, więc przeniesienie notatki bez zmiany nazwy to jedno kliknięcie.
- Nazwy już zajęte w folderze docelowym są wyszarzone, ale nadal można je wybrać.
- To, co wpisujesz, jest sprawdzane na żywo względem własnych reguł zmiany nazw Obsidiana — te same zestawy znaków, te same komunikaty, ten sam czerwony dymek co przy zmianie nazwy w drzewie plików — więc nazwa niedozwolona albo kolidująca jest zgłaszana w trakcie pisania i nie da się jej zatwierdzić.
- Kliknięcie poza paskiem nagłówka albo utrata fokusu przez nagłówek kończy tryb zmiany nazwy.

## Jeden klawisz do obu zmian nazwy

Polecenie zmiany nazwy (domyślnie <kbd>F2</kbd> albo cokolwiek, na co je przypisałeś) **przełącza się** między zmianą nazwy w tytule w treści Obsidiana a paskiem ścieżki tej wtyczki z zaznaczoną całą ścieżką. Jeśli wyłączyłeś tytuł w treści Obsidiana, pasek ścieżki w nagłówku staje się jedynym celem, więc klawisz nigdy nie robi nic.

Działa to przez opakowanie polecenia `workspace:edit-file-title`, a nie przechwycenie klawisza, więc przypisanie skrótu na nowo i uruchomienie polecenia z palety działają bez zmian.

## Jak kolorowane są pozycje listy

| Kolor | Znaczy |
| --- | --- |
| **Fioletowy** | Notatka (`.md`, `.markdown`) — to, co Obsidian otworzy jako notatkę, wyłowione z folderu o mieszanej zawartości |
| **Pomarańczowy** | Typ tekstowy, dla którego Obsidian nie ma widoku; zobacz [kolory ostrzeżeń](#dwa-kolory-ostrzeżeń) |
| **Przygaszony** | Poza twoim skarbcem, więc własna obsługa skarbca nie obowiązuje |
| **Niebieski** | Tylko w trybie zmiany nazwy/przenoszenia: pozycja *zachowaj tę nazwę* — cel, a nie coś, co istnieje, więc wyłowiona spośród nazw plików, wśród których stoi |
| **Szary** | Tylko w trybie zmiany nazwy/przenoszenia: nazwa jest zajęta. Nadal można ją wybrać — wybranie wypełnia pole, gdzie walidacja zgłasza konflikt |

## Reguły widoczności

- Pliki o nieobsługiwanych rozszerzeniach pojawiają się na listach tylko wtedy, gdy ustawienie **Wykrywaj wszystkie rozszerzenia plików** Obsidiana jest włączone.
- Lista pokazuje najwyżej 100 pozycji — to własny limit Obsidiana. Kiedy folder ma ich więcej, ostatni wiersz mówi, ile zostało pominiętych; pisz dalej, żeby zawęzić listę.
- Pliki i foldery ukryte pojawiają się tylko wtedy, gdy ustawienie **Pokaż pliki ukryte** tej wtyczki jest włączone.
- **Ochrona przed nadpisaniem działa tak samo niezależnie od widoczności** — ukryty plik nadal nie pozwoli ci go nadpisać.

## Ściągawka

| Chcesz… | Zrób to |
| --- | --- |
| Otworzyć folder (jego notatkę albo go pokazać) | Kliknij separator **za** tym folderem |
| Zamienić folder na sąsiedni | Kliknij nazwę tego folderu, potem wpisz albo wybierz |
| Zmienić nazwę notatki albo ją przekierować | Kliknij nazwę notatki — razem z rozszerzeniem |
| Przejrzeć zawartość folderu | Kliknij nazwę tego folderu; lista pokazuje jego folder nadrzędny, więc kliknij folder **poniżej** tego, o który ci chodzi |
| Przepisać folder i wszystko pod nim | **Kliknij dwukrotnie** nazwę tego folderu, potem pisz |
| Edytować ścieżkę od danego folderu w dół | Kliknij nazwę tego folderu, potem <kbd>End</kbd> albo <kbd>→</kbd>, żeby odznaczyć |
| Skoczyć do pliku, wpisując jego ścieżkę | Kliknij nazwę pliku albo puste miejsce, wpisz, <kbd>Enter</kbd> |
| Otworzyć plik w nowej karcie | <kbd>Ctrl</kbd> przy wybieraniu albo <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| Skopiować notatkę gdzie indziej zamiast ją przenosić | Ołówek, potem <kbd>Ctrl</kbd> przy wybieraniu albo zatwierdzaniu celu |
| Utworzyć notatkę na ścieżce, która nie istnieje | Wpisz ścieżkę, <kbd>Enter</kbd>, potwierdź pytanie |
| Zejść o poziom niżej w trakcie pisania | Wpisz `/` |
| Wrócić o poziom wyżej w trakcie pisania | <kbd>Backspace</kbd> w pustym polu |
| Przenieść albo przemianować otwartą notatkę | Kliknij ołówek, potem przeglądaj albo pisz jak wyżej |
| Przenieść bez zmiany nazwy | Ołówek → wklikaj się do folderu docelowego → wybierz przypiętą bieżącą nazwę pliku |
| Zmienić nazwę w miejscu | <kbd>F2</kbd> dwa razy (pierwsze idzie do tytułu w treści, drugie do nagłówka) |
| Skoczyć do innego skarbca, katalogu domowego albo napędu | Kliknij nazwę skarbca |
| Otworzyć plik spoza skarbca | Nazwa skarbca → wybierz miejsce → przeglądaj → wybierz plik (tylko do odczytu do *Edytuj jako tekst*) |
| Anulować cokolwiek | <kbd>Esc</kbd> albo kliknięcie poza paskiem nagłówka |

## Ustawienia

| Ustawienie | Wartości | Domyślnie | Co robi |
| --- | --- | --- | --- |
| **Wyrównanie** | Do lewej / Wyśrodkowana / Do prawej | Do lewej | Gdzie ścieżka siedzi w wierszu nagłówka. *Wyśrodkowana* odpowiada klasycznemu wyglądowi Obsidiana. |
| **Separator** | Dowolny znak | `/` | Separator rysowany między segmentami. Przed polem tekstowym stoi sześć gotowych ustawień na jedno kliknięcie (`/ > ▸ › \ •`). |
| **Pokaż nazwę skarbca** | Wł. / Wył. | Wł. | Czy sam skarbiec jest pierwszym segmentem ścieżki. Wyłączony, ten segment staje się ikoną 🏠 zamiast zniknąć, żeby ścieżka nadal zaczynała się od czegoś klikalnego. |
| **Nazwa folderu otwiera listę** | Wł. / Wył. | Wł. | Zamienia to, co robią nazwa folderu i separator za nią — zobacz [tabelę powyżej](#ścieżka). Z [Folder notes](obsidian://show-plugin?id=folder-notes) separator otwiera notatki folderowe. Nigdy nie obowiązuje w trybie zmiany nazwy/przenoszenia. |
| **Pokaż pliki ukryte** | Wł. / Wył. | Wył. | Czy pliki i foldery ukryte są wypisywane na listach. Ochrona przed nadpisaniem i tak obowiązuje. |
| **Dostęp do plików zewnętrznych** | Wł. / Wył. | **Wył.** | Czy nazwa skarbca otwiera listę lokalizacji. Wyłączone — nic we wtyczce nigdy nie zagląda poza ten skarbiec. |

## Podmiana ikon

Lure rysuje trzy ikony: ikonę korzenia skarbca (kiedy **Pokaż nazwę skarbca** jest wyłączone), przełącznik zmiany nazwy/przenoszenia oraz kłódkę pilnującą zapisu poza skarbcem. Wszystkie da się podmienić z motywu albo fragmentu CSS — ustaw zastępczy znak i ukryj dołączony w jednej regule:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* Kłódka ma dwa stany; `.is-active` to ten otwarty. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}

.lure-unlock-btn.is-active {
	--lure-icon-glyph: "🔓";
}
```

`--lure-icon-glyph` przyjmuje wszystko, co jest poprawne w CSS-owym `content`, więc `url(...)` działa dla obrazka tak samo jak znak tekstowy czy emoji. Zostaw `--lure-icon-svg` w spokoju, żeby zachować ikonę Lucide i narysować swój znak obok niej.
