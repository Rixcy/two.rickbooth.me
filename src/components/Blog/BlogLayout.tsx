import React from 'react'
import PropTypes from 'prop-types'

import { Tags } from '../Blog/Tags'
import { SplitLayout } from '../common/SplitLayout'

export const BlogLayout = ({ children, sharerSection }) => {
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

