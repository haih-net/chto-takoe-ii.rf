import type * as React from 'react'
import { TermsPageStyled } from './styles'
import { terms } from './data'
import { TermLink } from 'app/Custom/components/Link/Term'

export const TermsPage: React.FC = () => (
  <TermsPageStyled aria-labelledby="terms-title">
    <h1 id="terms-title" tabIndex={-1}>
      Справочник
    </h1>

    <dl>
      {terms.map(({ id, name, definition }) => (
        <div key={id} id={id}>
          <dt>
            <TermLink term={{ id, name }} />
          </dt>
          <dd>{definition}</dd>
        </div>
      ))}
    </dl>
  </TermsPageStyled>
)
