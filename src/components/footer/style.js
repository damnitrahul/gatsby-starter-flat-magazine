import styled from 'styled-components'
import {media} from '../../utils/breakpoints'

const FooterContainer = styled.footer`
  div.top-footer {
    display: flex;
    flex-direction: column-reverse;
    .social {
      margin: 0 auto;
      a {
        display: inline-block;
        margin: 1rem;
        text-align: center;
        svg {
          fill: var(--text-light);
          width: 22px;
          height: 22px;
          transition: fill 400ms ease;
        }
        &:hover {
          svg {
            fill: var(--text-muted);
          }
        }
      }
    }
    .links {
      margin: 0 auto;
      a {
        color: var(--text-light);
        display: block;
        transition: color 400ms ease;
        text-align: center;
        padding: 1rem;
        &:hover {
          color: var(--text-muted);
        }
      }
    }
  }

  div.bottom-footer {
    text-align: center;
    padding-bottom: 2rem;
    padding-top: 1rem;
    font-size: 0.8rem;
    color: var(--text-light);
  }

  ${media.md} {
    div.top-footer {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .links {
        display: flex;
        margin: 0;
      }
      .social {
        margin: 0;
        a {
          &:first-child {
            margin: 1rem 1rem 1rem 0;
            svg {
              height: 40px;
              width: 40px;
            }
          }
        }
      }
    }
  }
`
export {FooterContainer}
