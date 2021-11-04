import { Subject } from '../../../../../subject/subject'
import { Verb } from '../../../../../verb/verb'
import { Phrase } from '../../../../phrase'
import { merge } from '../../../../../../utils/language'
import { toBe, toHave } from '../../../../../verb/auxiliar-verbs'

export class AffirmativePresentPerfectContinuous extends Phrase {

  protected assembly(subject: Subject, verb: Verb, complement: string): string {
    return merge([
      subject.getValue(),
      toHave.present(subject),
      toBe.pastParticiple(),
      verb.getContinuous(),
      complement,
    ], '.')
  }

}
