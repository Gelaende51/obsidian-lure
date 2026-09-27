<!-- Käännös tiedostosta docs/usage.md — tilanne: commit 94b1372.
     Konekäännös (Claude Sonnet 5), jota äidinkieliset puhujat eivät ole
     tarkistaneet. Lisäosan tekstit tulevat tiedostosta
     src/lang/translations.ts ja Obsidianin omat sovelluksen mukana
     tulevista käännöksistä, joten ne vastaavat sitä, mitä näet
     näytölläsi. -->

[English](../usage.md) · [العربية](usage.ar.md) · [አማርኛ](usage.am.md) · [Беларуская](usage.be.md) · [বাংলা](usage.bn.md) · [Català](usage.ca.md) · [Čeština](usage.cs.md) · [Dansk](usage.da.md) · [Deutsch](usage.de.md) · [Ελληνικά](usage.el.md) · [Español](usage.es.md) · [فارسی](usage.fa.md) · **Suomi** · [Français](usage.fr.md) · [Gaeilge](usage.ga.md) · [עברית](usage.he.md) · [Magyar](usage.hu.md) · [Bahasa Indonesia](usage.id.md) · [Italiano](usage.it.md) · [日本語](usage.ja.md) · [ქართული](usage.ka.md) · [ភាសាខ្មែរ](usage.kh.md) · [한국어](usage.ko.md) · [Latviešu](usage.lv.md) · [Bahasa Melayu](usage.ms.md) · [नेपाली](usage.ne.md) · [Nederlands](usage.nl.md) · [Norsk](usage.no.md) · [Polski](usage.pl.md) · [Português](usage.pt.md) · [Português (Brasil)](usage.pt-BR.md) · [Română](usage.ro.md) · [Русский](usage.ru.md) · [संस्कृतम्](usage.sa.md) · [Slovenčina](usage.sk.md) · [Shqip](usage.sq.md) · [Српски](usage.sr.md) · [Svenska](usage.sv.md) · [ไทย](usage.th.md) · [Türkçe](usage.tr.md) · [Українська](usage.uk.md) · [Oʻzbekcha](usage.uz.md) · [Tiếng Việt](usage.vi.md) · [简体中文](usage.zh.md) · [繁體中文](usage.zh-TW.md)

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

Kun kansion muistiinpano on se, jota jo luet, napsautus näyttää kansion sen sijaan — mitään avattavaa ei ole, mikä ei jo olisi näytöllä, ja juuri tätä toinen painallus on aina tarkoittanut.

