<!-- CHANGELOG.md çevirisi — durum: commit f133f41.
     Makine çevirisi (Claude Opus 5), ana dili konuşanlarca gözden
     geçirilmedi. Düzeltmeler memnuniyetle karşılanır; belirleyici sürüm
     İngilizce CHANGELOG'dur. -->

[English](../../CHANGELOG.md) · [العربية](CHANGELOG.ar.md) · [አማርኛ](CHANGELOG.am.md) · [Беларуская](CHANGELOG.be.md) · [বাংলা](CHANGELOG.bn.md) · [Català](CHANGELOG.ca.md) · [Čeština](CHANGELOG.cs.md) · [Dansk](CHANGELOG.da.md) · [Deutsch](CHANGELOG.de.md) · [Ελληνικά](CHANGELOG.el.md) · [Español](CHANGELOG.es.md) · [فارسی](CHANGELOG.fa.md) · [Suomi](CHANGELOG.fi.md) · [Français](CHANGELOG.fr.md) · [Gaeilge](CHANGELOG.ga.md) · [עברית](CHANGELOG.he.md) · [Magyar](CHANGELOG.hu.md) · [Bahasa Indonesia](CHANGELOG.id.md) · [Italiano](CHANGELOG.it.md) · [日本語](CHANGELOG.ja.md) · [ქართული](CHANGELOG.ka.md) · [ភាសាខ្មែរ](CHANGELOG.kh.md) · [한국어](CHANGELOG.ko.md) · [Latviešu](CHANGELOG.lv.md) · [Bahasa Melayu](CHANGELOG.ms.md) · [नेपाली](CHANGELOG.ne.md) · [Nederlands](CHANGELOG.nl.md) · [Norsk](CHANGELOG.no.md) · [Polski](CHANGELOG.pl.md) · [Português](CHANGELOG.pt.md) · [Português (Brasil)](CHANGELOG.pt-BR.md) · [Română](CHANGELOG.ro.md) · [Русский](CHANGELOG.ru.md) · [संस्कृतम्](CHANGELOG.sa.md) · [Slovenčina](CHANGELOG.sk.md) · [Shqip](CHANGELOG.sq.md) · [Српски](CHANGELOG.sr.md) · [Svenska](CHANGELOG.sv.md) · [ไทย](CHANGELOG.th.md) · **Türkçe** · [Українська](CHANGELOG.uk.md) · [Oʻzbekcha](CHANGELOG.uz.md) · [Tiếng Việt](CHANGELOG.vi.md) · [简体中文](CHANGELOG.zh.md) · [繁體中文](CHANGELOG.zh-TW.md)

# Değişiklik günlüğü

Lure'un her sürümü, en yenisi en üstte. Son sürümden bu yana gelenler *Yayımlanmamış* başlığı altındadır. Sürüm numaraları, sürüm etiketleriyle uyumlu olarak `v` öneki taşımaz.

## Yayımlanmamış[^unreleased]

### Eklenenler

