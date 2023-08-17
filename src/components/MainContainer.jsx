import React from "react";
import Articles from "./Articles";
import RightSidebar from "./RightSidebar";
import SinglePost from "./SinglePost";
import Category from "./Category";
import Search from "./Search";

const MainContainer = ({ single, main, category, search }) => {
  return (
    <div className="main-container">
      <div className="container">
        <div className="main-content">
          {single && <SinglePost />}
          {main && <Articles />}
          {category && <Category />}
          {search && <Search />}
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
