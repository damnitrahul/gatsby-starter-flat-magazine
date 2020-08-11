import styled from 'styled-components'
import {media} from '../../utils/breakpoints'
import info from '../../images/icons/info.svg'
import arrow from '../../images/icons/chevron.svg'

const PostHeader = styled.div`
  padding: 2rem 0;
  h1 {
    font-size: 2rem;
    text-align: center;
    padding: 1rem 0;
  }

  ${media.md} {
    h1 {
      font-size: 4rem;
    }
  }
`
const AuthorDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .gatsby-image-wrapper {
    border-radius: 50px;
  }
  p {
    font-weight: 600;
    padding: 0 2rem;
    span {
      display: block;
      font-weight: 400;
    }
  }
`
const PostImage = styled.div`
  .gatsby-image-wrapper {
    border-radius: 15px;
    max-height: 600px;
  }
  padding: 2rem 0;
`
const PostBody = styled.article`
  padding-bottom: 2rem;
  h1 {
    font-size: 2.2rem;
  }
  h2 {
    font-size: 1.7rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1.2rem;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.4;
    padding: 1rem 0;
  }
  a {
    font-weight: 600;
    box-shadow: inset 0 -2px 0 var(--highlight);
    transition: box-shadow 350ms ease;
    &:hover {
      box-shadow: inset 0 -19px 0 var(--highlight);
    }
  }
  .gatsby-image-wrapper {
    border-radius: 15px;
    margin: 1.5rem 0;
  }
  ul {
    padding: 2rem;
    list-style: none;
    li {
      font-size: 1.2rem;
      line-height: 1.4;
      padding: 0.2rem 0;
      position: relative;
      &:before {
        content: '';
        position: absolute;
        height: 100%;
        width: 30px;
        left: -30px;
        background: url(${arrow}) center center / cover;
      }
    }
  }

  ol {
    padding: 2rem 0.4rem;
    li {
      font-size: 1.2rem;
      line-height: 1.4;
      padding: 0.2rem 0;
      list-style-type: none;
      counter-increment: step-counter;
      &:before {
        content: counter(step-counter);
        margin-right: 10px;
        font-size: 80%;
        background-color: var(--blue);
        color: white;
        font-weight: bold;
        padding: 2px 6px;
        border-radius: 3px;
      }
    }
  }

  blockquote {
    padding: 1rem 2rem;
    margin: 2rem 0;
    background: #5855e03a;
    border-radius: 10px;
    border-left: 4px solid var(--two);
    font-size: 1.2rem;
    line-height: 1.4;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      border: var(--white) 5px solid;
      border-radius: 50px;
      height: 45px;
      width: 45px;
      left: -22.5px;
      top: -22.5px;
      background: url(${info}) var(--white) center center / cover;
    }
  }

  pre {
    padding: 2.3rem 1rem 1rem 1rem !important;
    background: #3d3d3d;
    color: #f8f8f8;
    line-height: 1.5;
    font-size: 1rem;
    border-radius: 10px;
    font-family: 'Sen', monospace;
    position: relative;
    code {
      font-family: 'Fira Mono', monospace;
    }
    &:after {
      content: attr(data-language);
      position: absolute;
      left: 0;
      top: 0;
      padding: 0.3rem 0.6rem;
      border-radius: 5px;
      background: rgba(0, 0, 0, 0.1);
      /* color: red; */
    }
  }
`
const NextPrevBtn = styled.div`
  display: block;
  a {
    box-shadow: none;
    display: block;
    padding: 1rem 0;
    /* Arrow Animation from codepen https://codepen.io/aaroniker/pen/pojaBvb?editors=1100 */
    --line: var(--orange);
    text-decoration: none;
    color: var(--color);
    position: relative;

    span {
      background-image: linear-gradient(0deg, var(--line) 0%, var(--line) 100%);
      background-position: 100% 100%;
      background-repeat: no-repeat;
      background-size: var(--background-size, 100%) 1px;
      transition: background-size 0.2s linear var(--background-delay, 0.15s);
      font-size: 1.1rem;
      line-height: 22px;
      transform: translateZ(0);
    }
    svg {
      vertical-align: top;
      display: inline;
      line-height: 1;
      width: 13px;
      height: 27px;
      position: relative;
      left: -2px;
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 1px;
      stroke: var(--line);
      stroke-dasharray: 7.95 30;
      stroke-dashoffset: var(--stroke-dashoffset, 46);
      transition: stroke-dashoffset var(--stroke-duration, 0.15s)
        var(--stroke-easing, linear) var(--stroke-delay, 0s);
    }
    &:hover {
      --background-size: 0%;
      --background-delay: 0s;
      --stroke-dashoffset: 26;
      --stroke-duration: 0.3s;
      --stroke-easing: cubic-bezier(0.3, 1.5, 0.5, 1);
      --stroke-delay: 0.195s;
    }
    /* Animation End */

    span {
      transition: box-shadow 350ms ease;
      box-shadow: inset 0 -2px 0 var(--highlight);
    }
    &:hover {
      box-shadow: none;
      span {
        box-shadow: inset 0 -19px 0 var(--highlight);
      }
    }

    &.next {
      margin-left: auto;
      text-align: right;
    }
  }
  ${media.md} {
    display: flex;
    a {
      width: 50%;
    }
  }
`

const MorePosts = styled.div`
  margin-top: 2rem;
`
export {PostHeader, PostBody, AuthorDetails, PostImage, NextPrevBtn, MorePosts}
