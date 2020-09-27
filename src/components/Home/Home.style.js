import styled from 'styled-components'
import { slideDownKeyframe } from '../common/CSSAnimations'

export const HomeWrapper = styled.section`
  padding-bottom: 20px;
  padding-top: 125px;

  .svg-rect {
    width: 40%;
    position: absolute;
    top: 15px;
    right: 0;
    z-index: -1;
  }

  @media ${props => props.theme.media.tablet} {
    padding-top: 0;

    .svg-rect {
      top: 0;
    }
  }
`

export const Intro = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 100px 0;

  height: auto;

  .home__text {
    animation: ${slideDownKeyframe} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s
      forwards;

    z-index: 1;

    @media ${props => props.theme.media.tablet} {
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }
  }

  h1 {
    margin: -4px 0;
    font-size: 2.5rem;
    font-weight: 900;
  }

  p {
    font-family: ${props => props.theme.fontFamily};
  }

  .adjust {
    font-size: 1.06rem;
  }

  .home__CTA {
    min-width: 100px;
    max-width: 100px;
    margin-top: 10px;
  }

  .home__social {
    color: ${props => props.theme.primaryColor};
    display: flex;
    justify-content: space-between;
    font-size: 24px;
  }

  @media ${props => props.theme.media.tablet} {
    justify-content: space-between;
    flex-direction: column;

    h1 {
      margin: 6px 0;
      line-height: 100%;
    }

    margin: 50px 0;
  }
`
