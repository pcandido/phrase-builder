export const PHRASE_TYPES = [
  'affirmative',
  'negative',
  'interrogative',
  'negative interrogative',
]

export const VERB_TENSE_TIMES = [
  'present',
  'past',
  'future',
]

export const VERB_TENSE_TYPES = [
  'simple',
  'continuous',
  'perfect',
  'perfect continuous',
]

export type PhraseType = typeof PHRASE_TYPES[number]
export type VerbTenseTime = typeof VERB_TENSE_TIMES[number]
export type VerbTenseType = typeof VERB_TENSE_TYPES[number]

export interface Config {
  phraseType: PhraseType
  verbTenseTime: VerbTenseTime
  verbTenseType: VerbTenseType
}
