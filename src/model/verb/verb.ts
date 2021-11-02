import { Subject } from '..'
import { CONSONANTS, sillableCount, VOWELS } from '../../utils/language'

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

  getContinuous(): string {
    const endsWithConsonantPlusE = new RegExp(`[${CONSONANTS.join('')}]e$`)
    if (this.value.match(endsWithConsonantPlusE))
      return this.value.slice(0, -1) + 'ing'

    if (this.value.endsWith('ie'))
      return this.value.slice(0, -2) + 'ying'

    const endsWithConsonantVowelConsonant = new RegExp(`[${CONSONANTS.join('')}][${VOWELS.join('')}][${CONSONANTS.join('')}]$`)
    if (sillableCount(this.value) === 1 && this.value.match(endsWithConsonantVowelConsonant))
      return this.value + this.value.slice(-1) + 'ing'

    return this.value + 'ing'
  }

}