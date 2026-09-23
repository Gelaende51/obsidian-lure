<!-- Terjemahan CHANGELOG.md — status: commit 2cbb237.
     Terjemahan mesin (Claude Opus 5), belum ditinjau penutur asli.
     Koreksi sangat diterima; CHANGELOG bahasa Inggris adalah versi acuan. -->

[English](../../CHANGELOG.md) · [العربية](CHANGELOG.ar.md) · [አማርኛ](CHANGELOG.am.md) · [Беларуская](CHANGELOG.be.md) · [বাংলা](CHANGELOG.bn.md) · [Català](CHANGELOG.ca.md) · [Čeština](CHANGELOG.cs.md) · [Dansk](CHANGELOG.da.md) · [Deutsch](CHANGELOG.de.md) · [Ελληνικά](CHANGELOG.el.md) · [Español](CHANGELOG.es.md) · [فارسی](CHANGELOG.fa.md) · [Suomi](CHANGELOG.fi.md) · [Français](CHANGELOG.fr.md) · [Gaeilge](CHANGELOG.ga.md) · [עברית](CHANGELOG.he.md) · [Magyar](CHANGELOG.hu.md) · **Bahasa Indonesia** · [Italiano](CHANGELOG.it.md) · [日本語](CHANGELOG.ja.md) · [ქართული](CHANGELOG.ka.md) · [ភាសាខ្មែរ](CHANGELOG.kh.md) · [한국어](CHANGELOG.ko.md) · [Latviešu](CHANGELOG.lv.md) · [Bahasa Melayu](CHANGELOG.ms.md) · [नेपाली](CHANGELOG.ne.md) · [Nederlands](CHANGELOG.nl.md) · [Norsk](CHANGELOG.no.md) · [Polski](CHANGELOG.pl.md) · [Português](CHANGELOG.pt.md) · [Português (Brasil)](CHANGELOG.pt-BR.md) · [Română](CHANGELOG.ro.md) · [Русский](CHANGELOG.ru.md) · [संस्कृतम्](CHANGELOG.sa.md) · [Slovenčina](CHANGELOG.sk.md) · [Shqip](CHANGELOG.sq.md) · [Српски](CHANGELOG.sr.md) · [Svenska](CHANGELOG.sv.md) · [ไทย](CHANGELOG.th.md) · [Türkçe](CHANGELOG.tr.md) · [Українська](CHANGELOG.uk.md) · [Oʻzbekcha](CHANGELOG.uz.md) · [Tiếng Việt](CHANGELOG.vi.md) · [简体中文](CHANGELOG.zh.md) · [繁體中文](CHANGELOG.zh-TW.md)

# Log perubahan

Setiap rilis Lure, yang terbaru lebih dulu. Apa yang sudah mendarat sejak rilis terakhir ada di bawah *Belum dirilis*. Versi tidak memakai awalan `v`, sesuai dengan tanda rilisnya.

## 1.5.0 — 2026-09-23[^1.5.0]

### Ditambahkan

- **Nama yang sudah dipakai akan bertanya, bukan menolak.** Memindahkan atau mengganti nama ke nama yang sudah ada membuka dialog dengan dua jalur yang dapat Anda edit: ke mana berkas Anda pergi, dan ke mana berkas yang menghalangi pergi, berwarna merah selama itu masih dipakai. Setiap jalur juga digambar dengan cara yang sama seperti bilah jalur menggambarnya, dengan bagian yang berbeda diberi warna dan dipendekkan lebih dulu. Kedua bidang memiliki daftar; yang kedua memuat cara-cara keluar yang biasa — tukar tempat (pergi ke folder lama berkas Anda), tukar nama (tetap di tempatnya dan mengambil nama lama berkas Anda), tukar keduanya (mengambil jalur lama berkas Anda), `-1`, `-bak`, dan `-old` di samping namanya sendiri, serta kedua nama yang pernah dimiliki berkas itu. Cara keluar yang jalurnya sudah dipakai ditampilkan pudar. Memilih salah satunya hanya mengisi bidang itu; Terapkan memindahkan keduanya, berikut tautannya, dan Batal tidak memindahkan apa pun. Memilih nama yang sudah dipakai dari menu tarik-turun menanyakan hal yang sama, begitu pula menjatuhkan sebuah berkas ke folder yang sudah memiliki nama itu.
- **`:graph` di dalam sebuah folder membuka graf folder itu** — graf yang disaring dengan `path:"that/folder"`, seperti yang akan dibuat kotak pencariannya sendiri. Di akar vault, ia tetap graf keseluruhan, seperti sebelumnya.
- **Folder yang sudah memiliki nama itu berwarna merah** di menu tarik-turun saat memindahkan, begitu pula berkas dengan nama itu, sehingga benturan terlihat sebelum Anda memilih.

