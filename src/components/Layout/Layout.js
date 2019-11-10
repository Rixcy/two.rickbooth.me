import React from 'react'
import PropTypes from 'prop-types'

import 'normalize.css'
import { ThemeProvider } from 'styled-components'
import { themelight } from './theme'

import Wrapper from '../common/Wrapper'
import GlobalStyle from '../../styles/GlobalStyle'

import { setConfiguration } from 'react-grid-system'
setConfiguration({ breakpoints: [576, 769, 992, 1200] })

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={themelight}>
      <>
        <GlobalStyle />
        <Wrapper>{children}</Wrapper>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
