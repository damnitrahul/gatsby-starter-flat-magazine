import React from 'react';
import { SearchBox } from './style';

import icon from '../../images/icons/icons.svg';
function Search() {
  return (
    <SearchBox>
      <label>
        <svg>
          <use href={icon + '#search'} />
        </svg>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for posts..."
        />
      </label>
    </SearchBox>
  );
}

export default Search;
