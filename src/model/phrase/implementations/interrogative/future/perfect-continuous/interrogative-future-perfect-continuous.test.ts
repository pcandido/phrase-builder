import { I, SHE, THEY, Verb } from '../../../../..'
import { InterrogativeFuturePerfectContinuous } from './interrogative-future-perfect-continuous'

describe('InterrogativeFuturePerfectContinuous', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "Will I have been studying English" for params (I, study, English)', () => {
    const phrase = new InterrogativeFuturePerfectContinuous().build(I, study, english)
    expect(phrase).toBe('Will I have been studying English?')
  })

  it('should return "Will she have been studying English" for params (she, study, English)', () => {
    const phrase = new InterrogativeFuturePerfectContinuous().build(SHE, study, english)
    expect(phrase).toBe('Will she have been studying English?')
  })

  it('should return "Will they have been studying English" for params (they, study, English)', () => {
    const phrase = new InterrogativeFuturePerfectContinuous().build(THEY, study, english)
    expect(phrase).toBe('Will they have been studying English?')
  })
})
