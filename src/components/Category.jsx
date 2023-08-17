import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAPICall } from "../utility/useAPICall";
import Article from "./Article";
import Loader from "./Loader";
import Pagination from "./Pagination";

const Category = () => {
  const [posts, setPosts] = useState([]);
  const { categoryName } = useParams();
  const [currentCategory, setCurrentCategory] = useState(categoryName);

  let [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    useAPICall("https://dummyjson.com/posts").then((val) => {
      setPosts(val.data.posts);
      setLoading(false);
    });
  }, []);
  const filterPosts = () => {
    let setPosts = posts;
    setPosts = posts.filter((post) =>
      post.tags.toString().includes(categoryName)
    );
    return setPosts;
  };
  if (categoryName !== currentCategory) {
    setCurrentPage(1);
    setCurrentCategory(categoryName);
  }
  const postPerPage = 5;
  const lastIndex = currentPage * postPerPage;
  const firstIndex = lastIndex - postPerPage;
  const currentPost = filterPosts().slice(firstIndex, lastIndex);
  return (
    <Fragment>
      <div className="category-conatianer">
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <h1 className="category-title">Caterory Name: {categoryName}</h1>
            {currentPost.map((post) => (
              <Article data={post} key={post.id} />
            ))}
          </Fragment>
        )}
        <Pagination
          posts={filterPosts()}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </Fragment>
  );
};

export default Category;
