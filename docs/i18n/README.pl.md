<!-- Tłumaczenie README.md — stan: commit 2cbb237.
     Tłumaczenie maszynowe (Claude Opus 5), nieskorygowane przez native
     speakerów. Poprawki mile widziane; wersją rozstrzygającą jest
     angielskie README. -->

[English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · **Polski** · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

Wtyczka do [Obsidiana](https://obsidian.md), która zamienia nazwę pliku na pasku nagłówka notatki w klikalną, edytowalną ścieżkę przez cały skarbiec — jak pasek adresu w menedżerze plików [Dolphin](https://apps.kde.org/dolphin/).

![Kliknięcie separatora za folderem: wskaźnik spoczywa na nim, a Eksplorator plików pokazał i rozwinął ten folder](../images/breadcrumb.png)

Obsidian 1.8.7+ · tylko komputer · AGPL-3.0

## Ujawnienie użycia SI

- **Agent** — **Claude Opus 5** i **Claude Sonnet 5** (Anthropic, przez Claude Code): napisał TypeScript, CSS, wszystkie 45 zestawów tłumaczeń i dokumentację. Tłumaczenia powstały maszynowo i nie były sprawdzane przez native speakerów.
- **Zużycie** — 3 sierpnia – 19 września 2026, 20 sesji, \~16 460 odpowiedzi: \~19,9 mln wygenerowanych tokenów, \~87,0 mln wysłanych, \~5451,0 mln odczytów z pamięci podręcznej (\~5558,0 mln łącznie).
- **Źródło** — model nauczył się z otwartego kodu, dokumentacji i tekstów społeczności opublikowanych przez innych. Większość zasługi należy do nich.
- **Autor** — Vault51: określił każdą funkcję, przetestował każdą wersję w prawdziwym skarbcu, pokierował poprawkami, przejrzał wszystkie wyniki.

## Funkcje

- **Kliknięcie folderu** otwiera listę z zawartością folderu *nadrzędnego* — zamień jeden folder na sąsiedni, nie ruszając reszty ścieżki. Nazwa notatki działa tak samo, zaznaczając nazwę bez rozszerzenia.
- **Kliknięcie separatora** za folderem pokazuje go i rozwija w Eksploratorze plików. Jedno ustawienie zamienia obie role.
- **Prawy przycisk myszy lub przeciągnięcie dowolnej pozycji** — własne menu kontekstowe Eksploratora plików, pozycja po pozycji, i jego zachowanie przy przeciąganiu. Ścieżki poza skarbcem dostają zbudowane dla nich równoważne menu, aż po *Usuń* przez kosz systemowy.
- **Kliknięcie nazwy pliku lub pustego miejsca** pozwala wpisać ścieżkę, z autouzupełnianiem. `/` schodzi w dół, <kbd>Backspace</kbd> wychodzi poziom wyżej, <kbd>Enter</kbd> zatwierdza — a ścieżka, której jeszcze nie ma, zostaje po prostu utworzona, z powiadomieniem mówiącym, gdzie trafiła.
- **Lista otwiera się na pozycji, w której stoisz**, a przechodzenie po niej strzałkami lub wskaźnikiem wypełnia pole tym, co wskazujesz. Wyjście za którykolwiek z końców listy oddaje to, co wpisałeś, a zabranie z niej wskaźnika zwraca podświetlenie tam, gdzie byłeś.
- **Przycisk z ołówkiem na folderze** przełącza te same interakcje na przenoszenie/zmianę nazwy, ze sprawdzeniami takimi, jakie robi sam Obsidian.
- **Przytrzymaj <kbd>Ctrl</kbd>**, aby otworzyć w nowej karcie — albo, w trybie przenoszenia/zmiany nazwy, aby skopiować tam notatkę zamiast ją przenosić. Nazwa notatki i segmenty folderów przyjmują te same modyfikatory i to samo przeciąganie co ich wiersze w Eksploratorze plików.
- **Nazwy uzupełniają się w trakcie pisania** — tam, gdzie nazwy w folderze się zgadzają, zgodność pojawia się za kursorem, zaznaczona; pisanie pochłania ją litera po literze, <kbd>Tab</kbd> lub <kbd>→</kbd> bierze ją w całości, <kbd>Backspace</kbd> ją oddaje. Lista nadal filtruje według tego, co wpisałeś, a nie według tego, co jej podpowiedziano.
- **<kbd>Tab</kbd> uzupełnia jak powłoka**: przedłuża wpisane tak daleko, jak zgadzają się nazwy w tym folderze, a gdy się nie zgadzają, idzie w stronę jednej z nich krok po kroku i wchodzi do folderu dopiero wtedy, gdy zostanie jedna nazwa. Za końcem ścieżki poszerza natomiast zaznaczenie: nazwa, nazwa z rozszerzeniem, ścieżka od skarbca, ścieżka od katalogu głównego systemu. <kbd>Shift</kbd>+<kbd>Tab</kbd> idzie tą samą drogą wstecz — zaznaczając to, co oddaje, zamiast to usuwać — a za jej początkiem wspina się dalej w górę ścieżki, po czym zawraca do ścieżki systemowej. W którąkolwiek stronę, pełne okrążenie wraca do ścieżki, którą zbudowałeś.
- **Kliknij prawym, aby skopiować** — dwa razy nazwę, trzy razy wszystko na prawo od niej, a na pustym miejscu całą ścieżkę albo ścieżkę systemową.
- **Przeciągnij notatkę na folder na pasku**, aby ją tam przenieść, razem z odnośnikami — cel jest już na ekranie, więc wystarczy jedno przeciągnięcie zamiast wędrówki po drzewie plików. Nazwa skarbca też ją przyjmie, do katalogu głównego. Całe zaznaczenie przenosi się jako jedno, a folder, który nie może przyjąć tego, co mu podano, nie pokazuje nic, zamiast zawieść po fakcie.
- **Upuść tekst na pasek, aby go zapisać** — na folder lub nazwę skarbca, aby nazwać w nim nową notatkę, na nazwę samej notatki, aby dodać go na końcu tego, co czytasz. Plik z pulpitu działa tak samo, a pasek obrysowuje się na niebiesko tam, gdzie upuszczone wyląduje.
- **Pole przybiera kolor tego, co nazywa** — ten sam, który jego wiersz ma na liście, szary dla notatki folderu — i **robi się czerwone**, gdy nic mu już nie odpowiada, więc jeszcze przed naciśnięciem <kbd>Enter</kbd> widzisz, czy otworzy notatkę, czy ją utworzy.
- **Pliki HTML pokazują się jako strony**, w ramce z odebranymi wszystkimi uprawnieniami — bez skryptów, bez sieci, bez własnego źródła — z wciągniętymi arkuszami stylów i obrazami leżącymi obok pliku, żeby zapisana strona nadal wyglądała jak ona sama. Do źródła dzieli cię jedno naciśnięcie.
- **Wpisz adres URL** — `https://`, `obsidian://` albo ścieżkę `file://` lub zakodowaną procentowo — a zostanie otwarty zamiast potraktowany jak nazwa notatki. Adresy internetowe trafiają do karty własnej funkcji Obsidiana „Przeglądarka internetowa”, jeśli masz ją włączoną.
- **Długie ścieżki skracają się tam, gdzie litery są zbędne** — nigdy poza to, co odróżnia folder od sąsiedniego, i płynnie, a nie litera po literze — a przewijają się dopiero, gdy nie ma już czego ściskać. Wskaż skróconą nazwę, aby zobaczyć ją w całości.
- **<kbd>F2</kbd>** przełącza między tytułem w treści a paskiem ścieżki, otwierając się na nazwie bez rozszerzenia i rozszerzając zaznaczenie przy kolejnych naciśnięciach aż do pełnych ścieżek. Przechodzi czysto przez okno zmiany nazwy Obsidiana, gdy tytuł jest przewinięty poza widok. Polecenie *Ustaw fokus na pasku ścieżki* przechodzi te same stopnie bez zmiany nazwy; wiersz *Skróty klawiszowe* w ustawieniach zaprowadzi cię tam, gdzie można je przypisać.
- **Kliknięcie nazwy skarbca** pozwala przeglądać inne skarbce, katalog domowy, katalog główny systemu plików i zamontowane napędy bez zmiany skarbca. Tylko do odczytu, dopóki nie otworzysz czerwonej kłódki, która zajmuje tam miejsce przełącznika zmiany nazwy, i przez cały czas obramowane kolorem błędu. Domyślnie wyłączone — zobacz [poza skarbcem](#poza-skarbcem).
- **Katalog główny skarbca pokazuje strony, jakie może otworzyć karta** — `:graph`, `:search` i wszystkie widoki, jakie rejestrują twoje wtyczki. Wybierz jedną albo ją wpisz: dwukropek nie zaczyna żadnej nazwy pliku, więc etykiety służą też za adres. Z zainstalowaną wtyczką strony startowej separator nazwy skarbca otwiera tę stronę przy pierwszym kliknięciu i chowa drzewo plików przy kolejnym.
- **Wiersz na kartach bez pliku** — pusta karta pokazuje `skarbiec / :blank`, graf `skarbiec / :graph`, a pole obok jest paskiem adresu: wpisz ścieżkę i <kbd>Enter</kbd> otwiera ją na tej karcie albo ją tworzy. Karty w panelu bocznym zachowują własny tytuł Obsidiana.
- **Dwa poziomy ostrzeżenia** — czerwony poza skarbcem, pomarańczowy dla plików tekstowych, dla których Obsidian nie ma edytora. Zobacz [dwa kolory ostrzeżeń](usage.pl.md#dwa-kolory-ostrzeżeń).
- **Ikony podatne na motywy**, wymienne z poziomu fragmentu CSS — i **46 języków**: wszystkie, które dostarcza Obsidian, plus greka i sanskryt, dla których nie ma on ustawienia. Wybierz jeden dla samej wtyczki albo podążaj za językiem Obsidiana.
- **Ustawienia:** język, wyrównanie, gotowe separatory, które kliknięcie otwiera listę, nazwa skarbca, pliki ukryte, rozszerzenia plików.

![Ta sama lista w trybie przenoszenia/zmiany nazwy: bieżąca nazwa pliku przypięta na górze, poniżej foldery sąsiednie, a istniejące notatki wyszarzone](../images/dropdown.png)

*W trybie przenoszenia/zmiany nazwy ta sama lista oferuje co innego: na górze przypięta bieżąca nazwa notatki, aby przenieść ją bez zmiany nazwy; poniżej foldery, do których można ją przenieść; a nazwy już zajęte wyszarzone, żeby nic nie zostało przypadkiem nadpisane.*

→ [Pełny przewodnik](usage.pl.md)

## Poza skarbcem

Zasady Obsidiana dla twórców wymagają, by wtyczka wyjaśniła każdy dostęp do plików poza skarbcem, więc bez owijania w bawełnę:

**Czy w ogóle cokolwiek z tego robi.** Tylko jeśli włączysz **Dostęp do plików zewnętrznych**, który jest **domyślnie wyłączony**. Przy wyłączonej opcji nie ma z wtyczki żadnej drogi do ścieżki zewnętrznej, a nic z opisanego niżej kodu nigdy się nie wykonuje.

**Co czyta.** Tylko wtedy, gdy o to poprosisz. Kliknięcie nazwy skarbca wypisuje twoje pozostałe skarbce — odczytane z własnego pliku `obsidian.json` Obsidiana — a do tego katalog domowy, katalog główny systemu plików i zamontowane napędy (`/proc/mounts` na Linuksie, `/Volumes` na macOS, litery dysków na Windowsie). Przeglądanie stamtąd wypisuje zawartość katalogów, a otwarcie pliku czyta ten jeden plik.

**Co zapisuje.** Nic, dopóki nie naciśniesz przycisku, który to mówi. Takie przyciski są dwa i każdy obejmuje wyłącznie własny zakres:

- Przycisk **Edytuj jako tekst** w podglądzie odblokowuje plik, który masz przed sobą — ten jeden plik w tej jednej karcie. Od tej chwili twoje zmiany są w nim zapisywane w miarę pisania.
- **Czerwona kłódka** w nagłówku, która zajmuje miejsce przełącznika zmiany nazwy, dopóki pasek ścieżki wskazuje poza twój skarbiec, odblokowuje tworzenie, zmianę nazwy, przenoszenie i usuwanie w ścieżkach zewnętrznych — a po otwarciu oddaje to miejsce przełącznikowi. Zamyka się z powrotem, gdy wrócisz do środka, a także przy naciśnięciu kończącym tryb zmiany nazwy, więc zgoda nigdy nie przeżywa folderu, dla którego jej udzielono.

Żadne z odblokowań nie jest zapisywane w obszarze roboczym ani w ustawieniach, więc zapis nigdy nie jest odbezpieczony na pliku, o którego otwarciu nie pamiętasz. W żadnym z tych stanów nic nie jest nadpisywane — istniejący cel jest odrzucany, przy użyciu wyłącznego tworzenia oferowanego przez sam system plików, a nie sprawdzenia, które mogłoby przegrać wyścig.

Przeniesienie notatki *poza* skarbiec to jedyny zapis, który kosztuje coś, czego nic nie odda: Obsidian aktualizuje odnośniki tylko wewnątrz skarbca, więc każdy odnośnik wskazujący na tę notatkę przestanie działać. Jest oferowane za oknem, które to mówi i liczy notatki, których dotknie, a odbywa się jako skopiowanie, a potem usunięcie przez własny kosz Obsidiana, więc daje się odzyskać tak samo jak usunięta notatka. Przytrzymanie <kbd>Ctrl</kbd> kopiuje ją tam zamiast tego.

**Po co.** Notatki, których szukasz, często leżą w innym skarbcu, w folderze synchronizacji albo na pendrivie, a własna odpowiedź Obsidiana — zmień skarbiec — zamyka wszystko, co miałeś otwarte. To pozwala pójść i zajrzeć bez wychodzenia, a przy okazji poprawić literówkę.

**Ograniczenie.** Edytor Obsidiana jest przywiązany do plików wewnątrz skarbca, więc pliku zewnętrznego **nie da się** otworzyć jako prawdziwej notatki, z odnośnikami, odnośnikami zwrotnymi i całą resztą; nie potrafi tego żadna wtyczka. Lure pokazuje go zamiast tego we własnym podglądzie (Markdown, obrazy, dźwięk, wideo, PDF), a dla wszystkiego innego oferuje *Otwórz zewnętrznie*. Pasek ścieżki pozostaje obramowany kolorem błędu, kiedy tylko wskazuje poza twój skarbiec, a trop zaczyna się w miejscu, które wybrałeś — nazwie skarbca, katalogu domowym, napędzie — a nie w układzie katalogów maszyny.

## Instalacja

**W Obsidianie:** otwórz **Ustawienia → Wtyczki społeczności → Przeglądaj**, wyszukaj *Lure*, a następnie kliknij *Instaluj* i *Włącz* — albo naciśnij *Add to Obsidian* na [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure).

**Ręcznie:** pobierz `main.js`, `manifest.json` i `styles.css` z [najnowszego wydania](https://github.com/Gelaende51/obsidian-lure/releases) do `<vault>/.obsidian/plugins/lure/`, a potem włącz wtyczkę w **Ustawienia → Wtyczki społeczności**.

**BRAT:** dodaj `Gelaende51/obsidian-lure` jako wtyczkę beta.

**Ze źródeł:** `npm install && npm run build` — zobacz [rozwój](../development.md).

## Zgodność

Żadna wtyczka nie jest wymagana. Wbudowany **Eksplorator plików**, jeśli jest włączony, jest tym, co pokazuje foldery na pasku bocznym; bez niego te kliknięcia nic nie robią.

Sprawdzone z wtyczkami społeczności, które dzielą nagłówek notatki albo odpowiadają na kliknięcie folderu — w obu kolejnościach ładowania, każda włączona i wyłączona:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — separator otwiera notatkę folderu zamiast go pokazywać, dzięki czemu każdy segment ścieżki staje się miejscem, do którego można pójść, choćby najgłębiej: notatka jest ustalana według własnej konwencji tamtej wtyczki, zamiast zostawiać jej odpowiedź. Jest też jedyną, która taką konwencję ogłasza; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) i [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) nie ogłaszają żadnej i nigdy nie zajmują ścieżki w nagłówku, więc przy nich separator pokazuje folder jak zwykle.
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer) i [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — obie rysują w tym samym elemencie nagłówka; Lure zachowuje swój wiersz niezależnie od kolejności ładowania, a wyłączenie którejkolwiek zostawia drugą nienaruszoną.
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header), [Running Head](obsidian://show-plugin?id=running-head), [Crumbs](obsidian://show-plugin?id=crumbs-obsidian), [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — mają własny pasek i współistnieją bez problemu.

Tylko komputer — model interakcji potrzebuje najeżdżania kursorem, precyzyjnych kliknięć i klawiatury. Pełne wyniki, to, co pozostaje do sprawdzenia, i porównanie z Quick Explorer oraz Breadcrumbs znajdują się w [zgodności](../compatibility.md).

## Współtworzenie

- Zgłoszenia i pull requesty mile widziane — zwłaszcza **poprawki tłumaczeń**, bo wszystkie 45 języków przetłumaczono maszynowo i nie sprawdzali ich native speakerzy. Konfigurację i zasady opisuje [rozwój](../development.md).
- **Zgłaszanie błędów:** https://github.com/Gelaende51/obsidian-lure/issues
- **Darowizny:** [Ko-fi](https://ko-fi.com/vault51). Wtyczka i tak jest darmowa i na licencji AGPL; napiwki cieszą, ale nigdy nie są wymagane. Zamiarem jest kompensacja śladu węglowego — zamiarem, nie zobowiązaniem: nic nie zostanie skompensowane, dopóki suma nie będzie warta zachodu, a ten wiersz powie o tym, gdy naprawdę coś zostanie skompensowane.

## Podziękowania

- **Vault51** — autor: projekt, wymagania i testy ręczne przez cały czas.
- **Claude Opus 5** i **Claude Sonnet 5** (Anthropic, przez Claude Code) — implementacja, tłumaczenia i dokumentacja, pod kierunkiem autora. Zobacz [ujawnienie użycia SI](#ujawnienie-użycia-si).
- **[Obsidian](https://obsidian.md)** — aplikacja, którą to rozszerza, i źródło każdego komponentu używanego przez wtyczkę: jej API wtyczek, zestaw ikon Lucide stojący za `setIcon`, dołączona instancja i18next, z której czytane są etykiety menu kontekstowego, oraz jej własne klasy i zmienne CSS. Nic obcego nie jest dołączane; wtyczka **nie ma zależności w czasie działania**.

> **Zespół Obsidiana nie brał w tym projekcie żadnego udziału** — nie napisał go, nie sprawdził, nie poparł ani nie wspiera. Obsidian jest znakiem towarowym Dynalist Inc.; to niezależna, niepowiązana wtyczka.

Współtwórcy będą wymieniani tutaj w miarę napływu wkładu.

## Odnośniki


- **Dokumentacja:** [docs/](../)
- **Lista zmian:** [CHANGELOG.md](CHANGELOG.pl.md)
- **Strona wtyczki:** https://community.obsidian.md/plugins/lure
- **Obecność w sieci / źródła:** https://github.com/Gelaende51/obsidian-lure
- **Darowizny:** [Ko-fi](https://ko-fi.com/vault51) — zobacz [współtworzenie](#współtworzenie).
- **Licencja:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. Forki i redystrybuowane wydania muszą udostępniać swoje źródła na tej samej licencji.
