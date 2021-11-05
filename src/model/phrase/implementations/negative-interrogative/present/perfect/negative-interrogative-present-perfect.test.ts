import { I, SHE, THEY, Verb } from '../../../../..'
import { NegativeInterrogativePresentPerfect } from './negative-interrogative-present-perfect'

describe('NegativeInterrogativePresentPerfect', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "Have I not studied English" for params (I, study, English)', () => {
    const phrase = new NegativeInterrogativePresentPerfect().build(I, study, english)
    expect(phrase).toBe('Have I not studied English?')
  })

  it('should return "Has she not studied English" for params (she, study, English)', () => {
    const phrase = new NegativeInterrogativePresentPerfect().build(SHE, study, english)
    expect(phrase).toBe('Has she not studied English?')
  })

  it('should return "Have they not studied English" for params (they, study, English)', () => {
    const phrase = new NegativeInterrogativePresentPerfect().build(THEY, study, english)
    expect(phrase).toBe('Have they not studied English?')
  })
})
