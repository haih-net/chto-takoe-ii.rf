import { styled } from '@linaria/react'
import { CustomLayoutSectionStyled } from 'app/Custom/Layout/styles'

export const TermViewStyled = styled(CustomLayoutSectionStyled)`
  h1 {
    margin: 20px 0;
  }

  > a {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`

export const TermArticleStyled = styled.article`
  max-width: 76ch;

  > * + * {
    margin-top: 20px;
  }

  section {
    margin-top: 36px;
  }

  h2 {
    margin-bottom: 16px;
  }

  section > * + * {
    margin-top: 16px;
  }

  ul {
    padding-left: 24px;
  }

  li + li {
    margin-top: 12px;
  }
`
