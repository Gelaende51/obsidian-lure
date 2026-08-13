<!-- docs/usage.md dosyasının çevirisi — durum: commit 7b2691a.
     Makine çevirisi (Claude Opus 5), ana dili Türkçe olan kişilerce
     gözden geçirilmedi. Eklentinin etiketleri src/lang/translations.ts
     dosyasından, Obsidian'ınkiler ise uygulamanın kendi getirdiği
     metinlerden gelir; yani ekranınızda gördüğünüzle örtüşürler. -->

**Bunu başka dillerde okuyun:** [English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · [Čeština](usage.cs.md) · [Dansk](usage.da.md) · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · [Bahasa Indonesia](usage.id.md) · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · [Norsk](usage.no.md) · [Polski](usage.pl.md) · [Português](usage.pt.md) · [Português (Brasil)](usage.pt-BR.md) · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · **Türkçe** · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

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

[Folder notes](obsidian://show-plugin?id=folder-notes) kuruluyken aynı tıklama bunun yerine o klasörün notunu açar. Başlıktaki yolu sahiplendiği görülen tek klasör notu eklentisi budur; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) ve [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) klasör notlarını yönetir ama yol üzerindeki tıklamayı dinlemez, dolayısıyla onlarla ayırıcı klasörü her zamanki gibi gösterir. Bkz. [uyumluluk](../compatibility.md#verified-against).

Bir ayırıcı **yalnızca kendisinden önceki klasörün gerçekten bir klasör notu varsa** altı çizili olur; yani altı çizgi, açılacak bir şeyin bulunduğuna dair bir sözdür. Her ayırıcı yine de tıklanabilir kalır — altı çizili olmayan biri klasörünü kenar çubuğunda gösterip açar, ki imleç bunu hâlâ belli eder. Altı çizgi aynı anda klasör adından ayrılır: takas açıkken adı listeyi açar, dolayısıyla onu nota giden bağlantı diye işaretlemek yalan olurdu.

**Yeniden adlandırma/taşıma modu ikisini de geçersiz kılar**, ayar ne derse desin: bir taşıma beklerken çubuktaki hiçbir şey klasör açmaz, çünkü bir klasör açmak taşımayı terk etmek olurdu. Klasör adları düzenleme için seçilir, ayırıcılar aşağı iner — ikisi de hedefi belirlemenin yollarıdır — ve açmanın askıya alındığını göstermek için altı çizgi kaybolur.

**Kasa kökü**, yol parçası olmayan tek parçadır. Kardeşlerini listeleyebileceği bir üst klasörü yoktur, bu yüzden onun yerine [konumlar listesini](#kasanın-dışında-gezinmek) açar — diğer kasalarınız, ev klasörünüz, dosya sisteminin kökü ve bağlı sürücüler.

## Bir parçaya tıklamak: onu bir kardeşiyle değiştirin

Bir klasör adına tıklamak **o klasörün adını** bir metin alanında seçer ve **bir üst düzeydeki** klasörün — yani üst klasörünün — listesini açar. Yazmak ya da bir satır seçmek bu klasörü bir kardeşiyle değiştirir ve altındaki her şeye dokunmaz; yani `Projeler/2026/Başlangıç.md` → `2026` tıklayın → `2025` seçin size `Projeler/2025/Başlangıç.md` verir.

**Notun adına** tıklamak kendi klasörüne karşı aynı şekilde çalışır ve dosya adını **uzantısıyla birlikte** seçer — bir notu yeniden adlandırmak ya da başka bir yere yönlendirmek genellikle onu da değiştirmek demektir.

Klasöre tıklamak zaten bir parçayı seçmiştir, dolayısıyla **bir tıklama daha** seçimi tüm satıra genişletir — o klasör *ve* altındaki her şey — ve yazdıklarınız yolun kalanını tek seferde değiştirir. Gezinme ve yeniden adlandırma/taşıma modunda aynı biçimde çalışır.

Bu yalnızca alanı açan tıklamanın devamı olarak geçerlidir. Alanı bir kez kullandıktan sonra herhangi bir metin alanı gibi davranır: tıklama imleci yerleştirir, çift tıklama bir sözcük alır, üç tıklama satırı alır.

Her hâlükârda yolun geri kalanı alanın çevresinde görünür kalır — öncesinde çipler, sonrasında seçilmemiş metin olarak — böylece tam yol başlıktan hiç kaybolmaz. Seçimin üzerine yazın ya da onu koruyup oradan düzenlemek için <kbd>End</kbd> / <kbd>→</kbd> tuşuna basın. Liste, önceden doldurulmuş olan ne olursa olsun klasörün tamamını gösterir; ancak siz gerçekten yazmaya başlayınca süzmeye başlar.

## Ayırıcıyla aşağı inmek

Bir ayırıcıya tıklamak (**Klasör adı listeyi açar** kapalıyken) ondan önceki klasörün içine iner: liste *o* klasörün içeriğini gösterir ve yolun kalanı alanda seçili olarak açılır. Bir klasör seçmek onu yol izine ekler ve hemen bir sonraki listeyi açar, böylece başlık çubuğundan ayrılmadan bir ağacın içinde tıklaya tıklaya inebilirsiniz.

## Listedeki satırlar gerçek dosya yöneticisi satırlarıdır

Listedeki her dosya ve klasör, Dosya Gezgini'ndeki satırı gibi davranır:

- Aynı bağlam menüsü için **sağ tıklayın** — bir klasörde *Yeni not* / *Yeni klasör*, bir dosyada *Yeni sekmede aç* / *Yeniden adlandır…* / *Sil* — başka eklentilerin dosya menülerine eklediği maddeler dahil.
- Bir satırı Obsidian'ın dosya kabul ettiği her yere **sürükleyin**: bağlantı eklemek için bir düzenleyiciye, taşımak için Dosya Gezgini'ndeki bir klasörün üzerine, açmak için sekme çubuğuna.

Menü ifadeleri Obsidian'ın kendi çevirilerinden gelir, dolayısıyla her dilde uygulamanın geri kalanıyla uyuşur.

## Bir yol yazmak

- Yol izinin önündeki ya da arkasındaki **boş alana** tıklamak, tüm yolla önceden doldurulmuş ve tamamen seçili bir metin alanı açar — üzerine yazın ya da yerinde düzenleyin. (Dosya adının kendisine tıklamak yalnızca dosya adını seçer; yukarıya bakın.)
- Yol izi görünürken yazmaya başlamak son parçayı, geçerli klasörle sınırlı canlı otomatik tamamlamaya sahip küçük bir alana dönüştürür.
- `/` geçerli parçayı onaylar ve içine iner.
- Boş bir alanda <kbd>Backspace</kbd> üst klasöre geri çıkar ve imleç sonda olacak şekilde adını yeniden açar.
- <kbd>Enter</kbd> onaylar; <kbd>Esc</kbd> ya da başka bir yere tıklamak dosyanın gerçek yoluna geri döner.

Alan tamamen sadedir — kutu yok, kenarlık yok — böylece yol metninin kendisi gibi okunur ve siz yazdıkça kendiliğinden büyür.

## Gezinme açık dosyaya asla dokunmaz

Varsayılan (gezinme) modunda açık olan not **asla** yeniden adlandırılmaz ya da taşınmaz.

- Var olan bir dosyaya karşılık gelen bir yol onu açar.
- Henüz var olmayan bir yol *"Yeni dosya oluşturulsun mu?"* diye sorar. Onaylamak eksik üst klasörleri ve dosyayı oluşturur; iptal etmek hiçbir şey yapmaz.

## <kbd>Ctrl</kbd> — yeni sekme ve taşımak yerine kopyalamak

Listeden bir dosya seçerken ya da bir yolda <kbd>Enter</kbd> tuşuna basarken <kbd>Ctrl</kbd> (macOS'ta <kbd>Cmd</kbd>) tuşunu basılı tutmak, sonucu bu sekme yerine **yeni bir sekmeye** gönderir:

| | Tuşsuz | <kbd>Ctrl</kbd> ile |
| --- | --- | --- |
| Var olan bir dosyayı seçin ya da yazın | Burada açılır | Yeni bir sekmede açılır |
| Var olmayan bir yol yazın | Sorar, sonra burada açar | Sorar, sonra yeni bir sekmede açar |
| Yeniden adlandırma/taşıma modunda bir yolu onaylayın | Notu oraya **taşır** | Onu oraya **kopyalar** ve kopyayı yeni bir sekmede açar |

Tuş, Obsidian'ın kendi kuralıyla okunur, dolayısıyla bir bağlantıda ya da Dosya Gezgini satırında olduğu gibi davranır — orta tıklama da "yeni sekme" demektir, <kbd>Ctrl</kbd>+<kbd>Alt</kbd> bölme, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> ise yeni pencere demektir.

Kopyalamak, tıpkı taşımak gibi üzerine yazmayı reddeder — notun kendi yolunun üzerine de, ki orada kopyalanacak makul bir şey yoktur.

## Kasanın dışında gezinmek

**Bu varsayılan olarak kapalıdır.** Önce ayarlardan **Harici dosyalara erişim**'i açın — kasanın dışında okumak ve yazmak, bu eklentinin Obsidian'ın kendisinin yapmadığı tek şeyidir, bu yüzden kapatılan değil açılan bir şeydir. Kapalıyken kasa adı yalnızca kasanızı Dosya Gezgini'nde gösterir ve buradaki hiçbir şey onun ötesine bakmaz.

**Kasa adına** (ya da *Kasa adını göster* kapalıyken 🏠 simgesine) tıklamak, içerik yerine konumların listesini açar:

- **Diğer kasalarınız**, Obsidian'ın kendi kaydından okunur, en son açılanlar önce, her biri Obsidian'ın kendi kasa simgesi altında — uygulamanın kasa komutları için kullandığı simge. Zaten açık olan kasa bunun yerine bir ev alır: çubuğun varsayılan olarak başladığı yer orasıdır, gidilecek bir yer değil.
- **Ev klasörü**, kendi hesap adı altında, bir `~` ile işaretli. Lucide'de tilde yok, bu yüzden bunu eklenti Lucide'nin kendi 24×24 ızgarasında aynı çizgiyle çizer — simgeler arasına oturmuş bir metin karakteri değil, setin eksik bıraktığı bir simge.
- **Dosya sisteminin kökü**, `root` etiketiyle — çevrilmeden, çünkü her sistemde adı budur — `/` yerine, ki o kendisini izleyen ayırıcının yanında boş bir adım gibi okunurdu.
- **Bağlı sürücüler**, türünü belirlemenin ucuz olduğu yerlerde tür başına bir simgeyle: ağ paylaşımları, optik diskler, disketler ve çıkarılabilir ortamlar kendi simgelerini alır; geri kalan her şey genel bir sürücü alır. Windows'ta sürücüler genel bir simgeyle `C:` olarak görünür — birim adları ve kesin türler WMI gerektirir, ki bu bilinçli olarak yapılmaz.

Başka bir kasa seçmek **Obsidian'ı ona geçirmez.** Açık olan her şey açık kalır; yol çubuğu yalnızca orada gezinmeye başlar. Bunu kenar çubuğunun kasa değiştiricisine bırakmak yerine yol çubuğunda bulundurmanın bütün amacı da budur.

### Dışarıdayken

Yol, makinenin dizin düzeninden değil, **seçtiğiniz konumdan başlar** — `Arşiv`'i seçin, çubukta `/home/siz/Kasalar/Arşiv/notlar/…` değil `Arşiv / notlar / …` yazar. Baştaki parça ne olduğuna dair bir simge taşır (kasa, ev, sürücü) ve <kbd>Backspace</kbd> dosya sisteminin geri kalanına doğru yürümek yerine orada durur. *Kasa adını göster* kapalıyken o parça yalnızca simgedir — ayar, hangi kasayı adlandırırsa adlandırsın çubuğun ilk parçasıyla ilgilidir, yalnızca sizinkiyle değil.

Yol çubuğu, kasanızın dışını gösterdiği sürece **hata rengiyle çerçevelenir** — yeniden adlandırma modunun çizdiği halkanın aynısı. Bu bir anı değil, süregelen bir durumu işaretler: o duruyorken Obsidian'ın kendi işleyişlerinin hiçbiri çubuğun gösterdiğine uygulanmaz ve siz aksini söyleyene dek yazma kilitlidir.

Gezinme bunun dışında içerideki gibi çalışır: çipler, ayırıcılar, yazmak, otomatik tamamlama, dışarı adımlamak için <kbd>Backspace</kbd>. Aynı görünürlük kuralları da geçerlidir, yani desteklenmeyen uzantılar hâlâ Obsidian'ın *Tüm dosya uzantılarını bul* ayarını, gizli dosyalar da hâlâ bu eklentinin ayarını gerektirir.

**Sağ tıklama ve sürükleme** orada çalışmaz — bunlar Dosya Gezgini'nin kendi işleyicileridir ve kasanın bildiği bir dosyaya ihtiyaç duyarlar.

### Kasanın dışına yazmak

Yazan her şey **varsayılan olarak kilitlidir.** Çubuk kasanızın dışını gösterdiği sürece başlıkta yeniden adlandırma düğmesinin yanında bir **asma kilit** belirir; ona basmak kilidi açar ve onu, çubuğun çevresindeki halkayla uyumlu biçimde kırmızıya çevirir.

İzin **bir ana değil, bir konuma** verilir: tek bir yerde çalışırken yapacağınız her şeyden sağ çıkar — bir taşımayı bitirmek, alandan başka yere tıklamak, bir dosya açmak — ve listeden başka bir kasa, sürücü ya da kök seçtiğinizde, çubuk bir kasa dosyasına döndüğünde ya da asma kilide yeniden bastığınızda sona erer. Yani tek bir klasör içindeki bir dizi taşıma, dosya başına bir değil, toplamda bir basış eder.

Asma kilit açıkken yol çubuğu dışarıda da içerideki gibi davranır:

| Hareket | Sonuç |
| --- | --- |
| Var olmayan bir ad yazın, <kbd>Enter</kbd> | İçerideki "oluşturulsun mu?" sorusunun aynısı; eksik üst klasörler de oluşturulur. Uzantısız bir ad, tıpkı içerideki gibi `.md` olur |
| Yeniden adlandırma/taşıma modu, yeni bir ad yazın | Çubuğun gösterdiği dosyayı yeniden adlandırır. Uzantısız bir ad dosyanın kendi uzantısını korur — burada bir klasör her türden dosyayı barındırır ve bir yeniden adlandırma bir `.png` dosyasını sessizce `.md` yapmamalıdır |
| Yeniden adlandırma/taşıma modu, başka yere göz atın, **bu adı koru**'yu seçin | Onu, hâlihazırdaki adıyla oraya taşır |
| İkisinde de <kbd>Ctrl</kbd> tuşunu basılı tutun | Taşımak yerine kopyalar ve kopyayı yeni bir sekmede açar |

Kilitliyken bunların hepsi gerçekleşmek yerine kendilerini neyin engellediğini bildirir. İki durumda da hiçbir şeyin üzerine yazılmaz: zaten var olan bir hedef reddedilir ve bu ret, bir yarışı kaybedebilecek bir denetim değil, dosya sisteminin kendi reddidir (`COPYFILE_EXCL`, ayrıcalıklı bir oluşturma). Dosya sistemleri arası bir taşıma — bir USB bellekten, bir ağ paylaşımından — kopyala-sonra-sil yöntemine düşer ve özgün dosya ancak kopya yerine ulaştıktan sonra kaldırılır.

**Asma kilidin açmadığı tek şey: bir notu kasanızın *dışına* taşımak.** `fileManager` bir dosyayı o sınırın ötesine izleyemez, dolayısıyla nota işaret eden her bağlantı sessizce kırılır ve Obsidian onu yalnızca yok olmuş görür. <kbd>Ctrl</kbd> tuşunu basılı tutmak onu bunun yerine dışarı kopyalar, ki bunun böyle bir sorunu yoktur, ve bildirim de bunu söyler. Diğer yön — dışarıdaki bir dosyayı kasanın *içine* almak — henüz o da bağlanmış değil.

### Harici bir dosyayı açmak

Obsidian'ın düzenleyicisi yalnızca kasa içindeki dosyalarda çalışır, dolayısıyla harici bir dosya bağlantıları, geri bağlantıları ve gerisiyle gerçek bir not olarak **açılamaz** — bu, eklentinin değil uygulamanın sınırıdır. Böyle bir dosyayı seçmek bunun yerine bir **önizleme** açar; siz aksini söyleyene dek salt okunur:

| Tür | Şu şekilde gösterilir |
| --- | --- |
| `.md`, `.markdown` | İşlenmiş Markdown |
| Görseller, ses, video, PDF | Yerleşik oynatıcı/görüntüleyici |
| Diğer her **metin** dosyası (`.json`, `.css`, `.log`, `.txt`, …) | Olduğu gibi düz metin |
| Görüntüleyicisi olmayan ikili biçimler | *Harici olarak aç*'a devredilir |

Görüntüleyicinin bir dosyayı okumanın iki yolu vardır ve birbirlerini dışladıkları için yalnızca **geçeceğiniz** olan gösterilir:

| | Ne yapar | Varsayılan olduğu türler |
| --- | --- | --- |
| **Markdown olarak görüntüle** | Dosyayı bir not gibi işler, salt okunur | `.md`, `.markdown` |
| **Metin olarak düzenle** | Kaynağı, düzenlenebilir | diğer her şey |

Kasanın dışında **Metin olarak düzenle** aynı zamanda salt okunurluğu kaldıran basıştır — mod ve izin, üzerinde düşünülecek iki düğme yerine tek bir harekettir. **Basmak salt okunurluğu kaldıracağı her durumda** kırmızı tonludur; ister düzenlemeyi yerinde hazırlıyor olun, ister doğrudan işlenmiş görünümden geliyor olun. Kasanın içinde açılacak bir şey yoktur, bu yüzden orada sade kalır. **Markdown olarak görüntüle** hafif bir vurgu yıkaması alır — Obsidian'ın seçili metne verdiği tonun aynısı — ki bu onu bir çağrı değil, geri dönüş yolu olarak işaretler.

Düğme ham modu değil *düzenlemeyi* izlediği için, metin görünümünde salt okunur duran bir dosya yine de **Metin olarak düzenle** sunar: onu hazırlayan basış budur. İçine asla yazılamayacak bir dosya — kısaltılmış ya da okunamaz — bunun yerine **Metin olarak görüntüle** der, çünkü basışın verebileceği tek şey budur.

Varsayılanlar harfi harfine olan değil, işe yarayan yöndedir: bir kabuk betiğindeki `#` bir başlık değil bir yorumdur, dolayısıyla bir `.log` dosyasını Markdown olarak işlemek onu sessizce yutardı. Her iki varsayılan da dosya başına geçersiz kılınabilir ve seçim sekmenin geçmişine girer, böylece ileri/geri ve yeniden açılan bir çalışma alanı bunu korur — birçok not `.txt` dosyalarında yaşar ve birçok `.md` dosyası kaynak olarak okumak daha kolaydır.

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

- **{kasa} içinde aç** — dosya diğer kasalarınızdan birine aitse gösterilir. Onu Obsidian'ın kendi URI işleyicisine devreder; o da o kasanın penceresini, not içinde olacak şekilde, gerçek ve düzenlenebilir bir not olarak açar. Bu pencere tam olduğu gibi bırakılır; altınızdan hiçbir şey değişmez.
- **Markdown olarak görüntüle** / **Metin olarak düzenle** — iki okuma; ikincisi kasanın dışında salt okunurluğu da kaldırır.
- **Harici olarak aç** — dosyayı, bu görüntüleyicinin gösteremediği ikili biçimler dahil, masaüstünüzün varsayılan uygulamasına devreder.

Önce *Metin olarak düzenle*'ye basmadıkça kasanızın dışında hiçbir şey yazılmaz. Tam açıklama için README'nin [Kasanın dışında](README.tr.md#kasanın-dışında) bölümüne bakın.

## Uyarıların iki rengi

| | Ne zaman | Ne anlama gelir |
| --- | --- | --- |
| Yol çubuğunda **kırmızı** halka | Çubuk kasanızın dışını gösteriyor | Obsidian oradakini bir not olarak açamaz ve siz asma kilidi açana dek dışarıda hiçbir şey yazılmaz. |
| Yol çubuğunda **turuncu** halka, listede turuncu satırlar | Dosya, Obsidian'ın görünümü olmayan bir metin türü | Bir uyarı. Obsidian onu masaüstünüzün varsayılan uygulamasına devrederdi; eklenti bunun yerine onu gösterir. |

**İkisi birbirinden bağımsızdır ve ikisi aynı anda geçerli olabilir** — harici bir `.json` hem kasanızın dışındadır *hem de* Obsidian'ın düzenleyicisi olmayan bir türdür. Görüntüleyicide her biri yalnızca kendi olgusunu söyleyen ayrı satırlar olarak belirirler. Yol çubuğunda ikisinin de geçerli olduğu yerde kırmızı kazanır, çünkü iki halka yalnızca gürültü olurdu.

Turuncu katman bilinçli olarak dardır. Kayıtlı türler (Markdown, canvas, görseller, PDF, ses, video) düzgün işlenir ve hiçbir şey almaz. İkili dosyalar da hiçbir şey almaz — bir `.zip` dosyasını yanlışlıkla düzenleyip bozacak değilsiniz. Geriye tam olarak tehlike kalır: **Tüm dosya uzantılarını bul** ayarının görünür kıldığı bir `.json`, `.css` ya da `.log`.

İkisinin de geçerli olacağı yerde kırmızı kazanır; aynı anda iki halka yalnızca gürültü olurdu.

## Yeniden adlandırma/taşıma modu

Başlığın en sağındaki kalem düğmesi — görünüm modu düğmesinin yanında, yerleşik düğmelerle aynı boyutta — yeniden adlandırma/taşıma modunu açıp kapatır. Başlık çubuğu o zaman, tıpkı Dosya Gezgini'nde yeniden adlandırmadaki gibi vurgu rengiyle çerçevelenir. Aynı tıklamalar ve tuş basışları artık Obsidian'ın `fileManager.renameFile` işlevi üzerinden bir taşımayı ya da yeniden adlandırmayı onaylar, böylece nota giden tüm bağlantılar da onunla birlikte gelir.

Yeniden adlandırırken:

- Geçerli dosya adı her klasörün listesine sabitlenir, böylece bir notu yeniden adlandırmadan taşımak tek bir tıklamadır.
- Hedef klasörde zaten kullanılan adlar soluklaştırılır ama yine de seçilebilir.
- Girdi, Obsidian'ın kendi yeniden adlandırma kurallarına göre canlı olarak doğrulanır — aynı karakter kümeleri, aynı iletiler, dosya ağacında yeniden adlandırırken aldığınız aynı kırmızı ipucu — böylece geçersiz ya da çakışan bir ad siz yazarken işaretlenir ve onaylanamaz.
- Başlık çubuğunun dışına tıklamak ya da başlığın odağı kaybetmesi yeniden adlandırma modunu sonlandırır.

## Her iki yeniden adlandırma için tek tuş

Yeniden adlandırma komutu (varsayılan olarak <kbd>F2</kbd> ya da neye atadıysanız) Obsidian'ın satır içi başlık yeniden adlandırması ile bu eklentinin tüm yolun seçili olduğu başlık yol çubuğu arasında **dönüşümlü çalışır**. Obsidian'ın satır içi başlığını kapattıysanız başlık yol çubuğu tek hedef olur, böylece tuş hiçbir zaman boşa gitmez.

Bu, tuşu ele geçirerek değil `workspace:edit-file-title` komutunu sararak çalışır, dolayısıyla hem kısayolu yeniden atamak hem de komutu paletten çalıştırmak değişmeden çalışır.

## Listedeki satırlar nasıl renklendirilir

| Renk | Anlamı |
| --- | --- |
| **Mor** | Bir not (`.md`, `.markdown`) — Obsidian'ın not olarak açacağı şey, karışık içerikli bir klasörün içinden seçilip çıkarılmış |
| **Turuncu** | Obsidian'ın görünümü olmayan bir metin türü; bkz. [uyarı renkleri](#uyarıların-iki-rengi) |
| **Soluk** | Kasanızın dışında, dolayısıyla kasanın kendi işleyişi geçerli değil |
| **Mavi** | Bulunduğunuz not. Gezinirken kendi satırıdır; yeniden adlandırma/taşıma modunda onun yerinde *bu adı koru* satırı durur — her iki durumda da aynı not |
| **Griye çalan** | Yalnızca yeniden adlandırma/taşıma modunda: ad kullanımda. Yine de seçilebilir — birini seçmek alanı doldurur, doğrulama da çakışmayı orada işaretler |

## Görünürlük kuralları

- Desteklenmeyen uzantılara sahip dosyalar listelerde yalnızca Obsidian'ın **Tüm dosya uzantılarını bul** ayarı açıksa görünür.
- Liste en fazla 100 satır gösterir — Obsidian'ın kendi sınırı. Bir klasörde daha fazlası varsa son satır kaçının dışarıda kaldığını söyler; listeyi daraltmak için yazmayı sürdürün.
- Gizli dosyalar ve gizli klasörler yalnızca bu eklentinin **Gizli dosyaları göster** ayarı açıksa görünür.
- **Üzerine yazma koruması görünürlükten bağımsız olarak aynı şekilde çalışır** — gizli bir dosya yine de üzerine yazmanızı engeller.

## Kopya kâğıdı

| Şunu istiyorsanız… | Şunu yapın |
| --- | --- |
| Bir klasörü açmak (notunu ya da göstermek) | O klasörün **ardındaki** ayırıcıya tıklayın |
| Bir klasörü kardeşiyle değiştirmek | O klasörün adına tıklayın, sonra yazın ya da seçin |
| Notu yeniden adlandırmak ya da yönlendirmek | Notun adına tıklayın — uzantısı dahil |
| Bir klasörün içeriğine göz atmak | O klasörün adına tıklayın; liste üst klasörünü gösterir, bu yüzden istediğinizin **altındaki** klasöre tıklayın |
| Bir klasörü ve altındaki her şeyi yeniden yazmak | O klasörün adına **çift tıklayın**, sonra yazın |
| Yolu bir klasörden aşağı doğru düzenlemek | O klasörün adına tıklayın, sonra seçimi kaldırmak için <kbd>End</kbd> ya da <kbd>→</kbd> |
| Yolunu yazarak bir dosyaya atlamak | Dosya adına ya da boş alana tıklayın, yazın, <kbd>Enter</kbd> |
| Bir dosyayı bunun yerine yeni sekmede açmak | Seçerken <kbd>Ctrl</kbd> ya da <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| Notu taşımak yerine bir yere kopyalamak | Kalem, sonra hedefi seçerken ya da onaylarken <kbd>Ctrl</kbd> |
| Var olmayan bir yolda not oluşturmak | Yolu yazın, <kbd>Enter</kbd>, soruyu onaylayın |
| Yazarken bir düzey aşağı inmek | `/` yazın |
| Yazarken bir düzey yukarı çıkmak | Boş alanda <kbd>Backspace</kbd> |
| Açık notu taşımak ya da yeniden adlandırmak | Kaleme tıklayın, sonra yukarıdaki gibi göz atın ya da yazın |
| Yeniden adlandırmadan taşımak | Kalem → hedef klasörün içine tıklayın → sabitlenmiş geçerli dosya adını seçin |
| Yerinde yeniden adlandırmak | İki kez <kbd>F2</kbd> (ilk basış satır içi başlığa, ikincisi başlık çubuğuna gider) |
| Başka bir kasaya, eve ya da bir sürücüye atlamak | Kasa adına tıklayın |
| Kasanın dışından bir dosya açmak | Kasa adı → bir konum seçin → göz atın → dosyayı seçin (*Metin olarak düzenle*'ye dek salt okunur) |
| Her şeyi iptal etmek | <kbd>Esc</kbd> ya da başlık çubuğunun dışına tıklayın |

## Ayarlar

| Ayar | Seçenekler | Varsayılan | Ne yapar |
| --- | --- | --- | --- |
| **Hizalama** | Sola / Ortalanmış / Sağa | Sola | Yolun başlık çubuğunda nerede durduğu. *Ortalanmış*, Obsidian'ın klasik görünümüyle örtüşür. |
| **Ayırıcı** | Herhangi bir karakter | `/` | Parçalar arasına çizilen ayırıcı. Metin alanının önünde tek tıklamalık altı hazır seçenek (`/ > ▸ › \ •`) durur. |
| **Kasa adını göster** | Açık / Kapalı | Açık | Kasanın kendisinin yolun ilk parçası olup olmadığı. Kapatıldığında o parça kaybolmak yerine bir 🏠 simgesine dönüşür, böylece yol yine tıklanabilir bir yerden başlar. |
| **Klasör adı listeyi açar** | Açık / Kapalı | Açık | Bir klasör adının ve ardındaki ayırıcının ne yaptığını takas eder — bkz. [yukarıdaki tablo](#yol-çubuğu). [Folder notes](obsidian://show-plugin?id=folder-notes) ile ayırıcı klasör notlarını açar. Yeniden adlandırma/taşıma modunda asla geçerli değildir. |
| **Gizli dosyaları göster** | Açık / Kapalı | Kapalı | Gizli dosya ve klasörlerin listelerde yer alıp almadığı. Üzerine yazma koruması her hâlükârda geçerlidir. |
| **Harici dosyalara erişim** | Açık / Kapalı | **Kapalı** | Kasa adının konumlar listesini açıp açmadığı. Kapalıyken eklentideki hiçbir şey bu kasanın ötesine bakmaz. |

## Simgeleri değiştirmek

Lure üç simge çizer: kasa kökü simgesi (**Kasa adını göster** kapalıyken), yeniden adlandırma/taşıma anahtarı ve kasanın dışına yazmayı kapılayan asma kilit. Hepsi bir temadan ya da bir CSS parçacığından değiştirilebilir — yerine geçecek karakteri ayarlayın ve gelenini tek bir kuralda gizleyin:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* Asma kilidin iki durumu vardır; `.is-active` açık olanıdır. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}

.lure-unlock-btn.is-active {
	--lure-icon-glyph: "🔓";
}
```

`--lure-icon-glyph`, CSS `content` içinde geçerli olan her şeyi kabul eder, dolayısıyla `url(...)` bir görsel için de metin ya da emoji karakteri için olduğu kadar işe yarar. Lucide simgesini korumak ve kendi karakterinizi onun yanına çizmek için `--lure-icon-svg` değerine dokunmayın.
