import { I, SHE, THEY, Verb } from '../../../../..'
import { AffirmativePastSimple } from './affirmative-past-simple'

describe('AffirmativePastSimple', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "I studied English" for params (I, study, English)', () => {
    const phrase = new AffirmativePastSimple().build(I, study, english)
    expect(phrase).toBe('I studied English.')
  })

  it('should return "She studied English" for params (she, study, English)', () => {
    const phrase = new AffirmativePastSimple().build(SHE, study, english)
    expect(phrase).toBe('She studied English.')
  })

  it('should return "They studied English" for params (they, study, English)', () => {
    const phrase = new AffirmativePastSimple().build(THEY, study, english)
    expect(phrase).toBe('They studied English.')
  })
})
