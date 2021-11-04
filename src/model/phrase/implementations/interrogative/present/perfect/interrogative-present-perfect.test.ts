import { I, SHE, THEY, Verb } from '../../../../..'
import { InterrogativePresentPerfect } from './interrogative-present-perfect'

describe('InterrogativePresentPerfect', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "Have I studied English" for params (I, study, English)', () => {
    const phrase = new InterrogativePresentPerfect().build(I, study, english)
    expect(phrase).toBe('Have I studied English?')
  })

  it('should return "Has she studied English" for params (she, study, English)', () => {
    const phrase = new InterrogativePresentPerfect().build(SHE, study, english)
    expect(phrase).toBe('Has she studied English?')
  })

  it('should return "Have they studied English" for params (they, study, English)', () => {
    const phrase = new InterrogativePresentPerfect().build(THEY, study, english)
    expect(phrase).toBe('Have they studied English?')
  })
})
