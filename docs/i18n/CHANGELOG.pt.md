<!-- Tradução de CHANGELOG.md — estado: commit 2cbb237.
     Tradução automática (Claude Opus 5), não revista por falantes nativos.
     Correções são bem-vindas; o CHANGELOG em inglês é a versão de referência. -->

[English](../../CHANGELOG.md) · [العربية](CHANGELOG.ar.md) · [አማርኛ](CHANGELOG.am.md) · [Беларуская](CHANGELOG.be.md) · [বাংলা](CHANGELOG.bn.md) · [Català](CHANGELOG.ca.md) · [Čeština](CHANGELOG.cs.md) · [Dansk](CHANGELOG.da.md) · [Deutsch](CHANGELOG.de.md) · [Ελληνικά](CHANGELOG.el.md) · [Español](CHANGELOG.es.md) · [فارسی](CHANGELOG.fa.md) · [Suomi](CHANGELOG.fi.md) · [Français](CHANGELOG.fr.md) · [Gaeilge](CHANGELOG.ga.md) · [עברית](CHANGELOG.he.md) · [Magyar](CHANGELOG.hu.md) · [Bahasa Indonesia](CHANGELOG.id.md) · [Italiano](CHANGELOG.it.md) · [日本語](CHANGELOG.ja.md) · [ქართული](CHANGELOG.ka.md) · [ភាសាខ្មែរ](CHANGELOG.kh.md) · [한국어](CHANGELOG.ko.md) · [Latviešu](CHANGELOG.lv.md) · [Bahasa Melayu](CHANGELOG.ms.md) · [नेपाली](CHANGELOG.ne.md) · [Nederlands](CHANGELOG.nl.md) · [Norsk](CHANGELOG.no.md) · [Polski](CHANGELOG.pl.md) · **Português** · [Português (Brasil)](CHANGELOG.pt-BR.md) · [Română](CHANGELOG.ro.md) · [Русский](CHANGELOG.ru.md) · [संस्कृतम्](CHANGELOG.sa.md) · [Slovenčina](CHANGELOG.sk.md) · [Shqip](CHANGELOG.sq.md) · [Српски](CHANGELOG.sr.md) · [Svenska](CHANGELOG.sv.md) · [ไทย](CHANGELOG.th.md) · [Türkçe](CHANGELOG.tr.md) · [Українська](CHANGELOG.uk.md) · [Oʻzbekcha](CHANGELOG.uz.md) · [Tiếng Việt](CHANGELOG.vi.md) · [简体中文](CHANGELOG.zh.md) · [繁體中文](CHANGELOG.zh-TW.md)

# Registo de alterações

Todas as versões do Lure, da mais recente para a mais antiga. O que chegou desde a última versão está em *Por lançar*. Os números de versão não levam prefixo `v`, tal como as etiquetas das versões.

## Não lançado

### Adicionado

- **Um nome já ocupado pergunta em vez de recusar.** Mover ou renomear para um nome que já existe ali abre uma caixa de diálogo com dois caminhos que pode editar: para onde vai o seu ficheiro, e para onde vai o ficheiro que está no caminho, a vermelho enquanto ainda estiver ocupado. Cada caminho é também desenhado como a barra de caminho desenha um, com as partes que diferem coloridas e encurtadas em último lugar. Ambos os campos têm uma lista; a do segundo tem as formas habituais de resolver isto — trocar de lugares (vai para a antiga pasta do seu ficheiro), trocar de nomes (fica onde está e fica com o nome antigo do seu ficheiro), trocar ambos (fica com o caminho antigo do seu ficheiro), `-1`, `-bak` e `-old` ao lado do seu próprio nome, e os dois nomes que os ficheiros tinham. Uma forma de resolver cujo caminho esteja ocupado fica acinzentada. Escolher uma preenche apenas o campo; Aplicar move ambos, ligações incluídas, e Cancelar não move nada. Escolher um nome já ocupado na lista pergunta o mesmo, tal como arrastar um ficheiro para uma pasta que já tenha esse nome.
- **`:graph` dentro de uma pasta abre o grafo dessa pasta** — o grafo filtrado por `path:"that/folder"`, tal como a sua própria caixa de pesquisa faria. Na raiz do cofre é o grafo inteiro, como antes.
- **Uma pasta que já tem esse nome fica vermelha** na lista ao mover, tal como um ficheiro com esse nome, para que o conflito apareça antes de escolher.

