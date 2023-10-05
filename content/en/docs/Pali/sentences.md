---
title: "Sentence examples (padamañjarī)"
linkTitle: "Sentences"
date: 2023-08-05
weight: 300
description: >
  Sentence examples (evolving) based on Warder "Introduction to Pali" exercises
---

## Legend

| symbol | meaning | explanation |
| --- | --- | --- |
|  | `vākya` | sentence |
|  | `pada`, `vacana` | word |
|  | `nāma` | noun |
|  | `ākhyāta` | verb |
| 🚹 | `pulliṅga` | major (masculine) gender |
| 🚻 | `napuṁsakaliṅga` | special (neuter) gender |
| 🚺 | `itthiliṅga` | minor (feminine) gender |
| ⚧ | `sabbaliṅga` | all genders |
| 👤 | `ekavacana` | singular |
| 👥 | `bahuvacana` | plural |
| 🟢 | `parassapada` | active voice
| 🔵 | `attanopada` | middle voice - impersonal |
| 🔴 | `kammapada` | passive
| 👤 | `ekavacana` | singular |
| 👥 | `bahuvacana` | plural |
| 🤟 | `paṭhama purisa` | first person, equivalent to 'third person' in English |
| 🤘 | `majjima purisa` | middle person, equivalent to 'second person' in English |
| 👆 | `uttama purisa` | primary person, equivalent to 'first person' in English |
| 0️⃣ | `ālapana` | vocative |
| 1️⃣ | `paṭhamā` | first case (nominative) |
| 2️⃣ | `dutiyā` | second case (accusative) |
| 3️⃣ | `tatiyā` | third case (instrumental) |
| 4️⃣ | `catutthī` | fourth case (dative) |
| 5️⃣ | `pañcamī` | fifth case (ablative) |
| 6️⃣ | `chaṭṭhī` | sixth case (genitive) |
| 7️⃣ | `sattamī` | seventh case (locative) |
| ⏏️ | `nipāta` | particle |
| 🔼 | `upasagga` |prefix |
| 🆎 | `samāsa` | compound noun |
| 🔽 | `taddhita` | affix |
| ▶️ | `vattamāna` | present |
| ⏹ | `piñcamī` | imperative |
| ⏯ | `sattamī` | potential |
| 🔄 | `parokkhā` | perfect |
| ↩️ | `hiyyattanī` | imperfect |
| ⏮ | `ajjatanī`| aorist |
| ⏭ | `bhavissanti` | future |
| 🔀 | `kālātipatti` | conditional |
| ⏪ | | past participle |
| ⏬ | `missakiriyā` | present participle |
| ⏩ | `kicca` | future participle |
| ⏫ | `pubbakiriyā` | gerund (absolutive) |

### Equational

```mermaid
classDiagram
  class sentence["devo amanusso hoti"] {
    <<vākya>>
    english(The deva is not human)
  }
  namespace kattar {
    class devo {
      <<nāma>>
      🚹👤1️⃣
      english(deity)
    }
    class amanusso {
      <<nāma>>
      🚹👤1️⃣
      english(not human)
    }
  }
  class hoti {
    <<ākhyāta>>
     👤🤟▶️
    english(is)
  }
  sentence *-- devo : kattar
  sentence *-- amanusso : vāccaliṅga
  sentence *-- hoti: kiriya
```

### Intransitive (agent-action)

```mermaid
classDiagram
  class sentence["devo cavati"] {
    <<vākya>>
    english(The god dies)
  }
  class devo {
    <<nāma>>
    🚹👤1️⃣
    english(deity)
  }
  class cavati {
    <<ākhyāta>>
     👤🤟▶️
    english(dies)
  }
  sentence *-- devo : kattar
  sentence *-- cavati: akammaka
```

### Transitive (agent-patient-action)

```mermaid
classDiagram
  class sentence["upāsako pattaṃ āharati"] {
    <<vākya>>
    english(The lay disciple brings the bowl)
  }
  class upāsako {
    <<nāma>>
    🚹👤1️⃣
    english(lay disciple)
  }
  class pattaṃ {
    <<nāma>>
    🚹👤2️⃣
    english(bowl)
  }
  class āharati {
    <<ākhyāta>>
     👤🤟▶️
    english(brings)
  }
  sentence *-- upāsako : kattar
  sentence *-- pattaṃ : kamma
  sentence *-- āharati: sakammaka
```

### Bi-transitive (patient y-patient x-action)

