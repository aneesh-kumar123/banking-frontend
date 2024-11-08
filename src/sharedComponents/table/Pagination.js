import React from 'react';

const Pagination = ({ page, setPage, totalPages }) => {
  const handlePrevious = () => {
    setPage(page === 1 ? totalPages : page - 1); // Circular pagination for "Previous"
  };

  const handleNext = () => {
    setPage(page === totalPages ? 1 : page + 1); // Circular pagination for "Next"
  };

  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button className="page-link" onClick={handlePrevious} disabled={totalPages <= 1}>
            Previous
          </button>
        </li>
        {[...Array(totalPages)].map((_, index) => (
          <li key={index} className={`page-item ${page === index + 1 ? 'active' : ''}`}>
            <button className="page-link" onClick={() => handlePageClick(index + 1)}>
              {index + 1}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button className="page-link" onClick={handleNext} disabled={totalPages <= 1}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
