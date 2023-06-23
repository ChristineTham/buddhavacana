---
categories: ["Abhidhamma"]
tags: ["citta"]
title: "Cittasangahavibhāga"
linkTitle: "Citta"
date: 2023-06-19
weight: 420
description: >
  Compendium of Consciousness
markmap:
  maxWidth: 300
---
Tattha cittaṁ tāva catubbidhaṁ hoti:

1. kāmāvacaraṁ;
2. rūpā-vacaraṁ;
3. arūpāvacaraṁ;
4. lokuttarañ cā ti.

lakkhaṇa (salient quality)
: vijānana (knowing of an object)

rasa (function), kicca (performance of a concrete task), sampatti (achievement of a goal)
: pubbangama (forerunner of mental factors)

paccupaṭṭhāna (manifestation)
: sandhāna (continuity of process)

padaṭṭhāna (proximate cause)
: nāmarūpa (mind and matter)

```plantuml
@startuml
hide circle
hide empty members
package "jāti (nature)" as jati {
  class kusala {
    Karmically wholesome
  }
  class akusala {
    Karmically unwholesome
  }
  package avyākata {
    class vipāka {
      Karmic resultant
    }
    class kiriya {
      Functional
    }
  }
}
package "kāmāvacara (Sense Sphere)" as kamavacara {
  class sobhana {
    Beautiful
    ..
    #kusala/vipāka/kiriya
    #somanassa/upekkhā
    #+/- ñāṇa
    #asaṁkhārika/sasaṁkhārika
  }
  class kusalavipāka <<enum>> {
    Wholesome-Resultant
    ..
    cakkhuviññāṇa + upekkhā (eye)
    sotaviññāṇa + upekkhā (ear)
    ghānaviññāṇa + upekkhā (nose)
    jivhāviññāṇa + upekkhā (tongue)
    kāyaviññāṇa + sukkha (body)
    sampaṭicchanacitta + upekkhā (receiving)
    santīraṇacitta + somanassa (investigating)
    santīraṇacitta + upekkhā (investigating)
  }
  class dosa {
    Hatred
    ..
    +domanassa
    +paṭigha
    #asaṁkhārika/sasaṁkhārika
  }
  class lobha {
    Greed
    ..
    #somanassa/upekkhā
    #+/- diṭṭhigata
    #asaṁkhārika/sasaṁkhārika
  }
  class moha {
    Delusion
    ..
    #upekkhā
    +vicikicchā/uddhacca
  }
  class akusalavipāka <<enum>> {
    Unwholesome-Resultant
    ..
    cakkhuviññāṇa + upekkhā (eye)
    sotaviññāṇa + upekkhā (ear)
    ghānaviññāṇa + upekkhā (nose)
    jivhāviññāṇa + upekkhā (tongue)
    kāyaviññāṇa + dukkha (body)
    sampaṭicchanacitta + upekkhā (receiving)
    santīraṇacitta + upekkhā (investigating)
  }
  class ahetukakiriya <<enum>> {
    Functional
    ..
    pañcadvārāvajjanacitta + upekkhā (sense door)
    manodvārāvajjanacitta + upekkhā (mind door)
    hasituppādacitta + somanassa (smile producing)
  }
}

class domanassa {
  displeasure
}
class paṭigha {
  aversion
}
class somanassa {
  joy
}
class upekkhā {
  equanimity
}
class sukkha {
  pleasure
}
class dukkha {
  pain
}
class ñāṇa {
  knowledge
}
class diṭṭhigata {
  wrong view
}
class vicikicchā {
  doubt
}
class uddhacca {
  restlessness
}

kiriya *-- "3" ahetukakiriya
kiriya *-- "8" sobhana
vipāka *-- "7" akusalavipāka
vipāka *-- "8" kusalavipāka
vipāka *-- "8" sobhana
kusala *-- "8" sobhana : mūla
kusala *-- "8" kusalavipāka : ahetuka
akusala *-- "7" akusalavipāka : ahetuka
akusalavipāka --> upekkhā : sahagata
akusalavipāka --> dukkha : sahagata
kusalavipāka --> upekkhā : sahagata
kusalavipāka --> sukkha : sahagata
kusalavipāka --> somanassa : sahagata
sobhana --> somanassa : sahagata
sobhana --> upekkhā : sahagata
sobhana --+ ñāṇa : sampayutta
akusala *-- "8" lobha : mūla
akusala *-- "2" dosa : mūla
akusala *-- "2" moha : mūla
dosa --> domanassa : sahagata
dosa --+ paṭigha : sampayutta
lobha --+ diṭṭhigata : sampayutta
lobha --> somanassa : sahagata
lobha --> upekkhā : sahagata
moha --+ vicikicchā : sampayutta
moha --+ uddhacca : sampayutta
moha --> upekkhā : sahagata

@enduml
```

