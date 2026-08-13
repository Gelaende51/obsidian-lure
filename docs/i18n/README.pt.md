<!-- Tradução de README.md — estado: commit d116bbc.
     Tradução automática (Claude Opus 5), não revista por falantes nativos.
     Correções são bem-vindas; o README em inglês é a versão de referência. -->

**Leia isto noutras línguas:** [English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · **Português** · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

Um plugin do [Obsidian](https://obsidian.md) que transforma o nome do ficheiro na barra de cabeçalho de uma nota num caminho completo clicável e editável, segmento a segmento — como a barra de endereços do gestor de ficheiros [Dolphin](https://apps.kde.org/dolphin/).

![Clique no separador a seguir a uma pasta: o ponteiro está pousado sobre ele e o Explorador de ficheiros mostrou e expandiu essa pasta](../images/breadcrumb.png)

Obsidian 1.8.7+ · apenas computador · AGPL-3.0

## Divulgação sobre IA

- **Agente** — **Claude Opus 5** e **Claude Sonnet 5** (Anthropic, através do Claude Code): escreveu o TypeScript, o CSS, os 45 conjuntos de traduções e a documentação. As traduções são geradas automaticamente e não foram revistas por falantes nativos.
- **Autor** — Vault51: definiu cada funcionalidade, testou cada versão num cofre real, orientou as correções e reviu todos os resultados.
- **Consumo** — 3 a 13 de agosto de 2026, nove sessões, \~4928 respostas: \~7,2 M de tokens gerados, \~23,7 M enviados, \~1169,6 M de releituras em cache (\~1200,5 M no total).

## Funcionalidades

- **Clique numa pasta** para uma lista pendente com o conteúdo da pasta *acima* — troque uma pasta por outra ao lado sem mexer no resto do caminho. O nome da nota funciona da mesma forma, extensão incluída.
- **Clique no separador** a seguir a uma pasta para a mostrar e expandir no Explorador de ficheiros. Uma opção troca os dois papéis.
- **Clique com o botão direito ou arraste qualquer entrada** — o menu de contexto e o arrasto do próprio Explorador de ficheiros.
- **Clique no nome do ficheiro ou no espaço vazio** para escrever um caminho, com preenchimento automático. `/` desce, <kbd>Retrocesso</kbd> sobe um nível, <kbd>Enter</kbd> confirma.
- **O botão de lápis sobre pasta** passa as mesmas interações para mover/renomear, com as mesmas validações que o Obsidian faz.
- **Mantenha <kbd>Ctrl</kbd>** para abrir num separador novo — ou, no modo mover/renomear, para copiar a nota para lá em vez de a mover.
- **<kbd>F2</kbd>** alterna entre o título em linha e a barra de caminho.
- **Clique no nome do cofre** para percorrer os seus outros cofres, a sua pasta pessoal, a raiz do sistema de ficheiros e as unidades montadas sem mudar de cofre. Apenas leitura até abrir um cadeado, e emoldurado na cor de erro todo o tempo. Desativado por predefinição — veja [fora do cofre](#fora-do-cofre).
- **Dois níveis de aviso** — vermelho fora do cofre, laranja para os ficheiros de texto para os quais o Obsidian não tem editor. Veja [as duas cores de aviso](usage.pt.md#as-duas-cores-de-aviso).
- **Ícones adaptáveis ao tema**, substituíveis a partir de um fragmento CSS — e **45 idiomas**, todos os que o Obsidian traz.
- **Definições:** alinhamento, separadores predefinidos, que clique abre a lista, nome do cofre, ficheiros ocultos.

![A mesma lista no modo mover/renomear: o nome atual do ficheiro fixado no topo, as pastas vizinhas por baixo e as notas existentes a cinzento](../images/dropdown.png)

*No modo mover/renomear a mesma lista oferece outra coisa: o nome atual da nota fixado no topo para a mover sem lhe mudar o nome, pastas para onde a levar, e os nomes já ocupados a cinzento para que nada seja substituído por engano.*

→ [Guia de utilização completo](usage.pt.md)

## Fora do cofre

As políticas para programadores do Obsidian exigem que um plugin explique qualquer acesso a ficheiros fora do cofre, portanto, sem rodeios:

**Se sequer faz alguma destas coisas.** Só se ativar **Acesso a ficheiros externos**, que está **desativado por predefinição**. Com a opção desligada não há forma de alcançar um caminho externo a partir do plugin, e nada do código descrito abaixo chega a correr.

**O que lê.** Só quando lho pede. Clicar no nome do cofre lista os seus outros cofres — lidos do próprio `obsidian.json` do Obsidian — mais a sua pasta pessoal, a raiz do sistema de ficheiros e as unidades montadas (`/proc/mounts` no Linux, `/Volumes` no macOS, letras de unidade no Windows). Navegar a partir daí lista o conteúdo das pastas, e abrir um ficheiro lê esse único ficheiro.

**O que escreve.** Nada, até carregar num botão que o diga. Existem dois botões desses, e cada um cobre apenas o seu próprio âmbito:

- O botão **Editar como texto** do visualizador desbloqueia o ficheiro que tem à frente, só esse ficheiro e só nesse separador. A partir daí as suas alterações são gravadas nele à medida que escreve.
- O **cadeado** do cabeçalho, visível apenas enquanto a barra de caminho aponta para fora do cofre, desbloqueia criar, renomear e mover em caminhos externos. Volta a fechar assim que regressa ao interior, de modo que a permissão nunca sobrevive à pasta para a qual a concedeu.

Nenhum dos desbloqueios é guardado na área de trabalho nem nas definições, por isso a escrita nunca fica armada sobre um ficheiro que não se lembra de ter aberto. Em nenhum dos estados se substitui seja o que for — um destino já existente é recusado, usando a criação exclusiva do próprio sistema de ficheiros em vez de uma verificação que poderia perder a corrida — e uma nota nunca pode ser *movida* para fora do cofre, porque as ligações para ela quebrariam em silêncio; manter <kbd>Ctrl</kbd> copia-a para lá em vez disso.

**Porquê.** As notas de que precisa estão muitas vezes noutro cofre, numa pasta de sincronização ou numa pen USB, e a resposta do Obsidian — mudar de cofre — fecha tudo o que tinha aberto. Isto deixa-o ir ver sem sair, e corrigir uma gralha já que lá está.

**A limitação.** O editor do Obsidian está preso aos ficheiros dentro do cofre, por isso um ficheiro externo **não pode** ser aberto como uma nota a sério, com ligações, retroligações e o resto; nenhum plugin o consegue fazer. O Lure mostra-o antes no seu próprio visualizador (Markdown, imagens, áudio, vídeo, PDF), com *Abrir externamente* para tudo o resto. A barra de caminho permanece emoldurada na cor de erro sempre que aponta para fora do cofre, e o trajeto começa no sítio que escolheu — o nome de um cofre, a sua pasta pessoal, uma unidade — e não na organização de pastas da máquina.

## Instalação

Listado em [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure), mas ainda não aprovado para o navegador dentro da aplicação — por isso instale-o de uma destas formas:

**Manual:** transfira `main.js`, `manifest.json` e `styles.css` da [versão mais recente](https://github.com/Gelaende51/obsidian-lure/releases) para `<vault>/.obsidian/plugins/lure/` e ative-o em **Definições → Plugins não oficiais**.

**BRAT:** adicione `Gelaende51/obsidian-lure` como plugin beta.

**A partir do código-fonte:** `npm install && npm run build` — veja [desenvolvimento](../development.md).

## Compatibilidade

Não é preciso nenhum plugin. O **Explorador de ficheiros** de base, se estiver ativo, é o que mostra as pastas na barra lateral; sem ele esses cliques não fazem nada.

Testado contra os plugins da comunidade que partilham o cabeçalho da nota ou respondem ao clique numa pasta — nas duas ordens de carregamento, cada um ligado e desligado:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — o separador abre a nota da pasta em vez de mostrar a pasta, o que faz de cada segmento do caminho um sítio para onde ir. É o único plugin de notas de pasta que reclama o caminho do cabeçalho; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) e [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) não escutam ali, por isso o separador mostra a pasta como sempre.
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer) e [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — ambos desenham no mesmo elemento do cabeçalho; o Lure mantém a sua linha seja qual for a ordem de carregamento, e desligar um deixa o outro intacto.
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header), [Running Head](obsidian://show-plugin?id=running-head), [Crumbs](obsidian://show-plugin?id=crumbs-obsidian), [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — têm a sua própria faixa, e convivem sem problemas.

Apenas computador — o modelo de interação precisa de passagem do rato, cliques precisos e um teclado. Os resultados completos, o que falta verificar e a comparação com o Quick Explorer e o Breadcrumbs estão em [compatibilidade](../compatibility.md).

## Como contribuir

- Problemas e pull requests são bem-vindos — sobretudo **correções de tradução**, já que os 45 idiomas são traduzidos automaticamente e não revistos por falantes nativos. Veja [desenvolvimento](../development.md) para a preparação e as regras de base.
- **Registo de problemas:** https://github.com/Gelaende51/obsidian-lure/issues
- **Donativos:** [Ko-fi](https://ko-fi.com/vault51). O plugin é gratuito e está sob licença AGPL de qualquer forma; as gorjetas agradecem-se e nunca se exigem. A intenção é compensar as emissões de carbono — uma intenção, não um compromisso: nada é compensado enquanto a soma não valer o esforço, e esta linha dirá isso assim que algo o for de facto.

## Créditos

- **Vault51** — autor: conceção, requisitos e testes manuais do princípio ao fim.
- **Claude Opus 5** e **Claude Sonnet 5** (Anthropic, através do Claude Code) — implementação, traduções e documentação, sob a direção do autor. Veja [divulgação sobre IA](#divulgação-sobre-ia).
- **[Obsidian](https://obsidian.md)** — a aplicação que isto estende, e a origem de todos os componentes que o plugin usa: a sua API de plugins, o conjunto de ícones Lucide por trás de `setIcon`, a instância de i18next incluída de onde são lidas as etiquetas do menu de contexto, e as suas próprias classes e variáveis CSS. Nada de terceiros é incluído; o plugin **não tem dependências em tempo de execução**.

> **A equipa do Obsidian não participou neste projeto de forma alguma** — não o escreveu, reviu, aprovou nem apoiou. Obsidian é uma marca registada da Dynalist Inc.; este é um plugin independente e sem qualquer ligação.

Os contribuidores serão listados aqui à medida que as contribuições chegarem.

## Ligações

- **Documentação:** [docs/](../)
- **Página do plugin:** https://community.obsidian.md/plugins/lure
- **Presença web / código-fonte:** https://github.com/Gelaende51/obsidian-lure
- **Donativos:** [Ko-fi](https://ko-fi.com/vault51) — veja [como contribuir](#como-contribuir).
- **Licença:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. Os forks e as compilações redistribuídas têm de publicar o seu código-fonte sob a mesma licença.
