import { I, SHE, THEY, Verb } from '../../../../..'
import { InterrogativePastPerfect } from './interrogative-past-perfect'

describe('InterrogativePastPerfect', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "Had I studied English" for params (I, study, English)', () => {
    const phrase = new InterrogativePastPerfect().build(I, study, english)
    expect(phrase).toBe('Had I studied English?')
  })

  it('should return "Had she studied English" for params (she, study, English)', () => {
    const phrase = new InterrogativePastPerfect().build(SHE, study, english)
    expect(phrase).toBe('Had she studied English?')
  })

  it('should return "Had they studied English" for params (they, study, English)', () => {
    const phrase = new InterrogativePastPerfect().build(THEY, study, english)
    expect(phrase).toBe('Had they studied English?')
  })
})