- **Kasanın dışından kasaya dosya getirme.** Diskteki herhangi bir yerden bir dosyayı kasanızın içindeki bir yola taşıyın ya da kopyalayın; dosya gerçek bir not olarak gelir ve taşımada özgün dosya ancak kopyalama başarılı olduktan sonra kaldırılır.
- **Metni ya da bir dosyayı satıra bırakarak not etme.** Bir klasörün üzerine: o klasörde, adını yazarak verdiğiniz yeni bir not. Notun adının üzerine ya da klasör notu olan bir klasörün ayırıcısının üzerine: bir onaydan sonra o notun sonuna eklenir.
- **Klasör notu oluşturma**: bir klasör notu eklentisi çalışıyorsa ve klasörün henüz notu yoksa, klasörü açan şeye ikinci kez basarak. Not, [Folder notes](https://github.com/LostPaul/obsidian-folder-notes) eklentisinin kendi ayarlarının belirttiği yere yerleştirilir.
- **Bir klasörü yol çubuğundan sekme çubuğuna sürükleyerek** orada açın: varsa klasör notunu, yoksa o klasörde duran bir sekmeyi.
- **Fare tekerleği açılır listede gezinir.** Bir adın üzerinde ilk çevirme o adın listesini açar, sonraki her çevirme vurguyu bir satır kaydırır. Yana doğru kayan bir satır ise tekerleği kaydırma için alıkoyar.
- **Alanın başından ok tuşuyla çıkarak** önündeki klasörü içeri alın: bir klasör için <kbd>←</kbd>, hepsi için <kbd>Shift</kbd>+<kbd>Home</kbd> (açılır liste kapalıyken <kbd>Home</kbd>).
- **Alan, adlandırdığı şeyin rengine bürünür**, açılır listedeki satırıyla aynı renge, ve karşılık gelen hiçbir şey kalmadığında kırmızıya döner — yani <kbd>Enter</kbd>'ın bir şeyi açmak yerine oluşturacağı anda.
- **Klasör notları açılır listede gridir**; böylece bir not daha olarak değil, klasörlerine ait olarak okunurlar.
- **Bir ayırıcıya orta tıklayarak** o klasörü yeni sekmede açın: klasör notunu ya da o klasörde duran bir sekmeyi.

### Değişenler

- **Asma kilit ile yeniden adlandırma anahtarı tek bir denetimdir.** Kasanın dışında anahtarın yerini kırmızı, kapalı bir asma kilit alır; kilidi açmak yeri anahtara bırakır, yeniden adlandırma modundan çıkmak ise onu yeniden kapatır.
- **Yeniden adlandırma tuşu asma kilide de sorar.** Kasanın dışında ilk basış asma kilidi yanıp söndürür; yarım saniye içindeki ikinci bir basış, asma kilidin verdiği izni verir ve yeniden adlandırma modunu açar.
- **Yeniden adlandırma tuşu tam bir tur döner** — satır içi başlık, ad, uzantılı ad, kasadan itibaren yol, sistem kökünden itibaren yol — ve sonraki basış yine satır içi başlıktır.
- **<kbd>Ctrl</kbd> ile tıklama ve orta tıklama artık eş anlamlı değil.** Biri sekmeyi açıp ona geçer, diğeri arka planda açar.
- **Notun adına sağ tıklamak dosyanın kendi menüsünü açar.**
- **Açılır liste, pencerenin izin verdiği kadar uzundur**; Obsidian'ın sabit 300 pikseli yerine.
- **Bir alan açıkken bir klasöre tıklamak, ondan sonraki yolun tamamını korur**; alanın içindeki bir klasöre tıklamak ise o klasörün içeriğini eksiksiz listeler.
- **Ayırıcı, Folder notes çalışırken her derinlikte klasör notunu açar** ve klasör notu olan her yerde altı çizilidir. Önceden yalnızca en üst düzey klasörlerde çalışıyordu. Diğer klasör notu eklentileriyle ayırıcı klasörü göstermeye devam eder.

### Düzeltilenler

- **Açık bir alan dosyasından uzun yaşıyordu.** Yol çubuğu açıkken başka bir nota geçmek, oturumun geri kalanında satırın eski dosyayı göstermesine yol açıyordu.
- **Sil, Yeniden adlandır ve Make a copy (kopya oluştur) kasanın dışında reddediliyordu**, asma kilit açıkken bile; görseller, PDF'ler ve sayfalar için bunlara hiç ulaşılamıyordu.
- **Açılır liste açıkken <kbd>Ctrl</kbd>+<kbd>Enter</kbd> hiçbir şey yapmıyordu** — oysa her alan bu şekilde açılır.
- **Açılır liste açık ama hiçbir şey vurgulanmamışken <kbd>Enter</kbd>** hiçbir şey yapmıyordu; artık yazdığınızı onaylar.
- **Her ad zaten en kısa halindeyken taşan bir satır kaydırılamıyordu**; bu da yolun sonunu erişilemez bırakıyordu.
- **Eklentiyi devre dışı bırakmak ölü bir düğme bırakıyordu**; yamaladığı her notun başlığında.

## 1.2.0 — 2026-08-25[^1.2.0]

### Eklenenler

- **Dil ayarı.** Lure öntanımlı olarak Obsidian'ın dilini izler ve kendi dillerinden herhangi birine ayarlanabilir. Obsidian'ın kendisinin sunmadığı Yunanca ve Sanskritçe çevirilere ulaşmanın tek yolu da budur. Ayarın kendi etiketi İngilizce kalır; böylece okuyamadığınız bir dilden de her zaman yeniden bulunabilir.

## 1.1.2 — 2026-08-25[^1.1.2]

### Değişenler

- **Daha hafif stil sayfası.** Satır artık `:has()` seçicilerini ve `!important` kurallarının çoğunu kullanmıyor. Daha az işle yeniden sığdırılıyor ve eklenti incelemesinin uyarıları 56'dan 7'ye düştü.

## 1.1.1 — 2026-08-22[^1.1.1]

### Düzeltilenler

- **Kısa bir klasör adı ortasında boşlukla çizilebiliyordu** — `atlas`, `atl as` olarak — çünkü kısaltılmış biçimi için ayrılan alan adın kendisinden genişti.

## 1.1.0 — 2026-08-22[^1.1.0]

### Eklenenler

- **Sağ tık dağarcığı.** Bir basış menü açar; iki ve üç basış giderek daha fazlasını kopyalar — ad, uzantılı ad, yol. Satırın menüleri artık Dosya Gezgini'ninkilerle girdisi girdisine aynıdır.
- **Kasanın dışında menüler.** Açılır liste satırları ve harici görüntüleyici; açmayı, *Copy path* (yolu kopyala) ve *Show in system explorer* (sistem gezgininde göster) komutlarını sunar; asma kilit açıkken ayrıca *Yeni not*, *Yeni klasör*, *Make a copy* (kopya oluştur), *Yeniden adlandır…* ve *Sil*. Silme, dosyayı sistem çöp kutusuna taşır ve asla kalıcı değildir.
- **Başka yerde açma.** Notun adına veya bir klasöre <kbd>Ctrl</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> ile ya da orta tıklamayla tıklamak, onu yeni bir sekmede, bölünmüş görünümde veya pencerede açar. İkisi de Dosya Gezgini satırları gibi sürüklenebilir.
- **Notları taşımak için satıra sürükleyin.** Bir notu, birkaç notu ya da bir klasörü bir klasör parçasının veya kasa adının üzerine bırakın.
- **Komut: Yol çubuğuna odaklan**, yolun tamamı seçili olarak — öntanımlı kısayol tuşu yoktur, kendinizinkini atayın.
- **Yol çubuğuna bir URL yazın**: `http(s)://` ve `obsidian://` bağlantı olarak açılır, `file://` ve yüzde kodlamalı yollar dosyayı açar.
- **Tab ile tamamlama**, bir kabuğun yaptığı gibi: her basış, klasördeki adların uyuştuğu yere kadar tamamlar ve farklılaştıkları yerde durur. <kbd>Shift</kbd>+<kbd>Tab</kbd> geri yürür. Tamamlanacak bir şey kalmadığında <kbd>Tab</kbd> bunun yerine seçimi genişletir: ad, uzantılı ad, kasadan itibaren yol, sistem kökünden itibaren yol.
- **Açılır liste bulunduğunuz yerde açılır** ve işaret ettiğiniz şeyi alanda önizler; listeden ayrılmak yazdığınızı geri verir.
- **Bir notu kasanın dışına taşıma**, kıracağı bağlantıları sayan bir onaydan sonra. Not önce dışarı kopyalanır, sonra çöpe atılır; böylece silinmiş herhangi bir not gibi kurtarılabilir.
- **Dosya uzantılarını göster** ayarı; ayrıca tırnak içindeki yollar (Windows'un *Yol olarak kopyala* komutunun ürettiği biçimde) anlaşılır.
- **Ayarlar Obsidian'ın ayar aramasında görünür**; Obsidian 1.13 ve sonrasında.

### Değişenler

- **Uzun yollar bölmeye sığar.** Adlar en az işe yarayandan başlayarak kısaltılır — önce kasa adı, sonra uzantı, sonra klasörler, en son notun kendi adı — ve asla birbirinden ayırt edilemeyecekleri noktanın ötesine geçilmez. Kısaltılmış bir adın tamamını okumak için üzerine gelin.
- **Notun adına tıklamak onu uzantısı olmadan seçer**; böylece yeniden adlandırma artık dosya türünü değiştirme riski taşımaz.
- **Yeniden adlandırma tuşu uzantısız adla açılır** ve sonraki basışlar seçimi genişletir.
- **Bir klasöre tıklamak yolun geri kalanını görünür tutar**; kasanın dışında da.
- **Kasanıza geri dönerek gezinmek dosyaları not olarak açar**; harici görüntüleyicide değil, bağlantıları ve geri bağlantılarıyla.

### Düzeltilenler

- **Menü etiketleri her dilde İngilizceydi**; artık Obsidian'ın kendi çevirilerinden geliyor.
- **Yeniden adlandırma tuşu Obsidian'ın yeniden adlandırma penceresinde çıkmaza giriyordu**; not, başlığının ötesine kaydırılmışken.
- **<kbd>Esc</kbd> iki basış gerektiriyordu**; alanı ve açılır listesini kapatmak için.
- **<kbd>Ctrl</kbd>+<kbd>Enter</kbd> düzenleyicide bir bağlantı açıyordu**; yol çubuğunda işlem yapmak yerine.
- **Kasanın dışında yeniden adlandırırken yazılan ad kayboluyordu**; asma kilide basıldığında.
- **Tab ilerlemeden döngüye girebiliyordu**; kendi klasör notunun yanında duran bir klasörde.

## 1.0.4 — 2026-08-13[^1.0.4]

### Eklenenler

- **Üzerinde bulunduğunuz not açılır listede maviyle işaretlenir**; böylece klasörüne geri dönerek gezindiğinizde nereden başladığınızı görürsünüz.

## 1.0.3 — 2026-08-13[^1.0.3]

### Belgeler

- README, eklentinin topluluk dizinindeki sayfasına bağlantı veriyor ve çevrilmiş README'ler güncellendi.

## 1.0.2 — 2026-08-13[^1.0.2]

### Değişenler

- **Obsidian 1.8.7 veya sonrası gerekir** (önceden 1.4.0). Yol çubuğunun dayandığı iki özellik — dosya kopyalama ve alanın altındaki hata araç ipucu — buna ihtiyaç duyar.
- **Sürüm indirmeleri imzalı derleme kaynağı kanıtı (build provenance) taşır**; böylece `main.js` dosyasının bu depodan derlendiğini `gh attestation verify` ile doğrulayabilirsiniz.

### Düzeltilenler

- **Eksik bir harici dosyayı varsayılan uygulamada açmak sessizce başarısız oluyordu**; hata artık bildiriliyor.

## 1.0.1 — 2026-08-13[^1.0.1]

### Düzeltilenler

- **Yeniden adlandırma modunda bir not kendisiyle çakışıyordu** — kendi klasörüne geri dönerek gezinmek, sanki kendi yeniden adlandırılmasını engelliyormuş gibi adını listeden gizliyordu.
- **Obsidian başlatıldıktan sonraki ilk klasör gösterimi hiçbir şeyi genişletmiyordu.**
- **Açılır listeden bir klasör seçmek yeniden adlandırma modunu sonlandırabiliyordu**; klasörün içine inmek yerine.
- **Harici düzenlemelerin üzerine sessizce yazılabiliyordu**; Sync ya da ikinci bir bölme gibi başka bir yazıcı tarafından. Yazma işlemleri artık atomiktir.
- **Odak çerçevesi sıfırlaması diğer görünümlere sızıyordu**; artık yalnızca Lure'un yamaladığı başlıklara uygulanıyor.

### Belgeler

- README ve kullanım kılavuzu, eklentinin sunduğu 44 dilin tamamında mevcuttur.
- Kılavuz, Obsidian'ın artık *Show all file types* (tüm dosya türlerini göster) adını taşıyan ayarını eski adıyla, *Detect all file extensions* (tüm dosya uzantılarını algıla) olarak anıyordu.

## 1.0.0 — 2026-08-10[^1.0.0]

İlk sürüm. Bir notun başlığındaki dosya adını, kasadaki yolunun tıklanabilir ve düzenlenebilir bir içerik haritasıyla değiştirir — notlarınız için Dolphin'inkini örnek alan bir adres çubuğu.

### Eklenenler

- **Bir klasöre tıklayın**; klasörün üst klasörünün içeriğini gösteren bir açılır liste gelir — yolun geri kalanına dokunmadan onu bir kardeşiyle değiştirmek için.
- **Bir klasörden sonraki ayırıcıya tıklayın**; klasör Dosya Gezgini'nde gösterilir ve genişletilir ya da Folder notes bunu üstleniyorsa klasör notu açılır.
- **Dosya adına veya boş alana tıklayın** ve otomatik tamamlamayla bir yol yazın: `/` içeri iner, <kbd>Backspace</kbd> bir düzey dışarı çıkar, <kbd>Enter</kbd> onaylar.
- **Taşıma/yeniden adlandırma modu**, aynı etkileşimleri taşıma ve yeniden adlandırmaya çevirir; doğrulama Obsidian'ın yaptığı gibi yapılır.
- **<kbd>Ctrl</kbd> yeni sekmede açar** — ya da taşıma/yeniden adlandırma modunda notu oraya taşımak yerine kopyalar.
- **<kbd>F2</kbd>**, satır içi başlık ile yol çubuğu arasında gidip gelir.
- **Kasanın dışında** (öntanımlı olarak kapalı): kasa adı diğer kasalarınızı, ev klasörünüzü, dosya sistemi kökünü ve bağlı sürücüleri açar. Siz kilidini açana kadar orada hiçbir şey yazılmaz ve bir not kasanın dışına yalnızca kopyalanabilir, asla taşınamaz.
- **45 dil.**

[^unreleased]: 1.2.0'dan bu yana değişiklikler: <https://github.com/Gelaende51/obsidian-lure/compare/1.2.0...HEAD>
[^1.2.0]: 1.1.2'den bu yana değişiklikler: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.2...1.2.0>
[^1.1.2]: 1.1.1'den bu yana değişiklikler: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.1...1.1.2>
[^1.1.1]: 1.1.0'dan bu yana değişiklikler: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.0...1.1.1>
[^1.1.0]: 1.0.4'ten bu yana değişiklikler: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.4...1.1.0>
[^1.0.4]: 1.0.3'ten bu yana değişiklikler: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.3...1.0.4>
[^1.0.3]: 1.0.2'den bu yana değişiklikler: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.2...1.0.3>
[^1.0.2]: 1.0.1'den bu yana değişiklikler: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.1...1.0.2>
[^1.0.1]: 1.0.0'dan bu yana değişiklikler: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.0...1.0.1>
[^1.0.0]: İlk sürüm: <https://github.com/Gelaende51/obsidian-lure/releases/tag/1.0.0>
