export const VOWELS = ['a', 'e', 'i', 'o', 'u', 'y']
export const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'p', 'q', 'r', 's', 't', 'v', 'wvx', 'z']

export function sillableCount(word: string): number {
  const vowelCatchRegex = new RegExp(`[${VOWELS.join('')}]+`, 'g')

  const vowelGroupsCount = word.match(vowelCatchRegex)?.length ?? 1

  if (vowelGroupsCount === 2 && word.endsWith('e'))
    return 1

  return vowelGroupsCount
}