<!-- README.md 번역 — 기준 커밋: d116bbc.
     기계 번역(Claude Opus 5)이며 원어민 검수를 거치지 않았습니다.
     수정 제안을 환영합니다. 기준이 되는 것은 영어판 README입니다. -->

**다른 언어로 읽기:** [English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · **한국어** · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

노트 머리글 표시줄의 파일 이름을, 보관함 전체를 따라가는 클릭할 수 있고 편집할 수 있는 경로로 바꿔 주는 [Obsidian](https://obsidian.md) 플러그인입니다 — 파일 관리자 [Dolphin](https://apps.kde.org/dolphin/)의 주소 표시줄처럼요.

![폴더 뒤의 구분 기호를 클릭한 모습: 포인터가 그 위에 놓여 있고, 파일 탐색기가 해당 폴더를 드러내 펼쳤다](../images/breadcrumb.png)

Obsidian 1.8.7+ · 데스크톱 전용 · AGPL-3.0

## AI 공개

- **에이전트** — **Claude Opus 5**와 **Claude Sonnet 5**(Anthropic, Claude Code를 통해): TypeScript, CSS, 45개 언어의 번역 전부와 문서를 작성했습니다. 번역은 기계가 만든 것이며 원어민 검수를 거치지 않았습니다.
- **작성자** — Vault51: 모든 기능을 정하고, 각 판을 실제 보관함에서 시험하고, 수정을 지시하고, 모든 결과물을 검토했습니다.
- **사용량** — 2026년 8월 3–13일, 아홉 세션, 약 4,928회 응답: 생성 토큰 약 720만, 전송 약 2,370만, 캐시 재읽기 약 11억 6,960만(총 약 12억 50만).

## 기능

- **폴더를 클릭**하면 그 *상위* 폴더의 내용이 목록으로 열립니다 — 경로의 나머지는 건드리지 않고 폴더 하나만 옆 것으로 바꿀 수 있습니다. 노트 이름도 확장자를 포함해 같은 방식으로 동작합니다.
- 폴더 뒤의 **구분 기호를 클릭**하면 그 폴더를 파일 탐색기에서 드러내고 펼칩니다. 설정 하나로 두 역할이 서로 바뀝니다.
- **어느 항목이든 오른쪽 클릭하거나 끌어다 놓을 수 있습니다** — 파일 탐색기 자체의 컨텍스트 메뉴와 끌기 동작입니다.
- **파일 이름이나 빈 공간을 클릭**하면 자동 완성과 함께 경로를 입력할 수 있습니다. `/`는 아래로 내려가고, <kbd>Backspace</kbd>는 한 단계 위로 나가며, <kbd>Enter</kbd>가 확정합니다.
- **폴더 위의 연필 버튼**은 같은 조작을 이동/이름 바꾸기로 전환합니다. 검사는 Obsidian이 하는 것과 동일합니다.
- **<kbd>Ctrl</kbd>을 누른 채**로 새 탭에서 열 수 있습니다 — 이동/이름 바꾸기 모드에서는 노트를 옮기는 대신 그곳으로 복사합니다.
- **<kbd>F2</kbd>**는 본문 제목과 경로 표시줄 사이를 오갑니다.
- **보관함 이름을 클릭**하면 보관함을 바꾸지 않고도 다른 보관함, 홈 폴더, 파일 시스템 루트, 마운트된 드라이브를 둘러볼 수 있습니다. 자물쇠를 열기 전까지는 읽기 전용이며, 그동안 내내 오류 색으로 테두리가 둘러집니다. 기본값은 꺼짐입니다 — [보관함 외부](#보관함-외부)를 참고하세요.
- **두 단계의 경고** — 보관함 밖에서는 빨강, Obsidian에 편집기가 없는 텍스트 파일에는 주황. [두 가지 경고 색](usage.ko.md#두-가지-경고-색)을 참고하세요.
- **테마를 따르는 아이콘**은 CSS 스니펫에서 교체할 수 있으며 — **45개 언어**, Obsidian이 제공하는 모든 언어를 지원합니다.
- **설정:** 정렬, 구분 기호 프리셋, 어느 클릭이 목록을 여는지, 보관함 이름, 숨김 파일.

![이동/이름 바꾸기 모드의 같은 목록: 파일의 현재 이름이 맨 위에 고정되고, 그 아래에 이웃 폴더들이, 이미 있는 노트는 흐리게 표시된다](../images/dropdown.png)

*이동/이름 바꾸기 모드에서는 같은 목록이 다른 것을 내놓습니다. 이름을 바꾸지 않고 옮길 수 있도록 노트의 현재 이름이 맨 위에 고정되고, 그 아래에 옮겨 넣을 폴더가 오며, 이미 쓰인 이름은 실수로 덮어쓰이지 않도록 흐리게 표시됩니다.*

→ [전체 사용 안내서](usage.ko.md)

## 보관함 외부

Obsidian의 개발자 정책은 보관함 밖 파일에 대한 모든 접근을 플러그인이 설명하도록 요구합니다. 그러니 에두르지 않고:

**애초에 이런 일을 하기는 하는지.** **외부 파일 접근**을 켠 경우에만 그렇고, 이 설정은 **기본적으로 꺼져 있습니다**. 꺼진 상태에서는 플러그인에서 외부 경로에 닿을 방법이 전혀 없고, 아래에 적힌 코드는 하나도 실행되지 않습니다.

**무엇을 읽는지.** 요청하실 때만입니다. 보관함 이름을 클릭하면 다른 보관함들이 나열됩니다 — Obsidian 자신의 `obsidian.json`에서 읽어 옵니다 — 여기에 홈 폴더, 파일 시스템 루트, 마운트된 드라이브(Linux는 `/proc/mounts`, macOS는 `/Volumes`, Windows는 드라이브 문자)가 더해집니다. 거기서 더 들어가면 디렉터리 내용이 나열되고, 파일을 열면 그 파일 하나만 읽습니다.

**무엇을 쓰는지.** 그렇게 적힌 버튼을 누르기 전까지는 아무것도 쓰지 않습니다. 그런 버튼은 둘이며, 각각 자기 범위만 담당합니다:

- 뷰어의 **텍스트로 편집** 버튼은 눈앞의 파일을 잠금 해제합니다. 그 탭의 그 파일 하나뿐입니다. 그 뒤로는 입력하는 대로 변경 내용이 그 파일에 저장됩니다.
- 머리글의 **자물쇠**는 경로 표시줄이 보관함 밖을 가리키는 동안에만 나타나며, 외부 경로에서 만들기·이름 바꾸기·옮기기를 열어 줍니다. 안으로 돌아오는 즉시 다시 잠기므로, 허가가 그것을 내준 폴더보다 오래 남는 일은 없습니다.

두 잠금 해제 어느 것도 작업 공간이나 설정에 저장되지 않으므로, 열었던 기억이 없는 파일에 쓰기가 준비된 채로 남는 일은 없습니다. 어느 상태에서도 덮어쓰기는 일어나지 않습니다 — 이미 있는 대상은 거부되며, 경합에서 질 수 있는 검사 대신 파일 시스템 자체의 배타적 생성을 씁니다 — 그리고 노트를 보관함 밖으로 *옮기는* 일은 결코 불가능합니다. 그 노트를 가리키는 링크가 조용히 끊어지기 때문입니다. <kbd>Ctrl</kbd>을 누르고 있으면 대신 밖으로 복사합니다.

**왜인지.** 찾는 노트는 다른 보관함이나 동기화 폴더, USB 메모리에 있는 경우가 많은데, Obsidian 자신의 답 — 보관함 전환 — 은 열어 두었던 것을 전부 닫아 버립니다. 이 기능은 떠나지 않고 가서 볼 수 있게 해 주고, 간 김에 오타도 고칠 수 있게 해 줍니다.

**한계.** Obsidian의 편집기는 보관함 안의 파일에 묶여 있어서, 외부 파일을 링크와 백링크를 갖춘 진짜 노트로 여는 것은 **불가능합니다**. 어떤 플러그인도 못 합니다. 그래서 Lure는 자체 뷰어로 보여 줍니다(Markdown, 이미지, 오디오, 비디오, PDF). 나머지 전부에는 *외부에서 열기*가 붙습니다. 경로 표시줄은 보관함 밖을 가리키는 동안 계속 오류 색 테두리를 유지하며, 자취는 여러분이 고른 자리 — 보관함 이름, 홈 폴더, 드라이브 — 에서 시작하지 기계의 디렉터리 구조에서 시작하지 않습니다.

## 설치

[community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure)에 등재되어 있지만 앱 내 브라우저에는 아직 승인되지 않았습니다 — 다음 방법 중 하나로 설치하세요:

**수동:** [최신 릴리스](https://github.com/Gelaende51/obsidian-lure/releases)에서 `main.js`, `manifest.json`, `styles.css`를 `<vault>/.obsidian/plugins/lure/`로 내려받은 다음 **설정 → 커뮤니티 플러그인**에서 켭니다.

**BRAT:** `Gelaende51/obsidian-lure`를 베타 플러그인으로 추가합니다.

**소스에서:** `npm install && npm run build` — [개발](../development.md)을 참고하세요.

## 호환성

필요한 플러그인은 없습니다. 코어 **파일 탐색기**가 켜져 있다면 사이드바에서 폴더를 드러내는 일을 그것이 맡습니다. 없으면 그 클릭들은 아무 일도 하지 않습니다.

노트 머리글을 함께 쓰거나 폴더 클릭에 응답하는 커뮤니티 플러그인들과 맞춰 시험했습니다 — 두 가지 로드 순서 모두에서, 각각 켠 상태와 끈 상태로:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — 구분 기호가 폴더를 드러내는 대신 그 폴더의 노트를 열어 주어, 경로의 모든 구간이 갈 수 있는 곳이 됩니다. 머리글의 경로를 가져가는 유일한 폴더 노트 플러그인입니다. [Folder Note](obsidian://show-plugin?id=folder-note-plugin)와 [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown)은 거기를 듣지 않으므로 구분 기호는 평소대로 폴더를 드러냅니다.
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer)와 [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — 둘 다 같은 머리글 요소에 그립니다. 어느 쪽이 먼저 로드되든 Lure는 자기 줄을 지키며, 둘 중 하나를 꺼도 다른 하나는 그대로 남습니다.
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header), [Running Head](obsidian://show-plugin?id=running-head), [Crumbs](obsidian://show-plugin?id=crumbs-obsidian), [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — 각자 자기 띠를 가지며 문제없이 함께 지냅니다.

데스크톱 전용입니다 — 이 조작 방식에는 마우스 올리기, 정확한 클릭, 키보드가 필요합니다. 전체 결과와 아직 확인하지 못한 것, Quick Explorer 및 Breadcrumbs와의 비교는 [호환성](../compatibility.md)에 있습니다.

## 기여

- 이슈와 풀 리퀘스트를 환영합니다 — 특히 **번역 수정**을요. 45개 언어 전부가 기계 번역이고 원어민 검수를 거치지 않았기 때문입니다. 준비와 기본 규칙은 [개발](../development.md)을 참고하세요.
- **이슈 트래커:** https://github.com/Gelaende51/obsidian-lure/issues
- **후원:** [Ko-fi](https://ko-fi.com/vault51). 플러그인은 어느 쪽이든 무료이고 AGPL 라이선스입니다. 후원은 고맙게 받지만 결코 요구하지 않습니다. 쓰임새로 생각하는 것은 탄소 상쇄입니다 — 의도이지 약속은 아닙니다. 금액이 수고에 값할 만큼 모이기 전까지는 아무것도 상쇄되지 않으며, 실제로 상쇄되면 이 줄이 그렇게 말할 것입니다.

## 감사의 말

- **Vault51** — 작성자: 설계, 요구사항, 처음부터 끝까지의 수동 시험.
- **Claude Opus 5**와 **Claude Sonnet 5**(Anthropic, Claude Code를 통해) — 작성자의 지시 아래 구현, 번역, 문서. [AI 공개](#ai-공개)를 참고하세요.
- **[Obsidian](https://obsidian.md)** — 이것이 확장하는 응용 프로그램이자 플러그인이 쓰는 모든 구성 요소의 출처입니다: 플러그인 API, `setIcon` 뒤의 Lucide 아이콘 세트, 컨텍스트 메뉴 라벨을 읽어 오는 내장 i18next 인스턴스, 그리고 Obsidian 자체의 CSS 클래스와 변수. 서드파티 코드는 하나도 포함하지 않으며, 플러그인에는 **런타임 의존성이 없습니다**.

> **Obsidian 팀은 이 프로젝트에 어떤 방식으로도 참여하지 않았습니다** — 작성하지도, 검토하지도, 보증하지도, 지원하지도 않았습니다. Obsidian은 Dynalist Inc.의 상표이며, 이것은 독립적이고 무관한 플러그인입니다.

기여가 들어오는 대로 기여자를 여기에 적겠습니다.

## 링크

- **문서:** [docs/](../)
- **플러그인 페이지:** https://community.obsidian.md/plugins/lure
- **웹 / 소스:** https://github.com/Gelaende51/obsidian-lure
- **후원:** [Ko-fi](https://ko-fi.com/vault51) — [기여](#기여)를 참고하세요.
- **라이선스:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. 포크와 재배포되는 빌드는 같은 라이선스로 소스를 공개해야 합니다.
