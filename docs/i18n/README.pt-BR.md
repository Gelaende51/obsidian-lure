<!-- Tradução de README.md — estado: commit 2cbb237.
     Tradução automática (Claude Opus 5), não revisada por falantes nativos.
     Correções são bem-vindas; o README em inglês é a versão de referência. -->

[English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português](README.pt.md) · **Português (Brasil)** · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

Um plugin para o [Obsidian](https://obsidian.md) que transforma o nome do arquivo na barra de cabeçalho de uma nota em uma trilha (breadcrumb) clicável e editável do caminho completo no cofre — como a barra de endereço do gerenciador de arquivos [Dolphin](https://apps.kde.org/dolphin/).

![Clique no separador depois de uma pasta: o ponteiro está sobre ele, e o Explorador de arquivos revelou e expandiu essa pasta](../images/breadcrumb.png)

Obsidian 1.8.7+ · somente desktop · AGPL-3.0

## Divulgação sobre IA

- **Agente** — **Claude Opus 5** e **Claude Sonnet 5** (Anthropic, via Claude Code): escreveram o TypeScript, o CSS, todos os 45 conjuntos de tradução e a documentação. As traduções são geradas automaticamente e não foram revisadas por falantes nativos.
- **Consumo** — 3 de ago. a 19 de set. de 2026, 20 sessões, \~16.460 respostas: \~19,9 milhões de tokens gerados, \~87,0 milhões enviados, \~5.451,0 milhões de releituras em cache (\~5.558,0 milhões no total).
- **Origem** — o modelo aprendeu com código aberto, documentação e textos da comunidade publicados por outras pessoas. A maior parte do crédito é delas.
- **Autor** — Vault51: especificou cada funcionalidade, testou cada iteração em um cofre real, orientou as correções e revisou todo o resultado.

## Funcionalidades

- **Clique em uma pasta** para abrir uma lista com o conteúdo da pasta *pai* — troque uma pasta por outra do mesmo nível e deixe o resto do caminho como está. O nome da nota funciona do mesmo jeito, selecionando o nome sem a extensão.
- **Clique no separador** depois de uma pasta para revelá-la e expandi-la no Explorador de arquivos. Uma configuração inverte os dois papéis.
- **Clique com o botão direito ou arraste qualquer entrada** — o próprio menu de contexto do Explorador de arquivos, item por item, e o mesmo comportamento ao arrastar. Caminhos fora do cofre recebem um menu equivalente feito para eles, incluindo *Excluir*, que passa pela lixeira do sistema.
- **Clique no nome do arquivo ou no espaço vazio** para digitar um caminho, com preenchimento automático. `/` desce, <kbd>Backspace</kbd> sobe um nível, <kbd>Enter</kbd> confirma — e um caminho que ainda não existe é simplesmente criado, com um aviso dizendo onde ele foi parar.
- **A lista abre na entrada onde você está**, e percorrê-la com as setas ou passando o mouse preenche o campo com aquilo para que você está apontando. Uma linha que você aponta é mostrada como a sugestão que ela faria; sair por qualquer uma das pontas da lista devolve o que você tinha digitado, e tirar o ponteiro de cima dela devolve o destaque para onde você estava. A lista segue o cursor: a pasta em que ele está, filtrada pelas letras à frente dele.
- **O botão de lápis sobre pasta** faz as mesmas interações moverem/renomearem, com a mesma validação que o Obsidian usa. Um nome já em uso fica vermelho na lista, e escolhê-lo pergunta se você quer renomear o que está no caminho, trocar de lugar ou trocar de nome com ele.
- **Segure <kbd>Ctrl</kbd>** para abrir em uma nova aba — ou, no modo mover/renomear, para copiar a nota para lá em vez de movê-la. O nome da nota e os segmentos de pasta aceitam os mesmos modificadores, e o arrastar, que as linhas correspondentes do Explorador de arquivos.
- **Os nomes se completam enquanto você digita** — o que o <kbd>Tab</kbd> escreveria aparece depois do cursor, selecionado e escrito do jeito que o nome está, não importando a capitalização que você digitou — a coincidência dos nomes da pasta, ou o passo em direção ao primeiro deles; digitar vai consumindo-o letra por letra, <kbd>→</kbd> aceita uma letra, <kbd>Tab</kbd> ou <kbd>End</kbd> aceita tudo de uma vez, <kbd>Backspace</kbd> desfaz. A lista continua filtrando pelo que você digitou, não pelo que foi sugerido.
- **<kbd>Tab</kbd> completa como um shell**: estende o que você digitou até onde os nomes daquela pasta coincidem, avança em direção a um deles um passo por vez quando não coincidem, e só entra em uma pasta quando resta um único nome. Depois do fim do caminho, ele amplia a seleção: nome, nome com extensão, caminho a partir do cofre, caminho a partir da raiz do sistema. <kbd>Shift</kbd>+<kbd>Tab</kbd> faz o mesmo percurso ao contrário — marcando o que devolve em vez de apagar — e, depois do início, continua subindo pelo caminho e então dá a volta até o caminho do sistema. Em qualquer direção, uma volta completa retorna ao caminho que você montou.
- **Clique com o botão direito para copiar** — duas vezes para um nome, três vezes para tudo à direita dele, e no espaço vazio para o caminho inteiro ou o caminho do sistema.
- **Arraste uma nota para uma pasta da barra** para movê-la para lá, com links e tudo — o destino já está na tela, então basta um arrasto em vez de uma viagem pela árvore de arquivos. O nome do cofre também funciona, para a raiz. Uma seleção inteira se move de uma vez, e uma pasta que não pode receber o que está sendo oferecido não mostra nada, em vez de falhar depois do fato.
- **Solte texto na barra para registrá-lo** — sobre uma pasta ou o nome do cofre para dar nome a uma nova nota ali, sobre o próprio nome da nota para acrescentá-lo ao final do que você está lendo. Um arquivo da sua área de trabalho funciona do mesmo jeito, e a barra ganha um contorno azul enquanto o item cairia nela.
- **O campo assume a cor do que ele nomeia** — a mesma cor que a linha correspondente tem na lista, cinza para a nota de uma pasta — e **fica vermelho** assim que nada corresponde a ele, para você ver, antes de apertar <kbd>Enter</kbd>, se vai abrir uma nota ou criar uma.
- **Arquivos HTML aparecem como páginas**, em um quadro com todas as permissões negadas — sem scripts, sem rede, sem origem própria — e com as folhas de estilo e imagens que estão ao lado do arquivo incorporadas, para que uma página salva continue com a mesma aparência. O código-fonte está a um clique.
- **Digite uma URL** — `https://`, `obsidian://`, ou um caminho `file://` ou com codificação percentual — e ela é aberta em vez de ser tratada como nome de nota. Endereços web vão para uma aba do Visualizador web do próprio Obsidian, se você o tiver ativado.
- **Caminhos longos encurtam onde as letras são dispensáveis** — nunca além do que distingue uma pasta da vizinha, de forma suave em vez de letra por letra — e só rolam quando não sobra nada para comprimir. Aponte para um nome encurtado para vê-lo por completo.
- **<kbd>F2</kbd>** alterna entre o título embutido e a barra de caminho, abrindo no nome sem a extensão e ampliando até os caminhos completos a cada novo toque. Ele passa sem problemas pela caixa de diálogo de renomear do Obsidian quando o título está fora da área visível. Um comando *Focar a barra de caminho* percorre os mesmos degraus sem renomear; a linha de *Atalhos* das configurações leva você a atribuir um.
- **Clique no nome do cofre** para navegar pelos seus outros cofres, pela pasta pessoal, pela raiz do sistema de arquivos e pelas unidades montadas, sem trocar de cofre. Tudo é somente leitura até você abrir o cadeado vermelho que ocupa ali o lugar do botão de renomear, e a barra fica com moldura na cor de erro o tempo todo. Desativado por padrão — veja [fora do cofre](#fora-do-cofre).
- **A raiz do cofre lista as páginas que um painel pode conter** — `:graph`, `:search`, e o que quer que seus plugins registrem. Escolha uma, ou digite-a: dois-pontos não inicia nenhum nome de arquivo, então os rótulos também servem de endereço. `:graph` digitado dentro de uma pasta abre o grafo dessa pasta. Com um plugin de página inicial instalado, o próprio separador do cofre abre essa página no primeiro clique e recolhe a árvore de arquivos no seguinte.
- **Uma linha em painéis que não contêm nenhum arquivo** — uma aba vazia mostra `vault / :blank`, o grafo `vault / :graph`, e o campo ao lado é uma barra de endereço: digite um caminho e <kbd>Enter</kbd> o abre nesse painel, ou o cria. Painéis na barra lateral mantêm o próprio título do Obsidian.
- **Dois níveis de aviso** — vermelho fora do cofre, laranja para arquivos de texto para os quais o Obsidian não tem editor. Veja [as cores de aviso](usage.pt-BR.md#as-duas-cores-de-aviso).
- **Ícones adaptáveis ao tema**, trocados por um snippet CSS — e **46 idiomas**: todos os que o Obsidian oferece, mais grego e sânscrito, para os quais ele não tem configuração. Escolha um só para o plugin ou siga o do próprio Obsidian.
- **Configurações:** idioma, alinhamento, predefinições de separador, qual clique abre a lista, nome do cofre, arquivos ocultos (dot files), extensões de arquivo.

![A mesma lista no modo mover/renomear: o nome atual do arquivo fixado no topo, as pastas do mesmo nível abaixo dele e as notas existentes em cinza](../images/dropdown.png)

*No modo mover/renomear, a mesma lista muda o que oferece: o nome atual da nota fixado no topo, para movê-la sem renomear, pastas para onde movê-la e nomes já em uso em vermelho; escolher um deles pergunta o que fazer com o arquivo que está no caminho.*

→ [Guia de uso completo](usage.pt-BR.md)

## Fora do cofre

As políticas para desenvolvedores do Obsidian exigem que os plugins expliquem qualquer acesso a arquivos fora do cofre; então, sem rodeios:

**Se ele faz alguma dessas coisas.** Só se você ativar **Acesso a arquivos externos**, que vem **desativado por padrão**. Com essa opção desativada, não há como chegar a um caminho externo pelo plugin, e nenhum dos códigos descritos abaixo chega a ser executado.

**O que ele lê.** Só quando você pede. Clicar no nome do cofre lista seus outros cofres — lidos do próprio `obsidian.json` do Obsidian — além da sua pasta pessoal, da raiz do sistema de arquivos e das unidades montadas (`/proc/mounts` no Linux, `/Volumes` no macOS, letras de unidade no Windows). Navegar a partir daí lista o conteúdo das pastas, e abrir um arquivo lê aquele único arquivo.

**O que ele escreve.** Nada, até você apertar um botão que diga isso. Há dois botões assim, cada um valendo só para a sua própria área:

- O botão **Editar como texto** do visualizador desbloqueia o arquivo que está na sua frente, só para aquele arquivo e naquela aba. A partir daí, suas edições são salvas nele enquanto você digita.
- O **cadeado vermelho** do cabeçalho, que ocupa o lugar do botão de renomear enquanto a barra de caminho aponta para fora do seu cofre, desbloqueia criar, renomear, mover e excluir em caminhos externos — e, depois de aberto, devolve o lugar ao botão. Ele volta a travar quando você retorna ao cofre e no toque que sai do modo renomear, então a permissão nunca dura mais do que a pasta para a qual você a concedeu.

Nenhum dos dois desbloqueios é guardado no espaço de trabalho ou nas configurações, então a escrita nunca fica liberada em um arquivo que você não se lembra de ter aberto. Nada é sobrescrito em nenhum dos estados — um destino que já existe é recusado, usando a criação exclusiva do próprio sistema de arquivos em vez de uma verificação que poderia perder uma condição de corrida.

Mover uma nota *para fora* do seu cofre é a única escrita com um custo que nada pode desfazer: o Obsidian só atualiza links dentro do cofre, então todo link que aponta para essa nota quebra. Por isso ela fica atrás de uma caixa de diálogo que avisa isso e conta as notas afetadas, e acontece como uma cópia seguida de exclusão pela própria lixeira do Obsidian, então é tão recuperável quanto excluir uma nota. Segurar <kbd>Ctrl</kbd> copia a nota para fora em vez de movê-la.

**Por quê.** As notas que você quer muitas vezes estão em outro cofre, em uma pasta sincronizada ou em um pendrive, e a resposta do próprio Obsidian — trocar de cofre — fecha tudo o que você tinha aberto. Assim você pode ir dar uma olhada sem sair, e corrigir um erro de digitação enquanto está lá.

**A limitação.** O editor do Obsidian está vinculado a arquivos dentro do cofre, então um arquivo externo **não pode** ser aberto como uma nota de verdade, com links, backlinks e todo o resto; nenhum plugin consegue fazer isso. Em vez disso, o Lure o mostra no seu próprio visualizador (Markdown, imagens, áudio, vídeo, PDF), com *Abrir externamente* para todo o resto. A barra de caminho fica com moldura na cor de erro sempre que aponta para fora do seu cofre, e a trilha começa no local que você escolheu — um nome de cofre, sua pasta pessoal, uma unidade — e não na estrutura de diretórios da máquina.

## Instalação

**No Obsidian:** abra **Configurações → Plugins não oficiais → Procurar**, pesquise por *Lure* e depois clique em *Instalar* e *Ativar* — ou clique em *Add to Obsidian* em [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure).

**Manual:** baixe `main.js`, `manifest.json` e `styles.css` da [versão mais recente](https://github.com/Gelaende51/obsidian-lure/releases) para `<vault>/.obsidian/plugins/lure/` e depois ative o plugin em **Configurações → Plugins não oficiais**.

**BRAT:** adicione `Gelaende51/obsidian-lure` como plugin beta.

**A partir do código-fonte:** `npm install && npm run build` — veja [desenvolvimento](../development.md).

## Compatibilidade

Nenhum plugin é necessário. O **Explorador de arquivos** nativo, se estiver ativado, é o que revela as pastas na barra lateral; sem ele, esses cliques não fazem nada.

Testado com os plugins da comunidade que compartilham o cabeçalho da nota ou respondem ao clique em pastas — nas duas ordens de carregamento, cada um ativado e desativado:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — o separador abre a nota da pasta em vez de revelar a pasta, fazendo de cada segmento do caminho um lugar aonde você pode ir, por mais fundo que esteja: a nota é encontrada seguindo a própria convenção daquele plugin, em vez de deixar a resposta por conta dele. Ele também é o único que publica uma convenção assim; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) e [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) não publicam nenhuma e nunca assumem o caminho do cabeçalho, então com eles o separador revela a pasta normalmente.
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer) e [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — ambos desenham no mesmo elemento do cabeçalho; o Lure mantém a barra independentemente de qual carregue primeiro, e desativar qualquer um deles deixa o outro intacto.
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header), [Running Head](obsidian://show-plugin?id=running-head), [Crumbs](obsidian://show-plugin?id=crumbs-obsidian), [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — cada um tem a sua própria faixa, e eles convivem.

Somente desktop — o modelo de interação precisa de passar o mouse, cliques precisos e um teclado. Os resultados completos, as expectativas pendentes e a comparação com o Quick Explorer e o Breadcrumbs estão em [compatibilidade](../compatibility.md).

## Como contribuir

- Issues e pull requests são bem-vindos — especialmente **correções de tradução**, já que todos os 45 idiomas são traduzidos automaticamente e não foram revisados por falantes nativos. Veja [desenvolvimento](../development.md) para a configuração do ambiente e as regras básicas.
- **Rastreador de problemas:** https://github.com/Gelaende51/obsidian-lure/issues
- **Doações:** [Ko-fi](https://ko-fi.com/vault51). O plugin é gratuito e licenciado sob a AGPL de qualquer forma; contribuições são bem-vindas, mas nunca obrigatórias. O uso pretendido é a compensação de carbono — uma intenção, não um compromisso: nada é compensado até o total ser grande o suficiente para valer o esforço, e esta linha vai dizer isso assim que algo tiver sido de fato compensado.

## Créditos

- **Vault51** — autor: design, requisitos e testes manuais do começo ao fim.
- **Claude Opus 5** e **Claude Sonnet 5** (Anthropic, via Claude Code) — implementação, traduções e documentação, sob a direção do autor. Veja [Divulgação sobre IA](#divulgação-sobre-ia).
- **[Obsidian](https://obsidian.md)** — o aplicativo que este plugin estende, e a origem de todos os componentes que ele usa: sua API de plugins, o conjunto de ícones Lucide por trás de `setIcon`, a instância embutida do i18next de onde vêm os rótulos do menu de contexto, e suas próprias classes e variáveis CSS. Nada de terceiros é empacotado; o plugin **não tem dependências em tempo de execução**.

> **A equipe do Obsidian não participou deste projeto de forma alguma** — não o escreveu, revisou, endossou nem apoiou. Obsidian é uma marca registrada da Dynalist Inc.; este é um plugin independente e sem vínculo com ela.

Os colaboradores serão listados aqui à medida que as contribuições chegarem.

## Links


- **Documentação:** [docs/](../)
- **Registro de alterações:** [CHANGELOG.pt-BR.md](CHANGELOG.pt-BR.md)
- **Página do plugin:** https://community.obsidian.md/plugins/lure
- **Presença na web / código-fonte:** https://github.com/Gelaende51/obsidian-lure
- **Doações:** [Ko-fi](https://ko-fi.com/vault51) — veja [como contribuir](#como-contribuir).
- **Licença:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. Forks e builds redistribuídos devem disponibilizar o código-fonte sob a mesma licença.
