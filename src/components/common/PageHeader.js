import styled from 'styled-components'

const PageHeader = styled.h2`
  margin: 100px auto;
  font-size: 1.5rem;
  font-weight: 900;
  color: ${p => (p.theme.dark ? p.theme.primaryText : p.theme.primaryColor)};
  text-align: center;
  letter-spacing: 1px;
  @media ${props => props.theme.media.tablet} {
    margin: 0;
  }
`

export default PageHeader
