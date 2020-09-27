import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export type SEOProps = {
    description?: string
    lang?: string
    meta?: any
    title?: string
}

export const SEO: React.FC<SEOProps> = (props: SEOProps) => {
    const { description, lang, meta, title } = props
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    siteLogo
                }
            }
        }
    `)

    const defaults = site.siteMetadata

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={`${title} | ${defaults.title}` || defaults.title}
            meta={[
                {
                    name: `description`,
                    content: description || defaults.description,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: description || defaults.description,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
            ].concat(meta || [])}
        />
    )
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
}

