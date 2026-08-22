<!-- Terjemahan README.md — status: commit dc475f7.
     Terjemahan mesin (Claude Opus 5), belum ditinjau penutur asli.
     Koreksi sangat diterima; README bahasa Inggris adalah versi acuan. -->

[English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · **Bahasa Indonesia** · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

Plugin [Obsidian](https://obsidian.md) yang mengubah nama berkas di bilah judul sebuah catatan menjadi jalur lengkap melintasi vault yang bisa diklik dan disunting — seperti bilah alamat pada pengelola berkas [Dolphin](https://apps.kde.org/dolphin/).

![Klik pada pemisah setelah sebuah folder: penunjuk berada di atasnya, dan Penjelajah berkas telah menampilkan serta membentangkan folder itu](../images/breadcrumb.png)

Obsidian 1.8.7+ · hanya desktop · AGPL-3.0

## Pengungkapan AI

- **Agen** — **Claude Opus 5** dan **Claude Sonnet 5** (Anthropic, lewat Claude Code): menulis TypeScript, CSS, seluruh 45 set terjemahan, dan dokumentasinya. Terjemahan dibuat mesin dan belum ditinjau penutur asli.
- **Pemakaian** — 3–22 Agustus 2026, 22 sesi, \~11.820 balasan: \~15,4 juta token dihasilkan, \~55,5 juta dikirim, \~3644,2 juta pembacaan ulang dari singgahan (\~3715,0 juta total).
- **Hulu** — model belajar dari kode sumber terbuka, dokumentasi, dan tulisan komunitas yang diterbitkan orang lain. Sebagian besar kreditnya milik mereka.
- **Penulis** — Vault51: menentukan setiap fitur, mencoba tiap versi di vault sungguhan, mengarahkan perbaikan, meninjau seluruh hasilnya.

## Fitur

- **Klik sebuah folder** untuk menampilkan isi folder *induknya* — tukar satu folder dengan tetangganya tanpa menyentuh sisa jalurnya. Nama catatan bekerja dengan cara yang sama, termasuk ekstensinya.
- **Klik pemisah** setelah sebuah folder untuk menampilkan dan membentangkannya di Penjelajah berkas. Satu setelan menukar kedua peran itu.
- **Klik kanan atau seret entri mana pun** — menu konteks dan perilaku seret milik Penjelajah berkas sendiri.
- **Klik nama berkas atau ruang kosong** untuk mengetik jalur, dengan pelengkapan otomatis. `/` turun ke dalam, <kbd>Backspace</kbd> naik satu tingkat, <kbd>Enter</kbd> mengesahkan.
- **Tombol pensil pada folder** mengalihkan interaksi yang sama ke mode pindah/ganti nama, dengan pemeriksaan yang sama seperti yang Obsidian lakukan.
- **Tahan <kbd>Ctrl</kbd>** untuk membuka di tab baru — atau, dalam mode pindah/ganti nama, untuk menyalin catatan ke sana alih-alih memindahkannya.
- **Daftar terbuka pada entri tempat kamu berada**, dan menelusurinya dengan panah atau penunjuk mengisi bidang dengan apa yang kamu tunjuk. Melewati salah satu ujungnya, ia mengembalikan apa yang kamu ketik.
- **Nama melengkapi dirinya saat kamu mengetik** — sejauh nama-nama di folder itu sama, kesamaannya muncul setelah kursor, tersorot; <kbd>Tab</kbd> atau <kbd>→</kbd> mengambilnya utuh, <kbd>Backspace</kbd> mengembalikannya.
- **<kbd>Tab</kbd> melengkapi seperti shell**: ia memanjangkan yang kamu ketik sejauh nama-nama itu sama, dan masuk ke sebuah folder begitu tinggal satu nama. Melewati ujung jalur, ia justru memperluas pilihan: nama, nama dengan ekstensi, jalur dari vault, jalur dari akar sistem. <kbd>Shift</kbd>+<kbd>Tab</kbd> menempuh jalan yang sama ke belakang.
- **Klik kanan untuk menyalin** — dua kali untuk sebuah nama, tiga kali untuk semua yang di sebelah kanannya, dan pada ruang kosong untuk seluruh jalur atau jalur sistem.
- **Seret catatan ke sebuah folder di baris itu** untuk memindahkannya ke sana, berikut tautannya. Nama vault juga menerimanya, untuk akar; satu pilihan utuh berpindah sebagai satu, dan folder yang tak dapat menerimanya tidak menampilkan apa pun.
- **Ketik URL** — `https://`, `obsidian://`, atau jalur `file://` maupun berkode persen — dan ia dibuka alih-alih dibaca sebagai nama catatan.
- **Jalur panjang memendek di tempat hurufnya berlebih** — tak pernah melewati apa yang membedakan sebuah folder dari tetangganya — dan baru bergulir ketika tak ada lagi yang bisa dimampatkan. Tunjuk nama yang dipendekkan untuk melihatnya utuh.
- **<kbd>F2</kbd>** berganti antara judul di dalam catatan dan bilah jalur.
- **Klik nama vault** untuk menjelajahi vault Anda yang lain, folder rumah, akar sistem berkas, dan diska yang terpasang tanpa berpindah vault. Hanya-baca sampai Anda membuka gembok, dan berbingkai warna galat sepanjang waktu. Mati secara bawaan — lihat [di luar vault](#di-luar-vault).
- **Dua tingkat peringatan** — merah di luar vault, jingga untuk berkas teks yang tak punya penyunting di Obsidian. Lihat [dua warna peringatan](usage.id.md#dua-warna-peringatan).
- **Ikon yang mengikuti tema**, bisa ditukar dari potongan CSS — dan **45 bahasa**, setiap bahasa yang dibawa Obsidian.
- **Pengaturan:** perataan, pemisah siap pakai, klik mana yang membuka daftar, nama vault, berkas tersembunyi, ekstensi berkas.

![Daftar yang sama dalam mode pindah/ganti nama: nama berkas saat ini disematkan di atas, folder tetangga di bawahnya, dan catatan yang sudah ada diredupkan](../images/dropdown.png)

*Dalam mode pindah/ganti nama daftar yang sama menawarkan hal lain: nama catatan saat ini disematkan di atas agar bisa dipindahkan tanpa diganti namanya, folder tujuan pemindahan, dan nama yang sudah terpakai diredupkan supaya tak ada yang tertimpa tanpa sengaja.*

→ [Panduan penggunaan lengkap](usage.id.md)

## Di luar vault

Kebijakan pengembang Obsidian mewajibkan sebuah plugin menjelaskan setiap akses ke berkas di luar vault, jadi terus terang saja:

**Apakah ia melakukan semua ini sama sekali.** Hanya jika Anda menyalakan **Akses berkas eksternal**, yang **mati secara bawaan**. Dengan setelan itu mati, tak ada jalan dari plugin menuju jalur eksternal mana pun, dan tak satu pun kode di bawah ini pernah berjalan.

**Apa yang ia baca.** Hanya ketika Anda memintanya. Mengklik nama vault akan mendaftar vault Anda yang lain — dibaca dari `obsidian.json` milik Obsidian sendiri — ditambah folder rumah, akar sistem berkas, dan diska yang terpasang (`/proc/mounts` di Linux, `/Volumes` di macOS, huruf diska di Windows). Menjelajah dari sana mendaftar isi direktori, dan membuka sebuah berkas membaca berkas itu saja.

**Apa yang ia tulis.** Tidak ada, sampai Anda menekan tombol yang menyatakannya. Ada dua tombol semacam itu, dan masing-masing hanya mencakup wilayahnya sendiri:

- Tombol **Edit sebagai teks** pada penampil membuka kunci berkas di hadapan Anda, berkas itu saja di tab itu saja. Sesudahnya suntingan Anda tersimpan ke dalamnya sembari Anda mengetik.
- **Gembok** di bilah judul, yang hanya tampak selagi bilah jalur menunjuk ke luar vault, membuka kunci pembuatan, penggantian nama, dan pemindahan pada jalur eksternal. Ia terkunci lagi begitu Anda kembali ke dalam, sehingga izin itu tak pernah hidup lebih lama daripada folder yang Anda beri izin.

Kedua pembukaan kunci itu tidak disimpan di ruang kerja maupun di pengaturan, jadi penulisan tak pernah terpasang siap pada berkas yang tak Anda ingat pernah dibuka. Pada kedua keadaan itu tak ada yang ditimpa — sasaran yang sudah ada ditolak, memakai pembuatan eksklusif milik sistem berkas sendiri alih-alih pemeriksaan yang bisa kalah dalam adu cepat — dan sebuah catatan tak pernah bisa *dipindahkan* keluar dari vault Anda, sebab tautan yang menuju ke sana akan putus diam-diam; menahan <kbd>Ctrl</kbd> menyalinnya ke luar sebagai gantinya.

**Mengapa.** Catatan yang Anda cari sering ada di vault lain, di folder sinkronisasi, atau di flashdisk, sementara jawaban Obsidian sendiri — berpindah vault — menutup semua yang sedang Anda buka. Ini membiarkan Anda pergi melihat tanpa beranjak, dan membetulkan salah ketik selagi di sana.

**Batasannya.** Penyunting Obsidian terikat pada berkas di dalam vault, jadi berkas eksternal **tidak bisa** dibuka sebagai catatan sungguhan, lengkap dengan tautan, tautan balik, dan selebihnya; tak ada plugin yang bisa. Lure menampilkannya di penampilnya sendiri (Markdown, gambar, audio, video, PDF), dengan *Buka di luar* untuk segala yang lain. Bilah jalur tetap berbingkai warna galat selama ia menunjuk ke luar vault Anda, dan jejaknya dimulai dari tempat yang Anda pilih — sebuah nama vault, folder rumah Anda, sebuah diska — bukan dari susunan direktori mesin itu.

## Pemasangan

Terdaftar di [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure), tetapi belum disetujui untuk penjelajah di dalam aplikasi — jadi pasang dengan salah satu cara ini:

**Manual:** unduh `main.js`, `manifest.json`, dan `styles.css` dari [rilis terbaru](https://github.com/Gelaende51/obsidian-lure/releases) ke `<vault>/.obsidian/plugins/lure/`, lalu nyalakan di **Pengaturan → Plugin komunitas**.

**BRAT:** tambahkan `Gelaende51/obsidian-lure` sebagai plugin beta.

**Dari sumber:** `npm install && npm run build` — lihat [pengembangan](../development.md).

## Kecocokan

Tak ada plugin yang diperlukan. **Penjelajah berkas** bawaan, kalau menyala, adalah yang menampilkan folder di bilah sisi; tanpanya klik-klik itu tak melakukan apa pun.

Diuji terhadap plugin komunitas yang berbagi bilah judul catatan atau menanggapi klik pada folder — pada kedua urutan pemuatan, masing-masing menyala dan mati:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — pemisah membuka catatan folder alih-alih menampilkan foldernya, sehingga setiap ruas jalur menjadi tempat yang bisa dituju. Satu-satunya plugin catatan folder yang mengambil alih jalur di bilah judul; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) dan [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) tidak menyimak di sana, jadi pemisah menampilkan folder seperti biasa.
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer) dan [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — keduanya menggambar ke elemen bilah judul yang sama; Lure mempertahankan barisnya siapa pun yang dimuat lebih dulu, dan mematikan salah satunya membiarkan yang lain utuh.
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header), [Running Head](obsidian://show-plugin?id=running-head), [Crumbs](obsidian://show-plugin?id=crumbs-obsidian), [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — punya jalurnya sendiri, dan hidup berdampingan tanpa masalah.

Hanya desktop — model interaksinya menuntut arahan tetikus, klik yang tepat, dan papan ketik. Hasil lengkap, apa yang masih perlu diuji, dan perbandingan dengan Quick Explorer serta Breadcrumbs ada di [kecocokan](../compatibility.md).

## Berkontribusi

- Laporan masalah dan pull request diterima dengan senang hati — terutama **koreksi terjemahan**, karena seluruh 45 bahasa diterjemahkan mesin dan belum ditinjau penutur asli. Lihat [pengembangan](../development.md) untuk penyiapan dan aturan dasarnya.
- **Pelacak masalah:** https://github.com/Gelaende51/obsidian-lure/issues
- **Donasi:** [Ko-fi](https://ko-fi.com/vault51). Plugin ini tetap gratis dan berlisensi AGPL bagaimanapun juga; tip dihargai dan tak pernah diminta. Tujuan yang dimaksudkan adalah imbangan karbon — sebuah niat, bukan janji: tak ada yang diimbangi sampai jumlahnya sepadan dengan repotnya, dan baris ini akan mengatakannya begitu ada yang benar-benar sudah diimbangi.

## Penghargaan

- **Vault51** — penulis: rancangan, kebutuhan, dan pengujian manual dari awal sampai akhir.
- **Claude Opus 5** dan **Claude Sonnet 5** (Anthropic, lewat Claude Code) — penerapan, terjemahan, dan dokumentasi, di bawah arahan penulis. Lihat [pengungkapan AI](#pengungkapan-ai).
- **[Obsidian](https://obsidian.md)** — aplikasi yang diperluas ini, sekaligus sumber setiap komponen yang dipakai plugin: API plugin-nya, set ikon Lucide di balik `setIcon`, instans i18next bawaan tempat label menu konteks dibaca, serta kelas dan variabel CSS-nya sendiri. Tak ada apa pun dari pihak ketiga yang ikut dibundel; plugin ini **tanpa dependensi saat berjalan**.

> **Tim Obsidian sama sekali tidak ikut serta dalam proyek ini** — mereka tidak menulis, meninjau, mendukung, maupun menyokongnya. Obsidian adalah merek dagang Dynalist Inc.; ini plugin mandiri yang tak berafiliasi.

Para kontributor akan didaftar di sini seiring sumbangan berdatangan.

## Tautan

- **Dokumentasi:** [docs/](../)
- **Halaman plugin:** https://community.obsidian.md/plugins/lure
- **Kehadiran web / sumber:** https://github.com/Gelaende51/obsidian-lure
- **Donasi:** [Ko-fi](https://ko-fi.com/vault51) — lihat [berkontribusi](#berkontribusi).
- **Lisensi:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. Cabangan dan hasil bangun yang disebarkan ulang wajib merilis sumbernya dengan lisensi yang sama.