### Alterado

- **A oferta é sempre o que o Tab escreveria.** Onde os nomes deixam de concordar, o campo oferece o passo em direção ao primeiro deles, sendo a linha para a qual o Tab iria que decide isso; escrever por cima de um nome mantém a sua extensão no lugar, e a oferta aparece antes dela; uma pasta em que acabou de entrar oferece o seu primeiro passo. Antes, havia situações em que nada era oferecido e o Tab escrevia algo na mesma. O sublinhado da lista acompanha a oferta à medida que muda, e o Tab numa linha para a qual navegou com as setas aceita essa linha, e não a que está ao lado.
- **A oferta ignora maiúsculas e minúsculas.** Escrever `sch` oferece `Schemes`, escrito como o nome está; desfazer a oferta devolve as suas letras tal como as escreveu. Onde existem `Test` e `test`, é oferecido o que está escrito como escreveu.
- **Depois de premir Tab, o passo seguinte é oferecido de imediato**, tal como depois de escrever uma letra.
- **Os nomes que começam pelo que escreveu aparecem primeiro na lista**, marcados com uma linha ao lado — azul onde partilham mais do que escreveu, verde no ramo que a oferta segue onde se separam — antes dos nomes que apenas o contêm. Cada um deles sublinha o passo que <kbd>Tab</kbd> daria em direção a ele, não só o que está a ser oferecido.
- **A lista segue o cursor**, ou o início de uma seleção: mostra a pasta em que esse ponto está, filtrada pelas letras que o antecedem. No início de um nome, essa é a pasta inteira.
- **Apontar para uma linha mostra-a como a oferta** — o que escreveu continua seu e o resto do nome fica marcado — e afastar o ponteiro da lista traz a oferta de volta.
- **→ aceita uma letra da oferta** em vez de a aceitar inteira; <kbd>End</kbd> continua a aceitá-la por completo.
- **Backspace antes de uma extensão deixada sozinha sobe um nível de pasta**, tal como acontece num campo vazio; a extensão isolada desaparece.
- **O F2 num campo aberto transforma-o numa mudança de nome onde está**, mantendo o texto, o cursor e a seleção, e **Focar a barra de caminho** tira-lhe a mudança de nome do mesmo modo.
- **Qualquer outra coisa premida ou clicada entre as pressões recomeça os ciclos do F2 e do Focar a barra de caminho.**
- **As pastas aparecem a negrito na lista**, por isso a nota de uma pasta já não precisa de ser cinzenta para se distinguir: é roxa como qualquer outra nota.
- **A lista nunca é mais larga do que a barra de caminho.** Um nome que não caiba é encurtado da mesma forma que a barra de caminho encurta um, e mostrado por inteiro ao passar o rato.
- **PageUp e PageDown deslocam a lista pelo que ela mostra**, também a partir do campo, e a linha selecionada mantém o seu lugar no ecrã. <kbd>Home</kbd> e <kbd>End</kbd> trazem a primeira e a última linha à vista.
- **A lista mostra até 1000 entradas** antes de contar o resto, em vez de 100.
- **As pastas cedem espaço, a mais longa primeiro.** Quando falta espaço, o nome de pasta mais longo encurta até ao comprimento do seguinte mais longo, depois os dois juntos, e assim sucessivamente, cada um parando no seu limite mínimo. Antes, todas as pastas encurtavam ao mesmo tempo, proporcionalmente ao seu comprimento.
- **Os nomes encurtados deslizam em vez de saltar.** Um nome que cede é cortado ao pixel e esbate-se sob o seu `…`, de modo que nada depois dele na linha se move aos saltos enquanto um painel é redimensionado.

### Corrigido

