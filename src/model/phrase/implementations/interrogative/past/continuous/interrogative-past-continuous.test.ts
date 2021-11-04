import { I, SHE, THEY, Verb } from '../../../../..'
import { InterrogativePastContinuous } from './interrogative-past-continuous'

describe('InterrogativePastContinuous', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "Was I studying English" for params (I, study, English)', () => {
    const phrase = new InterrogativePastContinuous().build(I, study, english)
    expect(phrase).toBe('Was I studying English?')
  })

  it('should return "Was she studying English" for params (she, study, English)', () => {
    const phrase = new InterrogativePastContinuous().build(SHE, study, english)
    expect(phrase).toBe('Was she studying English?')
  })

  it('should return "Were they studying English" for params (they, study, English)', () => {
    const phrase = new InterrogativePastContinuous().build(THEY, study, english)
    expect(phrase).toBe('Were they studying English?')
  })
})
