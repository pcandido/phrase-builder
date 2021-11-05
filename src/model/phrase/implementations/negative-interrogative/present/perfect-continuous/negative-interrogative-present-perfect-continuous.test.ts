import { I, SHE, THEY, Verb } from '../../../../..'
import { NegativeInterrogativePresentPerfectContinuous } from './negative-interrogative-present-perfect-continuous'

describe('NegativeInterrogativePresentPerfectContinuous', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "Have I not been studying English" for params (I, study, English)', () => {
    const phrase = new NegativeInterrogativePresentPerfectContinuous().build(I, study, english)
    expect(phrase).toBe('Have I not been studying English?')
  })

  it('should return "Has she not been studying English" for params (she, study, English)', () => {
    const phrase = new NegativeInterrogativePresentPerfectContinuous().build(SHE, study, english)
    expect(phrase).toBe('Has she not been studying English?')
  })

  it('should return "Have they not been studying English" for params (they, study, English)', () => {
    const phrase = new NegativeInterrogativePresentPerfectContinuous().build(THEY, study, english)
    expect(phrase).toBe('Have they not been studying English?')
  })
})
