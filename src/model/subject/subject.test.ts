import { HE, I, IT, SHE, Subject, THEY, WE, YOU } from './subject'

describe('GenericSubject', () => {

  it.each([
    ['I', false, I],
    ['you', false, YOU],
    ['he', true, HE],
    ['she', true, SHE],
    ['it', true, IT],
    ['we', false, WE],
    ['they', false, THEY],
  ])('%s should return %s for isThirdPerson', (value, thirdPerson, subject) => {
    expect(subject.isThirdPerson()).toBe(thirdPerson)
  })

})

describe('Subject', () => {
  it('should return value on getValue', () => {
    const subject = new Subject('Name')
    expect(subject.getRawValue()).toBe('Name')
  })

  it('should return true for isThirdPerson for any non-generic Subject', () => {
    const subject = new Subject('Name')
    expect(subject.isThirdPerson()).toBeTruthy()
  })
})
