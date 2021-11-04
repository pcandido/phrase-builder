import { I, SHE, THEY, Verb } from '../../../../..'
import { NegativePresentPerfectContinuous } from './negative-present-perfect-continuous'

describe('NegativePresentPerfectContinuous', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "I have not been studying English" for params (I, study, English)', () => {
    const phrase = new NegativePresentPerfectContinuous().build(I, study, english)
    expect(phrase).toBe('I have not been studying English.')
  })

  it('should return "She has not been studying English" for params (she, study, English)', () => {
    const phrase = new NegativePresentPerfectContinuous().build(SHE, study, english)
    expect(phrase).toBe('She has not been studying English.')
  })

  it('should return "They have not been studying English" for params (they, study, English)', () => {
    const phrase = new NegativePresentPerfectContinuous().build(THEY, study, english)
    expect(phrase).toBe('They have not been studying English.')
  })
})
