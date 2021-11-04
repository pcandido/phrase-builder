import { I, SHE, THEY, Verb } from '../../../../..'
import { InterrogativePresentSimple } from './interrogative-present-simple'

describe('InterrogativePresentSimple', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "Do I study English" for params (I, study, English)', () => {
    const phrase = new InterrogativePresentSimple().build(I, study, english)
    expect(phrase).toBe('Do I study English?')
  })

  it('should return "Does she study English" for params (she, study, English)', () => {
    const phrase = new InterrogativePresentSimple().build(SHE, study, english)
    expect(phrase).toBe('Does she study English?')
  })

  it('should return "Do they study English" for params (they, study, English)', () => {
    const phrase = new InterrogativePresentSimple().build(THEY, study, english)
    expect(phrase).toBe('Do they study English?')
  })
})
