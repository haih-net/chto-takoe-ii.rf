import { styled } from '@linaria/react'

export const WrappersArticleStyled = styled.article`
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