```mermaid
classDiagram
  class sentence["upāsakaṃ brāhmānaṃ dhāreti"] {
    <<vākya>>
    english([He] accepts the priest as a lay disciple)
  }
  class upāsakaṃ {
    <<nāma>>
    🚹👤2️⃣
    english(lay disciple)
  }
  class brāhmānaṃ {
    <<nāma>>
    🚹👤2️⃣
    english(brahmin)
  }
  class dhāreti {
    <<ākhyāta>>
     👤🤟▶️
    english(accepts X as Y)
  }
  sentence *-- upāsakaṃ : kamma y
  sentence *-- brāhmānaṃ : kamma x
  sentence *-- dhāreti: dvikammaka
```

### `yena` ... `tena`

```mermaid
classDiagram
  class sentence["yena mahāmatto tena upasaṃkamanti"] {
    <<vākya>>
    english(By where the minister [is], by there [they] approach)
  }
  namespace yenatena {
    class yena {
      <<nipāta>>
      3️⃣
      english(by where)
    }
    class mahāmatto {
      <<nāma>>
      🚹👤1️⃣
      english(minister)
    }
    class tena {
      <<nipāta>>
      3️⃣
      english(by there)
    }
  }
  class upasaṃkamanti {
    <<ākhyāta>>
     👥🤟▶️
    english(approach)
  }
  sentence *-- yena
  sentence *-- mahāmatto
  yena <-- mahāmatto : kattar
  yena --> tena
  sentence *-- tena : kamma
  sentence *-- upasaṃkamanti: kiriya
```

```mermaid
sequenceDiagram
  they ->> place : approach
  place ->> minister : by where
  minister ->> place : by there
```

### Past (Aorist)

Historical or "narrative" past

```mermaid
classDiagram
  class sentence["dhammaṃ desesiṃ"] {
    <<vākya>>
    english([I] taught the dhamma)
  }
  class dhammaṃ {
    <<nāma>>
    🚹👤2️⃣
    english(the dhamma)
  }
  class desesiṃ {
    <<ākhyāta>>
     👤👆⏮
    english([I] taught)
  }
  sentence *-- dhammaṃ : kamma
  sentence *-- desesiṃ: ajjatanī
```

### Personal Names

```mermaid
classDiagram
  class sentence["Uttaro nāma putto ahosi"] {
    <<vākya>>
    english([There] was a son by name Uttara)
  }
  namespace kamma {
    class Uttaro {
      <<nāmanāma>>
      🚹👤2️⃣
      english(Uttara)
    }
    class nāma {
      <<avyaya>>
      english(by name)
    }
    class putto {
      <<nāma>>
      🚹👤2️⃣
      english(son)
    }
  }
  class ahosi {
    <<ākhyāta>>
     👤🤟⏮
    english(was)
  }
  Uttaro --> nāma
  sentence *-- Uttaro : nāmanāma
  sentence *-- nāma : guṇanāma
  sentence *-- putto : kamma
  sentence *-- ahosi: ajjatanī
```

### Agreement of Verb and Agent

When a verb has two or more agents, it usually agrees with the sum of the agents
and is plural.

```mermaid
classDiagram
  class sentence["Reṇu ca rājaputto Jotipālo ca mānavo sahāyā ahesuṃ"] {
    <<vākya>>
    english(Prince Reṇu and Jotipāla the Mānava [young priest, descendant of Mānu] were friends)
  }
  namespace kattar1 {
    class Reṇu {
      <<nāma>>
      🚹👤1️⃣
      english(Reṇu)
    }
    class ca1["ca"] {
      <<nipāta>>
      english(and)
    }
    class rājaputto {
      <<nāma>>
      🚹👤1️⃣
      english(prince)
    }
  }
  namespace kattar2 {
    class Jotipālo {
      <<nāma>>
      🚹👤1️⃣
      english(Jotipāla)
    }
    class ca2["ca"] {
      <<nipāta>>
      english(and)
    }
    class mānavo {
      <<nāma>>
      🚹👤1️⃣
      english(mānava)
    }
  }
  class sahāyā {
    <<nāma>>
    🚹👥2️⃣
    english(friends)
  }
  class ahesuṃ {
    <<ākhyāta>>
     👥🤟⏮
    english(were)
  }
  sentence *-- Reṇu : nāmanāma
  sentence *-- ca1 : samuccaya
  sentence *-- rājaputto : kattar
  sentence *-- Jotipālo : nāmanāma
  sentence *-- ca2 : samuccaya
  sentence *-- mānavo : kattar
  sentence *-- sahāyā : kamma
  sentence *-- ahesuṃ: kiriya
```

### Personal pronouns

