<!-- Terjemahan CHANGELOG.md — status: commit 2739cf0.
     Terjemahan mesin (Claude Opus 5), belum disemak penutur jati.
     Pembetulan dialu-alukan; CHANGELOG bahasa Inggeris ialah versi rujukan. -->

[English](../../CHANGELOG.md) · [العربية](CHANGELOG.ar.md) · [አማርኛ](CHANGELOG.am.md) · [Беларуская](CHANGELOG.be.md) · [বাংলা](CHANGELOG.bn.md) · [Català](CHANGELOG.ca.md) · [Čeština](CHANGELOG.cs.md) · [Dansk](CHANGELOG.da.md) · [Deutsch](CHANGELOG.de.md) · [Ελληνικά](CHANGELOG.el.md) · [Español](CHANGELOG.es.md) · [فارسی](CHANGELOG.fa.md) · [Suomi](CHANGELOG.fi.md) · [Français](CHANGELOG.fr.md) · [Gaeilge](CHANGELOG.ga.md) · [עברית](CHANGELOG.he.md) · [Magyar](CHANGELOG.hu.md) · [Bahasa Indonesia](CHANGELOG.id.md) · [Italiano](CHANGELOG.it.md) · [日本語](CHANGELOG.ja.md) · [ქართული](CHANGELOG.ka.md) · [ភាសាខ្មែរ](CHANGELOG.kh.md) · [한국어](CHANGELOG.ko.md) · [Latviešu](CHANGELOG.lv.md) · **Bahasa Melayu** · [नेपाली](CHANGELOG.ne.md) · [Nederlands](CHANGELOG.nl.md) · [Norsk](CHANGELOG.no.md) · [Polski](CHANGELOG.pl.md) · [Português](CHANGELOG.pt.md) · [Português (Brasil)](CHANGELOG.pt-BR.md) · [Română](CHANGELOG.ro.md) · [Русский](CHANGELOG.ru.md) · [संस्कृतम्](CHANGELOG.sa.md) · [Slovenčina](CHANGELOG.sk.md) · [Shqip](CHANGELOG.sq.md) · [Српски](CHANGELOG.sr.md) · [Svenska](CHANGELOG.sv.md) · [ไทย](CHANGELOG.th.md) · [Türkçe](CHANGELOG.tr.md) · [Українська](CHANGELOG.uk.md) · [Oʻzbekcha](CHANGELOG.uz.md) · [Tiếng Việt](CHANGELOG.vi.md) · [简体中文](CHANGELOG.zh.md) · [繁體中文](CHANGELOG.zh-TW.md)

# Log perubahan

Setiap keluaran Lure, yang terbaharu dahulu. Apa yang telah mendarat sejak keluaran terakhir ada di bawah *Belum dikeluarkan*. Versi tidak membawa awalan `v`, sepadan dengan tag keluarannya.

## 1.5.0 — 2026-09-23[^1.5.0]

### Ditambah

- **Nama yang sudah digunakan akan bertanya dan bukan menolak.** Memindah atau menamakan semula kepada nama yang sudah ada membuka dialog dengan dua laluan yang boleh anda sunting: ke mana fail anda pergi, dan ke mana fail yang menghalang itu pergi, berwarna merah selagi ia masih diambil. Setiap laluan turut dilukis dengan cara yang sama seperti bar laluan melukisnya, dengan bahagian yang berbeza diwarnakan dan dipendekkan paling akhir. Kedua-dua medan mempunyai senarai; yang kedua memuatkan cara keluar yang biasa — tukar tempat (ia pergi ke folder lama fail anda), tukar nama (ia kekal dan mengambil nama lama fail anda), tukar kedua-duanya (ia mengambil laluan lama fail anda), `-1`, `-bak` dan `-old` di sebelah namanya sendiri, serta kedua-dua nama yang pernah dimiliki fail-fail itu. Cara keluar yang laluannya sudah diambil dikelabukan. Memilih satu hanya mengisi medan itu; Sahkan memindahkan kedua-duanya, pautan dan semuanya, dan Batal tidak memindahkan apa-apa. Memilih nama yang sudah digunakan daripada senarai lungsur turut bertanya perkara yang sama, begitu juga menjatuhkan fail ke atas folder yang sudah mempunyai nama itu.
- **`:graph` di dalam sebuah folder membuka graf folder itu** — graf yang ditapis dengan `path:"that/folder"`, seperti yang akan dibuat oleh kotak carian folder itu sendiri. Pada akar bilik kebal, ia tetap graf keseluruhan, seperti sebelum ini.
- **Folder yang sudah memiliki nama itu berwarna merah** dalam senarai lungsur semasa memindahkan, begitu juga fail dengan nama itu, supaya perlanggaran itu kelihatan sebelum anda memilih.

