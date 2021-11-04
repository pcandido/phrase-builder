import { I, SHE, THEY, Verb } from '../../../../..'
import { NegativePresentSimple } from './negative-present-simple'

describe('NegativePresentSimple', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "I do not study English" for params (I, study, English)', () => {
    const phrase = new NegativePresentSimple().build(I, study, english)
    expect(phrase).toBe('I do not study English.')
  })

  it('should return "She does not study English" for params (she, study, English)', () => {
    const phrase = new NegativePresentSimple().build(SHE, study, english)
    expect(phrase).toBe('She does not study English.')
  })

  it('should return "They do not study English" for params (they, study, English)', () => {
    const phrase = new NegativePresentSimple().build(THEY, study, english)
    expect(phrase).toBe('They do not study English.')
  })
})
