---
draft: true
categories: ["Sutta"]
tags: ["khuddaka", "khuddakanikāya", "saraṇattaya"]
title: "The Three Refuges (`saraṇattaya`)"
description: The Three Refuges
sidebar:
  label: Refuges
---

* [18Kh/1 Saraṇattaya](https://tipitaka2500.github.io/tipitaka/18Kh/1.html)

>buddhaṃ saraṇaṃ gacchāmi,  
>dhammaṃ saraṇaṃ gacchāmi,  
>saṅghaṃ saraṇaṃ gacchāmi.  
>dutiyampi buddhaṃ saraṇaṃ gacchāmi,  
>dutiyampi dhammaṃ saraṇaṃ gacchāmi,  
>dutiyampi saṅghaṃ saraṇaṃ gacchāmi.  
>tatiyampi buddhaṃ saraṇaṃ gacchāmi,  
>tatiyampi dhammaṃ saraṇaṃ gacchāmi,  
>tatiyampi saṅghaṃ saraṇaṃ gacchāmi.

```mermaid
classDiagram
  class sentence["dutiyampi/tatiyampi buddhaṃ/dhammaṃ/saṅghaṃ saraṇaṃ gacchāmi"] {
    <<vākya>>
    english([For the second/third time too,] I go to the Buddha/Dhamma/Saṅgha as refuge.)
  }
  namespace saṅkhyāpūraṇa {
    class dutiyaṃ {
      <<nāma>>
      ②
      english(second time)
    }
    class tatiyaṃ {
      <<nāma>>
      ②
      english(third time)
    }
  }
  class pi {
    <<nipāta>>
    english(too)
  }
  namespace saraṇa {
    class buddhaṃ {
      <<nāma>>
      🚹⨀②
    }
    class dhammaṃ {
      <<nāma>>
      🚹⨀②
    }
    class saṅghaṃ {
      <<nāma>>
      🚹⨀②
    }
  }
  class saraṇaṃ {
    <<nāma>>
     🚻⨀②
    english(as refuge)
  }
  class gacchāmi {
    <<ākhyāta>>
     ⨀👆vattamāna
    english(I go)
  }
  sentence *-- dutiyaṃ
  sentence *-- tatiyaṃ
  sentence *-- pi
  sentence *-- buddhaṃ : kamma
  sentence *-- dhammaṃ : kamma
  sentence *-- saṅghaṃ : kamma
  sentence *-- saraṇaṃ : kamma
  sentence *-- gacchāmi: kiriya
  buddhaṃ .. saraṇaṃ
  dhammaṃ .. saraṇaṃ
  saṅghaṃ .. saraṇaṃ
```

```mermaid
sequenceDiagram
participant ahaṃ as (ahaṃ)
participant buddhaṃ
participant dhammaṃ
participant saṅghaṃ
  loop (paṭhama), dutiyampi, tatiyampi
    ahaṃ ->> buddhaṃ : gacchāmi
    buddhaṃ ->> saraṇaṃ : (hoti)
    ahaṃ ->> dhammaṃ : gacchāmi
    dhammaṃ ->> saraṇaṃ : (hoti)
    ahaṃ ->> saṅghaṃ : gacchāmi
    saṅghaṃ ->> saraṇaṃ : (hoti)
  end
```

```mermaid
stateDiagram-v2
  state fork_state <<fork>>
  state join_state <<join>>
  [*] --> fork_state : gacchāmi
  fork_state --> buddhaṃ
  fork_state --> dhammaṃ
  fork_state --> saṅghaṃ
  buddhaṃ --> join_state
  dhammaṃ --> join_state
  saṅghaṃ --> join_state
  join_state --> saraṇaṃ
  saraṇaṃ --> fork_state : dutiyampi, tatiyampi
```
