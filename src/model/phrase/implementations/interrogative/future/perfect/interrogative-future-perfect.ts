import { Subject } from '../../../../../subject/subject'
import { Verb } from '../../../../../verb/verb'
import { Phrase } from '../../../../phrase'
import { merge } from '../../../../../../utils/language'
import { toHave, will } from '../../../../../verb/auxiliar-verbs'

export class InterrogativeFuturePerfect extends Phrase {

  protected assembly(subject: Subject, verb: Verb, complement: string): string {
    return merge([
      will,
      subject.getValue(),
      toHave.infinitive(),
      verb.getPastParticiple(),
      complement,
    ], '.')
  }

}
