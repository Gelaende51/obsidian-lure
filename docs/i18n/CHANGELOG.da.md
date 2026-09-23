<!-- Oversættelse af CHANGELOG.md — status: commit 2cbb237.
     Maskinoversat (Claude Opus 5) og ikke gennemlæst af modersmålstalere.
     Rettelser er velkomne; den engelske CHANGELOG er den gældende udgave. -->

[English](../../CHANGELOG.md) · [العربية](CHANGELOG.ar.md) · [አማርኛ](CHANGELOG.am.md) · [Беларуская](CHANGELOG.be.md) · [বাংলা](CHANGELOG.bn.md) · [Català](CHANGELOG.ca.md) · [Čeština](CHANGELOG.cs.md) · **Dansk** · [Deutsch](CHANGELOG.de.md) · [Ελληνικά](CHANGELOG.el.md) · [Español](CHANGELOG.es.md) · [فارسی](CHANGELOG.fa.md) · [Suomi](CHANGELOG.fi.md) · [Français](CHANGELOG.fr.md) · [Gaeilge](CHANGELOG.ga.md) · [עברית](CHANGELOG.he.md) · [Magyar](CHANGELOG.hu.md) · [Bahasa Indonesia](CHANGELOG.id.md) · [Italiano](CHANGELOG.it.md) · [日本語](CHANGELOG.ja.md) · [ქართული](CHANGELOG.ka.md) · [ភាសាខ្មែរ](CHANGELOG.kh.md) · [한국어](CHANGELOG.ko.md) · [Latviešu](CHANGELOG.lv.md) · [Bahasa Melayu](CHANGELOG.ms.md) · [नेपाली](CHANGELOG.ne.md) · [Nederlands](CHANGELOG.nl.md) · [Norsk](CHANGELOG.no.md) · [Polski](CHANGELOG.pl.md) · [Português](CHANGELOG.pt.md) · [Português (Brasil)](CHANGELOG.pt-BR.md) · [Română](CHANGELOG.ro.md) · [Русский](CHANGELOG.ru.md) · [संस्कृतम्](CHANGELOG.sa.md) · [Slovenčina](CHANGELOG.sk.md) · [Shqip](CHANGELOG.sq.md) · [Српски](CHANGELOG.sr.md) · [Svenska](CHANGELOG.sv.md) · [ไทย](CHANGELOG.th.md) · [Türkçe](CHANGELOG.tr.md) · [Українська](CHANGELOG.uk.md) · [Oʻzbekcha](CHANGELOG.uz.md) · [Tiếng Việt](CHANGELOG.vi.md) · [简体中文](CHANGELOG.zh.md) · [繁體中文](CHANGELOG.zh-TW.md)

# Ændringslog

Hver udgivelse af Lure, nyeste først. Det, der er kommet til siden seneste udgivelse, står under *Ikke udgivet*. Versioner har intet `v`-præfiks, så de svarer til udgivelsesmærkerne.

## 1.5.0 — 2026-09-23[^1.5.0]

### Tilføjet

- **Et taget navn spørger i stedet for at afvise.** At flytte eller omdøbe til et navn, der allerede findes, åbner en dialog med to stier, du kan redigere: hvor din fil skal hen, og hvor filen i vejen skal hen, rød mens den stadig er taget. Hver sti tegnes også, som stilinjen tegner en, med de dele, der er forskellige, farvet og forkortet sidst. Begge felter har en liste; den anden indeholder de sædvanlige udveje — byt plads (den går til din fils gamle mappe), byt navne (den bliver og tager din fils gamle navn), byt begge (den tager din fils gamle sti), `-1`, `-bak` og `-old` ved siden af sit eget navn, og de to navne, filerne havde. En udvej, hvis sti er taget, er grå. At vælge en fylder kun feltet; Anvend flytter begge, links og det hele, og Annuller flytter intet. At vælge et taget navn fra rullelisten spørger det samme, og det samme gør at trække en fil til en mappe, der allerede har navnet.
- **`:graph` inde i en mappe åbner den mappes graf** — grafen filtreret til `path:"that/folder"`, som dens egen søgeboks ville gøre. Ved boksens rod er det stadig hele grafen, som før.
- **En mappe, der allerede har navnet, er rød** i rullelisten under flytning, og det samme gælder en fil med det navn, så kollisionen vises, før du vælger.