- Num painel à direita, a lista abria por baixo do painel esquerdo até se escrever a primeira letra.
- Afastar o ponteiro da lista trazia a oferta de volta, mas não a sua cor.
- Um espaço onde um nome encurtado era dividido — `development guidelines` — desaparecia, colando as duas palavras.

## 1.4.0 — 2026-09-19[^1.4.0]

### Adicionado

- **Uma linha de Atalhos de teclado nas definições.** O seu botão abre a página *Atalhos de teclado* do Obsidian filtrada para este plugin, onde *Focar a barra de caminho* — que vem sem tecla atribuída — pode receber uma.
- **Uma barra de caminho nas abas que não têm nenhum ficheiro.** Uma aba vazia lê-se `vault / :blank`, o grafo `vault / :graph`, e qualquer outra vista sem nada a nomear recebe a sua própria etiqueta `:` — a aba de um plugin de página inicial lê-se `:home-launcher`. O campo ao lado é uma barra de endereços: escreva um caminho e <kbd>Enter</kbd> abre-o nessa aba, ou cria-o. Antes disto a linha ficava vazia — o plugin escondia o título do próprio Obsidian e não punha nada no lugar.
- **Uma página pode ser escrita, não só escolhida** — `:graph` e as restantes são um endereço, não apenas uma entrada da lista. Nenhum nome de ficheiro começa por dois pontos, por isso escrever um em qualquer lugar chama-as, e o campo veste a sua cor em vez de propor criar uma nota que nada poderia chamar-se.
- **Uma linha para o *Mostrar todos os tipos de ficheiro* do próprio Obsidian**, ao lado da regra dos ficheiros ocultos, já que ambos decidem o que uma lista pode mostrar: diz para procurar essa definição nas definições do próprio Obsidian e ativá-la para ver todos os ficheiros, e o botão ao lado abre essa página com a definição deslocada para a vista e destacada, tal como um resultado de pesquisa nas definições faria. Chamada pelas palavras do Obsidian, explicada em 45 línguas.
- **A raiz do cofre lista as páginas que uma aba pode conter** — `:graph`, `:search`, e quaisquer vistas que os seus plugins registem, entre elas uma página inicial ou um calendário. Escolha uma e a aba abre-a, tal como escolher uma nota abre a nota. As vistas que existem para mostrar um ficheiro ficam de fora, porque não haveria nada para mostrarem.
- **O separador do próprio cofre abre a sua página inicial**, quando um plugin a fornece, e fica sublinhado para o dizer; a pressão a seguir a essa dobra a árvore de ficheiros, e a pressão seguinte repõe exatamente o que estava aberto. Sem um plugin desses, a primeira pressão dobra, como antes.
- **Escreva um caminho a partir da raiz do sistema de ficheiros.** Um `/` à frente de um campo vazio abre-o em vez de ser engolido, cada barra seguinte nele pertence-lhe, e a lista passa a mostrar a máquina em vez do cofre.

### Alterado

- **F2 e Focar a barra de caminho premem Tab dentro do campo.** Fazem o que a tecla Tab faria ali — o degrau seguinte, completar o que escreveu, entrar numa pasta — e só saem onde o Tab volta à frente do caminho, o F2 para o título em linha, o comando para a nota. Antes, um campo em que tivesse escrito fazia o F2 recomeçar no nome e o comando fechar o campo.
- **O passo a seguir à saída do ciclo é a pasta raiz.** A pressão a seguir ao regresso do F2 ao título em linha, ou ao regresso do comando à nota, cai onde a volta do Tab cai — a raiz do cofre, o caminho completo no campo, com a primeira pasta marcada — por isso nenhum passo do ciclo fica apenas para o Tab.
- **Focar a barra de caminho percorre os mesmos degraus que o F2.** Abre no nome em vez do caminho completo, percorre os mesmos quatro degraus, e a pressão a seguir ao último fecha o campo e devolve o cursor à nota — antes, dava voltas aos degraus sem parar, e a única tecla que chegava à linha não conseguia sair dela.
- **Um nome já usado é avisado quando o utiliza, não enquanto o escreve.** Todo o nome escrito a caminho de `Notes.md` passa por nomes que podem ser ficheiros próprios, e o aviso costumava aparecer e desaparecer letra a letra. O que estiver errado na grafia de um nome continua a ser indicado à medida que o escreve.
- **Um separador cuja nota de pasta já esteja aberta revela a pasta** em vez de reabrir o que já está no ecrã — que é o que a sua segunda pressão sempre significou.
- **Onde está fica a negrito na lista**, não apenas a azul.
- **Tudo o que não é uma nota fica laranja na lista**, não só os tipos de texto para os quais o Obsidian não tem vista. O roxo destaca as notas numa pasta de conteúdo variado; uma só cor para o resto diz o mesmo mais depressa.

