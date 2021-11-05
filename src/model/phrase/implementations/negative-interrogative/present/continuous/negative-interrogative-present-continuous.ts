import { Subject } from '../../../../../subject/subject'
import { Verb } from '../../../../../verb/verb'
import { Phrase } from '../../../../phrase'
import { merge } from '../../../../../../utils/language'
import { not, toBe } from '../../../../../verb/auxiliar-verbs'

export class NegativeInterrogativePresentContinuous extends Phrase {

  protected assembly(subject: Subject, verb: Verb, complement: string): string {
    return merge([
      toBe.present(subject),
      subject.getValue(),
      not,
      verb.getContinuous(),
      complement,
    ], '?')
  }

}
