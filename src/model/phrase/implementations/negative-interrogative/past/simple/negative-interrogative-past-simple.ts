import { Subject } from '../../../../../subject/subject'
import { Verb } from '../../../../../verb/verb'
import { Phrase } from '../../../../phrase'
import { merge } from '../../../../../../utils/language'
import { not, toDo } from '../../../../../verb/auxiliar-verbs'

export class NegativeInterrogativePastSimple extends Phrase {

  protected assembly(subject: Subject, verb: Verb, complement: string): string {
    return merge([
      toDo.past(subject),
      subject.getValue(),
      not,
      verb.getInfinitive(),
      complement,
    ], '?')
  }

}
