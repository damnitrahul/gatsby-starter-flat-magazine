import React, {useState, useEffect} from 'react'
import {MobileSearchWrapper, SearchBoxWrapper, SearchBox} from './style'
import {SearchResults} from '../header/style'
import Hamburger from './hamburger'
import icon from '../../images/icons/icons.svg'
import {graphql, useStaticQuery, Link} from 'gatsby'
import {Index} from 'elasticlunr'
import MobileNav from './mobile-nav'
function MobileSearch() {
  const data = useStaticQuery(graphql`
    query {
      siteSearchIndex {
        index
      }
    }
  `)

  const [isOpen, setOpen] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const [state, setState] = useState({
    query: ``,
    results: [],
    isActive: false
  })

  useEffect(() => {
    document.documentElement.style.overflowY = navOpen ? 'hidden' : 'auto'
  }, [navOpen])

  useEffect(() => {
    setState({query: ``, results: [], isActive: false})
  }, [isOpen])

  let index = null
  const getOrCreateIndex = () =>
    index ? index : Index.load(data.siteSearchIndex.index)

  const search = evt => {
    const query = evt.target.value
    index = getOrCreateIndex()
    setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: index
        .search(query, {expand: true}) // Accept partial matches
        // Map over each ID and return the full document
        .map(({ref}) => index.documentStore.getDoc(ref)),
      isActive: !!query
    })
  }

  const handleToggle = () => {
    if (isOpen) return setOpen(false)
    if (navOpen) return setNavOpen(false)
    return setNavOpen(true)
  }

  return (
    <MobileSearchWrapper>
      <SearchBoxWrapper className={isOpen && 'active'}>
        <SearchBox>
          <Hamburger toggle={handleToggle} hamIconActive={isOpen} />
          <label htmlFor="search">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search for posts..."
              value={state.query}
              onChange={search}
              autoComplete="off"
              onFocus={() => setOpen(true)}
            />
            <svg viewBox="0 -3 32 33">
              <use href={icon + '#search'} />
            </svg>
          </label>
          <SearchResults active={state.isActive}>
            {state.results.map(page => (
              <Link
                className="navbar-item"
                key={page.id}
                to={`/blog/${page.slug}`}
                onClick={() => setOpen(false)}
              >
                <span>{page.title}</span>
              </Link>
            ))}
          </SearchResults>
        </SearchBox>
      </SearchBoxWrapper>
      <MobileNav active={navOpen} toggleNav={handleToggle} />
    </MobileSearchWrapper>
  )
}

export default MobileSearch
