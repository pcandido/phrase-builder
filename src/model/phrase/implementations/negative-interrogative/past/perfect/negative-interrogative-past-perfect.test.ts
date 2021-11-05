import { I, SHE, THEY, Verb } from '../../../../..'
import { NegativeInterrogativePastPerfect } from './negative-interrogative-past-perfect'

describe('NegativeInterrogativePastPerfect', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "Had I not studied English" for params (I, study, English)', () => {
    const phrase = new NegativeInterrogativePastPerfect().build(I, study, english)
    expect(phrase).toBe('Had I not studied English?')
  })

  it('should return "Had she not studied English" for params (she, study, English)', () => {
    const phrase = new NegativeInterrogativePastPerfect().build(SHE, study, english)
    expect(phrase).toBe('Had she not studied English?')
  })

  it('should return "Had they not studied English" for params (they, study, English)', () => {
    const phrase = new NegativeInterrogativePastPerfect().build(THEY, study, english)
    expect(phrase).toBe('Had they not studied English?')
  })
})
