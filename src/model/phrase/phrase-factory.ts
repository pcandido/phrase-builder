import { Config } from '..'
import { Phrase } from './phrase'
import { AffirmativePresentSimple } from './implementations/affirmative-present-simple/affirmative-present-simple'

export class PhraseFactory {

  make(config: Config): Phrase {
    return new AffirmativePresentSimple()
  }

}
