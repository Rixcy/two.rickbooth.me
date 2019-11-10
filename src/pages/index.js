import React from 'react'

import Home from '../components/Home/Home'
import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
  </Layout>
)

export default IndexPage
