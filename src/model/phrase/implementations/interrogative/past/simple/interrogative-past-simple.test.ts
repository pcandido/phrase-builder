import { I, SHE, THEY, Verb } from '../../../../..'
import { InterrogativePastSimple } from './interrogative-past-simple'

describe('InterrogativePastSimple', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "Did I study English" for params (I, study, English)', () => {
    const phrase = new InterrogativePastSimple().build(I, study, english)
    expect(phrase).toBe('Did I study English?')
  })

  it('should return "Did she study English" for params (she, study, English)', () => {
    const phrase = new InterrogativePastSimple().build(SHE, study, english)
    expect(phrase).toBe('Did she study English?')
  })

  it('should return "Did they study English" for params (they, study, English)', () => {
    const phrase = new InterrogativePastSimple().build(THEY, study, english)
    expect(phrase).toBe('Did they study English?')
  })
})
