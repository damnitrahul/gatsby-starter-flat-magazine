import React from 'react'
import {LatestPostGroup} from './style'
import {useStaticQuery, graphql} from 'gatsby'
import BlogPostCard from '../blog-post-card/blog-post-card'

function LatestPosts() {
  const data = useStaticQuery(graphql`
    query {
      allSanityPost(
        sort: {fields: publishedAt, order: DESC}
        filter: {featured: {ne: true}}
      ) {
        edges {
          node {
            title
            slug {
              current
            }
            mainImage {
              asset {
                url
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
    <LatestPostGroup>
      {data.allSanityPost.edges.map(edge => (
        <BlogPostCard
          title={edge.node.title}
          slug={edge.node.slug.current}
          image={edge.node.mainImage.asset.url}
          excerpt={edge.node._rawExcerpt}
          author={edge.node.authors[0].author.name}
          date={edge.node.publishedAt}
          fluid={edge.node.mainImage.asset.fluid}
          key={edge.node.slug.current}
        />
      ))}
    </LatestPostGroup>
  )
}

export default LatestPosts
