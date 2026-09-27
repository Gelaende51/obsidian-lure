<!-- docs/usage.md dosyasının çevirisi — durum: commit 94b1372.
     Makine çevirisi (Claude Sonnet 5), ana dili Türkçe olan kişilerce
     gözden geçirilmedi. Eklentinin etiketleri src/lang/translations.ts
     dosyasından, Obsidian'ınkiler ise uygulamanın kendi getirdiği
     metinlerden gelir; yani ekranınızda gördüğünüzle örtüşürler. -->

[English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · [Čeština](usage.cs.md) · [Dansk](usage.da.md) · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · [Bahasa Indonesia](usage.id.md) · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · [Norsk](usage.no.md) · [Polski](usage.pl.md) · [Português](usage.pt.md) · [Português (Brasil)](usage.pt-BR.md) · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · **Türkçe** · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

# Kullanım

[← README'ye dön](README.tr.md)

## Yol çubuğu

Notun kasa içindeki tam yolu, görünüm başlık çubuğundaki çıplak dosya adının yerini alır — sekme sırasının altındaki, ileri/geri düğmelerini de barındıran çubuk.

Çubuktaki iki şey tıklanabilir ve hangisinin ne yapacağına **Klasör adı listeyi açar** karar verir:

| | Klasör adı | Ardındaki ayırıcı |
| --- | --- | --- |
| **Açık** (varsayılan) | O klasörü düzenleme için seçer | Klasörü açar |
| **Kapalı** | Klasörü açar | O klasörün içine iner |

"Klasörü açar", o parçaya tıklamanın eklentisiz Obsidian'da yaptığı şey demektir. Orayı dinleyen bir eklenti yoksa klasör kenar çubuğundaki Dosya Gezgini'nde gösterilir — vurgulanmış ve içeriği görünecek şekilde açılmış olarak.

Klasörün notu zaten okumakta olduğunuz not ise, tıklama bunun yerine klasörü gösterir — ekranda zaten olmayan açılacak bir şey yoktur, ki ikinci basışın anlamı her zaman bu olmuştur.

[Folder notes](obsidian://show-plugin?id=folder-notes) yüklüyken aynı tıklama bunun yerine o klasörün notunu açar, **her derinlikte**: not burada o eklentinin kendi kuralına göre çözülür, bunu eklentinin kendisine bırakmak yerine. O eklenti yalnızca işaretlediği klasörleri tanır; bir düzeyden daha derin bir yolda bunların hiçbiri olmadığı için, üst düzeydeki bir klasörün notunu açan basış içeride hiçbir şey yapmıyordu. Diğer iki klasör-notu eklentisi okunacak bir kural yayımlamaz ve satırı hiç talep etmez, dolayısıyla onlarla ayırıcı klasörü her zamanki gibi gösterir. Başlık yolunu talep ettiği tespit edilen tek klasör-notu eklentisi budur; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) ve [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) klasör notlarını yönetir ama yol çubuğundaki bir tıklamayı dinlemez, dolayısıyla onlarla ayırıcı klasörü her zamanki gibi gösterir. Bkz. [uyumluluk](../compatibility.md#verified-against).

Bir ayırıcının **altı yalnızca ondan önceki klasörün gerçekten bir klasör notu olduğunda çizilir**, böylece alt çizgi açılacak bir şeyin orada olduğuna dair bir sözdür — [Folder notes](obsidian://show-plugin?id=folder-notes) çalışırken her derinlikte, çünkü not burada çözülür, bunu o eklentinin işaretlemesine bırakmak yerine. Çalışan eklenti bu değilse hiçbir şeyin altı çizilmez ve hiçbir şey açılmaz: ayırıcı gösterir, tıpkı hiçbir klasör-notu eklentisi yokken olduğu gibi. Her ayırıcı yine de her iki durumda da tıklanabilir kalır — altı çizilmemiş biri klasörünü kenar çubuğunda gösterir ve açar, ki işaretçi imleci bunu yine de belli eder. Alt çizgi aynı anda klasör adından da kalkar: değiştirme açıkken ad listeyi açar, dolayısıyla onu nota giden bağlantı olarak işaretlemek yalan olurdu.

**Yeniden adlandırma/taşıma modu ikisini de geçersiz kılar**, ayar ne derse desin: bir taşıma beklerken çubuktaki hiçbir şey klasör açmaz, çünkü bir klasör açmak taşımayı terk etmek olurdu. Klasör adları düzenleme için seçilir, ayırıcılar aşağı iner — ikisi de hedefi belirlemenin yollarıdır — ve açmanın askıya alındığını göstermek için altı çizgi kaybolur.

**Kasa kökü**, yol parçası olmayan tek parçadır. Kardeşlerini listeleyebileceği bir üst klasörü yoktur, bu yüzden onun yerine [konumlar listesini](#kasanın-dışında-gezinmek) açar — diğer kasalarınız, ev klasörünüz, dosya sisteminin kökü ve bağlı sürücüler.

## Kasanın kendi ayırıcısı

Kasa adının hemen ardından gelen ayırıcı bir klasörü değil, kasanın
kendisini temsil eder, dolayısıyla başka hiçbir ayırıcının yapamayacağı
şeyi yapar:

| | İlk tıklama | Sonraki tıklama |
| --- | --- | --- |
| **Bir başlangıç sayfası eklentisiyle** (Obsidian açılınca sizi karşılayan bir sayfa) | O sayfayı bu bölmede açar | Dosya ağacını katlar |
| **Böyle bir eklenti yokken** | Dosya ağacını katlar | Açık olan tam olarak neyse onu geri koyar |

Sıradan tıklamalardır, çift tıklama değil: sayfa bir kez açıldığında
ayırıcının açacak başka bir şeyi kalmaz, dolayısıyla sonraki basış katlama
olur — üzerinde ne kadar zaman geçirirseniz geçirin.

Açılacak bir başlangıç sayfası olduğunda **altı çizilidir**, ki bu bir
klasörün ayırıcısının yaptığı sözün aynısıdır: orada bir şey vardır.
Katlama bir aç/kapa düğmesidir — sonraki basış açık olan klasörleri, yalnızca
onları geri getirir, böylece düzenlediğiniz bir ağaç başka bir şeye
bakmakla kaybolmaz.

## Dosyasız bir bölme

Boş bir sekme, grafik ve dosya adlandırmayan başka her şey kendi satırına
sahip olur: kasa, ardından bölmenin ne tuttuğunu söyleyen bir parça.

```
my-vault / :blank      a new tab
my-vault / :graph      the graph, local or global
my-vault / :<type>     anything else with no file
```

**Kasa kökünün kendi listesi** de bu sayfaları sunar, içinde gerçekten
bulunan klasörlerin ve notların yanında: orada `:graph` ya da `:search`
seçin, bölme tıpkı bir not seçmenin notu açması gibi o görünümü açar. Hangi
sayfaların var olduğu burada yazılı olmaktan çok Obsidian'dan okunur —
bir dosya göstermek için var olmayan her görünüm, dolayısıyla bir görünüm
kaydeden bir eklenti (bir ana sayfa sekmesi, bir takvim) bu eklenti hakkında
hiçbir şey bilmeden görünür. Bir dosyaya ihtiyaç duyan görünümler —
Markdown, PDF, görseller, tuvaller, veri tabanları — sunulmaz: onların
gösterecek bir şeyi yoktur.

Buradaki nokta iki nokta üst üstedir — hiçbir dosya ya da klasör `:graph`
diye adlandırılamaz, dolayısıyla satır açılabilecek bir yolla karıştırılamaz.
Etiket, Obsidian'ın kendi ifadesinden çok görünüm türünden gelir, dolayısıyla
arayüz dili ne olursa olsun aynı okunur, ve sondaki bir `-view` düşürülür:
bir ana sekme eklentisi görünümünü `home-launcher-view` olarak kaydeder ve
satır `:home-launcher` yazar.

Boş alana ya da etiketin kendisine tıklamak **kasa kökündeki alanı açar**:
bir yol yazın ve <kbd>Enter</kbd> onu tam bu bölmede açar, aynı tamamlamayla,
aynı listeyle ve henüz orada olmayanı oluşturmayı öneren aynı kırmızı alanla.
Boş bir sekme, gitmek istediğiniz yeri yazmak için iyi bir yerdir, ki
zaten amacı budur.

Etiket yalnızca bir etikettir, başka bir şey değil: liste yok, sürükleme
yok, yeniden adlandırma yok. Kenar çubuklarındaki bölmeler tamamen kendi
hâllerine bırakılır — bir geri bağlantılar bölmesi Obsidian'ın verdiği
başlığı korur.

Tuvallerin, PDF'lerin, görsellerin ve veri tabanlarının bunlardan hiçbirine
ihtiyacı yoktur. Bunlar dosyadır, dolayısıyla sıradan bir yol çubuğu alırlar.

## Bir parçaya tıklamak: onu bir kardeşiyle değiştirin

Bir klasör adına tıklamak **o klasörün adını** bir metin alanında seçer ve **bir üst düzeydeki** klasörün — yani üst klasörünün — listesini açar. Yazmak ya da bir satır seçmek bu klasörü bir kardeşiyle değiştirir ve altındaki her şeye dokunmaz; yani `Projeler/2026/Başlangıç.md` → `2026` tıklayın → `2025` seçin size `Projeler/2025/Başlangıç.md` verir.

**Notun adına** tıklamak kendi klasörüne karşı aynı biçimde çalışır ve adı **uzantısı olmadan** seçer — yeniden adlandırmak sık yapılan düzenlemedir, ve `.md`'yi de içeren bir seçimin üstüne doğrudan yazmak eskiden dosya türünü kazara değiştiriyordu. Uzantı bir tuş vuruşu uzaklıkta görünür kalır: <kbd>→</kbd> ona ulaşır, ve tüm satıra genişleyen çift tıklama hepsini alır.

Klasöre tıklamak zaten bir parçayı seçmiştir, dolayısıyla **bir tıklama daha** seçimi tüm satıra genişletir — o klasör *ve* altındaki her şey — ve yazdıklarınız yolun kalanını tek seferde değiştirir. Gezinme ve yeniden adlandırma/taşıma modunda aynı biçimde çalışır.

Bu yalnızca alanı açan tıklamanın devamı olarak geçerlidir. Alanı bir kez kullandıktan sonra herhangi bir metin alanı gibi davranır: tıklama imleci yerleştirir, çift tıklama bir sözcük alır, üç tıklama satırı alır.

Her iki durumda da yolun kalanı alanın çevresinde görünür kalır, öncesinde çipler olarak ve sonrasında seçilmemiş metin olarak, böylece tam yol başlıktan hiç kaybolmaz. Seçimi değiştirmek için yazın, ya da onu koruyup oradan düzenlemek için <kbd>→</kbd> tuşuna basın. Liste, önceden ne doldurulmuş olursa olsun tüm klasörü gösterir; yalnızca gerçekten yazmaya başladığınızda filtrelemeye başlar.

## Ayırıcıyla aşağı inmek

Bir ayırıcıya tıklamak (**Klasör adı listeyi açar** kapalıyken) ondan önceki klasörün içine iner: liste *o* klasörün içeriğini gösterir ve yolun kalanı alanda seçili olarak açılır. Bir klasör seçmek onu yol izine ekler ve hemen bir sonraki listeyi açar, böylece başlık çubuğundan ayrılmadan bir ağacın içinde tıklaya tıklaya inebilirsiniz.

## Liste bulunduğunuz yerde açılır

Liste, üzerinde durduğunuz girişte açılır — bu çubuğun ait olduğu not, ya
da bir klasör tıklaması üst klasörünü listelediğinde o klasör — ilk satırda
değil. İki yüz notluk bir klasörde ilk satır size hiç yakın değildir.

**Bir ad üzerinde tekerlek çevirmek onun listesini açar ve içinde gezdirir.**
İlk döndürme, adın basılmasının açtığı aynı listeyi açar ve sonraki her
döndürme vurguyu bir satır kaydırır; işaret ettiğiniz şeyi tam olarak ok
tuşlarının yaptığı gibi alana koyar — böylece klavye kullanmadan bir kardeş
bulunup alınabilir. Her iki uçtan öteye döndürmek metninizi size geri verir.
Bölmeden daha uzun yolu olan bir satır, tekerleğe yana kaydırarak yanıt
verir; bu okuma, geçerli olduğu sürece kazanan okumadır.

Liste **pencerenin izin verdiği kadar yüksektir**. Obsidian kendi öneri
listelerini altlarında ne olursa olsun 300 piksele sınırlar; bu liste
pencerenin altına kadar uzanır, kenardan birkaç piksel önce durur, ve
klasör bundan fazlasını içerdiğinde ancak o zaman kaydırma yapar. **Yol
çubuğundan geniş değildir**: sığmayan bir ad, satırın bir adı kısalttığı
gibi kısaltılır, ve üzerine işaret ettiğinizde bütün hâliyle gösterilir.

Listede gezinmek **işaret ettiğiniz şeyi alana koyar**, ok tuşuyla ya da
üzerine gelerek — düzenlemekte olduğunuz parçanın yerine, yolun kalanı
yerinde dururken — böylece üzerinde bulunduğunuz satır, elde edeceğiniz
yol da olur.

Yolun kalanı **yalnızca işaret ettiğiniz şeyin altında var olduğu kadarıyla**
gösterilir. Düzenlemekte olduğunuz parçanın ardında `2026/not.md` olan bir
klasörde durup, içinde `not.md` bulunan bir `2026`'ya sahip bir klasörü
işaret etmek hepsini gösterir; `2026`'ya sahip ama notu olmayan biri yalnızca
`2026`'yı gösterir; hiçbirine sahip olmayan biri addan sonra hiçbir şey
göstermez, ve bir dosya da göstermez, çünkü hiçbir şey bir dosyanın altında
yaşamaz. **Yazdığınız şey** onu yazarken, orada henüz ne kadar az olursa
olsun, tüm yolunu korur — yarım yazılmış bir ad bir karar değildir. Bir adı
içeri yerleştirmek bir karardır, ve ondan ulaşılamayan şey o noktada kesilir;
oluşturmakta olduğunuz klasörler *ondan sonra* yazdıklarınızdır, ki
<kbd>Enter</kbd> onları tam da orada oluşturur.
Yazmış olduğunuz metin korunur: listenin **her iki ucundan öteye** hareket
etmek — ilk girişten yukarı, ya da sondan aşağı — onu bırakır ve metninizi
geri koyar, hiçbir şey vurgulanmadan. Alan, halkadaki herhangi bir giriş
gibi bir duraktır, dolayısıyla bir tur son satırdan ilkine atlamak yerine
onun içinden geçer, ve oradan devam eden basış diğer uca doğru döner.

**İşaretçiyi listeden çekmek** de metninizi geri koyar — ve vurguyu fare
gelmeden önce her neyse ona geri verir: ok tuşuyla gittiğiniz giriş, alanda
yeniden görünerek, ya da listenin üzerinde açıldığı giriş, çünkü bulunduğunuz
yer orasıdır. Üzerine gelmek seçmekten çok bakmanın bir yoludur, dolayısıyla
işaretçinin liste boyunca bir süpürüşü size hiçbir şeye mal olmaz.

Listenin kendisi içinde gezinirken değişmez — alana önizlenmiş olana göre
değil, yazdığınıza göre filtrelemeye devam eder — dolayısıyla altınızdaki
giriş bir sonraki basıştan önce kaymaz. Yazmak önizlemeyi değiştirir ve
her zamanki gibi filtreler.

**Neye göre filtrelediği düzenlemekte olduğunuz parçadır**, alandaki her
şey değil. Bir klasöre tıklamak, değiştirdiğiniz adın ardında yolun kalanını
orada bırakır, dolayısıyla tüm alana göre filtrelemek `2026/Başlangıç.md`
adlı bir çocuk arar ve hiçbir şey bulamaz — liste, ne yazarsanız yazın ilk
tuş vuruşunuzda kapanırdı. **Uzantı da imleç noktadan önce olduğu sürece**
buna dahil edilmez: bir notun adına tıklamak gövdeyi seçer ve `.md`'yi
ardında bırakır, dolayısıyla bir harf yazmak alanı `a.md` yapar, ve
aradığınız bu değildir. İmleci noktanın ötesine koyun, uzantı da başka
her şey gibi sayılır. Gerçekten hiçbir şeyle eşleşmeyen bir ad yine de
listeyi kapatır, çünkü boş bir liste dürüst yanıttır.

Bir önizleme **yalnızca o tek parçayı değiştirir ve yolun kalanına
dokunmaz**: bir klasörü işaret etmek, bu adım o olsaydı ne olurdu diye
sorar, yolu atmak değil. Listeden çıkmak metni *ve* sahip olduğunuz seçimi
geri getirir, böylece bir sonraki tuş vuruşu, bakmadan önce neyi
değiştirecek idiyse onu değiştirir.

## Listedeki satırlar gerçek dosya yöneticisi satırlarıdır

Listedeki her dosya ve klasör, Dosya Gezgini'ndeki satırı gibi davranır:

- Dosya Gezgini'nin verdiği aynı bağlam menüsü için **sağ tık**, satır satır — diğer eklentilerin eklediği satırlar da dahil. Bir klasör *Yeni not*, *Yeni klasör*, *Yeni tuval*, *Yeni veri tabanı*, *Kopya oluştur*, *Klasörü şuraya taşı…*, *Klasörde ara*, *Yolu kopyala*, *Sistem gezgininde göster*, *Yeniden adlandır…* ve *Sil* sunar; bir dosya kendi karşılığını sunar, *Varsayılan uygulamada aç* dahil.
- Obsidian'ın bir dosyayı kabul ettiği her yere bir girişi **sürükleyin**: bir bağlantı eklemek için bir düzenleyiciye, taşımak için Dosya Gezgini'ndeki bir klasöre, açmak için sekme çubuğuna.

Menü ifadeleri Obsidian'ın kendi çevirilerinden gelir, dolayısıyla her dilde uygulamanın geri kalanıyla uyuşur.

## Bir yol yazmak

- Kırıntı yolunun önündeki veya arkasındaki **boş alana** tıklamak, tüm yol üzerinde bir metin girişi açar *ve notu Dosya Gezgini'nde gösterir*, böylece ağaç ikinci bir hareket olmadan bölmeyi takip eder. **Tıklamalarınızı sayar**: bir tıklama uzantısız yolu seçer, iki tıklama uzantılı seçer, üç tıklama makinenin bildiği yolu seçer. **Dosyanın adına** tıklamak aynı şekilde sayar ama bir basamak aşağıdan, adın kendisinden başlar: bir tıklama uzantısız seçer, iki uzantılı, üç tıklama ise *kasa klasörünüzden başlayan* tüm yola genişler — makinenin biçimi yerine bir bağlantının veya aramanın istediği biçim. Dördüncü bir tıklama işte o yola ulaşır.
- **Sayım, alanı açan seriye aittir.** Bu seri kesildiğinde — durakladığınızda, yazdığınızda veya metinde bir yere tek tıkladığınızda — alan artık her yerdeki gibi sıradan bir metin alanıdır ve içinde çift tıklamak, başka her yerde olduğu gibi işaretçinin altındaki sözcüğü seçer. Seçili olanın üzerine yazın veya yerinde düzenleyin. (Dosya adının kendisine tıklamak yalnızca dosya adını seçer; yukarıya bakın.) Aynı alana sağ tıklamak, iki, üç ve dört tıklamadaki o üç seçimi **kopyalar** — bir düğme onları gösterir, diğeri onları alır. **Tek** bir sağ tıklama, tamamı seçili olarak yolu açar ve ona yapılabilecekleri sunar: kes, kopyala, yapıştır, tümünü seç — Obsidian'ın kendi ifadeleriyle.
- Yolun üzerine yapıştırmak için **boş alana orta tıklayın**: alan *kasa köküNDEN* başlayan tüm yol üzerinde açılır, böylece pano tamamının yerini alır ve inen şey seçili kalır. Ardından <kbd>Enter</kbd> oraya gider.
- Bu notu kendi sekmesinde yeniden açmak için **boş alana <kbd>Ctrl</kbd>+tıklayın**; ikinci sekmenin birinciyle karıştırılmaması için Dosya Gezgini'nde yanıp söner. **Kasa adı** üzerinde <kbd>Ctrl</kbd>+tıklama veya orta tıklama, hiçbir şey tutmayan, kasa kökünde duran ve listesi zaten görünen bir sekme açar — sıfırdan bir yol yazmak için bir yer.
- Bir kırıntı izi görünürken yazmak, sondaki parçayı geçerli klasörle sınırlı canlı otomatik tamamlamalı küçük bir girişe dönüştürür.
- **Dosya sisteminin kökünden bir yol yazılabilir.** Boş bir alanın önündeki `/`, bir basamağı tamamlamak yerine bir kök açar, ondan sonraki her eğik çizgi ona aittir ve `~` ev klasörünüzdür. Alan böyle bir yol tutarken açılır liste kasa yerine makineyi listeler ve satırın açılış parçası kenara çekilir — alandaki şey kökten başlar ve bunu belli eder. *Harici dosyalara erişim* kapalıyken liste bunun yerine boş durur, çünkü <kbd>Enter</kbd> zaten yolu reddedecektir.
- **Bir sayfa yalnızca seçilmekle kalmaz, yazılabilir de.** `:graph`, `:search` veya eklentilerinizin kaydettiği her ne ise — [kasa kökünün listesinin](#dosyasız-bir-bölme) sunduğu etiketler. Hiçbir ad iki nokta üst üste içeremeyeceğinden, herhangi bir yerde iki nokta üst üste yazmak bunları çağırır ve <kbd>Enter</kbd> o görünümü bu bölmede açar. **Bir klasörün içinde** yazılan `:graph`, o klasörün grafiğini açar — kendi arama kutusunda sanki orada yazılmış gibi `path:"o/klasör"` ile süzülmüş grafik; kasa kökünde ise bu, grafiğin tamamıdır. <kbd>Tab</kbd>, bir klasörün adını tamamladığı gibi bu adı da tamamlar — ve alanın tuttuğu başka her şeyi de beraberinde götürür, çünkü bir sayfa hiçbir klasörde değildir ve bir klasörün altında hiçbir şey yaşamaz. Böyle bir bölmedeki etikete tıklamak, alanı zaten onu tutuyor halde açar.
- **<kbd>Tab</kbd>'ın yazacağı şey siz yazarken sunulur.** Yazdığınızla başlayan her alt öğe bir süre uzlaşmaya devam ettiği yerde, bu uzlaşı imlecin ardında, seçili olarak görünür; uzlaşmayı bıraktıkları yerde ise onlardan ilkine doğru olan adım görünür — ya da ok tuşuyla gittiğiniz satıra doğru olan, çünkü <kbd>Tab</kbd>'ın yöneleceği satır odur. Bir adın üzerine yazmak uzantısını olduğu yerde bırakır ve önüne bir sunu koyar, yeni girilen bir klasör ise ilk adımını sunar; yani hiçbir şeyin sunulmadığı ve yine de <kbd>Tab</kbd>'ın bir şey yazdığı bir durum yoktur. O harfleri yazarsanız bir bir yutulur; başka bir şey yazarsanız yok olur. <kbd>Tab</kbd> veya <kbd>End</kbd> onu bütünüyle alır, <kbd>→</kbd> bir harfini alır, <kbd>Backspace</kbd> yazdığınız hiçbir harfe dokunmadan onu geri alır ve siz yazana kadar bir daha hiçbir şey sunulmaz — böylece istemediğiniz bir addan her zaman bir çıkış yolu vardır. Bir <kbd>Tab</kbd> basışından sonra, yazılan bir harften sonraki gibi, bir sonraki adım hemen sunulur. Açılır listenin listelediği şey, sunulanla değil, yalnızca **sizin** yazdığınızla süzülür.
- **Sunular büyük/küçük harfi yok sayar.** `sch`, adın yazıldığı gibi `Schemes`i sunar; sunuyu geri almak harflerinizi tam yazdığınız gibi geri verir. Hem `Test` hem `test` var olduğunda, yazdığınız gibi yazılmış olan sunulur.
- Alanda, sunulan parça yalnızca **seçili** durur. Bunun tam olarak yazıldığı yer listedir: her satır, adın neresinde eşleştiyse **yazdığınızla eşleşen parçayı kalın olarak** gösterir — `kick`, `Weekly kickoff`i bulur ve bunu belli eder. **Yazdığınızla başlayan adlar önce gelir**, yalnızca onu içerenlerin önünde, ve kenarları boyunca bir çizgiyle işaretlenir: yazdığınızdan fazlasını paylaştıklarında **mavi** — böylece <kbd>Tab</kbd>'ın hepsi için ekleyecek bir şeyi vardır — ve sununun ayrıldıkları dalda **yeşil** — `te` ile `test1`, `test2`, `text1` ve `text2` `te`+`st`yi sunar, böylece iki `test` satırı yeşil, iki `text` satırı ise düz çizgide kalır. Her biri, yalnızca sunulan değil, **<kbd>Tab</kbd>'ın ona doğru atacağı adımı** altını çizerek gösterir ve bu alt çizgi sunu değiştikçe onu takip eder.
- **Yazmak, vurgulanan satırı bırakır.** Liste, üzerinde durduğunuz girdiyle açılır, ama yazmaya başladığınız anda mesele başka bir yerdedir ve kimsenin koymadığı bir vurgu, çoktan verilmiş bir seçim gibi okunur.
- Sunu her zaman yalnızca önünüzdeki bir metindir: yazdığınız harfler siz yazarken tam yazdığınız gibi kalır ve sunuyu almak, adı klasörün yazdığı biçimde yeniden yazar, çünkü bir yolun diskle eşleşmesi gerekir. `sk` + <kbd>Tab</kbd>, `skyline`e değil `Skyline`e ulaşır.
- **Alan, adlandırdığı şeyin rengini taşır**, açılır listedeki satırının rengiyle aynı: bir not için mor — bir klasörün kendi notu dahil —, not olmayan her şey için turuncu, üzerinde olduğunuz not için mavi. Rengini aldığı satır, tam olarak yazdığınızla adlandırılmış olandır; bu yoksa vurgulanan satır, o da yoksa yazdığınızın hâlâ ulaştığı ilk satırdır.
- **İçindeki hiçbir şeye karşılık gelen olmadığında alan kırmızıya döner** — dosya yok, klasör yok ve açılır listenin hiçbir satırı ona götürmüyor. Bu noktadan sonra <kbd>Enter</kbd>, alandakini açmak yerine onu oluşturur ve kırmızı, siz onaylamadan önce bunu belli eder. Bu, gidip bakılacak bir yer olmayan bir web adresi için hiç görünmez. Yalnızca eksik olan parça değil, alanın **tamamı** renklendirilir: bir metin alanı kendi içeriğinin yarısını renklendiremez. Yeniden adlandırma/taşıma modunda alan, geçersiz bir ad için kendi kırmızısını korur — orada, hiçbir şeyin karşılık gelmediği bir ad zaten amaçtır. Bir adın **zaten alınmış olması** onaylandığında ele alınır; yoldaki dosyaya ne yapılacağını soran bir iletişim kutusuyla — bkz. [Alınmış bir ad](#alınmış-bir-ad): `Notes.md`ye doğru yazılan her ad, kendi başına dosya olabilecek adlardan geçer, bu yüzden harf harf işaretlemek kimsenin henüz sormadığı bir ad hakkında uyarı verirdi.
- `/`, yazmakta olduğunuz parçayı onaylar ve içine iner, arkasında kalanı korur — <kbd>Tab</kbd> içine adım attığında yaptığı gibi.
- Boş bir girişte <kbd>Backspace</kbd>, üst klasöre geri çıkar ve imleç sonda olacak şekilde onun adını yeniden açar. Tek başına kalmış bir uzantının önündeki <kbd>Backspace</kbd> da aynısını yapar — yalnızca `.md` tutan bir alan hiçbir şeyi adlandırmaz — ve yalnız kalan uzantı da onunla birlikte gider.
- **Bir alan açıkken bir klasöre tıklamak, alanı o klasörden sonraki tüm yola genişletir**, klasörün kendi adı seçili olarak — satırdan tıklamış olsaydınız olacak şeyin aynısı, ve alanın tuttuğu her şey korunur. Alan açıkken içindeki şey satırın kuyruğudur, bu yüzden daha yukarıda tıklanan bir klasör, notun başladığı yolu değil, seansın yürüdüğü yolu geri verir.
- **Alanın önünden ok tuşuyla çıkmak, ondan önceki klasörü içeri alır**, sanki tüm yol tek bir metin satırıymış gibi. İmleç en baştayken, <kbd>←</kbd> o klasörü alana alır ve adının sonuna iner, <kbd>Ctrl</kbd>+<kbd>←</kbd> adının başına iner ve <kbd>Home</kbd> kasa köküne — veya seçtiğiniz yere, kasanın dışındaysa — kadar her klasörü tek seferde içeri alır. <kbd>Shift</kbd>'i basılı tutarsanız seçim, içeri alınan üzerine yayılır. macOS'te sözcük atlaması <kbd>Option</kbd>+<kbd>←</kbd>dir ve <kbd>Cmd</kbd>+<kbd>←</kbd>, <kbd>Home</kbd>dur. Baş dışında herhangi bir yerde bunlar sıradan metin tuşlarıdır. **Açılır liste görünürken <kbd>Home</kbd>, <kbd>End</kbd>, <kbd>PgUp</kbd> ve <kbd>PgDn</kbd> ona aittir** — ilk satır, son satır, bir sayfa yukarı, bir sayfa aşağı; sayfa, listenin gösterdiği şeydir ve vurgulanan satır ekrandaki yerini korur — ve liste kapanana kadar metne ulaşmazlar; <kbd>Shift</kbd>+<kbd>Home</kbd>, liste açıkken de her klasörü içeri alır.
- **Liste imleci takip eder.** Yolun farklı bir parçasını seçin — üzerine sürükleyin, içine tıklayın veya ok tuşuyla ilerleyin — ve açılır liste, alanın açıldığı klasörün değil, *o* klasörün alt öğelerini listeler. Klasör, çipler artı alanın imleçten önceki kısmından sayılır, bu yüzden `2026/Notes.md` tutan bir alanda `Notes.md`nin içine tıklamak, `2026` içindekileri listeler. Bir satırı işaretlemek onu imlecin bulunduğu parçaya yazar ve işaretçiyi listeden çekmek, metninizi ve seçiminizi tam olarak eskisi gibi geri verir.
- **Bir seçimi alanın dışına süpürüp** başka bir yerde bırakmak onu kapatmaz. Alanda başlayan bir basış, ne kadar ilerlerse ilerlesin düzenlemeye aittir; yalnızca dışarıda *başlayan* bir basış bir tıklama uzaklıktır.
- <kbd>Enter</kbd> onaylar — ve alan hiçbir şeyi adlandırmadığında, hiçbir zaman tamamlanacak bir şey olmayan boş bir klasörde olduğu gibi, *Dosya seçilmedi* der ve bir şey seçilmiş gibi kapanmak yerine açık kalır. <kbd>Esc</kbd> veya başka bir yere tıklamak, dosyanın gerçek yoluna geri iptal eder. Tek bir <kbd>Esc</kbd> basışı yeterlidir: her katman için bir basış gerektirmek yerine açılır listeyi kapatır, alanı terk eder ve odağı nota geri verir.

Alan tamamen sadedir — kutu yok, kenarlık yok — böylece yol metninin kendisi gibi okunur ve siz yazdıkça kendiliğinden büyür.

## Satırın her parçası, düğme düğme

Tüm satıra tek bakışta. Sağ tık sütunu, **tek** basışın size verdiğidir; bu düğme aynı zamanda basışları sayar ve aşağıdaki [kendi tablosu](#sağ-tık-bir-basış-iki-basış-üç) ikinci, üçüncü ve dördüncüyü verir. Bu tablo, varsayılan olan **Klasör adı listeyi açar** ayarının açık olduğunu varsayar — kapalıyken klasör adı ve ayırıcı ilk sütunda yer değiştirir, tıpkı [en üstteki tablonun](#yol-çubuğu) belirttiği gibi.

| Nereye bastığınız | Tıklama | Çift tıklama | <kbd>Ctrl</kbd>+tıklama veya orta tık | Sağ tık | Bir şey bırakmak |
| --- | --- | --- | --- | --- | --- |
| **Kasa adı** | Konumlar listesini açar — diğer kasalar, ana dizin, dosya sisteminin kökü, bağlı sürücüler. Varsayılan olarak kapalıdır; kapalıyken bunun yerine kasayı Dosya Gezgini'nde gösterir | **Tüm mutlak yolu** işaretler. Bu liste, yol zaten alanda ve yalnızca kasanın kendi kısmı işaretliyken açılır; ikinci bir basış geri kalanına doğru genişletir. Liste kapalıyken genişletecek bir şey yoktur | Kasa kökünde duran, liste zaten görünen, boş bir sekme — sıfırdan bir yol yazılacak bir yer | Kasanın kendi bağlam menüsü: o parçanın adını taşıyan kasaya ne yapılabileceği | Bir **dosya** kasa köküne taşınır. **Metin**, dönüşeceği notun adını verebilmeniz için alanı kökte açar |
| Bir **klasör adı** | O klasörü düzenlemek için seçer, üst klasörünün içeriği altta listelenir | O klasörü ve altındaki her şeyi yeniden yazar | O klasörü yeni bir sekmede açar | O klasörün bağlam menüsü — Dosya Gezgini'nin kendi menüsü | Bir **dosya** o klasöre taşınır. **Metin**, dönüşeceği notun adını verebilmeniz için alanı orada açar |
| Bir **ayırıcı** | Ondan önceki klasörü açar — bir klasör notu eklentisi çalışıyorsa ve bir tane varsa onun klasör notunu, yoksa Dosya Gezgini'nde gösterip genişletir | Bir klasör notu eklentisi çalışıyorsa ve klasörün henüz notu yoksa **o klasörün notunu oluşturur** ve ona gider. Zaten bir tane varsa, bu yalnızca tek basışın tekrarıdır | Bir tane varsa klasör notunu yeni bir sekmede; yoksa o klasörde duran, liste görünen bir sekme | Adın verdiği aynı klasörün bağlam menüsü — varsa klasör notunun menüsü | Onaylandığında, varsa o klasörün notunun sonuna |
| **Notun adı** | Adı düzenlemek için açar — klasörler yanında etiket olarak kalır — uzantı dışındaki her şey işaretlenir | Uzantıyı da işarete dahil eder | Notu yeni bir sekmede açar | Dosyanın bağlam menüsü — Dosya Gezgini'nin satırının verdiğiyle aynısı | Onaylandığında bu notun sonuna |
| **Boş alan** | **Tüm yolu** düzenlemek için açar, uzantıya kadar işaretlenmiş halde. Klasörler de alana onunla birlikte gelir, bu da bunu bir ad değil bir yol yeniden yazma hareketi yapan şeydir | Uzantıyı da işarete dahil eder | <kbd>Ctrl</kbd> bu notu yeni bir sekmede tekrar açar, kopyanın ilkiyle karıştırılmaması için Dosya Gezgini'nde belirtilir. Orta tık *bu* hareket *değildir*: yolun üzerine yapıştırır | Tüm yolu işaretler ve işaretli metne ne yapılabileceğini sunar | |

**İkinci basış birinciyi takip eder.** Bir klasörün notunu oluşturmak, satırın o klasörü *açan* kısmında yer alır; bu varsayılan olarak ayırıcıdır, değişim kapalıyken klasör adıdır — altı çizili işaretin gösterdiği hedefin ve tek basışın zaten klasör notunu istediği hedefin aynısı. Bu yalnızca bir klasör notu eklentisi çalışırken sunulur, çünkü klasör notu dosya sistemiyle ilgili bir gerçek değil bir kuraldır; ve yalnızca klasörün henüz notu olmadığı yerde. Notun nerede yaşadığı ve nasıl adlandırıldığı **Klasör notları**'nın kendi ayarlarından okunur, böylece klasör notlarını klasörün yanında tutan veya onları `_index` olarak adlandıran bir kasa bunlardan birini alır; dosyanın kendisi her zaman Markdown'dır, çünkü o eklentinin kendi varsayılan oluşturma komutu bunu üretir ve kasanın ayarlı olduğu türü ne olursa olsun onu bulur. Yeniden adlandırma/taşıma modu bunun tamamen dışındadır — taşıma beklerken satırdaki hiçbir şey bir klasörü açmaz.

**Adın üzerindeki tıklamalar devam eder.** Dört basamak, yeniden adlandırma tuşunun izlediği aynı dört basamaktır, aynı sırayla: ad, uzantısıyla birlikte ad, kasadan itibaren yol, sistem kökünden itibaren yol. Yani üçüncü tıklama kasa yoluna, dördüncüsü de makinenin köküne ulaşır — bunlar, alanın sonunu geçen <kbd>Tab</kbd>'ın size verdiği aynı dört şeydir ve sağ düğmenin seçmek yerine *kopyaladığı* aynı dört şeydir.

**Üzerine gelmek** kendi başına bir cevaptır ve hiçbir şeyi değiştirmez: kısaltılmış bir ad, üzerine işaret ettiğiniz sürece tam haliyle geri döner ve satırın başındaki simge kasanın nerede yaşadığını söyler.

## Sağ tık: bir basış, iki basış, üç

Satırdaki her hedef bir sağ tıka cevap verir ve kaç basış verdiğiniz ne alacağınızı belirler. İkinci bir basış hâlâ gelebileceği için, ilki harekete geçmeden önce yaklaşık üçte bir saniye bekler — üç hareketi tek bir düğmeye koymanın bedeli budur.

| Nereye bastığınız | Bir kez | İki kez | Üç kez |
| --- | --- | --- | --- |
| **Kasa adı** | Kasanın bağlam menüsü: o parçanın adını taşıyan kasaya ne yapılabileceği — bulunduğunuz kasa o kasa değilse *Bu kasayı aç* dahil | Kasanın adını kopyalar | Kasanın nerede olduğunu kopyalar — ve dördüncü bir basış, açık dosyanın nerede olduğunu |
| Bir **ayırıcı** | O klasörün menüsü — bir klasör notu eklentisi çalışıyorsa ve klasörün bir tane varsa, klasör notunun menüsü | | |
| Bir **klasör adı** | O klasörün menüsü | Klasörün adını kopyalar | Onu ve sağındaki her şeyi kopyalar |
| **Notun adı** | Dosyanın menüsü — Dosya Gezgini'nin satırının verdiğiyle aynısı | Adı kopyalar | Onu uzantısıyla birlikte kopyalar |
| **Boş alan** | | Kasa klasörünüzden itibaren yolu, uzantı olmadan kopyalar | Aynısını, uzantısıyla birlikte |

**Kasa adına** tek bir basış, o parçanın adlandırdığı şeye ne yapılabileceğini açar. **Bulunduğunuz kasa** için: yeni bir pencerede açmak, kasaları yönetmek, nerede yaşadığını kopyalamak, kimliğini kopyalamak, dosya yöneticinizde göstermek. Konumlar listesi üzerinden ulaşılan **başka bir kasa** için, aynısı eksi yeni pencere — bu *bu* kasayı açardı, o kasayı değil — artı yalnızca içinde bulunmadığınız bir kasanın sunabileceği tek şey: **Bu kasayı aç**. İki kasa aynı klasör adını paylaşabileceğinden, bu Obsidian'a klasör adıyla değil kimliğiyle adlandırılır. Hiç kasa olmayan bir yer için — ana klasörünüz, bağlı bir sürücü — kopyalanacak bir kimlik ve açılacak bir şey yoktur, ve menü bunları sunmayarak bunu söyler.

Bu, başlangıç penceresine ait olan ve çalışan bir kasanın içinden açılamayan Obsidian'ın kendi üç noktalı menüsü değildir — bunlar, aynı girdilerin, Obsidian'ın kendi ifadeleriyle, komutlarından alınarak yeniden oluşturulmuş halleridir, böylece sizin dilinizde gelirler. O menünün üç girdisi kasıtlı olarak burada **yoktur**: *kasayı yeniden adlandır*, *kasayı taşı* ve *listeden kaldır*, hepsi kasanın kendi klasörüne veya Obsidian'ın kasa kayıtlarına etki eder ve bunu içinde durduğunuz — dosyaları açık, izleyicileri çalışan — bir kasaya yapmak, bir kasanın nasıl bozulduğudur. Kasa yöneticisini açın (*Başka bir kasa aç*) ve bunları orada, kasa kapalıyken yapın.

**Boş alandaki** iki kopya, satırın yazıldığı haliyledir — bir bağlantının veya bir aramanın istediği şey — ve **kasa adındakiler** dosya sisteminin bildiği yollardır, ki bu da Obsidian dışındaki her şeyin istediği şeydir. Oradaki her basış, kopyanın neye yaradığını genişletir: ikisi kasanın adını verir, üçü kasanın nerede olduğunu, dördü açık dosyanın nerede olduğunu. Obsidian aynı ayrımı kendi iki komutunda yapar, *kasa klasöründen* ve *sistem kökünden*; burada dışa dönük olanlar, kendisi yolun dışında olan parçada yer alır.

Tüm bunlar kasanın dışında da, aynı hedefler üzerinde çalışır.

Her kopya bunu bir bildirimle söyler, çünkü bir kopya ekranda gerçekleştiğini gösterecek hiçbir şey bırakmaz ve yanlış sayılan bir basış başarılı bir basış gibi görünmemelidir.

## Değiştiriciler: başka bir yerde açmak

Notun adı ve klasör parçaları, Dosya Gezgini'ndeki satırları gibi davranır.

| | Notun adı üzerinde | Bir klasör parçası üzerinde |
| --- | --- | --- |
| Düz tıklama | Adı düzenle | O klasöre göz at |
| <kbd>Ctrl</kbd> / orta tık | Notu yeni bir sekmede aç | Klasörü yeni bir sekmeye gönder |
| <kbd>Ctrl</kbd>+<kbd>Alt</kbd> | Bir bölme | Bir bölme |
| Sürükleme | Notu, Obsidian'ın bir dosyayı götürebileceği her yere | Klasörü, aynı şekilde — sekme çubuğu dahil |

Bir klasör Obsidian'ın açabileceği bir şey değildir, bu yüzden birini bir sekmeye göndermek iki şeyden birini yapar: bir klasör notu eklentisi çalışıyorsa ve bir tane varsa onun klasör notunu açar, ya da yol çubuğu zaten o klasörde duran boş bir sekme açar — size yalnızca yazılacak adı bırakır. Bir klasör parçasını **sekme çubuğuna** bırakmak, bıraktığınız yerde yeni bir sekmede aynısını yapar — Obsidian'ın sekme çubuğu kendi başına yalnızca dosyaları kabul eder, bu yüzden Dosya Gezgini'nden sürüklenen bir klasör orada da geri çevrilir.

## Tab: önce adı, sonra yolu tamamlar, sonra seçimi genişletir

<kbd>Tab</kbd> tam olarak bir kabuğun (shell) tamamladığı gibi tamamlar: **bir basış, yazdığınızı o klasördeki adların hemfikir olduğu yere kadar uzatır ve anlaşamadıkları yerde durur.** Yalnızca `Sketches`'ın öyle başladığı yerde `Sk` yazın, kelime tamamlanmıştır; `Alpha-one`, `Alpha-two` ve `Alpine`'ın hepsinin öyle başladığı yerde `Al` yazın ve `Alp` elde edersiniz, çünkü bir sonraki karakter yalnızca sizin cevaplayabileceğiniz bir sorudur.

Yazmadan tekrar basın, bir isme doğru ilerler — listenin vurguladığı satıra ya da ilkine — o ismin bir sonraki belirsizliğinde durarak: `Alpha-`, sonra `Alpha-one`. Liste zaten bulunduğunuz yerde açılır, bu yüzden kendi klasörünüzde ilk basış ilk sıralanan neyse ona değil, açık olan notunuza yönelir.

**Bir basış sizin adına asla isimler arasında seçim yapmaz.** <kbd>Tab</kbd>, yazdığınız yalnızca bir aday bıraktığında ya da klasörün tüm adını yazdığınızda ve *başka bir klasör* onu uzatmadığında klasöre girer. Bir tanesinin uzattığı yerde — `Schemes2026`'nın yanındaki `Schemes` gibi — <kbd>Tab</kbd> daha uzun isme doğru tamamlamaya devam eder; <kbd>Enter</kbd> ve liste ise *tam olarak bunu* demek isteyen jestlerdir.

Bir **dosya** hiçbir zaman bir klasörü bu şekilde bekletmez. Kendi adıyla aynı ada sahip bir notun yanındaki klasör bir klasör notudur, yolda bir çatal değildir, ve <kbd>Tab</kbd> klasörlerde yürür — bu yüzden yanında bir `Projects.md` bulunan `Projects` de diğerleri gibi içine girilir.

Bunu takip eden iki küçük şey daha var: alana yerleşen şey klasörün onu yazdığı şekilde yazılır, yani `sk`, `Sketches` olur; ve yalnızca o an yazılmakta olan isim değiştirilir, dolayısıyla sağında daha fazlası olan bir yol onu korur.

Siz yazarken bir isim önerildiğinde, <kbd>Tab</kbd> **tam olarak öneriyi yazar**: öneri her zaman basışın yazacağı şeydir, ve listenin altçizgisi ile yeşil çizgisi de aynı şeyi söyler, bu yüzden imlecin ardından gördüğünüz şey aldığınız şeydir. İsimlerin anlaşamadığı yerde, bu, onlardan ilkine doğru — ya da ok tuşlarıyla gittiğiniz satıra doğru, ki <kbd>Tab</kbd> yanındaki değil onu alır — atılan bir adımdır; bu yüzden basmadan önce istediğiniz satıra ok tuşuyla gidin, ya da çatalın ötesine yazın. Öneri yalnızca *tek* bir isim bıraktığında aynı basış onun içine girer.

Dosyanın adına varmak, ilk basamağın **ta kendisidir** — imleci, hemen işaretlemek üzere olduğu bir ismin sonuna park etmek için hiçbir basış harcanmaz. Buradan sonra basışlar yol boyunca ilerlemeyi bırakır ve seçili olanı genişletmeye başlar:

1. isim
2. isim, uzantısıyla birlikte
3. kasa klasörünüzden itibaren yol
4. sistem kökünden itibaren yol
5. yolun **şu anki haliyle** başına geri dönüş — yürüyüşün başladığı yerde durarak, ilk parça işaretli, yeniden yürünmeye hazır

Dördüncü bir tıklama doğrudan o aynı dördüncü basamağa ulaşır.

Genişletme yalnızca **genişletir**. Alanda zaten bütün olan bir isim — aynı tuşla tamamlanmış ya da listeden seçilmiş — önce uzantısı geri alınmadan, doğrudan bütün olarak işaretlenir: ilk basamak, yürüyüşün henüz *vardığı* bir isim içindir, uzantının henüz konu bile olmadığı yer.

Merdiven, yürüyüşün **vardığı** yerdir, başladığı yer değil. Bir yolun ortasındaki bir klasöre tıklayın ve alan, o klasörün adı işaretli olarak, altındaki her şeyle açılır; her <kbd>Tab</kbd> daha sonra **bir** klasörü alır — bir sonrakini işaretleyerek, yolun geri kalanını arkasında tutarak — ve yalnızca dosya adından başka hiçbir şey kalmadığında genişletme başlar:

| basış | çipler | alan | işaretli |
| --- | --- | --- | --- |
| `a`'ya tıklandı | | `a/b/c/leaf.md` | `a` |
| <kbd>Tab</kbd> | `a` | `b/c/leaf.md` | `b` |
| <kbd>Tab</kbd> | `a › b` | `c/leaf.md` | `c` |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf` — ilk basamak |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf.md` |

**Yerleştirilmiş bir isim, nasıl yerleştirilmiş olursa olsun yerleştirilmiştir.** Onu
<kbd>Tab</kbd> ile tamamlamak, `/` ile onaylamak ve listeden seçmek,
hepsi satırı aynı yerde, aynı yolu tutarak bırakır, bu yüzden jestten sonraki
basış hangi yoldan geldiğinize bakılmaksızın aynı şeyi ifade eder. Listeden bir klasör
seçmek eskiden bunun yerine alanı boşaltırdı, aynı klasöre <kbd>Tab</kbd> ile
ulaşmanın koruyacağı bir yolu çöpe atarak.

**Hâlâ yazmakta olduğunuz bir yol tam haliyle sizinle gelir.** Yolun geri kalanının dayandığı klasöre girmek, geri kalanının var olduğuna dair bir iddia değildir — bir yolun kendinden önden yazılmasının yoludur, ve adlandırdığı klasörler <kbd>Enter</kbd>'ın az sonra yaratacağı klasörlerdir. Yani `Dokumente/plans/untitled.md` içinde `Dokumente`'ye doğru inmek, `plans` henüz orada olsun ya da olmasın, `plans/untitled.md`'yi önünüzde tutar. Sıfırdan yazdığınız bir yol için de aynısı geçerlidir: hiçbir şey hiçbir yerden miras alınmadı, dolayısıyla hiçbir şey alınmaz.

**Bir adımı bir başkasıyla değiştirmek başka bir hikayedir, ve o zaman yol yalnızca gerçekten var olduğu kadar sizinle gelir.** Yolun ortasındaki bir klasörü bir kardeşiyle değiştirin — `a`'ya tıklayın, başka bir isim yazın, <kbd>Tab</kbd>'a basın — ve altındaki her şey sizinle gelir, çünkü üzerinde olduğunuz yol genellikle istediğiniz yolun büyük kısmıdır. Ancak yalnızca orada gerçekten var olan şey bu geçişten sağ çıkar, bu yüzden alan ve yanındaki liste hiçbir zaman birbiriyle çelişmez: önünüzde kalan şey gerçekten yürüyebileceğiniz bir yoldur. `a/b/c/leaf.md`'den başlayarak, `a` tıklanmış ve adı işaretlenmişken:

| ne yerleştirdiğiniz | çipler | alan | işaretli |
| --- | --- | --- | --- |
| `b`'si hiç olmayan `x` | `x` | | hiçbir şey sizinle gelmedi |
| `b`'si olan ama içinde `c`'si olmayan `y` | `y` | `b` | `b` |
| baştan sona `a`'nın ikizi olan `z` | `z` | `b/c/leaf.md` | `b` |

Bu şekilde tek başına bırakılan bir klasör, yine de içine girilecek bir klasördür: bundan sonraki basış içine girer, onun adı üzerinde bir seçimi genişletmeye başlamak yerine.

Klasörde **hiçbir** şeyin eşleşmediği bir isim farklı yanıtlanır, çünkü onun tarafından hiçbir şey yerleştirilmemiştir: basış, yazdığınızı işaretler, üzerine yazmanız için hazır, başka bir yeri yanıt olarak vermek yerine.

Bütün bu düzen bir **döngüdür, ve etrafında dönmenin hiçbir maliyeti yoktur**: son basamaktan sonraki basış, satırı klasörlerle birlikte yolun başına geri verir, yeniden dönmeye hazır. Satırdan gerçekten ayrılan tek şey, onu göstermeyi bırakan basışta, mutlak önektir.

Geri gelen şey, yola çıktığınız yol değil, **inşa ettiğiniz yoldur**. Yürüyüşü yarı yolda çatallayın — listeden farklı bir kardeş seçin, başka bir isme doğru tamamlayın — ve tur, gerçekten bulunduğunuz yerde kapanır; ondan önceki dört basamak da aynı yolu betimler, ve bu basamak eskiden geçmişi betimleyen tuhaf basamaktı.

<kbd>Shift</kbd>+<kbd>Tab</kbd> aynı halkayı ters yönde kapatır: yolun başında, geri verilecek hiçbir şey kalmamış ve daha yukarısı olmadığında, bir sonraki basış **en uzak** basamağa döngü yapar — sistem kökünden itibaren yol — ve oradan daraltmaya devam eder. Hiçbir yön çıkmaz sokak değildir.

Zaten gösterdiği bir basamak için de hiçbir basış harcamaz. Son basamaktan aşağıda — uzantısız isim — merdiven biter, ve *aynı basış* klasörden çıkar: sistem kökünden itibaren yol, kasanızdan itibaren yol, isim, uzantısız isim, sonra klasör, her biri bir adım.

Hiçbir şeyi değiştirmeyen bir basamak için de hiçbir basış harcanmaz: bir notun adına tıklamak zaten onu uzantısız gösterir, ki bu da ilk basamağın gösterdiği şeydir, bu yüzden oradan <kbd>Tab</kbd> ikinciyle başlar.

Her basamak yalnızca vurgulanan şeyi değil, alanda *bulunan* şeyi de değiştirir — bir seçim, adlandırdığı metnin üzerinde olmalıdır, yoksa <kbd>Enter</kbd>, seçili olduğunu görebildiğinizden başka bir şeyi onaylardı. Merdiven tek bir düzenleme oturumuna aittir: başka yere tıklayın, ya da herhangi bir şey yazın, ve bir sonraki <kbd>Tab</kbd> yeniden bir ismi tamamlar.

### <kbd>Shift</kbd>+<kbd>Tab</kbd>: aynı yol, tersine

<kbd>Shift</kbd>+<kbd>Tab</kbd>, basışların yapıldığı sırayla, her basışta bir adımı geri alır: seçim her seferinde bir basamak daralır, her tamamlama geri verilir, ve her klasörden dışarı çıkılır — adı, yeniden yazmanız yerine düzenleyebilmeniz için alana geri döner.

**Geri dönerken hiçbir şey silinmez.** Bir tamamlama, eklediği karakterleri *işaretleyerek* geri verilir, tıpkı ileri gitmenin üzerinden genişlediği şeyi işaretlediği gibi — isim önünüzde kalır, ve her ek basış onun bir adım daha fazlasını işaretler:

| | alan | işaretli |
| --- | --- | --- |
| içine yürünmüş | `Alpha-one` | |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `ha-one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `Alpha-one` |

Yazmak, işaretli kısmı değiştirir, tıpkı başka her yerde olduğu gibi. <kbd>Tab</kbd>, işaretin geri verdiği şeyi tam olarak geri koyar, bu yüzden iki adım dışarı ve iki adım tekrar içeri yürümek sizi olduğunuz yere geri götürür.

Bütün isim işaretlendiğinde, bir basışın oraya koyduğu hiçbir şey kalmaz, ve bir sonraki basış *yolda yukarı* gider: bulunduğunuz klasörden çıkar, tıpkı boş bir alanda <kbd>Backspace</kbd>'in yaptığı gibi. Bunun da bir maliyeti yoktur — klasörün adı, içinde her ne varsa onun **önüne** işaretli olarak alana geri döner, ki bu, o klasöre tıklamanın size vereceği metnin aynısıdır. Geri gitmek bir geri alma geçmişi değil, bir yöndür — ama önce ismi işaretlemek, tek bir basışın hem yazdığınızı geri almasını hem de sizi onu yazdığınız klasörden çıkarmasını asla birlikte yapmaması demektir.

**Zaten seçili** açılan metin — bir klasör tıklamasının arkasında bıraktığı şey — <kbd>Tab</kbd>'ın bir sonraki üzerinde çalışacağı isimdir: her şey gibi tamamlanır ve içine girilir, ve yazmak onu değiştirir. Yalnızca odaklama komutu, merdivenin bir basamağı üzerinde değil, doğrudan üzerinde açılır, çünkü size yürünecek bir klasör yerine yolun tamamını gösteriyordur.

## Yol olmayan bir şey yazmak

| Ne yazdığınız | Ne olduğu |
| --- | --- |
| `https://…` | O çekirdek eklentiyi açıksa Obsidian'ın **Web görüntüleyicisi**nde yeni bir sekmede açılır; değilse masaüstü tarayıcınızda |
| `obsidian://…` | Obsidian'ın kendi URI işleyicisine devredilir |
| `file:///…` | Çözülür ve açılır: kasanızın içindeyse gerçek bir not olarak, değilse görüntüleyicide |
| `/home/you/a%20b.md` | Bir tarayıcı ya da dosya yöneticisinden yapıştırılan bir yol için de aynısı |

Yalnızca açık şemalar sayılır — `100%20` adlı bir not yine de bir nottur. Bir şemaya ait olan bir `/`, bir klasöre inmek yerine olduğu gibi kalır, böylece bir URL yalnızca yapıştırılmak zorunda kalmadan elle de yazılabilir.

## Klavye için bir komut

**Yol çubuğuna odaklan**, alanı notun adı üzerinde açar ve <kbd>F2</kbd>'nin yaptığı gibi yürür — isim, uzantısıyla birlikte isim, kasanızdan itibaren yol, sistem kökünden itibaren yol — ve bundan sonraki basış alanı kapatır ve imleci notun içine geri koyar. Yeniden adlandırmaz: Enter, tıpkı başka herhangi bir alanda olduğu gibi gezinme yapar. Kutudan çıktığı haliyle kendi tuşu yoktur, çünkü Obsidian'ın kuralları eklentilerin bir tuş talep etmesini caydırır; bu eklentinin ayarlarının sonundaki **Hotkeys** satırı, yalnızca bu eklentinin komutlarını gösteren *Settings → Hotkeys*'i açar, böylece onu orada atayabilirsiniz.

## Gezinme açık dosyaya asla dokunmaz

Varsayılan (gezinme) modunda açık olan not **asla** yeniden adlandırılmaz ya da taşınmaz.

- Var olan bir dosyaya çözümlenen bir yol onu açar.
- Henüz var olmayan bir yol, eksik olan tüm üst klasörlerle birlikte oluşturulur ve açılır. Bu şekilde yapılan her dosya ve klasör bunu bir bildirimle söyler — yeni bir klasör, aksi halde onu aramaya gidene kadar görünmezdir — ve Obsidian'ın kendi çöp kutusu, istenmeyen birini bir tuş vuruşuyla geri alınabilir kılar.
- **Kasanızın dışında yine de önce sorar.** Orada aynı yazım hatası bir sistem klasörüne yazar, ki orada ne bildirim ne de Obsidian'ın çöp kutusu pek teselli olur.

## <kbd>Ctrl</kbd> — yeni sekme ve taşımak yerine kopyalamak

Kasa içinde **oluşturulan, taşınan ya da kopyalanan bir not**, Dosya Gezgini'nde vardığı yerde gösterilir, bir an için Obsidian'ın vurgu renginde işaretlenmiş olarak — daha sonra onu aradığınız yer ağaç görünümüdür, bu yüzden belki açık bile olmayan bir klasörde bırakılmak yerine önünüze getirilir. Çoğaltma da bunu söyler: bir kopya, orijinali olduğu yerde bırakır ve kopyayı kendi bölmesinde açar, ki bu bir şey söylenmeden hiçbir şeyin olmadığı şeklinde okunması kolaydır.

Listeden bir dosya seçerken ya da bir yolda <kbd>Enter</kbd> tuşuna basarken <kbd>Ctrl</kbd> (macOS'ta <kbd>Cmd</kbd>) tuşunu basılı tutmak, sonucu bu sekme yerine **yeni bir sekmeye** gönderir:

| | Tuşsuz | <kbd>Ctrl</kbd> ile |
| --- | --- | --- |
| Var olan bir dosyayı seçin ya da yazın | Burada açılır | Yeni bir sekmede açılır |
| Var olmayan bir yol yazın | Sorar, sonra burada açar | Sorar, sonra yeni bir sekmede açar |
| Yeniden adlandırma/taşıma modunda bir yolu onaylayın | Notu oraya **taşır** | Onu oraya **kopyalar** ve kopyayı yeni bir sekmede açar |

Tuş, Obsidian'ın kendi kuralıyla okunur, dolayısıyla bir bağlantıda ya da Dosya Gezgini satırında olduğu gibi davranır — orta tıklama da "yeni sekme" demektir, <kbd>Ctrl</kbd>+<kbd>Alt</kbd> bölme, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> ise yeni pencere demektir.

Kopyalama, tıpkı taşımanın yaptığı gibi üzerine yazmayı reddeder — notun kendi yolunun üzerine yazma dahil, ki orada kopyalanacak mantıklı hiçbir şey yoktur. Kasanın dışında bu reddediş de yüksek sesle söylenir.

Bunların hepsi **liste açıkken** de, açık değilken de çalışır: vurgulanan bir satırda tuş o satıra uygulanır, ve hiçbir şeyin üzerinde değilken yazdığınız şeye uygulanır.

## Kasanın dışında gezinmek

**Bu varsayılan olarak kapalıdır.** Önce ayarlardan **Harici dosyalara erişim**'i açın — kasanın dışında okumak ve yazmak, bu eklentinin Obsidian'ın kendisinin yapmadığı tek şeyidir, bu yüzden kapatılan değil açılan bir şeydir. Kapalıyken kasa adı yalnızca kasanızı Dosya Gezgini'nde gösterir ve buradaki hiçbir şey onun ötesine bakmaz.

**Kasa adına** (veya *Kasa adını göster* kapalıyken 🏠 simgesine) tıklamak, içerik yerine yerlerin bir listesini açar. Açılan alan, üzerinde bulunduğunuz **yolun tamamını, tam olarak yazılmış** hâlde tutar, başladığı yer seçili durumdadır — böylece başka bir yer seçmek ya da seçimin üzerine yazmak, yalnızca o baştaki kısmı değiştirir ve yolun geri kalanını önünüzde bırakır. **Ada ikinci kez basmak** — çift tıklama — işareti tamamının üzerine genişletir, ki mutlak yol bu şekilde elle süpürülmek yerine tek bir hareketle alınır. Fikrinizi değiştirirseniz <kbd>Esc</kbd> çubuğu olduğu gibi geri getirir.

Burada yazmak, her yerde olduğu gibi bir yerin adının geri kalanını sunar ve <kbd>Tab</kbd> **o yeri içeri alır** — işaret ettiğiniz yeri, ya da adın yalnızca anlamına gelebileceği yeri. Birkaç yer hâlâ yazdığınızı paylaşıyorsa basış, her yerde olduğu gibi çatalda durur. Bir yere işaret etmek **o yerin kendi yolunu** gösterir, hepsi seçili, ardından notunuzun yolu yalnızca orada gerçekten gittiği yere kadar gelir — ki bu, onu seçmenin sizi tam olarak nereye götüreceğidir. Bir yer, ekrandaki yolun içinde bir adım değil, yolun tamamının sayılacağı bir yerdir, bu yüzden bulunduğunuz yerden hiçbir şey onun önünde kalmaz.

Sunulan yerler:

- **Diğer kasalarınız**, Obsidian'ın kendi kaydından okunur, en son açılanlar önce, her biri Obsidian'ın kendi kasa simgesi altında — uygulamanın kasa komutları için kullandığı simge. Zaten açık olan kasa bunun yerine bir ev alır: çubuğun varsayılan olarak başladığı yer orasıdır, gidilecek bir yer değil.
- **Ev klasörü**, kendi hesap adı altında, bir `~` ile işaretli. Lucide'de tilde yok, bu yüzden bunu eklenti Lucide'nin kendi 24×24 ızgarasında aynı çizgiyle çizer — simgeler arasına oturmuş bir metin karakteri değil, setin eksik bıraktığı bir simge.
- **Dosya sisteminin kökü**, `root` etiketiyle — çevrilmeden, çünkü her sistemde adı budur — `/` yerine, ki o kendisini izleyen ayırıcının yanında boş bir adım gibi okunurdu.
- **Bağlı sürücüler**, türünü belirlemenin ucuz olduğu yerlerde tür başına bir simgeyle: ağ paylaşımları, optik diskler, disketler ve çıkarılabilir ortamlar kendi simgelerini alır; geri kalan her şey genel bir sürücü alır. Windows'ta sürücüler genel bir simgeyle `C:` olarak görünür — birim adları ve kesin türler WMI gerektirir, ki bu bilinçli olarak yapılmaz.

Başka bir kasa seçmek **Obsidian'ı ona geçirmez.** Açık olan her şey açık kalır; yol çubuğu yalnızca orada gezinmeye başlar. Bunu kenar çubuğunun kasa değiştiricisine bırakmak yerine yol çubuğunda bulundurmanın bütün amacı da budur.

Ayrıca **o yerin gerçekten gittiği kadar üzerinde bulunduğunuz nota yakın** bir yere iner.

- Seçtiğiniz yer notu *içeriyorsa* — ev klasörü ya da kasalarınızın yaşadığı yer neresiyse — oradan itibaren onun yolunu alırsınız: `takeaways.md` açıkken `~`'yi seçin ve alan `Vaults/kasanız/takeaways.md` yazar.
- Bunun yanındaki bir yerse — başka bir kasa, başka bir sürücü — aynı göreli yol denenir, gerçekten var olduğu kadar derinliğine. Kasalar genellikle birbirinin neredeyse kopyasıdır ve birine atlamanın nedeni genellikle oradaki aynı nottur.

Her iki durumda da çubuk seçtiğiniz yerde kalır ve **o yolun ilk klasörü seçili olarak açılır**, bir klasöre tıklamanın verdiği aynı biçim: başka bir yere atladığınızda değiştirmeniz en muhtemel adım en üsttekidir ve yolun geri kalanı onu değiştirirken görünür kalır. Diskte gerçekten olmayan hiçbir şey asla önceden doldurulmaz.

### Dışarıdayken

Yol **seçtiğiniz konumdan başlar**, makinenin dizin düzeninden değil — boş alana tıklayarak ya da odak tuşuna basarak elde ettiğiniz alan da böyledir: o yerden itibaren yolu tutar, makinenin mutlak yolunu değil, iz tıpkı içeride kasa köküne toplandığı gibi o yerin kendisine toplanmış hâlde — `Archive`'ı seçin ve çubuk `Archive / notes / …` yazar, `/home/siz/Vaults/Archive/notes/…` değil. Baştaki parça neyin ne olduğuna dair bir simge taşır (kasa, ev klasörü, sürücü) ve <kbd>Backspace</kbd> dosya sisteminin geri kalanına yukarı yürümek yerine orada durur. *Kasa adını göster* kapalıyken bu parça yalnızca simgeden ibarettir — ayar, hangi kasayı adlandırırsa adlandırsın çubuğun açılış parçasıyla ilgilidir, yalnızca kendi kasanızla değil.

Yol çubuğu, kasanızın dışını gösterdiği sürece **hata rengiyle çerçevelenir** — yeniden adlandırma modunun çizdiği halkanın aynısı. Bu bir anı değil, süregelen bir durumu işaretler: o duruyorken Obsidian'ın kendi işleyişlerinin hiçbiri çubuğun gösterdiğine uygulanmaz ve siz aksini söyleyene dek yazma kilitlidir.

Gezinme bunun dışında içerideki gibi çalışır: çipler, ayırıcılar, yazmak, otomatik tamamlama, dışarı adımlamak için <kbd>Backspace</kbd>. Aynı görünürlük kuralları da geçerlidir, yani desteklenmeyen uzantılar hâlâ Obsidian'ın *Tüm dosya uzantılarını bul* ayarını, gizli dosyalar da hâlâ bu eklentinin ayarını gerektirir.

**Sağ tıklama orada da çalışır**, ancak farklı bir menüdür: Dosya Gezgini'nin kendi işleyicileri kasanın bildiği bir dosyaya ihtiyaç duyar, bu yüzden dışarıdaki girdiler bunun yerine yoldan oluşturulur. Bunlar açmayı (burada, sağda, yeni bir pencerede ya da masaüstünüzün varsayılan uygulamasında), *Yolu kopyala*'yı, *Sistem gezgininde göster*'i ve — asma kilit açıldığında — *Yeni not*, *Yeni klasör*, *Bir kopya oluştur*, *Yeniden adlandır…* ve *Sil*'i sunar. **Sürüklemek** hâlâ bir kasa dosyası gerektirir ve kullanılamaz kalır.

Aynı menü görüntüleyicideki açık dosyada da vardır, sağ tıklama ile ya da bölmenin kendi üç noktasından, ve o görünümün başlığındaki asma kilide sorar. Başka hiçbir şeye sormaz: dosyanın işlenip işlenmediği ya da kaynak olarak gösterilip gösterilmediğinin silinip silinemeyeceğiyle bir ilgisi yoktur ve hiç kaynak görünümü olmayan bir görsel ya da PDF, bir not kadar silinebilirdir. *Sil*, masaüstünün çöp kutusu anlamına gelir, böylece oradan geri alınabilir; çöp kutusu olmayan bir sistem, dosyayı yok etmek yerine bunu bildirir.

Kasanın dışında silmek, dosyayı **sistem çöp kutunuza** taşır — Windows'ta Geri Dönüşüm Kutusu, macOS'ta Çöp Kutusu — asla bir bağ kaldırma değildir. Burada geri alabileceğiniz bir Obsidian çöp kutusu yoktur, bu yüzden geri alınamayacak bir silme hiç sunulmaz: bir platformun çöp kutusu yoksa girişim, başarısızlığı bildirir.

### Kasanın dışına yazmak

Yazan her şey **varsayılan olarak kilitlidir**. Çubuk kasanızın dışını gösterdiği sürece, başlıktaki yeniden adlandırma anahtarının yerini bir **kırmızı asma kilit** alır — çubuğun etrafındaki halkayla aynı renk, aynı nedenle: bir reddi işaretler. İkisi tek bir yuvada tek bir denetimdir, bu yüzden hangisinin neyi kapı gibi kontrol ettiği konusunda asla bir soru yoktur.

Bir döngüde üç basış:

| Basış | Elde ettiğiniz |
| --- | --- |
| Kırmızı asma kilit | Burada yazmaya izin verilir. Asma kilidin yerini yeniden adlandırma/taşıma anahtarı alır |
| Anahtar | Yeniden adlandırma/taşıma modu, tıpkı kasanın içindeki gibi |
| Anahtar tekrar | Mod sona erer ve asma kilit yeniden kapanır — izin, açıldığı şeyden daha uzun yaşamaz |

**Yeniden adlandırma tuşu da asma kilide sorar.** Kasanızın dışında ona bir basış, her onaylamanın reddedeceği bir modu açmak yerine asma kilidi açıp kapatarak yanıp söner: ret, işten sonra değil önce gelir. Asma kilide basın, ya da yeniden adlandırma tuşuna yarım saniye içinde tekrar basın — ikinci basış tam olarak düğmenin verdiğini bu konum için verir ve onunla birlikte yeniden adlandırma modunu açar.

Kasanızın içinde asma kilit yoktur: açılacak bir şey yoktur ve anahtar o yuvayı basitçe alır.

İzin, **bir ana değil bir konuma** verilir: bir yerde çalışırken yapacağınız her şeyi atlatır — bir taşımayı bitirmek, girdiden uzağa tıklamak, bir dosya açmak — ve listeden farklı bir kasa, sürücü ya da kök seçtiğinizde, çubuk bir kasa dosyasına döndüğünde ya da o üçüncü basışta sona erer. Yani bir klasör içinde bir dizi taşıma, dosya başına değil tek bir basış gerektirir.

Asma kilit açıkken yol çubuğu dışarıda da içerideki gibi davranır:

| Hareket | Sonuç |
| --- | --- |
| Var olmayan bir ad yazın, <kbd>Enter</kbd> | İçerideki "oluşturulsun mu?" sorusunun aynısı; eksik üst klasörler de oluşturulur. Uzantısız bir ad, tıpkı içerideki gibi `.md` olur |
| Yeniden adlandırma/taşıma modu, yeni bir ad yazın | Çubuğun gösterdiği dosyayı yeniden adlandırır. Uzantısız bir ad dosyanın kendi uzantısını korur — burada bir klasör her türden dosyayı barındırır ve bir yeniden adlandırma bir `.png` dosyasını sessizce `.md` yapmamalıdır |
| Yeniden adlandırma/taşıma modu, başka yere göz atın, **bu adı koru**'yu seçin | Onu, hâlihazırdaki adıyla oraya taşır |
| İkisinde de <kbd>Ctrl</kbd> tuşunu basılı tutun | Taşımak yerine kopyalar ve kopyayı yeni bir sekmede açar |

Kilitliyken bunların hepsi gerçekleşmek yerine kendilerini neyin engellediğini bildirir. İki durumda da hiçbir şeyin üzerine yazılmaz: zaten var olan bir hedef reddedilir ve bu ret, bir yarışı kaybedebilecek bir denetim değil, dosya sisteminin kendi reddidir (`COPYFILE_EXCL`, ayrıcalıklı bir oluşturma). Dosya sistemleri arası bir taşıma — bir USB bellekten, bir ağ paylaşımından — kopyala-sonra-sil yöntemine düşer ve özgün dosya ancak kopya yerine ulaştıktan sonra kaldırılır.

**Bir notu kasanızın *dışına* taşımak önce sorar.** `fileManager`, bir dosyayı o sınırın ötesine takip edemez: nota işaret eden her bağlantı çözülmeyi bırakır, hiçbir şey onları güncellemez ve not, kasanın dizininden çıkar. Bu yüzden taşıma reddedilmek ya da sessizce yapılmak yerine bir karar olarak sunulur — bir iletişim kutusu bunun neye mal olacağını ve kaç notun taşıdığınız nota bağlı olduğunu belirtir. Onaylayın, ve gerçekten taşınır: önce dışarı kopyalanır, sonra Obsidian'ın kendi silme işlemiyle kasadan kaldırılır, böylece silinmiş bir not kadar geri alınabilir ve iki adımdan birindeki bir başarısızlık notu olduğu yerde bırakır. <kbd>Ctrl</kbd> tuşunu basılı tutmak hâlâ onu bunun yerine dışarı kopyalar, ki bunda o sorunun hiçbiri yoktur. Diğer yöne gitmek — harici bir dosyayı kasanın *içine* getirmek — henüz bağlanmadı.

### Harici bir dosyayı açmak

Dosya sisteminde gezinmek **açık olan kasanıza** geri dönebilir — kökten, ev klasöründen, kasalarınızın yaşadığı yer neresiyse oradan. Bu şekilde ulaşılan bir dosya sıradan bir nottur, bu yüzden öyle açılır: gerçek düzenleyici, bağlantılar ve geri bağlantılar, ve çubuk kasa köklü yol çubuğuna geri döner. Yalnızca Obsidian'ın görünümü olmayan dosyalar önizlemede kalır, çünkü orada önizleme daha iyi bir yanıttır. Bir önizleme yine de böyle bir notu gösteriyorsa — yeniden açılan bir çalışma alanı gibi — üst satırı, elle yapılan aynı teklifi sunan **(kasa)'da aç**'ı sunar.

Obsidian'ın düzenleyicisi yalnızca kasa içindeki dosyalarda çalışır, dolayısıyla harici bir dosya bağlantıları, geri bağlantıları ve gerisiyle gerçek bir not olarak **açılamaz** — bu, eklentinin değil uygulamanın sınırıdır. Böyle bir dosyayı seçmek bunun yerine bir **önizleme** açar; siz aksini söyleyene dek salt okunur:

| Tür | Şu şekilde gösterilir |
| --- | --- |
| `.md`, `.markdown` | İşlenmiş Markdown |
| `.html`, `.htm`, `.xhtml` | İşlenmiş sayfa |
| Görseller, ses, video, PDF | Yerel oynatıcı/görüntüleyici |
| Diğer her **metin** dosyası (`.json`, `.css`, `.log`, `.txt`, …) | Olduğu gibi düz metin |
| Görüntüleyicisi olmayan ikili biçimler (`.zip`, `.exe`, …) | *Varsayılan uygulamada aç*'a devredilir |

Görüntüleyicinin bir dosyayı okumanın iki yolu vardır ve birbirlerini dışladıkları için yalnızca **geçeceğiniz** olan gösterilir:

| | Ne yapar | Varsayılan olduğu |
| --- | --- | --- |
| **Markdown olarak görüntüle** | Dosyayı bir not olarak, salt okunur işler | `.md`, `.markdown` |
| **Sayfa olarak görüntüle** | Dosyayı olduğu sayfa olarak, salt okunur işler | `.html`, `.htm`, `.xhtml` |
| **Metin olarak düzenle** | Kaynak, düzenlenebilir | geri kalan her şey |

Kasanın dışında **Metin olarak düzenle** aynı zamanda salt okunurluğu kaldıran basıştır — mod ve izin, üzerinde düşünülecek iki düğme yerine tek bir harekettir. **Basmak salt okunurluğu kaldıracağı her durumda** kırmızı tonludur; ister düzenlemeyi yerinde hazırlıyor olun, ister doğrudan işlenmiş görünümden geliyor olun. Kasanın içinde açılacak bir şey yoktur, bu yüzden orada sade kalır. **Markdown olarak görüntüle** hafif bir vurgu yıkaması alır — Obsidian'ın seçili metne verdiği tonun aynısı — ki bu onu bir çağrı değil, geri dönüş yolu olarak işaretler.

Düğme ham modu değil *düzenlemeyi* izlediği için, metin görünümünde salt okunur duran bir dosya yine de **Metin olarak düzenle** sunar: onu hazırlayan basış budur. İçine asla yazılamayacak bir dosya — kısaltılmış ya da okunamaz — bunun yerine **Metin olarak görüntüle** der, çünkü basışın verebileceği tek şey budur.

Varsayılanlar harfi harfine olan değil, işe yarayan yöndedir: bir kabuk betiğindeki `#` bir başlık değil bir yorumdur, dolayısıyla bir `.log` dosyasını Markdown olarak işlemek onu sessizce yutardı. Her iki varsayılan da dosya başına geçersiz kılınabilir ve seçim sekmenin geçmişine girer, böylece ileri/geri ve yeniden açılan bir çalışma alanı bunu korur — birçok not `.txt` dosyalarında yaşar ve birçok `.md` dosyası kaynak olarak okumak daha kolaydır.

#### Bir HTML sayfasının yapmasına izin verilen şey

Hiçbir şey. Sayfa, **her izin geri tutulmuş** bir çerçevede gösterilir — betik yok, form yok, gezinme yok, kendi kaynağı (origin) yok — ve ona hiçbir ağ erişimi tanımayan bir içerik ilkesiyle. Bu, kendi başına bir tedbir değildir: yerel bir sayfa olağan şekilde yüklense bu pencerenin kaynağını paylaşırdı ve bu pencere Obsidian'dır, dolayısıyla indirilmiş bir HTML dosyasındaki bir betik, uygulamanızın içinde uygulamanızın erişimiyle çalışıyor olurdu.

Bunun bedeli, sayfanın *yaptığı* her şeydir; koruduğu ise sayfanın *olduğu* her şeydir. Dosyanın yanında duran stil sayfaları ve görseller okunur ve çerçeveye taşınır, böylece kaydedilmiş bir sayfa hâlâ kendisi gibi görünür. Sayfanın kendi klasörünün dışına işaret eden referanslar ve web'de bir yere işaret eden referanslar tam olarak yazıldığı gibi bırakılır ve basitçe yüklenmez — yerel bir dosya, onu açtığınızı bir sunucuya sessizce söyleyemez.

Betikler yalnızca engellenmek yerine **kaldırılır**, böylece gördüğünüz sayfa ile geçebileceğiniz kaynak, çerçevenin sessizce çalıştırmayı reddettiği her ne ise onunla değil, belirtilmiş tek bir şekilde farklılık gösterir. Sayfanın içindeki bağlantılar hiçbir şey yapmaz. Gerçeğini istediğinizde — betikler, ağ ve gerisiyle — *Varsayılan uygulamada aç*, onu bunun için doğru araç olan tarayıcınıza devreder.

**Kasanızdaki dosyalar hiçbir kilit açmadan doğrudan düzenlenebilir**: *Metin olarak düzenle* gerçek bir düzenleyicidir ve siz yazdıkça geri yazar.

**Düzenleme geçiş boyunca hatırlanır.** *Markdown olarak görüntüle*'ye gitmek onu askıya alır — durağan bir işlemenin içine yazılacak bir şeyi yoktur ve Live Preview yalnızca kasa içindeki dosyalar için var olan Obsidian'ın kendi düzenleyicisine ihtiyaç duyar — dolayısıyla oradayken hiçbir şey düzenlediğinizi iddia etmez. *Metin olarak düzenle*'ye dönmek kaldığınız yerden devam eder.

**Kasanın dışındaki dosyalar salt okunur açılır ve *Metin olarak düzenle* bunu kaldırır.** Kapının tamamı bu basıştır: o gerçekleşene dek dışarıda hiçbir şey yazılmaz. Sonrasında dosya, tıpkı kasadaki bir dosya gibi siz yazdıkça kaydedilir; durum satırı da kilitten kaleme döner. Kilidin açılması o tek sekmedeki o tek dosyayı kapsar — başka bir dosyaya geçmek yeniden kilitler ve bu, sekmenin geçmişinde bilinçli olarak saklanmaz, böylece yeniden açılan bir çalışma alanı, açtığınızı hatırlamadığınız bir sistem dosyasında yazma hazır hâlde geri gelmez.

**Kısaltılmış dosyalar her hâlükârda salt okunur kalır** — ekrandakini kaydetmek sınırın ötesindeki her şeyi atardı, bu yüzden düğme sunulup reddedilmek yerine hiç sunulmaz. Aynısı okunamayan bir dosya için de geçerlidir: boş bir bölmeden başka geri yazılacak bir şey yoktur.

Yazma başarısız olursa — salt okunur bir bağlama noktası, sizin olmayan bir dosya — sistemin kendi gerekçesi bir bildirimde gösterilir.

Çok büyük dosyalar kısaltılmış gösterilir ve durum satırı bunu bulmanızı beklemek yerine söyler — diğer koşullarla birlikte, düğmelerin peşinden değil, çünkü bu da diğerleri gibi dosyaya dair bir olgudur. Sınırlar tahmin edilmez, canlı bir işleyiciye karşı ölçülür — bir megabaytlık metni tek bir bölmede dizmek Obsidian'ın işleme sürecini tamamen öldürür ve Markdown bayt başına düz metinden kat kat pahalıya gelir, bu yüzden ikisinin ayrı sınırları vardır ve dosya bir bütün olarak küçük olsa bile tek bir devasa satır kısaltılır.

**Durum satırları etikettir, açıklama ise bir ipucudur.** Her satır neyin doğru olduğunu kaç sözcük gerekiyorsa o kadarıyla söyler — *Kasanızın dışında*, *Bu dosya türü için düzenleyici yok*, *Kısaltıldı — dosya çok büyük* — çünkü yanlarındaki düğmeler dosyanın hangi durumda olduğunu zaten söyler. Birinin üzerine gelmek cümleyi verir: Obsidian'ın onu neden bir not olarak açamadığını, bu dosya türüne başka türlü ne olacağını, kısaltmanın size neye mal olduğunu.

Bu, kasanızın **içindeki** dosyalar için de geçerlidir. Obsidian, görünümü olmayan her uzantıyı doğrudan masaüstünün varsayılan uygulamasına devreder — yani kasanızdaki bir `.txt` ya da `.json` Obsidian'dan tamamen çıkardı. Bunlar artık aynı görüntüleyicide, turuncu halkayla açılır, çünkü istediğiniz şey "onu Obsidian'da aç"tı — ve kasa dosyaları oldukları için orada hiçbir kilit açmadan düzenlenebilirler. Görüntüleyicisi olmayan ikili dosyalar Obsidian'ın davranışını korur; gösterilecek bir şey yoktur.

Önizleme **bulunduğunuz sekmede** açılır, böylece ileri/geri sizi geldiğiniz nota geri götürür; her yerde olduğu gibi yeni sekme için <kbd>Ctrl</kbd> tuşunu basılı tutun. Başlık çubuğu, açık olduğu sürece harici dosyanın yolunu göstermeye devam eder, böylece oradan gezinmeyi sürdürebilirsiniz.

İçeriğin üzerindeki sakin bir satır çıkış yollarını sunar:

- **(kasa)'da aç** — dosya diğer kasalarınızdan birine aitse gösterilir. Onu Obsidian'ın kendi URI işleyicisine devreder, ki bu da o kasanın penceresini içinde not olduğu hâlde, gerçek düzenlenebilir bir not olarak açar. Bu pencere tam olarak olduğu gibi bırakılır; ayağınızın altında hiçbir şey değişmez.
- **Markdown olarak görüntüle** / **Sayfa olarak görüntüle** / **Metin olarak düzenle** — bu dosyanın sahip olduğu iki okuma; sonuncusu ayrıca kasanın dışında salt okunurluğu kaldırır.
- **Varsayılan uygulamada aç** — dosyayı masaüstünüzün varsayılan uygulamasına devreder, bu görüntüleyicinin gösteremediği ikili biçimler de dâhil. Aynı eylem için Obsidian'ın kendi girdisiyle tam olarak aynı sözcüklerle ifade edilir, çünkü aynı eylemdir.

Görüntüleyici bir **sağ tıklamaya** da yanıt verir: metin düzenleyicisinin içinde *Kes* / *Kopyala* / *Yapıştır* / *Tümünü seç* ile, başka her yerde ise dosyanın kendi menüsüyle. Obsidian'ın başlıktaki üç noktalı menüsü de o menüyü taşır — kasanın dışında bu menü aksi hâlde yalnızca *Sağa böl* ve *Aşağı böl* sunardı.

Önce *Metin olarak düzenle*'ye basmadıkça kasanızın dışında hiçbir şey yazılmaz. Tam açıklama için README'nin [Kasanın dışında](README.tr.md#kasanın-dışında) bölümüne bakın.

## Bir dosyayı yoldaki bir klasörün üzerine bırakmak

Sıradaki her klasör bir bırakma hedefidir, bu yüzden **bir notun üzerine sürüklendiği klasör neresiyse not oraya taşınır** — bir not ile üstündeki herhangi bir klasör arasındaki en kısa yol budur, çünkü hedef zaten ekrandadır. Dosya Gezgini'nden, listeden, notun kendi adından başlıktaki veya Obsidian içinde bir dosya üreten başka herhangi bir yerden sürükleyin: bu uygulamanın kendi sürüklemesidir, dolayısıyla üzerine gelindiğinde görünen etiket, imleç ve vurgu Dosya Gezgini'nin çizdikleridir.

**Kasanın adı da bir bırakmayı kabul eder**, çünkü o da sıranın en başındaki klasördür — buradan bir notu kasa köküne koyan tek hareket budur.

**Bütün bir seçim aynı anda sürüklenebilir** ve tek parça olarak taşınır: içlerinden biri bile alınamıyorsa, bir kısmı taşıyıp gerisini sessizce atlamak yerine bırakma tümden reddedilir.

Bağlantılar, tıpkı not Dosya Gezgini'nden taşındığında veya bir yol yazıldığında olduğu gibi, notu takip eder.

Bırakmayı **kabul edemeyecek bir klasör kendinden hiçbir şey sunmaz** — ne *İçine taşı* etiketi, ne klasör üzerinde bir vurgu — sonradan başarısız olacak bir şey sunmak yerine; başlık için Obsidian'ın kendi cevabı olan *Bu sekmede aç* orada durur. Üç durum vardır:

- dosyanın **zaten içinde olduğu** klasör, çünkü zaten oradadır;
- **kendi içine veya kendi altındaki bir öğeye** bırakılan bir klasör, çünkü bu onu geldiği yer olmadan bırakır;
- **bir klasörü ve onun içindeki bir şeyi** birlikte tutan bir seçim, çünkü klasörü taşımak çocuğunu da beraberinde götürür.

Zaten **aynı adda bir dosya** barındıran bir klasör bırakmayı kabul eder ve yoldaki dosya hakkında ne yapılacağını sorar; yazılan veya seçilen alınmış bir adla aynı iletişim kutusuyla — bkz. [Alınmış bir ad](#alınmış-bir-ad). Burada hiçbir şeyin üzerine yazılmaz.

Yalnızca **kasanızın içindeki** klasörler bırakmaları kabul eder. Sıra kasanın dışını gösterirken parçaları reddeder, çünkü bir notu kasadan çıkarmak ona giden her bağlantıyı kırar — bu, bir hareketten çok bir soruyu hak eden bir karardır. Bunu bilerek yapmanın yolu hâlâ yolu yazmaktır; bu önce sorar ve kaç notun etkileneceğini söyler.

## Metni veya bir dosyayı not almak için bırakmak

Aynı hedefler dosyaların yanı sıra **içeriği** de kabul eder ve ikisi, nereye bıraktığınıza göre değil, ne sürüklediğinize göre birbirinden ayırt edilir.

**Sıranın zaten adlandırdığı bir notun üzerine** — notun kendi adı veya klasörü bir klasör notuna sahip bir ayırıcı — bıraktığınız şey, boş bir satırın ardından onun sonuna eklenir. Önce sorar, çünkü bu zaten var olan bir dosyaya yazmaktır ve sürükleme, kararsız bir elin kazara yapabileceği bir harekettir. Bir düzenleyiciden gelen metin, masaüstünüzden bir dosya ve bu kasadan dışarı sürüklenen bir not — hepsi çalışır; bir dosya metin olarak okunur ve ikili bir dosya, bir ekran dolusu anlamsız veri olarak yapıştırılmak yerine reddedilir.

**Bir yerin üzerine — kasa adı veya bir klasör** — henüz hiçbir şey yazılmaz, çünkü henüz hiçbir şey adlandırılmamıştır. Alan orada, bıraktığınızı tutarak açılır ve yazdığınız ad onu işleme koyan şeydir: yeni bir not, metni tutarak *oluşturulur* ve mevcut bir not tam olarak yukarıdaki gibi sorulur. <kbd>Esc</kbd> veya başka bir yere tıklamak bütün işlemi bırakır.

**İçerik olarak inecek bir sürükleme üzerindeyken sıra maviye döner** ve alan bunu tutarken mavi kalır — aynı mavi, aynı şeyi söyleyerek: sonra olacak şey, taşıdığınız metinle ilgilidir. Kendi kasanızdan bir klasörün üzerine sürüklenen bir dosya hâlâ *onu oraya taşı* anlamına gelir, Obsidian'ın kendi vurgusunu korur ve asla maviye dönmez; bu hareket zaten oradaydı ve içerik ondan geri durur.

## Yol, bölmeden daha uzun olduğunda

Adlar **sıkıştırılmak yerine kısaltılır**, en az ihtiyaç duyacağınız şeyin sırasına göre:

1. **Önce kasa adı**, simgesine kadar. Hangi kasada olduğunuzu zaten bilirsiniz; simge yolun nerede başladığını söylemeye devam eder.
2. **Ardından dosyanın uzantısı**, açıksa — bir kasadaki neredeyse her dosyada aynı üç karakter. Kısaltılmak yerine tümüyle gider: yarım bir uzantı, uzantısız olmaktan farklı hiçbir şey söylemez.
3. **Ardından klasörler, en uzundan başlayarak.** En uzun klasör adı bir sonraki en uzunun uzunluğuna kısaltılır, sonra ikisi birlikte, ve böyle devam eder, her biri kendi tabanında durur — böylece çok uzun tek bir klasör, yanındaki kısa bir ad bir harf kaybetmeden önce diğerlerine göre sahip olduğu her şeyden vazgeçer.
4. **Son olarak dosyanın kendi adı** ve yaklaşık altı karakterini korur. Başlığın var olma sebebi budur.

Yer, bir seferde bir harf değil, **sürekli olarak**, pikselin kesirleri halinde bırakılır: yol veren bir ad piksel düzeyinde kırpılır ve kendi `…` işaretinin altında solar, böylece yavaşça daraltılan bir bölme sırayı pürüzsüzce daraltır ve ondan sonraki hiçbir şey adım adım hareket etmez. Herhangi bir harf gitmeden önce, ayırıcıların çevresindeki boşluk harcanır — bu sıranın tek boşluğudur ve hiçbir bilgiye mal olmaz — ve kısaltılmış bir ad, ikisi arasında boş bir kutu şeridi olmadan ayırıcının başladığı yerde biter.

**Alan, tuttuğu şeyi olduğu gibi tutar.** Bir yol yazmak için bir alan açmak, yanındaki klasörleri kenara itmez: içindeki metin ne kadar genişse o kadar geniştir ve siz yazdıkça büyür, böylece iz, alanın ihtiyaç duymadığı her şeyi korur. Yalnızca ikisi için de yeterli yer kalmadığında sıra kayar ve o zaman asla yol vermeyen tek şey alandır — o düzenlenmekte olan bir metindir, sığdırılmakta olan bir ad değil.

Hiçbir şey, onu komşularından ayıran noktadan öteye kesilmez: aynı klasördeki `Projects2025` ve `Projects2026`, ikisini aynı sözcük yapacak bir önek yerine `…025` ve `…026`'ya iner, oysa `Reports`, `Receipts`'in yanında `Rep…`'ye inebilir. Bunun üstüne her ad **okunabilir bir genişliği** korur — bir klasör için yaklaşık dört harflik, bir dosya adı için altı harflik, sayılarak değil sıranın gerçekten çizildiği yazı tipinde ölçülerek. Dört dar harf ile dört geniş harf aynı miktarda ad değildir, bu yüzden `lilliliillil`in kendinden daha fazlasını korumasına izin verilir, `WWMMWWMMWWMM`'inkinden daha fazla; ve ekranda kalan, her iki durumda da aynı boyuttadır. Kısa adlara hiç dokunulmaz — `A…`'ya kadar aşındırılmış bir ad benzersizdir ama yine de okunamaz. **Boşluklar buna sayılmaz.** Bu dosyanın hangisi olduğunu söyleyecek altı karakter, okunmaya değer altı karakterdir, dolayısıyla aralarındaki boşluklar bedavaya gelir ve hiçbiri, zaten görünmez olacağı `…` işaretine bitişik bırakılmaz.

**Bir ad, komşularının hemfikir olduğu her yerden kesilir ve hiçbir yerde hemfikir olmadıklarında ortadan kesilir.** `aaaa-common-one` ve `aaaa-common-two` adlı iki klasör, son üç karakterleri dışında her şeyi paylaşır, bu yüzden kuyruğu kesmek hiçbir şey söylemeyen yarıyı korur: bunun yerine `…one` ve `…two`'ya inerler, ki bu hem daha kısadır *hem de* onları birbirinden ayırır. Hemfikirlik sonda olduğunda — `alpha-draft`, `beta-draft`'ın yanında — giden şey sondur; hemfikirlik her iki uçta olduğunda, kalan orta kısımdır. Yakın komşusu olmayan bir ad ortasını kaybeder, çünkü bir ad ne olduğuyla başlar ve hangisi olduğuyla biter — bir dosya için bu, uzantısıdır: `annual…2026.md`.

Ortak kısa bir dizi buna sayılmaz. `parallel structures` yanındaki `Schemes` ile tesadüfen aynı iki harfle biter ve bu, ikisinden birini bütün tutmak için bir sebep değildir — baştan üç karakter zaten onları ayırt eder.

Hiçbir şey ikinci bir satıra sarmaz. En kısa dürüst adlar bile sığmadığında, sıra **yana doğru kayar**, dosyanın olduğu uca park edilmiş halde — o noktada sıkıştıracak bir şey kalmamıştır ve daha fazla kesmek, kısaltmaktan çok gizlemek olurdu. Tekerlek, işaretçi sıranın üzerinde nerede olursa olsun onu kaydırır ve her iki uca da ulaşılabilir: kayarken sıra, hizalama ayarı ne derse desin başlangıcına hizalanır, çünkü büyüdüğü bir kutuda ortalanmış içerik hem soldan hem sağdan taşar — ve o yarıya hiç kaydırılamaz.

**Kısaltılmış bir adın üzerine gelin, tam haliyle geri döner**, siz üzerine geldiğiniz sürece, geri dönen her şey ekranda olacak şekilde sol kenara kaydırılmış olarak. **Birine tıklayın, kalıcı olsun**: alan, tıkladığınız klasörü, ondan sonra sunulanı ve yazdığınız her şeyi göstererek açılır ve işaretçi uzaklaştıktan sonra bunları göstermeye devam eder. Sırayı kaydırırken veya içine yazarken adlar yerinde kalır — sırayı okumaya yönelik bir hareketin altında birinin açılıvermesi, ondan sonraki her şeyi ayağınızın altından kaydırırdı.

**Açılış parçası her zaman bir araç ipucu taşır ve bu mutlak yoldur** — `/home/siz/Vaults/Notes`, ya da sıra neredeyse başladığı yer. Sıra hakkında ekrandaki hiçbir şeyin söyleyemediği tek şey budur: ad size *hangi* kasa olduğunu söyler, asla nerede olduğunu söylemez. Bir şeyin kısaltılıp kısaltılmadığına bakılmaksızın oradadır.

**Kasa adını göster** kapalıyken ad kaldırılmaz, yalnızca hiçliğe tutulur — böylece simgeye işaret etmek, sıranın kısaltmak zorunda kaldığı bir ada işaret etmenin yaptığı gibi onu geri verir.

**Dosya uzantılarını göster**, uzantıyı sıranın dosya adına geri koyar. Kapalı — varsayılan — sıra, bir kasadaki neredeyse her dosyanın paylaştığı `.md` uzantısı olmadan, Obsidian'ın notu adlandırdığı şekilde adlandırır; açık, dosya sisteminin yaptığı şekilde adlandırır, ki bu kasanın notlardan fazlasını barındırdığında istediğiniz şeydir. Ayrıca, boşluk azaldığında sıranın vazgeçtiği ikinci şeydir, kasa adının hemen ardından.
Bir araç ipucu size gerisini verir: yalnızca adı değil, sıranın altında gösterdiği her şeyi, `…/ad/klasör/not.md` şeklinde, böylece tek bir üzerine gelme hem "bu nedir" hem de "bunun altında ne var" sorularını yanıtlar. Kasa simgesi, ad kapatıldığında veya sıkıştırılıp gittiğinde kasasını aynı şekilde adlandırır.

## Uyarı renkleri

| | Ne zaman | Ne anlama gelir |
| --- | --- | --- |
| Yol çubuğunda **kırmızı** halka | Sıra kasanızın dışını gösteriyor | Obsidian orada olanı not olarak açamaz ve asma kilidi açana kadar dışarıda hiçbir şey yazılmaz. |
| Yol çubuğunda **turuncu** halka | Dosya, Obsidian'ın görünümü olmayan bir metin türü | Bir uyarı. Obsidian bunu masaüstünüzün varsayılan uygulamasına verirdi; eklenti onun yerine bunu gösterir. |
| Açık alanda **kırmızı** metin | O yolda henüz hiçbir şey yok | <kbd>Enter</kbd> onu açmak yerine oluşturur. Bir uyarıdan çok, bir sonraki tuş vuruşunun ne yapacağının bir ifadesidir — bkz. [Bir yol yazmak](#bir-yol-yazmak). |
| Yeniden adlandırma/taşıma anahtarının yerinde **kırmızı** asma kilit | Sıra kasanızın dışını gösteriyor ve oraya yazmak hâlâ kilitli | Halkayla aynı kırmızı, aynı sebeple: bir reddi işaret eder. Ona basmak buraya yazmaya izin verir ve yuvayı anahtara geri verir — bkz. [Kasanın dışına yazmak](#kasanın-dışına-yazmak). |

**İki halka birbirinden bağımsızdır ve ikisi de aynı anda olabilir** — harici bir `.json`, hem kasanızın dışındadır *hem de* Obsidian'ın düzenleyicisi olmayan bir türdür. Görüntüleyicide ayrı satırlar olarak görünürler, her biri yalnızca kendi gerçeğini belirtir. Yol çubuğunda, ikisi de geçerliyse kırmızı kazanır, çünkü iki halka yalnızca gürültü olurdu. Kırmızı *metin* tamamen üçüncü bir şeydir: yazılmakta olanla ilgilidir, sıranın nereyi gösterdiğiyle değil, bu yüzden her iki halkanın içinde de veya hiçbirinde de görünebilir.

Turuncu kademe bilerek dardır. Kayıtlı türler (Markdown, canvas, görseller, PDF, ses, video) düzgünce ele alınır ve hiçbir şey almaz. İkili dosyalar da hiçbir şey almaz — bir `.zip`'i kazara düzenleyip bozamazsınız. Geriye kalan tam olarak tehlikedir: **Tüm dosya türlerini göster**in görünür kıldığı bir `.json`, `.css` veya `.log`. Liste kasıtlı olarak daha geniştir: orada, not olmayan her şey turuncudur — bkz. [listedeki satırlar nasıl renklendirilir](#listedeki-satırlar-nasıl-renklendirilir).

## Yeniden adlandırma/taşıma modu

Başlığın en sağındaki kalem düğmesi — görünüm modu düğmesinin yanında, yerel düğmelerle aynı boyutta — yeniden adlandırma/taşıma modunu açıp kapatır. Kasanızın dışında, siz basana kadar onun yerinde kırmızı bir asma kilit durur; bkz. [Kasanın dışına yazmak](#kasanın-dışına-yazmak). Başlık sırası o zaman, Dosya Gezgini'nde yeniden adlandırma yaparken olduğu gibi, vurgu rengiyle çerçevelenir. Aynı tıklamalar ve tuş vuruşları artık Obsidian'ın `fileManager.renameFile` işlevi aracılığıyla bir taşıma veya yeniden adlandırmayı işleme koyar, böylece nota giden tüm bağlantılar da bunu takip eder.

Yeniden adlandırırken:

- Geçerli dosya adı her klasörün listesine sabitlenir, böylece bir notu yeniden adlandırmadan taşımak tek bir tıklamadır.
- Hedef klasörde zaten alınmış adlar **kırmızıdır** — adı zaten barındıran bir klasör ve o addaki bir dosya — böylece çakışma siz seçmeden önce görünür. Yine de seçilebilirler: aşağıya bakın.
- Girdi, Obsidian'ın kendi yeniden adlandırma kurallarına göre canlı olarak doğrulanır — aynı karakter kümeleri, aynı mesajlar, dosya ağacında yeniden adlandırırken aldığınız aynı kırmızı araç ipucu — böylece izin verilmeyen bir ad siz yazarken işaretlenir ve işleme konulamaz.
- Başlık çubuğunun dışına tıklamak veya başlığın odağı kaybetmesi, yeniden adlandırma modunu sonlandırır.

### Alınmış bir ad

Zaten var olan bir adın üzerine taşımak veya yeniden adlandırmak, **reddetmek yerine sorar.** Düzenleyebileceğiniz iki yolu olan bir iletişim kutusu açılır: dosyanızın nereye gideceği ve yoldaki dosyanın nereye gideceği — bu, hâlâ alınmışken kırmızıdır. Her yol, yol çubuğunun bir yolu çizdiği şekilde çizilir; farklı olan kısımlar renklendirilir ve en son kısaltılır, böylece uzun bir yol bile neyin değiştiğini gösterir.

Her iki alanın da bir listesi vardır. İkincisi, olağan çıkış yollarını barındırır:

- **Yerlerini değiştir** — kendi eski klasörüne, kendi adıyla gider.
- **Adları değiştir** — olduğu yerde kalır ve dosyanızın eski adını alır.
- **İkisini de değiştir** — dosyanızın eski yolunu alır.
- Kendi adının yanında `-1`, `-bak` ve `-old`.
- Dosyaların sahip olduğu iki ad.

İlk liste, dosyanızın gitmekte olduğu yeri, **Olduğu yerde kalsın**'ı, hedef klasördeki kendi adını ve yanında `-1`, `-bak` ve `-old`'u sunar. Yolu alınmış olan bir çıkış yolu gri gösterilir ve seçilemez. Birini seçmek **yalnızca alanı doldurur** — yine de düzenleyebilirsiniz — ve **Uygula**, bağlantılarıyla birlikte ikisini de taşır; **İptal** hiçbir şeyi taşımaz. Listeden alınmış bir adı seçmek de aynısını sorar, tıpkı bir notu zaten kendi adını barındıran bir klasörün üzerine bırakmak gibi.

## Her iki yeniden adlandırma için tek tuş

Yeniden adlandırma komutu (varsayılan olarak <kbd>F2</kbd> veya onu yeniden atadığınız her neyse), Obsidian'ın satır içi başlık yeniden adlandırması ile bu eklentinin başlık yol çubuğu arasında **geçiş yapar**. Obsidian'ın satır içi başlığını kapattıysanız, başlık yol çubuğu tek hedef haline gelir, dolayısıyla tuş asla hiçbir şey yapmadan kalmaz.

Yol çubuğunda **uzantısı olmadan ada** açılır — bir yeniden adlandırmanın neredeyse her zaman olduğu düzenleme budur ve ada tıklamak da aynı şeyi seçer. Tekrar basın; orada <kbd>Tab</kbd> ne yapardıysa onu yapar: ad üzerindeyken bu bir sonraki basamaktır — uzantısıyla birlikte ad, kasa klasörünüzden itibaren yol, sistem kökünden itibaren yol; bir şey yazılmışsa <kbd>Tab</kbd>'ın yaptığı gibi onu tamamlar.

**Döngü başlıkta kapanır.** Beş basış sizi tam bir tur attırır — satır içi başlık, ad, uzantısıyla birlikte ad, kasanızdan itibaren yol, sistem kökünden itibaren yol — ve altıncısı yine satır içi başlıktır. Bu basış, <kbd>Tab</kbd>'dan farklı olan tek basıştır; <kbd>Tab</kbd> bunun yerine yolun başına döner — ve yedincisi <kbd>Tab</kbd>'ın döndüğü yere gider: kasa kökü, alanda tüm yol ve ilk klasörü işaretli halde. Yani <kbd>Tab</kbd>'ın ulaştığı her basamağa bu tuş da ulaşır.

**Yol çubuğuna odaklan** komutu, alanın içinde de aynısını yapar — <kbd>Tab</kbd> ne yapardıysa onu — ve <kbd>Tab</kbd>'ın döneceği yerde imleci not defterine geri verir. Bir sonraki basışı ise o dönüştür: kasa kökü, ilk klasör işaretli.

**Zaten açık olan bir alanda** bu tuş, alanı bulunduğu yerde bir yeniden adlandırmaya çevirir — metni, imleci ve seçimi koruyarak — ve **Yol çubuğuna odaklan** aynı şekilde yeniden adlandırmayı ondan geri alır. Basışlar arasında basılan veya tıklanan **başka her şey**, her iki döngüyü de baştan başlatır, dolayısıyla düzenleme yaptıktan sonraki bir basış hiçbir zaman önceden kalan bir basamağa denk gelmez.

Kasanın dışında da bu tuş çalışır — orada satır içi başlık olmadığından ilk basış doğrudan yol çubuğuna gider.

Bu, tuşu ele geçirerek değil `workspace:edit-file-title` komutunu sararak çalışır, dolayısıyla hem kısayolu yeniden atamak hem de komutu paletten çalıştırmak değişmeden çalışır.

## Listedeki satırlar nasıl renklendirilir

| Renk | Anlamı |
| --- | --- |
| **Mor** | Bir not (`.md`, `.markdown`) — Obsidian'ın bir not olarak açacağı şey, karışık içerikli bir klasörden ayırt edilerek seçilir |
| **Turuncu** | Not değil — Obsidian'ın not olarak açmayacağı her şey, PDF'ten `.txt`'ye kadar, ve yanlarındaki `:page` girdileri. Karışık içerikli bir klasör, içindeki notlar için okunur ve geri kalan her şey için tek bir renk, birkaçında uyarı vermekten daha hızlı bir şekilde bunu belirtir; bkz. [uyarı renkleri](#uyarı-renkleri) |
| **Soluk** | Kasanızın dışında, dolayısıyla kasanın kendi işleyişi geçerli değildir |
| **Mavi**, kalın | Zaten bulunduğunuz yer: bu çubuğun kendi notu ve yol çubuğunun üzerinde durduğu klasör. Yeniden adlandırma/taşıma modunda *bu adı koru* girdisi notun yerine geçer — her iki durumda da aynı not |
| **Kırmızı** | Yalnızca yeniden adlandırma/taşıma modunda: ad zaten alınmış. Yine de seçilebilir — bir tanesini seçmek, yoldaki dosyayla ne yapılacağını sorar; bkz. [Alınmış bir ad](#alınmış-bir-ad) |

**Klasörler kalın yazılır**, dolayısıyla bir klasörün kendi notunun, klasöründen ayırt edilmek için kendine ait bir renge ihtiyacı yoktur: diğer her not gibi mordur. **Bir satırın kenarındaki bir çizgi**, yazdığınızla başlayan adları işaretler — daha ileride uyuştukları yerde mavi, önerinin izlediği dalda yeşil; bkz. [Bir yol yazmak](#bir-yol-yazmak).

Alan, adlandırdığı şey için aynı renkleri alır — bkz. [Bir yol yazmak](#bir-yol-yazmak).

## Görünürlük kuralları

- Desteklenmeyen uzantılara sahip dosyalar, listede yalnızca Obsidian'ın **Detect all file extensions** ayarı açıksa görünür — **kasanın içinde**. Kasanın dışında bu ayar geçerli değildir: bu ayar, kasanın neyi dizinlediğini belirler ve dışarıdaki hiçbir şey kasada değildir, dolayısıyla notlarınızın yanındaki bir `.txt` her iki durumda da listelenir.
- Liste en fazla 1.000 girdi gösterir, Obsidian'ın kendi sınırının on katı. Bir klasörde daha fazlası olduğunda, son satır kaçının dışarıda bırakıldığını söyler; listeyi daraltmak için yazmaya devam edin.
- Gizli dosyalar ve gizli klasörler yalnızca bu eklentinin **Gizli dosyaları göster** ayarı açıksa görünür.
- **Üzerine yazmaya karşı koruma, görünürlükten bağımsız olarak aynı şekilde işler** — gizli bir dosya bile üzerine yazmanızı yine de engeller.

## Kopya kâğıdı

**Tırnak içine alınmış** bir yol sizin için tırnaklardan çıkarılır. Windows'un *Copy as path* özelliği `"C:\Users\you\note.md"` şeklinde, tırnaklar dahil verir ve bir kabuk, içinde boşluk olan herhangi bir yol için de aynısını yapar; birini yapıştırmak veya yazmak her iki şekilde de çalışır. Yalnızca çift tırnak, ve yalnızca tüm ifadenin etrafında eşleşen bir çift olarak — bu, kesme işaretinin çok rahatlıkla bulunabileceği gerçek bir adda asla bulunamaz.

| Şunu yapmak istiyorsunuz… | Bunu yapın |
| --- | --- |
| Bir klasörü açmak (notunu, veya onu göstermek) | O klasörden **sonraki** ayırıcıya tıklayın |
| Bir klasöre sahip olmadığı bir klasör notu vermek | Aynı ayırıcıya **çift tıklayın** (bir klasör notu eklentisi gerekir) |
| Bir klasörü bir kardeşiyle değiştirmek | O klasörün adına tıklayın, ardından yazın veya seçin |
| Notu yeniden adlandırmak veya hedefini değiştirmek | Notun adına tıklayın — uzantısı dahil |
| Bir klasörün içeriğine göz atmak | O klasörün adına tıklayın; liste onun üst klasörünü gösterir, dolayısıyla istediğiniz klasörün **altındaki** klasöre tıklayın |
| Bir klasörü ve altındaki her şeyi yeniden yazmak | O klasörün adına **çift tıklayın**, ardından yazın |
| Yolu bir klasörden aşağıya doğru düzenlemek | O klasörün adına tıklayın, ardından seçimi kaldırmak için <kbd>→</kbd> |
| Yolunu yazarak bir dosyaya atlamak | Dosya adına veya boş alana tıklayın, yazın, <kbd>Enter</kbd> |
| Bunun yerine bir dosyayı yeni bir sekmede açmak | Seçerken <kbd>Ctrl</kbd>, veya <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| Notu taşımak yerine bir yere kopyalamak | Kalem, ardından hedefi seçerken veya onaylarken <kbd>Ctrl</kbd> |
| Var olmayan bir yolda bir not oluşturmak | Yolu yazın — listede hiçbir şey ona uymadığında alan **kırmızı** olur — ardından <kbd>Enter</kbd>. Kasanın içinde hemen oluşturulur; dışında önce sorar |
| Yazdığınız bir yolun zaten orada olup olmadığını anlamak | Renge bakın: adlandırdığı satırın rengini alır ve kırmızı, <kbd>Enter</kbd>'ın onu oluşturacağı anlamına gelir |
| Yazarken bir seviye aşağı inmek | `/` yazın |
| Yazarken bir seviye yukarı çıkmak | Boş girişte <kbd>Backspace</kbd> |
| Alandan önceki klasörleri alana getirmek | Başında biri için <kbd>←</kbd>; hepsi için <kbd>Shift</kbd>+<kbd>Home</kbd>, veya liste kapalıyken <kbd>Home</kbd> |
| Açık notu taşımak veya yeniden adlandırmak | Kaleme tıklayın, ardından yukarıdaki gibi gezinin veya yazın |
| Alınmış bir ada taşımak | Yine de onaylayın: iletişim kutusu yer değiştirmenize, adları değiştirmenize veya ikisini birden yapmanıza, ya da yoldaki dosyaya başka bir ad vermenize izin verir |
| Yeniden adlandırmadan taşımak | Kalem → hedef klasöre tıklayın → sabitlenmiş mevcut dosya adını seçin |
| Yerinde yeniden adlandırmak | <kbd>F2</kbd> iki kez (ilk basış satır içi başlığa, ikincisi başlığa gider) |
| Başka bir kasaya, ana dizine veya bir sürücüye atlamak | Kasa adına tıklayın |
| Kasanın dışından bir dosya açmak | Kasa adı → bir konum seçin → gezinin → dosyayı seçin (*Metin olarak düzenle*'ye kadar salt okunur) |
| Yazılmakta olan adı tamamlamak | <kbd>Tab</kbd>, veya önerilen şey için <kbd>End</kbd>; <kbd>→</kbd> ondan bir harf alır |
| Bir ad kalınca içine girmek | Tekrar <kbd>Tab</kbd> |
| Bir adımı geri almak, veya klasörden çıkmak | <kbd>Shift</kbd>+<kbd>Tab</kbd> |
| Tüm yolu, veya sistem yolunu almak | Sona kadar <kbd>Tab</kbd>, veya dört kez tıklamak |
| Bir adı, bir yolu veya bir sistem yolunu kopyalamak | İki kez sağ tıklayın; sistem yolu için boş alana üç kez |
| Kasa yöneticisinin bu kasa için sunduklarına ulaşmak | Satırın başındaki simgeye sağ tıklayın |
| Kasanın kimliğini kopyalamak | Satırın başındaki simgeye sağ tıklayın |
| Göz attığınız başka bir kasayı açmak | Satırın başındaki adına sağ tıklayın |
| Dosyanın uzantısını satırda görmek | Ayarlarda **Dosya uzantılarını göster**'i açın |
| Bir klasör parçasını yeni bir sekmede açmak | <kbd>Ctrl</kbd> ile veya orta tuşla tıklayın, ya da sekme çubuğuna sürükleyin |
| Yol çubuğuna klavyeden ulaşmak | Kısayollarda *Yol çubuğuna odaklan*'ı atayın |
| Bir web adresi veya bir `obsidian://` bağlantısı açmak | Çubuğa yazıp <kbd>Enter</kbd>'a basın |
| Herhangi bir şeyi iptal etmek | <kbd>Esc</kbd>, veya başlık çubuğunun dışına tıklayın |
| Onaylamadan önce girdileri deneyip bakmak | Listede ok tuşlarıyla veya farenin üzerinde gezinin; en üstten öteye <kbd>↑</kbd> yazdığınız metni geri verir |
| Bir notu üzerindeki bir klasöre taşımak | Onu satırdaki o klasöre sürükleyin |
| Bir metin parçasını yeni bir not olarak saklamak | Metni bir klasöre sürükleyin, bir ad yazın, <kbd>Enter</kbd> |
| Bir metin parçasını okumakta olduğunuz nota eklemek | Onu notun adına sürükleyin, onaylayın |
| Kısaltılmış bir klasör adını tam olarak görmek | Üzerine gelin, veya bölmeyi genişletin |
| Kasanın kendisinin nerede bulunduğunu öğrenmek | Satırın başındaki simgenin üzerine gelin |
| Bir notu kasadan çıkarmak | Kalem → dışarıda gezinin → iletişim kutusunu onaylayın (bağlantılar bozulacak) |
| Kasanızın dışına yazmaya izin vermek | Başlıktaki **kırmızı asma kilide** tıklayın; yeniden adlandırma anahtarı onun yerini alır |
| Onu tekrar kilitlemek | Asma kilit geri gelene kadar anahtara tıklayın — bir basışta içeri, bir basışta dışarı |
| Kasanın dışındaki bir dosyayı silmek | Asma kilidi açın, ardından dosyaya sağ tıklayın: *Delete* onu sisteminizin çöp kutusuna taşır |

## Ayarlar

| Ayar | Seçenekler | Varsayılan | Ne işe yarar |
| --- | --- | --- | --- |
| **Language** | Obsidian varsayılanı, veya 46 dilden biri | Obsidian varsayılanı | Bu eklentinin kendi metninin hangi dilde olduğu. *Obsidian varsayılanı*, Görünüm ayarlarında belirlenen dili izler, ki neredeyse herkesin istediği de budur. Satırın kendisi — adı, açıklaması ve *Obsidian varsayılanı* — hangi dil seçilirse seçilsin İngilizce kalır, çünkü bu, okuyamadığınız bir dilden geri çıkış yoludur. Yunanca ve Sanskritçe burada çevrilidir ve Obsidian'ın kendi listesinde yoktur, dolayısıyla bu ayar onlara ulaşmanın tek yoludur. |
| **Hizalama** | Sol / Orta / Sağa | Sol | Yol çubuğunun başlık satırında nerede durduğu. *Orta*, Obsidian'ın klasik görünümüyle eşleşir. |
| **Ayırıcı** | Herhangi bir karakter | `/` | Parçalar arasına çizilen ayırıcı. Metin alanının önünde tek tıkla seçilebilen altı hazır ayırıcı bulunur (`/ > ▸ › \ •`). |
| **Kasa adını göster** | Açık / Kapalı | Açık | Kasanın kendisinin yol çubuğundaki ilk parça olup olmadığı. Kapatıldığında bu parça kaybolmaz, bir 🏠 simgesine dönüşür, dolayısıyla yol yine de tıklanabilir bir yerden başlar. |
| **Klasör adı listeyi açar** | Açık / Kapalı | Açık | Bir klasör adının ve ondan sonraki ayırıcının ne yaptığını birbiriyle değiştirir — bkz. [yukarıdaki tablo](#yol-çubuğu). [Folder notes](obsidian://show-plugin?id=folder-notes) ile ayırıcı klasör notlarını açar. Yeniden adlandırma/taşıma modunda asla geçerli değildir. |
| **Gizli dosyaları göster** | Açık / Kapalı | Kapalı | Gizli dosyaların ve gizli klasörlerin listede gösterilip gösterilmediği. Üzerine yazmaya karşı koruma her iki durumda da geçerlidir. |
| **Show all file types** | — | — | Bu eklentinin değil, Obsidian'ın ayarı, burada anılmasının nedeni aynı soruyu yanıtlamasıdır: kasanız yalnızca kendisine söylenen dosya türlerini dizinler ve yalnızca dizinlediği listelenebilir. Bunu Obsidian'ın ayarlarında bulun ve tüm dosyaları görmek için açın; satırın yanındaki düğme, o sayfayı ayar kaydırılmış ve vurgulanmış halde açar, tıpkı ayarların kendi aramasında ona tıklamak gibi. Kasanın dışında geçerli değildir, çünkü orada zaten hiçbir şey dizinlenmez. |
| **Dosya uzantılarını göster** | Açık / Kapalı | Kapalı | Satırdaki dosya adının uzantısını taşıyıp taşımadığı. Kapalıyken uzantı gösterilmez — Obsidian'ın bir notun başlığında yaptığı gibi. Açıkken satır, dosyayı dosya sisteminin adlandırdığı şekilde adlandırır. Her iki durumda da uzantı, satır yer kalmadığında kasa adından hemen sonra vazgeçilen ikinci şeydir. |
| **Harici dosyalara erişim** | Açık / Kapalı | **Kapalı** | Kasa adının konumlar listesini açıp açmadığı. Kapalıyken eklentideki hiçbir şey bu kasanın ötesine bakmaz. |
| **Hotkeys** | düğme | — | Obsidian'ın *Hotkeys* sayfasını bu eklentiye göre filtrelenmiş şekilde açar, burada *Yol çubuğuna odaklan*'a bir tuş atanabilir. |

## Simgeleri değiştirmek

Lure üç simge çizer: kasa kökü simgesi (**Kasa adını göster** kapalıyken), yeniden adlandırma/taşıma anahtarı ve kasanın dışına yazma kilitliyken onun yerini alan asma kilit. Hepsi bir temadan veya bir CSS parçacığından değiştirilebilir — değiştirme karakterini ayarlayıp paket içindeki simgeyi tek bir kuralda gizleyin:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* Yalnızca kapalıyken gösterilir: onu açmak yuvayı yeniden adlandırma anahtarına devreder. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}
```

`--lure-icon-glyph`, CSS `content` içinde geçerli olan her şeyi kabul eder, dolayısıyla `url(...)` bir görsel için de metin ya da emoji karakteri için olduğu kadar işe yarar. Lucide simgesini korumak ve kendi karakterinizi onun yanına çizmek için `--lure-icon-svg` değerine dokunmayın.