### Diubah

- **Tawaran sentiasa apa yang akan ditulis oleh Tab.** Di titik nama-nama berhenti sepadan, medan itu menawarkan langkah ke arah yang pertama daripada nama-nama itu, dan baris yang akan dituju oleh Tab yang menentukannya; menaip melangkaui satu nama membiarkan sambungannya berdiri dan menawarkannya di hadapannya; folder yang baharu dimasuki menawarkan langkah pertamanya. Sebelum ini, ada keadaan di mana tiada apa-apa ditawarkan sedangkan Tab tetap menulis sesuatu. Garis bawah senarai lungsur mengikuti tawaran semasa ia berubah, dan Tab pada baris yang anda tuju dengan anak panah mengambil baris itu dan bukan yang di sebelahnya.
- **Tawaran mengabaikan huruf besar-kecil.** Menaip `sch` menawarkan `Schemes`, dieja sebagaimana nama itu ditulis; mengambil semula tawaran itu memulangkan huruf anda persis seperti yang anda taip. Apabila `Test` dan `test` sama-sama wujud, yang dieja mengikut cara anda menaip itulah yang ditawarkan.
- **Selepas menekan Tab, langkah seterusnya terus ditawarkan**, seperti selepas menaip sehuruf.
- **Nama yang bermula dengan apa yang anda taip muncul dahulu dalam senarai lungsur**, ditanda dengan garis di tepinya — biru tempat ia berkongsi lebih daripada apa yang anda taip, hijau pada cabang yang dituju oleh tawaran tempat ia berpisah — mendahului nama-nama yang hanya mengandunginya sahaja. Setiap satunya menggariskan langkah yang akan diambil oleh <kbd>Tab</kbd> ke arahnya, bukan sekadar yang ditawarkan.
- **Senarai lungsur mengikut kursor**, atau permulaan sesuatu pilihan: ia menyenaraikan folder tempat titik itu berada, ditapis mengikut huruf di hadapannya. Pada permulaan sesuatu nama, itu ialah keseluruhan folder.
- **Menuding pada satu baris memaparkannya sebagai tawaran** — apa yang anda taip kekal milik anda dan baki nama itu ditanda — dan mengalihkan penuding daripada senarai itu memulangkan tawaran semula.
- **→ mengambil satu huruf daripada tawaran** dan bukan semuanya; <kbd>End</kbd> masih mengambilnya sepenuhnya.
- **Backspace sebelum sambungan yang ditinggalkan bersendirian melangkah naik satu folder**, sepertimana yang berlaku pada medan kosong; sambungan yang bersendirian itu hilang.
- **F2 pada medan yang terbuka menukarnya menjadi tukar nama di tempat ia berdiri**, mengekalkan teks, kursor dan pilihan, dan **Fokus pada bar laluan** mengembalikan tukar nama itu dengan cara yang sama.
- **Apa-apa lain yang ditekan atau diklik antara kedua-dua tekanan itu memulakan semula kitaran F2 dan Fokus pada bar laluan.**
- **Folder ditebalkan dalam senarai lungsur**, jadi nota milik sesebuah folder tidak lagi perlu berwarna kelabu untuk tampil berbeza: ia berwarna ungu seperti nota lain.
- **Senarai lungsur tidak lebih lebar daripada bar laluan.** Nama yang tidak muat dipendekkan dengan cara yang sama seperti bar laluan memendekkannya, dan dipaparkan sepenuhnya apabila ditudingi.
- **PageUp dan PageDown menatal senarai lungsur mengikut apa yang dipaparkannya**, daripada medan itu juga, dan baris terpilih mengekalkan kedudukannya di skrin. <kbd>Home</kbd> dan <kbd>End</kbd> membawa baris pertama dan terakhir ke dalam pandangan.
- **Senarai lungsur memaparkan sehingga 1,000 entri** sebelum ia mengira bakinya, dan bukan 100.
- **Folder mengalah bermula daripada yang terpanjang.** Apabila ruang tidak mencukupi, nama folder terpanjang memendek kepada panjang nama terpanjang seterusnya, kemudian kedua-duanya bersama, dan seterusnya, masing-masing berhenti pada tahap minimumnya. Sebelum ini, semua folder memendek serentak mengikut nisbah panjangnya.
- **Nama yang dipendekkan meluncur, bukan melompat.** Nama yang mengalah dipotong tepat pada piksel dan pudar di bawah `…`-nya, jadi tiada apa-apa selepasnya pada baris itu bergerak berperingkat semasa panel diubah saiz.

