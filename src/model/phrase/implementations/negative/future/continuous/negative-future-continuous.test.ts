import { I, SHE, THEY, Verb } from '../../../../..'
import { NegativeFutureContinuous } from './negative-future-continuous'

describe('NegativeFutureContinuous', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "I will not be studying English" for params (I, study, English)', () => {
    const phrase = new NegativeFutureContinuous().build(I, study, english)
    expect(phrase).toBe('I will not be studying English.')
  })

  it('should return "She will not be studying English" for params (she, study, English)', () => {
    const phrase = new NegativeFutureContinuous().build(SHE, study, english)
    expect(phrase).toBe('She will not be studying English.')
  })

  it('should return "They will not be studying English" for params (they, study, English)', () => {
    const phrase = new NegativeFutureContinuous().build(THEY, study, english)
    expect(phrase).toBe('They will not be studying English.')
  })
})
