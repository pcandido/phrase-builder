import { Subject } from '../../../../../subject/subject'
import { Verb } from '../../../../../verb/verb'
import { Phrase } from '../../../../phrase'
import { merge } from '../../../../../../utils/language'
import { toBe } from '../../../../../verb/auxiliar-verbs'

export class AffirmativePastContinuous extends Phrase {

  protected assembly(subject: Subject, verb: Verb, complement: string): string {
    return merge([
      subject.getValue(),
      toBe.past(subject),
      verb.getContinuous(),
      complement,
    ], '.')
  }

}
