<!-- CHANGELOG.md tarjimasi — holat: commit 973105b.
     Mashina tarjimasi (Claude Opus 5), ona tili egalari tomonidan
     tekshirilmagan. Tuzatishlar mamnuniyat bilan qabul qilinadi;
     hal qiluvchi nusxa — inglizcha CHANGELOG. -->

[English](../../CHANGELOG.md) · [العربية](CHANGELOG.ar.md) · [አማርኛ](CHANGELOG.am.md) · [Беларуская](CHANGELOG.be.md) · [বাংলা](CHANGELOG.bn.md) · [Català](CHANGELOG.ca.md) · [Čeština](CHANGELOG.cs.md) · [Dansk](CHANGELOG.da.md) · [Deutsch](CHANGELOG.de.md) · [Ελληνικά](CHANGELOG.el.md) · [Español](CHANGELOG.es.md) · [فارسی](CHANGELOG.fa.md) · [Suomi](CHANGELOG.fi.md) · [Français](CHANGELOG.fr.md) · [Gaeilge](CHANGELOG.ga.md) · [עברית](CHANGELOG.he.md) · [Magyar](CHANGELOG.hu.md) · [Bahasa Indonesia](CHANGELOG.id.md) · [Italiano](CHANGELOG.it.md) · [日本語](CHANGELOG.ja.md) · [ქართული](CHANGELOG.ka.md) · [ភាសាខ្មែរ](CHANGELOG.kh.md) · [한국어](CHANGELOG.ko.md) · [Latviešu](CHANGELOG.lv.md) · [Bahasa Melayu](CHANGELOG.ms.md) · [नेपाली](CHANGELOG.ne.md) · [Nederlands](CHANGELOG.nl.md) · [Norsk](CHANGELOG.no.md) · [Polski](CHANGELOG.pl.md) · [Português](CHANGELOG.pt.md) · [Português (Brasil)](CHANGELOG.pt-BR.md) · [Română](CHANGELOG.ro.md) · [Русский](CHANGELOG.ru.md) · [संस्कृतम्](CHANGELOG.sa.md) · [Slovenčina](CHANGELOG.sk.md) · [Shqip](CHANGELOG.sq.md) · [Српски](CHANGELOG.sr.md) · [Svenska](CHANGELOG.sv.md) · [ไทย](CHANGELOG.th.md) · [Türkçe](CHANGELOG.tr.md) · [Українська](CHANGELOG.uk.md) · **Oʻzbekcha** · [Tiếng Việt](CHANGELOG.vi.md) · [简体中文](CHANGELOG.zh.md) · [繁體中文](CHANGELOG.zh-TW.md)

# O‘zgarishlar jurnali

Lure'ning har bir relizi, eng yangisi birinchi. Oxirgi relizdan beri qo‘shilganlar *Chiqarilmagan* bo‘limida. Versiyalar reliz teglariga mos ravishda `v` prefiksisiz yoziladi.

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