```mermaid
classDiagram
  class sentence["ahaṃ asmi brahmā issaro"] {
    <<vākya>>
    english(I am the Lord God)
  }
  class ahaṃ {
    <<sabbanāma>>
    ⚧👤1️⃣👆
    english(I)
  }
  class asmi {
    <<ākhyāta>>
     👤👆▶️
    english([I] am)
  }
  namespace kamma {
    class brahmā {
      <<nāma>>
      🚹👤2️⃣
      english(God)
    }
    class issaro {
      <<nāma>>
      🚹👤2️⃣
      english(Lord)
    }
  }
  sentence *-- ahaṃ : kattar
  sentence *-- asmi: kiriya
  sentence *-- brahmā : kamma
  sentence *-- issaro : kamma
```

### "Anaphoric" demonstrative pronoun

"that", "it": Refers back to someone or something previously mentioned in a
narrative.

Pronoun of absence: speak of someone or something in a story and therefore not
present to the listeners.

```mermaid
classDiagram
  class sentence["mayaṃ taṃ bhagavantaṃ avocuṃha"] {
    <<vākya>>
    english(We said that to the Blessed One)
  }
  class mayaṃ {
    <<sabbanāma>>
    ⚧👥1️⃣👆
    english(We)
  }
  class taṃ {
    <<niyamita>>
    ⚧👤🤟2️⃣
    english(that)
  }
  class bhagavantaṃ {
    <<nāma>>
    🚹👤2️⃣
    english(Blessed One)
  }
  class avocuṃha {
    <<ākhyāta>>
     👥👆⏮
    english(said)
  }
  sentence *-- mayaṃ : kattar
  sentence *-- taṃ : niyamita
  sentence *-- bhagavantaṃ : kamma
  sentence *-- avocuṃha: dvikammaka
```

### "Diectic" demonstrative pronoun

"this", "it": Refers to present object or person.

Pronoun of presence: referring to someone or something present

```mermaid
classDiagram
  class sentence["eso Mahārāja Bhagavā"] {
    <<vākya>>
    english(Mahārāja, this is the Bhagavā [Blessed One])
  }
  class eso {
    <<niyamita>>
    🚹👤🤟1️⃣
    english(this)
  }
  class Mahārāja {
    <<nāma>>
    🚹👤0️⃣
    english(that)
  }
  class Bhagavā {
    <<nāma>>
    🚹👤1️⃣
    english(Blessed One)
  }
  sentence *-- eso : niyamita
  sentence *-- Mahārāja : ālapana
  sentence *-- Bhagavā : kattar
```

Emphasise a nearer object


```mermaid
classDiagram
  class sentence["idaṃ avoca Bhagavā"] {
    <<vākya>>
    english(The Bhagavā said this)
  }
  class idaṃ {
    <<niyamita>>
    🚻👤🤟2️⃣
    english(this)
  }
  class avoca {
    <<ākhyāta>>
    👤🤟⏮
    english(said)
  }
  class Bhagavā {
    <<nāma>>
    🚹👤1️⃣
    english(Blessed One)
  }
  sentence *-- idaṃ : niyamita
  sentence *-- avoca : ākhyāta
  sentence *-- Bhagavā : kattar
```

### Emphatic assertion

```mermaid
classDiagram
  class sentence["atthi kayo"] {
    <<vākya>>
    english(There is a body)
  }
  class atthi {
    <<ākhyāta>>
     👤🤟▶️
    english(There is)
  }
  class kayo {
    <<nāma>>
    🚹👤1️⃣
    english(body)
  }
  sentence *-- atthi: ākhyāta
  sentence *-- kayo : kattar
```

### Negation

```mermaid
classDiagram
  class sentence["tvaṃ na passasi"] {
    <<vākya>>
    english(You do not see)
  }
  class tvaṃ {
    <<sabbanāma>>
    ⚧👤🤘1️⃣
    english(You)
  }
  class na {
    <<nipāta>>
    english(not)
  }
  class passasi {
    <<ākhyāta>>
     👤🤘▶️
    english(see)
  }
  sentence *-- tvaṃ : kattar
  sentence *-- na : nipāta
  sentence *-- passasi: ākhyāta
```

### Prohibition or negative injunction

Used with second person in aorist tense (but loses time reference and can apply
to present or future)

```mermaid
classDiagram
  class sentence["mā paridevesi"] {
    <<vākya>>
    english(Don't grieve)
  }
  class mā {
    <<nipāta>>
    english(do not)
  }
  class paridevesi {
    <<ākhyāta>>
     👤🤘⏮
    english(grieved)
  }
  sentence *-- mā : nipāta
  sentence *-- paridevesi: ākhyāta
```

