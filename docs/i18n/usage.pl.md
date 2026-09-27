<!-- Tłumaczenie docs/usage.md — stan: commit 94b1372.
     Tłumaczenie maszynowe (Claude Sonnet 5), nieskorygowane przez native
     speakerów. Etykiety wtyczki pochodzą z src/lang/translations.ts, a te
     Obsidiana z tekstów dostarczanych przez samą aplikację, więc zgadzają
     się z tym, co widać na ekranie. -->

[English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · [Čeština](usage.cs.md) · [Dansk](usage.da.md) · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · [Bahasa Indonesia](usage.id.md) · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · [Norsk](usage.no.md) · **Polski** · [Português](usage.pt.md) · [Português (Brasil)](usage.pt-BR.md) · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

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

Kiedy folder ten zawiera notatkę, którą już czytasz, kliknięcie zamiast otwierania po prostu pokazuje folder — nie ma czego otworzyć, co nie byłoby już na ekranie, a to właśnie zawsze znaczyło drugie naciśnięcie.

Z zainstalowanym [Folder notes](obsidian://show-plugin?id=folder-notes) to samo kliknięcie otwiera zamiast tego notatkę tego folderu, **na każdej głębokości**: notatka jest tu ustalana według konwencji tej wtyczki, a nie zostawiana jej do odpowiedzi. Ta wtyczka rozpoznaje tylko foldery, które oznaczyła, a na ścieżce głębszej niż jeden folder nie jest to żaden z nich, więc naciśnięcie, które otwierało notatkę folderu najwyższego poziomu, głębiej dotąd nie robiło nic więcej. Dwie inne wtyczki do notatek folderów nie publikują żadnej konwencji do odczytania i nigdy nie przechwytują tego wiersza, więc przy nich separator pokazuje folder jak zawsze. To jedyna wtyczka do notatek folderów, jaką znaleziono przechwytującą ścieżkę w nagłówku; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) i [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) zarządzają notatkami folderów, ale nie nasłuchują kliknięcia na ścieżce, więc przy nich separator pokazuje folder jak zwykle. Zobacz [zgodność](../compatibility.md#verified-against).

Separator jest **podkreślony tylko wtedy, gdy folder przed nim rzeczywiście ma notatkę folderu**, więc podkreślenie jest obietnicą, że jest tam coś do otwarcia — na każdej głębokości, gdy działa [Folder notes](obsidian://show-plugin?id=folder-notes), bo notatka jest tu ustalana, a nie zostawiana tej wtyczce do oznaczenia. Gdy to nie ta wtyczka działa, nic nie jest podkreślone i nic się nie otwiera: separator pokazuje folder, tak jak przy braku jakiejkolwiek wtyczki do notatek folderów. Każdy separator zostaje klikalny tak czy inaczej — ten bez podkreślenia pokazuje i rozwija swój folder na pasku bocznym, co wciąż sygnalizuje kursor w postaci wskaźnika. Podkreślenie schodzi jednocześnie z nazwy folderu: przy włączonej zamianie nazwa otwiera listę, więc oznaczenie jej jako linku do notatki byłoby nieprawdą.

**Tryb zmiany nazwy/przenoszenia ma pierwszeństwo przed obydwoma**, cokolwiek mówi ustawienie: dopóki trwa przenoszenie, nic w wierszu nie otwiera folderu, bo otwarcie porzuciłoby przenoszenie. Nazwy folderów zaznaczają się do edycji, a separatory schodzą w dół — jedno i drugie to sposoby wskazania celu — a podkreślenie znika, żeby pokazać, że otwieranie jest zawieszone.

**Korzeń skarbca** to jedyny segment, który nie jest segmentem ścieżki. Nie ma folderu nadrzędnego, z którego można by wypisać sąsiadów, więc zamiast tego otwiera [listę lokalizacji](#przeglądanie-poza-skarbcem) — twoje inne skarbce, katalog domowy, katalog główny systemu plików i zamontowane napędy.

## Własny separator skarbca

Separator zaraz po nazwie skarbca oznacza sam skarbiec, nie folder, więc robi
to, czego nie może zrobić żaden inny separator:

| | Pierwsze kliknięcie | Kolejne kliknięcie |
| --- | --- | --- |
| **Z wtyczką strony startowej** (strona, która wita cię po otwarciu Obsidiana) | Otwiera tę stronę w tym panelu | Zwija drzewo plików |
| **Bez niej** | Zwija drzewo plików | Przywraca dokładnie to, co było otwarte |

Zwykłe kliknięcia, nie podwójne kliknięcie: kiedy strona jest już otwarta,
separator nie ma już czego otworzyć, więc kolejne naciśnięcie to zwinięcie —
bez względu na to, ile ci to zajmie.

Jest **podkreślony**, kiedy jest strona startowa do otwarcia, co jest tą samą
obietnicą, jaką składa separator folderu: jest tam coś. Zwijanie to przełącznik —
kolejne naciśnięcie przywraca foldery, które były otwarte, i tylko je, więc
uporządkowane przez ciebie drzewo nie ginie przy zerknięciu na coś innego.

## Panel bez pliku

Pusta karta, wykres i wszystko inne, co nie nazywa żadnego pliku, dostaje
własny wiersz: skarbiec, a potem jeden segment mówiący, co panel zawiera.

```
my-vault / :blank      nowa karta
my-vault / :graph      wykres, lokalny lub globalny
my-vault / :<type>     wszystko inne bez pliku
```

**Sama lista korzenia skarbca** oferuje też te strony, pod folderami i
notatkami, które faktycznie w nim są: wybierz tam `:graph` albo `:search`,
a panel otwiera ten widok, dokładnie tak jak wybranie notatki otwiera notatkę.
To, jakie strony istnieją, jest odczytywane z Obsidiana, a nie zapisane tutaj —
każdy widok, który nie istnieje, by pokazać plik, więc wtyczka rejestrująca
własny (karta startowa, kalendarz) pojawia się bez żadnej wiedzy tej wtyczki
o niej. Widoki wymagające pliku — Markdown, PDF, obrazy, canvasy, bazy — nie
są oferowane: nie ma dla nich czego pokazać.

Dwukropek jest tu kluczowy — żaden plik czy folder nie może się nazywać
`:graph`, więc wiersza nie można pomylić ze ścieżką, którą można by otworzyć.
Etykieta pochodzi z typu widoku, nie z własnego słownictwa Obsidiana, więc
wygląda tak samo niezależnie od języka interfejsu, a końcowe `-view` jest
odcinane: wtyczka karty startowej rejestruje swój widok jako
`home-launcher-view`, a wiersz mówi `:home-launcher`.

Kliknięcie pustego miejsca albo samej etykiety **otwiera pole w korzeniu
skarbca**: wpisz ścieżkę, a <kbd>Enter</kbd> otwiera ją w tym samym panelu,
z tym samym uzupełnianiem, tą samą listą i tym samym czerwonym polem
proponującym stworzenie tego, czego jeszcze nie ma. Pusta karta to dobre
miejsce, żeby wpisać, dokąd chcesz trafić, i do tego właśnie służy.

Etykieta jest tylko etykietą i niczym więcej: brak listy, brak przeciągania,
brak zmiany nazwy. Panele na paskach bocznych są całkowicie pozostawione
w spokoju — panel odnośników zwrotnych zachowuje tytuł, jaki daje mu
Obsidian.

Canvasy, pliki PDF, obrazy i bazy nie potrzebują niczego z tego. To pliki,
więc dostają zwykły pasek ścieżki.

## Kliknięcie segmentu: zamień go na sąsiedni

Kliknięcie nazwy folderu zaznacza **nazwę tego folderu** w polu tekstowym i otwiera listę folderu **o poziom wyżej** — jego folderu nadrzędnego. Wpisanie albo wybranie pozycji zamienia ten folder na sąsiedni i zostawia nietknięte wszystko, co pod nim, więc `Projekty/2026/Start.md` → kliknij `2026` → wybierz `2025` daje `Projekty/2025/Start.md`.

Kliknięcie **nazwy notatki** działa tak samo względem jej własnego folderu i zaznacza nazwę **bez rozszerzenia** — zmiana nazwy jest częstą edycją, a wpisywanie prosto nad zaznaczeniem obejmującym `.md` niechcący zmieniało typ pliku. Rozszerzenie zostaje widoczne jedno naciśnięcie klawisza dalej: <kbd>→</kbd> do niego dociera, a podwójne kliknięcie, które poszerza zaznaczenie na cały wiersz, bierze wszystko.

Kliknięcie folderu zaznaczyło już jeden segment, więc **kolejne kliknięcie** poszerza zaznaczenie do całego wiersza — tego folderu *i* wszystkiego pod nim — a to, co wpiszesz, zastępuje wtedy resztę ścieżki za jednym razem. Działa tak samo w nawigacji i w trybie zmiany nazwy/przenoszenia.

Dotyczy to tylko kontynuacji kliknięcia, które otworzyło pole. Kiedy raz użyjesz pola, zachowuje się jak każde inne pole tekstowe: kliknięcie ustawia kursor, podwójne bierze słowo, potrójne bierze wiersz.

Tak czy inaczej reszta ścieżki zostaje widoczna wokół pola, jako etykiety przed nim i jako niezaznaczony tekst po nim, więc pełna ścieżka nigdy nie znika z nagłówka. Wpisz, żeby zastąpić zaznaczenie, albo naciśnij <kbd>→</kbd>, żeby je zachować i edytować dalej od tego miejsca. Lista pokazuje cały folder niezależnie od tego, co jest wstępnie wypełnione; zaczyna filtrować tylko wtedy, gdy naprawdę zaczniesz pisać.

## Schodzenie po separatorze

Kliknięcie separatora (przy wyłączonej opcji **Nazwa folderu otwiera listę**) schodzi do folderu przed nim: lista pokazuje zawartość *tego* folderu, a reszta ścieżki otwiera się zaznaczona w polu. Wybranie folderu dokłada go do śladu ścieżki i od razu otwiera kolejną listę, więc możesz zejść po drzewie samymi kliknięciami, nie opuszczając wiersza nagłówka.

## Lista otwiera się tam, gdzie jesteś

Lista otwiera się na pozycji, na której właśnie stoisz — notatce, do której
należy ten pasek, albo, kiedy kliknięcie folderu wypisało jego folder
nadrzędny, na tym folderze — a nie na pierwszym wierszu. W folderze
z dwustoma notatkami pierwszy wiersz jest daleko od ciebie.

**Kółko myszy nad nazwą otwiera jej listę i przewija ją.** Pierwszy obrót
otwiera tę samą listę, którą otwiera naciśnięcie nazwy, a każdy kolejny
przesuwa podświetlenie o wiersz, wstawiając to, na co wskazujesz, do pola
dokładnie tak jak strzałki — więc sąsiada można znaleźć i wybrać bez
klawiatury. Obrót na którymkolwiek końcu w drugą stronę oddaje ci twój
tekst. Wiersz, w którym ścieżka jest dłuższa niż panel, odpowiada na kółko
przewijaniem w bok, co jest odczytem, który wygrywa, dopóki się stosuje.

Lista jest **tak wysoka, jak pozwala okno**. Obsidian ogranicza swoje listy
podpowiedzi do 300 pikseli niezależnie od tego, co pod nimi leży; ta sięga do
dołu okna, zatrzymując się kilka pikseli przed krawędzią, i przewija się
tylko wtedy, gdy folder zawiera więcej pozycji, niż się mieści. Jest **nie
szersza niż pasek ścieżki**: nazwa, która się nie mieści, jest skracana tak
samo jak skraca się wiersz, i pokazywana w całości, kiedy na nią wskazujesz.

Poruszanie się po liście **wstawia to, na co wskazujesz, do pola**, klawiszem
strzałki albo najechaniem kursorem — w miejsce segmentu, który edytowałeś,
z resztą ścieżki pozostawioną bez zmian — więc wiersz, na którym jesteś, jest
też ścieżką, którą byś otrzymał.

Reszta ścieżki jest pokazywana **tylko na tyle, na ile istnieje pod tym, na
co wskazujesz**. Stojąc w jednym folderze z `2026/notatka.md` za segmentem,
który edytujesz, wskazanie folderu, który ma `2026` z `notatka.md` w środku,
pokazuje wszystko; taki, który ma `2026`, ale bez notatki, pokazuje `2026`;
taki, który nie ma żadnego, nie pokazuje po nazwie nic, tak jak plik, bo pod
nim nic nie żyje. To, **co wpisałeś**, zachowuje całą swoją ścieżkę, dopóki
piszesz, choćby niewiele jej jeszcze było — nazwa napisana w połowie nie jest
decyzją. Wpisanie nazwy w całości jest decyzją, i to, do czego nie da się
dotrzeć z niej, jest odcinane w tym miejscu; foldery, które tworzysz, to te,
które wpisujesz *po* niej, i tam właśnie tworzy je <kbd>Enter</kbd>.
Tekst, który wpisałeś, jest zachowywany: zejście **z jednego z obu końców
listy** — w górę od pierwszej pozycji albo w dół od ostatniej — puszcza go
i przywraca twój tekst, bez żadnego podświetlenia. Pole jest przystankiem
na tej okrężnej trasie jak każda pozycja, więc pełny obieg przechodzi przez
nie, a nie skacze z ostatniego wiersza do pierwszego, a dalsze naciskanie
od tego miejsca zawija do drugiego końca.

Zdjęcie **wskaźnika z listy** też przywraca twój tekst — i oddaje
podświetlenie temu, co je miało, zanim przybyła mysz: pozycji, do której
doszedłeś strzałkami, znów widocznej w polu, albo tej, na której lista się
otworzyła, bo tam właśnie jesteś. Najeżdżanie jest sposobem patrzenia, nie
wybierania, więc przejazd wskaźnikiem po liście nic cię nie kosztuje.

Sama lista nie zmienia się, gdy się po niej poruszasz — wciąż filtruje według
tego, co wpisałeś, a nie według tego, co zostało wyświetlone w podglądzie
w polu — więc pozycja, na której jesteś, nigdy nie umyka pod kolejnym
naciśnięciem. Pisanie zastępuje podgląd i filtruje jak zwykle.

**To, według czego filtruje, to segment, który edytujesz**, nie wszystko
w polu. Kliknięcie folderu zostawia w polu resztę ścieżki za nazwą, którą
zmieniasz, więc filtrowanie po całości szukałoby dziecka o nazwie
`2026/Start.md` i nie znalazłoby nic — lista zamknęłaby się po pierwszym
naciśnięciu klawisza, cokolwiek wpisałeś. **Rozszerzenie też jest z tego
wyłączone**, dopóki kursor stoi przed kropką: kliknięcie nazwy notatki
zaznacza sam trzon i zostawia `.md` za nim, więc wpisanie jednej litery
sprawia, że pole brzmi `a.md`, a nie tego szukasz. Postaw kursor za kropką,
a rozszerzenie liczy się jak wszystko inne. Nazwa, która naprawdę niczego
nie odpowiada, wciąż zamyka listę, bo pusta lista jest szczerą odpowiedzią.

Podgląd **zamienia tylko ten jeden segment i zostawia resztę ścieżki bez
zmian**: wskazanie folderu pyta, co by było, gdyby ten krok był tamtym, a nie
wyrzuca ścieżkę. Zejście z listy przywraca tekst *i* zaznaczenie, które
miałeś, więc kolejne naciśnięcie klawisza zastępuje to, co miało zastąpić,
zanim zerknąłeś.

## Pozycje listy to prawdziwe wiersze menedżera plików

Każdy plik i folder na liście zachowuje się jak jego wiersz w Przeglądarce plików:

- **Kliknięcie prawym przyciskiem** wywołuje to samo menu kontekstowe, które daje Przeglądarka plików, pozycja za pozycją — łącznie z tymi, które dodają inne wtyczki. Folder oferuje *Nowa notatka*, *Nowy folder*, *Nowy canvas*, *Nowa baza*, *Zrób kopię*, *Przenieś folder do…*, *Szukaj w folderze*, *Kopiuj ścieżkę*, *Pokaż w eksploratorze systemowym*, *Zmień nazwę…* i *Usuń*; plik oferuje swój odpowiednik, łącznie z *Otwórz w domyślnej aplikacji*.
- **Przeciągnięcie** pozycji gdziekolwiek, gdzie Obsidian przyjmuje plik: do edytora, żeby wstawić link, na folder w Przeglądarce plików, żeby go przenieść, na pasek kart, żeby go otworzyć.

Treść menu pochodzi z tłumaczeń samego Obsidiana, więc w każdym języku pasuje do reszty aplikacji.

## Wpisywanie ścieżki

- Kliknięcie **wolnego miejsca** przed lub po ścieżce otwiera pole tekstowe na całej ścieżce *i pokazuje notatkę w Eksploratorze plików*, więc drzewo idzie za panelem bez drugiego gestu. **Liczy Twoje kliknięcia**: jedno wybiera ścieżkę bez rozszerzenia, dwa wybierają ją z rozszerzeniem, trzy — ścieżkę, jaką zna maszyna. Kliknięcie **nazwy pliku** liczy tak samo, ale zaczyna jeden szczebel niżej, na samej nazwie: jedno wybiera ją bez rozszerzenia, dwa z rozszerzeniem, a trzy rozszerzają wybór na całą ścieżkę *od folderu Twojego skarbca* — postać, jakiej chce link albo wyszukiwanie, a nie maszyna. Czwarte kliknięcie sięga tej pierwszej.
- **Liczenie należy do serii, która otworzyła pole.** Gdy ta się skończy — zrobiłeś przerwę, wpisałeś coś, albo kliknąłeś raz gdzieś w tekście — pole jest zwykłym polem tekstowym jak każde inne, a dwuklik w nim wybiera słowo pod kursorem tak jak wszędzie. Wpisz coś na to, co jest zaznaczone, albo edytuj w miejscu. (Kliknięcie samej nazwy pliku zaznacza tylko nazwę pliku; patrz wyżej.) Kliknięcie prawym przyciskiem w to samo miejsce **kopiuje** te same trzy warianty, przy dwóch, trzech i czterech kliknięciach — jeden przycisk je pokazuje, drugi je zabiera. **Pojedyncze** kliknięcie prawym przyciskiem otwiera ścieżkę z całością zaznaczoną i oferuje to, co można z nią zrobić: wyciąć, skopiować, wkleić, zaznaczyć wszystko, słowami samego Obsidiana.
- **Kliknij środkowym przyciskiem wolne miejsce**, by wkleić na miejsce ścieżki: pole otwiera się na całej ścieżce *od korzenia skarbca*, więc schowek zastępuje ją całą, a to, co się wkleiło, jest zaznaczone. <kbd>Enter</kbd> przenosi wtedy tam.
- **<kbd>Ctrl</kbd>+kliknięcie wolnego miejsca** otwiera tę samą notatkę ponownie, we własnej karcie, podświetlonej w Eksploratorze plików, żeby druga karta nie została pomylona z pierwszą. Na **nazwie skarbca** <kbd>Ctrl</kbd>+kliknięcie albo kliknięcie środkowym przyciskiem otwiera puste karta, stojącą w korzeniu skarbca, z listą już pokazaną — miejsce, gdzie można wpisać ścieżkę od zera.
- Pisanie, gdy widoczna jest ścieżka, zamienia ostatni segment w małe pole z podpowiedziami na żywo, ograniczonymi do aktualnego folderu.
- **Można wpisać ścieżkę od korzenia systemu plików.** `/` przed pustym polem otwiera taką ścieżkę, zamiast dopełniać szczebel, każdy ukośnik po nim należy do niej, a `~` to Twój folder domowy. Kiedy pole zawiera taką ścieżkę, lista pokazuje maszynę, a nie skarbiec, a początkowy segment wiersza ustępuje na bok — to, co jest w polu, zaczyna się od korzenia i to sygnalizuje. Przy wyłączonym *Dostępie do plików zewnętrznych* lista jest wtedy pusta, bo <kbd>Enter</kbd> i tak odrzuci taką ścieżkę.
- **Stronę można wpisać, nie tylko wybrać.** `:graph`, `:search` albo cokolwiek zarejestrują Twoje wtyczki — etykiety, jakie oferuje [lista korzenia skarbca](#panel-bez-pliku). Wpisanie dwukropka gdziekolwiek je przywołuje, bo żadna nazwa nie może go zawierać, a <kbd>Enter</kbd> otwiera ten widok w tym panelu. `:graph` wpisane **wewnątrz folderu** otwiera grafik tego folderu — grafik przefiltrowany do `path:"tamten/folder"` we własnym polu wyszukiwania, jakby wpisano to tam; w korzeniu skarbca to cały grafik. <kbd>Tab</kbd> dopełnia nazwę tak jak dopełnia nazwę folderu — i zabiera ze sobą wszystko, co jeszcze było w polu, bo strona nie jest w żadnym folderze i nic nie mieszka pod nią. Kliknięcie etykiety na takiej stronie otwiera pole już z nią wpisaną.
- **To, co napisałby <kbd>Tab</kbd>, jest podsuwane w miarę pisania.** Gdzie każde dziecko zaczynające się od tego, co wpisałeś, wciąż się ze sobą zgadza, ta zgoda pojawia się po kursorze, zaznaczona; gdzie przestają się zgadzać, tam kończy się krok w stronę pierwszego z nich — albo w stronę wiersza, do którego doszedłeś strzałkami, bo to jest ten, do którego skierowałby się <kbd>Tab</kbd>. Wpisywanie na nazwę zostawia jej rozszerzenie na miejscu i podsuwa coś przed nim, a folder, w który właśnie wszedłeś, podsuwa swój pierwszy krok, więc nie ma stanu, w którym nic nie jest podsuwane, a <kbd>Tab</kbd> i tak coś wpisuje. Wpisz te litery i podsuwka jest zjadana po jednej naraz; wpisz coś innego i przepada. <kbd>Tab</kbd> albo <kbd>End</kbd> zabiera ją całą, <kbd>→</kbd> zabiera jedną jej literę, <kbd>Backspace</kbd> zabiera ją z powrotem bez dotykania litery, którą wpisałeś, i nic nie jest podsuwane znowu, dopóki nie napiszesz czegoś — więc zawsze jest wyjście z nazwy, której nie chciałeś. Po naciśnięciu <kbd>Tab</kbd> następny krok jest podsuwany od razu, tak jak po wpisanej literze. To, co pokazuje lista, jest filtrowane przez to, co wpisałeś **Ty**, nigdy przez to, co zostało podsunięte.
- **Podsuwki ignorują wielkość liter.** `sch` podsuwa `Schemes`, zapisane tak jak nazwa; wycofanie podsuwki oddaje Twoje litery tak, jak je wpisałeś. Gdzie istnieją zarówno `Test`, jak i `test`, podsuwana jest ta zapisana tak, jak wpisałeś.
- W polu podsuwana część jest po prostu **zaznaczona**. Lista jest tam, gdzie jest to rozpisane: każdy wiersz pokazuje część, która **zgadzała się z tym, co wpisałeś, wytłuszczoną**, gdziekolwiek w nazwie się zgadzała — `kick` znajduje `Weekly kickoff` i to pokazuje. **Nazwy zaczynające się od tego, co wpisałeś, są pierwsze**, przed tymi, które to tylko zawierają, i są oznaczone linią po ich krawędzi: **niebieską**, gdzie mają wspólne coś więcej niż to, co wpisałeś, więc <kbd>Tab</kbd> ma coś do dodania dla wszystkich z nich, i **zieloną** na odgałęzieniu, w które podsuwka idzie tam, gdzie się rozchodzą — `te` z `test1`, `test2`, `text1` i `text2` podsuwa `te`+`st`, więc dwa wiersze `test` są zielone, a dwa wiersze `text` zachowują zwykłą linię. Każdy z nich **podkreśla krok, jaki <kbd>Tab</kbd> zrobiłby w jego stronę**, nie tylko ten, który jest podsuwany, a podkreślenie idzie za podsuwką, gdy ta się zmienia.
- **Pisanie zwalnia podświetlony wiersz.** Lista otwiera się na pozycji, na której stoisz, ale w chwili, gdy zaczynasz pisać, chodzi już o coś innego, a podświetlenie, którego nikt tam nie postawił, czyta się jako już podjęty wybór.
- Podsuwka to zawsze tylko tekst przed Tobą: litery, które wpisałeś, zostają zapisane tak, jak je wpisałeś, podczas pisania, a przyjęcie podsuwki przepisuje nazwę tak, jak zapisuje ją folder, bo ścieżka musi zgadzać się z dyskiem. `sk` + <kbd>Tab</kbd> dociera do `Skyline`, nie do `skyline`.
- **Pole nosi kolor tego, co nazywa**, ten sam kolor co jego wiersz na liście: fioletowy dla notatki, w tym własnej notatki folderu, pomarańczowy dla wszystkiego, co nie jest notatką, niebieski dla notatki, na której jesteś. Wiersz, z którego pole bierze kolor, to ten nazwany dokładnie tak jak to, co wpisałeś, a jeśli takiego nie ma — podświetlony, a jeśli i tego nie ma — pierwszy, do którego wciąż prowadzi to, co piszesz.
- **Pole robi się czerwone, gdy nic nie odpowiada temu, co w nim jest** — żaden plik, żaden folder, i żaden wiersz listy wciąż do tego nie prowadzi. Wtedy <kbd>Enter</kbd> tworzy to, co jest w polu, zamiast to otworzyć, a czerwień mówi to, zanim zatwierdzisz. Nigdy nie pojawia się dla adresu internetowego, który nie jest miejscem na tej maszynie, gdzie można by szukać. Kolorowane jest **całe** pole, a nie tylko brakująca część: pole tekstowe nie może pokolorować połowy własnej treści. W trybie przenoszenia/zmiany nazwy pole zachowuje swoją własną czerwień dla nazwy, która jest niedozwolona — tam nazwa, której nic nie odpowiada, jest właśnie o to. To, że nazwa jest **już zajęta**, jest obsługiwane w chwili zatwierdzenia, oknem pytającym, co zrobić z plikiem, który stoi na drodze — patrz [Nazwa, która jest zajęta](#nazwa-która-jest-zajęta): każda nazwa wpisywana w kierunku `Notatki.md` przechodzi przez nazwy, które mogą być własnymi plikami, więc oznaczanie tego litera po literze ostrzegałoby przed nazwą, o którą nikt jeszcze nie pytał.
- `/` zatwierdza segment, który wpisujesz, i schodzi w niego, zachowując wszystko, co jest za nim — to samo, co robi <kbd>Tab</kbd>, gdy wchodzi w środek.
- <kbd>Backspace</kbd> w pustym polu wraca do folderu nadrzędnego, otwierając ponownie jego nazwę z kursorem na końcu. To samo robi <kbd>Backspace</kbd> przed samotnym rozszerzeniem — pole zawierające tylko `.md` nie nazywa niczego — i to samotne rozszerzenie odchodzi wraz z nim.
- **Kliknięcie folderu, gdy pole jest otwarte, rozszerza je na całą ścieżkę za tym folderem**, z zaznaczoną własną nazwą folderu — to samo, co kliknięcie zrobiłoby z wiersza, a wszystko, co pole trzymało, jest zachowane. To, co jest w polu, to ogon wiersza, gdy jest otwarte, więc folder kliknięty wyżej oddaje ścieżkę, którą przeszła sesja, a nie tę, od której zaczęła się notatka.
- **Zjechanie strzałką z początku pola wciąga folder przed nim**, jakby cała ścieżka była jedną linią tekstu. Z kursorem na samym początku <kbd>←</kbd> wciąga ten folder do pola i ląduje na końcu jego nazwy, <kbd>Ctrl</kbd>+<kbd>←</kbd> ląduje na jej początku, a <kbd>Home</kbd> wciąga wszystkie foldery aż do korzenia skarbca — albo do miejsca, które wybrałeś, poza skarbcem — na raz. Przytrzymaj <kbd>Shift</kbd> i zaznaczenie rozciąga się na to, co weszło. Na macOS skok o słowo to <kbd>Option</kbd>+<kbd>←</kbd>, a <kbd>Cmd</kbd>+<kbd>←</kbd> to <kbd>Home</kbd>. Gdziekolwiek indziej niż na początku, są to zwykłe klawisze tekstowe. **Kiedy lista jest widoczna, <kbd>Home</kbd>, <kbd>End</kbd>, <kbd>PgUp</kbd> i <kbd>PgDn</kbd> należą do niej** — pierwszy wiersz, ostatni wiersz, strona w górę, strona w dół, gdzie strona to to, co pokazuje lista, a podświetlony wiersz zachowuje swoje miejsce na ekranie — i docierają do tekstu tylko po jej zamknięciu; <kbd>Shift</kbd>+<kbd>Home</kbd> wciąga wszystkie foldery także wtedy, gdy lista jest otwarta.
- **Lista idzie za kursorem.** Wybierz inną część ścieżki — przeciągnij po niej, kliknij w nią, albo dojdź strzałkami — a lista pokazuje dzieci *tego* folderu, nie tego, na którym pole zostało otwarte. Folder jest liczony z fragmentów plus tego, co z pola leży przed kursorem, więc kliknięcie w `Notatki.md` w polu zawierającym `2026/Notatki.md` pokazuje to, co jest w `2026`. Wskazanie wiersza wpisuje go w segment, w którym jest kursor, a odsunięcie wskaźnika od listy oddaje Ci Twój tekst i Twoje zaznaczenie, dokładnie takie, jakie były.
- **Wyciągnięcie zaznaczenia poza pole** i puszczenie gdzie indziej nie zamyka go. Kliknięcie, które zaczyna się w polu, należy do edycji, bez względu na to, jak daleko podróżuje; tylko kliknięcie, które *zaczyna się* poza nim, jest odsunięciem.
- <kbd>Enter</kbd> zatwierdza — a kiedy pole nie nazywa niczego, jak w pustym folderze, gdzie nigdy nie było czego dopełniać, mówi *Nie wybrano pliku* i pozostaje otwarte, zamiast zamknąć się, jakby coś zostało wybrane. <kbd>Esc</kbd> albo kliknięcie gdzie indziej anulują powrót do prawdziwej ścieżki pliku. Jedno naciśnięcie <kbd>Esc</kbd> wystarczy: zamyka listę, opuszcza pole i oddaje fokus notatce, a nie po jednym naciśnięciu na warstwę.

Pole nie ma żadnej oprawy — ani ramki, ani obwódki — więc czyta się je jak sam tekst ścieżki, i rośnie samo w miarę pisania.

## Każda część wiersza, przycisk po przycisku

Cały wiersz na pierwszy rzut oka. Kolumna kliknięcia prawym przyciskiem to to,
co daje **jedno** naciśnięcie; ten przycisk liczy też naciśnięcia, a [jego
własna tabela](#kliknięcie-prawym-przyciskiem-jedno-naciśnięcie-dwa-trzy) poniżej pokazuje
drugie, trzecie i czwarte. Ta tabela zakłada, że **Nazwa folderu otwiera
listę** jest włączona, co jest ustawieniem domyślnym — po jej wyłączeniu nazwa
folderu i separator zamieniają się miejscami w pierwszej kolumnie, tak jak
mówi [tabela na górze](#ścieżka).

| Gdzie naciskasz | Kliknięcie | Podwójne kliknięcie | <kbd>Ctrl</kbd>+kliknięcie lub kliknięcie środkowym | Kliknięcie prawym przyciskiem | Upuszczenie czegoś na to |
| --- | --- | --- | --- | --- | --- |
| **Nazwa skarbca** | Otwiera listę lokalizacji — inne skarbce, katalog domowy, główny katalog systemu plików, zamontowane dyski. Domyślnie wyłączone; z wyłączoną opcją zamiast tego pokazuje skarbiec w menedżerze plików | Zaznacza **całą ścieżkę absolutną**. Ta lista otwiera się z już wpisaną ścieżką w polu i zaznaczoną tylko częścią należącą do skarbca; drugie naciśnięcie rozszerza zaznaczenie na resztę. Nie ma nic do rozszerzenia, gdy lista jest wyłączona | Karta bez zawartości, stojąca w korzeniu skarbca z już widoczną listą — miejsce, by wpisać ścieżkę od zera | Własne menu kontekstowe skarbca: to, co można zrobić ze skarbcem, który ten segment nazywa | **Plik** przenosi się do korzenia skarbca. **Tekst** otwiera pole w korzeniu, by nazwać notatkę, którą ma się stać |
| **Nazwa folderu** | Zaznacza ten folder do edycji, z zawartością jego rodzica wypisaną poniżej | Wpisuje na nowo ten folder i wszystko poniżej niego | Otwiera ten folder w nowej karcie | Menu kontekstowe tego folderu — to samo, które daje menedżer plików | **Plik** przenosi się do tego folderu. **Tekst** otwiera tam pole, by nazwać notatkę, którą ma się stać |
| **Separator** | Otwiera folder przed nim — jego notatkę folderu, gdy działa wtyczka do notatek folderów i taka istnieje, w innym wypadku pokazuje i rozwija go w menedżerze plików | **Tworzy notatkę tego folderu** i przechodzi do niej, gdy działa wtyczka do notatek folderów, a folder jeszcze żadnej nie ma. Gdy już ją ma, to po prostu to samo jedno naciśnięcie | Notatkę folderu w nowej karcie, gdy taka istnieje; w innym wypadku karta stojąca w tym folderze z widoczną listą | To samo menu kontekstowe folderu, które daje nazwa — menu jego notatki folderu, gdy ją ma | Na koniec notatki tego folderu, gdy ją ma, po potwierdzeniu |
| **Nazwa notatki** | Otwiera nazwę do edycji — foldery zostają obok jako etykiety — z zaznaczeniem wszystkiego oprócz rozszerzenia | Wciąga rozszerzenie do zaznaczenia | Otwiera notatkę w nowej karcie | Menu kontekstowe pliku — to samo, które daje wiersz w menedżerze plików | Na koniec tej notatki, po potwierdzeniu |
| **Puste miejsce** | Otwiera **całą ścieżkę** do edycji, zaznaczoną aż do rozszerzenia. Foldery wchodzą wraz z nią do pola, co czyni to gestem do wpisania ścieżki na nowo, a nie tylko nazwy | Wciąga rozszerzenie do zaznaczenia | <kbd>Ctrl</kbd> otwiera tę notatkę ponownie w jej własnej karcie, podświetlonej w menedżerze plików, by kopii nie pomylić z pierwszą. Kliknięcie środkowym *nie* jest tym gestem: nadpisuje ścieżkę | Zaznacza całą ścieżkę i proponuje, co można zrobić z zaznaczonym tekstem | |

**Drugie naciśnięcie idzie za pierwszym.** Tworzenie notatki folderu leży na
tej części wiersza, która *otwiera* dany folder, czyli domyślnie na
separatorze, a przy wyłączonej zamianie — na nazwie folderu — tym samym celu,
który zaznacza podkreślenie, i tym samym, o który już prosi jedno naciśnięcie
w poszukiwaniu notatki folderu. Jest to dostępne tylko, gdy działa wtyczka do
notatek folderów, bo notatka folderu jest konwencją, a nie faktem o systemie
plików, i tylko tam, gdzie folder jeszcze żadnej nie ma. To, gdzie taka notatka
mieszka i jak się nazywa, jest odczytywane z własnych ustawień **Folder
notes**, więc skarbiec, który trzyma swoje notatki folderów obok folderu, albo
nazywa je `_index`, dostanie taką właśnie; sam plik jest zawsze Markdownem, co
jest tym, co tworzy domyślna komenda tej wtyczki i co znajduje, niezależnie od
typu, na jaki nastawiony jest skarbiec. Tryb przenoszenia/zmiany nazwy jest
z tego całkowicie wyłączony — nic w wierszu nie otwiera folderu, gdy przenoszenie czeka.

**Kliknięcia na nazwie idą dalej.** Cztery szczeble to te same cztery, które
przechodzi klawisz zmiany nazwy, w tej samej kolejności: nazwa, nazwa z
rozszerzeniem, ścieżka od skarbca, ścieżka od korzenia systemu. Więc trzecie
kliknięcie sięga ścieżki skarbca, a czwarte — ścieżki maszyny — te same cztery
rzeczy, które daje <kbd>Tab</kbd> za koniec pola, i te same cztery, które prawy
przycisk *kopiuje* zamiast zaznaczać.

**Najechanie** jest odpowiedzią samą w sobie i niczego nigdy nie zmienia:
skrócona nazwa wraca w pełnej formie, dopóki na nią wskazujesz, a ikona na
początku wiersza mówi, gdzie mieszka skarbiec.

## Kliknięcie prawym przyciskiem: jedno naciśnięcie, dwa, trzy

Każdy cel w wierszu odpowiada na kliknięcie prawym przyciskiem, a to, ile razy naciśniesz, decyduje o tym, co dostaniesz. Ponieważ drugie naciśnięcie może jeszcze nadejść, pierwsze czeka około jednej trzeciej sekundy przed zadziałaniem — taki jest koszt umieszczenia trzech gestów na jednym przycisku.

| Gdzie naciskasz | Raz | Dwa razy | Trzy razy |
| --- | --- | --- | --- |
| **Nazwa skarbca** | Menu kontekstowe skarbca: to, co można zrobić ze skarbcem, który ten segment nazywa — włącznie z *Otwórz ten skarbiec*, gdy ten skarbiec nie jest tym, w którym jesteś | Kopiuje nazwę skarbca | Kopiuje, gdzie skarbiec się znajduje — a czwarte naciśnięcie, gdzie znajduje się otwarty plik |
| **Separator** | Menu tego folderu — jego notatki folderu, gdy działa wtyczka do notatek folderów i folder ją ma | | |
| **Nazwa folderu** | Menu tego folderu | Kopiuje nazwę folderu | Kopiuje ją wraz ze wszystkim po jej prawej stronie |
| **Nazwa notatki** | Menu pliku — to samo, które daje wiersz w menedżerze plików | Kopiuje nazwę | Kopiuje ją z rozszerzeniem |
| **Puste miejsce** | | Kopiuje ścieżkę od folderu skarbca, bez rozszerzenia | To samo, wraz z nim |

Jedno naciśnięcie na **nazwie skarbca** otwiera to, co można zrobić z tym, co
ten segment nazywa. Dla **skarbca, w którym jesteś**: otwórz go w nowym oknie,
zarządzaj skarbcami, skopiuj, gdzie mieszka, skopiuj jego ID, pokaż go w
menedżerze plików. Dla **innego skarbca**, do którego dotarto przez listę
lokalizacji, to samo minus nowe okno — które otworzyłoby *ten* skarbiec, nie
tamten — plus jedna rzecz, którą może zaproponować tylko skarbiec, w którym
nie jesteś: **Otwórz ten skarbiec**. Jest on nazwany dla Obsidiana jego ID, a
nie nazwą folderu, ponieważ dwa skarbce mogą tę samą nazwę współdzielić. Dla
miejsca, które w ogóle nie jest skarbcem — twojego katalogu domowego,
zamontowanego dysku — nie ma ID do skopiowania i nic do otwarcia, i menu mówi
to właśnie tym, że tego nie proponuje.

To nie jest własne menu trzech kropek Obsidiana, które należy do okna
startowego i nie może być otwarte z wnętrza działającego skarbca — to te same
pozycje odbudowane, w słownictwie samego Obsidiana, wzięte z jego komend, więc
docierają w twoim języku. Trzy pozycje z tamtego menu celowo **nie** są tu
zawarte: *zmień nazwę skarbca*, *przenieś skarbiec* i *usuń z listy* wszystkie
działają na własnym folderze skarbca albo na rejestrze skarbców Obsidiana, a
robienie tego skarbcowi, w którym aktualnie stoisz — z otwartymi plikami i
działającymi obserwatorami — to sposób, w jaki skarbiec się psuje. Otwórz
menedżera skarbców (*Otwórz inny skarbiec*) i zrób to tam, gdzie skarbiec jest
zamknięty.

Dwie kopie na **pustym miejscu** to wiersz taki, jak jest zapisany — to, czego
chce link lub wyszukiwanie — a te na **nazwie skarbca** to ścieżki, które zna
system plików, czyli to, czego chce wszystko poza Obsidianem. Każde naciśnięcie
tam rozszerza to, do czego kopia się przydaje: dwa dają nazwę skarbca, trzy —
gdzie skarbiec się znajduje, cztery — gdzie znajduje się otwarty plik.
Obsidian robi to samo rozróżnienie w swoich dwóch komendach, *from vault
folder* i *from system root*; tutaj te skierowane na zewnątrz leżą na
segmencie, który sam jest poza ścieżką.

Wszystko to działa też poza skarbcem, na tych samych celach.

Każda kopia mówi o tym w powiadomieniu, bo kopia nie zostawia na ekranie nic, co pokazałoby, że się wydarzyła, a błędnie policzone naciśnięcie nie powinno wyglądać jak udane.

## Modyfikatory: otwórz to gdzie indziej

Nazwa notatki i segmenty folderów zachowują się jak swoje wiersze w menedżerze plików.

| | Na nazwie notatki | Na segmencie folderu |
| --- | --- | --- |
| Zwykłe kliknięcie | Edytuj nazwę | Przeglądaj ten folder |
| <kbd>Ctrl</kbd> / kliknięcie środkowym | Otwórz notatkę w nowej karcie | Wyślij folder do nowej karty |
| <kbd>Ctrl</kbd>+<kbd>Alt</kbd> | Podział | Podział |
| Przeciągnięcie | Notatkę, gdziekolwiek Obsidian przyjmuje plik | Folder, podobnie — łącznie z pasem kart |

Folder nie jest czymś, co Obsidian może otworzyć, więc wysłanie go do karty
robi jedną z dwóch rzeczy: otwiera jego notatkę folderu, gdy działa wtyczka do
notatek folderów i taka istnieje, albo otwiera pustą kartę, której pasek
ścieżki już stoi w tym folderze — zostawiając ci tylko nazwę do wpisania.
Upuszczenie segmentu folderu na **pasie kart** robi to samo, w nowej karcie
tam, gdzie puścisz — pasek kart Obsidiana sam z siebie przyjmuje tylko pliki,
więc folder wyciągnięty z menedżera plików jest tam wciąż odrzucany.

## Tab: dopełnia nazwę, potem ścieżkę, potem poszerza zaznaczenie

<kbd>Tab</kbd> dopełnia tak jak w powłoce: **naciśnięcie rozszerza to, co wpisałeś, tak daleko, jak zgadzają się nazwy w tym folderze, i zatrzymuje się tam, gdzie się różnią.** Wpisz `Sk` tam, gdzie tylko `Sketches` tak się zaczyna, a słowo jest gotowe; wpisz `Al` tam, gdzie `Alpha-one`, `Alpha-two` i `Alpine` zaczynają się tak samo, i dostajesz `Alp`, bo kolejny znak to pytanie, na które tylko ty możesz odpowiedzieć.

Naciśnij ponownie bez wpisywania, a wskaźnik idzie w stronę jednej nazwy — wiersza podświetlonego na liście albo pierwszego — zatrzymując się przy najbliższej niejednoznaczności tej nazwy: `Alpha-`, potem `Alpha-one`. Lista otwiera się tam, gdzie już jesteś, więc we własnym folderze pierwsze naciśnięcie zmierza do otwartej notatki, a nie do tego, co sortuje się jako pierwsze.

**Naciśnięcie nigdy nie wybiera za ciebie między nazwami.** <kbd>Tab</kbd> wchodzi do folderu dopiero, gdy to, co wpisałeś, zostawia jednego kandydata, albo gdy wpisałeś całą nazwę folderu, a żaden *inny folder* jej nie rozszerza. Tam, gdzie jakiś rozszerza — `Schemes` obok `Schemes2026` — <kbd>Tab</kbd> nadal dopełnia w stronę dłuższej nazwy; to <kbd>Enter</kbd> i lista są gestami znaczącymi *właśnie ten*.

**Plik** nigdy nie wstrzymuje w ten sposób folderu. Folder obok notatki o tej samej nazwie to notatka folderu, a nie rozwidlenie ścieżki, i <kbd>Tab</kbd> chodzi po folderach — więc `Projects` z leżącym obok `Projects.md` jest traktowany tak samo jak każdy inny.

Dwie mniejsze rzeczy, które z tego wynikają: to, co ląduje w polu, jest zapisane tak, jak zapisuje to folder, więc `sk` staje się `Sketches`; i zastępowana jest tylko wpisywana nazwa, więc ścieżka z czymś dalej po prawej to zachowuje.

Kiedy nazwa jest proponowana w trakcie pisania, <kbd>Tab</kbd> **wpisuje dokładnie tę propozycję**: propozycja to zawsze to, co naciśnięcie by wpisało, a podkreślenie i zielona linia na liście mówią to samo, więc to, co widzisz za kursorem, jest tym, co dostaniesz. Tam, gdzie nazwy przestają się zgadzać, to krok w stronę pierwszej z nich — albo w stronę wiersza, do którego doszedłeś strzałkami, który <kbd>Tab</kbd> wybiera zamiast tego obok — więc dojdź strzałką do tego, którego chcesz, albo wpisz dalej niż rozwidlenie, zanim naciśniesz. Dopiero gdy propozycja zostawia *jedną* nazwę, to samo naciśnięcie wchodzi do niej.

Dotarcie do nazwy pliku **jest** pierwszym szczeblem — żadne naciśnięcie nie jest zużywane na zaparkowanie kursora na końcu nazwy, którą zaraz zaznaczy. Od tego miejsca naciśnięcia przestają przesuwać się wzdłuż ścieżki i zaczynają poszerzać zaznaczenie:

1. nazwę
2. nazwę z rozszerzeniem
3. ścieżkę od folderu skarbca
4. ścieżkę od korzenia systemu
5. z powrotem na początek ścieżki **w jej obecnym kształcie** — tam, gdzie zaczęła się wędrówka, z zaznaczonym pierwszym segmentem, gotową do ponownego przejścia

Czwarte kliknięcie trafia bezpośrednio na ten sam czwarty szczebel.

Poszerzanie zawsze tylko **poszerza**. Nazwa, która jest już w polu w całości — dopełniona tym samym klawiszem albo wybrana z listy — jest zaznaczana w całości zamiast najpierw zdejmować z niej rozszerzenie: pierwszy szczebel jest dla nazwy, do której wędrówka właśnie *dotarła*, gdzie rozszerzenie nie jest jeszcze tematem.

Drabina jest tam, gdzie wędrówka **dociera**, nie tam, gdzie się zaczyna. Kliknij folder w środku ścieżki, a pole otworzy się na wszystkim poniżej niego, z zaznaczoną nazwą tego folderu; każdy <kbd>Tab</kbd> zabiera wtedy **jeden** folder — zaznaczając kolejny, zachowując resztę ścieżki za nim — i dopiero gdy zostanie sama nazwa pliku, zaczyna się poszerzanie:

| naciśnięcie | okruszki | pole | zaznaczone |
| --- | --- | --- | --- |
| kliknięto `a` | | `a/b/c/leaf.md` | `a` |
| <kbd>Tab</kbd> | `a` | `b/c/leaf.md` | `b` |
| <kbd>Tab</kbd> | `a › b` | `c/leaf.md` | `c` |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf` — pierwszy szczebel |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf.md` |

**Ustawiona nazwa jest ustawiona, niezależnie jak ją ustawiłeś.** Dopełnienie jej klawiszem
<kbd>Tab</kbd>, zatwierdzenie znakiem `/` i wybranie jej z listy —
wszystko to zostawia wiersz w tym samym miejscu, trzymający tę samą ścieżkę, więc naciśnięcie po
geście znaczy to samo, niezależnie jaką drogą tam dotarłeś. Wybranie folderu z
listy kiedyś opróżniało pole, wyrzucając ścieżkę, którą dotarcie do
tego samego folderu klawiszem <kbd>Tab</kbd> by zachowało.

**Ścieżka, którą wciąż piszesz, idzie razem z tobą w całości.** Wejście właśnie do folderu, na którym wisi reszta ścieżki, nie jest twierdzeniem, że reszta istnieje — tak właśnie ścieżkę wpisuje się z wyprzedzeniem, a foldery, które nazywa, to te, które <kbd>Enter</kbd> zaraz utworzy. Więc zejście w `Dokumente/plans/untitled.md` do `Dokumente` zachowuje przed tobą `plans/untitled.md`, niezależnie czy `plans` już tam jest, czy nie. To samo dotyczy ścieżki wpisanej od zera: nic z niej nie zostało odziedziczone znikąd, więc nic z niej nie jest zabierane.

**Zamiana jednego kroku na inny to inna historia, i wtedy ścieżka idzie razem z tobą tylko na tyle, na ile naprawdę tam jest.** Zamień folder w środku ścieżki na sąsiedni — kliknij `a`, wpisz inną nazwę, naciśnij <kbd>Tab</kbd> — a wszystko poniżej niego idzie razem z tobą, bo ścieżka, na której byłeś, to zwykle większość ścieżki, której chcesz. Przetrwa jednak przeprowadzkę tylko to, co istnieje po tamtej stronie, więc pole i lista obok niego nigdy się nie różnią: to, co zostaje przed tobą, to ścieżka, którą naprawdę mógłbyś przejść. Zaczynając od `a/b/c/leaf.md`, z klikniętym `a` i zaznaczoną jego nazwą:

| co ustawiłeś | okruszki | pole | zaznaczone |
| --- | --- | --- | --- |
| `x`, który w ogóle nie ma `b` | `x` | | nic nie przyszło razem z nim |
| `y`, który ma `b`, ale bez `c` w środku | `y` | `b` | `b` |
| `z`, bliźniak `a` aż do dołu | `z` | `b/c/leaf.md` | `b` |

Folder pozostawiony w ten sposób samotnie wciąż jest folderem, do którego można wejść: naciśnięcie po nim wchodzi do niego, zamiast zacząć poszerzać zaznaczenie nad jego nazwą.

Na nazwę, której **nic** w folderze nie odpowiada, reaguje się inaczej, bo nic nie zostało przez nią ustawione: naciśnięcie zaznacza to, co wpisałeś, gotowe do nadpisania, zamiast odpowiadać czymś innym.

Całość to **pętla, a jej okrążenie nic nie kosztuje**: naciśnięcie po ostatnim szczeblu oddaje wiersz z powrotem na początek ścieżki, wraz z folderami, gotowy do ponownego okrążenia. Jedyne, co kiedykolwiek opuszcza wiersz, to bezwzględny prefiks, przy naciśnięciu, które przestaje go pokazywać.

To, co wraca, to **ścieżka, którą zbudowałeś**, nie ta, od której wyruszyłeś. Rozwidl wędrówkę w połowie — wybierz z listy innego sąsiada, dopełnij w stronę innej nazwy — a okrążenie zamyka się na tym, gdzie faktycznie jesteś; cztery szczeble przed nim opisują tę samą ścieżkę, a ten był kiedyś nieparzystym szczeblem opisującym przeszłość.

<kbd>Shift</kbd>+<kbd>Tab</kbd> zamyka ten sam pierścień w drugą stronę: na początku ścieżki, gdy nie ma już nic do oddania i nie ma dokąd wyżej, kolejne naciśnięcie skacze do **dalekiego** szczebla — ścieżki od korzenia systemu — i stamtąd kontynuuje zawężanie. Żaden kierunek nie kończy się ślepym zaułkiem.

Nie zużywa też naciśnięcia na szczebel, który już pokazał. Poniżej ostatniego szczebla — nazwy bez rozszerzenia — drabina się kończy i *to samo naciśnięcie* opuszcza folder: ścieżka od korzenia systemu, ścieżka od skarbca, nazwa, nazwa bez rozszerzenia, potem folder — po jednym kroku na naciśnięcie.

Żadne naciśnięcie nie jest też zużywane na szczebel, który niczego nie zmienia: kliknięcie nazwy notatki pokazuje ją już bez rozszerzenia, co właśnie pokazuje pierwszy szczebel, więc stamtąd <kbd>Tab</kbd> zaczyna od drugiego.

Każdy szczebel zmienia to, co *jest* w polu, nie tylko to, co jest podświetlone — zaznaczenie musi być nad tekstem, który nazywa, bo inaczej <kbd>Enter</kbd> zatwierdziłby coś innego niż to, co widać jako zaznaczone. Drabina należy do jednej sesji edycji: kliknij gdzie indziej albo wpisz cokolwiek, a kolejny <kbd>Tab</kbd> znów dopełnia nazwę.

### <kbd>Shift</kbd>+<kbd>Tab</kbd>: ta sama droga wstecz

<kbd>Shift</kbd>+<kbd>Tab</kbd> cofa po jednym kroku na naciśnięcie, w kolejności, w jakiej naciśnięcia zostały wykonane: zaznaczenie zwęża się o szczebel na raz, każde dopełnienie jest oddawane, a z każdego folderu wychodzi się — jego nazwa wraca do pola, byś mógł ją edytować zamiast wpisywać na nowo.

**W drodze powrotnej nic nie jest usuwane.** Dopełnienie jest oddawane przez *zaznaczenie* znaków, które dodało, dokładnie tak jak w drodze naprzód zaznacza to, co poszerzyło — nazwa zostaje przed tobą, a każde kolejne naciśnięcie zaznacza o krok więcej:

| | pole | zaznaczone |
| --- | --- | --- |
| po wejściu | `Alpha-one` | |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `ha-one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `Alpha-one` |

Wpisywanie zastępuje zaznaczoną część, tak jak wszędzie indziej. <kbd>Tab</kbd> odkłada z powrotem dokładnie to, co zaznaczenie oddało, więc wyjście dwoma krokami i powrót dwoma krokami przywraca cię tam, gdzie byłeś.

Gdy cała nazwa jest już zaznaczona, nie zostaje nic, co dodałoby naciśnięcie, a kolejne naciśnięcie idzie *w górę ścieżki*: opuszcza folder, w którym stoisz, dokładnie tak jak robi to <kbd>Backspace</kbd> na pustym polu. To też nic nie kosztuje — nazwa folderu wraca do pola **przed** tym, co już w nim było, zaznaczona, co jest tym samym tekstem, jaki dałoby kliknięcie tego folderu. Powrót to kierunek, a nie historia cofania — ale zaznaczenie nazwy najpierw sprawia, że jedno naciśnięcie nigdy nie cofa jednocześnie tego, co wpisałeś, i nie wyprowadza cię z folderu, w którym to wpisałeś.

Tekst, który otwiera się **już zaznaczony** — to, co pozostawia po sobie kliknięcie folderu — jest nazwą, na której <kbd>Tab</kbd> pracuje dalej: jest dopełniana i wchodzi się do niej jak do wszystkiego innego, a wpisywanie ją zastępuje. Tylko polecenie ustawiania fokusu otwiera się na szczeblu samej drabiny, bo pokazuje ci całą ścieżkę zamiast folderu, do którego można wejść.

## Wpisywanie czegoś, co nie jest ścieżką

| Co wpisujesz | Co się dzieje |
| --- | --- |
| `https://…` | Otwiera się w nowej karcie w **Przeglądarce internetowej** Obsidiana, jeśli masz włączoną tę wtyczkę podstawową; w przeciwnym razie w przeglądarce systemowej |
| `obsidian://…` | Przekazywane do własnej obsługi URI Obsidiana |
| `file:///…` | Dekodowane i otwierane: jako prawdziwa notatka, jeśli jest w twoim skarbcu, w przeciwnym razie w przeglądarce |
| `/home/you/a%20b.md` | To samo, dla ścieżki wklejonej z przeglądarki albo menedżera plików |

Liczą się tylko jawne schematy — notatka o nazwie `100%20` wciąż jest notatką. `/` należący do schematu pozostaje dosłowny zamiast schodzić do folderu, więc adres URL można wpisać ręcznie, a nie tylko wkleić.

## Polecenie dla klawiatury

**Ustaw fokus na pasku ścieżki** otwiera pole na nazwie notatki i przechodzi po nim tak jak <kbd>F2</kbd> — nazwa, nazwa z rozszerzeniem, ścieżka od skarbca, ścieżka od korzenia systemu — a naciśnięcie po tym zamyka pole i wraca kursorem do notatki. Nie zmienia nazwy: Enter nawiguje, jak w każdym innym polu. Domyślnie nie ma własnego klawisza, bo wytyczne Obsidiana odradzają wtyczkom przypisywanie sobie takiego; wiersz **Skróty klawiszowe** na końcu ustawień tej wtyczki otwiera *Ustawienia → Skróty klawiszowe*, pokazując tylko jej polecenia, więc możesz przypisać skrót właśnie tam.

## Nawigacja nigdy nie rusza otwartego pliku

W trybie domyślnym (nawigacji) otwarta notatka **nigdy** nie jest przemianowywana ani przenoszona.

- Ścieżka, która wskazuje na istniejący plik, otwiera go.
- Ścieżka, która jeszcze nie istnieje, jest po prostu tworzona, wraz z brakującymi folderami nadrzędnymi, i otwierana. Każdy plik i folder utworzony w ten sposób jest zgłaszany powiadomieniem — nowy folder inaczej jest niewidoczny, dopóki go nie poszukasz — a wbudowany kosz Obsidiana sprawia, że niechciany można cofnąć jednym naciśnięciem klawisza.
- **Poza skarbcem wciąż najpierw pyta.** Tam ta sama literówka zapisuje do folderu systemowego, gdzie ani powiadomienie, ani kosz Obsidiana specjalnie nie pocieszają.

## <kbd>Ctrl</kbd> — nowa karta, i kopiowanie zamiast przenoszenia

Notatka **utworzona, przeniesiona albo skopiowana w skarbcu jest pokazywana tam, gdzie wylądowała** w Przeglądarce plików, na chwilę zaznaczona kolorem akcentu Obsidiana — drzewo jest miejscem, gdzie jej potem szukasz, więc jest stawiana przed tobą zamiast zostawiana w folderze, który może nawet nie być otwarty. Duplikowanie mówi to samo: kopia zostawia oryginał tam, gdzie był, i otwiera kopię we własnym panelu, co bez żadnego komunikatu łatwo odczytać jako to, że nic się nie stało.

Przytrzymanie <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> na macOS) przy wybieraniu pliku z listy albo przy naciskaniu <kbd>Enter</kbd> na ścieżce wysyła wynik do **nowej karty** zamiast do tej:

| | Bez modyfikatora | Z <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Wybranie albo wpisanie istniejącego pliku | Otwiera tutaj | Otwiera w nowej karcie |
| Wpisanie ścieżki, która nie istnieje | Pyta, potem otwiera tutaj | Pyta, potem otwiera w nowej karcie |
| Zatwierdzenie ścieżki w trybie zmiany nazwy/przenoszenia | **Przenosi** tam notatkę | **Kopiuje** ją tam i otwiera kopię w nowej karcie |

Modyfikator jest odczytywany regułą samego Obsidiana, więc zachowuje się dokładnie tak jak na odnośniku albo na wierszu Przeglądarki plików — kliknięcie środkowym też znaczy „nowa karta”, <kbd>Ctrl</kbd>+<kbd>Alt</kbd> znaczy podział, a <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> nowe okno.

Kopiowanie odmawia nadpisania, dokładnie tak jak przenoszenie — także na własną ścieżkę notatki, gdzie nie ma sensownego celu do skopiowania. Poza skarbcem ta odmowa też jest wypowiadana wprost.

Wszystko to działa **zarówno przy otwartej liście**, jak i bez niej: na podświetlonym wierszu modyfikator dotyczy tego wiersza, a gdy nic nie jest podświetlone, dotyczy tego, co wpisałeś.

## Przeglądanie poza skarbcem

**To jest domyślnie wyłączone.** Włącz najpierw **Dostęp do plików zewnętrznych** w ustawieniach — czytanie i zapisywanie poza skarbcem to jedyna rzecz, którą ta wtyczka robi, a sam Obsidian nie, więc wchodzi się w to świadomie, zamiast musieć z tego wychodzić. Przy wyłączonej opcji nazwa skarbca po prostu pokazuje twój skarbiec w Przeglądarce plików, a nic tutaj nigdy nie zagląda dalej.

Kliknięcie **nazwy skarbca** (lub ikony 🏠, kiedy *Pokaż nazwę skarbca* jest wyłączone) otwiera listę miejsc, a nie zawartości. Pole, które się otwiera, zawiera **całą ścieżkę, na której byłeś, wypisaną w pełni**, z zaznaczonym miejscem, od którego się zaczyna — więc wybranie czegoś innego albo wpisanie czegoś w miejsce zaznaczenia zamienia tylko tę początkową część, zostawiając resztę ścieżki przed tobą. **Naciśnij nazwę drugi raz** — podwójne kliknięcie — a zaznaczenie rozszerza się na całość, i tak właśnie bierze się ścieżkę bezwzględną jednym gestem zamiast zamiatać ją ręcznie. Zmień zdanie, a <kbd>Esc</kbd> przywraca wiersz do stanu sprzed.

Pisanie tutaj podpowiada resztę nazwy miejsca tak jak wszędzie indziej, a <kbd>Tab</kbd> **wstawia to miejsce** — to, na które wskazujesz, albo to, które nazwa może oznaczać jedynie. Tam, gdzie kilka miejsc wciąż dzieli to, co wpisałeś, naciśnięcie zatrzymuje się na rozwidleniu, tak jak wszędzie indziej. Wskazanie na miejsce pokazuje **własną ścieżkę tego miejsca**, całą zaznaczoną, a za nią ścieżkę twojej notatki tylko na tyle, na ile naprawdę tam sięga — czyli dokładnie to, na co wylądowałbyś, wybierając je. Miejsce nie jest krokiem wewnątrz ścieżki na ekranie, tylko punktem, od którego liczy się całą ścieżkę, więc nic z tego, gdzie byłeś, nie zostaje przed nim.

Dostępne miejsca:

- **Twoje pozostałe skarbce**, odczytane z własnego rejestru Obsidiana, najpierw ostatnio otwarty, każdy pod ikoną skarbca Obsidiana — tą samą, której aplikacja używa do swoich poleceń dotyczących skarbców. Skarbiec, który masz już otwarty, dostaje zamiast tego domek: to miejsce, z którego wiersz zaczyna domyślnie, a nie miejsce, do którego można pójść.
- **Katalog domowy**, pod nazwą twojego konta, oznaczony `~`. Lucide nie ma tyldy, więc tę ikonę rysuje sama wtyczka na siatce 24×24 Lucide i z tą samą grubością kreski — ikona, której brakuje zestawowi, a nie znak tekstowy wciśnięty między ikony.
- **Katalog główny systemu plików**, opisany jako `root` — nietłumaczony, bo tak nazywa się w każdym systemie — a nie `/`, które obok następującego po nim separatora czytałoby się jak pusty krok.
- **Zamontowane napędy**, z ikoną według rodzaju tam, gdzie tanio to ustalić: udziały sieciowe, dyski optyczne, dyskietki i nośniki wymienne mają własne; wszystko inne dostaje ogólny napęd. Na Windowsie napędy pokazują się jako `C:` z ogólną ikoną — nazwy woluminów i dokładne rodzaje wymagają WMI, z czego celowo się nie korzysta.

Wybranie innego skarbca **nie przełącza do niego Obsidiana.** Wszystko, co masz otwarte, zostaje otwarte; ścieżka po prostu zaczyna przeglądać tam. Na tym polega cały sens umieszczenia tego na pasku ścieżki zamiast odsyłania do przełącznika skarbców na pasku bocznym.

Ląduje też **tak blisko notatki, na której jesteś, jak to miejsce w ogóle sięga**.

- Jeśli wybrane miejsce *zawiera* notatkę — katalog domowy albo tam, gdzie mieszkają twoje skarbce — dostajesz jej ścieżkę stamtąd: wybierz `~` przy otwartym `takeaways.md`, a pole pokaże `Vaults/twoj-skarbiec/takeaways.md`.
- Jeśli to miejsce obok tego — inny skarbiec, inny napęd — próbowana jest ta sama ścieżka względna, tak głęboko, jak naprawdę istnieje. Skarbce bywają niemal swoimi kopiami, a powodem przeskoczenia do innego jest zwykle ta sama notatka po drugiej stronie.

Tak czy inaczej wiersz zostaje przy wybranym miejscu, a **pierwszy folder tej ścieżki otwiera się zaznaczony** — dokładnie tak, jak przy kliknięciu folderu: krok, który najprawdopodobniej zmienisz przy skoku gdzie indziej, jest tym najbliższym początku, a reszta ścieżki zostaje widoczna, gdy go zmieniasz. Nigdy nic nie jest wpisywane z góry, jeśli naprawdę nie ma tego na dysku.

### Kiedy jesteś na zewnątrz

Ścieżka **zaczyna się od wybranego miejsca**, a nie od układu katalogów maszyny — i tak samo pole, które dostajesz, klikając puste miejsce albo naciskając klawisz fokusu: zawiera ścieżkę od tego miejsca, a nie bezwzględną ścieżkę maszyny, ze śladem zwiniętym do samego miejsca dokładnie tak, jak zwija się do katalogu głównego skarbca w środku — wybierz `Archive`, a wiersz brzmi `Archive / notes / …`, nie `/home/ty/Vaults/Archive/notes/…`. Wiodący segment niesie ikonę odpowiadającą temu, czym jest (skarbiec, katalog domowy, napęd), a <kbd>Backspace</kbd> zatrzymuje się tam, zamiast iść dalej w górę, w resztę systemu plików. Przy wyłączonym *Pokaż nazwę skarbca* ten segment to sama ikona — ustawienie dotyczy początkowego segmentu wiersza, niezależnie od tego, który skarbiec nazywa, nie tylko twojego własnego.

Pasek ścieżki pozostaje **obramowany kolorem błędu** — tym samym pierścieniem, który rysuje tryb zmiany nazwy — przez cały czas, kiedy wskazuje poza twój skarbiec. Oznacza stan trwały, a nie chwilę: dopóki tam jest, nic z własnej obsługi Obsidiana nie dotyczy tego, co wiersz pokazuje, a zapis jest zablokowany, dopóki nie powiesz inaczej.

Poza tym przeglądanie działa jak w środku: plakietki, separatory, pisanie, uzupełnianie, <kbd>Backspace</kbd>, żeby wyjść. Obowiązują też te same reguły widoczności, więc nieobsługiwane rozszerzenia nadal wymagają opcji **Wykrywaj wszystkie rozszerzenia plików** Obsidiana, a pliki ukryte nadal ustawienia tej wtyczki.

**Kliknięcie prawym przyciskiem działa też tam**, choć to inne menu: własne procedury Przeglądarki plików potrzebują pliku, o którym wie skarbiec, więc pozycje na zewnątrz budowane są zamiast tego ze ścieżki. Oferują otwieranie (tutaj, po prawej, w nowym oknie albo w domyślnej aplikacji pulpitu), *Kopiuj ścieżkę*, *Pokaż w eksploratorze systemu* oraz — po otwarciu kłódki — *Nowa notatka*, *Nowy folder*, *Zrób kopię*, *Zmień nazwę…* i *Usuń*. **Przeciąganie** wciąż wymaga pliku ze skarbca i pozostaje niedostępne.

To samo menu jest dostępne na otwartym pliku w podglądzie, przez prawy przycisk albo z własnych trzech kropek panelu, i pyta o kłódkę w nagłówku tego widoku. Nie pyta o nic więcej: to, czy plik jest renderowany, czy pokazywany jako źródło, nie ma wpływu na to, czy można go usunąć, a obraz albo PDF — który w ogóle nie ma widoku źródłowego — jest tak samo usuwalny jak notatka. *Usuń* oznacza kosz systemu, więc można to stamtąd cofnąć; system bez kosza zgłasza to zamiast niszczyć plik.

Usuwanie poza skarbcem przenosi plik do twojego **kosza systemowego** — Kosz na Windowsie, Kosz na macOS — nigdy do bezpowrotnego usunięcia. Tutaj nie ma kosza Obsidiana, z którego można by odzyskać, więc usunięcie, którego nie dałoby się cofnąć, w ogóle nie jest oferowane: tam, gdzie platforma nie ma kosza, próba zgłasza niepowodzenie zamiast niszczyć plik.

### Zapisywanie poza skarbcem

Wszystko, co zapisuje, jest **domyślnie zablokowane**. Przez cały czas, kiedy wiersz wskazuje poza twój skarbiec, miejsce przełącznika zmiany nazwy w nagłówku zajmuje **czerwona kłódka** — tego samego koloru co pierścień wokół wiersza i z tego samego powodu: oznacza odmowę. Te dwa elementy to jeden przycisk w jednym miejscu, więc nigdy nie ma wątpliwości, który z nich co blokuje.

Trzy naciśnięcia, w cyklu:

| Naciśnięcie | Co dostajesz |
| --- | --- |
| Czerwona kłódka | Zapis tutaj jest dozwolony. Kłódkę zastępuje przełącznik zmiany nazwy/przenoszenia |
| Przełącznik | Tryb zmiany nazwy/przenoszenia, dokładnie jak w skarbcu |
| Przełącznik ponownie | Tryb się kończy, a kłódka zamyka się z powrotem — zgoda nie przeżywa rzeczy, dla której została otwarta |

**Klawisz zmiany nazwy pyta też o kłódkę.** Poza skarbcem jego naciśnięcie
błyska kłódką otwartą i zamkniętą, zamiast otwierać tryb, który i tak
odmówiłby każdego zatwierdzenia: odmowa przychodzi przed pracą, a nie po
niej. Naciśnij kłódkę albo naciśnij klawisz zmiany nazwy ponownie w ciągu
pół sekundy — drugie naciśnięcie daje dokładnie to, co daje przycisk, dla
tego miejsca, i razem z tym otwiera tryb zmiany nazwy.

Wewnątrz twojego skarbca nie ma kłódki: nie ma czego odblokowywać, więc przełącznik po prostu zajmuje to miejsce.

Zgoda jest udzielana **miejscu, a nie chwili**: przeżywa wszystko, co robiłbyś, pracując w jednym miejscu — dokończenie przenoszenia, kliknięcie poza polem, otwarcie pliku — a kończy się, gdy wybierzesz inny skarbiec, napęd albo katalog główny z listy, gdy wiersz wraca do pliku ze skarbca, albo przy tym trzecim naciśnięciu. Więc seria przenoszeń wewnątrz jednego folderu wymaga jednego naciśnięcia, nie jednego na plik.

Przy otwartej kłódce pasek ścieżki zachowuje się tam tak jak w środku:

| Gest | Wynik |
| --- | --- |
| Wpisanie nazwy, która nie istnieje, <kbd>Enter</kbd> | To samo pytanie „utworzyć?” co w środku; brakujące foldery też są tworzone. Nazwa bez rozszerzenia staje się `.md`, dokładnie tak jak w środku |
| Tryb zmiany nazwy/przenoszenia, wpisanie nowej nazwy | Zmienia nazwę pliku, który wiersz pokazuje. Nazwa bez rozszerzenia zachowuje rozszerzenie pliku — tutaj folder mieści pliki każdego rodzaju, a zmiana nazwy nie powinna po cichu zamieniać `.png` w `.md` |
| Tryb zmiany nazwy/przenoszenia, przejście gdzie indziej, wybór **zachowaj tę nazwę** | Przenosi go tam pod nazwą, którą już ma |
| Przytrzymanie <kbd>Ctrl</kbd> przy którymkolwiek | Kopiuje zamiast przenosić i otwiera kopię w nowej karcie |

Przy zamkniętej kłódce wszystko to zamiast się wydarzyć zgłasza, co je blokuje. W żadnym z tych stanów nic nie jest nadpisywane: istniejący już cel jest odrzucany, a odmowa pochodzi od samego systemu plików (`COPYFILE_EXCL`, wyłączne utworzenie), a nie od sprawdzenia, które mogłoby przegrać wyścig. Przenosiny między systemami plików — z pendrive'a, z udziału sieciowego — schodzą do kopiuj-a-potem-usuń, a oryginał znika dopiero wtedy, gdy kopia dotarła na miejsce.

**Przeniesienie notatki *poza* twój skarbiec najpierw pyta.** `fileManager` nie potrafi podążyć za plikiem przez tę granicę: każdy odnośnik wskazujący na notatkę przestaje się rozwiązywać, nic ich nie aktualizuje, a notatka opuszcza indeks skarbca. Więc przeniesienie oferowane jest jako decyzja, a nie odmawiane albo wykonywane po cichu — okno dialogowe podaje, ile to kosztuje i ile notatek linkuje do tej, którą przenosisz. Potwierdź, a naprawdę się przenosi: skopiowane na zewnątrz, potem usunięte ze skarbca przez własne usuwanie Obsidiana, więc da się to odzyskać dokładnie tak jak usuniętą notatkę, a niepowodzenie na którymkolwiek etapie zostawia notatkę tam, gdzie była. Przytrzymanie <kbd>Ctrl</kbd> wciąż zamiast tego ją kopiuje na zewnątrz, co nie ma tego problemu. Droga w drugą stronę — wniesienie zewnętrznego pliku *do* skarbca — nie jest jeszcze podłączona.

### Otwieranie pliku zewnętrznego

Przeglądanie systemu plików może zawrócić **z powrotem do skarbca, który masz otwarty** — z katalogu głównego, z katalogu domowego, skądkolwiek mieszkają twoje skarbce. Plik osiągnięty w ten sposób jest zwykłą notatką, więc tak się otwiera: prawdziwy edytor, odnośniki i odnośniki zwrotne, a wiersz wraca do ścieżki zakorzenionej w skarbcu. Tylko pliki, dla których Obsidian nie ma widoku, zostają w podglądzie, bo tam podgląd jest lepszą odpowiedzią. Tam, gdzie podgląd i tak pokazuje taką notatkę — powiedzmy, ponownie otwarta przestrzeń robocza — jego górny wiersz oferuje **Otwórz w *(skarbiec)***, czyli to samo, co zrobiłbyś ręcznie.

Edytor Obsidiana działa tylko na plikach wewnątrz skarbca, więc pliku zewnętrznego **nie da się** otworzyć jako prawdziwej notatki z odnośnikami, odnośnikami zwrotnymi i całą resztą — to ograniczenie aplikacji, a nie tej wtyczki. Wybranie takiego pliku otwiera zamiast tego **podgląd**, tylko do odczytu, dopóki nie powiesz inaczej:

| Typ | Pokazywany jako |
| --- | --- |
| `.md`, `.markdown` | Wyrenderowany Markdown |
| `.html`, `.htm`, `.xhtml` | Wyrenderowana strona |
| Obrazy, dźwięk, wideo, PDF | Natywny odtwarzacz/podgląd |
| Dowolny inny plik **tekstowy** (`.json`, `.css`, `.log`, `.txt`, …) | Czysty tekst dosłownie |
| Formaty binarne bez podglądu (`.zip`, `.exe`, …) | Przekazywany do *Otwórz w domyślnej aplikacji* |

Podgląd ma dwa odczyty pliku, a ponieważ się wykluczają, pokazywany jest tylko ten, **na który** byś przełączył:

| | Co robi | Domyślne dla |
| --- | --- | --- |
| **Pokaż jako Markdown** | Renderuje plik jako notatkę, tylko do odczytu | `.md`, `.markdown` |
| **Pokaż jako stronę** | Renderuje plik jako stronę, którą jest, tylko do odczytu | `.html`, `.htm`, `.xhtml` |
| **Edytuj jako tekst** | Źródło, edytowalne | wszystko inne |

Poza skarbcem **Edytuj jako tekst** jest zarazem naciśnięciem, które zdejmuje tryb tylko do odczytu — tryb i zgoda to jeden gest, a nie dwa przyciski do rozważania. Robi się czerwony **za każdym razem, kiedy naciśnięcie zdjęłoby tryb tylko do odczytu**, czy to gdy uzbrajasz edycję na miejscu, czy gdy przychodzisz prosto z widoku wyrenderowanego; wewnątrz skarbca nie ma czego odblokowywać, więc pozostaje zwykły. **Pokaż jako Markdown** dostaje lekką powłokę koloru akcentu — ten sam odcień, który Obsidian daje zaznaczonemu tekstowi — oznaczając go jako drogę powrotną, a nie wezwanie do działania.

Ponieważ przycisk śledzi *edycję*, a nie surowy tryb, plik leżący w widoku tekstowym tylko do odczytu wciąż oferuje **Edytuj jako tekst**: to jest naciśnięcie, które ją uzbraja. Plik, w którym nigdy nie da się pisać — skrócony albo nieczytelny — mówi zamiast tego **Pokaż jako tekst**, bo tyle właśnie może dać naciśnięcie.

Domyślne ustawienia są tymi użytecznymi, a nie dosłownymi: `#` w skrypcie powłoki to komentarz, a nie nagłówek, więc renderowanie `.log` jako Markdown połknęłoby go po cichu. Każde z domyślnych ustawień da się nadpisać dla pojedynczego pliku, a wybór trafia do historii karty, więc wstecz/dalej i ponownie otwarta przestrzeń robocza go zachowują — mnóstwo notatek mieszka w plikach `.txt`, a mnóstwo plików `.md` czyta się lepiej jako źródło.

#### Co wolno robić stronie HTML

Nic. Strona pokazywana jest w ramce z **każdym uprawnieniem odebranym** — bez
skryptów, bez formularzy, bez nawigacji, bez własnego pochodzenia — i z
polityką treści, która nie zezwala jej na żadną sieć. To nie ostrożność dla
samej ostrożności: lokalna strona wczytana zwykłym sposobem dzieliłaby
pochodzenie z tym oknem, a to okno to Obsidian, więc skrypt w pobranym pliku
HTML działałby wewnątrz twojej aplikacji z zasięgiem twojej aplikacji.

To, co to kosztuje, to cokolwiek, co strona *robi*; to, co zachowuje, to
wszystko, czym strona *jest*. Arkusze stylów i obrazy leżące obok pliku są
wczytywane i przenoszone do ramki, więc zapisana strona wciąż wygląda jak
ona sama. Odniesienia wychodzące poza własny folder strony i odniesienia
gdzieś do sieci pozostają dokładnie tak, jak zapisano, i po prostu się nie
wczytują — lokalny plik nie może po cichu powiedzieć serwerowi, że go
otworzyłeś.

Skrypty są **usuwane**, a nie tylko blokowane, więc strona, którą widzisz, i
źródło, na które możesz przełączyć, różnią się w jeden zadeklarowany sposób,
a nie w tym, czego ramka po cichu odmówiła uruchomić. Odnośniki wewnątrz
strony nic nie robią. Kiedy chcesz prawdziwej rzeczy — skryptów, sieci i
całej reszty — *Otwórz w domyślnej aplikacji* przekazuje ją twojej
przeglądarce, która jest do tego właściwym narzędziem.

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

- **Otwórz w *(skarbiec)*** — pokazywane, gdy plik należy do jednego z twoich pozostałych skarbców. Przekazuje go własnej obsłudze URI Obsidiana, która otwiera okno tamtego skarbca z notatką w środku, jako prawdziwą edytowalną notatkę. To okno zostaje dokładnie takie, jakie było; nic się pod tobą nie przełącza.
- **Pokaż jako Markdown** / **Pokaż jako stronę** / **Edytuj jako tekst** — dwa odczyty, jakie ma ten plik; ostatni też zdejmuje tryb tylko do odczytu poza skarbcem.
- **Otwórz w domyślnej aplikacji** — przekazuje plik domyślnej aplikacji twojego pulpitu, w tym formaty binarne, których ten podgląd nie potrafi pokazać. Sformułowane dokładnie tak jak własna pozycja Obsidiana dla tej samej czynności, bo to ta sama czynność.

Podgląd odpowiada też na **kliknięcie prawym przyciskiem**: wewnątrz edytora tekstu z *Wytnij* / *Kopiuj* / *Wklej* / *Zaznacz wszystko*, a gdziekolwiek indziej z własnym menu pliku. Menu trzech kropek Obsidiana w nagłówku również je niesie — poza skarbcem oferowałoby inaczej tylko *Podziel po prawej* i *Podziel w dół*.

Nic poza twoim skarbcem nie jest zapisywane, dopóki najpierw nie naciśniesz *Edytuj jako tekst*. Pełne wyjaśnienie znajdziesz w sekcji [Poza skarbcem](README.pl.md#poza-skarbcem) w README.

## Upuszczanie pliku na folder w ścieżce

Każdy folder w wierszu jest celem upuszczenia, więc **notatka przeciągnięta na
niego przenosi się tam** — najkrótsza droga wiedzie między notatką a każdym
folderem powyżej niej, bo miejsce docelowe jest już widoczne na ekranie.
Przeciągaj z eksploratora plików, z listy, z nazwy notatki w nagłówku lub z
jakiegokolwiek innego miejsca w Obsidianie, które generuje plik — to
przeciąganie samej aplikacji, więc etykieta pod kursorem, kursor i podświetlenie
są tymi, które rysuje eksplorator plików.

**Nazwa skarbca również przyjmuje upuszczenie**, bo jest folderem na szczycie
wiersza — to jedyny gest, który umieszcza notatkę w głównym katalogu skarbca z
tego miejsca.

**Cały zbiór wybranych elementów można przeciągnąć naraz**, i przenosi się on
jako jedno: jeśli którykolwiek z nich nie mógłby zostać przyjęty, upuszczenie
jest odrzucane, a nie tak, że część elementów przenosi się, a resztę po cichu
pomija.

Linki idą za notatką, tak samo jak wtedy, gdy jest przenoszona z eksploratora
plików lub przez wpisanie ścieżki.

Folder, który **nie mógł przyjąć upuszczenia, nie proponuje niczego własnego**
— żadnej etykiety *Przenieś do*, żadnego podświetlenia folderu — zamiast
proponować coś, co i tak by się nie powiodło; w tym miejscu stoi za to własna
odpowiedź Obsidiana dla nagłówka, *Otwórz w tej karcie*. Trzy przypadki:

- folder, w którym plik **już się znajduje**, bo już tam jest;
- folder upuszczony **na samego siebie lub na własnego potomka**, co
  pozbawiłoby go miejsca, z którego przyszedł;
- zbiór zawierający **folder i coś w jego wnętrzu**, bo przeniesienie folderu
  zabiera ze sobą dziecko.

Folder, który już zawiera **plik o tej samej nazwie**, przyjmuje upuszczenie i
pyta, co zrobić z tym, który stoi na drodze, tym samym oknem dialogowym co
przy wpisanej lub wybranej zajętej nazwie — zobacz [Nazwa, która jest
zajęta](#nazwa-która-jest-zajęta). Nic tutaj nie nadpisuje.

Upuszczenie przyjmują tylko foldery **znajdujące się wewnątrz twojego
skarbca**. Kiedy wiersz wskazuje poza skarbiec, jego segmenty odmawiają, bo
wyniesienie notatki ze skarbca zrywa każdy link do niej — to decyzja warta
pytania, a nie gestu. Sposobem na zrobienie tego świadomie wciąż jest
wpisanie ścieżki, które najpierw pyta i mówi, ile notatek zostałoby tym
objęte.

## Upuszczanie tekstu lub pliku, by go zapisać

Te same cele przyjmują też **treść**, a nie tylko pliki, a rozróżnienie między
tymi dwoma zależy od tego, co przeciągasz, a nie od tego, gdzie to puścisz.

**Na notatkę, którą wiersz już nazywa** — na własną nazwę notatki albo na
separator, którego folder ma notatkę folderu — to, co upuściłeś, trafia na
jej koniec, po pustej linii. Pyta najpierw, bo to zapisuje do pliku, który już
istnieje, a przeciągnięcie to gest, który niepewna ręka może wykonać
przypadkiem. Działa tekst z edytora, plik z pulpitu i notatka wyciągnięta z
tego skarbca; plik jest odczytywany jako tekst, a plik binarny jest odrzucany,
a nie wklejany jako ekran pełen bzdur.

**Na miejsce — nazwę skarbca lub folder** — nic nie jest jeszcze zapisywane,
bo nic nie zostało nazwane. Pole otwiera się tam, zawierając to, co
upuściłeś, a nazwa, którą wpisujesz, jest tym, co to zatwierdza: nowa notatka
zostaje *utworzona* zawierając ten tekst, a istniejąca jest pytana zupełnie
tak jak powyżej. <kbd>Esc</kbd> lub kliknięcie gdzie indziej puszcza całą
sprawę.

**Wiersz świeci niebieskim obramowaniem**, kiedy przeciąganie, które
wylądowałoby jako treść, znajduje się nad nim, i pozostaje niebieski, gdy pole
je zawiera — to samo niebieskie, mówiące to samo: to, co dzieje się dalej,
dotyczy tekstu, który niesiesz. Plik przeciągnięty z twojego własnego skarbca
na folder wciąż znaczy *przenieś go tam*, zachowuje własne podświetlenie
Obsidiana i nigdy nie świeci niebieskim — ten gest był tam pierwszy i treść
się przed nim wycofuje.

## Kiedy ścieżka jest dłuższa niż panel

Nazwy są **skracane, a nie ściskane**, w porządku tego, czego najmniej
prawdopodobnie potrzebujesz:

1. **Najpierw nazwa skarbca**, aż do samej ikony. Wiesz, w jakim skarbcu
   jesteś; ikona wciąż mówi, gdzie zaczyna się ścieżka.
2. **Potem rozszerzenie pliku**, jeśli je włączyłeś — te same trzy znaki na
   niemal każdym pliku w skarbcu. Znika w całości, nie skracane po części:
   połowa rozszerzenia mówi tyle, co żadne rozszerzenie.
3. **Potem foldery, najdłuższe najpierw.** Najdłuższa nazwa folderu skraca się
   do długości następnej najdłuższej, potem obie razem, i tak dalej, każda
   zatrzymując się na swoim minimum — więc jeden bardzo długi folder odda
   wszystko, co ma nad innymi, przed tym, jak krótka nazwa obok niego straci
   choć jedną literę.
4. **Nazwa samego pliku na końcu**, i zatrzymuje około sześciu znaków. To do
   niej służy nagłówek.

Miejsce jest oddawane **stopniowo**, w ułamkach piksela, a nie po jednej
literze na raz: nazwa, która ustępuje, jest przycinana co do piksela i
zanika pod swoim `…`, więc panel przeciągany powoli zwęża wiersz gładko i
nic za nim nie przesuwa się skokowo. Zanim zniknie choć jedna litera,
wydawana jest przestrzeń wokół separatorów — to jedyny odstęp wiersza i nie
kosztuje żadnej informacji — a skrócona nazwa kończy się tam, gdzie zaczyna
się separator, bez pasa pustego miejsca między nimi.

**Pole zajmuje to, co zawiera.** Otwarcie go, by wpisać ścieżkę, nie zmusza
folderów obok do ustępowania: jest tak szerokie jak tekst w nim i rośnie w
miarę pisania, więc reszta wiersza zachowuje wszystko, czego pole nie
potrzebuje. Tylko gdy nie ma miejsca na oba, wiersz się przewija, a wtedy
pole jest tą jedną rzeczą, która nigdy nie ustępuje — to edytowany tekst, a
nie dopasowywana nazwa.

Nic nie jest ucinane poza to, co odróżnia dany element od jego sąsiadów:
`Projects2025` i `Projects2026` w tym samym folderze schodzą do `…025` i
`…026`, a nie do przedrostka, który uczyniłby je tym samym słowem, natomiast
`Reports` obok `Receipts` może zejść do `Rep…`. Ponadto każda nazwa zachowuje
**czytelną szerokość** — odpowiednik około czterech liter dla folderu i
sześciu dla nazwy pliku, mierzoną w foncie, którym wiersz jest faktycznie
rysowany, a nie liczoną znak po znaku. Cztery wąskie litery i cztery szerokie
nie są tą samą ilością nazwy, więc `lilliliillil` może zachować więcej z
siebie niż `WWMMWWMMWWMM`, a to, co pozostaje na ekranie, ma tę samą
wielkość w obu przypadkach. Krótkie nazwy są całkowicie pozostawiane w
spokoju — nazwa zdarta do `A…` jest unikalna i wciąż nieczytelna. **Spacje
nie liczą się do tego limitu.** Sześć znaków mówiących, który to plik, to
sześć znaków wartych przeczytania, więc puste miejsca między nimi jedzie za
darmo i nigdy nie zostaje umieszczone tuż przy `…`, gdzie i tak byłoby
niewidoczne.

**Nazwa jest ucinana tam, gdzie jej sąsiedzi się z nią zgadzają, a w
środku, gdy nie zgadzają się nigdzie.** Dwa foldery nazwane `aaaa-common-one`
i `aaaa-common-two` mają wspólne wszystko oprócz ostatnich trzech znaków,
więc obcięcie ogona zachowuje połowę, która mówi coś istotnego: schodzą one
do `…one` i `…two`, co jest krótsze *i* odróżnia je od siebie. Gdzie
zgodność jest na końcu — `alpha-draft` obok `beta-draft` — to koniec
zostaje odcięty; gdzie jest na obu końcach, to, co zostaje, to środek.
Nazwa bez bliskich sąsiadów traci swój środek, bo nazwa zaczyna się od tego,
co jest, a kończy tym, który to jest — dla pliku jest to rozszerzenie:
`annual…2026.md`.

Krótki wspólny fragment się nie liczy. `parallel structures` przypadkiem
kończy się na te same dwie litery co `Schemes` stojące obok, i to nie jest
powód, by zachować którąkolwiek z nich w całości — trzy znaki od początku
już je rozróżniają.

Nic nie zawija się do drugiej linii. Kiedy nawet najkrótsze uczciwe nazwy nie
mieszczą się, wiersz **przewija się w bok**, zaparkowany na końcu, gdzie
jest plik — w tym momencie nie zostaje już nic do skompresowania, a dalsze
ucinanie skrywałoby, a nie skracało. Kółko myszy przewija wiersz niezależnie
od tego, gdzie nad nim znajduje się wskaźnik, i można dosięgnąć obu końców:
podczas przewijania wiersz wyrównuje się do swojego początku, niezależnie od
ustawienia wyrównania, bo treść wyśrodkowana w polu, które przerosła,
wylewa się tak samo w lewo, jak w prawo — a do tej połowy nie można się
przewinąć wcale.

**Wskaż skróconą nazwę, a wróci ona w całości**, tak długo, jak na nią
wskazujesz, przewinięta do lewego krańca, tak że wszystko, co wróciło, jest
widoczne na ekranie. **Kliknij ją, a zostanie**: pole otwiera się, pokazując
folder, który kliknąłeś, to, co jest proponowane po nim, i to, co
wpisujesz, i nadal to pokazuje, gdy wskaźnik się już oddalił. Nazwy stoją w
miejscu, gdy przewijasz wiersz lub piszesz w polu — jedna otwierająca się
nagle pod gestem mającym na celu odczytanie wiersza przesunęłaby wszystko
za nią spod twoich rąk.

**Początkowy segment zawsze niesie podpowiedź, i jest to pełna, absolutna
ścieżka** — `/home/ty/Skarbce/Notatki`, albo gdziekolwiek wiersz się zaczyna.
To jedna rzecz o wierszu, której nic na ekranie nie może powiedzieć: nazwa
mówi *który* skarbiec, nigdy gdzie się znajduje. Jest tam bez względu na to,
czy coś musiało zostać skrócone.

Z wyłączonym **Pokaż nazwę skarbca** nazwa nie jest usuwana, tylko trzymana
przy zerowej szerokości — więc wskazanie ikony przywraca ją tak samo, jak
wskazanie nazwy, którą wiersz musiał skrócić.

**Pokazuj rozszerzenia plików** przywraca rozszerzenie do nazwy pliku w
wierszu. Wyłączone — domyślnie — wiersz nazywa notatkę tak, jak nazywa ją
Obsidian, bez `.md`, które dzieli niemal każdy plik w skarbcu; włączone,
nazywa ją tak, jak robi to system plików, co jest przydatne, gdy skarbiec
przechowuje więcej niż notatki. To też druga rzecz, którą wiersz oddaje, gdy
brakuje miejsca, tuż po nazwie skarbca.
Podpowiedź daje ci resztę: nie tylko nazwę, ale wszystko, co wiersz pod nią
pokazuje, jako `…/nazwa/folder/notatka.md`, więc jedno wskazanie odpowiada
zarówno na „co to jest”, jak i na „co jest pod tym”. Ikona skarbca nazywa
swój skarbiec w ten sam sposób, gdy nazwa jest wyłączona albo została
zgnieciona.

## Kolory ostrzeżeń

| | Kiedy | Co to znaczy |
| --- | --- | --- |
| **Czerwone** obramowanie na ścieżce | Wiersz wskazuje poza twój skarbiec | Obsidian nie może otworzyć tego, co tam jest, jako notatki, i nic tam nie jest zapisywane, dopóki nie otworzysz kłódki. |
| **Pomarańczowe** obramowanie na ścieżce | Plik jest typem tekstowym, dla którego Obsidian nie ma widoku | Ostrzeżenie. Obsidian oddałby go domyślnej aplikacji twojego systemu; wtyczka pokazuje go zamiast tego. |
| **Czerwony** tekst w otwartym polu | Nic jeszcze nie jest pod tą ścieżką | <kbd>Enter</kbd> ją utworzy, a nie otworzy. To nie tyle ostrzeżenie, co stwierdzenie, co zrobi następne naciśnięcie klawisza — zobacz [Wpisywanie ścieżki](#wpisywanie-ścieżki). |
| **Czerwona** kłódka na miejscu przełącznika zmiany nazwy | Wiersz wskazuje poza twój skarbiec i zapisywanie tam jest wciąż zablokowane | Ten sam czerwony co obramowanie, z tego samego powodu: oznacza odmowę. Naciśnięcie jej pozwala tutaj pisać i oddaje miejsce przełącznikowi — zobacz [Zapisywanie poza skarbcem](#zapisywanie-poza-skarbcem). |

**Dwa obramowania są niezależne, i oba mogą wystąpić naraz** — zewnętrzny
`.json` jest zarówno poza twoim skarbcem, *jak i* typem, dla którego Obsidian
nie ma edytora. W podglądzie pojawiają się jako osobne linie, każda
stwierdzająca tylko swój własny fakt. Na ścieżce, gdy oba warunki
zachodzą, wygrywa czerwony, bo dwa obramowania byłyby tylko szumem.
Czerwony *tekst* to zupełnie trzecia rzecz: dotyczy tego, co jest pisane, nie
tego, na co wskazuje wiersz, więc może pojawić się przy dowolnym z
obramowań lub przy żadnym z nich.

Poziom pomarańczowy jest celowo wąski. Zarejestrowane typy (Markdown, canvas,
obrazy, PDF, audio, wideo) są obsługiwane właściwie i nie dostają nic. Pliki
binarne również nie dostają nic — nie zamienisz przypadkiem `.zip` w bałagan
edycji. To, co zostaje, to właśnie zagrożenie: `.json`, `.css` czy `.log`,
które **Pokaż wszystkie typy plików** uczyniło widocznymi. Lista jest celowo
szersza: tam wszystko, co nie jest notatką, jest pomarańczowe — zobacz [jak
kolorowane są pozycje listy](#jak-kolorowane-są-pozycje-listy).

## Tryb przenoszenia/zmiany nazwy

Przycisk ołówka po prawej stronie nagłówka — obok przycisku trybu widoku,
tej samej wielkości co natywne przyciski — przełącza tryb
przenoszenia/zmiany nazwy. Poza twoim skarbcem w jego miejscu stoi czerwona
kłódka, dopóki jej nie naciśniesz; zobacz [Zapisywanie poza
skarbcem](#zapisywanie-poza-skarbcem). Wiersz nagłówka jest wtedy oprawiony w
kolor akcentu, zupełnie jak zmiana nazwy w eksploratorze plików. Te same
kliknięcia i naciśnięcia klawiszy zatwierdzają teraz przeniesienie lub zmianę
nazwy przez `fileManager.renameFile` Obsidiana, więc wszystkie linki do
notatki idą za tym.

Podczas zmiany nazwy:

- Aktualna nazwa pliku jest przypięta do listy każdego folderu, więc
  przeniesienie notatki bez zmiany jej nazwy to jedno kliknięcie.
- Nazwy już zajęte w folderze docelowym są **czerwone** — folder, który już
  zawiera tę nazwę, i plik o tej nazwie — więc konflikt widać, zanim
  wybierzesz. Wciąż można je wybrać: zobacz poniżej.
- Wpis jest sprawdzany na żywo według własnych reguł zmiany nazwy Obsidiana
  — te same zestawy znaków, te same komunikaty, ta sama czerwona podpowiedź,
  którą dostajesz przy zmianie nazwy w drzewie plików — więc niedozwolona
  nazwa jest oznaczana w miarę pisania i nie może zostać zatwierdzona.
- Kliknięcie poza wierszem nagłówka, albo utrata fokusu przez nagłówek,
  kończy tryb zmiany nazwy.

### Nazwa, która jest zajęta

Przeniesienie lub zmiana nazwy na nazwę, która już istnieje, **pyta, a nie
odmawia.** Otwiera się okno dialogowe z dwiema ścieżkami do edycji: dokąd
idzie twój plik i dokąd idzie plik stojący na drodze — czerwoną, dopóki jest
zajęta. Każda ścieżka jest rysowana w taki sam sposób, jak ścieżka na
ścieżce: części, które się różnią, są kolorowane i skracane jako ostatnie,
więc długa ścieżka wciąż pokazuje, co się zmienia.

Oba pola mają listę. Druga zawiera zwyczajowe wyjścia:

- **Zamień miejscami** — trafia do starego folderu twojego pliku, pod swoją
  własną nazwą.
- **Zamień nazwy** — zostaje na miejscu i przyjmuje starą nazwę twojego
  pliku.
- **Zamień oba** — przyjmuje starą ścieżkę twojego pliku.
- `-1`, `-bak` i `-old` obok własnej nazwy.
- Dwie nazwy, które miały te pliki.

Pierwsza lista proponuje miejsce, dokąd miał iść twój plik, **Zostań na
miejscu**, jego własną nazwę w folderze docelowym oraz `-1`, `-bak` i `-old`
obok niej. Wyjście, którego ścieżka jest zajęta, jest wyszarzone i nie można
go wybrać. Wybranie jednego **tylko wypełnia pole** — wciąż można je
edytować — a **Zastosuj** przenosi obie, wraz z linkami; **Anuluj** nie
przenosi niczego. Wybranie zajętej nazwy z listy pyta o to samo, tak samo
jak upuszczenie notatki na folder, który już zawiera jej nazwę.

## Jeden klawisz do obu zmian nazwy

Polecenie zmiany nazwy (domyślnie <kbd>F2</kbd>, albo jakikolwiek skrót mu przypisałeś) **przełącza się** między zmianą nazwy w tytule wbudowanym Obsidiana a paskiem ścieżki w nagłówku z tej wtyczki. Jeśli wyłączyłeś tytuł wbudowany Obsidiana, pasek ścieżki w nagłówku staje się jedynym celem, więc klawisz nigdy nie robi nic.

Na pasku ścieżki otwiera on **nazwę bez rozszerzenia** — tym zwykle jest zmiana nazwy, i to samo zaznacza kliknięcie nazwy. Naciśnij ponownie, a zrobi to, co zrobiłby tam <kbd>Tab</kbd>: na nazwie to kolejny szczebel —
nazwa z rozszerzeniem, ścieżka od folderu skarbca, ścieżka od
głównego katalogu systemu; przy wpisanym tekście — dopełnia go, tak jak <kbd>Tab</kbd>.

**Cykl zamyka się na nagłówku.** Pięć naciśnięć obiega go w całości — tytuł wbudowany,
nazwa, nazwa z rozszerzeniem, ścieżka od skarbca, ścieżka
od głównego katalogu systemu — a szóste to znów tytuł wbudowany. To naciśnięcie jest jedynym, które różni się od
<kbd>Tab</kbd>, który zamiast tego wraca na początek ścieżki — a siódme
trafia tam, gdzie trafia okrążenie <kbd>Tab</kbd>: do głównego katalogu skarbca, z całą ścieżką w
polu i zaznaczonym jej pierwszym folderem. Więc do każdego kroku, do którego dociera <kbd>Tab</kbd>, dociera
też ten klawisz.

Polecenie **Ustaw fokus na pasku ścieżki** robi to samo wewnątrz pola — cokolwiek
zrobiłby <kbd>Tab</kbd> — a tam, gdzie <kbd>Tab</kbd> zrobiłby okrążenie, ono oddaje kursor z powrotem
notatce. Jego kolejne naciśnięcie to okrążenie: główny katalog skarbca, zaznaczony pierwszy folder.

**W polu, które jest już otwarte**, klawisz zamienia je w zmianę nazwy tam, gdzie
stoi — zachowując tekst, karetkę i zaznaczenie — a **Ustaw fokus na pasku
ścieżki** zdejmuje z niego zmianę nazwy tą samą drogą. **Cokolwiek innego** naciśnięte lub
kliknięte między naciśnięciami zaczyna od nowa dowolny z cykli, więc naciśnięcie po tym, jak
coś edytowałeś, nigdy nie trafia na szczebel pozostały z poprzedniego razu.

Poza skarbcem klawisz też działa — nie ma tam tytułu wbudowanego, więc
pierwsze naciśnięcie trafia od razu na pasek ścieżki.

Działa to przez opakowanie polecenia `workspace:edit-file-title`, a nie przechwycenie klawisza, więc przypisanie skrótu na nowo i uruchomienie polecenia z palety działają bez zmian.

## Jak kolorowane są pozycje listy

| Kolor | Oznacza |
| --- | --- |
| **Fioletowy** | Notatka (`.md`, `.markdown`) — to, co Obsidian otworzy jako notatkę, wyłowione z folderu o mieszanej zawartości |
| **Pomarańczowy** | Nie-notatka — wszystko, czego Obsidian nie otworzy jako notatki, od PDF-a po `.txt`, wraz z towarzyszącymi im pozycjami `:page`. Folder o mieszanej zawartości jest przeszukiwany pod kątem znajdujących się w nim notatek, a jeden kolor dla całej reszty mówi to szybciej niż ostrzeżenie na kilku z nich; zobacz [dwa kolory ostrzeżeń](#kolory-ostrzeżeń) |
| **Wygaszony** | Poza skarbcem, więc obsługa właściwa skarbcowi nie ma zastosowania |
| **Niebieski**, pogrubiony | Miejsce, w którym już jesteś: własna notatka tego paska i folder, na którym stoi pasek ścieżki. W trybie zmiany nazwy/przenoszenia pozycja *zachowaj tę nazwę* stoi w miejscu notatki — w obu przypadkach ta sama notatka |
| **Czerwony** | Tylko w trybie zmiany nazwy/przenoszenia: nazwa jest zajęta. Wciąż można ją wybrać — wybranie jej pyta, co zrobić z plikiem stojącym na drodze; zobacz [Nazwa, która jest zajęta](#nazwa-która-jest-zajęta) |

**Foldery są pogrubione**, więc własna notatka folderu nie potrzebuje osobnego
koloru, by odróżnić się od folderu: jest fioletowa jak każda inna notatka. **Linia po
brzegu wiersza** oznacza nazwy zaczynające się od tego, co wpisałeś — niebieska tam, gdzie
zgadzają się dalej, zielona na gałęzi, którą bierze podpowiedź; zobacz
[Wpisywanie ścieżki](#wpisywanie-ścieżki).

Pole przyjmuje te same kolory dla tego, co nazywa — zobacz [Wpisywanie ścieżki](#wpisywanie-ścieżki).

## Reguły widoczności

- Pliki o nieobsługiwanych rozszerzeniach pojawiają się na listach tylko wtedy, gdy włączone jest ustawienie Obsidiana **Wykrywaj wszystkie rozszerzenia plików** — **wewnątrz skarbca**. Poza nim to ustawienie nie ma zastosowania: rządzi tym, co skarbiec indeksuje, a nic tam na zewnątrz nie znajduje się w skarbcu, więc `.txt` obok twoich notatek jest wyświetlany niezależnie od tego.
- Lista pokazuje do 1000 pozycji, dziesięć razy więcej niż własny limit Obsidiana. Gdy folder ma ich więcej, ostatni wiersz mówi, ile zostało pominiętych; wpisuj dalej, by zawęzić listę.
- Pliki i foldery zaczynające się od kropki pojawiają się tylko wtedy, gdy włączone jest ustawienie tej wtyczki **Pokaż pliki ukryte**.
- **Ochrona przed nadpisaniem działa tak samo niezależnie od widoczności** — ukryty plik nadal blokuje jego nadpisanie.

## Ściągawka

Ścieżka **ujęta w cudzysłów** jest automatycznie z niego zdejmowana. *Kopiuj jako ścieżkę* w Windows
podaje `"C:\Users\ty\notatka.md"`, cudzysłowy włącznie, i powłoka robi to samo dla każdej
ścieżki ze spacją; wklejenie takiej lub wpisanie jej działa tak samo. Tylko
cudzysłów podwójny, i tylko jako pasująca para wokół całości — nie może
wystąpić w prawdziwej nazwie, gdzie apostrof jak najbardziej może.

| Chcesz… | Zrób to |
| --- | --- |
| Otworzyć folder (jego notatkę lub odsłonić go) | Kliknij separator **za** tym folderem |
| Nadać folderowi notatkę folderu, której nie ma | **Kliknij dwukrotnie** ten sam separator (wymaga wtyczki do notatek folderów) |
| Zamienić folder na sąsiedni | Kliknij nazwę tego folderu, potem wpisz lub wybierz |
| Zmienić nazwę notatki lub przenieść ją gdzie indziej | Kliknij nazwę notatki — wraz z rozszerzeniem |
| Przeglądać zawartość folderu | Kliknij nazwę tego folderu; lista pokazuje jego rodzica, więc kliknij folder **poniżej** tego, który chcesz |
| Wpisać na nowo folder i wszystko poniżej niego | **Kliknij dwukrotnie** nazwę tego folderu, potem wpisz |
| Edytować ścieżkę od folderu w dół | Kliknij nazwę tego folderu, potem <kbd>→</kbd>, by odznaczyć |
| Przeskoczyć do pliku, wpisując jego ścieżkę | Kliknij nazwę pliku lub puste miejsce, wpisz, <kbd>Enter</kbd> |
| Zamiast tego otworzyć plik w nowej karcie | <kbd>Ctrl</kbd> podczas wybierania go, lub <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| Skopiować notatkę gdzieś zamiast ją przenosić | Ołówek, potem <kbd>Ctrl</kbd> podczas wybierania lub zatwierdzania celu |
| Utworzyć notatkę pod ścieżką, która nie istnieje | Wpisz ścieżkę — pole robi się **czerwone**, gdy nic na liście już jej nie pasuje — potem <kbd>Enter</kbd>. Wewnątrz skarbca powstaje od razu; na zewnątrz najpierw pyta |
| Sprawdzić, czy wpisana ścieżka już istnieje | Spójrz na kolor: przyjmuje kolor wiersza, który nazywa, a czerwony oznacza, że <kbd>Enter</kbd> by ją utworzył |
| Zejść o poziom niżej podczas wpisywania | Wpisz `/` |
| Wrócić o poziom wyżej podczas wpisywania | <kbd>Backspace</kbd> w pustym polu |
| Wciągnąć do pola foldery stojące przed nim | <kbd>←</kbd> na jego początku dla jednego; <kbd>Shift</kbd>+<kbd>Home</kbd>, albo <kbd>Home</kbd> przy zamkniętej liście, dla wszystkich |
| Przenieść lub zmienić nazwę otwartej notatki | Kliknij ołówek, potem przeglądaj lub wpisz jak wyżej |
| Przenieść na nazwę, która jest zajęta | Zatwierdź mimo to: okno dialogowe pozwala zamienić miejscami, nazwami lub jednym i drugim, albo nadać inną nazwę plikowi stojącemu na drodze |
| Przenieść bez zmiany nazwy | Ołówek → kliknij w docelowy folder → wybierz przypiętą aktualną nazwę pliku |
| Zmienić nazwę w miejscu | <kbd>F2</kbd> dwukrotnie (pierwsze naciśnięcie trafia do tytułu wbudowanego, drugie do nagłówka) |
| Przeskoczyć do innego skarbca, katalogu domowego lub dysku | Kliknij nazwę skarbca |
| Otworzyć plik spoza skarbca | Nazwa skarbca → wybierz lokalizację → przeglądaj → wybierz plik (tylko do odczytu, dopóki nie klikniesz *Edytuj jako tekst*) |
| Dopełnić wpisywaną nazwę | <kbd>Tab</kbd>, albo <kbd>End</kbd> dla podpowiedzianej; <kbd>→</kbd> bierze z niej jedną literę |
| Wejść do niej, gdy zostanie jedna nazwa | <kbd>Tab</kbd> ponownie |
| Cofnąć krok albo opuścić folder | <kbd>Shift</kbd>+<kbd>Tab</kbd> |
| Przejąć całą ścieżkę albo ścieżkę systemową | <kbd>Tab</kbd> poza koniec, albo kliknij czterokrotnie |
| Skopiować nazwę, ścieżkę albo ścieżkę systemową | Kliknij prawym przyciskiem dwukrotnie; puste miejsce trzykrotnie dla ścieżki systemowej |
| Sięgnąć po to, co menedżer skarbców oferuje dla tego skarbca | Kliknij prawym przyciskiem ikonę na początku wiersza |
| Skopiować identyfikator skarbca | Kliknij prawym przyciskiem ikonę na początku wiersza |
| Otworzyć inny skarbiec, który przeglądałeś | Kliknij prawym przyciskiem jego nazwę na początku wiersza |
| Zobaczyć rozszerzenie pliku w wierszu | Włącz **Pokazuj rozszerzenia plików** w ustawieniach |
| Otworzyć segment folderu w nowej karcie | <kbd>Ctrl</kbd> lub kliknięcie środkowym przyciskiem, albo przeciągnij go na pasek kart |
| Sięgnąć do paska ścieżki z klawiatury | Przypisz *Ustaw fokus na pasku ścieżki* w Skrótach klawiszowych |
| Otworzyć adres internetowy lub link `obsidian://` | Wpisz go na pasku i naciśnij <kbd>Enter</kbd> |
| Anulować cokolwiek | <kbd>Esc</kbd>, albo kliknij poza paskiem nagłówka |
| Przymierzyć pozycje przed zatwierdzeniem | Strzałki lub najechanie kursorem na liście; <kbd>↑</kbd> ponad górę oddaje z powrotem twój tekst |
| Przenieść notatkę do folderu leżącego nad nią | Przeciągnij ją na ten folder w wierszu |
| Zachować skrawek tekstu jako nową notatkę | Przeciągnij tekst na folder, wpisz nazwę, <kbd>Enter</kbd> |
| Dodać skrawek tekstu do czytanej notatki | Przeciągnij go na nazwę notatki, potwierdź |
| Zobaczyć skróconą nazwę folderu w całości | Najedź na nią kursorem albo poszerz panel |
| Dowiedzieć się, gdzie faktycznie leży skarbiec | Najedź kursorem na ikonę na początku wiersza |
| Wyprowadzić notatkę poza skarbiec | Ołówek → przeglądaj na zewnątrz → potwierdź okno dialogowe (linki się zerwą) |
| Zezwolić na zapis poza skarbcem | Kliknij **czerwoną kłódkę** w nagłówku; jej miejsce zajmie przełącznik zmiany nazwy |
| Zablokować ponownie | Klikaj przełącznik, aż kłódka wróci — jedno kliknięcie w jedną stronę, jedno w drugą |
| Usunąć plik spoza skarbca | Otwórz kłódkę, potem kliknij plik prawym przyciskiem: *Usuń* przenosi go do kosza systemowego |

## Ustawienia

| Ustawienie | Opcje | Domyślnie | Co robi |
| --- | --- | --- | --- |
| **Language** | Domyślny język Obsidiana lub jeden z 46 | Domyślny język Obsidiana | W jakim języku jest własny tekst tej wtyczki. *Domyślny język Obsidiana* podąża za językiem ustawionym w ustawieniach Wyglądu, czego chce niemal każdy. Sam wiersz — jego nazwa, opis i *Domyślny język Obsidiana* — zostaje po angielsku niezależnie od wyboru, bo to droga z powrotem z języka, którego nie potrafisz przeczytać. Greka i sanskryt są tu przetłumaczone, a nie ma ich na własnej liście Obsidiana, więc to ustawienie to jedyny sposób, by do nich dotrzeć. |
| **Alignment** | Do lewej / Wyśrodkowanie / Do prawej | Do lewej | Gdzie w wierszu nagłówka siedzi ścieżka. *Wyśrodkowanie* odpowiada klasycznemu wyglądowi Obsidiana. |
| **Delimiter** | Dowolny znak | `/` | Separator rysowany między segmentami. Sześć jednoklikowych ustawień wstępnych (`/ > ▸ › \ •`) siedzi przed polem tekstowym. |
| **Show vault name** | Wł. / Wył. | Wł. | Czy sam skarbiec jest pierwszym segmentem ścieżki. Wyłączone, ten segment staje się ikoną 🏠 zamiast zniknąć, więc ścieżka nadal zaczyna się od czegoś klikalnego. |
| **Folder name opens the dropdown** | Wł. / Wył. | Wł. | Zamienia miejscami działanie nazwy folderu i separatora za nią — zobacz [tabelę powyżej](#ścieżka). Z wtyczką [Folder notes](obsidian://show-plugin?id=folder-notes) separator otwiera notatki folderów. Nigdy nie ma zastosowania w trybie zmiany nazwy/przenoszenia. |
| **Show dot files** | Wł. / Wył. | Wył. | Czy pliki i foldery zaczynające się od kropki są wyświetlane na listach. Ochrona przed nadpisaniem obowiązuje niezależnie od tego. |
| **Show all file types** | — | — | To nie ustawienie tej wtyczki, lecz Obsidiana, wymienione tu, bo odpowiada na to samo pytanie: twój skarbiec indeksuje tylko te typy plików, które ma indeksować, a na liście może się znaleźć tylko to, co zindeksowane. Szukaj go w ustawieniach Obsidiana i włącz, by widzieć każdy plik; przycisk obok wiersza otwiera tę stronę z przewiniętym i podświetlonym ustawieniem, tak jak zrobiłoby kliknięcie go we własnej wyszukiwarce ustawień. Poza skarbcem nie ma zastosowania, bo nic tam na zewnątrz i tak nie jest indeksowane. |
| **Show file extensions** | Wł. / Wył. | Wył. | Czy nazwa pliku w wierszu niesie ze sobą rozszerzenie. Wyłączone — jest pomijane, tak jak Obsidian pomija je w tytule notatki. Włączone — wiersz nazywa plik tak, jak robi to system plików. Tak czy inaczej rozszerzenie jest drugą rzeczą poświęcaną, gdy wierszowi brakuje miejsca, zaraz po nazwie skarbca. |
| **Access external files** | Wł. / Wył. | **Wył.** | Czy nazwa skarbca otwiera listę lokalizacji. Wyłączone — nic we wtyczce nigdy nie zagląda poza ten skarbiec. |
| **Hotkeys** | przycisk | — | Otwiera *Skróty klawiszowe* Obsidiana przefiltrowane do tej wtyczki, gdzie *Ustaw fokus na pasku ścieżki* można przypisać klawisz. |

## Podmiana ikon

Lure rysuje trzy ikony: ikonę głównego katalogu skarbca (gdy **Show vault name** jest wyłączone), przełącznik zmiany nazwy/przenoszenia i kłódkę, która stoi na jego miejscu, dopóki zapis poza skarbcem jest zablokowany. Wszystkie można podmienić z poziomu motywu lub fragmentu CSS — ustaw zastępczy znak i ukryj wbudowany w jednej regule:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* Only ever shown shut: opening it hands the slot to the rename toggle. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}
```

`--lure-icon-glyph` przyjmuje wszystko, co jest poprawne w CSS-owym `content`, więc `url(...)` działa dla obrazka tak samo jak znak tekstowy czy emoji. Zostaw `--lure-icon-svg` w spokoju, żeby zachować ikonę Lucide i narysować swój znak obok niej.
