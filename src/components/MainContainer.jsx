import React from "react";
import Articles from "./Articles";
import RightSidebar from "./RightSidebar";
import SinglePost from "./SinglePost";

const MainContainer = ({ single }) => {
  return (
    <div className="main-container">
      <div className="container">
        <div className="main-content">
          {single ? <SinglePost /> : <Articles />}
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
