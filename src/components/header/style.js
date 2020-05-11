import styled from 'styled-components';

const NavHeader = styled.header`
  padding: 2rem 0;
`;

const NavBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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
    }
  }
`;

const SearchGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
      box-shadow: 0 0 2px 4px #ff8b643a;
    }
    input {
      font-size: 1.1rem;
      padding: 0;
      border: none;
      background-color: transparent;
      height: 100%;
      width: 0px;
      transition: width 500ms ease;
      &:focus,
      &:active {
        outline: none;
        width: 300px;
        padding: 0.5rem;
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
`;

const Logo = styled.div`
  max-width: 175px;
  img {
    width: 100%;
  }
`;

const ToggleIcon = styled.div`
  width: 2.35rem;
  margin-left: 1.5rem;
  padding: 0.5rem;
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
`;

export {
  NavHeader,
  NavBar,
  NavGroup,
  SearchGroup,
  Logo,
  SearchBox,
  ToggleIcon
};
