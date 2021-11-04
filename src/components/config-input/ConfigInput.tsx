import { useEffect, useState } from 'react'
import { Config, PhraseType, PHRASE_TYPES, VerbTenseTime, VerbTenseType, VERB_TENSE_TIMES, VERB_TENSE_TYPES } from '../../model'
import { Card } from '../card/Card'
import './ConfigInput.sass'

export interface ConfigProps {
  value: Config
  onChange: (config: Config) => void
}

export const ConfigInput = (props: ConfigProps) => {

  const { value, onChange } = props

  const [phraseType, setPhraseType] = useState<PhraseType>(value.phraseType)
  const [verbTenseTime, setVerbTenseTime] = useState<VerbTenseTime>(value.verbTenseTime)
  const [verbTenseType, setVerbTenseType] = useState<VerbTenseType>(value.verbTenseType)

  useEffect(() => onChange({ phraseType, verbTenseTime, verbTenseType }), [phraseType, verbTenseTime, verbTenseType, onChange])

  const phraseTypeRadios = PHRASE_TYPES.map(type => makeInput('phrase-type', type, phraseType, setPhraseType))
  const verbTenseTimeRadios = VERB_TENSE_TIMES.map(time => makeInput('verb-tense-time', time, verbTenseTime, setVerbTenseTime))
  const verbTenseTypeRadios = VERB_TENSE_TYPES.map(type => makeInput('verb-tense-type', type, verbTenseType, setVerbTenseType))

  return (
    <Card title="Configuration">
      <div id="config-input">
        <div className="block"><div className="title">Phrase Type</div>{phraseTypeRadios}</div>
        <div className="block"><div className="title">Verb Tense Time</div>{verbTenseTimeRadios}</div>
        <div className="block"><div className="title">Verb Tense Type</div>{verbTenseTypeRadios}</div>
      </div>
    </Card>
  )
}

function makeInput(name: string, value: string, state: string, setState: (value: string) => void) {
  return (
    <div key={value}>
      <input
        type="radio"
        name={name}
        id={`${name}-${value}`}
        value={value}
        checked={state === value}
        onChange={() => setState(value)}
      />
      <label htmlFor={`${name}-${value}`}>{value}</label>
    </div>
  )
}
