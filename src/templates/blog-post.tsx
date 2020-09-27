import React from 'react'
import { graphql } from 'gatsby'

import { SEO } from '../components/seo'

import { BlogLayout } from '../components/Blog/BlogLayout'
import { SocialShareSection } from '../components/Blog/SocialShareSection'
import { BlogDateAndReadTime } from '../components/Blog/BlogCard'

import { siteUrl } from '../../config/website'

const BlogPost = ({ data, pageContext }) => {
    const { title, date } = data.markdownRemark.frontmatter
    const { timeToRead, html, excerpt } = data.markdownRemark

    const baseSlugUrl = siteUrl + pageContext.slug

    return (
        <>
            <SEO title={title} description={excerpt} />

            <BlogLayout
                sharerSection={
                    <div>
                        <h4>Share on</h4>
                        <SocialShareSection baseSlugUrl={baseSlugUrl} title={title} />
                    </div>
                }
            >
                <BlogDateAndReadTime date={date} readtime={timeToRead} />
                <h1>{title}</h1>
                <article className="markdown-content" dangerouslySetInnerHTML={{ __html: html }} />
            </BlogLayout>
        </>
    )
}

export const query = graphql`
    query BlogPostBySlug($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            html
            timeToRead
            excerpt
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY", locale: "en")
            }
        }
    }
`

export default BlogPost
