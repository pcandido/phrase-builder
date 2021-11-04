import { I, SHE, THEY, Verb } from '../../..'
import { AffirmativePresentContinuous } from './affirmative-present-continuous'

describe('AffirmativePresentContinuous', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "I am studying English" for params (I, study, English)', () => {
    const phrase = new AffirmativePresentContinuous().build(I, study, english)
    expect(phrase).toBe('I am studying English.')
  })

  it('should return "She is studying English" for params (she, study, English)', () => {
    const phrase = new AffirmativePresentContinuous().build(SHE, study, english)
    expect(phrase).toBe('She is studying English.')
  })

  it('should return "They are studying English" for params (they, study, English)', () => {
    const phrase = new AffirmativePresentContinuous().build(THEY, study, english)
    expect(phrase).toBe('They are studying English.')
  })
})
