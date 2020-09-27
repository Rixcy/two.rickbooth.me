import styled from 'styled-components'

export const AboutWrapper = styled.section`
    padding-top: 150px;
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
    padding-top: 80px;
    display: flex;
    position: relative;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    flex-direction: row;

    p {
        color: #f8f8f8;
        margin-right: 10%;
    }

    .about__rkmscc-link {
        color: ${p => (p.theme.dark ? p.theme.primaryColor : '#111')};
    }

    @media ${props => props.theme.media.tablet} {
        padding-top: 20px;
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
            max-width: 80%;
        }
    }
`
