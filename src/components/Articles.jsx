import { useContext, useEffect, useState } from "react";
import { useAPICall } from "../utility/useAPICall";
import Pagination from "./Pagination";
import Article from "./Article";
import Loader from "./Loader";

const Articles = () => {
  let [posts, setPosts] = useState([]);
  let [loading, setLoading] = useState(true);
  let [currentPage, setCurrentPage] = useState(1);
  let error = "";

  useEffect(() => {
    useAPICall("https://dummyjson.com/posts")
      .then((res) => {
        setPosts(res.data.posts);
        setLoading(false);
      })
      .catch((err) => err);
  }, []);

  const postPerPage = 5;
  const lastIndex = currentPage * postPerPage;
  const firstIndex = lastIndex - postPerPage;
  const currentPosts = posts.slice(firstIndex, lastIndex);

  return (
    <div className="articles-container">
      {loading ? (
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
