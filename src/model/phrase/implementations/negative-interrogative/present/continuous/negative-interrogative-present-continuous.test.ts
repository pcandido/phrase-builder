import { I, SHE, THEY, Verb } from '../../../../..'
import { NegativeInterrogativePresentContinuous } from './negative-interrogative-present-continuous'

describe('NegativeInterrogativePresentContinuous', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "Am I not studying English" for params (I, study, English)', () => {
    const phrase = new NegativeInterrogativePresentContinuous().build(I, study, english)
    expect(phrase).toBe('Am I not studying English?')
  })

  it('should return "Is she not studying English" for params (she, study, English)', () => {
    const phrase = new NegativeInterrogativePresentContinuous().build(SHE, study, english)
    expect(phrase).toBe('Is she not studying English?')
  })

  it('should return "Are they not studying English" for params (they, study, English)', () => {
    const phrase = new NegativeInterrogativePresentContinuous().build(THEY, study, english)
    expect(phrase).toBe('Are they not studying English?')
  })
})
