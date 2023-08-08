import React from "react";

const SearchBox = () => {
  return (
    <div className="search-box">
      <h4 className="search-box__title">Search</h4>
      <div className="serach-box-container">
        <input type="text" placeholder="Search..." className="serach-input" />
        <button className="btn searach-btn">Search</button>
      </div>
    </div>
  );
};

export default SearchBox;
