import { I, SHE, THEY, Verb } from '../../../../..'
import { NegativeInterrogativePresentSimple } from './negative-interrogative-present-simple'

describe('NegativeInterrogativePresentSimple', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "Do I not study English" for params (I, study, English)', () => {
    const phrase = new NegativeInterrogativePresentSimple().build(I, study, english)
    expect(phrase).toBe('Do I not study English?')
  })

  it('should return "Does she not study English" for params (she, study, English)', () => {
    const phrase = new NegativeInterrogativePresentSimple().build(SHE, study, english)
    expect(phrase).toBe('Does she not study English?')
  })

  it('should return "Do they not study English" for params (they, study, English)', () => {
    const phrase = new NegativeInterrogativePresentSimple().build(THEY, study, english)
    expect(phrase).toBe('Do they not study English?')
  })
})
