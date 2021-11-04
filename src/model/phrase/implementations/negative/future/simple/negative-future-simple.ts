import { Subject } from '../../../../../subject/subject'
import { Verb } from '../../../../../verb/verb'
import { Phrase } from '../../../../phrase'
import { merge } from '../../../../../../utils/language'
import { not, will } from '../../../../../verb/auxiliar-verbs'

export class NegativeFutureSimple extends Phrase {

  protected assembly(subject: Subject, verb: Verb, complement: string): string {
    return merge([
      subject.getValue(),
      will,
      not,
      verb.getInfinitive(),
      complement,
    ], '.')
  }

}
