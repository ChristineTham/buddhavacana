---
draft: true
title: "English in EBNF"
linkTitle: "English"
date: 2024-04-14
weight: 10
description: >
  The English language grammar, expressed in Extended Backus–Naur form (EBNF).
---

## Grammatical levels

```plantuml
@startebnf
grammar = { sentence  (* unit of language *) }- ;

sentence = { clause (* word or phrase forming all or part of sentence *) }- ;
clause = { phrase (* group of words based on headword *) }- ;
phrase = { word (* self contained units of meaning *) }- ;
word = { morpheme (* lowest unit of language that can convey meaning *) }- ;
@endebnf
```

```mermaid
block-beta
columns 6
  sentence[["Sentence"]] s("The children watched a television programme
  while their mother made the tea."):5
  space:6
  clause[["Clause"]] c1("The children watched a television programme"):4 c2("their mother made the tea")
  c1-->s
  c2-->s
  space:6
  phrase[["Phrase"]] p1("The children"):2 p2("watched") p3("a television programme") space
  p1-->c1
  p2-->c1
  p3-->c1
  space:6
  word[["Word"]] w1("The") w2("children") space:3
  w1-->p1
  w2-->p1
  space:6
  morpheme[["Morpheme"]] m1("child") m2("ren") space:3
  m1-->w2
  m2-->w2
```

## Words

```plantuml
@startebnf
word = content_word (* words that carry the meaning of the sentence *) |
  structure_word (* words that hold the sentence together *) ;
content_word =
  noun (* eg. "children" *) | 
  verb (* eg. "watched" *) |
  adjective (* eg. "green" *) |
  adverb (* eg. "slowly" *) ;
structure_word =
  pronoun (* eg. "they" *) |
  conjunction (* eg. "while" *) |
  preposition (* eg. "beside" *) |
  determiner (* eg. "the" *) ;
@endebnf
```

## Types of Clauses

```plantuml
@startebnf
clause = declarative (* making statements*) |
  interrogative (* asking questions *) |
  imperative (* making commands and requests *) |
  exclamative (* making exclamations *) ;
@endebnf
```

## Clause patterns

```plantuml
@startebnf
clause = Subject (* about X *), Predicate (* What about X? *);
clause = (Subject (*Hamlet*) , Verb (*hesitated*) ) |
  (Subject (*Hamlet*) , Verb (*stabbed*) , Object (*Polonius*) ) |
  (Subject (*Hamlet*) , Verb (*was*)  , Complement (*solitary*) ) |
  (Subject (*Hamlet*) , Verb (*gave*) , indirect_object (*people*)  , direct_object (*surprises*) ) |
  (Subject (*Hamlet*) , Verb (*drove*) , Object (*Ophelia*) , Complement (*mad*) ) |
  (Subject (*Hamlet*) , Verb (*went*) , Adverbial (*away*) ) |
  (Subject (*Hamlet*) , Verb (*put*) , Object (*the sword*) , Adverbial (*down*) ) ;
predicate = Verb , ( Object , [Complement | Adverbial] | Complement | (indirect_object , direct_object) | Adverbial ) ;
Subject = noun |
  pronoun |
  noun_phrase ;
  (* topic *)
Verb = action | state | link (* to Complement or Adverbial *) ;
  (* develop the Subject *)
Object = noun |
  pronoun |
  noun_phrase ;
  (* person, thing or idea affected by action of Verb *)
Complement = noun |
  pronoun |
  noun_phrase |
  adjective |
  adjective_phrase ;
  (* refers to Subject *)
@endebnf
```

Note: `verb` and `Verb` are not the same. `verb` is a type of word, `Verb` is part of a clause (along with `Subject` and `Object`).

## Nouns

```plantuml
@startebnf
(* person, thing, idea *)
noun = proper_noun (* people, places or things *) |
  common_noun | gerund (* Verbal noun *);
common_noun = countable_noun (* have singular and plural forms *) |
  uncountable_noun (* abstract ideas, or things considered in the mass *) ;
@endebnf
```

## Pronouns

```plantuml
@startebnf
(* reference to noun phrase, general idea or nothing ("dummy Subject") *)
pronoun = personal_pronoun (* reference to previous or upcoming noun phrase *) |
  possessive_pronoun (* belong to person or thing referred to *) |
  reflexive_pronoun (* Subject and Object are the same *) |
  demonstrative_pronoun (* reference by distance *) |
  indefinite_pronoun (* reference, general to vague *) |
  interrogative_pronoun (* used in questions *) |
  relative_pronoun (* used to form relative clauses *) ;
@endebnf
```

