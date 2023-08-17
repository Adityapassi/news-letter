import React, { useContext, useState, useRef } from "react";
import { serarchTermContext } from "../context/SearchContext";
import { Link } from "react-router-dom";

const SearchBox = () => {
  const { setSearchTerm } = useContext(serarchTermContext);
  const [input, setInput] = useState("");
  return (
    <div className="search-box">
      <h4 className="search-box__title">Search</h4>
      <div className="serach-box-container">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="btn searach-btn"
          onClick={() => {
            setSearchTerm(input);
            scrollTo(0, 0);
          }}
        >
          <Link to="/search">Search</Link>
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