### Ændret

- **Tilbuddet er altid det, Tab ville skrive.** Hvor navnene holder op med at stemme overens, tilbyder feltet skridtet mod det første af dem, og den række, Tab ville sigte mod, afgør det; at skrive hen over et navn lader dets filendelse stå og tilbydes foran den; en mappe, der lige er trådt ind i, tilbyder sit første skridt. Før var der tilstande, hvor intet blev tilbudt, og Tab skrev alligevel noget. Rullelistens understregning følger tilbuddet, mens det ændrer sig, og Tab på en række, du er pilet hen til, tager den række snarere end den ved siden af.
- **Tilbud ignorerer store/små bogstaver.** At skrive `sch` tilbyder `Schemes`, stavet som navnet er; at tage tilbuddet tilbage giver dine bogstaver tilbage, som du skrev dem. Hvor både `Test` og `test` findes, tilbydes den, der er stavet, som du skrev.
- **Efter et tryk på Tab tilbydes det næste skridt med det samme**, ligesom efter et indtastet bogstav.
- **Navne, der begynder med det, du har skrevet, kommer først i rullelisten**, markeret med en streg ned langs kanten — blå, hvor de deler mere end du har skrevet, grøn på den gren, tilbuddet tager, hvor de skilles — foran de navne, der kun indeholder det. Hver af dem understreger det skridt, <kbd>Tab</kbd> ville tage mod det, ikke kun det, der tilbydes.
- **Rullelisten følger tekstmarkøren**, eller starten af en markering: den viser den mappe, punktet er i, filtreret efter bogstaverne foran det. Ved starten af et navn er det hele mappen.
- **At pege på en række viser den som tilbuddet** — det, du har skrevet, forbliver dit, og resten af navnet er markeret — og at flytte markøren væk fra listen bringer tilbuddet tilbage.
- **→ tager ét bogstav af tilbuddet** i stedet for det hele; <kbd>End</kbd> tager det stadig helt.
- **Backspace foran en filendelse, der er ladet tilbage alene, træder et niveau op**, ligesom i et tomt felt; den ensomme filendelse forsvinder.
- **F2 i et åbent felt gør det til en omdøbning, hvor det står**, og bevarer teksten, tekstmarkøren og markeringen, og **Fokusér stilinjen** tager omdøbningen tilbage af det på samme måde.
- **Alt andet, der trykkes eller klikkes mellem tryk, starter kredsløbet af F2 og Fokusér stilinjen forfra.**
- **Mapper er fed i rullelisten**, så en mappes egen note ikke længere behøver at være grå for at skille sig ud: den er lilla som enhver anden note.
- **Rullelisten er ikke bredere end stilinjen.** Et navn, der ikke passer, forkortes på samme måde, som stilinjen forkorter et, og vises helt ved hover.
- **PageUp og PageDown ruller rullelisten efter det, den viser**, også fra feltet, og den markerede række beholder sin plads på skærmen. <kbd>Home</kbd> og <kbd>End</kbd> bringer den første og sidste række i syne.
- **Rullelisten viser op til 1.000 poster**, før den tæller resten, i stedet for 100.
- **Mapper viger længst først.** Er der ikke plads nok, forkortes det længste mappenavn til det næstlængstes længde, så begge sammen, og så videre, hver standsende ved sin nedre grænse. Før blev alle mapper forkortet på én gang i forhold til deres længde.
- **Forkortede navne glider i stedet for at hoppe.** Et navn, der viger, beskæres ved pixlen og toner ud under sin `…`, så intet efter det i rækken flytter sig i spring, mens en rude ændrer størrelse.

### Rettet

