import { I, SHE, THEY, Verb } from '../../../../..'
import { NegativeFuturePerfect } from './negative-future-perfect'

describe('NegativeFuturePerfect', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "I will not have studied English" for params (I, study, English)', () => {
    const phrase = new NegativeFuturePerfect().build(I, study, english)
    expect(phrase).toBe('I will not have studied English.')
  })

  it('should return "She will not have studied English" for params (she, study, English)', () => {
    const phrase = new NegativeFuturePerfect().build(SHE, study, english)
    expect(phrase).toBe('She will not have studied English.')
  })

  it('should return "They will not have studied English" for params (they, study, English)', () => {
    const phrase = new NegativeFuturePerfect().build(THEY, study, english)
    expect(phrase).toBe('They will not have studied English.')
  })
})
