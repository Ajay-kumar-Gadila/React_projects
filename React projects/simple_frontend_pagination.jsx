import React, { useState } from 'react';

const Pagination = ({ data, itemsPerPage, currentPage, setCurrentPage }) => {
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNext}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= pageNumberLimit) {
    pageDecrementBtn = <li onClick={handlePrev}> &hellip; </li>;
  }

  const renderPageNumbers = pages
    .filter(
      (pageNumber) =>
        pageNumber <= maxPageNumberLimit && pageNumber >= minPageNumberLimit
    )
    .map((pageNumber) => {
      return (
        <li
          key={pageNumber}
          id={pageNumber}
          onClick={handleClick}
          className={currentPage === pageNumber ? 'active' : null}
        >
          {pageNumber}
        </li>
      );
    });

  return (
    <div>
      <ul className="pageNumbers">
        <li>
          <button onClick={handlePrev} disabled={currentPage === pages[0]}>
            Prev
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
        <li>
          <button
            onClick={handleNext}
            disabled={currentPage === pages[pages.length - 1]}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
