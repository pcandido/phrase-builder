import { I, SHE, THEY, Verb } from '../../../../..'
import { NegativeInterrogativeFutureSimple } from './negative-interrogative-future-simple'

describe('NegativeInterrogativeFutureSimple', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "Will I not study English" for params (I, study, English)', () => {
    const phrase = new NegativeInterrogativeFutureSimple().build(I, study, english)
    expect(phrase).toBe('Will I not study English?')
  })

  it('should return "Will she not study English" for params (she, study, English)', () => {
    const phrase = new NegativeInterrogativeFutureSimple().build(SHE, study, english)
    expect(phrase).toBe('Will she not study English?')
  })

  it('should return "Will they not study English" for params (they, study, English)', () => {
    const phrase = new NegativeInterrogativeFutureSimple().build(THEY, study, english)
    expect(phrase).toBe('Will they not study English?')
  })
})
