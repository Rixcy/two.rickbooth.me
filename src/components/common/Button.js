import styled, { css } from 'styled-components'

const common = css`
  background: ${props => props.theme.gradient};
  color: #f8f8f8;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  user-select: none;

  &:hover {
    color: #f8f8f8;
    background: ${props => props.theme.gradient2};
    transition: 0.2s;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`

const Button = styled.button`
  ${common};
  width: ${props => (props.width ? props.width : 'auto')};
  height: ${props => (props.height ? props.width : 'auto')};
  font-size: 12px;
  margin: 0px 0;
  padding: 12px 12px;
  border-radius: ${props => (props.round ? '50%' : '5px')};
`

export default Button
