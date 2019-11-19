import { css } from 'styled-components'

const PrismJsStyles = css`
  blockquote {
    border-left: 5px solid ${p => p.theme.accentColor};
    padding: 15px;
    margin: 20px 0;
    border-radius: 3px;
  }

  p > .language-text,
  li > .language-text {
    padding: 2px 5px;
    background: ${p => p.theme.accentColor} !important;
    color: ${p => p.theme.primaryText} !important;
    word-break: break-word !important;
    white-space: normal !important;
    font-size: 16px !important;
  }

  .gatsby-highlight {
    position: relative;

    code[class*='language-'] {
      background-color: transparent;
      font-size: 1em;
      left: 15px;
    }

    pre[class*='language-'] {
      &:before {
        background: rgb(97, 218, 251);
        color: #232129;
        font-size: 0.75rem;
        line-height: 1;
        position: absolute;
        right: 15px;
        text-transform: uppercase;
        top: 0px;
        border-radius: 0px 0px 4px 4px;
        padding: 0.25rem 0.5rem;
      }

      position: initial;

      font-size: 0.85rem;
      border-radius: 0.3em;

      margin: 2em 0;
      padding: 1em 0;

      overflow: auto;
      word-wrap: normal;
      background-color: #25293e;

      &.line-numbers {
        padding-left: 2em;
        padding-right: 1.1em;
        line-height: 170%;
        font-size: 14px;

        .line-numbers-rows {
          right: calc(100% - 40px);
          background-color: #25293e;
          border: none;
          top: 14px;
        }
      }
    }
  }
`

export default PrismJsStyles
