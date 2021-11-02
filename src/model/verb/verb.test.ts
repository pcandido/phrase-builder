import { I, SHE, YOU } from '..'
import { Verb } from './verb'

describe('Verb', () => {

  it('should return value as infinitive form', () => {
    const verb = new Verb('do')
    expect(verb.getInfinitive()).toBe('do')
  })

  describe('getPresentSimple', () => {

    it('should use infinitive form when subject is not thirdPerson', () => {
      const subject = YOU
      const verb = new Verb('do')
      expect(verb.getPresentSimple(subject)).toBe('do')
    })

    describe('subject is third-person', () => {
      const subject = SHE

      it('should add s to the end of infinitive form, for most of verbs', () => {
        const verb = new Verb('read')
        expect(verb.getPresentSimple(subject)).toBe('reads')
      })

      it.each([
        ['o', 'do', 'does'],
        ['s', 'confess', 'confesses'],
        ['z', 'buzz', 'buzzes'],
        ['ch', 'catch', 'catches'],
        ['sh', 'finish', 'finishes'],
        ['x', 'fix', 'fixes'],
      ])('should add es to the end of verbs which ends with "%s", e.g. %s -> %s', (end, infinitiveForm, expectedForm) => {
        const verb = new Verb(infinitiveForm)
        expect(verb.getPresentSimple(subject)).toBe(expectedForm)
      })

      it('should replace y with ies on verbs which ends with "y", e.g. fly -> flies', () => {
        const verb = new Verb('fly')
        expect(verb.getPresentSimple(subject)).toBe('flies')
      })

      it('should return has to irregular verb have', () => {
        const verb = new Verb('have')
        expect(verb.getPresentSimple(subject)).toBe('has')
      })

    })

    describe('verb to be', () => {
      const verb = new Verb('be')

      it('should be "am" to subject "I"', () => {
        expect(verb.getPresentSimple(I)).toBe('am')
      })
    })

  })

  describe('getContinuous', () => {
    it('should replace last e with ing if verb ends with consonant plus e, e.g. dance -> dancing', () => {
      expect(new Verb('dance').getContinuous()).toBe('dancing')
      expect(new Verb('ride').getContinuous()).toBe('riding')
      expect(new Verb('write').getContinuous()).toBe('writing')
    })

    it('should replace final ie with ying, e.g. die -> dying', () => {
      expect(new Verb('die').getContinuous()).toBe('dying')
      expect(new Verb('lie').getContinuous()).toBe('lying')
      expect(new Verb('tie').getContinuous()).toBe('tying')
    })

    it('should double last letter if verb is one-sillable and ends with consonant+vowel+consonant, e.g. cut -> cutting', () => {
      expect(new Verb('cut').getContinuous()).toBe('cutting')
      expect(new Verb('run').getContinuous()).toBe('running')
      expect(new Verb('stop').getContinuous()).toBe('stopping')
    })

    it('should append ing in standard cases, e.g. eat -> eating', () => {
      expect(new Verb('eat').getContinuous()).toBe('eating')
      expect(new Verb('go').getContinuous()).toBe('going')
      expect(new Verb('read').getContinuous()).toBe('reading')
    })
  })

  describe('getPast', () => {
    const subject = YOU

    it('should return past form of an irregular verb, e.g. begin -> began', () => {
      expect(new Verb('begin').getPast(subject)).toBe('began')
      expect(new Verb('do').getPast(subject)).toBe('did')
      expect(new Verb('come').getPast(subject)).toBe('came')
    })

    it('should add d if verb ends with e, e.g. bake -> baked', () => {
      expect(new Verb('bake').getPast(subject)).toBe('baked')
      expect(new Verb('like').getPast(subject)).toBe('liked')
      expect(new Verb('move').getPast(subject)).toBe('moved')
    })

    it('should replace y with ied when verb ends with consonant plus y, e.g. carry -> carried', () => {
      expect(new Verb('carry').getPast(subject)).toBe('carried')
      expect(new Verb('study').getPast(subject)).toBe('studied')
    })

    it('should double last letter and add ed when verb is one-sillable and ends with vowel+consonant, e.g. stop -> stopped', () => {
      expect(new Verb('stop').getPast(subject)).toBe('stopped')
      expect(new Verb('plan').getPast(subject)).toBe('planned')
    })

    it('should add ed at final in standard cases, e.g. walk -> walked', () => {
      expect(new Verb('walk').getPast(subject)).toBe('walked')
      expect(new Verb('play').getPast(subject)).toBe('played')
    })

    it('should return were for "to be" and for non-third-person subject', () => {
      expect(new Verb('be').getPast(YOU)).toBe('were')
    })

    it('should return was for "to be" and for third-person subject', () => {
      expect(new Verb('be').getPast(SHE)).toBe('was')
    })
  })

  describe('getPastParticiple', () => {
    it('should return past form of an irregular verb, e.g. begin -> begun', () => {
      expect(new Verb('begin').getPastParticiple()).toBe('begun')
      expect(new Verb('do').getPastParticiple()).toBe('done')
      expect(new Verb('come').getPastParticiple()).toBe('come')
    })

    it('should add d if verb ends with e, e.g. bake -> baked', () => {
      expect(new Verb('bake').getPastParticiple()).toBe('baked')
      expect(new Verb('like').getPastParticiple()).toBe('liked')
      expect(new Verb('move').getPastParticiple()).toBe('moved')
    })

    it('should replace y with ied when verb ends with consonant plus y, e.g. carry -> carried', () => {
      expect(new Verb('carry').getPastParticiple()).toBe('carried')
      expect(new Verb('study').getPastParticiple()).toBe('studied')
    })

    it('should double last letter and add ed when verb is one-sillable and ends with vowel+consonant, e.g. stop -> stopped', () => {
      expect(new Verb('stop').getPastParticiple()).toBe('stopped')
      expect(new Verb('plan').getPastParticiple()).toBe('planned')
    })

    it('should add ed at final in standard cases, e.g. walk -> walked', () => {
      expect(new Verb('walk').getPastParticiple()).toBe('walked')
      expect(new Verb('play').getPastParticiple()).toBe('played')
    })
  })

})