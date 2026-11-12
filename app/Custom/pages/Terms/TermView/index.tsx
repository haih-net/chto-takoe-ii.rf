import type * as React from 'react'
import { Link } from 'react-router'
import type { TermDefinition } from '../data'
import { TermViewStyled } from './styles'

export const TermView: React.FC<
  React.PropsWithChildren<{ term: TermDefinition }>
> = ({ term, children }) => (
  <TermViewStyled aria-labelledby="term-title">
    <Link to="/terms">Справочник</Link>
    <h1 id="term-title" tabIndex={-1}>
      {term.name}
    </h1>
    <div>{children ?? term.definition}</div>
  </TermViewStyled>
)