### Wish

Used with third person in aorist tense - appears regularly in polite address

```mermaid
classDiagram
  class sentence["mā h'eva rājā kālam akāsi"] {
    <<vākya>>
    english(May the king not die)
  }
  class mā["mā h'eva"] {
    <<nipāta>>
    english(do not)
  }
  class rājā {
    <<nāma>>
    🚹👤1️⃣
    english(king)
  }
  class kālam {
    <<nāma>>
    🚹👤2️⃣ 
    english(time)
  }
  class akāsi {
    <<ākhyāta>>
     👤🤟⏮
    english(made)
  }
  sentence *-- mā : nipāta
  sentence *-- rājā : kattar
  sentence *-- kālam : kamma
  sentence *-- akāsi: ākhyāta
```

### Double Negation

Equivalent to a strong affirmation

```mermaid
classDiagram
  class sentence["mā h'eva kho kumāro na rajjaṃ kāresi"] {
    <<vākya>>
    english(Don't let the prince not rule the kingdom)
  }
  class mā["mā h'eva"] {
    <<nipāta>>
    english(do not)
  }
  class kho {
    <<nipāta>>
    english(indeed)
  }
  class kumāro {
    <<nāma>>
    🚹👤1️⃣
    english(prince)
  }
  class na {
    <<nipāta>>
    english(not)
  }
  class rajjaṃ {
    <<nāma>>
    🚹👤2️⃣ 
    english(kingdom)
  }
  class kāresi {
    <<ākhyāta>>
     👤🤟⏮
    english(rule)
  }
  sentence *-- mā : nipāta
  sentence *-- kho : nipāta
  sentence *-- kumāro : kattar
  sentence *-- na : nipāta
  sentence *-- rajjaṃ : kamma
  sentence *-- kāresi: ākhyāta
```

### Vocative

Nominative of address, used enclitically

```mermaid
classDiagram
  class sentence["na tvaṃ deva vañcemi"] {
    <<vākya>>
    english(I don't deceive you, O King)
  }
  class na {
    <<nipāta>>
    english(not)
  }
  class tvaṃ {
    <<sabbanāma>>
    ⚧👤🤘1️⃣
    english(you)
  }
  class deva {
    <<nāma>>
    🚹👤0️⃣
    english(O King)
  }
  class vañcemi {
    <<ākhyāta>>
     👤👆⏮
    english([I] deceived)
  }
  sentence *-- na : nipāta
  sentence *-- tvaṃ : kattar
  sentence *-- deva : ālapana
  sentence *-- vañcemi: ākhyāta
```

### Imperative (command)

```mermaid
classDiagram
  class sentence["ehi tvaṃ purisa"] {
    <<vākya>>
    english(You must go, man)
  }
  class ehi {
    <<ākhyāta>>
     👤👆⏹
    english([must] go)
  }
  class tvaṃ {
    <<sabbanāma>>
    ⚧👤🤘1️⃣
    english(you)
  }
  class purisa {
    <<nāma>>
    🚹👤0️⃣
    english(man)
  }
  sentence *-- ehi: piñcamī
  sentence *-- tvaṃ : kattar
  sentence *-- purisa : ālapana
```

### Imperative (invitation or wish)

```mermaid
classDiagram
  class sentence["etu bhagavā"] {
    <<vākya>>
    english(Let the Blessed One come)
  }
  class etu {
    <<ākhyāta>>
     👤👆⏹
    english([must] come)
  }
  class bhagavā {
    <<nāma>>
    🚹👤1️⃣
    english(Blessed One)
  }
  sentence *-- etu: piñcamī
  sentence *-- bhagavā : kattar
```

### Imperative (don't bother)

Let it be, never mind, let him not, don't trouble

```mermaid
classDiagram
  class sentence["tiṭṭhatha tumhe"] {
    <<vākya>>
    english(Don't you bother)
  }
  class tiṭṭhatha {
    <<ākhyāta>>
     👥🤟⏹
    english(wait/remain)
  }
  class tumhe {
    <<sabbanāma>>
    ⚧👥🤟1️⃣
    english(you)
  }
  sentence *-- tiṭṭhatha: piñcamī
  sentence *-- tumhe : kattar
```

### Respectful address

