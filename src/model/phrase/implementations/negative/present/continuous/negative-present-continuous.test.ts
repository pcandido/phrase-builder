import { I, SHE, THEY, Verb } from '../../../../..'
import { NegativePresentContinuous } from './negative-present-continuous'

describe('NegativePresentContinuous', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "I am not studying English" for params (I, study, English)', () => {
    const phrase = new NegativePresentContinuous().build(I, study, english)
    expect(phrase).toBe('I am not studying English.')
  })

  it('should return "She is not studying English" for params (she, study, English)', () => {
    const phrase = new NegativePresentContinuous().build(SHE, study, english)
    expect(phrase).toBe('She is not studying English.')
  })

  it('should return "They are not studying English" for params (they, study, English)', () => {
    const phrase = new NegativePresentContinuous().build(THEY, study, english)
    expect(phrase).toBe('They are not studying English.')
  })
})
