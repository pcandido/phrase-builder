import { Subject } from '..'

export class Verb {

  value: string

  constructor(value: string) {
    this.value = value.toLowerCase()
  }

  getInfinitive(): string {
    return this.value
  }

  getPresentSimple(subject: Subject): string {
    if (subject.isThirdPerson())
      return this.getPresentSimpleForThirdPerson()
    return this.value
  }

  private getPresentSimpleForThirdPerson(): string {
    if (this.value.match(/(o|s|z|ch|sh|x)$/))
      return this.value + 'es'

    if (this.value.endsWith('y'))
      return this.value.slice(0, -1) + 'ies'

    if (this.value === 'have')
      return 'has'

    return this.value + 's'
  }

}