### Corrigido

- **Um Backspace sobre uma pasta clicada já não apaga o nome do cofre.** A barra que ficava no início era lida como um caminho a partir da raiz da máquina, o que esvaziava o segmento inicial — e fechar o campo com Escape nunca o repunha, pelo que a aba perdia o nome e o ícone do cofre para sempre. Uma barra inicial agora só conta como da máquina quando a sua primeira pasta existe mesmo, e o segmento inicial volta com qualquer forma de sair do campo.
- Fora do cofre, os ficheiros ficavam escondidos a não ser que a opção **Detetar todas as extensões de ficheiro** do Obsidian estivesse ativada — uma definição sobre o que o cofre indexa, aplicada a pastas que não estão no cofre. Um `.txt` ao lado das suas notas aparece listado lá fora de qualquer forma.
- A lista do nome do cofre não fazia nada numa aba sem nenhum ficheiro, que é exatamente a aba que usaria para ir para outro lado.
- Clicar no nome do cofre deixava o título do próprio Obsidian ao lado do caminho no campo, acinzentado, onde nunca aparece em mais nenhum momento: a linha mede-se por aquilo que já desenhou, e nesse instante tinha-se esvaziado para dar lugar ao campo.

- Clicar no espaço vazio abria o campo e depois perdia-o: revelar a nota no Explorador de ficheiros leva o cursor com ele, pelo que o campo ficava aberto e marcado enquanto cada tecla premida ia para a árvore.
- O degrau que mostra o caminho a partir da raiz do sistema desenhava um rasto do mesmo caminho ao lado do campo, sem se ajustar, pelo que um caminho profundo ficava pintado sobre si mesmo.

## 1.3.0 — 2026-09-17[^1.3.0]

### Adicionado

