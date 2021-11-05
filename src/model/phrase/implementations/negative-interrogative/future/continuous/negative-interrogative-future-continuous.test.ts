import { I, SHE, THEY, Verb } from '../../../../..'
import { NegativeInterrogativeFutureContinuous } from './negative-interrogative-future-continuous'

describe('NegativeInterrogativeFutureContinuous', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "Will I not be studying English" for params (I, study, English)', () => {
    const phrase = new NegativeInterrogativeFutureContinuous().build(I, study, english)
    expect(phrase).toBe('Will I not be studying English?')
  })

  it('should return "Will she not be studying English" for params (she, study, English)', () => {
    const phrase = new NegativeInterrogativeFutureContinuous().build(SHE, study, english)
    expect(phrase).toBe('Will she not be studying English?')
  })

  it('should return "Will they not be studying English" for params (they, study, English)', () => {
    const phrase = new NegativeInterrogativeFutureContinuous().build(THEY, study, english)
    expect(phrase).toBe('Will they not be studying English?')
  })
})
