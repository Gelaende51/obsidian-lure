<!-- Tradução de README.md — estado: commit 2cbb237.
     Tradução automática (Claude Opus 5), não revista por falantes nativos.
     Correções são bem-vindas; o README em inglês é a versão de referência. -->

[English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · **Português** · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

Um plugin para o [Obsidian](https://obsidian.md) que transforma o nome do ficheiro na barra de cabeçalho de uma nota num trilho clicável e editável do seu caminho completo dentro do cofre — como a barra de endereços do gestor de ficheiros [Dolphin](https://apps.kde.org/dolphin/).

![Clique no separador a seguir a uma pasta: o ponteiro pousa sobre ele e o Explorador de ficheiros revelou e expandiu essa pasta](../images/breadcrumb.png)

Obsidian 1.8.7+ · apenas em computador · AGPL-3.0

## Divulgação sobre IA

- **Agente** — **Claude Opus 5** e **Claude Sonnet 5** (Anthropic, através do Claude Code): escreveram o TypeScript, o CSS, todos os 45 conjuntos de tradução e a documentação. As traduções são geradas por máquina e não foram revistas por falantes nativos.
- **Consumo** — 3 de agosto – 19 de setembro de 2026, 20 sessões, \~16 460 respostas: \~19,9 M tokens gerados, \~87,0 M enviados, \~5451,0 M releituras em cache (\~5558,0 M no total).
- **Origem** — o modelo aprendeu com código aberto, documentação e escrita comunitária publicados por outras pessoas. É aí que está a maior parte do mérito.
- **Autor** — Vault51: especificou todas as funcionalidades, testou cada iteração num cofre real, orientou as correções e reviu todos os resultados.

## Funcionalidades

- **Clique numa pasta** para obter uma lista com o conteúdo da pasta *que a contém* — troque uma pasta pela vizinha e deixe o resto do caminho intacto. O nome da nota funciona da mesma maneira, selecionando o nome sem a extensão.
- **Clique no separador** a seguir a uma pasta para a revelar e expandir no Explorador de ficheiros. Uma definição troca os dois papéis.
- **Clique com o botão direito ou arraste qualquer entrada** — o menu de contexto do próprio Explorador de ficheiros, entrada a entrada, e o mesmo comportamento ao arrastar. Os caminhos fora do cofre recebem um menu equivalente feito à medida, até *Eliminar* através da reciclagem do sistema.
- **Clique no nome do ficheiro ou no espaço vazio** para escrever um caminho, com preenchimento automático. `/` desce, <kbd>Backspace</kbd> sobe, <kbd>Enter</kbd> confirma — e um caminho que ainda não exista é simplesmente criado, com uma notificação a dizer onde foi parar.
- **A lista abre na entrada onde está** e, ao percorrê-la com as setas ou com o ponteiro, o campo vai sendo preenchido com aquilo para que está a apontar. Sair por qualquer um dos extremos da lista devolve o que tinha escrito, e afastar o ponteiro dela devolve o realce ao sítio onde estava.
- **O botão de lápis sobre pasta** muda estas mesmas interações para mover/renomear, com a mesma validação que o Obsidian faz.
- **Mantenha <kbd>Ctrl</kbd>** para abrir numa nova aba — ou, no modo mover/renomear, para copiar a nota para lá. O nome da nota e os segmentos de pasta aceitam os mesmos modificadores, e o mesmo arrastar, que as linhas correspondentes do Explorador de ficheiros.
- **Os nomes completam-se enquanto escreve** — onde os nomes da pasta concordam, a parte comum aparece depois do cursor, selecionada; escrever vai-a engolindo letra a letra, <kbd>Tab</kbd> ou <kbd>→</kbd> aceita-a inteira, <kbd>Backspace</kbd> devolve-a. A lista continua a filtrar pelo que escreveu, e não pelo que lhe foi oferecido.
- **<kbd>Tab</kbd> completa como uma shell**: estende o que escreveu até onde os nomes dessa pasta concordam, avança um passo de cada vez na direção de um deles quando não concordam, e só entra numa pasta quando resta um único nome. Passado o fim do caminho, alarga antes a seleção: nome, nome com extensão, caminho a partir do cofre, caminho a partir da raiz do sistema. <kbd>Shift</kbd>+<kbd>Tab</kbd> percorre o mesmo caminho ao contrário — marcando o que devolve, em vez de o apagar — e, passado o início, continua a subir pelo caminho e depois dá a volta até ao caminho do sistema. Em qualquer dos sentidos, uma volta completa traz de volta o caminho que construiu.
- **Clique com o botão direito para copiar** — duas vezes para o nome, três para tudo o que está à direita dele, e no espaço vazio para o caminho inteiro ou para o caminho do sistema.
- **Arraste uma nota para uma pasta da barra** para a mover para lá, com as ligações e tudo — o destino já está no ecrã, por isso é um só arrastar em vez de uma viagem pela árvore de ficheiros. O nome do cofre também serve, para a raiz. Uma seleção inteira move-se de uma vez, e uma pasta que não possa receber o que lhe é oferecido não mostra nada, em vez de falhar depois do facto.
- **Largue texto sobre a barra para o escrever** — sobre uma pasta ou sobre o nome do cofre, para dar nome a uma nova nota; sobre o nome da própria nota, para o acrescentar ao fim daquilo que está a ler. Um ficheiro vindo do ambiente de trabalho funciona da mesma maneira, e a barra fica orlada a azul enquanto o que largar for cair ali.
- **O campo veste a cor daquilo que nomeia** — a mesma cor que a sua linha tem na lista, cinzento para a nota de uma pasta — e **fica vermelho** assim que nada lhe corresponde, para que veja, antes de carregar em <kbd>Enter</kbd>, se vai abrir uma nota ou criar uma.
- **Os ficheiros HTML aparecem como páginas**, numa moldura sem qualquer permissão — sem scripts, sem rede, sem origem própria — com as folhas de estilo e as imagens que estão ao lado do ficheiro trazidas para dentro, para que uma página guardada continue a ter o aspeto dela. O código-fonte está a um clique de distância.
- **Escreva um URL** — `https://`, `obsidian://`, ou um caminho `file://` ou codificado em percentagem — e ele é aberto em vez de ser tratado como nome de nota. Os endereços web vão para uma aba do visualizador Web do próprio Obsidian, se o tiver ativado.
- **Os caminhos longos encurtam onde as letras são dispensáveis** — nunca para além do que distingue uma pasta da que está ao lado, de forma suave e não letra a letra — e só deslizam quando já não há nada para comprimir. Aponte para um nome encurtado para o ver por inteiro.
- **<kbd>F2</kbd>** alterna entre o título em linha e a barra de caminho, abrindo no nome sem a extensão e alargando até aos caminhos completos nas pressões seguintes. Passa sem tropeços pela caixa de diálogo de mudança de nome do Obsidian quando o título está fora de vista. Um comando *Focar a barra de caminho* percorre os mesmos degraus sem mudar o nome; a linha de *Atalhos de teclado* das definições leva-o a associá-lo a uma tecla.
- **Clique no nome do cofre** para percorrer os seus outros cofres, a pasta pessoal, a raiz do sistema de ficheiros e as unidades montadas sem trocar de cofre. Só de leitura até abrir o cadeado vermelho que ali ocupa o lugar do botão de renomear, e com a cor de erro à volta durante todo o tempo. Desativado por predefinição — ver [fora do cofre](#fora-do-cofre).
- **A raiz do cofre lista as páginas que uma aba pode conter** — `:graph`, `:search`, e quaisquer vistas que os seus plugins registem. Escolha uma, ou escreva-a: nenhum nome de ficheiro começa por dois pontos, por isso as etiquetas servem também de endereço. Com um plugin de página inicial instalado, o separador do próprio cofre abre essa página no primeiro clique e dobra a árvore de ficheiros no seguinte.
- **Uma linha nas abas que não têm nenhum ficheiro** — uma aba vazia lê-se `vault / :blank`, o grafo `vault / :graph`, e o campo ao lado é uma barra de endereços: escreva um caminho e <kbd>Enter</kbd> abre-o nessa aba, ou cria-o. As abas da barra lateral mantêm o título do próprio Obsidian.
- **Dois níveis de aviso** — vermelho fora do cofre, laranja para ficheiros de texto para os quais o Obsidian não tem editor. Ver [as duas cores de aviso](usage.pt.md#as-duas-cores-de-aviso).
- **Ícones adaptáveis ao tema**, trocados a partir de um snippet CSS — e **46 idiomas**: todos os que o Obsidian traz, mais grego e sânscrito, para os quais ele não tem definição. Escolha um só para o plugin ou siga o do próprio Obsidian.
- **Definições:** idioma, alinhamento, predefinições de separador, que clique abre a lista, nome do cofre, ficheiros ocultos, extensões de ficheiro.

![A mesma lista no modo mover/renomear: o nome atual do ficheiro fixado no topo, as pastas vizinhas por baixo e as notas existentes a cinzento](../images/dropdown.png)

*No modo mover/renomear, a mesma lista muda o que oferece: o nome atual da nota fixado no topo, para a mover sem lhe mudar o nome; as pastas para onde a pode mover; e os nomes já ocupados a cinzento, para que nada seja substituído por acidente.*

→ [Guia de utilização completo](usage.pt.md)

## Fora do cofre

As políticas de programação do Obsidian exigem que os plugins expliquem qualquer acesso a ficheiros fora do cofre, portanto, com toda a clareza:

**Se sequer faz alguma destas coisas.** Só se ativar o **Acesso a ficheiros externos**, que está **desativado por predefinição**. Com essa opção desativada, não há forma de chegar a um caminho externo a partir do plugin, e nada do código descrito abaixo chega a correr.

**O que lê.** Apenas quando lho pedir. Clicar no nome do cofre lista os seus outros cofres — lidos do próprio `obsidian.json` do Obsidian — mais a pasta pessoal, a raiz do sistema de ficheiros e as unidades montadas (`/proc/mounts` no Linux, `/Volumes` no macOS, letras de unidade no Windows). Navegar a partir daí lista o conteúdo das pastas, e abrir um ficheiro lê esse único ficheiro.

**O que escreve.** Nada, até carregar num botão que o diga. Há dois botões desses, cada um a cobrir apenas a sua própria superfície:

- O botão **Editar como texto** do visualizador desbloqueia o ficheiro que tem à frente, para esse ficheiro e nessa aba. As suas alterações passam então a ser gravadas nele à medida que escreve.
- O **cadeado vermelho** do cabeçalho, que ocupa o lugar do botão de renomear enquanto a barra de caminho aponta para fora do seu cofre, desbloqueia criar, renomear, mover e eliminar em caminhos externos — e devolve o lugar ao botão assim que é aberto. Volta a fechar-se quando regressa ao interior do cofre, e também na pressão que sai do modo de renomear, para que a permissão nunca sobreviva à pasta para a qual a concedeu.

Nenhum destes desbloqueios é guardado no espaço de trabalho nem nas definições, por isso a escrita nunca fica armada num ficheiro que não se lembra de ter aberto. Em nenhum dos estados se substitui seja o que for — um destino já existente é recusado, usando a criação exclusiva do próprio sistema de ficheiros em vez de uma verificação que podia perder a corrida.

Mover uma nota para *fora* do cofre é a única escrita que custa algo que nada devolve: o Obsidian só atualiza ligações dentro do cofre, por isso todas as ligações que apontam para essa nota ficam partidas. É oferecida por trás de uma caixa de diálogo que o diz e que conta as notas afetadas, e acontece como copiar-e-depois-eliminar através da própria reciclagem do Obsidian, pelo que é tão recuperável como eliminar uma nota. Manter <kbd>Ctrl</kbd> copia-a para fora em vez de a mover.

**Porquê.** As notas de que precisa estão muitas vezes noutro cofre, numa pasta de sincronização ou numa pen USB, e a resposta do próprio Obsidian — trocar de cofre — fecha tudo o que tinha aberto. Isto permite-lhe ir ver sem sair, e corrigir uma gralha já que ali está.

**A limitação.** O editor do Obsidian está preso a ficheiros dentro do cofre, por isso um ficheiro externo **não pode** ser aberto como uma nota a sério, com ligações, retroligações e o resto; nenhum plugin consegue fazer isso. Em vez disso, o Lure mostra-o no seu próprio visualizador (Markdown, imagens, áudio, vídeo, PDF), com *Abrir externamente* para tudo o resto. A barra de caminho mantém-se orlada com a cor de erro sempre que aponta para fora do seu cofre, e o trilho começa no local que escolheu — o nome de um cofre, a sua pasta pessoal, uma unidade — e não na disposição de pastas da máquina.

## Instalação

**No Obsidian:** abra **Definições → Plugins não oficiais → Procurar**, pesquise por *Lure* e depois carregue em *Instalar* e *Ativar* — ou carregue em *Add to Obsidian* em [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure).

**Manual:** transfira `main.js`, `manifest.json` e `styles.css` da [versão mais recente](https://github.com/Gelaende51/obsidian-lure/releases) para `<vault>/.obsidian/plugins/lure/` e ative-o em **Definições → Plugins não oficiais**.

**BRAT:** adicione `Gelaende51/obsidian-lure` como plugin beta.

**A partir do código-fonte:** `npm install && npm run build` — ver [desenvolvimento](../development.md).

## Compatibilidade

Não é necessário nenhum plugin. O **Explorador de ficheiros** do núcleo, se estiver ativado, é o que revela as pastas na barra lateral; sem ele, esses cliques não fazem nada.

Testado com os plugins da comunidade que partilham o cabeçalho da nota ou respondem ao clique numa pasta — nas duas ordens de carregamento, cada um ligado e desligado:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — o separador abre a nota de uma pasta em vez de revelar a pasta, tornando cada segmento do caminho um sítio onde pode ir, por mais fundo que seja: a nota é resolvida a partir da convenção desse plugin, em vez de se deixar a resposta a cargo dele. É também o único que publica uma convenção dessas; o [Folder Note](obsidian://show-plugin?id=folder-note-plugin) e o [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) não publicam nenhuma e nunca reclamam o caminho no cabeçalho, pelo que, com esses, o separador revela a pasta como de costume.
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer) e [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — ambos desenham no mesmo elemento do cabeçalho; o Lure mantém a barra seja qual for o que carregue primeiro, e desligar qualquer um deles deixa o outro intacto.
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header), [Running Head](obsidian://show-plugin?id=running-head), [Crumbs](obsidian://show-plugin?id=crumbs-obsidian), [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — têm a sua própria faixa e coexistem sem problemas.

Apenas em computador — o modelo de interação precisa de passagem do ponteiro, cliques precisos e teclado. Os resultados completos, as expectativas que ficam por confirmar e a comparação com o Quick Explorer e o Breadcrumbs estão em [compatibilidade](../compatibility.md).

## Como contribuir

- Problemas e pull requests são bem-vindos — sobretudo **correções de tradução**, já que todos os 45 idiomas são traduzidos por máquina e não foram revistos por falantes nativos. Ver [desenvolvimento](../development.md) para a preparação do ambiente e as regras de base.
- **Registo de problemas:** https://github.com/Gelaende51/obsidian-lure/issues
- **Donativos:** [Ko-fi](https://ko-fi.com/vault51). De qualquer forma, o plugin é gratuito e licenciado sob a AGPL; as gorjetas são agradecidas, nunca exigidas. A utilização pretendida é a compensação de carbono — uma intenção, não um compromisso: nada é compensado enquanto o total não for suficiente para valer o esforço, e esta linha dirá que sim assim que alguma coisa o tiver sido de facto.

## Créditos

- **Vault51** — autor: conceção, requisitos e testes manuais do princípio ao fim.
- **Claude Opus 5** e **Claude Sonnet 5** (Anthropic, através do Claude Code) — implementação, traduções e documentação, sob a orientação do autor. Ver [divulgação sobre IA](#divulgação-sobre-ia).
- **[Obsidian](https://obsidian.md)** — a aplicação que isto estende e a origem de todos os componentes que o plugin usa: a sua API de plugins, o conjunto de ícones Lucide por trás de `setIcon`, a instância de i18next incluída de onde são lidas as etiquetas dos menus de contexto, e as suas próprias classes e variáveis CSS. Nada de terceiros é incluído; o plugin **não tem dependências em tempo de execução**.

> **A equipa do Obsidian não participou neste projeto de forma alguma** — não o escreveu, não o reviu, não o subscreve nem o apoia. Obsidian é uma marca registada da Dynalist Inc.; este é um plugin independente e sem qualquer afiliação.

Quem contribuir será listado aqui à medida que as contribuições chegarem.

## Ligações


- **Documentação:** [docs/](../)
- **Registo de alterações:** [CHANGELOG.md](CHANGELOG.pt.md)
- **Página do plugin:** https://community.obsidian.md/plugins/lure
- **Presença web / código-fonte:** https://github.com/Gelaende51/obsidian-lure
- **Donativos:** [Ko-fi](https://ko-fi.com/vault51) — ver [como contribuir](#como-contribuir).
- **Licença:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. Os forks e as compilações redistribuídas têm de disponibilizar o seu código-fonte sob a mesma licença.
