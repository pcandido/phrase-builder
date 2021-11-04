import { I, SHE, THEY, Verb } from '../../../../..'
import { InterrogativePresentContinuous } from './interrogative-present-continuous'

describe('InterrogativePresentContinuous', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "Am I studying English" for params (I, study, English)', () => {
    const phrase = new InterrogativePresentContinuous().build(I, study, english)
    expect(phrase).toBe('Am I studying English.')
  })

  it('should return "Is she studying English" for params (she, study, English)', () => {
    const phrase = new InterrogativePresentContinuous().build(SHE, study, english)
    expect(phrase).toBe('Is she studying English.')
  })

  it('should return "Are they studying English" for params (they, study, English)', () => {
    const phrase = new InterrogativePresentContinuous().build(THEY, study, english)
    expect(phrase).toBe('Are they studying English.')
  })
})
