import { I, SHE, THEY, Verb } from '../../../../..'
import { NegativeInterrogativePastSimple } from './negative-interrogative-past-simple'

describe('NegativeInterrogativePastSimple', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "Did I not study English" for params (I, study, English)', () => {
    const phrase = new NegativeInterrogativePastSimple().build(I, study, english)
    expect(phrase).toBe('Did I not study English?')
  })

  it('should return "Did she not study English" for params (she, study, English)', () => {
    const phrase = new NegativeInterrogativePastSimple().build(SHE, study, english)
    expect(phrase).toBe('Did she not study English?')
  })

  it('should return "Did they not study English" for params (they, study, English)', () => {
    const phrase = new NegativeInterrogativePastSimple().build(THEY, study, english)
    expect(phrase).toBe('Did they not study English?')
  })
})
