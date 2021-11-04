import { I, SHE, THEY, Verb } from '../../../../..'
import { AffirmativeFutureSimple } from './affirmative-future-simple'

describe('AffirmativeFutureSimple', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "I will study English" for params (I, study, English)', () => {
    const phrase = new AffirmativeFutureSimple().build(I, study, english)
    expect(phrase).toBe('I will study English.')
  })

  it('should return "She will study English" for params (she, study, English)', () => {
    const phrase = new AffirmativeFutureSimple().build(SHE, study, english)
    expect(phrase).toBe('She will study English.')
  })

  it('should return "They will study English" for params (they, study, English)', () => {
    const phrase = new AffirmativeFutureSimple().build(THEY, study, english)
    expect(phrase).toBe('They will study English.')
  })
})
