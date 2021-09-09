/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const siteMetadata = require('./config/metadata')

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `@chakra-ui/gatsby-plugin`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#EA5C6B`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Yeseva One`,
            variants: [`400`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Retiro de Yoga e Arte eu Já Ecuto os Teus Sinais`,
        short_name: `EJEOTS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#EA5C6B`,
        display: `standalone`,
        icon: 'src/images/icon.png' //512 X 512 PNG IMAGE GOES HERE
      },
    },
    `gatsby-plugin-offline`
  ],
}
