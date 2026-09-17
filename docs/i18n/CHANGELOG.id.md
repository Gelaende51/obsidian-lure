<!-- Terjemahan CHANGELOG.md — status: commit 973105b.
     Terjemahan mesin (Claude Opus 5), belum ditinjau penutur asli.
     Koreksi sangat diterima; CHANGELOG bahasa Inggris adalah versi acuan. -->

[English](../../CHANGELOG.md) · [العربية](CHANGELOG.ar.md) · [አማርኛ](CHANGELOG.am.md) · [Беларуская](CHANGELOG.be.md) · [বাংলা](CHANGELOG.bn.md) · [Català](CHANGELOG.ca.md) · [Čeština](CHANGELOG.cs.md) · [Dansk](CHANGELOG.da.md) · [Deutsch](CHANGELOG.de.md) · [Ελληνικά](CHANGELOG.el.md) · [Español](CHANGELOG.es.md) · [فارسی](CHANGELOG.fa.md) · [Suomi](CHANGELOG.fi.md) · [Français](CHANGELOG.fr.md) · [Gaeilge](CHANGELOG.ga.md) · [עברית](CHANGELOG.he.md) · [Magyar](CHANGELOG.hu.md) · **Bahasa Indonesia** · [Italiano](CHANGELOG.it.md) · [日本語](CHANGELOG.ja.md) · [ქართული](CHANGELOG.ka.md) · [ភាសាខ្មែរ](CHANGELOG.kh.md) · [한국어](CHANGELOG.ko.md) · [Latviešu](CHANGELOG.lv.md) · [Bahasa Melayu](CHANGELOG.ms.md) · [नेपाली](CHANGELOG.ne.md) · [Nederlands](CHANGELOG.nl.md) · [Norsk](CHANGELOG.no.md) · [Polski](CHANGELOG.pl.md) · [Português](CHANGELOG.pt.md) · [Português (Brasil)](CHANGELOG.pt-BR.md) · [Română](CHANGELOG.ro.md) · [Русский](CHANGELOG.ru.md) · [संस्कृतम्](CHANGELOG.sa.md) · [Slovenčina](CHANGELOG.sk.md) · [Shqip](CHANGELOG.sq.md) · [Српски](CHANGELOG.sr.md) · [Svenska](CHANGELOG.sv.md) · [ไทย](CHANGELOG.th.md) · [Türkçe](CHANGELOG.tr.md) · [Українська](CHANGELOG.uk.md) · [Oʻzbekcha](CHANGELOG.uz.md) · [Tiếng Việt](CHANGELOG.vi.md) · [简体中文](CHANGELOG.zh.md) · [繁體中文](CHANGELOG.zh-TW.md)

# Log perubahan

Setiap rilis Lure, yang terbaru lebih dulu. Apa yang sudah mendarat sejak rilis terakhir ada di bawah *Belum dirilis*. Versi tidak memakai awalan `v`, sesuai dengan tanda rilisnya.

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
