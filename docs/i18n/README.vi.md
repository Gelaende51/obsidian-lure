<!-- Bản dịch của README.md — trạng thái: commit 33b0e60.
     Dịch máy (Claude Opus 5), chưa được người bản ngữ hiệu đính.
     Rất hoan nghênh mọi đính chính; bản tiếng Anh của README là bản
     chuẩn. -->

[English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · **Tiếng Việt** · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

Một phần mở rộng cho [Obsidian](https://obsidian.md) biến tên tệp trên thanh tiêu đề của một ghi chú thành đường dẫn đầy đủ xuyên suốt kho, có thể bấm vào và sửa được — giống thanh địa chỉ trong trình quản lý tệp [Dolphin](https://apps.kde.org/dolphin/).

![Bấm vào dấu phân cách ngay sau một thư mục: con trỏ đang đặt trên đó, và Trình duyệt tệp đã hiện ra và mở rộng thư mục ấy](../images/breadcrumb.png)

Obsidian 1.8.7+ · chỉ trên máy tính · AGPL-3.0

## Công bố về AI

- **Tác nhân** — **Claude Opus 5** và **Claude Sonnet 5** (Anthropic, qua Claude Code): đã viết phần TypeScript, CSS, toàn bộ 45 bộ bản dịch và tài liệu. Các bản dịch do máy tạo ra và chưa được người bản ngữ hiệu đính.
- **Tác giả** — Vault51: xác định từng tính năng, thử từng phiên bản trong một kho thật, chỉ đạo các sửa chữa, xem lại toàn bộ kết quả.
- **Mức dùng** — 3–13 tháng 8 năm 2026, chín phiên, khoảng 4.928 lượt trả lời: khoảng 7,2 triệu token sinh ra, khoảng 23,7 triệu gửi đi, khoảng 1169,6 triệu lượt đọc lại từ bộ nhớ đệm (tổng khoảng 1200,5 triệu).
- **Nguồn cội** — mô hình đã học từ mã nguồn mở, tài liệu và các bài viết cộng đồng do người khác công bố.

## Tính năng

- **Bấm vào một thư mục** để xem danh sách nội dung của thư mục *cha* — đổi một thư mục lấy thư mục bên cạnh mà không đụng đến phần còn lại của đường dẫn. Tên ghi chú cũng hoạt động y như vậy, kể cả phần đuôi.
- **Bấm vào dấu phân cách** ngay sau một thư mục để hiện và mở rộng nó trong Trình duyệt tệp. Một tùy chọn duy nhất hoán đổi hai vai trò này.
- **Bấm chuột phải hoặc kéo bất kỳ mục nào** — chính là trình đơn ngữ cảnh và cách kéo thả của Trình duyệt tệp.
- **Bấm vào tên tệp hoặc chỗ trống** để gõ một đường dẫn, có gợi ý hoàn tất. `/` đi xuống, <kbd>Backspace</kbd> lùi lên một cấp, <kbd>Enter</kbd> xác nhận.
- **Nút bút chì trên thư mục** chuyển chính những thao tác ấy sang chế độ di chuyển/đổi tên, với đúng những kiểm tra mà Obsidian vẫn làm.
- **Giữ <kbd>Ctrl</kbd>** để mở trong thẻ mới — hoặc, trong chế độ di chuyển/đổi tên, để sao chép ghi chú tới đó thay vì di chuyển nó.
- **<kbd>F2</kbd>** chuyển qua lại giữa tiêu đề trong ghi chú và thanh đường dẫn.
- **Bấm vào tên kho** để duyệt các kho khác của bạn, thư mục nhà, gốc hệ thống tệp và các ổ đã gắn mà không phải đổi kho. Chỉ đọc cho tới khi bạn mở ổ khóa, và được viền bằng màu lỗi suốt thời gian đó. Mặc định tắt — xem [ngoài kho](#ngoài-kho).
- **Hai mức cảnh báo** — đỏ khi ở ngoài kho, cam cho những tệp văn bản mà Obsidian không có trình sửa. Xem [hai màu cảnh báo](usage.vi.md#hai-màu-cảnh-báo).
- **Biểu tượng theo giao diện**, thay được từ một đoạn CSS — và **45 ngôn ngữ**, đủ mọi ngôn ngữ Obsidian mang theo.
- **Cài đặt:** căn lề, các dấu phân cách dựng sẵn, cú bấm nào mở danh sách, tên kho, tệp ẩn.

![Vẫn danh sách ấy trong chế độ di chuyển/đổi tên: tên hiện thời của tệp ghim trên cùng, các thư mục bên cạnh nằm dưới, còn những ghi chú đã có thì mờ đi](../images/dropdown.png)

*Trong chế độ di chuyển/đổi tên, vẫn danh sách ấy đưa ra thứ khác: tên hiện thời của ghi chú ghim trên cùng để di chuyển mà không đổi tên, các thư mục để chuyển nó vào, và những tên đã có sẵn thì mờ đi để không có gì bị ghi đè do sơ ý.*

→ [Hướng dẫn sử dụng đầy đủ](usage.vi.md)

## Ngoài kho

Chính sách dành cho nhà phát triển của Obsidian đòi hỏi phần mở rộng phải giải thích mọi truy cập tới tệp bên ngoài kho, nên xin nói thẳng:

**Nó có làm bất cứ điều nào trong số này không.** Chỉ khi bạn bật **Truy cập tệp bên ngoài**, vốn **mặc định tắt**. Khi tùy chọn ấy tắt, không có đường nào từ phần mở rộng dẫn tới một đường dẫn bên ngoài, và không dòng nào trong đoạn mã nói dưới đây từng chạy.

**Nó đọc gì.** Chỉ khi bạn yêu cầu. Bấm vào tên kho sẽ liệt kê các kho khác của bạn — đọc từ chính tệp `obsidian.json` của Obsidian — cùng thư mục nhà, gốc hệ thống tệp và các ổ đã gắn (`/proc/mounts` trên Linux, `/Volumes` trên macOS, ký tự ổ đĩa trên Windows). Duyệt tiếp từ đó sẽ liệt kê nội dung thư mục, còn mở một tệp thì đọc đúng tệp ấy.

**Nó ghi gì.** Không gì cả, cho tới khi bạn bấm một nút nói rõ điều đó. Có hai nút như vậy, và mỗi nút chỉ phủ đúng phạm vi của nó:

- Nút **Sửa dạng văn bản** trong trình xem sẽ mở khóa tệp đang ở trước mặt bạn, đúng tệp ấy trong đúng thẻ ấy. Từ đó trở đi, các thay đổi của bạn được lưu vào nó ngay khi bạn gõ.
- **Ổ khóa** trên thanh tiêu đề, chỉ hiện khi thanh đường dẫn trỏ ra ngoài kho, mở khóa việc tạo, đổi tên và di chuyển ở các đường dẫn bên ngoài. Nó khóa lại ngay khi bạn quay vào trong, nên quyền ấy không bao giờ sống lâu hơn thư mục mà bạn đã cấp quyền cho.

Không lần mở khóa nào được lưu vào không gian làm việc hay vào cài đặt, nên việc ghi không bao giờ ở thế sẵn sàng trên một tệp mà bạn không nhớ mình đã mở. Ở cả hai trạng thái, không gì bị ghi đè — một đích đã tồn tại sẽ bị từ chối, dùng chính cơ chế tạo độc quyền của hệ thống tệp chứ không phải một phép kiểm tra có thể thua trong cuộc đua — và một ghi chú không bao giờ có thể bị *di chuyển* ra khỏi kho của bạn, vì các liên kết tới nó sẽ đứt trong im lặng; giữ <kbd>Ctrl</kbd> sẽ sao chép nó ra ngoài thay vì thế.

**Vì sao.** Những ghi chú bạn cần thường nằm ở một kho khác, trong thư mục đồng bộ hay trên một chiếc USB, mà câu trả lời của chính Obsidian — đổi kho — thì đóng hết mọi thứ bạn đang mở. Cách này để bạn sang xem mà không phải rời đi, và tiện thể sửa một lỗi gõ.

**Giới hạn.** Trình soạn thảo của Obsidian gắn chặt với các tệp bên trong kho, nên một tệp bên ngoài **không thể** mở như một ghi chú thật, có liên kết, liên kết ngược và mọi thứ còn lại; không phần mở rộng nào làm được. Thay vào đó Lure hiển thị nó trong trình xem riêng (Markdown, ảnh, âm thanh, video, PDF), còn mọi thứ khác thì có *Mở bên ngoài*. Thanh đường dẫn vẫn giữ viền màu lỗi bất cứ khi nào nó trỏ ra ngoài kho, và vệt đường dẫn bắt đầu từ nơi bạn chọn — một tên kho, thư mục nhà của bạn, một ổ đĩa — chứ không phải từ cách sắp xếp thư mục của máy.

## Cài đặt

Được liệt kê tại [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure), nhưng chưa được duyệt cho trình duyệt trong ứng dụng — vậy hãy cài đặt bằng một trong các cách sau:

**Thủ công:** tải `main.js`, `manifest.json` và `styles.css` từ [bản phát hành mới nhất](https://github.com/Gelaende51/obsidian-lure/releases) vào `<vault>/.obsidian/plugins/lure/`, rồi bật nó trong **Cài đặt → Phần mở rộng của bên thứ ba**.

**BRAT:** thêm `Gelaende51/obsidian-lure` làm phần mở rộng bản beta.

**Từ mã nguồn:** `npm install && npm run build` — xem [phát triển](../development.md).

## Tương thích

Không cần phần mở rộng nào. **Trình duyệt tệp** lõi, nếu được bật, chính là thứ hiện thư mục ở thanh bên; không có nó thì những cú bấm ấy chẳng làm gì.

Đã thử với các phần mở rộng cộng đồng cùng dùng thanh tiêu đề ghi chú hoặc đáp lại cú bấm vào thư mục — theo cả hai thứ tự nạp, mỗi cái đều bật và tắt:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — dấu phân cách mở ghi chú của thư mục thay vì hiện thư mục, khiến mọi đoạn trên đường dẫn đều thành nơi có thể đến. Đây là phần mở rộng ghi chú thư mục duy nhất giành lấy đường dẫn trên thanh tiêu đề; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) và [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) không lắng nghe ở đó, nên dấu phân cách vẫn hiện thư mục như thường.
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer) và [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — cả hai đều vẽ vào cùng một phần tử của thanh tiêu đề; Lure giữ được hàng của mình bất kể cái nào nạp trước, và tắt cái nào thì cái kia vẫn nguyên vẹn.
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header), [Running Head](obsidian://show-plugin?id=running-head), [Crumbs](obsidian://show-plugin?id=crumbs-obsidian), [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — có dải riêng, và chung sống không trục trặc.

Chỉ trên máy tính — cách tương tác này cần rê chuột, bấm chính xác và một bàn phím. Kết quả đầy đủ, những gì còn phải kiểm chứng, và so sánh với Quick Explorer cùng Breadcrumbs nằm trong [tương thích](../compatibility.md).

## Đóng góp

- Rất hoan nghênh báo lỗi và pull request — nhất là **đính chính bản dịch**, vì cả 45 ngôn ngữ đều do máy dịch và chưa được người bản ngữ hiệu đính. Xem [phát triển](../development.md) để biết cách dựng và các quy tắc cơ bản.
- **Trình theo dõi lỗi:** https://github.com/Gelaende51/obsidian-lure/issues
- **Quyên góp:** [Ko-fi](https://ko-fi.com/vault51). Dù thế nào phần mở rộng này vẫn miễn phí và cấp phép AGPL; tiền ủng hộ được trân trọng và không bao giờ bị đòi hỏi. Mục đích dự tính là bù đắp các-bon — một ý định, không phải cam kết: chưa có gì được bù đắp cho tới khi tổng số đủ đáng công, và dòng này sẽ nói ra khi thực sự đã có.

## Ghi công

- **Vault51** — tác giả: thiết kế, yêu cầu, và kiểm thử thủ công từ đầu đến cuối.
- **Claude Opus 5** và **Claude Sonnet 5** (Anthropic, qua Claude Code) — hiện thực, bản dịch và tài liệu, dưới sự chỉ đạo của tác giả. Xem [công bố về AI](#công-bố-về-ai).
- **[Obsidian](https://obsidian.md)** — ứng dụng mà phần mở rộng này bổ sung, đồng thời là nguồn của mọi thành phần nó dùng: API phần mở rộng, bộ biểu tượng Lucide đứng sau `setIcon`, thực thể i18next đi kèm để đọc nhãn trình đơn ngữ cảnh, cùng các lớp và biến CSS của chính nó. Không có gì của bên thứ ba được đóng gói kèm; phần mở rộng này **không có phụ thuộc lúc chạy**.

> **Đội ngũ Obsidian không tham gia dự án này dưới bất kỳ hình thức nào** — họ không viết, không duyệt, không chứng thực và không hỗ trợ nó. Obsidian là nhãn hiệu của Dynalist Inc.; đây là một phần mở rộng độc lập, không liên kết.

Người đóng góp sẽ được liệt kê ở đây khi các đóng góp về tới.

## Liên kết

- **Tài liệu:** [docs/](../)
- **Trang phần mở rộng:** https://community.obsidian.md/plugins/lure
- **Trang web / mã nguồn:** https://github.com/Gelaende51/obsidian-lure
- **Quyên góp:** [Ko-fi](https://ko-fi.com/vault51) — xem [đóng góp](#đóng-góp).
- **Giấy phép:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. Các bản rẽ nhánh và bản dựng phát hành lại phải công bố mã nguồn của mình theo cùng giấy phép.
