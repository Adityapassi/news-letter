import React from "react";
import { useState, useEffect } from "react";

const Pagination = ({ posts, currentPage, setCurrentPage }) => {
  // For Pagination
  // For Getting Current Page number

  // setting how much post needed in one page
  const postPerPage = 5;

  // Changing Page Number
  const pagiante = (num) => {
    // if current page number  >=1 then set the page number to num so that it does not go to page 0 which does not exist
    // Second condition check the total number of pages is no more then the total number of pages
    if (num >= 1 && num <= Math.ceil(posts.length / postPerPage)) {
      setCurrentPage(num);

      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(posts.length / postPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div
      className="pagination"
      style={{ display: posts.length > 0 ? "block" : "none" }}
    >
      <ul className="page-btn-cotainer">
        <li
          className="btn"
          style={{ display: currentPage === 1 ? "none" : "block" }}
          onClick={() => pagiante(currentPage - 1)}
        >
          &lt;
        </li>
        {pageNumber.map((num, i) => (
          <li
            key={i}
            onClick={() => pagiante(num)}
            className={currentPage === num ? "btn active" : "btn"}
          >
            {num}
          </li>
        ))}
        <li
          className="btn"
          style={{
            display: currentPage === pageNumber.length ? "none" : "block",
          }}
          onClick={() => pagiante(currentPage + 1)}
        >
          &gt;
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
