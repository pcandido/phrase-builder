import { I, SHE, THEY, Verb } from '../../../../..'
import { InterrogativePresentPerfectContinuous } from './interrogative-present-perfect-continuous'

describe('InterrogativePresentPerfectContinuous', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "Have I been studying English" for params (I, study, English)', () => {
    const phrase = new InterrogativePresentPerfectContinuous().build(I, study, english)
    expect(phrase).toBe('Have I been studying English.')
  })

  it('should return "Has she been studying English" for params (she, study, English)', () => {
    const phrase = new InterrogativePresentPerfectContinuous().build(SHE, study, english)
    expect(phrase).toBe('Has she been studying English.')
  })

  it('should return "Have they been studying English" for params (they, study, English)', () => {
    const phrase = new InterrogativePresentPerfectContinuous().build(THEY, study, english)
    expect(phrase).toBe('Have they been studying English.')
  })
})
