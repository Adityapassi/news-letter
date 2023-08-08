import React from "react";
import SearchBox from "./SearchBox";
import RecentPost from "./RecentPost";

const RightSidebar = () => {
  return (
    <aside className="right-sidebar">
      <SearchBox />
      <RecentPost />
    </aside>
  );
};

export default RightSidebar;
