<!-- Bản dịch của CHANGELOG.md — trạng thái: commit 2cbb237.
     Dịch máy (Claude Opus 5), chưa được người bản ngữ hiệu đính.
     Rất hoan nghênh mọi đính chính; bản tiếng Anh của CHANGELOG là bản
     chuẩn. -->

[English](../../CHANGELOG.md) · [العربية](CHANGELOG.ar.md) · [አማርኛ](CHANGELOG.am.md) · [Беларуская](CHANGELOG.be.md) · [বাংলা](CHANGELOG.bn.md) · [Català](CHANGELOG.ca.md) · [Čeština](CHANGELOG.cs.md) · [Dansk](CHANGELOG.da.md) · [Deutsch](CHANGELOG.de.md) · [Ελληνικά](CHANGELOG.el.md) · [Español](CHANGELOG.es.md) · [فارسی](CHANGELOG.fa.md) · [Suomi](CHANGELOG.fi.md) · [Français](CHANGELOG.fr.md) · [Gaeilge](CHANGELOG.ga.md) · [עברית](CHANGELOG.he.md) · [Magyar](CHANGELOG.hu.md) · [Bahasa Indonesia](CHANGELOG.id.md) · [Italiano](CHANGELOG.it.md) · [日本語](CHANGELOG.ja.md) · [ქართული](CHANGELOG.ka.md) · [ភាសាខ្មែរ](CHANGELOG.kh.md) · [한국어](CHANGELOG.ko.md) · [Latviešu](CHANGELOG.lv.md) · [Bahasa Melayu](CHANGELOG.ms.md) · [नेपाली](CHANGELOG.ne.md) · [Nederlands](CHANGELOG.nl.md) · [Norsk](CHANGELOG.no.md) · [Polski](CHANGELOG.pl.md) · [Português](CHANGELOG.pt.md) · [Português (Brasil)](CHANGELOG.pt-BR.md) · [Română](CHANGELOG.ro.md) · [Русский](CHANGELOG.ru.md) · [संस्कृतम्](CHANGELOG.sa.md) · [Slovenčina](CHANGELOG.sk.md) · [Shqip](CHANGELOG.sq.md) · [Српски](CHANGELOG.sr.md) · [Svenska](CHANGELOG.sv.md) · [ไทย](CHANGELOG.th.md) · [Türkçe](CHANGELOG.tr.md) · [Українська](CHANGELOG.uk.md) · [Oʻzbekcha](CHANGELOG.uz.md) · **Tiếng Việt** · [简体中文](CHANGELOG.zh.md) · [繁體中文](CHANGELOG.zh-TW.md)

# Nhật ký thay đổi

Mọi bản phát hành của Lure, mới nhất ở trên cùng. Những gì đã được đưa vào kể từ bản phát hành gần nhất nằm dưới mục *Chưa phát hành*. Số phiên bản không có tiền tố `v`, khớp với các thẻ phát hành.

## 1.4.0 — 2026-09-19[^1.4.0]

### Đã thêm