```plantuml
@startuml
hide circle
hide empty members
package "jāti (nature)" as jati {
  class kusala {
    Karmically wholesome
  }
  class akusala {
    Karmically unwholesome
  }
  package avyākata {
    class vipāka {
      Karmic resultant
    }
    class kiriya {
      Functional
    }
  }
}
package "rūpāvacara (Fine Material Sphere)" as rupavacara {
  class rūpāvacaracitta {
    Fine Material
    ..
    #kusala/vipāka/kiriya
    1. Vitakka-vicāra-pīti-sukh’-ekaggatā-sahitaṁ paṭhamajjhāna
    2. Vicāra-pīti-sukh’-ekaggatā-sahitaṁ dutiyajjhāna
    3. Pīti-sukh’-ekaggatā-sahitaṁ tatiyajjhāna
    4. Sukh’-ekaggatā-sahitaṁ catutthajjhāna
    5. Upekkh’-ekaggatā-sahitaṁ pañcamajjhāna
  }
}
class vitakka {
  Initial application
}
class vicāra {
  Sustained application
}
class pīti {
  zest
}
class sukkha {
  happiness
}
class upekkhā {
  equanimity
}
class ekaggatā {
  one-pointedness
}
kusala *-- "5" rūpāvacaracitta
vipāka *-- "5" rūpāvacaracitta
kiriya *-- "5" rūpāvacaracitta
rūpāvacaracitta --> vitakka
rūpāvacaracitta --> vicāra
rūpāvacaracitta --> pīti
rūpāvacaracitta --> sukkha
rūpāvacaracitta --> upekkhā
rūpāvacaracitta --> ekaggatā

package "arūpāvacara (Immaterial Sphere)" as arupavacara {
  class arūpāvacaracitta {
    Immaterial
    ..
    #kusala/vipāka/kiriya
    1. Ākāsānañcāyatana
    2. Viññāṇañcāyatana
    3. Ākiñcaññāyatana
    4. N’evasaññān’āsaññāyatana
  }
}
class Ākāsānañcāyatana {
  Infinity of Space
}
class Viññāṇañcāyatana {
  Infinity of Consciousness
}
class Ākiñcaññāyatana {
  Nothingness
}
class "N’evasaññān’āsaññāyatana" {
  Neither perception nor non perception
}
kusala *-- "4" arūpāvacaracitta
vipāka *-- "4" arūpāvacaracitta
kiriya *-- "4" arūpāvacaracitta
arūpāvacaracitta --> Ākāsānañcāyatana
arūpāvacaracitta --> Viññāṇañcāyatana
arūpāvacaracitta --> Ākiñcaññāyatana
arūpāvacaracitta --> "N’evasaññān’āsaññāyatana"

package "lokuttarañ (Supramundane)" as lokuttaran {
  class lokuttaracitta {
    Supra Mundane
    ..
    #magga/phala
    #jhána (5)
    1. Sotāpatti
    2. Sakadāgāmī
    3. Anāgāmī
    4. Arahatta
  }
}
class sotāpatti {
  stream entry
}
class sakadāgāmī {
  once returning
}
class anāgāmī {
  non-returning
}
class arahatta {
  arahantship
}
kusala *-- "4 (x5)" lokuttaracitta
vipāka *-- "4 (x5)" lokuttaracitta
lokuttaracitta --> sotāpatti
lokuttaracitta --> sakadāgāmī
lokuttaracitta --> anāgāmī
lokuttaracitta --> arahatta
@enduml
```

