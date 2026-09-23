<!-- CHANGELOG.md tarjimasi — holat: commit 2cbb237.
     Mashina tarjimasi (Claude Opus 5), ona tili egalari tomonidan
     tekshirilmagan. Tuzatishlar mamnuniyat bilan qabul qilinadi;
     hal qiluvchi nusxa — inglizcha CHANGELOG. -->

[English](../../CHANGELOG.md) · [العربية](CHANGELOG.ar.md) · [አማርኛ](CHANGELOG.am.md) · [Беларуская](CHANGELOG.be.md) · [বাংলা](CHANGELOG.bn.md) · [Català](CHANGELOG.ca.md) · [Čeština](CHANGELOG.cs.md) · [Dansk](CHANGELOG.da.md) · [Deutsch](CHANGELOG.de.md) · [Ελληνικά](CHANGELOG.el.md) · [Español](CHANGELOG.es.md) · [فارسی](CHANGELOG.fa.md) · [Suomi](CHANGELOG.fi.md) · [Français](CHANGELOG.fr.md) · [Gaeilge](CHANGELOG.ga.md) · [עברית](CHANGELOG.he.md) · [Magyar](CHANGELOG.hu.md) · [Bahasa Indonesia](CHANGELOG.id.md) · [Italiano](CHANGELOG.it.md) · [日本語](CHANGELOG.ja.md) · [ქართული](CHANGELOG.ka.md) · [ភាសាខ្មែរ](CHANGELOG.kh.md) · [한국어](CHANGELOG.ko.md) · [Latviešu](CHANGELOG.lv.md) · [Bahasa Melayu](CHANGELOG.ms.md) · [नेपाली](CHANGELOG.ne.md) · [Nederlands](CHANGELOG.nl.md) · [Norsk](CHANGELOG.no.md) · [Polski](CHANGELOG.pl.md) · [Português](CHANGELOG.pt.md) · [Português (Brasil)](CHANGELOG.pt-BR.md) · [Română](CHANGELOG.ro.md) · [Русский](CHANGELOG.ru.md) · [संस्कृतम्](CHANGELOG.sa.md) · [Slovenčina](CHANGELOG.sk.md) · [Shqip](CHANGELOG.sq.md) · [Српски](CHANGELOG.sr.md) · [Svenska](CHANGELOG.sv.md) · [ไทย](CHANGELOG.th.md) · [Türkçe](CHANGELOG.tr.md) · [Українська](CHANGELOG.uk.md) · **Oʻzbekcha** · [Tiếng Việt](CHANGELOG.vi.md) · [简体中文](CHANGELOG.zh.md) · [繁體中文](CHANGELOG.zh-TW.md)

# O‘zgarishlar jurnali

Lure'ning har bir relizi, eng yangisi birinchi. Oxirgi relizdan beri qo‘shilganlar *Chiqarilmagan* bo‘limida. Versiyalar reliz teglariga mos ravishda `v` prefiksisiz yoziladi.

## Chiqarilmagan

### Qo‘shildi

- **Band nom rad etish o‘rniga so‘raydi.** Allaqachon mavjud nomga ko‘chirish yoki qayta nomlash ikkita yo‘lni tahrirlash imkonini beruvchi dialog oynasini ochadi: faylingiz qayerga borishi va yo‘lda turgan fayl qayerga borishi, u hali band bo‘lsa qizil. Har bir yo‘l ham yo‘l panelidagi kabi chiziladi: farq qiladigan qismlari rangli va oxirida qisqartiriladi. Ikkala maydonda ham ro‘yxat bor; ikkinchisi odatiy chiqish yo‘llarini o‘z ichiga oladi — o‘rin almashtirish (u faylingizning eski papkasiga boradi), nom almashtirish (o‘z joyida qoladi va faylingizning eski nomini oladi), ikkalasini almashtirish (u faylingizning eski yo‘lini oladi), `-1`, `-bak` va `-old` o‘z nomi yonida, hamda fayllarning ega bo‘lgan ikki nomi. Yo‘li band bo‘lgan chiqish yo‘li kulrang qilinadi. Birini tanlash faqat maydonni to‘ldiradi; Qo‘llash ikkalasini ham, havolalari bilan birga, ko‘chiradi, Bekor qilish esa hech narsani ko‘chirmaydi. Ro‘yxatdan band nomni tanlash ham xuddi shuni so‘raydi, xuddi shunday faylni nomi allaqachon mavjud papka ustiga tortib tashlash ham.
- **Papka ichidagi `:graph` o‘sha papkaning grafini ochadi** — o‘z qidiruv maydonida `path:"that/folder"` bilan filtrlangan graf, xuddi u yerga yozilgandek. Ombor ildizida esa u yana butun graf bo‘ladi.
- **Bu nomni allaqachon o‘zida saqlagan papka** ko‘chirish paytida ro‘yxatda qizil bo‘ladi, xuddi shu nomdagi fayl ham shunday, shuning uchun to‘qnashuv tanlashdan oldin ko‘rinadi.

