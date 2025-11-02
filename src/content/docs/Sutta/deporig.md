---
categories: ["Sutta"]
tags: ["paṭiccasamuppādo"]
title: "Dependent Origination (`paṭiccasamuppādo`)"
sidebar:
  label: Dependent Origination
  order: 100
description: >
  Dependent Origination
---

* [7D/2.1 Paṭiccasamuppāda](https://tipitaka2500.github.io/tipitaka/7D/2/2.1.html)

* `hetu` (root, cause, reason, condition)
* `nidānaṁ` (cause, ground, underlying and determining factor)
* `samudayo` (rise, origin)
* `paccayo` (support, requirement, reason, cause, ground, motive, means, condition)

`kevalassa dukkhakkhandhassa samudayo` (origin of the entire mass of suffering)

## dvādasaṅga

12 link dependent origination

```mermaid
stateDiagram-v2
  [*] --> avijjā
  state fork_state <<fork>>
  state join_state <<join>>
  avijjā --> saṅkhārā
  saṅkhārā --> viññāṇaṁ
  viññāṇaṁ --> nāmarūpaṁ
  nāmarūpaṁ --> viññāṇaṁ : SN 12.67
  nāmarūpaṁ --> saḷāyatanaṁ
  saḷāyatanaṁ --> phasso
  phasso --> vedanā
  vedanā --> taṇhā
  taṇhā --> upādānaṁ
  upādānaṁ --> bhavo
  bhavo --> jāti
  jāti --> fork_state
  fork_state --> jarāmaraṇaṁ
  fork_state --> sokaparidevadukkhadomanassupāyāsā
  jarāmaraṇaṁ --> join_state
  sokaparidevadukkhadomanassupāyāsā --> join_state
  state jarāmaraṇaṁ {
    [*] --> jarā
    [*] --> maraṇaṁ
  }
  state sokaparidevadukkhadomanassupāyāsā {
    [*] --> soko
    [*] --> paridevo
    [*] --> dukkho
    [*] --> domanassaṃ
    [*] --> upāyāso
  }
  join_state --> [*]
```

## Transcendental Dependent Origination

```mermaid
flowchart TB
  subgraph paṭiccasamuppādo
    direction LR
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
  end
  subgraph transcendental
    direction LR
    saddho --> pāmojjaṃ
    pāmojjaṃ --> pīti
    pīti --> passaddhi
    passaddhi --> sukho
    sukho --> samādhi
    samādhi --> yathābhūtañāṇadassanaṃ
    yathābhūtañāṇadassanaṃ --> nibbidā
    nibbidā --> virāgo
    virāgo --> vimutti
    vimutti --> khayeñāṇaṁ
  end
  paṭiccasamuppādo --> transcendental
```

## Wrong vs Right practice

* [12S2/1.1.3 Paṭipadāsutta](https://tipitaka2500.github.io/tipitaka/12S2/1/1.1/1.1.3.html)

```mermaid
sequenceDiagram
  alt micchāpaṭipadā
    avijjā->>saṅkhārā: paccayā
    saṅkhārā ->> viññāṇaṁ: paccayā
    viññāṇaṁ ->> nāmarūpaṁ: paccayā
    nāmarūpaṁ ->> saḷāyatanaṁ: paccayā
    saḷāyatanaṁ ->> phasso: paccayā
    phasso ->> vedanā: paccayā
    vedanā ->> taṇhā: paccayā
    taṇhā ->> upādānaṁ: paccayā
    upādānaṁ ->> bhavo: paccayā
    bhavo ->> jāti: paccayā
  else sammāpaṭipadā
    avijjā->>saṅkhārā: asesavirāganirodhā
    saṅkhārā ->> viññāṇaṁ: asesavirāganirodhā
    viññāṇaṁ ->> nāmarūpaṁ: asesavirāganirodhā
    nāmarūpaṁ ->> saḷāyatanaṁ: asesavirāganirodhā
    saḷāyatanaṁ ->> phasso: asesavirāganirodhā
    phasso ->> vedanā: asesavirāganirodhā
    vedanā ->> taṇhā: asesavirāganirodhā
    taṇhā ->> upādānaṁ: asesavirāganirodhā
    upādānaṁ ->> bhavo: asesavirāganirodhā
    bhavo ->> jāti: asesavirāganirodhā
  end

```

## Analysis

* [12S2/1.1.2 Vibhaṅgasutta](https://tipitaka2500.github.io/tipitaka/12S2/1/1.1/1.1.2.html)

```mermaid
mindmap
  paṭiccasamuppādo
    avijjā
      dukkhe aññāṇaṁ
      dukkhasamudaye aññāṇaṁ
      dukkhanirodhe aññāṇaṁ
      dukkhanirodhagāminiyā paṭipadāya aññāṇaṁ
    saṅkhārā
      kāyasaṅkhāro
      vacīsaṅkhāro
      cittasaṅkhāro
```

```mermaid
mindmap
avijjā
  dukkhe aññāṇaṁ
  dukkhasamudaye aññāṇaṁ
  dukkhanirodhe aññāṇaṁ
  dukkhanirodhagāminiyā paṭipadāya aññāṇaṁ
```

```mermaid
mindmap
saṅkhārā
  kāyasaṅkhāro
  vacīsaṅkhāro
  cittasaṅkhāro
```

```mermaid
mindmap
viññāṇaṁ
  cakkhuviññāṇaṁ
  sotaviññāṇaṁ
  ghānaviññāṇaṁ
  jivhāviññāṇaṁ
  kāyaviññāṇaṁ
  manoviññāṇaṁ
```

```mermaid
mindmap
nāmarūpaṁ
  nāmaṁ
    vedanā
    saññā
    cetanā
    phasso
    manasikāro
  rūpaṁ
    cattāro mahābhūtā
    catunnañ mahābhūtānaṁ upādāyarūpaṁ
```

```mermaid
mindmap
saḷāyatanaṁ
  cakkhāyatanaṁ
  sotāyatanaṁ
  ghānāyatanaṁ
  jivhāyatanaṁ
  kāyāyatanaṁ
  manāyatanaṁ
```

```mermaid
mindmap
phasso
  cakkhusamphasso
  sotasamphasso
  ghānasamphasso
  jivhāsamphasso
  kāyasamphasso
  manosamphasso
```

```mermaid
mindmap
vedanā
  cakkhusamphassajā vedanā
  sotasamphassajā vedanā
  ghānasamphassajā vedanā
  jivhāsamphassajā vedanā
  kāyasamphassajā vedanā
  manosamphassajā vedanā
```

```mermaid
mindmap
taṇhā
  rūpataṇhā
  saddataṇhā
  gandhataṇhā
  rasataṇhā
  phoṭṭhabbataṇhā
  dhammataṇhā
```

```mermaid
mindmap
upādānaṁ
  kāmupādānaṁ
  diṭṭhupādānaṁ
  sīlabbatupādānaṁ
  attavādupādānaṁ
```

```mermaid
mindmap
bhavo
  kāmabhavo
  rūpabhavo
  arūpabhavo
```


```mermaid
mindmap
jāti
  jāti
  sañjāti
  okkanti
  abhinibbatti
  khandhānaṁ pātubhāvo
  āyatanānaṁ paṭilābho
```

```mermaid
mindmap
jarāmaraṇaṁ
  jarā
    jarā
    jīraṇatā
    khaṇḍiccaṁ
    pāliccaṁ
    valittacatā
    āyuno saṁhāni
    indriyānaṁ paripāko
  maraṇaṁ
    cuti
    cavanatā bhedo
    antaradhānaṁ
    maccu
    maraṇaṁ
    kālakiriyā
    khandhānaṁ bhedo
    kaḷevarassa nikkhepo
```

```mermaid
mindmap
āhāro
  kabaḷīkāro āhāro
    oḷāriko
    sukhumo
  phasso
  manosañcetanā
  viññāṇaṁ
```

```mermaid
mindmap
dasabalasamannāgato
  rūpaṁ
    samudayo
    atthaṅgamo
  vedanā
    samudayo
    atthaṅgamo
  saññā
    samudayo
    atthaṅgamo
  saṅkhārā
    samudayo
    atthaṅgamo
  viññāṇaṁ
    samudayo
    atthaṅgamo
```

```mermaid
mindmap
vesārajjaṃ
  imasmiṁ sati idaṁ hoti
  imassuppādā idaṁ uppajjati
  imasmiṁ asati idaṁ na hoti
  imassa nirodhā idaṁ nirujjhati
```

## paṭiccasamuppannā dhammā (Dependent origination characteristics)

* [12S2/1.2.10 Paccayasutta](https://tipitaka2500.github.io/tipitaka/12S2/1/1.2/1.2.10.html)

This sutta is written in a satirical style (similar to that in AN 3.136) where the Buddha uses the formula for dependent origination to refute core Vedic beliefs, including the Vedic creation myth. The satirical text plays on the Vedic preoccupation with `dhamma` as regular, invariant natural principles.

The parallels between the Dependent Origination links and core Vedic beliefs are explored by Joanna Jurewicz in **Playing with Fire: The pratītyasamutpāda from the perspective of Vedic thought**, Journal of the Pali Text Society 26 (2000) pp. 77 – 103.

```mermaid
flowchart LR
  paṭiccasamuppādo --> aniccaṁ
  paṭiccasamuppādo --> saṅkhataṁ
  paṭiccasamuppādo --> paṭiccasamuppannaṁ
  paṭiccasamuppādo --> khayadhammaṁ
  paṭiccasamuppādo --> vayadhammaṁ
  paṭiccasamuppādo --> virāgadhammaṁ
  paṭiccasamuppādo --> nirodhadhammaṁ
```

## Naḷakalāpīsutta

* [12S2/1.7.7 Naḷakalāpīsutta](https://tipitaka2500.github.io/tipitaka/12S2/1/1.7/1.7.7.html)

```mermaid
flowchart LR
  c1>na sayaṅkataṁ]
  c2>na paraṅkataṁ]
  c3>na sayaṅkatañca paraṅkatañca]
  c4>nāpi asayaṅkāraṁ aparaṅkāraṁ adhiccasamuppannaṁ]
  subgraph paṭiccasamuppādo
    direction TB
    viññāṇaṁ --> nāmarūpaṁ
    nāmarūpaṁ --> saḷāyatanaṁ
    saḷāyatanaṁ --> phasso
    phasso --> vedanā
    vedanā --> taṇhā
    taṇhā --> upādānaṁ
    upādānaṁ --> bhavo
    bhavo --> jāti
    jāti --> jarāmaraṇaṁ
  end
  c1 --> paṭiccasamuppādo
  c2 --> paṭiccasamuppādo
  c3 --> paṭiccasamuppādo
  c4 --> paṭiccasamuppādo
  paṭiccasamuppādo --> bhikkhu
  subgraph bhikkhu
    direction LR
    nibbidāya --> dhammaṁ
    nibbidāya --> paṭipanno
    nibbidāya --> vimutto
    virāgāya --> dhammaṁ
    virāgāya --> paṭipanno
    virāgāya --> vimutto
    nirodhāya --> dhammaṁ
    nirodhāya --> paṭipanno
    nirodhāya --> vimutto
  end
```

## Training

* [12S2/1.9.2 Sikkhāsuttādipeyyālaekādasaka](https://tipitaka2500.github.io/tipitaka/12S2/1/1.9/1.9.2.html)

```mermaid
mindmap
  jarāmaraṇe yathābhūtaṁ ñāṇāya
    sikkhā karaṇīyā
    yogo karaṇīyo
    chando karaṇīyo
    ussoḷhī karaṇīyā
    appaṭivānī karaṇīyā
    ātappaṁ karaṇīyaṁ
    vīriyaṁ karaṇīyaṁ
    sātaccaṁ karaṇīyaṁ
    sati karaṇīyā
    sampajaññaṁ karaṇīyaṁ
    appamādo karaṇīyo
```

## References

* [7D/2.1 Paṭiccasamuppāda](https://tipitaka2500.github.io/tipitaka/7D/2/2.1.html)
* [12S2/1.1.1 Paṭiccasamuppādasutta](https://tipitaka2500.github.io/tipitaka/12S2/1/1.1/1.1.1.html)
* [12S2/1.1.2 Vibhaṅgasutta](https://tipitaka2500.github.io/tipitaka/12S2/1/1.1/1.1.2.html)
* [12S2/1.1.3 Paṭipadāsutta](https://tipitaka2500.github.io/tipitaka/12S2/1/1.1/1.1.3.html)
* [12S2/1.2.1 Āhārasutta](https://tipitaka2500.github.io/tipitaka/12S2/1/1.2/1.2.1.html)
* [12S2/1.3.1 Dasabalasutta](https://tipitaka2500.github.io/tipitaka/12S2/1/1.3/1.3.1.html)
* [12S2/1.3.3 Upanisasutta](https://tipitaka2500.github.io/tipitaka/12S2/1/1.3/1.3.3.html)
* [12S2/1.7.7 Naḷakalāpīsutta](https://tipitaka2500.github.io/tipitaka/12S2/1/1.7/1.7.7.html)
* [12S2/1.9.2 Sikkhāsuttādipeyyālaekādasaka](https://tipitaka2500.github.io/tipitaka/12S2/1/1.9/1.9.2.html)
