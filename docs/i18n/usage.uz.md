<!-- docs/usage.md tarjimasi — holati: commit 7b2691a.
     Mashina tarjimasi (Claude Opus 5), ona tili egalari tekshirmagan.
     Plagin yozuvlari src/lang/translations.ts dan, Obsidian yozuvlari
     esa ilovaning o‘zi yetkazadigan matnlardan olingan, shu bois ular
     ekranda ko‘rinadigan matnga mos keladi. -->

**Buni boshqa tillarda o'qing:** [English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · [Čeština](usage.cs.md) · [Dansk](usage.da.md) · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · [Bahasa Indonesia](usage.id.md) · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · [Norsk](usage.no.md) · [Polski](usage.pl.md) · [Português](usage.pt.md) · [Português (Brasil)](usage.pt-BR.md) · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · **Oʻzbekcha** · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

# Foydalanish

[← README ga qaytish](README.uz.md)

## Sarlavhadagi yo‘l

Eslatmaning ombor ichidagi to‘liq yo‘li ko‘rinish sarlavhasidagi yalang‘och fayl nomini almashtiradi — bu tab qatoridan pastdagi, orqaga/oldinga tugmalarini ham saqlaydigan qator.

Qatordagi ikki narsa bosiladi, va **Jild nomi ro‘yxatni ochadi** qaysi biri nima qilishini hal qiladi:

| | Jild nomi | Undan keyingi ajratgich |
| --- | --- | --- |
| **Yoqilgan** (standart) | O‘sha jildni tahrirlash uchun tanlaydi | Jildni ochadi |
| **O‘chirilgan** | Jildni ochadi | O‘sha jild ichiga tushadi |

“Jildni ochadi” degani — sof Obsidian’da o‘sha bo‘lakni bosish nima qilsa, o‘sha. U yerda tinglayotgan plagin bo‘lmasa, jild Fayl menejeri yon panelida ko‘rsatiladi — ajratib belgilanadi va ichidagini ko‘rsatish uchun yoyiladi.

