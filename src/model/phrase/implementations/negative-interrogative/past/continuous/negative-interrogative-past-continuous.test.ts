import { I, SHE, THEY, Verb } from '../../../../..'
import { NegativeInterrogativePastContinuous } from './negative-interrogative-past-continuous'

describe('NegativeInterrogativePastContinuous', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "Was I not studying English" for params (I, study, English)', () => {
    const phrase = new NegativeInterrogativePastContinuous().build(I, study, english)
    expect(phrase).toBe('Was I not studying English?')
  })

  it('should return "Was she not studying English" for params (she, study, English)', () => {
    const phrase = new NegativeInterrogativePastContinuous().build(SHE, study, english)
    expect(phrase).toBe('Was she not studying English?')
  })

  it('should return "Were they not studying English" for params (they, study, English)', () => {
    const phrase = new NegativeInterrogativePastContinuous().build(THEY, study, english)
    expect(phrase).toBe('Were they not studying English?')
  })
})
