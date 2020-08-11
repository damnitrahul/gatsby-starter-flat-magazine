import React from 'react'
import {MobileHead, MobileLogo} from './style'
import logo from '../../images/logo.png'
import MobileSearch from './mobile-search'
import {Link} from 'gatsby'
function MobileHeader() {
  return (
    <MobileHead>
      <MobileLogo>
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
      </MobileLogo>
      <MobileSearch />
    </MobileHead>
  )
}

export default MobileHeader
