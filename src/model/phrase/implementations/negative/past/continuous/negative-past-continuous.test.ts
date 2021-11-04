import { I, SHE, THEY, Verb } from '../../../../..'
import { NegativePastContinuous } from './negative-past-continuous'

describe('NegativePastContinuous', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "I was not studying English" for params (I, study, English)', () => {
    const phrase = new NegativePastContinuous().build(I, study, english)
    expect(phrase).toBe('I was not studying English.')
  })

  it('should return "She was not studying English" for params (she, study, English)', () => {
    const phrase = new NegativePastContinuous().build(SHE, study, english)
    expect(phrase).toBe('She was not studying English.')
  })

  it('should return "They were not studying English" for params (they, study, English)', () => {
    const phrase = new NegativePastContinuous().build(THEY, study, english)
    expect(phrase).toBe('They were not studying English.')
  })
})
