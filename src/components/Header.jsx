import React from "react";
import { Link } from "react-router-dom";
// import "/style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/images/news.jpg" alt="" />
        </Link>
      </div>
      <ul className="nav">
        <li className="nav-link">Business</li>
        <li className="nav-link">Sports</li>
        <li className="nav-link">Entertainmant</li>
        <li className="nav-link">Politics</li>
      </ul>
    </header>
  );
};

export default Header;
