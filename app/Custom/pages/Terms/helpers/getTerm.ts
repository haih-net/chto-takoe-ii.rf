import { terms } from '../data'
import type { TermDefinition } from '../data'

export function getTerm(id: TermDefinition['id']): TermDefinition {
  const term = terms.find((item) => item.id === id)
  if (!term) {
    throw new Error(`Не найден термин: ${id}`)
  }
  return term
}
