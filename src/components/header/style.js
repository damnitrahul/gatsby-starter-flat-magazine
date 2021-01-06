import styled from 'styled-components'
import {media} from '../../utils/breakpoints'
const NavHeader = styled.header`
  padding: 1.5rem 0;
  position: sticky;
  top: 0;
  background-color: var(--white);
  z-index: 99;
  position: relative;
  display: none;
  ${media.md} {
    display: block;
  }
`

const NavBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavGroup = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding-left: 2rem;
    li a {
      font-family: 'Jost';
      padding: 1rem;
      font-size: 1.3rem;
      text-decoration: none;
      color: var(--text-dark);
      &.active {
        span {
          font-weight: 600;
          box-shadow: inset 0 -2px 0 var(--highlight);
        }
      }
      span {
        transition: box-shadow 350ms ease;
      }
      &:hover {
        span {
          box-shadow: inset 0 -24px 0 var(--highlight);
        }
      }
    }
  }
`

const SearchGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`

const SearchBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  label {
    border: none;
    border-radius: 5px;
    overflow: hidden;
    height: 40px;
    padding: 0 0.5rem;
    margin-left: auto;
    border: none;
    cursor: pointer;
    &:focus,
    &:active,
    &:focus-within {
      box-shadow: 0 0 2px 4px var(--highlight-shadow);
    }
    input {
      font-size: 1.1rem;
      padding: 0;
      border: none;
      background-color: transparent;
      height: 100%;
      width: ${({open}) => (open ? 300 : 0)}px;
      transition: width 300ms ease, padding 300ms ease;
      padding: ${({open}) => (open ? '0.5rem' : 0)};
      color: var(--text-dark);
      &:focus,
      &:active {
        outline: none;
      }
    }
    svg {
      fill: var(--text-dark);
      padding: 0;
      width: 1.5rem;
      height: 100%;
      line-height: 2.5rem;
      vertical-align: middle;
      transition: fill 300ms ease;
    }
    &:hover,
    &:focus,
    &:active,
    &:focus-within {
      svg {
        fill: var(--orange);
      }
    }
  }
  &:focus-within {
    div {
      display: block;
    }
  }
`
const SearchResults = styled.div`
  position: absolute;
  display: ${({active}) => !active && 'none'};
  z-index: 3;
  left: 0;
  right: 0;
  top: 100%;
  background: var(--white);
  border-radius: 0 0 5px 5px;
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid var(--text-light);
  box-shadow: 0 2px 6px var(--highlight-shadow);
  a {
    padding: 0.5rem 1rem;
    display: block;
    border-bottom: 1px solid var(--text-light);
    min-height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    span {
      display: block;
    }
    &:hover {
      color: var(--orange);
    }
    &:last-child {
      border-bottom: none;
    }
  }
`

const Logo = styled.div`
  max-width: 160px;
  img {
    width: 100%;
  }
`

const ToggleIcon = styled.div`
  width: 2.35rem;

  cursor: pointer;
  svg {
    fill: var(--text-dark);
    height: 25px;
    width: 100%;
    line-height: 2.5rem;
    vertical-align: middle;
    transition: fill 300ms ease;
  }
  &:hover {
    svg {
      fill: var(--orange);
    }
  }
  &.mobile {
    svg {
      display: block;
      margin-right: auto;
      width: 2rem;
    }
  }
  ${media.md} {
    margin-left: 1.5rem;
    padding: 0.1rem;
  }
`

export {
  NavHeader,
  NavBar,
  NavGroup,
  SearchGroup,
  Logo,
  SearchBox,
  ToggleIcon,
  SearchResults
}
