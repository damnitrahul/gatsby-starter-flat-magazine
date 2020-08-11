import React from 'react'
import BlogPostCard from '../../components/blog-post-card/blog-post-card'

function BlogPosts({data}) {
  return (
    <div>
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
    </div>
  )
}

export default BlogPosts
