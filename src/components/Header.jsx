import React from "react";
import { Link } from "react-router-dom";
// import "/style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/images/news.jpg" alt="Logo" />
        </Link>
      </div>
      <ul className="nav">
        <li className="nav-link">
          <Link to="/category/history">History</Link>
        </li>
        <li className="nav-link">
          <Link to="/category/crime">Crime</Link>
        </li>
        <li className="nav-link">
          <Link to="/category/fiction">Fiction</Link>
        </li>
        <li className="nav-link">
          <Link to="/category/classic">Classic</Link>
        </li>
        <li className="nav-link">
          <Link to="/category/american">American</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
