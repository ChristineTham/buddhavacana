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

### Equational

```mermaid
classDiagram
  class sentence["devo amanusso hoti"] {
    <<vākya>>
    english(The deva is not human)
  }
  namespace equational {
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
  sentence *-- cavati: kiriya
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
  sentence *-- āharati: kiriya
```

### Bi-transitive (patient x-patient y-action)

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
    english(accepts)
  }
  sentence *-- upāsakaṃ : kamma x
  sentence *-- brāhmānaṃ : kamma y
  sentence *-- dhāreti: kiriya
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
