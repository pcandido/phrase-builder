import { sillableCount } from './language'

describe('sillableCount', () => {
  it('should return 1 if word has just 1 vowel', () => {
    const count = sillableCount('cat')
    expect(count).toBe(1)
  })

  it('should return the number of vowel groups, e.g. phOtOgrAphY should be 4', () => {
    expect(sillableCount('photography')).toBe(4)
    expect(sillableCount('cat')).toBe(1)
    expect(sillableCount('pony')).toBe(2)
    expect(sillableCount('cracker')).toBe(2)
    expect(sillableCount('shoe')).toBe(1)
    expect(sillableCount('Popsicle')).toBe(3)
  })

  it('should not count magic e, i.e. final e in a 1-sillable word', () => {
    expect(sillableCount('time')).toBe(1)
    expect(sillableCount('like')).toBe(1)
    expect(sillableCount('bake')).toBe(1)
    expect(sillableCount('dude')).toBe(1)
    expect(sillableCount('cube')).toBe(1)
  })
})