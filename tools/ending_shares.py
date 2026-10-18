#!/usr/bin/env python3
"""ending_shares.py — the share of each reading for every word ending, over the whole Tipiṭaka.

Method, adapted from the Digital Pāḷi Dictionary's own frequency tables (dpd-db: go_modules/frequency,
scripts/build/ebt_counter.py): the DPD counts every word-form in a corpus and credits a form's count to each
headword whose inflection table contains it, so that a headword's frequency is the sum of the counts of its
forms. The same count is made here over the Chaṭṭha Saṅgāyana Tipiṭaka (tipitaka2500.github.io, from the local
full-text index ~/.cache/tipitaka2500/index.sqlite). The question asked is the reverse one, which reading a
form most likely has, so a form's count is divided among its candidate headwords in proportion to the
frequency of each headword's OTHER forms (its DPD-style frequency less the form in question, so that a rare
homograph cannot borrow the frequency of the very form in dispute), and within a headword the form takes the
readings the DPD's inflection table gives it (the lookup table's grammar entries). The DPD's entries for
letters, roots, suffixes and verb endings are not candidates; a noun's own adjectival homonym (its sense as the
last member of a compound) is not a candidate for a free-standing form; an address form the DPD lists as a
headword of its own (bhikkhave, bhante) takes the reading of that headword's grammar note.
Usage: python3 tools/ending_shares.py [-o shares.json] [--appendix p-endings.md]   (run where dpd.db is)
The --appendix option rewrites the tables of the textbook's Appendix P below its "## Endings in `a`" heading from the result.
"""
import sqlite3, re, collections, pathlib, json, sys
IDX = pathlib.Path.home() / ".cache/tipitaka2500/index.sqlite"; DPD = pathlib.Path("dpd.db")
GROUPS = {
 "-a": ["a"], "-aṁ": ["aṃ"], "-assa": ["assa"], "-asmā, -amhā": ["asmā", "amhā"], "-asmiṁ, -amhi": ["asmiṃ", "amhi"], "-ato, -to": ["ato"], "-atā": ["atā"],
 "-asā, -aso, -asi": ["asā", "aso", "asi"], "-ā": ["ā"], "-āni, -īni, -ūni": ["āni", "īni", "ūni"], "-ānaṁ, -īnaṁ, -ūnaṁ": ["ānaṃ", "īnaṃ", "ūnaṃ"], "-āya": ["āya"],
 "-āyaṁ, -iyaṁ": ["āyaṃ", "iyaṃ"], "-āyo, -iyo": ["āyo", "iyo"], "-e": ["e"], "-ehi, -īhi, -ūhi, -āhi": ["ehi", "īhi", "ūhi", "āhi", "ebhi"], "-ena": ["ena"],
 "-esu, -īsu, -ūsu, -āsu": ["esu", "īsu", "ūsu", "āsu"], "-etha": ["etha"], "-eyya…": ["eyya", "eyyuṃ", "eyyaṃ", "eyyātha", "eyyāma", "eyyāsi", "eyyāmi"],
 "-i": ["i"], "-iṁ": ["iṃ"], "-iṁsu": ["iṃsu"], "-inā, -unā": ["inā", "unā"], "-ino, -uno, -issa, -ussa": ["ino", "uno", "issa", "ussa"], "-iyā, -uyā": ["iyā", "uyā"],
 "-ī": ["ī"], "-īhi, -ūhi, -īnaṁ, -ūnaṁ, -īsu, -ūsu": ["īhi", "ūhi", "īnaṃ", "ūnaṃ", "īsu", "ūsu"], "-o": ["o"], "-u": ["u"], "-uṁ": ["uṃ"], "-ū": ["ū"],
 "-ti": ["ti"], "-nti": ["nti"], "-si": ["si"], "-mi, -ma": ["mi", "ma"], "-tha, -ttha": ["tha"], "-tu, -ntu": ["tu", "ntu"], "-nto, -ntā, -ntaṁ, -nte": ["nto", "ntā", "ntaṃ", "nte"],
 "-māno, -mānā, -māne": ["māno", "mānā", "māne"], "-ssati…": ["ssati", "ssanti", "ssāmi", "ssāma", "ssatha"], "-tabba…, -anīyaṁ": ["tabbaṃ", "tabbo", "tabbā", "anīyaṃ", "anīyo", "anīyā"],
 "-tvā, -tvāna": ["tvā", "tvāna"], "-tuṁ": ["tuṃ"], "-te": ["te"],
}
G = {"masc": "🚹", "fem": "🚺", "nt": "🚻"}; CASE = {"nom": "①", "acc": "②", "instr": "③", "dat": "④", "abl": "⑤", "gen": "⑥", "loc": "⑦", "voc": "⓪"}
NUM = {"sg": "⨀", "pl": "⨂"}; TENSE = {"pr": "▶️", "aor": "⏮", "fut": "⏭", "imp": "⏹", "opt": "⏯", "cond": "🔀", "perf": "🔄", "imperf": "↩️"}; PERS = {"1st": "👆", "2nd": "🤘", "3rd": "🤟"}
META = {"letter", "root", "suffix", "ve", "cs", "idiom", "abbrev", "prefix"}; NOUN_POS = {"masc", "fem", "nt"}
PART = {"pp": "a past participle (-ta)", "prp": "a present participle (-anta, -māna)", "ptp": "a participle in -tabba, -anīya, -ya"}
OTHER = {"ind": "a particle or adverb", "abs": "an absolutive (-tvā)", "ger": "an absolutive (-ya)", "inf": "an infinitive (-tuṁ)", "sandhi": "a sandhi join, to be split", "card": "a number", "ordin": "a number", "adj": "an adjective, agreeing with its noun"}
ORDER = "①②③④⑤⑥⑦⓪"
def nc(tokens):
    """number+case from a grammar phrase such as 'masc acc sg', '2nd dat sg', 'voc sg & pl'."""
    case = next((CASE[t] for t in tokens if t in CASE), None); nums = [NUM[t] for t in tokens if t in NUM]
    return case, nums
