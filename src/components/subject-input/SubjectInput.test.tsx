import { render, screen, fireEvent } from '@testing-library/react'
import { SubjectInput } from '..'
import { I, SHE } from '../../model'

const makeSut = () => {
  const value = I
  const onChange = jest.fn()

  render(<SubjectInput value={value} onChange={onChange} />)

  return { value, onChange }
}

describe('SubjectInput', () => {

  it.each([
    'I', 'you', 'he', 'she', 'it', 'we', 'they', 'other',
  ])('should render a radio button for subject %s', (subject) => {
    makeSut()
    const radioButton = screen.getByLabelText(subject)
    expect(radioButton).toBeInTheDocument()
    expect(radioButton).toBeInstanceOf(HTMLInputElement)
  })

  it('should trigger onChange with selected generic subject', () => {
    const { onChange } = makeSut()
    const radioButton = screen.getByLabelText('she')
    radioButton.click()
    expect(onChange).toBeCalledWith(SHE)
  })

  it('should trigger onChange with new other value', () => {
    const { onChange } = makeSut()
    const otherInput = screen.getByRole('textbox')
    const givenNewValue = 'new value'
    fireEvent.change(otherInput, { target: { value: givenNewValue } })
    expect(onChange).toBeCalledWith(expect.objectContaining({ value: givenNewValue }))
  })

})
