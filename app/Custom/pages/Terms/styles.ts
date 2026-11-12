import { styled } from '@linaria/react'
import { CustomLayoutSectionStyled } from 'app/Custom/Layout/styles'

export const TermsPageStyled = styled(CustomLayoutSectionStyled)`
  dl {
    display: grid;
    gap: 28px;
    margin: 28px 0 0;
  }

  dt {
    font-size: 20px;
    font-weight: 700;
  }

  dd {
    margin: 8px 0 0;
  }
`
