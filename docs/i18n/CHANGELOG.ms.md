<!-- Terjemahan CHANGELOG.md — status: commit 973105b.
     Terjemahan mesin (Claude Opus 5), belum disemak penutur jati.
     Pembetulan dialu-alukan; CHANGELOG bahasa Inggeris ialah versi rujukan. -->

[English](../../CHANGELOG.md) · [العربية](CHANGELOG.ar.md) · [አማርኛ](CHANGELOG.am.md) · [Беларуская](CHANGELOG.be.md) · [বাংলা](CHANGELOG.bn.md) · [Català](CHANGELOG.ca.md) · [Čeština](CHANGELOG.cs.md) · [Dansk](CHANGELOG.da.md) · [Deutsch](CHANGELOG.de.md) · [Ελληνικά](CHANGELOG.el.md) · [Español](CHANGELOG.es.md) · [فارسی](CHANGELOG.fa.md) · [Suomi](CHANGELOG.fi.md) · [Français](CHANGELOG.fr.md) · [Gaeilge](CHANGELOG.ga.md) · [עברית](CHANGELOG.he.md) · [Magyar](CHANGELOG.hu.md) · [Bahasa Indonesia](CHANGELOG.id.md) · [Italiano](CHANGELOG.it.md) · [日本語](CHANGELOG.ja.md) · [ქართული](CHANGELOG.ka.md) · [ភាសាខ្មែរ](CHANGELOG.kh.md) · [한국어](CHANGELOG.ko.md) · [Latviešu](CHANGELOG.lv.md) · **Bahasa Melayu** · [नेपाली](CHANGELOG.ne.md) · [Nederlands](CHANGELOG.nl.md) · [Norsk](CHANGELOG.no.md) · [Polski](CHANGELOG.pl.md) · [Português](CHANGELOG.pt.md) · [Português (Brasil)](CHANGELOG.pt-BR.md) · [Română](CHANGELOG.ro.md) · [Русский](CHANGELOG.ru.md) · [संस्कृतम्](CHANGELOG.sa.md) · [Slovenčina](CHANGELOG.sk.md) · [Shqip](CHANGELOG.sq.md) · [Српски](CHANGELOG.sr.md) · [Svenska](CHANGELOG.sv.md) · [ไทย](CHANGELOG.th.md) · [Türkçe](CHANGELOG.tr.md) · [Українська](CHANGELOG.uk.md) · [Oʻzbekcha](CHANGELOG.uz.md) · [Tiếng Việt](CHANGELOG.vi.md) · [简体中文](CHANGELOG.zh.md) · [繁體中文](CHANGELOG.zh-TW.md)

# Log perubahan

Setiap keluaran Lure, yang terbaharu dahulu. Apa yang telah mendarat sejak keluaran terakhir ada di bawah *Belum dikeluarkan*. Versi tidak membawa awalan `v`, sepadan dengan tag keluarannya.

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
