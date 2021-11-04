import { useEffect, useState } from 'react'
import './SubjectInput.sass'
import { GENERIC_SUBJECTS, Subject } from '../../model'
import { Card } from '../card/Card'

export interface SubjectInputProps {
  value: Subject
  onChange: (value: Subject) => void
}

export const SubjectInput = (props: SubjectInputProps) => {

  const { value, onChange } = props
  const [otherSubject, setOtherSubject] = useState('')

  useEffect(() => {
    if (otherSubject)
      onChange(new Subject(otherSubject))
  }, [otherSubject, onChange])

  const radioButtons = GENERIC_SUBJECTS
    .map(subject => {
      const subjectValue = subject.getRawValue()
      return (
        <div className="option" key={subjectValue}>
          <input
            type="radio"
            name="subject"
            id={`radio-${subjectValue}`}
            value={subjectValue}
            checked={value.isGeneric() && value.getRawValue() === subjectValue}
            onChange={() => onChange(subject)}
          />
          <label htmlFor={`radio-${subjectValue}`}>{subjectValue}</label>
        </div>
      )
    })

  return (
    <Card title="Subject">
      <div id="subject-input">
        {radioButtons}
        <div className="option">
          <input
            type="radio"
            name="subject"
            id="radio-other"
            value="other"
            checked={!value.isGeneric()}
            onChange={() => onChange(new Subject(otherSubject))}
          />
          <label htmlFor="radio-other">other</label>:
          <input id="other-input" type="text" value={otherSubject} onChange={event => setOtherSubject(event.target.value)} />
        </div>
      </div>
    </Card>
  )

}