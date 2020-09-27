import React from 'react'

import { SEO } from '../components/seo'

import { Home } from '../components/Home/Home'
import { About } from '../components/About/About'
import { Contact } from '../components/Contact/Contact'

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