```mermaid
classDiagram
  class sentence["nisidatu bhagavā"] {
    <<vākya>>
    english(Let the Fortunate One sit down)
  }
  class nisidatu {
    <<ākhyāta>>
     👤👆⏹
    english([must] sit)
  }
  class bhagavā {
    <<nāma>>
    🚹👤1️⃣
    english(Blessed One)
  }
  sentence *-- nisidatu: piñcamī
  sentence *-- bhagavā : kattar
```

### Quotation

Short vowel preceeding `ti` is lengthened, and `ṃ` changed to `n`

```mermaid
classDiagram
  class sentence["evaṃ devā ti"] {
    <<vākya>>
    english('[It is] so, O King')
  }
  namespace quotation {
    class evaṃ {
      <<nipāta>>
      english(thus)
    }
    class deva {
      <<nāma>>
      🚹👤0️⃣
      english(O King)
    }
  }
  class ti {
    <<nipāta>>
    marker(quotation)
  }
  sentence *-- evaṃ: nipāta
  sentence *-- deva : ālapana
  sentence *-- ti: nipāta
```

```mermaid
classDiagram
  class sentence["n'eso n'atthi ti vadāmi"] {
    <<vākya>>
    english(I don't say "This doesn't exist")
  }
  class na1["na"] {
    <<nipāta>>
    english(not)
  }
  namespace quotation {
    class eso {
      <<sabbanāma>>
      🚻👤🤟1️⃣
      english(this)
    }
    class na2["na"] {
      <<nipāta>>
      english(not)
    }
    class atthi {
      <<ākhyāta>>
      👤🤟▶️
      english(exist)
    }
  }
  class ti {
    <<nipāta>>
    marker(quotation)
  }
  class vadāmi {
    <<ākhyāta>>
     ⚧👆▶️
    english([I] say)
  }
  sentence *-- na1: nipāta
  sentence *-- eso: kattar
  sentence *-- na2: nipāta
  sentence *-- atthi : kiriya
  sentence *-- ti: nipāta
  sentence *-- vadāmi : kiriya
```

### Past participle (present perfect)

periphrastic: past participle followed by "to be" verb

```mermaid
classDiagram
  class sentence["paribbājako santuṭṭho hoti"] {
    <<vākya>>
    english(The wanderer is contented)
  }
  class paribbājako {
    <<nāma>>
    🚹👤1️⃣
    english(wanderer)
  }
  class santuṭṭho {
    <<past participle>>
    ⏪🚹👤1️⃣
    english(contented)
  }
  class hoti {
    <<ākhyāta>>
     👤🤟▶️
    english(is)
  }
  sentence *-- paribbājako : kattar
  sentence *-- santuṭṭho : past participle
  sentence *-- hoti: kiriya
```

### Instrumental case

```mermaid
classDiagram
  class sentence["kāyena phusati"] {
    <<vākya>>
    english([He] touches with body)
  }
  class kāyena {
    <<nāma>>
    🚹👤3️⃣
    english([with] body)
  }
  class phusati {
    <<ākhyāta>>
     👤🤟▶️
    english(touch)
  }
  sentence *-- kāyena : karaṇa
  sentence *-- phusati: kiriya
```

### Impersonal (`bhāva`) Past Participle 

```mermaid
classDiagram
  class sentence["evaṃ me sutaṃ"] {
    <<vākya>>
    english(Thus [it] was heard by me)
  }
  class evaṃ {
    <<nipāta>>
    english(thus)
  }
  class me {
    <<sabbanāma>>
    ⚧👤👆3️⃣
    english([by] me)
  }
  class sutaṃ {
    <<past participle>>
    🔵⏪🚹👤1️⃣
    english(heard)
  }
  sentence *-- evaṃ : nipāta
  sentence *-- me : karaṇa
  sentence *-- sutaṃ: past participle
```

### Passive (`kammapada`) Past Participle

```mermaid
classDiagram
  class sentence["mayā ime sattā nimmitā"] {
    <<vākya>>
    english(By me these beings [were/have been] created)
  }
  class mayā {
    <<sabbanāma>>
    ⚧👤👆3️⃣
    english([by] me)
  }
  class ime {
    <<sabbanāma>>
    🚹👥1️⃣
    english(these)
  }
  class sattā {
    <<sabbanāma>>
    🚹👥1️⃣
    english(beings)
  }
  class nimmitā {
    <<past participle>>
    🔴⏪🚹👥1️⃣
    english(created)
  }
  sentence *-- mayā : karaṇa
  sentence *-- ime : kamma
  sentence *-- sattā : kamma
  sentence *-- nimmitā: past participle
```

### Active Past Participle

