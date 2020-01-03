module.exports = {
  siteMetadata: {
    title: `My Glorious Blog`,
    description: `Articles about technology`,
    author: `@gatsbyjs`,
    siteUrl: 'https://pensive-bhabha-decba0.netlify.com/'
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `posts`,
          path: `${__dirname}/src/posts/`,
        },
      },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mike's blow`,
        short_name: `mBlog`,
        start_url: `/`,
        background_color: `#647E8C`,
        theme_color: `#647E8C`,
        display: `minimal-ui`,
        icon: `src/images/meTruck.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
    'gatsby-transformer-remark',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-sitemap',
    `gatsby-plugin-netlify`, // make sure to put last in the array
  ],
}