### Dibaiki

- Dalam panel sebelah kanan, senarai lungsur terbuka di bawah panel sebelah kiri sehingga huruf pertama ditaip.
- Mengalihkan penuding daripada senarai lungsur memulangkan tawaran itu tetapi bukan warnanya.
- Ruang di tempat nama yang dipendekkan terpisah — `development guidelines` — tergugur, menyatukan kedua-dua perkataan itu.

## 1.4.0 — 2026-09-19[^1.4.0]

### Ditambah

- **Baris Kekunci pintas dalam tetapan.** Butangnya membuka *Kekunci pintas* Obsidian yang ditapis kepada pemalam ini, tempat *Fokus pada bar laluan* — yang dihantar tanpa kekunci — boleh diberikan satu.
- **Bar laluan pada panel yang tidak memegang fail.** Tab kosong berbunyi `vault / :blank`, graf `vault / :graph`, dan mana-mana pandangan lain yang tiada apa untuk dinamakan mendapat label `:` tersendiri — tab pemalam tab utama sendiri berbunyi `:home-launcher`. Medan di sebelahnya ialah bar alamat: taip laluan dan <kbd>Enter</kbd> membukanya dalam panel itu, atau mencipta failnya. Sebelum ini baris itu kosong — pemalam menyembunyikan tajuk Obsidian sendiri dan tidak meletakkan apa-apa sebagai gantinya.
- **Sesebuah halaman boleh ditaip dan juga dipilih** — `:graph` dan selebihnya ialah alamat, bukan sekadar entri senarai. Titik bertindih tidak memulakan mana-mana nama fail, jadi menaipnya di mana-mana sahaja memanggil halaman tersebut, dan medan itu berwarna seperti halaman berkenaan dan bukannya menawarkan untuk mencipta nota yang tiada apa yang boleh dinamakan sedemikian.
- **Satu baris untuk *Papar semua jenis fail*** Obsidian sendiri, di sebelah peraturan fail titik, kerana kedua-duanya menentukan apa yang boleh disenaraikan oleh menu lungsur: ia menyuruh anda mencari tetapan itu dalam tetapan Obsidian sendiri dan menghidupkannya untuk melihat setiap fail, dan butang di sebelahnya membuka halaman itu dengan tetapan tersebut ditatal ke pandangan dan dikelipkan, seperti hasil carian tetapan. Dinamakan dalam perkataan Obsidian, dijelaskan dalam 45 bahasa.
- **Akar bilik kebal menyenaraikan halaman yang boleh dipegang oleh sesebuah panel** — `:graph`, `:search`, dan apa sahaja pandangan yang didaftarkan oleh pemalam anda, termasuk tab utama atau kalendar. Pilih satu dan panel membukanya, seperti memilih nota membuka nota itu. Pandangan yang wujud untuk memaparkan fail ditinggalkan, kerana tiada apa untuk dipaparkan oleh pandangan tersebut.
- **Pembatas bilik kebal sendiri membuka halaman permulaan anda**, jika ada pemalam yang menyediakannya, dan digaris bawah untuk menyatakannya; tekanan selepas itu melipat pepohon fail, dan tekanan selepas itu mengembalikan tepat apa yang terbuka tadi. Tanpa pemalam sedemikian, tekanan pertama melipat, seperti dahulu.
- **Taip laluan dari akar sistem fail.** Tanda `/` di hadapan medan kosong membuka satu laluan, bukannya ditelan, setiap garis condong selepasnya dalam laluan itu menjadi miliknya, dan menu lungsur menyenaraikan mesin dan bukannya bilik kebal.