### Diubah

- **Tawaran selalu berupa apa yang akan ditulis Tab.** Di titik nama-nama berhenti sama, bidang menawarkan langkah menuju yang pertama dari nama-nama itu, dan baris yang akan dituju Tab-lah yang menentukannya; mengetik menimpa sebuah nama membiarkan ekstensinya tetap berdiri dan ekstensi itu ditawarkan di depannya; sebuah folder yang baru saja dimasuki menawarkan langkah pertamanya. Sebelumnya, ada keadaan yang tidak menawarkan apa-apa padahal Tab tetap menulis sesuatu. Garis bawah menu tarik-turun mengikuti tawaran saat berubah, dan Tab pada baris yang Anda tuju dengan panah mengambil baris itu, bukan baris di sebelahnya.
- **Tawaran mengabaikan besar-kecil huruf.** Mengetik `sch` menawarkan `Schemes`, dieja sebagaimana nama itu ditulis; mengambil kembali tawaran itu mengembalikan huruf Anda persis seperti yang Anda ketik. Ketika `Test` dan `test` sama-sama ada, yang dieja sesuai dengan cara Anda mengetik itulah yang ditawarkan.
- **Setelah menekan Tab, langkah berikutnya langsung ditawarkan**, seperti setelah mengetik sebuah huruf.
- **Nama yang diawali dengan apa yang Anda ketik muncul lebih dulu di menu tarik-turun**, ditandai dengan garis di tepinya — biru di tempat kesamaannya lebih dari yang Anda ketik, hijau pada cabang yang dituju tawaran di titik nama-nama itu berpisah — mendahului nama-nama yang hanya memuatnya. Masing-masing menggarisbawahi langkah yang akan diambil <kbd>Tab</kbd> menuju ke sana, tidak hanya yang ditawarkan.
- **Menu tarik-turun mengikuti kursor**, atau awal sebuah pilihan: ia mencantumkan folder tempat titik itu berada, disaring oleh huruf di depannya. Di awal sebuah nama, itu adalah seluruh folder.
- **Menunjuk sebuah baris menampilkannya sebagai tawaran** — apa yang Anda ketik tetap milik Anda dan sisa nama itu ditandai — dan menjauhkan penunjuk dari daftar mengembalikan tawaran semula.
- **→ mengambil satu huruf dari tawaran** alih-alih semuanya; <kbd>End</kbd> tetap mengambilnya utuh.
- **Backspace sebelum sebuah ekstensi yang berdiri sendiri melangkah naik satu folder**, seperti yang dilakukannya pada bidang kosong; ekstensi yang sendirian itu hilang.
- **F2 pada bidang yang terbuka mengubahnya menjadi ganti nama di tempatnya berdiri**, mempertahankan teks, kursor, dan pilihan, dan **Fokus ke bilah jalur** mengembalikan ganti nama itu dengan cara yang sama.
- **Apa pun lain yang ditekan atau diklik di antara kedua penekanan itu memulai lagi siklus F2 dan Fokus ke bilah jalur.**
- **Folder ditebalkan di menu tarik-turun**, sehingga catatan milik sebuah folder tidak perlu lagi berwarna kelabu untuk tampil beda: ia ungu seperti catatan lainnya.
- **Menu tarik-turun tidak lebih lebar dari bilah jalur.** Nama yang tidak muat dipendekkan dengan cara yang sama seperti bilah jalur memendekkannya, dan ditampilkan utuh saat diarahkan penunjuk.
- **PageUp dan PageDown menggulir menu tarik-turun sebesar apa yang ditampilkannya**, dari bidang juga, dan baris terpilih menjaga posisinya di layar. <kbd>Home</kbd> dan <kbd>End</kbd> membawa baris pertama dan terakhir ke dalam pandangan.
- **Menu tarik-turun menampilkan hingga 1.000 entri** sebelum menghitung sisanya, alih-alih 100.
- **Folder mengalah dari yang terpanjang lebih dulu.** Ketika ruang kurang, nama folder terpanjang memendek hingga sepanjang nama terpanjang berikutnya, lalu keduanya bersama-sama, dan seterusnya, masing-masing berhenti pada batas terendahnya. Sebelumnya, semua folder memendek serentak sebanding dengan panjangnya.
- **Nama yang dipendekkan meluncur, bukan meloncat.** Nama yang mengalah dipotong tepat di piksel dan memudar di bawah `…`-nya, sehingga tidak ada apa pun setelahnya di baris itu bergerak berjenjang selagi panel diubah ukurannya.

