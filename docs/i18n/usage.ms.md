<!-- Terjemahan docs/usage.md — status: commit 94b1372.
     Terjemahan mesin (Claude Sonnet 5), belum disemak penutur asli.
     Label pemalam datang daripada src/lang/translations.ts, manakala
     label Obsidian datang daripada teks yang dihantar oleh aplikasi
     itu sendiri, jadi ia sepadan dengan apa yang anda lihat di skrin. -->

[English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · [Čeština](usage.cs.md) · [Dansk](usage.da.md) · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · [Bahasa Indonesia](usage.id.md) · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · **Bahasa Melayu** · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · [Norsk](usage.no.md) · [Polski](usage.pl.md) · [Português](usage.pt.md) · [Português (Brasil)](usage.pt-BR.md) · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

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

Jika nota folder itu ialah nota yang sedang anda baca, klik itu memaparkan folder sebaliknya — tiada apa untuk dibuka yang belum pun ada pada skrin, dan itulah maksud tekanan kedua sejak dahulu lagi.

Dengan [Folder notes](obsidian://show-plugin?id=folder-notes) dipasang, klik yang sama membuka nota folder itu sebaliknya, **pada sebarang kedalaman**: nota itu diselesaikan di sini mengikut konvensyen pemalam itu sendiri dan bukan dibiarkan kepadanya untuk menjawab. Pemalam itu hanya mengenali folder yang telah ditandanya, yang mana pada laluan lebih daripada satu folder dalam bermaksud tiada satu pun daripadanya, jadi tekanan yang dahulunya membuka nota folder peringkat teratas tidak lagi berfungsi pada kedalaman berikutnya. Dua pemalam nota folder yang lain tidak menerbitkan sebarang konvensyen untuk dibaca dan tidak pernah menuntut baris itu, jadi dengan pemalam-pemalam itu pemisah memaparkan folder seperti biasa. Ia satu-satunya pemalam nota folder yang didapati menuntut laluan bar tajuk; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) dan [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) menguruskan nota folder tetapi tidak mendengar klik pada laluan bar tajuk, jadi dengan pemalam-pemalam itu pemisah memaparkan folder seperti biasa. Lihat [keserasian](../compatibility.md#verified-against).

Pemisah **hanya digariskan apabila folder sebelumnya benar-benar mempunyai nota folder**, jadi garisan itu adalah janji bahawa ada sesuatu untuk dibuka — pada setiap kedalaman apabila [Folder notes](obsidian://show-plugin?id=folder-notes) berjalan, kerana nota itu diselesaikan di sini dan bukan dibiarkan kepada pemalam itu untuk menandanya. Jika bukan pemalam itu yang berjalan, tiada apa yang digariskan dan tiada apa yang terbuka: pemisah memaparkan, sepertimana ia berfungsi tanpa sebarang pemalam nota folder langsung. Setiap pemisah kekal boleh diklik walau apa pun keadaannya — satu tanpa garisan memaparkan dan mengembangkan foldernya dalam bar sisi, yang mana kursor penunjuk masih menandakannya. Garisan itu berpindah daripada nama folder pada masa yang sama: dengan pertukaran dihidupkan, nama itu membuka senarai, jadi menandainya sebagai pautan ke nota itu akan menjadi pembohongan.

**Mod tukar nama/alih mengatasi kedua-duanya**, apa jua kata tetapannya: tiada apa pada baris itu membuka folder selagi pemindahan belum selesai, kerana membukanya akan meninggalkan pemindahan. Nama folder dipilih untuk disunting dan pemisah turun — kedua-duanya cara memilih destinasi — dan garisan hilang untuk menunjukkan bahawa pembukaan digantung.

**Akar bilik kebal** ialah satu-satunya segmen yang bukan segmen laluan. Ia tiada induk untuk menyenaraikan adik-beradiknya, jadi ia sebaliknya membuka [senarai lokasi](#meneroka-di-luar-bilik-kebal) — bilik kebal anda yang lain, folder peribadi, akar sistem fail, dan pemacu yang dilekapkan.

## Pemisah bilik kebal itu sendiri

Pemisah sejurus selepas nama bilik kebal mewakili bilik kebal itu sendiri dan bukan
sesuatu folder, jadi ia melakukan apa yang tidak dapat dilakukan oleh mana-mana pemisah lain:

| | Klik pertama | Klik seterusnya |
| --- | --- | --- |
| **Dengan pemalam halaman permulaan** (halaman yang menyambut anda apabila Obsidian dibuka) | Membuka halaman itu dalam panel ini | Melipat pokok fail |
| **Tanpa pemalam itu** | Melipat pokok fail | Mengembalikan tepat apa yang terbuka sebelumnya |

Klik biasa, bukan klik dua kali: sebaik halaman itu terbuka, pemisah tiada
apa lagi untuk dibuka, jadi tekanan seterusnya ialah lipatan itu — walau berapa lama
anda mengambil masa untuknya.

Ia **digariskan** apabila ada halaman permulaan untuk dibuka, yang mana janji sama
seperti yang dibuat oleh pemisah sesuatu folder: ada sesuatu di situ. Melipat adalah suis togol —
tekanan seterusnya memulihkan folder yang terbuka, dan hanya itu, jadi pokok
yang telah anda susun tidak hilang hanya kerana melirik sesuatu yang lain.

## Panel tanpa fail

Tab kosong, graf dan apa-apa lagi yang tidak menamakan sebarang fail mendapat baris
tersendiri: bilik kebal, kemudian satu segmen menyatakan apa yang dipegang oleh panel itu.

```
my-vault / :blank      a new tab
my-vault / :graph      the graph, local or global
my-vault / :<type>     anything else with no file
```

**Senarai akar bilik kebal itu sendiri** turut menawarkan halaman-halaman ini, di bawah folder dan
nota yang sebenarnya ada di dalamnya: pilih `:graph` atau `:search` di situ dan panel
membuka paparan itu, tepat seperti memilih nota membuka nota itu. Halaman mana yang wujud
dibaca daripada Obsidian dan bukan ditulis di sini — setiap paparan yang tidak
wujud untuk menunjukkan sesuatu fail, jadi pemalam yang mendaftarkan satu (tab utama, kalendar)
muncul tanpa pemalam ini mengetahui apa-apa mengenainya. Paparan yang memerlukan fail —
Markdown, PDF, imej, kanvas, pangkalan — tidak ditawarkan: tiada apa untuk
ditunjukkan oleh mereka.

Titik bertindih itulah intinya — tiada fail atau folder boleh dinamakan `:graph`, jadi baris
itu tidak boleh disalahtafsirkan sebagai laluan yang boleh dibuka. Label itu datang daripada
jenis paparan dan bukan daripada perkataan Obsidian sendiri, jadi ia kelihatan sama
walau apa pun bahasa antara muka, dan `-view` di hujung digugurkan: pemalam tab utama
mendaftarkan paparannya sebagai `home-launcher-view`, dan baris itu memaparkan
`:home-launcher`.

Mengklik ruang kosong, atau label itu sendiri, **membuka medan pada akar bilik
kebal**: taip satu laluan dan <kbd>Enter</kbd> membukanya dalam panel ini juga, dengan
penyudahan yang sama, senarai yang sama dan medan merah yang sama menawarkan untuk mencipta
apa yang belum ada lagi. Tab kosong ialah tempat yang sesuai untuk menaip ke mana anda mahu
pergi, dan itulah tujuannya.

Label itu hanyalah label dan tiada lagi: tiada senarai, tiada seret, tiada tukar nama. Panel
dalam bar sisi dibiarkan sepenuhnya — panel pautan belakang mengekalkan tajuk
yang diberikan oleh Obsidian.

Kanvas, PDF, imej dan pangkalan tidak memerlukan apa-apa daripada ini. Ia adalah fail, jadi ia
mendapat bar laluan biasa.

## Mengklik satu segmen: tukar dengan adik-beradiknya

Mengklik nama folder memilih **nama folder itu** dalam medan teks dan membuka senarai folder **satu lapisan di atasnya** — induknya. Menaip atau memilih entri menukar folder ini dengan adik-beradiknya dan membiarkan segala di bawahnya tidak tersentuh, jadi `Projects/2026/Kickoff.md` → klik `2026` → pilih `2025` memberi anda `Projects/2025/Kickoff.md`.

Mengklik **nama nota** berfungsi dengan cara yang sama terhadap foldernya sendiri, dan memilih nama itu **tanpa sambungan failnya** — menukar nama adalah penyuntingan biasa, dan menaip terus ke atas pilihan yang meliputi `.md` dahulunya secara tidak sengaja menukar jenis fail. Sambungan fail kekal kelihatan hanya satu ketukan kekunci jauh: <kbd>→</kbd> mencapainya, dan klik dua kali yang meluaskan ke seluruh baris mengambil semuanya sekali.

Mengklik folder sudah pun memilih satu segmen, jadi **satu klik lagi** meluaskan pilihan ke seluruh baris — folder itu *dan* segala di bawahnya — dan menaip kemudian menggantikan baki laluan sekali gus. Berfungsi sama dalam navigasi dan dalam mod tukar nama/alih.

Itu hanya terpakai sebagai sambungan kepada klik yang membuka medan tersebut. Sebaik anda menggunakan medan itu, ia berkelakuan seperti medan teks lain: klik meletakkan kursor, klik dua kali mengambil satu perkataan, klik tiga kali mengambil satu baris.

Walau apa pun caranya, baki laluan kekal kelihatan di sekeliling medan, sebagai cip sebelumnya dan sebagai teks tidak terpilih selepasnya, jadi laluan penuh tidak pernah hilang daripada bar tajuk. Taip untuk menggantikan pilihan, atau tekan <kbd>→</kbd> untuk mengekalkannya dan sunting daripada situ. Senarai memaparkan seluruh folder tidak kira apa yang diisi terlebih dahulu; ia hanya mula menapis sebaik anda benar-benar menaip.

## Turun melalui pemisah

Mengklik pemisah (dengan **Nama folder membuka senarai** mati) turun ke folder sebelumnya: senarai memaparkan kandungan folder *itu*, dan baki laluan terbuka dalam keadaan terpilih di dalam medan. Memilih folder menambahkannya pada jejak laluan dan terus membuka senarai seterusnya, jadi anda boleh mengklik turun sebatang pokok tanpa meninggalkan baris tajuk.

## Senarai terbuka di tempat anda berada

Senarai terbuka pada entri tempat anda berada — nota yang menjadi milik bar ini,
atau, apabila klik pada folder telah menyenaraikan induknya, folder itu — dan bukan pada
baris pertama. Dalam folder yang mempunyai dua ratus nota, baris pertama jauh sekali daripada anda.

**Skrol tetikus di atas nama membuka senarainya dan melalui setiap entrinya.** Pusingan pertama membuka
senarai yang sama seperti menekan nama itu membukanya, dan setiap pusingan seterusnya menggerakkan sorotan
satu baris, meletakkan apa yang sedang anda tunjuk ke dalam medan tepat seperti anak panah melakukannya —
jadi adik-beradik boleh dicari dan diambil tanpa papan kekunci. Berhenti menskrol pada mana-mana hujung
mengembalikan teks anda. Baris dengan laluan lebih panjang daripada panel membalas skrol dengan
menatal ke tepi sebaliknya, yang mana bacaan itu mengatasi selagi ia terpakai.

Senarai itu **setinggi ruang yang dibenarkan oleh tetingkap**. Obsidian menghadkan senarai cadangannya
kepada 300 piksel tidak kira apa terletak di bawahnya; yang ini berjalan sehingga bahagian bawah
tetingkap, berhenti beberapa piksel sebelum tepi, dan hanya menatal sebaik folder itu
memuatkan lebih daripada itu. Ia **tidak lebih lebar daripada bar laluan**: nama yang
tidak muat dipendekkan seperti baris itu memendekkan satu, dan ditunjukkan sepenuhnya apabila
anda menunjuk kepadanya.

Bergerak melalui senarai **meletakkan apa yang sedang anda tunjuk ke dalam medan**, sama ada melalui kekunci anak panah
atau melalui menuding — menggantikan segmen yang sedang anda sunting, dengan
baki laluan dibiarkan berdiri — jadi baris tempat anda berada juga merupakan laluan
yang akan anda dapat.

Baki laluan ditunjukkan **hanya sejauh mana ia wujud di bawah apa yang sedang
anda tunjuk**. Berada dalam satu folder dengan `2026/note.md` di belakang segmen yang sedang
anda sunting, menunjuk ke satu folder yang mempunyai `2026` dengan `note.md` di dalamnya menunjukkan
semuanya; satu yang mempunyai `2026` tanpa nota menunjukkan `2026`; satu yang tiada kedua-duanya
tidak menunjukkan apa-apa selepas nama itu langsung, begitu juga satu fail, kerana tiada apa terletak
di bawah satu fail. Apa **yang telah anda taip** mengekalkan seluruh laluannya semasa anda
menaipnya, walau sedikit mana pun yang sudah ada — nama yang separuh ditaip bukanlah
suatu keputusan. Menetapkan satu nama adalah suatu keputusan, dan apa yang tidak dapat dicapai daripadanya
dipotong pada takat itu; folder yang sedang anda cipta ialah yang anda taip
*selepas* itu, iaitu tempat <kbd>Enter</kbd> menciptanya.
Teks yang telah anda taip dikekalkan: bergerak **keluar daripada mana-mana hujung senarai** — ke atas melepasi
entri pertama, atau ke bawah melepasi entri terakhir — melepaskannya dan mengembalikan teks anda,
dengan tiada apa disorot. Medan itu ialah satu perhentian pada gelang sama seperti mana-mana entri, jadi satu
pusingan melaluinya dan bukan melompat daripada baris terakhir ke baris pertama, dan
menekan terus daripada situ membawa pusingan ke hujung yang satu lagi.

Mengalihkan **penunjuk daripada senarai** juga mengembalikan teks anda — dan menyerahkan semula
sorotan kepada apa jua yang memilikinya sebelum tetikus tiba: entri yang telah anda tuju dengan anak panah,
dipaparkan semula dalam medan, atau entri yang menjadi tempat senarai terbuka kerana itulah tempat
anda berada. Menuding adalah cara melihat dan bukan cara memilih, jadi sapuan
penunjuk merentas senarai tidak mengenakan apa-apa kos kepada anda.

Senarai itu sendiri tidak berubah semasa anda bergerak melaluinya — ia terus menapis mengikut
apa yang anda taip, bukan mengikut apa yang telah dipratonton ke dalam medan — jadi entri
di bawah anda tidak pernah beralih di bawah tekanan seterusnya. Menaip menggantikan
pratonton dan menapis seperti biasa.

**Apa yang ditapisnya ialah segmen yang sedang anda sunting**, bukan segala-galanya dalam
medan itu. Mengklik satu folder membiarkan baki laluan di situ di belakang nama
yang sedang anda tukar, jadi menapis mengikut keseluruhannya akan mencari anak bernama
`2026/Kickoff.md` dan tidak menemui apa-apa — senarai akan tertutup pada ketukan kekunci pertama anda
walau apa pun yang anda taip. **Sambungan fail juga dikecualikan daripadanya**, selagi
kursor berada di depan titik itu: mengklik nama nota memilih
batangnya dan membiarkan `.md` di belakangnya, jadi menaip satu huruf menjadikan medan itu berbunyi
`a.md`, dan itu bukan apa yang sedang anda cari. Letakkan kursor melepasi titik itu
dan sambungan fail dikira seperti apa jua yang lain. Nama yang benar-benar tidak memadankan
apa-apa tetap menutup senarai, kerana senarai kosong adalah jawapan yang jujur.

Satu pratonton **menukar segmen itu sahaja dan membiarkan baki laluan tidak diusik**:
menunjuk ke satu folder bertanya bagaimana jika langkah ini menjadi yang itu, bukan membuang laluan
itu. Berhenti daripada senarai mengembalikan teks *dan* pilihan yang anda ada,
jadi ketukan kekunci seterusnya menggantikan apa yang sepatutnya digantikannya sebelum anda meninjau.

## Entri senarai ialah baris pengurus fail sebenar

Setiap fail dan folder dalam senarai berkelakuan seperti barisnya dalam Peneroka fail:

- **Klik kanan** untuk mendapatkan menu konteks yang sama seperti yang diberikan Peneroka fail, entri demi entri — termasuk yang ditambah oleh pemalam lain. Sebuah folder menawarkan *New note*, *New folder*, *New canvas*, *New base*, *Make a copy*, *Move folder to…*, *Search in folder*, *Copy path*, *Show in system explorer*, *Rename…* dan *Delete*; sebuah fail menawarkan yang setara dengannya, termasuk *Open in default app*.
- **Seret** satu entri ke mana-mana tempat Obsidian menerima fail: ke dalam editor untuk menyisipkan pautan, ke atas folder dalam Peneroka fail untuk memindahkannya, ke atas bar tab untuk membukanya.

Kata-kata menu datang daripada terjemahan Obsidian sendiri, jadi ia sepadan dengan seluruh aplikasi dalam setiap bahasa.

## Menaip laluan

- Mengklik **ruang kosong** sebelum atau selepas laluan pada bar tajuk membuka medan teks pada keseluruhan laluan itu *dan menunjukkan nota tersebut dalam File Explorer*, jadi pokok itu mengikut anak tetingkap tanpa gerakan kedua. Ia **mengira klik anda**: satu memilih laluan tanpa sambungan, dua memilihnya dengan sambungan, tiga memilih laluan yang dikenali oleh mesin. Mengklik **nama fail** dikira dengan cara yang sama tetapi bermula satu anak tangga lebih rendah, pada nama itu sendiri: satu memilihnya tanpa sambungan, dua dengan sambungan, dan tiga meluas kepada keseluruhan laluan *dari folder bilik kebal anda* — bentuk yang dikehendaki oleh pautan atau carian, bukannya bentuk yang dikenali mesin. Klik keempat mencapai yang satu itu.
- **Kiraan itu tergolong pada larian yang membuka medan tersebut.** Sebaik ia tamat tempoh — anda berhenti, menaip, atau mengklik sekali di mana-mana dalam teks itu — medan itu menjadi medan teks seperti biasa, dan klik dua kali di dalamnya memilih perkataan di bawah penunjuk seperti di tempat lain. Taip di atas apa yang dipilih, atau sunting di tempatnya. (Mengklik nama fail itu sendiri memilih hanya nama fail; lihat di atas.) Mengklik kanan pada ruang yang sama **menyalin** tiga pilihan yang sama itu, pada klik kedua, ketiga dan keempat — satu butang menunjukkannya, satu lagi mengambilnya. Satu klik kanan **tunggal** membuka laluan itu dengan kesemuanya dipilih dan menawarkan apa yang boleh dilakukan kepadanya: potong, salin, tampal, pilih semua, dalam perkataan Obsidian sendiri.
- **Klik tengah pada ruang kosong** untuk menampal atas laluan: medan itu terbuka pada keseluruhan laluan *dari akar bilik kebal*, jadi papan klip menggantikan kesemuanya, dan apa yang mendarat dipilih. <kbd>Enter</kbd> kemudian pergi ke sana.
- **<kbd>Ctrl</kbd>+klik ruang kosong** untuk membuka nota ini semula dalam tab tersendiri, diserlahkan dalam File Explorer supaya tab kedua tidak disalah anggap sebagai tab pertama. Pada **nama bilik kebal**, <kbd>Ctrl</kbd>+klik atau klik tengah membuka tab yang tidak memegang apa-apa, berdiri di akar bilik kebal dengan senarai sudah terpapar — suatu tempat untuk menaip laluan dari mula.
- Menaip semasa laluan pada bar tajuk sedang dipaparkan menukar segmen terakhir menjadi medan input kecil dengan lengkap-auto langsung yang terhad kepada folder semasa.
- **Laluan dari akar sistem fail boleh ditaip.** `/` di hadapan medan kosong membuka satu bukannya melengkapkan satu anak tangga, setiap garis miring selepasnya tergolong padanya, dan `~` ialah folder utama anda. Semasa medan itu memegang laluan sedemikian senarai lejar menyenaraikan mesin bukannya bilik kebal, dan segmen pembukaan baris itu ke tepi — apa yang ada dalam medan itu bermula di akar dan menyatakannya. Dengan *Access external files* dimatikan senarai itu berdiri kosong sebaliknya, kerana <kbd>Enter</kbd> akan menolak laluan itu dalam apa jua keadaan.
- **Halaman boleh ditaip, bukan hanya dipilih.** `:graph`, `:search`, atau apa sahaja yang didaftarkan oleh pemalam anda — label yang ditawarkan oleh [senarai akar bilik kebal](#panel-tanpa-fail). Menaip titik dua di mana-mana memanggil mereka, kerana tiada nama boleh mengandungi satu, dan <kbd>Enter</kbd> membuka paparan itu dalam anak tetingkap ini. `:graph` yang ditaip **di dalam folder** membuka graf folder itu — graf yang ditapis kepada `path:"that/folder"` dalam kotak carian sendiri, seolah-olah ditaip di situ; pada akar bilik kebal ia ialah keseluruhan graf. <kbd>Tab</kbd> melengkapkan nama itu seperti ia melengkapkan nama folder — dan membawa bersama apa sahaja lagi yang dipegang oleh medan itu, kerana halaman tidak berada dalam mana-mana folder dan tiada apa hidup di bawah satu. Mengklik label pada anak tetingkap sedemikian membuka medan itu yang sudah memegangnya.
- **Apa yang <kbd>Tab</kbd> akan tulis ditawarkan semasa anda menaip.** Di mana setiap anak yang bermula dengan apa yang anda taip terus bersetuju untuk seketika, persetujuan itu muncul selepas kursor, dipilih; di mana mereka berhenti bersetuju, langkah ke arah yang pertama daripada mereka pula muncul — atau ke arah baris yang anda tuju dengan anak panah, kerana itulah yang <kbd>Tab</kbd> akan tuju. Menaip di atas nama meninggalkan sambungannya berdiri dan menawarkan di hadapannya, dan folder yang baru dilangkah masuk menawarkan langkah pertamanya, jadi tiada keadaan di mana tiada apa ditawarkan dan <kbd>Tab</kbd> menulis sesuatu tetap sahaja. Taip huruf-huruf itu dan ia ditelan satu demi satu; taip apa-apa lain dan ia hilang. <kbd>Tab</kbd> atau <kbd>End</kbd> mengambilnya keseluruhan, <kbd>→</kbd> mengambil satu huruf daripadanya, <kbd>Backspace</kbd> mengambilnya kembali tanpa menyentuh huruf yang anda taip, dan tiada apa ditawarkan lagi sehingga anda menaip — jadi sentiasa ada jalan keluar daripada nama yang anda tidak mahu. Selepas satu klik <kbd>Tab</kbd> langkah seterusnya ditawarkan serta-merta, seperti selepas huruf yang ditaip. Apa yang disenaraikan oleh senarai lejar ditapis oleh apa yang **anda** taip, bukan sekali-kali oleh apa yang ditawarkan.
- **Tawaran mengabaikan huruf besar/kecil.** `sch` menawarkan `Schemes`, dieja mengikut cara nama itu dieja; mengambil kembali tawaran itu memberi huruf anda kembali seperti yang anda taip. Di mana `Test` dan `test` kedua-duanya wujud, yang dieja mengikut cara anda taip ditawarkan.
- Dalam medan itu bahagian yang ditawarkan hanya **dipilih**. Senarai itulah tempat ia dieja penuh: setiap baris menunjukkan bahagian yang **sepadan dengan apa yang anda taip dalam tebal**, di mana-mana sahaja dalam nama itu ia sepadan — `kick` menemui `Weekly kickoff` dan menyatakannya. **Nama yang bermula dengan apa yang anda taip datang dahulu**, mendahului yang hanya mengandunginya, dan ditandakan dengan garis di sepanjang tepinya: **biru** di mana mereka berkongsi lebih daripada apa yang anda taip, jadi <kbd>Tab</kbd> ada sesuatu untuk ditambah bagi kesemuanya, dan **hijau** pada cabang yang diambil oleh tawaran itu di mana mereka berpisah — `te` dengan `test1`, `test2`, `text1` dan `text2` menawarkan `te`+`st`, jadi kedua-dua baris `test` adalah hijau dan kedua-dua baris `text` mengekalkan garis biasa. Setiap satu daripadanya **menggarisbawahi langkah yang <kbd>Tab</kbd> akan ambil ke arahnya**, bukan hanya yang ditawarkan, dan garis bawah itu mengikut tawaran itu semasa ia berubah.
- **Menaip melepaskan baris yang diserlahkan.** Senarai itu terbuka pada entri yang anda sedang berdiri di situ, tetapi sebaik anda menaip ia mengenai suatu tempat lain, dan serlahan yang tiada sesiapa letakkan di situ terbaca sebagai pilihan yang sudah dibuat.
- Tawaran itu sentiasa hanya teks di hadapan anda: huruf yang anda taip kekal dieja mengikut cara anda taip semasa anda menaip, dan mengambil tawaran itu menulis semula nama itu mengikut cara folder mengejanya, kerana laluan mesti sepadan dengan cakera. `sk` + <kbd>Tab</kbd> mencapai `Skyline`, bukan `skyline`.
- **Medan itu memakai warna apa yang dinamakannya**, warna yang sama seperti barisnya dalam senarai lejar: ungu untuk nota, termasuk nota folder sendiri, oren untuk apa sahaja yang bukan nota, biru untuk nota yang anda sedang berada di situ. Baris yang mengambil warnanya ialah yang dinamakan tepat seperti apa yang anda taip, atau jika tidak yang diserlahkan, atau jika tidak yang pertama yang masih dituju oleh penaipan anda.
- **Medan itu bertukar merah sebaik tiada apa menjawab kepada apa yang ada di dalamnya** — tiada fail, tiada folder, dan tiada baris senarai lejar yang masih menuju kepadanya. Dari situ <kbd>Enter</kbd> mencipta apa yang ada dalam medan itu dan bukannya membukanya, dan warna merah itu menyatakannya sebelum anda melakukannya. Ia tidak pernah muncul untuk alamat web, yang bukan tempat pada mesin ini untuk dicari. Keseluruhan medan itu diwarnakan bukannya hanya bahagian yang hilang: medan teks tidak boleh mewarnakan separuh daripada kandungannya sendiri. Dalam mod alih/tukar nama medan itu mengekalkan merahnya sendiri, untuk nama yang haram; di situ, nama yang tiada apa menjawab kepadanya adalah maksudnya. Bahawa nama itu **sudah diambil** ditangani apabila anda melakukannya, dengan dialog bertanya apa yang patut berlaku kepada fail yang menghalang — lihat [A name that is taken](#nama-yang-telah-diambil): setiap nama yang ditaip menuju `Notes.md` melalui nama yang mungkin fail tersendiri, jadi menandainya huruf demi huruf memberi amaran tentang nama yang tiada sesiapa minta lagi.
- `/` melakukan segmen yang anda sedang taip dan turun ke dalamnya, mengekalkan apa sahaja yang ada di belakangnya — perkara yang sama yang dilakukan oleh <kbd>Tab</kbd> apabila ia melangkah masuk.
- <kbd>Backspace</kbd> dalam medan kosong melangkah keluar ke folder induk, membuka semula namanya dengan kursor di hujung. Begitu juga <kbd>Backspace</kbd> di hadapan sambungan yang ditinggalkan bersendirian — medan yang memegang tiada apa kecuali `.md` tidak menamakan apa-apa — dan sambungan yang bersendirian itu turut hilang.
- **Mengklik folder semasa medan sedang terbuka meluaskannya kepada keseluruhan laluan selepas folder itu**, dengan nama folder itu sendiri dipilih — perkara yang sama yang akan dilakukan oleh klik itu daripada baris tersebut, dan segala yang dipegang oleh medan itu dikekalkan. Apa yang ada dalam medan itu ialah hujung baris semasa ia terbuka, jadi folder yang diklik lebih ke atas mengembalikan laluan yang telah dilalui oleh sesi itu bukannya yang bermula dengan nota itu.
- **Menganak panah keluar dari hadapan medan membawa masuk folder sebelumnya**, seolah-olah keseluruhan laluan itu satu baris teks. Dengan kursor di permulaan sepenuhnya, <kbd>←</kbd> membawa folder itu ke dalam medan dan mendarat di hujung namanya, <kbd>Ctrl</kbd>+<kbd>←</kbd> mendarat di permulaannya, dan <kbd>Home</kbd> membawa masuk setiap folder sehingga akar bilik kebal — atau sehingga tempat yang anda pilih, di luar bilik kebal — sekali gus. Tahan <kbd>Shift</kbd> dan pilihan itu meregang atas apa yang dibawa masuk. Pada macOS lompatan perkataan ialah <kbd>Option</kbd>+<kbd>←</kbd> dan <kbd>Cmd</kbd>+<kbd>←</kbd> ialah <kbd>Home</kbd>. Di mana-mana selain hadapan ini ialah kekunci teks biasa. **Semasa senarai lejar dipaparkan, <kbd>Home</kbd>, <kbd>End</kbd>, <kbd>PgUp</kbd> dan <kbd>PgDn</kbd> tergolong padanya** — baris pertama, baris terakhir, satu halaman ke atas, satu halaman ke bawah, halaman ialah apa yang ditunjukkan oleh senarai itu, dengan baris yang diserlahkan mengekalkan kedudukannya pada skrin — dan mencapai teks itu hanya sebaik ia ditutup; <kbd>Shift</kbd>+<kbd>Home</kbd> membawa masuk setiap folder dengan senarai itu terbuka juga.
- **Senarai itu mengikut kursor.** Pilih bahagian lain daripada laluan itu — seret atasnya, klik ke dalamnya, atau anak panah sepanjangnya — dan senarai lejar menyenaraikan anak-anak folder *itu*, bukan yang medan itu dibuka padanya. Folder itu dikira daripada cip serta apa sahaja daripada medan yang terletak di hadapan kursor, jadi mengklik ke dalam `Notes.md` dalam medan yang memegang `2026/Notes.md` menyenaraikan apa yang ada dalam `2026`. Menuding pada baris menulisnya ke dalam segmen yang kursor berada di dalamnya, dan mengambil penunjuk itu daripada senarai memberikan kembali teks anda dan pilihan anda, tepat sama seperti asalnya.
- **Menyapu keluar pilihan daripada medan** dan melepaskannya di suatu tempat lain tidak menutupnya. Klik yang bermula dalam medan tergolong pada penyuntingan itu tidak kira sejauh mana ia bergerak; hanya klik yang *bermula* di luar adalah klik yang membawa keluar.
- <kbd>Enter</kbd> melakukan — dan apabila medan itu tidak menamakan apa-apa langsung, seperti dalam folder kosong di mana tiada apa untuk dilengkapkan, ia menyatakan *No file selected* dan kekal terbuka bukannya tertutup seolah-olah sesuatu telah dipilih. <kbd>Esc</kbd> atau klik di tempat lain membatalkan kembali kepada laluan sebenar fail itu. Satu klik <kbd>Esc</kbd> sudah memadai: ia menutup senarai lejar, meninggalkan medan itu dan menyerahkan tumpuan kembali kepada nota, bukannya memerlukan satu klik bagi setiap lapisan.

Medan itu tanpa hiasan — tiada kotak, tiada sempadan — jadi ia terbaca sebagai teks laluan itu sendiri, dan ia membesar sendiri semasa anda menaip.

## Setiap bahagian baris, butang demi butang

Keseluruhan baris sekali imbas. Lajur klik-kanan ialah apa yang **satu** tekanan berikan kepada anda; butang itu juga mengira tekanan, dan [jadualnya sendiri](#klik-kanan-satu-tekanan-dua-tekanan-tiga) di bawah mempunyai tekanan kedua, ketiga dan keempat. Yang ini mengandaikan **Nama folder membuka senarai** dihidupkan, iaitu lalai — dengan ia dimatikan, nama folder dan pemisah bertukar lajur pertama, seperti yang dinyatakan oleh [jadual di atas](#laluan-pada-bar-tajuk).

| Tempat anda menekan | Klik | Klik dua kali | <kbd>Ctrl</kbd>+klik, atau klik-tengah | Klik-kanan | Lepaskan sesuatu padanya |
| --- | --- | --- | --- | --- | --- |
| **Nama bilik kebal** | Membuka senarai lokasi — bilik kebal lain, laman utama, root sistem fail, pemacu yang dilekapkan. Dimatikan secara lalai; dengan ia dimatikan, sebaliknya mendedahkan bilik kebal dalam File Explorer | Menanda **keseluruhan laluan mutlak**. Senarai itu dibuka dengan laluan sudah berada dalam medan dan hanya bahagian bilik kebal itu sendiri ditanda; tekanan kedua melebarkan ke selebihnya. Tiada apa untuk dilebarkan apabila senarai dimatikan | Tab yang tidak memegang apa-apa, berdiri di root bilik kebal dengan senarai sudah dipaparkan — suatu tempat untuk menaip laluan dari mula | Menu konteks bilik kebal itu sendiri: apa yang boleh dilakukan pada bilik kebal yang dinamakan oleh segmen itu | **Fail** dipindahkan ke root bilik kebal. **Teks** membuka medan di root, untuk menamakan nota yang akan terhasil daripadanya |
| **Nama folder** | Memilih folder itu untuk disunting, dengan kandungan folder induknya disenaraikan di bawah | Menaip semula folder itu dan segala-galanya di bawahnya | Membuka folder itu dalam tab baharu | Menu konteks folder itu — milik File Explorer sendiri | **Fail** berpindah ke dalam folder itu. **Teks** membuka medan di situ, untuk menamakan nota yang sepatutnya menjadi |
| **Pemisah** | Membuka folder sebelumnya — nota folder miliknya jika plugin nota folder sedang berjalan dan satu wujud, jika tidak mendedahkan dan mengembangkannya dalam File Explorer | **Membuat nota folder itu** dan pergi kepadanya, apabila plugin nota folder sedang berjalan dan folder itu belum mempunyai satu lagi. Apabila ia sudah mempunyai satu, ini hanyalah tekanan tunggal semula | Nota folder dalam tab baharu jika satu wujud; jika tidak, tab yang berdiri pada folder itu dengan senarai dipaparkan | Menu konteks folder yang sama yang diberikan oleh nama itu — milik nota folder, jika ia mempunyai satu | Ke hujung nota folder itu, jika ia mempunyai satu, setelah anda mengesahkan |
| **Nama nota** | Membuka nama untuk disunting — folder-folder kekal sebagai cip di sebelahnya — dengan segala-galanya kecuali sambungan ditanda | Mengambil sambungan itu ke dalam tanda juga | Membuka nota dalam tab baharu | Menu konteks fail — sama seperti yang diberikan oleh baris File Explorer | Ke hujung nota ini, setelah anda mengesahkan |
| **Ruang kosong** | Membuka **keseluruhan laluan** untuk disunting, ditanda sehingga ke sambungan. Folder-folder turut masuk ke dalam medan bersamanya, dan inilah yang menjadikan ini gerak isyarat untuk menaip semula laluan dan bukannya nama | Mengambil sambungan itu ke dalam tanda juga | <kbd>Ctrl</kbd> membuka nota ini semula dalam tabnya sendiri, dikelipkan dalam File Explorer supaya salinan itu tidak disilap sebagai yang pertama. Klik-tengah *bukan* gerak isyarat itu: ia menampal ganti laluan | Menanda keseluruhan laluan dan menawarkan apa yang boleh dilakukan pada teks yang ditanda | |

**Tekanan kedua mengikut yang pertama.** Membuat nota folder terletak pada
bahagian baris mana sahaja yang *membuka* folder itu, iaitu pemisah secara
lalai dan nama folder apabila pertukaran itu dimatikan — sasaran yang sama
yang ditandakan oleh garis bawah, dan sasaran yang sama yang sudah diminta
oleh satu tekanan tunggal untuk nota folder. Ia ditawarkan hanya semasa
plugin nota folder sedang berjalan, kerana nota folder ialah suatu konvensyen
dan bukan fakta tentang sistem fail, dan hanya apabila folder itu belum
mempunyai satu lagi. Tempat ia berada dan namanya dibaca daripada tetapan
**Folder notes** sendiri, jadi bilik kebal yang menyimpan nota folder di
sebelah folder, atau menamakannya `_index`, mendapat salah satu daripadanya;
fail itu sendiri sentiasa Markdown, iaitu apa yang dihasilkan oleh perintah
buat lalai plugin itu sendiri dan apa yang ia cari tidak kira jenis apa yang
ditetapkan untuk bilik kebal itu. Mod alih/tukar nama tiada kaitan langsung —
tiada apa-apa pada baris membuka folder semasa alih sedang menunggu.

**Klik pada nama terus berlanjutan.** Empat anak tangga itu adalah empat yang
sama yang dilalui oleh kekunci tukar nama, dalam susunan yang sama: nama,
nama dengan sambungannya, laluan dari bilik kebal, laluan dari root sistem.
Jadi klik ketiga mencapai laluan bilik kebal dan yang keempat mencapai
laluan mesin — empat perkara yang sama yang diberikan oleh <kbd>Tab</kbd>
selepas hujung medan, dan empat yang sama yang *disalin* oleh butang kanan
dan bukannya dipilih.

**Menuding** ialah jawapannya sendiri dan tidak pernah mengubah apa-apa:
nama yang dipendekkan kembali penuh selagi anda menuding padanya, dan ikon
di permulaan baris menyatakan tempat bilik kebal itu berada.

## Klik-kanan: satu tekanan, dua tekanan, tiga

Setiap sasaran pada baris menjawab klik-kanan, dan berapa banyak tekanan yang anda berikan padanya menentukan apa yang anda perolehi. Kerana tekanan kedua mungkin masih akan datang, tekanan pertama menunggu kira-kira sepertiga saat sebelum bertindak — kos meletakkan tiga gerak isyarat pada satu butang.

| Tempat anda menekan | Sekali | Dua kali | Tiga kali |
| --- | --- | --- | --- |
| **Nama bilik kebal** | Menu konteks bilik kebal: apa yang boleh dilakukan pada bilik kebal yang segmen itu namakan — termasuk *Buka bilik kebal ini*, jika bilik kebal itu bukan yang anda berada di dalamnya | Menyalin nama bilik kebal | Menyalin tempat bilik kebal berada — dan tekanan keempat, tempat fail terbuka berada |
| **Pemisah** | Menu folder itu — milik nota folder, jika plugin nota folder sedang berjalan dan folder itu mempunyai satu | | |
| **Nama folder** | Menu folder itu | Menyalin nama folder | Menyalinnya dan segala-galanya di sebelah kanannya |
| **Nama nota** | Menu fail — sama seperti yang diberikan oleh baris File Explorer | Menyalin nama | Menyalinnya dengan sambungannya |
| **Ruang kosong** | | Menyalin laluan dari folder bilik kebal anda, tanpa sambungan | Sama, dengannya |

Satu tekanan pada **nama bilik kebal** membuka apa yang boleh dilakukan
pada apa sahaja yang segmen itu namakan. Untuk **bilik kebal yang anda
berada di dalamnya**: buka dalam tetingkap baharu, urus bilik kebal,
salin tempat ia berada, salin IDnya, tunjukkan dalam pengurus fail anda.
Untuk **bilik kebal lain**, dicapai melalui senarai lokasi, perkara yang
sama tolak tetingkap baharu itu — yang akan membuka bilik kebal *ini*,
bukan itu — ditambah satu perkara yang hanya boleh ditawarkan oleh bilik
kebal yang anda tidak berada di dalamnya: **Buka bilik kebal ini**. Ia
dinamakan kepada Obsidian mengikut IDnya dan bukan mengikut nama foldernya,
memandangkan dua bilik kebal mungkin berkongsi satu. Untuk suatu tempat
yang bukan langsung bilik kebal — folder laman utama anda, pemacu yang
dilekapkan — tiada ID untuk disalin dan tiada apa untuk dibuka, dan menu
itu menyatakan sedemikian dengan tidak menawarkannya.

Ini bukan menu tiga-titik Obsidian sendiri, yang tergolong kepada tetingkap
permulaan dan tidak boleh dibuka dari dalam bilik kebal yang sedang
berjalan — entri-entri ini adalah entri yang sama dibina semula, dalam
kata-kata Obsidian sendiri, diambil daripada perintahnya supaya ia tiba
dalam bahasa anda. Tiga daripada entri menu itu dengan sengaja **tidak**
ada di sini: *tukar nama bilik kebal*, *alih bilik kebal* dan *buang
daripada senarai* semuanya bertindak ke atas folder bilik kebal itu
sendiri atau ke atas daftar bilik kebal Obsidian, dan melakukan itu
kepada bilik kebal yang anda sedang berdiri di dalamnya — dengan
fail-failnya terbuka dan pengawasnya sedang berjalan — adalah cara
sesebuah bilik kebal rosak. Buka pengurus bilik kebal (*Open another
vault*) dan lakukannya di sana, di mana bilik kebal itu ditutup.

Dua salinan pada **ruang kosong** ialah baris sebagaimana ia ditulis —
apa yang dikehendaki oleh pautan atau carian — dan yang pada **nama
bilik kebal** ialah laluan yang diketahui oleh sistem fail, iaitu apa
yang dikehendaki oleh apa sahaja di luar Obsidian. Setiap tekanan di
situ melebarkan kegunaan salinan itu: dua memberikan nama bilik kebal,
tiga tempat bilik kebal berada, empat tempat fail terbuka berada.
Obsidian membuat pembezaan yang sama dalam dua perintahnya sendiri,
*from vault folder* dan *from system root*; di sini yang menghadap ke
luar terletak pada segmen yang sendirinya berada di luar laluan.

Semua ini turut berfungsi di luar bilik kebal, pada sasaran yang sama.

Setiap salinan menyatakan sedemikian dalam suatu notis, kerana salinan tidak meninggalkan apa-apa di skrin untuk menunjukkan ia telah berlaku dan tekanan yang tersilap kira tidak sepatutnya kelihatan seperti tekanan yang berjaya.

## Pengubah suai: buka di tempat lain

Nama nota dan segmen folder berkelakuan seperti baris mereka dalam File Explorer.

| | Pada nama nota | Pada segmen folder |
| --- | --- | --- |
| Klik biasa | Sunting nama | Layari folder itu |
| <kbd>Ctrl</kbd> / klik-tengah | Buka nota dalam tab baharu | Hantar folder ke tab baharu |
| <kbd>Ctrl</kbd>+<kbd>Alt</kbd> | Pisahan (split) | Pisahan (split) |
| Seret | Nota, ke mana sahaja Obsidian membawa fail | Folder, begitu juga — termasuk bar tab |

Folder bukanlah sesuatu yang boleh dibuka oleh Obsidian, jadi menghantar satu ke tab melakukan salah satu daripada dua perkara: membuka nota foldernya, jika plugin nota folder sedang berjalan dan ada satu, atau membuka tab kosong yang bar laluannya sudah berdiri dalam folder itu — meninggalkan anda hanya nama untuk ditaip. Melepaskan segmen folder pada **bar tab** melakukan perkara yang sama, dalam tab baharu di mana anda melepaskannya — bar tab Obsidian sendiri hanya menerima fail, jadi folder yang diseret keluar dari File Explorer masih ditolak di situ.

## Tab: lengkapkan nama, kemudian laluan, kemudian lebarkan pemilihan

<kbd>Tab</kbd> melengkapkan seperti yang dilakukan oleh shell: **satu tekanan memanjangkan apa yang anda taip sejauh nama-nama dalam folder itu bersetuju, dan berhenti di mana ia berbeza.** Taip `Sk` di mana hanya `Sketches` bermula begitu dan perkataan itu pun selesai; taip `Al` di mana `Alpha-one`, `Alpha-two` dan `Alpine` semuanya bermula begitu dan anda dapat `Alp`, kerana aksara seterusnya adalah soalan yang hanya anda boleh jawab.

Tekan lagi tanpa menaip dan ia berjalan ke arah satu nama — baris yang diserlahkan oleh senarai, atau yang pertama — berhenti pada kekaburan seterusnya nama itu: `Alpha-`, kemudian `Alpha-one`. Senarai terbuka pada tempat anda sedia berada, jadi dalam folder anda sendiri tekanan pertama menuju ke nota yang sedang anda buka dan bukannya kepada apa sahaja yang disusun dahulu.

**Satu tekanan tidak pernah memilih antara nama-nama untuk anda.** <kbd>Tab</kbd> melangkah masuk ke dalam folder sebaik sahaja apa yang anda taip meninggalkan satu calon sahaja, atau sebaik sahaja anda telah menaip keseluruhan nama folder itu dan tiada *folder lain* yang memanjangkannya. Di mana ada satu — `Schemes` di sebelah `Schemes2026` — <kbd>Tab</kbd> terus melengkapkan ke arah nama yang lebih panjang; <kbd>Enter</kbd> dan senarai adalah gerak isyarat yang bermaksud *yang ini*.

Sebuah **fail** tidak pernah menghalang folder sebegitu. Folder di sebelah nota yang nama sendiri ialah nota folder, bukan cabang dalam laluan, dan <kbd>Tab</kbd> berjalan melalui folder — jadi `Projects` dengan `Projects.md` di sebelahnya dilangkah masuk seperti mana-mana yang lain.

Dua perkara kecil yang mengikut: apa yang mendarat dalam medan itu dieja mengikut cara folder itu mengejanya, jadi `sk` menjadi `Sketches`; dan hanya nama yang sedang ditaip yang digantikan, jadi laluan dengan lebih banyak di sebelah kanannya kekal.

Dengan nama yang ditawarkan semasa anda menaip, <kbd>Tab</kbd> **menulis tepat tawaran itu**: tawaran itu sentiasa apa yang akan ditulis oleh tekanan itu, dan garis bawah serta garis hijau pada senarai mengatakan perkara yang sama, jadi apa yang anda lihat selepas kursor adalah apa yang anda dapat. Di mana nama-nama itu berhenti bersetuju, itulah langkah ke arah yang pertama daripadanya — atau ke arah baris yang anda tuju dengan anak panah, yang diambil oleh <kbd>Tab</kbd> dan bukannya yang di sebelahnya — jadi gunakan anak panah ke yang anda mahu, atau taip melepasi percabangan itu, sebelum anda menekan. Hanya di mana tawaran itu meninggalkan *satu* nama sahaja barulah tekanan yang sama melangkah masuk ke dalamnya.

Sampai pada nama fail itu **adalah** anak tangga pertama — tiada tekanan dibazirkan untuk meletakkan kursor di hujung nama yang bakal ditandanya. Dari situ tekanan-tekanan berhenti bergerak sepanjang laluan dan mula melebarkan apa yang dipilih:

1. nama
2. nama berserta sambungannya
3. laluan dari folder bilik kebal anda
4. laluan dari root sistem
5. kembali ke hadapan laluan **seperti keadaannya sekarang** — berdiri di mana perjalanan bermula, segmen pertama ditandakan, sedia untuk dijalani semula

Klik keempat mencapai anak tangga keempat yang sama secara terus.

Melebarkan hanya sentiasa **melebarkan**. Nama yang sudah lengkap dalam medan itu — dilengkapkan oleh kekunci yang sama, atau dipilih daripada senarai — ditandakan keseluruhannya dan bukannya diambil balik sambungannya terlebih dahulu: anak tangga pertama adalah untuk nama yang baru sahaja *sampai* oleh perjalanan itu, di mana sambungan itu belum lagi menjadi subjek.

Tangga itu adalah tempat perjalanan **sampai**, bukan tempat ia bermula. Klik satu folder di tengah-tengah laluan dan medan itu terbuka pada segala-galanya di bawahnya dengan nama folder itu ditandakan; setiap <kbd>Tab</kbd> kemudian mengambil **satu** folder — menandakan yang seterusnya, mengekalkan bakinya laluan di belakangnya — dan hanya sebaik sahaja tiada apa selain nama fail yang tinggal barulah pelebaran itu bermula:

| tekanan | cip | medan | ditandakan |
| --- | --- | --- | --- |
| klik `a` | | `a/b/c/leaf.md` | `a` |
| <kbd>Tab</kbd> | `a` | `b/c/leaf.md` | `b` |
| <kbd>Tab</kbd> | `a › b` | `c/leaf.md` | `c` |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf` — anak tangga pertama |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf.md` |

**Nama yang sudah ditetapkan adalah tetap, tidak kira bagaimana anda menetapkannya.** Melengkapkannya dengan
<kbd>Tab</kbd>, mengesahkannya dengan `/`, dan memilihnya daripada senarai
semuanya meninggalkan baris itu di tempat yang sama memegang laluan yang sama, jadi tekanan selepas
gerak isyarat itu bermaksud perkara yang sama tidak kira jalan mana yang anda ambil. Memilih folder daripada
senarai dahulunya mengosongkan medan itu, membuang laluan yang mana mencapai
folder yang sama dengan <kbd>Tab</kbd> akan mengekalkannya.

**Laluan yang masih sedang anda tulis ikut serta secara keseluruhan.** Melangkah masuk ke dalam folder yang menjadi tempat bergantung bakinya laluan bukanlah satu dakwaan bahawa bakinya wujud — itulah cara laluan ditaip mendahului dirinya sendiri, dan folder-folder yang dinamakannya adalah folder yang akan dibuat oleh <kbd>Enter</kbd>. Jadi berjalan turun `Dokumente/plans/untitled.md` masuk ke `Dokumente` mengekalkan `plans/untitled.md` di hadapan anda, sama ada `plans` sudah ada atau belum. Perkara yang sama berlaku untuk laluan yang anda taip dari kosong: tiada satu pun daripadanya diwarisi dari mana-mana, jadi tiada satu pun daripadanya diambil.

**Menukar satu langkah dengan yang lain adalah cerita yang berbeza, dan kemudian laluan itu ikut serta hanya setakat mana ia benar-benar wujud di sana.** Tukar folder di tengah-tengah laluan dengan adik-beradiknya — klik `a`, taip nama lain, tekan <kbd>Tab</kbd> — dan segala-galanya di bawahnya ikut serta bersama anda, kerana laluan yang anda sedang lalui biasanya sebahagian besar daripada laluan yang anda mahu. Namun hanya apa yang wujud di sana yang terus kekal selepas peralihan itu, jadi medan dan senarai di sebelahnya tidak pernah berbeza pendapat: apa yang tinggal di hadapan anda adalah laluan yang anda benar-benar boleh lalui. Bermula dari `a/b/c/leaf.md`, dengan `a` diklik dan namanya ditandakan:

| apa yang anda tetapkan | cip | medan | ditandakan |
| --- | --- | --- | --- |
| `x`, yang langsung tiada `b` | `x` | | tiada apa yang ikut serta |
| `y`, yang mempunyai `b` tetapi tiada `c` di dalamnya | `y` | `b` | `b` |
| `z`, kembar `a` sepanjang jalan | `z` | `b/c/leaf.md` | `b` |

Folder yang ditinggalkan berdiri sendirian sebegitu masih merupakan folder untuk dilangkah masuk: tekanan selepasnya melangkah masuk, dan bukannya mula melebarkan pemilihan atas namanya.

Nama yang **tiada** apa-apa dalam folder itu sepadan dijawab secara berbeza, kerana tiada apa yang ditetapkan olehnya: tekanan itu menandakan apa yang anda taip, sedia untuk anda menaip di atasnya, dan bukannya menjawab dengan tempat lain.

Keseluruhannya adalah satu **gelung, dan tidak ada kosnya untuk mengelilinginya**: tekanan selepas anak tangga terakhir menyerahkan baris itu kembali ke hadapan laluan, folder-folder dan semuanya, sedia untuk berpusing lagi. Satu-satunya perkara yang pernah meninggalkan baris itu adalah awalan mutlak, pada tekanan yang berhenti memaparkannya.

Apa yang kembali ialah **laluan yang anda bina**, bukan yang anda mulakan. Bercabangkan perjalanan itu separuh jalan — pilih adik-beradik yang berbeza daripada senarai, lengkapkan ke arah nama lain — dan pusingan itu tutup pada tempat anda sebenarnya berada; empat anak tangga sebelumnya menerangkan laluan yang sama itu, dan yang ini dahulunya adalah anak tangga ganjil yang menerangkan masa lalu.

<kbd>Shift</kbd>+<kbd>Tab</kbd> menutup gelang yang sama secara songsang: di hadapan laluan, dengan tiada apa lagi untuk dikembalikan dan tiada lagi ke atas, tekanan seterusnya bergelung ke anak tangga yang **paling jauh** — laluan dari root sistem — dan terus menyempit dari situ. Kedua-dua arah tidak menemui jalan buntu.

Ia juga tidak membazirkan tekanan pada anak tangga yang telah pun ditunjukkannya. Di bawah anak tangga terakhir — nama tanpa sambungannya — tangga itu berakhir, dan *tekanan yang sama* meninggalkan folder itu: laluan dari root sistem, laluan dari bilik kebal anda, nama, nama tanpa sambungannya, kemudian folder, satu langkah setiap satu.

Tiada tekanan yang dibazirkan pada anak tangga yang tidak mengubah apa-apa juga: mengklik nama nota sudah pun memaparkannya tanpa sambungannya, iaitu apa yang ditunjukkan oleh anak tangga pertama, jadi dari situ <kbd>Tab</kbd> bermula pada yang kedua.

Setiap anak tangga mengubah apa yang *ada dalam* medan itu, bukan hanya apa yang diserlahkan — pemilihan mesti berada atas teks yang dinamakannya, atau <kbd>Enter</kbd> akan mengesahkan sesuatu yang lain daripada apa yang anda boleh lihat dipilih. Tangga itu tergolong dalam satu sesi penyuntingan. Klik ke tempat lain, atau taip apa sahaja, dan <kbd>Tab</kbd> seterusnya melengkapkan nama semula.

### <kbd>Shift</kbd>+<kbd>Tab</kbd>: jalan yang sama ke belakang

<kbd>Shift</kbd>+<kbd>Tab</kbd> mengambil balik satu langkah bagi setiap tekanan, mengikut urutan tekanan-tekanan itu dibuat: pemilihan menyempit satu anak tangga pada satu masa, setiap pelengkapan dikembalikan, dan setiap folder dilangkah keluar daripadanya — namanya kembali ke medan itu supaya anda boleh menyuntingnya dan bukannya menaip semula.

**Tiada apa yang dipadam dalam perjalanan pulang.** Satu pelengkapan dikembalikan dengan *menandakan* aksara-aksara yang ditambahnya, tepat sepertimana bergerak ke hadapan menandakan apa yang telah dilebarkannya: nama itu kekal di hadapan anda, dan setiap tekanan selanjutnya menandakan satu langkah lagi daripadanya:

| | medan | ditandakan |
| --- | --- | --- |
| berjalan masuk | `Alpha-one` | |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `ha-one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `Alpha-one` |

Menaip menggantikan bahagian yang ditandakan, sebagaimana ia berlaku di tempat lain. <kbd>Tab</kbd> meletakkan semula tepat apa yang dikembalikan oleh tanda itu, jadi berjalan dua langkah keluar dan dua langkah masuk semula mengembalikan anda ke tempat anda berada.

Sebaik sahaja keseluruhan nama itu ditandakan tiada apa lagi yang diletakkan di situ oleh satu tekanan, dan tekanan seterusnya pergi *ke atas laluan*: ia meninggalkan folder yang sedang anda berdiri, tepat seperti yang dilakukan oleh <kbd>Backspace</kbd> pada medan yang kosong. Itu juga tidak mengenakan kos — nama folder itu kembali ke dalam medan **di hadapan** apa sahaja yang ada di dalamnya, ditandakan, iaitu teks yang sama yang akan diberikan kepada anda dengan mengklik folder itu. Kembali adalah satu arah dan bukannya sejarah buat asal — tetapi menandakan nama itu terlebih dahulu bermakna satu tekanan tidak pernah kedua-duanya mengambil balik apa yang anda tulis dan membawa anda keluar dari folder tempat anda menulisnya.

Teks yang terbuka **sudah terpilih** — apa yang ditinggalkan oleh klik pada folder — adalah nama yang <kbd>Tab</kbd> bekerja seterusnya: ia dilengkapkan dan dilangkah masuk seperti apa jua yang lain, dan menaip menggantikannya. Hanya arahan fokus yang terbuka pada satu anak tangga tangga itu sendiri, kerana ia menunjukkan kepada anda keseluruhan laluan dan bukannya folder untuk dilalui.

## Menaip sesuatu yang bukan laluan

| Apa yang anda taip | Apa yang berlaku |
| --- | --- |
| `https://…` | Terbuka dalam tab baharu dalam **Web viewer** Obsidian, jika anda mengaktifkan plugin teras itu; jika tidak, dalam pelayar desktop anda |
| `obsidian://…` | Diserahkan kepada pengendali URI Obsidian sendiri |
| `file:///…` | Dinyahkod dan dibuka: sebagai nota sebenar jika ia berada di dalam bilik kebal anda, dalam pelayar jika tidak |
| `/home/you/a%20b.md` | Perkara yang sama, untuk laluan yang ditampal daripada pelayar atau pengurus fail |

Hanya skema yang jelas dikira — nota bernama `100%20` tetap sebuah nota. `/` yang tergolong dalam satu skema kekal literal dan bukannya turun ke dalam folder, jadi URL boleh ditaip dengan tangan dan bukan hanya ditampal.

## Satu arahan untuk papan kekunci

**Fokus pada bar laluan** membuka medan itu pada nama nota dan berjalan melaluinya dengan cara yang dilakukan oleh <kbd>F2</kbd> — nama, nama berserta sambungannya, laluan dari bilik kebal anda, laluan dari root sistem — dan tekanan selepas itu menutup medan itu dan meletakkan kursor kembali dalam nota. Ia tidak menukar nama: Enter menavigasi, seperti dalam mana-mana medan lain. Ia tiada kekunci sendiri secara lalai, kerana garis panduan Obsidian tidak menggalakkan plugin menuntut satu; baris **Hotkeys** di penghujung tetapan plugin ini membuka *Settings → Hotkeys* yang menunjukkan hanya arahan-arahannya, supaya anda boleh mengikatnya di situ.

## Navigasi tidak pernah menyentuh fail yang terbuka

Dalam mod lalai (navigasi) nota yang sedang terbuka **tidak pernah** ditukar namanya atau dipindahkan.

- Laluan yang membawa kepada fail sedia ada membukanya.
- Laluan yang belum wujud lagi hanya dicipta, berserta mana-mana folder induk yang tiada, dan dibuka. Setiap fail dan folder yang dibuat dengan cara ini dinyatakan dalam satu notis — folder baharu sebaliknya tidak kelihatan sehingga anda mencarinya — dan tong sampah Obsidian sendiri menjadikan yang tidak diingini itu satu ketukan kekunci untuk dibuat asal.
- **Di luar bilik kebal anda ia masih bertanya dahulu.** Di luar sana kesilapan taip yang sama menulis ke dalam folder sistem, di mana mahupun notis mahupun tong sampah Obsidian tidak banyak membantu.

## <kbd>Ctrl</kbd> — tab baharu, dan menyalin dan bukannya memindahkan

Nota yang **dicipta, dipindahkan atau disalin di dalam bilik kebal ditunjukkan di mana ia mendarat** dalam Peneroka fail, ditandakan sekejap dengan warna aksen Obsidian — pokok itu adalah tempat anda mencarinya kemudian, jadi ia diletakkan di hadapan anda dan bukannya ditinggalkan dalam folder yang mungkin tidak dibuka pun. Menggandakan juga menyatakannya: satu salinan meninggalkan yang asal di tempatnya dan membuka salinan itu dalam panel sendiri, yang tanpa sepatah kata pun mudah dibaca sebagai tiada apa yang berlaku.

Menahan <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> pada macOS) semasa memilih fail daripada senarai, atau semasa menekan <kbd>Enter</kbd> pada satu laluan, menghantar hasilnya ke **tab baharu** dan bukannya tab ini:

| | Biasa | Dengan <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Pilih atau taip fail sedia ada | Terbuka di sini | Terbuka dalam tab baharu |
| Taip laluan yang tidak wujud | Bertanya, kemudian terbuka di sini | Bertanya, kemudian terbuka dalam tab baharu |
| Sahkan laluan dalam mod tukar nama/alih | **Memindahkan** nota ke sana | **Menyalinnya** ke sana dan membuka salinan dalam tab baharu |

Pengubah suai dibaca dengan peraturan Obsidian sendiri, jadi ia berkelakuan tepat seperti pada pautan atau baris Peneroka fail — klik tengah juga bermaksud "tab baharu", <kbd>Ctrl</kbd>+<kbd>Alt</kbd> bermaksud belahan, dan <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> tetingkap baharu.

Menyalin enggan menulis ganti, tepat seperti yang dilakukan oleh memindahkan — termasuk ke atas laluan nota itu sendiri, di mana tiada apa yang munasabah untuk disalin. Di luar bilik kebal keengganan itu juga dinyatakan dengan jelas.

Kesemuanya berfungsi **dengan senarai terbuka** mahupun tanpanya: pada baris yang diserlahkan pengubah suai itu terpakai kepada baris itu, dan apabila tiada apa diserlahkan ia terpakai kepada apa yang anda taip.

## Meneroka di luar bilik kebal

**Ini mati secara lalai.** Hidupkan dahulu **Akses fail luaran** dalam tetapan — membaca dan menulis di luar bilik kebal ialah satu-satunya perkara yang dilakukan pemalam ini yang tidak dilakukan Obsidian sendiri, jadi ia dipilih untuk masuk dan bukannya keluar. Apabila mati, nama bilik kebal sekadar memaparkan bilik kebal anda dalam Peneroka fail, dan tiada apa di sini yang pernah melihat melepasinya.

Mengklik **nama bilik kebal** (atau ikon 🏠, apabila *Tunjukkan nama bilik kebal* mati) membuka senarai tempat dan bukannya kandungan. Medan yang dibukanya memuatkan **seluruh laluan yang anda berada di atasnya, ditulis penuh**, dengan tempat ia bermula terpilih — jadi memilih tempat lain, atau menaip di atas pilihan itu, menukar hanya bahagian hadapan itu dan membiarkan selebihnya laluan itu di hadapan anda. **Tekan nama itu kali kedua** — klik dua kali — dan tanda itu melebar meliputi keseluruhannya, itulah cara laluan mutlak diambil dalam satu gerak isyarat dan bukannya disapu dengan tangan. Ubah fikiran dan <kbd>Esc</kbd> mengembalikan baris itu seperti sedia kala.

Menaip di sini ditawarkan selebihnya nama tempat seperti di tempat lain, dan <kbd>Tab</kbd> **menetapkan tempat itu masuk** — tempat yang anda sedang tuju, atau tempat yang hanya boleh dimaksudkan oleh nama itu. Apabila beberapa tempat masih berkongsi apa yang anda taip, tekanan itu berhenti pada persimpangan, seperti di mana-mana sahaja. Menuding pada satu tempat memaparkan **laluan tempat itu sendiri**, semuanya terpilih, diikuti laluan nota anda hanya setakat mana ia benar-benar wujud di sana — itulah tepat apa yang akan anda dapati sekiranya anda memilihnya. Satu tempat bukanlah satu langkah di dalam laluan yang dipaparkan pada skrin tetapi tempat untuk mengira seluruh laluan darinya, jadi tiada apa daripada tempat anda berada kekal di hadapannya.

Tempat yang ditawarkan:

- **Bilik kebal anda yang lain**, dibaca daripada daftar Obsidian sendiri, yang paling baharu dibuka dahulu, setiap satu di bawah ikon bilik kebal Obsidian sendiri — ikon yang digunakan aplikasi itu untuk perintah bilik kebal. Bilik kebal yang sudah terbuka mendapat rumah: itulah tempat baris ini bermula secara lalai, bukan tempat untuk dituju.
- **Folder peribadi**, di bawah nama akaun anda sendiri, ditandai dengan `~`. Lucide tiada tilde, jadi yang satu ini dilukis oleh pemalam pada grid 24×24 Lucide sendiri dengan ketebalan garis yang sama — ikon yang tiada dalam set itu dan bukannya aksara teks yang duduk di antara ikon.
- **Akar sistem fail**, berlabel `root` — tidak diterjemahkan, kerana itulah namanya pada setiap sistem — dan bukannya `/`, yang akan terbaca sebagai langkah kosong di sebelah pemisah yang mengikutinya.
- **Pemacu terlekap**, dengan satu ikon setiap jenis apabila itu murah untuk ditentukan: perkongsian rangkaian, cakera optik, cakera liut dan media boleh tanggal mendapat ikon sendiri; selebihnya mendapat pemacu umum. Pada Windows pemacu dipaparkan sebagai `C:` dengan ikon umum — nama volum dan jenis yang tepat memerlukan WMI, yang sengaja tidak dilakukan.

Memilih bilik kebal lain **tidak menukar Obsidian kepadanya.** Segala yang anda buka kekal terbuka; laluan itu sekadar mula meneroka di sana. Itulah seluruh maksud meletakkannya pada bar laluan dan bukannya menyerahkannya kepada penukar bilik kebal di bar sisi.

Ia juga mendarat **sedekat mungkin dengan nota tempat anda berada seperti mana tempat itu sebenarnya membolehkan**.

- Jika tempat yang anda pilih *memuatkan* nota itu — folder peribadi, atau di mana sahaja bilik kebal anda berada — anda mendapat laluannya dari situ: pilih `~` dengan `takeaways.md` terbuka dan medan itu berbunyi `Vaults/your-vault/takeaways.md`.
- Jika ia tempat di sebelah tempat ini — bilik kebal lain, pemacu lain — laluan relatif yang sama dicuba, sedalam mana ia sebenarnya wujud. Bilik kebal sering hampir-salinan antara satu sama lain, dan sebab untuk melompat ke satu biasanya nota yang sama di sana.

Walau apa pun, baris itu kekal di tempat yang anda pilih dan **folder pertama laluan itu dibuka terpilih**, bentuk yang sama diberikan oleh mengklik satu folder: langkah yang paling mungkin anda ubah apabila anda melompat ke tempat lain ialah yang terdekat dengan atas, dan selebihnya laluan itu kekal kelihatan semasa anda mengubahnya. Tiada apa yang pernah diisi terlebih dahulu yang tidak benar-benar wujud pada cakera.

### Semasa anda di luar

Laluan itu **bermula pada lokasi yang anda pilih**, bukan pada susunan direktori mesin — dan begitu juga medan yang anda dapati dengan mengklik ruang kosong atau menekan kekunci fokus: ia memuatkan laluan dari tempat itu, bukan laluan mutlak mesin, dengan jejaknya diruntuhkan kepada tempat itu sendiri tepat seperti ia runtuh kepada akar bilik kebal di dalam — pilih `Archive` dan baris itu berbunyi `Archive / notes / …`, bukan `/home/you/Vaults/Archive/notes/…`. Segmen hadapan itu membawa ikon untuk apa ia (bilik kebal, folder peribadi, pemacu), dan <kbd>Backspace</kbd> berhenti di situ dan bukannya terus melangkah naik ke selebihnya sistem fail. Dengan *Tunjukkan nama bilik kebal* mati, segmen itu ialah ikon sahaja — tetapan itu adalah mengenai segmen pembuka baris itu tidak kira bilik kebal mana yang dinamakannya, bukan hanya milik anda sendiri.

Bar laluan **dibingkai dengan warna ralat** — cincin yang sama yang dilukis oleh mod tukar nama — selagi ia menunjuk ke luar bilik kebal anda. Ia menandakan keadaan yang berterusan, bukan satu detik: selagi ia ada, tiada satu pun pengendalian Obsidian sendiri terpakai kepada apa yang dipaparkan baris itu, dan penulisan terkunci sehingga anda berkata sebaliknya.

Selain itu penerokaan berfungsi seperti di dalam: kepingan, pemisah, menaip, pelengkapan automatik, <kbd>Backspace</kbd> untuk melangkah keluar. Peraturan keterlihatan yang sama juga terpakai, jadi sambungan yang tidak disokong masih memerlukan *Tunjuk semua jenis fail* milik Obsidian dan fail titik masih memerlukan tetapan pemalam ini.

**Klik kanan turut berfungsi di luar sana**, walaupun ia menu yang berbeza: pengendali Peneroka fail sendiri memerlukan fail yang diketahui oleh bilik kebal, jadi entri di luar dibina daripada laluan itu sebaliknya. Ia menawarkan pembukaan (di sini, di sebelah kanan, dalam tetingkap baharu, atau dalam aplikasi lalai desktop anda), *Salin laluan*, *Tunjukkan dalam peneroka sistem*, dan — sebaik sahaja mangga terbuka — *Nota baharu*, *Folder baharu*, *Buat salinan*, *Tukar nama…* dan *Padam*. **Menyeret** masih memerlukan fail bilik kebal dan kekal tidak tersedia.

Menu yang sama terdapat pada fail terbuka dalam pemapar, melalui klik kanan atau daripada tiga titik panel itu sendiri, dan ia bertanyakan mangga dalam bar tajuk paparan itu. Ia tidak bertanya apa-apa lagi: sama ada fail itu sedang dipaparkan atau ditunjukkan sebagai sumber tidak memberi kesan kepada sama ada ia boleh dipadam, dan imej atau PDF — yang langsung tiada paparan sumber — boleh dipadam sama seperti nota. *Padam* bermaksud tong sampah desktop, jadi ia boleh dibatalkan dari sana; sistem yang tiada tong sampah melaporkan hal itu dan bukannya memusnahkan fail itu.

Memadam di luar bilik kebal memindahkan fail ke **tong sampah sistem** anda — Recycle Bin pada Windows, Trash pada macOS — bukan sekali-kali penyahpautan. Di luar sini tiada tong sampah Obsidian untuk dipulihkan, jadi padaman yang tidak boleh dibatalkan langsung tidak ditawarkan: apabila sesuatu platform tiada tong sampah, percubaan itu melaporkan kegagalan itu sebaliknya.

### Menulis di luar bilik kebal

Segala yang menulis **terkunci secara lalai**. Selagi baris itu menunjuk ke luar bilik kebal anda, tempat suis tukar nama dalam bar tajuk diambil alih oleh **mangga merah** — warna yang sama seperti cincin di sekeliling baris itu, dan atas sebab yang sama: ia menandakan penolakan. Kedua-duanya satu kawalan dalam satu slot, jadi tidak pernah timbul soalan yang mana satu mengawal apa.

Tiga tekanan, dalam satu kitaran:

| Tekanan | Apa yang anda dapat |
| --- | --- |
| Mangga merah | Menulis di sini dibenarkan. Mangga digantikan oleh suis tukar nama/alih |
| Suis itu | Mod tukar nama/alih, tepat seperti di dalam bilik kebal |
| Suis itu sekali lagi | Mod itu berakhir dan mangga tertutup semula — kebenaran itu tidak bertahan lebih lama daripada perkara ia dibuka untuknya |

**Kekunci tukar nama juga bertanyakan mangga itu.** Di luar bilik kebal anda, satu tekanan padanya mengelipkan mangga terbuka dan tertutup dan bukannya membuka mod yang setiap komit akan tolak: penolakan itu tiba sebelum kerja itu dan bukannya selepasnya. Tekan mangga itu, atau tekan kekunci tukar nama sekali lagi dalam masa setengah saat — tekanan kedua memberikan tepat apa yang diberikan oleh butang itu, untuk lokasi ini, dan membuka mod tukar nama bersamanya.

Di dalam bilik kebal anda tiada mangga: tiada apa untuk dibuka kuncinya, dan suis itu sekadar mengambil slot itu.

Kebenaran itu diberikan **kepada satu lokasi, bukan kepada satu detik**: ia bertahan melepasi segala yang anda akan lakukan semasa bekerja di satu tempat — menyelesaikan satu pemindahan, mengklik keluar daripada input itu, membuka satu fail — dan berakhir apabila anda memilih bilik kebal, pemacu atau akar yang berbeza daripada senarai itu, apabila baris itu kembali kepada fail bilik kebal, atau pada tekanan ketiga itu. Jadi satu siri pemindahan dalam satu folder memerlukan satu tekanan, bukan satu bagi setiap fail.

Dengan mangga terbuka, bar laluan berkelakuan di luar sana seperti di dalam:

| Gerak isyarat | Hasil |
| --- | --- |
| Taip nama yang tidak wujud, <kbd>Enter</kbd> | Soalan "ciptakannya?" yang sama seperti di dalam; folder induk yang tiada turut dicipta. Nama tanpa sambungan menjadi `.md`, tepat seperti di dalam |
| Mod tukar nama/alih, taip nama baharu | Menukar nama fail yang sedang dipaparkan baris itu. Nama tanpa sambungan mengekalkan sambungan fail itu sendiri — di luar sini satu folder memuatkan setiap jenis fail, dan penukaran nama tidak sepatutnya diam-diam mengubah `.png` menjadi `.md` |
| Mod tukar nama/alih, teroka di tempat lain, pilih **kekalkan nama ini** | Memindahkannya ke sana dengan nama yang sudah dimilikinya |
| Tahan <kbd>Ctrl</kbd> pada mana-mana | Menyalin dan bukannya memindahkan, dan membuka salinan dalam tab baharu |

Dalam keadaan terkunci, semua itu melaporkan apa yang menghalangnya dan bukannya berlaku. Tiada apa yang pernah ditimpa dalam kedua-dua keadaan: sasaran yang sudah wujud ditolak, dan penolakan itu ialah penolakan sistem fail sendiri (`COPYFILE_EXCL`, penciptaan eksklusif) dan bukannya semakan yang boleh kalah dalam perlumbaan. Pemindahan merentas sistem fail — daripada pemacu USB, daripada perkongsian rangkaian — berbalik kepada salin-kemudian-padam, dan yang asal hanya dibuang setelah salinannya mendarat.

**Memindahkan nota *keluar* daripada bilik kebal anda bertanya dahulu.** `fileManager` tidak boleh mengikuti fail merentasi sempadan itu: setiap pautan yang menuju kepada nota itu berhenti menyelesai, tiada apa mengemas kininya, dan nota itu meninggalkan indeks bilik kebal. Jadi pemindahan itu ditawarkan sebagai keputusan dan bukannya ditolak atau dilakukan secara senyap — satu dialog menyatakan apa kosnya dan berapa banyak nota memautkan kepada nota yang anda pindahkan. Sahkan dan ia benar-benar bergerak: disalin keluar, kemudian dibuang daripada bilik kebal melalui padaman Obsidian sendiri, jadi ia boleh dipulihkan tepat sepertimana nota yang dipadam boleh dipulihkan, dan kegagalan pada mana-mana langkah itu meninggalkan nota di tempat asalnya. Menahan <kbd>Ctrl</kbd> masih menyalinnya keluar sebaliknya, yang tiada langsung masalah itu. Pergi ke arah yang lain — membawa fail luaran *masuk* ke dalam bilik kebal — belum disambungkan lagi.

### Membuka fail luaran

Meneroka sistem fail boleh berjalan kembali **ke dalam bilik kebal yang sedang anda buka** — daripada akar, daripada folder peribadi, dari mana sahaja bilik kebal anda berada. Fail yang dicapai dengan cara itu ialah nota biasa, jadi ia dibuka sebagai satu: penyunting sebenar, pautan dan pautan balik, dan baris itu terus kembali kepada laluan berakar bilik kebal. Hanya fail yang tiada paparan untuknya oleh Obsidian kekal dalam pratonton, kerana di luar sana pratonton ialah jawapan yang lebih baik. Apabila pratonton memaparkan nota sedemikian walau apa pun — ruang kerja yang dibuka semula, umpamanya — baris atasnya menawarkan **Buka dalam *(bilik kebal)***, yang merupakan tawaran yang sama seperti yang dibuat secara manual.

Penyunting Obsidian hanya berfungsi pada fail di dalam bilik kebal, jadi fail luaran **tidak boleh** dibuka sebagai nota sebenar dengan pautan, pautan balik dan selebihnya — itu had aplikasi, bukan had pemalam ini. Memilih satu sebaliknya membuka **pratonton**, baca sahaja sehingga anda berkata sebaliknya:

| Jenis | Dipaparkan sebagai |
| --- | --- |
| `.md`, `.markdown` | Markdown yang dipaparkan |
| `.html`, `.htm`, `.xhtml` | Halaman yang dipaparkan |
| Imej, audio, video, PDF | Pemain/pemapar asli |
| Mana-mana fail **teks** lain (`.json`, `.css`, `.log`, `.txt`, …) | Teks biasa mentah |
| Format binari tanpa pemapar (`.zip`, `.exe`, …) | Diserahkan kepada *Buka dalam aplikasi lalai* |

Pemapar mempunyai dua bacaan bagi sesebuah fail, dan kerana kedua-duanya saling menolak, hanya yang anda akan **tukar kepadanya** dipaparkan:

| | Apa yang ia lakukan | Lalai untuk |
| --- | --- | --- |
| **Lihat sebagai Markdown** | Memaparkan fail sebagai nota, baca sahaja | `.md`, `.markdown` |
| **Papar sebagai halaman** | Memaparkan fail sebagai halaman ia sebenarnya, baca sahaja | `.html`, `.htm`, `.xhtml` |
| **Sunting sebagai teks** | Sumbernya, boleh disunting | selebihnya |

Di luar bilik kebal, **Sunting sebagai teks** juga merupakan tekanan yang mengangkat baca sahaja — mod dan kebenarannya satu gerak isyarat dan bukannya dua butang untuk difikirkan. Ia diwarnakan merah **setiap kali menekannya akan mengangkat baca sahaja**, sama ada anda menyiapkan penyuntingan di tempatnya atau datang terus daripada paparan yang dipaparkan; di dalam bilik kebal tiada apa untuk dibuka, jadi ia kekal biasa. **Lihat sebagai Markdown** mendapat sapuan aksen nipis — rona yang sama yang diberi Obsidian kepada teks terpilih — menandakannya sebagai jalan kembali dan bukannya seruan bertindak.

Kerana butang itu menjejaki *penyuntingan* dan bukannya mod mentahnya, fail yang duduk baca sahaja dalam paparan teks masih menawarkan **Sunting sebagai teks**: itulah tekanan yang menyiapkannya. Fail yang tidak akan pernah boleh ditaip — dipangkas, atau tidak boleh dibaca — sebaliknya berbunyi **Lihat sebagai teks**, kerana hanya itu yang boleh diberikan tekanan itu.

Lalainya ialah cara yang berguna dan bukannya cara harfiah: `#` dalam skrip shell ialah komen, bukan tajuk, jadi memaparkan `.log` sebagai Markdown akan menelannya secara senyap. Mana-mana lalai boleh ditindih bagi setiap fail, dan pilihannya masuk ke dalam sejarah panel, jadi undur/maju dan ruang kerja yang dibuka semula mengekalkannya — banyak nota hidup dalam fail `.txt`, dan banyak fail `.md` lebih mudah dibaca sebagai sumber.

#### Apa yang dibenarkan dilakukan oleh halaman HTML

Tiada apa. Halaman itu dipaparkan dalam bingkai dengan **setiap kebenaran ditahan** — tiada skrip, tiada borang, tiada navigasi, tiada asal usulnya sendiri — dan satu polisi kandungan yang tidak membenarkan sebarang rangkaian langsung. Itu bukan langkah berjaga-jaga demi berjaga-jaga: halaman tempatan yang dimuatkan dengan cara biasa akan berkongsi asal usul tetingkap ini, dan tetingkap ini ialah Obsidian, jadi skrip dalam fail HTML yang dimuat turun akan berjalan di dalam aplikasi anda dengan capaian aplikasi anda.

Apa yang dikorbankan ialah apa sahaja yang *dilakukan* oleh halaman itu; apa yang dikekalkan ialah segala yang *menjadi* halaman itu. Helaian gaya dan imej yang berada di sebelah fail itu dibaca masuk dan dibawa ke dalam bingkai, jadi halaman yang disimpan masih kelihatan seperti dirinya sendiri. Rujukan yang menuju keluar daripada folder halaman itu sendiri, dan rujukan ke suatu tempat di web, dibiarkan tepat seperti ditulis dan sekadar tidak dimuatkan — fail tempatan tidak boleh diam-diam memberitahu pelayan bahawa anda membukanya.

Skrip **dibuang** dan bukan sekadar disekat, supaya halaman yang anda lihat dan sumber yang boleh anda tukar kepadanya berbeza dengan cara yang dinyatakan dan bukannya dengan apa sahaja yang bingkai itu senyap-senyap enggan jalankan. Pautan dalam halaman itu tidak melakukan apa-apa. Apabila anda mahukan perkara sebenar — skrip, rangkaian dan segalanya — *Buka dalam aplikasi lalai* menyerahkannya kepada pelayar anda, yang merupakan alat yang betul untuk itu.

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

- **Buka dalam *(bilik kebal)*** — dipaparkan apabila fail itu tergolong kepada salah satu bilik kebal anda yang lain. Menyerahkannya kepada pengendali URI Obsidian sendiri, yang membuka tetingkap bilik kebal itu dengan nota itu di dalamnya, sebagai nota sebenar yang boleh disunting. Tetingkap ini kekal tepat seperti sedia kala; tiada apa bertukar di bawah anda.
- **Lihat sebagai Markdown** / **Papar sebagai halaman** / **Sunting sebagai teks** — dua bacaan yang dimiliki fail ini; yang terakhir juga mengangkat baca sahaja di luar bilik kebal.
- **Buka dalam aplikasi lalai** — menyerahkan fail itu kepada aplikasi lalai desktop anda, termasuk format binari yang pemapar ini tidak boleh paparkan. Diungkapkan tepat seperti entri Obsidian sendiri untuk tindakan yang sama, kerana ia tindakan yang sama.

Pemapar juga menjawab **klik kanan**: di dalam penyunting teks dengan *Potong* / *Salin* / *Tampal* / *Pilih semua*, dan di mana-mana sahaja lain dengan menu fail itu sendiri. Menu tiga titik Obsidian dalam bar tajuk turut membawa menu itu — di luar bilik kebal ia jika tidak akan menawarkan tiada apa selain *Pisah ke kanan* dan *Pisah ke bawah*.

Tiada apa di luar bilik kebal anda ditulis melainkan anda menekan *Sunting sebagai teks* dahulu. Lihat bahagian [Di luar bilik kebal](README.ms.md#di-luar-bilik-kebal) dalam README untuk pendedahan penuh.

## Menjatuhkan fail ke atas folder dalam laluan

Setiap folder dalam baris ialah sasaran jatuhan, jadi **nota yang diseret ke
salah satunya berpindah ke situ** — laluan terpendek ke sana ialah antara nota
dan mana-mana folder di atasnya, kerana destinasi sudah pun berada pada skrin.
Seret dari Penerokaan Fail, dari senarai, dari nama nota itu sendiri pada bar
tajuk, atau dari mana-mana tempat lain dalam Obsidian yang menghasilkan fail:
ia adalah seretan aplikasi itu sendiri, jadi label hover, kursor dan sorotan
adalah yang dilukis oleh Penerokaan Fail.

**Nama bilik kebal juga menerima jatuhan**, kerana ia adalah folder di bahagian
atas baris — satu-satunya gerak isyarat yang meletakkan nota di akar bilik
kebal dari sini.

**Keseluruhan pilihan boleh diseret sekali gus**, dan ia berpindah sebagai
satu: jika mana-mana antaranya tidak dapat diambil, jatuhan itu ditolak dan
bukannya memindahkan sebahagian sambil senyap-senyap melangkau selebihnya.

Pautan mengikuti nota, sama seperti apabila ia dipindahkan dari Penerokaan
Fail atau dengan menaip laluan.

Folder yang **tidak dapat menerima jatuhan itu tidak menawarkan apa-apa dari
dirinya** — tiada label *Move into*, tiada sorotan pada folder itu — dan
bukannya menawarkan sesuatu yang kemudian akan gagal; jawapan Obsidian sendiri
untuk bar tajuk, *Open in this tab*, adalah apa yang berdiri di situ
sebaliknya. Tiga kes:

- folder yang fail itu **sudah berada di dalamnya**, kerana ia sudah pun di
  situ;
- folder yang dijatuhkan **ke dalam dirinya sendiri atau ke dalam
  keturunannya sendiri**, yang akan menyebabkan ia tiada tempat asal untuk
  datang darinya;
- pilihan yang mengandungi **satu folder dan sesuatu di dalamnya**, kerana
  memindahkan folder itu membawa anak folder itu bersamanya.

Folder yang sudah mempunyai **fail dengan nama yang sama** menerima jatuhan
itu dan bertanya apa yang perlu dilakukan tentang yang menghalang jalan, dengan
dialog yang sama seperti nama yang telah diambil ditaip atau dipilih — lihat
[Nama yang telah diambil](#nama-yang-telah-diambil). Tiada apa di sini yang
menulis ganti.

Hanya folder **di dalam bilik kebal anda** menerima jatuhan. Semasa baris
menunjuk ke luar bilik kebal, segmennya menolak, kerana membawa nota keluar
dari bilik kebal memutuskan setiap pautan kepadanya — keputusan yang wajar
disoal dan bukan sekadar gerak isyarat. Cara untuk melakukannya dengan sengaja
tetap dengan menaip laluan, yang bertanya dahulu dan memberitahu anda berapa
banyak nota yang akan terjejas.

## Menjatuhkan teks atau fail untuk menuliskannya

Sasaran yang sama menerima **kandungan** juga selain fail, dan kedua-duanya
dibezakan mengikut apa yang anda seret dan bukan di mana anda melepaskannya.

**Ke atas nota yang sudah dinamakan oleh baris** — nama nota itu sendiri, atau
pemisah yang folder terkandungnya mempunyai nota folder — apa yang anda
jatuhkan diletakkan di hujungnya, selepas satu baris kosong. Ia bertanya
dahulu, kerana ini menulis ke dalam fail yang sudah pun ada dan seretan adalah
gerak isyarat yang boleh dilakukan secara tidak sengaja oleh tangan yang
kurang stabil. Teks dari editor, fail dari desktop anda dan nota yang diseret
keluar dari bilik kebal ini semuanya berfungsi; fail dibaca sebagai teks, dan
fail binari ditolak dan bukannya ditampal sebagai sekrin penuh kekacauan.

**Ke atas suatu tempat — nama bilik kebal atau folder** — belum ada apa yang
ditulis, kerana belum ada apa yang dinamakan. Medan itu terbuka di situ
memegang apa yang anda jatuhkan, dan nama yang anda taip adalah yang
mengesahkannya: nota baharu *dicipta* memegang teks itu, dan yang sudah wujud
ditanya persis seperti di atas. <kbd>Esc</kbd>, atau klik di tempat lain,
melepaskan keseluruhan tindakan itu.

**Baris berbunyi biru** semasa seretan yang akan mendarat sebagai kandungan
berada di atasnya, dan kekal biru semasa medan itu sedang memegang satu —
biru yang sama, mengatakan perkara yang sama: apa yang berlaku seterusnya
adalah tentang teks yang anda bawa. Fail yang diseret keluar dari bilik kebal
anda sendiri ke atas folder tetap bermaksud *pindahkan ke sana*, mengekalkan
sorotan Obsidian sendiri, dan tidak pernah berbunyi biru; gerak isyarat itu
sudah ada terlebih dahulu dan kandungan berundur daripadanya.

## Apabila laluan lebih panjang daripada anak tetingkap

Nama-nama **dipendekkan dan bukan diperah**, mengikut urutan apa yang paling
kurang diperlukan:

1. **Nama bilik kebal dahulu**, sehingga kepada ikonnya sahaja. Anda tahu
   bilik kebal mana yang anda berada di dalamnya; ikon itu terus menunjukkan
   di mana laluan bermula.
2. **Kemudian sambungan fail**, jika anda menghidupkannya — tiga aksara yang
   sama pada hampir setiap fail dalam bilik kebal. Ia dibiarkan utuh dan
   bukannya dipendekkan: separuh sambungan tidak mengatakan apa-apa yang
   tiada sambungan langsung tidak katakan.
3. **Kemudian folder-folder, yang paling panjang dahulu.** Nama folder yang
   paling panjang dipendekkan kepada panjang folder terpanjang seterusnya,
   kemudian kedua-duanya bersama, dan seterusnya, setiap satu berhenti pada
   lantainya sendiri — jadi satu folder yang sangat panjang menyerahkan
   segala kelebihannya berbanding yang lain sebelum nama pendek di sebelahnya
   kehilangan satu huruf.
4. **Nama fail itu sendiri terakhir**, dan ia mengekalkan lebih kurang enam
   aksara. Itulah tujuan bar tajuk itu wujud.

Ruang diberikan **secara berterusan**, dalam pecahan piksel dan bukan satu
huruf pada satu masa: nama yang mengalah dipotong pada piksel dan pudar di
bawah `…`-nya, jadi anak tetingkap yang diseret perlahan-lahan menyempitkan
baris dengan lancar dan tiada apa selepasnya bergerak secara melangkah. Sebelum
mana-mana huruf pergi, ruang udara di sekeliling pemisah dibelanjakan
dahulu — itu sahaja jarak baris itu dan ia tidak memerlukan pengorbanan
maklumat langsung — dan nama yang dipendekkan berakhir tepat di mana pemisah
bermula, tanpa jalur kotak kosong di antara kedua-duanya.

**Medan mengambil apa yang dipegangnya.** Membuka satu untuk menaip laluan
tidak menghimpit folder di sebelahnya keluar dari jalan: ia selebar teks di
dalamnya dan membesar semasa anda menaip, jadi laluan itu mengekalkan segala
yang medan itu tidak perlukan. Hanya apabila tidak cukup ruang untuk
kedua-duanya barulah baris itu tatal, dan pada masa itu medan itulah satu
perkara yang tidak pernah mengalah — ia adalah teks yang sedang disunting,
bukan nama yang sedang disesuaikan.

Tiada apa yang dipotong melebihi apa yang membezakannya daripada
jirannya: `Projects2025` dan `Projects2026` dalam folder yang sama diturunkan
kepada `…025` dan `…026` dan bukannya kepada awalan yang akan menjadikan
kedua-duanya perkataan yang sama, manakala `Reports` di sebelah `Receipts`
boleh diturunkan kepada `Rep…`. Selain itu setiap nama mengekalkan **lebar
yang boleh dibaca** — lebih kurang nilai empat huruf untuk folder dan enam
untuk nama fail, diukur dalam fon yang baris itu sebenarnya dilukis dengannya
dan bukan dikira. Empat huruf sempit dan empat huruf lebar bukanlah jumlah
nama yang sama, jadi `lilliliillil` dibenarkan mengekalkan lebih banyak
dirinya berbanding `WWMMWWMMWWMM`, dan apa yang tertinggal pada skrin adalah
saiz yang sama sama ada satu cara pun. Nama pendek dibiarkan sepenuhnya —
nama yang dikisar kepada `A…` adalah unik namun tetap tidak boleh dibaca.
**Ruang tidak dikira ke dalamnya.** Enam aksara untuk menyatakan fail mana
ini ialah enam aksara yang berbaloi dibaca, jadi ruang kosong di antaranya
turut serta secara percuma dan satu tidak pernah dibiarkan tercalit pada
`…`, tempat ia tidak kelihatan pun.

**Nama dipotong di mana-mana jirannya bersetuju dengannya, dan di tengah
apabila mereka tidak bersetuju di mana-mana.** Dua folder bernama
`aaaa-common-one` dan `aaaa-common-two` berkongsi segalanya kecuali tiga
aksara terakhirnya, jadi memotong ekor mengekalkan separuh yang tidak
mengatakan apa-apa: keduanya diturunkan kepada `…one` dan `…two`
sebaliknya, yang lebih pendek *dan* membezakan mereka. Di mana persetujuan
berada di hujung — `alpha-draft` di sebelah `beta-draft` — hujunglah yang
pergi; di mana ia berada di kedua-dua hujung, yang kekal ialah bahagian
tengah. Nama yang tiada jiran rapat kehilangan bahagian tengahnya, kerana
nama bermula dengan apa dirinya dan berakhir dengan mana satu ia — bagi
fail, sambungannya: `annual…2026.md`.

Kesamaan yang singkat tidak dikira. `parallel structures` kebetulan berakhir
dengan dua huruf yang sama seperti `Schemes` di sebelahnya, dan itu bukan
sebab untuk mengekalkan kedua-duanya utuh — tiga aksara dari hadapan sudah
pun membezakan mereka.

Tiada apa yang dibalut ke baris kedua. Apabila nama sejujur mungkin yang
paling pendek pun tidak muat, baris itu **tatal ke sisi**, terletak di
hujung tempat fail itu berada — pada ketika itu tiada lagi apa yang boleh
dimampatkan, dan memotong lebih lanjut akan menyembunyikan dan bukannya
memendekkan. Roda menatalnya di mana sahaja penuding berada di atas baris
itu, dan kedua-dua hujung boleh dicapai: semasa ia tatal, baris itu
menjajarkan diri kepada permulaannya, apa sahaja tetapan penjajaran
mengatakan, kerana kandungan yang dipusatkan dalam kotak yang telah
dilebihinya tumpah keluar di kiri dan juga di kanan — dan separuh itu
langsung tidak dapat ditatal ke.

**Tunjuk pada nama yang dipendekkan dan ia kembali sepenuhnya**, selagi anda
menunjuk kepadanya, ditatal ke tepi kiri supaya segala yang kembali berada
pada skrin. **Klik satu dan ia kekal**: medan itu terbuka menunjukkan folder
yang anda klik, apa yang ditawarkan selepasnya dan apa sahaja yang anda
taip, dan ia terus menunjukkannya sebaik sahaja penuding telah beralih
pergi. Nama-nama kekal di tempatnya semasa anda menatal baris atau menaip
ke dalamnya — satu yang terbuka secara tiba-tiba di bawah gerak isyarat
yang bertujuan membaca baris akan menggerakkan segala selepasnya dari bawah
anda.

**Segmen pembuka sentiasa membawa tooltip, dan ia adalah laluan mutlak** —
`/home/you/Vaults/Notes`, atau di mana sahaja baris itu bermula. Itulah satu
perkara tentang baris yang tiada apa pada skrin dapat katakan: nama
memberitahu anda *bilik kebal mana*, tidak pernah di mana ia berada. Ia ada
di situ sama ada apa-apa perlu dipendekkan atau tidak.

Dengan **Tunjukkan nama bilik kebal** dimatikan, nama itu tidak dibuang,
hanya ditahan pada sifar — jadi menunjuk pada ikon mengembalikannya persis
seperti menunjuk pada nama yang baris terpaksa pendekkan.

**Tunjukkan sambungan fail** meletakkan semula sambungan pada nama fail
baris itu. Dimatikan — lalai — baris menamakan nota mengikut cara Obsidian
memberi tajuk kepadanya, tanpa `.md` yang hampir setiap fail dalam bilik
kebal kongsikan; dihidupkan, ia menamakannya mengikut cara sistem fail
melakukannya, yang mana anda perlukan apabila bilik kebal mengandungi lebih
daripada nota. Ia juga perkara kedua yang baris itu serahkan apabila ruang
berkurangan, sejurus selepas nama bilik kebal.
Tooltip memberi anda selebihnya: bukan sahaja nama tetapi segala yang baris
tunjukkan di bawahnya, sebagai `…/name/folder/note.md`, jadi satu hover
menjawab kedua-dua "apakah ini" dan "apa di bawahnya". Ikon bilik kebal
menamakan bilik kebalnya dengan cara yang sama, apabila nama itu dimatikan
atau telah dihimpit hilang.

## Dua warna amaran

| | Bila | Apakah maksudnya |
| --- | --- | --- |
| Bulatan **merah** pada bar laluan | Baris menunjuk ke luar bilik kebal anda | Obsidian tidak dapat membuka apa yang ada di situ sebagai nota, dan tiada apa di luar sana ditulis sehingga anda membuka mangga itu. |
| Bulatan **oren** pada bar laluan | Fail itu adalah jenis teks yang Obsidian tiada paparan untuknya | Satu amaran. Obsidian akan menyerahkannya kepada aplikasi lalai desktop anda; pemalam menunjukkannya sebaliknya. |
| Teks **merah** dalam medan terbuka | Belum ada apa-apa pada laluan itu | <kbd>Enter</kbd> akan mencipta dan bukannya membukanya. Bukan begitu amaran tetapi lebih kepada pernyataan apa yang ketukan kekunci seterusnya lakukan — lihat [Menaip laluan](#menaip-laluan). |
| Mangga **merah** menggantikan togol tukar nama | Baris menunjuk ke luar bilik kebal anda dan menulis di situ masih dikunci | Merah yang sama seperti bulatan itu, atas sebab yang sama: ia menandakan penolakan. Menekannya membenarkan penulisan di sini dan menyerahkan slot itu semula kepada togol — lihat [Menulis di luar bilik kebal](#menulis-di-luar-bilik-kebal). |

**Kedua-dua bulatan adalah bebas, dan kedua-duanya boleh wujud serentak** —
`.json` luaran adalah di luar bilik kebal anda *dan* jenis yang Obsidian
tiada editor untuknya. Dalam pemapar ia muncul sebagai baris berasingan,
setiap satu hanya menyatakan faktanya sendiri. Pada bar laluan, merah menang
di mana kedua-duanya berkenaan, kerana dua bulatan hanya akan menjadi
hingar. *Teks* merah adalah perkara ketiga yang berlainan sama sekali: ia
tentang apa yang sedang ditaip, bukan tentang di mana baris itu menunjuk,
jadi ia boleh muncul di dalam mana-mana bulatan atau tiada satu pun.

Tahap oren sengaja dijadikan sempit. Jenis yang berdaftar (Markdown, canvas,
imej, PDF, audio, video) dikendalikan dengan betul dan tidak diberi apa-apa.
Fail binari juga tidak diberi apa-apa — anda tidak akan menyunting `.zip`
menjadi huru-hara secara tidak sengaja. Apa yang tinggal ialah tepat bahaya
itu: `.json`, `.css` atau `.log` yang **Show all file types** telah
jadikan kelihatan. Senarai itu sengaja dibuat lebih luas: di situ, segala
yang bukan nota adalah oren — lihat [bagaimana entri senarai
diwarnakan](#bagaimana-entri-senarai-diwarnakan).

## Mod alih/tukar nama

Butang pensel di hujung paling kanan bar tajuk — di sebelah butang mod
paparan, saiz yang sama seperti butang asli — menogol mod alih/tukar nama.
Di luar bilik kebal anda, mangga merah berdiri di tempatnya sehingga anda
menekannya; lihat [Menulis di luar bilik kebal](#menulis-di-luar-bilik-kebal).
Baris bar tajuk kemudian dibingkai dalam warna aksen, persis seperti
menukar nama dalam Penerokaan Fail. Klik dan ketukan kekunci yang sama kini
mengesahkan alihan atau penukaran nama melalui `fileManager.renameFile`
Obsidian, jadi semua pautan kepada nota itu mengikutinya.

Semasa menukar nama:

- Nama fail semasa disematkan ke dalam senarai setiap folder, jadi
  memindahkan nota tanpa menukar namanya hanyalah satu klik.
- Nama yang sudah diambil dalam folder sasaran adalah **merah** — folder
  yang sudah memegang nama itu, dan fail dengan nama itu — supaya
  perlanggaran itu ditunjukkan sebelum anda memilih. Ia masih boleh
  dipilih: lihat di bawah.
- Input disahkan secara langsung berdasarkan peraturan penukaran nama
  Obsidian sendiri — set aksara yang sama, mesej yang sama, tooltip merah
  yang sama yang anda dapat semasa menukar nama dalam pepohon fail — jadi
  nama yang haram ditandakan semasa anda menaip dan tidak dapat disahkan.
- Mengklik di luar bar tajuk, atau bar tajuk kehilangan fokus, menamatkan
  mod tukar nama.

### Nama yang telah diambil

Memindahkan atau menukar nama kepada nama yang sudah ada **bertanya dan
bukan menolak.** Satu dialog terbuka dengan dua laluan yang boleh anda
sunting: ke mana fail anda pergi, dan ke mana fail yang menghalang jalan
pergi — merah selagi itu masih diambil. Setiap laluan turut dilukis dengan
cara bar laluan melukisnya, dengan bahagian yang berbeza diwarnakan dan
dipendekkan terakhir, jadi laluan yang panjang tetap menunjukkan apa yang
berubah.

Kedua-dua medan mempunyai satu senarai. Yang kedua memegang jalan keluar
biasa:

- **Tukar tempat** — ia pergi ke folder lama fail anda, dengan namanya
  sendiri.
- **Tukar nama** — ia kekal di tempatnya dan mengambil nama lama fail
  anda.
- **Tukar kedua-duanya** — ia mengambil laluan lama fail anda.
- `-1`, `-bak` dan `-old` di sebelah namanya sendiri.
- Kedua-dua nama yang fail itu ada.

Senarai pertama menawarkan ke mana fail anda akan pergi, **Kekal di
tempatnya**, namanya sendiri dalam folder sasaran, dan `-1`, `-bak` dan
`-old` di sebelahnya. Jalan keluar yang laluannya diambil dikelabukan dan
tidak dapat dipilih. Memilih satu **hanya mengisi medan** — anda masih
boleh menyuntingnya — dan **Sahkan** memindahkan kedua-duanya, pautan dan
semuanya; **Batal** tidak memindahkan apa-apa. Memilih nama yang telah
diambil daripada senarai bertanya perkara yang sama, dan begitu juga
menjatuhkan nota ke atas folder yang sudah memegang namanya.

## Satu kekunci untuk kedua-dua penukaran nama

Perintah penukaran nama (<kbd>F2</kbd> secara lalai, atau apa sahaja yang telah anda tetapkan semula) **bersilih ganti** antara penukaran nama tajuk sebaris Obsidian dan bar laluan tajuk plugin ini. Jika anda telah mematikan tajuk sebaris Obsidian, bar laluan tajuk menjadi satu-satunya sasaran, jadi kekunci itu tidak akan pernah tidak melakukan apa-apa.

Dalam bar laluan ia terbuka pada **nama tanpa sambungannya** — penyuntingan yang hampir selalu menjadi penukaran nama, dan perkara yang sama apabila mengklik nama itu memilihnya. Tekan sekali lagi dan ia melakukan apa sahaja yang <kbd>Tab</kbd> akan lakukan di situ: pada nama, itu ialah anak tangga seterusnya — nama dengan sambungannya, laluan dari folder bilik kebal anda, laluan dari punca sistem; dengan sesuatu yang ditaip, ia melengkapkannya, sepertimana <kbd>Tab</kbd> lakukan.

**Kitaran itu tertutup pada tajuk.** Lima tekanan membawa anda mengelilinginya — tajuk sebaris, nama, nama dengan sambungannya, laluan dari bilik kebal anda, laluan dari punca sistem — dan tekanan keenam ialah tajuk sebaris semula. Tekanan itu sahaja yang berbeza daripada
<kbd>Tab</kbd>, yang berpusing kembali ke hadapan laluan sebaliknya — dan tekanan ketujuh
pergi ke tempat pusingan <kbd>Tab</kbd> pergi: punca bilik kebal, dengan keseluruhan laluan di
dalam medan dan folder pertamanya ditanda. Jadi setiap langkah yang <kbd>Tab</kbd> capai, kekunci itu
turut mencapainya.

Perintah **Fokus pada bar laluan** melakukan perkara yang sama di dalam medan itu — apa sahaja
yang <kbd>Tab</kbd> akan lakukan — dan di mana <kbd>Tab</kbd> akan berpusing, ia menyerahkan kembali kursor
kepada nota sebaliknya. Tekanan seterusnya ialah pusingan itu: punca bilik kebal, folder pertama ditanda.

**Dalam medan yang sudah terbuka**, kekunci itu menukarnya menjadi penukaran nama di tempat ia
berada — mengekalkan teks, kursor dan pemilihan — dan **Fokus pada bar
laluan** mengambil semula penukaran nama itu daripadanya dengan cara yang sama. **Apa-apa sahaja yang lain** yang ditekan atau
diklik antara tekanan-tekanan itu memulakan semula mana-mana kitaran, jadi tekanan selepas anda
sedang menyunting tidak akan pernah mendarat pada anak tangga yang tertinggal dari sebelumnya.

Di luar bilik kebal kekunci itu turut berfungsi — tiada tajuk sebaris di sana, jadi
tekanan pertama terus ke bar laluan.

Ini berfungsi dengan membalut perintah `workspace:edit-file-title` dan bukannya merampas kekunci itu, jadi menetapkan semula pintasan dan menjalankan perintah dari palet kedua-duanya berfungsi tanpa berubah.

## Bagaimana entri senarai diwarnakan

| Warna | Bermaksud |
| --- | --- |
| **Ungu** | Satu nota (`.md`, `.markdown`) — apa yang Obsidian akan buka sebagai nota, dipilih daripada folder yang mengandungi pelbagai jenis kandungan |
| **Oren** | Bukan nota — apa sahaja yang Obsidian tidak akan buka sebagai nota, daripada PDF hinggalah `.txt`, dan entri `:page` bersama mereka. Folder yang mengandungi pelbagai jenis kandungan dibaca untuk nota di dalamnya, dan satu warna untuk segala-galanya yang lain menyatakan itu lebih pantas daripada amaran pada sebahagian daripadanya; lihat [warna amaran](#dua-warna-amaran) |
| **Malap** | Di luar bilik kebal anda, jadi pengendalian bilik kebal sendiri tidak terpakai |
| **Biru**, tebal | Tempat anda sudah berada: nota bar ini sendiri, dan folder tempat bar laluan sedang berdiri. Dalam mod penukaran nama/alih, entri *kekalkan nama ini* berdiri menggantikan tempat nota itu — nota yang sama tidak kira caranya |
| **Merah** | Mod penukaran nama/alih sahaja: nama itu sudah diambil. Masih boleh dipilih — memilih satu bertanya apa yang perlu dilakukan mengenai fail yang menghalang; lihat [Nama yang sudah diambil](#nama-yang-telah-diambil) |

**Folder ditebalkan**, jadi nota sendiri sesebuah folder tidak memerlukan warna
tersendiri untuk dibezakan daripada foldernya: ia berwarna ungu seperti mana-mana nota lain. **Garis di sepanjang
tepi baris** menandakan nama-nama yang bermula dengan apa yang anda taip — biru di mana
mereka bersetuju lebih lanjut, hijau pada cabang yang diambil oleh tawaran itu; lihat
[Menaip laluan](#menaip-laluan).

Medan itu mengambil warna yang sama untuk apa yang dinamakannya — lihat [Menaip laluan](#menaip-laluan).

## Peraturan keterlihatan

- Fail dengan sambungan yang tidak disokong muncul dalam senarai hanya jika tetapan **Detect all file extensions** Obsidian dihidupkan — **di dalam bilik kebal**. Di luarnya tetapan itu tidak terpakai: ia mengawal apa yang bilik kebal indeks, dan tiada apa-apa di luar sana berada dalam bilik kebal, jadi `.txt` di sebelah nota anda tersenarai tidak kira caranya.
- Senarai memaparkan sehingga 1,000 entri, sepuluh kali ganda had Obsidian sendiri. Apabila sesebuah folder mempunyai lebih banyak, baris terakhir menyatakan berapa banyak yang ditinggalkan; teruskan menaip untuk menyempitkan senarai itu.
- Fail-titik dan folder-titik muncul hanya jika tetapan **Tunjukkan fail tersembunyi** plugin ini dihidupkan.
- **Perlindungan tulis-ganti berfungsi sama tidak kira keterlihatan** — fail tersembunyi masih menghalang anda daripada menulis-ganti ke atasnya.

## Helaian ringkas

Laluan **dibalut dalam tanda petik** akan dibuka bungkusnya untuk anda. *Copy as path* Windows memberikan
`"C:\Users\you\note.md"`, termasuk tanda petik, dan shell melakukan perkara yang sama untuk mana-mana
laluan yang mempunyai ruang di dalamnya; menampal atau menaip salah satu berfungsi tidak kira caranya. Hanya
tanda petik berganda, dan hanya sebagai pasangan yang sepadan di sekeliling keseluruhannya — ia tidak boleh
muncul dalam nama sebenar, tempat tanda petik tunggal amat boleh berlaku.

| Anda mahu… | Buat ini |
| --- | --- |
| Buka folder (notanya, atau dedahkannya) | Klik pemisah **selepas** folder itu |
| Berikan folder nota folder yang tiada padanya | **Klik dua kali** pemisah yang sama (memerlukan plugin nota-folder) |
| Tukar folder dengan adik-beradiknya | Klik nama folder itu, kemudian taip atau pilih |
| Tukar nama atau sasaran semula nota itu | Klik nama nota itu — termasuk sambungan |
| Terokai kandungan sesebuah folder | Klik nama folder itu; senarai menyenaraikan induknya, jadi klik folder **di bawah** yang anda mahukan |
| Taip semula folder dan segala yang di bawahnya | **Klik dua kali** nama folder itu, kemudian taip |
| Sunting laluan daripada folder ke bawah | Klik nama folder itu, kemudian <kbd>→</kbd> untuk nyahpilih |
| Lompat ke fail dengan menaip laluannya | Klik nama fail atau ruang kosong, taip, <kbd>Enter</kbd> |
| Buka fail dalam tab baharu sebaliknya | <kbd>Ctrl</kbd> semasa memilihnya, atau <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| Salin nota ke suatu tempat dan bukannya memindahkannya | Pensel, kemudian <kbd>Ctrl</kbd> semasa memilih atau melaksanakan sasaran |
| Cipta nota pada laluan yang tidak wujud | Taip laluan itu — medan bertukar **merah** sebaik sahaja tiada apa-apa dalam senarai sepadan dengannya — kemudian <kbd>Enter</kbd>. Di dalam bilik kebal ia dicipta serta-merta; di luarnya ia bertanya dahulu |
| Ketahui sama ada laluan yang anda taip sudah ada | Lihat warnanya: ia mengambil warna baris yang dinamakannya, dan merah bermaksud <kbd>Enter</kbd> akan menciptanya |
| Turun satu tahap semasa menaip | Taip `/` |
| Naik semula satu tahap semasa menaip | <kbd>Backspace</kbd> dalam input kosong |
| Bawa masuk folder sebelum medan itu ke dalamnya | <kbd>←</kbd> pada permulaannya untuk satu; <kbd>Shift</kbd>+<kbd>Home</kbd>, atau <kbd>Home</kbd> dengan senarai tertutup, untuk kesemuanya |
| Alih atau tukar nama nota yang terbuka | Klik pensel, kemudian teroka atau taip seperti di atas |
| Alih ke nama yang sudah diambil | Laksanakannya juga: dialog membenarkan anda menukar tempat, nama atau kedua-duanya, atau memberikan fail yang menghalang itu nama lain |
| Alih tanpa menukar nama | Pensel → klik ke dalam folder sasaran → pilih nama fail semasa yang disemat |
| Tukar nama di tempatnya | <kbd>F2</kbd> dua kali (tekanan pertama pergi ke tajuk sebaris, tekanan kedua ke tajuk) |
| Lompat ke bilik kebal lain, laman utama atau pemacu | Klik nama bilik kebal itu |
| Buka fail dari luar bilik kebal | Nama bilik kebal → pilih lokasi → teroka → pilih fail (baca sahaja sehingga *Sunting sebagai teks*) |
| Lengkapkan nama yang sedang ditaip | <kbd>Tab</kbd>, atau <kbd>End</kbd> untuk yang ditawarkan; <kbd>→</kbd> mengambil satu huruf daripadanya |
| Masuk ke dalamnya, apabila hanya satu nama tinggal | <kbd>Tab</kbd> sekali lagi |
| Ambil semula satu langkah, atau tinggalkan folder | <kbd>Shift</kbd>+<kbd>Tab</kbd> |
| Ambil keseluruhan laluan, atau laluan sistem | <kbd>Tab</kbd> melepasi penghujung, atau klik empat kali |
| Salin nama, laluan atau laluan sistem | Klik kanan dua kali padanya; ruang kosong tiga kali untuk laluan sistem |
| Capai apa yang pengurus bilik kebal tawarkan untuk bilik kebal ini | Klik kanan ikon pada permulaan baris |
| Salin ID bilik kebal | Klik kanan ikon pada permulaan baris |
| Buka bilik kebal lain yang sedang anda teroka | Klik kanan namanya pada permulaan baris |
| Lihat sambungan fail pada baris | Hidupkan **Tunjukkan sambungan fail** dalam tetapan |
| Buka segmen folder dalam tab baharu | <kbd>Ctrl</kbd> atau klik tengah padanya, atau seret ke bar tab |
| Capai bar laluan daripada papan kekunci | Tetapkan *Fokus pada bar laluan* dalam Hotkeys |
| Buka alamat web atau pautan `obsidian://` | Taipkannya ke dalam bar dan tekan <kbd>Enter</kbd> |
| Batalkan apa-apa sahaja | <kbd>Esc</kbd>, atau klik di luar bar tajuk |
| Cuba entri untuk melihat sebelum melaksanakan | Anak panah atau layang melalui senarai; <kbd>↑</kbd> melepasi bahagian atas mengembalikan teks anda |
| Alih nota ke dalam folder di atasnya | Seret ke folder itu dalam baris |
| Simpan sekeping teks sebagai nota baharu | Seret teks itu ke folder, taip nama, <kbd>Enter</kbd> |
| Tambah sekeping teks ke nota yang sedang anda baca | Seret ke nama nota itu, sahkan |
| Lihat nama folder yang dipendekkan secara penuh | Layang padanya, atau lebarkan panel |
| Ketahui di mana bilik kebal itu sendiri berada | Layang ikon pada permulaan baris |
| Keluarkan nota daripada bilik kebal | Pensel → teroka di luar → sahkan dialog (pautan akan terputus) |
| Benarkan penulisan di luar bilik kebal anda | Klik **mangga merah** dalam tajuk; togol penukaran nama mengambil tempatnya |
| Kuncikannya semula | Klik togol sehingga mangga kembali — satu tekanan masuk, satu tekanan keluar |
| Padam fail di luar bilik kebal | Buka mangga, kemudian klik kanan fail: *Delete* mengalihkannya ke tong sampah sistem anda |

## Tetapan

| Tetapan | Pilihan | Lalai | Apa fungsinya |
| --- | --- | --- | --- |
| **Language** | Lalai Obsidian, atau salah satu daripada 46 | Lalai Obsidian | Bahasa teks plugin ini sendiri. *Obsidian default* mengikut bahasa yang ditetapkan dalam tetapan Appearance, iaitu apa yang hampir semua orang mahukan. Baris itu sendiri — namanya, penerangannya dan *Obsidian default* — kekal dalam bahasa Inggeris tidak kira apa yang dipilih, kerana itulah jalan keluar daripada bahasa yang anda tidak boleh baca. Bahasa Yunani dan Sanskrit diterjemahkan di sini dan tiada dalam senarai Obsidian sendiri, jadi tetapan ini sahaja cara untuk mencapainya. |
| **Alignment** | Left / Center / Right | Left | Di mana laluan pada bar tajuk duduk dalam baris tajuk. *Center* sepadan dengan rupa klasik Obsidian. |
| **Delimiter** | Mana-mana aksara | `/` | Pemisah yang dilukis antara segmen. Enam praset satu klik (`/ > ▸ › \ •`) berada di hadapan medan teks. |
| **Show vault name** | Hidup / Mati | Hidup | Sama ada bilik kebal itu sendiri menjadi segmen laluan pertama. Dimatikan, segmen itu menjadi ikon 🏠 dan bukannya hilang, jadi laluan itu masih bermula di suatu tempat yang boleh diklik. |
| **Folder name opens the dropdown** | Hidup / Mati | Hidup | Menukar apa yang nama folder dan pemisah selepasnya lakukan — lihat [jadual di atas](#laluan-pada-bar-tajuk). Dengan [Folder notes](obsidian://show-plugin?id=folder-notes) pemisah membuka nota folder. Tidak pernah terpakai dalam mod penukaran nama/alih. |
| **Show dot files** | Hidup / Mati | Mati | Sama ada fail-titik dan folder-titik disenaraikan dalam senarai. Perlindungan tulis-ganti terpakai tidak kira caranya. |
| **Show all file types** | — | — | Bukan tetapan plugin ini tetapi Obsidian, dinamakan di sini kerana ia menjawab soalan yang sama: bilik kebal anda mengindeks hanya jenis fail yang diarahkan, dan hanya apa yang diindeksnya boleh disenaraikan. Cari ia dalam tetapan Obsidian dan hidupkannya untuk melihat setiap fail; butang di sebelah baris membuka halaman itu dengan tetapan itu ditatal ke pandangan dan diberi kelipan, seperti mengkliknya dalam carian tetapan sendiri. Di luar bilik kebal ia tidak terpakai, kerana tiada apa-apa di sana diindeks dalam apa jua keadaan. |
| **Show file extensions** | Hidup / Mati | Mati | Sama ada nama fail pada baris membawa sambungannya. Mati, ia ditinggalkan — sepertimana Obsidian meninggalkannya daripada tajuk nota. Hidup, baris itu menamakan fail sepertimana sistem fail lakukan. Tidak kira caranya sambungan itu ialah perkara kedua yang dilepaskan apabila baris kehabisan ruang, sejurus selepas nama bilik kebal. |
| **Access external files** | Hidup / Mati | **Mati** | Sama ada nama bilik kebal membuka senarai lokasi. Mati, tiada apa-apa dalam plugin sesekali melihat melepasi bilik kebal ini. |
| **Hotkeys** | butang | — | Membuka *Hotkeys* Obsidian yang ditapis kepada plugin ini, tempat *Fokus pada bar laluan* boleh diberikan kekunci. |

## Menggantikan ikonnya

Lure memaparkan tiga ikon: ikon punca-bilik-kebal (apabila **Show vault name** dimatikan), togol penukaran nama/alih, dan mangga yang berdiri menggantikan tempatnya semasa penulisan di luar bilik kebal dikunci. Semuanya boleh ditukar daripada tema atau serpihan CSS — tetapkan glif gantian dan sembunyikan yang terbina dalam sekali gus dalam satu peraturan:

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

`--lure-icon-glyph` menerima apa sahaja yang sah dalam `content` CSS, jadi `url(...)` berfungsi untuk imej sama seperti untuk glif teks atau emoji. Biarkan `--lure-icon-svg` sahaja untuk mengekalkan ikon Lucide dan melukis glif anda di sebelahnya.
