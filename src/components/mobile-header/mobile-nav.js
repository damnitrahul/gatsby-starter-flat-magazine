import React from 'react'
import {MobileNavWrapper} from './style'
import {Link} from 'gatsby'

import icon from '../../images/icons/icons.svg'
import ThemeToggle from '../header/themeToggle'

function MobileNav({active, toggleNav}) {
  return (
    <MobileNavWrapper className={active && 'active'}>
      <ul>
        <li style={{transitionDelay: '250ms'}} onClick={toggleNav}>
          <Link to="/" activeClassName="active">
            <span>Lastest</span>
          </Link>
        </li>
        <li style={{transitionDelay: '300ms'}} onClick={toggleNav}>
          <Link to="/blog" activeClassName="active">
            <span>Blog</span>
          </Link>
        </li>
        <li style={{transitionDelay: '350ms'}} onClick={toggleNav}>
          <a href="#">
            <span>Contact</span>
          </a>
        </li>
        <li style={{transitionDelay: '400ms'}}>
          <ThemeToggle className="mobile" />
        </li>
      </ul>
      <div onClick={toggleNav}></div>
      <svg viewBox="0 0 100 100" className="close" onClick={toggleNav}>
        <use href={icon + '#close'} />
      </svg>
    </MobileNavWrapper>
  )
}

export default MobileNav
