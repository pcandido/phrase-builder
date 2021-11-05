import { I, SHE, THEY, Verb } from '../../../../..'
import { NegativeInterrogativeFuturePerfect } from './negative-interrogative-future-perfect'

describe('NegativeInterrogativeFuturePerfect', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "Will I not have studied English" for params (I, study, English)', () => {
    const phrase = new NegativeInterrogativeFuturePerfect().build(I, study, english)
    expect(phrase).toBe('Will I not have studied English?')
  })

  it('should return "Will she not have studied English" for params (she, study, English)', () => {
    const phrase = new NegativeInterrogativeFuturePerfect().build(SHE, study, english)
    expect(phrase).toBe('Will she not have studied English?')
  })

  it('should return "Will they not have studied English" for params (they, study, English)', () => {
    const phrase = new NegativeInterrogativeFuturePerfect().build(THEY, study, english)
    expect(phrase).toBe('Will they not have studied English?')
  })
})