### O‘zgartirildi

- **Taklif doim Tab yozadigan narsa bo‘ladi.** Nomlar mos kelishni to‘xtatgan joyda, maydon ulardan birinchisi tomon qadamni taklif qiladi, va Tab qaysi qatorga borishini shu belgilaydi; nom ustidan yozish uning kengaytmasini o‘z joyida qoldiradi va uni oldida taklif qiladi; endigina kirilgan papka esa o‘zining birinchi qadamini taklif qiladi. Avval, ba'zi holatlarda hech narsa taklif qilinmasdi, lekin Tab baribir biror narsa yozardi. Ro‘yxatdagi tagi chizig‘i taklif o‘zgarganda unga ergashadi, va strelkalar bilan borilgan qatordagi Tab yonidagi qator o‘rniga o‘sha qatorni oladi.
- **Takliflar katta-kichik harfga e'tibor bermaydi.** `sch` yozish nom yozilgan tarzda `Schemes`ni taklif qiladi; taklifni qaytarib olish esa harflaringizni siz yozgan holicha qaytaradi. `Test` va `test` ikkalasi ham mavjud bo‘lgan joyda, siz yozgan tarzda yozilgani taklif qilinadi.
- **Tab bosilgandan keyin keyingi qadam darhol taklif qilinadi**, xuddi harf yozilgandagi kabi.
- **Siz yozgan narsa bilan boshlanadigan nomlar ro‘yxatda birinchi turadi**, chetida chiziq bilan belgilangan — faqat siz yozgandan ko‘proq mos kelsa ko‘k, taklif ajraladigan tarmoqda esa yashil — faqat uni o‘z ichiga oladiganlardan oldin. Ularning har biri faqat taklif qilingan qadamnigina emas, <kbd>Tab</kbd> unga qarab boradigan qadamni ham tagiga chizadi.
- **Ro‘yxat kursorga ergashadi**, yoki belgilashning boshiga: u shu nuqta joylashgan papkani, undan oldingi harflar bilan filtrlab ro‘yxatga oladi. Nom boshida bu butun papka bo‘ladi.
- **Qatorga ishora qilish uni taklif sifatida ko‘rsatadi** — yozganingiz o‘zingizniki bo‘lib qoladi, nomning qolgan qismi esa belgilanadi — sichqonchani ro‘yxatdan olib ketish esa taklifni qaytaradi.
- **→ taklifning bitta harfini oladi**, hammasini emas; <kbd>End</kbd> hamon uni butunlay oladi.
- **Kengaytma yolg‘iz qolganda undan oldin bosilgan Backspace papkani bir pog‘ona chiqaradi**, xuddi bo‘sh maydonda bo‘lgani kabi; yolg‘iz kengaytma yo‘qoladi.
- **Ochiq maydonda F2 uni o‘sha joyda qayta nomlashga aylantiradi**, matnni, kursorni va belgilashni saqlab qolgan holda, **Yo‘l paneliga fokus** esa xuddi shu tarzda uni qayta nomlashdan qaytaradi.
- **F2 va Yo‘l paneliga fokus bosishlari orasida bosilgan yoki bosilgan boshqa har qanday narsa siklni qaytadan boshlaydi.**
- **Papkalar ro‘yxatda qalin harflar bilan yoziladi**, shuning uchun papkaning o‘z qaydi ajralib turish uchun kulrang bo‘lishi shart emas: u boshqa har qanday qayd kabi binafsha rangda.
- **Ro‘yxat yo‘l panelidan kengroq emas.** Sig‘maydigan nom yo‘l paneli nomni qisqartiradigan usulda qisqartiriladi va sichqonchani ustiga olib borganda to‘liq ko‘rsatiladi.
- **PageUp va PageDown ro‘yxatni ko‘rsatayotgan narsasi bo‘yicha aylantiradi**, maydondan ham, va belgilangan qator ekrandagi joyini saqlaydi. <kbd>Home</kbd> va <kbd>End</kbd> birinchi va oxirgi qatorni ko‘rinishga olib keladi.
- **Ro‘yxat 1 000 tagacha yozuvni ko‘rsatadi**, qolganini sanashdan oldin, 100 o‘rniga.
- **Papkalar birinchi navbatda eng uzuni bo‘lib joy bo‘shatadi.** Joy yetmasa, eng uzun papka nomi keyingi eng uzuniga teng bo‘lguncha qisqaradi, so‘ng ikkalasi birga, va hokazo, har biri o‘z eng past chegarasida to‘xtaydi. Avval, har bir papka o‘z uzunligiga mutanosib holda bir vaqtda qisqarardi.
- **Qisqartirilgan nomlar sakrash o‘rniga sirg‘aladi.** Joy bo‘shatayotgan nom piksel darajasida kesiladi va o‘z `…`si ostida so‘nadi, shuning uchun panel o‘lchami o‘zgartirilayotganda qatorda undan keyingi hech narsa qadamlab harakatlanmaydi.

