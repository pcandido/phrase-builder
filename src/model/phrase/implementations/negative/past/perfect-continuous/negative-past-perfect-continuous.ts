import { Subject } from '../../../../../subject/subject'
import { Verb } from '../../../../../verb/verb'
import { Phrase } from '../../../../phrase'
import { merge } from '../../../../../../utils/language'
import { not, toBe, toHave } from '../../../../../verb/auxiliar-verbs'

export class NegativePastPerfectContinuous extends Phrase {

  protected assembly(subject: Subject, verb: Verb, complement: string): string {
    return merge([
      subject.getValue(),
      toHave.past(subject),
      not,
      toBe.pastParticiple(),
      verb.getContinuous(),
      complement,
    ], '.')
  }

}
