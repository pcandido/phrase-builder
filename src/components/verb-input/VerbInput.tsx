
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
    <div>
      <label htmlFor="verb">Verb</label>
      <input id="verb" value={props.value} onChange={event => props.onChange(event.target.value)}></input>
      {commonVerbButtons}
    </div>
  )
}