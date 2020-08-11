import React from 'react'
import FeaturedPost from './featured-post'
import {useStaticQuery, graphql} from 'gatsby'
import {FeaturedPostGrid} from './style'

function Hero() {
  const data = useStaticQuery(graphql`
    query {
      allSanityPost(
        filter: {featured: {eq: true}}
        limit: 4
        sort: {fields: publishedAt, order: DESC}
      ) {
        edges {
          node {
            title
            slug {
              current
            }
            mainImage {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
            _rawExcerpt(resolveReferences: {maxDepth: 10})
            authors {
              author {
                name
              }
            }
            publishedAt(fromNow: true)
          }
        }
      }
    }
  `)

  return (
    <FeaturedPostGrid>
      {data.allSanityPost.edges.map(edge => (
        <FeaturedPost
          title={edge.node.title}
          slug={edge.node.slug.current}
          excerpt={edge.node._rawExcerpt}
          author={edge.node.authors[0].author.name}
          date={edge.node.publishedAt}
          fluid={edge.node.mainImage.asset.fluid}
          key={edge.node.slug.current}
        />
      ))}
    </FeaturedPostGrid>
  )
}

export default Hero
