import { Config } from '..'
import { Phrase } from './phrase'
import { Subject } from '../subject/subject'
import { Verb } from '../verb/verb'
import {
  AffirmativePresentSimple, AffirmativePresentContinuous, AffirmativePresentPerfect, AffirmativePresentPerfectContinuous,
  AffirmativePastSimple, AffirmativePastContinuous, AffirmativePastPerfect, AffirmativePastPerfectContinuous,
  AffirmativeFutureSimple, AffirmativeFutureContinuous, AffirmativeFuturePerfect, AffirmativeFuturePerfectContinuous,
  NegativePresentSimple, NegativePresentContinuous, NegativePresentPerfect, NegativePresentPerfectContinuous,
  NegativePastSimple, NegativePastContinuous, NegativePastPerfect, NegativePastPerfectContinuous,
  NegativeFutureSimple, NegativeFutureContinuous, NegativeFuturePerfect, NegativeFuturePerfectContinuous,
  InterrogativePresentSimple, InterrogativePresentContinuous, InterrogativePresentPerfect, InterrogativePresentPerfectContinuous,
  InterrogativePastSimple, InterrogativePastContinuous, InterrogativePastPerfect, InterrogativePastPerfectContinuous,
  InterrogativeFutureSimple, InterrogativeFutureContinuous, InterrogativeFuturePerfect, InterrogativeFuturePerfectContinuous,
  NegativeInterrogativePresentSimple, NegativeInterrogativePresentContinuous, NegativeInterrogativePresentPerfect, NegativeInterrogativePresentPerfectContinuous, NegativeInterrogativePastSimple, NegativeInterrogativePastContinuous, NegativeInterrogativePastPerfect, NegativeInterrogativePastPerfectContinuous, NegativeInterrogativeFutureSimple,
} from './phrase-implementations'

export class PhraseFactory {

  make(config: Config): Phrase {
    switch (config.phraseType) {
      case 'affirmative': return this.makeAffirmativePhrase(config)
      case 'negative': return this.makeNegativePhrase(config)
      case 'interrogative': return this.makeInterrogativePhrase(config)
      case 'negative interrogative': return this.makeNegativeInterrogativePhrase(config)
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
      case 'past': return this.makeNegativePastPhrase(config)
      case 'future': return this.makeNegativeFuturePhrase(config)
      default: return new UnimplementedPhrase()
    }
  }

  private makeInterrogativePhrase(config: Config) {
    switch (config.verbTenseTime) {
      case 'present': return this.makeInterrogativePresentPhrase(config)
      case 'past': return this.makeInterrogativePastPhrase(config)
      case 'future': return this.makeInterrogativeFuturePhrase(config)
      default: return new UnimplementedPhrase()
    }
  }

  private makeNegativeInterrogativePhrase(config: Config) {
    switch (config.verbTenseTime) {
      case 'present': return this.makeNegativeInterrogativePresentPhrase(config)
      case 'past': return this.makeNegativeInterrogativePastPhrase(config)
      case 'future': return this.makeNegativeInterrogativeFuturePhrase(config)
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
      case 'perfect': return new NegativePresentPerfect()
      case 'perfect continuous': return new NegativePresentPerfectContinuous()
      default: return new UnimplementedPhrase()
    }
  }

  private makeNegativePastPhrase(config: Config) {
    switch (config.verbTenseType) {
      case 'simple': return new NegativePastSimple()
      case 'continuous': return new NegativePastContinuous()
      case 'perfect': return new NegativePastPerfect()
      case 'perfect continuous': return new NegativePastPerfectContinuous()
      default: return new UnimplementedPhrase()
    }
  }

  private makeNegativeFuturePhrase(config: Config) {
    switch (config.verbTenseType) {
      case 'simple': return new NegativeFutureSimple()
      case 'continuous': return new NegativeFutureContinuous()
      case 'perfect': return new NegativeFuturePerfect()
      case 'perfect continuous': return new NegativeFuturePerfectContinuous()
      default: return new UnimplementedPhrase()
    }
  }

  private makeInterrogativePresentPhrase(config: Config) {
    switch (config.verbTenseType) {
      case 'simple': return new InterrogativePresentSimple()
      case 'continuous': return new InterrogativePresentContinuous()
      case 'perfect': return new InterrogativePresentPerfect()
      case 'perfect continuous': return new InterrogativePresentPerfectContinuous()
      default: return new UnimplementedPhrase()
    }
  }

  private makeInterrogativePastPhrase(config: Config) {
    switch (config.verbTenseType) {
      case 'simple': return new InterrogativePastSimple()
      case 'continuous': return new InterrogativePastContinuous()
      case 'perfect': return new InterrogativePastPerfect()
      case 'perfect continuous': return new InterrogativePastPerfectContinuous()
      default: return new UnimplementedPhrase()
    }
  }

  private makeInterrogativeFuturePhrase(config: Config) {
    switch (config.verbTenseType) {
      case 'simple': return new InterrogativeFutureSimple()
      case 'continuous': return new InterrogativeFutureContinuous()
      case 'perfect': return new InterrogativeFuturePerfect()
      case 'perfect continuous': return new InterrogativeFuturePerfectContinuous()
      default: return new UnimplementedPhrase()
    }
  }

  private makeNegativeInterrogativePresentPhrase(config: Config) {
    switch (config.verbTenseType) {
      case 'simple': return new NegativeInterrogativePresentSimple()
      case 'continuous': return new NegativeInterrogativePresentContinuous()
      case 'perfect': return new NegativeInterrogativePresentPerfect()
      case 'perfect continuous': return new NegativeInterrogativePresentPerfectContinuous()
      default: return new UnimplementedPhrase()
    }
  }

  private makeNegativeInterrogativePastPhrase(config: Config) {
    switch (config.verbTenseType) {
      case 'simple': return new NegativeInterrogativePastSimple()
      case 'continuous': return new NegativeInterrogativePastContinuous()
      case 'perfect': return new NegativeInterrogativePastPerfect()
      case 'perfect continuous': return new NegativeInterrogativePastPerfectContinuous()
      default: return new UnimplementedPhrase()
    }
  }

  private makeNegativeInterrogativeFuturePhrase(config: Config) {
    switch (config.verbTenseType) {
      case 'simple': return new NegativeInterrogativeFutureSimple()
      // case 'continuous': return new NegativeInterrogativeFutureContinuous()
      // case 'perfect': return new NegativeInterrogativeFuturePerfect()
      // case 'perfect continuous': return new NegativeInterrogativeFuturePerfectContinuous()
      default: return new UnimplementedPhrase()
    }
  }

}

class UnimplementedPhrase extends Phrase {

  protected assembly(subject: Subject, verb: Verb, complement: string): string {
    return 'Unimplemented phrase type'
  }

}
