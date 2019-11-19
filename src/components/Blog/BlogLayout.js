import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Tags from 'src/components/Blog/Tags'
import SplitLayout from 'src/components/common/SplitLayout'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`

const IconLink = styled(Link)`
  margin-right: 8px;
`

const BlogLayout = ({ children, sharerSection }) => {
  return (
    <SplitLayout
      content={children}
      aside={
        <>
          <section>
            <Header>
              <h4>Tags</h4>
              {typeof window !== 'undefined' &&
                window.location.pathname.includes('tags') && (
                  <IconLink to="blog">
                    <FontAwesomeIcon icon={['far', 'times-circle']} />
                  </IconLink>
                )}
            </Header>
            <Tags />
            <br />
          </section>
          {sharerSection && sharerSection}
        </>
      }
    />
  )
}

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
  sharerSection: PropTypes.node,
}

export default BlogLayout
