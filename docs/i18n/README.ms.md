<!-- Terjemahan README.md — status: commit 2cbb237.
     Terjemahan mesin (Claude Opus 5), belum disemak penutur jati.
     Pembetulan dialu-alukan; README bahasa Inggeris ialah versi rujukan. -->

[English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · **Bahasa Melayu** · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

Plugin [Obsidian](https://obsidian.md) yang menukar nama fail pada bar tajuk sesuatu nota menjadi laluan penuh merentasi bilik kebal yang boleh diklik dan disunting — seperti bar alamat dalam pengurus fail [Dolphin](https://apps.kde.org/dolphin/).

![Klik pada pemisah selepas sebuah folder: penuding berada di atasnya, dan Peneroka fail telah menunjukkan serta mengembangkan folder itu](../images/breadcrumb.png)

Obsidian 1.8.7+ · komputer meja sahaja · AGPL-3.0

## Pendedahan AI

- **Ejen** — **Claude Opus 5** dan **Claude Sonnet 5** (Anthropic, melalui Claude Code): menulis TypeScript, CSS, kesemua 45 set terjemahan dan dokumentasi. Terjemahan dihasilkan mesin dan belum disemak penutur jati.
- **Penggunaan** — 3 Ogos – 19 September 2026, 20 sesi, \~16,460 balasan: \~19.9 juta token dijana, \~87.0 juta dihantar, \~5451.0 juta bacaan semula daripada cache (\~5558.0 juta kesemuanya).
- **Hulu** — model belajar daripada kod sumber terbuka, dokumentasi dan tulisan komuniti yang diterbitkan orang lain. Sebahagian besar kreditnya milik mereka.
- **Penulis** — Vault51: menetapkan setiap ciri, mencuba setiap versi dalam bilik kebal sebenar, mengarahkan pembetulan, menyemak semua hasilnya.

## Ciri-ciri

- **Klik sebuah folder** untuk senarai kandungan folder *induknya* — tukar satu folder dengan jirannya tanpa menyentuh baki laluan. Nama nota berfungsi sama, dengan memilih namanya tanpa sambungan.
- **Klik pemisah** selepas sebuah folder untuk menunjukkan dan mengembangkannya dalam Peneroka fail. Satu tetapan menukar kedua-dua peranan itu.
- **Klik kanan atau seret mana-mana entri** — menu konteks Peneroka fail itu sendiri, entri demi entri, berserta kelakuan seretnya. Laluan di luar bilik kebal mendapat menu setara yang dibina khas untuknya, hinggalah *Hapus* melalui tong sampah sistem.
- **Klik nama fail atau ruang kosong** untuk menaip laluan, dengan pelengkapan automatik. `/` turun ke dalam, <kbd>Backspace</kbd> naik satu tingkat, <kbd>Enter</kbd> mengesahkan — dan laluan yang belum wujud terus dicipta, dengan pemberitahuan yang menyatakan ke mana ia pergi.
- **Senarai terbuka pada entri tempat anda berada**, dan menyusurinya dengan anak panah atau penuding mengisi medan dengan apa yang anda tuding. Baris yang anda tuding dipaparkan sebagai tawaran yang akan dibuatnya; melepasi mana-mana hujung senarai, ia memulangkan apa yang anda taip, dan mengalihkan penuding daripadanya memulangkan sorotan ke tempat anda tadi. Senarai itu mengikut kursor: folder tempat ia berada, ditapis mengikut huruf di hadapannya.
- **Butang pensel pada folder** menukar interaksi yang sama kepada mod alih/tukar nama, dengan pemeriksaan yang sama seperti dilakukan Obsidian. Nama yang sudah digunakan berwarna merah dalam senarai, dan memilihnya akan bertanya sama ada hendak menamakan semula apa yang menghalang atau bertukar tempat atau nama dengannya.
- **Tahan <kbd>Ctrl</kbd>** untuk membuka dalam tab baharu — atau, dalam mod alih/tukar nama, untuk menyalin nota ke sana dan bukannya mengalihkannya. Nama nota dan ruas-ruas folder menerima pengubah suai yang sama, dan seretan, sepertimana barisnya dalam Peneroka fail.
- **Nama melengkapkan dirinya sambil anda menaip** — apa yang akan ditulis oleh <kbd>Tab</kbd> muncul selepas kursor, tersorot dan dieja sebagaimana nama itu ditulis, walau apa jua huruf besar atau kecil yang anda taip — persamaan nama-nama dalam folder itu, atau langkah ke arah yang pertama daripada nama-nama itu; menaip menelannya huruf demi huruf, <kbd>→</kbd> mengambil satu huruf, <kbd>Tab</kbd> atau <kbd>End</kbd> mengambilnya sepenuhnya, <kbd>Backspace</kbd> memulangkannya. Senarai terus menapis mengikut apa yang anda taip, bukan mengikut apa yang ditawarkan.
- **<kbd>Tab</kbd> melengkapkan seperti shell**: ia memanjangkan apa yang anda taip sejauh nama-nama dalam folder itu sama, melangkah menuju salah satunya setapak demi setapak apabila nama-nama itu berbeza, dan masuk ke sebuah folder hanya sebaik tinggal satu nama. Melepasi hujung laluan, ia sebaliknya meluaskan pilihan: nama, nama dengan sambungan, laluan dari bilik kebal, laluan dari akar sistem. <kbd>Shift</kbd>+<kbd>Tab</kbd> menyusuri jalan yang sama ke belakang — menandakan apa yang dipulangkannya dan bukan memadamkannya — dan melepasi permulaan laluan ia terus mendaki laluan itu, kemudian berpusing semula ke laluan sistem. Ke mana-mana arah pun, satu pusingan kembali ke laluan yang anda bina.
- **Klik kanan untuk menyalin** — dua kali untuk sebuah nama, tiga kali untuk segala yang di sebelah kanannya, dan pada ruang kosong untuk seluruh laluan atau laluan sistem.
- **Seret nota ke sebuah folder pada baris itu** untuk memindahkannya ke sana, berserta pautannya — destinasinya sudah pun di skrin, jadi ia satu seretan sahaja dan bukan perjalanan melalui pepohon fail. Nama bilik kebal turut menerimanya, untuk akar. Satu pilihan penuh berpindah sebagai satu, dan folder yang tidak dapat menerima apa yang ditawarkan tidak memaparkan apa-apa dan bukannya gagal selepas perkara berlaku.
- **Lepaskan teks pada baris itu untuk menulisnya** — pada sebuah folder atau nama bilik kebal untuk menamakan sebuah nota baharu di situ, pada nama nota itu sendiri untuk menambahkannya ke hujung apa yang sedang anda baca. Fail daripada desktop anda berfungsi sama, dan baris itu bercahaya biru selagi lepasan itu akan mendarat.
- **Medan memakai warna apa yang dinamakannya** — warna yang sama seperti barisnya dalam senarai, kelabu untuk nota sesebuah folder — dan **bertukar merah** sebaik sahaja tiada apa-apa yang menyahutnya, supaya anda dapat melihat sebelum menekan <kbd>Enter</kbd> sama ada ia akan membuka sesuatu nota atau menciptanya.
- **Fail HTML dipaparkan sebagai halaman**, dalam bingkai yang setiap kebenarannya ditahan — tiada skrip, tiada rangkaian, tiada asal usulnya sendiri — dengan helaian gaya dan imej di sebelah fail itu dibawa masuk supaya halaman yang disimpan masih kelihatan seperti dirinya. Sumbernya hanya satu tekanan jauhnya.
- **Taip URL** — `https://`, `obsidian://`, atau laluan `file://` mahupun berkod peratus — dan ia dibuka dan bukannya dibaca sebagai nama nota. Alamat web dibawa ke tab pemapar Web Obsidian sendiri jika anda menghidupkannya.
- **Laluan panjang memendek di tempat hurufnya berlebihan** — tidak pernah melepasi apa yang membezakan sebuah folder daripada jirannya, secara sekata dan bukan sehuruf demi sehuruf — dan hanya menatal apabila tiada lagi yang boleh dimampatkan. Tuding nama yang dipendekkan untuk melihatnya sepenuhnya.
- **<kbd>F2</kbd>** berselang antara tajuk dalam nota dan bar laluan, bermula pada nama tanpa sambungannya dan meluas keluar ke laluan penuh pada tekanan berikutnya. Ia melintas dengan kemas melalui dialog tukar nama Obsidian apabila tajuknya ditatal hilang daripada pandangan. Perintah *Fokus pada bar laluan* melalui anak tangga yang sama tanpa menukar nama; baris *Kekunci pintas* dalam tetapan membawa anda ke sana untuk mengikatnya.
- **Klik nama bilik kebal** untuk melayari bilik kebal anda yang lain, folder rumah, akar sistem fail dan pemacu yang dilekapkan tanpa bertukar bilik kebal. Baca sahaja sehingga anda membuka mangga merah yang mengambil tempat togol tukar nama di luar sana, dan berbingkai warna ralat sepanjang masa. Dimatikan secara lalai — lihat [di luar bilik kebal](#di-luar-bilik-kebal).
- **Akar bilik kebal menyenaraikan halaman yang boleh dipegang oleh sesebuah panel** — `:graph`, `:search`, dan apa sahaja pandangan yang didaftarkan oleh pemalam anda. Pilih satu, atau taipkannya: titik bertindih tidak memulakan mana-mana nama fail, jadi label itu turut berfungsi sebagai alamat. `:graph` yang ditaip di dalam sebuah folder membuka graf folder itu. Dengan pemalam halaman permulaan dipasang, pembatas bilik kebal membuka halaman itu pada klik pertama dan melipat pepohon fail pada klik seterusnya.
- **Satu baris pada panel yang tidak memegang fail** — tab kosong berbunyi `vault / :blank`, graf `vault / :graph`, dan medan di sebelahnya ialah bar alamat: taip laluan dan <kbd>Enter</kbd> membukanya dalam panel itu, atau mencipta failnya. Panel sisi mengekalkan tajuk Obsidian sendiri.
- **Dua tahap amaran** — merah di luar bilik kebal, jingga untuk fail teks yang tiada penyunting dalam Obsidian. Lihat [dua warna amaran](usage.ms.md#dua-warna-amaran).
- **Ikon yang mengikut tema**, boleh ditukar daripada cebisan CSS — dan **46 bahasa**: setiap satu yang dibawa Obsidian, tambah bahasa Yunani dan Sanskrit, yang tiada tetapannya dalam Obsidian. Pilih satu untuk plugin ini sahaja, atau ikut bahasa Obsidian sendiri.
- **Tetapan:** bahasa, penjajaran, pemisah sedia ada, klik yang mana membuka senarai, nama bilik kebal, fail tersembunyi, sambungan fail.

![Senarai yang sama dalam mod alih/tukar nama: nama fail semasa disematkan di atas, folder jiran di bawahnya, dan nota sedia ada dikelabukan](../images/dropdown.png)

*Dalam mod alih/tukar nama senarai yang sama menawarkan sesuatu yang lain: nama nota semasa disematkan di atas supaya ia boleh dialihkan tanpa ditukar nama, folder untuk memindahkannya, dan nama yang sudah diambil berwarna merah; memilihnya akan bertanya apa yang perlu dilakukan terhadap fail yang menghalang.*

→ [Panduan penggunaan penuh](usage.ms.md)

## Di luar bilik kebal

Dasar pembangun Obsidian menuntut sesuatu plugin menjelaskan setiap capaian kepada fail di luar bilik kebal, jadi terus terang:

**Sama ada ia melakukan semua ini langsung.** Hanya jika anda menghidupkan **Akses fail luaran**, yang **dimatikan secara lalai**. Dengan tetapan itu dimatikan, tiada jalan daripada plugin ke mana-mana laluan luaran, dan tiada satu pun kod di bawah ini pernah dijalankan.

**Apa yang ia baca.** Hanya apabila anda memintanya. Mengklik nama bilik kebal menyenaraikan bilik kebal anda yang lain — dibaca daripada `obsidian.json` milik Obsidian sendiri — serta folder rumah anda, akar sistem fail dan pemacu yang dilekapkan (`/proc/mounts` pada Linux, `/Volumes` pada macOS, huruf pemacu pada Windows). Melayari dari sana menyenaraikan kandungan direktori, dan membuka sesuatu fail membaca fail itu sahaja.

**Apa yang ia tulis.** Tiada apa-apa, sehingga anda menekan butang yang menyatakannya. Ada dua butang sedemikian, dan masing-masing hanya meliputi bidangnya sendiri:

- Butang **Sunting sebagai teks** pada pemapar membuka kunci fail di hadapan anda, fail itu sahaja dalam tab itu sahaja. Selepas itu suntingan anda disimpan ke dalamnya sambil anda menaip.
- **Mangga merah** pada bar tajuk, yang mengambil tempat togol tukar nama selagi bar laluan menghala ke luar bilik kebal anda, membuka kunci pembuatan, penukaran nama, pengalihan dan pemadaman pada laluan luaran — dan memulangkan tempat itu kepada togol sebaik sahaja ia terbuka. Ia terkunci semula sebaik sahaja anda kembali ke dalam, dan pada tekanan yang meninggalkan mod tukar nama, jadi kebenaran itu tidak pernah hidup lebih lama daripada folder yang anda berikannya.

Kedua-dua pembukaan kunci itu tidak disimpan dalam ruang kerja mahupun dalam tetapan, jadi penulisan tidak pernah tersedia pada fail yang anda tidak ingat pernah dibuka. Dalam kedua-dua keadaan itu tiada apa-apa ditulis ganti — sasaran yang sudah ada ditolak, menggunakan penciptaan eksklusif sistem fail itu sendiri dan bukan pemeriksaan yang boleh kalah dalam perlumbaan.

Mengalihkan sesuatu nota *keluar* daripada bilik kebal anda ialah satu-satunya penulisan yang memakan sesuatu yang tidak dapat dipulangkan: Obsidian hanya mengemas kini pautan di dalam bilik kebal, jadi setiap pautan yang menghala ke nota itu akan putus. Ia ditawarkan di sebalik dialog yang menyatakannya dan mengira jumlah nota yang terjejas, dan ia berlaku secara salin-kemudian-padam melalui tong sampah Obsidian sendiri, jadi ia boleh dipulihkan sama seperti nota yang dipadam. Menahan <kbd>Ctrl</kbd> menyalinnya ke luar sebagai gantinya.

**Mengapa.** Nota yang anda cari selalunya berada dalam bilik kebal lain, dalam folder penyegerakan atau pada pemacu USB, sedangkan jawapan Obsidian sendiri — tukar bilik kebal — menutup segala yang sedang anda buka. Ini membolehkan anda pergi melihat tanpa beredar, dan membetulkan salah taip sementara anda di situ.

**Hadnya.** Penyunting Obsidian terikat kepada fail di dalam bilik kebal, jadi fail luaran **tidak boleh** dibuka sebagai nota sebenar, lengkap dengan pautan, pautan balik dan selebihnya; tiada plugin yang mampu. Sebaliknya Lure memaparkannya dalam pemapar sendiri (Markdown, imej, audio, video, PDF), dengan *Buka secara luaran* untuk yang lain semuanya. Bar laluan kekal berbingkai warna ralat selagi ia menghala ke luar bilik kebal anda, dan jejaknya bermula di tempat yang anda pilih — nama sesebuah bilik kebal, folder rumah anda, sesuatu pemacu — bukan pada susunan direktori mesin itu.

## Pemasangan

**Dalam Obsidian:** buka **Tetapan → Plugin pihak ketiga → Gelintar**, cari *Lure*, kemudian tekan *Pasang* dan *Hidupkan* — atau tekan *Add to Obsidian* di [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure).

**Manual:** muat turun `main.js`, `manifest.json` dan `styles.css` daripada [keluaran terkini](https://github.com/Gelaende51/obsidian-lure/releases) ke `<vault>/.obsidian/plugins/lure/`, kemudian hidupkannya di bawah **Tetapan → Plugin pihak ketiga**.

**BRAT:** tambah `Gelaende51/obsidian-lure` sebagai plugin beta.

**Daripada sumber:** `npm install && npm run build` — lihat [pembangunan](../development.md).

## Keserasian

Tiada plugin diperlukan. **Peneroka fail** teras, jika dihidupkan, ialah yang menunjukkan folder pada bar sisi; tanpanya klik-klik itu tidak melakukan apa-apa.

Diuji terhadap plugin komuniti yang berkongsi bar tajuk nota atau menjawab klik pada folder — pada kedua-dua susunan pemuatan, masing-masing hidup dan mati:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — pemisah membuka nota folder dan bukannya menunjukkan foldernya, menjadikan setiap ruas laluan sebagai tempat yang boleh dituju, sedalam mana sekalipun: notanya dicari menurut konvensyen plugin itu sendiri dan bukan diserahkan kepadanya untuk menjawab. Ia juga satu-satunya yang menerbitkan konvensyen sedemikian; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) dan [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) tidak menerbitkan apa-apa dan tidak pernah menuntut laluan pada bar tajuk, jadi dengan kedua-duanya pemisah menunjukkan folder seperti biasa.
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer) dan [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — kedua-duanya melukis ke elemen bar tajuk yang sama; Lure mengekalkan barisnya siapa pun yang dimuatkan dahulu, dan mematikan mana-mana satu membiarkan yang lain utuh.
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header), [Running Head](obsidian://show-plugin?id=running-head), [Crumbs](obsidian://show-plugin?id=crumbs-obsidian), [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — mempunyai jalurnya sendiri, dan hidup berdampingan tanpa masalah.

Komputer meja sahaja — model interaksinya memerlukan tuding tetikus, klik yang tepat dan papan kekunci. Keputusan penuh, apa yang masih perlu diuji, serta perbandingan dengan Quick Explorer dan Breadcrumbs ada dalam [keserasian](../compatibility.md).

## Menyumbang

- Laporan isu dan pull request dialu-alukan — terutamanya **pembetulan terjemahan**, kerana kesemua 45 bahasa diterjemah mesin dan belum disemak penutur jati. Lihat [pembangunan](../development.md) untuk persediaan dan peraturan asasnya.
- **Penjejak isu:** https://github.com/Gelaende51/obsidian-lure/issues
- **Derma:** [Ko-fi](https://ko-fi.com/vault51). Plugin ini percuma dan berlesen AGPL walau apa pun; tip dihargai dan tidak pernah dituntut. Tujuan yang dimaksudkan ialah imbangan karbon — satu niat, bukan janji: tiada apa-apa diimbangi sehingga jumlahnya berbaloi dengan kesusahannya, dan baris ini akan menyatakannya sebaik sahaja ada yang benar-benar telah diimbangi.

## Penghargaan

- **Vault51** — penulis: reka bentuk, keperluan, dan ujian manual dari mula hingga akhir.
- **Claude Opus 5** dan **Claude Sonnet 5** (Anthropic, melalui Claude Code) — pelaksanaan, terjemahan dan dokumentasi, di bawah arahan penulis. Lihat [pendedahan AI](#pendedahan-ai).
- **[Obsidian](https://obsidian.md)** — aplikasi yang diperluas oleh ini, dan sumber setiap komponen yang digunakan plugin: API plugin-nya, set ikon Lucide di sebalik `setIcon`, tika i18next terbina tempat label menu konteks dibaca, serta kelas dan pemboleh ubah CSS-nya sendiri. Tiada apa-apa daripada pihak ketiga dibungkus sekali; plugin ini **tiada kebergantungan masa jalan**.

> **Pasukan Obsidian tidak menyertai projek ini dalam apa cara sekalipun** — mereka tidak menulis, menyemak, mengesahkan mahupun menyokongnya. Obsidian ialah tanda dagangan Dynalist Inc.; ini plugin bebas yang tiada kaitan.

Penyumbang akan disenaraikan di sini apabila sumbangan mula tiba.

## Pautan


- **Dokumentasi:** [docs/](../)
- **Log perubahan:** [CHANGELOG.md](CHANGELOG.ms.md)
- **Halaman plugin:** https://community.obsidian.md/plugins/lure
- **Kehadiran web / sumber:** https://github.com/Gelaende51/obsidian-lure
- **Derma:** [Ko-fi](https://ko-fi.com/vault51) — lihat [menyumbang](#menyumbang).
- **Lesen:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. Cabang dan binaan yang diedar semula mesti mengeluarkan sumbernya di bawah lesen yang sama.