```plantuml
@startmindmap
* =Citta
** ==kāmāvacara
*** ===akusalacittāni
**** ====lobhamūlacittāni
*****_ 1. Somanassasahagataṁ diṭṭhigatasampayuttaṁ asaṁkhārikam ekaṁ
*****_ 2. Somanassasahagataṁ diṭṭhigatasampayuttaṁ sasaṁkhārikam ekaṁ
*****_ 3. Somanassasahagataṁ diṭṭhigatavippayuttaṁ asaṁkhārikam ekaṁ
*****_ 4. Somanassasahagataṁ diṭṭhigatavippayuttaṁ sasaṁkhārikam ekaṁ
*****_ 5. Upekkhāsahagataṁ diṭṭhigatasampayuttaṁ asaṁkhārikam ekaṁ
*****_ 6. Upekkhāsahagataṁ diṭṭhigatasampayuttaṁ sasaṁkhārikam ekaṁ
*****_ 7. Upekkhāsahagataṁ diṭṭhigatavippayuttaṁ asaṁkhārikam ekaṁ
*****_ 8. Upekkhāsahagataṁ diṭṭhigatavippayuttaṁ sasaṁkhārikam ekaṁ
**** ====dosamūlacittāni
*****_ 9. Domanassasahagataṁ paṭighasampayuttaṁ asaṁkhārikam ekaṁ
*****_ 10. Domanassasahagataṁ paṭighasampayuttaṁ sasaṁkhārikam ekaṁ
**** ====mohamūlacittāni
*****_ 11. Upekkhāsahagataṁ vicikicchāsampayuttam ekaṁ
*****_ 12. Upekkhāsahagataṁ uddhaccasampayuttam ekaṁ
*** ===ahetukacittāni
**** ====akusalavipākacittāni
*****_ 13. Upekkhāsahagataṁ cakkhuviññāṇaṁ
*****_ 14. Upekkhāsahagataṁ sotaviññāṇaṁ
*****_ 15. Upekkhāsahagataṁ ghānaviññāṇaṁ
*****_ 16. Upekkhāsahagataṁ jivhāviññāṇaṁ
*****_ 17. Dukkhasahagataṁ kāyaviññāṇaṁ
*****_ 18. Upekkhāsahagataṁ sampaṭicchanacittaṁ
*****_ 19. Upekkhāsahagataṁ santīraṇacittaṁ
**** ====kusalavipāka-ahetukacittāni
*****_ 20. Upekkhāsahagataṁ cakkhuviññāṇaṁ
*****_ 21. Upekkhāsahagataṁ sotaviññāṇaṁ
*****_ 22. Upekkhāsahagataṁ ghānaviññāṇaṁ
*****_ 23. Upekkhāsahagataṁ jivhāviññāṇaṁ
*****_ 24. Sukhasahagataṁ kāyaviññāṇaṁ
*****_ 25. Upekkhāsahagataṁ sampaṭicchanacittaṁ
*****_ 26. Somanassasahagataṁ santīraṇacittaṁ
*****_ 27. Upekkhāsahagataṁ santīraṇacittaṁ
**** ====ahetukakiriya-cittāni
*****_ 28. Upekkhāsahagataṁ pañcadvārāvajjanacittaṁ
*****_ 29. Upekkhāsahagataṁ manodvārāvajjanacittaṁ
*****_ 30. Somanassasahagataṁ hasituppādacittaṁ
*** ===sobhanacittāni
**** ====kusalacittāni
*****_ 31. Somanassasahagataṁ ñāṇasampayuttaṁ asaṁkhārikam ekaṁ
*****_ 32. Somanassasahagataṁ ñāṇasampayuttaṁ sasaṁkhārikam ekaṁ
*****_ 33. Somanassasahagataṁ ñāṇavippayuttaṁ asaṁkhārikam ekaṁ
*****_ 34. Somanassasahagataṁ ñāṇavippayuttaṁ sasaṁkhārikam ekaṁ
*****_ 35. Upekkhāsahagataṁ ñāṇasampayuttaṁ asaṁkhārikam ekaṁ
*****_ 36. Upekkhāsahagataṁ ñāṇasampayuttaṁ sasaṁkhārikam ekaṁ
*****_ 37. Upekkhāsahagataṁ ñāṇavippayuttaṁ asaṁkhārikam ekaṁ
*****_ 38. Upekkhāsahagataṁ ñāṇavippayuttaṁ sasaṁkhārikam ekaṁ
**** ====vipākacittāni
*****_ 99. Somanassasahagataṁ ñāṇasampayuttaṁ asaṁkhārikam ekaṁ
*****_ 40. Somanassasahagataṁ ñāṇasampayuttaṁ sasaṁkhārikam ekaṁ
*****_ 41. Somanassasahagataṁ ñāṇavippayuttaṁ asaṁkhārikam ekaṁ
*****_ 42. Somanassasahagataṁ ñāṇavippayuttaṁ sasaṁkhārikam ekaṁ
*****_ 43. Upekkhāsahagataṁ ñāṇasampayuttaṁ asaṁkhārikam ekaṁ
*****_ 44. Upekkhāsahagataṁ ñāṇasampayuttaṁ sasaṁkhārikam ekaṁ
*****_ 45. Upekkhāsahagataṁ ñāṇavippayuttaṁ asaṁkhārikam ekaṁ
*****_ 46. Upekkhāsahagataṁ ñāṇavippayuttaṁ sasaṁkhārikam ekaṁ
**** ====kriyācittāni
*****_ 47. Somanassasahagataṁ ñāṇasampayuttaṁ asaṁkhārikam ekaṁ
*****_ 48. Somanassasahagataṁ ñāṇasampayuttaṁ sasaṁkhārikam ekaṁ
*****_ 49. Somanassasahagataṁ ñāṇavippayuttaṁ asaṁkhārikam ekaṁ
*****_ 50. Somanassasahagataṁ ñāṇavippayuttaṁ sasaṁkhārikam ekaṁ
*****_ 51. Upekkhāsahagataṁ ñāṇasampayuttaṁ asaṁkhārikam ekaṁ
*****_ 52. Upekkhāsahagataṁ ñāṇasampayuttaṁ sasaṁkhārikam ekaṁ
*****_ 53. Upekkhāsahagataṁ ñāṇavippayuttaṁ asaṁkhārikam ekaṁ
*****_ 54. Upekkhāsahagataṁ ñāṇavippayuttaṁ sasaṁkhārikam ekaṁ
** ==rūpāvacara
*** ===kusalacittāni
****_ 55. Vitakka-vicāra-pīti-sukh’-ekaggatā-sahitaṁ paṭhamajjhāna-kusalacittaṁ
****_ 56. Vicāra-pīti-sukh’-ekaggatā-sahitaṁ dutiyajjhāna-kusalacittaṁ
****_ 57. Pīti-sukh’-ekaggatā-sahitaṁ tatiyajjhāna-kusalacittaṁ
****_ 58. Sukh’-ekaggatā-sahitaṁ catutthajjhāna-kusalacittaṁ
****_ 59. Upekkh’-ekaggatā-sahitaṁ pañcamajjhāna-kusalacittaṁ
*** ===vipākacittāni
****_ 60. Vitakka-vicāra-pīti-sukh’-ekaggatā-sahitaṁ paṭhamajjhāna-vipākacittaṁ
****_ 61. Vicāra-pīti-sukh’-ekaggatā-sahitaṁ dutiyajjhāna-vipākacittaṁ
****_ 62. Pīti-sukh’-ekaggatā-sahitaṁ tatiyajjhāna-vipākacittaṁ
****_ 63. Sukh’-ekaggatā-sahitaṁ catutthajjhāna-vipākacittaṁ
****_ 64. Upekkh’-ekaggatā-sahitaṁ pañcamajjhāna-vipākacittaṁ
*** ===kriyācittāni
****_ 65. Vitakka-vicāra-pīti-sukh’-ekaggatā-sahitaṁ paṭhamajjhāna-kriyācittaṁ
****_ 66. Vicāra-pīti-sukh’-ekaggatā-sahitaṁ dutiyajjhāna-kriyācittaṁ
****_ 67. Pīti-sukh’-ekaggatā-sahitaṁ tatiyajjhāna-kriyācittaṁ
****_ 68. Sukh’-ekaggatā-sahitaṁ catutthajjhāna-kriyācittaṁ
****_ 69. Upekkh’-ekaggatā-sahitaṁ pañcamajjhāna-kriyācittaṁ
** ==arūpāvacara
*** ===kusalacittāni
****_ 70. Ākāsānañcāyatana-kusalacittaṁ
****_ 71. Viññāṇañcāyatana-kusalacittaṁ
****_ 72. Ākiñcaññāyatana-kusalacittaṁ
****_ 73. N’evasaññān’āsaññāyatana-kusalacittaṁ
*** ===vipākacittāni
****_ 74. Ākāsānañcāyatana-vipākacittaṁ
****_ 75. Viññāṇañcāyatana-vipākacittaṁ
****_ 76. Ākiñcaññāyatana-vipākacittaṁ
****_ 77. N’evasaññān’āsaññāyatana-vipākacittaṁ
*** ===kriyācittāni
****_ 78. Ākāsānañcāyatana-kriyācittaṁ
****_ 79. Viññāṇañcāyatana-kriyācittaṁ
****_ 80. Ākiñcaññāyatana-kriyācittaṁ
****_ 81. N’evasaññān’āsaññāyatana-kriyācittaṁ
** ==lokuttara
*** ===kusalacittāni
****_ 82. Sotāpatti-maggacittaṁ
****_ 83. Sakadāgāmi-maggacittaṁ
****_ 84. Anāgāmi-maggacittaṁ
****_ 85. Arahatta-maggacittaṁ
*** ===vipākacittāni
****_ 86. Sotāpatti-phalacittaṁ
****_ 87. Sakadāgāmi-phalacittaṁ
****_ 88. Anāgāmi-phalacittaṁ
****_ 89. Arahatta-phalacittaṁ
@endmindmap
```