### Personal and Possessive pronouns

| person | number | gender | Subjective | Objective | possessive | possessive determiner |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 1st | singular | all | I | me | mine | my |
| 1st | plural | all | we | us | ours | our |
| 2nd | all | all | you | you | yours | your |
| 3rd | singular | female | she | her | hers | her |
| 3rd | singular | male | he | him | his | his |
| 3rd | singular | neuter | it | it | its | its |
| 3rd | plural | all | they | them | theirs | their |

### Reflexive Pronouns

| person | gender | singular | plural |
| :-: | :-: | :-: | :-: |
| 1st | all | myself | ourselves |
| 2nd | all | yourself | yourselves |
| 3rd | female | herself | themselves |
| 3rd | male | himself | themselves |
| 3rd | neuter | itself | themselves |

## Demonstrative Pronouns

| distance | singular | plural |
| :-: | :-: | :-: |
| near | this | these |
| far | that | those |

### Indefinite Pronouns

| specificity | one | body | thing | choice | iteration |
| :-: | :-: | :-: | :-: | :-: | :-: |
| some | someone | somebody | something | | |
| any | anyone | anybody | anything | either | |
| none | no one | nobody | nothing | neither | |
| all | everyone | everybody | everything | both | each |

### Interrogative Pronouns

```plantuml
@startebnf
interrogative_pronoun = "who" | "whom" | "whose" | "which" | "what" ;
@endebnf
```

### Relative Pronouns

```plantuml
@startebnf
relative_pronoun = ((interrogative_pronoun | "where") , ["ever"]) |
  "that" | "why" ;
@endebnf
```

## Noun phrases

```plantuml
@startebnf
noun_phrase = {determiner (* give headword definition *)} ,
  {premodifier (* give more information *)} ,
  headword (* noun *) ,
  {postmodifier} (* give more information *) ;
determiner = ("a" | "and" | "the") |
  possessive_determiner |
  indefinite_pronoun |
  demonstrative_pronoun |
  "no" |
  "such" |
  portion (* eg. "half" , "one third" *) |
  number (* eg. "two", "three" *) |
  ordinal (* eg. "second", "third" *) |
  selection (* eg. "other", "last", "next" *) |
  quantity (* eg. "many", "few" *) |
  amount (* eg. "little", "much" *) ;
premodifier = adjective | noun | gerund ;
postmodifier = prepositional_phrase (* qualifies headword *) |
  relative_clause (* mini sentences that provide more information to Subject *) ;
prepositional_phrase = preposition , (noun | pronoun | gerund | noun_phrase) ;
preposition = "about" | "with" | "to" | "for" | "down" | ?etc.? ;
relative_clause = relative_pronoun , clause ;
@endebnf
```

## Adjectives

```plantuml
@startebnf
(* modifies and gives noun definition, by providing more information*)
adjective = attributive (* before noun *) |
  predicative (* after Verb like "be" *) ;
adjective = ([graded] , qualitative_adjective) | classifying_adjective ;
graded = "fairly" | "extremely" | ?etc.? ;
classifying_adjective = "annual" | "nuclear" | "actual" | ?etc.? ;
@endebnf
```

### Qualitative adjectives

| absolute | comparative | superlative |
| :-: | :-: | :-: |
| fast | faster | fastest |
| easy | easier | easiest |
| rapid | more rapid | most rapid |
| extraordinary | more extraordinary | most extraordinary |

## Types of verbs

```plantuml
@startebnf
verb = main_verb | primary_auxillary_verb | modal_auxillary_verb ;
main_verb = transitive_verb | intransitive_verb | linking_verb ;
transitive_verb = "get" | "create" | ?etc.? ;
  (* can be used in active or passive sentences *)
intransitive_verb = "arrive" | "exist" | ?etc.? ;
linking_verb = "be" | "seem" | "appear" | "become" | "look" | ?etc.? ;
primary_auxillary_verb = "be" | "have" | "do" ;
modal_auxillary_verb = "will" | "may" | "can" | "might" | "could" | ?etc.? ;
@endebnf
```

## Verb forms

| stem | walk | swim | be |
| :-: | :-: | :-: | :-: |
| present tense | walk / walks | swim / swims | am / is / are |
| present_participle | walking | swimming | being |
| past tense | walked | swam | was / were |
| past participle | walked | swum | been |

## References

Seely, 2001
: John Seely, Oxford Everyday Grammar, Oxford University Press (2001)
