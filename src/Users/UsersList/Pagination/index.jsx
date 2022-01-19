import React from "react";

const Pagination = ({ currentPage, totalPages, nextPage, prevPage }) => {
  return (
    <div className="pagination">
      <i
        className="ri-arrow-left-circle-fill"
        onClick={() => {
          prevPage();
        }}
      ></i>
      {`${currentPage + 1} of ${totalPages + 1} pages.`}
      <i
        className="ri-arrow-right-circle-fill"
        onClick={() => {
          nextPage();
        }}
      ></i>
    </div>
  );
};

export default Pagination;
