import { Verb } from './verb'

describe('Verb', () => {

  it('should return value as infinitive form', () => {
    const verb = new Verb('do')
    expect(verb.getInfinitive()).toBe('do')
  })

})