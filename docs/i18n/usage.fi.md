<!-- Käännös tiedostosta docs/usage.md — tilanne: commit 7b2691a.
     Konekäännös (Claude Opus 5), jota äidinkieliset puhujat eivät ole
     tarkistaneet. Lisäosan tekstit tulevat tiedostosta
     src/lang/translations.ts ja Obsidianin omat sovelluksen mukana
     tulevista käännöksistä, joten ne vastaavat sitä, mitä näet
     näytölläsi. -->

**Lue tämä muilla kielillä:** [English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · [Čeština](usage.cs.md) · [Dansk](usage.da.md) · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · **Suomi** · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · [Bahasa Indonesia](usage.id.md) · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · [Norsk](usage.no.md) · [Polski](usage.pl.md) · [Português](usage.pt.md) · [Português (Brasil)](usage.pt-BR.md) · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

# Käyttö

[← takaisin README-tiedostoon](README.fi.md)

## Polku

Muistiinpanon täysi polku holvissa korvaa paljaan tiedostonimen näkymän otsikkorivillä — rivillä, joka on välilehtirivin alapuolella ja jolla ovat myös edellinen/seuraava-painikkeet.

Rivillä on kaksi napsautettavaa kohtaa, ja **Kansion nimi avaa luettelon** ratkaisee, kumpi tekee mitäkin:

| | Kansion nimi | Sen jälkeinen erotin |
| --- | --- | --- |
| **Päällä** (oletus) | Valitsee kansion muokattavaksi | Avaa kansion |
| **Pois** | Avaa kansion | Laskeutuu kansioon |

"Avaa kansion" tarkoittaa sitä, mitä kyseisen osan napsautus tekee Obsidianissa ilman lisäosia. Ilman kuuntelevaa lisäosaa kansio näytetään sivupalkin tiedostoselaimessa — korostettuna ja avattuna niin, että sisältö näkyy.

Kun [Folder notes](obsidian://show-plugin?id=folder-notes) on asennettuna, sama napsautus avaa sen sijaan kansion muistiinpanon. Se on ainoa kansiomuistiinpanolisäosa, jonka on havaittu ottavan otsikkorivin polun haltuunsa; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) ja [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) hallitsevat kansiomuistiinpanoja mutta eivät kuuntele polun napsautusta, joten niiden kanssa erotin näyttää kansion tavalliseen tapaan. Katso [yhteensopivuus](../compatibility.md#verified-against).

Erotin on **alleviivattu vain silloin, kun sitä edeltävällä kansiolla todella on kansiomuistiinpano**, joten alleviivaus on lupaus siitä, että avattavaa on. Jokainen erotin on napsautettava joka tapauksessa — alleviivaamaton näyttää ja avaa kansionsa sivupalkissa, mistä osoitin edelleen kertoo. Alleviivaus siirtyy pois kansion nimestä samaan aikaan: kun vaihto on päällä, nimi avaa luettelon, joten sen merkitseminen linkiksi muistiinpanoon olisi valhe.

**Nimeämis-/siirtotila ohittaa molemmat** riippumatta siitä, mitä asetus sanoo: mikään rivillä ei avaa kansiota siirron ollessa kesken, sillä kansion avaaminen hylkäisi siirron. Kansioiden nimet valitaan muokattaviksi ja erottimet laskeutuvat — molemmat ovat tapoja osoittaa kohde — ja alleviivaus katoaa osoittaakseen, että avaaminen on keskeytetty.

**Holvin juuri** on ainoa osa, joka ei ole polun osa. Sillä ei ole vanhempaa, josta listata sisaruksia, joten se avaa sen sijaan [sijaintien luettelon](#selaaminen-holvin-ulkopuolella) — muut holvisi, kotikansiosi, tiedostojärjestelmän juuren ja liitetyt asemat.

## Osan napsauttaminen: vaihda se sisarukseen

Kansion nimen napsautus valitsee **kyseisen kansion nimen** tekstikenttään ja avaa luettelon kansiosta **yhtä tasoa ylempää** — sen vanhemmasta. Kirjoittaminen tai rivin valitseminen vaihtaa tämän kansion sisarukseen ja jättää kaiken sen alapuolella koskematta, joten `Projektit/2026/Aloitus.md` → napsauta `2026` → valitse `2025` antaa sinulle `Projektit/2025/Aloitus.md`.

**Muistiinpanon nimen** napsautus toimii samalla tavalla sen omaa kansiota vasten ja valitsee tiedostonimen **tiedostopäätteineen** — muistiinpanon nimeäminen tai uudelleen kohdistaminen tarkoittaa yleensä myös sen muuttamista.

Kansion napsautus on jo valinnut yhden osan, joten **yksi napsautus lisää** laajentaa valinnan koko riviin — kyseiseen kansioon *ja* kaikkeen sen alapuolella — ja kirjoittaminen korvaa silloin loput polusta kerralla. Toimii samoin navigointi- ja nimeämis-/siirtotilassa.

Tämä pätee vain kentän avanneen napsautuksen jatkona. Kun olet kerran käyttänyt kenttää, se käyttäytyy kuin mikä tahansa tekstikenttä: napsautus asettaa kohdistimen, kaksoisnapsautus ottaa sanan, kolmoisnapsautus rivin.

Kummassakin tapauksessa loput polusta pysyy näkyvissä kentän ympärillä, palasina sen edessä ja valitsemattomana tekstinä sen jäljessä, joten täysi polku ei koskaan katoa otsikosta. Kirjoita korvataksesi valinnan, tai paina <kbd>End</kbd> / <kbd>→</kbd> säilyttääksesi sen ja muokataksesi siitä eteenpäin. Luettelo näyttää koko kansion riippumatta esitäytöstä; se alkaa suodattaa vasta, kun todella kirjoitat.

## Laskeutuminen erottimen kautta

Erottimen napsautus (kun **Kansion nimi avaa luettelon** on pois päältä) laskeutuu sitä edeltävään kansioon: luettelo näyttää *sen* kansion sisällön, ja loput polusta avautuu valittuna kenttään. Kansion valitseminen lisää sen polkuun ja avaa heti seuraavan luettelon, joten voit napsauttaa itsesi alas puussa poistumatta otsikkoriviltä.

## Luettelon rivit ovat oikeita tiedostonhallinnan rivejä

Jokainen luettelon tiedosto ja kansio käyttäytyy kuin rivinsä tiedostoselaimessa:

- **Napsauta hiiren oikealla** saadaksesi saman pikavalikon — *Uusi muistiinpano* / *Uusi kansio* kansiolle, *Avaa uudessa välilehdessä* / *Muuta nimeä…* / *Poista* tiedostolle — mukaan lukien kohdat, joita muut lisäosat lisäävät tiedostovalikkoihin.
- **Vedä** rivi minne tahansa, missä Obsidian ottaa tiedoston vastaan: muokkaimeen lisätäksesi linkin, kansion päälle tiedostoselaimessa siirtääksesi sen, välilehtiriville avataksesi sen.

Valikkojen sanamuodot tulevat Obsidianin omista käännöksistä, joten ne vastaavat muuta sovellusta kaikilla kielillä.

## Polun kirjoittaminen

- **Tyhjän tilan** napsautus polun edessä tai jäljessä avaa tekstikentän, joka on esitäytetty koko polulla ja kokonaan valittuna — kirjoita sen päälle tai muokkaa paikallaan. (Itse tiedostonimen napsautus valitsee vain tiedostonimen; katso edellä.)
- Kirjoittaminen polun ollessa näkyvissä muuttaa viimeisen osan pieneksi kentäksi, jossa on nykyiseen kansioon rajattu elävä täydennys.
- `/` vahvistaa nykyisen osan ja laskeutuu siihen.
- <kbd>Backspace</kbd> tyhjässä kentässä astuu takaisin ylempään kansioon ja avaa sen nimen uudelleen kohdistin lopussa.
- <kbd>Enter</kbd> vahvistaa; <kbd>Esc</kbd> tai napsautus muualle peruu takaisin tiedoston todelliseen polkuun.

Kenttä on täysin koruton — ei laatikkoa, ei reunaa — joten se luetaan itse polkutekstinä, ja se kasvaa itsestään kirjoittaessasi.

## Navigointi ei koske avoinna olevaan tiedostoon

Oletustilassa (navigointi) avoinna olevaa muistiinpanoa **ei koskaan** nimetä uudelleen eikä siirretä.

- Polku, joka osoittaa olemassa olevaan tiedostoon, avaa sen.
- Polku, jota ei vielä ole, kysyy *"Luodaanko uusi tiedosto?"*. Vahvistaminen luo puuttuvat kansiot ja tiedoston; peruminen ei tee yhtään mitään.

## <kbd>Ctrl</kbd> — uusi välilehti, ja kopiointi siirron sijaan

<kbd>Ctrl</kbd>-näppäimen (<kbd>Cmd</kbd> macOS:ssä) pitäminen pohjassa, kun valitset tiedoston luettelosta tai kun painat <kbd>Enter</kbd> polulla, lähettää tuloksen **uuteen välilehteen** tämän sijaan:

| | Ilman näppäintä | <kbd>Ctrl</kbd>-näppäimen kanssa |
| --- | --- | --- |
| Valitse tai kirjoita olemassa oleva tiedosto | Avautuu tässä | Avautuu uudessa välilehdessä |
| Kirjoita polku, jota ei ole | Kysyy, avaa sitten tässä | Kysyy, avaa sitten uudessa välilehdessä |
| Vahvista polku nimeämis-/siirtotilassa | **Siirtää** muistiinpanon sinne | **Kopioi** sen sinne ja avaa kopion uudessa välilehdessä |

Näppäin luetaan Obsidianin omalla säännöllä, joten se käyttäytyy täsmälleen kuten linkillä tai tiedostoselaimen rivillä — keskinapsautus tarkoittaa myös "uusi välilehti", <kbd>Ctrl</kbd>+<kbd>Alt</kbd> jakoa ja <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> uutta ikkunaa.

Kopiointi kieltäytyy korvaamasta täsmälleen kuten siirtokin — myös muistiinpanon omaan polkuun, jossa ei ole mitään järkevää kopioitavaa.

## Selaaminen holvin ulkopuolella

**Tämä on oletuksena pois päältä.** Kytke ensin asetuksista päälle **Pääsy ulkoisiin tiedostoihin** — lukeminen ja kirjoittaminen holvin ulkopuolella on ainoa asia, jonka tämä lisäosa tekee ja jota Obsidian itse ei tee, joten se valitaan päälle eikä pois. Kun se on pois, holvin nimi vain näyttää holvisi tiedostoselaimessa, eikä mikään täällä katso koskaan sen ohi.

**Holvin nimen** napsautus (tai 🏠-kuvakkeen, kun *Näytä holvin nimi* on pois) avaa luettelon sijainneista sisällön sijaan:

- **Muut holvisi**, luettuna Obsidianin omasta rekisteristä, viimeksi avatut ensin, kukin Obsidianin oman holvikuvakkeen alla — sen, jota sovellus itse käyttää holvikomennoille. Jo avoinna oleva holvi saa talon sen sijaan: siitä rivi oletuksena alkaa, se ei ole paikka johon mennä.
- **Kotikansio**, oman tilinimensä alla, merkittynä `~`-merkillä. Lucidessa ei ole tildeä, joten lisäosa piirtää tämän Lucidesta puuttuvan kuvakkeen sen omaan 24×24-ruudukkoon samalla viivalla — kuvake, joka valikoimasta puuttuu, eikä kirjoitusmerkki kuvakkeiden joukossa.
- **Tiedostojärjestelmän juuri**, merkittynä `root` — kääntämättä, koska se on sen nimi joka järjestelmässä — eikä `/`, joka luettaisiin tyhjänä askeleena sitä seuraavan erottimen vieressä.
- **Liitetyt asemat**, kuvake tyyppiä kohti siellä missä sen selvittäminen on halpaa: verkkojaot, optiset levyt, levykkeet ja siirrettävät mediat saavat omansa; kaikki muu saa yleisen aseman. Windowsissa asemat näkyvät muodossa `C:` yleisellä kuvakkeella — taltioiden nimet ja tarkat tyypit vaatisivat WMI:n, jota tarkoituksella ei käytetä.

Toisen holvin valitseminen **ei vaihda Obsidiania siihen.** Kaikki avoinna oleva pysyy avoinna; polkurivi alkaa vain selata siellä. Juuri siinä on koko idea siinä, että se on polkurivillä eikä jätetty sivupalkin holvinvaihtajalle.

### Kun olet ulkopuolella

Polku **alkaa valitsemastasi sijainnista**, ei koneen hakemistorakenteesta — valitse `Arkisto`, ja rivillä lukee `Arkisto / muistiinpanot / …`, ei `/home/sinä/Holvit/Arkisto/muistiinpanot/…`. Ensimmäinen osa kantaa kuvaketta sen mukaan, mikä se on (holvi, koti, asema), ja <kbd>Backspace</kbd> pysähtyy siihen eikä kävele ylös muuhun tiedostojärjestelmään. Kun *Näytä holvin nimi* on pois, tuo osa on pelkkä kuvake — asetus koskee rivin ensimmäistä osaa riippumatta siitä, minkä holvin se nimeää, eikä vain omaasi.

Polkurivi on **kehystetty virhevärillä** — samalla renkaalla, jonka nimeämistila piirtää — niin kauan kuin se osoittaa holvisi ulkopuolelle. Se merkitsee pysyvää tilaa, ei hetkeä: niin kauan kuin se on näkyvissä, mikään Obsidianin omasta käsittelystä ei koske sitä, mitä rivi näyttää, ja kirjoittaminen on lukittu kunnes toisin sanot.

Selaaminen toimii muuten kuten sisäpuolella: palaset, erottimet, kirjoittaminen, täydennys, <kbd>Backspace</kbd> ulos astumiseen. Samat näkyvyyssäännöt pätevät myös, joten tukemattomat tiedostopäätteet vaativat yhä Obsidianin asetuksen *Tunnista kaikki tiedostopäätteet* ja piilotiedostot yhä tämän lisäosan asetuksen.

**Oikea napsautus ja veto** eivät toimi siellä — ne ovat tiedostoselaimen omia käsittelijöitä, ja ne tarvitsevat tiedoston, jonka holvi tuntee.

### Kirjoittaminen holvin ulkopuolelle

Kaikki kirjoittava on **oletuksena lukittu.** **Riippulukko** ilmestyy otsikon nimeämispainikkeen viereen niin kauan kuin rivi osoittaa holvisi ulkopuolelle; sen painaminen avaa lukon ja muuttaa sen punaiseksi, rivin ympärillä olevan renkaan tapaan.

Lupa myönnetään **sijainnille, ei hetkelle**: se säilyy kaiken sen yli, mitä tekisit työskennellessäsi yhdessä paikassa — siirron viimeistely, kentästä pois napsauttaminen, tiedoston avaaminen — ja päättyy, kun valitset luettelosta toisen holvin, aseman tai juuren, kun rivi palaa holvitiedostoon, tai kun painat riippulukkoa uudelleen. Niinpä sarja siirtoja yhden kansion sisällä maksaa yhden painalluksen, ei yhtä tiedostoa kohti.

Riippulukon ollessa auki polkurivi käyttäytyy siellä kuten sisäpuolella:

| Ele | Tulos |
| --- | --- |
| Kirjoita nimi, jota ei ole, <kbd>Enter</kbd> | Sama "luodaanko se?"-kysymys kuin sisäpuolella; puuttuvat kansiot luodaan myös. Nimestä ilman tiedostopäätettä tulee `.md`, aivan kuten sisäpuolella |
| Nimeämis-/siirtotila, kirjoita uusi nimi | Nimeää uudelleen tiedoston, jota rivi näyttää. Nimi ilman tiedostopäätettä säilyttää tiedoston oman — täällä kansio pitää sisällään kaikenlaisia tiedostoja, eikä nimeäminen saa hiljaa muuttaa `.png`-tiedostoa `.md`-tiedostoksi |
| Nimeämis-/siirtotila, selaa muualle, valitse **säilytä tämä nimi** | Siirtää sen sinne sillä nimellä, joka sillä jo on |
| Pidä <kbd>Ctrl</kbd> pohjassa kummassa tahansa | Kopioi siirtämisen sijaan ja avaa kopion uudessa välilehdessä |

Lukittuna kaikki nämä kertovat, mikä ne estää, sen sijaan että tapahtuisivat. Mitään ei koskaan korvata kummassakaan tilassa: jo olemassa oleva kohde hylätään, ja hylkäys on tiedostojärjestelmän oma (`COPYFILE_EXCL`, yksinomainen luonti) eikä tarkistus, joka voisi hävitä kilpajuoksun. Siirto tiedostojärjestelmien välillä — USB-tikulta, verkkojaosta — putoaa takaisin kopioi-sitten-poista-tapaan, ja alkuperäinen poistetaan vasta kun kopio on perillä.

**Yhtä asiaa riippulukko ei avaa: muistiinpanon siirtämistä *ulos* holvistasi.** `fileManager` ei voi seurata tiedostoa tuon rajan yli, joten jokainen muistiinpanoon osoittava linkki rikkoutuisi hiljaa ja Obsidian yksinkertaisesti näkisi sen katoavan. <kbd>Ctrl</kbd>-näppäimen pitäminen kopioi sen sen sijaan ulos, missä tuota ongelmaa ei ole lainkaan, ja ilmoitus sanoo niin. Toiseen suuntaan — ulkopuolisen tiedoston tuominen *sisään* holviin — ei ole vielä kytketty sekään.

### Ulkoisen tiedoston avaaminen

Obsidianin muokkain toimii vain holvin sisäisillä tiedostoilla, joten ulkoista tiedostoa **ei voi** avata oikeana muistiinpanona linkkeineen, takalinkkeineen ja kaikkineen — se on sovelluksen rajoitus, ei tämän lisäosan. Sellaisen valitseminen avaa sen sijaan **esikatselun**, vain luettavana kunnes toisin sanot:

| Tyyppi | Näytetään |
| --- | --- |
| `.md`, `.markdown` | Muotoiltuna Markdownina |
| Kuvat, ääni, video, PDF | Sisäänrakennetulla soittimella/katselimella |
| Mikä tahansa muu **tekstitiedosto** (`.json`, `.css`, `.log`, `.txt`, …) | Sellaisenaan pelkkänä tekstinä |
| Binäärimuodot ilman katselinta | Luovutetaan toiminnolle *Avaa ulkoisesti* |

Katselimella on kaksi tapaa lukea tiedosto, ja koska ne sulkevat toisensa pois, näytetään vain se, johon **vaihtaisit**:

| | Mitä se tekee | Oletus tyypeille |
| --- | --- | --- |
| **Näytä Markdownina** | Muotoilee tiedoston muistiinpanona, vain luettavana | `.md`, `.markdown` |
| **Muokkaa tekstinä** | Lähde, muokattavissa | kaikki muut |

Holvin ulkopuolella **Muokkaa tekstinä** on myös painallus, joka poistaa vain luku -tilan — tila ja lupa ovat yksi ele kahden pohdittavan painikkeen sijaan. Se on punasävyinen **aina kun painallus poistaisi vain luku -tilan**, olitpa sitten aseistamassa muokkausta paikallaan tai tulossa suoraan muotoillusta näkymästä; holvin sisällä ei ole mitään avattavaa, joten siellä se on tavallinen. **Näytä Markdownina** saa kevyen korostusvärisen sävyn — saman, jonka Obsidian antaa valitulle tekstille — mikä merkitsee sen paluutieksi eikä kehotukseksi.

Koska painike seuraa *muokkausta* eikä raakaa tilaa, tekstinäkymässä vain luettavana oleva tiedosto tarjoaa yhä **Muokkaa tekstinä**: se on painallus, joka aseistaa sen. Tiedosto, johon ei voi koskaan kirjoittaa — katkaistu tai lukukelvoton — sanoo sen sijaan **Näytä tekstinä**, koska se on kaikki mitä painallus voi tuottaa.

Oletukset ovat hyödyllisin päin eivätkä kirjaimellisin: `#` komentotulkkiskriptissä on kommentti, ei otsikko, joten `.log`-tiedoston muotoilu Markdownina nielaisisi sen hiljaa. Kumman tahansa oletuksen voi ohittaa tiedostokohtaisesti, ja valinta menee välilehden historiaan, joten edellinen/seuraava ja uudelleen avattu työtila säilyttävät sen — moni muistiinpano asuu `.txt`-tiedostossa, ja moni `.md`-tiedosto on helpompi lukea lähteenä.

**Holvisi tiedostot ovat muokattavissa heti**, ilman avaamista: *Muokkaa tekstinä* on oikea muokkain ja kirjoittaa takaisin sitä mukaa kuin kirjoitat.

**Muokkaus muistetaan vaihdon yli.** Siirtyminen näkymään *Näytä Markdownina* keskeyttää sen — staattisessa muotoilussa ei ole mitään mihin kirjoittaa, ja Live Preview tarvitsee Obsidianin oman muokkaimen, joka on olemassa vain holvin sisäisille tiedostoille — joten mikään ei väitä sinun muokkaavan siellä ollessasi. Paluu näkymään *Muokkaa tekstinä* jatkaa siitä, mihin jäit.

**Holvin ulkopuoliset tiedostot avautuvat vain luettavina, ja *Muokkaa tekstinä* poistaa sen.** Painallus on koko portti: siihen asti mitään ei kirjoiteta sinne. Sen jälkeen tiedosto tallentuu kirjoittaessasi, aivan kuten holvissa oleva; ja tilarivi vaihtuu lukosta kynäksi. Avaus koskee tuota yhtä tiedostoa tuossa yhdessä välilehdessä — toiseen tiedostoon siirtyminen lukitsee uudelleen, eikä sitä tarkoituksella tallenneta välilehden historiaan, joten uudelleen avattu työtila ei koskaan palaa kirjoitus jo aseistettuna järjestelmätiedostoon, jonka avaamista et muista.

**Katkaistut tiedostot pysyvät vain luettavina joka tapauksessa** — näytöllä olevan tallentaminen hylkäisi kaiken rajan takaa, joten painiketta ei tarjota lainkaan sen sijaan että se tarjottaisiin ja hylättäisiin. Sama koskee tiedostoa, jota ei voitu lukea: takaisin kirjoitettavaa ei ole muuta kuin tyhjä ruutu.

Jos kirjoitus epäonnistuu — vain luettava liitos, tiedosto jota et omista — järjestelmän oma syy näytetään ilmoituksessa.

Hyvin suuret tiedostot näytetään katkaistuina, ja tilarivi kertoo sen sen sijaan että antaisi sinun huomata sen itse — muiden ehtojen rinnalla eikä painikkeiden perässä, koska se on tiedostoa koskeva tosiasia kuten muutkin. Rajat mitataan elävää muotoilijaa vasten eikä arvata — megatavun tekstin taittaminen yhteen ruutuun tappaa Obsidianin muotoiluprosessin kokonaan, ja Markdown maksaa moninkertaisesti tavua kohti pelkkään tekstiin verrattuna, joten näillä kahdella on eri rajat ja yksi valtava rivi lyhennetään silloinkin, kun tiedosto kokonaisuutena on pieni.

**Tilarivit ovat merkintöjä, ja selitys on työkaluvihje.** Jokainen rivi kertoo, mikä on totta, niin harvalla sanalla kuin siihen menee — *Holvin ulkopuolella*, *Ei muokkainta tälle tiedostotyypille*, *Katkaistu — tiedosto liian suuri* — koska niiden vieressä olevat painikkeet kertovat jo, missä tilassa tiedosto on. Osoittimen pitäminen rivin päällä antaa lauseen: miksi Obsidian ei voi avata sitä muistiinpanona, mitä tälle tiedostotyypille muuten tapahtuisi, mitä katkaisu sinulle maksaa.

Tämä koskee myös **holvisi sisällä** olevia tiedostoja. Obsidian luovuttaa jokaisen tiedostopäätteen, jolle sillä ei ole näkymää, suoraan työpöydän oletussovellukselle — joten holvissasi oleva `.txt` tai `.json` poistuisi Obsidianista kokonaan. Ne avautuvat nyt samaan katselimeen, oranssin renkaan kanssa, koska "avaa se Obsidianissa" on juuri se mitä pyysit — ja holvitiedostoina ne ovat siellä muokattavissa ilman mitään avaamista. Binääritiedostot ilman katselinta säilyttävät Obsidianin toiminnan; näytettävää ei ole.

Esikatselu avautuu **siihen välilehteen, jossa olit**, joten edellinen/seuraava palauttavat sinut muistiinpanoon, josta tulit; pidä <kbd>Ctrl</kbd> pohjassa saadaksesi uuden välilehden kuten kaikkialla muuallakin. Otsikkorivi näyttää edelleen ulkoisen tiedoston polkua sen ollessa auki, joten voit jatkaa selaamista siitä.

Sisällön yläpuolella oleva vaisu rivi tarjoaa uloskäynnit:

- **Avaa holvissa *(holvi)*** — näytetään, kun tiedosto kuuluu johonkin muuhun holviisi. Luovuttaa sen Obsidianin omalle URI-käsittelijälle, joka avaa kyseisen holvin ikkunan muistiinpano siinä, oikeana muokattavana muistiinpanona. Tämä ikkuna jätetään täsmälleen ennalleen; mikään ei vaihdu allasi.
- **Näytä Markdownina** / **Muokkaa tekstinä** — kaksi lukutapaa; jälkimmäinen poistaa myös vain luku -tilan holvin ulkopuolella.
- **Avaa ulkoisesti** — luovuttaa tiedoston työpöydän oletussovellukselle, mukaan lukien binäärimuodot, joita tämä katselin ei osaa näyttää.

Mitään holvisi ulkopuolella ei kirjoiteta, ellet paina ensin *Muokkaa tekstinä*. Katso README-tiedoston osio [Holvin ulkopuolella](README.fi.md#holvin-ulkopuolella) koko selvitystä varten.

## Kaksi varoitusväriä

| | Milloin | Mitä se tarkoittaa |
| --- | --- | --- |
| **Punainen** rengas polkurivillä | Rivi osoittaa holvisi ulkopuolelle | Obsidian ei voi avata siellä olevaa muistiinpanona, eikä sinne kirjoiteta mitään ennen kuin avaat riippulukon. |
| **Oranssi** rengas polkurivillä, oranssit rivit luettelossa | Tiedosto on tekstityyppi, jolle Obsidianilla ei ole näkymää | Varoitus. Obsidian luovuttaisi sen työpöydän oletussovellukselle; lisäosa näyttää sen sen sijaan. |

**Nämä kaksi ovat riippumattomia, ja molemmat voivat päteä yhtä aikaa** — ulkoinen `.json` on holvisi ulkopuolella *ja* tyyppi, jolle Obsidianilla ei ole muokkainta. Katselimessa ne näkyvät erillisinä riveinä, joista kukin kertoo vain oman asiansa. Polkurivillä punainen voittaa, kun molemmat pätevät, koska kaksi rengasta olisi vain kohinaa.

Oranssi taso on tarkoituksella kapea. Rekisteröidyt tyypit (Markdown, canvas, kuvat, PDF, ääni, video) käsitellään kunnolla eivätkä ne saa mitään. Binääritiedostot eivät saa mitään sekään — et vahingossa muokkaa `.zip`-tiedostoa sekaisin. Jäljelle jää täsmälleen vaara: `.json`, `.css` tai `.log`, jonka **Tunnista kaikki tiedostopäätteet** on tehnyt näkyväksi.

Punainen voittaa, kun molemmat pätisivät; kaksi rengasta yhtä aikaa olisi vain kohinaa.

## Nimeämis-/siirtotila

Kynäpainike aivan otsikon oikeassa laidassa — näkymätilan painikkeen vieressä, samankokoinen kuin sisäänrakennetut painikkeet — vaihtaa nimeämis-/siirtotilan päälle ja pois. Otsikkorivi kehystetään silloin korostusvärillä, aivan kuten nimettäessä tiedostoselaimessa. Samat napsautukset ja näppäinpainallukset vahvistavat nyt siirron tai nimeämisen Obsidianin `fileManager.renameFile`-toiminnon kautta, joten kaikki linkit muistiinpanoon seuraavat mukana.

Nimeämisen aikana:

- Nykyinen tiedostonimi kiinnitetään jokaisen kansion luetteloon, joten muistiinpanon siirtäminen nimeämättä sitä on yksi napsautus.
- Kohdekansiossa jo varatut nimet himmennetään mutta ne ovat yhä valittavissa.
- Syöte tarkistetaan elävästi Obsidianin omia nimeämissääntöjä vasten — samat merkistöt, samat viestit, sama punainen työkaluvihje kuin nimettäessä tiedostopuussa — joten luvaton tai ristiriitainen nimi merkitään kirjoittaessasi eikä sitä voi vahvistaa.
- Napsautus otsikkorivin ulkopuolelle, tai otsikon kohdistuksen menetys, päättää nimeämistilan.

## Yksi näppäin molempiin nimeämisiin

Nimeämiskomento (oletuksena <kbd>F2</kbd>, tai mihin olet sen sitonut) **vuorottelee** Obsidianin upotetun otsikon nimeämisen ja tämän lisäosan polkurivin välillä koko polku valittuna. Jos olet kytkenyt Obsidianin upotetun otsikon pois, polkurivistä tulee ainoa kohde, joten näppäin ei koskaan jää tekemättä mitään.

Tämä toimii kietomalla komennon `workspace:edit-file-title` sen sijaan että kaappaisi näppäimen, joten sekä pikanäppäimen uudelleensitominen että komennon suorittaminen paletista toimivat ennallaan.

## Miten luettelon rivit värjätään

| Väri | Tarkoittaa |
| --- | --- |
| **Violetti** | Muistiinpano (`.md`, `.markdown`) — se, minkä Obsidian avaa muistiinpanona, poimittuna sekalaisen sisällön kansiosta |
| **Oranssi** | Tekstityyppi, jolle Obsidianilla ei ole näkymää; katso [varoitusvärit](#kaksi-varoitusväriä) |
| **Vaimennettu** | Holvisi ulkopuolella, joten holvin oma käsittely ei päde |
| **Sininen** | Vain nimeämis-/siirtotilassa: rivi *säilytä tämä nimi* — kohde eikä jotain olemassa olevaa, joten se poimitaan esiin niiden tiedostonimien joukosta, joiden seassa se on |
| **Harmaa** | Vain nimeämis-/siirtotilassa: nimi on varattu. Yhä valittavissa — valinta täyttää kentän, jossa tarkistus merkitsee ristiriidan |

## Näkyvyyssäännöt

- Tiedostot, joiden tiedostopäätettä ei tueta, näkyvät luetteloissa vain, jos Obsidianin asetus **Tunnista kaikki tiedostopäätteet** on päällä.
- Luettelo näyttää enintään 100 riviä — Obsidianin oma raja. Kun kansiossa on enemmän, viimeinen rivi kertoo kuinka moni jäi pois; jatka kirjoittamista kaventaaksesi luetteloa.
- Piilotiedostot ja -kansiot näkyvät vain, jos tämän lisäosan asetus **Näytä piilotiedostot** on päällä.
- **Korvaussuojaus toimii samoin näkyvyydestä riippumatta** — piilotettu tiedosto estää sinua yhä korvaamasta sitä.

## Muistilista

| Haluat… | Tee näin |
| --- | --- |
| Avata kansion (sen muistiinpanon tai näyttää sen) | Napsauta erotinta **kansion jälkeen** |
| Vaihtaa kansion sisarukseen | Napsauta kansion nimeä, kirjoita sitten tai valitse |
| Nimetä muistiinpanon tai kohdistaa sen uudelleen | Napsauta muistiinpanon nimeä — tiedostopääte mukaan lukien |
| Selata kansion sisältöä | Napsauta kansion nimeä; luettelo näyttää sen vanhemman, joten napsauta haluamasi kansion **alapuolella** olevaa kansiota |
| Kirjoittaa kansion ja kaiken sen alapuolella uusiksi | **Kaksoisnapsauta** kansion nimeä, kirjoita sitten |
| Muokata polkua kansiosta alaspäin | Napsauta kansion nimeä, sitten <kbd>End</kbd> tai <kbd>→</kbd> poistaaksesi valinnan |
| Hypätä tiedostoon kirjoittamalla sen polun | Napsauta tiedostonimeä tai tyhjää tilaa, kirjoita, <kbd>Enter</kbd> |
| Avata tiedoston uudessa välilehdessä | <kbd>Ctrl</kbd> valitessasi sen, tai <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| Kopioida muistiinpanon jonnekin siirtämisen sijaan | Kynä, sitten <kbd>Ctrl</kbd> valitessasi tai vahvistaessasi kohteen |
| Luoda muistiinpanon polkuun, jota ei ole | Kirjoita polku, <kbd>Enter</kbd>, vahvista kysymys |
| Laskeutua tason alemmas kirjoittaessasi | Kirjoita `/` |
| Nousta tason ylemmäs kirjoittaessasi | <kbd>Backspace</kbd> tyhjässä kentässä |
| Siirtää tai nimetä avoinna olevan muistiinpanon | Napsauta kynää, selaa sitten tai kirjoita kuten edellä |
| Siirtää nimeämättä | Kynä → napsauta kohdekansioon → valitse kiinnitetty nykyinen tiedostonimi |
| Nimetä paikallaan | <kbd>F2</kbd> kahdesti (ensimmäinen painallus menee upotettuun otsikkoon, toinen otsikkoriville) |
| Hypätä toiseen holviin, kotiin tai asemaan | Napsauta holvin nimeä |
| Avata tiedoston holvin ulkopuolelta | Holvin nimi → valitse sijainti → selaa → valitse tiedosto (vain luettavana kunnes *Muokkaa tekstinä*) |
| Peruuttaa mitä tahansa | <kbd>Esc</kbd>, tai napsauta otsikkorivin ulkopuolelle |

## Asetukset

| Asetus | Vaihtoehdot | Oletus | Mitä se tekee |
| --- | --- | --- | --- |
| **Tasaus** | Vasen / Keskitetty / Oikea | Vasen | Missä polku sijaitsee otsikkorivillä. *Keskitetty* vastaa Obsidianin klassista ulkoasua. |
| **Erotin** | Mikä tahansa merkki | `/` | Osien väliin piirrettävä erotin. Kuusi yhden napsautuksen esiasetusta (`/ > ▸ › \ •`) on tekstikentän edessä. |
| **Näytä holvin nimi** | Päällä / Pois | Päällä | Onko holvi itse polun ensimmäinen osa. Pois kytkettynä tuosta osasta tulee 🏠-kuvake sen sijaan että se katoaisi, joten polku alkaa yhä jostain napsautettavasta. |
| **Kansion nimi avaa luettelon** | Päällä / Pois | Päällä | Vaihtaa sen, mitä kansion nimi ja sen jälkeinen erotin tekevät — katso [yllä oleva taulukko](#polku). Kun [Folder notes](obsidian://show-plugin?id=folder-notes) on käytössä, erotin avaa kansiomuistiinpanoja. Ei koskaan päde nimeämis-/siirtotilassa. |
| **Näytä piilotiedostot** | Päällä / Pois | Pois | Luetellaanko piilotiedostot ja -kansiot luetteloissa. Korvaussuojaus pätee joka tapauksessa. |
| **Pääsy ulkoisiin tiedostoihin** | Päällä / Pois | **Pois** | Avaako holvin nimi sijaintien luettelon. Pois kytkettynä mikään lisäosassa ei katso koskaan tämän holvin ohi. |

## Kuvakkeiden vaihtaminen

Lure piirtää kolme kuvaketta: holvin juuren kuvakkeen (kun **Näytä holvin nimi** on pois), nimeämis-/siirtokytkimen ja riippulukon, joka portittaa kirjoittamisen holvin ulkopuolelle. Kaikki voi vaihtaa teemasta tai CSS-pätkästä — aseta korvaava merkki ja piilota mukana tuleva yhdellä säännöllä:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* Riippulukolla on kaksi tilaa; `.is-active` on avoin. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}

.lure-unlock-btn.is-active {
	--lure-icon-glyph: "🔓";
}
```

`--lure-icon-glyph` hyväksyy kaiken, mikä kelpaa CSS:n `content`-arvoksi, joten `url(...)` toimii kuvalle yhtä hyvin kuin teksti- tai emojimerkille. Jätä `--lure-icon-svg` rauhaan säilyttääksesi Lucide-kuvakkeen ja piirtääksesi oman merkkisi sen viereen.