- I en rude til højre åbnede rullelisten under den venstre rude, indtil det første bogstav blev skrevet.
- At flytte markøren væk fra rullelisten bragte tilbuddet tilbage, men ikke dets farve.
- Et mellemrum, hvor et forkortet navn blev delt — `development guidelines` — blev droppet, så de to ord løb sammen.

## 1.4.0 — 2026-09-19[^1.4.0]

### Tilføjet

- **En række til Genvejstaster i indstillingerne.** Dens knap åbner Obsidians *Genvejstaster* filtreret til dette plugin, hvor *Fokusér stilinjen* — der leveres uden en tast — kan tildeles én.
- **En stilinje på faner uden fil.** En tom fane viser `vault / :blank`, grafen `vault / :graph`, og enhver anden visning uden noget at kalde sig, får sit eget `:`-mærke — et hjemmefane-plugins egen fane viser `:home-launcher`. Feltet ved siden af er en adresselinje: skriv en sti, og <kbd>Enter</kbd> åbner den i den fane, eller opretter den. Før stod rækken tom — pluginet skjulte Obsidians egen titel og satte intet i stedet.
- **En side kan skrives lige så vel som vælges** — `:graph` og de andre er en adresse, ikke kun et listepunkt. Et kolon starter intet filnavn, så at skrive ét hvor som helst tilkalder dem, og feltet bærer deres farve i stedet for at tilbyde at oprette en note, intet kunne hedde.
- **En række til Obsidians egen *Vis alle filtyper***, ved siden af reglen for prikfiler, da begge afgør, hvad en liste kan vise: den fortæller, at man skal finde indstillingen i Obsidians egne indstillinger og slå den til for at se alle filer, og knappen ved siden af åbner den side med indstillingen rullet i syne og blinket, som et resultat af en indstillingssøgning ville. Navngivet med Obsidians egne ord, forklaret på 45 sprog.
- **Boksens rod viser de sider, en fane kan indeholde** — `:graph`, `:search`, og hvad end visninger dine plugins registrerer, en hjemmefane eller en kalender iblandt dem. Vælg én, og fanen åbner den, ligesom et klik på en note åbner noten. Visninger, der findes for at vise en fil, er udeladt, fordi der ikke ville være noget for dem at vise.
- **Boksens eget skilletegn åbner din startside**, hvor et plugin tilbyder én, og er understreget for at vise det; trykket derefter folder filtræet væk, og trykket efter det sætter nøjagtigt det, der var åbent, tilbage. Uden et sådant plugin folder det første tryk, som før.
- **Skriv en sti fra filsystemets rod.** Et `/` forrest i et tomt felt åbner en i stedet for at blive slugt, hver senere skråstreg i den hører til den, og listen viser maskinen i stedet for boksen.

### Ændret

- **F2 og Fokusér stilinjen trykker Tab inde i feltet.** Hvad end Tab ville gøre der — næste trin, fuldførelse af det, du har skrevet, et skridt ind i en mappe — gør de også; kun der, hvor Tab løber tilbage til stiens begyndelse, forlader de feltet, F2 til overskriften i noten, kommandoen til noten. Før fik et felt, du havde skrevet i, F2 til at starte forfra på navnet, og kommandoen lukkede feltet.
- **Trinnet efter, at runden forlader feltet, er rodmappen.** Trykket efter F2's tilbagevenden til overskriften i noten, eller kommandoens tilbagevenden til noten, lander dér, hvor Tabs omgang gør — boksens rod, hele stien i feltet, dens første mappe markeret — så intet trin i ringen er overladt til Tab alene.
- **Fokusér stilinjen går samme runde som F2.** Den åbner på navnet i stedet for hele stien, tager de samme fire trin, og trykket efter det sidste lukker feltet og sætter markøren tilbage i noten — før løb den trinene rundt i det uendelige, og den eneste tast, der nåede rækken, kunne ikke forlade den.
- **Et optaget navn meldes, når du bruger det, ikke mens du skriver det.** Ethvert navn skrevet hen imod `Notes.md` passerer gennem navne, der kan være filer i sig selv, og advarslen plejede at blinke op og forsvinde bogstav for bogstav. Det, der er galt med et navns stavning, siges stadig, som det staves.
- **Et skilletegn, hvis mappenote allerede er åben, viser mappen** i stedet for at genåbne det, der allerede er på skærmen — hvilket er, hvad dets andet tryk altid har betydet.
- **Der, hvor du er, er fed i en liste**, ikke kun blå.
- **Alt, der ikke er en note, er orange i en liste**, ikke kun de teksttyper, Obsidian ikke har en visning til. Den lilla farve udpeger noterne i en mappe med blandet indhold; én farve til resten siger det samme hurtigere.

