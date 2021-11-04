import { Subject } from '../../../subject/subject'
import { Verb } from '../../../verb/verb'
import { Phrase } from '../../phrase'
import { merge } from '../../../../utils/language'

export class AffirmativePresentSimple extends Phrase {

  protected assembly(subject: Subject, verb: Verb, complement: string): string {
    return merge([
      subject.getValue(),
      verb.getPresentSimple(subject),
      complement,
    ], '.')
  }

}