def join(rd):
    rd = sorted(set(rd), key=lambda s: (s[:1] != "⨀", ORDER.index(s[-1])))
    by_num = collections.OrderedDict()
    for s in rd: by_num.setdefault(s[:-1], []).append(s[-1])
    return "; ".join(n + " or ".join(cs) for n, cs in by_num.items())
def readings_of(gram, lemma, pos, form, own_grammar):
    if pos in NOUN_POS:
        rd = []
        for hwl, pg, t in gram:
            if hwl != lemma or pg != "noun": continue
            toks = t.split(); case, nums = nc(toks)
            if toks and toks[0] == pos and case: rd += [(n + case) for n in (nums or [""])]
        if not rd and own_grammar and lemma == form:   # the DPD's own headword for an address form: "masc, voc pl of bhikkhu"
            for g in own_grammar:
                case, nums = nc(re.split(r"[ ,&]+", g))
                if case: rd += [n + case for n in (nums or [""])]
        return G[pos] + (join(rd) if rd else " a form its table does not list")
    if pos in PART: return PART[pos]
    if pos in ("pron", "interr"):
        rd = []
        for hwl, pg, t in gram:
            if hwl == lemma and pg in ("pron", "interr"):
                case, nums = nc(t.split())
                if case: rd += [n + case for n in (nums or [""])]
        if not rd and own_grammar:   # a pronoun form the dictionary lists as a headword of its own: "pron, gen sg of ahaṃ"
            for g in own_grammar:
                case, nums = nc(re.split(r"[ ,&]+", g))
                if case: rd += [n + case for n in (nums or [""])]
        return "*️⃣ a pronoun" + (" " + join(rd) if rd else "")
    if pos in TENSE:
        rd = sorted({TENSE[t.split()[0]] + PERS.get(t.split()[1], "") + NUM.get(t.split()[2], "") for hwl, pg, t in gram if pg == "verb" and hwl == lemma and t.split()[0] in TENSE and len(t.split()) > 2})
        if rd: return " or ".join(rd)
        return "a verb with iti joined on (…tīti)" if re.search(r"[āīū]ti$", form) else "a verb form the table does not list"
    return OTHER.get(pos, pos)
