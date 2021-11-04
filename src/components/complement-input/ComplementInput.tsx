import { Card } from '../card/Card'
import './ComplementInput.sass'

export interface ComplementInputProps {
  value: string
  onChange: (value: string) => void
}

export const ComplementInput = (props: ComplementInputProps) => {
  return (
    <Card title="Complement">
      <div id="complement-input">
        <input type="text" value={props.value} onChange={event => props.onChange(event.target.value)} />
      </div>
    </Card>
  )
}
