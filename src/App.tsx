import { useState } from 'react'
import { SubjectInput, VerbInput } from './components'
import './App.css'
import { I, Subject } from './model'

export const App = () => {

  const [subject, setSubject] = useState<Subject>(I)
  const [verb, setVerb] = useState('')

  return (
    <div className="App">
      <SubjectInput value={subject} onChange={setSubject} />
      <VerbInput value={verb} onChange={setVerb} />
      <h1>{subject.getValue()} {verb}</h1>
    </div>
  )
}
