import React from 'react';
import { MobileNavWrapper } from './style';
import { Link } from 'gatsby';

import icon from '../../images/icons/icons.svg';
import ThemeToggle from '../header/themeToggle';

function MobileNav({ active, toggleNav }) {
  return (
    <MobileNavWrapper className={active && 'active'}>
      <ul>
        <li style={{ transitionDelay: '250ms' }} onClick={toggleNav}>
          <Link to="/"> Lastest </Link>
        </li>
        <li style={{ transitionDelay: '300ms' }} onClick={toggleNav}>
          <Link to="/blog"> Blog </Link>
        </li>
        <li style={{ transitionDelay: '350ms' }} onClick={toggleNav}>
          <a href="#"> Contact </a>
        </li>
        <li style={{ transitionDelay: '400ms' }}>
          <ThemeToggle className="mobile" />
        </li>
      </ul>
      <div onClick={toggleNav}></div>
      <svg viewBox="0 0 100 100" onClick={toggleNav}>
        <use href={icon + '#close'} />
      </svg>
    </MobileNavWrapper>
  );
}

export default MobileNav;
