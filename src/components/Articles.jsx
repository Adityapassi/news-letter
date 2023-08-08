import { useEffect, useState } from "react";
import { useAPICall } from "../utility/useAPICall";
import Pagination from "./Pagination";
import Article from "./Article";
import Loader from "./Loader";

const Articles = () => {
  let [posts, setPosts] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    useAPICall("https://dummyjson.com/posts").then((val) => {
      setPosts(val.data.posts);
      setLoading(false);
    });
  }, []);

  // For Pagination
  // For Getting Current Page number
  console.time("Page");
  const [currentPage, setCurrentPage] = useState(1);
  // setting how much post needed in one page
  const postPerPage = 5;
  // Getting index for the last post
  const indexOfLastPost = currentPage * postPerPage;
  // Getting index for the first post
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  // slicing the post to show on the page
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Changing Page Number
  const pagiante = (num) => {
    // if current page number  >=1 then set the page number to num so that it does not go to page 0 which does not exist
    // Second condition check the total number of pages is no more then the total number of pages
    if (num >= 1 && num <= posts.length / postPerPage) {
      setCurrentPage(num);
    }
  };
  console.timeEnd("Page");

  return (
    <div className="articles-container">
      {loading ? (
        <Loader />
      ) : (
        currentPosts.map((val) => <Article data={val} key={val.id} />)
      )}
      <Pagination
        postPerPage={postPerPage}
        totalPosts={posts.length}
        paginate={pagiante}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Articles;
