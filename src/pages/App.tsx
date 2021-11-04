import { useState } from 'react'
import './App.sass'
import { Config, I, Subject } from '../model'
import { ConfigInput } from '../components/config-input/ConfigInput'
import { ComplementInput, SubjectInput, VerbInput } from '../components'

export const App = () => {

  const [subject, setSubject] = useState<Subject>(I)
  const [verb, setVerb] = useState('study')
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
        <h1>{subject.getValue()} {verb} {complement}</h1>
        {JSON.stringify(config)}
      </div>
    </div>
  )
}
