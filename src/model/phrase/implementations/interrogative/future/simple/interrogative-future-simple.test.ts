import { I, SHE, THEY, Verb } from '../../../../..'
import { InterrogativeFutureSimple } from './interrogative-future-simple'

describe('InterrogativeFutureSimple', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "Will I study English" for params (I, study, English)', () => {
    const phrase = new InterrogativeFutureSimple().build(I, study, english)
    expect(phrase).toBe('Will I study English?')
  })

  it('should return "Will she study English" for params (she, study, English)', () => {
    const phrase = new InterrogativeFutureSimple().build(SHE, study, english)
    expect(phrase).toBe('Will she study English?')
  })

  it('should return "Will they study English" for params (they, study, English)', () => {
    const phrase = new InterrogativeFutureSimple().build(THEY, study, english)
    expect(phrase).toBe('Will they study English?')
  })
})
