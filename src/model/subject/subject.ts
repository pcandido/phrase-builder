export class Subject {

  constructor(private value: string) { }

  getRawValue() {
    return this.value
  }

  getValue() {
    return this.value || 'it'
  }

  isThirdPerson() {
    return true
  }

  isGeneric() {
    return false
  }
}

class GenericSubject extends Subject {

  constructor(
    value: string,
    private thirdPerson: boolean,
  ) {
    super(value)
  }

  isThirdPerson() {
    return this.thirdPerson
  }

  isGeneric() {
    return true
  }
}

export const I = new GenericSubject('I', false)
export const YOU = new GenericSubject('you', false)
export const HE = new GenericSubject('he', true)
export const SHE = new GenericSubject('she', true)
export const IT = new GenericSubject('it', true)
export const WE = new GenericSubject('we', false)
export const THEY = new GenericSubject('they', false)

export const GENERIC_SUBJECTS = [I, YOU, HE, SHE, IT, WE, THEY]
