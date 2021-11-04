import { Subject } from '../../../../../subject/subject'
import { Verb } from '../../../../../verb/verb'
import { Phrase } from '../../../../phrase'
import { merge } from '../../../../../../utils/language'
import { toBe } from '../../../../../verb/auxiliar-verbs'

export class AffirmativePresentContinuous extends Phrase {

  protected assembly(subject: Subject, verb: Verb, complement: string): string {
    return merge([
      subject.getValue(),
      toBe.present(subject),
      verb.getContinuous(),
      complement,
    ], '.')
  }

}
