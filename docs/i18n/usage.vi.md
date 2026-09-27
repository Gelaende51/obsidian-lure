<!-- Bản dịch của docs/usage.md — trạng thái: commit 94b1372.
     Dịch máy (Claude Sonnet 5), chưa được người bản ngữ rà soát. Nhãn
     của plugin lấy từ src/lang/translations.ts, còn nhãn của Obsidian
     lấy từ các chuỗi do chính ứng dụng cung cấp, nên chúng khớp với
     những gì bạn thấy trên màn hình. -->

[English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · [Čeština](usage.cs.md) · [Dansk](usage.da.md) · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · [Bahasa Indonesia](usage.id.md) · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · [Norsk](usage.no.md) · [Polski](usage.pl.md) · [Português](usage.pt.md) · [Português (Brasil)](usage.pt-BR.md) · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · **Tiếng Việt** · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

# Cách dùng

[← quay lại README](README.vi.md)

## Đường dẫn trên thanh tiêu đề

Đường dẫn đầy đủ của ghi chú trong kho thay thế cho tên tệp trơ trọi trên thanh tiêu đề khung xem — dòng ngay dưới hàng thẻ, dòng cũng chứa các nút lùi/tiến.

Hai thứ trên dòng đó có thể bấm được, và **Tên thư mục mở danh sách** quyết định thứ nào làm gì:

| | Tên thư mục | Dấu phân cách sau nó |
| --- | --- | --- |
| **Bật** (mặc định) | Chọn thư mục đó để sửa | Mở thư mục |
| **Tắt** | Mở thư mục | Đi xuống trong thư mục đó |

"Mở thư mục" nghĩa là bất cứ điều gì việc bấm vào đoạn đó làm trong Obsidian nguyên bản. Nếu không có plugin nào lắng nghe ở đó, thư mục sẽ hiện ra trong thanh bên Trình duyệt tệp — được tô sáng và mở rộng để lộ nội dung.

Khi thư mục có ghi chú chính là ghi chú bạn đang đọc, cú bấm sẽ chỉ hiện thư mục thay vì mở gì đó — không có gì để mở mà chưa sẵn có trên màn hình, và đó chính là ý nghĩa của cú bấm thứ hai từ trước đến nay.

Với [Folder notes](obsidian://show-plugin?id=folder-notes) được cài, cùng cú bấm đó lại mở ghi chú của thư mục ấy, **ở bất kỳ độ sâu nào**: ghi chú được xác định ở đây theo đúng quy ước riêng của plugin đó chứ không để plugin đó tự trả lời. Plugin đó chỉ nhận diện những thư mục nó đã đánh dấu, và trên một đường dẫn sâu hơn một thư mục thì không có thư mục nào trong số đó cả, nên cú bấm từng mở ghi chú của một thư mục cấp cao nhất trước đây không làm gì thêm khi đi sâu hơn. Hai plugin ghi chú thư mục còn lại không công bố quy ước nào để đọc và không bao giờ giành quyền với dòng này, nên với chúng, dấu phân cách vẫn hiện thư mục như thường lệ. Đây là plugin ghi chú thư mục duy nhất được phát hiện có giành quyền với đường dẫn tiêu đề; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) và [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) quản lý ghi chú thư mục nhưng không lắng nghe cú bấm trên đường dẫn, nên với chúng, dấu phân cách vẫn hiện thư mục như thường lệ. Xem [khả năng tương thích](../compatibility.md#verified-against).

Một dấu phân cách chỉ **được gạch chân khi thư mục trước nó thực sự có ghi chú thư mục**, nên gạch chân là lời hứa rằng có gì đó ở đó để mở — ở mọi độ sâu khi [Folder notes](obsidian://show-plugin?id=folder-notes) đang chạy, vì ghi chú được xác định ở đây chứ không để plugin đó tự đánh dấu. Khi không phải plugin đó đang chạy, không gì được gạch chân và không gì được mở: dấu phân cách chỉ hiện thư mục, như khi không có plugin ghi chú thư mục nào cả. Dù thế nào, mọi dấu phân cách vẫn có thể bấm được — một dấu không gạch chân sẽ hiện và mở rộng thư mục của nó trong thanh bên, điều mà con trỏ chuột hình bàn tay vẫn báo hiệu. Gạch chân cũng rời khỏi tên thư mục cùng lúc: khi tính năng đổi được bật, tên thư mục mở danh sách, nên đánh dấu nó như liên kết tới ghi chú sẽ là nói dối.

**Chế độ đổi tên/di chuyển ghi đè cả hai**, dù thiết lập nói gì: không thứ gì trên dòng mở thư mục khi một lần di chuyển còn dang dở, vì mở một thư mục sẽ bỏ dở việc di chuyển đó. Tên thư mục được chọn để sửa còn dấu phân cách thì đi xuống — cả hai đều là cách chọn đích đến — và gạch chân biến mất để cho thấy việc mở đang bị treo.

**Thư mục gốc của kho** là đoạn duy nhất không phải một đoạn đường dẫn. Nó không có cha để liệt kê các anh em, nên thay vào đó nó mở [danh sách vị trí](#duyệt-ngoài-kho) — các kho khác của bạn, thư mục cá nhân, gốc hệ thống tệp và các ổ đĩa đã gắn.

## Dấu phân cách riêng của kho

Dấu phân cách ngay sau tên kho đại diện cho chính kho ấy chứ không phải cho
một thư mục, nên nó làm điều mà không dấu phân cách nào khác làm được:

| | Bấm lần đầu | Bấm lần kế |
| --- | --- | --- |
| **Có plugin trang khởi động** (một trang chào bạn khi Obsidian mở lên) | Mở trang đó trong khung này | Thu gọn cây tệp |
| **Không có** | Thu gọn cây tệp | Đặt lại đúng thứ đã mở trước đó |

Đây là những cú bấm thường, không phải bấm đúp: một khi trang đã mở, dấu phân
cách không còn gì để mở, nên cú bấm kế tiếp là thu gọn — dù bạn để bao lâu
mới bấm.

Nó được **gạch chân** khi có trang khởi động để mở, cùng một lời hứa mà dấu
phân cách của thư mục đưa ra: có gì đó ở đó. Thu gọn là một công tắc bật/tắt —
cú bấm kế tiếp khôi phục đúng những thư mục đã mở, và chỉ những thư mục đó,
nên một cây bạn đã sắp xếp không bị mất chỉ vì liếc sang thứ khác.

## Một khung không có tệp

Một thẻ trống, đồ thị và bất cứ thứ gì khác không đặt tên tệp đều có một dòng
riêng: tên kho, rồi một đoạn cho biết khung đang chứa gì.

```
my-vault / :blank      một thẻ mới
my-vault / :graph      đồ thị, cục bộ hoặc toàn cục
my-vault / :<type>     bất cứ thứ gì khác không có tệp
```

**Danh sách riêng của thư mục gốc kho** cũng cung cấp những trang này, bên
dưới các thư mục và ghi chú thực sự có trong đó: chọn `:graph` hay `:search`
ở đó và khung sẽ mở khung xem đó, y hệt như chọn một ghi chú mở ghi chú. Những
trang nào tồn tại được đọc từ Obsidian chứ không được liệt kê sẵn ở đây — mọi
khung xem không tồn tại để hiện một tệp, nên một plugin đăng ký một khung xem
như thế (một thẻ trang chủ, một lịch) sẽ xuất hiện mà plugin này không cần
biết gì về nó. Các khung xem cần một tệp — Markdown, PDF, hình ảnh, canvas,
cơ sở dữ liệu — không được cung cấp: chúng không có gì để hiện.

Dấu hai chấm chính là điểm mấu chốt — không tệp hay thư mục nào có thể được
đặt tên `:graph`, nên dòng này không thể bị nhầm là một đường dẫn có thể mở
được. Nhãn lấy từ loại khung xem chứ không phải từ chính từ ngữ của Obsidian,
nên nó đọc như nhau dù ngôn ngữ giao diện là gì, và hậu tố `-view` bị bỏ đi:
một plugin thẻ trang chủ đăng ký khung xem của nó là `home-launcher-view`, và
dòng này ghi `:home-launcher`.

Bấm vào khoảng trống, hoặc vào chính nhãn, **mở ô ở thư mục gốc kho**: gõ một
đường dẫn và <kbd>Enter</kbd> mở nó ngay trong khung này, với cùng kiểu tự
hoàn tất, cùng danh sách và cùng ô đỏ đề nghị tạo thứ chưa tồn tại. Một thẻ
trống là chỗ tốt để gõ nơi bạn muốn đến, và đó chính là công dụng của nó.

Nhãn chỉ là nhãn, không hơn: không danh sách, không kéo, không đổi tên. Các
khung trong thanh bên hoàn toàn không bị động tới — một khung liên kết ngược
vẫn giữ tiêu đề Obsidian đặt cho nó.

Canvas, PDF, hình ảnh và cơ sở dữ liệu không cần gì trong số này. Chúng là
tệp, nên chúng có thanh đường dẫn bình thường.

## Bấm vào một đoạn: đổi nó lấy một anh em

Bấm vào tên thư mục sẽ chọn **tên của thư mục đó** trong một ô văn bản và mở danh sách của thư mục **cao hơn một cấp** — thư mục cha. Gõ hoặc chọn một mục sẽ đổi thư mục này lấy một anh em và giữ nguyên mọi thứ bên dưới, nên `Projects/2026/Kickoff.md` → bấm `2026` → chọn `2025` cho bạn `Projects/2025/Kickoff.md`.

Bấm vào **tên ghi chú** hoạt động tương tự với thư mục riêng của nó, và chọn tên **không kèm phần mở rộng** — đổi tên là chỉnh sửa phổ biến nhất, và việc gõ đè lên một vùng chọn có cả `.md` từng vô tình đổi loại tệp. Phần mở rộng vẫn hiện ra chỉ cách một lần gõ phím: <kbd>→</kbd> đưa bạn tới đó, và cú bấm đúp mở rộng ra cả dòng sẽ lấy trọn.

Cú bấm vào thư mục đã chọn sẵn một đoạn, nên **một cú bấm nữa** mở rộng vùng chọn ra cả dòng — thư mục đó *và* mọi thứ bên dưới — và khi đó việc gõ sẽ thay thế phần còn lại của đường dẫn trong một lần. Hoạt động y hệt trong điều hướng lẫn trong chế độ đổi tên/di chuyển.

Điều đó chỉ áp dụng như phần tiếp nối của cú bấm đã mở ô. Một khi bạn đã dùng ô ấy, nó hành xử như mọi ô văn bản khác: bấm đặt con trỏ, bấm đúp lấy một từ, bấm ba lần lấy cả dòng.

Dù thế nào thì phần còn lại của đường dẫn vẫn hiện quanh ô nhập, dưới dạng thẻ nhỏ ở trước nó và văn bản chưa chọn ở sau nó, nên đường dẫn đầy đủ không bao giờ biến mất khỏi tiêu đề. Gõ để thay thế vùng chọn, hoặc bấm <kbd>→</kbd> để giữ nguyên và sửa từ đó. Danh sách liệt kê cả thư mục bất kể có gì được điền sẵn; nó chỉ bắt đầu lọc khi bạn thực sự gõ.

## Đi xuống bằng dấu phân cách

Bấm vào một dấu phân cách (khi **Tên thư mục mở danh sách** tắt) sẽ đi xuống thư mục ngay trước nó: danh sách liệt kê nội dung của *thư mục đó*, và phần còn lại của đường dẫn mở ra trong ô ở trạng thái được chọn. Chọn một thư mục sẽ nối nó vào vệt đường dẫn và mở ngay danh sách kế tiếp, nên bạn có thể bấm dần xuống một cây thư mục mà không rời khỏi dòng tiêu đề.

## Danh sách mở ngay tại vị trí của bạn

Danh sách mở ra ngay tại mục bạn đang đứng — ghi chú mà thanh này thuộc về,
hoặc, khi một cú bấm vào thư mục đã liệt kê thư mục cha của nó, thì là thư mục
đó — chứ không phải ở hàng đầu tiên. Trong một thư mục có hai trăm ghi chú,
hàng đầu tiên chẳng gần bạn chút nào.

**Lăn chuột trên một tên sẽ mở danh sách của nó và duyệt qua nó.** Vòng lăn
đầu tiên mở cùng danh sách mà bấm vào tên đó mở ra, và mỗi vòng sau di chuyển
vùng tô sáng một hàng, đưa thứ bạn đang trỏ vào vào ô y hệt cách phím mũi tên
làm — nên một anh em có thể được tìm và chọn mà không cần bàn phím. Lăn ra
khỏi một trong hai đầu trả lại văn bản của bạn. Một hàng có đường dẫn dài hơn
khung sẽ đáp lại vòng lăn bằng cách cuộn ngang thay vào đó, và cách đọc này
thắng thế trong khi nó còn áp dụng.

Danh sách **cao bằng khoảng cửa sổ cho phép**. Obsidian giới hạn danh sách gợi
ý của nó ở 300 pixel bất kể bên dưới còn gì; danh sách này chạy tới đáy cửa
sổ, dừng cách mép vài pixel, và chỉ cuộn khi thư mục có nhiều hơn số đó. Nó
**không rộng hơn thanh đường dẫn**: một tên không vừa sẽ bị rút gọn theo cách
dòng đó rút gọn một tên, và hiện đầy đủ khi bạn trỏ vào nó.

Di chuyển qua danh sách **đưa thứ bạn đang trỏ vào vào ô**, bằng phím mũi tên
hoặc bằng cách di chuột lên — thay cho đoạn bạn đang sửa, với phần còn lại của
đường dẫn giữ nguyên — nên hàng bạn đang đứng cũng chính là đường dẫn bạn sẽ
nhận được.

Phần còn lại của đường dẫn chỉ được hiện **tới mức nó thực sự tồn tại dưới thứ
bạn đang trỏ vào**. Đứng trong một thư mục với `2026/note.md` nằm sau đoạn bạn
đang sửa, trỏ vào một thư mục có `2026` chứa `note.md` sẽ hiện toàn bộ; một
thư mục có `2026` nhưng không có ghi chú sẽ hiện `2026`; một thư mục không có
cả hai sẽ không hiện gì sau tên cả, và một tệp cũng vậy, vì không có gì nằm
dưới một tệp. Những gì **bạn đã gõ** giữ nguyên cả đường dẫn của nó trong khi
bạn đang gõ, dù mới gõ được bao nhiêu — một cái tên gõ dở không phải một quyết
định. Đặt một tên vào là một quyết định, và những gì không thể tới được từ đó
bị cắt bỏ ngay tại điểm đó; các thư mục bạn đang tạo là những thư mục bạn gõ
*sau* nó, và đó chính là nơi <kbd>Enter</kbd> tạo ra chúng.
Văn bản bạn đã gõ được giữ lại: di chuyển **ra khỏi một trong hai đầu danh
sách** — lên khỏi mục đầu tiên, hoặc xuống khỏi mục cuối cùng — sẽ buông nó ra
và trả lại văn bản của bạn, không có gì được tô sáng. Ô nhập là một điểm dừng
trên vòng tròn như bất kỳ mục nào, nên một vòng đi qua nó thay vì nhảy thẳng
từ hàng cuối sang hàng đầu, và bấm tiếp từ đó sẽ vòng sang đầu kia.

Đưa **con trỏ chuột ra khỏi danh sách** cũng trả lại văn bản của bạn — và trả
vùng tô sáng lại cho bất cứ thứ gì đã giữ nó trước khi chuột đến: mục bạn đã
đến bằng phím mũi tên, hiện lại trong ô, hoặc mục danh sách đã mở ra vì đó là
nơi bạn đang đứng. Di chuột là một cách để xem chứ không phải để chọn, nên
việc quét con trỏ qua danh sách không tốn gì của bạn cả.

Bản thân danh sách không đổi khi bạn di chuyển qua nó — nó vẫn lọc theo những
gì bạn đã gõ, không theo những gì đã được xem trước vào ô — nên mục đang ở
dưới bạn không bao giờ trượt đi trước cú bấm tiếp theo. Gõ sẽ thay thế bản
xem trước và lọc như bình thường.

**Nó lọc theo đoạn bạn đang sửa**, chứ không theo toàn bộ nội dung trong ô.
Bấm vào một thư mục để lại phần còn lại của đường dẫn trong ô, phía sau tên
bạn đang đổi, nên lọc theo toàn bộ nội dung sẽ tìm một con có tên
`2026/Kickoff.md` và chẳng thấy gì — danh sách sẽ đóng lại ngay lần gõ đầu
tiên bất kể bạn gõ gì. **Phần mở rộng cũng bị bỏ ra ngoài**, miễn là con trỏ
còn đứng trước dấu chấm: bấm vào tên một ghi chú sẽ chọn phần gốc và để lại
`.md` phía sau, nên gõ một chữ cái sẽ khiến ô đọc thành `a.md`, và đó không
phải thứ bạn đang tìm. Đặt con trỏ qua khỏi dấu chấm thì phần mở rộng được
tính như mọi thứ khác. Một cái tên thực sự không khớp với gì cả vẫn đóng danh
sách, vì một danh sách trống là câu trả lời trung thực.

Một bản xem trước **chỉ đổi đúng một đoạn đó và để yên phần còn lại của đường
dẫn**: trỏ vào một thư mục là hỏi nếu bước này là bước kia thì sao, chứ không
phải vứt bỏ cả đường dẫn. Rời khỏi danh sách khôi phục lại cả văn bản *lẫn*
vùng chọn bạn đã có, nên lần gõ phím kế tiếp thay thế đúng thứ nó định thay
thế trước khi bạn nhìn vào danh sách.

## Các mục trong danh sách là hàng trình quản lý tệp thật

Mọi tệp và thư mục trong danh sách đều hành xử như hàng của nó trong Trình duyệt tệp:

- **Bấm chuột phải** để có cùng menu ngữ cảnh mà Trình duyệt tệp đưa ra, từng mục một — kể cả những mục do plugin khác thêm vào. Một thư mục cung cấp *Ghi chú mới*, *Thư mục mới*, *Canvas mới*, *Cơ sở dữ liệu mới*, *Tạo bản sao*, *Chuyển thư mục đến…*, *Tìm kiếm trong thư mục*, *Sao chép đường dẫn*, *Hiện trong trình khám phá hệ thống*, *Đổi tên…* và *Xoá*; một tệp cung cấp phần tương đương của riêng nó, kể cả *Mở bằng ứng dụng mặc định*.
- **Kéo** một mục tới bất cứ đâu Obsidian chấp nhận một tệp: vào một trình soạn thảo để chèn liên kết, lên một thư mục trong Trình duyệt tệp để di chuyển nó, lên hàng thẻ để mở nó.

Từ ngữ của menu đến từ chính bản dịch của Obsidian, nên nó khớp với phần còn lại của ứng dụng trong mọi ngôn ngữ.

## Gõ một đường dẫn

- Bấm vào **khoảng trống** trước hoặc sau đường dẫn sẽ mở một ô nhập văn bản trên toàn bộ đường dẫn *và hiện ghi chú trong File Explorer*, nên cây thư mục sẽ theo bảng mà không cần thêm thao tác nào. Nó **đếm số lần bạn bấm**: một lần chọn đường dẫn không kèm phần mở rộng, hai lần chọn kèm phần mở rộng, ba lần chọn đường dẫn mà máy biết. Bấm vào **tên tệp** cũng đếm tương tự nhưng bắt đầu thấp hơn một bậc, ngay trên tên: một lần chọn tên không kèm phần mở rộng, hai lần kèm, và ba lần mở rộng ra toàn bộ đường dẫn *tính từ thư mục kho của bạn* — dạng mà một liên kết hoặc một tìm kiếm cần, chứ không phải dạng của máy. Lần bấm thứ tư mới đạt tới dạng đó.
- **Việc đếm thuộc về chuỗi thao tác đã mở ô đó.** Một khi chuỗi đó đã ngắt — bạn dừng lại, gõ chữ, hoặc bấm một lần vào đâu đó trong văn bản — thì ô này là một ô văn bản bình thường như bao ô khác, và bấm đúp vào đó sẽ chọn từ dưới con trỏ giống như ở bất kỳ đâu khác. Gõ đè lên phần đang được chọn, hoặc chỉnh sửa tại chỗ. (Bấm vào chính tên tệp chỉ chọn mỗi tên tệp; xem ở trên.) Bấm chuột phải vào cùng khoảng trống đó **sao chép** ba dạng đó, ở lần bấm thứ hai, thứ ba và thứ tư — một nút hiện chúng ra, nút kia lấy chúng đi. Một lần **bấm phải đơn** sẽ mở đường dẫn với toàn bộ đã được chọn và đưa ra những gì có thể làm với nó: cắt, sao chép, dán, chọn tất cả, theo đúng cách gọi của Obsidian.
- **Bấm chuột giữa vào khoảng trống** để dán đè lên đường dẫn: ô sẽ mở trên toàn bộ đường dẫn *tính từ gốc kho*, nên nội dung dán sẽ thay thế toàn bộ, và phần vừa dán vào sẽ được chọn. <kbd>Enter</kbd> sau đó sẽ đi tới đó.
- **<kbd>Ctrl</kbd>+bấm vào khoảng trống** để mở lại ghi chú này trong một tab riêng, được đánh dấu nhấp nháy trong File Explorer để tab thứ hai không bị nhầm với tab đầu. Trên **tên kho**, <kbd>Ctrl</kbd>+bấm hoặc bấm chuột giữa sẽ mở một tab trống, đứng tại gốc kho với danh sách đã hiện sẵn — một chỗ để gõ một đường dẫn từ đầu.
- Gõ chữ trong khi đường dẫn đang hiển thị sẽ biến đoạn cuối cùng thành một ô nhập nhỏ với tự động hoàn thành trực tiếp, giới hạn trong thư mục hiện tại.
- **Có thể gõ một đường dẫn từ gốc hệ thống tệp.** `/` đặt trước một ô trống sẽ mở một đường dẫn như vậy thay vì hoàn thành một bậc, mọi dấu gạch chéo sau đó thuộc về nó, và `~` là thư mục home của bạn. Khi ô đang giữ một đường dẫn như vậy, danh sách sẽ liệt kê máy thay vì kho, và đoạn mở đầu của hàng sẽ lùi sang một bên — nội dung trong ô bắt đầu từ gốc và thể hiện điều đó. Khi tắt *Truy cập tệp bên ngoài*, danh sách sẽ để trống thay vào đó, vì dù sao <kbd>Enter</kbd> cũng sẽ từ chối đường dẫn đó.
- **Có thể gõ một trang, không chỉ chọn nó.** `:graph`, `:search`, hoặc bất kỳ gì các plugin của bạn đăng ký — những nhãn mà [danh sách của gốc kho](#một-khung-không-có-tệp) đưa ra. Gõ dấu hai chấm ở bất cứ đâu sẽ gọi chúng ra, vì không tên nào được chứa dấu đó, và <kbd>Enter</kbd> mở khung nhìn đó trong bảng này. `:graph` gõ **bên trong một thư mục** sẽ mở đồ thị của thư mục đó — đồ thị được lọc theo `path:"that/folder"` trong ô tìm kiếm riêng của nó, như thể được gõ ở đó; tại gốc kho, đó là toàn bộ đồ thị. <kbd>Tab</kbd> hoàn thành tên giống như hoàn thành tên một thư mục — và mang theo bất cứ gì khác mà ô đang giữ, vì một trang không nằm trong thư mục nào và không có gì nằm dưới nó. Bấm vào nhãn trên một trang như vậy sẽ mở ô đã giữ sẵn nhãn đó.
- **Những gì <kbd>Tab</kbd> sẽ viết được gợi ý ngay khi bạn gõ.** Ở đâu mọi mục con bắt đầu bằng những gì bạn đã gõ còn tiếp tục trùng nhau một quãng, sự trùng khớp đó xuất hiện sau con trỏ, được chọn sẵn; ở đâu chúng ngừng trùng nhau, bước tiến tới mục đầu tiên trong số đó sẽ xuất hiện — hoặc tới hàng bạn đã di chuyển tới bằng phím mũi tên, vì đó là hàng mà <kbd>Tab</kbd> sẽ hướng tới. Gõ đè lên một tên sẽ để nguyên phần mở rộng của nó và gợi ý phía trước nó, và một thư mục vừa bước vào sẽ gợi ý bước đầu tiên của nó, nên không có trạng thái nào mà không có gì được gợi ý trong khi <kbd>Tab</kbd> vẫn viết ra thứ gì đó. Gõ đúng những chữ đó thì nó bị nuốt dần từng chữ một; gõ bất cứ gì khác thì nó biến mất. <kbd>Tab</kbd> hoặc <kbd>End</kbd> lấy trọn nó, <kbd>→</kbd> lấy một chữ của nó, <kbd>Backspace</kbd> trả nó lại mà không đụng tới chữ bạn đã gõ, và không có gì được gợi ý lại cho tới khi bạn gõ tiếp — nên luôn có lối thoát khỏi một cái tên bạn không muốn. Sau một lần bấm <kbd>Tab</kbd>, bước tiếp theo được gợi ý ngay lập tức, giống như sau một chữ vừa gõ. Những gì danh sách liệt kê được lọc theo những gì **bạn** đã gõ, không bao giờ theo những gì được gợi ý.
- **Gợi ý bỏ qua chữ hoa chữ thường.** `sch` gợi ý `Schemes`, viết đúng theo cách tên được viết; lấy lại gợi ý sẽ trả lại các chữ bạn gõ đúng như bạn đã gõ. Ở đâu cả `Test` lẫn `test` đều tồn tại, cái được viết đúng theo cách bạn gõ sẽ được gợi ý.
- Trong ô, phần được gợi ý chỉ đơn giản là **được chọn**. Danh sách mới là nơi nó được viết ra rõ ràng: mỗi hàng hiện phần **khớp với những gì bạn đã gõ được in đậm**, dù nó khớp ở đâu trong tên — `kick` tìm thấy `Weekly kickoff` và thể hiện điều đó. **Những tên bắt đầu bằng những gì bạn đã gõ đứng trước**, trước cả những tên chỉ chứa nó, và được đánh dấu bằng một đường kẻ dọc theo cạnh: **xanh dương** ở nơi chúng còn trùng nhau nhiều hơn những gì bạn đã gõ, nên <kbd>Tab</kbd> còn gì đó để thêm cho tất cả chúng, và **xanh lá** trên nhánh mà gợi ý đi theo tại điểm chúng tách nhau — `te` với `test1`, `test2`, `text1` và `text2` gợi ý `te`+`st`, nên hai hàng `test` màu xanh lá còn hai hàng `text` giữ đường kẻ trơn. Mỗi hàng đều **gạch chân bước mà <kbd>Tab</kbd> sẽ tiến tới nó**, không chỉ hàng đang được gợi ý, và gạch chân đó thay đổi theo gợi ý.
- **Gõ chữ buông bỏ hàng đang được tô sáng.** Danh sách mở ra ở mục bạn đang đứng, nhưng ngay khi bạn gõ chữ, nó nói về một nơi khác, và một sự tô sáng mà không ai đặt vào đó lại đọc như một lựa chọn đã được thực hiện.
- Gợi ý luôn chỉ là văn bản trước mắt bạn: các chữ bạn đã gõ vẫn giữ nguyên cách bạn gõ trong khi bạn đang gõ, và lấy gợi ý sẽ viết lại tên theo đúng cách thư mục viết nó, vì một đường dẫn phải khớp với đĩa. `sk` + <kbd>Tab</kbd> đi tới `Skyline`, không phải `skyline`.
- **Ô mang màu của thứ nó đặt tên**, cùng màu với hàng của nó trong danh sách: tím cho một ghi chú, kể cả ghi chú riêng của một thư mục, cam cho bất cứ gì không phải ghi chú, xanh dương cho ghi chú bạn đang mở. Hàng mà màu được lấy từ đó là hàng có tên đúng khớp với những gì bạn đã gõ, hoặc nếu không có thì là hàng đang được tô sáng, hoặc nếu không có nữa thì là hàng đầu tiên mà việc gõ chữ của bạn vẫn còn dẫn tới.
- **Ô chuyển sang đỏ khi không còn gì khớp với nội dung trong đó** — không tệp, không thư mục, và không hàng nào trong danh sách còn dẫn tới nó. Từ đó, <kbd>Enter</kbd> sẽ tạo ra những gì có trong ô thay vì mở nó, và màu đỏ báo trước điều đó trước khi bạn xác nhận. Nó không bao giờ xuất hiện cho một địa chỉ web, vì đó không phải là một nơi trên máy này để tìm. **Toàn bộ** ô được tô màu chứ không chỉ phần bị thiếu: một ô văn bản không thể tô màu nửa nội dung của chính nó. Trong chế độ di chuyển/đổi tên, ô giữ màu đỏ riêng của nó cho một cái tên không hợp lệ — ở đó, một cái tên không có gì khớp chính là vấn đề. Việc một tên **đã bị chiếm** được xử lý khi bạn xác nhận, với một hộp thoại hỏi nên làm gì với tệp đang chắn đường — xem [Một cái tên đã bị chiếm](#một-tên-đã-bị-chiếm): mọi tên gõ hướng tới `Notes.md` đều đi qua các tên có thể là tệp của riêng chúng, nên đánh dấu từng chữ một sẽ cảnh báo về một cái tên chưa ai hỏi tới.
- `/` xác nhận đoạn bạn đang gõ và đi xuống vào nó, giữ nguyên bất cứ gì đứng sau nó — giống hệt việc <kbd>Tab</kbd> làm khi nó bước vào.
- <kbd>Backspace</kbd> trong một ô trống bước lùi ra thư mục cha, mở lại tên của nó với con trỏ ở cuối. <kbd>Backspace</kbd> trước một phần mở rộng đứng một mình cũng làm vậy — một ô chỉ giữ `.md` không đặt tên gì cả — và phần mở rộng lẻ loi đó cũng đi theo.
- **Bấm vào một thư mục trong khi một ô đang mở sẽ mở rộng nó ra toàn bộ đường dẫn sau thư mục đó**, với tên riêng của thư mục được chọn — giống hệt điều bấm vào nó từ hàng sẽ làm, và mọi thứ ô đang giữ đều được giữ lại. Nội dung trong ô là phần đuôi của hàng trong khi nó đang mở, nên một thư mục được bấm ở phía trên sẽ trả về đường dẫn mà phiên làm việc đã đi qua chứ không phải đường dẫn ghi chú bắt đầu.
- **Bấm mũi tên ra khỏi đầu ô sẽ đưa thư mục trước nó vào**, như thể toàn bộ đường dẫn là một dòng văn bản. Với con trỏ ở vị trí đầu tiên, <kbd>←</kbd> đưa thư mục đó vào ô và dừng ở cuối tên của nó, <kbd>Ctrl</kbd>+<kbd>←</kbd> dừng ở đầu tên đó, và <kbd>Home</kbd> đưa vào mọi thư mục cho tới tận gốc kho — hoặc tới nơi bạn đã chọn, ngoài kho — cùng một lúc. Giữ <kbd>Shift</kbd> thì vùng chọn sẽ giãn ra bao trùm những gì vừa được đưa vào. Trên macOS, bước nhảy theo từ là <kbd>Option</kbd>+<kbd>←</kbd> và <kbd>Cmd</kbd>+<kbd>←</kbd> tương đương <kbd>Home</kbd>. Ở bất cứ đâu ngoài phía đầu, đây là các phím văn bản thông thường. **Trong khi danh sách đang hiện, <kbd>Home</kbd>, <kbd>End</kbd>, <kbd>PgUp</kbd> và <kbd>PgDn</kbd> thuộc về nó** — hàng đầu, hàng cuối, lên một trang, xuống một trang, một trang là những gì danh sách đang hiện, với hàng được tô sáng giữ nguyên vị trí trên màn hình — và chỉ chạm tới văn bản một khi danh sách đã đóng; <kbd>Shift</kbd>+<kbd>Home</kbd> cũng đưa vào mọi thư mục trong khi danh sách vẫn đang mở.
- **Danh sách theo sát con trỏ.** Chọn một phần khác của đường dẫn — kéo qua nó, bấm vào trong nó, hoặc di chuyển bằng mũi tên — và danh sách sẽ liệt kê các mục con của *thư mục đó*, không phải thư mục mà ô đã được mở trên đó. Thư mục được tính từ các chip cộng với phần của ô nằm trước con trỏ, nên bấm vào trong `Notes.md` trong một ô đang giữ `2026/Notes.md` sẽ liệt kê những gì trong `2026`. Trỏ vào một hàng sẽ viết nó vào đoạn mà con trỏ đang ở, và đưa con trỏ ra khỏi danh sách sẽ trả lại văn bản và vùng chọn của bạn, đúng y như trước.
- **Kéo một vùng chọn ra khỏi ô** rồi thả ở nơi khác không đóng ô lại. Một cú bấm bắt đầu trong ô thuộc về thao tác chỉnh sửa dù nó đi xa tới đâu; chỉ một cú bấm *bắt đầu* ở ngoài mới là một cú bấm để rời đi.
- <kbd>Enter</kbd> xác nhận — và khi ô không đặt tên gì cả, như trong một thư mục trống nơi chưa từng có gì để hoàn thành, nó báo *No file selected* và giữ nguyên trạng thái mở thay vì đóng lại như thể đã có gì đó được chọn. <kbd>Esc</kbd> hoặc bấm ra chỗ khác sẽ hủy về đường dẫn thật của tệp. Một lần bấm <kbd>Esc</kbd> là đủ: nó đóng danh sách, rời khỏi ô và trả tiêu điểm về cho ghi chú, thay vì cần một lần bấm cho mỗi lớp.

Ô này không có khung — không hộp, không viền — nên nó đọc như chính văn bản đường dẫn, và tự giãn ra khi bạn gõ.

## Từng phần của hàng, nút theo nút

Toàn bộ hàng nhìn thoáng qua. Cột bấm chuột phải là những gì **một** lần bấm cho
bạn; nút đó cũng đếm số lần bấm, và [bảng riêng của
nó](#bấm-chuột-phải-một-lần-hai-lần-ba-lần) bên dưới có lần thứ hai, thứ ba và
thứ tư. Bảng này giả định **Tên thư mục mở danh sách** đang bật, mặc định là
vậy — khi tắt, tên thư mục và dấu phân cách đổi chỗ cột đầu tiên, như [bảng ở
trên](#đường-dẫn-trên-thanh-tiêu-đề) đã nói.

| Nơi bạn bấm | Bấm | Bấm đúp | <kbd>Ctrl</kbd>+bấm, hoặc bấm chuột giữa | Bấm chuột phải | Thả gì đó lên |
| --- | --- | --- | --- | --- | --- |
| **Tên kho** | Mở danh sách vị trí — các kho khác, thư mục home, gốc hệ thống tệp, ổ đĩa gắn ngoài. Mặc định tắt; khi tắt, hiện kho trong Trình quản lý tệp thay vào đó | Đánh dấu **toàn bộ đường dẫn tuyệt đối**. Danh sách đó mở với đường dẫn đã sẵn có trong ô và chỉ phần của riêng kho được đánh dấu; lần bấm thứ hai mở rộng ra phần còn lại. Không có gì để mở rộng khi danh sách tắt | Một tab không chứa gì, đứng ở gốc kho với danh sách đã hiện sẵn — nơi để gõ một đường dẫn từ đầu | Menu ngữ cảnh của riêng kho: những gì có thể làm với kho mà đoạn đó đặt tên | Một **tệp** di chuyển vào gốc kho. **Văn bản** mở ô đó ở gốc, để đặt tên cho ghi chú nó sẽ trở thành |
| **Tên thư mục** | Chọn thư mục đó để chỉnh sửa, nội dung thư mục cha được liệt kê bên dưới | Gõ lại thư mục đó và mọi thứ bên dưới nó | Mở thư mục đó trong một tab mới | Menu ngữ cảnh của thư mục đó — của chính Trình quản lý tệp | Một **tệp** di chuyển vào thư mục đó. **Văn bản** mở ô ở đó, để đặt tên cho ghi chú nó sẽ trở thành |
| **Dấu phân cách** | Mở thư mục trước nó — ghi chú thư mục của nó khi có plugin ghi chú thư mục đang chạy và đã có một ghi chú như vậy, nếu không thì hiện và mở rộng nó trong Trình quản lý tệp | **Tạo ghi chú của thư mục đó** và đi tới đó, khi có plugin ghi chú thư mục đang chạy và thư mục chưa có ghi chú nào. Khi đã có sẵn một ghi chú, đây chỉ là lần bấm đơn lại một lần nữa | Ghi chú thư mục trong một tab mới khi đã có; nếu không thì một tab đứng ở thư mục đó với danh sách đang hiện | Menu ngữ cảnh của cùng thư mục mà tên đưa ra — của ghi chú thư mục của nó, khi nó có một | Vào cuối ghi chú của thư mục đó, khi nó có một, sau khi bạn xác nhận |
| **Tên ghi chú** | Mở tên để chỉnh sửa — các thư mục ở lại dưới dạng chip bên cạnh nó — với mọi thứ trừ phần mở rộng được đánh dấu | Đưa cả phần mở rộng vào phần đánh dấu | Mở ghi chú trong một tab mới | Menu ngữ cảnh của tệp — cùng menu mà hàng của Trình quản lý tệp đưa ra | Vào cuối ghi chú này, sau khi bạn xác nhận |
| **Khoảng trống** | Mở **toàn bộ đường dẫn** để chỉnh sửa, đánh dấu đến hết phần mở rộng. Các thư mục đi vào ô cùng với nó, đó là điều khiến đây là cử chỉ để gõ lại một đường dẫn thay vì một tên | Đưa cả phần mở rộng vào phần đánh dấu | <kbd>Ctrl</kbd> mở lại ghi chú này trong một tab riêng, được nháy sáng trong Trình quản lý tệp để bản sao không bị nhầm với bản đầu tiên. Bấm chuột giữa *không* phải cử chỉ đó: nó dán đè lên đường dẫn | Đánh dấu toàn bộ đường dẫn và đưa ra những gì có thể làm với văn bản đã đánh dấu | |

**Lần bấm thứ hai theo sau lần thứ nhất.** Việc tạo ghi chú của một thư mục nằm
ở bất kỳ phần nào của hàng *mở* thư mục đó, mặc định là dấu phân cách và là tên
thư mục khi tắt tính năng đổi chỗ — cùng mục tiêu mà gạch chân đánh dấu, và cùng
mục tiêu mà một lần bấm đơn đã yêu cầu ghi chú thư mục. Nó chỉ được đưa ra khi
có plugin ghi chú thư mục đang chạy, vì ghi chú thư mục là một quy ước chứ không
phải một sự thật về hệ thống tệp, và chỉ khi thư mục chưa có ghi chú nào. Nơi nó
nằm và tên gọi của nó được đọc từ thiết lập riêng của **Folder notes**, nên một
kho giữ ghi chú thư mục của mình bên cạnh thư mục, hoặc gọi chúng là `_index`,
sẽ nhận được một trong số đó; bản thân tệp luôn là Markdown, đó là những gì lệnh
tạo mặc định của plugin đó tạo ra và những gì nó tìm thấy bất kể loại tệp nào
kho được thiết lập. Chế độ di chuyển/đổi tên hoàn toàn nằm ngoài chuyện này —
không có gì trên hàng mở một thư mục khi có một lần di chuyển đang chờ.

**Các lần bấm trên tên tiếp tục.** Bốn nấc là cùng bốn nấc mà phím đổi tên đi
qua, theo cùng thứ tự: tên, tên kèm phần mở rộng, đường dẫn từ kho, đường dẫn
từ gốc hệ thống. Vậy lần bấm thứ ba đến đường dẫn kho và lần thứ tư đến đường
dẫn của máy — cùng bốn thứ mà <kbd>Tab</kbd> qua khỏi cuối ô cho bạn, và cùng
bốn thứ mà nút phải *sao chép* thay vì chọn.

**Rê chuột** là câu trả lời riêng của nó và không bao giờ thay đổi gì: một tên
bị rút gọn quay lại đầy đủ chừng nào bạn còn trỏ vào nó, và biểu tượng ở đầu
hàng cho biết kho nằm ở đâu.

## Bấm chuột phải: một lần, hai lần, ba lần

Mọi mục tiêu trên hàng đều đáp lại một lần bấm chuột phải, và bạn bấm bao nhiêu
lần quyết định bạn nhận được gì. Vì lần bấm thứ hai có thể vẫn đang đến, lần đầu
tiên chờ khoảng một phần ba giây trước khi hành động — cái giá của việc đặt ba
cử chỉ trên một nút.

| Nơi bạn bấm | Một lần | Hai lần | Ba lần |
| --- | --- | --- | --- |
| **Tên kho** | Menu ngữ cảnh của kho: những gì có thể làm với kho mà đoạn đó đặt tên — bao gồm *Mở kho này*, khi kho đó không phải kho bạn đang ở | Sao chép tên kho | Sao chép nơi kho nằm — và lần bấm thứ tư, nơi tệp đang mở nằm |
| **Dấu phân cách** | Menu của thư mục đó — của ghi chú thư mục của nó, khi có plugin ghi chú thư mục đang chạy và thư mục có một | | |
| **Tên thư mục** | Menu của thư mục đó | Sao chép tên thư mục | Sao chép nó cùng mọi thứ bên phải nó |
| **Tên ghi chú** | Menu của tệp — cùng menu mà hàng của Trình quản lý tệp đưa ra | Sao chép tên | Sao chép nó kèm phần mở rộng |
| **Khoảng trống** | | Sao chép đường dẫn từ thư mục kho của bạn, không có phần mở rộng | Tương tự, kèm theo nó |

Một lần bấm trên **tên kho** mở ra những gì có thể làm với bất kỳ thứ gì đoạn
đó đang đặt tên. Với **kho bạn đang ở**: mở nó trong một cửa sổ mới, quản lý các
kho, sao chép nơi nó nằm, sao chép ID của nó, hiện nó trong trình quản lý tệp
của bạn. Với **một kho khác**, được truy cập qua danh sách vị trí, cùng những
thứ đó trừ cửa sổ mới — vốn sẽ mở *kho này*, không phải kho đó — cộng thêm một
thứ chỉ kho bạn không đang ở mới cung cấp được: **Mở kho này**. Nó được đặt tên
cho Obsidian bằng ID của nó thay vì bằng tên thư mục, vì hai kho có thể dùng
chung một tên. Với một nơi hoàn toàn không phải là kho — thư mục home của bạn,
một ổ đĩa gắn ngoài — không có ID để sao chép và không có gì để mở, và menu nói
lên điều đó bằng cách không đưa ra chúng.

Đây không phải menu ba chấm của riêng Obsidian, vốn thuộc về cửa sổ khởi động và
không thể mở được từ bên trong một kho đang chạy — đây là những mục tương tự
được dựng lại, bằng chính từ ngữ của Obsidian, lấy từ các lệnh của nó để chúng
đến bằng ngôn ngữ của bạn. Ba mục của menu đó cố tình **không** có ở đây: *đổi
tên kho*, *di chuyển kho* và *xóa khỏi danh sách* đều tác động lên thư mục của
chính kho hoặc lên sổ đăng ký các kho của Obsidian, và làm điều đó với kho bạn
đang đứng trong đó — với các tệp của nó đang mở và các trình theo dõi của nó
đang chạy — là cách một kho bị hỏng. Hãy mở trình quản lý kho (*Mở kho khác*)
và làm những việc đó ở đó, nơi kho đã đóng.

Hai lệnh sao chép trên **khoảng trống** là hàng như nó được viết ra — những gì
một liên kết hoặc một tìm kiếm cần — và những lệnh trên **tên kho** là các đường
dẫn mà hệ thống tệp biết, đó là những gì bất cứ thứ gì bên ngoài Obsidian cần.
Mỗi lần bấm ở đó mở rộng những gì bản sao có ích cho: hai lần cho tên kho, ba
lần cho nơi kho nằm, bốn lần cho nơi tệp đang mở nằm. Obsidian vẽ ra cùng sự
phân biệt đó trong hai lệnh của riêng nó, *from vault folder* và *from system
root*; ở đây các lệnh hướng ra ngoài nằm trên đoạn tự nó nằm ngoài đường dẫn.

Tất cả những điều này cũng hoạt động ngoài kho, trên cùng các mục tiêu.

Mỗi lần sao chép đều báo bằng một thông báo, vì một bản sao không để lại gì
trên màn hình để cho thấy nó đã xảy ra và một lần bấm bị đếm nhầm không nên
trông giống một lần thành công.

## Phím bổ trợ: mở nó ở nơi khác

Tên ghi chú và các đoạn thư mục hoạt động giống hàng của chúng trong Trình quản
lý tệp.

| | Trên tên ghi chú | Trên một đoạn thư mục |
| --- | --- | --- |
| Bấm thường | Chỉnh sửa tên | Duyệt thư mục đó |
| <kbd>Ctrl</kbd> / bấm chuột giữa | Mở ghi chú trong một tab mới | Gửi thư mục sang một tab mới |
| <kbd>Ctrl</kbd>+<kbd>Alt</kbd> | Một cửa sổ chia đôi | Một cửa sổ chia đôi |
| Kéo | Ghi chú, tới bất cứ đâu Obsidian nhận một tệp | Thư mục, tương tự — kể cả thanh tab |

Một thư mục không phải là thứ Obsidian có thể mở, vậy nên gửi một thư mục sang
một tab làm một trong hai việc: mở ghi chú thư mục của nó, khi có plugin ghi
chú thư mục đang chạy và có một ghi chú, hoặc mở một tab trống mà thanh đường
dẫn của nó đã đứng sẵn trong thư mục đó — chỉ để lại cho bạn cái tên để gõ. Thả
một đoạn thư mục lên **thanh tab** làm điều tương tự, trong một tab mới ở nơi
bạn buông tay — thanh tab của Obsidian tự nó chỉ nhận tệp, nên một thư mục bị
kéo ra khỏi Trình quản lý tệp vẫn bị từ chối ở đó.

## Tab: hoàn tất tên, rồi đến đường dẫn, rồi mở rộng vùng chọn

<kbd>Tab</kbd> hoàn tất theo cách của một shell: **một lần nhấn kéo dài những gì bạn gõ cho tới nơi các tên trong thư mục đó còn đồng nhất, và dừng lại ở nơi chúng khác nhau.** Gõ `Sk` ở nơi chỉ `Sketches` bắt đầu như vậy và từ đã hoàn chỉnh; gõ `Al` ở nơi cả `Alpha-one`, `Alpha-two` và `Alpine` đều như vậy và bạn được `Alp`, vì ký tự tiếp theo là câu hỏi chỉ mình bạn mới trả lời được.

Nhấn lại mà không gõ gì thì nó tiến về một tên — hàng mà danh sách đang bôi sáng, hoặc hàng đầu tiên — dừng lại ở chỗ mập mờ tiếp theo của tên đó: `Alpha-`, rồi `Alpha-one`. Danh sách mở ra ngay tại vị trí bạn đang đứng, nên trong chính thư mục của bạn, lần nhấn đầu tiên sẽ hướng tới ghi chú bạn đang mở chứ không phải cái được xếp trước tiên.

**Một lần nhấn không bao giờ chọn thay bạn giữa các tên.** <kbd>Tab</kbd> bước vào một thư mục khi những gì bạn gõ chỉ còn lại một ứng viên, hoặc khi bạn đã gõ hết tên của thư mục và không có *thư mục nào khác* kéo dài thêm được nó. Ở nơi có — `Schemes` bên cạnh `Schemes2026` — <kbd>Tab</kbd> tiếp tục hoàn tất về phía tên dài hơn; <kbd>Enter</kbd> và danh sách mới là các thao tác có nghĩa là *chính là cái này*.

Một **tệp** không bao giờ chặn một thư mục theo cách đó. Một thư mục bên cạnh một ghi chú cùng tên là một ghi chú thư mục, chứ không phải một ngã rẽ trên đường dẫn, và <kbd>Tab</kbd> đi qua các thư mục — nên `Projects` với `Projects.md` bên cạnh vẫn được bước vào như bất kỳ thư mục nào khác.

Hai điều nhỏ hơn kéo theo: những gì hiện trong ô là được viết theo đúng cách thư mục viết, nên `sk` trở thành `Sketches`; và chỉ tên đang được gõ mới bị thay thế, nên một đường dẫn còn phần bên phải sẽ giữ nguyên phần đó.

Khi có một tên được gợi ý khi bạn gõ, <kbd>Tab</kbd> **viết chính xác gợi ý đó**: gợi ý luôn là những gì lần nhấn sẽ viết ra, và gạch chân cùng đường xanh trong danh sách nói cùng một điều, nên những gì bạn thấy sau con trỏ chính là những gì bạn nhận được. Ở nơi các tên ngừng đồng nhất, đó là bước tiến về phía tên đầu tiên trong số chúng — hoặc về phía hàng bạn đã bấm mũi tên tới, mà <kbd>Tab</kbd> chọn thay vì hàng bên cạnh nó — vậy nên hãy bấm mũi tên tới cái bạn muốn, hoặc gõ vượt qua ngã rẽ, trước khi nhấn. Chỉ khi gợi ý chỉ còn lại *một* tên thì cùng một lần nhấn mới bước vào nó.

Đến được tên của tệp **chính là** bậc thang đầu tiên — không có lần nhấn nào bị tốn để đưa con trỏ tới cuối một tên sắp được đánh dấu. Từ đó các lần nhấn ngừng di chuyển dọc đường dẫn và bắt đầu mở rộng vùng được chọn:

1. tên
2. tên kèm phần mở rộng
3. đường dẫn kể từ thư mục kho của bạn
4. đường dẫn kể từ gốc hệ thống
5. quay lại đầu đường dẫn **như hiện trạng của nó** — đứng ở nơi lượt đi bắt đầu, đoạn đầu tiên được đánh dấu, sẵn sàng để đi lại lần nữa

Một cú bấm chuột lần thứ tư sẽ đi thẳng tới bậc thứ tư đó.

Mở rộng chỉ luôn luôn **mở rộng**. Một tên đã trọn vẹn trong ô — được hoàn tất bằng cùng một phím, hoặc được chọn từ danh sách — được đánh dấu toàn bộ thay vì bị gỡ phần mở rộng ra trước: bậc đầu tiên dành cho một tên mà lượt đi vừa *tới nơi*, khi phần mở rộng chưa phải là chủ đề.

Cái thang là nơi lượt đi **đến**, không phải nơi nó bắt đầu. Bấm vào một thư mục ở giữa đường dẫn và ô sẽ mở ra với mọi thứ bên dưới nó, tên thư mục đó được đánh dấu; mỗi lần <kbd>Tab</kbd> sau đó lấy **một** thư mục — đánh dấu cái tiếp theo, giữ nguyên phần còn lại của đường dẫn phía sau nó — và chỉ khi không còn gì ngoài tên tệp thì việc mở rộng mới bắt đầu:

| lần nhấn | chip | ô | được đánh dấu |
| --- | --- | --- | --- |
| đã bấm `a` | | `a/b/c/leaf.md` | `a` |
| <kbd>Tab</kbd> | `a` | `b/c/leaf.md` | `b` |
| <kbd>Tab</kbd> | `a › b` | `c/leaf.md` | `c` |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf` — bậc đầu tiên |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf.md` |

**Một tên đã được chốt vào thì đã được chốt vào, dù bạn chốt bằng cách nào.** Hoàn tất nó bằng
<kbd>Tab</kbd>, chốt nó bằng `/`, và chọn nó từ danh sách đều
để hàng ở cùng một vị trí giữ cùng một đường dẫn, nên lần nhấn sau
thao tác có cùng ý nghĩa dù bạn đến bằng cách nào. Chọn một thư mục từ
danh sách trước đây từng làm trống ô, vứt bỏ một đường dẫn mà việc đến
cùng thư mục đó bằng <kbd>Tab</kbd> đáng lẽ đã giữ lại.

**Một đường dẫn bạn vẫn đang viết dở sẽ đi theo bạn trọn vẹn.** Bước vào chính thư mục mà phần còn lại của đường dẫn treo vào không phải là một khẳng định rằng phần còn lại đó tồn tại — đó là cách một đường dẫn được gõ trước khi nó thực sự tồn tại, và các thư mục nó nêu tên là những thư mục mà <kbd>Enter</kbd> sắp tạo ra. Vậy nên đi xuống `Dokumente/plans/untitled.md` vào `Dokumente` vẫn giữ `plans/untitled.md` ở phía trước bạn, dù `plans` đã có ở đó hay chưa. Điều tương tự cũng đúng với một đường dẫn bạn gõ từ đầu: không phần nào trong đó được kế thừa từ đâu cả, nên không phần nào bị lấy đi.

**Đổi một bước lấy một bước khác lại là chuyện khác, và khi đó đường dẫn chỉ đi theo bạn đến mức nó thực sự tồn tại.** Đổi một thư mục ở giữa đường dẫn lấy một anh em — bấm `a`, gõ một tên khác, nhấn <kbd>Tab</kbd> — và mọi thứ bên dưới nó đi theo bạn, vì đường dẫn bạn đang đứng thường là phần lớn đường dẫn bạn muốn. Tuy nhiên chỉ những gì tồn tại ở bên kia mới sống sót qua việc chuyển, nên ô và danh sách bên cạnh nó không bao giờ mâu thuẫn với nhau: những gì còn lại trước mặt bạn là một đường dẫn bạn thực sự có thể đi. Bắt đầu từ `a/b/c/leaf.md`, với `a` được bấm và tên của nó được đánh dấu:

| bạn chốt vào cái gì | chip | ô | được đánh dấu |
| --- | --- | --- | --- |
| `x`, không có `b` nào cả | `x` | | không có gì đi theo cả |
| `y`, có `b` nhưng không có `c` trong đó | `y` | `b` | `b` |
| `z`, một bản song sinh của `a` từ trên xuống dưới | `z` | `b/c/leaf.md` | `b` |

Một thư mục bị bỏ lại đứng một mình như vậy vẫn là một thư mục để bước vào: lần nhấn sau đó bước vào, thay vì bắt đầu mở rộng một vùng chọn trên tên của nó.

Một tên mà **không có gì** trong thư mục khớp được đáp lại khác đi, vì không có gì được chốt vào bởi nó: lần nhấn đánh dấu những gì bạn đã gõ, sẵn sàng để bạn gõ đè lên, thay vì trả lời bằng một nơi khác.

Toàn bộ chuyện này là một **vòng lặp, và không tốn gì để đi hết một vòng**: lần nhấn sau bậc cuối cùng đưa hàng trở lại đầu đường dẫn, cả thư mục lẫn mọi thứ, sẵn sàng để đi lại vòng nữa. Thứ duy nhất từng rời khỏi hàng là tiền tố tuyệt đối, ở lần nhấn ngừng hiển thị nó.

Những gì quay lại là **đường dẫn bạn đã xây dựng**, không phải đường dẫn bạn xuất phát. Rẽ nhánh lượt đi giữa chừng — chọn một anh em khác từ danh sách, hoàn tất về phía một tên khác — và vòng lặp khép lại tại nơi bạn thực sự đang đứng; bốn bậc trước đó mô tả cùng đường dẫn đó, và bậc này từng là bậc lẻ loi mô tả quá khứ.

<kbd>Shift</kbd>+<kbd>Tab</kbd> khép cùng một vòng theo chiều ngược lại: tại đầu đường dẫn, không còn gì để trả lại và không còn gì cao hơn phía trên, lần nhấn tiếp theo lặp tới bậc **xa nhất** — đường dẫn kể từ gốc hệ thống — và tiếp tục thu hẹp từ đó. Không hướng nào là ngõ cụt.

Nó cũng không tốn lần nhấn nào cho một bậc đã hiển thị rồi. Dưới bậc cuối cùng — tên không có phần mở rộng — cái thang kết thúc, và *cùng một lần nhấn* rời khỏi thư mục: đường dẫn kể từ gốc hệ thống, đường dẫn kể từ kho của bạn, tên, tên không có phần mở rộng, rồi thư mục, mỗi bước một lần.

Cũng không tốn lần nhấn nào cho một bậc không thay đổi gì: bấm vào tên một ghi chú đã hiển thị nó không có phần mở rộng rồi, đó chính là những gì bậc đầu tiên hiển thị, nên từ đó <kbd>Tab</kbd> bắt đầu ở bậc thứ hai.

Mỗi bậc thay đổi những gì *ở trong* ô, không chỉ những gì được bôi sáng — một vùng chọn phải nằm trên đúng phần văn bản mà nó nêu tên, nếu không <kbd>Enter</kbd> sẽ chốt một thứ khác với những gì bạn có thể thấy đang được chọn. Cái thang thuộc về một phiên chỉnh sửa. Bấm ra chỗ khác, hoặc gõ bất cứ điều gì, và lần <kbd>Tab</kbd> tiếp theo sẽ hoàn tất một tên trở lại.

### <kbd>Shift</kbd>+<kbd>Tab</kbd>: cùng con đường đi ngược lại

<kbd>Shift</kbd>+<kbd>Tab</kbd> lùi lại một bước cho mỗi lần nhấn, theo đúng thứ tự các lần nhấn đã được thực hiện: vùng chọn thu hẹp từng bậc một, mỗi lần hoàn tất được trả lại, và mỗi thư mục được bước ra khỏi — tên của nó quay lại ô để bạn chỉnh sửa thay vì gõ lại.

**Không có gì bị xóa trên đường quay lại.** Một lần hoàn tất được trả lại bằng cách *đánh dấu* các ký tự nó đã thêm vào, hệt như đi tới đánh dấu những gì nó đã mở rộng qua — tên vẫn ở trước mặt bạn, và mỗi lần nhấn tiếp theo đánh dấu thêm một bước nữa của nó:

| | ô | được đánh dấu |
| --- | --- | --- |
| đã đi vào | `Alpha-one` | |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `ha-one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `Alpha-one` |

Gõ vào sẽ thay thế phần được đánh dấu, giống như ở bất cứ đâu khác. <kbd>Tab</kbd> đặt lại chính xác những gì phần đánh dấu đã trả lại, nên đi ra hai bước rồi vào lại hai bước sẽ đưa bạn về đúng nơi bạn đã ở.

Khi cả tên đã được đánh dấu hết thì không còn gì mà một lần nhấn đã đặt vào đó nữa, và lần nhấn tiếp theo đi *lên đường dẫn*: nó rời khỏi thư mục bạn đang đứng, hệt như <kbd>Backspace</kbd> trên một ô trống. Điều đó cũng không tốn gì — tên của thư mục quay lại ô **ở phía trước** bất cứ thứ gì đang có trong đó, được đánh dấu, đó chính là văn bản mà việc bấm vào thư mục đó lẽ ra sẽ cho bạn. Lùi lại là một hướng đi chứ không phải lịch sử hoàn tác — nhưng đánh dấu tên trước có nghĩa là một lần nhấn không bao giờ vừa lấy lại những gì bạn đã viết vừa đưa bạn ra khỏi thư mục bạn đã viết nó trong đó.

Văn bản mở ra **đã được chọn sẵn** — những gì một cú bấm vào thư mục để lại phía sau nó — là tên mà <kbd>Tab</kbd> sẽ xử lý tiếp theo: nó được hoàn tất và được bước vào như bất cứ thứ gì khác, và gõ vào sẽ thay thế nó. Chỉ lệnh tập trung mới mở ra ở một bậc của chính cái thang, vì nó đang cho bạn thấy toàn bộ đường dẫn chứ không phải một thư mục để đi vào.

## Gõ một thứ không phải là đường dẫn

| Bạn gõ gì | Điều gì xảy ra |
| --- | --- |
| `https://…` | Mở trong tab mới ở **Trình xem Web** của Obsidian, nếu bạn đã bật plugin cốt lõi đó; nếu không thì mở trong trình duyệt máy tính của bạn |
| `obsidian://…` | Được chuyển cho trình xử lý URI riêng của Obsidian |
| `file:///…` | Được giải mã và mở ra: như một ghi chú thật nếu nó nằm trong kho của bạn, trong trình xem nếu không |
| `/home/you/a%20b.md` | Tương tự, cho một đường dẫn dán ra từ trình duyệt hoặc trình quản lý tệp |

Chỉ những giao thức tường minh mới được tính — một ghi chú tên là `100%20` vẫn là một ghi chú. Một `/` thuộc về một giao thức vẫn giữ nguyên nghĩa đen thay vì đi xuống một thư mục, nên một URL có thể được gõ tay chứ không chỉ dán vào.

## Một lệnh cho bàn phím

**Tập trung vào thanh đường dẫn** mở ô lên với tên của ghi chú và đi qua nó theo cách <kbd>F2</kbd> làm — tên, tên kèm phần mở rộng, đường dẫn kể từ kho của bạn, đường dẫn kể từ gốc hệ thống — và lần nhấn sau đó đóng ô lại và đưa con trỏ về lại trong ghi chú. Nó không đổi tên: Enter điều hướng, như trong bất kỳ ô nào khác. Nó không có phím riêng theo mặc định, vì hướng dẫn của Obsidian khuyến khích không cho plugin tự chiếm một phím; hàng **Hotkeys** ở cuối phần thiết lập của plugin này mở *Settings → Hotkeys* chỉ hiển thị các lệnh của nó, để bạn có thể gán phím ở đó.

## Điều hướng không bao giờ động tới tệp đang mở

Ở chế độ mặc định (điều hướng), ghi chú đang mở **không bao giờ** bị đổi tên hay di chuyển.

- Một đường dẫn trỏ tới một tệp có sẵn sẽ mở nó.
- Một đường dẫn chưa tồn tại đơn giản là được tạo ra, cùng với mọi thư mục cha còn thiếu, rồi được mở. Mỗi tệp và thư mục được tạo theo cách này đều có thông báo — một thư mục mới vốn dĩ vô hình cho tới khi bạn đi tìm nó — và thùng rác riêng của Obsidian khiến việc hoàn tác một cái không mong muốn chỉ tốn một phím.
- **Bên ngoài kho của bạn nó vẫn hỏi trước.** Ở ngoài đó, cùng một lỗi gõ sẽ viết vào một thư mục hệ thống, nơi mà cả thông báo lẫn thùng rác của Obsidian đều chẳng an ủi được bao nhiêu.

## <kbd>Ctrl</kbd> — tab mới, và sao chép thay vì di chuyển

Một ghi chú **được tạo, di chuyển hoặc sao chép bên trong kho được hiển thị ở nơi nó dừng lại** trong Trình duyệt tệp, được đánh dấu trong chốc lát bằng màu nhấn của Obsidian — cây thư mục là nơi bạn tìm nó sau đó, nên nó được đặt trước mặt bạn thay vì bị bỏ lại trong một thư mục có khi còn chưa mở. Nhân bản cũng cho biết như vậy: một bản sao để lại bản gốc ở nguyên chỗ cũ và mở bản sao trong khung riêng của nó, mà nếu không nói gì thì rất dễ hiểu nhầm là chẳng có gì xảy ra.

Giữ <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> trên macOS) khi chọn một tệp từ danh sách, hoặc khi nhấn <kbd>Enter</kbd> trên một đường dẫn, sẽ đưa kết quả sang **tab mới** thay vì tab này:

| | Thường | Có <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Chọn hoặc gõ một tệp có sẵn | Mở tại đây | Mở trong tab mới |
| Gõ một đường dẫn chưa tồn tại | Hỏi, rồi mở tại đây | Hỏi, rồi mở trong tab mới |
| Chốt đường dẫn trong chế độ đổi tên/di chuyển | **Di chuyển** ghi chú tới đó | **Sao chép** nó tới đó và mở bản sao trong tab mới |

Phím bổ trợ được đọc theo đúng quy tắc của Obsidian, nên nó hành xử y như trên một liên kết hay một hàng trong Trình duyệt tệp — bấm chuột giữa cũng có nghĩa là "tab mới", <kbd>Ctrl</kbd>+<kbd>Alt</kbd> nghĩa là chia khung, và <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> là cửa sổ mới.

Sao chép từ chối ghi đè, hệt như di chuyển — kể cả lên chính đường dẫn của ghi chú, nơi không có gì hợp lý để sao chép cả. Bên ngoài kho, sự từ chối đó cũng được nói ra thành lời.

Tất cả những điều này đều hoạt động **cả khi danh sách đang mở** lẫn khi không: trên một hàng đang được bôi sáng, phím bổ trợ áp dụng cho hàng đó, và khi không đứng trên gì cả, nó áp dụng cho những gì bạn đã gõ.

## Duyệt ngoài kho

**Mặc định tính năng này tắt.** Trước hết hãy bật **Truy cập tệp bên ngoài** trong thiết lập — đọc và ghi bên ngoài kho là điều duy nhất plugin này làm mà bản thân Obsidian không làm, nên người dùng phải chủ động bật lên chứ không phải tắt đi. Khi tắt, tên kho chỉ đơn thuần hiện kho của bạn trong Trình duyệt tệp, và không gì ở đây nhìn ra ngoài phạm vi đó.

Bấm vào **tên kho** (hoặc biểu tượng 🏠, khi *Hiển thị tên kho* tắt) mở ra một danh sách các nơi chứ không phải nội dung. Ô nhập được mở ra chứa **toàn bộ đường dẫn bạn đang ở, viết ra đầy đủ**, với nơi nó bắt đầu được bôi chọn — nên chọn một nơi khác, hoặc gõ đè lên phần được chọn, chỉ đổi đúng phần đầu đó và để phần còn lại của đường dẫn nguyên trước mặt bạn. **Bấm vào tên lần thứ hai** — một cú nhấp đúp — và vệt bôi chọn mở rộng ra khắp cả đường dẫn, đó là cách toàn bộ đường dẫn tuyệt đối được lấy bằng một thao tác duy nhất thay vì quét bằng tay. Đổi ý và <kbd>Esc</kbd> đưa dòng trở lại như cũ.

Gõ ở đây được gợi ý phần còn lại của tên một nơi như mọi chỗ khác, và <kbd>Tab</kbd> **đặt nơi đó vào** — nơi bạn đang trỏ tới, hoặc nơi mà cái tên chỉ có thể ám chỉ. Khi vẫn còn nhiều nơi cùng chia sẻ những gì bạn đã gõ, cú nhấn dừng lại ở chỗ rẽ nhánh, như mọi nơi khác. Trỏ vào một nơi sẽ hiện **chính đường dẫn của nơi đó**, toàn bộ được chọn, theo sau bởi đường dẫn ghi chú của bạn chỉ tới mức nó thật sự có ở bên đó — đúng bằng những gì chọn nơi đó sẽ đưa bạn tới. Một nơi không phải là một bước bên trong đường dẫn trên màn hình mà là chỗ để tính toàn bộ đường dẫn từ đó, nên không gì thuộc về nơi bạn vừa ở còn đứng trước nó.

Các nơi được đưa ra:

- **Các kho khác của bạn**, đọc từ chính sổ đăng ký của Obsidian, kho mở gần đây nhất đứng trước, mỗi kho mang biểu tượng kho của chính Obsidian — biểu tượng ứng dụng dùng cho các lệnh về kho. Kho bạn đang mở thì mang hình ngôi nhà: đó là nơi dòng này khởi đầu theo mặc định, chứ không phải nơi để đi tới.
- **Thư mục cá nhân**, dưới tên tài khoản của bạn, đánh dấu bằng `~`. Lucide không có dấu ngã, nên biểu tượng này do chính plugin vẽ trên lưới 24×24 của Lucide với cùng nét vẽ — một biểu tượng còn thiếu trong bộ ấy, chứ không phải một ký tự văn bản ngồi lẫn giữa các biểu tượng.
- **Gốc hệ thống tệp**, gắn nhãn `root` — không dịch, vì đó là tên của nó trên mọi hệ thống — thay vì `/`, vốn sẽ đọc như một bước trống bên cạnh dấu phân cách theo sau.
- **Các ổ đĩa đã gắn**, mỗi loại một biểu tượng ở những chỗ dễ xác định: chia sẻ mạng, đĩa quang, đĩa mềm và thiết bị tháo rời có biểu tượng riêng; còn lại nhận biểu tượng ổ đĩa chung. Trên Windows các ổ hiện dưới dạng `C:` với biểu tượng chung — tên nhãn đĩa và loại chính xác cần tới WMI, điều cố ý không làm.

Chọn một kho khác **không chuyển Obsidian sang kho đó.** Mọi thứ bạn đang mở vẫn mở; đường dẫn chỉ đơn giản bắt đầu duyệt ở đó. Đó chính là toàn bộ lý do đặt nó trên thanh đường dẫn thay vì nhường cho bộ chuyển kho ở thanh bên.

Nó cũng đáp xuống **càng gần ghi chú bạn đang ở càng tốt, tới mức nơi đó thật sự cho phép**.

- Nếu nơi bạn chọn *chứa* ghi chú — thư mục cá nhân, hoặc bất cứ đâu các kho của bạn sống — bạn nhận được đường dẫn của nó từ đó: chọn `~` với `takeaways.md` đang mở thì ô nhập sẽ đọc `Vaults/your-vault/takeaways.md`.
- Nếu đó là một nơi ngang hàng với nơi này — một kho khác, một ổ đĩa khác — cùng đường dẫn tương đối ấy được thử, sâu tới mức nó thật sự tồn tại. Các kho thường gần như bản sao của nhau, và lý do để nhảy sang một kho thường là cùng một ghi chú ở bên đó.

Dù theo cách nào, dòng vẫn ở nơi bạn chọn và **thư mục đầu tiên của đường dẫn đó mở ra được chọn**, đúng hình dạng mà bấm vào một thư mục tạo ra: bước bạn có khả năng cao nhất sẽ đổi khi nhảy sang nơi khác chính là bước gần đầu nhất, và phần còn lại của đường dẫn vẫn hiện trong lúc bạn đổi nó. Không gì được điền sẵn nếu nó không thật sự có trên đĩa.

### Trong lúc bạn ở bên ngoài

Đường dẫn **bắt đầu tại vị trí bạn đã chọn**, chứ không phải tại cấu trúc thư mục của máy — và ô nhập bạn nhận được bằng cách bấm vào khoảng trống hoặc nhấn phím lấy tiêu điểm cũng vậy: nó chứa đường dẫn từ nơi đó, không phải đường dẫn tuyệt đối của máy, với vệt đường thu gọn về đúng nơi đó hệt như nó thu gọn về gốc kho ở bên trong — chọn `Archive` và dòng đọc `Archive / notes / …`, không phải `/home/you/Vaults/Archive/notes/…`. Đoạn đầu tiên mang một biểu tượng cho thứ nó là (kho, thư mục cá nhân, ổ đĩa), và <kbd>Backspace</kbd> dừng lại ở đó thay vì đi tiếp lên phần còn lại của hệ thống tệp. Khi *Hiển thị tên kho* tắt, đoạn đó chỉ còn mỗi biểu tượng — thiết lập này là về đoạn mở đầu của dòng dù nó gọi tên kho nào, không chỉ kho của riêng bạn.

Thanh đường dẫn được **viền màu lỗi** — đúng vòng viền mà chế độ đổi tên vẽ ra — suốt thời gian nó trỏ ra ngoài kho của bạn. Nó đánh dấu một tình trạng kéo dài, không phải một khoảnh khắc: chừng nào nó còn đó, không cơ chế nào của Obsidian áp dụng cho thứ dòng đang hiện, và việc ghi bị khóa cho tới khi bạn nói khác đi.

Ngoài ra việc duyệt vẫn như bên trong: mảnh, dấu phân cách, gõ, gợi ý hoàn thành, <kbd>Backspace</kbd> để lùi ra. Cùng những quy tắc hiển thị ấy cũng áp dụng, nên phần mở rộng không được hỗ trợ vẫn cần *Phát hiện tất cả các phần mở rộng tệp* của Obsidian và tệp bắt đầu bằng dấu chấm vẫn cần thiết lập của plugin này.

**Bấm chuột phải cũng hoạt động ở ngoài đó**, dù đó là một menu khác: các trình xử lý riêng của Trình duyệt tệp cần một tệp mà kho biết tới, nên các mục ở ngoài được dựng từ đường dẫn thay vào đó. Chúng đưa ra tùy chọn mở (tại đây, bên phải, trong cửa sổ mới, hoặc trong ứng dụng mặc định của máy), *Sao chép đường dẫn*, *Hiện trong trình duyệt hệ thống*, và — khi ổ khóa đã mở — *Ghi chú mới*, *Thư mục mới*, *Tạo bản sao*, *Đổi tên…* và *Xóa*. **Kéo thả** vẫn cần một tệp trong kho và vẫn không khả dụng.

Cùng menu ấy có mặt trên tệp đang mở trong trình xem, qua chuột phải hoặc từ ba chấm của khung, và nó hỏi ổ khóa trong tiêu đề của khung đó. Nó không hỏi gì khác: tệp đang được dựng hay hiện dưới dạng nguồn không ảnh hưởng tới việc nó có xóa được hay không, và một hình ảnh hay PDF — vốn không hề có khung xem dạng nguồn — vẫn xóa được như một ghi chú. *Xóa* nghĩa là thùng rác của hệ điều hành, nên có thể hoàn tác từ đó; một hệ thống không có thùng rác sẽ báo điều đó thay vì hủy tệp luôn.

Xóa bên ngoài kho di chuyển tệp vào **thùng rác của hệ thống** — Recycle Bin trên Windows, Trash trên macOS — không bao giờ là gỡ liên kết thẳng. Ở ngoài đây không có thùng rác của Obsidian để phục hồi, nên một lần xóa không thể hoàn tác hoàn toàn không được đưa ra: nơi nào nền tảng không có thùng rác, thao tác sẽ báo lỗi thay vì hủy luôn tệp.

### Ghi bên ngoài kho

Mọi thứ ghi đều **mặc định bị khóa**. Chừng nào dòng còn trỏ ra ngoài kho của bạn, chỗ của công tắc đổi tên trong tiêu đề bị thay bằng một **ổ khóa màu đỏ** — cùng màu với vòng viền quanh dòng, và vì cùng lý do: nó đánh dấu một sự từ chối. Cả hai là một điều khiển duy nhất trong một vị trí duy nhất, nên không bao giờ có câu hỏi cái nào chặn cái gì.

Ba cú nhấn, theo một vòng:

| Cú nhấn | Bạn nhận được gì |
| --- | --- |
| Ổ khóa đỏ | Ghi ở đây được cho phép. Ổ khóa được thay bằng công tắc đổi tên/di chuyển |
| Công tắc | Chế độ đổi tên/di chuyển, hệt như bên trong kho |
| Công tắc lần nữa | Chế độ kết thúc và ổ khóa đóng lại — quyền không tồn tại lâu hơn thứ nó được mở ra để phục vụ |

**Phím đổi tên cũng hỏi ổ khóa.** Ngoài kho của bạn, bấm phím đó làm ổ khóa chớp mở rồi đóng lại thay vì mở một chế độ mà mọi lần xác nhận sẽ bị từ chối: sự từ chối tới trước công việc chứ không phải sau nó. Bấm vào ổ khóa, hoặc bấm phím đổi tên lần nữa trong nửa giây — cú bấm thứ hai cấp đúng thứ nút cấp, cho vị trí này, và mở chế độ đổi tên cùng với nó.

Bên trong kho của bạn không có ổ khóa: không có gì để mở khóa, và công tắc chỉ đơn giản chiếm vị trí đó.

Quyền được cấp **cho một vị trí, không phải cho một khoảnh khắc**: nó tồn tại qua mọi việc bạn làm trong lúc thao tác ở một nơi — hoàn tất một lần di chuyển, bấm ra khỏi ô nhập, mở một tệp — và kết thúc khi bạn chọn một kho, ổ đĩa hay gốc khác từ danh sách, khi dòng trở về một tệp trong kho, hoặc ở cú nhấn thứ ba đó. Vậy nên một loạt lần di chuyển trong một thư mục chỉ tốn một cú nhấn, không phải một cho mỗi tệp.

Khi ổ khóa đã mở, thanh đường dẫn ở ngoài đó hành xử như ở bên trong:

| Thao tác | Kết quả |
| --- | --- |
| Gõ một tên chưa tồn tại, <kbd>Enter</kbd> | Cùng câu hỏi "tạo nó chứ?" như bên trong; các thư mục cha còn thiếu cũng được tạo. Tên không có phần mở rộng sẽ thành `.md`, hệt như bên trong |
| Chế độ đổi tên/di chuyển, gõ tên mới | Đổi tên tệp mà dòng đang hiện. Tên không có phần mở rộng giữ nguyên phần mở rộng của tệp — ngoài đây một thư mục chứa đủ mọi loại tệp, và một lần đổi tên không nên lặng lẽ biến `.png` thành `.md` |
| Chế độ đổi tên/di chuyển, duyệt sang nơi khác, chọn **giữ tên này** | Di chuyển nó tới đó với đúng tên nó đang có |
| Giữ <kbd>Ctrl</kbd> ở một trong hai | Sao chép thay vì di chuyển, và mở bản sao trong tab mới |

Khi bị khóa, tất cả những việc đó đều báo lại điều đang chặn chúng thay vì thực thi. Không gì bị ghi đè trong cả hai trạng thái: đích đã tồn tại thì bị từ chối, và lời từ chối ấy đến từ chính hệ thống tệp (`COPYFILE_EXCL`, một lệnh tạo độc quyền) chứ không phải một phép kiểm tra có thể thua trong cuộc đua. Di chuyển giữa các hệ thống tệp — ra khỏi USB, ra khỏi chia sẻ mạng — lùi về cách sao-rồi-xóa, và bản gốc chỉ bị bỏ đi sau khi bản sao đã yên vị.

**Di chuyển một ghi chú *ra khỏi* kho của bạn sẽ hỏi trước.** `fileManager` không thể theo dõi một tệp vượt qua ranh giới đó: mọi liên kết trỏ tới ghi chú ngừng phân giải, không gì cập nhật chúng, và ghi chú rời khỏi chỉ mục của kho. Nên việc di chuyển được đưa ra như một quyết định thay vì bị từ chối hoặc thực hiện lặng lẽ — một hộp thoại nêu rõ cái giá phải trả và bao nhiêu ghi chú liên kết tới ghi chú bạn đang di chuyển. Xác nhận và nó thật sự di chuyển: sao ra ngoài, rồi bị xóa khỏi kho qua chính chức năng xóa của Obsidian, nên có thể phục hồi hệt như một ghi chú bị xóa, và một thất bại ở bước nào cũng để lại ghi chú đúng nơi nó đã ở. Giữ <kbd>Ctrl</kbd> vẫn chỉ sao chép nó ra ngoài thay vào đó, việc này không có vấn đề gì như trên. Đi theo hướng ngược lại — đưa một tệp bên ngoài *vào* kho — chưa được nối kết.

### Mở một tệp bên ngoài

Duyệt hệ thống tệp có thể đi ngược **vào lại chính kho bạn đang mở** — từ gốc, từ thư mục cá nhân, từ bất cứ đâu các kho của bạn sống. Một tệp đến được theo cách đó là một ghi chú bình thường, nên nó mở như vậy: trình soạn thảo thật, liên kết và liên kết ngược, và dòng bật trở lại đường dẫn gốc-tại-kho. Chỉ những tệp Obsidian không có khung xem mới ở lại trong bản xem trước, vì ở ngoài đó bản xem trước là câu trả lời tốt hơn. Nơi một bản xem trước đang hiện một ghi chú như thế dù sao — một không gian làm việc mở lại, chẳng hạn — dòng trên cùng của nó đưa ra **Mở trong *(kho)***, cùng lời mời mà bạn có thể tự làm bằng tay.

Trình soạn thảo của Obsidian chỉ làm việc với tệp trong kho, nên một tệp bên ngoài **không thể** mở như một ghi chú thật với liên kết, liên kết ngược và tất cả những thứ đó — đó là giới hạn của ứng dụng, không phải của plugin này. Chọn một tệp như vậy sẽ mở một **bản xem trước**, chỉ đọc cho tới khi bạn nói khác đi:

| Loại | Hiện dưới dạng |
| --- | --- |
| `.md`, `.markdown` | Markdown đã dựng |
| `.html`, `.htm`, `.xhtml` | Trang đã dựng |
| Hình ảnh, âm thanh, video, PDF | Trình phát/trình xem gốc |
| Bất kỳ tệp **văn bản** nào khác (`.json`, `.css`, `.log`, `.txt`, …) | Văn bản thuần nguyên văn |
| Định dạng nhị phân không có trình xem (`.zip`, `.exe`, …) | Giao cho *Mở bằng ứng dụng mặc định* |

Trình xem có hai cách đọc một tệp, và vì chúng loại trừ nhau nên chỉ hiện cách mà bạn sẽ **chuyển sang**:

| | Nó làm gì | Mặc định cho |
| --- | --- | --- |
| **Xem dạng Markdown** | Dựng tệp như một ghi chú, chỉ đọc | `.md`, `.markdown` |
| **Xem dưới dạng trang** | Dựng tệp như chính trang mà nó là, chỉ đọc | `.html`, `.htm`, `.xhtml` |
| **Sửa dạng văn bản** | Phần nguồn, sửa được | mọi thứ khác |

Bên ngoài kho, **Sửa dạng văn bản** đồng thời là cú nhấn gỡ bỏ chế độ chỉ đọc — chế độ và quyền là một thao tác duy nhất thay vì hai nút phải cân nhắc. Nó nhuốm đỏ **mỗi khi nhấn nó sẽ gỡ chế độ chỉ đọc**, dù bạn đang chuẩn bị sửa tại chỗ hay đến thẳng từ khung dựng; bên trong kho không có gì để mở khóa, nên nó giữ vẻ bình thường. **Xem dạng Markdown** mang lớp nhấn nhạt — đúng sắc mà Obsidian dùng cho văn bản được chọn — đánh dấu nó là đường quay lại chứ không phải lời kêu gọi hành động.

Vì nút bám theo *việc sửa* chứ không theo chế độ thô, một tệp đang ở trạng thái chỉ đọc trong khung văn bản vẫn mời **Sửa dạng văn bản**: đó là cú nhấn chuẩn bị cho việc sửa. Một tệp không bao giờ gõ vào được — đã cắt bớt, hoặc không đọc nổi — lại ghi **Xem dạng văn bản**, vì đó là tất cả những gì cú nhấn có thể mang lại.

Các mặc định được đặt theo hướng hữu ích chứ không theo nghĩa đen: dấu `#` trong một tập lệnh shell là chú thích chứ không phải tiêu đề, nên dựng một `.log` thành Markdown sẽ lặng lẽ nuốt mất nó. Cả hai mặc định đều có thể ghi đè cho từng tệp, và lựa chọn đó đi vào lịch sử của khung, nên lùi/tiến và một không gian làm việc mở lại đều giữ nguyên — rất nhiều ghi chú sống trong tệp `.txt`, và rất nhiều tệp `.md` dễ đọc hơn ở dạng nguồn.

#### Một trang HTML được phép làm gì

Không gì cả. Trang được hiện trong một khung với **mọi quyền bị thu hồi** — không kịch bản, không biểu mẫu, không điều hướng, không nguồn gốc riêng — và một chính sách nội dung không cho phép nó có mạng chút nào. Đó không phải sự thận trọng vì lý do riêng của nó: một trang cục bộ tải theo cách thông thường sẽ chia sẻ nguồn gốc của cửa sổ này, và cửa sổ này là Obsidian, nên một kịch bản trong một tệp HTML tải về sẽ chạy bên trong ứng dụng của bạn với tầm với của chính ứng dụng.

Cái giá phải trả là bất cứ điều gì trang *làm*; cái được giữ lại là mọi thứ trang *là*. Các tệp kiểu và hình ảnh nằm cạnh tệp được đọc vào và mang theo vào khung, nên một trang đã lưu vẫn trông giống chính nó. Các tham chiếu trỏ ra ngoài thư mục riêng của trang, và các tham chiếu tới đâu đó trên mạng, được để nguyên y như đã viết và đơn giản không tải — một tệp cục bộ không thể lặng lẽ báo cho một máy chủ biết rằng bạn đã mở nó.

Kịch bản bị **gỡ bỏ** chứ không chỉ bị chặn, để trang bạn thấy và phần nguồn bạn có thể chuyển sang khác nhau theo một cách được nêu rõ chứ không phải theo bất cứ điều gì khung đã lặng lẽ từ chối chạy. Liên kết bên trong trang không làm gì. Khi bạn muốn thứ thật — kịch bản, mạng và tất cả — *Mở bằng ứng dụng mặc định* giao nó cho trình duyệt của bạn, thứ đúng là công cụ cho việc đó.

**Tệp trong kho của bạn sửa được ngay**, không cần mở khóa: *Sửa dạng văn bản* là một trình soạn thảo thật và ghi lại trong lúc bạn gõ.

**Việc sửa được nhớ qua lần chuyển.** Sang *Xem dạng Markdown* sẽ tạm ngưng nó — một bản dựng tĩnh chẳng có chỗ nào để gõ vào, và Live Preview cần chính trình soạn thảo của Obsidian, thứ chỉ tồn tại cho tệp trong kho — nên không gì nhận là bạn đang sửa trong lúc bạn ở đó. Quay lại *Sửa dạng văn bản* thì tiếp tục từ chỗ bạn dừng.

**Tệp bên ngoài kho mở ở chế độ chỉ đọc, và *Sửa dạng văn bản* gỡ bỏ điều đó.** Cú nhấn ấy chính là toàn bộ cánh cổng: cho tới khi nó xảy ra, không gì ngoài đó bị ghi. Sau đó tệp lưu lại trong lúc bạn gõ, y hệt một tệp trong kho; và dòng trạng thái đổi từ ổ khóa thành cây bút chì. Việc mở khóa chỉ áp cho đúng tệp đó trong đúng thẻ đó — điều hướng sang tệp khác sẽ khóa lại, và nó cố ý không được lưu vào lịch sử thẻ, nên một không gian làm việc mở lại không bao giờ trở về với quyền ghi đã sẵn sàng trên một tệp hệ thống mà bạn không nhớ đã mở.

**Tệp bị cắt bớt vẫn chỉ đọc bất kể thế nào** — lưu những gì trên màn hình sẽ vứt bỏ mọi thứ vượt quá giới hạn, nên nút ấy hoàn toàn không được đưa ra chứ không phải đưa ra rồi từ chối. Điều tương tự với một tệp không đọc được: chẳng có gì để ghi lại ngoài một khung trống.

Nếu việc ghi thất bại — một điểm gắn chỉ đọc, một tệp không thuộc về bạn — lý do của chính hệ thống sẽ hiện trong một thông báo.

Tệp rất lớn được hiện ở dạng cắt bớt, và dòng trạng thái nói rõ điều đó thay vì để bạn tự phát hiện — đặt cạnh các điều kiện khác chứ không lê phía sau các nút, vì đó cũng là một sự thật về tệp như những sự thật kia. Các ngưỡng được đo bằng một bộ dựng thật chứ không phỏng đoán — dàn một megabyte văn bản trong một khung sẽ giết luôn tiến trình dựng của Obsidian, và Markdown tốn gấp mấy lần mỗi byte so với văn bản thuần, nên hai bên có ngưỡng riêng và một dòng khổng lồ đơn lẻ vẫn bị rút ngắn ngay cả khi cả tệp vốn nhỏ.

**Các dòng trạng thái là nhãn, còn phần giải thích là chú giải khi rê chuột.** Mỗi dòng nêu điều đang đúng bằng ít chữ nhất có thể — *Ngoài kho*, *Không có trình sửa cho loại tệp này*, *Đã cắt bớt — tệp quá lớn* — vì các nút bên cạnh đã nói tệp đang ở trạng thái nào. Rê chuột lên một dòng sẽ cho cả câu: vì sao Obsidian không mở nó như ghi chú được, chuyện gì lẽ ra đã xảy ra với loại tệp này, việc cắt bớt lấy đi của bạn những gì.

Điều này cũng áp cho tệp **bên trong** kho của bạn. Obsidian giao thẳng mọi phần mở rộng nó không có khung xem cho ứng dụng mặc định của máy tính — nên một `.txt` hay `.json` trong kho sẽ rời khỏi Obsidian hoàn toàn. Giờ chúng mở trong cùng trình xem đó, với vòng viền cam, vì "mở nó trong Obsidian" chính là điều bạn yêu cầu — và vì là tệp trong kho, chúng sửa được ở đó mà không cần mở khóa. Tệp nhị phân không có trình xem vẫn giữ hành vi của Obsidian; chẳng có gì để hiện.

Bản xem trước mở **trong thẻ bạn đang ở**, nên lùi/tiến đưa bạn về ghi chú bạn vừa rời; giữ <kbd>Ctrl</kbd> để mở tab mới như mọi nơi khác. Thanh tiêu đề vẫn hiện đường dẫn của tệp bên ngoài suốt lúc nó mở, nên bạn có thể duyệt tiếp từ đó.

Một dòng lặng lẽ phía trên nội dung đưa ra các lối ra:

- **Mở trong *(kho)*** — hiện khi tệp thuộc về một trong các kho khác của bạn. Giao nó cho chính trình xử lý URI của Obsidian, thứ mở cửa sổ của kho đó với ghi chú nằm trong, như một ghi chú thật sự sửa được. Cửa sổ này được để nguyên hệt như trước; không gì chuyển đổi dưới chân bạn.
- **Xem dạng Markdown** / **Xem dưới dạng trang** / **Sửa dạng văn bản** — hai cách đọc mà tệp này có; cách cuối cũng gỡ chế độ chỉ đọc bên ngoài kho.
- **Mở bằng ứng dụng mặc định** — giao tệp cho ứng dụng mặc định của máy, kể cả các định dạng nhị phân mà trình xem này không hiện được. Diễn đạt y hệt mục tương ứng của chính Obsidian cho cùng hành động, vì đó là cùng một hành động.

Trình xem cũng phản hồi một **cú bấm chuột phải**: bên trong trình soạn thảo văn bản với *Cắt* / *Sao chép* / *Dán* / *Chọn tất cả*, và ở mọi nơi khác với menu riêng của tệp. Menu ba chấm của Obsidian trong tiêu đề cũng mang theo menu đó — bên ngoài kho nếu không sẽ chẳng còn gì ngoài *Chia đôi phải* và *Chia đôi dưới*.

Không gì bên ngoài kho của bạn bị ghi trừ khi bạn nhấn *Sửa dạng văn bản* trước. Xem mục [Ngoài kho](README.vi.md#ngoài-kho) trong README để có công bố đầy đủ.

## Thả một tệp vào một thư mục trong đường dẫn

Mọi thư mục trên hàng đều là đích thả, nên **một ghi chú được kéo vào một thư
mục sẽ chuyển tới đó** — con đường ngắn nhất là giữa một ghi chú và bất kỳ thư
mục nào phía trên nó, vì đích đến đã có sẵn trên màn hình. Kéo từ File
Explorer, từ danh sách thả xuống, từ chính tên ghi chú trên tiêu đề, hoặc từ
bất cứ nơi nào khác trong Obsidian tạo ra một tệp: đây là thao tác kéo của
chính ứng dụng, nên nhãn khi rê chuột, con trỏ và phần tô sáng đều là những gì
File Explorer vẽ ra.

**Tên kho cũng nhận một lượt thả**, vì nó là thư mục ở đầu hàng — cử chỉ duy
nhất đưa một ghi chú vào gốc kho từ đây.

**Cả một lựa chọn có thể được kéo cùng lúc**, và nó di chuyển như một khối:
nếu bất kỳ tệp nào trong đó không thể nhận, lượt thả bị từ chối thay vì di
chuyển một số và lặng lẽ bỏ qua phần còn lại.

Liên kết đi theo ghi chú, hệt như khi nó được di chuyển từ File Explorer hoặc
bằng cách gõ một đường dẫn.

Một thư mục **không thể nhận lượt thả sẽ không đưa ra gì cả** — không nhãn
*Move into*, không tô sáng thư mục — thay vì đưa ra thứ gì đó rồi thất bại;
câu trả lời riêng của Obsidian cho tiêu đề, *Open in this tab*, đứng ở đó
thay thế. Ba trường hợp:

- thư mục mà tệp **đã ở trong đó**, vì nó đã ở đó rồi;
- một thư mục được thả **vào chính nó hoặc vào con cháu của chính nó**, điều
  này sẽ khiến nó không còn nơi để xuất phát;
- một lựa chọn chứa **một thư mục và thứ gì đó bên trong nó**, vì di chuyển
  thư mục sẽ mang theo con của nó.

Một thư mục đã có sẵn **tệp cùng tên** vẫn nhận lượt thả và hỏi phải làm gì
với tệp đang chắn đường, với cùng hộp thoại như một tên bị chiếm được gõ hoặc
chọn — xem [Một tên đã bị chiếm](#một-tên-đã-bị-chiếm). Không có gì ở đây bị
ghi đè.

Chỉ các thư mục **bên trong kho của bạn** mới nhận lượt thả. Trong lúc hàng
đang trỏ ra ngoài kho, các đoạn của nó từ chối, vì đưa một ghi chú ra khỏi kho
sẽ phá vỡ mọi liên kết tới nó — một quyết định đáng để hỏi hơn là chỉ một cử
chỉ. Cách để làm điều đó một cách có chủ đích vẫn là gõ đường dẫn, việc này sẽ
hỏi trước và cho bạn biết bao nhiêu ghi chú sẽ bị ảnh hưởng.

## Thả văn bản hoặc một tệp để ghi nó xuống

Cùng những đích đó cũng nhận **nội dung** cũng như tệp, và hai thứ này được
phân biệt bởi những gì bạn đang kéo chứ không phải nơi bạn thả xuống.

**Vào một ghi chú mà hàng đã đặt tên** — tên của chính ghi chú, hoặc một dấu
phân cách mà thư mục của nó có một ghi chú thư mục — thì thứ bạn thả vào sẽ
được thêm vào cuối nó, sau một dòng trống. Nó hỏi trước, vì việc này ghi vào
một tệp đã tồn tại sẵn và kéo thả là một cử chỉ mà một bàn tay run có thể vô
tình tạo ra. Văn bản từ một trình soạn thảo, một tệp từ máy tính để bàn của
bạn và một ghi chú được kéo ra từ chính kho này đều hoạt động; một tệp được
đọc như văn bản, và một tệp nhị phân bị từ chối thay vì được dán vào như một
màn hình đầy vô nghĩa.

**Vào một nơi — tên kho hoặc một thư mục** — chưa có gì được ghi cả, vì chưa
có gì được đặt tên. Trường nhập mở ra ở đó chứa thứ bạn đã thả, và tên bạn gõ
là thứ quyết định việc ghi: một ghi chú mới được *tạo* chứa văn bản đó, và một
ghi chú đã có sẵn thì được hỏi y hệt như trên. <kbd>Esc</kbd>, hoặc bấm vào
nơi khác, sẽ hủy bỏ toàn bộ việc này.

**Hàng viền xanh** trong lúc một lượt kéo sẽ đáp xuống dưới dạng nội dung đang
ở trên nó, và giữ màu xanh trong khi trường nhập đang chứa một nội dung như
vậy — cùng một màu xanh, nói cùng một điều: điều xảy ra tiếp theo là về văn
bản bạn đang mang theo. Một tệp được kéo ra từ chính kho của bạn vào một thư
mục vẫn có nghĩa là *di chuyển nó tới đó*, vẫn giữ phần tô sáng riêng của
Obsidian, và không bao giờ viền xanh; cử chỉ đó đã có trước và nội dung nhường
bước trước nó.

## Khi đường dẫn dài hơn khung nhìn

Tên được **rút ngắn thay vì bị ép chặt**, theo thứ tự những gì bạn ít cần đến
nhất:

1. **Tên kho trước tiên**, cho đến khi chỉ còn biểu tượng của nó. Bạn biết
   mình đang ở kho nào; biểu tượng vẫn tiếp tục cho biết đường dẫn bắt đầu từ
   đâu.
2. **Rồi đến phần mở rộng của tệp**, nếu bạn đã bật nó lên — cùng ba ký tự
   xuất hiện trên gần như mọi tệp trong một kho. Nó bị bỏ hoàn toàn thay vì
   được rút ngắn: một nửa phần mở rộng không nói lên điều gì mà không có phần
   mở rộng cũng không nói.
3. **Rồi đến các thư mục, dài nhất trước.** Tên thư mục dài nhất rút ngắn
   xuống bằng độ dài của tên dài kế tiếp, rồi cả hai cùng nhau, và cứ thế, mỗi
   tên dừng lại ở mức sàn của nó — nên một thư mục rất dài từ bỏ mọi thứ nó
   hơn các thư mục khác trước khi một tên ngắn bên cạnh nó mất đi một chữ cái.
4. **Tên của chính tệp cuối cùng**, và nó giữ lại khoảng sáu ký tự. Đó là mục
   đích của tiêu đề.

Không gian được nhường lại **liên tục**, theo từng phần nhỏ của pixel chứ
không phải từng chữ cái một: một cái tên nhường bước bị cắt ngay tại pixel đó
và mờ dần dưới dấu `…` của nó, nên một khung được kéo chậm sẽ thu hẹp hàng một
cách mượt mà và không có gì phía sau nó di chuyển theo từng bước. Trước khi
bất kỳ chữ cái nào mất đi, khoảng trắng quanh các dấu phân cách được tiêu tốn
trước — đó là khoảng cách duy nhất của hàng và nó không tốn thông tin gì cả —
và một tên đã rút ngắn kết thúc ngay nơi dấu phân cách bắt đầu, không có dải
hộp trống nào giữa hai bên.

**Trường nhập giữ nguyên những gì nó chứa.** Mở một trường để gõ đường dẫn
không ép các thư mục bên cạnh nó tránh sang một bên: nó rộng bằng đúng văn bản
bên trong và lớn lên khi bạn gõ, nên phần còn lại của đường dẫn vẫn giữ mọi
thứ mà trường không cần. Chỉ khi không đủ chỗ cho cả hai thì hàng mới cuộn,
và khi đó trường nhập là thứ duy nhất không bao giờ nhường bước — đó là văn
bản đang được chỉnh sửa, không phải một cái tên đang được ép vừa.

Không gì bị cắt vượt quá mức cần để phân biệt nó với những cái tên bên cạnh:
`Projects2025` và `Projects2026` trong cùng một thư mục rút xuống thành
`…025` và `…026` thay vì thành một tiền tố khiến chúng trở thành cùng một từ,
trong khi `Reports` bên cạnh `Receipts` có thể rút xuống thành `Rep…`. Bên
cạnh đó, mọi tên đều giữ một **độ rộng có thể đọc được** — khoảng bằng bốn
chữ cái đối với một thư mục và sáu đối với tên tệp, được đo bằng chính phông
chữ mà hàng thực sự được vẽ lên chứ không phải đếm số ký tự. Bốn chữ cái hẹp
và bốn chữ cái rộng không phải là cùng một lượng tên, nên `lilliliillil`
được phép giữ lại nhiều phần của chính nó hơn `WWMMWWMMWWMM`, và những gì còn
lại trên màn hình có cùng kích thước dù là cách nào. Tên ngắn hoàn toàn không
bị động tới — một tên bị mài xuống thành `A…` là duy nhất nhưng vẫn không thể
đọc được. **Khoảng trắng không tính vào đó.** Sáu ký tự để nói tệp này là tệp
nào là sáu ký tự đáng đọc, nên các khoảng trắng giữa chúng được đi kèm miễn
phí và không bao giờ có một khoảng trắng bị bỏ lại sát cạnh dấu `…`, nơi nó
sẽ vô hình dù sao đi nữa.

**Một tên bị cắt ở bất cứ đâu mà các tên lân cận của nó đồng ý, và ở giữa khi
chúng không đồng ý ở đâu cả.** Hai thư mục tên `aaaa-common-one` và
`aaaa-common-two` chung nhau mọi thứ trừ ba ký tự cuối, nên cắt phần đuôi giữ
lại nửa không nói lên điều gì: chúng rút xuống thành `…one` và `…two` thay
vào đó, ngắn hơn *và* phân biệt được chúng. Nơi sự đồng ý nằm ở cuối —
`alpha-draft` bên cạnh `beta-draft` — thì phần cuối là thứ bị mất; nơi nó
nằm ở cả hai đầu, thứ còn lại là phần giữa. Một tên không có tên lân cận gần
nào mất đi phần giữa của nó, vì một cái tên mở đầu bằng nó là gì và kết thúc
bằng nó là cái nào — với một tệp, đó là phần mở rộng: `annual…2026.md`.

Một chuỗi chung ngắn không được tính. `parallel structures` tình cờ kết thúc
bằng cùng hai chữ cái với `Schemes` bên cạnh nó, và đó không phải là lý do để
giữ nguyên vẹn cả hai — ba ký tự từ đầu đã đủ để phân biệt chúng.

Không gì được xuống dòng thứ hai. Khi ngay cả những tên trung thực ngắn nhất
cũng không vừa, hàng **cuộn sang ngang**, đỗ ở đầu nơi tệp đang ở — tại điểm
đó không còn gì để nén lại, và cắt thêm nữa sẽ che giấu thay vì rút ngắn.
Bánh xe chuột cuộn nó ở bất cứ đâu con trỏ đang ở trên hàng, và cả hai đầu
đều có thể tiếp cận được: trong lúc cuộn, hàng canh về điểm bắt đầu của nó,
bất kể thiết lập căn chỉnh nói gì, vì nội dung được căn giữa trong một hộp
mà nó đã vượt quá sẽ tràn ra cả bên trái lẫn bên phải — và nửa đó hoàn toàn
không thể cuộn tới được.

**Trỏ vào một tên đã rút ngắn và nó hiện lại đầy đủ**, chừng nào bạn còn đang
trỏ vào nó, cuộn về mép trái để tất cả những gì hiện lại đều nằm trên màn
hình. **Bấm vào một tên và nó ở lại**: trường nhập mở ra hiển thị thư mục bạn
đã bấm, những gì được đề xuất sau nó và bất cứ gì bạn gõ, và nó tiếp tục hiển
thị chúng sau khi con trỏ đã di chuyển đi nơi khác. Tên vẫn giữ nguyên trong
lúc bạn đang cuộn hàng hoặc gõ vào trường nhập — một cái bung ra dưới một cử
chỉ nhằm mục đích đọc hàng sẽ đẩy mọi thứ phía sau nó ra khỏi tay bạn.

**Đoạn mở đầu luôn mang theo một chú giải, và đó là đường dẫn tuyệt đối** —
`/home/you/Vaults/Notes`, hoặc bất cứ nơi nào hàng bắt đầu. Đó là điều duy
nhất về hàng mà không gì trên màn hình có thể nói ra: cái tên cho bạn biết
*kho nào*, không bao giờ nó nằm ở đâu. Nó ở đó dù có phải rút ngắn gì hay
không.

Với **Hiển thị tên kho** tắt, cái tên không bị xóa đi, chỉ bị giữ ở mức
không — nên trỏ vào biểu tượng sẽ trả nó lại y hệt như cách trỏ vào một tên
mà hàng phải rút ngắn.

**Hiển thị phần mở rộng tệp** đặt lại phần mở rộng vào tên tệp trên hàng. Tắt
— mặc định — hàng đặt tên một ghi chú theo cách Obsidian đặt tiêu đề cho nó,
không có phần `.md` mà gần như mọi tệp trong một kho đều chung nhau; bật, nó
đặt tên theo cách hệ thống tệp làm, đó là điều bạn muốn khi kho chứa nhiều
hơn là ghi chú. Đó cũng là thứ thứ hai mà hàng từ bỏ khi không gian cạn kiệt,
ngay sau tên kho.
Một chú giải cho bạn phần còn lại: không chỉ tên mà mọi thứ hàng hiển thị bên
dưới nó, dưới dạng `…/name/folder/note.md`, nên một lần rê chuột trả lời cả
"đây là gì" lẫn "nó nằm dưới cái gì". Biểu tượng kho đặt tên kho của nó theo
cùng cách, khi tên bị tắt hoặc đã bị ép mất.

## Hai màu cảnh báo

| | Khi nào | Ý nghĩa |
| --- | --- | --- |
| Viền **đỏ** trên thanh đường dẫn | Hàng trỏ ra ngoài kho của bạn | Obsidian không thể mở thứ ở đó như một ghi chú, và không có gì ngoài đó được ghi cho tới khi bạn mở ổ khóa. |
| Viền **cam** trên thanh đường dẫn | Tệp là một loại văn bản mà Obsidian không có khung nhìn cho | Một cảnh báo. Obsidian sẽ giao nó cho ứng dụng mặc định của máy tính bàn của bạn; plugin hiển thị nó thay vào đó. |
| Chữ **đỏ** trong trường đang mở | Chưa có gì tại đường dẫn đó | <kbd>Enter</kbd> sẽ tạo ra nó thay vì mở nó. Không hẳn là một cảnh báo mà là một tuyên bố về việc phím bấm tiếp theo sẽ làm gì — xem [Gõ một đường dẫn](#gõ-một-đường-dẫn). |
| Ổ khóa **đỏ** thay cho nút chuyển đổi tên | Hàng trỏ ra ngoài kho của bạn và việc ghi ở đó vẫn đang bị khóa | Cùng màu đỏ như viền, vì cùng lý do: nó đánh dấu một sự từ chối. Bấm vào nó cho phép ghi ở đây và trả lại vị trí đó cho nút chuyển đổi — xem [Ghi bên ngoài kho](#ghi-bên-ngoài-kho). |

**Hai viền độc lập với nhau, và cả hai có thể cùng xuất hiện** — một tệp
`.json` bên ngoài vừa nằm ngoài kho của bạn *vừa* là một loại mà Obsidian
không có trình soạn thảo. Trong trình xem, chúng xuất hiện thành các dòng
riêng biệt, mỗi dòng chỉ nêu ra sự thật của riêng nó. Trên thanh đường dẫn,
đỏ thắng khi cả hai cùng áp dụng, vì hai viền cùng lúc sẽ chỉ là nhiễu. Chữ
*đỏ* là một thứ hoàn toàn thứ ba: nó nói về những gì đang được gõ, không phải
về nơi hàng đang trỏ tới, nên nó có thể xuất hiện bên trong một trong hai
viền hoặc không viền nào cả.

Tầng cam được cố tình thu hẹp. Các loại đã đăng ký (Markdown, canvas, hình
ảnh, PDF, âm thanh, video) được xử lý đúng cách và không nhận gì cả. Tệp nhị
phân cũng không nhận gì cả — bạn sẽ không vô tình chỉnh sửa một tệp `.zip`
thành một mớ hỗn độn. Những gì còn lại chính là mối nguy: một tệp `.json`,
`.css` hay `.log` mà **Hiển thị tất cả các loại tệp** đã làm cho hiển thị.
Danh sách thả xuống rộng hơn một cách cố ý: ở đó, mọi thứ không phải ghi chú
đều màu cam — xem [cách các mục trong danh sách được tô màu](#cách-các-mục-trong-danh-sách-được-tô-màu).

## Chế độ di chuyển/đổi tên

Nút bút chì ở tận cùng bên phải của tiêu đề — bên cạnh nút chế độ xem, cùng
kích thước với các nút gốc — chuyển đổi chế độ di chuyển/đổi tên. Bên ngoài
kho của bạn, một ổ khóa đỏ đứng thay vào vị trí đó cho tới khi bạn bấm vào
nó; xem [Ghi bên ngoài kho](#ghi-bên-ngoài-kho). Hàng tiêu đề khi đó
được viền bằng màu nhấn, hệt như đổi tên trong File Explorer. Cùng những cú
bấm và phím gõ đó giờ thực hiện một lần di chuyển hoặc đổi tên thông qua
`fileManager.renameFile` của Obsidian, nên mọi liên kết tới ghi chú đều đi
theo.

Trong lúc đổi tên:

- Tên tệp hiện tại được ghim vào danh sách thả xuống của mọi thư mục, nên
  việc di chuyển một ghi chú mà không đổi tên nó chỉ là một cú bấm duy nhất.
- Những tên đã bị chiếm trong thư mục đích được tô **đỏ** — một thư mục đã
  có sẵn tên đó, và một tệp mang tên đó — nên xung đột hiện ra trước khi bạn
  chọn. Chúng vẫn có thể được chọn: xem bên dưới.
- Đầu vào được xác thực trực tiếp theo đúng quy tắc đổi tên của chính
  Obsidian — cùng bộ ký tự, cùng thông báo, cùng chú giải đỏ bạn nhận được
  khi đổi tên trong cây tệp — nên một tên không hợp lệ được đánh dấu ngay
  khi bạn gõ và không thể được xác nhận.
- Bấm ra ngoài hàng tiêu đề, hoặc tiêu đề mất tiêu điểm, sẽ kết thúc chế độ
  đổi tên.

### Một tên đã bị chiếm

Di chuyển hoặc đổi tên vào một tên đã tồn tại sẵn **sẽ hỏi thay vì từ chối.**
Một hộp thoại mở ra với hai đường dẫn bạn có thể chỉnh sửa: tệp của bạn sẽ đi
đâu, và tệp đang chắn đường sẽ đi đâu — màu đỏ trong khi nó vẫn còn bị chiếm.
Mỗi đường dẫn cũng được vẽ theo cách thanh đường dẫn vẽ một đường dẫn, với
các phần khác nhau được tô màu và bị rút ngắn sau cùng, nên một đường dẫn
dài vẫn cho thấy điều gì thay đổi.

Cả hai trường đều có một danh sách. Trường thứ hai chứa những cách thoát
thông thường:

- **Đổi chỗ** — nó chuyển tới thư mục cũ của tệp bạn, dưới chính tên của nó.
- **Đổi tên cho nhau** — nó ở nguyên chỗ cũ và nhận tên cũ của tệp bạn.
- **Đổi cả hai** — nó nhận đường dẫn cũ của tệp bạn.
- `-1`, `-bak` và `-old` bên cạnh chính tên của nó.
- Hai cái tên mà các tệp đã có.

Danh sách đầu tiên đề xuất nơi tệp của bạn định tới, **Giữ nguyên chỗ cũ**,
chính tên của nó trong thư mục đích, và `-1`, `-bak` và `-old` bên cạnh nó.
Một lối thoát mà đường dẫn của nó đã bị chiếm sẽ bị làm mờ và không thể chọn
được. Chọn một lựa chọn **chỉ điền vào trường** — bạn vẫn có thể chỉnh sửa
nó — và **Áp dụng** di chuyển cả hai, cả liên kết lẫn mọi thứ; **Hủy** không
di chuyển gì cả. Chọn một tên đã bị chiếm từ danh sách thả xuống cũng hỏi
điều tương tự, và thả một ghi chú vào một thư mục đã có sẵn tên đó cũng vậy.

## Một phím cho cả hai kiểu đổi tên

Lệnh đổi tên (mặc định là <kbd>F2</kbd>, hoặc bất kỳ phím nào bạn đã gán lại) **luân phiên** giữa chức năng đổi tên inline title của Obsidian và thanh đường dẫn trên thanh tiêu đề của plugin này. Nếu bạn đã tắt inline title của Obsidian, thanh đường dẫn trên thanh tiêu đề trở thành đích duy nhất, nên phím này không bao giờ vô tác dụng.

Trong thanh đường dẫn, nó mở ra ở **tên không kèm phần mở rộng** — đây gần như luôn là phần cần sửa khi đổi tên, và cũng chính là phần được chọn khi bấm vào tên. Bấm lại lần nữa, nó làm điều mà <kbd>Tab</kbd> sẽ làm ở đó: trên tên, đó là nấc tiếp theo — tên kèm phần mở rộng, đường dẫn từ thư mục kho của bạn, đường dẫn từ gốc hệ thống; với thứ đang gõ dở, nó hoàn tất phần đó, giống như <kbd>Tab</kbd>.

**Vòng lặp khép lại ở tiêu đề.** Năm lần bấm đưa bạn đi hết một vòng — inline title, tên, tên kèm phần mở rộng, đường dẫn từ kho của bạn, đường dẫn từ gốc hệ thống — và lần thứ sáu lại là inline title. Lần bấm đó là lần duy nhất khác với <kbd>Tab</kbd>, vốn sẽ vòng lại đầu đường dẫn thay vào đó — và lần thứ bảy đi tới nơi mà vòng của <kbd>Tab</kbd> tới: gốc kho, với toàn bộ đường dẫn nằm trong ô và thư mục đầu tiên của nó được đánh dấu. Vậy nên mọi nấc mà <kbd>Tab</kbd> đạt tới, phím này cũng đạt tới.

Lệnh **Tập trung vào thanh đường dẫn** làm điều tương tự bên trong ô — bất cứ điều gì <kbd>Tab</kbd> sẽ làm — và ở chỗ <kbd>Tab</kbd> sẽ vòng lại, nó trả con trỏ về cho ghi chú thay vào đó. Lần bấm tiếp theo của nó chính là vòng lặp: gốc kho, thư mục đầu tiên được đánh dấu.

**Trong một ô đã đang mở sẵn**, phím này biến nó thành một lần đổi tên ngay tại chỗ — giữ nguyên văn bản, vị trí con trỏ và phần được chọn — và **Tập trung vào thanh đường dẫn** gỡ bỏ trạng thái đổi tên khỏi nó theo cách tương tự. **Bất cứ thứ gì khác** được bấm hoặc nhấp giữa các lần bấm sẽ khởi động lại một trong hai vòng lặp, nên một lần bấm sau khi bạn đã đang sửa không bao giờ rơi vào một nấc còn sót lại từ trước.

Ngoài kho, phím này cũng hoạt động — ở đó không có inline title, nên lần bấm đầu tiên đi thẳng đến thanh đường dẫn.

Cách này hoạt động bằng việc bọc lệnh `workspace:edit-file-title` thay vì giành lấy phím, nên cả việc gán lại phím tắt lẫn chạy lệnh từ bảng lệnh đều hoạt động y nguyên.

## Cách các mục trong danh sách được tô màu

| Màu | Ý nghĩa |
| --- | --- |
| **Tím** | Một ghi chú (`.md`, `.markdown`) — thứ mà Obsidian sẽ mở như một ghi chú, được chọn ra từ một thư mục chứa nội dung hỗn hợp |
| **Cam** | Không phải ghi chú — bất cứ thứ gì Obsidian sẽ không mở như một ghi chú, từ PDF đến `.txt`, và các mục `:page` đi cùng chúng. Một thư mục chứa nội dung hỗn hợp được đọc để tìm các ghi chú trong đó, và một màu duy nhất cho mọi thứ còn lại báo hiệu điều đó nhanh hơn là cảnh báo trên vài mục riêng lẻ; xem [hai màu cảnh báo](#hai-màu-cảnh-báo) |
| **Nhạt** | Ngoài kho của bạn, nên cách xử lý riêng của kho không áp dụng |
| **Xanh dương**, đậm | Nơi bạn đang đứng: ghi chú của chính thanh này, và thư mục mà thanh đường dẫn đang đứng trên đó. Trong chế độ đổi tên/di chuyển, mục *giữ nguyên tên này* thay chỗ cho ghi chú — dù cách nào cũng vẫn là cùng một ghi chú |
| **Đỏ** | Chỉ trong chế độ đổi tên/di chuyển: tên đã bị chiếm. Vẫn có thể chọn được — chọn một mục sẽ hỏi bạn muốn xử lý tệp đang chắn đường thế nào; xem [Một tên đã bị chiếm](#một-tên-đã-bị-chiếm) |

**Các thư mục được in đậm**, nên ghi chú riêng của một thư mục không cần màu riêng để nổi bật khỏi thư mục của nó: nó vẫn tím như bất kỳ ghi chú nào khác. Một **đường kẻ dọc theo mép hàng** đánh dấu các tên bắt đầu bằng thứ bạn đã gõ — xanh dương ở chỗ chúng còn trùng khớp thêm, xanh lá trên nhánh mà gợi ý đưa ra; xem [Gõ một đường dẫn](#gõ-một-đường-dẫn).

Ô nhập nhận cùng các màu đó cho thứ nó đang đặt tên — xem [Gõ một đường dẫn](#gõ-một-đường-dẫn).

## Quy tắc hiển thị

- Các tệp có phần mở rộng không được hỗ trợ chỉ xuất hiện trong danh sách nếu thiết lập **Detect all file extensions** của Obsidian đang bật — **bên trong kho**. Ngoài kho, thiết lập này không áp dụng: nó chi phối những gì kho lập chỉ mục, và không có gì ngoài đó nằm trong kho, nên một tệp `.txt` cạnh các ghi chú của bạn vẫn được liệt kê dù thế nào đi nữa.
- Danh sách hiển thị tối đa 1.000 mục, gấp mười lần giới hạn của Obsidian. Khi một thư mục có nhiều hơn, hàng cuối cùng cho biết bao nhiêu mục bị bỏ sót; gõ tiếp để thu hẹp danh sách.
- Các tệp và thư mục ẩn (dot-file, dot-folder) chỉ xuất hiện nếu thiết lập **Hiển thị tệp ẩn** của plugin này đang bật.
- **Việc bảo vệ chống ghi đè hoạt động y hệt bất kể khả năng hiển thị** — một tệp bị ẩn vẫn ngăn bạn ghi đè lên nó.

## Bảng tra nhanh

Một đường dẫn **được bọc trong dấu ngoặc kép** sẽ được tự động bỏ ngoặc cho bạn. Tính năng *Copy as path* của Windows đưa ra `"C:\Users\you\note.md"`, kèm cả dấu ngoặc kép, và một shell cũng làm vậy với bất kỳ đường dẫn nào có khoảng trắng; dán vào hay gõ tay đều hoạt động như nhau. Chỉ dấu ngoặc kép, và chỉ khi xuất hiện thành một cặp khớp nhau bao quanh toàn bộ — nó không thể xuất hiện trong một tên thật, nơi mà dấu nháy đơn thì hoàn toàn có thể.

| Bạn muốn… | Làm thế này |
| --- | --- |
| Mở một thư mục (ghi chú của nó, hoặc hiện nó ra) | Bấm vào dấu phân cách **sau** thư mục đó |
| Cho một thư mục một ghi chú thư mục mà nó chưa có | **Bấm đúp** vào chính dấu phân cách đó (cần một plugin ghi chú thư mục) |
| Đổi một thư mục lấy một anh em | Bấm vào tên thư mục đó, rồi gõ hoặc chọn |
| Đổi tên hoặc đổi đích của ghi chú | Bấm vào tên ghi chú — kể cả phần mở rộng |
| Duyệt nội dung của một thư mục | Bấm vào tên thư mục đó; danh sách liệt kê thư mục cha của nó, nên hãy bấm vào thư mục **bên dưới** thư mục bạn muốn |
| Gõ lại một thư mục và mọi thứ bên dưới nó | **Bấm đúp** vào tên thư mục đó, rồi gõ |
| Sửa đường dẫn từ một thư mục trở xuống | Bấm vào tên thư mục đó, rồi <kbd>→</kbd> để bỏ chọn |
| Nhảy tới một tệp bằng cách gõ đường dẫn của nó | Bấm vào tên tệp hoặc khoảng trống, gõ, <kbd>Enter</kbd> |
| Mở một tệp trong tab mới thay vào đó | <kbd>Ctrl</kbd> trong lúc chọn nó, hoặc <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| Sao chép ghi chú đi đâu đó thay vì di chuyển nó | Bấm bút chì, rồi <kbd>Ctrl</kbd> trong lúc chọn hoặc xác nhận đích |
| Tạo một ghi chú tại một đường dẫn chưa tồn tại | Gõ đường dẫn — ô sẽ chuyển sang **đỏ** khi không còn mục nào trong danh sách khớp với nó — rồi <kbd>Enter</kbd>. Bên trong kho, nó được tạo ngay lập tức; bên ngoài kho, nó hỏi trước |
| Biết được một đường dẫn bạn vừa gõ đã tồn tại chưa | Nhìn màu sắc: nó mang màu của hàng mà nó đặt tên, và màu đỏ nghĩa là <kbd>Enter</kbd> sẽ tạo ra nó |
| Đi xuống một cấp trong lúc gõ | Gõ `/` |
| Quay lên một cấp trong lúc gõ | <kbd>Backspace</kbd> khi ô nhập đang rỗng |
| Đưa các thư mục đứng trước ô vào trong ô | <kbd>←</kbd> ở đầu ô để lấy một; <kbd>Shift</kbd>+<kbd>Home</kbd>, hoặc <kbd>Home</kbd> khi danh sách đã đóng, để lấy tất cả |
| Di chuyển hoặc đổi tên ghi chú đang mở | Bấm bút chì, rồi duyệt hoặc gõ như trên |
| Di chuyển vào một tên đã bị chiếm | Cứ xác nhận: hộp thoại cho phép bạn hoán đổi vị trí, tên, hoặc cả hai, hoặc đặt cho tệp đang chắn đường một tên khác |
| Di chuyển mà không đổi tên | Bút chì → bấm vào thư mục đích → chọn tên tệp hiện tại đã được ghim |
| Đổi tên tại chỗ | <kbd>F2</kbd> hai lần (lần bấm đầu vào inline title, lần thứ hai vào thanh tiêu đề) |
| Nhảy sang một kho khác, home hoặc một ổ đĩa | Bấm vào tên kho |
| Mở một tệp từ ngoài kho | Tên kho → chọn một vị trí → duyệt → chọn tệp (chỉ đọc cho tới khi *Sửa dạng văn bản*) |
| Hoàn tất tên đang gõ dở | <kbd>Tab</kbd>, hoặc <kbd>End</kbd> cho gợi ý được đưa ra; <kbd>→</kbd> lấy một ký tự của nó |
| Đi vào bên trong, khi chỉ còn lại một tên | <kbd>Tab</kbd> lần nữa |
| Lùi lại một bước, hoặc rời khỏi thư mục | <kbd>Shift</kbd>+<kbd>Tab</kbd> |
| Lấy toàn bộ đường dẫn, hoặc đường dẫn hệ thống | <kbd>Tab</kbd> quá điểm cuối, hoặc bấm bốn lần |
| Sao chép một tên, một đường dẫn, hoặc một đường dẫn hệ thống | Bấm chuột phải vào nó hai lần; khoảng trống ba lần cho đường dẫn hệ thống |
| Truy cập những gì trình quản lý kho cung cấp cho kho này | Bấm chuột phải vào biểu tượng ở đầu hàng |
| Sao chép ID của kho | Bấm chuột phải vào biểu tượng ở đầu hàng |
| Mở một kho khác mà bạn đã duyệt qua | Bấm chuột phải vào tên nó ở đầu hàng |
| Xem phần mở rộng của tệp trên hàng | Bật **Hiển thị phần mở rộng tệp** trong thiết lập |
| Mở một đoạn thư mục trong tab mới | <kbd>Ctrl</kbd> hoặc bấm chuột giữa vào nó, hoặc kéo nó lên thanh tab |
| Truy cập thanh đường dẫn từ bàn phím | Gán *Tập trung vào thanh đường dẫn* trong Phím tắt |
| Mở một địa chỉ web hoặc một liên kết `obsidian://` | Gõ nó vào thanh và bấm <kbd>Enter</kbd> |
| Hủy bất cứ điều gì | <kbd>Esc</kbd>, hoặc bấm ra ngoài thanh tiêu đề |
| Thử các mục cho vừa ý trước khi xác nhận | Dùng mũi tên hoặc di chuột qua danh sách; <kbd>↑</kbd> quá đầu danh sách trả lại văn bản của bạn |
| Di chuyển một ghi chú vào một thư mục nằm phía trên nó | Kéo nó lên thư mục đó trong hàng |
| Giữ lại một đoạn văn bản như một ghi chú mới | Kéo văn bản lên một thư mục, gõ một tên, <kbd>Enter</kbd> |
| Thêm một đoạn văn bản vào ghi chú bạn đang đọc | Kéo nó lên tên của ghi chú, xác nhận |
| Xem đầy đủ một tên thư mục bị rút gọn | Di chuột qua nó, hoặc mở rộng khung |
| Tìm hiểu xem chính kho đó nằm ở đâu | Di chuột qua biểu tượng ở đầu hàng |
| Đưa một ghi chú ra khỏi kho | Bút chì → duyệt ra ngoài → xác nhận hộp thoại (các liên kết sẽ bị đứt) |
| Cho phép ghi bên ngoài kho của bạn | Bấm vào **ổ khóa đỏ** trên thanh tiêu đề; công tắc đổi tên sẽ thay vào chỗ nó |
| Khóa lại | Bấm vào công tắc cho tới khi ổ khóa quay lại — một lần bấm để vào, một lần bấm để ra |
| Xóa một tệp ngoài kho | Mở ổ khóa, rồi bấm chuột phải vào tệp: *Delete* sẽ chuyển nó vào thùng rác hệ thống của bạn |

## Thiết lập

| Thiết lập | Tùy chọn | Mặc định | Chức năng |
| --- | --- | --- | --- |
| **Language** | Mặc định của Obsidian, hoặc bất kỳ ngôn ngữ nào trong 46 ngôn ngữ | Mặc định của Obsidian | Ngôn ngữ mà văn bản của plugin này dùng. *Mặc định của Obsidian* theo ngôn ngữ được đặt trong thiết lập Appearance, là điều mà hầu như ai cũng muốn. Bản thân hàng này — tên của nó, mô tả của nó, và *Mặc định của Obsidian* — luôn giữ nguyên tiếng Anh dù chọn gì, vì đó là lối thoát trở lại từ một ngôn ngữ bạn không đọc được. Tiếng Hy Lạp và tiếng Phạn được dịch ở đây và vắng mặt trong danh sách của chính Obsidian, nên thiết lập này là cách duy nhất để tiếp cận chúng. |
| **Alignment** | Left / Center / Right | Left | Vị trí đường dẫn trên thanh tiêu đề nằm trong hàng tiêu đề. *Center* khớp với giao diện cổ điển của Obsidian. |
| **Delimiter** | Bất kỳ ký tự nào | `/` | Ký tự phân cách được vẽ giữa các đoạn. Sáu mẫu bấm một lần (`/ > ▸ › \ •`) nằm trước ô văn bản. |
| **Show vault name** | On / Off | On | Liệu bản thân kho có phải là đoạn đầu tiên của đường dẫn trên thanh tiêu đề hay không. Khi tắt, đoạn đó trở thành một biểu tượng 🏠 thay vì biến mất, nên đường dẫn vẫn bắt đầu từ một nơi có thể bấm được. |
| **Folder name opens the dropdown** | On / Off | On | Hoán đổi chức năng của tên thư mục và dấu phân cách sau nó — xem [bảng ở trên](#đường-dẫn-trên-thanh-tiêu-đề). Với [Folder notes](obsidian://show-plugin?id=folder-notes), dấu phân cách sẽ mở ghi chú thư mục. Không bao giờ áp dụng trong chế độ đổi tên/di chuyển. |
| **Show dot files** | On / Off | Off | Liệu các tệp và thư mục ẩn có được liệt kê trong danh sách hay không. Việc bảo vệ chống ghi đè áp dụng dù thế nào đi nữa. |
| **Show all file types** | — | — | Đây không phải thiết lập của plugin này mà là của Obsidian, được nêu ở đây vì nó trả lời cùng một câu hỏi: kho của bạn chỉ lập chỉ mục các loại tệp mà nó được yêu cầu, và chỉ những gì nó lập chỉ mục mới có thể được liệt kê. Hãy tìm nó trong thiết lập của Obsidian và bật lên để thấy mọi tệp; nút bên cạnh hàng này mở trang đó với thiết lập được cuộn tới và nhấp nháy, giống như khi bấm vào nó từ ô tìm kiếm của chính thiết lập. Ngoài kho, thiết lập này không áp dụng, vì ngoài đó vốn chẳng có gì được lập chỉ mục cả. |
| **Show file extensions** | On / Off | Off | Liệu tên tệp trên hàng có mang theo phần mở rộng hay không. Khi tắt, nó bị bỏ đi — giống như cách Obsidian bỏ nó khỏi tiêu đề của một ghi chú. Khi bật, hàng đặt tên tệp theo đúng cách hệ thống tệp làm. Dù thế nào đi nữa, phần mở rộng là thứ thứ hai bị bỏ đi khi hàng hết chỗ, ngay sau tên kho. |
| **Access external files** | On / Off | **Off** | Liệu tên kho có mở danh sách các vị trí hay không. Khi tắt, không thứ gì trong plugin từng nhìn ra ngoài kho này. |
| **Hotkeys** | nút | — | Mở mục *Hotkeys* của Obsidian, đã lọc theo plugin này, nơi *Tập trung vào thanh đường dẫn* có thể được gán một phím. |

## Thay thế các biểu tượng

Lure vẽ ba biểu tượng: biểu tượng gốc kho (khi **Show vault name** tắt), công tắc đổi tên/di chuyển, và ổ khóa đứng thay chỗ nó trong lúc việc ghi bên ngoài kho đang bị khóa. Tất cả đều có thể được thay thế từ một theme hoặc một đoạn CSS — đặt ký hiệu thay thế và ẩn ký hiệu có sẵn trong một quy tắc duy nhất:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* Chỉ từng hiển thị ở trạng thái đóng: mở nó ra sẽ trao chỗ đó lại cho công tắc đổi tên. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}
```

`--lure-icon-glyph` nhận mọi giá trị hợp lệ trong `content` của CSS, nên `url(...)` dùng cho ảnh cũng được như một ký hiệu văn bản hay emoji. Cứ để nguyên `--lure-icon-svg` nếu muốn giữ biểu tượng Lucide và vẽ ký hiệu của bạn bên cạnh nó.
