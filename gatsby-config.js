module.exports = {
  siteMetadata: {
    title: `Flatsby`,
    description: `A Blog Theme for Gatsby. Using Sanity.io as backend.`,
    author: `@damnitrahul`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.GATSBY_PROJECT_ID,
        dataset: process.env.GATSBY_PROJECT_DATASET,
        token: process.env.GATSBY_MY_SANITY_TOKEN
      }
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `slug`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          SanityPost: {
            title: node => node.title,
            slug: node => node.slug.current
          }
        }
      }
    },
    'gatsby-plugin-styled-components'
    // 'gatsby-source-sanity-transform-images'
  ]
}
