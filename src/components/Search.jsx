import { useState, useEffect, useContext } from "react";
import { useAPICall } from "../utility/useAPICall";
import { serarchTermContext } from "../context/SearchContext";
import Loader from "./Loader";
import Article from "./Article";
import Pagination from "./Pagination";

const Search = () => {
  let [posts, setPosts] = useState([]);
  let [loading, setLoading] = useState(true);
  let [currentPage, setCurrentPage] = useState(1);
  const { searchTerm } = useContext(serarchTermContext);
  useState;
  useEffect(() => {
    useAPICall("https://dummyjson.com/posts").then((val) => {
      setPosts(val.data.posts);
      setLoading(false);
    });
  }, []);

  const postFilter = () => {
    let filteredPost = [];
    if (searchTerm) {
      filteredPost = posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filteredPost;
  };

  const postPerPage = 5;
  const lastIndex = currentPage * postPerPage;
  const firstIndex = lastIndex - postPerPage;
  const currentPosts = postFilter().slice(firstIndex, lastIndex);

  return (
    <div className="search-container">
      <h1 className="search-title">Searched for: {searchTerm}</h1>
      {loading ? (
        <Loader />
      ) : searchTerm ? (
        currentPosts.length > 0 ? (
          currentPosts.map((post) => <Article data={post} key={post.id} />)
        ) : (
          "No record found"
        )
      ) : (
        "Enter Something to Search"
      )}
      <Pagination
        posts={postFilter()}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Search;