### Diperbaiki

- Di panel sebelah kanan, menu tarik-turun terbuka di bawah panel sebelah kiri sampai huruf pertama diketik.
- Menjauhkan penunjuk dari menu tarik-turun mengembalikan tawaran tetapi bukan warnanya.
- Sebuah spasi di tempat nama yang dipendekkan terpotong — `development guidelines` — hilang, membuat dua kata itu menyatu.

## 1.4.0 — 2026-09-19[^1.4.0]

### Ditambahkan

- **Baris Tombol pintas di pengaturan.** Tombolnya membuka *Tombol pintas* Obsidian yang disaring untuk plugin ini, tempat *Fokus ke bilah jalur* — yang dikirim tanpa tombol — bisa diberi satu.
- **Bilah jalur pada panel yang tidak memuat berkas.** Tab kosong terbaca `vault / :blank`, grafik `vault / :graph`, dan tampilan lain yang tak punya apa pun untuk dinamai mendapat label `:`-nya sendiri — tab milik plugin tab beranda terbaca `:home-launcher`. Kolom di sebelahnya adalah bilah alamat: ketik jalur dan <kbd>Enter</kbd> membukanya di panel itu, atau membuatnya. Sebelumnya barisnya kosong — plugin menyembunyikan judul bawaan Obsidian dan tidak menaruh apa pun sebagai gantinya.
- **Halaman bisa diketik selain dipilih** — `:graph` dan lainnya adalah alamat, bukan sekadar entri daftar. Tanda titik dua tidak mengawali nama berkas mana pun, jadi mengetikkannya di mana saja memunculkan halaman itu, dan kolom berwarna sama dengan halaman tersebut alih-alih menawarkan pembuatan catatan yang tak mungkin diberi nama itu.
- **Baris untuk *Tampilkan semua jenis berkas* milik Obsidian**, di samping aturan berkas titik, karena keduanya menentukan apa yang boleh dicantumkan daftar tarik-turun: baris itu menyuruh Anda mencari pengaturan tersebut di pengaturan Obsidian sendiri dan mengaktifkannya untuk melihat semua berkas, dan tombol di sampingnya membuka halaman itu dengan pengaturannya digulir ke tampilan dan dikedipkan, seperti hasil pencarian pengaturan. Dinamai dengan kata-kata Obsidian, dijelaskan dalam 45 bahasa.
- **Akar vault mencantumkan halaman yang bisa dimuat sebuah panel** — `:graph`, `:search`, dan tampilan apa pun yang didaftarkan plugin Anda, termasuk tab beranda atau kalender. Pilih salah satu dan panel membukanya, seperti memilih catatan membuka catatan itu. Tampilan yang ada untuk menampilkan berkas tidak disertakan, karena tak akan ada yang bisa ditampilkannya.
- **Pembatas milik vault membuka halaman awal Anda**, bila ada plugin yang menyediakannya, dan digarisbawahi sebagai penandanya; tekanan berikutnya melipat pohon berkas, dan tekanan sesudahnya mengembalikan persis apa yang tadinya terbuka. Tanpa plugin seperti itu, tekanan pertama melipat, seperti sebelumnya.
- **Ketik jalur dari akar sistem berkas.** Tanda `/` di depan kolom kosong membukanya alih-alih ditelan, setiap garis miring sesudahnya menjadi bagian darinya, dan daftar tarik-turun mencantumkan isi mesin, bukan vault.

