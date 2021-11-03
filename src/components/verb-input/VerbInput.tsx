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
    <div id="verb-input" className="card">
      <div className="card-title">Verb</div>
      <div className="card-content">
        <input value={props.value} onChange={event => props.onChange(event.target.value)}></input>
        <div id="common-verbs">
          {commonVerbButtons}
        </div>
      </div>
    </div>
  )
}