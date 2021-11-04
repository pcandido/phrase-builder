import { Config } from '..'
import { Phrase } from './phrase'
import { Subject } from '../subject/subject'
import { Verb } from '../verb/verb'
import {
  AffirmativePresentSimple, AffirmativePresentContinuous, AffirmativePresentPerfect, AffirmativePresentPerfectContinuous,
  AffirmativePastSimple, AffirmativePastContinuous, AffirmativePastPerfect, AffirmativePastPerfectContinuous,
  AffirmativeFutureSimple, AffirmativeFutureContinuous, AffirmativeFuturePerfect, AffirmativeFuturePerfectContinuous,
  NegativePresentSimple, NegativePresentContinuous,
} from './phrase-implementations'

export class PhraseFactory {

  make(config: Config): Phrase {
    switch (config.phraseType) {
      case 'affirmative': return this.makeAffirmativePhrase(config)
      case 'negative': return this.makeNegativePhrase(config)
      default: return new UnimplementedPhrase()
    }
  }

  private makeAffirmativePhrase(config: Config) {
    switch (config.verbTenseTime) {
      case 'present': return this.makeAffirmativePresentPhrase(config)
      case 'past': return this.makeAffirmativePastPhrase(config)
      case 'future': return this.makeAffirmativeFuturePhrase(config)
      default: return new UnimplementedPhrase()
    }
  }

  private makeNegativePhrase(config: Config) {
    switch (config.verbTenseTime) {
      case 'present': return this.makeNegativePresentPhrase(config)
      // case 'past': return this.makeNegativePastPhrase(config)
      // case 'future': return this.makeNegativeFuturePhrase(config)
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
      case 'continuous': return new AffirmativePastContinuous()
      case 'perfect': return new AffirmativePastPerfect()
      case 'perfect continuous': return new AffirmativePastPerfectContinuous()
      default: return new UnimplementedPhrase()
    }
  }

  private makeAffirmativeFuturePhrase(config: Config) {
    switch (config.verbTenseType) {
      case 'simple': return new AffirmativeFutureSimple()
      case 'continuous': return new AffirmativeFutureContinuous()
      case 'perfect': return new AffirmativeFuturePerfect()
      case 'perfect continuous': return new AffirmativeFuturePerfectContinuous()
      default: return new UnimplementedPhrase()
    }
  }

  private makeNegativePresentPhrase(config: Config) {
    switch (config.verbTenseType) {
      case 'simple': return new NegativePresentSimple()
      case 'continuous': return new NegativePresentContinuous()
      // case 'perfect': return new NegativePresentPerfect()
      // case 'perfect continuous': return new NegativePresentPerfectContinuous()
      default: return new UnimplementedPhrase()
    }
  }

}

class UnimplementedPhrase extends Phrase {

  protected assembly(subject: Subject, verb: Verb, complement: string): string {
    return 'Unimplemented phrase type'
  }

}
