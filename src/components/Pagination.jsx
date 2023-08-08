import React from "react";
import { Fragment, useState, useEffect } from "react";

const Pagination = ({ postPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="pagination">
      <ul className="page-btn-cotainer">
        <li className="btn" onClick={() => paginate(currentPage - 1)}>
          &lt;
        </li>
        {pageNumber.map((num, i) => (
          <li
            key={i}
            onClick={() => paginate(num)}
            className={currentPage === num ? "btn active" : "btn"}
          >
            {num}
          </li>
        ))}
        <li className="btn" onClick={() => paginate(currentPage + 1)}>
          &gt;
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
