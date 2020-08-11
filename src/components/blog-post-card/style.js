import styled from 'styled-components'
import {media} from '../../utils/breakpoints'

const BlogPostBox = styled.div`
  margin: 2rem 0;

  div.post {
    h2 {
      font-size: 1.2rem;
      span {
        transition: box-shadow 350ms cubic-bezier(0.68, -0.1, 0.265, 1.55);
      }
    }
    .gatsby-image-wrapper {
      height: 220px;
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 1rem;
    }
    div.post-details {
      display: flex;
      flex-direction: column;
      p {
        padding: 1rem 0 0.5rem;
      }
      div {
        color: var(--text-muted);
      }
    }

    &:hover {
      h2 {
        span {
          box-shadow: inset 0 -10px 0 var(--highlight);
        }
      }
    }
    ${media.md} {
      display: flex;
      justify-content: start;
      align-items: flex-start;
      height: 100%;
      h2 {
        font-size: 1.5rem;
      }
      .gatsby-image-wrapper {
        height: 180px;
        margin-bottom: 0;
        min-width: 280px;
        width: 280px;
        img {
          display: block;
        }
      }
      div.post-details {
        padding: 0 2rem;
      }
    }
  }
`

export {BlogPostBox}
