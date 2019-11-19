import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import SEO from 'src/components/seo'
import BlogLayout from 'src/components/Blog/BlogLayout'
import BlogCard from 'src/components/Blog/BlogCard'

const Header = styled.h1`
  margin-bottom: 40px;
`

const TagsPage = ({ data, pageContext }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark

  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`

  return (
    <>
      <SEO title={tagHeader} />

      <BlogLayout>
        <Header>{tagHeader}</Header>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title, date, tags } = node.frontmatter
          return (
            <BlogCard
              tags={tags}
              key={node.id}
              slug={slug}
              title={title}
              date={date}
              readtime={node.timeToRead}
              excerpt={node.excerpt}
            />
          )
        })}
      </BlogLayout>
    </>
  )
}
export default TagsPage

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            tags
            title
            date(formatString: "MMMM DD, YYYY", locale: "en")
          }
        }
      }
    }
  }
`
