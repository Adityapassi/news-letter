import React, { createContext, useState, useRef } from "react";

export const serarchTermContext = createContext("");

const SearchContext = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);
  return (
    <serarchTermContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </serarchTermContext.Provider>
  );
};

export default SearchContext;
