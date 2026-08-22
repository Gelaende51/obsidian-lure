<!-- README.md 的翻译 — 对应提交：dc475f7。
     机器翻译（Claude Opus 5），未经母语者校订。欢迎指出错误；以英文
     README 为准。 -->

[English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · **简体中文** · [繁體中文](README.zh-TW.md)

# Lure

一个 [Obsidian](https://obsidian.md) 插件，把笔记标题栏里的文件名变成一条贯穿整个仓库、可点击也可编辑的路径 — 就像文件管理器 [Dolphin](https://apps.kde.org/dolphin/) 的地址栏。

![点击文件夹后面的分隔符：指针停在上面，文件列表已经显示并展开了那个文件夹](../images/breadcrumb.png)

Obsidian 1.8.7+ · 仅桌面端 · AGPL-3.0

## AI 披露

- **代理** — **Claude Opus 5** 与 **Claude Sonnet 5**（Anthropic，经由 Claude Code）：编写了 TypeScript、CSS、全部 45 套翻译以及文档。翻译由机器生成，未经母语者校订。
- **用量** — 2026 年 8 月 3–22 日，22 次会话，约 11,820 次回复：生成约 1540 万词元，发送约 5550 万，缓存重读约 36.442 亿（合计约 37.15 亿）。
- **上游** — 模型是从他人公开的开源代码、文档和社区文字中学会的。大部分功劳属于他们。
- **作者** — Vault51：定下每一项功能，在真实仓库里试用每一版，指示修改，审阅全部产出。

## 功能

- **点击文件夹**会列出其*上一级*文件夹的内容 — 把一个文件夹换成旁边的那个，路径其余部分原封不动。笔记名同样如此，扩展名也算在内。
- **点击文件夹后面的分隔符**，在文件列表里显示并展开该文件夹。一项设置可以把这两个角色互换。
- **对任意条目右键或拖拽** — 用的是文件列表自己的右键菜单和拖拽行为。
- **点击文件名或空白处**即可输入路径，带自动补全。`/` 向下进入，<kbd>Backspace</kbd> 退回上一级，<kbd>Enter</kbd> 确认。
- **文件夹上的铅笔按钮**把同样的操作切换为移动／重命名，校验方式与 Obsidian 自身一致。
- **按住 <kbd>Ctrl</kbd>** 在新标签页中打开 — 或者在移动／重命名模式下，把笔记复制过去而不是移过去。
- **列表在你所处的条目上打开**，用方向键或指针浏览时，会把你指向的内容填进输入框。越过任一端，它会把你原本输入的内容还给你。
- **名称会随着输入自动补全** — 在文件夹里的名称一致之处，一致的部分会出现在光标之后并被选中；<kbd>Tab</kbd> 或 <kbd>→</kbd> 整段接受，<kbd>Backspace</kbd> 退回。
- **<kbd>Tab</kbd> 像 shell 一样补全**：把你输入的内容延伸到名称一致为止，只剩一个名称时便走进那个文件夹。越过路径末端则改为扩大选区：名称、带扩展名的名称、从仓库起的路径、从系统根起的路径。<kbd>Shift</kbd>+<kbd>Tab</kbd> 沿同一条路倒着走。
- **右键复制** — 两次取名称，三次取它右侧的一切，在空白处则取整条路径或系统路径。
- **把一篇笔记拖到路径栏的某个文件夹上**即可连同链接一起移过去。仓库名也接受，用于根目录；整片选择作为一个整体移动，接不下的文件夹则什么也不显示。
- **输入网址** — `https://`、`obsidian://`，或 `file://` 及百分号编码的路径 — 便会被打开，而不是当作笔记名。
- **长路径会从字母冗余之处缩短** — 绝不越过区分相邻文件夹所需的部分 — 只有再无可压缩时才滚动。把指针停在缩短的名称上即可看回完整的它。
- **<kbd>F2</kbd>** 在正文内标题和路径栏之间切换。
- **点击仓库名**即可浏览你的其他仓库、主目录、文件系统根目录以及已挂载的驱动器，无需切换仓库。在你打开挂锁之前一律只读，且全程以错误色描边。默认关闭 — 参见[仓库之外](#仓库之外)。
- **两级警示** — 仓库之外为红色，Obsidian 没有编辑器可用的文本文件为橙色。参见[两种警示颜色](usage.zh.md#两种警示颜色)。
- **可随主题更换的图标**，通过 CSS 片段替换 — 以及 **45 种语言**，Obsidian 附带的每一种。
- **设置：**对齐方式、分隔符预设、哪一次点击打开列表、仓库名、点文件、文件扩展名。

![移动／重命名模式下的同一列表：文件当前的名字固定在最上方，下面是同级文件夹，已存在的笔记显示为灰色](../images/dropdown.png)

*在移动／重命名模式下，同一个列表给出的东西不一样：笔记当前的名字固定在最上方，用来只移动而不改名；下面是可以移入的文件夹；已被占用的名字显示为灰色，免得误覆盖。*

→ [完整使用说明](usage.zh.md)

## 仓库之外

Obsidian 的开发者规范要求插件说明一切对仓库之外文件的访问，那就直说：

**它究竟做不做这些事。** 只有在你打开**访问外部文件**时才会，而这一项**默认关闭**。关着的时候，从插件出发根本无法触及任何外部路径，下面写到的代码一行也不会运行。

**它读什么。** 只在你要求时才读。点击仓库名会列出你的其他仓库 — 从 Obsidian 自己的 `obsidian.json` 读取 — 外加你的主目录、文件系统根目录，以及已挂载的驱动器（Linux 上是 `/proc/mounts`，macOS 上是 `/Volumes`，Windows 上是盘符）。从那里继续浏览会列出目录内容，打开一个文件则只读那一个文件。

**它写什么。** 在你按下写明此事的按钮之前，什么都不写。这样的按钮有两个，各自只管自己那一块：

- 查看器里的**以文本编辑**按钮，解锁你眼前的这个文件，就这一个文件、就这一个标签页。此后你的改动会随打随存进去。
- 标题栏里的**挂锁**，只在路径栏指向仓库之外时出现，用来解锁在外部路径上创建、重命名和移动。你一回到仓库内它就重新上锁，所以权限绝不会比你为之授权的那个文件夹活得更久。

两种解锁都不会存进工作区，也不会存进设置，因此写入绝不会悄悄地在一个你不记得打开过的文件上待命。两种状态下都不会覆盖任何东西 — 目标若已存在便直接拒绝，用的是文件系统自身的独占创建，而不是一次可能输掉竞态的检查 — 而且笔记永远无法被*移动*到仓库之外，因为指向它的链接会悄无声息地断掉；按住 <kbd>Ctrl</kbd> 则是把它复制出去。

**为什么。** 你要找的笔记常常在另一个仓库、某个同步文件夹或者 U 盘里，而 Obsidian 自己的答案 — 切换仓库 — 会把你开着的一切都关掉。这样你可以不离开就去看一眼，顺手把错别字改掉。

**局限。** Obsidian 的编辑器绑定在仓库内的文件上，所以外部文件**无法**作为一篇真正的笔记打开，没有链接、反向链接和其余那一套；任何插件都做不到。Lure 改为在自己的查看器里显示（Markdown、图片、音频、视频、PDF），其余一律提供*在外部打开*。只要路径栏指向仓库之外，它就一直以错误色描边；而这条轨迹从你挑选的位置开始 — 某个仓库名、你的主目录、某个驱动器 — 而不是从这台机器的目录结构开始。

## 安装

已在 [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure) 列出，但尚未获准进入应用内的浏览器 —— 因此请用下列方式之一安装：

**手动：**从[最新发布](https://github.com/Gelaende51/obsidian-lure/releases)下载 `main.js`、`manifest.json` 和 `styles.css` 到 `<vault>/.obsidian/plugins/lure/`，然后在**设置 → 第三方插件**中启用。

**BRAT：**把 `Gelaende51/obsidian-lure` 添加为测试版插件。

**从源码：**`npm install && npm run build` — 参见[开发](../development.md)。

## 兼容性

不需要任何插件。核心的**文件列表**如果启用了，就是在侧栏中显示文件夹的那一位；没有它，那些点击不会有任何反应。

已针对那些共用笔记标题栏、或者会响应文件夹点击的社区插件做过测试 — 两种加载顺序都试过，每一个都试了开与关：

- [Folder notes](obsidian://show-plugin?id=folder-notes) — 分隔符会打开文件夹的笔记而不是显示该文件夹，于是路径上的每一段都成了可以去的地方。它是唯一一个会接管标题栏路径的文件夹笔记类插件；[Folder Note](obsidian://show-plugin?id=folder-note-plugin) 和 [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) 并不监听那里，所以分隔符照常显示文件夹。
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer) 和 [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — 两者都往同一个标题栏元素里画；无论谁先加载，Lure 都会保住自己那一行，关掉其中任何一个也不影响另一个。
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header)、[Running Head](obsidian://show-plugin?id=running-head)、[Crumbs](obsidian://show-plugin?id=crumbs-obsidian)、[Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — 各有各的条带，彼此相安无事。

仅限桌面端 — 这套交互方式需要悬停、精确点击和键盘。完整结果、尚待验证的部分，以及与 Quick Explorer 和 Breadcrumbs 的比较，都在[兼容性](../compatibility.md)里。

## 参与贡献

- 欢迎提交问题与 Pull Request — 尤其是**翻译修正**，因为全部 45 种语言都是机器翻译且未经母语者校订。环境准备与基本规矩见[开发](../development.md)。
- **问题追踪：**https://github.com/Gelaende51/obsidian-lure/issues
- **捐赠：**[Ko-fi](https://ko-fi.com/vault51)。无论如何这个插件都是免费的、以 AGPL 授权的；打赏心领，但从不强求。预期用途是碳抵消 — 这是一个意向，不是承诺：在总额值得费这道手续之前不会抵消任何东西，等真的抵消了，这一行会写明。

## 致谢

- **Vault51** — 作者：设计、需求，以及自始至终的手动测试。
- **Claude Opus 5** 与 **Claude Sonnet 5**（Anthropic，经由 Claude Code）— 在作者指导下完成实现、翻译与文档。参见 [AI 披露](#ai-披露)。
- **[Obsidian](https://obsidian.md)** — 本插件所扩展的应用程序，也是插件所用每一个部件的来源：它的插件 API、`setIcon` 背后的 Lucide 图标集、右键菜单文案所读取的内置 i18next 实例，以及它自己的 CSS 类与变量。不打包任何第三方内容；插件**没有运行时依赖**。

> **Obsidian 团队没有以任何方式参与本项目** — 他们没有编写、审阅、背书或支持它。Obsidian 是 Dynalist Inc. 的商标；这是一个独立的、无隶属关系的插件。

有贡献进来时，贡献者会列在这里。

## 链接

- **文档：**[docs/](../)
- **插件页面：** https://community.obsidian.md/plugins/lure
- **网站 / 源码：**https://github.com/Gelaende51/obsidian-lure
- **捐赠：**[Ko-fi](https://ko-fi.com/vault51) — 参见[参与贡献](#参与贡献)。
- **许可证：**[LICENSE](../../LICENSE) — GNU AGPL-3.0-only，© 2026 Vault51。分支版本与再分发的构建必须以同一许可证公开其源码。