LETTER = [("a", ["-a", "-aṁ", "-assa", "-asmā, -amhā", "-asmiṁ, -amhi", "-ato, -to", "-atā", "-asā, -aso, -asi"]),
          ("ā", ["-ā", "-āni, -īni, -ūni", "-ānaṁ, -īnaṁ, -ūnaṁ", "-āya", "-āyaṁ, -iyaṁ", "-āyo, -iyo"]),
          ("e", ["-e", "-ehi, -īhi, -ūhi, -āhi", "-ena", "-esu, -īsu, -ūsu, -āsu", "-etha", "-eyya…"]),
          ("i and ī", ["-i", "-iṁ", "-iṁsu", "-inā, -unā", "-ino, -uno, -issa, -ussa", "-iyā, -uyā", "-ī", "-īhi, -ūhi, -īnaṁ, -ūnaṁ, -īsu, -ūsu"]),
          ("o, u and ū", ["-o", "-u", "-uṁ", "-ū"]),
          ("a consonant", ["-ti", "-nti", "-si", "-mi, -ma", "-tha, -ttha", "-tu, -ntu", "-nto, -ntā, -ntaṁ, -nte", "-māno, -mānā, -māne", "-ssati…", "-tabba…, -anīyaṁ", "-tvā, -tvāna", "-tuṁ", "-te"])]
def write_appendix(result, path):
    """Rewrite the tables of Appendix P (everything from its '## Endings in `a`' heading on) from the result."""
    groups = result["groups"]; ex = lambda words: ", ".join(f"`{w.replace('ṃ', 'ṁ')}`" for w in words[:5])
    out = []
    for letter, rows in LETTER:
        out.append(f"\n## Endings in `{letter}`\n")
        for row in rows:
            g = groups[row]; n = g["known"] + g["unknown"]; cov = 100 * g["known"] / n if n else 0
            out.append(f"\n### `{row}`\n\n{n:,} words in the Tipiṭaka end so ({g['per_mille']:g} in every thousand); {cov:.0f}% of them are in the dictionary and are classed below.\n")
            out.append("| it reads as | share | words | for example |\n| --- | --: | --: | --- |")
            rest = 0.0; restn = 0
            for d in g["readings"]:
                if d["share"] >= 0.5: out.append(f"| {d['reading']} | {d['share']:.1f}% | {d['count']:,} | {ex(d['examples'])} |")
                else: rest += d["share"]; restn += d["count"]
            if restn: out.append(f"| other readings, each under 0.5% | {rest:.1f}% | {restn:,} | |")
            out.append("")
    page = pathlib.Path(path); t = page.read_text(encoding="utf-8")
    head = t[:t.index("\n## Endings in `a`")]
    head = re.sub(r"\d{1,3}(,\d{3})+ words\. The method", f"{result['total_tokens']:,} words. The method", head)
    page.write_text(head + "\n".join(out) + "\n", encoding="utf-8")

