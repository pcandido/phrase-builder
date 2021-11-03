import { useState } from 'react'
import { ComplementInput, SubjectInput, VerbInput } from './components'
import './App.css'
import { Config, I, Subject } from './model'
import { ConfigInput } from './components/config-input/ConfigInput'

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
      <SubjectInput value={subject} onChange={setSubject} />
      <VerbInput value={verb} onChange={setVerb} />
      <ComplementInput value={complement} onChange={setComplement} />
      <ConfigInput value={config} onChange={setConfig} />
      <h1>{subject.getValue()} {verb} {complement}</h1>
      {JSON.stringify(config)}
    </div>
  )
}
