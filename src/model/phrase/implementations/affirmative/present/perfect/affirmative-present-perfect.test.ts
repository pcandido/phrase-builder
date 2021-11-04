import { I, SHE, THEY, Verb } from '../../../../..'
import { AffirmativePresentPerfect } from './affirmative-present-perfect'

describe('AffirmativePresentPerfect', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "I have studied English" for params (I, study, English)', () => {
    const phrase = new AffirmativePresentPerfect().build(I, study, english)
    expect(phrase).toBe('I have studied English.')
  })

  it('should return "She has studied English" for params (she, study, English)', () => {
    const phrase = new AffirmativePresentPerfect().build(SHE, study, english)
    expect(phrase).toBe('She has studied English.')
  })

  it('should return "They have studied English" for params (they, study, English)', () => {
    const phrase = new AffirmativePresentPerfect().build(THEY, study, english)
    expect(phrase).toBe('They have studied English.')
  })
})
