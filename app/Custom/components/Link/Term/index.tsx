import type * as React from 'react'
import { TermLinkStyled } from './styles'

interface TermLinkTarget {
  id: string
  name: string
}

export function createTermLink(term: Pick<TermLinkTarget, 'id'>): string {
  return `/terms/${encodeURIComponent(term.id)}`
}

export const TermLink: React.FC<
  React.PropsWithChildren<{ term: TermLinkTarget }>
> = ({ term, children }) => (
  <TermLinkStyled to={createTermLink(term)}>
    {children ?? term.name}
  </TermLinkStyled>
)
