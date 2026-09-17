<!-- Bản dịch của README.md — trạng thái: commit f133f41.
     Dịch máy (Claude Opus 5), chưa được người bản ngữ hiệu đính.
     Rất hoan nghênh mọi đính chính; bản tiếng Anh của README là bản
     chuẩn. -->

[English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · **Tiếng Việt** · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

Một plugin cho [Obsidian](https://obsidian.md) biến tên tệp trên thanh tiêu đề của ghi chú thành một chuỗi điều hướng (breadcrumb) có thể bấm và chỉnh sửa, thể hiện toàn bộ đường dẫn trong kho — giống thanh địa chỉ của trình quản lý tệp [Dolphin](https://apps.kde.org/dolphin/).

![Bấm vào dấu phân cách sau một thư mục: con trỏ đang nằm trên nó, và Trình duyệt tệp đã hiện ra và mở rộng thư mục đó](../images/breadcrumb.png)

Obsidian 1.8.7+ · chỉ trên máy tính · AGPL-3.0

## Công bố về AI

- **Tác nhân** — **Claude Opus 5** và **Claude Sonnet 5** (Anthropic, qua Claude Code): viết mã TypeScript, CSS, toàn bộ 45 bộ bản dịch và tài liệu. Các bản dịch do máy tạo ra và chưa được người bản ngữ hiệu đính.
- **Mức dùng** — 3/8 – 6/9/2026, 22 phiên, \~13.378 phản hồi: \~16,3 triệu token được sinh ra, \~62,3 triệu token được gửi đi, \~4.245,1 triệu token đọc lại từ bộ nhớ đệm (tổng cộng \~4.323,6 triệu).
- **Nguồn cội** — mô hình đã học từ mã nguồn mở, tài liệu và bài viết cộng đồng do người khác công bố. Phần lớn công lao thuộc về họ.
- **Tác giả** — Vault51: đặt ra mọi tính năng, thử nghiệm từng phiên bản trong một kho thật, chỉ đạo các bản sửa, duyệt toàn bộ đầu ra.

## Tính năng

- **Bấm vào một thư mục** để mở danh sách nội dung của thư mục *cha* của nó — đổi một thư mục lấy một thư mục anh em, giữ nguyên phần còn lại của đường dẫn. Tên ghi chú cũng hoạt động như vậy, và chọn tên mà không kèm phần mở rộng.
- **Bấm vào dấu phân cách** sau một thư mục để hiện và mở rộng thư mục đó trong Trình duyệt tệp. Một thiết lập cho phép hoán đổi hai vai trò này.
- **Bấm chuột phải hoặc kéo bất kỳ mục nào** — đúng menu ngữ cảnh của Trình duyệt tệp, khớp từng mục, cùng cách kéo thả của nó. Đường dẫn ngoài kho có một menu tương đương được dựng riêng, cho đến cả *Xóa* thông qua thùng rác hệ thống.
- **Bấm vào tên tệp hoặc chỗ trống** để gõ một đường dẫn, có tự động hoàn thành. `/` đi xuống, <kbd>Backspace</kbd> lùi ra, <kbd>Enter</kbd> xác nhận — và một đường dẫn chưa tồn tại sẽ đơn giản được tạo ra, kèm một thông báo cho biết nó nằm ở đâu.
- **Danh sách mở ngay tại mục bạn đang đứng**, và khi di chuyển bằng phím mũi tên hay rê chuột qua danh sách, ô nhập sẽ được điền thứ bạn đang trỏ tới. Đi quá một trong hai đầu danh sách sẽ trả lại những gì bạn đã gõ, còn rời con trỏ khỏi danh sách sẽ đưa vùng tô sáng về lại chỗ bạn đang đứng.
- **Nút bút chì trên thư mục** chuyển chính các thao tác đó sang di chuyển/đổi tên, được kiểm tra hợp lệ theo đúng cách Obsidian kiểm tra.
- **Giữ <kbd>Ctrl</kbd>** để mở trong tab mới — hoặc, ở chế độ di chuyển/đổi tên, để sao chép ghi chú tới đó thay vì di chuyển. Tên ghi chú và các đoạn thư mục nhận cùng các phím bổ trợ, và kéo được, như các hàng tương ứng trong Trình duyệt tệp.
- **Tên tự hoàn thành khi bạn gõ** — ở chỗ các tên trong thư mục trùng nhau, phần trùng hiện ra sau con trỏ nhập, ở trạng thái được chọn; gõ tiếp sẽ nuốt dần phần đó từng chữ một, <kbd>Tab</kbd> hoặc <kbd>→</kbd> nhận trọn phần đó, <kbd>Backspace</kbd> rút lại. Danh sách vẫn lọc theo những gì bạn đã gõ, chứ không theo những gì được gợi ý.
- **<kbd>Tab</kbd> hoàn thành như một shell**: nó kéo dài những gì bạn gõ đến chừng nào các tên trong thư mục đó còn trùng nhau, tiến dần từng bước về một trong số chúng khi chúng khác nhau, và chỉ bước vào một thư mục khi chỉ còn lại một tên. Quá cuối đường dẫn, nó chuyển sang mở rộng vùng chọn: tên, tên kèm phần mở rộng, đường dẫn tính từ kho, đường dẫn tính từ gốc hệ thống. <kbd>Shift</kbd>+<kbd>Tab</kbd> đi ngược lại cùng con đường ấy — đánh dấu những gì nó trả lại chứ không xóa đi — và quá điểm đầu thì tiếp tục đi lên theo đường dẫn, rồi vòng về đường dẫn hệ thống. Đi chiều nào thì một vòng trọn cũng đưa bạn trở lại đường dẫn bạn đã dựng.
- **Bấm chuột phải để chép** — hai lần để chép một tên, ba lần để chép mọi thứ bên phải nó, và trên chỗ trống thì chép toàn bộ đường dẫn hoặc đường dẫn hệ thống.
- **Kéo một ghi chú thả lên một thư mục trên thanh** để di chuyển nó tới đó, kèm cập nhật mọi liên kết — đích đến đã ở ngay trên màn hình, nên chỉ cần một lần kéo thay vì một chuyến lần mò trong cây thư mục. Tên kho cũng dùng được, cho thư mục gốc. Cả một vùng chọn được di chuyển cùng lúc, và thư mục nào không nhận được thứ đang thả thì không hiện gì, thay vì báo lỗi khi đã thả xong.
- **Thả văn bản lên thanh để ghi nó lại** — thả lên một thư mục hoặc tên kho để đặt tên cho một ghi chú mới chứa nó, thả lên chính tên ghi chú để thêm nó vào cuối nội dung bạn đang đọc. Một tệp kéo từ màn hình nền cũng dùng được như vậy, và hàng sẽ viền xanh lam khi thả xuống là có tác dụng.
- **Ô nhập mang màu của thứ nó gọi tên** — cùng màu với hàng của nó trong danh sách, màu xám cho ghi chú thư mục — và **chuyển sang đỏ** khi không còn gì khớp với nó, để trước khi nhấn <kbd>Enter</kbd> bạn đã thấy nó sẽ mở một ghi chú hay tạo một ghi chú mới.
- **Tệp HTML hiển thị như trang web**, trong một khung bị tước mọi quyền — không script, không mạng, không có origin riêng — còn các stylesheet và hình ảnh nằm cạnh tệp thì được mang vào, để một trang đã lưu vẫn trông đúng như nó. Mã nguồn chỉ cách một lần nhấn.
- **Gõ một URL** — `https://`, `obsidian://`, hoặc một đường dẫn `file://` hay đường dẫn mã hóa phần trăm — và nó sẽ được mở chứ không bị coi là tên ghi chú. Địa chỉ web mở trong một tab của Trình xem web của chính Obsidian nếu bạn đã bật nó.
- **Đường dẫn dài rút ngắn ở chỗ các chữ cái là thừa** — không bao giờ rút quá mức còn phân biệt được một thư mục với thư mục bên cạnh, rút mượt mà chứ không nhảy từng chữ — và chỉ cuộn khi không còn gì để nén. Trỏ vào một tên đã rút ngắn để xem lại tên đầy đủ.
- **<kbd>F2</kbd>** luân phiên giữa tiêu đề nội tuyến và thanh đường dẫn, mở ra ở tên không kèm phần mở rộng và mở rộng dần tới các đường dẫn đầy đủ ở những lần nhấn tiếp theo. Nó đi qua gọn gàng hộp thoại đổi tên của Obsidian khi tiêu đề đã bị cuộn khuất. Có sẵn lệnh *Tập trung vào thanh đường dẫn* để gán phím nếu bạn muốn thao tác kiểu thanh địa chỉ.
- **Bấm vào tên kho** để duyệt các kho khác, thư mục home, gốc hệ thống tệp và các ổ đĩa đã gắn mà không phải chuyển kho. Chỉ đọc cho tới khi bạn mở ổ khóa đỏ nằm thế chỗ nút bật đổi tên ở ngoài đó, và luôn được viền bằng màu lỗi. Mặc định tắt — xem [ngoài kho](#ngoài-kho).
- **Hai mức cảnh báo** — đỏ khi ở ngoài kho, cam cho các tệp văn bản mà Obsidian không có trình soạn thảo. Xem [các màu cảnh báo](usage.vi.md#hai-màu-cảnh-báo).
- **Biểu tượng theo giao diện**, thay được bằng một CSS snippet — và **46 ngôn ngữ**: mọi ngôn ngữ Obsidian có, cộng thêm tiếng Hy Lạp và tiếng Phạn, vốn không có trong thiết lập của Obsidian. Chọn một ngôn ngữ riêng cho plugin, hoặc theo ngôn ngữ của Obsidian.
- **Cài đặt:** ngôn ngữ, căn chỉnh, các mẫu dấu phân cách, kiểu bấm nào mở danh sách, tên kho, tệp bắt đầu bằng dấu chấm, phần mở rộng tệp.

![Cùng danh sách đó ở chế độ di chuyển/đổi tên: tên tệp hiện tại được ghim ở trên cùng, các thư mục anh em bên dưới, và các ghi chú đã tồn tại bị làm mờ](../images/dropdown.png)

*Ở chế độ di chuyển/đổi tên, cùng danh sách đó thay đổi những gì nó đưa ra: tên hiện tại của ghi chú được ghim ở trên cùng để di chuyển mà không đổi tên, các thư mục để chuyển ghi chú vào, và những tên đã bị dùng thì bị làm mờ để không gì bị ghi đè do vô ý.*

→ [Hướng dẫn sử dụng đầy đủ](usage.vi.md)

## Ngoài kho

Chính sách dành cho nhà phát triển của Obsidian yêu cầu plugin giải thích mọi truy cập vào tệp bên ngoài kho, nên xin nói thẳng:

**Nó có làm bất cứ điều nào trong số này không.** Chỉ khi bạn bật **Truy cập tệp bên ngoài**, vốn **mặc định tắt**. Khi tắt, plugin không có cách nào chạm tới một đường dẫn bên ngoài, và không đoạn mã nào dưới đây từng chạy.

**Nó đọc gì.** Chỉ khi bạn yêu cầu. Bấm vào tên kho sẽ liệt kê các kho khác của bạn — đọc từ `obsidian.json` của chính Obsidian — cùng thư mục home, gốc hệ thống tệp và các ổ đĩa đã gắn (`/proc/mounts` trên Linux, `/Volumes` trên macOS, ký tự ổ đĩa trên Windows). Duyệt từ đó sẽ liệt kê nội dung thư mục, và mở một tệp chỉ đọc đúng tệp đó.

**Nó ghi gì.** Không gì cả, cho tới khi bạn nhấn một nút nói rõ điều đó. Có hai nút như vậy, mỗi nút chỉ áp dụng cho phạm vi của riêng nó:

- Nút **Sửa dạng văn bản** của trình xem mở khóa tệp đang ở trước mặt bạn, chỉ cho đúng tệp đó trong đúng tab đó. Sau đó, những gì bạn sửa được lưu ngược vào tệp ngay khi bạn gõ.
- **Ổ khóa đỏ** trên thanh tiêu đề, nằm thế chỗ nút bật đổi tên khi thanh đường dẫn trỏ ra ngoài kho, mở khóa việc tạo, đổi tên, di chuyển và xóa tại các đường dẫn bên ngoài — và trả chỗ lại cho nút bật đổi tên khi đã mở. Nó tự khóa lại khi bạn quay vào trong kho, và ở lần nhấn rời chế độ đổi tên, nên quyền không bao giờ tồn tại lâu hơn thư mục mà bạn đã cấp quyền cho.

Không lần mở khóa nào được lưu trong workspace hay trong thiết lập, nên việc ghi không bao giờ được kích hoạt sẵn trên một tệp mà bạn không nhớ đã mở. Ở cả hai trạng thái, không gì bị ghi đè — một đích đã tồn tại sẽ bị từ chối, bằng cơ chế tạo độc quyền (exclusive-create) của chính hệ thống tệp chứ không phải một phép kiểm tra có thể thua trong tình huống tranh chấp (race condition).

Di chuyển một ghi chú *ra khỏi* kho là thao tác ghi duy nhất gây ra mất mát mà không gì bù lại được: Obsidian chỉ cập nhật liên kết bên trong kho, nên mọi liên kết trỏ tới ghi chú đó đều hỏng. Thao tác này chỉ được đưa ra sau một hộp thoại nói rõ điều đó và đếm số ghi chú bị ảnh hưởng, và nó được thực hiện bằng cách sao chép rồi xóa qua thùng rác của chính Obsidian, nên có thể khôi phục như khi xóa một ghi chú. Giữ <kbd>Ctrl</kbd> thì ghi chú được sao chép ra ngoài thay vì di chuyển.

**Vì sao.** Những ghi chú bạn cần thường nằm ở một kho khác, một thư mục đồng bộ hoặc một chiếc USB, và cách của chính Obsidian — chuyển kho — sẽ đóng mọi thứ bạn đang mở. Plugin này cho bạn đi xem mà không phải rời đi, và sửa luôn một lỗi chính tả khi đang ở đó.

**Giới hạn.** Trình soạn thảo của Obsidian gắn với các tệp bên trong kho, nên một tệp bên ngoài **không thể** được mở như một ghi chú thật với liên kết, liên kết ngược và mọi thứ khác; không plugin nào làm được điều đó. Thay vào đó, Lure hiển thị tệp trong trình xem riêng (Markdown, hình ảnh, âm thanh, video, PDF), với *Open externally* (mở bằng ứng dụng bên ngoài) cho mọi loại tệp khác. Thanh đường dẫn luôn được viền bằng màu lỗi mỗi khi nó trỏ ra ngoài kho, và chuỗi điều hướng bắt đầu tại vị trí bạn đã chọn — một tên kho, thư mục home, một ổ đĩa — chứ không theo cấu trúc thư mục của máy.

## Cài đặt

Đã được niêm yết tại [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure), nhưng chưa được duyệt cho trình duyệt plugin trong ứng dụng — vì vậy hãy cài theo một trong các cách sau:

**Thủ công:** tải `main.js`, `manifest.json` và `styles.css` từ [bản phát hành mới nhất](https://github.com/Gelaende51/obsidian-lure/releases) vào `<vault>/.obsidian/plugins/lure/`, rồi bật plugin trong **Cài đặt → Phần mở rộng của bên thứ ba**.

**BRAT:** thêm `Gelaende51/obsidian-lure` làm plugin beta.

**Từ mã nguồn:** `npm install && npm run build` — xem [phát triển](../development.md).

## Tương thích

Không cần plugin nào khác. Plugin lõi **Trình duyệt tệp**, nếu được bật, là thứ hiện các thư mục trong thanh bên; không có nó thì những cú bấm đó không có tác dụng gì.

Đã thử nghiệm với các plugin cộng đồng dùng chung thanh tiêu đề ghi chú hoặc phản hồi cú bấm vào thư mục — cả hai thứ tự tải, mỗi plugin ở cả trạng thái bật và tắt:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — dấu phân cách mở ghi chú của thư mục thay vì hiện thư mục, biến mọi đoạn của đường dẫn thành nơi bạn có thể đến, dù sâu đến đâu: ghi chú được xác định theo quy ước riêng của plugin đó chứ không phó mặc cho plugin đó tự trả lời. Đây cũng là plugin duy nhất công bố một quy ước như vậy; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) và [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) không công bố quy ước nào và không bao giờ giành quyền xử lý đường dẫn trên thanh tiêu đề, nên với chúng dấu phân cách vẫn hiện thư mục như thường.
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer) và [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — cả hai đều vẽ vào cùng phần tử tiêu đề; Lure giữ được hàng của mình bất kể plugin nào tải trước, và tắt một trong hai sẽ để nguyên plugin kia.
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header), [Running Head](obsidian://show-plugin?id=running-head), [Crumbs](obsidian://show-plugin?id=crumbs-obsidian), [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — mỗi plugin có dải riêng của mình, và cùng tồn tại được.

Chỉ trên máy tính — mô hình tương tác cần rê chuột, bấm chính xác và bàn phím. Kết quả đầy đủ, những điều còn phải chờ xem, và so sánh với Quick Explorer và Breadcrumbs có trong [tương thích](../compatibility.md).

## Đóng góp

- Hoan nghênh issue và pull request — đặc biệt là **đính chính bản dịch**, vì cả 45 ngôn ngữ đều được dịch máy và chưa được người bản ngữ hiệu đính. Xem [phát triển](../development.md) để biết cách thiết lập và các nguyên tắc cơ bản.
- **Trình theo dõi lỗi:** https://github.com/Gelaende51/obsidian-lure/issues
- **Quyên góp:** [Ko-fi](https://ko-fi.com/vault51). Dù thế nào, plugin vẫn miễn phí và theo giấy phép AGPL; tiền ủng hộ luôn được trân trọng, nhưng không bao giờ bắt buộc. Mục đích dự định là bù đắp carbon — một dự định, không phải cam kết: chưa có gì được bù đắp cho tới khi tổng số đủ lớn để đáng công, và dòng này sẽ nói rõ khi việc đó thật sự đã được thực hiện.

## Ghi công

- **Vault51** — tác giả: thiết kế, yêu cầu và thử nghiệm thủ công xuyên suốt.
- **Claude Opus 5** và **Claude Sonnet 5** (Anthropic, qua Claude Code) — hiện thực, bản dịch và tài liệu, dưới sự chỉ đạo của tác giả. Xem [công bố về AI](#công-bố-về-ai).
- **[Obsidian](https://obsidian.md)** — ứng dụng mà plugin này mở rộng, và là nguồn của mọi thành phần plugin sử dụng: API plugin của nó, bộ biểu tượng Lucide đứng sau `setIcon`, phiên bản i18next đi kèm mà các nhãn menu ngữ cảnh được đọc từ đó, cùng các lớp và biến CSS của chính nó. Không có thành phần bên thứ ba nào được đóng gói kèm; plugin **không có phụ thuộc lúc chạy**.

> **Đội ngũ Obsidian không tham gia dự án này dưới bất kỳ hình thức nào** — họ không viết, duyệt, tán thành hay hỗ trợ nó. Obsidian là nhãn hiệu của Dynalist Inc.; đây là một plugin độc lập, không có liên kết với họ.

Người đóng góp sẽ được liệt kê ở đây khi có đóng góp được đưa vào.

## Liên kết


- **Tài liệu:** [docs/](../)
- **Nhật ký thay đổi:** [CHANGELOG.vi.md](CHANGELOG.vi.md)
- **Trang plugin:** https://community.obsidian.md/plugins/lure
- **Trang web / mã nguồn:** https://github.com/Gelaende51/obsidian-lure
- **Quyên góp:** [Ko-fi](https://ko-fi.com/vault51) — xem [đóng góp](#đóng-góp).
- **Giấy phép:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. Các bản fork và bản dựng được phân phối lại phải kèm mã nguồn theo cùng giấy phép.
