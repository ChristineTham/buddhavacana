---
title: "P: The endings by frequency"
sidebar:
  label: "P: Endings by frequency"
  order: 578
description: >
  Every common word ending of Pāḷi with the share of each reading it has in the whole Tipiṭaka, computed
  by the Digital Pāḷi Dictionary's own frequency method: what a reader should try first when an ending
  could be read more than one way.
categories: ["palibook"]
tags: ["vibhatti", "frequency"]
---

:::tip[Info]
Part of "A Beginner (Non-Linguist) Guide to Learning Pali"
:::

The look-up tables at the end of [chapter 1](../1-basics/#recognising-a-word-the-endings-at-a-glance)
give, for each ending, its readings in the order a reader should try them. This appendix is the full
analysis behind those charts: for every ending, every reading the dictionary allows, with the share of
the words that end so which take it, over the whole Tipiṭaka. A beginner who meets a sentence has first to
classify each word by its ending, with nothing but the letters to go on, so the charts are grouped by the
last letter of the word, the commonest endings first, and nouns, verbs and particles stand side by side in
every chart; each bar is a reading, its length the share.

## How the shares were computed

The corpus is the Chaṭṭha Saṅgāyana Tipiṭaka as published at [tipitaka2500.github.io](https://tipitaka2500.github.io),
2,757,516 words. The method is the one the [Digital Pāḷi Dictionary](https://www.dpdict.net/) uses for its own
frequency tables: every word-form in the corpus is counted, and a form's count is credited to each headword
whose inflection table contains it, so that a headword's frequency is the sum of the counts of its forms.
Here the question runs the other way, which reading a form most likely has, and three steps answer it:

1. Every word that ends in one of the endings below is looked up in the dictionary, which lists the headwords
   whose tables contain it and the reading each table gives it (gender, number and inflection form for a noun; tense,
   person and number for a verb; a pronoun, a particle, a participle, an absolutive, an infinitive, a sandhi
   join).
2. Where a form belongs to several headwords, its count is divided among them in proportion to the Tipiṭaka
   frequency of each headword's *other* forms. A rare homograph cannot then borrow the frequency of the very
   form in dispute: `bhante` goes to the address form, not to `bhanta` ("wavering"), and `āyasmā` to
   `āyasmant`, not to the ⑤ of `āya` ("income").
3. The dictionary's entries for letters, roots, suffixes and verb endings, and its entries for grammatical terms (the "(gram)" headwords), are not candidates; a word the dictionary itself lists as a pronoun is read as one, and so is a particle, unless the particle is a frozen inflected form of a noun (`dukkhaṁ` "painfully", `tato` "from that"), which is read as that noun; a noun's own
   adjectival homonym, its sense as the last member of a compound, is not a candidate for a free-standing
   form; and an address form the dictionary lists as a headword of its own (`bhikkhave`, `bhante`) takes the
   reading of that headword's grammar note.

The shares are therefore estimates, not counts of readings in context, and they have four known limits.
They count letters, not analyses: a word in `-āna` with the ending `-aṁ` (`jhānaṁ`) is among the words
ending in `-ānaṁ`, and a verb with `iti` joined on (`uppajjatīti`) among those ending in `-ti`; the rows say
so. Adjectives and participles are classed as such, not by the gender and ending they take from their noun,
since the noun is not in view; a reader meeting one reads it as a noun of that gender would be read. A word
whose other forms are common but which rarely uses the form in question can be over-credited (`te` is partly
counted as the numeral "three"). And where a dictionary table gives a form several readings of one headword
(`-assa` as ④ or ⑥, a neuter `-aṁ` as ① or ②), nothing in the method can tell them apart, so the row keeps
both. The script that makes the charts, `tools/ending_shares.py` in the book's repository, can be rerun
against a newer dictionary or another corpus.

The symbols are those of the book: 🚹 🚺 🚻 the genders, ⨀ ⨂ singular and plural, ① to ⑦ and ⓪ the endings,
▶️ ⏹ ⏯ ⏮ ⏭ 🔀 🔄 ↩️ the eight sets of verb endings, 👆 🤘 🤟 the persons, *️⃣ a pronoun.

## Words that end in `…a`

```endings
-a · 272,115 words end so, 98.7 in every thousand · 97% of them classed
a particle or adverb | 55.1 | `ca`, `na`, `pana`, `idha`, `ceva`
🚹⨀⓪ | 9.4 | `nava`, `mahārāja`, `ānanda`, `satta`, `brāhmaṇa`
a number | 5.9 | `pañca`, `nava`, `cha`, `terasa`, `ekādasa`
an absolutive (-ya) | 4.2 | `paṭicca`, `upasampajja`, `ārabbha`, `abhibhuyya`, `paricca`
🚻 a form its table does not list | 4.0 | `vatthuñca`, `cakkhundriyañca`, `cakkhāyatanañca`, `rūpāyatanañca`, `upekkhindriyañca`
🚹 a form its table does not list | 4.0 | `kāmarāgānusayañca`, `paṭighānusayañca`, `khandhañca`, `mānānusayañca`, `vicikicchānusayañca`
an adjective, agreeing with its noun | 3.3 | `yāva`, `cittasamuṭṭhānañca`, `sahajāta`, `cittasamuṭṭhānānañca`, `dasa`
a participle in -tabba, -anīya, -ya | 2.7 | `paṭicca`, `pahātabbañca`, `laddhāna`, `gayha`, `sakka`
*️⃣ a pronoun | 2.7 | `tañca`, `yañca`, `aññamañña`, `tasseva`, `katamañca`
a sandhi join, to be split | 1.9 | `ceva`, `vivicceva`, `evamāha`, `tenāha`, `idamavoca`
a verb form the table does not list | 1.7 | `etadavoca`, `avoca`, `attheva`, `eteva`, `punadeva`
a past participle (-ta) | 1.4 | `satta`, `vippayutta`, `sampayutta`, `abyākatañca`, `sampayuttañca`
🚺 a form its table does not list | 0.9 | `kathañca`, `diṭṭheva`, `vuddhiyeva`, `pubbeva`, `āpodhātuñca`
🚻⨀⓪ | 0.7 | `vata`, `indriya`, `jhāna`, `moggallāna`, `sunakkhatta`
⏹🤘⨀ | 0.5 | `gaccha`, `nissaya`, `saha`, `cara`, `bhuñja`
other readings, each under 0.5% | 1.5 |
```

```endings
-assa · 89,097 words end so, 32.3 in every thousand · 94% of them classed
🚹⨀④ or ⑥ | 35.1 | `dhammassa`, `kāyassa`, `cittassa`, `saṁghassa`, `puggalassa`
*️⃣ a pronoun ⨀④ or ⑥ | 20.7 | `tassa`, `yassa`, `imassa`, `kassa`, `etassa`
🚻⨀④ or ⑥ | 19.5 | `dukkaṭassa`, `cittassa`, `pācittiyassa`, `dukkhassa`, `rūpassa`
an adjective, agreeing with its noun | 9.3 | `itthannāmassa`, `purejātassa`, `avitakkavicāramattassa`, `savitakkasavicārassa`, `avitakkaavicārassa`
a past participle (-ta) | 6.6 | `buddhassa`, `abyākatassa`, `samannāgatassa`, `samāpannassa`, `uppannassa`
a sandhi join, to be split | 3.5 | `yassa`, `evamassa`, `cassa`, `evametassa`, `panassa`
a present participle (-anta, -māna) | 2.3 | `bhaṇantassa`, `upapajjantassa`, `paṭivijānantassa`, `ajānantassa`, `vuṭṭhahantassa`
a particle or adverb | 1.2 | `tassa`, `divādivassa`
a number | 0.5 | `paṭhamassa`, `catutthassa`, `ekassa`, `dutiyassa`, `tatiyassa`
a participle in -tabba, -anīya, -ya | 0.5 | `pahātabbassa`, `pāṭidesanīyassa`, `sakkassa`, `pabbājanīyassa`, `neyyassa`
other readings, each under 0.5% | 0.6 |
```

```endings
-ena · 80,399 words end so, 29.2 in every thousand · 87% of them classed
🚹⨀③ | 45.8 | `samayena`, `ārammaṇapaccayena`, `upanissayapaccayena`, `hetupaccayena`, `anantarapaccayena`
🚻⨀③ | 19.4 | `dassanena`, `cittena`, `ekena`, `ñāṇena`, `kammena`
*️⃣ a pronoun ⨀③ | 14.7 | `tena`, `yena`, `kena`, `etena`, `aññena`
an adjective, agreeing with its noun | 9.6 | `dibbena`, `duvidhena`, `atikkantamānusakena`, `aparena`, `paṭibalena`
a past participle (-ta) | 3.8 | `saṁkhittena`, `samannāgatena`, `visuddhena`, `byattena`, `vippasannena`
a particle or adverb | 3.4 | `tena`, `yena`, `tenaṅgena`, `assāsavasena`, `passāsavasena`
a number | 0.9 | `ekena`, `paṭhamena`, `dutiyena`, `catutthena`, `tatiyena`
🚹⨀⓪ | 0.9 | `nāgasena`, `upasena`, `udena`, `sena`
a present participle (-anta, -māna) | 0.7 | `appaṭighaṁsantena`, `sampassamānena`, `nikkhipantena`, `asaṅghaṭṭentena`, `viharantena`
other readings, each under 0.5% | 0.7 |
```

```endings
-āya · 48,067 words end so, 17.4 in every thousand · 94% of them classed
🚺⨀③ or ④ or ⑤ or ⑥ or ⑦ | 28.8 | `vedanāya`, `bhāvanāya`, `vācāya`, `kathāya`, `abhiññāya`
🚻⨀④ | 17.2 | `dukkhāya`, `sukhāya`, `pahānāya`, `adukkhamasukhāya`, `dassanāya`
🚹⨀④ | 17.0 | `piṇḍāya`, `pasādāya`, `atthāya`, `adhigamāya`, `uppādāya`
an adjective, agreeing with its noun | 13.2 | `vedanāya`, `vācāya`, `sañcetanikāya`, `paññāya`, `dibbāya`
an absolutive (-ya) | 10.5 | `nissāya`, `pahāya`, `ādāya`, `upanissāya`, `samādāya`
a particle or adverb | 3.2 | `upādāya`, `upanissāya`, `nissāya`, `sabbattatāya`, `paṭilābhatthāya`
a past participle (-ta) | 3.1 | `appaṭicchannāya`, `hitāya`, `abhikkantāya`, `mattāya`, `daḷhāya`
*️⃣ a pronoun ⨀③ or ⑤ | 1.2 | `tāya`, `etāya`
a participle in -tabba, -anīya, -ya | 1.1 | `pahāya`, `sākacchāya`, `anavajjāya`, `asaṁhāriyāya`, `laddhāya`
a sandhi join, to be split | 0.9 | `pattacīvaramādāya`, `tāyevappāhāratāya`, `catthāya`, `dantebhidantamādhāya`, `saṁvāsamanvāya`
🚺⨀③ | 0.9 | `sammappaññāya`, `paññāya`, `paṭisaṅkhāya`, `aññāya`
a number | 0.8 | `ekāya`, `paṭhamāya`, `cattārīsāya`, `tiṁsāya`, `cattālīsāya`
⏹🤘⨀ | 0.7 | `paññāya`, `viññāya`, `jhāya`, `pajāya`, `vihāya`
*️⃣ a pronoun ⨀③ or ④ or ⑤ or ⑥ or ⑦ | 0.6 | `yāya`, `aññāya`, `sabbāya`, `anaññāya`, `kāya`
other readings, each under 0.5% | 1.0 |
```

```endings
-tha, -ttha · 35,854 words end so, 13 in every thousand · 98% of them classed
a particle or adverb | 77.2 | `tattha`, `atha`, `yattha`, `ettha`, `kattha`
⏮🤘⨂ | 10.1 | `uppajjittha`, `nirujjhittha`, `bhāvittha`, `parijānittha`, `sacchikarittha`
⏹🤘⨂ or ▶️🤘⨂ | 5.5 | `suṇātha`, `maññatha`, `karotha`, `pajahatha`, `etha`
🚹 a form its table does not list | 3.7 | `sabbattha`, `ratha`
a sandhi join, to be split | 1.6 | `mayamettha`, `kaccittha`, `cettha`, `kutettha`, `athettha`
a verb form the table does not list | 0.9 | `abhāsatha`, `udapajjatha`, `kayirātha`, `ajāyatha`, `ajjhabhāsatha`
🚻⨀⓪ | 0.5 | `kattha`, `assattha`
other readings, each under 0.5% | 0.3 |
```

```endings
-tabba…, -anīyaṁ · 18,615 words end so, 6.8 in every thousand · 98% of them classed
a participle in -tabba, -anīya, -ya | 92.6 | `pahātabbo`, `vattabbaṁ`, `pahātabbaṁ`, `vattabbā`, `kātabbaṁ`
🚻⨀① or ② or ⓪ | 4.5 | `bhojanīyaṁ`, `kātabbaṁ`, `paccanīyaṁ`, `khādanīyaṁ`, `paribhojanīyaṁ`
an adjective, agreeing with its noun | 2.3 | `apāyagamanīyo`, `diṭṭhadhammavedanīyaṁ`, `savacanīyaṁ`, `pemanīyā`, `manobhāvanīyo`
🚻⨀③ or ⑤ or ⓪; ⨂① or ⓪ | 0.6 | `kātabbā`, `vacanīyā`, `sevitabbā`, `tapanīyā`, `tajjanīyā`
other readings, each under 0.5% | 0.0 |
```

```endings
-eyya… · 16,701 words end so, 6.1 in every thousand · 98% of them classed
⏯🤟⨀ | 59.3 | `vadeyya`, `kareyya`, `gaccheyya`, `bhāseyya`, `passeyya`
a verb form the table does not list | 11.1 | `seyyaṁ`, `vineyya`, `pajāneyyaṁ`, `dadeyya`, `kareyya`
⏯🤟⨂ | 9.4 | `vadeyyuṁ`, `uppajjeyyuṁ`, `anvāssaveyyuṁ`, `puccheyyuṁ`, `kareyyuṁ`
a participle in -tabba, -anīya, -ya | 4.4 | `abhiññeyyaṁ`, `vineyya`, `viññeyyaṁ`, `pariññeyyaṁ`, `kareyya`
🚻⨀① or ② or ⓪ | 3.8 | `abhiññeyyaṁ`, `sāṭheyyaṁ`, `seyyāvasathapadīpeyyaṁ`, `kāyamoneyyaṁ`, `vacīmoneyyaṁ`
⏯🤘⨂ | 3.4 | `uddiseyyātha`, `samanupasseyyātha`, `byākareyyātha`, `jāneyyātha`, `paṭipuccheyyātha`
⏯🤘⨀ | 2.7 | `jāneyyāsi`, `bhāveyyāsi`, `byākareyyāsi`, `vadeyyāsi`, `passeyyāsi`
⏯👆⨂ | 2.2 | `labheyyāma`, `tenupasaṅkameyyāma`, `kareyyāma`, `passeyyāma`, `āroceyyāma`
an adjective, agreeing with its noun | 1.3 | `cakkhuviññeyyaṁ`, `saddhādeyyaṁ`, `maṇḍapeyyaṁ`, `dassaneyyaṁ`, `sotaviññeyyaṁ`
an absolutive (-ya) | 0.9 | `vineyya`, `viceyya`, `niccheyya`, `anabhineyya`, `vijeyya`
🚺⨀② | 0.7 | `sahaseyyaṁ`, `seyyaṁ`, `sīhaseyyaṁ`, `gabbhaseyyaṁ`, `nīcaseyyaṁ`
⏯👆⨀ | 0.5 | `byākareyyaṁ`, `paṭikareyyaṁ`, `nappaṭikareyyaṁ`, `abhisaṅkhareyyaṁ`, `kareyyāmi`
other readings, each under 0.5% | 0.5 |
```

```endings
-etha · 1,173 words end so, 0.4 in every thousand · 98% of them classed
⏯🤘⨂ | 58.3 | `labhetha`, `pahīyetha`, `vadetha`, `jāyetha`, `yajetha`
⏯🤘⨂ or ⏹🤘⨂ or ▶️🤘⨂ | 37.9 | `detha`, `dhāretha`, `bhāvetha`, `desetha`, `nisāmetha`
a verb form the table does not list | 3.8 | `kubbetha`, `labhetha`, `paṭisaṁvediyetha`, `nikubbetha`, `dajjetha`
```


## Words that end in `…ā`

```endings
-ā · 293,685 words end so, 106.5 in every thousand · 92% of them classed
🚹⨀③ or ⑤ or ⓪; ⨂① or ⓪ | 25.9 | `dhammā`, `hetupaccayā`, `khandhā`, `paccayā`, `saṅkhārā`
a particle or adverb | 16.5 | `vā`, `yathā`, `tadā`, `yadā`, `musā`
an adjective, agreeing with its noun | 14.1 | `bahiddhā`, `sambahulā`, `vedanā`, `sahajātā`, `pacchā`
🚺⨀① or ③; ⨂① or ② or ⓪ | 10.4 | `vedanā`, `paññā`, `mā`, `saññā`, `cetanā`
🚻⨀③ or ⑤ or ⓪; ⨂① or ⓪ | 9.6 | `akusalā`, `maraṇā`, `kusalā`, `tathā`, `dukkhā`
a past participle (-ta) | 6.5 | `pahīnā`, `sampayuttā`, `sattā`, `vippayuttā`, `saṅgahitā`
🚹⨀① or ⓪; ⨂① | 2.1 | `bhagavā`, `cakkhumā`, `sutavā`, `pāpimā`, `iddhimā`
🚹⨀① | 2.0 | `bhagavā`, `rājā`, `satthā`, `arahā`
*️⃣ a pronoun ⨀①; ⨂① or ② | 2.0 | `yā`, `katamā`, `sabbā`, `sā`, `kā`
🚹⨀① or ⓪ | 1.8 | `rājā`, `attā`, `arahā`, `satthā`, `anattā`
🚹⨂① or ⓪ | 1.4 | `khandhā`, `samaṇabrāhmaṇā`, `kusalā`, `sokaparidevadukkhadomanassupāyāsā`, `mahābhūtā`
*️⃣ a pronoun ⨂① or ② | 0.9 | `imā`, `tā`, `etā`, `nā`, `netā`
*️⃣ a pronoun ⨀① | 0.8 | `sā`, `esā`, `nesā`, `kā`
*️⃣ a pronoun ⨀③ or ⑤ | 0.6 | `mayā`, `tayā`
an absolutive (-tvā) | 0.6 | `disvā`, `anāpucchā`, `kattā`, `aladdhā`, `laddhā`
a present participle (-anta, -māna) | 0.6 | `sammā`, `labbhā`, `vijjā`, `samādapetā`, `kāretā`
a participle in -tabba, -anīya, -ya | 0.5 | `pāṭikaṅkhā`, `abhiññeyyā`, `daṭṭhabbā`, `sakkā`, `karaṇīyā`
a verb form the table does not list | 0.5 | `anusayā`, `nirodhā`, `jaññā`, `rājā`, `vūpasamā`
other readings, each under 0.5% | 3.1 |
```

```endings
-iyā, -uyā · 33,013 words end so, 12 in every thousand · 89% of them classed
🚺⨀③ or ④ or ⑤ or ⑥ or ⑦ | 39.9 | `āpattiyā`, `kāmadhātuyā`, `rūpadhātuyā`, `arūpadhātuyā`, `bhikkhuniyā`
an adjective, agreeing with its noun | 31.2 | `hetuyā`, `adhipatiyā`, `naadhipatiyā`, `chabbaggiyā`, `atthiyā`
⏯🤟⨀ | 13.2 | `siyā`, `jāniyā`, `vijāniyā`, `sītisiyā`, `nāvajāniyā`
🚻⨀③ or ⑤ or ⓪; ⨂① or ⓪ | 4.7 | `indriyā`, `saṁyojaniyā`, `piyā`, `acchariyā`, `ñāṇacariyā`
🚹⨀③ or ⑤ or ⓪; ⨂① or ⓪ | 3.5 | `ariyā`, `khattiyā`, `piyā`, `appiyā`, `titthiyā`
🚺⨀① or ③; ⨂① or ② or ⓪ | 3.5 | `bhariyā`, `viññāṇacariyā`, `cariyā`, `kālakiriyā`, `aññāṇacariyā`
a present participle (-anta, -māna) | 1.4 | `satiyā`, `bhuñjantiyā`, `vuṭṭhāpentiyā`, `atikkāmentiyā`, `phalantiyā`
a participle in -tabba, -anīya, -ya | 1.2 | `upādāniyā`, `nīvaraṇiyā`, `ganthaniyā`, `anupādāniyā`, `aganthaniyā`
a number | 0.8 | `vīsatiyā`, `tatiyā`, `asītiyā`, `dutiyā`, `dvāsaṭṭhiyā`
other readings, each under 0.5% | 0.5 |
```

```endings
-tvā, -tvāna · 30,895 words end so, 11.2 in every thousand · 98% of them classed
an absolutive (-tvā) | 100.0 | `upasaṅkamitvā`, `katvā`, `ṭhapetvā`, `abhivādetvā`, `sutvā`
```

```endings
-atā · 16,521 words end so, 6 in every thousand · 91% of them classed
a past participle (-ta) | 29.6 | `abyākatā`, `samannāgatā`, `bahulīkatā`, `paṭiviratā`, `gatā`
an adjective, agreeing with its noun | 19.9 | `yāvatā`, `ettāvatā`, `upekkhāsahagatā`, `mahatā`, `pītisahagatā`
🚺⨀① or ③; ⨂① or ② or ⓪ | 19.6 | `devatā`, `cittassekaggatā`, `dhammatā`, `samūhatā`, `aniccatā`
🚹⨀③ or ⑤ | 18.0 | `bhagavatā`, `āyasmatā`, `arahatā`, `cakkhumatā`, `satā`
a present participle (-anta, -māna) | 3.3 | `jānatā`, `passatā`, `ajjhāvasatā`, `asatā`, `ajānatā`
🚹⨀③ or ⑤ or ⓪; ⨂① or ⓪ | 3.0 | `tathāgatā`, `anāgatā`, `pabbatā`, `sugatā`, `kālaṅkatā`
🚹⨀③ | 2.4 | `bhagavatā`, `arahatā`
🚻⨀③ or ⑤ or ⓪; ⨂① or ⓪ | 1.7 | `asaṅkhatā`, `katā`, `pañcasatā`, `diṭṭhigatā`, `sukatā`
a particle or adverb | 1.6 | `kittāvatā`, `tāvatā`, `ahovatā`, `asatā`
other readings, each under 0.5% | 0.7 |
```

```endings
-asā, -aso, -asi · 9,554 words end so, 3.5 in every thousand · 96% of them classed
▶️🤘⨀ | 18.1 | `maññasi`, `passasi`, `parisaṅkasi`, `icchasi`, `tiṭṭhasi`
a particle or adverb | 12.7 | `sabbaso`, `antamaso`, `ṭhānaso`, `anubyañjanaso`, `suttaso`
🚹⨀③ or ⑤ | 12.7 | `manasā`, `cetasā`, `sirasā`, `sahasā`, `yasasā`
an adjective, agreeing with its noun | 12.5 | `cetasā`, `cetaso`, `ekarasā`, `mahāyaso`, `oraso`
🚹⨀③ | 8.6 | `cetasā`, `manasā`, `sirasā`, `vacasā`, `jarasā`
🚹⨀⑦ | 8.1 | `manasi`, `sirasi`, `urasi`, `sarasi`, `rahasi`
⏭🤘⨀ | 6.7 | `bhavissasi`, `karissasi`, `gamissasi`, `sarissasi`, `pāpuṇissasi`
🚹⨀④ or ⑥ | 5.3 | `cetaso`, `manaso`, `ayaso`, `vāyaso`, `chandaso`
🚹⨀① | 4.2 | `yaso`, `divaso`, `raso`, `dhammaraso`, `attharaso`
↩️🤟⨀ | 3.3 | `addasā`, `tamaddasā`, `vinasā`
🚹⨀③ or ⑤ or ⓪; ⨂① or ⓪ | 2.8 | `rasā`, `makasā`, `vasā`, `rakkhasā`, `vehāyasā`
🚹⨀① or ② | 1.0 | `yaso`, `raso`, `yasāyaso`, `ayaso`
⏮🤘⨀ or ⏮🤟⨀ | 0.8 | `vasi`, `paṭimasi`, `anumasi`, `parāmasi`, `āmasi`
a sandhi join, to be split | 0.8 | `tvamasi`, `saso`, `gantumicchasi`, `payātumicchasi`, `laṅghetumicchasi`
🚻⨀③ or ⑤ or ⓪; ⨂① or ⓪ | 0.8 | `rasā`, `sāhasā`, `kakkasā`, `mānasā`, `tidasā`
other readings, each under 0.5% | 1.5 |
```

```endings
-asmā, -amhā · 7,696 words end so, 2.8 in every thousand · 97% of them classed
*️⃣ a pronoun ⨀⑤ | 28.2 | `tasmā`, `tamhā`, `yasmā`, `kasmā`, `etamhā`
🚹⨀① | 24.8 | `āyasmā`
🚹⨀① or ⓪; ⨂① | 19.8 | `āyasmā`
a sandhi join, to be split | 11.6 | `yenāyasmā`, `ayamāyasmā`, `iccāyasmā`, `panāyasmā`, `cāyasmā`
🚻⨀⑤ | 10.6 | `agārasmā`, `dukkhasmā`, `khīramhā`, `navanītamhā`, `bandhanasmā`
🚹⨀⑤ | 3.1 | `āyasmā`, `lokamhā`, `saṁghamhā`, `gedhamhā`, `aṇḍakosamhā`
an adjective, agreeing with its noun | 1.3 | `māyasmā`, `parasmā`, `amukamhā`, `samhā`, `idhāgatamhā`
other readings, each under 0.5% | 0.7 |
```

```endings
-inā, -unā · 5,636 words end so, 2 in every thousand · 97% of them classed
🚹⨀③ or ⑤ | 48.2 | `bhikkhunā`, `yoginā`, `brahmunā`, `ñāṇagginā`, `pāṇinā`
*️⃣ a pronoun ⨀③ | 17.1 | `iminā`, `amunā`
🚻⨀③ or ⑤ | 17.1 | `cakkhunā`, `kammunā`, `vatthunā`, `āyunā`, `asucinā`
an adjective, agreeing with its noun | 5.7 | `ahorattānusikkhinā`, `agginā`, `vārinā`, `sakadāgāminā`, `anāgāminā`
a present participle (-anta, -māna) | 5.4 | `vinā`, `anutthunā`, `jinā`, `ajinā`
🚹⨀③ | 1.6 | `bhikkhunā`, `pāṇinā`, `brahmunā`, `pitunā`, `bhattunā`
🚺⨀① or ③; ⨂① or ② or ⓪ | 1.3 | `yamunā`, `dosinā`, `kaṇhājinā`, `tasinā`, `kāmatasinā`
a particle or adverb | 1.2 | `sotthinā`, `punā`, `adhunā`
🚻⨀③ or ⑤ or ⓪; ⨂① or ⓪ | 1.2 | `methunā`, `supinā`, `vipinā`, `kharājinā`, `kathinā`
a verb form the table does not list | 0.5 | `vinā`, `jinā`, `anutthunā`, `ajinā`, `odhinā`
other readings, each under 0.5% | 0.8 |
```


## Words that end in `…i`

```endings
-ti · 170,011 words end so, 61.7 in every thousand · 97% of them classed
▶️🤟⨀ | 71.8 | `hoti`, `uppajjati`, `viharati`, `vuccati`, `pajānāti`
a verb with iti joined on (…tīti) | 7.4 | `uppajjatīti`, `uppajjissatīti`, `uppajjitthāti`, `abhāsitthāti`, `nirujjhissatīti`
🚺⨀① or ⓪ | 7.0 | `āpatti`, `anāpatti`, `paññatti`, `jāti`, `sati`
🚹 a form its table does not list | 3.1 | `ādikammikassāti`, `suttantoti`, `atthīti`, `tathāgatenāti`, `bhagavāti`
a particle or adverb | 2.5 | `iti`, `cāti`, `vāti`, `ārabbhāti`, `pati`
🚹⨀① or ⓪ | 1.4 | `gahapati`, `adhipati`, `thapati`, `sahampati`, `senāpati`
an adjective, agreeing with its noun | 1.3 | `sānusayoti`, `niranusayoti`, `vimutti`, `atthīti`, `sammāsati`
a present participle (-anta, -māna) | 1.1 | `sati`, `asati`, `bujjhantīti`, `upapajjatīti`, `pajahatīti`
a past participle (-ta) | 0.9 | `samannāgatoti`, `pahīnoti`, `appahīnoti`, `vimuttamiti`, `paññattoti`
🚺 a form its table does not list | 0.7 | `āpattīti`, `paṇidhīti`, `paññattīti`, `sukkavissaṭṭhīti`, `dasāti`
🚻 a form its table does not list | 0.6 | `itthattāyāti`, `maraṇāti`, `arahattāti`, `sotāpattiphalāti`, `dukkhasmāti`
*️⃣ a pronoun ⨂① or ② | 0.6 | `kati`
other readings, each under 0.5% | 1.6 |
```

```endings
-i · 147,357 words end so, 53.4 in every thousand · 97% of them classed
a particle or adverb | 46.2 | `ti`, `hi`, `api`, `yadi`, `tipi`
a number | 12.4 | `tīṇi`, `cattāri`, `pañcahi`, `chahi`, `sattahi`
▶️🤟⨀ or ▶️🤟⨂ | 6.2 | `atthi`, `natthi`, `karaṇīyamatthi`
🚹⨀① or ⓪ | 4.5 | `atthi`, `upāli`, `samādhi`, `sammāsamādhi`, `gāmaṇi`
⏮🤘⨀ or ⏮🤟⨀ | 4.1 | `nisīdi`, `udapādi`, `vigarahi`, `sammodi`, `uttari`
🚹 a form its table does not list | 3.7 | `ayampi`, `saṁsaṭṭhavāropi`, `paccayavāropi`, `ekadhammampi`, `dutiyampi`
*️⃣ a pronoun | 3.3 | `tampi`, `ayampi`, `yampi`, `idampi`, `ahampi`
an adjective, agreeing with its noun | 2.9 | `atthi`, `aparehipi`, `tatiyampi`, `evaṁdiṭṭhi`, `kathañhi`
🚺⨀① or ⓪ | 2.8 | `diṭṭhi`, `sammādiṭṭhi`, `micchādiṭṭhi`, `sakkāyadiṭṭhi`, `iddhi`
a sandhi join, to be split | 2.4 | `seyyathāpi`, `kiñcāpi`, `khomhi`, `panaññampi`, `cepi`
🚻 a form its table does not list | 2.3 | `paccanīyampi`, `ayampi`, `ekampi`, `abyābajjhampi`, `cetasikampi`
🚺 a form its table does not list | 1.3 | `kathañhi`, `dutiyampi`, `tatiyampi`, `gaṇanāpi`, `pathaviyāpi`
*️⃣ a pronoun ⨂③ or ⑤ | 1.0 | `katihi`, `kehici`, `ehi`, `kāhici`, `katibhi`
a verb form the table does not list | 0.9 | `etampi`, `yepi`, `sahāpi`, `kārāpentipi`, `harantipi`
*️⃣ a pronoun ⨀① or ② | 0.6 | `kiñci`
🚹⨀⑦ | 0.5 | `attani`, `satthari`, `vasimhi`, `samādhimhi`, `sammāsamādhimhi`
*️⃣ a pronoun ⨂① or ② | 0.5 | `keci`, `kānici`
other readings, each under 0.5% | 4.0 |
```

```endings
-nti · 38,743 words end so, 14 in every thousand · 98% of them classed
▶️🤟⨂ | 80.1 | `honti`, `uppajjanti`, `ujjhāyanti`, `vipācenti`, `gacchanti`
🚻 a form its table does not list | 6.9 | `vatthusminti`, `indriyanti`, `cakkhundriyanti`, `nibbānanti`, `cittanti`
a past participle (-ta) | 4.2 | `avigatanti`, `paññattanti`, `abyākatanti`, `sutanti`, `uppannanti`
*️⃣ a pronoun | 1.5 | `santi`, `kinti`, `mamanti`, `ahanti`, `manti`
an adjective, agreeing with its noun | 1.4 | `nirāmisanti`, `nirodhadhammanti`, `suvimuttanti`, `vipariṇāmadhammanti`, `sāmisanti`
a verb form the table does not list | 1.4 | `siyanti`, `santi`, `abhinandunti`, `dadeyyunti`, `samāpajjinti`
🚹 a form its table does not list | 1.2 | `cittanti`, `santi`, `khemanti`, `kinti`, `lokanti`
a present participle (-anta, -māna) | 0.9 | `santi`, `karonti`, `santanti`, `sakkaronti`, `sakkonti`
🚺⨀① or ⓪ | 0.5 | `avakkanti`, `santi`, `gabbhāvakkanti`, `okkanti`, `nikanti`
other readings, each under 0.5% | 2.0 |
```

```endings
-āni, -īni, -ūni · 23,563 words end so, 8.5 in every thousand · 94% of them classed
🚻⨂① or ② or ⓪ | 52.0 | `vassāni`, `pañcindriyāni`, `rūpāni`, `saccāni`, `indriyāni`
an adjective, agreeing with its noun | 19.2 | `dāni`, `pantāni`, `suciṇṇāni`, `ettakāni`, `bahūni`
*️⃣ a pronoun ⨂① or ② | 14.6 | `imāni`, `tāni`, `katamāni`, `yāni`, `sabbāni`
a past participle (-ta) | 7.0 | `nissaṭāni`, `pahīnāni`, `jātāni`, `satāni`, `vūpasantāni`
a sandhi join, to be split | 2.6 | `pañcimāni`, `cattārimāni`, `yassadāni`, `tīṇimāni`, `yānimāni`
a participle in -tabba, -anīya, -ya | 2.0 | `gahetabbāni`, `daṭṭhabbāni`, `dhāretabbāni`, `rajanīyāni`, `kātabbāni`
🚺⨀① or ⓪ | 0.6 | `parihāni`, `saṁhāni`, `dhanajāni`, `hāni`, `yasoparihāni`
a particle or adverb | 0.6 | `idāni`, `svedāni`
a number | 0.5 | `uppalāni`, `cullāsītisahassāni`, `padumāni`, `satasahassāni`, `puṇḍarīkāni`
other readings, each under 0.5% | 1.1 |
```

```endings
-mi, -ma · 23,483 words end so, 8.5 in every thousand · 97% of them classed
⏹👆⨀ or ▶️👆⨀ | 37.9 | `vadāmi`, `anujānāmi`, `viharāmi`, `nābhijānāmi`, `jānāmi`
a particle or adverb | 12.1 | `nāma`, `āgamma`, `āma`, `samma`, `kimāgamma`
⏮🤘⨀ or ⏮🤟⨀ | 9.9 | `tenupasaṅkami`, `pakkāmi`, `upāgami`, `nikkhami`, `okkami`
🚻⨀⓪ | 9.3 | `nāma`, `samma`, `āma`, `sāma`, `kittināma`
🚹⨀⓪ | 7.5 | `gotama`, `mahānāma`, `pāpima`, `cakkhuma`, `susima`
*️⃣ a pronoun ⨀④ or ⑥ | 6.8 | `mama`
an absolutive (-ya) | 3.9 | `samatikkamma`, `āgamma`, `atikkamma`, `saṅgamma`, `samāgamma`
⏹👆⨂ or ▶️👆⨂ | 3.8 | `gacchāma`, `pucchāma`, `jānāma`, `suṇoma`, `viharāma`
a sandhi join, to be split | 2.0 | `nesohamasmi`, `esohamasmi`, `ahamasmi`, `khosmi`, `sāvakohamasmi`
a verb form the table does not list | 2.0 | `vadāmi`, `brūmi`, `tenupasaṅkama`, `dammi`, `paṭihaṅkhāmi`
🚺⨀① or ⓪ | 0.6 | `bhūmi`, `ūmi`, `vighātabhūmi`, `rasmi`, `pāpabhūmi`
⏯👆⨂ or ⏹👆⨂ or ▶️👆⨂ | 0.6 | `dhārema`, `dema`, `desema`, `yāpema`, `paññapema`
⏹🤘⨀ | 0.5 | `samma`, `khama`, `abhikkama`, `nikkhama`, `abhirama`
a present participle (-anta, -māna) | 0.5 | `samma`, `nikkhama`, `vāyama`, `virama`, `abhikkama`
⏭👆⨀ | 0.5 | `vakkhāmi`, `pavakkhāmi`, `kāhāmi`, `ucchecchāmi`, `lacchāmi`
🚺⨀⓪ | 0.5 | `amma`, `gotami`, `āma`, `sāma`, `sakadāgāmi`
other readings, each under 0.5% | 1.6 |
```

```endings
-ehi, -īhi, -ūhi, -āhi · 22,217 words end so, 8.1 in every thousand · 93% of them classed
🚹⨂③ or ⑤ | 35.2 | `dhammehi`, `khandhehi`, `kāmehi`, `ākārehi`, `samathehi`
*️⃣ a pronoun ⨂③ or ⑤ | 18.5 | `imehi`, `katamehi`, `tehi`, `yehi`, `imāhi`
🚻⨂③ or ⑤ | 18.1 | `samuṭṭhānehi`, `aṅgehi`, `ṭhānehi`, `akusalehi`, `āyatanehi`
an adjective, agreeing with its noun | 10.2 | `dibbehi`, `ariyakantehi`, `mudutarehi`, `parehi`, `akhaṇḍehi`
⏹🤘⨀ | 6.8 | `dehi`, `vadehi`, `jānāhi`, `kāmehi`, `paññapehi`
a sandhi join, to be split | 3.4 | `pañcahaṅgehi`, `tīhaṅgehi`, `chahaṅgehi`, `aṭṭhahaṅgehi`, `dasahaṅgehi`
🚺⨂③ or ⑤ | 2.7 | `gāthāhi`, `kammavācāhi`, `devatāhi`, `vedanāhi`, `vācāhi`
a past participle (-ta) | 2.0 | `sampayuttehi`, `aparāmaṭṭhehi`, `saṁkiliṭṭhehi`, `asaṁvutehi`, `abhiññātehi`
a particle or adverb | 1.9 | `tīhākārehi`, `pañcahākārehi`, `catūhākārehi`, `sattahākārehi`, `dasahākārehi`
a participle in -tabba, -anīya, -ya | 0.5 | `āvaraṇīyehi`, `pahātabbehi`, `rajanīyehi`, `phoṭṭhabbehi`, `asaṅkhyeyyehi`
other readings, each under 0.5% | 0.6 |
```

```endings
-ssati… · 19,566 words end so, 7.1 in every thousand · 99% of them classed
⏭🤟⨀ | 43.5 | `uppajjissati`, `nirujjhissati`, `bhavissati`, `nuppajjissati`, `karissati`
⏭🤟⨂ | 19.2 | `parinibbāyissanti`, `bhavissanti`, `paṭilabhissanti`, `nirujjhissanti`, `uppajjissanti`
▶️🤟⨀ | 14.8 | `passati`, `samanupassati`, `vipassati`, `anupassati`, `nassati`
⏭👆⨀ | 9.4 | `desessāmi`, `bhavissāmi`, `karissāmi`, `pabbajissāmi`, `kittayissāmi`
⏹👆⨀ or ▶️👆⨀ | 3.2 | `passāmi`, `samanupassāmi`, `namassāmi`, `sandissāmi`, `sussāmi`
⏭👆⨂ | 2.8 | `bhavissāma`, `karissāma`, `tenupasaṅkamissāma`, `hessāma`, `bhuñjissāma`
▶️🤟⨂ | 2.7 | `passanti`, `vipassanti`, `samanupassanti`, `namassanti`, `dissanti`
🚺⨀① or ⓪ | 1.0 | `anussati`, `ānāpānassati`, `paṭissati`, `dhammānussati`, `maraṇassati`
⏭🤘⨂ | 0.8 | `karissatha`, `bhavissatha`, `bhuñjissatha`, `sañjānissatha`, `dhāressatha`
an adjective, agreeing with its noun | 0.5 | `muṭṭhassati`, `upaṭṭhitassati`, `upaṭṭhitakāyassati`, `anupaṭṭhitakāyassati`
⏹🤘⨂ or ▶️🤘⨂ | 0.5 | `passatha`, `samanupassatha`, `namassatha`, `vinassatha`, `pavassatha`
other readings, each under 0.5% | 1.5 |
```

```endings
-si · 12,877 words end so, 4.7 in every thousand · 91% of them classed
⏮🤘⨀ or ⏮🤟⨀ | 60.4 | `ahosi`, `āmantesi`, `āsi`, `aṭṭhāsi`, `adāsi`
▶️🤘⨀ | 22.5 | `vadesi`, `jānāsi`, `aññāsi`, `desesi`, `samādapesi`
a sandhi join, to be split | 10.5 | `etadahosi`, `kallosi`, `khosi`, `diṭṭhosi`, `nusi`
🚹⨀① or ⓪ | 2.0 | `isi`, `rāsi`, `pāyāsi`, `mahesi`, `mahāisi`
🚺⨀⓪ | 1.3 | `āsi`, `adāsi`, `bhisi`, `mahesi`, `dāsi`
🚹⨀⓪ | 0.7 | `mahesi`, `tapassi`, `yasassi`, `sataraṁsi`, `hitesi`
⏹🤘⨀ | 0.6 | `adāsi`, `niyyāsi`, `rājāsi`, `pajahāsi`, `yamāsi`
a verb form the table does not list | 0.5 | `ahāsi`, `vihāsi`, `brūsi`, `upehisi`, `vihāhisi`
other readings, each under 0.5% | 1.4 |
```

```endings
-īhi, -ūhi, -īnaṁ, -ūnaṁ, -īsu, -ūsu · 12,674 words end so, 4.6 in every thousand · 95% of them classed
a number | 28.5 | `catūhi`, `tīhi`, `dvīhi`, `dvīsu`, `catūsu`
🚹⨂④ or ⑥ | 21.0 | `bhikkhūnaṁ`, `sabrahmacārīnaṁ`, `viññūnaṁ`, `gihīnaṁ`, `hetūnaṁ`
🚺⨂④ or ⑥ | 10.5 | `bhikkhunīnaṁ`, `itthīnaṁ`, `āpattīnaṁ`, `vipattīnaṁ`, `āhutīnaṁ`
🚺⨂③ or ⑤ | 9.4 | `dhātūhi`, `bhikkhunīhi`, `āpattīhi`, `mukhasattīhi`, `dattīhi`
🚹⨂③ or ⑤ | 8.0 | `bhikkhūhi`, `cetanāpaṇidhīhi`, `viññūhi`, `sabrahmacārīhi`, `hetūhi`
🚺⨂⑦ | 5.2 | `bhūmīsu`, `āpattīsu`, `diṭṭhīsu`, `bhikkhunīsu`, `dhātūsu`
a past participle (-ta) | 4.4 | `pahīnaṁ`, `hīnaṁ`, `asallīnaṁ`, `līnaṁ`, `appahīnaṁ`
an adjective, agreeing with its noun | 3.4 | `bahūnaṁ`, `abhisametāvīnaṁ`, `dummaṅkūnaṁ`, `bahūhi`, `rūpīnaṁ`
🚹⨂⑦ | 3.0 | `bhikkhūsu`, `sabrahmacārīsu`, `kāsīsu`, `mātāpitūsu`, `vajjīsu`
⏹🤘⨀ | 1.6 | `brūhi`, `pabrūhi`
🚻⨂③ or ⑤ | 1.5 | `vatthūhi`, `piyacakkhūhi`, `cakkhūhi`, `saṅgahavatthūhi`, `āghātavatthūhi`
a present participle (-anta, -māna) | 1.5 | `upapajjantīnaṁ`, `cavantīnaṁ`, `ujjhāyantīnaṁ`, `khiyyantīnaṁ`, `vipācentīnaṁ`
a verb form the table does not list | 1.0 | `brūhi`
🚻⨀① or ② or ⓪ | 0.5 | `hīnaṁ`, `thīnaṁ`, `aparihīnaṁ`
other readings, each under 0.5% | 0.4 |
```


## Words that end in `…ī`

```endings
-ī · 40,203 words end so, 14.6 in every thousand · 70% of them classed
an adjective, agreeing with its noun | 44.3 | `ātāpī`, `lābhī`, `dukkhanirodhagāminī`, `dhammānupassī`, `ācayagāmī`
🚺⨀① or ⓪; ⨂① or ② or ⓪ | 16.7 | `bhikkhunī`, `veramaṇī`, `anāgāmī`, `itthī`, `pathavī`
🚹⨀① or ⓪; ⨂① or ② or ⓪ | 15.2 | `cakkavattī`, `udāyī`, `medhāvī`, `gihī`, `jhāyī`
a present participle (-anta, -māna) | 11.1 | `vijjatī`, `viharatī`, `pabhāsatī`, `upapajjatī`, `viharantī`
⏮🤟⨀ | 3.6 | `vasī`, `udapādī`, `nandī`, `jhāyī`, `nadī`
🚹⨂① or ② or ⓪ | 3.2 | `licchavī`, `ñātī`, `atthī`, `jhāyī`, `munī`
🚺⨂① or ② or ⓪ | 2.9 | `itthī`, `hirī`, `iddhī`, `bhūrī`, `nandī`
a particle or adverb | 1.2 | `tuṇhī`, `sabbadhī`, `āvī`, `dhī`, `katthacī`
a verb form the table does not list | 0.9 | `natthī`, `ramatī`, `bhuñjasī`, `patthayasī`, `maññatī`
other readings, each under 0.5% | 1.0 |
```


## Words that end in `…u`

```endings
-u · 24,513 words end so, 8.9 in every thousand · 98% of them classed
🚹⨀① or ⓪ | 45.8 | `bhikkhu`, `sādhu`, `dīghāvu`, `garu`, `samantacakkhu`
a particle or adverb | 22.4 | `nu`, `nanu`, `sādhu`, `udāhu`, `khalu`
🚻⨀① or ⓪ | 12.3 | `vatthu`, `cakkhu`, `sādhu`, `tadahu`, `āyu`
a sandhi join, to be split | 4.7 | `evamāhaṁsu`, `kudāssu`, `yatthassu`, `evamassu`, `apissu`
a verb form the table does not list | 2.9 | `ahu`, `assu`, `akaṁsu`, `adhibhaṁsu`, `avekkhassu`
an adjective, agreeing with its noun | 2.7 | `bahu`, `anabhijjhālu`, `abhijjhālu`, `puthu`, `mudu`
a number | 2.1 | `chasu`, `pañcasu`, `sattasu`, `dasasu`, `aṭṭhasu`
⏮🤟⨂ | 1.9 | `akaṁsu`, `aṭṭhaṁsu`, `agamaṁsu`, `addasaṁsu`, `adaṁsu`
⏮🤟⨀ | 1.3 | `ahu`, `pāturahu`, `nāhu`
🚹 a form its table does not list | 0.7 | `gotrabhu`, `sabbaññu`, `bhūnahu`, `vedagu`, `mittaddu`
🚹⨀④ or ⑥ | 0.6 | `satthu`, `daṭṭhu`
⏯🤟⨂ | 0.5 | `assu`, `nāssu`, `bhuñjeyyu`, `phuseyyu`, `siyaṁsu`
other readings, each under 0.5% | 2.1 |
```

```endings
-tu, -ntu · 12,028 words end so, 4.4 in every thousand · 80% of them classed
a particle or adverb | 23.9 | `hetu`, `samannāgamanahetu`, `kāmahetu`, `jātu`, `cīvarahetu`
🚺⨀① or ⓪ | 23.6 | `dhātu`, `āpodhātu`, `dhammadhātu`, `manoviññāṇadhātu`, `cakkhudhātu`
🚹⨀① or ⓪ | 21.3 | `hetu`, `ajātasattu`, `jantu`, `utu`, `takkahetu`
⏹🤟⨀ | 19.5 | `suṇātu`, `hotu`, `dhāretu`, `desetu`, `tiṭṭhatu`
⏹🤟⨂ | 8.6 | `uddisantu`, `hontu`, `āgacchantu`, `suṇantu`, `haññantu`
🚹⨀④ or ⑥ | 1.5 | `bhattu`, `pitu`, `sattu`, `sakapitu`, `dhātu`
a verb form the table does not list | 0.6 | `suṇātu`, `kurutu`, `hotu`, `tiṭṭhatu`, `tiṭṭhantu`
🚺⨀④ or ⑥ | 0.6 | `mātu`, `bodhisattamātu`, `janikāmātu`, `sakamātu`, `migāramātu`
other readings, each under 0.5% | 0.5 |
```

```endings
-esu, -īsu, -ūsu, -āsu · 11,735 words end so, 4.3 in every thousand · 97% of them classed
🚹⨂⑦ | 45.1 | `dhammesu`, `kāmesu`, `manussesu`, `kusalesu`, `devesu`
🚻⨂⑦ | 19.9 | `kusalesu`, `indriyesu`, `sikkhāpadesu`, `sīlesu`, `rūpesu`
an adjective, agreeing with its noun | 10.4 | `vedanāsu`, `aṇumattesu`, `paccantimesu`, `manāpiyesu`, `cakkhuviññeyyesu`
🚺⨂⑦ | 8.0 | `vedanāsu`, `āpadāsu`, `parisāsu`, `saṅkhārupekkhāsu`, `paralābhasakkāragarukāramānanavandanapūjanāsu`
*️⃣ a pronoun ⨂⑦ | 7.3 | `tesu`, `imesu`, `sabbesu`, `tāsu`, `etesu`
a past participle (-ta) | 4.5 | `ananussutesu`, `uparuddhesu`, `sattesu`, `bhaggesu`, `paccuppannesu`
a present participle (-anta, -māna) | 1.4 | `bhāviyamānesu`, `santesu`, `ḍayhamānesu`, `parivattantesu`, `bhaññamānesu`
a participle in -tabba, -anīya, -ya | 1.3 | `vajjesu`, `rajanīyesu`, `sakkesu`, `upādāniyesu`, `sacchikaraṇīyesu`
🚹⨀① or ⓪ | 1.1 | `phāsu`, `aphāsu`
a particle or adverb | 0.9 | `phāsu`, `tadāsu`
other readings, each under 0.5% | 0.1 |
```

```endings
-iṁsu · 2,287 words end so, 0.8 in every thousand · 96% of them classed
⏮🤟⨂ | 92.7 | `tenupasaṅkamiṁsu`, `nisīdiṁsu`, `sammodiṁsu`, `bhuñjiṁsu`, `parimucciṁsu`
a particle or adverb | 5.2 | `kiṁsu`
a verb form the table does not list | 2.1 | `pakkamiṁsu`, `abhaviṁsu`, `abhuñjiṁsu`
```


## Words that end in `…ū`

```endings
-ū · 10,664 words end so, 3.9 in every thousand · 91% of them classed
🚹⨂① or ② or ⓪ | 76.1 | `bhikkhū`, `hetū`, `bahū`, `sādhū`, `kusalahetū`
🚹⨀① or ⓪; ⨂① or ② or ⓪ | 9.5 | `viññū`, `lokavidū`, `pāragū`, `vedagū`, `sabbaññū`
an adjective, agreeing with its noun | 8.7 | `bahū`, `puthū`, `mattaññū`, `rattaññū`, `vadaññū`
a verb form the table does not list | 2.3 | `bhikkhū`, `vidū`, `assū`, `bandhū`, `jaññū`
🚻⨂① or ② or ⓪ | 1.3 | `sādhū`, `ahū`, `vatthū`, `massū`, `chejjavatthū`
🚺⨂① or ② or ⓪ | 1.3 | `dhātū`, `vāyodhātū`, `bhīrū`, `kāmadhātū`, `jambū`
other readings, each under 0.5% | 0.7 |
```


## Words that end in `…e`

```endings
-e · 179,514 words end so, 65.1 in every thousand · 92% of them classed
🚹⨀⑦; ⨂② | 23.3 | `khandhe`, `samaye`, `loke`, `dhamme`, `paṭisandhikkhaṇe`
🚹⨂⓪ | 16.1 | `bhikkhave`, `have`, `bandhave`, `pasave`, `sindhave`
*️⃣ a pronoun ⨂① or ② | 13.1 | `ye`, `te`, `ime`, `katame`, `sabbe`
🚻⨀⑦; ⨂② | 12.8 | `ārammaṇe`, `anantare`, `jetavane`, `indriye`, `jhāne`
*️⃣ a pronoun ⨀② or ③ or ④ or ⑤ or ⑥ | 4.2 | `me`
an adjective, agreeing with its noun | 3.9 | `apariyāpanne`, `rūpāvacare`, `arūpāvacare`, `sadevake`, `aneke`
a number | 3.7 | `dve`, `te`, `duve`, `ekattiṁse`, `catutthe`
*️⃣ a pronoun ⨀② or ③ or ④ or ⑥; ⨂① or ② | 3.5 | `te`
a particle or adverb | 3.2 | `sace`, `ce`, `re`, `ve`, `ajjatagge`
*️⃣ a pronoun ⨀② or ③ or ④ or ⑥ | 3.2 | `me`, `te`
a participle in -tabba, -anīya, -ya | 2.3 | `vattabbe`, `pahātabbe`, `phoṭṭhabbe`, `ramme`, `veditabbe`
🚹 a form its table does not list | 2.3 | `dve`
⏯👆⨀ or ⏯🤘⨀ or ⏯🤟⨀ | 2.0 | `kappe`, `care`, `maññe`, `upanissaye`, `bhave`
🚺⨀⓪ | 1.4 | `santike`, `pubbe`, `āsevane`, `ayye`, `visākhe`
a sandhi join, to be split | 1.3 | `pañcime`, `cattārome`, `tañce`, `tadahuposathe`, `dveme`
a past participle (-ta) | 1.0 | `pahīne`, `buddhe`, `parisuddhe`, `hīne`, `samudāciṇṇe`
*️⃣ a pronoun ⨂① | 0.6 | `ime`, `sabbe`, `aññe`, `apare`, `pare`
🚹⨂② | 0.5 | `khandhe`, `brāhmaṇagahapatike`, `candimasūriye`, `kusale`, `mittāmacce`
other readings, each under 0.5% | 1.6 |
```

```endings
-te · 23,279 words end so, 8.4 in every thousand · 80% of them classed
a past participle (-ta) | 44.7 | `avigate`, `sampayutte`, `vutte`, `vippayutte`, `vigate`
an adjective, agreeing with its noun | 21.2 | `novigate`, `sahajāte`, `purejāte`, `pacchājāte`, `uddhaccasahagate`
🚻⨀⑦; ⨂② | 11.9 | `mahābhūte`, `citte`, `vutte`, `ekatte`, `jīvite`
🚹⨀⑦; ⨂② | 8.2 | `citte`, `satte`, `tathāgate`, `sugate`, `pabbate`
a verb form the table does not list | 4.2 | `labhate`, `vuccate`, `kurute`, `jāyate`, `bhāsate`
*️⃣ a pronoun ⨂① or ② | 2.7 | `ete`, `nete`
⏯👆⨀ or ⏯🤘⨀ or ⏯🤟⨀ | 1.3 | `pavatte`, `nibbatte`, `vatte`, `cete`, `abhinibbatte`
🚹⨂② | 1.3 | `mahābhūte`, `tusite`, `sabbāmitte`, `ñātimitte`, `sabbasatte`
🚻⨂② | 1.2 | `mahābhūte`
🚺⨀⓪ | 1.2 | `devate`, `citte`, `nandamāte`, `mitte`, `sute`
a sandhi join, to be split | 0.9 | `hete`, `etthete`, `sabbete`, `iccete`, `panete`
🚹⨀⓪ | 0.6 | `satte`, `pavatte`, `katte`, `aviññāte`, `ñāte`
other readings, each under 0.5% | 0.5 |
```


## Words that end in `…o`

```endings
-o · 332,365 words end so, 120.5 in every thousand · 94% of them classed
🚹⨀① | 43.1 | `dhammo`, `paccayo`, `puggalo`, `saṁgho`, `puriso`
an adjective, agreeing with its noun | 15.5 | `eko`, `akusalo`, `sampajāno`, `sahetuko`, `niranusayo`
a particle or adverb | 14.4 | `kho`, `āvuso`, `no`, `so`, `yoniso`
*️⃣ a pronoun ⨀① | 8.6 | `so`, `yo`, `katamo`, `ko`, `aññataro`
a past participle (-ta) | 7.4 | `nisinno`, `pahīno`, `buddho`, `ṭhito`, `sampayutto`
a number | 2.9 | `tayo`, `cattāro`, `catasso`, `tisso`, `paṭhamo`
*️⃣ a pronoun ⨂② or ③ or ④ or ⑥ | 2.7 | `no`, `vo`
a participle in -tabba, -anīya, -ya | 0.8 | `abhiññeyyo`, `abhabbo`, `karaṇīyo`, `bhabbo`, `pāsaṁso`
🚹⨀① or ⓪ | 0.7 | `bho`
a sandhi join, to be split | 0.6 | `panāvuso`, `idhāvuso`, `meso`, `evamāvuso`, `vuccatāvuso`
🚹⨀④ or ⑥ | 0.6 | `rañño`, `attano`, `bhoto`, `kāsirañño`, `kosalarañño`
other readings, each under 0.5% | 2.5 |
```

```endings
-nto, -ntā, -ntaṁ, -nte · 39,456 words end so, 14.3 in every thousand · 98% of them classed
🚹⨀⓪; ⨂⓪ | 23.6 | `bhante`
a particle or adverb | 22.8 | `āmantā`, `ekamantaṁ`, `yathābhirantaṁ`, `āpattisāmantā`, `ekamante`
a present participle (-anta, -māna) | 17.3 | `santo`, `santaṁ`, `passanto`, `viharanto`, `bhāvento`
🚹⨀② | 12.7 | `bhagavantaṁ`, `āyasmantaṁ`, `bhavantaṁ`, `dukkhassantaṁ`, `antaṁ`
an adjective, agreeing with its noun | 6.3 | `mahantaṁ`, `samantā`, `sabbāvantaṁ`, `piṇḍapātapaṭikkanto`, `evamāyupariyanto`
a past participle (-ta) | 4.1 | `abhikkantaṁ`, `nikkhanto`, `kantā`, `vūpasantā`, `vūpasantaṁ`
a verb form the table does not list | 3.7 | `viharantaṁ`, `āgacchantaṁ`, `gacchantaṁ`, `bhavantaṁ`, `carantaṁ`
🚹⨀①; ⨂① or ⓪ | 2.1 | `arahanto`, `āyasmanto`, `bhagavanto`, `santo`, `cakkhumanto`
🚹⨀① | 1.8 | `anto`, `sammākammanto`, `kūṭadanto`, `micchākammanto`, `danto`
🚹⨂① or ⓪ | 1.1 | `bhonto`, `bhavanto`
🚹⨀⑦; ⨂② | 0.9 | `āyasmante`, `ante`, `aparante`, `pubbante`, `pubbantāparante`
🚹⨀③ or ⑤ or ⓪; ⨂① or ⓪ | 0.7 | `mantā`, `kammantā`, `dantā`, `ārohantā`, `kantā`
other readings, each under 0.5% | 2.5 |
```

```endings
-ato, -to · 37,053 words end so, 13.4 in every thousand · 96% of them classed
a past participle (-ta) | 20.7 | `samannāgato`, `abyākato`, `paṭivirato`, `gato`, `aniyato`
an adjective, agreeing with its noun | 15.0 | `sato`, `anattato`, `mahato`, `uddhaccasahagato`, `sassato`
🚹⨀④ or ⑤ or ⑥ | 14.3 | `bhagavato`, `āyasmato`, `pāpimato`, `sutavato`, `cakkhumato`
*️⃣ a pronoun ⨀⑤ | 13.5 | `tato`, `yato`, `sato`, `parato`, `aññato`
🚻⨀⑤ | 8.4 | `aniccato`, `dukkhato`, `purato`, `ekato`, `cittato`
a present participle (-anta, -māna) | 8.2 | `viharato`, `passato`, `sato`, `jānato`, `bhāvayato`
🚹⨀⑤; ⨂⑤ | 7.2 | `kāyato`, `arahato`, `cittato`, `vipākato`, `khandhato`
🚹⨀① | 6.7 | `tathāgato`, `sugato`, `kālaṅkato`, `pabbato`, `revato`
🚹⨀④ or ⑥ | 1.8 | `arahato`, `sato`, `bhavato`
🚺⨀⑤ | 1.7 | `vācato`, `mato`, `sevato`, `nāsato`, `cittato`
a particle or adverb | 1.5 | `tato`, `ubhato`, `heṭṭhato`, `dukkhato`, `thūpakato`
a sandhi join, to be split | 0.6 | `yassāyasmato`, `panāyasmato`, `bhayamantarato`, `tassuttarato`, `kenassubbhāhato`
other readings, each under 0.5% | 0.4 |
```

```endings
-ino, -uno, -issa, -ussa · 14,896 words end so, 5.4 in every thousand · 87% of them classed
🚹⨀④ or ⑥ | 42.8 | `bhikkhuno`, `hetussa`, `bhikkhussa`, `vipassissa`, `satthuno`
an adjective, agreeing with its noun | 25.9 | `evaṁvādino`, `tādino`, `ātāpino`, `evaṁdiṭṭhino`, `anāgāmissa`
🚹⨀④ or ⑥; ⨂① or ② or ⓪ | 9.3 | `arūpino`, `sukhino`, `mahesino`, `kāmabhogino`, `yasassino`
*️⃣ a pronoun ⨀④ or ⑥ | 7.5 | `kissa`, `amussa`
🚻⨀④ or ⑥ | 3.0 | `vatthussa`, `cakkhussa`, `munino`, `āyuno`, `asucino`
a sandhi join, to be split | 2.0 | `hissa`, `itissa`, `yampissa`, `yepissa`, `yopissa`
🚹⨀⑥ | 1.9 | `gotrabhussa`, `vessabhussa`, `sayambhussa`, `viññussa`, `abhibhussa`
🚹⨀⓪ | 1.7 | `tissa`, `phussa`, `upatissa`, `tapussa`
an absolutive (-ya) | 1.5 | `abhinivissa`, `uddissa`, `phussa`, `ādissa`, `anodissa`
🔀🤘⨀ or 🔀🤟⨀ | 1.4 | `abhavissa`, `nābhavissa`, `agamissa`, `nālabhissa`
🚹⨀① | 1.2 | `jino`, `mahākappino`, `moḷiyaphagguno`, `phagguno`, `mahāsupino`
other readings, each under 0.5% | 1.8 |
```

```endings
-āyo, -iyo · 14,037 words end so, 5.1 in every thousand · 90% of them classed
🚺⨂① or ② or ⓪ | 47.5 | `bhikkhuniyo`, `āpattiyo`, `gāthāyo`, `jātiyo`, `itthiyo`
🚹⨀① | 26.6 | `ariyo`, `kāyo`, `khattiyo`, `piyo`, `pariyāyo`
an adjective, agreeing with its noun | 16.6 | `tatiyo`, `lokiyo`, `acchariyo`, `dvemāsappaṭicchannāyo`, `passaddhakāyo`
a number | 2.7 | `tatiyo`, `dutiyo`, `asītikoṭiyo`, `koṭiyo`
a participle in -tabba, -anīya, -ya | 2.6 | `upādāniyo`, `avandiyo`, `ganthaniyo`, `nīvaraṇiyo`, `sakkāyo`
*️⃣ a pronoun ⨂① or ② | 2.5 | `kāyo`, `tāyo`, `imāyo`, `sabbāyo`, `etāyo`
a present participle (-anta, -māna) | 0.6 | `upanighaṁsantiyo`, `pariggaṇhantiyo`, `vosāsantiyo`, `savantiyo`, `apassantiyo`
a past participle (-ta) | 0.5 | `paṭicchannāyo`, `appaṭicchannāyo`, `gaṇitāyo`, `pariggahitāyo`, `upasampannāyo`
other readings, each under 0.5% | 0.3 |
```

```endings
-māno, -mānā, -māne · 7,166 words end so, 2.6 in every thousand · 97% of them classed
a present participle (-anta, -māna) | 85.4 | `samāno`, `vadamāno`, `saṁvijjamānā`, `ākaṅkhamāno`, `caramāno`
an adjective, agreeing with its noun | 10.2 | `samāno`, `samānā`, `samāne`, `nimmāno`, `pahīnamāno`
🚹⨀① | 1.7 | `atimāno`, `asmimāno`, `omāno`, `mānātimāno`, `uggāhamāno`
🚻⨀⑦; ⨂② | 1.2 | `vattamāne`, `vimāne`
other readings, each under 0.5% | 1.4 |
```


## Words that end in `…ṁ`

```endings
-aṁ · 426,401 words end so, 154.6 in every thousand · 94% of them classed
🚻⨀① or ② or ⓪ | 26.0 | `rūpaṁ`, `ekaṁ`, `cittaṁ`, `dukkhaṁ`, `ñāṇaṁ`
🚹⨀② | 18.0 | `dhammaṁ`, `cittaṁ`, `khandhaṁ`, `maggaṁ`, `lokaṁ`
an adjective, agreeing with its noun | 11.3 | `yathābhūtaṁ`, `paraṁ`, `ajjhattaṁ`, `sahajātaṁ`, `purejātaṁ`
*️⃣ a pronoun ⨀① or ② | 8.6 | `taṁ`, `yaṁ`, `idaṁ`, `tvaṁ`, `imaṁ`
a past participle (-ta) | 7.1 | `saṁkhittaṁ`, `kataṁ`, `niṭṭhitaṁ`, `uppannaṁ`, `abyākataṁ`
a sandhi join, to be split | 5.0 | `hevaṁ`, `etamatthaṁ`, `caparaṁ`, `yadidaṁ`, `evamevaṁ`
a particle or adverb | 4.5 | `evaṁ`, `yaṁ`, `itthaṁ`, `idaṁ`, `sudaṁ`
a number | 4.2 | `ekaṁ`, `paṭhamaṁ`, `catutthaṁ`, `dvinnaṁ`, `catunnaṁ`
🚺⨀② | 3.6 | `kathaṁ`, `vedanaṁ`, `paṭhamaṁ`, `dhammaṁ`, `vācaṁ`
*️⃣ a pronoun ⨂④ or ⑥ | 3.4 | `tesaṁ`, `imesaṁ`, `sabbesaṁ`, `itaresaṁ`, `tāsaṁ`
*️⃣ a pronoun ⨀① | 2.8 | `ayaṁ`, `ahaṁ`
*️⃣ a pronoun ⨀② | 1.5 | `taṁ`, `maṁ`, `imaṁ`, `kiñcanaṁ`, `naṁ`
a verb form the table does not list | 1.0 | `netaṁ`, `sayaṁ`, `ussukkaṁ`, `veraṁ`, `etadavocaṁ`
a present participle (-anta, -māna) | 0.5 | `sayaṁ`, `passaṁ`, `sataṁ`, `passambhayaṁ`, `phalaṁ`
a participle in -tabba, -anīya, -ya | 0.5 | `daṭṭhabbaṁ`, `karaṇīyaṁ`, `sāraṇīyaṁ`, `vatthabbaṁ`, `pāṭikaṅkhaṁ`
other readings, each under 0.5% | 1.8 |
```

```endings
-ānaṁ, -īnaṁ, -ūnaṁ · 57,529 words end so, 20.9 in every thousand · 93% of them classed
🚹⨂④ or ⑥ | 29.1 | `khandhānaṁ`, `dhammānaṁ`, `asaññasattānaṁ`, `devānaṁ`, `āsavānaṁ`
🚻⨀① or ② or ⓪ | 18.9 | `jhānaṁ`, `nibbānaṁ`, `ṭhānaṁ`, `dānaṁ`, `sāvatthinidānaṁ`
an adjective, agreeing with its noun | 17.0 | `cittasamuṭṭhānaṁ`, `sampayuttakānaṁ`, `pacchimabhavikānaṁ`, `cittasamuṭṭhānānaṁ`, `dānaṁ`
🚻⨂④ or ⑥ | 14.3 | `rūpānaṁ`, `āpattisamuṭṭhānānaṁ`, `akusalānaṁ`, `pacchimānaṁ`, `saṁyojanānaṁ`
a present participle (-anta, -māna) | 8.5 | `upapajjantānaṁ`, `cavantānaṁ`, `jānaṁ`, `ujjhāyantānaṁ`, `khiyyantānaṁ`
a past participle (-ta) | 3.9 | `appasannānaṁ`, `sattānaṁ`, `attānaṁ`, `uppannānaṁ`, `samāpannānaṁ`
🚹⨀②; ⨂④ or ⑥ | 2.2 | `attānaṁ`, `rājānaṁ`, `addhānaṁ`, `brahmānaṁ`, `mahārājānaṁ`
🚺⨂④ or ⑥ | 2.1 | `mānaṁ`, `devatānaṁ`, `rūpasaññānaṁ`, `nānattasaññānaṁ`, `paṭighasaññānaṁ`
a sandhi join, to be split | 1.4 | `tassuddānaṁ`, `abhikkamosānaṁ`, `paṭikkamosānaṁ`, `yadāyasmantānaṁ`, `tadamariyānaṁ`
a particle or adverb | 1.1 | `tatonidānaṁ`, `anāgatamaddhānaṁ`, `atītamaddhānaṁ`, `nānaṁ`, `jānaṁ`
🚹⨀② | 1.0 | `attānaṁ`, `mahāmoggallānaṁ`, `mahākaccānaṁ`, `vimānaṁ`, `satipaṭṭhānaṁ`
other readings, each under 0.5% | 0.8 |
```

```endings
-iṁ · 29,202 words end so, 10.6 in every thousand · 95% of them classed
🚺⨀② | 37.5 | `āpattiṁ`, `duggatiṁ`, `diṭṭhiṁ`, `rattiṁ`, `samāpattiṁ`
⏮👆⨀ | 13.3 | `ahosiṁ`, `āpajjiṁ`, `uttariṁ`, `abbhaññāsiṁ`, `pabbajiṁ`
🚹⨀② | 10.5 | `dhammiṁ`, `añjaliṁ`, `apacayagāmiṁ`, `samādhiṁ`, `gahapatiṁ`
a particle or adverb | 9.9 | `saddhiṁ`, `kiṁ`, `tahiṁ`, `sakiṁ`, `kuhiṁ`
an adjective, agreeing with its noun | 9.0 | `sugatiṁ`, `vossaggapariṇāmiṁ`, `paññāvimuttiṁ`, `cetovimuttiṁ`, `upekkhāsatipārisuddhiṁ`
*️⃣ a pronoun ⨀① or ② | 7.2 | `kiṁ`
a present participle (-anta, -māna) | 3.0 | `āyatiṁ`, `satiṁ`, `santiṁ`, `gacchantiṁ`, `āyantiṁ`
*️⃣ a pronoun ⨀⑦ | 2.2 | `kismiṁ`, `asmiṁ`, `amusmiṁ`
🚻⨀⑦ | 2.1 | `vatthusmiṁ`, `cakkhusmiṁ`, `kapilavatthusmiṁ`, `āyusmiṁ`, `asucismiṁ`
🚹⨀⑦ | 1.7 | `samādhismiṁ`, `kīṭāgirismiṁ`, `mātukucchismiṁ`, `isigilismiṁ`, `dakkhiṇāgirismiṁ`
*️⃣ a pronoun ⨀① | 1.1 | `kiṁ`
🚻⨀① or ② | 1.1 | `byantiṁ`, `dadhiṁ`, `asuciṁ`, `suciṁ`, `sappiṁ`
a sandhi join, to be split | 0.8 | `tenañjaliṁ`, `amutrāsiṁ`, `tatrāpāsiṁ`, `devarajjamakārayiṁ`, `nāpahosiṁ`
other readings, each under 0.5% | 0.5 |
```

```endings
-āyaṁ, -iyaṁ · 28,261 words end so, 10.2 in every thousand · 95% of them classed
🚻⨀① or ② or ⓪ | 55.9 | `cakkhundriyaṁ`, `manindriyaṁ`, `brahmacariyaṁ`, `jīvitindriyaṁ`, `purisindriyaṁ`
🚺⨀⑦ | 11.9 | `sāvatthiyaṁ`, `dutiyaṁ`, `vesāliyaṁ`, `velāyaṁ`, `pathaviyaṁ`
🚹⨀② | 7.8 | `ariyaṁ`, `kāyaṁ`, `dutiyaṁ`, `apāyaṁ`, `piyaṁ`
an adjective, agreeing with its noun | 7.1 | `tatiyaṁ`, `lokiyaṁ`, `yāvatatiyaṁ`, `vatāyaṁ`, `asappāyaṁ`
🚺⨀② | 4.6 | `anagāriyaṁ`, `dutiyaṁ`, `tiriyaṁ`, `brahmacariyaṁ`, `tatiyaṁ`
a sandhi join, to be split | 3.6 | `yvāyaṁ`, `cāyaṁ`, `panāyaṁ`, `myāyaṁ`, `khvāyaṁ`
a number | 3.1 | `tatiyaṁ`, `dutiyaṁ`, `aṭṭhamiyaṁ`, `navamiyaṁ`, `catutthiyaṁ`
*️⃣ a pronoun ⨀⑦ | 2.6 | `kāyaṁ`, `tāyaṁ`, `yāyaṁ`, `nāyaṁ`, `sāyaṁ`
a participle in -tabba, -anīya, -ya | 2.2 | `nissaggiyaṁ`, `asaṅkhiyaṁ`, `akappiyaṁ`, `appaṭivattiyaṁ`, `kappiyaṁ`
a verb form the table does not list | 0.5 | `apāyaṁ`, `vāyaṁ`, `sajjhāyaṁ`, `jhāyaṁ`, `mamāyaṁ`
other readings, each under 0.5% | 0.6 |
```

```endings
-uṁ · 10,503 words end so, 3.8 in every thousand · 97% of them classed
⏮🤟⨂ | 34.8 | `ārocesuṁ`, `etadavocuṁ`, `ahesuṁ`, `paccassosuṁ`, `assosuṁ`
🚻⨀① or ② | 26.6 | `vatthuṁ`, `cakkhuṁ`, `kesamassuṁ`, `dhammacakkhuṁ`, `dibbacakkhuṁ`
🚹⨀② | 24.5 | `garuṁ`, `bhikkhuṁ`, `phāsuṁ`, `aṇuṁ`, `pāraguṁ`
an adjective, agreeing with its noun | 6.4 | `bahuṁ`, `ujuṁ`, `lahuṁ`, `vagguṁ`, `muduṁ`
a verb form the table does not list | 1.9 | `ahesuṁ`, `assosuṁ`, `āsuṁ`, `amaññaruṁ`, `karuṁ`
an infinitive (-tuṁ) | 1.6 | `vatthuṁ`, `abhihaṭṭhuṁ`, `daṭṭhuṁ`, `phuṭṭhuṁ`, `puṭṭhuṁ`
🚺⨀② | 1.1 | `yāguṁ`, `cīvararajjuṁ`, `aṅgārakāsuṁ`, `ūruṁ`, `kāsuṁ`
*️⃣ a pronoun ⨀② | 0.9 | `amuṁ`
⏮👆⨀ or ⏮🤟⨂ | 0.7 | `ahuṁ`, `pāturahuṁ`
↩️🤟⨂ | 0.6 | `āguṁ`, `addakkhuṁ`, `acchiduṁ`, `nājjhagamuṁ`, `dukkhamaccaguṁ`
other readings, each under 0.5% | 0.9 |
```

```endings
-asmiṁ, -amhi · 9,460 words end so, 3.4 in every thousand · 96% of them classed
*️⃣ a pronoun ⨀⑦ | 64.5 | `tasmiṁ`, `yasmiṁ`, `imasmiṁ`, `etasmiṁ`, `aññatarasmiṁ`
🚹⨀⑦ | 16.7 | `lokasmiṁ`, `kāyasmiṁ`, `puggalasmiṁ`, `manasmiṁ`, `saggamhi`
🚻⨀⑦ | 10.9 | `rūpasmiṁ`, `viññāṇasmiṁ`, `sīlasmiṁ`, `tiṁsakappasahassamhi`, `kappasatasahassamhi`
an adjective, agreeing with its noun | 3.2 | `amukasmiṁ`, `paramhi`, `sappaṭighamhi`, `asukasmiṁ`, `anidassanamhi`
a past participle (-ta) | 2.5 | `vimuttasmiṁ`, `atītasmiṁ`, `anāgatamhi`, `payātamhi`, `padinnamhi`
a number | 0.8 | `ekasmiṁ`, `satasahassamhi`, `ekamhi`, `catutthasmiṁ`, `dutiyasmiṁ`
a sandhi join, to be split | 0.6 | `camhi`, `balavamhi`, `kiñcanatasmiṁ`, `yāyamhi`, `cantalikkhasmiṁ`
a present participle (-anta, -māna) | 0.6 | `nibbattamānamhi`, `jāyamānasmiṁ`, `vattamānamhi`, `santasmiṁ`, `bhijjamānasmiṁ`
other readings, each under 0.5% | 0.2 |
```

```endings
-tuṁ · 6,586 words end so, 2.4 in every thousand · 76% of them classed
an infinitive (-tuṁ) | 65.3 | `kātuṁ`, `pahātuṁ`, `dātuṁ`, `viharituṁ`, `samanupassituṁ`
🚹⨀② | 18.3 | `hetuṁ`, `utuṁ`, `ajātasattuṁ`, `setuṁ`, `jantuṁ`
🚺⨀② | 11.0 | `rūpadhātuṁ`, `arūpadhātuṁ`, `kāmadhātuṁ`, `āpodhātuṁ`, `tejodhātuṁ`
a particle or adverb | 4.6 | `tikkhattuṁ`, `sahassakkhattuṁ`, `sattakkhattuṁ`, `chattiṁsakkhattuṁ`, `catukkhattuṁ`
other readings, each under 0.5% | 0.8 |
```

