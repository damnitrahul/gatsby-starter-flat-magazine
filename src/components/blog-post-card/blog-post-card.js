import React from 'react'
import {BlogPostBox} from './style'
import Image from 'gatsby-image'
import {Link} from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'
function BlogPostCard({title, excerpt, author, date, fluid, slug}) {
  return (
    <BlogPostBox>
      <Link to={`/blog/${slug}`}>
        <div className="post">
          <Image fluid={fluid} />
          <div className="post-details">
            <h2>
              <span>{title}</span>
            </h2>
            <BlockContent blocks={excerpt}></BlockContent>
            <div>
              By<span> {author}</span> &bull; <span>{date}</span>
            </div>
          </div>
        </div>
      </Link>
    </BlogPostBox>
  )
}

export default BlogPostCard
