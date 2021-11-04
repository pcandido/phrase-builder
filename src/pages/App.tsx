import { useState } from 'react'
import './App.sass'
import { Config, I, Subject, Verb } from '../model'
import { ConfigInput } from '../components/config-input/ConfigInput'
import { ComplementInput, SubjectInput, VerbInput } from '../components'
import { PhraseOutput } from '../components/phrase-output/PhraseOutput'

export const App = () => {

  const [subject, setSubject] = useState<Subject>(I)
  const [verb, setVerb] = useState<Verb>(new Verb('study'))
  const [complement, setComplement] = useState('English')
  const [config, setConfig] = useState<Config>({
    phraseType: 'affirmative',
    verbTenseTime: 'present',
    verbTenseType: 'simple'
  })

  return (
    <div className="App">
      <div id="parameters">
        <SubjectInput value={subject} onChange={setSubject} />
        <VerbInput value={verb} onChange={setVerb} />
        <ComplementInput value={complement} onChange={setComplement} />
        <div id="config-input-card">
          <ConfigInput value={config} onChange={setConfig} />
        </div>
      </div>
      <div id="result">
        <PhraseOutput value={`${subject.getValue()} ${verb.getInfinitive()} ${complement}`} />
      </div>
    </div>
  )
}