### Diubah

- **F2 dan Fokus pada bar laluan menekan Tab di dalam medan.** Apa sahaja yang Tab akan lakukan di situ — anak tangga seterusnya, melengkapkan apa yang anda taip, melangkah masuk ke dalam folder — mereka lakukan juga; hanya di tempat Tab berpusing kembali ke hadapan laluan mereka keluar, F2 ke tajuk dalam nota, perintah ke nota. Sebelum ini, medan yang telah anda taip membuat F2 bermula semula pada nama dan perintah menutup medan.
- **Langkah selepas kitaran keluar ialah folder akar.** Tekanan selepas F2 kembali ke tajuk dalam nota, atau perintah kembali ke nota, mendarat di tempat pusingan Tab mendarat — akar bilik kebal, seluruh laluan dalam medan, folder pertamanya ditandakan — supaya tiada langkah dalam gelung ditinggalkan kepada Tab semata-mata.
- **Fokus pada bar laluan berjalan seperti F2.** Ia dibuka pada nama dan bukannya seluruh laluan, mengambil empat anak tangga yang sama, dan tekanan selepas yang terakhir menutup medan dan meletakkan kursor kembali dalam nota — sebelum ini, ia berpusing melalui anak tangga selama-lamanya dan satu-satunya kekunci yang sampai ke baris itu tidak dapat meninggalkannya.
- **Nama yang telah diambil dilaporkan apabila anda menggunakannya, bukan semasa anda menaipnya.** Setiap nama yang ditaip menuju `Notes.md` melalui nama yang mungkin fail tersendiri, dan amaran itu dahulu terpapar dan hilang huruf demi huruf. Apa yang salah dengan ejaan sesuatu nama masih dinyatakan sebaik sahaja ia dieja.
- **Pembatas yang nota folder-nya sudah terbuka mendedahkan folder itu** dan bukannya membuka semula apa yang ada di skrin — itulah yang sentiasa dimaksudkan oleh tekanan keduanya.
- **Di mana anda berada adalah tebal dalam menu lungsur**, bukan sekadar biru.
- **Segala yang bukan nota berwarna oren dalam menu lungsur**, bukan sekadar jenis teks yang Obsidian tiada pandangan untuknya. Ungu memilih nota daripada folder yang berisi campuran; satu warna untuk selebihnya menyatakan perkara yang sama dengan lebih pantas.

### Dibaiki

- **Backspace pada folder yang diklik tidak lagi menghilangkan nama bilik kebal.** Garis condong yang tertinggal di hadapan dibaca sebagai laluan dari akar mesin, yang mengosongkan segmen pembuka — dan menutup medan dengan Escape tidak pernah mengembalikannya, jadi tab kehilangan nama dan ikon bilik kebalnya selama-lamanya. Garis condong di hadapan kini dikira sebagai milik mesin hanya apabila folder pertamanya benar-benar wujud, dan segmen pembuka kembali dengan setiap cara keluar dari medan.
- Di luar bilik kebal, fail disembunyikan melainkan **Kesan semua sambungan fail** Obsidian dihidupkan — tetapan tentang apa yang diindeks oleh bilik kebal, yang digunakan pada folder yang tidak berada dalam bilik kebal. Fail `.txt` di sebelah nota anda disenaraikan di sana sama ada dihidupkan atau tidak.
- Menu lungsur nama bilik kebal tidak berbuat apa-apa pada panel yang tidak memegang fail, iaitu panel yang tepat sekali akan anda gunakan untuk pergi ke tempat lain.
- Mengklik nama bilik kebal meninggalkan tajuk Obsidian sendiri berdiri di sebelah laluan dalam medan, berwarna kelabu, tempat ia tidak muncul pada masa lain: baris itu mengukur dirinya mengikut apa yang telah dilukisnya, dan pada saat itu ia telah mengosongkan dirinya untuk memberi ruang kepada medan.

