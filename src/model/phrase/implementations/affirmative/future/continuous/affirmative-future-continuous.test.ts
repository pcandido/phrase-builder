import { I, SHE, THEY, Verb } from '../../../../..'
import { AffirmativeFutureContinuous } from './affirmative-future-continuous'

describe('AffirmativeFutureContinuous', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "I will be studying English" for params (I, study, English)', () => {
    const phrase = new AffirmativeFutureContinuous().build(I, study, english)
    expect(phrase).toBe('I will be studying English.')
  })

  it('should return "She will be studying English" for params (she, study, English)', () => {
    const phrase = new AffirmativeFutureContinuous().build(SHE, study, english)
    expect(phrase).toBe('She will be studying English.')
  })

  it('should return "They will be studying English" for params (they, study, English)', () => {
    const phrase = new AffirmativeFutureContinuous().build(THEY, study, english)
    expect(phrase).toBe('They will be studying English.')
  })
})
