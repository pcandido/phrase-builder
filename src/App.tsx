import { useState } from 'react'
import { ComplementInput, SubjectInput, VerbInput } from './components'
import './App.css'
import { I, Subject } from './model'

export const App = () => {

  const [subject, setSubject] = useState<Subject>(I)
  const [verb, setVerb] = useState('study')
  const [complement, setComplement] = useState('English')

  return (
    <div className="App">
      <SubjectInput value={subject} onChange={setSubject} />
      <VerbInput value={verb} onChange={setVerb} />
      <ComplementInput value={complement} onChange={setComplement} />
      <h1>{subject.getValue()} {verb} {complement}</h1>
    </div>
  )
}
