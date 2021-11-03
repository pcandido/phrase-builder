import { render, screen } from '@testing-library/react'
import { Config, PHRASE_TYPES } from '../../model'
import { ConfigInput } from './ConfigInput'

const makeSut = (defaults?: Partial<Config>) => {
  const value: Config = {
    phraseType: 'affirmative',
    verbTenseTime: 'present',
    verbTenseType: 'simple',
    ...defaults
  }
  const onChange = jest.fn()
  render(<ConfigInput value={value} onChange={onChange} />)
  return { onChange }
}

describe('Config', () => {

  describe.each(PHRASE_TYPES)('Phrase Type: %s', (type: string) => {

    it('should be rendered as a radioButton', () => {
      makeSut()
      const radio = screen.getByLabelText(type)
      expect(radio).toBeInTheDocument()
    })

    it('should be selected if value indicates it', () => {
        makeSut({phraseType:type})
        const radio = screen.getByLabelText(type)
        expect(radio).toBeChecked()
    })

    it('should trigger onChange when clicked', () => {
      const { onChange } = makeSut()
      const radio = screen.getByLabelText(type)
      radio.click()
      expect(onChange).toBeCalledWith(expect.objectContaining({ phraseType: type }))
    })

  })

})