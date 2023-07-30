---
title: "Grammar (vyākaraṇa)"
linkTitle: "Grammar"
date: 2023-07-30
weight: 100
description: >
  Grammar guide (evolving)
---

## pada

Word

```markmap
---
markmap:
  zoom: false
  pan: false
---

# pada
## liṅga (stem)
### dhātu (root)
### paccaya (suffix)
## vibhatti (inflectional ending)
```

## padajāti

The four parts of speech

```markmap
---
markmap:
  zoom: false
  pan: false
---
# padajāti
## nāma
- noun
## ākhyāta
- verb
## upasagga
- prefix
## nipāta
- particle
- indeclinable
```

## nāma

Noun

```markmap
---
markmap:
  zoom: false
  pan: false
---
# nāma
## saṅkhyā (number)
### ekavacana (singular)
### bahuvacana (plural)
## liṅga (gender)
### pulliṅga (masculine)
### itthiliṅga (feminine)
### napuṁsakaliṅga (neuter)
## kāraka (case)
### pathamāvacana, paccattavacana – nominative case (paṭhamā: first)
### upayogavacana, kammavacana – accusative (dutiyā: second)
### karaṇavacana – instrumental (tatiyā: third)
### sampadānavacana – dative (catutthī: fourth)
### apādānavacana, avadhi – ablative (pañcamī: fifth)
### sāmivacana, sambandha – genitive (chaṭṭhī: sixth)
### bhummavacana, okāsa, ādhāra, sambodhana – locative case (sattamī: seventh)
### āmantaṇavacana, ālapanavacana – vocative
```

## ākhyāta

Verb

```markmap
---
markmap:
  zoom: false
  pan: false
---
# ākhyāta
## lakāra (tense)
### vattamāna (present indicative)
### pañcamī (imperative) [mood]
### ajjatanī (aorist) [past]
### sattamī (optative) [mood]
### anāgatakāla (future)
### kālātipatti (conditional)
### kārita (causative)
## purisa (person)
### paṭhamapurisa (third person)
### majjhimapurisa (second person)
### uttamapurisa (first person)
## saṅkhyā (number)
### ekavacana (singular)
### bahuvacana (plural)
```

## vākya

sentence

```markmap
---
markmap:
  zoom: false
  pan: false
---
# vākya
## kiriyā
- action
- verb
## kattar
- agent
- noun
## kamma
- patient
- noun
```

```mermaid
classDiagram
  class `loko vivaṭṭhati` {
    <<sentence>>
    english(the world evolves)
  }
  class loko {
    <<noun>>
    pulliṅga [masculine]
    paṭhamā: paccattavacana [nominative]
    ekavacana [singular]
    english(world)
  }
  class lok {
    <<root>>
    english(see)
  }
  class loka {
    <<stem>>
  }
  class vivaṭṭhati {
    <<verb>>
    vattamānakāla [present indicative]
    parassapada [active]
    paṭhamapurisa [3rd person]
    ekavacana [singular]
    english(evolves)
  }
  class vi {
    <<prefix>>
    english(apart, asunder)
  }
  class vaṭṭ {
    <<root>>
    english(turn, roll, circle)
  }
  class vaṭṭa {
    <<stem>>
  }
  `loko vivaṭṭhati` *-- loko : kiriyā
  loko *-- loka : rūpa
  loka *-- lok : dhātu
  vaṭṭa *-- vaṭṭ : dhātu
  vivaṭṭhati *-- vi : upasagga
  vivaṭṭhati *-- vaṭṭa : rūpa
  `loko vivaṭṭhati` *-- vivaṭṭhati : kattar
```
