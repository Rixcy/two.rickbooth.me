import styled from 'styled-components'
import Wrapper from 'src/components/common/Wrapper'

export const NavWrapper = styled.div`
  position: fixed;
  top: 0;

  display: flex;
  align-items: center;

  height: 60px;
  width: 100vw;

  background-color: ${props => props.theme.secondaryColor};
  box-shadow: ${props => props.theme.shadowSmall};
  z-index: 1000;

  .logo {
    margin-right: auto;
    cursor: pointer;

    img {
      flex-basis: 100px;
      max-width: 35px;
    }
  }

  @media ${props => props.theme.media.tablet} {
    display: none;
  }
`

export const NavContent = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
