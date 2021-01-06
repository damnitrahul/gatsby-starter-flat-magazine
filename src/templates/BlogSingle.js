import React from 'react'
import {graphql} from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'
import urlBuilder from '@sanity/image-url'

export const query = graphql`
  query($slug: String!) {
    sanityPost(slug: {current: {eq: $slug}}) {
      title
      _rawBody(resolveReferences: {maxDepth: 10})
    }
  }
`

const urlFor = source =>
  urlBuilder({
    projectId: process.env.GATSBY_PROJECT_ID,
    dataset: process.env.GATSBY_PROJECT_DATASET
  }).image(source)

const serializers = {
  types: {
    image: props => <img src={urlFor(props.node.asset).url()} alt="" />
  }
}

function BlogSingle({data}) {
  return (
    <>
      <h1>{data.sanityPost.title}</h1>
      <BlockContent
        blocks={data.sanityPost._rawBody}
        serializers={serializers}
      ></BlockContent>
    </>
  )
}

export default BlogSingle
