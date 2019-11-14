import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ParallaxProvider } from 'react-scroll-parallax'

import 'normalize.css'
import { ThemeProvider } from 'styled-components'
import { themeLight, themeDark } from './theme'

import Wrapper from 'src/components/common/Wrapper'
import GlobalStyle from 'src/styles/GlobalStyle'
import Navbar from './Navbar/Navbar'

import 'src/components/common/FA'
import useDarkMode from 'src/hooks/useDarkMode'
import ThemeToggleContext from './ThemeToggleContext'

import { setConfiguration } from 'react-grid-system'
setConfiguration({ breakpoints: [576, 769, 992, 1200] })

const RootWrapper = styled(Wrapper)`
  margin-bottom: 50px;
  min-height: calc(100vh - 125px);

  @media ${props => props.theme.media.tablet} {
    margin-top: 50px;
  }
`

const Layout = ({ children }) => {
  const [theme, toggleTheme, toggleRef] = useDarkMode()

  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
      <>
        <GlobalStyle />

        <ThemeToggleContext.Provider value={{ theme, toggleTheme, toggleRef }}>
          <Navbar />
        </ThemeToggleContext.Provider>

        <ParallaxProvider>
          <RootWrapper>{children}</RootWrapper>
        </ParallaxProvider>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
