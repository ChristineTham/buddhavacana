---
title: "M: Overview of Kaccāyana"
sidebar:
  label: "M: Kaccāyana"
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

* *Kaccāyana-byājkarana* (circa 6th century CE) and the author is not known
  (but ascribed to Mahā Kaccāyana Thera) -
  this contains the concisely stated rules (called `sutta`) that form the
  basis of Pali grammar; and
* *Kaccāyana-vutti* (circa 8th centure CE) by Saṅghanandin, which represents a
  commentary and explanation of the rules together with examples.

Kaccāyana itself draws from multiple earlier sources such as:

* Prātiśākya treatises, Vedic phonetics (various authors)
* Pānini's Aṣṭādhyāyī ("Eight Lessons")
* Kātantravyākarana by Šarvavarman

So, Kaccāyana draws and inherits from a long tradition of Sanskrit grammar
and technical terms. According to Pind (2012) approximately 215 `sutta` from
Kaccāyana are based on Kātantravyākarana, and approximately 300 `sutta` are
modifications from Panini. However, more than half the `sutta`
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
      Iiv("iv. niggahīta (ṃ) sandhi")
      v. Miscellanea
    II. Nāma
      i. Definitions, Internal sandhis, Default Declensions
      ii. Pronominal declension, an-stems
      iii. Pronominal dec. continued, mano-gaṇa, an-stems, tar-stems.
      iv. an-stems cont., feminine stems, adv. pronouns, nta-stems
      v. Adverbial affixes
      vi. KĀRAKA
      vii. SAMĀSA
      viii. TADDHITA
    III. Ākhyāta
      i. Definitions
      ii. Special stems, causatives, bhāva, vb. classes
      iii. Reduplication, Special stems
      iv. Special affixes and stems
    IV. Kibbidhāna
      i. Definition of kicca and kit affixes
      ii. Use of affixes with tenses, voices, etc.
      iii. niṭṭhā affixes
      iv. Modification of vb. stems in primary derivation
      v. UṆĀDI
```

### Types of rules in Kaccāyana

Several saññā “technical terms”, within an adhikāra “domain”, following
paribhāsā “metarules”, will be subject to vidhi “operations” in order to
derive words or sentences.

```plantuml
@startebnf
grammar (* Kaccāyana *) = 675 * rule (* sutta *);
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

To understand vidhi-s, we should keep in mind the following code of case endings:

* ABL. = “after X”
* GEN. = “instead of X”
* NOM., ACC. = “X”, ādesa ("replacement")
* LOCATIVE1: “before X”
* LOCATIVE2: “in the sense of X”

#### Affixation (`paccaya`)

```mermaid
timeline
  Left : Ablative
    : After X
  A : Nominative
    : Affix A is inserted
```

```plantuml
@startebnf
affixation = ablative (* After X *), nominative (* A is inserted *);
ablative =
  (nominal_base (* liṅga *) |
  verbal_base (* dhātu *)), "smā" ;
@endebnf
```

#### Replacement (`ādesa`)

```mermaid
timeline
  Left : Ablative
    : Ablative
    : Ablative
    : After X
  A : Genitive
    : Nominative
    : Nominative
    : Replace A
  B : Nominative
    : Nominative
    : Accusative
    : With B
  Right : Locative
    : Locative
    : Locative
    : Before Y
  Marker : ca (and)
    : api (also)
    : vā (or)
    : kvaci (sometimes)
    : na (not)
    : niccam (required)
  Semantic : Locative
    : "in the sense of ..."
```

```plantuml
@startebnf
replacement = [ablative (* After X *)],
  (
    (
      genitive (* Instead of A *),
      nominative (* replace with B *)
    ) |
    (
      nominative (* Replace A *),
      nominative (* with B *)
    ) |
    (
      nominative (* A *),
      accusative (* becomes B *)
    )
  ),
  [locative (* Before Y *)], [marker], [semantic (* "in the sense of" *)];
marker =
  "ca" (* and *) |
  "api" (* also *) |
  "vā" (* or *) |
  "kvaci" (* sometimes *) |
  "na" (* not *) |
  "niccam" (* required *) ;
@endebnf
```

#### Elision (`lopaṃ`)

```mermaid
timeline
  Left : Ablative
    : After X
  A : Nominative
    : Instead of A
  lopaṃ: Accusative
    : elision
  Right : Locative
    : Before Y
```

```plantuml
@startebnf
elision =
  [ablative (* After X *)],
  genitive (* Instead of A *),
  "lopaṃ" (* elision *),
  [locative (* Before Y *)];
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
