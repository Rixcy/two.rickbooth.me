import { css } from 'styled-components'

export const sizes = {
  mobile: '480px',
  tablet: '768px',
  fablet: '1000px',
  desktop: '1200px',
}

const themeCommon = {
  shadow: '0px 10px 10px rgba(0, 0, 0, 0.2)',
  shadowSmall: '0px 5px 10px rgba(0, 0, 0, 0.05)',
  fontFamily: '"Montserrat", sans-serif',
  secondaryFontFamily: '"Open Sans", sans-serif',
  spacing: {
    sectionBottom: 'margin-bottom: 100px',
    sectionTop: 'margin-top: 100px',
    sectionTopBottom: css`
      margin-top: 100px;
      margin-bottom: 100px;
    `,
  },
  media: {
    mobile: `(max-width: ${sizes.mobile})`,
    tablet: `(max-width: ${sizes.tablet})`,
    fablet: `(max-width: ${sizes.fablet})`,
    desktop: `(max-width: ${sizes.desktop})`,
    minMobile: `(min-width: ${sizes.mobile})`,
    minTablet: `(min-width: ${sizes.tablet})`,
  },
  gradient: 'linear-gradient(135deg, #f06a6b 0%, #d8344e 99%)',
  gradient2: 'linear-gradient(100deg, #f06a6b 0%, #d8344e 130%',
}

export const themeLight = {
  dark: false,
  bg: '#F8F8F8',
  primaryColor: '#d8344e',
  secondaryColor: '#F8F8F8',
  accentColor: '#ffc7d0',
  primaryBlack: '#383838',
  primaryText: '#383838',
  ...themeCommon,
}

export const themeDark = {
  dark: true,
  bg: '#191919',
  primaryColor: '#d8344e',
  secondaryColor: '#232323',
  accentColor: '#303030',
  primaryBlack: '#F8F8F8',
  elevation0: '#191919',
  primaryText: '#F8F8F8',
  ...themeCommon,
}
