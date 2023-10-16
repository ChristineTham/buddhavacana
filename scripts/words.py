import pandas as pd

verbs = pd.read_excel("../data/vocabulary.xlsx", sheet_name="Verbs")
nouns = pd.read_excel("../data/vocabulary.xlsx", sheet_name="Nouns")
adjectives = pd.read_excel("../data/vocabulary.xlsx", sheet_name="Adjectives")
nipata = pd.read_excel("../data/vocabulary.xlsx", sheet_name="Indeclinables")

words = verbs[['lesson', 'page', 'pada', 'lakāra', 'english']].rename(columns={"pada": "word", "lakāra": "type"})
words = pd.concat([words, nouns[['lesson', 'page', 'nāma', 'liṅga', 'english']].rename(columns={"nāma": "word", "liṅga": "type"})])
w = adjectives
w['type'] = 'guṇanāma'
words = pd.concat([words, w[['lesson', 'page', 'guṇanāma', 'type', 'english']].rename(columns={"guṇanāma": "word"})])
w = nipata
w['type'] = 'nipāta'
words = pd.concat([words, w[['lesson', 'page', 'nipāta', 'type', 'english']].rename(columns={"nipāta": "word"})])
words = words.sort_values(by=['lesson', 'page', 'word']).reset_index().drop('index', axis=1)

words.to_csv('../data/words.csv')
