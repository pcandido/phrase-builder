import { Subject } from '../../../../../subject/subject'
import { Verb } from '../../../../../verb/verb'
import { Phrase } from '../../../../phrase'
import { merge } from '../../../../../../utils/language'
import { not, toHave, will } from '../../../../../verb/auxiliar-verbs'

export class NegativeInterrogativeFuturePerfect extends Phrase {

  protected assembly(subject: Subject, verb: Verb, complement: string): string {
    return merge([
      will,
      subject.getValue(),
      not,
      toHave.infinitive(),
      verb.getPastParticiple(),
      complement,
    ], '?')
  }

}
