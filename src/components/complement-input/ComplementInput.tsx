
export interface ComplementInputProps {
  value: string
  onChange: (value: string) => void
}

export const ComplementInput = (props: ComplementInputProps) => {
  return (
    <div>
      <input type="text" value={props.value} onChange={event => props.onChange(event.target.value)} />
    </div>
  )
}