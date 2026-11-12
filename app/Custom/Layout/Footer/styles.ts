import { styled } from '@linaria/react'
import { theme } from '../../theme'

export const FooterStyled = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  padding: 24px;
  border-top: 1px solid ${theme.colors.border};
  font-size: 14px;
  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 12px 24px;
  }
  a {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
  a:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 4px;
  }
`
