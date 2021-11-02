
export interface VerbInputProps {
  value: string
  onChange: (value: string) => void
}

export const VerbInput = (props: VerbInputProps) => {

  return (
    <div>
      <input value={props.value} onChange={event => props.onChange(event.target.value)}></input>
    </div>
  )
}