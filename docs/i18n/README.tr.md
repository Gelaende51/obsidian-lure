<!-- README.md çevirisi — durum: commit 2cbb237.
     Makine çevirisi (Claude Opus 5), ana dili konuşanlarca gözden
     geçirilmedi. Düzeltmeler memnuniyetle karşılanır; belirleyici sürüm
     İngilizce README'dir. -->

[English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · **Türkçe** · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

Bir notun başlık çubuğundaki dosya adını, kasadaki tam yolunun tıklanabilir ve düzenlenebilir bir içerik haritasına (breadcrumb) dönüştüren bir [Obsidian](https://obsidian.md) eklentisi — [Dolphin](https://apps.kde.org/dolphin/) dosya yöneticisindeki adres çubuğu gibi.

![Bir klasörden sonraki ayırıcıya tıklamak: işaretçi üzerinde duruyor, Dosya Gezgini de o klasörü göstermiş ve genişletmiş](../images/breadcrumb.png)

Obsidian 1.8.7+ · yalnızca masaüstü · AGPL-3.0

## Yapay zekâ bildirimi

- **Aracı** — **Claude Opus 5** ve **Claude Sonnet 5** (Anthropic, Claude Code üzerinden): TypeScript kodunu, CSS'i, 45 çeviri setinin tamamını ve belgeleri yazdı. Çeviriler makine tarafından üretilmiştir ve ana dili konuşanlarca gözden geçirilmemiştir.
- **Tüketim** — 3 Ağustos – 19 Eylül 2026, 20 oturum, \~16.460 yanıt: \~19,9 M token üretildi, \~87,0 M gönderildi, \~5.451,0 M önbellekten yeniden okundu (toplam \~5.558,0 M).
- **Kaynak** — model, başkalarının yayımladığı açık kaynak kodlardan, belgelerden ve topluluk yazılarından öğrendi. Emeğin büyük kısmı onlara aittir.
- **Yazar** — Vault51: her özelliği tanımladı, her yinelemeyi gerçek bir kasada test etti, düzeltmeleri yönlendirdi, tüm çıktıyı gözden geçirdi.

## Özellikler

- **Bir klasöre tıklayın**; klasörün *üst klasörünün* içeriğini gösteren bir açılır liste gelir — yolun geri kalanına dokunmadan bir klasörü kardeşiyle değiştirin. Notun adı da aynı şekilde çalışır ve ad, uzantısı olmadan seçilir.
- **Bir klasörden sonraki ayırıcıya tıklayın**; klasör Dosya Gezgini'nde gösterilir ve genişletilir. Tek bir ayar bu iki rolün yerini değiştirir.
- **Herhangi bir girdiye sağ tıklayın veya onu sürükleyin** — Dosya Gezgini'nin kendi bağlam menüsü, girdisi girdisine, ve kendi sürükleme davranışı. Kasa dışındaki yollar için eşdeğer bir menü kurulur; sistem çöp kutusunu kullanan *Sil* komutuna kadar.
- **Dosya adına veya boş alana tıklayın** ve otomatik tamamlamayla bir yol yazın. `/` içeri iner, <kbd>Backspace</kbd> bir düzey dışarı çıkar, <kbd>Enter</kbd> onaylar — henüz var olmayan bir yol ise doğrudan oluşturulur ve nereye gittiğini söyleyen bir bildirim çıkar.
- **Açılır liste, bulunduğunuz girdinin üzerinde açılır**; ok tuşlarıyla ya da fareyle üzerinde gezinmek, işaret ettiğiniz şeyi alana doldurur. İşaret ettiğiniz bir satır, yapacağı öneri olarak gösterilir; listenin iki ucundan birinin dışına çıkmak yazdığınızı geri getirir; işaretçiyi listeden çekmek ise vurguyu bulunduğunuz yere geri verir. Liste imleci izler: noktanın içinde bulunduğu klasörü, önündeki harflerle süzülmüş şekilde listeler.
- **Klasör üzerindeki kalem düğmesi**, aynı etkileşimleri taşıma/yeniden adlandırmaya çevirir; doğrulama Obsidian'ın yaptığı gibi yapılır. Zaten alınmış bir ad listede kırmızı görünür ve onu seçmek, yolda olanı yeniden mi adlandıracağınızı yoksa onunla yer mi yoksa ad mı değiştireceğinizi sorar.
- **<kbd>Ctrl</kbd> tuşunu basılı tutun**; yeni sekmede açılır — taşıma/yeniden adlandırma modundaysa not oraya taşınmak yerine kopyalanır. Notun adı ve klasör parçaları, Dosya Gezgini'ndeki satırları gibi aynı değiştirici tuşları kabul eder ve sürüklenebilir.
- **Adlar yazarken kendini tamamlar** — <kbd>Tab</kbd>'ın yazacağı şey imlecin ardında, seçili olarak ve adın yazıldığı şekliyle, hangi büyük/küçük harfle yazdığınıza bakılmaksızın belirir — klasördeki adların ortak olduğu kısım, ya da ilkine doğru olan adım; yazdıkça harf harf yutulur, <kbd>→</kbd> bir harfini alır, <kbd>Tab</kbd> veya <kbd>End</kbd> tamamını alır, <kbd>Backspace</kbd> geri çeker. Açılır liste, önerilene göre değil, yazdığınıza göre süzmeye devam eder.
- **<kbd>Tab</kbd> bir kabuk gibi tamamlar**: yazdığınızı o klasördeki adların uyuştuğu yere kadar uzatır, uyuşmadıklarında birine doğru adım adım ilerler ve bir klasöre ancak tek bir ad kaldığında girer. Yolun sonunu geçince bunun yerine seçimi genişletir: ad, uzantılı ad, kasadan itibaren yol, sistem kökünden itibaren yol. <kbd>Shift</kbd>+<kbd>Tab</kbd> aynı yolu geriye doğru yürür — geri verdiğini silmek yerine işaretler — ve başlangıcı geçince yol boyunca yukarı çıkmaya devam eder, ardından sistem yoluna döner. Hangi yönde gidilirse gidilsin, tam bir tur sizi oluşturduğunuz yola geri getirir.
- **Kopyalamak için sağ tıklayın** — bir ad için iki kez, sağındaki her şey için üç kez; boş alanda ise yolun tamamı ya da sistem yolu için.
- **Bir notu satırdaki bir klasörün üzerine sürükleyin**; bağlantılarıyla birlikte oraya taşınır — hedef zaten ekrandadır, bu yüzden dosya ağacında dolaşmak yerine tek bir sürükleme yeter. Kök için kasanın adı da aynı işi görür. Bir seçimin tamamı tek parça halinde taşınır; sunulanı alamayacak bir klasör ise sonradan hata vermek yerine hiçbir şey göstermez.
- **Metni satıra bırakarak not edin** — bir klasörün ya da kasa adının üzerine bırakırsanız orada adını sizin vereceğiniz yeni bir not oluşur, notun kendi adının üzerine bırakırsanız okuduğunuz notun sonuna eklenir. Masaüstünüzden bir dosya da aynı şekilde çalışır; bırakma geçerli olduğu sürece satırın çevresi mavi yanar.
- **Alan, adlandırdığı şeyin rengine bürünür** — açılır listedeki satırıyla aynı renk, klasör notu için gri — ve karşılık gelen hiçbir şey kalmadığında **kırmızıya döner**; böylece <kbd>Enter</kbd>'a basmadan önce bir notu mu açacağını yoksa yeni bir not mu oluşturacağını görürsünüz.
- **HTML dosyaları sayfa olarak gösterilir**; bütün izinlerin esirgendiği bir çerçevede — betik yok, ağ yok, kendine ait bir köken (origin) yok — dosyanın yanındaki stil sayfaları ve görseller de içeri alınır, böylece kaydedilmiş bir sayfa kendisi gibi görünmeye devam eder. Kaynak kodu tek bir basış uzağınızdadır.
- **Bir URL yazın** — `https://`, `obsidian://` ya da bir `file://` veya yüzde kodlamalı yol — ve bir not adı olarak değil, adres olarak açılsın. Web adresleri, etkinleştirdiyseniz Obsidian'ın kendi Web görüntüleyici eklentisinin bir sekmesinde açılır.
- **Uzun yollar harflerin gereksiz olduğu yerden kısalır** — bir klasörü yanındakinden ayırt ettiren noktanın asla ötesine geçmeden, harf harf değil akıcı biçimde — ve yalnızca sıkıştırılacak hiçbir şey kalmadığında kaydırılır. Kısaltılmış bir adın tamamını görmek için üzerine gelin.
- **<kbd>F2</kbd>**, satır içi başlık ile yol çubuğu arasında gidip gelir; uzantısız adla açılır ve sonraki basışlarda tam yollara kadar genişler. Başlık görünümün dışına kaydırılmışsa Obsidian'ın yeniden adlandırma penceresinden sorunsuz geçer. *Yol çubuğuna odaklan* komutu aynı basamaklarda yeniden adlandırmadan ilerler; ayarlardaki *Kısayollar* satırı ona tuş atamanız için sizi oraya götürür.
- **Kasanın adına tıklayın**; kasa değiştirmeden diğer kasalarınıza, ev klasörünüze, dosya sistemi köküne ve bağlı sürücülere göz atın. Orada yeniden adlandırma anahtarının yerini alan kırmızı asma kilidi açana kadar salt okunurdur ve baştan sona hata rengiyle çerçevelenir. Öntanımlı olarak kapalıdır — bkz. [kasanın dışında](#kasanın-dışında).
- **Kasa kökü, bir bölmenin tutabileceği sayfaları listeler** — `:graph`, `:search` ve eklentilerinizin kaydettiği tüm görünümler. Birini seçin ya da yazın: iki nokta üst üste hiçbir dosya adını başlatmaz, bu yüzden etiketler aynı zamanda bir adres işi görür. Bir klasörün içinde yazılan `:graph`, o klasörün grafiğini açar. Bir başlangıç sayfası eklentisi kuruluysa, kasanın kendi ayırıcısı ilk tıklamada o sayfayı açar, sonrakinde dosya ağacını katlar.
- **Dosya tutmayan bölmelerde bir satır** — boş bir sekme `vault / :blank`, grafik `vault / :graph` yazar ve yanındaki alan bir adres çubuğudur: bir yol yazın, <kbd>Enter</kbd> onu o bölmede açar ya da oluşturur. Kenar çubuğu bölmeleri Obsidian'ın kendi başlığını korur.
- **İki uyarı düzeyi** — kasanın dışı için kırmızı, Obsidian'da düzenleyicisi olmayan metin dosyaları için turuncu. Bkz. [uyarıların iki rengi](usage.tr.md#uyarıların-iki-rengi).
- **Temaya uyan simgeler**, bir CSS parçacığıyla (snippet) değiştirilebilir — ve **46 dil**: Obsidian'ın sunduğu her dil, artı Obsidian'da ayarı bulunmayan Yunanca ve Sanskritçe. Yalnızca eklenti için bir dil seçin ya da Obsidian'ın dilini izleyin.
- **Ayarlar:** dil, hizalama, ayırıcı hazır ayarları, açılır listeyi hangi tıklamanın açacağı, kasa adı, nokta dosyaları, dosya uzantıları.

![Taşıma/yeniden adlandırma modunda aynı açılır liste: geçerli dosya adı en üste sabitlenmiş, altında kardeş klasörler, var olan notlar gri](../images/dropdown.png)

*Taşıma/yeniden adlandırma modunda aynı açılır liste farklı şeyler sunar: notu yeniden adlandırmadan taşımak için notun şu anki adı en üste sabitlenir, altında notu taşıyabileceğiniz klasörler yer alır, alınmış adlar ise kırmızı gösterilir; birini seçmek, yolda olan dosya için ne yapılacağını sorar.*

→ [Tam kullanım kılavuzu](usage.tr.md)

## Kasanın dışında

Obsidian'ın geliştirici politikaları, eklentilerin kasa dışındaki dosyalara her türlü erişimi açıklamasını şart koşar; açıkça söylemek gerekirse:

**Bunlardan herhangi birini yapıp yapmadığı.** Yalnızca **Harici dosyalara erişim** ayarını açarsanız; bu ayar **öntanımlı olarak kapalıdır**. Kapalıyken eklentiden harici bir yola ulaşmanın hiçbir yolu yoktur ve aşağıdaki kodun hiçbiri çalışmaz.

**Ne okuduğu.** Yalnızca siz istediğinizde. Kasa adına tıklamak diğer kasalarınızı — Obsidian'ın kendi `obsidian.json` dosyasından okunur — ve ayrıca ev klasörünüzü, dosya sistemi kökünü ve bağlı sürücüleri (Linux'ta `/proc/mounts`, macOS'te `/Volumes`, Windows'ta sürücü harfleri) listeler. Oradan gezinmek dizin içeriklerini listeler; bir dosyayı açmak yalnızca o dosyayı okur.

**Ne yazdığı.** Bunu açıkça söyleyen bir düğmeye basana kadar hiçbir şey. Böyle iki düğme vardır ve her biri yalnızca kendi alanını kapsar:

- Görüntüleyicideki **Metin olarak düzenle** düğmesi, önünüzdeki dosyanın kilidini yalnızca o dosya ve o sekme için açar. Ardından düzenlemeleriniz yazdıkça dosyaya kaydedilir.
- Başlıktaki **kırmızı asma kilit**, yol çubuğu kasanızın dışını gösterdiği sürece yeniden adlandırma anahtarının yerinde durur; harici yollarda oluşturma, yeniden adlandırma, taşıma ve silmenin kilidini açar — ve açıldıktan sonra yerini anahtara geri bırakır. Kasanın içine döndüğünüzde ve yeniden adlandırma modundan çıkaran basışta yeniden kilitlenir; böylece izin, verildiği klasörden asla daha uzun yaşamaz.

İki kilit açma da çalışma alanında ya da ayarlarda saklanmaz; bu yüzden açtığınızı hatırlamadığınız bir dosyada yazma asla hazır beklemez. Her iki durumda da hiçbir şeyin üzerine yazılmaz — var olan bir hedef reddedilir; bunun için yarış durumunu kaybedebilecek bir denetim değil, dosya sisteminin kendi özel oluşturma (exclusive-create) işlemi kullanılır.

Bir notu kasanızın *dışına* taşımak, bedeli hiçbir şeyle geri alınamayan tek yazma işlemidir: Obsidian bağlantıları yalnızca kasanın içinde günceller, dolayısıyla o nota işaret eden her bağlantı kırılır. Bu işlem, bunu söyleyen ve etkilenen notları sayan bir iletişim kutusunun ardından sunulur ve Obsidian'ın kendi çöp kutusu üzerinden önce kopyalama, sonra silme olarak gerçekleşir; yani bir notu silmek kadar geri alınabilirdir. <kbd>Ctrl</kbd> tuşunu basılı tutarsanız not bunun yerine dışarı kopyalanır.

**Neden.** İstediğiniz notlar çoğu zaman başka bir kasada, bir eşitleme klasöründe ya da bir USB bellektedir ve Obsidian'ın kendi çözümü — kasa değiştirmek — açık olan her şeyi kapatır. Bu eklenti, yerinizden ayrılmadan gidip bakmanızı ve oradayken bir yazım hatasını düzeltmenizi sağlar.

**Sınırlama.** Obsidian'ın düzenleyicisi kasanın içindeki dosyalara bağlıdır; bu yüzden harici bir dosya bağlantıları, geri bağlantıları ve geri kalan her şeyiyle gerçek bir not olarak **açılamaz**; hiçbir eklenti bunu yapamaz. Lure bunun yerine dosyayı kendi görüntüleyicisinde gösterir (Markdown, görseller, ses, video, PDF); geri kalan her şey için *Open externally* (harici olarak aç) vardır. Yol çubuğu kasanızın dışını gösterdiği sürece hata rengiyle çerçeveli kalır ve iz, makinenin dizin düzeninden değil, seçtiğiniz konumdan — bir kasa adı, ev klasörünüz, bir sürücü — başlar.

## Kurulum

**Obsidian'da:** **Ayarlar → Topluluk Eklentileri → Göz at** bölümünü açın, *Lure* için arama yapın, ardından *İndir* ve *Etkinleştir* düğmelerine basın — ya da [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure) adresinde *Add to Obsidian* düğmesine basın.

**Elle:** [son sürümden](https://github.com/Gelaende51/obsidian-lure/releases) `main.js`, `manifest.json` ve `styles.css` dosyalarını `<vault>/.obsidian/plugins/lure/` klasörüne indirin, ardından **Ayarlar → Topluluk Eklentileri** altında etkinleştirin.

**BRAT:** `Gelaende51/obsidian-lure` deposunu beta eklentisi olarak ekleyin.

**Kaynaktan:** `npm install && npm run build` — bkz. [geliştirme](../development.md).

## Uyumluluk

Hiçbir eklenti gerekmez. Etkinse klasörleri kenar çubuğunda gösteren, çekirdek **Dosya Gezgini**'dir; o olmadan bu tıklamalar hiçbir şey yapmaz.

Not başlığını paylaşan ya da klasör tıklamasına yanıt veren topluluk eklentileriyle test edilmiştir — her iki yükleme sırasında, her biri açıkken ve kapalıyken:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — ayırıcı, klasörü göstermek yerine klasörün notunu açar; böylece yolun her parçası, ne kadar derinde olursa olsun, gidebileceğiniz bir yer olur: not, yanıtı o eklentiye bırakılmak yerine eklentinin kendi kuralından çözülür. Böyle bir kuralı yayımlayan da yalnızca odur; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) ve [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) hiçbir kural yayımlamaz ve başlıktaki yolu asla sahiplenmez; bu yüzden onlarla birlikte ayırıcı klasörü her zamanki gibi gösterir.
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer) ve [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — ikisi de aynı başlık öğesine çizer; hangisi önce yüklenirse yüklensin Lure satırı korur ve ikisinden birini kapatmak diğerini bozmaz.
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header), [Running Head](obsidian://show-plugin?id=running-head), [Crumbs](obsidian://show-plugin?id=crumbs-obsidian), [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — her biri kendi şeridine sahiptir ve bir arada çalışır.

Yalnızca masaüstü — etkileşim modeli fareyle üzerine gelmeyi, hassas tıklamaları ve klavyeyi gerektirir. Tüm sonuçlar, kalan beklentiler ve Quick Explorer ile Breadcrumbs karşılaştırması [uyumluluk](../compatibility.md) belgesindedir.

## Katkıda bulunma

- Sorun bildirimleri ve çekme istekleri memnuniyetle karşılanır — özellikle **çeviri düzeltmeleri**, çünkü 45 yerel ayarın tamamı makine çevirisidir ve ana dili konuşanlarca gözden geçirilmemiştir. Kurulum ve temel kurallar için bkz. [geliştirme](../development.md).
- **Sorun takibi:** https://github.com/Gelaende51/obsidian-lure/issues
- **Bağışlar:** [Ko-fi](https://ko-fi.com/vault51). Eklenti her durumda ücretsizdir ve AGPL lisanslıdır; bağışlar memnuniyetle karşılanır, ama asla zorunlu değildir. Amaçlanan kullanım karbon dengelemedir — bu bir taahhüt değil, bir niyettir: toplam, zahmete değecek kadar büyüyene dek hiçbir şey dengelenmez ve gerçekten bir şey dengelendiğinde bu satır bunu belirtecektir.

## Teşekkürler

- **Vault51** — yazar: tasarım, gereksinimler ve baştan sona elle test.
- **Claude Opus 5** ve **Claude Sonnet 5** (Anthropic, Claude Code üzerinden) — yazarın yönlendirmesiyle uygulama, çeviriler ve belgeler. Bkz. [Yapay zekâ bildirimi](#yapay-zekâ-bildirimi).
- **[Obsidian](https://obsidian.md)** — bu eklentinin genişlettiği uygulama ve eklentinin kullandığı her bileşenin kaynağı: eklenti API'si, `setIcon` arkasındaki Lucide simge seti, bağlam menüsü etiketlerinin okunduğu paketle gelen i18next örneği ve kendi CSS sınıfları ile değişkenleri. Üçüncü taraflara ait hiçbir şey paketlenmez; eklentinin **hiçbir çalışma zamanı bağımlılığı yoktur**.

> **Obsidian ekibi bu projeye hiçbir şekilde katılmamıştır** — projeyi yazmamış, gözden geçirmemiş, onaylamamış veya desteklememiştir. Obsidian, Dynalist Inc.'in ticari markasıdır; bu, bağımsız ve hiçbir kuruluşla bağlantısı olmayan bir eklentidir.

Katkıda bulunanlar, katkılar geldikçe burada listelenecektir.

## Bağlantılar


- **Belgeler:** [docs/](../)
- **Değişiklik günlüğü:** [CHANGELOG.tr.md](CHANGELOG.tr.md)
- **Eklenti sayfası:** https://community.obsidian.md/plugins/lure
- **Web varlığı / kaynak kodu:** https://github.com/Gelaende51/obsidian-lure
- **Bağışlar:** [Ko-fi](https://ko-fi.com/vault51) — bkz. [katkıda bulunma](#katkıda-bulunma).
- **Lisans:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. Çatallar ve yeniden dağıtılan derlemeler, kaynak kodlarını aynı lisansla birlikte sunmak zorundadır.
