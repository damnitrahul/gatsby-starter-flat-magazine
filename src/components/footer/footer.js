import React from 'react'
import {FooterContainer} from './style'
import {Container} from '../common/style'
import icon from '../../images/icons/icons.svg'
import {Link} from 'gatsby'

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <div className="top-footer">
          <div className="social">
            <a
              href="https://damnitrahul.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg>
                <use href={icon + '#logo'} />
              </svg>
            </a>
            <a
              href="http://twitter.com/damnitrahul"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg>
                <use href={icon + '#twitter'} />
              </svg>
            </a>
            <a
              href="https://github.com/damnitrahul/gatsby-starter-flat-magazine"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg>
                <use href={icon + '#github'} />
              </svg>
            </a>
            <a
              href="https://instagram.com/damnitrahul"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg>
                <use href={icon + '#instagram'} />
              </svg>
            </a>
          </div>
          <div className="links">
            <Link to="/">Latest</Link>
            <Link to="/blog">Blog</Link>
            <a
              href="https://damnitrahul.com/#contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="bottom-footer">
          <p>Copyright &copy; Rahul Raj</p>
        </div>
      </Container>
    </FooterContainer>
  )
}

export default Footer
