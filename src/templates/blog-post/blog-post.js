import React from 'react'
import Layout from '../../components/layout/layout'
import {graphql, Link} from 'gatsby'
import Image from 'gatsby-image'
import BlockContent from '@sanity/block-content-to-react'
import {BlogPostCols} from '../../components/common/style'
import AdsSidebar from '../../components/ads/ads-sidebar'
import {
  PostHeader,
  PostBody,
  AuthorDetails,
  PostImage,
  NextPrevBtn,
  MorePosts
} from './style'
import BlogPostImage from './blog-post-image'
import SyntaxHighlighter from 'react-syntax-highlighter'
import dracula from 'react-syntax-highlighter/dist/esm/styles/hljs/obsidian'
import SEO from '../../components/seo/seo'

export const query = graphql`
  query($slug: String!) {
    sanityPost(slug: {current: {eq: $slug}}) {
      title
      publishedAt(fromNow: true)
      excerpt
      mainImage {
        alt
        caption
        asset {
          url
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      authors {
        author {
          name
          image {
            asset {
              fixed(toFormat: WEBP, width: 50, height: 50) {
                ...GatsbySanityImageFixed
              }
            }
          }
        }
      }
      categories {
        title
      }
      _rawBody(resolveReferences: {maxDepth: 10})
    }
  }
`

const serializers = {
  types: {
    mainImage: ({node}) => <BlogPostImage image={node} />,
    myCode: ({node}) => {
      if (!node.code) return null
      return (
        <SyntaxHighlighter
          language={node.language || 'text'}
          style={dracula}
          wrapLines={true}
          data-language={node.language || 'text'}
        >
          {node.code}
        </SyntaxHighlighter>
      )
    }
  },
  marks: {
    link: ({children, mark}) => (
      <a
        href={mark.href}
        target={mark.blank && '_blank'}
        rel={mark.blank && 'noopener noreferrer'}
      >
        {children}
      </a>
    ),
    internalLink: ({children, mark}) => (
      <Link to={`/blog/${mark.link}`}>{children}</Link>
    )
  }
}

function BlogPost({data, pageContext}) {
  const post = data.sanityPost
  const title = post.title
  const authorName = post.authors[0].author.name
  const authorImage = post.authors[0].author.image.asset.fixed
  const date = post.publishedAt
  const postImg = post.mainImage.asset.fluid
  const imgAlt = post.mainImage.alt
  const {next, prev, nextTitle, prevTitle} = pageContext
  return (
    <Layout>
      <SEO
        title={title}
        description={post.excerpt}
        meta={[
          {
            property: 'twitter:image',
            content: post.mainImage.asset.url
          },
          {
            property: 'og:image',
            content: post.mainImage.asset.url
          }
        ]}
      />
      <PostHeader>
        <h1>{title}</h1>
        <AuthorDetails>
          <Image fixed={authorImage} />
          <p>
            {authorName} <span>{date}</span>
          </p>
        </AuthorDetails>
        <PostImage>
          <Image fluid={postImg} alt={imgAlt} />
        </PostImage>
      </PostHeader>
      <BlogPostCols>
        <PostBody>
          <BlockContent
            blocks={data.sanityPost._rawBody}
            serializers={serializers}
          ></BlockContent>
          <MorePosts>
            <h3>More Recents Posts</h3>
            <NextPrevBtn>
              {prev && (
                <Link to={`/blog/${prev}`}>
                  <span>{prevTitle}</span>
                  <svg viewBox="0 0 13 20">
                    <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                  </svg>
                </Link>
              )}
              {next && (
                <Link className="next" to={`/blog/${next}`}>
                  <span>{nextTitle}</span>
                  <svg viewBox="0 0 13 20">
                    <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                  </svg>
                </Link>
              )}
            </NextPrevBtn>
          </MorePosts>
        </PostBody>
        <AdsSidebar />
      </BlogPostCols>
    </Layout>
  )
}

export default BlogPost