[Folder notes](obsidian://show-plugin?id=folder-notes) o‘rnatilgan bo‘lsa, xuddi shu bosish o‘rniga o‘sha jildning eslatmasini ochadi. Bu sarlavhadagi yo‘lni egallaydigan yagona jild-eslatma plagini; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) va [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) jild eslatmalarini boshqaradi, ammo yo‘l ustidagi bosishni tinglamaydi, shu sababli ular bilan ajratgich jildni odatdagidek ko‘rsatadi. [Moslik](../compatibility.md#verified-against) bo‘limiga qarang.

Ajratgich **faqat undan oldingi jildda haqiqatan jild eslatmasi bo‘lganda tagiga chiziladi**, shu bois tag chiziq — ochish uchun nimadir borligining va’dasi. Har bir ajratgich baribir bosiladigan bo‘lib qoladi — tag chizig‘i yo‘qi o‘z jildini yon panelda ko‘rsatib yoyadi, buni ko‘rsatkich kursori baribir bildiradi. Tag chiziq ayni paytda jild nomidan ketadi: almashtirish yoqilganda nom ro‘yxatni ochadi, demak uni eslatmaga havola deb belgilash yolg‘on bo‘lardi.

**Nomni o‘zgartirish/ko‘chirish rejimi ikkalasini ham bekor qiladi**, sozlama nima deyishidan qat’i nazar: ko‘chirish tugallanmaguncha qatordagi hech narsa jild ochmaydi, chunki ochish ko‘chirishni tashlab yuborardi. Jild nomlari tahrirlash uchun tanlanadi, ajratgichlar esa pastga tushadi — ikkalasi ham manzilni tanlash usuli — va tag chiziq ochish to‘xtatilganini ko‘rsatish uchun yo‘qoladi.

**Ombor ildizi** — yo‘l bo‘lagi bo‘lmagan yagona bo‘lak. Uning qo‘shnilarini sanab beradigan ota-jildi yo‘q, shuning uchun u o‘rniga [joylar ro‘yxatini](#ombordan-tashqarida-korish) ochadi — boshqa omborlaringiz, shaxsiy jildingiz, fayl tizimi ildizi va ulangan disklar.

## Bo‘lakni bosish: uni qo‘shnisiga almashtirish

Jild nomini bosish matn maydonida **o‘sha jildning nomini** tanlaydi va **bir qavat yuqoridagi** jild — uning ota-jildi — ro‘yxatini ochadi. Yozish yoki bandni tanlash bu jildni qo‘shnisiga almashtiradi va ostidagi hamma narsani tegmasdan qoldiradi, shuning uchun `Projects/2026/Kickoff.md` → `2026` ni bosish → `2025` ni tanlash sizga `Projects/2025/Kickoff.md` ni beradi.

**Eslatma nomini** bosish o‘z jildiga nisbatan xuddi shunday ishlaydi va fayl nomini **kengaytmasi bilan birga** tanlaydi — eslatmaning nomini o‘zgartirish yoki uni boshqa joyga yo‘naltirish odatda buni ham o‘zgartirishni bildiradi.

Jildni bosish allaqachon bitta bo‘lakni tanlagan, shu bois **yana bir bosish** tanlovni butun qatorga kengaytiradi — o‘sha jild *va* ostidagi hamma narsa — va shundan keyin yozish yo‘lning qolganini bir yo‘la almashtiradi. Navigatsiyada ham, nomni o‘zgartirish/ko‘chirish rejimida ham bir xil ishlaydi.

Bu faqat maydonni ochgan bosishning davomi sifatida amal qiladi. Maydondan bir marta foydalangach, u boshqa har qanday matn maydonidek tutadi: bosish kursorni qo‘yadi, ikki marta bosish so‘zni oladi, uch marta bosish qatorni oladi.

Har holda yo‘lning qolgan qismi maydon atrofida ko‘rinib turadi — oldida bo‘laklar, orqasida tanlanmagan matn sifatida — shu bois to‘liq yo‘l sarlavhadan hech qachon yo‘qolmaydi. Tanlovni almashtirish uchun yozing yoki uni saqlab, o‘sha yerdan tahrirlash uchun <kbd>End</kbd> / <kbd>→</kbd> bosing. Ro‘yxat oldindan nima yozilganidan qat’i nazar butun jildni ko‘rsatadi; u faqat siz haqiqatan yozganingizdan keyin filtrlashni boshlaydi.

## Ajratgich orqali pastga tushish

Ajratgichni bosish (**Jild nomi ro‘yxatni ochadi** o‘chirilgan holda) undan oldingi jild ichiga tushiradi: ro‘yxat *o‘sha* jildning tarkibini ko‘rsatadi, yo‘lning qolgan qismi esa maydonda tanlangan holda ochiladi. Jildni tanlash uni yo‘l izidagiga qo‘shadi va darhol keyingi ro‘yxatni ochadi, shu bois sarlavha qatorini tark etmasdan daraxt bo‘ylab pastga bosib borish mumkin.

## Ro‘yxat bandlari haqiqiy fayl menejeri qatorlaridir

Ro‘yxatdagi har bir fayl va jild Fayl menejeridagi o‘z qatoridek tutadi:

- **O‘ng tugma** xuddi shu kontekst menyusini beradi — jildda *Yangi eslatma* / *Yangi papka*, faylda *Yangi tabda ochish* / *Nomini o'zgartirish* / *O'chirish* — shu jumladan boshqa plaginlar fayl menyulariga qo‘shgan bandlarni ham.
- Bandni Obsidian faylni qabul qiladigan istalgan joyga **torting**: havola qo‘yish uchun tahrirlagich ichiga, ko‘chirish uchun Fayl menejeridagi jild ustiga, ochish uchun tab qatoriga.

Menyu so‘zlari Obsidian’ning o‘z tarjimalaridan olinadi, shu bois ular har qanday tilda ilovaning qolgan qismiga mos keladi.

## Yo‘lni yozish

- Bo‘laklardan oldingi yoki keyingi **bo‘sh joyni** bosish butun yo‘l bilan to‘ldirilgan va to‘liq tanlangan matn maydonini ochadi — ustiga yozing yoki joyida tahrirlang. (Fayl nomining o‘zini bosish faqat fayl nomini tanlaydi; yuqoriga qarang.)
- Bo‘laklar izi ko‘rinib turganda yozish oxirgi bo‘lakni joriy jild bilan chegaralangan jonli avtoto‘ldirishga ega kichik maydonga aylantiradi.
- `/` joriy bo‘lakni tasdiqlaydi va uning ichiga tushadi.
- Bo‘sh maydondagi <kbd>Backspace</kbd> ota-jildga bir qadam orqaga chiqadi va uning nomini kursor oxirida turgan holda qayta ochadi.
- <kbd>Enter</kbd> tasdiqlaydi; <kbd>Esc</kbd> yoki boshqa joyni bosish bekor qilib, faylning haqiqiy yo‘liga qaytaradi.

Maydon bezaksiz — quti ham, chegara ham yo‘q — shu bois u yo‘l matnining o‘zi kabi o‘qiladi va yozganingiz sari o‘zi kengayadi.

## Navigatsiya ochiq faylga hech qachon tegmaydi

Standart (navigatsiya) rejimida ochiq eslatmaning nomi **hech qachon** o‘zgartirilmaydi va u ko‘chirilmaydi.

- Mavjud faylga to‘g‘ri keladigan yo‘l uni ochadi.
- Hali mavjud bo‘lmagan yo‘l *“Yangi fayl yaratilsinmi?”* deb so‘raydi. Tasdiqlash yetishmayotgan ota-jildlarni va faylni yaratadi; bekor qilish esa umuman hech nima qilmaydi.

## <kbd>Ctrl</kbd> — yangi tab va ko‘chirish o‘rniga nusxalash

Ro‘yxatdan fayl tanlayotganda yoki yo‘l ustida <kbd>Enter</kbd> bosayotganda <kbd>Ctrl</kbd> (macOS’da <kbd>Cmd</kbd>) ni ushlab turish natijani shu tab o‘rniga **yangi tabga** yuboradi:

| | Oddiy | <kbd>Ctrl</kbd> bilan |
| --- | --- | --- |
| Mavjud faylni tanlash yoki yozish | Shu yerda ochiladi | Yangi tabda ochiladi |
| Mavjud bo‘lmagan yo‘lni yozish | So‘raydi, so‘ng shu yerda ochadi | So‘raydi, so‘ng yangi tabda ochadi |
| Nomni o‘zgartirish/ko‘chirish rejimida yo‘lni tasdiqlash | Eslatmani u yerga **ko‘chiradi** | Uni u yerga **nusxalaydi** va nusxani yangi tabda ochadi |

Modifikator Obsidian’ning o‘z qoidasi bilan o‘qiladi, shu bois u havolada yoki Fayl menejeri qatorida qanday tutsa, xuddi shunday tutadi — o‘rta tugma ham “yangi tab” degani, <kbd>Ctrl</kbd>+<kbd>Alt</kbd> bo‘linish degani, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> esa yangi oyna degani.

Nusxalash ustiga yozishdan bosh tortadi, xuddi ko‘chirish kabi — shu jumladan eslatmaning o‘z yo‘liga ham, u yerda nusxalashning ma’nosi yo‘q.

## Ombordan tashqarida ko‘rish

**Bu standart holatda o‘chirilgan.** Avval sozlamalarda **Tashqi fayllarga kirish** ni yoqing — ombordan tashqarida o‘qish va yozish bu plagin qiladigan, Obsidian’ning o‘zi esa qilmaydigan yagona ishdir, shu bois undan chiqiladigan emas, unga kiriladigan qilib qo‘yilgan. O‘chirilgan holda ombor nomi shunchaki omboringizni Fayl menejerida ko‘rsatadi va bu yerdagi hech narsa undan nariga qaramaydi.

**Ombor nomini** (yoki *Ombor nomini ko‘rsatish* o‘chirilganda 🏠 belgisini) bosish tarkib o‘rniga joylar ro‘yxatini ochadi:

- **Boshqa omborlaringiz**, Obsidian’ning o‘z reyestridan o‘qilgan, eng oxirgi ochilgani birinchi, har biri Obsidian’ning o‘z ombor belgisi ostida — ilova ombor buyruqlari uchun ishlatadigan belgi. Siz allaqachon ochib turgan ombor uy belgisini oladi: bu qator standart holatda boshlanadigan joy, boriladigan joy emas.
- **Shaxsiy jild**, o‘z hisob nomingiz ostida, `~` bilan belgilangan. Lucide’da tilda yo‘q, shu bois buni plaginning o‘zi Lucide’ning 24×24 to‘riga xuddi shu chiziq qalinligida chizadi — bu to‘plamda yetishmaydigan belgi, belgilar orasida o‘tirgan matn harfi emas.
- **Fayl tizimi ildizi**, `root` deb belgilangan — tarjima qilinmagan, chunki har bir tizimda uning nomi shu — `/` emas, chunki u ortidan keladigan ajratgich yonida bo‘sh qadamdek o‘qilardi.
- **Ulangan disklar**, turini aniqlash arzon bo‘lgan joyda har turi uchun alohida belgi bilan: tarmoq resurslari, optik disklar, disketalar va olinadigan tashuvchilar o‘z belgisini oladi; qolgani umumiy disk belgisini oladi. Windows’da disklar umumiy belgi bilan `C:` ko‘rinishida chiqadi — hajm nomlari va aniq turlari WMI talab qiladi, bu esa ataylab qilinmagan.

Boshqa omborni tanlash **Obsidian’ni unga o‘tkazmaydi.** Ochib qo‘yganlaringizning hammasi ochiq qoladi; yo‘l shunchaki o‘sha yerdan ko‘rishni boshlaydi. Uni yon paneldagi ombor almashtirgichiga qoldirmay, yo‘l qatoriga qo‘yishning butun ma’nosi shunda.

### Tashqarida turganingizda

Yo‘l **siz tanlagan joydan boshlanadi**, mashinaning katalog tuzilishidan emas — `Archive` ni tanlang va qator `Archive / notes / …` bo‘lib o‘qiladi, `/home/siz/Vaults/Archive/notes/…` emas. Bosh bo‘lak o‘zi nima ekaniga qarab belgi olib yuradi (ombor, shaxsiy jild, disk), va <kbd>Backspace</kbd> fayl tizimining qolganiga chiqib ketmasdan o‘sha yerda to‘xtaydi. *Ombor nomini ko‘rsatish* o‘chirilganda o‘sha bo‘lak faqat belgidan iborat bo‘ladi — sozlama qatorning bosh bo‘lagi haqida, u qaysi omborni nomlashidan qat’i nazar, faqat sizniki haqida emas.

Yo‘l qatori omboringizdan tashqariga ishora qilib turgan vaqtda **xato rangi bilan ramkalanadi** — nomni o‘zgartirish rejimi chizadigan o‘sha halqa bilan. U bir lahzani emas, davom etayotgan holatni bildiradi: u turganda Obsidian’ning o‘z ishlov berishlaridan hech biri qator ko‘rsatayotgan narsaga tegishli bo‘lmaydi va siz boshqacha demaguningizcha yozish qulflangan bo‘ladi.

Qolgan jihatlarda ko‘rish ichkaridagidek ishlaydi: bo‘laklar, ajratgichlar, yozish, avtoto‘ldirish, chiqish uchun <kbd>Backspace</kbd>. O‘sha ko‘rinuvchanlik qoidalari ham amal qiladi, shu bois qo‘llab-quvvatlanmaydigan kengaytmalar baribir Obsidian’ning *Barcha kengaytmalarni aniqlash* ini talab qiladi, nuqtali fayllar esa baribir shu plaginning sozlamasini talab qiladi.

**O‘ng tugma va tortish** ro‘yxat bandlarida u yerda ishlamaydi — bular Fayl menejerining o‘z ishlovchilari va ularga ombor taniydigan fayl kerak.

### Ombordan tashqariga yozish

Yozadigan hamma narsa **standart holatda qulflangan**. Qator omboringizdan tashqariga ishora qilib turgan vaqtda sarlavhadagi nom o‘zgartirish tugmasi yonida **qulf** paydo bo‘ladi; uni bosish qulfni ochadi va u qizaradi, qator atrofidagi halqaga mos ravishda.

Ruxsat **joyga beriladi, lahzaga emas**: u bir joyda ishlayotganda qiladigan hamma narsangizdan omon o‘tadi — ko‘chirishni tugatish, maydondan tashqariga bosish, fayl ochish — va siz ro‘yxatdan boshqa ombor, disk yoki ildiz tanlaganingizda, qator ombor fayliga qaytganda yoki qulfni yana bosganingizda tugaydi. Shunday qilib bitta jild ichidagi bir qator ko‘chirishlar bitta bosish talab qiladi, har fayl uchun bittadan emas.

Qulf ochiq bo‘lganda yo‘l qatori u yerda ichkaridagidek tutadi:

| Harakat | Natija |
| --- | --- |
| Mavjud bo‘lmagan nomni yozing, <kbd>Enter</kbd> | Ichkaridagi bilan bir xil “yaratilsinmi?” so‘rovi; yetishmayotgan ota-jildlar ham yaratiladi. Kengaytmasiz nom `.md` bo‘ladi, xuddi ichkaridagidek |
| Nomni o‘zgartirish/ko‘chirish rejimi, yangi nom yozing | Qator ko‘rsatayotgan faylning nomini o‘zgartiradi. Kengaytmasiz nom faylning o‘z kengaytmasini saqlaydi — bu yerda bitta jild har xil turdagi fayllarni saqlaydi va nom o‘zgartirish `.png` ni jimgina `.md` ga aylantirmasligi kerak |
| Nomni o‘zgartirish/ko‘chirish rejimi, boshqa joyni ko‘ring, **shu nomni saqlash** ni tanlang | Uni o‘sha yerga hozirgi nomi bilan ko‘chiradi |
| Ikkalasida ham <kbd>Ctrl</kbd> ni ushlab turing | Ko‘chirish o‘rniga nusxalaydi va nusxani yangi tabda ochadi |

Qulflangan holatda bularning hammasi sodir bo‘lish o‘rniga nima to‘sayotganini xabar qiladi. Ikkala holatda ham hech narsa ustiga yozilmaydi: allaqachon mavjud nishon rad etiladi va bu rad etish poygada yutqazishi mumkin bo‘lgan tekshiruv emas, fayl tizimining o‘zi tomonidan (`COPYFILE_EXCL`, eksklyuziv yaratish). Fayl tizimlari orasidagi ko‘chirish — USB’dan, tarmoq resursidan — nusxala-so‘ng-o‘chir usuliga tushadi va asl nusxa faqat nusxa yetib borgandan keyin olib tashlanadi.

**Qulf ochmaydigan bir narsa: eslatmani omboringizdan *tashqariga* ko‘chirish.** `fileManager` faylni bu chegaradan ortga kuzatib bora olmaydi, shu bois eslatmaga ishora qiluvchi har bir havola jimgina uzilardi va Obsidian uni shunchaki yo‘qolgan deb ko‘rardi. <kbd>Ctrl</kbd> ni ushlab turish uning o‘rniga uni u yerga nusxalaydi, bunda esa bunday muammo yo‘q, va bildirishnomada shu aytiladi. Teskari yo‘nalish — tashqi faylni omborga *kiritish* — hali ulanmagan.

### Tashqi faylni ochish

Obsidian tahrirlagichi faqat ombor ichidagi fayllar bilan ishlaydi, shu bois tashqi faylni havolalar, teskari havolalar va qolgan hamma narsa bilan haqiqiy eslatma sifatida ochib **bo‘lmaydi** — bu ilovaning chegarasi, shu plaginning emas. Bittasini tanlash o‘rniga **ko‘rib chiqishni** ochadi, siz boshqacha demaguningizcha faqat o‘qish uchun:

| Turi | Qanday ko‘rsatiladi |
| --- | --- |
| `.md`, `.markdown` | Chizilgan Markdown |
| Rasm, audio, video, PDF | O‘z ijrochisi/ko‘ruvchisi |
| Boshqa har qanday **matn** fayli (`.json`, `.css`, `.log`, `.txt`, …) | So‘zma-so‘z oddiy matn |
| Ko‘ruvchisi yo‘q ikkilik formatlar (`.zip`, `.exe`, …) | *Tashqarida ochish* ga topshiriladi |

Ko‘ruvchida faylning ikki o‘qilishi bor va ular bir-birini istisno qilgani uchun faqat siz **o‘tadigan** biri ko‘rsatiladi:

| | Nima qiladi | Nima uchun standart |
| --- | --- | --- |
| **Markdown sifatida ko‘rish** | Faylni eslatma sifatida chizadi, faqat o‘qish uchun | `.md`, `.markdown` |
| **Matn sifatida tahrirlash** | Manba, tahrirlanadigan | qolgan hamma narsa |

Ombordan tashqarida **Matn sifatida tahrirlash** ayni paytda faqat-o‘qishni olib tashlaydigan bosishdir — rejim va ruxsat o‘ylab ko‘riladigan ikki tugma emas, bitta harakat. U **bosish faqat-o‘qishni olib tashlaydigan har safar** qizil rangga bo‘yaladi, joyida tahrirlashni tayyorlayapsizmi yoki to‘g‘ridan-to‘g‘ri chizilgan ko‘rinishdan kelyapsizmi; ombor ichida ochadigan narsa yo‘q, shu bois u oddiy bo‘lib qoladi. **Markdown sifatida ko‘rish** yengil urg‘u tusini oladi — Obsidian tanlangan matnga beradigan o‘sha tus — bu esa uni harakatga chaqiriq emas, ortga qaytish yo‘li deb belgilaydi.

Tugma xom rejimni emas, *tahrirlashni* kuzatgani uchun matn ko‘rinishida faqat o‘qish holatida turgan fayl ham baribir **Matn sifatida tahrirlash** ni taklif qiladi: uni tayyorlaydigan bosish shu. Hech qachon yozib bo‘lmaydigan fayl — qisqartirilgan yoki o‘qib bo‘lmaydigan — buning o‘rniga **Matn sifatida ko‘rish** deydi, chunki bosish bera oladigan yagona narsa shu.

Standart qiymatlar so‘zma-so‘z emas, foydali tarzda tanlangan: shell skriptidagi `#` sarlavha emas, izoh, shu bois `.log` ni Markdown sifatida chizish uni jimgina yutib yuborardi. Har qaysi standart qiymat har bir fayl uchun bekor qilinishi mumkin va tanlov varaq tarixiga tushadi, shu bois orqaga/oldinga va qayta ochilgan ish maydoni uni saqlaydi — ko‘p eslatmalar `.txt` fayllarda yashaydi, ko‘p `.md` fayllarni esa manba sifatida o‘qish osonroq.

**Omboringizdagi fayllar darrov tahrirlanadi**, hech qanday qulf ochmasdan: *Matn sifatida tahrirlash* haqiqiy tahrirlagich bo‘lib, siz yozgan sari orqaga yozadi.

**Tahrirlash almashinuv orqali eslab qolinadi.** *Markdown sifatida ko‘rish* ga o‘tish uni to‘xtatib turadi — statik chizmada yoziladigan joy yo‘q, Live Preview esa Obsidian’ning o‘z tahrirlagichini talab qiladi, u esa faqat ombor ichidagi fayllar uchun mavjud — shu bois siz u yerda turganingizda hech narsa tahrirlayapsiz demaydi. *Matn sifatida tahrirlash* ga qaytish to‘xtagan joyingizdan davom ettiradi.

**Ombordan tashqaridagi fayllar faqat o‘qish uchun ochiladi va *Matn sifatida tahrirlash* buni olib tashlaydi.** O‘sha bosishning o‘zi butun darvoza: u sodir bo‘lmaguncha, u yerda hech narsa yozilmaydi. Undan keyin fayl siz yozgan sari saqlanadi, xuddi ombordagidek; holat qatori esa qulfdan qalamga o‘zgaradi. Qulf ochilishi o‘sha bitta tabdagi o‘sha bitta faylni qamrab oladi — boshqa faylga o‘tish qayta qulflaydi va u ataylab tab tarixida saqlanmaydi, shu bois qayta ochilgan ish maydoni hech qachon siz ochganingizni eslamaydigan tizim fayliga yozish allaqachon tayyorlangan holda qaytmaydi.

**Qisqartirilgan fayllar baribir faqat o‘qish uchun qoladi** — ekrandagini saqlash chegaradan nariga o‘tgan hamma narsani tashlab yuborardi, shu bois tugma taklif etilib rad etilgandan ko‘ra umuman taklif etilmaydi. Xuddi shu narsa o‘qib bo‘lmagan faylga ham tegishli: bo‘sh oynadan boshqa orqaga yoziladigan narsa yo‘q.

Agar yozish muvaffaqiyatsiz tugasa — faqat o‘qish uchun ulangan disk, sizga tegishli bo‘lmagan fayl — tizimning o‘z sababi bildirishnomada ko‘rsatiladi.

Juda katta fayllar qisqartirilgan holda ko‘rsatiladi va holat qatori buni o‘zingiz aniqlashingizga qoldirmay aytadi — tugmalar ortidan emas, boshqa shartlar yonida, chunki bu ham fayl haqidagi qolganlari kabi bir dalil. Chegaralar taxmin qilinmay, jonli chizuvchiga nisbatan o‘lchanadi — bitta oynada bir megabayt matnni joylashtirish Obsidian’ning chizish jarayonini darrov o‘ldiradi, Markdown esa har bayt uchun oddiy matndan bir necha barobar qimmatga tushadi, shu bois ikkovining chegaralari alohida va bitta ulkan qator fayl umuman kichik bo‘lganda ham qisqartiriladi.

**Holat qatorlari — yorliqlar, tushuntirish esa — qalqib chiquvchi maslahat.** Har bir qator nima rost ekanini imkon qadar kam so‘z bilan aytadi — *Ombordan tashqarida*, *Bu fayl turi uchun tahrirlagich yo‘q*, *Qisqartirildi — fayl juda katta* — chunki yonidagi tugmalar fayl qanday holatda ekanini allaqachon aytib turibdi. Ustiga kursor olib borish jumlani beradi: nega Obsidian uni eslatma sifatida ocholmaydi, bu fayl turiga aks holda nima bo‘lardi, qisqartirish sizga nimaga tushadi.

Bu omboringiz **ichidagi** fayllarga ham tegishli. Obsidian ko‘rinishi yo‘q har qanday kengaytmani to‘g‘ridan-to‘g‘ri ish stolining standart ilovasiga topshiradi — shu bois omboringizdagi `.txt` yoki `.json` Obsidian’ni butunlay tark etardi. Endi ular xuddi shu ko‘ruvchida, to‘q sariq halqa bilan ochiladi, chunki “uni Obsidian’da och” siz so‘ragan narsa edi — va ombor fayllari bo‘lgani uchun ular u yerda hech qanday qulf ochmasdan tahrirlanadi. Ko‘ruvchisi yo‘q ikkilik fayllar Obsidian xatti-harakatini saqlaydi; ko‘rsatadigan narsa yo‘q.

Ko‘rib chiqish **siz turgan tabda** ochiladi, shu bois orqaga/oldinga sizni kelgan eslatmangizga qaytaradi; yangi tab uchun boshqa hamma joydagidek <kbd>Ctrl</kbd> ni ushlab turing. Sarlavha qatori tashqi fayl ochiq turganda uning yo‘lini ko‘rsatishda davom etadi, shu bois o‘sha yerdan ko‘rishni davom ettirishingiz mumkin.

Tarkib ustidagi tinch qator chiqish yo‘llarini taklif qiladi:

- **_(ombor)_ ichida ochish** — fayl boshqa omborlaringizdan biriga tegishli bo‘lganda ko‘rsatiladi. Uni Obsidian’ning o‘z URI ishlovchisiga topshiradi, u esa o‘sha ombor oynasini eslatma bilan birga haqiqiy tahrirlanadigan eslatma sifatida ochadi. Bu oyna aynan qanday bo‘lsa shundayligicha qoladi; ostingizda hech narsa almashmaydi.
- **Markdown sifatida ko‘rish** / **Matn sifatida tahrirlash** — ikki o‘qilish; ikkinchisi ombordan tashqarida faqat-o‘qishni ham olib tashlaydi.
- **Tashqarida ochish** — faylni ish stolingizning standart ilovasiga topshiradi, shu jumladan bu ko‘ruvchi ko‘rsata olmaydigan ikkilik formatlarni ham.

Omboringizdan tashqarida hech narsa avval *Matn sifatida tahrirlash* ni bosmaguningizcha yozilmaydi. To‘liq ma’lumot uchun README’ning [Ombordan tashqarida](README.uz.md#ombordan-tashqarida) bo‘limiga qarang.

## Ikki ogohlantirish rangi

| | Qachon | Nimani bildiradi |
| --- | --- | --- |
| Yo‘l qatoridagi **qizil** halqa | Qator omboringizdan tashqariga ishora qiladi | Obsidian u yerdagini eslatma sifatida ocholmaydi va siz qulfni ochmaguningizcha u yerda hech narsa yozilmaydi. |
| Yo‘l qatoridagi **to‘q sariq** halqa, ro‘yxatdagi to‘q sariq bandlar | Fayl — Obsidian’da ko‘rinishi yo‘q matn turi | Ehtiyot bo‘ling. Obsidian uni ish stolingizning standart ilovasiga topshirardi; plagin esa uni shu yerda ko‘rsatadi. |

**Ikkovi mustaqil va ikkalasi bir vaqtda amal qilishi mumkin** — tashqi `.json` ham omboringizdan tashqarida, *ham* Obsidian’da tahrirlagichi yo‘q tur. Ko‘ruvchida ular alohida qator bo‘lib chiqadi, har biri faqat o‘z dalilini aytadi. Yo‘l qatorida ikkalasi ham amal qiladigan joyda qizil ustun keladi, chunki ikki halqa faqat shovqin bo‘lardi.

To‘q sariq daraja ataylab tor qilingan. Ro‘yxatga olingan turlar (Markdown, canvas, rasmlar, PDF, audio, video) tegishlicha ishlanadi va hech narsa olmaydi. Ikkilik fayllar ham hech narsa olmaydi — `.zip` ni tasodifan chalkashtirib yubormaysiz. Qolgani aynan xavfning o‘zi: **Barcha kengaytmalarni aniqlash** ko‘rinadigan qilib qo‘ygan `.json`, `.css` yoki `.log`.

Ikkalasi ham amal qiladigan joyda qizil ustun keladi; bir vaqtda ikki halqa faqat shovqin bo‘lardi.

## Ko‘chirish/nom o‘zgartirish rejimi

Sarlavhaning eng o‘ng chekkasidagi qalam tugmasi — ko‘rinish rejimi tugmasi yonida, o‘z tugmalar bilan bir xil o‘lchamda — ko‘chirish/nom o‘zgartirish rejimini yoqib-o‘chiradi. Shunda sarlavha qatori urg‘u rangi bilan ramkalanadi, xuddi Fayl menejerida nom o‘zgartirgandek. Xuddi shu bosishlar va tugmalar endi Obsidian’ning `fileManager.renameFile` orqali ko‘chirish yoki nom o‘zgartirishni tasdiqlaydi, shu bois eslatmaga barcha havolalar ergashadi.

Nom o‘zgartirayotganda:

- Joriy fayl nomi har bir jildning ro‘yxatiga qadab qo‘yiladi, shu bois eslatmani nomini o‘zgartirmasdan ko‘chirish bitta bosishdir.
- Nishon jildda allaqachon band bo‘lgan nomlar xiralashtiriladi, ammo baribir tanlanadi.
- Kiritish Obsidian’ning o‘z nom o‘zgartirish qoidalariga nisbatan jonli tekshiriladi — xuddi shu belgi to‘plamlari, xuddi shu xabarlar, fayl daraxtida nom o‘zgartirganda chiqadigan xuddi shu qizil maslahat — shu bois noqonuniy yoki to‘qnashuvchi nom siz yozgan sari belgilanadi va tasdiqlanmaydi.
- Sarlavha qatoridan tashqariga bosish yoki sarlavhaning fokusni yo‘qotishi nom o‘zgartirish rejimini tugatadi.

## Ikkala nom o‘zgartirish uchun bitta tugma

Nom o‘zgartirish buyrug‘i (standart holatda <kbd>F2</kbd> yoki siz qayta biriktirgan nima bo‘lsa) Obsidian’ning ichki sarlavhani o‘zgartirishi bilan shu plaginning to‘liq yo‘li tanlangan sarlavha yo‘l qatori o‘rtasida **navbatlashadi**. Agar Obsidian’ning ichki sarlavhasini o‘chirib qo‘ygan bo‘lsangiz, sarlavha yo‘l qatori yagona nishonga aylanadi, shu bois tugma hech qachon behuda ketmaydi.

Bu tugmani tortib olish o‘rniga `workspace:edit-file-title` buyrug‘ini o‘rab ishlaydi, shu bois tezkor tugmani qayta biriktirish ham, buyruqni palitradan ishga tushirish ham o‘zgarishsiz ishlaydi.

## Ro‘yxat bandlari qanday ranglanadi

| Rang | Ma’nosi |
| --- | --- |
| **Binafsha** | Eslatma (`.md`, `.markdown`) — Obsidian eslatma sifatida ochadigan narsa, aralash tarkibli jilddan ajratib olingan |
| **To‘q sariq** | Obsidian’da ko‘rinishi yo‘q matn turi; [ogohlantirish ranglariga](#ikki-ogohlantirish-rangi) qarang |
| **Xira** | Omboringizdan tashqarida, shu bois omborning o‘z ishlov berishi amal qilmaydi |
| **Ko‘k** | Siz turgan qaydnoma. Ko‘rib chiqishda bu uning o‘z bandi; nom o‘zgartirish/ko‘chirish rejimida uning o‘rnida *shu nomni saqlash* bandi turadi — ikkalasida ham o‘sha qaydnoma |
| **Kulrang** | Faqat nom o‘zgartirish/ko‘chirish rejimida: nom band. Baribir tanlanadi — tanlash maydonni to‘ldiradi, u yerda tekshiruv to‘qnashuvni belgilaydi |

## Ko‘rinuvchanlik qoidalari

- Qo‘llab-quvvatlanmaydigan kengaytmali fayllar ro‘yxatlarda faqat Obsidian’ning **Barcha kengaytmalarni aniqlash** sozlamasi yoqilgan bo‘lsa ko‘rinadi.
- Ro‘yxat ko‘pi bilan 100 ta bandni ko‘rsatadi — Obsidian’ning o‘z chegarasi. Jildda ko‘proq bo‘lsa, oxirgi qator nechtasi chiqarilmaganini aytadi; ro‘yxatni toraytirish uchun yozishda davom eting.
- Nuqtali fayllar va jildlar faqat shu plaginning **Yashirin fayllarni ko‘rsatish** sozlamasi yoqilgan bo‘lsa ko‘rinadi.
- **Ustiga yozishdan himoya ko‘rinuvchanlikdan qat’i nazar bir xil ishlaydi** — yashirin fayl baribir uning ustiga yozishingizga yo‘l qo‘ymaydi.

## Qisqa qo‘llanma

| Siz xohlaysiz… | Buni qiling |
| --- | --- |
| Jildni ochish (uning eslatmasini yoki uni ko‘rsatish) | O‘sha jilddan **keyingi** ajratgichni bosing |
| Jildni qo‘shnisiga almashtirish | O‘sha jild nomini bosing, so‘ng yozing yoki tanlang |
| Eslatmaning nomini o‘zgartirish yoki uni qayta yo‘naltirish | Eslatma nomini bosing — kengaytmasi bilan birga |
| Jild tarkibini ko‘rish | O‘sha jild nomini bosing; ro‘yxat uning ota-jildini ko‘rsatadi, shu bois xohlagan jildingizdan **pastdagi** jildni bosing |
| Jildni va ostidagi hamma narsani qayta yozish | O‘sha jild nomini **ikki marta bosing**, so‘ng yozing |
| Yo‘lni jilddan pastga qarab tahrirlash | O‘sha jild nomini bosing, so‘ng tanlovni olib tashlash uchun <kbd>End</kbd> yoki <kbd>→</kbd> |
| Yo‘lini yozib faylga o‘tish | Fayl nomini yoki bo‘sh joyni bosing, yozing, <kbd>Enter</kbd> |
| Faylni yangi tabda ochish | Tanlayotganda <kbd>Ctrl</kbd> yoki <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| Eslatmani ko‘chirish o‘rniga biror joyga nusxalash | Qalam, so‘ng nishonni tanlayotganda yoki tasdiqlayotganda <kbd>Ctrl</kbd> |
| Mavjud bo‘lmagan yo‘lda eslatma yaratish | Yo‘lni yozing, <kbd>Enter</kbd>, so‘rovni tasdiqlang |
| Yozayotganda bir daraja pastga tushish | `/` yozing |
| Yozayotganda bir daraja yuqoriga chiqish | Bo‘sh maydonda <kbd>Backspace</kbd> |
| Ochiq eslatmani ko‘chirish yoki nomini o‘zgartirish | Qalamni bosing, so‘ng yuqoridagidek ko‘ring yoki yozing |
| Nomini o‘zgartirmasdan ko‘chirish | Qalam → nishon jild ichiga bosing → qadab qo‘yilgan joriy fayl nomini tanlang |
| Joyida nomini o‘zgartirish | <kbd>F2</kbd> ikki marta (birinchi bosish ichki sarlavhaga, ikkinchisi sarlavha qatoriga) |
| Boshqa omborga, shaxsiy jildga yoki diskka o‘tish | Ombor nomini bosing |
| Ombordan tashqaridagi faylni ochish | Ombor nomi → joyni tanlang → ko‘ring → faylni tanlang (*Matn sifatida tahrirlash* gacha faqat o‘qish) |
| Har qanday narsani bekor qilish | <kbd>Esc</kbd> yoki sarlavha qatoridan tashqariga bosing |

## Sozlamalar

| Sozlama | Variantlar | Standart | Nima qiladi |
| --- | --- | --- | --- |
| **Tekislash** | Chapga / Markazga / O‘ngga | Chapga | Yo‘l sarlavha qatorida qayerda turishi. *Markazga* Obsidian’ning klassik ko‘rinishiga mos keladi. |
| **Ajratgich** | Istalgan belgi | `/` | Bo‘laklar orasida chiziladigan ajratgich. Matn maydoni oldida bir bosishli oltita tayyor variant (`/ > ▸ › \ •`) turadi. |
| **Ombor nomini ko‘rsatish** | Yoqilgan / O‘chirilgan | Yoqilgan | Omborning o‘zi birinchi yo‘l bo‘lagi bo‘ladimi. O‘chirilganda o‘sha bo‘lak yo‘qolmay, 🏠 belgisiga aylanadi, shu bois yo‘l baribir bosiladigan joydan boshlanadi. |
| **Jild nomi ro‘yxatni ochadi** | Yoqilgan / O‘chirilgan | Yoqilgan | Jild nomi va undan keyingi ajratgich nima qilishini almashtiradi — [yuqoridagi jadvalga](#sarlavhadagi-yol) qarang. [Folder notes](obsidian://show-plugin?id=folder-notes) bilan ajratgich jild eslatmalarini ochadi. Nom o‘zgartirish/ko‘chirish rejimida hech qachon amal qilmaydi. |
| **Yashirin fayllarni ko‘rsatish** | Yoqilgan / O‘chirilgan | O‘chirilgan | Nuqtali fayllar va jildlar ro‘yxatlarda ko‘rsatiladimi. Ustiga yozishdan himoya baribir amal qiladi. |
| **Tashqi fayllarga kirish** | Yoqilgan / O‘chirilgan | **O‘chirilgan** | Ombor nomi joylar ro‘yxatini ochadimi. O‘chirilganda plagindagi hech narsa bu ombordan nariga qaramaydi. |

## Belgilarni almashtirish

Lure uchta belgi chizadi: ombor ildizi belgisi (**Ombor nomini ko‘rsatish** o‘chirilganda), nom o‘zgartirish/ko‘chirish tugmasi va ombordan tashqariga yozishni nazorat qiluvchi qulf. Ularning barchasini mavzu yoki CSS parchasidan almashtirish mumkin — almashtiruvchi belgini o‘rnating va birga kelganini bitta qoidada yashiring:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* Qulfning ikki holati bor; `.is-active` — ochiq holati. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}

.lure-unlock-btn.is-active {
	--lure-icon-glyph: "🔓";
}
```

`--lure-icon-glyph` CSS `content` da amal qiladigan har qanday narsani qabul qiladi, shu bois `url(...)` rasm uchun ham matn belgisi yoki emoji kabi ishlaydi. Lucide belgisini saqlab, o‘z belgingizni uning yoniga chizish uchun `--lure-icon-svg` ga tegmang.