```mermaid
classDiagram
  class sentence["sujātā nāma bhante upāsikā kālakatā"] {
    <<vākya>>
    english(Venerable Sir, the female lay disciple named Sujātā has died)
  }
  namespace kattar {
    class sujātā {
      <<nāmanāma>>
      🚺👤1️⃣
      english(Sujātā)
    }
    class nāma {
      <<avyaya>>
      english(named)
    }
    class upāsikā {
      <<nāma>>
      🚺👤1️⃣
      english(food)
    }
  }
  class bhante {
    <<nāma>>
    🚹👤0️⃣
    english(Venerable Sir)
  }
  class kālakatā {
    <<past participle>>
    🟢⏪🚺👤1️⃣
    english(created)
  }
  sujātā --> nāma
  sentence *-- sujātā : kattar
  sentence *-- nāma : guṇanāma
  sentence *-- bhante : ālapana
  sentence *-- upāsikā : kattar
  sentence *-- kālakatā: past participle
```

### Time by means of which

`aparena samayena`
: after some time, in due course

`tena samayena`
: at that time

`accayena`
: through (after) the passage/passing away [of time/person]

```mermaid
classDiagram
  class sentence["ahaṃ tena samayena rājā Mahāsudassano ahosiṃ"] {
    <<vākya>>
    english(At that time I was King Mahāsudassana)
  }
  class tena {
    <<sabbanāma>>
    ⚧👤🤟3️⃣
    english(that)
  }
  class samayena {
    <<nāma>>
    🚹👤3️⃣
    english(at time)
  }
  namespace kattar {
    class ahaṃ {
      <<sabbanāma>>
      ⚧👤👆1️⃣
      english([by] me)
    }
    class rājā {
      <<nāma>>
      🚹👤1️⃣
      english(king)
    }
    class Mahāsudassano {
      <<nāmanāma>>
      🚹👤1️⃣
      english(Mahāsudassana)
    }
  }
  class ahosiṃ {
    <<ākhyāta>>
    👤👆⏮
    english(was)
  }
  sentence *-- ahaṃ : kattar
  sentence *-- tena : karaṇa
  sentence *-- samayena : karaṇa
  sentence *-- rājā : kattar
  sentence *-- Mahāsudassano : kattar
  sentence *-- ahosiṃ: ajjatanī
```

### Present participle

```mermaid
classDiagram
  class sentence["gacchaṃ passati"] {
    <<vākya>>
    english(As [he] is going [he] sees)
  }
  class gacchaṃ {
    <<missakiriyā>>
    ⏬🚹👤1️⃣
    english(created)
  }
  class passati {
    <<ākhyāta>>
     👤🤟▶️
    english(touch)
  }
  sentence *-- gacchaṃ : missakiriyā
  sentence *-- passati: kiriya
```

### Gerund (absolutive)

```mermaid
classDiagram
  class sentence["disvā evaṃ avocumha"] {
    <<vākya>>
    english(Having seen, [we] said thus)
  }
  class disvā {
    <<pubbakiriyā>>
    ⏫
    english(having seen)
  }
  class evaṃ {
    <<nipāta>>
    english(thus)
  }
  class avocumha {
    <<ākhyāta>>
     👥👆⏮
    english([We] said)
  }
  sentence *-- disvā : pubbakiriyā
  sentence *-- evaṃ : nipāta
  sentence *-- avocumha: kiriya
```

### Passive (`kammapada`)

```mermaid
classDiagram
  class sentence["bhojanaṃ diyati"] {
    <<vākya>>
    english(Food is given)
  }
  class bhojanaṃ {
    <<nāma>>
    🚹👤1️⃣
    english(food)
  }
  class diyati {
    <<ākhyāta>>
     🔴👤🤟▶️
    english(is given)
  }
  sentence *-- bhojanaṃ : kamma
  sentence *-- diyati: kammapada
```

### Interrogative (`saccaṃ`)

```mermaid
classDiagram
  class sentence["saccaṃ Nigrodha bhāsitā te esā vācā"] {
    <<vākya>>
    english(Is it true, Nigrodha, [that] this speech has been spoken by you?)
  }
  class saccaṃ {
    <<nipāta>>
    english(is it true that ...)
  }
  class Nigrodha {
    <<nāmanāma>>
    🚹👤0️⃣
    english(Nigrodha)
  }
  class bhāsitā {
    <<past participle>>
    🔴⏪🚺👤1️⃣
    english(is spoken)
  }
  class esā {
    <<sabbanāma>>
    🚺👤🤟1️⃣
    english(this)
  }
  class vācā {
    <<nāma>>
    🚺👤1️⃣
    english(speech)
  }
  class te {
    <<sabbanāma>>
    ⚧👤🤘3️⃣
    english(by you)
  }
  sentence *-- saccaṃ : nipāta
  sentence *-- Nigrodha : ālapana
  sentence *-- bhāsitā : past participle
  sentence *-- te : kattar
  sentence *-- esā : kamma
  sentence *-- vācā : kamma
```

