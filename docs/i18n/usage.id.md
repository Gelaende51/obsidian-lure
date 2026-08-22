<!-- Terjemahan docs/usage.md — status: commit 33b0e60.
     Terjemahan mesin (Claude Opus 5), belum diperiksa penutur asli.
     Label plugin berasal dari src/lang/translations.ts, sedangkan
     label Obsidian berasal dari teks yang dikirimkan aplikasi itu
     sendiri, jadi cocok dengan yang tampil di layar. -->

[English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · [Čeština](usage.cs.md) · [Dansk](usage.da.md) · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · **Bahasa Indonesia** · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · [Norsk](usage.no.md) · [Polski](usage.pl.md) · [Português](usage.pt.md) · [Português (Brasil)](usage.pt-BR.md) · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

# Penggunaan

[← kembali ke README](README.id.md)

> **Panduan ini menjelaskan Lure 1.0.** Delapan bagian yang ditambahkan sejak itu — di antaranya pelengkapan dengan <kbd>Tab</kbd>, penghitungan klik kanan, menyeret catatan ke folder di baris, dan apa yang terjadi ketika jalur lebih panjang daripada panel — untuk sementara hanya ada di [panduan bahasa Inggris](../usage.md).

## Jalur di bilah judul

Jalur lengkap catatan di dalam vault menggantikan nama berkas polos di bilah judul tampilan — baris di bawah deretan tab, yang juga memuat tombol maju/mundur.

Dua hal di baris itu bisa diklik, dan **Nama folder membuka daftar** menentukan mana yang melakukan apa:

| | Nama folder | Pemisah sesudahnya |
| --- | --- | --- |
| **Aktif** (bawaan) | Memilih folder itu untuk disunting | Membuka folder |
| **Nonaktif** | Membuka folder | Turun ke dalam folder itu |

"Membuka folder" berarti apa pun yang dilakukan klik pada segmen itu di Obsidian polos. Tanpa plugin yang menyimak di sana, folder ditampilkan di bilah sisi Penjelajah berkas — disorot, dan dibentangkan untuk memperlihatkan isinya.

Dengan [Folder notes](obsidian://show-plugin?id=folder-notes) terpasang, klik yang sama justru membuka catatan folder tersebut. Itu satu-satunya plugin catatan folder yang ditemukan mengklaim jalur di bilah judul; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) dan [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) mengelola catatan folder tetapi tidak menyimak klik pada jalur, jadi dengan keduanya pemisah menampilkan folder seperti biasa. Lihat [kompatibilitas](../compatibility.md#verified-against).

Pemisah **digarisbawahi hanya bila folder sebelumnya benar-benar punya catatan folder**, sehingga garis bawah itu janji bahwa ada sesuatu untuk dibuka. Setiap pemisah tetap bisa diklik bagaimanapun juga — yang tanpa garis bawah menampilkan dan membentangkan foldernya di bilah sisi, dan kursor penunjuk tetap memberi isyarat itu. Garis bawah berpindah dari nama folder pada saat yang sama: dengan pertukaran aktif, nama membuka daftar, jadi menandainya sebagai tautan ke catatan akan menjadi kebohongan.

**Mode ubah nama/pindah menimpa keduanya**, apa pun kata pengaturannya: tidak ada di baris itu yang membuka folder selama pemindahan tertunda, karena membukanya akan membatalkan pemindahan. Nama folder dipilih untuk disunting dan pemisah turun — keduanya cara memilih tujuan — dan garis bawah menghilang untuk menunjukkan bahwa pembukaan ditangguhkan.

**Akar vault** adalah satu-satunya segmen yang bukan segmen jalur. Ia tidak punya induk untuk mendaftar saudaranya, jadi ia malah membuka [daftar lokasi](#menjelajah-di-luar-vault) — vault Anda yang lain, folder pribadi, akar sistem berkas, dan drive yang terpasang.

## Mengeklik satu segmen: tukar dengan saudaranya

Mengeklik nama folder memilih **nama folder itu** di dalam kolom teks dan membuka daftar folder **satu tingkat di atasnya** — induknya. Mengetik atau memilih entri menukar folder ini dengan saudaranya dan membiarkan semua di bawahnya tak tersentuh, jadi `Projects/2026/Kickoff.md` → klik `2026` → pilih `2025` menghasilkan `Projects/2025/Kickoff.md`.

Mengeklik **nama catatan** bekerja dengan cara sama terhadap foldernya sendiri, dan memilih nama berkas **termasuk ekstensinya** — mengubah nama atau mengarahkan ulang catatan biasanya berarti mengubah itu juga.

Mengeklik folder sudah memilih satu segmen, jadi **satu klik lagi** melebarkan pilihan ke seluruh baris — folder itu *dan* semua di bawahnya — dan mengetik lalu menggantikan sisa jalur sekaligus. Bekerja sama saja dalam navigasi maupun mode ubah nama/pindah.

Itu hanya berlaku sebagai kelanjutan dari klik yang membuka kolom. Begitu Anda memakai kolomnya, ia berperilaku seperti kolom teks lain: klik menempatkan kursor, klik ganda mengambil satu kata, klik tiga kali mengambil satu baris.

Bagaimanapun sisa jalur tetap terlihat di sekitar kolom, sebagai kepingan di depannya dan teks tak terpilih sesudahnya, jadi jalur lengkap tak pernah hilang dari bilah judul. Ketik untuk mengganti pilihan, atau tekan <kbd>End</kbd> / <kbd>→</kbd> untuk mempertahankannya dan menyunting dari sana. Daftar menampilkan seluruh folder tak peduli apa yang terisi otomatis; ia baru mulai menyaring ketika Anda benar-benar mengetik.

## Turun lewat pemisah

Mengeklik pemisah (dengan **Nama folder membuka daftar** nonaktif) turun ke folder sebelumnya: daftar menampilkan isi folder *itu*, dan sisa jalur terbuka dalam keadaan terpilih di kolom. Memilih folder menambahkannya ke jejak jalur dan langsung membuka daftar berikutnya, jadi Anda bisa mengeklik turun sebuah pohon tanpa meninggalkan baris judul.

## Entri daftar adalah baris pengelola berkas sungguhan

Setiap berkas dan folder dalam daftar berperilaku seperti barisnya di Penjelajah berkas:

- **Klik kanan** untuk menu konteks yang sama — *Catatan baru* / *Folder baru* pada folder, *Buka di tab baru* / *Ubah nama* / *Hapus* pada berkas — termasuk entri yang ditambahkan plugin lain ke menu berkas.
- **Seret** entri ke mana pun Obsidian menerima berkas: ke dalam editor untuk menyisipkan tautan, ke folder di Penjelajah berkas untuk memindahkannya, ke bilah tab untuk membukanya.

Kata-kata menu berasal dari terjemahan Obsidian sendiri, jadi cocok dengan sisa aplikasi dalam setiap bahasa.

## Mengetik jalur

- Mengeklik **ruang kosong** sebelum atau sesudah kepingan membuka kolom teks yang terisi seluruh jalur dan sepenuhnya terpilih — ketik menimpanya, atau sunting di tempat. (Mengeklik nama berkas itu sendiri hanya memilih nama berkasnya; lihat di atas.)
- Mengetik saat jejak kepingan sedang tampil mengubah segmen terakhir menjadi kolom kecil dengan pelengkapan otomatis langsung yang terbatas pada folder saat ini.
- `/` mengukuhkan segmen saat ini dan turun ke dalamnya.
- <kbd>Backspace</kbd> pada kolom kosong melangkah kembali ke folder induk, membuka lagi namanya dengan kursor di akhir.
- <kbd>Enter</kbd> mengukuhkan; <kbd>Esc</kbd> atau klik di tempat lain membatalkan kembali ke jalur berkas yang sebenarnya.

Kolomnya tanpa hiasan — tanpa kotak, tanpa garis tepi — jadi terbaca sebagai teks jalur itu sendiri, dan tumbuh sendiri saat Anda mengetik.

## Navigasi tak pernah menyentuh berkas yang terbuka

Dalam mode bawaan (navigasi) catatan yang sedang terbuka **tak pernah** diubah namanya atau dipindahkan.

- Jalur yang cocok dengan berkas yang ada akan membukanya.
- Jalur yang belum ada memunculkan *"Buat berkas baru?"*. Mengonfirmasi akan membuat folder induk yang hilang beserta berkasnya; membatalkan tidak melakukan apa pun.

## <kbd>Ctrl</kbd> — tab baru, dan menyalin alih-alih memindahkan

Menahan <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> di macOS) saat memilih berkas dari daftar, atau saat menekan <kbd>Enter</kbd> pada sebuah jalur, mengirim hasilnya ke **tab baru** alih-alih ke tab ini:

| | Biasa | Dengan <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Pilih atau ketik berkas yang ada | Terbuka di sini | Terbuka di tab baru |
| Ketik jalur yang tidak ada | Bertanya, lalu terbuka di sini | Bertanya, lalu terbuka di tab baru |
| Kukuhkan jalur dalam mode ubah nama/pindah | **Memindahkan** catatan ke sana | **Menyalinnya** ke sana dan membuka salinannya di tab baru |

Tombol pengubah dibaca dengan aturan Obsidian sendiri, jadi ia berperilaku persis seperti pada tautan atau baris Penjelajah berkas — klik tengah juga berarti "tab baru", <kbd>Ctrl</kbd>+<kbd>Alt</kbd> berarti panel terbelah, dan <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> jendela baru.

Penyalinan menolak menimpa, persis seperti pemindahan — termasuk ke jalur catatan itu sendiri, yang tak ada gunanya disalin.

## Menjelajah di luar vault

**Ini nonaktif secara bawaan.** Aktifkan dulu **Akses berkas eksternal** di pengaturan — membaca dan menulis di luar vault adalah satu-satunya hal yang dilakukan plugin ini dan tidak dilakukan Obsidian sendiri, jadi Anda memilih masuk ke sana alih-alih keluar darinya. Bila nonaktif, nama vault sekadar menampilkan vault Anda di Penjelajah berkas, dan tak ada apa pun di sini yang melihat melampauinya.

Mengeklik **nama vault** (atau ikon 🏠, saat *Tampilkan nama vault* nonaktif) membuka daftar tempat alih-alih isi:

- **Vault Anda yang lain**, dibaca dari registri Obsidian sendiri, yang terakhir dibuka lebih dulu, masing-masing di bawah ikon vault milik Obsidian sendiri — ikon yang dipakai aplikasi untuk perintah vault. Vault yang sudah Anda buka mendapat rumah: itulah titik awal baris ini secara bawaan, bukan tempat untuk dituju.
- **Folder pribadi**, di bawah nama akun Anda, ditandai `~`. Lucide tidak punya tilde, jadi yang satu ini digambar oleh plugin di atas kisi 24×24 milik Lucide dengan ketebalan garis yang sama — ikon yang belum ada di set itu, bukan karakter teks yang duduk di antara ikon.
- **Akar sistem berkas**, berlabel `root` — tak diterjemahkan, karena itulah namanya di setiap sistem — alih-alih `/`, yang akan terbaca sebagai langkah kosong di sebelah pemisah yang mengikutinya.
- **Drive terpasang**, dengan ikon per jenis bila itu murah untuk ditentukan: berbagi jaringan, cakram optik, disket, dan media lepasan mendapat ikonnya sendiri; selebihnya mendapat drive umum. Di Windows drive tampil sebagai `C:` dengan ikon umum — nama volume dan jenis persisnya butuh WMI, yang sengaja tidak dilakukan.

Memilih vault lain **tidak memindahkan Obsidian ke sana.** Semua yang Anda buka tetap terbuka; jalurnya sekadar mulai menjelajah di sana. Itulah seluruh gunanya menaruhnya di bilah jalur alih-alih menyerahkannya ke pengalih vault di bilah sisi.

### Selagi Anda di luar

Jalur **dimulai dari lokasi yang Anda pilih**, bukan dari tata letak direktori mesin — pilih `Archive` dan barisnya terbaca `Archive / notes / …`, bukan `/home/anda/Vaults/Archive/notes/…`. Segmen terdepan membawa ikon sesuai jenisnya (vault, folder pribadi, drive), dan <kbd>Backspace</kbd> berhenti di situ alih-alih terus naik ke sisa sistem berkas. Dengan *Tampilkan nama vault* nonaktif, segmen itu hanyalah ikonnya — pengaturan ini soal segmen pembuka baris, vault mana pun yang dinamainya, bukan hanya vault Anda sendiri.

Bilah jalur **dibingkai dengan warna galat** — cincin yang sama yang digambar mode ubah nama — selama ia menunjuk ke luar vault Anda. Ia menandai kondisi yang menetap, bukan momen: selama ia ada, tak satu pun penanganan Obsidian sendiri berlaku pada apa yang ditampilkan baris itu, dan penulisan terkunci sampai Anda berkata lain.

Selebihnya penjelajahan bekerja seperti di dalam: kepingan, pemisah, pengetikan, pelengkapan otomatis, <kbd>Backspace</kbd> untuk melangkah keluar. Aturan keterlihatan yang sama juga berlaku, jadi ekstensi tak didukung tetap butuh *Deteksi semua ekstensi berkas* milik Obsidian dan berkas titik tetap butuh pengaturan plugin ini.

**Klik kanan dan seret** pada entri daftar tidak bekerja di luar sana — itu penangan milik Penjelajah berkas sendiri, dan mereka butuh berkas yang dikenali vault.

### Menulis di luar vault

Segala yang menulis **terkunci secara bawaan**. **Gembok** muncul di sebelah sakelar ubah nama di bilah judul selama baris menunjuk ke luar vault Anda; menekannya membuka kuncinya dan ia memerah, senada dengan cincin di sekeliling baris.

Izin diberikan **kepada sebuah lokasi, bukan kepada sebuah momen**: ia bertahan melewati semua yang akan Anda lakukan saat bekerja di satu tempat — menyelesaikan pemindahan, mengeklik keluar dari kolom, membuka berkas — dan berakhir saat Anda memilih vault, drive, atau akar lain dari daftar, saat baris kembali ke berkas vault, atau saat Anda menekan gembok lagi. Jadi serangkaian pemindahan di dalam satu folder cukup satu tekan, bukan satu per berkas.

Dengan gembok terbuka, bilah jalur berperilaku di luar sana seperti di dalam:

| Tindakan | Hasil |
| --- | --- |
| Ketik nama yang tidak ada, <kbd>Enter</kbd> | Pertanyaan "buat?" yang sama seperti di dalam; folder induk yang hilang ikut dibuat. Nama tanpa ekstensi menjadi `.md`, persis seperti di dalam |
| Mode ubah nama/pindah, ketik nama baru | Mengubah nama berkas yang sedang ditampilkan baris. Nama tanpa ekstensi mempertahankan ekstensi berkas itu — di luar sini satu folder memuat segala jenis berkas, dan penggantian nama tak boleh diam-diam mengubah `.png` menjadi `.md` |
| Mode ubah nama/pindah, jelajah ke tempat lain, pilih **pertahankan nama ini** | Memindahkannya ke sana dengan nama yang sudah dipakainya |
| Tahan <kbd>Ctrl</kbd> pada keduanya | Menyalin alih-alih memindahkan, dan membuka salinannya di tab baru |

Dalam keadaan terkunci, semua itu melaporkan apa yang menghalanginya alih-alih terjadi. Tak ada yang pernah ditimpa dalam kedua keadaan: sasaran yang sudah ada ditolak, dan penolakannya adalah penolakan sistem berkas itu sendiri (`COPYFILE_EXCL`, pembuatan eksklusif) alih-alih pemeriksaan yang bisa kalah balapan. Pemindahan lintas sistem berkas — dari flash disk, dari berbagi jaringan — jatuh ke salin-lalu-hapus, dan aslinya baru dihapus setelah salinannya mendarat.

**Satu hal yang tidak dibuka gembok: memindahkan catatan *keluar* dari vault Anda.** `fileManager` tak bisa mengikuti berkas melewati batas itu, jadi setiap tautan ke catatan itu akan putus diam-diam dan Obsidian sekadar melihatnya lenyap. Menahan <kbd>Ctrl</kbd> justru menyalinnya keluar, yang tak punya masalah itu, dan pemberitahuannya mengatakan demikian. Arah sebaliknya — membawa berkas luar *masuk* ke vault — juga belum dirangkai.

### Membuka berkas eksternal

Editor Obsidian hanya bekerja pada berkas di dalam vault, jadi berkas eksternal **tidak dapat** dibuka sebagai catatan sungguhan dengan tautan, tautan balik, dan sebagainya — itu batas aplikasi, bukan batas plugin ini. Memilih satu justru membuka **pratinjau**, hanya-baca sampai Anda berkata lain:

| Jenis | Ditampilkan sebagai |
| --- | --- |
| `.md`, `.markdown` | Markdown terenderkan |
| Gambar, audio, video, PDF | Pemutar/penampil bawaan |
| Berkas **teks** lainnya (`.json`, `.css`, `.log`, `.txt`, …) | Teks polos apa adanya |
| Format biner tanpa penampil (`.zip`, `.exe`, …) | Diserahkan ke *Buka di luar* |

Penampil punya dua pembacaan atas sebuah berkas, dan karena keduanya saling meniadakan, hanya yang akan Anda **tuju** yang ditampilkan:

| | Apa yang dilakukan | Bawaan untuk |
| --- | --- | --- |
| **Lihat sebagai Markdown** | Merender berkas sebagai catatan, hanya-baca | `.md`, `.markdown` |
| **Edit sebagai teks** | Sumbernya, dapat disunting | segala yang lain |

Di luar vault, **Edit sebagai teks** sekaligus tekanan yang mengangkat hanya-baca — modenya dan izinnya satu gerakan, bukan dua tombol untuk dipikirkan. Ia diwarnai merah **setiap kali menekannya akan mengangkat hanya-baca**, entah Anda menyiapkan penyuntingan di tempat atau datang langsung dari tampilan terenderkan; di dalam vault tak ada yang perlu dibuka, jadi ia tetap polos. **Lihat sebagai Markdown** mendapat sapuan aksen tipis — rona yang sama yang diberikan Obsidian pada teks terpilih — menandainya sebagai jalan kembali, bukan ajakan bertindak.

Karena tombol mengikuti *penyuntingan* alih-alih mode mentahnya, berkas yang duduk hanya-baca di tampilan teks tetap menawarkan **Edit sebagai teks**: itulah tekanan yang menyiapkannya. Berkas yang tak akan pernah bisa diketik — terpotong, atau tak terbaca — malah berbunyi **Lihat sebagai teks**, karena hanya itu yang bisa diberikan tekanan itu.

Bawaannya dibuat berguna alih-alih harfiah: `#` dalam skrip shell adalah komentar, bukan judul, jadi merender `.log` sebagai Markdown akan menelannya diam-diam. Kedua bawaan bisa ditimpa per berkas, dan pilihannya masuk ke riwayat panel, jadi maju/mundur dan ruang kerja yang dibuka ulang mempertahankannya — banyak catatan hidup dalam berkas `.txt`, dan banyak berkas `.md` lebih mudah dibaca sebagai sumber.

**Berkas di dalam vault Anda langsung dapat disunting**, tanpa membuka kunci: *Edit sebagai teks* adalah editor sungguhan dan menulis balik sambil Anda mengetik.

**Penyuntingan diingat lintas peralihan.** Beralih ke *Lihat sebagai Markdown* menangguhkannya — render statis tak punya tempat untuk diketik, dan Live Preview butuh editor Obsidian sendiri, yang hanya ada untuk berkas di dalam vault — jadi tak ada yang mengaku Anda sedang menyunting selama di sana. Kembali ke *Edit sebagai teks* melanjutkan dari tempat Anda berhenti.

**Berkas di luar vault terbuka hanya-baca, dan *Edit sebagai teks* mengangkatnya.** Tekanan itulah seluruh gerbangnya: sampai ia terjadi, tak ada apa pun di luar sana yang ditulis. Sesudahnya berkas tersimpan sambil Anda mengetik, persis seperti berkas di dalam vault; dan baris status berubah dari gembok menjadi pensil. Pembukaan kunci itu mencakup satu berkas itu di satu tab itu — berpindah ke berkas lain mengunci lagi, dan itu sengaja tidak disimpan dalam riwayat tab, jadi ruang kerja yang dibuka ulang tak pernah kembali dengan penulisan sudah siap pada berkas sistem yang tak Anda ingat pernah dibuka.

**Berkas terpotong tetap hanya-baca apa pun keadaannya** — menyimpan apa yang di layar akan membuang semua yang melampaui batas, jadi tombolnya tidak ditawarkan sama sekali alih-alih ditawarkan lalu ditolak. Hal yang sama berlaku untuk berkas yang gagal dibaca: tak ada yang bisa ditulis balik selain panel kosong.

Jika penulisan gagal — kaitan hanya-baca, berkas yang bukan milik Anda — alasan sistem itu sendiri ditampilkan dalam pemberitahuan.

Berkas yang sangat besar ditampilkan terpotong, dan baris status mengatakannya alih-alih membiarkan Anda mencari tahu sendiri — bersama kondisi lainnya alih-alih membuntuti tombol, karena itu fakta tentang berkas seperti fakta yang lain. Batasnya diukur terhadap perender sungguhan alih-alih ditebak — menata satu megabita teks dalam satu panel langsung membunuh proses render Obsidian, dan Markdown berbiaya beberapa kali lipat per bita dibanding teks polos, jadi keduanya punya batas terpisah dan satu baris raksasa dipendekkan bahkan ketika berkasnya secara keseluruhan kecil.

**Baris status adalah label, dan penjelasannya adalah tooltip.** Setiap baris menyatakan apa yang benar dengan sesedikit mungkin kata — *Di luar vault*, *Tidak ada editor untuk tipe berkas ini*, *Dipotong — berkas terlalu besar* — karena tombol di sebelahnya sudah mengatakan berkasnya dalam keadaan apa. Mengarahkan penunjuk ke salah satunya memberi kalimatnya: mengapa Obsidian tak bisa membukanya sebagai catatan, apa yang jika tidak akan terjadi pada jenis berkas ini, apa yang hilang karena pemotongan.

Ini juga berlaku untuk berkas **di dalam** vault Anda. Obsidian menyerahkan ekstensi apa pun yang tak punya tampilannya langsung ke aplikasi bawaan desktop — jadi `.txt` atau `.json` di dalam vault Anda akan meninggalkan Obsidian sama sekali. Berkas-berkas itu kini terbuka di penampil yang sama, dengan cincin oranye, karena "buka di Obsidian" itulah yang Anda minta — dan karena berkas vault, mereka dapat disunting di sana tanpa pembukaan kunci apa pun. Berkas biner tanpa penampil tetap mengikuti perilaku Obsidian; tak ada yang bisa ditampilkan.

Pratinjau terbuka **di tab tempat Anda berada**, jadi maju/mundur mengembalikan Anda ke catatan asal; tahan <kbd>Ctrl</kbd> untuk tab baru seperti di tempat lain. Bilah judul tetap menampilkan jalur berkas eksternal selama ia terbuka, jadi Anda bisa melanjutkan penjelajahan dari sana.

Sebaris tenang di atas isi menawarkan jalan keluarnya:

- **Buka di *(vault)*** — tampil bila berkas itu milik salah satu vault Anda yang lain. Menyerahkannya ke penangan URI milik Obsidian sendiri, yang membuka jendela vault itu dengan catatannya di dalam, sebagai catatan sungguhan yang dapat disunting. Jendela ini dibiarkan persis seperti sedia kala; tak ada yang beralih di bawah Anda.
- **Lihat sebagai Markdown** / **Edit sebagai teks** — dua pembacaannya; yang kedua sekaligus mengangkat hanya-baca di luar vault.
- **Buka di luar** — menyerahkan berkas ke aplikasi bawaan desktop Anda, termasuk format biner yang tak bisa ditampilkan penampil ini.

Tak ada apa pun di luar vault Anda yang ditulis kecuali Anda menekan *Edit sebagai teks* lebih dulu. Lihat bagian [Di luar vault](README.id.md#di-luar-vault) pada README untuk pengungkapan lengkapnya.

## Dua warna peringatan

| | Kapan | Artinya |
| --- | --- | --- |
| Cincin **merah** pada bilah jalur | Baris menunjuk ke luar vault Anda | Obsidian tak bisa membuka yang ada di sana sebagai catatan, dan tak ada apa pun di luar sana yang ditulis sampai Anda membuka gemboknya. |
| Cincin **oranye** pada bilah jalur, entri oranye dalam daftar | Berkasnya bertipe teks yang tak punya tampilan di Obsidian | Peringatan. Obsidian akan menyerahkannya ke aplikasi bawaan desktop Anda; plugin ini justru menampilkannya. |

**Keduanya saling bebas, dan keduanya bisa berlaku sekaligus** — sebuah `.json` eksternal berada di luar vault Anda *dan* bertipe yang tak punya editor di Obsidian. Di penampil keduanya muncul sebagai baris terpisah, masing-masing hanya menyatakan faktanya sendiri. Pada bilah jalur, merah menang di mana keduanya berlaku, karena dua cincin hanya akan jadi gangguan.

Tingkat oranye sengaja dibuat sempit. Tipe terdaftar (Markdown, canvas, gambar, PDF, audio, video) ditangani sebagaimana mestinya dan tidak mendapat apa-apa. Berkas biner juga tidak — Anda takkan tak sengaja mengacak-acak sebuah `.zip`. Yang tersisa persis bahayanya: `.json`, `.css`, atau `.log` yang telah dibuat terlihat oleh **Deteksi semua ekstensi berkas**.

Merah menang di mana keduanya akan berlaku; dua cincin sekaligus hanya akan jadi gangguan.

## Mode pindah/ubah nama

Tombol pensil di ujung kanan bilah judul — di sebelah tombol mode tampilan, seukuran tombol bawaan — mengalihkan mode pindah/ubah nama. Baris judul lalu dibingkai dengan warna aksen, persis seperti mengubah nama di Penjelajah berkas. Klik dan tombol yang sama kini mengukuhkan pemindahan atau penggantian nama lewat `fileManager.renameFile` milik Obsidian, sehingga semua tautan ke catatan itu ikut menyesuaikan.

Selagi mengubah nama:

- Nama berkas saat ini disematkan di daftar setiap folder, jadi memindahkan catatan tanpa mengubah namanya cukup satu klik.
- Nama yang sudah terpakai di folder tujuan diredupkan tetapi tetap bisa dipilih.
- Masukan divalidasi secara langsung terhadap aturan penggantian nama milik Obsidian sendiri — himpunan karakter yang sama, pesan yang sama, tooltip merah yang sama seperti saat mengubah nama di pohon berkas — jadi nama yang terlarang atau bentrok ditandai sambil Anda mengetik dan tak bisa dikukuhkan.
- Mengeklik di luar bilah judul, atau bilah judul kehilangan fokus, mengakhiri mode ubah nama.

## Satu tombol untuk kedua penggantian nama

Perintah ubah nama (<kbd>F2</kbd> secara bawaan, atau apa pun yang Anda tetapkan) **berselang-seling** antara penggantian judul sebaris milik Obsidian dan bilah jalur di bilah judul plugin ini dengan jalur lengkap terpilih. Jika Anda mematikan judul sebaris Obsidian, bilah jalur menjadi satu-satunya sasaran, jadi tombol itu tak pernah tak melakukan apa-apa.

Ini bekerja dengan membungkus perintah `workspace:edit-file-title` alih-alih merebut tombolnya, jadi mengubah pintasan maupun menjalankan perintah dari palet sama-sama bekerja tanpa perubahan.

## Bagaimana entri daftar diwarnai

| Warna | Artinya |
| --- | --- |
| **Ungu** | Sebuah catatan (`.md`, `.markdown`) — yang akan dibuka Obsidian sebagai catatan, dipisahkan dari folder berisi campuran |
| **Oranye** | Tipe teks yang tak punya tampilan di Obsidian; lihat [warna peringatan](#dua-warna-peringatan) |
| **Redup** | Di luar vault Anda, jadi penanganan vault sendiri tak berlaku |
| **Biru** | Catatan yang sedang kamu buka. Saat menjelajah itu entrinya sendiri; dalam mode ubah nama/pindah, entri *pertahankan nama ini* menggantikannya — catatan yang sama di kedua kasus |
| **Kelabu** | Hanya dalam mode ubah nama/pindah: namanya sudah terpakai. Tetap bisa dipilih — memilihnya mengisi kolom, tempat validasi menandai bentrokannya |

## Aturan keterlihatan

- Berkas dengan ekstensi tak didukung muncul di daftar hanya jika pengaturan **Deteksi semua ekstensi berkas** milik Obsidian aktif.
- Daftar menampilkan paling banyak 100 entri — batas Obsidian sendiri. Bila folder punya lebih, baris terakhir menyebutkan berapa yang tak tertampil; teruslah mengetik untuk mempersempitnya.
- Berkas dan folder titik muncul hanya jika pengaturan **Tampilkan berkas tersembunyi** milik plugin ini aktif.
- **Perlindungan penimpaan bekerja sama saja tak peduli keterlihatan** — berkas tersembunyi tetap menghalangi Anda menimpanya.

## Ringkasan

| Anda ingin… | Lakukan ini |
| --- | --- |
| Membuka folder (catatannya, atau menampilkannya) | Klik pemisah **sesudah** folder itu |
| Menukar folder dengan saudaranya | Klik nama folder itu, lalu ketik atau pilih |
| Mengubah nama atau mengarahkan ulang catatan | Klik nama catatan — termasuk ekstensinya |
| Menjelajahi isi sebuah folder | Klik nama folder itu; daftar menampilkan induknya, jadi klik folder **di bawah** yang Anda inginkan |
| Mengetik ulang folder beserta semua di bawahnya | **Klik ganda** nama folder itu, lalu ketik |
| Menyunting jalur dari sebuah folder ke bawah | Klik nama folder itu, lalu <kbd>End</kbd> atau <kbd>→</kbd> untuk membatalkan pilihan |
| Melompat ke berkas dengan mengetik jalurnya | Klik nama berkas atau ruang kosong, ketik, <kbd>Enter</kbd> |
| Membuka berkas di tab baru | <kbd>Ctrl</kbd> sambil memilihnya, atau <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| Menyalin catatan ke suatu tempat alih-alih memindahkannya | Pensil, lalu <kbd>Ctrl</kbd> sambil memilih atau mengukuhkan tujuan |
| Membuat catatan di jalur yang belum ada | Ketik jalurnya, <kbd>Enter</kbd>, konfirmasi pertanyaannya |
| Turun satu tingkat sambil mengetik | Ketik `/` |
| Naik satu tingkat sambil mengetik | <kbd>Backspace</kbd> pada kolom kosong |
| Memindahkan atau mengubah nama catatan yang terbuka | Klik pensil, lalu jelajah atau ketik seperti di atas |
| Memindahkan tanpa mengubah nama | Pensil → klik masuk ke folder tujuan → pilih nama berkas saat ini yang tersemat |
| Mengubah nama di tempat | <kbd>F2</kbd> dua kali (tekan pertama ke judul sebaris, kedua ke bilah judul) |
| Melompat ke vault lain, folder pribadi, atau drive | Klik nama vault |
| Membuka berkas dari luar vault | Nama vault → pilih lokasi → jelajah → pilih berkas (hanya-baca sampai *Edit sebagai teks*) |
| Membatalkan apa pun | <kbd>Esc</kbd>, atau klik di luar bilah judul |

## Pengaturan

| Pengaturan | Pilihan | Bawaan | Fungsinya |
| --- | --- | --- | --- |
| **Perataan** | Kiri / Tengah / Kanan | Kiri | Di mana jalur berada dalam baris judul. *Tengah* menyerupai tampilan klasik Obsidian. |
| **Pemisah** | Karakter apa pun | `/` | Pemisah yang digambar di antara segmen. Enam prasetel sekali klik (`/ > ▸ › \ •`) berada di depan kolom teks. |
| **Tampilkan nama vault** | Aktif / Nonaktif | Aktif | Apakah vault itu sendiri menjadi segmen jalur pertama. Bila dimatikan, segmen itu menjadi ikon 🏠 alih-alih menghilang, jadi jalurnya tetap dimulai dari sesuatu yang bisa diklik. |
| **Nama folder membuka daftar** | Aktif / Nonaktif | Aktif | Menukar apa yang dilakukan nama folder dan pemisah sesudahnya — lihat [tabel di atas](#jalur-di-bilah-judul). Dengan [Folder notes](obsidian://show-plugin?id=folder-notes) pemisah membuka catatan folder. Tak pernah berlaku dalam mode ubah nama/pindah. |
| **Tampilkan berkas tersembunyi** | Aktif / Nonaktif | Nonaktif | Apakah berkas dan folder titik didaftarkan dalam daftar. Perlindungan penimpaan berlaku bagaimanapun juga. |
| **Akses berkas eksternal** | Aktif / Nonaktif | **Nonaktif** | Apakah nama vault membuka daftar lokasi. Bila nonaktif, tak ada apa pun dalam plugin yang melihat melampaui vault ini. |

## Mengganti ikonnya

Lure menggambar tiga ikon: ikon akar vault (saat **Tampilkan nama vault** nonaktif), sakelar ubah nama/pindah, dan gembok yang mengatur penulisan di luar vault. Semuanya bisa ditukar dari tema atau potongan CSS — tetapkan glif penggantinya dan sembunyikan yang bawaan dalam satu aturan:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* Gembok punya dua keadaan; `.is-active` yang terbuka. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}

.lure-unlock-btn.is-active {
	--lure-icon-glyph: "🔓";
}
```

`--lure-icon-glyph` menerima apa pun yang sah dalam `content` CSS, jadi `url(...)` berlaku untuk gambar sebagaimana untuk glif teks atau emoji. Biarkan `--lure-icon-svg` apa adanya untuk mempertahankan ikon Lucide dan menggambar glif Anda di sebelahnya.
