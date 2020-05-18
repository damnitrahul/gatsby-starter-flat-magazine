import React, { useState, useEffect } from 'react';
import { MobileHead, MobileSearchWrapper, MobileLogo } from './style';
import MobileNav from './mobile-nav';
import logo from '../../images/logo.png';
import MobileSearch from './mobile-search';
import Hamburger from './hamburger';
import { Link } from 'gatsby';
function MobileHeader() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const updateMedia = () => {
      setDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  if (isDesktop) return null;

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
  );
}

export default MobileHeader;
