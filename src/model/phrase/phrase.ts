import { Subject, Verb } from '..'

export abstract class Phrase {

  build(subject: Subject, verb: Verb, complement: string): string {
    const phrase = this.assembly(subject, verb, complement)
    const formatted = this.firstLetterToUpperCase(phrase)
    return formatted
  }

  private firstLetterToUpperCase(value: string): string {
    const firstLetter = value.slice(0, 1)
    const rest = value.slice(1)
    return firstLetter.toUpperCase() + rest
  }

  protected abstract assembly(subject: Subject, verb: Verb, complement: string): string

}
