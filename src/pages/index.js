import React from 'react'

import Home from 'src/components/Home/Home'
import Layout from 'src/components/Layout/Layout'
import SEO from 'src/components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
  </Layout>
)

export default IndexPage
