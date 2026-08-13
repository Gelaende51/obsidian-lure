<!-- Terjemahan docs/usage.md — status: commit 349b74e.
     Terjemahan mesin (Claude Opus 5), belum disemak penutur asli.
     Label pemalam datang daripada src/lang/translations.ts, manakala
     label Obsidian datang daripada teks yang dihantar oleh aplikasi
     itu sendiri, jadi ia sepadan dengan apa yang anda lihat di skrin. -->

**Baca ini dalam bahasa lain:** [English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · [Čeština](usage.cs.md) · [Dansk](usage.da.md) · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · [Bahasa Indonesia](usage.id.md) · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · **Bahasa Melayu** · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · [Norsk](usage.no.md) · [Polski](usage.pl.md) · [Português](usage.pt.md) · [Português (Brasil)](usage.pt-BR.md) · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

# Penggunaan

[← kembali ke README](README.ms.md)

## Laluan pada bar tajuk

Laluan penuh nota di dalam bilik kebal menggantikan nama fail kosong pada bar tajuk paparan — baris di bawah deretan tab, yang turut memuatkan butang undur/maju.

Dua perkara pada baris itu boleh diklik, dan **Nama folder membuka senarai** menentukan yang mana melakukan apa:

| | Nama folder | Pemisah selepasnya |
| --- | --- | --- |
| **Hidup** (lalai) | Memilih folder itu untuk disunting | Membuka folder |
| **Mati** | Membuka folder | Turun ke dalam folder itu |

"Membuka folder" bermaksud apa jua yang dilakukan klik pada segmen itu dalam Obsidian asli. Tanpa pemalam yang mendengar di situ, folder dipaparkan dalam bar sisi Peneroka fail — disorot, dan dikembangkan untuk menunjukkan kandungannya.

Dengan [Folder notes](obsidian://show-plugin?id=folder-notes) dipasang, klik yang sama sebaliknya membuka nota folder tersebut. Ia satu-satunya pemalam nota folder yang didapati menuntut laluan pada bar tajuk; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) dan [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) menguruskan nota folder tetapi tidak mendengar klik pada laluan, jadi dengan kedua-duanya pemisah memaparkan folder seperti biasa. Lihat [keserasian](../compatibility.md#verified-against).

Pemisah **digariskan hanya apabila folder sebelumnya benar-benar mempunyai nota folder**, jadi garisan itu ialah janji bahawa ada sesuatu untuk dibuka. Setiap pemisah kekal boleh diklik walau apa pun — yang tanpa garisan memaparkan dan mengembangkan foldernya dalam bar sisi, yang masih diisyaratkan oleh kursor penunjuk. Garisan itu berpindah daripada nama folder pada masa yang sama: dengan pertukaran hidup, nama membuka senarai, jadi menandakannya sebagai pautan ke nota itu akan menjadi pembohongan.

**Mod tukar nama/alih mengatasi kedua-duanya**, apa jua kata tetapannya: tiada apa pada baris itu membuka folder selagi pemindahan belum selesai, kerana membukanya akan meninggalkan pemindahan. Nama folder dipilih untuk disunting dan pemisah turun — kedua-duanya cara memilih destinasi — dan garisan hilang untuk menunjukkan bahawa pembukaan digantung.

**Akar bilik kebal** ialah satu-satunya segmen yang bukan segmen laluan. Ia tiada induk untuk menyenaraikan adik-beradiknya, jadi ia sebaliknya membuka [senarai lokasi](#meneroka-di-luar-bilik-kebal) — bilik kebal anda yang lain, folder peribadi, akar sistem fail, dan pemacu yang dilekapkan.

## Mengklik satu segmen: tukar dengan adik-beradiknya

Mengklik nama folder memilih **nama folder itu** dalam medan teks dan membuka senarai folder **satu lapisan di atasnya** — induknya. Menaip atau memilih entri menukar folder ini dengan adik-beradiknya dan membiarkan segala di bawahnya tidak tersentuh, jadi `Projects/2026/Kickoff.md` → klik `2026` → pilih `2025` memberi anda `Projects/2025/Kickoff.md`.

Mengklik **nama nota** berfungsi dengan cara sama terhadap foldernya sendiri, dan memilih nama fail **termasuk sambungannya** — menukar nama atau mengubah sasaran nota biasanya bermakna mengubah itu juga.

Mengklik folder sudah pun memilih satu segmen, jadi **satu klik lagi** meluaskan pilihan ke seluruh baris — folder itu *dan* segala di bawahnya — dan menaip kemudian menggantikan baki laluan sekali gus. Berfungsi sama dalam navigasi dan dalam mod tukar nama/alih.

Itu hanya terpakai sebagai sambungan kepada klik yang membuka medan tersebut. Sebaik anda menggunakan medan itu, ia berkelakuan seperti medan teks lain: klik meletakkan kursor, klik dua kali mengambil satu perkataan, klik tiga kali mengambil satu baris.

Walau bagaimanapun baki laluan kekal kelihatan di sekeliling medan, sebagai kepingan di hadapannya dan sebagai teks tak terpilih selepasnya, jadi laluan penuh tidak pernah hilang daripada bar tajuk. Taip untuk menggantikan pilihan, atau tekan <kbd>End</kbd> / <kbd>→</kbd> untuk mengekalkannya dan menyunting dari situ. Senarai memaparkan seluruh folder tanpa mengira apa yang telah diisi; ia hanya mula menapis apabila anda benar-benar menaip.

## Turun melalui pemisah

Mengklik pemisah (dengan **Nama folder membuka senarai** mati) turun ke folder sebelumnya: senarai memaparkan kandungan folder *itu*, dan baki laluan terbuka dalam keadaan terpilih di dalam medan. Memilih folder menambahkannya pada jejak laluan dan terus membuka senarai seterusnya, jadi anda boleh mengklik turun sebatang pokok tanpa meninggalkan baris tajuk.

## Entri senarai ialah baris pengurus fail sebenar

Setiap fail dan folder dalam senarai berkelakuan seperti barisnya dalam Peneroka fail:

- **Klik kanan** untuk menu konteks yang sama — *Nota baharu* / *Folder baharu* pada folder, *Buka dalam tab baharu* / *Tukar nama* / *Hapus* pada fail — termasuk entri yang ditambah pemalam lain ke menu fail.
- **Seret** entri ke mana-mana sahaja Obsidian menerima fail: ke dalam penyunting untuk menyisipkan pautan, ke atas folder dalam Peneroka fail untuk memindahkannya, ke atas bar tab untuk membukanya.

Kata-kata menu datang daripada terjemahan Obsidian sendiri, jadi ia sepadan dengan seluruh aplikasi dalam setiap bahasa.

## Menaip laluan

- Mengklik **ruang kosong** sebelum atau selepas kepingan membuka medan teks yang telah diisi dengan seluruh laluan dan dipilih sepenuhnya — taip menimpanya, atau sunting di tempatnya. (Mengklik nama fail itu sendiri hanya memilih nama failnya; lihat di atas.)
- Menaip semasa jejak kepingan sedang dipaparkan menukar segmen terakhir menjadi medan kecil dengan pelengkapan automatik langsung yang terhad kepada folder semasa.
- `/` mengesahkan segmen semasa dan turun ke dalamnya.
- <kbd>Backspace</kbd> dalam medan kosong melangkah kembali ke folder induk, membuka semula namanya dengan kursor di hujung.
- <kbd>Enter</kbd> mengesahkan; <kbd>Esc</kbd> atau klik di tempat lain membatalkan kembali kepada laluan sebenar fail.

Medan itu tanpa hiasan — tiada kotak, tiada sempadan — jadi ia terbaca sebagai teks laluan itu sendiri, dan ia membesar sendiri semasa anda menaip.

## Navigasi tidak pernah menyentuh fail yang terbuka

Dalam mod lalai (navigasi) nota yang sedang terbuka **tidak pernah** ditukar namanya atau dipindahkan.

- Laluan yang sepadan dengan fail sedia ada akan membukanya.
- Laluan yang belum wujud memaparkan *"Cipta fail baharu?"*. Mengesahkan akan mencipta folder induk yang tiada beserta failnya; membatalkan tidak melakukan apa-apa langsung.

## <kbd>Ctrl</kbd> — tab baharu, dan menyalin dan bukannya memindahkan

Menahan <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> pada macOS) semasa memilih fail daripada senarai, atau semasa menekan <kbd>Enter</kbd> pada satu laluan, menghantar hasilnya ke **tab baharu** dan bukannya tab ini:

| | Biasa | Dengan <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Pilih atau taip fail sedia ada | Terbuka di sini | Terbuka dalam tab baharu |
| Taip laluan yang tidak wujud | Bertanya, kemudian terbuka di sini | Bertanya, kemudian terbuka dalam tab baharu |
| Sahkan laluan dalam mod tukar nama/alih | **Memindahkan** nota ke sana | **Menyalinnya** ke sana dan membuka salinan dalam tab baharu |

Pengubah suai dibaca dengan peraturan Obsidian sendiri, jadi ia berkelakuan tepat seperti pada pautan atau baris Peneroka fail — klik tengah juga bermaksud "tab baharu", <kbd>Ctrl</kbd>+<kbd>Alt</kbd> bermaksud belahan, dan <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> tetingkap baharu.

Penyalinan enggan menimpa, tepat seperti pemindahan — termasuk ke laluan nota itu sendiri, yang tiada apa-apa munasabah untuk disalin.

## Meneroka di luar bilik kebal

**Ini mati secara lalai.** Hidupkan dahulu **Akses fail luaran** dalam tetapan — membaca dan menulis di luar bilik kebal ialah satu-satunya perkara yang dilakukan pemalam ini yang tidak dilakukan Obsidian sendiri, jadi ia dipilih untuk masuk dan bukannya keluar. Apabila mati, nama bilik kebal sekadar memaparkan bilik kebal anda dalam Peneroka fail, dan tiada apa di sini yang pernah melihat melepasinya.

Mengklik **nama bilik kebal** (atau ikon 🏠, apabila *Tunjukkan nama bilik kebal* mati) membuka senarai tempat dan bukannya kandungan:

- **Bilik kebal anda yang lain**, dibaca daripada daftar Obsidian sendiri, yang paling baharu dibuka dahulu, setiap satu di bawah ikon bilik kebal Obsidian sendiri — ikon yang digunakan aplikasi itu untuk perintah bilik kebal. Bilik kebal yang sudah terbuka mendapat rumah: itulah tempat baris ini bermula secara lalai, bukan tempat untuk dituju.
- **Folder peribadi**, di bawah nama akaun anda sendiri, ditandai dengan `~`. Lucide tiada tilde, jadi yang satu ini dilukis oleh pemalam pada grid 24×24 Lucide sendiri dengan ketebalan garis yang sama — ikon yang tiada dalam set itu dan bukannya aksara teks yang duduk di antara ikon.
- **Akar sistem fail**, berlabel `root` — tidak diterjemahkan, kerana itulah namanya pada setiap sistem — dan bukannya `/`, yang akan terbaca sebagai langkah kosong di sebelah pemisah yang mengikutinya.
- **Pemacu terlekap**, dengan satu ikon setiap jenis apabila itu murah untuk ditentukan: perkongsian rangkaian, cakera optik, cakera liut dan media boleh tanggal mendapat ikon sendiri; selebihnya mendapat pemacu umum. Pada Windows pemacu dipaparkan sebagai `C:` dengan ikon umum — nama volum dan jenis yang tepat memerlukan WMI, yang sengaja tidak dilakukan.

Memilih bilik kebal lain **tidak menukar Obsidian kepadanya.** Segala yang anda buka kekal terbuka; laluan itu sekadar mula meneroka di sana. Itulah seluruh maksud meletakkannya pada bar laluan dan bukannya menyerahkannya kepada penukar bilik kebal di bar sisi.

### Semasa anda di luar

Laluan **bermula pada lokasi yang anda pilih**, bukan pada susun atur direktori mesin — pilih `Archive` dan barisnya berbunyi `Archive / notes / …`, bukan `/home/anda/Vaults/Archive/notes/…`. Segmen hadapan membawa ikon bagi apa ia (bilik kebal, folder peribadi, pemacu), dan <kbd>Backspace</kbd> berhenti di situ dan bukannya terus naik ke seluruh sistem fail. Dengan *Tunjukkan nama bilik kebal* mati, segmen itu ialah ikon sahaja — tetapan ini tentang segmen pembuka baris itu, bilik kebal mana pun yang dinamakannya, bukan hanya bilik kebal anda sendiri.

Bar laluan **dibingkai dengan warna ralat** — cincin yang sama yang dilukis oleh mod tukar nama — selagi ia menunjuk ke luar bilik kebal anda. Ia menandakan keadaan yang berterusan, bukan satu detik: selagi ia ada, tiada satu pun pengendalian Obsidian sendiri terpakai kepada apa yang dipaparkan baris itu, dan penulisan terkunci sehingga anda berkata sebaliknya.

Selain itu penerokaan berfungsi seperti di dalam: kepingan, pemisah, menaip, pelengkapan automatik, <kbd>Backspace</kbd> untuk melangkah keluar. Peraturan keterlihatan yang sama juga terpakai, jadi sambungan yang tidak disokong masih memerlukan *Tunjuk semua jenis fail* milik Obsidian dan fail titik masih memerlukan tetapan pemalam ini.

**Klik kanan dan seret** pada entri senarai tidak berfungsi di luar sana — itu pengendali Peneroka fail sendiri, dan ia memerlukan fail yang dikenali bilik kebal.

### Menulis di luar bilik kebal

Segala yang menulis **terkunci secara lalai**. **Mangga** muncul di sebelah suis tukar nama pada bar tajuk selagi baris itu menunjuk ke luar bilik kebal anda; menekannya membuka kunci dan ia bertukar merah, sepadan dengan cincin di sekeliling baris.

Kebenaran diberikan **kepada satu lokasi, bukan kepada satu detik**: ia bertahan melalui segala yang anda lakukan semasa bekerja di satu tempat — menyelesaikan pemindahan, mengklik keluar daripada medan, membuka fail — dan berakhir apabila anda memilih bilik kebal, pemacu atau akar lain daripada senarai, apabila baris itu kembali kepada fail bilik kebal, atau apabila anda menekan mangga sekali lagi. Jadi rentetan pemindahan dalam satu folder memerlukan satu tekanan, bukan satu bagi setiap fail.

Dengan mangga terbuka, bar laluan berkelakuan di luar sana seperti di dalam:

| Gerak isyarat | Hasil |
| --- | --- |
| Taip nama yang tidak wujud, <kbd>Enter</kbd> | Soalan "ciptakannya?" yang sama seperti di dalam; folder induk yang tiada turut dicipta. Nama tanpa sambungan menjadi `.md`, tepat seperti di dalam |
| Mod tukar nama/alih, taip nama baharu | Menukar nama fail yang sedang dipaparkan baris itu. Nama tanpa sambungan mengekalkan sambungan fail itu sendiri — di luar sini satu folder memuatkan setiap jenis fail, dan penukaran nama tidak sepatutnya diam-diam mengubah `.png` menjadi `.md` |
| Mod tukar nama/alih, teroka di tempat lain, pilih **kekalkan nama ini** | Memindahkannya ke sana dengan nama yang sudah dimilikinya |
| Tahan <kbd>Ctrl</kbd> pada mana-mana | Menyalin dan bukannya memindahkan, dan membuka salinan dalam tab baharu |

Dalam keadaan terkunci, semua itu melaporkan apa yang menghalangnya dan bukannya berlaku. Tiada apa yang pernah ditimpa dalam kedua-dua keadaan: sasaran yang sudah wujud ditolak, dan penolakan itu ialah penolakan sistem fail sendiri (`COPYFILE_EXCL`, penciptaan eksklusif) dan bukannya semakan yang boleh kalah dalam perlumbaan. Pemindahan merentas sistem fail — daripada pemacu USB, daripada perkongsian rangkaian — berbalik kepada salin-kemudian-padam, dan yang asal hanya dibuang setelah salinannya mendarat.

**Satu perkara yang tidak dibuka oleh mangga: memindahkan nota *keluar* daripada bilik kebal anda.** `fileManager` tidak boleh mengikut fail merentas sempadan itu, jadi setiap pautan ke nota itu akan putus secara senyap dan Obsidian sekadar melihatnya lenyap. Menahan <kbd>Ctrl</kbd> sebaliknya menyalinnya keluar, yang tiada masalah itu, dan notis itu menyatakan demikian. Arah sebaliknya — membawa fail luar *masuk* ke bilik kebal — juga belum disambung lagi.

### Membuka fail luaran

Penyunting Obsidian hanya berfungsi pada fail di dalam bilik kebal, jadi fail luaran **tidak boleh** dibuka sebagai nota sebenar dengan pautan, pautan balik dan selebihnya — itu had aplikasi, bukan had pemalam ini. Memilih satu sebaliknya membuka **pratonton**, baca sahaja sehingga anda berkata sebaliknya:

| Jenis | Dipaparkan sebagai |
| --- | --- |
| `.md`, `.markdown` | Markdown yang dipaparkan |
| Imej, audio, video, PDF | Pemain/pemapar asli |
| Sebarang fail **teks** lain (`.json`, `.css`, `.log`, `.txt`, …) | Teks biasa apa adanya |
| Format binari tanpa pemapar (`.zip`, `.exe`, …) | Diserahkan kepada *Buka secara luaran* |

Pemapar mempunyai dua bacaan bagi sesebuah fail, dan kerana kedua-duanya saling menolak, hanya yang anda akan **tukar kepadanya** dipaparkan:

| | Apa yang dilakukannya | Lalai bagi |
| --- | --- | --- |
| **Lihat sebagai Markdown** | Memaparkan fail sebagai nota, baca sahaja | `.md`, `.markdown` |
| **Sunting sebagai teks** | Sumbernya, boleh disunting | segala yang lain |

Di luar bilik kebal, **Sunting sebagai teks** juga merupakan tekanan yang mengangkat baca sahaja — mod dan kebenarannya satu gerak isyarat dan bukannya dua butang untuk difikirkan. Ia diwarnakan merah **setiap kali menekannya akan mengangkat baca sahaja**, sama ada anda menyiapkan penyuntingan di tempatnya atau datang terus daripada paparan yang dipaparkan; di dalam bilik kebal tiada apa untuk dibuka, jadi ia kekal biasa. **Lihat sebagai Markdown** mendapat sapuan aksen nipis — rona yang sama yang diberi Obsidian kepada teks terpilih — menandakannya sebagai jalan kembali dan bukannya seruan bertindak.

Kerana butang itu menjejaki *penyuntingan* dan bukannya mod mentahnya, fail yang duduk baca sahaja dalam paparan teks masih menawarkan **Sunting sebagai teks**: itulah tekanan yang menyiapkannya. Fail yang tidak akan pernah boleh ditaip — dipangkas, atau tidak boleh dibaca — sebaliknya berbunyi **Lihat sebagai teks**, kerana hanya itu yang boleh diberikan tekanan itu.

Lalainya ialah cara yang berguna dan bukannya cara harfiah: `#` dalam skrip shell ialah komen, bukan tajuk, jadi memaparkan `.log` sebagai Markdown akan menelannya secara senyap. Mana-mana lalai boleh ditindih bagi setiap fail, dan pilihannya masuk ke dalam sejarah panel, jadi undur/maju dan ruang kerja yang dibuka semula mengekalkannya — banyak nota hidup dalam fail `.txt`, dan banyak fail `.md` lebih mudah dibaca sebagai sumber.

**Fail dalam bilik kebal anda boleh disunting serta-merta**, tanpa sebarang pembukaan kunci: *Sunting sebagai teks* ialah penyunting sebenar dan menulis kembali semasa anda menaip.

**Penyuntingan diingati merentas pertukaran.** Pergi ke *Lihat sebagai Markdown* menggantungkannya — paparan statik tiada tempat untuk ditaip, dan Live Preview memerlukan penyunting Obsidian sendiri, yang hanya wujud untuk fail di dalam bilik kebal — jadi tiada apa yang mendakwa anda sedang menyunting semasa anda di sana. Kembali ke *Sunting sebagai teks* menyambung dari tempat anda berhenti.

**Fail di luar bilik kebal dibuka baca sahaja, dan *Sunting sebagai teks* mengangkatnya.** Tekanan itulah seluruh pintunya: sehingga ia berlaku, tiada apa di luar sana yang ditulis. Selepas itu fail disimpan semasa anda menaip, tepat seperti fail dalam bilik kebal; dan baris status berubah daripada kunci kepada pensel. Pembukaan kunci itu meliputi satu fail itu dalam satu tab itu — menavigasi ke fail lain mengunci semula, dan ia sengaja tidak disimpan dalam sejarah tab, jadi ruang kerja yang dibuka semula tidak pernah kembali dengan penulisan sudah bersedia pada fail sistem yang anda tidak ingat pernah dibuka.

**Fail yang dipangkas kekal baca sahaja walau apa pun** — menyimpan apa yang di skrin akan membuang segala yang melepasi had, jadi butangnya tidak ditawarkan langsung dan bukannya ditawarkan lalu ditolak. Hal yang sama berlaku untuk fail yang tidak dapat dibaca: tiada apa untuk ditulis kembali selain anak tetingkap kosong.

Jika penulisan gagal — lekapan baca sahaja, fail yang bukan milik anda — sebab sistem itu sendiri dipaparkan dalam satu notis.

Fail yang sangat besar dipaparkan terpangkas, dan baris status menyatakannya dan bukannya membiarkan anda mengetahuinya sendiri — di samping keadaan yang lain dan bukannya mengekori butang, kerana itu fakta tentang fail seperti yang lain. Hadnya diukur terhadap pemapar hidup dan bukannya diteka — menyusun satu megabait teks dalam satu anak tetingkap membunuh proses pemaparan Obsidian serta-merta, dan Markdown berkos beberapa kali ganda setiap bait berbanding teks biasa, jadi kedua-duanya mempunyai had berasingan dan satu baris gergasi dipendekkan walaupun failnya secara keseluruhan kecil.

**Baris status ialah label, dan penjelasannya ialah tip alat.** Setiap baris menyatakan apa yang benar dalam sesedikit perkataan yang perlu — *Di luar bilik kebal*, *Tiada penyunting untuk jenis fail ini*, *Dipangkas — fail terlalu besar* — kerana butang di sebelahnya sudah menyatakan keadaan fail itu. Menuding pada salah satunya memberi ayatnya: mengapa Obsidian tidak boleh membukanya sebagai nota, apa yang selainnya akan berlaku kepada jenis fail ini, apa yang pemangkasan itu merugikan anda.

Ini juga terpakai kepada fail **di dalam** bilik kebal anda. Obsidian menyerahkan sebarang sambungan yang tiada paparan untuknya terus kepada aplikasi lalai desktop — jadi `.txt` atau `.json` dalam bilik kebal anda akan meninggalkan Obsidian sepenuhnya. Fail-fail itu kini dibuka dalam pemapar yang sama, dengan cincin jingga, kerana "buka ia dalam Obsidian" itulah yang anda minta — dan kerana ia fail bilik kebal, ia boleh disunting di sana tanpa sebarang pembukaan kunci. Fail binari tanpa pemapar mengekalkan kelakuan Obsidian; tiada apa untuk dipaparkan.

Pratonton dibuka **dalam tab tempat anda berada**, jadi undur/maju mengembalikan anda ke nota tempat anda datang; tahan <kbd>Ctrl</kbd> untuk tab baharu seperti di mana-mana. Bar tajuk terus memaparkan laluan fail luaran itu selagi ia terbuka, jadi anda boleh terus meneroka dari situ.

Sebaris tenang di atas kandungan menawarkan jalan keluarnya:

- **Buka dalam *(bilik kebal)*** — dipaparkan apabila fail itu milik salah satu bilik kebal anda yang lain. Menyerahkannya kepada pengendali URI Obsidian sendiri, yang membuka tetingkap bilik kebal itu dengan notanya di dalam, sebagai nota sebenar yang boleh disunting. Tetingkap ini dibiarkan tepat seperti asalnya; tiada apa bertukar di bawah anda.
- **Lihat sebagai Markdown** / **Sunting sebagai teks** — dua bacaan itu; yang kedua turut mengangkat baca sahaja di luar bilik kebal.
- **Buka secara luaran** — menyerahkan fail kepada aplikasi lalai desktop anda, termasuk format binari yang tidak boleh dipaparkan pemapar ini.

Tiada apa di luar bilik kebal anda ditulis melainkan anda menekan *Sunting sebagai teks* dahulu. Lihat bahagian [Di luar bilik kebal](README.ms.md#di-luar-bilik-kebal) dalam README untuk pendedahan penuh.

## Dua warna amaran

| | Bila | Apa maksudnya |
| --- | --- | --- |
| Cincin **merah** pada bar laluan | Baris menunjuk ke luar bilik kebal anda | Obsidian tidak boleh membuka apa yang ada di sana sebagai nota, dan tiada apa di luar sana ditulis sehingga anda membuka mangga. |
| Cincin **jingga** pada bar laluan, entri jingga dalam senarai | Fail itu jenis teks yang tiada paparan untuknya dalam Obsidian | Berhati-hati. Obsidian akan menyerahkannya kepada aplikasi lalai desktop anda; pemalam ini sebaliknya memaparkannya. |

**Kedua-duanya bebas, dan kedua-duanya boleh berlaku serentak** — sebuah `.json` luaran berada di luar bilik kebal anda *dan* berjenis yang tiada penyunting untuknya dalam Obsidian. Dalam pemapar ia muncul sebagai baris berasingan, masing-masing menyatakan faktanya sendiri sahaja. Pada bar laluan, merah menang di tempat kedua-duanya terpakai, kerana dua cincin hanya akan menjadi gangguan.

Peringkat jingga sengaja dibuat sempit. Jenis berdaftar (Markdown, canvas, imej, PDF, audio, video) dikendalikan dengan betul dan tidak mendapat apa-apa. Fail binari juga tidak mendapat apa-apa — anda tidak akan tersilap menyunting sebuah `.zip` menjadi kacau-bilau. Yang tinggal ialah tepat bahayanya: sebuah `.json`, `.css` atau `.log` yang telah dijadikan kelihatan oleh **Tunjuk semua jenis fail**.

Merah menang di tempat kedua-duanya akan terpakai; dua cincin serentak hanya akan menjadi gangguan.

## Mod alih/tukar nama

Butang pensel di hujung kanan bar tajuk — di sebelah butang mod paparan, sama saiz dengan butang asli — menogol mod alih/tukar nama. Baris tajuk kemudian dibingkai dengan warna aksen, tepat seperti menukar nama dalam Peneroka fail. Klik dan kekunci yang sama kini mengesahkan pemindahan atau penukaran nama melalui `fileManager.renameFile` milik Obsidian, jadi semua pautan ke nota itu turut mengikut.

Semasa menukar nama:

- Nama fail semasa disematkan dalam senarai setiap folder, jadi memindahkan nota tanpa menukar namanya hanyalah satu klik.
- Nama yang sudah diambil dalam folder sasaran dikelabukan tetapi masih boleh dipilih.
- Input disahkan secara langsung terhadap peraturan penukaran nama Obsidian sendiri — set aksara yang sama, mesej yang sama, tip alat merah yang sama seperti ketika menukar nama dalam pokok fail — jadi nama yang haram atau bercanggah ditandakan semasa anda menaip dan tidak boleh disahkan.
- Mengklik di luar bar tajuk, atau bar tajuk hilang fokus, menamatkan mod tukar nama.

## Satu kekunci untuk kedua-dua penukaran nama

Perintah tukar nama (<kbd>F2</kbd> secara lalai, atau apa jua yang anda tetapkan semula) **berselang-seli** antara penukaran tajuk sebaris Obsidian dan bar laluan pada bar tajuk pemalam ini dengan laluan penuh terpilih. Jika anda telah mematikan tajuk sebaris Obsidian, bar laluan menjadi satu-satunya sasaran, jadi kekunci itu tidak pernah tidak melakukan apa-apa.

Ini berfungsi dengan membalut perintah `workspace:edit-file-title` dan bukannya merampas kekunci itu, jadi menetapkan semula pintasan dan menjalankan perintah dari palet kedua-duanya berfungsi tanpa berubah.

## Bagaimana entri senarai diwarnakan

| Warna | Bermaksud |
| --- | --- |
| **Ungu** | Sebuah nota (`.md`, `.markdown`) — apa yang akan dibuka Obsidian sebagai nota, dipilih daripada folder berkandungan campuran |
| **Jingga** | Jenis teks yang tiada paparan untuknya dalam Obsidian; lihat [warna amaran](#dua-warna-amaran) |
| **Malap** | Di luar bilik kebal anda, jadi pengendalian bilik kebal sendiri tidak terpakai |
| **Biru** | Nota yang anda buka. Semasa menyemak imbas ia ialah entrinya sendiri; dalam mod tukar nama/alih, entri *kekalkan nama ini* menggantikannya — nota yang sama dalam kedua-duanya |
| **Kelabu** | Mod tukar nama/alih sahaja: nama itu sudah diambil. Masih boleh dipilih — memilihnya mengisi medan, tempat pengesahan menandakan percanggahan itu |

## Peraturan keterlihatan

- Fail dengan sambungan yang tidak disokong muncul dalam senarai hanya jika tetapan **Tunjuk semua jenis fail** milik Obsidian dihidupkan.
- Senarai memaparkan paling banyak 100 entri — had Obsidian sendiri. Apabila folder mempunyai lebih, baris terakhir menyatakan berapa banyak yang ditinggalkan; teruslah menaip untuk menyempitkan senarai.
- Fail dan folder titik muncul hanya jika tetapan **Tunjukkan fail tersembunyi** milik pemalam ini dihidupkan.
- **Perlindungan tindih berfungsi sama tanpa mengira keterlihatan** — fail tersembunyi masih menghalang anda daripada menimpanya.

## Helaian ringkas

| Anda mahu… | Lakukan ini |
| --- | --- |
| Membuka folder (notanya, atau memaparkannya) | Klik pemisah **selepas** folder itu |
| Menukar folder dengan adik-beradiknya | Klik nama folder itu, kemudian taip atau pilih |
| Menukar nama atau mengubah sasaran nota | Klik nama nota — termasuk sambungannya |
| Meneroka kandungan sesebuah folder | Klik nama folder itu; senarai memaparkan induknya, jadi klik folder **di bawah** yang anda mahukan |
| Menaip semula folder dan segala di bawahnya | **Klik dua kali** nama folder itu, kemudian taip |
| Menyunting laluan dari sesebuah folder ke bawah | Klik nama folder itu, kemudian <kbd>End</kbd> atau <kbd>→</kbd> untuk membatalkan pilihan |
| Melompat ke fail dengan menaip laluannya | Klik nama fail atau ruang kosong, taip, <kbd>Enter</kbd> |
| Membuka fail dalam tab baharu | <kbd>Ctrl</kbd> semasa memilihnya, atau <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| Menyalin nota ke suatu tempat dan bukannya memindahkannya | Pensel, kemudian <kbd>Ctrl</kbd> semasa memilih atau mengesahkan sasaran |
| Mencipta nota pada laluan yang tidak wujud | Taip laluannya, <kbd>Enter</kbd>, sahkan pertanyaannya |
| Turun satu tingkat semasa menaip | Taip `/` |
| Naik satu tingkat semasa menaip | <kbd>Backspace</kbd> dalam medan kosong |
| Memindahkan atau menukar nama nota yang terbuka | Klik pensel, kemudian teroka atau taip seperti di atas |
| Memindahkan tanpa menukar nama | Pensel → klik masuk ke folder sasaran → pilih nama fail semasa yang disematkan |
| Menukar nama di tempatnya | <kbd>F2</kbd> dua kali (tekanan pertama ke tajuk sebaris, kedua ke bar tajuk) |
| Melompat ke bilik kebal lain, folder peribadi atau pemacu | Klik nama bilik kebal |
| Membuka fail dari luar bilik kebal | Nama bilik kebal → pilih lokasi → teroka → pilih fail (baca sahaja sehingga *Sunting sebagai teks*) |
| Membatalkan apa-apa sahaja | <kbd>Esc</kbd>, atau klik di luar bar tajuk |

## Tetapan

| Tetapan | Pilihan | Lalai | Fungsinya |
| --- | --- | --- | --- |
| **Penjajaran** | Kiri / Tengah / Kanan | Kiri | Di mana laluan berada dalam baris tajuk. *Tengah* sepadan dengan rupa klasik Obsidian. |
| **Pemisah** | Sebarang aksara | `/` | Pemisah yang dilukis antara segmen. Enam praset satu klik (`/ > ▸ › \ •`) berada di hadapan medan teks. |
| **Tunjukkan nama bilik kebal** | Hidup / Mati | Hidup | Sama ada bilik kebal itu sendiri menjadi segmen laluan pertama. Apabila dimatikan, segmen itu menjadi ikon 🏠 dan bukannya hilang, jadi laluan masih bermula pada sesuatu yang boleh diklik. |
| **Nama folder membuka senarai** | Hidup / Mati | Hidup | Menukar apa yang dilakukan nama folder dan pemisah selepasnya — lihat [jadual di atas](#laluan-pada-bar-tajuk). Dengan [Folder notes](obsidian://show-plugin?id=folder-notes) pemisah membuka nota folder. Tidak pernah terpakai dalam mod tukar nama/alih. |
| **Tunjukkan fail tersembunyi** | Hidup / Mati | Mati | Sama ada fail dan folder titik disenaraikan dalam senarai. Perlindungan tindih terpakai walau apa pun. |
| **Akses fail luaran** | Hidup / Mati | **Mati** | Sama ada nama bilik kebal membuka senarai lokasi. Apabila mati, tiada apa dalam pemalam ini yang pernah melihat melepasi bilik kebal ini. |

## Menggantikan ikonnya

Lure melukis tiga ikon: ikon akar bilik kebal (apabila **Tunjukkan nama bilik kebal** mati), suis tukar nama/alih, dan mangga yang mengawal penulisan di luar bilik kebal. Semuanya boleh ditukar daripada tema atau cebisan CSS — tetapkan glif penggantinya dan sembunyikan yang disertakan dalam satu peraturan:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* Mangga mempunyai dua keadaan; `.is-active` ialah yang terbuka. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}

.lure-unlock-btn.is-active {
	--lure-icon-glyph: "🔓";
}
```

`--lure-icon-glyph` menerima apa sahaja yang sah dalam `content` CSS, jadi `url(...)` berfungsi untuk imej sama seperti untuk glif teks atau emoji. Biarkan `--lure-icon-svg` sahaja untuk mengekalkan ikon Lucide dan melukis glif anda di sebelahnya.
