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

// Discarded Code to test Screen Size, Caused Weird Issue where no Header Will Show up.
// const [isDesktop, setDesktop] = useState(
//   typeof window !== 'undefined' ? window.innerWidth > 768 : false
// );

// useEffect(() => {
//   if (typeof window !== 'undefined') {
//     const updateMedia = () => {
//       setDesktop(window.innerWidth > 768);
//     };

//     window.addEventListener('resize', updateMedia);
//     return () => window.removeEventListener('resize', updateMedia);
//   }
// });

// if (isDesktop) return null;
