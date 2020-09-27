import React from 'react'

import SEO from 'src/components/seo'

import Home from 'src/components/Home/Home'
import About from 'src/components/About/About'
import Contact from 'src/components/Contact/Contact'

import { SimpleFooter } from '@rixcy/components'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Home />
    <About />
    <Contact />
    <SimpleFooter copyrightName="Rick Booth" />
  </>
)

export default IndexPage
