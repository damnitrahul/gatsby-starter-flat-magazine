import React from 'react';
import { Paginate } from './style';
import { Link } from 'gatsby';
import icon from '../../images/icons/icons.svg';
function Pagination({ currentPage, totalPage }) {
  const nextPage = currentPage + 1;
  const prevPage = currentPage === 2 ? '' : currentPage - 1;

  const isNextDead = currentPage === totalPage && true;
  const isPrevDead = currentPage === 1 && true;

  return (
    <Paginate>
      <Link
        className={`pageNav ${isPrevDead && 'disabled'}`}
        to={`/blog/${prevPage}`}
      >
        <svg>
          <use href={icon + '#left'} />
        </svg>
      </Link>
      <div>
        {currentPage} / <Link to={`/blog/${totalPage}`}>{totalPage}</Link>
      </div>
      <Link
        className={`pageNav ${isNextDead && 'disabled'}`}
        to={`/blog/${nextPage}`}
      >
        <svg>
          <use href={icon + '#right'} />
        </svg>
      </Link>
    </Paginate>
  );
}

export default Pagination;
