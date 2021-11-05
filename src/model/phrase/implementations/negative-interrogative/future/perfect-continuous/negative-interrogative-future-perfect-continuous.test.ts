import { I, SHE, THEY, Verb } from '../../../../..'
import { NegativeInterrogativeFuturePerfectContinuous } from './negative-interrogative-future-perfect-continuous'

describe('NegativeInterrogativeFuturePerfectContinuous', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "Will I not have been studying English" for params (I, study, English)', () => {
    const phrase = new NegativeInterrogativeFuturePerfectContinuous().build(I, study, english)
    expect(phrase).toBe('Will I not have been studying English?')
  })

  it('should return "Will she not have been studying English" for params (she, study, English)', () => {
    const phrase = new NegativeInterrogativeFuturePerfectContinuous().build(SHE, study, english)
    expect(phrase).toBe('Will she not have been studying English?')
  })

  it('should return "Will they not have been studying English" for params (they, study, English)', () => {
    const phrase = new NegativeInterrogativeFuturePerfectContinuous().build(THEY, study, english)
    expect(phrase).toBe('Will they not have been studying English?')
  })
})