### Diubah

- **F2 dan Fokus ke bilah jalur menekan Tab di dalam kolom.** Apa pun yang akan dilakukan Tab di sana — anak tangga berikutnya, melengkapi yang Anda ketik, masuk ke sebuah folder — mereka lakukan juga; hanya di titik Tab berputar kembali ke awal jalur mereka keluar, F2 ke judul di dalam catatan, perintahnya ke catatan. Sebelumnya, kolom yang sudah Anda ketiki membuat F2 mengulang dari nama dan perintahnya menutup kolom.
- **Langkah setelah siklus keluar adalah folder akar.** Tekanan setelah F2 kembali ke judul di dalam catatan, atau perintahnya kembali ke catatan, mendarat di tempat putaran Tab mendarat — akar vault, seluruh jalur di dalam kolom, folder pertamanya ditandai — sehingga tak ada langkah dalam lingkaran itu yang tersisa hanya untuk Tab.
- **Fokus ke bilah jalur berjalan seperti F2.** Ia terbuka pada nama alih-alih seluruh jalur, mengambil empat anak tangga yang sama, dan tekanan setelah yang terakhir menutup kolom lalu mengembalikan kursor ke catatan — sebelumnya, ia memutari anak tangga tanpa henti dan satu-satunya tombol yang menjangkau baris itu tidak bisa meninggalkannya.
- **Nama yang sudah dipakai dilaporkan saat Anda menggunakannya, bukan saat Anda mengetiknya.** Setiap nama yang diketik menuju `Notes.md` melewati nama-nama yang mungkin berkas tersendiri, dan peringatannya dulu berkedip muncul lalu hilang huruf demi huruf. Kesalahan pada ejaan sebuah nama tetap dilaporkan saat nama itu dieja.
- **Pembatas yang catatan foldernya sudah terbuka menampilkan folder** alih-alih membuka ulang apa yang sudah ada di layar — itulah yang selama ini dimaksud tekanan keduanya.
- **Posisi Anda kini tebal dalam daftar tarik-turun**, tidak hanya biru.
- **Semua yang bukan catatan berwarna oranye dalam daftar tarik-turun**, tidak hanya jenis teks yang tak punya tampilan di Obsidian. Warna ungu memilih catatan dari folder berisi campuran; satu warna untuk sisanya menyampaikan hal yang sama lebih cepat.

### Diperbaiki

- **Backspace di atas folder yang diklik tidak lagi menghilangkan nama vault.** Garis miring yang tertinggal di depan terbaca sebagai jalur dari akar mesin, yang mengosongkan segmen pembuka — dan menutup kolom dengan Escape tidak pernah mengembalikannya, sehingga tab kehilangan nama dan ikon vault-nya untuk selamanya. Garis miring di depan kini dianggap milik mesin hanya bila folder pertamanya benar-benar ada, dan segmen pembuka kembali dengan setiap cara keluar dari kolom.
- Di luar vault, berkas disembunyikan kecuali **Deteksi semua ekstensi berkas** milik Obsidian aktif — pengaturan tentang apa yang diindeks vault, diterapkan pada folder yang tidak ada di vault. Berkas `.txt` di samping catatan Anda kini dicantumkan di sana, apa pun pengaturannya.
- Daftar tarik-turun nama vault tidak berbuat apa-apa pada panel yang tidak memuat berkas, padahal itulah panel yang akan Anda pakai untuk pergi ke tempat lain.
- Mengklik nama vault membiarkan judul bawaan Obsidian tetap berdiri di samping jalur di dalam kolom, berwarna abu-abu, padahal ia tidak muncul di waktu lain: baris mengukur dirinya dari apa yang telah digambarnya, dan pada saat itu ia telah mengosongkan dirinya untuk memberi ruang bagi kolom.

