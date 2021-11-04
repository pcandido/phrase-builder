import { Verb } from '../../model'
import { Card } from '../card/Card'
import './VerbInput.sass'

export interface VerbInputProps {
  value: Verb
  onChange: (value: Verb) => void
}

export const VerbInput = (props: VerbInputProps) => {

  const onChange = (verb:string) => props.onChange(new Verb(verb))

  const commonVerbs = ['be', 'do', 'go', 'like', 'have', 'make', 'know']
  const commonVerbButtons = commonVerbs.map((verb, i) => (
    <button key={i} onClick={() => onChange(verb)}>
      {verb}
    </button>
  ))

  return (
    <Card title="Verb">
      <div id="verb-input">
        <input value={props.value.getInfinitive()} onChange={event => onChange(event.target.value)}></input>
        <div id="common-verbs">
          {commonVerbButtons}
        </div>
      </div>
    </Card>
  )
}