- **Một hàng Phím tắt trong phần cài đặt.** Nút của nó mở *Phím tắt* của Obsidian đã lọc theo plugin này, nơi có thể gán phím cho *Tập trung vào thanh đường dẫn* — lệnh vốn không đi kèm phím nào.
- **Thanh đường dẫn trên những ngăn không chứa tệp.** Một tab trống hiển thị `vault / :blank`, đồ thị là `vault / :graph`, và bất kỳ chế độ xem nào khác không có gì để đặt tên sẽ có nhãn `:` riêng — tab của một plugin trang chủ hiển thị `:home-launcher`. Trường nhập bên cạnh là một thanh địa chỉ: gõ một đường dẫn rồi nhấn <kbd>Enter</kbd> để mở nó trong ngăn đó, hoặc tạo mới. Trước đây hàng này để trống — plugin ẩn tiêu đề của Obsidian và không đặt gì vào chỗ đó.
- **Một trang có thể được gõ vào chứ không chỉ được chọn** — `:graph` và các trang khác là một địa chỉ, không chỉ là một mục trong danh sách. Dấu hai chấm không bắt đầu tên tệp nào, nên gõ nó ở bất cứ đâu sẽ gọi chúng ra, và trường nhập mang màu của chúng thay vì đề nghị tạo một ghi chú không thể có tên như vậy.
- **Một hàng cho *Hiển thị tất cả các loại tệp* của Obsidian**, bên cạnh quy tắc tệp dấu chấm, vì cả hai cùng quyết định danh sách thả xuống được phép liệt kê những gì: hàng này bảo bạn tìm thiết lập đó trong phần cài đặt của chính Obsidian và bật nó lên để thấy mọi tệp, còn nút bên cạnh mở trang đó với thiết lập được cuộn tới và nháy sáng, như một kết quả tìm kiếm trong cài đặt. Được gọi tên bằng chính từ ngữ của Obsidian, được giải thích bằng 45 ngôn ngữ.
- **Gốc kho liệt kê các trang mà một ngăn có thể chứa** — `:graph`, `:search`, và mọi chế độ xem mà các plugin của bạn đăng ký, trong đó có tab trang chủ hay lịch. Chọn một trang và ngăn sẽ mở nó, như khi chọn một ghi chú thì ghi chú được mở. Các chế độ xem chỉ tồn tại để hiển thị một tệp thì bị loại ra, vì chúng sẽ không có gì để hiển thị.
- **Dấu phân cách của chính kho mở trang bắt đầu của bạn**, nếu có plugin cung cấp, và được gạch chân để cho biết điều đó; lần nhấn tiếp theo thu gọn cây tệp, và lần nhấn sau đó khôi phục đúng những gì đang mở. Nếu không có plugin như vậy thì lần nhấn đầu tiên thu gọn, như trước.
- **Gõ đường dẫn từ gốc hệ thống tệp.** Dấu `/` đứng trước một trường trống sẽ mở một đường dẫn như vậy thay vì bị nuốt mất, mọi dấu gạch chéo sau đó trong trường đều thuộc về nó, và danh sách thả xuống liệt kê máy tính thay vì kho.

### Đã thay đổi

- **F2 và Tập trung vào thanh đường dẫn nhấn Tab bên trong trường nhập.** Bất cứ điều gì Tab sẽ làm ở đó — nấc kế tiếp, hoàn tất những gì bạn đã gõ, bước vào một thư mục — chúng cũng làm như vậy; chỉ khi Tab quay vòng về đầu đường dẫn thì chúng mới thoát ra, F2 sang tiêu đề nội tuyến, còn lệnh sang ghi chú. Trước đây, với một trường bạn đã gõ vào, F2 khiến việc chỉnh bắt đầu lại từ tên và lệnh thì đóng trường.
- **Bước sau khi chu trình thoát ra là thư mục gốc.** Lần nhấn sau khi F2 quay về tiêu đề nội tuyến, hoặc sau khi lệnh quay về ghi chú, sẽ đến chỗ mà vòng quay của Tab đến — gốc kho, toàn bộ đường dẫn nằm trong trường, thư mục đầu tiên được đánh dấu — nên không còn bước nào của vòng bị bỏ lại chỉ dành cho Tab.
- **Tập trung vào thanh đường dẫn đi như F2.** Nó mở ở tên thay vì toàn bộ đường dẫn, đi qua cùng bốn nấc, và lần nhấn sau nấc cuối cùng đóng trường và đặt con trỏ trở lại trong ghi chú — trước đây nó quay vòng các nấc mãi mãi và phím duy nhất đến được hàng này lại không thể rời khỏi nó.
- **Tên đã bị dùng được báo khi bạn dùng nó, không phải khi bạn đang gõ.** Mọi tên được gõ để tiến tới `Notes.md` đều đi qua những tên có thể là tệp riêng, và cảnh báo từng nháy lên rồi biến mất theo từng chữ cái. Điều gì sai trong cách viết một tên vẫn được báo ngay khi nó được viết ra.
- **Dấu phân cách mà ghi chú thư mục của nó đã mở sẽ hiển thị thư mục** thay vì mở lại thứ đang có trên màn hình — đó chính là ý nghĩa của lần nhấn thứ hai của nó từ trước đến nay.
- **Vị trí bạn đang đứng được in đậm trong danh sách thả xuống**, không chỉ màu xanh dương.
- **Mọi thứ không phải ghi chú đều màu cam trong danh sách thả xuống**, không chỉ các loại văn bản mà Obsidian không có chế độ xem. Màu tím chọn ra các ghi chú trong một thư mục có nội dung hỗn hợp; một màu cho phần còn lại nói lên điều tương tự nhanh hơn.

