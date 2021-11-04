import { Subject } from '../../../../../subject/subject'
import { Verb } from '../../../../../verb/verb'
import { Phrase } from '../../../../phrase'
import { merge } from '../../../../../../utils/language'
import { not, toHave } from '../../../../../verb/auxiliar-verbs'

export class NegativePresentPerfect extends Phrase {

  protected assembly(subject: Subject, verb: Verb, complement: string): string {
    return merge([
      subject.getValue(),
      toHave.present(subject),
      not,
      verb.getPastParticiple(),
      complement,
    ], '.')
  }

}