def main(out, tests=(), appendix=None):
    member = {e: row for row, es in GROUPS.items() for e in es}; ENDS = sorted(member, key=len, reverse=True)
    dpd = sqlite3.connect(DPD); idx = sqlite3.connect(IDX)
    print("counting the corpus …", file=sys.stderr)
    count = collections.Counter(); total_tokens = 0
    for (nt,) in idx.execute("select ntext from para"):
        for w in nt.split():
            if w == "pe": continue   # the edition's abbreviation mark (…pe…), not a word
            if re.match(r"^[a-zāīūṃṅñṭḍṇḷ]+$", w): count[w] += 1; total_tokens += 1
    print("headword frequencies over the corpus (the DPD's method) …", file=sys.stderr)
    hw = {}; freq = {}
    gram_entries = set()
    for i, l, pos, infl, gram, meaning in dpd.execute("select id, lemma_1, pos, inflections, grammar, meaning_1 from dpd_headwords"):
        hw[i] = (re.sub(r" \d+(\.\d+)*$", "", l), pos, gram or "")
        freq[i] = sum(count.get(f, 0) for f in (infl or "").split(",") if f)
        if (meaning or "").startswith("(gram)"): gram_entries.add(i)   # the dictionary's entries for grammatical terms
    forms = collections.defaultdict(collections.Counter)
    for w, n in count.items():
        for e in ENDS:
            if w.endswith(e) and len(w) > len(e): forms[member[e]][w] = n; break   # at least one letter before the ending: ca, te, so count
    FUNCTION = {"ind", "pron", "interr"}; DECL = NOUN_POS | set(PART) | {"adj", "card", "ordin"}
    def classify(w):
        if w == "ti": return {"a particle or adverb": 1.0}   # iti, the quotation particle, cut off by the edition's closing quote mark
        r = dpd.execute("select headwords, grammar from lookup where lookup_key=?", (w,)).fetchone()
        if not r or not r[0]: return None
        cands = [i for i in json.loads(r[0]) if i in hw and hw[i][1] not in META and i not in gram_entries]
        own_fn = [i for i in cands if hw[i][0] == w and hw[i][1] in FUNCTION]   # the form is itself a particle or pronoun headword
        decl = [i for i in cands if hw[i][1] in DECL]
        if own_fn:
            if any(hw[i][1] in ("pron", "interr") for i in own_fn) or not decl:   # a pronoun, or a particle with no declinable homograph
                cands = [i for i in cands if hw[i][1] in FUNCTION or hw[i][0] == w]
            elif not any(hw[i][0] == w for i in decl):   # a particle that is a frozen case form of a noun (dukkhaṁ, vācāya, tato): read it as that noun
                cands = [i for i in cands if not (hw[i][1] == "ind" and hw[i][0] == w)]
        groups = collections.defaultdict(float); own = collections.defaultdict(list)
        for i in cands:
            lemma, pos, gram_own = hw[i]
            groups[(lemma, pos)] += max(freq[i] - count.get(w, 0), 0) + (count.get(w, 0) if lemma == w else 0) + 0.5   # its other forms, and the form itself when this is its citation form
            if lemma == w: own[(lemma, pos)].append(gram_own)
        noun_lemmas = {l for (l, pos) in groups if pos in NOUN_POS}
        for key in [k for k in groups if k[1] == "adj" and k[0] in noun_lemmas]: del groups[key]
        if not groups: return None
        gram = json.loads(r[1]) if r[1] else []; tot = sum(groups.values()); outd = collections.defaultdict(float)
        for (lemma, pos), wgt in groups.items(): outd[readings_of(gram, lemma, pos, w, own.get((lemma, pos)))] += wgt / tot
        return dict(outd)
    for w in tests: print(f"{w:14}", {k: round(v, 2) for k, v in (classify(w) or {}).items()})
    cache = {}; result = {"total_tokens": total_tokens, "groups": {}}
    for row in GROUPS:
        counter = forms.get(row, {}); agg = collections.Counter(); ex = collections.defaultdict(collections.Counter); known = unknown = 0
        for w, n in counter.items():
            if w not in cache: cache[w] = classify(w)
            c = cache[w]
            if c is None: unknown += n; continue
            known += n
            for label, share in c.items(): agg[label] += n * share; ex[label][w] += n * share
        tot = sum(agg.values()) or 1
        result["groups"][row] = {"endings": GROUPS[row], "known": known, "unknown": unknown, "per_mille": round(1000 * (known + unknown) / total_tokens, 1),
                                 "readings": [{"reading": c, "share": round(100 * v / tot, 1), "count": round(v), "examples": [x for x, _ in ex[c].most_common(5)]} for c, v in agg.most_common()]}
    if out: json.dump(result, open(out, "w"), ensure_ascii=False, indent=1)
    if appendix: write_appendix(result, appendix)
    print(total_tokens, "word tokens")
    for row, r in result["groups"].items():
        cov = r["known"] / (r["known"] + r["unknown"] or 1)
        print(f"{row:34} {r['known']+r['unknown']:7} words, {cov:4.0%} classed  " + " · ".join(f"{d['reading']} {d['share']:.0f}% ({'/'.join(d['examples'][:3])})" for d in r["readings"][:6] if d["share"] >= 2))
if __name__ == "__main__":
    out = sys.argv[sys.argv.index("-o") + 1] if "-o" in sys.argv else None
    appendix = sys.argv[sys.argv.index("--appendix") + 1] if "--appendix" in sys.argv else None
    main(out, appendix=appendix, tests=("na", "so", "te", "me", "ti", "nāma", "hetu", "dukkhaṃ", "vācāya", "tato", "tena", "paccayā", "pubbe", "kiṃ", "evaṃ", "bhante", "āyasmā", "tasmā"))
