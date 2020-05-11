import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allSanityPost {
        edges {
          node {
            slug {
              current
            }
            title
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <ul>
        {data.allSanityPost.edges.map((edge) => (
          <li>
            <Link to={`/blog/${edge.node.slug.current}`}>
              {edge.node.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default SecondPage;
