import React, {useState} from 'react'
import {graphql, useStaticQuery, Link} from 'gatsby'
import {Index} from 'elasticlunr'
import {SearchBox, SearchResults} from './style'
import icon from '../../images/icons/icons.svg'

function Search() {
  const [isOpen, setOpen] = useState(false)
  const [state, setState] = useState({
    query: ``,
    results: [],
    isActive: false
  })

  const data = useStaticQuery(graphql`
    query {
      siteSearchIndex {
        index
      }
    }
  `)

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
  const handleSearchInput = e => {
    if (e.target.value === '') {
      setOpen(false)
    }
    setState(st => ({
      ...st,
      isActive: false
    }))
  }

  return (
    <SearchBox open={isOpen}>
      <label>
        <svg>
          <use href={icon + '#search'} />
        </svg>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for posts..."
          value={state.query}
          onChange={search}
          autoComplete="off"
          onFocus={() => setOpen(true)}
          onBlur={handleSearchInput}
        />
      </label>
      {state.results.length > 0 && (
        <SearchResults active={state.isActive}>
          {state.results.map(page => (
            <Link
              className="navbar-item"
              key={page.id}
              to={`/blog/${page.slug}`}
              onClick={handleSearchInput}
            >
              <span>{page.title}</span>
            </Link>
          ))}
        </SearchResults>
      )}
    </SearchBox>
  )
}

export default Search
