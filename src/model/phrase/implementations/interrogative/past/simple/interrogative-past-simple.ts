import { Subject } from '../../../../../subject/subject'
import { Verb } from '../../../../../verb/verb'
import { Phrase } from '../../../../phrase'
import { merge } from '../../../../../../utils/language'
import { toDo } from '../../../../../verb/auxiliar-verbs'

export class InterrogativePastSimple extends Phrase {

  protected assembly(subject: Subject, verb: Verb, complement: string): string {
    return merge([
      toDo.past(subject),
      subject.getValue(),
      verb.getInfinitive(),
      complement,
    ], '?')
  }

}
