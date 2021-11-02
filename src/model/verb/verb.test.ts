import { SHE, YOU } from '..'
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

})