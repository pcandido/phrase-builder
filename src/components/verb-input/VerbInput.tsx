import { Card } from '../card/Card'
import './VerbInput.sass'

export interface VerbInputProps {
  value: string
  onChange: (value: string) => void
}

export const VerbInput = (props: VerbInputProps) => {

  const commonVerbs = ['be', 'do', 'go', 'like', 'have', 'make', 'know']
  const commonVerbButtons = commonVerbs.map((verb, i) => (
    <button key={i} onClick={() => props.onChange(verb)}>
      {verb}
    </button>
  ))

  return (
    <Card title="Verb">
      <div id="verb-input">
        <input value={props.value} onChange={event => props.onChange(event.target.value)}></input>
        <div id="common-verbs">
          {commonVerbButtons}
        </div>
      </div>
    </Card>
  )
}