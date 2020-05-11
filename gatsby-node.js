/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve('./src/templates/blog-post/blog-post.js');
  const blogPageTemplate = path.resolve(
    './src/templates/blog-page/blog-page.js'
  );

  const res = await graphql(`
    query MyQuery {
      allSanityPost {
        totalCount
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);

  res.data.allSanityPost.edges.forEach((edge) => {
    createPage({
      path: `/blog/${edge.node.slug.current}`,
      component: blogTemplate,
      context: {
        slug: edge.node.slug.current
      }
    });
  });
  const pages = Math.ceil(res.data.allSanityPost.totalCount / 5);
  Array.from({ length: pages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: blogPageTemplate,
      context: {
        skip: i * 5,
        current: i + 1,
        pages: pages
      }
    });
  });
};
