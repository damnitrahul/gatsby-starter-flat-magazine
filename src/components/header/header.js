import React from 'react'
import Search from './search'
import ThemeToggle from './themeToggle'
import {NavHeader, NavBar, NavGroup, Logo, SearchGroup} from './style'
import logo from '../../images/logo.png'
import {Link} from 'gatsby'
import {Container} from '../common/style'

function Header() {
  return (
    <NavHeader>
      <Container>
        <NavBar>
          <NavGroup>
            <Logo>
              <Link to="/">
                <img src={logo} alt="Blog Logo" />
              </Link>
            </Logo>
            <ul>
              <li>
                <Link to="/" activeClassName="active">
                  <span>Latest</span>
                </Link>
              </li>
              <li>
                <Link to="/blog" activeClassName="active">
                  <span>Blog</span>
                </Link>
              </li>
              <li>
                <a
                  href="https://damnitrahul.com/#contact"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </NavGroup>
          <SearchGroup>
            <Search />
            <ThemeToggle />
          </SearchGroup>
        </NavBar>
      </Container>
    </NavHeader>
  )
}

export default Header
