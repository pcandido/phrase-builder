import { render, screen, fireEvent } from '@testing-library/react'
import { VerbInput } from './VerbInput'

const makeSut = () => {
  const value = 'any value'
  const onChange = jest.fn()

  render(<VerbInput value={value} onChange={onChange} />)

  return { value, onChange }
}

describe('VerbInput', () => {

  it('should render an input with received value', () => {
    const { value } = makeSut()
    const input = screen.getByRole('textbox')

    expect(input).toBeInTheDocument()
    expect(input).toHaveValue(value)
  })

  it('should trigger onChange when input changes', () => {
    const { onChange } = makeSut()
    const input = screen.getByRole('textbox')
    const givenNewValue = 'new-value'
    fireEvent.change(input, { target: { value: givenNewValue } })
    expect(onChange).toBeCalledWith(givenNewValue)
  })
})
