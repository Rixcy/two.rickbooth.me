import styled from 'styled-components'

export const SkewBg = styled.div`
    position: absolute;
    left: 0;
    width: 100%;
    min-height: 400px;
    background: ${p => (p.theme.dark ? p.theme.secondaryColor : p.theme.gradient)};
    transform: skewY(-3deg);
    z-index: -1;
    pointer-events: none;

    @media ${props => props.theme.media.tablet} {
        width: unset;
        height: 90%;
        top: 100px;
        left: -32px;
        right: -32px;
        bottom: 0;
    }
`
