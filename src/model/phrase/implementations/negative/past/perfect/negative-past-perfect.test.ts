import { I, SHE, THEY, Verb } from '../../../../..'
import { NegativePastPerfect } from './negative-past-perfect'

describe('NegativePastPerfect', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "I had not studied English" for params (I, study, English)', () => {
    const phrase = new NegativePastPerfect().build(I, study, english)
    expect(phrase).toBe('I had not studied English.')
  })

  it('should return "She had not studied English" for params (she, study, English)', () => {
    const phrase = new NegativePastPerfect().build(SHE, study, english)
    expect(phrase).toBe('She had not studied English.')
  })

  it('should return "They had not studied English" for params (they, study, English)', () => {
    const phrase = new NegativePastPerfect().build(THEY, study, english)
    expect(phrase).toBe('They had not studied English.')
  })
})
