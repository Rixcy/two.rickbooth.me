import styled from 'styled-components'

export const Flex = styled.div<{ justify?: string; align?: string; nowrap?: boolean }>`
    display: flex;
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
    flex-wrap: ${props => (props.nowrap ? 'no-wrap' : 'wrap')};
`