- Mengklik ruang kosong membuka medan dan kemudian kehilangannya: mendedahkan nota dalam Penjelajah Fail membawa kursor bersamanya, jadi medan itu terbuka dan bertanda sementara setiap ketukan kekunci pergi ke pepohon.
- Anak tangga yang menunjukkan laluan dari akar sistem melukis jejak laluan yang sama di sebelah medan, tidak dimuatkan, jadi laluan yang dalam dicat di atas dirinya sendiri.

## 1.3.0 — 2026-09-17[^1.3.0]

### Ditambah

- **Bawa fail ke dalam bilik kebal dari luar.** Alihkan atau salin fail dari mana-mana pada cakera ke sesuatu laluan di dalam bilik kebal anda; ia tiba sebagai nota sebenar, dan pengalihan hanya membuang yang asal selepas salinannya berjaya.
- **Lepaskan teks atau fail pada baris itu untuk menulisnya.** Pada sebuah folder: nota baharu dalam folder itu, dinamakan sambil anda menaip. Pada nama nota itu, atau pada pemisah sesebuah folder yang mempunyai nota folder: ditambah pada hujung nota tersebut, selepas pengesahan.
- **Cipta nota folder** dengan tekanan kedua pada apa jua yang membuka folder itu, jika plugin nota folder sedang berjalan dan folder itu belum mempunyainya. Ia diletakkan di tempat yang ditetapkan oleh tetapan [Folder notes](https://github.com/LostPaul/obsidian-folder-notes) sendiri.
- **Seret sebuah folder daripada bar laluan ke bar tab** untuk membukanya di situ: nota foldernya jika ada, jika tidak sebuah tab yang berada dalam folder itu.
- **Roda tetikus menyusuri senarai.** Di atas sesuatu nama, pusingan pertama membuka senarai nama itu dan setiap pusingan selepasnya menggerakkan sorotan satu baris. Baris yang sedang menatal ke tepi mengekalkan roda untuk menatal.
- **Tekan anak panah keluar dari hadapan medan** untuk membawa masuk folder sebelumnya: <kbd>←</kbd> untuk satu folder, <kbd>Shift</kbd>+<kbd>Home</kbd> (atau <kbd>Home</kbd> dengan senarai tertutup) untuk kesemuanya.
- **Medan memakai warna apa yang dinamakannya**, sama seperti baris itu dalam senarai, dan bertukar merah sebaik sahaja tiada apa-apa yang menyahutnya — saat <kbd>Enter</kbd> akan mencipta sesuatu dan bukannya membukanya.
- **Nota folder berwarna kelabu dalam senarai**, supaya ia dibaca sebagai milik foldernya dan bukan sebagai satu lagi nota.
- **Klik tengah pada pemisah** untuk membuka folder itu dalam tab baharu: nota foldernya, atau sebuah tab yang berada di dalamnya.

### Diubah

- **Mangga dan togol tukar nama ialah satu kawalan.** Di luar bilik kebal, mangga merah yang terkunci mengambil tempat togol itu; membukanya menyerahkan tempat itu kepada togol, dan meninggalkan mod tukar nama menguncinya semula.
- **Kekunci tukar nama turut bertanya pada mangga.** Di luar bilik kebal, satu tekanan membuatkan mangga berkelip; tekanan kedua dalam masa setengah saat memberikan apa yang diberi oleh mangga dan membuka mod tukar nama.
- **Kekunci tukar nama menyusuri satu kitaran penuh** — tajuk dalam nota, nama, nama dengan sambungan, laluan dari bilik kebal, laluan dari akar sistem — dan tekanan berikutnya kembali kepada tajuk dalam nota.
- **Klik <kbd>Ctrl</kbd> dan klik tengah bukan lagi sinonim.** Satu membuka tab dan pergi ke sana, satu lagi membukanya di latar belakang.
- **Klik kanan pada nama nota membuka menu fail itu sendiri.**
- **Senarai setinggi yang dibenarkan tetingkap**, dan bukan lagi 300 piksel tetap seperti Obsidian.
- **Mengklik sebuah folder sementara medan terbuka mengekalkan seluruh laluan selepasnya**, dan mengklik masuk ke sesuatu folder dalam medan itu menyenaraikan kandungan folder tersebut sepenuhnya.
- **Pemisah membuka nota folder pada sebarang kedalaman** apabila Folder notes berjalan, dan digariskan di mana-mana nota folder wujud. Sebelum ini hanya folder tingkat atas yang berfungsi. Dengan plugin nota folder yang lain, pemisah tetap menunjukkan foldernya.

### Dibaiki

- **Medan yang terbuka hidup lebih lama daripada failnya.** Bertukar ke nota lain dengan bar laluan terbuka menyebabkan baris itu terus menamakan fail lama sepanjang baki sesi.
- **Hapus, Namakan semula dan Buat satu salinan ditolak di luar bilik kebal** walaupun mangga terbuka, dan tidak pernah boleh dicapai untuk imej, PDF dan halaman.
- **<kbd>Ctrl</kbd>+<kbd>Enter</kbd> tidak melakukan apa-apa sementara senarai terbuka** — sedangkan itulah cara setiap medan terbuka.
- **<kbd>Enter</kbd> dengan senarai terbuka tetapi tiada apa-apa tersorot** tidak melakukan apa-apa; kini ia mengesahkan apa yang anda taip.
- **Baris yang melimpah sedangkan setiap nama sudah sependek mungkin tidak dapat ditatal**, menyebabkan hujung laluan itu tidak dapat dicapai.
- **Mematikan plugin meninggalkan butang mati** pada bar tajuk setiap nota yang pernah ditampalnya.

## 1.2.0 — 2026-08-25[^1.2.0]

### Ditambah

- **Tetapan bahasa.** Lure mengikut bahasa Obsidian secara lalai, dan boleh ditetapkan kepada mana-mana bahasanya sendiri. Ini juga satu-satunya jalan untuk mencapai terjemahan bahasa Yunani dan Sanskrit, yang tidak ditawarkan oleh Obsidian sendiri. Label tetapan itu kekal dalam bahasa Inggeris, supaya ia sentiasa boleh ditemui semula daripada bahasa yang anda tidak dapat baca.

## 1.1.2 — 2026-08-25[^1.1.2]

### Diubah

- **Helaian gaya yang lebih ringan.** Baris itu tidak lagi menggunakan pemilih `:has()` mahupun kebanyakan peraturan `!important`. Ia memuat semula dengan kerja yang lebih sedikit, dan amaran daripada semakan plugin turun daripada 56 kepada 7.

## 1.1.1 — 2026-08-22[^1.1.1]

### Dibaiki

- **Nama folder yang pendek boleh terlukis dengan jurang di dalamnya** — `atlas` menjadi `atl as` — kerana ruang yang ditempah untuk bentuk pendeknya lebih lebar daripada nama itu sendiri.

## 1.1.0 — 2026-08-22[^1.1.0]

### Ditambah

- **Perbendaharaan klik kanan.** Satu tekanan membuka menu; dua dan tiga tekanan menyalin lebih banyak secara berperingkat — nama, nama dengan sambungannya, laluannya. Menu baris itu kini sepadan dengan menu Peneroka fail entri demi entri.
- **Menu di luar bilik kebal.** Baris senarai dan pemapar luaran menawarkan pembukaan, *Salin laluan* dan *Tunjuk dalam folder*; dengan mangga terbuka, juga *Nota baharu*, *Folder baharu*, *Buat satu salinan*, *Namakan semula…* dan *Hapus*. Hapus mengalihkannya ke tong sampah sistem dan tidak pernah kekal.
- **Buka di tempat lain.** <kbd>Ctrl</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> dan klik tengah pada nama nota atau sesebuah folder membukanya dalam tab baharu, belahan atau tetingkap. Kedua-duanya boleh diseret, seperti barisnya dalam Peneroka fail.
- **Seret nota ke baris itu untuk memindahkannya.** Lepaskan satu nota, beberapa nota atau sebuah folder pada ruas folder atau pada nama bilik kebal.
- **Perintah: Fokus pada bar laluan**, dengan seluruh laluan terpilih — tiada kekunci pintas lalai, ikatlah sendiri.
- **Taip URL** ke dalam bar laluan: `http(s)://` dan `obsidian://` dibuka sebagai pautan, `file://` dan laluan berkod peratus membuka failnya.
- **Pelengkapan Tab**, seperti yang dilakukan shell: setiap tekanan melengkapkan sejauh nama-nama dalam folder itu sama dan berhenti di tempat ia berbeza. <kbd>Shift</kbd>+<kbd>Tab</kbd> berundur. Apabila tiada lagi yang boleh dilengkapkan, <kbd>Tab</kbd> sebaliknya meluaskan pilihan: nama, nama dengan sambungan, laluan dari bilik kebal, laluan dari akar sistem.
- **Senarai terbuka di tempat anda berada** dan pralihat apa yang anda tuding ke dalam medan; meninggalkan senarai memulangkan teks anda.
- **Alihkan nota keluar dari bilik kebal** selepas pengesahan yang mengira pautan yang akan diputuskannya. Ia disalin keluar, kemudian dibuang ke tong sampah, jadi ia boleh dipulihkan seperti mana-mana nota yang dipadam.
- **Tetapan Tunjukkan sambungan fail**, dan laluan bertanda petik (seperti yang dihasilkan *Copy as path* Windows) turut difahami.
- **Tetapan muncul dalam carian tetapan Obsidian** pada Obsidian 1.13 dan ke atas.

### Diubah

- **Laluan panjang muat dalam anak tetingkap.** Nama dipendekkan bermula daripada yang paling kurang berguna — nama bilik kebal, kemudian sambungan, kemudian folder, dan nama nota itu sendiri paling akhir — tidak pernah melepasi tahap ia masih boleh dibezakan. Tuding nama yang dipendekkan untuk membacanya sepenuhnya.
- **Mengklik nama nota memilihnya tanpa sambungannya**, supaya menukar nama tidak lagi berisiko menukar jenis failnya.
- **Kekunci tukar nama bermula pada nama tanpa sambungannya**, dan tekanan seterusnya meluaskan pilihan.
- **Mengklik sebuah folder mengekalkan baki laluan kelihatan**, termasuk di luar bilik kebal.
- **Melayari kembali ke dalam bilik kebal anda membuka fail sebagai nota**, lengkap dengan pautan dan pautan balik, dan bukan dalam pemapar luaran.

### Dibaiki

- **Label menu berbahasa Inggeris dalam setiap bahasa**; kini ia datang daripada terjemahan Obsidian sendiri.
- **Kekunci tukar nama menemui jalan buntu pada dialog tukar nama Obsidian** apabila nota itu ditatal melepasi tajuknya.
- **<kbd>Esc</kbd> memerlukan dua tekanan** untuk menutup medan dan senarainya.
- **<kbd>Ctrl</kbd>+<kbd>Enter</kbd> membuka pautan dalam penyunting** dan bukannya bertindak pada bar laluan.
- **Menukar nama di luar bilik kebal menghilangkan nama yang ditaip** apabila mangga ditekan.
- **Tab boleh berpusing tanpa kemajuan** pada folder yang berada di sebelah nota foldernya sendiri.

## 1.0.4 — 2026-08-13[^1.0.4]

### Ditambah

- **Nota tempat anda berada ditandakan dengan warna biru** dalam senarai, supaya melayari kembali ke foldernya menunjukkan tempat anda bermula.

## 1.0.3 — 2026-08-13[^1.0.3]

### Dokumentasi

- README memautkan halaman plugin dalam direktori komuniti, dan README terjemahan dikemas kini.

## 1.0.2 — 2026-08-13[^1.0.2]

### Diubah

- **Memerlukan Obsidian 1.8.7 atau ke atas** (dahulu 1.4.0). Dua ciri yang menjadi sandaran bar laluan — menyalin fail dan tip ralat di bawah medan — memerlukannya.
- **Muat turun keluaran membawa asal usul binaan yang ditandatangani**, jadi anda boleh mengesahkan dengan `gh attestation verify` bahawa `main.js` dibina daripada repositori ini.

### Dibaiki

- **Membuka fail luaran yang tiada dalam apl lalai gagal secara senyap**; kegagalan itu kini dilaporkan.

## 1.0.1 — 2026-08-13[^1.0.1]

### Dibaiki

- **Dalam mod tukar nama sesebuah nota berkonflik dengan dirinya sendiri** — melayari kembali ke foldernya sendiri menyembunyikan namanya daripada senarai, seolah-olah ia menghalang penukaran namanya sendiri.
- **Paparan folder pertama selepas memulakan Obsidian tidak mengembangkan apa-apa.**
- **Memilih sesebuah folder daripada senarai boleh menamatkan mod tukar nama** dan bukannya turun ke dalamnya.
- **Suntingan luaran boleh ditulis ganti secara senyap** oleh penulis lain, seperti Sync atau anak tetingkap kedua. Penulisan kini bersifat atom.
- **Penetapan semula garis besar fokus meresap ke paparan lain**; kini ia hanya terpakai pada bar tajuk yang ditampal Lure.

### Dokumentasi

- README dan panduan penggunaan tersedia dalam kesemua 44 bahasa yang dibawa plugin ini.
- Panduan itu menamakan tetapan Obsidian *Detect all file extensions*, yang kini dipanggil *Tunjuk semua jenis fail*.

## 1.0.0 — 2026-08-10[^1.0.0]

Keluaran pertama. Menggantikan nama fail pada bar tajuk sesuatu nota dengan laluan bilik kebalnya yang boleh diklik dan disunting — sebuah bar alamat untuk nota anda, dimodelkan menurut Dolphin.

### Ditambah

- **Klik sebuah folder** untuk senarai kandungan folder induknya, untuk menukarnya dengan jirannya tanpa menyentuh baki laluan.
- **Klik pemisah** selepas sebuah folder untuk menunjukkan dan mengembangkannya dalam Peneroka fail, atau untuk membuka nota foldernya jika Folder notes mengendalikannya.
- **Klik nama fail atau ruang kosong** untuk menaip laluan, dengan pelengkapan automatik: `/` turun ke dalam, <kbd>Backspace</kbd> naik satu tingkat, <kbd>Enter</kbd> mengesahkan.
- **Mod alih/tukar nama** menukar interaksi yang sama kepada pengalihan dan penukaran nama, dengan pemeriksaan yang sama seperti dilakukan Obsidian.
- **<kbd>Ctrl</kbd> membuka dalam tab baharu** — atau, dalam mod alih/tukar nama, menyalin nota ke sana sebagai gantinya.
- **<kbd>F2</kbd> berselang** antara tajuk dalam nota dan bar laluan.
- **Di luar bilik kebal** (dimatikan secara lalai): nama bilik kebal membuka bilik kebal anda yang lain, folder rumah, akar sistem fail dan pemacu yang dilekapkan. Tiada apa-apa di luar sana ditulis sehingga anda membuka kuncinya, dan sesuatu nota hanya boleh disalin keluar dari bilik kebal, tidak pernah dialihkan.
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
[^1.0.0]: Keluaran pertama: <https://github.com/Gelaende51/obsidian-lure/releases/tag/1.0.0>
