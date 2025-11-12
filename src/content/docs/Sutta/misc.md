---
categories: ["sutta"]
tags: ["test","docs"]
title: "Miscellaneous from Sutta Piṭaka"
sidebar:
  label: "Other"
description: >
  Summary of key concepts from the Basket of Discourses
---

* [14S5/4.1.8 Daṭṭhabbasutta](https://tipitaka2500.github.io/tipitaka/14S5/4/4.1/4.1.8.html)

```mermaid
mindmap
pañcindriyāni
  saddhindriyaṁ
    sotāpattiyaṅgesu
  vīriyindriyaṁ
    sammappadhānesu
  satindriyaṁ
    satipaṭṭhānesu
  samādhindriyaṁ
    jhānesu
  paññindriyaṁ
    ariyasaccesu
```

* [16A5/1.2.5 Daṭṭhabbasutta](https://tipitaka2500.github.io/tipitaka/16A5/1/1.2/1.2.5.html)

```mermaid
mindmap
pañcabalāni
  saddhābalaṁ
    sotāpattiyaṅgesu x4
  vīriyabalaṁ
    sammappadhānesu x4
  satibalaṁ
    satipaṭṭhānesu x4
  samādhibalaṁ
    jhānesu x4
  paññābalaṁ
    ariyasaccesu x4
```

```mermaid
classDiagram
dvādasāyatanāni --> aniccaṁ
dvādasāyatanāni --> dukkhaṁ
dvādasāyatanāni --> anattā
dvādasāyatanāni --> vipariṇāmadhammaṁ
```

```mermaid
---
title: Class Diagram of Core Teachings
config:
  theme: base
  themeVariables:
    primaryColor: "#f4dede"
---
classDiagram
direction LR
namespace 4ariyasaccāni {
  class cattāri_ariyasaccāni {
    english(noble truths)
  }
  class dukkhaṁ {
    english(suffering)
  }
  class dukkhasamudayaṁ {
    english(origin of suffering)
  }
  class dukkhanirodhaṁ {
    english(cessation of suffering)
  }
  class dukkhanirodhagāminī_paṭipadā {
    english(way leading to cessation of suffering)
  }
}
class nibbāna {
  english(enlightenment)
}
cattāri_ariyasaccāni *-- dukkhaṁ
cattāri_ariyasaccāni *-- dukkhasamudayaṁ
cattāri_ariyasaccāni *-- dukkhanirodhaṁ
cattāri_ariyasaccāni *-- dukkhanirodhagāminī_paṭipadā
dukkhanirodhaṁ --> nibbāna
dukkhanirodhagāminī_paṭipadā --> ariyo_aṭṭhaṅgiko_maggo

namespace ariyo_8_maggo {
  class ariyo_aṭṭhaṅgiko_maggo {
    english(noble 8fold path)
  }
  class sammādiṭṭhi {
    english(right views)
  }
  class sammāsaṅkappo {
    english(right intentions)
    nekkhammasaṅkappo
    abyāpādasaṅkappo
    avihiṁsāsaṅkappo
  }
  class sammāvācā {
    musāvādā veramaṇī
    pisuṇāya vācāya veramaṇī
    pharusāya vācāya veramaṇī
    samphappalāpā veramaṇī
    english(right speech)
  }
  class sammākammanto {
    pāṇātipātā veramaṇī
    adinnādānā veramaṇī
    abrahmacariyā veramaṇī
    english(right action)
  }
  class sammāājīvo {
    micchāājīvaṁ pahāya
    sammāājīvena jīvitaṁ kappeti
    english(right livelihood)
  }
  class sammāvāyāmo {
    english(right effort)
  }
  class sammāsati {
    english(right mindfulness)
  }
  class sammāsamādhi {
    english(right concentration)
  }
}
ariyo_aṭṭhaṅgiko_maggo *-- sammādiṭṭhi
sammādiṭṭhi --> cattāri_ariyasaccāni
ariyo_aṭṭhaṅgiko_maggo *-- sammāsaṅkappo
ariyo_aṭṭhaṅgiko_maggo *-- sammāvācā
ariyo_aṭṭhaṅgiko_maggo *-- sammākammanto
ariyo_aṭṭhaṅgiko_maggo *-- sammāājīvo
ariyo_aṭṭhaṅgiko_maggo *-- sammāvāyāmo
ariyo_aṭṭhaṅgiko_maggo *-- sammāsati
ariyo_aṭṭhaṅgiko_maggo *-- sammāsamādhi

class pañcakkhandhā {
  rūpakkhandho
  vedanākkhandho
  saññākkhandho
  saṅkhārakkhandho
  viññāṇakkhandho
  english(aggregates)
}
dukkhaṁ --> pañcakkhandhā
class aniccaṁ {
  english(impermanent)
}
class anattā {
  english(not eternal self)
}
pañcakkhandhā --> aniccaṁ
pañcakkhandhā --> anattā

namespace paṭiccasamuppādā {
  class paṭiccasamuppādo {
    english(Dependent Origination)
  }
  class avijjā {
    dukkhe aññāṇaṁ
    dukkhasamudaye aññāṇaṁ
    dukkhanirodhe aññāṇaṁ
    dukkhanirodhagāminiyā paṭipadāya aññāṇaṁ
  }
  class saṅkhārā {
    kāyasaṅkhāro
    vacīsaṅkhāro
    cittasaṅkhāro
  }
  class viññāṇaṁ {
    cakkhuviññāṇaṁ
    sotaviññāṇaṁ
    ghānaviññāṇaṁ
    jivhāviññāṇaṁ
    kāyaviññāṇaṁ
    manoviññāṇaṁ
  }
  class nāmarūpaṁ {
    vedanā
    saññā
    cetanā
    phasso
    manasikāro
  }
  class saḷāyatanaṁ {
    cakkhāyatanaṁ
    sotāyatanaṁ
    ghānāyatanaṁ
    jivhāyatanaṁ
    kāyāyatanaṁ
    manāyatanaṁ
  }
  class phasso {
    cakkhusamphasso
    sotasamphasso
    ghānasamphasso
    jivhāsamphasso
    kāyasamphasso
    manosamphasso

  }
  class vedanā {
    cakkhusamphassajā vedanā
    sotasamphassajā vedanā
    ghānasamphassajā vedanā
    jivhāsamphassajā vedanā
    kāyasamphassajā vedanā
    manosamphassajā vedanā
  }
  class taṇhā {
    rūpataṇhā
    saddataṇhā
    gandhataṇhā
    rasataṇhā
    phoṭṭhabbataṇhā
    dhammataṇhā
  }
  class upādānaṁ {
    kāmupādānaṁ
    diṭṭhupādānaṁ
    sīlabbatupādānaṁ
    attavādupādānaṁ
  }
  class bhavo {
    kāmabhavo
    rūpabhavo
    arūpabhavo
  }
  class jāti {
    jāti
    sañjāti
    okkanti
    abhinibbatti
    khandhānaṁ pātubhāvo
    āyatanānaṁ paṭilābho
  }
}
avijjā .. cattāri_ariyasaccāni
dukkhasamudayaṁ --> paṭiccasamuppādo
dukkhanirodhaṁ --> paṭiccasamuppādo
paṭiccasamuppādo *-- avijjā
paṭiccasamuppādo *-- saṅkhārā
paṭiccasamuppādo *-- viññāṇaṁ
paṭiccasamuppādo *-- nāmarūpaṁ
paṭiccasamuppādo *-- saḷāyatanaṁ
paṭiccasamuppādo *-- phasso
paṭiccasamuppādo *-- vedanā
paṭiccasamuppādo *-- taṇhā
paṭiccasamuppādo *-- upādānaṁ
paṭiccasamuppādo *-- bhavo
paṭiccasamuppādo *-- jāti
avijjā --> saṅkhārā
saṅkhārā --> viññāṇaṁ
viññāṇaṁ --> nāmarūpaṁ
nāmarūpaṁ --> saḷāyatanaṁ
saḷāyatanaṁ --> phasso
phasso --> vedanā
vedanā --> taṇhā
taṇhā --> upādānaṁ
upādānaṁ --> bhavo
bhavo --> jāti

class cattāro_sammappadhānā {
    anuppannānaṁ pāpakānaṁ akusalānaṁ dhammānaṁ anuppādāya
    uppannānaṁ pāpakānaṁ akusalānaṁ dhammānaṁ pahānāya
    anuppannānaṁ kusalānaṁ dhammānaṁ uppādāya
    uppannānaṁ kusalānaṁ dhammānaṁ ṭhitiyā asammosāya bhiyyobhāvāya vepullāya bhāvanāya pāripūriyā
    english(right efforts)
}
sammāvāyāmo --> cattāro_sammappadhānā

class cattāro_satipaṭṭhānā {
    kāye kāyānupassī
    vedanāsu vedanānupassī
    citte cittānupassī
    dhammesu dhammānupassī
    english(mindfulness)
}
sammāsati --> cattāro_satipaṭṭhānā

class jhānā {
  <<jhana>>
    paṭhamaṁ jhānaṁ
    dutiyaṁ jhānaṁ
    tatiyaṁ jhānaṁ
    catutthaṁ jhānaṁ
    english(calmness states)
}

sammāsamādhi --> jhānā

class cattāro_iddhipādā {
    chandasamādhipadhānasaṅkhārasamannāgataṁ
    vīriyasamādhipadhānasaṅkhārasamannāgataṁ
    cittasamādhipadhānasaṅkhārasamannāgataṁ
    vīmaṁsāsamādhipadhānasaṅkhārasamannāgataṁ
    english(success factors)
}
ariyo_aṭṭhaṅgiko_maggo --> cattāro_iddhipādā

class satta_bojjhaṅgā {
    satisambojjhaṅgo
    dhammavicayasambojjhaṅgo
    vīriyasambojjhaṅgo
    pītisambojjhaṅgo
    passaddhisambojjhaṅgo
    samādhisambojjhaṅgo
    upekkhāsambojjhaṅgo
    english(awakening factors)
}
dukkhanirodhagāminī_paṭipadā --> satta_bojjhaṅgā

class dvādasāyatanāni {
  cakkhāyatanaṁ
  rūpāyatanaṁ
  sotāyatanaṁ
  saddāyatanaṁ
  ghānāyatanaṁ
  gandhāyatanaṁ
  jivhāyatanaṁ
  rasāyatanaṁ
  kāyāyatanaṁ
  phoṭṭhabbāyatanaṁ
  manāyatanaṁ
  dhammāyatanaṁ
  english(sense bases)
}
saḷāyatanaṁ --> dvādasāyatanāni

namespace elements {
    class catasso_dhātuyo {
    Pathavīdhātu
    āpodhātu
    tejodhātu
    vāyodhātu
    englist(elements)
  }
  class chadhātuyo1 {
    pathavīdhātu
    āpodhātu
    tejodhātu
    vāyodhātu
    ākāsadhātu
    viññāṇadhātu
  }
  class chadhātuyo2 {
    sukhadhātu
    dukkhadhātu
    somanassadhātu
    domanassadhātu
    upekkhādhātu
    avijjādhātu
  }
  class chadhātuyo3 {
    kāmadhātu
    byāpādadhātu
    vihiṁsādhātu
    nekkhammadhātu
    abyāpādadhātu
    avihiṁsādhātu
  }
}
nāmarūpaṁ --> chadhātuyo1
nāmarūpaṁ --> catasso_dhātuyo
vedanā --> chadhātuyo2
taṇhā --> chadhātuyo3

class catasso_appamaññāyo {
    mettā
    karuṇā
    muditā
    upekkhā
    english(illimitables)
}
sammāsaṅkappo --> catasso_appamaññāyo

class pañca_sikkhāpadāniā {
    pāṇātipātā veramaṇī sikkhāpadaṁ
    adinnādānā veramaṇī sikkhāpadaṁ
    kāmesumicchācārā veramaṇī sikkhāpadaṁ
    musāvādā veramaṇī sikkhāpadaṁ
    surāmerayamajjapamādaṭṭhānā veramaṇī sikkhāpadaṁ
    english(precepts)
}
sammākammanto --> pañca_sikkhāpadāniā

class catasso_paṭisambhidā {
    atthapaṭisambhidā
    dhammapaṭisambhidā
    niruttipaṭisambhidā
    paṭibhānapaṭisambhidā
    english(analytical insight)
}
sammādiṭṭhi --> catasso_paṭisambhidā

namespace 5indriyāni {
  class pañcindriyāni {
    english(faculties)
  }
  class saddhindriyaṁ {
    english(confidence)
  }
  class vīriyindriyaṁ {
    english(energy)
  }
  class satindriyaṁ {
    english(mindfulness)
  }
  class samādhindriyaṁ {
    english(immersion)
  }
  class paññindriyaṁ {
    english(wisdom)
  }
}
pañcindriyāni *-- saddhindriyaṁ
pañcindriyāni *-- vīriyindriyaṁ
pañcindriyāni *-- satindriyaṁ
pañcindriyāni *-- samādhindriyaṁ
pañcindriyāni *-- paññindriyaṁ
saddhindriyaṁ --> cattāri_sotāpattiyaṅgāni
vīriyindriyaṁ --> cattāro_sammappadhānā
satindriyaṁ --> cattāro_satipaṭṭhānā
samādhindriyaṁ --> jhānā
paññindriyaṁ --> cattāri_ariyasaccāni

class cattāri_sotāpattiyaṅgāni {
  sappurisasaṁsevo
  saddhammassavanaṁ
  yonisomanasikāro
  dhammānudhammappaṭipatti
  english(stream entry factors)
}

namespace 5balāni {
  class pañcabalāni {
    english(powers)
  }
  class saddhābalaṁ {
    english(faith)
  }
  class vīriyabalaṁ  {
    english(energy)
  }
  class satibalaṁ {
    english(mindfulness)
  }
  class samādhibalaṁ {
    english(immersion)
  }
  class paññābalaṁ {
    english(wisdom)
  }
}
pañcabalāni *-- saddhābalaṁ
pañcabalāni *-- vīriyabalaṁ
pañcabalāni *-- satibalaṁ
pañcabalāni *-- samādhibalaṁ
pañcabalāni *-- paññābalaṁ
saddhābalaṁ --> cattāri_sotāpattiyaṅgāni
vīriyabalaṁ --> cattāro_sammappadhānā
satibalaṁ --> cattāro_satipaṭṭhānā
samādhibalaṁ --> jhānā
paññābalaṁ --> cattāri_ariyasaccāni

class sāmaññaphalāni {
  sotāpattiphalaṁ
  sakadāgāmiphalaṁ
  anāgāmiphalaṁ
  arahattaphalaṁ
  english(fruits of ascetic life)
}
```

## Seven Sets

Somestimes called "Wings to Awakening", originally intended for communal recital as described in in [8D/6.6 Saṅgāyitabbadhamma](https://tipitaka2500.github.io/tipitaka/8D/6/6.6.html)

Also mentioned several other places:

* [7D/3.20 Ānandayācanakathā #403](https://tipitaka2500.github.io/tipitaka/7D/3/3.20.html#403)
* [8D/5.1.1 Kusaladhammadesanā](https://tipitaka2500.github.io/tipitaka/8D/5/5.1/5.1.1.html)
* [17A8/1.2.9 Pahārādasutta #196](https://tipitaka2500.github.io/tipitaka/17A8/1/1.2/1.2.9.html#196)
* [11M/1.3 Kintisutta #74](https://tipitaka2500.github.io/tipitaka/11M/1/1.3.html#74)
* [11M/1.4 Sāmagāmasutta #91](https://tipitaka2500.github.io/tipitaka/11M/1/1.4.html#91)

```mermaid
mindmap
  bodhipākṣika-dharma
    cattāro satipaṭṭhānā
    cattāro sammappadhānā
    cattāro iddhipādā
    pañcindriyāni
    pañca balāni
    satta bojjhaṅgā
    ariyo aṭṭhaṅgiko maggo
```
