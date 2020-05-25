import styled from 'styled-components';
import { media } from '../../utils/breakpoints';

const MobileHead = styled.header`
  padding: 1rem 0;
  ${media.md} {
    display: none;
  }
`;
const MobileNavWrapper = styled.nav`
  background: var(--blur-bg);
  position: fixed;
  top: 0;
  left: -110%;
  width: 100%;
  bottom: 0;
  z-index: 999;
  backdrop-filter: blur(8px);
  touch-action: none;
  opacity: 0;
  transition: left 350ms ease 300ms, opacity 350ms ease 300ms;
  display: flex;
  div {
    height: 100%;
    flex: 1;
  }

  ul {
    width: 100%;
    max-width: fit-content;
    padding-top: 30%;
    height: 100%;
    list-style: none;
    li {
      a {
        padding: 1rem 3rem;
        display: block;
        font-size: 1.5rem;
        font-weight: 700;
      }
      transform: translateX(-100%);
      transition: transform 450ms ease 0ms;
    }
  }
  svg {
    width: 40px;
    height: 40px;
    fill: var(--text-muted);
    position: absolute;
    top: 20px;
    right: 20px;
  }

  &.active {
    left: 0;
    opacity: 1;
    transform: translate3d(0);
    transition: left 350ms ease 0ms, opacity 350ms ease 0ms;
    ul {
      li {
        transform: translateX(0);
        transition: transform 450ms ease 250ms;
      }
    }
  }
`;
const MobileLogo = styled.div`
  margin-bottom: 1rem;
  div {
    max-width: 150px;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
`;
const MobileSearchWrapper = styled.div``;
export { MobileHead, MobileNavWrapper, MobileSearchWrapper, MobileLogo };

// Search Bar

const SearchBoxWrapper = styled.div`
  border-radius: 5px;
  margin: 0 1rem;
  touch-action: none;
  top: 60px;
  left: 16px;
  right: 16px;
  bottom: 85%;
  transform: translate3d(0);
  transition: margin 350ms ease, top 350ms ease, left 350ms ease,
    right 350ms ease, bottom 350ms ease;

  &.active {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 0;
    background: var(--white);
    padding: 4rem 1rem;
    z-index: 999;
    border-radius: 0px;

    & > div {
      box-shadow: 0 0 2px 4px var(--highlight-shadow);
    }
  }
`;
const SearchBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-radius: 5px;
  box-shadow: 2px 0 24px rgba(0, 0, 0, 0.1);
  align-items: center;
  label {
    display: block;
    display: flex;
    flex: 1;

    input {
      flex: 1;
      border: none;
      padding: 0.5rem;
      background: var(--white);
      color: var(--text-dark);

      &:focus {
        outline: none;
      }
    }
    svg {
      fill: var(--text-dark);
      padding: 0;
      width: 35px;
      height: 35px;
      line-height: 2.5rem;
      vertical-align: middle;
      transition: fill 300ms ease;
    }
  }

  &:hover,
  &:focus,
  &:active,
  &:focus-within {
    svg {
      fill: var(--orange);
    }
  }
`;

export { SearchBoxWrapper, SearchBox };
