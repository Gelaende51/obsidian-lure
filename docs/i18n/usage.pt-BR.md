<!-- Tradução de docs/usage.md — estado: commit 7b2691a.
     Tradução automática (Claude Opus 5), não revisada por falantes nativos.
     Os rótulos do plugin vêm de src/lang/translations.ts e os do Obsidian
     dos textos que o próprio aplicativo traz, então batem com o que você vê
     na tela. -->

**Leia isto em outros idiomas:** [English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · [Čeština](usage.cs.md) · [Dansk](usage.da.md) · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · [Bahasa Indonesia](usage.id.md) · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · [Norsk](usage.no.md) · [Polski](usage.pl.md) · [Português](usage.pt.md) · **Português (Brasil)** · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

# Uso

[← voltar ao README](README.pt-BR.md)

## O caminho

O caminho completo da nota dentro do cofre substitui o nome do arquivo sozinho no cabeçalho da visualização — a barra abaixo da fileira de abas, aquela que também tem os botões de voltar e avançar.

Há duas coisas clicáveis na linha, e **O nome da pasta abre a lista** decide qual faz o quê:

| | Nome da pasta | Separador depois dele |
| --- | --- | --- |
| **Ligado** (padrão) | Seleciona aquela pasta para edição | Abre a pasta |
| **Desligado** | Abre a pasta | Desce para aquela pasta |

"Abre a pasta" significa o que aquele clique faz num Obsidian sem acréscimos. Sem nenhum plugin escutando ali, a pasta é revelada na barra lateral do Explorador de arquivos — destacada e expandida para mostrar o conteúdo.

Com o [Folder notes](obsidian://show-plugin?id=folder-notes) instalado, o mesmo clique abre a nota daquela pasta. É o único plugin de notas de pasta que se viu reivindicar o caminho do cabeçalho; o [Folder Note](obsidian://show-plugin?id=folder-note-plugin) e o [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) gerenciam notas de pasta mas não escutam o clique no caminho, então com eles o separador revela a pasta como sempre. Veja [compatibilidade](../compatibility.md#verified-against).

Um separador só fica **sublinhado quando a pasta anterior tem mesmo uma nota de pasta**, de modo que o sublinhado é a promessa de que há algo para abrir. Todos os separadores continuam clicáveis de qualquer jeito — um sem sublinhado revela e expande sua pasta na barra lateral, o que o cursor de mãozinha continua sinalizando. O sublinhado sai do nome da pasta ao mesmo tempo: com a troca ligada, o nome abre a lista, então marcá-lo como o link para a nota seria mentira.

**O modo renomear/mover se sobrepõe aos dois**, diga o que disser a configuração: enquanto há uma movimentação pendente, nada na linha abre uma pasta, porque abri-la abandonaria a movimentação. Nomes de pasta são selecionados para edição e separadores descem — os dois são jeitos de escolher o destino — e o sublinhado some para mostrar que abrir está suspenso.

A **raiz do cofre** é o único segmento que não é um segmento de caminho. Não tem pasta acima de onde listar as vizinhas, então abre a [lista de locais](#navegar-fora-do-cofre) — seus outros cofres, a pasta pessoal, a raiz do sistema de arquivos e as unidades montadas.

## Clique num segmento: troque por um vizinho

Clicar no nome de uma pasta seleciona **o nome dessa pasta** num campo de texto e abre uma lista com a pasta **um nível acima** — a pasta que a contém. Digitar ou escolher uma entrada troca esta pasta por uma vizinha e deixa intacto tudo o que está abaixo, então `Projetos/2026/Início.md` → clique em `2026` → escolha `2025` te dá `Projetos/2025/Início.md`.

Clicar no **nome da nota** funciona do mesmo jeito em relação à pasta dela, e seleciona o nome do arquivo **incluindo a extensão** — renomear ou reapontar uma nota geralmente significa mudar isso também.

O clique na pasta já selecionou um segmento, então **mais um clique** amplia a seleção para a linha inteira — aquela pasta *e* tudo o que está abaixo — e o que você digitar substitui então o resto do caminho de uma vez. Funciona igual em navegação e no modo renomear/mover.

Isso só vale como continuação do clique que abriu o campo. Depois que você usa o campo, ele se comporta como qualquer outro campo de texto: um clique posiciona o cursor, um clique duplo pega uma palavra, um clique triplo pega a linha.

De todo jeito o resto do caminho continua visível ao redor do campo, como fichas antes e como texto não selecionado depois, então o caminho completo nunca some do cabeçalho. Digite para substituir a seleção, ou aperte <kbd>End</kbd> / <kbd>→</kbd> para mantê-la e editar dali. A lista mostra a pasta inteira independentemente do que estiver preenchido; ela só começa a filtrar quando você digita de verdade.

## Descer pelo separador

Clicar num separador (com **O nome da pasta abre a lista** desligado) desce para a pasta anterior: a lista mostra o conteúdo *daquela* pasta, e o resto do caminho abre selecionado no campo. Escolher uma pasta a acrescenta ao rastro do caminho e abre logo a próxima lista, então você pode descer uma árvore no clique sem sair da linha do cabeçalho.

## As entradas da lista são linhas de gerenciador de arquivos de verdade

Cada arquivo e pasta na lista se comporta como sua linha no Explorador de arquivos:

- **Clique com o botão direito** para o mesmo menu de contexto — *Nova nota* / *Nova pasta* numa pasta, *Abrir em uma nova aba* / *Renomear* / *Excluir* num arquivo — incluindo as entradas que outros plugins acrescentam aos menus de arquivo.
- **Arraste** uma entrada para qualquer lugar onde o Obsidian aceite um arquivo: para um editor para inserir um link, para cima de uma pasta no Explorador de arquivos para movê-lo, para a barra de abas para abri-lo.

O texto dos menus vem das traduções do próprio Obsidian, então combina com o resto do aplicativo em todos os idiomas.

## Digitar um caminho

- Clicar no **espaço vazio** antes ou depois do caminho abre um campo de texto preenchido com o caminho completo e todo selecionado — digite por cima, ou edite ali mesmo. (Clicar no nome do arquivo seleciona só o nome; veja acima.)
- Digitar enquanto o rastro do caminho está visível converte o último segmento num campinho com autocompletar ao vivo limitado à pasta atual.
- `/` confirma o segmento atual e desce para dentro dele.
- <kbd>Backspace</kbd> num campo vazio volta para a pasta acima, reabrindo o nome dela com o cursor no fim.
- <kbd>Enter</kbd> confirma; <kbd>Esc</kbd> ou um clique em outro lugar cancela e volta para o caminho real do arquivo.

O campo não tem enfeite — sem caixa, sem borda — então se lê como o próprio texto do caminho, e cresce sozinho conforme você digita.

## A navegação nunca mexe no arquivo aberto

No modo padrão (navegação) a nota aberta **nunca** é renomeada nem movida.

- Um caminho que corresponde a um arquivo existente o abre.
- Um caminho que ainda não existe pergunta *"Criar um novo arquivo?"*. Ao confirmar são criadas as pastas que faltam e o arquivo; ao cancelar não acontece absolutamente nada.

## <kbd>Ctrl</kbd> — nova aba, e copiar em vez de mover

Segurar <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> no macOS) enquanto escolhe um arquivo da lista, ou enquanto aperta <kbd>Enter</kbd> num caminho, manda o resultado para uma **nova aba** em vez desta:

| | Sem nada | Com <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Escolher ou digitar um arquivo existente | Abre aqui | Abre em uma nova aba |
| Digitar um caminho que não existe | Pergunta e depois abre aqui | Pergunta e depois abre em uma nova aba |
| Confirmar um caminho no modo renomear/mover | **Move** a nota para lá | **Copia** para lá e abre a cópia em uma nova aba |

O modificador é lido com a regra do próprio Obsidian, então se comporta exatamente como num link ou numa linha do Explorador de arquivos — o clique do meio também significa "nova aba", <kbd>Ctrl</kbd>+<kbd>Alt</kbd> significa uma divisão e <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> uma nova janela.

Copiar se recusa a sobrescrever, exatamente como mover — inclusive para o próprio caminho da nota, onde não há nada sensato para copiar.

## Navegar fora do cofre

**Isto vem desligado por padrão.** Ligue antes **Acesso a arquivos externos** nas configurações — ler e escrever fora do cofre é a única coisa que este plugin faz e que o Obsidian sozinho não faz, então se entra nisso de propósito em vez de ter que sair. Com a opção desligada, o nome do cofre simplesmente revela seu cofre no Explorador de arquivos, e aqui nada olha além disso.

Clicar no **nome do cofre** (ou no ícone 🏠, quando *Mostrar o nome do cofre* está desligado) abre uma lista de lugares em vez de conteúdos:

- **Seus outros cofres**, lidos do registro do próprio Obsidian, primeiro o aberto mais recentemente, cada um sob o ícone de cofre do Obsidian — o mesmo que o aplicativo usa nos comandos de cofre. O cofre que você já tem aberto leva uma casinha: é de onde a linha parte por padrão, não um lugar para ir.
- A **pasta pessoal**, sob o nome da sua conta, marcada com um `~`. O Lucide não tem til, então esse ícone é desenhado pelo plugin na própria grade 24×24 do Lucide e com a mesma espessura de traço — um ícone que falta ao conjunto, não um caractere de texto sentado no meio de ícones.
- A **raiz do sistema de arquivos**, com o rótulo `root` — sem tradução, porque é esse o nome dela em todo sistema — em vez de `/`, que ao lado do separador que vem depois se leria como um passo vazio.
- As **unidades montadas**, com um ícone por tipo onde isso é barato de determinar: compartilhamentos de rede, discos ópticos, disquetes e mídias removíveis têm o seu; qualquer outra coisa recebe uma unidade genérica. No Windows as unidades aparecem como `C:` com um ícone genérico — nomes de volume e tipos exatos exigem WMI, que de propósito não é usado.

Escolher outro cofre **não faz o Obsidian mudar para ele.** Tudo o que você tem aberto continua aberto; o caminho simplesmente começa a navegar ali. É esse todo o sentido de ter isso na barra de caminho em vez de remeter ao seletor de cofres da barra lateral.

### Enquanto você está fora

O caminho **começa no lugar que você escolheu**, não na organização de pastas da máquina — escolha `Arquivo` e a linha diz `Arquivo / notas / …`, não `/home/voce/Vaults/Arquivo/notas/…`. O primeiro segmento leva um ícone conforme o que é (cofre, pasta pessoal, unidade), e <kbd>Backspace</kbd> para ali em vez de continuar subindo pelo resto do sistema de arquivos. Com *Mostrar o nome do cofre* desligado, esse segmento é só o ícone — a configuração é sobre o segmento inicial da linha seja qual for o cofre que ele nomeie, não só o seu.

A barra de caminho fica **emoldurada na cor de erro** — o mesmo anel que o modo renomear desenha — durante todo o tempo em que apontar para fora do seu cofre. Ela marca uma condição permanente, não um instante: enquanto está lá, nada do tratamento próprio do Obsidian se aplica ao que a linha mostra, e a escrita fica travada até você dizer o contrário.

No mais, navegar funciona como aqui dentro: fichas, separadores, digitação, autocompletar, <kbd>Backspace</kbd> para sair. Também valem as mesmas regras de visibilidade, então extensões não suportadas continuam precisando do **Detectar todas as extensões dos arquivos** do Obsidian e os arquivos ocultos continuam precisando da configuração deste plugin.

**Clique com o botão direito e arrasto** nas entradas da lista não funcionam lá fora — são tratadores do próprio Explorador de arquivos, e precisam de um arquivo que o cofre conheça.

### Escrever fora do cofre

Tudo o que escreve vem **travado por padrão**. Um **cadeado** aparece ao lado do botão de renomear no cabeçalho durante todo o tempo em que a linha apontar para fora do seu cofre; ao apertá-lo o cadeado abre e fica vermelho, combinando com o anel em volta da linha.

A permissão é concedida **a um lugar, não a um momento**: ela sobrevive a tudo o que você faria trabalhando num lugar só — terminar uma movimentação, clicar fora do campo, abrir um arquivo — e acaba quando você escolhe outro cofre, unidade ou raiz na lista, quando a linha volta a um arquivo do cofre, ou quando você aperta o cadeado de novo. Assim, uma série de movimentações dentro de uma pasta custa um aperto, não um por arquivo.

Com o cadeado aberto, a barra de caminho se comporta lá fora como se comporta aqui dentro:

| Gesto | Resultado |
| --- | --- |
| Digitar um nome que não existe, <kbd>Enter</kbd> | A mesma pergunta "criar?" de aqui dentro; as pastas que faltam também são criadas. Um nome sem extensão vira um `.md`, exatamente como aqui dentro |
| Modo renomear/mover, digitar um nome novo | Renomeia o arquivo que a linha está mostrando. Um nome sem extensão mantém a do arquivo — aqui fora uma pasta guarda todo tipo de arquivo, e um renomear não deveria transformar em silêncio um `.png` num `.md` |
| Modo renomear/mover, navegar para outro lugar, escolher **manter este nome** | Move para lá com o nome que já tem |
| Segurar <kbd>Ctrl</kbd> em qualquer um dos dois | Copia em vez de mover, e abre a cópia em uma nova aba |

Com o cadeado fechado, tudo isso informa o que está impedindo em vez de acontecer. Em nenhum dos dois estados algo é sobrescrito: um destino que já existe é recusado, e a recusa é do próprio sistema de arquivos (`COPYFILE_EXCL`, uma criação exclusiva) e não uma checagem que poderia perder a corrida. Uma movimentação entre sistemas de arquivos — de um pendrive, de um compartilhamento de rede — recorre a copiar e depois apagar, e o original só é removido depois que a cópia chegou.

**Uma coisa que o cadeado não destrava: mover uma nota para *fora* do seu cofre.** O `fileManager` não consegue seguir um arquivo através dessa fronteira, então todos os links apontando para a nota quebrariam em silêncio e o Obsidian simplesmente a veria sumir. Segurar <kbd>Ctrl</kbd> a copia para fora, o que não tem esse problema, e o aviso diz isso. O caminho contrário — trazer um arquivo de fora *para* o cofre — também ainda não está implementado.

### Abrir um arquivo externo

O editor do Obsidian só funciona com arquivos de dentro do cofre, então um arquivo externo **não pode** ser aberto como uma nota de verdade com links, backlinks e o resto — é um limite do aplicativo, não deste plugin. Escolher um abre uma **prévia**, somente leitura até você dizer o contrário:

| Tipo | Mostrado como |
| --- | --- |
| `.md`, `.markdown` | Markdown renderizado |
| Imagens, áudio, vídeo, PDF | Reprodutor/visualizador nativo |
| Qualquer outro arquivo de **texto** (`.json`, `.css`, `.log`, `.txt`, …) | Texto puro do jeito que está |
| Formatos binários sem visualizador (`.zip`, `.exe`, …) | Entregues ao *Abrir externamente* |

O visualizador tem duas leituras de um arquivo e, como elas se excluem, só aparece aquela **para a qual** você mudaria:

| | O que faz | Padrão para |
| --- | --- | --- |
| **Ver como Markdown** | Renderiza o arquivo como uma nota, somente leitura | `.md`, `.markdown` |
| **Editar como texto** | O código-fonte, editável | todo o resto |

Fora do cofre, **Editar como texto** é também o aperto que tira o somente leitura — o modo e a permissão são um gesto só em vez de dois botões para raciocinar. Ele fica avermelhado **sempre que apertá-lo tiraria o somente leitura**, quer você esteja armando a edição ali mesmo, quer venha direto da visualização renderizada; dentro do cofre não há nada a destravar, então ele fica normal. **Ver como Markdown** ganha uma leve lavagem da cor de destaque — o mesmo tom que o Obsidian dá ao texto selecionado — marcando-o como o caminho de volta e não como um chamado à ação.

Como o botão acompanha a *edição* e não o modo bruto, um arquivo que está somente leitura na visualização de texto continua oferecendo **Editar como texto**: é esse o aperto que a arma. Um arquivo em que nunca se poderá digitar — truncado ou ilegível — diz **Ver como texto**, já que é tudo o que o aperto pode entregar.

Os padrões são os úteis e não os literais: um `#` num script de shell é um comentário, não um título, então renderizar um `.log` como Markdown o engoliria em silêncio. Qualquer um dos padrões pode ser trocado arquivo a arquivo, e a escolha vai para o histórico da aba, então voltar/avançar e uma área de trabalho reaberta a mantêm — muitas notas vivem em arquivos `.txt`, e muitos arquivos `.md` se leem melhor como código-fonte.

**Os arquivos do seu cofre são editáveis de cara**, sem destravar nada: *Editar como texto* é um editor de verdade e salva conforme você digita.

**A edição é lembrada na troca.** Ir para *Ver como Markdown* a suspende — uma renderização estática não tem onde digitar, e a Visualização ao vivo precisa do editor do próprio Obsidian, que só existe para arquivos de dentro do cofre — então nada afirma que você está editando enquanto está lá. Ao voltar para *Editar como texto* se retoma de onde parou.

**Os arquivos de fora do cofre abrem somente leitura, e *Editar como texto* tira isso.** Esse aperto é todo o portão: até ele acontecer, lá fora nada é escrito. Depois o arquivo salva conforme você digita, exatamente como um do cofre; e a linha de status passa de um cadeado para um lápis. O destravamento cobre aquele arquivo naquela aba — navegar para outro arquivo trava de novo, e de propósito isso não é guardado no histórico da aba, para que uma área de trabalho reaberta nunca volte com a escrita já armada sobre um arquivo de sistema que você não lembra de ter aberto.

**Arquivos truncados continuam somente leitura de qualquer jeito** — salvar o que está na tela descartaria tudo o que está além do limite, então o botão nem é oferecido em vez de ser oferecido e recusado. O mesmo vale para um arquivo que não deu para ler: não há nada para gravar de volta a não ser um painel vazio.

Se a escrita falhar — uma montagem somente leitura, um arquivo que não é seu — o motivo dado pelo próprio sistema aparece num aviso.

Arquivos muito grandes são mostrados truncados, e a linha de status diz isso em vez de deixar você descobrir — ao lado das outras condições e não pendurada nos botões, porque é um fato sobre o arquivo como os outros. Os limites são medidos contra um renderizador de verdade e não chutados — dispor um megabyte de texto num painel só mata na hora o processo de renderização do Obsidian, e o Markdown custa várias vezes mais por byte que o texto puro, então cada um tem seu limite e uma única linha enorme é encurtada mesmo quando o arquivo inteiro é pequeno.

**As linhas de status são rótulos, e a explicação é uma dica.** Cada linha diz o que é verdade nas poucas palavras necessárias — *Fora do seu cofre*, *Sem editor para este tipo de arquivo*, *Truncado — arquivo grande demais* — porque os botões ao lado já dizem em que estado o arquivo está. Passar o mouse por cima traz a frase: por que o Obsidian não pode abri-lo como nota, o que aconteceria de outro jeito com este tipo de arquivo, o que o truncamento te custa.

Isso vale também para os arquivos de **dentro** do seu cofre. O Obsidian entrega qualquer extensão para a qual não tem visualização direto ao aplicativo padrão da área de trabalho — então um `.txt` ou um `.json` no seu cofre te tiraria do Obsidian inteiramente. Esses agora abrem no mesmo visualizador, com o anel laranja, porque "abra no Obsidian" foi o que você pediu — e, sendo arquivos do cofre, são editáveis ali sem destravar nada. Arquivos binários sem visualizador mantêm o comportamento do Obsidian; não há nada para mostrar.

A prévia abre **na aba em que você estava**, então voltar/avançar te devolvem à nota de onde veio; segure <kbd>Ctrl</kbd> para uma nova aba, como em todo lugar. A barra do cabeçalho continua mostrando o caminho do arquivo externo enquanto ele está aberto, para você poder continuar navegando dali.

Uma linha discreta acima do conteúdo oferece as saídas:

- **Abrir em *(cofre)*** — aparece quando o arquivo pertence a um dos seus outros cofres. Entrega-o ao próprio tratador de URI do Obsidian, que abre a janela daquele cofre com a nota dentro, como uma nota de verdade e editável. Esta janela fica exatamente como estava; nada muda embaixo de você.
- **Ver como Markdown** / **Editar como texto** — as duas leituras; a segunda também tira o somente leitura fora do cofre.
- **Abrir externamente** — entrega o arquivo ao aplicativo padrão da sua área de trabalho, incluindo os formatos binários que este visualizador não consegue mostrar.

Nada de fora do seu cofre é escrito sem você apertar antes *Editar como texto*. Veja a seção [Fora do cofre](README.pt-BR.md#fora-do-cofre) do README para a divulgação completa.

## As duas cores de aviso

| | Quando | O que significa |
| --- | --- | --- |
| Anel **vermelho** na barra de caminho | A linha aponta para fora do seu cofre | O Obsidian não pode abrir o que está lá como uma nota, e lá fora nada é escrito até você abrir o cadeado. |
| Anel **laranja** na barra de caminho, entradas laranja na lista | O arquivo é de um tipo de texto para o qual o Obsidian não tem visualização | Um cuidado. O Obsidian o entregaria ao aplicativo padrão da sua área de trabalho; o plugin o mostra em vez disso. |

Os **dois são independentes, e podem valer ao mesmo tempo** — um `.json` externo está fora do seu cofre *e* é um tipo para o qual o Obsidian não tem editor. No visualizador eles aparecem como linhas separadas, cada uma declarando só o próprio fato. Na barra de caminho o vermelho ganha quando os dois valem, já que dois anéis seriam só ruído.

O nível laranja é deliberadamente estreito. Tipos registrados (Markdown, tela, imagens, PDF, áudio, vídeo) são tratados direito e não recebem nada. Arquivos binários também não — você não vai transformar um `.zip` numa bagunça sem querer. O que sobra é exatamente o perigo: um `.json`, `.css` ou `.log` que o **Detectar todas as extensões dos arquivos** tornou visível.

O vermelho ganha onde os dois valeriam; dois anéis ao mesmo tempo seriam só ruído.

## Modo mover/renomear

O botão de lápis na ponta direita do cabeçalho — ao lado do botão de modo de visualização, do mesmo tamanho dos botões nativos — liga e desliga o modo mover/renomear. A linha do cabeçalho fica então emoldurada na cor de destaque, exatamente como ao renomear no Explorador de arquivos. Os mesmos cliques e teclas agora confirmam uma movimentação ou um renomear via `fileManager.renameFile` do Obsidian, então todos os links para a nota acompanham.

Enquanto renomeia:

- O nome de arquivo atual fica fixado na lista de toda pasta, então mover uma nota sem renomear é um clique só.
- Nomes já ocupados na pasta de destino ficam em cinza mas continuam selecionáveis.
- O que você digita é validado ao vivo contra as próprias regras de renomear do Obsidian — mesmos conjuntos de caracteres, mesmas mensagens, mesma dica vermelha que aparece ao renomear na árvore de arquivos — então um nome ilegal ou em conflito é sinalizado enquanto você digita e não pode ser confirmado.
- Clicar fora da barra do cabeçalho, ou o cabeçalho perder o foco, encerra o modo renomear.

## Uma tecla para os dois renomeares

O comando de renomear (<kbd>F2</kbd> por padrão, ou o que você tiver reatribuído) **alterna** entre o renomear do título embutido do Obsidian e a barra de caminho do cabeçalho deste plugin com o caminho completo selecionado. Se você desligou o título embutido do Obsidian, a barra de caminho do cabeçalho vira o único alvo, então a tecla nunca fica sem fazer nada.

Isso funciona embrulhando o comando `workspace:edit-file-title` em vez de sequestrar a tecla, então reatribuir o atalho e rodar o comando pela paleta continuam funcionando igual.

## Como as entradas da lista são coloridas

| Cor | Significa |
| --- | --- |
| **Roxo** | Uma nota (`.md`, `.markdown`) — o que o Obsidian vai abrir como nota, destacado numa pasta de conteúdo misturado |
| **Laranja** | Um tipo de texto para o qual o Obsidian não tem visualização; veja [as cores de aviso](#as-duas-cores-de-aviso) |
| **Apagado** | Fora do seu cofre, então o tratamento próprio do cofre não se aplica |
| **Azul** | Só no modo renomear/mover: a entrada *manter este nome* — um destino em vez de algo que existe, então ela se destaca dos nomes de arquivo no meio dos quais está |
| **Cinza** | Só no modo renomear/mover: o nome está ocupado. Continua selecionável — escolhê-lo preenche o campo, onde a validação sinaliza o conflito |

## Regras de visibilidade

- Arquivos com extensões não suportadas só aparecem nas listas se a configuração **Detectar todas as extensões dos arquivos** do Obsidian estiver ligada.
- A lista mostra no máximo 100 entradas — o limite do próprio Obsidian. Quando uma pasta tem mais, a última linha diz quantas ficaram de fora; continue digitando para estreitar a lista.
- Arquivos e pastas ocultos só aparecem se a configuração **Mostrar arquivos ocultos** deste plugin estiver ligada.
- **A proteção contra sobrescrita funciona igual seja qual for a visibilidade** — um arquivo oculto continua te impedindo de sobrescrevê-lo.

## Resumo

| Você quer… | Faça isto |
| --- | --- |
| Abrir uma pasta (a nota dela, ou revelá-la) | Clique no separador **depois** daquela pasta |
| Trocar uma pasta por uma vizinha | Clique no nome dessa pasta, depois digite ou escolha |
| Renomear ou reapontar a nota | Clique no nome da nota — extensão incluída |
| Ver o conteúdo de uma pasta | Clique no nome dessa pasta; a lista mostra a pasta que a contém, então clique na pasta **abaixo** da que você quer |
| Redigitar uma pasta e tudo o que está abaixo | **Clique duplo** no nome dessa pasta, depois digite |
| Editar o caminho a partir de uma pasta | Clique no nome dessa pasta, depois <kbd>End</kbd> ou <kbd>→</kbd> para desselecionar |
| Pular para um arquivo digitando o caminho | Clique no nome do arquivo ou no espaço vazio, digite, <kbd>Enter</kbd> |
| Abrir um arquivo em uma nova aba | <kbd>Ctrl</kbd> ao escolhê-lo, ou <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| Copiar a nota para outro lugar em vez de movê-la | Lápis, depois <kbd>Ctrl</kbd> ao escolher ou confirmar o destino |
| Criar uma nota num caminho que não existe | Digite o caminho, <kbd>Enter</kbd>, confirme a pergunta |
| Descer um nível enquanto digita | Digite `/` |
| Subir um nível enquanto digita | <kbd>Backspace</kbd> no campo vazio |
| Mover ou renomear a nota aberta | Clique no lápis, depois navegue ou digite como acima |
| Mover sem renomear | Lápis → clique até a pasta de destino → escolha o nome de arquivo atual fixado no topo |
| Renomear no lugar | <kbd>F2</kbd> duas vezes (o primeiro vai para o título embutido, o segundo para o cabeçalho) |
| Pular para outro cofre, para a pasta pessoal ou para uma unidade | Clique no nome do cofre |
| Abrir um arquivo de fora do cofre | Nome do cofre → escolha um lugar → navegue → escolha o arquivo (somente leitura até *Editar como texto*) |
| Cancelar qualquer coisa | <kbd>Esc</kbd>, ou clique fora da barra do cabeçalho |

## Configurações

| Configuração | Valores | Padrão | O que faz |
| --- | --- | --- | --- |
| **Alinhamento** | Esquerda / Centralizado / Direita | Esquerda | Onde o caminho fica na linha do cabeçalho. *Centralizado* combina com o visual clássico do Obsidian. |
| **Separador** | Qualquer caractere | `/` | O separador desenhado entre os segmentos. Na frente do campo de texto há seis predefinições de um clique (`/ > ▸ › \ •`). |
| **Mostrar o nome do cofre** | Ligado / Desligado | Ligado | Se o próprio cofre é o primeiro segmento do caminho. Desligado, esse segmento vira um ícone 🏠 em vez de sumir, para o caminho continuar começando em algo clicável. |
| **O nome da pasta abre a lista** | Ligado / Desligado | Ligado | Troca o que o nome de uma pasta e o separador depois dele fazem — veja [a tabela acima](#o-caminho). Com o [Folder notes](obsidian://show-plugin?id=folder-notes) o separador abre notas de pasta. Nunca se aplica no modo renomear/mover. |
| **Mostrar arquivos ocultos** | Ligado / Desligado | Desligado | Se arquivos e pastas ocultos são listados nas listas. A proteção contra sobrescrita vale de qualquer jeito. |
| **Acesso a arquivos externos** | Ligado / Desligado | **Desligado** | Se o nome do cofre abre a lista de locais. Desligado, nada no plugin olha além deste cofre. |

## Substituir os ícones

O Lure desenha três ícones: o da raiz do cofre (quando **Mostrar o nome do cofre** está desligado), o botão de renomear/mover, e o cadeado que controla a escrita fora do cofre. Todos podem ser trocados por um tema ou um trecho de CSS — defina o glifo substituto e esconda o que vem junto numa regra só:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* O cadeado tem dois estados; `.is-active` é o aberto. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}

.lure-unlock-btn.is-active {
	--lure-icon-glyph: "🔓";
}
```

`--lure-icon-glyph` aceita qualquer coisa válida em `content` do CSS, então `url(...)` serve para uma imagem tanto quanto para um glifo de texto ou um emoji. Deixe `--lure-icon-svg` quieto para manter o ícone do Lucide e desenhar seu glifo do lado.
