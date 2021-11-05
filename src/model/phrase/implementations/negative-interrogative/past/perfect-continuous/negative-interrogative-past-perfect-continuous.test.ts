import { I, SHE, THEY, Verb } from '../../../../..'
import { NegativeInterrogativePastPerfectContinuous } from './negative-interrogative-past-perfect-continuous'

describe('NegativeInterrogativePastPerfectContinuous', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "Had I not been studying English" for params (I, study, English)', () => {
    const phrase = new NegativeInterrogativePastPerfectContinuous().build(I, study, english)
    expect(phrase).toBe('Had I not been studying English?')
  })

  it('should return "Had she not been studying English" for params (she, study, English)', () => {
    const phrase = new NegativeInterrogativePastPerfectContinuous().build(SHE, study, english)
    expect(phrase).toBe('Had she not been studying English?')
  })

  it('should return "Had they not been studying English" for params (they, study, English)', () => {
    const phrase = new NegativeInterrogativePastPerfectContinuous().build(THEY, study, english)
    expect(phrase).toBe('Had they not been studying English?')
  })
})