### Rettet

- **Backspace over en klikket mappe fjerner ikke længere boksens navn.** Skråstregen, der stod tilbage forrest, blev læst som en sti fra maskinens rod, hvilket tømte det indledende segment — og lukning af feltet med Escape satte det aldrig tilbage, så fanen mistede sit boksnavn og ikon for altid. En skråstreg forrest tæller nu kun som maskinens, når dens første mappe rent faktisk er der, og det indledende segment kommer tilbage ved enhver måde at forlade feltet på.
- Uden for boksen var filer skjulte, medmindre Obsidians **Registrer alle filendelser** var slået til — en indstilling om, hvad boksen indekserer, anvendt på mapper, der ikke er i boksen. En `.txt` ved siden af dine noter vises derude under alle omstændigheder.
- Boksnavnets liste gjorde intet på en fane uden fil, hvilket er netop den fane, du ville bruge til at gå et andet sted hen.
- Klik på boksens navn lod Obsidians egen titel stå tilbage ved siden af stien i feltet, gråtonet, hvor den ellers aldrig viser sig: rækken måler sig selv efter det, den har tegnet, og i det øjeblik har den tømt sig selv for at gøre plads til feltet.

- Klik på det tomme rum åbnede feltet og mistede det derefter: at afsløre noten i filudforskeren tager markøren med sig, så feltet stod åbent og markeret, mens hvert tastetryk gik til træet.
- Trinnet, der viser stien fra systemroden, tegnede et spor af den samme sti ved siden af feltet, utilpasset, så en dyb sti blev malet oven i sig selv.

## 1.3.0 — 2026-09-17[^1.3.0]

### Tilføjet

