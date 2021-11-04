import { Subject } from '../../../../../subject/subject'
import { Verb } from '../../../../../verb/verb'
import { Phrase } from '../../../../phrase'
import { merge } from '../../../../../../utils/language'
import { toHave, will } from '../../../../../verb/auxiliar-verbs'

export class AffirmativeFuturePerfect extends Phrase {

  protected assembly(subject: Subject, verb: Verb, complement: string): string {
    return merge([
      subject.getValue(),
      will,
      toHave.infinitive(),
      verb.getPastParticiple(),
      complement,
    ], '.')
  }

}
