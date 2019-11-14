import styled from 'styled-components'

export const AboutWrapper = styled.section`
  @media ${props => props.theme.media.tablet} {
    position: relative;
  }
  .quotes__wrapper {
    position: relative;
    top: 80px;

    @media ${props => props.theme.media.tablet} {
      top: 40px;
    }
  }
`

export const AboutInfo = styled.article`
  display: flex;
  position: relative;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 150px;
  flex-direction: row;
  padding-top: 80px;

  p {
    color: #f8f8f8;
    margin-right: 10%;
  }

  .about__rkmscc-link {
    color: ${p => (p.theme.dark ? p.theme.primaryColor : '#111')};
  }

  @media ${props => props.theme.media.tablet} {
    padding-top: 150px;
    padding-bottom: 50px;
    margin-top: 0;
    text-align: center;
    flex-direction: column-reverse;

    > div:first-child {
      margin-right: 0;
      margin-bottom: 30px;
    }

    p {
      padding-top: 40px;
      margin-right: 0;
    }
  }
`
