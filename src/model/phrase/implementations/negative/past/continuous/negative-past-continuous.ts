import { Subject } from '../../../../../subject/subject'
import { Verb } from '../../../../../verb/verb'
import { Phrase } from '../../../../phrase'
import { merge } from '../../../../../../utils/language'
import { not, toBe } from '../../../../../verb/auxiliar-verbs'

export class NegativePastContinuous extends Phrase {

  protected assembly(subject: Subject, verb: Verb, complement: string): string {
    return merge([
      subject.getValue(),
      toBe.past(subject),
      not,
      verb.getContinuous(),
      complement,
    ], '.')
  }

}
