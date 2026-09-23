<!-- Aistriúchán ar CHANGELOG.md — staid: tiomantas 2cbb237.
     Aistriúchán meaisín (Claude Opus 5) nár léigh cainteoirí dúchais é.
     Fáilte roimh cheartúcháin; is é an CHANGELOG Béarla an leagan údarásach. -->

[English](../../CHANGELOG.md) · [العربية](CHANGELOG.ar.md) · [አማርኛ](CHANGELOG.am.md) · [Беларуская](CHANGELOG.be.md) · [বাংলা](CHANGELOG.bn.md) · [Català](CHANGELOG.ca.md) · [Čeština](CHANGELOG.cs.md) · [Dansk](CHANGELOG.da.md) · [Deutsch](CHANGELOG.de.md) · [Ελληνικά](CHANGELOG.el.md) · [Español](CHANGELOG.es.md) · [فارسی](CHANGELOG.fa.md) · [Suomi](CHANGELOG.fi.md) · [Français](CHANGELOG.fr.md) · **Gaeilge** · [עברית](CHANGELOG.he.md) · [Magyar](CHANGELOG.hu.md) · [Bahasa Indonesia](CHANGELOG.id.md) · [Italiano](CHANGELOG.it.md) · [日本語](CHANGELOG.ja.md) · [ქართული](CHANGELOG.ka.md) · [ភាសាខ្មែរ](CHANGELOG.kh.md) · [한국어](CHANGELOG.ko.md) · [Latviešu](CHANGELOG.lv.md) · [Bahasa Melayu](CHANGELOG.ms.md) · [नेपाली](CHANGELOG.ne.md) · [Nederlands](CHANGELOG.nl.md) · [Norsk](CHANGELOG.no.md) · [Polski](CHANGELOG.pl.md) · [Português](CHANGELOG.pt.md) · [Português (Brasil)](CHANGELOG.pt-BR.md) · [Română](CHANGELOG.ro.md) · [Русский](CHANGELOG.ru.md) · [संस्कृतम्](CHANGELOG.sa.md) · [Slovenčina](CHANGELOG.sk.md) · [Shqip](CHANGELOG.sq.md) · [Српски](CHANGELOG.sr.md) · [Svenska](CHANGELOG.sv.md) · [ไทย](CHANGELOG.th.md) · [Türkçe](CHANGELOG.tr.md) · [Українська](CHANGELOG.uk.md) · [Oʻzbekcha](CHANGELOG.uz.md) · [Tiếng Việt](CHANGELOG.vi.md) · [简体中文](CHANGELOG.zh.md) · [繁體中文](CHANGELOG.zh-TW.md)

# Loga athruithe

Gach eisiúint de Lure, an ceann is nuaí ar dtús. Tá a bhfuil tagtha isteach ó bhí an eisiúint dheireanach ann faoi *Gan eisiúint*. Níl réimír `v` ar na leaganacha, ar aon dul leis na clibeanna eisiúna.

## Neamheisithe

### Curtha leis

- **Fiafraíonn ainm atá glactha cheana in ionad é a dhiúltú.** Nuair a bhogtar nó a athainmnítear go dtí ainm atá ann cheana, osclaítear dialóg le dhá chonair ar féidir leat iad a chur in eagar: cá dtéann do chomhad, agus cá dtéann an comhad atá sa bhealach, dearg fad atá sé glactha fós. Tarraingítear gach conair freisin ar an mbealach a tharraingíonn an barra conaire ceann, agus na codanna atá difriúil daite agus giorraithe deireanach. Tá liosta ag an dá réimse; coimeádann an dara ceann na bealaí is coitianta amach — malartaigh áiteanna (téann sé go seanfhillteán do chomhaid), malartaigh ainmneacha (fanann sé agus glacann sé seanainm do chomhaid), malartaigh an dá cheann (glacann sé seanchonair do chomhaid), `-1`, `-bak` agus `-old` in aice lena ainm féin, agus an dá ainm a bhí ag na comhaid. Bíonn bealach amach a bhfuil a chonair glactha liathaithe. Ní líonann roghnú ceann amháin ach an réimse; bogann Cuir i bhfeidhm an dá cheann, naisc san áireamh, agus ní bhogann Cealaigh dada. Fiafraíonn roghnú ainm atá glactha cheana ón liosta an rud céanna, agus mar an gcéanna maidir le comhad a tharraingt isteach ar fhillteán a bhfuil an t-ainm sin aige cheana.
- **Osclaíonn `:graph` laistigh d'fhillteán graf an fhillteáin sin** — an graf scagtha go `path:"that/folder"`, mar a dhéanfadh a bhosca cuardaigh féin. Ag fréamh an taisceadáin is é an graf iomlán é, mar a bhí.
- **Fillteán a bhfuil an t-ainm sin aige cheana bíonn sé dearg** sa liosta agus tú ag bogadh, agus mar an gcéanna do chomhad den ainm sin, ionas go bhfeictear an coinbhleacht sula roghnaíonn tú.

