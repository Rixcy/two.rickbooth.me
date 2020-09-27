const { slugify } = require('./src/components/slugify.js')
const path = require('path')

exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slugFromTitle = slugify(node.frontmatter.title)

        createNodeField({
            node,
            name: 'slug',
            value: `/blog/${slugFromTitle}`,
        })
    }
}

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve('src/templates/blog-post.tsx')
    const tagTemplate = path.resolve('src/templates/tags.js')

    return graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            tags
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `).then(res => {
        if (res.errors) return Promise.reject(res.errors)

        const edges = res.data.allMarkdownRemark.edges

        edges.forEach(({ node }) => {
            const tagSet = new Set()
            node.frontmatter.tags.forEach(tag => tagSet.add(tag))
            const tagList = Array.from(tagSet)

            tagList.forEach(tag => {
                createPage({
                    path: `/blog/tags/${slugify(tag)}`,
                    component: tagTemplate,
                    context: {
                        tag,
                    },
                })
            })

            createPage({
                path: node.fields.slug,
                component: blogPostTemplate,
                context: {
                    slug: node.fields.slug,
                },
            })
        })
    })
}
