import React from 'react';
import Image from 'gatsby-image';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';

function BlogPostImage({ image }) {
  const sanityConfig = {
    projectId: process.env.GATSBY_PROJECT_ID,
    dataset: process.env.GATSBY_PROJECT_DATASET
  };
  return (
    <Image
      fluid={getFluidGatsbyImage(
        image.asset._id,
        { maxWidth: 950 },
        sanityConfig
      )}
      alt={image.alt}
      caption={image.caption}
    />
  );
}

export default BlogPostImage;