- Mengklik ruang kosong membuka kolom lalu kehilangannya: menampilkan catatan di Penjelajah Berkas membawa serta karet penanda, sehingga kolom berdiri terbuka dan bertanda sementara setiap ketukan tombol masuk ke pohon berkas.
- Anak tangga yang menampilkan jalur dari akar sistem menggambar jejak jalur yang sama di samping kolom, tanpa disesuaikan, sehingga jalur yang dalam tergambar menimpa dirinya sendiri.

## 1.3.0 — 2026-09-17[^1.3.0]

### Ditambahkan

- **Membawa berkas dari luar ke dalam vault.** Pindahkan atau salin berkas dari mana pun di disk ke sebuah jalur di dalam vault Anda; ia tiba sebagai catatan sungguhan, dan pemindahan baru menghapus aslinya setelah penyalinan berhasil.
- **Jatuhkan teks atau berkas ke baris itu untuk menuliskannya.** Ke sebuah folder: catatan baru di folder itu, dinamai sembari Anda mengetik. Ke nama catatannya, atau ke pemisah sebuah folder yang punya catatan folder: ditambahkan ke akhir catatan itu, setelah konfirmasi.
- **Buat catatan folder** dengan tekanan kedua pada apa pun yang membuka folder itu, bila plugin catatan folder sedang berjalan dan folder itu belum punya. Letaknya mengikuti apa yang dikatakan pengaturan [Folder notes](https://github.com/LostPaul/obsidian-folder-notes) sendiri.
- **Seret sebuah folder dari bilah jalur ke bilah tab** untuk membukanya di sana: catatan foldernya bila ada, kalau tidak sebuah tab yang berdiri di folder itu.
- **Roda tetikus menyusuri daftar.** Di atas sebuah nama, putaran pertama membuka daftar nama itu dan setiap putaran berikutnya menggeser sorotan satu baris. Baris yang sedang bergulir ke samping tetap memakai roda untuk bergulir.
- **Panah ke luar dari depan bidang** untuk menarik masuk folder di depannya: <kbd>←</kbd> untuk satu folder, <kbd>Shift</kbd>+<kbd>Home</kbd> (atau <kbd>Home</kbd> dengan daftar tertutup) untuk semuanya.
- **Bidang itu mengenakan warna dari apa yang dinamainya**, sama seperti baris itu di dalam daftar, dan menjadi merah begitu tak ada lagi yang menyahut — saat di mana <kbd>Enter</kbd> akan membuat sesuatu alih-alih membukanya.
- **Catatan folder berwarna kelabu di dalam daftar**, sehingga terbaca sebagai milik foldernya, bukan sebagai satu catatan lagi.
- **Klik tengah pada pemisah** untuk membuka folder itu di tab baru: catatan foldernya, atau sebuah tab yang berdiri di dalamnya.

### Diubah

- **Gembok dan sakelar ganti nama adalah satu kendali.** Di luar vault, gembok merah yang terkunci menggantikan tempat sakelar itu; membukanya menyerahkan tempat itu kepada sakelar, dan meninggalkan mode ganti nama menguncinya kembali.
- **Tombol ganti nama juga bertanya kepada gembok.** Di luar vault, satu tekanan mengedipkan gembok; tekanan kedua dalam setengah detik memberikan apa yang diberikan gembok dan membuka mode ganti nama.
- **Tombol ganti nama menempuh satu putaran penuh** — judul di dalam catatan, nama, nama dengan ekstensi, jalur dari vault, jalur dari akar sistem — dan tekanan berikutnya kembali ke judul di dalam catatan.
- **Klik <kbd>Ctrl</kbd> dan klik tengah bukan lagi sinonim.** Yang satu membuka tab lalu berpindah ke sana, yang lain membukanya di latar belakang.
- **Klik kanan pada nama catatan membuka menu berkas itu sendiri.**
- **Daftar setinggi yang diizinkan jendela**, alih-alih 300 piksel tetap milik Obsidian.
- **Mengklik sebuah folder selagi bidang terbuka mempertahankan seluruh jalur sesudahnya**, dan mengklik ke dalam sebuah folder di dalam bidang itu menampilkan isi folder tersebut selengkapnya.
- **Pemisah membuka catatan folder pada kedalaman berapa pun** bila Folder notes berjalan, dan digarisbawahi di mana pun ada catatannya. Sebelumnya hanya folder tingkat teratas yang bekerja. Dengan plugin catatan folder yang lain, pemisah tetap menampilkan foldernya.

### Diperbaiki

- **Bidang yang terbuka hidup lebih lama daripada berkasnya.** Berpindah ke catatan lain dengan bilah jalur terbuka membuat baris itu menamai berkas lama sepanjang sisa sesi.
- **Hapus, Ganti nama, dan Buat salinan ditolak di luar vault** meski gembok terbuka, dan tak pernah bisa dijangkau untuk gambar, PDF, dan halaman.
- **<kbd>Ctrl</kbd>+<kbd>Enter</kbd> tidak melakukan apa pun selagi daftar terbuka** — padahal begitulah setiap bidang terbuka.
- **<kbd>Enter</kbd> dengan daftar terbuka tetapi tak ada yang tersorot** tidak melakukan apa pun; kini ia mengesahkan apa yang Anda ketik.
- **Baris yang meluap padahal semua namanya sudah sependek mungkin tidak bisa digulir**, sehingga ujung jalurnya tak terjangkau.
- **Mematikan plugin meninggalkan tombol mati** di bilah judul setiap catatan yang pernah ditambalnya.

## 1.2.0 — 2026-08-25[^1.2.0]

### Ditambahkan

- **Pengaturan bahasa.** Lure mengikuti bahasa Obsidian secara bawaan, dan bisa disetel ke bahasa apa pun yang dimilikinya sendiri. Ini juga satu-satunya jalan menuju terjemahan Yunani dan Sanskerta, yang tidak ditawarkan Obsidian sendiri. Label pengaturannya tetap dalam bahasa Inggris, sehingga selalu bisa ditemukan lagi dari bahasa yang tak bisa Anda baca.

## 1.1.2 — 2026-08-25[^1.1.2]

### Diubah

- **Lembar gaya yang lebih ringan.** Barisnya tidak lagi memakai pemilih `:has()` maupun sebagian besar aturan `!important`. Ia menyesuaikan diri dengan kerja lebih sedikit, dan peringatan dari tinjauan plugin turun dari 56 menjadi 7.

## 1.1.1 — 2026-08-22[^1.1.1]

### Diperbaiki

- **Nama folder yang pendek bisa tergambar dengan celah di dalamnya** — `atlas` menjadi `atl as` — karena ruang yang disediakan untuk bentuk pendeknya lebih lebar daripada namanya sendiri.

## 1.1.0 — 2026-08-22[^1.1.0]

### Ditambahkan

- **Kosakata klik kanan.** Satu tekanan membuka menu; dua dan tiga tekanan menyalin semakin banyak — nama, nama dengan ekstensinya, jalurnya. Menu pada baris itu kini sepadan dengan milik Penjelajah berkas, entri demi entri.
- **Menu di luar vault.** Baris daftar dan penampil eksternal menawarkan pembukaan, *Salin path*, dan *Tampilkan dalam folder*; dengan gembok terbuka, juga *Catatan baru*, *Folder baru*, *Buat salinan*, *Ganti nama…*, dan *Hapus*. Hapus memindahkan ke tong sampah sistem dan tak pernah permanen.
- **Buka di tempat lain.** <kbd>Ctrl</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd>, dan klik tengah pada nama catatan atau sebuah folder membukanya di tab baru, panel terbelah, atau jendela. Keduanya bisa diseret, seperti barisnya di Penjelajah berkas.
- **Seret catatan ke baris itu untuk memindahkannya.** Jatuhkan satu catatan, beberapa catatan, atau sebuah folder ke segmen folder atau ke nama vault.
- **Perintah: Fokus ke bilah jalur**, dengan seluruh jalur terpilih — tanpa pintasan bawaan, tetapkan sendiri.
- **Ketik URL** di bilah jalur: `http(s)://` dan `obsidian://` terbuka sebagai tautan, `file://` dan jalur berkode persen membuka berkasnya.
- **Pelengkapan dengan Tab**, seperti yang dilakukan shell: setiap tekanan melengkapi sejauh nama-nama di folder itu sama dan berhenti di tempat mereka berbeda. <kbd>Shift</kbd>+<kbd>Tab</kbd> menempuhnya kembali. Ketika tak ada lagi yang bisa dilengkapi, <kbd>Tab</kbd> justru memperluas pilihan: nama, nama dengan ekstensi, jalur dari vault, jalur dari akar sistem.
- **Daftar terbuka pada tempat Anda berada** dan mempratinjaukan apa yang Anda tunjuk ke dalam bidang; meninggalkan daftar mengembalikan teks Anda.
- **Pindahkan catatan keluar dari vault** setelah konfirmasi yang menghitung tautan yang akan diputusnya. Ia disalin ke luar, lalu dibuang ke tong sampah, jadi bisa dipulihkan seperti catatan terhapus lainnya.
- Pengaturan **Tampilkan ekstensi berkas**, serta jalur berkutip (seperti yang dihasilkan *Copy as path* di Windows) yang kini dipahami.
- **Pengaturan muncul di pencarian pengaturan Obsidian** pada Obsidian 1.13 dan setelahnya.

### Diubah

- **Jalur panjang muat di panelnya.** Nama dipendekkan mulai dari yang paling tidak berguna — nama vault, lalu ekstensinya, lalu folder, dan nama catatannya sendiri paling akhir — tak pernah melewati titik di mana mereka masih bisa dibedakan. Tunjuk nama yang dipendekkan untuk membacanya utuh.
- **Mengklik nama catatan memilihnya tanpa ekstensinya**, sehingga penggantian nama tak lagi berisiko mengubah tipe berkasnya.
- **Tombol ganti nama terbuka pada nama tanpa ekstensinya**, dan tekanan berikutnya memperluas pilihan.
- **Mengklik sebuah folder mempertahankan sisa jalur tetap terlihat**, termasuk di luar vault.
- **Menjelajah kembali ke dalam vault Anda membuka berkas sebagai catatan**, lengkap dengan tautan dan tautan balik, bukan di penampil eksternal.

### Diperbaiki

- **Label menu berbahasa Inggris di semua bahasa**; kini label itu datang dari terjemahan Obsidian sendiri.
- **Tombol ganti nama buntu di dialog ganti nama milik Obsidian** ketika catatannya sudah tergulir melewati judulnya.
- **<kbd>Esc</kbd> perlu dua tekanan** untuk menutup bidang beserta daftarnya.
- **<kbd>Ctrl</kbd>+<kbd>Enter</kbd> membuka tautan di penyunting** alih-alih bekerja pada bilah jalur.
- **Mengganti nama di luar vault kehilangan nama yang diketik** ketika gembok ditekan.
- **Tab bisa berputar tanpa maju** pada folder yang berdampingan dengan catatan foldernya sendiri.

## 1.0.4 — 2026-08-13[^1.0.4]

### Ditambahkan

- **Catatan tempat Anda berada ditandai biru** di dalam daftar, sehingga menjelajah kembali ke foldernya menunjukkan dari mana Anda berangkat.

## 1.0.3 — 2026-08-13[^1.0.3]

### Dokumentasi

- README menautkan halaman plugin di direktori komunitas, dan README terjemahan diperbarui.

## 1.0.2 — 2026-08-13[^1.0.2]

### Diubah

- **Memerlukan Obsidian 1.8.7 atau setelahnya** (sebelumnya 1.4.0). Dua fitur yang diandalkan bilah jalur — menyalin berkas dan tooltip galat di bawah bidang — membutuhkannya.
- **Unduhan rilis membawa asal-usul bangun yang bertanda tangan**, sehingga Anda bisa memastikan dengan `gh attestation verify` bahwa `main.js` dibangun dari repositori ini.

### Diperbaiki

- **Membuka berkas eksternal yang hilang di aplikasi bawaan gagal diam-diam**; kegagalannya kini dilaporkan.

## 1.0.1 — 2026-08-13[^1.0.1]

### Diperbaiki

- **Dalam mode ganti nama, sebuah catatan berbenturan dengan dirinya sendiri** — menjelajah kembali ke foldernya sendiri menyembunyikan namanya dari daftar, seolah-olah ia menghalangi penggantian namanya sendiri.
- **Penampilan folder yang pertama setelah menjalankan Obsidian tidak membentangkan apa pun.**
- **Memilih folder dari daftar bisa mengakhiri mode ganti nama** alih-alih turun ke dalamnya.
- **Suntingan dari luar bisa tertimpa diam-diam** oleh penulis lain, seperti Sync atau panel kedua. Penulisan kini bersifat atomik.
- **Penyetelan ulang garis fokus merembes ke tampilan lain**; kini ia hanya berlaku pada bilah judul yang ditambal Lure.

### Dokumentasi

- README dan panduan penggunaan tersedia dalam seluruh 44 bahasa yang dibawa plugin ini.
- Panduan menyebut pengaturan Obsidian *Detect all file extensions*, yang kini bernama *Deteksi semua ekstensi berkas* (Show all file types).

## 1.0.0 — 2026-08-10[^1.0.0]

Rilis pertama. Mengganti nama berkas di bilah judul sebuah catatan dengan jalur vault yang bisa diklik dan disunting — bilah alamat untuk catatan Anda, dimodelkan dari milik Dolphin.

### Ditambahkan

- **Klik sebuah folder** untuk menampilkan daftar isi folder induknya, guna menukarnya dengan tetangganya tanpa menyentuh sisa jalurnya.
- **Klik pemisah** setelah sebuah folder untuk menampilkan dan membentangkannya di Penjelajah berkas, atau untuk membuka catatan foldernya bila Folder notes menanganinya.
- **Klik nama berkas atau ruang kosong** untuk mengetik jalur, dengan pelengkapan otomatis: `/` turun ke dalam, <kbd>Backspace</kbd> naik satu tingkat, <kbd>Enter</kbd> mengesahkan.
- **Mode pindah/ganti nama** mengalihkan interaksi yang sama ke pemindahan dan penggantian nama, diperiksa dengan cara Obsidian memeriksanya.
- **<kbd>Ctrl</kbd> membuka di tab baru** — atau, dalam mode pindah/ganti nama, menyalin catatan ke sana sebagai gantinya.
- **<kbd>F2</kbd> berganti-ganti** antara judul di dalam catatan dan bilah jalur.
- **Di luar vault** (mati secara bawaan): nama vault membuka vault Anda yang lain, folder rumah, akar sistem berkas, dan diska yang terpasang. Tak ada apa pun di luar sana yang ditulis sampai Anda membuka kuncinya, dan sebuah catatan hanya bisa disalin keluar dari vault, tak pernah dipindahkan.
- **45 bahasa.**

[^1.5.0]: Perubahan sejak 1.4.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.4.0...1.5.0>
[^1.4.0]: Perubahan sejak 1.3.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.3.0...1.4.0>
[^1.3.0]: Perubahan sejak 1.2.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.2.0...1.3.0>
[^1.2.0]: Perubahan sejak 1.1.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.2...1.2.0>
[^1.1.2]: Perubahan sejak 1.1.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.1...1.1.2>
[^1.1.1]: Perubahan sejak 1.1.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.0...1.1.1>
[^1.1.0]: Perubahan sejak 1.0.4: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.4...1.1.0>
[^1.0.4]: Perubahan sejak 1.0.3: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.3...1.0.4>
[^1.0.3]: Perubahan sejak 1.0.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.2...1.0.3>
[^1.0.2]: Perubahan sejak 1.0.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.1...1.0.2>
[^1.0.1]: Perubahan sejak 1.0.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.0...1.0.1>
[^1.0.0]: Rilis pertama: <https://github.com/Gelaende51/obsidian-lure/releases/tag/1.0.0>
