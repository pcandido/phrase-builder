import { I, SHE, THEY, Verb } from '../../../../..'
import { NegativePresentPerfect } from './negative-present-perfect'

describe('NegativePresentPerfect', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "I have not studied English" for params (I, study, English)', () => {
    const phrase = new NegativePresentPerfect().build(I, study, english)
    expect(phrase).toBe('I have not studied English.')
  })

  it('should return "She has not studied English" for params (she, study, English)', () => {
    const phrase = new NegativePresentPerfect().build(SHE, study, english)
    expect(phrase).toBe('She has not studied English.')
  })

  it('should return "They have not studied English" for params (they, study, English)', () => {
    const phrase = new NegativePresentPerfect().build(THEY, study, english)
    expect(phrase).toBe('They have not studied English.')
  })
})