- **Hent en fil ind i boksen udefra.** Flyt eller kopiér en fil fra et vilkårligt sted på disken til en sti inde i din boks; den ankommer som en rigtig note, og en flytning fjerner først originalen, når kopien er lykkedes.
- **Slip tekst eller en fil på rækken for at skrive den ned.** På en mappe: en ny note i den mappe, navngivet mens du skriver. På notens navn, eller på en mappes skilletegn, hvor mappen har en mappenote: føjet til slutningen af den note, efter en bekræftelse.
- **Opret en mappenote** med et andet tryk på det, der åbner mappen, hvor et mappenoteplugin kører, og mappen endnu ikke har en. Den placeres dér, hvor [Folder notes](https://github.com/LostPaul/obsidian-folder-notes)' egne indstillinger siger.
- **Træk en mappe fra stilinjen hen på fanelinjen** for at åbne den dér: dens mappenote, hvis den har en, ellers en fane, der står i mappen.
- **Hjulet går gennem listen.** Over et navn åbner første drej navnets liste, og hvert drej derefter flytter fremhævningen en række. En række, der ruller sidelæns, beholder hjulet til at rulle.
- **Pil ud forbi feltets forkant** for at hente mappen foran det ind: <kbd>←</kbd> for én mappe, <kbd>Skift</kbd>+<kbd>Home</kbd> (eller <kbd>Home</kbd> med listen lukket) for dem alle.
- **Feltet bærer farven fra det, det navngiver**, den samme som rækken i listen, og bliver rødt, så snart intet svarer til det — i det øjeblik <kbd>Enter</kbd> ville oprette noget i stedet for at åbne det.
- **Mappenoter er grå i listen**, så de læses som mappens egne og ikke som endnu en note.
- **Midterklik på et skilletegn** for at åbne mappen i en ny fane: dens mappenote eller en fane, der står i den.

### Ændret

- **Hængelåsen og omdøbningsknappen er én kontrol.** Uden for boksen står en rød, lukket hængelås på knappens plads; åbnes den, overgår pladsen til knappen, og forlades omdøbningstilstanden, lukker den igen.
- **Omdøbningstasten spørger også hængelåsen.** Uden for boksen får ét tryk hængelåsen til at blinke; et andet tryk inden for et halvt sekund giver det, hængelåsen giver, og åbner omdøbningstilstanden.
- **Omdøbningstasten går en hel runde** — overskriften i noten, navn, navn med endelse, sti fra boksen, sti fra systemroden — og næste tryk er overskriften i noten igen.
- **<kbd>Ctrl</kbd>-klik og midterklik er ikke længere synonymer.** Det ene åbner en fane og går til den, det andet åbner den i baggrunden.
- **Højreklik på notens navn åbner filens egen menu.**
- **Listen er så høj, som vinduet tillader**, i stedet for Obsidians faste 300 pixels.
- **Et klik på en mappe, mens et felt er åbent, beholder hele stien efter den**, og et klik ind i en mappe inde i feltet viser hele den mappes indhold.
- **Skilletegnet åbner en mappenote i enhver dybde**, når Folder notes kører, og er understreget overalt, hvor der findes en. Før virkede det kun for mapper på øverste niveau. Med de andre mappenoteplugins viser skilletegnet stadig mappen.

### Rettet

- **Et åbent felt overlevede sin fil.** Skiftede man til en anden note med stilinjen åben, blev rækken ved med at nævne den gamle fil resten af sessionen.
- **Slet, Omdøb og Opret en kopi blev afvist uden for boksen**, selvom hængelåsen var åben, og kunne aldrig nås for billeder, PDF'er og sider.
- **<kbd>Ctrl</kbd>+<kbd>Enter</kbd> gjorde intet, mens listen var åben** — og det er sådan, ethvert felt åbner.
- **<kbd>Enter</kbd> med listen åben, men intet fremhævet**, gjorde intet; nu bekræfter den det, du skrev.
- **En række, der løb over, selvom alle navne allerede var så korte som muligt, kunne ikke rulles**, så enden af stien var uden for rækkevidde.
- **Når pluginet blev slået fra, efterlod det en død knap** i overskriftslinjen på hver note, det havde ændret.

## 1.2.0 — 2026-08-25[^1.2.0]

### Tilføjet

- **Sprogindstilling.** Lure følger som standard Obsidians sprog og kan sættes til et hvilket som helst af sine egne. Det er også den eneste vej til den græske og den sanskritiske oversættelse, som Obsidian ikke selv tilbyder. Indstillingens egen etiket forbliver på engelsk, så den altid kan findes igen fra et sprog, du ikke kan læse.

## 1.1.2 — 2026-08-25[^1.1.2]

### Ændret

- **Lettere stylesheet.** Rækken bruger ikke længere `:has()`-selektorer eller de fleste `!important`-regler. Den tilpasser sig igen med mindre arbejde, og advarslerne fra pluginreviewet faldt fra 56 til 7.

## 1.1.1 — 2026-08-22[^1.1.1]

### Rettet

- **Et kort mappenavn kunne blive tegnet med et hul i** — `atlas` som `atl as` — fordi pladsen, der var reserveret til den forkortede form, var bredere end selve navnet.

## 1.1.0 — 2026-08-22[^1.1.0]

### Tilføjet

- **Højreklikkets ordforråd.** Ét tryk åbner en menu; to og tre tryk kopierer gradvist mere — navnet, navnet med endelse, stien. Rækkens menuer svarer nu til Filers, punkt for punkt.
- **Menuer uden for boksen.** Listens rækker og den eksterne fremviser tilbyder at åbne, *Kopiér sti* og *Vis i systemets stifinder*; med hængelåsen åben også *Ny note*, *Ny mappe*, *Opret en kopi*, *Omdøb…* og *Slet*. Slet flytter til systemets papirkurv og er aldrig permanent.
- **Åbn andre steder.** <kbd>Ctrl</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Skift</kbd> og midterklik på notens navn eller en mappe åbner den i en ny fane, en opdeling eller et vindue. Begge kan trækkes, ligesom deres rækker i Filer.
- **Træk noter hen på rækken for at flytte dem.** Slip en note, flere noter eller en mappe på et mappesegment eller boksens navn.
- **Kommando: Fokusér stilinjen**, med hele stien markeret — ingen standardgenvejstast, tildel din egen.
- **Skriv en URL** i stilinjen: `http(s)://` og `obsidian://` åbnes som links, `file://` og procentkodede stier åbner filen.
- **Tab-fuldførelse**, sådan som en shell gør det: hvert tryk fuldfører, så langt mappens navne stemmer overens, og stopper, hvor de er forskellige. <kbd>Skift</kbd>+<kbd>Tab</kbd> går tilbage. Når der ikke er mere at fuldføre, udvider <kbd>Tab</kbd> i stedet markeringen: navn, navn med endelse, sti fra boksen, sti fra systemroden.
- **Listen åbner, hvor du er**, og viser det, du peger på, som forhåndsvisning i feltet; forlader du listen, får du din tekst tilbage.
- **Flyt en note ud af boksen** efter en bekræftelse, der tæller de links, den vil bryde. Den kopieres ud og lægges derefter i papirkurven, så den kan gendannes som enhver slettet note.
- **Indstillingen “Vis filendelser”**, og stier i anførselstegn (som Windows' *Kopiér som sti* laver dem) bliver forstået.
- **Indstillingerne vises i Obsidians indstillingssøgning** i Obsidian 1.13 og nyere.

### Ændret

- **Lange stier passer til ruden.** Navne forkortes fra det mindst nyttige først — boksens navn, så endelsen, så mapper, notens eget navn sidst — aldrig ud over det punkt, hvor de kan skelnes fra hinanden. Hold markøren over et forkortet navn for at læse det helt.
- **Et klik på notens navn markerer det uden endelse**, så en omdøbning ikke længere risikerer at ændre filtypen.
- **Omdøbningstasten åbner på navnet uden endelse**, og flere tryk udvider markeringen.
- **Et klik på en mappe holder resten af stien synlig**, også uden for boksen.
- **Gennemser du tilbage ind i din boks, åbnes filer som noter**, med links og tilbagelinks, i stedet for i den eksterne fremviser.

### Rettet

- **Menuetiketterne var engelske på alle sprog**; nu kommer de fra Obsidians egne oversættelser.
- **Omdøbningstasten endte blindt i Obsidians omdøbningsdialog**, når noten var rullet forbi sin overskrift.
- **<kbd>Esc</kbd> krævede to tryk** for at lukke feltet og dets liste.
- **<kbd>Ctrl</kbd>+<kbd>Enter</kbd> åbnede et link i editoren** i stedet for at virke på stilinjen.
- **Omdøbning uden for boksen mistede det skrevne navn**, når der blev trykket på hængelåsen.
- **Tab kunne gå i ring uden at komme videre** i en mappe, der ligger ved siden af sin egen mappenote.

## 1.0.4 — 2026-08-13[^1.0.4]

### Tilføjet

- **Den note, du står på, er markeret med blåt** i listen, så du kan se, hvor du startede, når du gennemser tilbage til dens mappe.

## 1.0.3 — 2026-08-13[^1.0.3]

### Dokumentation

- README'en linker til pluginets side i fællesskabskataloget, og de oversatte README'er er bragt ajour.

## 1.0.2 — 2026-08-13[^1.0.2]

### Ændret

- **Kræver Obsidian 1.8.7 eller nyere** (før 1.4.0). To funktioner, stilinjen bygger på — kopiering af filer og fejlværktøjstippet under feltet — kræver det.
- **Udgivelsesdownloads har signeret build-proveniens**, så du med `gh attestation verify` kan bekræfte, at `main.js` er bygget fra dette repository.

### Rettet

- **At åbne en manglende ekstern fil i standardappen mislykkedes i stilhed**; fejlen bliver nu rapporteret.

## 1.0.1 — 2026-08-13[^1.0.1]

### Rettet

- **I omdøbningstilstand kom en note i konflikt med sig selv** — gennemså man tilbage til dens egen mappe, var dens navn skjult i listen, som om den blokerede sin egen omdøbning.
- **Den første mappevisning efter start af Obsidian foldede intet ud.**
- **Valg af en mappe i listen kunne afslutte omdøbningstilstanden** i stedet for at gå ned i mappen.
- **Eksterne ændringer kunne blive overskrevet i stilhed** af en anden skriver, såsom Sync eller en anden rude. Skrivninger er nu atomare.
- **Nulstillingen af fokusrammen smittede af på andre visninger**; den gælder nu kun overskriftslinjer, som Lure har ændret.

### Dokumentation

- README'en og brugsvejledningen findes på alle 44 sprog, pluginet leveres med.
- Vejledningen nævnte Obsidians indstilling *Detect all file extensions* (Genkend alle filendelser), som nu hedder *Show all file types* (Vis alle filtyper).

## 1.0.0 — 2026-08-10[^1.0.0]

Første udgivelse. Erstatter filnavnet i en notes overskriftslinje med en klikbar, redigerbar sti gennem boksen — en adresselinje til dine noter med Dolphins som forbillede.

### Tilføjet

- **Klik på en mappe** for en liste over indholdet i mappen ovenover, så du kan bytte den ud med en søskendemappe og lade resten af stien være.
- **Klik på skilletegnet** efter en mappe for at vise og folde den ud i Filer, eller for at åbne dens mappenote, hvor Folder notes håndterer den.
- **Klik på filnavnet eller på tom plads** for at skrive en sti, med autofuldførelse: `/` går ned, <kbd>Backspace</kbd> går et niveau op, <kbd>Enter</kbd> bekræfter.
- **Flyt/omdøb-tilstand** stiller de samme handlinger om til flytning og omdøbning, med de samme kontroller, som Obsidian selv laver.
- **<kbd>Ctrl</kbd> åbner i en ny fane** — eller kopierer i flyt/omdøb-tilstand noten derhen i stedet.
- **<kbd>F2</kbd> skifter** mellem overskriften i noten og stilinjen.
- **Uden for boksen** (slået fra som standard): boksens navn åbner dine andre bokse, hjemmemappen, filsystemets rod og tilsluttede drev. Intet derude bliver skrevet, før du låser op, og en note kan kun kopieres ud af boksen, aldrig flyttes.
- **45 sprog.**

[^1.5.0]: Ændringer siden 1.4.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.4.0...1.5.0>
[^1.4.0]: Ændringer siden 1.3.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.3.0...1.4.0>
[^1.3.0]: Ændringer siden 1.2.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.2.0...1.3.0>
[^1.2.0]: Ændringer siden 1.1.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.2...1.2.0>
[^1.1.2]: Ændringer siden 1.1.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.1...1.1.2>
[^1.1.1]: Ændringer siden 1.1.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.0...1.1.1>
[^1.1.0]: Ændringer siden 1.0.4: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.4...1.1.0>
[^1.0.4]: Ændringer siden 1.0.3: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.3...1.0.4>
[^1.0.3]: Ændringer siden 1.0.2: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.2...1.0.3>
[^1.0.2]: Ændringer siden 1.0.1: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.1...1.0.2>
[^1.0.1]: Ændringer siden 1.0.0: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.0...1.0.1>
[^1.0.0]: Den første udgivelse: <https://github.com/Gelaende51/obsidian-lure/releases/tag/1.0.0>
