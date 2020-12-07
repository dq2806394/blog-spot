require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Daniel's Dallas Arboretum Blog Spot`,
    description: `My first-handed experience through a high-quality blog`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "0m3h65o8xsq1",
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "JSpx_RDrgKFHdzMRy5Vt3hpYHoNAtR65cbVgC7x19Z0",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
