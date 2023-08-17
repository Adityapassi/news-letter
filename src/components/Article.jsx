import { LocalOffer } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const Article = ({ data }) => {
  const { id, title, body, tags } = data;
  const url = id;

  return (
    <div className="article">
      <div className="article-img">
        <img src="/images/post_1.jpg" alt={title} />
      </div>
      <div className="article-desc">
        <h2 className="article-title">
          <Link to={`/post/${url}`}>{title}</Link>
        </h2>
        <div className="article-tags">
          <LocalOffer className="tag-icon" />
          {tags.map((value) => (
            <span className="tag-name" key={value} onClick={scrollTo(0, 0)}>
              <Link to={`/category/${value}`}>{value}</Link>
            </span>
          ))}
        </div>
        <p className="article-text">{body.substr(0, 200) + "..."}</p>

        <button className="read-more-btn btn">
          <Link to={`/post/${url}`}>Read More</Link>
        </button>
      </div>
    </div>
  );
};

export default Article;
