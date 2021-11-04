import { I, SHE, THEY, Verb } from '../../../../..'
import { AffirmativeFuturePerfect } from './affirmative-future-perfect'

describe('AffirmativeFuturePerfect', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "I will have studied English" for params (I, study, English)', () => {
    const phrase = new AffirmativeFuturePerfect().build(I, study, english)
    expect(phrase).toBe('I will have studied English.')
  })

  it('should return "She will have studied English" for params (she, study, English)', () => {
    const phrase = new AffirmativeFuturePerfect().build(SHE, study, english)
    expect(phrase).toBe('She will have studied English.')
  })

  it('should return "They will have studied English" for params (they, study, English)', () => {
    const phrase = new AffirmativeFuturePerfect().build(THEY, study, english)
    expect(phrase).toBe('They will have studied English.')
  })
})
