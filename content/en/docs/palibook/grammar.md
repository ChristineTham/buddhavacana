---
title: "C: Pali Grammar Specification"
linkTitle: "C: Grammar"
date: 2023-08-18
weight: 930
description: >
  A concise diagrammatic representation of Pali Grammar
categories: ["palibook"]
tags: ["grammar"]
---

{{< alert >}}
Part of "A Beginner (Non-Linguist) Guide to Learning Pali"
{{< /alert >}}

```mermaid
stateDiagram-v2
  direction LR
  [*] --> upasagga
  [*] --> dhātu
  upasagga --> upasagga
  upasagga --> dhātu
  dhātu --> paccaya
```
