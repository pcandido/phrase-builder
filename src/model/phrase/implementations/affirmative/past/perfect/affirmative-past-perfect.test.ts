import { I, SHE, THEY, Verb } from '../../../../..'
import { AffirmativePastPerfect } from './affirmative-past-perfect'

describe('AffirmativePastPerfect', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "I had studied English" for params (I, study, English)', () => {
    const phrase = new AffirmativePastPerfect().build(I, study, english)
    expect(phrase).toBe('I had studied English.')
  })

  it('should return "She had studied English" for params (she, study, English)', () => {
    const phrase = new AffirmativePastPerfect().build(SHE, study, english)
    expect(phrase).toBe('She had studied English.')
  })

  it('should return "They had studied English" for params (they, study, English)', () => {
    const phrase = new AffirmativePastPerfect().build(THEY, study, english)
    expect(phrase).toBe('They had studied English.')
  })
})
