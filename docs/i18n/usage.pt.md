<!-- Tradução de docs/usage.md — estado: commit 7b2691a.
     Tradução automática (Claude Opus 5), não revista por falantes nativos.
     As etiquetas do plugin vêm de src/lang/translations.ts e as do Obsidian
     dos textos que a própria aplicação traz, por isso coincidem com o que vê
     no ecrã. -->

**Leia isto noutras línguas:** [English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · [Čeština](usage.cs.md) · [Dansk](usage.da.md) · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · [Bahasa Indonesia](usage.id.md) · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · [Norsk](usage.no.md) · [Polski](usage.pl.md) · **Português** · [Português (Brasil)](usage.pt-BR.md) · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

# Utilização

[← voltar ao README](README.pt.md)

## O caminho

O caminho completo da nota dentro do cofre substitui o nome do ficheiro sozinho no cabeçalho da vista — a barra abaixo da fila de separadores, a que também tem os botões de recuar e avançar.

Há duas coisas clicáveis na linha, e **O nome da pasta abre a lista** decide qual faz o quê:

| | Nome da pasta | Separador a seguir |
| --- | --- | --- |
| **Ligado** (predefinição) | Seleciona essa pasta para edição | Abre a pasta |
| **Desligado** | Abre a pasta | Desce para essa pasta |

«Abre a pasta» significa aquilo que esse clique faz num Obsidian sem acrescentos. Sem nenhum plugin à escuta ali, a pasta é mostrada na barra lateral do Explorador de ficheiros — realçada e expandida para ver o seu conteúdo.

Com o [Folder notes](obsidian://show-plugin?id=folder-notes) instalado, o mesmo clique abre antes a nota dessa pasta. É o único plugin de notas de pasta que se viu reclamar o caminho do cabeçalho; o [Folder Note](obsidian://show-plugin?id=folder-note-plugin) e o [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) gerem notas de pasta mas não escutam o clique no caminho, por isso com esses o separador mostra a pasta como sempre. Veja [compatibilidade](../compatibility.md#verified-against).

Um separador só fica **sublinhado quando a pasta anterior tem mesmo uma nota de pasta**, de modo que o sublinhado é a promessa de que há algo para abrir. Todos os separadores continuam clicáveis de qualquer forma — um sem sublinhado mostra e expande a sua pasta na barra lateral, o que o cursor em forma de mão continua a assinalar. Ao mesmo tempo, o sublinhado deixa o nome da pasta: com a troca ligada, o nome abre a lista, por isso marcá-lo como a ligação para a nota seria mentira.

**O modo renomear/mover prevalece sobre ambos**, diga o que disser a opção: enquanto há uma movimentação pendente, nada na linha abre uma pasta, porque abri-la abandonaria a movimentação. Os nomes das pastas selecionam-se para edição e os separadores descem — ambos são formas de escolher o destino — e o sublinhado desaparece para mostrar que abrir está suspenso.

A **raiz do cofre** é o único segmento que não é um segmento de caminho. Não tem pasta acima de onde listar as vizinhas, por isso abre antes a [lista de localizações](#navegar-fora-do-cofre) — os seus outros cofres, a pasta pessoal, a raiz do sistema de ficheiros e as unidades montadas.

## Clique num segmento: troque-o por um vizinho

Clicar no nome de uma pasta seleciona **o nome dessa pasta** num campo de texto e abre uma lista com a pasta **um nível acima** — a pasta que a contém. Escrever ou escolher uma entrada troca esta pasta por uma vizinha e deixa intacto tudo o que está abaixo, por isso `Projetos/2026/Arranque.md` → clique em `2026` → escolha `2025` dá-lhe `Projetos/2025/Arranque.md`.

Clicar no **nome da nota** funciona da mesma maneira em relação à sua própria pasta, e seleciona o nome do ficheiro **incluindo a extensão** — renomear ou reapontar uma nota costuma implicar mudá-la também.

O clique na pasta já selecionou um segmento, por isso **mais um clique** alarga a seleção à linha inteira — essa pasta *e* tudo o que está abaixo — e o que escrever substitui então o resto do caminho de uma vez. Funciona igual em navegação e no modo renomear/mover.

Isso só vale como continuação do clique que abriu o campo. Depois de usar o campo, ele comporta-se como qualquer outro campo de texto: um clique coloca o cursor, um duplo clique apanha uma palavra, um triplo clique apanha a linha.

De qualquer forma o resto do caminho continua visível à volta do campo, como fichas antes e como texto não selecionado depois, por isso o caminho completo nunca desaparece do cabeçalho. Escreva para substituir a seleção, ou carregue em <kbd>Fim</kbd> / <kbd>→</kbd> para a manter e editar a partir daí. A lista mostra a pasta inteira independentemente do que estiver preenchido; só começa a filtrar quando escreve mesmo.

## Descer pelo separador

Clicar num separador (com **O nome da pasta abre a lista** desligado) desce para a pasta anterior: a lista mostra o conteúdo *dessa* pasta, e o resto do caminho abre selecionado no campo. Escolher uma pasta acrescenta-a ao rasto do caminho e abre logo a lista seguinte, por isso pode descer uma árvore à custa de cliques sem sair da linha do cabeçalho.

## As entradas da lista são verdadeiras linhas de gestor de ficheiros

Cada ficheiro e pasta na lista comporta-se como a sua linha no Explorador de ficheiros:

- **Clique com o botão direito** para o mesmo menu de contexto — *Nova nota* / *Nova pasta* numa pasta, *Abrir numa nova aba* / *Renomear* / *Eliminar* num ficheiro — incluindo as entradas que outros plugins acrescentam aos menus de ficheiro.
- **Arraste** uma entrada para qualquer sítio onde o Obsidian aceite um ficheiro: para um editor para inserir uma ligação, para cima de uma pasta no Explorador de ficheiros para o mover, para a barra de separadores para o abrir.

O texto dos menus vem das traduções do próprio Obsidian, por isso encaixa com o resto da aplicação em todas as línguas.

## Escrever um caminho

- Clicar no **espaço vazio** antes ou depois do caminho abre um campo de texto preenchido com o caminho completo e totalmente selecionado — escreva por cima, ou edite ali mesmo. (Clicar no nome do ficheiro seleciona apenas o nome; veja acima.)
- Escrever enquanto o rasto do caminho está visível converte o último segmento num pequeno campo com preenchimento automático em tempo real limitado à pasta atual.
- `/` confirma o segmento atual e desce para dentro dele.
- <kbd>Retrocesso</kbd> num campo vazio volta a sair para a pasta acima, reabrindo o nome dela com o cursor no fim.
- <kbd>Enter</kbd> confirma; <kbd>Esc</kbd> ou um clique noutro sítio cancela e volta ao caminho real do ficheiro.

O campo não tem enfeites — sem caixa, sem contorno — por isso lê-se como o próprio texto do caminho, e cresce sozinho à medida que escreve.

## A navegação nunca toca no ficheiro aberto

No modo predefinido (navegação) a nota aberta **nunca** é renomeada nem movida.

- Um caminho que corresponde a um ficheiro existente abre-o.
- Um caminho que ainda não existe pergunta *«Criar um novo ficheiro?»*. Ao confirmar são criadas as pastas em falta e o ficheiro; ao cancelar não acontece absolutamente nada.

## <kbd>Ctrl</kbd> — nova aba, e copiar em vez de mover

Manter <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> no macOS) enquanto escolhe um ficheiro da lista, ou enquanto carrega em <kbd>Enter</kbd> num caminho, manda o resultado para uma **nova aba** em vez desta:

| | Sem mais | Com <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Escolher ou escrever um ficheiro existente | Abre aqui | Abre numa nova aba |
| Escrever um caminho que não existe | Pergunta e depois abre aqui | Pergunta e depois abre numa nova aba |
| Confirmar um caminho no modo renomear/mover | **Move** a nota para lá | **Copia-a** para lá e abre a cópia numa nova aba |

O modificador é lido com a regra do próprio Obsidian, por isso comporta-se exatamente como numa ligação ou numa linha do Explorador de ficheiros — o clique do meio também significa «nova aba», <kbd>Ctrl</kbd>+<kbd>Alt</kbd> significa uma divisão e <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> uma nova janela.

Copiar recusa-se a substituir, exatamente como mover — incluindo para o próprio caminho da nota, onde não há nada de sensato para copiar.

## Navegar fora do cofre

**Isto está desligado por predefinição.** Ligue primeiro **Acesso a ficheiros externos** nas definições — ler e escrever fora do cofre é a única coisa que este plugin faz e que o Obsidian por si só não faz, por isso entra-se nisso de propósito em vez de ter de sair. Com a opção desligada, o nome do cofre limita-se a mostrar o seu cofre no Explorador de ficheiros, e aqui nada olha alguma vez para lá disso.

Clicar no **nome do cofre** (ou no ícone 🏠, quando *Mostrar o nome do cofre* está desligado) abre uma lista de sítios em vez de conteúdos:

- **Os seus outros cofres**, lidos do registo do próprio Obsidian, primeiro o aberto mais recentemente, cada um sob o ícone de cofre do Obsidian — o mesmo que a aplicação usa nos seus comandos de cofre. O cofre que já tem aberto leva antes uma casa: é de onde a linha parte por predefinição, não um sítio para onde ir.
- A **pasta pessoal**, sob o nome da sua conta, marcada com um `~`. O Lucide não tem til, por isso este ícone é desenhado pelo plugin na própria grelha 24×24 do Lucide e com a mesma espessura de traço — um ícone que falta ao conjunto, não um carácter de texto sentado no meio de ícones.
- A **raiz do sistema de ficheiros**, com a etiqueta `root` — sem tradução, porque é esse o seu nome em todos os sistemas — em vez de `/`, que a seguir ao separador que vem depois se leria como um passo vazio.
- As **unidades montadas**, com um ícone por tipo onde isso é barato de determinar: partilhas de rede, discos óticos, disquetes e suportes amovíveis têm o seu; tudo o resto recebe uma unidade genérica. No Windows as unidades aparecem como `C:` com um ícone genérico — os nomes dos volumes e os tipos exatos exigem WMI, que de propósito não é usado.

Escolher outro cofre **não faz o Obsidian mudar para ele.** Tudo o que tem aberto continua aberto; o caminho limita-se a começar a navegar ali. É esse todo o sentido de o ter na barra de caminho em vez de remeter para o seletor de cofres da barra lateral.

### Enquanto está fora

O caminho **começa no sítio que escolheu**, não na organização de pastas da máquina — escolha `Arquivo` e a linha diz `Arquivo / notas / …`, não `/home/voce/Vaults/Arquivo/notas/…`. O primeiro segmento leva um ícone conforme o que é (cofre, pasta pessoal, unidade), e <kbd>Retrocesso</kbd> para aí em vez de continuar a subir pelo resto do sistema de ficheiros. Com *Mostrar o nome do cofre* desligado, esse segmento é só o ícone — a opção é sobre o segmento inicial da linha seja qual for o cofre que ele nomeie, não apenas o seu.

A barra de caminho fica **emoldurada na cor de erro** — o mesmo anel que o modo renomear desenha — durante todo o tempo em que apontar para fora do seu cofre. Marca uma condição permanente, não um instante: enquanto está lá, nada do tratamento próprio do Obsidian se aplica ao que a linha mostra, e a escrita está bloqueada até dizer o contrário.

De resto, navegar funciona como cá dentro: fichas, separadores, escrita, preenchimento automático, <kbd>Retrocesso</kbd> para sair. Também se aplicam as mesmas regras de visibilidade, por isso as extensões não suportadas continuam a precisar de **Detetar todas as extensões de ficheiros** do Obsidian e os ficheiros ocultos continuam a precisar da opção deste plugin.

**O clique com o botão direito e o arrasto** nas entradas da lista não funcionam lá fora — são tratadores do próprio Explorador de ficheiros, e precisam de um ficheiro que o cofre conheça.

### Escrever fora do cofre

Tudo o que escreve está **bloqueado por predefinição**. Aparece um **cadeado** ao lado do botão de renomear no cabeçalho durante todo o tempo em que a linha apontar para fora do seu cofre; ao carregar nele o cadeado abre-se e fica vermelho, a condizer com o anel à volta da linha.

A permissão é concedida **a um sítio, não a um momento**: sobrevive a tudo o que faria a trabalhar num lugar — terminar uma movimentação, clicar fora do campo, abrir um ficheiro — e termina quando escolhe outro cofre, unidade ou raiz na lista, quando a linha volta a um ficheiro do cofre, ou quando carrega outra vez no cadeado. Assim, uma série de movimentações dentro de uma pasta custa uma pressão, não uma por ficheiro.

Com o cadeado aberto, a barra de caminho comporta-se lá fora como se comporta cá dentro:

| Gesto | Resultado |
| --- | --- |
| Escrever um nome que não existe, <kbd>Enter</kbd> | A mesma pergunta «criar?» de cá dentro; as pastas em falta também são criadas. Um nome sem extensão torna-se um `.md`, exatamente como cá dentro |
| Modo renomear/mover, escrever um nome novo | Renomeia o ficheiro que a linha está a mostrar. Um nome sem extensão mantém a do ficheiro — aqui fora uma pasta contém todo o tipo de ficheiros, e um renomear não deve transformar em silêncio um `.png` num `.md` |
| Modo renomear/mover, navegar para outro sítio, escolher **manter este nome** | Move-o para lá com o nome que já tem |
| Manter <kbd>Ctrl</kbd> em qualquer dos dois | Copia em vez de mover, e abre a cópia numa nova aba |

Com o cadeado fechado, tudo isso comunica o que o está a impedir em vez de acontecer. Em nenhum dos estados se substitui seja o que for: um destino que já existe é recusado, e a recusa é do próprio sistema de ficheiros (`COPYFILE_EXCL`, uma criação exclusiva) e não uma verificação que poderia perder a corrida. Uma movimentação entre sistemas de ficheiros — de uma pen USB, de uma partilha de rede — recorre a copiar e depois apagar, e o original só é removido depois de a cópia ter chegado.

**Uma coisa que o cadeado não desbloqueia: mover uma nota para *fora* do seu cofre.** O `fileManager` não consegue seguir um ficheiro através dessa fronteira, por isso todas as ligações que apontam para a nota quebrariam em silêncio e o Obsidian veria-a simplesmente desaparecer. Manter <kbd>Ctrl</kbd> copia-a para fora, o que não tem esse problema, e o aviso di-lo. O caminho contrário — trazer um ficheiro de fora *para* o cofre — também ainda não está implementado.

### Abrir um ficheiro externo

O editor do Obsidian só funciona com ficheiros de dentro do cofre, por isso um ficheiro externo **não pode** ser aberto como uma nota a sério com ligações, retroligações e o resto — é um limite da aplicação, não deste plugin. Escolher um abre antes uma **pré-visualização**, apenas de leitura até dizer o contrário:

| Tipo | Mostrado como |
| --- | --- |
| `.md`, `.markdown` | Markdown renderizado |
| Imagens, áudio, vídeo, PDF | Leitor/visualizador nativo |
| Qualquer outro ficheiro de **texto** (`.json`, `.css`, `.log`, `.txt`, …) | Texto simples tal e qual |
| Formatos binários sem visualizador (`.zip`, `.exe`, …) | Entregues a *Abrir externamente* |

O visualizador tem duas leituras de um ficheiro e, como se excluem entre si, só é mostrada aquela **para a qual** mudaria:

| | O que faz | Predefinido para |
| --- | --- | --- |
| **Ver como Markdown** | Renderiza o ficheiro como uma nota, apenas de leitura | `.md`, `.markdown` |
| **Editar como texto** | O código-fonte, editável | tudo o resto |

Fora do cofre, **Editar como texto** é também a pressão que levanta o apenas-leitura — o modo e a permissão são um só gesto em vez de dois botões sobre os quais raciocinar. Fica tingido de vermelho **sempre que carregar nele levantaria o apenas-leitura**, quer esteja a armar a edição ali mesmo quer venha diretamente da vista renderizada; dentro do cofre não há nada para desbloquear, por isso mantém-se normal. **Ver como Markdown** recebe uma leve lavagem da cor de destaque — a mesma tonalidade que o Obsidian dá ao texto selecionado — marcando-o como o caminho de volta e não como um convite à ação.

Como o botão segue a *edição* e não o modo em bruto, um ficheiro que está apenas de leitura na vista de texto continua a oferecer **Editar como texto**: é essa a pressão que a arma. Um ficheiro onde nunca se poderá escrever — truncado ou ilegível — diz antes **Ver como texto**, já que é tudo o que a pressão pode dar.

As predefinições são as úteis e não as literais: um `#` num script de shell é um comentário, não um cabeçalho, por isso renderizar um `.log` como Markdown engoli-lo-ia em silêncio. Qualquer uma das predefinições pode ser trocada ficheiro a ficheiro, e a escolha vai para o histórico da aba, por isso recuar/avançar e uma área de trabalho reaberta mantêm-na — muitas notas vivem em ficheiros `.txt`, e muitos ficheiros `.md` leem-se melhor como código-fonte.

**Os ficheiros do seu cofre são editáveis desde logo**, sem desbloqueio: *Editar como texto* é um editor a sério e grava à medida que escreve.

**A edição é lembrada ao trocar de leitura.** Ir para *Ver como Markdown* suspende-a — uma renderização estática não tem onde escrever, e a Pré-visualização em direto precisa do editor do próprio Obsidian, que só existe para ficheiros de dentro do cofre — por isso nada afirma que está a editar enquanto está lá. Ao voltar a *Editar como texto* retoma-se onde ficou.

**Os ficheiros de fora do cofre abrem apenas de leitura, e *Editar como texto* levanta isso.** A pressão é todo o portão: até acontecer, lá fora nada é escrito. Depois o ficheiro grava à medida que escreve, exatamente como um do cofre; e a linha de estado passa de um cadeado a um lápis. O desbloqueio cobre aquele ficheiro naquela aba — navegar para outro ficheiro volta a bloquear, e de propósito não é guardado no histórico da aba, para que uma área de trabalho reaberta nunca volte com a escrita já armada sobre um ficheiro de sistema que não se lembra de ter aberto.

**Os ficheiros truncados continuam apenas de leitura de qualquer maneira** — gravar o que está no ecrã descartaria tudo o que está para lá do limite, por isso o botão nem sequer é oferecido em vez de ser oferecido e recusado. O mesmo vale para um ficheiro que não se conseguiu ler: não há nada para devolver ao disco a não ser um painel vazio.

Se a escrita falhar — uma montagem apenas de leitura, um ficheiro que não é seu — é mostrado num aviso o motivo dado pelo próprio sistema.

Os ficheiros muito grandes são mostrados truncados, e a linha de estado di-lo em vez de o deixar descobrir — ao lado das outras condições e não pendurado nos botões, porque é um facto sobre o ficheiro como os outros. Os limites são medidos contra um renderizador a sério e não estimados a olho — dispor um megabyte de texto num só painel mata de imediato o processo de renderização do Obsidian, e o Markdown custa várias vezes mais por byte do que o texto simples, por isso cada um tem o seu limite e uma única linha enorme é encurtada mesmo quando o ficheiro no seu todo é pequeno.

**As linhas de estado são etiquetas, e a explicação é uma dica.** Cada linha diz o que é verdade nas poucas palavras necessárias — *Fora do seu cofre*, *Sem editor para este tipo de ficheiro*, *Truncado — ficheiro demasiado grande* — porque os botões ao lado já dizem em que estado está o ficheiro. Ao passar o rato por cima aparece a frase: porque é que o Obsidian não o pode abrir como nota, o que aconteceria de outro modo a este tipo de ficheiro, o que lhe custa o truncamento.

Isto vale também para os ficheiros de **dentro** do seu cofre. O Obsidian entrega qualquer extensão para a qual não tenha vista diretamente à aplicação predefinida do ambiente de trabalho — por isso um `.txt` ou um `.json` no seu cofre tirá-lo-ia inteiramente do Obsidian. Esses abrem agora no mesmo visualizador, com o anel laranja, porque «abre-o no Obsidian» foi o que pediu — e, sendo ficheiros do cofre, são editáveis aí sem desbloqueio nenhum. Os ficheiros binários sem visualizador mantêm o comportamento do Obsidian; não há nada para mostrar.

A pré-visualização abre **na aba em que estava**, por isso recuar/avançar devolvem-no à nota de onde veio; mantenha <kbd>Ctrl</kbd> para uma nova aba, como em todo o lado. A barra do cabeçalho continua a mostrar o caminho do ficheiro externo enquanto ele está aberto, para que possa continuar a navegar a partir daí.

Uma linha discreta acima do conteúdo oferece as saídas:

- **Abrir em *(cofre)*** — mostrada quando o ficheiro pertence a um dos seus outros cofres. Entrega-o ao tratador de URI do próprio Obsidian, que abre a janela desse cofre com a nota lá dentro, como uma nota a sério e editável. Esta janela fica exatamente como estava; nada muda por baixo de si.
- **Ver como Markdown** / **Editar como texto** — as duas leituras; a segunda também levanta o apenas-leitura fora do cofre.
- **Abrir externamente** — entrega o ficheiro à aplicação predefinida do seu ambiente de trabalho, incluindo os formatos binários que este visualizador não consegue mostrar.

Nada de fora do seu cofre é escrito sem carregar antes em *Editar como texto*. Veja a secção [Fora do cofre](README.pt.md#fora-do-cofre) do README para a divulgação completa.

## As duas cores de aviso

| | Quando | O que significa |
| --- | --- | --- |
| Anel **vermelho** na barra de caminho | A linha aponta para fora do seu cofre | O Obsidian não pode abrir o que está lá como uma nota, e lá fora nada é escrito até abrir o cadeado. |
| Anel **laranja** na barra de caminho, entradas laranja na lista | O ficheiro é de um tipo de texto para o qual o Obsidian não tem vista | Um cuidado. O Obsidian entregá-lo-ia à aplicação predefinida do seu ambiente de trabalho; o plugin mostra-o em vez disso. |

Os **dois são independentes, e podem valer ao mesmo tempo** — um `.json` externo está fora do seu cofre *e* é um tipo para o qual o Obsidian não tem editor. No visualizador aparecem como linhas separadas, cada uma a declarar apenas o seu próprio facto. Na barra de caminho ganha o vermelho quando ambos se aplicam, já que dois anéis seriam só ruído.

O nível laranja é deliberadamente estreito. Os tipos registados (Markdown, tela, imagens, PDF, áudio, vídeo) são tratados como deve ser e não recebem nada. Os ficheiros binários também não — não vai transformar um `.zip` numa confusão por acidente. O que sobra é exatamente o perigo: um `.json`, `.css` ou `.log` que **Detetar todas as extensões de ficheiros** tornou visível.

Ganha o vermelho onde ambos se aplicariam; dois anéis ao mesmo tempo seriam só ruído.

## Modo mover/renomear

O botão do lápis na extremidade direita do cabeçalho — ao lado do botão de modo de vista, do mesmo tamanho que os botões nativos — liga e desliga o modo mover/renomear. A linha do cabeçalho fica então emoldurada na cor de destaque, exatamente como ao renomear no Explorador de ficheiros. Os mesmos cliques e as mesmas teclas confirmam agora uma movimentação ou um renomear através do `fileManager.renameFile` do Obsidian, por isso todas as ligações para a nota acompanham.

Enquanto renomeia:

- O nome de ficheiro atual fica fixo na lista de todas as pastas, por isso mover uma nota sem lhe mudar o nome é um único clique.
- Os nomes já ocupados na pasta de destino ficam a cinzento mas continuam selecionáveis.
- O que escreve é validado em tempo real contra as próprias regras de renomear do Obsidian — mesmos conjuntos de caracteres, mesmas mensagens, mesma dica vermelha que aparece ao renomear na árvore de ficheiros — por isso um nome ilegal ou em conflito é assinalado enquanto escreve e não pode ser confirmado.
- Clicar fora da barra do cabeçalho, ou o cabeçalho perder o foco, termina o modo renomear.

## Uma tecla para os dois renomeares

O comando de renomear (<kbd>F2</kbd> por predefinição, ou aquilo a que o tenha reatribuído) **alterna** entre o renomear do título em linha do Obsidian e a barra de caminho do cabeçalho deste plugin com o caminho completo selecionado. Se desligou o título em linha do Obsidian, a barra de caminho do cabeçalho passa a ser o único alvo, por isso a tecla nunca fica sem fazer nada.

Isto funciona envolvendo o comando `workspace:edit-file-title` em vez de agarrar a tecla, por isso reatribuir o atalho e correr o comando a partir da paleta continuam a funcionar sem alterações.

## Como as entradas da lista são coloridas

| Cor | Significa |
| --- | --- |
| **Roxo** | Uma nota (`.md`, `.markdown`) — o que o Obsidian abrirá como nota, destacado numa pasta de conteúdo misturado |
| **Laranja** | Um tipo de texto para o qual o Obsidian não tem vista; veja [as cores de aviso](#as-duas-cores-de-aviso) |
| **Esbatido** | Fora do seu cofre, por isso o tratamento próprio do cofre não se aplica |
| **Azul** | Só no modo renomear/mover: a entrada *manter este nome* — um destino em vez de algo que existe, por isso destaca-se dos nomes de ficheiro no meio dos quais está |
| **Cinzento** | Só no modo renomear/mover: o nome está ocupado. Continua selecionável — escolhê-lo preenche o campo, onde a validação assinala o conflito |

## Regras de visibilidade

- Os ficheiros com extensões não suportadas só aparecem nas listas se a definição **Detetar todas as extensões de ficheiros** do Obsidian estiver ligada.
- A lista mostra no máximo 100 entradas — o limite do próprio Obsidian. Quando uma pasta tem mais, a última linha diz quantas ficaram de fora; continue a escrever para estreitar a lista.
- Os ficheiros e pastas ocultos só aparecem se a definição **Mostrar ficheiros ocultos** deste plugin estiver ligada.
- **A proteção contra substituição funciona igual seja qual for a visibilidade** — um ficheiro oculto continua a impedi-lo de o substituir.

## Resumo

| Quer… | Faça isto |
| --- | --- |
| Abrir uma pasta (a sua nota, ou mostrá-la) | Clique no separador **a seguir** a essa pasta |
| Trocar uma pasta por uma vizinha | Clique no nome dessa pasta, depois escreva ou escolha |
| Renomear ou reapontar a nota | Clique no nome da nota — extensão incluída |
| Ver o conteúdo de uma pasta | Clique no nome dessa pasta; a lista mostra a pasta que a contém, por isso clique na pasta **abaixo** da que quer |
| Reescrever uma pasta e tudo o que está abaixo | **Duplo clique** no nome dessa pasta, depois escreva |
| Editar o caminho a partir de uma pasta | Clique no nome dessa pasta, depois <kbd>Fim</kbd> ou <kbd>→</kbd> para desselecionar |
| Saltar para um ficheiro escrevendo o caminho | Clique no nome do ficheiro ou no espaço vazio, escreva, <kbd>Enter</kbd> |
| Abrir um ficheiro numa nova aba | <kbd>Ctrl</kbd> ao escolhê-lo, ou <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| Copiar a nota para outro sítio em vez de a mover | Lápis, depois <kbd>Ctrl</kbd> ao escolher ou confirmar o destino |
| Criar uma nota num caminho que não existe | Escreva o caminho, <kbd>Enter</kbd>, confirme a pergunta |
| Descer um nível enquanto escreve | Escreva `/` |
| Subir um nível enquanto escreve | <kbd>Retrocesso</kbd> no campo vazio |
| Mover ou renomear a nota aberta | Clique no lápis, depois navegue ou escreva como acima |
| Mover sem renomear | Lápis → clique até à pasta de destino → escolha o nome de ficheiro atual fixo no topo |
| Renomear no sítio | <kbd>F2</kbd> duas vezes (a primeira vai para o título em linha, a segunda para o cabeçalho) |
| Saltar para outro cofre, para a pasta pessoal ou para uma unidade | Clique no nome do cofre |
| Abrir um ficheiro de fora do cofre | Nome do cofre → escolha um sítio → navegue → escolha o ficheiro (apenas leitura até *Editar como texto*) |
| Cancelar seja o que for | <kbd>Esc</kbd>, ou clique fora da barra do cabeçalho |

## Definições

| Definição | Valores | Predefinição | O que faz |
| --- | --- | --- | --- |
| **Alinhamento** | Esquerda / Centrado / Direita | Esquerda | Onde o caminho se situa na linha do cabeçalho. *Centrado* corresponde ao aspeto clássico do Obsidian. |
| **Separador** | Qualquer carácter | `/` | O separador desenhado entre segmentos. À frente do campo de texto há seis predefinições de um clique (`/ > ▸ › \ •`). |
| **Mostrar o nome do cofre** | Ligado / Desligado | Ligado | Se o próprio cofre é o primeiro segmento do caminho. Desligado, esse segmento torna-se um ícone 🏠 em vez de desaparecer, para que o caminho continue a começar em algo clicável. |
| **O nome da pasta abre a lista** | Ligado / Desligado | Ligado | Troca o que fazem o nome de uma pasta e o separador a seguir — veja [a tabela acima](#o-caminho). Com o [Folder notes](obsidian://show-plugin?id=folder-notes) o separador abre notas de pasta. Nunca se aplica no modo renomear/mover. |
| **Mostrar ficheiros ocultos** | Ligado / Desligado | Desligado | Se os ficheiros e pastas ocultos são listados nas listas. A proteção contra substituição aplica-se de qualquer forma. |
| **Acesso a ficheiros externos** | Ligado / Desligado | **Desligado** | Se o nome do cofre abre a lista de localizações. Desligado, nada no plugin olha alguma vez para lá deste cofre. |

## Substituir os ícones

O Lure desenha três ícones: o da raiz do cofre (quando **Mostrar o nome do cofre** está desligado), o interruptor de renomear/mover, e o cadeado que controla a escrita fora do cofre. Todos podem ser trocados a partir de um tema ou de um fragmento CSS — defina o glifo de substituição e esconda o que vem incluído numa única regra:

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

`--lure-icon-glyph` aceita qualquer coisa válida em `content` de CSS, por isso `url(...)` serve para uma imagem tal como para um glifo de texto ou um emoji. Deixe `--lure-icon-svg` em paz para manter o ícone do Lucide e desenhar o seu glifo ao lado.