```mermaid
classDiagram
  class sentence["saccaṃ bhante bhāsitā me esā vācā"] {
    <<vākya>>
    english(It is true, Venerable Sir, (that) this speech has been spoken by me)
  }
  class saccaṃ {
    <<nipāta>>
    english(it is true that ...)
  }
  class bhante {
    <<nāma>>
    🚹👤0️⃣
    english(Venerable Sir)
  }
  class bhāsitā {
    <<past participle>>
    🔴⏪🚺👤1️⃣
    english(is spoken)
  }
  class esā {
    <<sabbanāma>>
    🚺👤🤟1️⃣
    english(this)
  }
  class vācā {
    <<nāma>>
    🚺👤1️⃣
    english(speech)
  }
  class me {
    <<sabbanāma>>
    ⚧👤👆3️⃣
    english(by me)
  }
  sentence *-- saccaṃ : nipāta
  sentence *-- bhante : ālapana
  sentence *-- bhāsitā : past participle
  sentence *-- me : kattar
  sentence *-- esā : kamma
  sentence *-- vācā : kamma
```

### Or, either (`vā`)

```mermaid
classDiagram
  class sentence["idaṃ vuccati cittan ti vā viññāṇan ti vā"] {
    <<vākya>>
    english(This is called 'mind' or 'consciousness')
  }
  class idaṃ {
    <<sabbanāma>>
    🚺👤🤟1️⃣
    english(this)
  }
  class vuccati {
    <<ākhyāta>>
     🔴👤🤟▶️
    english(is called)
  }
  namespace kamma1 {
    class cittaṃ {
      <<nāma>>
      🚻👤1️⃣
      english(mind)
    }
    class ti1["ti"] {
      <<nipāta>>
      marker(quotation)
    }
    class vā1["vā"] {
      <<nipāta>>
      english(or)
    }
  }
  namespace kamma2 {
    class viññāṇaṃ {
      <<nāma>>
      🚻👤1️⃣
      english(consciousness)
    }
    class ti2["ti"] {
      <<nipāta>>
      marker(quotation)
    }
    class vā2["vā"] {
      <<nipāta>>
      english(or)
    }
  }
  sentence *-- idaṃ : kamma
  sentence *-- vuccati : kammapada
  sentence *-- cittaṃ: kattar
  sentence *-- ti1: nipāta
  sentence *-- vā1: nipāta
  sentence *-- viññāṇaṃ: kattar
  sentence *-- ti2: nipāta
  sentence *-- vā2: nipāta
```

### Future tense

```mermaid
classDiagram
  class sentence["na ciraṃ tathāgatassa parinibbānaṃ bhavissati"] {
    <<vākya>>
    english(The extinction of the Tathāgata will be soon)
  }
  class na {
    <<nipāta>>
    english(not)
  }
  class ciraṃ {
    <<nipāta>>
    english(for a long time, after a long time)
  }
  namespace kattar {
    class tathāgatassa {
      <<nāma>>
      🚹👤6️⃣
      english(Tathāgata's)
    }
    class parinibbānaṃ {
      <<nāma>>
      🚻👤1️⃣
      english(extinction)
    }
  }
  class bhavissati {
    <<ākhyāta>>
     👤🤟⏭
    english(will be)
  }
  tathāgatassa <-- parinibbānaṃ
  sentence *-- na : nipāta
  sentence *-- ciraṃ : nipāta
  sentence *-- tathāgatassa : chaṭṭhī
  sentence *-- parinibbānaṃ : kattar
  sentence *-- bhavissati: bhavissanti
```

```mermaid
classDiagram
  class sentence["imassa jayo bhavissati"] {
    <<vākya>>
    english(Victory will be his)
  }
  namespace kattar {
    class imassa {
      <<sabbanāma>>
      ⚧👤🤟6️⃣
      english(his)
    }
    class jayo {
      <<nāma>>
      🚹👤1️⃣
      english(victory)
    }
  }
  class bhavissati {
    <<ākhyāta>>
     👤🤟⏭
    english(will be)
  }
  imassa <-- jayo
  sentence *-- imassa : chaṭṭhī
  sentence *-- jayo : kattar
  sentence *-- bhavissati: bhavissanti
```

