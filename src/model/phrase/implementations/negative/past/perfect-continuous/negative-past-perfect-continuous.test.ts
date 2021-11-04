import { I, SHE, THEY, Verb } from '../../../../..'
import { NegativePastPerfectContinuous } from './negative-past-perfect-continuous'

describe('NegativePastPerfectContinuous', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "I had not been studying English" for params (I, study, English)', () => {
    const phrase = new NegativePastPerfectContinuous().build(I, study, english)
    expect(phrase).toBe('I had not been studying English.')
  })

  it('should return "She had not been studying English" for params (she, study, English)', () => {
    const phrase = new NegativePastPerfectContinuous().build(SHE, study, english)
    expect(phrase).toBe('She had not been studying English.')
  })

  it('should return "They had not been studying English" for params (they, study, English)', () => {
    const phrase = new NegativePastPerfectContinuous().build(THEY, study, english)
    expect(phrase).toBe('They had not been studying English.')
  })
})
