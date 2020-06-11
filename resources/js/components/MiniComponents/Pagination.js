import React from 'react';

const Pagination = ({ filmsPerPage, totalFilms, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalFilms / filmsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className=" pageNav ">
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={(e) => paginate(e,number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;