import React from 'react'
import styled from 'styled-components'
import { Link, graphql, useStaticQuery } from 'gatsby'

import slugify from 'src/components/slugify'

export const useTags = () => {
  const tags = useStaticQuery(graphql`
    query {
      allMarkdownRemark(limit: 500) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  return tags
}

export const TagBreadcrumb = styled(Link)`
  float: left;
  border: 1px solid ${p => p.theme.primaryColor};
  border-radius: 50px;
  padding: 8px 13px;
  line-height: 10px;
  margin: 5px;
  font-size: 12px;
  user-select: none;

  &:hover {
    background: ${p => (p.theme.dark ? p.theme.primaryColor : p.theme.bg)};
  }
`

const Tags = () => {
  const tags = useTags()

  return (
    <section style={{ overflow: 'auto' }}>
      {tags.allMarkdownRemark.group.map(tag => (
        <TagBreadcrumb
          key={tag.fieldValue}
          to={`/blog/tags/${slugify(tag.fieldValue)}/`}
        >
          {tag.fieldValue}, {tag.totalCount}
        </TagBreadcrumb>
      ))}
    </section>
  )
}

export default Tags
