<!-- Terjemahan docs/usage.md — status: commit 94b1372.
     Terjemahan mesin (Claude Sonnet 5), belum diperiksa penutur asli.
     Label plugin berasal dari src/lang/translations.ts, sedangkan
     label Obsidian berasal dari teks yang dikirimkan aplikasi itu
     sendiri, jadi cocok dengan yang tampil di layar. -->

[English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · [Čeština](usage.cs.md) · [Dansk](usage.da.md) · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · **Bahasa Indonesia** · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · [Norsk](usage.no.md) · [Polski](usage.pl.md) · [Português](usage.pt.md) · [Português (Brasil)](usage.pt-BR.md) · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

# Penggunaan

[← kembali ke README](README.id.md)

## Jalur di bilah judul

Jalur lengkap catatan di dalam vault menggantikan nama berkas polos di bilah judul tampilan — baris di bawah deretan tab, yang juga memuat tombol maju/mundur.

Dua hal di baris itu bisa diklik, dan **Nama folder membuka daftar** menentukan mana yang melakukan apa:

| | Nama folder | Pemisah sesudahnya |
| --- | --- | --- |
| **Aktif** (bawaan) | Memilih folder itu untuk disunting | Membuka folder |
| **Nonaktif** | Membuka folder | Turun ke dalam folder itu |

"Membuka folder" berarti apa pun yang dilakukan klik pada segmen itu di Obsidian polos. Tanpa plugin yang menyimak di sana, folder ditampilkan di bilah sisi Penjelajah berkas — disorot, dan dibentangkan untuk memperlihatkan isinya.

Ketika folder tersebut adalah folder catatan yang sedang Anda baca sekarang, klik itu justru menampilkan folder — tidak ada lagi yang bisa dibuka yang belum ada di layar, yang selama ini menjadi arti dari klik kedua.

Dengan [Folder notes](obsidian://show-plugin?id=folder-notes) terpasang, klik yang sama malah membuka catatan folder itu, **di kedalaman berapa pun**: catatan tersebut ditentukan di sini berdasarkan konvensi plugin itu sendiri, bukan diserahkan padanya untuk menjawab. Plugin itu hanya mengenali folder yang telah ditandainya, yang pada jalur lebih dari satu folder dalamnya berarti tidak satu pun, sehingga klik yang membuka catatan folder tingkat teratas dulunya tidak melakukan apa-apa lebih dalam. Dua plugin catatan folder lainnya tidak mempublikasikan konvensi yang bisa dibaca dan tidak pernah mengambil alih baris itu, jadi dengan keduanya pemisah menampilkan folder seperti biasanya. Hanya satu plugin catatan folder yang ditemukan mengambil alih jalur judul; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) dan [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) mengelola catatan folder tetapi tidak menyimak klik pada jalur, jadi dengan keduanya pemisah menampilkan folder seperti biasa. Lihat [kompatibilitas](../compatibility.md#verified-against).

Pemisah **hanya diberi garis bawah jika folder sebelumnya benar-benar memiliki catatan folder**, jadi garis bawah adalah janji bahwa ada sesuatu untuk dibuka — di kedalaman berapa pun ketika [Folder notes](obsidian://show-plugin?id=folder-notes) berjalan, karena catatannya ditentukan di sini alih-alih diserahkan pada plugin itu untuk ditandai. Ketika plugin itu tidak berjalan, tidak ada yang diberi garis bawah dan tidak ada yang terbuka: pemisah menampilkan, sama seperti tanpa plugin catatan folder sama sekali. Setiap pemisah tetap bisa diklik dalam kedua kasus — satu tanpa garis bawah menampilkan dan membentangkan foldernya di bilah sisi, yang tetap ditandai oleh kursor penunjuk. Garis bawah berpindah dari nama folder pada saat yang sama: dengan penukaran aktif, nama itu membuka daftar, sehingga menandainya sebagai tautan ke catatan akan menjadi kebohongan.

**Mode ubah nama/pindah menimpa keduanya**, apa pun kata pengaturannya: tidak ada di baris itu yang membuka folder selama pemindahan tertunda, karena membukanya akan membatalkan pemindahan. Nama folder dipilih untuk disunting dan pemisah turun — keduanya cara memilih tujuan — dan garis bawah menghilang untuk menunjukkan bahwa pembukaan ditangguhkan.

**Akar vault** adalah satu-satunya segmen yang bukan segmen jalur. Ia tidak punya induk untuk mendaftar saudaranya, jadi ia malah membuka [daftar lokasi](#menjelajah-di-luar-vault) — vault Anda yang lain, folder pribadi, akar sistem berkas, dan drive yang terpasang.

## Pemisah vault sendiri

Pemisah tepat setelah nama vault mewakili vault itu sendiri, bukan sebuah
folder, jadi ia melakukan sesuatu yang tak bisa dilakukan pemisah lain:

| | Klik pertama | Klik berikutnya |
| --- | --- | --- |
| **Dengan plugin halaman awal** (halaman yang menyambut Anda saat Obsidian dibuka) | Membuka halaman itu di panel ini | Melipat pohon berkas |
| **Tanpanya** | Melipat pohon berkas | Mengembalikan tepat apa yang sebelumnya terbuka |

Klik biasa, bukan klik ganda: begitu halamannya terbuka, pemisah itu
tidak punya apa-apa lagi untuk dibuka, jadi tekanan berikutnya adalah lipatan —
seberapa pun lama Anda mengambil waktu untuk itu.

Ia **diberi garis bawah** ketika ada halaman awal untuk dibuka, yang merupakan
janji yang sama dengan pemisah folder: ada sesuatu di sana. Melipat adalah
sakelar — tekanan berikutnya mengembalikan folder yang tadinya terbuka, dan
hanya itu, sehingga pohon yang telah Anda susun tidak hilang karena sekilas
melihat sesuatu yang lain.

## Panel tanpa berkas

Tab kosong, graf, dan apa pun lainnya yang tidak menamai berkas mendapat
baris tersendiri: vault, lalu satu segmen yang menyatakan apa yang dipegang
panel itu.

```
my-vault / :blank      tab baru
my-vault / :graph      graf, lokal atau global
my-vault / :<type>     apa pun lainnya tanpa berkas
```

**Daftar akar vault sendiri** juga menawarkan halaman-halaman ini, di bawah
folder dan catatan yang benar-benar ada di dalamnya: pilih `:graph` atau
`:search` di sana dan panel membuka tampilan itu, persis seperti memilih
catatan membuka catatan. Halaman apa saja yang ada dibaca dari Obsidian
alih-alih ditulis di sini — setiap tampilan yang tidak dibuat untuk
menampilkan berkas, jadi plugin yang mendaftarkan satu (tab beranda,
kalender) muncul tanpa plugin ini tahu apa pun tentangnya. Tampilan yang
membutuhkan berkas — Markdown, PDF, gambar, kanvas, basis — tidak
ditawarkan: tidak ada yang bisa mereka tampilkan.

Titik dua itulah intinya — tidak ada berkas atau folder yang bisa dinamai
`:graph`, jadi baris itu tidak bisa disalahartikan sebagai jalur yang bisa
dibuka. Labelnya berasal dari jenis tampilan, bukan dari kata-kata Obsidian
sendiri, jadi terbaca sama apa pun bahasa antarmukanya, dan `-view` di
akhirnya dihapus: plugin tab beranda mendaftarkan tampilannya sebagai
`home-launcher-view`, dan baris itu menampilkan `:home-launcher`.

Mengeklik ruang kosong, atau labelnya sendiri, **membuka kolom di akar
vault**: ketik jalur dan <kbd>Enter</kbd> membukanya di panel yang sama
ini, dengan pelengkapan yang sama, daftar yang sama, dan kolom merah yang
sama yang menawarkan untuk membuat apa yang belum ada. Tab kosong adalah
tempat yang baik untuk mengetik ke mana Anda ingin pergi, yang memang untuk
itulah ia ada.

Label itu hanyalah label, tidak lebih: tidak ada daftar, tidak ada seret,
tidak ada ubah nama. Panel di bilah sisi dibiarkan sepenuhnya — panel
backlink tetap memakai judul yang diberikan Obsidian padanya.

Kanvas, PDF, gambar, dan basis tidak membutuhkan semua ini. Mereka adalah
berkas, jadi mereka mendapat bilah jalur biasa.

## Mengeklik satu segmen: tukar dengan saudaranya

Mengeklik nama folder memilih **nama folder itu** di dalam kolom teks dan membuka daftar folder **satu tingkat di atasnya** — induknya. Mengetik atau memilih entri menukar folder ini dengan saudaranya dan membiarkan semua di bawahnya tak tersentuh, jadi `Projects/2026/Kickoff.md` → klik `2026` → pilih `2025` menghasilkan `Projects/2025/Kickoff.md`.

Mengeklik **nama catatan** bekerja dengan cara yang sama terhadap foldernya sendiri, dan memilih namanya **tanpa ekstensinya** — mengubah nama adalah penyuntingan yang umum, dan mengetik langsung menimpa pilihan yang menyertakan `.md` dulunya mengubah jenis berkas secara tak sengaja. Ekstensi tetap terlihat sejauh satu ketukan tombol: <kbd>→</kbd> mencapainya, dan klik ganda yang melebarkan ke seluruh baris mengambil semuanya.

Mengeklik folder sudah memilih satu segmen, jadi **satu klik lagi** melebarkan pilihan ke seluruh baris — folder itu *dan* semua di bawahnya — dan mengetik lalu menggantikan sisa jalur sekaligus. Bekerja sama saja dalam navigasi maupun mode ubah nama/pindah.

Itu hanya berlaku sebagai kelanjutan dari klik yang membuka kolom. Begitu Anda memakai kolomnya, ia berperilaku seperti kolom teks lain: klik menempatkan kursor, klik ganda mengambil satu kata, klik tiga kali mengambil satu baris.

Bagaimanapun caranya, sisa jalur tetap terlihat di sekitar kolom, sebagai chip sebelum kolom dan sebagai teks tak terpilih setelahnya, jadi jalur lengkap tidak pernah lenyap dari bilah judul. Ketik untuk menggantikan yang terpilih, atau tekan <kbd>→</kbd> untuk mempertahankannya dan menyunting dari sana. Daftar itu menampilkan seluruh folder terlepas dari apa yang sudah terisi sebelumnya; ia hanya mulai menyaring begitu Anda benar-benar mengetik.

## Turun lewat pemisah

Mengeklik pemisah (dengan **Nama folder membuka daftar** nonaktif) turun ke folder sebelumnya: daftar menampilkan isi folder *itu*, dan sisa jalur terbuka dalam keadaan terpilih di kolom. Memilih folder menambahkannya ke jejak jalur dan langsung membuka daftar berikutnya, jadi Anda bisa mengeklik turun sebuah pohon tanpa meninggalkan baris judul.

## Daftar terbuka di tempat Anda berada

Daftar terbuka pada entri tempat Anda berdiri — catatan yang menjadi milik
bilah ini, atau, ketika klik pada folder telah menampilkan induknya, folder
itu — bukan pada baris pertama. Di folder berisi dua ratus catatan, baris
pertama sama sekali tidak dekat dengan Anda.

**Roda mouse di atas sebuah nama membuka daftarnya dan menyusurinya.**
Putaran pertama membuka daftar yang sama dengan yang dibuka dengan menekan
nama, dan setiap putaran berikutnya menggeser sorotan satu baris, meletakkan
apa yang Anda tunjuk ke dalam kolom persis seperti tombol panah — sehingga
saudara bisa ditemukan dan diambil tanpa papan tik. Memutar melewati salah
satu ujung mengembalikan teks Anda. Baris dengan jalur lebih panjang
daripada panel menjawab roda dengan menggulir ke samping alih-alih, yang
merupakan pembacaan yang berlaku selama itu terpakai.

Daftar itu **setinggi yang diizinkan jendela**. Obsidian membatasi daftar
sarannya pada 300 piksel apa pun yang ada di bawahnya; daftar ini
memanjang hingga ke bawah jendela, berhenti beberapa piksel sebelum tepi,
dan menggulir hanya begitu folder berisi lebih dari itu. Ia **tidak lebih
lebar dari bilah jalur**: nama yang tidak muat dipersingkat sama seperti
baris memperingkasnya, dan ditampilkan penuh saat Anda menunjuknya.

Berpindah melewati daftar **meletakkan apa yang Anda tunjuk ke dalam
kolom**, dengan tombol panah atau dengan mengarahkan kursor — menggantikan
segmen yang sedang Anda sunting, dengan sisa jalur dibiarkan tetap berdiri
— sehingga baris tempat Anda berada juga menjadi jalur yang akan Anda
dapatkan.

Sisa jalur ditampilkan **hanya sejauh yang benar-benar ada di bawah apa
yang Anda tunjuk**. Berdiri di satu folder dengan `2026/note.md` di
belakang segmen yang Anda sunting, menunjuk folder yang memiliki `2026`
dengan `note.md` di dalamnya menampilkan semuanya; yang memiliki `2026`
tanpa catatan menampilkan `2026`; yang tidak memiliki keduanya tidak
menampilkan apa-apa setelah nama sama sekali, dan begitu pula sebuah
berkas, karena tidak ada apa pun di bawah berkas. Apa yang **telah Anda
ketik** tetap mempertahankan seluruh jalurnya selagi Anda mengetiknya,
seberapa pun sedikit yang sudah ada — nama yang baru setengah diketik
bukanlah keputusan. Menetapkan sebuah nama ke dalamnya adalah keputusan,
dan apa yang tidak bisa dicapai darinya dipotong pada titik itu; folder
yang Anda buat adalah yang Anda ketik *setelahnya*, di mana
<kbd>Enter</kbd> membuatnya.
Teks yang telah Anda ketik dipertahankan: berpindah **melewati salah satu
ujung daftar** — naik melewati entri pertama, atau turun melewati entri
terakhir — melepaskannya dan mengembalikan teks Anda, tanpa apa pun yang
disorot. Kolom itu adalah satu perhentian di lingkaran seperti entri
lainnya, jadi satu putaran melewatinya alih-alih melompat dari baris
terakhir ke yang pertama, dan menekan terus dari sana membawa berputar ke
ujung yang lain.

Menjauhkan **penunjuk dari daftar** juga mengembalikan teks Anda — dan
mengembalikan sorotan pada apa pun yang memilikinya sebelum mouse datang:
entri yang Anda tuju dengan tombol panah, tampil kembali di kolom, atau
yang menjadi tempat daftar terbuka karena di sanalah Anda berada.
Mengarahkan kursor adalah cara melihat, bukan cara memilih, jadi sapuan
penunjuk melintasi daftar tidak merugikan Anda sama sekali.

Daftar itu sendiri tidak berubah selagi Anda berpindah melewatinya — ia
tetap menyaring berdasarkan apa yang Anda ketik, bukan berdasarkan apa
yang telah dipratinjaukan ke dalam kolom — jadi entri di bawah Anda tidak
pernah bergeser dari bawah tekanan berikutnya. Mengetik menggantikan
pratinjau dan menyaring seperti biasa.

**Yang disaring adalah segmen yang sedang Anda sunting**, bukan seluruh
isi kolom. Mengeklik folder membiarkan sisa jalur tetap ada di belakang
nama yang Anda ubah, jadi menyaring berdasarkan keseluruhannya akan
mencari anak bernama `2026/Kickoff.md` dan tidak menemukan apa-apa —
daftar akan tertutup pada ketukan tombol pertama Anda apa pun yang Anda
ketik. **Ekstensi juga dikeluarkan darinya**, selama kursor berada di
depan titik: mengeklik nama catatan memilih batang namanya dan membiarkan
`.md` di belakangnya, jadi mengetik satu huruf membuat kolom terbaca
`a.md`, dan itu bukan yang Anda cari. Letakkan kursor melewati titik dan
ekstensi diperhitungkan seperti hal lainnya. Nama yang benar-benar tidak
cocok dengan apa pun tetap menutup daftar, karena daftar kosong adalah
jawaban yang jujur.

Pratinjau **menukar satu segmen itu saja dan membiarkan sisa jalur tetap
apa adanya**: menunjuk folder menanyakan bagaimana jika langkah ini
menjadi langkah itu, bukan membuang jalurnya. Melangkah keluar dari daftar
mengembalikan teks *dan* pilihan yang Anda punya, jadi ketukan tombol
berikutnya menggantikan apa yang seharusnya digantikan sebelum Anda
melihat.

## Entri daftar adalah baris pengelola berkas sungguhan

Setiap berkas dan folder dalam daftar berperilaku seperti barisnya di Penjelajah berkas:

- **Klik kanan** untuk menu konteks yang sama seperti yang diberikan Penjelajah berkas, entri demi entri — termasuk yang ditambahkan plugin lain. Folder menawarkan *Catatan baru*, *Folder baru*, *Kanvas baru*, *Basis baru*, *Buat salinan*, *Pindahkan folder ke…*, *Cari dalam folder*, *Salin jalur*, *Tampilkan di penjelajah sistem*, *Ubah nama…*, dan *Hapus*; berkas menawarkan versinya sendiri, termasuk *Buka di aplikasi bawaan*.
- **Seret** entri ke mana pun Obsidian menerima berkas: ke dalam editor untuk menyisipkan tautan, ke folder di Penjelajah berkas untuk memindahkannya, ke bilah tab untuk membukanya.

Kata-kata menu berasal dari terjemahan Obsidian sendiri, jadi cocok dengan sisa aplikasi dalam setiap bahasa.

## Mengetik jalur

- Mengeklik **ruang kosong** sebelum atau sesudah jalur di bilah judul membuka kolom teks pada seluruh jalur *dan menampilkan catatan di File Explorer*, jadi pohon berkasnya mengikuti panel tanpa perlu gestur kedua. Ia **menghitung tekanan Anda**: satu memilih jalur tanpa ekstensinya, dua memilihnya berikut ekstensi, tiga memilih jalur yang dikenal mesin. Mengeklik **nama berkas** dihitung dengan cara yang sama tetapi mulai satu anak tangga lebih rendah, pada namanya sendiri: satu memilihnya tanpa ekstensi, dua berikut ekstensi, dan tiga meluas ke seluruh jalur *dari folder vault Anda* — bentuk yang diinginkan sebuah tautan atau pencarian, bukan bentuk mesin. Tekanan keempat mencapai yang itu.
- **Penghitungan itu milik rentetan yang membuka kolom.** Begitu rentetan itu usai — Anda berhenti sejenak, mengetik, atau mengeklik sekali di suatu tempat pada teks — kolomnya menjadi kolom teks biasa seperti kolom teks lainnya, dan mengeklik ganda di dalamnya memilih kata di bawah penunjuk seperti di tempat lain mana pun. Ketik menimpa apa yang terpilih, atau sunting di tempat. (Mengeklik nama berkas itu sendiri memilih hanya nama berkasnya; lihat di atas.) Mengeklik-kanan ruang yang sama **menyalin** ketiga hal yang sama itu, pada tekanan kedua, ketiga, dan keempat — satu tombol menampilkannya, tombol lain mengambilnya. **Satu** tekanan klik-kanan membuka jalur dengan semuanya terpilih dan menawarkan apa yang bisa dilakukan padanya: potong, salin, tempel, pilih semua, dengan istilah Obsidian sendiri.
- **Klik-tengah ruang kosong** untuk menempel di atas jalur: kolom terbuka pada seluruh jalur *dari akar vault*, jadi papan klip menggantikan semuanya, dan apa yang mendarat terpilih. <kbd>Enter</kbd> lalu pergi ke sana.
- **<kbd>Ctrl</kbd>+klik ruang kosong** untuk membuka catatan ini lagi di tab tersendiri, dikilaskan di File Explorer agar tab kedua tidak tertukar dengan yang pertama. Pada **nama vault**, <kbd>Ctrl</kbd>+klik atau klik-tengah membuka tab yang tidak memuat apa pun, berdiri di akar vault dengan daftar sudah tampil — tempat untuk mengetik jalur dari awal.
- Mengetik selagi jalur di bilah judul sedang tampil mengubah segmen paling akhir menjadi kolom kecil dengan pelengkapan otomatis langsung yang dilingkupi folder saat ini.
- **Jalur dari akar sistem berkas bisa diketik.** `/` di depan kolom kosong membuka satu alih-alih melengkapi satu anak tangga, setiap garis miring sesudahnya menjadi miliknya, dan `~` adalah folder rumah Anda. Selama kolom memuat jalur semacam itu, daftar mencantumkan mesin alih-alih vault, dan segmen pembuka baris itu menyingkir — apa yang ada di kolom dimulai dari akar dan mengatakannya begitu. Dengan *Access external files* nonaktif, daftarnya kosong sebagai gantinya, karena <kbd>Enter</kbd> akan menolak jalur itu bagaimanapun juga.
- **Sebuah halaman bisa diketik, tak hanya dipilih.** `:graph`, `:search`, atau apa pun yang didaftarkan plugin Anda — label yang ditawarkan [daftar akar vault](#panel-tanpa-berkas). Mengetik titik dua di mana saja memanggilnya, karena tak ada nama yang boleh memuatnya, dan <kbd>Enter</kbd> membuka tampilan itu di panel ini. `:graph` yang diketik **di dalam sebuah folder** membuka graf folder itu — graf yang disaring ke `path:"folder/itu"` di kolom pencariannya sendiri, seolah diketik di sana; di akar vault itu adalah graf keseluruhan. <kbd>Tab</kbd> menyelesaikan nama seperti ia menyelesaikan nama folder — dan membawa serta apa pun lagi yang dimuat kolom itu, karena sebuah halaman tak berada di folder mana pun dan tak ada yang hidup di bawahnya. Mengeklik label pada panel semacam itu membuka kolom yang sudah memuatnya.
- **Apa yang akan dituliskan <kbd>Tab</kbd> ditawarkan seiring Anda mengetik.** Di mana setiap anak yang dimulai dengan apa yang telah Anda ketik terus sepakat untuk sementara, kesepakatan itu muncul setelah kursor, terpilih; di mana mereka berhenti sepakat, langkah menuju yang pertama dari mereka yang muncul — atau menuju baris yang Anda tuju dengan panah, karena itulah yang akan dituju <kbd>Tab</kbd>. Mengetik menimpa sebuah nama membiarkan ekstensinya tetap berdiri dan menawarkan di depannya, dan folder yang baru saja dimasuki menawarkan langkah pertamanya, jadi tak ada keadaan di mana tak ada yang ditawarkan namun <kbd>Tab</kbd> tetap menuliskan sesuatu. Ketik huruf-huruf itu dan ia ditelan satu per satu; ketik apa pun yang lain dan ia lenyap. <kbd>Tab</kbd> atau <kbd>End</kbd> mengambilnya seluruhnya, <kbd>→</kbd> mengambil satu hurufnya, <kbd>Backspace</kbd> mengembalikannya tanpa menyentuh huruf yang Anda ketik, dan tak ada yang ditawarkan lagi sampai Anda mengetik — jadi selalu ada jalan keluar dari nama yang tidak Anda inginkan. Setelah tekanan <kbd>Tab</kbd>, langkah berikutnya langsung ditawarkan, seperti setelah huruf yang diketik. Apa yang dicantumkan daftar disaring oleh apa yang **Anda** ketik, tak pernah oleh apa yang ditawarkan.
- **Tawaran mengabaikan huruf besar/kecil.** `sch` menawarkan `Schemes`, dieja sebagaimana nama itu dieja; mengambil kembali tawaran itu mengembalikan huruf-huruf Anda seperti Anda mengetiknya. Di mana `Test` dan `test` sama-sama ada, yang dieja sesuai ketikan Anda yang ditawarkan.
- Di kolom, bagian yang ditawarkan hanya **terpilih**. Daftarlah tempat ia dieja lengkap: setiap baris menampilkan bagian yang **cocok dengan apa yang Anda ketik dalam huruf tebal**, di mana pun dalam nama itu ia cocok — `kick` menemukan `Weekly kickoff` dan menunjukkannya. **Nama yang dimulai dengan apa yang Anda ketik tampil lebih dulu**, mendahului yang hanya memuatnya, dan ditandai dengan garis di tepinya: **biru** di mana mereka berbagi lebih banyak daripada yang Anda ketik, sehingga <kbd>Tab</kbd> punya sesuatu untuk ditambahkan bagi semuanya, dan **hijau** pada cabang tempat tawaran itu berpisah — `te` dengan `test1`, `test2`, `text1` dan `text2` menawarkan `te`+`st`, jadi kedua baris `test` berwarna hijau dan kedua baris `text` mempertahankan garis polos. Masing-masing **menggarisbawahi langkah yang akan diambil <kbd>Tab</kbd> menuju baris itu**, bukan hanya yang ditawarkan, dan garis bawah itu mengikuti tawaran saat ia berubah.
- **Mengetik melepaskan baris yang tersorot.** Daftar terbuka pada entri tempat Anda berdiri, tetapi begitu Anda mengetik, ia menjadi tentang tempat lain, dan sorotan yang tak ditaruh siapa pun terbaca seolah pilihan sudah dibuat.
- Tawaran itu selalu hanya teks di depan Anda: huruf-huruf yang Anda ketik tetap dieja seperti Anda mengetiknya selagi Anda mengetik, dan mengambil tawaran menuliskan ulang nama sebagaimana folder mengejanya, karena sebuah jalur harus cocok dengan disk. `sk` + <kbd>Tab</kbd> mencapai `Skyline`, bukan `skyline`.
- **Kolom mengenakan warna dari apa yang dinamainya**, warna yang sama dengan barisnya di daftar: ungu untuk catatan, termasuk catatan folder itu sendiri, oranye untuk apa pun yang bukan catatan, biru untuk catatan tempat Anda berada. Baris yang menjadi sumber warna itu adalah yang bernama persis seperti yang Anda ketik, atau jika tidak ada, yang tersorot, atau jika tidak ada, yang pertama yang masih dituju ketikan Anda.
- **Kolom berubah merah begitu tak ada yang menjawab apa yang ada di dalamnya** — tak ada berkas, tak ada folder, dan tak ada baris daftar yang masih menuju ke sana. Dari situ <kbd>Enter</kbd> membuat apa yang ada di kolom alih-alih membukanya, dan warna merah itu mengatakannya sebelum Anda menegaskan. Ia tak pernah muncul untuk alamat web, yang bukan tempat di mesin ini untuk dicari. **Seluruh** kolom yang diwarnai, bukan hanya bagian yang hilang: kolom teks tak bisa mewarnai separuh isinya sendiri. Dalam mode pindah/ubah nama, kolom mempertahankan warna merahnya sendiri untuk nama yang tak sah — di situ, nama yang tak dijawab siapa pun adalah maksudnya. Bahwa sebuah nama **sudah dipakai** ditangani saat Anda menegaskannya, dengan dialog yang menanyakan apa yang harus terjadi pada berkas yang menghalangi — lihat [Nama yang sudah dipakai](#nama-yang-sudah-dipakai): setiap nama yang diketik menuju `Notes.md` melewati nama-nama yang bisa jadi berkas tersendiri, jadi menandainya huruf demi huruf memperingatkan tentang nama yang belum diminta siapa pun.
- `/` menegaskan segmen yang sedang Anda ketik dan turun ke dalamnya, mempertahankan apa pun di belakangnya — hal yang sama yang dilakukan <kbd>Tab</kbd> saat ia melangkah masuk.
- <kbd>Backspace</kbd> pada kolom kosong melangkah mundur ke folder induk, membuka kembali namanya dengan kursor di ujung. Begitu pula <kbd>Backspace</kbd> di depan ekstensi yang tertinggal sendirian — kolom yang hanya memuat `.md` tak menamai apa pun — dan ekstensi tunggal itu ikut lenyap.
- **Mengeklik sebuah folder selagi kolom terbuka meluaskannya ke seluruh jalur setelah folder itu**, dengan nama folder itu sendiri terpilih — hal yang sama yang akan dilakukan mengekliknya dari baris, dan segala yang dimuat kolom itu dipertahankan. Apa yang ada di kolom adalah ekor baris selama ia terbuka, jadi folder yang diklik lebih jauh ke atas mengembalikan jalur yang telah ditelusuri sesi ini, bukan yang menjadi awal catatan.
- **Mengarahkan panah lepas dari depan kolom membawa masuk folder sebelumnya**, seolah seluruh jalur adalah satu baris teks. Dengan kursor tepat di awal, <kbd>←</kbd> membawa folder itu masuk ke kolom dan mendarat di ujung namanya, <kbd>Ctrl</kbd>+<kbd>←</kbd> mendarat di awalnya, dan <kbd>Home</kbd> membawa masuk setiap folder hingga akar vault sekaligus — atau hingga tempat yang Anda pilih, di luar vault. Tahan <kbd>Shift</kbd> dan pilihan itu merentang di atas apa yang masuk. Di macOS lompatan kata adalah <kbd>Option</kbd>+<kbd>←</kbd> dan <kbd>Cmd</kbd>+<kbd>←</kbd> adalah <kbd>Home</kbd>. Di mana pun selain di depan, tombol-tombol ini adalah tombol teks biasa. **Selagi daftar sedang tampil, <kbd>Home</kbd>, <kbd>End</kbd>, <kbd>PgUp</kbd> dan <kbd>PgDn</kbd> adalah miliknya** — baris pertama, baris terakhir, satu halaman ke atas, satu halaman ke bawah, sebuah halaman adalah apa yang ditampilkan daftar, dengan baris yang tersorot mempertahankan posisinya di layar — dan mencapai teks hanya setelah ia tertutup; <kbd>Shift</kbd>+<kbd>Home</kbd> membawa masuk setiap folder dengan daftar tetap terbuka juga.
- **Daftar mengikuti kursor.** Pilih bagian lain dari jalur — seret melewatinya, klik ke dalamnya, atau arahkan dengan panah — dan daftar mencantumkan anak-anak folder *itu*, bukan yang menjadi tempat kolom dibuka. Folder itu dihitung dari chip ditambah apa pun dari kolom yang terletak di depan kursor, jadi mengeklik ke dalam `Notes.md` pada kolom yang memuat `2026/Notes.md` mencantumkan apa yang ada di `2026`. Menunjuk sebuah baris menuliskannya ke dalam segmen tempat kursor berada, dan mengangkat penunjuk dari daftar mengembalikan teks dan pilihan Anda, persis seperti semula.
- **Menyapu sebuah pilihan keluar dari kolom** dan melepaskannya di tempat lain tidak menutupnya. Tekanan yang dimulai di dalam kolom menjadi milik penyuntingan sejauh apa pun ia berjalan; hanya tekanan yang *dimulai* di luar yang berupa klik keluar.
- <kbd>Enter</kbd> menegaskan — dan ketika kolom tak menamai apa pun sama sekali, seperti pada folder kosong yang memang tak pernah ada apa pun untuk dilengkapi, ia menampilkan *No file selected* dan tetap terbuka alih-alih menutup seolah sesuatu telah dipilih. <kbd>Esc</kbd> atau klik di tempat lain membatalkan kembali ke jalur asli berkas. Satu tekanan <kbd>Esc</kbd> sudah cukup: ia menutup daftar, meninggalkan kolom dan mengembalikan fokus ke catatan, bukan memerlukan satu tekanan per lapisan.

Kolomnya tanpa hiasan — tanpa kotak, tanpa garis tepi — jadi terbaca sebagai teks jalur itu sendiri, dan tumbuh sendiri saat Anda mengetik.

## Setiap bagian baris, tombol demi tombol

Seluruh baris sekilas. Kolom klik-kanan adalah yang diberikan **satu** kali
tekan; tombol itu juga menghitung jumlah tekanan, dan [tabelnya
sendiri](#klik-kanan-satu-tekan-dua-tekan-tiga) di bawah memuat yang kedua,
ketiga, dan keempat. Yang ini mengasumsikan **Nama folder membuka daftar**
aktif, yaitu pengaturan bawaannya — dengan itu nonaktif, nama folder dan
pemisah bertukar kolom pertama, seperti disebutkan [tabel di
atas](#jalur-di-bilah-judul).

| Tempat Anda menekan | Klik | Klik ganda | <kbd>Ctrl</kbd>+klik, atau klik tengah | Klik kanan | Jatuhkan sesuatu ke situ |
| --- | --- | --- | --- | --- | --- |
| **Nama vault** | Membuka daftar lokasi — vault lain, home, akar sistem berkas, drive terpasang. Nonaktif secara bawaan; dengan itu nonaktif, malah menampakkan vault di File Explorer | Menandai **seluruh jalur absolut**. Daftar tersebut terbuka dengan jalur yang sudah ada di kolom dan hanya bagian vault itu sendiri yang ditandai; tekanan kedua melebarkan ke sisanya. Tak ada yang bisa dilebarkan bila daftar nonaktif | Sebuah tab kosong, berada di akar vault dengan daftar yang sudah tampil — tempat untuk mengetik jalur dari awal | Menu konteks vault itu sendiri: apa yang bisa dilakukan pada vault yang dinamai segmen itu | Sebuah **berkas** berpindah ke akar vault. **Teks** membuka kolom di akar, untuk menamai catatan yang akan dibuatnya |
| **Nama folder** | Memilih folder itu untuk diedit, isi induknya terdaftar di bawahnya | Mengetik ulang folder itu dan semua yang di bawahnya | Membuka folder itu di tab baru | Menu konteks folder itu — milik File Explorer sendiri | Sebuah **berkas** berpindah ke dalam folder itu. **Teks** membuka kolom di situ, untuk menamai catatan yang akan dibuatnya |
| **Pemisah** | Membuka folder sebelumnya — catatan foldernya bila plugin catatan folder berjalan dan catatan itu ada, jika tidak menampakkan dan memperluasnya di File Explorer | **Membuat catatan folder itu** dan menuju ke sana, bila plugin catatan folder berjalan dan folder itu belum memilikinya. Bila sudah punya, ini sama saja dengan tekanan tunggal lagi | Catatan folder di tab baru bila ada; jika tidak, tab yang berada di folder itu dengan daftar yang tampil | Menu konteks folder yang sama dengan yang diberikan nama — milik catatan foldernya, bila ada | Ke akhir catatan folder itu, bila ada, setelah Anda mengonfirmasi |
| **Nama catatan** | Membuka nama untuk diedit — folder-foldernya tetap sebagai chip di sampingnya — dengan semuanya ditandai kecuali ekstensinya | Menyertakan ekstensi ke dalam tanda juga | Membuka catatan di tab baru | Menu konteks berkas itu — sama dengan yang diberikan baris File Explorer | Ke akhir catatan ini, setelah Anda mengonfirmasi |
| **Ruang kosong** | Membuka **seluruh jalur** untuk diedit, ditandai sampai ekstensi. Folder-foldernya ikut masuk ke kolom bersamanya, itulah yang menjadikan ini gestur untuk mengetik ulang jalur, bukan sekadar nama | Menyertakan ekstensi ke dalam tanda juga | <kbd>Ctrl</kbd> membuka catatan ini lagi di tab tersendiri, dikilaskan di File Explorer agar salinannya tidak tertukar dengan yang pertama. Klik tengah *bukan* gestur itu: ia menimpa jalur | Menandai seluruh jalur dan menawarkan apa yang bisa dilakukan pada teks yang ditandai | |

**Tekanan kedua mengikuti yang pertama.** Membuat catatan folder berada pada
bagian baris mana pun yang *membuka* folder itu, yaitu pemisah secara bawaan
dan nama folder bila pertukaran dinonaktifkan — target yang sama dengan yang
ditandai garis bawah, dan yang sama dengan yang sudah diminta tekanan tunggal
untuk catatan folder. Ini ditawarkan hanya selagi plugin catatan folder
berjalan, karena catatan folder adalah konvensi, bukan fakta tentang sistem
berkas, dan hanya bila folder itu belum memilikinya. Di mana catatan itu
berada dan apa namanya dibaca dari pengaturan **Folder notes** sendiri,
sehingga vault yang menyimpan catatan foldernya di samping folder, atau
menamainya `_index`, akan mendapat salah satunya; berkasnya sendiri selalu
Markdown, yaitu yang dibuat perintah buat bawaan plugin itu sendiri dan yang
ditemukannya apa pun jenis yang diatur vault itu. Mode pindah/ubah nama sama
sekali tidak termasuk — tak ada apa pun di baris itu yang membuka folder
selagi perpindahan sedang tertunda.

**Klik pada nama terus berlanjut.** Keempat tingkatnya sama dengan keempat
yang dilalui tombol ganti nama, dengan urutan yang sama: nama, nama dengan
ekstensinya, jalur dari vault, jalur dari akar sistem. Jadi klik ketiga
mencapai jalur vault dan klik keempat jalur mesin — empat hal yang sama
dengan yang diberikan <kbd>Tab</kbd> melewati akhir kolom, dan empat hal yang
sama yang *disalin* tombol kanan alih-alih dipilih.

**Mengarahkan kursor (hover)** adalah jawabannya sendiri dan tak pernah
mengubah apa pun: nama yang dipersingkat kembali utuh selama Anda
mengarahkannya, dan ikon di awal baris menunjukkan di mana vault itu berada.

## Klik kanan: satu tekan, dua tekan, tiga

Setiap target pada baris menjawab klik kanan, dan berapa kali Anda menekannya menentukan apa yang Anda dapat. Karena tekanan kedua mungkin masih akan datang, tekanan pertama menunggu sekitar sepertiga detik sebelum bertindak — itulah harga menaruh tiga gestur pada satu tombol.

| Tempat Anda menekan | Sekali | Dua kali | Tiga kali |
| --- | --- | --- | --- |
| **Nama vault** | Menu konteks vault: apa yang bisa dilakukan pada vault yang dinamai segmen itu — termasuk *Buka vault ini*, bila vault itu bukan yang sedang Anda tempati | Menyalin nama vault | Menyalin lokasi vault itu — dan tekanan keempat, lokasi berkas yang terbuka |
| **Pemisah** | Menu folder itu — milik catatan foldernya, bila plugin catatan folder berjalan dan folder itu memilikinya | | |
| **Nama folder** | Menu folder itu | Menyalin nama folder | Menyalinnya dengan segala sesuatu di sebelah kanannya |
| **Nama catatan** | Menu berkas itu — sama dengan yang diberikan baris File Explorer | Menyalin nama | Menyalinnya dengan ekstensinya |
| **Ruang kosong** | | Menyalin jalur dari folder vault Anda, tanpa ekstensi | Sama, dengan ekstensinya |

Satu kali tekan pada **nama vault** membuka apa yang bisa dilakukan pada apa
pun yang dinamai segmen itu. Untuk **vault yang sedang Anda tempati**: buka
di jendela baru, kelola vault, salin lokasinya, salin ID-nya, tampilkan di
pengelola berkas Anda. Untuk **vault lain**, yang dicapai lewat daftar
lokasi, sama saja minus jendela baru — yang akan membuka vault *ini*, bukan
vault itu — ditambah satu hal yang hanya bisa ditawarkan vault yang tidak
sedang Anda tempati: **Buka vault ini**. Vault itu dinamai untuk Obsidian
berdasarkan ID-nya alih-alih nama foldernya, karena dua vault bisa berbagi
satu nama folder. Untuk tempat yang sama sekali bukan vault — folder home
Anda, drive yang terpasang — tak ada ID untuk disalin dan tak ada yang bisa
dibuka, dan menunya menunjukkan itu dengan tidak menawarkannya.

Ini bukan menu tiga titik milik Obsidian sendiri, yang menjadi milik jendela
awal dan tak bisa dibuka dari dalam vault yang sedang berjalan — ini adalah
entri yang sama, dibangun ulang, dengan kata-kata Obsidian sendiri, diambil
dari perintah-perintahnya agar muncul dalam bahasa Anda. Tiga entri dari menu
itu sengaja **tidak** ada di sini: *ganti nama vault*, *pindahkan vault*, dan
*hapus dari daftar* semuanya bertindak pada folder vault itu sendiri atau
pada daftar vault Obsidian, dan melakukan itu pada vault yang sedang Anda
tempati — dengan berkas-berkasnya terbuka dan pengawasnya berjalan — adalah
cara vault menjadi rusak. Buka pengelola vault (*Buka vault lain*) dan
lakukan itu di sana, tempat vault itu tertutup.

Kedua salinan pada **ruang kosong** adalah baris seperti apa adanya tertulis
— yang diinginkan tautan atau pencarian — dan yang ada pada **nama vault**
adalah jalur yang diketahui sistem berkas, yaitu yang diinginkan apa pun di
luar Obsidian. Setiap tekanan di situ melebarkan kegunaan salinannya: dua
kali memberi nama vault, tiga kali lokasi vault, empat kali lokasi berkas
yang terbuka. Obsidian membuat perbedaan yang sama pada kedua perintahnya
sendiri, *from vault folder* dan *from system root*; di sini yang menghadap
ke luar berada pada segmen yang sendiri berada di luar jalur.

Semua ini juga berfungsi di luar vault, pada target yang sama.

Setiap penyalinan diberitahukan lewat notifikasi, karena penyalinan tidak meninggalkan apa pun di layar untuk menunjukkan bahwa itu terjadi, dan tekanan yang salah hitung tidak boleh terlihat seperti tekanan yang berhasil.

## Modifier: buka di tempat lain

Nama catatan dan segmen folder berperilaku seperti barisnya di File Explorer.

| | Pada nama catatan | Pada segmen folder |
| --- | --- | --- |
| Klik biasa | Edit nama | Jelajahi folder itu |
| <kbd>Ctrl</kbd> / klik tengah | Buka catatan di tab baru | Kirim folder ke tab baru |
| <kbd>Ctrl</kbd>+<kbd>Alt</kbd> | Sebuah split | Sebuah split |
| Seret | Catatannya, ke mana pun Obsidian menerima sebuah berkas | Foldernya, demikian pula — termasuk bilah tab |

Folder bukan sesuatu yang bisa dibuka Obsidian, jadi mengirim satu ke tab
melakukan salah satu dari dua hal: membuka catatan foldernya, bila plugin
catatan folder berjalan dan catatan itu ada, atau membuka tab kosong yang
bilah jalurnya sudah berada di folder itu — menyisakan Anda hanya nama untuk
diketik. Menjatuhkan segmen folder pada **bilah tab** melakukan hal yang
sama, di tab baru tempat Anda melepaskannya — bilah tab Obsidian sendiri
hanya menerima berkas, jadi folder yang diseret keluar dari File Explorer
tetap ditolak di situ.

## Tab: melengkapi nama, lalu jalurnya, lalu memperluas pilihan

<kbd>Tab</kbd> melengkapi seperti shell melakukannya: **satu tekan memperpanjang apa yang Anda ketik sejauh nama-nama dalam folder itu sepakat, dan berhenti di titik mereka berbeda.** Ketik `Sk` bila hanya `Sketches` yang dimulai seperti itu dan kata itu langsung selesai; ketik `Al` bila `Alpha-one`, `Alpha-two`, dan `Alpine` semuanya begitu dan Anda mendapat `Alp`, karena karakter berikutnya adalah pertanyaan yang hanya Anda bisa jawab.

Tekan lagi tanpa mengetik dan ia melangkah menuju satu nama — baris yang disorot daftar, atau yang pertama — berhenti pada ketaksamaan berikutnya nama itu: `Alpha-`, lalu `Alpha-one`. Daftar terbuka pada posisi Anda sekarang, jadi di folder Anda sendiri tekanan pertama menuju catatan yang sedang terbuka, bukan apa pun yang diurutkan lebih dulu.

**Satu tekan tak pernah memilih di antara nama-nama untuk Anda.** <kbd>Tab</kbd> melangkah masuk ke folder begitu apa yang Anda ketik menyisakan satu kandidat, atau begitu Anda mengetik seluruh nama folder dan tak ada *folder lain* yang memperpanjangnya. Di tempat ada satu yang begitu — `Schemes` di samping `Schemes2026` — <kbd>Tab</kbd> terus melengkapi menuju nama yang lebih panjang; <kbd>Enter</kbd> dan daftar adalah gestur yang berarti *yang ini*.

Sebuah **berkas** tak pernah menahan folder seperti itu. Folder di samping catatan dengan namanya sendiri adalah catatan folder, bukan percabangan dalam jalur, dan <kbd>Tab</kbd> melangkahi folder — jadi `Projects` dengan `Projects.md` di sampingnya dilangkahi masuk seperti yang lain.

Dua hal lebih kecil yang mengikuti: apa yang mendarat di kolom dieja sebagaimana folder mengejanya, jadi `sk` menjadi `Sketches`; dan hanya nama yang sedang diketik yang diganti, jadi jalur dengan lebih banyak di sebelah kanannya tetap mempertahankan itu.

Dengan nama yang ditawarkan saat Anda mengetik, <kbd>Tab</kbd> **menulis persis tawaran itu**: tawaran itu selalu apa yang akan ditulis oleh tekanan itu, dan garis bawah serta garis hijau daftar mengatakan hal yang sama, jadi apa yang Anda lihat setelah kursor adalah apa yang Anda dapat. Di titik nama-nama berhenti sepakat, itulah langkah menuju yang pertama dari mereka — atau menuju baris yang Anda tuju dengan panah, yang diambil <kbd>Tab</kbd> alih-alih yang di sampingnya — jadi arahkan panah ke yang Anda inginkan, atau ketik melewati percabangan, sebelum Anda menekan. Hanya di titik tawaran menyisakan *satu* nama tekanan yang sama melangkah masuk ke dalamnya.

Tiba di nama berkas **adalah** anak tangga pertama — tak ada tekanan yang dihabiskan untuk memarkir kursor di ujung nama yang akan segera ditandainya. Dari sana tekanan berhenti bergerak sepanjang jalur dan mulai memperluas apa yang dipilih:

1. namanya
2. nama dengan ekstensinya
3. jalur dari folder vault Anda
4. jalur dari akar sistem
5. kembali ke depan jalur **sebagaimana adanya sekarang** — berdiri di tempat langkah dimulai, segmen pertama ditandai, siap dilangkahi lagi

Klik keempat mencapai anak tangga keempat yang sama secara langsung.

Memperluas hanya pernah **memperluas**. Nama yang sudah utuh di kolom — dilengkapi dengan tombol yang sama, atau dipilih dari daftar — ditandai secara utuh alih-alih ekstensinya dilepas kembali terlebih dahulu: anak tangga pertama untuk nama yang baru *tiba* dilangkahi, di mana ekstensi belum menjadi pokok soal.

Tangga adalah tempat langkah **tiba**, bukan tempat ia mulai. Klik folder di tengah jalur dan kolom terbuka pada segala sesuatu di bawahnya dengan nama folder itu ditandai; tiap <kbd>Tab</kbd> lalu mengambil **satu** folder — menandai yang berikutnya, menjaga sisa jalur di belakangnya — dan hanya begitu tak ada yang tersisa selain nama berkas pemekaran dimulai:

| tekan | chip | kolom | ditandai |
| --- | --- | --- | --- |
| diklik `a` | | `a/b/c/leaf.md` | `a` |
| <kbd>Tab</kbd> | `a` | `b/c/leaf.md` | `b` |
| <kbd>Tab</kbd> | `a › b` | `c/leaf.md` | `c` |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf` — anak tangga pertama |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf.md` |

**Nama yang sudah dikukuhkan tetap dikukuhkan, bagaimanapun Anda mengukuhkannya.** Melengkapinya dengan
<kbd>Tab</kbd>, mengukuhkannya dengan `/`, dan memilihnya dari daftar semua
meninggalkan baris di tempat yang sama memegang jalur yang sama, jadi tekanan
setelah gestur itu berarti sama apa pun cara Anda datang. Memilih folder dari
daftar dahulu mengosongkan kolom, membuang jalur yang mencapai folder yang
sama dengan <kbd>Tab</kbd> akan tetap dipertahankan.

**Jalur yang masih Anda tulis ikut serta secara utuh.** Melangkah ke dalam folder yang sisa jalurnya menggantung adalah bukan klaim bahwa sisanya sudah ada — begitulah cara sebuah jalur diketik di depan dirinya sendiri, dan folder-folder yang disebutnya adalah yang akan segera dibuat <kbd>Enter</kbd>. Jadi melangkah turun `Dokumente/plans/untitled.md` ke dalam `Dokumente` mempertahankan `plans/untitled.md` di depan Anda, entah `plans` sudah ada atau belum. Hal yang sama berlaku untuk jalur yang Anda ketik dari nol: tak satu pun diwarisi dari mana pun, jadi tak satu pun diambil kembali.

**Menukar satu langkah dengan yang lain adalah cerita berbeda, dan barulah jalur ikut serta hanya sejauh ia benar-benar ada di sana.** Tukar folder di tengah jalur dengan saudaranya — klik `a`, ketik nama lain, tekan <kbd>Tab</kbd> — dan segala sesuatu di bawahnya ikut bersama Anda, karena jalur yang Anda tempuh biasanya sebagian besar jalur yang Anda inginkan. Hanya apa yang ada di sana yang bertahan dari perpindahan itu, sehingga kolom dan daftar di sampingnya tak pernah berbeda: apa yang tersisa di depan Anda adalah jalur yang benar-benar bisa Anda tempuh. Mulai dari `a/b/c/leaf.md`, dengan `a` diklik dan namanya ditandai:

| apa yang Anda kukuhkan | chip | kolom | ditandai |
| --- | --- | --- | --- |
| `x`, yang sama sekali tak punya `b` | `x` | | tak ada yang ikut serta |
| `y`, yang punya `b` tapi tak punya `c` di dalamnya | `y` | `b` | `b` |
| `z`, kembaran `a` hingga ke bawah | `z` | `b/c/leaf.md` | `b` |

Folder yang ditinggalkan berdiri sendiri seperti itu tetap folder untuk dilangkahi: tekanan setelahnya melangkah masuk, alih-alih mulai memperluas pilihan atas namanya.

Nama yang **tak satu pun** dalam folder cocok dijawab secara berbeda, karena tak ada yang dikukuhkan olehnya: tekanan menandai apa yang Anda ketik, siap untuk Anda ketik ulang, alih-alih menjawab dengan tempat lain.

Keseluruhannya adalah **lingkaran, dan berkeliling tak berbiaya apa pun**: tekanan setelah anak tangga terakhir mengembalikan baris ke depan jalur, folder dan semuanya, siap berkeliling lagi. Satu-satunya yang pernah meninggalkan baris adalah awalan absolut, pada tekanan yang berhenti menampilkannya.

Apa yang kembali adalah **jalur yang Anda bangun**, bukan yang menjadi titik berangkat Anda. Percabangkan langkah di tengah jalan — pilih saudara lain dari daftar, lengkapi menuju nama lain — dan putaran menutup pada tempat Anda sebenarnya berada; empat anak tangga sebelumnya menjelaskan jalur yang sama itu, dan yang ini dulu menjadi anak tangga ganjil yang menjelaskan masa lalu.

<kbd>Shift</kbd>+<kbd>Tab</kbd> menutup cincin yang sama dengan arah sebaliknya: di depan jalur, dengan tak ada lagi yang bisa dikembalikan dan tak ada tempat lebih jauh ke atas, tekanan berikutnya melingkar ke anak tangga **terjauh** — jalur dari akar sistem — dan berlanjut menyempit dari sana. Tak ada arah yang buntu.

Ia juga tak menghabiskan tekanan pada anak tangga yang sudah ditampilkannya. Di bawah anak tangga terakhir — nama tanpa ekstensinya — tangga berakhir, dan *tekanan yang sama* meninggalkan folder: jalur dari akar sistem, jalur dari vault Anda, namanya, nama tanpa ekstensinya, lalu folder, satu langkah masing-masing.

Tak ada tekanan yang dihabiskan pada anak tangga yang tak mengubah apa pun, juga: mengeklik nama catatan sudah menampilkannya tanpa ekstensinya, yang merupakan apa yang ditampilkan anak tangga pertama, jadi dari sana <kbd>Tab</kbd> mulai pada yang kedua.

Tiap anak tangga mengubah apa yang *ada* di kolom, bukan hanya apa yang disorot — pilihan harus berada di atas teks yang dinamainya, atau <kbd>Enter</kbd> akan mengukuhkan sesuatu selain apa yang terlihat terpilih. Tangga itu milik satu sesi penyuntingan: klik ke tempat lain, atau ketik apa pun, dan <kbd>Tab</kbd> berikutnya melengkapi sebuah nama lagi.

### <kbd>Shift</kbd>+<kbd>Tab</kbd>: jalan yang sama ke belakang

<kbd>Shift</kbd>+<kbd>Tab</kbd> mengambil kembali satu langkah per tekanan, dalam urutan tekanan itu dibuat: pilihan menyempit satu anak tangga tiap kali, tiap pelengkapan dikembalikan, dan tiap folder dilangkahi keluar — namanya kembali ke kolom sehingga Anda bisa menyuntingnya alih-alih mengetik ulang.

**Tak ada yang dihapus di jalan kembali.** Sebuah pelengkapan dikembalikan dengan *menandai* karakter yang ditambahkannya, persis seperti maju menandai apa yang telah dimekarkannya — nama tetap di depan Anda, dan tiap tekanan lebih lanjut menandai satu langkah lagi darinya:

| | kolom | ditandai |
| --- | --- | --- |
| dilangkahi masuk | `Alpha-one` | |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `ha-one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `Alpha-one` |

Mengetik menggantikan bagian yang ditandai, seperti di tempat lain mana pun. <kbd>Tab</kbd> mengembalikan persis apa yang dikembalikan oleh tanda itu, jadi melangkah dua langkah keluar dan dua langkah masuk lagi mengembalikan Anda ke tempat Anda sebelumnya.

Begitu seluruh nama ditandai tak ada lagi yang tersisa yang ditaruh oleh sebuah tekanan, dan tekanan berikutnya bergerak *ke atas jalur*: ia meninggalkan folder yang sedang Anda tempati, persis seperti <kbd>Backspace</kbd> pada kolom kosong. Itu juga tak berbiaya apa pun — nama folder kembali ke kolom **di depan** apa pun yang ada di dalamnya, ditandai, yang adalah teks yang sama seperti mengeklik folder itu akan memberikan kepada Anda. Kembali adalah sebuah arah, bukan riwayat pembatalan — tapi menandai nama terlebih dahulu berarti satu tekanan tak pernah sekaligus mengambil kembali apa yang Anda tulis dan membawa Anda keluar dari folder tempat Anda menulisnya.

Teks yang terbuka **sudah terpilih** — apa yang ditinggalkan klik folder di belakangnya — adalah nama yang dikerjakan <kbd>Tab</kbd> berikutnya: ia dilengkapi dan dilangkahi masuk seperti apa pun yang lain, dan mengetik menggantikannya. Hanya perintah fokus yang terbuka pada satu anak tangga tangga itu sendiri, karena ia menunjukkan kepada Anda seluruh jalur alih-alih sebuah folder untuk dilangkahi.

## Mengetik sesuatu yang bukan jalur

| Apa yang Anda ketik | Apa yang terjadi |
| --- | --- |
| `https://…` | Terbuka di tab baru dalam **Web viewer** bawaan Obsidian, jika plugin inti itu Anda aktifkan; jika tidak, di peramban desktop Anda |
| `obsidian://…` | Diserahkan ke penangan URI Obsidian sendiri |
| `file:///…` | Didekode dan dibuka: sebagai catatan sungguhan jika berada di dalam vault Anda, di viewer jika tidak |
| `/home/you/a%20b.md` | Hal yang sama, untuk jalur yang ditempel dari peramban atau pengelola berkas |

Hanya skema eksplisit yang dihitung — catatan bernama `100%20` tetap sebuah catatan. `/` yang menjadi bagian dari sebuah skema tetap harfiah alih-alih turun ke dalam folder, sehingga URL bisa diketik tangan dan tidak hanya ditempel.

## Perintah untuk papan tik

**Fokus ke bilah jalur** membuka kolom pada nama catatan dan melangkahinya seperti yang dilakukan <kbd>F2</kbd> — namanya, nama dengan ekstensinya, jalur dari vault Anda, jalur dari akar sistem — dan tekanan setelah itu menutup kolom dan mengembalikan kursor ke catatan. Ia tak mengubah nama: Enter bernavigasi, seperti pada kolom mana pun yang lain. Ia tak punya tombol sendiri secara bawaan, karena pedoman Obsidian mencegah plugin mengklaim satu; baris **Hotkeys** di akhir pengaturan plugin ini membuka *Pengaturan → Hotkeys* yang hanya menampilkan perintah-perintahnya, sehingga Anda bisa mengikatnya di sana.

## Navigasi tak pernah menyentuh berkas yang terbuka

Dalam mode bawaan (navigasi) catatan yang sedang terbuka **tak pernah** diubah namanya atau dipindahkan.

- Jalur yang mengarah ke berkas yang ada membukanya.
- Jalur yang belum ada langsung dibuat, beserta folder induk mana pun yang belum ada, dan dibuka. Tiap berkas dan folder yang dibuat dengan cara ini disebutkan dalam sebuah notifikasi — folder baru kalau tidak begitu tak terlihat sampai Anda mencarinya — dan kotak sampah Obsidian sendiri membuat yang tak diinginkan tinggal satu ketukan tombol untuk dibatalkan.
- **Di luar vault Anda ia tetap bertanya dahulu.** Di luar sana kesalahan ketik yang sama menulis ke dalam folder sistem, tempat baik notifikasi maupun kotak sampah Obsidian tak banyak menghibur.

## <kbd>Ctrl</kbd> — tab baru, dan menyalin alih-alih memindahkan

Catatan yang **dibuat, dipindahkan, atau disalin di dalam vault ditampilkan di tempat ia mendarat** di Penjelajah berkas, ditandai sejenak dengan warna aksen Obsidian — pohon berkas adalah tempat Anda mencarinya nanti, jadi ia diletakkan di depan Anda alih-alih ditinggalkan di folder yang bahkan mungkin tak terbuka. Menggandakan juga mengatakan begitu: salinan meninggalkan aslinya di tempatnya dan membuka salinannya di panelnya sendiri, yang tanpa sepatah kata pun mudah dibaca seolah tak ada yang terjadi.

Menahan <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> di macOS) saat memilih berkas dari daftar, atau saat menekan <kbd>Enter</kbd> pada sebuah jalur, mengirim hasilnya ke **tab baru** alih-alih ke tab ini:

| | Biasa | Dengan <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Pilih atau ketik berkas yang ada | Terbuka di sini | Terbuka di tab baru |
| Ketik jalur yang tidak ada | Bertanya, lalu terbuka di sini | Bertanya, lalu terbuka di tab baru |
| Kukuhkan jalur dalam mode ubah nama/pindah | **Memindahkan** catatan ke sana | **Menyalinnya** ke sana dan membuka salinannya di tab baru |

Tombol pengubah dibaca dengan aturan Obsidian sendiri, jadi ia berperilaku persis seperti pada tautan atau baris Penjelajah berkas — klik tengah juga berarti "tab baru", <kbd>Ctrl</kbd>+<kbd>Alt</kbd> berarti panel terbelah, dan <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> jendela baru.

Menyalin menolak menimpa, persis seperti memindahkan — termasuk ke jalur catatan itu sendiri, tempat tak ada yang masuk akal untuk disalin. Di luar vault, penolakan itu juga diucapkan dengan jelas.

Semuanya berfungsi **dengan daftar terbuka** maupun tanpanya: pada baris yang disorot tombol pengubah berlaku untuk baris itu, dan saat tak berdiri di mana pun ia berlaku untuk apa yang Anda ketik.

## Menjelajah di luar vault

**Ini nonaktif secara bawaan.** Aktifkan dulu **Akses berkas eksternal** di pengaturan — membaca dan menulis di luar vault adalah satu-satunya hal yang dilakukan plugin ini dan tidak dilakukan Obsidian sendiri, jadi Anda memilih masuk ke sana alih-alih keluar darinya. Bila nonaktif, nama vault sekadar menampilkan vault Anda di Penjelajah berkas, dan tak ada apa pun di sini yang melihat melampauinya.

Mengeklik **nama vault** (atau ikon 🏠, saat *Tampilkan nama vault* nonaktif) membuka daftar tempat, bukan isi. Ruas yang terbuka memuat **seluruh jalur tempat Anda berada, ditulis lengkap**, dengan tempat awalnya terpilih — jadi memilih tempat lain, atau mengetik menimpa yang terpilih, hanya menukar bagian awal itu dan menyisakan sisa jalur di depan Anda. **Tekan nama itu sekali lagi** — klik ganda — dan tandanya melebar mencakup semuanya, begitulah cara jalur absolut diambil dalam satu gerakan alih-alih disapu dengan tangan. Berubah pikiran? <kbd>Esc</kbd> mengembalikan baris seperti semula.

Mengetik di sini ditawari sisa nama sebuah tempat seperti di mana pun, dan <kbd>Tab</kbd> **menetapkan tempat itu** — tempat yang sedang Anda tuju, atau satu-satunya yang bisa dimaksud nama itu. Bila beberapa tempat masih berbagi apa yang Anda ketik, tekanan berhenti di percabangan, seperti di mana pun. Menunjuk sebuah tempat menampilkan **jalur tempat itu sendiri**, seluruhnya terpilih, diikuti jalur catatan Anda hanya sejauh ia benar-benar ada di sana — persis apa yang akan Anda dapatkan jika memilihnya. Sebuah tempat bukan langkah di dalam jalur di layar, melainkan titik untuk menghitung seluruh jalur darinya, jadi tak ada bekas tempat Anda tadi yang tersisa di depannya.

Tempat-tempat yang ditawarkan:

- **Vault Anda yang lain**, dibaca dari registri Obsidian sendiri, yang terakhir dibuka lebih dulu, masing-masing di bawah ikon vault milik Obsidian sendiri — ikon yang dipakai aplikasi untuk perintah vault. Vault yang sudah Anda buka mendapat rumah: itulah titik awal baris ini secara bawaan, bukan tempat untuk dituju.
- **Folder pribadi**, di bawah nama akun Anda, ditandai `~`. Lucide tidak punya tilde, jadi yang satu ini digambar oleh plugin di atas kisi 24×24 milik Lucide dengan ketebalan garis yang sama — ikon yang belum ada di set itu, bukan karakter teks yang duduk di antara ikon.
- **Akar sistem berkas**, berlabel `root` — tak diterjemahkan, karena itulah namanya di setiap sistem — alih-alih `/`, yang akan terbaca sebagai langkah kosong di sebelah pemisah yang mengikutinya.
- **Drive terpasang**, dengan ikon per jenis bila itu murah untuk ditentukan: berbagi jaringan, cakram optik, disket, dan media lepasan mendapat ikonnya sendiri; selebihnya mendapat drive umum. Di Windows drive tampil sebagai `C:` dengan ikon umum — nama volume dan jenis persisnya butuh WMI, yang sengaja tidak dilakukan.

Memilih vault lain **tidak memindahkan Obsidian ke sana.** Semua yang Anda buka tetap terbuka; jalurnya sekadar mulai menjelajah di sana. Itulah seluruh gunanya menaruhnya di bilah jalur alih-alih menyerahkannya ke pengalih vault di bilah sisi.

Ia juga mendarat **sedekat mungkin dengan catatan yang sedang Anda buka, sejauh tempat itu benar-benar sampai ke sana**.

- Jika tempat yang Anda pilih *memuat* catatan itu — folder pribadi, atau di mana pun vault Anda berada — Anda mendapat jalurnya dari sana: pilih `~` dengan `takeaways.md` terbuka dan ruasnya berbunyi `Vaults/your-vault/takeaways.md`.
- Jika itu tempat yang setara — vault lain, drive lain — jalur relatif yang sama dicoba, sejauh ia benar-benar ada. Vault sering kali hampir menjadi salinan satu sama lain, dan alasan berpindah ke salah satunya biasanya adalah catatan yang sama di sana.

Bagaimanapun, baris tetap berada di tempat yang Anda pilih dan **folder pertama dari jalur itu terbuka terpilih**, bentuk yang sama yang diberikan mengeklik sebuah folder: langkah yang paling mungkin Anda ubah saat berpindah ke tempat lain adalah yang paling dekat dengan awal, dan sisa jalur tetap terlihat selagi Anda mengubahnya. Tak ada apa pun yang pernah diisikan lebih dulu jika itu tidak benar-benar ada di disk.

### Selagi Anda di luar

Jalur **dimulai dari lokasi yang Anda pilih**, bukan dari tata letak direktori mesin — begitu pula ruas yang Anda dapatkan dengan mengeklik ruang kosong atau menekan tombol fokus: ia memuat jalur dari tempat itu, bukan jalur absolut mesin, dengan jejaknya diciutkan sampai ke tempat itu sendiri persis seperti ia menciut sampai ke akar vault di dalam — pilih `Archive` dan baris berbunyi `Archive / notes / …`, bukan `/home/you/Vaults/Archive/notes/…`. Segmen awal membawa ikon untuk apa dia sebenarnya (vault, folder pribadi, drive), dan <kbd>Backspace</kbd> berhenti di sana alih-alih terus melangkah naik ke sisa sistem berkas. Dengan *Tampilkan nama vault* nonaktif, segmen itu hanya berupa ikonnya saja — pengaturan ini tentang segmen pembuka baris, vault mana pun yang dinamainya, bukan hanya vault Anda sendiri.

Bilah jalur **dibingkai dengan warna galat** — cincin yang sama yang digambar mode ubah nama — selama ia menunjuk ke luar vault Anda. Ia menandai kondisi yang menetap, bukan momen: selama ia ada, tak satu pun penanganan Obsidian sendiri berlaku pada apa yang ditampilkan baris itu, dan penulisan terkunci sampai Anda berkata lain.

Selebihnya penjelajahan bekerja seperti di dalam: kepingan, pemisah, pengetikan, pelengkapan otomatis, <kbd>Backspace</kbd> untuk melangkah keluar. Aturan keterlihatan yang sama juga berlaku, jadi ekstensi tak didukung tetap butuh *Deteksi semua ekstensi berkas* milik Obsidian dan berkas titik tetap butuh pengaturan plugin ini.

**Klik kanan juga bekerja di luar sana**, meski menunya berbeda: penanganan Penjelajah berkas sendiri butuh berkas yang dikenali vault, jadi entri di luar dibangun dari jalurnya. Menu itu menawarkan membuka (di sini, ke kanan, di jendela baru, atau di aplikasi bawaan desktop Anda), *Salin jalur*, *Tampilkan di penjelajah sistem*, dan — begitu gembok terbuka — *Catatan baru*, *Folder baru*, *Buat salinan*, *Ubah nama…* dan *Hapus*. **Menyeret** tetap butuh berkas vault dan tetap tidak tersedia.

Menu yang sama ada pada berkas yang terbuka di penampil, lewat klik kanan atau dari titik tiga panel itu sendiri, dan ia menanyai gembok di bilah judul tampilan itu. Ia tidak menanyakan apa pun yang lain: apakah berkas sedang dirender atau ditampilkan sebagai sumber tak berpengaruh pada apakah ia bisa dihapus, dan gambar atau PDF — yang sama sekali tak punya tampilan sumber — sama dapat dihapusnya dengan sebuah catatan. *Hapus* berarti tempat sampah desktop, jadi bisa dibatalkan dari sana; sistem tanpa tempat sampah melaporkan hal itu alih-alih menghancurkan berkasnya.

Menghapus di luar vault memindahkan berkas ke **tempat sampah sistem** Anda — Recycle Bin di Windows, Trash di macOS — tak pernah unlink. Di luar sini tak ada tempat sampah Obsidian untuk dipulihkan, jadi penghapusan yang tidak bisa dibatalkan sama sekali tidak ditawarkan: pada platform tanpa tempat sampah, upaya itu justru melaporkan kegagalannya.

### Menulis di luar vault

Segala sesuatu yang menulis **terkunci secara bawaan**. Selama baris menunjuk ke luar vault Anda, tempat sakelar ubah nama di bilah judul digantikan oleh **gembok merah** — warna yang sama dengan cincin di sekeliling baris, dan untuk alasan yang sama: ia menandai penolakan. Keduanya adalah satu kendali dalam satu slot, jadi tak pernah ada pertanyaan yang mana dari keduanya membatasi apa.

Tiga tekanan, dalam satu siklus:

| Tekanan | Yang Anda dapat |
| --- | --- |
| Gembok merah | Menulis di sini diizinkan. Gembok digantikan oleh sakelar ubah nama/pindah |
| Sakelar | Mode ubah nama/pindah, persis seperti di dalam vault |
| Sakelar lagi | Mode berakhir dan gembok tertutup lagi — izin tidak bertahan lebih lama dari hal yang untuknya ia dibuka |

**Tombol ubah nama juga menanyai gembok.** Di luar vault Anda, menekannya membuat
gembok berkedip terbuka lalu tertutup alih-alih membuka mode yang tiap komitnya akan ditolak:
penolakan tiba sebelum pekerjaan, bukan sesudahnya. Tekan gemboknya, atau
tekan tombol ubah nama lagi dalam setengah detik — tekanan kedua memberikan persis
apa yang diberikan tombol itu, untuk lokasi ini, dan membuka mode ubah nama bersamanya.

Di dalam vault Anda tak ada gembok: tak ada yang perlu dibuka kuncinya, dan sakelar itu sekadar menempati slotnya.

Izin diberikan **kepada sebuah lokasi, bukan kepada sebuah momen**: ia bertahan melewati apa pun yang Anda lakukan selagi bekerja di satu tempat — menyelesaikan sebuah pemindahan, mengeklik keluar dari input, membuka sebuah berkas — dan berakhir saat Anda memilih vault, drive, atau akar lain dari daftar, saat baris kembali ke berkas vault, atau pada tekanan ketiga itu. Jadi serangkaian pemindahan di dalam satu folder butuh satu tekanan, bukan satu per berkas.

Dengan gembok terbuka, bilah jalur berperilaku di luar sana seperti di dalam:

| Tindakan | Hasil |
| --- | --- |
| Ketik nama yang tidak ada, <kbd>Enter</kbd> | Pertanyaan "buat?" yang sama seperti di dalam; folder induk yang hilang ikut dibuat. Nama tanpa ekstensi menjadi `.md`, persis seperti di dalam |
| Mode ubah nama/pindah, ketik nama baru | Mengubah nama berkas yang sedang ditampilkan baris. Nama tanpa ekstensi mempertahankan ekstensi berkas itu — di luar sini satu folder memuat segala jenis berkas, dan penggantian nama tak boleh diam-diam mengubah `.png` menjadi `.md` |
| Mode ubah nama/pindah, jelajah ke tempat lain, pilih **pertahankan nama ini** | Memindahkannya ke sana dengan nama yang sudah dipakainya |
| Tahan <kbd>Ctrl</kbd> pada keduanya | Menyalin alih-alih memindahkan, dan membuka salinannya di tab baru |

Dalam keadaan terkunci, semua itu melaporkan apa yang menghalanginya alih-alih terjadi. Tak ada yang pernah ditimpa dalam kedua keadaan: sasaran yang sudah ada ditolak, dan penolakannya adalah penolakan sistem berkas itu sendiri (`COPYFILE_EXCL`, pembuatan eksklusif) alih-alih pemeriksaan yang bisa kalah balapan. Pemindahan lintas sistem berkas — dari flash disk, dari berbagi jaringan — jatuh ke salin-lalu-hapus, dan aslinya baru dihapus setelah salinannya mendarat.

**Memindahkan catatan *ke luar* vault Anda bertanya dulu.** `fileManager` tidak bisa mengikuti sebuah berkas melintasi batas itu: setiap tautan yang menunjuk ke catatan itu berhenti terselesaikan, tak ada yang memperbaruinya, dan catatan itu keluar dari indeks vault. Jadi pemindahan ditawarkan sebagai keputusan alih-alih ditolak atau dilakukan diam-diam — sebuah dialog menyatakan apa biayanya dan berapa banyak catatan yang menaut ke catatan yang Anda pindahkan. Konfirmasi dan ia benar-benar berpindah: disalin keluar, lalu dihapus dari vault lewat penghapusan Obsidian sendiri, jadi ia dapat dipulihkan persis seperti catatan yang dihapus, dan kegagalan di salah satu langkah membiarkan catatan tetap di tempatnya. Menahan <kbd>Ctrl</kbd> tetap menyalinnya keluar alih-alih memindahkan, yang tidak punya masalah itu sama sekali. Arah sebaliknya — membawa berkas luar *ke dalam* vault — belum disambungkan.

### Membuka berkas eksternal

Menjelajahi sistem berkas dapat berjalan balik **ke dalam vault yang sedang Anda buka** — dari akar, dari folder pribadi, dari di mana pun vault Anda berada. Berkas yang dijangkau dengan cara itu adalah catatan biasa, jadi ia terbuka sebagai satu: editor sungguhan, tautan dan tautan balik, dan barisnya kembali ke jalur berakar-vault. Hanya berkas yang tak punya tampilan di Obsidian yang tetap di pratinjau, karena di luar sana pratinjau adalah jawaban yang lebih baik. Bila sebuah pratinjau tetap menampilkan catatan semacam itu — ruang kerja yang dibuka ulang, misalnya — baris teratasnya menawarkan **Buka di *(vault)***, tawaran yang sama seperti yang dilakukan dengan tangan.

Editor Obsidian hanya bekerja pada berkas di dalam vault, jadi berkas eksternal **tidak dapat** dibuka sebagai catatan sungguhan dengan tautan, tautan balik, dan sebagainya — itu batas aplikasi, bukan batas plugin ini. Memilih satu justru membuka **pratinjau**, hanya-baca sampai Anda berkata lain:

| Jenis | Ditampilkan sebagai |
| --- | --- |
| `.md`, `.markdown` | Markdown terenderkan |
| `.html`, `.htm`, `.xhtml` | Halaman terenderkan |
| Gambar, audio, video, PDF | Pemutar/penampil bawaan |
| Berkas **teks** lainnya (`.json`, `.css`, `.log`, `.txt`, …) | Teks polos apa adanya |
| Format biner tanpa penampil (`.zip`, `.exe`, …) | Diserahkan ke *Buka di aplikasi bawaan* |

Penampil punya dua pembacaan atas sebuah berkas, dan karena keduanya saling meniadakan, hanya yang akan Anda **tuju** yang ditampilkan:

| | Yang dilakukannya | Bawaan untuk |
| --- | --- | --- |
| **Lihat sebagai Markdown** | Merender berkas sebagai catatan, hanya-baca | `.md`, `.markdown` |
| **Tampilkan sebagai halaman** | Merender berkas sebagai halaman apa adanya, hanya-baca | `.html`, `.htm`, `.xhtml` |
| **Edit sebagai teks** | Sumbernya, dapat disunting | selebihnya |

Di luar vault, **Edit sebagai teks** sekaligus tekanan yang mengangkat hanya-baca — modenya dan izinnya satu gerakan, bukan dua tombol untuk dipikirkan. Ia diwarnai merah **setiap kali menekannya akan mengangkat hanya-baca**, entah Anda menyiapkan penyuntingan di tempat atau datang langsung dari tampilan terenderkan; di dalam vault tak ada yang perlu dibuka, jadi ia tetap polos. **Lihat sebagai Markdown** mendapat sapuan aksen tipis — rona yang sama yang diberikan Obsidian pada teks terpilih — menandainya sebagai jalan kembali, bukan ajakan bertindak.

Karena tombol mengikuti *penyuntingan* alih-alih mode mentahnya, berkas yang duduk hanya-baca di tampilan teks tetap menawarkan **Edit sebagai teks**: itulah tekanan yang menyiapkannya. Berkas yang tak akan pernah bisa diketik — terpotong, atau tak terbaca — malah berbunyi **Lihat sebagai teks**, karena hanya itu yang bisa diberikan tekanan itu.

Bawaannya dibuat berguna alih-alih harfiah: `#` dalam skrip shell adalah komentar, bukan judul, jadi merender `.log` sebagai Markdown akan menelannya diam-diam. Kedua bawaan bisa ditimpa per berkas, dan pilihannya masuk ke riwayat panel, jadi maju/mundur dan ruang kerja yang dibuka ulang mempertahankannya — banyak catatan hidup dalam berkas `.txt`, dan banyak berkas `.md` lebih mudah dibaca sebagai sumber.

#### Apa yang boleh dilakukan sebuah halaman HTML

Tak ada apa pun. Halaman ditampilkan dalam sebuah bingkai dengan **setiap izin
ditahan** — tanpa skrip, tanpa formulir, tanpa navigasi, tanpa asal miliknya sendiri —
dan kebijakan konten yang sama sekali tidak mengizinkannya berjaringan. Itu bukan
kehati-hatian demi kehati-hatian: halaman lokal yang dimuat dengan cara biasa akan
berbagi asal dengan jendela ini, dan jendela ini adalah Obsidian, jadi skrip dalam
berkas HTML yang diunduh akan berjalan di dalam aplikasi Anda dengan jangkauan
aplikasi Anda.

Yang hilang karenanya adalah apa pun yang *dilakukan* halaman itu; yang dipertahankan
adalah segala sesuatu yang *menjadi* halaman itu. Lembar gaya dan gambar yang duduk
di sebelah berkas itu dibaca dan dibawa masuk ke dalam bingkai, jadi halaman yang
tersimpan tetap terlihat seperti dirinya. Rujukan yang menunjuk ke luar folder
halaman itu sendiri, dan rujukan ke suatu tempat di web, dibiarkan persis seperti
tertulis dan sekadar tidak dimuat — sebuah berkas lokal tidak bisa diam-diam
memberi tahu server bahwa Anda membukanya.

Skrip **dihapus** alih-alih sekadar diblokir, sehingga halaman yang Anda lihat dan
sumber yang bisa Anda tuju berbeda dengan satu cara yang dinyatakan, alih-alih
dengan apa pun yang secara diam-diam ditolak dijalankan oleh bingkai itu. Tautan
di dalam halaman tidak melakukan apa pun. Saat Anda menginginkan yang sungguhan —
skrip, jaringan, dan semuanya — *Buka di aplikasi bawaan* menyerahkannya ke
peramban Anda, yang memang alat yang tepat untuk itu.

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

- **Buka di *(vault)*** — ditampilkan saat berkas itu milik salah satu vault Anda yang lain. Menyerahkannya ke penangan URI Obsidian sendiri, yang membuka jendela vault itu dengan catatannya di dalamnya, sebagai catatan sungguhan yang dapat disunting. Jendela ini dibiarkan persis seperti semula; tak ada yang berpindah di bawah Anda.
- **Lihat sebagai Markdown** / **Tampilkan sebagai halaman** / **Edit sebagai teks** — dua pembacaan yang dimiliki berkas ini; yang terakhir juga mengangkat hanya-baca di luar vault.
- **Buka di aplikasi bawaan** — menyerahkan berkas ke aplikasi bawaan desktop Anda, termasuk format biner yang tak bisa ditampilkan penampil ini. Diberi kata yang persis sama dengan entri Obsidian sendiri untuk tindakan yang sama, karena memang tindakan yang sama.

Penampil juga menjawab **klik kanan**: di dalam editor teks dengan *Potong* / *Salin* / *Tempel* / *Pilih semua*, dan di tempat lain mana pun dengan menu berkas itu sendiri. Menu titik tiga Obsidian di bilah judul juga membawa menu itu — di luar vault ia kalau tidak akan menawarkan apa-apa selain *Bagi ke kanan* dan *Bagi ke bawah*.

Tak ada apa pun di luar vault Anda yang ditulis kecuali Anda menekan *Edit sebagai teks* lebih dulu. Lihat bagian [Di luar vault](README.id.md#di-luar-vault) pada README untuk pengungkapan lengkapnya.

## Menjatuhkan berkas ke folder di jalur

Setiap folder di baris itu adalah target jatuhan, jadi **catatan yang diseret
ke sana akan pindah ke situ** — rute tersingkat ke sana adalah antara sebuah
catatan dan folder mana pun di atasnya, karena tujuannya sudah ada di layar.
Seret dari File Explorer, dari daftar, dari nama catatan itu sendiri di bilah
judul, atau dari mana pun di Obsidian yang menghasilkan sebuah berkas: ini
adalah seret bawaan aplikasi, jadi label saat mengarahkan kursor, kursornya,
dan sorotannya adalah yang digambar oleh File Explorer sendiri.

**Nama vault juga menerima jatuhan**, karena itu adalah folder di puncak baris
— satu-satunya gestur yang menempatkan catatan di root vault dari sini.

**Seluruh seleksi bisa diseret sekaligus**, dan berpindah sebagai satu
kesatuan: jika salah satu di antaranya tidak bisa dipindahkan, jatuhan itu
ditolak alih-alih memindahkan sebagian dan diam-diam melewatkan sisanya.

Tautan mengikuti catatan, persis seperti ketika catatan dipindahkan dari File
Explorer atau dengan mengetik jalur.

Folder yang **tidak bisa menerima jatuhan tidak menawarkan apa-apa** dari
dirinya sendiri — tidak ada label *Move into*, tidak ada sorotan pada folder
itu — daripada menawarkan sesuatu yang kemudian akan gagal; jawaban bawaan
Obsidian untuk bilah judul, *Open in this tab*, adalah yang berdiri di situ
sebagai gantinya. Tiga kasus:

- folder tempat berkas itu **sudah berada**, karena ia sudah ada di sana;
- folder yang dijatuhkan **ke dalam dirinya sendiri atau ke dalam
  keturunannya sendiri**, yang akan membuatnya tak punya asal untuk kembali;
- seleksi yang berisi **sebuah folder dan sesuatu di dalamnya**, karena
  memindahkan folder itu membawa serta anaknya.

Folder yang sudah memiliki **berkas dengan nama yang sama** menerima jatuhan
itu dan menanyakan apa yang harus dilakukan terhadap berkas yang menghalangi,
dengan dialog yang sama seperti nama yang diketik atau dipilih yang sudah
dipakai — lihat [A name that is taken](#nama-yang-sudah-dipakai). Tidak ada yang
ditimpa di sini.

Hanya folder **di dalam vault Anda** yang menerima jatuhan. Selagi baris itu
menunjuk ke luar vault, segmen-segmennya menolak, karena membawa catatan
keluar dari vault memutus setiap tautan ke sana — sebuah keputusan yang layak
mendapat pertanyaan, bukan sekadar gestur. Cara melakukannya dengan sengaja
tetap dengan mengetik jalur, yang bertanya lebih dulu dan memberi tahu berapa
banyak catatan yang akan terpengaruh.

## Menjatuhkan teks atau berkas untuk menuliskannya

Target yang sama menerima **konten** selain berkas, dan keduanya dibedakan
lewat apa yang Anda seret, bukan lewat di mana Anda melepaskannya.

**Ke catatan yang sudah disebutkan namanya di baris itu** — nama catatan itu
sendiri, atau pemisah yang foldernya punya catatan folder — apa yang Anda
jatuhkan akan ditambahkan di ujungnya, setelah satu baris kosong. Ini bertanya
lebih dulu, karena ini menulis ke dalam berkas yang sudah ada dan menyeret
adalah gestur yang bisa dilakukan tangan yang tidak stabil secara tidak
sengaja. Teks dari editor, berkas dari desktop Anda, dan catatan yang diseret
keluar dari vault ini semuanya berfungsi; berkas dibaca sebagai teks, dan
berkas biner ditolak alih-alih ditempel sebagai satu layar penuh omong
kosong.

**Ke sebuah tempat — nama vault atau sebuah folder** — belum ada yang
ditulis, karena belum ada yang dinamai. Bidang isian terbuka di situ
memegang apa yang Anda jatuhkan, dan nama yang Anda ketik itulah yang
mengesahkannya: catatan baru *dibuat* berisi teks itu, dan catatan yang sudah
ada ditanyakan persis seperti di atas. <kbd>Esc</kbd>, atau klik di tempat
lain, melepaskan semuanya.

**Baris berdering biru** selagi jatuhan yang akan mendarat sebagai konten
berada di atasnya, dan tetap biru selagi bidang isian memegang salah satunya
— biru yang sama, mengatakan hal yang sama: apa yang terjadi selanjutnya
adalah tentang teks yang Anda bawa. Berkas yang diseret dari vault Anda
sendiri ke sebuah folder tetap berarti *pindahkan ke sana*, tetap memakai
sorotan bawaan Obsidian, dan tidak pernah berdering biru; gestur itu sudah
ada lebih dulu dan konten menyingkir darinya.

## Ketika jalur lebih panjang daripada panel

Nama-nama **dipendekkan, bukan dihimpit**, dalam urutan yang paling kecil
kemungkinannya Anda butuhkan:

1. **Nama vault lebih dulu**, sampai hanya ikonnya saja. Anda tahu vault
   mana yang sedang Anda buka; ikon itu tetap mengatakan dari mana jalur ini
   bermula.
2. **Lalu ekstensi berkas**, jika Anda mengaktifkannya — tiga karakter yang
   sama pada hampir semua berkas dalam sebuah vault. Ekstensi ini utuh atau
   tidak sama sekali, tanpa dipendekkan: setengah ekstensi tidak mengatakan
   apa-apa yang tidak dikatakan oleh tanpa ekstensi.
3. **Lalu folder-folder, yang terpanjang lebih dulu.** Nama folder terpanjang
   dipendekkan sampai sepanjang nama terpanjang berikutnya, lalu keduanya
   bersama-sama, dan seterusnya, masing-masing berhenti di batas
   minimalnya — jadi satu folder yang sangat panjang melepaskan semua
   kelebihannya dibanding yang lain sebelum nama pendek di sebelahnya
   kehilangan satu huruf pun.
4. **Nama berkas itu sendiri paling akhir**, dan ia mempertahankan sekitar
   enam karakter. Untuk itulah bilah judul ini ada.

Ruang diserahkan **secara terus-menerus**, dalam pecahan piksel, bukan satu
huruf sekaligus: nama yang mengalah dipotong tepat di piksel dan memudar di
bawah `…`-nya, jadi panel yang diseret pelan-pelan menyempitkan baris dengan
mulus dan tidak ada yang di belakangnya bergerak dalam langkah-langkah.
Sebelum satu huruf pun hilang, ruang di sekitar pemisah dihabiskan lebih
dulu — itu satu-satunya jarak dalam baris ini dan tidak berbiaya informasi
sama sekali — dan nama yang dipendekkan berakhir tepat di mana pemisah
dimulai, tanpa ada jalur kotak kosong di antara keduanya.

**Bidang isian mengambil apa yang dipegangnya.** Membuka satu untuk mengetik
jalur tidak menghimpit folder-folder di sebelahnya untuk minggir: lebarnya
sama dengan teks di dalamnya dan tumbuh seiring Anda mengetik, jadi jejaknya
tetap mempertahankan semua yang tidak dibutuhkan oleh bidang isian itu.
Hanya ketika ruang tidak cukup untuk keduanya baris itu akan bergulir, dan
saat itu bidang isian adalah satu-satunya hal yang tidak pernah mengalah — ia
adalah teks yang sedang disunting, bukan nama yang sedang disesuaikan.

Tidak ada yang dipotong melebihi apa yang membedakannya dari tetangganya:
`Projects2025` dan `Projects2026` dalam folder yang sama menyusut menjadi
`…025` dan `…026`, bukan menjadi awalan yang akan membuat keduanya menjadi
kata yang sama, sementara `Reports` di sebelah `Receipts` bisa menyusut
menjadi `Rep…`. Selain itu setiap nama mempertahankan **lebar yang terbaca** —
kira-kira selebar empat huruf untuk folder dan enam untuk nama berkas,
diukur dalam fon yang benar-benar dipakai untuk menggambar baris ini, bukan
dihitung. Empat huruf sempit dan empat huruf lebar bukanlah jumlah nama yang
sama, jadi `lilliliillil` diperbolehkan mempertahankan lebih banyak dirinya
sendiri dibanding `WWMMWWMMWWMM`, dan yang tersisa di layar berukuran sama
pada keduanya. Nama pendek dibiarkan sama sekali tidak disentuh — nama yang
digerus menjadi `A…` memang unik tapi tetap tidak terbaca. **Spasi tidak
dihitung.** Enam karakter untuk mengatakan berkas mana ini adalah enam
karakter yang layak dibaca, jadi spasi di antaranya ikut serta secara
cuma-cuma dan satu spasi tidak pernah dibiarkan menempel pada `…`, tempat ia
toh akan tak terlihat.

**Sebuah nama dipotong di mana pun tetangganya sepakat dengannya, dan di
tengah ketika mereka tidak sepakat di mana pun.** Dua folder bernama
`aaaa-common-one` dan `aaaa-common-two` berbagi semuanya kecuali tiga
karakter terakhirnya, jadi memotong ekornya mempertahankan bagian yang tidak
mengatakan apa-apa: keduanya menyusut menjadi `…one` dan `…two`, yang lebih
pendek *sekaligus* membedakan keduanya. Ketika kesepakatan ada di
akhir — `alpha-draft` di sebelah `beta-draft` — akhirnyalah yang hilang;
ketika ada di kedua ujung, yang tersisa adalah bagian tengah. Nama tanpa
tetangga yang dekat kehilangan bagian tengahnya, karena sebuah nama dibuka
dengan apa dirinya dan ditutup dengan yang mana dirinya — untuk sebuah
berkas, itu adalah ekstensinya: `annual…2026.md`.

Kesamaan yang pendek tidak dihitung. `parallel structures` kebetulan
berakhir dengan dua huruf yang sama seperti `Schemes` di sebelahnya, dan itu
bukan alasan untuk mempertahankan salah satu tetap utuh — tiga karakter dari
depan saja sudah membedakan keduanya.

Tidak ada yang melipat ke baris kedua. Ketika bahkan nama-nama sejujur
mungkin yang paling pendek pun tidak muat, baris itu **bergulir ke
samping**, terparkir di ujung tempat berkas itu berada — pada titik itu
tidak ada lagi yang bisa dipadatkan, dan memotong lebih jauh akan
menyembunyikan, bukan memendekkan. Roda tetikus menggulirkannya di mana pun
penunjuk berada di atas baris itu, dan kedua ujung dapat dicapai: selagi
bergulir baris itu meratakan diri ke awalnya, apa pun kata pengaturan
perataan, karena konten yang dipusatkan dalam kotak yang telah dilampauinya
meluap ke kiri sama seperti ke kanan — dan separuh itu sama sekali tidak
bisa dicapai dengan menggulir.

**Arahkan ke nama yang dipendekkan dan ia kembali utuh**, selama Anda
mengarahkannya, tergulir ke tepi kiri sehingga semua yang kembali ada di
layar. **Klik satu dan ia tetap begitu**: bidang isian terbuka menampilkan
folder yang Anda klik, apa yang ditawarkan setelahnya, dan apa pun yang Anda
ketik, dan ia terus menampilkannya setelah penunjuk berpindah. Nama-nama
tetap diam selagi Anda menggulir baris atau mengetik ke dalamnya — satu nama
yang tiba-tiba terbuka di bawah gestur yang dimaksudkan untuk membaca baris
itu akan menggeser semua yang ada setelahnya dari bawah Anda.

**Segmen pembuka selalu membawa tip alat, dan itu adalah jalur mutlak** —
`/home/anda/Vaults/Notes`, atau di mana pun baris itu dimulai. Itulah
satu-satunya hal tentang baris ini yang tidak bisa dikatakan oleh apa pun di
layar: namanya memberi tahu vault yang *mana*, tidak pernah di mana
letaknya. Ia ada di sana baik ada sesuatu yang harus dipendekkan atau tidak.

Dengan **Tampilkan nama vault** dimatikan, namanya tidak dihapus, hanya
ditahan pada nol — jadi mengarahkan ke ikonnya mengembalikannya persis
seperti mengarahkan ke nama yang harus dipendekkan oleh baris itu.

**Tampilkan ekstensi berkas** mengembalikan ekstensi pada nama berkas di
baris itu. Mati — bawaannya — baris itu menamai catatan seperti Obsidian
menjudulinya, tanpa `.md` yang dimiliki bersama oleh hampir semua berkas
dalam vault; menyala, ia menamainya seperti sistem berkas melakukannya, yang
berguna ketika vault menyimpan lebih dari sekadar catatan. Ini juga adalah
hal kedua yang dilepaskan oleh baris itu ketika ruang menipis, tepat setelah
nama vault.
Tip alat memberi Anda sisanya: bukan hanya nama tapi semua yang ditampilkan
baris itu di bawahnya, sebagai `…/nama/folder/catatan.md`, jadi satu kali
mengarahkan kursor menjawab baik "ini apa" maupun "ada apa di bawahnya".
Ikon vault menamai vaultnya dengan cara yang sama, ketika namanya dimatikan
atau telah terhimpit habis.

## Dua warna peringatan

| | Kapan | Apa artinya |
| --- | --- | --- |
| Lingkaran **merah** pada bilah jalur | Baris itu menunjuk ke luar vault Anda | Obsidian tidak bisa membuka apa yang ada di sana sebagai catatan, dan tidak ada yang ditulis di luar sana sampai Anda membuka gemboknya. |
| Lingkaran **oranye** pada bilah jalur | Berkas itu adalah jenis teks yang belum punya tampilan di Obsidian | Sebuah peringatan. Obsidian akan menyerahkannya ke aplikasi bawaan desktop Anda; plugin ini menampilkannya sebagai gantinya. |
| Teks **merah** di bidang isian yang terbuka | Belum ada apa pun di jalur itu | <kbd>Enter</kbd> akan membuatnya, bukan membukanya. Ini bukan begitu peringatan melainkan pernyataan tentang apa yang akan dilakukan tombol berikutnya — lihat [Typing a path](#mengetik-jalur). |
| Gembok **merah** menggantikan tombol ubah nama | Baris itu menunjuk ke luar vault Anda dan menulis di sana masih terkunci | Merah yang sama seperti lingkaran itu, untuk alasan yang sama: menandai sebuah penolakan. Menekannya mengizinkan penulisan di sini dan mengembalikan slot itu ke tombolnya — lihat [Writing outside the vault](#menulis-di-luar-vault). |

**Kedua lingkaran itu independen, dan keduanya bisa aktif sekaligus** — sebuah `.json` eksternal berada di luar vault Anda *dan* merupakan jenis yang belum punya editor di Obsidian. Di penampil, keduanya muncul sebagai baris terpisah, masing-masing hanya menyatakan faktanya sendiri. Pada bilah jalur, merah menang ketika keduanya berlaku, karena dua lingkaran hanya akan menjadi gaduh. Teks *merah* adalah hal ketiga yang sama sekali berbeda: ini tentang apa yang sedang diketik, bukan tentang ke mana baris itu menunjuk, jadi ia bisa muncul di dalam lingkaran mana pun atau tidak sama sekali.

Tingkat oranye ini sengaja dibuat sempit. Jenis yang terdaftar (Markdown, canvas, gambar, PDF, audio, video) ditangani dengan baik dan tidak mendapat apa-apa. Berkas biner juga tidak mendapat apa-apa — Anda tidak akan menyunting `.zip` menjadi kekacauan secara tidak sengaja. Yang tersisa adalah persis bahayanya: `.json`, `.css`, atau `.log` yang dibuat terlihat oleh **Show all file types**. Daftar itu sengaja dibuat lebih luas: di sana, semua yang bukan catatan berwarna oranye — lihat [how dropdown entries are tinted](#bagaimana-entri-daftar-diwarnai).

## Mode pindah/ubah nama

Tombol pensil di ujung kanan bilah judul — di sebelah tombol mode tampilan, seukuran dengan tombol bawaan — mengalihkan mode pindah/ubah nama. Di luar vault Anda, sebuah gembok merah berdiri di tempatnya sampai Anda menekannya; lihat [Writing outside the vault](#menulis-di-luar-vault). Baris bilah judul kemudian dibingkai dengan warna aksen, persis seperti mengubah nama di File Explorer. Klik dan penekanan tombol yang sama kini mengesahkan pemindahan atau penggantian nama lewat `fileManager.renameFile` milik Obsidian, sehingga semua tautan ke catatan itu ikut serta.

Selagi mengubah nama:

- Nama berkas saat ini disematkan ke dalam daftar setiap folder, jadi memindahkan catatan tanpa mengubah namanya hanya perlu satu klik.
- Nama yang sudah dipakai di folder tujuan berwarna **merah** — sebuah folder yang sudah memiliki nama itu, dan sebuah berkas dengan nama itu — sehingga benturan itu terlihat sebelum Anda memilih. Nama itu tetap bisa dipilih: lihat di bawah.
- Masukan divalidasi secara langsung terhadap aturan penggantian nama Obsidian sendiri — set karakter yang sama, pesan yang sama, tip alat merah yang sama seperti saat mengubah nama di pohon berkas — jadi nama yang tidak sah ditandai saat Anda mengetik dan tidak bisa disahkan.
- Mengeklik di luar bilah judul, atau bilah judul kehilangan fokus, mengakhiri mode ubah nama.

### Nama yang sudah dipakai

Memindahkan atau mengubah nama ke nama yang sudah ada **bertanya alih-alih
menolak.** Sebuah dialog terbuka dengan dua jalur yang bisa Anda sunting: ke
mana berkas Anda pergi, dan ke mana berkas yang menghalangi itu pergi —
merah selama itu masih dipakai. Setiap jalur juga digambar dengan cara yang
sama seperti bilah jalur menggambarnya, dengan bagian yang berbeda diwarnai
dan dipendekkan paling akhir, sehingga jalur yang panjang tetap menunjukkan
apa yang berubah.

Kedua bidang isian punya daftar. Yang kedua memuat jalan keluar yang biasa:

- **Tukar tempat** — berkas itu pergi ke folder lama berkas Anda, dengan
  namanya sendiri.
- **Tukar nama** — ia tetap di tempatnya dan mengambil nama lama berkas
  Anda.
- **Tukar keduanya** — ia mengambil jalur lama berkas Anda.
- `-1`, `-bak`, dan `-old` di samping namanya sendiri.
- Kedua nama yang dimiliki berkas-berkas itu.

Daftar pertama menawarkan ke mana berkas Anda akan pergi, **Biarkan di
tempatnya**, namanya sendiri di folder tujuan, dan `-1`, `-bak`, dan `-old`
di sampingnya. Jalan keluar yang jalurnya sudah dipakai berwarna abu-abu dan
tidak bisa dipilih. Memilih satu **hanya mengisi bidang isian** — Anda masih
bisa menyuntingnya — dan **Terapkan** memindahkan keduanya, tautan dan
semuanya; **Batal** tidak memindahkan apa pun. Memilih nama yang sudah
dipakai dari daftar akan menanyakan hal yang sama, begitu juga menjatuhkan
catatan ke folder yang sudah memiliki nama itu.

## Satu tombol untuk kedua penggantian nama

Perintah ganti nama (<kbd>F2</kbd> secara bawaan, atau apa pun yang telah Anda ubah pintasannya) **berganti-ganti** antara penggantian nama inline title Obsidian dan bilah jalur bagian kepala milik plugin ini. Jika Anda telah mematikan inline title Obsidian, bilah jalur bagian kepala menjadi satu-satunya sasaran, sehingga tombol itu tidak pernah tidak melakukan apa-apa.

Di bilah jalur, ia terbuka pada **nama tanpa ekstensinya** — pengeditan yang hampir selalu menjadi tujuan penggantian nama, dan hal yang sama yang dipilih dengan mengeklik nama tersebut. Tekan lagi dan ia melakukan apa pun yang akan dilakukan <kbd>Tab</kbd> di situ: pada nama, itu adalah anak tangga berikutnya — nama dengan ekstensinya, jalur dari folder vault Anda, jalur dari akar sistem; dengan sesuatu yang sudah diketik, ia melengkapinya, sebagaimana <kbd>Tab</kbd>.

**Siklus ini menutup di judul.** Lima kali tekan membawa Anda berputar penuh — inline title, nama, nama dengan ekstensinya, jalur dari vault Anda, jalur dari akar sistem — dan yang keenam adalah inline title lagi. Tekanan itu satu-satunya yang berbeda dari <kbd>Tab</kbd>, yang malah berputar kembali ke depan jalur — dan yang ketujuh menuju ke tempat yang sama dengan putaran <kbd>Tab</kbd>: akar vault, dengan seluruh jalur berada di bidang tersebut dan folder pertamanya ditandai. Jadi setiap langkah yang dicapai <kbd>Tab</kbd>, tombol ini pun mencapainya.

Perintah **Fokus ke bilah jalur** melakukan hal yang sama di dalam bidang tersebut — apa pun yang akan dilakukan <kbd>Tab</kbd> — dan di tempat <kbd>Tab</kbd> akan berputar, ia justru mengembalikan kursor ke catatan. Tekanan berikutnya adalah putarannya: akar vault, folder pertama ditandai.

**Dalam bidang yang sudah terbuka**, tombol ini mengubahnya menjadi penggantian nama di tempatnya berada — mempertahankan teks, kursor, dan seleksi — dan **Fokus ke bilah jalur** mengembalikannya dari mode ganti nama dengan cara yang sama. **Apa pun yang lain** yang ditekan atau diklik di antara tekanan-tekanan itu memulai kembali salah satu siklus, sehingga tekanan setelah Anda selesai mengedit tidak akan pernah jatuh pada anak tangga sisa dari sebelumnya.

Di luar vault tombol ini juga bekerja — tidak ada inline title di sana, jadi tekanan pertama langsung menuju bilah jalur.

Ini bekerja dengan membungkus perintah `workspace:edit-file-title` alih-alih merebut tombolnya, jadi mengubah pintasan maupun menjalankan perintah dari palet sama-sama bekerja tanpa perubahan.

## Bagaimana entri daftar diwarnai

| Warna | Artinya |
| --- | --- |
| **Ungu** | Sebuah catatan (`.md`, `.markdown`) — yang akan dibuka Obsidian sebagai catatan, dipilih dari folder berisi campuran konten |
| **Oranye** | Bukan catatan — apa pun yang tidak akan dibuka Obsidian sebagai catatan, dari PDF hingga `.txt`, beserta entri `:page` yang menyertainya. Folder berisi campuran konten dibaca untuk catatan-catatan di dalamnya, dan satu warna untuk semua yang lain menyampaikan hal itu lebih cepat daripada peringatan pada sebagian saja; lihat [dua warna peringatan](#dua-warna-peringatan) |
| **Redup** | Di luar vault Anda, sehingga penanganan khusus vault tidak berlaku |
| **Biru**, tebal | Tempat Anda sudah berada: catatan milik bilah ini sendiri, dan folder tempat bilah jalur berdiri. Dalam mode ganti nama/pindah, entri *pertahankan nama ini* menempati posisi catatan tersebut — catatan yang sama dalam kedua kasus |
| **Merah** | Hanya dalam mode ganti nama/pindah: nama tersebut sudah dipakai. Tetap dapat dipilih — memilihnya akan menanyakan apa yang harus dilakukan dengan berkas yang menghalangi; lihat [Nama yang sudah dipakai](#nama-yang-sudah-dipakai) |

**Folder dicetak tebal**, sehingga catatan milik sebuah folder tidak memerlukan warna tersendiri untuk membedakannya dari foldernya: ia berwarna ungu seperti catatan lainnya. **Garis di tepi baris** menandai nama-nama yang dimulai dengan apa yang Anda ketik — biru di mana kesesuaiannya berlanjut lebih jauh, hijau pada cabang yang diambil oleh tawaran tersebut; lihat [Mengetik jalur](#mengetik-jalur).

Bidang tersebut mengambil warna yang sama untuk apa yang dinamainya — lihat [Mengetik jalur](#mengetik-jalur).

## Aturan keterlihatan

- Berkas dengan ekstensi yang tidak didukung muncul di daftar hanya jika pengaturan **Detect all file extensions** milik Obsidian aktif — **di dalam vault**. Di luar vault pengaturan itu tidak berlaku: ia mengatur apa yang diindeks vault, dan tidak ada apa pun di luar sana yang berada dalam vault, sehingga sebuah `.txt` di samping catatan Anda tetap terdaftar dalam kedua kasus.
- Daftar menampilkan hingga 1.000 entri, sepuluh kali batas Obsidian sendiri. Ketika sebuah folder memiliki lebih banyak, baris terakhir menyebutkan berapa banyak yang tidak ditampilkan; teruslah mengetik untuk mempersempit daftar.
- Berkas tersembunyi dan folder tersembunyi muncul hanya jika pengaturan **Tampilkan berkas tersembunyi** milik plugin ini aktif.
- **Perlindungan penimpaan bekerja sama persis terlepas dari keterlihatan** — berkas tersembunyi tetap mencegah Anda menimpanya.

## Ringkasan

Jalur yang **dibungkus tanda kutip** akan dibuka bungkusnya untuk Anda. *Copy as path* di Windows menghasilkan `"C:\Users\you\note.md"`, lengkap dengan tanda kutip, dan shell melakukan hal yang sama untuk jalur mana pun yang mengandung spasi; menempelkannya atau mengetiknya sama-sama berhasil. Hanya tanda kutip ganda, dan hanya sebagai pasangan yang mengapit keseluruhannya — tanda itu tidak dapat muncul dalam nama sungguhan, tempat tanda petik tunggal sangat mungkin muncul.

| Anda ingin… | Lakukan ini |
| --- | --- |
| Membuka folder (catatannya, atau menampilkannya) | Klik pemisah **setelah** folder tersebut |
| Memberi folder catatan folder yang belum dimilikinya | **Klik dua kali** pemisah yang sama (memerlukan plugin catatan folder) |
| Menukar folder dengan saudaranya | Klik nama folder tersebut, lalu ketik atau pilih |
| Mengganti nama atau mengalihkan sasaran catatan | Klik nama catatan — termasuk ekstensinya |
| Menjelajahi isi folder | Klik nama folder tersebut; daftar menampilkan induknya, jadi klik folder **di bawah** folder yang Anda tuju |
| Mengetik ulang folder dan semua yang di bawahnya | **Klik dua kali** nama folder tersebut, lalu ketik |
| Mengedit jalur mulai dari sebuah folder ke bawah | Klik nama folder tersebut, lalu <kbd>→</kbd> untuk membatalkan seleksi |
| Melompat ke berkas dengan mengetik jalurnya | Klik nama berkas atau ruang kosong, ketik, <kbd>Enter</kbd> |
| Membuka berkas di tab baru | <kbd>Ctrl</kbd> saat memilihnya, atau <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| Menyalin catatan ke suatu tempat alih-alih memindahkannya | Pensil, lalu <kbd>Ctrl</kbd> saat memilih atau mengonfirmasi sasaran |
| Membuat catatan pada jalur yang belum ada | Ketik jalurnya — bidang berubah **merah** begitu tidak ada yang cocok di daftar — lalu <kbd>Enter</kbd>. Di dalam vault, catatan langsung dibuat; di luar vault, akan ditanyakan terlebih dahulu |
| Mengetahui apakah jalur yang Anda ketik sudah ada | Lihat warnanya: ia mengambil warna baris yang dinamainya, dan merah berarti <kbd>Enter</kbd> akan membuatnya |
| Turun satu tingkat saat mengetik | Ketik `/` |
| Naik satu tingkat saat mengetik | <kbd>Backspace</kbd> pada input kosong |
| Membawa folder-folder sebelum bidang ke dalamnya | <kbd>←</kbd> di awal bidang untuk satu; <kbd>Shift</kbd>+<kbd>Home</kbd>, atau <kbd>Home</kbd> dengan daftar tertutup, untuk semuanya |
| Memindahkan atau mengganti nama catatan yang terbuka | Klik pensil, lalu jelajahi atau ketik seperti di atas |
| Pindah ke nama yang sudah dipakai | Konfirmasi saja: dialog memungkinkan Anda menukar posisi, nama, atau keduanya, atau memberi berkas yang menghalangi nama lain |
| Memindahkan tanpa mengganti nama | Pensil → klik masuk ke folder sasaran → pilih nama berkas saat ini yang disematkan |
| Mengganti nama di tempat | <kbd>F2</kbd> dua kali (tekanan pertama menuju inline title, kedua menuju bagian kepala) |
| Melompat ke vault, home, atau drive lain | Klik nama vault |
| Membuka berkas dari luar vault | Nama vault → pilih lokasi → jelajahi → pilih berkas (hanya-baca hingga *Edit sebagai teks*) |
| Melengkapi nama yang sedang diketik | <kbd>Tab</kbd>, atau <kbd>End</kbd> untuk yang ditawarkan; <kbd>→</kbd> mengambil satu hurufnya |
| Masuk ke dalamnya, setelah satu nama tersisa | <kbd>Tab</kbd> lagi |
| Membatalkan satu langkah, atau meninggalkan folder | <kbd>Shift</kbd>+<kbd>Tab</kbd> |
| Mengambil seluruh jalur, atau jalur sistem | <kbd>Tab</kbd> melewati akhir, atau klik empat kali |
| Menyalin nama, jalur, atau jalur sistem | Klik kanan dua kali; ruang kosong tiga kali untuk jalur sistem |
| Mencapai apa yang ditawarkan pengelola vault untuk vault ini | Klik kanan ikon di awal baris |
| Menyalin ID vault | Klik kanan ikon di awal baris |
| Membuka vault lain yang sedang Anda jelajahi | Klik kanan namanya di awal baris |
| Melihat ekstensi berkas pada baris | Aktifkan **Tampilkan ekstensi berkas** di pengaturan |
| Membuka segmen folder di tab baru | <kbd>Ctrl</kbd> atau klik tengah, atau seret ke bilah tab |
| Mencapai bilah jalur dari papan ketik | Ikat *Fokus ke bilah jalur* di Hotkeys |
| Membuka alamat web atau tautan `obsidian://` | Ketik ke dalam bilah dan tekan <kbd>Enter</kbd> |
| Membatalkan apa pun | <kbd>Esc</kbd>, atau klik di luar bilah bagian kepala |
| Mencoba entri sebelum mengonfirmasinya | Panah atau arahkan kursor melalui daftar; <kbd>↑</kbd> melewati atas mengembalikan teks Anda |
| Memindahkan catatan ke folder di atasnya | Seret ke folder tersebut pada baris |
| Menyimpan potongan teks sebagai catatan baru | Seret teks ke sebuah folder, ketik nama, <kbd>Enter</kbd> |
| Menambahkan potongan teks ke catatan yang sedang Anda baca | Seret ke nama catatan tersebut, konfirmasi |
| Melihat nama folder yang dipersingkat secara utuh | Arahkan kursor ke atasnya, atau lebarkan panel |
| Mengetahui di mana vault itu sendiri berada | Arahkan kursor ke ikon di awal baris |
| Mengeluarkan catatan dari vault | Pensil → jelajahi ke luar → konfirmasi dialog (tautan akan rusak) |
| Mengizinkan penulisan di luar vault Anda | Klik **gembok merah** di bagian kepala; sakelar ganti nama menggantikan posisinya |
| Menguncinya kembali | Klik sakelar hingga gembok kembali — satu tekan masuk, satu tekan keluar |
| Menghapus berkas di luar vault | Buka gemboknya, lalu klik kanan berkas: *Delete* memindahkannya ke tempat sampah sistem Anda |

## Pengaturan

| Pengaturan | Opsi | Bawaan | Fungsinya |
| --- | --- | --- | --- |
| **Language** | Bawaan Obsidian, atau salah satu dari 46 | Bawaan Obsidian | Bahasa untuk teks plugin ini sendiri. *Obsidian default* mengikuti bahasa yang ditetapkan dalam pengaturan Appearance, yang merupakan pilihan hampir semua orang. Baris itu sendiri — namanya, keterangannya, dan *Obsidian default* — tetap dalam bahasa Inggris apa pun yang dipilih, karena itulah jalan kembali dari bahasa yang tidak dapat Anda baca. Bahasa Yunani dan Sanskerta diterjemahkan di sini dan tidak ada dalam daftar Obsidian sendiri, sehingga pengaturan ini adalah satu-satunya cara untuk mencapainya. |
| **Perataan** | Left / Center / Right | Left | Di mana Jalur di bilah judul berada pada baris bagian kepala. *Center* menyerupai tampilan klasik Obsidian. |
| **Pemisah** | Karakter apa pun | `/` | Pemisah yang digambar di antara segmen. Enam pratur klik-sekali (`/ > ▸ › \ •`) berada di depan bidang teks. |
| **Tampilkan nama vault** | On / Off | On | Apakah vault itu sendiri menjadi segmen pertama pada Jalur di bilah judul. Jika dimatikan, segmen itu berubah menjadi ikon 🏠 alih-alih menghilang, sehingga jalur tetap dimulai dari sesuatu yang dapat diklik. |
| **Nama folder membuka daftar** | On / Off | On | Menukar fungsi nama folder dan pemisah setelahnya — lihat [tabel di atas](#jalur-di-bilah-judul). Dengan [Folder notes](obsidian://show-plugin?id=folder-notes), pemisah membuka catatan folder. Tidak pernah berlaku dalam mode ganti nama/pindah. |
| **Tampilkan berkas tersembunyi** | On / Off | Off | Apakah berkas tersembunyi dan folder tersembunyi terdaftar di daftar. Perlindungan penimpaan berlaku dalam kedua kasus. |
| **Show all file types** | — | — | Bukan pengaturan plugin ini melainkan milik Obsidian, disebutkan di sini karena menjawab pertanyaan yang sama: vault Anda hanya mengindeks jenis berkas yang diperintahkan untuknya, dan hanya yang diindeks yang dapat didaftarkan. Carilah di pengaturan Obsidian dan aktifkan untuk melihat semua berkas; tombol di samping baris membuka halaman itu dengan pengaturan tersebut digulir agar terlihat dan berkedip, sebagaimana yang terjadi bila Anda mengekliknya melalui kotak pencarian pengaturan sendiri. Di luar vault pengaturan ini tidak berlaku, karena tidak ada apa pun di luar sana yang diindeks sama sekali. |
| **Tampilkan ekstensi berkas** | On / Off | Off | Apakah nama berkas pada baris menyertakan ekstensinya. Jika mati, ekstensi ditinggalkan — sebagaimana Obsidian meninggalkannya dari judul catatan. Jika hidup, baris menamai berkas seperti cara sistem berkas menamainya. Dalam kedua kasus, ekstensi adalah hal kedua yang dikorbankan ketika baris kehabisan ruang, tepat setelah nama vault. |
| **Akses berkas eksternal** | On / Off | **Off** | Apakah nama vault membuka daftar lokasi. Jika mati, tidak ada bagian plugin ini yang pernah melihat lebih jauh dari vault ini. |
| **Hotkeys** | tombol | — | Membuka *Hotkeys* Obsidian yang disaring untuk plugin ini, tempat *Fokus ke bilah jalur* dapat diberi tombol. |

## Mengganti ikonnya

Lure menampilkan tiga ikon: ikon akar vault (saat **Tampilkan nama vault** mati), sakelar ganti nama/pindah, dan gembok yang menempati posisinya selagi penulisan di luar vault terkunci. Semuanya dapat ditukar dari tema atau cuplikan CSS — atur glif pengganti dan sembunyikan yang bawaan dalam satu aturan:

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

`--lure-icon-glyph` menerima apa pun yang sah dalam `content` CSS, jadi `url(...)` berlaku untuk gambar sebagaimana untuk glif teks atau emoji. Biarkan `--lure-icon-svg` apa adanya untuk mempertahankan ikon Lucide dan menggambar glif Anda di sebelahnya.