### Tuzatildi

- O‘ng tomondagi panelda ro‘yxat birinchi harf yozilmaguncha chap panel ostida ochilar edi.
- Kursorni ro‘yxatdan olib ketish taklifni qaytarardi, ammo uning rangini qaytarmasdi.
- Qisqartirilgan nom bo‘lingan joydagi bo‘shliq — `development guidelines` — tushirib qoldirilar edi, natijada ikki so‘z birlashib qolardi.

## 1.4.0 — 2026-09-19[^1.4.0]

### Qo‘shildi

- **Sozlamalarda Hotkeys qatori.** Uning tugmasi Obsidian'ning *Hotkeys* bo‘limini shu plaginga filtrlab ochadi; u yerda tugmasiz keladigan *Yo‘l paneliga fokus* buyrug‘iga klavish biriktirish mumkin.
- **Fayl ochilmagan panellarda yo‘l paneli.** Bo‘sh varaq `vault / :blank`, graf `vault / :graph` deb ko‘rinadi, nomlanadigan narsasi bo‘lmagan har qanday boshqa ko‘rinish esa o‘zining `:` yorlig‘ini oladi — bosh sahifa plaginining varag‘i `:home-launcher` deb ko‘rinadi. Yonidagi maydon manzil satri: yo‘lni kiriting va <kbd>Enter</kbd> uni shu panelda ochadi yoki yaratadi. Bundan oldin bu qator bo‘sh edi — plagin Obsidian'ning o‘z sarlavhasini yashirar, uning o‘rniga hech narsa qo‘ymas edi.
- **Sahifani tanlash bilan birga yozish ham mumkin** — `:graph` va boshqalar manzil, faqat ro‘yxat elementi emas. Ikki nuqta hech bir fayl nomini boshlamaydi, shuning uchun uni istalgan joyda yozish ularni chaqiradi, maydon esa hech narsa nomlana olmaydigan qaydni yaratishni taklif qilish o‘rniga ularning rangini oladi.
- **Obsidian'ning o‘z *Show all file types* sozlamasi uchun qator** nuqtali fayllar qoidasi yonida turadi, chunki ikkalasi ham ochiladigan ro‘yxatda nimalar ko‘rsatilishini belgilaydi: u ushbu sozlamani Obsidian'ning o‘z sozlamalaridan izlashni va barcha fayllarni ko‘rish uchun yoqishni aytadi, yonidagi tugma esa sozlamalar qidiruvi natijasi kabi, o‘sha sahifani sozlama ko‘rinadigan qilib aylantirib va yorqin belgilab ochadi. Obsidian'ning o‘z so‘zlari bilan nomlangan, 45 tilda tushuntirilgan.
- **Ombor ildizi panel ushlab turishi mumkin bo‘lgan sahifalarni ko‘rsatadi** — `:graph`, `:search` va plaginlaringiz ro‘yxatdan o‘tkazgan har qanday ko‘rinishlar, jumladan bosh varaq yoki kalendar. Birini tanlang — panel uni ochadi, xuddi qaydni tanlaganda qayd ochilgandek. Fayl ko‘rsatish uchun mavjud ko‘rinishlar chiqarib tashlanadi, chunki ularga ko‘rsatadigan narsa bo‘lmaydi.
- **Omborning o‘z ajratgichi boshlang‘ich sahifangizni ochadi**, agar plagin uni taqdim etsa, va buni bildirish uchun tagi chizilgan bo‘ladi; undan keyingi bosish fayl daraxtini yig‘adi, undan keyingisi esa ochiq bo‘lgan narsani aynan qaytaradi. Bunday plagin bo‘lmasa, avvalgidek, birinchi bosish yig‘adi.
- **Yo‘lni fayl tizimi ildizidan kiriting.** Bo‘sh maydon oldidagi `/` yutib yuborilmasdan, uni ochadi, undagi har bir keyingi qiyshiq chiziq unga tegishli bo‘ladi, ochiladigan ro‘yxat esa omborni emas, kompyuterni ko‘rsatadi.

### O‘zgartirildi

