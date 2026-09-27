<!-- Tradução de docs/usage.md — estado: commit 94b1372.
     Tradução automática (Claude Sonnet 5), não revista por falantes nativos.
     As etiquetas do plugin vêm de src/lang/translations.ts e as do Obsidian
     dos textos que a própria aplicação traz, por isso coincidem com o que vê
     no ecrã. -->

[English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · [Čeština](usage.cs.md) · [Dansk](usage.da.md) · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · [Bahasa Indonesia](usage.id.md) · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · [Norsk](usage.no.md) · [Polski](usage.pl.md) · **Português** · [Português (Brasil)](usage.pt-BR.md) · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

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

Quando a pasta em causa é a da nota que já está a ler, o clique mostra antes a pasta — não há nada para abrir que já não esteja no ecrã, o que é o que o segundo clique sempre significou.

Com o [Folder notes](obsidian://show-plugin?id=folder-notes) instalado, esse mesmo clique abre antes a nota dessa pasta, **a qualquer profundidade**: a nota é aqui resolvida pela convenção própria desse plugin, em vez de ficar a cargo dele responder. Esse plugin só reconhece as pastas que marcou, o que num caminho com mais de uma pasta de profundidade não é nenhuma delas, por isso o clique que abria a nota de uma pasta de topo antes não fazia mais nada abaixo dela. Os outros dois plugins de notas de pasta não publicam nenhuma convenção para ler e nunca reivindicam a linha, por isso com esses o separador mostra a pasta como sempre fez. É o único plugin de notas de pasta encontrado a reivindicar o caminho do cabeçalho; o [Folder Note](obsidian://show-plugin?id=folder-note-plugin) e o [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) gerem notas de pasta mas não ficam à escuta de um clique no caminho, por isso com esses o separador mostra a pasta como habitualmente. Ver [compatibilidade](../compatibility.md#verified-against).

Um separador só fica **sublinhado quando a pasta anterior tem mesmo uma nota de pasta**, por isso o sublinhado é uma promessa de que há algo para abrir — a qualquer profundidade com o [Folder notes](obsidian://show-plugin?id=folder-notes) em funcionamento, já que a nota é aqui resolvida em vez de ficar a cargo desse plugin marcá-la. Quando não é esse o plugin em funcionamento, nada fica sublinhado e nada abre: o separador mostra a pasta, tal como acontece sem nenhum plugin de notas de pasta. Todos os separadores continuam clicáveis de qualquer forma — um sem sublinhado mostra e expande a sua pasta na barra lateral, o que o cursor do ponteiro continua a indicar. O sublinhado sai ao mesmo tempo do nome da pasta: com a troca ligada, o nome abre a lista, por isso marcá-lo como o link para a nota seria uma mentira.

**O modo renomear/mover prevalece sobre ambos**, diga o que disser a opção: enquanto há uma movimentação pendente, nada na linha abre uma pasta, porque abri-la abandonaria a movimentação. Os nomes das pastas selecionam-se para edição e os separadores descem — ambos são formas de escolher o destino — e o sublinhado desaparece para mostrar que abrir está suspenso.

A **raiz do cofre** é o único segmento que não é um segmento de caminho. Não tem pasta acima de onde listar as vizinhas, por isso abre antes a [lista de localizações](#navegar-fora-do-cofre) — os seus outros cofres, a pasta pessoal, a raiz do sistema de ficheiros e as unidades montadas.

## O separador do próprio cofre

O separador logo a seguir ao nome do cofre representa o próprio cofre em vez
de uma pasta, por isso faz o que nenhum outro separador consegue:

| | Primeiro clique | Clique seguinte |
| --- | --- | --- |
| **Com um plugin de página inicial** (uma página que o recebe quando o Obsidian abre) | Abre essa página neste painel | Recolhe a árvore de ficheiros |
| **Sem um** | Recolhe a árvore de ficheiros | Repõe exatamente o que estava aberto |

Cliques normais, não um duplo clique: assim que a página está aberta, o
separador já não tem nada para abrir, por isso o clique seguinte é o recolher
— por mais tempo que demore a fazê-lo.

Fica **sublinhado** quando há uma página inicial para abrir, o que é a mesma
promessa que o separador de uma pasta faz: há algo ali. Recolher é um
interruptor — o clique seguinte repõe as pastas que estavam abertas, e só
essas, para que uma árvore que tinha organizado não se perca por olhar para
outra coisa.

## Um painel sem ficheiro

Uma aba vazia, o grafo e qualquer outra coisa que não nomeie um ficheiro têm
uma linha própria: o cofre, seguido de um segmento que diz o que o painel
contém.

```
my-vault / :blank      a new tab
my-vault / :graph      the graph, local or global
my-vault / :<type>     anything else with no file
```

A **própria listagem da raiz do cofre** também oferece estas páginas, junto
das pastas e notas que realmente lá estão: escolha `:graph` ou `:search` ali e
o painel abre essa vista, exatamente como escolher uma nota abre a nota. Quais
as páginas que existem é lido a partir do Obsidian, e não escrito aqui — toda
a vista que não existe para mostrar um ficheiro, por isso um plugin que
registe uma (uma aba inicial, um calendário) aparece sem este plugin saber
nada sobre ela. Vistas que precisam de um ficheiro — Markdown, PDF, imagens,
telas, bases — não são oferecidas: não há nada para elas mostrarem.

Os dois pontos são o ponto — nenhum ficheiro ou pasta se pode chamar `:graph`,
por isso a linha não pode ser confundida com um caminho que se pudesse abrir.
A etiqueta vem do tipo de vista em vez de vir do texto próprio do Obsidian,
por isso lê-se da mesma forma seja qual for a língua da interface, e um
`-view` final é retirado: um plugin de aba inicial regista a sua vista como
`home-launcher-view`, e a linha diz `:home-launcher`.

Clicar no espaço vazio, ou na própria etiqueta, **abre o campo na raiz do
cofre**: escreva um caminho e <kbd>Enter</kbd> abre-o neste mesmo painel, com
a mesma conclusão automática, a mesma lista e o mesmo campo vermelho a
oferecer-se para criar o que ainda não existe. Uma aba vazia é um bom lugar
para escrever para onde quer ir, que é para isso que serve.

A etiqueta é uma etiqueta e nada mais: sem lista, sem arrastar, sem
renomear. Os painéis nas barras laterais ficam completamente intocados — um
painel de retroligações mantém o título que o Obsidian lhe dá.

Telas, PDFs, imagens e bases não precisam de nada disto. São ficheiros, por
isso têm uma barra de caminho normal.

## Clique num segmento: troque-o por um vizinho

Clicar no nome de uma pasta seleciona **o nome dessa pasta** num campo de texto e abre uma lista com a pasta **um nível acima** — a pasta que a contém. Escrever ou escolher uma entrada troca esta pasta por uma vizinha e deixa intacto tudo o que está abaixo, por isso `Projetos/2026/Arranque.md` → clique em `2026` → escolha `2025` dá-lhe `Projetos/2025/Arranque.md`.

Clicar no **nome da nota** funciona da mesma forma em relação à sua própria pasta, e seleciona o nome **sem a extensão** — renomear é a edição mais comum, e escrever por cima de uma seleção que incluísse `.md` costumava mudar o tipo de ficheiro sem querer. A extensão continua visível a uma tecla de distância: <kbd>→</kbd> alcança-a, e o duplo clique que alarga a toda a linha apanha tudo.

O clique na pasta já selecionou um segmento, por isso **mais um clique** alarga a seleção à linha inteira — essa pasta *e* tudo o que está abaixo — e o que escrever substitui então o resto do caminho de uma vez. Funciona igual em navegação e no modo renomear/mover.

Isso só vale como continuação do clique que abriu o campo. Depois de usar o campo, ele comporta-se como qualquer outro campo de texto: um clique coloca o cursor, um duplo clique apanha uma palavra, um triplo clique apanha a linha.

De qualquer forma o resto do caminho continua visível à volta do campo, como blocos antes dele e como texto não selecionado depois dele, por isso o caminho completo nunca desaparece do cabeçalho. Escreva para substituir a seleção, ou prima <kbd>→</kbd> para a manter e editar a partir daí. A lista mostra toda a pasta independentemente do que já está preenchido; só começa a filtrar quando realmente escreve algo.

## Descer pelo separador

Clicar num separador (com **O nome da pasta abre a lista** desligado) desce para a pasta anterior: a lista mostra o conteúdo *dessa* pasta, e o resto do caminho abre selecionado no campo. Escolher uma pasta acrescenta-a ao rasto do caminho e abre logo a lista seguinte, por isso pode descer uma árvore à custa de cliques sem sair da linha do cabeçalho.

## A lista abre onde você está

A lista abre na entrada em que se encontra — a nota a que esta barra pertence,
ou, quando um clique numa pasta listou a pasta-mãe, essa pasta — em vez de na
primeira linha. Numa pasta com duzentas notas, a primeira linha não fica
minimamente perto de si.

**A roda do rato sobre um nome abre a sua lista e percorre-a.** A primeira
volta abre a mesma lista que clicar no nome abre, e cada volta seguinte move o
realce uma linha, colocando aquilo para onde está a apontar no campo, tal como
as setas fazem — para que um vizinho possa ser encontrado e escolhido sem o
teclado. Rodar para além de qualquer uma das pontas devolve-lhe o seu texto.
Uma linha com mais caminho do que o painel responde à roda deslocando-se
lateralmente, o que é a leitura que prevalece enquanto se aplica.

A lista tem **a altura que a janela permitir**. O Obsidian limita as suas
listas de sugestões a 300 pixels, seja o que for que fique abaixo delas; esta
vai até ao fundo da janela, parando poucos pixels antes do limite, e só faz
deslocamento quando a pasta tem mais entradas do que isso. **Não é mais larga
do que a barra de caminho**: um nome que não caiba é encurtado tal como a
linha encurta um, e mostra-se por inteiro quando se aponta para ele.

Percorrer a lista **coloca aquilo para onde está a apontar no campo**, por
teclas de seta ou pairando o rato — no lugar do segmento que estava a editar,
deixando o resto do caminho como estava — por isso a linha em que está também
é o caminho que obteria.

O resto do caminho só é mostrado **até onde existir sob aquilo para onde está
a apontar**. Estando numa pasta com `2026/nota.md` a seguir ao segmento que
está a editar, apontar para uma pasta que tenha uma `2026` com uma `nota.md`
lá dentro mostra tudo; uma que tenha a `2026` e nenhuma nota mostra `2026`;
uma que não tenha nenhuma das duas não mostra nada depois do nome, e o mesmo
acontece com um ficheiro, já que nada vive debaixo de um. **O que você
escreveu** mantém o caminho completo enquanto o está a escrever, por pouco que
já lá esteja — um nome a meio de ser escrito não é uma decisão. Definir um
nome é uma decisão, e o que não pode ser alcançado a partir dele é cortado
nesse ponto; as pastas que está a criar são as que escreve *depois* dele, que
é onde o <kbd>Enter</kbd> as cria. O texto que tinha escrito é mantido: sair
**de qualquer uma das pontas da lista** — subir para além da primeira entrada,
ou descer para além da última — larga-o e devolve o seu texto, sem nada
realçado. O campo é uma paragem no ciclo como qualquer entrada, por isso uma
volta passa por ele em vez de saltar da última linha para a primeira, e
continuar a partir daí dá a volta até à outra ponta.

Tirar o **ponteiro da lista** também devolve o seu texto — e devolve o realce
a quem quer que o tivesse antes de o rato chegar: a entrada a que tinha ido
com as setas, a aparecer de novo no campo, ou aquela em que a lista abriu por
ser onde você está. Pairar é uma forma de olhar, não de escolher, por isso
passar o ponteiro pela lista não lhe custa nada.

A própria lista não muda enquanto a percorre — continua a filtrar pelo que
escreveu, não pelo que foi pré-visualizado no campo — por isso a entrada sob
si nunca se desloca antes do clique seguinte. Escrever substitui a pré-visualização e filtra como habitualmente.

**Aquilo por que filtra é o segmento que está a editar**, não tudo o que está
no campo. Clicar numa pasta deixa o resto do caminho ali atrás do nome que
está a mudar, por isso filtrar por tudo procuraria uma pasta-filha chamada
`2026/Arranque.md` e não encontraria nada — a lista fechar-se-ia à primeira
tecla, fosse o que fosse que escrevesse. **A extensão também fica de fora**,
enquanto o cursor estiver antes do ponto: clicar no nome de uma nota seleciona
o nome sem a extensão e deixa o `.md` atrás dele, por isso escrever uma letra
faz o campo ler `a.md`, e não é isso que procura. Coloque o cursor depois do
ponto e a extensão passa a contar como tudo o resto. Um nome que genuinamente
não corresponda a nada continua a fechar a lista, porque uma lista vazia é a
resposta honesta.

Uma pré-visualização **troca apenas esse segmento e deixa o resto do caminho
em paz**: apontar para uma pasta pergunta e se este passo fosse aquele, não
deita fora o caminho. Sair da lista repõe o texto *e* a seleção que tinha, por
isso a tecla seguinte substitui o que ia substituir antes de ter olhado.

## As entradas da lista são verdadeiras linhas de gestor de ficheiros

Cada ficheiro e pasta na lista comporta-se como a sua linha no Explorador de ficheiros:

- **Clique com o botão direito** para o mesmo menu de contexto que o Explorador de ficheiros dá, entrada a entrada — incluindo as que outros plugins acrescentam. Uma pasta oferece *Nova nota*, *Nova pasta*, *Nova tela*, *Nova base*, *Fazer uma cópia*, *Mover pasta para…*, *Pesquisar na pasta*, *Copiar caminho*, *Mostrar no explorador do sistema*, *Renomear…* e *Eliminar*; um ficheiro oferece o seu próprio equivalente, incluindo *Abrir na aplicação predefinida*.
- **Arraste** uma entrada para qualquer sítio onde o Obsidian aceite um ficheiro: para um editor para inserir um link, para uma pasta no Explorador de ficheiros para a mover, para a barra de separadores para a abrir.

O texto dos menus vem das traduções do próprio Obsidian, por isso encaixa com o resto da aplicação em todas as línguas.

## Escrever um caminho

- Clicar no **espaço vazio** antes ou depois do caminho abre um campo de texto sobre o caminho completo *e mostra a nota no Explorador de ficheiros*, para que a árvore acompanhe o painel sem um segundo gesto. Ele **conta os seus cliques**: um seleciona o caminho sem a extensão, dois selecionam-no com ela, três selecionam o caminho que a máquina conhece. Clicar no **nome do ficheiro** conta da mesma forma, mas começa um nível mais abaixo, no próprio nome: um seleciona-o sem a extensão, dois com ela, e três alargam ao caminho completo *a partir da pasta do seu cofre* — a forma que uma ligação ou uma pesquisa quer, e não a da máquina. Um quarto clique alcança essa.
- **A contagem pertence à sequência que abriu o campo.** Uma vez terminada — pausou, escreveu, ou clicou uma vez em algum ponto do texto — o campo é um campo de texto como qualquer outro, e um duplo clique nele escolhe a palavra sob o cursor tal como faria em qualquer outro lugar. Escreva sobre o que está selecionado, ou edite no próprio local. (Clicar no próprio nome do ficheiro seleciona apenas o nome do ficheiro; ver acima.) Clicar com o botão direito no mesmo espaço **copia** esses mesmos três, a dois, três e quatro cliques — um botão mostra-os, o outro leva-os. Um **único** clique com o botão direito abre o caminho com tudo selecionado e oferece o que se pode fazer com ele: cortar, copiar, colar, selecionar tudo, nas próprias palavras do Obsidian.
- **Clique com o botão do meio no espaço vazio** para colar sobre o caminho: o campo abre-se sobre o caminho completo *a partir da raiz do cofre*, para que a área de transferência substitua tudo, e o que aterra fica selecionado. <kbd>Enter</kbd> vai então até lá.
- **<kbd>Ctrl</kbd>+clique no espaço vazio** para abrir esta nota novamente numa aba própria, realçada no Explorador de ficheiros para que a segunda aba não seja confundida com a primeira. No **nome do cofre**, <kbd>Ctrl</kbd>+clique ou clique com o botão do meio abre uma aba sem nada, colocada na raiz do cofre com a lista já visível — um sítio para escrever um caminho do zero.
- Escrever enquanto o caminho está a ser mostrado converte o segmento final num pequeno campo com preenchimento automático em tempo real, limitado à pasta atual.
- **Pode ser escrito um caminho a partir da raiz do sistema de ficheiros.** `/` à frente de um campo vazio abre um em vez de completar um nível, cada barra depois dela pertence-lhe, e `~` é a sua pasta pessoal. Enquanto o campo contém tal caminho, a lista mostra a máquina em vez do cofre, e o segmento inicial da linha afasta-se — o que está no campo começa na raiz e diz-o. Com *Acesso a ficheiros externos* desligado, a lista fica vazia em vez disso, porque <kbd>Enter</kbd> recusaria o caminho de qualquer forma.
- **Uma página pode ser escrita, não apenas escolhida.** `:graph`, `:search`, ou o que os seus plugins registarem — as etiquetas que a [listagem da raiz do cofre](#um-painel-sem-ficheiro) oferece. Escrever dois pontos em qualquer lugar convoca-as, já que nenhum nome pode conter um, e <kbd>Enter</kbd> abre essa vista neste painel. `:graph` escrito **dentro de uma pasta** abre o grafo dessa pasta — o grafo filtrado por `path:"that/folder"` na sua própria caixa de pesquisa, como se tivesse sido escrito lá; na raiz do cofre é o grafo completo. <kbd>Tab</kbd> termina o nome tal como termina o de uma pasta — e leva com ele tudo o mais que o campo continha, já que uma página não está em nenhuma pasta e nada vive sob ela. Clicar na etiqueta de tal painel abre o campo já com ela.
- **O que <kbd>Tab</kbd> escreveria é oferecido à medida que escreve.** Onde todos os filhos que começam com o que escreveu continuam a concordar por um tempo, essa concordância aparece depois do cursor, selecionada; onde deixam de concordar, o passo em direção ao primeiro deles acontece — ou em direção à linha para a qual navegou com as setas, já que é essa que <kbd>Tab</kbd> visaria. Escrever sobre um nome deixa a sua extensão intacta e oferece o que vem antes dela, e uma pasta em que acabou de entrar oferece o seu primeiro passo, por isso não há estado em que nada seja oferecido e <kbd>Tab</kbd> escreva algo mesmo assim. Escreva essas letras e são absorvidas uma a uma; escreva qualquer outra coisa e desaparecem. <kbd>Tab</kbd> ou <kbd>End</kbd> aceita-o por completo, <kbd>→</kbd> aceita uma letra dele, <kbd>Backspace</kbd> devolve-o sem tocar numa letra que escreveu, e nada é oferecido de novo até escrever — por isso há sempre uma saída de um nome que não queria. Depois de um toque em <kbd>Tab</kbd>, o passo seguinte é oferecido de imediato, tal como depois de uma letra escrita. O que a lista mostra é filtrado pelo que **você** escreveu, nunca pelo que foi oferecido.
- **As ofertas ignoram maiúsculas e minúsculas.** `sch` oferece `Schemes`, escrito como o nome está grafado; devolver a oferta dá de volta as suas letras tal como as escreveu. Onde `Test` e `test` existem ambos, é oferecido o que está grafado como você escreveu.
- No campo, a parte oferecida está simplesmente **selecionada**. É na lista que ela é detalhada: cada linha mostra a parte dela que **corresponde ao que escreveu em negrito**, onde quer que no nome tenha correspondido — `kick` encontra `Weekly kickoff` e assinala-o. **Os nomes que começam com o que escreveu vêm primeiro**, antes dos que apenas o contêm, e são marcados com uma linha na sua margem: **azul** onde partilham mais do que o que escreveu, para que <kbd>Tab</kbd> tenha algo a adicionar em todos eles, e **verde** no ramo que a oferta segue onde se separam — `te` com `test1`, `test2`, `text1` e `text2` oferece `te`+`st`, por isso as duas linhas `test` são verdes e as duas linhas `text` mantêm a linha simples. Cada uma delas **sublinha o passo que <kbd>Tab</kbd> daria em sua direção**, não apenas a que é oferecida, e o sublinhado acompanha a oferta à medida que muda.
- **Escrever abandona a linha realçada.** A lista abre-se na entrada em que está, mas no momento em que escreve, trata-se de outro lugar, e um realce que ninguém colocou ali lê-se como uma escolha já feita.
- A oferta é sempre apenas texto à sua frente: as letras que escreveu mantêm-se grafadas como as escreveu enquanto escreve, e aceitar a oferta reescreve o nome como a pasta o grafa, porque um caminho tem de corresponder ao disco. `sk` + <kbd>Tab</kbd> alcança `Skyline`, não `skyline`.
- **O campo tem a cor daquilo que nomeia**, a mesma cor da sua linha na lista: roxo para uma nota, incluindo a nota própria de uma pasta, laranja para tudo o que não é uma nota, azul para a nota em que está. A linha de onde tira a cor é a que se chama exatamente como escreveu, ou, na falta dessa, a realçada, ou, na falta dessa, a primeira a que a sua escrita ainda conduz.
- **O campo fica vermelho quando nada corresponde ao que está nele** — nenhum ficheiro, nenhuma pasta, e nenhuma linha da lista continua a conduzir a ele. A partir daí <kbd>Enter</kbd> cria o que está no campo em vez de o abrir, e o vermelho diz-o antes de confirmar. Nunca aparece para um endereço web, que não é um lugar nesta máquina onde se possa procurar. É o **campo inteiro** que é colorido, e não só a parte que falta: um campo de texto não pode colorir apenas metade do seu próprio conteúdo. No modo mover/renomear, o campo mantém o seu próprio vermelho para um nome que é ilegal — aí, um nome a que nada corresponde é o propósito. Que um nome **já está ocupado** é tratado quando o confirma, com uma caixa de diálogo a perguntar o que deve acontecer ao ficheiro no caminho — ver [Um nome que já está ocupado](#um-nome-que-já-está-em-uso): todos os nomes escritos em direção a `Notes.md` passam por nomes que podem ser ficheiros próprios, por isso assinalar letra a letra avisaria sobre um nome que ainda ninguém tinha pedido.
- `/` confirma o segmento que está a escrever e desce para dentro dele, mantendo o que vem antes — o mesmo que <kbd>Tab</kbd> faz quando entra.
- <kbd>Backspace</kbd> num campo vazio recua para a pasta-mãe, reabrindo o seu nome com o cursor no final. O mesmo faz <kbd>Backspace</kbd> à frente de uma extensão que ficou sozinha — um campo que contém apenas `.md` não nomeia nada — e a extensão isolada vai com ele.
- **Clicar numa pasta enquanto um campo está aberto alarga-o para o caminho completo depois dessa pasta**, com o próprio nome da pasta selecionado — o mesmo que clicar nela teria feito a partir da linha, e tudo o que o campo continha é mantido. O que está no campo é a cauda da linha enquanto ela está aberta, por isso uma pasta clicada mais acima devolve o caminho que a sessão percorreu, e não aquele em que a nota começou.
- **Navegar para fora da frente do campo com as setas traz a pasta anterior para dentro**, como se o caminho completo fosse uma única linha de texto. Com o cursor no início absoluto, <kbd>←</kbd> traz essa pasta para o campo e fica no fim do seu nome, <kbd>Ctrl</kbd>+<kbd>←</kbd> fica no início dele, e <kbd>Home</kbd> traz todas as pastas até à raiz do cofre — ou até ao lugar que escolheu, fora do cofre — de uma vez. Mantenha <kbd>Shift</kbd> pressionado e a seleção estende-se sobre o que entrou. No macOS, o salto de palavra é <kbd>Option</kbd>+<kbd>←</kbd> e <kbd>Cmd</kbd>+<kbd>←</kbd> equivale a <kbd>Home</kbd>. Em qualquer outro lugar que não a frente, estas são teclas de texto normais. **Enquanto a lista está visível, <kbd>Home</kbd>, <kbd>End</kbd>, <kbd>PgUp</kbd> e <kbd>PgDn</kbd> pertencem-lhe** — primeira linha, última linha, uma página para cima, uma página para baixo, sendo uma página o que a lista mostra, com a linha realçada a manter o seu lugar no ecrã — e só chegam ao texto depois de fechar; <kbd>Shift</kbd>+<kbd>Home</kbd> traz todas as pastas com a lista aberta também.
- **A lista segue o cursor.** Escolha uma parte diferente do caminho — arraste sobre ela, clique nela, ou navegue com as setas — e a lista mostra os filhos *dessa* pasta, não os da pasta em que o campo foi aberto. A pasta é contada a partir das etiquetas mais o que do campo estiver antes do cursor, por isso clicar em `Notes.md` num campo que contém `2026/Notes.md` mostra o que está em `2026`. Apontar para uma linha escreve-a no segmento em que o cursor está, e retirar o cursor da lista devolve-lhe o seu texto e a sua seleção, exatamente como estavam.
- **Arrastar uma seleção para fora do campo** e soltar em outro lugar não o fecha. Um clique que comece no campo pertence à edição por mais longe que viaje; só um clique que *comece* fora é que fecha.
- <kbd>Enter</kbd> confirma — e quando o campo não nomeia absolutamente nada, como numa pasta vazia onde nunca houve nada a completar, diz *Nenhum ficheiro selecionado* e permanece aberto em vez de fechar como se algo tivesse sido escolhido. <kbd>Esc</kbd> ou um clique noutro lugar cancela, voltando ao caminho real do ficheiro. Um único toque em <kbd>Esc</kbd> basta: fecha a lista, sai do campo e devolve o foco à nota, em vez de exigir um toque por camada.

O campo não tem enfeites — sem caixa, sem contorno — por isso lê-se como o próprio texto do caminho, e cresce sozinho à medida que escreve.

## Cada parte da linha, botão a botão

A linha inteira num relance. A coluna do clique com o botão direito é o que **uma** pressão lhe dá; esse botão também conta pressões, e [a sua própria tabela](#botão-direito-uma-pressão-duas-pressões-três) abaixo tem a segunda, terceira e quarta. Esta assume que **O nome da pasta abre a lista** está ativo, o que é a predefinição — com essa opção desativada, o nome da pasta e o separador trocam de lugar na primeira coluna, como diz [a tabela no topo](#o-caminho).

| Onde clica | Clique | Duplo clique | <kbd>Ctrl</kbd>+clique, ou clique com o botão do meio | Botão direito | Largar algo em cima |
| --- | --- | --- | --- | --- | --- |
| O **nome do cofre** | Abre a lista de localizações — outros cofres, a pasta pessoal, a raiz do sistema de ficheiros, unidades montadas. Desativado por predefinição; com isso desativado, revela o cofre no Explorador de Ficheiros em vez disso | Marca o **caminho absoluto completo**. Essa lista abre com o caminho já no campo e só a parte do próprio cofre marcada; uma segunda pressão alarga sobre o resto. Nada a alargar com a lista desativada | Uma aba sem nada, situada na raiz do cofre com a lista já visível — algures para escrever um caminho de raiz | O menu de contexto do próprio cofre: o que se pode fazer ao cofre que esse segmento nomeia | Um **ficheiro** move-se para a raiz do cofre. **Texto** abre o campo na raiz, para nomear a nota que deve tornar-se |
| Um **nome de pasta** | Seleciona essa pasta para edição, com o conteúdo da pasta-mãe listado abaixo | Reescreve essa pasta e tudo o que está abaixo dela | Abre essa pasta numa nova aba | O menu de contexto dessa pasta — o mesmo do Explorador de Ficheiros | Um **ficheiro** move-se para essa pasta. **Texto** abre o campo ali, para nomear a nota que deve tornar-se |
| Um **separador** | Abre a pasta antes dele — a sua nota de pasta onde um plugin de notas de pasta está a correr e existe uma, caso contrário revela-a e expande-a no Explorador de Ficheiros | **Cria a nota dessa pasta** e vai até ela, onde um plugin de notas de pasta está a correr e a pasta ainda não tem nenhuma. Onde já tem uma, isto é apenas a pressão única outra vez | A nota de pasta numa nova aba onde existe uma; caso contrário uma aba situada nessa pasta com a lista visível | O mesmo menu de contexto de pasta que o nome dá — o da sua nota de pasta, onde tem uma | No fim da nota dessa pasta, onde tem uma, assim que confirmar |
| O **nome da nota** | Abre o nome para edição — as pastas ficam como blocos ao lado — com tudo menos a extensão marcado | Inclui a extensão na marca também | Abre a nota numa nova aba | O menu de contexto do ficheiro — o mesmo que a linha do Explorador de Ficheiros dá | No fim desta nota, assim que confirmar |
| O **espaço vazio** | Abre o **caminho completo** para edição, marcado até à extensão. As pastas entram no campo com ele, o que é o que torna este o gesto para reescrever um caminho em vez de um nome | Inclui a extensão na marca também | <kbd>Ctrl</kbd> abre esta nota outra vez numa aba própria, realçada no Explorador de Ficheiros para que a cópia não seja confundida com a primeira. O clique com o botão do meio *não* é esse gesto: cola por cima do caminho | Marca o caminho inteiro e oferece o que se pode fazer a texto marcado | |

**A segunda pressão segue a primeira.** Criar a nota de uma pasta situa-se na
parte da linha que *abre* essa pasta, que é o separador por predefinição e o
nome da pasta com a troca desativada — o mesmo alvo que o sublinhado marca, e
o mesmo que uma pressão única já pede para a nota de pasta. Só é oferecido
enquanto um plugin de notas de pasta está a correr, porque uma nota de pasta é
uma convenção e não um facto sobre o sistema de ficheiros, e só onde a pasta
ainda não tem nenhuma. Onde vive e como se chama são lidos das próprias
definições de **Folder notes**, por isso um cofre que mantém as suas notas de
pasta ao lado da pasta, ou lhes chama `_index`, recebe uma dessas; o próprio
ficheiro é sempre Markdown, que é o que o comando de criação predefinido desse
plugin faz e o que encontra seja qual for o tipo definido para o cofre. O modo
mover/renomear fica totalmente de fora — nada na linha abre uma pasta enquanto
uma mudança está pendente.

**Cliques no nome continuam a avançar.** Os quatro degraus são os mesmos
quatro que a tecla de renomear percorre, pela mesma ordem: o nome, o nome com
a sua extensão, o caminho a partir do cofre, o caminho a partir da raiz do
sistema. Assim, um terceiro clique alcança o caminho do cofre e um quarto o da
máquina — as mesmas quatro coisas que <kbd>Tab</kbd> para lá do fim do campo
lhe dá, e as mesmas quatro que o botão direito *copia* em vez de selecionar.

**Pairar** é a sua própria resposta e nunca muda nada: um nome encurtado volta
a aparecer por inteiro enquanto apontar para ele, e o ícone no início da linha
diz onde o cofre vive.

## Botão direito: uma pressão, duas pressões, três

Todos os alvos na linha respondem a um clique com o botão direito, e o número de pressões que dá decide o que obtém. Como uma segunda pressão ainda pode vir a seguir, a primeira espera cerca de um terço de segundo antes de agir — o custo de colocar três gestos num só botão.

| Onde clica | Uma vez | Duas vezes | Três vezes |
| --- | --- | --- | --- |
| O **nome do cofre** | O menu de contexto do cofre: o que se pode fazer ao cofre que esse segmento nomeia — incluindo *Abrir este cofre*, onde esse cofre não é aquele em que está | Copia o nome do cofre | Copia onde o cofre está — e uma quarta pressão, onde o ficheiro aberto está |
| Um **separador** | O menu dessa pasta — o da sua nota de pasta, onde um plugin de notas de pasta está a correr e a pasta tem uma | | |
| Um **nome de pasta** | O menu dessa pasta | Copia o nome da pasta | Copia-o e tudo o que está à direita dele |
| O **nome da nota** | O menu do ficheiro — o mesmo que a linha do Explorador de Ficheiros dá | Copia o nome | Copia-o com a sua extensão |
| O **espaço vazio** | | Copia o caminho a partir da pasta do seu cofre, sem a extensão | O mesmo, com ela |

Uma única pressão no **nome do cofre** abre o que se pode fazer àquilo que
esse segmento nomeia. Para **o cofre em que está**: abri-lo numa nova janela,
gerir cofres, copiar onde vive, copiar o seu ID, mostrá-lo no seu gestor de
ficheiros. Para **outro cofre**, alcançado através da lista de localizações,
o mesmo menos a nova janela — que abriria *este* cofre, não aquele — mais a
única coisa que só um cofre em que não está pode oferecer: **Abrir este
cofre**. É nomeado ao Obsidian pelo seu ID e não pelo nome da pasta, já que
dois cofres podem partilhar um. Para algures que não é sequer um cofre — a sua
pasta pessoal, uma unidade montada — não há ID para copiar nem nada para
abrir, e o menu diz-o não os oferecendo.

Este não é o próprio menu de três pontos do Obsidian, que pertence à janela
inicial e não pode ser aberto de dentro de um cofre em funcionamento — estas
são as mesmas entradas reconstruídas, na própria redação do Obsidian, tiradas
dos seus comandos para que cheguem no seu idioma. Três das entradas desse
menu propositadamente **não** estão aqui: *renomear cofre*, *mover cofre* e
*remover da lista* atuam todas sobre a própria pasta do cofre ou sobre o
registo de cofres do Obsidian, e fazer isso ao cofre em que está — com os
seus ficheiros abertos e os seus observadores a correr — é como um cofre se
estraga. Abra o gestor de cofres (*Abrir outro cofre*) e faça-o lá, onde o
cofre está fechado.

As duas cópias no **espaço vazio** são a linha tal como está escrita — o que
uma ligação ou uma pesquisa quer — e as do **nome do cofre** são os caminhos
que o sistema de ficheiros conhece, que é o que qualquer coisa fora do
Obsidian quer. Cada pressão ali alarga para que serve a cópia: duas dão o
nome do cofre, três onde o cofre está, quatro onde o ficheiro aberto está. O
Obsidian faz a mesma distinção nos seus próprios dois comandos, *a partir da
pasta do cofre* e *a partir da raiz do sistema*; aqui, os voltados para fora
situam-se no segmento que está ele próprio fora do caminho.

Tudo isto funciona também fora do cofre, nos mesmos alvos.

Cada cópia avisa disso mesmo numa notificação, porque uma cópia não deixa
nada no ecrã que mostre que aconteceu, e uma pressão mal contada não deve
parecer uma pressão bem-sucedida.

## Modificadores: abrir noutro sítio

O nome da nota e os segmentos de pasta comportam-se como as suas linhas no Explorador de Ficheiros.

| | No nome da nota | Num segmento de pasta |
| --- | --- | --- |
| Clique simples | Editar o nome | Navegar nessa pasta |
| <kbd>Ctrl</kbd> / clique com o botão do meio | Abrir a nota numa nova aba | Enviar a pasta para uma nova aba |
| <kbd>Ctrl</kbd>+<kbd>Alt</kbd> | Uma divisão | Uma divisão |
| Arrastar | A nota, para qualquer sítio que o Obsidian aceite um ficheiro | A pasta, do mesmo modo — incluindo a barra de abas |

Uma pasta não é algo que o Obsidian consiga abrir, por isso enviá-la para uma aba faz uma de duas coisas: abre a sua nota de pasta, onde um plugin de notas de pasta está a correr e existe uma, ou abre uma aba vazia cujo caminho já se situa nessa pasta — deixando-lhe apenas o nome para escrever. Largar um segmento de pasta na **barra de abas** faz o mesmo, numa nova aba onde largar — a barra de abas do Obsidian só aceita ficheiros por si só, por isso uma pasta arrastada para fora do Explorador de Ficheiros continua a ser recusada ali.

## Tab: completa o nome, depois o caminho, depois alarga a seleção

<kbd>Tab</kbd> completa como uma shell: **um toque estende o que escreveu até onde os nomes dessa pasta concordam, e para onde discordam.** Escreva `Sk` onde só `Sketches` começa assim e a palavra fica completa; escreva `Al` onde `Alpha-one`, `Alpha-two` e `Alpine` começam todos assim e obtém `Alp`, porque o carácter seguinte é uma pergunta que só você pode responder.

Carregue outra vez sem escrever e avança em direção a um nome — a linha que a lista tem realçada, ou a primeira — parando na próxima ambiguidade desse nome: `Alpha-`, depois `Alpha-one`. A lista abre onde já está, por isso na sua própria pasta o primeiro toque dirige-se para a nota que tem aberta em vez daquilo que ordena primeiro.

**Um toque nunca escolhe entre nomes por si.** <kbd>Tab</kbd> entra numa pasta assim que o que escreveu deixa um único candidato, ou assim que escreveu o nome inteiro da pasta e nenhuma *outra pasta* o estende. Onde uma o faz — `Schemes` ao lado de `Schemes2026` — <kbd>Tab</kbd> continua a completar em direção ao nome mais longo; <kbd>Enter</kbd> e a lista são os gestos que significam *este mesmo*.

Um **ficheiro** nunca detém uma pasta dessa forma. Uma pasta ao lado de uma nota com o seu próprio nome é uma nota de pasta, não uma bifurcação no caminho, e <kbd>Tab</kbd> percorre pastas — por isso `Projects` com um `Projects.md` ao lado é percorrida como qualquer outra.

Duas coisas menores que se seguem: o que fica no campo é escrito como a pasta o escreve, por isso `sk` torna-se `Sketches`; e só o nome que está a ser escrito é substituído, por isso um caminho com mais à direita mantém isso.

Com um nome oferecido enquanto escreve, <kbd>Tab</kbd> **escreve exatamente a oferta**: a oferta é sempre o que o toque escreveria, e o sublinhado e a linha verde da lista dizem a mesma coisa, por isso o que vê depois do cursor é o que obtém. Onde os nomes deixam de concordar, esse é o passo em direção ao primeiro deles — ou à linha para a qual navegou com as setas, que <kbd>Tab</kbd> assume em vez da linha ao lado — por isso navegue com as setas até à que quer, ou escreva além da bifurcação, antes de carregar. Só onde a oferta deixa *um* nome é que o mesmo toque entra nele.

Chegar ao nome do ficheiro **é** o primeiro degrau — nenhum toque é gasto a estacionar o cursor no fim de um nome que está prestes a marcar. A partir daí os toques deixam de avançar pelo caminho e começam a alargar o que está selecionado:

1. o nome
2. o nome com a sua extensão
3. o caminho a partir da pasta do seu cofre
4. o caminho a partir da raiz do sistema
5. de volta ao início do caminho **como agora está** — de volta a onde o percurso começou, primeiro segmento marcado, pronto a ser percorrido outra vez

Um quarto clique chega diretamente a esse mesmo quarto degrau.

Alargar só nunca faz mais do que **alargar**. Um nome que já está inteiro no campo — completado pela mesma tecla, ou escolhido na lista — é marcado por inteiro em vez de lhe retirar primeiro a extensão: o primeiro degrau é para um nome ao qual o percurso acabou de *chegar*, onde a extensão ainda não é o assunto.

A escada é onde o percurso **chega**, não onde começa. Clique numa pasta a meio de um caminho e o campo abre com tudo o que está abaixo dela e o nome dessa pasta marcado; cada <kbd>Tab</kbd> avança então **uma** pasta — marcando a seguinte, mantendo o resto do caminho atrás dela — e só quando resta apenas o nome do ficheiro é que o alargamento começa:

| toque | fragmentos | campo | marcado |
| --- | --- | --- | --- |
| clicou em `a` | | `a/b/c/leaf.md` | `a` |
| <kbd>Tab</kbd> | `a` | `b/c/leaf.md` | `b` |
| <kbd>Tab</kbd> | `a › b` | `c/leaf.md` | `c` |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf` — o primeiro degrau |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf.md` |

**Um nome que ficou definido, ficou definido, seja como for que o tenha definido.** Completá-lo com
<kbd>Tab</kbd>, confirmá-lo com `/`, e escolhê-lo na lista deixam todos
a linha no mesmo sítio com o mesmo caminho, por isso o toque depois do
gesto significa a mesma coisa qualquer que tenha sido o caminho tomado. Escolher uma pasta na
lista costumava esvaziar o campo em vez disso, deitando fora um caminho que chegar
à mesma pasta com <kbd>Tab</kbd> teria mantido.

**Um caminho que ainda está a escrever vem consigo por inteiro.** Entrar precisamente na pasta de onde depende o resto do caminho não é uma afirmação de que o resto existe — é assim que um caminho se escreve à sua própria frente, e as pastas que nomeia são aquelas que <kbd>Enter</kbd> está prestes a criar. Por isso percorrer `Dokumente/plans/untitled.md` até `Dokumente` mantém `plans/untitled.md` à sua frente, quer `plans` já exista quer não. O mesmo se aplica a um caminho que escreveu do zero: nada dele foi herdado de lado nenhum, por isso nada dele é retirado.

**Trocar um passo por outro é uma história diferente, e aí o caminho só vem consigo até onde realmente existe.** Troque uma pasta a meio de um caminho por uma vizinha — clique em `a`, escreva outro nome, carregue em <kbd>Tab</kbd> — e tudo o que está abaixo dela vem consigo, porque o caminho em que estava é normalmente a maior parte do caminho que quer. Só o que existe do outro lado é que sobrevive à mudança, no entanto, por isso o campo e a lista ao lado nunca discordam: o que fica à sua frente é um caminho que realmente pode percorrer. Partindo de `a/b/c/leaf.md`, com `a` clicado e o seu nome marcado:

| o que define | fragmentos | campo | marcado |
| --- | --- | --- | --- |
| `x`, que não tem `b` nenhum | `x` | | nada veio consigo |
| `y`, que tem um `b` mas nenhum `c` dentro | `y` | `b` | `b` |
| `z`, um gémeo de `a` até ao fim | `z` | `b/c/leaf.md` | `b` |

Uma pasta deixada assim sozinha continua a ser uma pasta para entrar: o toque depois dela entra, em vez de começar a alargar uma seleção sobre o seu nome.

Um nome que **nada** na pasta corresponde é respondido de forma diferente, porque nada foi definido por ele: o toque marca o que escreveu, pronto para escrever por cima, em vez de responder com outro lado qualquer.

A coisa toda é um **ciclo, e não custa nada dar a volta**: o toque depois do último degrau devolve a linha ao início do caminho, pastas e tudo, pronta para dar a volta outra vez. A única coisa que alguma vez sai da linha é o prefixo absoluto, no toque que deixa de o mostrar.

O que volta é **o caminho que construiu**, não aquele de onde partiu. Bifurque o percurso a meio — escolha um vizinho diferente na lista, complete em direção a outro nome — e a volta fecha-se onde realmente está; os quatro degraus antes dele descrevem esse mesmo caminho, e este costumava ser o degrau estranho que descrevia o passado.

<kbd>Shift</kbd>+<kbd>Tab</kbd> fecha o mesmo anel ao contrário: no início do caminho, sem nada mais para devolver e nada mais acima, o toque seguinte salta para o degrau **mais distante** — o caminho a partir da raiz do sistema — e continua a restringir a partir daí. Nenhuma das direções chega a um beco sem saída.

Também não gasta nenhum toque num degrau que já mostrou. Abaixo do último degrau — o nome sem a sua extensão — a escada acaba, e *o mesmo toque* sai da pasta: o caminho a partir da raiz do sistema, o caminho a partir do seu cofre, o nome, o nome sem a sua extensão, depois a pasta, um passo de cada vez.

Também não se gasta nenhum toque num degrau que não muda nada: clicar no nome de uma nota já o mostra sem a sua extensão, que é o que o primeiro degrau mostra, por isso a partir daí <kbd>Tab</kbd> começa no segundo.

Cada degrau muda o que está *no* campo, não só o que está realçado — uma seleção tem de estar sobre o texto que nomeia, ou <kbd>Enter</kbd> confirmaria outra coisa que não aquilo que se vê selecionado. A escada pertence a uma única sessão de edição: clique fora, ou escreva qualquer coisa, e o próximo <kbd>Tab</kbd> volta a completar um nome.

### <kbd>Shift</kbd>+<kbd>Tab</kbd>: o mesmo caminho ao contrário

<kbd>Shift</kbd>+<kbd>Tab</kbd> retira um passo por toque, pela ordem em que os toques foram dados: a seleção estreita um degrau de cada vez, cada conclusão é devolvida, e sai-se de cada pasta — o seu nome regressa ao campo para que o possa editar em vez de voltar a escrevê-lo.

**Nada é apagado no caminho de volta.** Uma conclusão é devolvida ao *marcar* os caracteres que acrescentou, exatamente como avançar marca o que alargou — o nome fica à sua frente, e cada toque seguinte marca mais um passo dele:

| | campo | marcado |
| --- | --- | --- |
| percorrido até | `Alpha-one` | |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `ha-one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `Alpha-one` |

Escrever substitui a parte marcada, como acontece em qualquer outro sítio. <kbd>Tab</kbd> repõe exatamente o que a marca devolveu, por isso sair dois passos e voltar a entrar dois passos devolve-o a onde estava.

Assim que o nome inteiro está marcado já não resta nada que um toque tenha ali posto, e o toque seguinte sobe *pelo caminho*: sai da pasta em que está, exatamente como <kbd>Backspace</kbd> num campo vazio faz. Isso também não custa nada — o nome da pasta volta ao campo **à frente** do que lá estava, marcado, que é o mesmo texto que clicar nessa pasta lhe teria dado. Voltar é uma direção, não um histórico de desfazer — mas marcar o nome primeiro significa que um toque nunca ao mesmo tempo retira o que escreveu e o tira da pasta onde o escreveu.

Texto que abre **já selecionado** — o que um clique numa pasta deixa atrás de si — é o nome sobre o qual <kbd>Tab</kbd> trabalha a seguir: é completado e percorrido como qualquer outro, e escrever substitui-o. Só o comando de focar abre num degrau da própria escada, porque está a mostrar-lhe o caminho inteiro em vez de uma pasta para percorrer.

## Escrever algo que não é um caminho

| O que escreve | O que acontece |
| --- | --- |
| `https://…` | Abre numa nova aba no **Visualizador Web** do Obsidian, se tiver esse plugin nativo ativado; caso contrário, no seu navegador |
| `obsidian://…` | Entregue ao gestor de URI do próprio Obsidian |
| `file:///…` | Descodificado e aberto: como uma nota real se estiver dentro do seu cofre, no visualizador caso contrário |
| `/home/you/a%20b.md` | O mesmo, para um caminho colado a partir de um navegador ou gestor de ficheiros |

Só os esquemas explícitos contam — uma nota chamada `100%20` continua a ser uma nota. Uma `/` que pertence a um esquema mantém-se literal em vez de descer para uma pasta, por isso um URL pode ser escrito à mão e não só colado.

## Um comando para o teclado

**Focar a barra de caminho** abre o campo no nome da nota e percorre-o como <kbd>F2</kbd> faz — o nome, o nome com a sua extensão, o caminho a partir do seu cofre, o caminho a partir da raiz do sistema — e o toque a seguir fecha o campo e devolve o cursor à nota. Não renomeia: Enter navega, como em qualquer outro campo. Não tem tecla própria de origem, porque as diretrizes do Obsidian desencorajam os plugins de reclamar uma; a linha **Atalhos** no fim das definições deste plugin abre *Definições → Atalhos* mostrando só os seus comandos, para que o possa associar aí.

## A navegação nunca toca no ficheiro aberto

No modo predefinido (navegação) a nota aberta **nunca** é renomeada nem movida.

- Um caminho que corresponde a um ficheiro existente abre-o.
- Um caminho que ainda não existe é simplesmente criado, juntamente com quaisquer pastas superiores em falta, e aberto. Cada ficheiro e pasta criados desta forma são anunciados numa notificação — uma nova pasta é de outro modo invisível até se ir à procura dela — e o lixo do próprio Obsidian faz de uma indesejada algo que se desfaz com uma tecla.
- **Fora do seu cofre continua a perguntar primeiro.** Lá fora o mesmo erro de escrita escreve numa pasta do sistema, onde nem a notificação nem o lixo do Obsidian são grande consolo.

## <kbd>Ctrl</kbd> — nova aba, e copiar em vez de mover

Uma nota **criada, movida ou copiada dentro do cofre é mostrada onde ficou** no Explorador de ficheiros, marcada por um instante na cor de destaque do Obsidian — a árvore é onde a procura depois, por isso é posta à sua frente em vez de deixada numa pasta que pode nem sequer estar aberta. Duplicar também o anuncia: uma cópia deixa o original onde estava e abre a cópia no seu próprio painel, o que sem palavra nenhuma é fácil de ler como se nada tivesse acontecido.

Manter <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> no macOS) enquanto escolhe um ficheiro da lista, ou enquanto carrega em <kbd>Enter</kbd> num caminho, manda o resultado para uma **nova aba** em vez desta:

| | Sem mais | Com <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Escolher ou escrever um ficheiro existente | Abre aqui | Abre numa nova aba |
| Escrever um caminho que não existe | Pergunta e depois abre aqui | Pergunta e depois abre numa nova aba |
| Confirmar um caminho no modo renomear/mover | **Move** a nota para lá | **Copia-a** para lá e abre a cópia numa nova aba |

O modificador é lido com a regra do próprio Obsidian, por isso comporta-se exatamente como numa ligação ou numa linha do Explorador de ficheiros — o clique do meio também significa «nova aba», <kbd>Ctrl</kbd>+<kbd>Alt</kbd> significa uma divisão e <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> uma nova janela.

Copiar recusa-se a substituir, exatamente como mover — incluindo sobre o próprio caminho da nota, onde não há nada sensato para copiar. Fora do cofre essa recusa também é dita em voz alta.

Tudo isto funciona **com a lista aberta** tal como sem ela: numa linha realçada o modificador aplica-se a essa linha, e parado sem nada selecionado aplica-se ao que escreveu.

## Navegar fora do cofre

**Isto está desligado por predefinição.** Ligue primeiro **Acesso a ficheiros externos** nas definições — ler e escrever fora do cofre é a única coisa que este plugin faz e que o Obsidian por si só não faz, por isso entra-se nisso de propósito em vez de ter de sair. Com a opção desligada, o nome do cofre limita-se a mostrar o seu cofre no Explorador de ficheiros, e aqui nada olha alguma vez para lá disso.

Clicar no **nome do cofre** (ou no ícone 🏠, quando *Mostrar o nome do cofre* está desligado) abre uma lista de sítios em vez de conteúdos. O campo que se abre contém **todo o caminho onde estava, escrito por extenso**, com o sítio onde começa selecionado — por isso, escolher outro sítio, ou escrever por cima da seleção, troca só essa parte inicial e deixa o resto do caminho à sua frente. **Carregue no nome uma segunda vez** — um duplo clique — e a marca alarga-se a todo ele, e é assim que o caminho absoluto é apanhado num só gesto em vez de ser percorrido à mão. Se mudar de ideias, <kbd>Esc</kbd> repõe a linha como estava.

Escrever aqui é-lhe oferecido o resto do nome de um sítio como em qualquer outro lado, e <kbd>Tab</kbd> **fixa esse sítio** — aquele para onde está a apontar, ou aquele que o nome só pode significar. Onde vários sítios ainda partilham o que escreveu, a pressão para na bifurcação, como acontece em todo o lado. Apontar para um sítio mostra **o próprio caminho desse sítio**, todo ele selecionado, seguido do caminho da sua nota só até onde ele realmente vai lá — que é exatamente onde escolhê-lo o levaria. Um sítio não é um passo dentro do caminho no ecrã, mas um ponto a partir do qual se conta todo o caminho, por isso nada de onde estava fica à frente dele.

Os sítios oferecidos:

- **Os seus outros cofres**, lidos do registo do próprio Obsidian, primeiro o aberto mais recentemente, cada um sob o ícone de cofre do Obsidian — o mesmo que a aplicação usa nos seus comandos de cofre. O cofre que já tem aberto leva antes uma casa: é de onde a linha parte por predefinição, não um sítio para onde ir.
- A **pasta pessoal**, sob o nome da sua conta, marcada com um `~`. O Lucide não tem til, por isso este ícone é desenhado pelo plugin na própria grelha 24×24 do Lucide e com a mesma espessura de traço — um ícone que falta ao conjunto, não um carácter de texto sentado no meio de ícones.
- A **raiz do sistema de ficheiros**, com a etiqueta `root` — sem tradução, porque é esse o seu nome em todos os sistemas — em vez de `/`, que a seguir ao separador que vem depois se leria como um passo vazio.
- As **unidades montadas**, com um ícone por tipo onde isso é barato de determinar: partilhas de rede, discos óticos, disquetes e suportes amovíveis têm o seu; tudo o resto recebe uma unidade genérica. No Windows as unidades aparecem como `C:` com um ícone genérico — os nomes dos volumes e os tipos exatos exigem WMI, que de propósito não é usado.

Escolher outro cofre **não faz o Obsidian mudar para ele.** Tudo o que tem aberto continua aberto; o caminho limita-se a começar a navegar ali. É esse todo o sentido de o ter na barra de caminho em vez de remeter para o seletor de cofres da barra lateral.

Também aterra **tão perto da nota em que está quanto esse sítio realmente permite**.

- Se o sítio que escolheu *contiver* a nota — a pasta pessoal, ou onde quer que vivam os seus cofres — obtém o caminho dela a partir daí: escolha `~` com `takeaways.md` aberto e o campo lê `Vaults/your-vault/takeaways.md`.
- Se for um sítio ao lado deste — outro cofre, outra unidade — tenta-se o mesmo caminho relativo, tão fundo quanto ele realmente exista. Os cofres são muitas vezes quase cópias uns dos outros, e a razão para saltar para um é geralmente a mesma nota do outro lado.

De qualquer modo, a linha fica no sítio que escolheu e a **primeira pasta desse caminho abre selecionada**, a mesma forma que clicar numa pasta dá: o passo que é mais provável que mude quando salta para outro lado é o mais próximo do topo, e o resto do caminho continua visível enquanto o muda. Nunca é pré-preenchido nada que não esteja mesmo em disco.

### Enquanto está fora

O caminho **começa no local que escolheu**, não na disposição de diretórios da máquina — e o mesmo acontece com o campo que obtém ao clicar no espaço vazio ou ao carregar na tecla de foco: contém o caminho a partir desse sítio, não o caminho absoluto da máquina, com o rasto reduzido ao próprio sítio exatamente como se reduz à raiz do cofre cá dentro — escolha `Archive` e a linha lê `Archive / notes / …`, não `/home/voce/Vaults/Archive/notes/…`. O segmento inicial leva um ícone consoante o que é (cofre, pasta pessoal, unidade), e <kbd>Retrocesso</kbd> para ali em vez de continuar a subir para o resto do sistema de ficheiros. Com *Mostrar o nome do cofre* desligado, esse segmento é só o ícone — a definição é sobre o segmento inicial da linha, seja qual for o cofre que nomeia, não só o seu.

A barra de caminho fica **emoldurada na cor de erro** — o mesmo anel que o modo renomear desenha — durante todo o tempo em que apontar para fora do seu cofre. Marca uma condição permanente, não um instante: enquanto está lá, nada do tratamento próprio do Obsidian se aplica ao que a linha mostra, e a escrita está bloqueada até dizer o contrário.

De resto, navegar funciona como cá dentro: fichas, separadores, escrita, preenchimento automático, <kbd>Retrocesso</kbd> para sair. Também se aplicam as mesmas regras de visibilidade, por isso as extensões não suportadas continuam a precisar de **Detetar todas as extensões de ficheiros** do Obsidian e os ficheiros ocultos continuam a precisar da opção deste plugin.

**O clique direito também funciona lá fora**, embora seja um menu diferente: os manipuladores do próprio Explorador de ficheiros precisam de um ficheiro que o cofre conheça, por isso as entradas fora dele são construídas a partir do caminho. Oferecem abrir (aqui, à direita, numa nova janela, ou na aplicação predefinida do seu ambiente de trabalho), *Copiar caminho*, *Mostrar no explorador do sistema*, e — assim que o cadeado está aberto — *Nova nota*, *Nova pasta*, *Fazer uma cópia*, *Renomear…* e *Eliminar*. **Arrastar** continua a precisar de um ficheiro do cofre e mantém-se indisponível.

O mesmo menu está no ficheiro aberto no visualizador, por clique direito ou a partir dos três pontos do próprio painel, e pergunta ao cadeado no cabeçalho dessa vista. Não pergunta mais nada: se o ficheiro está a ser renderizado ou mostrado como código-fonte não tem qualquer influência sobre se pode ser eliminado, e uma imagem ou um PDF — que não tem vista de código-fonte nenhuma — é tão eliminável como uma nota. *Eliminar* significa o lixo do ambiente de trabalho, por isso pode ser desfeito a partir daí; um sistema sem lixo comunica isso mesmo em vez de destruir o ficheiro.

Eliminar fora do cofre move o ficheiro para o seu **lixo do sistema** — a Reciclagem no Windows, o Lixo no macOS — nunca uma remoção direta. Aqui fora não há lixo do Obsidian de onde recuperar, por isso uma eliminação que não pudesse ser desfeita nem sequer é oferecida: onde uma plataforma não tem lixo, a tentativa comunica a falha em vez de destruir o ficheiro.

### Escrever fora do cofre

Tudo o que escreve está **bloqueado por predefinição.** Enquanto a linha apontar para fora do seu cofre, o lugar do interruptor de renomear no cabeçalho é ocupado por um **cadeado vermelho** — a mesma cor do anel à volta da linha, e pela mesma razão: marca uma recusa. Os dois são um só controlo num só espaço, por isso nunca há dúvida sobre qual dos dois controla o quê.

Três pressões, em ciclo:

| Pressão | O que obtém |
| --- | --- |
| O cadeado vermelho | Escrever aqui é permitido. O cadeado é substituído pelo interruptor de renomear/mover |
| O interruptor | Modo renomear/mover, exatamente como dentro do cofre |
| O interruptor de novo | O modo termina e o cadeado fecha-se de novo — a permissão não sobrevive àquilo para que foi aberta |

**A tecla de renomear também pergunta ao cadeado.** Fora do seu cofre, carregar nela faz o cadeado piscar entre aberto e fechado em vez de abrir um modo que qualquer confirmação recusaria: a recusa chega antes do trabalho em vez de depois. Carregue no cadeado, ou carregue de novo na tecla de renomear dentro de meio segundo — a segunda pressão concede exatamente o que o botão concede, para este local, e abre com isso o modo renomear.

Dentro do seu cofre não há cadeado: não há nada para desbloquear, e o interruptor tem simplesmente o lugar.

A permissão é concedida **a um local, não a um instante**: sobrevive a tudo o que fizesse a trabalhar num só sítio — terminar uma movimentação, clicar para fora da caixa de entrada, abrir um ficheiro — e termina quando escolhe um cofre, unidade ou raiz diferente na lista, quando a linha volta a um ficheiro do cofre, ou nessa terceira pressão. Por isso, uma série de movimentações dentro de uma só pasta leva uma pressão, não uma por ficheiro.

Com o cadeado aberto, a barra de caminho comporta-se lá fora como se comporta cá dentro:

| Gesto | Resultado |
| --- | --- |
| Escrever um nome que não existe, <kbd>Enter</kbd> | A mesma pergunta «criar?» de cá dentro; as pastas em falta também são criadas. Um nome sem extensão torna-se um `.md`, exatamente como cá dentro |
| Modo renomear/mover, escrever um nome novo | Renomeia o ficheiro que a linha está a mostrar. Um nome sem extensão mantém a do ficheiro — aqui fora uma pasta contém todo o tipo de ficheiros, e um renomear não deve transformar em silêncio um `.png` num `.md` |
| Modo renomear/mover, navegar para outro sítio, escolher **manter este nome** | Move-o para lá com o nome que já tem |
| Manter <kbd>Ctrl</kbd> em qualquer dos dois | Copia em vez de mover, e abre a cópia numa nova aba |

Com o cadeado fechado, tudo isso comunica o que o está a impedir em vez de acontecer. Em nenhum dos estados se substitui seja o que for: um destino que já existe é recusado, e a recusa é do próprio sistema de ficheiros (`COPYFILE_EXCL`, uma criação exclusiva) e não uma verificação que poderia perder a corrida. Uma movimentação entre sistemas de ficheiros — de uma pen USB, de uma partilha de rede — recorre a copiar e depois apagar, e o original só é removido depois de a cópia ter chegado.

**Mover uma nota para *fora* do seu cofre pergunta primeiro.** O `fileManager` não consegue seguir um ficheiro para lá dessa fronteira: todas as ligações que apontam para a nota deixam de resolver, nada as atualiza, e a nota sai do índice do cofre. Por isso a movimentação é oferecida como uma decisão em vez de recusada ou feita em silêncio — uma caixa de diálogo indica o que isso custa e quantas notas ligam para a que está a mover. Confirme e ela move-se mesmo: copiada para fora, depois removida do cofre através da eliminação do próprio Obsidian, por isso é recuperável exatamente como uma nota eliminada é, e uma falha em qualquer dos passos deixa a nota onde estava. Manter <kbd>Ctrl</kbd> continua antes a copiá-la para fora, o que não tem nenhum desse problema. O caminho inverso — trazer um ficheiro externo *para* o cofre — ainda não está ligado.

### Abrir um ficheiro externo

Navegar pelo sistema de ficheiros pode voltar **para dentro do cofre que tem aberto** — a partir da raiz, da pasta pessoal, de onde quer que vivam os seus cofres. Um ficheiro alcançado dessa forma é uma nota normal, por isso abre como tal: o editor a sério, ligações e retroligações, e a linha volta de imediato ao caminho enraizado no cofre. Só os ficheiros para os quais o Obsidian não tem vista continuam na pré-visualização, porque lá fora a pré-visualização é a melhor resposta. Onde uma pré-visualização já esteja a mostrar essa nota mesmo assim — uma área de trabalho reaberta, por exemplo — a sua linha do topo oferece **Abrir em *(cofre)***, que é a mesma oferta feita à mão.

O editor do Obsidian só funciona com ficheiros de dentro do cofre, por isso um ficheiro externo **não pode** ser aberto como uma nota a sério com ligações, retroligações e o resto — é um limite da aplicação, não deste plugin. Escolher um abre antes uma **pré-visualização**, apenas de leitura até dizer o contrário:

| Tipo | Mostrado como |
| --- | --- |
| `.md`, `.markdown` | Markdown renderizado |
| `.html`, `.htm`, `.xhtml` | A página renderizada |
| Imagens, áudio, vídeo, PDF | Leitor/visualizador nativo |
| Qualquer outro ficheiro de **texto** (`.json`, `.css`, `.log`, `.txt`, …) | Texto simples literal |
| Formatos binários sem visualizador (`.zip`, `.exe`, …) | Entregue a *Abrir na aplicação predefinida* |

O visualizador tem duas leituras de um ficheiro e, como se excluem entre si, só é mostrada aquela **para a qual** mudaria:

| | O que faz | Predefinido para |
| --- | --- | --- |
| **Ver como Markdown** | Renderiza o ficheiro como uma nota, apenas de leitura | `.md`, `.markdown` |
| **Ver como página** | Renderiza o ficheiro como a página que é, apenas de leitura | `.html`, `.htm`, `.xhtml` |
| **Editar como texto** | O código-fonte, editável | tudo o resto |

Fora do cofre, **Editar como texto** é também a pressão que levanta o apenas-leitura — o modo e a permissão são um só gesto em vez de dois botões sobre os quais raciocinar. Fica tingido de vermelho **sempre que carregar nele levantaria o apenas-leitura**, quer esteja a armar a edição ali mesmo quer venha diretamente da vista renderizada; dentro do cofre não há nada para desbloquear, por isso mantém-se normal. **Ver como Markdown** recebe uma leve lavagem da cor de destaque — a mesma tonalidade que o Obsidian dá ao texto selecionado — marcando-o como o caminho de volta e não como um convite à ação.

Como o botão segue a *edição* e não o modo em bruto, um ficheiro que está apenas de leitura na vista de texto continua a oferecer **Editar como texto**: é essa a pressão que a arma. Um ficheiro onde nunca se poderá escrever — truncado ou ilegível — diz antes **Ver como texto**, já que é tudo o que a pressão pode dar.

As predefinições são as úteis e não as literais: um `#` num script de shell é um comentário, não um cabeçalho, por isso renderizar um `.log` como Markdown engoli-lo-ia em silêncio. Qualquer uma das predefinições pode ser trocada ficheiro a ficheiro, e a escolha vai para o histórico da aba, por isso recuar/avançar e uma área de trabalho reaberta mantêm-na — muitas notas vivem em ficheiros `.txt`, e muitos ficheiros `.md` leem-se melhor como código-fonte.

#### O que uma página HTML tem permissão para fazer

Nada. A página é mostrada numa moldura com **todas as permissões retiradas** — sem scripts, sem formulários, sem navegação, sem origem própria — e uma política de conteúdo que não lhe permite qualquer rede. Não é uma cautela pela cautela: uma página local carregada da forma habitual partilharia a origem desta janela, e esta janela é o Obsidian, por isso um script num ficheiro HTML descarregado estaria a correr dentro da sua aplicação com o alcance da sua aplicação.

O que isso custa é tudo o que a página *faz*; o que mantém é tudo o que a página *é*. As folhas de estilo e as imagens ao lado do ficheiro são lidas e levadas para a moldura, por isso uma página guardada continua parecida consigo mesma. As referências que apontam para fora da própria pasta da página, e as referências para algum sítio na web, ficam exatamente como estão escritas e simplesmente não carregam — um ficheiro local não pode dizer em silêncio a um servidor que o abriu.

Os scripts são **removidos** em vez de meramente bloqueados, para que a página que vê e o código-fonte para o qual pode mudar difiram de uma forma declarada em vez de em o que quer que seja que a moldura tenha silenciosamente recusado correr. As ligações dentro da página não fazem nada. Quando quiser a coisa a sério — scripts, rede e tudo — *Abrir na aplicação predefinida* entrega-a ao seu navegador, que é a ferramenta certa para isso.

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

- **Abrir em *(cofre)*** — mostrado quando o ficheiro pertence a um dos seus outros cofres. Entrega-o ao próprio gestor de URI do Obsidian, que abre a janela desse cofre com a nota lá dentro, como uma nota a sério e editável. Esta janela fica exatamente como estava; nada muda por baixo de si.
- **Ver como Markdown** / **Ver como página** / **Editar como texto** — as duas leituras que este ficheiro tem; a última também levanta o apenas-leitura fora do cofre.
- **Abrir na aplicação predefinida** — entrega o ficheiro à aplicação predefinida do seu ambiente de trabalho, incluindo os formatos binários que este visualizador não consegue mostrar. Redigido exatamente como a própria entrada do Obsidian para a mesma ação, porque é a mesma ação.

O visualizador também responde a um **clique direito**: dentro do editor de texto com *Cortar* / *Copiar* / *Colar* / *Selecionar tudo*, e em qualquer outro sítio com o próprio menu do ficheiro. O menu de três pontos do Obsidian no cabeçalho também leva esse menu — fora do cofre não teria de outro modo nada a oferecer além de *Dividir à direita* e *Dividir abaixo*.

Nada de fora do seu cofre é escrito sem carregar antes em *Editar como texto*. Veja a secção [Fora do cofre](README.pt.md#fora-do-cofre) do README para a divulgação completa.

## Largar um ficheiro numa pasta no caminho

Todas as pastas na linha são um alvo de largada, por isso **uma nota arrastada
para uma delas move-se para lá** — o caminho mais curto até lá é entre uma nota
e qualquer pasta acima dela, já que o destino já está no ecrã. Arraste a partir
do gestor de ficheiros, da lista, do próprio nome da nota no cabeçalho, ou de
qualquer outro sítio no Obsidian que produza um ficheiro: é o próprio arrastar
da aplicação, por isso a etiqueta ao passar por cima, o cursor e o destaque são
os que o gestor de ficheiros desenha.

**O nome do cofre também aceita uma largada**, já que é a pasta no topo da
linha — o único gesto que coloca uma nota na raiz do cofre a partir daqui.

**Uma seleção inteira pode ser arrastada de uma vez**, e move-se como uma só:
se alguma delas não pudesse ser levada, a largada é recusada em vez de mover
algumas e ignorar silenciosamente as restantes.

As ligações seguem a nota, exatamente como fazem quando é movida a partir do
gestor de ficheiros ou ao escrever um caminho.

Uma pasta que **não pudesse aceitar a largada não oferece nada de seu** —
nenhuma etiqueta *Mover para*, nenhum destaque na pasta — em vez de oferecer
algo que depois falharia; a própria resposta do Obsidian para o cabeçalho,
*Abrir nesta aba*, é o que fica lá em vez disso. Três casos:

- a pasta em que o ficheiro **já está**, já que já está lá;
- uma pasta largada **em si mesma ou num seu descendente**, o que a deixaria
  sem sítio de onde ter vindo;
- uma seleção que contém **uma pasta e algo dentro dela**, já que mover a
  pasta leva o filho com ela.

Uma pasta que já tenha um **ficheiro com o mesmo nome** aceita a largada e
pergunta o que fazer com o que está no caminho, com a mesma janela de um nome
já usado escrito ou escolhido — ver [Um nome que já está em uso](#um-nome-que-já-está-em-uso).
Nada aqui substitui.

Só as pastas **dentro do seu cofre** aceitam largadas. Enquanto a linha aponta
para fora do cofre, os seus segmentos recusam, porque tirar uma nota do cofre
quebra todas as ligações a ela — uma decisão que merece uma pergunta em vez de
um gesto. A forma de o fazer deliberadamente continua a ser escrever o caminho,
que pergunta primeiro e diz-lhe quantas notas seriam afetadas.

## Largar texto ou um ficheiro para o escrever

Os mesmos alvos aceitam **conteúdo** tal como ficheiros, e os dois distinguem-se
pelo que está a arrastar, não por onde larga.

**Sobre uma nota que a linha já nomeia** — o próprio nome da nota, ou um
separador cuja pasta tem uma nota de pasta — o que largou vai para o fim dela,
depois de uma linha em branco. Pergunta primeiro, porque isto escreve num
ficheiro que já existe e um arrastar é um gesto que uma mão instável pode fazer
por acidente. Texto vindo de um editor, um ficheiro do seu ambiente de trabalho
e uma nota arrastada para fora deste cofre funcionam todos; um ficheiro é lido
como texto, e um binário é recusado em vez de ser colado como um ecrã cheio de
disparates.

**Sobre um sítio — o nome do cofre ou uma pasta** — nada é escrito ainda,
porque nada foi nomeado. O campo abre ali com o que largou, e o nome que
escreve é o que confirma: uma nova nota é *criada* com o texto, e uma existente
é questionada exatamente como acima. <kbd>Esc</kbd>, ou um clique noutro sítio,
larga tudo.

**A linha fica azul** enquanto um arrastar que aterraria como conteúdo está
por cima dela, e mantém-se azul enquanto o campo tem um — o mesmo azul, a dizer
a mesma coisa: o que acontece a seguir é sobre o texto que traz consigo. Um
ficheiro arrastado do seu próprio cofre para uma pasta continua a significar
*mova-o para lá*, mantém o próprio destaque do Obsidian, e nunca fica azul;
esse gesto já lá estava primeiro e o conteúdo dá-lhe prioridade.

## Quando o caminho é mais comprido do que o painel

Os nomes são **encurtados em vez de espremidos**, pela ordem do que é menos
provável que precise:

1. **Primeiro o nome do cofre**, até ao seu ícone. Você sabe em que cofre está;
   o ícone continua a dizer onde o caminho começa.
2. **Depois a extensão do ficheiro**, se a tiver ativada — os mesmos três
   caracteres em quase todos os ficheiros de um cofre. É retirada inteira em
   vez de ser encurtada: meia extensão não diz nada que nenhuma extensão já
   não diga.
3. **Depois as pastas, a mais comprida primeiro.** O nome de pasta mais
   comprido encurta até ao comprimento do seguinte mais comprido, depois ambos
   juntos, e assim por diante, cada um a parar no seu mínimo — por isso uma
   pasta com um nome muito comprido cede tudo o que tem a mais em relação às
   outras antes de um nome curto ao lado perder uma letra.
4. **O nome da própria nota por último**, e mantém cerca de seis caracteres.
   É para isso que serve o cabeçalho.

O espaço é cedido **de forma contínua**, em frações de pixel em vez de uma
letra de cada vez: um nome que cede é cortado no pixel e desvanece sob o seu
`…`, por isso um painel arrastado devagar estreita a linha suavemente e nada
depois dele se move aos saltos. Antes de qualquer letra ir, o espaço à volta
dos separadores é gasto — é o único espaçamento da linha e não custa nenhuma
informação — e um nome encurtado termina onde o separador começa, sem nenhuma
faixa de caixa vazia entre os dois.

**O campo ocupa o que contém.** Abrir um para escrever um caminho não espreme
as pastas ao lado para fora do caminho: é tão largo quanto o texto que tem e
cresce à medida que escreve, por isso o rasto mantém tudo o que o campo não
precisa. Só quando não há espaço suficiente para ambos é que a linha desloca,
e nesse caso o campo é a única coisa que nunca cede — é texto a ser editado,
não um nome a ser ajustado.

Nada é cortado além do que o distingue dos vizinhos: `Projects2025` e
`Projects2026` na mesma pasta reduzem-se a `…025` e `…026` em vez de a um
prefixo que os tornaria a mesma palavra, enquanto `Reports` ao lado de
`Receipts` pode reduzir-se a `Rep…`. Além disso, todos os nomes mantêm uma
**largura legível** — cerca de quatro letras para uma pasta e seis para um
nome de ficheiro, medida no tipo de letra em que a linha é efetivamente
desenhada em vez de contada. Quatro letras estreitas e quatro largas não são
a mesma quantidade de nome, por isso `lilliliillil` pode manter mais de si
mesmo do que `WWMMWWMMWWMM`, e o que fica no ecrã tem o mesmo tamanho em
ambos os casos. Nomes curtos são deixados intocados por completo — um nome
reduzido a `A…` é único e continua ilegível. **Os espaços não contam para
isto.** Seis caracteres para dizer qual é este ficheiro são seis caracteres
que vale a pena ler, por isso os espaços entre eles seguem de graça e um
nunca fica pousado junto ao `…`, onde seria invisível de qualquer forma.

**Um nome é cortado onde os seus vizinhos concordam com ele, e no meio quando
não concordam em lado nenhum.** Duas pastas chamadas `aaaa-common-one` e
`aaaa-common-two` partilham tudo menos os últimos três caracteres, por isso
cortar a cauda mantém a metade que diz algo: reduzem-se a `…one` e `…two` em
vez disso, o que é mais curto *e* distingue-os. Onde a concordância está no
fim — `alpha-draft` ao lado de `beta-draft` — é o fim que desaparece; onde
está em ambos os extremos, o que fica é o meio. Um nome sem vizinhos
próximos perde o meio, já que um nome começa com o que é e termina com qual
é — para um ficheiro, a sua extensão: `annual…2026.md`.

Uma pequena sequência em comum não conta. `parallel structures` termina por
acaso nas mesmas duas letras que `Schemes` ao lado, e isso não é razão para
manter nenhum dos dois inteiro — três caracteres do início já os distinguem.

Nada passa para uma segunda linha. Quando nem os nomes mais curtos e honestos
cabem, a linha **desloca-se lateralmente**, ancorada no fim onde está o
ficheiro — nesse ponto já não há nada para comprimir, e cortar mais escondería
em vez de encurtar. A roda desloca-a onde quer que o ponteiro esteja sobre a
linha, e ambos os extremos podem ser alcançados: enquanto desloca, a linha
alinha-se ao seu início, seja qual for a definição de alinhamento, porque
conteúdo centrado numa caixa que já não cabe transborda tanto para a esquerda
como para a direita — e essa metade não pode ser alcançada de todo.

**Aponte para um nome encurtado e ele volta por inteiro**, enquanto estiver a
apontar para ele, deslocado até à margem esquerda para que tudo o que voltou
esteja no ecrã. **Clique num e ele fica**: o campo abre a mostrar a pasta em
que clicou, o que é oferecido depois dela e o que escrever, e continua a
mostrá-los depois de o ponteiro se afastar. Os nomes ficam quietos enquanto
desloca a linha ou escreve nela — um a abrir-se de repente sob um gesto
destinado a ler a linha moveria tudo o que vem depois dele por baixo de si.

O **segmento inicial mostra sempre uma dica, e é o caminho absoluto** —
`/home/voce/Vaults/Notes`, ou onde quer que a linha comece. É a única coisa
sobre a linha que nada no ecrã pode dizer: o nome diz-lhe *qual* cofre, nunca
onde está. Está lá quer algo tenha tido de ser encurtado quer não.

Com o **Mostrar o nome do cofre** desligado, o nome não é removido, apenas
reduzido a nada — por isso apontar para o ícone devolve-o exatamente da mesma
forma que apontar para um nome que a linha teve de encurtar.

O **Mostrar extensões de ficheiro** volta a colocar a extensão no nome de
ficheiro da linha. Desligado — a predefinição — a linha nomeia uma nota da
forma como o Obsidian a intitula, sem o `.md` que quase todos os ficheiros de
um cofre partilham; ligado, nomeia-a da forma como o sistema de ficheiros o
faz, o que é o que quer quando o cofre contém mais do que notas. É também a
segunda coisa a que a linha renuncia quando o espaço escasseia, logo a seguir
ao nome do cofre.
Uma dica dá-lhe o resto: não só o nome mas tudo o que a linha mostra por
baixo dele, como `…/nome/pasta/nota.md`, por isso passar o rato responde tanto
a "o que é isto" como a "o que está por baixo disto". O ícone do cofre nomeia
o seu cofre da mesma forma, quando o nome está desligado ou foi comprimido
até desaparecer.

## As cores de aviso

| | Quando | O que significa |
| --- | --- | --- |
| Anel **vermelho** na barra do caminho | A linha aponta para fora do seu cofre | O Obsidian não consegue abrir o que está lá como uma nota, e nada ali fora é escrito até abrir o cadeado. |
| Anel **laranja** na barra do caminho | O ficheiro é um tipo de texto para o qual o Obsidian não tem visualização | Uma precaução. O Obsidian entregá-lo-ia à aplicação predefinida do seu ambiente de trabalho; o plugin mostra-o em vez disso. |
| Texto **vermelho** no campo aberto | Ainda não existe nada nesse caminho | <kbd>Enter</kbd> vai criá-lo em vez de o abrir. Não tanto um aviso, mas uma afirmação do que a próxima tecla faz — ver [Escrever um caminho](#escrever-um-caminho). |
| Cadeado **vermelho** no lugar do interruptor de renomear | A linha aponta para fora do seu cofre e escrever ali continua bloqueado | O mesmo vermelho do anel, pela mesma razão: marca uma recusa. Premi-lo permite escrever aqui e devolve o lugar ao interruptor — ver [Escrever fora do cofre](#escrever-fora-do-cofre). |

Os **dois anéis são independentes, e ambos podem estar ativos ao mesmo tempo**
— um `.json` externo está fora do seu cofre *e* é um tipo para o qual o
Obsidian não tem editor. No visualizador aparecem como linhas separadas, cada
uma a afirmar apenas o seu próprio facto. Na barra do caminho, o vermelho
prevalece onde ambos se aplicam, já que dois anéis seriam apenas ruído. O
*texto* vermelho é uma terceira coisa inteiramente diferente: é sobre o que
está a ser escrito, não sobre para onde a linha aponta, por isso pode aparecer
dentro de qualquer um dos anéis ou de nenhum.

O nível laranja é deliberadamente estreito. Tipos registados (Markdown,
canvas, imagens, PDF, áudio, vídeo) são tratados devidamente e não recebem
nada. Ficheiros binários também não recebem nada — não vai editar um `.zip`
até o transformar numa confusão por acidente. O que resta é exatamente o
perigo: um `.json`, `.css` ou `.log` que o **Mostrar todos os tipos de
ficheiro** tornou visível. A lista é propositadamente mais ampla: aí, tudo o
que não é uma nota é laranja — ver [como as entradas da lista são coloridas](#como-as-entradas-da-lista-são-coloridas).

## Modo mover/renomear

O botão de lápis no extremo direito do cabeçalho — ao lado do botão de modo
de visualização, do mesmo tamanho que os botões nativos — alterna o modo
mover/renomear. Fora do seu cofre, um cadeado vermelho ocupa o seu lugar até
o premir; ver [Escrever fora do cofre](#escrever-fora-do-cofre). A linha
do cabeçalho fica então emoldurada na cor de destaque, exatamente como
renomear no gestor de ficheiros. Os mesmos cliques e teclas confirmam agora
um mover ou renomear através do `fileManager.renameFile` do Obsidian, por
isso todas as ligações à nota acompanham.

Enquanto renomeia:

- O nome de ficheiro atual está fixado na lista de cada pasta, por isso mover
  uma nota sem a renomear é um único clique.
- Nomes já usados na pasta de destino aparecem a **vermelho** — uma pasta que
  já tem o nome, e um ficheiro com esse nome — por isso o conflito mostra-se
  antes de escolher. Ainda podem ser selecionados: ver abaixo.
- A introdução é validada em tempo real contra as próprias regras de renomear
  do Obsidian — os mesmos conjuntos de carateres, as mesmas mensagens, a
  mesma dica vermelha que obtém ao renomear na árvore de ficheiros — por isso
  um nome ilegal é assinalado enquanto escreve e não pode ser confirmado.
- Clicar fora da barra do cabeçalho, ou o cabeçalho perder o foco, termina o
  modo de renomear.

### Um nome que já está em uso

Mover ou renomear para um nome que já existe **pergunta em vez de recusar.**
Abre-se uma janela com dois caminhos que pode editar: para onde vai o seu
ficheiro, e para onde vai o ficheiro que está no caminho — a vermelho
enquanto isso continuar em uso. Cada caminho é também desenhado da forma
como a barra do caminho desenha um, com as partes que diferem coloridas e
encurtadas por último, por isso um caminho comprido continua a mostrar o que
muda.

Ambos os campos têm uma lista. O segundo contém as saídas habituais:

- **Trocar de lugares** — vai para a antiga pasta do seu ficheiro, com o seu
  próprio nome.
- **Trocar nomes** — fica onde está e fica com o antigo nome do seu ficheiro.
- **Trocar ambos** — fica com o antigo caminho do seu ficheiro.
- `-1`, `-bak` e `-old` a seguir ao seu próprio nome.
- Os dois nomes que os ficheiros tinham.

A primeira lista oferece para onde o seu ficheiro ia, **Ficar onde está**, o
seu próprio nome na pasta de destino, e `-1`, `-bak` e `-old` a seguir a ele.
Uma saída cujo caminho já esteja em uso fica acinzentada e não pode ser
escolhida. Escolher uma **apenas preenche o campo** — ainda pode editá-lo —
e **Aplicar** move ambos, ligações e tudo; **Cancelar** não move nada.
Escolher um nome já em uso na lista pergunta o mesmo, tal como largar uma
nota numa pasta que já tem o seu nome.

## Uma tecla para os dois renomeares

O comando de renomear (<kbd>F2</kbd> por defeito, ou o que lhe tiver atribuído) **alterna** entre o renomear do inline title do Obsidian e a barra de caminho do cabeçalho deste plugin. Se tiver desligado o inline title do Obsidian, a barra de caminho do cabeçalho passa a ser o único alvo, por isso a tecla nunca fica sem fazer nada.

Na barra de caminho abre no **nome sem a sua extensão** — a edição que um renomear quase sempre é, e a mesma coisa que clicar no nome seleciona. Prima outra vez e faz o que o <kbd>Tab</kbd> faria ali: no nome, esse é o degrau seguinte —
o nome com a sua extensão, o caminho a partir da pasta do seu cofre, o caminho a partir da raiz do sistema; com algo escrito, completa-o, tal como o <kbd>Tab</kbd> faz.

**O ciclo fecha-se no cabeçalho.** Cinco toques dão a volta completa — o inline
title, o nome, o nome com a sua extensão, o caminho a partir do seu cofre, o caminho
a partir da raiz do sistema — e o sexto é o inline title outra vez. Esse toque é o único que difere do
<kbd>Tab</kbd>, que volta antes ao início do caminho — e o sétimo
vai onde a volta do <kbd>Tab</kbd> vai: a raiz do cofre, com o caminho inteiro no
campo e a sua primeira pasta marcada. Portanto, todos os passos a que o <kbd>Tab</kbd> chega, a tecla
também chega.

O comando **Focar a barra de caminho** faz o mesmo dentro do campo — o que
o <kbd>Tab</kbd> faria — e onde o <kbd>Tab</kbd> daria a volta, devolve o cursor
à nota. O toque seguinte é a volta: a raiz do cofre, primeira pasta marcada.

**Num campo que já está aberto**, a tecla transforma-o num renomear onde
está — mantendo o texto, o cursor e a seleção — e **Focar a barra de
caminho** retira-lhe o renomear da mesma forma. **Qualquer outra coisa** premida ou
clicada entre os toques recomeça um dos dois ciclos, por isso um toque depois de ter
estado a editar nunca cai num degrau deixado de antes.

Fora do cofre a tecla também funciona — não há inline title lá fora, por isso o
primeiro toque vai direto à barra de caminho.

Isto funciona envolvendo o comando `workspace:edit-file-title` em vez de agarrar a tecla, por isso reatribuir o atalho e correr o comando a partir da paleta continuam a funcionar sem alterações.

## Como as entradas da lista são coloridas

| Cor | Significa |
| --- | --- |
| **Roxo** | Uma nota (`.md`, `.markdown`) — o que o Obsidian abrirá como uma nota, escolhida numa pasta de conteúdo misto |
| **Laranja** | Não é uma nota — tudo o que o Obsidian não abrirá como tal, desde um PDF a um `.txt`, e as entradas `:page` junto com eles. Uma pasta de conteúdo misto é lida pelas notas que contém, e uma cor para tudo o resto diz isso mais depressa do que um aviso em algumas delas; ver [as cores de aviso](#as-cores-de-aviso) |
| **Esbatido** | Fora do seu cofre, por isso o tratamento próprio do cofre não se aplica |
| **Azul**, negrito | Onde já está: a própria nota desta barra, e a pasta onde a barra de caminho se encontra. No modo mover/renomear, a entrada *manter este nome* ocupa o lugar da nota — a mesma nota de qualquer forma |
| **Vermelho** | Apenas no modo mover/renomear: o nome já está ocupado. Ainda pode ser selecionada — escolher uma pergunta o que fazer com o ficheiro que está no caminho; ver [Um nome que já está ocupado](#um-nome-que-já-está-em-uso) |

**As pastas estão a negrito**, por isso a nota de uma pasta não precisa de nenhuma cor
própria para se distinguir da pasta: é roxa como qualquer outra nota. Uma **linha ao lado
de uma linha da lista** marca os nomes que começam pelo que escreveu — azul onde
concordam mais além, verde no ramo que a sugestão segue; ver
[Escrever um caminho](#escrever-um-caminho).

O campo usa as mesmas cores para o que nomeia — ver [Escrever um caminho](#escrever-um-caminho).

## Regras de visibilidade

- Os ficheiros com extensões não suportadas aparecem nas listas apenas se a definição **Detetar todos os tipos de ficheiro** do Obsidian estiver ativada — **dentro do cofre**. Fora dele a definição não se aplica: ela rege o que o cofre indexa, e nada ali fora está no cofre, por isso um `.txt` ao lado das suas notas é listado de qualquer forma.
- A lista mostra até 1000 entradas, dez vezes o limite do próprio Obsidian. Quando uma pasta tem mais, a última linha diz quantas ficaram de fora; continue a escrever para reduzir a lista.
- Ficheiros e pastas ocultos aparecem apenas se a definição **Mostrar ficheiros ocultos** deste plugin estiver ativada.
- **A proteção contra substituição funciona de forma idêntica independentemente da visibilidade** — um ficheiro oculto continua a impedi-lo de o substituir.

## Resumo

Um caminho **entre aspas** é desembrulhado por si. O *Copy as path* do Windows dá-lhe
`"C:\Users\you\note.md"`, aspas incluídas, e uma shell faz o mesmo para qualquer
caminho com um espaço nele; colar um ou escrevê-lo funciona de qualquer forma. Apenas as
aspas duplas, e apenas como um par a rodear a coisa toda — não podem
aparecer num nome real, ao contrário de um apóstrofo.

| Quer… | Faça isto |
| --- | --- |
| Abrir uma pasta (a sua nota, ou revelá-la) | Clique no separador **depois** dessa pasta |
| Dar a uma pasta uma nota de pasta que ela não tem | **Clique duas vezes** nesse mesmo separador (precisa de um plugin de notas de pasta) |
| Trocar uma pasta por uma vizinha | Clique no nome dessa pasta, depois escreva ou escolha |
| Renomear ou redirecionar a nota | Clique no nome da nota — extensão incluída |
| Navegar no conteúdo de uma pasta | Clique no nome dessa pasta; a lista mostra o conteúdo da sua pasta-mãe, por isso clique na pasta **abaixo** da que quer |
| Reescrever uma pasta e tudo o que está abaixo dela | **Clique duas vezes** no nome dessa pasta, depois escreva |
| Editar o caminho a partir de uma pasta para baixo | Clique no nome dessa pasta, depois <kbd>→</kbd> para desmarcar a seleção |
| Saltar para um ficheiro escrevendo o seu caminho | Clique no nome do ficheiro ou no espaço vazio, escreva, <kbd>Enter</kbd> |
| Abrir um ficheiro numa nova aba em vez disso | <kbd>Ctrl</kbd> enquanto o escolhe, ou <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| Copiar a nota para outro lugar em vez de a mover | Lápis, depois <kbd>Ctrl</kbd> enquanto escolhe ou confirma o destino |
| Criar uma nota num caminho que não existe | Escreva o caminho — o campo fica **vermelho** assim que nada na lista corresponde a ele — depois <kbd>Enter</kbd>. Dentro do cofre é criada de imediato; fora dele pergunta primeiro |
| Saber se um caminho que escreveu já existe | Olhe para a cor: assume a cor da linha que nomeia, e vermelho significa que <kbd>Enter</kbd> a criaria |
| Descer um nível enquanto escreve | Escreva `/` |
| Subir um nível enquanto escreve | <kbd>Backspace</kbd> no campo vazio |
| Trazer as pastas antes do campo para dentro dele | <kbd>←</kbd> no início do campo para uma; <kbd>Shift</kbd>+<kbd>Home</kbd>, ou <kbd>Home</kbd> com a lista fechada, para todas |
| Mover ou renomear a nota aberta | Clique no lápis, depois navegue ou escreva como acima |
| Mover para um nome que já está ocupado | Confirme na mesma: o diálogo permite trocar de lugar, de nomes ou ambos, ou dar outro nome ao ficheiro que está no caminho |
| Mover sem renomear | Lápis → clique na pasta de destino → escolha o nome de ficheiro atual fixado |
| Renomear no próprio lugar | <kbd>F2</kbd> duas vezes (o primeiro toque vai para o inline title, o segundo para o cabeçalho) |
| Saltar para outro cofre, a pasta pessoal ou uma unidade | Clique no nome do cofre |
| Abrir um ficheiro de fora do cofre | Nome do cofre → escolha uma localização → navegue → escolha o ficheiro (só de leitura até *Editar como texto*) |
| Completar o nome que está a escrever | <kbd>Tab</kbd>, ou <kbd>End</kbd> para o que é sugerido; <kbd>→</kbd> avança uma letra dele |
| Entrar nele, assim que só resta um nome | <kbd>Tab</kbd> outra vez |
| Recuar um passo, ou sair da pasta | <kbd>Shift</kbd>+<kbd>Tab</kbd> |
| Agarrar o caminho todo, ou o caminho do sistema | <kbd>Tab</kbd> além do fim, ou clique quatro vezes |
| Copiar um nome, um caminho, ou um caminho do sistema | Clique com o botão direito duas vezes; o espaço vazio três vezes para o caminho do sistema |
| Aceder ao que o gestor de cofres oferece para este cofre | Clique com o botão direito no ícone no início da linha |
| Copiar o ID do cofre | Clique com o botão direito no ícone no início da linha |
| Abrir outro cofre que estava a explorar | Clique com o botão direito no seu nome no início da linha |
| Ver a extensão do ficheiro na linha | Ative **Mostrar extensões de ficheiro** nas definições |
| Abrir um segmento de pasta numa nova aba | <kbd>Ctrl</kbd> ou clique com o botão do meio nele, ou arraste-o para a barra de abas |
| Aceder à barra de caminho pelo teclado | Atribua *Focar a barra de caminho* em Atalhos |
| Abrir um endereço web ou uma ligação `obsidian://` | Escreva-o na barra e prima <kbd>Enter</kbd> |
| Cancelar qualquer coisa | <kbd>Esc</kbd>, ou clique fora da barra do cabeçalho |
| Experimentar entradas antes de confirmar | Percorra a lista com as setas ou o rato; <kbd>↑</kbd> além do topo devolve o seu texto |
| Mover uma nota para uma pasta acima dela | Arraste-a para essa pasta na linha |
| Guardar um pedaço de texto como uma nova nota | Arraste o texto para uma pasta, escreva um nome, <kbd>Enter</kbd> |
| Adicionar um pedaço de texto à nota que está a ler | Arraste-o para o nome da nota, confirme |
| Ver um nome de pasta abreviado por completo | Passe o rato sobre ele, ou alargue o painel |
| Descobrir onde o próprio cofre está guardado | Passe o rato sobre o ícone no início da linha |
| Tirar uma nota do cofre | Lápis → navegue para fora → confirme o diálogo (as ligações vão quebrar-se) |
| Permitir escrever fora do seu cofre | Clique no **cadeado vermelho** no cabeçalho; o interruptor de renomear ocupa o seu lugar |
| Bloquear outra vez | Clique no interruptor até o cadeado voltar — um toque para dentro, um toque para fora |
| Eliminar um ficheiro fora do cofre | Abra o cadeado, depois clique com o botão direito no ficheiro: *Eliminar* move-o para o lixo do seu sistema |

## Definições

| Definição | Opções | Predefinição | O que faz |
| --- | --- | --- | --- |
| **Idioma** | Predefinição do Obsidian, ou qualquer um de 46 | Predefinição do Obsidian | Em que idioma está o próprio texto deste plugin. *Predefinição do Obsidian* segue o idioma definido nas definições de Aparência, que é o que quase toda a gente quer. A própria linha — o seu nome, a sua descrição e *Predefinição do Obsidian* — mantém-se em inglês seja qual for a escolha, porque é o caminho de volta de um idioma que não consegue ler. O grego e o sânscrito estão traduzidos aqui e ausentes da própria lista do Obsidian, por isso esta definição é a única forma de lá chegar. |
| **Alinhamento** | Esquerda / Centro / Direita | Esquerda | Onde o caminho se situa na linha do cabeçalho. *Centro* corresponde ao aspeto clássico do Obsidian. |
| **Separador** | Qualquer caractere | `/` | O separador desenhado entre segmentos. Seis predefinições de um clique (`/ > ▸ › \ •`) ficam à frente do campo de texto. |
| **Mostrar o nome do cofre** | Ligado / Desligado | Ligado | Se o próprio cofre é o primeiro segmento do caminho. Desligado, esse segmento torna-se um ícone 🏠 em vez de desaparecer, por isso o caminho continua a começar em algo clicável. |
| **O nome da pasta abre a lista** | Ligado / Desligado | Ligado | Troca o que o nome de uma pasta e o separador depois dele fazem — ver [a tabela acima](#o-caminho). Com [Folder notes](obsidian://show-plugin?id=folder-notes) o separador abre notas de pasta. Nunca se aplica no modo mover/renomear. |
| **Mostrar ficheiros ocultos** | Ligado / Desligado | Desligado | Se os ficheiros e pastas ocultos são listados nas listas. A proteção contra substituição aplica-se de qualquer forma. |
| **Mostrar todos os tipos de ficheiro** | — | — | Não é uma definição deste plugin, mas do Obsidian, referida aqui porque responde à mesma pergunta: o seu cofre só indexa os tipos de ficheiro que lhe são indicados, e só o que indexa pode ser listado. Procure-a nas definições do Obsidian e ative-a para ver todos os ficheiros; o botão ao lado da linha abre essa página com a definição percorrida até à vista e destacada, tal como clicar nela na própria pesquisa das definições faria. Fora do cofre não se aplica, uma vez que nada ali fora está indexado de qualquer forma. |
| **Mostrar extensões de ficheiro** | Ligado / Desligado | Desligado | Se o nome do ficheiro na linha traz a sua extensão. Desligado, é omitida — tal como o Obsidian a omite do título de uma nota. Ligado, a linha nomeia o ficheiro tal como o sistema de ficheiros faz. De qualquer forma, a extensão é a segunda coisa a ser sacrificada quando a linha fica sem espaço, logo depois do nome do cofre. |
| **Acesso a ficheiros externos** | Ligado / Desligado | **Desligado** | Se o nome do cofre abre a lista de localizações. Desligado, nada no plugin alguma vez olha para além deste cofre. |
| **Atalhos** | botão | — | Abre os *Atalhos* do Obsidian filtrados para este plugin, onde *Focar a barra de caminho* pode receber uma tecla. |

## Substituir os ícones

O Lure desenha três ícones: o ícone da raiz do cofre (quando **Mostrar o nome do cofre** está desligado), o interruptor de mover/renomear, e o cadeado que ocupa o seu lugar enquanto a escrita fora do cofre está bloqueada. Todos podem ser substituídos a partir de um tema ou de um snippet de CSS — defina o glifo de substituição e esconda o incluído numa única regra:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* Só é mostrado fechado: abri-lo entrega o lugar ao interruptor de renomear. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}
```

`--lure-icon-glyph` aceita qualquer coisa válida em `content` de CSS, por isso `url(...)` serve para uma imagem tal como para um glifo de texto ou um emoji. Deixe `--lure-icon-svg` em paz para manter o ícone do Lucide e desenhar o seu glifo ao lado.
