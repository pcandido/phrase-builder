import { I, SHE, THEY, Verb } from '../../../../..'
import { AffirmativePastPerfectContinuous } from './affirmative-past-perfect-continuous'

describe('AffirmativePastPerfectContinuous', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "I had been studying English" for params (I, study, English)', () => {
    const phrase = new AffirmativePastPerfectContinuous().build(I, study, english)
    expect(phrase).toBe('I had been studying English.')
  })

  it('should return "She had been studying English" for params (she, study, English)', () => {
    const phrase = new AffirmativePastPerfectContinuous().build(SHE, study, english)
    expect(phrase).toBe('She had been studying English.')
  })

  it('should return "They had been studying English" for params (they, study, English)', () => {
    const phrase = new AffirmativePastPerfectContinuous().build(THEY, study, english)
    expect(phrase).toBe('They had been studying English.')
  })
})