### Athraithe

- **Is é atá sa tairiscint i gcónaí an méid a scríobhfadh Tab.** San áit nach réitíonn na hainmneacha níos mó, tairgeann an réimse an chéim i dtreo an chéad cheann acu, agus cinneann an ró a mbeadh Tab ag dul ann é; má chlóscríobhtar thar ainm fágtar a iarmhír ina seasamh, agus tairgtear é roimpi; tairgeann fillteán ar céimníodh isteach ann díreach a chéad chéim féin. Roimhe seo, bhí staideanna nach dtairgtí faic iontu ach scríobh Tab rud éigin mar sin féin. Leanann fobhun an liosta an tairiscint agus í ag athrú, agus tógann Tab ar ró ar shaighead tú air an ró sin seachas an ceann in aice leis.
- **Ní chuireann na tairiscintí cás san áireamh.** Tairgeann clóscríobh `sch` an t-ainm `Schemes`, litrithe mar atá an t-ainm; má thógann tú an tairiscint ar ais tugtar do litreacha féin ar ais duit mar a chlóscríobh tú iad. Áit a bhfuil `Test` agus `test` araon ann, tairgtear an ceann atá litrithe mar a chlóscríobh tú.
- **I ndiaidh brú ar Tab tairgtear an chéad chéim eile láithreach**, mar a tharlaíonn i ndiaidh litir chlóscríofa.
- **Tagann ainmneacha a thosaíonn leis an méid a chlóscríobh tú ar dtús sa liosta**, marcáilte le líne síos a n-imeall — gorm áit a roinneann siad níos mó ná ar chlóscríobh tú, glas ar an mbrainse a dtógann an tairiscint ann áit a scaránn siad — chun tosaigh ar na hainmneacha nach bhfuil ann ach é. Cuireann gach ceann acu líne faoin gcéim a thógfadh <kbd>Tab</kbd> ina treo, ní hamháin an ceann a thairgtear.
- **Leanann an liosta an cúrsóir**, nó tús roghnaithe: liostaíonn sé an fillteán ina bhfuil an pointe sin, scagtha de réir na litreacha atá roimhe. Ag tús ainm is é sin an fillteán ar fad.
- **Nuair a dhíríonn tú ar ró taispeántar é mar an tairiscint** — fanann an méid a chlóscríobh tú féin duit féin, agus marcáiltear an chuid eile den ainm — agus nuair a bhogtar an pointeoir den liosta, filleann an tairiscint roimhe sin.
- **Tógann → litir amháin den tairiscint** in ionad an iomláin; tógann <kbd>End</kbd> fós é ina iomláine.
- **Céimníonn Cúlspás roimh iarmhír atá fágtha léi féin suas fillteán**, mar a dhéanann sé i réimse folamh; imíonn an iarmhír aonair.
- **Iompaíonn F2 i réimse oscailte é ina athainmniú san áit ina bhfuil sé**, ag coimeád an téacs, an chúrsóra agus an roghnaithe, agus baineann **Fócas ar an mbarra conaire** an t-athainmniú de sa dóigh chéanna.
- **Aon rud eile a bhrúitear nó a chliceáiltear idir na brúnna, tosaíonn sé timthriall F2 agus Fócas ar an mbarra conaire arís.**
- **Tá na fillteáin trom sa liosta**, mar sin ní gá a thuilleadh go mbeadh nóta fillteáin féin liath chun seasamh amach: tá sé corcra ar nós aon nóta eile.
- **Níl an liosta níos leithne ná an barra conaire.** Giorraítear ainm nach n-oireann ar an mbealach a ghiorraíonn an barra conaire ceann, agus taispeántar ina iomláine é ar ainliú.
- **Scrollaíonn PageUp agus PageDown an liosta de réir an méid a thaispeánann sé**, ón réimse freisin, agus coimeádann an ró roghnaithe a áit féin ar an scáileán. Tugann <kbd>Home</kbd> agus <kbd>End</kbd> an chéad ró agus an ró deiridh isteach i radharc.
- **Taispeánann an liosta suas le 1,000 iontráil** sula gcuntar sé an chuid eile, in ionad 100.
- **Géilleann na fillteáin is faide ar dtús.** Nuair a bhíonn easpa spáis, giorraítear ainm an fhillteáin is faide go dtí fad an chéad cheann eile is faide, ansin an bheirt le chéile, agus mar sin de, gach ceann ag stopadh ag a íosmhéid féin. Roimhe seo, ghiorraigh gach fillteán ag an am céanna i gcomhréir lena fhad féin.
- **Sleamhnaíonn ainmneacha giorraithe in ionad léim.** Gearrtar ainm atá ag géilleadh ag an bpicteilín agus céimníonn sé faoina `…`, ionas nach mbogann aon rud ina dhiaidh sa ró de chéimeanna fad is atá pána á athmhéadú.

