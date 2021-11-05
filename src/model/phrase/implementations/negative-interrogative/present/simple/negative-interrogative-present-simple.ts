import { Subject } from '../../../../../subject/subject'
import { Verb } from '../../../../../verb/verb'
import { Phrase } from '../../../../phrase'
import { merge } from '../../../../../../utils/language'
import { not, toDo } from '../../../../../verb/auxiliar-verbs'

export class NegativeInterrogativePresentSimple extends Phrase {

  protected assembly(subject: Subject, verb: Verb, complement: string): string {
    return merge([
      toDo.present(subject),
      subject.getValue(),
      not,
      verb.getInfinitive(),
      complement,
    ], '?')
  }

}
