import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import SEO from 'src/components/seo'

import BlogLayout from 'src/components/Blog/BlogLayout'
import BlogCard from 'src/components/Blog/BlogCard'

export const Blog = () => {
    const blogPosts = useStaticQuery(graphql`
        query {
            allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
                edges {
                    node {
                        id
                        excerpt
                        timeToRead
                        frontmatter {
                            title
                            date(formatString: "MMMM DD, YYYY", locale: "en")
                            tags
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    return (
        <>
            <SEO title="Blog" />
            <BlogLayout>
                {blogPosts.allMarkdownRemark.edges.map(({ node }) => (
                    <BlogCard
                        key={node.id}
                        slug={node.fields.slug}
                        title={node.frontmatter.title}
                        date={node.frontmatter.date}
                        tags={node.frontmatter.tags}
                        readtime={node.timeToRead}
                        excerpt={node.excerpt}
                    />
                ))}
            </BlogLayout>
        </>
    )
}

