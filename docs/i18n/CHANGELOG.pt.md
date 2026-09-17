<!-- Tradução de CHANGELOG.md — estado: commit 973105b.
     Tradução automática (Claude Opus 5), não revista por falantes nativos.
     Correções são bem-vindas; o CHANGELOG em inglês é a versão de referência. -->

[English](../../CHANGELOG.md) · [العربية](CHANGELOG.ar.md) · [አማርኛ](CHANGELOG.am.md) · [Беларуская](CHANGELOG.be.md) · [বাংলা](CHANGELOG.bn.md) · [Català](CHANGELOG.ca.md) · [Čeština](CHANGELOG.cs.md) · [Dansk](CHANGELOG.da.md) · [Deutsch](CHANGELOG.de.md) · [Ελληνικά](CHANGELOG.el.md) · [Español](CHANGELOG.es.md) · [فارسی](CHANGELOG.fa.md) · [Suomi](CHANGELOG.fi.md) · [Français](CHANGELOG.fr.md) · [Gaeilge](CHANGELOG.ga.md) · [עברית](CHANGELOG.he.md) · [Magyar](CHANGELOG.hu.md) · [Bahasa Indonesia](CHANGELOG.id.md) · [Italiano](CHANGELOG.it.md) · [日本語](CHANGELOG.ja.md) · [ქართული](CHANGELOG.ka.md) · [ភាសាខ្មែរ](CHANGELOG.kh.md) · [한국어](CHANGELOG.ko.md) · [Latviešu](CHANGELOG.lv.md) · [Bahasa Melayu](CHANGELOG.ms.md) · [नेपाली](CHANGELOG.ne.md) · [Nederlands](CHANGELOG.nl.md) · [Norsk](CHANGELOG.no.md) · [Polski](CHANGELOG.pl.md) · **Português** · [Português (Brasil)](CHANGELOG.pt-BR.md) · [Română](CHANGELOG.ro.md) · [Русский](CHANGELOG.ru.md) · [संस्कृतम्](CHANGELOG.sa.md) · [Slovenčina](CHANGELOG.sk.md) · [Shqip](CHANGELOG.sq.md) · [Српски](CHANGELOG.sr.md) · [Svenska](CHANGELOG.sv.md) · [ไทย](CHANGELOG.th.md) · [Türkçe](CHANGELOG.tr.md) · [Українська](CHANGELOG.uk.md) · [Oʻzbekcha](CHANGELOG.uz.md) · [Tiếng Việt](CHANGELOG.vi.md) · [简体中文](CHANGELOG.zh.md) · [繁體中文](CHANGELOG.zh-TW.md)

# Registo de alterações

Todas as versões do Lure, da mais recente para a mais antiga. O que chegou desde a última versão está em *Por lançar*. Os números de versão não levam prefixo `v`, tal como as etiquetas das versões.

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
