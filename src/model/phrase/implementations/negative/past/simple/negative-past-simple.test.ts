import { I, SHE, THEY, Verb } from '../../../../..'
import { NegativePastSimple } from './negative-past-simple'

describe('NegativePastSimple', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "I did not study English" for params (I, study, English)', () => {
    const phrase = new NegativePastSimple().build(I, study, english)
    expect(phrase).toBe('I did not study English.')
  })

  it('should return "She did not study English" for params (she, study, English)', () => {
    const phrase = new NegativePastSimple().build(SHE, study, english)
    expect(phrase).toBe('She did not study English.')
  })

  it('should return "They did not study English" for params (they, study, English)', () => {
    const phrase = new NegativePastSimple().build(THEY, study, english)
    expect(phrase).toBe('They did not study English.')
  })
})
