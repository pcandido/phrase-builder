import { Subject } from '../../../../../subject/subject'
import { Verb } from '../../../../../verb/verb'
import { Phrase } from '../../../../phrase'
import { merge } from '../../../../../../utils/language'
import { not, toBe, toHave, will } from '../../../../../verb/auxiliar-verbs'

export class NegativeInterrogativeFuturePerfectContinuous extends Phrase {

  protected assembly(subject: Subject, verb: Verb, complement: string): string {
    return merge([
      will,
      subject.getValue(),
      not,
      toHave.infinitive(),
      toBe.pastParticiple(),
      verb.getContinuous(),
      complement,
    ], '?')
  }

}
