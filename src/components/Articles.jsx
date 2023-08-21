import { useContext, useEffect, useState } from "react";
import { useAPICall } from "../utility/useAPICall";
import Pagination from "./Pagination";
import Article from "./Article";
import Loader from "./Loader";
import { Navigate } from "react-router-dom";

const Articles = () => {
  let [posts, setPosts] = useState([]);
  let [loading, setLoading] = useState(true);
  let [currentPage, setCurrentPage] = useState(1);
  let [error, setError] = useState("");

  useEffect(() => {
    useAPICall("https://dummyjson.com/posts")
      .then((res) => {
        setPosts(res.data.posts);
        setLoading(false);
      })
      .catch((err) => setError(err));
  }, []);

  const postPerPage = 5;
  const lastIndex = currentPage * postPerPage;
  const firstIndex = lastIndex - postPerPage;
  const currentPosts = posts.slice(firstIndex, lastIndex);

  return (
    <div className="articles-container">
      {error ? (
        <Navigate to="*" />
      ) : loading ? (
        <Loader />
      ) : (
        currentPosts.map((post) => <Article data={post} key={post.id} />)
      )}
      <Pagination
        posts={posts}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Articles;
