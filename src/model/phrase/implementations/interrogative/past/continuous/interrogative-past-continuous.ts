import { Subject } from '../../../../../subject/subject'
import { Verb } from '../../../../../verb/verb'
import { Phrase } from '../../../../phrase'
import { merge } from '../../../../../../utils/language'
import { toBe } from '../../../../../verb/auxiliar-verbs'

export class InterrogativePastContinuous extends Phrase {

  protected assembly(subject: Subject, verb: Verb, complement: string): string {
    return merge([
      toBe.past(subject),
      subject.getValue(),
      verb.getContinuous(),
      complement,
    ], '?')
  }

}