### Genitive

```mermaid
classDiagram
  class sentence["ayaṃ imassa bhāsitassa attho"] {
    <<vākya>>
    english(This is the meaning of this saying)
  }
  namespace kattar {
    class ayaṃ {
      <<sabbanāma>>
      ⚧👤🤟1️⃣
      english(his)
    }
    class imassa {
      <<sabbanāma>>
      ⚧👤🤟6️⃣
      english(of this)
    }
    class bhāsitassa {
      <<nāma>>
      🚹👤6️⃣
      english(of speech)
    }
    class attho {
      <<nāma>>
      🚹👤1️⃣
      english(meaning)
    }
  }
  imassa <-- bhāsitassa
  bhāsitassa <-- attho
  sentence *-- ayaṃ : kattar
  sentence *-- imassa : chaṭṭhī
  sentence *-- bhāsitassa : chaṭṭhī
  sentence *-- attho : kattar
```

### Agent-Genitive ("Subjective Genitive")

```mermaid
classDiagram
  class sentence["brāhmaṇassa pūjito (Soṇadaṇḍo)"] {
    <<vākya>>
    english([Soṇadaṇḍo was] honoured of [by] the priest)
  }
  namespace kattar {
    class s["Soṇadaṇḍo"] {
      <<nāmanāma>>
      🚹👤1️⃣
      english(Soṇadaṇḍa)
    }
    class brāhmaṇassa {
      <<nāma>>
      🚹👤6️⃣
      english(of the brāhmaṇ)
    }
    class pūjito {
      <<past participle>>
      ⏪🚹👤1️⃣
      english(honoured)
    }
  }
  brāhmaṇassa <-- pūjito
  sentence *-- s : kattar
  sentence *-- brāhmaṇassa : chaṭṭhī
  sentence *-- pūjito : kattar
```

### Patient-Genitive ("Objective Genitive")

```mermaid
classDiagram
  class sentence["ahaṃ … tassa yaññassa yājetā"] {
    <<vākya>>
    english(I ... (was) the performer of that sacrifice)
  }
  namespace kattar {
    class ahaṃ {
      <<sabbanāma>>
      ⚧👤👆1️⃣
      english(I)
    }
    class tassa {
      <<sabbanāma>>
      🚹👤🤟6️⃣
      english(of that)
    }
    class yaññassa {
      <<nāma>>
      🚹👤6️⃣
      english(of sacrifice)
    }
    class yājetā {
      <<past participle>>
      ⏪🚹👤1️⃣
      english(sacrificer (performer))
    }
  }
  tassa <-- yaññassa
  yaññassa <-- yājetā
  sentence *-- ahaṃ : kattar
  sentence *-- tassa : chaṭṭhī
  sentence *-- yaññassa : chaṭṭhī
  sentence *-- yājetā : kattar
```

### Genitive Absolute

The "genitive absolute" consists of a noun (or pronoun) followed by a participle, both inflected in the genitive. This nexus stands apart from the other words of the sentence and means "while (the noun was doing the participle)". Often the genitive absolute has the special sense of disregarding: "despite (the noun doing the participle)", "under their very noses," as when the participle means "seeing", "looking on". The genitive absolute is useful for constructing a sentence with two agents,

```mermaid
classDiagram
  class sentence["kammaṃ kho pana me karontassa kāyo kilamissati"] {
    <<vākya>>
    english(However, while I am doing the work, (my) body will become tired)
  }
  namespace genitive_absolute {
    class kammaṃ {
      <<nāma>>
      🚹👤2️⃣
      english(work)
    }
    class kho {
      <<nipāta>>
      english(indeed)
    }
    class pana {
      <<nipāta>>
      english(however)
    }
    class me {
      <<sabbanāma>>
      ⚧👤👆6️⃣
      english(of I)
    }
    class karontassa {
      <<past participle>>
      ⏪🚹👤6️⃣
      english(of doing)
    }
  }
  class kāyo {
    <<nāma>>
    🚹👤1️⃣
    english(body)
  }
  class kilamissati {
    <<ākhyāta>>
     👤🤟⏭
    english(will be tired)
  }
  kammaṃ --> karontassa : kamma
  me <-- karontassa : chaṭṭhī
  sentence *-- kammaṃ
  sentence *-- kho
  sentence *-- pana
  sentence *-- me : genitive absolute
  sentence *-- karontassa : genitive absolute
  sentence *-- kāyo : katar
  sentence *-- kilamissati : bhavissanti
```
