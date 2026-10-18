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
analysis behind those tables: for every ending, every reading the dictionary allows, with the share of
the words that end so which take it, over the whole Tipiṭaka.

## How the shares were computed

The corpus is the Chaṭṭha Saṅgāyana Tipiṭaka as published at [tipitaka2500.github.io](https://tipitaka2500.github.io),
2,757,516 words. The method is the one the [Digital Pāḷi Dictionary](https://www.dpdict.net/) uses for its own
frequency tables: every word-form in the corpus is counted, and a form's count is credited to each headword
whose inflection table contains it, so that a headword's frequency is the sum of the counts of its forms.
Here the question runs the other way, which reading a form most likely has, and three steps answer it:

1. Every word that ends in one of the endings below is looked up in the dictionary, which lists the headwords
   whose tables contain it and the reading each table gives it (gender, number and ending for a noun; tense,
   person and number for a verb; a pronoun, a particle, a participle, an absolutive, an infinitive, a sandhi
   join).
2. Where a form belongs to several headwords, its count is divided among them in proportion to the Tipiṭaka
   frequency of each headword's *other* forms. A rare homograph cannot then borrow the frequency of the very
   form in dispute: `bhante` goes to the address form, not to `bhanta` ("wavering"), and `āyasmā` to
   `āyasmant`, not to the ⑤ of `āya` ("income").
3. The dictionary's entries for letters, roots, suffixes and verb endings, and its entries for grammatical terms (the "(gram)" headwords), are not candidates; a word the dictionary itself lists as a pronoun is read as one, and so is a particle, unless the particle is a frozen case form of a noun (`dukkhaṁ` "painfully", `tato` "from that"), which is read as that noun; a noun's own
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
both. The script that makes the tables, `tools/ending_shares.py` in the book's repository, can be rerun
against a newer dictionary or another corpus.

The symbols are those of the book: 🚹 🚺 🚻 the genders, ⨀ ⨂ singular and plural, ① to ⑦ and ⓪ the endings,
▶️ ⏹ ⏯ ⏮ ⏭ 🔀 🔄 ↩️ the eight sets of verb endings, 👆 🤘 🤟 the persons, *️⃣ a pronoun.

## Endings in `a`


### `-a`

272,115 words in the Tipiṭaka end so (98.7 in every thousand); 97% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| a particle or adverb | 55.1% | 146,017 | `ca`, `na`, `pana`, `idha`, `ceva` |
| 🚹⨀⓪ | 9.4% | 24,961 | `nava`, `mahārāja`, `ānanda`, `satta`, `brāhmaṇa` |
| a number | 5.9% | 15,587 | `pañca`, `nava`, `cha`, `terasa`, `ekādasa` |
| an absolutive (-ya) | 4.2% | 11,032 | `paṭicca`, `upasampajja`, `ārabbha`, `abhibhuyya`, `paricca` |
| 🚻 a form its table does not list | 4.0% | 10,573 | `vatthuñca`, `cakkhundriyañca`, `cakkhāyatanañca`, `rūpāyatanañca`, `upekkhindriyañca` |
| 🚹 a form its table does not list | 4.0% | 10,500 | `kāmarāgānusayañca`, `paṭighānusayañca`, `khandhañca`, `mānānusayañca`, `vicikicchānusayañca` |
| an adjective, agreeing with its noun | 3.3% | 8,823 | `yāva`, `cittasamuṭṭhānañca`, `sahajāta`, `cittasamuṭṭhānānañca`, `dasa` |
| a participle in -tabba, -anīya, -ya | 2.7% | 7,252 | `paṭicca`, `pahātabbañca`, `laddhāna`, `gayha`, `sakka` |
| *️⃣ a pronoun | 2.7% | 7,038 | `tañca`, `yañca`, `aññamañña`, `tasseva`, `katamañca` |
| a sandhi join, to be split | 1.9% | 5,139 | `ceva`, `vivicceva`, `evamāha`, `tenāha`, `idamavoca` |
| a verb form the table does not list | 1.7% | 4,489 | `etadavoca`, `avoca`, `attheva`, `eteva`, `punadeva` |
| a past participle (-ta) | 1.4% | 3,590 | `satta`, `vippayutta`, `sampayutta`, `abyākatañca`, `sampayuttañca` |
| 🚺 a form its table does not list | 0.9% | 2,514 | `kathañca`, `diṭṭheva`, `vuddhiyeva`, `pubbeva`, `āpodhātuñca` |
| 🚻⨀⓪ | 0.7% | 1,953 | `vata`, `indriya`, `jhāna`, `moggallāna`, `sunakkhatta` |
| ⏹🤘⨀ | 0.5% | 1,270 | `gaccha`, `nissaya`, `saha`, `cara`, `bhuñja` |
| other readings, each under 0.5% | 1.5% | 4,436 | |


### `-aṁ`

426,401 words in the Tipiṭaka end so (154.6 in every thousand); 94% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| 🚻⨀① or ② or ⓪ | 26.0% | 104,200 | `rūpaṁ`, `ekaṁ`, `cittaṁ`, `dukkhaṁ`, `ñāṇaṁ` |
| 🚹⨀② | 18.0% | 72,411 | `dhammaṁ`, `cittaṁ`, `khandhaṁ`, `maggaṁ`, `lokaṁ` |
| an adjective, agreeing with its noun | 11.3% | 45,458 | `yathābhūtaṁ`, `paraṁ`, `ajjhattaṁ`, `sahajātaṁ`, `purejātaṁ` |
| *️⃣ a pronoun ⨀① or ② | 8.6% | 34,555 | `taṁ`, `yaṁ`, `idaṁ`, `tvaṁ`, `imaṁ` |
| a past participle (-ta) | 7.1% | 28,672 | `saṁkhittaṁ`, `kataṁ`, `niṭṭhitaṁ`, `uppannaṁ`, `abyākataṁ` |
| a sandhi join, to be split | 5.0% | 20,164 | `hevaṁ`, `etamatthaṁ`, `caparaṁ`, `yadidaṁ`, `evamevaṁ` |
| a particle or adverb | 4.5% | 18,236 | `evaṁ`, `yaṁ`, `itthaṁ`, `idaṁ`, `sudaṁ` |
| a number | 4.2% | 17,027 | `ekaṁ`, `paṭhamaṁ`, `catutthaṁ`, `dvinnaṁ`, `catunnaṁ` |
| 🚺⨀② | 3.6% | 14,426 | `kathaṁ`, `vedanaṁ`, `paṭhamaṁ`, `dhammaṁ`, `vācaṁ` |
| *️⃣ a pronoun ⨂④ or ⑥ | 3.4% | 13,627 | `tesaṁ`, `imesaṁ`, `sabbesaṁ`, `itaresaṁ`, `tāsaṁ` |
| *️⃣ a pronoun ⨀① | 2.8% | 11,294 | `ayaṁ`, `ahaṁ` |
| *️⃣ a pronoun ⨀② | 1.5% | 6,216 | `taṁ`, `maṁ`, `imaṁ`, `kiñcanaṁ`, `naṁ` |
| a verb form the table does not list | 1.0% | 4,086 | `netaṁ`, `sayaṁ`, `ussukkaṁ`, `veraṁ`, `etadavocaṁ` |
| a present participle (-anta, -māna) | 0.5% | 2,180 | `sayaṁ`, `passaṁ`, `sataṁ`, `passambhayaṁ`, `phalaṁ` |
| a participle in -tabba, -anīya, -ya | 0.5% | 1,899 | `daṭṭhabbaṁ`, `karaṇīyaṁ`, `sāraṇīyaṁ`, `vatthabbaṁ`, `pāṭikaṅkhaṁ` |
| other readings, each under 0.5% | 1.8% | 6,736 | |


### `-assa`

89,097 words in the Tipiṭaka end so (32.3 in every thousand); 94% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| 🚹⨀④ or ⑥ | 35.1% | 29,236 | `dhammassa`, `kāyassa`, `cittassa`, `saṁghassa`, `puggalassa` |
| *️⃣ a pronoun ⨀④ or ⑥ | 20.7% | 17,287 | `tassa`, `yassa`, `imassa`, `kassa`, `etassa` |
| 🚻⨀④ or ⑥ | 19.5% | 16,273 | `dukkaṭassa`, `cittassa`, `pācittiyassa`, `dukkhassa`, `rūpassa` |
| an adjective, agreeing with its noun | 9.3% | 7,762 | `itthannāmassa`, `purejātassa`, `avitakkavicāramattassa`, `savitakkasavicārassa`, `avitakkaavicārassa` |
| a past participle (-ta) | 6.6% | 5,490 | `buddhassa`, `abyākatassa`, `samannāgatassa`, `samāpannassa`, `uppannassa` |
| a sandhi join, to be split | 3.5% | 2,955 | `yassa`, `evamassa`, `cassa`, `evametassa`, `panassa` |
| a present participle (-anta, -māna) | 2.3% | 1,932 | `bhaṇantassa`, `upapajjantassa`, `paṭivijānantassa`, `ajānantassa`, `vuṭṭhahantassa` |
| a particle or adverb | 1.2% | 1,032 | `tassa`, `divādivassa` |
| a number | 0.5% | 433 | `paṭhamassa`, `catutthassa`, `ekassa`, `dutiyassa`, `tatiyassa` |
| a participle in -tabba, -anīya, -ya | 0.5% | 385 | `pahātabbassa`, `pāṭidesanīyassa`, `sakkassa`, `pabbājanīyassa`, `neyyassa` |
| other readings, each under 0.5% | 0.6% | 565 | |


### `-asmā, -amhā`

7,696 words in the Tipiṭaka end so (2.8 in every thousand); 97% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| *️⃣ a pronoun ⨀⑤ | 28.2% | 2,104 | `tasmā`, `tamhā`, `yasmā`, `kasmā`, `etamhā` |
| 🚹⨀① | 24.8% | 1,851 | `āyasmā` |
| 🚹⨀① or ⓪; ⨂① | 19.8% | 1,477 | `āyasmā` |
| a sandhi join, to be split | 11.6% | 868 | `yenāyasmā`, `ayamāyasmā`, `iccāyasmā`, `panāyasmā`, `cāyasmā` |
| 🚻⨀⑤ | 10.6% | 789 | `agārasmā`, `dukkhasmā`, `khīramhā`, `navanītamhā`, `bandhanasmā` |
| 🚹⨀⑤ | 3.1% | 232 | `āyasmā`, `lokamhā`, `saṁghamhā`, `gedhamhā`, `aṇḍakosamhā` |
| an adjective, agreeing with its noun | 1.3% | 94 | `māyasmā`, `parasmā`, `amukamhā`, `samhā`, `idhāgatamhā` |
| other readings, each under 0.5% | 0.7% | 59 | |


### `-asmiṁ, -amhi`

9,460 words in the Tipiṭaka end so (3.4 in every thousand); 96% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| *️⃣ a pronoun ⨀⑦ | 64.5% | 5,868 | `tasmiṁ`, `yasmiṁ`, `imasmiṁ`, `etasmiṁ`, `aññatarasmiṁ` |
| 🚹⨀⑦ | 16.7% | 1,519 | `lokasmiṁ`, `kāyasmiṁ`, `puggalasmiṁ`, `manasmiṁ`, `saggamhi` |
| 🚻⨀⑦ | 10.9% | 988 | `rūpasmiṁ`, `viññāṇasmiṁ`, `sīlasmiṁ`, `tiṁsakappasahassamhi`, `kappasatasahassamhi` |
| an adjective, agreeing with its noun | 3.2% | 291 | `amukasmiṁ`, `paramhi`, `sappaṭighamhi`, `asukasmiṁ`, `anidassanamhi` |
| a past participle (-ta) | 2.5% | 224 | `vimuttasmiṁ`, `atītasmiṁ`, `anāgatamhi`, `payātamhi`, `padinnamhi` |
| a number | 0.8% | 68 | `ekasmiṁ`, `satasahassamhi`, `ekamhi`, `catutthasmiṁ`, `dutiyasmiṁ` |
| a sandhi join, to be split | 0.6% | 55 | `camhi`, `balavamhi`, `kiñcanatasmiṁ`, `yāyamhi`, `cantalikkhasmiṁ` |
| a present participle (-anta, -māna) | 0.6% | 55 | `nibbattamānamhi`, `jāyamānasmiṁ`, `vattamānamhi`, `santasmiṁ`, `bhijjamānasmiṁ` |
| other readings, each under 0.5% | 0.2% | 27 | |


### `-ato, -to`

37,053 words in the Tipiṭaka end so (13.4 in every thousand); 96% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| a past participle (-ta) | 20.7% | 7,382 | `samannāgato`, `abyākato`, `paṭivirato`, `gato`, `aniyato` |
| an adjective, agreeing with its noun | 15.0% | 5,356 | `sato`, `anattato`, `mahato`, `uddhaccasahagato`, `sassato` |
| 🚹⨀④ or ⑤ or ⑥ | 14.3% | 5,083 | `bhagavato`, `āyasmato`, `pāpimato`, `sutavato`, `cakkhumato` |
| *️⃣ a pronoun ⨀⑤ | 13.5% | 4,807 | `tato`, `yato`, `sato`, `parato`, `aññato` |
| 🚻⨀⑤ | 8.4% | 2,994 | `aniccato`, `dukkhato`, `purato`, `ekato`, `cittato` |
| a present participle (-anta, -māna) | 8.2% | 2,916 | `viharato`, `passato`, `sato`, `jānato`, `bhāvayato` |
| 🚹⨀⑤; ⨂⑤ | 7.2% | 2,571 | `kāyato`, `arahato`, `cittato`, `vipākato`, `khandhato` |
| 🚹⨀① | 6.7% | 2,389 | `tathāgato`, `sugato`, `kālaṅkato`, `pabbato`, `revato` |
| 🚹⨀④ or ⑥ | 1.8% | 635 | `arahato`, `sato`, `bhavato` |
| 🚺⨀⑤ | 1.7% | 618 | `vācato`, `mato`, `sevato`, `nāsato`, `cittato` |
| a particle or adverb | 1.5% | 534 | `tato`, `ubhato`, `heṭṭhato`, `dukkhato`, `thūpakato` |
| a sandhi join, to be split | 0.6% | 202 | `yassāyasmato`, `panāyasmato`, `bhayamantarato`, `tassuttarato`, `kenassubbhāhato` |
| other readings, each under 0.5% | 0.4% | 118 | |


### `-atā`

16,521 words in the Tipiṭaka end so (6 in every thousand); 91% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| a past participle (-ta) | 29.6% | 4,477 | `abyākatā`, `samannāgatā`, `bahulīkatā`, `paṭiviratā`, `gatā` |
| an adjective, agreeing with its noun | 19.9% | 3,007 | `yāvatā`, `ettāvatā`, `upekkhāsahagatā`, `mahatā`, `pītisahagatā` |
| 🚺⨀① or ③; ⨂① or ② or ⓪ | 19.6% | 2,958 | `devatā`, `cittassekaggatā`, `dhammatā`, `samūhatā`, `aniccatā` |
| 🚹⨀③ or ⑤ | 18.0% | 2,725 | `bhagavatā`, `āyasmatā`, `arahatā`, `cakkhumatā`, `satā` |
| a present participle (-anta, -māna) | 3.3% | 501 | `jānatā`, `passatā`, `ajjhāvasatā`, `asatā`, `ajānatā` |
| 🚹⨀③ or ⑤ or ⓪; ⨂① or ⓪ | 3.0% | 458 | `tathāgatā`, `anāgatā`, `pabbatā`, `sugatā`, `kālaṅkatā` |
| 🚹⨀③ | 2.4% | 364 | `bhagavatā`, `arahatā` |
| 🚻⨀③ or ⑤ or ⓪; ⨂① or ⓪ | 1.7% | 252 | `asaṅkhatā`, `katā`, `pañcasatā`, `diṭṭhigatā`, `sukatā` |
| a particle or adverb | 1.6% | 247 | `kittāvatā`, `tāvatā`, `ahovatā`, `asatā` |
| other readings, each under 0.5% | 0.7% | 114 | |


### `-asā, -aso, -asi`

9,554 words in the Tipiṭaka end so (3.5 in every thousand); 96% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| ▶️🤘⨀ | 18.1% | 1,667 | `maññasi`, `passasi`, `parisaṅkasi`, `icchasi`, `tiṭṭhasi` |
| a particle or adverb | 12.7% | 1,166 | `sabbaso`, `antamaso`, `ṭhānaso`, `anubyañjanaso`, `suttaso` |
| 🚹⨀③ or ⑤ | 12.7% | 1,164 | `manasā`, `cetasā`, `sirasā`, `sahasā`, `yasasā` |
| an adjective, agreeing with its noun | 12.5% | 1,147 | `cetasā`, `cetaso`, `ekarasā`, `mahāyaso`, `oraso` |
| 🚹⨀③ | 8.6% | 787 | `cetasā`, `manasā`, `sirasā`, `vacasā`, `jarasā` |
| 🚹⨀⑦ | 8.1% | 741 | `manasi`, `sirasi`, `urasi`, `sarasi`, `rahasi` |
| ⏭🤘⨀ | 6.7% | 614 | `bhavissasi`, `karissasi`, `gamissasi`, `sarissasi`, `pāpuṇissasi` |
| 🚹⨀④ or ⑥ | 5.3% | 490 | `cetaso`, `manaso`, `ayaso`, `vāyaso`, `chandaso` |
| 🚹⨀① | 4.2% | 387 | `yaso`, `divaso`, `raso`, `dhammaraso`, `attharaso` |
| ↩️🤟⨀ | 3.3% | 299 | `addasā`, `tamaddasā`, `vinasā` |
| 🚹⨀③ or ⑤ or ⓪; ⨂① or ⓪ | 2.8% | 256 | `rasā`, `makasā`, `vasā`, `rakkhasā`, `vehāyasā` |
| 🚹⨀① or ② | 1.0% | 96 | `yaso`, `raso`, `yasāyaso`, `ayaso` |
| ⏮🤘⨀ or ⏮🤟⨀ | 0.8% | 75 | `vasi`, `paṭimasi`, `anumasi`, `parāmasi`, `āmasi` |
| a sandhi join, to be split | 0.8% | 72 | `tvamasi`, `saso`, `gantumicchasi`, `payātumicchasi`, `laṅghetumicchasi` |
| 🚻⨀③ or ⑤ or ⓪; ⨂① or ⓪ | 0.8% | 71 | `rasā`, `sāhasā`, `kakkasā`, `mānasā`, `tidasā` |
| other readings, each under 0.5% | 1.5% | 163 | |


## Endings in `ā`


### `-ā`

293,685 words in the Tipiṭaka end so (106.5 in every thousand); 92% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| 🚹⨀③ or ⑤ or ⓪; ⨂① or ⓪ | 25.9% | 69,944 | `dhammā`, `hetupaccayā`, `khandhā`, `paccayā`, `saṅkhārā` |
| a particle or adverb | 16.5% | 44,456 | `vā`, `yathā`, `tadā`, `yadā`, `musā` |
| an adjective, agreeing with its noun | 14.1% | 38,076 | `bahiddhā`, `sambahulā`, `vedanā`, `sahajātā`, `pacchā` |
| 🚺⨀① or ③; ⨂① or ② or ⓪ | 10.4% | 28,009 | `vedanā`, `paññā`, `mā`, `saññā`, `cetanā` |
| 🚻⨀③ or ⑤ or ⓪; ⨂① or ⓪ | 9.6% | 25,967 | `akusalā`, `maraṇā`, `kusalā`, `tathā`, `dukkhā` |
| a past participle (-ta) | 6.5% | 17,475 | `pahīnā`, `sampayuttā`, `sattā`, `vippayuttā`, `saṅgahitā` |
| 🚹⨀① or ⓪; ⨂① | 2.1% | 5,738 | `bhagavā`, `cakkhumā`, `sutavā`, `pāpimā`, `iddhimā` |
| 🚹⨀① | 2.0% | 5,454 | `bhagavā`, `rājā`, `satthā`, `arahā` |
| *️⃣ a pronoun ⨀①; ⨂① or ② | 2.0% | 5,446 | `yā`, `katamā`, `sabbā`, `sā`, `kā` |
| 🚹⨀① or ⓪ | 1.8% | 4,968 | `rājā`, `attā`, `arahā`, `satthā`, `anattā` |
| 🚹⨂① or ⓪ | 1.4% | 3,711 | `khandhā`, `samaṇabrāhmaṇā`, `kusalā`, `sokaparidevadukkhadomanassupāyāsā`, `mahābhūtā` |
| *️⃣ a pronoun ⨂① or ② | 0.9% | 2,377 | `imā`, `tā`, `etā`, `nā`, `netā` |
| *️⃣ a pronoun ⨀① | 0.8% | 2,077 | `sā`, `esā`, `nesā`, `kā` |
| *️⃣ a pronoun ⨀③ or ⑤ | 0.6% | 1,717 | `mayā`, `tayā` |
| an absolutive (-tvā) | 0.6% | 1,608 | `disvā`, `anāpucchā`, `kattā`, `aladdhā`, `laddhā` |
| a present participle (-anta, -māna) | 0.6% | 1,559 | `sammā`, `labbhā`, `vijjā`, `samādapetā`, `kāretā` |
| a participle in -tabba, -anīya, -ya | 0.5% | 1,415 | `pāṭikaṅkhā`, `abhiññeyyā`, `daṭṭhabbā`, `sakkā`, `karaṇīyā` |
| a verb form the table does not list | 0.5% | 1,334 | `anusayā`, `nirodhā`, `jaññā`, `rājā`, `vūpasamā` |
| other readings, each under 0.5% | 3.1% | 8,753 | |


### `-āni, -īni, -ūni`

23,563 words in the Tipiṭaka end so (8.5 in every thousand); 94% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| 🚻⨂① or ② or ⓪ | 52.0% | 11,550 | `vassāni`, `pañcindriyāni`, `rūpāni`, `saccāni`, `indriyāni` |
| an adjective, agreeing with its noun | 19.2% | 4,274 | `dāni`, `pantāni`, `suciṇṇāni`, `ettakāni`, `bahūni` |
| *️⃣ a pronoun ⨂① or ② | 14.6% | 3,250 | `imāni`, `tāni`, `katamāni`, `yāni`, `sabbāni` |
| a past participle (-ta) | 7.0% | 1,562 | `nissaṭāni`, `pahīnāni`, `jātāni`, `satāni`, `vūpasantāni` |
| a sandhi join, to be split | 2.6% | 570 | `pañcimāni`, `cattārimāni`, `yassadāni`, `tīṇimāni`, `yānimāni` |
| a participle in -tabba, -anīya, -ya | 2.0% | 442 | `gahetabbāni`, `daṭṭhabbāni`, `dhāretabbāni`, `rajanīyāni`, `kātabbāni` |
| 🚺⨀① or ⓪ | 0.6% | 128 | `parihāni`, `saṁhāni`, `dhanajāni`, `hāni`, `yasoparihāni` |
| a particle or adverb | 0.6% | 123 | `idāni`, `svedāni` |
| a number | 0.5% | 112 | `uppalāni`, `cullāsītisahassāni`, `padumāni`, `satasahassāni`, `puṇḍarīkāni` |
| other readings, each under 0.5% | 1.1% | 221 | |


### `-ānaṁ, -īnaṁ, -ūnaṁ`

57,529 words in the Tipiṭaka end so (20.9 in every thousand); 93% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| 🚹⨂④ or ⑥ | 29.1% | 15,527 | `khandhānaṁ`, `dhammānaṁ`, `asaññasattānaṁ`, `devānaṁ`, `āsavānaṁ` |
| 🚻⨀① or ② or ⓪ | 18.9% | 10,076 | `jhānaṁ`, `nibbānaṁ`, `ṭhānaṁ`, `dānaṁ`, `sāvatthinidānaṁ` |
| an adjective, agreeing with its noun | 17.0% | 9,060 | `cittasamuṭṭhānaṁ`, `sampayuttakānaṁ`, `pacchimabhavikānaṁ`, `cittasamuṭṭhānānaṁ`, `dānaṁ` |
| 🚻⨂④ or ⑥ | 14.3% | 7,628 | `rūpānaṁ`, `āpattisamuṭṭhānānaṁ`, `akusalānaṁ`, `pacchimānaṁ`, `saṁyojanānaṁ` |
| a present participle (-anta, -māna) | 8.5% | 4,518 | `upapajjantānaṁ`, `cavantānaṁ`, `jānaṁ`, `ujjhāyantānaṁ`, `khiyyantānaṁ` |
| a past participle (-ta) | 3.9% | 2,065 | `appasannānaṁ`, `sattānaṁ`, `attānaṁ`, `uppannānaṁ`, `samāpannānaṁ` |
| 🚹⨀②; ⨂④ or ⑥ | 2.2% | 1,163 | `attānaṁ`, `rājānaṁ`, `addhānaṁ`, `brahmānaṁ`, `mahārājānaṁ` |
| 🚺⨂④ or ⑥ | 2.1% | 1,133 | `mānaṁ`, `devatānaṁ`, `rūpasaññānaṁ`, `nānattasaññānaṁ`, `paṭighasaññānaṁ` |
| a sandhi join, to be split | 1.4% | 751 | `tassuddānaṁ`, `abhikkamosānaṁ`, `paṭikkamosānaṁ`, `yadāyasmantānaṁ`, `tadamariyānaṁ` |
| a particle or adverb | 1.1% | 569 | `tatonidānaṁ`, `anāgatamaddhānaṁ`, `atītamaddhānaṁ`, `nānaṁ`, `jānaṁ` |
| 🚹⨀② | 1.0% | 516 | `attānaṁ`, `mahāmoggallānaṁ`, `mahākaccānaṁ`, `vimānaṁ`, `satipaṭṭhānaṁ` |
| other readings, each under 0.5% | 0.8% | 428 | |


### `-āya`

48,067 words in the Tipiṭaka end so (17.4 in every thousand); 94% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| 🚺⨀③ or ④ or ⑤ or ⑥ or ⑦ | 28.8% | 13,026 | `vedanāya`, `bhāvanāya`, `vācāya`, `kathāya`, `abhiññāya` |
| 🚻⨀④ | 17.2% | 7,765 | `dukkhāya`, `sukhāya`, `pahānāya`, `adukkhamasukhāya`, `dassanāya` |
| 🚹⨀④ | 17.0% | 7,672 | `piṇḍāya`, `pasādāya`, `atthāya`, `adhigamāya`, `uppādāya` |
| an adjective, agreeing with its noun | 13.2% | 5,977 | `vedanāya`, `vācāya`, `sañcetanikāya`, `paññāya`, `dibbāya` |
| an absolutive (-ya) | 10.5% | 4,754 | `nissāya`, `pahāya`, `ādāya`, `upanissāya`, `samādāya` |
| a particle or adverb | 3.2% | 1,442 | `upādāya`, `upanissāya`, `nissāya`, `sabbattatāya`, `paṭilābhatthāya` |
| a past participle (-ta) | 3.1% | 1,384 | `appaṭicchannāya`, `hitāya`, `abhikkantāya`, `mattāya`, `daḷhāya` |
| *️⃣ a pronoun ⨀③ or ⑤ | 1.2% | 530 | `tāya`, `etāya` |
| a participle in -tabba, -anīya, -ya | 1.1% | 501 | `pahāya`, `sākacchāya`, `anavajjāya`, `asaṁhāriyāya`, `laddhāya` |
| a sandhi join, to be split | 0.9% | 405 | `pattacīvaramādāya`, `tāyevappāhāratāya`, `catthāya`, `dantebhidantamādhāya`, `saṁvāsamanvāya` |
| 🚺⨀③ | 0.9% | 395 | `sammappaññāya`, `paññāya`, `paṭisaṅkhāya`, `aññāya` |
| a number | 0.8% | 362 | `ekāya`, `paṭhamāya`, `cattārīsāya`, `tiṁsāya`, `cattālīsāya` |
| ⏹🤘⨀ | 0.7% | 314 | `paññāya`, `viññāya`, `jhāya`, `pajāya`, `vihāya` |
| *️⃣ a pronoun ⨀③ or ④ or ⑤ or ⑥ or ⑦ | 0.6% | 266 | `yāya`, `aññāya`, `sabbāya`, `anaññāya`, `kāya` |
| other readings, each under 0.5% | 1.0% | 432 | |


### `-āyaṁ, -iyaṁ`

28,261 words in the Tipiṭaka end so (10.2 in every thousand); 95% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| 🚻⨀① or ② or ⓪ | 55.9% | 15,012 | `cakkhundriyaṁ`, `manindriyaṁ`, `brahmacariyaṁ`, `jīvitindriyaṁ`, `purisindriyaṁ` |
| 🚺⨀⑦ | 11.9% | 3,183 | `sāvatthiyaṁ`, `dutiyaṁ`, `vesāliyaṁ`, `velāyaṁ`, `pathaviyaṁ` |
| 🚹⨀② | 7.8% | 2,096 | `ariyaṁ`, `kāyaṁ`, `dutiyaṁ`, `apāyaṁ`, `piyaṁ` |
| an adjective, agreeing with its noun | 7.1% | 1,906 | `tatiyaṁ`, `lokiyaṁ`, `yāvatatiyaṁ`, `vatāyaṁ`, `asappāyaṁ` |
| 🚺⨀② | 4.6% | 1,236 | `anagāriyaṁ`, `dutiyaṁ`, `tiriyaṁ`, `brahmacariyaṁ`, `tatiyaṁ` |
| a sandhi join, to be split | 3.6% | 960 | `yvāyaṁ`, `cāyaṁ`, `panāyaṁ`, `myāyaṁ`, `khvāyaṁ` |
| a number | 3.1% | 838 | `tatiyaṁ`, `dutiyaṁ`, `aṭṭhamiyaṁ`, `navamiyaṁ`, `catutthiyaṁ` |
| *️⃣ a pronoun ⨀⑦ | 2.6% | 709 | `kāyaṁ`, `tāyaṁ`, `yāyaṁ`, `nāyaṁ`, `sāyaṁ` |
| a participle in -tabba, -anīya, -ya | 2.2% | 597 | `nissaggiyaṁ`, `asaṅkhiyaṁ`, `akappiyaṁ`, `appaṭivattiyaṁ`, `kappiyaṁ` |
| a verb form the table does not list | 0.5% | 135 | `apāyaṁ`, `vāyaṁ`, `sajjhāyaṁ`, `jhāyaṁ`, `mamāyaṁ` |
| other readings, each under 0.5% | 0.6% | 169 | |


### `-āyo, -iyo`

14,037 words in the Tipiṭaka end so (5.1 in every thousand); 90% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| 🚺⨂① or ② or ⓪ | 47.5% | 5,970 | `bhikkhuniyo`, `āpattiyo`, `gāthāyo`, `jātiyo`, `itthiyo` |
| 🚹⨀① | 26.6% | 3,350 | `ariyo`, `kāyo`, `khattiyo`, `piyo`, `pariyāyo` |
| an adjective, agreeing with its noun | 16.6% | 2,088 | `tatiyo`, `lokiyo`, `acchariyo`, `dvemāsappaṭicchannāyo`, `passaddhakāyo` |
| a number | 2.7% | 342 | `tatiyo`, `dutiyo`, `asītikoṭiyo`, `koṭiyo` |
| a participle in -tabba, -anīya, -ya | 2.6% | 331 | `upādāniyo`, `avandiyo`, `ganthaniyo`, `nīvaraṇiyo`, `sakkāyo` |
| *️⃣ a pronoun ⨂① or ② | 2.5% | 313 | `kāyo`, `tāyo`, `imāyo`, `sabbāyo`, `etāyo` |
| a present participle (-anta, -māna) | 0.6% | 71 | `upanighaṁsantiyo`, `pariggaṇhantiyo`, `vosāsantiyo`, `savantiyo`, `apassantiyo` |
| a past participle (-ta) | 0.5% | 67 | `paṭicchannāyo`, `appaṭicchannāyo`, `gaṇitāyo`, `pariggahitāyo`, `upasampannāyo` |
| other readings, each under 0.5% | 0.3% | 40 | |


## Endings in `e`


### `-e`

179,514 words in the Tipiṭaka end so (65.1 in every thousand); 92% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| 🚹⨀⑦; ⨂② | 23.3% | 38,595 | `khandhe`, `samaye`, `loke`, `dhamme`, `paṭisandhikkhaṇe` |
| 🚹⨂⓪ | 16.1% | 26,685 | `bhikkhave`, `have`, `bandhave`, `pasave`, `sindhave` |
| *️⃣ a pronoun ⨂① or ② | 13.1% | 21,700 | `ye`, `te`, `ime`, `katame`, `sabbe` |
| 🚻⨀⑦; ⨂② | 12.8% | 21,167 | `ārammaṇe`, `anantare`, `jetavane`, `indriye`, `jhāne` |
| *️⃣ a pronoun ⨀② or ③ or ④ or ⑤ or ⑥ | 4.2% | 7,030 | `me` |
| an adjective, agreeing with its noun | 3.9% | 6,510 | `apariyāpanne`, `rūpāvacare`, `arūpāvacare`, `sadevake`, `aneke` |
| a number | 3.7% | 6,134 | `dve`, `te`, `duve`, `ekattiṁse`, `catutthe` |
| *️⃣ a pronoun ⨀② or ③ or ④ or ⑥; ⨂① or ② | 3.5% | 5,733 | `te` |
| a particle or adverb | 3.2% | 5,336 | `sace`, `ce`, `re`, `ve`, `ajjatagge` |
| *️⃣ a pronoun ⨀② or ③ or ④ or ⑥ | 3.2% | 5,282 | `me`, `te` |
| a participle in -tabba, -anīya, -ya | 2.3% | 3,852 | `vattabbe`, `pahātabbe`, `phoṭṭhabbe`, `ramme`, `veditabbe` |
| 🚹 a form its table does not list | 2.3% | 3,824 | `dve` |
| ⏯👆⨀ or ⏯🤘⨀ or ⏯🤟⨀ | 2.0% | 3,344 | `kappe`, `care`, `maññe`, `upanissaye`, `bhave` |
| 🚺⨀⓪ | 1.4% | 2,296 | `santike`, `pubbe`, `āsevane`, `ayye`, `visākhe` |
| a sandhi join, to be split | 1.3% | 2,148 | `pañcime`, `cattārome`, `tañce`, `tadahuposathe`, `dveme` |
| a past participle (-ta) | 1.0% | 1,604 | `pahīne`, `buddhe`, `parisuddhe`, `hīne`, `samudāciṇṇe` |
| *️⃣ a pronoun ⨂① | 0.6% | 931 | `ime`, `sabbe`, `aññe`, `apare`, `pare` |
| 🚹⨂② | 0.5% | 766 | `khandhe`, `brāhmaṇagahapatike`, `candimasūriye`, `kusale`, `mittāmacce` |
| other readings, each under 0.5% | 1.6% | 2,888 | |


### `-ehi, -īhi, -ūhi, -āhi`

22,217 words in the Tipiṭaka end so (8.1 in every thousand); 93% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| 🚹⨂③ or ⑤ | 35.2% | 7,297 | `dhammehi`, `khandhehi`, `kāmehi`, `ākārehi`, `samathehi` |
| *️⃣ a pronoun ⨂③ or ⑤ | 18.5% | 3,842 | `imehi`, `katamehi`, `tehi`, `yehi`, `imāhi` |
| 🚻⨂③ or ⑤ | 18.1% | 3,750 | `samuṭṭhānehi`, `aṅgehi`, `ṭhānehi`, `akusalehi`, `āyatanehi` |
| an adjective, agreeing with its noun | 10.2% | 2,116 | `dibbehi`, `ariyakantehi`, `mudutarehi`, `parehi`, `akhaṇḍehi` |
| ⏹🤘⨀ | 6.8% | 1,420 | `dehi`, `vadehi`, `jānāhi`, `kāmehi`, `paññapehi` |
| a sandhi join, to be split | 3.4% | 696 | `pañcahaṅgehi`, `tīhaṅgehi`, `chahaṅgehi`, `aṭṭhahaṅgehi`, `dasahaṅgehi` |
| 🚺⨂③ or ⑤ | 2.7% | 556 | `gāthāhi`, `kammavācāhi`, `devatāhi`, `vedanāhi`, `vācāhi` |
| a past participle (-ta) | 2.0% | 418 | `sampayuttehi`, `aparāmaṭṭhehi`, `saṁkiliṭṭhehi`, `asaṁvutehi`, `abhiññātehi` |
| a particle or adverb | 1.9% | 401 | `tīhākārehi`, `pañcahākārehi`, `catūhākārehi`, `sattahākārehi`, `dasahākārehi` |
| a participle in -tabba, -anīya, -ya | 0.5% | 111 | `āvaraṇīyehi`, `pahātabbehi`, `rajanīyehi`, `phoṭṭhabbehi`, `asaṅkhyeyyehi` |
| other readings, each under 0.5% | 0.6% | 127 | |


### `-ena`

80,399 words in the Tipiṭaka end so (29.2 in every thousand); 87% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| 🚹⨀③ | 45.8% | 31,979 | `samayena`, `ārammaṇapaccayena`, `upanissayapaccayena`, `hetupaccayena`, `anantarapaccayena` |
| 🚻⨀③ | 19.4% | 13,553 | `dassanena`, `cittena`, `ekena`, `ñāṇena`, `kammena` |
| *️⃣ a pronoun ⨀③ | 14.7% | 10,264 | `tena`, `yena`, `kena`, `etena`, `aññena` |
| an adjective, agreeing with its noun | 9.6% | 6,700 | `dibbena`, `duvidhena`, `atikkantamānusakena`, `aparena`, `paṭibalena` |
| a past participle (-ta) | 3.8% | 2,620 | `saṁkhittena`, `samannāgatena`, `visuddhena`, `byattena`, `vippasannena` |
| a particle or adverb | 3.4% | 2,369 | `tena`, `yena`, `tenaṅgena`, `assāsavasena`, `passāsavasena` |
| a number | 0.9% | 647 | `ekena`, `paṭhamena`, `dutiyena`, `catutthena`, `tatiyena` |
| 🚹⨀⓪ | 0.9% | 634 | `nāgasena`, `upasena`, `udena`, `sena` |
| a present participle (-anta, -māna) | 0.7% | 474 | `appaṭighaṁsantena`, `sampassamānena`, `nikkhipantena`, `asaṅghaṭṭentena`, `viharantena` |
| other readings, each under 0.5% | 0.7% | 509 | |


### `-esu, -īsu, -ūsu, -āsu`

11,735 words in the Tipiṭaka end so (4.3 in every thousand); 97% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| 🚹⨂⑦ | 45.1% | 5,135 | `dhammesu`, `kāmesu`, `manussesu`, `kusalesu`, `devesu` |
| 🚻⨂⑦ | 19.9% | 2,271 | `kusalesu`, `indriyesu`, `sikkhāpadesu`, `sīlesu`, `rūpesu` |
| an adjective, agreeing with its noun | 10.4% | 1,188 | `vedanāsu`, `aṇumattesu`, `paccantimesu`, `manāpiyesu`, `cakkhuviññeyyesu` |
| 🚺⨂⑦ | 8.0% | 910 | `vedanāsu`, `āpadāsu`, `parisāsu`, `saṅkhārupekkhāsu`, `paralābhasakkāragarukāramānanavandanapūjanāsu` |
| *️⃣ a pronoun ⨂⑦ | 7.3% | 836 | `tesu`, `imesu`, `sabbesu`, `tāsu`, `etesu` |
| a past participle (-ta) | 4.5% | 512 | `ananussutesu`, `uparuddhesu`, `sattesu`, `bhaggesu`, `paccuppannesu` |
| a present participle (-anta, -māna) | 1.4% | 157 | `bhāviyamānesu`, `santesu`, `ḍayhamānesu`, `parivattantesu`, `bhaññamānesu` |
| a participle in -tabba, -anīya, -ya | 1.3% | 147 | `vajjesu`, `rajanīyesu`, `sakkesu`, `upādāniyesu`, `sacchikaraṇīyesu` |
| 🚹⨀① or ⓪ | 1.1% | 122 | `phāsu`, `aphāsu` |
| a particle or adverb | 0.9% | 100 | `phāsu`, `tadāsu` |
| other readings, each under 0.5% | 0.1% | 15 | |


### `-etha`

1,173 words in the Tipiṭaka end so (0.4 in every thousand); 98% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| ⏯🤘⨂ | 58.3% | 674 | `labhetha`, `pahīyetha`, `vadetha`, `jāyetha`, `yajetha` |
| ⏯🤘⨂ or ⏹🤘⨂ or ▶️🤘⨂ | 37.9% | 437 | `detha`, `dhāretha`, `bhāvetha`, `desetha`, `nisāmetha` |
| a verb form the table does not list | 3.8% | 44 | `kubbetha`, `labhetha`, `paṭisaṁvediyetha`, `nikubbetha`, `dajjetha` |


### `-eyya…`

16,701 words in the Tipiṭaka end so (6.1 in every thousand); 98% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| ⏯🤟⨀ | 59.3% | 9,682 | `vadeyya`, `kareyya`, `gaccheyya`, `bhāseyya`, `passeyya` |
| a verb form the table does not list | 11.1% | 1,805 | `seyyaṁ`, `vineyya`, `pajāneyyaṁ`, `dadeyya`, `kareyya` |
| ⏯🤟⨂ | 9.4% | 1,526 | `vadeyyuṁ`, `uppajjeyyuṁ`, `anvāssaveyyuṁ`, `puccheyyuṁ`, `kareyyuṁ` |
| a participle in -tabba, -anīya, -ya | 4.4% | 717 | `abhiññeyyaṁ`, `vineyya`, `viññeyyaṁ`, `pariññeyyaṁ`, `kareyya` |
| 🚻⨀① or ② or ⓪ | 3.8% | 618 | `abhiññeyyaṁ`, `sāṭheyyaṁ`, `seyyāvasathapadīpeyyaṁ`, `kāyamoneyyaṁ`, `vacīmoneyyaṁ` |
| ⏯🤘⨂ | 3.4% | 549 | `uddiseyyātha`, `samanupasseyyātha`, `byākareyyātha`, `jāneyyātha`, `paṭipuccheyyātha` |
| ⏯🤘⨀ | 2.7% | 434 | `jāneyyāsi`, `bhāveyyāsi`, `byākareyyāsi`, `vadeyyāsi`, `passeyyāsi` |
| ⏯👆⨂ | 2.2% | 354 | `labheyyāma`, `tenupasaṅkameyyāma`, `kareyyāma`, `passeyyāma`, `āroceyyāma` |
| an adjective, agreeing with its noun | 1.3% | 210 | `cakkhuviññeyyaṁ`, `saddhādeyyaṁ`, `maṇḍapeyyaṁ`, `dassaneyyaṁ`, `sotaviññeyyaṁ` |
| an absolutive (-ya) | 0.9% | 141 | `vineyya`, `viceyya`, `niccheyya`, `anabhineyya`, `vijeyya` |
| 🚺⨀② | 0.7% | 119 | `sahaseyyaṁ`, `seyyaṁ`, `sīhaseyyaṁ`, `gabbhaseyyaṁ`, `nīcaseyyaṁ` |
| ⏯👆⨀ | 0.5% | 85 | `byākareyyaṁ`, `paṭikareyyaṁ`, `nappaṭikareyyaṁ`, `abhisaṅkhareyyaṁ`, `kareyyāmi` |
| other readings, each under 0.5% | 0.5% | 77 | |


## Endings in `i and ī`


### `-i`

147,357 words in the Tipiṭaka end so (53.4 in every thousand); 97% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| a particle or adverb | 46.2% | 65,772 | `ti`, `hi`, `api`, `yadi`, `tipi` |
| a number | 12.4% | 17,650 | `tīṇi`, `cattāri`, `pañcahi`, `chahi`, `sattahi` |
| ▶️🤟⨀ or ▶️🤟⨂ | 6.2% | 8,887 | `atthi`, `natthi`, `karaṇīyamatthi` |
| 🚹⨀① or ⓪ | 4.5% | 6,368 | `atthi`, `upāli`, `samādhi`, `sammāsamādhi`, `gāmaṇi` |
| ⏮🤘⨀ or ⏮🤟⨀ | 4.1% | 5,907 | `nisīdi`, `udapādi`, `vigarahi`, `sammodi`, `uttari` |
| 🚹 a form its table does not list | 3.7% | 5,336 | `ayampi`, `saṁsaṭṭhavāropi`, `paccayavāropi`, `ekadhammampi`, `dutiyampi` |
| *️⃣ a pronoun | 3.3% | 4,664 | `tampi`, `ayampi`, `yampi`, `idampi`, `ahampi` |
| an adjective, agreeing with its noun | 2.9% | 4,181 | `atthi`, `aparehipi`, `tatiyampi`, `evaṁdiṭṭhi`, `kathañhi` |
| 🚺⨀① or ⓪ | 2.8% | 3,941 | `diṭṭhi`, `sammādiṭṭhi`, `micchādiṭṭhi`, `sakkāyadiṭṭhi`, `iddhi` |
| a sandhi join, to be split | 2.4% | 3,393 | `seyyathāpi`, `kiñcāpi`, `khomhi`, `panaññampi`, `cepi` |
| 🚻 a form its table does not list | 2.3% | 3,335 | `paccanīyampi`, `ayampi`, `ekampi`, `abyābajjhampi`, `cetasikampi` |
| 🚺 a form its table does not list | 1.3% | 1,803 | `kathañhi`, `dutiyampi`, `tatiyampi`, `gaṇanāpi`, `pathaviyāpi` |
| *️⃣ a pronoun ⨂③ or ⑤ | 1.0% | 1,425 | `katihi`, `kehici`, `ehi`, `kāhici`, `katibhi` |
| a verb form the table does not list | 0.9% | 1,309 | `etampi`, `yepi`, `sahāpi`, `kārāpentipi`, `harantipi` |
| *️⃣ a pronoun ⨀① or ② | 0.6% | 914 | `kiñci` |
| 🚹⨀⑦ | 0.5% | 764 | `attani`, `satthari`, `vasimhi`, `samādhimhi`, `sammāsamādhimhi` |
| *️⃣ a pronoun ⨂① or ② | 0.5% | 705 | `keci`, `kānici` |
| other readings, each under 0.5% | 4.0% | 6,118 | |


### `-iṁ`

29,202 words in the Tipiṭaka end so (10.6 in every thousand); 95% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| 🚺⨀② | 37.5% | 10,441 | `āpattiṁ`, `duggatiṁ`, `diṭṭhiṁ`, `rattiṁ`, `samāpattiṁ` |
| ⏮👆⨀ | 13.3% | 3,708 | `ahosiṁ`, `āpajjiṁ`, `uttariṁ`, `abbhaññāsiṁ`, `pabbajiṁ` |
| 🚹⨀② | 10.5% | 2,916 | `dhammiṁ`, `añjaliṁ`, `apacayagāmiṁ`, `samādhiṁ`, `gahapatiṁ` |
| a particle or adverb | 9.9% | 2,767 | `saddhiṁ`, `kiṁ`, `tahiṁ`, `sakiṁ`, `kuhiṁ` |
| an adjective, agreeing with its noun | 9.0% | 2,513 | `sugatiṁ`, `vossaggapariṇāmiṁ`, `paññāvimuttiṁ`, `cetovimuttiṁ`, `upekkhāsatipārisuddhiṁ` |
| *️⃣ a pronoun ⨀① or ② | 7.2% | 2,011 | `kiṁ` |
| a present participle (-anta, -māna) | 3.0% | 827 | `āyatiṁ`, `satiṁ`, `santiṁ`, `gacchantiṁ`, `āyantiṁ` |
| *️⃣ a pronoun ⨀⑦ | 2.2% | 619 | `kismiṁ`, `asmiṁ`, `amusmiṁ` |
| 🚻⨀⑦ | 2.1% | 582 | `vatthusmiṁ`, `cakkhusmiṁ`, `kapilavatthusmiṁ`, `āyusmiṁ`, `asucismiṁ` |
| 🚹⨀⑦ | 1.7% | 463 | `samādhismiṁ`, `kīṭāgirismiṁ`, `mātukucchismiṁ`, `isigilismiṁ`, `dakkhiṇāgirismiṁ` |
| *️⃣ a pronoun ⨀① | 1.1% | 318 | `kiṁ` |
| 🚻⨀① or ② | 1.1% | 316 | `byantiṁ`, `dadhiṁ`, `asuciṁ`, `suciṁ`, `sappiṁ` |
| a sandhi join, to be split | 0.8% | 211 | `tenañjaliṁ`, `amutrāsiṁ`, `tatrāpāsiṁ`, `devarajjamakārayiṁ`, `nāpahosiṁ` |
| other readings, each under 0.5% | 0.5% | 133 | |


### `-iṁsu`

2,287 words in the Tipiṭaka end so (0.8 in every thousand); 96% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| ⏮🤟⨂ | 92.7% | 2,046 | `tenupasaṅkamiṁsu`, `nisīdiṁsu`, `sammodiṁsu`, `bhuñjiṁsu`, `parimucciṁsu` |
| a particle or adverb | 5.2% | 115 | `kiṁsu` |
| a verb form the table does not list | 2.1% | 45 | `pakkamiṁsu`, `abhaviṁsu`, `abhuñjiṁsu` |


### `-inā, -unā`

5,636 words in the Tipiṭaka end so (2 in every thousand); 97% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| 🚹⨀③ or ⑤ | 48.2% | 2,644 | `bhikkhunā`, `yoginā`, `brahmunā`, `ñāṇagginā`, `pāṇinā` |
| *️⃣ a pronoun ⨀③ | 17.1% | 939 | `iminā`, `amunā` |
| 🚻⨀③ or ⑤ | 17.1% | 936 | `cakkhunā`, `kammunā`, `vatthunā`, `āyunā`, `asucinā` |
| an adjective, agreeing with its noun | 5.7% | 313 | `ahorattānusikkhinā`, `agginā`, `vārinā`, `sakadāgāminā`, `anāgāminā` |
| a present participle (-anta, -māna) | 5.4% | 297 | `vinā`, `anutthunā`, `jinā`, `ajinā` |
| 🚹⨀③ | 1.6% | 86 | `bhikkhunā`, `pāṇinā`, `brahmunā`, `pitunā`, `bhattunā` |
| 🚺⨀① or ③; ⨂① or ② or ⓪ | 1.3% | 72 | `yamunā`, `dosinā`, `kaṇhājinā`, `tasinā`, `kāmatasinā` |
| a particle or adverb | 1.2% | 67 | `sotthinā`, `punā`, `adhunā` |
| 🚻⨀③ or ⑤ or ⓪; ⨂① or ⓪ | 1.2% | 67 | `methunā`, `supinā`, `vipinā`, `kharājinā`, `kathinā` |
| a verb form the table does not list | 0.5% | 25 | `vinā`, `jinā`, `anutthunā`, `ajinā`, `odhinā` |
| other readings, each under 0.5% | 0.8% | 43 | |


### `-ino, -uno, -issa, -ussa`

14,896 words in the Tipiṭaka end so (5.4 in every thousand); 87% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| 🚹⨀④ or ⑥ | 42.8% | 5,567 | `bhikkhuno`, `hetussa`, `bhikkhussa`, `vipassissa`, `satthuno` |
| an adjective, agreeing with its noun | 25.9% | 3,362 | `evaṁvādino`, `tādino`, `ātāpino`, `evaṁdiṭṭhino`, `anāgāmissa` |
| 🚹⨀④ or ⑥; ⨂① or ② or ⓪ | 9.3% | 1,203 | `arūpino`, `sukhino`, `mahesino`, `kāmabhogino`, `yasassino` |
| *️⃣ a pronoun ⨀④ or ⑥ | 7.5% | 981 | `kissa`, `amussa` |
| 🚻⨀④ or ⑥ | 3.0% | 393 | `vatthussa`, `cakkhussa`, `munino`, `āyuno`, `asucino` |
| a sandhi join, to be split | 2.0% | 255 | `hissa`, `itissa`, `yampissa`, `yepissa`, `yopissa` |
| 🚹⨀⑥ | 1.9% | 247 | `gotrabhussa`, `vessabhussa`, `sayambhussa`, `viññussa`, `abhibhussa` |
| 🚹⨀⓪ | 1.7% | 216 | `tissa`, `phussa`, `upatissa`, `tapussa` |
| an absolutive (-ya) | 1.5% | 200 | `abhinivissa`, `uddissa`, `phussa`, `ādissa`, `anodissa` |
| 🔀🤘⨀ or 🔀🤟⨀ | 1.4% | 184 | `abhavissa`, `nābhavissa`, `agamissa`, `nālabhissa` |
| 🚹⨀① | 1.2% | 150 | `jino`, `mahākappino`, `moḷiyaphagguno`, `phagguno`, `mahāsupino` |
| other readings, each under 0.5% | 1.8% | 240 | |


### `-iyā, -uyā`

33,013 words in the Tipiṭaka end so (12 in every thousand); 89% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| 🚺⨀③ or ④ or ⑤ or ⑥ or ⑦ | 39.9% | 11,783 | `āpattiyā`, `kāmadhātuyā`, `rūpadhātuyā`, `arūpadhātuyā`, `bhikkhuniyā` |
| an adjective, agreeing with its noun | 31.2% | 9,197 | `hetuyā`, `adhipatiyā`, `naadhipatiyā`, `chabbaggiyā`, `atthiyā` |
| ⏯🤟⨀ | 13.2% | 3,906 | `siyā`, `jāniyā`, `vijāniyā`, `sītisiyā`, `nāvajāniyā` |
| 🚻⨀③ or ⑤ or ⓪; ⨂① or ⓪ | 4.7% | 1,373 | `indriyā`, `saṁyojaniyā`, `piyā`, `acchariyā`, `ñāṇacariyā` |
| 🚹⨀③ or ⑤ or ⓪; ⨂① or ⓪ | 3.5% | 1,046 | `ariyā`, `khattiyā`, `piyā`, `appiyā`, `titthiyā` |
| 🚺⨀① or ③; ⨂① or ② or ⓪ | 3.5% | 1,036 | `bhariyā`, `viññāṇacariyā`, `cariyā`, `kālakiriyā`, `aññāṇacariyā` |
| a present participle (-anta, -māna) | 1.4% | 421 | `satiyā`, `bhuñjantiyā`, `vuṭṭhāpentiyā`, `atikkāmentiyā`, `phalantiyā` |
| a participle in -tabba, -anīya, -ya | 1.2% | 368 | `upādāniyā`, `nīvaraṇiyā`, `ganthaniyā`, `anupādāniyā`, `aganthaniyā` |
| a number | 0.8% | 226 | `vīsatiyā`, `tatiyā`, `asītiyā`, `dutiyā`, `dvāsaṭṭhiyā` |
| other readings, each under 0.5% | 0.5% | 159 | |


### `-ī`

40,203 words in the Tipiṭaka end so (14.6 in every thousand); 70% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| an adjective, agreeing with its noun | 44.3% | 12,387 | `ātāpī`, `lābhī`, `dukkhanirodhagāminī`, `dhammānupassī`, `ācayagāmī` |
| 🚺⨀① or ⓪; ⨂① or ② or ⓪ | 16.7% | 4,671 | `bhikkhunī`, `veramaṇī`, `anāgāmī`, `itthī`, `pathavī` |
| 🚹⨀① or ⓪; ⨂① or ② or ⓪ | 15.2% | 4,247 | `cakkavattī`, `udāyī`, `medhāvī`, `gihī`, `jhāyī` |
| a present participle (-anta, -māna) | 11.1% | 3,095 | `vijjatī`, `viharatī`, `pabhāsatī`, `upapajjatī`, `viharantī` |
| ⏮🤟⨀ | 3.6% | 1,002 | `vasī`, `udapādī`, `nandī`, `jhāyī`, `nadī` |
| 🚹⨂① or ② or ⓪ | 3.2% | 891 | `licchavī`, `ñātī`, `atthī`, `jhāyī`, `munī` |
| 🚺⨂① or ② or ⓪ | 2.9% | 799 | `itthī`, `hirī`, `iddhī`, `bhūrī`, `nandī` |
| a particle or adverb | 1.2% | 328 | `tuṇhī`, `sabbadhī`, `āvī`, `dhī`, `katthacī` |
| a verb form the table does not list | 0.9% | 253 | `natthī`, `ramatī`, `bhuñjasī`, `patthayasī`, `maññatī` |
| other readings, each under 0.5% | 1.0% | 296 | |


### `-īhi, -ūhi, -īnaṁ, -ūnaṁ, -īsu, -ūsu`

12,674 words in the Tipiṭaka end so (4.6 in every thousand); 95% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| a number | 28.5% | 3,451 | `catūhi`, `tīhi`, `dvīhi`, `dvīsu`, `catūsu` |
| 🚹⨂④ or ⑥ | 21.0% | 2,533 | `bhikkhūnaṁ`, `sabrahmacārīnaṁ`, `viññūnaṁ`, `gihīnaṁ`, `hetūnaṁ` |
| 🚺⨂④ or ⑥ | 10.5% | 1,268 | `bhikkhunīnaṁ`, `itthīnaṁ`, `āpattīnaṁ`, `vipattīnaṁ`, `āhutīnaṁ` |
| 🚺⨂③ or ⑤ | 9.4% | 1,131 | `dhātūhi`, `bhikkhunīhi`, `āpattīhi`, `mukhasattīhi`, `dattīhi` |
| 🚹⨂③ or ⑤ | 8.0% | 964 | `bhikkhūhi`, `cetanāpaṇidhīhi`, `viññūhi`, `sabrahmacārīhi`, `hetūhi` |
| 🚺⨂⑦ | 5.2% | 623 | `bhūmīsu`, `āpattīsu`, `diṭṭhīsu`, `bhikkhunīsu`, `dhātūsu` |
| a past participle (-ta) | 4.4% | 533 | `pahīnaṁ`, `hīnaṁ`, `asallīnaṁ`, `līnaṁ`, `appahīnaṁ` |
| an adjective, agreeing with its noun | 3.4% | 413 | `bahūnaṁ`, `abhisametāvīnaṁ`, `dummaṅkūnaṁ`, `bahūhi`, `rūpīnaṁ` |
| 🚹⨂⑦ | 3.0% | 367 | `bhikkhūsu`, `sabrahmacārīsu`, `kāsīsu`, `mātāpitūsu`, `vajjīsu` |
| ⏹🤘⨀ | 1.6% | 195 | `brūhi`, `pabrūhi` |
| 🚻⨂③ or ⑤ | 1.5% | 184 | `vatthūhi`, `piyacakkhūhi`, `cakkhūhi`, `saṅgahavatthūhi`, `āghātavatthūhi` |
| a present participle (-anta, -māna) | 1.5% | 184 | `upapajjantīnaṁ`, `cavantīnaṁ`, `ujjhāyantīnaṁ`, `khiyyantīnaṁ`, `vipācentīnaṁ` |
| a verb form the table does not list | 1.0% | 122 | `brūhi` |
| 🚻⨀① or ② or ⓪ | 0.5% | 57 | `hīnaṁ`, `thīnaṁ`, `aparihīnaṁ` |
| other readings, each under 0.5% | 0.4% | 64 | |


## Endings in `o, u and ū`


### `-o`

332,365 words in the Tipiṭaka end so (120.5 in every thousand); 94% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| 🚹⨀① | 43.1% | 134,495 | `dhammo`, `paccayo`, `puggalo`, `saṁgho`, `puriso` |
| an adjective, agreeing with its noun | 15.5% | 48,532 | `eko`, `akusalo`, `sampajāno`, `sahetuko`, `niranusayo` |
| a particle or adverb | 14.4% | 45,092 | `kho`, `āvuso`, `no`, `so`, `yoniso` |
| *️⃣ a pronoun ⨀① | 8.6% | 26,774 | `so`, `yo`, `katamo`, `ko`, `aññataro` |
| a past participle (-ta) | 7.4% | 23,093 | `nisinno`, `pahīno`, `buddho`, `ṭhito`, `sampayutto` |
| a number | 2.9% | 9,204 | `tayo`, `cattāro`, `catasso`, `tisso`, `paṭhamo` |
| *️⃣ a pronoun ⨂② or ③ or ④ or ⑥ | 2.7% | 8,441 | `no`, `vo` |
| a participle in -tabba, -anīya, -ya | 0.8% | 2,367 | `abhiññeyyo`, `abhabbo`, `karaṇīyo`, `bhabbo`, `pāsaṁso` |
| 🚹⨀① or ⓪ | 0.7% | 2,079 | `bho` |
| a sandhi join, to be split | 0.6% | 1,885 | `panāvuso`, `idhāvuso`, `meso`, `evamāvuso`, `vuccatāvuso` |
| 🚹⨀④ or ⑥ | 0.6% | 1,750 | `rañño`, `attano`, `bhoto`, `kāsirañño`, `kosalarañño` |
| other readings, each under 0.5% | 2.5% | 8,495 | |


### `-u`

24,513 words in the Tipiṭaka end so (8.9 in every thousand); 98% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| 🚹⨀① or ⓪ | 45.8% | 10,975 | `bhikkhu`, `sādhu`, `dīghāvu`, `garu`, `samantacakkhu` |
| a particle or adverb | 22.4% | 5,357 | `nu`, `nanu`, `sādhu`, `udāhu`, `khalu` |
| 🚻⨀① or ⓪ | 12.3% | 2,947 | `vatthu`, `cakkhu`, `sādhu`, `tadahu`, `āyu` |
| a sandhi join, to be split | 4.7% | 1,120 | `evamāhaṁsu`, `kudāssu`, `yatthassu`, `evamassu`, `apissu` |
| a verb form the table does not list | 2.9% | 698 | `ahu`, `assu`, `akaṁsu`, `adhibhaṁsu`, `avekkhassu` |
| an adjective, agreeing with its noun | 2.7% | 641 | `bahu`, `anabhijjhālu`, `abhijjhālu`, `puthu`, `mudu` |
| a number | 2.1% | 514 | `chasu`, `pañcasu`, `sattasu`, `dasasu`, `aṭṭhasu` |
| ⏮🤟⨂ | 1.9% | 444 | `akaṁsu`, `aṭṭhaṁsu`, `agamaṁsu`, `addasaṁsu`, `adaṁsu` |
| ⏮🤟⨀ | 1.3% | 306 | `ahu`, `pāturahu`, `nāhu` |
| 🚹 a form its table does not list | 0.7% | 168 | `gotrabhu`, `sabbaññu`, `bhūnahu`, `vedagu`, `mittaddu` |
| 🚹⨀④ or ⑥ | 0.6% | 134 | `satthu`, `daṭṭhu` |
| ⏯🤟⨂ | 0.5% | 126 | `assu`, `nāssu`, `bhuñjeyyu`, `phuseyyu`, `siyaṁsu` |
| other readings, each under 0.5% | 2.1% | 527 | |


### `-uṁ`

10,503 words in the Tipiṭaka end so (3.8 in every thousand); 97% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| ⏮🤟⨂ | 34.8% | 3,549 | `ārocesuṁ`, `etadavocuṁ`, `ahesuṁ`, `paccassosuṁ`, `assosuṁ` |
| 🚻⨀① or ② | 26.6% | 2,710 | `vatthuṁ`, `cakkhuṁ`, `kesamassuṁ`, `dhammacakkhuṁ`, `dibbacakkhuṁ` |
| 🚹⨀② | 24.5% | 2,494 | `garuṁ`, `bhikkhuṁ`, `phāsuṁ`, `aṇuṁ`, `pāraguṁ` |
| an adjective, agreeing with its noun | 6.4% | 652 | `bahuṁ`, `ujuṁ`, `lahuṁ`, `vagguṁ`, `muduṁ` |
| a verb form the table does not list | 1.9% | 194 | `ahesuṁ`, `assosuṁ`, `āsuṁ`, `amaññaruṁ`, `karuṁ` |
| an infinitive (-tuṁ) | 1.6% | 167 | `vatthuṁ`, `abhihaṭṭhuṁ`, `daṭṭhuṁ`, `phuṭṭhuṁ`, `puṭṭhuṁ` |
| 🚺⨀② | 1.1% | 112 | `yāguṁ`, `cīvararajjuṁ`, `aṅgārakāsuṁ`, `ūruṁ`, `kāsuṁ` |
| *️⃣ a pronoun ⨀② | 0.9% | 89 | `amuṁ` |
| ⏮👆⨀ or ⏮🤟⨂ | 0.7% | 72 | `ahuṁ`, `pāturahuṁ` |
| ↩️🤟⨂ | 0.6% | 62 | `āguṁ`, `addakkhuṁ`, `acchiduṁ`, `nājjhagamuṁ`, `dukkhamaccaguṁ` |
| other readings, each under 0.5% | 0.9% | 83 | |


### `-ū`

10,664 words in the Tipiṭaka end so (3.9 in every thousand); 91% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| 🚹⨂① or ② or ⓪ | 76.1% | 7,348 | `bhikkhū`, `hetū`, `bahū`, `sādhū`, `kusalahetū` |
| 🚹⨀① or ⓪; ⨂① or ② or ⓪ | 9.5% | 921 | `viññū`, `lokavidū`, `pāragū`, `vedagū`, `sabbaññū` |
| an adjective, agreeing with its noun | 8.7% | 839 | `bahū`, `puthū`, `mattaññū`, `rattaññū`, `vadaññū` |
| a verb form the table does not list | 2.3% | 226 | `bhikkhū`, `vidū`, `assū`, `bandhū`, `jaññū` |
| 🚻⨂① or ② or ⓪ | 1.3% | 124 | `sādhū`, `ahū`, `vatthū`, `massū`, `chejjavatthū` |
| 🚺⨂① or ② or ⓪ | 1.3% | 123 | `dhātū`, `vāyodhātū`, `bhīrū`, `kāmadhātū`, `jambū` |
| other readings, each under 0.5% | 0.7% | 72 | |


## Endings in `a consonant`


### `-ti`

170,011 words in the Tipiṭaka end so (61.7 in every thousand); 97% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| ▶️🤟⨀ | 71.8% | 118,837 | `hoti`, `uppajjati`, `viharati`, `vuccati`, `pajānāti` |
| a verb with iti joined on (…tīti) | 7.4% | 12,265 | `uppajjatīti`, `uppajjissatīti`, `uppajjitthāti`, `abhāsitthāti`, `nirujjhissatīti` |
| 🚺⨀① or ⓪ | 7.0% | 11,577 | `āpatti`, `anāpatti`, `paññatti`, `jāti`, `sati` |
| 🚹 a form its table does not list | 3.1% | 5,141 | `ādikammikassāti`, `suttantoti`, `atthīti`, `tathāgatenāti`, `bhagavāti` |
| a particle or adverb | 2.5% | 4,135 | `iti`, `cāti`, `vāti`, `ārabbhāti`, `pati` |
| 🚹⨀① or ⓪ | 1.4% | 2,268 | `gahapati`, `adhipati`, `thapati`, `sahampati`, `senāpati` |
| an adjective, agreeing with its noun | 1.3% | 2,182 | `sānusayoti`, `niranusayoti`, `vimutti`, `atthīti`, `sammāsati` |
| a present participle (-anta, -māna) | 1.1% | 1,741 | `sati`, `asati`, `bujjhantīti`, `upapajjatīti`, `pajahatīti` |
| a past participle (-ta) | 0.9% | 1,549 | `samannāgatoti`, `pahīnoti`, `appahīnoti`, `vimuttamiti`, `paññattoti` |
| 🚺 a form its table does not list | 0.7% | 1,156 | `āpattīti`, `paṇidhīti`, `paññattīti`, `sukkavissaṭṭhīti`, `dasāti` |
| 🚻 a form its table does not list | 0.6% | 1,038 | `itthattāyāti`, `maraṇāti`, `arahattāti`, `sotāpattiphalāti`, `dukkhasmāti` |
| *️⃣ a pronoun ⨂① or ② | 0.6% | 998 | `kati` |
| other readings, each under 0.5% | 1.6% | 2,562 | |


### `-nti`

38,743 words in the Tipiṭaka end so (14 in every thousand); 98% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| ▶️🤟⨂ | 80.1% | 30,453 | `honti`, `uppajjanti`, `ujjhāyanti`, `vipācenti`, `gacchanti` |
| 🚻 a form its table does not list | 6.9% | 2,631 | `vatthusminti`, `indriyanti`, `cakkhundriyanti`, `nibbānanti`, `cittanti` |
| a past participle (-ta) | 4.2% | 1,613 | `avigatanti`, `paññattanti`, `abyākatanti`, `sutanti`, `uppannanti` |
| *️⃣ a pronoun | 1.5% | 562 | `santi`, `kinti`, `mamanti`, `ahanti`, `manti` |
| an adjective, agreeing with its noun | 1.4% | 549 | `nirāmisanti`, `nirodhadhammanti`, `suvimuttanti`, `vipariṇāmadhammanti`, `sāmisanti` |
| a verb form the table does not list | 1.4% | 540 | `siyanti`, `santi`, `abhinandunti`, `dadeyyunti`, `samāpajjinti` |
| 🚹 a form its table does not list | 1.2% | 464 | `cittanti`, `santi`, `khemanti`, `kinti`, `lokanti` |
| a present participle (-anta, -māna) | 0.9% | 341 | `santi`, `karonti`, `santanti`, `sakkaronti`, `sakkonti` |
| 🚺⨀① or ⓪ | 0.5% | 173 | `avakkanti`, `santi`, `gabbhāvakkanti`, `okkanti`, `nikanti` |
| other readings, each under 0.5% | 2.0% | 701 | |


### `-si`

12,877 words in the Tipiṭaka end so (4.7 in every thousand); 91% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| ⏮🤘⨀ or ⏮🤟⨀ | 60.4% | 7,113 | `ahosi`, `āmantesi`, `āsi`, `aṭṭhāsi`, `adāsi` |
| ▶️🤘⨀ | 22.5% | 2,652 | `vadesi`, `jānāsi`, `aññāsi`, `desesi`, `samādapesi` |
| a sandhi join, to be split | 10.5% | 1,233 | `etadahosi`, `kallosi`, `khosi`, `diṭṭhosi`, `nusi` |
| 🚹⨀① or ⓪ | 2.0% | 236 | `isi`, `rāsi`, `pāyāsi`, `mahesi`, `mahāisi` |
| 🚺⨀⓪ | 1.3% | 152 | `āsi`, `adāsi`, `bhisi`, `mahesi`, `dāsi` |
| 🚹⨀⓪ | 0.7% | 88 | `mahesi`, `tapassi`, `yasassi`, `sataraṁsi`, `hitesi` |
| ⏹🤘⨀ | 0.6% | 76 | `adāsi`, `niyyāsi`, `rājāsi`, `pajahāsi`, `yamāsi` |
| a verb form the table does not list | 0.5% | 60 | `ahāsi`, `vihāsi`, `brūsi`, `upehisi`, `vihāhisi` |
| other readings, each under 0.5% | 1.4% | 166 | |


### `-mi, -ma`

23,483 words in the Tipiṭaka end so (8.5 in every thousand); 97% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| ⏹👆⨀ or ▶️👆⨀ | 37.9% | 8,633 | `vadāmi`, `anujānāmi`, `viharāmi`, `nābhijānāmi`, `jānāmi` |
| a particle or adverb | 12.1% | 2,756 | `nāma`, `āgamma`, `āma`, `samma`, `kimāgamma` |
| ⏮🤘⨀ or ⏮🤟⨀ | 9.9% | 2,260 | `tenupasaṅkami`, `pakkāmi`, `upāgami`, `nikkhami`, `okkami` |
| 🚻⨀⓪ | 9.3% | 2,111 | `nāma`, `samma`, `āma`, `sāma`, `kittināma` |
| 🚹⨀⓪ | 7.5% | 1,713 | `gotama`, `mahānāma`, `pāpima`, `cakkhuma`, `susima` |
| *️⃣ a pronoun ⨀④ or ⑥ | 6.8% | 1,560 | `mama` |
| an absolutive (-ya) | 3.9% | 877 | `samatikkamma`, `āgamma`, `atikkamma`, `saṅgamma`, `samāgamma` |
| ⏹👆⨂ or ▶️👆⨂ | 3.8% | 867 | `gacchāma`, `pucchāma`, `jānāma`, `suṇoma`, `viharāma` |
| a sandhi join, to be split | 2.0% | 460 | `nesohamasmi`, `esohamasmi`, `ahamasmi`, `khosmi`, `sāvakohamasmi` |
| a verb form the table does not list | 2.0% | 445 | `vadāmi`, `brūmi`, `tenupasaṅkama`, `dammi`, `paṭihaṅkhāmi` |
| 🚺⨀① or ⓪ | 0.6% | 146 | `bhūmi`, `ūmi`, `vighātabhūmi`, `rasmi`, `pāpabhūmi` |
| ⏯👆⨂ or ⏹👆⨂ or ▶️👆⨂ | 0.6% | 140 | `dhārema`, `dema`, `desema`, `yāpema`, `paññapema` |
| ⏹🤘⨀ | 0.5% | 116 | `samma`, `khama`, `abhikkama`, `nikkhama`, `abhirama` |
| a present participle (-anta, -māna) | 0.5% | 115 | `samma`, `nikkhama`, `vāyama`, `virama`, `abhikkama` |
| ⏭👆⨀ | 0.5% | 109 | `vakkhāmi`, `pavakkhāmi`, `kāhāmi`, `ucchecchāmi`, `lacchāmi` |
| 🚺⨀⓪ | 0.5% | 108 | `amma`, `gotami`, `āma`, `sāma`, `sakadāgāmi` |
| other readings, each under 0.5% | 1.6% | 360 | |


### `-tha, -ttha`

35,854 words in the Tipiṭaka end so (13 in every thousand); 98% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| a particle or adverb | 77.2% | 27,056 | `tattha`, `atha`, `yattha`, `ettha`, `kattha` |
| ⏮🤘⨂ | 10.1% | 3,527 | `uppajjittha`, `nirujjhittha`, `bhāvittha`, `parijānittha`, `sacchikarittha` |
| ⏹🤘⨂ or ▶️🤘⨂ | 5.5% | 1,929 | `suṇātha`, `maññatha`, `karotha`, `pajahatha`, `etha` |
| 🚹 a form its table does not list | 3.7% | 1,310 | `sabbattha`, `ratha` |
| a sandhi join, to be split | 1.6% | 562 | `mayamettha`, `kaccittha`, `cettha`, `kutettha`, `athettha` |
| a verb form the table does not list | 0.9% | 328 | `abhāsatha`, `udapajjatha`, `kayirātha`, `ajāyatha`, `ajjhabhāsatha` |
| 🚻⨀⓪ | 0.5% | 179 | `kattha`, `assattha` |
| other readings, each under 0.5% | 0.3% | 176 | |


### `-tu, -ntu`

12,028 words in the Tipiṭaka end so (4.4 in every thousand); 80% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| a particle or adverb | 23.9% | 2,298 | `hetu`, `samannāgamanahetu`, `kāmahetu`, `jātu`, `cīvarahetu` |
| 🚺⨀① or ⓪ | 23.6% | 2,263 | `dhātu`, `āpodhātu`, `dhammadhātu`, `manoviññāṇadhātu`, `cakkhudhātu` |
| 🚹⨀① or ⓪ | 21.3% | 2,043 | `hetu`, `ajātasattu`, `jantu`, `utu`, `takkahetu` |
| ⏹🤟⨀ | 19.5% | 1,873 | `suṇātu`, `hotu`, `dhāretu`, `desetu`, `tiṭṭhatu` |
| ⏹🤟⨂ | 8.6% | 822 | `uddisantu`, `hontu`, `āgacchantu`, `suṇantu`, `haññantu` |
| 🚹⨀④ or ⑥ | 1.5% | 141 | `bhattu`, `pitu`, `sattu`, `sakapitu`, `dhātu` |
| a verb form the table does not list | 0.6% | 62 | `suṇātu`, `kurutu`, `hotu`, `tiṭṭhatu`, `tiṭṭhantu` |
| 🚺⨀④ or ⑥ | 0.6% | 55 | `mātu`, `bodhisattamātu`, `janikāmātu`, `sakamātu`, `migāramātu` |
| other readings, each under 0.5% | 0.5% | 45 | |


### `-nto, -ntā, -ntaṁ, -nte`

39,456 words in the Tipiṭaka end so (14.3 in every thousand); 98% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| 🚹⨀⓪; ⨂⓪ | 23.6% | 9,185 | `bhante` |
| a particle or adverb | 22.8% | 8,872 | `āmantā`, `ekamantaṁ`, `yathābhirantaṁ`, `āpattisāmantā`, `ekamante` |
| a present participle (-anta, -māna) | 17.3% | 6,705 | `santo`, `santaṁ`, `passanto`, `viharanto`, `bhāvento` |
| 🚹⨀② | 12.7% | 4,918 | `bhagavantaṁ`, `āyasmantaṁ`, `bhavantaṁ`, `dukkhassantaṁ`, `antaṁ` |
| an adjective, agreeing with its noun | 6.3% | 2,444 | `mahantaṁ`, `samantā`, `sabbāvantaṁ`, `piṇḍapātapaṭikkanto`, `evamāyupariyanto` |
| a past participle (-ta) | 4.1% | 1,605 | `abhikkantaṁ`, `nikkhanto`, `kantā`, `vūpasantā`, `vūpasantaṁ` |
| a verb form the table does not list | 3.7% | 1,449 | `viharantaṁ`, `āgacchantaṁ`, `gacchantaṁ`, `bhavantaṁ`, `carantaṁ` |
| 🚹⨀①; ⨂① or ⓪ | 2.1% | 811 | `arahanto`, `āyasmanto`, `bhagavanto`, `santo`, `cakkhumanto` |
| 🚹⨀① | 1.8% | 696 | `anto`, `sammākammanto`, `kūṭadanto`, `micchākammanto`, `danto` |
| 🚹⨂① or ⓪ | 1.1% | 439 | `bhonto`, `bhavanto` |
| 🚹⨀⑦; ⨂② | 0.9% | 359 | `āyasmante`, `ante`, `aparante`, `pubbante`, `pubbantāparante` |
| 🚹⨀③ or ⑤ or ⓪; ⨂① or ⓪ | 0.7% | 265 | `mantā`, `kammantā`, `dantā`, `ārohantā`, `kantā` |
| other readings, each under 0.5% | 2.5% | 1,093 | |


### `-māno, -mānā, -māne`

7,166 words in the Tipiṭaka end so (2.6 in every thousand); 97% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| a present participle (-anta, -māna) | 85.4% | 5,919 | `samāno`, `vadamāno`, `saṁvijjamānā`, `ākaṅkhamāno`, `caramāno` |
| an adjective, agreeing with its noun | 10.2% | 710 | `samāno`, `samānā`, `samāne`, `nimmāno`, `pahīnamāno` |
| 🚹⨀① | 1.7% | 120 | `atimāno`, `asmimāno`, `omāno`, `mānātimāno`, `uggāhamāno` |
| 🚻⨀⑦; ⨂② | 1.2% | 82 | `vattamāne`, `vimāne` |
| other readings, each under 0.5% | 1.4% | 101 | |


### `-ssati…`

19,566 words in the Tipiṭaka end so (7.1 in every thousand); 99% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| ⏭🤟⨀ | 43.5% | 8,469 | `uppajjissati`, `nirujjhissati`, `bhavissati`, `nuppajjissati`, `karissati` |
| ⏭🤟⨂ | 19.2% | 3,732 | `parinibbāyissanti`, `bhavissanti`, `paṭilabhissanti`, `nirujjhissanti`, `uppajjissanti` |
| ▶️🤟⨀ | 14.8% | 2,880 | `passati`, `samanupassati`, `vipassati`, `anupassati`, `nassati` |
| ⏭👆⨀ | 9.4% | 1,834 | `desessāmi`, `bhavissāmi`, `karissāmi`, `pabbajissāmi`, `kittayissāmi` |
| ⏹👆⨀ or ▶️👆⨀ | 3.2% | 620 | `passāmi`, `samanupassāmi`, `namassāmi`, `sandissāmi`, `sussāmi` |
| ⏭👆⨂ | 2.8% | 549 | `bhavissāma`, `karissāma`, `tenupasaṅkamissāma`, `hessāma`, `bhuñjissāma` |
| ▶️🤟⨂ | 2.7% | 519 | `passanti`, `vipassanti`, `samanupassanti`, `namassanti`, `dissanti` |
| 🚺⨀① or ⓪ | 1.0% | 194 | `anussati`, `ānāpānassati`, `paṭissati`, `dhammānussati`, `maraṇassati` |
| ⏭🤘⨂ | 0.8% | 154 | `karissatha`, `bhavissatha`, `bhuñjissatha`, `sañjānissatha`, `dhāressatha` |
| an adjective, agreeing with its noun | 0.5% | 100 | `muṭṭhassati`, `upaṭṭhitassati`, `upaṭṭhitakāyassati`, `anupaṭṭhitakāyassati` |
| ⏹🤘⨂ or ▶️🤘⨂ | 0.5% | 99 | `passatha`, `samanupassatha`, `namassatha`, `vinassatha`, `pavassatha` |
| other readings, each under 0.5% | 1.5% | 305 | |


### `-tabba…, -anīyaṁ`

18,615 words in the Tipiṭaka end so (6.8 in every thousand); 98% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| a participle in -tabba, -anīya, -ya | 92.6% | 16,837 | `pahātabbo`, `vattabbaṁ`, `pahātabbaṁ`, `vattabbā`, `kātabbaṁ` |
| 🚻⨀① or ② or ⓪ | 4.5% | 815 | `bhojanīyaṁ`, `kātabbaṁ`, `paccanīyaṁ`, `khādanīyaṁ`, `paribhojanīyaṁ` |
| an adjective, agreeing with its noun | 2.3% | 414 | `apāyagamanīyo`, `diṭṭhadhammavedanīyaṁ`, `savacanīyaṁ`, `pemanīyā`, `manobhāvanīyo` |
| 🚻⨀③ or ⑤ or ⓪; ⨂① or ⓪ | 0.6% | 115 | `kātabbā`, `vacanīyā`, `sevitabbā`, `tapanīyā`, `tajjanīyā` |
| other readings, each under 0.5% | 0.0% | 2 | |


### `-tvā, -tvāna`

30,895 words in the Tipiṭaka end so (11.2 in every thousand); 98% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| an absolutive (-tvā) | 100.0% | 30,267 | `upasaṅkamitvā`, `katvā`, `ṭhapetvā`, `abhivādetvā`, `sutvā` |


### `-tuṁ`

6,586 words in the Tipiṭaka end so (2.4 in every thousand); 76% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| an infinitive (-tuṁ) | 65.3% | 3,289 | `kātuṁ`, `pahātuṁ`, `dātuṁ`, `viharituṁ`, `samanupassituṁ` |
| 🚹⨀② | 18.3% | 920 | `hetuṁ`, `utuṁ`, `ajātasattuṁ`, `setuṁ`, `jantuṁ` |
| 🚺⨀② | 11.0% | 553 | `rūpadhātuṁ`, `arūpadhātuṁ`, `kāmadhātuṁ`, `āpodhātuṁ`, `tejodhātuṁ` |
| a particle or adverb | 4.6% | 234 | `tikkhattuṁ`, `sahassakkhattuṁ`, `sattakkhattuṁ`, `chattiṁsakkhattuṁ`, `catukkhattuṁ` |
| other readings, each under 0.5% | 0.8% | 38 | |


### `-te`

23,279 words in the Tipiṭaka end so (8.4 in every thousand); 80% of them are in the dictionary and are classed below.

| it reads as | share | words | for example |
| --- | --: | --: | --- |
| a past participle (-ta) | 44.7% | 8,342 | `avigate`, `sampayutte`, `vutte`, `vippayutte`, `vigate` |
| an adjective, agreeing with its noun | 21.2% | 3,952 | `novigate`, `sahajāte`, `purejāte`, `pacchājāte`, `uddhaccasahagate` |
| 🚻⨀⑦; ⨂② | 11.9% | 2,225 | `mahābhūte`, `citte`, `vutte`, `ekatte`, `jīvite` |
| 🚹⨀⑦; ⨂② | 8.2% | 1,522 | `citte`, `satte`, `tathāgate`, `sugate`, `pabbate` |
| a verb form the table does not list | 4.2% | 785 | `labhate`, `vuccate`, `kurute`, `jāyate`, `bhāsate` |
| *️⃣ a pronoun ⨂① or ② | 2.7% | 511 | `ete`, `nete` |
| ⏯👆⨀ or ⏯🤘⨀ or ⏯🤟⨀ | 1.3% | 247 | `pavatte`, `nibbatte`, `vatte`, `cete`, `abhinibbatte` |
| 🚹⨂② | 1.3% | 239 | `mahābhūte`, `tusite`, `sabbāmitte`, `ñātimitte`, `sabbasatte` |
| 🚻⨂② | 1.2% | 226 | `mahābhūte` |
| 🚺⨀⓪ | 1.2% | 215 | `devate`, `citte`, `nandamāte`, `mitte`, `sute` |
| a sandhi join, to be split | 0.9% | 170 | `hete`, `etthete`, `sabbete`, `iccete`, `panete` |
| 🚹⨀⓪ | 0.6% | 118 | `satte`, `pavatte`, `katte`, `aviññāte`, `ñāte` |
| other readings, each under 0.5% | 0.5% | 103 | |

