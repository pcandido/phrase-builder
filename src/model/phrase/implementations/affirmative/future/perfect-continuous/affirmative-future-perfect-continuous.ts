import { Subject } from '../../../../../subject/subject'
import { Verb } from '../../../../../verb/verb'
import { Phrase } from '../../../../phrase'
import { merge } from '../../../../../../utils/language'
import { toBe, toHave, will } from '../../../../../verb/auxiliar-verbs'

export class AffirmativeFuturePerfectContinuous extends Phrase {

  protected assembly(subject: Subject, verb: Verb, complement: string): string {
    return merge([
      subject.getValue(),
      will,
      toHave.infinitive(),
      toBe.pastParticiple(),
      verb.getContinuous(),
      complement,
    ], '.')
  }

}
