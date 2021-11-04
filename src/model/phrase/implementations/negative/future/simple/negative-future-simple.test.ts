import { I, SHE, THEY, Verb } from '../../../../..'
import { NegativeFutureSimple } from './negative-future-simple'

describe('NegativeFutureSimple', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "I will not study English" for params (I, study, English)', () => {
    const phrase = new NegativeFutureSimple().build(I, study, english)
    expect(phrase).toBe('I will not study English.')
  })

  it('should return "She will not study English" for params (she, study, English)', () => {
    const phrase = new NegativeFutureSimple().build(SHE, study, english)
    expect(phrase).toBe('She will not study English.')
  })

  it('should return "They will not study English" for params (they, study, English)', () => {
    const phrase = new NegativeFutureSimple().build(THEY, study, english)
    expect(phrase).toBe('They will not study English.')
  })
})