### Deisithe

- I bpána ar thaobh na láimhe deise d'osclaíodh an liosta faoin bpána clé go dtí gur clóscríobhadh an chéad litir.
- Nuair a bhogadh an pointeoir den liosta, thagadh an tairiscint ar ais ach ní thagadh a dath.
- Cailleadh spás san áit ar scoilteadh ainm giorraithe — `development guidelines` — rud a chuir an dá fhocal le chéile.

## 1.4.0 — 2026-09-19[^1.4.0]

### Curtha leis

- **Sraith Eochracha te sna socruithe.** Osclaíonn a cnaipe *Eochracha te* Obsidian scagtha don bhreiseán seo, áit ar féidir eochair a shannadh do *Fócas ar an mbarra conaire* — a sheoltar gan eochair.
- **Barra conaire ar phánaí gan comhad.** Léann cluaisín folamh `vault / :blank`, léann an graf `vault / :graph`, agus faigheann aon amharc eile nach bhfuil aon rud le hainmniú ann a lipéad `:` féin — léann cluaisín féin breiseáin leathanaigh baile `:home-launcher`. Is barra seolta an réimse lena thaobh: clóscríobh conair agus osclaíonn <kbd>Enter</kbd> í sa phána sin, nó cruthaíonn sé í. Roimhe seo bhí an tsraith bán — cheil an breiseán teideal Obsidian féin agus níor chuir sé faic ina áit.
- **Is féidir leathanach a chlóscríobh chomh maith lena roghnú** — is seoladh iad `:graph` agus an chuid eile, ní iontráil liosta amháin. Ní thosaíonn ainm comhaid le colon, mar sin tugann ceann a chlóscríobh áit ar bith iad chun cinn, agus caitheann an réimse a ndath in ionad tairiscint nóta a chruthú nach bhféadfaí aon ainm a thabhairt air.
- **Sraith do *Taispeáin gach cineál comhaid* Obsidian féin**, cois riail na gcomhad ponc, ós rud é go socraíonn an dá cheann cad a fhéadfaidh anuslíosta a liostú: deir sí go bhfuil an socrú sin le lorg i socruithe Obsidian féin agus é a chur air chun gach comhad a fheiceáil, agus osclaíonn an cnaipe lena hais an leathanach sin agus an socrú scrollta isteach san amharc agus splanc air, mar a dhéanfadh toradh cuardaigh socruithe. Ainmnithe i bhfocail Obsidian, mínithe i 45 teanga.
- **Liostaíonn fréamh an taisceadáin na leathanaigh is féidir le pána a shealbhú** — `:graph`, `:search`, agus cibé amharcanna a chláraíonn do bhreiseáin, cluaisín baile nó féilire ina measc. Roghnaigh ceann agus osclaíonn an pána é, mar a osclaíonn roghnú nóta an nóta. Fágtar amach amharcanna atá ann chun comhad a thaispeáint, mar ní bheadh aon rud acu le taispeáint.
- **Osclaíonn deighilteoir an taisceadáin féin do leathanach tosaigh**, i gcás go soláthraíonn breiseán ceann, agus tá líne faoi chun sin a rá; fillteann an chéad bhrú eile crann na gcomhad, agus cuireann an bhrú ina dhiaidh sin ar ais go díreach an méid a bhí oscailte. Gan a leithéid de bhreiseán, fillteann an chéad bhrú, mar a bhíodh.
- **Clóscríobh conair ó fhréamh an chórais comhad.** Osclaíonn `/` os comhair réimse folamh ceann in ionad é a shlogadh, baineann gach slais ina dhiaidh leis, agus liostaíonn an t-anuslíosta an meaisín seachas an taisceadán.

### Athraithe

