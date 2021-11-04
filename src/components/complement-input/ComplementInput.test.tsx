import { render, screen, fireEvent } from '@testing-library/react'
import { ComplementInput } from './ComplementInput'

const makeSut = () => {
  const value = 'any value'
  const onChange = jest.fn()

  render(<ComplementInput value={value} onChange={onChange} />)

  return { value, onChange }
}

describe('ComplementInput', () => {

  it('should render an input with the initial value', () => {
    const { value } = makeSut()
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue(value)
  })

  it('should trigger onChange when user interact with input', () => {
    const { onChange } = makeSut()
    const input = screen.getByRole('textbox')
    const givenNewValue = 'new value'
    fireEvent.change(input, { target: { value: givenNewValue } })
    expect(onChange).toBeCalledWith(givenNewValue)
  })

})
