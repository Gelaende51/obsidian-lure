<!-- README.md tarjimasi — holat: commit f133f41.
     Mashina tarjimasi (Claude Opus 5), ona tili egalari tomonidan
     tekshirilmagan. Tuzatishlar mamnuniyat bilan qabul qilinadi;
     hal qiluvchi nusxa — inglizcha README. -->

[English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · **Oʻzbekcha** · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

[Obsidian](https://obsidian.md) uchun plagin: u qayd sarlavha panelidagi fayl nomini ombordagi to‘liq yo‘lning bosiladigan va tahrirlanadigan zanjiriga (breadcrumb) aylantiradi — xuddi [Dolphin](https://apps.kde.org/dolphin/) fayl menejeridagi manzil satri kabi.

![Papkadan keyingi ajratgichni bosish: kursor uning ustida turibdi, Fayl menejeri esa o‘sha papkani ko‘rsatib, ochib qo‘ygan](../images/breadcrumb.png)

Obsidian 1.8.7+ · faqat kompyuter versiyasi · AGPL-3.0

## Sun'iy intellekt haqida ma'lumot

- **Agent** — **Claude Opus 5** va **Claude Sonnet 5** (Anthropic, Claude Code orqali): TypeScript kodini, CSS'ni, barcha 45 ta tarjima to‘plamini va hujjatlarni yozgan. Tarjimalar mashina tomonidan yaratilgan va ona tili egalari tomonidan tekshirilmagan.
- **Sarf** — 2026-yil 3-avgust – 6-sentabr, 22 ta seans, \~13 378 ta javob: \~16,3 mln token yaratilgan, \~62,3 mln yuborilgan, \~4 245,1 mln keshdan qayta o‘qilgan (jami \~4 323,6 mln).
- **Manba** — model boshqalar e'lon qilgan ochiq manbali kod, hujjatlar va hamjamiyat yozuvlaridan o‘rgangan. Asosiy xizmat o‘shalarga tegishli.
- **Muallif** — Vault51: har bir imkoniyatni belgilagan, har bir iteratsiyani jonli omborda sinab ko‘rgan, tuzatishlarni yo‘naltirgan va barcha natijani ko‘rib chiqqan.

## Imkoniyatlar

- **Papkaga bosing** — uning *ota papkasi* tarkibi ro‘yxati ochiladi: bitta papkani qo‘shnisiga almashtirasiz, yo‘lning qolgan qismi o‘zgarmaydi. Qayd nomi ham xuddi shunday ishlaydi, faqat nom kengaytmasiz belgilanadi.
- **Papkadan keyingi ajratgichga bosing** — o‘sha papka Fayl menejerida ko‘rsatiladi va ochiladi. Bitta sozlama bu ikki vazifani o‘rin almashtiradi.
- **Istalgan yozuvni o‘ng tugma bilan bosing yoki torting** — Fayl menejerining o‘z kontekst menyusi, bandma-band, va uning sudrash xatti-harakati. Ombordan tashqaridagi yo‘llar uchun ham xuddi shunday menyu quriladi — tizim savati orqali ishlaydigan *Delete* (o‘chirish) bandigacha.
- **Fayl nomiga yoki bo‘sh joyga bosing** va avtomatik to‘ldirish yordamida yo‘l yozing. `/` ichkariga kiradi, <kbd>Backspace</kbd> bir pog‘ona chiqadi, <kbd>Enter</kbd> tasdiqlaydi — hali mavjud bo‘lmagan yo‘l esa shunchaki yaratiladi va u qayerga joylashgani haqida bildirishnoma chiqadi.
- **Ro‘yxat siz turgan yozuv ustida ochiladi**, strelkalar yoki sichqoncha bilan u bo‘ylab yurganingizda maydon siz ko‘rsatayotgan narsa bilan to‘ladi. Ro‘yxatning istalgan chetidan chiqib ketsangiz, yozganingiz qaytadi; kursorni ro‘yxatdan olib ketsangiz, belgilash siz turgan joyga qaytadi.
- **Papkadagi qalam tugmasi** xuddi shu amallarni ko‘chirish/nom o‘zgartirishga o‘tkazadi; tekshiruv Obsidian'dagidek bajariladi.
- **<kbd>Ctrl</kbd> ni bosib turing** — yangi tabda ochiladi, ko‘chirish/nom o‘zgartirish rejimida esa qayd u yerga ko‘chirilish o‘rniga nusxalanadi. Qayd nomi va papka bo‘laklari Fayl menejeridagi qatorlari kabi xuddi shu modifikator klavishlarni qabul qiladi va sudraladi.
- **Nomlar yozayotganingizda o‘zini to‘ldiradi** — papkadagi nomlar bir-biriga mos kelgan qism kursordan keyin belgilangan holda paydo bo‘ladi; yozganingiz sari u harfma-harf yutiladi, <kbd>Tab</kbd> yoki <kbd>→</kbd> uni butunlay qabul qiladi, <kbd>Backspace</kbd> esa qaytarib oladi. Ro‘yxat taklif qilingan narsaga emas, siz yozganingizga qarab saralashda davom etadi.
- **<kbd>Tab</kbd> qobiq kabi to‘ldiradi**: u yozganingizni o‘sha papkadagi nomlar mos kelgan joygacha davom ettiradi, mos kelmasa ulardan biri tomon bir qadamdan yuradi va faqat bitta nom qolgandagina papkaga kiradi. Yo‘l oxiridan o‘tgach esa belgilashni kengaytiradi: nom, kengaytmali nom, ombordan boshlangan yo‘l, tizim ildizidan boshlangan yo‘l. <kbd>Shift</kbd>+<kbd>Tab</kbd> xuddi shu yo‘lni teskari yuradi — qaytarganini o‘chirmay, belgilab qo‘yadi — boshidan o‘tgach esa yo‘l bo‘ylab yuqoriga chiqishda davom etadi, so‘ng aylanib tizim yo‘liga keladi. Qaysi tomonga bo‘lmasin, to‘liq aylana siz tuzgan yo‘lga qaytaradi.
- **Nusxa olish uchun o‘ng tugma** — nom uchun ikki marta, undan o‘ngdagi hamma narsa uchun uch marta, bo‘sh joyda esa butun yo‘l yoki tizim yo‘li uchun.
- **Qaydni qatordagi papka ustiga torting** — u havolalari bilan birga o‘sha yerga ko‘chadi. Manzil allaqachon ekranda, shuning uchun fayl daraxti bo‘ylab sayohat o‘rniga bitta sudrash kifoya. Ildiz uchun ombor nomi ham ishlaydi. Belgilangan bir nechta element birgalikda ko‘chadi, taklif qilinganni qabul qila olmaydigan papka esa keyinroq xato bermaydi — oldindan hech narsa ko‘rsatmaydi.
- **Matnni qatorga tashlab, uni yozib qo‘ying** — papka yoki ombor nomi ustiga tashlasangiz, u yerda yangi qaydga nom berasiz; qaydning o‘z nomi ustiga tashlasangiz, matn o‘qiyotganingiz oxiriga qo‘shiladi. Ish stolingizdagi fayl ham xuddi shunday ishlaydi, tashlash mumkin bo‘lgan paytda qator ko‘k hoshiya bilan belgilanadi.
- **Maydon o‘zi nomlagan narsaning rangida bo‘ladi** — ro‘yxatdagi qatori qanday rangda bo‘lsa, shunday, papka qaydi uchun kulrang — va hech narsa unga mos kelmay qolganda **qizaradi**, shuning uchun <kbd>Enter</kbd> ni bosishdan oldin qayd ochiladimi yoki yaratiladimi, ko‘rib turasiz.
- **HTML fayllar sahifa sifatida ko‘rsatiladi** — barcha ruxsatlar olib qo‘yilgan ramka ichida: skriptlar yo‘q, tarmoq yo‘q, o‘z manbasi (origin) yo‘q. Saqlangan sahifa o‘z ko‘rinishini saqlashi uchun fayl yonidagi uslublar jadvallari va rasmlar ham olib kiriladi. Manba kodi bir bosish narida.
- **URL yozing** — `https://`, `obsidian://`, `file://` yoki foiz bilan kodlangan yo‘l — u qayd nomi deb emas, havola sifatida ochiladi. Veb-manzillar, agar u yoqilgan bo‘lsa, Obsidian'ning o‘z Web viewer (veb-ko‘ruvchi) tabida ochiladi.
- **Uzun yo‘llar harflar ortiqcha bo‘lgan joydan qisqaradi** — papkani yonidagisidan ajratib turadigan chegaradan hech qachon o‘tmaydi, harfma-harf emas, ravon qisqaradi — va siqadigan narsa qolmagandagina aylantiriladi. Qisqartirilgan nomni to‘liq ko‘rish uchun kursorni ustiga olib boring.
- **<kbd>F2</kbd>** matn ichidagi sarlavha va yo‘l paneli o‘rtasida almashadi: kengaytmasiz nom bilan ochiladi, keyingi bosishlarda esa to‘liq yo‘llargacha kengayadi. Sarlavha ko‘rinishdan chiqib ketgan bo‘lsa, Obsidian'ning nom o‘zgartirish oynasidan muammosiz o‘tadi. Manzil satriga xos odatni xohlasangiz, klavish biriktirish uchun *Yo‘l paneliga fokus* buyrug‘i bor.
- **Ombor nomiga bosing** — omborni almashtirmasdan boshqa omborlaringizni, uy papkasini, fayl tizimi ildizini va ulangan disklarni ko‘rib chiqing. U yerda nom o‘zgartirish tugmasi o‘rnida turadigan qizil qulfni ochmaguningizcha faqat o‘qish mumkin, butun vaqt davomida esa xato rangidagi ramka ko‘rinib turadi. Sukut bo‘yicha o‘chiq — [ombordan tashqarida](#ombordan-tashqarida) bo‘limiga qarang.
- **Ikki darajali ogohlantirish** — ombordan tashqarida qizil, Obsidian'da muharriri bo‘lmagan matn fayllari uchun to‘q sariq. [Ogohlantirish ranglari](usage.uz.md#ikki-ogohlantirish-rangi) bo‘limiga qarang.
- **Mavzuga moslashadigan belgilar** CSS snippet orqali almashtiriladi — va **46 til**: Obsidian taqdim etadigan barcha tillar, shuningdek Obsidian'da sozlamasi bo‘lmagan yunon va sanskrit tillari. Tilni faqat plagin uchun tanlang yoki Obsidian tiliga ergashing.
- **Sozlamalar:** til, tekislash, ajratgich shablonlari, ro‘yxatni qaysi bosish ochishi, ombor nomi, nuqta bilan boshlanadigan fayllar, fayl kengaytmalari.

![Ko‘chirish/nom o‘zgartirish rejimidagi o‘sha ro‘yxat: joriy fayl nomi tepada qadalgan, uning ostida qo‘shni papkalar, mavjud qaydlar esa kulrang](../images/dropdown.png)

*Ko‘chirish/nom o‘zgartirish rejimida xuddi shu ro‘yxat boshqacha takliflar beradi: qaydni nomini o‘zgartirmay ko‘chirish uchun uning joriy nomi tepada qadalgan, ichiga ko‘chirish mumkin bo‘lgan papkalar ko‘rsatiladi, band nomlar esa hech narsa tasodifan ustidan yozilmasligi uchun kulrang.*

→ [To‘liq foydalanish qo‘llanmasi](usage.uz.md)

## Ombordan tashqarida

Obsidian'ning dasturchilar siyosati plaginlardan ombordan tashqaridagi fayllarga har qanday kirishni tushuntirishni talab qiladi, shuning uchun ochiq aytamiz:

**U umuman shulardan birortasini qiladimi.** Faqat **Tashqi fayllarga kirish** sozlamasini yoqsangiz; u **sukut bo‘yicha o‘chiq**. U o‘chiq bo‘lsa, plagin orqali tashqi yo‘lga yetib borishning iloji yo‘q va quyidagi kodning hech biri hech qachon ishga tushmaydi.

**U nimani o‘qiydi.** Faqat siz so‘raganingizda. Ombor nomiga bosish boshqa omborlaringiz ro‘yxatini — Obsidian'ning o‘z `obsidian.json` faylidan o‘qib — hamda uy papkangiz, fayl tizimi ildizi va ulangan disklarni (Linux'da `/proc/mounts`, macOS'da `/Volumes`, Windows'da disk harflari) ko‘rsatadi. U yerdan ko‘rib chiqish katalog tarkibini ro‘yxatlaydi, faylni ochish esa faqat o‘sha bitta faylni o‘qiydi.

**U nima yozadi.** Hech narsa — buni aniq aytadigan tugmani bosmaguningizcha. Bunday tugma ikkita, har biri faqat o‘z sohasini qamraydi:

- Ko‘ruvchidagi **Matn sifatida tahrirlash** tugmasi oldingizdagi faylni qulfdan chiqaradi — faqat o‘sha bitta fayl uchun, o‘sha bitta tabda. Shundan so‘ng tahrirlaringiz yozayotganingiz sari faylga saqlanadi.
- Sarlavhadagi **qizil qulf** yo‘l paneli omboringizdan tashqariga ishora qilgan paytda nom o‘zgartirish tugmasi o‘rnida turadi; u tashqi yo‘llarda yaratish, nom o‘zgartirish, ko‘chirish va o‘chirishga ruxsat beradi, ochilgach esa o‘rnini yana tugmaga bo‘shatadi. Ichkariga qaytganingizda va nom o‘zgartirish rejimidan chiqaradigan bosishda u yana qulflanadi, shuning uchun ruxsat siz uni bergan papkadan uzoq yashamaydi.

Qulfdan chiqarishlarning hech biri ish maydonida (workspace) yoki sozlamalarda saqlanmaydi, shuning uchun siz ochganingizni eslamaydigan faylda yozish hech qachon tayyor holda turmaydi. Har ikki holatda ham hech narsa ustidan yozilmaydi — mavjud manzil rad etiladi, bunda poygada yutqazishi mumkin bo‘lgan oldindan tekshiruv emas, fayl tizimining o‘z eksklyuziv yaratish (exclusive-create) mexanizmi ishlatiladi.

Qaydni omboringizdan *tashqariga* ko‘chirish — hech narsa qaytarib bera olmaydigan narsaga tushadigan yagona yozish amali: Obsidian faqat ombor ichidagi havolalarni yangilaydi, shuning uchun o‘sha qaydga ishora qiluvchi har bir havola buziladi. Bu amal buni ochiq aytadigan va ta'sirlanadigan qaydlarni sanaydigan dialog oynasidan keyingina taklif qilinadi hamda Obsidian'ning o‘z savati orqali avval nusxalash, keyin o‘chirish tarzida bajariladi, shuning uchun uni o‘chirilgan qayd kabi tiklash mumkin. <kbd>Ctrl</kbd> ni bosib tursangiz, qayd o‘rniga tashqariga nusxalanadi.

**Nima uchun.** Kerakli qaydlar ko‘pincha boshqa omborda, sinxronlash papkasida yoki USB fleshkada bo‘ladi, Obsidian'ning o‘z yechimi — omborni almashtirish — esa ochiq turgan hamma narsani yopadi. Bu plagin chiqib ketmasdan borib ko‘rish va shu yerda turib imlo xatosini tuzatish imkonini beradi.

**Cheklov.** Obsidian muharriri ombor ichidagi fayllarga bog‘langan, shuning uchun tashqi faylni havolalar, teskari havolalar va boshqa imkoniyatlarga ega haqiqiy qayd sifatida ochib **bo‘lmaydi**; buni hech bir plagin qila olmaydi. Buning o‘rniga Lure uni o‘z ko‘ruvchisida ko‘rsatadi (Markdown, rasmlar, audio, video, PDF), qolgan hamma narsa uchun esa *Open externally* (tashqi dasturda ochish) bandi bor. Yo‘l paneli omboringizdan tashqariga ishora qilgan har doim xato rangidagi ramkada qoladi, yo‘l zanjiri esa kompyuterning kataloglar tuzilishidan emas, siz tanlagan joydan — ombor nomi, uy papkangiz, disk — boshlanadi.

## O‘rnatish

Plagin [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure) sahifasida ro‘yxatga olingan, lekin ilova ichidagi katalog uchun hali tasdiqlanmagan — shuning uchun uni quyidagi usullardan biri bilan o‘rnating:

**Qo‘lda:** [so‘nggi relizdan](https://github.com/Gelaende51/obsidian-lure/releases) `main.js`, `manifest.json` va `styles.css` fayllarini `<vault>/.obsidian/plugins/lure/` papkasiga yuklab oling, so‘ng plaginni **Sozlamalar → Tashqi plaginlar** bo‘limida yoqing.

**BRAT:** `Gelaende51/obsidian-lure` ni beta plagin sifatida qo‘shing.

**Manbadan:** `npm install && npm run build` — [ishlab chiqish](../development.md) hujjatiga qarang.

## Moslik

Hech qanday plagin talab qilinmaydi. Papkalarni yon panelda ko‘rsatadigan narsa — yoqilgan bo‘lsa — asosiy **Fayl menejeri** plagini; usiz bu bosishlar hech narsa qilmaydi.

Qayd sarlavhasini baham ko‘radigan yoki papkaga bosishga javob beradigan hamjamiyat plaginlari bilan sinovdan o‘tkazilgan — ikkala yuklanish tartibida, har biri yoqilgan va o‘chirilgan holda:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — ajratgich papkani ko‘rsatish o‘rniga papka qaydini ochadi va yo‘lning har bir bo‘lagini, qanchalik chuqur bo‘lmasin, borish mumkin bo‘lgan joyga aylantiradi: qayd javobni o‘sha plaginga qoldirmasdan, uning o‘z qoidasi asosida aniqlanadi. Bunday qoidani e'lon qiladigan yagona plagin ham shu; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) va [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) hech qanday qoida e'lon qilmaydi va sarlavhadagi yo‘lga da'vo qilmaydi, shuning uchun ular bilan ajratgich odatdagidek papkani ko‘rsatadi.
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer) va [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — ikkalasi ham sarlavhaning aynan o‘sha elementiga chizadi; qaysi biri birinchi yuklanmasin, Lure qatorni saqlab qoladi, ulardan birini o‘chirish esa ikkinchisiga ta'sir qilmaydi.
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header), [Running Head](obsidian://show-plugin?id=running-head), [Crumbs](obsidian://show-plugin?id=crumbs-obsidian), [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — har biri o‘z paneliga ega va yonma-yon ishlaydi.

Faqat kompyuter versiyasi — o‘zaro ta'sir modeli kursorni olib borish, aniq bosish va klaviaturani talab qiladi. To‘liq natijalar, qolgan kutilmalar va Quick Explorer hamda Breadcrumbs bilan taqqoslash [moslik](../compatibility.md) hujjatida.

## Qanday hissa qo‘shish

- Muammo xabarlari va pull request'lar mamnuniyat bilan qabul qilinadi — ayniqsa **tarjima tuzatishlari**, chunki barcha 45 ta til mashina tarjimasi va ona tili egalari tomonidan tekshirilmagan. Sozlash va asosiy qoidalar uchun [ishlab chiqish](../development.md) hujjatiga qarang.
- **Muammolar kuzatuvchisi:** https://github.com/Gelaende51/obsidian-lure/issues
- **Xayriyalar:** [Ko-fi](https://ko-fi.com/vault51). Plagin har qanday holatda bepul va AGPL litsenziyasi ostida; xayriyalar qadrlanadi, lekin hech qachon majburiy emas. Maqsad — uglerod izini qoplash; bu majburiyat emas, niyat: jami summa sarflanadigan kuchga arziydigan darajada katta bo‘lmaguncha hech narsa qoplanmaydi, biror narsa haqiqatan qoplanganda esa bu satrda shu aytiladi.

## Minnatdorchilik

- **Vault51** — muallif: dizayn, talablar va butun jarayon davomida qo‘lda sinov.
- **Claude Opus 5** va **Claude Sonnet 5** (Anthropic, Claude Code orqali) — muallif rahbarligida amalga oshirish, tarjimalar va hujjatlar. [Sun'iy intellekt haqida ma'lumot](#suniy-intellekt-haqida-malumot) bo‘limiga qarang.
- **[Obsidian](https://obsidian.md)** — bu plagin kengaytiradigan ilova va plagin foydalanadigan har bir komponentning manbai: uning plagin API'si, `setIcon` ortidagi Lucide belgilar to‘plami, kontekst menyusi yorliqlari o‘qiladigan ichki i18next nusxasi hamda uning o‘z CSS klasslari va o‘zgaruvchilari. Uchinchi tomonning hech qanday kodi qo‘shib qadoqlanmagan; plaginning **ishlash vaqtidagi bog‘liqliklari yo‘q**.

> **Obsidian jamoasi bu loyihada hech qanday tarzda ishtirok etmagan** — ular uni yozmagan, ko‘rib chiqmagan, ma'qullamagan yoki qo‘llab-quvvatlamagan. Obsidian — Dynalist Inc. kompaniyasining savdo belgisi; bu mustaqil, unga aloqasi bo‘lmagan plagin.

Hissa qo‘shuvchilar hissalari qabul qilinishi bilan shu yerda sanab o‘tiladi.

## Havolalar


- **Hujjatlar:** [docs/](../)
- **O‘zgarishlar jurnali:** [CHANGELOG.uz.md](CHANGELOG.uz.md)
- **Plagin sahifasi:** https://community.obsidian.md/plugins/lure
- **Veb-sahifa / manba kodi:** https://github.com/Gelaende51/obsidian-lure
- **Xayriyalar:** [Ko-fi](https://ko-fi.com/vault51) — [qanday hissa qo‘shish](#qanday-hissa-qoshish) bo‘limiga qarang.
- **Litsenziya:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. Forklar va qayta tarqatiladigan yig‘ilmalar o‘z manba kodini xuddi shu litsenziya ostida taqdim etishi shart.