- **Brúnn F2 agus Fócas ar an mbarra conaire Tab laistigh den réimse.** Cibé rud a dhéanfadh Tab ansin — an chéad chéim eile, an méid a chlóscríobh tú a chomhlánú, céim isteach i bhfillteán — déanann siad é freisin; ní fhágann siad ach nuair a fhillteann Tab siar go tosach na conaire, F2 chuig an teideal laistigh den nóta, an t-ordú chuig an nóta. Roimhe seo, dá gclóscríobhfá isteach sa réimse, thosaigh F2 arís ar an ainm agus dhún an t-ordú an réimse.
- **Is é an fillteán fréimhe an chéim tar éis don timthriall fágáil.** Tugann an bhrú tar éis fhilleadh F2 ar an teideal laistigh den nóta, nó fhilleadh an ordaithe ar an nóta, chuig an áit a dtugann lap Tab thú — fréamh an taisceadáin, an chonair iomlán sa réimse, a chéad fhillteán marcáilte — ionas nach bhfágtar aon chéim den fháinne do Tab amháin.
- **Siúlann Fócas ar an mbarra conaire cosúil le F2.** Osclaíonn sé ar an ainm in ionad na conaire iomláine, glacann sé na ceithre chéim chéanna, agus dúnann an bhrú tar éis an chinn dheireanaigh an réimse agus cuireann sé an cúrsóir ar ais sa nóta — roimhe seo, lapáil sé na céimeanna go deo agus níorbh fhéidir leis an eochair amháin a shroich an tsraith í a fhágáil.
- **Tuairiscítear ainm atá tógtha nuair a úsáideann tú é, ní agus tú á chlóscríobh.** Téann gach ainm a chlóscríobhtar i dtreo `Notes.md` trí ainmneacha a d'fhéadfadh a bheith ina gcomhaid dá gcuid féin, agus ba ghnách leis an rabhadh splancadh agus imeacht litir ar litir. Tuairiscítear fós céard atá cearr le litriú ainm de réir mar a litrítear é.
- **Nochtann deighilteoir a bhfuil nóta fillteáin oscailte cheana féin an fillteán** in ionad an méid atá ar an scáileán a athoscailt — rud atá i gceist lena dhara bhrú i gcónaí.
- **Tá an áit a bhfuil tú trom in anuslíosta**, ní gorm amháin.
- **Tá gach rud nach nóta é oráiste in anuslíosta**, ní hamháin na cineálacha téacs nach bhfuil aon amharc ag Obsidian orthu. Roghnaíonn an corcra na nótaí as fillteán ábhair mheasctha; deir dath amháin don chuid eile an rud céanna níos tapúla.

### Deisithe

- **Ní bhaineann Backspace thar fillteán cliceáilte ainm an taisceadáin ar shiúl a thuilleadh.** Léadh an slais a fágadh chun tosaigh mar chonair ó fhréamh an mheaisín, rud a fholmhaíonn an chéad deighleog — agus níor chuir Escape ar ais riamh é agus an réimse á dhúnadh, agus chaill an cluaisín ainm agus deilbhín a thaisceadáin go deo. Áirítear slais tosaigh mar cheann an mheaisín anois ach amháin nuair a bhíonn a chéad fhillteán ann i ndáiríre, agus filleann an chéad deighleog le gach bealach amach as an réimse.
- Lasmuigh den taisceadán, bhí comhaid folaithe mura raibh **Braith gach iarmhír comhaid** Obsidian ar siúl — socrú faoin méid a innéacsaíonn an taisceadán, a cuireadh i bhfeidhm ar fhillteáin nach bhfuil sa taisceadán. Liostaítear `.txt` cois do nótaí amuigh ansin ar aon nós.
- Ní dhearna anuslíosta ainm an taisceadáin faic ar phána gan comhad, arb é go beacht an pána a úsáidfeá chun dul áit éigin eile.
- Nuair a cliceáladh ainm an taisceadáin, d'fhan teideal Obsidian féin ina sheasamh cois na conaire sa réimse, liath, áit nach mbíonn sé le feiceáil ag am ar bith eile: tomhaiseann an tsraith í féin de réir an méid atá tarraingthe aici, agus ag an nóiméad sin bhí sí folamh chun spás a dhéanamh don réimse.
- Nuair a cliceáladh ar an spás folamh, osclaíodh an réimse agus chaill sé an fócas ansin: nuair a nochtar an nóta sa Taiscéalaí Comhad tógtar an cúrsóir leis, agus mar sin sheas an réimse oscailte agus marcáilte agus gach brú eochrach ag dul chuig an gcrann.
- Tharraing an chéim a thaispeánann an chonair ó fhréamh an chórais rian den chonair chéanna cois an réimse, gan é a fheistiú, agus mar sin péinteáladh conair dhomhain os a cionn féin.

