import React from 'react'
import {MobileNavWrapper} from './style'
import {Link} from 'gatsby'

import icon from '../../images/icons/icons.svg'
import ThemeToggle from '../header/themeToggle'

function MobileNav({active, toggleNav}) {
  return (
    <MobileNavWrapper className={active && 'active'}>
      <ul>
        <li style={{transitionDelay: '250ms'}}>
          <Link
            to="/"
            activeClassName="active"
            onClick={toggleNav}
            onKeyPress={toggleNav}
          >
            <span>Lastest</span>
          </Link>
        </li>
        <li style={{transitionDelay: '300ms'}}>
          <Link
            to="/blog"
            activeClassName="active"
            onClick={toggleNav}
            onKeyPress={toggleNav}
          >
            <span>Blog</span>
          </Link>
        </li>
        <li style={{transitionDelay: '350ms'}}>
          <a
            href="https://damnitrahul.com/#contact"
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleNav}
            onKeyPress={toggleNav}
          >
            <span>Contact</span>
          </a>
        </li>
        <li style={{transitionDelay: '400ms'}}>
          <ThemeToggle className="mobile" />
        </li>
      </ul>
      <div onClick={toggleNav} aria-hidden></div>
      <svg viewBox="0 0 100 100" className="close" onClick={toggleNav}>
        <use href={icon + '#close'} />
      </svg>
    </MobileNavWrapper>
  )
}

export default MobileNav
