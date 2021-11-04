import { Config } from '..'
import { Phrase } from './phrase'
import { Subject } from '../subject/subject'
import { Verb } from '../verb/verb'
import {
  AffirmativePresentSimple, AffirmativePresentContinuous, AffirmativePresentPerfect, AffirmativePresentPerfectContinuous,
  AffirmativePastSimple,
} from './phrase-implementations'

class UnimplementedPhrase extends Phrase {

  protected assembly(subject: Subject, verb: Verb, complement: string): string {
    return 'Unimplemented phrase type'
  }

}

export class PhraseFactory {

  make(config: Config): Phrase {
    switch (config.phraseType) {
      case 'affirmative': return this.makeAffirmativePhrase(config)
      default: return new UnimplementedPhrase()
    }
  }

  private makeAffirmativePhrase(config: Config) {
    switch (config.verbTenseTime) {
      case 'present': return this.makeAffirmativePresentPhrase(config)
      case 'past': return this.makeAffirmativePastPhrase(config)
      default: return new UnimplementedPhrase()
    }
  }

  private makeAffirmativePresentPhrase(config: Config) {
    switch (config.verbTenseType) {
      case 'simple': return new AffirmativePresentSimple()
      case 'continuous': return new AffirmativePresentContinuous()
      case 'perfect': return new AffirmativePresentPerfect()
      case 'perfect continuous': return new AffirmativePresentPerfectContinuous()
      default: return new UnimplementedPhrase()
    }
  }

  private makeAffirmativePastPhrase(config: Config) {
    switch (config.verbTenseType) {
      case 'simple': return new AffirmativePastSimple()
      default: return new UnimplementedPhrase()
    }
  }

}


