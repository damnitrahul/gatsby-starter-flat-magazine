import React from 'react'
import {FeaturedPostBox} from './style'
import Image from 'gatsby-image'
import {Link} from 'gatsby'

function FeaturedPost({image, title, excerpt, author, date, fluid, slug}) {
  return (
    <FeaturedPostBox>
      <Link to={`/blog/${slug}`}>
        <Image fluid={fluid} />
        <h2>
          <span>{title}</span>
        </h2>
        <p>{excerpt}</p>
        <div>
          By<span> {author}</span> &bull; <span>{date}</span>
        </div>
      </Link>
    </FeaturedPostBox>
  )
}

export default FeaturedPost
