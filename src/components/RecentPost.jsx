import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAPICall } from "../utility/useAPICall";

const RecentPost = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    useAPICall("https://dummyjson.com/posts?limit=5").then((val) => {
      setPost(val.data.posts);
    });
  }, []);

  return (
    <div className="recent-posts">
      <ul className="recent-post-container">
        <h4 className="recent-post-head">Recent Posts</h4>
        {posts?.map((val) => (
          <li className="recent-post" key={val.id}>
            <div className="recent-post-img">
              <img src="/images/post-format.jpg" alt="Recent Post" />
            </div>
            <div className="recent-post__desc">
              <h5 className="recent-post-title">
                <Link to={`/post/${val.id}`}>{val.title}</Link>
              </h5>
              <button className="recent-post-btn btn">
                <Link to={`/post/${val.id}`}>Read More</Link>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentPost;
