import React from 'react'

import SEO from 'src/components/seo'

import Home from 'src/components/Home/Home'
import About from 'src/components/About/About'
import Contact from 'src/components/Contact/Contact'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Home />
    <About />
    <Contact />
  </>
)

export default IndexPage
