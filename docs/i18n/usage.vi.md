<!-- Bản dịch của docs/usage.md — trạng thái: commit 33b0e60.
     Dịch máy (Claude Opus 5), chưa được người bản ngữ rà soát. Nhãn
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

Khi đã cài [Folder notes](obsidian://show-plugin?id=folder-notes), cú bấm ấy lại mở ghi chú của thư mục đó. Đây là plugin ghi chú thư mục duy nhất được ghi nhận là giành lấy đường dẫn ở thanh tiêu đề; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) và [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) có quản lý ghi chú thư mục nhưng không lắng nghe cú bấm trên đường dẫn, nên với chúng dấu phân cách vẫn hiện thư mục như thường. Xem [tính tương thích](../compatibility.md#verified-against).

Dấu phân cách **chỉ được gạch chân khi thư mục trước nó thật sự có ghi chú thư mục**, nên gạch chân là lời hứa rằng có thứ gì đó để mở. Mọi dấu phân cách đều vẫn bấm được dù thế nào — dấu không gạch chân sẽ hiện và mở rộng thư mục của nó trong thanh bên, điều mà con trỏ bàn tay vẫn báo hiệu. Gạch chân rời khỏi tên thư mục cùng lúc: khi bật hoán đổi, tên mở danh sách, nên đánh dấu nó như liên kết tới ghi chú sẽ là dối trá.

**Chế độ đổi tên/di chuyển ghi đè cả hai**, dù thiết lập nói gì: không thứ gì trên dòng mở thư mục khi một lần di chuyển còn dang dở, vì mở một thư mục sẽ bỏ dở việc di chuyển đó. Tên thư mục được chọn để sửa còn dấu phân cách thì đi xuống — cả hai đều là cách chọn đích đến — và gạch chân biến mất để cho thấy việc mở đang bị treo.

**Thư mục gốc của kho** là đoạn duy nhất không phải một đoạn đường dẫn. Nó không có cha để liệt kê các anh em, nên thay vào đó nó mở [danh sách vị trí](#duyệt-ngoài-kho) — các kho khác của bạn, thư mục cá nhân, gốc hệ thống tệp và các ổ đĩa đã gắn.

## Bấm vào một đoạn: đổi nó lấy một anh em

Bấm vào tên thư mục sẽ chọn **tên của thư mục đó** trong một ô văn bản và mở danh sách của thư mục **cao hơn một cấp** — thư mục cha. Gõ hoặc chọn một mục sẽ đổi thư mục này lấy một anh em và giữ nguyên mọi thứ bên dưới, nên `Projects/2026/Kickoff.md` → bấm `2026` → chọn `2025` cho bạn `Projects/2025/Kickoff.md`.

Bấm vào **tên ghi chú** cũng hoạt động như vậy đối với thư mục của chính nó, và chọn tên tệp **kèm cả phần mở rộng** — đổi tên hay đổi đích của ghi chú thường cũng có nghĩa là đổi luôn phần đó.

Cú bấm vào thư mục đã chọn sẵn một đoạn, nên **một cú bấm nữa** mở rộng vùng chọn ra cả dòng — thư mục đó *và* mọi thứ bên dưới — và khi đó việc gõ sẽ thay thế phần còn lại của đường dẫn trong một lần. Hoạt động y hệt trong điều hướng lẫn trong chế độ đổi tên/di chuyển.

Điều đó chỉ áp dụng như phần tiếp nối của cú bấm đã mở ô. Một khi bạn đã dùng ô ấy, nó hành xử như mọi ô văn bản khác: bấm đặt con trỏ, bấm đúp lấy một từ, bấm ba lần lấy cả dòng.

Dù thế nào, phần còn lại của đường dẫn vẫn hiện quanh ô, dưới dạng các mảnh phía trước và văn bản chưa chọn phía sau, nên đường dẫn đầy đủ không bao giờ biến mất khỏi thanh tiêu đề. Gõ để thay vùng chọn, hoặc nhấn <kbd>End</kbd> / <kbd>→</kbd> để giữ nó và sửa từ đó. Danh sách liệt kê toàn bộ thư mục bất kể nội dung điền sẵn là gì; nó chỉ bắt đầu lọc khi bạn thật sự gõ.

## Đi xuống bằng dấu phân cách

Bấm vào một dấu phân cách (khi **Tên thư mục mở danh sách** tắt) sẽ đi xuống thư mục ngay trước nó: danh sách liệt kê nội dung của *thư mục đó*, và phần còn lại của đường dẫn mở ra trong ô ở trạng thái được chọn. Chọn một thư mục sẽ nối nó vào vệt đường dẫn và mở ngay danh sách kế tiếp, nên bạn có thể bấm dần xuống một cây thư mục mà không rời khỏi dòng tiêu đề.

## Các mục trong danh sách là hàng trình quản lý tệp thật

Mọi tệp và thư mục trong danh sách đều hành xử như hàng của nó trong Trình duyệt tệp:

- **Bấm chuột phải** để có đúng menu ngữ cảnh ấy — *Ghi chú mới* / *Thư mục mới* trên thư mục, *Mở trong tab mới* / *Đổi tên* / *Xóa* trên tệp — kể cả các mục do plugin khác thêm vào menu tệp.
- **Kéo** một mục tới bất cứ nơi nào Obsidian chấp nhận tệp: vào trình soạn thảo để chèn liên kết, lên một thư mục trong Trình duyệt tệp để di chuyển nó, lên thanh thẻ để mở nó.

Từ ngữ của menu đến từ chính bản dịch của Obsidian, nên nó khớp với phần còn lại của ứng dụng trong mọi ngôn ngữ.

## Gõ một đường dẫn

- Bấm vào **khoảng trống** trước hoặc sau các mảnh sẽ mở một ô văn bản điền sẵn cả đường dẫn và được chọn toàn bộ — gõ đè lên, hoặc sửa tại chỗ. (Bấm vào chính tên tệp thì chỉ chọn tên tệp; xem ở trên.)
- Gõ trong lúc vệt mảnh đang hiện sẽ biến đoạn cuối thành một ô nhỏ với gợi ý hoàn thành trực tiếp giới hạn trong thư mục hiện tại.
- `/` chốt đoạn hiện tại và đi xuống trong nó.
- <kbd>Backspace</kbd> trong ô trống lùi ra thư mục cha, mở lại tên của nó với con trỏ ở cuối.
- <kbd>Enter</kbd> chốt; <kbd>Esc</kbd> hoặc bấm ra chỗ khác sẽ hủy và trở về đường dẫn thật của tệp.

Ô này không có khung — không hộp, không viền — nên nó đọc như chính văn bản đường dẫn, và tự giãn ra khi bạn gõ.

## Điều hướng không bao giờ động tới tệp đang mở

Ở chế độ mặc định (điều hướng), ghi chú đang mở **không bao giờ** bị đổi tên hay di chuyển.

- Đường dẫn khớp với một tệp có sẵn sẽ mở tệp đó.
- Đường dẫn chưa tồn tại sẽ hỏi *"Tạo tệp mới?"*. Xác nhận sẽ tạo mọi thư mục cha còn thiếu và tệp; hủy thì không làm gì cả.

## <kbd>Ctrl</kbd> — tab mới, và sao chép thay vì di chuyển

Giữ <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> trên macOS) khi chọn một tệp từ danh sách, hoặc khi nhấn <kbd>Enter</kbd> trên một đường dẫn, sẽ đưa kết quả sang **tab mới** thay vì tab này:

| | Thường | Có <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Chọn hoặc gõ một tệp có sẵn | Mở tại đây | Mở trong tab mới |
| Gõ một đường dẫn chưa tồn tại | Hỏi, rồi mở tại đây | Hỏi, rồi mở trong tab mới |
| Chốt đường dẫn trong chế độ đổi tên/di chuyển | **Di chuyển** ghi chú tới đó | **Sao chép** nó tới đó và mở bản sao trong tab mới |

Phím bổ trợ được đọc theo đúng quy tắc của Obsidian, nên nó hành xử y như trên một liên kết hay một hàng trong Trình duyệt tệp — bấm chuột giữa cũng có nghĩa là "tab mới", <kbd>Ctrl</kbd>+<kbd>Alt</kbd> nghĩa là chia khung, và <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> là cửa sổ mới.

Việc sao chép từ chối ghi đè, hệt như việc di chuyển — kể cả lên chính đường dẫn của ghi chú, nơi chẳng có gì hợp lý để sao chép.

## Duyệt ngoài kho

**Mặc định tính năng này tắt.** Trước hết hãy bật **Truy cập tệp bên ngoài** trong thiết lập — đọc và ghi bên ngoài kho là điều duy nhất plugin này làm mà bản thân Obsidian không làm, nên người dùng phải chủ động bật lên chứ không phải tắt đi. Khi tắt, tên kho chỉ đơn thuần hiện kho của bạn trong Trình duyệt tệp, và không gì ở đây nhìn ra ngoài phạm vi đó.

Bấm vào **tên kho** (hoặc biểu tượng 🏠, khi *Hiển thị tên kho* tắt) sẽ mở một danh sách các nơi chốn thay vì nội dung:

- **Các kho khác của bạn**, đọc từ chính sổ đăng ký của Obsidian, kho mở gần đây nhất đứng trước, mỗi kho mang biểu tượng kho của chính Obsidian — biểu tượng ứng dụng dùng cho các lệnh về kho. Kho bạn đang mở thì mang hình ngôi nhà: đó là nơi dòng này khởi đầu theo mặc định, chứ không phải nơi để đi tới.
- **Thư mục cá nhân**, dưới tên tài khoản của bạn, đánh dấu bằng `~`. Lucide không có dấu ngã, nên biểu tượng này do chính plugin vẽ trên lưới 24×24 của Lucide với cùng nét vẽ — một biểu tượng còn thiếu trong bộ ấy, chứ không phải một ký tự văn bản ngồi lẫn giữa các biểu tượng.
- **Gốc hệ thống tệp**, gắn nhãn `root` — không dịch, vì đó là tên của nó trên mọi hệ thống — thay vì `/`, vốn sẽ đọc như một bước trống bên cạnh dấu phân cách theo sau.
- **Các ổ đĩa đã gắn**, mỗi loại một biểu tượng ở những chỗ dễ xác định: chia sẻ mạng, đĩa quang, đĩa mềm và thiết bị tháo rời có biểu tượng riêng; còn lại nhận biểu tượng ổ đĩa chung. Trên Windows các ổ hiện dưới dạng `C:` với biểu tượng chung — tên nhãn đĩa và loại chính xác cần tới WMI, điều cố ý không làm.

Chọn một kho khác **không chuyển Obsidian sang kho đó.** Mọi thứ bạn đang mở vẫn mở; đường dẫn chỉ đơn giản bắt đầu duyệt ở đó. Đó chính là toàn bộ lý do đặt nó trên thanh đường dẫn thay vì nhường cho bộ chuyển kho ở thanh bên.

### Trong lúc bạn ở bên ngoài

Đường dẫn **bắt đầu từ vị trí bạn đã chọn**, không phải từ bố cục thư mục của máy — chọn `Archive` thì dòng đọc là `Archive / notes / …`, chứ không phải `/home/bạn/Vaults/Archive/notes/…`. Đoạn dẫn đầu mang biểu tượng cho thứ nó là (kho, thư mục cá nhân, ổ đĩa), và <kbd>Backspace</kbd> dừng lại ở đó chứ không đi tiếp lên phần còn lại của hệ thống tệp. Khi *Hiển thị tên kho* tắt, đoạn đó chỉ còn biểu tượng — thiết lập này nói về đoạn mở đầu của dòng dù nó gọi tên kho nào, chứ không riêng kho của bạn.

Thanh đường dẫn được **viền màu lỗi** — đúng vòng viền mà chế độ đổi tên vẽ ra — suốt thời gian nó trỏ ra ngoài kho của bạn. Nó đánh dấu một tình trạng kéo dài, không phải một khoảnh khắc: chừng nào nó còn đó, không cơ chế nào của Obsidian áp dụng cho thứ dòng đang hiện, và việc ghi bị khóa cho tới khi bạn nói khác đi.

Ngoài ra việc duyệt vẫn như bên trong: mảnh, dấu phân cách, gõ, gợi ý hoàn thành, <kbd>Backspace</kbd> để lùi ra. Cùng những quy tắc hiển thị ấy cũng áp dụng, nên phần mở rộng không được hỗ trợ vẫn cần *Phát hiện tất cả các phần mở rộng tệp* của Obsidian và tệp bắt đầu bằng dấu chấm vẫn cần thiết lập của plugin này.

**Bấm chuột phải và kéo** trên các mục danh sách không hoạt động ngoài đó — đó là các bộ xử lý của chính Trình duyệt tệp, và chúng cần một tệp mà kho biết tới.

### Ghi bên ngoài kho

Mọi thứ có ghi đều **bị khóa theo mặc định**. Một **ổ khóa** hiện bên cạnh nút bật đổi tên trên thanh tiêu đề suốt thời gian dòng trỏ ra ngoài kho của bạn; nhấn nó sẽ mở khóa và nó chuyển đỏ, khớp với vòng viền quanh dòng.

Quyền được cấp **cho một vị trí, không phải cho một khoảnh khắc**: nó sống sót qua mọi thao tác bạn làm khi đang ở một chỗ — hoàn tất một lần di chuyển, bấm ra ngoài ô, mở một tệp — và kết thúc khi bạn chọn kho, ổ đĩa hay gốc khác từ danh sách, khi dòng trở về một tệp trong kho, hoặc khi bạn nhấn ổ khóa lần nữa. Nhờ vậy một loạt lần di chuyển trong cùng một thư mục chỉ tốn một lần nhấn, không phải mỗi tệp một lần.

Khi ổ khóa đã mở, thanh đường dẫn ở ngoài đó hành xử như ở bên trong:

| Thao tác | Kết quả |
| --- | --- |
| Gõ một tên chưa tồn tại, <kbd>Enter</kbd> | Cùng câu hỏi "tạo nó chứ?" như bên trong; các thư mục cha còn thiếu cũng được tạo. Tên không có phần mở rộng sẽ thành `.md`, hệt như bên trong |
| Chế độ đổi tên/di chuyển, gõ tên mới | Đổi tên tệp mà dòng đang hiện. Tên không có phần mở rộng giữ nguyên phần mở rộng của tệp — ngoài đây một thư mục chứa đủ mọi loại tệp, và một lần đổi tên không nên lặng lẽ biến `.png` thành `.md` |
| Chế độ đổi tên/di chuyển, duyệt sang nơi khác, chọn **giữ tên này** | Di chuyển nó tới đó với đúng tên nó đang có |
| Giữ <kbd>Ctrl</kbd> ở một trong hai | Sao chép thay vì di chuyển, và mở bản sao trong tab mới |

Khi bị khóa, tất cả những việc đó đều báo lại điều đang chặn chúng thay vì thực thi. Không gì bị ghi đè trong cả hai trạng thái: đích đã tồn tại thì bị từ chối, và lời từ chối ấy đến từ chính hệ thống tệp (`COPYFILE_EXCL`, một lệnh tạo độc quyền) chứ không phải một phép kiểm tra có thể thua trong cuộc đua. Di chuyển giữa các hệ thống tệp — ra khỏi USB, ra khỏi chia sẻ mạng — lùi về cách sao-rồi-xóa, và bản gốc chỉ bị bỏ đi sau khi bản sao đã yên vị.

**Một điều ổ khóa không mở: chuyển một ghi chú *ra khỏi* kho của bạn.** `fileManager` không thể theo một tệp qua ranh giới đó, nên mọi liên kết trỏ tới ghi chú sẽ lặng lẽ hỏng còn Obsidian thì chỉ thấy nó biến mất. Giữ <kbd>Ctrl</kbd> sẽ sao chép nó ra thay vì vậy, cách này không có vấn đề đó, và thông báo cũng nói vậy. Chiều ngược lại — đưa một tệp bên ngoài *vào* kho — thì cũng chưa được nối dây.

### Mở một tệp bên ngoài

Trình soạn thảo của Obsidian chỉ làm việc với tệp trong kho, nên một tệp bên ngoài **không thể** mở như một ghi chú thật với liên kết, liên kết ngược và tất cả những thứ đó — đó là giới hạn của ứng dụng, không phải của plugin này. Chọn một tệp như vậy sẽ mở một **bản xem trước**, chỉ đọc cho tới khi bạn nói khác đi:

| Loại | Hiện dưới dạng |
| --- | --- |
| `.md`, `.markdown` | Markdown đã dựng |
| Ảnh, âm thanh, video, PDF | Trình phát/xem sẵn có |
| Mọi tệp **văn bản** khác (`.json`, `.css`, `.log`, `.txt`, …) | Văn bản thuần nguyên văn |
| Định dạng nhị phân không có trình xem (`.zip`, `.exe`, …) | Giao cho *Mở bên ngoài* |

Trình xem có hai cách đọc một tệp, và vì chúng loại trừ nhau nên chỉ hiện cách mà bạn sẽ **chuyển sang**:

| | Nó làm gì | Mặc định cho |
| --- | --- | --- |
| **Xem dạng Markdown** | Dựng tệp thành ghi chú, chỉ đọc | `.md`, `.markdown` |
| **Sửa dạng văn bản** | Mã nguồn, sửa được | mọi thứ còn lại |

Bên ngoài kho, **Sửa dạng văn bản** đồng thời là cú nhấn gỡ bỏ chế độ chỉ đọc — chế độ và quyền là một thao tác duy nhất thay vì hai nút phải cân nhắc. Nó nhuốm đỏ **mỗi khi nhấn nó sẽ gỡ chế độ chỉ đọc**, dù bạn đang chuẩn bị sửa tại chỗ hay đến thẳng từ khung dựng; bên trong kho không có gì để mở khóa, nên nó giữ vẻ bình thường. **Xem dạng Markdown** mang lớp nhấn nhạt — đúng sắc mà Obsidian dùng cho văn bản được chọn — đánh dấu nó là đường quay lại chứ không phải lời kêu gọi hành động.

Vì nút bám theo *việc sửa* chứ không theo chế độ thô, một tệp đang ở trạng thái chỉ đọc trong khung văn bản vẫn mời **Sửa dạng văn bản**: đó là cú nhấn chuẩn bị cho việc sửa. Một tệp không bao giờ gõ vào được — đã cắt bớt, hoặc không đọc nổi — lại ghi **Xem dạng văn bản**, vì đó là tất cả những gì cú nhấn có thể mang lại.

Các mặc định được đặt theo hướng hữu ích chứ không theo nghĩa đen: dấu `#` trong một tập lệnh shell là chú thích chứ không phải tiêu đề, nên dựng một `.log` thành Markdown sẽ lặng lẽ nuốt mất nó. Cả hai mặc định đều có thể ghi đè cho từng tệp, và lựa chọn đó đi vào lịch sử của khung, nên lùi/tiến và một không gian làm việc mở lại đều giữ nguyên — rất nhiều ghi chú sống trong tệp `.txt`, và rất nhiều tệp `.md` dễ đọc hơn ở dạng nguồn.

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

- **Mở trong *(kho)*** — hiện khi tệp thuộc về một trong các kho khác của bạn. Giao nó cho chính bộ xử lý URI của Obsidian, thứ mở cửa sổ của kho đó cùng ghi chú bên trong, dưới dạng một ghi chú thật sửa được. Cửa sổ này được giữ y nguyên; không gì bị đổi dưới tay bạn.
- **Xem dạng Markdown** / **Sửa dạng văn bản** — hai cách đọc; cách thứ hai đồng thời gỡ chế độ chỉ đọc bên ngoài kho.
- **Mở bên ngoài** — giao tệp cho ứng dụng mặc định của máy tính, kể cả các định dạng nhị phân mà trình xem này không hiện được.

Không gì bên ngoài kho của bạn bị ghi trừ khi bạn nhấn *Sửa dạng văn bản* trước. Xem mục [Ngoài kho](README.vi.md#ngoài-kho) trong README để có công bố đầy đủ.

## Hai màu cảnh báo

| | Khi nào | Nghĩa là gì |
| --- | --- | --- |
| Vòng viền **đỏ** trên thanh đường dẫn | Dòng trỏ ra ngoài kho của bạn | Obsidian không thể mở thứ ở đó như một ghi chú, và không gì ngoài đó bị ghi cho tới khi bạn mở ổ khóa. |
| Vòng viền **cam** trên thanh đường dẫn, mục màu cam trong danh sách | Tệp thuộc loại văn bản mà Obsidian không có khung xem | Một lời nhắc thận trọng. Obsidian sẽ giao nó cho ứng dụng mặc định của máy tính; plugin thì hiện nó ra. |

**Hai điều này độc lập, và cả hai có thể cùng đúng** — một `.json` bên ngoài vừa nằm ngoài kho của bạn *vừa* thuộc loại Obsidian không có trình sửa. Trong trình xem chúng hiện thành các dòng riêng, mỗi dòng chỉ nêu sự thật của mình. Trên thanh đường dẫn, đỏ thắng ở nơi cả hai cùng đúng, vì hai vòng viền chỉ tổ gây nhiễu.

Bậc cam được cố ý giữ hẹp. Các loại đã đăng ký (Markdown, canvas, ảnh, PDF, âm thanh, video) được xử lý đàng hoàng và không nhận gì. Tệp nhị phân cũng không nhận gì — bạn sẽ chẳng vô tình sửa một `.zip` thành mớ hỗn độn. Cái còn lại đúng là mối nguy: một `.json`, `.css` hay `.log` mà **Phát hiện tất cả các phần mở rộng tệp** đã làm cho hiện ra.

Đỏ thắng ở nơi cả hai cùng đúng; hai vòng viền một lúc chỉ tổ gây nhiễu.

## Chế độ di chuyển/đổi tên

Nút bút chì ở tận cùng bên phải thanh tiêu đề — cạnh nút chế độ xem, cùng cỡ với các nút gốc — bật tắt chế độ di chuyển/đổi tên. Khi đó dòng tiêu đề được viền màu nhấn, hệt như đổi tên trong Trình duyệt tệp. Vẫn những cú bấm và phím ấy giờ chốt một lần di chuyển hoặc đổi tên qua `fileManager.renameFile` của Obsidian, nên mọi liên kết tới ghi chú đều đi theo.

Trong lúc đổi tên:

- Tên tệp hiện tại được ghim vào danh sách của mọi thư mục, nên di chuyển một ghi chú mà không đổi tên chỉ tốn một cú bấm.
- Những tên đã bị chiếm trong thư mục đích bị làm mờ nhưng vẫn chọn được.
- Nội dung nhập được kiểm tra trực tiếp theo chính quy tắc đổi tên của Obsidian — cùng tập ký tự, cùng thông điệp, cùng chú giải đỏ bạn gặp khi đổi tên trong cây tệp — nên một tên phạm quy hay trùng lặp bị gắn cờ ngay khi gõ và không thể chốt.
- Bấm ra ngoài thanh tiêu đề, hoặc thanh tiêu đề mất tiêu điểm, sẽ kết thúc chế độ đổi tên.

## Một phím cho cả hai kiểu đổi tên

Lệnh đổi tên (mặc định <kbd>F2</kbd>, hoặc bất cứ phím nào bạn gán lại) **luân phiên** giữa việc đổi tiêu đề nội dòng của Obsidian và thanh đường dẫn ở tiêu đề của plugin này với toàn bộ đường dẫn được chọn. Nếu bạn đã tắt tiêu đề nội dòng của Obsidian, thanh đường dẫn thành đích duy nhất, nên phím ấy không bao giờ vô tác dụng.

Cách này hoạt động bằng việc bọc lệnh `workspace:edit-file-title` thay vì giành lấy phím, nên cả việc gán lại phím tắt lẫn chạy lệnh từ bảng lệnh đều hoạt động y nguyên.

## Cách các mục trong danh sách được tô màu

| Màu | Nghĩa là |
| --- | --- |
| **Tím** | Một ghi chú (`.md`, `.markdown`) — thứ Obsidian sẽ mở như ghi chú, được tách ra khỏi thư mục có nội dung hỗn hợp |
| **Cam** | Loại văn bản mà Obsidian không có khung xem; xem [các màu cảnh báo](#hai-màu-cảnh-báo) |
| **Mờ** | Ngoài kho của bạn, nên cách xử lý của chính kho không áp dụng |
| **Xanh dương** | Ghi chú bạn đang mở. Khi duyệt, đó là mục của chính nó; trong chế độ đổi tên/di chuyển, mục *giữ tên này* đứng thay chỗ nó — vẫn là cùng một ghi chú |
| **Xám** | Chỉ trong chế độ đổi tên/di chuyển: tên đã bị chiếm. Vẫn chọn được — chọn nó sẽ điền vào ô, nơi việc kiểm tra gắn cờ sự trùng lặp |

## Quy tắc hiển thị

- Tệp có phần mở rộng không được hỗ trợ chỉ xuất hiện trong danh sách nếu thiết lập **Phát hiện tất cả các phần mở rộng tệp** của Obsidian đang bật.
- Danh sách hiện nhiều nhất 100 mục — đúng giới hạn của Obsidian. Khi một thư mục có nhiều hơn, dòng cuối cho biết còn bao nhiêu bị bỏ ra; cứ gõ tiếp để thu hẹp danh sách.
- Tệp và thư mục bắt đầu bằng dấu chấm chỉ xuất hiện nếu thiết lập **Hiển thị tệp ẩn** của plugin này đang bật.
- **Bảo vệ chống ghi đè hoạt động y hệt bất kể hiển thị hay không** — một tệp ẩn vẫn chặn bạn ghi đè lên nó.

## Bảng tra nhanh

| Bạn muốn… | Hãy làm thế này |
| --- | --- |
| Mở một thư mục (ghi chú của nó, hoặc hiện nó ra) | Bấm dấu phân cách **sau** thư mục đó |
| Đổi một thư mục lấy anh em của nó | Bấm tên thư mục đó, rồi gõ hoặc chọn |
| Đổi tên hoặc đổi đích của ghi chú | Bấm tên ghi chú — kèm cả phần mở rộng |
| Duyệt nội dung một thư mục | Bấm tên thư mục đó; danh sách liệt kê thư mục cha, nên hãy bấm thư mục **bên dưới** thư mục bạn muốn |
| Gõ lại một thư mục và mọi thứ bên dưới | **Bấm đúp** tên thư mục đó, rồi gõ |
| Sửa đường dẫn từ một thư mục trở xuống | Bấm tên thư mục đó, rồi <kbd>End</kbd> hoặc <kbd>→</kbd> để bỏ chọn |
| Nhảy tới một tệp bằng cách gõ đường dẫn | Bấm tên tệp hoặc khoảng trống, gõ, <kbd>Enter</kbd> |
| Mở một tệp trong tab mới | <kbd>Ctrl</kbd> khi chọn, hoặc <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| Sao chép ghi chú sang chỗ khác thay vì di chuyển | Bút chì, rồi <kbd>Ctrl</kbd> khi chọn hoặc chốt đích |
| Tạo ghi chú tại một đường dẫn chưa tồn tại | Gõ đường dẫn, <kbd>Enter</kbd>, xác nhận câu hỏi |
| Đi xuống một cấp trong lúc gõ | Gõ `/` |
| Lùi lên một cấp trong lúc gõ | <kbd>Backspace</kbd> trong ô trống |
| Di chuyển hoặc đổi tên ghi chú đang mở | Bấm bút chì, rồi duyệt hoặc gõ như trên |
| Di chuyển mà không đổi tên | Bút chì → bấm vào thư mục đích → chọn tên tệp hiện tại đã ghim |
| Đổi tên tại chỗ | <kbd>F2</kbd> hai lần (lần đầu vào tiêu đề nội dòng, lần sau vào thanh tiêu đề) |
| Nhảy sang kho khác, thư mục cá nhân hoặc một ổ đĩa | Bấm tên kho |
| Mở một tệp từ bên ngoài kho | Tên kho → chọn vị trí → duyệt → chọn tệp (chỉ đọc cho tới khi *Sửa dạng văn bản*) |
| Hủy bất cứ điều gì | <kbd>Esc</kbd>, hoặc bấm ra ngoài thanh tiêu đề |

## Thiết lập

| Thiết lập | Lựa chọn | Mặc định | Nó làm gì |
| --- | --- | --- | --- |
| **Căn chỉnh** | Trái / Giữa / Phải | Trái | Vị trí của đường dẫn trong dòng tiêu đề. *Giữa* khớp với vẻ ngoài cổ điển của Obsidian. |
| **Dấu phân cách** | Ký tự bất kỳ | `/` | Dấu ngăn được vẽ giữa các đoạn. Sáu mẫu bấm một lần (`/ > ▸ › \ •`) nằm phía trước ô văn bản. |
| **Hiển thị tên kho** | Bật / Tắt | Bật | Kho có phải là đoạn đường dẫn đầu tiên hay không. Khi tắt, đoạn đó thành biểu tượng 🏠 chứ không biến mất, nên đường dẫn vẫn bắt đầu ở một chỗ bấm được. |
| **Tên thư mục mở danh sách** | Bật / Tắt | Bật | Hoán đổi việc mà tên thư mục và dấu phân cách sau nó đảm nhận — xem [bảng ở trên](#đường-dẫn-trên-thanh-tiêu-đề). Với [Folder notes](obsidian://show-plugin?id=folder-notes) dấu phân cách mở ghi chú thư mục. Không bao giờ áp dụng trong chế độ đổi tên/di chuyển. |
| **Hiển thị tệp ẩn** | Bật / Tắt | Tắt | Tệp và thư mục bắt đầu bằng dấu chấm có được liệt kê trong danh sách hay không. Bảo vệ chống ghi đè vẫn áp dụng dù thế nào. |
| **Truy cập tệp bên ngoài** | Bật / Tắt | **Tắt** | Tên kho có mở danh sách vị trí hay không. Khi tắt, không gì trong plugin nhìn ra ngoài kho này. |

## Thay thế các biểu tượng

Lure vẽ ba biểu tượng: biểu tượng gốc kho (khi **Hiển thị tên kho** tắt), nút bật đổi tên/di chuyển, và ổ khóa canh việc ghi bên ngoài kho. Tất cả đều có thể thay từ một chủ đề hoặc một đoạn CSS — đặt ký hiệu thay thế và ẩn ký hiệu đi kèm trong cùng một quy tắc:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* Ổ khóa có hai trạng thái; `.is-active` là trạng thái mở. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}

.lure-unlock-btn.is-active {
	--lure-icon-glyph: "🔓";
}
```

`--lure-icon-glyph` nhận mọi giá trị hợp lệ trong `content` của CSS, nên `url(...)` dùng cho ảnh cũng được như một ký hiệu văn bản hay emoji. Cứ để nguyên `--lure-icon-svg` nếu muốn giữ biểu tượng Lucide và vẽ ký hiệu của bạn bên cạnh nó.