### Đã sửa

- **Nhấn Backspace qua một thư mục đã nhấp không còn làm mất tên kho.** Dấu gạch chéo còn lại ở đầu bị hiểu là đường dẫn từ gốc của máy, điều này làm rỗng đoạn mở đầu — và đóng trường bằng Escape không bao giờ khôi phục nó, nên tab mất tên kho và biểu tượng vĩnh viễn. Dấu gạch chéo đứng đầu giờ chỉ được tính là của máy khi thư mục đầu tiên của nó thật sự tồn tại, và đoạn mở đầu trở lại với mọi cách thoát khỏi trường.
- Bên ngoài kho, các tệp bị ẩn trừ khi bật **Phát hiện tất cả phần mở rộng tệp** của Obsidian — một thiết lập về những gì kho lập chỉ mục, lại được áp dụng cho các thư mục không nằm trong kho. Một tệp `.txt` cạnh các ghi chú của bạn giờ được liệt kê ở ngoài đó dù thiết lập ra sao.
- Danh sách thả xuống của tên kho không làm gì trên một ngăn không chứa tệp, đúng là ngăn mà bạn sẽ dùng để đi tới nơi khác.
- Nhấp vào tên kho để lại tiêu đề của chính Obsidian đứng cạnh đường dẫn trong trường nhập, bị làm mờ, ở nơi nó không xuất hiện vào bất kỳ lúc nào khác: hàng tự đo mình theo những gì nó đã vẽ, và ở thời điểm đó nó đã tự làm rỗng để nhường chỗ cho trường nhập.

- Nhấp vào khoảng trống mở trường nhập rồi làm mất nó: việc hiển thị ghi chú trong Trình khám phá tệp lấy mất con trỏ, nên trường đứng mở và được đánh dấu trong khi mọi lần gõ phím đều đi vào cây tệp.
- Nấc hiển thị đường dẫn từ gốc hệ thống vẽ một vệt của cùng đường dẫn đó bên cạnh trường, không được co vừa, khiến một đường dẫn sâu bị vẽ chồng lên chính nó.

## 1.3.0 — 2026-09-17[^1.3.0]

### Đã thêm

