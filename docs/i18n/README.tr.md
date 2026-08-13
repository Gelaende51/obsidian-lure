<!-- README.md çevirisi — durum: commit 7b2691a.
     Makine çevirisi (Claude Opus 5), ana dili konuşanlarca gözden
     geçirilmedi. Düzeltmeler memnuniyetle karşılanır; belirleyici sürüm
     İngilizce README'dir. -->

**Bunu başka dillerde okuyun:** [English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · **Türkçe** · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

Bir notun başlık çubuğundaki dosya adını, kasanın tamamı boyunca tıklanabilir ve düzenlenebilir bir yola çeviren bir [Obsidian](https://obsidian.md) eklentisi — [Dolphin](https://apps.kde.org/dolphin/) dosya yöneticisindeki adres çubuğu gibi.

![Bir klasörden sonraki ayıraca tıklama: imleç üzerinde duruyor ve Dosya Gezgini o klasörü gösterip açtı](../images/breadcrumb.png)

Obsidian 1.4.0+ · yalnızca masaüstü · AGPL-3.0

## Yapay zekâ bildirimi

- **Aracı** — **Claude Opus 5** ve **Claude Sonnet 5** (Anthropic, Claude Code üzerinden): TypeScript kodunu, CSS'i, 45 çeviri takımının tamamını ve belgeleri yazdı. Çeviriler makineyle üretildi ve ana dili konuşanlarca gözden geçirilmedi.
- **Yazar** — Vault51: her özelliği belirledi, her sürümü gerçek bir kasada denedi, düzeltmeleri yönlendirdi, bütün çıktıları gözden geçirdi.
- **Tüketim** — 3–13 Ağustos 2026, dokuz oturum, ~4.928 yanıt: ~7,2 M üretilen jeton, ~23,7 M gönderilen, ~1169,6 M önbellekten yeniden okuma (~1200,5 M toplam).

## Özellikler

- **Bir klasöre tıklayın**, *üstündeki* klasörün içeriği listelensin — yolun geri kalanına dokunmadan bir klasörü komşusuyla değiştirin. Notun adı da aynı şekilde çalışır, uzantısı dahil.
- **Bir klasörden sonraki ayıraca tıklayın**, klasör Dosya Gezgini'nde gösterilip açılsın. Tek bir ayar bu iki rolü yer değiştirir.
- **Herhangi bir satıra sağ tıklayın veya sürükleyin** — Dosya Gezgini'nin kendi bağlam menüsü ve sürükleme davranışı.
- **Dosya adına veya boş alana tıklayın**, tamamlamayla birlikte bir yol yazın. `/` aşağı iner, <kbd>Geri Silme</kbd> bir seviye yukarı çıkar, <kbd>Enter</kbd> onaylar.
- **Klasör üzerindeki kalem düğmesi** aynı etkileşimleri taşı/yeniden adlandır kipine geçirir, Obsidian'ın kendi yaptığı denetimlerle.
- **<kbd>Ctrl</kbd> tuşunu basılı tutun**, yeni bir sekmede açılsın — ya da taşı/yeniden adlandır kipinde, notu taşımak yerine oraya kopyalayın.
- **<kbd>F2</kbd>** notun içindeki başlıkla yol çubuğu arasında geçiş yapar.
- **Kasanın adına tıklayın**, kasa değiştirmeden diğer kasalarınıza, ev klasörünüze, dosya sisteminin köküne ve bağlı sürücülere göz atın. Bir asma kilidi açana kadar salt okunur, ve baştan sona hata renginde çerçeveli. Öntanımlı olarak kapalı — bkz. [kasanın dışında](#kasanın-dışında).
- **İki uyarı düzeyi** — kasanın dışında kırmızı, Obsidian'ın düzenleyicisi bulunmayan metin dosyaları için turuncu. Bkz. [uyarıların iki rengi](usage.tr.md#uyarıların-iki-rengi).
- **Temaya uyan simgeler**, bir CSS parçacığından değiştirilebilir — ve **45 dil**, Obsidian'ın getirdiği her dil.
- **Ayarlar:** hizalama, hazır ayıraçlar, hangi tıklamanın listeyi açacağı, kasanın adı, gizli dosyalar.

![Taşı/yeniden adlandır kipinde aynı liste: dosyanın şimdiki adı en üste sabitlenmiş, altında komşu klasörler, var olan notlar ise soluk](../images/dropdown.png)

*Taşı/yeniden adlandır kipinde aynı liste başka bir şey sunar: notun şimdiki adı en üste sabitlenir, böylece yeniden adlandırmadan taşınabilir; altında taşınabileceği klasörler; ve kazayla hiçbir şeyin üzerine yazılmasın diye zaten dolu olan adlar soluk.*

→ [Tam kullanım kılavuzu](usage.tr.md)

## Kasanın dışında

Obsidian'ın geliştirici ilkeleri, bir eklentinin kasa dışındaki dosyalara her erişimini açıklamasını gerektirir, o hâlde dolambaçsızca:

**Bunlardan herhangi birini yapıp yapmadığı.** Yalnızca **Harici dosyalara erişim** ayarını açarsanız, ki bu **öntanımlı olarak kapalıdır**. Ayar kapalıyken eklentiden harici bir yola ulaşmanın hiçbir yolu yoktur ve aşağıda anlatılan kodun hiçbiri asla çalışmaz.

**Ne okuduğu.** Yalnızca siz istediğinizde. Kasanın adına tıklamak diğer kasalarınızı listeler — Obsidian'ın kendi `obsidian.json` dosyasından okunarak — ayrıca ev klasörünüzü, dosya sisteminin kökünü ve bağlı sürücüleri (Linux'ta `/proc/mounts`, macOS'te `/Volumes`, Windows'ta sürücü harfleri). Oradan gezinmek dizin içeriklerini listeler ve bir dosyayı açmak yalnızca o dosyayı okur.

**Ne yazdığı.** Hiçbir şey, siz bunu söyleyen bir düğmeye basana kadar. Böyle iki düğme vardır ve her biri yalnızca kendi alanını kapsar:

- Görüntüleyicinin **Metin olarak düzenle** düğmesi önünüzdeki dosyanın kilidini açar; yalnızca o dosyanın, yalnızca o sekmede. Bundan sonra yazdıkça değişiklikleriniz ona kaydedilir.
- Başlıktaki **asma kilit**, yalnızca yol çubuğu kasanızın dışını gösterirken görünür ve harici yollarda oluşturmayı, yeniden adlandırmayı ve taşımayı açar. İçeri döner dönmez yeniden kilitlenir, böylece izin verdiğiniz klasörden daha uzun yaşamaz.

Kilit açmaların hiçbiri çalışma alanına ya da ayarlara kaydedilmez, dolayısıyla yazma hiçbir zaman açtığınızı hatırlamadığınız bir dosyanın üzerinde kurulu kalmaz. İki durumda da hiçbir şeyin üzerine yazılmaz — var olan bir hedef reddedilir; bunun için yarışı kaybedebilecek bir denetim yerine dosya sisteminin kendi dışlayıcı oluşturması kullanılır — ve bir not asla kasanızın dışına *taşınamaz*, çünkü ona giden bağlantılar sessizce kırılırdı; <kbd>Ctrl</kbd> tuşunu basılı tutmak onu bunun yerine dışarı kopyalar.

**Neden.** İstediğiniz notlar çoğu zaman başka bir kasada, bir eşitleme klasöründe ya da bir USB bellektedir ve Obsidian'ın kendi yanıtı — kasa değiştir — açık olan her şeyi kapatır. Bu, ayrılmadan gidip bakmanızı ve hazır oradayken bir yazım hatasını düzeltmenizi sağlar.

**Sınırlama.** Obsidian'ın düzenleyicisi kasa içindeki dosyalara bağlıdır, bu yüzden harici bir dosya bağlantılarıyla, geri bağlantılarıyla ve geri kalanıyla gerçek bir not olarak **açılamaz**; bunu hiçbir eklenti yapamaz. Lure onu bunun yerine kendi görüntüleyicisinde gösterir (Markdown, resim, ses, video, PDF) ve diğer her şey için *Harici olarak aç* sunar. Yol çubuğu kasanızın dışını gösterdiği sürece hata renginde çerçeveli kalır ve iz, seçtiğiniz yerden başlar — bir kasa adı, ev klasörünüz, bir sürücü — makinenin dizin düzeninden değil.

## Kurulum

Henüz topluluk eklentileri dizininde değil.

**Elle:** `main.js`, `manifest.json` ve `styles.css` dosyalarını [en son sürümden](https://github.com/Gelaende51/obsidian-lure/releases) `<vault>/.obsidian/plugins/lure/` klasörüne indirin, sonra **Ayarlar → Topluluk Eklentileri** altından etkinleştirin.

**BRAT:** `Gelaende51/obsidian-lure` adresini beta eklenti olarak ekleyin.

**Kaynaktan:** `npm install && npm run build` — bkz. [geliştirme](../development.md).

## Uyumluluk

Hiçbir eklenti gerekmez. Çekirdek **Dosya Gezgini**, açıksa, klasörleri kenar çubuğunda gösteren şeydir; o olmadan bu tıklamalar hiçbir şey yapmaz.

Notun başlığını paylaşan ya da klasör tıklamasına yanıt veren topluluk eklentilerine karşı denendi — her iki yükleme sırasında, her biri açık ve kapalıyken:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — ayıraç, klasörü göstermek yerine klasörün notunu açar; böylece yolun her parçası gidilebilecek bir yere dönüşür. Başlıktaki yolu sahiplenen tek klasör notu eklentisi; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) ve [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) orayı dinlemez, dolayısıyla ayıraç klasörü her zamanki gibi gösterir.
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer) ve [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — ikisi de aynı başlık ögesine çizer; Lure hangisi önce yüklenirse yüklensin satırını korur ve birini kapatmak diğerine dokunmaz.
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header), [Running Head](obsidian://show-plugin?id=running-head), [Crumbs](obsidian://show-plugin?id=crumbs-obsidian), [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — kendi şeritlerine sahiptirler ve sorunsuz bir arada bulunurlar.

Yalnızca masaüstü — etkileşim modeli imleci üzerine getirmeyi, isabetli tıklamaları ve bir klavye gerektirir. Tam sonuçlar, sınanmayı bekleyenler ve Quick Explorer ile Breadcrumbs karşılaştırması [uyumluluk](../compatibility.md) belgesindedir.

## Katkıda bulunma

- Sorun bildirimleri ve pull request'ler memnuniyetle karşılanır — özellikle **çeviri düzeltmeleri**, çünkü 45 dilin tamamı makineyle çevrildi ve ana dili konuşanlarca gözden geçirilmedi. Kurulum ve temel kurallar için bkz. [geliştirme](../development.md).
- **Sorun takibi:** https://github.com/Gelaende51/obsidian-lure/issues
- **Bağışlar:** [Ko-fi](https://ko-fi.com/vault51). Eklenti her hâlükârda ücretsiz ve AGPL lisanslıdır; bahşişler sevindirir, asla istenmez. Amaçlanan kullanım karbon dengelemesidir — bir niyet, bir taahhüt değil: toplam zahmete değecek düzeye gelene kadar hiçbir şey dengelenmez ve gerçekten bir şey dengelendiğinde bu satır bunu söyleyecek.

## Teşekkürler

- **Vault51** — yazar: tasarım, gereksinimler ve baştan sona elle sınama.
- **Claude Opus 5** ve **Claude Sonnet 5** (Anthropic, Claude Code üzerinden) — uygulama, çeviriler ve belgeler, yazarın yönlendirmesiyle. Bkz. [yapay zekâ bildirimi](#yapay-zekâ-bildirimi).
- **[Obsidian](https://obsidian.md)** — bunun genişlettiği uygulama ve eklentinin kullandığı her bileşenin kaynağı: eklenti API'si, `setIcon` arkasındaki Lucide simge takımı, bağlam menüsü etiketlerinin okunduğu gömülü i18next örneği ve kendi CSS sınıfları ile değişkenleri. Üçüncü taraf hiçbir şey paketlenmez; eklentinin **çalışma zamanı bağımlılığı yoktur**.

> **Obsidian ekibi bu projeye hiçbir şekilde katılmadı** — yazmadı, gözden geçirmedi, onaylamadı, desteklemedi. Obsidian, Dynalist Inc. şirketinin ticari markasıdır; bu bağımsız ve ilişkisiz bir eklentidir.

Katkılar geldikçe katkıda bulunanlar burada listelenecek.

## Bağlantılar

- **Belgeler:** [docs/](../)
- **Web varlığı / kaynak:** https://github.com/Gelaende51/obsidian-lure
- **Bağışlar:** [Ko-fi](https://ko-fi.com/vault51) — bkz. [katkıda bulunma](#katkıda-bulunma).
- **Lisans:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. Çatallamalar ve yeniden dağıtılan derlemeler kaynaklarını aynı lisansla yayımlamak zorundadır.
