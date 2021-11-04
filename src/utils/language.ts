export const VOWELS = ['a', 'e', 'i', 'o', 'u', 'y']
export const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']

export function sillableCount(word: string): number {
  const vowelCatchRegex = new RegExp(`[${VOWELS.join('')}]+`, 'g')

  const vowelGroupsCount = word.match(vowelCatchRegex)?.length ?? 1

  if (vowelGroupsCount === 2 && word.endsWith('e'))
    return 1

  return vowelGroupsCount
}

export function merge(parts: string[], punctuation: '.' | '?'): string { 
  return parts.filter(a => a).join(' ') + punctuation
}
