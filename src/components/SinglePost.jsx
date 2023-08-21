import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useAPICall } from "../utility/useAPICall";
import Loader from "./Loader";

const SinglePost = () => {
  const { postId } = useParams();
  const [post, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const url = "https://dummyjson.com/post/" + postId;
  useEffect(() => {
    useAPICall(url)
      .then((val) => {
        setPosts(val.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [postId]);

  return (
    <Fragment>
      <div className="single-post">
        {error ? (
          <Navigate to="*" />
        ) : loading ? (
          <Loader />
        ) : (
          <Fragment>
            <h2 className="single-post-title">{post.title}</h2>
            <div className="single-post-img">
              <img src="/images/post_1.jpg" alt="" />
            </div>
            <p className="single-post-content">{post.body}</p>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default SinglePost;