- **F2 va Yo‘l paneliga fokus maydon ichida Tab bosadi.** Tab u yerda nima qilsa — keyingi pog‘ona, kiritilganni to‘ldirish, papkaga kirish — ular ham shuni qiladi; faqat Tab yo‘lning boshiga qaytadigan joyda ular chiqib ketadi: F2 matn ichidagi sarlavhaga, buyruq esa qaydga. Ilgari kiritish qilingan maydonda F2 nomdan qayta boshlar, buyruq esa maydonni yopar edi.
- **Aylanishdan chiqqandan keyingi qadam — ildiz papka.** F2 matn ichidagi sarlavhaga qaytgandan yoki buyruq qaydga qaytgandan keyingi bosish Tab aylanishi tushadigan joyga — ombor ildiziga tushadi: maydonda butun yo‘l, uning birinchi papkasi belgilangan — shunday qilib halqaning hech bir qadami faqat Tabga qolmaydi.
- **Yo‘l paneliga fokus F2 kabi yuradi.** U butun yo‘l o‘rniga nomdan ochiladi, xuddi shu to‘rtta pog‘onadan o‘tadi, oxirgisidan keyingi bosish esa maydonni yopib, kursorni qaydga qaytaradi — ilgari u pog‘onalarni cheksiz aylanar, qatorga yetib boradigan yagona tugma undan chiqa olmas edi.
- **Band nom u ishlatilganda xabar qilinadi, yozilayotganda emas.** `Notes.md` sari yozilgan har bir nom o‘z-o‘zicha fayl bo‘lishi mumkin bo‘lgan nomlar orqali o‘tadi, ogohlantirish esa harfma-harf yonib-o‘chib turar edi. Nom imlosidagi xato esa, yozilgan zahoti, avvalgidek aytiladi.
- **Papka qaydi allaqachon ochiq bo‘lgan ajratgich papkani ko‘rsatadi**, ekrandagini qayta ochmaydi — uning ikkinchi bosishi doim shuni anglatgan.
- **Qayerdaligingiz ochiladigan ro‘yxatda qalin bo‘ladi**, faqat ko‘k emas.
- **Qayd bo‘lmagan hamma narsa ochiladigan ro‘yxatda to‘q sariq**, faqat Obsidian ko‘rinishga ega bo‘lmagan matn turlari emas. Binafsha rang aralash mazmunli papkada qaydlarni ajratib turadi; qolganlar uchun bitta rang xuddi shuni tezroq aytadi.

### Tuzatildi

- **Bosilgan papka ustida Backspace endi ombor nomini olib tashlamaydi.** Boshida qolgan qiyshiq chiziq kompyuter ildizidan boshlanadigan yo‘l deb o‘qilar edi, bu esa ochuvchi segmentni bo‘shatadi — Escape bilan maydonni yopish uni hech qachon qaytarmas, varaq ombor nomi va belgisini butunlay yo‘qotar edi. Endi boshidagi qiyshiq chiziq faqat birinchi papka haqiqatan mavjud bo‘lgandagina kompyuternikiga hisoblanadi, ochuvchi segment esa maydondan chiqishning har qanday usulida qaytadi.
- Ombordan tashqarida Obsidian'ning **Detect all file extensions** sozlamasi yoqilmaguncha fayllar yashirilar edi — bu ombor nimani indekslashi haqidagi sozlama bo‘lib, omborda bo‘lmagan papkalarga qo‘llanardi. Endi qaydlaringiz yonidagi `.txt` u yerda har ikki holatda ham ko‘rsatiladi.
- Ombor nomining ochiladigan ro‘yxati fayl ochilmagan panelda hech narsa qilmas edi, aynan boshqa joyga borish uchun ishlatiladigan panelda.
- Ombor nomini bosish Obsidian'ning o‘z sarlavhasini maydondagi yo‘l yonida, xiralashgan holda qoldirar edi, u boshqa hech qachon ko‘rinmaydi: qator o‘zini chizilgani bo‘yicha o‘lchaydi, o‘sha payt esa u maydon uchun joy bo‘shatish maqsadida o‘zini bo‘shatgan bo‘ladi.

- Bo‘sh joyni bosish maydonni ochar, so‘ng uni yo‘qotar edi: qaydni Fayl tadqiqotchisida ko‘rsatish kursorni o‘zi bilan olib ketadi, shuning uchun maydon ochiq va belgilangan turar, har bir tugma bosilishi esa daraxtga borar edi.
- Tizim ildizidan yo‘lni ko‘rsatadigan pog‘ona maydon yonida xuddi shu yo‘lning izini sig‘dirmasdan chizar edi, natijada chuqur yo‘l o‘zining ustiga bo‘yalardi.

