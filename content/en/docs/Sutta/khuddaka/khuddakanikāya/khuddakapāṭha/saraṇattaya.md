---
categories: ["Sutta"]
tags: ["khuddaka", "khuddakanikāya", "saraṇattaya"]
title: "saraṇattaya"
linkTitle: "saraṇattaya"
date: 2023-08-06
weight: 511
description: The Three Refuges
---
Khp. 1:

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
    english((For the second/third time) I go to the Buddha/Dhamma/Sangha as refuge)
  }
  namespace saṅkhyāpūraṇa {
    class dutiyaṃ {
      <<nāma>>
      2️⃣
      english(second time)
    }
    class tatiyaṃ {
      <<nāma>>
      2️⃣
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
      🚹👤2️⃣
    }
    class dhammaṃ {
      <<nāma>>
      🚹👤2️⃣
    }
    class saṅghaṃ {
      <<nāma>>
      🚹👤2️⃣
    }
  }
  class saraṇaṃ {
    <<nāma>>
     🚹👤2️⃣
    english(as refuge)
  }
  class gacchāmi {
    <<ākhyāta>>
     👤👆vattamāna
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
