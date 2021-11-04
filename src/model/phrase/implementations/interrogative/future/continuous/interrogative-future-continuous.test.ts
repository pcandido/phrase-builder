import { I, SHE, THEY, Verb } from '../../../../..'
import { InterrogativeFutureContinuous } from './interrogative-future-continuous'

describe('InterrogativeFutureContinuous', () => {
  const study = new Verb('study')
  const english = 'English'

  it('should return "Will I be studying English" for params (I, study, English)', () => {
    const phrase = new InterrogativeFutureContinuous().build(I, study, english)
    expect(phrase).toBe('Will I be studying English?')
  })

  it('should return "Will she be studying English" for params (she, study, English)', () => {
    const phrase = new InterrogativeFutureContinuous().build(SHE, study, english)
    expect(phrase).toBe('Will she be studying English?')
  })

  it('should return "Will they be studying English" for params (they, study, English)', () => {
    const phrase = new InterrogativeFutureContinuous().build(THEY, study, english)
    expect(phrase).toBe('Will they be studying English?')
  })
})
