import styled from 'styled-components'
import {media} from '../../utils/breakpoints'
const LatestPostGroup = styled.section`
  & > div:first-child {
    margin: 0;
  }
  ${media.md} {
    & > div:first-child {
      margin: 2rem 0;
    }
  }
`

export {LatestPostGroup}
