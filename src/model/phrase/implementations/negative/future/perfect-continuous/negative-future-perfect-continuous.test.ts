import { I, SHE, THEY, Verb } from '../../../../..'
import { NegativeFuturePerfectContinuous } from './negative-future-perfect-continuous'

describe('NegativeFuturePerfectContinuous', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "I will not have been studying English" for params (I, study, English)', () => {
    const phrase = new NegativeFuturePerfectContinuous().build(I, study, english)
    expect(phrase).toBe('I will not have been studying English.')
  })

  it('should return "She will not have been studying English" for params (she, study, English)', () => {
    const phrase = new NegativeFuturePerfectContinuous().build(SHE, study, english)
    expect(phrase).toBe('She will not have been studying English.')
  })

  it('should return "They will not have been studying English" for params (they, study, English)', () => {
    const phrase = new NegativeFuturePerfectContinuous().build(THEY, study, english)
    expect(phrase).toBe('They will not have been studying English.')
  })
})
