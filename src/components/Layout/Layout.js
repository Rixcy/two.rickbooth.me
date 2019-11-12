import React from 'react'
import PropTypes from 'prop-types'

import 'normalize.css'
import { ThemeProvider } from 'styled-components'
import { themeLight, themeDark } from './theme'

import Wrapper from 'src/components/common/Wrapper'
import GlobalStyle from 'src/styles/GlobalStyle'
import Navbar from './Navbar/Navbar'

import useDarkMode from 'src/hooks/useDarkMode'
import ThemeToggleContext from './ThemeToggleContext'

import { setConfiguration } from 'react-grid-system'
setConfiguration({ breakpoints: [576, 769, 992, 1200] })

const Layout = ({ children }) => {
  const [theme, toggleTheme, toggleRef] = useDarkMode()

  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
      <>
        <GlobalStyle />

        <ThemeToggleContext.Provider value={{ theme, toggleTheme, toggleRef }}>
          <Navbar />
        </ThemeToggleContext.Provider>
        <Wrapper>{children}</Wrapper>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