- **Đưa một tệp từ bên ngoài vào kho.** Di chuyển hoặc sao chép một tệp từ bất kỳ đâu trên ổ đĩa tới một đường dẫn bên trong kho; tệp đến nơi như một ghi chú thật, và khi di chuyển, bản gốc chỉ bị xóa sau khi việc sao chép đã thành công.
- **Thả văn bản hoặc một tệp lên thanh để ghi nó lại.** Thả lên một thư mục: một ghi chú mới trong thư mục đó, với tên do bạn gõ. Thả lên tên ghi chú, hoặc lên dấu phân cách của một thư mục có ghi chú thư mục: nội dung được nối vào cuối ghi chú đó, sau một bước xác nhận.
- **Tạo ghi chú thư mục** bằng lần nhấn thứ hai vào bất cứ thứ gì mở thư mục, khi có một plugin ghi chú thư mục đang chạy và thư mục chưa có ghi chú. Ghi chú được đặt ở nơi mà thiết lập riêng của [Folder notes](https://github.com/LostPaul/obsidian-folder-notes) quy định.
- **Kéo một thư mục từ thanh đường dẫn thả lên thanh tab** để mở nó ở đó: ghi chú thư mục của nó nếu có, nếu không thì một tab đứng tại thư mục đó.
- **Con lăn chuột duyệt danh sách.** Trên một tên, lần lăn đầu tiên mở danh sách của tên đó và mỗi lần lăn sau di chuyển vùng tô sáng một hàng. Một hàng đang cuộn ngang thì vẫn giữ con lăn để cuộn.
- **Dùng phím mũi tên đi quá đầu ô nhập** để đưa thư mục đứng trước vào: <kbd>←</kbd> cho một thư mục, <kbd>Shift</kbd>+<kbd>Home</kbd> (hoặc <kbd>Home</kbd> khi danh sách đang đóng) cho tất cả.
- **Ô nhập mang màu của thứ nó gọi tên**, giống màu của hàng đó trong danh sách, và chuyển sang đỏ khi không còn gì khớp với nó — đúng lúc <kbd>Enter</kbd> sẽ tạo ra một thứ mới thay vì mở nó.
- **Ghi chú thư mục có màu xám trong danh sách**, để chúng được nhận ra là thuộc về thư mục chứ không phải thêm một ghi chú bình thường.
- **Bấm chuột giữa vào một dấu phân cách** để mở thư mục đó trong tab mới: ghi chú thư mục của nó, hoặc một tab đứng tại thư mục đó.

### Đã thay đổi

- **Ổ khóa và nút bật đổi tên giờ là một nút điều khiển.** Ngoài kho, một ổ khóa đỏ đang đóng nằm thế chỗ nút bật; mở nó ra thì chỗ đó được trả lại cho nút bật, và rời chế độ đổi tên thì ổ khóa đóng lại.
- **Phím đổi tên cũng hỏi đến ổ khóa.** Ngoài kho, nhấn một lần sẽ làm ổ khóa nhấp nháy; nhấn lần thứ hai trong vòng nửa giây sẽ cấp những quyền mà ổ khóa cấp và mở chế độ đổi tên.
- **Phím đổi tên đi trọn một vòng** — tiêu đề nội tuyến, tên, tên kèm phần mở rộng, đường dẫn tính từ kho, đường dẫn tính từ gốc hệ thống — và lần nhấn kế tiếp lại là tiêu đề nội tuyến.
- **Bấm <kbd>Ctrl</kbd> và bấm chuột giữa không còn đồng nghĩa.** Một cách mở tab và chuyển tới đó, cách kia mở tab ở chế độ nền.
- **Bấm chuột phải vào tên ghi chú mở menu riêng của tệp.**
- **Danh sách cao hết mức cửa sổ cho phép**, thay vì cố định 300 pixel như của Obsidian.
- **Bấm vào một thư mục khi ô nhập đang mở vẫn giữ toàn bộ đường dẫn phía sau nó**, và bấm vào một thư mục bên trong ô nhập sẽ liệt kê đầy đủ nội dung của thư mục đó.
- **Dấu phân cách mở ghi chú thư mục ở mọi độ sâu** khi Folder notes đang chạy, và được gạch chân ở bất cứ đâu có ghi chú thư mục. Trước đây chỉ thư mục cấp cao nhất mới hoạt động. Với các plugin ghi chú thư mục khác, dấu phân cách vẫn hiện thư mục như trước.

### Đã sửa

- **Một ô nhập đang mở tồn tại lâu hơn tệp của nó.** Chuyển sang ghi chú khác khi thanh đường dẫn đang mở khiến hàng vẫn hiện tên tệp cũ suốt phần còn lại của phiên làm việc.
- **Xóa, Đổi tên và Tạo bản sao bị từ chối ở ngoài kho** dù ổ khóa đã mở, và không bao giờ dùng được cho hình ảnh, PDF và trang web.
- **<kbd>Ctrl</kbd>+<kbd>Enter</kbd> không làm gì khi danh sách đang mở** — mà mọi ô nhập đều mở ra cùng danh sách.
- **<kbd>Enter</kbd> khi danh sách đang mở nhưng không có mục nào được tô sáng** không làm gì; giờ nó xác nhận những gì bạn đã gõ.
- **Một hàng bị tràn trong khi mọi tên đã ở dạng ngắn nhất thì không cuộn được**, khiến phần cuối đường dẫn không thể với tới.
- **Tắt plugin để lại một nút chết** trên thanh tiêu đề của mọi ghi chú mà nó đã can thiệp.

## 1.2.0 — 2026-08-25[^1.2.0]

### Đã thêm

- **Thiết lập ngôn ngữ.** Mặc định Lure theo ngôn ngữ của Obsidian, và có thể đặt sang bất kỳ ngôn ngữ nào plugin có. Đây cũng là cách duy nhất để dùng bản dịch tiếng Hy Lạp và tiếng Phạn, vốn Obsidian không cung cấp. Nhãn của chính thiết lập này vẫn giữ tiếng Anh, để luôn tìm lại được nó dù bạn đang ở một ngôn ngữ mình không đọc được.

## 1.1.2 — 2026-08-25[^1.1.2]

### Đã thay đổi

- **Stylesheet nhẹ hơn.** Hàng không còn dùng selector `:has()` hay phần lớn các quy tắc `!important`. Nó tự căn lại với ít công việc hơn, và số cảnh báo khi duyệt plugin giảm từ 56 xuống 7.

## 1.1.1 — 2026-08-22[^1.1.1]

### Đã sửa

- **Một tên thư mục ngắn có thể bị vẽ với một khoảng trống ở giữa** — `atlas` thành `atl as` — vì khoảng dành cho dạng rút ngắn của nó rộng hơn chính cái tên.

## 1.1.0 — 2026-08-22[^1.1.0]

### Đã thêm

- **Quy ước bấm chuột phải.** Nhấn một lần mở menu; hai và ba lần chép lần lượt nhiều hơn — tên, tên kèm phần mở rộng, đường dẫn. Các menu trên hàng giờ khớp từng mục với menu của Trình duyệt tệp.
- **Menu ngoài kho.** Các hàng trong danh sách và trình xem tệp bên ngoài cung cấp mở tệp, *Sao chép đường dẫn* và *Hiển thị trong thư mục*; khi ổ khóa đã mở thì có thêm *Ghi chú mới*, *Thư mục mới*, *Tạo bản sao*, *Đổi tên…* và *Xóa*. Xóa sẽ chuyển vào thùng rác hệ thống và không bao giờ xóa vĩnh viễn.
- **Mở ở nơi khác.** <kbd>Ctrl</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> và bấm chuột giữa trên tên ghi chú hoặc một thư mục sẽ mở nó trong tab mới, khung chia hoặc cửa sổ mới. Cả hai đều kéo được, như các hàng tương ứng trong Trình duyệt tệp.
- **Kéo ghi chú thả lên thanh để di chuyển chúng.** Thả một ghi chú, nhiều ghi chú hoặc một thư mục lên một đoạn thư mục hoặc tên kho.
- **Lệnh: Tập trung vào thanh đường dẫn**, với toàn bộ đường dẫn được chọn — không có phím tắt mặc định, hãy tự gán.
- **Gõ một URL** vào thanh đường dẫn: `http(s)://` và `obsidian://` mở như liên kết, `file://` và đường dẫn mã hóa phần trăm mở tệp.
- **Hoàn thành bằng Tab**, theo cách của shell: mỗi lần nhấn hoàn thành đến chừng nào các tên trong thư mục còn trùng nhau và dừng ở chỗ chúng khác nhau. <kbd>Shift</kbd>+<kbd>Tab</kbd> đi ngược lại. Khi không còn gì để hoàn thành, <kbd>Tab</kbd> chuyển sang mở rộng vùng chọn: tên, tên kèm phần mở rộng, đường dẫn tính từ kho, đường dẫn tính từ gốc hệ thống.
- **Danh sách mở ngay tại chỗ bạn đang ở** và xem trước thứ bạn trỏ tới ngay trong ô nhập; rời khỏi danh sách thì văn bản của bạn được trả lại.
- **Di chuyển một ghi chú ra khỏi kho** sau một bước xác nhận có đếm số liên kết sẽ bị hỏng. Ghi chú được sao chép ra ngoài rồi chuyển vào thùng rác, nên có thể khôi phục như mọi ghi chú đã xóa.
- **Thiết lập Hiển thị phần mở rộng tệp**, và hiểu được các đường dẫn đặt trong dấu ngoặc kép (như *Copy as path* của Windows tạo ra).
- **Các thiết lập xuất hiện trong ô tìm kiếm thiết lập của Obsidian** từ Obsidian 1.13 trở đi.

### Đã thay đổi

- **Đường dẫn dài vừa khít khung.** Tên được rút ngắn bắt đầu từ phần ít hữu ích nhất — tên kho, rồi phần mở rộng, rồi các thư mục, tên ghi chú sau cùng — không bao giờ rút quá mức còn phân biệt được chúng. Rê chuột lên một tên đã rút ngắn để đọc đầy đủ.
- **Bấm vào tên ghi chú chọn tên mà không kèm phần mở rộng**, nên đổi tên không còn nguy cơ làm đổi loại tệp.
- **Phím đổi tên mở ra ở tên không kèm phần mở rộng**, và những lần nhấn tiếp theo mở rộng vùng chọn.
- **Bấm vào một thư mục vẫn giữ phần còn lại của đường dẫn hiển thị**, kể cả khi ở ngoài kho.
- **Duyệt ngược vào trong kho sẽ mở tệp như ghi chú**, với liên kết và liên kết ngược, thay vì mở trong trình xem tệp bên ngoài.

### Đã sửa

- **Nhãn menu là tiếng Anh ở mọi ngôn ngữ**; giờ chúng lấy từ bản dịch của chính Obsidian.
- **Phím đổi tên đi vào ngõ cụt ở hộp thoại đổi tên của Obsidian** khi ghi chú đã được cuộn quá tiêu đề.
- **<kbd>Esc</kbd> phải nhấn hai lần** mới đóng được ô nhập và danh sách của nó.
- **<kbd>Ctrl</kbd>+<kbd>Enter</kbd> mở một liên kết trong trình soạn thảo** thay vì tác động lên thanh đường dẫn.
- **Đổi tên ở ngoài kho làm mất tên đã gõ** khi nhấn vào ổ khóa.
- **Tab có thể lặp vòng mà không tiến triển** ở một thư mục nằm cạnh chính ghi chú thư mục của nó.

## 1.0.4 — 2026-08-13[^1.0.4]

### Đã thêm

- **Ghi chú bạn đang mở được đánh dấu màu xanh lam** trong danh sách, để khi duyệt ngược về thư mục của nó bạn thấy mình đã bắt đầu từ đâu.

## 1.0.3 — 2026-08-13[^1.0.3]

### Tài liệu

- README liên kết tới trang của plugin trong thư mục cộng đồng, và các README đã dịch được cập nhật.

## 1.0.2 — 2026-08-13[^1.0.2]

### Đã thay đổi

- **Yêu cầu Obsidian 1.8.7 trở lên** (trước là 1.4.0). Hai tính năng mà thanh đường dẫn dựa vào — sao chép tệp và chú thích lỗi bên dưới ô nhập — cần phiên bản này.
- **Các tệp tải về của bản phát hành có kèm chứng thực nguồn gốc bản dựng đã ký**, nên bạn có thể dùng `gh attestation verify` để xác nhận rằng `main.js` được dựng từ kho mã này.

### Đã sửa

- **Mở một tệp bên ngoài không còn tồn tại bằng ứng dụng mặc định thất bại mà không báo gì**; giờ lỗi được thông báo.

## 1.0.1 — 2026-08-13[^1.0.1]

### Đã sửa

- **Ở chế độ đổi tên, một ghi chú xung đột với chính nó** — duyệt ngược về thư mục của nó thì tên của nó bị ẩn khỏi danh sách, như thể nó chặn việc đổi tên của chính mình.
- **Lần hiện thư mục đầu tiên sau khi khởi động Obsidian không mở rộng gì cả.**
- **Chọn một thư mục trong danh sách có thể kết thúc chế độ đổi tên** thay vì đi vào thư mục đó.
- **Chỉnh sửa trên tệp bên ngoài có thể bị ghi đè âm thầm** bởi một tiến trình ghi khác, chẳng hạn Sync hoặc một khung thứ hai. Việc ghi giờ mang tính atomic (hoặc hoàn tất trọn vẹn, hoặc không thay đổi gì).
- **Việc đặt lại viền focus rò rỉ sang các view khác**; giờ nó chỉ áp dụng cho các thanh tiêu đề mà Lure đã can thiệp.

### Tài liệu

- README và hướng dẫn sử dụng có sẵn bằng cả 44 ngôn ngữ mà plugin hỗ trợ.
- Hướng dẫn nhắc tới thiết lập *Detect all file extensions* của Obsidian, nay đã đổi tên thành *Phát hiện tất cả các phần mở rộng tệp* (Show all file types).

## 1.0.0 — 2026-08-10[^1.0.0]

Bản phát hành đầu tiên. Thay tên tệp trên thanh tiêu đề của ghi chú bằng một chuỗi điều hướng (breadcrumb) có thể bấm và chỉnh sửa, thể hiện đường dẫn trong kho — một thanh địa chỉ cho các ghi chú của bạn, phỏng theo thanh địa chỉ của Dolphin.

### Đã thêm

- **Bấm vào một thư mục** để mở danh sách nội dung của thư mục cha, để đổi nó lấy một thư mục anh em và giữ nguyên phần còn lại của đường dẫn.
- **Bấm vào dấu phân cách** sau một thư mục để hiện và mở rộng thư mục đó trong Trình duyệt tệp, hoặc để mở ghi chú thư mục của nó khi Folder notes xử lý thư mục đó.
- **Bấm vào tên tệp hoặc chỗ trống** để gõ một đường dẫn, có tự động hoàn thành: `/` đi xuống, <kbd>Backspace</kbd> lùi ra, <kbd>Enter</kbd> xác nhận.
- **Chế độ di chuyển/đổi tên** chuyển chính các thao tác đó sang di chuyển và đổi tên, được kiểm tra hợp lệ theo đúng cách Obsidian kiểm tra.
- **<kbd>Ctrl</kbd> mở trong tab mới** — hoặc, ở chế độ di chuyển/đổi tên, sao chép ghi chú tới đó thay vì di chuyển.
- **<kbd>F2</kbd> luân phiên** giữa tiêu đề nội tuyến và thanh đường dẫn.
- **Ngoài kho** (mặc định tắt): tên kho mở ra các kho khác của bạn, thư mục home, gốc hệ thống tệp và các ổ đĩa đã gắn. Không gì ở ngoài đó được ghi cho tới khi bạn mở khóa, và một ghi chú chỉ có thể được sao chép ra khỏi kho, không bao giờ bị di chuyển.
- **45 ngôn ngữ.**

[^1.4.0]: Thay đổi kể từ 1.3.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.3.0...1.4.0>
[^1.3.0]: Thay đổi kể từ 1.2.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.2.0...1.3.0>
[^1.2.0]: Thay đổi kể từ 1.1.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.2...1.2.0>
[^1.1.2]: Thay đổi kể từ 1.1.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.1...1.1.2>
[^1.1.1]: Thay đổi kể từ 1.1.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.0...1.1.1>
[^1.1.0]: Thay đổi kể từ 1.0.4: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.4...1.1.0>
[^1.0.4]: Thay đổi kể từ 1.0.3: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.3...1.0.4>
[^1.0.3]: Thay đổi kể từ 1.0.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.2...1.0.3>
[^1.0.2]: Thay đổi kể từ 1.0.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.1...1.0.2>
[^1.0.1]: Thay đổi kể từ 1.0.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.0...1.0.1>
[^1.0.0]: Bản phát hành đầu tiên: <https://github.com/Gelaende51/obsidian-lure/releases/tag/1.0.0>
