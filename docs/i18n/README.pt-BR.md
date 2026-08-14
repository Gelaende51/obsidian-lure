<!-- Tradução de README.md — estado: commit 33b0e60.
     Tradução automática (Claude Opus 5), não revisada por falantes nativos.
     Correções são bem-vindas; o README em inglês é a versão de referência. -->

[English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português](README.pt.md) · **Português (Brasil)** · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

Um plugin do [Obsidian](https://obsidian.md) que transforma o nome do arquivo na barra de cabeçalho de uma nota em um caminho completo clicável e editável, segmento por segmento — como a barra de endereços do gerenciador de arquivos [Dolphin](https://apps.kde.org/dolphin/).

![Clique no separador logo depois de uma pasta: o ponteiro está sobre ele e o Explorador de arquivos revelou e expandiu essa pasta](../images/breadcrumb.png)

Obsidian 1.8.7+ · somente desktop · AGPL-3.0

## Divulgação sobre IA

- **Agente** — **Claude Opus 5** e **Claude Sonnet 5** (Anthropic, via Claude Code): escreveu o TypeScript, o CSS, os 45 conjuntos de traduções e a documentação. As traduções são geradas por máquina e não foram revisadas por falantes nativos.
- **Autor** — Vault51: especificou cada funcionalidade, testou cada versão em um cofre real, orientou as correções e revisou todos os resultados.
- **Consumo** — 3 a 13 de agosto de 2026, nove sessões, \~4.928 respostas: \~7,2 M de tokens gerados, \~23,7 M enviados, \~1169,6 M de releituras em cache (\~1200,5 M no total).
- **Origem** — um modelo que escreve plugins do Obsidian aprendeu isso com código aberto, documentação, respostas em fóruns e relatos de bugs que pessoas escreveram e deram de graça. Nenhuma delas foi consultada, creditada ou paga. Essa é a maior contribuição sem crédito daqui, e merece seu apoio mais do que este plugin: se você está escolhendo para onde mandar algo, mande para lá.

## Funcionalidades

- **Clique em uma pasta** para abrir uma lista com o conteúdo da pasta *acima dela* — troque uma pasta por outra vizinha sem mexer no resto do caminho. O nome da nota funciona do mesmo jeito, extensão incluída.
- **Clique no separador** logo depois de uma pasta para revelá-la e expandi-la no Explorador de arquivos. Uma configuração troca os dois papéis.
- **Clique com o botão direito ou arraste qualquer entrada** — o menu de contexto e o arrasto do próprio Explorador de arquivos.
- **Clique no nome do arquivo ou no espaço vazio** para digitar um caminho, com autocompletar. `/` desce, <kbd>Backspace</kbd> sobe um nível, <kbd>Enter</kbd> confirma.
- **O botão de lápis sobre pasta** muda as mesmas interações para mover/renomear, com as mesmas validações que o Obsidian faz.
- **Segure <kbd>Ctrl</kbd>** para abrir em uma nova aba — ou, no modo mover/renomear, para copiar a nota para lá em vez de movê-la.
- **<kbd>F2</kbd>** alterna entre o título embutido e a barra de caminho.
- **Clique no nome do cofre** para percorrer seus outros cofres, sua pasta pessoal, a raiz do sistema de arquivos e as unidades montadas sem trocar de cofre. Somente leitura até você abrir um cadeado, e emoldurado na cor de erro o tempo todo. Desativado por padrão — veja [fora do cofre](#fora-do-cofre).
- **Dois níveis de aviso** — vermelho fora do cofre, laranja para arquivos de texto que o Obsidian não sabe editar. Veja [as duas cores de aviso](usage.pt-BR.md#as-duas-cores-de-aviso).
- **Ícones adaptáveis ao tema**, substituíveis por um trecho de CSS — e **45 idiomas**, todos os que o Obsidian traz.
- **Configurações:** alinhamento, separadores prontos, qual clique abre a lista, nome do cofre, arquivos ocultos.

![A mesma lista no modo mover/renomear: o nome atual do arquivo fixado no topo, as pastas vizinhas abaixo e as notas existentes em cinza](../images/dropdown.png)

*No modo mover/renomear a mesma lista oferece outra coisa: o nome atual da nota fixado no topo para movê-la sem renomear, pastas para onde levá-la, e os nomes já ocupados em cinza para que nada seja sobrescrito por acidente.*

→ [Guia de uso completo](usage.pt-BR.md)

## Fora do cofre

As políticas para desenvolvedores do Obsidian exigem que um plugin explique qualquer acesso a arquivos fora do cofre, então, sem rodeios:

**Se ele faz alguma dessas coisas.** Só se você ativar **Acesso a arquivos externos**, que vem **desativado por padrão**. Com a opção desligada não há como alcançar um caminho externo pelo plugin, e nada do código descrito abaixo chega a rodar.

**O que ele lê.** Só quando você pede. Clicar no nome do cofre lista seus outros cofres — lidos do próprio `obsidian.json` do Obsidian — mais sua pasta pessoal, a raiz do sistema de arquivos e as unidades montadas (`/proc/mounts` no Linux, `/Volumes` no macOS, letras de unidade no Windows). Navegar a partir daí lista o conteúdo das pastas, e abrir um arquivo lê aquele arquivo apenas.

**O que ele escreve.** Nada, até você apertar um botão que diga isso. Existem dois botões assim, e cada um cobre apenas o próprio escopo:

- O botão **Editar como texto** do visualizador destrava o arquivo à sua frente, só aquele arquivo e só naquela aba. Daí em diante suas alterações são gravadas nele conforme você digita.
- O **cadeado** do cabeçalho, visível apenas enquanto a barra de caminho aponta para fora do cofre, destrava criar, renomear e mover em caminhos externos. Ele se tranca de novo assim que você volta para dentro, então a permissão nunca sobrevive à pasta para a qual você a concedeu.

Nenhum dos destravamentos é guardado na área de trabalho nem nas configurações, então a escrita nunca fica armada sobre um arquivo que você não lembra de ter aberto. Em nenhum dos estados algo é sobrescrito — um destino já existente é recusado, usando a criação exclusiva do próprio sistema de arquivos em vez de uma checagem que poderia perder a corrida — e uma nota nunca pode ser *movida* para fora do cofre, porque os links para ela quebrariam em silêncio; segurar <kbd>Ctrl</kbd> a copia para lá em vez disso.

**Por quê.** As notas que você quer estão muitas vezes em outro cofre, numa pasta de sincronização ou num pendrive, e a resposta do Obsidian — trocar de cofre — fecha tudo o que você tinha aberto. Isso deixa você ir olhar sem sair, e corrigir um erro de digitação já que está lá.

**A limitação.** O editor do Obsidian está preso aos arquivos de dentro do cofre, então um arquivo externo **não pode** ser aberto como uma nota de verdade, com links, backlinks e o resto; nenhum plugin consegue fazer isso. O Lure o mostra no seu próprio visualizador (Markdown, imagens, áudio, vídeo, PDF), com *Abrir externamente* para todo o resto. A barra de caminho continua emoldurada na cor de erro sempre que aponta para fora do cofre, e a trilha começa no lugar que você escolheu — o nome de um cofre, sua pasta pessoal, uma unidade — e não na organização de pastas da máquina.

## Instalação

Listado em [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure), mas ainda não aprovado para o navegador dentro do aplicativo — então instale-o de uma destas formas:

**Manual:** baixe `main.js`, `manifest.json` e `styles.css` da [versão mais recente](https://github.com/Gelaende51/obsidian-lure/releases) para `<vault>/.obsidian/plugins/lure/` e ative em **Configurações → Plugins não oficiais**.

**BRAT:** adicione `Gelaende51/obsidian-lure` como plugin beta.

**A partir do código-fonte:** `npm install && npm run build` — veja [desenvolvimento](../development.md).

## Compatibilidade

Nenhum plugin é necessário. O **Explorador de arquivos** nativo, se estiver ativo, é o que revela as pastas na barra lateral; sem ele esses cliques não fazem nada.

Testado contra os plugins da comunidade que dividem o cabeçalho da nota ou respondem ao clique numa pasta — nas duas ordens de carregamento, cada um ligado e desligado:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — o separador abre a nota da pasta em vez de revelar a pasta, o que faz de cada segmento do caminho um lugar para onde ir. É o único plugin de notas de pasta que reivindica o caminho no cabeçalho; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) e [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) não escutam ali, então o separador revela a pasta como sempre.
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer) e [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — os dois desenham no mesmo elemento do cabeçalho; o Lure mantém sua linha seja qual for a ordem de carregamento, e desligar um deixa o outro intacto.
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header), [Running Head](obsidian://show-plugin?id=running-head), [Crumbs](obsidian://show-plugin?id=crumbs-obsidian), [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — têm a própria faixa, e convivem sem problema.

Somente desktop — o modelo de interação precisa de passagem do mouse, cliques precisos e um teclado. Os resultados completos, o que falta verificar e a comparação com o Quick Explorer e o Breadcrumbs estão em [compatibilidade](../compatibility.md).

## Como contribuir

- Issues e pull requests são bem-vindos — principalmente **correções de tradução**, já que os 45 idiomas são traduzidos por máquina e não revisados por falantes nativos. Veja [desenvolvimento](../development.md) para a preparação e as regras básicas.
- **Rastreador de problemas:** https://github.com/Gelaende51/obsidian-lure/issues
- **Doações:** [Ko-fi](https://ko-fi.com/vault51). O plugin é gratuito e licenciado sob a AGPL de qualquer forma; gorjetas são bem-vindas e nunca exigidas. A intenção é compensar as emissões de carbono — uma intenção, não um compromisso: nada é compensado enquanto a soma não valer o esforço, e esta linha vai dizer isso assim que algo tiver sido de fato compensado.

## Créditos

- **Vault51** — autor: design, requisitos e testes manuais do começo ao fim.
- **Claude Opus 5** e **Claude Sonnet 5** (Anthropic, via Claude Code) — implementação, traduções e documentação, sob a direção do autor. Veja [divulgação sobre IA](#divulgação-sobre-ia).
- **[Obsidian](https://obsidian.md)** — o aplicativo que isto estende, e a origem de todo componente que o plugin usa: sua API de plugins, o conjunto de ícones Lucide por trás do `setIcon`, a instância embutida do i18next de onde as etiquetas do menu de contexto são lidas, e suas próprias classes e variáveis CSS. Nada de terceiros é embutido; o plugin **não tem dependências em tempo de execução**.

> **A equipe do Obsidian não participou deste projeto de nenhuma forma** — não escreveu, revisou, endossou nem apoiou. Obsidian é uma marca registrada da Dynalist Inc.; este é um plugin independente e sem vínculo.

Os contribuidores serão listados aqui conforme as contribuições chegarem.

## Links

- **Documentação:** [docs/](../)
- **Página do plugin:** https://community.obsidian.md/plugins/lure
- **Presença web / código-fonte:** https://github.com/Gelaende51/obsidian-lure
- **Doações:** [Ko-fi](https://ko-fi.com/vault51) — veja [como contribuir](#como-contribuir).
- **Licença:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. Forks e builds redistribuídas precisam publicar seu código-fonte sob a mesma licença.
