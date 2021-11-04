import { I, SHE, Verb } from '../../..'
import { AffirmativePresentSimple } from './affirmative-present-simple'

describe('AffirmativePresentSimple', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "I study English" for params (I, study, English)', () => {
    const phrase = new AffirmativePresentSimple().build(I, study, english)
    expect(phrase).toBe('I study English.')
  })

  it('should return "She studies English" for params (she, study, English)', () => {
    const phrase = new AffirmativePresentSimple().build(SHE, study, english)
    expect(phrase).toBe('She studies English.')
  })
})
