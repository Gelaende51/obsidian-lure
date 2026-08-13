<!-- README.md tarjimasi — holat: commit d116bbc.
     Mashina tarjimasi (Claude Opus 5), ona tili egalari tomonidan
     tekshirilmagan. Tuzatishlar mamnuniyat bilan qabul qilinadi;
     hal qiluvchi nusxa — inglizcha README. -->

**Buni boshqa tillarda o'qing:** [English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · **Oʻzbekcha** · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

[Obsidian](https://obsidian.md) uchun plagin bo'lib, u qaydning sarlavha satridagi fayl nomini butun ombor bo'ylab bosiladigan va tahrirlanadigan to'liq yo'lga aylantiradi — xuddi [Dolphin](https://apps.kde.org/dolphin/) fayl menejeridagi manzil satri kabi.

![Papkadan keyingi ajratgichga bosish: ko'rsatkich uning ustida turibdi va Fayl menejeri o'sha papkani ko'rsatib, yoyib berdi](../images/breadcrumb.png)

Obsidian 1.8.7+ · faqat kompyuter uchun · AGPL-3.0

## Sun'iy intellekt haqida ma'lumot

- **Agent** — **Claude Opus 5** va **Claude Sonnet 5** (Anthropic, Claude Code orqali): TypeScript kodini, CSS'ni, barcha 45 ta tarjima to'plamini va hujjatlarni yozdi. Tarjimalar mashina tomonidan qilingan va ona tili egalari tomonidan tekshirilmagan.
- **Muallif** — Vault51: har bir imkoniyatni belgiladi, har bir versiyani haqiqiy omborda sinab ko'rdi, tuzatishlarni yo'naltirdi, barcha natijalarni ko'rib chiqdi.
- **Sarf** — 2026-yil 3–13-avgust, to‘qqiz seans, \~4 928 javob: \~7,2 mln yaratilgan token, \~23,7 mln yuborilgan, keshdan \~1169,6 mln qayta o'qish (jami \~1200,5 mln).

## Imkoniyatlar

- **Papkaga bosing** — uning *yuqoridagi* papkasi tarkibi ro'yxati chiqadi; yo'lning qolganiga tegmasdan bir papkani qo'shnisiga almashtiring. Qayd nomi ham xuddi shunday ishlaydi, kengaytmasi bilan birga.
- Papkadan keyingi **ajratgichga bosing** — u Fayl menejerida ko'rsatiladi va yoyiladi. Bitta sozlama bu ikki vazifani almashtiradi.
- **Istalgan yozuvni o'ng tugma bilan bosing yoki torting** — Fayl menejerining o'z kontekst menyusi va tortish xatti-harakati.
- **Fayl nomiga yoki bo'sh joyga bosing** — yo'lni yozish mumkin bo'ladi, to'ldirish bilan. `/` pastga tushadi, <kbd>Backspace</kbd> bir pog'ona yuqoriga chiqadi, <kbd>Enter</kbd> tasdiqlaydi.
- **Papkadagi qalam tugmasi** xuddi shu amallarni ko'chirish/nomini o'zgartirish rejimiga o'tkazadi, Obsidian o'zi qiladigan tekshiruvlar bilan.
- **<kbd>Ctrl</kbd> ni bosib turing** — yangi ilovada ochiladi; ko'chirish/nomini o'zgartirish rejimida esa qaydni u yerga ko'chirish o'rniga nusxalaydi.
- **<kbd>F2</kbd>** qayd ichidagi sarlavha bilan yo'l satri orasida almashtiradi.
- **Ombor nomiga bosing** — omborni almashtirmasdan boshqa omborlaringizni, uy papkasini, fayl tizimi ildizini va ulangan disklarni ko'rib chiqing. Qulfni ochmaguningizcha faqat o'qish uchun, va shu davomida xato rangi bilan ramkalangan. Sukut bo'yicha o'chiq — qarang: [ombordan tashqarida](#ombordan-tashqarida).
- **Ikki darajali ogohlantirish** — ombordan tashqarida qizil, Obsidian'da muharriri yo'q matn fayllari uchun to'q sariq. Qarang: [ikki ogohlantirish rangi](usage.uz.md#ikki-ogohlantirish-rangi).
- **Mavzuga moslashadigan belgilar**, CSS parchasidan almashtiriladi — va **45 til**, Obsidian olib keladigan har biri.
- **Sozlamalar:** tekislash, tayyor ajratgichlar, qaysi bosish ro'yxatni ochadi, ombor nomi, yashirin fayllar.

![Ko'chirish/nomini o'zgartirish rejimidagi o'sha ro'yxat: faylning hozirgi nomi eng tepaga qadalgan, ostida qo'shni papkalar, mavjud qaydlar esa xiralashtirilgan](../images/dropdown.png)

*Ko'chirish/nomini o'zgartirish rejimida o'sha ro'yxat boshqa narsa taklif qiladi: qaydni nomini o'zgartirmasdan ko'chirish uchun uning hozirgi nomi eng tepaga qadaladi; ostida ko'chirish mumkin bo'lgan papkalar; band nomlar esa tasodifan hech narsa ustiga yozilmasligi uchun xiralashtiriladi.*

→ [To'liq foydalanish qo'llanmasi](usage.uz.md)

## Ombordan tashqarida

Obsidian'ning ishlab chiquvchilar uchun qoidalari plagindan ombordan tashqaridagi fayllarga har qanday murojaatni tushuntirishni talab qiladi, shuning uchun ochig'ini aytamiz:

**U umuman shulardan birortasini qiladimi.** Faqat siz **Tashqi fayllarga kirish** ni yoqsangiz, u esa **sukut bo'yicha o'chiq**. Sozlama o'chiq bo'lganda plagindan tashqi yo'lga boradigan hech qanday yo'l yo'q va quyida tasvirlangan koddan hech biri hech qachon ishlamaydi.

**U nimani o'qiydi.** Faqat siz so'raganingizda. Ombor nomiga bosish boshqa omborlaringizni ro'yxatlaydi — Obsidian'ning o'z `obsidian.json` faylidan o'qib — bundan tashqari uy papkasi, fayl tizimi ildizi va ulangan disklar (Linux'da `/proc/mounts`, macOS'da `/Volumes`, Windows'da disk harflari). U yerdan ko'rib chiqish kataloglar tarkibini ro'yxatlaydi, faylni ochish esa faqat o'sha bitta faylni o'qiydi.

**U nima yozadi.** Siz shuni aytadigan tugmani bosmaguningizcha hech narsa. Bunday tugma ikkita va har biri faqat o'z doirasini qamrab oladi:

- Ko'ruvchidagi **Matn sifatida tahrirlash** tugmasi oldingizdagi faylni ochadi — faqat o'sha bitta faylni, faqat o'sha bitta ilovada. Shundan keyin siz yozganingiz sari o'zgarishlaringiz unga saqlanadi.
- Sarlavhadagi **qulf**, faqat yo'l satri ombordan tashqariga ishora qilib turganda ko'rinadi va tashqi yo'llarda yaratish, nomini o'zgartirish hamda ko'chirishni ochadi. Ichkariga qaytishingiz bilan u qayta qulflanadi, shu bois ruxsat hech qachon o'zi berilgan papkadan uzoq yashamaydi.

Ikkala ochish ham ish maydoniga yoki sozlamalarga saqlanmaydi, shuning uchun yozish siz ochganingizni eslamaydigan fayl ustida hech qachon tayyor turmaydi. Ikkala holatda ham hech narsa ustiga yozilmaydi — mavjud manzil rad etiladi, buning uchun poygada yutqazishi mumkin bo'lgan tekshiruv emas, balki fayl tizimining o'z eksklyuziv yaratishi ishlatiladi — va qaydni hech qachon ombordan tashqariga *ko'chirib* bo'lmaydi, chunki unga havolalar jimgina uzilib qolardi; <kbd>Ctrl</kbd> ni bosib turish uning o'rniga uni tashqariga nusxalaydi.

**Nima uchun.** Sizga kerak qaydlar ko'pincha boshqa omborda, sinxronlash papkasida yoki USB xotirada bo'ladi, Obsidian'ning o'z javobi esa — omborni almashtir — ochiq turgan hamma narsani yopadi. Bu esa ketmasdan borib ko'rish va shu bahonada terish xatosini tuzatish imkonini beradi.

**Cheklov.** Obsidian muharriri ombor ichidagi fayllarga bog'langan, shu sababli tashqi faylni havolalari, teskari havolalari va qolgan hammasi bilan haqiqiy qayd sifatida ochib **bo'lmaydi**; buni hech bir plagin uddalay olmaydi. Lure uning o'rniga uni o'z ko'ruvchisida ko'rsatadi (Markdown, rasm, audio, video, PDF), qolgan hamma narsa uchun esa *Tashqarida ochish* taklif qiladi. Yo'l satri ombordan tashqariga ishora qilib turgan har payt xato rangi bilan ramkalangan qoladi, iz esa siz tanlagan joydan boshlanadi — ombor nomidan, uy papkangizdan, diskdan — mashinaning katalog tuzilishidan emas.

## O'rnatish

[community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure) da ro'yxatga olingan, ammo ilova ichidagi brauzer uchun hali tasdiqlanmagan — shuning uchun uni quyidagi usullardan biri bilan o'rnating:

**Qo'lda:** `main.js`, `manifest.json` va `styles.css` fayllarini [eng so'nggi chiqarilmadan](https://github.com/Gelaende51/obsidian-lure/releases) `<vault>/.obsidian/plugins/lure/` ichiga yuklab oling, so'ng uni **Sozlamalar → Tashqi plaginlar** bo'limida yoqing.

**BRAT:** `Gelaende51/obsidian-lure` ni beta plagin sifatida qo'shing.

**Manbadan:** `npm install && npm run build` — qarang: [ishlab chiqish](../development.md).

## Moslik

Hech qanday plagin talab qilinmaydi. O'rnatilgan **Fayl menejeri**, agar yoqilgan bo'lsa, yon panelda papkalarni ko'rsatadigan narsa; usiz bu bosishlar hech nima qilmaydi.

Qaydning sarlavha satrini bo'lishadigan yoki papkaga bosishga javob beradigan hamjamiyat plaginlari bilan sinaldi — ikkala yuklash tartibida, har biri yoqilgan va o'chirilgan holda:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — ajratgich papkani ko'rsatish o'rniga uning qaydini ochadi, shu bois yo'lning har bir bo'lagi boriladigan joyga aylanadi. Sarlavhadagi yo'lni o'ziga oladigan yagona papka-qayd plagini; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) va [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) u yerni tinglamaydi, shuning uchun ajratgich papkani odatdagidek ko'rsatadi.
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer) va [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — ikkalasi ham sarlavhaning o'sha bitta elementiga chizadi; qaysi biri avval yuklansa ham Lure o'z satrini saqlab qoladi, birontasini o'chirish ikkinchisiga tegmaydi.
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header), [Running Head](obsidian://show-plugin?id=running-head), [Crumbs](obsidian://show-plugin?id=crumbs-obsidian), [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — o'z yo'lakchasiga ega va muammosiz birga yashaydi.

Faqat kompyuter uchun — bu muomala usuli sichqonchani ustiga olib borishni, aniq bosishlarni va klaviaturani talab qiladi. To'liq natijalar, tekshirilishi qolganlar hamda Quick Explorer va Breadcrumbs bilan taqqoslash [moslik](../compatibility.md) sahifasida.

## Qanday hissa qo'shish

- Xabarlar va pull request'lar mamnuniyat bilan qabul qilinadi — ayniqsa **tarjima tuzatishlari**, chunki barcha 45 til mashina tomonidan tarjima qilingan va ona tili egalari tekshirmagan. Tayyorgarlik va asosiy qoidalar uchun qarang: [ishlab chiqish](../development.md).
- **Muammolar kuzatuvchisi:** https://github.com/Gelaende51/obsidian-lure/issues
- **Xayriyalar:** [Ko-fi](https://ko-fi.com/vault51). Plagin baribir bepul va AGPL litsenziyasi ostida; choychaqa qadrlanadi va hech qachon talab qilinmaydi. Ko'zda tutilgan maqsad — uglerod qoplamasi: bu niyat, majburiyat emas. Summa ovoraligiga arzimaguncha hech narsa qoplanmaydi, va haqiqatan qoplangan zahoti shu satr buni aytadi.

## Minnatdorchilik

- **Vault51** — muallif: g'oya, talablar va boshidan oxirigacha qo'lda sinov.
- **Claude Opus 5** va **Claude Sonnet 5** (Anthropic, Claude Code orqali) — muallif rahbarligida amalga oshirish, tarjimalar va hujjatlar. Qarang: [sun'iy intellekt haqida ma'lumot](#suniy-intellekt-haqida-malumot).
- **[Obsidian](https://obsidian.md)** — bu plagin kengaytiradigan dastur va u ishlatadigan har bir qismning manbai: plaginlar API'si, `setIcon` ortidagi Lucide belgilar to'plami, kontekst menyusi yozuvlari o'qiladigan ichki i18next nusxasi hamda uning o'z CSS sinflari va o'zgaruvchilari. Uchinchi tomondan hech narsa qo'shilmagan; plaginda **ishga tushish paytidagi bog'liqliklar yo'q**.

> **Obsidian jamoasi bu loyihada hech qanday tarzda qatnashmagan** — ular uni yozmagan, ko'rib chiqmagan, ma'qullamagan va qo'llab-quvvatlamagan. Obsidian — Dynalist Inc. kompaniyasining savdo belgisi; bu esa mustaqil, aloqasi yo'q plagin.

Hissa qo'shganlar hissalar kelib tushgan sari shu yerda sanab o'tiladi.

## Havolalar

- **Hujjatlar:** [docs/](../)
- **Plagin sahifasi:** https://community.obsidian.md/plugins/lure
- **Veb / manba:** https://github.com/Gelaende51/obsidian-lure
- **Xayriyalar:** [Ko-fi](https://ko-fi.com/vault51) — qarang: [qanday hissa qo'shish](#qanday-hissa-qoshish).
- **Litsenziya:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. Forklar va qayta tarqatilgan yig'malar o'z manbasini xuddi shu litsenziya ostida chiqarishi shart.
