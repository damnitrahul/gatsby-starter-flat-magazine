import React, { useEffect, useState } from 'react';
import Search from './search';
import ThemeToggle from './themeToggle';
import { NavHeader, NavBar, NavGroup, Logo, SearchGroup } from './style';
import logo from '../../images/logo.png';
import { Link } from 'gatsby';
import { Container } from '../common/style';

function Header() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });
  if (!isDesktop) return null;

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
                <Link to="/">Latest</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <a
                  href="https://damnitrahul.com/#contact"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact
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
  );
}

export default Header;
