<!-- Käännös tiedostosta README.md — tilanne: commit 9e180d1.
     Konekäännös (Claude Opus 5), jota äidinkieliset puhujat eivät ole
     tarkastaneet. Korjaukset ovat tervetulleita; englanninkielinen README
     on ratkaiseva versio. -->

[English](../../README.md) · [العربية](README.ar.md) · [አማርኛ](README.am.md) · [Беларуская](README.be.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [فارسی](README.fa.md) · **Suomi** · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [עברית](README.he.md) · [Magyar](README.hu.md) · [Bahasa Indonesia](README.id.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [ქართული](README.ka.md) · [ភាសាខ្មែរ](README.kh.md) · [한국어](README.ko.md) · [Latviešu](README.lv.md) · [Bahasa Melayu](README.ms.md) · [नेपाली](README.ne.md) · [Nederlands](README.nl.md) · [Norsk](README.no.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Português (Brasil)](README.pt-BR.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [संस्कृतम्](README.sa.md) · [Slovenčina](README.sk.md) · [Shqip](README.sq.md) · [Српски](README.sr.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Oʻzbekcha](README.uz.md) · [Tiếng Việt](README.vi.md) · [简体中文](README.zh.md) · [繁體中文](README.zh-TW.md)

# Lure

[Obsidian](https://obsidian.md)-lisäosa, joka muuttaa muistiinpanon otsikkorivillä olevan tiedostonimen napsautettavaksi ja muokattavaksi poluksi läpi koko holvin — kuten osoiterivi tiedostonhallinnassa [Dolphin](https://apps.kde.org/dolphin/).

![Napsautus kansion jälkeisessä erottimessa: osoitin lepää sen päällä, ja Tiedostot on näyttänyt ja avannut kyseisen kansion](../images/breadcrumb.png)

Obsidian 1.8.7+ · vain työpöytä · AGPL-3.0

## Tekoälyilmoitus

- **Agentti** — **Claude Opus 5** ja **Claude Sonnet 5** (Anthropic, Claude Coden kautta): kirjoitti TypeScriptin, CSS:n, kaikki 45 käännösjoukkoa ja dokumentaation. Käännökset ovat koneellisia, eivätkä äidinkieliset puhujat ole niitä tarkastaneet.
- **Kulutus** — 3.–13. elokuuta 2026, yhdeksän istuntoa, \~4 928 vastausta: \~7,2 milj. tuotettua tokenia, \~23,7 milj. lähetettyä, \~1169,6 milj. uudelleenlukua välimuistista (\~1200,5 milj. yhteensä).
- **Lähde** — malli oppi avoimesta lähdekoodista, dokumentaatiosta ja yhteisön kirjoituksista, jotka muut ovat julkaisseet. Suurin osa ansiosta kuuluu sinne.
- **Tekijä** — Vault51: määritteli jokaisen ominaisuuden, kokeili jokaista versiota oikeassa holvissa, ohjasi korjaukset ja luki kaikki tulokset läpi.

## Ominaisuudet

- **Napsauta kansiota** saadaksesi luettelon sen *yläpuolella* olevan kansion sisällöstä — vaihda yksi kansio naapurikansioon koskematta muuhun polkuun. Muistiinpanon nimi toimii samoin, tiedostopääte mukaan lukien.
- **Napsauta kansion jälkeistä erotinta** näyttääksesi ja avataksesi sen Tiedostot-paneelissa. Yksi asetus vaihtaa nämä kaksi roolia keskenään.
- **Napsauta hiiren oikealla tai raahaa mitä tahansa riviä** — Tiedostot-paneelin oma pikavalikko ja raahaustoiminta.
- **Napsauta tiedostonimeä tai tyhjää tilaa** kirjoittaaksesi polun, täydennyksen kanssa. `/` laskeutuu alaspäin, <kbd>Askelpalautin</kbd> nousee tason ylöspäin, <kbd>Enter</kbd> vahvistaa.
- **Kansion kynäpainike** vaihtaa samat toiminnot siirto-/nimeämistilaan, samoilla tarkistuksilla kuin Obsidian itse tekee.
- **Pidä <kbd>Ctrl</kbd> pohjassa** avataksesi uudessa välilehdessä — tai siirto-/nimeämistilassa kopioidaksesi muistiinpanon sinne sen sijaan, että siirtäisit sen.
- **<kbd>F2</kbd>** vaihtaa muistiinpanon sisäisen otsikon ja polkurivin välillä.
- **Napsauta holvin nimeä** selataksesi muita holvejasi, kotikansiotasi, tiedostojärjestelmän juurta ja liitettyjä asemia holvia vaihtamatta. Vain luku, kunnes avaat riippulukon, ja kehystettynä virhevärillä koko ajan. Oletuksena pois päältä — katso [holvin ulkopuolella](#holvin-ulkopuolella).
- **Kaksi varoitustasoa** — punainen holvin ulkopuolella, oranssi tekstitiedostoille, joille Obsidianilla ei ole muokkainta. Katso [kaksi varoitusväriä](usage.fi.md#kaksi-varoitusväriä).
- **Teemaan mukautuvat kuvakkeet**, vaihdettavissa CSS-pätkästä — ja **45 kieltä**, jokainen jonka Obsidian toimittaa.
- **Asetukset:** tasaus, valmiit erottimet, mikä napsautus avaa luettelon, holvin nimi, piilotiedostot.

![Sama luettelo siirto-/nimeämistilassa: tiedoston nykyinen nimi kiinnitettynä ylimmäksi, naapurikansiot alapuolella, ja olemassa olevat muistiinpanot himmennettyinä](../images/dropdown.png)

*Siirto-/nimeämistilassa sama luettelo tarjoaa jotain muuta: muistiinpanon nykyinen nimi kiinnitettynä ylimmäksi, jotta sen voi siirtää nimeämättä uudelleen; kansiot joihin sen voi siirtää; ja jo varatut nimet himmennettyinä, jottei mitään korvattaisi vahingossa.*

→ [Täysi käyttöohje](usage.fi.md)

## Holvin ulkopuolella

Obsidianin kehittäjäsäännöt vaativat, että lisäosa selittää kaiken pääsyn holvin ulkopuolisiin tiedostoihin, joten suoraan sanottuna:

**Tekeekö se ylipäätään mitään tästä.** Vain jos kytket päälle **Pääsy ulkoisiin tiedostoihin**, joka on **oletuksena pois päältä**. Asetuksen ollessa pois päältä lisäosasta ei ole mitään reittiä ulkoiseen polkuun, eikä mikään alla kuvatusta koodista koskaan suoritu.

**Mitä se lukee.** Vain kun sitä pyydät. Holvin nimen napsautus luettelee muut holvisi — luettuina Obsidianin omasta `obsidian.json`-tiedostosta — sekä kotikansiosi, tiedostojärjestelmän juuren ja liitetyt asemat (`/proc/mounts` Linuxissa, `/Volumes` macOS:ssä, asemakirjaimet Windowsissa). Sieltä eteenpäin selaaminen luettelee hakemistojen sisältöä, ja tiedoston avaaminen lukee juuri sen tiedoston.

**Mitä se kirjoittaa.** Ei mitään, ennen kuin painat painiketta, joka niin sanoo. Tällaisia painikkeita on kaksi, ja kumpikin kattaa vain oman alueensa:

- Katselimen painike **Muokkaa tekstinä** avaa lukituksen edessäsi olevasta tiedostosta, juuri siitä tiedostosta juuri siinä välilehdessä. Sen jälkeen muutoksesi tallentuvat siihen sitä mukaa kuin kirjoitat.
- Otsikkorivin **riippulukko**, joka näkyy vain polkurivin osoittaessa holvin ulkopuolelle, avaa luomisen, uudelleennimeämisen ja siirtämisen ulkoisissa poluissa. Se lukkiutuu uudelleen heti kun palaat sisäpuolelle, joten lupa ei koskaan elä pidempään kuin kansio, jota varten sen annoit.

Kumpaakaan avausta ei tallenneta työtilaan eikä asetuksiin, joten kirjoitus ei koskaan ole viritettynä tiedostoon, jonka avaamista et muista. Kummassakaan tilassa mitään ei korvata — olemassa oleva kohde hylätään käyttäen tiedostojärjestelmän omaa yksinomaista luontia eikä tarkistusta, joka voisi hävitä kilpajuoksun — eikä muistiinpanoa voi koskaan *siirtää* pois holvista, koska siihen osoittavat linkit hajoaisivat äänettömästi; <kbd>Ctrl</kbd>-näppäimen pohjassa pitäminen kopioi sen ulos sen sijaan.

**Miksi.** Etsimäsi muistiinpanot ovat usein toisessa holvissa, synkronointikansiossa tai USB-tikulla, ja Obsidianin oma vastaus — vaihda holvia — sulkee kaiken mitä sinulla oli auki. Tämä antaa sinun mennä katsomaan lähtemättä pois, ja korjata kirjoitusvirheen samalla.

**Rajoitus.** Obsidianin muokkain on sidottu holvin sisäisiin tiedostoihin, joten ulkoista tiedostoa **ei voi** avata oikeana muistiinpanona linkkeineen, takaisinlinkkeineen ja kaikkineen; siihen ei pysty mikään lisäosa. Lure näyttää sen sen sijaan omassa katselimessaan (Markdown, kuvat, ääni, video, PDF), ja kaikelle muulle tarjolla on *Avaa ulkoisesti*. Polkurivi pysyy virhevärillä kehystettynä aina kun se osoittaa holvin ulkopuolelle, ja jälki alkaa valitsemastasi paikasta — holvin nimestä, kotikansiosta, asemasta — eikä koneen hakemistorakenteesta.

## Asennus

Listattu osoitteessa [community.obsidian.md/plugins/lure](https://community.obsidian.md/plugins/lure), mutta sitä ei ole vielä hyväksytty sovelluksen sisäiseen selaimeen — asenna se jollakin näistä tavoista:

**Käsin:** lataa `main.js`, `manifest.json` ja `styles.css` [uusimmasta julkaisusta](https://github.com/Gelaende51/obsidian-lure/releases) hakemistoon `<vault>/.obsidian/plugins/lure/`, ja kytke se sitten päälle kohdasta **Asetukset → Yhteisön lisäosat**.

**BRAT:** lisää `Gelaende51/obsidian-lure` beetalisäosana.

**Lähdekoodista:** `npm install && npm run build` — katso [kehitys](../development.md).

## Yhteensopivuus

Mitään lisäosaa ei vaadita. Ydinlisäosa **Tiedostot** on, jos se on päällä, se joka näyttää kansiot sivupalkissa; ilman sitä nuo napsautukset eivät tee mitään.

Kokeiltu niitä yhteisön lisäosia vastaan, jotka jakavat muistiinpanon otsikkorivin tai vastaavat kansionapsautukseen — molemmissa latausjärjestyksissä, kukin päällä ja pois:

- [Folder notes](obsidian://show-plugin?id=folder-notes) — erotin avaa kansion muistiinpanon sen sijaan, että näyttäisi kansion, jolloin polun jokaisesta osasta tulee paikka johon mennä. Ainoa kansiomuistiinpanolisäosa, joka ottaa otsikkorivin polun haltuunsa; [Folder Note](obsidian://show-plugin?id=folder-note-plugin) ja [create folder notes with dropdown](obsidian://show-plugin?id=create-folder-notes-with-dropdown) eivät kuuntele siellä, joten erotin näyttää kansion tavalliseen tapaan.
- [Quick Explorer](obsidian://show-plugin?id=quick-explorer) ja [Front Matter Title](obsidian://show-plugin?id=obsidian-front-matter-title-plugin) — molemmat piirtävät samaan otsikkorivin elementtiin; Lure säilyttää rivinsä riippumatta siitä kumpi latautuu ensin, ja kumman tahansa sammuttaminen jättää toisen koskemattomaksi.
- [Nav Link Header](obsidian://show-plugin?id=nav-link-header), [Running Head](obsidian://show-plugin?id=running-head), [Crumbs](obsidian://show-plugin?id=crumbs-obsidian), [Breadcrumbs](obsidian://show-plugin?id=breadcrumbs) — niillä on oma nauhansa, ja ne tulevat toimeen rinnakkain.

Vain työpöytä — vuorovaikutusmalli tarvitsee hiiren viemistä päälle, tarkkoja napsautuksia ja näppäimistön. Täydet tulokset, mitä on vielä testaamatta, ja vertailu Quick Exploreriin ja Breadcrumbsiin ovat [yhteensopivuudessa](../compatibility.md).

## Osallistuminen

- Virheilmoitukset ja pull requestit ovat tervetulleita — erityisesti **käännöskorjaukset**, koska kaikki 45 kieltä on käännetty koneellisesti eivätkä äidinkieliset puhujat ole niitä tarkastaneet. Katso [kehitys](../development.md) asennuksen ja perussääntöjen osalta.
- **Virheseuranta:** https://github.com/Gelaende51/obsidian-lure/issues
- **Lahjoitukset:** [Ko-fi](https://ko-fi.com/vault51). Lisäosa on joka tapauksessa ilmainen ja AGPL-lisensoitu; tipit ilahduttavat eikä niitä koskaan vaadita. Tarkoituksena on hiilikompensaatio — aikomus, ei sitoumus: mitään ei kompensoida ennen kuin summa on vaivan arvoinen, ja tämä rivi kertoo siitä heti kun jotain on todella kompensoitu.

## Kiitokset

- **Vault51** — tekijä: suunnittelu, vaatimukset ja käsin testaus koko matkan.
- **Claude Opus 5** ja **Claude Sonnet 5** (Anthropic, Claude Coden kautta) — toteutus, käännökset ja dokumentaatio, tekijän johdolla. Katso [tekoälyilmoitus](#tekoälyilmoitus).
- **[Obsidian](https://obsidian.md)** — sovellus, jota tämä laajentaa, ja jokaisen lisäosan käyttämän osan lähde: sen lisäosarajapinta, `setIcon`-kutsun takana oleva Lucide-kuvakejoukko, mukana tuleva i18next-esiintymä josta pikavalikon tekstit luetaan, sekä sen omat CSS-luokat ja -muuttujat. Mitään kolmannen osapuolen koodia ei paketoida mukaan; lisäosalla **ei ole ajonaikaisia riippuvuuksia**.

> **Obsidianin tiimi ei ole osallistunut tähän projektiin millään tavalla** — he eivät ole kirjoittaneet, tarkastaneet, hyväksyneet eivätkä tukeneet sitä. Obsidian on Dynalist Inc:n tavaramerkki; tämä on itsenäinen, riippumaton lisäosa.

Osallistujat luetellaan tässä sitä mukaa kuin panoksia saapuu.

## Linkit

- **Dokumentaatio:** [docs/](../)
- **Lisäosan sivu:** https://community.obsidian.md/plugins/lure
- **Verkkosivu / lähdekoodi:** https://github.com/Gelaende51/obsidian-lure
- **Lahjoitukset:** [Ko-fi](https://ko-fi.com/vault51) — katso [osallistuminen](#osallistuminen).
- **Lisenssi:** [LICENSE](../../LICENSE) — GNU AGPL-3.0-only, © 2026 Vault51. Haarautumien ja edelleen jaettujen käännösten on julkaistava lähdekoodinsa samalla lisenssillä.
