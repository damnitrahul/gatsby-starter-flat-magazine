import styled from 'styled-components'
import {media} from '../../utils/breakpoints'

const FeaturedPostBox = styled.div`
  .gatsby-image-wrapper {
    border-radius: 8px;
    overflow: hidden;
    height: 220px;
    transition: box-shadow 350ms ease;
  }
  h2 {
    margin-top: 1rem;
    span {
      transition: box-shadow 350ms ease;
    }
  }
  p {
    padding: 1rem 0 0.5rem;
  }
  div {
    color: var(--text-muted);
    padding-bottom: 1rem;
  }
  &:hover {
    .gatsby-image-wrapper {
      box-shadow: rgba(0, 0, 0, 0.25) 0px 18px 26px -18px;
    }
    h2 {
      span {
        box-shadow: inset 0 -17px 0 var(--highlight);
      }
    }
  }

  ${media.md} {
    .gatsby-image-wrapper {
      height: 280px;
    }
    h2 {
      font-size: 1.7rem;
    }
  }
`

const FeaturedPostGrid = styled.section`
  padding-bottom: 2rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;

  ${media.md} {
    display: grid;
    grid-template-areas:
      'one one one one two two two'
      'three three three four four four four';
    grid-template-columns: repeat(7, 1fr);
    gap: 1rem;
    & > div:nth-child(1) {
      grid-area: one;
    }
    & > div:nth-child(2) {
      grid-area: two;
    }
    & > div:nth-child(3) {
      grid-area: three;
    }
    & > div:nth-child(4) {
      grid-area: four;
    }
  }
`

export {FeaturedPostBox, FeaturedPostGrid}
