import { useState } from 'react'
import { VerbInput } from './components/verb-input/VerbInput'
import './App.css'

export const App = () => {

  const [verb, setVerb] = useState('')

  return (
    <div className="App">
      <VerbInput value={verb} onChange={setVerb} />
      <h1>{verb}</h1>
    </div>
  )
}
