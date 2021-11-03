
export interface ComplementInputProps {
  value: string
  onChange: (value: string) => void
}

export const ComplementInput = (props: ComplementInputProps) => {
  return (
    <div className="card">
      <div className="card-title">Complement</div>
      <div className="card-content">
        <input type="text" value={props.value} onChange={event => props.onChange(event.target.value)} />
      </div>
    </div>
  )
}