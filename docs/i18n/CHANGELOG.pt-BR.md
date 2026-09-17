<!-- Tradução de CHANGELOG.md — estado: commit 973105b.
     Tradução automática (Claude Opus 5), não revisada por falantes nativos.
     Correções são bem-vindas; o CHANGELOG em inglês é a versão de referência. -->

[English](../../CHANGELOG.md) · [العربية](CHANGELOG.ar.md) · [አማርኛ](CHANGELOG.am.md) · [Беларуская](CHANGELOG.be.md) · [বাংলা](CHANGELOG.bn.md) · [Català](CHANGELOG.ca.md) · [Čeština](CHANGELOG.cs.md) · [Dansk](CHANGELOG.da.md) · [Deutsch](CHANGELOG.de.md) · [Ελληνικά](CHANGELOG.el.md) · [Español](CHANGELOG.es.md) · [فارسی](CHANGELOG.fa.md) · [Suomi](CHANGELOG.fi.md) · [Français](CHANGELOG.fr.md) · [Gaeilge](CHANGELOG.ga.md) · [עברית](CHANGELOG.he.md) · [Magyar](CHANGELOG.hu.md) · [Bahasa Indonesia](CHANGELOG.id.md) · [Italiano](CHANGELOG.it.md) · [日本語](CHANGELOG.ja.md) · [ქართული](CHANGELOG.ka.md) · [ភាសាខ្មែរ](CHANGELOG.kh.md) · [한국어](CHANGELOG.ko.md) · [Latviešu](CHANGELOG.lv.md) · [Bahasa Melayu](CHANGELOG.ms.md) · [नेपाली](CHANGELOG.ne.md) · [Nederlands](CHANGELOG.nl.md) · [Norsk](CHANGELOG.no.md) · [Polski](CHANGELOG.pl.md) · [Português](CHANGELOG.pt.md) · **Português (Brasil)** · [Română](CHANGELOG.ro.md) · [Русский](CHANGELOG.ru.md) · [संस्कृतम्](CHANGELOG.sa.md) · [Slovenčina](CHANGELOG.sk.md) · [Shqip](CHANGELOG.sq.md) · [Српски](CHANGELOG.sr.md) · [Svenska](CHANGELOG.sv.md) · [ไทย](CHANGELOG.th.md) · [Türkçe](CHANGELOG.tr.md) · [Українська](CHANGELOG.uk.md) · [Oʻzbekcha](CHANGELOG.uz.md) · [Tiếng Việt](CHANGELOG.vi.md) · [简体中文](CHANGELOG.zh.md) · [繁體中文](CHANGELOG.zh-TW.md)

# Registro de alterações

Todas as versões do Lure, da mais recente para a mais antiga. O que entrou desde a última versão está em *Não publicado*. As versões não levam o prefixo `v`, assim como as tags de release.

## 1.3.0 — 2026-09-17[^1.3.0]

### Adicionado

