---
draft: true
title: "Lowth: A Short Introduction To English Grammar: With Critical Notes"
linkTitle: "Lowth Grammar"
date: 2024-04-23
weight: 20
description: >
  A summary of Robert Lowth, **A Short Introduction To English Grammar: With Critical Notes**, London: J. Hughs (1762)
---

## Grammar

>Grammar is the Art of rightly expressing our thoughts by Words.

```plantuml
@startebnf
grammar = letter | syllable | word | sentence ;
letter = vowel | consonant ;
vowel = "a" | "e" | "i" | "o" | "u" | "y" | "w" ;
diphthong = (vowel , {vowel}-) | "w" ;
consonant = "j" | "v" | mute | semi_vowel | "x" (* double consonant *) | "z" (*thicker "s" *) | "h" (* aspiration *) ;
mute = "b" | "c" | "d" | "g" | "k" | "p" | "q" | "t" ;
semi_vowel = "l" | "m" | "n" | "r" | "f" | "s" ;
articulate_sound = vowel | diphthong | (consonant , (vowel | diphthong)) ;
(* the sound of the human voice, formed by the organs of speech *)
word = {articulate_sound}- ;
sentence = {word}- ;
@endebnf
```

## Sorts of words, or parts of speech

```plantuml
@startebnf
word = article (* prefixed to substantives, when they are common names of things, to point them out, and to shew how far their signification extends *) |
  noun (* being the name of any thing conceived to subsist, or of which we have any notion *) |
  pronoun (* standing instead of the noun *) |
  adjective (* added to the noun to express the quality of it *) |
  verb (* word by way of eminence, signifying to be, to do, or to suffer *) |
  adverb (* added to verbs, and also to adjectives and other adverbs, to express some circumstance belonging to them *) |
  preposition (* put before nouns and pronouns chiefly, to connect them with other words, and to shew their relation to them *) |
  conjunction (* connecting sentences together *) |
  interjection (* thrown in to express the affection of the speaker, though unnecessary with respect to the construction of the sentence *) ;
article = ("a" (* used in a vague sense to point out one single thing of the kind, in other respects indeterminate *) | "an" (* before a vowel or a silent h *) ) |
  "the" (* determines what particular thing is meant *) ;
noun = proper_noun | common_noun ;
pronoun = personal_pronoun | pronominal_adjective ;
pronominal_adjective = definitive | indefinite | relative | interrogative | reciprocal ;
adjective = positive | comparative | superlative ;
verb = active (* Action *) | passive (* Passion, or a Suffering, or the receiving of an Action *) | neuter (* Being, or a state or condition of being *) ;
@endebnf
```

### Noun / Pronoun

```plantuml
@startuml
hide empty members
hide circle
class noun {
  number
  gender
  case
}
noun::number<--number
noun::gender<--gender
noun::case<--case
class pronoun {
  person
  number
  gender
  case
}
pronoun::person<--person
pronoun::number<--number
pronoun::gender<--gender
pronoun::case<--case
class first implements person
class second implements person
class third implements person
class singular implements number
class plural implements number
class masculine implements gender
class feminine implements gender
class neuter implements gender
class nominative implements case
class genitive implements case
class possessive implements case
class objective implements case
@enduml
```

### Verb

```plantuml
@startuml
hide empty members
hide circle
class verb {
  person
  number
  time
  mode
}
verb::person<--person
verb::number<--number
verb::time<--time
verb::mode<--mode
time <|-- indefinite
time <|-- definite
class first implements person
class second implements person
class third implements person
class singular implements number
class plural implements number
class present implements indefinite
class past implements indefinite
class future implements indefinite
class present_imperfect implements definite
class present_perfect implements definite
class past_imperfect implements definite
class past_perfect implements definite
class future_imperfect implements definite
class future_perfect implements definite
class indicative implements mode
class imperative implements mode
class subjunctive implements mode
class infinitive implements mode
class participle implements mode
@enduml
```

### Preposition

```plantuml
@startebnf
preposition = "out" | "in" | "through" | "under" | "by" | "to" | "from" | "of" |
  ?etc.? ;
@endebnf
```

### Conjunction

```plantuml
@startebnf
conjunction = copulative (* to connect, or to continue, the Sentence *) | disjunctive (* to express Opposition of meaning in different degrees*) ;
copulative = "and" (* an addition *) |
  "if" (* a supposition, or condition *) |
  "as" |
  "because" (* a cause *) |
  "then" (* a motive *) |
  "that" |
  "therefore" (* an inference *) |
  ?etc.? ;
disjunctive = "as" | "or" | "but" | "than" | "although" | "unless" |
  ?etc.? ;
@endebnf
```

### Interjection

```plantuml
@startebnf
vocative = "o" , noun ;
@endebnf
```
