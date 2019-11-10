module.exports = {
  siteMetadata: {
    title: `rickbooth.me`,
    description: `My personal website built using Gatsby.`,
    author: `@rixcy`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rickboothdotme`,
        short_name: `rickboothdotme`,
        start_url: `/`,
        background_color: `#6D83F2`,
        theme_color: `#6D83F2`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
  ],
}