- **Trazer um ficheiro de fora para dentro do cofre.** Mova ou copie um ficheiro de qualquer ponto do disco para um caminho dentro do seu cofre; chega como uma nota a sério, e uma mudança só remove o original depois de a cópia ter sido bem-sucedida.
- **Largue texto ou um ficheiro sobre a barra para o escrever.** Sobre uma pasta: uma nova nota nessa pasta, com o nome que escrever. Sobre o nome da nota, ou sobre o separador de uma pasta que tenha nota de pasta: acrescentado ao fim dessa nota, depois de uma confirmação.
- **Criar uma nota de pasta** com uma segunda pressão naquilo que abre a pasta, quando está a correr um plugin de notas de pasta e a pasta ainda não tem nenhuma. É colocada onde as definições do próprio [Folder notes](https://github.com/LostPaul/obsidian-folder-notes) disserem.
- **Arraste uma pasta da barra de caminho para a barra de abas** para a abrir ali: a sua nota de pasta, se a tiver, ou então uma aba pousada nessa pasta.
- **A roda do rato percorre a lista.** Sobre um nome, a primeira volta abre a lista desse nome e cada volta seguinte move o realce uma linha. Uma linha que esteja a deslizar lateralmente fica com a roda para deslizar.
- **Saia pela frente do campo com as setas** para trazer para dentro a pasta anterior: <kbd>←</kbd> para uma pasta, <kbd>Shift</kbd>+<kbd>Home</kbd> (ou <kbd>Home</kbd> com a lista fechada) para todas.
- **O campo veste a cor daquilo que nomeia**, a mesma dessa linha na lista, e fica vermelho assim que nada lhe corresponde — o momento em que <kbd>Enter</kbd> criaria algo em vez de o abrir.
- **As notas de pasta estão a cinzento na lista**, para que se leiam como pertencendo à sua pasta e não como mais uma nota.
- **Clique com o botão do meio num separador** para abrir essa pasta numa nova aba: a sua nota de pasta, ou uma aba pousada nela.

### Alterado

- **O cadeado e o botão de renomear são um só controlo.** Fora do cofre, um cadeado vermelho e fechado ocupa o lugar do botão; abri-lo entrega o lugar ao botão, e sair do modo de renomear volta a fechá-lo.
- **A tecla de renomear também pergunta ao cadeado.** Fora do cofre, uma pressão faz o cadeado piscar; uma segunda pressão dentro de meio segundo concede o que o cadeado concede e abre o modo de renomear.
- **A tecla de renomear percorre um ciclo completo** — título em linha, nome, nome com extensão, caminho a partir do cofre, caminho a partir da raiz do sistema — e a pressão seguinte volta ao título em linha.
- **<kbd>Ctrl</kbd>+clique e clique com o botão do meio deixaram de ser sinónimos.** Um abre uma aba e vai para ela, o outro abre-a em segundo plano.
- **Clicar com o botão direito no nome da nota abre o menu do próprio ficheiro.**
- **A lista é tão alta quanto a janela permitir**, em vez dos 300 píxeis fixos do Obsidian.
- **Clicar numa pasta com um campo aberto mantém todo o caminho a seguir a ela**, e clicar dentro de uma pasta no campo lista o conteúdo dessa pasta por inteiro.
- **O separador abre uma nota de pasta a qualquer profundidade** com o Folder notes a correr, e fica sublinhado sempre que exista uma. Antes só funcionava para pastas de primeiro nível. Com os outros plugins de notas de pasta, o separador continua a revelar a pasta.

### Corrigido

- **Um campo aberto sobrevivia ao seu ficheiro.** Mudar para outra nota com a barra de caminho aberta deixava a barra a nomear o ficheiro antigo durante o resto da sessão.
- **Eliminar, Renomear e Fazer uma cópia eram recusados fora do cofre** com o cadeado aberto, e nunca chegavam a estar disponíveis para imagens, PDF e páginas.
- **<kbd>Ctrl</kbd>+<kbd>Enter</kbd> não fazia nada enquanto a lista estivesse aberta** — que é como qualquer campo abre.
- **<kbd>Enter</kbd> com a lista aberta mas nada realçado** não fazia nada; agora confirma aquilo que escreveu.
- **Uma barra que transbordava com todos os nomes já no seu mínimo não podia ser deslizada**, deixando o fim do caminho inacessível.
- **Desativar o plugin deixava um botão morto** no cabeçalho de todas as notas que tinha alterado.

## 1.2.0 — 2026-08-25[^1.2.0]

### Adicionado

- **Definição de idioma.** Por predefinição, o Lure segue o idioma do Obsidian, e pode ser fixado em qualquer um dos seus. É também a única forma de chegar às traduções para grego e sânscrito, que o próprio Obsidian não oferece. A etiqueta da definição mantém-se em inglês, para que possa sempre ser encontrada a partir de um idioma que não saiba ler.

## 1.1.2 — 2026-08-25[^1.1.2]

### Alterado

- **Folha de estilos mais leve.** A barra já não usa seletores `:has()` nem a maior parte das regras `!important`. Reajusta-se com menos trabalho, e os avisos da revisão de plugins passaram de 56 para 7.

## 1.1.1 — 2026-08-22[^1.1.1]

### Corrigido

- **Um nome de pasta curto podia ser desenhado com um espaço no meio** — `atlas` como `atl as` — porque o espaço reservado para a sua forma encurtada era mais largo do que o próprio nome.

## 1.1.0 — 2026-08-22[^1.1.0]

### Adicionado

- **Vocabulário do botão direito.** Uma pressão abre um menu; duas e três pressões copiam progressivamente mais — o nome, o nome com a extensão, o caminho. Os menus da barra passam a corresponder aos do Explorador de ficheiros, entrada a entrada.
- **Menus fora do cofre.** As linhas da lista e o visualizador externo oferecem abrir, *Copiar caminho* e *Mostrar na pasta*; com o cadeado aberto, também *Nova nota*, *Nova pasta*, *Fazer uma cópia*, *Renomear…* e *Eliminar*. Eliminar envia para a reciclagem do sistema e nunca é permanente.
- **Abrir noutro sítio.** <kbd>Ctrl</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> e o clique com o botão do meio sobre o nome da nota ou sobre uma pasta abrem-na numa nova aba, numa divisão ou numa janela. Ambos são arrastáveis, tal como as suas linhas no Explorador de ficheiros.
- **Arraste notas para a barra para as mover.** Largue uma nota, várias notas ou uma pasta sobre um segmento de pasta ou sobre o nome do cofre.
- **Comando: Focar a barra de caminho**, com o caminho todo selecionado — sem atalho predefinido, associe o seu.
- **Escreva um URL** na barra de caminho: `http(s)://` e `obsidian://` abrem como ligações, `file://` e caminhos codificados em percentagem abrem o ficheiro.
- **Completar com Tab**, à maneira de uma shell: cada pressão completa até onde os nomes da pasta concordam e para onde diferem. <kbd>Shift</kbd>+<kbd>Tab</kbd> anda para trás. Sem nada que restar para completar, <kbd>Tab</kbd> alarga antes a seleção: nome, nome com extensão, caminho a partir do cofre, caminho a partir da raiz do sistema.
- **A lista abre onde está** e pré-visualiza no campo aquilo para que aponta; sair da lista devolve-lhe o seu texto.
- **Mover uma nota para fora do cofre** depois de uma confirmação que conta as ligações que vai partir. É copiada para fora e depois enviada para a reciclagem, pelo que pode ser recuperada como qualquer nota eliminada.
- **Definição Mostrar extensões de ficheiro**, e os caminhos entre aspas (tal como o *Copiar como caminho* do Windows os produz) passam a ser compreendidos.
- **As definições aparecem na pesquisa de definições do Obsidian** no Obsidian 1.13 e posteriores.

### Alterado

- **Os caminhos longos cabem no painel.** Os nomes são encurtados a começar pelos menos úteis — o nome do cofre, depois a extensão, depois as pastas e, por último, o nome da própria nota — nunca para além do ponto em que deixariam de se distinguir. Passe o ponteiro sobre um nome encurtado para o ler por inteiro.
- **Clicar no nome da nota seleciona-o sem a extensão**, para que renomear deixe de correr o risco de mudar o tipo de ficheiro.
- **A tecla de renomear abre no nome sem a extensão**, e as pressões seguintes alargam a seleção.
- **Clicar numa pasta mantém o resto do caminho visível**, inclusive fora do cofre.
- **Navegar de volta para dentro do cofre abre os ficheiros como notas**, com ligações e retroligações, em vez de os abrir no visualizador externo.

### Corrigido

- **As etiquetas dos menus estavam em inglês em todos os idiomas**; passam a vir das próprias traduções do Obsidian.
- **A tecla de renomear ficava sem saída na caixa de diálogo de mudança de nome do Obsidian** quando a nota estava deslizada para lá do seu título.
- **<kbd>Esc</kbd> exigia duas pressões** para fechar o campo e a sua lista.
- **<kbd>Ctrl</kbd>+<kbd>Enter</kbd> abria uma ligação no editor** em vez de agir sobre a barra de caminho.
- **Renomear fora do cofre perdia o nome escrito** quando o cadeado era premido.
- **O Tab podia andar às voltas sem progredir** numa pasta que está ao lado da sua própria nota de pasta.

## 1.0.4 — 2026-08-13[^1.0.4]

### Adicionado

- **A nota em que está é marcada a azul** na lista, para que voltar à sua pasta mostre onde começou.

## 1.0.3 — 2026-08-13[^1.0.3]

### Documentação

- O README passa a ligar para a página do plugin no diretório da comunidade, e os README traduzidos são atualizados.

## 1.0.2 — 2026-08-13[^1.0.2]

### Alterado

- **Requer o Obsidian 1.8.7 ou posterior** (era 1.4.0). Duas funcionalidades de que a barra de caminho depende — copiar ficheiros e a dica de erro por baixo do campo — precisam dessa versão.
- **As transferências das versões trazem proveniência de compilação assinada**, para que possa confirmar com `gh attestation verify` que o `main.js` foi compilado a partir deste repositório.

### Corrigido

- **Abrir um ficheiro externo inexistente na aplicação predefinida falhava em silêncio**; a falha passa a ser comunicada.

## 1.0.1 — 2026-08-13[^1.0.1]

### Corrigido

- **No modo de renomear, uma nota entrava em conflito consigo própria** — voltar à sua própria pasta escondia o nome dela da lista, como se bloqueasse a sua própria mudança de nome.
- **A primeira revelação de pasta depois de iniciar o Obsidian não expandia nada.**
- **Escolher uma pasta na lista podia terminar o modo de renomear** em vez de entrar nela.
- **Edições externas podiam ser silenciosamente substituídas** por outro escritor, como o Sync ou um segundo painel. As escritas passam a ser atómicas.
- **A reposição do contorno de foco passava para outras vistas**; agora aplica-se apenas aos cabeçalhos que o Lure alterou.

### Documentação

- O README e o guia de utilização passam a estar disponíveis nos 44 idiomas que o plugin traz.
- O guia mencionava a definição *Detetar todas as extensões de ficheiro* (*Detect all file extensions*) do Obsidian, que agora se chama *Detetar todas as extensões de ficheiros* (*Show all file types*).

## 1.0.0 — 2026-08-10[^1.0.0]

Primeira versão. Substitui o nome do ficheiro no cabeçalho de uma nota por um trilho clicável e editável do seu caminho no cofre — uma barra de endereços para as suas notas, inspirada na do Dolphin.

### Adicionado

- **Clique numa pasta** para obter uma lista com o conteúdo da pasta que a contém, de modo a trocá-la pela vizinha e deixar o resto do caminho intacto.
- **Clique no separador** a seguir a uma pasta para a revelar e expandir no Explorador de ficheiros, ou para abrir a sua nota de pasta quando o Folder notes trata disso.
- **Clique no nome do ficheiro ou no espaço vazio** para escrever um caminho, com preenchimento automático: `/` desce, <kbd>Backspace</kbd> sobe, <kbd>Enter</kbd> confirma.
- **O modo mover/renomear** muda as mesmas interações para mover e renomear, com a mesma validação que o Obsidian faz.
- **<kbd>Ctrl</kbd> abre numa nova aba** — ou, no modo mover/renomear, copia a nota para lá.
- **<kbd>F2</kbd> alterna** entre o título em linha e a barra de caminho.
- **Fora do cofre** (desativado por predefinição): o nome do cofre abre os seus outros cofres, a pasta pessoal, a raiz do sistema de ficheiros e as unidades montadas. Nada lá fora é escrito enquanto não o desbloquear, e uma nota só pode ser copiada para fora do cofre, nunca movida.
- **45 idiomas.**

[^1.4.0]: Alterações desde 1.3.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.3.0...1.4.0>
[^1.3.0]: Alterações desde 1.2.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.2.0...1.3.0>
[^1.2.0]: Alterações desde 1.1.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.2...1.2.0>
[^1.1.2]: Alterações desde 1.1.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.1...1.1.2>
[^1.1.1]: Alterações desde 1.1.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.0...1.1.1>
[^1.1.0]: Alterações desde 1.0.4: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.4...1.1.0>
[^1.0.4]: Alterações desde 1.0.3: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.3...1.0.4>
[^1.0.3]: Alterações desde 1.0.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.2...1.0.3>
[^1.0.2]: Alterações desde 1.0.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.1...1.0.2>
[^1.0.1]: Alterações desde 1.0.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.0...1.0.1>
[^1.0.0]: A primeira versão: <https://github.com/Gelaende51/obsidian-lure/releases/tag/1.0.0>
