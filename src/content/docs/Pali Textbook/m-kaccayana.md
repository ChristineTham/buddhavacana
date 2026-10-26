---
title: "M: Overview of Kaccāyana"
sidebar:
  label: "M: Kaccāyana"
  order: 575
description: >
  An overview of Kaccāyana and interpretation guidelines
categories: ["palibook"]
tags: ["Kaccāyana"]
---

:::tip[Info]
Part of "A Beginner (Non-Linguist) Guide to Learning Pali"
:::

The material in this appendix is mostly drawn from a class called
[**A Short Introduction to the Kaccāyana Pali Grammar: Its Background, Techniques and Terminology**](https://theravadastudies.org/rainy-season-research-series/#Classanchor)
taught by Aleix Ruiz-Falqués, Shan State Buddhist University, Taunggyi, Myanmar in 2020.

## Genesis of Kaccāyana
There are actually two components of Kaccāyana:

* *Kaccāyana-byākaraṇa* (circa 6th century CE) and the author is not known
  (but ascribed to Mahā Kaccāyana Thera) -
  this contains the concisely stated rules (called `sutta`) that form the
  basis of Pali grammar; and
* *Kaccāyana-vutti* (circa 8th century CE) by Saṅghanandin, which represents a
  commentary and explanation of the rules together with examples.

Kaccāyana itself draws from multiple earlier sources such as:

* Prātiśākya treatises, Vedic phonetics (various authors)
* Pāṇini's Aṣṭādhyāyī ("Eight Lessons")
* Kātantravyākaraṇa by Śarvavarman

So, Kaccāyana draws and inherits from a long tradition of Sanskrit grammar
and technical terms. According to Pind (2012) approximately 215 `sutta` from
Kaccāyana are based on Kātantravyākaraṇa, and approximately 300 `sutta` are
modifications from Pāṇini. However, more than half the `sutta`
in Kaccāyana are not derived from Sanskrit, so the grammar as a whole does
not reflect Sanskrit usage and vocabulary.

## Kaccāyana structure

```mermaid
mindmap
  Kaccāyana
    I. Sandhi
      i. Definitions
      ii. Vowel sandhi
      iii. Consonant sandhi
      Iiv("iv. niggahīta (ṁ) sandhi")
      v. Miscellanea
    II. Nāma
      i. Definitions, Internal sandhis, Default inflections
      ii. Pronoun inflections, lemmas in -an
      iii. Pronoun inflections continued, mano-gaṇa, lemmas in -an and -tar
      iv. lemmas in -an continued, feminine lemmas, adverbs from pronouns, lemmas in -nta
      v. Adverbial affixes
      vi. KĀRAKA
      vii. SAMĀSA
      viii. TADDHITA
    III. Ākhyāta
      i. Definitions
      ii. Special verb bases, causatives, bhāva, verb classes
      iii. Reduplication, special verb bases
      iv. Special affixes and verb bases
    IV. Kibbidhāna
      i. Definition of kicca and kit affixes
      ii. Use of affixes with tenses, voices, etc.
      iii. niṭṭhā affixes
      iv. Modification of roots in primary derivation
      v. UṆĀDI
```

### Types of rules in Kaccāyana

Several saññā “technical terms”, within an adhikāra “domain”, following
paribhāsā “metarules”, will be subject to vidhi “operations” in order to
derive words or sentences.

```plantuml
@startebnf
grammar (* Kaccāyana *) = 673 * rule (* sutta *);
rule =
  technical_term (* saññā *) |
  domain (* adhikāra *) |
  metarule (* paribhāsā *) |
  operation (* vidhi *) ;
technical_term =
  meaningful (* anvattha *) |
  artificial (* rūḷhī *) ;
domain =
  lion_way (* sīhagatika *) |
  frog_way (* maṇḍūkagatika *) |
  progressive (* yathānupubbika *) ;
metarule =
  meta_definition (* saññaṅga *) |
  meta_operation (* vidhyaṅga *) |
  meta_other (* aññaṅga *) ;
operation =
  replacement (* ādesa *) |
  insertion (* āgama *) |
  modification (* vikāra *) |
  elision (* lopa *) |
  metathesis (* viparīta *) ;
@endebnf
```

```plantuml
@startyaml
saññā:
  - anvattha
  - rūḷhī
adhikāra:
  - sīhagatika
  - maṇḍūkagatika
  - yathānupubbika
paribhāsā:
  - saññaṅga
  - vidhyaṅga
  - aññaṅga
vidhi:
  - ādesa
  - āgama
  - vikāra
  - lopa
  - viparīta
@endyaml
```

### How does a `vidhi` (operation) work


Most vidhi “operational” rules teach paccaya “affixation” or ādesa “replacement” using previous definitions (saññā-s). It is all about adding particles to a base, and then replacing them if/when needed.

To understand vidhi-s, we should keep in mind the following code of inflection forms:

* ⑤ = “after X”
* ⑥ = “instead of X”
* ①, ② = “X”, ādesa ("replacement")
* ⑦ (1): “before X”
* ⑦ (2): “in the sense of X”

#### Affixation (`paccaya`)

```mermaid
timeline
  Left : ⑤
    : After X
  A : ①
    : Affix A is inserted
```

```plantuml
@startebnf
affixation = fifth (* ⑤, after X *), first (* ①, A is inserted *);
fifth =
  (lemma (* liṅga *) |
  root (* dhātu *)), "smā" ;
@endebnf
```

#### Replacement (`ādesa`)

```mermaid
timeline
  Left : ⑤
    : ⑤
    : ⑤
    : After X
  A : ⑥
    : ①
    : ①
    : Replace A
  B : ①
    : ①
    : ②
    : With B
  Right : ⑦
    : ⑦
    : ⑦
    : Before Y
  Marker : ca (and)
    : api (also)
    : vā (or)
    : kvaci (sometimes)
    : na (not)
    : niccam (required)
  Semantic : ⑦
    : "in the sense of ..."
```

```plantuml
@startebnf
replacement = [fifth (* ⑤, after X *)],
  (
    (
      sixth (* ⑥, instead of A *),
      first (* ①, replace with B *)
    ) |
    (
      first (* ①, replace A *),
      first (* ①, with B *)
    ) |
    (
      first (* ①, A *),
      second (* ②, becomes B *)
    )
  ),
  [seventh (* ⑦, before Y *)], [marker], [semantic (* "in the sense of" *)];
marker =
  "ca" (* and *) |
  "api" (* also *) |
  "vā" (* or *) |
  "kvaci" (* sometimes *) |
  "na" (* not *) |
  "niccam" (* required *) ;
@endebnf
```

#### Elision (`lopaṁ`)

```mermaid
timeline
  Left : ⑤
    : After X
  A : ①
    : Instead of A
  lopaṁ: ②
    : elision
  Right : ⑦
    : Before Y
```

```plantuml
@startebnf
elision =
  [fifth (* ⑤, after X *)],
  sixth (* ⑥, instead of A *),
  "lopaṁ" (* elision *),
  [seventh (* ⑦, before Y *)];
@endebnf
```

### Structure of a rule (`sutta`)

```plantuml
@startebnf
rule =
  aphorism (* sutta *),
  gloss (* vutti *),
  {example} (* udāharaṇa *),
  {counter_example} (* kimudāharaṇa *),
  [application] (* payojana *),
  [result] (* gahaṇaphala *);
@endebnf
```

```mermaid
stateDiagram-v2
  direction LR
  [*] --> upasagga
  [*] --> dhātu
  upasagga --> upasagga
  upasagga --> dhātu
  dhātu --> paccaya
```
