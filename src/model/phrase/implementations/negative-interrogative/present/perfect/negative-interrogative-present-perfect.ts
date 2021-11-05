import { Subject } from '../../../../../subject/subject'
import { Verb } from '../../../../../verb/verb'
import { Phrase } from '../../../../phrase'
import { merge } from '../../../../../../utils/language'
import { not, toHave } from '../../../../../verb/auxiliar-verbs'

export class NegativeInterrogativePresentPerfect extends Phrase {

  protected assembly(subject: Subject, verb: Verb, complement: string): string {
    return merge([
      toHave.present(subject),
      subject.getValue(),
      not,
      verb.getPastParticiple(),
      complement,
    ], '?')
  }

}