## 1.3.0 — 2026-09-17[^1.3.0]

### Qo‘shildi

- **Tashqaridan faylni omborga olib kirish.** Diskning istalgan joyidagi faylni omboringiz ichidagi yo‘lga ko‘chiring yoki nusxalang; u haqiqiy qayd bo‘lib keladi, ko‘chirishda esa asl fayl faqat nusxa muvaffaqiyatli olingandan keyingina o‘chiriladi.
- **Matn yoki faylni qatorga tashlab, uni yozib qo‘ying.** Papka ustiga: o‘sha papkada yangi qayd, nomini o‘zingiz yozasiz. Qayd nomi ustiga yoki papka qaydi bor papkaning ajratgichi ustiga: tasdiqlashdan so‘ng o‘sha qayd oxiriga qo‘shiladi.
- **Papka qaydini yarating** — papkani ochadigan narsani ikkinchi marta bosib; bu papka qaydi plagini ishlab turgan va papkada hali qayd bo‘lmaganda ishlaydi. Qayd [Folder notes](https://github.com/LostPaul/obsidian-folder-notes) plaginining o‘z sozlamalari ko‘rsatgan joyga joylashtiriladi.
- **Papkani yo‘l panelidan tablar paneliga torting** — u o‘sha yerda ochiladi: papka qaydi bo‘lsa, o‘sha qayd, bo‘lmasa o‘sha papkada turgan tab.
- **G‘ildirak ro‘yxat bo‘ylab yuradi.** Nom ustida birinchi aylantirish o‘sha nomning ro‘yxatini ochadi, keyingi har bir aylantirish belgilashni bir qatorga suradi. Yon tomonga aylanayotgan qator g‘ildirakni aylantirish uchun o‘zida qoldiradi.
- **Maydon boshidan strelka bilan chiqing** — undan oldingi papka maydonga kiradi: bitta papka uchun <kbd>←</kbd>, hammasi uchun <kbd>Shift</kbd>+<kbd>Home</kbd> (yoki ro‘yxat yopiq bo‘lsa <kbd>Home</kbd>).
- **Maydon o‘zi nomlagan narsaning rangida bo‘ladi** — ro‘yxatdagi o‘sha qator kabi — va hech narsa unga mos kelmay qolganda qizaradi: aynan <kbd>Enter</kbd> biror narsani ochish o‘rniga yaratadigan paytda.
- **Papka qaydlari ro‘yxatda kulrang**, shuning uchun ular yana bitta qayd emas, o‘z papkasiga tegishli deb o‘qiladi.
- **Ajratgichni o‘rta tugma bilan bosing** — o‘sha papka yangi tabda ochiladi: uning papka qaydi yoki o‘sha papkada turgan tab.

### O‘zgartirildi

- **Qulf va nom o‘zgartirish tugmasi — bitta boshqaruv elementi.** Ombordan tashqarida tugma o‘rnini qizil, yopiq qulf egallaydi; uni ochish o‘rinni tugmaga beradi, nom o‘zgartirish rejimidan chiqish esa uni yana yopadi.
- **Nom o‘zgartirish klavishi qulfdan ham so‘raydi.** Ombordan tashqarida bir bosish qulfni miltillatadi; yarim soniya ichidagi ikkinchi bosish qulf beradigan ruxsatni beradi va nom o‘zgartirish rejimini ochadi.
- **Nom o‘zgartirish klavishi to‘liq aylana bo‘ylab yuradi** — matn ichidagi sarlavha, nom, kengaytmali nom, ombordan boshlangan yo‘l, tizim ildizidan boshlangan yo‘l — keyingi bosish esa yana matn ichidagi sarlavhaga qaytadi.
- **<kbd>Ctrl</kbd> bilan bosish va o‘rta tugma bilan bosish endi sinonim emas.** Biri tab ochib, unga o‘tadi, ikkinchisi uni fonda ochadi.
- **Qayd nomini o‘ng tugma bilan bosish faylning o‘z menyusini ochadi.**
- **Ro‘yxat oyna imkon bergancha baland**, Obsidian'ning qat'iy 300 pikseli o‘rniga.
- **Maydon ochiq turganda papkaga bosish undan keyingi butun yo‘lni saqlab qoladi**, maydon ichidagi papkaga bosish esa o‘sha papka tarkibini to‘liq ro‘yxatlaydi.
- **Ajratgich istalgan chuqurlikdagi papka qaydini ochadi** — Folder notes ishlab turganda — va papka qaydi bor har bir joyda tagiga chiziladi. Avval faqat yuqori darajadagi papkalar ishlardi. Boshqa papka qaydi plaginlari bilan ajratgich hamon papkani ko‘rsatadi.

### Tuzatildi

- **Ochiq maydon o‘z faylidan uzoq yashardi.** Yo‘l paneli ochiq holda boshqa qaydga o‘tish qatorni seans oxirigacha eski fayl nomi bilan qoldirardi.
- **Ombordan tashqarida qulf ochiq bo‘lsa ham O‘chirish, Nomini o‘zgartirish va Nusxasini yaratish rad etilardi**, rasmlar, PDF'lar va sahifalar uchun esa ularga umuman yetib bo‘lmasdi.
- **Ro‘yxat ochiq bo‘lganda <kbd>Ctrl</kbd>+<kbd>Enter</kbd> hech narsa qilmasdi** — har bir maydon esa aynan shu holatda ochiladi.
- **Ro‘yxat ochiq, lekin hech narsa belgilanmagan holda <kbd>Enter</kbd>** hech narsa qilmasdi; endi u yozganingizni tasdiqlaydi.
- **Barcha nomlar allaqachon eng qisqa holatida bo‘lib, baribir sig‘magan qatorni aylantirib bo‘lmasdi**, natijada yo‘lning oxiriga yetib bo‘lmasdi.
- **Plaginni o‘chirib qo‘yish** u o‘zgartirgan har bir qayd sarlavhasida ishlamaydigan tugma qoldirardi.

## 1.2.0 — 2026-08-25[^1.2.0]

### Qo‘shildi

- **Til sozlamasi.** Lure sukut bo‘yicha Obsidian tiliga ergashadi va o‘zining istalgan tiliga o‘rnatilishi mumkin. Bu, shuningdek, Obsidian o‘zi taklif qilmaydigan yunon va sanskrit tarjimalariga yetishning yagona yo‘li. Sozlamaning o‘z yorlig‘i ingliz tilida qoladi, shuning uchun uni o‘qiy olmaydigan tilingizdan ham har doim qayta topish mumkin.

## 1.1.2 — 2026-08-25[^1.1.2]

### O‘zgartirildi

- **Yengilroq uslublar jadvali.** Qator endi `:has()` selektorlari va `!important` qoidalarining ko‘pchiligidan foydalanmaydi. U kamroq ish bilan qayta joylashadi, plagin tekshiruvi ogohlantirishlari esa 56 tadan 7 taga tushdi.

## 1.1.1 — 2026-08-22[^1.1.1]

### Tuzatildi

- **Qisqa papka nomi ichida bo‘shliq bilan chizilishi mumkin edi** — `atlas` o‘rniga `atl as` — chunki uning qisqartirilgan shakli uchun ajratilgan joy nomning o‘zidan kengroq edi.

## 1.1.0 — 2026-08-22[^1.1.0]

### Qo‘shildi

- **O‘ng tugma lug‘ati.** Bir bosish menyu ochadi; ikki va uch bosish tobora ko‘proq narsani nusxalaydi — nom, kengaytmali nom, yo‘l. Qatordagi menyular endi Fayl menejerinikiga bandma-band mos keladi.
- **Ombordan tashqaridagi menyular.** Ro‘yxat qatorlari va tashqi ko‘ruvchi ochish, *Yo‘lni nusxa olish* va *Papkada ko‘rsatish* bandlarini taklif qiladi; qulf ochiq bo‘lsa, shuningdek *Yangi eslatma*, *Yangi papka*, *Nusxasini yaratish*, *Nomini o‘zgartirish…* va *O‘chirish* bandlarini ham. O‘chirish faylni tizim savatiga ko‘chiradi va hech qachon butunlay yo‘q qilmaydi.
- **Boshqa joyda ochish.** Qayd nomi yoki papka ustida <kbd>Ctrl</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> bilan yoki o‘rta tugma bilan bosish uni yangi tabda, bo‘lingan panelda yoki oynada ochadi. Ikkalasini ham Fayl menejeridagi qatorlari kabi sudrash mumkin.
- **Qaydlarni ko‘chirish uchun qatorga torting.** Qaydni, bir nechta qaydni yoki papkani papka bo‘lagi yoki ombor nomi ustiga tashlang.
- **Buyruq: Yo‘l paneliga fokus** — butun yo‘l belgilangan holda; sukut bo‘yicha tezkor klavish yo‘q, o‘zingiznikini biriktiring.
- **Yo‘l paneliga URL yozing**: `http(s)://` va `obsidian://` havola sifatida ochiladi, `file://` va foiz bilan kodlangan yo‘llar faylni ochadi.
- **Tab bilan to‘ldirish**, qobiqdagidek: har bir bosish papkadagi nomlar mos kelgan joygacha to‘ldiradi va ular farqlanadigan joyda to‘xtaydi. <kbd>Shift</kbd>+<kbd>Tab</kbd> orqaga yuradi. To‘ldiradigan narsa qolmaganda <kbd>Tab</kbd> belgilashni kengaytiradi: nom, kengaytmali nom, ombordan boshlangan yo‘l, tizim ildizidan boshlangan yo‘l.
- **Ro‘yxat siz turgan joyda ochiladi** va siz ko‘rsatayotgan narsani maydonda oldindan ko‘rsatadi; ro‘yxatdan chiqish yozganingizni qaytaradi.
- **Qaydni ombordan tashqariga ko‘chirish** — buziladigan havolalarni sanaydigan tasdiqlashdan so‘ng. U tashqariga nusxalanadi, keyin savatga tashlanadi, shuning uchun uni istalgan o‘chirilgan qayd kabi tiklash mumkin.
- **Fayl kengaytmalarini ko‘rsatish** sozlamasi; qo‘shtirnoq ichidagi yo‘llar ham (Windows'ning *Copy as path* buyrug‘i ularni aynan shunday beradi) tushuniladi.
- **Sozlamalar Obsidian sozlamalar qidiruvida ko‘rinadi** — Obsidian 1.13 va undan keyingi versiyalarda.

### O‘zgartirildi

- **Uzun yo‘llar panelga sig‘adi.** Nomlar eng kam foydali qismidan boshlab qisqartiriladi — ombor nomi, keyin kengaytma, keyin papkalar, qaydning o‘z nomi eng oxirida — va hech qachon ularni bir-biridan ajratib bo‘lmaydigan darajagacha emas. Qisqartirilgan nomni to‘liq o‘qish uchun kursorni ustiga olib boring.
- **Qayd nomiga bosish uni kengaytmasiz belgilaydi**, shuning uchun nom o‘zgartirishda fayl turini o‘zgartirib yuborish xavfi endi yo‘q.
- **Nom o‘zgartirish klavishi kengaytmasiz nom bilan ochiladi**, keyingi bosishlar esa belgilashni kengaytiradi.
- **Papkaga bosish yo‘lning qolgan qismini ko‘rinishda qoldiradi**, ombordan tashqarida ham.
- **Omboringizga qaytib ko‘rib chiqishda fayllar qayd sifatida ochiladi** — tashqi ko‘ruvchida emas, havolalar va teskari havolalar bilan.

### Tuzatildi

- **Menyu yorliqlari barcha tillarda ingliz tilida edi**; endi ular Obsidian'ning o‘z tarjimalaridan olinadi.
- **Nom o‘zgartirish klavishi Obsidian'ning nom o‘zgartirish oynasida boshi berk ko‘chaga kirib qolardi**, agar qayd sarlavhasidan pastga aylantirilgan bo‘lsa.
- **<kbd>Esc</kbd> ni ikki marta bosish kerak edi** — maydonni va uning ro‘yxatini yopish uchun.
- **<kbd>Ctrl</kbd>+<kbd>Enter</kbd> muharrirdagi havolani ochardi** — yo‘l panelida ishlash o‘rniga.
- **Ombordan tashqarida nom o‘zgartirishda yozilgan nom yo‘qolardi**, agar qulf bosilsa.
- **Tab oldinga siljimasdan aylanib qolishi mumkin edi** — o‘z papka qaydi yonida turgan papkada.

## 1.0.4 — 2026-08-13[^1.0.4]

### Qo‘shildi

- **Siz turgan qayd ro‘yxatda ko‘k rang bilan belgilanadi**, shuning uchun uning papkasiga qaytib ko‘rib chiqqanda qayerdan boshlaganingiz ko‘rinib turadi.

## 1.0.3 — 2026-08-13[^1.0.3]

### Hujjatlar

- README hamjamiyat katalogidagi plagin sahifasiga havola beradi, tarjima qilingan README'lar esa yangilandi.

## 1.0.2 — 2026-08-13[^1.0.2]

### O‘zgartirildi

- **Obsidian 1.8.7 yoki undan keyingi versiya talab qilinadi** (avval 1.4.0 edi). Yo‘l paneli tayanadigan ikki imkoniyat — fayllarni nusxalash va maydon ostidagi xato maslahat oynasi — shuni talab qiladi.
- **Reliz yuklamalari imzolangan yig‘ilish kelib chiqishi (build provenance) ma'lumotiga ega**, shuning uchun `gh attestation verify` yordamida `main.js` aynan shu repozitoriydan yig‘ilganini tasdiqlashingiz mumkin.

### Tuzatildi

- **Mavjud bo‘lmagan tashqi faylni standart ilovada ochish jimgina muvaffaqiyatsiz tugardi**; endi xato haqida xabar beriladi.

## 1.0.1 — 2026-08-13[^1.0.1]

### Tuzatildi

- **Nom o‘zgartirish rejimida qayd o‘zi bilan to‘qnashardi** — uning o‘z papkasiga qaytib ko‘rib chiqilganda nomi ro‘yxatdan yashirinardi, go‘yo u o‘z nomini o‘zgartirishga to‘sqinlik qilayotgandek.
- **Obsidian ishga tushgandan keyingi birinchi papka ko‘rsatish hech narsani ochmasdi.**
- **Ro‘yxatdan papka tanlash nom o‘zgartirish rejimini tugatib qo‘yishi mumkin edi**, uning ichiga kirish o‘rniga.
- **Tashqi tahrirlar boshqa yozuvchi tomonidan jimgina ustidan yozilishi mumkin edi**, masalan Sync yoki ikkinchi panel tomonidan. Endi yozish atomar.
- **Fokus hoshiyasini tiklash boshqa ko‘rinishlarga ham ta'sir qilardi**; endi u faqat Lure o‘zgartirgan sarlavhalarga qo‘llanadi.

### Hujjatlar

- README va foydalanish qo‘llanmasi plagin taqdim etadigan barcha 44 tilda mavjud.
- Qo‘llanmada Obsidian'ning *Detect all file extensions* sozlamasi tilga olingan edi, u endi *Barcha kengaytmalarni aniqlash* deb ataladi.

## 1.0.0 — 2026-08-10[^1.0.0]

Birinchi reliz. Qayd sarlavhasidagi fayl nomini ombordagi yo‘lning bosiladigan, tahrirlanadigan zanjiri bilan almashtiradi — Dolphin namunasidagi, qaydlaringiz uchun manzil satri.

### Qo‘shildi

- **Papkaga bosing** — ota papkasi tarkibi ro‘yxati ochiladi: uni qo‘shnisiga almashtirasiz, yo‘lning qolgan qismi o‘zgarmaydi.
- **Papkadan keyingi ajratgichga bosing** — papka Fayl menejerida ko‘rsatiladi va ochiladi, yoki Folder notes boshqaradigan joyda uning papka qaydi ochiladi.
- **Fayl nomiga yoki bo‘sh joyga bosing** va avtomatik to‘ldirish yordamida yo‘l yozing: `/` ichkariga kiradi, <kbd>Backspace</kbd> bir pog‘ona chiqadi, <kbd>Enter</kbd> tasdiqlaydi.
- **Ko‘chirish/nom o‘zgartirish rejimi** xuddi shu amallarni ko‘chirish va nom o‘zgartirishga o‘tkazadi; tekshiruv Obsidian'dagidek bajariladi.
- **<kbd>Ctrl</kbd> yangi tabda ochadi** — ko‘chirish/nom o‘zgartirish rejimida esa qaydni u yerga nusxalaydi.
- **<kbd>F2</kbd> almashtiradi** — matn ichidagi sarlavha va yo‘l paneli o‘rtasida.
- **Ombordan tashqarida** (sukut bo‘yicha o‘chiq): ombor nomi boshqa omborlaringiz, uy papkasi, fayl tizimi ildizi va ulangan disklarni ochadi. U yerda qulfdan chiqarmaguningizcha hech narsa yozilmaydi, qaydni esa ombordan faqat nusxalab chiqarish mumkin, hech qachon ko‘chirib emas.
- **45 til.**

[^1.4.0]: 1.3.0 dan beri o‘zgarishlar: <https://github.com/Gelaende51/obsidian-lure/compare/1.3.0...1.4.0>
[^1.3.0]: 1.2.0 dan beri o‘zgarishlar: <https://github.com/Gelaende51/obsidian-lure/compare/1.2.0...1.3.0>
[^1.2.0]: 1.1.2 dan beri o‘zgarishlar: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.2...1.2.0>
[^1.1.2]: 1.1.1 dan beri o‘zgarishlar: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.1...1.1.2>
[^1.1.1]: 1.1.0 dan beri o‘zgarishlar: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.0...1.1.1>
[^1.1.0]: 1.0.4 dan beri o‘zgarishlar: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.4...1.1.0>
[^1.0.4]: 1.0.3 dan beri o‘zgarishlar: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.3...1.0.4>
[^1.0.3]: 1.0.2 dan beri o‘zgarishlar: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.2...1.0.3>
[^1.0.2]: 1.0.1 dan beri o‘zgarishlar: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.1...1.0.2>
[^1.0.1]: 1.0.0 dan beri o‘zgarishlar: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.0...1.0.1>
[^1.0.0]: Birinchi reliz: <https://github.com/Gelaende51/obsidian-lure/releases/tag/1.0.0>