## 1.3.0 — 2026-09-17[^1.3.0]

### Curtha leis

- **Comhad a thabhairt isteach sa taisceadán ón taobh amuigh.** Bog nó cóipeáil comhad ó áit ar bith ar an diosca chuig conair laistigh de do thaisceadán; tagann sé isteach mar fhíornóta, agus ní bhaineann bogadh an bunchomhad ach amháin tar éis don chóipeáil éirí léi.
- **Scaoil téacs nó comhad ar an ró chun é a bhreacadh síos.** Ar fhillteán: nóta nua san fhillteán sin, ainmnithe agus tú ag clóscríobh. Ar ainm an nóta, nó ar dheighilteoir fillteáin a bhfuil nóta fillteáin aige: curtha le deireadh an nóta sin, tar éis deimhnithe.
- **Nóta fillteáin a chruthú** le dara brú ar cibé rud a osclaíonn an fillteán, nuair atá breiseán nótaí fillteáin ar siúl agus nach bhfuil ceann ag an bhfillteán fós. Cuirtear é san áit a deir socruithe [Folder notes](https://github.com/LostPaul/obsidian-folder-notes) féin.
- **Tarraing fillteán ó bharra na conaire ar an mbarra cluaisíní** chun é a oscailt ann: a nóta fillteáin má tá ceann aige, nó cluaisín ina sheasamh san fhillteán sin mura bhfuil.
- **Siúlann an roth an liosta.** Os cionn ainm, osclaíonn an chéad chasadh liosta an ainm sin agus bogann gach casadh ina dhiaidh sin an t-aibhsiú ró amháin. Ró atá ag scrollú ar leataobh, coinníonn sé an roth don scrollú.
- **Saighead amach thar thús an réimse** chun an fillteán roimhe a thabhairt isteach: <kbd>←</kbd> d'aon fhillteán amháin, <kbd>Shift</kbd>+<kbd>Home</kbd> (nó <kbd>Home</kbd> agus an liosta dúnta) do gach ceann acu.
- **Caitheann an réimse dath an ruda a ainmníonn sé**, an dath céanna atá ar an ró sin sa liosta, agus éiríonn sé dearg a luaithe nach bhfreagraíonn aon rud dó — an nóiméad a chruthódh <kbd>Enter</kbd> rud seachas é a oscailt.
- **Tá nótaí fillteáin liath sa liosta**, ionas go léitear iad mar chuid dá bhfillteán seachas mar nóta eile fós.
- **Meánchliceáil ar dheighilteoir** chun an fillteán sin a oscailt i gcluaisín nua: a nóta fillteáin, nó cluaisín ina sheasamh ann.

### Athraithe

- **Is aon rialtán amháin iad an glas agus scoránaí an athainmnithe.** Lasmuigh den taisceadán tagann glas dearg dúnta in ionad an scoránaí; nuair a osclaítear é tugtar an sliotán don scoránaí, agus dúntar arís é nuair a fhágtar an mód athainmnithe.
- **Iarrann eochair an athainmnithe ar an nglas freisin.** Lasmuigh den taisceadán cuireann brú amháin an glas ag preabadh; deonaíonn dara brú laistigh de leathshoicind an méid a dheonaíonn an glas agus osclaíonn sé an mód athainmnithe.
- **Siúlann eochair an athainmnithe timthriall iomlán** — teideal laistigh den nóta, ainm, ainm le hiarmhír, conair ón taisceadán, conair ó fhréamh an chórais — agus is é an teideal laistigh arís an chéad bhrú eile.
- **Ní hionann <kbd>Ctrl</kbd>-chliceáil agus meánchliceáil a thuilleadh.** Osclaíonn ceann acu cluaisín agus téann sé chuige, osclaíonn an ceann eile sa chúlra é.
- **Osclaíonn deaschliceáil ar ainm an nóta roghchlár an chomhaid féin.**
- **Tá an liosta chomh hard is a cheadaíonn an fhuinneog**, in ionad na 300 picteilín socraithe atá ag Obsidian.
- **Coinníonn cliceáil ar fhillteán agus réimse ar oscailt an chonair iomlán ina dhiaidh**, agus liostaíonn cliceáil isteach i bhfillteán taobh istigh den réimse ábhar an fhillteáin sin ina iomláine.
- **Osclaíonn an deighilteoir nóta fillteáin ag aon doimhneacht** agus Folder notes ar siúl, agus tá líne faoi gach áit a bhfuil ceann ann. Roimhe seo ní oibríodh ach na fillteáin ag an mbarrleibhéal. Leis na breiseáin nótaí fillteáin eile taispeánann an deighilteoir an fillteán i gcónaí.

### Deisithe

- **Mhair réimse oscailte níos faide ná a chomhad.** Nuair a athraíodh go nóta eile agus barra na conaire ar oscailt, d'fhan an seanchomhad ainmnithe sa ró don chuid eile den seisiún.
- **Diúltaíodh do Scrios, Athainmnigh agus Déan cóip lasmuigh den taisceadán** agus an glas ar oscailt, agus ní raibh teacht orthu riamh d'íomhánna, do PDFanna ná do leathanaigh.
- **Ní dhearna <kbd>Ctrl</kbd>+<kbd>Enter</kbd> faic fad is a bhí an liosta ar oscailt** — agus sin mar a osclaíonn gach réimse.
- **<kbd>Enter</kbd> agus an liosta ar oscailt ach gan aon rud aibhsithe**, ní dhearna sé faic; daingníonn sé anois an méid a chlóscríobh tú.
- **Níorbh fhéidir ró a scrollú a bhí ag cur thar maoil agus gach ainm ag a fhad is giorra cheana**, rud a d'fhág deireadh na conaire dorochtana.
- **D'fhág díchumasú an bhreiseáin cnaipe marbh** i gceanntásc gach nóta a raibh paiste curtha aige air.

## 1.2.0 — 2026-08-25[^1.2.0]

### Curtha leis

- **Socrú teanga.** Leanann Lure teanga Obsidian de réir réamhshocraithe, agus is féidir aon cheann dá chuid féin a shocrú dó. Is é seo an t-aon bhealach freisin chun na haistriúcháin Ghréigise agus Shanscraite a bhaint amach, rud nach gcuireann Obsidian féin ar fáil. Fanann lipéad an tsocraithe féin i mBéarla, ionas gur féidir teacht air arís i gcónaí ó theanga nach féidir leat a léamh.

## 1.1.2 — 2026-08-25[^1.1.2]

### Athraithe

- **Stílbhileog níos éadroime.** Ní úsáideann an ró roghnóirí `:has()` ná formhór na rialacha `!important` a thuilleadh. Athshocraíonn sé é féin le níos lú oibre, agus thit rabhaidh athbhreithnithe an bhreiseáin ó 56 go 7.

## 1.1.1 — 2026-08-22[^1.1.1]

### Deisithe

- **D'fhéadfadh ainm gearr fillteáin a bheith líonta le bearna ann** — `atlas` mar `atl as` — mar go raibh an spás a coinníodh dá fhoirm ghiorraithe níos leithne ná an t-ainm féin.

## 1.1.0 — 2026-08-22[^1.1.0]

### Curtha leis

- **Stór focal na deaschliceála.** Osclaíonn brú amháin roghchlár; cóipeálann dhá bhrú agus trí bhrú níos mó agus níos mó — an t-ainm, an t-ainm lena iarmhír, an chonair. Tá roghchláir an ró ag teacht le cinn Comhad anois iontráil ar iontráil.
- **Roghchláir lasmuigh den taisceadán.** Tairgeann rónna an liosta agus an t-amharcán seachtrach oscailt, *Cóipeáil an cosán* agus *Taispeáin i taiscéalaí córais*; agus an glas ar oscailt, *Nóta nua*, *Fillteán nua*, *Déan cóip*, *Athainmnigh…* agus *Scrios* chomh maith. Bogann Scrios chuig bruscar an chórais agus ní bhíonn sé buan riamh.
- **Oscail in áit eile.** Osclaíonn <kbd>Ctrl</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> agus meánchliceáil ar ainm an nóta nó ar fhillteán i gcluaisín nua, i scoilt nó i bhfuinneog é. Is féidir an bheirt acu a tharraingt, díreach mar a rónna i gComhaid.
- **Tarraing nótaí ar an ró chun iad a bhogadh.** Scaoil nóta, roinnt nótaí nó fillteán ar mhír fhillteáin nó ar ainm an taisceadáin.
- **Ordú: Fócas ar an mbarra conaire**, agus an chonair iomlán roghnaithe — níl aon aicearra réamhshocraithe ann, ceangail do cheann féin.
- **Clóscríobh URL** i mbarra na conaire: osclaíonn `http(s)://` agus `obsidian://` mar naisc, osclaíonn conairí `file://` agus cinn ionchódaithe le céatadáin an comhad.
- **Comhlánú le Tab**, mar a dhéanann blaosc é: comhlánaíonn gach brú chomh fada is a réitíonn ainmneacha an fhillteáin le chéile agus stopann sé san áit a scarann siad. Siúlann <kbd>Shift</kbd>+<kbd>Tab</kbd> ar gcúl. Nuair nach bhfuil aon rud fágtha le comhlánú, leathnaíonn <kbd>Tab</kbd> an roghnú ina ionad sin: ainm, ainm le hiarmhír, conair ón taisceadán, conair ó fhréamh an chórais.
- **Osclaíonn an liosta san áit a bhfuil tú** agus cuireann sé réamhamharc ar a bhfuil tú ag díriú air isteach sa réimse; nuair a fhágann tú an liosta tugtar do théacs ar ais duit.
- **Nóta a bhogadh amach as an taisceadán** tar éis deimhnithe a chomhaireann na naisc a bhrisfidh sé. Cóipeáiltear amach é, ansin cuirtear sa bhruscar é, mar sin is féidir é a aisghabháil mar a dhéanfaí le haon nóta scriosta.
- Socrú **Taispeáin iarmhíreanna comhaid**, agus tuigtear conairí faoi chomharthaí athfhriotail (mar a chruthaíonn *Copy as path* Windows iad).
- **Tagann na socruithe chun cinn i gcuardach socruithe Obsidian** ar Obsidian 1.13 agus níos déanaí.

### Athraithe

- **Oireann conairí fada don phána.** Giorraítear na hainmneacha ón gceann is lú tairbhe ar dtús — ainm an taisceadáin, ansin an iarmhír, ansin na fillteáin, ainm an nóta féin ar deireadh — riamh thar an bpointe ar féidir iad a idirdhealú. Cuir an pointeoir ar ainm giorraithe chun é a léamh ina iomláine.
- **Roghnaíonn cliceáil ar ainm an nóta é gan a iarmhír**, mar sin níl baol ann a thuilleadh go n-athróidh athainmniú cineál an chomhaid.
- **Osclaíonn eochair an athainmnithe ar an ainm gan a iarmhír**, agus leathnaíonn tuilleadh brúnna an roghnú.
- **Coinníonn cliceáil ar fhillteán an chuid eile den chonair le feiceáil**, lasmuigh den taisceadán san áireamh.
- **Osclaíonn brabhsáil ar ais isteach i do thaisceadán comhaid mar nótaí**, le naisc agus cúlnaisc, seachas san amharcán seachtrach.

### Deisithe

- **Bhí lipéid na roghchlár i mBéarla i ngach teanga**; tagann siad anois ó aistriúcháin Obsidian féin.
- **Stop eochair an athainmnithe go tobann ag dialóg athainmnithe Obsidian** nuair a bhí an nóta scrollta thar a theideal.
- **Theastaigh dhá bhrú ó <kbd>Esc</kbd>** chun an réimse agus a liosta a dhúnadh.
- **D'oscail <kbd>Ctrl</kbd>+<kbd>Enter</kbd> nasc san eagarthóir** in ionad gníomhú ar bharra na conaire.
- **Chaill athainmniú lasmuigh den taisceadán an t-ainm clóscríofa** nuair a brúadh an glas.
- **D'fhéadfadh Tab lúbadh gan dul chun cinn** ar fhillteán atá suite in aice lena nóta fillteáin féin.

## 1.0.4 — 2026-08-13[^1.0.4]

### Curtha leis

- **Tá an nóta ina bhfuil tú marcáilte i ngorm** sa liosta, mar sin nuair a bhrabhsálann tú ar ais chuig a fhillteán feiceann tú cár thosaigh tú.

## 1.0.3 — 2026-08-13[^1.0.3]

### Doiciméadú

- Nascann an README leathanach an bhreiseáin in eolaire an phobail, agus tugadh na READMEanna aistrithe suas chun dáta.

## 1.0.2 — 2026-08-13[^1.0.2]

### Athraithe

- **Teastaíonn Obsidian 1.8.7 nó níos déanaí** (1.4.0 a bhí ann). Tá dhá ghné a bhfuil barra na conaire ag brath orthu — comhaid a chóipeáil agus an leid earráide faoin réimse — a éilíonn é.
- **Iompraíonn íoslódálacha na n-eisiúintí cruthúnas tionscnaimh sínithe**, mar sin is féidir leat a dheimhniú le `gh attestation verify` gur tógadh `main.js` ón stórlann seo.

### Deisithe

- **Theip go ciúin ar chomhad seachtrach atá ar iarraidh a oscailt san fheidhmchlár réamhshocraithe**; tuairiscítear an teip anois.

## 1.0.1 — 2026-08-13[^1.0.1]

### Deisithe

- **Sa mhód athainmnithe bhí nóta ag teacht salach air féin** — nuair a bhrabhsáil tú ar ais chuig a fhillteán féin cuireadh a ainm i bhfolach ón liosta, amhail is go raibh sé ag cur cosc ar a athainmniú féin.
- **Níor leathnaigh an chéad taispeáint fillteáin tar éis Obsidian a thosú faic.**
- **D'fhéadfadh fillteán a roghnú ón liosta deireadh a chur leis an mód athainmnithe** in ionad dul síos isteach ann.
- **D'fhéadfaí athruithe seachtracha a fhorscríobh go ciúin** ag scríbhneoir eile, ar nós Sync nó dara pána. Tá na scríbhinní adamhach anois.
- **Shil athshocrú imlíne an fhócais isteach in amhairc eile**; ní bhaineann sé anois ach le ceanntásca ar chuir Lure paiste orthu.

### Doiciméadú

- Tá an README agus an treoir úsáide ar fáil sna 44 teanga ar fad a thagann leis an mbreiseán.
- Luaigh an treoir socrú *Detect all file extensions* (Braith gach iarmhír chomhaid) Obsidian, ar a dtugtar *Gach síneadh comhaid a bhrath* (Show all file types) anois.

## 1.0.0 — 2026-08-10[^1.0.0]

An chéad eisiúint. Cuireann sé conair an taisceadáin ar féidir cliceáil uirthi agus í a chur in eagar in ionad ainm an chomhaid i gceanntásc nóta — barra seolta do do chuid nótaí, ar múnla cheann Dolphin.

### Curtha leis

- **Cliceáil ar fhillteán** chun liosta d'ábhar a mháthairfhillteáin a fháil, chun é a mhalartú ar cheann béal dorais agus an chuid eile den chonair a fhágáil mar atá.
- **Cliceáil ar an deighilteoir** i ndiaidh fillteáin chun é a thaispeáint agus a leathnú i gComhaid, nó chun a nóta fillteáin a oscailt nuair atá Folder notes á láimhseáil.
- **Cliceáil ar ainm an chomhaid nó ar an spás folamh** chun conair a chlóscríobh, le huathchríochnú: téann `/` síos isteach, téann <kbd>Cúlspás</kbd> leibhéal amháin amach, daingníonn <kbd>Enter</kbd>.
- **Mód bogtha/athainmnithe** a athraíonn na hidirghníomhaíochtaí céanna go bogadh agus athainmniú, leis na seiceálacha céanna a dhéanann Obsidian.
- **Osclaíonn <kbd>Ctrl</kbd> i gcluaisín nua é** — nó, sa mhód bogtha/athainmnithe, cóipeálann sé an nóta ann ina ionad sin.
- **Malartaíonn <kbd>F2</kbd>** idir an teideal laistigh den nóta agus barra na conaire.
- **Lasmuigh den taisceadán** (múchta de réir réamhshocraithe): osclaíonn ainm an taisceadáin do thaisceadáin eile, an fillteán baile, fréamh an chórais comhad agus na tiomántáin fheistithe. Ní scríobhtar aon rud amuigh ansin go dtí go ndíghlasálann tú é, agus ní féidir nóta a chóipeáil amach as an taisceadán ach amháin, riamh a bhogadh.
- **45 teanga.**

[^1.4.0]: Athruithe ó 1.3.0 i leith: <https://github.com/Gelaende51/obsidian-lure/compare/1.3.0...1.4.0>
[^1.3.0]: Athruithe ó 1.2.0 i leith: <https://github.com/Gelaende51/obsidian-lure/compare/1.2.0...1.3.0>
[^1.2.0]: Athruithe ó 1.1.2 i leith: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.2...1.2.0>
[^1.1.2]: Athruithe ó 1.1.1 i leith: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.1...1.1.2>
[^1.1.1]: Athruithe ó 1.1.0 i leith: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.0...1.1.1>
[^1.1.0]: Athruithe ó 1.0.4 i leith: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.4...1.1.0>
[^1.0.4]: Athruithe ó 1.0.3 i leith: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.3...1.0.4>
[^1.0.3]: Athruithe ó 1.0.2 i leith: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.2...1.0.3>
[^1.0.2]: Athruithe ó 1.0.1 i leith: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.1...1.0.2>
[^1.0.1]: Athruithe ó 1.0.0 i leith: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.0...1.0.1>
[^1.0.0]: An chéad eisiúint: <https://github.com/Gelaende51/obsidian-lure/releases/tag/1.0.0>
