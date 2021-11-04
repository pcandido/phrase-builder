import { I, SHE, THEY, Verb } from '../../../../..'
import { AffirmativePastContinuous } from './affirmative-past-continuous'

describe('AffirmativePastContinuous', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "I was studying English" for params (I, study, English)', () => {
    const phrase = new AffirmativePastContinuous().build(I, study, english)
    expect(phrase).toBe('I was studying English.')
  })

  it('should return "She was studying English" for params (she, study, English)', () => {
    const phrase = new AffirmativePastContinuous().build(SHE, study, english)
    expect(phrase).toBe('She was studying English.')
  })

  it('should return "They were studying English" for params (they, study, English)', () => {
    const phrase = new AffirmativePastContinuous().build(THEY, study, english)
    expect(phrase).toBe('They were studying English.')
  })
})