- **Traga um arquivo de fora para dentro do cofre.** Mova ou copie um arquivo de qualquer lugar do disco para um caminho dentro do seu cofre; ele chega como uma nota de verdade, e ao mover, o original só é removido depois que a cópia deu certo.
- **Solte texto ou um arquivo na barra para registrá-lo.** Sobre uma pasta: uma nova nota nessa pasta, com o nome que você digitar. Sobre o nome da nota, ou sobre o separador de uma pasta que tenha nota de pasta: acrescentado ao final dessa nota, após uma confirmação.
- **Crie uma nota de pasta** com um segundo toque no que quer que abra a pasta, quando um plugin de notas de pasta está em execução e a pasta ainda não tem uma. Ela é criada onde as configurações do próprio [Folder notes](https://github.com/LostPaul/obsidian-folder-notes) indicam.
- **Arraste uma pasta da barra de caminho para a barra de abas** para abri-la ali: a nota da pasta, se houver uma, ou então uma aba posicionada nessa pasta.
- **A roda do mouse percorre a lista.** Sobre um nome, o primeiro giro abre a lista desse nome e cada giro seguinte move o destaque uma linha. Uma linha que está rolando lateralmente mantém a roda para a rolagem.
- **Saia pela frente do campo com as setas** para trazer a pasta anterior para dentro dele: <kbd>←</kbd> para uma pasta, <kbd>Shift</kbd>+<kbd>Home</kbd> (ou <kbd>Home</kbd> com a lista fechada) para todas.
- **O campo assume a cor do que ele nomeia**, a mesma dessa linha na lista, e fica vermelho assim que nada corresponde a ele — o momento em que <kbd>Enter</kbd> criaria algo em vez de abrir.
- **Notas de pasta ficam cinza na lista**, para que sejam lidas como parte da sua pasta, e não como mais uma nota.
- **Clique com o botão do meio em um separador** para abrir essa pasta em uma nova aba: a nota da pasta, ou uma aba posicionada nela.

### Alterado

- **O cadeado e o botão de renomear são um único controle.** Fora do cofre, um cadeado vermelho e fechado ocupa o lugar do botão; abri-lo devolve o lugar ao botão, e sair do modo renomear o fecha de novo.
- **A tecla de renomear também consulta o cadeado.** Fora do cofre, um toque faz o cadeado piscar; um segundo toque em até meio segundo concede o que o cadeado concede e abre o modo renomear.
- **A tecla de renomear percorre um ciclo completo** — título embutido, nome, nome com extensão, caminho a partir do cofre, caminho a partir da raiz do sistema — e o toque seguinte volta ao título embutido.
- **<kbd>Ctrl</kbd>+clique e clique com o botão do meio não são mais sinônimos.** Um abre uma aba e vai até ela; o outro a abre em segundo plano.
- **Clicar com o botão direito no nome da nota abre o próprio menu do arquivo.**
- **A lista fica tão alta quanto a janela permite**, em vez dos 300 pixels fixos do Obsidian.
- **Clicar em uma pasta com um campo aberto mantém todo o caminho depois dela**, e clicar em uma pasta dentro do campo lista o conteúdo completo dessa pasta.
- **O separador abre uma nota de pasta em qualquer profundidade** com o Folder notes em execução, e fica sublinhado onde houver uma. Antes, só as pastas de nível superior funcionavam. Com os outros plugins de notas de pasta, o separador continua revelando a pasta.

### Corrigido

- **Um campo aberto sobrevivia ao seu arquivo.** Trocar para outra nota com a barra de caminho aberta deixava a barra mostrando o arquivo antigo pelo resto da sessão.
- **Excluir, Renomear e Fazer uma cópia eram recusados fora do cofre** mesmo com o cadeado aberto, e nunca podiam ser alcançados para imagens, PDFs e páginas.
- **<kbd>Ctrl</kbd>+<kbd>Enter</kbd> não fazia nada com a lista aberta** — que é como todo campo abre.
- **<kbd>Enter</kbd> com a lista aberta mas nada destacado** não fazia nada; agora confirma o que você digitou.
- **Uma barra que transbordava com todos os nomes já no tamanho mínimo não podia ser rolada**, deixando o fim do caminho inalcançável.
- **Desativar o plugin deixava um botão sem função** no cabeçalho de cada nota que ele tinha modificado.

## 1.2.0 — 2026-08-25[^1.2.0]

### Adicionado

- **Configuração de idioma.** O Lure segue o idioma do Obsidian por padrão e pode ser configurado para qualquer um dos seus próprios idiomas. Esta também é a única forma de chegar às traduções em grego e sânscrito, que o próprio Obsidian não oferece. O rótulo da configuração fica em inglês, para que ela sempre possa ser encontrada de novo a partir de um idioma que você não consegue ler.

## 1.1.2 — 2026-08-25[^1.1.2]

### Alterado

- **Folha de estilo mais leve.** A barra não usa mais seletores `:has()` nem a maioria das regras `!important`. Ela se reajusta com menos trabalho, e os avisos da revisão de plugins caíram de 56 para 7.

## 1.1.1 — 2026-08-22[^1.1.1]

### Corrigido

- **Um nome de pasta curto podia ser desenhado com um espaço no meio** — `atlas` como `atl as` — porque o espaço reservado para a sua forma encurtada era mais largo que o próprio nome.

## 1.1.0 — 2026-08-22[^1.1.0]

### Adicionado

- **Vocabulário do botão direito.** Um toque abre um menu; dois e três toques copiam progressivamente mais — o nome, o nome com a extensão, o caminho. Os menus da barra agora correspondem aos do Explorador de arquivos, item por item.
- **Menus fora do cofre.** As linhas da lista e o visualizador externo oferecem abrir, *Copiar caminho* e *Mostrar na pasta*; com o cadeado aberto, também *Nova nota*, *Nova pasta*, *Fazer uma cópia*, *Renomear…* e *Excluir*. Excluir move para a lixeira do sistema e nunca é permanente.
- **Abrir em outro lugar.** <kbd>Ctrl</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> e clique com o botão do meio no nome da nota ou em uma pasta abrem-nos em uma nova aba, em uma divisão ou em uma janela. Ambos podem ser arrastados, como as linhas correspondentes do Explorador de arquivos.
- **Arraste notas para a barra para movê-las.** Solte uma nota, várias notas ou uma pasta sobre um segmento de pasta ou sobre o nome do cofre.
- **Comando: Focar a barra de caminho**, com o caminho inteiro selecionado — sem atalho padrão, defina o seu.
- **Digite uma URL** na barra de caminho: `http(s)://` e `obsidian://` abrem como links, `file://` e caminhos com codificação percentual abrem o arquivo.
- **Completar com Tab**, do jeito de um shell: cada toque completa até onde os nomes da pasta coincidem e para onde eles diferem. <kbd>Shift</kbd>+<kbd>Tab</kbd> volta. Quando não há mais nada para completar, <kbd>Tab</kbd> amplia a seleção: nome, nome com extensão, caminho a partir do cofre, caminho a partir da raiz do sistema.
- **A lista abre onde você está** e mostra no campo uma prévia daquilo para que você aponta; sair da lista devolve o seu texto.
- **Mova uma nota para fora do cofre** após uma confirmação que conta os links que serão quebrados. Ela é copiada para fora e depois enviada para a lixeira, então pode ser recuperada como qualquer nota excluída.
- **Configuração “Mostrar extensões de arquivo”**, e caminhos entre aspas (como o *Copiar como caminho* do Windows os produz) agora são reconhecidos.
- **As configurações aparecem na busca de configurações do Obsidian** no Obsidian 1.13 e posteriores.

### Alterado

- **Caminhos longos cabem no painel.** Os nomes são encurtados a partir do menos útil — o nome do cofre, depois a extensão, depois as pastas, e o próprio nome da nota por último — nunca além do ponto em que ainda podem ser distinguidos. Passe o mouse sobre um nome encurtado para lê-lo por completo.
- **Clicar no nome da nota o seleciona sem a extensão**, então renomear não corre mais o risco de mudar o tipo do arquivo.
- **A tecla de renomear abre no nome sem a extensão**, e novos toques ampliam a seleção.
- **Clicar em uma pasta mantém o resto do caminho visível**, inclusive fora do cofre.
- **Navegar de volta para o seu cofre abre os arquivos como notas**, com links e backlinks, em vez de no visualizador externo.

### Corrigido

- **Os rótulos dos menus ficavam em inglês em todos os idiomas**; agora vêm das próprias traduções do Obsidian.
- **A tecla de renomear empacava na caixa de diálogo de renomear do Obsidian** quando a nota estava rolada para além do título.
- **<kbd>Esc</kbd> precisava de dois toques** para fechar o campo e a sua lista.
- **<kbd>Ctrl</kbd>+<kbd>Enter</kbd> abria um link no editor** em vez de agir na barra de caminho.
- **Renomear fora do cofre perdia o nome digitado** quando o cadeado era pressionado.
- **O Tab podia entrar em loop sem avançar** em uma pasta que fica ao lado da sua própria nota de pasta.

## 1.0.4 — 2026-08-13[^1.0.4]

### Adicionado

- **A nota em que você está fica marcada em azul** na lista, então navegar de volta à pasta dela mostra de onde você partiu.

## 1.0.3 — 2026-08-13[^1.0.3]

### Documentação

- O README aponta para a página do plugin no diretório da comunidade, e os READMEs traduzidos foram atualizados.

## 1.0.2 — 2026-08-13[^1.0.2]

### Alterado

- **Requer Obsidian 1.8.7 ou posterior** (antes era 1.4.0). Dois recursos dos quais a barra de caminho depende — copiar arquivos e a dica de erro abaixo do campo — precisam dessa versão.
- **Os downloads das versões trazem proveniência de build assinada**, então você pode confirmar com `gh attestation verify` que o `main.js` foi compilado a partir deste repositório.

### Corrigido

- **Abrir um arquivo externo inexistente no aplicativo padrão falhava em silêncio**; agora a falha é informada.

## 1.0.1 — 2026-08-13[^1.0.1]

### Corrigido

- **No modo renomear, uma nota entrava em conflito consigo mesma** — navegar de volta à própria pasta escondia o nome dela da lista, como se ela bloqueasse a própria renomeação.
- **A primeira revelação de pasta depois de iniciar o Obsidian não expandia nada.**
- **Escolher uma pasta na lista podia encerrar o modo renomear** em vez de entrar nela.
- **Edições externas podiam ser sobrescritas silenciosamente** por outro processo que grava no arquivo, como o Sync ou um segundo painel. As gravações agora são atômicas.
- **O reset do contorno de foco vazava para outras visualizações**; agora ele se aplica só aos cabeçalhos que o Lure modificou.

### Documentação

- O README e o guia de uso estão disponíveis em todos os 44 idiomas que o plugin oferece.
- O guia citava a configuração *Detectar todas as extensões de arquivo* (*Detect all file extensions*) do Obsidian, que agora se chama *Detectar todas as extensões dos arquivos* (*Show all file types*).

## 1.0.0 — 2026-08-10[^1.0.0]

Primeira versão. Substitui o nome do arquivo no cabeçalho de uma nota por uma trilha clicável e editável do seu caminho no cofre — uma barra de endereço para as suas notas, inspirada na do Dolphin.

### Adicionado

- **Clique em uma pasta** para abrir uma lista com o conteúdo da pasta pai, para trocá-la por outra do mesmo nível e deixar o resto do caminho como está.
- **Clique no separador** depois de uma pasta para revelá-la e expandi-la no Explorador de arquivos, ou para abrir a nota da pasta quando o Folder notes cuida disso.
- **Clique no nome do arquivo ou no espaço vazio** para digitar um caminho, com preenchimento automático: `/` desce, <kbd>Backspace</kbd> sobe um nível, <kbd>Enter</kbd> confirma.
- **O modo mover/renomear** faz as mesmas interações moverem e renomearem, com a mesma validação que o Obsidian usa.
- **<kbd>Ctrl</kbd> abre em uma nova aba** — ou, no modo mover/renomear, copia a nota para lá em vez de movê-la.
- **<kbd>F2</kbd> alterna** entre o título embutido e a barra de caminho.
- **Fora do cofre** (desativado por padrão): o nome do cofre abre seus outros cofres, a pasta pessoal, a raiz do sistema de arquivos e as unidades montadas. Nada lá fora é gravado até você desbloquear, e uma nota só pode ser copiada para fora do cofre, nunca movida.
- **45 idiomas.**

[^1.3.0]: Alterações desde a 1.2.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.2.0...1.3.0>
[^1.2.0]: Alterações desde a 1.1.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.2...1.2.0>
[^1.1.2]: Alterações desde a 1.1.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.1...1.1.2>
[^1.1.1]: Alterações desde a 1.1.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.0...1.1.1>
[^1.1.0]: Alterações desde a 1.0.4: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.4...1.1.0>
[^1.0.4]: Alterações desde a 1.0.3: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.3...1.0.4>
[^1.0.3]: Alterações desde a 1.0.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.2...1.0.3>
[^1.0.2]: Alterações desde a 1.0.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.1...1.0.2>
[^1.0.1]: Alterações desde a 1.0.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.0...1.0.1>
[^1.0.0]: A primeira versão: <https://github.com/Gelaende51/obsidian-lure/releases/tag/1.0.0>