Kun [Folder notes](obsidian://show-plugin?id=folder-notes) on asennettuna, sama napsautus avaa sen sijaan kyseisen kansion muistiinpanon, **millä tahansa syvyydellä**: muistiinpano ratkaistaan tässä kyseisen lisäosan omaa käytäntöä noudattaen sen sijaan, että asia jätettäisiin sen vastattavaksi. Kyseinen lisäosa tunnistaa vain ne kansiot, jotka se on merkinnyt, mikä yhtä kansiotasoa syvemmällä polulla ei ole mikään niistä, joten painallus, joka avasi ylimmän tason kansion muistiinpanon, ei ennen tehnyt syvemmällä mitään. Kaksi muuta kansiomuistiinpanolisäosaa eivät julkaise mitään luettavaa käytäntöä eivätkä koskaan ota riviä haltuunsa, joten niiden kanssa erotin näyttää kansion kuten aina ennenkin. Se on ainoa löydetty kansiomuistiinpanolisäosa, joka ottaa otsikkorivin polun haltuunsa; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) ja [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) hallinnoivat kansiomuistiinpanoja, mutta eivät kuuntele napsautusta polulla, joten niiden kanssa erotin näyttää kansion tavalliseen tapaan. Katso [yhteensopivuus](../compatibility.md#verified-against).

Erotin on **alleviivattu vain, jos sitä edeltävällä kansiolla todella on kansiomuistiinpano**, joten alleviivaus on lupaus siitä, että jotain on avattavana — millä tahansa syvyydellä [Folder notes](obsidian://show-plugin?id=folder-notes) -lisäosan ollessa käytössä, koska muistiinpano ratkaistaan tässä sen sijaan, että se jätettäisiin kyseisen lisäosan merkittäväksi. Kun käytössä ei ole tämä lisäosa, mitään ei alleviivata eikä mikään avaudu: erotin näyttää kansion, kuten se tekee ilman mitään kansiomuistiinpanolisäosaakin. Jokainen erotin pysyy napsautettavana joka tapauksessa — ilman alleviivausta oleva erotin näyttää ja laajentaa kansionsa sivupalkissa, minkä osoitinkursori edelleen ilmaisee. Alleviivaus siirtyy pois kansion nimestä samaan aikaan: vaihdon ollessa päällä nimi avaa luettelon, joten sen merkitseminen muistiinpanon linkiksi olisi valhe.

**Nimeämis-/siirtotila ohittaa molemmat** riippumatta siitä, mitä asetus sanoo: mikään rivillä ei avaa kansiota siirron ollessa kesken, sillä kansion avaaminen hylkäisi siirron. Kansioiden nimet valitaan muokattaviksi ja erottimet laskeutuvat — molemmat ovat tapoja osoittaa kohde — ja alleviivaus katoaa osoittaakseen, että avaaminen on keskeytetty.

**Holvin juuri** on ainoa osa, joka ei ole polun osa. Sillä ei ole vanhempaa, josta listata sisaruksia, joten se avaa sen sijaan [sijaintien luettelon](#selaaminen-holvin-ulkopuolella) — muut holvisi, kotikansiosi, tiedostojärjestelmän juuren ja liitetyt asemat.

## Holvin oma erotin

Holvin nimen jälkeinen erotin edustaa itse holvia eikä kansiota, joten se tekee jotain, mihin mikään muu erotin ei pysty:

| | Ensimmäinen napsautus | Seuraava napsautus |
| --- | --- | --- |
| **Aloitussivulisäosan kanssa** (sivu, joka kohtaa sinut Obsidianin avautuessa) | Avaa kyseisen sivun tässä ruudussa | Piilottaa tiedostopuun |
| **Ilman sitä** | Piilottaa tiedostopuun | Palauttaa täsmälleen sen, mikä oli avoinna |

Tavallisia napsautuksia, ei kaksoisnapsautusta: kun sivu on kerran auki, erottimella ei ole enää mitään avattavaa, joten seuraava painallus piilottaa puun — riippumatta siitä, kuinka kauan siihen menee.

Se on **alleviivattu**, kun avattavana on aloitussivu, mikä on sama lupaus kuin kansion erottimella: jotain on olemassa. Piilottaminen on vaihtokytkin — seuraava painallus palauttaa avoinna olleet kansiot, ja vain ne, joten järjestämääsi puuta ei menetetä, kun vilkaiset jotain muuta.

## Ruutu ilman tiedostoa

Tyhjä välilehti, graafi ja mikä tahansa muu, joka ei nimeä tiedostoa, saa oman rivinsä: holvi, sitten yksi osa, joka kertoo, mitä ruutu sisältää.

```
my-vault / :blank      a new tab
my-vault / :graph      the graph, local or global
my-vault / :<type>     anything else with no file
```

**Holvin juuren oma luettelo** tarjoaa myös nämä sivut, siellä olevien kansioiden ja muistiinpanojen joukossa: valitse siellä `:graph` tai `:search`, ja ruutu avaa kyseisen näkymän, aivan kuten muistiinpanon valitseminen avaa muistiinpanon. Mitkä sivut ovat olemassa, luetaan Obsidianista sen sijaan, että se olisi kirjoitettu tähän — jokainen näkymä, joka ei ole olemassa näyttääkseen tiedostoa, joten lisäosa, joka rekisteröi sellaisen (kotivälilehti, kalenteri), ilmestyy ilman että tämä lisäosa tietää siitä mitään. Näkymiä, jotka tarvitsevat tiedoston — Markdown, PDF, kuvat, kanvaasit, tietokannat — ei tarjota: niillä ei ole mitään näytettävää.

Kaksoispiste on olennainen — mitään tiedostoa tai kansiota ei voida nimetä `:graph`, joten riviä ei voi erehtyä pitämään avattavissa olevana polkuna. Nimike tulee näkymän tyypistä eikä Obsidianin omasta sanamuodosta, joten se lukee samalta riippumatta käyttöliittymän kielestä, ja perässä oleva `-view` poistetaan: kotivälilehtilisäosa rekisteröi näkymänsä nimellä `home-launcher-view`, ja rivi näyttää `:home-launcher`.

Tyhjän tilan tai itse nimikkeen napsautus **avaa kentän holvin juuressa**: kirjoita polku ja <kbd>Enter</kbd> avaa sen juuri tässä ruudussa, samalla täydennyksellä, samalla luettelolla ja samalla punaisella kentällä, joka tarjoutuu luomaan sen, mitä ei vielä ole. Tyhjä välilehti on hyvä paikka kirjoittaa, minne haluat mennä, mihin se on tarkoitettukin.

Nimike on nimike eikä mitään muuta: ei luetteloa, ei raahausta, ei nimeämistä. Sivupalkkien ruudut jätetään täysin rauhaan — takalinkkiruutu säilyttää Obsidianin sille antaman otsikon.

Kanvaasit, PDF:t, kuvat ja tietokannat eivät tarvitse mitään tästä. Ne ovat tiedostoja, joten ne saavat tavallisen polkurivin.

## Osan napsauttaminen: vaihda se sisarukseen

Kansion nimen napsautus valitsee **kyseisen kansion nimen** tekstikenttään ja avaa luettelon kansiosta **yhtä tasoa ylempää** — sen vanhemmasta. Kirjoittaminen tai rivin valitseminen vaihtaa tämän kansion sisarukseen ja jättää kaiken sen alapuolella koskematta, joten `Projektit/2026/Aloitus.md` → napsauta `2026` → valitse `2025` antaa sinulle `Projektit/2025/Aloitus.md`.

**Muistiinpanon nimen** napsautus toimii samalla tavalla omaa kansiotaan vasten ja valitsee nimen **ilman sen tarkenninta** — nimeäminen on tavallisin muokkaus, ja kirjoittaminen suoraan valinnan päälle, joka sisälsi `.md`:n, muutti ennen tiedostotyyppiä vahingossa. Tarkennin pysyy näkyvissä yhden näppäinpainalluksen päässä: <kbd>→</kbd> ulottuu siihen, ja koko riviin laajentava kaksoisnapsautus ottaa koko paketin.

Kansion napsautus on jo valinnut yhden osan, joten **yksi napsautus lisää** laajentaa valinnan koko riviin — kyseiseen kansioon *ja* kaikkeen sen alapuolella — ja kirjoittaminen korvaa silloin loput polusta kerralla. Toimii samoin navigointi- ja nimeämis-/siirtotilassa.

Tämä pätee vain kentän avanneen napsautuksen jatkona. Kun olet kerran käyttänyt kenttää, se käyttäytyy kuin mikä tahansa tekstikenttä: napsautus asettaa kohdistimen, kaksoisnapsautus ottaa sanan, kolmoisnapsautus rivin.

Joka tapauksessa loppu polusta pysyy näkyvissä kentän ympärillä, siruina ennen sitä ja valitsemattomana tekstinä sen jälkeen, joten koko polku ei koskaan katoa otsikosta. Kirjoita korvataksesi valinnan, tai paina <kbd>→</kbd> säilyttääksesi sen ja jatkaaksesi muokkausta siitä. Luettelo listaa koko kansion riippumatta siitä, mitä on esitäytetty; se alkaa suodattaa vasta, kun todella kirjoitat jotain.

## Laskeutuminen erottimen kautta

Erottimen napsautus (kun **Kansion nimi avaa luettelon** on pois päältä) laskeutuu sitä edeltävään kansioon: luettelo näyttää *sen* kansion sisällön, ja loput polusta avautuu valittuna kenttään. Kansion valitseminen lisää sen polkuun ja avaa heti seuraavan luettelon, joten voit napsauttaa itsesi alas puussa poistumatta otsikkoriviltä.

## Luettelo avautuu siellä, missä olet

Luettelo avautuu kohdassa, jossa seisot — muistiinpanossa, johon tämä rivi kuuluu, tai kun kansion napsautus on listannut sen vanhemman, kyseisessä kansiossa — eikä ensimmäisellä rivillä. Kahdensadan muistiinpanon kansiossa ensimmäinen rivi ei ole lähelläkään sinua.

**Rullan pyörittäminen nimen päällä avaa sen luettelon ja käy sitä läpi.** Ensimmäinen kierros avaa saman luettelon, jonka nimen painaminen avaa, ja jokainen seuraava kierros siirtää korostusta rivin verran ja asettaa osoittamasi kohteen kenttään aivan kuten nuolinäppäimillä liikkuminen — jolloin sisarus voidaan löytää ja ottaa ilman näppäimistöä. Rullaaminen jommassakummassa päässä pois palauttaa tekstisi. Rivi, jossa on enemmän polkua kuin ruutua, vastaa rullaan sivuttain vierittämällä sen sijaan, mikä on tulkinta, joka pätee niin kauan kuin se on voimassa.

Luettelo on **niin korkea kuin ikkuna sallii**. Obsidian rajoittaa ehdotusluettelonsa 300 pikseliin riippumatta siitä, mitä niiden alla on; tämä ulottuu ikkunan alareunaan asti, pysähtyen muutaman pikselin päähän reunasta, ja vierittää vasta, kun kansiossa on enemmän kuin mahtuu näkyviin. Se on **enintään polkurivin levyinen**: nimi, joka ei mahdu, lyhennetään samoin kuin rivi lyhentää yhtä, ja näytetään kokonaan, kun osoitat sitä.

Luettelossa liikkuminen **asettaa osoittamasi kohteen kenttään**, joko nuolinäppäimellä tai osoittimella osoittamalla — muokkaamasi osan tilalle, muun polun jäädessä paikoilleen — joten rivi, jolla olet, on myös polku, jonka saisit.

Loppuosa polusta näytetään **vain sikäli kuin se on olemassa osoittamasi kohteen alla**. Kun seisot kansiossa, jossa muokkaamasi osan takana on `2026/note.md`, kansiota osoittaminen, jolla on `2026`, jossa on `note.md`, näyttää sen kokonaan; kansio, jolla on `2026` mutta ei muistiinpanoa, näyttää `2026`:n; kansio, jolla ei ole kumpaakaan, ei näytä nimen jälkeen mitään, eikä myöskään tiedosto, koska sen alla ei ole mitään. **Kirjoittamasi** säilyttää koko polkunsa kirjoittamisen aikana, riippumatta siitä, kuinka vähän sitä on vielä olemassa — puolinaisesti kirjoitettu nimi ei ole päätös. Nimen asettaminen kenttään on päätös, ja se, mihin siitä ei pääse, katkaistaan siinä kohdassa; luomasi kansiot ovat ne, jotka kirjoitat *sen jälkeen*, mihin <kbd>Enter</kbd> ne luo.
Kirjoittamasi teksti säilyy: liikkuminen **luettelon jommastakummasta päästä pois** — ylös ensimmäisestä rivistä tai alas viimeisestä — päästää siitä irti ja palauttaa tekstisi, ilman mitään korostusta. Kenttä on pysäkki kehällä kuten mikä tahansa rivi, joten kierros kulkee sen kautta sen sijaan, että hyppäisi viimeiseltä riviltä ensimmäiselle, ja siitä jatkaminen kiertää toiseen päähän.

**Osoittimen ottaminen pois luettelosta** palauttaa myös tekstisi — ja antaa korostuksen takaisin sille, jolla se oli ennen hiiren saapumista: rivi, johon olit siirtynyt nuolinäppäimellä ja joka näkyy taas kentässä, tai se, johon luettelo avautui, koska siellä olet. Osoittaminen on tapa katsoa eikä valita, joten osoittimen pyyhkäisy luettelon yli ei maksa sinulle mitään.

Luettelo itse ei muutu, kun liikut sen läpi — se jatkaa suodattamista kirjoittamasi mukaan, ei sen mukaan, mitä on esikatseltu kenttään — joten alla oleva rivi ei koskaan siirry pois seuraavan painalluksen alta. Kirjoittaminen korvaa esikatselun ja suodattaa tavalliseen tapaan.

**Se suodattaa muokkaamasi osan mukaan**, ei koko kentän sisällön mukaan. Kansion napsautus jättää lopun polusta kenttään muuttamasi nimen taakse, joten koko sisällön mukaan suodattaminen etsisi lasta nimeltä `2026/Aloitus.md` eikä löytäisi mitään — luettelo sulkeutuisi ensimmäisestä näppäinpainalluksestasi riippumatta siitä, mitä kirjoitit. **Tarkennin jätetään myös huomiotta**, niin kauan kuin kohdistin on pisteen edessä: muistiinpanon nimen napsautus valitsee rungon ja jättää `.md`:n sen taakse, joten yhden kirjaimen kirjoittaminen tekee kentästä `a.md`, eikä se ole se, mitä etsit. Kun kohdistin viedään pisteen ohi, tarkennin lasketaan mukaan kuten mikä tahansa muu. Nimi, joka aidosti ei vastaa mitään, sulkee luettelon silti, koska tyhjä luettelo on rehellinen vastaus.

Esikatselu **vaihtaa vain kyseisen osan ja jättää loput polusta rauhaan**: kansion osoittaminen kysyy, mitä jos tämä askel olisi tuo, ei heitä polkua pois. Luettelosta pois siirtyminen palauttaa tekstin *ja* valinnan, joka sinulla oli, joten seuraava näppäinpainallus korvaa sen, minkä se olisi korvannut ennen katsomistasi.

## Luettelon rivit ovat oikeita tiedostonhallinnan rivejä

Jokainen luettelon tiedosto ja kansio käyttäytyy kuin rivinsä tiedostoselaimessa:

- **Napsauta hiiren oikealla painikkeella** saadaksesi saman kontekstivalikon kuin tiedostoselain antaa, rivi riviltä — mukaan lukien muiden lisäosien lisäämät. Kansio tarjoaa *Uusi muistiinpano*, *Uusi kansio*, *Uusi kanvaasi*, *Uusi tietokanta*, *Tee kopio*, *Siirrä kansio…*, *Etsi kansiosta*, *Kopioi polku*, *Näytä järjestelmän tiedostoselaimessa*, *Nimeä uudelleen…* ja *Poista*; tiedosto tarjoaa oman vastineensa, mukaan lukien *Avaa oletussovelluksessa*.
- **Raahaa** rivi minne tahansa, missä Obsidian hyväksyy tiedoston: editoriin lisätäksesi linkin, tiedostoselaimen kansion päälle siirtääksesi sen, välilehtiriville avataksesi sen.

Valikkojen sanamuodot tulevat Obsidianin omista käännöksistä, joten ne vastaavat muuta sovellusta kaikilla kielillä.

## Polun kirjoittaminen

- **Tyhjän tilan** napsauttaminen ennen polkuosia tai niiden jälkeen avaa tekstikentän koko polulle *ja näyttää muistiinpanon tiedostonhallinnassa*, jotta puu seuraa paneelia ilman toista eleitä. Se **laskee napsautuksesi**: yksi valitsee polun tiedostopäätteen kanssa, kaksi valitsee sen ilman, kolme valitsee polun sellaisena kuin kone sen tunnistaa. **Tiedoston nimen** napsauttaminen laskee samalla tavalla, mutta alkaa askeleen alempaa, itse nimestä: yksi valitsee sen ilman tiedostopäätettä, kaksi sen kanssa, ja kolme laajentaa valinnan koko polkuun *holvikansiostasi* — muotoon, jota linkki tai haku haluaa, ei koneen muotoon. Neljäs napsautus tavoittaa sen muodon.
- **Laskenta kuuluu siihen sarjaan, joka avasi kentän.** Kun se on rauennut — pysähdyit, kirjoitit tai napsautit kerran jonnekin tekstiin — kenttä on tekstikenttä kuten mikä tahansa muu, ja kaksoisnapsautus siinä valitsee osoittimen alla olevan sanan niin kuin missä tahansa muualla. Kirjoita valitun päälle tai muokkaa paikan päällä. (Itse tiedostonimen napsauttaminen valitsee vain tiedoston nimen; katso yllä.) Hiiren oikean painikkeen napsautus samassa tilassa **kopioi** samat kolme, kahden, kolmen ja neljän napsautuksen kohdalla — yksi painike näyttää ne, toinen ottaa ne. **Yksittäinen** oikean painikkeen painallus avaa polun kaikki kerralla valittuna ja tarjoaa sille tehtäviä toimintoja: leikkaa, kopioi, liitä, valitse kaikki, Obsidianin omin sanoin.
- **Napsauta tyhjää tilaa keskimmäisellä painikkeella** liittääksesi polun päälle: kenttä avautuu koko polulle *holvin juuresta*, joten leikepöytä korvaa sen kokonaan, ja tulos on valittuna. <kbd>Enter</kbd> siirtyy sitten sinne.
- **<kbd>Ctrl</kbd>+napsautus tyhjässä tilassa** avaa tämän muistiinpanon uudelleen omassa välilehdessään, välähtäen tiedostonhallinnassa, jotta toista välilehteä ei sekoiteta ensimmäiseen. **Holvin nimen** kohdalla <kbd>Ctrl</kbd>+napsautus tai keskimmäisen painikkeen napsautus avaa tyhjän välilehden, joka seisoo holvin juuressa luettelo valmiiksi näkyvissä — paikka, josta kirjoittaa polku tyhjästä.
- Kirjoittaminen polun näkyessä muuttaa viimeisen osan pieneksi kentäksi, jossa on reaaliaikainen automaattinen täydennys rajattuna nykyiseen kansioon.
- **Polun voi kirjoittaa tiedostojärjestelmän juuresta.** `/` tyhjän kentän edessä avaa sellaisen sen sijaan, että se täydentäisi askelta, jokainen sen jälkeinen kauttaviiva kuuluu siihen, ja `~` on kotikansiosi. Kun kentässä on tällainen polku, luettelo näyttää koneen sisällön holvin sisällön sijaan, ja rivin alkuosa siirtyy syrjään — kentässä oleva alkaa juuresta ja kertoo sen. Kun *Pääsy ulkoisiin tiedostoihin* on pois päältä, luettelo jää sen sijaan tyhjäksi, koska <kbd>Enter</kbd> hylkäisi polun joka tapauksessa.
- **Sivun voi kirjoittaa, ei vain valita.** `:graph`, `:search`, tai mitä tahansa liitännäisesi rekisteröivät — nimet, jotka [holvin juuren luettelo](#ruutu-ilman-tiedostoa) tarjoaa. Kaksoispisteen kirjoittaminen missä tahansa kutsuu niitä esiin, koska mikään nimi ei saa sisältää sitä, ja <kbd>Enter</kbd> avaa kyseisen näkymän tässä paneelissa. **Kansion sisällä** kirjoitettu `:graph` avaa sen kansion graafin — graafin suodatettuna hakuun `path:"that/folder"` omassa hakukentässään, ikään kuin se olisi kirjoitettu siihen; holvin juuressa se on koko graafi. <kbd>Tab</kbd> viimeistelee nimen niin kuin se viimeistelee kansionkin nimen — ja vie mukanaan kaiken muun, mitä kentässä oli, koska sivu ei ole missään kansiossa ja mikään ei elä sen alla. Tällaisen sivun nimen napsauttaminen avaa kentän, jossa se on jo valmiina.
- **Se, mitä <kbd>Tab</kbd> kirjoittaisi, tarjotaan kirjoittaessasi.** Missä kaikki kirjoittamallasi alkavat lapset pysyvät samaa mieltä hetken, tämä yhteinen osa näkyy kohdistimen jälkeen valittuna; missä ne lakkaavat olemasta samaa mieltä, askel niistä ensimmäistä kohti näkyy — tai riviä kohti, jonka luokse siirryit nuolinäppäimillä, koska se on se, johon <kbd>Tab</kbd> suuntaisi. Nimen päälle kirjoittaminen jättää sen tiedostopäätteen paikoilleen ja tarjoaa sitä edeltävän osan, ja kansio, jonka juuri astuit sisään, tarjoaa ensimmäisen askeleensa, niin ettei ole tilaa, jossa mitään ei tarjottaisi ja <kbd>Tab</kbd> kirjoittaisi jotain silti. Kirjoita ne kirjaimet, ja tarjous nielaistaan yksi kerrallaan; kirjoita mitä tahansa muuta, ja se katoaa. <kbd>Tab</kbd> tai <kbd>End</kbd> ottaa sen kokonaan, <kbd>→</kbd> ottaa siitä yhden kirjaimen, <kbd>Backspace</kbd> peruuttaa sen koskematta kirjaimeen, jonka itse kirjoitit, ja mitään ei tarjota uudelleen ennen kuin kirjoitat — niin että ei-toivotusta nimestä on aina ulospääsy. <kbd>Tab</kbd>-painalluksen jälkeen seuraava askel tarjotaan välittömästi, samoin kuin kirjoitetun kirjaimen jälkeen. Se, mitä luettelo näyttää, suodatetaan sen mukaan, mitä **sinä** kirjoitit, ei koskaan sen mukaan, mitä tarjottiin.
- **Tarjoukset ohittavat kirjainkoon.** `sch` tarjoaa `Schemes`-nimen kirjoitettuna niin kuin nimi on kirjoitettu; tarjouksen perumine antaa kirjaimesi takaisin sellaisina kuin kirjoitit ne. Kun molemmat `Test` ja `test` ovat olemassa, tarjotaan se, joka on kirjoitettu niin kuin itse kirjoitit.
- Kentässä tarjottu osa on yksinkertaisesti **valittuna**. Luettelossa se kirjoitetaan auki: joka rivi näyttää sen osan, joka **täsmäsi kirjoittamaasi lihavoituna**, missä tahansa nimessä täsmäys tapahtuikin — `kick` löytää `Weekly kickoff` -nimen ja kertoo siitä. **Nimet, jotka alkavat kirjoittamallasi, tulevat ensin**, ennen niitä, jotka vain sisältävät sen, ja niissä on merkkinä viiva reunassa: **sininen**, jos niillä on kirjoittamaasi enemmän yhteistä, jolloin <kbd>Tab</kbd>:lla on jotain lisättävää kaikille niille, ja **vihreä** haaralla, jota tarjous kulkee siinä kohdassa, missä ne eroavat toisistaan — `te`-kirjoituksella `test1`, `test2`, `text1` ja `text2` tarjoavat `te`+`st`, niin että kaksi `test`-riviä ovat vihreitä ja kaksi `text`-riviä pitävät tavallisen viivan. Kukin niistä **alleviivaa askeleen, jonka <kbd>Tab</kbd> ottaisi sitä kohti**, ei vain sitä, joka on tarjolla, ja alleviivaus seuraa tarjousta sen muuttuessa.
- **Kirjoittaminen päästää irti korostetusta rivistä.** Luettelo avautuu kohdalle, jossa seisot, mutta sillä hetkellä kun kirjoitat, kyse on jo jostain muualta, ja kukaan asettamaton korostus lukisi valintana, joka on jo tehty.
- Tarjous on aina vain tekstiä edessäsi: kirjoittamasi kirjaimet pysyvät kirjoitettuina niin kuin kirjoitit ne kirjoittaessasi, ja tarjouksen ottaminen kirjoittaa nimen uudelleen niin kuin kansio sen kirjoittaa, koska polun täytyy täsmätä levyn kanssa. `sk` + <kbd>Tab</kbd> tavoittaa `Skyline`-nimen, ei `skyline`-nimeä.
- **Kenttä kantaa sen väriä, jota se nimeää**, samaa väriä kuin sen rivi luettelossa: violetti muistiinpanolle, myös kansion omalle muistiinpanolle, oranssi kaikelle, mikä ei ole muistiinpano, sininen muistiinpanolle, jossa olet. Rivi, josta väri otetaan, on se, joka on nimetty täsmälleen niin kuin kirjoitit, tai sen puutteessa korostettu rivi, tai sen puutteessa ensimmäinen, jota kirjoituksesi vielä johtaa.
- **Kenttä muuttuu punaiseksi, kun mikään ei vastaa siinä olevaa** — ei tiedostoa, ei kansiota, eikä yksikään luettelon rivi johda siihen enää. Siitä lähtien <kbd>Enter</kbd> luo sen, mitä kentässä on, sen sijaan että avaisi sen, ja punainen väri kertoo tästä ennen kuin vahvistat. Se ei koskaan näy verkko-osoitteelle, joka ei ole paikka tällä koneella etsittäväksi. **Koko** kenttä värjätään, ei vain puuttuva osa: tekstikenttä ei voi värjätä puoliksi omaa sisältöään. Nimeämis-/siirtotilassa kenttä pitää omaa punaistaan sen sijaan, laittomalle nimelle — siinä nimi, jota mikään ei vastaa, on itse tarkoitus. Se, että nimi on **jo käytössä**, käsitellään, kun vahvistat sen, valintaikkunalla, joka kysyy, mitä tielle sattuneelle tiedostolle pitäisi tehdä — katso [Nimi, joka on käytössä](#nimi-joka-on-varattu): joka nimi, jota kirjoitetaan kohti `Notes.md`-nimeä, kulkee nimien läpi, jotka voivat olla omia tiedostojaan, niin että sen merkitseminen kirjain kirjaimelta varoittaisi nimestä, jota kukaan ei ollut vielä kysynyt.
- `/` vahvistaa kirjoittamasi osan ja laskeutuu siihen, säilyttäen sen takana olevan — samoin kuin <kbd>Tab</kbd> tekee astuessaan sisään.
- <kbd>Backspace</kbd> tyhjässä kentässä astuu takaisin ulos yläkansioon, avaten uudelleen sen nimen kohdistimen ollessa lopussa. Samoin tekee <kbd>Backspace</kbd> yksinään jääneen tiedostopäätteen edessä — kenttä, jossa on vain `.md`, ei nimeä mitään — ja yksinäinen tiedostopääte lähtee sen mukana.
- **Kansion napsauttaminen kentän ollessa auki laajentaa sen koko polkuun kyseisen kansion jälkeen**, kansion oma nimi valittuna — samoin kuin sen napsauttaminen olisi tehnyt riviltä, ja kaikki, mitä kentässä oli, säilyy. Kentässä oleva on rivin loppuosa sen ollessa auki, niin että ylempänä napsautettu kansio antaa takaisin polun, jota istunto on kulkenut, ei sitä, josta muistiinpano alkoi.
- **Nuolinäppäimen käyttö kentän alusta poispäin tuo edellisen kansion sisään**, ikään kuin koko polku olisi yhtä tekstiriviä. Kun kohdistin on aivan alussa, <kbd>←</kbd> tuo kyseisen kansion kenttään ja päätyy sen nimen loppuun, <kbd>Ctrl</kbd>+<kbd>←</kbd> päätyy sen alkuun, ja <kbd>Home</kbd> tuo mukaan kaikki kansiot holvin juureen asti — tai paikkaan, jonka valitsit, holvin ulkopuolella — kerralla. Pidä <kbd>Shift</kbd>-näppäintä painettuna, ja valinta ulottuu sisään tulleeseen osaan. macOS:ssä sanan hyppy on <kbd>Option</kbd>+<kbd>←</kbd> ja <kbd>Cmd</kbd>+<kbd>←</kbd> on <kbd>Home</kbd>. Missä tahansa muualla kuin alussa nämä ovat tavallisia tekstinäppäimiä. **Luettelon näkyessä <kbd>Home</kbd>, <kbd>End</kbd>, <kbd>PgUp</kbd> ja <kbd>PgDn</kbd> kuuluvat sille** — ensimmäinen rivi, viimeinen rivi, sivu ylös, sivu alas, sivun ollessa se, mitä luettelo näyttää, korostetun rivin pitäessä paikkansa ruudulla — ja tavoittavat tekstin vasta kun se on sulkeutunut; <kbd>Shift</kbd>+<kbd>Home</kbd> tuo mukaan kaikki kansiot luettelon ollessa auki myös.
- **Luettelo seuraa kohdistinta.** Valitse eri osa polusta — vedä sen yli, napsauta siihen tai siirry nuolinäppäimillä — ja luettelo näyttää *kyseisen* kansion lapset, ei sen, jolle kenttä avattiin. Kansio lasketaan lapuista sekä siitä osasta kenttää, joka on kohdistimen edessä, niin että napsauttaminen `Notes.md`-nimeen kentässä, jossa on `2026/Notes.md`, näyttää sen, mitä `2026`-kansiossa on. Osoittaminen riviin kirjoittaa sen kohdistimen sisältämään osaan, ja osoittimen poistaminen luettelosta antaa tekstisi ja valintasi takaisin, täsmälleen sellaisina kuin ne olivat.
- **Valinnan pyyhkäisy kentän ulkopuolelle** ja irrottaminen jonnekin muualle ei sulje sitä. Painallus, joka alkaa kentässä, kuuluu muokkaukseen, matkasi minne tahansa; vain painallus, joka *alkaa* ulkopuolella, on napsautus poispäin.
- <kbd>Enter</kbd> vahvistaa — ja kun kenttä ei nimeä yhtään mitään, kuten tyhjässä kansiossa, jossa ei koskaan ollut mitään täydennettävää, se sanoo *Ei tiedostoa valittuna* ja pysyy auki sen sijaan, että sulkeutuisi ikään kuin jotain olisi valittu. <kbd>Esc</kbd> tai napsautus muualle peruuttaa takaisin tiedoston todelliseen polkuun. Yksi <kbd>Esc</kbd>-painallus riittää: se sulkee luettelon, poistuu kentästä ja antaa kohdistuksen takaisin muistiinpanolle, sen sijaan että vaatisi yhden painalluksen per kerros.

Kenttä on täysin koruton — ei laatikkoa, ei reunaa — joten se luetaan itse polkutekstinä, ja se kasvaa itsestään kirjoittaessasi.

## Rivin joka osa, näppäin näppäimeltä

Koko rivi yhdellä silmäyksellä. Hiiren oikean napin sarake on se, mitä **yksi**
painallus antaa; sama näppäin myös laskee painallukset, ja sen [omassa
taulukossa](#oikea-näppäin-yksi-painallus-kaksi-painallusta-kolme) alempana on toinen,
kolmas ja neljäs. Tämä olettaa, että **Kansion nimi avaa luettelon** on
päällä, mikä on oletus — kun se on pois päältä, kansion nimi ja erotin
vaihtavat paikkaa ensimmäisessä sarakkeessa, kuten [ylimpänä oleva
taulukko](#polku) kertoo.

| Mihin painat | Napsautus | Kaksoisnapsautus | <kbd>Ctrl</kbd>+napsautus tai keskinapsautus | Oikea napsautus | Jonkin pudottaminen sen päälle |
| --- | --- | --- | --- | --- | --- |
| **Holvin nimi** | Avaa sijaintien luettelon — muut holvit, koti, tiedostojärjestelmän juuri, liitetyt asemat. Pois päältä oletuksena; kun se on pois päältä, näyttää holvin tiedostonhallinnassa sen sijaan | Merkitsee **koko absoluuttisen polun**. Tuo luettelo avautuu polku jo kentässä, vain holvin oma osa merkittynä; toinen painallus laajentaa merkinnän loppuun asti. Ei mitään laajennettavaa, kun luettelo on pois päältä | Välilehti, joka ei sisällä mitään, seisten holvin juuressa lista jo näkyvissä — paikka, josta kirjoittaa polku tyhjästä | Holvin oma kontekstivalikko: mitä holville voi tehdä, jonka nimen tuo osa antaa | **Tiedosto** siirtyy holvin juureen. **Teksti** avaa kentän juuressa, jotta muistiinpanolle, joksi se tulee, voi antaa nimen |
| **Kansion nimi** | Valitsee kyseisen kansion muokattavaksi, sen vanhemman sisältö listattuna alla | Kirjoittaa uudelleen kyseisen kansion ja kaiken sen alla | Avaa kyseisen kansion uudessa välilehdessä | Kyseisen kansion kontekstivalikko — tiedostonhallinnan oma | **Tiedosto** siirtyy kyseiseen kansioon. **Teksti** avaa kentän siellä, jotta muistiinpanolle, joksi se tulee, voi antaa nimen |
| **Erotin** | Avaa sitä edeltävän kansion — sen kansiomuistiinpanon, jos kansiomuistiinpanolaajennus on käynnissä ja sellainen on olemassa, muuten näyttää ja laajentaa sen tiedostonhallinnassa | **Luo kyseisen kansion muistiinpanon** ja siirtyy siihen, jos kansiomuistiinpanolaajennus on käynnissä eikä kansiolla ole vielä sellaista. Jos sillä on jo yksi, tämä on vain sama yksi painallus uudelleen | Kansiomuistiinpano uudessa välilehdessä, jos sellainen on olemassa; muuten välilehti, joka seisoo kyseisessä kansiossa lista näkyvissä | Sama kontekstivalikko, jonka nimikin antaa — sen kansiomuistiinpanon, jos sillä on sellainen | Kyseisen kansion muistiinpanon loppuun, jos sillä on sellainen, kun vahvistat |
| **Muistiinpanon nimi** | Avaa nimen muokattavaksi — kansiot pysyvät sen vieressä sirpaleina — kaikki paitsi tiedostopääte merkittynä | Ottaa myös tiedostopäätteen mukaan merkintään | Avaa muistiinpanon uudessa välilehdessä | Tiedoston kontekstivalikko — sama, jonka tiedostonhallinnan rivikin antaa | Tämän muistiinpanon loppuun, kun vahvistat |
| **Tyhjä tila** | Avaa **koko polun** muokattavaksi, merkittynä tiedostopäätteeseen asti. Kansiot tulevat kenttään sen mukana, mikä tekee tästä eleen polun uudelleenkirjoittamiselle nimen sijaan | Ottaa myös tiedostopäätteen mukaan merkintään | <kbd>Ctrl</kbd> avaa tämän muistiinpanon uudelleen omassa välilehdessään, välähdyksenä tiedostonhallinnassa, ettei kopiota erehdy pitämään ensimmäisenä. Keskinapsautus *ei* ole tämä ele: se liittää polun päälle | Merkitsee koko polun ja tarjoaa, mitä merkitylle tekstille voi tehdä | |

**Toinen painallus seuraa ensimmäistä.** Kansion muistiinpanon luominen
sijoittuu sille rivin osalle, joka *avaa* kyseisen kansion — mikä on erotin
oletuksena ja kansion nimi, kun vaihto on pois päältä — samalle kohteelle,
jota alleviivaus merkitsee, ja samalle, jota yksi painallus jo pyytää
kansiomuistiinpanolle. Sitä tarjotaan vain, kun kansiomuistiinpanolaajennus on
käynnissä, sillä kansiomuistiinpano on käytäntö eikä tiedostojärjestelmän
tosiasia, ja vain kun kansiolla ei vielä ole sellaista. Missä se sijaitsee ja
miksi se nimetään, luetaan **Folder notes** -laajennuksen omista asetuksista,
joten holvi, joka pitää kansiomuistiinpanonsa kansion vieressä tai kutsuu
niitä nimellä `_index`, saa sellaisen; tiedosto itse on aina Markdown, mikä on
se, minkä kyseisen laajennuksen oma oletusluontikomento tekee ja mitä se
löytää riippumatta siitä, mihin tyyppiin holvi on asetettu. Nimeämis-/
siirtotila on tästä kokonaan poissa — mikään rivillä ei avaa kansiota, kun
siirto on kesken.

**Napsautukset nimessä jatkuvat eteenpäin.** Neljä porrasta ovat samat neljä,
joita nimeämisnäppäin käy läpi, samassa järjestyksessä: nimi, nimi
tiedostopäätteineen, polku holvista, polku järjestelmän juuresta. Kolmas
napsautus siis saavuttaa holvin polun ja neljäs koneen — samat neljä, jotka
<kbd>Tab</kbd> kentän lopun ohi antaa, ja samat neljä, jotka oikea näppäin
*kopioi* valitsemisen sijaan.

**Kohdistaminen** on oma vastauksensa eikä koskaan muuta mitään: lyhennetty
nimi palaa kokonaisena niin kauan kuin osoitat sitä, ja rivin alussa oleva
kuvake kertoo, missä holvi sijaitsee.

## Oikea näppäin: yksi painallus, kaksi painallusta, kolme

Jokainen rivin kohde vastaa oikeaan napsautukseen, ja se, kuinka monta
painallusta annat, ratkaisee, mitä saat. Koska toinen painallus saattaa vielä
olla tulossa, ensimmäinen odottaa noin kolmasosan sekunnista ennen
toimimistaan — hinta kolmen eleen laittamisesta yhteen näppäimeen.

| Mihin painat | Kerran | Kahdesti | Kolmesti |
| --- | --- | --- | --- |
| **Holvin nimi** | Holvin kontekstivalikko: mitä holville voi tehdä, jonka nimen tuo osa antaa — mukaan lukien *Avaa tämä holvi*, jos kyseinen holvi ei ole se, jossa olet | Kopioi holvin nimen | Kopioi, missä holvi sijaitsee — ja neljäs painallus, missä avoin tiedosto sijaitsee |
| **Erotin** | Kyseisen kansion valikko — sen kansiomuistiinpanon, jos kansiomuistiinpanolaajennus on käynnissä ja kansiolla on sellainen | | |
| **Kansion nimi** | Kyseisen kansion valikko | Kopioi kansion nimen | Kopioi sen ja kaiken sen oikealla puolella |
| **Muistiinpanon nimi** | Tiedoston valikko — sama, jonka tiedostonhallinnan rivikin antaa | Kopioi nimen | Kopioi sen tiedostopäätteineen |
| **Tyhjä tila** | | Kopioi polun holvikansiostasi, ilman tiedostopäätettä | Sama, sen kanssa |

Yksi painallus **holvin nimen** kohdalla avaa, mitä sille voi tehdä, minkä
nimen tuo osa antaa. **Holville, jossa olet**: avaa se uudessa ikkunassa,
hallitse holveja, kopioi, missä se sijaitsee, kopioi sen ID, näytä se
tiedostonhallinnassasi. **Toiselle holville**, johon päädytään sijaintien
luettelon kautta, sama miinus uusi ikkuna — mikä avaisi *tämän* holvin, ei
sitä — plus se ainoa asia, jota vain holvi, jossa et ole, voi tarjota:
**Avaa tämä holvi**. Se nimetään Obsidianille sen ID:llä eikä kansion
nimellä, koska kaksi holvia voi jakaa saman nimen. Paikalle, joka ei ole
lainkaan holvi — kotikansiollesi, liitetylle asemalle — ei ole ID:tä
kopioitavaksi eikä mitään avattavaa, ja valikko kertoo sen jättämällä ne
tarjoamatta.

Tämä ei ole Obsidianin oma kolmen pisteen valikko, joka kuuluu
aloitusikkunalle eikä sitä voi avata käynnissä olevan holvin sisältä — nämä
ovat samat kohdat uudelleen rakennettuina, Obsidianin omalla sanamuodolla,
otettuna sen komennoista, jotta ne saapuvat sinun kielelläsi. Kolme tuon
valikon kohtaa on tarkoituksella *ei* mukana täällä: *nimeä holvi uudelleen*,
*siirrä holvi* ja *poista listalta* toimivat kaikki holvin omaan kansioon tai
Obsidianin holvirekisteriin, ja sen tekeminen holville, jossa parhaillaan
seisot — tiedostoineen avoinna ja tarkkailijoineen käynnissä — on tapa, jolla
holvi rikkoutuu. Avaa holvienhallinta (*Avaa toinen holvi*) ja tee ne siellä,
missä holvi on suljettu.

Kaksi **tyhjän tilan** kopiota ovat rivi sellaisena kuin se on kirjoitettu —
mitä linkki tai haku haluaa — ja **holvin nimen** kohdalla olevat ovat
tiedostojärjestelmän tuntemat polut, mitä kaikki Obsidianin ulkopuolinen
haluaa. Jokainen painallus siellä laajentaa, mihin kopio kelpaa: kaksi antaa
holvin nimen, kolme missä holvi sijaitsee, neljä missä avoin tiedosto
sijaitsee. Obsidian tekee saman eron omissa kahdessa komennossaan,
*holvikansiosta* ja *järjestelmän juuresta*; täällä ulospäin suuntautuvat
istuvat sillä osalla, joka itse on polun ulkopuolella.

Kaikki tämä toimii myös holvin ulkopuolella, samoilla kohteilla.

Jokainen kopio kertoo siitä ilmoituksella, koska kopio ei jätä näytölle
mitään osoittamaan, että se tapahtui, eikä väärin lasketun painalluksen
pitäisi näyttää onnistuneelta.

## Muuntonäppäimet: avaa se muualle

Muistiinpanon nimi ja kansio-osat käyttäytyvät kuin niiden rivit
tiedostonhallinnassa.

| | Muistiinpanon nimellä | Kansio-osalla |
| --- | --- | --- |
| Tavallinen napsautus | Muokkaa nimeä | Selaa kyseistä kansiota |
| <kbd>Ctrl</kbd> / keskinapsautus | Avaa muistiinpano uudessa välilehdessä | Lähetä kansio uuteen välilehteen |
| <kbd>Ctrl</kbd>+<kbd>Alt</kbd> | Jako | Jako |
| Vetäminen | Muistiinpano, minne tahansa Obsidian ottaa tiedoston | Kansio, samoin — myös välilehtipalkki mukaan lukien |

Kansio ei ole jotain, minkä Obsidian voi avata, joten sen lähettäminen
välilehteen tekee jomman kumman kahdesta asiasta: avaa sen
kansiomuistiinpanon, jos kansiomuistiinpanolaajennus on käynnissä ja
sellainen on olemassa, tai avaa tyhjän välilehden, jonka polkupalkki seisoo
jo kyseisessä kansiossa — jättäen sinulle vain nimen kirjoitettavaksi.
Kansio-osan pudottaminen **välilehtipalkkiin** tekee saman, uudessa
välilehdessä siellä, mistä irrotat — Obsidianin oma välilehtipalkki ottaa
itsestään vain tiedostoja, joten tiedostonhallinnasta vedetty kansio
käännytetään pois sielläkin.

## Tab: täydentää nimen, sitten polun, sitten laajentaa valintaa

<kbd>Tab</kbd> täydentää samaan tapaan kuin komentotulkki: **painallus jatkaa kirjoittamaasi niin pitkälle kuin kyseisen kansion nimet ovat samaa mieltä, ja pysähtyy siihen, missä ne eroavat.** Kirjoita `Sk`, kun vain `Sketches` alkaa niin, ja sana on valmis; kirjoita `Al`, kun `Alpha-one`, `Alpha-two` ja `Alpine` kaikki alkavat niin, ja saat `Alp`-tekstin, koska seuraava merkki on kysymys, johon vain sinä voit vastata.

Paina uudelleen kirjoittamatta mitään, ja se etenee kohti yhtä nimeä — luettelon korostamaa riviä, tai ensimmäistä — pysähtyen sen nimen seuraavaan epäselvyyteen: `Alpha-`, sitten `Alpha-one`. Lista avautuu siihen, missä jo olet, joten omassa kansiossasi ensimmäinen painallus suuntaa kohti avoinna olevaa muistiinpanoasi, ei kohti sitä, mikä lajittelee ensimmäisenä.

**Painallus ei koskaan valitse nimien väliltä puolestasi.** <kbd>Tab</kbd> astuu kansioon, kun kirjoittamasi jättää yhden ehdokkaan, tai kun olet kirjoittanut kansion koko nimen eikä mikään *toinen kansio* jatka sitä. Missä joku jatkaa — `Schemes` verrattuna `Schemes2026`-nimeen — <kbd>Tab</kbd> jatkaa täydentämistä kohti pidempää nimeä; <kbd>Enter</kbd> ja luettelo ovat eleitä, jotka tarkoittavat *tätä nimenomaista*.

**Tiedosto** ei koskaan pidättele kansiota tällä tavoin. Kansio, jonka vieressä on samanniminen muistiinpano, on kansiomuistiinpano eikä haara polussa, ja <kbd>Tab</kbd> kulkee kansioita — joten `Projects`, jonka vieressä on `Projects.md`, käydään läpi kuten mikä tahansa muu.

Kaksi pienempää seurausta: kenttään päätyy nimi kirjoitettuna niin kuin kansio sen kirjoittaa, joten `sk`:sta tulee `Sketches`; ja vain kirjoitettava nimi korvataan, joten polku, jossa on enemmän sen oikealla puolella, säilyttää sen.

Kun nimi tarjotaan sitä kirjoittaessasi, <kbd>Tab</kbd> **kirjoittaa täsmälleen tarjouksen**: tarjous on aina se, minkä painallus kirjoittaisi, ja luettelon alleviivaus sekä vihreä viiva sanovat saman asian, joten se, mitä näet kohdistimen jälkeen, on se, minkä saat. Missä nimet lakkaavat olemasta samaa mieltä, se on askel kohti ensimmäistä niistä — tai kohti riviä, johon nuolinäppäimillä siirryit, jonka <kbd>Tab</kbd> ottaa sen viereisen sijaan — joten siirry nuolinäppäimillä haluamaasi tai kirjoita haaran ohi ennen kuin painat. Vasta kun tarjous jättää *yhden* nimen, sama painallus astuu siihen.

Tiedoston nimeen saapuminen **on** ensimmäinen porras — yksikään painallus ei mene kohdistimen pysäyttämiseen nimen loppuun, jota se on juuri merkitsemässä. Siitä lähtien painallukset lakkaavat liikkumasta pitkin polkua ja alkavat laajentaa valittua osaa:

1. nimi
2. nimi tiedostopäätteineen
3. polku holvikansiostasi
4. polku järjestelmän juuresta
5. takaisin polun alkuun **sellaisena kuin se nyt on** — siihen, mistä kulku alkoi, ensimmäinen osa merkittynä, valmiina kuljettavaksi uudelleen

Neljäs napsautus saavuttaa saman neljännen portaan suoraan.

Laajentaminen vain koskaan **laajenee**. Nimi, joka on jo kokonaan kentässä — täydennetty samalla näppäimellä tai valittu luettelosta — merkitään kokonaisuudessaan sen sijaan, että sen pääte ensin otettaisiin pois: ensimmäinen porras on nimelle, johon kulku on juuri *saapunut*, jolloin pääte ei vielä ole aiheena.

Porrasto on siinä, mihin kulku **saapuu**, ei siinä, mistä se alkaa. Napsauta kansiota kesken polun, ja kenttä avautuu kaikkeen sen alapuolella olevaan, kyseisen kansion nimi merkittynä; jokainen <kbd>Tab</kbd> ottaa sitten **yhden** kansion — merkiten seuraavan, pitäen lopun polusta perässään — ja vasta kun jäljellä on vain tiedoston nimi, laajentaminen alkaa:

| painallus | murut | kenttä | merkitty |
| --- | --- | --- | --- |
| napsautettu `a` | | `a/b/c/leaf.md` | `a` |
| <kbd>Tab</kbd> | `a` | `b/c/leaf.md` | `b` |
| <kbd>Tab</kbd> | `a › b` | `c/leaf.md` | `c` |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf` — ensimmäinen porras |
| <kbd>Tab</kbd> | `a › b › c` | `leaf.md` | `leaf.md` |

**Kirjoitettu nimi on kirjoitettu, teit sen millä tavalla tahansa.** Sen täydentäminen
<kbd>Tab</kbd>-näppäimellä, sen vahvistaminen `/`-merkillä ja sen valitseminen
luettelosta jättävät kaikki rivin samaan tilaan pitämään samaa polkua, joten
eleen jälkeinen painallus tarkoittaa samaa asiaa riippumatta siitä, mitä kautta
tulit. Kansion valitseminen listasta tyhjensi ennen kentän sen sijaan, hukaten
polun, jonka saman kansion saavuttaminen <kbd>Tab</kbd>-näppäimellä olisi säilyttänyt.

**Polku, jota vielä kirjoitat, tulee mukana kokonaan.** Astuminen juuri siihen kansioon, josta polun loppuosa riippuu, ei ole väite siitä, että loppuosa on olemassa — se on tapa, jolla polku kirjoitetaan etukäteen itsensä edelle, ja kansiot, jotka se nimeää, ovat niitä, jotka <kbd>Enter</kbd> on juuri tekemässä. Niinpä kulkeminen polusta `Dokumente/plans/untitled.md` kansioon `Dokumente` pitää tekstin `plans/untitled.md` edessäsi, riippumatta siitä, onko `plans` vielä olemassa vai ei. Sama pätee polkuun, jonka kirjoitit tyhjästä: mikään siitä ei periytynyt mistään, joten mitään siitä ei myöskään oteta pois.

**Askeleen vaihtaminen toiseen on eri asia, ja silloin polku tulee mukana vain sikäli kuin se todella on olemassa siellä.** Vaihda kesken polun oleva kansio sisarukseen — napsauta `a`, kirjoita toinen nimi, paina <kbd>Tab</kbd> — ja kaikki sen alapuolella tuleva mukanasi, koska polku, jolla olit, on yleensä suurin osa polkua, jota haluat. Vain se, mikä siellä oikeasti on olemassa, säilyy siirrossa, joten kenttä ja sen vieressä oleva luettelo eivät koskaan ole eri mieltä: se, mikä jää eteesi, on polku, jota voit oikeasti kulkea. Aloittaen polusta `a/b/c/leaf.md`, kun `a` on napsautettu ja sen nimi merkitty:

| mitä kirjoitat | murut | kenttä | merkitty |
| --- | --- | --- | --- |
| `x`, jolla ei ole `b`-kansiota lainkaan | `x` | | mikään ei tullut mukana |
| `y`, jolla on `b` mutta ei `c`:tä siinä | `y` | `b` | `b` |
| `z`, joka on `a`:n kaksoiskappale koko matkalta | `z` | `b/c/leaf.md` | `b` |

Kansio, joka jää siten yksin seisomaan, on silti kansio, johon voi astua: sen jälkeinen painallus astuu sisään sen sijaan, että alkaisi laajentaa valintaa sen nimen yli.

Nimeen, jota **mikään** kansiossa ei vastaa, vastataan eri tavalla, koska mikään ei ole kirjoittanut sitä sinne: painallus merkitsee kirjoittamasi, valmiina korvattavaksi, sen sijaan että vastaisi jollain muulla.

Koko asia on **silmukka, ja sen kiertäminen ei maksa mitään**: viimeisen portaan jälkeinen painallus palauttaa rivin polun alkuun, kansioineen kaikkineen, valmiina kierrettäväksi uudelleen. Ainoa asia, joka koskaan poistuu riviltä, on absoluuttinen etuliite, sen painalluksen kohdalla, joka lakkaa näyttämästä sitä.

Se, mikä palaa, on **polku, jonka rakensit**, ei se, josta lähdit liikkeelle. Haaraudu kulussa puolimatkassa — valitse toinen sisarus luettelosta, täydennä kohti toista nimeä — ja kierros sulkeutuu siihen, missä todella olet; sitä edeltävät neljä porrasta kuvaavat samaa polkua, ja tämä oli aiemmin se poikkeava porras, joka kuvasi mennyttä.

<kbd>Shift</kbd>+<kbd>Tab</kbd> sulkee saman renkaan toiseen suuntaan: polun alussa, kun mitään ei ole enää annettavaksi takaisin eikä mitään ylempänä, seuraava painallus hyppää **kauimmaiseen** portaaseen — polkuun järjestelmän juuresta — ja jatkaa kaventamista siitä. Kumpikaan suunta ei pääty umpikujaan.

Se ei myöskään käytä yhtään painallusta portaaseen, jonka se on jo näyttänyt. Viimeisen portaan alapuolella — nimi ilman päätettä — porrasto loppuu, ja *sama painallus* poistuu kansiosta: polku järjestelmän juuresta, polku holvistasi, nimi, nimi ilman päätettä, sitten kansio, yksi askel kerrallaan.

Painallusta ei myöskään käytetä portaaseen, joka ei muuta mitään: muistiinpanon nimen napsauttaminen näyttää sen jo ilman päätettä, mikä on se, mitä ensimmäinen porras näyttää, joten siitä <kbd>Tab</kbd> alkaa toisesta portaasta.

Jokainen porras muuttaa sitä, mitä kentässä *on*, ei pelkästään sitä, mikä on korostettu — valinnan on oltava sen tekstin päällä, jota se nimeää, tai <kbd>Enter</kbd> vahvistaisi jotain muuta kuin sen, minkä näet valituksi. Porrasto kuuluu yhteen muokkausistuntoon: napsauta muualle, tai kirjoita mitä tahansa, ja seuraava <kbd>Tab</kbd> täydentää taas nimen.

### <kbd>Shift</kbd>+<kbd>Tab</kbd>: sama tie takaperin

<kbd>Shift</kbd>+<kbd>Tab</kbd> ottaa yhden askeleen takaisin per painallus, painallusten tekojärjestyksessä: valinta kapenee porras kerrallaan, jokainen täydennys annetaan takaisin, ja jokaisesta kansiosta astutaan ulos — sen nimi palaa kenttään, jotta voit muokata sitä sen sijaan, että kirjoittaisit sen uudelleen.

**Mitään ei poisteta paluumatkalla.** Täydennys annetaan takaisin *merkitsemällä* merkit, jotka se lisäsi, aivan samoin kuin eteenpäin kulkeminen merkitsee sen, mitä se on laajentanut ylitse — nimi pysyy edessäsi, ja jokainen lisäpainallus merkitsee siitä yhä yhden askeleen lisää:

| | kenttä | merkitty |
| --- | --- | --- |
| kuljettu sisään | `Alpha-one` | |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `ha-one` |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `Alpha-one` | `Alpha-one` |

Kirjoittaminen korvaa merkityn osan, kuten se tekee muuallakin. <kbd>Tab</kbd> laittaa takaisin täsmälleen sen, minkä merkintä antoi takaisin, joten kaksi askelta ulos ja kaksi askelta taas sisään kulkeminen palauttaa sinut sinne, missä olit.

Kun koko nimi on merkitty, ei ole jäljellä mitään, minkä painallus olisi laittanut sinne, ja seuraava painallus menee *ylös polkua*: se poistuu kansiosta, jossa seisot, aivan kuten <kbd>Backspace</kbd> tekee tyhjässä kentässä. Sekään ei maksa mitään — kansion nimi palaa kenttään **sen edelle**, mitä siinä jo oli, merkittynä, mikä on sama teksti, jonka kyseisen kansion napsauttaminen olisi antanut. Takaisin on suunta eikä kumoushistoria — mutta nimen merkitseminen ensin tarkoittaa, että yksi painallus ei koskaan sekä ota takaisin sitä, mitä kirjoitit, että vie sinua ulos kansiosta, johon sen kirjoitit.

Teksti, joka avautuu **jo valittuna** — se, mitä kansion napsautus jättää jälkeensä — on nimi, jonka parissa <kbd>Tab</kbd> toimii seuraavaksi: se täydennetään ja siihen astutaan kuten mihin tahansa muuhun, ja kirjoittaminen korvaa sen. Vain kohdistuskomento avautuu suoraan portaston jollekin portaalle, koska se näyttää sinulle koko polun eikä kansiota, johon kulkea.

## Polun ulkopuolisen tekstin kirjoittaminen

| Mitä kirjoitat | Mitä tapahtuu |
| --- | --- |
| `https://…` | Avautuu uudessa välilehdessä Obsidianin **verkkoselaimessa**, jos se ydinlisäosa on käytössä; muutoin työpöytäselaimessasi |
| `obsidian://…` | Annetaan Obsidianin omalle URI-käsittelijälle |
| `file:///…` | Puretaan ja avataan: oikeana muistiinpanona, jos se on holvisi sisällä, muutoin selaimessa |
| `/home/sina/a%20b.md` | Sama, selaimesta tai tiedostonhallinnasta liitetylle polulle |

Vain nimenomaiset skeemat lasketaan mukaan — `100%20`-niminen muistiinpano on silti muistiinpano. `/`, joka kuuluu skeemaan, pysyy kirjaimellisena sen sijaan, että se laskeutuisi kansioon, joten URL-osoitteen voi kirjoittaa käsin eikä vain liittää.

## Komento näppäimistölle

**Kohdista polkupalkkiin** avaa kentän muistiinpanon nimeen ja kulkee sitä samoin kuin <kbd>F2</kbd> — nimi, nimi tiedostopäätteineen, polku holvistasi, polku järjestelmän juuresta — ja sitä seuraava painallus sulkee kentän ja palauttaa kohdistimen takaisin muistiinpanoon. Se ei nimeä uudelleen: Enter navigoi, kuten missä tahansa muussa kentässä. Sillä ei ole omaa näppäintä oletuksena, koska Obsidianin ohjeet eivät suosittele lisäosien varaavan sellaista; tämän lisäosan asetusten lopussa oleva **Hotkeys**-rivi avaa *Asetukset → Hotkeys*, näyttäen vain sen komennot, joten voit sitoa sen sinne.

## Navigointi ei koske avoinna olevaan tiedostoon

Oletustilassa (navigointi) avoinna olevaa muistiinpanoa **ei koskaan** nimetä uudelleen eikä siirretä.

- Polku, joka viittaa olemassa olevaan tiedostoon, avaa sen.
- Polku, jota ei vielä ole, luodaan yksinkertaisesti, mahdollisten puuttuvien yläkansioiden kanssa, ja avataan. Jokainen näin tehty tiedosto ja kansio kertoo siitä ilmoituksessa — uusi kansio on muutoin näkymätön, kunnes menet etsimään sitä — ja Obsidianin oma roskakori tekee ei-toivotun kansion kumoamisesta yhden näppäinpainalluksen asian.
- **Holvin ulkopuolella se silti kysyy ensin.** Siellä sama kirjoitusvirhe kirjoittaa järjestelmäkansioon, missä ei ilmoituksesta eikä Obsidianin roskakorista ole juuri lohtua.

## <kbd>Ctrl</kbd> — uusi välilehti, ja kopiointi siirron sijaan

Muistiinpano, **joka luodaan, siirretään tai kopioidaan holvin sisällä, näytetään siinä, mihin se päätyi** tiedostoselaimessa, hetken merkittynä Obsidianin korostusvärillä — puu on paikka, josta sitä etsit jälkeenpäin, joten se laitetaan eteesi sen sijaan, että se jäisi kansioon, joka ei ehkä ole edes auki. Kaksoiskappaleen tekeminenkin kertoo siitä: kopio jättää alkuperäisen paikoilleen ja avaa kopion omaan paneeliinsa, mikä ilman sanaakaan on helppo lukea niin, ettei mitään tapahtunut.

<kbd>Ctrl</kbd>-näppäimen (<kbd>Cmd</kbd> macOS:ssä) pitäminen pohjassa, kun valitset tiedoston luettelosta tai kun painat <kbd>Enter</kbd> polulla, lähettää tuloksen **uuteen välilehteen** tämän sijaan:

| | Ilman näppäintä | <kbd>Ctrl</kbd>-näppäimen kanssa |
| --- | --- | --- |
| Valitse tai kirjoita olemassa oleva tiedosto | Avautuu tässä | Avautuu uudessa välilehdessä |
| Kirjoita polku, jota ei ole | Kysyy, avaa sitten tässä | Kysyy, avaa sitten uudessa välilehdessä |
| Vahvista polku nimeämis-/siirtotilassa | **Siirtää** muistiinpanon sinne | **Kopioi** sen sinne ja avaa kopion uudessa välilehdessä |

Näppäin luetaan Obsidianin omalla säännöllä, joten se käyttäytyy täsmälleen kuten linkillä tai tiedostoselaimen rivillä — keskinapsautus tarkoittaa myös "uusi välilehti", <kbd>Ctrl</kbd>+<kbd>Alt</kbd> jakoa ja <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd> uutta ikkunaa.

Kopiointi kieltäytyy ylikirjoittamasta, aivan kuten siirtokin — myös muistiinpanon omalle polulle, jonne ei ole mitään järkevää kopioitavaa. Holvin ulkopuolella tuo kieltäytyminen sanotaan myös ääneen.

Kaikki tämä toimii **luettelon ollessa auki** yhtä lailla kuin ilmankin: korostetulla rivillä näppäin koskee sitä riviä, ja mitään korostamatta se koskee sitä, mitä olet kirjoittanut.

## Selaaminen holvin ulkopuolella

**Tämä on oletuksena pois päältä.** Kytke ensin asetuksista päälle **Pääsy ulkoisiin tiedostoihin** — lukeminen ja kirjoittaminen holvin ulkopuolella on ainoa asia, jonka tämä lisäosa tekee ja jota Obsidian itse ei tee, joten se valitaan päälle eikä pois. Kun se on pois, holvin nimi vain näyttää holvisi tiedostoselaimessa, eikä mikään täällä katso koskaan sen ohi.

**Holvin nimen** (tai 🏠-kuvakkeen, kun *Näytä holvin nimi* on pois päältä) napsauttaminen avaa luettelon paikoista sisällön sijaan. Kentässä, joka avautuu, on **koko polku, jolla olit, kirjoitettuna kokonaan**, ja siitä on valittuna kohta, josta se alkaa — niin muualle valitseminen tai valinnan päälle kirjoittaminen vaihtaa vain sen alkuosan ja jättää lopun polusta eteesi. **Paina nimeä toisen kerran** — kaksoisnapsautus — ja valinta laajenee koko sen ylle, jolloin absoluuttinen polku otetaan yhdellä eleellä sen sijaan, että sen pyyhkisi käsin. Muuta mielesi, ja <kbd>Esc</kbd> palauttaa rivin sellaisenaan.

Kirjoittaminen tässä tarjoaa loppuosan paikan nimestä kuten muuallakin, ja <kbd>Tab</kbd> **asettaa sen paikan sisään** — sen, jota osoitat, tai sen, jota nimi voi vain tarkoittaa. Missä useat paikat jakavat yhä sen, mitä olet kirjoittanut, painallus pysähtyy risteykseen, kuten kaikkialla. Paikan osoittaminen näyttää **sen paikan omaan polkuun**, kaikkeen siihen valittuna, ja sen perässä muistiinpanosi polun vain sen matkan, jonka se todella jatkuu sinne — mikä on täsmälleen se, mihin sen valitseminen veisi sinut. Paikka ei ole askel näytöllä olevan polun sisällä, vaan paikka, josta koko polku lasketaan, niin mikään siitä, missä olit, ei jää sen eteen.

Tarjolla olevat paikat:

- **Muut holvisi**, luettuna Obsidianin omasta rekisteristä, viimeksi avatut ensin, kukin Obsidianin oman holvikuvakkeen alla — sen, jota sovellus itse käyttää holvikomennoille. Jo avoinna oleva holvi saa talon sen sijaan: siitä rivi oletuksena alkaa, se ei ole paikka johon mennä.
- **Kotikansio**, oman tilinimensä alla, merkittynä `~`-merkillä. Lucidessa ei ole tildeä, joten lisäosa piirtää tämän Lucidesta puuttuvan kuvakkeen sen omaan 24×24-ruudukkoon samalla viivalla — kuvake, joka valikoimasta puuttuu, eikä kirjoitusmerkki kuvakkeiden joukossa.
- **Tiedostojärjestelmän juuri**, merkittynä `root` — kääntämättä, koska se on sen nimi joka järjestelmässä — eikä `/`, joka luettaisiin tyhjänä askeleena sitä seuraavan erottimen vieressä.
- **Liitetyt asemat**, kuvake tyyppiä kohti siellä missä sen selvittäminen on halpaa: verkkojaot, optiset levyt, levykkeet ja siirrettävät mediat saavat omansa; kaikki muu saa yleisen aseman. Windowsissa asemat näkyvät muodossa `C:` yleisellä kuvakkeella — taltioiden nimet ja tarkat tyypit vaatisivat WMI:n, jota tarkoituksella ei käytetä.

Toisen holvin valitseminen **ei vaihda Obsidiania siihen.** Kaikki avoinna oleva pysyy avoinna; polkurivi alkaa vain selata siellä. Juuri siinä on koko idea siinä, että se on polkurivillä eikä jätetty sivupalkin holvinvaihtajalle.

Se laskeutuu myös **niin lähelle muistiinpanoa, jolla olet, kuin se paikka todella ulottuu**.

- Jos valitsemasi paikka *sisältää* muistiinpanon — kotikansio, tai missä holvisi asuvat — saat sen polun siitä lähtien: valitse `~`, kun `takeaways.md` on auki, ja kentässä lukee `Vaults/your-vault/takeaways.md`.
- Jos se on paikka tämän vierellä — toinen holvi, toinen asema — samaa suhteellista polkua kokeillaan niin syvälle kuin se todella ulottuu. Holvit ovat usein lähes toistensa kopioita, ja syy hypätä toiseen on yleensä sama muistiinpano siellä.

Kummassakin tapauksessa rivi pysyy valitsemassasi paikassa, ja **polun ensimmäinen kansio avautuu valittuna**, samassa muodossa kuin kansion napsauttaminen antaa: askel, jota todennäköisimmin muutat hypätessäsi muualle, on lähinnä alkua, ja polun loppuosa pysyy näkyvissä sitä muuttaessasi. Mitään ei koskaan täytetä valmiiksi, ellei se todella ole levyllä.

### Kun olet ulkopuolella

Polku **alkaa valitsemastasi sijainnista**, ei koneen hakemistorakenteesta — ja niin tekee myös kenttä, jonka saat napsauttamalla tyhjää tilaa tai painamalla kohdistusnäppäintä: siinä on polku tuosta paikasta, ei koneen absoluuttinen polku, jäljen supistuessa itse paikkaan täsmälleen samoin kuin se supistuu holvin juureen sisäpuolella — valitse `Archive`, ja rivillä lukee `Archive / notes / …`, ei `/home/you/Vaults/Archive/notes/…`. Alkuosalla on kuvake sen mukaan, mikä se on (holvi, kotikansio, asema), ja <kbd>Backspace</kbd> pysähtyy siihen sen sijaan, että kävelisi eteenpäin ylös tiedostojärjestelmän loppuosaan. Kun *Näytä holvin nimi* on pois päältä, tuo osa on kuvake yksinään — asetus koskee rivin aloitusosaa, oli sen nimeämä holvi mikä tahansa, ei vain omaasi.

Polkurivi on **kehystetty virhevärillä** — samalla renkaalla, jonka nimeämistila piirtää — niin kauan kuin se osoittaa holvisi ulkopuolelle. Se merkitsee pysyvää tilaa, ei hetkeä: niin kauan kuin se on näkyvissä, mikään Obsidianin omasta käsittelystä ei koske sitä, mitä rivi näyttää, ja kirjoittaminen on lukittu kunnes toisin sanot.

Selaaminen toimii muuten kuten sisäpuolella: palaset, erottimet, kirjoittaminen, täydennys, <kbd>Backspace</kbd> ulos astumiseen. Samat näkyvyyssäännöt pätevät myös, joten tukemattomat tiedostopäätteet vaativat yhä Obsidianin asetuksen *Tunnista kaikki tiedostopäätteet* ja piilotiedostot yhä tämän lisäosan asetuksen.

**Oikea napsautus toimii myös ulkopuolella**, vaikka valikko on erilainen: tiedostoselaimen omat käsittelijät tarvitsevat tiedoston, jonka holvi tunnistaa, niin ulkopuoliset rivit rakennetaan sen sijaan polusta. Ne tarjoavat avaamista (tähän, oikealle, uuteen ikkunaan tai työpöydän oletussovellukseen), *Kopioi polku*, *Näytä järjestelmän tiedostoselaimessa* ja — kun riippulukko on auki — *Uusi muistiinpano*, *Uusi kansio*, *Tee kopio*, *Nimeä uudelleen…* ja *Poista*. **Vetäminen** vaatii yhä holvitiedoston ja pysyy pois käytöstä.

Sama valikko on avoinna olevalla tiedostolla katselimessa, oikealla napsautuksella tai ruudun omista kolmesta pisteestä, ja se kysyy riippulukolta kyseisen näkymän otsikkorivillä. Se ei kysy muuta: sillä, näytetäänkö tiedosto muotoiltuna tai lähteenä, ei ole merkitystä sen kannalta, voidaanko se poistaa, ja kuva tai PDF — jolla ei ole lainkaan lähdenäkymää — on yhtä poistettavissa kuin muistiinpano. *Poista* tarkoittaa työpöydän roskakoria, niin se voidaan kumota sieltä; järjestelmä, jossa ei ole roskakoria, ilmoittaa siitä sen sijaan, että tuhoaisi tiedoston.

Poistaminen holvin ulkopuolella siirtää tiedoston **järjestelmän roskakoriin** — Windowsissa Kierrätykseen, macOS:ssä Roskakoriin — ei koskaan linkin poistoon. Täällä ei ole Obsidianin roskakoria, josta palauttaa, niin poistoa, jota ei voitaisi kumota, ei tarjota lainkaan: alustalla, jolla ei ole roskakoria, yritys ilmoittaa epäonnistumisen sen sijaan.

### Kirjoittaminen holvin ulkopuolelle

Kaikki kirjoittava on **oletuksena lukittu**. Niin kauan kuin rivi osoittaa holvisi ulkopuolelle, nimeämiskytkimen paikan otsikkorivillä ottaa **punainen riippulukko** — samanvärinen kuin rivin ympärillä oleva rengas, ja samasta syystä: se merkitsee kieltoa. Ne kaksi ovat yksi ohjain yhdessä paikassa, niin ei ole koskaan kysymystä siitä, kumpi niistä säätelee mitä.

Kolme painallusta, kiertäen:

| Painallus | Mitä saat |
| --- | --- |
| Punainen riippulukko | Kirjoittaminen tänne on sallittu. Riippulukon tilalle tulee nimeämis-/siirtokytkin |
| Kytkin | Nimeämis-/siirtotila, aivan kuten holvin sisällä |
| Kytkin uudelleen | Tila päättyy ja riippulukko sulkeutuu uudelleen — lupa ei jää elämään sen asian jälkeen, jota varten se avattiin |

**Nimeämisnäppäin kysyy myös riippulukolta.** Holvisi ulkopuolella sen painallus välähdyttää riippulukon auki ja kiinni sen sijaan, että avaisi tilan, jonka jokainen sitoumus hylkäisi: kielto tulee ennen työtä eikä sen jälkeen. Paina riippulukkoa, tai paina nimeämisnäppäintä uudelleen puolen sekunnin sisällä — toinen painallus myöntää täsmälleen sen, mitä painike myöntää, tälle sijainnille, ja avaa sen mukana nimeämistilan.

Holvisi sisällä riippulukkoa ei ole: mitään avattavaa ei ole, ja kytkin vain omistaa paikan.

Lupa myönnetään **sijainnille, ei hetkelle**: se säilyy kaiken sen yli, mitä tekisit yhdessä paikassa työskennellessäsi — siirron loppuun saattaminen, syöttökentästä pois napsauttaminen, tiedoston avaaminen — ja päättyy, kun valitset luettelosta toisen holvin, aseman tai juuren, kun rivi palaa holvitiedostoon, tai kolmannella painalluksella. Niin useamman tiedoston siirtäminen yhdessä kansiossa vaatii yhden painalluksen, ei yhtä tiedostoa kohti.

Riippulukon ollessa auki polkurivi käyttäytyy siellä kuten sisäpuolella:

| Ele | Tulos |
| --- | --- |
| Kirjoita nimi, jota ei ole, <kbd>Enter</kbd> | Sama "luodaanko se?"-kysymys kuin sisäpuolella; puuttuvat kansiot luodaan myös. Nimestä ilman tiedostopäätettä tulee `.md`, aivan kuten sisäpuolella |
| Nimeämis-/siirtotila, kirjoita uusi nimi | Nimeää uudelleen tiedoston, jota rivi näyttää. Nimi ilman tiedostopäätettä säilyttää tiedoston oman — täällä kansio pitää sisällään kaikenlaisia tiedostoja, eikä nimeäminen saa hiljaa muuttaa `.png`-tiedostoa `.md`-tiedostoksi |
| Nimeämis-/siirtotila, selaa muualle, valitse **säilytä tämä nimi** | Siirtää sen sinne sillä nimellä, joka sillä jo on |
| Pidä <kbd>Ctrl</kbd> pohjassa kummassa tahansa | Kopioi siirtämisen sijaan ja avaa kopion uudessa välilehdessä |

Lukittuna kaikki nämä kertovat, mikä ne estää, sen sijaan että tapahtuisivat. Mitään ei koskaan korvata kummassakaan tilassa: jo olemassa oleva kohde hylätään, ja hylkäys on tiedostojärjestelmän oma (`COPYFILE_EXCL`, yksinomainen luonti) eikä tarkistus, joka voisi hävitä kilpajuoksun. Siirto tiedostojärjestelmien välillä — USB-tikulta, verkkojaosta — putoaa takaisin kopioi-sitten-poista-tapaan, ja alkuperäinen poistetaan vasta kun kopio on perillä.

**Muistiinpanon siirtäminen holvistasi *ulos* kysyy ensin.** `fileManager` ei voi seurata tiedostoa yli tuon rajan: joka linkki, joka osoittaa muistiinpanoon, lakkaa selviämästä, mikään ei päivitä niitä, ja muistiinpano poistuu holvin hakemistosta. Niin siirto tarjotaan päätöksenä sen sijaan, että se hylättäisiin tai tehtäisiin hiljaa — valintaikkuna kertoo, mitä se maksaa ja moniko muistiinpano linkittää siihen, jota siirrät. Vahvista, ja se todella siirtyy: kopioidaan ulos, sitten poistetaan holvista Obsidianin oman poiston kautta, niin se on palautettavissa aivan kuten poistettu muistiinpano, ja epäonnistuminen kummassa tahansa vaiheessa jättää muistiinpanon paikoilleen. <kbd>Ctrl</kbd>:n pitäminen pohjassa kopioi sen yhä ulos sen sijaan, mikä ei kärsi tästä ongelmasta lainkaan. Toiseen suuntaan meneminen — ulkopuolisen tiedoston tuominen holviin *sisään* — ei ole vielä toteutettu.

### Ulkoisen tiedoston avaaminen

Tiedostojärjestelmän selaaminen voi kävellä takaisin **avoinna olevaan holviisi** — juuresta, kotikansiosta, mistä tahansa holvisi asuvat. Sitä tietä tavoitettu tiedosto on tavallinen muistiinpano, niin se avautuu sellaisena: oikea muokkain, linkit ja takalinkit, ja rivi palautuu holviin juurtuneeseen polkuun. Vain tiedostot, joille Obsidianilla ei ole näkymää, pysyvät esikatselussa, koska sillä puolella esikatselu on paremmi vastaus. Missä esikatselu näyttää tällaista muistiinpanoa joka tapauksessa — sanotaan uudelleen avattu työtila — sen ylärivi tarjoaa **Avaa *(holvi)***, joka on sama tarjous kuin käsin tehtynä.

Obsidianin muokkain toimii vain holvin sisäisillä tiedostoilla, joten ulkoista tiedostoa **ei voi** avata oikeana muistiinpanona linkkeineen, takalinkkeineen ja kaikkineen — se on sovelluksen rajoitus, ei tämän lisäosan. Sellaisen valitseminen avaa sen sijaan **esikatselun**, vain luettavana kunnes toisin sanot:

| Tyyppi | Näytetään muodossa |
| --- | --- |
| `.md`, `.markdown` | Muotoiltu Markdown |
| `.html`, `.htm`, `.xhtml` | Muotoiltu sivu |
| Kuvat, äänet, videot, PDF | Alkuperäinen soitin/katselin |
| Mikä tahansa muu **teksti**tiedosto (`.json`, `.css`, `.log`, `.txt`, …) | Sanatarkka pelkkä teksti |
| Binäärimuodot ilman katselinta (`.zip`, `.exe`, …) | Luovutetaan *Avaa oletussovelluksessa*-toiminnolle |

Katselimella on kaksi tapaa lukea tiedosto, ja koska ne sulkevat toisensa pois, näytetään vain se, johon **vaihtaisit**:

| | Mitä se tekee | Oletus tyypille |
| --- | --- | --- |
| **Näytä Markdownina** | Muotoilee tiedoston muistiinpanona, vain luku | `.md`, `.markdown` |
| **Näytä sivuna** | Muotoilee tiedoston sivuna, joka se on, vain luku | `.html`, `.htm`, `.xhtml` |
| **Muokkaa tekstinä** | Lähde, muokattavissa | kaikki muu |

Holvin ulkopuolella **Muokkaa tekstinä** on myös painallus, joka poistaa vain luku -tilan — tila ja lupa ovat yksi ele kahden pohdittavan painikkeen sijaan. Se on punasävyinen **aina kun painallus poistaisi vain luku -tilan**, olitpa sitten aseistamassa muokkausta paikallaan tai tulossa suoraan muotoillusta näkymästä; holvin sisällä ei ole mitään avattavaa, joten siellä se on tavallinen. **Näytä Markdownina** saa kevyen korostusvärisen sävyn — saman, jonka Obsidian antaa valitulle tekstille — mikä merkitsee sen paluutieksi eikä kehotukseksi.

Koska painike seuraa *muokkausta* eikä raakaa tilaa, tekstinäkymässä vain luettavana oleva tiedosto tarjoaa yhä **Muokkaa tekstinä**: se on painallus, joka aseistaa sen. Tiedosto, johon ei voi koskaan kirjoittaa — katkaistu tai lukukelvoton — sanoo sen sijaan **Näytä tekstinä**, koska se on kaikki mitä painallus voi tuottaa.

Oletukset ovat hyödyllisin päin eivätkä kirjaimellisin: `#` komentotulkkiskriptissä on kommentti, ei otsikko, joten `.log`-tiedoston muotoilu Markdownina nielaisisi sen hiljaa. Kumman tahansa oletuksen voi ohittaa tiedostokohtaisesti, ja valinta menee välilehden historiaan, joten edellinen/seuraava ja uudelleen avattu työtila säilyttävät sen — moni muistiinpano asuu `.txt`-tiedostossa, ja moni `.md`-tiedosto on helpompi lukea lähteenä.

#### Mitä HTML-sivu saa tehdä

Ei mitään. Sivu näytetään kehyksessä, josta **kaikki oikeudet on evätty** — ei komentosarjoja, ei lomakkeita, ei siirtymistä, ei omaa alkuperää — ja sisältökäytäntö, joka ei salli sille lainkaan verkkoyhteyttä. Se ei ole varovaisuutta itsensä vuoksi: tavallisella tavalla latautuva paikallinen sivu jakaisi tämän ikkunan alkuperän, ja tämä ikkuna on Obsidian, niin latautuneessa HTML-tiedostossa oleva komentosarja pyörisi sovelluksesi sisällä sovelluksesi oikeuksin.

Se mitä tämä maksaa, on kaikki, mitä sivu *tekee*; se mitä se säilyttää, on kaikki, mitä sivu *on*. Tiedoston vierellä olevat tyylitiedostot ja kuvat luetaan ja tuodaan kehykseen, niin tallennettu sivu näyttää yhä itseltään. Viittaukset, jotka osoittavat sivun omasta kansiosta pois, ja viittaukset johonkin verkkoon, jätetään täsmälleen sellaisina kuin ne on kirjoitettu, ja ne yksinkertaisesti eivät lataudu — paikallinen tiedosto ei voi hiljaa kertoa palvelimelle, että avasit sen.

Komentosarjat **poistetaan** eikä vain estetä, niin näkemäsi sivu ja lähde, johon voit vaihtaa, poikkeavat toisistaan yhdellä ilmoitetulla tavalla eikä sillä, mitä kehys hiljaa kieltäytyi ajamasta. Sivun sisäiset linkit eivät tee mitään. Kun haluat oikean asian — komentosarjat, verkon ja kaiken — *Avaa oletussovelluksessa* luovuttaa sen selaimellesi, joka on siihen oikea työkalu.

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

- **Avaa *(holvi)*** — näytetään, kun tiedosto kuuluu johonkin toiseen holviisi. Luovuttaa sen Obsidianin omalle URI-käsittelijälle, joka avaa tuon holvin ikkunan muistiinpano siinä, oikeana muokattavana muistiinpanona. Tämä ikkuna jätetään täsmälleen sellaisena kuin se oli; mikään ei vaihdu altasi.
- **Näytä Markdownina** / **Näytä sivuna** / **Muokkaa tekstinä** — kaksi tapaa, joilla tätä tiedostoa voi lukea; viimeinen poistaa myös vain luku -tilan holvin ulkopuolella.
- **Avaa oletussovelluksessa** — luovuttaa tiedoston työpöytäsi oletussovellukselle, mukaan lukien binäärimuodot, joita tämä katselin ei voi näyttää. Sanamuoto on täsmälleen sama kuin Obsidianin omassa merkinnässä samalle toiminnolle, koska se on sama toiminto.

Katselin vastaa myös **oikeaan napsautukseen**: tekstimuokkaimen sisällä valikoilla *Leikkaa* / *Kopioi* / *Liitä* / *Valitse kaikki*, ja muualla tiedoston omalla valikolla. Obsidianin kolmen pisteen valikko otsikkorivillä sisältää myös tuon valikon — holvin ulkopuolella se ei muuten tarjoaisi mitään muuta kuin *Jaa oikealle* ja *Jaa alas*.

Mitään holvisi ulkopuolella ei kirjoiteta, ellet paina ensin *Muokkaa tekstinä*. Katso README-tiedoston osio [Holvin ulkopuolella](README.fi.md#holvin-ulkopuolella) koko selvitystä varten.

## Tiedoston pudottaminen kansion päälle polulla

Jokainen rivin kansio ottaa vastaan pudotuksen, joten **kansioon vedetty muistiinpano siirtyy sinne** — lyhin reitti kulkee muistiinpanon ja minkä tahansa sen yläpuolella olevan kansion välillä, koska kohde on jo näkyvissä. Vedä tiedostonhallinnasta, luettelosta, muistiinpanon omasta nimestä otsikkorivillä tai mistä tahansa muualta Obsidianissa, joka tuottaa tiedoston: kyseessä on sovelluksen oma veto, joten hover-teksti, kohdistin ja korostus ovat tiedostonhallinnan piirtämiä.

**Myös holvin nimi ottaa pudotuksen vastaan**, koska se on rivin ylimpänä oleva kansio — ainoa ele, joka siirtää muistiinpanon holvin juureen täältä käsin.

**Kokonaisen valinnan voi vetää kerralla**, ja se siirtyy yhtenä kokonaisuutena: jos yhtäkään niistä ei voitaisi siirtää, pudotus hylätään sen sijaan, että osa siirrettäisiin ja loput jätettäisiin hiljaisesti väliin.

Linkit seuraavat muistiinpanoa, aivan kuten silloin kun se siirretään tiedostonhallinnasta tai kirjoittamalla polku.

Kansio, **joka ei voi ottaa pudotusta vastaan, ei tarjoa mitään omaa** — ei *Siirrä tänne* -tekstiä, ei korostusta kansiolle — sen sijaan, että tarjoaisi jotain, joka sitten epäonnistuisi; sen tilalla on Obsidianin oma vastaus otsikolle, *Avaa tässä välilehdessä*. Kolme tapausta:

- kansio, jossa tiedosto **jo on**, koska se on jo siellä;
- kansio, joka pudotettaisiin **itseensä tai omaan jälkeläiseensä**, mikä ei jättäisi sille paikkaa, josta se olisi tullut;
- valinta, joka sisältää **kansion ja jotain sen sisällä**, koska kansion siirtäminen vie mukanaan lapsensa.

Kansio, jossa on jo **samanniminen tiedosto**, ottaa pudotuksen vastaan ja kysyy, mitä tehdä tiellä olevalle tiedostolle, samalla valintaikkunalla kuin kirjoitetulle tai valitulle varatulle nimelle — katso [Nimi, joka on varattu](#nimi-joka-on-varattu). Mikään tässä ei ylikirjoita mitään.

Vain **holvisi sisällä** olevat kansiot ottavat pudotuksia vastaan. Kun rivi osoittaa holvin ulkopuolelle, sen osat kieltäytyvät, koska muistiinpanon vieminen pois holvista rikkoo jokaisen siihen osoittavan linkin — tämä on päätös, joka ansaitsee kysymyksen eikä pelkän eleen. Tapa tehdä se tarkoituksella on edelleen polun kirjoittaminen, joka kysyy ensin ja kertoo, kuinka moneen muistiinpanoon vaikutus kohdistuisi.

## Tekstin tai tiedoston pudottaminen sen kirjoittamiseksi muistiin

Samat kohteet ottavat vastaan myös **sisältöä** eikä pelkkiä tiedostoja, ja nämä kaksi erotetaan toisistaan sen mukaan, mitä vedät, ei sen mukaan, mihin päästät irti.

**Muistiinpanon päälle, jonka rivi jo nimeää** — muistiinpanon oma nimi, tai erotin, jonka kansiolla on kansiomuistiinpano — se, mitä pudotit, lisätään sen loppuun tyhjän rivin jälkeen. Se kysyy ensin, koska tämä kirjoittaa tiedostoon, joka on jo olemassa, ja veto on ele, jonka epävarma käsi voi tehdä vahingossa. Teksti editorista, tiedosto työpöydältä ja tämän holvin ulkopuolelta vedetty muistiinpano kaikki toimivat; tiedosto luetaan tekstinä, ja binääritiedosto hylätään sen sijaan, että se liitettäisiin sisään ruudullisena hölynpölyä.

**Paikan päälle — holvin nimen tai kansion päälle** — mitään ei vielä kirjoiteta, koska mitään ei ole nimetty. Kenttä avautuu siellä pitäen sisällään sen, minkä pudotit, ja kirjoittamasi nimi vahvistaa sen: uusi muistiinpano *luodaan* pitämään sisällään tekstin, ja olemassa olevalta kysytään täsmälleen samoin kuin edellä. <kbd>Esc</kbd>, tai napsautus muualle, päästää koko asiasta irti.

**Rivi hehkuu sinisenä**, kun sisältönä laskeutuva veto on sen päällä, ja pysyy sinisenä, kun kenttä pitää sitä hallussaan — sama sininen, joka kertoo samaa asiaa: seuraava tapahtuma koskee tekstiä, jota kannat mukanasi. Omasta holvistasi kansion päälle vedetty tiedosto tarkoittaa edelleen *siirrä se sinne*, säilyttää Obsidianin oman korostuksen eikä koskaan hehku sinisenä; tämä ele oli olemassa ensin, ja sisältö väistyy sen tieltä.

## Kun polku on paneelia pidempi

Nimiä **lyhennetään sen sijaan, että ne puristettaisiin**, järjestyksessä sen mukaan, mitä todennäköisimmin tarvitset vähiten:

1. **Holvin nimi ensin**, aina kuvakkeeseen asti. Tiedät, missä holvissa olet; kuvake kertoo edelleen, mistä polku alkaa.
2. **Sitten tiedoston pääte**, jos se on käytössä — samat kolme merkkiä lähes jokaisessa holvin tiedostossa. Se lyhenee kokonaan tai ei ollenkaan sen sijaan, että sitä typistettäisiin: puolikas pääte ei kerro mitään, mitä puuttuva pääte ei kertoisi.
3. **Sitten kansiot, pisimmästä alkaen.** Pisin kansionimi lyhenee seuraavaksi pisimmän pituiseksi, sitten molemmat yhdessä, ja niin edelleen, kunkin pysähtyessä omaan lattiaansa — joten yksi hyvin pitkä kansio luopuu kaikesta ylimääräisestään muihin nähden ennen kuin sen vierellä oleva lyhyt nimi menettää yhtäkään kirjainta.
4. **Tiedoston oma nimi viimeisenä**, ja se säilyttää noin kuusi merkkiä. Sitä varten otsikkorivi on olemassa.

Tilaa luovutetaan **jatkuvasti**, pikselin murto-osina eikä kirjain kerrallaan: väistyvä nimi katkeaa pikselin tarkkuudella ja häipyy `…`-merkin alle, joten hitaasti kapenevaa paneelia vastaava rivi kaventuu tasaisesti, eikä mikään sen jälkeen liiku hyppäyksin. Ennen kuin yhtäkään kirjainta menetetään, kuluu erottimien ympärillä oleva tila — se on rivin ainoa välistys eikä maksa yhtään informaatiota — ja lyhennetty nimi päättyy siihen, mistä erotin alkaa, ilman tyhjää kaistaletta niiden väliin.

**Kenttä ottaa tilan, jonka se tarvitsee.** Kentän avaaminen polun kirjoittamista varten ei työnnä vieressä olevia kansioita pois tieltä: se on yhtä leveä kuin sen sisältämä teksti ja kasvaa kirjoittaessasi, joten jälki säilyttää kaiken, mitä kenttä ei tarvitse. Vasta kun tila ei riitä molemmille, rivi vierii, ja silloin kenttä on ainoa asia, joka ei koskaan väisty — se on muokattavaa tekstiä, ei sovitettava nimi.

Mitään ei katkaista pidemmälle kuin mikä erottaa sen naapureistaan: `Projects2025` ja `Projects2026` samassa kansiossa lyhenevät muotoon `…025` ja `…026` sen sijaan, että ne lyhenisivät yhteiseksi alkuosaksi, joka tekisi niistä saman sanan, kun taas `Reports` voi `Receipts`-nimen vieressä lyhentyä muotoon `Rep…`. Tämän lisäksi jokainen nimi säilyttää **luettavan leveyden** — noin neljän kirjaimen verran kansiolle ja kuuden tiedostonimelle, mitattuna sillä fontilla, jolla rivi todella piirretään, eikä laskettuna merkkeinä. Neljä kapeaa kirjainta ja neljä leveää kirjainta eivät ole sama määrä nimeä, joten `lilliliillil` saa säilyttää itsestään enemmän kuin `WWMMWWMMWWMM`, ja ruudulle jäävä osa on kummassakin tapauksessa saman kokoinen. Lyhyet nimet jätetään kokonaan rauhaan — nimeksi `A…` typistetty nimi on yksilöllinen mutta silti lukukelvoton. **Välilyönnit eivät lasketa mukaan.** Kuusi merkkiä, jotka kertovat, mikä tiedosto on kyseessä, ovat kuusi lukemisen arvoista merkkiä, joten niiden väliset tyhjät kohdat kulkevat mukana ilmaiseksi, eikä yksikään jää koskaan `…`-merkin viereen, missä se olisi joka tapauksessa näkymätön.

**Nimi katkaistaan siitä, missä sen naapurit ovat sen kanssa samaa mieltä, ja keskeltä, jos ne eivät ole samaa mieltä missään kohdassa.** Kaksi kansiota nimeltä `aaaa-common-one` ja `aaaa-common-two` jakavat kaiken paitsi kolme viimeistä merkkiään, joten hännän katkaiseminen säilyttää sen puolikkaan, joka ei kerro mitään: ne lyhenevät sen sijaan muotoon `…one` ja `…two`, mikä on lyhyempi *ja* erottaa ne toisistaan. Kun yhteneväisyys on lopussa — `alpha-draft` ja `beta-draft` vierekkäin — loppu on se, joka lähtee; kun se on molemmissa päissä, jäljelle jää keskiosa. Nimi, jolla ei ole läheisiä naapureita, menettää keskiosansa, koska nimi alkaa sillä, mikä se on, ja päättyy siihen, mikä juuri se on — tiedostolle sen pääte: `annual…2026.md`.

Lyhyt yhteinen pätkä ei lasketa. `parallel structures` sattuu päättymään samoihin kahteen kirjaimeen kuin sen vieressä oleva `Schemes`, eikä se ole syy pitää kumpaakaan kokonaisena — kolme merkkiä alusta erottaa ne jo toisistaan.

Mikään ei rivity toiselle riville. Kun edes lyhimmät rehelliset nimet eivät mahdu, rivi **vierii sivusuunnassa**, pysähtyneenä siihen päähän, missä tiedosto on — siinä vaiheessa mitään ei ole enää tiivistettävissä, ja pidemmälle katkaiseminen piilottaisi eikä lyhentäisi. Rulla vierittää sitä riippumatta siitä, missä kohtaa riviä osoitin on, ja molempiin päihin pääsee: vieriessään rivi kohdistuu alkuunsa riippumatta kohdistusasetuksesta, koska laatikkoonsa mahtumaton, keskitetty sisältö valuu yli sekä vasemmalta että oikealta — eikä siihen puolikkaaseen pääse vierittämällä lainkaan.

**Osoita lyhennettyä nimeä, ja se palautuu kokonaisena**, niin kauan kuin osoitat sitä, vieritettynä vasempaan reunaan, jotta koko palautunut osa on näkyvissä. **Napsauta yhtä, ja se jää**: kenttä avautuu näyttäen napsauttamasi kansion, sen jälkeen tarjottavan sisällön ja mitä tahansa kirjoitat, ja se jatkaa niiden näyttämistä osoittimen siirryttyä pois. Nimet pysyvät paikallaan, kun vierität riviä tai kirjoitat kenttään — jos yksi aukeaisi kesken eleen, joka on tarkoitettu rivin lukemiseen, se siirtäisi kaiken sen jälkeen tulevan pois altasi.

**Aloittava osa kantaa aina työkaluvihjeen, ja se on absoluuttinen polku** — `/home/sina/Vaults/Notes`, tai mistä tahansa rivi alkaa. Se on ainoa asia rivistä, jota mikään ruudulla ei muuten kerro: nimi kertoo, *mikä* holvi on kyseessä, ei koskaan missä se sijaitsee. Se on paikallaan riippumatta siitä, jouduttiinko mitään lyhentämään.

Kun **Näytä holvin nimi** on pois päältä, nimeä ei poisteta, vaan se pidetään vain tyhjänä — joten kuvaketta osoittaminen palauttaa sen täsmälleen samalla tavalla kuin osoittaminen nimeä, jota rivi joutui lyhentämään.

**Näytä tiedostopäätteet** palauttaa päätteen rivin tiedostonimeen. Pois päältä — oletuksena — rivi nimeää muistiinpanon samalla tavalla kuin Obsidian sen otsikoi, ilman `.md`-päätettä, joka on lähes jokaisella holvin tiedostolla; päällä se nimeää sen samalla tavalla kuin tiedostojärjestelmä, mikä on hyödyllistä, kun holvi sisältää muutakin kuin muistiinpanoja. Se on myös toinen asia, josta rivi luopuu tilan loppuessa, heti holvin nimen jälkeen.
Työkaluvihje antaa lopun: ei pelkkää nimeä vaan kaiken, mitä rivi näyttää sen alla, muodossa `…/nimi/kansio/muistiinpano.md`, joten yksi hover vastaa sekä kysymykseen "mikä tämä on" että "mitä tämän alla on". Holvin kuvake nimeää holvinsa samalla tavalla, kun nimi on pois päältä tai on puristunut pois näkyvistä.

## Varoitusvärit

| | Milloin | Mitä se tarkoittaa |
| --- | --- | --- |
| **Punainen** rengas polkurivillä | Rivi osoittaa holvisi ulkopuolelle | Obsidian ei voi avata siellä olevaa muistiinpanona, eikä mitään siellä kirjoiteta, ennen kuin avaat riippulukon. |
| **Oranssi** rengas polkurivillä | Tiedosto on tekstityyppiä, jolle Obsidianilla ei ole näkymää | Varotoimi. Obsidian antaisi sen työpöytäsi oletussovellukselle; liitännäinen näyttää sen sen sijaan. |
| **Punainen** teksti avoimessa kentässä | Kyseisessä polussa ei ole vielä mitään | <kbd>Enter</kbd> luo sen sen sijaan, että avaisi sen. Kyse ei niinkään ole varoituksesta kuin toteamuksesta siitä, mitä seuraava näppäinpainallus tekee — katso [Polun kirjoittaminen](#polun-kirjoittaminen). |
| **Punainen** riippulukko nimeämisvalitsimen tilalla | Rivi osoittaa holvisi ulkopuolelle, ja kirjoittaminen sinne on yhä lukittu | Sama punainen kuin renkaassa, samasta syystä: se merkitsee kieltäytymistä. Sen painaminen sallii kirjoittamisen tänne ja palauttaa paikan valitsimelle — katso [Kirjoittaminen holvin ulkopuolelle](#kirjoittaminen-holvin-ulkopuolelle). |

**Molemmat renkaat ovat toisistaan riippumattomia, ja molemmat voivat olla voimassa yhtä aikaa** — ulkoinen `.json`-tiedosto on sekä holvisi ulkopuolella *että* tyyppiä, jolle Obsidianilla ei ole editoria. Katselimessa ne näkyvät erillisinä riveinä, kumpikin toteaa vain oman asiansa. Polkurivillä punainen voittaa, kun molemmat pätevät, koska kaksi rengasta olisi vain melua. Punainen *teksti* on kokonaan kolmas asia: se koskee sitä, mitä kirjoitetaan, ei sitä, mihin rivi osoittaa, joten se voi ilmestyä kummankin renkaan sisällä tai kumpaankaan.

Oranssi taso on tarkoituksella suppea. Rekisteröidyt tyypit (Markdown, canvas, kuvat, PDF, ääni, video) käsitellään asianmukaisesti eivätkä saa mitään. Binääritiedostotkaan eivät saa mitään — et vahingossa muokkaa `.zip`-tiedostoa sekamelskaksi. Jäljelle jää täsmälleen se vaaratilanne: `.json`, `.css` tai `.log`, jonka **Näytä kaikki tiedostotyypit** on tehnyt näkyväksi. Luettelo on tarkoituksella laajempi: siellä kaikki, mikä ei ole muistiinpano, on oranssia — katso [miten luettelon rivit värjätään](#miten-luettelon-rivit-värjätään).

## Nimeämis-/siirtotila

Kynäpainike otsikkorivin oikeassa laidassa — näkymätilapainikkeen vieressä, samankokoinen kuin natiivit painikkeet — kytkee nimeämis-/siirtotilan päälle ja pois. Holvin ulkopuolella sen paikalla on punainen riippulukko, kunnes painat sitä; katso [Kirjoittaminen holvin ulkopuolelle](#kirjoittaminen-holvin-ulkopuolelle). Otsikkorivi kehystetään tällöin korostusvärillä, aivan kuten nimeäminen tiedostonhallinnassa. Samat napsautukset ja näppäinpainallukset vahvistavat nyt siirron tai uudelleennimeämisen Obsidianin `fileManager.renameFile`-toiminnon kautta, joten kaikki muistiinpanoon osoittavat linkit seuraavat mukana.

Nimeämisen aikana:

- Nykyinen tiedostonimi on kiinnitetty jokaisen kansion luetteloon, joten muistiinpanon siirtäminen ilman sen uudelleennimeämistä on yhden napsautuksen takana.
- Kohdekansiossa jo varatut nimet ovat **punaisia** — kansio, jossa on jo tämä nimi, ja tämän niminen tiedosto — joten yhteentörmäys näkyy ennen kuin valitset. Ne voi silti valita: katso alta.
- Syöte validoidaan reaaliaikaisesti Obsidianin omien uudelleennimeämissääntöjen mukaan — samat merkistöt, samat viestit, sama punainen työkaluvihje kuin uudelleennimettäessä tiedostopuussa — joten laiton nimi merkitään kirjoittaessasi eikä sitä voi vahvistaa.
- Napsautus otsikkorivin ulkopuolelle, tai otsikkorivin kohdistuksen menettäminen, päättää nimeämistilan.

### Nimi, joka on varattu

Siirtäminen tai uudelleennimeäminen jo olemassa olevaan nimeen **kysyy sen sijaan, että kieltäytyisi.** Valintaikkuna avautuu kahdella muokattavalla polulla: minne tiedostosi menee, ja minne tiellä oleva tiedosto menee — punaisena niin kauan kuin se on varattu. Kumpikin polku piirretään myös samalla tavalla kuin polkurivi piirtää polun, erottuvat osat väritettyinä ja lyhennettyinä viimeisenä, joten pitkäkin polku näyttää edelleen, mikä muuttuu.

Molemmilla kentillä on luettelo. Jälkimmäinen sisältää tavalliset ratkaisut:

- **Vaihda paikkaa** — se menee tiedostosi vanhaan kansioon, omalla nimellään.
- **Vaihda nimet** — se pysyy paikallaan ja saa tiedostosi vanhan nimen.
- **Vaihda molemmat** — se saa tiedostosi vanhan polun.
- `-1`, `-bak` ja `-old` oman nimensä perään.
- Tiedostojen kaksi nimeä.

Ensimmäinen luettelo tarjoaa paikan, johon tiedostosi oli menossa, **Pysy paikallaan** -vaihtoehdon, sen oman nimen kohdekansiossa sekä `-1`-, `-bak`- ja `-old`-vaihtoehdot sen vieressä. Ratkaisu, jonka polku on varattu, on harmaana eikä sitä voi valita. Vaihtoehdon valitseminen **vain täyttää kentän** — voit silti muokata sitä — ja **Käytä** siirtää molemmat, linkkeineen kaikkineen; **Peruuta** ei siirrä mitään. Varatun nimen valitseminen luettelosta kysyy samaa, samoin kuin muistiinpanon pudottaminen kansioon, jossa on jo sen niminen tiedosto.

## Yksi näppäin molempiin nimeämisiin

Nimeämiskomento (oletuksena <kbd>F2</kbd>, tai mikä ikinä olet sitonut sen tilalle) **vuorottelee** Obsidianin inline-otsikon nimeämisen ja tämän lisäosan otsikon polkupalkin välillä. Jos olet ottanut Obsidianin inline-otsikon pois käytöstä, otsikon polkupalkista tulee ainoa kohde, joten näppäin ei koskaan jää tekemättä mitään.

Polkupalkissa se avaa **nimen ilman tiedostopäätettä** — muokkauksen, joka nimeäminen lähes aina on, ja saman asian, jonka nimen napsauttaminen valitsee. Paina uudelleen, ja se tekee mitä <kbd>Tab</kbd> siinä tekisi: nimessä se on seuraava askelma —
nimi tiedostopäätteineen, polku holvikansiostasi, polku järjestelmän
juuresta; jos jotain on kirjoitettu, se täydentää sen, kuten <kbd>Tab</kbd> tekee.

**Kierto sulkeutuu otsikkoon.** Viisi painallusta vie sen ympäri — inline-
otsikko, nimi, nimi tiedostopäätteineen, polku holvistasi, polku
järjestelmän juuresta — ja kuudes on taas inline-otsikko. Tämä painallus on ainoa, joka eroaa
<kbd>Tab</kbd>-näppäimestä, joka sen sijaan kiertää takaisin polun alkuun — ja seitsemäs
menee sinne, minne <kbd>Tab</kbd>:in kierto menee: holvin juureen, koko polku
kentässä ja sen ensimmäinen kansio merkittynä. Joten jokainen askelma, jonka <kbd>Tab</kbd> saavuttaa, näppäin
saavuttaa myös.

**Kohdista polkupalkkiin** -komento tekee saman kentän sisällä — mitä ikinä
<kbd>Tab</kbd> tekisi — ja siinä kohdassa, missä <kbd>Tab</kbd> kiertäisi ympäri, se antaa kohdistuksen takaisin
muistiinpanolle. Sen seuraava painallus on kierto: holvin juuri, ensimmäinen kansio merkittynä.

**Kentässä, joka on jo auki**, näppäin muuttaa sen nimeämiseksi siinä kohdassa, missä se
on — säilyttäen tekstin, kohdistimen ja valinnan — ja **Kohdista polkupalkkiin**
poistaa nimeämisen siitä samalla tavalla. **Mikä tahansa muu** painallusten välissä painettu tai
napsautettu käynnistää kumman tahansa kierron alusta, joten painallus sen jälkeen kun olet
muokannut, ei koskaan osu edellisestä jääneeseen askelmaan.

Holvin ulkopuolella näppäin toimii myös — siellä ei ole inline-otsikkoa, joten
ensimmäinen painallus menee suoraan polkupalkkiin.

Tämä toimii kietomalla komennon `workspace:edit-file-title` sen sijaan että kaappaisi näppäimen, joten sekä pikanäppäimen uudelleensitominen että komennon suorittaminen paletista toimivat ennallaan.

## Miten luettelon rivit värjätään

| Väri | Tarkoittaa |
| --- | --- |
| **Violetti** | Muistiinpano (`.md`, `.markdown`) — se, minkä Obsidian avaa muistiinpanona, poimittuna sekasisältöisestä kansiosta |
| **Oranssi** | Ei muistiinpano — mikä tahansa, mitä Obsidian ei avaa sellaisena, PDF:stä `.txt`-tiedostoon, ja niiden mukana `:page`-rivit. Sekasisältöisestä kansiosta luetaan sen muistiinpanot, ja yksi väri kaikelle muulle kertoo sen nopeammin kuin varoitus muutamassa niistä; katso [varoitusvärit](#varoitusvärit) |
| **Vaimennettu** | Holvin ulkopuolella, joten holvin oma käsittely ei päde |
| **Sininen**, lihavoitu | Siellä, missä jo olet: tämän palkin oma muistiinpano ja kansio, jolla polkupalkki seisoo. Nimeämis-/siirtotilassa *säilytä tämä nimi* -rivi seisoo muistiinpanon paikalla — sama muistiinpano kummassakin tapauksessa |
| **Punainen** | Vain nimeämis-/siirtotilassa: nimi on jo käytössä. Silti valittavissa — jonkin valitseminen kysyy, mitä tehdä tielle osuvalle tiedostolle; katso [Nimi, joka on jo käytössä](#nimi-joka-on-varattu) |

**Kansiot on lihavoitu**, joten kansion oma muistiinpano ei tarvitse omaa
väriä erottuakseen kansiostaan: se on violetti kuten mikä tahansa muu muistiinpano. **Rivin reunassa oleva viiva**
merkitsee nimet, jotka alkavat sillä, mitä kirjoitit — sinisellä siellä, missä
ne täsmäävät pidemmälle, vihreällä haaralla, jonka ehdotus ottaa; katso
[Polun kirjoittaminen](#polun-kirjoittaminen).

Kenttä käyttää samoja värejä sille, mitä se nimeää — katso [Polun kirjoittaminen](#polun-kirjoittaminen).

## Näkyvyyssäännöt

- Tiedostot, joilla on tuntemattomia tiedostopäätteitä, näkyvät luetteloissa vain, jos Obsidianin **Detect all file extensions** -asetus on päällä — **holvin sisällä**. Sen ulkopuolella asetus ei päde: se säätelee, mitä holvi indeksoi, eikä mikään siellä ulkona ole holvissa, joten muistiinpanojesi vierellä oleva `.txt` on listattuna joka tapauksessa.
- Luettelo näyttää enintään 1 000 riviä, kymmenkertaisesti Obsidianin oman rajan verran. Kun kansiossa on enemmän, viimeinen rivi kertoo, kuinka monta jätettiin pois; jatka kirjoittamista kaventaaksesi listaa.
- Piste-tiedostot ja -kansiot näkyvät vain, jos tämän lisäosan **Näytä piilotiedostot** -asetus on päällä.
- **Ylikirjoitussuoja toimii samalla tavalla näkyvyydestä riippumatta** — piilotettu tiedosto estää silti sen ylikirjoittamisen.

## Muistilista

Polku, joka on **kääritty lainausmerkkeihin**, puretaan automaattisesti. Windowsin *Copy as path* antaa
muodon `"C:\Users\sinä\muistiinpano.md"`, lainausmerkit mukaan lukien, ja komentotulkki tekee saman minkä tahansa
polun kanssa, jossa on välilyönti; kummankin liittäminen tai kirjoittaminen toimii. Vain
kaksoislainausmerkki, ja vain vastinparina koko asian ympärillä — se ei voi
esiintyä oikeassa nimessä, missä heittomerkki hyvin voi.

| Haluat… | Tee tämä |
| --- | --- |
| Avata kansion (sen muistiinpanon, tai näyttää sen) | Napsauta erotinta **kyseisen kansion jälkeen** |
| Antaa kansiolle kansiomuistiinpanon, jota sillä ei ole | **Kaksoisnapsauta** samaa erotinta (vaatii kansiomuistiinpano-lisäosan) |
| Vaihtaa kansion sisarukseen | Napsauta kyseisen kansion nimeä, kirjoita tai valitse sitten |
| Nimetä muistiinpano uudelleen tai vaihtaa sen kohteen | Napsauta muistiinpanon nimeä — tiedostopääte mukaan lukien |
| Selata kansion sisältöä | Napsauta kyseisen kansion nimeä; luettelo listaa sen vanhempikansion, joten napsauta kansiota **halutun alapuolella** |
| Kirjoittaa kansio ja kaikki sen alla oleva uudelleen | **Kaksoisnapsauta** kyseisen kansion nimeä, kirjoita sitten |
| Muokata polkua kansiosta alaspäin | Napsauta kyseisen kansion nimeä, sitten <kbd>→</kbd> poistaaksesi valinnan |
| Hypätä tiedostoon kirjoittamalla sen polku | Napsauta tiedostonimeä tai tyhjää tilaa, kirjoita, <kbd>Enter</kbd> |
| Avata tiedosto sen sijaan uuteen välilehteen | <kbd>Ctrl</kbd> valitessasi sitä, tai <kbd>Ctrl</kbd>+<kbd>Enter</kbd> |
| Kopioida muistiinpano jonnekin sen siirtämisen sijaan | Kynä, sitten <kbd>Ctrl</kbd> kohdetta valitessa tai vahvistaessa |
| Luoda muistiinpano polkuun, jota ei ole olemassa | Kirjoita polku — kenttä muuttuu **punaiseksi** heti kun mikään luettelossa ei enää täsmää siihen — sitten <kbd>Enter</kbd>. Holvin sisällä se luodaan heti; sen ulkopuolella kysytään ensin |
| Selvittää, onko kirjoittamasi polku jo olemassa | Katso väriä: se saa sen rivin värin, jota se nimeää, ja punainen tarkoittaa, että <kbd>Enter</kbd> loisi sen |
| Laskeutua yhden tason kirjoittaessa | Kirjoita `/` |
| Nousta yhden tason takaisin ylös kirjoittaessa | <kbd>Backspace</kbd> tyhjässä syötteessä |
| Tuoda kenttää edeltävät kansiot siihen | <kbd>←</kbd> sen alussa yhtä varten; <kbd>Shift</kbd>+<kbd>Home</kbd>, tai <kbd>Home</kbd> luettelon ollessa suljettuna, kaikkia varten |
| Siirtää tai nimetä avoin muistiinpano uudelleen | Napsauta kynää, selaa tai kirjoita sitten kuten yllä |
| Siirtää nimeen, joka on jo käytössä | Vahvista se silti: valintaikkuna antaa vaihtaa paikkoja, nimiä tai molempia, tai antaa tielle osuvalle tiedostolle toisen nimen |
| Siirtää nimeämättä uudelleen | Kynä → napsauta kohdekansioon → valitse kiinnitetty nykyinen tiedostonimi |
| Nimetä paikallaan uudelleen | <kbd>F2</kbd> kaksi kertaa (ensimmäinen painallus menee inline-otsikkoon, toinen otsikkoon) |
| Hypätä toiseen holviin, kotiin tai asemaan | Napsauta holvin nimeä |
| Avata tiedosto holvin ulkopuolelta | Holvin nimi → valitse sijainti → selaa → valitse tiedosto (vain luku -tilassa, kunnes *Muokkaa tekstinä*) |
| Täydentää kirjoitettavaa nimeä | <kbd>Tab</kbd>, tai <kbd>End</kbd> tarjotulle; <kbd>→</kbd> ottaa siitä yhden kirjaimen |
| Astua siihen sisään, kun yksi nimi on jäljellä | <kbd>Tab</kbd> uudelleen |
| Perua askel, tai poistua kansiosta | <kbd>Shift</kbd>+<kbd>Tab</kbd> |
| Ottaa koko polku, tai järjestelmäpolku | <kbd>Tab</kbd> lopun ohi, tai napsauta neljä kertaa |
| Kopioida nimi, polku tai järjestelmäpolku | Napsauta sitä hiiren oikealla kahdesti; tyhjää tilaa kolmesti järjestelmäpolkua varten |
| Päästä käsiksi siihen, mitä holvinhallinta tarjoaa tälle holville | Napsauta hiiren oikealla kuvaketta rivin alussa |
| Kopioida holvin tunniste | Napsauta hiiren oikealla kuvaketta rivin alussa |
| Avata toinen holvi, jota selasit | Napsauta hiiren oikealla sen nimeä rivin alussa |
| Nähdä tiedoston tiedostopääte rivillä | Ota käyttöön **Näytä tiedostopäätteet** asetuksista |
| Avata kansio-osa uuteen välilehteen | <kbd>Ctrl</kbd> tai keskinapsauta sitä, tai vedä se välilehtipalkkiin |
| Päästä polkupalkkiin näppäimistöltä | Sido *Kohdista polkupalkkiin* Pikanäppäimissä |
| Avata verkko-osoite tai `obsidian://`-linkki | Kirjoita se palkkiin ja paina <kbd>Enter</kbd> |
| Peruuttaa mitä tahansa | <kbd>Esc</kbd>, tai napsauta otsikkopalkin ulkopuolelle |
| Kokeilla rivejä ennen vahvistamista | Nuolinäppäimillä tai hiirellä luettelon läpi; <kbd>↑</kbd> yläreunan ohi antaa tekstisi takaisin |
| Siirtää muistiinpano sen yläpuolella olevaan kansioon | Vedä se rivillä olevan kansion päälle |
| Säilyttää tekstinpätkä uutena muistiinpanona | Vedä teksti kansion päälle, kirjoita nimi, <kbd>Enter</kbd> |
| Lisätä tekstinpätkä lukemaasi muistiinpanoon | Vedä se muistiinpanon nimen päälle, vahvista |
| Nähdä lyhennetty kansion nimi kokonaan | Vie hiiri sen päälle, tai levennä paneelia |
| Selvittää, missä holvi itse sijaitsee | Vie hiiri kuvakkeen päälle rivin alussa |
| Viedä muistiinpano pois holvista | Kynä → selaa ulkopuolelle → vahvista valintaikkuna (linkit rikkoutuvat) |
| Sallia kirjoittaminen holvin ulkopuolelle | Napsauta **punaista riippulukkoa** otsikossa; nimeämisvalitsin ottaa sen paikan |
| Lukita se uudelleen | Napsauta valitsinta, kunnes riippulukko on taas paikallaan — yksi painallus sisään, yksi ulos |
| Poistaa tiedosto holvin ulkopuolelta | Avaa riippulukko, napsauta sitten hiiren oikealla tiedostoa: *Delete* siirtää sen järjestelmäsi roskakoriin |

## Asetukset

| Asetus | Vaihtoehdot | Oletus | Mitä se tekee |
| --- | --- | --- | --- |
| **Language** | Obsidianin oletus, tai jokin 46:sta | Obsidianin oletus | Millä kielellä tämän lisäosan oma teksti on. *Obsidianin oletus* seuraa Ulkoasu-asetuksissa määritettyä kieltä, mitä lähes kaikki haluavat. Rivi itse — sen nimi, kuvaus ja *Obsidianin oletus* — pysyy englanniksi riippumatta valinnasta, koska se on tie takaisin ulos kielestä, jota et osaa lukea. Kreikka ja sanskrit on käännetty tähän eivätkä ne ole Obsidianin omassa listassa, joten tämä asetus on ainoa tapa saavuttaa ne. |
| **Alignment** | Left / Center / Right | Left | Missä kohtaa polku istuu otsikkorivillä. *Center* vastaa Obsidianin klassista ulkoasua. |
| **Delimiter** | Mikä tahansa merkki | `/` | Osien väliin piirretty erotin. Kuusi yhdellä napsautuksella valittavaa esiasetusta (`/ > ▸ › \ •`) ovat tekstikentän edessä. |
| **Show vault name** | Päällä / Pois | Päällä | Onko holvi itse ensimmäinen polun osa. Pois päältä kytkettynä kyseisestä osasta tulee 🏠-kuvake sen katoamisen sijaan, joten polku alkaa silti jostain napsautettavasta. |
| **Folder name opens the dropdown** | Päällä / Pois | Päällä | Vaihtaa, mitä kansion nimi ja sen jälkeinen erotin tekevät — katso [taulukko yllä](#polku). [Folder notes](obsidian://show-plugin?id=folder-notes) -lisäosan kanssa erotin avaa kansiomuistiinpanot. Ei koskaan päde nimeämis-/siirtotilassa. |
| **Show dot files** | Päällä / Pois | Pois | Näytetäänkö piste-tiedostot ja -kansiot luetteloissa. Ylikirjoitussuoja pätee joka tapauksessa. |
| **Show all file types** | — | — | Ei tämän lisäosan asetus vaan Obsidianin, mainittu tässä koska se vastaa samaan kysymykseen: holvisi indeksoi vain tiedostotyypit, joita sille on käsketty indeksoida, ja vain se, mitä se indeksoi, voidaan listata. Etsi se Obsidianin asetuksista ja ota se käyttöön nähdäksesi kaikki tiedostot; rivin vieressä oleva painike avaa kyseisen sivun asetuksen kohdalle vieritettynä ja välähtäneenä, aivan kuten sen napsauttaminen asetusten omassa haussa tekisi. Holvin ulkopuolella se ei päde, koska mikään siellä ei ole indeksoitu joka tapauksessa. |
| **Show file extensions** | Päällä / Pois | Pois | Onko tiedoston nimessä rivillä mukana sen tiedostopääte. Pois päältä se jätetään pois — kuten Obsidian jättää sen pois muistiinpanon otsikosta. Päällä rivi nimeää tiedoston samoin kuin tiedostojärjestelmä. Kummassakin tapauksessa tiedostopääte on toinen asia, joka jätetään pois, kun rivin tila loppuu, heti holvin nimen jälkeen. |
| **Access external files** | Päällä / Pois | **Pois** | Avaako holvin nimi sijaintien luettelon. Pois päältä ollessaan mikään lisäosassa ei koskaan katso tämän holvin ulkopuolelle. |
| **Hotkeys** | painike | — | Avaa Obsidianin *Pikanäppäimet* suodatettuna tähän lisäosaan, jossa *Kohdista polkupalkkiin* -toiminnolle voidaan antaa näppäin. |

## Kuvakkeiden vaihtaminen

Lure piirtää kolme kuvaketta: holvin juuren kuvakkeen (kun **Show vault name** on pois päältä), nimeämis-/siirtovalitsimen ja riippulukon, joka on sen paikalla, kun kirjoittaminen holvin ulkopuolelle on lukittu. Kaikki voidaan vaihtaa teemasta tai CSS-katkelmasta — aseta korvaava merkki ja piilota mukana tuleva yhdellä säännöllä:

```css
.lure-vault-icon {
	--lure-icon-glyph: "🏠";
	--lure-icon-svg: none;
}

.lure-rename-btn {
	--lure-icon-glyph: "✎";
	--lure-icon-svg: none;
}

/* Näytetään aina vain suljettuna: sen avaaminen antaa paikan nimeämisvalitsimelle. */
.lure-unlock-btn {
	--lure-icon-glyph: "🔒";
	--lure-icon-svg: none;
}
```

`--lure-icon-glyph` hyväksyy kaiken, mikä kelpaa CSS:n `content`-arvoksi, joten `url(...)` toimii kuvalle yhtä hyvin kuin teksti- tai emojimerkille. Jätä `--lure-icon-svg` rauhaan säilyttääksesi Lucide-kuvakkeen ja piirtääksesi oman merkkisi sen viereen.
