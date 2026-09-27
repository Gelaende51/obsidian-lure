<!-- Tradução de docs/usage.md — estado: commit 94b1372.
     Tradução automática (Claude Sonnet 5), não revisada por falantes nativos.
     Os rótulos do plugin vêm de src/lang/translations.ts e os do Obsidian
     dos textos que o próprio aplicativo traz, então batem com o que você vê
     na tela. -->

[English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · [Čeština](usage.cs.md) · [Dansk](usage.da.md) · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · [Suomi](usage.fi.md) · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · [Bahasa Indonesia](usage.id.md) · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · [Norsk](usage.no.md) · [Polski](usage.pl.md) · [Português](usage.pt.md) · **Português (Brasil)** · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

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

Quando a nota da pasta é a que você já está lendo, o clique revela a pasta em vez disso — não há nada para abrir que já não esteja na tela, o que é o que o segundo clique sempre significou.

Com o [Folder notes](obsidian://show-plugin?id=folder-notes) instalado, o mesmo clique abre a nota daquela pasta em vez disso, **em qualquer profundidade**: a nota é resolvida aqui a partir da própria convenção daquele plugin, em vez de deixar a resposta a cargo dele. Aquele plugin reconhece apenas as pastas que marcou, o que num caminho com mais de uma pasta de profundidade não é nenhuma delas, então o clique que abria a nota de uma pasta de nível superior antes não fazia mais nada além disso. Os outros dois plugins de nota de pasta não publicam nenhuma convenção para ler e nunca reivindicam a linha, então com eles o separador revela a pasta como sempre fez. É o único plugin de nota de pasta encontrado que reivindica o caminho do cabeçalho; o [Folder Note](obsidian://show-plugin?id=folder-note-plugin) e o [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) gerenciam notas de pasta, mas não escutam um clique no caminho, então com eles o separador revela a pasta como de costume. Veja [compatibilidade](../compatibility.md#verified-against).

Um separador só fica **sublinhado quando a pasta antes dele de fato tem uma nota de pasta**, então o sublinhado é uma promessa de que há algo ali para abrir — em qualquer profundidade com o [Folder notes](obsidian://show-plugin?id=folder-notes) rodando, já que a nota é resolvida aqui em vez de deixar a marcação a cargo daquele plugin. Onde não é esse o plugin rodando, nada é sublinhado e nada abre: o separador revela, como faz sem plugin nenhum de nota de pasta. Todo separador continua clicável de qualquer forma — um sem sublinhado revela e expande sua pasta na barra lateral, o que o cursor do ponteiro ainda sinaliza. O sublinhado sai do nome da pasta ao mesmo tempo: com a troca ligada, o nome abre a lista, então marcá-lo como o link para a nota seria uma mentira.

**O modo renomear/mover se sobrepõe aos dois**, diga o que disser a configuração: enquanto há uma movimentação pendente, nada na linha abre uma pasta, porque abri-la abandonaria a movimentação. Nomes de pasta são selecionados para edição e separadores descem — os dois são jeitos de escolher o destino — e o sublinhado some para mostrar que abrir está suspenso.

A **raiz do cofre** é o único segmento que não é um segmento de caminho. Não tem pasta acima de onde listar as vizinhas, então abre a [lista de locais](#navegar-fora-do-cofre) — seus outros cofres, a pasta pessoal, a raiz do sistema de arquivos e as unidades montadas.

## O próprio separador do cofre

O separador logo depois do nome do cofre representa o próprio cofre, e não
uma pasta, então ele faz o que nenhum outro separador consegue:

| | Primeiro clique | Próximo clique |
| --- | --- | --- |
| **Com um plugin de página inicial** (uma página que te recebe quando o Obsidian abre) | Abre essa página neste painel | Recolhe a árvore de arquivos |
| **Sem um** | Recolhe a árvore de arquivos | Restaura exatamente o que estava aberto |

Cliques comuns, não um clique duplo: uma vez que a página está aberta, o
separador não tem mais nada para abrir, então o próximo clique é o recolher —
por mais tempo que você demore para fazê-lo.

Ele fica **sublinhado** quando há uma página inicial para abrir, o que é a
mesma promessa que o separador de uma pasta faz: há algo ali. Recolher é uma
alternância — o próximo clique restaura as pastas que estavam abertas, e
apenas essas, então uma árvore que você organizou não se perde por uma
espiada em outra coisa.

## Um painel sem arquivo

Uma aba vazia, o grafo e qualquer outra coisa que não nomeia um arquivo
recebem sua própria linha: o cofre, depois um segmento dizendo o que o
painel contém.

```
meu-cofre / :blank      uma aba nova
meu-cofre / :graph      o grafo, local ou global
meu-cofre / :<type>     qualquer outra coisa sem arquivo
```

A **própria listagem da raiz do cofre** também oferece essas páginas, junto
das pastas e notas que de fato estão nela: escolha `:graph` ou `:search` ali
e o painel abre aquela visualização, exatamente como escolher uma nota abre
a nota. Quais páginas existem é lido do Obsidian em vez de ser escrito aqui
— toda visualização que não existe para mostrar um arquivo, então um plugin
que registra uma (uma aba inicial, um calendário) aparece sem que este
plugin saiba nada sobre ele. Visualizações que precisam de um arquivo —
Markdown, PDF, imagens, quadros, bases — não são oferecidas: não há nada
para elas mostrarem.

Os dois-pontos são o ponto — nenhum arquivo ou pasta pode se chamar
`:graph`, então a linha não pode ser confundida com um caminho que poderia
ser aberto. O rótulo vem do tipo de visualização em vez do texto do próprio
Obsidian, então se lê igual seja qual for o idioma da interface, e um
`-view` no final é removido: um plugin de aba inicial registra sua
visualização como `home-launcher-view`, e a linha diz `:home-launcher`.

Clicar no espaço vazio, ou no próprio rótulo, **abre o campo na raiz do
cofre**: digite um caminho e <kbd>Enter</kbd> o abre neste mesmo painel, com
o mesmo completar, a mesma lista e o mesmo campo vermelho oferecendo criar o
que ainda não existe. Uma aba vazia é um bom lugar para digitar para onde
você quer ir, que é para isso que ela serve.

O rótulo é só um rótulo: sem lista, sem arrastar, sem renomear. Painéis nas
barras laterais ficam completamente intocados — um painel de backlinks
mantém o título que o Obsidian dá a ele.

Quadros, PDFs, imagens e bases não precisam de nada disso. São arquivos,
então recebem uma barra de caminho comum.

## Clique num segmento: troque por um vizinho

Clicar no nome de uma pasta seleciona **o nome dessa pasta** num campo de texto e abre uma lista com a pasta **um nível acima** — a pasta que a contém. Digitar ou escolher uma entrada troca esta pasta por uma vizinha e deixa intacto tudo o que está abaixo, então `Projetos/2026/Início.md` → clique em `2026` → escolha `2025` te dá `Projetos/2025/Início.md`.

Clicar no **nome da nota** funciona do mesmo jeito em relação à própria pasta dela, e seleciona o nome **sem a extensão** — renomear é a edição comum, e digitar por cima de uma seleção que incluía `.md` costumava mudar o tipo do arquivo sem querer. A extensão continua visível a uma tecla de distância: <kbd>→</kbd> chega até ela, e o clique duplo que amplia para a linha inteira pega tudo.

O clique na pasta já selecionou um segmento, então **mais um clique** amplia a seleção para a linha inteira — aquela pasta *e* tudo o que está abaixo — e o que você digitar substitui então o resto do caminho de uma vez. Funciona igual em navegação e no modo renomear/mover.

Isso só vale como continuação do clique que abriu o campo. Depois que você usa o campo, ele se comporta como qualquer outro campo de texto: um clique posiciona o cursor, um clique duplo pega uma palavra, um clique triplo pega a linha.

De qualquer forma, o resto do caminho continua visível ao redor do campo, como blocos antes dele e como texto não selecionado depois dele, então o caminho completo nunca desaparece do cabeçalho. Digite para substituir a seleção, ou pressione <kbd>→</kbd> para mantê-la e editar a partir dali. A lista mostra a pasta inteira independentemente do que está preenchido; ela só começa a filtrar quando você de fato digita.

## Descer pelo separador

Clicar num separador (com **O nome da pasta abre a lista** desligado) desce para a pasta anterior: a lista mostra o conteúdo *daquela* pasta, e o resto do caminho abre selecionado no campo. Escolher uma pasta a acrescenta ao rastro do caminho e abre logo a próxima lista, então você pode descer uma árvore no clique sem sair da linha do cabeçalho.

## A lista abre onde você está

A lista abre na entrada em que você está — a nota a que esta barra pertence,
ou, quando um clique numa pasta listou a pasta que a contém, aquela pasta —
em vez de na primeira linha. Numa pasta com duzentas notas, a primeira linha
não está nem perto de você.

**A roda do mouse sobre um nome abre a lista dele e a percorre.** O primeiro
giro abre a mesma lista que clicar no nome abre, e cada giro depois move o
destaque uma linha, colocando o que você está apontando no campo exatamente
como as setas fazem — então um vizinho pode ser encontrado e escolhido sem o
teclado. Girar além de qualquer uma das pontas devolve seu texto. Uma linha
com mais caminho do que painel responde à roda rolando para o lado em vez
disso, o que é a leitura que prevalece enquanto se aplica.

A lista é **tão alta quanto a janela permite**. O Obsidian limita suas
listas de sugestões a 300 pixels não importa o que houver abaixo delas; esta
vai até o fim da janela, parando poucos pixels antes da borda, e rola só
quando a pasta tem mais do que isso. Ela **não é mais larga que a barra de
caminho**: um nome que não cabe é encurtado do mesmo jeito que a linha
encurta um, e é mostrado inteiro quando você aponta para ele.

Percorrer a lista **coloca o que você está apontando no campo**, seja pela
seta ou passando o mouse por cima — no lugar do segmento que você estava
editando, com o resto do caminho intacto — então a linha em que você está
também é o caminho que você teria.

O resto do caminho é mostrado **só até onde ele existe sob o que você está
apontando**. Estando numa pasta com `2026/nota.md` depois do segmento que
você está editando, apontar para uma pasta que tem uma `2026` com uma
`nota.md` dentro mostra tudo; uma que tem a `2026` e nenhuma nota mostra só
`2026`; uma que não tem nenhuma das duas não mostra nada depois do nome, e
nem um arquivo mostra, já que nada vive sob um. **O que você digitou**
mantém seu caminho inteiro enquanto você está digitando, por menos que ainda
haja ali — um nome digitado pela metade não é uma decisão. Definir um nome
é uma decisão, e o que não pode ser alcançado a partir dele é cortado
naquele ponto; as pastas que você está criando são as que você digita
*depois* dele, que é onde o <kbd>Enter</kbd> as cria.
O texto que você havia digitado é mantido: sair **de qualquer uma das
pontas da lista** — subir além da primeira entrada, ou descer além da
última — larga o texto digitado e devolve o seu, sem nada destacado. O campo
é uma parada no ciclo como qualquer entrada, então uma volta passa por ele
em vez de pular da última linha para a primeira, e continuar a partir dali
segue até a outra ponta.

Tirar o **ponteiro da lista** também devolve seu texto — e passa o destaque
de volta para o que o tinha antes de o mouse chegar: a entrada para a qual
você tinha ido com as setas, aparecendo de novo no campo, ou aquela em que a
lista abriu porque é onde você está. Passar o mouse por cima é um jeito de
olhar, não de escolher, então um passar do ponteiro pela lista não custa
nada.

A lista em si não muda enquanto você a percorre — ela continua filtrando
pelo que você digitou, não pelo que foi pré-visualizado no campo — então a
entrada sob você nunca sai do lugar antes do próximo clique. Digitar
substitui a pré-visualização e filtra normalmente.

**O que ela filtra é o segmento que você está editando**, não tudo no
campo. Clicar numa pasta deixa o resto do caminho ali atrás do nome que você
está mudando, então filtrar pelo caminho inteiro procuraria por um filho
chamado `2026/Início.md` e não encontraria nada — a lista fecharia na
primeira tecla que você digitasse, seja qual for. **A extensão também fica
de fora**, enquanto o cursor estiver antes do ponto: clicar no nome de uma
nota seleciona o nome base e deixa o `.md` atrás dele, então digitar uma
letra faz o campo ler `a.md`, e não é isso que você está procurando. Coloque
o cursor depois do ponto e a extensão passa a contar como qualquer outra
coisa. Um nome que de fato não corresponde a nada ainda assim fecha a lista,
porque uma lista vazia é a resposta honesta.

Uma pré-visualização **troca apenas aquele segmento e deixa o resto do
caminho em paz**: apontar para uma pasta pergunta e se este passo fosse
aquele, não joga o caminho fora. Sair da lista restaura o texto *e* a
seleção que você tinha, então a próxima tecla substitui o que ela ia
substituir antes de você olhar.

## As entradas da lista são linhas de gerenciador de arquivos de verdade

Cada arquivo e pasta na lista se comporta como sua linha no Explorador de arquivos:

- **Clique com o botão direito** para o mesmo menu de contexto que o Explorador de arquivos dá, entrada por entrada — incluindo as que outros plugins adicionam. Uma pasta oferece *Nova nota*, *Nova pasta*, *Novo quadro*, *Nova base*, *Fazer uma cópia*, *Mover pasta para…*, *Pesquisar na pasta*, *Copiar caminho*, *Mostrar no explorador do sistema*, *Renomear…* e *Excluir*; um arquivo oferece seu próprio equivalente, incluindo *Abrir no aplicativo padrão*.
- **Arraste** uma entrada para qualquer lugar em que o Obsidian aceite um arquivo: para dentro de um editor para inserir um link, sobre uma pasta no Explorador de arquivos para movê-la, para a fileira de abas para abri-la.

O texto dos menus vem das traduções do próprio Obsidian, então combina com o resto do aplicativo em todos os idiomas.

## Digitar um caminho

- Clicar no **espaço vazio** antes ou depois do caminho abre um campo de texto sobre o caminho inteiro *e mostra a nota no Navegador de Arquivos*, então a árvore acompanha o painel sem um segundo gesto. Ele **conta seus cliques**: um seleciona o caminho sem a extensão, dois selecionam com ela, três selecionam o caminho que a máquina conhece. Clicar no **nome do arquivo** conta do mesmo jeito, mas começa um degrau abaixo, no próprio nome: um o seleciona sem a extensão, dois com ela, e três ampliam para o caminho inteiro *a partir da pasta do seu cofre* — a forma que um link ou uma busca quer, em vez da forma da máquina. Um quarto clique alcança essa.
- **A contagem pertence à sequência que abriu o campo.** Depois que ela expira — você pausou, digitou, ou clicou uma vez em algum lugar do texto — o campo é um campo de texto como qualquer outro, e um clique duplo nele seleciona a palavra sob o ponteiro como faria em qualquer lugar. Digite por cima do que está selecionado, ou edite no lugar. (Clicar no próprio nome do arquivo seleciona só o nome do arquivo; veja acima.) Clicar com o botão direito no mesmo espaço **copia** essas mesmas três, em dois, três e quatro cliques — um botão as mostra, o outro as pega. Um **único** clique com o botão direito abre o caminho com tudo selecionado e oferece o que pode ser feito com ele: recortar, copiar, colar, selecionar tudo, nas próprias palavras do Obsidian.
- **Clique com o botão do meio no espaço vazio** para colar por cima do caminho: o campo abre no caminho inteiro *a partir da raiz do cofre*, então a área de transferência substitui tudo, e o que chega fica selecionado. <kbd>Enter</kbd> então vai até lá.
- **<kbd>Ctrl</kbd>+clique no espaço vazio** para abrir essa nota de novo numa aba própria, destacada no Navegador de Arquivos para que a segunda aba não seja confundida com a primeira. No **nome do cofre**, <kbd>Ctrl</kbd>+clique ou clique com o botão do meio abre uma aba sem nada, parada na raiz do cofre com a lista já visível — um lugar para digitar um caminho do zero.
- Digitar enquanto o caminho está sendo mostrado converte o segmento final num pequeno campo com autocompletar ao vivo restrito à pasta atual.
- **Um caminho a partir da raiz do sistema de arquivos pode ser digitado.** `/` na frente de um campo vazio abre um em vez de completar um degrau, toda barra depois dela pertence a ele, e `~` é sua pasta pessoal. Enquanto o campo guarda tal caminho, a lista mostra a máquina em vez do cofre, e o segmento inicial da linha dá espaço — o que está no campo começa na raiz e diz isso. Com *Acesso a arquivos externos* desligado, a lista fica vazia, porque <kbd>Enter</kbd> recusaria o caminho de qualquer jeito.
- **Uma página pode ser digitada, não só escolhida.** `:graph`, `:search`, ou o que seus plugins registrarem — os rótulos que a [listagem da raiz do cofre](#um-painel-sem-arquivo) oferece. Digitar dois-pontos em qualquer lugar os convoca, já que nenhum nome pode conter um, e <kbd>Enter</kbd> abre essa visão neste painel. `:graph` digitado **dentro de uma pasta** abre o grafo dessa pasta — o grafo filtrado por `path:"essa/pasta"` na própria caixa de busca dele, como se tivesse sido digitado ali; na raiz do cofre é o grafo inteiro. <kbd>Tab</kbd> termina o nome como termina o de uma pasta — e leva junto qualquer outra coisa que o campo guardasse, já que uma página não está em nenhuma pasta e nada mora sob ela. Clicar no rótulo de tal painel abre o campo já com ele.
- **O que <kbd>Tab</kbd> escreveria é oferecido enquanto você digita.** Onde todo filho que começa com o que você digitou continua concordando por um tempo, essa concordância aparece depois do cursor, selecionada; onde eles param de concordar, o passo em direção ao primeiro deles acontece — ou em direção à linha até a qual você navegou com as setas, já que é para ela que <kbd>Tab</kbd> se dirigiria. Digitar por cima de um nome deixa a extensão dele de pé e oferece na frente dela, e uma pasta na qual você acabou de entrar oferece o primeiro passo dela, então não há estado em que nada é oferecido e ainda assim <kbd>Tab</kbd> escreve algo. Digite essas letras e elas são engolidas uma de cada vez; digite qualquer outra coisa e sumiram. <kbd>Tab</kbd> ou <kbd>End</kbd> pega tudo de uma vez, <kbd>→</kbd> pega uma letra dela, <kbd>Backspace</kbd> a devolve sem tocar numa letra que você digitou, e nada é oferecido de novo até você digitar — então sempre há uma saída de um nome que você não queria. Depois de um clique em <kbd>Tab</kbd>, o próximo passo é oferecido na hora, assim como depois de uma letra digitada. O que a lista mostra é filtrado pelo que **você** digitou, nunca pelo que foi oferecido.
- **As ofertas ignoram maiúsculas e minúsculas.** `sch` oferece `Schemes`, escrito como o nome é escrito; recusar a oferta devolve suas letras como você as digitou. Onde `Test` e `test` existem os dois, o que é escrito como você digitou é oferecido.
- No campo, a parte oferecida é simplesmente **selecionada**. A lista é onde ela é soletrada: cada linha mostra a parte dela que **combinou com o que você digitou em negrito**, onde quer que tenha combinado no nome — `kick` encontra `Weekly kickoff` e mostra isso. **Nomes que começam com o que você digitou vêm primeiro**, à frente dos que só o contêm, e são marcados com uma linha na sua borda: **azul** onde compartilham mais do que você digitou, então <kbd>Tab</kbd> tem algo a acrescentar para todos eles, e **verde** no ramo que a oferta segue onde eles se separam — `te` com `test1`, `test2`, `text1` e `text2` oferece `te`+`st`, então as duas linhas `test` ficam verdes e as duas linhas `text` mantêm a linha simples. Cada uma delas **sublinha o passo que <kbd>Tab</kbd> daria em direção a ela**, não só a que é oferecida, e o sublinhado acompanha a oferta conforme ela muda.
- **Digitar abre mão da linha destacada.** A lista abre na entrada em que você está parado, mas no momento em que você digita, ela é sobre outro lugar, e um destaque que ninguém colocou ali soa como uma escolha já feita.
- A oferta é sempre só texto na sua frente: as letras que você digitou continuam escritas como você as digitou enquanto você digita, e aceitar a oferta reescreve o nome como a pasta o escreve, porque um caminho tem que combinar com o disco. `sk` + <kbd>Tab</kbd> alcança `Skyline`, não `skyline`.
- **O campo veste a cor do que ele nomeia**, a mesma cor da linha dele na lista: roxo para uma nota, incluindo a própria nota de uma pasta, laranja para qualquer coisa que não seja uma nota, azul para a nota em que você está. A linha de onde ele tira a cor é a que se chama exatamente como você digitou, ou, na falta dela, a destacada, ou, na falta dela, a primeira à qual sua digitação ainda leva.
- **O campo fica vermelho quando nada responde ao que está nele** — nenhum arquivo, nenhuma pasta, e nenhuma linha da lista ainda levando a ele. A partir daí, <kbd>Enter</kbd> cria o que está no campo em vez de abri-lo, e o vermelho avisa disso antes de você confirmar. Ele nunca aparece para um endereço da web, que não é um lugar nesta máquina para se procurar. O campo **inteiro** é colorido em vez de só a parte que falta: um campo de texto não pode colorir metade do próprio conteúdo. No modo mover/renomear, o campo mantém seu próprio vermelho, mas para um nome que é ilegal — ali, um nome ao qual nada responde é o objetivo. Que um nome **já está em uso** é tratado quando você confirma, com uma caixa de diálogo perguntando o que deve acontecer com o arquivo no caminho — veja [Um nome que já está em uso](#um-nome-que-já-está-em-uso): todo nome digitado em direção a `Notes.md` passa por nomes que podem ser arquivos próprios, então sinalizar isso letra por letra avisaria sobre um nome que ninguém tinha perguntado ainda.
- `/` confirma o segmento que você está digitando e desce para dentro dele, mantendo o que está atrás dele — a mesma coisa que <kbd>Tab</kbd> faz quando entra.
- <kbd>Backspace</kbd> num campo vazio volta para a pasta pai, reabrindo o nome dela com o cursor no final. O mesmo faz <kbd>Backspace</kbd> na frente de uma extensão deixada sozinha — um campo com apenas `.md` não nomeia nada — e a extensão solitária vai junto.
- **Clicar numa pasta enquanto um campo está aberto o amplia para o caminho inteiro depois dessa pasta**, com o próprio nome da pasta selecionado — a mesma coisa que clicar nela teria feito a partir da linha, e tudo que o campo guardava é mantido. O que está no campo é a cauda da linha enquanto ela está aberta, então uma pasta clicada mais acima devolve o caminho que a sessão percorreu em vez daquele em que a nota começou.
- **Usar a seta para sair pela frente do campo traz a pasta antes dele para dentro**, como se o caminho inteiro fosse uma linha de texto só. Com o cursor bem no início, <kbd>←</kbd> traz essa pasta para o campo e pousa no final do nome dela, <kbd>Ctrl</kbd>+<kbd>←</kbd> pousa no início dela, e <kbd>Home</kbd> traz toda pasta até a raiz do cofre — ou até o lugar que você escolheu, fora do cofre — de uma vez. Segure <kbd>Shift</kbd> e a seleção se estende sobre o que entrou. No macOS o pulo de palavra é <kbd>Option</kbd>+<kbd>←</kbd> e <kbd>Cmd</kbd>+<kbd>←</kbd> é <kbd>Home</kbd>. Em qualquer lugar menos na frente, essas são teclas de texto comuns. **Enquanto a lista está aberta, <kbd>Home</kbd>, <kbd>End</kbd>, <kbd>PgUp</kbd> e <kbd>PgDn</kbd> pertencem a ela** — primeira linha, última linha, uma página acima, uma página abaixo, sendo uma página o que a lista mostra, com a linha destacada mantendo seu lugar na tela — e só alcançam o texto depois que ela fecha; <kbd>Shift</kbd>+<kbd>Home</kbd> também traz toda pasta com a lista aberta.
- **A lista segue o cursor.** Escolha uma parte diferente do caminho — arraste sobre ela, clique nela, ou navegue com as setas — e a lista mostra os filhos *daquela* pasta, não da em que o campo foi aberto. A pasta é contada a partir dos blocos mais o que do campo está na frente do cursor, então clicar em `Notes.md` num campo com `2026/Notes.md` mostra o que há em `2026`. Apontar para uma linha a escreve no segmento em que o cursor está, e tirar o ponteiro da lista devolve seu texto e sua seleção de volta, exatamente como estavam.
- **Arrastar uma seleção para fora do campo** e soltar em outro lugar não o fecha. Um clique que começa no campo pertence à edição não importa até onde viaje; só um clique que *começa* fora é que é um clique para longe.
- <kbd>Enter</kbd> confirma — e quando o campo não nomeia nada, como numa pasta vazia onde nunca houve nada para completar, ele diz *Nenhum arquivo selecionado* e continua aberto em vez de fechar como se algo tivesse sido escolhido. <kbd>Esc</kbd> ou um clique em outro lugar cancela de volta para o caminho real do arquivo. Um clique em <kbd>Esc</kbd> basta: ele fecha a lista, sai do campo e devolve o foco para a nota, em vez de exigir um clique por camada.

O campo não tem enfeite — sem caixa, sem borda — então se lê como o próprio texto do caminho, e cresce sozinho conforme você digita.

## Cada parte da linha, botão por botão

A linha inteira num relance. A coluna de clique direito é o que **uma** pressão te dá; esse botão também conta pressões, e [a tabela dele mesmo](#clique-direito-uma-pressão-duas-pressões-três) logo abaixo tem a segunda, terceira e quarta. Esta aqui assume que **O nome da pasta abre a lista** está ativado, que é o padrão — com ela desativada, o nome da pasta e o separador trocam de lugar na primeira coluna, como diz [a tabela lá em cima](#o-caminho).

| Onde você pressiona | Clique | Clique duplo | <kbd>Ctrl</kbd>+clique, ou clique do meio | Clique direito | Soltar algo em cima |
| --- | --- | --- | --- | --- | --- |
| O **nome do cofre** | Abre a lista de locais — outros cofres, home, a raiz do sistema de arquivos, drives montados. Desativado por padrão; com ele desativado, revela o cofre no File Explorer em vez disso | Marca o **caminho absoluto inteiro**. Essa lista abre com o caminho já no campo e só a parte do cofre marcada; uma segunda pressão amplia sobre o resto. Nada a ampliar com a lista desativada | Uma aba vazia, parada na raiz do cofre com a lista já mostrando — algum lugar para digitar um caminho do zero | O menu de contexto do próprio cofre: o que pode ser feito ao cofre que aquele segmento nomeia | Um **arquivo** se move para a raiz do cofre. **Texto** abre o campo na raiz, para nomear a nota que ele deve se tornar |
| Um **nome de pasta** | Seleciona aquela pasta para edição, o conteúdo da pasta-mãe listado abaixo | Redigita aquela pasta e tudo abaixo dela | Abre aquela pasta numa nova aba | O menu de contexto daquela pasta — o mesmo do File Explorer | Um **arquivo** se move para dentro daquela pasta. **Texto** abre o campo ali, para nomear a nota que ele deve se tornar |
| Um **separador** | Abre a pasta antes dele — sua nota de pasta onde um plugin de nota de pasta está rodando e uma existe, senão revela e expande a pasta no File Explorer | **Cria a nota daquela pasta** e vai até ela, onde um plugin de nota de pasta está rodando e a pasta ainda não tem uma. Onde ela já tem uma, isso é só a pressão única de novo | A nota da pasta numa nova aba onde uma existe; senão uma aba parada naquela pasta com a lista mostrando | O mesmo menu de contexto que o nome dá — o da nota de pasta, onde ela tem uma | No final da nota daquela pasta, onde ela tem uma, assim que você confirmar |
| O **nome da nota** | Abre o nome para edição — as pastas ficam como chips ao lado — com tudo menos a extensão marcado | Inclui a extensão na marca também | Abre a nota numa nova aba | O menu de contexto do arquivo — o mesmo que a linha do File Explorer dá | No final desta nota, assim que você confirmar |
| O **espaço vazio** | Abre o **caminho inteiro** para edição, marcado até a extensão. As pastas entram no campo junto, o que faz disso o gesto para redigitar um caminho em vez de um nome | Inclui a extensão na marca também | <kbd>Ctrl</kbd> abre esta nota de novo numa aba própria, piscada no File Explorer para que a cópia não seja confundida com a primeira. Clique do meio *não* é esse gesto: ele cola por cima do caminho | Marca o caminho inteiro e oferece o que pode ser feito com texto marcado | |

**A segunda pressão segue a primeira.** Criar a nota de uma pasta fica em cima de qualquer parte da linha que *abre* aquela pasta, que é o separador por padrão e o nome da pasta com a troca desativada — o mesmo alvo que o sublinhado marca, e o mesmo que uma pressão única já pede a nota de pasta. Ela só é oferecida enquanto um plugin de nota de pasta está rodando, porque uma nota de pasta é uma convenção e não um fato sobre o sistema de arquivos, e só onde a pasta ainda não tem uma. Onde ela mora e como se chama são lidos das próprias configurações do **Folder notes**, então um cofre que mantém suas notas de pasta ao lado da pasta, ou as chama de `_index`, recebe uma dessas; o arquivo em si é sempre Markdown, que é o que o comando de criação padrão daquele plugin cria e o que ele encontra seja qual for o tipo que o cofre estiver configurado. O modo mover/renomear fica totalmente fora disso — nada na linha abre uma pasta enquanto uma movimentação está pendente.

**Cliques no nome continuam.** Os quatro degraus são os mesmos quatro que a tecla de renomear percorre, na mesma ordem: o nome, o nome com sua extensão, o caminho a partir do cofre, o caminho a partir da raiz do sistema. Então um terceiro clique alcança o caminho do cofre e um quarto o da máquina — as mesmas quatro coisas que <kbd>Tab</kbd> depois do fim do campo te dá, e as mesmas quatro que o botão direito *copia* em vez de selecionar.

**Passar o mouse** é sua própria resposta e nunca muda nada: um nome abreviado volta por inteiro enquanto você aponta para ele, e o ícone no início da linha diz onde o cofre mora.

## Clique direito: uma pressão, duas pressões, três

Todo alvo na linha responde a um clique direito, e quantas pressões você dá decide o que você recebe. Como uma segunda pressão ainda pode vir, a primeira espera cerca de um terço de segundo antes de agir — o custo de colocar três gestos num botão só.

| Onde você pressiona | Uma vez | Duas vezes | Três vezes |
| --- | --- | --- | --- |
| O **nome do cofre** | O menu de contexto do próprio cofre: o que pode ser feito ao cofre que aquele segmento nomeia — incluindo *Abrir este cofre*, onde aquele cofre não é o que você está | Copia o nome do cofre | Copia onde o cofre está — e uma quarta pressão, onde o arquivo aberto está |
| Um **separador** | O menu daquela pasta — o de sua nota de pasta, onde um plugin de nota de pasta está rodando e a pasta tem uma | | |
| Um **nome de pasta** | O menu daquela pasta | Copia o nome da pasta | Copia ele e tudo à direita dele |
| O **nome da nota** | O menu do arquivo — o mesmo que a linha do File Explorer dá | Copia o nome | Copia ele com sua extensão |
| O **espaço vazio** | | Copia o caminho a partir da sua pasta de cofre, sem a extensão | O mesmo, com ela |

Uma pressão única no **nome do cofre** abre o que pode ser feito ao que quer que aquele segmento esteja nomeando. Para **o cofre em que você está**: abri-lo numa nova janela, gerenciar cofres, copiar onde ele mora, copiar seu ID, mostrá-lo no seu gerenciador de arquivos. Para **outro cofre**, alcançado pela lista de locais, o mesmo menos a nova janela — que abriria *este* cofre, não aquele — mais a única coisa que só um cofre em que você não está pode oferecer: **Abrir este cofre**. Ele é nomeado ao Obsidian pelo seu ID em vez de pelo nome da pasta, já que dois cofres podem compartilhar um. Para um lugar que não é um cofre de jeito nenhum — sua pasta home, um drive montado — não há ID para copiar e nada para abrir, e o menu diz isso ao não oferecê-los.

Este não é o próprio menu de três pontos do Obsidian, que pertence à janela inicial e não pode ser aberto de dentro de um cofre em execução — estas são as mesmas entradas reconstruídas, na própria formulação do Obsidian, tiradas de seus comandos para que cheguem no seu idioma. Três das entradas daquele menu **não** estão aqui deliberadamente: *renomear cofre*, *mover cofre* e *remover da lista* todas agem sobre a própria pasta do cofre ou sobre o registro de cofres do Obsidian, e fazer isso ao cofre em que você está — com seus arquivos abertos e seus observadores rodando — é como um cofre se quebra. Abra o gerenciador de cofres (*Abrir outro cofre*) e faça isso lá, onde o cofre está fechado.

As duas cópias no **espaço vazio** são a linha como ela é escrita — o que um link ou uma busca quer — e as do **nome do cofre** são os caminhos que o sistema de arquivos conhece, que é o que qualquer coisa fora do Obsidian quer. Cada pressão ali amplia para o que a cópia serve: duas dão o nome do cofre, três onde o cofre está, quatro onde o arquivo aberto está. O Obsidian faz a mesma distinção em seus próprios dois comandos, *a partir da pasta do cofre* e *a partir da raiz do sistema*; aqui os que apontam para fora ficam no segmento que já está fora do caminho.

Tudo isso funciona fora do cofre também, nos mesmos alvos.

Toda cópia avisa isso numa notificação, porque uma cópia não deixa nada na tela para mostrar que aconteceu e uma pressão mal contada não deveria parecer uma bem-sucedida.

## Modificadores: abrir em outro lugar

O nome da nota e os segmentos de pasta se comportam como suas linhas no File Explorer.

| | No nome da nota | Num segmento de pasta |
| --- | --- | --- |
| Clique simples | Edita o nome | Navega naquela pasta |
| <kbd>Ctrl</kbd> / clique do meio | Abre a nota numa nova aba | Manda a pasta para uma nova aba |
| <kbd>Ctrl</kbd>+<kbd>Alt</kbd> | Uma divisão | Uma divisão |
| Arrastar | A nota, para qualquer lugar que o Obsidian aceite um arquivo | A pasta, da mesma forma — incluindo a barra de abas |

Uma pasta não é algo que o Obsidian consiga abrir, então mandar uma para uma aba faz uma de duas coisas: abre sua nota de pasta, onde um plugin de nota de pasta está rodando e existe uma, ou abre uma aba vazia cuja barra de caminho já está parada naquela pasta — deixando só o nome para você digitar. Soltar um segmento de pasta na **barra de abas** faz o mesmo, numa nova aba onde você soltar — a barra de abas do Obsidian só aceita arquivos por conta própria, então uma pasta arrastada para fora do File Explorer ainda é recusada ali.

## Tab: completa o nome, depois o caminho, depois amplia a seleção

<kbd>Tab</kbd> completa do jeito que um shell faz: **um toque estende o que você digitou até onde os nomes daquela pasta concordam, e para onde eles divergem.** Digite `Sk` onde só `Sketches` começa assim e a palavra está terminada; digite `Al` onde `Alpha-one`, `Alpha-two` e `Alpine` começam todos assim e você recebe `Alp`, porque o próximo caractere é uma pergunta que só você pode responder.

Aperte de novo sem digitar nada e ele caminha em direção a um nome — a linha que a lista destacou, ou a primeira — parando na próxima ambiguidade daquele nome: `Alpha-`, depois `Alpha-one`. A lista se abre onde você já está, então na sua própria pasta o primeiro toque vai em direção à nota que você tem aberta, e não à que vem primeiro na ordenação.

**Um toque nunca escolhe entre nomes por você.** <kbd>Tab</kbd> entra numa pasta assim que o que você digitou deixa só um candidato, ou assim que você digitou o nome inteiro da pasta e nenhuma *outra pasta* o estende. Onde uma o faz — `Schemes` ao lado de `Schemes2026` — <kbd>Tab</kbd> continua completando em direção ao nome mais longo; <kbd>Enter</kbd> e a lista são os gestos que significam *esse aqui*.

Um **arquivo** nunca segura uma pasta desse jeito. Uma pasta ao lado de uma nota com seu próprio nome é uma nota de pasta, não uma bifurcação no caminho, e <kbd>Tab</kbd> caminha por pastas — então `Projects` com um `Projects.md` ao lado é percorrida como qualquer outra.

Duas coisas menores decorrem disso: o que aparece no campo é escrito do jeito que a pasta escreve, então `sk` vira `Sketches`; e só o nome sendo digitado é substituído, então um caminho com mais coisa à direita dele mantém isso.

Com um nome oferecido enquanto você digita, <kbd>Tab</kbd> **escreve exatamente a oferta**: a oferta é sempre o que o toque escreveria, e o sublinhado e a linha verde da lista dizem a mesma coisa, então o que você vê depois do cursor é o que você recebe. Onde os nomes param de concordar, esse é o passo em direção ao primeiro deles — ou à linha que você selecionou com a seta, que <kbd>Tab</kbd> escolhe em vez da linha ao lado — então use as setas até o que você quer, ou digite além da bifurcação, antes de apertar. Só onde a oferta deixa *um* nome é que o mesmo toque entra nele.

Chegar ao nome do arquivo **é** o primeiro degrau — nenhum toque é gasto só posicionando o cursor no fim de um nome que está prestes a marcar. Daí em diante os toques param de avançar pelo caminho e começam a ampliar o que está selecionado:

1. o nome
2. o nome com sua extensão
3. o caminho a partir da pasta do seu cofre
4. o caminho a partir da raiz do sistema
5. de volta ao início do caminho **como ele está agora** — parado onde a caminhada começou, primeiro segmento marcado, pronto para ser percorrido de novo

Um quarto clique chega direto a esse mesmo quarto degrau.

Ampliar só nunca faz outra coisa além de **ampliar**. Um nome que já está inteiro no campo — completado pela mesma tecla, ou escolhido na lista — é marcado por inteiro em vez de ter sua extensão retirada primeiro: o primeiro degrau é para um nome ao qual a caminhada acabou de *chegar*, onde a extensão ainda não é o assunto.

A escada é onde a caminhada **chega**, não onde ela começa. Clique numa pasta no meio de um caminho e o campo se abre com tudo abaixo dela, com o nome dessa pasta marcado; cada <kbd>Tab</kbd> então avança **uma** pasta — marcando a próxima, mantendo o resto do caminho atrás dela — e só quando sobra apenas o nome do arquivo é que a ampliação começa:

| toque | migalhas | campo | marcado |
| --- | --- | --- | --- |
| clicou em `a` | | `a/b/c/leaf.md` | `a` |
| <kbd>Tab</kbd> | `a` | `b/c/leaf.md` | `b` |
| <kbd>Tab</kbd> | `a › b` | `c/leaf.md` | `c` |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf` — o primeiro degrau |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf.md` |

**Um nome que foi definido está definido, não importa como você o definiu.** Completá-lo com
<kbd>Tab</kbd>, confirmá-lo com `/`, e escolhê-lo na lista deixam a linha no mesmo
lugar com o mesmo caminho, então o toque depois do gesto significa a mesma coisa
qualquer que seja o caminho que você tomou. Escolher uma pasta na lista costumava
esvaziar o campo em vez disso, jogando fora um caminho que chegar à mesma pasta
com <kbd>Tab</kbd> teria mantido.

**Um caminho que você ainda está escrevendo vem junto por inteiro.** Entrar na própria pasta de onde pende o resto do caminho não é uma afirmação de que o resto existe — é assim que um caminho é digitado adiantado, e as pastas que ele nomeia são as que <kbd>Enter</kbd> está prestes a criar. Então descer por `Dokumente/plans/untitled.md` até `Dokumente` mantém `plans/untitled.md` à sua frente, quer `plans` já exista ou não. O mesmo vale para um caminho que você digitou do zero: nada dele foi herdado de lugar nenhum, então nada dele é retirado.

**Trocar um passo por outro é uma história diferente, e aí o caminho vem junto só até onde ele realmente existe.** Troque uma pasta no meio de um caminho por uma vizinha — clique em `a`, digite outro nome, aperte <kbd>Tab</kbd> — e tudo abaixo dela vem junto com você, porque o caminho em que você estava normalmente é a maior parte do caminho que você quer. Só o que existe lá do outro lado sobrevive à troca, porém, então o campo e a lista ao lado dele nunca discordam: o que fica à sua frente é um caminho que você realmente poderia percorrer. Começando de `a/b/c/leaf.md`, com `a` clicado e seu nome marcado:

| o que você definiu | migalhas | campo | marcado |
| --- | --- | --- | --- |
| `x`, que não tem `b` nenhum | `x` | | nada veio junto |
| `y`, que tem um `b` mas nenhum `c` nele | `y` | `b` | `b` |
| `z`, um gêmeo de `a` até o fim | `z` | `b/c/leaf.md` | `b` |

Uma pasta deixada sozinha desse jeito ainda é uma pasta para entrar: o toque depois dela entra, em vez de começar a ampliar uma seleção sobre o nome dela.

Um nome que **nada** na pasta corresponde é respondido de forma diferente, porque nada foi definido por ele: o toque marca o que você digitou, pronto para você digitar por cima, em vez de responder com outro lugar.

A coisa toda é um **ciclo, e não custa nada dar a volta nele**: o toque depois do último degrau devolve a linha ao início do caminho, pastas e tudo, pronto para dar a volta de novo. A única coisa que alguma vez sai da linha é o prefixo absoluto, no toque que para de mostrá-lo.

O que volta é **o caminho que você construiu**, não aquele de onde você partiu. Bifurque a caminhada no meio — escolha um vizinho diferente na lista, complete em direção a outro nome — e a volta se fecha em onde você realmente está; os quatro degraus anteriores descrevem esse mesmo caminho, e este costumava ser o degrau estranho que descrevia o passado.

<kbd>Shift</kbd>+<kbd>Tab</kbd> fecha o mesmo anel na direção contrária: no início do caminho, sem nada mais para devolver e nada mais acima, o próximo toque dá a volta até o degrau **mais distante** — o caminho a partir da raiz do sistema — e continua estreitando a partir daí. Nenhuma das direções chega a um beco sem saída.

Ele também não gasta um toque num degrau que já mostrou. Abaixo do último degrau — o nome sem sua extensão — a escada acaba, e *o mesmo toque* sai da pasta: o caminho a partir da raiz do sistema, o caminho a partir do seu cofre, o nome, o nome sem sua extensão, depois a pasta, um passo cada.

Nenhum toque é gasto num degrau que não muda nada, também: clicar no nome de uma nota já a mostra sem sua extensão, que é o que o primeiro degrau mostra, então a partir daí <kbd>Tab</kbd> começa no segundo.

Cada degrau muda o que está *no* campo, não só o que está destacado — uma seleção precisa estar sobre o texto que ela nomeia, ou <kbd>Enter</kbd> confirmaria algo diferente do que você vê selecionado. A escada pertence a uma sessão de edição. Clique em outro lugar, ou digite qualquer coisa, e o próximo <kbd>Tab</kbd> volta a completar um nome.

### <kbd>Shift</kbd>+<kbd>Tab</kbd>: o mesmo caminho ao contrário

<kbd>Shift</kbd>+<kbd>Tab</kbd> desfaz um passo por toque, na ordem em que os toques foram dados: a seleção estreita um degrau de cada vez, cada complemento é devolvido, e cada pasta é abandonada — seu nome voltando ao campo para você editar em vez de redigitar.

**Nada é apagado no caminho de volta.** Um complemento é devolvido *marcando* os caracteres que ele adicionou, exatamente como avançar marca aquilo sobre o qual ampliou — o nome fica à sua frente, e cada toque adicional marca mais um passo dele:

| | campo | marcado |
| --- | --- | --- |
| chegou caminhando | `Alpha-one` | |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `ha-one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `Alpha-one` |

Digitar substitui a parte marcada, como em qualquer outro lugar. <kbd>Tab</kbd> devolve exatamente o que a marca havia devolvido, então caminhar dois passos para fora e dois passos de volta te devolve onde você estava.

Quando o nome inteiro está marcado não sobra nada que um toque tenha colocado ali, e o próximo toque vai *caminho acima*: ele sai da pasta em que você está, exatamente como <kbd>Backspace</kbd> num campo vazio faz. Isso também não custa nada — o nome da pasta volta ao campo **na frente de** o que estava nele, marcado, que é o mesmo texto que clicar naquela pasta teria te dado. Voltar é uma direção, não um histórico de desfazer — mas marcar o nome primeiro faz com que um único toque nunca desfaça o que você escreveu e ao mesmo tempo te tire da pasta em que você escreveu.

Texto que abre **já selecionado** — o que um clique numa pasta deixa para trás — é o nome sobre o qual <kbd>Tab</kbd> trabalha em seguida: ele é completado e percorrido como qualquer outro, e digitar o substitui. Só o comando de foco abre num degrau da própria escada, porque ele está te mostrando o caminho inteiro em vez de uma pasta para percorrer.

## Digitar algo que não é um caminho

| O que você digita | O que acontece |
| --- | --- |
| `https://…` | Abre numa nova aba no **Visualizador da Web** do Obsidian, se você tiver esse plugin principal ativado; no navegador do seu computador caso contrário |
| `obsidian://…` | Entregue ao próprio manipulador de URI do Obsidian |
| `file:///…` | Decodificado e aberto: como uma nota de verdade se estiver dentro do seu cofre, no visualizador se não estiver |
| `/home/you/a%20b.md` | O mesmo, para um caminho colado de um navegador ou gerenciador de arquivos |

Só esquemas explícitos contam — uma nota chamada `100%20` ainda é uma nota. Uma `/` que pertence a um esquema permanece literal em vez de descer para uma pasta, então uma URL pode ser digitada à mão e não só colada.

## Um comando para o teclado

**Focar a barra de caminho** abre o campo no nome da nota e o percorre do jeito que <kbd>F2</kbd> faz — o nome, o nome com sua extensão, o caminho a partir do seu cofre, o caminho a partir da raiz do sistema — e o toque depois disso fecha o campo e devolve o cursor à nota. Ele não renomeia: Enter navega, como em qualquer outro campo. Ele não tem uma tecla própria de fábrica, porque as diretrizes do Obsidian desencorajam plugins reivindicando uma; a linha **Atalhos** no final das configurações deste plugin abre *Configurações → Atalhos* mostrando só os comandos dele, para você poder atribuir um ali.

## A navegação nunca mexe no arquivo aberto

No modo padrão (navegação) a nota aberta **nunca** é renomeada nem movida.

- Um caminho que resolve para um arquivo existente o abre.
- Um caminho que ainda não existe é simplesmente criado, junto com quaisquer pastas pai que faltem, e aberto. Cada arquivo e pasta criados desse jeito avisam isso numa notificação — uma pasta nova é invisível de outra forma até você ir procurar por ela — e a própria lixeira do Obsidian faz de uma indesejada algo desfazível com uma tecla.
- **Fora do seu cofre ele ainda pergunta antes.** Lá fora o mesmo erro de digitação escreve numa pasta do sistema, onde nem a notificação nem a lixeira do Obsidian são de muito consolo.

## <kbd>Ctrl</kbd> — nova aba, e copiar em vez de mover

Uma nota **criada, movida ou copiada dentro do cofre é mostrada onde ela caiu** no Explorador de arquivos, marcada por um momento na cor de destaque do Obsidian — a árvore é onde você procura por ela depois, então ela é posta à sua frente em vez de deixada numa pasta que talvez nem esteja aberta. Duplicar também avisa isso: uma cópia deixa o original onde estava e abre a cópia em seu próprio painel, o que sem uma palavra seria fácil de interpretar como se nada tivesse acontecido.

Segurar <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> no macOS) enquanto escolhe um arquivo da lista, ou enquanto aperta <kbd>Enter</kbd> num caminho, manda o resultado para uma **nova aba** em vez desta:

| | Sem nada | Com <kbd>Ctrl</kbd> |
| --- | --- | --- |
| Escolher ou digitar um arquivo existente | Abre aqui | Abre em uma nova aba |
| Digitar um caminho que não existe | Pergunta e depois abre aqui | Pergunta e depois abre em uma nova aba |
| Confirmar um caminho no modo renomear/mover | **Move** a nota para lá | **Copia** para lá e abre a cópia em uma nova aba |

O modificador é lido com a regra do próprio Obsidian, então se comporta exatamente como num link ou numa linha do Explorador de arquivos — o clique do meio também significa "nova aba", <kbd>Ctrl</kbd>+<kbd>Alt</kbd> significa uma divisão e <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> uma nova janela.

Copiar recusa sobrescrever, exatamente como mover faz — inclusive sobre o próprio caminho da nota, onde não há nada sensato para copiar. Fora do cofre essa recusa também é dita em voz alta.

Tudo isso funciona **com a lista aberta** tanto quanto sem ela: numa linha destacada o modificador se aplica àquela linha, e parado sobre nada ele se aplica ao que você digitou.

## Navegar fora do cofre

**Isto vem desligado por padrão.** Ligue antes **Acesso a arquivos externos** nas configurações — ler e escrever fora do cofre é a única coisa que este plugin faz e que o Obsidian sozinho não faz, então se entra nisso de propósito em vez de ter que sair. Com a opção desligada, o nome do cofre simplesmente revela seu cofre no Explorador de arquivos, e aqui nada olha além disso.

Clicar no **nome do cofre** (ou no ícone 🏠, quando *Mostrar o nome do cofre* está desligado) abre uma lista de lugares em vez de conteúdos. O campo que se abre traz **o caminho inteiro em que você estava, escrito por extenso**, com o ponto de partida selecionado — então escolher outro lugar, ou digitar por cima da seleção, troca só essa parte inicial e deixa o resto do caminho ali na sua frente. **Aperte o nome uma segunda vez** — um clique duplo — e a marcação se estende por ele inteiro, e é assim que se pega o caminho absoluto num só gesto em vez de selecioná-lo à mão. Mude de ideia e <kbd>Esc</kbd> devolve a linha como estava.

Digitar aqui oferece o resto do nome de um lugar como em qualquer outro ponto, e <kbd>Tab</kbd> **fixa aquele lugar** — o que você está apontando, ou aquele que o nome só pode ser. Onde vários lugares ainda compartilham o que você digitou, o aperto para na bifurcação, como em todo lugar. Apontar para um lugar mostra **o próprio caminho daquele lugar**, tudo selecionado, seguido pelo caminho da sua nota só até onde ele realmente existe ali — que é exatamente onde escolhê-lo te deixaria. Um lugar não é um passo dentro do caminho na tela, mas um ponto de onde contar o caminho inteiro, então nada de onde você estava permanece na frente dele.

Os lugares oferecidos:

- **Seus outros cofres**, lidos do registro do próprio Obsidian, primeiro o aberto mais recentemente, cada um sob o ícone de cofre do Obsidian — o mesmo que o aplicativo usa nos comandos de cofre. O cofre que você já tem aberto leva uma casinha: é de onde a linha parte por padrão, não um lugar para ir.
- A **pasta pessoal**, sob o nome da sua conta, marcada com um `~`. O Lucide não tem til, então esse ícone é desenhado pelo plugin na própria grade 24×24 do Lucide e com a mesma espessura de traço — um ícone que falta ao conjunto, não um caractere de texto sentado no meio de ícones.
- A **raiz do sistema de arquivos**, com o rótulo `root` — sem tradução, porque é esse o nome dela em todo sistema — em vez de `/`, que ao lado do separador que vem depois se leria como um passo vazio.
- As **unidades montadas**, com um ícone por tipo onde isso é barato de determinar: compartilhamentos de rede, discos ópticos, disquetes e mídias removíveis têm o seu; qualquer outra coisa recebe uma unidade genérica. No Windows as unidades aparecem como `C:` com um ícone genérico — nomes de volume e tipos exatos exigem WMI, que de propósito não é usado.

Escolher outro cofre **não faz o Obsidian mudar para ele.** Tudo o que você tem aberto continua aberto; o caminho simplesmente começa a navegar ali. É esse todo o sentido de ter isso na barra de caminho em vez de remeter ao seletor de cofres da barra lateral.

Também se cai **o mais perto possível da nota em que você está, até onde aquele lugar realmente vai**.

- Se o lugar escolhido *contém* a nota — a pasta pessoal, ou onde quer que seus cofres morem — você recebe o caminho dela a partir dali: escolha `~` com `takeaways.md` aberto e o campo mostra `Vaults/your-vault/takeaways.md`.
- Se for um lugar ao lado deste — outro cofre, outra unidade — o mesmo caminho relativo é tentado, até onde ele realmente existir. Cofres costumam ser quase cópias um do outro, e o motivo de pular para um é geralmente a mesma nota do outro lado.

De qualquer jeito, a linha fica no lugar escolhido e a **primeira pasta desse caminho abre selecionada**, a mesma forma que clicar numa pasta dá: o passo que você mais provavelmente vai mudar ao pular para outro lugar é o mais próximo do topo, e o resto do caminho continua visível enquanto você o muda. Nunca nada é preenchido de antemão sem que exista de verdade no disco.

### Enquanto você está fora

O caminho **começa no local que você escolheu**, não na disposição de diretórios da máquina — e o mesmo vale para o campo que se obtém clicando no espaço vazio ou apertando a tecla de foco: ele traz o caminho a partir daquele lugar, não o caminho absoluto da máquina, com o rastro reduzido ao próprio lugar exatamente como se reduz à raiz do cofre aqui dentro — escolha `Archive` e a linha mostra `Archive / notes / …`, não `/home/você/Vaults/Archive/notes/…`. O segmento inicial traz um ícone do que ele é (cofre, pasta pessoal, unidade), e <kbd>Backspace</kbd> para ali em vez de continuar subindo pelo resto do sistema de arquivos. Com *Mostrar o nome do cofre* desligado, esse segmento é só o ícone — a configuração é sobre o segmento inicial da linha, seja qual for o cofre que ele nomeia, não só o seu.

A barra de caminho fica **emoldurada na cor de erro** — o mesmo anel que o modo renomear desenha — durante todo o tempo em que apontar para fora do seu cofre. Ela marca uma condição permanente, não um instante: enquanto está lá, nada do tratamento próprio do Obsidian se aplica ao que a linha mostra, e a escrita fica travada até você dizer o contrário.

No mais, navegar funciona como aqui dentro: fichas, separadores, digitação, autocompletar, <kbd>Backspace</kbd> para sair. Também valem as mesmas regras de visibilidade, então extensões não suportadas continuam precisando do **Detectar todas as extensões dos arquivos** do Obsidian e os arquivos ocultos continuam precisando da configuração deste plugin.

**O clique com o botão direito também funciona lá fora**, embora seja um menu diferente: os próprios manipuladores do Explorador de arquivos precisam de um arquivo que o cofre conheça, então as entradas de fora são construídas a partir do caminho. Elas oferecem abrir (aqui, à direita, numa nova janela, ou no aplicativo padrão da sua área de trabalho), *Copiar caminho*, *Mostrar no explorador do sistema*, e — assim que o cadeado está aberto — *Nova nota*, *Nova pasta*, *Fazer uma cópia*, *Renomear…* e *Excluir*. **Arrastar** ainda precisa de um arquivo do cofre e continua indisponível.

O mesmo menu está no arquivo aberto no visualizador, pelo clique com o botão direito ou pelos três pontos do próprio painel, e ele consulta o cadeado do cabeçalho daquela visualização. Não pergunta mais nada: se o arquivo está sendo renderizado ou mostrado como código-fonte não muda nada quanto a poder ser excluído, e uma imagem ou um PDF — que não têm visualização de código-fonte nenhuma — são tão excluíveis quanto uma nota. *Excluir* significa a lixeira da área de trabalho, então dá para desfazer por lá; um sistema sem lixeira informa isso em vez de destruir o arquivo.

Excluir fora do cofre move o arquivo para a **lixeira do sistema** — a Lixeira no Windows, o Lixo no macOS — nunca uma remoção direta. Aqui fora não existe lixeira do Obsidian para recuperar, então uma exclusão que não pudesse ser desfeita simplesmente não é oferecida: onde uma plataforma não tem lixeira, a tentativa informa a falha em vez de destruir o arquivo.

### Escrever fora do cofre

Tudo que escreve vem **travado por padrão**. Durante todo o tempo em que a linha aponta para fora do seu cofre, o lugar do alternador de renomear no cabeçalho é ocupado por um **cadeado vermelho** — a mesma cor do anel ao redor da linha, e pelo mesmo motivo: ele marca uma recusa. Os dois são um único controle num único espaço, então nunca há dúvida sobre qual dos dois controla o quê.

Três apertos, em ciclo:

| Aperto | O que você recebe |
| --- | --- |
| O cadeado vermelho | Escrever aqui é permitido. O cadeado é substituído pelo alternador de renomear/mover |
| O alternador | Modo renomear/mover, exatamente como dentro do cofre |
| O alternador de novo | O modo termina e o cadeado se fecha de novo — a permissão não sobrevive além daquilo para o qual foi aberta |

**A tecla de renomear também consulta o cadeado.** Fora do seu cofre, apertá-la faz o cadeado piscar aberto e fechado em vez de abrir um modo que qualquer confirmação recusaria: a recusa chega antes do trabalho, não depois. Aperte o cadeado, ou aperte a tecla de renomear de novo dentro de meio segundo — o segundo aperto concede exatamente o que o botão concede, para este local, e já abre o modo renomear junto com isso.

Dentro do seu cofre não há cadeado: não há nada para destravar, e o alternador simplesmente ocupa o espaço.

A permissão é concedida **a um local, não a um instante**: ela sobrevive a tudo que você faria trabalhando num mesmo lugar — terminar uma movimentação, clicar fora do campo, abrir um arquivo — e termina quando você escolhe outro cofre, unidade ou raiz na lista, quando a linha volta a um arquivo do cofre, ou nesse terceiro aperto. Assim, uma sequência de movimentações dentro de uma pasta leva um aperto só, não um por arquivo.

Com o cadeado aberto, a barra de caminho se comporta lá fora como se comporta aqui dentro:

| Gesto | Resultado |
| --- | --- |
| Digitar um nome que não existe, <kbd>Enter</kbd> | A mesma pergunta "criar?" de aqui dentro; as pastas que faltam também são criadas. Um nome sem extensão vira um `.md`, exatamente como aqui dentro |
| Modo renomear/mover, digitar um nome novo | Renomeia o arquivo que a linha está mostrando. Um nome sem extensão mantém a do arquivo — aqui fora uma pasta guarda todo tipo de arquivo, e um renomear não deveria transformar em silêncio um `.png` num `.md` |
| Modo renomear/mover, navegar para outro lugar, escolher **manter este nome** | Move para lá com o nome que já tem |
| Segurar <kbd>Ctrl</kbd> em qualquer um dos dois | Copia em vez de mover, e abre a cópia em uma nova aba |

Com o cadeado fechado, tudo isso informa o que está impedindo em vez de acontecer. Em nenhum dos dois estados algo é sobrescrito: um destino que já existe é recusado, e a recusa é do próprio sistema de arquivos (`COPYFILE_EXCL`, uma criação exclusiva) e não uma checagem que poderia perder a corrida. Uma movimentação entre sistemas de arquivos — de um pendrive, de um compartilhamento de rede — recorre a copiar e depois apagar, e o original só é removido depois que a cópia chegou.

**Mover uma nota para *fora* do seu cofre pergunta antes.** O `fileManager` não consegue acompanhar um arquivo através dessa fronteira: todo link que aponta para a nota deixa de resolver, nada os atualiza, e a nota sai do índice do cofre. Então a movimentação é oferecida como uma decisão em vez de recusada ou feita em silêncio — uma caixa de diálogo diz o que isso custa e quantas notas remetem à que você está movendo. Confirme e ela realmente se move: copiada para fora, depois removida do cofre pela própria exclusão do Obsidian, então é recuperável exatamente como uma nota excluída é, e uma falha em qualquer uma das etapas deixa a nota onde estava. Segurar <kbd>Ctrl</kbd> ainda a copia para fora em vez disso, o que não tem nenhum desse problema. O caminho contrário — trazer um arquivo de fora *para dentro* do cofre — ainda não foi implementado.

### Abrir um arquivo externo

Navegar pelo sistema de arquivos pode voltar **para dentro do cofre que você tem aberto** — a partir da raiz, da pasta pessoal, de onde quer que seus cofres morem. Um arquivo alcançado assim é uma nota comum, então abre como uma: o editor de verdade, links e backlinks, e a linha volta de imediato ao caminho enraizado no cofre. Só os arquivos para os quais o Obsidian não tem visualização continuam na prévia, já que ali fora a prévia é a melhor resposta. Onde uma prévia estiver mostrando uma nota assim mesmo — uma área de trabalho reaberta, por exemplo — a linha do topo oferece **Abrir em *(cofre)***, que é a mesma oferta feita à mão.

O editor do Obsidian só funciona com arquivos de dentro do cofre, então um arquivo externo **não pode** ser aberto como uma nota de verdade com links, backlinks e o resto — é um limite do aplicativo, não deste plugin. Escolher um abre uma **prévia**, somente leitura até você dizer o contrário:

| Tipo | Mostrado como |
| --- | --- |
| `.md`, `.markdown` | Markdown renderizado |
| `.html`, `.htm`, `.xhtml` | A página renderizada |
| Imagens, áudio, vídeo, PDF | Reprodutor/visualizador nativo |
| Qualquer outro arquivo de **texto** (`.json`, `.css`, `.log`, `.txt`, …) | Texto puro, ao pé da letra |
| Formatos binários sem visualizador (`.zip`, `.exe`, …) | Entregue a *Abrir no aplicativo padrão* |

O visualizador tem duas leituras de um arquivo e, como elas se excluem, só aparece aquela **para a qual** você mudaria:

| | O que faz | Padrão para |
| --- | --- | --- |
| **Ver como Markdown** | Renderiza o arquivo como uma nota, somente leitura | `.md`, `.markdown` |
| **Ver como página** | Renderiza o arquivo como a página que ele é, somente leitura | `.html`, `.htm`, `.xhtml` |
| **Editar como texto** | O código-fonte, editável | tudo o mais |

Fora do cofre, **Editar como texto** é também o aperto que tira o somente leitura — o modo e a permissão são um gesto só em vez de dois botões para raciocinar. Ele fica avermelhado **sempre que apertá-lo tiraria o somente leitura**, quer você esteja armando a edição ali mesmo, quer venha direto da visualização renderizada; dentro do cofre não há nada a destravar, então ele fica normal. **Ver como Markdown** ganha uma leve lavagem da cor de destaque — o mesmo tom que o Obsidian dá ao texto selecionado — marcando-o como o caminho de volta e não como um chamado à ação.

Como o botão acompanha a *edição* e não o modo bruto, um arquivo que está somente leitura na visualização de texto continua oferecendo **Editar como texto**: é esse o aperto que a arma. Um arquivo em que nunca se poderá digitar — truncado ou ilegível — diz **Ver como texto**, já que é tudo o que o aperto pode entregar.

Os padrões são os úteis e não os literais: um `#` num script de shell é um comentário, não um título, então renderizar um `.log` como Markdown o engoliria em silêncio. Qualquer um dos padrões pode ser trocado arquivo a arquivo, e a escolha vai para o histórico da aba, então voltar/avançar e uma área de trabalho reaberta a mantêm — muitas notas vivem em arquivos `.txt`, e muitos arquivos `.md` se leem melhor como código-fonte.

#### O que uma página HTML tem permissão de fazer

Nada. A página é mostrada num quadro com **toda permissão negada** — sem
scripts, sem formulários, sem navegação, sem origem própria — e uma política de
conteúdo que não permite rede nenhuma. Isso não é cautela por cautela: uma
página local carregada do jeito normal compartilharia a origem desta janela, e
esta janela é o Obsidian, então um script num arquivo HTML baixado estaria
rodando dentro do seu aplicativo com o alcance do seu aplicativo.

O que isso custa é qualquer coisa que a página *faça*; o que se mantém é tudo o
que a página *é*. As folhas de estilo e imagens ao lado do arquivo são lidas e
levadas para dentro do quadro, então uma página salva ainda parece ela mesma.
Referências que apontam para fora da própria pasta da página, e referências a
algum lugar na web, ficam exatamente como escritas e simplesmente não carregam
— um arquivo local não pode avisar um servidor em silêncio de que você o abriu.

Scripts são **removidos** em vez de apenas bloqueados, para que a página que
você vê e o código-fonte para o qual você pode mudar difiram de um jeito
declarado em vez de em qualquer coisa que o quadro tenha recusado a rodar em
silêncio. Links dentro da página não fazem nada. Quando você quer a coisa real
— scripts, rede e tudo mais — *Abrir no aplicativo padrão* a entrega ao seu
navegador, que é a ferramenta certa para isso.

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

- **Abrir em *(cofre)*** — mostrado quando o arquivo pertence a um dos seus outros cofres. Entrega o arquivo ao próprio manipulador de URI do Obsidian, que abre a janela daquele cofre com a nota nela, como uma nota de verdade e editável. Esta janela continua exatamente como estava; nada muda debaixo de você.
- **Ver como Markdown** / **Ver como página** / **Editar como texto** — as duas leituras que este arquivo tem; a última também tira o somente leitura fora do cofre.
- **Abrir no aplicativo padrão** — entrega o arquivo ao aplicativo padrão da sua área de trabalho, incluindo os formatos binários que este visualizador não consegue mostrar. Com a mesma redação da própria entrada do Obsidian para a mesma ação, porque é a mesma ação.

O visualizador também responde ao **clique com o botão direito**: dentro do editor de texto com *Recortar* / *Copiar* / *Colar* / *Selecionar tudo*, e em qualquer outro lugar com o próprio menu do arquivo. O menu de três pontos do Obsidian no cabeçalho também traz esse menu — fora do cofre ele de outro modo não ofereceria nada além de *Dividir à direita* e *Dividir abaixo*.

Nada de fora do seu cofre é escrito sem você apertar antes *Editar como texto*. Veja a seção [Fora do cofre](README.pt-BR.md#fora-do-cofre) do README para a divulgação completa.

## Soltar um arquivo sobre uma pasta no caminho

Toda pasta na linha é um destino de soltar, então **uma nota arrastada até uma
delas se move para lá** — o caminho mais curto entre uma nota e qualquer pasta
acima dela, já que o destino já está na tela. Arraste do Explorador de arquivos,
da lista, do próprio nome da nota no cabeçalho, ou de qualquer outro lugar do
Obsidian que produza um arquivo: é o próprio arrastar do aplicativo, então o
rótulo ao passar o cursor, o cursor e o destaque são os mesmos que o Explorador
de arquivos desenha.

**O nome do cofre também recebe uma soltura**, já que é a pasta no topo da
linha — o único gesto que coloca uma nota na raiz do cofre a partir daqui.

**Uma seleção inteira pode ser arrastada de uma vez**, e ela se move como uma
só: se algum dos itens não puder ser movido, a soltura é recusada em vez de
mover alguns e ignorar silenciosamente o resto.

Os links seguem a nota, exatamente como fazem quando ela é movida pelo
Explorador de arquivos ou ao digitar um caminho.

Uma pasta que **não pode receber a soltura não oferece nada próprio** — nenhum
rótulo *Mover para*, nenhum destaque na pasta — em vez de oferecer algo que
depois falharia; a resposta do próprio Obsidian para o cabeçalho, *Abrir nesta
aba*, é o que aparece em seu lugar. Três casos:

- a pasta em que o arquivo **já está**, já que ele já está lá;
- uma pasta solta **dentro de si mesma ou de um de seus descendentes**, o que a
  deixaria sem lugar de onde teria vindo;
- uma seleção contendo **uma pasta e algo dentro dela**, já que mover a pasta
  leva o filho com ela.

Uma pasta que já contém um **arquivo com o mesmo nome** aceita a soltura e
pergunta o que fazer com aquele que está no caminho, com o mesmo diálogo de um
nome já usado digitado ou escolhido — veja [Um nome que já está em
uso](#um-nome-que-já-está-em-uso). Nada aqui sobrescreve.

Apenas pastas **dentro do seu cofre** recebem soltas. Enquanto a linha aponta
para fora do cofre, seus segmentos recusam, porque tirar uma nota do cofre
quebra todos os links para ela — uma decisão que merece uma pergunta, não um
gesto. A forma de fazer isso deliberadamente ainda é digitar o caminho, que
pergunta primeiro e informa quantas notas seriam afetadas.

## Soltar texto ou um arquivo para escrevê-lo

Os mesmos destinos aceitam **conteúdo** além de arquivos, e os dois são
diferenciados pelo que você está arrastando, não por onde você solta.

**Sobre uma nota que a linha já nomeia** — o próprio nome da nota, ou um
separador cuja pasta tem uma nota de pasta — o que você soltou vai para o
final dela, depois de uma linha em branco. Ele pergunta antes, porque isso
escreve num arquivo que já existe e um arrastar é um gesto que uma mão
instável pode fazer por acidente. Texto de um editor, um arquivo da sua área
de trabalho e uma nota arrastada de fora deste cofre funcionam; um arquivo é
lido como texto, e um arquivo binário é recusado em vez de colado como uma
tela cheia de disparates.

**Sobre um lugar — o nome do cofre ou uma pasta** — nada é escrito ainda,
porque nada foi nomeado. O campo abre lá contendo o que você soltou, e o nome
que você digita é o que confirma: uma nova nota é *criada* contendo o texto, e
uma existente é questionada exatamente como acima. <kbd>Esc</kbd>, ou um
clique em outro lugar, solta tudo.

**A linha fica com um anel azul** enquanto um arrastar que resultaria em
conteúdo está sobre ela, e continua azul enquanto o campo contém um — o mesmo
azul, dizendo a mesma coisa: o que acontece a seguir é sobre o texto que você
está carregando. Um arquivo arrastado de dentro do seu próprio cofre até uma
pasta ainda significa *mover para lá*, mantém o destaque nativo do Obsidian, e
nunca fica com anel azul; esse gesto já existia antes, e o conteúdo se afasta
dele.

## Quando o caminho é mais longo que o painel

Os nomes são **encurtados em vez de espremidos**, na ordem do que você
provavelmente menos precisa:

1. **Primeiro o nome do cofre**, até seu ícone. Você sabe em qual cofre está;
   o ícone continua dizendo onde o caminho começa.
2. **Depois a extensão do arquivo**, se você a tiver ativado — os mesmos três
   caracteres em quase todo arquivo de um cofre. Ela vai inteira em vez de ser
   encurtada: metade de uma extensão não diz nada que a ausência de extensão
   não diga.
3. **Depois as pastas, a mais longa primeiro.** O nome de pasta mais longo
   encurta até o comprimento do próximo mais longo, depois os dois juntos, e
   assim por diante, cada um parando em seu piso — então uma pasta com nome
   muito longo desiste de tudo o que tem de sobra em relação às outras antes
   que um nome curto ao lado perca uma letra.
4. **O próprio nome do arquivo por último**, e ele mantém cerca de seis
   caracteres. É para isso que o cabeçalho existe.

O espaço é liberado **continuamente**, em frações de pixel em vez de uma letra
por vez: um nome que cede é cortado no pixel e se esmaece sob seu `…`, então um
painel arrastado lentamente estreita a linha suavemente e nada depois dele se
move em saltos. Antes que qualquer letra vá, o ar em volta dos separadores é
gasto — é o único espaçamento da linha e não custa informação alguma — e um
nome encurtado termina onde o separador começa, sem nenhuma faixa de caixa
vazia entre os dois.

**O campo ocupa o que contém.** Abrir um para digitar um caminho não espreme
as pastas ao lado para o caminho: ele tem a largura do texto nele e cresce
enquanto você digita, então o rastro mantém tudo o que o campo não precisa. Só
quando não há espaço suficiente para ambos a linha rola, e então o campo é a
única coisa que nunca cede — é texto sendo editado, não um nome sendo
ajustado.

Nada é cortado além do que o diferencia dos vizinhos: `Projects2025` e
`Projects2026` na mesma pasta se reduzem a `…025` e `…026` em vez de a um
prefixo que os tornaria a mesma palavra, enquanto `Reports` ao lado de
`Receipts` pode se reduzir a `Rep…`. Além disso, todo nome mantém uma
**largura legível** — cerca de quatro letras para uma pasta e seis para um
nome de arquivo, medidas na fonte em que a linha é de fato desenhada, não
contadas. Quatro letras estreitas e quatro largas não são a mesma quantidade
de nome, então `lilliliillil` pode manter mais de si mesma do que
`WWMMWWMMWWMM` pode, e o que resta na tela tem o mesmo tamanho de qualquer
forma. Nomes curtos são deixados intocados por completo — um nome reduzido a
`A…` é único e ainda assim ilegível. **Espaços não contam para isso.** Seis
caracteres para dizer qual é este arquivo são seis caracteres que vale a pena
ler, então os espaços entre eles seguem de carona e nunca ficam encostados no
`…`, onde seriam invisíveis de qualquer forma.

**Um nome é cortado onde seus vizinhos concordam com ele, e no meio quando não
concordam em nenhum lugar.** Duas pastas chamadas `aaaa-comum-um` e
`aaaa-comum-dois` compartilham tudo menos os últimos três caracteres, então
cortar a ponta mantém a parte que não diz nada: elas se reduzem a `…um` e
`…dois`, o que é mais curto *e* as diferencia. Onde a concordância é no
final — `alpha-rascunho` ao lado de `beta-rascunho` — é o final que vai; onde
é em ambas as pontas, o que fica é o meio. Um nome sem vizinhos próximos perde
o meio, já que um nome começa com o que ele é e termina com qual ele é — para
um arquivo, sua extensão: `anual…2026.md`.

Uma coincidência curta em comum não conta. `estruturas paralelas` acaba
terminando nas mesmas duas letras que `Esquemas` ao lado dela, e isso não é
motivo para manter nenhum dos dois inteiro — três caracteres do começo já os
diferenciam.

Nada quebra para uma segunda linha. Quando até os nomes honestos mais curtos
não cabem, a linha **rola para os lados**, estacionada no final onde está o
arquivo — nesse ponto não há mais nada para comprimir, e cortar mais
esconderia em vez de encurtar. A roda do mouse rola para onde o cursor estiver
sobre a linha, e ambas as pontas podem ser alcançadas: enquanto rola, a linha
se alinha ao seu início, seja qual for a configuração de alinhamento, porque
conteúdo centralizado em uma caixa que ele ultrapassou vaza tanto pela
esquerda quanto pela direita — e aquela metade não pode ser alcançada rolando
de forma alguma.

**Aponte para um nome encurtado e ele volta por completo**, enquanto você
estiver apontando para ele, rolado até a margem esquerda para que tudo o que
voltou esteja na tela. **Clique num e ele permanece**: o campo abre mostrando
a pasta que você clicou, o que é oferecido depois dela e o que quer que você
digite, e continua mostrando isso depois que o cursor se afastou. Os nomes
ficam parados enquanto você rola a linha ou digita nela — um se abrindo
repentinamente sob um gesto pensado para ler a linha moveria tudo depois dele
debaixo de você.

O **segmento inicial sempre traz uma dica de tela, e é o caminho absoluto** —
`/home/você/Cofres/Notas`, ou onde quer que a linha comece. É a única coisa
sobre a linha que nada na tela pode dizer: o nome diz *qual* cofre, nunca onde
ele está. Ele está lá esteja ou não algo tendo sido encurtado.

Com **Mostrar o nome do cofre** desativado, o nome não é removido, apenas
mantido em nada — então apontar para o ícone o devolve exatamente da mesma
forma que apontar para um nome que a linha teve que encurtar.

**Mostrar extensões de arquivo** coloca a extensão de volta no nome de arquivo
da linha. Desativado — o padrão — a linha nomeia uma nota da forma como o
Obsidian a intitula, sem o `.md` que quase todo arquivo de um cofre
compartilha; ativado, ela a nomeia da forma como o sistema de arquivos faz, o
que é o que você quer quando o cofre contém mais do que notas. É também a
segunda coisa que a linha abandona quando o espaço fica curto, logo depois do
nome do cofre.
Uma dica de tela lhe dá o resto: não apenas o nome, mas tudo o que a linha
mostra sob ele, como `…/nome/pasta/nota.md`, então passar o cursor uma vez
responde tanto "o que é isso" quanto "o que está sob isso". O ícone do cofre
nomeia seu cofre da mesma forma, quando o nome está desativado ou foi
espremido para fora.

## As cores de aviso

| | Quando | O que significa |
| --- | --- | --- |
| Anel **vermelho** na barra de caminho | A linha aponta para fora do seu cofre | O Obsidian não consegue abrir o que está lá como uma nota, e nada lá fora é gravado até você abrir o cadeado. |
| Anel **laranja** na barra de caminho | O arquivo é de um tipo de texto para o qual o Obsidian não tem visualização | Um alerta. O Obsidian o entregaria ao aplicativo padrão da sua área de trabalho; o plugin o mostra em vez disso. |
| Texto **vermelho** no campo aberto | Ainda não há nada nesse caminho | <kbd>Enter</kbd> vai criá-lo em vez de abri-lo. Não bem um aviso, mas uma declaração do que a próxima tecla faz — veja [Digitar um caminho](#digitar-um-caminho). |
| Cadeado **vermelho** no lugar do alternador de renomear | A linha aponta para fora do seu cofre e escrever lá ainda está bloqueado | O mesmo vermelho do anel, pelo mesmo motivo: marca uma recusa. Pressioná-lo permite escrever aqui e devolve o espaço ao alternador — veja [Escrever fora do cofre](#escrever-fora-do-cofre). |

Os **dois anéis são independentes, e ambos podem valer ao mesmo tempo** — um
`.json` externo está fora do seu cofre *e* é um tipo para o qual o Obsidian
não tem editor. No visualizador, eles aparecem como linhas separadas, cada uma
declarando apenas seu próprio fato. Na barra de caminho, o vermelho vence onde
ambos se aplicam, já que dois anéis seriam só ruído. O *texto* vermelho é uma
terceira coisa totalmente diferente: é sobre o que está sendo digitado, não
sobre onde a linha aponta, então pode aparecer dentro de qualquer um dos
anéis ou de nenhum.

O nível laranja é deliberadamente estreito. Tipos registrados (Markdown,
canvas, imagens, PDF, áudio, vídeo) são tratados adequadamente e não recebem
nada. Arquivos binários também não recebem nada — você não vai editar um
`.zip` até virar uma confusão por acidente. O que resta é exatamente o risco:
um `.json`, `.css` ou `.log` que **Mostrar todos os tipos de arquivo** tornou
visível. A lista é intencionalmente mais ampla: lá, tudo que não é uma nota é
laranja — veja [como as entradas da lista são coloridas](#como-as-entradas-da-lista-são-coloridas).

## Modo mover/renomear

O botão de lápis na extremidade direita do cabeçalho — ao lado do botão de
modo de visualização, do mesmo tamanho dos botões nativos — alterna o modo
mover/renomear. Fora do seu cofre, um cadeado vermelho fica em seu lugar até
você pressioná-lo; veja [Escrever fora do cofre](#escrever-fora-do-cofre).
A linha do cabeçalho é então emoldurada na cor de destaque, exatamente como
renomear no Explorador de arquivos. Os mesmos cliques e teclas agora confirmam
um mover ou renomear via `fileManager.renameFile` do Obsidian, então todos os
links para a nota acompanham.

Enquanto renomeia:

- O nome de arquivo atual fica fixado na lista de toda pasta, então mover uma
  nota sem renomeá-la é um único clique.
- Nomes já em uso na pasta de destino ficam **vermelhos** — uma pasta que já
  contém o nome, e um arquivo com esse nome — então o conflito aparece antes
  de você escolher. Eles ainda podem ser escolhidos: veja abaixo.
- A entrada é validada em tempo real contra as próprias regras de renomear do
  Obsidian — os mesmos conjuntos de caracteres, as mesmas mensagens, a mesma
  dica de tela vermelha que você recebe ao renomear na árvore de arquivos —
  então um nome ilegal é sinalizado enquanto você digita e não pode ser
  confirmado.
- Clicar fora da barra do cabeçalho, ou o cabeçalho perdendo o foco, encerra
  o modo de renomear.

### Um nome que já está em uso

Mover ou renomear para um nome que já existe **pergunta em vez de recusar.**
Um diálogo abre com dois caminhos que você pode editar: para onde seu arquivo
vai, e para onde vai o arquivo que está no caminho — vermelho enquanto ainda
estiver em uso. Cada caminho também é desenhado da mesma forma que a barra de
caminho desenha um, com as partes que diferem coloridas e encurtadas por
último, então um caminho longo ainda mostra o que muda.

Ambos os campos têm uma lista. O segundo contém as saídas usuais:

- **Trocar de lugares** — ele vai para a antiga pasta do seu arquivo, com seu
  próprio nome.
- **Trocar nomes** — ele fica onde está e recebe o nome antigo do seu
  arquivo.
- **Trocar tudo** — ele recebe o caminho antigo do seu arquivo.
- `-1`, `-bak` e `-old` ao lado do próprio nome.
- Os dois nomes que os arquivos tinham.

A primeira lista oferece para onde seu arquivo estava indo, **Deixar como
está**, seu próprio nome na pasta de destino, e `-1`, `-bak` e `-old` ao lado
dele. Uma saída cujo caminho já está em uso fica acinzentada e não pode ser
escolhida. Escolher uma **apenas preenche o campo** — você ainda pode
editá-lo — e **Aplicar** move os dois, links e tudo; **Cancelar** não move
nada. Escolher um nome já em uso na lista pergunta o mesmo, e o mesmo ocorre
ao soltar uma nota sobre uma pasta que já contém seu nome.

## Uma tecla para os dois renomeares

O comando de renomear (<kbd>F2</kbd> por padrão, ou o que você tiver reatribuído) **alterna** entre o renomear pelo título inline do Obsidian e a barra de caminho no cabeçalho deste plugin. Se você desligou o título inline do Obsidian, a barra de caminho no cabeçalho passa a ser o único destino, então a tecla nunca fica sem fazer nada.

Na barra de caminho ela abre no **nome sem a extensão** — a edição que um renomear quase sempre é, e a mesma coisa que clicar no nome seleciona. Aperte de novo e ela faz o que <kbd>Tab</kbd> faria ali: no nome, isso é o próximo degrau —
o nome com sua extensão, o caminho a partir da pasta do seu cofre, o caminho a partir da raiz do sistema; com algo digitado, ela completa, como <kbd>Tab</kbd> faz.

**O ciclo se fecha na barra de título.** Cinco aperto levam você ao redor dele —
o título inline, o nome, o nome com sua extensão, o caminho a partir do cofre, o caminho
a partir da raiz do sistema — e o sexto é o título inline de novo. Esse aperto é o único que difere de
<kbd>Tab</kbd>, que dá a volta de novo para o início do caminho em vez disso — e o sétimo
vai para onde a volta de <kbd>Tab</kbd> vai: a raiz do cofre, com o caminho inteiro no
campo e sua primeira pasta marcada. Então todo passo que <kbd>Tab</kbd> alcança, a tecla
alcança também.

O comando **Focar a barra de caminho** faz o mesmo dentro do campo — o que
<kbd>Tab</kbd> faria — e onde <kbd>Tab</kbd> daria a volta, ele devolve o cursor
à nota em vez disso. O próximo aperto dele é a volta: a raiz do cofre, primeira pasta marcada.

**Num campo que já está aberto**, a tecla o transforma num renomear onde ele
está — mantendo o texto, o cursor e a seleção — e **Focar a barra de
caminho** retira o renomear dele da mesma forma. **Qualquer outra coisa** apertada ou
clicada entre os apertos reinicia qualquer um dos dois ciclos, então um aperto depois que você estava
editando nunca cai num degrau que sobrou de antes.

Fora do cofre a tecla também funciona — não há título inline lá fora, então o
primeiro aperto vai direto para a barra de caminho.

Isso funciona embrulhando o comando `workspace:edit-file-title` em vez de sequestrar a tecla, então reatribuir o atalho e rodar o comando pela paleta continuam funcionando igual.

## Como as entradas da lista são coloridas

| Cor | Significa |
| --- | --- |
| **Roxo** | Uma nota (`.md`, `.markdown`) — o que o Obsidian abrirá como uma nota, escolhida de uma pasta de conteúdo misto |
| **Laranja** | Não é uma nota — qualquer coisa que o Obsidian não abrirá como uma, de um PDF a um `.txt`, e as entradas `:page` junto com eles. Uma pasta de conteúdo misto é lida pelas notas que contém, e uma cor só para tudo o mais avisa isso mais rápido do que um alerta em algumas delas; veja [as cores de aviso](#as-cores-de-aviso) |
| **Cinza** | Fora do seu cofre, então o tratamento próprio do cofre não se aplica |
| **Azul**, em negrito | Onde você já está: a própria nota desta barra, e a pasta em que a barra de caminho está parada. No modo mover/renomear a entrada *manter este nome* fica no lugar da nota — a mesma nota de qualquer forma |
| **Vermelho** | Só no modo mover/renomear: o nome já está em uso. Ainda pode ser selecionado — escolher uma pergunta o que fazer com o arquivo no caminho; veja [Um nome que já está em uso](#um-nome-que-já-está-em-uso) |

**Pastas ficam em negrito**, então a própria nota de uma pasta não precisa de
cor própria para se destacar da pasta: ela é roxa como qualquer outra nota. Uma **linha na
borda de uma linha** marca os nomes que começam com o que você digitou — azul onde
eles ainda concordam, verde no ramo que a sugestão segue; veja
[Digitar um caminho](#digitar-um-caminho).

O campo assume as mesmas cores para o que ele nomeia — veja [Digitar um caminho](#digitar-um-caminho).

## Regras de visibilidade

- Arquivos com extensões não suportadas aparecem nas listas somente se a configuração **Detect all file extensions** do Obsidian estiver ativada — **dentro do cofre**. Fora dele a configuração não se aplica: ela governa o que o cofre indexa, e nada lá fora está no cofre, então um `.txt` ao lado das suas notas é listado de qualquer forma.
- A lista mostra até 1.000 entradas, dez vezes o limite do próprio Obsidian. Quando uma pasta tem mais, a última linha diz quantas foram deixadas de fora; continue digitando para estreitar a lista.
- Arquivos ocultos e pastas ocultas aparecem somente se a configuração **Mostrar arquivos ocultos** deste plugin estiver ativada.
- **A proteção contra sobrescrita funciona igual independentemente da visibilidade** — um arquivo oculto ainda impede que você o sobrescreva.

## Resumo

Um caminho **entre aspas** é desembrulhado para você. O *Copiar como caminho* do Windows entrega
`"C:\Users\você\nota.md"`, aspas incluídas, e um shell faz o mesmo para qualquer
caminho com um espaço nele; colar ou digitar um funciona de qualquer forma. Só a
aspa dupla, e só como um par correspondente em volta da coisa toda — ela não pode
aparecer num nome de verdade, onde um apóstrofo perfeitamente pode.

| Você quer… | Faça isso |
| --- | --- |
| Abrir uma pasta (sua nota, ou revelá-la) | Clique no separador **depois** dessa pasta |
| Dar a uma pasta uma nota de pasta que ela não tem | **Clique duplo** nesse mesmo separador (precisa de um plugin de nota de pasta) |
| Trocar uma pasta por uma vizinha | Clique no nome dessa pasta, depois digite ou escolha |
| Renomear a nota ou redirecioná-la | Clique no nome da nota — extensão incluída |
| Navegar pelo conteúdo de uma pasta | Clique no nome dessa pasta; a lista mostra o conteúdo da pasta pai, então clique na pasta **abaixo** da que você quer |
| Redigitar uma pasta e tudo abaixo dela | **Clique duplo** no nome dessa pasta, depois digite |
| Editar o caminho a partir de uma pasta para baixo | Clique no nome dessa pasta, depois <kbd>→</kbd> para desmarcar a seleção |
| Ir direto para um arquivo digitando seu caminho | Clique no nome do arquivo ou no espaço vazio, digite, <kbd>Enter</kbd> |
| Abrir um arquivo numa nova aba em vez disso | <kbd>Ctrl</kbd> ao escolhê-lo, ou <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| Copiar a nota para algum lugar em vez de movê-la | Lápis, depois <kbd>Ctrl</kbd> ao escolher ou confirmar o destino |
| Criar uma nota num caminho que não existe | Digite o caminho — o campo fica **vermelho** quando nada na lista corresponde a ele também — depois <kbd>Enter</kbd>. Dentro do cofre ela é criada na hora; fora dele primeiro é perguntado |
| Descobrir se um caminho que você digitou já existe | Olhe a cor: ela assume a cor da linha que nomeia, e vermelho significa que <kbd>Enter</kbd> a criaria |
| Descer um nível enquanto digita | Digite `/` |
| Voltar um nível enquanto digita | <kbd>Backspace</kbd> no campo vazio |
| Trazer as pastas antes do campo para dentro dele | <kbd>←</kbd> no início dele para uma; <kbd>Shift</kbd>+<kbd>Home</kbd>, ou <kbd>Home</kbd> com a lista fechada, para todas elas |
| Mover ou renomear a nota aberta | Clique no lápis, depois navegue ou digite como acima |
| Mover para um nome que já está em uso | Confirme mesmo assim: a caixa de diálogo deixa você trocar de lugar, de nomes ou os dois, ou dar ao arquivo no caminho outro nome |
| Mover sem renomear | Lápis → clique dentro da pasta de destino → escolha o nome de arquivo atual fixado |
| Renomear no lugar | <kbd>F2</kbd> duas vezes (primeiro aperto vai para o título inline, segundo para o cabeçalho) |
| Ir para outro cofre, a pasta pessoal ou uma unidade | Clique no nome do cofre |
| Abrir um arquivo de fora do cofre | Nome do cofre → escolha um local → navegue → escolha o arquivo (somente leitura até *Editar como texto*) |
| Completar o nome sendo digitado | <kbd>Tab</kbd>, ou <kbd>End</kbd> para o que é oferecido; <kbd>→</kbd> pega uma letra dele |
| Entrar nele, quando só um nome sobra | <kbd>Tab</kbd> de novo |
| Desfazer um passo, ou sair da pasta | <kbd>Shift</kbd>+<kbd>Tab</kbd> |
| Pegar o caminho inteiro, ou o caminho do sistema | <kbd>Tab</kbd> passando do fim, ou clique quatro vezes |
| Copiar um nome, um caminho, ou um caminho do sistema | Clique com o botão direito duas vezes; o espaço vazio três vezes para o caminho do sistema |
| Acessar o que o gerenciador de cofres oferece para este cofre | Clique com o botão direito no ícone no início da linha |
| Copiar o ID do cofre | Clique com o botão direito no ícone no início da linha |
| Abrir outro cofre que você estava navegando | Clique com o botão direito no nome dele no início da linha |
| Ver a extensão do arquivo na linha | Ative **Mostrar extensões de arquivo** nas configurações |
| Abrir um segmento de pasta numa nova aba | <kbd>Ctrl</kbd> ou clique com o botão do meio nele, ou arraste-o para a barra de abas |
| Chegar à barra de caminho pelo teclado | Vincule *Focar a barra de caminho* em Atalhos |
| Abrir um endereço da web ou um link `obsidian://` | Digite-o na barra e aperte <kbd>Enter</kbd> |
| Cancelar qualquer coisa | <kbd>Esc</kbd>, ou clique fora da barra de cabeçalho |
| Experimentar entradas antes de confirmar | Percorra a lista com as setas ou o mouse; <kbd>↑</kbd> passando do topo devolve seu texto |
| Mover uma nota para uma pasta acima dela | Arraste-a para essa pasta na linha |
| Guardar um pedaço de texto como uma nota nova | Arraste o texto para uma pasta, digite um nome, <kbd>Enter</kbd> |
| Adicionar um pedaço de texto à nota que você está lendo | Arraste-o para o nome da nota, confirme |
| Ver um nome de pasta abreviado na íntegra | Passe o mouse sobre ele, ou alargue o painel |
| Descobrir onde o próprio cofre vive | Passe o mouse sobre o ícone no início da linha |
| Tirar uma nota do cofre | Lápis → navegue para fora → confirme a caixa de diálogo (links vão quebrar) |
| Permitir escrever fora do seu cofre | Clique no **cadeado vermelho** no cabeçalho; a chave de renomear toma o lugar dele |
| Trancar de novo | Clique na chave até o cadeado voltar — um aperto para dentro, um aperto para fora |
| Excluir um arquivo fora do cofre | Abra o cadeado, depois clique com o botão direito no arquivo: *Excluir* o move para a lixeira do seu sistema |

## Configurações

| Configuração | Opções | Padrão | O que faz |
| --- | --- | --- | --- |
| **Idioma** | Padrão do Obsidian, ou qualquer um entre 46 | Padrão do Obsidian | Em que idioma está o próprio texto deste plugin. *Padrão do Obsidian* segue o idioma definido nas configurações de Aparência, que é o que quase todo mundo quer. A linha em si — seu nome, sua descrição e *Padrão do Obsidian* — fica em inglês seja o que for escolhido, porque é o caminho de volta para fora de um idioma que você não consegue ler. Grego e sânscrito estão traduzidos aqui e ausentes da própria lista do Obsidian, então esta configuração é o único jeito de chegar até eles. |
| **Alinhamento** | Esquerda / Centro / Direita | Esquerda | Onde o caminho fica na linha do cabeçalho. *Centro* combina com o visual clássico do Obsidian. |
| **Separador** | Qualquer caractere | `/` | O separador desenhado entre segmentos. Seis predefinições de um clique (`/ > ▸ › \ •`) ficam antes do campo de texto. |
| **Mostrar o nome do cofre** | Ativado / Desativado | Ativado | Se o próprio cofre é o primeiro segmento do caminho. Desativado, esse segmento se torna um ícone de 🏠 em vez de desaparecer, então o caminho ainda começa em algo clicável. |
| **O nome da pasta abre a lista** | Ativado / Desativado | Ativado | Troca o que o nome de uma pasta e o separador depois dele fazem — veja [a tabela acima](#o-caminho). Com [Folder notes](obsidian://show-plugin?id=folder-notes) o separador abre notas de pasta. Nunca se aplica no modo mover/renomear. |
| **Mostrar arquivos ocultos** | Ativado / Desativado | Desativado | Se arquivos ocultos e pastas ocultas são listados nas listas suspensas. A proteção contra sobrescrita se aplica de qualquer forma. |
| **Show all file types** | — | — | Não é uma configuração deste plugin, e sim do Obsidian, citada aqui porque responde à mesma pergunta: seu cofre indexa apenas os tipos de arquivo que é mandado indexar, e só o que ele indexa pode ser listado. Procure por ela nas configurações do Obsidian e ative-a para ver todos os arquivos; o botão ao lado da linha abre essa página com a configuração rolada até a vista e destacada, como clicar nela na própria busca das configurações faria. Fora do cofre ela não se aplica, já que nada lá fora é indexado de qualquer forma. |
| **Mostrar extensões de arquivo** | Ativado / Desativado | Desativado | Se o nome do arquivo na linha traz sua extensão. Desativado, ela fica de fora — como o Obsidian a deixa de fora do título de uma nota. Ativado, a linha nomeia o arquivo como o sistema de arquivos faz. De qualquer forma a extensão é a segunda coisa a ser sacrificada quando a linha fica sem espaço, logo depois do nome do cofre. |
| **Acesso a arquivos externos** | Ativado / Desativado | **Desativado** | Se o nome do cofre abre a lista de locais. Desativado, nada no plugin nunca olha além deste cofre. |
| **Atalhos** | botão | — | Abre os *Atalhos* do Obsidian filtrados para este plugin, onde *Focar a barra de caminho* pode receber uma tecla. |

## Substituir os ícones

O Lure desenha três ícones: o ícone da raiz do cofre (quando **Mostrar o nome do cofre** está desativado), a chave de mover/renomear, e o cadeado que fica no lugar dela enquanto escrever fora do cofre está trancado. Todos podem ser trocados por um tema ou um trecho de CSS — defina o glifo de substituição e esconda o que vem junto numa única regra:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* Só é mostrado fechado: abri-lo entrega o lugar para a chave de renomear. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}
```

`--lure-icon-glyph` aceita qualquer coisa válida em `content` do CSS, então `url(...)` serve para uma imagem tanto quanto para um glifo de texto ou um emoji. Deixe `--lure-icon-svg` quieto para manter o ícone do Lucide e desenhar seu glifo do lado.
