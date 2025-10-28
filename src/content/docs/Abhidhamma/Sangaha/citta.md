---
categories: ["Abhidhamma"]
tags: ["citta"]
title: "Cittasangahavibhāga"
sidebar:
  label: "Citta"
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

## cittasangahavibhāga 89

<div id="observablehq-sunburst-05b62c03"></div>
<div id="observablehq-hierarchy-05b62c03"></div>
<div id="observablehq-icicle-05b62c03"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/6a38e27b43175761@163.js?v=3";
new Runtime().module(define, name => {
  if (name === "sunburst") return new Inspector(document.querySelector("#observablehq-sunburst-05b62c03"));
  if (name === "hierarchy") return new Inspector(document.querySelector("#observablehq-hierarchy-05b62c03"));
  if (name === "icicle") return new Inspector(document.querySelector("#observablehq-icicle-05b62c03"));
});
</script>

## cittasangahavibhāga 121

<div id="observablehq-sunburst-1ca97e32"></div>
<div id="observablehq-hierarchy-1ca97e32"></div>
<div id="observablehq-icicle-1ca97e32"></div>

<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/fcdbb41494ddc64e@126.js?v=3";
new Runtime().module(define, name => {
  if (name === "sunburst") return new Inspector(document.querySelector("#observablehq-sunburst-1ca97e32"));
  if (name === "hierarchy") return new Inspector(document.querySelector("#observablehq-hierarchy-1ca97e32"));
  if (name === "icicle") return new Inspector(document.querySelector("#observablehq-icicle-1ca97e32"));
});
</script>
