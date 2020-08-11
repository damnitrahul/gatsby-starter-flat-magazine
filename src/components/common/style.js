import styled from 'styled-components'
import {media} from '../../utils/breakpoints'

const Container = styled.div`
  max-width: ${props => props.width || '1240px'};
  padding-right: 16px;
  padding-left: 16px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
`

const BlogPostCols = styled.div`
  & > div:last-child {
    display: none;
  }
  ${media.lg} {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 250px;
    grid-gap: 2rem;
    & > div:last-child {
      display: block;
    }
  }
`

export {Container, BlogPostCols}
