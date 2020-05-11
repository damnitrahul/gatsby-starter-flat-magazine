import styled from 'styled-components';
import { media } from '../../utils/breakpoints';
import info from '../../images/icons/info.svg';
import arrow from '../../images/icons/chevron.svg';

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
`;
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
`;
const PostImage = styled.div`
  .gatsby-image-wrapper {
    border-radius: 15px;
    max-height: 600px;
  }
  padding: 2rem 0;
`;
const PostBody = styled.article`
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
    box-shadow: inset 0 -2px 0 #ff8b646b;
    transition: box-shadow 350ms ease;
    &:hover {
      box-shadow: inset 0 -19px 0 #ff8b646b;
    }
  }
  .gatsby-image-wrapper {
    border-radius: 15px;
    margin: 3rem 0;
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

  blockquote {
    padding: 1rem 2rem;
    margin: 2rem 0;
    background: #5855e03a;
    border-radius: 10px;
    border-left: 4px solid var(--two);
    font-size: 1.4rem;
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
    padding: 2rem !important;
    background: #3d3d3d;
    color: #f8f8f8;
    font-size: 1.2rem;
    border-radius: 10px;
    font-family: 'Sen', monospace;
    code {
      font-family: 'Fira Mono', monospace;
    }
  }
`;

export { PostHeader, PostBody, AuthorDetails, PostImage };
