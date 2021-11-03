import { useEffect, useState } from 'react'
import { Config, PhraseType, PHRASE_TYPES, VerbTenseTime, VerbTenseType, VERB_TENSE_TIMES, VERB_TENSE_TYPES } from '../../model'

export interface ConfigProps {
  value: Config
  onChange: (config: Config) => void
}

export const ConfigInput = (props: ConfigProps) => {

  const { value, onChange } = props

  const [phraseType, setPhraseType] = useState<PhraseType>(value.phraseType)
  const [verbTenseTime, setVerbTenseTime] = useState<VerbTenseTime>(value.verbTenseTime)
  const [verbTenseType, setVerbTenseType] = useState<VerbTenseType>(value.verbTenseType)

  useEffect(
    () => onChange({ phraseType, verbTenseTime, verbTenseType }),
    [phraseType, verbTenseTime, verbTenseType, onChange]
  )

  const phraseTypeRadios = PHRASE_TYPES.map(type => (
    <div key={type}>
      <input
        type="radio"
        name="phrase-type"
        id={`phrase-type-${type}`}
        value={type}
        checked={phraseType === type}
        onChange={() => setPhraseType(type)}
      />
      <label htmlFor={`phrase-type-${type}`}>{type}</label>
    </div>
  ))

  const verbTenseTimeRadios = VERB_TENSE_TIMES.map(time => (
    <div key={time}>
      <input
        type="radio"
        name="verb-tense-time"
        id={`verb-tense-time-${time}`}
        value={time}
        checked={verbTenseTime === time}
        onChange={() => setVerbTenseTime(time)}
      />
      <label htmlFor={`verb-tense-time-${time}`}>{time}</label>
    </div>
  ))

  const verbTenseTypeRadios = VERB_TENSE_TYPES.map(type => (
    <div key={type}>
      <input
        type="radio"
        name="verb-tense-type"
        id={`verb-tense-type-${type}`}
        value={type}
        checked={verbTenseType === type}
        onChange={() => setVerbTenseType(type)}
      />
      <label htmlFor={`verb-tense-type-${type}`}>{type}</label>
    </div>
  ))

  return (
    <div>
      <div>Configuration</div>
      <div>
        <div>{phraseTypeRadios}</div>
        <div>{verbTenseTimeRadios}</div>
        <div>{verbTenseTypeRadios}</div>
      </div>
    </div>
  )
}