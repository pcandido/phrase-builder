import { Subject } from '../../../../../subject/subject'
import { Verb } from '../../../../../verb/verb'
import { Phrase } from '../../../../phrase'
import { merge } from '../../../../../../utils/language'
import { not, toHave, will } from '../../../../../verb/auxiliar-verbs'

export class NegativeFuturePerfect extends Phrase {

  protected assembly(subject: Subject, verb: Verb, complement: string): string {
    return merge([
      subject.getValue(),
      will,
      not,
      toHave.infinitive(),
      verb.getPastParticiple(),
      complement,
    ], '.')
  }

}
