/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */

  siteMetadata: {
    title: `Portfolio`,
    description: `Portfolio built with Gatsby and Strapi`,
    titleTemplate: `%s | WebEntwickler`,
    url: `https://porfolio-cristian-mosquera.netlify.app`,
    twitterUsername: `@cristhianf_do`,
    image: `/portfoliomain.png`,
  },

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Defaults to 100
        contentTypes: [`projects`],
        singleTypes: [`about`],
      },
    },
  ],
}
