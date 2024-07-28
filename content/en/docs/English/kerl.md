---
draft: true
title: "Kerl: A Comprehensive Grammar of the English Language"
linkTitle: "Kerl Grammar"
date: 2024-04-23
weight: 30
description: >
  Based on **A Comprehensive Grammar of the English Language**, *for the Use of Schools*, By Simon Kerl, A.M. New York: Phinney, Blakeman, And Mason. (1861)
---

Traditional English grammar, described using UML class diagrams.

pg. 59:

>The Grammar of a language shows how its words are formed, modilied, and arranged, to express thoughts, either in speaking or in writing, according to established usage.

## Words

letter
: a character that denotes one or more of the elementary sounds of language.

syllable
: a letter, or two or more combined, pronounced as one unbroken sound.

word
: a syllable, or two or more combined, used as the sign of some idea.

```plantuml
@startuml
hide empty members
hide circle
  letter <|-- vowel
  letter <|-- consonant
  word <|-- monosyllable
  word <|-- dissyllable
  word <|-- trisyllable
  word <|-- polysyllable
  word *-- letter
  monosyllable *-- syllable
  dissyllable *-- syllable
  trisyllable *-- syllable
  polysyllable *-- syllable
  syllable *-- letter
@enduml
```

## Word formation

Words classified according as they are formed, or not formed, from one another:

primitive word
: not formed from another

derivative word
: formed from another

compound word
: composed of two or more others

```plantuml
@startuml
hide empty members
hide circle
  word <|-- primitive
  word <|-- derivative
  word <|-- compound
@enduml
```

## Parts of speech

noun
: denote name of object

pronoun
: a word that supplies the place of a noun.

article
: a word placed before a noun to show how it is applied.

adjective
: to express the quality, condition, or circumstance of object

verb
: to express action, or state of existence

adverbs
: to describe their actions, or to show the nature or degree of their qualities

prepositions
: to express their positions or relations to one another

conjunctions
: to continue the discourse, or to connect its parts

interjections
: to give vent to any feeling or emotion springing up suddenly within me.

```plantuml
@startuml
hide empty members
hide circle
  word <|-- noun
  word <|-- pronoun
  word <|-- article
  word <|-- adjective
  word <|-- verb
  word <|-- preposition
  word <|-- conjunction
  word <|-- interjection
@enduml
```

## Sentence formation

subject
: denotes that of which something is said or affirmed.

predicate
: denotes what is said or affirmed.

A simple subject has but one nominative to which the predicate refers ; a compound subject has more than one.

A simple predicate has but one finite verb referring to the subject ; a compound predicate has more than one.

phrase
: two or more words rightly put together, but not making a proposition.

proposition
: a subject combined with its predicate.

clause
: any one of two or more propositions which together make a sentence.

sentence
: a thought expressed by words.

A simple sentence contains but one proposition.

A compound sentence contains two or more clauses.

discourse
: any series of properly related sentences, expressing continuous thought.

```plantuml
@startuml
hide empty members
hide circle
  discourse *-- sentence
  sentence o-- simple
  sentence o-- compound
  simple *-- proposition
  compound *-- clause
  proposition o-- subject
  proposition o-- predicate
  clause *-- proposition
@enduml
```

## Noun / Pronoun

proper noun
: an individual name.

common noun
:  a generic name.

pronoun
: a word that supplies the place of a noun.

personal pronoun
: one of a class of pronouns whose chief use is, to distinguish the different persons.

relative pronoun
: one that makes its clause dependent on another clause.

interrogative pronoun
: one used to ask a question.

compound pronoun
: a simple pronoun with `self`, `selves`, `ever`, `so`, or `soever`, annexed to it ; or it is a pronoun consisting of two words.

```plantuml
@startuml
hide empty members
hide circle
noun<|-- personal_noun
noun<|-- common_noun
@enduml
```

```plantuml
@startuml
hide empty members
hide circle
pronoun<|-- personal_pronoun
pronoun<|-- relative_pronoun
pronoun<|-- interrogative_pronoun
pronoun<|-- compound_pronoun
@enduml
```

## Properties of nouns and pronouns

masculine gender
: denotes males.

feminine gender
: denotes females.

common gender
: denotes either males or females, or both.

neuter gender
: denotes neither males nor females.

first person
: denotes the speaker.

second person
: represents an object as spoken to.

third person
: represents an object as spoken of.

singular number
: denotes but one.

plural number
: denotes more than one.

collective noun
: a noun denoting, in the singular form, more than one object of the same kind.

nominative case
: the case of a noun or pronoun to which a predicate directly refers, or used independently or absolutely.

possessive case
: denotes possession.

objective case
: the case of a noun or pronoun used as the object of a verb or preposition.

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
class common implements gender
class neuter implements gender
class nominative implements case
class possessive implements case
class objective implements case
@enduml
```

## Article

definite article
: shows that some particular object or objects are meant.

indefinite article
: shows that no particular one of the kind is meant.

```plantuml
@startuml
hide empty members
hide circle
article<|-- definite
article<|-- indefinite
class the implements definite
class a implements indefinite
class an implements indefinite
note bottom of a : Before words beginning with a consonant
note bottom of an : Before words beginning with a vowel

@enduml
```

## Adjective

```plantuml
@startuml
hide empty members
hide circle
adjective <|-- descriptive
descriptive <|-- participial
adjective <|-- definite
definite <|-- pronominal
definite <|-- numeral
pronominal <|-- demonstrative
pronominal <|-- indefinite
pronominal <|-- distributive
numeral <|-- cardinal
numeral <|-- ordinal
class beautiful implements descriptive
class twinkling implements participial
class this implements demonstrative
class any implements indefinite
class each implements distributive
class one implements cardinal
class first implements ordinal
@enduml
```

### Degrees of comparison
