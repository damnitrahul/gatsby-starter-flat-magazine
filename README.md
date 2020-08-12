<h1 align="center">
    <img alt="Flat Magazine" title="Flat Magazine" src="./src/images/logo.png" width="180"> <br/><br/>
    Flat Magazine Blog
</h1>

<h4 align="center">
 A flat design Gatsby Starter powered by Sanity.
</h4>

## ⚡ Features

- [Sanity.io](https://www.sanity.io/) integration
- Styled with [styled-components](https://styled-components.com/)
- Search Support for Posts with [elasticlunr-search](https://www.gatsbyjs.org/packages/@gatsby-contrib/gatsby-plugin-elasticlunr-search)
- Dark Mode
- Featured Posts Section
- Pagination
- Home Page, Blog Archive Page, Blog Post Page
- Automatic [XML Sitemap](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap) and [Robots.txt ](https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt) genration
- Responsive design

## 🚀 Quick Start

#### Create a Gatsby site

Use the Gatsby CLI to create a new site, specifying the Flat Magazine starter.

```sh
# Create a new Gatsby site using the Flat Magazine starter
gatsby new blog https://github.com/damnitrahul/gatsby-starter-flat-magazine
```

Supply your sanity.io tokens to `gatsby-source-sanity` options in `gatsby-config.js`

```
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: [YOUR_SANITY_PROJECT_ID],
        dataset: [YOUR_SANITY_PROJECT_DATASET],
        token: [YOUR_SANITY_TOKEN]
    }
```

### Clone the customised Sanity Studio for Flat Magazine [HERE](https://github.com/damnitrahul/sanity-studio-flat-magazine)

Setup the Studio with your credential, Deploy GraphQL API and Start publishing your content

#### Start Developing

Navigate into your new site’s directory and start it up.

```sh
cd blog
gatsby develop
```

#### Open the source code and start editing!

Your site is now running at `http://localhost:8000`!

Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).

Open the `blog` directory in your code editor of choice and edit `src/templates/index-template.js`. Save your changes and the browser will update in real time!

## 💫 Deploy with Netlify

### Current deployment status

[![Netlify Status](https://api.netlify.com/api/v1/badges/2959a2f5-d392-4b58-88c5-b341f57eed00/deploy-status)](https://app.netlify.com/sites/flat-magazine/deploys)

[Netlify](https://netlify.com) CMS can run in any frontend web environment, but the quickest way to try it out is by running it on a pre-configured starter site with Netlify. Use the button below to build and deploy your own copy of the repository:

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/damnitrahul/gatsby-starter-flat-magazine" target="_blank"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

After clicking that button, you’ll authenticate with GitHub and choose a repository name. Netlify will then automatically create a repository in your GitHub account with a copy of the files from the template. Next, it will build and deploy the new site on Netlify, bringing you to the site dashboard when the build is complete.
