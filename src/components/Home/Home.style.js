import styled from 'styled-components';
import { slideDownKeyframe } from 'src/components/css-animations';

export const HomeWrapper = styled.section`
  padding-bottom: 100px;
  padding-top: 125px;
`;

export const Intro = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .home__text {
    animation: ${slideDownKeyframe} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s forwards;

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
`;
