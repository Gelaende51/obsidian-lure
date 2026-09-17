<!-- Käännös tiedostosta CHANGELOG.md — tilanne: commit 973105b.
     Konekäännös (Claude Opus 5), jota äidinkieliset puhujat eivät ole
     tarkastaneet. Korjaukset ovat tervetulleita; englanninkielinen
     CHANGELOG on ratkaiseva versio. -->

[English](../../CHANGELOG.md) · [العربية](CHANGELOG.ar.md) · [አማርኛ](CHANGELOG.am.md) · [Беларуская](CHANGELOG.be.md) · [বাংলা](CHANGELOG.bn.md) · [Català](CHANGELOG.ca.md) · [Čeština](CHANGELOG.cs.md) · [Dansk](CHANGELOG.da.md) · [Deutsch](CHANGELOG.de.md) · [Ελληνικά](CHANGELOG.el.md) · [Español](CHANGELOG.es.md) · [فارسی](CHANGELOG.fa.md) · **Suomi** · [Français](CHANGELOG.fr.md) · [Gaeilge](CHANGELOG.ga.md) · [עברית](CHANGELOG.he.md) · [Magyar](CHANGELOG.hu.md) · [Bahasa Indonesia](CHANGELOG.id.md) · [Italiano](CHANGELOG.it.md) · [日本語](CHANGELOG.ja.md) · [ქართული](CHANGELOG.ka.md) · [ភាសាខ្មែរ](CHANGELOG.kh.md) · [한국어](CHANGELOG.ko.md) · [Latviešu](CHANGELOG.lv.md) · [Bahasa Melayu](CHANGELOG.ms.md) · [नेपाली](CHANGELOG.ne.md) · [Nederlands](CHANGELOG.nl.md) · [Norsk](CHANGELOG.no.md) · [Polski](CHANGELOG.pl.md) · [Português](CHANGELOG.pt.md) · [Português (Brasil)](CHANGELOG.pt-BR.md) · [Română](CHANGELOG.ro.md) · [Русский](CHANGELOG.ru.md) · [संस्कृतम्](CHANGELOG.sa.md) · [Slovenčina](CHANGELOG.sk.md) · [Shqip](CHANGELOG.sq.md) · [Српски](CHANGELOG.sr.md) · [Svenska](CHANGELOG.sv.md) · [ไทย](CHANGELOG.th.md) · [Türkçe](CHANGELOG.tr.md) · [Українська](CHANGELOG.uk.md) · [Oʻzbekcha](CHANGELOG.uz.md) · [Tiếng Việt](CHANGELOG.vi.md) · [简体中文](CHANGELOG.zh.md) · [繁體中文](CHANGELOG.zh-TW.md)

# Muutosloki

Kaikki Luren julkaisut, uusin ensin. Se, mikä on valmistunut viimeisimmän julkaisun jälkeen, on kohdassa *Julkaisematon*. Versionumeroissa ei ole `v`-etuliitettä, samoin kuin julkaisutunnisteissa.

## 1.3.0 — 2026-09-17[^1.3.0]

### Lisätty

