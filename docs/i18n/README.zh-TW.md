<!-- README.md 的翻譯 — 對應提交：33b0e60。
     機器翻譯（Claude Opus 5），未經母語者校訂。歡迎指正；以英文 README
     為準。 -->

[English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · **繁體中文**

# Lure

一個 [Obsidian](https://obsidian.md) 外掛程式，把筆記標題列裡的檔名變成一條貫穿整個儲存庫、可點擊也可編輯的路徑 — 就像檔案管理員 [Dolphin](https://apps.kde.org/dolphin/) 的網址列。

![點擊資料夾後面的分隔符號：指標停在上面，檔案瀏覽器已經顯示並展開了那個資料夾](../images/breadcrumb.png)

Obsidian 1.8.7+ · 僅限桌面 · AGPL-3.0

## AI 揭露

- **代理** — **Claude Opus 5** 與 **Claude Sonnet 5**（Anthropic，透過 Claude Code）：撰寫了 TypeScript、CSS、全部 45 套翻譯以及文件。翻譯由機器產生，未經母語者校訂。
- **作者** — Vault51：訂定每一項功能，在真實的儲存庫裡試用每一版，指示修改，審閱全部產出。
- **用量** — 2026 年 8 月 3–13 日，九次工作階段，約 4,928 次回覆：產生約 720 萬個詞元，送出約 2,370 萬，快取重讀約 11.696 億（合計約 12.005 億）。
- **上游** — 會寫 Obsidian 外掛程式的模型，是從人們寫下並無償放出的開放原始碼、文件、論壇回答與錯誤回報裡學會的。沒有人被徵詢、被署名或被支付。那是這裡最大的一份無名貢獻，也比這個外掛程式更值得你的支持：如果你在挑要把東西送去哪裡，就送去那邊。

## 功能

- **點擊資料夾**會列出其*上一層*資料夾的內容 — 把一個資料夾換成旁邊那個，路徑其餘部分原封不動。筆記名稱也是一樣，副檔名一併算入。
- **點擊資料夾後面的分隔符號**，在檔案瀏覽器裡顯示並展開該資料夾。一項設定可以讓這兩個角色對調。
- **對任一項目按右鍵或拖曳** — 用的是檔案瀏覽器自己的右鍵選單與拖曳行為。
- **點擊檔名或空白處**即可輸入路徑，並有自動完成。`/` 往下進入，<kbd>Backspace</kbd> 退回上一層，<kbd>Enter</kbd> 確認。
- **資料夾上的鉛筆按鈕**把同樣的操作切換成移動／重新命名，檢核方式與 Obsidian 本身一致。
- **按住 <kbd>Ctrl</kbd>** 可在新分頁中開啟 — 或者在移動／重新命名模式下，把筆記複製過去而不是搬過去。
- **<kbd>F2</kbd>** 在內文標題與路徑列之間切換。
- **點擊儲存庫名稱**即可瀏覽你的其他儲存庫、家目錄、檔案系統根目錄以及已掛載的磁碟機，不必切換儲存庫。在你打開掛鎖之前一律唯讀，且全程以錯誤色描邊。預設關閉 — 參見[儲存庫之外](#儲存庫之外)。
- **兩級警示** — 儲存庫之外為紅色，Obsidian 沒有編輯器可用的文字檔為橘色。參見[兩種警示顏色](usage.zh-TW.md#兩種警示顏色)。
- **可隨佈景主題更換的圖示**，透過 CSS 片段替換 — 以及 **45 種語言**，Obsidian 附帶的每一種。
- **設定：**對齊方式、分隔符號預設值、哪一次點擊開啟清單、儲存庫名稱、點檔案。

![移動／重新命名模式下的同一份清單：檔案目前的名稱釘在最上方，下面是同層資料夾，已存在的筆記顯示為灰色](../images/dropdown.png)

*在移動／重新命名模式下，同一份清單給出的東西不一樣：筆記目前的名稱釘在最上方，用來只搬動而不改名；下面是可以移入的資料夾；已被佔用的名稱顯示為灰色，免得誤蓋掉。*

→ [完整使用說明](usage.zh-TW.md)

## 儲存庫之外

Obsidian 的開發者規範要求外掛程式說明一切對儲存庫之外檔案的存取，那就直說：

**它究竟做不做這些事。** 只有在你打開**存取外部檔案**時才會，而這一項**預設關閉**。關著的時候，從外掛程式出發根本碰不到任何外部路徑，下面寫到的程式碼一行也不會執行。

**它讀什麼。** 只在你要求時才讀。點擊儲存庫名稱會列出你的其他儲存庫 — 從 Obsidian 自己的 `obsidian.json` 讀取 — 再加上你的家目錄、檔案系統根目錄，以及已掛載的磁碟機（Linux 上是 `/proc/mounts`，macOS 上是 `/Volumes`，Windows 上是磁碟機代號）。從那裡繼續瀏覽會列出目錄內容，開啟一個檔案則只讀那一個檔案。

**它寫什麼。** 在你按下寫明此事的按鈕之前，什麼都不寫。這樣的按鈕有兩個，各自只管自己那一塊：

- 檢視器裡的**以文字編輯**按鈕，解鎖你眼前的這個檔案，就這一個檔案、就這一個分頁。此後你的變更會隨打隨存進去。
- 標題列裡的**掛鎖**，只在路徑列指向儲存庫之外時出現，用來解鎖在外部路徑上建立、重新命名與移動。你一回到儲存庫內它就重新上鎖，所以權限絕不會比你為之授權的那個資料夾活得更久。

兩種解鎖都不會存進工作區，也不會存進設定，因此寫入絕不會悄悄地在一個你不記得開過的檔案上待命。兩種狀態下都不會蓋掉任何東西 — 目標若已存在便直接拒絕，用的是檔案系統本身的獨佔建立，而不是一次可能輸掉競態的檢查 — 而且筆記永遠無法被*移動*到儲存庫之外，因為指向它的連結會無聲無息地斷掉；按住 <kbd>Ctrl</kbd> 則是把它複製出去。

**為什麼。** 你要找的筆記常常在另一個儲存庫、某個同步資料夾或是隨身碟裡，而 Obsidian 自己的答案 — 切換儲存庫 — 會把你開著的一切都關掉。這樣你可以不離開就去看一眼，順手把錯字改掉。

**限制。** Obsidian 的編輯器綁在儲存庫內的檔案上，所以外部檔案**無法**當成一篇真正的筆記開啟，沒有連結、反向連結和其餘那一套；任何外掛程式都做不到。Lure 改為在自己的檢視器裡顯示（Markdown、圖片、音訊、視訊、PDF），其餘一律提供*在外部開啟*。只要路徑列指向儲存庫之外，它就一直以錯誤色描邊；而這條軌跡從你挑的位置開始 — 某個儲存庫名稱、你的家目錄、某個磁碟機 — 而不是從這台機器的目錄結構開始。

## 安裝

已在 [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure) 列出，但尚未獲准進入應用程式內的瀏覽器 —— 因此請用下列方式之一安裝：

**手動：**從[最新發行版](https://github.com/Gelaende51/obsidian-lure/releases)下載 `main.js`、`manifest.json` 和 `styles.css` 到 `<vault>/.obsidian/plugins/lure/`，然後在**設定 → 第三方外掛程式**中啟用。

**BRAT：**把 `Gelaende51/obsidian-lure` 加為測試版外掛程式。

**從原始碼：**`npm install && npm run build` — 參見[開發](../development.md)。

## 相容性

不需要任何外掛程式。核心的**檔案瀏覽器**若已啟用，就是在側邊欄中顯示資料夾的那一位；沒有它，那些點擊不會有任何反應。

已針對那些共用筆記標題列、或者會回應資料夾點擊的社群外掛程式做過測試 — 兩種載入順序都試過，每一個都試了開與關：

- [Folder notes](obsidian://show-plugin?id=folder-notes) — 分隔符號會開啟資料夾的筆記而不是顯示該資料夾，於是路徑上的每一段都成了可以去的地方。它是唯一一個會接管標題列路徑的資料夾筆記類外掛程式；[Folder Note](obsidian://show-plugin?id=folder-note-plugin) 和 [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) 並不監聽那裡，所以分隔符號照常顯示資料夾。
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer) 和 [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — 兩者都往同一個標題列元素裡畫；無論誰先載入，Lure 都會保住自己那一列，關掉其中任何一個也不影響另一個。
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header)、[Running Head](obsidian://show-plugin?id=running-head)、[Crumbs](obsidian://show-plugin?id=crumbs-obsidian)、[Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — 各有各的橫條，彼此相安無事。

僅限桌面 — 這套互動方式需要滑鼠停留、精準點擊和鍵盤。完整結果、尚待驗證的部分，以及與 Quick Explorer 和 Breadcrumbs 的比較，都在[相容性](../compatibility.md)裡。

## 參與貢獻

- 歡迎提出問題與 Pull Request — 尤其是**翻譯修正**，因為全部 45 種語言都是機器翻譯且未經母語者校訂。環境準備與基本規矩見[開發](../development.md)。
- **問題追蹤：**https://github.com/Gelaende51/obsidian-lure/issues
- **贊助：**[Ko-fi](https://ko-fi.com/vault51)。無論如何這個外掛程式都是免費的、以 AGPL 授權的；打賞心領，但從不強求。預期用途是碳補償 — 這是一個意向，不是承諾：在總額值得費這道手續之前不會補償任何東西，等真的補償了，這一行會寫明。

## 致謝

- **Vault51** — 作者：設計、需求，以及自始至終的手動測試。
- **Claude Opus 5** 與 **Claude Sonnet 5**（Anthropic，透過 Claude Code）— 在作者指導下完成實作、翻譯與文件。參見 [AI 揭露](#ai-揭露)。
- **[Obsidian](https://obsidian.md)** — 本外掛程式所擴充的應用程式，也是外掛程式所用每一個零件的來源：它的外掛程式 API、`setIcon` 背後的 Lucide 圖示集、右鍵選單文字所讀取的內建 i18next 實例，以及它自己的 CSS 類別與變數。不打包任何第三方內容；外掛程式**沒有執行期相依項**。

> **Obsidian 團隊未以任何方式參與本專案** — 他們沒有撰寫、審閱、背書或支援它。Obsidian 是 Dynalist Inc. 的商標；這是一個獨立、無隸屬關係的外掛程式。

有貢獻進來時，貢獻者會列在這裡。

## 連結

- **文件：**[docs/](../)
- **外掛程式頁面：** https://community.obsidian.md/plugins/lure
- **網站 / 原始碼：**https://github.com/Gelaende51/obsidian-lure
- **贊助：**[Ko-fi](https://ko-fi.com/vault51) — 參見[參與貢獻](#參與貢獻)。
- **授權：**[LICENSE](../../LICENSE) — GNU AGPL-3.0-only，© 2026 Vault51。分支版本與再散布的建置必須以同一授權公開其原始碼。
