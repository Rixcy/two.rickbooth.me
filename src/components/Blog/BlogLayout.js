import React from 'react'
import PropTypes from 'prop-types'

import Tags from 'src/components/Blog/Tags'
import SplitLayout from 'src/components/common/SplitLayout'

const BlogLayout = ({ children, sharerSection }) => {
  return (
    <SplitLayout
      content={children}
      aside={
        <>
          <section>
            <h4>Tags</h4>
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