- **Tuo tiedosto holviin ulkopuolelta.** Siirrä tai kopioi tiedosto mistä tahansa levyltä polkuun holvisi sisällä; se saapuu oikeana muistiinpanona, ja siirto poistaa alkuperäisen vasta, kun kopiointi on onnistunut.
- **Pudota tekstiä tai tiedosto riville kirjoittaaksesi sen muistiin.** Kansion päälle: uusi muistiinpano siihen kansioon, nimettynä sitä mukaa kuin kirjoitat. Muistiinpanon nimen päälle tai sellaisen kansion erottimen päälle, jolla on kansiomuistiinpano: lisätään kyseisen muistiinpanon loppuun vahvistuksen jälkeen.
- **Luo kansiomuistiinpano** painamalla toisen kerran sitä, mikä avaa kansion, kun kansiomuistiinpanolisäosa on käytössä eikä kansiolla ole vielä sellaista. Se sijoitetaan sinne, minne [Folder notes](https://github.com/LostPaul/obsidian-folder-notes) -lisäosan omat asetukset määräävät.
- **Vedä kansio polkupalkista välilehtipalkkiin** avataksesi sen siellä: sen kansiomuistiinpano, jos sellainen on, muuten välilehti, joka seisoo kyseisessä kansiossa.
- **Rulla kulkee luettelon läpi.** Nimen päällä ensimmäinen pyöräytys avaa sen nimen luettelon, ja jokainen seuraava siirtää korostusta rivin verran. Sivusuunnassa vierivä rivi pitää rullan vieritystä varten.
- **Siirry nuolella kentän alun ohi** tuodaksesi sitä edeltävän kansion mukaan: <kbd>←</kbd> yhden kansion verran, <kbd>Vaihto</kbd>+<kbd>Home</kbd> (tai <kbd>Home</kbd>, kun luettelo on suljettu) niiden kaikkien verran.
- **Kenttä saa nimeämänsä kohteen värin**, saman kuin kyseisellä rivillä on luettelossa, ja muuttuu punaiseksi heti kun mikään ei enää vastaa sitä — sillä hetkellä, jolloin <kbd>Enter</kbd> loisi jotain sen sijaan, että avaisi sen.
- **Kansiomuistiinpanot ovat harmaita luettelossa**, joten ne näyttäytyvät kansionsa omina eivätkä yhtenä muistiinpanona muiden joukossa.
- **Napsauta erotinta hiiren keskipainikkeella** avataksesi kyseisen kansion uuteen välilehteen: sen kansiomuistiinpano tai välilehti, joka seisoo siinä.

### Muutettu

- **Riippulukko ja nimeämiskytkin ovat yksi ja sama hallintaelementti.** Holvin ulkopuolella punainen, suljettu riippulukko ottaa kytkimen paikan; sen avaaminen luovuttaa paikan kytkimelle, ja nimeämistilasta poistuminen sulkee sen taas.
- **Nimeämisnäppäin kysyy myös riippulukolta.** Holvin ulkopuolella yksi painallus välähdyttää riippulukkoa; toinen painallus puolen sekunnin sisällä myöntää sen, minkä riippulukko myöntää, ja avaa nimeämistilan.
- **Nimeämisnäppäin kulkee täyden kierroksen** — sisäinen otsikko, nimi, nimi päätteineen, polku holvista, polku järjestelmän juuresta — ja seuraava painallus on jälleen sisäinen otsikko.
- **<kbd>Ctrl</kbd>-napsautus ja keskipainikkeen napsautus eivät ole enää sama asia.** Toinen avaa välilehden ja siirtyy siihen, toinen avaa sen taustalle.
- **Muistiinpanon nimen napsauttaminen hiiren oikealla avaa tiedoston oman valikon.**
- **Luettelo on niin korkea kuin ikkuna sallii**, Obsidianin kiinteän 300 pikselin sijaan.
- **Kansion napsauttaminen kentän ollessa auki säilyttää koko sen jälkeisen polun**, ja kentän sisällä olevaan kansioon napsauttaminen luettelee kyseisen kansion sisällön kokonaan.
- **Erotin avaa kansiomuistiinpanon millä tahansa syvyydellä**, kun Folder notes on käytössä, ja on alleviivattu kaikkialla, missä sellainen on. Aiemmin vain ylimmän tason kansiot toimivat. Muiden kansiomuistiinpanolisäosien kanssa erotin näyttää edelleen kansion.

### Korjattu

- **Avoin kenttä eli tiedostoaan pidempään.** Toiseen muistiinpanoon siirtyminen polkupalkin ollessa auki jätti rivin nimeämään vanhan tiedoston koko istunnon loppuajaksi.
- **Poista, Muuta nimeä ja Tee kopio evättiin holvin ulkopuolella** riippulukon ollessa auki, eikä niihin päässyt lainkaan kuvissa, PDF-tiedostoissa eikä sivuissa.
- **<kbd>Ctrl</kbd>+<kbd>Enter</kbd> ei tehnyt mitään luettelon ollessa auki** — ja juuri niin jokainen kenttä avautuu.
- **<kbd>Enter</kbd> luettelon ollessa auki mutta mitään korostamatta** ei tehnyt mitään; nyt se vahvistaa kirjoittamasi.
- **Riviä, joka vuoti yli jokaisen nimen ollessa jo lyhimmillään, ei voinut vierittää**, jolloin polun loppu jäi tavoittamattomiin.
- **Lisäosan poistaminen käytöstä jätti kuolleen painikkeen** jokaisen paikkaamansa muistiinpanon otsikkoriville.

## 1.2.0 — 2026-08-25[^1.2.0]

### Lisätty

- **Kieliasetus.** Lure seuraa oletuksena Obsidianin kieltä, ja sen voi asettaa mihin tahansa omista kielistään. Tämä on myös ainoa tapa päästä kreikan- ja sanskritinkielisiin käännöksiin, joita Obsidian itse ei tarjoa. Asetuksen oma nimi pysyy englanniksi, jotta se löytyy aina takaisin myös kieleltä, jota et osaa lukea.

## 1.1.2 — 2026-08-25[^1.1.2]

### Muutettu

- **Kevyempi tyylitiedosto.** Rivi ei enää käytä `:has()`-valitsimia eikä useimpia `!important`-sääntöjä. Se mukautuu vähemmällä työllä, ja lisäosatarkastuksen varoitukset vähenivät 56:sta 7:ään.

## 1.1.1 — 2026-08-22[^1.1.1]

### Korjattu

- **Lyhyt kansion nimi saattoi piirtyä niin, että siinä oli rako** — `atlas` muodossa `atl as` — koska sen lyhennetylle muodolle varattu tila oli nimeä itseään leveämpi.

## 1.1.0 — 2026-08-22[^1.1.0]

### Lisätty

- **Oikean painikkeen sanasto.** Yksi painallus avaa valikon; kaksi ja kolme painallusta kopioivat yhä enemmän — nimen, nimen päätteineen, polun. Rivin valikot vastaavat nyt Tiedostot-paneelin valikoita kohta kohdalta.
- **Valikot holvin ulkopuolella.** Luettelon rivit ja ulkoinen katselin tarjoavat avaamisen sekä kohdat *Kopioi polku* ja *Näytä järjestelmän tiedostonhallinnassa*; riippulukon ollessa auki myös *Uusi muistiinpano*, *Uusi kansio*, *Tee kopio*, *Muuta nimeä…* ja *Poista*. Poisto siirtää järjestelmän roskakoriin eikä ole koskaan lopullinen.
- **Avaa muualle.** <kbd>Ctrl</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Vaihto</kbd> ja keskipainikkeen napsautus muistiinpanon nimen tai kansion päällä avaavat sen uuteen välilehteen, jaettuun ruutuun tai ikkunaan. Molempia voi raahata, kuten niiden rivejä Tiedostot-paneelissa.
- **Vedä muistiinpanoja riville siirtääksesi ne.** Pudota muistiinpano, useita muistiinpanoja tai kansio kansio-osan tai holvin nimen päälle.
- **Komento: Kohdista polkupalkkiin**, koko polku valittuna — ei oletuspikanäppäintä, sido omasi.
- **Kirjoita URL** polkupalkkiin: `http(s)://` ja `obsidian://` avautuvat linkkeinä, `file://` ja prosenttikoodatut polut avaavat tiedoston.
- **<kbd>Sarkain</kbd>-täydennys** komentotulkin tapaan: jokainen painallus täydentää niin pitkälle kuin kansion nimet ovat yhtenevät ja pysähtyy siihen, missä ne eroavat. <kbd>Vaihto</kbd>+<kbd>Sarkain</kbd> kulkee takaisin. Kun täydennettävää ei ole jäljellä, <kbd>Sarkain</kbd> laajentaa sen sijaan valintaa: nimi, nimi päätteineen, polku holvista, polku järjestelmän juuresta.
- **Luettelo avautuu siihen kohtaan, jossa olet**, ja esikatselee kenttään sen, mitä osoitat; luettelosta poistuminen palauttaa tekstisi.
- **Siirrä muistiinpano pois holvista** vahvistuksen jälkeen, joka laskee katkeavat linkit. Se kopioidaan ulos ja siirretään sitten roskakoriin, joten sen voi palauttaa kuten minkä tahansa poistetun muistiinpanon.
- **Näytä tiedostopäätteet** -asetus, ja lainausmerkeissä olevat polut (sellaisina kuin Windowsin *Copy as path* (Kopioi polkuna) ne tuottaa) ymmärretään.
- **Asetukset näkyvät Obsidianin asetushaussa** Obsidianin versiosta 1.13 alkaen.

### Muutettu

- **Pitkät polut mahtuvat ruutuun.** Nimiä lyhennetään vähiten hyödyllisestä alkaen — holvin nimi, sitten pääte, sitten kansiot, muistiinpanon oma nimi viimeisenä — ei koskaan yli sen pisteen, jossa ne voi erottaa toisistaan. Vie osoitin lyhennetyn nimen päälle lukeaksesi sen kokonaan.
- **Muistiinpanon nimen napsauttaminen valitsee sen ilman tiedostopäätettä**, joten nimeäminen ei enää uhkaa muuttaa tiedostotyyppiä.
- **Nimeämisnäppäin avautuu nimeen ilman päätettä**, ja seuraavat painallukset laajentavat valintaa.
- **Kansion napsauttaminen pitää loput polusta näkyvissä**, myös holvin ulkopuolella.
- **Holviisi takaisin selaaminen avaa tiedostot muistiinpanoina**, linkkeineen ja takaisinlinkkeineen, ulkoisen katselimen sijaan.

### Korjattu

- **Valikkojen tekstit olivat englanniksi kaikilla kielillä**; ne tulevat nyt Obsidianin omista käännöksistä.
- **Nimeämisnäppäin päätyi umpikujaan Obsidianin nimeämisikkunaan**, kun muistiinpano oli vieritetty otsikkonsa ohi.
- **<kbd>Esc</kbd> vaati kaksi painallusta** kentän ja sen luettelon sulkemiseen.
- **<kbd>Ctrl</kbd>+<kbd>Enter</kbd> avasi linkin muokkaimessa** sen sijaan, että olisi vaikuttanut polkupalkkiin.
- **Holvin ulkopuolella nimeäminen hukkasi kirjoitetun nimen**, kun riippulukkoa painettiin.
- **<kbd>Sarkain</kbd> saattoi kiertää edistymättä** kansiossa, joka sijaitsee oman kansiomuistiinpanonsa vieressä.

## 1.0.4 — 2026-08-13[^1.0.4]

### Lisätty

- **Muistiinpano, jossa olet, on merkitty sinisellä** luettelossa, joten sen kansioon takaisin selaaminen näyttää, mistä aloitit.

## 1.0.3 — 2026-08-13[^1.0.3]

### Dokumentaatio

- README linkittää lisäosan sivun yhteisöhakemistossa, ja käännetyt README-tiedostot on päivitetty ajan tasalle.

## 1.0.2 — 2026-08-13[^1.0.2]

### Muutettu

- **Vaatii Obsidianin version 1.8.7 tai uudemman** (aiemmin 1.4.0). Kaksi ominaisuutta, joihin polkupalkki nojaa — tiedostojen kopiointi ja kentän alla oleva virheilmoitus — tarvitsevat sitä.
- **Julkaisulataukset sisältävät allekirjoitetun käännöstodisteen**, joten voit varmistaa komennolla `gh attestation verify`, että `main.js` on käännetty tästä tietovarastosta.

### Korjattu

- **Puuttuvan ulkoisen tiedoston avaaminen oletussovelluksessa epäonnistui hiljaisesti**; epäonnistumisesta ilmoitetaan nyt.

## 1.0.1 — 2026-08-13[^1.0.1]

### Korjattu

- **Nimeämistilassa muistiinpano oli ristiriidassa itsensä kanssa** — sen omaan kansioon takaisin selaaminen piilotti sen nimen luettelosta, ikään kuin se estäisi oman nimeämisensä.
- **Ensimmäinen kansion näyttäminen Obsidianin käynnistyksen jälkeen ei avannut mitään.**
- **Kansion valitseminen luettelosta saattoi päättää nimeämistilan** sen sijaan, että olisi laskeutunut siihen.
- **Ulkoiset muutokset saattoivat korvautua hiljaisesti** toisen kirjoittajan, kuten Syncin tai toisen ruudun, toimesta. Kirjoitukset ovat nyt atomisia.
- **Kohdistusreunuksen nollaus vuoti muihin näkymiin**; se koskee nyt vain Luren paikkaamia otsikkorivejä.

### Dokumentaatio

- README ja käyttöohje ovat saatavilla kaikilla 44 kielellä, joita lisäosa toimittaa.
- Ohje mainitsi Obsidianin asetuksen *Detect all file extensions*, jonka nimi on nyt *Tunnista kaikki tiedostopäätteet* (Show all file types).

## 1.0.0 — 2026-08-10[^1.0.0]

Ensimmäinen julkaisu. Korvaa muistiinpanon otsikkorivillä olevan tiedostonimen napsautettavalla ja muokattavalla polulla holvin läpi — osoiterivi muistiinpanoillesi, Dolphinin mallin mukaan.

### Lisätty

- **Napsauta kansiota** saadaksesi luettelon sen yläkansion sisällöstä, vaihtaaksesi sen sisarkansioon ja jättääksesi muun polun rauhaan.
- **Napsauta kansion jälkeistä erotinta** näyttääksesi ja avataksesi sen Tiedostot-paneelissa tai avataksesi sen kansiomuistiinpanon, kun Folder notes hoitaa sen.
- **Napsauta tiedostonimeä tai tyhjää tilaa** kirjoittaaksesi polun täydennyksen kanssa: `/` laskeutuu, <kbd>Askelpalautin</kbd> nousee ulos, <kbd>Enter</kbd> vahvistaa.
- **Siirto-/nimeämistila** vaihtaa samat toiminnot siirtämiseen ja nimeämiseen, tarkistettuna samoin kuin Obsidian tarkistaa.
- **<kbd>Ctrl</kbd> avaa uuteen välilehteen** — tai siirto-/nimeämistilassa kopioi muistiinpanon sinne sen sijaan.
- **<kbd>F2</kbd> vuorottelee** sisäisen otsikon ja polkupalkin välillä.
- **Holvin ulkopuolella** (oletuksena pois päältä): holvin nimi avaa muut holvisi, kotikansion, tiedostojärjestelmän juuren ja liitetyt asemat. Mitään siellä ei kirjoiteta, ennen kuin avaat lukituksen, ja muistiinpanon voi vain kopioida holvista ulos, ei koskaan siirtää.
- **45 kieltä.**

[^1.3.0]: Muutokset version 1.2.0 jälkeen: <https://github.com/Gelaende51/obsidian-lure/compare/1.2.0...1.3.0>
[^1.2.0]: Muutokset version 1.1.2 jälkeen: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.2...1.2.0>
[^1.1.2]: Muutokset version 1.1.1 jälkeen: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.1...1.1.2>
[^1.1.1]: Muutokset version 1.1.0 jälkeen: <https://github.com/Gelaende51/obsidian-lure/compare/1.1.0...1.1.1>
[^1.1.0]: Muutokset version 1.0.4 jälkeen: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.4...1.1.0>
[^1.0.4]: Muutokset version 1.0.3 jälkeen: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.3...1.0.4>
[^1.0.3]: Muutokset version 1.0.2 jälkeen: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.2...1.0.3>
[^1.0.2]: Muutokset version 1.0.1 jälkeen: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.1...1.0.2>
[^1.0.1]: Muutokset version 1.0.0 jälkeen: <https://github.com/Gelaende51/obsidian-lure/compare/1.0.0...1.0.1>
[^1.0.0]: Ensimmäinen julkaisu: <https://github.com/Gelaende51/obsidian-lure/releases/tag/1.0.0>
