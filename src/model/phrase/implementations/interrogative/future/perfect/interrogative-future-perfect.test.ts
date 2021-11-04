import { I, SHE, THEY, Verb } from '../../../../..'
import { InterrogativeFuturePerfect } from './interrogative-future-perfect'

describe('InterrogativeFuturePerfect', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "Will I have studied English" for params (I, study, English)', () => {
    const phrase = new InterrogativeFuturePerfect().build(I, study, english)
    expect(phrase).toBe('Will I have studied English?')
  })

  it('should return "Will she have studied English" for params (she, study, English)', () => {
    const phrase = new InterrogativeFuturePerfect().build(SHE, study, english)
    expect(phrase).toBe('Will she have studied English?')
  })

  it('should return "Will they have studied English" for params (they, study, English)', () => {
    const phrase = new InterrogativeFuturePerfect().build(THEY, study, english)
    expect(phrase).toBe('Will they have studied English?')
  })
})
