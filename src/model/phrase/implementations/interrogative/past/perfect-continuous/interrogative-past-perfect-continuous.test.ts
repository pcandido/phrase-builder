import { I, SHE, THEY, Verb } from '../../../../..'
import { InterrogativePastPerfectContinuous } from './interrogative-past-perfect-continuous'

describe('InterrogativePastPerfectContinuous', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "Had I been studying English" for params (I, study, English)', () => {
    const phrase = new InterrogativePastPerfectContinuous().build(I, study, english)
    expect(phrase).toBe('Had I been studying English?')
  })

  it('should return "Had she been studying English" for params (she, study, English)', () => {
    const phrase = new InterrogativePastPerfectContinuous().build(SHE, study, english)
    expect(phrase).toBe('Had she been studying English?')
  })

  it('should return "Had they been studying English" for params (they, study, English)', () => {
    const phrase = new InterrogativePastPerfectContinuous().build(THEY, study, english)
    expect(phrase).toBe('Had they been studying English?')
  })
})
