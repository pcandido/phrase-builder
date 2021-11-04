import { I, SHE, THEY, Verb } from '../../../../..'
import { AffirmativeFuturePerfectContinuous } from './affirmative-future-perfect-continuous'

describe('AffirmativeFuturePerfectContinuous', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "I will have been studying English" for params (I, study, English)', () => {
    const phrase = new AffirmativeFuturePerfectContinuous().build(I, study, english)
    expect(phrase).toBe('I will have been studying English.')
  })

  it('should return "She will have been studying English" for params (she, study, English)', () => {
    const phrase = new AffirmativeFuturePerfectContinuous().build(SHE, study, english)
    expect(phrase).toBe('She will have been studying English.')
  })

  it('should return "They will have been studying English" for params (they, study, English)', () => {
    const phrase = new AffirmativeFuturePerfectContinuous().build(THEY, study, english)
    expect(phrase).toBe('They will have been studying English.')
  })
})
