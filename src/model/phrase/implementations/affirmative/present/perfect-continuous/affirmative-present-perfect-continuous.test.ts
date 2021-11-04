import { I, SHE, THEY, Verb } from '../../../../..'
import { AffirmativePresentPerfectContinuous } from './affirmative-present-perfect-continuous'

describe('AffirmativePresentPerfectContinuous', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "I have been studying English" for params (I, study, English)', () => {
    const phrase = new AffirmativePresentPerfectContinuous().build(I, study, english)
    expect(phrase).toBe('I have been studying English.')
  })

  it('should return "She has been studying English" for params (she, study, English)', () => {
    const phrase = new AffirmativePresentPerfectContinuous().build(SHE, study, english)
    expect(phrase).toBe('She has been studying English.')
  })

  it('should return "They have been studying English" for params (they, study, English)', () => {
    const phrase = new AffirmativePresentPerfectContinuous().build(THEY, study, english)
    expect(phrase).toBe('They have been studying English.')
  })
})
