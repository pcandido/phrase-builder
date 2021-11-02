import { Subject, I } from '..'

interface AuxiliarVerb {
  infinitive(): string
  present(subject: Subject): string
  past(subject: Subject): string
  pastParticiple(): string
}

export const toBe: AuxiliarVerb = {
  infinitive: () => 'be',
  present: (subject: Subject) => {
    if (subject.getValue() === I.getValue()) return 'am'
    if (subject.isThirdPerson()) return 'is'
    return 'are'
  },
  past: (subject: Subject) => {
    if (subject.getValue() === I.getValue()) return 'was'
    if (subject.isThirdPerson()) return 'was'
    return 'were'
  },
  pastParticiple: () => 'been',
}

export const toHave: AuxiliarVerb = {
  infinitive: () => 'have',
  present: (subject: Subject) => subject.isThirdPerson() ? 'has' : 'have',
  past: (subject: Subject) => 'had',
  pastParticiple: () => 'had',
}

export const toDo: AuxiliarVerb = {
  infinitive: () => 'do',
  present: (subject: Subject) => subject.isThirdPerson() ? 'does' : 'do',
  past: (subject: Subject) => 'did',
  pastParticiple: () => 'done',
}
